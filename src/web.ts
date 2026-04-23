/**
 * Generic content source fetching for content_group tracks.
 *
 * Supported discovery modes:
 *   - sitemap
 *   - sitemap-index
 *   - sitemap-index-template
 *   - rss
 *   - atom
 *
 * Strategy:
 *   - Discover source items (URLs or feed entries)
 *   - Compare with stored state to find new/updated items
 *   - Fetch full pages only when the source/extract mode requires it
 *   - Persist seen item timestamps in digests/web-state.json
 */

import fs from "node:fs";
import path from "node:path";
import type { ContentSource } from "./config.ts";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ContentItem {
  sourceId: string;
  sourceName: string;
  url: string;
  title: string;
  publishedAt: string;
  content: string;
  category: string;
}

interface SourceState {
  lastChecked: string;
  /** url/id → timestamp string (or "seen" if unavailable) */
  seenUrls: Record<string, string>;
}

export interface ContentState {
  sources: Record<string, SourceState>;
}

export interface ContentFetchResult {
  sourceId: string;
  sourceName: string;
  isFirstRun: boolean;
  newItems: ContentItem[];
  totalDiscovered: number;
}

export type WebPageItem = ContentItem;
export type WebState = ContentState;
export type WebFetchResult = ContentFetchResult;

interface DiscoveredUrl {
  loc: string;
  lastmod?: string;
}

