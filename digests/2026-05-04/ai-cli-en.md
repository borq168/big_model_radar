# AI CLI Tools Community Digest 2026-05-04

> Generated: 2026-05-04 02:02 UTC | Tools covered: 8

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

**Date:** 2026-05-04
**Scope:** Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Qwen Code, Pi

---

## 1. Ecosystem Overview

The AI CLI tools landscape is experiencing intense competition among eight major platforms, with Anthropic's Claude Code, OpenAI's Codex, and Google's Gemini CLI commanding the most community attention. Chinese AI providers (Moonshot's Kimi Code, Alibaba's Qwen Code) are rapidly iterating with aggressive feature releases, while independent projects like OpenCode and Pi demonstrate the ecosystem's extensibility. Today's activity reveals a maturing market where differentiation hinges on platform reliability (Windows/Linux support), provider flexibility (multi-model routing), and agent robustness (session persistence, memory management). No tool released new versions in the last 24 hours, suggesting a consolidation phase following recent feature pushes.

---

## 2. Activity Comparison

| Tool | Issues (Total) | Issues (24h) | PRs (24h) | Releases (24h) | Community Engagement |
|------|----------------|--------------|-----------|----------------|----------------------|
| **Claude Code** | 50 | 5 | 5 | 0 | High — 73 comments on top issue |
| **OpenAI Codex** | 50 | 10 | 15 | 0 | High — 45 comments on top issue |
| **Gemini CLI** | 50 | 10 | 15 | 0 | Medium — 5 comments on top issue |
| **Copilot CLI** | 13 | 13 | 0 | 0 | Low — 8 comments on top issue |
| **Kimi Code CLI** | 8 | 8 | 1 | 0 | Low — 3 comments on top issue |
| **OpenCode** | 50 | 10 | 50 | 0 | High — 73 comments on top issue |
| **Qwen Code** | 13 | 13 | 44 | 1 | High — 121 comments on top issue |
| **Pi** | 34 | 34 | 8 | 0 | Medium — 11 comments on top issue |

**Key Observations:**

- **Qwen Code** leads in PR velocity (44 PRs) and release cadence (1 nightly release), signaling aggressive development.
- **OpenCode** shows the highest PR-to-issue ratio (50 PRs), indicating strong pull-based contribution.
- **Copilot CLI** and **Kimi Code CLI** exhibit low activity, with Copilot CLI showing zero PRs in 24 hours.
- **Claude Code**, **OpenCode**, and **Qwen Code** generate the most community discussion, with issues exceeding 70 comments.

---

## 3. Shared Feature Directions

The following requirements appear across multiple tool communities, indicating industry-wide priorities:

| Feature Direction | Tools Affected | Specific Needs |
|-------------------|----------------|----------------|
| **Multi-Provider Flexibility** | Claude Code, Codex, Copilot CLI, Pi | Support for third-party models (DeepSeek, LM Studio, Ollama, NVIDIA NIM); provider-specific authentication (OAuth, API keys) |
| **Session Persistence & Recovery** | Claude Code, Gemini CLI, OpenCode, Qwen Code | Mid-session context preservation; session archival; recovery from crashes or disconnects |
| **MCP (Model Context Protocol) Integration** | Claude Code, Gemini CLI, Copilot CLI, OpenCode, Pi | Dynamic server discovery; protocol compliance (Streamable HTTP, Accept headers); plugin event reliability |
| **Cross-Platform Reliability** | Claude Code, Codex, Gemini CLI, Pi | Windows/WSL clipboard support; Linux sandbox stability; macOS auto-update; PowerShell encoding |
| **Agent Orchestration** | Claude Code, Gemini CLI, OpenCode, Qwen Code | Subagent session visibility; background task management; multi-agent collaboration (agent-teams) |
| **Memory & Context Management** | Claude Code, Gemini CLI, OpenCode, Qwen Code | Global vs. project-level memory; auto-compaction; token budget optimization |
| **Permission & Security Models** | Claude Code, Gemini CLI, Copilot CLI | Settings.json rule enforcement; auto-approval hooks; Keychain credential management |
| **Model Routing & Selection** | Codex, Copilot CLI, Kimi Code, Pi | Per-agent model selection; fast-model vs. main-model separation; free-tier model resolution |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target Users | Technical Approach |
|------|---------------|--------------|-------------------|
| **Claude Code** | Plugin ecosystem, session resilience | Pro/Max subscribers; enterprise | BypassPermissions mode; session-persist plugins; MCP server integration |
| **OpenAI Codex** | Cross-platform desktop, enterprise SSO | Windows/Linux developers; GitHub Copilot users | Remote Control (mobile); frodex internal refactoring; fork/prompt caching |
| **Gemini CLI** | Agent behavior, behavioral evals | Google Cloud users; AI researchers | Component-level eval framework (76 tests); watchdog runtime; role-aware prompts |
| **Copilot CLI** | Provider flexibility, MCP integration | Multi-provider workflows; CLI enthusiasts | MCP server loading; model list commands; global hooks |
| **Kimi Code CLI** | Skill discovery, extensibility | Chinese developers; Codex migrants | Recursive skill loading; configurable task limits; hook-based automation |
| **OpenCode** | Memory stability, tool calling | Power users; multi-model setups | FileReadCache; SSE replay buffers; native LLM core (Effect-based) |
| **Qwen Code** | Performance, daemon mode | Production deployments; Chinese market | FileReadCache optimization; background task phases; OpenTelemetry hardening |
| **Pi** | Provider integration, transport reliability | Multi-provider users; nix ecosystem | WebSocket-to-SSE fallback; retry logic; profile isolation |

**Strategic Positioning:**

- **Claude Code** differentiates via a mature plugin marketplace and subscription-tier features.
- **OpenAI Codex** leverages GitHub integration and enterprise SSO for corporate adoption.
- **Gemini CLI** targets researchers with eval tooling and role-prompt customization.
- **Chinese tools (Kimi, Qwen)** compete on rapid iteration and local model support.
- **OpenCode** and **Pi** serve power users seeking provider-agnostic, extensible solutions.

---

## 5. Community Momentum & Maturity

| Tool | Momentum | Maturity Indicators |
|------|----------|---------------------|
| **Qwen Code** | 🔥 Rapid | Highest PR velocity (44/24h); nightly releases; active OAuth policy debate (121 comments) |
| **OpenCode** | 🔥 Rapid | 50 PRs in 24h; native LLM core development; mobile optimization in progress |
| **Claude Code** | ⚡ Strong | Established plugin ecosystem; session-persist plugins; 5 active PRs |
| **OpenAI Codex** | ⚡ Strong | frodex refactoring wave; Linux desktop demand (105 👍); multi-provider roadmap |
| **Gemini CLI** | ⚡ Strong | Behavioral eval expansion; watchdog runtime; 15 PRs |
| **Pi** | 📊 Moderate | 8 closed PRs; provider integration focus; retry logic hardening |
| **Copilot CLI** | 📉 Low | Zero PRs; limited community discussion; feature requests stalled |
| **Kimi Code CLI** | 📉 Low | 1 PR; 8 issues; skill discovery still incomplete |

**Assessment:**

- **Qwen Code** and **OpenCode** are the most actively developed, with Qwen Code showing the highest release cadence.
- **Claude Code** and **OpenAI Codex** maintain strong communities but face platform-specific reliability challenges.
- **Copilot CLI** and **Kimi Code CLI** appear to be in maintenance mode or lack community traction.

---

## 6. Trend Signals

The following industry trends emerge from community feedback, offering strategic value for developers and decision-makers:

