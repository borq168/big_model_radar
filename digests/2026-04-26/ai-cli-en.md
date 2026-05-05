# AI CLI Tools Community Digest 2026-04-26

> Generated: 2026-04-26 01:55 UTC | Tools covered: 8

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

**Date:** 2026-04-26
**Scope:** Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code, OpenCode, Qwen Code, Pi

---

## 1. Ecosystem Overview

The AI CLI tools ecosystem is experiencing rapid iteration driven by developer demand for deeper IDE integration, improved session management, and more granular control over AI behavior. Major providers are converging on common architectural patterns—particularly Model Context Protocol (MCP) support, multi-turn conversation reliability, and cross-platform compatibility—while differentiating through unique feature sets like Claude Code's security-guidance plugin ecosystem, Codex's permission system refactor, and Pi's extension API. The landscape reflects a maturation from simple chat wrappers to sophisticated developer productivity platforms, with competition intensifying around context management, local model support, and enterprise-ready features like per-repository configuration and audit trails.

---

## 2. Activity Comparison

| Tool | Issues (Total) | PRs (Total) | Releases (24h) | Community Velocity |
|------|----------------|-------------|----------------|---------------------|
| **Claude Code** | 50 | 7 | None | Moderate — stable release cadence |
| **OpenAI Codex** | 50 | 43 | rust-v0.126.0-alpha.2 | High — active permission system refactor |
| **Gemini CLI** | 50 | 43 | None | High — feature-rich development |
| **GitHub Copilot CLI** | 11 | 1 | None | Low — limited recent activity |
| **Kimi Code** | 6 | 6 | None | Low — small community |
| **OpenCode** | 50 | 37 | v1.14.25 | High — active bug fixes and features |
| **Qwen Code** | 50 | 37 | None | High — provider expansion |
| **Pi** | 50 | 43 | None | High — extension API growth |

**Observations:**

- **High-activity tools** (OpenAI Codex, Gemini CLI, OpenCode, Qwen Code, Pi) show 37–43 PRs and 50 issues, indicating active development and community engagement.
- **Moderate-activity tools** (Claude Code) maintain smaller PR counts but high issue engagement, suggesting a more stable release cycle.
- **Low-activity tools** (GitHub Copilot CLI, Kimi Code) show minimal recent activity, with GitHub Copilot CLI having only 1 PR in the past 24 hours.

---

## 3. Shared Feature Directions

The following requirements appear across multiple tool communities, indicating industry-wide priorities:

### 3.1 Multi-Provider Model Support

| Tool | Specific Need |
|------|---------------|
| **Claude Code** | VS 2026 integration, Scala (Metals) LSP support |
| **OpenAI Codex** | GPT-5.5 1M token context, vim composer mode |
| **Gemini CLI** | AST-aware file reads/search, memory routing |
| **Kimi Code** | Remote control, worktree isolation |
| **OpenCode** | DeepSeek V4 multi-turn, reasoning_content handling |
| **Qwen Code** | Together AI, CrofAI, Ark provider integration |
| **Pi** | Custom thinking levels per model, extension API |

**Implication:** Developers expect seamless switching between AI providers and models, with consistent behavior across different backends.

### 3.2 Session Management & Persistence

| Tool | Specific Need |
|------|---------------|
| **Claude Code** | /compact deadlock fix, session resume crashes |
| **OpenAI Codex** | /undo restoration, /rewind checkpoint restore |
| **Gemini CLI** | Versioned pre-write backups, auto-recovery |
| **GitHub Copilot CLI** | Master instructions file, local auto-memory |
| **Kimi Code** | Remote control, session isolation |
| **OpenCode** | Archived sessions viewing, compaction context loss |
| **Pi** | Session name terminal refresh, tree navigation state |

**Implication:** Session reliability and recovery mechanisms are critical for long-running development workflows.

### 3.3 MCP (Model Context Protocol) Infrastructure

| Tool | Specific Need |
|------|---------------|
| **Claude Code** | Security-guidance plugin, SQL injection patterns |
| **OpenAI Codex** | MCP child process reaping, server booting |
| **Gemini CLI** | Hyphenated server names, env var expansion |
| **GitHub Copilot CLI** | Per-repository MCP config (.github/mcp.json) |
| **Qwen Code** | MCP connection limits (critical: 2 max) |
| **Pi** | Provider display names, cross-provider compatibility |

**Implication:** MCP is becoming a standard extension mechanism, but implementation inconsistencies create friction.

### 3.4 IDE & Editor Integration

| Tool | Specific Need |
|------|---------------|
| **Claude Code** | VS 2026, Dart/Flutter LSP, Scala Metals |
| **OpenAI Codex** | Remote-SSH session resume, VS Code sidebar |
| **Gemini CLI** | Browser Agent settings, SSH detection |
| **GitHub Copilot CLI** | VS Code extension stability |
| **Qwen Code** | Missing diff commands, Xcode compatibility |
| **Pi** | Extension API enhancements, terminal title sync |

**Implication:** Deep IDE integration remains a competitive differentiator, with VS Code and JetBrains ecosystems as primary targets.

### 3.5 Privacy & Security

| Tool | Specific Need |
|------|---------------|
| **Claude Code** | Security-guidance plugin, hardcoded secret detection |
| **OpenAI Codex** | Cybersecurity risk flag false positives |
| **OpenCode** | File scanning beyond workspace, PostHog telemetry |
| **Pi** | AnthropicMessagesCompat cache control |

**Implication:** Security scanning and privacy controls are emerging as expected features, not optional add-ons.

---

## 4. Differentiation Analysis

### 4.1 Feature Focus

| Tool | Primary Differentiation | Target User |
|------|------------------------|-------------|
| **Claude Code** | Security-guidance plugin ecosystem, open-source trajectory | Security-conscious enterprises |
| **OpenAI Codex** | Permission system refactor, TUI vim mode, session forking | Power users, terminal enthusiasts |
| **Gemini CLI** | Event-driven hooks, versioned backups, AST-aware tooling | Advanced developers, large codebases |
| **GitHub Copilot CLI** | Per-repository MCP, local auto-memory | Enterprise teams, offline environments |
| **Kimi Code** | Worktree isolation, RalphFlow architecture | Parallel development workflows |
| **OpenCode** | Multi-provider integration, privacy controls | Privacy-sensitive developers |
| **Qwen Code** | Provider expansion (Together, CrofAI, Ark), API preconnect | Multi-cloud users |
| **Pi** | Extension API, custom thinking levels | Extension developers, customization enthusiasts |

### 4.2 Technical Approach

| Tool | Architecture Highlights |
|------|------------------------|
| **Claude Code** | Modular plugin system, security pattern detection |
| **OpenAI Codex** | Permission profile-backed runtime, multiplexer pane forking |
| **Gemini CLI** | Event-driven hook system, transactional file operations |
| **GitHub Copilot CLI** | User-level vs. repository-level MCP separation |
| **Kimi Code** | Git worktree-based session isolation |
| **OpenCode** | RalphFlow ephemeral context, convergence detection |
| **Qwen Code** | API preconnect for latency reduction, OpenRouter OAuth |
| **Pi** | Provider-agnostic model registry, extension sandboxing |

### 4.3 Target Users

- **Enterprise-focused:** Claude Code (security), GitHub Copilot CLI (enterprise policies), OpenCode (privacy)
- **Developer-centric:** OpenAI Codex (power users), Gemini CLI (advanced workflows), Pi (extension developers)
- **Multi-cloud/Provider-agnostic:** Qwen Code, OpenCode, Kimi Code
- **Platform-specific:** Claude Code (Windows performance), OpenAI Codex (macOS CPU), Qwen Code (Xcode integration)

---

## 5. Community Momentum & Maturity

### 5.1 Activity Indicators

| Tool | Issue Engagement | PR Velocity | Release Cadence | Maturity Assessment |
|------|------------------|-------------|-----------------|---------------------|
| **Claude Code** | High (94 comments on VS 2026 issue) | Moderate | Stable | **Mature** — established user base, stable features |
| **OpenAI Codex** | High (168 comments on remote dev) | High (43 PRs) | Alpha releases | **Evolving** — major refactors in progress |
| **Gemini CLI** | Moderate | High (43 PRs) | Frequent | **Rapid iteration** — feature-rich development |
| **GitHub Copilot CLI** | Low (11 issues) | Low (1 PR) | Rare | **Stalled** — limited community engagement |
| **Kimi Code** | Low (6 issues) | Low (6 PRs) | Rare | **Early stage** — small community |
| **OpenCode** | High | High (37 PRs) | Regular (v1.14.25) | **Active** — bug fixes and features landing |
| **Qwen Code** | High | High (37 PRs) | Frequent | **Active** — provider expansion ongoing |
| **Pi** | High | High (43 PRs) | Frequent | **Active** — extension ecosystem growth |

