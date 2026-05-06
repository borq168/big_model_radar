/**
 * LLM prompt builders and item formatting.
 */

import type { RepoConfig, GitHubItem, GitHubRelease } from "./github.ts";
import type { WebFetchResult } from "./web.ts";
import type { TrendingData } from "./trending.ts";
import type { HnData } from "./hn.ts";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface RepoDigest {
  config: RepoConfig;
  issues: GitHubItem[];
  prs: GitHubItem[];
  releases: GitHubRelease[];
  summary: string;
}

export interface SkillsRepoSnapshot {
  config: RepoConfig;
  issues: GitHubItem[];
  prs: GitHubItem[];
}

export interface DailySourceReport {
  id: string;
  title: string;
  filename: string;
  content: string;
}

// ---------------------------------------------------------------------------
// Formatting
// ---------------------------------------------------------------------------

export function formatItem(item: GitHubItem, lang: "zh" | "en" = "zh"): string {
  const labels = item.labels.map((l) => l.name).join(", ");
  const labelStr = labels ? ` [${labels}]` : "";
  const body = (item.body ?? "").replace(/\n/g, " ").trim().slice(0, 300);
  const ellipsis = (item.body ?? "").length > 300 ? "..." : "";
  const t =
    lang === "en"
      ? {
          author: "Author",
          created: "Created",
          updated: "Updated",
          comments: "Comments",
          url: "URL",
          summary: "Summary",
        }
      : { author: "作者", created: "创建", updated: "更新", comments: "评论", url: "链接", summary: "摘要" };
  return [
    `#${item.number} [${item.state.toUpperCase()}]${labelStr} ${item.title}`,
    `  ${t.author}: [@${item.user.login}](https://github.com/${item.user.login}) | ${t.created}: ${item.created_at.slice(0, 10)} | ${t.updated}: ${item.updated_at.slice(0, 10)} | ${t.comments}: ${item.comments} | 👍: ${item.reactions?.["+1"] ?? 0}`,
    `  ${t.url}: ${item.html_url}`,
    `  ${t.summary}: ${body}${ellipsis}`,
  ].join("\n");
}

// ---------------------------------------------------------------------------
// Sampling helpers (shared)
// ---------------------------------------------------------------------------

const CLI_ISSUE_LIMIT = 30;
const CLI_PR_LIMIT = 20;

/** Sort by comment count desc, take top N. */
function topN(items: GitHubItem[], n: number): GitHubItem[] {
  return [...items].sort((a, b) => b.comments - a.comments).slice(0, n);
}

function sampleNote(total: number, sampled: number, lang: "zh" | "en" = "zh"): string {
  if (lang === "en") {
    return total > sampled
      ? `(Total: ${total} items; showing top ${sampled} by comment count)`
      : `(Total: ${total} items)`;
  }
  return total > sampled ? `（共 ${total} 条，以下展示评论数最多的 ${sampled} 条）` : `（共 ${total} 条）`;
}

function dailyWritingRules(lang: "zh" | "en" = "zh"): string {
  if (lang === "en") {
    return `## Daily Writing Rules
- Treat this as a daily record, not a weekly/monthly strategy report.
- Prioritize facts, counts, concrete changes, user requests, maintainer responses, and links.
- Do not force strong conclusions, broad ecosystem judgments, forecasts, or tool-selection advice.
- Only call something a trend when multiple independent items in today's data clearly support it; otherwise describe it as an observation or omit it.
- Avoid unsupported claims such as "becoming the standard", "core competitive moat", "clear inflection point", or "market reshaping".`;
  }

  return `## 日报写作边界
- 这是日报，不是周报、月报或投研报告；优先记录事实、数量、具体变化、用户诉求、维护者回应和链接。
- 不要为了凑结构强行给出鲜明观点、生态格局判断、趋势研判、路线图预测或工具选型建议。
- 只有当今日数据中有多条独立证据互相支撑时，才可写成“趋势”；证据不足时写成“观察”，或直接省略。
- 避免使用“正在成为事实标准”“核心竞争力”“拐点”“爆发”“一超多强”等缺少充分证据的强判断。`;
}

// ---------------------------------------------------------------------------
// Prompts
// ---------------------------------------------------------------------------

export function buildCliPrompt(
  cfg: RepoConfig,
  issues: GitHubItem[],
  prs: GitHubItem[],
  releases: GitHubRelease[],
  dateStr: string,
  lang: "zh" | "en" = "zh",
): string {
  const sampledIssues = topN(issues, CLI_ISSUE_LIMIT);
  const sampledPrs = topN(prs, CLI_PR_LIMIT);

  const issuesText =
    sampledIssues.map((i) => formatItem(i, lang)).join("\n") || (lang === "en" ? "None" : "无");
  const prsText = sampledPrs.map((p) => formatItem(p, lang)).join("\n") || (lang === "en" ? "None" : "无");
  const releasesText = releases.length
    ? releases.map((r) => `- ${r.tag_name}: ${r.name}\n  ${(r.body ?? "").slice(0, 300)}`).join("\n")
    : lang === "en"
      ? "None"
      : "无";

  const issueNote = sampleNote(issues.length, sampledIssues.length, lang);
  const prNote = sampleNote(prs.length, sampledPrs.length, lang);

  if (lang === "en") {
    return `You are a technical analyst focused on AI developer tools. Based on the following GitHub data, generate the ${cfg.name} community digest for ${dateStr}.

# Data source: github.com/${cfg.repo}

## Latest Releases (last 24h)
${releasesText}

## Latest Issues (updated in last 24h)${issueNote}
${issuesText}

## Latest Pull Requests (updated in last 24h)${prNote}
${prsText}

---

${dailyWritingRules(lang)}

Generate a structured English digest with the following sections:

1. **Today's Update Brief** - 2-3 sentences summarizing the concrete updates and activity level
2. **Releases** - If new versions exist, summarize changes; omit if none
3. **Hot Issues** - Pick 10 noteworthy Issues, explain the affected workflow, impact, and community reaction
4. **Key PR Progress** - Pick 10 important PRs, describe features or fixes
5. **Feature Request Clusters** - Group recurring feature requests from Issues without predicting roadmap outcomes
6. **Developer Pain Points** - Summarize recurring developer frustrations or high-frequency requests

Style: concise and professional, suited for technical developers. Include GitHub links for each item.
`;
  }

  return `你是一位专注于 AI 开发工具的技术分析师。请根据以下 GitHub 数据，生成 ${dateStr} 的 ${cfg.name} 社区动态日报。

# 数据来源: github.com/${cfg.repo}

## 最新 Releases（过去24小时）
${releasesText}

## 最新 Issues（过去24小时内更新）${issueNote}
${issuesText}

## 最新 Pull Requests（过去24小时内更新）${prNote}
${prsText}

---

${dailyWritingRules(lang)}

请生成一份结构清晰的中文日报，包含以下部分：

1. **今日更新概览** - 用2-3句话概括今天的具体更新和活跃情况
2. **版本发布** - 如有新版本，总结更新内容；无则省略
3. **社区热点 Issues** - 挑选 10 个值得记录的 Issue，说明影响的使用场景、问题范围和社区反应
4. **重要 PR 进展** - 挑选 10 个重要的 PR，说明功能或修复内容
5. **功能需求归类** - 从 Issues 中归类用户反复提到的功能方向（如 IDE 集成、性能、新模型支持等），不要预测路线图
6. **开发者关注点** - 总结开发者反馈中的痛点或高频需求

语言要求：简洁专业，适合技术开发者阅读。每个条目附上 GitHub 链接。
`;
}