### 6.1 Agent Reliability Is Table Stakes
Session persistence, crash recovery, and subagent management are no longer optional—communities across Claude Code, Gemini CLI, OpenCode, and Qwen Code are actively demanding these features. Tools that fail to deliver stable agent behavior will lose credibility.

### 6.2 Multi-Provider Flexibility Is a Competitive Moat
Users increasingly expect seamless switching between OpenAI, Anthropic, Google, DeepSeek, LM Studio, Ollama, and emerging providers (NVIDIA NIM, Featherless AI). Tools that lock users into a single provider face backlash (see Copilot CLI issue #987, Codex issue #2995).

### 6.3 Cross-Platform Quality Lags User Expectations
Windows/WSL and Linux users report persistent issues: clipboard failures, sandbox regressions, PowerShell encoding bugs, and auto-update failures. This represents a significant gap between macOS-optimized tools and the broader developer base.

### 6.4 MCP Is Becoming a Standard Integration Layer
Model Context Protocol adoption is accelerating across all tools, but implementations vary in compliance. Issues around Accept headers (Pi #25654), dynamic server discovery (Copilot CLI #3083), and event bus reliability (OpenCode #14808) indicate the protocol is still maturing.

### 6.5 Security and Dependency Management Are Under-Served
Outdated dependencies (Pillow CVE in Kimi Code #2153), Keychain credential leaks (Claude Code #55916), and OAuth URL errors (Pi #4137) highlight a need for automated security auditing and dependency update workflows.

### 6.6 Enterprise Features Drive Premium Adoption
SSO authentication (Codex #20161), subscription quota visibility (Copilot CLI #768), and workspace isolation (Pi #3966) are key differentiators for paid tiers. Tools that ignore enterprise needs risk commoditization.

### 6.7 Performance Optimization Is Emerging as a Battleground
FileReadCache (Qwen Code, OpenCode), AST-aware file reads (Gemini CLI #22745), and O(n²) bash streaming fixes (Pi #4145) indicate that as token costs rise, tools are competing on efficiency rather than raw capability.

---

**Conclusion:**

The AI CLI ecosystem is transitioning from feature parity competition to reliability and extensibility differentiation. Tools that deliver stable cross-platform experiences, support multi-provider flexibility, and provide enterprise-grade security will capture the next wave of adoption. Developers should monitor Qwen Code and OpenCode for rapid innovation, while Claude Code and OpenAI Codex remain relevant for established user bases.

---

*Report generated: 2026-05-04 | Data sources: GitHub repositories for each tool*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-05-04

## Today's Highlights

The Claude Code community is actively addressing cross-platform compatibility issues, with WSL clipboard support and macOS auto-update failures generating significant discussion. A new session-persist plugin PR offers a client-side solution for mid-session context loss, while multiple subscription recognition bugs suggest underlying auth system inconsistencies that need attention.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

**1. Session Disappeared After Logout/Restart — Critical UX Bug** [#26452](https://github.com/anthropics/claude-code/issues/26452)
*41 comments, 21 👍*
Users report complete session loss when logging out or restarting the Claude Code Desktop app, with no clear recovery path. This is the most-discussed issue and represents a significant data-loss risk for active developers.

**2. Clipboard Image Paste Not Working in WSL** [#13738](https://github.com/anthropics/claude-code/issues/13738)
*33 comments, 41 👍*
A long-standing cross-platform bug preventing image paste in Windows Subsystem for Linux environments. High engagement indicates this is a common blocker for Windows developers using WSL.

**3. Claude Max 20x Subscription Not Recognized** [#31012](https://github.com/anthropics/claude-code/issues/31012)
*25 comments, 6 👍*
Users with paid Claude Max 20x plans are incorrectly identified as Free tier, blocking access to Pro/Max-required features. A duplicate report [#54588](https://github.com/anthropics/claude-code/issues/54588) confirms this is a systemic auth issue.

**4. Auto-Update Failed on macOS** [#996](https://github.com/anthropics/claude-code/issues/996)
*17 comments, 22 👍*
Auto-update mechanism consistently fails on macOS, requiring manual intervention via `claude doctor` or npm reinstallation. Users are stuck on outdated versions.

**5. Desktop App Ignores settings.json Permissions** [#29026](https://github.com/anthropics/claude-code/issues/29026)
*16 comments, 25 👍*
The desktop app disregards `permissions.allow` rules and `defaultMode: "bypassPermissions"` in `~/.claude/settings.json`, forcing constant permission prompts on macOS.

**6. Remote Control: AskUserQuestion Selections Not Received** [#28508](https://github.com/anthropics/claude-code/issues/28508)
*11 comments, 8 👍*
Mobile selections in Remote Control mode aren't received by the CLI, causing infinite wait states. Affects users relying on cross-device workflows.

**7. Weekly Usage Warning Re-appears Every Turn** [#55835](https://github.com/anthropics/claude-code/issues/55835)
*1 comment, 0 👍*
Desktop app shows dismissed usage warnings repeatedly, disrupting workflow. Recently filed with reproduction steps.

**8. Keychain Credential Storage Leaks Orphaned Entries** [#55916](https://github.com/anthropics/claude-code/issues/55916)
*1 comment, 0 👍*
Repeated `/login` commands accumulate orphaned Keychain entries (~85 in 10 days), causing credential storage warnings.

**9. MCP Tool Result content[].text Dropped** [#55677](https://github.com/anthropics/claude-code/issues/55677)
*3 comments, 0 👍*
When MCP tools return both `content[].text` and `structuredContent`, the text portion is lost, breaking tools that rely on it.

**10. Agent Worktree Isolation Leaks cwd** [#52958](https://github.com/anthropics/claude-code/issues/52958)
*4 comments, 2 👍*
Subagent worktree isolation fails mid-session, causing parent checkout to destroy untracked files during git operations.

---

## Key PR Progress

**1. Session-Persist Plugin for Client-Side State Preservation** [#55864](https://github.com/anthropics/claude-code/pull/55864)
A new plugin offering a client-side workaround for mid-session context loss. Serves as a stopgap until server-side session persistence is implemented.

**2. Warning Against npm update -g for Global Upgrades** [#55857](https://github.com/anthropics/claude-code/pull/55857)
Documentation PR alerting users that `npm update -g` can wipe the entire `node_modules` directory in certain npm versions, breaking the Node environment.

**3. Fix False-Positive Update Banner** [#55834](https://github.com/anthropics/claude-code/pull/55834)
Addresses the "Update available!" banner firing incorrectly for Homebrew and WinGet users by checking npm registry regardless of installation method.

**4. Remove Stray Content from plugin-validator.md** [#55832](https://github.com/anthropics/claude-code/pull/55832)
Cleans up accidental conversation content from documentation file, restoring proper formatting.

**5. Document --exclude-dynamic-system-prompt-sections** [#46024](https://github.com/anthropics/claude-code/pull/46024) *(Closed)*
Added README documentation for print mode prompt caching, explaining how the flag optimizes cache reuse by moving dynamic sections.

---

## Feature Request Trends

| Category | Requests | Examples |
|----------|----------|----------|
| **Plugin System** | High | Plugin dependencies and shared resources ([#9444](https://github.com/anthropics/claude-code/issues/9444)), MCP tool display controls ([#55696](https://github.com/anthropics/claude-code/issues/55696)) |
| **CLI Enhancements** | High | `claude model list` command for programmatic model queries ([#12612](https://github.com/anthropics/claude-code/issues/12612)), scoped `/insights` ([#41199](https://github.com/anthropics/claude-code/issues/41199)) |
| **MCP Improvements** | Medium | claude.ai-connected MCP integrations ([#55914](https://github.com/anthropics/claude-code/issues/55914)), persistent plugin data ([#51398](https://github.com/anthropics/claude-code/issues/51398)) |
| **Computer Use** | Emerging | CUA Driver support for window-scoped automation ([#55496](https://github.com/anthropics/claude-code/issues/55496)) |
| **Permissions** | Medium | Worktree-specific permission handling ([#38914](https://github.com/anthropics/claude-code/issues/38914)) |

---

## Developer Pain Points

1. **Session Persistence** — Mid-session context loss when closing windows or restarting; no built-in recovery mechanism.

2. **Cross-Platform Clipboard** — Image paste functionality inconsistent across Windows/WSL/macOS environments.

3. **Permission Configuration** — Settings.json rules ignored in desktop app; worktree-specific permission prompts despite global allow rules.

4. **Auto-Update Failures** — Update mechanism broken on macOS; false-positive update banners for Homebrew/WinGet users.

5. **Subscription Recognition** — Claude Max 20x plans not recognized, blocking Pro-tier features.

6. **Hook Context Injection** — PreToolUse/PostToolUse hooks dropping context-injection channels in recent versions ([#55889](https://github.com/anthropics/claude-code/issues/55889)).

7. **MCP Integration** — claude.ai-connected MCP servers showing "Connected" but exposing zero tools; plugin data not persisting across conversations.

8. **Cowork Desktop** — Stale FUSE cache causing silent file corruption; `${CLAUDE_PLUGIN_DATA}` scoped per-conversation instead of persistent.

---

*Generated 2026-05-04 | Data source: github.com/anthropics/claude-code*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest

**Date:** 2026-05-04
**Source:** github.com/openai/codex

---

## 1. Today's Highlights

The Codex community is actively addressing platform-specific regressions, with notable focus on Linux sandbox failures and Windows desktop stability. A significant wave of "Frodex" internal refactoring PRs is underway, introducing custom model support, watchdog runtime handles, and improved fork behavior. Authentication issues around phone number requirements for SSO users remain the most-discussed topic, signaling a potential friction point for enterprise deployments.

---

## 2. Releases

**No new releases in the last 24 hours.**

---

## 3. Hot Issues

| # | Issue | Summary | Community Impact |
|---|-------|---------|------------------|
| 1 | **[#20161](https://github.com/openai/codex/issues/20161)** - Phone number requirement for SSO | Users on SSO accounts are forced to add a phone number when logging in on new devices, blocking access entirely. | **45 comments, 38 👍** — High visibility; affects enterprise users with SSO-only accounts. |
| 2 | **[#11023](https://github.com/openai/codex/issues/11023)** - Linux desktop app request | User unable to use Codex desktop on Linux due to power consumption issues on Mac; requests native Linux build. | **44 comments, 105 👍** — Strong demand for cross-platform parity; one of the most upvoted enhancement requests. |
| 3 | **[#14919](https://github.com/openai/codex/issues/14919)** - Linux bubblewrap sandbox failure | Regression in v0.115.0 causes `bwrap: loopback: Failed RTM_NEWADDR` errors, breaking sandbox execution on Ubuntu 24.04. | **40 comments, 42 👍** — Critical regression blocking Linux developers; subagents cannot execute commands. |
| 4 | **[#987](https://github.com/openai/codex/issues/987)** - Can't use other provider models | Users cannot select third-party models (e.g., deepseek-chat) after initial setup; forced back to OpenAI models. | **32 comments, 5 👍** — Limits flexibility for users with multi-provider setups. |
| 5 | **[#11013](https://github.com/openai/codex/issues/11013)** - Model changes to Medium uninstructed | Codex CLI unexpectedly switches model to "Medium" without user consent, degrading output quality. | **30 comments, 7 👍** — Quality regression; users report unexpected behavior mid-session. |
| 6 | **[#12161](https://github.com/openai/codex/issues/12161)** - IDE stuck on "Thinking" | Codex IDE extension hangs indefinitely on "Thinking" state across VS Code, Cursor, and Windsurf on Windows. | **27 comments, 16 👍** — Cross-IDE issue; Windows users experiencing complete workflow blocks. |
| 7 | **[#20501](https://github.com/openai/codex/issues/20501)** - Alt+Enter regression in WSL | Regression in v0.128.0 breaks Alt+Enter newline insertion in VS Code WSL terminal. | **14 comments, 7 👍** — Terminal power users affected; likely quick fix candidate. |
| 8 | **[#9184](https://github.com/openai/codex/issues/9184)** - vi editing mode request | Users request vim-style keybindings in the TUI, citing Claude Code's implementation as reference. | **8 comments, 40 👍** — Long-standing request with strong community backing. |
| 9 | **[#20547](https://github.com/openai/codex/issues/20547)** - Desktop app sluggish after update | Performance regression in build 26.429.20946 makes UI interactions noticeably slower. | **7 comments, 6 👍** — Recent regression; likely related to recent desktop app changes. |
| 10 | **[#20598](https://github.com/openai/codex/issues/20598)** - Goal setting fails in TUI | `/goal` command returns `thread/goal/set failed` error, preventing goal-based workflows. | **7 comments, 1 👍** — Blocks adoption of goal-oriented automation patterns. |

---

## 4. Key PR Progress

| # | PR | Description | Significance |
|---|-----|-------------|--------------|
| 1 | **[#20915](https://github.com/openai/codex/pull/20915)** - frodex: pin rollout references by segment | Adds `SegmentId` for rollout JSONL segment resolution while keeping `ThreadId` as primary session identity. | Improves rollout management and debugging for ephemeral sessions. |
| 2 | **[#20897](https://github.com/openai/codex/pull/20897)** - Refactor app-server dispatch result flow | Centralizes response handling logic across handlers, clarifying payload vs. notification paths. | Reduces code complexity; improves maintainability of request handling. |
| 3 | **[#20891](https://github.com/openai/codex/pull/20891)** - Enforce Windows protected metadata targets | Applies deny ACLs to protected metadata objects and detects/removes unauthorized creations. | Strengthens Windows sandbox security; closes a platform gap. |
| 4 | **[#20914](https://github.com/openai/codex/pull/20914)** - frodex: restore fork command and debug hooks | Restores `/fork` support in TUI including tmux/zellij pane placement; adds `CODEX_MATERIALIZE_EPHEMERAL_ROLLOUTS` debug flag. | Enables advanced debugging of forked agent sessions. |
| 5 | **[#20913](https://github.com/openai/codex/pull/20913)** - frodex: restore TUI subagent surface | Reintroduces live subagent panel, watchdog status rendering, and completion/close cells. | Improves observability of multi-agent workflows. |
| 6 | **[#20912](https://github.com/openai/codex/pull/20912)** - frodex: synchronize agent control tools | Keeps tool surfaces stable across root/forked/watchdog agents; restores eager watchdog tools. | Ensures consistent tool availability across agent hierarchy. |
| 7 | **[#20911](https://github.com/openai/codex/pull/20911)** - frodex: add custom models and role prompts | Adds `AGENTS.root.md`, `AGENTS.subagent.md`, `AGENTS.watchdog.md` support and `custom_models` configuration. | Major extensibility win; enables role-aware prompt engineering. |
| 8 | **[#20910](https://github.com/openai/codex/pull/20910)** - frodex: add watchdog runtime handles | Implements watchdog as `"agent_type":"watchdog"` singleton with idle scheduling and helper forks. | Formalizes watchdog pattern; improves agent reliability. |
| 9 | **[#20923](https://github.com/openai/codex/pull/20923)** - Add plugin ID to skill analytics | Tracks plugin-provided skills with their IDs through analytics events. | Enables better skill usage insights and plugin ecosystem analytics. |
| 10 | **[#20892](https://github.com/openai/codex/pull/20892)** - Add PR summary statusline items | Adds optional `pull-request-number` and branch context to CLI footer. | Brings IDE-quality PR awareness to terminal workflows. |

---

## 5. Feature Request Trends

Analysis of open and recently closed issues reveals these dominant feature directions:

1. **Cross-Platform Desktop Parity** — Strong demand for native Linux desktop app and improved Windows stability (#11023, #16502).
2. **Multi-Provider Model Flexibility** — Users want seamless switching between OpenAI and third-party models (#987, #5458).
3. **Advanced TUI Editing** — vi/emacs keybinding modes, Shift+Enter for multi-line input, and persistent session state (#9184, #8673, #19984).
4. **Enhanced Context Management** — Include external files in AGENTS.md, better context window handling (#6038, #18052).
5. **Granular Sandbox Control** — Per-command exclusion rules without full bypass permissions (#20917).
6. **Subagent Orchestration** — Better spawn policies, spawn limits, and recovery guidance (#16996, #20908).

---

## 6. Developer Pain Points

The community's most recurring frustrations center on:

- **Authentication Friction** — SSO users blocked by mandatory phone verification (#20161).
- **Linux Sandbox Regressions** — bubblewrap failures breaking core functionality for Linux developers (#14919).
- **Windows Instability** — Desktop app crashes on launch, IDE extensions freezing (#16502, #12161).
- **Model Behavior Unpredictability** — Unprompted model switches and aggressive parallel tool calls (#11013, #14485).
- **Rate Limit Opacity** — Inconsistent quota displays and arbitrary reset cycles (#17764, #16423).
- **TUI Reliability** — Session loss, timer misreporting, and goal-setting failures (#19984, #20598, #20601).

---

*End of digest. Data collected from GitHub activity on 2026-05-04.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest

**Date:** 2026-05-04
**Repository:** [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 1. Today's Highlights

The community is actively addressing Windows reliability issues, with multiple PRs targeting shell hangs, zombie processes, and encoding problems. Agent behavior improvements are gaining traction, including subagent recovery mechanisms, memory routing, and behavioral evaluations. Platform resilience work continues with proxy support fixes and Flash-to-Flash-Lite failover implementation.

---

## 2. Releases

**No new releases in the last 24 hours.**

---

## 3. Hot Issues

| # | Issue | Author | Comments | Why It Matters |
|---|-------|--------|----------|----------------|
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | Robust component level evaluations | @gundermanc | 5 | EPIC tracking expansion of behavioral eval tests (now 76 tests) for 6 supported Gemini models. Critical for regression prevention. |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess AST-aware file reads, search, mapping | @gundermanc | 5 | Investigates precision improvements for method-bound reads and codebase navigation to reduce token noise and tool call turns. |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS hides interruption | @matei-anghel | 4 | **P1 Bug:** Subagent reports GOAL success despite hitting max turn limit, masking failures in codebase investigation tasks. |
| [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) | CLI keeps asking permissions on same file | @nikhilkapoor0919 | 3 | **UX Issue:** Permission persistence fails across sessions, causing repeated prompts for the same files. |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command stuck with "Waiting input" | @rnett | 2 | **Bug:** Commands complete but CLI hangs indefinitely, showing active shell with awaiting input state. |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | Model creates tmp scripts in random spots | @galz10 | 2 | **P2:** When shell execution is restricted, model generates scattered edit scripts, creating cleanup overhead for clean commits. |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent ignores settings.json overrides | @hsm207 | 2 | **Bug:** Browser Agent bypasses global/project-level settings.json configuration, including maxTurns. |
| [#25216](https://github.com/google-gemini/gemini-cli/issues/25216) | EISDIR error on Windows A:\ path | @Florin-Di | 1 | **Edge case:** CLI crashes when encountering Windows drive root paths during realpath operations. |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | 400 error with >128 tools | @gundermanc | 1 | **API limitation:** Agent fails when >400 tools available; needs smarter tool scoping. |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) | Implement memory routing: global vs. project | @SandyTao520 | 1 | **Feature:** Distinguish user preferences (global) from codebase-specific settings (project) for memory subagent. |

---

## 4. Key PR Progress

| # | PR | Author | Area | Status | Summary |
|---|-----|--------|------|--------|---------|
| [#26361](https://github.com/google-gemini/gemini-cli/pull/26361) | Externalize https-proxy-agent | @sotokisehiro | platform | OPEN (P1) | Fixes `TypeError: HttpsProxyAgent is not a constructor` by externalizing from esbuild bundle. |
| [#25684](https://github.com/google-gemini/gemini-cli/pull/25684) | Flash-to-Flash-Lite failover | @kazukinakai | platform | OPEN | Implements runtime failover for improved quota resilience; fixes 7 related issues including infinite rate-limit loops. |
| [#26418](https://github.com/google-gemini/gemini-cli/pull/26418) | Docs audit: 2026-05-04 | @gemini-cli-robot | documentation | OPEN | Auto-generated weekly documentation audit with findings and applied fixes. |
| [#26410](https://github.com/google-gemini/gemini-cli/pull/26410) | Use os.homedir() for home directory warning | @HaleTom | core/security | OPEN (P1) | Fixes incorrect warning triggers in subdirectories by correcting environment variable handling. |
| [#26407](https://github.com/google-gemini/gemini-cli/pull/26407) | Await IDE client initialization | @Akash504-ai | core | OPEN | Fixes race condition where IDE connection wasn't fully established before app initialization resolved. |
| [#25900](https://github.com/google-gemini/gemini-cli/pull/25900) | Prefer pwsh.exe over PowerShell 5.1 | @kaluchi | core | OPEN (P2) | Resolves double-quote stripping issues on Windows by preferring PowerShell 7+ executable. |
| [#26392](https://github.com/google-gemini/gemini-cli/pull/26392) | Resolve Windows hangs and zombie processes | @DovahkiinYuzuko | windows | OPEN | Fixes startup hangs, zombie processes, and improves subagent reliability on Windows. |
| [#26404](https://github.com/google-gemini/gemini-cli/pull/26404) | Stop buffering telemetry when disabled | @genneth | enterprise | OPEN | Prevents unbounded memory growth from buffered closures when telemetry is disabled. |
| [#26358](https://github.com/google-gemini/gemini-cli/pull/26358) | Exit shell mode with backspace | @shkuls | core | OPEN | Adds intuitive backspace-to-exit behavior in shell mode; updates indicator text. |
| [#26401](https://github.com/google-gemini/gemini-cli/pull/26401) | Handle ENAMETOOLONG in robustRealpath | @senutpal | core | OPEN | Prevents unhandled rejection on long @-token pastes by catching ENAMETOOLONG error. |

---

## 5. Feature Request Trends

**Agent Intelligence & Behavior:**
- Memory routing with global vs. project-level persistence ([#22819](https://github.com/google-gemini/gemini-cli/issues/22819))
- Proactive memory writes via updated main agent prompts ([#22809](https://github.com/google-gemini/gemini-cli/issues/22809))
- Discouraging destructive commands (git reset --force, etc.) ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672))
- AST-aware file operations for precision reads ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746))

**Platform & Tooling:**
- Enhanced tracker functionality during replanning ([#24037](https://github.com/google-gemini/gemini-cli/issues/24037))
- Union-find context compaction for history management ([#24736](https://github.com/google-gemini/gemini-cli/pull/24736))
- SSH session detection helper ([#24546](https://github.com/google-gemini/gemini-cli/issues/24546))

**UI/UX Improvements:**
- Multi-level dependency tree indentation ([#22816](https://github.com/google-gemini/gemini-cli/issues/22816))
- Parallel tool call layout clarification ([#24943](https://github.com/google-gemini/gemini-cli/issues/24943))
- Table rendering fix for screen reader accessibility ([#25218](https://github.com/google-gemini/gemini-cli/issues/25218))

---

## 6. Developer Pain Points

**Windows Reliability (High Frequency):**
- Shell commands hanging with "Awaiting input" state ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166))
- PowerShell encoding issues causing scrambled text ([#24202](https://github.com/google-gemini/gemini-cli/issues/24202))
- EISDIR errors on certain path formats ([#25216](https://github.com/google-gemini/gemini-cli/issues/25216))
- Zombie processes and startup delays ([#26392](https://github.com/google-gemini/gemini-cli/pull/26392))

**Permission & Security Model:**
- Repeated permission prompts for same files ([#24916](https://github.com/google-gemini/gemini-cli/issues/24916))
- Subagents running without user permission since v0.33.0 ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093))
- Browser Agent ignoring settings.json security overrides ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267))

**Agent Robustness:**
- Subagent success masking MAX_TURNS failures ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323))
- Model creating temporary scripts in random directories ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571))
- 400 errors with large tool counts ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246))

**UI/Scroll Issues:**
- Screen flashing during long chat scrolling ([#24470](https://github.com/google-gemini/gemini-cli/issues/24470))
- Scrollbar jumping and apparent content loading ([#24470](https://github.com/google-gemini/gemini-cli/issues/24470))

---

*Generated: 2026-05-04 | Data source: [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# Kimi Code CLI Community Digest

**Date:** 2026-05-04
**Source:** github.com/MoonshotAI/kimi-cli

---

## 1. Today's Highlights

The Kimi CLI community is actively addressing skill discovery limitations with a new PR (#2146) that enables recursive loading of nested skill directories, addressing a key compatibility gap with Codex. Multiple feature requests have emerged around extensibility—configurable prompt symbols, background task limits, and hook-based auto-approval mechanisms. A security update for the Pillow dependency has also been requested.

---

## 2. Releases

**No new releases in the last 24 hours.**

---

## 3. Hot Issues

### #1894 | Nested Skill Directory Loading
**Status:** OPEN | **Author:** @retamia | **Comments:** 3
[🔗 View Issue](https://github.com/MoonshotAI/kimi-cli/issues/1894)

Kimi CLI cannot recursively load nested skill directories (e.g., `.agents/skills/{name}/skills/xxx`), while Codex supports this structure. This creates compatibility issues for projects using multi-level skill layouts. The community has shown interest with 3 comments discussing the limitation.

---

### #2157 | Configurable Background Task Limit
**Status:** OPEN | **Author:** @Phantomthedog | **Comments:** 0
[🔗 View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2157)

Users request the ability to configure the hard concurrency limit of 4 background/subagent tasks. When workflows exceed this limit, tasks fail with "too many background tasks" errors instead of being queued. This blocks larger multi-agent workflows and limits the tool's scalability.

---

### #2155 | Configurable Prompt Symbols
**Status:** OPEN | **Author:** @sdkks | **Comments:** 0
[🔗 View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2155)

The TUI prompt symbols (✨ for Agent mode, 💫 for Thinking mode, 📋 for Plan mode) are hardcoded. Users cannot easily type these emojis for searching previous prompts, creating a practical UX friction point. A configuration option in `config.toml` is requested.

---

### #2154 | PermissionRequest Hook Event
**Status:** OPEN | **Author:** @sdkks | **Comments:** 0
[🔗 View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2154)

The current hook system supports `PreToolUse` for blocking dangerous actions, but lacks a `PermissionRequest` event for auto-approving safe, routine operations. Every gated tool call requires manual confirmation, reducing automation potential.

---

### #2153 | Update Pillow to 12.2.0
**Status:** OPEN | **Author:** @azhidkov | **Comments:** 0
[🔗 View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2153)

Pillow 12.1.0 contains CVE-2026-25990 (out-of-bounds write when loading PSD images). The community requests an update to 12.2.0. This is a security-sensitive update blocked in security-tight environments.

---

### #2152 | Global AGENTS.md Support
**Status:** OPEN | **Author:** @lNeverl | **Comments:** 0
[🔗 View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2152)

Currently, `AGENTS.md` is only loaded from the current working directory. Developers managing 10+ projects request support for a global `~/.kimi/AGENTS.md` to define shared conventions across all projects, reducing repetitive configuration.

---

### #1493 | CLI Animation Not Rotating
**Status:** CLOSED | **Author:** @lNeverl | **Comments:** 0
[🔗 View Issue](https://github.com/MoonshotAI/kimi-cli/issues/1493)

A bug report where the CLI animation stops rotating during Kimi execution, making it unclear whether the process is stuck or running. This has been closed, likely addressed in version 1.23.0+.

---

### #2156 | Test Issue
**Status:** CLOSED | **Author:** @Phantomthedog | **Comments:** 0
[🔗 View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2156)

A test issue submitted for validation purposes.

---

## 4. Key PR Progress

### #2146 | Recursive Skill Discovery
**Status:** OPEN | **Author:** @netwmr01
[🔗 View PR](https://github.com/MoonshotAI/kimi-cli/pull/2146)

**Summary:** Implements recursive skill discovery in nested subdirectories. Previously, `discover_skills()` only scanned immediate children, making nested layouts like `.agents/skills/cloudlive/skills/cloudlive-project-layout/SKILL.md` invisible. This PR adds a `_discover_subdir_skills()` helper to address issue #1894.

**Impact:** Brings Kimi CLI to feature parity with Codex for nested skill structures.

---

## 5. Feature Request Trends

Analysis of recent issues reveals these dominant feature directions:

| Trend | Description | Related Issues |
|-------|-------------|----------------|
| **Extensibility & Hooks** | Advanced hook system enhancements for automation and auto-approval | #2154 |
| **Configuration Flexibility** | User-configurable options (prompt symbols, task limits, global AGENTS.md) | #2155, #2157, #2152 |
| **Skill System Parity** | Recursive/nested skill directory support matching Codex behavior | #1894, #2146 |
| **Dependency Security** | Timely updates for vulnerability fixes | #2153 |
| **UX Clarity** | Visual feedback improvements (animation states) | #1493 |

---

## 6. Developer Pain Points

1. **Skill Discovery Limitations**: Nested skill directories are invisible to Kimi CLI, forcing developers to flatten structures or lose functionality available in Codex.

2. **Inflexible Concurrency Limits**: The hard-coded 4-task limit blocks scalable multi-agent workflows without queuing or graceful degradation.

3. **Manual Confirmation Fatigue**: Every gated tool call requires manual approval, reducing automation efficiency even for trusted operations.

4. **Per-Project Configuration Repetition**: No global configuration support means developers repeat shared conventions (AGENTS.md) across multiple projects.

5. **Hardcoded UI Elements**: Prompt symbols cannot be customized, creating friction for users who cannot type emoji characters.

6. **Security Update Lag**: Outdated dependencies (Pillow) block adoption in security-conscious environments.

---

**End of Digest**
*Generated: 2026-05-04*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-04

## Today's Highlights

The OpenCode community is actively addressing critical stability issues, with a major memory megathread gathering 73 comments as contributors collect heap snapshots to diagnose widespread memory problems. New PRs are targeting SSE reconnection reliability and MCP protocol compliance, while feature requests for auto-discovering local models and improved session management continue to gain traction.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

| # | Issue | Author | Comments | Why It Matters |
|---|-------|--------|----------|----------------|
| [#20695](https://github.com/anomalyco/opencode/issues/20695) | **Memory Megathread** | @thdxr | 73 | Central tracking for scattered memory reports; contributors explicitly requesting heap snapshots to diagnose root causes |
| [#20650](https://github.com/anomalyco/opencode/issues/20650) | **Kimi k2.5 tool calling failures** | @kjj9 | 46 | JSON parsing errors breaking tool execution for Kimi models; indicates model-specific compatibility gaps |
| [#768](https://github.com/anomalyco/opencode/issues/768) | **Copilot Premium quota display** | @FareedFarag | 32 | Users can't track usage limits with GitHub Copilot integration; 70 👍 shows demand for quota visibility |
| [#6680](https://github.com/anomalyco/opencode/issues/6680) | **View archived sessions on desktop** | @0xajka | 29 | Feature request for accessing historical sessions via sidebar modal; improves workflow continuity |
| [#15035](https://github.com/anomalyco/opencode/issues/15035) | **Agent-teams feature timeline** | @boxiaolanya2008 | 20 | Community asking when multi-agent collaboration will land; indicates demand for advanced orchestration |
| [#7185](https://github.com/anomalyco/opencode/issues/7185) | **vLLM local models skip tool calls** | @inv1s10n | 20 | Local models (gpt-oss-120B, qwen3-32B) only output thinking content without executing tools; **CLOSED** with potential fix |
| [#14808](https://github.com/anomalyco/opencode/issues/14808) | **Plugin `session.created` event not firing** | @M4NZEN | 18 | Event bus issue breaks plugin integrations (e.g., Engram memory system); affects extensibility |
| [#12570](https://github.com/anomalyco/opencode/issues/12570) | **GPT-5.3-Codex early termination** | @kanishkasahoo | 15 | Model stops after 1-2 subagent calls; regression from 5.2; impacts production reliability |
| [#6231](https://github.com/anomalyco/opencode/issues/6231) | **Auto-discover models from OpenAI-compatible endpoints** | @ochsec | 10 | **106 👍** — Manual model configuration is tedious for LM Studio/Ollama/llama.cpp; high community demand |
| [#5182](https://github.com/anomalyco/opencode/issues/5182) | **TUI as ACP Client** | @Emsu | 9 | Request to use OpenCode as TUI for ACP-compatible testing; enables custom workflow integrations |

---

## Key PR Progress

| # | PR | Author | Type | Summary |
|---|-----|--------|------|---------|
| [#25659](https://github.com/anomalyco/opencode/pull/25659) | **Sidebar subagent sessions** | @pasta-paul | Bug Fix + Feature | Shows all subagent sessions with collapsible chevron; enables visibility into parallel threads |
| [#25658](https://github.com/anomalyco/opencode/pull/25658) | **SSE replay buffer with Last-Event-ID** | @pasta-paul | Bug Fix | Fixes event loss on reconnect for `/global/event`; critical for long-running multi-agent tasks |
| [#25654](https://github.com/anomalyco/opencode/pull/25654) | **MCP Accept header for Streamable HTTP** | @kagura-agent | Bug Fix | Adds required `application/json` to Accept header; enables Zhipu/BigModel MCP server connections |
| [#25634](https://github.com/anomalyco/opencode/pull/25634) | **v2 session message rendering** | @thdxr | Improvement | Improves assistant durations, inline tool spacing, text boundaries, and error state displays |
| [#21907](https://github.com/anomalyco/opencode/pull/21907) | **Free model resolution** | @caretak3r | New Feature | Adds `Provider.resolveSelection()` to resolve `--model free` to random free provider model |
| [#18767](https://github.com/anomalyco/opencode/pull/18767) | **Mobile Touch Optimization** | @noahbentusi | New Feature | Optimizes OpenCode App for mobile/touch while preserving desktop experience |
| [#20750](https://github.com/anomalyco/opencode/pull/20750) | **GitHub Action debug capabilities** | @rdar-lab | New Feature | Outputs agent thoughts and logs for CI/CD debugging visibility |
| [#24712](https://github.com/anomalyco/opencode/pull/24712) | **Native LLM core foundation** | @kitlangton | New Feature | Adds `packages/llm` with Effect-based LLM core, typed schemas, provider adapters behind experimental flag |
| [#25649](https://github.com/anomalyco/opencode/pull/25649) | **Increase LSP timeout for JDTLS/KotlinLS** | @norbu35 | Bug Fix | Raises timeout from 45s to 180s for JVM-based language servers that require Gradle sync/indexing |
| [#25549](https://github.com/anomalyco/opencode/pull/25549) | **Featherless AI provider** | @ArEnSc | New Feature | Adds new provider integration with client-side concurrency gate to prevent 429 errors |

---

## Feature Request Trends

1. **Model Discovery & Configuration**
   - Auto-discover models from OpenAI-compatible endpoints (LM Studio, Ollama, llama.cpp)
   - Per-model context size and output limit configuration
   - Free model resolution

2. **Session Management**
   - View archived sessions on desktop
   - Subagent session visibility and navigation
   - Fork-aware conversation IDs with Codex-style prompt caching

3. **MCP (Model Context Protocol) Enhancements**
   - Dynamic server registration display in TUI status
   - Streamable HTTP transport compliance
   - Plugin event bus reliability (`session.created`)

4. **UI/UX Improvements**
   - Mobile touch optimization
   - Theme customization for command panel selectors
   - TUI as ACP client for custom workflows

5. **Provider & Model Support**
   - Agent-teams multi-agent collaboration
   - Additional provider integrations (Featherless AI)
   - Codex Spark OAuth access

---

## Developer Pain Points

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Memory instability** | #20695 (73 comments) | Frequent crashes; community collecting heap snapshots |
| **Tool calling failures** | #20650, #7185, #25644 | Broken workflows when models fail JSON parsing or skip tool execution |
| **LSP timeouts** | #23988, #25649 | JVM-based servers (JDTLS, KotlinLS) fail during project indexing |
| **SSE reconnection event loss** | #25657, #25658 | Long-running tasks silently drop UI updates on network blips |
| **Manual model configuration** | #6231 (106 👍) | Tedious for local providers with frequently changing models |
| **Plugin event bus reliability** | #14808 | Custom plugins (Engram, etc.) fail to receive session events |
| **MCP server connectivity** | #25650 | Streamable HTTP servers reject connections due to Accept header issues |
| **Token count visibility** | #25202 | Inconsistent compaction behavior between GPT-5.4 and 5.5 |

---

*Digest generated from GitHub data for [anomalyco/opencode](https://github.com/anomalyco/opencode) — 2026-05-04*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-04

## Today's Highlights

The Qwen Code team shipped **v0.15.6-nightly.20260504** with a new `FileReadCache` feature that short-circuits unchanged file reads, significantly improving performance in long-running sessions. Community discussions remain heated around the proposed OAuth free tier policy changes (issue #3203, 121 comments), while multiple PRs address critical reliability fixes including telemetry shutdown timeouts, race conditions in MCP client management, and auto-memory recall blocking issues.

---

## Releases

### v0.15.6-nightly.20260504.e617f20d1
**Release Date:** 2026-05-04

| Change | Author | PR |
|--------|--------|-----|
| **feat(core):** Add `FileReadCache` and short-circuit unchanged Reads | @wenshao | [#3717](https://github.com/QwenLM/qwen-code/pull/3717) |
| **fix(cli):** Honor proxy settings | @cyphercodes | — |

The `FileReadCache` is a session-scoped optimization that returns a `file_unchanged` placeholder when re-reading an unmodified file, pointing the model to prior tool results in conversation history. This reduces redundant I/O and API token consumption.

---

## Hot Issues

### 1. [OPEN] OAuth Free Tier Policy Adjustment — #3203
**Author:** @pomelo-nwu | **Comments:** 121 | **Labels:** feature-request, needs-triage

The community is actively debating proposed changes to Qwen OAuth free tier: reducing daily quota from 1,000 to 100 requests and phasing out the free entry point entirely by May 20. With 121 comments, this is the most-discussed issue, signaling significant user concern about accessibility and cost.

🔗 https://github.com/QwenLM/qwen-code/issues/3203

---

### 2. [OPEN] File/glob tools fail in long-running sessions — #3805
**Author:** @SeoMP | **Comments:** 2 | **Labels:** bug, needs-triage

Users report that `read` and `glob` tools fail to return content or fail to send results to the LLM after extended session runtime. This appears related to the new `FileReadCache` implementation. A corresponding PR (#3810) has been opened to clear the cache on history rewrite paths.

🔗 https://github.com/QwenLM/qwen-code/issues/3805

---

### 3. [OPEN] Background task management roadmap — #3634
**Author:** @wenshao | **Comments:** 2 | **Labels:** feature-request

Phase A (background agent resume/continuation) and Phase B are merged. Phase D is in progress with PR #3809 adding advisory hints for long-running foreground bash commands. This tracks the multi-phase effort to improve background task handling.

🔗 https://github.com/QwenLM/qwen-code/issues/3634

---

### 4. [OPEN] Race condition in McpClientManager — #3817
**Author:** @thedoctormes-hue | **Comments:** 0 | **Labels:** bug, needs-triage

A newly reported race condition causes duplicate MCP processes when Qwen Code restarts or reinitializes MCP servers. The root cause is identified in `McpClientManager.discoverMcpToolsForServer()`. This is a critical reliability issue for users relying on MCP integrations.

🔗 https://github.com/QwenLM/qwen-code/issues/3817

---

### 5. [OPEN] Daemon mode (`qwen serve`) proposal — #3803
**Author:** @wenshao | **Comments:** 0 | **Labels:** feature-request, needs-triage

A follow-up to issue #2271, this proposes a `qwen serve` mode for persistent daemon operation. The issue documents architectural decisions still open and existing infrastructure that an implementation could leverage. This is a highly requested feature for production deployments.

🔗 https://github.com/QwenLM/qwen-code/issues/3803

---

### 6. [OPEN] `/memory show` command broken — #3816
**Author:** @juntaosun | **Comments:** 1 | **Labels:** bug, needs-triage

The `/memory show` command fails to execute, returning a display error. This impacts users who rely on memory introspection for debugging or session management.

🔗 https://github.com/QwenLM/qwen-code/issues/3816

---

### 7. [OPEN] UI flickering in 0.15.6 — #3806
**Author:** @SeoMP | **Comments:** 1 | **Labels:** bug, needs-triage

Users report screen flickering during content output in version 0.15.6, a regression from previous behavior where flickering only occurred with excessive expansion.

🔗 https://github.com/QwenLM/qwen-code/issues/3806

---

### 8. [OPEN] AskUserQuestion API error — #3804
**Author:** @SeoMP | **Comments:** 1 | **Labels:** bug, needs-triage

The `AskUserQuestion` function intermittently returns `[API Error: Model stream ended with empty response text.]`, suggesting issues with streaming response handling or model-side interruptions.

🔗 https://github.com/QwenLM/qwen-code/issues/3804

---

### 9. [OPEN] Telemetry shutdown timeout fix — #3811
**Author:** @doudouOUC | **Comments:** 0 | **Labels:** bug, needs-triage

Two production-critical fixes proposed: (1) add bounded timeout to `shutdownTelemetry()` to prevent indefinite hangs when OTLP endpoints are unreachable, and (2) fix `service.version` resource attribute. A corresponding PR (#3813) is already open.

🔗 https://github.com/QwenLM/qwen-code/issues/3811

---

### 10. [OPEN] Local LM Studio model switch fails — #3802
**Author:** @T-Phuong-Nguyen | **Comments:** 0 | **Labels:** bug, needs-triage

Switching to local LM Studio models via `/model` fails with "Model is unloaded" error, despite JIT loading being confirmed working via direct API calls. This blocks users wanting to use local models through Qwen Code.

🔗 https://github.com/QwenLM/qwen-code/issues/3802

---

## Key PR Progress

| PR | Author | Type | Summary |
|----|--------|------|---------|
| [#3815](https://github.com/QwenLM/qwen-code/pull/3815) | @B-A-M-N | fix | Per-model settings for fast model side queries — prevents `extra_body`, `samplingParams`, and `reasoning` settings from leaking from main model to fast model |
| [#3813](https://github.com/QwenLM/qwen-code/pull/3813) | @doudouOUC | fix | Telemetry shutdown timeout — races `sdk.shutdown()` against 10s timeout, fails open on unreachable OTLP |
| [#3814](https://github.com/QwenLM/qwen-code/pull/3814) | @B-A-M-N | fix | Auto-memory recall blocking — removes 5s AbortSignal that delayed every user turn |
| [#3810](https://github.com/QwenLM/qwen-code/pull/3810) | @wenshao | fix | Clear `FileReadCache` on history rewrite — fixes #3805 |
| [#3792](https://github.com/QwenLM/qwen-code/pull/3792) | @doudouOUC | fix | Monitor tool and UI routing post-merge fixes, token bucket clock-drift guard |
| [#3783](https://github.com/QwenLM/qwen-code/pull/3783) | @alex-musick | feat | Non-interactive model switching from CLI |
| [#3797](https://github.com/QwenLM/qwen-code/pull/3797) | @B-A-M-N | feat | `/model list` subcommand for dynamic model discovery |
| [#3685](https://github.com/QwenLM/qwen-code/pull/3685) | @doudouOUC | feat | PyPI release workflow for `qwen-code-sdk` Python package |
| [#3809](https://github.com/QwenLM/qwen-code/pull/3809) | @wenshao | feat | Advisory hints for long-running foreground bash commands (Phase D) |
| [#3774](https://github.com/QwenLM/qwen-code/pull/3774) | @wenshao | feat | Enforce prior file read before Edit/WriteFile mutations |
| [#3604](https://github.com/QwenLM/qwen-code/pull/3604) | @wenshao | feat | Parallelize skill loading + path-conditional activation |
| [#3115](https://github.com/QwenLM/qwen-code/pull/3115) | @wenshao | feat | Commit attribution with per-file AI contribution tracking |
| [#3785](https://github.com/QwenLM/qwen-code/pull/3785) | @yiliang114 | feat | `/doctor memory` subcommand for diagnostics |
| [#3798](https://github.com/QwenLM/qwen-code/pull/3798) | @B-A-M-N | feat | Error classification: retryable vs deterministic request errors |
| [#3762](https://github.com/QwenLM/qwen-code/pull/3762) | @DragonnZhang | feat | Message edit/rewind and metadata UI for VSCode extension |

---

## Feature Request Trends

Analysis of open issues reveals these dominant feature directions:

| Trend | Issues | Description |
|-------|--------|-------------|
| **Daemon/Server Mode** | #3803 | Persistent `qwen serve` for long-running deployments |
| **Background Task Management** | #3634, #3809 | Multi-phase effort for background agent execution and hints |
| **Memory & Context** | #3816, #3785, #3814 | Memory diagnostics, auto-recall improvements, `/memory show` fixes |
| **Model Flexibility** | #3783, #3797, #3802 | Non-interactive model switching, dynamic discovery, local model support |
| **AI Transparency** | #3115 | Commit attribution for AI-generated changes |
| **WeChat Integration** | #3781 | Image sending via CDN for WeChat channel |
| **OpenTelemetry Hardening** | #3731, #3811 | Production-ready telemetry configuration |

---

## Developer Pain Points

1. **Long-session reliability** — File read/glob failures (#3805) and memory recall blocking (#3814) in extended sessions are recurring themes, suggesting session state management needs hardening.

2. **MCP integration instability** — Race conditions in `McpClientManager` (#3817) cause duplicate processes, disrupting MCP tool workflows.

3. **Telemetry shutdown hangs** — Unbounded OTLP shutdown causes CLI exit delays, a production pain point addressed by PR #3813.

4. **Local model support gaps** — LM Studio integration fails with JIT loading (#3802), limiting local development options.

5. **UI regressions** — Flickering issues in 0.15.6 (#3806) and `AskUserQuestion` API errors (#3804) indicate quality assurance gaps in the latest release.

6. **Free tier uncertainty** — The OAuth policy change proposal (#3203) has generated significant concern about accessibility, with 121 comments indicating strong community engagement.

---

*Generated from GitHub data (github.com/QwenLM/qwen-code) — 2026-05-04*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-04

## Today's Highlights

The Pi community saw significant activity around provider integrations and stability fixes. Notable work includes a fix for active tool updates during running agent sessions (#4148), improved Xiaomi regional provider support (#4112), and several WebSocket/print-mode hang resolutions. The team also addressed retry logic for transient HTTP errors and added a `/model -` toggle for quick model switching.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

1. **[#27](https://github.com/badlogic/pi-mono/issues/27)** — Implement Retries (11 comments)
   Users report vague error messages and request debug mode or error dump files. The high comment count suggests retry logic and error visibility are pain points for production use.

2. **[#3942](https://github.com/badlogic/pi-mono/issues/3942)** — `pi update --self` fails with npm `--prefix` (8 comments)
   Self-update is broken for users with custom npm prefixes (common with nix). This blocks users from staying current without manual intervention.

3. **[#4082](https://github.com/badlogic/pi-mono/issues/4082)** — Xiaomi MiMo Token Plan regional providers (6 comments)
   Chinese regional endpoints require separate configuration. PR #4112 addresses this, but user feedback continues on proper provider setup.

4. **[#4103](https://github.com/badlogic/pi-mono/issues/4103)** — Codex WebSocket transport prevents `--print` mode from exiting (4 comments)
   Print mode hangs when using WebSocket transport with OpenAI Codex. PRs #4133 and #4127 address related transport and cache issues.

5. **[#4105](https://github.com/badlogic/pi-mono/issues/4105)** — TypeError in autocomplete (4 comments)
   TUI crashes when autocomplete returns non-string values. A type-safety issue affecting interactive workflows.

6. **[#2994](https://github.com/badlogic/pi-mono/issues/2994)** — `pi.sendUserMessage` doesn't execute commands (3 comments)
   API users cannot trigger built-in commands like `/reload` programmatically, limiting automation scenarios.

7. **[#4108](https://github.com/badlogic/pi-mono/issues/4108)** — `/export` not saving session (3 comments)
   Session export fails in v0.72.1, preventing users from archiving conversations.

8. **[#3966](https://github.com/badlogic/pi-mono/issues/3966)** — Add `--profile` support for isolated Pi state (2 comments)
   Users want clean workspace isolation (auth, sessions, settings) without manual `PI_CODING_AGENT_DIR` management.

9. **[#4137](https://github.com/badlogic/pi-mono/issues/4137)** — Anthropic OAuth URL missing parameters (2 comments)
   Login flow for Claude Code Pro subscriptions provides an invalid OAuth URL, blocking subscription-tier users.

10. **[#4146](https://github.com/badlogic/pi-mono/issues/4146)** — UI hangs with large code blocks (1 comment)
    High CPU usage when rendering large code blocks suggests rendering performance issues in the TUI.

---

## Key PR Progress

1. **[#4148](https://github.com/badlogic/pi-mono/pull/4148)** — Fix active tool updates during running agent sessions
   Ensures tools added mid-session are visible to the current prompt cycle. Critical for dynamic tool loading workflows.

2. **[#4136](https://github.com/badlogic/pi-mono/pull/4136)** — `/model -` toggle back to previous model
   Implements `cd -` semantics for model switching, tracking `_previousModel` on `AgentSession`.

3. **[#4133](https://github.com/badlogic/pi-mono/pull/4133)** — Fall back from Codex WebSocket to SSE
   Handles WebSocket errors (1000, 1009) by falling back to SSE transport, improving reliability.

4. **[#4112](https://github.com/badlogic/pi-mono/pull/4112)** — Fix Xiaomi default to API billing, add per-region token plan providers
   Splits Xiaomi provider into API billing (default) and regional Token Plan endpoints.

5. **[#4119](https://github.com/badlogic/pi-mono/pull/4119)** — Stabilize env-sensitive test cases
   Forces SSE transport in Codex tests, clears SSH/MOSH env vars, isolates HOME in symlinked tests.

6. **[#4127](https://github.com/badlogic/pi-mono/pull/4127)** — Disable provider session cache in print mode
   Prevents providers from keeping WebSocket sessions alive after print mode completes.

7. **[#4126](https://github.com/badlogic/pi-mono/pull/4126)** — Retry on transient HTTP 404/408 status responses
   Extends retry logic to handle CDN/edge 404/408 errors with exponential backoff.

8. **[#4117](https://github.com/badlogic/pi-mono/pull/4117)** — Add `stopAfterTurn` handoff control
   Exposes `session.stopAfterTurn()` for graceful agent termination after the current turn.

9. **[#4149](https://github.com/badlogic/pi-mono/issues/4149)** — Expose `getSupportedThinkingLevels` and `clampThinkingLevel`
   Public API exposure for extensions to query model thinking capabilities.

10. **[#4147](https://github.com/badlogic/pi-mono/issues/4147)** — Make `agent.state.tools` mutations visible to running agent loop
    Stabilizes internal tools array identity for mid-session tool modifications.

---

## Feature Request Trends

| Theme | Description | Related Issues |
|-------|-------------|----------------|
| **Provider Expansion** | Add new providers (NVIDIA NIM with 50+ free endpoints, ppq.ai) | #4116, #4139 |
| **Workspace Isolation** | Profile-based state isolation (`--profile <name>`) | #3966 |
| **Model Switching UX** | Quick toggle to previous model (`/model -`) | #4135 |
| **Provider Management** | Exclude providers from listings and auto-selection | #4130 |
| **Context Control** | Per-repo global context flags, ratio-based auto-compaction | #4132, #4129 |
| **Retry/Error Handling** | Implement retries, debug modes, error dumps | #27 |

---

## Developer Pain Points

- **Self-update failures**: npm prefix users (nix, custom installs) cannot auto-update (#3942)
- **WebSocket instability**: Transport issues cause hangs in print mode and session cache leaks (#4103, #4128, #4141)
- **TUI crashes**: Autocomplete type errors and macOS pasteboard crashes (#4105, #4142)
- **Command execution**: `pi.sendUserMessage` fails to execute commands (#2994)
- **Session export**: `/export` broken in v0.72.1 (#4108)
- **Performance issues**: O(n²) bash streaming, CPU spin on terminal disconnect, UI hangs with large code (#4145, #4144, #4146)
- **OAuth/login flows**: Invalid URLs for Anthropic subscriptions, missing regional provider options (#4137, #4082, #4143)

</details>

---
*This digest is auto-generated by [Radar Forge](https://github.com/borq168/radar-forge).*
