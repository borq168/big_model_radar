/**
 * Big Model Radar: daily digest for AI CLI tools and OpenClaw.
 *
 * Env vars:
 *   OPENAI_API_KEY      - API key for an OpenAI-compatible endpoint
 *   OPENAI_BASE_URL     - Endpoint override (default: https://api.openai.com/v1)
 *   OPENAI_MODEL        - Model name (default: gpt-4.1-mini)
 *   ANTHROPIC_API_KEY   - Backward-compatible alias for OPENAI_API_KEY
 *   ANTHROPIC_BASE_URL  - Backward-compatible alias for OPENAI_BASE_URL
 *   ANTHROPIC_MODEL     - Backward-compatible alias for OPENAI_MODEL
 *   GITHUB_TOKEN        - GitHub token for API access and issue creation
 *   DIGEST_REPO         - owner/repo where digest issues are posted (optional)
 */

import "./env.ts";

import {
  type RepoConfig,
  type GitHubItem,
  type GitHubRelease,
  fetchRecentItems,
  fetchRecentReleases,
  fetchSkillsData,
  createGitHubIssue,
} from "./github.ts";
import {
  type RepoDigest,
  buildCliPrompt,
  buildPeerPrompt,
  buildComparisonPrompt,
  buildPeersComparisonPrompt,
  buildSkillsPrompt,
  buildWebReportPrompt,
  buildTrendingPrompt,
  buildHnPrompt,
} from "./prompts.ts";
import {
  callLlm,
  saveFile,
  autoGenFooter,
  getLlmConfigurationError,
  getLlmRuntimeLabel,
  hasLlmCredentials,
} from "./report.ts";
import { loadWebState, saveWebState, fetchSiteContent, type WebFetchResult, type WebState } from "./web.ts";
import { fetchTrendingData, type TrendingData } from "./trending.ts";
import { fetchHnData, type HnData } from "./hn.ts";
import { loadConfig, type ContentGroupTrack } from "./config.ts";

// ---------------------------------------------------------------------------
// Repo config — loaded from config.yml, falls back to built-in defaults
// ---------------------------------------------------------------------------

const loadedConfig = loadConfig();

const {
  cliRepos: CLI_REPOS,
  skillsRepos: SKILLS_REPOS,
  openclaw: OPENCLAW,
  openclawPeers: OPENCLAW_PEERS,
  contentTracks: CONTENT_TRACKS,
} = loadedConfig;

const CONTENT_SOURCE_ID_COUNTS = CONTENT_TRACKS.flatMap((track) => track.sources.map((source) => source.id)).reduce(
  (map, id) => map.set(id, (map.get(id) ?? 0) + 1),
  new Map<string, number>(),
);