const PEER_ISSUE_LIMIT = 30;
const PEER_PR_LIMIT = 20;

export function buildPeerPrompt(
  cfg: RepoConfig,
  issues: GitHubItem[],
  prs: GitHubItem[],
  releases: GitHubRelease[],
  dateStr: string,
  issueLimit = PEER_ISSUE_LIMIT,
  prLimit = PEER_PR_LIMIT,
  lang: "zh" | "en" = "zh",
): string {
  const totalIssues = issues.length;
  const totalPrs = prs.length;

  const sampledIssues = topN(issues, issueLimit);
  const sampledPrs = topN(prs, prLimit);

  const noneStr = lang === "en" ? "None" : "无";
  const issuesText = sampledIssues.map((i) => formatItem(i, lang)).join("\n") || noneStr;
  const prsText = sampledPrs.map((p) => formatItem(p, lang)).join("\n") || noneStr;
  const releasesText = releases.length
    ? releases.map((r) => `- ${r.tag_name}: ${r.name}\n  ${(r.body ?? "").slice(0, 300)}`).join("\n")
    : noneStr;

  const openIssues = issues.filter((i) => i.state === "open").length;
  const closedIssues = issues.filter((i) => i.state === "closed").length;
  const openPrs = prs.filter((p) => p.state === "open").length;
  const mergedPrs = prs.filter((p) => p.state === "closed").length;

  const issueSampleNote = sampleNote(totalIssues, sampledIssues.length, lang);
  const prSampleNote = sampleNote(totalPrs, sampledPrs.length, lang);

  if (lang === "en") {
    return `You are an analyst of AI agent and personal AI assistant open-source projects. Based on the following GitHub data from ${cfg.name} (github.com/${cfg.repo}), generate a project digest for ${dateStr}.

# Data Overview
- Issues updated in last 24h: ${totalIssues} (open/active: ${openIssues}, closed: ${closedIssues})
- PRs updated in last 24h: ${totalPrs} (open: ${openPrs}, merged/closed: ${mergedPrs})
- New releases: ${releases.length}

## Latest Releases
${releasesText}

## Latest Issues ${issueSampleNote}
${issuesText}

## Latest Pull Requests ${prSampleNote}
${prsText}

---

${dailyWritingRules(lang)}

Generate a structured English ${cfg.name} project digest with the following sections:

1. **Today's Activity Brief** - 3-5 sentences summarizing activity counts and concrete project updates
2. **Releases** - If new versions exist, detail changes, breaking changes, migration notes; omit if none
3. **Project Progress** - Merged/closed PRs today, what features advanced or were fixed
4. **Community Hot Topics** - Most active Issues/PRs with most comments/reactions (with links), analyze underlying needs
5. **Bugs & Stability** - Bugs, crashes, regressions reported today, ranked by severity, note if fix PRs exist
6. **Feature Request Clusters** - User-requested features and related PRs; do not predict what will ship next
7. **User Feedback Summary** - Real user pain points, use cases, satisfaction/dissatisfaction
8. **Backlog Watch** - Long-unanswered important Issues or PRs needing maintainer attention

Style: objective and data-driven, recording project activity without overstating project health. Include GitHub links for each item.
`;
  }

  return `你是一位 AI 智能体与个人 AI 助手领域开源项目分析师。请根据以下来自 ${cfg.name} (github.com/${cfg.repo}) 的 GitHub 数据，生成 ${dateStr} 的项目动态日报。

# 数据概览
- 过去24小时 Issues 更新：${totalIssues} 条（新开/活跃: ${openIssues}，已关闭: ${closedIssues}）
- 过去24小时 PR 更新：${totalPrs} 条（待合并: ${openPrs}，已合并/关闭: ${mergedPrs}）
- 新版本发布：${releases.length} 个

## 最新 Releases
${releasesText}

## 最新 Issues ${issueSampleNote}
${issuesText}

## 最新 Pull Requests ${prSampleNote}
${prsText}

---

${dailyWritingRules(lang)}

请生成一份结构清晰的 ${cfg.name} 项目日报，包含以下部分：

1. **今日活动概览** - 用3-5句话概括今日更新数量、发布情况和具体变化
2. **版本发布** - 如有新版本，详细说明更新内容、破坏性变更、迁移注意事项；无则省略
3. **项目进展** - 今日合并/关闭的重要 PR，说明推进了哪些功能或修复
4. **社区热点** - 今日讨论最活跃、评论最多、反应最多的 Issues/PRs（附链接），分析背后的诉求
5. **Bug 与稳定性** - 今日报告的 Bug、崩溃、回归问题，按严重程度排列，标注是否已有 fix PR
6. **功能请求归类** - 用户提出的新功能需求和相关 PR，只记录证据，不预测下一版本路线图
7. **用户反馈摘要** - 从 Issues 评论中提炼真实用户痛点、使用场景、满意/不满意的地方
8. **待处理积压** - 长期未响应的重要 Issue 或 PR，提醒维护者关注

语言要求：客观专业，数据驱动，记录项目活跃情况但不夸大健康度判断。每个条目附上 GitHub 链接。
`;
}

