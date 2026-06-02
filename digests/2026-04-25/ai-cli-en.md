# AI CLI Tools Community Digest 2026-04-25

> Generated: 2026-04-25 01:44 UTC | Tools covered: 8

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Pi](https://github.com/badlogic/pi-mono)

---

## Cross-Tool Comparison

# AI CLI Tools Ecosystem — Cross-Tool Comparison Report

**Date:** 2026-04-25
**Scope:** Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, OpenCode, Qwen Code, Pi

---

## 1. Ecosystem Overview

The AI CLI tools ecosystem is experiencing rapid iteration across all major providers, with today's activity showing 331 combined issues and 273 PRs across seven tools. The landscape is bifurcating: Anthropic's Claude Code and OpenAI's Codex target professional developers with enterprise-grade features (multi-account management, remote development), while Google Gemini CLI and open-source alternatives (OpenCode, Pi) focus on extensibility and local model support. A notable convergence is emerging around DeepSeek V4 integration—multiple tools are scrambling to fix `reasoning_content` handling, suggesting DeepSeek's cost-performance ratio is compelling developers to adopt it despite immature tooling. Windows compatibility remains a persistent friction point, with every tool reporting platform-specific regressions in recent releases.

---

## 2. Activity Comparison

| Tool | Issues (Total) | PRs (Total) | Releases (24h) | Top Issue | Community Velocity |
|------|----------------|-------------|----------------|-----------|-------------------|
| **Claude Code** | 49 | 50 | 1 (v2.1.120) | Multi-account mgmt (412 👍) | 🔴 High |
| **OpenAI Codex** | 50 | 50 | 4 (rust-v0.125.x) | Remote Dev (603 👍) | 🔴 High |
| **Gemini CLI** | 50 | 50 | 1 (v0.40.0-preview.4) | 403 Permission Error (19 comments) | 🟡 Medium |
| **GitHub Copilot CLI** | 49 | 1 | 3 (v1.0.36 series) | Segmentation fault (13 comments) | 🟢 Low |
| **OpenCode** | 50 | 50 | 2 (v1.14.23-24) | DeepSeek V4 reasoning (19 comments) | 🔴 High |
| **Qwen Code** | 32 | 50 | 1 (v0.15.2) | OAuth policy (119 comments) | 🟡 Medium |
| **Pi** | 50 | 22 | 2 (v0.70.1-2) | DeepSeek reasoning (9 comments) | 🟡 Medium |

**Key Observations:**
- **OpenAI Codex** leads in community engagement with 603 upvotes for Remote Development feature
- **Qwen Code** has the highest comment volume (119 comments) on a single issue (OAuth policy)
- **GitHub Copilot CLI** shows anomalously low PR activity (1 PR vs. 49 issues), indicating either a bottleneck or quiet maintenance mode
- **Claude Code** and **OpenCode** are the most actively iterating with 50 PRs each in 24 hours

---

## 3. Shared Feature Directions

The following requirements appear across multiple tool communities, indicating industry-wide priorities:

| Feature Direction | Tools Affected | Specific Needs |
|-------------------|----------------|----------------|
| **DeepSeek V4 Integration** | OpenCode, Pi, Qwen Code, Claude Code | `reasoning_content` handling, thinking mode support, multi-turn session continuity |
| **Background/Async Task Execution** | Claude Code, OpenCode, Gemini CLI | Non-blocking shell commands, task lifecycle management, Ctrl+b equivalents |
| **Multi-Account / Multi-Provider Support** | Claude Code, OpenCode, Pi, Qwen Code | Profile switching, OAuth multi-account, provider-agnostic model selection |
| **Windows/Shell Compatibility** | All 7 tools | PowerShell 7 support, CRLF handling, backspace rendering, IME compatibility |
| **Context Window Management** | OpenAI Codex, Claude Code, Gemini CLI | Configurable limits, auto-compaction, cache TTL control |
| **Extensibility (MCP/Plugins)** | Gemini CLI, OpenCode, Qwen Code, Pi | Plugin auto-install, event hooks, custom tool definitions |
| **Session Persistence & Recovery** | Claude Code, Gemini CLI, OpenCode | Resume reliability, session hydration, history continuity |
| **Localization & Internationalization** | Claude Code, Gemini CLI, Pi | Non-English UI, IME input handling, Unicode/BOM support |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Approach |
|------|---------------|-------------|-------------------|
| **Claude Code** | Enterprise reliability, Windows-first | Professional developers, teams | Opinionated defaults, sandboxing, ultrareview for CI |
| **OpenAI Codex** | Goal-oriented agents, app-server integration | Cloud-native developers, CI/CD | Rust-based architecture, Unix sockets, pagination-friendly APIs |
| **Gemini CLI** | Extensibility, reflex-based automation | Power users, plugin developers | Reflex architecture, memory scratchpad, Ollama compression routing |
| **GitHub Copilot CLI** | GitHub ecosystem tight integration | GitHub users, VS Code adherents | Narrow focus on Copilot extension, limited PR throughput |
| **OpenCode** | Provider agnosticism, local model support | Cost-conscious developers, self-hosters | LiteLLM provider, multi-account OAuth, background subagents |
| **Qwen Code** | Chinese developer ecosystem, local models | Qwen/Alibaba users, Chinese market | Auto-titling, sticky todo panels, OpenRouter integration |
| **Pi** | Lightweight, extension lifecycle control | Extension developers, minimalists | `pi.runWhenIdle()`, provider retry controls, Vertex AI support |

**Strategic Positioning:**
- **Claude Code** and **OpenAI Codex** compete directly for enterprise mindshare, with Claude leading in Windows support and OpenAI in goal-mode sophistication
- **Gemini CLI** differentiates through extensibility (reflexes, MCP) rather than model access
- **OpenCode** and **Pi** serve the "bring your own model" segment, competing on provider flexibility
- **Qwen Code** addresses the Chinese developer market with local model optimizations
- **GitHub Copilot CLI** remains tightly coupled to the VS Code extension, limiting standalone utility

---

## 5. Community Momentum & Maturity

| Tool | Issue Resolution Speed | PR Merge Rate | Community Health Signals |
|------|------------------------|---------------|--------------------------|
| **Claude Code** | Fast (cache TTL regression closed, resume crash being actively triaged) | High (50 PRs/24h) | ⚠️ Regression in latest release indicates rushed release cycle |
| **OpenAI Codex** | Moderate (goal-mode stack progressing, but remote dev stalled) | High (50 PRs/24h) | ✅ Stable iteration with clear roadmap |
| **Gemini CLI** | Moderate (permission errors unresolved, sandbox issues persistent) | High (50 PRs/24h) | 🟡 Active but fragmented; many long-standing issues |
| **GitHub Copilot CLI** | Slow (segmentation fault unresolved since 2025) | Very Low (1 PR/24h) | 🔴 Stagnant; likely maintenance mode |
| **OpenCode** | Fast (DeepSeek V4 fixes merged within hours) | High (50 PRs/24h) | ✅ Highly responsive to critical bugs |
| **Qwen Code** | Mixed (OAuth policy debate ongoing, tool output silence unresolved) | High (50 PRs/24h) | 🟡 Healthy debate but some blocking issues |
| **Pi** | Fast (DeepSeek V4 provider support shipped quickly) | Moderate (22 PRs/24h) | ✅ Focused development, good velocity |

**Maturity Assessment:**
- **OpenAI Codex** and **OpenCode** demonstrate the highest maturity with rapid bug turnaround and consistent PR cadence
- **Claude Code** shows signs of technical debt (regression in v2.1.120) despite high community engagement
- **GitHub Copilot CLI** appears to be in maintenance mode, with low PR activity and unresolved critical bugs
- **Gemini CLI** and **Qwen Code** are actively iterating but have accumulated technical debt in platform-specific areas

---

## 6. Trend Signals

The following signals from community feedback indicate where the ecosystem is heading:

### 6.1 DeepSeek Disruption
DeepSeek V4 is forcing rapid adaptation across all tools. The `reasoning_content` field handling is a recurring theme (OpenCode, Pi, Qwen Code, Claude Code), indicating that reasoning models with explicit thought traces require new API patterns. Tools that nail DeepSeek integration will capture cost-sensitive developers.

### 6.2 Windows as First-Class Platform
Every tool reports Windows-specific regressions in recent releases. Claude Code's v2.1.120 migration to PowerShell and Gemini CLI's backspace fix highlight that Windows is no longer a secondary target. Expect increased investment in Windows compatibility testing.

### 6.3 Background Task Execution
Claude Code's Ctrl+b, OpenCode's background subagents, and Gemini CLI's reflex architecture all point to a need for non-blocking agentic workflows. This is becoming a baseline expectation for CLI tools.

### 6.4 Provider Agnosticism
OpenCode's LiteLLM provider, Pi's configurable retries, and Qwen Code's multi-provider support indicate a shift toward provider-agnostic architectures. Developers want to swap models without tool lock-in.

### 6.5 Enterprise Features Maturing
Multi-account management (Claude Code, 412 👍), remote development (OpenAI Codex, 603 👍), and multi-account OAuth (OpenCode) are high-velocity requests. The CLI tools are evolving from developer toys to enterprise infrastructure.

### 6.6 Extensibility as Competitive Moat
Gemini CLI's reflex system, OpenCode's plugin hooks, and Qwen Code's skill loading all indicate that extensibility is a differentiator. Tools that enable community contributions will outpace closed ecosystems.

### 6.7 Context Management Complexity
Issues around context window limits (OpenAI Codex, Claude Code), auto-compaction (Claude Code, OpenCode), and cache TTL (Claude Code) reveal that context management is a unsolved problem. Expect more tooling around context budgeting and intelligent compaction.

---

## Strategic Recommendations

| Audience | Recommendation |
|----------|----------------|
| **Enterprise Decision-Makers** | Evaluate Claude Code for Windows-heavy teams; OpenAI Codex for cloud-native CI/CD integration |
| **Cost-Conscious Developers** | Monitor OpenCode and Pi for DeepSeek V4 integration; both offer provider flexibility |
| **Plugin/Extension Developers** | Target Gemini CLI (reflex architecture) or OpenCode (plugin hooks) for extensibility |
| **Chinese Market** | Qwen Code offers local model optimizations and Chinese developer ecosystem alignment |
| **Platform Engineers** | Address Windows testing gaps; all tools report regressions affecting this platform |

---

*Report generated from GitHub data for 2026-04-25. Sources: github.com/anthropics/claude-code, github.com/openai/codex, github.com/google-gemini/gemini-cli, github.com/github/copilot-cli, github.com/anomalyco/opencode, github.com/QwenLM/qwen-code, github.com/badlogic/pi-mono*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest

**Date:** 2026-04-25
**Source:** github.com/anthropics/claude-code

---

## Today's Highlights

The v2.1.120 release introduces Windows PowerShell as the default shell (replacing Git Bash dependency) and a new `claude ultrareview` CLI subcommand for CI integration. However, this release has introduced a critical regression: the `--resume` and `--continue` flags crash on startup with "X is not a function" errors across macOS, Linux, and Windows. The community has filed numerous duplicate reports, and a workaround (using `/resume` interactively) is available. Additionally, a significant cache TTL regression causing cost inflation has been resolved.

---

## Releases

### v2.1.120 (Latest)
**What's new:**
- **Windows Shell Independence:** Git for Windows (Git Bash) is no longer required — Claude Code now uses PowerShell as the shell tool when Git Bash is absent
- **New CLI Subcommand:** `claude ultrareview [target]` runs `/ultrareview` non-interactively from CI or scripts, printing findings to stdout (`--json` for raw output)

---

## Hot Issues

### 1. [FEATURE] Add ability to manage multiple Claude accounts with easy profile switching
**Issue #18435** | 78 comments | 412 👍 | [View on GitHub](https://github.com/anthropics/claude-code/issues/18435)

The most-requested feature in the queue. Users want to manage multiple Claude accounts within the Claude Desktop app with seamless profile switching. This is particularly important for developers who separate work/personal accounts or manage multiple organization memberships.

### 2. [BUG] Oversized image breaks conversation permanently
**Issue #13480** | 59 comments | 63 👍 | [View on GitHub](https://github.com/anthropics/claude-code/issues/13480)

A critical bug where uploading an oversized image permanently breaks the conversation — no recovery without starting a new chat. Affects Linux users; the conversation becomes unusable even after the session ends.

### 3. [BUG] Windows orphaned process file lock prevents relaunch
**Issue #42776** | 57 comments | 15 👍 | [View on GitHub](https://github.com/anthropics/claude-code/issues/42776)

Claude Code Desktop fails to relaunch on Windows due to an orphaned process holding a file lock. Users must manually terminate the process via Task Manager to restart the application.

### 4. [BUG] Cache TTL silently regressed from 1h to 5m causing quota/cost inflation
**Issue #46829** | 52 comments | 234 👍 | **[CLOSED]** | [View on GitHub](https://github.com/anthropics/claude-code/issues/46829)

Analysis of session JSONL files revealed Anthropic silently changed the prompt cache TTL from 1 hour to 5 minutes around early March 2026, causing significant quota consumption and cost increases. **This issue has been closed**, indicating the regression was addressed.

### 5. [BUG] Resume crashes with "g9H is not a function" — REPL onSessionRestored undefined
**Issue #53041** | 8 comments | 13 👍 | [View on GitHub](https://github.com/anthropics/claude-code/issues/53041)

**⚠️ ACTIVE REGRESSION IN v2.1.120.** Running `claude -r <session-id>` crashes immediately on macOS and Linux with a JavaScript runtime error. Print mode (`claude -p --resume`) works correctly. This is one of multiple duplicate reports indicating a widespread issue.

### 6. [BUG] macOS: "Claude Code process exited with code 1" — real cause is folder privacy permission
**Issue #51984** | 5 comments | [View on GitHub](https://github.com/anthropics/claude-code/issues/51984)

The desktop app crashes with an unhelpful exit code. After extensive debugging, the root cause was discovered to be macOS folder privacy permissions — but the error message provides no indication of this.

### 7. [BUG] 2.1.120 regression: --continue/--resume fails with 'sandbox required but unavailable'
**Issue #53085** | 2 comments | 2 👍 | [View on GitHub](https://github.com/anthropics/claude-code/issues/53085)

On macOS, v2.1.120 refuses to start resumed sessions with a sandbox error, even when `sandbox.enabled=false`. The same machine on 2.1.119 resumes sessions cleanly — a clear regression.

### 8. [BUG] Linux sandbox broken — bad bwrap calls and no allow permissions
**Issue #17727** | 13 comments | 15 👍 | [View on GitHub](https://github.com/anthropics/claude-code/issues/17727)

The Linux sandbox uses incorrect bubblewrap (`bwrap`) calls and missing allow permissions, breaking security isolation. This has been open since January with ongoing community discussion.

### 9. [BUG] bwrap launcher uses --bind for optional hardware paths (/opt/cuda*) — fails without CUDA
**Issue #50632** | 2 comments | 1 👍 | [View on GitHub](https://github.com/anthropics/claude-code/issues/50632)

On Linux hosts without NVIDIA/CUDA (AMD GPUs, Intel iGPUs, ARM, CPU-only containers, CI runners), the sandbox fails during namespace setup because it uses `--bind` instead of `--ro-bind-try` for optional paths.

### 10. [BUG] /export command produces empty file and empty clipboard in iTerm2
**Issue #52733** | 2 comments | [View on GitHub](https://github.com/anthropics/claude-code/issues/52733)

The `/export` command fails to capture conversation history in iTerm2, producing empty output files and empty clipboard despite active conversation content.

---

## Key PR Progress

### 1. fix(hookify): include hook-specific output for warnings
**PR #52668** | Open | [View on GitHub](https://github.com/anthropics/claude-code/pull/52668)

Returns hook-specific output for Hookify warn actions on PreToolUse and PostToolUse events. Preserves existing `systemMessage` output while adding `additionalContext` so warnings reach Claude's context. Fixes issue #40380.

### 2. docs: fix README brand casing
**PR #52666** | Open | [View on GitHub](https://github.com/anthropics/claude-code/pull/52666)

Documentation-only fix correcting "Github" to "GitHub" and updating "MacOS" references to "macOS" in install headings.

### 3. Rename marketplace for AgentNXT deployment
**PR #47532** | Closed | [View on GitHub](https://github.com/anthropics/claude-code/pull/47532)

Marketplace rename for AgentNXT deployment integration.

---

## Feature Request Trends

Based on the issue queue, the most-requested feature directions are:

| Category | Description | Evidence |
|----------|-------------|----------|
| **Multi-Account Management** | Ability to switch between multiple Claude accounts/profiles in the desktop app | #18435 (412 👍, 78 comments) |
| **Localization** | Non-English UI for permission prompts and dialogs | #53083 (Japanese localization request) |
| **Improved Error Messages** | More helpful error reporting for crashes, permissions, and failures | #51984, #42776 |
| **Enhanced Session Management** | Better handling of session resume, recovery, and history | Multiple resume-related issues |

---

## Developer Pain Points

The community is experiencing significant friction in these areas:

### 1. v2.1.120 Resume Regression (Critical)
The `--resume` and `--continue` flags are completely broken across all platforms in the latest release. With 10+ duplicate issues filed in 24 hours, this is the most urgent problem. **Workaround:** Use `claude` to start a new session, then type `/resume` interactively.

### 2. Sandbox Incompatibility
Linux users without CUDA face broken sandboxing due to hard-coded `--bind` calls for optional paths. Additionally, sandbox configuration conflicts with user preferences (e.g., `sandbox.enabled=false` being ignored).

### 3. Unhelpful Error Messages
Multiple issues highlight that Claude Code exits with generic error codes (e.g., "process exited with code 1") without explaining the actual cause — particularly for macOS folder permissions and Windows file locks.

### 4. bwrap Configuration Issues
The bubblewrap sandbox launcher makes incorrect assumptions about system configuration (CUDA paths, hardware availability), causing failures on non-NVIDIA systems and in CI environments.

### 5. Stale Plugin State
Abandoned git worktrees leave stale plugin installations that silently break TUI slash-command autocomplete, with no clear indication of the root cause.

---

*Digest generated from GitHub data for github.com/anthropics/claude-code on 2026-04-25*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest

**Date:** 2026-04-25
**Source:** github.com/openai/codex

---

## 1. Today's Highlights

The Codex team released **rust-v0.125.0** with significant app-server improvements including Unix socket transport, pagination-friendly resume/fork, and sticky environments. A major PR stack for **goal-mode functionality** is progressing through review, introducing persistent thread goals with TUI, core runtime, and model tool support. Community attention remains focused on GPU performance issues, context window inconsistencies with GPT-5.5, and cross-platform expansion requests.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **rust-v0.125.0** | Stable | App-server integrations now support Unix socket transport, pagination-friendly resume/fork, sticky environments, and remote thread config/store plumbing. Plugin management gains remote plugin installation and upgrade capabilities. |
| **rust-v0.126.0-alpha.1** | Alpha | Early preview release. |
| **rust-v0.125.0-alpha.3** | Alpha | Patch release. |
| **rust-v0.125.0-alpha.2** | Alpha | Patch release. |

---

## 3. Hot Issues

| # | Issue | Author | Comments | 👍 | Why It Matters |
|---|-------|--------|----------|----|----------------|
| **#10450** | [Remote Development in Codex Desktop App](https://github.com/openai/codex/issues/10450) | @pocca2048 | 164 | 603 | **Highest-demand feature request.** Users want VS Code Remote Development-like functionality to code on remote machines via Codex Desktop. 603+ upvotes indicate this is a critical workflow gap. |
| **#16857** | [High GPU usage during "thinking" animation](https://github.com/openai/codex/issues/16857) | @homm | 17 | 19 | Performance concern on macOS. A "tiny useless animation" causes excessive GPU drain, impacting laptop battery life and user experience. |
| **#18341** | [Persistent blurred overlay on Intel Mac](https://github.com/openai/codex/issues/18341) | @vulcanhelix | 15 | 8 | Rendering bug affecting Intel Mac users on macOS 15.0.1. Creates visual artifacts below the composer, degrading UI quality. |
| **#11023** | [Codex desktop app for Linux](https://github.com/openai/codex/issues/11023) | @Suhaibinator | 15 | 63 | Cross-platform demand. Linux developers want native desktop access, citing power consumption benefits over Electron-based alternatives. |
| **#19185** | [config.toml context settings not respected](https://github.com/openai/codex/issues/19185) | @kkellyoffical | 14 | 17 | Configuration bug where `model_context_window` and related settings fail to apply, forcing users to work with incorrect defaults. |
| **#18333** | [MCP stacks repeatedly starting for new sessions](https://github.com/openai/codex/issues/18333) | @jianzhangg | 14 | 6 | Performance regression causing severe slowdown and memory pressure. Each new session/subagent reinitializes full MCP stacks unnecessarily. |
| **#19220** | [macOS startup failure: unsupported feature `workspace_dependencies`](https://github.com/openai/codex/issues/19220) | @SnowfallHD | 13 | 0 | Startup blocker on Darwin 25.4.0. App fails to launch after update, affecting production users. |
| **#19204** | [Flagged while already verified](https://github.com/openai/codex/issues/19204) | @Acurisu | 13 | 18 | Safety check false positive. Users report being blocked by safety systems despite prior verification, disrupting workflow. |
| **#7082** | [VS Code extension stuck on "Loading..."](https://github.com/openai/codex/issues/7082) | @SvenBudak | 12 | 1 | Long-standing Windows 11 blocker. Extension never completes initialization, making Codex unusable for affected users. |
| **#18404** | [Computer Use plugin unavailable on macOS Intel](https://github.com/openai/codex/issues/18404) | @liyuyu0505 | 12 | 4 | Platform-specific regression. Computer Use feature fails to initialize on Intel Macs despite MCP server showing enabled. |

---

## 4. Key PR Progress

| # | PR | Author | Focus | Impact |
|---|-----|--------|-------|--------|
| **#18077** | [Add goal TUI UX](https://github.com/openai/codex/pull/18077) | @etraut-openai | Final PR in goal-mode stack: `/goal` command, statusline indicators, goal update handling, command history behavior, and snapshots | Enables users to set, track, and manage persistent thread goals directly in terminal |
| **#19481** | [Remove ghost snapshots from Responses API](https://github.com/openai/codex/pull/19481) | @pakrym-oai | Removes `ghost_snapshot`/`GhostCommit` from API surface; legacy config compatibility maintained | Cleanup of deprecated API artifacts; improves SDK clarity |
| **#18076** | [Add goal core runtime](https://github.com/openai/codex/pull/18076) | @etraut-openai | Core runtime for active thread goals with automatic task continuation | Allows model to keep tasks moving without client-side schedulers |
| **#19458** | [ChatGPT Library file upload/download hooks](https://github.com/openai/codex/pull/19458) | @lt-oai | Supports `store_in_library` uploads via `/files/process_upload_stream`; propagates `library_file_id` to MCP | Enables integration with ChatGPT's file library ecosystem |
| **#18075** | [Add goal model tools](https://github.com/openai/codex/pull/18075) | @etraut-openai | `get_goal`, `create_goal`, `update_goal` model tools with feature gating | Lets model inspect and manage persisted goals with token budgets |
| **#19456** | [Add remote plugin uninstall API](https://github.com/openai/codex/pull/19456) | @xli-oai | Remote plugin uninstall via `remoteMarketplaceName` + `pluginName` | Improves plugin lifecycle management for enterprise deployments |
| **#19473** | [Add turn start timestamp to turn metadata](https://github.com/openai/codex/pull/19473) | @mchen-oai | MCP tool calls now receive `turn_started_at` in `_meta["x-codex-turn-metadata"]` | Enables MCP servers to measure internal latency relative to turn start |
| **#19391** | [permissions: make runtime config profile-backed](https://github.com/openai/codex/pull/19391) | @bolinfest | `PermissionProfile` as canonical runtime permissions shape | Unifies permission handling across Managed, Disabled, and External enforcement modes |
| **#19474** | [Make thread store process-scoped](https://github.com/openai/codex/pull/19474) | @wiltzius-openai | Single app-server ThreadStore shared across ThreadManager and CodexMessageProcessor | Prevents thread config from switching persistence backend mid-session |
| **#19047** | [feat: add external task refs and opt-in flag](https://github.com/openai/codex/pull/19047) | @adrian-openai | Task registration primitives: typed task/runtime IDs, task kinds, `external_task_ref`, `use_agent_identity` flag | Foundation for HAI external-task-ref integration |

---

## 5. Feature Request Trends

Analysis of 50 recent issues reveals these dominant themes:

| Trend | Frequency | Examples |
|-------|-----------|----------|
| **Cross-platform expansion** | High | Linux desktop app (#11023), Remote Development (#10450), Windows fixes (#7082, #19181) |
| **Context window improvements** | High | 1M token support (#19464), context catalog mismatch (#19409), compaction failures (#19386), config not respected (#19185) |
| **Performance optimization** | High | GPU usage (#16857), MCP stack bloat (#18333), startup failures (#19220) |
| **Session/resume reliability** | Medium | Stream disconnects (#19433), history not loading (#18993, #19137), thread hydration failures (#19397) |
| **Plugin/extension ecosystem** | Medium | Computer Use unavailable (#18404), remote plugin install (#19456), rate limit visibility (#18822) |
| **Permission/sandbox controls** | Medium | Full access not working (#19349, #19356), approval matrix timeouts (#19454) |

---

## 6. Developer Pain Points

1. **Context window confusion**: GPT-5.5 advertised as 400K context but sessions report 258K effective window; auto-compaction fails around 220K tokens. Configuration settings frequently ignored.

2. **MCP performance regressions**: New sessions/subagents reinitialize full MCP stacks, causing severe slowdown and memory pressure. Computer Use plugin remains unavailable on Intel Macs.

3. **Cross-platform instability**: macOS startup failures, Windows extension loading issues, Linux desktop demand unmet. Blurred overlays and animation GPU drain plague macOS users.

4. **Session persistence failures**: Resumed sessions disconnect inconsistently; chat history fails to load; long threads fail to hydrate after reload.

5. **Permission escalation gaps**: Full Access permissions don't take effect at runtime; safety checks flag already-verified content; approval matrix tests timing out in CI.

6. **Plugin ecosystem gaps**: Remote plugin uninstall API newly added; npm/Bun wrapper version checks being hardened; ChatGPT Library integration still in progress.

---

*Digest generated from GitHub data. For real-time updates, visit [github.com/openai/codex](https://github.com/openai/codex).*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest

**Date:** 2026-04-25
**Repository:** [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 1. Today's Highlights

The team released **v0.40.0-preview.4** as a patch for Windows backspace handling regression, following the revert of PR #21447. A major CI optimization PR (#25426) promises 16-core test speed improvements, while a new file backup system (#25947) addresses destructive modification loops in agentic workflows.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.40.0-preview.4** | Patch | Cherry-pick fix for Windows backspace regression from PR #25941 |
| **v0.40.0-preview.3** | Preview | Standard release cycle |
| **v0.39.1** | Stable | Patch release |

**Full Changelog:** https://github.com/google-gemini/gemini-cli/compare/v0.39.0...v0.39.1

---

## 3. Hot Issues

| # | Issue | Area | Comments | Why It Matters |
|---|-------|------|----------|----------------|
| **#25306** | [403 Permission Error - "The caller does not have permission"](https://github.com/google-gemini/gemini-cli/issues/25306) | Security | 19 | High-impact auth failure affecting users; team is actively triaging with request for chat history exports |
| **#22745** | [AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745) | Agent | 5 | Epic tracking potential for more precise method-bound reads and reduced token noise |
| **#24916** | [Repeated permission prompts for same file](https://github.com/google-gemini/gemini-cli/issues/24916) | Security | 3 | UX friction—permissions not persisting across sessions |
| **#22323** | [Subagent reports GOAL success despite MAX_TURNS](https://github.com/google-gemini/gemini-cli/issues/22323) | Agent | 3 | P1 issue hiding task interruptions from users |
| **#25166** | [Shell commands stuck "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166) | Core | 2 | Blocking bug for simple CLI operations |
| **#23571** | [Model creates tmp scripts in random directories](https://github.com/google-gemini/gemini-cli/issues/23571) | Agent | 2 | Creates cleanup overhead for clean commits |
| **#22267** | [Browser Agent ignores settings.json overrides](https://github.com/google-gemini/gemini-cli/issues/22267) | Agent | 2 | Configuration system inconsistency |
| **#25216** | [EISDIR error on Windows path A:\](https://github.com/google-gemini/gemini-cli/issues/25216) | Core | 1 | Path handling edge case on Windows |
| **#24915** | [Thick black border in prompt bar](https://github.com/google-gemini/gemini-cli/issues/24915) | Core | 1 | UI rendering issue |
| **#24202** | [Text scrambled over SSH](https://github.com/google-gemini/gemini-cli/issues/24202) | Core | 1 | SSH/terminal compatibility problem |

---

## 4. Key PR Progress

| # | PR | Author | Status | Summary |
|---|-----|--------|--------|---------|
| **#25945** | [feat(repo-metrics): time-series analysis & reflex refactoring](https://github.com/google-gemini/gemini-cli/pull/25945) | @gundermanc | Open | Introduces time-series recording for repo-metrics, removes critique flow, renames "processes" to "reflexes" |
| **#25426** | [feat(ci): 16-core test speed via bundling revival](https://github.com/google-gemini/gemini-cli/pull/25426) | @mattKorwel | Open | Artifact-centric CI path; modernized test infrastructure |
| **#25950** | [fix: prevent false command conflicts from home directory](https://github.com/google-gemini/gemini-cli/pull/25950) | @stbenjam | Open | Cherry-pick of #23069 fixing `~/.gemini/commands` collision |
| **#25941** | [fix(cli-ui): revert backspace handling for Windows](https://github.com/google-gemini/gemini-cli/pull/25941) | @scidomino | **Closed** | Reverted PR #21447 due to Windows regression with backspace/Ctrl+Backspace |
| **#25873** | [feat(memory): persist auto-memory scratchpad](https://github.com/google-gemini/gemini-cli/pull/25873) | @SandyTao520 | **Closed** | Reduced skill extraction turns from 13.2 → 11.0 (-16.7%) |
| **#25947** | [feat(tools): versioned pre-write backups with agent-driven restore](https://github.com/google-gemini/gemini-cli/pull/25947) | @dolphprefect | Open | Transactional file operations layer to prevent destructive loops |
| **#25915** | [feat(core,cli): route /compress through local Ollama](https://github.com/google-gemini/gemini-cli/pull/25915) | @dolphprefect | Open | `OllamaCompressClient` for local summarization (e.g., gemma3:4b) |
| **#25912** | [feat: apply compact tool output to MCP tools](https://github.com/google-gemini/gemini-cli/pull/25912) | @dolphprefect | Open | Extends `compactToolOutput` to MCP tools (previously native-only) |
| **#24976** | [feat(cli): add `--session-id` flag](https://github.com/google-gemini/gemini-cli/pull/24976) | @AmaanBilwar | Open | Deterministic session startup for orchestration use cases |
| **#24174** | [feat(voice): real-time voice mode](https://github.com/google-gemini/gemini-cli/pull/24174) | @Abhijit-2592 | **Closed** | Voice mode with Gemini Live API + Whisper local backend |

---

## 5. Feature Request Trends

Analysis of 50 open issues reveals these dominant themes:

| Theme | Frequency | Examples |
|-------|-----------|----------|
| **Agent Reliability** | High | Subagent recovery (#22323), destructive behavior prevention (#22672), approval mode awareness (#23582) |
| **Memory & Context** | High | Memory routing global vs. project (#22819), proactive memory writes (#22809), scratchpad persistence (#25873) |
| **Terminal/UI Polish** | Medium | SSH text scrambling (#24202), scroll issues (#24470), table streaming (#25218), keyboard protocol recovery (#25944) |
| **Tooling Enhancements** | Medium | AST-aware tools (#22745), MCP compact output (#25912), file backup system (#25947) |
| **Performance** | Medium | 400 error with >128 tools (#24246), pathological compression (#23556), 16-core CI (#25426) |

---

## 6. Developer Pain Points

1. **Windows Terminal Incompatibilities** — Backspace handling regressions (#25941, #25943, #25862), path edge cases (#25216), and SSH rendering issues (#24202) continue to plague Windows users.

2. **Permission Persistence Failures** — Repeated prompts for the same file (#24916) and 403 errors (#25306) indicate auth/session management gaps.

3. **Shell Command Hangs** — Commands completing but UI stuck in "Waiting input" state (#25166) blocks basic workflows.

4. **Agentic Workflow Instability** — Destructive modification loops, tmp script sprawl (#23571), and subagent success masking (#22323) reduce trust in autonomous operations.

5. **Configuration Inconsistencies** — Browser Agent ignoring settings.json (#22267) and unclear parallel tool call layouts (#24943) create unpredictable behavior.

6. **Memory System Gaps** — Lack of global vs. project memory routing (#22819) and unclear memory write triggers (#22809) limit personalization.

---

*Generated from GitHub data • [View Repository](https://github.com/google-gemini/gemini-cli) • [Open Issues](https://github.com/google-gemini/gemini-cli/issues) • [Open PRs](https://github.com/google-gemini/gemini-cli/pulls)*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# Kimi Code CLI Community Digest

**Date:** 2026-04-25
**Source:** github.com/MoonshotAI/kimi-cli

---

## 1. Today's Highlights

Version 1.39.0 shipped yesterday with critical fixes including a caret rendering fix for approval request text inputs and a new `KIMI_MODEL_THINKING_KEEP` environment variable for preserved thinking. The community is actively addressing long-standing pain points: UTF-8 BOM config parsing errors, approval timeout configurability, and PowerShell 7 support on Windows are all seeing fresh contributions.

---

## 2. Releases

### v1.39.0 (2026-04-24)
**Repository:** [Release #2054](https://github.com/MoonshotAI/kimi-cli/pull/2054)

Key changes:
- **Shell fix:** Approval request text input now renders caret correctly ([#2005](https://github.com/MoonshotAI/kimi-cli/pull/2005))
- **New env var:** `KIMI_MODEL_THINKING_KEEP` for preserved thinking mode ([#2029](https://github.com/MoonshotAI/kimi-cli/pull/2029))
- **Dependency update:** Bumped `kosong` from 0.51.0 → 0.52.0

---

## 3. Hot Issues

### 1. API Error 400: Invalid Request (CLOSED)
**Issue:** [#1344](https://github.com/MoonshotAI/kimi-cli/issues/1344) | 21 comments | Author: @Lyken17

Users encountering `400 {"error":{"type":"invalid_request_error"}}` when calling the API. This was a high-traffic issue with 21 comments indicating widespread impact. **Status:** Closed.

### 2. Approval Request Timeout Hardcoded at 300s (CLOSED)
**Issue:** [#1823](https://github.com/MoonshotAI/kimi-cli/issues/1823) | 4 comments | 👍 2

Feature request to make the 5-minute approval timeout configurable or unlimited. Community members want flexibility for long-running operations. **Status:** Closed.

### 3. Terminal Closes in IDEA After Message (OPEN)
**Issue:** [#1990](https://github.com/MoonshotAI/kimi-cli/issues/1990) | 4 comments

Critical UX bug: Using Kimi CLI in IntelliJ IDEA causes the entire terminal to close after sending a message. Affects macOS Darwin 24.5.0 users. **Status:** Open.

### 4. default_skills Config for Auto-Activating Skills (OPEN)
**Issue:** [#2062](https://github.com/MoonshotAI/kimi-cli/issues/2062) | 2 comments | 👍 1

Request for a config option to automatically activate specific skills at session start without manual slash commands. **Status:** Open.

### 5. UTF-8 BOM Causes Invalid TOML Error (OPEN)
**Issue:** [#2043](https://github.com/MoonshotAI/kimi-cli/issues/2043) | 1 comment

Config files with UTF-8 BOM fail to parse with "Empty key at line 1 col 0" error. Affects users with BOM-prefixed config files. **Status:** Open.

### 6. VS Code Connection Error (OPEN)
**Issue:** [#1458](https://github.com/MoonshotAI/kimi-cli/issues/1458) | 1 comment

Users report `error":{"code":-32003,"message":"Connection error."}` when using Kimi CLI in VS Code on Windows. **Status:** Open.

### 7. PowerShell 7 (pwsh) Support on Windows (OPEN)
**Issue:** [#2066](https://github.com/MoonshotAI/kimi-cli/issues/2066) | 0 comments

Request to support PowerShell 7 (`pwsh`) as the default shell instead of hardcoded PowerShell 5.1 on Windows. **Status:** Open.

### 8. MCP JSON Schema Conflict Error (OPEN)
**Issue:** [#2061](https://github.com/MoonshotAI/kimi-cli/issues/2061) | 0 comments

MCP tool schema validation fails with conflicting keywords after `$ref` expansion. Affects k2.6 model users on Windows. **Status:** Open.

### 9. Error Messages Consume Tokens (OPEN)
**Issue:** [#2059](https://github.com/MoonshotAI/kimi-cli/issues/2059) | 0 comments

Users report rapid token consumption due to error messages being included in context. Questions token calculation methodology. **Status:** Open.

### 10. AGENTS.md Not Loaded with Custom Agent (OPEN)
**Issue:** [#2058](https://github.com/MoonshotAI/kimi-cli/issues/2058) | 0 comments

When starting with a custom agent, AGENTS.md is not loaded into context, affecting workflow customization. **Status:** Open.

---

## 4. Key PR Progress

### 1. ACP Approval Notification
**PR:** [#2068](https://github.com/MoonshotAI/kimi-cli/pull/2068) | Author: @zeel2104

Adds `kimi/approval_required` notification before sending approval requests to clients. Improves UX for approval workflows.

### 2. Connection Drops Fix + Retry Resilience
**PR:** [#2067](https://github.com/MoonshotAI/kimi-cli/pull/2067) | Author: @yassinidyhya

Fixes intermittent `APITimeoutError`/`APIConnectionError` on Windows/gateways when context exceeds ~130k tokens. Root cause: httpx default `keepalive_expiry` of 5s.

### 3. UTF-8 BOM Tolerance (Fixes #2043)
**PR:** [#2065](https://github.com/MoonshotAI/kimi-cli/pull/2065) | Author: @Jerry2003826

Reads config files with `utf-8-sig` to ignore BOM before TOML/JSON parsing. Adds regression coverage.

### 4. OAuth Flow Recovery
**PR:** [#2060](https://github.com/MoonshotAI/kimi-cli/pull/2060) | Author: @wbxl2000

Routes connection recovery retries through full auth recovery path. Refreshes managed-platform models through OAuthManager and retries once on 401.

### 5. KIMI_SHARE_DIR for Plan Files
**PR:** [#2064](https://github.com/MoonshotAI/kimi-cli/pull/2064) | Author: @XYenon

Plan files now respect `KIMI_SHARE_DIR` environment variable instead of hardcoded `~/.kimi/plans`. Includes automatic migration for existing files.

### 6. default_skills Config Implementation
**PR:** [#2063](https://github.com/MoonshotAI/kimi-cli/pull/2063) | Author: @maxBRT

Implements [#2062](https://github.com/MoonshotAI/kimi-cli/issues/2062): Adds config key to auto-activate skills at session start.

### 7. Strict Mode for Core Tools
**PR:** [#2036](https://github.com/MoonshotAI/kimi-cli/pull/2036) | Author: @kermanx

Enables OpenAI/Anthropic strict schema validation for: Shell, ReadFile, Grep, WriteFile, StrReplaceFile, SetTodoList. Improves reliability.

### 8. RalphFlow Architecture
**PR:** [#1960](https://github.com/MoonshotAI/kimi-cli/pull/1960) | Author: @ORDL-AMF

Introduces RalphFlow architecture with ephemeral context and convergence detection to prevent infinite loops while enabling robust multi-step workflows.

### 9. /usage Quota Colors Fix
**PR:** [#2039](https://github.com/MoonshotAI/kimi-cli/pull/2039) | Author: @binichallein

Fixes inverted quota colors in `/usage` command. Root cause: threshold mapping assumed larger values were more dangerous.

### 10. Agent Task Count in Prompt Status Bar
**PR:** [#2041](https://github.com/MoonshotAI/kimi-cli/pull/2041) | Author: @wbxl2000

Shows active agent task count in prompt status bar, addressing UX confusion during multi-agent runs.

---

## 5. Feature Request Trends

Analysis of recent issues reveals these dominant feature directions:

| Trend | Description | Related Issues |
|-------|-------------|----------------|
| **Configuration Flexibility** | Requests for customizable timeouts, default behaviors, and environment variable controls | #1823, #2062, #2064 |
| **Windows/PowerShell 7** | Native support for modern Windows shells and better Windows integration | #2066, #1458 |
| **Session/Skill Automation** | Auto-loading skills, agents, and context files on session start | #2062, #2058 |
| **Token Efficiency** | Reducing unnecessary token consumption from errors and redundant context | #2059 |
| **MCP Integration** | Better MCP server compatibility and schema validation | #2061 |

---

## 6. Developer Pain Points

1. **Config File Encoding Issues** — UTF-8 BOM in config files causes silent failures. Multiple users affected; fix in progress ([#2065](https://github.com/MoonshotAI/kimi-cli/pull/2065)).

2. **Approval Timeout Inflexibility** — Hardcoded 300-second timeout frustrates developers running long operations. Community requesting configurability.

3. **Windows Integration Gaps** — PowerShell 7 not recognized, terminal closures in IDEs, connection errors in VS Code. Windows users experiencing rough edges.

4. **Token Consumption Opacity** — Error messages consuming tokens without clear visibility into calculation. Users seeking transparency.

5. **Context Size Limits** — Connection drops when context exceeds ~130k tokens despite 262k model support. Affects users with large codebases.

6. **OAuth/Auth Recovery** — Transient auth failures not properly recovered, requiring manual re-login. Fix merged in [#2060](https://github.com/MoonshotAI/kimi-cli/pull/2060).

---

*Digest generated from GitHub data for 2026-04-25. For real-time updates, visit [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli).*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-25

## Today's Highlights

The OpenCode team shipped **v1.14.24** with a critical fix for DeepSeek V4 reasoning content handling, resolving multi-turn tool call failures that were causing 400 errors. A companion PR (#24146) was also merged to preserve empty reasoning_content for thinking mode. Meanwhile, the community is actively requesting background task execution (mirroring Claude Code's Ctrl+b feature) and improved mobile/touch support.

---

## Releases

### v1.14.24
**Core Fixes:**
- Fixed DeepSeek assistant messages so reasoning is always included, avoiding provider formatting failures
- Fixed inherited model configs so interleaved-capability models keep working when that field falls back to an existing model (contributor: @07akioni)
- Added an experimental HTTP API endpoint

### v1.14.23
**Core & TUI Improvements:**
- Respects custom `.npmrc` registry settings when checking package versions and updates
- Renders all non-synthetic text in user messages instead of showing only the first text block

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#24190](https://github.com/anomalyco/opencode/issues/24190) | **[core] DeepSeek V4 reasoning_content not round-tripped — 400 error on multi-turn tool calls** | DeepSeek V4 Pro/Flash fails with 400 errors on second turn of conversations with tool calls. Blocks production use of these models. | 19 comments, 6 👍 |
| [#24104](https://github.com/anomalyco/opencode/issues/24104) | **DeepSeek thinking mode: reasoning_content must be passed back to API** | Every API call after the first assistant response fails with a reasoning_content error, making multi-turn sessions unusable. | 19 comments, 0 👍 |
| [#14808](https://github.com/anomalyco/opencode/issues/14808) | **Plugin event listener for "session.created" not firing** | Custom plugins (e.g., Engram memory system) don't receive session events, breaking plugin ecosystems. | 16 comments, 12 👍 |
| [#24039](https://github.com/anomalyco/opencode/issues/24039) | **[FEATURE] Add GPT-5.5 support for OpenAI provider** | Users want first-class GPT-5.5 support with proper model configuration. | 16 comments, 12 👍 |
| [#1970](https://github.com/anomalyco/opencode/issues/1970) | **Feature Request: Add Background Bash Execution** | Requests Claude Code-style background task execution so long-running commands (builds, servers) don't block the agent. | 15 comments, 21 👍 |
| [#13626](https://github.com/anomalyco/opencode/issues/13626) | **[FEATURE] Auto-sync projects in web UI from server** | Web UI users on new devices can't see their projects without manual sync. | 7 comments, 0 👍 |
| [#5934](https://github.com/anomalyco/opencode/issues/5934) | **Session Todo-list is forgotten after compaction** | Todo lists are lost after auto-compaction, breaking workflow continuity. | 7 comments, 0 👍 |
| [#24097](https://github.com/anomalyco/opencode/issues/24097) | **deepseek-v4-pro model ID not recognized as thinking model** | Causes reasoning_content errors even with interleaved configured. | 6 comments, 0 👍 |
| [#17052](https://github.com/anomalyco/opencode/issues/17052) | **Answer keeps looping and repeating without ending** | Agent enters infinite loop, requiring manual escape. | 6 comments, 0 👍 |
| [#9714](https://github.com/anomalyco/opencode/issues/9714) | **[FEATURE] Background Tasks Manager** | Proposes a full task manager with lifecycle operations for background execution. | 5 comments, 9 👍 |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#24146](https://github.com/anomalyco/opencode/pull/24146) | **fix: preserve empty reasoning_content for DeepSeek V4 thinking mode** | Major fix closing 8 related issues (#24104, #24097, #24130, #24124, #24135, #24114, #24111, #17523). Resolves multi-turn reasoning failures. | ✅ Merged |
| [#20039](https://github.com/anomalyco/opencode/pull/20039) | **feat: bash→shell tool + pwsh/powershell/cmd/bash specific tool definitions** | Splits monolithic shell tool into distinct tools per shell runtime for better agent compatibility. | 🔄 Open (Beta) |
| [#14468](https://github.com/anomalyco/opencode/pull/14468) | **feat: add LiteLLM provider with auto model discovery** | Adds native LiteLLM provider that auto-discovers models from a LiteLLM proxy at startup. | 🔄 Open |
| [#11832](https://github.com/anomalyco/opencode/pull/11832) | **feat(auth): multi-account OAuth support with auto-relogin** | Implements multiple OAuth accounts per provider with automatic credential rotation and Puppeteer-based auto-relogin. | 🔄 Open |
| [#24174](https://github.com/anomalyco/opencode/pull/24174) | **feat(core): add background subagent support** | Adds `task(background=true)` so subagents run without blocking, plus `task_status` tool for polling. | 🔄 Open (Beta) |
| [#24233](https://github.com/anomalyco/opencode/pull/24233) | **fix(provider): honor per-model reasoning token pricing** | Fixes cost accounting to use per-model reasoning token prices instead of hardcoded output rates. | 🔄 Open |
| [#24232](https://github.com/anomalyco/opencode/pull/24232) | **fix(session): honor noCacheTokens in usage accounting** | Properly handles cached tokens from DeepSeek/Moonshot providers in usage calculations. | 🔄 Open |
| [#24218](https://github.com/anomalyco/opencode/pull/24218) | **fix(provider): auto-enable interleaved for reasoning models** | Automatically enables interleaved capability for models configured with reasoning: true. | 🔄 Open |
| [#24228](https://github.com/anomalyco/opencode/pull/24228) | **Add Roslyn support for Razor and C# scripts** | Extends C# LSP support to .csx files and adds Razor LSP entry. | ✅ Merged |
| [#18767](https://github.com/anomalyco/opencode/pull/18767) | **feat(app): Mobile Touch Optimization** | Optimizes OpenCode App for mobile/touch devices while preserving desktop experience. | 🔄 Open |

---

## Feature Request Trends

The most-requested feature directions emerging from recent issues:

1. **Background Task Execution** — Multiple requests (#1970, #9714, #18372) ask for Claude Code-style async bash execution so long-running tasks don't block the agent.

2. **Enhanced Model Support** — Growing demand for GPT-5.5 (#24039), Qwen3.5/3.6 Plus (#22677), and better DeepSeek V4 integration.

3. **Multi-Account & OAuth** — Users want multiple OAuth accounts per provider with automatic credential rotation (#11832).

4. **Mobile/Web Improvements** — Requests for mobile touch optimization (#18767) and automatic project sync in web UI (#13626).

5. **Provider Flexibility** — Native LiteLLM provider with auto model discovery (#14468) to reduce manual configuration.

---

## Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **DeepSeek V4 reasoning_content errors** | 🔴 High (8+ related issues) | Multi-turn conversations fail; blocks production use of DeepSeek V4 Pro/Flash |
| **Tool descriptions consuming excessive tokens** | 🟡 Medium (#11995) | ~3,000-4,000 tokens wasted per message in system prompts |
| **WSL1 compatibility regression** | 🟡 Medium (#24081) | v1.14.21+ broken on WSL1 with "Exec format error" |
| **Plugin event bus issues** | 🟡 Medium (#14808) | Custom plugins can't receive session events, breaking memory systems |
| **Auto-compaction clearing todos** | 🟡 Medium (#5934) | Session todo lists lost after compaction, disrupting workflow |
| **LSP stopped working** | 🟡 Medium (#23937) | Since v1.14.20, LSP features fail despite documentation claiming they're enabled by default |

---

*Generated: 2026-04-25 | Data source: github.com/anomalyco/opencode*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest

**Date:** 2026-04-25
**Repository:** github.com/QwenLM/qwen-code

---

## 1. Today's Highlights

The Qwen Code community saw significant activity with the release of **v0.15.2**, featuring auto-titling sessions and ReadFile parameter fixes. A contentious policy discussion emerged around OAuth free tier changes (#3203, 119 comments), while the team merged a major performance optimization reducing runtime sync I/O by 91% (#3581). Several new PRs target UX improvements including sticky todo panels, session preview affordances, and parallelized skill loading.

---

## 2. Releases

### v0.15.2
**Release Date:** 2026-04-25

**Key Changes:**
- **fix(core):** Treat empty 'pages' parameter as unset in ReadFile (#3559)
- **feat(session):** Auto-title sessions via fast model, add `/rename --auto` command (#3540)
- **fix(i18n):** Sync mi (internationalization updates)

**Reference:** https://github.com/QwenLM/qwen-code/releases/tag/v0.15.2

---

## 3. Hot Issues

### 1. **#3203 - OAuth Free Tier Policy Adjustment** (119 comments)
**Author:** @pomelo-nwu | **Status:** OPEN

The community is actively debating proposed changes to Qwen OAuth free tier: reducing daily quota from 1,000 to 100 requests and phasing out the free tier entirely by April 20. This high-traffic issue signals significant user concern about accessibility and cost implications.

**Reference:** https://github.com/QwenLM/qwen-code/issues/3203

### 2. **#3520 - Tool Ran Without Output or Errors** (5 comments)
**Author:** @yyangonline | **Status:** OPEN

Users report tools executing silently without producing output or error messages in v0.14.5, making debugging difficult. This impacts reliability expectations for automated workflows.

**Reference:** https://github.com/QwenLM/qwen-code/issues/3520

### 3. **#3579 - DeepSeek API 400 Error in Thinking Mode** (4 comments)
**Author:** @fyc09 | **Status:** CLOSED

Intermittent API errors when using DeepSeek's reasoning_content in thinking mode. The issue was addressed, but highlights integration challenges with third-party providers.

**Reference:** https://github.com/QwenLM/qwen-code/issues/3579

### 4. **#3532 - Local Model Configuration Not Working** (4 comments)
**Author:** @yushuisheng1235 | **Status:** CLOSED

Users struggle to configure local models following official documentation, with authentication prompts persisting despite correct settings. This points to documentation gaps or configuration complexity.

**Reference:** https://github.com/QwenLM/qwen-code/issues/3532

### 5. **#1883 - Security Issue Reporting Path Broken** (3 comments)
**Author:** @FailButWin | **Status:** CLOSED

The security advisory link points to a deprecated Aliyun vulnerability platform where users cannot find the project. This is a critical process gap for responsible disclosure.

**Reference:** https://github.com/QwenLM/qwen-code/issues/1883

### 6. **#3158 - Shell Command Execution with Line Continuations** (2 comments)
**Author:** @c0nstruct0r | **Status:** OPEN

Shell commands with line continuations (`\`) are not being parsed correctly, causing execution failures. A fix is pending in PR #3600.

**Reference:** https://github.com/QwenLM/qwen-code/issues/3158

### 7. **#3595 - Local Model Cannot Recognize Images** (2 comments)
**Author:** @windowsyss | **Status:** OPEN

Users with locally deployed Qwen3.6-35B-A3B report that image reading fails despite the model supporting vision capabilities. This suggests integration issues between local deployments and tool execution.

**Reference:** https://github.com/QwenLM/qwen-code/issues/3595

### 8. **#3580 - Plugin System with Auto-Install and Hooks** (2 comments)
**Author:** @ZevGit | **Status:** OPEN

Feature request for a comprehensive plugin system with auto-installation and hook support, indicating demand for extensibility beyond the current extension model.

**Reference:** https://github.com/QwenLM/qwen-code/issues/3580

### 9. **#3566 - /skills list Causes React Error** (2 comments)
**Author:** @thekingofspain | **Status:** OPEN

The `/skills list` command triggers a "Maximum update depth exceeded" React error, causing the CLI to get stuck in a loop. This is a blocking bug for skill management.

**Reference:** https://github.com/QwenLM/qwen-code/issues/3566

### 10. **#3582 - Improve Custom API Key Setup in /auth** (1 comment)
**Author:** @pomelo-nwu | **Status:** OPEN

Current `/auth` flow for custom API keys lacks guidance, requiring users to manually understand settings.json and modelProviders configuration. Better UX is needed for multi-provider setups.

**Reference:** https://github.com/QwenLM/qwen-code/issues/3582

---

## 4. Key PR Progress

### 1. **#3581 - perf(core): Cut Runtime Sync I/O by 91%** ✅ MERGED
**Author:** @wenshao

Major performance improvement: eliminated 4 synchronous fs syscalls (`existsSync`, `mkdirSync`, `appendFileSync`) on every recorded event in the tool hot path. This significantly reduces latency for tool-heavy prompts.

**Reference:** https://github.com/QwenLM/qwen-code/pull/3581

### 2. **#3598 - feat(cli): Add --json-schema for Structured Output** 🆕 OPEN
**Author:** @wenshao

Introduces `--json-schema '<json>'` flag in headless mode that registers a synthetic `structured_output` tool. The model must call it to deliver results, enabling reliable structured data extraction.

**Reference:** https://github.com/QwenLM/qwen-code/pull/3598

### 3. **#3605 - feat: Space-to-Preview in /resume Session Picker** 🆕 OPEN
**Author:** @qqqys

Adds preview functionality to the session picker: press Space on any row to inline-render the conversation, Enter to resume, Esc to cancel. Includes narrow terminal handling.

**Reference:** https://github.com/QwenLM/qwen-code/pull/3605

### 4. **#3570 - feat(core): Add Simplify Bundled Skill** 🆕 OPEN
**Author:** @pomelo-nwu

Introduces a bundled `simplify` skill for structured cleanup of recent changes. Covers bundled skill discovery and slash-command loading behavior.

**Reference:** https://github.com/QwenLM/qwen-code/pull/3570

### 5. **#3507 - feat(cli): Add Sticky Todo Panel** 🆕 OPEN
**Author:** @shenyankm

Adds a persistent todo panel to CLI layouts, keeping the latest task list visible during conversations. Addresses request #2987 for easier task progress tracking.

**Reference:** https://github.com/QwenLM/qwen-code/pull/3507

### 6. **#3604 - feat(skills): Parallelize Loading + Path-Conditional Activation** 🆕 OPEN
**Author:** @wenshao

Performance optimization replacing nested `for-await` loops with `Promise.all` for skill discovery. Also introduces path-conditional skill activation for context-aware loading.

**Reference:** https://github.com/QwenLM/qwen-code/pull/3604

### 7. **#3591 - fix(cli): TUI Flicker Foundation Fixes** 🆕 OPEN
**Author:** @chiga0

Consolidated PR superseding multiple stacked PRs (#3584, #3586, #3587, #3588) focusing on foundation-layer fixes for TUI flicker and repeated-output mitigation.

**Reference:** https://github.com/QwenLM/qwen-code/pull/3591

### 8. **#3576 - feat: OpenRouter Auth + Model Catalog** 🆕 OPEN
**Author:** @pomelo-nwu

Adds browser-based OpenRouter OAuth setup from `/auth`, automatic API key storage, model catalog fetching, and curated recommended model subset by default.

**Reference:** https://github.com/QwenLM/qwen-code/pull/3576

### 9. **#3538 - feat(cli,core): LLM-Generated Summary Labels** 🆕 OPEN
**Author:** @wenshao

When the model fans out parallel tool calls, the UI now shows synthesized "why" descriptions instead of mechanical tool names. Includes compact mode (`Ctrl+O`) collapsing.

**Reference:** https://github.com/QwenLM/qwen-code/pull/3538

### 10. **#3600 - fix(core): Handle Shell Line Continuations** 🆕 OPEN
**Author:** @Jerry2003826

Fixes #3158 by treating shell line continuations (`\` followed by LF/CRLF) as removed during command splitting, while preserving normal newline separators.

**Reference:** https://github.com/QwenLM/qwen-code/pull/3600

---

## 5. Feature Request Trends

Analysis of 32 recent issues reveals these dominant feature directions:

| Trend | Frequency | Description |
|-------|-----------|-------------|
| **Multi-Provider Flexibility** | High | Support multiple API providers for same model (#3555), improved auth flows (#3582), OpenRouter integration (#3576) |
| **Extensibility** | High | Plugin system with auto-install (#3580), MCP HTTP/SSE support (#3549, #3472), concurrent subagent limits (#3568) |
| **UX Polish** | Medium | Copy response button (#3052), session preview (#3605), sticky todo panel (#3507), conversation rewind (#3441) |
| **Local Model Support** | Medium | Better local deployment configuration (#3532), image recognition fixes (#3595, #3597), Bun runtime support (#2838) |
| **Observability** | Medium | Model billing/cost tracking (#3585), AI contribution attribution (#3115), tool call summaries (#3538) |
| **ACP Mode Enhancements** | Low-Medium | Concurrent tool execution (#2516), delegation layer for subagents (#2332), remote control (#1946) |

---

## 6. Developer Pain Points

### Authentication & Configuration Complexity
- **#3532:** Local model configuration remains confusing despite documentation
- **#3582:** Custom API key setup requires manual settings.json editing
- **#3524:** 401 errors persist even with seemingly correct credentials
- **#1883:** Security reporting path is broken

### Image/Vision Handling
- **#3595, #3597:** Local models with vision capabilities cannot read images via ReadFile tool
- **#3579:** DeepSeek API 400 errors in thinking mode with reasoning_content

### UI/UX Friction
- **#3566:** `/skills list` crashes with React infinite loop
- **#3592:** Slash command trigger requires extra backspace on non-first conversations
- **#3095:** Extra blank line below status bar wastes screen space
- **#3528:** Ctrl+C produces garbled output and slow response

### Tool Reliability
- **#3520:** Tools execute silently without output or errors
- **#3158:** Shell commands with line continuations fail
- **#1704:** Stream retry causes duplicate output

### Performance
- **TUI flicker** remains a reported issue (addressed in #3591)
- Skill loading performance improvements in progress (#3604)

---

*Digest generated from github.com/QwenLM/qwen-code activity on 2026-04-25*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-04-25

## Today's Highlights

The pi-mono project shipped **v0.70.1** and **v0.70.2** in the last 24 hours, introducing official DeepSeek V4 provider support with Flash/Pro models and provider-level timeout/retry controls. A significant cluster of DeepSeek V4–related bug fixes landed across the codebase, addressing `reasoning_content` handling, xhigh reasoning support, and model switching edge cases. The community also saw progress on UX improvements including a new built-in update command and session-only model selection settings.

---

## Releases

### v0.70.2
**Fix:** Provider retry/timeout forwarding now omits undefined provider request controls, preventing downstream SDK validation errors such as `timeout must be an integer` when `retry.provider.timeoutMs` is not configured.
🔗 https://github.com/badlogic/pi-mono/releases/tag/v0.70.2

### v0.70.1
**New Features:**
- DeepSeek provider support with V4 Flash/Pro models and `DEEPSEEK_API_KEY` authentication
- Provider request timeout/retry controls via `retry.provider.{timeoutMs,retries}`

🔗 https://github.com/badlogic/pi-mono/releases/tag/v0.70.1

---

## Hot Issues

| # | Title | Comments | Why It Matters |
|---|-------|----------|----------------|
| [#3636](https://github.com/badlogic/pi-mono/issues/3636) | Deepseek 4: Error 400 `reasoning_content` in thinking mode must be passed back | 9 | Critical API compatibility issue causing session crashes; multiple users hit this during debugging |
| [#2023](https://github.com/badlogic/pi-mono/issues/2023) | Add `pi.runWhenIdle()` to schedule work after agent settles | 7 | Long-standing feature request for better extension lifecycle control; 7 comments indicate strong demand |
| [#3543](https://github.com/badlogic/pi-mono/issues/3543) | Remove URL gates around long cache retention | 5 | Users behind proxies couldn't use `PI_CACHE_RETENTION=long`; workaround needed for enterprise environments |
| [#3630](https://github.com/badlogic/pi-mono/issues/3630) | Latex Formatting in markdown rendering | 4 | Math rendering would improve readability for technical documentation; community wants built-in support |
| [#3648](https://github.com/badlogic/pi-mono/issues/3648) | ctrl-c not captured when macOS IME is on | 4 | International users (Zhuyin input) can't interrupt sessions; affects prompt bar, tree search, model toggle |
| [#3254](https://github.com/badlogic/pi-mono/issues/3254) | Add setting to prevent `/model` from overwriting persistent default | 3 | Model switches silently change defaults; users want session-only changes for one-off tasks |
| [#3684](https://github.com/badlogic/pi-mono/issues/3684) | Feature Request: `/retry` command | 3 | OpenAI API limits cause random failures; a retry command would improve reliability |
| [#3619](https://github.com/badlogic/pi-mono/issues/3619) | `google-vertex` forward `model.baseUrl` to `@google/genai` httpOptions | 3 | Vertex adapter doesn't honor `baseUrl`, blocking proxy/gateway usage; inconsistent with other providers |
| [#3675](https://github.com/badlogic/pi-mono/issues/3675) | Ctrl+G doesn't work but flickers on longer messages | 3 | Jump-to-bottom shortcut fails intermittently on long messages; UX regression |
| [#3653](https://github.com/badlogic/pi-mono/issues/3653) | Redesign Logo for Improved Balance | 3 | Community feedback that current logo resembles "R" more than "Pi"; visual identity concern |

---

## Key PR Progress

| # | Title | Status | Impact |
|---|-------|--------|--------|
| [#3687](https://github.com/badlogic/pi-mono/pull/3687) | Regenerate models to include deepseek-v4-pro on opencode-go | Closed | Adds 14 new models including deepseek-v4-pro and deepseek-v4-flash |
| [#3680](https://github.com/badlogic/pi-mono/pull/3680) | Add built-in update command | Open | Makes `pi update` self-update the CLI; enables automatic version management |
| [#3678](https://github.com/badlogic/pi-mono/pull/3678) | Honor Fireworks Anthropic tool compat | Open | Fixes errors when using Fireworks API provider with any Fireworks model |
| [#1157](https://github.com/badlogic/pi-mono/pull/1157) | Add Anthropic Vertex AI provider | Closed | Adds `anthropic-vertex` API type using GoogleAuth (ADC); registers Opus 4.5, Sonnet 4, 3.5 Sonnet v2, 3.5 Haiku |
| [#3669](https://github.com/badlogic/pi-mono/pull/3669) | Repopulate editor prompt history on `/reload` | Closed | Fixes broken up-arrow history after reload; improves session continuity |
| [#3664](https://github.com/badlogic/pi-mono/pull/3664) | Fall back to placeholder for empty Anthropic `tool_use.id` | Closed | Prevents API rejections for malformed tool call IDs |
| [#3661](https://github.com/badlogic/pi-mono/pull/3661) | Add xhigh reasoning support for DeepSeek V4 Pro | Closed | Enables `reasoning_effort=max` for complex agent workloads |
| [#3659](https://github.com/badlogic/pi-mono/pull/3659) | Inject empty `reasoning_content` for DeepSeek tool-call history | Closed | Fixes 400 errors when DeepSeek V4 thinking mode requires the field |
| [#3656](https://github.com/badlogic/pi-mono/pull/3656) | Preserve actual `reasoning_content` on DeepSeek assistant replay | Closed | Maintains conversation continuity by carrying forward reasoning blocks |
| [#3632](https://github.com/badlogic/pi-mono/pull/3632) | Add `persistModelChanges` setting | Closed | New setting (default true) allows session-only model selection without overwriting defaults |

---

## Feature Request Trends

Analysis of 50 issues reveals these dominant themes:

1. **DeepSeek V4 Integration** — Multiple issues around `reasoning_content` handling, model switching, and thinking mode support; the community is actively adopting DeepSeek V4 Pro/Flash models.

2. **Model Selection Persistence** — Strong demand for session-only model changes that don't overwrite persistent defaults (#3254, #3632).

3. **Extension & API Lifecycle** — Requests for `pi.runWhenIdle()` (#2023), programmatic session switching, and exposing session control methods to extensions.

4. **Internationalization & Input Methods** — macOS IME compatibility issues blocking ctrl-c and other shortcuts for non-Latin input users.

5. **Provider Flexibility** — Requests for Azure Foundry support, Vertex AI baseUrl forwarding, and OpenRouter compatibility.

6. **UX Refinements** — Jump-to-bottom shortcut reliability, LaTeX rendering, logo redesign, and clipboard image paste support.

---

## Developer Pain Points

| Pain Point | Frequency | Details |
|------------|-----------|---------|
| DeepSeek V4 `reasoning_content` errors | High | 400 errors when switching models or replaying history without proper `reasoning_content` fields |
| Timeout/retry configuration | Medium | Default 10-minute timeout unusable for local inference; no exposed provider-level controls (fixed in v0.70.2) |
| Windows path handling | Medium | Plugin installation fails when paths contain spaces (e.g., `C:\Users\<First Last>\...`) |
| Model selection side effects | Medium | `/model` and Ctrl+P silently overwrite persistent defaults; no way to make session-only changes (now addressed) |
| Editor history loss | Medium | Prompt history not repopulated after `/reload`; breaks workflow continuity |
| Context window handling | Medium | GPT-5.5 throws errors beyond 272k tokens despite 400k stated limit; auto-compaction triggers incorrectly |
| Provider baseUrl inconsistency | Low-Medium | `google-vertex` doesn't forward `model.baseUrl`, unlike other adapters; blocks proxy usage |

---

*Digest generated from github.com/badlogic/pi-mono activity on 2026-04-25*

</details>

---
*This digest is auto-generated by [Radar Forge](https://github.com/borq168/radar-forge).*
