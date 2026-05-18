# AI CLI Tools Community Digest 2026-05-18

> Generated: 2026-05-18 02:32 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report — 2026-05-18

## 1. Daily Cross-Tool Overview

Today saw moderate-to-high activity across the six tracked AI CLI tools, with 9 total releases (7 from Qwen Code, 1 from OpenCode, 1 nightly from Gemini CLI) and approximately 200+ issues and 140+ PRs updated collectively. Two dominant themes emerged: Windows platform compatibility gaps continue to generate bugs across Claude Code, Codex, Copilot, Kimi Code, and OpenCode; and multi-agent orchestration remains a top community request for Claude Code, Codex, and Gemini CLI. Qwen Code stood out with the most releases and active work on daemonizing the CLI for production server use. No tool had a stable release today—all releases were nightly, preview, or patch versions.

## 2. Activity Comparison

| Tool | Issues Updated | PRs Active/Updated | Releases Today | Maintainer Response Level |
|---|---|---|---|---|
| Claude Code | 30+ | 11 | 0 | Low (many open issues, few closed) |
| OpenAI Codex | 50 | 42 | 0 | Moderate (several PRs merged, active triage) |
| Gemini CLI | 50 | 22 | 1 (nightly) | High (active PR reviews, sec fix merged) |
| Copilot CLI | 11 | 1 | 0 | Low (few responses to new bugs) |
| Kimi Code CLI | 8 | 3 | 0 | Low (two Windows bugs closed) |
| OpenCode | 50+ | 50+ | 1 (v1.15.4 patch) | Moderate (patch release, active PRs) |
| Qwen Code | 10+ issues, 10 key PRs | 10+ | 3 (preview + nightly) | High (merge of critical fix #4243, active daemon PRs) |

*Note: Issue counts reflect items updated in the last 24 hours per digest summaries, not total open issues.*

## 3. Shared Feature Directions

**Multi-Agent Orchestration & Collaboration** — Appears across three tools:
- Claude Code: Inter-session communication (#24798), agent-to-agent protocol (#28300), per-agent model routing (#38698)
- Codex: Git worktrees for parallel agents (#8570, closed—likely implemented), v1 multi-agent tools behind tool search (#23144 PR)
- Gemini CLI: Generalist agent hangs (#21409), subagent false success reports (#22323), background subagents (#22741)

**Windows Platform Compatibility** — Affecting five tools simultaneously:
- Claude Code: Blank desktop (#55879), TUI corruption (#59163), bypassPermissions failure (#42975)
- Codex: Shell freezes (#16374), automation failures (#16994, #20517), ARM64 builds (#22686 PR)
- Copilot CLI: pwsh.exe hardcoded blocking PS 5.1 (#1680)
- Kimi Code: Paste image fails (#2315), PowerShell 7 syntax incompatibility (#2194, closed)
- OpenCode: Corrupted executables, startup errors (#27530)

**Cost & Billing Transparency** — Rising concern across multiple communities:
- Claude Code: $1,050 overcharge from silent Opus switch (#60093), intelligent model routing (#27665)
- Copilot CLI: Excessive token usage with qwen3.6-plus (#3359)
- Kimi Code: TPD rate-limit miscalculation (#2318)

**Context Management & Memory** — Cross-tool concern:
- Gemini CLI: Auto memory system bugs (#26516), indefinite retrying of low-signal sessions (#26522)
- Qwen Code: Context loss after idle (#4239, fixed today), microcompaction eviction (#4259)
- Copilot CLI: Claude Opus context capped at 200K vs 1M capability (#3355)
- OpenCode: Sticky prompt request (#28035)

**MCP & Plugin System Reliability** — Recurring theme:
- Claude Code: MCP cold-start rejections (#55788), connector not loading (#58727)
- Codex: MCP tool support in Web (#4226, highly upvoted)
- OpenCode: Broken `permission.ask` hook (#7006), plugin SDK gaps (#28069)
- Qwen Code: MCP client guardrails PR (#4247)

## 4. Differentiation Analysis

**Claude Code** continues to position as the most feature-rich tool for complex enterprise coding workflows, with deep agent orchestration requests and cost-control features dominating the community conversation. The $1,050 overcharge incident (#60093) is a trust-sensitive issue unique to this tool.

**OpenAI Codex** focuses on IDE integration depth (diff/approval in-panel #2998, detachable chat #3195) and cloud/web MCP support (#4226). Its Windows stability issues are the most numerous among all tools, but maintainer responsiveness on PRs is moderate.

**Gemini CLI** is investing heavily in agent reliability and memory system quality, with two P1 bugs on agent hangs and false success reports. The AST-aware tooling investigation (#22745) represents a unique technical direction not seen in other tools.

**Copilot CLI** has the lightest activity but stands out for cross-platform compatibility issues (Android/Termux #3333, PowerShell 5.1 #1680) and model flexibility requests (BYOK thinking toggle #3354, configurable context window #3355).

**Kimi Code CLI** shows the lowest activity and appears to serve a narrower user base. Its community is primarily focused on Windows compatibility (two bugs closed today) and basic performance complaints (#2314).

**OpenCode** has the most active plugin ecosystem discussion with 50+ PRs and a community plugin listing. The long-standing clipboard bug (#4283, 93 comments) and recent Tauri-to-Electron migration regressions (#27469) indicate growing pains from platform transitions.

**Qwen Code** is uniquely pursuing daemon production-readiness (Mode B) with OAuth device flow, filesystem isolation, and MCP budget enforcement—a server-grade direction distinct from other CLI tools. Memory leaks remain the top critical concern.

## 5. Community Activity Notes

**Most active by total issue and PR volume:** OpenAI Codex, Gemini CLI, and OpenCode each saw 50+ issues and 20+ PRs updated today.

**Most releases:** Qwen Code (3 releases: preview + nightly), followed by OpenCode (1 patch) and Gemini CLI (1 nightly).

**Best maintainer responsiveness:** Gemini CLI and Qwen Code show the most active PR merges and issue closure. Qwen merged a critical context-loss fix (#4243) today. OpenCode shipped a patch release addressing three bugs. Claude Code and Copilot CLI show low maintainer response to new issues.

**Highest community frustration signals:** Claude Code's $1,050 overcharge (#60093) and Gemini's agent hangs (#21409) have potential to grow. OpenCode's clipboard bug (#4283) at 6 months old with 83 👍 signals a persistent unresolved pain point.

**New issue velocity:** Copilot CLI had 7 of its 11 updated issues created today, suggesting a batch of fresh bugs hitting a less active community.

## 6. Evidence-Backed Observations

1. **Windows compatibility is the single largest cross-tool pain point today.** Five of six tracked tools have open Windows-specific bugs reported in the last 24 hours. This spans shell freezes (Codex), blank screens (Claude), hardcoded path issues (Copilot), syntax incompatibility (Kimi), and corrupted executables (OpenCode). Only Gemini CLI had no Windows-specific reports today.

2. **Multi-agent orchestration is converging as a shared community demand.** Claude Code, Codex, and Gemini CLI all have high-engagement threads requesting better inter-agent communication, parallel execution, or subagent delegation. The approaches differ (MCP protocol vs. git worktrees vs. background agents), but the underlying need for coordinated multi-agent workflows is consistent.

3. **Cost transparency is becoming a trust issue, not just a UX preference.** The Claude Code $1,050 overcharge (#60093) and the Copilot CLI token consumption disparity (#3359) represent actual monetary impacts. Kimi Code's TPD miscalculation (#2318) blocks heavy users. These are no longer feature requests—they are operational reliability concerns.

4. **Qwen Code is the only tool actively shipping a server/daemon model.** While other tools focus on CLI and IDE integration, Qwen's Mode B initiative (#4175 roadmap) with OAuth, filesystem guards, and MCP budget enforcement represents a fundamentally different deployment model. No cross-tool signal suggests others are following this direction yet.

5. **No clear cross-tool signal for a dominant next-generation feature.** Each tool community is focused on different priorities: AST-aware tooling (Gemini), plugin extensibility (OpenCode), cloud MCP (Codex), agent protocols (Claude), model flexibility (Copilot), and daemonization (Qwen). The ecosystem remains fragmented in its evolution paths.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-05-18

## Today’s Update Brief

No new releases landed in the last 24 hours, but community activity remained high with 30+ updated issues and 11 pull requests. Cost/billing confusion and agent collaboration workflows dominate discussion, while several multi-day Windows and macOS bugs continue to draw attention. The `bypassPermissions` mode not working on Windows Desktop (#42975) and a $1,050 overcharge report (#60093) represent the most impactful open items.

## Releases

None in the last 24 hours.

## Hot Issues

1. **#59033 – [CLOSED] [BUG] Unhandled Case [object Object]**
   *Affected workflow:* Platform-wide (Windows, VSCode) – users encountering a generic unhandled error with no clear message.
   *Impact:* 69 comments, 85 👍. Labeled duplicate; closed without resolution visible. High frustration due to lack of actionable output.
   [GitHub](https://github.com/anthropics/claude-code/issues/59033)

2. **#24798 – [OPEN] Inter-session communication for multi-Claude workflows**
   *Affected workflow:* Users running multiple parallel Claude Code sessions who need to sequence dependent tasks.
   *Impact:* 27 comments, 14 👍. Long-running feature request (since Feb 2026). No maintainer response visible.
   [GitHub](https://github.com/anthropics/claude-code/issues/24798)

3. **#42248 – [CLOSED] Desktop app (macOS) ignores PATH from all sources**
   *Affected workflow:* Read tool cannot find system tools (e.g., `pdftoppm`) because the macOS Desktop app does not inherit shell PATH.
   *Impact:* 21 comments, 15 👍. Closed; likely fixed. Workaround previously required manual symlinks.
   [GitHub](https://github.com/anthropics/claude-code/issues/42248)

4. **#55879 – [OPEN] Claude Desktop blank screen on Windows + Cowork unusable**
   *Affected workflow:* Windows users on Max subscriber tier report a 9-day outage with blank screen and sandbox API errors.
   *Impact:* 20 comments, 3 👍. Persistent issue affecting paying subscribers. No resolution in thread.
   [GitHub](https://github.com/anthropics/claude-code/issues/55879)

5. **#28300 – [OPEN] Multi-agent collaboration across machines (Agent-to-Agent protocol)**
   *Affected workflow:* Users needing multiple Claude agents on different machines to coordinate on large software projects.
   *Impact:* 18 comments, 0 👍. Related to #24798; proposes MCP-based agent-to-agent protocol.
   [GitHub](https://github.com/anthropics/claude-code/issues/28300)

6. **#59163 – [OPEN] TUI character corruption after long sessions in VS Code integrated terminal (macOS)**
   *Affected workflow:* After extended use, the Claude Code TUI renders garbled glyphs while preserving layout.
   *Impact:* 11 comments, 5 👍. Affects v2.1.141 on macOS. Workaround: restart session.
   [GitHub](https://github.com/anthropics/claude-code/issues/59163)

7. **#27665 – [OPEN] Intelligent Model Routing – 93.8% of Max subscriber tokens go to Opus**
   *Affected workflow:* No automatic model selection; users with Max plans are overwhelmingly routed to expensive Opus.
   *Impact:* 10 comments, 13 👍. Consolidates 30+ related issues. No maintainer response.
   [GitHub](https://github.com/anthropics/claude-code/issues/27665)

8. **#49537 – [CLOSED] Image exceeds dimension limit for many-image requests (2000px)**
   *Affected workflow:* Sending multiple large images triggers API error, blocking vision-based workflows.
   *Impact:* 10 comments, 5 👍. Closed as duplicate; no public fix mentioned.
   [GitHub](https://github.com/anthropics/claude-code/issues/49537)

9. **#60093 – [OPEN] Model switched to Opus without consent – $1,050 overcharge (May 5-7)**
   *Affected workflow:* Backend model silently changed from Sonnet to Opus, causing massive cost spike.
   *Impact:* 2 comments (new today), 0 👍. High dollar amount; likely to grow. No maintainer response yet.
   [GitHub](https://github.com/anthropics/claude-code/issues/60093)

10. **#38698 – [OPEN] Per-agent model provider routing (local Ollama for subagents)**
    *Affected workflow:* Users want to delegate subagents to cheaper/local models while orchestrator uses Anthropic.
    *Impact:* 4 comments, 30 👍. Strong upvote ratio suggests broad interest.
    [GitHub](https://github.com/anthropics/claude-code/issues/38698)

## Key PR Progress

1. **#52668 – fix(hookify): include hook-specific output for warnings**
   Returns hook-specific context for PreToolUse/PostToolUse warnings. Fixes #40380. Closed.
   [GitHub](https://github.com/anthropics/claude-code/pull/52668)

2. **#52666 – docs: fix README brand casing**
   Minor doc fix: `Github` → `GitHub`, `MacOS` → `macOS`. Closed.
   [GitHub](https://github.com/anthropics/claude-code/pull/52666)

3. **#10036 – allow ENV vars to extend list of allowed hosts**
   Refactors allowed domains to support custom environment variables. Still open since Oct 2025.
   [GitHub](https://github.com/anthropics/claude-code/pull/10036)

4. **#9446 – docs: Add Community Marketplaces section**
   Adds a README section pointing to third-party plugin marketplaces (e.g., Titanium Plugins). Open since Oct 2025.
   [GitHub](https://github.com/anthropics/claude-code/pull/9446)

5. **#9262 – docs: enforce task tool and model metadata**
   Documents `claude-3-5-haiku-latest` and requires Task tool in commit workflows. Open since Oct 2025.
   [GitHub](https://github.com/anthropics/claude-code/pull/9262)

6. **#6964 – fix(workflows): Add /bin and /usr/bin to PATH to resolve spawn ps ENOENT**
   Fixes long-running scripts failing because `ps` is not in child process PATH. Open since Sep 2025.
   [GitHub](https://github.com/anthropics/claude-code/pull/6964)

7. **#7262 – feat: Add MCP tool discovery CLI commands**
   Implements non-interactive MCP tool/server discovery. Addresses #6574. Open since Sep 2025.
   [GitHub](https://github.com/anthropics/claude-code/pull/7262)

8. **#5855 – feat: Implement complete zero-trust architecture for env var security**
   60-line proof-of-concept security hook for client-side secret detection. Addresses #2695. Open since Aug 2025.
   [GitHub](https://github.com/anthropics/claude-code/pull/5855)

9. **#6754 – Document RTL support for Claude CLI in VS Code**
   New `rtl-support.md` doc for fixing Hebrew/Arabic/Persian rendering. Open since Aug 2025.
   [GitHub](https://github.com/anthropics/claude-code/pull/6754)

10. **#5490 – Add containerized Claude Code script with host credential proxy**
    Allows running Claude inside a container without exposing host credentials. Open since Aug 2025.
    [GitHub](https://github.com/anthropics/claude-code/pull/5490)

## Feature Request Clusters

- **Agent Collaboration & Communication** – Multiple requests for inter-session communication (#24798), multi-machine agent protocols (#28300), and per-agent model routing (#38698). These share a core desire to orchestrate multiple Claude instances for large codebases.
- **Cost & Usage Transparency** – Automatic cost tracking (#18550), intelligent model routing (#27665), and configurable feedback surveys (#33373) reflect a growing demand for billing visibility and control.
- **Desktop / IDE Integration** – Configurable default working directory (#60099), font size in VS Code panels (#60077), and remote control session reconnection (#60100) represent incremental UX improvements for daily users.

## Developer Pain Points

- **Billing confusion** remains the top friction point: silent model switches causing overcharges (#60093), project API keys overriding subscriptions (#53638), and unclear billing between claude.ai and Claude Code (#50994).
- **Windows platform bugs** continue to accumulate: blank desktop (#55879), corrupted TUI after long sessions (#59163), broken `/insights` paths (#46041), and `bypassPermissions` still prompting (#42975).
- **MCP reliability issues** are recurring: cold-start rejections of local stdio servers (#55788), MCP connector tools not loading in PowerPoint (#58727), and Cowork Chrome connection failures (#60088).
- **API and authentication errors** appear across platforms: “Unable to connect to API” (#53346), “credit balance too low” with valid key (#36648), and model access 404s (#60084). These lower trust in the CLI experience.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest – 2026-05-18

## Today’s Update Brief
No new releases landed today. Activity remained high with 50 open updates and 42 pull requests active in the last 24 hours. The community is heavily focused on Windows stability, IDE integration enhancements, and connectivity fixes, with several high‑engagement feature requests and bug reports continuing to draw attention.

---

## Releases
None in the last 24 hours.

---

## Hot Issues
*Selected from the top‑30 most‑commented items, ordered by discussion volume.*

1. **[#2998 – IDE-integrated diff / approval](https://github.com/openai/codex/issues/2998)**
   *Enhancement, Extension* – 54 comments, 164 👍
   Requests that the terminal‑based red/green diff approval flow from Codex CLI also be available inside the IDE extension. Extremely popular with the community.

2. **[#20552 – “Toggle File Tree” unreliable in desktop app](https://github.com/openai/codex/issues/20552)**
   *Bug, App* – 37 comments, 13 👍
   On macOS, the `View > Toggle File Tree` menu item stays enabled but often fails to show the file tree, requiring repeated toggles.

3. **[#18960 – Frequent reconnect loop: websocket closed before response.completed](https://github.com/openai/codex/issues/18960)**
   *Bug, Connectivity* – 29 comments, 21 👍
   Pro users on macOS report repeated streaming failures where the app enters a reconnect loop, blocking normal usage.

4. **[#3195 – Open Codex chat in a new VS Code window](https://github.com/openai/codex/issues/3195)**
   *Enhancement, Extension* – 19 comments, 50 👍 (CLOSED)
   A long‑standing request to detach the Codex chat panel into its own window for multi‑monitor workflows. Closed after implementation.

5. **[#16374 – Windows shell/UI freezes intermittently](https://github.com/openai/codex/issues/16374)**
   *Bug, Windows‑OS, App, Performance* – 16 comments, 8 👍
   The Codex desktop app on Windows 11 can freeze the entire shell/UI; opening Codex Settings temporarily stops the freeze.

6. **[#22715 – “Waiting for desktop” loop despite authorization](https://github.com/openai/codex/issues/22715)**
   *Bug, iOS, Remote* – 12 comments, 10 👍
   On Windows, the app shows “Waiting for desktop” even when the desktop Codex app is already authorized and running, blocking remote usage.

7. **[#16994 – Desktop automations on Windows/WSL create runs but no rollout materializes](https://github.com/openai/codex/issues/16994)**
   *Bug, Windows‑OS, App, Automations* – 10 comments, 5 👍
   Automation runs are created but the expected rollout (e.g., file changes) never appears; resuming fails with “no rollout found”.

8. **[#8570 – Use git worktrees for parallel agents](https://github.com/openai/codex/issues/8570)**
   *Enhancement* – 6 comments, 14 👍 (CLOSED)
   Users want parallel agent support via git worktrees, similar to Cursor. Closed – likely implemented or superseded.

9. **[#4226 – MCP server tool support in Codex Web](https://github.com/openai/codex/issues/4226)**
   *Enhancement, Codex‑Web* – 3 comments, 58 👍
   Highly upvoted request to bring MCP (Model Context Protocol) tool support to the Codex cloud/web environment, not just CLI.

10. **[#20517 – Automation heartbeat fails due to JSONL path comparison bug on Windows](https://github.com/openai/codex/issues/20517)**
    *Bug, Windows‑OS, App, Automations* – 3 comments, 4 👍
    The app’s automation heartbeat repeatedly fails to resume a running thread because the extended path prefix (`\\?\`) mismatches the stored session path.

---

## Key PR Progress
*Selected from the top‑20 active PRs, prioritized by user‑visible impact and architectural importance.*

1. **[#23226 – Add exec-server websocket keepalive](https://github.com/openai/codex/pull/23226)**
   Sends periodic WebSocket Ping frames from the exec‑server to keep connections alive. Should help with the frequent reconnect loops reported in issues like #18960.

2. **[#22686 – Add Windows ARM64 cross-compiled archive path](https://github.com/openai/codex/pull/22686)**
   Prepares native ARM64 builds for Windows by cross‑compiling test binaries, reducing CI build time and enabling native ARM64 support.

3. **[#22979 – Harden cloud runtime local access boundaries](https://github.com/openai/codex/pull/22979)**
   Makes MCP runtime environment optional and disables app‑server filesystem access when no local filesystem is available, improving security in cloud sessions.

4. **[#23118 – feat(tools) skill_search tool](https://github.com/openai/codex/pull/23118)**
   Allows the model to search for skill descriptions instead of hardcoding them in the developer message, enabling dynamic skill discovery.

5. **[#22929 – Harden CLI rate limit window labels](https://github.com/openai/codex/pull/22929)**
   Updates CLI rate‑limit display to show whatever period the server returns (instead of assuming fixed 5‑hour/week), making it compatible with generalized rate limits.

6. **[#23148 – Densify and version memory summaries](https://github.com/openai/codex/pull/23148)**
   Reduces the size of `memory_summary.md` by consolidating prompts and versioning the schema, making session startup faster and summaries easier to regenerate.

7. **[#23210 – app-server: clear stale plan progress after terminal turns](https://github.com/openai/codex/pull/23210)**
   Prevents “in_progress” plan items from being stranded as spinning spinners after a turn ends, improving UI consistency.

8. **[#23144 – Defer v1 multi-agent tools behind tool search](https://github.com/openai/codex/pull/23144)**
   Moves v1 multi‑agent tools behind the new `tool_search` and namespace tools, keeping descriptions concise and moving guidance to developer instructions.

9. **[#23180 – Cap diagnostic log payloads](https://github.com/openai/codex/pull/23180)**
   Limits diagnostic payloads to 16 KB before emitting tracing events (keeping head and tail), reducing log bloat and potential memory issues.

10. **[#23175 – Optimize TUI startup terminal probes](https://github.com/openai/codex/pull/23175)**
    Serial terminal probes (cursor position, keyboard support, colors) often cause delay; this PR parallelizes them to make TUI launch‑to‑input faster.

---

## Feature Request Clusters
*Recurring themes in today’s issue data, without speculation on roadmap.*

- **IDE Integration Enhancements**
  Multiple requests for deeper VS Code integration: diff/approval in‑panel (#2998), detachable chat window (#3195, now closed), and restoration of usage telemetry (#18512).

- **Parallel & Multi-Agent Workflows**
  Community interest in running agents simultaneously using git worktrees (#8570) and explicit task‑switching with context clearing (#23218).

- **Cloud/Web MCP Support**
  A strongly upvoted request (#4226) asks for MCP tool support in Codex Web (cloud containerised sessions), not just the CLI.

- **Session & Context Management**
  Requests to allow clearing context between tasks while keeping the same session ID (#23218), and better handling of AGENTS.md files when global and repo‑local files conflict (#18189).

---

## Developer Pain Points
*Recurring frustrations or high‑priority blockers observed in today’s activity.*

- **Windows Stability**
  A disproportionate number of open bugs target Windows: shell freezes (#16374), automation failures (#16994, #20517), skill loading stalls (#21412, #20526), app‑not‑responding on large projects (#21232), and repeated sign‑in prompts (#13650). Windows developers face frequent interruptions.

- **Connectivity & Reconnect Loops**
  The WebSocket‑closed‑before‑response issue (#18960) continues to affect Pro users across platforms, and the new keepalive PR (#23226) aims to address it.

- **Authentication & Safety False Positives**
  A critical report (#23220) describes persistent cybersecurity‑safety flags blocking normal development workflows, with no resolution via Trusted Access or support.

- **AGENTS.md Loading Inconsistencies**
  Global `AGENTS.md` is sometimes ignored when a repo‑local file exists (#18189) or when invalid UTF‑8 characters are present (#23223), leading to missing cross‑project defaults.

- **UI/UX Regressions**
  The “Toggle File Tree” not working (#20552), permissions dropdown showing a spurious loading animation (#20918), and the “Do you want to make these changes?” diff prompt being described as “absolutely useless” (#13561) indicate ongoing polish issues.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-18

## Today's Update Brief
Activity remains high with 50 issues and 22 pull requests updated in the last 24 hours. A new nightly release fixes critical security vulnerabilities and a web fetch abort issue, while maintainers continue prioritizing agent reliability and memory system quality. Agent hangs, subagent recovery bugs, and AST-aware investigation work dominate community discussion.

---

## Releases

**v0.44.0-nightly.20260517.g77e65c0db** — released 2026-05-17
[View release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.44.0-nightly.20260517.g77e65c0db)

### What's Changed
- **security:** Updated dependencies to fix critical and high vulnerabilities (PR [#27077](https://github.com/google-gemini/gemini-cli/pull/27077) by @scidomino)
- **bug fix:** Resolved `Ctrl+C` abort issue in web fetch operations (PR [#24320](https://github.com/google-gemini/gemini-cli/pull/24320) by @ProthamD)
- **core improvement:** Added command aliases and thinking capability

---

## Hot Issues

### 1. Generalist agent hangs indefinitely [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)
- **Status:** OPEN, priority/p1, bug
- **Impact:** Affects all users; when Gemini CLI defers to the generalist agent for simple tasks (e.g., folder creation), it hangs forever. Instructing the model not to use sub-agents resolves it. 7 comments, 7 👍.
- **Community reaction:** High demand for fix; users report waiting up to an hour before cancelling.

### 2. Subagent recovery misreports success after MAX_TURNS [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
- **Status:** OPEN, priority/p1, bug
- **Impact:** The `codebase_investigator` subagent reports `status: "success"` and `Termination Reason: "GOAL"` even when it hit the maximum turn limit without doing any analysis. Users receive false positive completion signals. 6 comments, 2 👍.

### 3. Shell command execution stuck on "Waiting input" [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)
- **Status:** OPEN, priority/p1, bug
- **Impact:** After executing simple CLI commands that don't require input, Gemini CLI hangs while showing the shell as active. Users must cancel and retry. 3 comments, 3 👍.
- **Community reaction:** Several users confirm reproduction across different shell types.

### 4. Usage limit reached despite remaining quota [#17006](https://github.com/google-gemini/gemini-cli/issues/17006)
- **Status:** CLOSED, priority/p1
- **Impact:** Users reported hitting usage limits while having substantial quota remaining. Now closed, possibly resolved or considered duplicate. 7 comments.

### 5. Memory system bugs and quality issues [#26516](https://github.com/google-gemini/gemini-cli/issues/26516)
- **Status:** OPEN, priority/p2, bug
- **Impact:** A parent tracking issue covering multiple Auto Memory bugs: indefinite retrying of low-signal sessions ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)), inaccessible memory patch quarantine ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)), and insufficient secret redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)). 2 comments.

### 6. AST-aware file reads, search, and mapping investigation [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)
- **Status:** OPEN, priority/p2, feature request
- **Impact:** Epic investigating whether AST-aware file reads, search, and codebase mapping can reduce turns and noise. If successful, could significantly improve agent efficiency. 7 comments, 1 👍.

### 7. Gemini doesn't use skills and sub-agents enough [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)
- **Status:** OPEN, priority/p2, bug
- **Impact:** Users report that Gemini ignores custom skills (e.g., gradle, git) unless explicitly instructed—even when performing related tasks. Reduces the value of skill configuration. 6 comments.

### 8. Browser agent fails in Wayland [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)
- **Status:** OPEN, priority/p1, bug
- **Impact:** Browser subagent fails on Wayland display servers with `GOAL` termination but no useful output. Affects Linux users running Wayland. 4 comments, 1 👍.

### 9. Agent should discourage destructive behavior [#22672](https://github.com/google-gemini/gemini-cli/issues/22672)
- **Status:** OPEN, priority/p2, customer-issue
- **Impact:** In complex git operations, the model occasionally uses `git reset` or `--force` where safer alternatives exist. Users want the agent to understand and avoid destructive commands. 2 comments, 1 👍.

### 10. Subagents running without permission since v0.33.0 [#22093](https://github.com/google-gemini/gemini-cli/issues/22093)
- **Status:** OPEN, priority/p2, bug
- **Impact:** After automatic update to v0.33.0, subagents activate despite being disabled in all configurations. Users who only want MCP functionality are affected. 2 comments.

---

## Key PR Progress

### 1. Remove unbounded telemetry buffer when telemetry is disabled [#26404](https://github.com/google-gemini/gemini-cli/pull/26404)
- **Status:** CLOSED
- **Fix:** Stops `telemetryBuffer` from growing unbounded when telemetry is disabled. Previously every API/MCP error event was captured even when unused, causing memory growth. By @genneth.

### 2. Fix race condition in IDE client initialization [#26407](https://github.com/google-gemini/gemini-cli/pull/26407)
- **Status:** CLOSED
- **Fix:** Ensures IDE client initialization is awaited during app startup, preventing function resolution before IDE connection is established. By @Akash504-ai.

### 3. Handle ENAMETOOLONG in robustRealpath [#26401](https://github.com/google-gemini/gemini-cli/pull/26401)
- **Status:** CLOSED
- **Fix:** Catches path-too-long errors when processing long `@`-tokens from paste, preventing unhandled rejections. By @senutpal.

### 4. Add system PATH fallback for ripgrep discovery [#26769](https://github.com/google-gemini/gemini-cli/pull/26769)
- **Status:** OPEN
- **Fix:** Re-introduces fallback to system `PATH` for `ripgrep` after SEA bundling refactor removed it, restoring search performance. By @wesamahakem.

### 5. Prevent text duplication in AfterAgent hook prompt_response [#27096](https://github.com/google-gemini/gemini-cli/pull/27096)
- **Status:** OPEN
- **Fix:** Ensures hooks and extensions receive clean, deduplicated output from the model. By @AkaCoder404.

### 6. Detect zsh from $SHELL to prevent shopt errors [#26912](https://github.com/google-gemini/gemini-cli/pull/26912)
- **Status:** OPEN
- **Fix:** Reads `$SHELL` env var to detect zsh users instead of hardcoding bash, preventing `shopt` errors on non-bash shells. By @kimjune01.

### 7. Support for custom external safety checkers [#27186](https://github.com/google-gemini/gemini-cli/pull/27186)
- **Status:** OPEN
- **Feature:** Implements Phase 5 of safety system, allowing organizations to integrate custom security policies and compliance checks. By @Omkar-Ghongade.

### 8. Wire AgentSession invocations into AgentTool [#26948](https://github.com/google-gemini/gemini-cli/pull/26948)
- **Status:** OPEN
- **Feature:** Adds session-based subagent invocations behind `adk.agentSessionSubagentEnabled` feature flag. By @adamfweidman.

### 9. Prevent PTY memory leak in ShellExecutionService [#27154](https://github.com/google-gemini/gemini-cli/pull/27154)
- **Status:** OPEN
- **Fix:** Synchronously deletes active PTY entries instead of wrapping in Promise `.then()`, preventing memory and file descriptor leaks. By @rozen03.

### 10. Fix /tasks/metadata double response [#27175](https://github.com/google-gemini/gemini-cli/pull/27175)
- **Status:** OPEN, priority/p1, help wanted
- **Fix:** Returns after sending 501 to prevent `ERR_HTTP_HEADERS_SENT` crash when task store isn't `InMemoryTaskStore`. By @siddhanth0412.

---

## Feature Request Clusters

### AST-Aware Tooling for Codebase Understanding
Multiple related issues explore using Abstract Syntax Tree (AST) awareness to improve agent performance:
- Investigating AST-aware file reads, search, and codebase mapping ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745))
- Using AST-aware CLI tools specifically for codebase mapping ([#22746](https://github.com/google-gemini/gemini-cli/issues/22746))
- Using AST-aware tools for file reads and searches ([#22747](https://github.com/google-gemini/gemini-cli/issues/22747))

The goal is to reduce turns from misaligned reads, reduce token noise, and enable more precise method bounds reading in a single tool call.

### Background and Multitasking Improvements
- Allowing local agents to be backgrounded with Ctrl+B ([#22741](https://github.com/google-gemini/gemini-cli/issues/22741)) — users want to send non-blocking subagents (e.g., builds, linting) to background while continuing other work.
- Using Generalist agent to handle build fix use cases ([#22602](https://github.com/google-gemini/gemini-cli/issues/22602)) — offloads incremental build fixes to a sub-agent to save turns.

### Browser Agent Resilience
- Automatic session takeover and lock recovery when browser profile is locked ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232))
- Browser agent ignores `settings.json` overrides like `maxTurns` ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267))

Users need the browser agent to handle persistent session failures gracefully and honor configuration.

### Agent Self-Awareness and Skill Usage
- Better understanding of its own CLI flags, hotkeys, and self-execution mechanics ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432))
- Periodic reflection on trajectories with recommendations to create or update skills ([#21421](https://github.com/google-gemini/gemini-cli/issues/21421))
- Gemini doesn't use custom skills and sub-agents enough ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968))

---

## Developer Pain Points

### Agent Hangs and False Success Reports
The most critical pain point: the generalist agent hangs indefinitely on simple tasks ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), and subagents report "success" when actually hitting turn limits ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)). Users cannot trust agent completion signals.

### Shell Command Execution Stalls
Shell commands frequently get stuck on "Waiting input" after completion ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), forcing manual cancellation. This breaks workflow automation in the CLI.

### Unwanted Subagent Activation
Subagents activating despite being disabled in all configurations ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)) — a significant control and permission issue for users who prefer manual workflows.

### Memory System Reliability
Auto Memory system bugs ([#26516](https://github.com/google-gemini/gemini-cli/issues/26516)) including indefinite retrying of low-signal sessions, lack of deterministic secret redaction, and silent skipping of invalid patches. Users risk context pollution and data leakage.

### Tool Overload Errors
Gemini CLI throws 400 errors with >128 tools available ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)). The agent needs to limit tools to what's in scope rather than passing all available tools.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest – 2026-05-18

## Today's Update Brief

No new releases were published in the last 24 hours. Activity is moderate with 11 issues updated (most created today) and 1 open pull request. The community is reporting several new bugs spanning platform compatibility, model integration, and extension hooks, alongside feature requests for scheduling and context window configuration.

## Releases

*None in the last 24 hours.*

## Hot Issues

**#1680 – pwsh.exe hardcoded blocks Windows 11 with PowerShell 5.1**
[Open] [area:platform-windows, area:tools]
`copilot-cli` hardcodes `pwsh.exe` in six places, making it completely unusable on Windows 11 systems that only have PowerShell 5.1. The issue was previously closed as “not_planned” in #411 but remains unfixed, now preventing any shell commands from running. 8 comments, 10 👍.
[Link](https://github.com/github/copilot-cli/issues/1680)

**#3333 – Android/Termux support broken in v1.0.48+ (glibc dependency)**
[Open] [area:platform-linux, area:installation]
A native Rust addon (`runtime.node`) compiled against glibc makes the CLI unusable on Android/Termux, which uses Bionic libc. 3 comments, 1 👍.
[Link](https://github.com/github/copilot-cli/issues/3333)

**#3359 – Excessive token usage with qwen3.6-plus model**
[Open] [area:models]
User reports Copilot CLI consumes ~40% of tokens in 3 hours with `qwen3.6-plus`, whereas Claude Code uses only 3% for the same tasks. DeepSeek models are not affected. 1 comment.
[Link](https://github.com/github/copilot-cli/issues/3359)

**#3361 – Extension onPostToolUse modifiedResult not applied to model context**
[Open] [triage]
When a Copilot CLI extension returns `modifiedResult` from `onPostToolUse`, the modified text appears in the TUI preview but is **not** fed into the model’s conversation context, so the model still sees the original result. 0 comments, 1 👍.
[Link](https://github.com/github/copilot-cli/issues/3361)

**#3360 – Plugin marketplace browse warning: templates not found**
[Open] [area:platform-linux, area:plugins, area:installation]
Running `copilot plugin marketplace browse awesome-copilot` on v1.0.48 fails with “Failed to browse marketplace – warning: templates not found”. 0 comments.
[Link](https://github.com/github/copilot-cli/issues/3360)

**#3358 – /remote toggle stops working in long-running sessions**
[Open] [area:sessions, area:networking]
After some time in a session, `/remote on` no longer works, and cycling off/on does not recover the connection. The only fix is to abandon the session. 0 comments.
[Link](https://github.com/github/copilot-cli/issues/3358)

**#3356 – Feature request: `/every` and `/after` slash commands for scheduled prompts**
[Open] [area:sessions]
Requests parity with Claude Code’s `/loop` by adding recurring and one-shot scheduled prompts within an active session. Currently workarounds require external scripts. 0 comments.
[Link](https://github.com/github/copilot-cli/issues/3356)

**#3355 – Allow configurable context window for Claude Opus 4.6 (200K cap vs 1M capability)**
[Open] [area:context-memory, area:models]
Copilot CLI caps Claude Opus 4.6 at 200K tokens, although the model natively supports 1M. This forces frequent summarization during deep sessions. 0 comments, 1 👍.
[Link](https://github.com/github/copilot-cli/issues/3355)

**#3354 – CTRL+T does not work for BYOK models**
[Open] [area:input-keyboard, area:models]
Pressing CTRL+T in the terminal does not display or toggle the model’s thinking/reasoning pane when using a Bring Your Own Key (BYOK) model. No output or state change occurs. 0 comments.
[Link](https://github.com/github/copilot-cli/issues/3354)

**#3345 – Hooks not loaded in non-interactive (`-p`) mode**
[Closed] [area:non-interactive, area:plugins, area:configuration]
Repository-level hook files (`.github/hooks/*.json`) are correctly loaded in interactive mode but are entirely ignored when running `copilot -p "..."`. 0 comments (closed).
[Link](https://github.com/github/copilot-cli/issues/3345)

## Key PR Progress

**#3353 – Copilot subscription no longer required**
[Open]
Title suggests removing the GitHub Copilot subscription requirement for using the CLI. No description or comments yet. Author: @andresdelfino.
[Link](https://github.com/github/copilot-cli/pull/3353)

## Feature Request Clusters

- **Scheduling & Automation** – Issue #3356 asks for `/every` and `/after` slash commands to schedule recurring or one-shot prompts within a session, replicating Claude Code’s `/loop`. No official response yet.
- **Model Configuration Granularity** – Issue #3355 requests a user-configurable context window for Claude Opus 4.6 (currently hard-capped at 200K vs. model capacity of 1M). Issue #3354 requests proper CTRL+T thinking display for BYOK models.
- **Token Optimization** – Issue #3357 explicitly asks for a “Gemma 4-like feature” (zero-token intent classification) to reduce token consumption. While this is a single request, it aligns with broader community interest in token efficiency.

## Developer Pain Points

- **Cross‑platform compatibility gaps** – Windows users with only PowerShell 5.1 cannot run the CLI at all due to hardcoded `pwsh.exe`. Android/Termux users are blocked by a glibc‑compiled native addon.
- **Token and context management frustrations** – Models like `qwen3.6-plus` consume vastly more tokens than expected, and Claude Opus’s context is artificially capped, leading to frequent summarization.
- **Extension/hook reliability** – `onPostToolUse` modifications are ignored by the model’s context, and repository hooks fail in non‑interactive mode. Both degrade the value of the plugin system.
- **Remote session instability** – The `/remote` toggle becomes unresponsive in long sessions with no recovery other than restarting the session.
- **UI/UX inconsistencies** – BYOK models lack keyboard shortcut feedback (CTRL+T), and the plugin marketplace browse command throws a confusing “templates not found” warning.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-18

## Today's Update Brief
Activity was low, with no new releases. One new issue (#2318) reports an incorrect TPD rate-limit calculation, while two Windows-specific PowerShell bugs (#2194, #2192) were closed. A memory-leak fix PR (#2236) remains open for review. The community continues to surface Windows compatibility and performance concerns.

## Releases
None in the last 24 hours.

## Hot Issues
Total 8 issues updated in the last 24 hours; all are included below.

1. **#2314** [OPEN] *Prompts take way too long to complete in general* — `@kingkpink` reports that simple tasks (e.g., pushing data to NeonDB) take ~5 minutes with excessive overthinking. 3 comments, no maintainer response yet. **Affected workflow**: interactive coding and data operations. **Impact**: severely reduces productivity for basic tasks.

2. **#1458** [OPEN] *VS Code report `{“error”:{“code”:-32003,”message”:”Connection error.”}}`* — `@AskaMgl` first reported this in March; still open after 2 months. Occurs on Windows with kimi-for-coding model (Moderato plan). **Affected workflow**: VS Code extension startup/connection. **Community reaction**: limited discussion (2 comments), but long-standing unresolved issue.

3. **#2317** [OPEN] *[VSCode Extension] Plan mode file path not clickable in chat webview* — `@vlad-at-work` reports that file paths in plan mode are plain text, not hyperlinks, on macOS with Kimi Coding Plan. **Impact**: hinders navigation and review of generated plans.

4. **#2194** [CLOSED] *[Windows] Agent generates PowerShell 7.x syntax incompatible with default PowerShell 5.x* — `@lNeverl` reported that the agent often uses `&&`, `||`, or other PS 7+ syntax not available in Windows default PS 5. Closed on 2026-05-17. **Resolution**: likely fixed in a recent update (no details in issue).

5. **#2192** [CLOSED] *[Windows] Agent repeatedly generates Unix pipeline commands (head/tail) incompatible with PowerShell* — Also by `@lNeverl`, this sibling bug was closed on the same day. Together with #2194, suggests Windows cross-shell compatibility improvements have been deployed.

6. **#2318** [OPEN] *[bug] request reached organization TPD rate limit, current: 1505241* — `@globalvideos272-lab` reports that the TPD (tokens per day) rate limit is miscalculated, causing premature throttling on Windows 10 with kimi 2.6. New today, no comments. **Impact**: can block work for heavy users.

7. **#2316** [OPEN] *Feature Request: Extensibility APIs for Community-Built Statusline / HUD Plugins* — `@lNeverl` asks for public APIs to build custom HUD plugins (inspired by claude-hud). No comments. **Impact**: reflects community desire for UI customization beyond built-in status line.

8. **#2315** [OPEN] *VS Code Integrated Terminal: Ctrl+V paste image does nothing (Windows)* — `@VoyagerXvoyagerx` reports that pasting images from clipboard fails silently in the VS Code integrated terminal on Windows. **Impact**: prevents image input for multimodal prompts.

## Key PR Progress
Three PRs were updated in the last 24 hours.

1. **#2236** [OPEN] *fix(utils): bound broadcast queues and cap web store cache to prevent memory leaks* — `@ekhodzitsky` addresses unbounded `asyncio.Queue` growth for slow consumers and unlimited session caching that could cause OOM. **Impact**: improves long-running session stability. Under review.

2. **#1127** [CLOSED] *style(web): tweak some web ui details* — `@anxndsgn` — minor UI visual adjustments. Merged? (closed without comment, likely merged). **Impact**: cosmetic improvement to web interface.

3. **#1360** [CLOSED] *fix: replace platform.version() with system+release for HTTP headers* — `@T1mn` fixes `httpx.LocalProtocolError` on Linux where `platform.version()` returns kernel strings starting with `#`. **Impact**: prevents connection failures on Ubuntu and other distros.

## Feature Request Clusters
Only one feature request appeared in the last 24 hours: **#2316** asks for extensibility APIs to let the community build custom statusline/HUD plugins. No other feature requests were updated, so no clear cluster can be identified from today’s data. This request, however, aligns with earlier community interest in plugin ecosystems (observed in previous digests).

## Developer Pain Points
- **Windows compatibility** remains the dominant source of friction. Three bugs (#2315, #2194, #2192) affect Windows users specifically: paste image fails, PowerShell syntax mismatches, and Unix command generation. Two of these were closed today, but the paste issue is still open.
- **Performance and reliability**: Issue #2314 (slow prompt completion) and #2318 (TPD rate-limit miscalculation) point to server-side or model inefficiencies. The long-standing connection error (#1458, 2+ months) also degrades trust in the VS Code extension.
- **UI/UX polish**: The non-clickable file path in plan mode (#2317) is a minor but repeated annoyance in the chat webview.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-18

## Today's Update Brief

A patch release (v1.15.4) landed today with three core bugfixes targeting project-scoped event routing, custom LSP initialization, and background subagent visibility. Community activity remains high, with 50+ issues and 50+ PRs updated in the last 24 hours, though the long-running clipboard bug (#4283) continues to dominate discussion at 93 comments.

## Releases

**v1.15.4** — [Full changelog](https://github.com/anomalyco/opencode/releases/tag/v1.15.4)
- Fixed project-scoped bus events so file watcher and update notifications reach the correct instance.
- Fixed custom LSP servers not sending refresh events after initialization.
- Hid background subagent task instructions unless experimental background mode is enabled.

## Hot Issues

1. **[#4283 – Copy To Clipboard is not working](https://github.com/anomalyco/opencode/issues/4283)** — 93 comments, 83 👍. A 6-month-old bug where selected output text fails to copy. The community is actively troubleshooting OS-specific root causes. Remains the most upvoted open issue.

2. **[#768 – GitHub Copilot: Tracking Premium Requests](https://github.com/anomalyco/opencode/issues/768)** — 36 comments, 70 👍. Closed. Users want premium request quota display for Copilot models, similar to VS Code's built-in tracker. Cost tracker currently shows $0.00 for Copilot models.

3. **[#15728 – Read tool cannot pass image data to vision-capable models](https://github.com/anomalyco/opencode/issues/15728)** — 11 comments, 6 👍. The Read tool fails to convert image files into visual input format for models like qwen3.5-plus. Blocks vision workflows.

4. **[#7006 – `permission.ask` plugin hook is defined but not triggered](https://github.com/anomalyco/opencode/issues/7006)** — 10 comments, 12 👍. First-time reporter @markerikson documents that the permission hook from PR #6319 exists in the type system but never fires at runtime. Blocks plugin-based auto-approval workflows.

5. **[#24713 – Copy shows copied popup but clipboard remains unchanged on Linux terminal](https://github.com/anomalyco/opencode/issues/24713)** — 9 comments, 2 👍. Linux-specific variant of the clipboard bug: UI indicates success, but `xclip`/`wl-paste` confirm no data was written.

6. **[#27530 – Error: 4 of 5 requests failed: config.providers: Unexpected server error](https://github.com/anomalyco/opencode/issues/27530)** — 6 comments, 6 👍. Fresh issue: `opencode` binary fails to start with provider/list/agent all returning "Unexpected server error". Several users confirming reproduction.

7. **[#19191 – History session cannot be viewed in OpenCode Desktop - Session not found error](https://github.com/anomalyco/opencode/issues/19191)** — 6 comments. Windows 11 Desktop app displays "Session not found" when trying to view history. Persisted for several weeks.

8. **[#27906 – v1.15.1+ Breaks Bun Installs](https://github.com/anomalyco/opencode/issues/27906)** — 6 comments, 3 👍. The new `postinstall` lifecycle script requirement blocks installation via Bun, which disables postinstall by default for global packages.

9. **[#26226 – macOS Desktop notifications do not show when renderer Notification permission is denied](https://github.com/anomalyco/opencode/issues/26226)** — 5 comments. In-app sound plays, but system notifications fail if the web renderer has `Notification.permission === "denied"`. macOS-specific.

10. **[#13841 – Explore subagent hangs indefinitely with Anthropic Claude Opus 4.6](https://github.com/anomalyco/opencode/issues/13841)** — 4 comments, 4 👍. Subagent stalls after completing tool calls with no timeout or recovery. Spinner continues but no new tool calls or LLM responses arrive.

## Key PR Progress

1. **[#28071 – feat: add well-known auth service](https://github.com/anomalyco/opencode/pull/28071)** — Introduces a core `AuthWellKnown` service with legacy `auth.json` migration, plus a `Substitution` service for `{env:...}` and `{file:...}` replacements. Moves well-known config out of `opencode Auth`.

2. **[#28090 – upgrade opentui to 0.2.14](https://github.com/anomalyco/opencode/pull/28090)** — Bumps the terminal UI library. Likely brings rendering fixes.

3. **[#27733 – fix(install): Add instructions to source config file in install](https://github.com/anomalyco/opencode/pull/27733)** — Closes #27732. After install, `opencode` is added to shell config but current session doesn't pick it up without manual sourcing.

4. **[#27469 – fix(desktop): remap base64 workspace store names during Tauri migration](https://github.com/anomalyco/opencode/pull/27469)** — Closes #27431. Upgrading from old Tauri desktop to Electron silently lost all session history due to un-remapped base64 workspace names.

5. **[#26949 – perf(app): virtualize session timeline rows](https://github.com/anomalyco/opencode/pull/26949)** — Upgrades `virtua` and virtualizes the session timeline at row granularity. Should improve rendering performance for long sessions.

6. **[#26090 – feat(session): expose LLM response headers on assistant messages](https://github.com/anomalyco/opencode/pull/26090)** — Closes #26091. Allows users of LiteLLM proxy routers to see `x-litellm-model` headers, showing which model was actually selected.

7. **[#27729 – feat(tui) image output for iTerm OSC 1337 protocol](https://github.com/anomalyco/opencode/pull/27729)** — Closes #5677. Adds inline image rendering in TUI for iTerm2 using the OSC 1337 protocol.

8. **[#27662 – fix(vscode): push active editor selection to TUI via lock file](https://github.com/anomalyco/opencode/pull/27662)** — Closes #22235. The VS Code extension's documented context-awareness feature never worked because the extension had no mechanism to push editor selections to the TUI process.

9. **[#28084 – fix(task-tool): sanitize zero-width-space and BOM from subagent_type](https://github.com/anomalyco/opencode/pull/28084)** — Closes #24276. Skill emitters (e.g. oh-my-openagent's review-work) prefix `subagent_type` with U+200B, causing `agent.get(...)` to fail with "agent not found".

10. **[#28081 – docs(ecosystem): add opencode-ask to plugins list](https://github.com/anomalyco/opencode/pull/28081)** — Community plugin `opencode-ask` adds a read-only Q&A agent with source citations.

## Feature Request Clusters

- **Desktop Project Management** — [#28030](https://github.com/anomalyco/opencode/issues/28030) requests the ability to delete projects from the Desktop app (currently only list/create/update are supported). No maintainer response yet.

- **Office File Drag-and-Drop** — [#27689](https://github.com/anomalyco/opencode/issues/27689) requests support for `.docx` and `.xlsx` files in the chat interface. No maintainer response.

- **Sticky Prompt / Context Persistence** — [#28035](https://github.com/anomalyco/opencode/issues/28035) asks for the last user prompt to remain visible as a sticky line at the top of the TUI, so users don't scroll up to see what they last asked.

- **SDK / Plugin Enhancement Requests** — Multiple SDK-related requests: [#28069](https://github.com/anomalyco/opencode/issues/28069) asks for per-session plugin disabling, [#26408](https://github.com/anomalyco/opencode/issues/26408) reports missing `format` in prompt body types, and [#7006](https://github.com/anomalyco/opencode/issues/7006) continues to surface the broken `permission.ask` hook.

## Developer Pain Points

- **Clipboard issues on Linux** — Two high-traffic issues ([#4283](https://github.com/anomalyco/opencode/issues/4283), [#24713](https://github.com/anomalyco/opencode/issues/24713)) report that copy-to-clipboard either doesn't work or shows a false positive "copied" toast. The community is actively debugging OS-level clipboard integration, but no fix has been committed.

- **Desktop-specific regressions** — Several reports point to regressions in the Desktop app: history sessions not loading ([#19191](https://github.com/anomalyco/opencode/issues/19191)), macOS notifications failing when renderer denies permission ([#26226](https://github.com/anomalyco/opencode/issues/26226)), and the recent Tauri-to-Electron migration silently dropping session history ([#27469](https://github.com/anomalyco/opencode/pull/27469)).

- **Plugin/Permission system fragility** — The `permission.ask` hook was accidentally dropped during an Effect refactor ([#28066](https://github.com/anomalyco/opencode/issues/28066), closed), and users report it was never actually triggered even when defined ([#7006](https://github.com/anomalyco/opencode/issues/7006)). Plugin developers are encountering brittle integration points.

- **Installation and startup errors** — Bun users cannot install v1.15.1+ due to postinstall script requirements ([#27906](https://github.com/anomalyco/opencode/issues/27906)), and multiple reports ([#27530](https://github.com/anomalyco/opencode/issues/27530), [#28091](https://github.com/anomalyco/opencode/issues/28091), [#27963](https://github.com/anomalyco/opencode/issues/27963)) describe corrupted executables or "Unexpected server error" on startup, particularly on Windows.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the **Qwen Code Community Digest** for **2026-05-18**.

---

## 1. Today's Update Brief

The Qwen Code project saw high activity today, with three new nightly/preview releases and significant movement on the `qwen serve` daemon (Mode B). The community continues to report major pain points around memory leaks and heap out-of-memory (OOM) crashes in long-running sessions, while maintainers are actively merging fixes for idle-state context loss and working on scaling the daemon for production readiness.

## 2. Releases

Three new releases were published in the last 24 hours. All three contain the same set of changes:

- **v0.16.0-preview.0**: A major preview release signaling the next feature version.
- **v0.15.12-preview.3**: A preview patch on the v0.15.x branch.
- **v0.15.11-nightly.20260518.f44ed0941**: A nightly build.

 **Notable Changes in All Three:**
- **`feat(cli)`**: Markdown links are now wrapped in OSC 8 escape sequences, keeping URLs clickable in terminals that support it (by @BZ-D).
- **`fix(core)`**: Normalized cumulative OpenAI stream deltas to suffixes to fix streaming artifacts (by @chiga0).
- **`fix(cli)`**: Auto-restore behavior was improved.

## 3. Hot Issues

1. **#4149 – FATAL ERROR: Ineffective mark-compacts near heap limit (OOM)**
   - **Workflow:** General usage, long-running sessions.
   - **Impact:** High. Node.js V8 heap hits the 4GB limit and crashes. The GC trace shows memory is not being freed effectively.
   - **Reaction:** 10 comments. Users are blocked mid-session. This is a variant of a long-standing class of bugs.
   - [Link](https://github.com/QwenLM/qwen-code/issues/4149)

2. **#4254 – memory leaks**
   - **Workflow:** General usage.
   - **Impact:** High. A user reports the process "keeps eating and eating and eating memory till it crashes."
   - **Reaction:** 1 comment. The user expresses strong frustration, asking about GC monitoring. This is a direct report of the OOM issue.
   - [Link](https://github.com/QwenLM/qwen-code/issues/4254)

3. **#4259 – Follow-up: tighten microcompaction fast-path eviction (token efficiency)**
   - **Workflow:** Long-running sessions, file editing.
   - **Impact:** Medium. A non-correctness issue where the system over-cleans context, forcing redundant file re-reads and wasting tokens.
   - **Reaction:** 1 comment. Opened today by a core contributor ( @wenshao ) as a refinement from a recent PR review.
   - [Link](https://github.com/QwenLM/qwen-code/issues/4259)

4. **#4258 – `/model` command fails with auth type mismatch**
   - **Workflow:** Model switching.
   - **Impact:** High for affected users. The `/model` command incorrectly restricts available models based on the auth type, even when the API key supports other models.
   - **Reaction:** 1 comment. User is blocked from switching to `minimax/minimax-m2.1`.
   - [Link](https://github.com/QwenLM/qwen-code/issues/4258)

5. **#4239 – Assistant forced to re-read files after idle session**
   - **Workflow:** Long-running sessions, file editing.
   - **Impact:** Medium. After a session sits idle (e.g., overnight), the assistant forgets which files it has already read and attempts to re-edit them.
   - **Reaction:** 0 comments. Closed today after a fix (#4243) was merged.
   - [Link](https://github.com/QwenLM/qwen-code/issues/4239)

6. **#4223 – `mimo-v2.5-pro` API Error: 400 Param Incorrect**
   - **Workflow:** Tool calling with specific third-party models.
   - **Impact:** Medium. The `reasoning_content` field from the model is causing API errors on subsequent tool calls.
   - **Reaction:** 3 comments. User notes this is a recurring issue similar to DeepSeekV4Pro.
   - [Link](https://github.com/QwenLM/qwen-code/issues/4223)

7. **#4252 – Feature Request: Add Generation Timing Metrics (TPS, TTFT) to `/stats`**
   - **Workflow:** Performance monitoring.
   - **Impact:** Low (feature request). Community wants visibility into Tokens Per Second and Time-To-First-Token.
   - **Reaction:** 1 comment. A clear, well-defined request from a user.
   - [Link](https://github.com/QwenLM/qwen-code/issues/4252)

8. **#4257 – PC sleep prevents task completion**
   - **Workflow:** Desktop/background execution.
   - **Impact:** Medium. A user left a task running overnight only to find the system sleep stopped it.
   - **Reaction:** 0 comments. The user requests a power management feature to prevent system suspend.
   - [Link](https://github.com/QwenLM/qwen-code/issues/4257)

9. **#4244 – Release Failed for v0.16.0-preview.0**
   - **Workflow:** CI/CD.
   - **Impact:** Low (infra). The release workflow for the new preview failed yesterday.
   - **Reaction:** 0 comments. Reported by a bot.
   - [Link](https://github.com/QwenLM/qwen-code/issues/4244)

10. **#4250 – refactor(serve): add FileSystemService boundary**
    - **Workflow:** Server-side daemon.
    - **Impact:** Medium (architecture). A pure refactor to centralize filesystem boundary checks for the daemon, preparing for production hardening.
    - **Reaction:** Part of the broader #4175 roadmap.
    - [Link](https://github.com/QwenLM/qwen-code/pull/4250)

## 4. Key PR Progress

1. **#4251 (MERGED) – feat(serve): preflight and env diagnostics routes**
   - **Status:** Merged. Adds routes to check the health and environment of the daemon.
   - [Link](https://github.com/QwenLM/qwen-code/pull/4251)

2. **#4243 (MERGED) – fix(core): preserve read-before-write state across idle microcompaction**
   - **Status:** Merged. Fixes the core issue where the assistant forgot about files read before an idle period (#4239). This is a critical fix for long sessions.
   - [Link](https://github.com/QwenLM/qwen-code/pull/4243)

3. **#4255 – feat(serve): auth device-flow route (#4175 Wave 4 PR 21)**
   - **Status:** Open. Implements OAuth 2.0 Device Authorization Grant for the daemon, allowing remote clients to authenticate without sharing tokens.
   - [Link](https://github.com/QwenLM/qwen-code/pull/4255)

4. **#4247 – feat(serve): MCP client guardrails (#4175 Wave 3 PR 14)**
   - **Status:** Open. Adds client-side enforcement of MCP client budgets to prevent runaway MCP processes.
   - [Link](https://github.com/QwenLM/qwen-code/pull/4247)

5. **#4250 – refactor(serve): add FileSystemService boundary (#4175 Wave 4 PR 18)**
   - **Status:** Open. Centralizes filesystem path checking for security and audit.
   - [Link](https://github.com/QwenLM/qwen-code/pull/4250)

6. **#4249 – feat(serve): workspace memory and agents CRUD (#4175 Wave 4 PR 16)**
   - **Status:** Open. Adds the first mutation endpoints for managing workspace-specific memory and agents via HTTP.
   - [Link](https://github.com/QwenLM/qwen-code/pull/4249)

7. **#4199 – feat(ide): add daemon connection spike**
   - **Status:** Open. Adds a VS Code extension spike to test daemon connectivity.
   - [Link](https://github.com/QwenLM/qwen-code/pull/4199)

8. **#4176 – fix(core,cli): close tool_use↔tool_result invariant across all failure paths**
   - **Status:** Open. Fixes a wedge state where tool calls and results get disconnected on weak networks.
   - [Link](https://github.com/QwenLM/qwen-code/pull/4176)

9. **#4256 – fix(core): add stream idle watchdog for silent responses**
   - **Status:** Open. Adds a watchdog timer to detect and abort silent, hung streams from providers.
   - [Link](https://github.com/QwenLM/qwen-code/pull/4256)

10. **#4242 – fix(cli): map rewind turns after compression**
    - **Status:** Open. Fixes the `/rewind` command to correctly target turns that have been absorbed into a compressed context.
    - [Link](https://github.com/QwenLM/qwen-code/pull/4242)

## 5. Feature Request Clusters

- **Daemon for Production (Mode B):** A large batch of PRs (#4250, #4255, #4247, #4249) and the roadmap issue #4175 show a clear push to make `qwen serve` production-ready. The requests center on authentication (device code flow), filesystem isolation, resource limits (MCP budgets), and CRUD APIs for workspace state.

- **Timing & Performance Metrics:** Two issues (#4252, #4185) explicitly ask for metrics like TPS (Tokens Per Second), TTFT (Time to First Token), and a `/stats` command. Users want visibility into latency to understand what is slow (network vs. generation vs. tool calls).

- **File History & Snapshot Management:** Issues #4204 and PR #4253 focus on making file editing history persistent across session resumes and restores. This is a direct follow-up from the recent `/rewind` feature.

- **Goal/Workflow Primitives:** Issue #4228 requests hardening the `/goal` command into a reliable, long-running workflow primitive. This is still in the roadmap discussion phase.

## 6. Developer Pain Points

1. **Memory Leaks & OOM Crashes (Critical):** This is the single most reported pain point. Issues #4149, #4254, #4185, #2868, and #728 all describe the same symptom: V8 heap out of memory after long sessions. The issue is persistent, reproducible, and directly blocks users from completing complex tasks. The community is frustrated.

2. **Weak Network & Hung Streams:** Issues #4176 and #4177 highlight a failure mode where, on poor connections, the tool call loop gets stuck in an unrecoverable wedge, or the model simply hangs without producing output. This is a significant reliability issue for mobile users.

3. **Tool Name Migration Failures:** Issue #4135 reports that when the model tries to use legacy tool names (e.g., `task` instead of `agent`), the call fails. This is a regression or incompatibility that breaks sessions interacting with older models.

4. **Context Loss After Idle:** The assistant re-reading files after an idle period ( #4239 ) was a specific pain point that was fixed in today's #4243 merge. It highlights the fragility of the context management system.

</details>