export function buildPeersComparisonPrompt(
  openclawDigest: RepoDigest,
  peerDigests: RepoDigest[],
  dateStr: string,
  lang: "zh" | "en" = "zh",
): string {
  const noActivityStr = lang === "en" ? "No activity in the last 24 hours." : "过去24小时无活动。";

  const openclawSection =
    lang === "en"
      ? `## OpenClaw (core reference, github.com/${openclawDigest.config.repo})\n${openclawDigest.summary}`
      : `## OpenClaw（核心参照，github.com/${openclawDigest.config.repo}）\n${openclawDigest.summary}`;

  const peerSections = peerDigests
    .map((d) => {
      const hasData = d.issues.length || d.prs.length || d.releases.length;
      if (!hasData) return `## ${d.config.name} (github.com/${d.config.repo})\n${noActivityStr}`;
      return `## ${d.config.name} (github.com/${d.config.repo})\n${d.summary}`;
    })
    .join("\n\n---\n\n");

  if (lang === "en") {
    return `You are a senior analyst of the AI agent and personal AI assistant open-source ecosystem. The following are ${dateStr} community digest summaries for each project.

${openclawSection}

---

${peerSections}

---

${dailyWritingRules(lang)}

Generate a cross-project comparison report in English with these sections:

1. **Daily Cross-Project Overview** - 3-5 sentences on today's concrete activity across the tracked projects
2. **Activity Comparison** - Table comparing Issues count, PR count, Release status, and a factual activity note for each project
3. **OpenClaw Compared With Peers** - Concrete differences visible in today's data: activity volume, technical focus, community surface area
4. **Shared Technical Focus Areas** - Requirements appearing across multiple projects today (note which projects and specific needs)
5. **Differentiation Analysis** - Key differences in feature focus, target users, technical architecture
6. **Community Activity Notes** - Activity tiers based only on today's counts and releases; avoid maturity scoring unless directly evidenced
7. **Evidence-Backed Observations** - 3-5 observations supported by multiple items; say "no clear cross-project signal" if evidence is weak

Style: concise and professional, data-backed, suited for technical decision-makers and developers.
`;
  }

  return `你是一位专注于 AI 智能体与个人 AI 助手开源生态的资深技术分析师。以下是 ${dateStr} 各开源项目的社区动态摘要。

${openclawSection}

---

${peerSections}

---

${dailyWritingRules(lang)}

请基于上述各项目的动态，生成一份横向对比分析报告，包含以下部分：

1. **今日横向概览** - 用3-5句话概括今日各项目的具体活动情况
2. **各项目活跃度对比** - 以表格形式汇总各项目今日的 Issues 数、PR 数、Release 情况和事实性备注
3. **OpenClaw 与同类对照** - 只基于今日数据说明活动量、技术重点和社区讨论面的差异
4. **共同出现的技术方向** - 多项目今日都出现的需求（注明涉及哪些项目、具体诉求）
5. **差异化定位分析** - 功能侧重、目标用户、技术架构的关键差异
6. **社区活跃度记录** - 基于今日数量和发布记录做活跃度分层；除非有直接证据，不做成熟度评分
7. **有证据支撑的观察** - 给出 3~5 条由多条数据支撑的观察；证据弱时直接写“今日暂无明确跨项目信号”

语言要求：简洁专业，有数据支撑，适合技术决策者和开发者阅读。
`;
}