interface FeedEntry {
  id: string;
  url: string;
  title: string;
  publishedAt: string;
  content: string;
  category: string;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const MAX_CONTENT_FETCH_FIRST_RUN = 25;
const MAX_CONTENT_LENGTH = 1_500;
const FETCH_DELAY_MS = 300;
const FETCH_TIMEOUT_MS = 20_000;
const FETCH_MAX_RETRIES = 2;
const FETCH_RETRY_BASE_MS = 1_000;
const STATE_FILE = path.join("digests", "web-state.json");

// ---------------------------------------------------------------------------
// HTTP helpers
// ---------------------------------------------------------------------------

const WEB_HEADERS = {
  "User-Agent": "Mozilla/5.0 (compatible; big-model-radar/1.0; +https://github.com/search?q=big_model_radar)",
  Accept: "text/html,application/xml,text/xml,application/rss+xml,application/atom+xml,*/*",
  "Accept-Language": "en-US,en;q=0.9",
};

async function httpGet(url: string): Promise<string> {
  for (let attempt = 0; ; attempt++) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

    try {
      const resp = await fetch(url, { headers: WEB_HEADERS, signal: controller.signal });
      if (!resp.ok) {
        const body = await resp.text();
        if (attempt < FETCH_MAX_RETRIES && isRetryableStatus(resp.status)) {
          const waitMs = getRetryDelayMs(attempt, resp.headers.get("retry-after"));
          console.warn(
            `[content] ${resp.status} for ${url} — retry ${attempt + 1}/${FETCH_MAX_RETRIES} in ${waitMs}ms`,
          );
          await sleep(waitMs);
          continue;
        }

        throw new Error(`HTTP ${resp.status}: ${body.slice(0, 200)}`);
      }

      return await resp.text();
    } catch (error) {
      if (attempt < FETCH_MAX_RETRIES && isRetryableFetchError(error)) {
        const waitMs = getRetryDelayMs(attempt);
        console.warn(
          `[content] Network failure for ${url} — retry ${attempt + 1}/${FETCH_MAX_RETRIES} in ${waitMs}ms: ${formatFetchError(error)}`,
        );
        await sleep(waitMs);
        continue;
      }

      throw error;
    } finally {
      clearTimeout(timer);
    }
  }
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function isRetryableStatus(status: number): boolean {
  return status === 408 || status === 425 || status === 429 || status >= 500;
}

function getRetryDelayMs(attempt: number, retryAfterHeader?: string | null): number {
  const retryAfterSeconds = Number(retryAfterHeader ?? "");
  if (Number.isFinite(retryAfterSeconds) && retryAfterSeconds > 0) {
    return retryAfterSeconds * 1000;
  }
  return FETCH_RETRY_BASE_MS * 2 ** attempt;
}

function formatFetchError(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}

function isRetryableFetchError(error: unknown): boolean {
  const text = error instanceof Error ? `${error.name} ${error.message}` : String(error);
  const lower = text.toLowerCase();

  return (
    lower.includes("abort") ||
    lower.includes("timed out") ||
    lower.includes("network") ||
    lower.includes("fetch failed") ||
    lower.includes("socket") ||
    lower.includes("econnreset") ||
    lower.includes("etimedout") ||
    lower.includes("eai_again")
  );
}

// ---------------------------------------------------------------------------
// XML / HTML parsing helpers
// ---------------------------------------------------------------------------

function decodeEntities(text: string): string {
  return text
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");
}

function stripTags(text: string): string {
  return decodeEntities(text).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function extractTag(block: string, tag: string): string {
  const match = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i"));
  return match?.[1] ? decodeEntities(match[1]).trim() : "";
}

function extractAttribute(block: string, tag: string, attr: string): string {
  const match = block.match(new RegExp(`<${tag}[^>]*${attr}=["']([^"']+)["'][^>]*>`, "i"));
  return match?.[1]?.trim() ?? "";
}

function parseSitemapUrls(xml: string): DiscoveredUrl[] {
  const results: DiscoveredUrl[] = [];
  for (const block of xml.match(/<url>[\s\S]*?<\/url>/g) ?? []) {
    const loc = extractTag(block, "loc");
    const lastmod = extractTag(block, "lastmod");
    if (loc) results.push({ loc, ...(lastmod ? { lastmod } : {}) });
  }
  return results;
}

function parseSitemapIndexUrls(xml: string): string[] {
  const results: string[] = [];
  for (const block of xml.match(/<sitemap>[\s\S]*?<\/sitemap>/g) ?? []) {
    const loc = extractTag(block, "loc");
    if (loc) results.push(loc);
  }
  return results;
}

function isSitemapIndex(xml: string): boolean {
  return /<sitemapindex[\s>]/i.test(xml);
}

function extractTitle(html: string): string {
  return (
    (
      html.match(/<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']{1,200})["']/i)?.[1] ??
      html.match(/<meta[^>]+content=["']([^"']{1,200})["'][^>]+property=["']og:title["']/i)?.[1] ??
      html.match(/<title[^>]*>([^<]{1,200})<\/title>/i)?.[1] ??
      ""
    ).trim()
  );
}

function extractText(html: string): string {
  const source =
    html.match(/<main[^>]*>([\s\S]*?)<\/main>/i)?.[1] ??
    html.match(/<article[^>]*>([\s\S]*?)<\/article>/i)?.[1] ??
    html;

  return stripTags(
    source
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, " ")
      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, " "),
  ).slice(0, MAX_CONTENT_LENGTH);
}

function urlCategory(url: string): string {
  try {
    return new URL(url).pathname.split("/").filter(Boolean)[0] ?? "article";
  } catch {
    return "article";
  }
}

function titleFromUrl(url: string): string {
  try {
    const slug = new URL(url).pathname.split("/").filter(Boolean).pop() ?? "";
    return slug.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  } catch {
    return url;
  }
}

function normalizeDate(value: string): string {
  if (!value) return "";
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? value : parsed.toISOString();
}

function parseFeedEntries(xml: string): FeedEntry[] {
  const itemBlocks = xml.match(/<item>[\s\S]*?<\/item>/gi) ?? [];
  const entryBlocks = xml.match(/<entry[\s\S]*?<\/entry>/gi) ?? [];
  const blocks = itemBlocks.length > 0 ? itemBlocks : entryBlocks;

  return blocks
    .map((block, index): FeedEntry | undefined => {
      const url =
        extractAttribute(block, "link", "href") ||
        extractTag(block, "link") ||
        extractTag(block, "guid") ||
        extractTag(block, "id");
      if (!url) return undefined;

      const title = stripTags(extractTag(block, "title")) || titleFromUrl(url);
      const publishedAt = normalizeDate(
        extractTag(block, "pubDate") ||
          extractTag(block, "published") ||
          extractTag(block, "updated") ||
          extractTag(block, "dc:date"),
      );
      const content = stripTags(
        extractTag(block, "content:encoded") ||
          extractTag(block, "content") ||
          extractTag(block, "summary") ||
          extractTag(block, "description"),
      ).slice(0, MAX_CONTENT_LENGTH);
      const category = stripTags(extractTag(block, "category")) || urlCategory(url);
      const id = extractTag(block, "guid") || extractTag(block, "id") || `${url}#${index}`;

      return { id, url, title, publishedAt, content, category };
    })
    .filter((entry): entry is FeedEntry => Boolean(entry));
}

// ---------------------------------------------------------------------------
// State persistence
// ---------------------------------------------------------------------------

function emptyState(): ContentState {
  return { sources: {} };
}

function isSourceState(value: unknown): value is SourceState {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<SourceState>;
  return typeof candidate.lastChecked === "string" && typeof candidate.seenUrls === "object" && candidate.seenUrls !== null;
}

function normalizeState(raw: unknown): ContentState {
  if (!raw || typeof raw !== "object") return emptyState();

  const candidate = raw as { sources?: unknown };
  if (candidate.sources && typeof candidate.sources === "object") {
    const sources = Object.fromEntries(
      Object.entries(candidate.sources as Record<string, unknown>)
        .filter(([, value]) => isSourceState(value))
        .map(([key, value]) => [key, value as SourceState]),
    ) as Record<string, SourceState>;
    return { sources };
  }

  const legacySources = Object.fromEntries(
    Object.entries(raw as Record<string, unknown>)
      .filter(([, value]) => isSourceState(value))
      .map(([key, value]) => [key, value as SourceState]),
  ) as Record<string, SourceState>;
  return { sources: legacySources };
}

function getSourceState(state: ContentState, sourceId: string): SourceState {
  if (!state.sources[sourceId]) {
    state.sources[sourceId] = { lastChecked: "", seenUrls: {} };
  }
  return state.sources[sourceId]!;
}

export function loadWebState(): ContentState {
  try {
    return normalizeState(JSON.parse(fs.readFileSync(STATE_FILE, "utf-8")) as unknown);
  } catch {
    return emptyState();
  }
}

export function saveWebState(state: ContentState): void {
  fs.mkdirSync(path.dirname(STATE_FILE), { recursive: true });
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2), "utf-8");
}

