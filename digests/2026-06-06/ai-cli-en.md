# AI CLI Tools Community Digest 2026-06-06

> Generated: 2026-06-06 02:15 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report — 2026-06-06

## 1. Daily Cross-Tool Overview

Today’s activity across the seven tracked AI CLI tools shows sustained high issue and PR volumes, particularly in OpenCode and Qwen Code, which each recorded 50 PRs updated. Claude Code, Codex, and OpenCode each had 50 issues updated, while Gemini and Copilot CLI had moderate activity and Kimi Code was very quiet. All tools shipped at least a patch or nightly release, with Claude Code pushing three patches in 24 hours. Multi-agent reliability, MCP server lifecycle management, and platform-specific bugs on Windows/WSL remain the most common cross-cutting pain points.

## 2. Activity Comparison

| Tool | Issues Updated (last 24h) | PRs Updated (last 24h) | Releases (last 24h) |
|---|---|---|---|
| Claude Code | 50 | 4 | v2.1.165, v2.1.166, v2.1.167 |
| OpenAI Codex | 50 | 20 | rusty-v8-v149.2.0, rust-v0.138.0-alpha.5 |
| Gemini CLI | ~10 (highlighted) | ~10 (highlighted) | v0.47.0-nightly, v0.46.0-preview.2, v0.45.2 |
| GitHub Copilot CLI | ~10 (highlighted) | 0 | v1.0.60 (yesterday) |
| Kimi Code CLI | 2 | 6 | v1.47.0 |
| OpenCode | 50 | 50 | v1.16.0, v1.16.2 |
| Qwen Code | 25 | 50 | v0.17.1-nightly |

*Note: For tools without explicit total counts (Gemini, Copilot CLI), the number of highlighted items is shown. Actual counts may be higher.*

## 3. Shared Feature Directions

Requirements that appear across multiple tool communities today:

- **MCP server lifecycle improvements**: Codex (#20883, #11324) asks for per-project pooling and memory leak fixes; Copilot CLI (#3701, #3698) reports runaway spawning and unreaped child processes; Qwen (#4777) highlights prompt cache bust from deferred tool listing; OpenCode adds non-interactive MCP add (PR #31054). All point to insufficient MCP resource governance.

- **Subagent/multi-agent transparency and control**: Claude Code (#64651) background agent output bleeds into foreground chat; Codex (#16900, #22099) waits for child completion and parallel execution; Gemini (#21409, #22323) agent hangs and false success reports; OpenCode (#22233) requests subagent runtime visibility; Copilot CLI (#3684) wants full command context in subagent permission calls. Users consistently lack visibility and reliable coordination across agents.

- **Windows and WSL platform stability**: Codex (#25715, #24391) slow WSL and sandbox failures; Copilot CLI (#3687, #3700) ARM64 abort and WSL2 CPU freeze; Kimi (#2435) Work tab crashes on Windows; OpenCode (#20234) WSL output corruption. Each tool has distinct Windows/WSL bugs, indicating a systemic gap in platform maturity for AI CLI tools.

- **Model configuration and availability friction**: Claude Code (#63456) Opus 4.8 missing from CLI picker; Qwen (#3384, #4802) unable to add local LLM and model misidentification; OpenCode (#5359, #2047) image reading broken for some providers and LM Studio list not refreshing. Users face hurdles in using preferred or custom models across tools.

- **Remote development and cross-device workflows**: Codex (#10450, 674 👍) SSH remote development; Claude Code (#28300, #22648) multi-machine agent collaboration and settings sync. Both communities explicitly request remote/cross-device capabilities.

## 4. Differentiation Analysis

- **Claude Code** emphasizes account and settings management (multi-connector accounts, fallback models, deny rules) and has the most active feature request thread (#27302, 195 comments). Its release cycle is rapid (3 patches in 24h). Target user: developers using Anthropic ecosystem with complex auth and model fallback needs.

- **OpenAI Codex** has the most-upvoted issue overall (#10450, 674 👍) around remote development. It also leads in subagent lifecycle controls (parent-child wait, parallel subagents) and MCP pooling. Its PR activity is high (20 PRs) with focused improvements to permission profiles, guardian reviews, and compaction analytics. Target user: team-based developers needing remote workflows and multi-agent orchestration.

- **Gemini CLI** focuses on agent reliability fixes (hang fixes, false success detection, zero-quota retry loop) and AST-aware code navigation. It also promotes model transitions (Gemini 3.1 Flash Lite GA). Target user: Google ecosystem users who need robust autonomous agents and codebase understanding.

- **GitHub Copilot CLI** is the least active in PRs today but has high-severity bugs (ARM64 abort, WSL2 freeze, MCP leaks). Its community strongly prioritizes terminal UX (alt-screen, copy/paste, escape handling) and permissions configuration. Target user: GitHub-centric developers using terminal-heavy workflows.

- **Kimi Code CLI** is in migration mode: v1.47.0 renames the project and nudges users to a new standalone successor. Its activity is very low (2 issues, 6 PRs), suggesting the team is deprioritizing this repository. Target user: existing Kimi users being transitioned to Kimi Code.

- **OpenCode** is the most PR-active (50 PRs) and covers a wide surface: plan-to-build workflows, multi-user auth, subagent visibility, MCP non-interactive add, doom-loop detection, and skill autocomplete. It also has the most diverse feature set. Target user: developers who value flexibility (multi-provider, open-source extensibility) and community-driven features.

- **Qwen Code** is also very PR-active (50 PRs), with concentrated development on the daemon/web-shell feature set (rewind, branching, settings, slash commands). Memory OOM issues dominate user pain (multiple long-standing bugs). Target user: users of Qwen models and those wanting a CLI with remote/web-shell access.

## 5. Community Activity Notes

- **Highest issue volume**: Claude Code, Codex, and OpenCode each had 50 issues updated today, showing intense community engagement.
- **Highest PR volume**: OpenCode and Qwen Code tied at 50 PRs updated, indicating heavy development churn. Codex (20 PRs) and Gemini (~10 PRs) were moderate; Claude Code (4 PRs) and Kimi (6 PRs) were low; Copilot CLI had 0 PRs.
- **Fastest release cadence**: Claude Code shipped 3 patch releases in 24 hours; Gemini shipped 3 releases across stable/preview/nightly chains; OpenCode shipped two versions.
- **Maintainer responsiveness**: Claude Code has multiple maintainer replies on issue #8327 (auth corruption) and acknowledged the macOS process naming issue. Codex maintainers are active on PRs (20 under review). Gemini maintainers added `need-retesting` labels on several bugs. Copilot CLI has no maintainer responses visible on today's hot issues. Kimi has no replies on #2435 (Work tab crash). OpenCode maintainers are merging PRs steadily. Qwen maintainers are active on PRs and commenting on issues.
- **Notable low activity**: Kimi Code CLI (2 issues, no new feature requests, migration focus) and Copilot CLI (0 PRs, high-severity bugs with no visible fix progress) are the least healthy in terms of development velocity today.

## 6. Evidence-Backed Observations

1. **MCP server resource management is a cross-cutting concern.** Codex reports per-session server spawning leading to resource bloat (#20883) and memory leaks (#11324). Copilot CLI reports runaway MCP spawning when multiple VS Code workspaces are open (#3701) and unreaped child processes from slow servers (#3698). Qwen notes that deferred MCP tool listing busts the prompt cache, degrading performance (#4777). OpenCode is adding non-interactive MCP registration (PR #31054). These independent reports indicate the ecosystem lacks a standard approach to MCP lifecycle pooling, lazy loading, and cleanup.

2. **Subagent/multi-agent reliability problems are widespread.** Gemini's generalist agent hangs (#21409) and false success reports from turn-limited subagents (#22323) are severe. Codex has explicit requests for parent-child wait coordination (#16900) and parallel subagent execution (#22099). Claude Code's background agent output bleeds into foreground chat (#64651). OpenCode's community wants subagent status visibility (#22233). These issues span tools and suggest that current subagent orchestration is fragile and opaque.

3. **Windows and WSL remain a stability gap for most tools.** Codex reports unusably slow WSL2 performance (#25715) and sandbox setup failures (#24391). Copilot CLI reports a fatal ARM64 abort (#3687) and a new WSL2 CPU freeze regression (#3700). Kimi's Work tab crashes on Windows with a WebSocket daemon error (#2435). OpenCode's WSL thinking output is corrupted per word (#20234). While each tool has its own specific bug, the pattern of multiple severe Windows/WSL issues across tools points to a systemic deficiency in CI/CD coverage or platform-specific optimization.

4. **Model configuration and availability friction is common but manifests differently.** Claude Code CLI fails to enumerate Opus 4.8 in the model picker (#63456). Qwen Code cannot detect local vLLM endpoints (#3384) and misidentifies Multimodal models as text-only (#4802). OpenCode's image reading breaks for custom providers (#5359) and LM Studio models don't refresh (#2047). This suggests that model discovery, modality detection, and provider configuration are not yet smooth across tools, requiring users to work around tool-specific assumptions.

5. **Remote development and cross-device collaboration is a growing demand, not yet met.** Codex's most-upvoted issue (674 👍) asks for SSH remote development (#10450). Claude Code's #28300 requests agent-to-agent protocol across machines, and its #22648 asks for settings sync across devices. No tool has shipped a solution for these use cases, indicating a gap that could become a differentiator if addressed.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-06-06

## Today's Update Brief

Three patch releases shipped in the last 24 hours (v2.1.165–167), with v2.1.166 bringing the notable addition of a `fallbackModel` setting supporting up to three fallback models plus glob-pattern support in deny rules. Issue activity remains high (50 open items updated, top threads nearing 200 comments), and a cluster of authentication-state corruption bugs is drawing maintainer attention. No new releases with major feature work landed today.

---

## Releases

**v2.1.167** — Bug fixes and reliability improvements. No change log detail published.
**v2.1.166** — Two user-facing additions:
- **`fallbackModel` setting**: configure up to three fallback models tried in order when the primary model is overloaded or unavailable. The `--fallback-model` flag now also applies to interactive sessions (previously CLI-only).
- **Glob pattern support in deny rule tool-name position**: `"*"` denies all tools in one rule.
**v2.1.165** — Bug fixes and reliability improvements.

[Full release history](https://github.com/anthropics/claude-code/releases)

---

## Hot Issues

### 1. Multiple Connector accounts on claude.ai/code
**#27302** — The top-voted open feature request (261 👍, 195 comments). Users want to manage multiple connector accounts (e.g., different GitHub, Gmail, or Slack accounts) from the same Claude Code web session. Current workarounds involve logging out/in or maintaining separate browser profiles.
[Issue](https://github.com/anthropics/claude-code/issues/27302)

### 2. "Organization has been disabled" error with API key override
**#8327** — A long-running bug (118 comments) where users with valid Pro/Max subscriptions hit a disabled-org error when `ANTHROPIC_API_KEY` is set. The env var overrides the subscription auth path, causing auth to fail against a different org context. Several maintainer responses are in the thread; no fix has shipped.
[Issue](https://github.com/anthropics/claude-code/issues/8327)

### 3. Multi-agent collaboration across machines
**#28300** — Request for agent-to-agent protocol support allowing sessions on different machines to coordinate. 23 comments, no maintainer response yet.
[Issue](https://github.com/anthropics/claude-code/issues/28300)

### 4. Account-level settings sync across devices
**#22648** — 37 👍, 23 comments. Claude Code stores config in `~/.claude/` with no sync mechanism. Users with multiple machines must manually duplicate settings. Has been requested repeatedly (linked to #6037, #19634, #13461, #12119).
[Issue](https://github.com/anthropics/claude-code/issues/22648)

### 5. CVP-approved user blocked on benign queries (claude.ai)
**#61889** — A CVP (Custom Vulnerability Program) user reports being blocked on non-security queries in fresh sessions on claude.ai. 23 comments. Not strictly a Claude Code issue (labeled `invalid`), but surfaced in the code repo.
[Issue](https://github.com/anthropics/claude-code/issues/61889)

### 6. macOS process name shows version instead of "claude"
**#12433** — In macOS Activity Monitor, Claude Code processes appear as version numbers (e.g., `2.0.53`) instead of `claude`. 22 👍, 19 comments. A packaging-level issue that affects process management and monitoring.
[Issue](https://github.com/anthropics/claude-code/issues/12433)

### 7. Opus 4.8 not selectable in CLI `/model`
**#63456** — Despite being available on the user's account in the web UI, Opus 4.8 does not appear in the `/model` picker in the CLI. 17 comments, 11 👍. Likely a model-enumeration issue in the CLI client.
[Issue](https://github.com/anthropics/claude-code/issues/63456)

### 8. GitHub repos not visible in Claude Code web repo picker
**#60493** — GitHub app installed, but repos don't appear in the web-based repo picker. 5 comments, no maintainer resolution. Affects the web Code workflow on claude.ai.
[Issue](https://github.com/anthropics/claude-code/issues/60493)

### 9. iOS branch selector missing in Code UI
**#55500** — Branch selector control absent from the iOS Claude Code web interface. 8 👍, 5 comments.
[Issue](https://github.com/anthropics/claude-code/issues/55500)

### 10. VSCode: background agent output streams into foreground chat
**#64651** — When subagents are spawned with `run_in_background: true`, their output bleeds into the active conversation tab, disrupting the user's current workflow. 4 comments, filed 4 days ago.
[Issue](https://github.com/anthropics/claude-code/issues/64651)

---

## Key PR Progress

PR activity is low today (4 total). Notable items:

**#65619** — fix(plugins): align frontend-design author with marketplace entry. Fixes a malformed `plugin.json` where two authors were packed into single-string `author.name` and `author.email` fields. The fix splits them into proper array format.
[PR](https://github.com/anthropics/claude-code/pull/65619)

**#65666** — Fix dev container issues. Removes domains without DNS from the devcontainer firewall config and adds a mechanism to pass the API key from the local environment into the dev container.
[PR](https://github.com/anthropics/claude-code/pull/65666)

**#65723** — Submission title "Claude/subscription debate chat rx ewi" with no description. Appears to be a test/experimental PR.
[PR](https://github.com/anthropics/claude-code/pull/65723)

**#58673** — Single-character PR title "s", no description. Likely abandoned or testing.
[PR](https://github.com/anthropics/claude-code/pull/58673)

---

## Feature Request Clusters

**Multi-account / multi-connector support** (#27302, #22648, #8327): Users want to manage multiple identities, connector accounts, and settings profiles within a single Claude Code installation or web session. The 195-comment thread on #27302 is the most active discussion in the repo.

**Agent-to-agent and cross-session collaboration** (#28300, #65590, #65456): Multiple requests for structured session teams, inter-session communication, and cross-project session handoff. These suggest users are hitting the ceiling of single-session autonomous workflows.

**Model selection flexibility** (#63456, #49649): Users want model switching within existing Cowork tasks and proper enumeration of all available models (e.g., Opus 4.8) in the CLI picker.

**Settings and state portability** (#22648, #65311): Sync of config across machines, plus UI improvements like collapsing unchanged lines in the desktop diff viewer.

**Plugin and subagent tooling** (#65768, #65619): Plugin authors are encountering issues with environment variable resolution in subagent contexts and malformed plugin metadata.

---

## Developer Pain Points

**Authentication state corruption** — A recurring theme across multiple issues this week. Users report stale OAuth refresh tokens causing persistent 401 loops (#65761), transient upstream 5xx responses corrupting credential state (#61912), auth status reporting logged in while the CLI still requires re-login (#65725), and VS Code extension connectivity failures on Windows (#65774). The density of auth-related issues suggests the credential refresh path needs hardening against transient upstream errors.

**Opus 4.8 model availability** — At least two issues (#63456, #65756) report that Opus 4.8 is either not selectable in the CLI or triggers unexpected "usage credits required" walls during sessions. This appears to be a rollout or enumeration gap between the web UI and CLI client.

**Background agent UX conflicts** — The VSCode TUI has a specific issue (#64651) where subagent output pollutes the active chat, disrupting the user's workflow. This suggests the TUI's stream-routing layer doesn't properly isolate agent-level from session-level output.

**Platform-specific gaps** — iOS missing branch selector (#55500), Windows MCP tools not surfacing when web connectors are present (#65516), and the long-standing macOS process naming issue (#12433) indicate varied platform maturity in the TUI and web clients.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-06

## Today's Update Brief

The Codex repository saw moderate activity today with 2 minor releases, 50 updated issues (30 tracked here), and 20 pull requests under review. The community continues to push for improvements to remote development workflows, MCP server lifecycle management, and subagent reliability, while Windows and macOS sandbox/performance issues remain the dominant pain points.

---

## Releases

- **rusty-v8-v149.2.0** — Routine dependency bump for the V8 runtime used in sandboxed execution environments.
- **rust-v0.138.0-alpha.5** — Pre-release build; no changelog provided.

Both releases appear to be maintenance/version tracking updates rather than user-facing feature drops.

---

## Hot Issues

### 1. Remote Development in Codex Desktop App [#10450](https://github.com/openai/codex/issues/10450)
**Status:** CLOSED | **Comments:** 177 | **👍:** 674
The community has been asking for SSH-based remote development (connecting to remote hosts, containers, or dev servers) since the Codex Desktop launch. This is the most-upvoted issue in the dataset by a wide margin. The original poster specifically calls out the gap between Codex and VS Code's remote workflows. *Impact:* Fundamental workflow limitation for teams using remote development environments.

### 2. Codex App on macOS shows 'Computer Use plugin unavailable' [#18258](https://github.com/openai/codex/issues/18258)
**Status:** OPEN | **Comments:** 39 | **👍:** 41
A persistent bug where Computer Use functionality is gated by plugin availability on macOS. A community-driven workaround involves manual cache repair and config toggles. *Impact:* Blocks locked-computer-use workflows for affected users.

### 3. Codex App is Unusably Slow with WSL as Agent Environment [#25715](https://github.com/openai/codex/issues/25715)
**Status:** OPEN | **Comments:** 31 | **👍:** 29
Users on Windows with WSL2 report dramatic latency increases—"routine turns" taking far longer than the CLI equivalent. *Impact:* Makes Codex Desktop effectively unusable for WSL-based development, a core Windows developer workflow.

### 4. Windows Sandbox: Spawn Setup Refresh Fails on Codex CLI 0.133.0 [#24391](https://github.com/openai/codex/issues/24391)
**Status:** OPEN | **Comments:** 27 | **👍:** 22
After updating to 0.133.0, shell commands fail during sandbox initialization. Affects npm global install users on Windows. *Impact:* Blocks any sandboxed task execution on Windows.

### 5. Codex Desktop for macOS Repeatedly Triggers `syspolicyd` / `trustd` CPU Runaway [#25719](https://github.com/openai/codex/issues/25719)
**Status:** OPEN | **Comments:** 18 | **👍:** 17
Codex Desktop triggers macOS security/notarization daemons (syspolicyd, trustd) in a loop, causing sustained high CPU and memory consumption. *Impact:* Degrades system performance while Codex is running.

### 6. Project-Scoped MCP Process Pool [#20883](https://github.com/openai/codex/issues/20883)
**Status:** OPEN | **Comments:** 10 | **👍:** 1
Users report that Codex Desktop starts a new MCP server process per chat/session instead of sharing them across sessions within the same project. *Impact:* Resource bloat when working with many sessions simultaneously.

### 7. Parent-Child Subagent Wait Mechanism [#16900](https://github.com/openai/codex/issues/16900)
**Status:** OPEN | **Comments:** 10 | **👍:** 4
A parent thread can prematurely fall back and redo a task that a child subagent is still successfully processing. The parent lacks visibility into child agent progress. *Impact:* Wasted compute and token consumption in multi-agent workflows.

### 8. Parallel-First Subagents [#22099](https://github.com/openai/codex/issues/22099)
**Status:** OPEN | **Comments:** 10 | **👍:** 0
A fork called Open Codex CLI explores proactive parallel-first subagent delegation and nonblocking background task management. The request is for official support of concurrent subagent execution. *Community note:* This issue collects several related discussions.

### 9. MCP Servers Eat Up Memory When Multi-Tasking [#11324](https://github.com/openai/codex/issues/11324)
**Status:** OPEN | **Comments:** 9 | **👍:** 4
Users working across multiple parallel projects/workspaces report MCP servers accumulating RAM over time without release. *Impact:* Forces periodic restarts to reclaim memory.

### 10. Regression: "For Coding" View Hides Edited Files and Commands [#19891](https://github.com/openai/codex/issues/19891)
**Status:** OPEN | **Comments:** 7 | **👍:** 7
A UI regression in the Codex Desktop "For coding" view now shows aggregate summaries instead of listing individual edited files and commands. *Impact:* Reduces transparency into what the agent is actually doing.

---

## Key PR Progress

### 1. Pair Thread Environment Settings [#26687](https://github.com/openai/codex/pull/26687)
Makes thread cwd and environment selection a single logical setting to prevent silent desynchronization between the two. Preserves existing app-server public API.

### 2. Reduce TUI Legacy Core Dependencies [#26711](https://github.com/openai/codex/pull/26711)
Removes the TUI's dependency on `app-server-client::legacy_core` for thread-name normalization and project-instruction filename handling, fixing incorrect filesystem checks for remote sessions.

### 3. Enable Standalone Web Search in Code Mode [#26719](https://github.com/openai/codex/pull/26719)
Exposes `web.run` to code mode, allowing agents to return search results from standalone web search. Includes integration tests for both direct and code-mode paths.

### 4. Release MCP Manager Lock Before Listing Tools [#26432](https://github.com/openai/codex/pull/26432)
Fixes a deadlock where startup prewarm tool listing retained a read lock while awaiting MCP server initialization, blocking session shutdown that needs a write lock.

### 5. Report Compaction Analytics Details [#26680](https://github.com/openai/codex/pull/26680)
Adds `retained_image_count` and `compaction_summary_tokens` to compaction analytics events for v1.5 compaction improvements.

### 6. Stop Guardian Reviews When Parent Turns Are Interrupted [#26717](https://github.com/openai/codex/pull/26717)
Ensures that guardian approval reviews are canceled when the parent turn is interrupted, preventing orphaned review subagents and missing terminal assessment notifications in the UI.

### 7. Load Direnv Environment into Shell Snapshots [#26715](https://github.com/openai/codex/pull/26715)
Captures the environment after `direnv` has been loaded when Codex is launched from an existing terminal, ensuring commands reuse the correct workspace environment.

### 8. Permission Profiles: Expose Availability to Clients [#26678](https://github.com/openai/codex/pull/26678)
Filters `permissionProfile/list` results to exclude profiles that enterprise requirements prevent users from selecting, reducing client-side policy reconstruction work.

### 9. Report Unusable MCP OAuth Credentials as Logged Out [#26713](https://github.com/openai/codex/pull/26713)
Previously, expired MCP OAuth tokens without a usable refresh token were reported as authenticated. This PR correctly reports them as logged out so users see a login prompt rather than a misleading connected status.

### 10. Plugin Sharing: Remote Plugin Catalog Sections [#26703](https://github.com/openai/codex/pull/26703)
Builds the TUI plugin directory UI to display remote plugin catalog sections, adding read-only source/share metadata and deduplication for shared and remote records. Part of a 4-PR stack also including [26702](https://github.com/openai/codex/pull/26702), [26701](https://github.com/openai/codex/pull/26701), and [26704](https://github.com/openai/codex/pull/26704).

---

## Feature Request Clusters

### Remote Development Workflows
The most heavily requested feature is SSH-based remote development (issue [#10450](https://github.com/openai/codex/issues/10450) with 674 👍). Users want to connect Codex Desktop to remote hosts, dev containers, or cloud servers—a capability that exists in VS Code but is absent from Codex.

### Improved MCP Server Lifecycle Management
Multiple requests ask for smarter MCP server resource management: pooling servers per project instead of per session ([#20883](https://github.com/openai/codex/issues/20883)), lazy startup instead of eager per-session launch ([#21984](https://github.com/openai/codex/issues/21984)), memory leak fixes ([#11324](https://github.com/openai/codex/issues/11324)), and diagnostic commands for MCP failures ([#24439](https://github.com/openai/codex/issues/24439)).

### Subagent Lifecycle Controls
Users request abort coordination for child subagents ([#16900](https://github.com/openai/codex/issues/16900)), parallel-first subagent execution ([#22099](https://github.com/openai/codex/issues/22099)), and handles to clean up orphaned subagents ([#19197](https://github.com/openai/codex/issues/19197)). The common thread is a desire for more visibility and control over the multi-agent execution graph.

### Custom Profiles and Configuration
Users want to define and switch between multiple config profiles via CLI ([#4849](https://github.com/openai/codex/issues/4849)), and to spawn project-scoped custom subagents defined in `.codex/agents` ([#26408](https://github.com/openai/codex/issues/26408)).

---

## Developer Pain Points

**Windows/WSL Performance:** Multiple issues report that Codex Desktop is unusably slow on Windows with WSL2 (e.g., [#25715](https://github.com/openai/codex/issues/25715), [#20967](https://github.com/openai/codex/issues/20967)). Sandbox setup also fails with error code 740 on Windows ([#25362](https://github.com/openai/codex/issues/25362), [#24391](https://github.com/openai/codex/issues/24391)), and an infinite "configure sandbox" loop has been reported ([#23137](https://github.com/openai/codex/issues/23137)).

**macOS Computer Use / Performance:** The Computer Use plugin is intermittently unavailable on macOS ([#18258](https://github.com/openai/codex/issues/18258)), and `syspolicyd`/`trustd` CPU runaway degrades system performance ([#25719](https://github.com/openai/codex/issues/25719)). Locked computer use cannot be enabled on Intel Macs due to component signing errors ([#24207](https://github.com/openai/codex/issues/24207)).

**Usage Quota and Billing Anomalies:** Users report unexplained quota drops—sometimes from ~70% to ~7% around reset boundaries ([#23188](https://github.com/openai/codex/issues/23188))—and slow passive consumption even when not actively using Codex ([#26600](https://github.com/openai/codex/issues/26600)). One user reported `/goal` loops burning through 25% of weekly usage limits ([#22833](https://github.com/openai/codex/issues/22833)).

**UI Regressions and Freezes:** The "For coding" view now hides edited files and commands behind aggregated summaries ([#19891](https://github.com/openai/codex/issues/19891)), and the app freezes entirely when pasting certain text into chat ([#26697](https://github.com/openai/codex/issues/26697)). Micro-freezes after prompts persist on Windows ([#26401](https://github.com/openai/codex/issues/26401)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-06

## Today's Update Brief

Today saw a quiet patch day with three releases pushed across stable and preview channels, all cherry-picking a single fix for the transition banner display limit. The community continues to report agent-hanging and subagent-reliability issues as top concerns, with several high-priority bugs still awaiting retesting. A notable PR began promoting Gemini 3.1 Flash Lite to GA, signaling a model transition on the horizon.

---

## Releases

Three versions published in the last 24 hours:

- **[v0.47.0-nightly.20260605.g4196596f7](https://github.com/google-gemini/gemini-cli/releases/tag/v0.47.0-nightly.20260605.g4196596f7)** — Automated nightly build with no user-facing changelog.

- **[v0.46.0-preview.2](https://github.com/google-gemini/gemini-cli/releases/tag/v0.46.0-preview.2)** — Cherry-picks commit `f40498d` from `release/v0.46.0-preview.1-pr-27676` to patch the preview channel.

- **[v0.45.2](https://github.com/google-gemini/gemini-cli/releases/tag/v0.45.2)** — Same commit `f40498d` cherry-picked to the stable `v0.45.1` branch.

Both patch releases address the same underlying fix (the Antigravity transition banner display limit), applied to separate release tracks.

---

## Hot Issues

10 noteworthy issues active in the last 24 hours:

1. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** (P1, 8 👍)
   *Workflow:* User asks the generalist agent to perform simple tasks (e.g., folder creation). *Impact:* The agent hangs indefinitely. A workaround exists: instructing the model not to use subagents resolves the hang. *Community:* 8 upvotes — one of the most-voted open bugs.

2. **[#22323 — Subagent recovery after MAX_TURNS reports false success](https://github.com/google-gemini/gemini-cli/issues/22323)** (P1, 2 👍)
   *Workflow:* `codebase_investigator` subagent hits its turn limit but reports `status: "success"` and `Termination Reason: "GOAL"`. *Impact:* Downstream workflows assume the task completed. *Note:* Still in `need-retesting` status.

3. **[#24353 — Robust component-level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)** (P1, 0 👍)
   *Workflow:* The existing behavioral eval framework has generated 76 tests across 6 Gemini models. *Impact:* Epic for hardening evaluation infrastructure. Created March 31, still actively updated.

4. **[#22745 — AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** (P2, 1 👍)
   *Workflow:* Proposes using AST-aware tools for more precise method-bound reads and codebase navigation. *Impact:* Could reduce token consumption and misaligned reads. Sub-issues track AST grep and CLI tooling experiments.

5. **[#25166 — Shell command stuck on "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)** (P1, 3 👍)
   *Workflow:* After executing a simple CLI command, Gemini hangs with the shell command still shown as active. *Impact:* Users must cancel and retry. Occurs for trivially simple commands. Effort labeled "medium".

6. **[#21983 — Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** (P1, 1 👍)
   *Workflow:* Running `browser_agent` on Wayland display servers. *Impact:* Agent terminates with `GOAL` but no useful output. Still in `need-retesting`.

7. **[#26525 — Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** (P2, 0 👍)
   *Workflow:* Auto Memory reads local transcripts and sends content to the model for extraction. Redaction happens *after* content is already in model context. *Impact:* Security concern — secrets could leak before redaction.

8. **[#24246 — 400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)** (P2, 0 👍)
   *Workflow:* When 128+ tools are declared, the API returns a 400 error. *Impact:* Users with many custom skills break entirely. Maintainer requested additional info.

9. **[#22672 — Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)** (P2, 1 👍)
   *Workflow:* The agent uses `git reset` or `--force` when safer alternatives exist. *Impact:* Risk of data loss or branch corruption. No resolution yet.

10. **[#22093 — Subagents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)** (P2, 0 👍)
    *Workflow:* Users who explicitly disabled subagents in settings find them activated after update to v0.33.0. *Impact:* Loss of user control over agent behavior. Still in `need-retesting`.

---

## Key PR Progress

10 important pull requests active in the last 24 hours:

1. **[#27705 — Promote Gemini 3.1 Flash Lite to GA, support Gemini 3.5 Flash](https://github.com/google-gemini/gemini-cli/pull/27705)** (size/xl)
   Unifies changes from three separate lines: replaces retired preview models (e.g., `gemini-3.1-flash-lite-preview`) with the stable GA model. Open, needs issue linking.

2. **[#27708 — Harden AI prompt around untrusted data](https://github.com/google-gemini/gemini-cli/pull/27708)** (size/s)
   Fixes a CI security issue: prevents passing potentially unsafe data directly into an AI prompt by routing through a middle-man file. Reference: issuetracker.google.com/issues/514760457.

3. **[#27698 — Fail fast on zero-quota limits](https://github.com/google-gemini/gemini-cli/pull/27698)** (size/s)
   Critical bug fix: prevents a 10-attempt retry loop when hitting a hard quota limit of `0` (e.g., on unbilled free-tier accounts). Users were trapped in indefinite hangs.

4. **[#27701 — Treat configured includeDirectories as optional](https://github.com/google-gemini/gemini-cli/pull/27701)** (P1, size/s, closed)
   Changes `WorkspaceContext.addDirectory` to lenient `addDirectories` so a missing entry in `settings.context.includeDirectories` no longer crashes the CLI on startup.

5. **[#27695 — Prevent duplicate agent loading from home directory](https://github.com/google-gemini/gemini-cli/pull/27695)** (P2, size/m, closed)
   Fixes duplicate-agent warnings when the CLI starts in the user's home directory by comparing paths between `userAgentsDir` and `projectAgentsDir`.

6. **[#27694 — Deduplicate home agent directories](https://github.com/google-gemini/gemini-cli/pull/27694)** (P2, size/m, open)
   Fixes #27692: deduplicates project-level and user-level agent directories before loading local agents, preserving precedence when directories differ.

7. **[#27572 — Handle tmux false-positive background detection](https://github.com/google-gemini/gemini-cli/pull/27572)** (size/m)
   Fixes a regression where Gemini incorrectly detects `#ffffff` background inside tmux (especially via mosh), leading to wrong theme switches and compatibility warnings.

8. **[#27591 — Fallback for oversized bug report URLs](https://github.com/google-gemini/gemini-cli/pull/27591)** (P2, size/m)
   Fixes `/bug` command for oversized GitHub issue URLs on Android/Termux where deep-link/intent limits cause crashes. Encodes data to avoid exceeding limits.

9. **[#27678 — Hide ignored folders from session context](https://github.com/google-gemini/gemini-cli/pull/27678)** (P2, size/s)
   Prevents `.gitignore` / `.geminiignore`-ignored directory names from appearing in the initial `session_context` directory tree, reducing noise.

10. **[#27684 & #27685 & #27686 — Linter hygiene (no-unsafe-return, no-unsafe-assignment, no-floating-promises)](https://github.com/google-gemini/gemini-cli/pull/27684)** (P2, various sizes, open)
    Three separate PRs eliminating TypeScript lint suppressions in the a2a-server package. Part of the linter hygiene epic (#19440).

---

## Feature Request Clusters

Several related feature requests in today's data:

**AST-Aware Tooling (3 issues):** Multiple issues (#22745, #22746, #22747) explore using AST-aware CLI tools for codebase mapping, file reads, and search. The goal is to reduce token waste from misaligned reads and improve navigation precision. No roadmap commitment visible.

**Agent Self-Awareness & Permissions (2 issues):** Issue #21432 requests that the CLI accurately report its own flags, hotkeys, and execution capabilities to users. Issue #22672 asks the agent to avoid destructive commands (force flags, dangerous git operations). Both reflect a desire for agent safety and transparency.

**Auto Memory & Inbox Quality (3 issues):** Issues #26516, #26522, #26523, #26525 form a cluster around Auto Memory reliability: preventing infinite retries on low-signal sessions, surfacing invalid patches, and adding deterministic redaction before content leaves local storage.

---

## Developer Pain Points

**1. Agent hangs and stalls:** The most-upvoted bug (#21409, 8 👍) describes the generalist agent hanging indefinitely on simple tasks. Combined with the shell command hang (#25166, 3 👍) and zero-quota retry loop (#27698), these represent a cluster of reliability issues that block basic usage.

**2. Agent configuration not respected:** Multiple reports (#22093, #22267) indicate that agent settings — including disabled subagents and `maxTurns` overrides — are silently ignored after updates. This erodes user trust in configuration files.

**3. Subagent behavior opacity:** Issue #22323 highlights a deceptive success report from a subagent that actually hit its turn limit. Users cannot distinguish between genuine completion and silent failure, making debugging agent workflows difficult.

---

*Generated from github.com/google-gemini/gemini-cli data for 2026-06-06.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest – 2026-06-06

## Today’s Update Brief

Version **1.0.60** was released yesterday with three fixes, but the release is overshadowed by a spike of high‑severity bugs and usability regressions reported within the last 24 hours. Over a dozen new issues cover Windows ARM64 crashes, WSL2 TUI freezes, MCP server resource leaks, and ongoing frustration with keyboard/input handling. No pull requests were merged or updated today.

## Releases

**v1.0.60** (2026-06-05)
- Tab completes `..` parent traversal in slash‑command path arguments instead of switching tabs.
- Adds the max reasoning effort level for Anthropic models and makes all effort levels available on every plan.
- Fixes a blank screen after waking from sleep inside a terminal multiplexer.

[Release link](https://github.com/github/copilot-cli/releases/tag/v1.0.60)

## Hot Issues (10 noteworthy)

1. **[#2101 – Request failed due to transient API error; retry loop → rate limit](https://github.com/github/copilot-cli/issues/2101)**
   Open since March, now 27 comments and 17 👍. Users hit repeated transient errors that eventually trigger a rate‑limit block. **Impact:** disrupts any multi‑step workflow relying on model calls.

2. **[#2334 – “Please bring back no-alt-screen”](https://github.com/github/copilot-cli/issues/2334)**
   28 👍 (highest in today’s data). Users strongly prefer the old alt‑screen mode; the new one removes scroll bars, find functionality, and selection copy. **Community sentiment:** the change is a severe usability regression for terminal power users.

3. **[#3687 – Windows ARM64 fatal abort (BEX64 / 0xc0000409)](https://github.com/github/copilot-cli/issues/3687)**
   Reported yesterday. `copilot.exe` hard‑aborts under load (multiple session starts, memory pressure). Reproducible across v1.0.57 and v1.0.60. **Severity:** high – process exits without graceful shutdown.

4. **[#3700 – [High severity] WSL2 regression: 215% CPU while idle, TUI frozen](https://github.com/github/copilot-cli/issues/3700)**
   Fresh WSL2 sessions immediately pin CPU and freeze live output until restart. Regresses #2208. **Impact:** makes the CLI unusable on WSL2; 1 👍 in just a few hours.

5. **[#3701 – Runaway MCP server spawning (IDE lock‑file watcher re‑init loop)](https://github.com/github/copilot-cli/issues/3701)**
   With multiple VS Code workspaces open, Copilot repeatedly spawns the Playwright MCP server, likely caused by IDE integration polling. **Impact:** process accumulation and performance degradation.

6. **[#3698 – MCP server connect leak: unbounded child processes](https://github.com/github/copilot-cli/issues/3698)**
   Slow or unreachable stdio MCP servers are never reaped; child processes accumulate indefinitely, pinning CPU. **Observed in** v1.0.60.

7. **[#2398 – Support a default config file for permissions](https://github.com/github/copilot-cli/issues/2398)**
   10 👍. Users ask to pre‑approve tools per session instead of repeatedly answering “Always allow”. **Related pain:** parallel sessions silently overwrite permissions (see #3563).

8. **[#2344 – Copy in terminal pastes previous clipboard item](https://github.com/github/copilot-cli/issues/2344)**
   Closed, but 10 👍. A “feature” two weeks ago broke native terminal copy‑on‑select and paste. **Workflow impact:** every text selection misbehaves; users rely on automatic selection copy in their terminal emulators.

9. **[#1944 – [Windows] Mouse wheel captured by input box instead of history](https://github.com/github/copilot-cli/issues/1944)**
   Closed, but a regression that blocks scrolling through conversation history on Windows. **Community note:** similar input‑capture bugs keep resurfacing (see #2998, #3693).

10. **[#3692 – Escape should cancel current task and focus pending prompt](https://github.com/github/copilot-cli/issues/3692)**
    Users type a follow‑up while a task runs; pressing Escape discards the pending prompt instead of moving it into focus. **UX:** disrupts multi‑step workflows.

## Key PR Progress

No pull requests were updated in the last 24 hours. (0 items)

## Feature Request Clusters

*Grouped requests from today’s issues, without predicting roadmap outcomes.*

- **Permissions & configuration**
  – Default permissions file (#2398, #3563)
  – Option to disable repository hooks for supply‑chain security (#3697)
  – Cost data availability in hooks (#3686)

- **Terminal rendering & keyboard**
  – Restore `no‑alt‑screen` (#2334)
  – Fix copy/paste and selection behaviour (#2344, #2998, #3693)
  – Escape handling (#3692)
  – Session name always visible (#3415)

- **Platform support**
  – Voice mode for linux‑arm64 (#3690)
  – Auto‑update picks correct musl package on Alpine (#3696)

- **MCP & agent skills**
  – `allowed‑tools` frontmatter respected in non‑interactive mode (#3699)
  – Subagent permission calls should show the full command context (#3684)

## Developer Pain Points

*Recurring frustrations reported in today’s issues.*

- **Frequent API errors and rate limits** (#2101) – transient errors cascade into full blocks, stalling any session.
- **Input capture regressions** – mouse wheel (#1944), copy/paste (#2344, #2998), and `Ctrl+Z` (#3693) all interfere with normal terminal behaviour.
- **Windows and WSL2 instability** – ARM64 fatal abort (#3687) and WSL2 CPU/TUI freeze (#3700) make the CLI unreliable on Microsoft platforms.
- **MCP resource leaks** – runaway spawning (#3701) and un‑reaped child processes (#3698) degrade system performance.
- **Permissions friction** – no default config (#2398) and parallel‑session overwrites (#3563) force repetitive approvals or cause silent tool permission loss.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-06

## Today's Update Brief
Version 1.47.0 shipped with a fix for truncated error briefs and a repository rename to avoid confusion with the upcoming `kimi-code` successor. Two bugs surfaced: a WebSocket daemon failure crashes the Work tab on Windows, and an auto‑logout bug was closed. Six pull requests were active, including a major RalphFlow architecture merge and a batch of fixes for MCP connectivity and Linux terminal scrolling.

## Releases
**v1.47.0**
Changes:
- `fix(tools)`: Include trailing output in error briefs; render brief as plain text ([#2389](https://github.com/MoonshotAI/kimi-cli/pull/2389))
- `docs`: Rename project to **Kimi CLI** and add link to the new Kimi Code CLI successor ([#2431](https://github.com/MoonshotAI/kimi-cli/pull/2431))
- Also includes `/upgrade` command guidance, welcome‑screen nudges, and automatic config/session migration to the standalone Kimi Code ([#2432](https://github.com/MoonshotAI/kimi-cli/pull/2432), [#2433](https://github.com/MoonshotAI/kimi-cli/pull/2433))

## Hot Issues
*Only 2 issues were updated in the last 24h.*

1. **[#2435] [Bug] Kimi Work tab: "Daimon control WS not ready" + infinite reload at 99%**
   *Author:* [@JoseLuisMartinezMeza](https://github.com/JoseLuisMartinezMeza)
   *Workflow affected:* `kimi web` Work tab – completely unusable on Windows 10/11 due to WebSocket daemon init failure and continuous 99% reload loop.
   *Impact:* Blocks all Work‑related functionality (agent interaction). Zero comments yet; no maintainer response.
   [Link](https://github.com/MoonshotAI/kimi-cli/issues/2435)

2. **[#2430] [CLOSED] bug: auto logged out in the middle of a task**
   *Author:* [@TheKevinWang](https://github.com/TheKevinWang)
   *Workflow affected:* Long‑running tasks on Kimi Code v1.36.0 (kimi‑k2.6 model, Windows 10) – user returns to find the session logged out mid‑task.
   *Impact:* Lost progress; no comments. Closed without resolution details visible.
   [Link](https://github.com/MoonshotAI/kimi-cli/issues/2430)

## Key PR Progress
*6 PRs were updated in the last 24h; all listed below.*

1. **[#1960] feat(soul): RalphFlow architecture with ephemeral context and convergence detection** *(CLOSED)*
   *Author:* [@ORDL-AMF](https://github.com/ORDL-AMF)
   Introduces an automated iteration framework to prevent infinite loops in the CLI agent. Uses isolated temporary context files and convergence detection. Merged after a long development cycle.
   [Link](https://github.com/MoonshotAI/kimi-cli/pull/1960)

2. **[#2434] fix: suppress MCP connection errors and handle LLM double-serialization** *(OPEN)*
   *Author:* [@wintrover](https://github.com/wintrover)
   Three bug fixes discovered during heavy MCP tool usage: (1) suppress connection‑drop errors in `crash.py`, (2) avoid double‑serialization of LLM responses, (3) improve error logging.
   [Link](https://github.com/MoonshotAI/kimi-cli/pull/2434)

3. **[#2429] fix: prevent idle cursor blink from forcing scroll to bottom in Linux terminals** *(OPEN)*
   *Author:* [@GH-ytym](https://github.com/GH-ytym)
   Resolves [#2422](https://github.com/MoonshotAI/kimi-cli/issues/2422) – when scrolling up to read history, the cursor blink caused automatic re‑scroll to bottom every second. Fix suppresses this on Linux.
   [Link](https://github.com/MoonshotAI/kimi-cli/pull/2429)

4. **[#2433] chore(release): bump kimi-cli to 1.47.0** *(CLOSED)*
   *Author:* [@RealKai42](https://github.com/RealKai42)
   Standard version bump from 1.46.0 to 1.47.0.
   [Link](https://github.com/MoonshotAI/kimi-cli/pull/2433)

5. **[#2432] feat(shell): guide users to upgrade to the new Kimi Code** *(CLOSED)*
   *Author:* [@RealKai42](https://github.com/RealKai42)
   Adds a `/upgrade` command that installs the standalone Kimi Code (migrates config & sessions) and a welcome‑screen nudge. No forced prompts or sunset countdown.
   [Link](https://github.com/MoonshotAI/kimi-cli/pull/2432)

6. **[#2431] docs: rename project to Kimi CLI and link to Kimi Code CLI successor** *(CLOSED)*
   *Author:* [@RealKai42](https://github.com/RealKai42)
   Updates README and project self‑references to avoid confusion with the next‑generation `MoonshotAI/kimi-code` repository.
   [Link](https://github.com/MoonshotAI/kimi-cli/pull/2431)

## Feature Request Clusters
No feature requests were identified in today’s issue/PR data. The RalphFlow architecture (#1960) is a large feature that was merged previously, but it does not represent a new request cluster today.

## Developer Pain Points
- **Windows Work tab crash:** Issue #2435 describes a show‑stopping WebSocket daemon failure (“Daimon control WS not ready”) causing infinite reload at 99%, making the Work tab unusable. No workaround or maintainer reply yet.
- **Session logout during tasks:** Closed bug #2430 reports automatic logout mid‑task on Windows, leading to lost work. No resolution details available.
- **MCP reliability:** PR #2434 addresses three separate MCP connection pitfalls (drops, double‑serialization, error handling), indicating that MCP integration is a current source of friction.
- **Linux terminal annoyances:** PR #2429 fixes an idle cursor blink that forces scroll to bottom in Linux terminals, a UX issue that makes reading long outputs impossible.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-06

## Today's Update Brief
Two patch releases went out in the last 24 hours, fixing reasoning‑summary provider gating, edit overwrite safety, and a Bedrock hang. Community activity remains high: 50 issues and 50 PRs were updated, with strong engagement on sub‑agent visibility, doom‑loop detection, and multi‑user authentication requests.

## Releases

### v1.16.2
- **Reasoning summaries** now only run on providers that support them, preventing GPT‑5 request failures on compatible backends.
- **Edit operations** refuse loose matches that could overwrite the wrong code or replace an existing file by mistake.
- Fixed **Bedrock sessions hanging**.

### v1.16.0
- Added **managed workspace cloning** that preserves dirty and untracked files.
- Added **moving sessions between workspaces and directories**.
- Added **proper OpenAI model support through AWS Bedrock**.
- Added **skill discovery and file‑based agent loading**.
- Updated **GitHub Copilot usage**.

Full changelog: [v1.16.0…v1.16.2](https://github.com/anomalyco/opencode/compare/v1.16.0...v1.16.2)

## Hot Issues

1. **#5359 – Unable to read images for some models**
   *Author: @conradkoh*
   Images pasted into OpenCode fail to be read on versions after 1.0.134 when using LiteLLM + Vertex AI. Worked in 1.0.134. 15 comments, still open.
   [Link](https://github.com/anomalyco/opencode/issues/5359)

2. **#2047 – LM Studio failure to refresh models**
   *Author: @blankenshipz*
   Adding/removing models in LM Studio doesn’t update the OpenCode model list even after re‑authentication. A quick fix is requested. 15 comments, 3 👍.
   [Link](https://github.com/anomalyco/opencode/issues/2047)

3. **#29992 – Auto‑scroll stops working after manual scroll and return to bottom**
   *Author: @derycklong*
   When the assistant streams a response, scrolling up then back down disables auto‑scroll; new content arrives but viewport stays fixed. 13 comments, 15 👍. **Closed** in v1.15.11 via opentui PR #1088.
   [Link](https://github.com/anomalyco/opencode/issues/29992)

4. **#29808 – Desktop version UI display issue**
   *Author: @tongkangyu*
   Toggle buttons for file tree and file review disappear after adjusting advanced display settings; only keyboard shortcuts work to bring them back. 11 comments, 6 👍.
   [Link](https://github.com/anomalyco/opencode/issues/29808)

5. **#20234 – OpenCode under WSL outputs one word per line during thinking**
   *Author: @MSoberM*
   Thinking output on Windows Subsystem for Linux is broken into single‑word lines, making it unusable. 9 comments, 4 👍.
   [Link](https://github.com/anomalyco/opencode/issues/20234)

6. **#12716 – Doom loop not caught during reasoning or output**
   *Author: @Heinrich-XIAO*
   Infinite tool‑call loops (e.g., “think about a word 100 times”) go undetected. 8 comments, 3 👍.
   [Link](https://github.com/anomalyco/opencode/issues/12716)

7. **#29059 – Feature: Add dynamic workflows for repeatable multi‑step automation**
   *Author: @VasyaYovbak*
   Inspired by Claude Code, request for project‑local workflow definitions. 7 comments, 12 👍.
   [Link](https://github.com/anomalyco/opencode/issues/29059)

8. **#22233 – Improve subagent runtime visibility in chat UI**
   *Author: @a1418507570*
   During subagent operations, the UI doesn’t show which agent is running, what it’s doing, or how long it has been running. 6 comments.
   [Link](https://github.com/anomalyco/opencode/issues/22233)

9. **#20067 – Feature: Multi‑user auth and per‑user provider credentials for OpenCode web**
   *Author: @berkslv*
   Shared enterprise deployments need separate auth for each team member using the same instance. 5 comments, 12 👍.
   [Link](https://github.com/anomalyco/opencode/issues/20067)

10. **#7801 – Feature: Plan mode + question tool can auto‑switch to Build mode**
    *Author: @gasatrya*
    After completing a plan, users want a one‑click transition to build mode without manual switching. 5 comments, 18 👍.
    [Link](https://github.com/anomalyco/opencode/issues/7801)

## Key PR Progress

1. **#31054 – Support non‑interactive MCP add**
   *Author: @rekram1-node*
   Adds `--env`, `--header` and positional arguments for programmatic MCP registration. Preserves interactive flow.
   [Open](https://github.com/anomalyco/opencode/pull/31054)

2. **#31053 – Add search to `auth logout` command**
   *Author: @rekram1-node*
   Makes the provider picker searchable and accepts provider ID/name as positional argument.
   [Merged](https://github.com/anomalyco/opencode/pull/31053)

3. **#31052 – Keep compacted Anthropic tool histories user‑led**
   *Author: @codeg-dev*
   Fixes #31048 by stripping trailing assistant prefill and inserting a user boundary after compaction.
   [Open](https://github.com/anomalyco/opencode/pull/31052)

4. **#31043 – Settle owned process output**
   *Author: @kitlangton*
   Fixes orphaned child processes by waiting for Node `exit` instead of closing pipes.
   [Open](https://github.com/anomalyco/opencode/pull/31043)

5. **#30091 – Settle pending tool calls on schema errors**
   *Author: @codeg-dev*
   Marks a tool part as error when the stream emits a schema‑validation tool‑error, preventing hung calls.
   [Open](https://github.com/anomalyco/opencode/pull/30091)

6. **#31050 – Omit unavailable host tools**
   *Author: @kitlangton*
   Adds host configuration for unavailable tools, removes them before prompting, and settles stuck calls.
   [Open](https://github.com/anomalyco/opencode/pull/31050)

7. **#31049 – Canonicalize server API**
   *Author: @thdxr*
   Promotes the experimental server API to canonical names with organized route groups, handlers, and middleware.
   [Open](https://github.com/anomalyco/opencode/pull/31049)

8. **#29217 – Add inline `$skill` invocations with SKILL pill**
   *Author: @jjdubski*
   Typing `$` in the prompt composer shows skill autocomplete; inline skills shown as pills. Closes 5 issues.
   [Open](https://github.com/anomalyco/opencode/pull/29217)

9. **#30242 – Allow choosing Windows install directory**
   *Author: @Fatty911*
   Switches NSIS installer from one‑click to assisted mode so users can select installation path. Fixes #26818.
   [Open](https://github.com/anomalyco/opencode/pull/30242)

10. **#31033 – Use `localhost` instead of `127.0.0.1` for MCP OAuth redirect URI**
    *Author: @github-remy-saissy*
    Fixes OAuth failures with AWS WAF by switching from `127.0.0.1` to `localhost`.
    [Merged](https://github.com/anomalyco/opencode/pull/31033)

## Feature Request Clusters

- **Subagent visibility** (issues #22233, #23784, #22153): Users want to see which sub‑agent is running, what it’s doing, and progress indicators in both chat UI and TUI prompt footer.
- **Plan‑to‑build workflow** (issues #7801, #9604): Multiple requests for a button or automatic mode switch after completing a plan, so users don’t have to manually re‑enter build mode.
- **Multi‑user / enterprise auth** (issue #20067, also billing confusion in #31028, #31008): Shared OpenCode web deployments need per‑user authentication and separate provider credentials; billing issues (double charges, free‑usage exceeded despite subscription) suggest confusion about plan provisioning.
- **Doom‑loop / infinite loop detection** (issues #12716, #25254): Current detection is either too narrow (only within a single message) or misses loops during reasoning/output. Multiple bugs filed.
- **MCP configuration improvements** (issues #29827, PR #31054, PR #30175): Users want to add MCP servers non‑interactively with command‑line arguments, and a searchable `auth logout` is also being addressed.
- **Vision / image support** (issues #5359, #8875, #9897): Custom providers and some backends (LiteLLM+Vertex) cannot send images; documentation for `modalities` property is missing. The recent PR #31038 improves media handling.

## Developer Pain Points

- **Image reading broken** across multiple versions for certain provider configurations (#5359).
- **LM Studio model list not refreshing** even after re‑authentication (#2047).
- **WSL output corruption** during thinking phase (#20234).
- **Desktop UI glitches** – toggle buttons disappearing (#29808, #30545, #30996).
- **Subagent status invisible** – no way to tell what the tool is doing (#22233, #23784).
- **Doom loops undetected** causing infinite cost cycles (#12716, #25254).
- **Billing confusion** – double charges, “free usage exceeded” despite active subscription (#31028, #31008).
- **Cross‑platform migration issues** – session history lost when moving database from Windows to WSL (#29799).
- **Process orphan problems** – OpenCode processes left running when parent exits, consuming memory (#13001).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest – 2026-06-06

## Today's Update Brief
A nightly release (v0.17.1-nightly) shipped with a single CLI fix. Community activity remains high: 25 issues and 50 PRs were updated in the last 24 hours. The daemon/web-shell feature set is seeing concentrated development, with several new HTTP endpoints and slash-command parity PRs landing. Memory-related bugs continue to dominate user reports.

## Releases
- **[v0.17.1-nightly.20260606.16c1d9a5a](https://github.com/QwenLM/qwen-code/releases/tag/v0.17.1-nightly.20260606.16c1d9a5a)** – Chore release plus fix: skip thought parts in copy output (`fix(cli)` by @he-yufeng).

## Hot Issues (10 selected)
1. **[#3384 – Unable to add OpenAI-compatible local LLM](https://github.com/QwenLM/qwen-code/issues/3384)**
   User cannot connect to a local vLLM endpoint (Qwen3.6-35B-A3B) even after configuring `settings.json`. 13 comments, open for 50 days. Affects custom provider workflow.

2. **[#4514 – Daemon capability gaps & prioritized backlog (post v0.16-alpha)](https://github.com/QwenLM/qwen-code/issues/4514)**
   Maintainer tracking issue for missing HTTP/SSE endpoints in `qwen serve`. Covers rewind, branching, settings, and more. 12 comments.

3. **[#4815 – Severe OOM with `qwen --resume` and Escape key broken](https://github.com/QwenLM/qwen-code/issues/4815)**
   P1: Memory exhaustion within 10 minutes after session restore; Escape key becomes unresponsive. 3 comments, just opened yesterday. Critical for long-session users.

4. **[#4801 – Add a dedicated `web_search` tool](https://github.com/QwenLM/qwen-code/issues/4801)**
   Requests actual web search (Google) instead of relying on `web_fetch` to fetch specific URLs. 3 comments, open 1 day.

5. **[#4809 – Web-shell: 13 CLI slash commands not supported](https://github.com/QwenLM/qwen-code/issues/4809)**
   Commands like `/arena`, `/skills` fail in ACP mode due to missing `supportedModes`. 2 comments, from maintainer.

6. **[#4802 – qwen3.7-plus should support multimodal (image/video) input](https://github.com/QwenLM/qwen-code/issues/4802)**
   Modality detection logic treats the model as text-only; Plus models are multimodal in Model Studio. 2 comments, welcome PR.

7. **[#4777 – Deferred-tools listing in system prompt busts prompt cache on every MCP discovery](https://github.com/QwenLM/qwen-code/issues/4777)**
   MCP tools part of cached system prompt; any change forces re‑generation. 2 comments, impacts performance with progressive tool loading.

8. **[#4791 – `write_file` and `edit` tools fail validation when parameters contain valid JSON](https://github.com/QwenLM/qwen-code/issues/4791)**
   Validator parses JSON string as nested object instead of literal string. Closed after fix; affects file editing workflows.

9. **[#4814 – UI should make it easier for Custom Provider users to add new models](https://github.com/QwenLM/qwen-code/issues/4814)**
   After initial wizard, adding a model to an existing custom provider is cumbersome. 1 comment, P3 feature request.

10. **[#4813 – `modelProviders`: shared `baseUrl` cannot be set once for multiple models](https://github.com/QwenLM/qwen-code/issues/4813)**
    Each model entry must duplicate the endpoint URL. Users managing many local models face repetitive config. 1 comment.

## Key PR Progress (10 selected)
1. **[#4820 – Add HTTP rewind endpoints for daemon/web-shell](https://github.com/QwenLM/qwen-code/pull/4820)**
   Implements `GET/POST /session/:id/rewind` for conversation snapshots. Extends existing rewind service.

2. **[#4812 – Add `POST /session/:id/branch` for session forking](https://github.com/QwenLM/qwen-code/pull/4812)**
   Enables programmatic forking of live sessions via daemon API – key for web-shell and SDK clients.

3. **[#4787 – Fix Qwen triage workflow prompt](https://github.com/QwenLM/qwen-code/pull/4787)**
   Replaces broken wrapper with direct skill invocation (`/triage $NUMBER`). CI reliability improvement.

4. **[#4819 – Enable `/remember`, `/forget`, `/dream` in ACP mode](https://github.com/QwenLM/qwen-code/pull/4819)**
   Adds `supportedModes` declarations plus error handling. Unblocks web-shell memory commands.

5. **[#4798 – Inject current date on every user query to prevent stale date](https://github.com/QwenLM/qwen-code/pull/4798)**
   Adds system reminder with current time on each turn. Fixes context staleness in long sessions.

6. **[#4799 – Add daemon dev launcher for web-shell](https://github.com/QwenLM/qwen-code/pull/4799)**
   Single command that starts daemon + web-shell dev server and opens browser with bearer token. Improves developer experience.

7. **[#4816 – Add `/settings` slash command for web-shell](https://github.com/QwenLM/qwen-code/pull/4816)**
   Full-stack: daemon API routes, SDK client, React hooks, keyboard-navigable UI. Completes a major daemon parity item.

8. **[#4563 – Extract `DaemonWorkspaceService` from `AcpSessionBridge`](https://github.com/QwenLM/qwen-code/pull/4563)**
   Refactoring that separates workspace-level operations (status, init, tool-toggle) from session bridge. Foundation for PR #4736.

9. **[#4736 – ACP/REST parity wave 1: 24 extension methods](https://github.com/QwenLM/qwen-code/pull/4736)**
   Adds session extensions, memory, files, auth via `_qwen/*` in ACP dispatch. Depends on #4563.

10. **[#4490 – Merge daemon-mode feature batch into main](https://github.com/QwenLM/qwen-code/pull/4490)**
    Periodic integration of `daemon_mode_b_main` (46 commits, +115k/−12k LOC). Contains core v0.16-alpha features.

## Feature Request Clusters
- **Web-search capability** – Multiple users request a true `web_search` tool instead of relying on `web_fetch` for specific URLs (#4801).
- **Configuration ergonomics** – Issues around model provider configuration: shared `baseUrl` (#4813), easier model addition for custom providers (#4814), and context window settings ignoring model config (#4089).
- **Web-shell / daemon parity** – A cluster of requests and PRs aiming to bring CLI slash commands, settings, rewind, and branching to the web-shell interface (#4809, #4814, #4819, #4816).
- **Gamification / fun features** – A novel request for a bundled `desktop-pet` skill (#4807) and a `/skills` picker dialog (#4532) indicate interest in UI polish beyond core functionality.

## Developer Pain Points
- **Out-of-memory (OOM) crashes** – The most frequent recurring bug. Multiple issues report `structuredClone` in long sessions (#2562), high memory usage (~7+ GB) and crashes during resume (#4815, #2223, #1031, #3326, #2982, #546, #604). Often triggered by long conversations or display mode changes.
- **Model detection and configuration friction** – Models are misidentified as text-only (#4802), tool parameters containing JSON are incorrectly validated (#4791), and custom provider setup is non-intuitive (#3384, #4814).
- **Deferred tool prompt cache bust** – MCP tools cause frequent system prompt re-generation, slowing down multi-tool workflows (#4777).
- **Daemon cold start latency** – ~2.5s boot time vs CLI’s ~0.7s; users notice the delay in remote/automated scenarios (#4748).

</details>