export function buildSkillsPrompt(
  repos: SkillsRepoSnapshot[],
  dateStr: string,
  lang: "zh" | "en" = "zh",
): string {
  const effectiveRepos = repos.filter((repo) => repo.prs.length > 0 || repo.issues.length > 0);
  const sourceRepos = effectiveRepos.length > 0 ? effectiveRepos : repos;
  const multiRepo = sourceRepos.length > 1;
  const prLimit = multiRepo ? 10 : 20;
  const issueLimit = multiRepo ? 8 : 15;
  const totalPrs = sourceRepos.reduce((sum, repo) => sum + repo.prs.length, 0);
  const totalIssues = sourceRepos.reduce((sum, repo) => sum + repo.issues.length, 0);
  const noneStr = lang === "en" ? "None" : "无";

  const repoSections = sourceRepos
    .map(({ config, prs, issues }) => {
      const topPrs = topN(prs, prLimit);
      const topIssues = topN(issues, issueLimit);
      const prsText = topPrs.map((pr) => formatItem(pr, lang)).join("\n") || noneStr;
      const issuesText = topIssues.map((issue) => formatItem(issue, lang)).join("\n") || noneStr;

      return [
        `## ${config.name} (github.com/${config.repo})`,
        lang === "en"
          ? `Pull Requests (sorted by comments, ${prs.length} total, showing top ${topPrs.length})`
          : `Pull Requests（按评论数排序，共 ${prs.length} 条，展示前 ${topPrs.length} 条）`,
        prsText,
        "",
        lang === "en"
          ? `Issues (sorted by comments, ${issues.length} total, showing top ${topIssues.length})`
          : `Issues（按评论数排序，共 ${issues.length} 条，展示前 ${topIssues.length} 条）`,
        issuesText,
      ].join("\n");
    })
    .join("\n\n---\n\n");

  if (lang === "en") {
    if (!multiRepo) {
      const repo = sourceRepos[0];
      return `You are a technical analyst focused on AI coding skills ecosystems. The following data is from github.com/${repo?.config.repo} (${repo?.config.name}) as of ${dateStr}. Each PR usually represents a new or improved Skill, while Issues reveal unmet workflow demand.

## Repository Context
- Skills repositories covered: 1
- Total PRs considered: ${totalPrs}
- Total Issues considered: ${totalIssues}

${repoSections}

---

${dailyWritingRules(lang)}

Generate a skills community highlights report in English with these sections:

1. **Top Skills Ranking** - List the 5-8 most-discussed Skills (PRs), describe each Skill's functionality, discussion highlights, and current status
2. **Community Demand Clusters** - From Issues, group the most-mentioned new Skill directions without overstating trend strength
3. **Active Pending Skills** - Active-comment PRs not yet merged; describe current discussion and status without predicting landing time
4. **Daily Notes** - 1-3 evidence-backed notes on what today's data shows; say if there is no clear signal

Style: concise and professional, include GitHub links for each item.`;
    }

    return `You are a technical analyst focused on AI coding skills ecosystems. The following data covers ${sourceRepos.length} GitHub skills repositories as of ${dateStr}. Each PR usually represents a new or improved Skill, while Issues reveal unmet workflow demand.

## Ecosystem Context
- Skills repositories covered: ${sourceRepos.length}
- Total PRs considered: ${totalPrs}
- Total Issues considered: ${totalIssues}

${repoSections}

---

${dailyWritingRules(lang)}

Generate a cross-repository skills ecosystem highlights report in English with these sections:

1. **Top Skills Across Repositories** - List the 6-10 most-discussed Skills or Skill PRs across all repositories, noting which repo each one belongs to
2. **Repository-by-Repository Highlights** - For each skills repo, summarize its current focus, strongest discussions, and contribution momentum in 2-4 sentences
3. **Community Demand Clusters** - Group similar requested Skill directions across repositories without overstating trend strength
4. **Active Pending Skills** - Identify active-comment PRs and explain current discussion, status, and practical use case without predicting landing time
5. **Cross-Repo Daily Notes** - Compare focus, target users, or contribution style only where today's data supports it; close with 1-3 factual notes, not a sweeping takeaway

Style: concise and professional, include GitHub links for each item.`;
  }

  if (!multiRepo) {
    const repo = sourceRepos[0];
    return `你是一位专注于 AI coding skills 生态的技术分析师。以下是 github.com/${repo?.config.repo}（${repo?.config.name}）在 ${dateStr} 的数据。每个 PR 通常对应一个新增或改进的 Skill，Issues 则反映尚未满足的工作流需求。

## 仓库概览
- 覆盖 Skills 仓库：1 个
- 纳入分析的 PR：${totalPrs} 条
- 纳入分析的 Issue：${totalIssues} 条

${repoSections}

---

${dailyWritingRules(lang)}

请生成一份 Skills 社区热点报告，包含以下部分：

1. **热门 Skills 排行** - 列出评论/关注度最高的 5~8 个 Skills（PR），说明每个 Skill 的功能、讨论热点和当前状态
2. **社区需求归类** - 从 Issues 中归类社区提到的新 Skill 方向，不夸大趋势强度
3. **活跃待合并 Skills** - 评论活跃但尚未合并的 PR，说明当前讨论和状态，不预测落地时间
4. **今日记录备注** - 用 1~3 条说明今日数据呈现的事实；没有清晰信号时直接说明

语言要求：简洁专业，每个条目附上 GitHub 链接。`;
  }

  return `你是一位专注于 AI coding skills 生态的技术分析师。以下是 ${dateStr} 来自 ${sourceRepos.length} 个 GitHub skills 仓库的数据。每个 PR 通常对应一个新增或改进的 Skill，Issues 则反映尚未满足的工作流需求。

## 生态概览
- 覆盖 Skills 仓库：${sourceRepos.length} 个
- 纳入分析的 PR：${totalPrs} 条
- 纳入分析的 Issue：${totalIssues} 条

${repoSections}

---

${dailyWritingRules(lang)}

请生成一份跨仓库 Skills 生态热点报告，包含以下部分：

1. **全生态热门 Skills** - 列出全体仓库中评论/关注度最高的 6~10 个 Skills / Skill PR，并注明所属仓库
2. **各仓库亮点** - 对每个 skills repo 用 2~4 句话概括其当前重点、讨论热点和贡献活跃度
3. **社区需求归类** - 汇总多个仓库中出现的 Skill 方向，把相近诉求归类，不夸大趋势强度
4. **活跃待合并 Skills** - 找出评论活跃的 PR，说明当前讨论、状态和实际用途，不预测落地时间
5. **跨仓库今日备注** - 只在今日数据支持时比较仓库关注重点、目标用户或贡献方式；结尾给 1~3 条事实备注，不写整体判断

语言要求：简洁专业，每个条目附上 GitHub 链接。`;
}

export function buildComparisonPrompt(
  digests: RepoDigest[],
  dateStr: string,
  lang: "zh" | "en" = "zh",
): string {
  const noActivityStr = lang === "en" ? "No activity in the last 24 hours." : "过去24小时无活动。";

  const sections = digests
    .map((d) => {
      const hasData = d.issues.length || d.prs.length || d.releases.length;
      if (!hasData) return `## ${d.config.name} (github.com/${d.config.repo})\n${noActivityStr}`;
      return `## ${d.config.name} (github.com/${d.config.repo})\n${d.summary}`;
    })
    .join("\n\n---\n\n");

  if (lang === "en") {
    return `You are a senior technical analyst of the AI developer tools ecosystem. The following are ${dateStr} community digest summaries for each major AI CLI tool:

${sections}

---

${dailyWritingRules(lang)}

Generate a cross-tool comparison report in English with these sections:

1. **Daily Cross-Tool Overview** - 3-5 sentences on today's concrete activity across the tracked AI CLI tools
2. **Activity Comparison** - Table comparing Issues count, PR count, Release status for each tool today
3. **Shared Feature Directions** - Requirements appearing across multiple tool communities today (note which tools, specific needs)
4. **Differentiation Analysis** - Differences in feature focus, target users, and technical approach
5. **Community Activity Notes** - Which tools are more active today by count, release, and maintainer response
6. **Evidence-Backed Observations** - 3-5 observations supported by multiple items; say "no clear cross-tool signal" if evidence is weak

Style: concise and professional, data-backed, suited for technical decision-makers and developers.
`;
  }

  return `你是一位专注于 AI 开发工具生态的资深技术分析师。以下是 ${dateStr} 各主流 AI CLI 工具的社区动态摘要：

${sections}

---

${dailyWritingRules(lang)}

请基于上述各工具的动态，生成一份横向对比分析报告，包含以下部分：

1. **今日横向概览** - 用3-5句话概括今日各 AI CLI 工具的具体活动情况
2. **各工具活跃度对比** - 以表格形式汇总各工具今日的 Issues 数、PR 数、Release 情况
3. **共同出现的功能方向** - 多个工具社区今日都出现的需求（说明哪些工具、具体诉求）
4. **差异化定位分析** - 各工具在功能侧重、目标用户、技术路线上的差异
5. **社区活跃度记录** - 基于今日数量、发布、维护者回应记录哪些工具更活跃
6. **有证据支撑的观察** - 给出 3~5 条由多条数据支撑的观察；证据弱时直接写“今日暂无明确跨工具信号”

语言要求：简洁专业，有数据支撑，适合技术决策者和开发者阅读。
`;
}