### 5.2 Community Health Signals

**Healthy Communities (High engagement, active development):**

- **OpenAI Codex:** 168 comments on remote development feature, permission system refactor attracting contributors
- **Gemini CLI:** 43 PRs in pipeline, event-driven architecture gaining traction
- **OpenCode:** v1.14.25 release with permission config improvements, DeepSeek integration active
- **Qwen Code:** Provider expansion (Together, CrofAI, Ark) driving interest
- **Pi:** Extension API enhancements attracting developer contributions

**Struggling Communities (Low engagement, limited activity):**

- **GitHub Copilot CLI:** Only 1 PR in 24h, 11 total issues—community appears stagnant
- **Kimi Code:** Small user base, limited external contribution

---

## 6. Trend Signals

### 6.1 Industry Trends from Community Feedback

| Trend | Evidence Across Tools | Strategic Implication |
|-------|----------------------|----------------------|
| **MCP as Standard Extension Point** | All tools implementing MCP support, connection limits becoming bottlenecks (Qwen Code: 2 max) | MCP infrastructure reliability is critical; expect competition on MCP ecosystem |
| **Context Management Sophistication** | Claude Code /compact deadlock, OpenCode compaction context loss, Gemini CLI versioned backups | Context preservation during compaction is a pain point; solutions will differentiate |
| **Multi-Provider Flexibility** | Qwen Code adding Together/CrofAI/Ark, OpenCode DeepSeek V4, Pi custom thinking levels | Users want provider-agnostic workflows; lock-in concerns drive demand for alternatives |
| **Security & Privacy Controls** | Claude Code security-guidance plugin, OpenCode file scanning concerns, PostHog telemetry | Privacy-conscious developers demand transparency; security scanning becoming baseline |
| **IDE Deep Integration** | VS 2026 (Claude Code), Xcode (Qwen Code), Remote-SSH (OpenAI Codex) | IDE partnerships and native integrations are competitive moats |
| **Local Model Support** | Ollama failures (Qwen Code, OpenCode), LM Studio interest (Qwen Code) | Offline/local deployment demand growing; expect more first-class local LLM support |
| **Session Reliability** | /undo incomplete (Claude Code, OpenAI Codex), session resume crashes (Claude Code) | Session recovery mechanisms are table stakes for professional use |
| **TUI Enhancement** | OpenAI Codex vim mode, Claude Code statusLine, Gemini CLI event-driven hooks | Power users expect terminal-native experiences; TUI is a differentiator |

### 6.2 Developer Sentiment Signals

| Sentiment | Tools Affected | Interpretation |
|-----------|----------------|----------------|
| **Frustration with Infinite Loops** | Claude Code, GitHub Copilot CLI, Kimi Code | AI reliability in autonomous mode remains a concern; quota exhaustion is a pain point |
| **Windows Platform Neglect** | Claude Code (100% CPU), Qwen Code (encoding errors), Kimi Code (MIME types) | Windows developers feel underserved; expect increased investment |
| **Desire for Transparency** | OpenCode (PostHog), Claude Code (thinking visibility) | Users want visibility into AI reasoning and data handling |
| **Enterprise Policy Enforcement** | GitHub Copilot CLI (per-repository MCP), Claude Code (security patterns) | Organizations demand control over AI behavior at scale |

### 6.3 Reference Value for Developers

**For Tool Builders:**

- Prioritize MCP infrastructure reliability and connection scalability
- Invest in context preservation during compaction and session recovery
- Address Windows platform parity and local model deployment support
- Implement transparent security scanning and privacy controls

**For Enterprise Decision-Makers:**

- Evaluate tools based on session management robustness and enterprise policy support
- Monitor MCP ecosystem maturity for extension strategy
- Consider multi-provider flexibility to avoid lock-in

**For Developers:**

- Tools with high community activity (OpenAI Codex, Gemini CLI, OpenCode, Qwen Code, Pi) offer more frequent updates and feature additions
- Security-conscious environments should evaluate Claude Code's plugin ecosystem
- Power users may prefer OpenAI Codex's TUI enhancements and Gemini CLI's event-driven architecture

---

*Report generated from community digest data across 8 AI CLI tools — 2026-04-26*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest

**Date:** 2026-04-26
**Source:** github.com/anthropics/claude-code

---

## 1. Today's Highlights