function getContentSourceRuntimeId(trackId: string, sourceId: string): string {
  return (CONTENT_SOURCE_ID_COUNTS.get(sourceId) ?? 0) > 1 ? `${trackId}:${sourceId}` : sourceId;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface RepoFetch {
  cfg: RepoConfig;
  issues: GitHubItem[];
  prs: GitHubItem[];
  releases: GitHubRelease[];
  fetchError?: string;
}

interface SkillsRepoFetch {
  cfg: RepoConfig;
  prs: GitHubItem[];
  issues: GitHubItem[];
  fetchError?: string;
}

type SkillsFetch = SkillsRepoFetch[];

interface ContentTrackFetch {
  track: ContentGroupTrack;
  results: WebFetchResult[];
}

function formatError(err: unknown): string {
  if (err instanceof Error) return err.message;
  return String(err);
}

// ---------------------------------------------------------------------------
// Phase 1: Fetch
// ---------------------------------------------------------------------------

async function fetchAllData(
  since: Date,
  webState: WebState,
): Promise<{
  fetched: RepoFetch[];
  skillsData: SkillsFetch;
  contentResults: ContentTrackFetch[];
  trendingData: TrendingData;
  hnData: HnData;
}> {
  const allConfigs = [...CLI_REPOS, OPENCLAW, ...OPENCLAW_PEERS];
  console.log(
    `  Tracking: ${[
      ...allConfigs.map((r) => r.id),
      ...SKILLS_REPOS.map((r) => r.id),
      ...CONTENT_TRACKS.flatMap((track) => track.sources.map((source) => `content/${track.id}/${source.id}`)),
      "trending",
      "hn",
    ].join(", ")}`,
  );

  const [fetched, skillsData, contentResults, trendingData, hnData] = await Promise.all([
    Promise.all(
      allConfigs.map(async (cfg) => {
        const [issuesResult, prsResult, releasesResult] = await Promise.allSettled([
          fetchRecentItems(cfg, "issues", since),
          fetchRecentItems(cfg, "pulls", since),
          fetchRecentReleases(cfg.repo, since),
        ]);

        const errors: string[] = [];
        const issuesRaw = issuesResult.status === "fulfilled" ? issuesResult.value : [];
        if (issuesResult.status === "rejected") {
          errors.push(`issues: ${formatError(issuesResult.reason)}`);
        }

        const prs = prsResult.status === "fulfilled" ? prsResult.value : [];
        if (prsResult.status === "rejected") {
          errors.push(`pulls: ${formatError(prsResult.reason)}`);
        }

        const releases = releasesResult.status === "fulfilled" ? releasesResult.value : [];
        if (releasesResult.status === "rejected") {
          errors.push(`releases: ${formatError(releasesResult.reason)}`);
        }

        const issues = issuesRaw.filter((i) => !i.pull_request);
        console.log(
          `  [${cfg.id}] issues: ${issues.length}, prs: ${prs.length}, releases: ${releases.length}`,
        );
        if (errors.length > 0) {
          console.error(`  [${cfg.id}] fetch failed partially: ${errors.join(" | ")}`);
        }
        return { cfg, issues, prs, releases, ...(errors.length > 0 ? { fetchError: errors.join(" | ") } : {}) };
      }),
    ),
    Promise.all(
      SKILLS_REPOS.map((cfg) =>
        fetchSkillsData(cfg.repo)
          .then((data): SkillsRepoFetch => {
            console.log(`  [skills/${cfg.id}] prs: ${data.prs.length}, issues: ${data.issues.length}`);
            if (data.fetchError) {
              console.error(`  [skills/${cfg.id}] fetch failed partially: ${data.fetchError}`);
            }
            return { cfg, prs: data.prs, issues: data.issues, ...(data.fetchError ? { fetchError: data.fetchError } : {}) };
          })
          .catch((err): SkillsRepoFetch => {
            const fetchError = formatError(err);
            console.error(`  [skills/${cfg.id}] fetch failed: ${fetchError}`);
            return { cfg, prs: [], issues: [], fetchError };
          }),
      ),
    ),
    CONTENT_TRACKS.length > 0
      ? Promise.all(
          CONTENT_TRACKS.map(async (track): Promise<ContentTrackFetch> => ({
            track,
            results: await Promise.all(
              track.sources.map((source) =>
                fetchSiteContent({ ...source, id: getContentSourceRuntimeId(track.id, source.id) }, webState).catch(
                  (err: unknown): WebFetchResult => {
                    console.error(`  [content/${track.id}/${source.id}] fetch failed: ${err}`);
                    return {
                      sourceId: source.id,
                      sourceName: source.name,
                      isFirstRun: false,
                      newItems: [],
                      totalDiscovered: 0,
                    };
                  },
                ),
              ),
            ),
          })),
        )
      : Promise.resolve([]),
    fetchTrendingData().catch(
      (): TrendingData => ({
        trendingRepos: [],
        searchRepos: [],
        trendingFetchSuccess: false,
      }),
    ),
    fetchHnData().catch((): HnData => ({ stories: [], fetchSuccess: false })),
  ]);

  return { fetched, skillsData, contentResults, trendingData, hnData };
}

// ---------------------------------------------------------------------------
// Phase 2: LLM summaries
// ---------------------------------------------------------------------------

async function generateSummaries(
  fetchedCli: RepoFetch[],
  fetchedOpenclaw: RepoFetch,
  skillsData: SkillsFetch,
  fetchedPeers: RepoFetch[],
  trendingData: TrendingData,
  dateStr: string,
  lang: "zh" | "en" = "zh",
): Promise<{
  cliDigests: RepoDigest[];
  openclawSummary: string;
  skillsSummary: string;
  peerDigests: RepoDigest[];
  trendingSummary: string;
}> {
  const noActivity = lang === "en" ? "No activity in the last 24 hours." : "过去24小时无活动。";
  const fetchFailed =
    lang === "en"
      ? "⚠️ GitHub fetch failed for this project. The report uses partial or missing data."
      : "⚠️ 该项目的 GitHub 数据抓取失败，以下内容基于部分数据或缺失数据。";
  const summaryFailed = lang === "en" ? "⚠️ Summary generation failed." : "⚠️ 摘要生成失败。";
  const skillsFetchFailed =
    lang === "en"
      ? "⚠️ One or more skills repositories failed to fetch. The report uses partial or missing data."
      : "⚠️ 一个或多个 skills 仓库抓取失败，以下内容基于部分数据或缺失数据。";
  const skillsFailed = lang === "en" ? "⚠️ Skills summary generation failed." : "⚠️ Skills 摘要生成失败。";
  const trendingNoData =
    lang === "en"
      ? "⚠️ Trending data unavailable, unable to generate report."
      : "⚠️ 今日趋势数据获取失败，无法生成报告。";
  const trendingFailed = lang === "en" ? "⚠️ Trending report generation failed." : "⚠️ 趋势报告生成失败。";

  const [cliDigests, openclawSummary, skillsSummary, peerDigests, trendingSummary] = await Promise.all([
    Promise.all(
      fetchedCli.map(async ({ cfg, issues, prs, releases, fetchError }): Promise<RepoDigest> => {
        const hasData = issues.length || prs.length || releases.length;
        const fetchNotice = fetchError ? `${fetchFailed}\n\n> ${fetchError}\n\n` : "";
        if (fetchError && !hasData) {
          return {
            config: cfg,
            issues,
            prs,
            releases,
            summary: `${fetchFailed}\n\n> ${fetchError}`,
          };
        }
        if (!hasData) {
          console.log(`  [${cfg.id}] No activity, skipping LLM call`);
          return { config: cfg, issues, prs, releases, summary: noActivity };
        }
        console.log(`  [${cfg.id}] Calling LLM for summary...`);
        try {
          const summary = await callLlm(buildCliPrompt(cfg, issues, prs, releases, dateStr, lang));
          console.log(`  [${cfg.id}] Summary ready.`);
          return { config: cfg, issues, prs, releases, summary: fetchNotice + summary };
        } catch (err) {
          console.error(`  [${cfg.id}] LLM call failed: ${err}`);
          return { config: cfg, issues, prs, releases, summary: summaryFailed };
        }
      }),
    ),
    (async () => {
      const { cfg, issues, prs, releases, fetchError } = fetchedOpenclaw;
      const hasData = issues.length || prs.length || releases.length;
      const fetchNotice = fetchError ? `${fetchFailed}\n\n> ${fetchError}\n\n` : "";
      if (fetchError && !hasData) return `${fetchFailed}\n\n> ${fetchError}`;
      if (!hasData) {
        console.log(`  [openclaw] No activity, skipping LLM call`);
        return noActivity;
      }
      console.log(`  [openclaw] Calling LLM for OpenClaw report...`);
      try {
        const summary = await callLlm(buildPeerPrompt(cfg, issues, prs, releases, dateStr, 50, 30, lang));
        console.log("  [openclaw] Summary ready.");
        return fetchNotice + summary;
      } catch (err) {
        console.error(`  [openclaw] LLM call failed: ${err}`);
        return summaryFailed;
      }
    })(),
    (async () => {
      const hasData = skillsData.some((repo) => repo.prs.length > 0 || repo.issues.length > 0);
      const fetchErrors = skillsData.filter((repo) => repo.fetchError);
      const fetchNotice =
        fetchErrors.length > 0
          ? `${skillsFetchFailed}\n\n${fetchErrors
              .map((repo) => `> ${repo.cfg.name}: ${repo.fetchError}`)
              .join("\n")}\n\n`
          : "";
      if (fetchErrors.length > 0 && !hasData) return `${skillsFetchFailed}\n\n${fetchErrors.map((repo) => `> ${repo.cfg.name}: ${repo.fetchError}`).join("\n")}`;
      console.log("  [skills] Calling LLM for skills report...");
      try {
        const summary = await callLlm(
          buildSkillsPrompt(
            skillsData.map((repo) => ({ config: repo.cfg, prs: repo.prs, issues: repo.issues })),
            dateStr,
            lang,
          ),
        );
        console.log("  [skills] Summary ready.");
        return fetchNotice + summary;
      } catch (err) {
        console.error(`  [skills] LLM call failed: ${err}`);
        return skillsFailed;
      }
    })(),
    Promise.all(
      fetchedPeers.map(async ({ cfg, issues, prs, releases, fetchError }): Promise<RepoDigest> => {
        const hasData = issues.length || prs.length || releases.length;
        const fetchNotice = fetchError ? `${fetchFailed}\n\n> ${fetchError}\n\n` : "";
        if (fetchError && !hasData) {
          return {
            config: cfg,
            issues,
            prs,
            releases,
            summary: `${fetchFailed}\n\n> ${fetchError}`,
          };
        }
        if (!hasData) {
          console.log(`  [${cfg.id}] No activity, skipping LLM call`);
          return { config: cfg, issues, prs, releases, summary: noActivity };
        }
        console.log(`  [${cfg.id}] Calling LLM for peer summary...`);
        try {
          const summary = await callLlm(buildPeerPrompt(cfg, issues, prs, releases, dateStr, undefined, undefined, lang));
          console.log(`  [${cfg.id}] Peer summary ready.`);
          return {
            config: cfg,
            issues,
            prs,
            releases,
            summary: fetchNotice + summary,
          };
        } catch (err) {
          console.error(`  [${cfg.id}] LLM call failed: ${err}`);
          return { config: cfg, issues, prs, releases, summary: summaryFailed };
        }
      }),
    ),
    (async () => {
      const hasData = trendingData.trendingRepos.length > 0 || trendingData.searchRepos.length > 0;
      if (!hasData) return trendingNoData;
      console.log("  [trending] Calling LLM for trending report...");
      try {
        const summary = await callLlm(buildTrendingPrompt(trendingData, dateStr, lang), 6144);
        console.log("  [trending] Summary ready.");
        return summary;
      } catch (err) {
        console.error(`  [trending] LLM call failed: ${err}`);
        return trendingFailed;
      }
    })(),
  ]);

  return { cliDigests, openclawSummary, skillsSummary, peerDigests, trendingSummary };
}

// ---------------------------------------------------------------------------
// Report content builders
// ---------------------------------------------------------------------------

function buildCliReportContent(
  cliDigests: RepoDigest[],
  comparison: string,
  utcStr: string,
  dateStr: string,
  footer: string,
  lang: "zh" | "en" = "zh",
): string {
  const repoLinks = cliDigests
    .map((d) => d.config)
    .map((repo) => `- [${repo.name}](https://github.com/${repo.repo})`)
    .join("\n");

  const t =
    lang === "en"
      ? {
          title: `# AI CLI Tools Community Digest ${dateStr}\n\n`,
          meta: `> Generated: ${utcStr} UTC | Tools covered: ${cliDigests.length}\n\n`,
          comparison: `## Cross-Tool Comparison\n\n`,
          detail: `## Per-Tool Reports\n\n`,
        }
      : {
          title: `# AI CLI 工具社区动态日报 ${dateStr}\n\n`,
          meta: `> 生成时间: ${utcStr} UTC | 覆盖工具: ${cliDigests.length} 个\n\n`,
          comparison: `## 横向对比\n\n`,
          detail: `## 各工具详细报告\n\n`,
        };

  const toolSections = cliDigests
    .map((d) =>
      [
        `<details>`,
        `<summary><strong>${d.config.name}</strong> — <a href="https://github.com/${d.config.repo}">${d.config.repo}</a></summary>`,
        ``,
        d.summary,
        ``,
        `</details>`,
      ].join("\n"),
    )
    .join("\n\n");

  return (
    t.title +
    t.meta +
    `${repoLinks}\n\n` +
    `---\n\n` +
    t.comparison +
    comparison +
    `\n\n---\n\n` +
    t.detail +
    toolSections +
    footer
  );
}

function buildSkillsReportContent(
  skillsRepos: RepoConfig[],
  skillsSummary: string,
  utcStr: string,
  dateStr: string,
  footer: string,
  lang: "zh" | "en" = "zh",
): string {
  const repoLinks = skillsRepos.map((repo) => `- [${repo.name}](https://github.com/${repo.repo})`).join("\n");

  const t =
    lang === "en"
      ? {
          title: `# Skills Ecosystem Highlights ${dateStr}\n\n`,
          meta: `> Generated: ${utcStr} UTC | Repositories covered: ${skillsRepos.length}\n\n`,
          sources: `Sources:\n`,
        }
      : {
          title: `# Skills 生态热点 ${dateStr}\n\n`,
          meta: `> 生成时间: ${utcStr} UTC | 覆盖仓库: ${skillsRepos.length} 个\n\n`,
          sources: `数据来源:\n`,
        };

  return t.title + t.meta + t.sources + repoLinks + `\n\n---\n\n` + skillsSummary + footer;
}

function buildOpenclawReportContent(
  fetchedOpenclaw: RepoFetch,
  peerDigests: RepoDigest[],
  openclawSummary: string,
  peersComparison: string,
  utcStr: string,
  dateStr: string,
  footer: string,
  lang: "zh" | "en" = "zh",
): string {
  const { issues, prs } = fetchedOpenclaw;

  const peersRepoLinks =
    `- [OpenClaw](https://github.com/${OPENCLAW.repo})\n` +
    OPENCLAW_PEERS.map((p) => `- [${p.name}](https://github.com/${p.repo})`).join("\n");

  const peerDetailSections = peerDigests
    .map((d) =>
      [
        `<details>`,
        `<summary><strong>${d.config.name}</strong> — <a href="https://github.com/${d.config.repo}">${d.config.repo}</a></summary>`,
        ``,
        d.summary,
        ``,
        `</details>`,
      ].join("\n"),
    )
    .join("\n\n");

  const t =
    lang === "en"
      ? {
          title: `# OpenClaw Ecosystem Digest ${dateStr}\n\n`,
          meta: `> Issues: ${issues.length} | PRs: ${prs.length} | Projects covered: ${1 + OPENCLAW_PEERS.length} | Generated: ${utcStr} UTC\n\n`,
          deepDive: `## OpenClaw Deep Dive\n\n`,
          comparison: `## Cross-Ecosystem Comparison\n\n`,
          peers: `## Peer Project Reports\n\n`,
        }
      : {
          title: `# OpenClaw 生态日报 ${dateStr}\n\n`,
          meta: `> Issues: ${issues.length} | PRs: ${prs.length} | 覆盖项目: ${1 + OPENCLAW_PEERS.length} 个 | 生成时间: ${utcStr} UTC\n\n`,
          deepDive: `## OpenClaw 项目深度报告\n\n`,
          comparison: `## 横向生态对比\n\n`,
          peers: `## 同赛道项目详细报告\n\n`,
        };

  return (
    t.title +
    t.meta +
    `${peersRepoLinks}\n\n` +
    `---\n\n` +
    t.deepDive +
    openclawSummary +
    `\n\n---\n\n` +
    t.comparison +
    peersComparison +
    `\n\n---\n\n` +
    t.peers +
    peerDetailSections +
    footer
  );
}

// ---------------------------------------------------------------------------
// Report savers (LLM call + file save + optional GitHub issue)
// ---------------------------------------------------------------------------

async function saveContentReport(
  track: ContentGroupTrack,
  webResults: WebFetchResult[],
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: "zh" | "en" = "zh",
): Promise<void> {
  if (track.sources.length === 0) {
    console.log(`  [content/${track.id}/${lang}] No content_group sources configured, skipping report.`);
    return;
  }

  const hasNewContent = webResults.some((r) => r.newItems.length > 0);
  const reportBaseId = track.id;
  const reportLabel = track.report?.label ?? track.id;
  const reportTitle = lang === "en" ? track.report?.titleEn ?? track.name : track.report?.titleZh ?? track.name;

  if (hasNewContent) {
    console.log(`  [content/${track.id}/${lang}] Calling LLM for content report...`);
    try {
      const webSummary = await callLlm(buildWebReportPrompt(webResults, dateStr, lang), 8192);
      const isFirstRun = webResults.some((r) => r.isFirstRun);
      const totalNew = webResults.reduce((sum, r) => sum + r.newItems.length, 0);

      const fileName = lang === "en" ? `${reportBaseId}-en.md` : `${reportBaseId}.md`;
      const sourceLines = webResults
        .map((result) =>
          lang === "en"
            ? `- ${result.sourceName} — ${result.newItems.length} new item(s) (discovered total: ${result.totalDiscovered})`
            : `- ${result.sourceName} — 新增 ${result.newItems.length} 条（共发现 ${result.totalDiscovered} 条）`,
        )
        .join("\n");

      const t =
        lang === "en"
          ? {
              mode: isFirstRun ? "First full crawl" : "Today's update",
              title: `# ${reportTitle} ${dateStr}\n\n`,
              meta: `> ${isFirstRun ? "First full crawl" : "Today's update"} | New content: ${totalNew} articles | Generated: ${utcStr} UTC\n\n`,
              sources: `Sources:\n${sourceLines}\n\n`,
            }
          : {
              mode: isFirstRun ? "首次全量" : "今日更新",
              title: `# ${reportTitle} ${dateStr}\n\n`,
              meta: `> ${isFirstRun ? "首次全量" : "今日更新"} | 新增内容: ${totalNew} 篇 | 生成时间: ${utcStr} UTC\n\n`,
              sources: `数据来源:\n${sourceLines}\n\n`,
            };

      const webContent = t.title + t.meta + t.sources + `---\n\n` + webSummary + footer;

      console.log(`  Saved ${saveFile(webContent, dateStr, fileName)}`);

      if (digestRepo) {
        const webTitle =
          lang === "en"
            ? `🌐 ${reportTitle} ${dateStr}${isFirstRun ? " (First Crawl)" : ""}`
            : `🌐 ${reportTitle} ${dateStr}${isFirstRun ? "（首次全量）" : ""}`;
        const webLabel = lang === "en" ? `${reportLabel}-en` : reportLabel;
        const webUrl = await createGitHubIssue(webTitle, webContent, webLabel);
        console.log(`  Created content issue (${track.id}/${lang}): ${webUrl}`);
      }
    } catch (err) {
      console.error(`  [content/${track.id}/${lang}] Report generation failed: ${err}`);
    }
  } else {
    console.log(`  [content/${track.id}/${lang}] No new content detected, skipping report.`);
  }
}

async function saveTrendingReport(
  trendingData: TrendingData,
  trendingSummary: string,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: "zh" | "en" = "zh",
): Promise<void> {
  const hasData = trendingData.trendingRepos.length > 0 || trendingData.searchRepos.length > 0;
  if (!hasData) {
    console.log(`  [trending/${lang}] No data available, skipping report.`);
    return;
  }

  const fileName = lang === "en" ? "ai-trending-en.md" : "ai-trending.md";
  const header =
    lang === "en"
      ? `# AI Open Source Trends ${dateStr}\n\n> Sources: GitHub Trending + GitHub Search API | Generated: ${utcStr} UTC\n\n---\n\n`
      : `# AI 开源趋势日报 ${dateStr}\n\n> 数据来源: GitHub Trending + GitHub Search API | 生成时间: ${utcStr} UTC\n\n---\n\n`;

  const trendingContent = header + trendingSummary + footer;

  console.log(`  Saved ${saveFile(trendingContent, dateStr, fileName)}`);

  if (digestRepo) {
    const trendingTitle =
      lang === "en" ? `📈 AI Open Source Trends ${dateStr}` : `📈 AI 开源趋势日报 ${dateStr}`;
    const trendingLabel = lang === "en" ? "trending-en" : "trending";
    const trendingUrl = await createGitHubIssue(trendingTitle, trendingContent, trendingLabel);
    console.log(`  Created trending issue (${lang}): ${trendingUrl}`);
  }
}

async function saveHnReport(
  hnData: HnData,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: "zh" | "en" = "zh",
): Promise<void> {
  if (!hnData.fetchSuccess) {
    console.log(`  [hn/${lang}] No data available, skipping report.`);
    return;
  }

  console.log(`  [hn/${lang}] Calling LLM for HN report...`);
  try {
    const hnSummary = await callLlm(buildHnPrompt(hnData, dateStr, lang));
    const fileName = lang === "en" ? "ai-hn-en.md" : "ai-hn.md";
    const header =
      lang === "en"
        ? `# Hacker News AI Community Digest ${dateStr}\n\n` +
          `> Source: [Hacker News](https://news.ycombinator.com/) | ` +
          `${hnData.stories.length} stories | Generated: ${utcStr} UTC\n\n` +
          `---\n\n`
        : `# Hacker News AI 社区动态日报 ${dateStr}\n\n` +
          `> 数据来源: [Hacker News](https://news.ycombinator.com/) | ` +
          `共 ${hnData.stories.length} 条 | 生成时间: ${utcStr} UTC\n\n` +
          `---\n\n`;

    const hnContent = header + hnSummary + footer;

    console.log(`  Saved ${saveFile(hnContent, dateStr, fileName)}`);

    if (digestRepo) {
      const hnTitle =
        lang === "en" ? `📰 Hacker News AI Digest ${dateStr}` : `📰 Hacker News AI 社区动态日报 ${dateStr}`;
      const hnLabel = lang === "en" ? "hn-en" : "hn";
      const hnUrl = await createGitHubIssue(hnTitle, hnContent, hnLabel);
      console.log(`  Created HN issue (${lang}): ${hnUrl}`);
    }
  } catch (err) {
    console.error(`  [hn/${lang}] Report generation failed: ${err}`);
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  requireEnv("GITHUB_TOKEN");
  if (!hasLlmCredentials()) {
    throw new Error(getLlmConfigurationError());
  }

  const now = new Date();
  const since = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  const dateStr = new Date(now.getTime() + 8 * 60 * 60 * 1000).toISOString().slice(0, 10);
  const utcStr = now.toISOString().slice(0, 16).replace("T", " ");
  const digestRepo = process.env["DIGEST_REPO"] ?? "";

  console.log(`[${now.toISOString()}] Starting digest | llm: ${getLlmRuntimeLabel()}`);

  const langs = (process.env["REPORT_LANGS"] ?? "zh")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter((s) => s === "zh" || s === "en");
  const enabledLangs = langs.length > 0 ? langs : ["zh"];
  const genZh = enabledLangs.includes("zh");
  const genEn = enabledLangs.includes("en");
  console.log(`  Languages: ${enabledLangs.join(", ")}`);

  // 1. Fetch all data in parallel
  const webState = loadWebState();
  const { fetched, skillsData, contentResults, trendingData, hnData } = await fetchAllData(since, webState);

  const peerIds = new Set(OPENCLAW_PEERS.map((p) => p.id));
  const fetchedCli = fetched.filter((f) => f.cfg.id !== OPENCLAW.id && !peerIds.has(f.cfg.id));
  const fetchedOpenclaw = fetched.find((f) => f.cfg.id === OPENCLAW.id)!;
  const fetchedPeers = fetched.filter((f) => peerIds.has(f.cfg.id));

  // 2. Generate per-repo LLM summaries per language
  let zhSummaries: Awaited<ReturnType<typeof generateSummaries>> | undefined;
  let enSummaries: Awaited<ReturnType<typeof generateSummaries>> | undefined;
  await Promise.all([
    genZh
      ? generateSummaries(
          fetchedCli,
          fetchedOpenclaw,
          skillsData,
          fetchedPeers,
          trendingData,
          dateStr,
          "zh",
        ).then((r) => (zhSummaries = r))
      : Promise.resolve(),
    genEn
      ? generateSummaries(
          fetchedCli,
          fetchedOpenclaw,
          skillsData,
          fetchedPeers,
          trendingData,
          dateStr,
          "en",
        ).then((r) => (enSummaries = r))
      : Promise.resolve(),
  ]);

  // 3. Generate cross-repo comparisons per language
  let comparison = "";
  let peersComparison = "";
  let enComparison = "";
  let enPeersComparison = "";
  if (genZh && zhSummaries) {
    const openclawDigest: RepoDigest = {
      config: OPENCLAW,
      issues: fetchedOpenclaw.issues,
      prs: fetchedOpenclaw.prs,
      releases: fetchedOpenclaw.releases,
      summary: zhSummaries.openclawSummary,
    };
    [comparison, peersComparison] = await Promise.all([
      callLlm(buildComparisonPrompt(zhSummaries.cliDigests, dateStr, "zh")),
      callLlm(buildPeersComparisonPrompt(openclawDigest, zhSummaries.peerDigests, dateStr, "zh")),
    ]);
  }
  if (genEn && enSummaries) {
    const enOpenclawDigest: RepoDigest = {
      config: OPENCLAW,
      issues: fetchedOpenclaw.issues,
      prs: fetchedOpenclaw.prs,
      releases: fetchedOpenclaw.releases,
      summary: enSummaries.openclawSummary,
    };
    [enComparison, enPeersComparison] = await Promise.all([
      callLlm(buildComparisonPrompt(enSummaries.cliDigests, dateStr, "en")),
      callLlm(buildPeersComparisonPrompt(enOpenclawDigest, enSummaries.peerDigests, dateStr, "en")),
    ]);
  }

  const footer = autoGenFooter("zh");
  const enFooter = autoGenFooter("en");

  // 4. Build + save all reports
  if (genZh && zhSummaries) {
    const digestContent = buildCliReportContent(
      zhSummaries.cliDigests,
      comparison,
      utcStr,
      dateStr,
      footer,
      "zh",
    );
    const skillsContent = buildSkillsReportContent(SKILLS_REPOS, zhSummaries.skillsSummary, utcStr, dateStr, footer, "zh");
    const openclawContent = buildOpenclawReportContent(
      fetchedOpenclaw,
      zhSummaries.peerDigests,
      zhSummaries.openclawSummary,
      peersComparison,
      utcStr,
      dateStr,
      footer,
      "zh",
    );
    console.log(`  Saved ${saveFile(digestContent, dateStr, "ai-cli.md")}`);
    console.log(`  Saved ${saveFile(skillsContent, dateStr, "ai-skills.md")}`);
    console.log(`  Saved ${saveFile(openclawContent, dateStr, "ai-agents.md")}`);
    if (digestRepo) {
      const cliUrl = await createGitHubIssue(
        `📊 AI CLI 工具社区动态日报 ${dateStr}`,
        digestContent,
        "digest",
      );
      console.log(`  Created CLI issue (zh): ${cliUrl}`);
      const skillsUrl = await createGitHubIssue(
        `🧩 Skills 生态热点 ${dateStr}`,
        skillsContent,
        "skills",
      );
      console.log(`  Created Skills issue (zh): ${skillsUrl}`);
      const openclawUrl = await createGitHubIssue(
        `🦞 OpenClaw 生态日报 ${dateStr}`,
        openclawContent,
        "openclaw",
      );
      console.log(`  Created OpenClaw issue (zh): ${openclawUrl}`);
    }
  }
  if (genEn && enSummaries) {
    const enDigestContent = buildCliReportContent(
      enSummaries.cliDigests,
      enComparison,
      utcStr,
      dateStr,
      enFooter,
      "en",
    );
    const enSkillsContent = buildSkillsReportContent(
      SKILLS_REPOS,
      enSummaries.skillsSummary,
      utcStr,
      dateStr,
      enFooter,
      "en",
    );
    const enOpenclawContent = buildOpenclawReportContent(
      fetchedOpenclaw,
      enSummaries.peerDigests,
      enSummaries.openclawSummary,
      enPeersComparison,
      utcStr,
      dateStr,
      enFooter,
      "en",
    );
    console.log(`  Saved ${saveFile(enDigestContent, dateStr, "ai-cli-en.md")}`);
    console.log(`  Saved ${saveFile(enSkillsContent, dateStr, "ai-skills-en.md")}`);
    console.log(`  Saved ${saveFile(enOpenclawContent, dateStr, "ai-agents-en.md")}`);
    if (digestRepo) {
      const cliEnUrl = await createGitHubIssue(
        `📊 AI CLI Tools Digest ${dateStr}`,
        enDigestContent,
        "digest-en",
      );
      console.log(`  Created CLI issue (en): ${cliEnUrl}`);
      const skillsEnUrl = await createGitHubIssue(
        `🧩 Skills Ecosystem Highlights ${dateStr}`,
        enSkillsContent,
        "skills-en",
      );
      console.log(`  Created Skills issue (en): ${skillsEnUrl}`);
      const openclawEnUrl = await createGitHubIssue(
        `🦞 OpenClaw Ecosystem Digest ${dateStr}`,
        enOpenclawContent,
        "openclaw-en",
      );
      console.log(`  Created OpenClaw issue (en): ${openclawEnUrl}`);
    }
  }

  await Promise.all([
    ...contentResults.map((contentTrack) =>
      genZh
        ? saveContentReport(contentTrack.track, contentTrack.results, utcStr, dateStr, digestRepo, footer, "zh")
        : Promise.resolve(),
    ),
    ...contentResults.map((contentTrack) =>
      genEn
        ? saveContentReport(contentTrack.track, contentTrack.results, utcStr, dateStr, digestRepo, enFooter, "en")
        : Promise.resolve(),
    ),
  ]);

  if (contentResults.length > 0) {
    saveWebState(webState);
    console.log("  [content] State saved.");
  }

  await Promise.all([
    genZh && zhSummaries
      ? saveTrendingReport(
          trendingData,
          zhSummaries.trendingSummary,
          utcStr,
          dateStr,
          digestRepo,
          footer,
          "zh",
        )
      : Promise.resolve(),
    genEn && enSummaries
      ? saveTrendingReport(
          trendingData,
          enSummaries.trendingSummary,
          utcStr,
          dateStr,
          digestRepo,
          enFooter,
          "en",
        )
      : Promise.resolve(),
    genZh ? saveHnReport(hnData, utcStr, dateStr, digestRepo, footer, "zh") : Promise.resolve(),
    genEn ? saveHnReport(hnData, utcStr, dateStr, digestRepo, enFooter, "en") : Promise.resolve(),
  ]);

  console.log("Done!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