export function buildTrendingPrompt(data: TrendingData, dateStr: string, lang: "zh" | "en" = "zh"): string {
  const trendingSection =
    data.trendingFetchSuccess && data.trendingRepos.length > 0
      ? data.trendingRepos
          .map(
            (r) =>
              `- [${r.fullName}](${r.url})` +
              (r.language ? ` [${r.language}]` : "") +
              ` ⭐${r.totalStars.toLocaleString()}` +
              (r.todayStars > 0 ? ` (+${r.todayStars} today)` : "") +
              (r.forks > 0 ? ` 🍴${r.forks.toLocaleString()}` : "") +
              (r.description ? `\n  ${r.description}` : ""),
          )
          .join("\n")
      : lang === "en"
        ? "(Unable to fetch today's GitHub Trending list)"
        : "（未能抓取今日 GitHub Trending 榜单）";

  const searchSection =
    data.searchRepos.length > 0
      ? data.searchRepos
          .map(
            (r) =>
              `- [${r.fullName}](${r.url})` +
              (r.language ? ` [${r.language}]` : "") +
              ` ⭐${r.stargazersCount.toLocaleString()}` +
              ` [topic:${r.searchQuery}]` +
              (r.description ? `\n  ${r.description}` : ""),
          )
          .join("\n")
      : lang === "en"
        ? "(No search results)"
        : "（无搜索结果）";

  if (lang === "en") {
    return `You are a technical analyst focused on the AI open-source ecosystem. The following is ${dateStr} GitHub AI-related trending repository data. Please filter for AI relevance, categorize, and summarize today's hot list.

## Data Sources
- **Trending List** (github.com/trending, today's stars most reliable): Real-time hot list with today's new stars
- **Topic Search** (GitHub Search API, topic tags): AI-related projects active in last 7 days, grouped by topic

---

## GitHub Today's Trending (${data.trendingRepos.length} repositories)
${trendingSection}

---

## AI Topic Search Results (${data.searchRepos.length} repositories, deduplicated)
${searchSection}

---

Generate a structured GitHub AI Trending Digest in English:

**Step 1 (Filter)**: From the above data, select projects clearly related to AI/ML (exclude unrelated general tools, frontend frameworks, games, etc.). Skip non-AI trending repos.

**Step 2 (Categorize)**: Group filtered projects into these categories (a project can belong to multiple; pick the primary one):
- 🔧 AI Infrastructure (frameworks, SDKs, inference engines, dev tools, CLI)
- 🤖 AI Agents / Workflows (agent frameworks, automation, multi-agent systems)
- 📦 AI Applications (specific apps, vertical solutions)
- 🧠 LLMs / Training (model weights, training frameworks, fine-tuning tools)
- 🔍 RAG / Knowledge (vector databases, retrieval-augmented generation, knowledge management)

**Step 3 (Output Report)** with these sections:

${dailyWritingRules(lang)}

1. **Today's Hot List Brief** — 3-5 sentences on the most active AI-related repositories today

2. **Top Projects by Category** — For each category, list 3-8 representative projects, each with:
   - Project name (with link)
   - Stars data (total + today's new, if available)
   - One sentence: what it is and why it's worth attention today

3. **Hot List Observations** — 150-250 words, describe today's distribution:
   - Which categories appear most often in today's data?
   - Any clearly new or unusual project types visible in the list?
   - Only mention connections to LLM releases / industry events when directly evidenced by the provided data

4. **Community Hot Spots** — Bullet list of 3-5 specific projects or directions worth developer focus, with brief reasoning

Style: English, professional and concise, must include GitHub links for every project.
`;
  }

  return `你是一位专注于 AI 开源生态的技术分析师。以下是 ${dateStr} 的 GitHub AI 相关热门仓库数据，请进行 AI 相关性筛选、分类，并整理今日热榜。

## 数据说明
- **Trending 榜单**（github.com/trending，今日 stars 数最可信）：今日实时热榜，含今日新增 stars
- **主题搜索**（GitHub Search API，topic 标签）：7天内活跃的 AI 相关项目，按主题分类

---

## GitHub 今日 Trending 榜单（共 ${data.trendingRepos.length} 个仓库）
${trendingSection}

---

## AI 主题搜索结果（共 ${data.searchRepos.length} 个仓库，已去重）
${searchSection}

---

请生成一份结构清晰的《GitHub AI 热榜日报》，要求：

**第一步（过滤）**：从以上数据中筛选出与 AI/ML 明确相关的项目（排除与 AI 无关的通用工具、前端框架、游戏等），对于 Trending 榜单中的非 AI 项目直接略去。

**第二步（分类）**：将筛选后的项目按以下维度分类（一个项目可归入多类，优先归入最主要类别）：
- 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）
- 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）
- 📦 AI 应用（具体应用产品、垂直场景解决方案）
- 🧠 大模型/训练（模型权重、训练框架、微调工具）
- 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

**第三步（输出报告）**，包含以下部分：

${dailyWritingRules(lang)}

1. **今日热榜概览** — 3~5 句话概括今日 AI 相关热门仓库的具体分布

2. **各维度热门项目** — 每个维度列出 3~8 个代表项目，每项包含：
   - 项目名（附链接）
   - stars 数据（总量 + 今日新增，如有）
   - 一句话说明：这个项目是什么，为什么今天值得关注

3. **热榜观察** — 150~250 字，说明今日热榜呈现的事实分布：
   - 哪些类别在今日数据中出现较多？
   - 是否有明确的新类型或少见项目出现？
   - 只有在输入数据直接支持时，才提及与大模型发布/行业事件的关联

4. **可跟踪项目** — 以 bullet 形式列出 3~5 个值得继续跟踪的具体项目或方向，给出简短理由

语言要求：中文，专业简洁，每个项目必须附 GitHub 链接。
`;
}