The community continues to drive significant feature requests, with Visual Studio 2026 integration and always-visible thinking output emerging as the most-requested enhancements. A critical bug affecting `/compact` functionality was closed, resolving a deadlock where users couldn't compact when reaching context limits. Security-related contributions are gaining traction, with new SQL injection and hardcoded secret detection patterns proposed for the security-guidance plugin.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Author | Comments | 👍 | Why It Matters |
|---|-------|--------|----------|----|----------------|
| 1 | **[Add support for Visual Studio 2026 Integration](https://github.com/anthropics/claude-code/issues/15942)** | @ovftank | 94 | 246 | Windows developers are requesting native VS 2026 IDE integration, indicating strong demand for deeper Windows ecosystem support. |
| 2 | **[Add Option to Always Show Claude's Thinking](https://github.com/anthropics/claude-code/issues/8477)** | @yannbam | 75 | 240 | Transparency in AI reasoning remains a top priority; users want visibility into Claude's thought process without manual intervention. |
| 3 | **[Claude Code using 100% of CPU and Memory Resources](https://github.com/anthropics/claude-code/issues/5771)** | @schizoidcock | 46 | 39 | Performance regression affecting Windows users—high CPU/memory consumption impacts developer productivity. |
| 4 | **[Multi-account switching in Claude Mobile app](https://github.com/anthropics/claude-code/issues/36151)** | @CorneAussems | 46 | 147 | Cross-account workflow support is a frequently requested feature for users managing multiple Claude subscriptions. |
| 5 | **[/compact fails with 'Conversation too long'](https://github.com/anthropics/claude-code/issues/23047)** ⚠️ CLOSED | @Asses13 | 20 | 27 | Critical bug fix: `/compact` now works when context limit is reached, resolving a deadlock that forced users to `/clear`. |
| 6 | **[Add Scala (Metals) to native LSP plugin lineup](https://github.com/anthropics/claude-code/issues/45132)** | @NovaMage | 15 | 70 | JVM ecosystem users want first-class Scala support, expanding Claude Code's language server capabilities. |
| 7 | **[Expose /usage quota data in statusLine JSON](https://github.com/anthropics/claude-code/issues/28999)** ⚠️ CLOSED | @mat9922 | 14 | 39 | Subscription quota visibility in status bars enables better usage monitoring for Pro/Max subscribers. |
| 8 | **[Add Dart/Flutter LSP support](https://github.com/anthropics/claude-code/issues/16849)** | @billychl1 | 12 | 83 | Flutter's popularity drives demand for native Dart language server integration. |
| 9 | **[Keeps hanging with API Error (stream idle timeout)](https://github.com/anthropics/claude-code/issues/46955)** | @piraticalkingavery-sudo | 11 | 2 | Streaming reliability issues affecting API users—potential connectivity or timeout handling problems. |
| 10 | **[Claude Code ↔ Cowork Bridge integration](https://github.com/anthropics/claude-code/issues/25791)** | @sattyamj-attri | 7 | 17 | Programmatic Cowork task triggering would enable advanced CI/CD and automation workflows. |

---

## 4. Key PR Progress

| # | PR | Author | Summary |
|---|-----|--------|---------|
| 1 | **[feat: open source claude code](https://github.com/anthropics/claude-code/pull/41447)** | @gameroman | Ambitious proposal to open source Claude Code—references multiple closed issues, signaling community interest in transparency. |
| 2 | **[Add files via upload](https://github.com/anthropics/claude-code/pull/53354)** | @dongareanurag333-dot | Knowledge compiler scaffold contribution for enhanced project understanding. |
| 3 | **[feat: add sql_injection and hardcoded_secret patterns](https://github.com/anthropics/claude-code/pull/53204)** | @gugli4ifenix-design | Expands security-guidance plugin from 9 to 11 patterns; detects SQL injection via f-strings/concatenation and hardcoded secrets. |
| 4 | **[docs: add README.md for security-guidance plugin](https://github.com/anthropics/claude-code/pull/53203)** | @gugli4ifenix-design | Adds documentation for the only undocumented plugin, improving discoverability of security monitoring capabilities. |
| 5 | **[fix: normalize Europe/Kiev to Europe/Kyiv](https://github.com/anthropics/claude-code/pull/40458)** | @fatcatMaoFei | Timezone normalization utility fixes IANA alias mapping for legacy systems still returning deprecated names. |
| 6 | **[docs: document --exclude-dynamic-system-prompt-sections](https://github.com/anthropics/claude-code/pull/46024)** | @Christian-Sidak | Documents print mode prompt caching for improved cache reuse across machines. |
| 7 | **[docs: add Linux subprocess isolation and CLAUDE_CODE_SCRIPT_CAPS docs](https://github.com/anthropics/claude-code/pull/46025)** | @Christian-Sidak | Adds reference docs for PID namespace isolation and script capabilities, supporting managed deployments. |

---

## 5. Feature Request Trends

Analysis of open issues reveals these dominant feature directions:

| Trend | Evidence | Community Interest |
|-------|----------|-------------------|
| **IDE Integration Expansion** | VS 2026, Dart/Flutter, Scala LSP requests | High (400+ combined 👍) |
| **Transparency & Control** | Always-show thinking, usage quota visibility | High (280+ combined 👍) |
| **Platform-Specific Features** | Windows worktree control, macOS security hardening | Moderate |
| **Workflow Automation** | Cowork Bridge, PreResponse hooks | Growing interest |
| **Memory System Improvements** | Consolidation nudging, redundant file prevention | Emerging |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **Session Resume Crashes** | Multiple reports (#53214, #53347, #53067) | Regression in v2.1.119-120 affecting macOS/Linux; undefined callbacks causing immediate crashes |
| **Context Management Deadlock** | #23047 (now fixed) | Inability to compact when context limit reached forced data loss |
| **Billing Routing Errors** | #53262 | HERMES.md in git history silently routed requests to extra usage, burning $200 in credits |
| **Windows Performance** | #5771 | 100% CPU/memory consumption on Windows 11 after recent updates |
| **Bedrock Model Compatibility** | #23499, #51711 | Opus 4.6/4.7 via Bedrock inference profiles failing with invalid model ID or thinking.type errors |
| **Malware Impersonation** | #34622 | Active Google Ads campaign distributing credential stealer under Claude Code branding |

---

*End of digest. For real-time updates, visit [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code).*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest

**Date:** 2026-04-26
**Repository:** github.com/openai/codex

---

## 1. Today's Highlights

The Codex project sees continued momentum with the release of **rust-v0.126.0-alpha.2** and significant progress on permission system refactoring. Community attention remains focused on memory management issues—particularly MCP child process leaks causing zombie processes and elevated memory usage—while feature requests for remote development support and expanded context windows dominate discussion.

---

## 2. Releases

| Version | Type | Summary |
|---------|------|---------|
| **rust-v0.126.0-alpha.2** | Alpha | Release 0.126.0-alpha.2 published to the Rust SDK ecosystem |

---

## 3. Hot Issues

| # | Title | Author | Comments | 👍 | Why It Matters |
|---|-------|--------|----------|----|----------------|
| [#10450](https://github.com/openai/codex/issues/10450) | Remote Development in Codex Desktop App | @pocca2048 | 168 | 604 | **Top community request.** Users want Codex Desktop to support remote workspaces via SSH or containers, matching VS Code's Remote Development capabilities. |
| [#16231](https://github.com/openai/codex/issues/16231) | High CPU usage on macOS after updating Codex in VS Code extension | @Filly-MinghaoLUO | 60 | 58 | **Performance regression.** Reports of elevated CPU and thermal throttling on Apple Silicon (M5 Pro) after extension update 26.325.31654. |
| [#19464](https://github.com/openai/codex/issues/19464) | Support 1M token context for GPT-5.5 in Codex | @umikato | 33 | 29 | **Context window enhancement.** Users request extending beyond the current 400K context limit to match API capabilities. |
| [#9203](https://github.com/openai/codex/issues/9203) | Please make "/undo" back | @SunRunAway | 29 | 154 | **Popular feature restoration.** The `/undo` command was removed; community wants it back to revert Codex-applied changes to untracked files. |
| [#12491](https://github.com/openai/codex/issues/12491) | MCP child processes not reaped after task completion | @rolldav | 17 | 3 | **Critical memory leak.** 1,300+ zombie processes and 37GB memory consumption from unreaped MCP children. |
| [#11626](https://github.com/openai/codex/issues/11626) | Add /rewind checkpoint restore | @Alek2077 | 12 | 92 | **Session recovery feature.** Would restore both conversation state and workspace edits from checkpoints. |
| [#19585](https://github.com/openai/codex/issues/19585) | Pro weekly usage limit depletes unusually fast on 5.5 | @GGBondBlueWhale | 5 | 0 | **Billing concern.** Pro users report accelerated quota consumption, potentially exacerbated by context compaction instability. |
| [#19558](https://github.com/openai/codex/issues/19558) | Codex Desktop GPT-5.5 remote compaction fails and leaves thread unusable | @DreamZzz | 5 | 2 | **Data integrity risk.** Automatic context compaction failures render threads permanently unusable. |
| [#19333](https://github.com/openai/codex/issues/19333) | Codex Mac app high memory usage after latest update | @PrabhathMalindaGit | 4 | 0 | **macOS performance issue.** Elevated memory consumption on macOS Tahoe 26.4.1 following update 26.422.21637. |
| [#19601](https://github.com/openai/codex/issues/19601) | "This chat was flagged for possible cybersecurity risk" on non-cybersecurity task | @hourianto | 3 | 0 | **False positive safety flag.** Legitimate workflows incorrectly blocked by security heuristics. |

---

## 4. Key PR Progress

| # | Title | Author | Status | Significance |
|---|-------|--------|--------|--------------|
| [#19620](https://github.com/openai/codex/pull/19620) | Escape turn metadata headers as ASCII JSON | @etraut-openai | OPEN | Fixes header corruption for workspaces with non-ASCII paths in HTTP/WebSocket requests. |
| [#19392](https://github.com/openai/codex/pull/19392) | permissions: derive compatibility policies from profiles | @bolinfest | OPEN | Part of major permission system refactor to eliminate drift between profiles and legacy sandbox projections. |
| [#19606](https://github.com/openai/codex/pull/19606) | permissions: make runtime config profile-backed | @bolinfest | OPEN | Makes `PermissionProfile` the canonical permissions shape across the codebase. |
| [#19395](https://github.com/openai/codex/pull/19395) | permissions: finish profile-backed app surfaces | @bolinfest | OPEN | Updates user-facing surfaces to stop presenting legacy sandbox as authoritative. |
| [#19394](https://github.com/openai/codex/pull/19394) | permissions: remove core legacy policy round trips | @bolinfest | OPEN | Eliminates lossy conversions between profile-backed and `SandboxPolicy` representations. |
| [#19393](https://github.com/openai/codex/issues/19393) | permissions: migrate approval and sandbox consumers to profiles | @bolinfest | OPEN | Ensures `Disabled` and `External` remain distinct; preserves split filesystem semantics. |
| [#14428](https://github.com/openai/codex/pull/14428) | Fork sessions into new multiplexer panes | @rakan-oai | OPEN | Adds pane-aware `/fork` support for tmux and zellij with multiplexer-specific placement options. |
| [#19625](https://github.com/openai/codex/pull/19625) | Reset TUI keyboard reporting on exit | @etraut-openai | OPEN | Fixes iTerm2 raw key fragment issues when exiting TUI with Ctrl+C. |
| [#18595](https://github.com/openai/codex/pull/18595) | feat(tui): add vim composer mode | @fcoury-oai | OPEN | Adds Vim normal/operator bindings, `/vim` slash command, and frozen preset snapshots. |
| [#18576](https://github.com/openai/codex/pull/18576) | feat(tui): render markdown tables responsively | @fcoury-oai | OPEN | Implements responsive pipe-table rendering with terminal-width-aware layout. |

---

## 5. Feature Request Trends

Analysis of open issues reveals these dominant feature directions:

1. **Remote Development** — Strong demand for SSH/container workspace support in Codex Desktop (#10450, 604 👍)
2. **Extended Context Windows** — Requests to push beyond 400K tokens to 1M for GPT-5.5 (#19464)
3. **Session Recovery** — Undo/rewind capabilities to revert both chat state and workspace edits (#9203, #11626)
4. **TUI Enhancements** — Vim mode, keymap customization, working directory switching without restart (#18595, #12464)
5. **MCP Improvements** — Better process lifecycle management and server booting reliability (#12491, #17444)
6. **VS Code Extension** — Increased session caps, session sidebar improvements, Remote-SSH support (#15368, #19603, #19608)

---

## 6. Developer Pain Points

| Category | Description | Frequency |
|----------|-------------|-----------|
| **MCP Memory Leaks** | Child processes not reaped after task completion, causing zombie processes and 30GB+ memory consumption | High (multiple reports) |
| **macOS Performance** | High CPU usage and temperature on Apple Silicon after recent extension updates | High |
| **Context Compaction Failures** | Remote compaction errors render threads unusable; quota depletion faster than expected | Medium-High |
| **Safety Check False Positives** | Legitimate workflows flagged as cybersecurity risks, blocking development tasks | Medium |
| **VS Code Extension Instability** | Flash/blink behavior, empty thread bodies, session resume hangs | Medium |
| **CLI Startup Lag** | Slow startup and input lag reported since version 0.84 | Medium |

---

*End of digest. Data sourced from github.com/openai/codex as of 2026-04-26.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest

**Date:** 2026-04-26
**Repository:** [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 1. Today's Highlights

The community is actively addressing reliability and UX issues. A significant PR (#25959) introduces **tool repair and auto-recovery** mechanisms to handle malformed tool calls, while another (#25947) adds **versioned pre-write backups** to prevent destructive modification loops. On the platform side, a new issue (#25992) reports MCP server disconnections on Windows/WSL that need investigation.

---

## 2. Releases

**No new releases in the last 24 hours.**

---

## 3. Hot Issues

| # | Issue | Summary | Why It Matters | Comments | Link |
|---|-------|---------|----------------|----------|------|
| 1 | **#22745** - AST-aware file reads/search/mapping | Epic tracking investigation into AST-aware tooling for precise method bounds and reduced token noise | Could significantly improve codebase navigation accuracy and reduce API costs | 5 | [View](https://github.com/google-gemini/gemini-cli/issues/22745) |
| 2 | **#22323** - Subagent recovery after MAX_TURNS | Subagent reports GOAL success even when hitting max turn limit without analysis | P1 priority—hides critical failures from users, undermining trust | 4 | [View](https://github.com/google-gemini/gemini-cli/issues/22323) |
| 3 | **#24916** - Repeated permission prompts | CLI keeps asking for file permissions despite "allow for all future sessions" | Poor UX—users frustrated by redundant confirmations | 3 | [View](https://github.com/google-gemini/gemini-cli/issues/24916) |
| 4 | **#25166** - Shell stuck on "Waiting input" | Shell commands complete but CLI hangs waiting for input | Blocks workflow—requires force kill to recover | 2 | [View](https://github.com/google-gemini/gemini-cli/issues/25166) |
| 5 | **#23571** - Tmp scripts in random locations | Model creates edit scripts across various directories when restricted | Creates cleanup overhead; clutters workspaces before commits | 2 | [View](https://github.com/google-gemini/gemini-cli/issues/23571) |
| 6 | **#22267** - Browser Agent ignores settings.json | Browser Agent ignores maxTurns and other overrides | Configuration system inconsistency; users can't control behavior | 2 | [View](https://github.com/google-gemini/gemini-cli/issues/22267) |
| 7 | **#25992** - MCP servers "Disconnected" on Windows/WSL | MCP servers via wsl.exe always report disconnected despite valid JSON-RPC | Platform compatibility issue affecting Windows developers | 0 | [View](https://github.com/google-gemini/gemini-cli/issues/25992) |
| 8 | **#25218** - Table streaming breaks screen readers | Tables re-render on every chunk during streaming | Accessibility violation—breaks assistive technology | 0 | [View](https://github.com/google-gemini/gemini-cli/issues/25218) |
| 9 | **#24546** - Helper to detect SSH | Need utility to detect if CLI runs in SSH session | Required to diagnose terminal rendering issues in remote sessions | 0 | [View](https://github.com/google-gemini/gemini-cli/issues/24546) |
| 10 | **#24470** - Scroll issues with long chats | Screen flashes and scrollbar jumps during scrolling | Degrades UX for power users with extensive chat histories | 0 | [View](https://github.com/google-gemini/gemini-cli/issues/24470) |

---

## 4. Key PR Progress

| # | PR | Author | Summary | Status | Link |
|---|-----|--------|---------|--------|------|
| 1 | **#25958** - Signal forwarding in relaunchAppInChildProcess | @achernez | Forwards SIGTERM, SIGINT, SIGHUP, SIGUSR2 to child CLI process; fixes VS Code companion script | OPEN | [View](https://github.com/google-gemini/gemini-cli/pull/25958) |
| 2 | **#25959** - Tool repair and continuation auto-recovery | @achernez | Uses fuzzy matching to repair misspelled tool names; adds legacy session auto-recovery | OPEN | [View](https://github.com/google-gemini/gemini-cli/pull/25959) |
| 3 | **#25957** - Event-driven hook system messages | @achernez | Refactors hook handling to be event-driven; prevents lost messages before UI subscription | OPEN | [View](https://github.com/google-gemini/gemini-cli/pull/25957) |
| 4 | **#25947** - Versioned pre-write backups | @dolphprefect | Introduces session-scoped transactional file operations with agent-driven restore | OPEN | [View](https://github.com/google-gemini/gemini-cli/pull/25947) |
| 5 | **#25633** - Record modelVersion in transcript | @nadja-y | Fixes session recording to use server's chunk.modelVersion instead of pre-request resolved model | OPEN | [View](https://github.com/google-gemini/gemini-cli/pull/25633) |
| 6 | **#25989** - Hyphenated MCP server names | @MukundaKatta | Normalizes hyphenated MCP tool names (mcp_hyphen-server → mcp_hyphen_server) | OPEN | [View](https://github.com/google-gemini/gemini-cli/pull/25989) |
| 7 | **#25943** - Ctrl+Backspace fallback | @TinyblackQvQ | Adds modifyOtherKeys fallback for word delete on terminals without native support | OPEN | [View](https://github.com/google-gemini/gemini-cli/pull/25943) |
| 8 | **#25981** - Dismiss update banner on /clear | @Anjaligarhwal | Ensures /clear command dismisses the update available banner | OPEN | [View](https://github.com/google-gemini/gemini-cli/pull/25981) |
| 9 | **#25975** - Expand env vars in MCP server args | @kwanghan-bae | Expands `${VARIABLE_NAME}` in MCP server command, args, and cwd fields | OPEN | [View](https://github.com/google-gemini/gemini-cli/pull/25975) |
| 10 | **#25962** - Standardize config option names | @KoushikAD1234 | Renames config options to consistent positive boolean semantics (showX, enableY) | OPEN | [View](https://github.com/google-gemini/gemini-cli/pull/25962) |

---

## 5. Feature Request Trends

Based on issue analysis, the community is requesting:

1. **Enhanced Agent Reliability**
   - AST-aware file operations for precise code navigation
   - Better subagent awareness of approval modes (Plan/Auto-Edit)
   - Memory routing: global vs. project-scoped storage

2. **Improved Tool Intelligence**
   - Proactive memory writes based on user preferences
   - Discouraging destructive commands (git reset --force, etc.)
   - Smarter tool scoping when >128 tools available

3. **Platform & Terminal Improvements**
   - SSH session detection helpers
   - Better Windows/WSL compatibility
   - UI refinements for remote sessions

4. **Accessibility & UX**
   - Screen reader-compatible table streaming
   - Scroll stability in long conversations
   - Consistent settings behavior across components

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact | Related Issues |
|------------|-----------|--------|----------------|
| **Permission prompts repeatedly appearing** | High | UX frustration; workflow interruption | #24916 |
| **Shell commands hanging after completion** | Medium | Requires force kill; lost work risk | #25166 |
| **MCP server disconnections on Windows/WSL** | Medium | Blocks Windows developer adoption | #25992 |
| **Settings.json ignored by Browser Agent** | Medium | Configuration system inconsistency | #22267 |
| **Tmp scripts scattered across directories** | Medium | Cleanup overhead before commits | #23571 |
| **Scroll/flash issues in long chats** | Medium | Degrades power user experience | #24470 |
| **Subagent failures hidden as success** | High | Undermines trust in agent results | #22323 |

---

*Generated from GitHub data • [Subscribe to updates](https://github.com/google-gemini/gemini-cli/subscription)*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest – 2026-04-26

## 1. Today's Highlights
- **No new releases** in the last 24 hours; the latest stable version remains 0.0.411 (released earlier).
- **Critical bugs dominate**: Multiple issues highlight infinite loops causing quota exhaustion, MCP transport timeouts, and permission failures in SSH dev containers—these directly impact developer productivity and cost.
- **Feature requests surge**: Community is actively requesting per-repository MCP configuration, local auto-memory, and master instruction files, indicating strong demand for deeper customization and offline capabilities.

## 2. Releases
- **No new releases** in the past 24 hours.
  Latest version: **0.0.411** (see [release history](https://github.com/github/copilot-cli/releases)).

## 3. Hot Issues (10 Noteworthy Items)
1. **[#1540](https://github.com/github/copilot-cli/issues/1540) – Endless loop eat all my quota** (CLOSED)
   - **Why it matters**: A user lost all premium quota due to an endless loop when the model failed to find the `task_complete` tool. This highlights a critical failure mode that can lead to unexpected costs.
   - **Reaction**: 3 comments, 0 thumbs up. Closed with no clear resolution yet.

2. **[#2528](https://github.com/github/copilot-cli/issues/2528) – Support per-repository MCP server configuration (.github/mcp.json)** (OPEN)
   - **Why it matters**: Currently, MCP servers are user-level only. Per-repository config would enable teams to define context-specific tools, improving project isolation and reproducibility.
   - **Reaction**: 2 comments, 5 thumbs up—significant community interest.

3. **[#2892](https://github.com/github/copilot-cli/issues/2892) – MCP stdio transport for sub-agents closes after ~4 seconds** (OPEN)
   - **Why it matters**: Breaks long-running sub-agents, causing MCP tool calls to fail mid-generation. This blocks advanced agent workflows.
   - **Reaction**: 1 comment, 0 thumbs up. Needs investigation.

4. **[#2976](https://github.com/github/copilot-cli/issues/2976) – Master instructions file** (CLOSED)
   - **Why it matters**: Request for a global instruction file that Copilot follows in all sessions, regardless of context. Could enforce organization-wide policies.
   - **Reaction**: 1 comment, 0 thumbs up. Closed—likely deferred or out of scope.

5. **[#2972](https://github.com/github/copilot-cli/issues/2972) – UX gap: Esc cancels agent but clears typed input buffer** (CLOSED)
   - **Why it matters**: Users lose typed follow-up messages when interrupting the agent, forcing rework. Poor UX for iterative workflows.
   - **Reaction**: 1 comment, 0 thumbs up. Closed—needs design review.

6. **[#2969](https://github.com/github/copilot-cli/issues/2969) – Autopilot infinite loop on externally blocked task** (OPEN)
   - **Why it matters**: Autopilot relaunches blocked agents indefinitely, consuming premium requests. Leads to quota exhaustion without user intervention.
   - **Reaction**: 1 comment, 0 thumbs up. Critical for cost control.

7. **[#2974](https://github.com/github/copilot-cli/issues/2974) – No Access to Pro+ models** (OPEN)
   - **Why it matters**: Users with paid subscriptions cannot access higher-tier models in the CLI, limiting capability.
   - **Reaction**: 0 comments, 0 thumbs up. Needs clarification on subscription tiers.

8. **[#2971](https://github.com/github/copilot-cli/issues/2971) – Autopilot write operations silently fail after VS Code SSH dev container network reconnect** (OPEN)
   - **Why it matters**: In SSH dev containers, write tools permanently fail with "Permission denied", causing infinite retry loops. Blocks remote development workflows.
   - **Reaction**: 0 comments, 0 thumbs up. High priority for remote devs.

9. **[#2930](https://github.com/github/copilot-cli/issues/2930) – Feature Request: Local auto-memory (agent-initiated, no remote storage)** (OPEN)
   - **Why it matters**: Organizations disabling remote Copilot Memory have no local alternative. Local auto-memory would enable accumulation of knowledge without cloud storage, addressing security concerns.
   - **Reaction**: 0 comments, 0 thumbs up. Strategic for enterprise adoption.

10. **[#2968](https://github.com/github/copilot-cli/issues/2968) – Line wraps break URL links in Windows Terminal** (OPEN)
    - **Why it matters**: Long URLs wrap incorrectly in Windows Terminal, making links unclickable. Degrades usability on Windows.
    - **Reaction**: 0 comments, 0 thumbs up. Minor but annoying UX bug.

## 4. Key PR Progress
- **[#2970](https://github.com/github/copilot-cli/pull/2970) – Create devcontainer.json** (OPEN)
  - **What it does**: Adds a development container configuration to simplify contributor setup.
  - **Significance**: Lowers barrier to entry for external contributors, potentially accelerating community involvement.
  - **Status**: Open, 0 comments, 0 thumbs up.

## 5. Feature Request Trends
- **Per-repository configuration**: MCP servers, custom instructions, and LSP settings should be definable at the repo level (e.g., `.github/mcp.json`).
- **Local/offline capabilities**: Local auto-memory, offline instruction files, and master instructions to reduce reliance on cloud storage.
- **Agent reliability**: Fixes for infinite loops, autopilot blocking, and permission failures to ensure predictable behavior.
- **Model access**: Users expect seamless access to Pro+ models based on subscription tier.
- **Terminal compatibility**: Better handling of URL wrapping and link detection across Windows Terminal and other environments.

## 6. Developer Pain Points
- **Quota exhaustion from infinite loops**: Multiple issues (#1540, #2969) highlight agents consuming premium requests without progress, leading to unexpected costs.
- **Permission and network failures in remote environments**: SSH dev containers cause silent write failures and retry loops (#2971).
- **Loss of input on interruption**: Pressing Esc to cancel agent clears typed text, forcing rework (#2972).
- **MCP transport timeouts**: Sub-agents lose MCP connections after ~4 seconds, breaking long tasks (#2892).
- **Lack of offline memory**: No local alternative to Copilot Memory for security-conscious orgs (#2930).

---
*Digest generated on 2026-04-26. Data sourced from [github.com/github/copilot-cli](https://github.com/github/copilot-cli).*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – 2026-04-26**

---

### 1. Today's Highlights
- The community is actively expanding session isolation and cross‑device workflows: new PRs introduce **git worktree‑based isolated sessions** (CLI and web UI) and a **running‑session indicator** in the sidebar.
- Two bugs affect Windows users in the latest v1.39.0: a **skill‑file encoding error** on Chinese systems and a **JavaScript MIME type mismatch** in `/web` mode that prevents page loading.
- A **token‑consumption issue** where error messages themselves count toward usage has been reported, raising cost concerns for heavy users.

---

### 2. Releases
No new releases in the last 24 hours. The latest stable version remains **v1.39.0** (released 2026‑04‑25). Users on Chinese Windows systems should be aware of the encoding bug noted below.

---

### 3. Hot Issues (Last 24 h)
*Only 6 issues were updated; all are highlighted.*

| # | Title | Type | Key Points | Community Reaction |
|---|-------|------|------------|--------------------|
| [#1282](https://github.com/MoonshotAI/kimi-cli/issues/1282) | **Remote Control – Continue local sessions from any device** | Enhancement | Requests a feature to access and resume a local Kimi Code CLI session from a phone, tablet, or browser, enabling seamless workflow continuity. | 3 👍, 3 comments – moderate interest; seen as a major productivity boost for mobile/remote work. |
| [#2070](https://github.com/MoonshotAI/kimi-cli/issues/2070) | **Windows Chinese system: skill file encoding error (v1.38.0+)** | Bug | After upgrading to v1.39.0, Chinese Windows users encounter `'utf-8' codec can't decode byte` errors when loading built‑in skill files. | 2 comments – impacts a specific locale; users are seeking a quick fix. |
| [#2059](https://github.com/MoonshotAI/kimi-cli/issues/2059) | **Error messages also consume tokens** | Bug | Token budget is depleted by error output itself, not just the model’s response, leading to faster consumption than expected. | 1 comment – raises concerns about cost predictability, especially for automated pipelines. |
| [#2074](https://github.com/MoonshotAI/kimi-cli/issues/2074) | **v1.39.0 `/web` mode JavaScript MIME type error** | Bug | In `/web` mode, JavaScript files are served with an incorrect MIME type, causing the page to fail loading on Windows 10. | 0 comments – blocks web‑based interaction for affected users. |
| [#2072](https://github.com/MoonshotAI/kimi-cli/issues/2072) | **Yolo mode conflates auto‑approve with non‑interactive** | Enhancement | The Yolo mode treats `auto-approve` as non‑interactive, preventing `AskUserQuestion` prompts, which limits user input in certain workflows. | 0 comments – impacts users relying on interactive confirmations. |
| [#2071](https://github.com/MoonshotAI/kimi-cli/issues/2071) | **Mandatory project skill loading gates (`.kimi/require-skills`)** | Feature Request | Proposes a project‑level mechanism to enforce loading of specific skills (e.g., `.kimi/require-skills`), ensuring compliance with team conventions. | 0 comments – appeals to teams with strict workflow requirements. |

---

### 4. Key PR Progress (Last 24 h)
*All 6 updated PRs are listed; they span new features, UX improvements, and bug fixes.*

| # | Title | Author | Summary | Status |
|---|-------|--------|---------|--------|
| [#2076](https://github.com/MoonshotAI/kimi-cli/pull/2076) | **feat(web): worktree UI for isolated sessions** | @cal-gooo | Exposes the CLI’s git‑worktree capability through the web UI—users can create worktree‑backed sessions from the new‑session dialog and have worktrees automatically cleaned up on deletion. | Open (stacked on #2073) |
| [#2075](https://github.com/MoonshotAI/kimi-cli/pull/2075) | **feat(web): show running indicator for active sessions in sidebar** | @cal-gooo | Adds a visual “alive” marker next to running sessions in the sidebar, allowing users to instantly see which sessions are busy without opening them. | Open |
| [#1960](https://github.com/MoonshotAI/kimi-cli/pull/1960) | **feat(soul): RalphFlow architecture with ephemeral context and convergence detection** | @ORDL-AMF | Introduces an automated iteration framework that runs flow iterations in isolated temporary contexts, preventing infinite loops while supporting robust multi‑step workflows. | Open |
| [#2047](https://github.com/MoonshotAI/kimi-cli/pull/2047) | **fix(acp): load `~/.kimi/mcp.json` in ACP server sessions** | @natrollus | Ensures that locally configured MCP servers (from `~/.kimi/mcp.json`) are loaded when running `kimi acp`, aligning tool availability with interactive sessions. | Open |
| [#2073](https://github.com/MoonshotAI/kimi-cli/pull/2073) | **feat(cli): add git worktree support for isolated sessions** | @cal-gooo | Adds `--worktree` / `-W` flag to create a new git worktree for a session, enabling parallel Kimi sessions on the same repo without file conflicts. | Open |
| [#1896](https://github.com/MoonshotAI/kimi-cli/pull/1896) | **fix(core): honor `http_proxy` env vars via `aiohttp trust_env=True`** | @hao-cyber | Enables the CLI to respect standard proxy environment variables (`http_proxy`, `https_proxy`, `NO_PROXY`) by setting `trust_env=True` on `aiohttp.ClientSession`. | Closed (merged) |

---

### 5. Feature Request Trends
Analysis of recent issues and PRs reveals the following high‑demand directions:

1. **Cross‑device / Remote Session Access** – Users want to resume local CLI sessions from any device or browser (#1282).
2. **Project‑level Skill Governance** – Teams are requesting mandatory skill loading mechanisms to enforce workflow rules (#2071).
3. **Enhanced Session Isolation** – Worktree‑based isolated sessions (CLI and web UI) are a major theme (#2073, #2076).
4. **Improved Interactive Modes** – Refinements to Yolo mode behavior, particularly around auto‑approve and user prompts (#2072).
5. **Web UI Enhancements** – Visual cues for active sessions and better session management in the web interface (#2075, #2076).

---

### 6. Developer Pain Points
Recurring frustrations and high‑frequency requests include:

- **Windows Compatibility Issues** – Encoding errors in skill files on Chinese Windows systems (#2070) and MIME type mismatches in `/web` mode (#2074) are blocking users.
- **Token Consumption Opacity** – Error messages counting toward token usage (#2059) creates unpredictable costs, especially in automated pipelines.
- **Inconsistent Tool Availability** – ACP server sessions not loading user‑defined MCP tools (#2047) forces workarounds.
- **Proxy Support Gaps** – Until the recent fix (#1896), the CLI ignored system proxy settings, hindering enterprise deployments.
- **Yolo Mode Interaction Limits** – The current auto‑approve behavior prevents natural user prompts, limiting interactivity (#2072).

These points highlight a need for better locale handling, transparent token accounting, and more consistent configuration across modes.

---

*End of

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-26

## Today's Highlights

The OpenCode community saw significant activity around AI provider integration, with multiple DeepSeek V4 bugs surfacing around multi-turn tool calls and reasoning content handling. Security and privacy concerns remain prominent, as users report file scanning behavior extending beyond workspace boundaries. The v1.14.25 release brings improved permission configuration and LSP enhancements, while active development continues on MCP bridging and OAuth endpoints.

---

## Releases

### v1.14.25
**Core improvements focused on permissions and shell stability:**
- Fixed permission config preserving rule order with full IntelliSense for tool permission keys
- LSP permission prompts now include request details (operation, file, cursor position)
- Shell commands maintain correct working directory after login shell startup files run

---

## Hot Issues

### 1. DeepSeek V4 Multi-Turn Tool Calls Failing with 400 Error
**#24190** | 23 comments | 👍 8
Multi-turn conversations with DeepSeek V4 Pro/Flash fail with 400 errors starting from the second turn. The first turn always succeeds, but subsequent turns break. This is a critical integration bug affecting users relying on DeepSeek models via OpenRouter or direct API.

### 2. /undo Command Only Reverts Chat, Not File Changes
**#5474** | 21 comments | 👍 7
When using `/undo` to revert AI-generated changes, only the conversation message rolls back—the actual file modifications persist. This creates a dangerous mismatch between what the user sees and the actual codebase state.

### 3. Privacy and Data Collection Clarification Request
**#459** | 14 comments | 👍 50
Users are requesting explicit documentation about OpenCode's privacy practices and data collection policies. While the project positions itself as local-first, users want clearer transparency about what data is transmitted.

### 4. CLI Scans Outside Workspace on macOS
**#15163** | 5 comments | 👍 3
The `opencode-cli` on macOS indexes files beyond the intended project scope, touching `~/Library` and application cache directories, triggering security alerts. This is a significant privacy and security concern.

### 5. Desktop App Scans Random System Folders
**#22187** | 5 comments | 👍 4
OpenCode Desktop causes 100% CPU usage on multiple cores while scanning random system folders. Logs are empty, making debugging difficult. Affects both Linux and Windows.

### 6. Compaction Loses Entire Conversation
**#14368** | 7 comments
When context limits trigger compaction, OpenCode forgets the entire conversation context, rendering the session unusable.

### 7. DeepSeek reasoning_content Not Passed Back in Multi-Turn
**#24261** | 6 comments | 👍 2
Related to #24190—DeepSeek models with thinking mode enabled don't properly pass reasoning content back in multi-turn conversations, breaking the reasoning chain.

### 8. Sub Agents Do Not Obey Plan/Build Mode
**#23533** | 4 comments
Sub-agents ignore Plan mode and start implementing changes when the user expects them to only diagnose. Spawned agents have been observed making live changes during what should be a planning phase.

### 9. PostHog Network Error and Telemetry Concerns
**#23644** | 5 comments
Users encounter `PostHogFetchNetworkError` when trying to disable telemetry. Combined with #459, there's growing community concern about data collection practices.

### 10. Mobile Touch Optimization Needed
**#18767** (PR) | Active development
While not an issue, this PR highlights the need for better mobile/touch device support, indicating a gap in the current experience for mobile developers.

---

## Key PR Progress

### 1. HTTP API Bridge for Experimental Tool Routes
**#24407** | CLOSED
Bridges Console org switching and experimental tool list endpoints through the HttpApi path. Updates the route checklist for bridged experimental routes.

### 2. Guard Against Undefined MCP Tool Output
**#24401** | CLOSED
Fixes a crash when MCP tools return results with no text content (images only, empty content array). Resolves `TypeError: undefined is not an object (evaluating 'output.split')`.

### 3. Buffer Stdin Before Prompt UI Appears
**#24412** | OPEN
Addresses characters being dropped while typing between launching OpenCode and the prompt UI rendering by buffering stdin input.

### 4. Avoid Invalid Kilo Reasoning Details
**#24411** | OPEN
Fixes invalid request bodies when prior assistant reasoning is converted into a plain string for Kilo/Kimi K2.6 models.

### 5. Bash → Shell Tool Rename with PowerShell Support
**#20039** | OPEN
Renames the bash tool to shell, maintains legacy bash compatibility, and adds shell-specific prompts for PowerShell/cmd so agents receive appropriate instructions.

### 6. MCP OAuth Endpoints Bridged
**#24405** | CLOSED
Bridges MCP OAuth start/callback/authenticate/remove through the experimental HttpApi path, marking MCP as fully bridged.

### 7. MCP Control Endpoints Bridged
**#24403** | CLOSED
Adds bridge coverage for MCP add/connect/disconnect endpoints through the HttpApi.

### 8. Reconnect on Network Disruptions
**#19116** | OPEN
Implements automatic reconnection when VPN switches, SSE timeouts, or connections reset occur. Closes multiple related issues (#17574, #15350, #17099, #15247).

### 9. Mobile Touch Optimization
**#18767** | OPEN
Optimizes OpenCode App for mobile/touch devices while preserving desktop experience.

### 10. Add Changelog Sync Workflow
**#24392** | CLOSED
Adds GitHub Actions workflow that automatically fetches and syncs changelog entries.

---

## Feature Request Trends

**Subagent Visibility & Control**
Multiple requests (#22233, #23784, #23533) call for better subagent status feedback—showing which agent is running, what it's doing, and how long it's been running. Users want subagent status visible in the TUI prompt footer.

**Session Management**
Archived session viewing (#6680), active project indicators (#23549), and session diff handling improvements (#19266) indicate demand for better session lifecycle management.

**UI/UX Enhancements**
- Dismissible toasts with keyboard/click/programmatic control (#23879)
- Visual TUI background color changes on task completion (#20921)
- Unified task state color conventions with icons (#24406)
- Desktop popup notifications (#23842)

**Privacy & Control**
Users want clearer privacy documentation (#459), PostHog disable options (#23644), and control over file scanning behavior (#15163, #22187).

**Platform-Specific Features**
- Mobile/touch optimization (#18767)
- Windows stability improvements
- Custom theme support on Windows (#24396)

---

## Developer Pain Points

**DeepSeek V4 Integration Issues**
Multiple related bugs (#24190, #24261) indicate ongoing friction with DeepSeek V4 multi-turn conversations and reasoning content handling. This is currently the most active bug cluster.

**File Scanning & Privacy**
Both CLI (#15163) and Desktop (#22187) are reported scanning beyond workspace boundaries, triggering security alerts. This is a recurring theme with significant user concern.

**Incomplete /undo Functionality**
The `/undo` command (#5474) only reverts chat messages, not file changes—a dangerous mismatch that could lead to data loss or confusion.

**Subagent Behavior in Plan Mode**
Sub-agents ignoring Plan/Build mode (#23533) and spawning implementation agents during diagnostic phases indicates subagent governance needs work.

**Context Loss on Compaction**
Session compaction (#14368) losing entire conversation context undermines long-running workflow reliability.

**MCP Tool Loading Failures**
MCP servers (#24381) are loading partial tool sets (80 of 96 tools), indicating integration instability.

**Windows Stability**
Agents randomly freezing indefinitely (#24342) and desktop apps going offline (#21199) suggest Windows-specific reliability issues.

**LSP Confusion**
Users report LSP activation timing (#24325) doesn't match documentation—tools activate on write/edit, not read.

---

*Data sourced from github.com/anomalyco/opencode | Generated 2026-04-26*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest

**Date:** 2026-04-26
**Repository:** github.com/QwenLM/qwen-code

---

## 1. Today's Highlights

The Qwen Code community sees significant activity around MCP (Model Context Protocol) infrastructure, with a critical production-blocking issue limiting clients to 2 connections. New features are landing in the PR pipeline—including macOS desktop app support, API timeout environment overrides, and sticky todo panels—while developers continue reporting challenges with local model deployments and third-party provider integrations.

---

## 2. Releases

**No new releases in the last 24 hours.**

---

## 3. Hot Issues

| # | Issue | Comments | Why It Matters |
|---|-------|----------|----------------|
| **#3277** | **[MCP Client Limited to 2 Connections](https://github.com/QwenLM/qwen-code/issues/3277)** | 7 | **CRITICAL** — Production multi-node infrastructure is breaking due to artificial connection limits. Affects enterprise deployments requiring concurrent MCP connections. |
| **#643** | **[Xcode 无法使用qwen3-coder-plus](https://github.com/QwenLM/qwen-code/issues/643)** | 7 | P1 priority — Xcode integration fails with "[] is too short - 'tools'" error, blocking iOS/macOS developers from using the plus model variant. |
| **#528** | **[Parameter "todos" must be an array](https://github.com/QwenLM/qwen-code/issues/528)** | 7 | Local Qwen3-coder-flash deployments via vLLM encounter JSON parameter validation errors, indicating potential API compatibility issues. |
| **#1281** | **[Model returns JSON-format responses](https://github.com/QwenLM/qwen-code/issues/1281)** | 6 | Ollama-deployed models return malformed responses compared to direct API calls, suggesting parsing inconsistencies. |
| **#2466** | **[Adding branching for MCP](https://github.com/QwenLM/qwen-code/issues/2466)** | 5 | Feature request for MCP branching support, reflecting demand for more complex agent workflows with LM Studio integration. |
| **#1105** | **[Missing Accept Diff and Close Diff Editor commands](https://github.com/QwenLM/qwen-code/issues/1105)** | 5 | VS Code integration lacks standard diff commands, reducing usability for code review workflows. |
| **#548** | **[MCP-related errors](https://github.com/QwenLM/qwen-code/issues/548)** | 5 | Regression in recent versions causing MCP errors identical to Gemini CLI issues, suggesting shared dependency problems. |
| **#1316** | **[Conversation history cleared after init file modification](https://github.com/QwenLM/qwen-code/issues/1316)** | 4 | Initialization file changes don't refresh memory without manual restart, breaking iterative development workflows. |
| **#1280** | **[Cannot use local Ollama deployment](https://github.com/QwenLM/qwen-code/issues/1280)** | 4 | Qwen3-Coder-30B-A3B-Instruct-GGUF via Ollama fails with API errors, limiting local development options. |
| **#3417** | **[API error each time after restart](https://github.com/QwenLM/qwen-code/issues/3417)** | 2 | API key stored in `~/.qwen/settings.json` not persisted across restarts, requiring manual re-entry each session. |

---

## 4. Key PR Progress

| # | PR | Status | Summary |
|---|-----|--------|---------|
| **#3629** | **[feat(config): support API timeout env override](https://github.com/QwenLM/qwen-code/pull/3629)** | OPEN | Introduces `QWEN_CODE_API_TIMEOUT_MS` environment variable for generation timeout control, complementing existing settings configuration. |
| **#3627** | **[feat: add macOS desktop app installer](https://github.com/QwenLM/qwen-code/pull/3627)** | OPEN | Creates `Qwen Code.app` for Spotlight/Launchpad launching, replacing closed #3564 with review fixes applied. |
| **#3507** | **[feat(cli): add sticky todo panel to app layouts](https://github.com/QwenLM/qwen-code/pull/3507)** | OPEN | Adds persistent task list visibility during conversations, addressing #2987 for easier progress tracking. |
| **#3495** | **[fix(core): preserve settings-sourced apiKey](https://github.com/QwenLM/qwen-code/pull/3495)** | CLOSED | Fixes #3417 — apiKey from settings.json now persists on restart instead of being cleared when model env var is absent. |
| **#3318** | **[feat(cli): add API preconnect to reduce first-call latency](https://github.com/QwenLM/qwen-code/pull/3318)** | OPEN | Fire-and-forget HEAD request at startup warms TCP+TLS, saving 100-200ms on first API call. Smart skip for proxy environments. |
| **#3576** | **[Feat/openrouter auth](https://github.com/QwenLM/qwen-code/pull/3576)** | OPEN | Browser-based OpenRouter OAuth setup with automatic API key storage and curated model catalog integration. |
| **#3609** | **[fix(vscode-companion): slash command completion](https://github.com/QwenLM/qwen-code/pull/3609)** | OPEN | Fixes zero-width space (`\u200B`) causing slash command autocomplete failure after message submission. |
| **#3624** | **[fix(cli): add API Key option to `qwen auth` menu](https://github.com/QwenLM/qwen-code/pull/3624)** | OPEN | Aligns CLI menu with `/auth` dialog, adding guided Alibaba Cloud and custom API key flows. |
| **#3623** | **[fix(cli): recognize OpenAI-compatible providers](https://github.com/QwenLM/qwen-code/pull/3623)** | OPEN | Fixes misleading "Coding Plan (Incomplete)" status for OpenAI-compatible providers (DeepSeek, Ollama, etc.). |
| **#3488** | **[feat(cli): background-agent UI](https://github.com/QwenLM/qwen-code/pull/3488)** | OPEN | Status-line pill, combined tasks dialog, and detail view for running background subagents. |

---

## 5. Feature Request Trends

Based on issue analysis, the community is requesting:

1. **MCP Infrastructure Enhancements**
   - Branching support for complex workflows (#2466)
   - Higher connection limits for production deployments (#3277)
   - Better MCP stability and error handling (#548)

2. **Local Model Deployment Support**
   - Improved Ollama integration (#1280, #1281)
   - LM Studio compatibility (#2466)
   - Better OpenAI-compatible API handling

3. **IDE/Editor Integration**
   - Complete VS Code diff command support (#1105)
   - Xcode compatibility fixes (#643)
   - Slash command UX improvements (#3609)

4. **Third-Party Provider Features**
   - OpenRouter OAuth and model catalog (#3576)
   - Better GLM/deepseek compatibility (#3464)
   - Flexible API configuration (#3629, #3624)

5. **UI/UX Improvements**
   - Sticky todo panels (#3507)
   - Session management with named chats (#3190)
   - Background agent visibility (#3488)

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **MCP connection limits** | High (critical production issue) | Blocks enterprise multi-node deployments |
| **Local model deployment failures** | High | Limits offline development and cost-saving options |
| **API key persistence** | Medium | Requires manual re-entry every restart |
| **Memory usage spikes** | Medium | 7GB+ usage causing crash reports |
| **Conversation context staleness** | Medium | AI reads outdated code, requires new conversations |
| **VS Code integration gaps** | Medium | Missing diff commands reduce productivity |
| **Third-party model quality** | Medium | GLM and similar providers show degraded performance |
| **Session/history management** | Low-Medium | No easy restore points, history cleared on init changes |

---

*Generated: 2026-04-26 | Data source: github.com/QwenLM/qwen-code*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-04-26

## Today's Highlights

The Pi community saw significant activity around provider integrations and bug fixes. Notable additions include new built-in providers (Together AI, CrofAI, Ark/Volcano Engine) expanding model support, while several critical bugs affecting tool execution, session management, and cross-provider compatibility were addressed. Documentation improvements clarified the project's triage policy for community contributions.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

**1. [Feature Request: Custom Thinking Levels per Model](https://github.com/badlogic/pi-mono/issues/3208)** — 9 comments, 8 👍
Users want models to define their own thinking levels in `models.json`, allowing `Shift+Tab` to cycle only through levels each model supports. The extension API should also expose this via `pi.registerProvider()`. High community interest suggests this is a widely desired customization feature.

**2. [Bash tool not working, not reading from settings.json](https://github.com/badlogic/pi-mono/issues/3521)** — 9 comments
Bash tool fails with "No bash shell found" errors on Windows, even when Git Bash is installed. Users report the tool isn't respecting `shellPath` in `settings.json`. This is a blocking issue for Windows developers.

**3. [Add pi.runWhenIdle() to schedule work after the agent has fully settled](https://github.com/badlogic/pi-mono/issues/2023)** — 8 comments
Extension developers need an API to schedule work after the agent completes its current turn. The existing `sendUserMessage` workaround is fragile and doesn't guarantee proper timing.

**4. [No hotkey for new line on Ubuntu terminal by default](https://github.com/badlogic/pi-mono/issues/2203)** — 4 comments
Default Ptyxis terminal on Ubuntu lacks a hotkey for new line. Users must manually configure `followUp: "alt+down"` in keybindings.json. Documentation update requested.

**5. [Receiving Error: Connection error](https://github.com/badlogic/pi-mono/issues/3679)** — 4 comments
Users behind new network security face connection failures but lack debug logging options to diagnose issues. Request for better diagnostic tooling.

**6. [displayName for providers registered by extensions](https://github.com/badlogic/pi-mono/issues/3730)** — 2 comments
Extension-registered providers show raw `providerId` in `/login` instead of human-friendly names. Built-in providers display properly, creating inconsistent UX.

**7. [AnthropicMessagesCompat: add supportsCacheControl flag](https://github.com/badlogic/pi-mono/issues/3728)** — 2 comments
Fireworks AI's Anthropic-compatible API rejects `cache_control` on tool schema definitions. Need to conditionally omit this field for compatibility.

**8. [execute_command `/reload` gets stuck in a loop](https://github.com/badlogic/pi-mono/issues/3560)** — 2 comments
GPT-5.4 enters infinite loop when attempting `/reload` at session end. Reproducible with specific model and skill update workflows.

**9. [pi.setSessionName() does not refresh terminal title](https://github.com/badlogic/pi-mono/issues/3686)** — 2 comments
Extension API's `setSessionName()` persists session info but doesn't update terminal window title, unlike the built-in `/name` command.

**10. [DeepSeek V4 Pro: xhigh reasoning effort silently clamped to high](https://github.com/badlogic/pi-mono/issues/3662)** — 2 comments
DeepSeek V4 Pro supports `reasoning_effort=max` but `supportsXhigh()` doesn't recognize the model, causing silent degradation to `high` instead of raising an error.

---

## Key PR Progress

**1. [chore(models): regenerate models.generated.ts (adds github-copilot/gpt-5.5)](https://github.com/badlogic/pi-mono/pull/3719)**
Updated model registry to include GitHub Copilot's new `gpt-5.5` model, enabling access to the latest OpenAI models through Copilot integration.

**2. [feat(ai): add together provider (supports deepseek v4)](https://github.com/badlogic/pi-mono/pull/3624)**
Added native Together AI provider support via OpenAI-compatible Chat Completions API, with automatic API key detection and filtered tool-capable models.

**3. [feat(ai): add CrofAI provider](https://github.com/badlogic/pi-mono/pull/3716)**
Integrated CrofAI as a new built-in provider, supporting models from DeepSeek, MoonshotAI, Z.AI, Google, MiniMax, and Qwen with streaming and tool use.

**4. [feat(ai): add Ark (Volcano Engine) provider via Responses API](https://github.com/badlogic/pi-mono/pull/3709)**
Added support for Volcano Engine's Ark platform using the Responses API protocol, supporting streaming, tool calling, and reasoning models.

**5. [fix(bedrock): check model.name for prompt caching and adaptive thinking](https://github.com/badlogic/pi-mono/pull/3527)**
Fixed AWS Bedrock provider to correctly detect Claude models using `model.name` instead of opaque application inference profile ARNs.

**6. [fix(ai): fall back to placeholder for empty Anthropic tool_use.id](https://github.com/badlogic/pi-mono/pull/3664)**
Ensured `normalizeToolCallId` always returns valid IDs matching Anthropic's regex pattern, preventing 400 errors during cross-provider session replay.

**7. [fix: preserve thinking blocks for cross-model reasoning calls](https://github.com/badlogic/pi-mono/pull/3691)**
Fixed DeepSeek V4 Pro and R1 reasoning models by preserving `reasoning_content` in assistant messages when thinking mode is active.

**8. [fix(coding-agent): clear tree navigation busy state on cancel](https://github.com/badlogic/pi-mono/pull/3690)**
Resolved issue where `/tree` cancellation left Pi stuck in "compacting" state, treating normal input as queued messages.

**9. [perf(mom): parallelize thread message deletion](https://github.com/badlogic/pi-mono/pull/3714)**
Optimized message deletion by replacing sequential loops with `Promise.allSettled`, significantly reducing cleanup time for threads with many messages.

**10. [Add built-in update command](https://github.com/badlogic/pi-mono/pull/3680)**
Implemented `pi update` command to self-update Pi, automatically upgrading when running older versions.

---

## Feature Request Trends

Analysis of recent issues reveals several dominant feature directions:

| Theme | Frequency | Examples |
|-------|-----------|----------|
| **Provider/Model Flexibility** | High | Custom thinking levels per model, display names for extension providers, new provider integrations (Together, CrofAI, Ark) |
| **Extension API Enhancements** | Medium-High | `pi.runWhenIdle()`, `pi.setSessionName()` terminal refresh, `ctx.shutdown` exit codes, resume without sending message |
| **UX/Keyboard Customization** | Medium | Ubuntu hotkey defaults, session selector position, inline autocomplete behavior |
| **Debugging/Diagnostics** | Medium | Connection error logging, NTLM proxy support visibility |

---

## Developer Pain Points

1. **Tool Execution Failures** — Multiple reports of `spawn EBADF` errors after v0.70.0→v0.70.2 upgrade affecting bash, subagent, and process tools. Bash tool configuration issues persist on Windows.

2. **Cross-Provider Compatibility** — Sessions switching between providers (especially non-Anthropic → Claude) encounter 400 errors due to tool call ID normalization issues.

3. **Streaming Timeout Limits** — Local LLM streams terminate at 5-minute undici default `bodyTimeout`, with `retry.provider.timeoutMs` unable to raise the ceiling.

4. **Session State Inconsistencies** — `setSessionName()` doesn't refresh terminal title, `/tree` cancellation leaves stuck states, session selector resets to top instead of active session.

5. **Model-Specific Bugs** — DeepSeek V4 Pro reasoning effort clamping, Claude models failing via Antigravity due to OpenAPI schema issues, Google Vertex ADC 404 errors.

6. **Documentation Gaps** — New contributors unclear on triage policy; system prompt documentation needs updates; weekend-closed issues create confusion.

---

*Digest generated from GitHub data for [badlogic/pi-mono](https://github.com/badlogic/pi-mono) — 2026-04-26*

</details>

---
*This digest is auto-generated by [Big Model Radar](https://github.com/borq168/big_model_radar).*