// ---------------------------------------------------------------------------
// Discovery
// ---------------------------------------------------------------------------

async function discoverSitemapUrls(source: ContentSource): Promise<DiscoveredUrl[]> {
  const { discovery } = source;

  if (discovery.kind === "sitemap") {
    const xml = await httpGet(discovery.url);
    const all = isSitemapIndex(xml) ? [] : parseSitemapUrls(xml);
    if (!discovery.prefixes || discovery.prefixes.length === 0) return all;

    return all.filter(({ loc }) => {
      try {
        return discovery.prefixes?.some((prefix) => new URL(loc).pathname.startsWith(prefix));
      } catch {
        return false;
      }
    });
  }

  if (discovery.kind === "sitemap-index-template") {
    const results: DiscoveredUrl[] = [];
    for (const name of discovery.names) {
      const subUrl = discovery.template.replace("{name}", name);
      try {
        const xml = await httpGet(subUrl);
        results.push(...parseSitemapUrls(xml));
        await sleep(100);
      } catch (err) {
        console.error(`  [content/${source.id}] sub-sitemap "${name}" failed: ${err}`);
      }
    }
    return results;
  }

  const xml = await httpGet(discovery.url);
  const sitemapUrls = parseSitemapIndexUrls(xml).filter((loc) => {
    if (discovery.kind !== "sitemap-index") return true;
    const includes = discovery.includes ?? [];
    const excludes = discovery.excludes ?? [];
    if (includes.length > 0 && !includes.some((part) => loc.includes(part))) return false;
    if (excludes.some((part) => loc.includes(part))) return false;
    return true;
  });

  const results: DiscoveredUrl[] = [];
  for (const sitemapUrl of sitemapUrls) {
    try {
      const subXml = await httpGet(sitemapUrl);
      results.push(...parseSitemapUrls(subXml));
      await sleep(100);
    } catch (err) {
      console.error(`  [content/${source.id}] indexed sitemap failed: ${sitemapUrl} (${err})`);
    }
  }
  return results;
}

async function discoverFeedEntries(source: ContentSource): Promise<FeedEntry[]> {
  if (source.discovery.kind !== "rss" && source.discovery.kind !== "atom") return [];
  const xml = await httpGet(source.discovery.url);
  return parseFeedEntries(xml);
}

// ---------------------------------------------------------------------------
// Item builders
// ---------------------------------------------------------------------------

async function buildSitemapItems(source: ContentSource, entries: DiscoveredUrl[]): Promise<ContentItem[]> {
  const items: ContentItem[] = [];

  if (source.extract.mode === "metadata-only") {
    for (const { loc, lastmod } of entries) {
      items.push({
        sourceId: source.id,
        sourceName: source.name,
        url: loc,
        title: titleFromUrl(loc),
        publishedAt: normalizeDate(lastmod ?? ""),
        content: "",
        category: urlCategory(loc),
      });
    }
    return items;
  }

  for (const { loc, lastmod } of entries) {
    try {
      const html = await httpGet(loc);
      items.push({
        sourceId: source.id,
        sourceName: source.name,
        url: loc,
        title: extractTitle(html) || titleFromUrl(loc),
        publishedAt: normalizeDate(lastmod ?? ""),
        content: extractText(html),
        category: urlCategory(loc),
      });
    } catch (err) {
      console.error(`  [content/${source.id}] Failed to fetch ${loc}: ${err}`);
    }
    await sleep(FETCH_DELAY_MS);
  }

  return items;
}

