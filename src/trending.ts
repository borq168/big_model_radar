/**
 * GitHub trending and AI topic search data fetching.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface TrendingRepo {
  fullName: string;
  description: string;
  language: string;
  todayStars: number;
  totalStars: number;
  forks: number;
  url: string;
}

export interface SearchRepo {
  fullName: string;
  description: string | null;
  language: string | null;
  stargazersCount: number;
  pushedAt: string;
  url: string;
  searchQuery: string;
}

export interface TrendingData {
  trendingRepos: TrendingRepo[];
  searchRepos: SearchRepo[];
  trendingFetchSuccess: boolean;
}

interface RetryRequestInit extends RequestInit {
  timeoutMs?: number;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const SEARCH_QUERIES = [
  { q: "topic:llm", label: "llm" },
  { q: "topic:ai-agent", label: "ai-agent" },
  { q: "topic:rag", label: "rag" },
  { q: "topic:vector-database", label: "vector-db" },
  { q: "topic:large-language-model", label: "llm-model" },
  { q: "topic:machine-learning", label: "ml" },
];

const FETCH_TIMEOUT_MS = 15_000;
const FETCH_MAX_RETRIES = 2;
const FETCH_RETRY_BASE_MS = 1_000;

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
        console.warn(`  [trending] ${response.status} for ${url} — retry ${attempt + 1}/${FETCH_MAX_RETRIES} in ${waitMs}ms`);
        await sleep(waitMs);
        continue;
      }

      return response;
    } catch (error) {
      if (attempt < FETCH_MAX_RETRIES && isRetryableFetchError(error)) {
        const waitMs = getRetryDelayMs(attempt);
        console.warn(
          `  [trending] Network failure for ${url} — retry ${attempt + 1}/${FETCH_MAX_RETRIES} in ${waitMs}ms: ${formatFetchError(error)}`,
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
// GitHub Trending HTML fetch
// ---------------------------------------------------------------------------

async function fetchGitHubTrending(): Promise<{ repos: TrendingRepo[]; success: boolean }> {
  try {
    const resp = await fetchWithRetry("https://github.com/trending?since=daily&spoken_language_code=", {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; big-model-radar/1.0)",
        Accept: "text/html",
      },
    });
    if (!resp.ok) {
      console.error(`  [trending] HTTP ${resp.status} fetching github.com/trending`);
      return { repos: [], success: false };
    }

    const html = await resp.text();
    const repos: TrendingRepo[] = [];

    // Split by article blocks
    const articlePattern =
      /<article[^>]*class="[^"]*Box-row[^"]*"[\s\S]*?(?=<article[^>]*class="[^"]*Box-row[^"]*"|$)/g;
    const blocks = html.match(articlePattern) ?? [];

    for (const block of blocks) {
      try {
        // fullName from <h2> > <a href="/owner/repo">
        const nameMatch = block.match(/<h2[^>]*>[\s\S]*?<a[^>]+href="\/([^/"]+\/[^/"]+)"/);
        if (!nameMatch?.[1]) continue;
        const fullName = nameMatch[1].trim();

        // description from col-9 paragraph
        const descMatch = block.match(/<p[^>]*class="[^"]*col-9[^"]*"[^>]*>([\s\S]*?)<\/p>/);
        const description = descMatch?.[1] ? descMatch[1].replace(/<[^>]+>/g, "").trim() : "";

        // language
        const langMatch = block.match(/<span[^>]+itemprop="programmingLanguage"[^>]*>([\s\S]*?)<\/span>/);
        const language = langMatch?.[1] ? langMatch[1].replace(/<[^>]+>/g, "").trim() : "";

        // today stars
        const todayMatch = block.match(/([\d,]+)\s+stars?\s+today/i);
        const todayStars = todayMatch?.[1] ? parseInt(todayMatch[1].replace(/,/g, ""), 10) : 0;

        // total stars — look for link with /stargazers
        const totalMatch = block.match(/href="\/[^"]+\/stargazers"[^>]*>\s*<[^>]+>\s*([\d,]+)/);
        const totalStars = totalMatch?.[1] ? parseInt(totalMatch[1].replace(/,/g, ""), 10) : 0;

        // forks
        const forkMatch = block.match(/href="\/[^"]+\/forks"[^>]*>\s*<[^>]+>\s*([\d,]+)/);
        const forks = forkMatch?.[1] ? parseInt(forkMatch[1].replace(/,/g, ""), 10) : 0;

        repos.push({
          fullName,
          description,
          language,
          todayStars,
          totalStars,
          forks,
          url: `https://github.com/${fullName}`,
        });
      } catch {
        // single block parse failure is non-fatal
      }
    }

    if (repos.length === 0) {
      console.error("  [trending] Parsed 0 repos — HTML structure may have changed");
      return { repos: [], success: false };
    }

    console.log(`  [trending] Parsed ${repos.length} trending repos from HTML`);
    return { repos, success: true };
  } catch (err) {
    console.error(`  [trending] Fetch failed: ${err}`);
    return { repos: [], success: false };
  }
}

// ---------------------------------------------------------------------------
// GitHub Search API
// ---------------------------------------------------------------------------

interface SearchApiItem {
  full_name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
  html_url: string;
}

interface SearchApiResponse {
  items: SearchApiItem[];
}

async function searchAiRepos(sevenDaysAgo: string): Promise<SearchRepo[]> {
  const token = process.env["GITHUB_TOKEN"] ?? "";
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const seen = new Set<string>();
  const all: SearchRepo[] = [];

  await Promise.all(
    SEARCH_QUERIES.map(async ({ q, label }) => {
      try {
        const query = `${q}+pushed:>${sevenDaysAgo}&sort=stars&order=desc`;
        const url = `https://api.github.com/search/repositories?q=${query}&per_page=15`;
        const resp = await fetchWithRetry(url, { headers });
        if (!resp.ok) {
          console.error(`  [trending/search] "${label}": HTTP ${resp.status}`);
          return;
        }
        const data = (await resp.json()) as SearchApiResponse;
        let added = 0;
        for (const item of data.items ?? []) {
          if (!seen.has(item.full_name)) {
            seen.add(item.full_name);
            all.push({
              fullName: item.full_name,
              description: item.description,
              language: item.language,
              stargazersCount: item.stargazers_count,
              pushedAt: item.pushed_at,
              url: item.html_url,
              searchQuery: label,
            });
            added++;
          }
        }
        console.log(`  [trending/search] "${label}": ${added} new repos`);
      } catch (err) {
        console.error(`  [trending/search] "${label}": ${err}`);
      }
    }),
  );

  return all;
}

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export async function fetchTrendingData(): Promise<TrendingData> {
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

  const [{ repos: trendingRepos, success }, searchRepos] = await Promise.all([
    fetchGitHubTrending(),
    searchAiRepos(sevenDaysAgo),
  ]);

  return { trendingRepos, searchRepos, trendingFetchSuccess: success };
}