export function buildWebReportPrompt(
  results: WebFetchResult[],
  dateStr: string,
  lang: "zh" | "en" = "zh",
): string {
  const isAnyFirstRun = results.some((r) => r.isFirstRun);
  const sourceNames = results.map((result) => result.sourceName).join(lang === "en" ? ", " : "、");

  const siteSections = results
    .map(({ sourceName, isFirstRun, newItems, totalDiscovered }) => {
      const mode =
        lang === "en"
          ? isFirstRun
            ? `First full crawl (sitemap total ${totalDiscovered} URLs, showing latest ${newItems.length} articles)`
            : `Incremental update, ${newItems.length} new articles today`
          : isFirstRun
            ? `首次全量抓取（sitemap 共 ${totalDiscovered} 条 URL，以下为最新 ${newItems.length} 篇正文内容）`
            : `今日增量更新，共 ${newItems.length} 篇新内容`;

      if (newItems.length === 0) {
        return lang === "en"
          ? `## ${sourceName}\n\n(${mode}; no analyzable content this cycle.)`
          : `## ${sourceName}\n\n（${mode}，暂无可供分析的内容。）`;
      }

      const unableToExtract = lang === "en" ? "(Unable to extract text content)" : "（无法提取文本内容）";
      const itemsText = newItems
        .map((item) =>
          [
            `### [${item.title || item.url}](${item.url})`,
            lang === "en"
              ? `- Category: ${item.category} | Published/Updated: ${item.publishedAt.slice(0, 10) || "Unknown"}`
              : `- 分类: ${item.category} | 发布/更新: ${item.publishedAt.slice(0, 10) || "未知"}`,
            lang === "en"
              ? `- Content excerpt: ${item.content || unableToExtract}`
              : `- 内容节选: ${item.content || unableToExtract}`,
          ].join("\n"),
        )
        .join("\n\n");

      return lang === "en"
        ? `## ${sourceName} (${mode})\n\n${itemsText}`
        : `## ${sourceName}（${mode}）\n\n${itemsText}`;
    })
    .join("\n\n---\n\n");

  const firstRunNote =
    lang === "en"
      ? isAnyFirstRun
        ? "This is the first full crawl. Please focus on the content landscape, historical context, and core themes of each site, rather than individual articles."
        : "This is an incremental update. Please focus on today's new content and add only necessary context; do not turn routine updates into strategy claims."
      : isAnyFirstRun
        ? "本次为首次全量抓取，请重点梳理各站点的内容格局、历史脉络与核心主题，而非仅关注单篇文章。"
        : "本次为增量更新，请聚焦今日新增内容，只补充必要上下文，不把日常更新延伸成战略判断。";

  if (lang === "en") {
    return `You are a content analyst focused on AI and developer ecosystems, skilled at summarizing official announcements, technical blogs, research papers, product documentation, and curated feeds with appropriate context.

  The following content was crawled on ${dateStr} from these configured sources: ${sourceNames}. ${firstRunNote}

${siteSections}

---

  Generate a detailed content tracking report in English with these sections:

${dailyWritingRules(lang)}

1. **Today's Update Brief** — 3-5 sentences on the most important new releases or developments, stated as concrete updates

  2. **Per-Source Highlights** — For each source, organize the important content by category:
    - For each piece, write 2-4 sentences extracting core content, technical details, or practical relevance
    - Note publication date and original link
    - If first full crawl, trace major milestones chronologically where helpful

  3. **Cross-Source Update Notes** — Based on release cadence and content focus across sources, summarize:
    - Which technical topics appear most often in today's data
    - Whether different sources clearly mention similar themes, or are simply independent updates
    - Practical relevance for developers, builders, and enterprise users only when directly supported by the content

  4. **Notable Details** — Record details from titles, phrasing, timing, and source mix, e.g.:
   - New terms or topics appearing for the first time
   - Dense releases in a category, described as a daily cluster unless a milestone is explicit
    - Policy, compliance, ecosystem, or safety developments

  ${isAnyFirstRun ? "5. **Content Landscape Overview** — First full crawl only: summarize the content category distribution across sources and describe each source's content strategy style (research-oriented vs product-oriented vs ecosystem-oriented vs community-oriented, etc.)\n\n" : ""}Style: English, professional and detailed, suited for AI researchers, product managers, and technical decision-makers. Every item must include official links.
`;
  }

  return `你是一位专注于 AI 与开发者生态的内容分析师，擅长从官方公告、技术博客、研究论文、产品文档和信息流中提炼事实摘要与必要上下文。

  以下是 ${dateStr} 从这些已配置来源抓取的内容：${sourceNames}。${firstRunNote}

${siteSections}

---

  请生成一份详实的《内容追踪报告》，包含以下部分：

${dailyWritingRules(lang)}

1. **今日更新概览** — 3~5 句话概括最重要的新发布或更新，按具体事实表述

  2. **各来源内容精选** — 按来源和分类逐条整理重要内容：
   - 每篇用 2~4 句话提炼核心内容、技术细节或实际影响
   - 标注发布日期和原文链接
   - 如首次全量，按时间线梳理重要里程碑

  3. **跨来源更新脉络** — 基于各来源的发布节奏和内容重点，说明：
    - 今日数据中出现较多的技术主题（模型能力 / 安全 / 产品化 / 生态 / 开发者工作流）
    - 不同来源是否明确提到相近主题，还是只是各自独立更新
    - 仅在内容直接支持时，说明对开发者、创业团队和企业用户的实际影响

  4. **值得记录的细节** — 从标题、措辞、发布时机和来源组合中记录具体细节，例如：
   - 新兴词汇或话题的首次出现
   - 某类主题的密集发布（除非原文明确，否则只写成日内集中出现）
    - 政策、合规、生态、安全方面的动向

  ${isAnyFirstRun ? "5. **内容格局总览** — 首次全量独有：汇总各来源的内容类别分布，并说明各自的内容运营风格（研究导向 / 产品导向 / 生态导向 / 社区导向等）\n\n" : ""}语言要求：中文，专业深入，内容详实，适合 AI 领域研究者、产品经理和技术决策者阅读。每个条目必须附上官网链接。
`;
}

