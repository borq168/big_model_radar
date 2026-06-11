# AI CLI Tools Community Digest 2026-06-11

> Generated: 2026-06-11 02:46 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# Cross-Tool AI CLI Comparison Report – 2026-06-11

## 1. Daily Cross-Tool Overview

Today's activity across the six tracked AI CLI tools reveals a landscape marked by high-volume bug reporting and active patch cycles. **Claude Code** shipped v2.1.172 with sub-agent nesting and Bedrock improvements, while **OpenCode** released four patches (v1.17.0–v1.17.3) addressing desktop crashes and file search. **Gemini CLI** merged a critical shell hang fix, and **Kimi Code** closed 10+ PRs focused on Windows compatibility and session recovery. **OpenAI Codex** released two Rust alpha builds but remains embroiled in a 600-comment token consumption bug. **Copilot CLI** had no releases or PRs, and community frustration is mounting over unresolved long-standing issues. **Qwen Code** saw elevated issue reporting around terminal interactivity and subagent reliability. Platform-specific pain points—particularly on Windows—are a recurring theme across multiple tools.

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Releases Today | Notable Activity |
|---|---|---|---|---|
| **Claude Code** | 50 | 26 | v2.1.172 | High-volume issue reporting, active PR pipeline |
| **OpenAI Codex** | 50 | 50 | 2 alpha releases | Heavy PR activity, 600-comment token bug ongoing |
| **Gemini CLI** | ~10 hot issues | 10 (several merged) | None | Critical hang fix merged, security hardening active |
| **Copilot CLI** | 30 | 0 | None | No maintainer output; community building alternatives |
| **Kimi Code** | 2 new issues | 23 (mostly merged) | None | Large batch of Windows fixes merged |
| **OpenCode** | 50 updated items | 10 (1 merged) | v1.17.0–v1.17.3 | Four patch releases, high feature request activity |
| **Qwen Code** | 32 | 10 | None | Terminal bugs dominant; MCP schema issues active |

## 3. Shared Feature Directions

**Subagent reliability and autonomy** – Appears across **Claude Code** (sub-agent nesting to 5 levels, false success reports), **Gemini CLI** (agent hangs, false success on MAX_TURNS), **Qwen Code** (subagent image reading failures, permission auto-deny), and **OpenCode** (subagent permissions). All communities want subagents to be more reliable, self-recovering, and behaviorally aligned with the main agent.

**Windows platform stability** – **Copilot CLI** (clipboard breaks, crashes after update), **Codex** (non-ASCII username failures, extreme slowness, crash after 26.602.71036), **Kimi Code** (log rotation, console font reset, console window issues), and **Claude Code** (WSL integration request, cowork on ARM64 failure) all report Windows-specific regressions. This is the most cross-cutting pain point today.

**Memory and token management** – **Claude Code** (129 GB leak), **Codex** (token budget tools, compaction PRs, Burning tokens bug), **Gemini CLI** (Auto Memory retries, missing redaction), **OpenCode** (CPU/memory spikes, snapshot bloat), and **Qwen Code** (truncation recovery, retained memory compaction) all touch memory or token-budget management. Several maintainer PRs directly address this.

**MCP server integration resilience** – **Kimi Code** (deferred MCP startup failure handling), **Copilot CLI** (false-positive policy blocking), **Qwen Code** (MCP schema coercion), and **OpenCode** (MCP prompt/resource fixes) show that MCP tooling remains fragile across the ecosystem.