async function buildFeedItems(source: ContentSource, entries: FeedEntry[]): Promise<ContentItem[]> {
  const items: ContentItem[] = [];

  for (const entry of entries) {
    const shouldFetchPage =
      source.extract.mode === "full-page" ||
      (source.extract.mode === "feed-first" && !entry.content && /^https?:\/\//.test(entry.url));

    let pageTitle = "";
    let pageContent = "";
    if (shouldFetchPage) {
      try {
        const html = await httpGet(entry.url);
        pageTitle = extractTitle(html);
        pageContent = extractText(html);
      } catch (err) {
        console.error(`  [content/${source.id}] Failed to fetch ${entry.url}: ${err}`);
      }
      await sleep(FETCH_DELAY_MS);
    }

    items.push({
      sourceId: source.id,
      sourceName: source.name,
      url: entry.url,
      title: pageTitle || entry.title || titleFromUrl(entry.url),
      publishedAt: entry.publishedAt,
      content: source.extract.mode === "metadata-only" ? entry.content : pageContent || entry.content,
      category: entry.category,
    });
  }

  return items;
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

export async function fetchSiteContent(source: ContentSource, state: ContentState): Promise<ContentFetchResult> {
  const sourceState = getSourceState(state, source.id);
  const isFirstRun = Object.keys(sourceState.seenUrls).length === 0;

  if (source.discovery.kind === "rss" || source.discovery.kind === "atom") {
    console.log(`  [content/${source.id}] Discovering feed entries...`);
    const allEntries = await discoverFeedEntries(source);
    console.log(`  [content/${source.id}] Discovered ${allEntries.length} feed entries`);

    allEntries.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

    const newEntries = allEntries.filter((entry) => {
      const prev = sourceState.seenUrls[entry.id] ?? sourceState.seenUrls[entry.url];
      if (!prev) return true;
      return entry.publishedAt && entry.publishedAt > prev;
    });
    const toFetch = isFirstRun ? newEntries.slice(0, MAX_CONTENT_FETCH_FIRST_RUN) : newEntries;

    console.log(
      `  [content/${source.id}] ${isFirstRun ? "First run" : "Incremental"}: ` +
        `${newEntries.length} new entries, fetching content for ${toFetch.length}`,
    );

    const items = await buildFeedItems(source, toFetch);

    for (const entry of allEntries) {
      const marker = entry.publishedAt || "seen";
      sourceState.seenUrls[entry.id] = marker;
      sourceState.seenUrls[entry.url] = marker;
    }
    sourceState.lastChecked = new Date().toISOString();

    return {
      sourceId: source.id,
      sourceName: source.name,
      isFirstRun,
      newItems: items,
      totalDiscovered: allEntries.length,
    };
  }

  console.log(`  [content/${source.id}] Discovering URLs from ${source.discovery.kind}...`);
  const allDiscovered = await discoverSitemapUrls(source);
  console.log(`  [content/${source.id}] Discovered ${allDiscovered.length} URLs`);

  allDiscovered.sort((a, b) => {
    if (!a.lastmod && !b.lastmod) return 0;
    if (!a.lastmod) return 1;
    if (!b.lastmod) return -1;
    return b.lastmod.localeCompare(a.lastmod);
  });

  const newUrls = allDiscovered.filter(({ loc, lastmod }) => {
    const prev = sourceState.seenUrls[loc];
    if (!prev) return true;
    if (lastmod && lastmod > prev) return true;
    return false;
  });
  const toFetch = isFirstRun ? newUrls.slice(0, MAX_CONTENT_FETCH_FIRST_RUN) : newUrls;

  console.log(
    `  [content/${source.id}] ${isFirstRun ? "First run" : "Incremental"}: ` +
      `${newUrls.length} new URLs, fetching content for ${toFetch.length}`,
  );

  const items = await buildSitemapItems(source, toFetch);

  for (const { loc, lastmod } of allDiscovered) {
    sourceState.seenUrls[loc] = lastmod ?? "seen";
  }
  sourceState.lastChecked = new Date().toISOString();

  return {
    sourceId: source.id,
    sourceName: source.name,
    isFirstRun,
    newItems: items,
    totalDiscovered: allDiscovered.length,
  };
}
