# AI CLI Tools Community Digest 2026-05-05

> Generated: 2026-05-05 02:02 UTC | Tools covered: 8

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

**Date:** 2026-05-05
**Scope:** Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, OpenCode, Qwen Code, Pi

---

## 1. Ecosystem Overview

The AI CLI tools landscape is experiencing rapid iteration across all major providers, with each tool carving distinct niches in the developer tooling market. Anthropic's Claude Code and OpenAI's Codex dominate community engagement with high comment volumes on session persistence and context window expansion, respectively. Google's Gemini CLI maintains steady activity with focus on agent reliability and memory management. Microsoft's GitHub Copilot CLI faces pressure around premium request accounting, while OpenCode and Qwen Code—backed by gaming and Chinese AI ecosystems—prioritize file safety, terminal rendering, and local LLM integration. Pi distinguishes itself with lightweight design and Xiaomi hardware integration. The collective direction points toward richer multi-agent capabilities, per-repository configuration, and tighter integration with self-hosted models.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases (24h) | Top Issue Volume | Community Sentiment |
|------|-------------|-----------|----------------|------------------|---------------------|
| **Claude Code** | ~50 | 5 | 1 (v2.1.128) | 42 comments (#26452) | Frustrated—session loss dominates |
| **OpenAI Codex** | ~50 | 20 | 3 (rust-v0.129.0-alpha.4/5/6) | 120 comments (#19464) | Engaged—context window debate |
| **Gemini CLI** | ~50 | 50 | 1 (v0.42.0-nightly) | 13 comments (#2353) | Active—high PR throughput |
| **Copilot CLI** | ~50 | 0 | 1 (v1.0.41-0) | 31 comments (#2591) | Concerned—premium request waste |
| **OpenCode** | ~50 | 50 | 2 (v1.14.34, v1.14.35) | 62 comments (#11112) | Mixed—write failures + provider errors |
| **Qwen Code** | 18 | 40 | 1 (v0.15.6-nightly) | 3 comments (multiple) | Calm—steady incremental progress |
| **Pi** | 34 | 13 | 1 (v0.73.0) | 14 comments (#3208) | Focused—local LLM integration |

**Key Observations:**

- **Highest Issue Velocity:** OpenCode and Claude Code report the most critical user frustrations (62 and 42 comments, respectively)
- **Highest PR Throughput:** Gemini CLI and OpenCode merged 50 PRs each in 24 hours, indicating aggressive development
- **Lowest Activity:** Qwen Code (18 issues) and Pi (34 issues) have smaller but dedicated communities
- **Release Cadence:** OpenAI Codex ships alpha releases rapidly (3 in 24h); others maintain stable release schedules

---

## 3. Shared Feature Directions

The following requirements appear across multiple tool communities, signaling industry-wide priorities:

| Feature Direction | Tools Affected | Specific Needs |
|-------------------|----------------|----------------|
| **Session Persistence & Recovery** | Claude Code, OpenCode, Gemini CLI, Copilot CLI | Path-independent session identity, recovery after crashes, session file corruption prevention |
| **Extended Context Windows** | OpenAI Codex, Claude Code, OpenCode | 1M token support (OpenAI), session file size limits (Qwen), context window metadata fixes |
| **Multi-Agent / Subagent Capabilities** | Claude Code, Gemini CLI, OpenCode, Pi | Runtime enforcement, task tool stability, subagent model selection, agent identity JWTs |
| **Per-Repository Configuration** | Copilot CLI, Gemini CLI, OpenCode, Pi | MCP server configs (`.github/mcp.json`), plugin scoping, model preferences per project |
| **Local LLM Integration** | Pi, Qwen Code, OpenCode | llama.cpp/ollama/LM Studio providers, dynamic model discovery, self-hosted model support |
| **Terminal Rendering Reliability** | Qwen Code, OpenCode, Copilot CLI, Gemini CLI | Resize corruption, infinite scroll loops, alt-screen toggles, scrollback preservation |
| **MCP (Model Context Protocol) Support** | Claude Code, Copilot CLI, Gemini CLI, OpenCode | Per-repository MCP configs, OAuth token refresh, duplicate process prevention |
| **File Safety & Integrity** | Qwen Code, OpenCode | Refuse writes to stale files, detect external modifications, enforce prior reads before mutations |
| **Windows/Platform Compatibility** | Claude Code, Gemini CLI, Copilot CLI, OpenCode | PowerShell support, EXDEV errors, TLS warnings, Wayland clipboard, SSH text rendering |
| **Hook/Plugin Security** | Claude Code, OpenAI Codex, Copilot CLI | Trust metadata, untrusted hook warnings, permission decision regressions |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target Users | Technical Approach |
|------|--------------|--------------|-------------------|
| **Claude Code** | Developer productivity with deep IDE integration | Professional developers, enterprise teams | Session-centric, plugin architecture, VS Code extension |
| **OpenAI Codex** | AI-native coding with massive context | Large codebase engineers, researchers | Rust SDK, Responses API, hook-based security model |
| **Gemini CLI** | Lightweight agentic workflows | CLI-first developers, automation engineers | ACP modular architecture, nightlies, TUI-first |
| **Copilot CLI** | GitHub-integrated coding assistant | GitHub users, Microsoft ecosystem | Subscription-based billing, premium request accounting |
| **OpenCode** | Multi-provider flexibility | Developers using mixed model ecosystems | Provider-agnostic, session warping, workspace isolation |
| **Qwen Code** | Performance and file safety | Large codebase maintainers, Chinese developers | FileReadCache, short-circuit reads, Ink-based TUI |
| **Pi** | Minimalist local-first design | Embedded/IoT developers, Xiaomi hardware users | Lightweight, local LLM emphasis, mobile touch support |

**Strategic Differentiators:**

- **Claude Code** differentiates on IDE depth (VS Code extension, session management) and Anthropic model quality
- **OpenAI Codex** leads on context window (debating 1M tokens) and hook security model
- **Gemini CLI** targets automation with nightlies and ACP modularity
- **Copilot CLI** leverages GitHub integration but faces criticism for premium request accounting
- **OpenCode** wins on provider flexibility—supports Kimi, GLM, Qwen, MiniMax, Gemini, Claude, OpenAI
- **Qwen Code** prioritizes performance (FileReadCache) and file safety (refuse stale writes)
- **Pi** occupies the lightweight/embedded niche with Xiaomi hardware integration

---

## 5. Community Momentum & Maturity

| Tool | Community Size | Iteration Speed | Stability | Maturity Signal |
|------|---------------|-----------------|-----------|-----------------|
| **Claude Code** | Large, vocal | Moderate (bi-weekly releases) | Maturing—session issues dominate | Enterprise adoption, plugin ecosystem |
| **OpenAI Codex** | Large, engaged | Fast (3 alphas/24h) | Alpha—API changes frequent | Context window debate (153 👍) |
| **Gemini CLI** | Medium, active | Very fast (50 PRs/24h) | Nightly—breaking changes likely | ACP refactoring, aggressive feature churn |
| **Copilot CLI** | Medium, frustrated | Slow (0 PRs/24h) | Stable but stagnant | Premium billing complaints |
| **OpenCode** | Medium, active | Very fast (50 PRs/24h) | Maturing—provider errors persist | Session warping, workspace isolation |
| **Qwen Code** | Small, steady | Moderate (40 PRs/24h) | Maturing—terminal bugs remain | File safety, background task management |
| **Pi** | Small, focused | Moderate (13 PRs/24h) | Stable—local LLM focus | Local LLM extensions, thinking levels |

**Momentum Leaders:**

1. **Gemini CLI** and **OpenCode** — Highest PR throughput (50/24h each), indicating aggressive feature development
2. **OpenAI Codex** — Fastest release cadence (3 alphas/24h), signaling rapid Rust SDK evolution
3. **Qwen Code** — Steady 40 PRs/24h with focus on polish and file safety

**Maturity Concerns:**

- **Copilot CLI** — 0 PRs in 24h and unresolved premium request waste issues suggest stagnation
- **Claude Code** — Session persistence bugs (42 comments) indicate technical debt in core session management
- **OpenCode** — Provider errors (Kimi K2.6/K2.5, Gemini 3 Pro) suggest integration debt

---

## 6. Trend Signals

The following patterns emerge from community feedback, offering predictive value for developers and decision-makers:

### 6.1 Session & State Management Is the Next Battleground

Session persistence, corruption, and portability dominate discussions across Claude Code, OpenCode, Gemini CLI, and Copilot CLI. Users expect session files to survive restarts, path changes, and platform migrations. Tools that solve this (session warping in OpenCode, session-persist plugins in Claude Code) will differentiate on reliability.

**Implication:** Expect session management APIs, migration tools, and corruption recovery features in upcoming releases.

### 6.2 Multi-Agent Architectures Are Maturing

Claude Code's #53610 (25 comments), Gemini CLI's subagent recovery issues, and OpenCode's task tool instability all point to multi-agent workflows gaining adoption. The industry is moving from single-agent to orchestrated multi-agent systems, but runtime enforcement, cancellation propagation, and cost control remain unsolved.

**Implication:** Multi-agent orchestration primitives (task dispatch, cancellation, cost attribution) will become standard features.

### 6.3 Local LLM Integration Is a Growing Segment

Pi's local LLM provider extensions (#4154), Qwen Code's FileReadCache, and OpenCode's provider-agnostic architecture indicate demand for self-hosted models. This is driven by cost concerns (premium request accounting in Copilot CLI), privacy requirements, and latency optimization.

**Implication:** Native support for llama.cpp, ollama, and LM Studio will become table stakes. Watch for model discovery APIs and local inference optimization.

### 6.4 File Safety Is Becoming a First-Class Concern

Qwen Code's PR #3840 (refuse writes to stale files) and OpenCode's prior-read enforcement (#3774) signal a shift toward treating file mutations as high-stakes operations. As agents gain write access to codebases, preventing silent data loss from concurrent edits or interrupted operations is critical.

**Implication:** Expect file safety features (change detection, mutation guards, backup mechanisms) to become expected, not optional.

### 6.5 Terminal Rendering Remains a Pain Point

Qwen Code's infinite scroll loops, OpenCode's resize corruption, Copilot CLI's alt-screen toggle requests, and Gemini CLI's shell command hangs all indicate that TUI reliability is still unsolved. As these tools target professional developers, terminal rendering bugs erode trust.

**Implication:** Investment in TUI testing infrastructure (PR #25792 in OpenCode) and rendering hardening will increase.

### 6.6 Cross-Platform Gaps Persist

Windows-specific issues dominate Claude Code (#38691, #48362), Gemini CLI (#24202, #2353), Copilot CLI (#4157), and OpenCode (#11112). Linux desktop support is a recurring request (OpenAI Codex #11023, 115 👍). The ecosystem is still maturing on cross-platform consistency.

**Implication:** Windows and Linux parity should be a priority. Tools that deliver seamless cross-platform experiences will capture enterprise users.

### 6.7 MCP Ecosystem Is Expanding but Fragmented

MCP support appears across Claude Code (tool counts), Copilot CLI (plugin configs), Gemini CLI (OAuth refresh), and OpenCode (duplicate process prevention). However, per-repository MCP configuration (#3019 in Copilot CLI, #2528 in OpenCode) is inconsistent, and breaking changes (`.vscode/mcp.json` deprecation) create friction.

**Implication:** MCP standardization efforts and backward compatibility guarantees will be critical for plugin ecosystem growth.

---

## Summary for Decision-Makers

| Priority | Recommendation |
|----------|----------------|
| **Immediate** | If using Claude Code or Copilot CLI, implement workarounds for session loss and premium request waste until fixes land |
| **Short-term** | Evaluate OpenCode or Qwen Code for multi-provider flexibility and file safety if operating in mixed-model environments |
| **Medium-term** | Plan for local LLM integration; Pi and Qwen Code are ahead on this curve |
| **Long-term** | Multi-agent orchestration will define next-generation CLI tools; monitor Claude Code and Gemini CLI for mature implementations |

---

*Report synthesized from community digests for Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, OpenCode, Qwen Code, and Pi as of 2026-05-05.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest

**Date:** 2026-05-05
**Source:** github.com/anthropics/claude-code

---

## 1. Today's Highlights

Version **v2.1.128** ships with several quality-of-life improvements including random session color selection, enhanced MCP server visibility, and expanded plugin archive support. The community continues to grapple with session persistence issues on Windows, where multiple reports highlight data loss after updates or due to path handling bugs. A significant feature request for multi-agent runtime enforcement has gained traction with 25 comments, signaling strong demand for unattended operation capabilities.

---

## 2. Releases

### v2.1.128
**Release Date:** 2026-05-05

| Change | Description |
|--------|-------------|
| `/color` enhancement | Bare invocation now picks a random session color |
| `/mcp` improvements | Displays tool count for connected servers; flags servers with 0 tools |
| `--plugin-dir` expansion | Now accepts `.zip` plugin archives in addition to directories |
| `--channels` support | Works with console (AP...) |

---

## 3. Hot Issues

### 🔴 Critical: Session Loss & Data Persistence

| Issue | Author | Comments | 👍 | Priority |
|-------|--------|----------|----|----------|
| [#26452](https://github.com/anthropics/claude-code/issues/26452) Session Disappeared After Logout/Restart | @igrushkas | 42 | 21 | **Critical** |
| [#38691](https://github.com/anthropics/claude-code/issues/38691) All sessions lost after Claude Desktop update on Windows | @skorteva | 6 | 3 | **Critical** |
| [#48782](https://github.com/anthropics/claude-code/issues/48782) Claude Code deletes 160 session JSONL files | @skswave | 4 | 0 | **Critical** |
| [#53717](https://github.com/anthropics/claude-code/issues/53717) Windows: sessions show in sidebar but content missing | @guan64 | 3 | 0 | **Critical** |
| [#54066](https://github.com/anthropics/claude-code/issues/54066) Project paths with `_` create duplicate storage keys | @jamesoliverh | 4 | 0 | **High** |

**Why it matters:** Session persistence remains the top pain point. Users report losing weeks of work across multiple platforms, with Windows Desktop being particularly affected. The issue with underscore-containing paths creating duplicate storage keys suggests a deeper path normalization bug.

### 🟡 Platform-Specific Bugs

| Issue | Author | Comments | 👍 | Platform |
|-------|--------|----------|----|----------|
| [#7618](https://github.com/anthropics/claude-code/issues/7618) VS Code terminal steals focus | @openclosure | 19 | 33 | macOS |
| [#51798](https://github.com/anthropics/claude-code/issues/51798) PreToolUse permissionDecision regression (2.1.116+) | @ww2283 | 14 | 2 | Linux |
| [#48362](https://github.com/anthropics/claude-code/issues/48362) EXDEV error in Windows Store/MSIX | @o-samurai | 4 | 1 | Windows |

**Why it matters:** The VS Code focus-stealing bug has persisted since September 2025 with strong community support (33 👍). The PreToolUse regression breaks existing hook workflows for sandbox control.

### 🟢 Feature Requests

| Issue | Author | Comments | Area |
|-------|--------|----------|------|
| [#53610](https://github.com/anthropics/claude-code/issues/53610) Multi-agent runtime needs mechanical enforcement | @ThatDragonOverThere | 25 | Agents |
| [#41630](https://github.com/anthropics/claude-code/issues/41630) Session identity should be path-independent | @Sets | 5 | Core |
| [#54911](https://github.com/anthropics/claude-code/issues/54911) Desktop Recents to enumerate ~/.claude/projects/ directly | @amj008 | 3 | Desktop |

**Why it matters:** The multi-agent enforcement request identifies 9 specific gaps preventing unattended overnight operation—a key enterprise use case.

---

## 4. Key PR Progress

| PR | Author | Type | Status | Summary |
|----|--------|------|--------|---------|
| [#55864](https://github.com/anthropics/claude-code/pull/55864) Session-persist plugin | @SanskaarUndale21 | Feature | Open | Client-side session state preservation to prevent context loss when closing windows mid-task |
| [#56176](https://github.com/anthropics/claude-code/pull/56176) Claude/book outline bootstrap toolkit | @LOUSTA79 | Tool | Open | New bootstrap toolkit for book outline generation |
| [#55832](https://github.com/anthropics/claude-code/pull/55832) Remove stray content from plugin-validator.md | @EnjouZeratul | Docs | Open | Cleanup of accidental dialogue content in documentation |
| [#33007](https://github.com/anthropics/claude-code/pull/33007) fix(hookify): correct field mapping | @daniel-dallimore | Bug Fix | **Closed** | Fixed `stop` and `prompt` event mapping in hookify plugin |
| [#33006](https://github.com/anthropics/claude-code/pull/33006) fix(code-review): align README | @daniel-dallimore | Docs | **Closed** | Updated code-review plugin README to match current workflow |

**Notable:** PR #55864 proposes a client-side workaround for session persistence while a full server-side solution (#55860) is developed.

---

## 5. Feature Request Trends

Analysis of 50 recent issues reveals these dominant themes:

| Theme | Frequency | Examples |
|-------|-----------|----------|
| **Session Persistence** | High | Path independence (#41630), session recovery (#26452), project enumeration (#54911) |
| **Multi-Agent Capabilities** | High | Runtime enforcement (#53610), agent hooks stabilization (#56168) |
| **Windows Desktop Stability** | High | Data loss (#53717, #38691), EXDEV errors (#48362), path handling (#54066) |
| **Plugin System** | Medium | userConfig prompts (#39455), validator fixes (#55832) |
| **Accessibility** | Low | Input dialog repositioning (#55912) |

---

## 6. Developer Pain Points

### 🔴 Top Frustrations

1. **Session Loss on Windows**
   - Multiple users report complete session disappearance after updates
   - Data exists on disk but isn't accessible in the UI
   - Workaround: switching from Windows Store to Win32 installer resolves some issues

2. **Path Dependency Breaking Resume**
   - Moving/renaming project directories breaks `/resume`, `/rewind`, and session history
   - Affects long-running sessions where project structure evolves

3. **Hook Regression (2.1.116+)**
   - `PreToolUse` returning `permissionDecision: "allow"` no longer suppresses sandbox prompts
   - Breaks existing automation workflows

4. **VS Code Focus Stealing**
   - Terminal steals focus even when Claude Code runs externally
   - Unresolved since September 2025

5. **Cowork Virtualization Issues**
   - virtiofs mount failures when 'Documents' exists as a file
   - Blocks collaborative development workflows

### 📊 Community Sentiment

- **Most Discussed:** Session loss scenarios (42+ comments on #26452)
- **Most 👍:** EnterWorktree bug (#27134, 42 👍) and VS Code focus (#7618, 33 👍)
- **Trend:** Windows Desktop issues dominate recent reports; multi-agent features in high demand

---

*Generated: 2026-05-05 | Data reflects last 24h activity*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest

**Date:** 2026-05-05
**Prepared for:** AI Developer Tools Community

---

## 1. Today's Highlights

The Codex team shipped three alpha releases (v0.129.0-alpha.4/5/6) in the Rust SDK, indicating active development on the next generation of the codebase. Community discussion remains dominated by the GPT-5.5 context window debate—over 120 comments on Issue #19464 requesting 1M token support—while authentication issues and cross-platform availability continue to generate significant friction.

---

## 2. Releases

| Version | Type | Summary |
|---------|------|---------|
| `rust-v0.129.0-alpha.6` | Alpha | Latest pre-release in the v0.129 Rust SDK series |
| `rust-v0.129.0-alpha.5` | Alpha | Prior release in the series |
| `rust-v0.129.0-alpha.4` | Alpha | Earlier release in the series |

**Note:** These alpha releases suggest ongoing investment in the Rust-based Codex core. No changelog details were provided; monitor the [releases page](https://github.com/openai/codex/releases) for detailed commit logs.

---

## 3. Hot Issues

| # | Issue | Author | Comments | 👍 | Why It Matters |
|---|-------|--------|----------|----|----------------|
| 1 | **[Support 1M token context for GPT-5.5](https://github.com/openai/codex/issues/19464)** | @umikato | 120 | 153 | The community strongly advocates expanding the documented 400K context window to 1M tokens, enabling massive codebase analysis. This is the highest-engagement issue by far. |
| 2 | **[Phone number verification broken on device switch](https://github.com/openai/codex/issues/20161)** | @Sistem-Pack | 64 | 53 | Users are locked out when migrating Codex sessions across devices, with forced phone verification failing. Impacts productivity for mobile+desktop workflows. |
| 3 | **[Codex desktop app for Linux](https://github.com/openai/codex/issues/11023)** | @Suhaibinator | 45 | 115 | Linux developers remain second-class citizens; the desktop app is macOS/Windows-only. This long-standing request has broad support (115 👍). |
| 4 | **[Azure: stream disconnected before completion](https://github.com/openai/codex/issues/9936)** | @codeofdusk | 14 | 7 | Enterprise Azure users experience premature stream termination on Windows, affecting reliability for corporate deployments. |
| 5 | **[False positive cyber-safety flag](https://github.com/openai/codex/issues/19403)** | @andreas-nachtigall | 8 | 0 | Legitimate research on public hosting documentation triggers safety blocks, disrupting developer workflows. |
| 6 | **[MCP custom notifications support](https://github.com/openai/codex/issues/17543)** | @swswordholy-tech | 7 | 0 | Request to forward MCP custom notifications into Codex sessions, enabling richer tool integrations. |
| 7 | **[Windows /mcp prints taskkill logs](https://github.com/openai/codex/issues/20845)** | @RE-codes | 6 | 0 | CLI noise on Windows: running `/mcp` outputs "SUCCESS" process termination messages, cluttering the terminal. |
| 8 | **[Regression: file names hidden behind summaries](https://github.com/openai/codex/issues/19891)** | @RyanMentley | 6 | 6 | The "For coding" view now aggregates file edits instead of showing individual filenames, reducing visibility. |
| 9 | **[Browser Use broken after update](https://github.com/openai/codex/issues/20579)** | @jmzafrass | 6 | 3 | The Browser Use skill fails post-update with "no node_repl/js or no Codex IAB backend discovered" errors. |
| 10 | **[RTL text rendering broken](https://github.com/openai/codex/issues/14578)** | @shm379 | 4 | 5 | Right-to-left language support (Arabic, Hebrew) has incorrect text alignment, limiting accessibility. |

---

## 4. Key PR Progress

| # | PR | Author | Description |
|---|-----|--------|-------------|
| 1 | **[Read cached metadata for Git plugins](https://github.com/openai/codex/pull/20825)** | @xli-oai | Improves `plugin/list` metadata population for Git-sourced marketplace plugins, preserving category precedence. |
| 2 | **[Hook trust metadata and enforcement](https://github.com/openai/codex/pull/20321)** | @abhinav-oai | Adds backend trust model for hooks—unmanaged hooks require review before execution, managed hooks remain trusted. |
| 3 | **[/hooks TUI review flow](https://github.com/openai/codex/pull/20684)** | @abhinav-oai | New startup warning in TUI when untrusted hooks are detected, guiding users to review them. |
| 4 | **[Spill large hook outputs from context](https://github.com/openai/codex/pull/21069)** | @abhinav-oai | Caps large hook outputs (via `additionalContext`, `Stop` prompts) to prevent context flooding. |
| 5 | **[Managed remote file uploads](https://github.com/openai/codex/pull/21108)** | @efrazer-oai | Adds `fs/uploadFile` API for remote hosts to handle client-side file attachments. |
| 6 | **[Deferred image content APIs](https://github.com/openai/codex/pull/21110)** | @rhan-oai | Introduces experimental `thread/turns/items/list` and `thread/item/content/read` APIs with deferred image metadata. |
| 7 | **[Plugin share access controls](https://github.com/openai/codex/pull/21124)** | @xl-openai | Extends `plugin/share/save` with discoverability options and adds `plugin/share/updateTargets`. |
| 8 | **[Session picker redesign](https://github.com/openai/codex/pull/20065)** | @fcoury-oai | Denser, searchable session picker with thread names, branches, working directories, and timestamps. |
| 9 | **[Model service tiers metadata](https://github.com/openai/codex/pull/20969)** | @aibrahim-oai | Adds `ModelServiceTier` metadata for display-ready tier names and descriptions in the UI. |
| 10 | **[Verify agent identity JWTs](https://github.com/openai/codex/pull/19650)** | @efrazer-oai | **Closed.** Runtime verification of signed AgentIdentity JWTs via JWKS fetch. |

---

## 5. Feature Request Trends

Analysis of 50 recent issues reveals these dominant themes:

| Theme | Frequency | Examples |
|-------|-----------|----------|
| **Extended Context Windows** | High | 1M token support for GPT-5.5 (#19464) |
| **Cross-Platform Desktop** | High | Linux desktop app (#11023) |
| **Authentication & Access** | High | Phone verification failures (#20161), login stuck (#8692) |
| **MCP (Model Context Protocol)** | Medium | Custom notifications (#17543), Windows /mcp logs (#20845) |
| **Browser Use Reliability** | Medium | Backend discovery failures (#19463, #20579) |
| **Skill/Plugin Ecosystem** | Medium | Hook lifecycle hooks (#17132), plugin sharing (#21124) |
| **Accessibility (RTL)** | Low-Medium | Text rendering for RTL languages (#14578) |
| **Enterprise/Azure** | Low | Stream disconnects (#9936), GitHub integration (#20093) |

---

## 6. Developer Pain Points

1. **Context Window Limitations**
   Developers working with large codebases are bottlenecked by the 400K token limit. The community is actively campaigning for 1M token support.

2. **Authentication Friction**
   Phone verification failures on device switches and login hangs (especially on Windows) are blocking users from productive workflows.

3. **Linux Exclusion**
   The desktop app remains unavailable on Linux, forcing developers to use the CLI or third-party workarounds.

4. **Browser Use Instability**
   Frequent regressions in the Browser Use skill (backend discovery, broken after updates) undermine automation use cases.

5. **Hook & Plugin Complexity**
   The new hook trust model is welcome, but developers report confusion around unmanaged hook behavior and lack of visibility into hook outputs.

6. **TUI Input Regressions**
   Shift+Enter/Alt+Enter newline insertion broke in v0.128.0 (now closed issues #20607, #20580), indicating testing gaps.

7. **Safety False Positives**
   Legitimate research and coding tasks are being flagged, disrupting workflows and eroding trust in safety systems.

---

*End of Digest*
*Data sourced from github.com/openai/codex as of 2026-05-05*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-05

## Today's Highlights

The nightly release v0.42.0 includes documentation workflow improvements and a significant ACP client refactor toward modularization. The community is actively debating Windows shell preferences (PowerShell vs cmd.exe) and several critical agent reliability issues, including subagent recovery behavior and permission handling loops.

---

## Releases

**v0.42.0-nightly.20260504.g37edd1d4d** (2026-05-04)
- Documentation workflows updated with workspace trust configuration ([#26150](https://github.com/google-gemini/gemini-cli/pull/26150))
- ACP refactor: monolithic `acpClient` modularized into specialized files ([#26143](https://github.com/google-gemini/gemini-cli/pull/26143))
- Test infrastructure fixes

---

## Hot Issues

1. **[#2353](https://github.com/google-gemini/gemini-cli/issues/2353)** — Option to choose shell (PowerShell) on Windows
   - **Why it matters:** Windows users are stuck with limited cmd.exe; PowerShell offers significantly better capabilities.
   - **Community reaction:** 13 comments, 10 👍 — highest engagement issue this period.

2. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** — Shell command execution stuck with "Waiting input" after completion
   - **Why it matters:** CLI becomes unresponsive after simple commands, blocking workflows.
   - **Community reaction:** 3 👍, actively investigated.

3. **[#24916](https://github.com/google-gemini/gemini-cli/issues/24916)** — Gemini CLI keeps asking for permissions on the same file
   - **Why it matters:** Repeated permission prompts break user experience and trust in the allow-all feature.
   - **Community reaction:** 3 comments, reported as persistent bug.

4. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** — Subagent reports GOAL success despite hitting MAX_TURNS
   - **Why it matters:** Misleading status masks incomplete work, causing silent failures in automated pipelines.
   - **Community reaction:** 4 comments, priority/p1.

5. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** — 400 error with >128 tools
   - **Why it matters:** Large tool sets (400+) cause API failures; agent needs smarter tool scoping.
   - **Community reaction:** Under investigation by maintainers.

6. **[#25216](https://github.com/google-gemini/gemini-cli/issues/25216)** — Gemini failed to open in temporary path A:\
   - **Why it matters:** Path handling edge cases cause critical errors on certain Windows configurations.
   - **Community reaction:** 1 comment, likely affects drive-letter edge cases.

7. **[#24202](https://github.com/google-gemini/gemini-cli/issues/24202)** — Running SSH text is scrambled
   - **Why it matters:** Gemini CLI unusable over SSH connections on Windows-to-Linux workflows.
   - **Community reaction:** 1 comment, affects remote development scenarios.

8. **[#22819](https://github.com/google-gemini/gemini-cli/issues/22819)** — Implement memory routing: global vs. project
   - **Why it matters:** Critical for multi-project users; personal preferences should not leak across codebases.
   - **Community reaction:** 2 👍, maintainer-only tracking.

9. **[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)** — Model creates tmp scripts in random spots
   - **Why it matters:** Pollutes workspaces with scattered temporary files, complicating clean commits.
   - **Community reaction:** 2 comments, restricts shell execution workaround.

10. **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** — Browser Agent ignores settings.json overrides
    - **Why it matters:** Configuration overrides (e.g., maxTurns) silently fail for browser automation.
    - **Community reaction:** 2 comments, affects automated browser workflows.

---

## Key PR Progress

1. **[#26479](https://github.com/google-gemini/gemini-cli/pull/26479)** — `fix(a2a-server): resolve tool approval race condition and improve status reporting` *(OPEN)*
   - Addresses premature task state transitions during tool validation.

2. **[#26473](https://github.com/google-gemini/gemini-cli/pull/26473)** — `feat(cli): implement custom auth/status endpoint for Xcode ACP client` *(OPEN)*
   - Enables quiet authentication probing for Xcode sidecar integration.

3. **[#26312](https://github.com/google-gemini/gemini-cli/pull/26312)** — `fix(core): refresh MCP OAuth token usage after re-auth` *(OPEN)*
   - Dynamic token retrieval eliminates stale token issues without CLI restart.

4. **[#26303](https://github.com/google-gemini/gemini-cli/pull/26303)** — `feat(bot): enforce evaluation role and multi-iteration feedback loop` *(OPEN)*
   - Improves bot's architectural conflict resolution and critique agent discipline.

5. **[#26469](https://github.com/google-gemini/gemini-cli/pull/26469)** — Fixing race condition in task updates *(CLOSED)*
   - Resolves IDE update regression from task validation timing issues.

6. **[#26476](https://github.com/google-gemini/gemini-cli/pull/26476)** — `fix(ci): require nudge label before closing old PRs` *(CLOSED)*
   - Protects backlog PRs from abrupt closure; requires 7-day warning period.

7. **[#25684](https://github.com/google-gemini/gemini-cli/pull/25684)** — `fix(core): implement runtime Flash-to-Flash-Lite failover` *(CLOSED)*
   - Mitigates quota exhaustion with automatic model fallback; resolves 6 related issues.

8. **[#24782](https://github.com/google-gemini/gemini-cli/pull/24782)** — `feat: add allowEnv policy option for shell commands` *(CLOSED)*
   - Permits env-prefixed commands (e.g., `PAGER=cat git commit`) without confirmation prompts.

9. **[#23705](https://github.com/google-gemini/gemini-cli/pull/23705)** — `fix(core): preserve trailing newlines in shell execution` *(CLOSED)*
   - Restores heredoc and multiline construct functionality broken by newline stripping.

10. **[#25712](https://github.com/google-gemini/gemini-cli/pull/25712)** — `shell tool rc` *(CLOSED)*
    - Adds `shellToolRcFile` setting and fixes PAGER handling to prevent hangs.

---

## Feature Request Trends

Analysis of 50 open issues reveals these dominant themes:

| Theme | Frequency | Examples |
|-------|-----------|----------|
| **Agent Reliability** | High | Subagent recovery (#22323), MAX_TURNS handling, destructive behavior warnings (#22672) |
| **Memory & Preferences** | Medium | Global vs. project memory routing (#22819), proactive memory writes (#22809) |
| **Tool Scoping** | Medium | 400-error with >128 tools (#24246), AST-aware file reads (#22745) |
| **Windows/SSH Compatibility** | Medium | PowerShell selection (#2353), SSH text scrambling (#24202), A:\ path handling (#25216) |
| **UI/UX Polish** | Medium | Scroll issues (#24470), table rendering during streaming (#25218), parallel tool call layouts (#24943) |
| **Browser Agent** | Low-Medium | Settings.json overrides (#22267), session takeover resilience (#22232) |

---

## Developer Pain Points

1. **Permission Loop Fatigue:** Repeated prompts for the same file despite "allow for all future sessions" selection (#24916).

2. **Shell Hangs:** CLI becomes unresponsive after shell commands complete, stuck on "Awaiting user input" (#25166).

3. **Configuration Ignored:** Browser Agent and other components silently disregard `settings.json` overrides (#22267).

4. **Workspace Pollution:** Model generates temporary scripts scattered across directories when shell access is restricted (#23571).

5. **SSH Usability:** Text rendering breaks completely when running over SSH connections (#24202).

6. **Quota Failover Gaps:** Internal utilities hang silently when Flash quota exhausts (addressed in #25684, but edge cases remain).

7. **Tool Bloat:** Large tool collections (>128) cause API 400 errors with no graceful degradation (#24246).

8. **Path Edge Cases:** Unusual paths (e.g., `A:\`) trigger critical errors during initialization (#25216).

---

*Digest generated from github.com/google-gemini/gemini-cli activity on 2026-05-05.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – 2026‑05‑05**

---

## 1. Today’s Highlights
- **Release v1.0.41‑0** shipped with a new `--attachment` flag for non‑interactive prompts, improved edit‑block recovery, and a fix for `@‑mention` path resolution.
- Community discussion remains focused on **premium‑request accounting**: a single session can now consume 80‑100 request credits due to repeated tool‑invocation loops (issue [#2591](https://github.com/github/copilot-cli/issues/2591)).
- Networking reliability concerns persist; an HTTP/2 GOAWAY race condition is causing silent request waste and retry storms (issue [#2421](https://github.com/github/copilot-cli/issues/2421)).

---

## 2. Releases
| Version | Changes | Link |
|---------|---------|------|
| **v1.0.41‑0** | • **Added** `--attachment` flag in non‑interactive (`-p/--prompt`) mode to attach images or native documents.<br>• **Improved** reliability of file edits by better recovering from fuzzy/misaligned edit blocks.<br>• **Fixed** `@‑mention` completion for `./` paths. | [Release page](https://github.com/github/copilot-cli/releases/tag/v1.0.41-0) |

---

## 3. Hot Issues (last 24 h)
| # | Title | Key Points | Comments / 👍 |
|---|-------|------------|---------------|
| [#2591](https://github.com/github/copilot-cli/issues/2591) | Single session request → infinite premium requests consumed per tool invocation/thinking step | One user saw 80‑100 request credits burned in a single conversation due to repeated internal requests. | 31 comments, 13 👍 |
| [#1941](https://github.com/github/copilot-cli/issues/1941) | Sudden influx of “✗ Execution failed: CAPIError: 400 The requested model is not supported” | Frequent 400 errors block agent progress; appears after recent model‑selection changes. | 10 comments |
| [#1799](https://github.com/github/copilot-cli/issues/1799) | How to turn off alt‑screen views? | Alt‑screen mode introduced in recent releases is causing rendering and scroll‑back issues; users request a toggle. | 9 comments, 4 👍 |
| [#2421](https://github.com/github/copilot-cli/issues/2421) | HTTP/2 GOAWAY race condition causes cascading retry failures and silent premium request waste | Undici’s connection pool mishandles server‑sent GOAWAY frames, leading to wasted credits and retry loops. | 7 comments, 16 👍 |
| [#953](https://github.com/github/copilot-cli/issues/953) | Over‑excessive permissions request | Authentication requests read/write to all GitHub resources, even when users only need a single repo. | 7 comments, 3 👍 |
| [#1665](https://github.com/github/copilot-cli/issues/1665) | Support Copilot CLI Plugins Scoped to Project or Repository (instead of per‑user) | Today plugins are global; repo‑scoped plugins would enable team‑specific tooling. | 5 comments, 11 👍 |
| [#2795](https://github.com/github/copilot-cli/issues/2795) | `--agent <agent name>` does not work with `--plugin-dir <dir> -p <prompt>` | In headless mode, agents in custom plugin directories are not discovered. | 4 comments, 8 👍 |
| [#3019](https://github.com/github/copilot-cli/issues/3019) | Breaking Change: `.vscode/mcp.json` is no longer supported | Loss of VSCode‑compatible MCP config forces users to maintain separate config files. | 3 comments, 2 👍 |
| [#2528](https://github.com/github/copilot-cli/issues/2528) | Support per‑repository MCP server configuration (`.github/mcp.json`) | Users want repo‑level MCP servers, similar to `.github/copilot-instructions.md`. | 3 comments, 5 👍 |
| [#2758](https://github.com/github/copilot-cli/issues/2758) | Feature Request: Allow sub‑agents to use the model specified in frontmatter/task() — add opt‑out for the cost‑multiplier guard | Current cost‑multiplier guard silently downgrades sub‑agent models; users request an opt‑out. | 2 comments |

---

## 4. Key PR Progress
- **No PRs merged or opened in the last 24 hours.** The team is likely focusing on issue triage and upcoming release candidates.

---

## 5. Feature Request Trends
| Trend | Representative Issues | Summary |
|-------|------------------------|---------|
| **Model & Cost Control** | [#2591](https://github.com/github/copilot-cli/issues/2591), [#2758](https://github.com/github/copilot-cli/issues/2758), [#2524](https://github.com/github/copilot-cli/issues/2524) | Users want finer‑grained control over premium request counting, sub‑agent model selection, and model‑switching behavior. |
| **MCP & Plugin Configuration** | [#3019](https://github.com/github/copilot-cli/issues/3019), [#2528](https://github.com/github/copilot-cli/issues/2528), [#1665](https://github.com/github/copilot-cli/issues/1665) | Demand for per‑repository MCP settings, removal of VSCode compatibility, and repo‑scoped plugin loading. |
| **Terminal & Rendering Experience** | [#1799](https://github.com/github/copilot-cli/issues/1799), [#3110](https://github.com/github/copilot-cli/issues/3110), [#3111](https://github.com/github/copilot-cli/issues/3111) | Requests to toggle alt‑screen mode, preserve scroll‑back, and display agent‑thinking timers. |
| **Networking Reliability** | [#2421](https://github.com/github/copilot-cli/issues/2421), [#3102](https://github.com/github/copilot-cli/issues/3102) | HTTP/2 GOAWAY handling and SSH marketplace install failures are top pain points. |
| **Security & Permissions** | [#953](https://github.com/github/copilot-cli/issues/953), [#2693](https://github.com/github/copilot-cli/issues/2693), [#1607](https://github.com/github/copilot-cli/issues/1607) | Over‑reaching OAuth scopes, tool‑permission prompts, and lack of session‑level permission primitives. |
| **Headless & Non‑Interactive Use** | [#2795](https://github.com/github/copilot-cli/issues/2795), [#2665](https://github.com/github/copilot-cli/issues/2665), [#3109](https://github.com/github/copilot-cli/issues/3109) | Extensions/agents not loading in `-p`/`-i` modes; need for CLI‑only agent listing. |

---

## 6. Developer Pain Points
- **Premium Request Over‑consumption** – Repeated internal requests (e.g., tool calls, thinking steps) inflate credit usage dramatically (issue [#2591](https://github.com/github/copilot-cli/issues/2591)).
- **Model‑Selection Errors** – Frequent 400 “model not supported” errors and unexpected model resets disrupt workflows (issues [#1941](https://github.com/github/copilot-cli/issues/1941), [#3079](https://github.com/github/copilot-cli/issues/3079)).
- **Alt‑Screen Rendering Issues** – The new alt‑screen mode erases terminal scroll‑back and cannot be disabled (issue [#1799](https://github.com/github/copilot-cli/issues/1799)).
- **MCP/Plugin Configuration Gaps** – Lack of per‑repository MCP settings and broken VSCode compatibility force manual config duplication (issues [#3019](https://github.com/github/copilot-cli/issues/3019), [#2528](https://github.com/github/copilot-cli/issues/2528)).
- **Headless Extension Loading** – Extensions and custom agents fail to load in non‑interactive (`-p`/`-i`) runs, limiting CI/CD use cases (issues [#2795](https://github.com/github/copilot-cli/issues/2795), [#2665](https://github.com/github/copilot-cli/issues/2665)).
- **Networking & SSH Install Failures** – HTTP/2 race conditions and SSH‑based marketplace installs silently fail, causing retry loops and wasted credits (issues [#2421](https://github.com/github/copilot-cli/issues/2421), [#3102](https://github.com/github/copilot-cli/issues/3102)).

---

*All links point to the official `github/copilot-cli` repository for further details.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest

**Date:** 2026-05-05
**Source:** github.com/MoonshotAI/kimi-cli

---

## 1. Today's Highlights

The Kimi Code CLI community remains active with a new plugin showcase and a significant UI enhancement in progress. A community member introduced **kimi-mneme**, a persistent memory plugin that solves context loss between sessions. Meanwhile, PR #2158 proposes adding a **Ctrl+T toggle** for hiding thinking content, directly addressing a long-standing user request. No new releases were published in the last 24 hours.

---

## 2. Releases

**No new releases in the last 24 hours.**

The latest stable version remains **kimi v1.41.0** (referenced in Issue #2160).

---

## 3. Hot Issues

### Issue #2160 — Inexplicable Crash During Operation
- **Author:** @elcky | **Comments:** 3 | **Created:** 2026-05-04
- **Link:** https://github.com/MoonshotAI/kimi-cli/issues/2160
- **Summary:** User reports repeated crashes on Windows (NT 10.0.26200.0 x64) while running kimi 2.6. The issue includes full environment details and reproduction steps.
- **Why it matters:** Crash reports on Windows indicate potential platform-specific bugs that could affect a significant user segment.

### Issue #1585 — Customizable Keybinding for Inserting Newlines (Shift+Enter)
- **Author:** @guyujun | **Comments:** 2 | **👍:** 1 | **Created:** 2026-03-25
- **Link:** https://github.com/MoonshotAI/kimi-cli/issues/1585
- **Summary:** User requests customizable newline keybindings, specifically Shift+Enter, noting the current Ctrl+J behavior is unintuitive.
- **Why it matters:** Ergonomic input customization is a common request for CLI tools; this has been open since March 2026.

### Issue #1632 — Option to Hide Thinking Content While Using Thinking Models
- **Author:** @yuantianyu177 | **Comments:** 2 | **👍:** 2 | **Created:** 2026-03-29
- **Link:** https://github.com/MoonshotAI/kimi-cli/issues/1632
- **Summary:** Requests the ability to hide the real-time "Thinking..." spinner and grey italic thinking text when using models like kimi-k2-thinking-turbo.
- **Why it matters:** High community interest (2 👍); directly addressed by PR #2158. This is a top-priority UX enhancement.

### Issue #2161 — Plugin Showcase: kimi-mneme (Persistent Memory)
- **Author:** @barrelc | **Comments:** 1 | **Created:** 2026-05-04
- **Link:** https://github.com/MoonshotAI/kimi-cli/issues/2161
- **Summary:** Community plugin that adds persistent cross-session memory to Kimi Code CLI, capturing and retrieving context across sessions.
- **Why it matters:** Demonstrates ecosystem growth and addresses a major pain point: context loss between sessions.

### Issue #2159 — Show Yolo & AFK Mode Status in Web UI
- **Author:** @QuantumLiu | **Comments:** 0 | **Created:** 2026-05-04
- **Link:** https://github.com/MoonshotAI/kimi-cli/issues/2159
- **Summary:** Feature request to display Yolo and AFK mode status in the Web UI for better visibility.
- **Why it matters:** Indicates growing adoption of advanced modes; UI parity improvements are always valuable.

---

## 4. Key PR Progress

### PR #2158 — feat(ui): Add Ctrl+T Toggle for Thinking Content Visibility
- **Author:** @MCMike0399 | **Status:** OPEN | **Created:** 2026-05-04
- **Link:** https://github.com/MoonshotAI/kimi-cli/pull/2158
- **Summary:** Implements a runtime toggle (Ctrl+T) to show or hide full thinking content from thinking-capable models. Thinking content is **hidden by default** when enabled.
- **Closes:** #1632
- **Impact:** Resolves a highly-requested UX feature, giving users control over verbose thinking output in the terminal.

---

## 5. Feature Request Trends

Analysis of recent issues reveals the following dominant feature directions:

| Trend | Description | Frequency |
|-------|-------------|-----------|
| **UI/UX Customization** | Requests for customizable keybindings, mode visibility (Yolo/AFK), and thinking content toggles | High |
| **Session Persistence** | Need for cross-session memory and context retention (addressed by kimi-mneme plugin) | Medium |
| **Platform Stability** | Bug reports and crash investigations on Windows environments | Ongoing |
| **Interactive Input** | Improvements to newline behavior and input ergonomics | Medium |

---

## 6. Developer Pain Points

1. **Thinking Content Overload:** Developers want control over verbose thinking output that clutters the terminal. The Ctrl+T toggle (PR #2158) directly addresses this.

2. **Context Loss Between Sessions:** The "blank slate" problem where context is lost after each session is a recurring frustration, now partially solved by the community plugin kimi-mneme.

3. **Windows Stability:** Crash reports on Windows (Issue #2160) suggest platform-specific bugs that need investigation.

4. **Input Ergonomics:** Current newline handling (Ctrl+J) is considered unintuitive; customizable keybindings would improve developer experience.

5. **Mode Visibility:** Users running advanced modes (Yolo, AFK) lack visual feedback in the Web UI, making it harder to track system state.

---

**End of Digest**

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-05

## 1. Today's Highlights

OpenCode v1.14.35 shipped a critical bugfix for diff patch rendering when file contents contain `diff --git` text, while v1.14.34 introduced reliability improvements for PTY connections and shell sessions. The community is actively reporting issues around model provider errors (particularly Kimi K2.6/K2.5), session corruption from interrupted tool calls, and DeepSeek thinking mode compatibility. Notable new PRs include a minimal CLI mode with readline REPL, session warping for workspace portability, and mobile touch optimizations.

---

## 2. Releases

| Version | Type | Changes |
|---------|------|---------|
| **v1.14.35** | Bugfix | Preserve diff patch boundaries so session diffs render correctly when file contents include `diff --git` text. |
| **v1.14.34** | Improvements | Added PTY connection tickets for reliable authenticated terminal websockets; added v2 session failure events for client detection; improved shell command handling for Bash, PowerShell, and cmd sessions. |

---

## 3. Hot Issues

| # | Issue | Author | Comments | 👍 | Why It Matters |
|---|-------|--------|----------|----|----------------|
| [#11112](https://github.com/anomalyco/opencode/issues/11112) | Always stuck at "Preparing write..." | @yinzhou-jc | 62 | 27 | Persistent write operation failures with oh-my-opencode prevent users from saving work; high engagement indicates widespread impact. |
| [#23887](https://github.com/anomalyco/opencode/issues/23887) | Kimi K2.6/K2.5 returns 'Provider returned error' on CLI 1.14.20 | @byungsker | 37 | 7 | Specific model provider incompatibility—only Kimi models fail while GLM-5, Qwen3.5, and MiniMax work fine under the same OpenCode Go subscription. |
| [#4832](https://github.com/anomalyco/opencode/issues/4832) | Gemini 3 Pro function calling fails — missing `thoughtSignature` support | @linhlban150612 | 29 | 14 | Blocks use of Gemini 3 Pro with tool use; the missing `thoughtSignature` field causes API submission failures. |
| [#10490](https://github.com/anomalyco/opencode/issues/10490) | Add config option to disable copy-on-select behavior | @cbrunnkvist | 13 | 23 | XTerm/GPM-style auto-copy interferes with workflows; strong community demand for a toggle in `opencode.json`. |
| [#24722](https://github.com/anomalyco/opencode/issues/24722) | DeepSeek thinking mode: reasoning_content not passed back for tool call turns | @moe5445 | 10 | 5 | Causes 400 errors when using DeepSeek models with thinking enabled; API requires `reasoning_content` in all subsequent requests after tool calls. |
| [#21326](https://github.com/anomalyco/opencode/issues/21326) | Interrupted tool calls permanently corrupt session history | @liqiyyo | 4 | 0 | Orphaned `tool_use` without `tool_result` breaks session state after network/proxy errors. |
| [#25711](https://github.com/anomalyco/opencode/issues/25711) | plan mode is useless now | @tom-thompson | 4 | 0 | Users report severely limited output (4 lines) in plan mode, preventing effective planning. |
| [#23404](https://github.com/anomalyco/opencode/issues/23404) | task tool causes parent session abort — both parallel and sequential | @tbrandenburg | 4 | 0 | The `task` tool reliably terminates parent sessions regardless of dispatch mode; subagent completes but parent output is lost. |
| [#25758](https://github.com/anomalyco/opencode/issues/25758) | thinking enabled but reasoning_content missing in assistant tool call message | @jc01rho | 3 | 0 | Affects Kimi-2.6 and DeepSeek-v4-pro; triggers "thinking is enabled but reasoning_content is missing" errors. |
| [#25799](https://github.com/anomalyco/opencode/issues/25799) | v1.14.35 unable to load OMO normally | @woodynew | 1 | 0 | Regression reported immediately after v1.14.35 release affecting OMO plugin loading. |

---

## 4. Key PR Progress

| # | PR | Author | Type | Summary |
|---|-----|--------|------|---------|
| [#25579](https://github.com/anomalyco/opencode/pull/25579) | feat: add minimal CLI mode with readline REPL and slash commands | @iamcheyan | Feature | Introduces `--mode minimal` for a lightweight, text-only interface targeting resource-constrained environments. |
| [#25798](https://github.com/anomalyco/opencode/pull/25798) | fix(session): cancel subtask child sessions | @kitlangton | Bugfix | Propagates Task tool cancellation to child sessions; makes cancellation awaitable for proper cleanup. |
| [#25797](https://github.com/anomalyco/opencode/pull/25797) | Fix workspace warp SDK null id | @Hona | Bugfix | Preserves nullable `id` in OpenAPI shape for workspace warp; enables `experimental.workspace.warp({ id: null })` for local-project detach. |
| [#25634](https://github.com/anomalyco/opencode/pull/25634) | Improve v2 session message rendering | @thdxr | Improvement | Adds v2 session message model conversion, sync ordering fixes, improved assistant durations, inline tool spacing, and error state handling. |
| [#25622](https://github.com/anomalyco/opencode/pull/25622) | feat(opencode): configurable context cost display | @Arjith8 | Feature | Adds option to hide context and cost information in TUI sidebars (closes #25080, #15903). |
| [#25768](https://github.com/anomalyco/opencode/pull/25768) | feat(core): session warping | @jlongster | Feature | Adds workspace session warp support including moving sessions between workspaces and detaching back to local project. |
| [#25649](https://github.com/anomalyco/opencode/pull/25649) | fix: increase LSP initialize timeout for JDTLS and KotlinLS | @norbu35 | Bugfix | Increases hardcoded timeout for JVM-based language servers (JDTLS, KotlinLS) that require 60–180s for Gradle sync and indexing. |
| [#25792](https://github.com/anomalyco/opencode/pull/25792) | Run UI unit tests in CI | @Hona | Testing | Wires `@opencode-ai/ui` unit tests into CI pipeline; adds coverage for patch reconstruction edge cases. |
| [#25788](https://github.com/anomalyco/opencode/pull/25788) | fix(session): distinguish malformed known-tool input from unknown tools | @johanhallberg | Bugfix | Differentiates between malformed input for known tools vs. calls to non-existent tools for better error handling. |
| [#25773](https://github.com/anomalyco/opencode/pull/25773) | fix(desktop): preserve shell PATH for sidecar | @Hona | Bugfix | Preserves shell PATH for non-nushell Unix shells when launching Tauri sidecar (fixes #25748). |

---

## 5. Feature Request Trends

Analysis of recent issues reveals these dominant feature directions:

1. **UI/UX Customization** — Multiple requests for disabling copy-on-select behavior (#10490, #15941), adding collapse/expand to question dialogs (#19400), improving mouse wheel scrolling (#24760), and general UX improvements (#21722).

2. **Multi-Provider Multi-Account Support** — Users want to manage multiple credentials per provider (multiple ChatGPT-Plus, OpenAI, OpenRouter, Anthropic accounts) for billing isolation and personal/team use cases (#25738).

3. **Model-Specific Enhancements** — Requests for configurable models for context compression (#6976), better DeepSeek thinking mode support (#24722), and improved plan mode functionality (#15475, #25711).

4. **Internationalization** — Chinese-speaking users request automatic translation of English technical terms (PR→合并请求, CI→持续集成, etc.) in model responses (#25783, #25782).

5. **Deployment Flexibility** — Requests for base path prefix support for reverse proxy deployments (#25776) and `OPENCODE_DISABLE_GLOBAL_CONFIG` flag for embedded scenarios (#21264).

6. **Extensibility** — Requests for extensible agent lifecycle message injection (#25753), automatic code formatting hooks (#25759), and MCP server support with DevTools debug port (#25795).

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **Provider/Model Errors** | High | Kimi K2.6/K2.5, Gemini 3 Pro, and DeepSeek models fail in specific scenarios (thinking mode, function calling), blocking adoption of these models. |
| **Session Corruption** | High | Interrupted tool calls leave orphaned `tool_use` blocks, corrupting session history and requiring manual recovery. |
| **Task Tool Instability** | Medium | The `task` tool reliably aborts parent sessions, causing silent loss of subsequent work. |
| **LSP Timeout Issues** | Medium | JVM-based language servers (JDTLS, KotlinLS) timeout during initialization on real projects due to hardcoded limits. |
| **Write Operation Failures** | Medium | "Preparing write..." hangs prevent file saves, particularly with oh-my-opencode integration. |
| **Plan Mode Limitations** | Medium | Severely truncated output (4 lines) renders plan mode unusable for serious planning. |
| **Billing/Subscription Issues** | Low-Medium | Users report payment method and subscription status confusion with OpenCode Go. |

---

*Digest generated from GitHub data for [anomalyco/opencode](https://github.com/anomalyco/opencode) on 2026-05-05.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-05

## 1. Today's Highlights

The Qwen Code project advances with significant file integrity protections: new PRs enforce prior reads before mutations and refuse to overwrite externally changed files. The team is also tackling terminal rendering issues that cause display corruption during window resizes, while the Python SDK gains proper network timeout guards. Background task management is progressing through its phased roadmap.

---

## 2. Releases

**v0.15.6-nightly.20260505.2e69d641d** released with two key changes:

- **FileReadCache & short-circuit optimization** (`#3717`): Introduces a session-scoped `FileReadCache` that short-circuits unchanged file reads, reducing redundant I/O and improving performance on large codebases.
- **Proxy setting fix** (`#3766`): CLI now correctly honors proxy environment settings, resolving connectivity issues for users behind corporate proxies.

---

## 3. Hot Issues

| # | Issue | Status | Why It Matters |
|---|-------|--------|----------------|
| [#3838](https://github.com/QwenLM/qwen-code/issues/3838) | Terminal infinite scroll/refresh loop during code analysis | OPEN | UI becomes completely unusable; text flickers and scrollbar grows indefinitely. Affects Node.js v24 users. |
| [#3822](https://github.com/QwenLM/qwen-code/issues/3822) | Large file edit causes session JSONL bloat → `/resume` hangs | OPEN | Critical UX regression: editing large files makes session loading take minutes or hang indefinitely. |
| [#3839](https://github.com/QwenLM/qwen-code/issues/3839) | Edit/WriteFile silently clobbers externally modified files | OPEN | Data loss risk: concurrent edits from external tools or parallel agents are overwritten without warning. |
| [#3824](https://github.com/QwenLM/qwen-code/issues/3824) | Terminal resize leaves accumulating blue border artifacts | OPEN | Visual corruption accumulates with each resize; suspected Ink 6.2.3 erase/reflow mismatch. |
| [#3829](https://github.com/QwenLM/qwen-code/issues/3829) | Wayland image paste not working | OPEN | Linux/Wayland users cannot paste screenshots—a key workflow for code review discussions. |
| [#3823](https://github.com/QwenLM/qwen-code/issues/3823) | SDK 0.1.6/0.1.7 causes CLI process exit (code 1) | OPEN | Breaking regression for SDK integrators; intermittent failures with no clear error details. |
| [#3669](https://github.com/QwenLM/qwen-code/issues/3669) | Custom model thinking field errors with MiniMax M2.7 | CLOSED | Thinking content fails to render correctly with custom providers, leaking raw tags to users. |
| [#3606](https://github.com/QwenLM/qwen-code/issues/3606) | Session not found error when resuming | CLOSED | Users lose work because valid session files are not recognized; JSONL inspection shows no anomalies. |
| [#3805](https://github.com/QwenLM/qwen-code/issues/3805) | Read/glob tools fail in long-running sessions | CLOSED | File reading tools stop working over time, breaking multi-file refactoring workflows. |
| [#3213](https://github.com/QwenLM/qwen-code/issues/3213) | Terminal display corruption after resize | OPEN | Windows terminal users see garbled text after resizing; affects productivity during large code reviews. |

---

## 4. Key PR Progress

| # | PR | Author | Summary |
|---|-----|--------|---------|
| [#3840](https://github.com/QwenLM/qwen-code/pull/3840) | **Refuse Edit/WriteFile when file changed** | @ihubanov | Leverages existing `FileReadCache.check()` to block writes to stale files, preventing silent data loss from concurrent edits. |
| [#3774](https://github.com/QwenLM/qwen-code/pull/3774) | **Enforce prior read before Edit/WriteFile** | @wenshao | Makes file mutation conditional on the model having seen the file's current content in the conversation. |
| [#3836](https://github.com/QwenLM/qwen-code/pull/3836) | **Surface and cancel auto-memory dream tasks** | @wenshao | Brings background memory consolidation into the unified tasks UI and makes them user-cancellable. |
| [#3814](https://github.com/QwenLM/qwen-code/pull/3814) | **Prevent auto-memory recall from blocking main request** | @B-A-M-N | Fixes 5-second delay on every user turn by decoupling the recall side-query from the main request path. |
| [#3815](https://github.com/QwenLM/qwen-code/pull/3815) | **Per-model settings for fast model side queries** | @B-A-M-N | Prevents main model settings (reasoning, sampling params) from leaking into fast model requests for recap/title generation. |
| [#3677](https://github.com/QwenLM/qwen-code/pull/3677) | **Parse MiniMax thinking tags** | @shenyankm | Splits `# Pi Community Digest — 2026-05-05

## Today's Highlights

The v0.73.0 release introduces Xiaomi MiMo API billing with regional Token Plan providers, while the community merged significant improvements to local LLM support through official provider extensions for llama.cpp, ollama, and LM Studio. Performance fixes for bash tool streaming and HTTP retry logic address long-standing pain points, though several UI bugs in the TUI and web interface remain under investigation.

---

## Releases

**v0.73.0** — Released with Xiaomi MiMo API billing support and separate `xiaomi-token-plan-{cn,ams,sgp}` regional providers. Documentation updated for API key configuration and provider/model selection. Users should migrate to the new billing model for Xiaomi integrations.

---

## Hot Issues

1. **[#3357](https://github.com/badlogic/pi-mono/issues/3357) — Official local LLM provider extension** (22 👍, 8 comments, OPEN)
   Community demand for native support to fetch models dynamically from `{baseUrl}/models` for llama.cpp/ollama/LM Studio. This would enable Pi to work seamlessly with self-hosted models. A PR (#4154) has since addressed this.

2. **[#3208](https://github.com/badlogic/pi-mono/issues/3208) — Custom Thinking Levels per Model** (13 👍, 14 comments, CLOSED)
   Request to allow models to define supported thinking levels in `models.json`, with `Shift+Tab` cycling only through applicable levels. Extension API should support this via `pi.registerProvider()`. The high comment count indicates active design discussion.

3. **[#4157](https://github.com/badlogic/pi-mono/issues/4157) — Error/warning running `pi-update` on Windows** (4 comments, OPEN)
   Windows users encounter `NODE_TLS_REJECT_UNAUTHORIZED` warnings during `pi update`, potentially indicating TLS configuration issues. Affects developer workflow reliability on Windows.

4. **[#4163](https://github.com/badlogic/pi-mono/issues/4163) — `pi -p` silently no-ops when prompt starts with `---`** (3 comments, CLOSED)
   Non-interactive mode fails silently when prompts begin with `---`, breaking automation scripts and CI/CD pipelines. Only session events emit—no agent execution occurs.

5. **[#4158](https://github.com/badlogic/pi-mono/issues/4158) — TUI markdown nested-list double indent** (3 comments, OPEN)
   Nested bullet lists render at incorrect indentation under both `light` and `dark` themes. Indent compounds faster than 2x per depth level, degrading readability of structured output.

6. **[#4134](https://github.com/badlogic/pi-mono/issues/4134) — `pi -p` does not exit and hangs** (3 comments, CLOSED)
   After agent completes a response, the process fails to exit in non-interactive mode. Forces users to manually terminate, disrupting automated workflows.

7. **[#4173](https://github.com/badlogic/pi-mono/issues/4173) — /login flow for Anthropic OAuth missing parameters** (3 comments, CLOSED)
   OAuth URL provided during `/login` for Claude Code Pro subscriptions lacks required parameters, preventing subscription integration. Blocks users from connecting personal subscriptions.

8. **[#4151](https://github.com/badlogic/pi-mono/issues/4151) — Resource-loader reloads on every turn** (3 comments, CLOSED)
   `DefaultResourceLoader.reload()` lacks redundancy guards, causing package resolution, config re-reads, and extension path rescans on every agent turn in embedded runners. Performance impact for long sessions.

9. **[#4141](https://github.com/badlogic/pi-mono/issues/4141) — Expired tokens cause hung process** (1 comment, OPEN)
   When `openai-codex` provider auth tokens expire, the process hangs after displaying the API response. Users must manually restart, losing conversation context.

10. **[#4143](https://github.com/badlogic/pi-mono/issues/4143) — Xiaomi MiMo Token Plan regional providers not working** (1 comment, OPEN)
    Regional providers (`xiaomi-token-plan-sgp`, etc.) unavailable via `/login` and not surfaced in `/model` even when manually configured. Blocks regional access to Xiaomi models.

---

## Key PR Progress

1. **[#4154](https://github.com/badlogic/pi-mono/pull/4154) — Official local-LLM provider extensions** (CLOSED)
   Implements four async-factory custom providers for llama.cpp, ollama, LM Studio, and Jan, probing engines at startup and auto-discovering models. Closes #3357 and #3469.

2. **[#3887](https://github.com/badlogic/pi-mono/pull/3887) — Image content support** (OPEN)
   Adds new API for image blocks and image model support via Google/OpenRouter, enabling the agent to output images. Includes TUI testing via clanked extension.

3. **[#4165](https://github.com/badlogic/pi-mono/pull/4165) — Stream bash output incrementally** (CLOSED)
   Fixes TUI lag/freeze for chatty commands by batching output chunks, preventing expensive update work from queuing more renders than can be displayed.

4. **[#4178](https://github.com/badlogic/pi-mono/pull/4178) — Non-empty reasoning_content placeholder for Moonshot K2.6** (CLOSED)
   Makes `reasoning_content` placeholder configurable per-provider, auto-enabling `requiresReasoningContentOnAssistantMessages` for Moonshot with `" "` fallback.

5. **[#4162](https://github.com/badlogic/pi-mono/pull/4162) — Allow comments and trailing commas in models.json** (CLOSED)
   Adds `stripJsonComments` helper to parse user-supplied `models.json` with `//` comments and trailing commas, improving developer ergonomics.

6. **[#4170/#4171](https://github.com/badlogic/pi-mono/pull/4170) — Preserve OpenRouter reasoning with Responses API** (CLOSED)
   Fixes out-of-order output item events when using OpenRouter's `openai-responses` API, ensuring reasoning content renders correctly.

7. **[#4159/#4126](https://github.com/badlogic/pi-mono/pull/4159) — Retry on transient HTTP 404/408** (CLOSED)
   Extends retry logic to handle 404/408 status codes from CDN/edge nodes, preventing hard failures during transient network issues (e.g., Cerebras streaming).

8. **[#3737](https://github.com/badlogic/pi-mono/pull/3737) — Correct GPT-5.5 context metadata** (CLOSED)
   Updates GPT-5.5 context windows: OpenAI/Azure at 1,050,000 tokens, Codex at 400,000 tokens, with appropriate `maxTokens` settings.

9. **[#4161](https://github.com/badlogic/pi-mono/pull/4161) — Unset HF_TOKEN in pi-test.sh --no-env** (CLOSED)
   Ensures HuggingFace tokens are cleared alongside other API keys in test environments, preventing credential leakage.

10. **[#3596](https://github.com/badlogic/pi-mono/pull/3596) — Strip trailing index.js|ts from extension labels** (CLOSED)
    Cleans up startup banner display by removing file extensions from extension names, improving visual consistency.

---

## Feature Request Trends

| Theme | Evidence |
|-------|----------|
| **Local LLM Integration** | #3357 (22 👍), #3567, #4154 (merged)—strong demand for native llama.cpp/ollama/LM Studio support with dynamic model discovery |
| **Custom Thinking Levels** | #3208 (14 comments)—per-model thinking configuration to match model capabilities |
| **Python SDK** | #4174—requests for Python bindings to `pi-agent-core` and `pi-ai` |
| **Image Support** | #3887 (in progress)—image blocks and image model output |
| **Environment Standardization** | #4169—proposal to standardize `AGENT=pi` env var for tool self-identification |
| **Configurable Source Info** | #3170—adjustable autocomplete tag formatting |

---

## Developer Pain Points

- **Process Lifecycle Issues**: `pi -p` hangs after completion (#4134) or silently fails with `---` prompts (#4163), breaking automation
- **Windows Incompatibilities**: TLS warnings during update (#4157), clipboard issues on Wayland (#4177)
- **Resource Loader Performance**: Redundant reloads on every turn (#4151) causing O(n) overhead in embedded contexts
- **Bash Streaming Performance**: O(n²) behavior during fast output (#4145)—now fixed in #4165
- **Token Expiration Handling**: Expired tokens cause hung processes (#4141), requiring manual restart
- **OAuth Integration Gaps**: Anthropic login flow provides invalid URLs (#4173)
- **TUI Rendering Bugs**: Nested list indentation (#4158), non-clickable links (#4180), model selector flicker (#4164)
- **Extension Ecosystem**: Bun runtime incompatibility (#4160), subprocess crash race conditions (#4150)

</details>
