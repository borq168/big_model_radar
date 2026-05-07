# AI CLI Tools Community Digest 2026-05-07

> Generated: 2026-05-07 02:04 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Tool Comparison Report

**Date:** 2026-05-07
**Data Source:** Community digest summaries from GitHub activity

---

## 1. Daily Cross-Tool Overview

Five of the six tracked AI CLI tools showed active development today. Claude Code shipped two minor patches addressing a VS Code extension activation bug and adding session tracking environment variables. Gemini CLI released a nightly build with a critical tool approval race condition fix alongside a security patch for unsafe exec. GitHub Copilot CLI pushed three versions improving MCP server lifecycle management and adding RCE protection. OpenAI Codex and Qwen Code focused on pre-release/internal dependency updates rather than stable releases. Kimi Code CLI had no releases but filed 4 new issues. Across all tools, session management, MCP integration, and Windows platform stability remain dominant themes.

---

## 2. Activity Comparison

| Tool | Releases (24h) | New Issues | PRs Updated | Notable Activity |
|------|----------------|------------|-------------|------------------|
| **Claude Code** | 2 (patches) | 50 items updated | 6 key PRs | VS Code extension fix, session tracking env vars |
| **OpenAI Codex** | 4 (pre-release only) | 50 updated | 50 updated | Rust dependency pre-releases, no stable CLI |
| **Gemini CLI** | 3 (nightly, preview, stable) | 50 new | 50 updated | Security fix (unsafe exec), race condition fix |
| **Copilot CLI** | 3 (v1.0.42–43) | 50 filed | 2 submitted | MCP lifecycle, RCE protection, devcontainer |
| **Kimi Code CLI** | 0 | 4 new, 11 total | 0 | MCP integration, color skins PR merged |
| **OpenCode** | 1 (v1.14.40) | 50 | 50 | Remote config, CORS fix, reasoning replay |
| **Qwen Code** | 1 (nightly) | 30 | 50 | FileReadCache, auth refactor, proxy fix |

---

## 3. Shared Feature Directions