export function buildIntegratedDailyPrompt(
  reports: DailySourceReport[],
  dateStr: string,
  lang: "zh" | "en" = "zh",
): string {
  const reportSections = reports
    .map(
      (report) => `## ${report.title} (${report.filename})

${report.content}`,
    )
    .join("\n\n---\n\n");

  if (lang === "en") {
    return `You are editing the reader-facing entrypoint for Big Model Radar. The following source reports were generated for ${dateStr}. Create one integrated daily digest that helps readers decide what to open next.

${dailyWritingRules(lang)}

Source reports:

${reportSections}

---

Generate **AI Ecosystem Daily Brief ${dateStr}** in English with these sections:

1. **At a Glance** — 8-12 factual bullets. Prefix each bullet with one source tag: [CLI], [Agents], [Skills], [Official], [GitHub], or [HN].
2. **Browse by Theme** — Use only themes that appear in the source reports. Group facts under practical headings such as Developer Tools, Agent Projects, Skills & Workflows, Official Updates, GitHub Hot List, and HN Discussions.
3. **Follow-Up Watch** — 3-8 items that are explicitly unresolved, newly released, unusually active, or worth checking again. For each item, include the source report and a short reason. If there is no clear follow-up item, say so directly.
4. **Detailed Report Index** — A table with one row per source report: report name, what to read it for, and the local Markdown filename.
5. **Data Gaps** — Mention skipped or failed source reports only when the input clearly shows a gap.

Rules:
- This is an entrypoint, not another deep analysis report.
- Preserve concrete names, issue/PR numbers, release names, and links already present in the sources.
- Do not invent links, facts, project names, or broad conclusions.
- Keep the whole brief compact enough to scan in 3-5 minutes.`;
  }

  return `你是 Big Model Radar 的整合日报编辑。以下是 ${dateStr} 已生成的各份来源报告。请把它们整理成一份读者入口型日报，帮助读者快速判断今天先看什么、去哪里看细节。

${dailyWritingRules(lang)}

来源报告：

${reportSections}

---

请生成《AI 生态整合日报 ${dateStr}》，包含以下部分：

1. **今日一屏** — 8~12 条事实型要点。每条开头标注一个来源标签：[CLI]、[Agents]、[Skills]、[Official]、[GitHub]、[HN]。
2. **按主题浏览** — 只使用来源报告中确实出现的主题。可按“开发工具与 CLI”“Agent / 个人助手项目”“Skills / 工作流”“官方发布与技术博客”“GitHub 热榜项目”“HN 社区讨论”等分组。
3. **需要继续跟踪** — 3~8 条明确未关闭、新发布、讨论异常活跃或值得复查的事项。每条说明来源报告和简短理由；没有清晰事项时直接说明。
4. **详细报告入口** — 表格列出每份来源报告：报告名、适合看什么、本地 Markdown 文件名。
5. **数据缺口** — 只有当输入中明确显示某类报告跳过或失败时才写。

写作规则：
- 这是入口日报，不是另一份深度分析报告。
- 保留来源中已有的具体项目名、Issue/PR 编号、版本名和链接。
- 不编造链接、事实、项目名或宏观结论。
- 控制篇幅，让读者 3~5 分钟能扫完。`;
}

export function buildWeeklyPrompt(
  dailyDigests: Record<string, string>,
  weekStr: string,
  lang: "zh" | "en" = "zh",
): string {
  const digestEntries = Object.entries(dailyDigests)
    .map(([date, content]) => `## ${date}\n\n${content}`)
    .join("\n\n---\n\n");

  if (lang === "en") {
    return `You are a technical analyst focused on the AI open-source ecosystem. The following are daily digest summaries from the past 7 days (${weekStr}) of AI tool community activity. Generate a comprehensive weekly recap.

${digestEntries}

---

Generate an AI Tools Ecosystem Weekly Report with these sections:

1. **Week's Top Stories** - 5-8 most important events, releases, and community developments this week, each with date
2. **CLI Tools Progress** - Overall activity and key changes for each AI CLI tool (Claude Code, Codex, Gemini CLI, etc.)
3. **AI Agent Ecosystem** - Key developments from OpenClaw and peer projects this week
4. **Open Source Trends** - Most notable technical directions from GitHub Trending and AI community this week
5. **HN Community Highlights** - Core AI discussion topics and community sentiment on Hacker News this week
6. **Official Announcements** - Important content published by Anthropic and OpenAI this week (if any)
7. **Next Week's Signals** - Based on this week's data, predict trends and upcoming events worth watching

Style: English, concise and professional, helping technical developers quickly grasp the week's developments.
`;
  }

  return `你是一位专注于 AI 开源生态的技术分析师。以下是过去 7 天（${weekStr}）的 AI 工具社区每日动态摘要，请生成本周综合回顾报告。

${digestEntries}

---

请生成《AI 工具生态周报》，包含以下部分：

1. **本周要闻** - 5-8 条本周最重要的事件、版本发布、社区动向，每条附日期
2. **CLI 工具进展** - 各 AI CLI 工具（Claude Code、Codex、Gemini CLI 等）本周整体动态与关键变化
3. **AI Agent 生态** - OpenClaw 及同赛道项目的本周重要进展
4. **开源趋势** - 本周 GitHub Trending 和 AI 社区最关注的技术方向
5. **HN 社区热议** - 本周 Hacker News AI 讨论的核心话题与社区情绪
6. **官方动态** - Anthropic 和 OpenAI 本周发布的重要内容（若有）
7. **下周信号** - 基于本周数据，预判值得关注的趋势或即将到来的事件

语言要求：中文，简洁专业，适合技术开发者快速掌握一周动态。
`;
}