**Multi-account/profile management** – **Claude Code** (#18435, 580 👍) and **Copilot CLI** (#223, 76 👍) both have high-vote requests for better account switching and org-level token management, indicating enterprise deployment friction.

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Qwen Code |
|---|---|---|---|---|---|---|---|
| **Release cadence** | Daily patches | Weekly alpha | Slower | Stalled | Active merges | Multiple daily | Moderate |
| **Subagent model** | Nested (5 levels) | MultiAgentV2 (buggy) | Generalist + specialist | Background tasks | Not prominent | Agent permissions | Team/multi-agent |
| **Windows support** | Mixed (regressions) | Poor (crash cluster) | Not highlighted | Regressions per release | Actively fixing | Moderate | Not highlighted |
| **Memory management** | Addressed (leaks) | Active PR pipeline (compaction) | Auto Memory (buggy) | Not highlighted | Session recovery | CPU/memory spikes | Compaction efforts |
| **Terminal UX** | Scroll-back regression | TUI goals support | Resize crash fixed | Keyboard UX broken | Console font fixes | Lost exit epilogue | Major bugs (mouse, resize) |
| **Enterprise features** | Multi-account request | Org model gaps | Security hardening | Org token gaps | Not highlighted | Session API v2 | Daemon mode |
| **Maintainer responsiveness** | High (daily release) | Moderate (alpha churn) | High (merges today) | Low (9-month silence on top issue) | High (many merges) | Very High (4 patches) | Moderate |

**Claude Code** continues to lead in feature velocity with nested sub-agents and Bedrock support, but memory leaks and terminal regressions remain. **Gemini CLI** shows strong security-oriented development (HITL bypass fix, path traversal patches). **Copilot CLI** is the outlier: zero maintainer output, community frustration leading to alternative tooling. **Kimi Code** has the most focused Windows-improvement batch today, suggesting a deliberate platform polish cycle. **OpenCode** has the highest release frequency (4 versions in 24 hours) with broad-spectrum fixes. **Qwen Code** reveals deep terminal integration challenges that other tools appear to have largely solved.

## 5. Community Activity Notes

**Highest issue volume:** Claude Code and OpenAI Codex both saw 50 issues updated in 24 hours, but Codex's single token-consumption bug accounts for disproportionate community engagement (604 comments). **Claude Code** has broader distribution of high-engagement issues (10 hot issues with 8–580 👍 each).

**Highest PR activity:** OpenAI Codex (50 PRs updated) and Claude Code (26) lead. However, **Kimi Code** merged the highest proportion of its PR batch (most of 23 were closed/merged), suggesting efficient maintainer throughput. **Gemini CLI** merged several critical fixes (hang, resize crash, HITL bypass) in one day.

**Most responsive maintainers:** **OpenCode** (4 releases in 24 hours), **Claude Code** (daily release cadence), **Kimi Code** (large merged batch). **Gemini CLI** merged high-severity fixes within hours of issue reporting.

**Least responsive:** **Copilot CLI** had no PRs, no releases, and its top issue (#53, 75 👍) has no maintainer response in 9 months. The community is now building and sharing alternative tools.

**Release activity:** Only Claude Code (v2.1.172) and OpenCode (v1.17.0–v1.17.3) shipped stable releases today. Codex shipped alpha builds without changelogs.

## 6. Evidence-Backed Observations

1. **Windows stability is the most cross-cutting pain point.** Copilot CLI, Codex, Kimi Code, and Claude Code all received Windows-specific bug reports or fixes today. Kimi Code's PR batch is almost entirely Windows-oriented (log rotation, console font, console window). Codex has a cluster of 5+ distinct Windows crash/startup issues. This is the strongest cross-tool signal in today's data.

2. **Subagent reliability is a consistent weak point across four tools.** Claude Code, Gemini CLI, Qwen Code, and Copilot CLI all have open issues where subagents fail silently, report false success, ignore configuration, or behave differently from the main agent. No tool has fully solved subagent-user alignment.

3. **MCP integration fragility is emerging as a second-order pain point.** Kimi Code fixed MCP startup failure handling; Copilot CLI has recurring false-positive policy blocks; Qwen Code needs schema coercion; OpenCode fixed MCP prompt/resource requests. As MCP adoption grows, tool interoperability is becoming a common support burden.

4. **Memory and token management remain unsolved across the ecosystem.** Claude Code (129 GB leak), Codex (token consumption bug with 600+ comments), Gemini (Auto Memory retries), OpenCode (CPU/memory spikes), and Qwen (truncation recovery) all have active memory-related issues. Several PRs this week (Codex compaction tools, Qwen compaction, OpenCode snapshot fixes) indicate maintainers are investing here, but user-facing stability is not yet achieved.

5. **Maintainer responsiveness divergence is growing.** At one extreme, OpenCode shipped 4 patches today and Kimi Code merged 10+ PRs. At the other, Copilot CLI has zero maintainer output and its top issue is 9 months old without response. This gap may drive further fragmentation in the tooling landscape as users gravitate toward actively maintained tools.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest – 2026-06-11

## Today’s Update Brief
A new release **v2.1.172** went out with sub‑agent nesting up to 5 levels, smarter AWS region fallback for Bedrock, and a search bar for browsing marks. The community is very active: **50 issues** and **26 pull requests** were updated in the last 24 hours, with fresh reports about Fable 5 safety false positives and a TUI scroll-back regression in tmux.

## Releases
**v2.1.172** (released 2026-06-11)
- **Sub‑agent nesting**: agents can now spawn child agents up to 5 levels deep.
- **Amazon Bedrock region detection**: when `AWS_REGION` is not set, the tool reads region from `~/.aws/config`, matching AWS SDK precedence; `/status` shows the region source.
- **Search bar**: added when browsing a mark.

[Full release](https://github.com/anthropics/claude-code/releases/tag/v2.1.172)

## Hot Issues (10 picks)
*Picked for community engagement, severity, or broad workflow impact.*

1. **[#18435] Multi‑account management for Claude Desktop**
   *Author: @Agentic-Marketer · Comments: 109 · 👍 580*
   Users want the ability to manage multiple Claude accounts and switch between profiles inside the desktop app. Currently you have to log out and in again. The high vote count signals strong demand.
   [Issue](https://github.com/anthropics/claude-code/issues/18435)

2. **[#11315] Critical memory leak – 129 GB RAM consumed**
   *Author: @nenrightld-ux · Comments: 64 · 👍 52*
   Claude Code consumed all 16 GB physical RAM plus 129 GB virtual memory, causing a system freeze that required a hard reboot. Affects Linux users; community is watching for a fix.
   [Issue](https://github.com/anthropics/claude-code/issues/11315)

3. **[#12513] Option to disable automatic worktree creation** *(CLOSED)*
   *Author: @ROWard · Comments: 46 · 👍 79*
   Solo developers want the ability to turn off automatic worktree creation in the standalone macOS interface. The request was closed, but the conversation remains active.
   [Issue](https://github.com/anthropics/claude-code/issues/12513)

4. **[#62466] “Image couldn’t be processed” API errors consuming usage limit**
   *Author: @3ct0s · Comments: 23 · 👍 17*
   Repeated image processing failures still drain billing usage. Workflow: sending screenshots or diagrams triggers errors without feedback. Users are frustrated by wasted credits.
   [Issue](https://github.com/anthropics/claude-code/issues/62466)

5. **[#50674] Cowork fails on ARM64 Windows (Snapdragon X)**
   *Author: @harshadoak · Comments: 19 · 👍 0*
   The cowork readiness check passes, but actual pairing fails. Blocks Windows ARM users from collaborative features.
   [Issue](https://github.com/anthropics/claude-code/issues/50674)

6. **[#26996] Edit tool silently converts tabs to spaces**
   *Author: @lukewilliamboswell · Comments: 15 · 👍 27*
   When editing tab‑indented files, the tool converts tabs to spaces, causing repeated match failures in follow‑up edits. Workflow: any project using tabs (e.g., Makefiles, Python).
   [Issue](https://github.com/anthropics/claude-code/issues/26996)

7. **[#46767] Tool results silently dropped on Windows (regression since 2.1.101)**
   *Author: @orwellsanimal · Comments: 10 · 👍 5*
   All tools report “missing due to internal error” without any feedback to the model, corrupting conversation state. A high‑severity regression for Windows users.
   [Issue](https://github.com/anthropics/claude-code/issues/46767)

8. **[#64260] Opus 4.8 fabricated a present‑tense user request**
   *Author: @marlian · Comments: 9 · 👍 0*
   The model invented a user command and persisted on it, hallucinating task context. Worries about autonomous behavior behaving unpredictably.
   [Issue](https://github.com/anthropics/claude-code/issues/64260)

9. **[#49933] Native WSL remote integration for Claude Desktop on Windows**
   *Author: @matheuspimentaa · Comments: 9 · 👍 55*
   Request to let the desktop app connect to Linux files/tools inside WSL without manual workarounds. High vote count from the Windows crowd.
   [Issue](https://github.com/anthropics/claude-code/issues/49933)

10. **[#63909] ENOSPC on subprocess output despite free disk space**
    *Author: @bbkyus · Comments: 8 · 👍 16*
    Bash tool reports “Command output was lost: the temp filesystem at /private/tmp/…” when any command produces stdout. Silently loses all output. Affects macOS users.
    [Issue](https://github.com/anthropics/claude-code/issues/63909)

## Key PR Progress (10 picks)
*Selected for fixes, documentation improvements, and infrastructure changes.*

1. **[#66171] Fix symlink following in extensibility.py** *(CLOSED)*
   *Author: @szamaniai*
   Addresses a security issue where the GUI could be tricked by project‑controlled symlinks. Includes vulnerability analysis and reproduction guide.
   [PR](https://github.com/anthropics/claude-code/pull/66171)

2. **[#66416] Fix plugin‑dev validator scripts aborting on first finding** *(OPEN)*
   *Author: @wellkilo*
   Three shell scripts used `set -euo pipefail`, causing validation to stop at the first error instead of collecting all violations. Normal shell “fail‑fast” vs. validation tooling.
   [PR](https://github.com/anthropics/claude-code/pull/66416)

3. **[#67084] Fix Hookify prompt fields and warning context** *(OPEN)*
   *Author: @nyxst4ck*
   Maps legacy `event: prompt` + `pattern:` rules to the current `UserPromptSubmit` payload, keeps `user_prompt` as backward‑compatible alias, and adds context to warnings.
   [PR](https://github.com/anthropics/claude-code/pull/67084)

4. **[#63382] Fix Hookify tests example semantics** *(OPEN)*
   *Author: @Mephistopheles9631*
   Splits a confusing regex‑like test example into explicit `not_contains` checks so the README matches the engine’s actual substring matching.
   [PR](https://github.com/anthropics/claude-code/pull/63382)

5. **[#63460] Update deprecated npm install instructions in plugins/README** *(OPEN)*
   *Author: @weslleyramon001-png*
   Replaces `npm install -g` with current curl/irm recommendations; adds a deprecation note.
   [PR](https://github.com/anthropics/claude-code/pull/63460)

6. **[#63686] Bump stale/autoclose timeouts from 14 to 90 days** *(OPEN)*
   *Author: @caseyWebb*
   Increases the issue lifecycle period to reduce premature auto‑closing of tickets that still need attention. A governance change for the repo.
   [PR](https://github.com/anthropics/claude-code/pull/63686)

7. **[#64607] Fix plugin `.mcp.json` example – wrong `mcpServers` wrapper** *(OPEN)*
   *Author: @arnavnagzirkar*
   Plugin documentation incorrectly wrapped server entries in `mcpServers` inside `.mcp.json`. The flat format is now correctly documented.
   [PR](https://github.com/anthropics/claude-code/pull/64607)

8. **[#65875] Forward `ANTHROPIC_BASE_URL` to agentic_review child process** *(OPEN)*
   *Author: @quan719*
   The advisor (agentic_review) spawns a child CLI process but didn’t propagate `ANTHROPIC_BASE_URL`, breaking users behind proxy/gateway endpoints (LiteLLM, Bifrost).
   [PR](https://github.com/anthropics/claude-code/pull/65875)

9. **[#65916] Clarify `allowed-tools` vs agent `tools:` enforcement** *(OPEN)*
   *Author: @Hadeer-Elsaeed*
   Documents that `allowed-tools` in commands is an auto‑approval mechanism only (unlisted tools are still callable), while `tools:` in subagent frontmatter is a hard restriction.
   [PR](https://github.com/anthropics/claude-code/pull/65916)

10. **[#66372] Detect Docker daemon failures via `$LASTEXITCODE` in devcontainer script** *(OPEN)*
    *Author: @MartinCajiao*
    The Docker prerequisite check used `try/catch` which doesn’t catch non‑zero exits from native commands in PowerShell; now properly inspects `$LASTEXITCODE`.
    [PR](https://github.com/anthropics/claude-code/pull/66372)

## Feature Request Clusters

**Multi‑account / profile switching**
- [#18435] Manage multiple Claude accounts in the desktop app with easy switching (580 👍).
- Several related duplicates exist; the community strongly wants this for team or multi‑profile use.

**WSL / remote development integration**
- [#49933] Native WSL remote integration for Claude Desktop on Windows (55 👍).
- Windows users want seamless access to Linux filesystems and tools without manual SSH or path hacks.

**Desktop user experience improvements**
- [#12513] Option to disable automatic worktree creation for solo developers (79 👍, closed).
- [#59802] Autostart entry crashes Windows 11 Settings (2 👍).
- Users continue to ask for more control over Claude Desktop’s local file management.

**Model behavior / rule adherence** *(spans both requests and bugs)*
- Multiple issues ([#54117], [#49259], [#65951], [#60918]) ask Claude to respect `CLAUDE.md` and multi‑step workflows more reliably. While reported as bugs, the underlying demand is for a formal “process mode” or stricter rule enforcement.

## Developer Pain Points

1. **Memory exhaustion** – [#11315] 129 GB leak and other reports of high RAM consumption make Claude Code unstable on resource‑constrained machines.
2. **Silent failures** – [#46767] tool results dropped, [#63909] ENOSPC on stdout, [#62466] image errors that still bill – all degrade trust and waste usage credits.
3. **Model bypassing user rules** – Multiple users ([@ktimesk1776], @lettstanley-oss) report that Claude consistently skips defined workflows (plan → review → test → ship) despite extensive `CLAUDE.md` documentation. This is the most common behavioral complaint.
4. **Fable 5 safety false positives** – Three fresh issues today ([#67305], [#67304], [#67302]) show that security‑related tasks (CTI, bug reproduction, security audits) are auto‑flagged and force‑switched to Opus 4.8, making Fable 5 unusable for its intended domain.
5. **Tab‑indentation corruption** – [#26996] edit tool silently converts tabs to spaces, breaking projects that rely on tab‑based indentation.
6. **Terminal integration regressions** – [#67289] TUI alternate‑screen breaks tmux scroll‑back; [#66192] copy‑paste stops working on macOS.
7. **Platform‑specific gaps** –

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest – 2026-06-11

## Today’s Update Brief
Two Rust-based alpha releases (`v0.140.0-alpha.4` and `.7`) were published without detailed changelogs. The repository saw heavy community activity: 50 issues and 50 pull requests were updated in the last 24 hours, with a single token‑consumption bug accumulating over 600 comments. A clear wave of Windows‑specific crash reports and session‑visibility bugs emerged, while maintainers merged or proposed several context‑management and goal‑authoring improvements.

## Releases
- **[rust-v0.140.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.7)** – Release 0.140.0-alpha.7 (no further details)
- **[rust-v0.140.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.4)** – Release 0.140.0-alpha.4 (no further details)

## Hot Issues (10 selected)

1. **[Burning tokens very fast](https://github.com/openai/codex/issues/14593)** (🔥 604 comments, 265 👍)
   *Bug / rate-limits* – Business users report excessive token consumption even with modest usage. The issue has been open since March 2026 and remains the most active community thread.

2. **[GitHub PR review uses deactivated workspace after migration](https://github.com/openai/codex/issues/26867)** (13 comments)
   *Bug / auth / code-review* – Migrating from Business to Personal Pro leaves the PR review tool stuck on the old deactivated workspace. 7 upvotes indicate common frustration.

3. **[Desktop project threads disappear while JSONL remains](https://github.com/openai/codex/issues/25463)** (12 comments)
   *Bug / session* – Saved conversations vanish from the Desktop UI but can still be resumed from disk files. User provided a clear reproduction with `RSSHub` project.

4. **[`gpt-5.3-codex-spark` not supported with ChatGPT account](https://github.com/openai/codex/issues/17642)** (12 comments)
   *Bug / auth / CLI* – CLI users on Pro plans receive a 400 error when trying to use the `spark` model. No response from maintainers yet.

5. **[Desktop on Windows extremely slow](https://github.com/openai/codex/issues/23198)** (12 comments, 31 👍)
   *Bug / performance* – App‐specific slowness reported across normal dev sessions on Windows. High upvote count suggests widespread impact.

6. **[Windows Store app fails for non‑ASCII usernames](https://github.com/openai/codex/issues/13553)** (11 comments, 9 👍)
   *Bug / windows-os* – Users with non‑ASCII characters in their Windows profile cannot start Codex at all. Issue persists since March.

7. **[Desktop sidebar hides older conversations](https://github.com/openai/codex/issues/20833)** (9 comments)
   *Bug / app / app-server* – Workspaces with many threads lose earlier conversations from the sidebar; data still exists locally.

8. **[MultiAgentV2 encrypted schema returns 400](https://github.com/openai/codex/issues/26753)** (9 comments, closed)
   *Bug / CLI / subagent* – Enabling `multi_agent_v2` in the alpha CLI caused every turn to fail before processing. Closed after fix, but affected users had to downgrade.

9. **[Desktop crashes after update to 26.602.71036](https://github.com/openai/codex/issues/27175)** (8 comments)
   *Bug / Windows / session* – Multiple Windows users report immediate crash or blank window after the June 8 update. Some have empty sessions.

10. **[Fast mode streaming slowdown](https://github.com/openai/codex/issues/27491)** (6 comments)
    *Bug / performance* – On macOS Tahoe, GPT‑5.5 Fast mode stutters after a few outputs, then stalls. Only opened yesterday but already demanding attention.

## Key PR Progress (10 selected)

1. **[Add comp_hash to model metadata and rollouts](https://github.com/openai/codex/pull/27519)** – Introduces a durable compaction hash that persists across turns and resume/fork replays. Lays groundwork for automatic compaction triggers.

2. **[Compact when comp_hash changes](https://github.com/openai/codex/pull/27520)** – Builds on the above: when the model’s compaction hash differs, the agent automatically compacts history before the next turn. Both PRs authored by @aibrahim-oai.

3. **[Add context remaining tool](https://github.com/openai/codex/pull/27518)** – Gives the model a tool to query remaining token budget on demand, improving self‑awareness during long sessions.

4. **[Add new context window tool](https://github.com/openai/codex/pull/27488)** – Allows the model to request a fresh context window without generating a compaction summary, useful for resetting when context is full.

5. **[Pass auth mode to plugin manager](https://github.com/openai/codex/pull/27517)** – Makes the plugin manager aware of account authentication state, enabling proper filtering of plugins per auth mode.

6. **[Surface runtime warnings in codex exec](https://github.com/openai/codex/pull/27415)** – Prevents silent failures: warnings discovered during thread startup (e.g., invalid `AGENTS.md`) are now forwarded to the CLI user.

7. **[Fall back to manual approval when Guardian times out](https://github.com/openai/codex/pull/27440)** – Interactive sessions no longer block commands if the auto‑reviewer times out; the user gets a manual approval prompt instead.

8. **[Support images in TUI goals (3 of 3)](https://github.com/openai/codex/pull/27510)** – Completes a stacked change that lets the TUI `/goal` command accept long text, pasted content, and now image inputs without truncation.

9. **[Provide ARM64 MinGW powl compatibility](https://github.com/openai/codex/pull/27323)** – Fixes a cross‑linking failure on Windows ARM64 by patching the LLVM MinGW Bazel configuration to include `powl`.

10. **[Add token budget context feature](https://github.com/openai/codex/pull/27438)** – Injects bounded context‑window budget metadata into the model’s visible context when the `token_budget` feature is enabled, helping the model manage its own usage.

## Feature Request Clusters
- **Context compaction transparency** – Several users (e.g., [#21777](https://github.com/openai/codex/issues/21777)) ask for agents to be able to explicitly trigger or expose compaction when context is full, wanting more control over history management.
- **Skill / subagent instruction reliability** – Issue [#23496](https://github.com/openai/codex/issues/23496) reports that skill instructions to use subagents are ignored unless repeated in the prompt, indicating a need for better instruction propagation.
- **Goal authoring improvements** – The stacked PRs (#27508–#27510) indicate that the TUI `/goal` command previously had strict limits on text length and no image support; users likely requested these capabilities.

## Developer Pain Points
- **Windows stability crisis** – At least 5 distinct issues today report crashes, invisible UI, or startup failures on Windows, especially after the June 8 update and for users with non‑ASCII profile paths. This is the most active pain point.
- **Session and thread visibility loss** – Multiple issues (e.g., #25463, #20833, #22796, #27363) describe saved conversations disappearing from the Desktop app’s UI while data remains on disk. Developers lose work context without warning.
- **Token consumption and rate limits** – The 600‑comment issue #14593 shows that many Business users feel their token budgets are being exhausted far too quickly, with no official fix yet.
- **Multi‑agent and tool‑call regressions** – The `multi_agent_v2` alpha feature caused total failures (#26753), and subagent close interactions trigger crashes (#23971), eroding trust in new agent orchestration features.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the Gemini CLI community digest for 2026-06-11.

---

## Gemini CLI Community Digest – 2026-06-11

### 1. Today's Update Brief
Activity remains high, with a sharp focus on agent stability and security hardening. A critical fix for a shell command hang (issue #25166) was merged, alongside several closed PRs addressing terminal resize crashes, path traversal vulnerabilities, and a HITL bypass. The community continues to report pain points around subagent reliability, agent halting behavior, and the Auto Memory system’s robustness.

### 2. Releases
No new releases in the last 24 hours.

### 3. Hot Issues
Top 10 noteworthy issues affecting the developer workflow:

1. **Generalist agent hangs** ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409))
   The agent hangs indefinitely when deferring to the generalist subagent for simple file operations, with the workaround being to disable subagents entirely. 8 reactions indicate this is a high-impact blocker for many users.

2. **Subagent "false success" on MAX_TURNS** ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323))
   The `codebase_investigator` subagent reports `status: "success"` even after hitting the maximum turn limit, masking interruptions. This breaks trust in agent status reporting.

3. **Gemini does not use skills and sub-agents proactively** ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968))
   Users report that custom skills and sub-agents are ignored unless explicitly instructed, reducing the value of custom tooling.

4. **AST-aware file reads and mapping EPIC** ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745))
   Investigates using AST-aware tools for more precise codebase navigation and file reads, aiming to reduce token waste and improve agent accuracy.

5. **Shell command hangs on "Waiting input"** ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166))
   Simple shell commands finish but the UI remains stuck showing "Awaiting user input", causing workflow stalls. A fix was merged today (PR #27842).

6. **Agent thinks too long, does nothing** ([#27785](https://github.com/google-gemini/gemini-cli/issues/27785))
   A fresh P2 bug where the agent enters a prolonged "Thinking..." state with no output or action, leaving users without feedback.

7. **400 error with > 128 tools available** ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246))
   The CLI fails when the tool registry exceeds 128 tools, tripping API boundaries. Users expect automatic scoping of enabled tools.

8. **Auto Memory retries low-signal sessions indefinitely** ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522))
   A session is only marked processed when the agent reads it; low-signal sessions are re-surfaced repeatedly, causing wasted extraction cycles.

9. **Missing deterministic redaction in Auto Memory** ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525))
   Secrets are sent to the extraction model before redaction, and skill logs may leak sensitive data. A structural security concern for the memory pipeline.

10. **Browser agent fails under Wayland** ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983))
    The browser subagent fails to attach or function correctly in Wayland sessions, limiting Linux users to X11.

### 4. Key PR Progress
Notable pull requests merged or actively open:

1. **Fix shell command hang (P1)** ([#27842](https://github.com/google-gemini/gemini-cli/pull/27842))
   Solves the long-standing hang from issue #25166 by adding error handling and a timeout to the PTY output drain gate. Merged today.

2. **Fix terminal resize crash (P1)** ([#27502](https://github.com/google-gemini/gemini-cli/pull/27502))
   Resolves `ioctl EBADF` crashes triggered by a race condition between PTY teardown and React's resize callback. Closed.

3. **HITL truncation lockout (P1/security)** ([#27472](https://github.com/google-gemini/gemini-cli/pull/27472))
   Prevents indirect prompt injection by forcing users to expand and view full tool confirmation content. Closed.

4. **Private-IP hostname bypass fix** ([#27473](https://github.com/google-gemini/gemini-cli/pull/27473))
   `isBlockedHost` now resolves hostnames before checking private IPs, closing a network exfiltration vector. Closed.

5. **Fix `isFunctionCall` for empty parts** ([#27474](https://github.com/google-gemini/gemini-cli/pull/27474))
   Corrects vacuous truth in `Array.prototype.every([])`, where empty messages were misclassified as function calls. Closed.

6. **Path traversal fix for skill install/link** ([#27767](https://github.com/google-gemini/gemini-cli/pull/27767))
   Mitigates three path traversal vulnerabilities in the skill management subsystem by sanitizing frontmatter and symlink targets. Open.

7. **Zero-quota fail-fast** ([#27698](https://github.com/google-gemini/gemini-cli/pull/27767))
   Prevents an infinite retry loop when the API limit is hard-zero by failing fast with a clear error. Open.

8. **Open Plugins hooks support** ([#23697](https://github.com/google-gemini/gemini-cli/pull/23697))
   Implements the Open Plugin protocol for hooking into core events (tool calls, prompts, model interactions). Closed, feature-rich.

9. **Fix `read_background_output` abort** ([#27839](https://github.com/google-gemini/gemini-cli/pull/27839))
   Makes the optional `delay_ms` sleep abort-aware, ensuring that pressing ESC truly cancels the tool. Open.

10. **CI fork artifact poisoning fix** ([#27753](https://github.com/google-gemini/gemini-cli/pull/27753))
    Validates the origin of workflow artifacts in the E2E pipeline to prevent attackers from running secret-bearing code from forks. Open.

### 5. Feature Request Clusters
Recurring proposals without roadmap predictions:

- **AST-aware tooling for codebase mapping**: Multiple issues (e.g., #22745, #22746, #22747) propose replacing string-based file reads with AST-aware tools to improve precision, reduce tokens, and fix misaligned method boundaries.
- **Better subagent autonomy and resilience**: Users want subagents to self-recover, use skills proactively, and stop reporting false success (#22323, #21968, #22232).
- **Agent self-awareness & documentation**: Requests for the agent to correctly describe its own CLI flags, hotkeys, and settings (#21432, #22267).
- **Background operations**: Local agents should be backgroundable (e.g., `Ctrl+B`) for non-blocking tasks like linting (#22741). Remote agents need background processing with advanced auth (#20303).

### 6. Developer Pain Points
Frequent developer frustrations visible in the data:

- **Agent halting and silent failures**: Issues like #21409 (agent hangs), #27785 (thinking forever), and #22323 (false success) destroy user trust in automated workflows.
- **Subagent configuration ignored**: Settings and overrides in `settings.json` are ignored by specific subagents (e.g., browser agent #22267, subagent permissions #22093).
- **Memory system instability**: The Auto Memory feature has multiple open bugs: indefinite retries (#26522), missing redaction (#26525), and silent rejection of invalid patches (#26523). This erodes confidence in persistent context.
- **Shell execution fragility**: Beyond the hang fix (#25166), users report that the model creates random temp scripts (#23571) and that destructive operations are not discouraged (#22672).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-11

## Today's Update Brief

Activity remains high with 30 updated issues in 24 hours and no new releases or PRs. The community is actively reporting regressions in v1.0.60 (three new bugs surfaced today alone) while long-standing grievances around model availability and MCP policy enforcement continue to draw engagement. A notable surge in terminal rendering and clipboard bugs suggests recent releases introduced breaking changes to core UX on Linux and Windows.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#53 — Bring back the GitHub Copilot in the CLI commands to not break workflows](https://github.com/github/copilot-cli/issues/53)**
   *Impact:* The most-reacted issue (34 comments, 75 👍) remains open after 9 months. The community has now started building alternative tooling.
   *Affected workflow:* Any automation or script relying on `github-copilot-cli` as a command.
   *Community reaction:* Frustrated; maintainer silence is driving forking activity.

2. **[#1703 — Copilot CLI does not list all org-enabled models](https://github.com/github/copilot-cli/issues/1703)**
   *Impact:* Enterprise users cannot access Gemini 3.1 Pro and other org-enabled models via CLI despite availability in VS Code. Closed after 31 comments.
   *Affected workflow:* Org-managed model selection in CLI.
   *Workaround:* None confirmed; discrepancy persists between VS Code and CLI.

3. **[#223 — "Copilot Requests" permission for fine-grained tokens should be visible for org-owned tokens](https://github.com/github/copilot-cli/issues/223)**
   *Impact:* Enterprise admins cannot create org-owned fine-grained PATs with Copilot permissions, forcing use of user PATs. 29 comments, 76 👍.
   *Affected workflow:* Automated org deployments.
   *Community reaction:* Request is now 8 months old with no resolution.

4. **[#2082 — ctrl+shift+c no longer copies to clipboard on Linux](https://github.com/github/copilot-cli/issues/2082)**
   *Impact:* Standard terminal copy shortcut broken since v1.0.4 on Ubuntu 24.04. 21 comments.
   *Affected workflow:* All text selection/copy operations.
   *Workaround:* Right-click copy works; community considers this a basic UX regression.

5. **[#1707 — 3rd party MCP servers disabled despite no such policy](https://github.com/github/copilot-cli/issues/1707)**
   *Impact:* v0.0.418 falsely blocks all third-party MCP servers under "Copilot policy" even when no such policy exists. Closed after 9 comments.
   *Affected workflow:* All MCP integrations.
   *Workaround:* Downgrade to v0.0.417.

6. **[#2334 — Please bring back no-alt-screen](https://github.com/github/copilot-cli/issues/2334)**
   *Impact:* alt-screen mode removes scrollback, find functionality, and terminal history. 28 👍.
   *Affected workflow:* Reviewing large outputs; multi-turn sessions.
   *Community reaction:* Strong preference for the old behavior.

7. **[#2434 — Restore support for Gemini Pro](https://github.com/github/copilot-cli/issues/2434)**
   *Impact:* v1.0.14 dropped `gemini-3-pro-preview` — a differentiator from Claude Code and Codex.
   *Affected workflow:* Users relying on Gemini as their primary model.
   *Community reaction:* Model churn undermines confidence.

8. **[#3547 — Background sub-agent hangs at total_turns=0 with gpt-5.5](https://github.com/github/copilot-cli/issues/3547)**
   *Impact:* `task(..., mode="background", model="gpt-5.5")` dispatches successfully but sub-agent never progresses. 7 comments.
   *Affected workflow:* Multi-agent or deferred task patterns.

9. **[#3596 — Error loading model list: Not authenticated](https://github.com/github/copilot-cli/issues/3596)**
   *Impact:* Session resumption fails to list models with auth error; new sessions work fine. 5 comments, 10 👍.
   *Affected workflow:* Long-running sessions with model switching.

10. **[#3756 — Third-party MCP Servers disabled by your organization's Copilot policy](https://github.com/github/copilot-cli/issues/3756)**
    *Impact:* Duplicate of #1707; filed today on v1.0.59.
    *Affected workflow:* Enterprise users with MCP dependencies.
    *Community reaction:* Pattern suggests rollout/regression cycle.

## Key PR Progress

No pull requests were updated or opened in the last 24 hours.

## Feature Request Clusters

**Model Availability & Selection**
- Users consistently request parity with VS Code Copilot model listings. Specific missing models: Gemini 3.1 Pro ([#1703](https://github.com/github/copilot-cli/issues/1703)), Gemini 3 Flash ([#821](https://github.com/github/copilot-cli/issues/821)), Gemini Pro preview ([#2434](https://github.com/github/copilot-cli/issues/2434), [#1664](https://github.com/github/copilot-cli/issues/1664)), Raptor mini, Goldeneye ([#2550](https://github.com/github/copilot-cli/issues/2550)). Users selecting CLI over alternatives like Claude Code cite model variety as key.

**MCP Server Usability & Policy**
- Recurring demand for direct MCP tool invocation syntax (`#mcp-server:tool arg1 arg2`) ([#3752](https://github.com/github/copilot-cli/issues/3752)), and resolution of false-positive policy blocking of third-party MCP servers ([#1707](https://github.com/github/copilot-cli/issues/1707), [#3756](https://github.com/github/copilot-cli/issues/3756), [#2486](https://github.com/github/copilot-cli/issues/2486)).

**Keyboard & Clipboard UX**
- Multiple Linux and Windows users report broken clipboard shortcuts ([#2082](https://github.com/github/copilot-cli/issues/2082), [#3622](https://github.com/github/copilot-cli/issues/3622)), non-working Ctrl+Enter ([#1437](https://github.com/github/copilot-cli/issues/1437)), and missing terminal bell on completion ([#3748](https://github.com/github/copilot-cli/issues/3748)).

## Developer Pain Points

- **Lack of maintainer communication on top issues:** The #53 thread has received no official response in 9 months despite being the most-reacted issue. The community is now building and linking alternatives.
- **Regressions introduced with each release:** v1.0.60 alone caused clipboard failure on Windows ([#3622](https://github.com/github/copilot-cli/issues/3622)), plugin hook regression ([#3727](https://github.com/github/copilot-cli/issues/3727)), and terminal rendering corruption ([#3749](https://github.com/github/copilot-cli/issues/3749), [#3755](https://github.com/github/copilot-cli/issues/3755)).
- **Model churn without clear versioning:** Models are removed between minor releases (e.g., Gemini Pro in v1.0.14) without migration paths or deprecation notices, breaking user workflows and model-switching scripts.
- **MCP policy false positives:** Third-party MCP server blocking returns across multiple versions ([1707](https://github.com/github/copilot-cli/issues/1707), [#3756](https://github.com/github/copilot-cli/issues/3756)), affecting both enterprise and individual Pro+ users, with no root-cause fix visible.
- **Session state fragility:** Resuming sessions with spaces in names fails silently ([#3754](https://github.com/github/copilot-cli/issues/3754)), and authentication state degrades on resume ([#3596](https://github.com/github/copilot-cli/issues/3596)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-11

## Today's Update Brief
No new releases were published in the last 24 hours. The community reported two new bugs involving Yolo-mode approval prompts and incomplete task termination, while the maintainer team pushed through a large batch of resolved pull requests covering Windows compatibility, session recovery, and MCP startup resilience. A total of 23 pull requests were updated, the majority of which were closed after merging.

---

## Releases
No new versions were published in the last 24 hours. The current stable version remains **Kimi Code v0.12.0**.

---

## Hot Issues

### 1. [#2448 — Kimi CLI is prompting for approval in yolo mode](https://github.com/MoonshotAI/kimi-cli/issues/2448)
- **Author:** @iaindooley | **Created:** 2026-06-10 | **Comments:** 0 | **Reactions:** 0
- **Summary:** The reporter is running Kimi Code v0.12.0 with `k2.6` on Debian. Despite being in Yolo (fully autonomous) mode, the CLI continues to prompt for user approval before executing tool calls. This breaks the expected hands-off workflow and forces manual intervention mid-task.
- **Impact:** Yolo mode is a core feature for automated pipelines; this regression undermines its fundamental promise.

### 2. [#2447 — Final Todo item never completes](https://github.com/MoonshotAI/kimi-cli/issues/2447)
- **Author:** @iaindooley | **Created:** 2026-06-10 | **Comments:** 0 | **Reactions:** 0
- **Summary:** When the agent uses the built-in Todo system, the final item never transitions to a completed state. The task appears stuck indefinitely, with no error message or timeout. This occurs with `k2.6` on Debian.
- **Impact:** Breaks task-driven workflows where the user expects a clear "done" signal. May force manual cleanup or session restart.

### 3. [#2173 — Enhancement request](https://github.com/MoonshotAI/kimi-cli/issues/2173)
- **Author:** @odellus | **Created:** 2026-05-07 | **Updated:** 2026-06-10 | **Status:** Closed
- **Summary:** This issue was closed without visible discussion or resolution. No description was provided.

---

## Key PR Progress

### 1. [#2355 — Continue after deferred MCP startup failures](https://github.com/MoonshotAI/kimi-cli/pull/2355)
- **Author:** @he-yufeng | **Status:** Merged
- **Description:** Previously, a failed MCP (Model Context Protocol) server startup during deferred initialization would abort the entire interactive turn. This PR changes the behavior to log the failure and continue without the unavailable MCP servers. Includes a regression test.
- **Significance:** Improves resilience in multi-server setups—one failing plugin no longer blocks the entire conversation.

### 2. [#2354 — Avoid shared rotating logs on Windows](https://github.com/MoonshotAI/kimi-cli/pull/2354)
- **Author:** @he-yufeng | **Status:** Merged
- **Description:** On Windows, concurrent CLI/web/worker processes can rotate the same open `kimi.log` file, leading to corruption or lost log data. This PR introduces per-process log files (`kimi.<pid>.log`) on Windows while preserving the shared `kimi.log` on other platforms.
- **Significance:** Fixes a long-standing Windows-specific logging hazard that complicates debugging.

### 3. [#2327 — Terminate shell process trees on timeout](https://github.com/MoonshotAI/kimi-cli/pull/2327)
- **Author:** @he-yufeng | **Status:** Merged
- **Description:** Foreground shell commands now run in their own process group/session. When a timeout or cancellation occurs, the entire process tree (including child processes) is terminated, rather than just the parent shell. Non-local KAOS backends are kept compatible via a new flag.
- **Significance:** Prevents runaway subprocesses from persisting after a timeout, which could consume system resources indefinitely.

### 4. [#2289 — Avoid Windows console font reset](https://github.com/MoonshotAI/kimi-cli/pull/2289)
- **Author:** @he-yufeng | **Status:** Merged
- **Description:** Fixes a Windows-specific issue where spawning subprocesses resets the console font. The fix passes `CREATE_NO_WINDOW` to `LocalKaos.exec()` on Windows, preventing unnecessary console window creation.
- **Significance:** Addresses a visual disruption that annoyed Windows users during local execution.

### 5. [#2333 — Open archived sessions from sidebar](https://github.com/MoonshotAI/kimi-cli/pull/2333)
- **Author:** @he-yufeng | **Status:** Merged
- **Description:** A Web UI fix: archived sessions in the sidebar can now be opened as the current active session. Previously, the URL/session validator would clear a selected archived session, making it impossible to resume it.
- **Significance:** Completes the UX flow for session archival and retrieval in the Web interface.

### 6. [#2334 — Sanitize surrogates before Kimi requests](https://github.com/MoonshotAI/kimi-cli/pull/2334)
- **Author:** @he-yufeng | **Status:** Merged
- **Description:** Lone UTF-16 surrogate code units in system prompts, history text, or tool-call arguments are now sanitized before being sent to the Kimi API. Includes a regression test with `ensure_ascii=False`.
- **Significance:** Prevents API rejection due to malformed Unicode, especially in edge-case conversation history or tool outputs.

### 7. [#2239 — Continue latest persisted session](https://github.com/MoonshotAI/kimi-cli/pull/2239)
- **Author:** @he-yufeng | **Status:** Merged
- **Description:** The `--continue` flag now falls back to the newest non-empty session for the current working directory when the metadata lacks a `last_session_id` or points at a stale session. Previously, it would error out.
- **Significance:** Improves the session resumption experience, especially after crashes or directory changes.

### 8. [#2217 — Recover background auto-trigger after cooldown](https://github.com/MoonshotAI/kimi-cli/pull/2217)
- **Author:** @he-yufeng | **Status:** Merged
- **Description:** After three consecutive failed background follow-up runs, the auto-trigger pauses for 10 minutes. This PR resets the failure counter after the cooldown, allowing the agent to retry automatically. User input remains responsive during cooldown.
- **Significance:** Balances background noise reduction with eventual recovery from transient failures.

### 9. [#2211 — Propagate afk mode to workers](https://github.com/MoonshotAI/kimi-cli/pull/2211)
- **Author:** @he-yufeng | **Status:** Merged
- **Description:** When `kimi --afk web` is used, the Web server runs in non-interactive mode, but worker subprocesses did not receive the AFK flag. Without this, workers could still prompt for approval and behave as interactive clients. This PR propagates the flag.
- **Significance:** Fixes a correctness issue in the fully autonomous Web deployment scenario.

### 10. [#2387 — Preserve shell command headline details](https://github.com/MoonshotAI/kimi-cli/pull/2387)
- **Author:** @Pluviobyte | **Status:** Open
- **Description:** Long `Used Shell (...)` headlines currently go through a generic `shorten_middle(..., width=50)` path, which can obscure command details. This PR aims to preserve more meaningful context in the terminal display.
- **Significance:** Improves readability for developers reviewing shell command logs in the CLI output.

---

## Feature Request Clusters
*No recurring feature request themes were identified in today's issue data.*

---

## Developer Pain Points

- **Windows environment friction:** Multiple merged PRs this period address Windows-specific issues: shared log rotation (#2354), console font reset (#2289), console window creation (#2199), and non-UTF-8 filename handling (#1893). This suggests ongoing pain for Windows users, particularly those on Chinese Windows systems.
- **Session reliability after crashes:** Three open/merged PRs (#2386, #2383, #2239) directly deal with session corruption or resumption failures after a kill, OOM, or high memory pressure. Mid-turn terminations remain a brittle path.
- **Autonomy mode inconsistencies:** Issue #2448 (Yolo-mode approval prompts) and PR #2211 (AFK mode propagation) highlight that fully autonomous modes still have edge cases where approval logic leaks through, undermining the confidence in hands-off operation.
- **MCP server startup as a single point of failure:** PR #2355 fixes a case where a deferred MCP startup failure could abort the entire interactive turn, indicating that plugin/server startup failure handling is still not fully robust.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-11

## 1. Today’s Update Brief
Four patch releases (v1.17.0 through v1.17.3) landed today, fixing desktop crashes, config‑auth recovery, Linux launcher identity, and adding faster file search with `fff`. The issue tracker is active with 50 updated items; high‑profile requests include paste‑to‑attach images and reasoning‑effort controls. Ten PRs are open or merged, addressing retry logic, shell tool safety, and a new v2 session API.

## 2. Releases
Four versions shipped in the last 24 hours:

- **v1.17.3** – Fixed desktop crash introduced in v1.17.2.
- **v1.17.2**
  - *Core*: Recover from expired remote config auth by re‑prompting login (contributed by @Ayushlm10). Subagents can again use their own configured permissions.
  - *Desktop*: Restored Linux launcher and icon identity so pinned apps continue to open correctly.
- **v1.17.1**
  - *Improvements*: References can include usage descriptions for agents, appear in new docs, and be hidden from `@` autocomplete.
  - *Bugfixes*: Deprecated `reference` config entries now load under the newer `references` key. MCP prompt and resource requests fixed.
- **v1.17.0**
  - Faster file search across large projects via new `fff`‑backed search tools (@dmtrKovalenko).
  - Added `X-Session-Id` headers for proxy setups needing sticky routing (@songchaow).
  - Added Cohere North model support.
  - Added `reasoning` as an interleaved field option.

## 3. Hot Issues (10 selected)

1. **[#906 – Feature: Paste to attach image](https://github.com/anomalyco/opencode/issues/906)**
   *36 comments, 22 👍*
   Users want clipboard paste support for images (e.g., from Excalidraw). Currently only drag‑and‑drop works. High demand, open for 11 months.

2. **[#14273 – Free usage exceeded bug with Zen free models](https://github.com/anomalyco/opencode/issues/14273)**
   *27 comments, 1 👍*
   Users with a positive Zen balance see “Free usage exceeded. Add credits” when using Kimi K2.5 or MiniMax2.5. Confusing billing behavior. Closed as of today.

3. **[#6330 – Generic UI Intent Channel for cross‑client plugin‑driven UX](https://github.com/anomalyco/opencode/issues/6330)**
   *17 comments, 8 👍*
   Proposal to add a “UI intent” event type to the server‑client protocol so plugins can emit UI actions (notifications, prompts, etc.). Open for 6 months.

4. **[#450 – Support for reasoning_effort parameter in UI](https://github.com/anomalyco/opencode/issues/450)**
   *12 comments, 26 👍*
   Many models (OpenAI, Gemini, DeepSeek) support a reasoning‑effort parameter. Users want a UI control, similar to the `/models` command. Closed today.

5. **[#25038 – Long‑running shell commands hang after “BUILD SUCCESSFUL”](https://github.com/anomalyco/opencode/issues/25038)**
   *11 comments, 6 👍*
   Gradle builds (and likely other long commands) leave OpenCode hanging even after successful completion. Blocks CI‑style workflows.

6. **[#26762 – Cerebras zai‑glm‑4.7 fails on multi‑turn with reasoning_content](https://github.com/anomalyco/opencode/issues/26762)**
   *10 comments, 2 👍*
   Using `cerebras/zai-glm-4.7` with reasoning and tool calls errors on follow‑up turns: `messages.2.assistant.reasoning_content` unsupported. Requires investigation.

7. **[#6490 – Web UI cannot browse/select folders outside default user profile](https://github.com/anomalyco/opencode/issues/6490)**
   *10 comments, 12 👍*
   When using `opencode web`, the folder picker only shows system folders (Downloads, Contacts, etc.) on Windows, preventing selection of project folders on other drives.

8. **[#30086 – High CPU usage in newer versions](https://github.com/anomalyco/opencode/issues/30086)**
   *9 comments, 1 👍*
   Since ~7 days ago, CPU spiked dramatically; users report lag with 3+ sessions. Possibly related to recent `fff` integration or snapshot machinery.

9. **[#31247 – Opus 4.8 via GitHub Copilot leaks literal tool‑call text](https://github.com/anomalyco/opencode/issues/31247)**
   *8 comments*
   When using `github-copilot/claude-opus-4.8`, the assistant repeatedly inserts raw tool markup (e.g., `call read`, `<invoke>`) into normal messages. Leaked text persists as assistant content.

10. **[#26602 – Desktop hits 5‑minute Headers Timeout with slow local providers](https://github.com/anomalyco/opencode/issues/26602)**
    *8 comments*
    OpenCode Desktop aborts local OpenAI‑compatible provider requests after exactly 5 minutes, even when `"timeout": false` is set. Prevents long‑running local inference.

## 4. Key PR Progress (10 selected)

1. **[#31822 – feat(server): add v2 session API endpoints](https://github.com/anomalyco/opencode/pull/31822)**
   Adds v2 location resolution, session create/get endpoints, and session‑scoped pending question listing. Regenerates JS SDK and adds HTTP API exerciser. *(Open)*

2. **[#31805 – fix(tui): preserve exit epilogue during scoped shutdown](https://github.com/anomalyco/opencode/pull/31805)**
   Prevents TUI from clearing the session exit message when scoped shutdown runs. Snapshots epilogue before cleanup. *(Open, contributor @tobwen)*

3. **[#31819 – fix(opencode): retry on xfyun engine busy response](https://github.com/anomalyco/opencode/pull/31819)**
   Adds `engine busy` to the retryable error list for xfyun provider, avoiding unnecessary request failures. *(Open, needs compliance)*

4. **[#13610 – feat(desktop): add keyboard shortcuts to switch projects (Cmd+1-9)](https://github.com/anomalyco/opencode/pull/13610)**
   Adds Mod+1–9 shortcuts for sidebar project switching, similar to Chrome/VS Code tab switching. *(Open, contributor @dl-alexandre)*

5. **[#31817 – fix(core): add compaction key to isV1 detection](https://github.com/anomalyco/opencode/pull/31817)**
   Patches `isV1()` so configs containing only `compaction` fields (e.g., `preserve_recent_tokens`) are correctly recognised as V1, preventing silent drops. *(Open, contributor)*

6. **[#31329 – fix(opencode): graceful error handling for PDF/image file read failures](https://github.com/anomalyco/opencode/pull/31329)**
   Prevents session crashes when PDF or image files are corrupted or have permission issues. Catches errors in `prompt.ts`. *(Open, contributor)*

7. **[#31809 – fix(tool): correct misleading Read prerequisite in tool descriptions](https://github.com/anomalyco/opencode/pull/31809)**
   Fixes tool help text that falsely claimed Write/Edit tools require Read to be called first. *(Open, contributor)*

8. **[#31808 – fix(util): handle URIError in decodeDataUrl for non‑encoded %](https://github.com/anomalyco/opencode/pull/31808)**
   Prevents `URIError: URI malformed` when processing non‑base64 data URLs containing unescaped `%` characters. *(Open)*

9. **[#31806 – fix(tool): remove undocumented +100ms from shell timeout](https://github.com/anomalyco/opencode/pull/31806)**
   Removes an extra 100 ms buffer added to user‑specified shell timeouts (line 550 in `shell.ts`). *(Open)*

10. **[#31811 – test(opencode): simplify share layer wiring](https://github.com/anomalyco/opencode/pull/31811)**
    Replaces manual ShareNext provisioning with `LayerNode` graphs, consolidates integration tests for session projection, persistence, event delivery, and share sync. *(Closed, contributor @jlongster)*

## 5. Feature Request Clusters

- **Image attachment in chat & question tool** (#906, #31791) – Users want paste and drag‑and‑drop support for images not only in the main chat but also inside agent‑initiated question UIs (MCQ/structured input). High thumbs‑up count suggests broad demand.

- **Reasoning effort / thinking toggle** (#450, #24610, #27555) – Multiple requests for a UI control to enable/disable thinking mode and adjust reasoning effort, particularly for DeepSeek models where thinking defaults on and can be undesired for translation or simple tasks.

- **Zen account management** (#18016, #14273) – Frustration with inability to delete Zen accounts and misleading “free usage exceeded” messages despite positive balance. Users want clearer billing indicators and account deletion support.

- **GitHub Actions enhancements** (#30468, #25699) – Feature requests for editing existing comments on PRs (avoiding spam of new comments per push) and fixing failures when GitHub Actions runs on private organization repos.

- **Cross‑client plugin UX & UI customisation** (#6330, #24373, #31791) – Proposals for a generic UI intent channel to let plugins drive UI elements, and ability to hide/resize the right‑side status panel (token/cost stats). Also, paste support in question tool UI.

- **Per‑session model selection** (#31750, #31791) – ACP clients and power users want to specify a different model per session without editing `opencode.json`. Currently the model is fixed at startup.

## 6. Developer Pain Points

- **High CPU / memory usage** (#30086, #16438) – Several reports of CPU spikes and large snapshot files (up to 16 GB), forcing manual cleanup. Likely tied to new `fff` search or snapshot machinery.

- **Shell command hangs & timeouts** (#25038, #26602) – Build commands (Gradle, etc.) hang after success; local providers fail with a hard 5‑minute header timeout even when timeout is disabled. Blocks automated workflows.

- **Startup crashes & config issues** (#28370, #31747, #31481) – “Unexpected server error” on startup from various causes: OneDrive file provider trees, corrupted `.agents/` files, config‑loading race conditions. Multiple closed issues suggest ongoing fixes.

- **Stale permission dialogs** (#28312, #31820) – TUI permission prompts can remain active after the server has no pending requests, locking the session. Users want auto‑approve for trusted localhost origins.

- **Tool safety gaps** (#31774, #31809) – The V1 shell tool lacks destructive‑command protection (e.g., `rm -rf /`), unlike the V2 bash tool. Also, misleading tool descriptions claim Read is a prerequisite for Write/Edit.

- **Provider‑specific regressions** (#26762, #31247, #31755) – Newer versions break support for certain providers: Cerebras reasoning fields, Copilot Opus 4.8 tool‑call text leaks, MiniMax caching issues after a thinking toggle change.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-11

## Today's Update Brief

Activity was elevated, driven almost entirely by bug reports and feature requests targeting terminal interactivity, subagent workflows, and MCP tool integration. No new releases landed in the last 24 hours, but the project saw 7 new PRs opened and 32 issues updated, with a strong concentration of CLI rendering bugs and session-management enhancements. Two security-related issues (env command bypass, MCP schema coercion) drew maintainer attention.

## Releases

No new releases in the last 24 hours.

## Hot Issues (Top 10 by Community Interest)

**1. VP mode scroll conflict with Composer** [#4942](https://github.com/QwenLM/qwen-code/issues/4942)
When Virtualized History is enabled, users cannot scroll chat history via keyboard or mouse wheel while the Composer is active. This breaks the most common post-response workflow — scrolling back to review output. The issue is tagged `welcome-pr` and accumulated 4 comments within 24 hours. Affected workflow: chat review during active editing sessions.

**2. SGR mouse wheel sequences leak as typed text** [#4974](https://github.com/QwenLM/qwen-code/issues/4974)
With SGR mouse tracking enabled, every wheel event sends raw escape sequences (`64;50;15M`) into the input box. The root cause is a double-consumption race between `useMouseEvents` (Ink pipeline) and `KeypressContext` feeding raw bytes through readline. Two comments confirm this is reproducible in real terminals. Severity: P2.

**3. Subagent image reading returns unrelated content** [#4876](https://github.com/QwenLM/qwen-code/issues/4876) (CLOSED)
A subagent configured for image analysis returns content completely unrelated to the image when using `read_file`, while the main agent using the same model works correctly. The root cause is not yet identified but was triaged and closed. The reporter provided clear reproduction: subagent vs. main agent parity issue with vision capabilities.

**4. Terminal resize fragments scrollback** [#4891](https://github.com/QwenLM/qwen-code/issues/4891)
Resizing the terminal during streaming generation produces fragmented output with inconsistent column widths in the scrollback buffer. Tool-call box borders terminate at wrong columns. Affected workflow: any long-running generation where the user might resize the terminal. Tagged `welcome-pr`.

**5. Auto-generated memory interferes with normal CLI invocation** [#4976](https://github.com/QwenLM/qwen-code/issues/4976) (OPEN)
The automatic memory recall mechanism injects irrelevant memory context before every turn, causing the model to pursue unrelated tool-call paths (e.g., trying to use a DingTalk document tool for ATA article reads). The reporter documented a detailed timeline of wasted rounds. This highlights a recurring tension between memory automation and task-precision.

**6. SchemaValidator misses numeric string coercion for MCP** [#4966](https://github.com/QwenLM/qwen-code/issues/4966)
When LLMs call MCP tools (e.g., Playwright), they frequently emit numeric parameters as strings (`"depth": "3"` instead of `"depth": 3`). Strict MCP servers reject these. The fix would require `SchemaValidator` to coerce string→number when the schema expects numeric types. Active discussion about the correct coercion strategy.

**7. Recovery from max_tokens truncation** [#4964](https://github.com/QwenLM/qwen-code/issues/4964)
After a response is truncated due to `max_tokens`, subsequent continuation attempts fail because the truncated context is not properly restored. The user hit this during a file-write workflow, losing the entire generation. This is a long-standing UX issue that cuts across token management and session recovery.

**8. Background subagents auto-deny permission tool calls** [#4928](https://github.com/QwenLM/qwen-code/issues/4928)
Background subagents running with `getRawSubagentResponse` silently deny any tool call that requires interactive approval. The request is to queue those approvals to the parent session's UI as async prompts. Tagged for the background-automation roadmap. This is the fourth issue this month touching the subagent permission model.

**9. grep/fgrep should satisfy read-before-edit check** [#4939](https://github.com/QwenLM/qwen-code/issues/4939)
When the model uses `grep_search` to view file content, it does not satisfy the edit tool's read-before-edit enforcement, forcing an unnecessary separate `Read` call. This adds latency and token waste for a common pattern (find line, edit line). The suggestion is to treat read-like tools as satisfying the pre-edit read requirement.

**10. Security: `env` command in read-only allowlist enables arbitrary execution** [#4930](https://github.com/QwenLM/qwen-code/issues/4930) (CLOSED)
The `env` command is included in `READ_ONLY_ROOT_COMMANDS`, but `env` can be abused to set arbitrary environment variables. The issue was quickly triaged and closed, suggesting a fix is already in progress. This is a moderate-severity security finding that bypasses the user confirmation prompt for shell commands.

## Key PR Progress

**1. Serialize team task claims per agent** [#4981](https://github.com/QwenLM/qwen-code/pull/4981)
Under concurrent auto-claim, the same teammate could be assigned two tasks at the same moment. This PR adds per-agent serialization plus file-locking parity with the team mailbox. Affects the experimental multi-agent team mode.

**2. Isolate per-session stats in daemon mode** [#4954](https://github.com/QwenLM/qwen-code/pull/4954)
Adds a `Map<sessionId, SessionMetrics>` dual-write pattern inside `UiTelemetryService` so each session's API/tool/file metrics are tracked independently instead of showing process-wide cumulative data. Critical for the daemon mode's multi-workspace use case.

**3. SSE reconnection stability and error routing** [#4952](https://github.com/QwenLM/qwen-code/pull/4952)
Implements SSE delta resume with `Last-Event-ID`, improves error routing between webshell and webui, and adds a toast API for user-facing error notifications. Affects web-shell users in daemon mode.

**4. Prevent FIFO blocking on startup** [#4894](https://github.com/QwenLM/qwen-code/pull/4894)
When `--json-file` points to a FIFO with no reader connected, the bridge now opens with `O_RDWR | O_NONBLOCK` instead of blocking indefinitely. Also adds a 1 MB high-water mark buffer. This fixes a startup hang for users piping structured output.

**5. Add task auth and goal workflows to web-shell** [#4856](https://github.com/QwenLM/qwen-code/pull/4856)
Adds structured rendering for task status, auth/goal panels, and new daemon/session API consumers. This continues the daemon-mode feature batch with frontend parity improvements.

**6. Reduce retained interactive tool output memory** [#4971](https://github.com/QwenLM/qwen-code/pull/4971)
Oversized tool-output display metadata is now compacted before storage in scheduler state, live UI history, chat recording metadata, and subagent display summaries. This reduces memory pressure during long interactive sessions with large tool outputs.

**7. Fix release workspace test failures** [#4980](https://github.com/QwenLM/qwen-code/pull/4980)
Fixes scheduled Release workflow failures by making the stats delta test time-independent and updating YAML parser assertions. Required to unblock the release pipeline.

**8. Cursor-based pagination for session list** [#4902](https://github.com/QwenLM/qwen-code/pull/4902)
Implements `?cursor=<mtime>&size=<n>` query params for `GET /workspace/:id/sessions` through REST and ACP HTTP transport layers. Also returns `nextCursor` per ACP protocol. Enables efficient session browsing for users with many sessions.

**9. POST /workspace/reload for unified settings hot-reload** [#4965](https://github.com/QwenLM/qwen-code/pull/4965)
Adds a single endpoint that hot-reloads all settings to idle sessions, with diff detection via `diffSettingsKeys` — only refreshes what actually changed. Replaces the narrower `POST /workspace/reload-env`. Important for daemon-mode administrators making configuration changes.

**10. Close @path completion dropdown on Enter accept** [#4841](https://github.com/QwenLM/qwen-code/pull/4841)
Adds `completion.resetCompletionState()` after accepting a completion with Enter (but not Tab). Fixes the long-standing issue where the completion dropdown stayed open after selecting a folder path.

## Feature Request Clusters

**Subagent & Team Workflow Automation** — Four issues this digest period touch subagent behavior: permission-bubbling for background agents ([#4928](https://github.com/QwenLM/qwen-code/issues/4928)), default fork-subagent promotion ([#4956](https://github.com/QwenLM/qwen-code/issues/4956)), teammate identity preservation in approvals ([#4979](https://github.com/QwenLM/qwen-code/pull/4979)), and task-claim serialization ([#4981](https://github.com/QwenLM/qwen-code/pull/4981)). The community is pushing for subagents to be usable out-of-the-box without manual agent definitions.

**Read-Before-Edit Optimization** — [#4939](https://github.com/QwenLM/qwen-code/issues/4939) requests that grep-like tools satisfy the pre-edit read check, eliminating unnecessary separate Read calls. This is a recurring request that would reduce latency for common find-and-edit workflows.

**MCP Server Policy Flexibility** — [#4966](https://github.com/QwenLM/qwen-code/issues/4966) (schema coercion) and [#4940](https://github.com/QwenLM/qwen-code/issues/4940) (deniedMcpServers list) both reflect growing MCP adoption. Users want both broader tolerance for model-generated values and more granular server access control.

**Time Awareness in CLI** — [#4899](https://github.com/QwenLM/qwen-code/issues/4899) requests optional timestamps on CLI responses and time-awareness passed to the model. This would help users track conversation pacing and give the model temporal context.

## Developer Pain Points

**Terminal Interactivity Fragility** — The cluster of bugs around mouse sequences, scroll conflicts, resize handling, and cooked-mode drops ([#4942](https://github.com/QwenLM/qwen-code/issues/4942), [#4974](https://github.com/QwenLM/qwen-code/issues/4974), [#4891](https://github.com/QwenLM/qwen-code/issues/4891), [#4973](https://github.com/QwenLM/qwen-code/issues/4973), [#4921](https://github.com/QwenLM/qwen-code/issues/4921)) suggests the CLI’s raw-mode integration with Ink and readline has systemic issues. Multiple users are hitting regressions in the same subsystems.

**Subagent Reliability vs. Main Agent** — [#4876](https://github.com/QwenLM/qwen-code/issues/4876) (image reading) and [#4976](https://github.com/QwenLM/qwen-code/issues/4976) (memory interference) both show that subagents behave differently from the main agent, even when using the same model. This asymmetry is confusing for users building multi-agent workflows.

**Session Continuity After Truncation** — [#4964](https://github.com/QwenLM/qwen-code/issues/4964) and [#4945](https://github.com/QwenLM/qwen-code/issues/4945) (hard/auto threshold identical) indicate that the token management system lacks graceful recovery paths when limits are hit. Users lose work or see unexpected behavior when compaction fails to trigger at the right time.

</details>