/**
 * Hacker News AI stories fetched via the Algolia HN Search API.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface HnStory {
  id: string;
  title: string;
  url: string; // external URL, or HN discussion link if no external URL
  hnUrl: string; // always the HN discussion link
  points: number;
  comments: number;
  author: string;
  createdAt: string;
}

export interface HnData {
  stories: HnStory[];
  fetchSuccess: boolean;
}

interface RetryRequestInit extends RequestInit {
  timeoutMs?: number;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const HN_TOP_STORIES = 30;
const FETCH_TIMEOUT_MS = 15_000;
const FETCH_MAX_RETRIES = 2;
const FETCH_RETRY_BASE_MS = 1_000;

/** Queries run in parallel; results are deduped by story ID. */
const QUERIES = ["AI", "LLM", "Claude", "OpenAI", "Anthropic", "machine learning"];

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

async function fetchWithRetry(url: string, init: RetryRequestInit = {}): Promise<Response> {
  const { timeoutMs = FETCH_TIMEOUT_MS, ...requestInit } = init;

  for (let attempt = 0; ; attempt++) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const response = await fetch(url, { ...requestInit, signal: controller.signal });
      if (response.ok) return response;

      if (attempt < FETCH_MAX_RETRIES && isRetryableStatus(response.status)) {
        const waitMs = getRetryDelayMs(attempt, response.headers.get("retry-after"));
        console.warn(`  [hn] ${response.status} for ${url} — retry ${attempt + 1}/${FETCH_MAX_RETRIES} in ${waitMs}ms`);
        await sleep(waitMs);
        continue;
      }

      return response;
    } catch (error) {
      if (attempt < FETCH_MAX_RETRIES && isRetryableFetchError(error)) {
        const waitMs = getRetryDelayMs(attempt);
        console.warn(
          `  [hn] Network failure for ${url} — retry ${attempt + 1}/${FETCH_MAX_RETRIES} in ${waitMs}ms: ${formatFetchError(error)}`,
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

// ---------------------------------------------------------------------------
// Algolia API types
// ---------------------------------------------------------------------------

interface AlgoliaHit {
  objectID: string;
  title: string;
  url?: string;
  points: number;
  num_comments: number;
  author: string;
  created_at: string;
}

interface AlgoliaResponse {
  hits: AlgoliaHit[];
}

// ---------------------------------------------------------------------------
// Fetch
// ---------------------------------------------------------------------------

export async function fetchHnData(): Promise<HnData> {
  const since = Math.floor((Date.now() - 24 * 60 * 60 * 1000) / 1000);
  const seen = new Map<string, HnStory>();

  try {
    await Promise.all(
      QUERIES.map(async (q) => {
        try {
          const url =
            `https://hn.algolia.com/api/v1/search_by_date` +
            `?tags=story` +
            `&query=${encodeURIComponent(q)}` +
            `&numericFilters=created_at_i>${since}` +
            `&hitsPerPage=30`;
          const resp = await fetchWithRetry(url, {
            headers: { "User-Agent": "big-model-radar/1.0" },
          });
          if (!resp.ok) {
            console.error(`  [hn] "${q}": HTTP ${resp.status}`);
            return;
          }
          const data = (await resp.json()) as AlgoliaResponse;
          for (const hit of data.hits ?? []) {
            if (!seen.has(hit.objectID)) {
              const hnUrl = `https://news.ycombinator.com/item?id=${hit.objectID}`;
              seen.set(hit.objectID, {
                id: hit.objectID,
                title: hit.title,
                url: hit.url ?? hnUrl,
                hnUrl,
                points: hit.points ?? 0,
                comments: hit.num_comments ?? 0,
                author: hit.author,
                createdAt: hit.created_at,
              });
            }
          }
        } catch (err) {
          console.error(`  [hn] "${q}": ${err}`);
        }
      }),
    );

    const stories = [...seen.values()].sort((a, b) => b.points - a.points).slice(0, HN_TOP_STORIES);

    console.log(`  [hn] ${stories.length} stories (from ${seen.size} unique)`);
    return { stories, fetchSuccess: stories.length > 0 };
  } catch (err) {
    console.error(`  [hn] fetch failed: ${err}`);
    return { stories: [], fetchSuccess: false };
  }
}