export function buildMonthlyPrompt(
  sourceDigests: Record<string, string>,
  monthStr: string,
  lang: "zh" | "en" = "zh",
): string {
  const digestEntries = Object.entries(sourceDigests)
    .map(([key, content]) => `## ${key}\n\n${content}`)
    .join("\n\n---\n\n");

  if (lang === "en") {
    return `You are a technical analyst focused on the AI open-source ecosystem. The following are ${monthStr} AI tool community digest summaries (${Object.keys(sourceDigests).length} reports total). Generate a comprehensive monthly review.

${digestEntries}

---

Generate an AI Tools Ecosystem Monthly Report with these sections:

1. **Month's Top Stories** - 5-10 most important events and milestones this month, in chronological order
2. **CLI Tools Monthly Progress** - Overall development trajectory, major releases, and community growth for each key AI CLI tool
3. **AI Agent Ecosystem Monthly Review** - Ecosystem landscape shifts, emerging projects, notable signals this month
4. **Technical Trend Summary** - Most significant technical directions and paradigm shifts in AI open-source this month
5. **Community Health Assessment** - Monthly activity comparison across major projects, developer engagement evaluation
6. **Official Announcements Review** - Strategic analysis of Anthropic and OpenAI content published this month
7. **Next Month's Outlook** - Based on this month's trends, predict key directions and potential events to watch

Style: English, in-depth analysis, data-driven, suited for monthly retrospectives and strategic decision-making.
`;
  }

  return `你是一位专注于 AI 开源生态的技术分析师。以下是 ${monthStr} 月的 AI 工具社区动态汇总（共 ${Object.keys(sourceDigests).length} 份报告），请生成本月综合回顾报告。

${digestEntries}

---

请生成《AI 工具生态月报》，包含以下部分：

1. **月度要闻** - 本月最重要的 5-10 条事件和里程碑，按时间排列
2. **CLI 工具月度进展** - 各主要 AI CLI 工具本月整体发展轨迹、重要版本、社区规模变化
3. **AI Agent 生态月报** - 本月生态格局变化、新兴项目、值得关注的信号
4. **技术趋势总结** - 本月 AI 开源领域最显著的技术方向与范式变化
5. **社区生态健康度** - 各主要项目月度活跃度对比、开发者参与度评估
6. **官方动态回顾** - Anthropic 和 OpenAI 本月发布内容的战略意义分析
7. **下月展望** - 基于本月趋势，预判值得重点关注的方向和潜在事件

语言要求：中文，深度分析，数据驱动，适合月度复盘和战略决策参考。
`;
}

export function buildHnPrompt(data: HnData, dateStr: string, lang: "zh" | "en" = "zh"): string {
  const storiesText = data.stories
    .map((s, i) =>
      lang === "en"
        ? `${i + 1}. **${s.title}**\n` +
          `   Link: ${s.url}\n` +
          `   Discussion: ${s.hnUrl}\n` +
          `   Score: ${s.points} | Comments: ${s.comments} | Author: [${s.author}](https://news.ycombinator.com/user?id=${s.author}) | 时间: ${s.createdAt.slice(0, 16)}`
        : `${i + 1}. **${s.title}**\n` +
          `   链接: ${s.url}\n` +
          `   讨论: ${s.hnUrl}\n` +
          `   分数: ${s.points} | 评论: ${s.comments} | 作者: [${s.author}](https://news.ycombinator.com/user?id=${s.author}) | 时间: ${s.createdAt.slice(0, 16)}`,
    )
    .join("\n\n");

  if (lang === "en") {
    return `You are an AI industry news analyst. The following are AI-related top posts from Hacker News in the past 24 hours as of ${dateStr} (sorted by score, ${data.stories.length} total):

---

${storiesText}

---

${dailyWritingRules(lang)}

Generate a structured Hacker News AI Community Digest in English:

1. **Today's Discussion Brief** — 3-5 sentences on the most active AI discussion topics and visible community mood on HN today

2. **Top News & Discussions** — Organized by category, select the 2-5 most representative items per category, each with:
   - Title (with original link) + HN discussion link
   - Score and comment count
   - One sentence: why this matters, what the community's typical reaction is

   Categories:
   - 🔬 Models & Research (new model releases, papers, benchmarks)
   - 🛠️ Tools & Engineering (open-source projects, frameworks, engineering practices)
   - 🏢 Industry News (company news, funding, product launches)
   - 💬 Opinions & Debates (notable Ask HN, Show HN, or hot discussion threads)

3. **Community Discussion Notes** — 100-200 words recording today's HN AI discussion mood and focus:
   - Which topics are most active (high score + high comments)?
   - Any clear points of controversy or consensus?
   - Do not compare with a previous cycle unless the provided data includes that comparison

4. **Worth Deep Reading** — List 2-3 pieces most worth developers/researchers reading in depth, with brief reasoning

Style: English, concise and professional, preserve all original links.
`;
  }

  return `你是 AI 行业资讯分析师。以下是 ${dateStr} 从 Hacker News 抓取的过去 24 小时内 AI 相关热门帖子（按分数降序，共 ${data.stories.length} 条）：

---

${storiesText}

---

${dailyWritingRules(lang)}

请生成一份结构清晰的《Hacker News AI 社区动态日报》，要求：

1. **今日讨论概览** — 3~5 句话，概括今日 HN 社区围绕 AI 最活跃的讨论方向和可见情绪

2. **热门新闻与讨论** — 按以下分类整理，每类选取最具代表性的 2~5 条，每条包含：
   - 标题（附原文链接）+ HN 讨论链接
   - 分数和评论数
   - 一句话说明：这条内容为什么值得关注，社区有何典型反应

   分类：
   - 🔬 模型与研究（新模型发布、论文、基准测试）
   - 🛠️ 工具与工程（开源项目、框架、工程实践）
   - 🏢 产业动态（公司新闻、融资、产品发布）
   - 💬 观点与争议（值得关注的 Ask HN、Show HN 或热议帖子）

3. **社区讨论备注** — 100~200 字，记录今日 HN AI 讨论的整体情绪和关注重点：
   - 社区对哪类话题最活跃（高分 + 高评论）？
   - 有无明显的争议点或共识？
   - 除非输入数据包含对比依据，否则不要与上周期比较

4. **值得深读** — 列出 2~3 条今日最值得开发者/研究者深入阅读的内容，简述理由

语言要求：中文，简洁专业，保留所有原文链接。
`;
}