**MCP (Model Context Protocol) Improvements — All tools affected**
- Claude Code: OAuth scope handling (#7744), MCP tool output rendering issues
- Gemini CLI: SSRF prevention in web-fetch (#26615), tool approval race condition
- Copilot CLI: MCP server child process cleanup (v1.0.43-0), registry validation regression (#3162)
- Kimi Code CLI: Connection failure handling (#769), OAuth client_secret_basic support (#2172)
- Qwen Code: Tool registry rebuild on subagent overrides (#3873)

**Session/Context Management — Claude Code, OpenAI Codex, Gemini CLI, Qwen Code**
- Claude Code: Session window consumption regression (5–10× faster since Apr 29)
- OpenAI Codex: Remote compaction failures (#19558), project-scoped chat isolation (#3550)
- Gemini CLI: Subagent goal success reporting (#22323), session branching via /fork (#26618)
- Qwen Code: Session JSONL bloat (#3822), daemon mode proposal (#3803)

**Windows Platform Stability — Claude Code, Gemini CLI, Copilot CLI, Qwen Code**
- Claude Code: VS Code extension activation failure (v2.1.131 fix)
- Gemini CLI: Backspace handling (#26189), path handling (#25216)
- Copilot CLI: Mouse wheel regression (#1944), WinGet extraction errors (#3160)
- Qwen Code: Wayland image paste (#3829), proxy settings

**Permission/Tool Execution Control — Claude Code, Copilot CLI, Gemini CLI**
- Claude Code: Permission inheritance failures (#18950), hook regression (#51798)
- Copilot CLI: Shell compound commands prompt (#3165), harmless redirections require permission (#2693)
- Gemini CLI: Repeated permission prompts (#24916)

---

## 4. Differentiation Analysis

**Release Cadence & Stability Focus**
- **Claude Code** and **Copilot CLI** maintain rapid patch releases with security and regression fixes as primary drivers
- **Gemini CLI** differentiates with nightly/preview/stable channel separation, enabling faster iteration
- **OpenAI Codex** and **Qwen Code** focus on internal dependency updates; stable CLI releases are less frequent
- **Kimi Code CLI** shows lowest release velocity with no releases today

**Feature Priorities by Tool**

| Tool | Primary Focus | Target User |
|------|---------------|-------------|
| **Claude Code** | Hooks, permissions, session window management | Power users with automation workflows |
| **OpenAI Codex** | Context capacity (1M tokens), ChatGPT integration | Large codebase analysis, multi-file refactoring |
| **Gemini CLI** | Security (SSRF, unsafe exec), agent robustness | Enterprise deployments, security-conscious teams |
| **Copilot CLI** | MCP lifecycle, rate limiting, vi/vim mode | CLI-first developers, terminal enthusiasts |
| **Kimi Code CLI** | MCP graceful degradation, color customization | Custom workflow integrators |
| **OpenCode** | Provider flexibility, session archiving | Multi-provider users, self-hosted deployments |
| **Qwen Code** | Performance (FileReadCache), local model support | Local/deployment-specific users |

**Technical Approach Differences**
- **OpenCode** uniquely supports remote config via `.well-known/opencode` and emphasizes provider extensibility
- **Qwen Code** pursues aggressive performance optimization (FileReadCache) and daemon mode architecture
- **Gemini CLI** leads on security with explicit SSRF prevention and unsafe exec patches
- **Copilot CLI** focuses on enterprise policy enforcement (plugin allowlists, skill requirements)

---

## 5. Community Activity Notes

**Most Active by Volume**
- **Claude Code**, **OpenAI Codex**, **Gemini CLI**, **Copilot CLI**, and **OpenCode** all reported 50 issues/PRs updated, indicating high community engagement across the major players

**Release Velocity Leaders**
- **Gemini CLI** (3 releases including security patch) and **Copilot CLI** (3 versions in 24h) show the fastest release cadence
- **Kimi Code CLI** and **Qwen Code** had minimal or no stable releases

**Maintainer Responsiveness Indicators**
- **Claude Code**: Multiple hot issues with 20+ comments, active debugging on session consumption regression
- **OpenAI Codex**: High engagement on context window request (167 👍, 132 comments)
- **Copilot CLI**: Critical request consumption bug (#2591) closed, indicating active resolution
- **OpenCode**: High-interest feature request for `/reload` command (54 👍)

**Emerging Concerns**
- Kimi Code CLI has lowest activity metrics, potentially indicating smaller community or slower development
- Qwen Code shows highest PR velocity (50 PRs updated) despite fewer issues, suggesting internal development focus

---

## 6. Evidence-Backed Observations

1. **MCP integration is the dominant cross-tool theme today.** All seven tools have active MCP-related issues or PRs, covering OAuth authentication, server lifecycle management, connection failure handling, and security hardening. This represents a clear convergence on MCP as a critical integration layer.

2. **Windows platform stability remains a persistent pain point.** Four tools (Claude Code, Gemini CLI, Copilot CLI, Qwen Code) report Windows-specific issues including terminal handling, path processing, installation failures, and UI regressions. No tool appears to have resolved these comprehensively.

3. **Session/context management shows regression patterns across tools.** Claude Code reports 5–10× faster session window consumption since late April. OpenAI Codex has remote compaction failures. Qwen Code has session JSONL bloat. This suggests underlying changes in context handling are creating instability across the ecosystem.

4. **Security hardening is accelerating.** Gemini CLI patched unsafe exec and SSRF vulnerabilities. Copilot CLI added RCE protection. Claude Code added session tracking environment variables. This indicates increased focus on supply chain and runtime security, likely driven by enterprise adoption.

5. **No clear cross-tool signal on AI model features.** While Claude Code focuses on hooks/permissions, OpenAI Codex prioritizes context capacity, and Qwen Code pursues local model support, the feature directions remain fragmented rather than converging. Each tool's differentiation appears driven by its underlying model provider and target user base rather than ecosystem-wide trends.

---

*Report generated from GitHub activity data on 2026-05-07. All issue and PR counts reflect activity within the 24-hour window unless otherwise noted.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-05-07

## Today's Update Brief

Two patch releases shipped in the last 24 hours (v2.1.131, v2.1.132), addressing a VS Code extension activation bug on Windows and adding new environment variables for session tracking and screen rendering control. The issue tracker remains active with 50 total items updated, including a high-impact session window consumption regression affecting multiple users and continued demand for RTL language support.

---

## Releases

**v2.1.132** — Minor patch
- Added `CLAUDE_CODE_SESSION_ID` environment variable to the Bash tool subprocess environment, matching the `session_id` passed to hooks
- Added `CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN=1` env var to opt out of the fullscreen alternate-screen renderer

**v2.1.131** — Minor patch
- Fixed VS Code extension failing to activate on Windows due to a hardcoded build path in the bundled SDK (`createRequire` polyfill bug)
- Fixed Mantle endpoint authentication failing with missing `x-api-key` header

---

## Hot Issues

1. **[#55053](https://github.com/anthropics/claude-code/issues/55053)** — Session window depletes 5–10× faster since Apr 29 evening (34 comments, 12 👍)
   *Impact:* Light editing sessions burn 20–25% of the session window in under an hour. Affects all users; sub-agents compound the issue. Community is actively debugging token usage patterns.

2. **[#26408](https://github.com/anthropics/claude-code/issues/26408)** — Model selection bug with claude-sonnet-4-6 (25 comments, 9 👍)
   *Impact:* Users unable to select or switch models correctly. Active investigation ongoing.

3. **[#55982](https://github.com/anthropics/claude-code/issues/55982)** — Plan upgrade payment fails with `void_invoice` (22 comments, 6 👍)
   *Impact:* Users cannot upgrade plans; PaymentIntent is voided before confirmation completes. Billing workflow blocked.

4. **[#18950](https://github.com/anthropics/claude-code/issues/18950)** — Skills/subagents do not inherit user-level permissions from settings.json (20 comments, 49 👍)
   *Impact:* Bash commands in skills always trigger permission prompts even when auto-approved in main conversation. Significant friction for automation workflows.

5. **[#7744](https://github.com/anthropics/claude-code/issues/7744)** — MCP client ignores `scopes_supported` from OAuth protected resource metadata (19 comments, 29 👍)
   *Impact:* Prevents refresh token issuance for remote MCP servers using OAuth. Blocks enterprise/self-hosted integrations.

6. **[#51798](https://github.com/anthropics/claude-code/issues/51798)** — PreToolUse hook `permissionDecision: "allow"` no longer suppresses Bash sandbox prompt (17 comments, 2 👍)
   *Impact:* Regression in 2.1.116+; hooks that previously suppressed confirmation now prompt every time. Affects automation and security workflows.

7. **[#56516](https://github.com/anthropics/claude-code/issues/56516)** — `claude-vscode.editor.openLast` command not found (14 comments, 16 👍) *(CLOSED)*
   *Impact:* VS Code extension command unavailable; workaround needed for reopening last editor.

8. **[#56860](https://github.com/anthropics/claude-code/issues/56860)** — Session hangs indefinitely with spinning thinking indicator on Windows (5 comments, 0 👍)
   *Impact:* Three confirmed variants including MCP teardown scenario. Terminal becomes unresponsive.

9. **[#56738](https://github.com/anthropics/claude-code/issues/56738)** — Claude Code deleted 24,000+ database rows with buggy SQL script (4 comments, 0 👍) *(CLOSED)*
   *Impact:* Data loss incident; autovacuum prevented recovery. Critical reliability concern.

10. **[#56865](https://github.com/anthropics/claude-code/issues/56865)** — Claude Code on Web auto-commits/pushes, overriding CLAUDE.md (3 comments, 0 👍)
    *Impact:* Task-agent system prompt hard-codes git operations in web version, ignoring user configuration.

---

## Key PR Progress

1. **[#56334](https://github.com/anthropics/claude-code/pull/56334)** — docs: Add Windows Developer Mode note for symlink support (OPEN)
   Documents requirement for Developer Mode to enable symlink functionality; addresses silent failures with "0 tokens" output.

2. **[#49596](https://github.com/anthropics/claude-code/pull/49596)** — refactor: extract shared GitHub API client into github-api.ts with tests (OPEN)
   Architectural refactor to centralize GitHub API interactions with test coverage.

3. **[#56784](https://github.com/anthropics/claude-code/pull/56784)** — Pin GitHub Actions to commit SHAs (OPEN)
   Security hardening: pins third-party Actions to immutable commit SHAs to prevent supply chain attacks.

4. **[#56621](https://github.com/anthropics/claude-code/pull/56621)** — Fix duplicate rules on init firewall (OPEN)
   Prevents init-firewall.sh script failure when duplicate firewall rules are attempted.

5. **[#20824](https://github.com/anthropics/claude-code/pull/20824)** — Add CLAUDE.md: Comprehensive AI assistant guidelines (CLOSED)
   Adds project documentation for AI assistant workflows, structure, and best practices.

6. **[#42162](https://github.com/anthropics/claude-code/pull/42162)** — fix(hookify): use relative imports for plugin cache compatibility (CLOSED)
   Fixes plugin loading when installed via plugin cache by using relative imports instead of absolute paths.

---

## Feature Request Clusters

**AGENTS.md and .agents/skills/ Support**
Multiple requests (#34235, #31005) request native support for `AGENTS.md` alongside `CLAUDE.md` and `.agents/skills/` directory structure. Community adoption of these conventions is growing; #31005 has 154 👍.

**RTL (Right-to-Left) Language Support**
Four related issues (#38005, #45906, #49611, #41544) request RTL support for Hebrew, Arabic, Persian, and Urdu in both terminal and VS Code extension. Currently, chat interfaces display RTL text left-to-right, degrading readability.

---

## Developer Pain Points

- **Session window consumption regression:** Since Apr 29, session windows deplete 5–10× faster, with sub-agents compounding token usage. Users report light tasks consuming 20–25% of budget in under an hour.

- **Permission inheritance failures:** Skills and subagents do not inherit user-level permissions from `settings.json`, requiring repeated confirmation prompts even for approved commands.

- **MCP OAuth scope handling:** Remote MCP servers using OAuth fail to issue refresh tokens due to incorrect scope handling, blocking enterprise integrations.

- **Hook regression (2.1.116+):** PreToolUse hooks returning `permissionDecision: "allow"` no longer suppress sandbox confirmation prompts, breaking automation workflows.

- **VS Code extension stability:** Windows activation failures and missing commands continue to surface in recent releases.

- **MCP tool output rendering:** Text output from MCP tools sometimes not displayed in terminal, particularly with fastmcp 3.x and native TextContent.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest

**Date:** 2026-05-07

---

## 1. Today's Update Brief

The Codex repository saw moderate activity with 4 new pre-release versions of Rust dependencies (v0.129.0-alpha.9/10/12 and rusty-v8-v147.4.0). Community engagement remained high with 50 issues and 50 PRs updated in the last 24 hours. Notable activity includes continued debate around GPT-5.5 context limits, multiple Windows-specific bugs, and several enterprise management features landing via PRs.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| `rusty-v8-v147.4.0` | Pre-release | V8 JavaScript engine binding update |
| `rust-v0.129.0-alpha.9` | Alpha | Rust toolchain preview |
| `rust-v0.129.0-alpha.10` | Alpha | Rust toolchain preview |
| `rust-v0.129.0-alpha.12` | Alpha | Rust toolchain preview |

All releases are pre-release/alpha versions. No stable CLI or desktop app releases in this window.

---

## 3. Hot Issues

**1. [Support 1M token context for GPT-5.5 in Codex](https://github.com/openai/codex/issues/19464)** (132 comments, 167 👍)
*Affected workflow:* Long-context code analysis and multi-file refactoring
*Impact:* Users report the documented 400K context window is insufficient for large codebases. Community is requesting parity with announced GPT-5.5 capabilities.
*Reaction:* High engagement; largest discussion thread this period.

**2. [Phone number verification doesn't work](https://github.com/openai/codex/issues/20161)** (94 comments, 71 👍) **[CLOSED]**
*Affected workflow:* Cross-device authentication and SSO login
*Impact:* Users locked out of Codex when switching devices; verification loop prevents account access.
*Reaction:* Resolved; closed 2026-05-06.

**3. [ChatGPT integration](https://github.com/openai/codex/issues/2153)** (33 comments, 127 👍)
*Affected workflow:* Handoff between Codex CLI and ChatGPT web UI
*Impact:* Users want to move sessions to ChatGPT for web search and brainstorming, then return results to Codex.
*Reaction:* Long-standing request (since 2025-08); consistent community interest.

**4. [Scope Codex chats to VS Code projects/workspaces](https://github.com/openai/codex/issues/3550)** (22 comments, 58 👍)
*Affected workflow:* Multi-project development with Codex VS Code extension
*Impact:* Recent Tasks list shows chats from unrelated workspaces, reducing session organization.
*Reaction:* Users requesting project-scoped chat isolation.

**5. [Codex Desktop GPT-5.5 remote compaction fails](https://github.com/openai/codex/issues/19558)** (17 comments, 10 👍)
*Affected workflow:* Long-running Desktop sessions with GPT-5.5
*Impact:* Automatic context compaction failure renders threads unusable; requires manual restart.
*Reaction:* Critical regression for Desktop users.

**6. [Make `/review` configurable to specify number of issues](https://github.com/openai/codex/issues/5547)** (15 comments, 58 👍)
*Affected workflow:* Code review customization
*Impact:* Users want control over review depth and issue count thresholds.
*Reaction:* Positive reception; praised existing `/review` implementation.

**7. [Windows: /mcp prints taskkill logs](https://github.com/openai/codex/issues/20845)** (11 comments, 1 👍)
*Affected workflow:* MCP server management on Windows PowerShell
*Impact:* Noisy `taskkill "SUCCESS"` output clutters terminal.
*Reaction:* Minor UX annoyance; reproducible on Windows 11.

**8. [Speed setting resets to Fast on VS Code reopen](https://github.com/openai/codex/issues/20162)** (11 comments, 7 👍)
*Affected workflow:* VS Code extension persistence
*Impact:* User speed preference not retained across sessions; also cannot change while settings tab is open.
*Reaction:* Persistent regression affecting Business tier users.

**9. [Setting a goal fails with "thread/goal/set failed"](https://github.com/openai/codex/issues/20598)** (8 comments, 1 👍)
*Affected workflow:* TUI goal-setting functionality
*Impact:* Users cannot set thread goals in CLI; blocks structured task workflows.
*Reaction:* Affects CLI users on Darwin/arm64.

**10. [CLI: add --worktree and --tmux flags](https://github.com/openai/codex/issues/12862)** (8 comments, 39 👍)
*Affected workflow:* Isolated git worktree sessions
*Impact:* Users manually script worktree + tmux workflows; first-class CLI support requested.
*Reaction:* Strong community support (39 👍); aligns with advanced developer workflows.

---

## 4. Key PR Progress

**1. [Remove string-keyed MCP tool maps](https://github.com/openai/codex/pull/21454)**
Refactors MCP tool discovery to use normalized `Vec<ToolInfo>` instead of `HashMap<String, ToolInfo>`. Improves tool identity consistency.

**2. [Move tool specs onto handlers](https://github.com/openai/codex/pull/21461)**
Consolidates handler behavior and tool definitions into a single source of truth via `ToolHandler::spec()`. Follows tool indirection removal.

**3. [Add managed remote file uploads](https://github.com/openai/codex/pull/21108)**
Introduces server-side staging for remote file attachments. Enables clients to allocate Codex-managed host paths for cross-device file handling.

**4. [Add local file upload command](https://github.com/openai/codex/pull/21109)**
Adds `/upload <local-path>` TUI command to stream files over websocket SFTP lane to remote hosts.

**5. [Add Linux desktop app launcher](https://github.com/openai/codex/pull/21456)**
Extends `codex app` CLI surface to Linux, completing cross-platform desktop launch parity.

**6. [Enforce managed plugin allowlists](https://github.com/openai/codex/pull/21458)**
Ensures disallowed plugin marketplaces are fully inert across config, remote sync, and cache layers.

**7. [Enforce managed skill requirements](https://github.com/openai/codex/pull/21457)**
Propagates enterprise skill source policies to runtime skill roots, closing policy bypass gaps.

**8. [Render responsive Markdown tables in TUI](https://github.com/openai/codex/pull/20252)**
Adds width-sensitive Markdown table rendering with live re-rendering on terminal resize.

**9. [Emit terminal tool review events](https://github.com/openai/codex/pull/18748)**
Wires analytics for user and guardian review outcomes with protocol-native timing stamps.

**10. [Show plugin hooks in plugin details](https://github.com/openai/codex/pull/21447)**
Makes bundled plugin hooks visible in `/plugins` detail view, superseding abandoned #19859.

---

## 5. Feature Request Clusters

**Context & Model Capacity**
- 1M token context window for GPT-5.5 (#19464)
- Configurable `/review` issue thresholds (#5547)

**IDE & Extension UX**
- Project-scoped Codex chats in VS Code (#3550)
- Display active Project/Session name in window title (#12311)
- ChatGPT integration for session handoff (#2153)

**CLI & TUI Enhancements**
- `--worktree` and `--tmux` flags for isolated sessions (#12862)
- Vim inner-word text objects (`ciw`, `diw`, `yiw`) (#21383)
- TUI usage status line with context/token progress (#21324)

**Enterprise & Policy Management**
- Managed plugin allowlists and entrypoints enforcement
- Managed skill requirements propagation
- Managed artifact requirement schema

---

## 6. Developer Pain Points

**Authentication & Access**
- Phone verification failures blocking cross-device login (#20161)
- SSO login loops and verification prompts

**Platform Stability (Windows)**
- Desktop app stuck on logo/loading screen (#20114)
- `/mcp` taskkill noise in PowerShell (#20845)
- Slack installation stalls (#20526)
- WSL performance significantly slower than CLI (#20967)

**Platform Stability (macOS)**
- Memory growth to 75GB+ during basic sessions (#20740)
- MallocStackLogging warnings (#17139)
- PTY leak in Desktop app (#17133)
- Git `add` processes indexing entire home directory (#19903)

**Context & Session Management**
- Remote compaction failures rendering threads unusable (#19558)
- Speed setting persistence failures (#20162)
- Goal-setting failures in TUI (#20598)

**File & Upload Handling**
- Remote file upload staging (addressed by #21108, #21109)
- Chats disappearing after updates (#20493)

---

*End of digest. Data sourced from github.com/openai/codex activity on 2026-05-07.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest

**Date:** 2026-05-07
**Repository:** [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 1. Today's Update Brief

The Gemini CLI project released three new versions in the past 24 hours, including a nightly build with critical tool approval race condition fixes. Community activity remained high with 50 new issues and 50 pull requests updated. A critical security vulnerability (unsafe exec) was patched, and several user-facing bugs affecting Windows terminals, shell commands, and memory systems were addressed.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.42.0-nightly.20260506.g80d269054** | Nightly | Fixed tool approval race condition and improved status reporting ([#26479](https://github.com/google-gemini/gemini-cli/pull/26479)); prevented settings dialog border clipping using maxHeight ([#jackwotherspoon](https://github.com/jackwotherspoon)) |
| **v0.42.0-preview.2** | Preview | Cherry-pick patch from PR #26568 to address release v0.42.0-preview.1 |
| **v0.41.2** | Stable | Cherry-pick patch from PR #26568 to address release v0.41.1 |

**Full Changelog:** https://github.com/google-gemini/gemini-cli/compare/v0.41.1...v0.41.2

---

## 3. Hot Issues

1. **[#21925](https://github.com/google-gemini/gemini-cli/issues/21925)** — Hand icon indicating "Action Required" appears incorrectly
   - **Impact:** Misleading UI feedback when shell scripts trigger input-waiting notifications
   - **Status:** Open | 16 comments | Priority: Community-reported
   - **Author:** @jacob314

2. **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)** — Epic: Robust component-level evaluations
   - **Impact:** Tracking 76 behavioral eval tests across 6 supported Gemini models
   - **Status:** Open | 5 comments | Priority: P1
   - **Author:** @gundermanc

3. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** — Subagent reports GOAL success despite hitting MAX_TURNS
   - **Impact:** Hides interruption status, misleading task completion reporting
   - **Status:** Open | 5 comments | Priority: P1
   - **Author:** @matei-anghel

4. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** — Gemini does not use skills and sub-agents enough
   - **Impact:** Custom skills (e.g., "gradle", "git") not invoked autonomously
   - **Status:** Open | 5 comments | Priority: P2
   - **Author:** @rnett

5. **[#24916](https://github.com/google-gemini/gemini-cli/issues/24916)** — Gemini CLI repeatedly asks for permissions on the same file
   - **Impact:** User experience friction; "allow for all future sessions" not persisting
   - **Status:** Open | 3 comments
   - **Author:** @nikhilkapoor0919

6. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** — Shell command execution stuck with "Waiting input" after completion
   - **Impact:** CLI hangs after simple shell commands finish
   - **Status:** Open | 2 comments | 👍 3
   - **Author:** @rnett

7. **[#26563](https://github.com/google-gemini/gemini-cli/issues/26563)** — Tool "save_memory" not found when using `/memory add`
   - **Impact:** Memory v2 incompatibility breaks legacy command
   - **Status:** Open | 2 comments
   - **Author:** @mafischer

8. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** — Epic: Assess AST-aware file reads, search, and mapping
   - **Impact:** Potential token reduction and precision improvements
   - **Status:** Open | 5 comments
   - **Author:** @gundermanc

9. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** — Gemini CLI encounters 400 error with >128 tools
   - **Impact:** Agent fails when tool scope exceeds API limits
   - **Status:** Open | 1 comment
   - **Author:** @gundermanc

10. **[#25216](https://github.com/google-gemini/gemini-cli/issues/25216)** — Gemini failed to open in temporary path A:\
    - **Impact:** EISDIR error on Windows paths
    - **Status:** Open | 1 comment
    - **Author:** @Florin-Di

---

## 4. Key PR Progress

| PR | Title | Status | Key Change |
|----|-------|--------|------------|
| **[#26615](https://github.com/google-gemini/gemini-cli/pull/26615)** | fix(core): prevent SSRF via open redirect in web-fetch tool | Open | Security fix: validates redirects to prevent SSRF attacks |
| **[#26169](https://github.com/google-gemini/gemini-cli/pull/26169)** | fix: remove unsafe exec() in app.ts | Open | **CRITICAL** security patch in a2a-server |
| **[#26618](https://github.com/google-gemini/gemini-cli/pull/26618)** | feat(cli): add /fork session branching command | Open | Implements session snapshotting for parallel terminal resumption |
| **[#26609](https://github.com/google-gemini/gemini-cli/pull/26609)** | fix(ux): fixed transcribed text not showing after releasing space | Open | Improves whisper model transcription UX |
| **[#26189](https://github.com/google-gemini/gemini-cli/pull/26189)** | fix(cli): prevent Windows bash backspace triggering delete-word | Open | Fixes ESC+DELETE handling on Windows terminals |
| **[#26594](https://github.com/google-gemini/gemini-cli/pull/26594)** | fix(context): implement loose boundary policy for gc backstop | Open | Fixes rare feedback loop in context manager |
| **[#26548](https://github.com/google-gemini/gemini-cli/pull/26548)** | fix(core): cache model routing decision in LocalAgentExecutor | Open | Reduces redundant routing calls; fixes #25156 |
| **[#26605](https://github.com/google-gemini/gemini-cli/pull/26605)** | fix(cli): hide /memory add subcommand when memoryV2 is enabled | Open | Prevents confusing failures under memory v2 |
| **[#26529](https://github.com/google-gemini/gemini-cli/pull/26529)** | feat(agent): formalize first-class tool lifecycle states | Open | Refactors terminal UI rendering pipeline |
| **[#26599](https://github.com/google-gemini/gemini-cli/pull/26599)** | don't wrap args unnecessarily | **Closed** | Fixes session resume message quoting on Windows |

---

## 5. Feature Request Clusters

**Memory System Improvements**
- Auto Memory redaction and logging reduction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525))
- Quarantine invalid memory inbox patches ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523))
- Stop retrying low-signal sessions indefinitely ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522))
- Memory system bugs and quality tracking ([#26516](https://github.com/google-gemini/gemini-cli/issues/26516))

**Agent Robustness**
- Subagent recovery and interruption handling ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323))
- Browser agent resilience and lock recovery ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232))
- Destructive behavior prevention ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672))
- Skills and sub-agent autonomous invocation ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968))

**UI/UX Enhancements**
- Rename ToDo to Tasks in list tray ([#22203](https://github.com/google-gemini/gemini-cli/issues/22203))
- Multi-level dependency tree indentation ([#22816](https://github.com/google-gemini/gemini-cli/issues/22816))
- Parallel tool call layout clarification ([#24943](https://github.com/google-gemini/gemini-cli/issues/24943))
- Table streaming rendering fix ([#25218](https://github.com/google-gemini/gemini-cli/issues/25218))

---

## 6. Developer Pain Points

| Pain Point | Frequency | Related Issues |
|------------|-----------|----------------|
| **Windows terminal compatibility** | High | Backspace handling ([#26189](https://github.com/google-gemini/gemini-cli/pull/26189)), SSH text scrambling ([#24202](https://github.com/google-gemini/gemini-cli/issues/24202)), path handling ([#25216](https://github.com/google-gemini/gemini-cli/issues/25216)) |
| **Shell command hangs** | Recurring | "Waiting input" stuck state ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), action required false positives ([#21925](https://github.com/google-gemini/gemini-cli/issues/21925)) |
| **Memory system inconsistencies** | Multiple | Permission persistence ([#24916](https://github.com/google-gemini/gemini-cli/issues/24916)), save_memory tool missing ([#26563](https://github.com/google-gemini/gemini-cli/issues/26563)), v1/v2 compatibility ([#26605](https://github.com/google-gemini/gemini-cli/pull/26605)) |
| **Tool scope limits** | Reported | 400 errors with >128 tools ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)) |
| **Browser agent failures** | Recurring | Wayland failures ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)), settings overrides ignored ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)) |

---

*Generated from GitHub activity on 2026-05-07*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest

**Date:** 2026-05-07
**Repository:** github.com/github/copilot-cli

---

## 1. Today's Update Brief

GitHub released three versions in the last 24 hours (v1.0.42, v1.0.43, v1.0.43-0), addressing MCP server lifecycle management, UI improvements, and security hardening. The community filed 50 issues with notable activity around model request consumption, rate limiting, and Windows-specific regressions. Two pull requests were submitted, including initial devcontainer configuration support.

---

## 2. Releases

### v1.0.43 (2026-05-06)
- Added username toggle to `/statusline` picker displaying active account in footer
- Auto mode now uses server-side model routing for improved real-time model selection
- Resume prompt shows correct session name when multiple sessions are active
- Added protection against RCE from malicious inputs

### v1.0.43-0 (2026-05-06)
- Show download progress when running the update command
- **Fixed:** MCP server child processes (e.g., started via `npx` or `uvx`) are now fully terminated when a session ends

### v1.0.42 (2026-05-06)
- MCP server failure warning now suggests a directly runnable `/mcp show` command when the server name contains whitespace
- MCP server failure warnings include stderr output to help diagnose connection errors
- Added `-C <directory>` flag to change working directory before starting

---

## 3. Hot Issues

### #2591 [CLOSED] Single session request → infinite premium requests consumed per tool invocation
**Author:** @saa7wz | **Comments:** 32 | **👍:** 13
A critical bug where a single user request triggered 80-100 premium API calls due to each agent reply after tool invocation or thinking steps consuming additional requests. This has been closed, indicating a fix was implemented.

### #2101 [OPEN] Request failed due to transient API error leading to rate limits
**Author:** @AmauMaill | **Comments:** 24 | **👍:** 16
Users report repeated "Request failed due to a transient API error. Retrying..." messages that ultimately result in rate limiting. This blocks productive work and is a high-impact issue for active users.

### #1944 [CLOSED] Windows mouse wheel scroll captured by input box (regression)
**Author:** @chenxizhang | **Comments:** 8 | **👍:** 2
Mouse wheel scrolling stopped navigating conversation history on Windows; instead, scroll events were captured by the text input box. This regression has been closed, suggesting resolution.

### #13 [OPEN] CLI input should have a vi/vim input mode
**Author:** @RyanHecht | **Comments:** 5 | **👍:** 57
Long-standing feature request for modal editor keybindings (Vim/Vi) within the interactive CLI portions. Despite low comment activity, this has the highest 👍 count (57), indicating strong community desire.

### #3101 [OPEN] Failed to load models: access denied by Copilot policy (enterprise)
**Author:** @kkleeberger | **Comments:** 5 | **👍:** 3
Enterprise users encountering policy-based model access denials with specific Request IDs. Affects authenticated enterprise workflows where policy configuration is required.

### #2795 [OPEN] `--agent` does not work with `--plugin-dir` and `-p <prompt>`
**Author:** @shivsant | **Comments:** 5 | **👍:** 15
When combining agent selection with custom plugin directories and inline prompts, the CLI fails to locate the agent despite it being present in the specified plugin directory. This breaks custom agent workflows.

### #1322 [OPEN] Feature request: Show subagent tool call details
**Author:** @cephalin | **Comments:** 4 | **👍:** 12
Users want visibility into subagent tool calls similar to VS Code Copilot Chat's drill-down capabilities. Currently, only status, ID, and type are shown, limiting debugging and transparency.

### #1898 [OPEN] ask_user tool disappeared
**Author:** @yigitkonur | **Comments:** 4 | **👍:** 1
The `ask_user` tool is no longer available, even in plan mode, removing a previously functional user interaction mechanism.

### #2693 [OPEN] `2>/dev/null` still requires permission
**Author:** @eihigh | **Comments:** 2 | **👍:** 2
Shell redirection commands like `2>/dev/null` still trigger permission prompts despite being harmless, indicating overzealous permission enforcement.

### #3162 [OPEN] v1.0.42 falsely reports registry-listed custom MCP servers as blocked by policy
**Author:** @goldsziggy | **Comments:** 2 | **👍:** 0
Custom MCP servers present in the registry are incorrectly flagged as blocked by policy in v1.0.42, suggesting a regression in registry validation logic.

---

## 4. Key PR Progress

### #3163 [OPEN] ViewSonic monitor
**Author:** @tijuks | **Comments:** undefined | **👍:** 0
Proposed GitHub action for monitor integration related to issues #2591, #3561, and #3559. Purpose appears to be automated testing or monitoring infrastructure.

### #3137 [CLOSED] Add initial devcontainer configuration
**Author:** @jepbu4gamfuz-arch | **Comments:** undefined | **👍:** 0
Merged PR adding devcontainer support, enabling developers to use GitHub Codespaces or local container-based development environments for Copilot CLI contributions.

---

## 5. Feature Request Clusters

### Terminal & UI Interaction
- **Vi/Vim input mode** (#13) — Modal editor keybindings for keyboard-driven navigation
- **Clickable file references** (#3134) — Direct file opening from highlighted references in output
- **Show subagent tool call details** (#1322) — Expandable debugging information for subagent operations

### Model & Configuration Management
- **Effort level persistence** (#3159) — Effort specified during `/model` switch should be retained
- **Mismatched model names** (#1752) — Inconsistent model name validation between CLI and VS Code
- **BYOK statusline effort display** (#3135) — Status bar shows incorrect effort level for custom providers

### MCP (Model Context Protocol)
- **MCP server child process cleanup** — Fixed in v1.0.43-0
- **MCP sampling system prompt leakage** (#2467) — Response includes full system prompt
- **Registry-listed servers falsely blocked** (#3162) — Policy validation regression

### Enterprise & Authentication
- **Enterprise authentication for ACP server** (#3161) — Native GHE authentication support needed
- **Remote session sync scope command** (#3164) — CLI command to change sync scope post-initialization

### OpenTelemetry & Observability
- **Protobuf OTLP export** (#2934) — Support for `OTEL_EXPORTER_OTLP_PROTOCOL=http/protobuf`

---

## 6. Developer Pain Points

### Rate Limiting & API Reliability
Multiple issues (#2101, #2591) highlight API instability causing unexpected request consumption and rate limits. Developers report work interruptions and excessive API credit usage from single sessions.

### Windows Platform Issues
- **Mouse wheel regression** (#1944) — Scroll behavior broken in conversation history
- **Installation failure after v1.0.40** (#3160) — WinGet extraction errors on Windows 11
- **Terminal output overwrites** (#3110) — Output never enters scrollback buffer

### Agent & Session Stability
- **Plan→Compact→Re-Plan infinite loops** (#3158, #3157, #3154) — Auto-compaction triggers planning loops with zero execution (217 cycles observed)
- **Concurrent sub-agent session corruption** (#2543) — Permanent "tool_use ids without tool_result" errors
- **preToolUse dropped after extensions_reload** (#3167) — Stale IPC proxy references

### Permission & Tool Execution
- **Shell compound commands always prompt** (#3165) — `&&`, `|`, `;` operators trigger permission prompts
- **Harmless redirections require permission** (#2693) — `2>/dev/null` still prompts

### Plugin & Agent Discovery
- **Agent not found with `--plugin-dir`** (#2795) — Custom agents in plugin directories not located
- **ask_user tool unavailable** (#1898) — User interaction tool removed without replacement

---

*Generated: 2026-05-07 | Data source: github.com/github/copilot-cli*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest

**Date:** 2026-05-07
**Data Source:** github.com/MoonshotAI/kimi-cli

---

## 1. Today's Update Brief

No new releases were published in the last 24 hours. The community submitted 4 new issues and 0 new pull requests today, with 11 total issues updated. Activity centers on MCP integration improvements, user experience enhancements, and compatibility fixes for upcoming Python versions.

---

## 2. Releases

**None** — No new releases published in the last 24 hours.

---

## 3. Hot Issues

**#769** | [MCP connection failures should not exit automatically](https://github.com/MoonshotAI/kimi-cli/issues/769)
- **Author:** @xchen-zhao | **Created:** 2026-01-28 | **Updated:** 2026-05-06 | **👍 6**
- **Impact:** Currently, if any configured MCP server fails to connect, the CLI exits with a fatal error. This blocks users from accessing working MCP tools or built-in features.
- **Requested behavior:** Graceful degradation matching Codex/Claude Code behavior—allow CLI startup even when optional MCP servers fail.
- **Status:** Open with 3 comments; long-standing enhancement request.

**#2017** | [Conversation cannot continue after context overflow](https://github.com/MoonshotAI/kimi-cli/issues/2017)
- **Author:** @shumyun | **Created:** 2026-04-23 | **Updated:** 2026-05-06 | **👍 0**
- **Impact:** Users encounter "Service temporarily unavailable" errors when conversations accumulate context, preventing continued sessions.
- **Environment:** kimi v1.37.0, Windows 10, VS Code extension.
- **Status:** Open with 2 comments; under investigation.

**#2152** | [Support global ~/.kimi/AGENTS.md for multi-project conventions](https://github.com/MoonshotAI/kimi-cli/issues/2152)
- **Author:** @lNeverl | **Created:** 2026-05-03 | **Updated:** 2026-05-06 | **👍 2**
- **Impact:** Developers managing 10+ projects cannot share agent conventions without duplicating AGENTS.md in each directory.
- **Requested behavior:** Load AGENTS.md from ~/.kimi/ as a fallback or base layer.
- **Status:** Open with 1 comment.

**#2173** | [Add crow-cli support to kimi coding plan](https://github.com/MoonshotAI/kimi-cli/issues/2173)
- **Author:** @odellus | **Created:** 2026-05-07 | **👍 0**
- **Impact:** Users of crow-cli (an external CLI tool) cannot integrate it with Kimi Code's paid plan due to missing configuration options.
- **Requested behavior:** Allow custom API keys and base URLs for third-party CLI integrations.
- **Status:** New today; no comments yet.

**#2172** | [MCP OAuth fails with client_secret_basic authentication](https://github.com/MoonshotAI/kimi-cli/issues/2172)
- **Author:** @owesazevedo | **Created:** 2026-05-07 | **👍 0**
- **Impact:** MCP servers using OAuth with `client_secret_basic` authentication fail validation. The CLI only accepts `none` or `client_secret_post`.
- **Environment:** kimi-cli v1.41.0, macOS, Python 3.13.
- **Status:** New today; no comments yet.

**#2171** | [RFC: User-customizable color skins via YAML](https://github.com/MoonshotAI/kimi-cli/issues/2171)
- **Author:** @VrtxOmega | **Created:** 2026-05-06 | **👍 0**
- **Impact:** Power users with custom terminals, branded environments, or accessibility needs cannot define color schemes without patching source code.
- **Requested behavior:** Load custom palettes from `~/.kimi/skins/` directory.
- **Status:** Open; see PR #2170 for implementation.

**#2169** | [Non-interactive `kimi usage` for programmatic quota checks](https://github.com/MoonshotAI/kimi-cli/issues/2169)
- **Author:** @Mitsi-ag | **Created:** 2026-05-06 | **👍 0**
- **Impact:** No way to check remaining Kimi Code quota from scripts, CI pipelines, or dashboards. The `/usage` slash command only works interactively.
- **Requested behavior:** Add `--print` flag support for `/usage` or a standalone `kimi usage` command.
- **Status:** Open; no comments yet.

**#2168** | [System prompt missing in recent versions](https://github.com/MoonshotAI/kimi-cli/issues/2168)
- **Author:** @dream-1ab | **Created:** 2026-05-06 | **👍 1**
- **Impact:** Users report that the system prompt is not being applied in kimi v1.41.0, affecting agent behavior.
- **Environment:** Linux (Ubuntu 24.04) and macOS 26, model kimi-k2.6.
- **Status:** Open; no comments yet.

**#2167** | [Web UI: Tab title notification for pending approvals](https://github.com/MoonshotAI/kimi-cli/issues/2167)
- **Author:** @caremi66-dev | **Created:** 2026-05-06 | **👍 0**
- **Impact:** Users working with multiple browser tabs miss pending tool approval requests in the Kimi Web UI.
- **Requested behavior:** Blink or update the browser tab title when approval is required.
- **Status:** Open; no comments yet.

**#2166** | [SIGSEGV crash on Python 3.14.0a6 due to PyYAML ABI incompatibility](https://github.com/MoonshotAI/kimi-cli/issues/2166)
- **Author:** @Arcobalneo | **Created:** 2026-05-06 | **👍 0**
- **Impact:** Installing kimi-cli with Python 3.14+ causes segmentation faults on non-trivial commands. Basic `--help` and `--version` work fine.
- **Root cause:** PyYAML C extension ABI incompatibility with Python 3.14 alpha.
- **Status:** Open; no comments yet.

**#2165** | [Invalid tool call corrupts entire session](https://github.com/MoonshotAI/kimi-cli/issues/2165)
- **Author:** @RightL | **Created:** 2026-05-06 | **👍 0**
- **Impact:** When the model generates an invalid tool call, the entire session becomes corrupted and unusable.
- **Environment:** kimi v1.41.0, local vLLM deployment with kimi-k2.6.
- **Status:** Open; no comments yet.

---

## 4. Key PR Progress

**#2170** | [feat: Add user-customizable color skins via YAML](https://github.com/MoonshotAI/kimi-cli/pull/2170)
- **Author:** @VrtxOmega | **Created:** 2026-05-06
- **Summary:** Implements a new `/skin` slash command for runtime palette switching. Loads YAML skin files from `~/.kimi/skins/<name>.yaml` in Hermes-compatible format. Falls back to defaults for omitted tokens.
- **Closes:** #2171

**#1960** | [feat(soul): RalphFlow architecture with ephemeral context and convergence detection](https://github.com/MoonshotAI/kimi-cli/pull/1960)
- **Author:** @ORDL-AMF | **Created:** 2026-04-20 | **Updated:** 2026-05-06
- **Summary:** Introduces RalphFlow—an automated iteration framework that prevents infinite loops while enabling multi-step workflows. Uses isolated temporary context files for flow iterations.
- **Status:** Open; under review.

**#1848** | [feat(prompt): Edit image and pasted-text placeholders as blocks](https://github.com/MoonshotAI/kimi-cli/pull/1848)
- **Author:** @HynoR | **Created:** 2026-04-12 | **Updated:** 2026-05-06
- **Summary:** Allows editing of image and pasted-text placeholders as blocks within the prompt interface.
- **Status:** Open; awaiting maintainer feedback.

---

## 5. Feature Request Clusters

**MCP (Model Context Protocol) Enhancements**
- Graceful handling of MCP connection failures (#769)
- OAuth authentication support for `client_secret_basic` (#2172)
- Third-party CLI integration support (crow-cli) (#2173)

**User Experience & Customization**
- Global AGENTS.md support for multi-project workflows (#2152)
- User-customizable color skins via YAML (#2171, #2170)
- Tab title notifications for pending approvals (#2167)

**CLI & Scripting Capabilities**
- Non-interactive `kimi usage` for quota monitoring (#2169)
- System prompt persistence across sessions (#2168)

**Compatibility & Stability**
- Python 3.14/PyYAML ABI compatibility fix (#2166)
- Session corruption handling for invalid tool calls (#2165)
- Conversation continuity after context overflow (#2017)

---

## 6. Developer Pain Points

1. **MCP reliability:** Connection failures to any single MCP server block the entire CLI, affecting users with mixed working/broken MCP configurations.

2. **Context management:** Large conversations hit "Service temporarily unavailable" errors, with no clear recovery path for users.

3. **Quota visibility:** No programmatic way to check usage quotas outside the interactive REPL, limiting CI/CD and monitoring integrations.

4. **Python 3.14 incompatibility:** Upcoming Python version causes crashes due to PyYAML C extension issues, blocking adoption of newer runtimes.

5. **Session corruption:** Invalid tool calls from the model corrupt the entire session, requiring restart and losing conversation history.

6. **Multi-project friction:** No way to share AGENTS.md conventions across projects without duplication, impacting developers managing many repositories.

---

*End of Digest*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-07

## 1. Today's Update Brief

OpenCode v1.14.40 shipped with remote config file support via `.well-known/opencode` and several bugfixes including CORS header ordering and reasoning block replay. The community submitted 50 issues and 50 PRs in the last 24 hours, with notable activity around session management, provider regressions, and desktop-specific bugs.

---

## 2. Releases

**v1.14.40** — Released 2026-05-07

- **Improvement**: Support for `.well-known/opencode` configs that point to a separate remote config file
- **Bugfix**: Preserve assistant text when replaying signed reasoning blocks (fixes #16748)
- **Bugfix**: Return consistent not-found errors for missing sessions
- **Bugfix**: Apply CORS headers before auth to fix browser-based server access

---

## 3. Hot Issues

1. **[#3936](https://github.com/anomalyco/opencode/issues/3936) — GitHub Enterprise authorization** *(CLOSED, 58 comments)*
   - Users encountering "Unexpected Error" when logging in via GitHub Enterprise
   - Affects enterprise developers using self-hosted GitHub deployments
   - Community contributed workarounds; issue now closed

2. **[#6680](https://github.com/anomalyco/opencode/issues/6680) — View archived sessions on desktop** *(32 comments)*
   - Request to add menu item in sidebar to view archived sessions via modal
   - Impacts workflow for users managing long conversation histories
   - 6 👍 reactions

3. **[#24529](https://github.com/anomalyco/opencode/issues/24529) — Edit tool crashes with undefined error** *(20 comments)*
   - `edit` tool crashes when modifying existing files with `oldString !== ""`
   - Error: `undefined is not an object (evaluating 'output.args.filePath')`
   - Active regression affecting file editing workflows

4. **[#23944](https://github.com/anomalyco/opencode/issues/23944) — Very frequent errors when using OpenAI** *(15 comments)*
   - Users seeing `server_error` responses with GPT-5.4
   - Impacts reliability of OpenAI provider integration
   - 9 👍 reactions

5. **[#6719](https://github.com/anomalyco/opencode/issues/6719) — Slash command for reload** *(14 comments)*
   - Request for `/reload` command to refresh config files (`opencode.jsonc`, `.opencode/`)
   - Would improve developer iteration speed
   - 54 👍 reactions — high community interest

6. **[#16878](https://github.com/anomalyco/opencode/issues/16878) — Old sessions cannot be loaded** *(13 comments)*
   - Session list appears empty when trying to load previous sessions
   - Affects continuity of long-term projects
   - Reported on v1.2.24

7. **[#25840](https://github.com/anomalyco/opencode/issues/25840) — Plugin list missing in desktop app after v.14.37** *(10 comments)*
   - Desktop app no longer shows plugin list; CLI works correctly
   - Regression specific to desktop application
   - 2 👍 reactions

8. **[#25758](https://github.com/anomalyco/opencode/issues/25758) — reasoning_content missing in assistant tool call** *(9 comments)*
   - With thinking enabled, `reasoning_content` missing from assistant messages
   - Affects Kimi and DeepSeek providers
   - Impacts reasoning-heavy workflows

9. **[#7792](https://github.com/anomalyco/opencode/issues/7792) — Custom provider initialization fails** *(7 comments)*
   - `TypeError: fn3 is not a function` during custom provider setup
   - Blocks users from adding custom AI providers

10. **[#25630](https://github.com/anomalyco/opencode/issues/25630) — Plugin provider.models() hook regression** *(6 comments)*
    - Post-PR #25167, custom providers can no longer populate models
    - Regression from April 30 merge shipped in v1.14.x
    - 2 👍 reactions

---

## 4. Key PR Progress

1. **[#25662](https://github.com/anomalyco/opencode/pull/25662) — Fix non-ASCII folder names in Open Project search**
   - Fixes Korean folder names returning no results on macOS
   - Addresses NFD vs NFC path normalization and `fuzzysort` encoding issues

2. **[#26065](https://github.com/anomalyco/opencode/pull/26065) — Bash-like Tab completion for shell mode**
   - Adds path/file completion when pressing Tab in `!` shell commands
   - Closes #7755

3. **[#25368](https://github.com/anomalyco/opencode/pull/25368) — Wrap reasoning in `<thinking>` tags in markdown export**
   - Fixes missing closing delimiter for thinking content in transcript exports
   - Closes #25308

4. **[#25800](https://github.com/anomalyco/opencode/pull/25800) — Complete Chinese translation for zh.ts files**
   - Adds 24 new keys for app module, 6 for ui module, completes desktop module
   - Closes #25604

5. **[#25856](https://github.com/anomalyco/opencode/pull/25856) — Auto-cleanup stale todos + /clear-tasks command**
   - Implements automatic cleanup of stale todos in chat UI
   - Adds `/clear-tasks` and `/清除任务` commands

6. **[#26102](https://github.com/anomalyco/opencode/pull/26102) — Scope reset archive to workspace**
   - Fixes workspace reset archiving sessions from other worktrees
   - Closes #26101

7. **[#25962](https://github.com/anomalyco/opencode/pull/25962) — Move server to utilityProcess (desktop)**
   - Decouples server lifecycle from main Electron process
   - Improves stability and startup control via sidecar architecture

8. **[#16552](https://github.com/anomalyco/opencode/pull/16552) — Thought level config in ACP** *(CLOSED)*
   - Consolidates thinking modes from separate model names into configurable levels
   - Closes #16543

9. **[#24865](https://github.com/anomalyco/opencode/pull/24865) — Add cors option to sdk ServerOptions**
   - Allows consumers to pass allowed origins when starting the server
   - Closes #24715

10. **[#24849](https://github.com/anomalyco/opencode/pull/24849) — Filter sessions by path and add setting to disable** *(CLOSED)*
    - Resolves conflict between SDK `directory` param and session filtering
    - Improves session management flexibility

---

## 5. Feature Request Clusters

**Session Management**
- View archived sessions on desktop ([#6680](https://github.com/anomalyco/opencode/issues/6680))
- Old sessions cannot be loaded ([#16878](https://github.com/anomalyco/opencode/issues/16878))
- Session list incomplete ([#25978](https://github.com/anomalyco/opencode/issues/25978))
- TUI plugin API: session projection and list adapters ([#26097](https://github.com/anomalyco/opencode/issues/26097))

**Configuration & Reload**
- Slash command for reload ([#6719](https://github.com/anomalyco/opencode/issues/6719))
- Install script ignores OPENCODE_INSTALL_DIR ([#7675](https://github.com/anomalyco/opencode/issues/7675))

**UI/UX Enhancements**
- VS Code sidebar integration ([#15422](https://github.com/anomalyco/opencode/issues/15422))
- Customizable status line with Go usage tracking ([#25875](https://github.com/anomalyco/opencode/issues/25875))
- Git branch management in Desktop ([#19433](https://github.com/anomalyco/opencode/issues/19433))
- Mobile touch optimization ([#18767](https://github.com/anomalyco/opencode/pull/18767))

**Provider & Model Features**
- Anthropic "advisor strategy" ([#23058](https://github.com/anomalyco/opencode/issues/23058))
- DigitalOcean OAuth + Inference Routers plugin ([#26095](https://github.com/anomalyco/opencode/pull/26095))
- Cost display for SambaNova provider ([#26088](https://github.com/anomalyco/opencode/issues/26088))

---

## 6. Developer Pain Points

**Provider & Authentication Issues**
- GitHub Enterprise login failures ([#3936](https://github.com/anomalyco/opencode/issues/3936))
- Custom provider initialization errors ([#7792](https://github.com/anomalyco/opencode/issues/7792))
- OpenAI frequent server errors ([#23944](https://github.com/anomalyco/opencode/issues/23944))
- reasoning_content missing with thinking-enabled models ([#25758](https://github.com/anomalyco/opencode/issues/25758))

**Tool Execution Crashes**
- Edit tool undefined error on file modification ([#24529](https://github.com/anomalyco/opencode/issues/24529))
- Bash tool readonly property assignment error ([#25873](https://github.com/anomalyco/opencode/issues/25873))
- Free models causing crashes with reasoning parameters ([#26107](https://github.com/anomalyco/opencode/issues/26107))

**Desktop-Specific Issues**
- Plugin list not showing in desktop app ([#25840](https://github.com/anomalyco/opencode/issues/25840))
- macOS ARM64 missing `@parcel/watcher-darwin-arm64` ([#26049](https://github.com/anomalyco/opencode/issues/26049))
- WSL2 package manager version errors ([#23601](https://github.com/anomalyco/opencode/issues/23601))

**Regression Concerns**
- Plugin `provider.models()` hook broken post-#25167 ([#25630](https://github.com/anomalyco/opencode/issues/25630))
- `/compact` command not working in web ([#22758](https://github.com/anomalyco/opencode/issues/22758))
- MCP toggle switch visual bug ([#25928](https://github.com/anomalyco/opencode/issues/25928))

---

*End of digest. Data sourced from github.com/anomalyco/opencode activity on 2026-05-07.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-07

## 1. Today's Update Brief

Qwen Code released **v0.15.6-nightly.20260507** with a new `FileReadCache` feature that short-circuits unchanged file reads, improving performance for repeated operations. The community filed 30 issues in the last 24 hours, with 50 pull requests updated—indicating high development velocity. Notable activity includes auth system refactoring, session management improvements, and ongoing work on daemon mode and background task handling.

---

## 2. Releases

### v0.15.6-nightly.20260507.15342b893
- **FileReadCache & short-circuit reads** — Added caching layer for file reads that skips re-reading unchanged files, reducing I/O overhead in long sessions.
- **Proxy settings fix** — CLI now properly honors proxy configuration, resolving connectivity issues for users behind corporate proxies.
- **PR #3766** — Official release tagging by `@qwen-code-ci-bot`.

---

## 3. Hot Issues

| # | Issue | Summary | Impact | Reaction |
|---|-------|---------|--------|----------|
| **#3878** | [Incorrect context window size](https://github.com/QwenLM/qwen-code/issues/3878) | Local model settings.json `contextWindowSize` value is ignored; model uses default instead. | Users relying on extended context for large codebases face degraded performance. | 4 comments; awaiting triage. |
| **#3837** | [ACP mode slash commands broken](https://github.com/QwenLM/qwen-code/issues/3837) | ACP mode does not recognize `/` slash commands, preventing skill selection in Zed. | Breaks skill-based workflows in Zed editor integration. | Closed; likely resolved. |
| **#3822** | [Session JSONL bloat after large file edits](https://github.com/QwenLM/qwen-code/issues/3822) | `edit`/`write_file` on large files inflates session JSONL, causing `/resume` to hang at "Loading sessions..." | Session management becomes unusable after large edits; root cause identified as unbounded `toolCallResult.resultDisplay` fields. | 2 comments; investigating. |
| **#3843** | [settings.json overwritten on startup](https://github.com/QwenLM/qwen-code/issues/3843) | Qwen Code completely replaces user's settings.json on launch. | User customizations lost; affects power users with custom configs. | 2 comments; high priority. |
| **#3730** | [Auto task termination](https://github.com/QwenLM/qwen-code/issues/3730) | After recent update, Qwen Code spontaneously stops long-running tasks without user input. | Breaks week-long heavy tasks; P1 priority. | 2 comments; regression introduced in recent version. |
| **#3787** | [Thinking process language mismatch](https://github.com/QwenLM/qwen-code/issues/3787) | In ACP mode, model's thinking process always uses English despite user targeting other languages. | Poor localization experience for non-English users. | 1 comment; awaiting fix. |
| **#3823** | [SDK 0.1.6/0.1.7 CLI exit code 1](https://github.com/QwenLM/qwen-code/issues/3823) | Upgrading `@qwen-code/sdk` causes intermittent CLI crashes with code 1 when using Qwen3.5-397B-A17B. | Production workloads affected; probabilistic failure makes debugging hard. | 1 comment; investigating SDK vs. application cause. |
| **#3829** | [Wayland image paste broken](https://github.com/QwenLM/qwen-code/issues/3829) | Cannot paste images on Wayland despite having `xdg-utils` and `wl-clipboard` installed. | Blocks image-based workflows on Linux/Wayland. | 1 comment; regression from prior fix #2885. |
| **#3877** | [API key not read from .env](https://github.com/QwenLM/qwen-code/issues/3877) | `OPENCODE_GO_API_KEY` in `~/.qwen/.env` is ignored; forces interactive auth. | Breaks non-interactive/CI setups. | 1 comment; investigating env loading. |
| **#3881** | [Local model returns endless "/"](https://github.com/QwenLM/qwen-code/issues/3881) | Calling local qwen3.6-27b causes model to output repeated "/" until token limit. | Local model usage broken; likely prompt/formatting issue. | 1 comment; reproducible on first query. |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| **#3864** | [Auth refactor around provider registry](https://github.com/QwenLM/qwen-code/pull/3864) | Splits Alibaba auth into provider descriptors (ModelStudio, Token Plan, Coding Plan) with reusable provider definitions. | Open |
| **#3861** | [Preserve comments/formatting in settings.json](https://github.com/QwenLM/qwen-code/pull/3861) | Uses format-preserving writes instead of raw `JSON.stringify`; comments and trailing commas survive migration. | Open |
| **#3847** | [Inject traceId/spanId into debug logs](https://github.com/QwenLM/qwen-code/pull/3847) | Adds OpenTelemetry correlation to debug logs; enables tracing in Alibaba Cloud SLS backends. | Open |
| **#3598** | [Add --json-schema for structured output](https://github.com/QwenLM/qwen-code/pull/3598) | New flag in headless mode registers a `structured_output` tool from user-supplied JSON Schema. | Open |
| **#3680** | [Expand TUI markdown rendering](https://github.com/QwenLM/qwen-code/pull/3680) | Renders Mermaid diagrams, math, task lists, blockquotes, and tables directly in terminal. | Open |
| **#3848** | [Route auto-memory recall to fast model](https://github.com/QwenLM/qwen-code/pull/3848) | Fixes memory recall selector to use configured fast model instead of main session model. | Closed |
| **#3856** | [Polish --add-dir / --include-directories](https://github.com/QwenLM/qwen-code/pull/3856) | Adds `/directory remove` subcommand, startup warnings for invalid paths, and workspace settings persistence. | Closed |
| **#3873** | [Rebuild tool registry on subagent Config overrides](https://github.com/QwenLM/qwen-code/pull/3873) | Ensures bound tools (EditTool, WriteFileTool, ReadFileTool) resolve correctly to subagent on Config overrides. | Open |
| **#2886** | [Agent Team experimental feature](https://github.com/QwenLM/qwen-code/pull/2886) | Enables lead agent to spawn and coordinate parallel sub-agents on different task parts. | Open |
| **#3879** | [Reactive compression on context overflow](https://github.com/QwenLM/qwen-code/pull/3879) | Detects provider context-window overflow errors, compresses conversation, and retries once. | Open |

---

## 5. Feature Request Clusters

**Session Management & Performance**
- Search box in session picker for rename/resume filtering (#3869)
- Merge IDE context into user message instead of separate API history entries (#3712)
- Daemon mode proposal with complete design series (#3803, #2271)

**Extensibility & Integration**
- First-class native tool registration for extensions (#3870)
- Auto-detect cursor position in VS Code from CLI (#597)
- Remote control capability for code agent interaction (#1946)
- OpenCode-style installer (`curl -fsSL https://qwen-code.ai/install | bash`) and standalone executables (#3728)

**AI-Assisted Editing**
- Fast apply model for reliable edits (similar to Cursor) (#282)
- Auto-completion with file-specific context (#1540)
- Commit attribution with per-file AI contribution tracking (#3115)

**Configuration & Environment**
- Support `QWEN_HOME` env var to customize config directory (#2953)
- Standardize SDK release conventions across Python/TypeScript (#3793)

---

## 6. Developer Pain Points

1. **Settings persistence regressions** — Multiple reports of `settings.json` being overwritten or ignored (#3843, #3877), indicating fragile migration logic.

2. **Context window handling** — Users report `contextWindowSize` settings being ignored (#3878) and subagent context exceeding configured limits (#3664), suggesting inconsistent enforcement.

3. **Local model compatibility** — Frequent issues with local model deployments (qwen3.6-27b, qwen3.5-397B-A17B) producing malformed output or crashing (#3881, #3823).

4. **Session performance at scale** — Large file edits cause session JSONL bloat, making `/resume` unusable (#3822); truncation logic fails when temp directories don't exist (#3874).

5. **Auth flow friction** — Users encounter repeated auth prompts despite proper `.env` configuration (#3877, #3858), blocking CI/non-interactive use.

6. **Platform-specific breakage** — Wayland image paste (#3829) and proxy settings (#3883) indicate gaps in Linux/multi-platform testing.

7. **Task auto-termination** — Regression where Qwen Code spontaneously stops long-running tasks (#3730), breaking production workflows.

---

*Digest generated from GitHub data for [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) on 2026-05-07.*

</details>