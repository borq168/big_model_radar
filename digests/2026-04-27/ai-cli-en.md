# AI CLI Tools Community Digest 2026-04-27

> Generated: 2026-04-27 01:58 UTC | Tools covered: 8

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

**Date:** 2026-04-27
**Scope:** Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code, OpenCode, Qwen Code, Pi

---

## 1. Ecosystem Overview

The AI CLI tools landscape is experiencing rapid maturation, with eight major platforms competing for developer mindshare. Anthropic's Claude Code and OpenAI's Codex dominate in community engagement, while Google Gemini CLI and Qwen Code are aggressively iterating with high PR throughput. The ecosystem reveals a clear shift toward **multi-agent architectures**, **MCP (Model Context Protocol) standardization**, and **cost-aware usage management**. Windows compatibility remains a universal pain point, and the community is increasingly demanding native checkpoint/rewind capabilities alongside AST-aware code navigation. The emergence of DeepSeek V4 integration across multiple tools signals a broader diversification beyond OpenAI-only backends.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases (24h) | Community Intensity |
|------|-------------|-----------|----------------|---------------------|
| **Claude Code** | 50 | 14 | None | 🔥🔥🔥 High — 88 comments on single hanging/freezing issue |
| **OpenAI Codex** | 50 | 50 | 2 alpha | 🔥🔥🔥 High — 57 👍 on 1M token context request |
| **Gemini CLI** | 50 | 24 | None | 🔥🔥 Medium — steady issue volume |
| **Copilot CLI** | 27 | 0 | None | 🔥 Medium — no PR activity |
| **Kimi Code** | 4 | 11 | None | 🔥 Low — minimal issue volume |
| **OpenCode** | 50 | 50 | v1.14.26 | 🔥🔥🔥 High — 65 comments on memory megathread |
| **Qwen Code** | 32 | 43 | v0.15.3 + nightly | 🔥🔥🔥 High — 119 comments on OAuth policy |
| **Pi** | 50 | 15 | None | 🔥🔥 Medium — MCP extension landed |

**Key Observations:**
- **Qwen Code** and **OpenCode** lead in PR velocity (43 and 50 PRs respectively), indicating rapid iteration.
- **Claude Code** and **OpenCode** generate the highest comment volume, reflecting active community problem-solving.
- **Copilot CLI** shows no PR activity in the last 24 hours, suggesting potential maintenance gaps.
- **Kimi Code** has minimal issue traffic (4 issues), possibly indicating a smaller or less active community.

---

## 3. Shared Feature Directions

The following requirements appear across multiple tool communities, signaling industry-wide priorities:

| Feature Direction | Tools Affected | Specific Needs |
|-------------------|----------------|----------------|
| **MCP Integration** | Claude Code, Codex, Gemini CLI, Pi, Qwen Code | Sampling support (#1785), stdio/SSE transport (#3774), MCP child process management (#12491), plugin-defined hooks (#2540) |
| **Multi-Agent / Subagent Reliability** | Claude Code, Gemini CLI, Copilot CLI, OpenCode | MAX_TURNS recovery (#22323), infinite loop prevention (#2374, #2881), background agent UI (#3488, #3781), mechanical enforcement (#53610) |
| **Context Window Expansion** | Claude Code, Codex, Qwen Code | 1M token support for GPT-5.5 (#19464), auto-compact threshold fixes (#43989), Opus 4.7 context optimization (#2967) |
| **Windows / Cross-Platform Compatibility** | Codex, Gemini CLI, OpenCode, Pi | Unix-only command handling (#2981), WSL/TMUX rendering (#8484), rg.exe permissions (#13542), bash routing (#26009) |
| **Checkpoint / Rewind / Undo** | Claude Code, Codex, OpenCode | Native `/rewind` for chat + edits (#11626, 95 👍), session restoration (#3754), versioned pre-write backups (#25947) |
| **Cost / Usage Tracking** | Qwen Code, Pi, OpenCode | Per-model pricing (#3585), unified `/usage` command (#9281), model cost estimation (#3631), quota visibility (#26001) |
| **AST-Aware Code Navigation** | Gemini CLI, OpenCode | Precise method bounds reading (#22745), hash-anchored + AST editing (#24515), token-efficient navigation |
| **Streaming Reliability** | Pi, Claude Code, OpenCode | 5-minute timeout fixes (#3715), API stream idle handling (#47841), TLS env propagation (#26011) |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target Users | Technical Approach |
|------|--------------|--------------|-------------------|
| **Claude Code** | MCP ecosystem, multi-agent orchestration, enterprise reliability | Developers needing deep Claude integration, enterprise teams | Tool-centric with extensive MCP support, rate limiting fixes, TUI improvements |
| **OpenAI Codex** | Windows integration, permissions architecture, context expansion | Windows developers, enterprise security-conscious teams | Permission profile refactoring (5 PRs from @bolinfest), 1M token context push |
| **Gemini CLI** | AST-aware operations, agent reliability, sandbox isolation | Developers requiring precise code analysis | Sandbox containerization, TLS env propagation, experimental bash routing |
| **Copilot CLI** | Model entitlement management, autopilot stability | GitHub Copilot subscribers, enterprise Copilot users | Model switching, plugin hooks, non-interactive ACP support |
| **Kimi Code** | UI/UX polish, conversation stability, cost efficiency | Chinese market users, cost-conscious developers | Usage color display, conversation continuation, K2.6 model optimization |
| **OpenCode** | Performance optimization, DeepSeek integration, memory management | Performance-sensitive users, DeepSeek adopters | 91% I/O reduction, DeepSeek V4 reasoning preservation, memory megathread investigation |
| **Qwen Code** | Cost management, DeepSeek V4 support, reliability | Cost-aware developers, DeepSeek users | Per-model pricing, OAuth policy debates, reasoning_content fixes |
| **Pi** | MCP extensions, model configuration flexibility, streaming reliability | Extension developers, local LLM users | MCP stdio/SSE transport, per-model request config, undici timeout fixes |

**Strategic Differentiators:**
- **Claude Code** leads in MCP ecosystem depth and multi-agent features.
- **OpenAI Codex** differentiates on Windows-first integration and permission security.
- **Qwen Code** and **OpenCode** are aggressively adopting DeepSeek V4, positioning against OpenAI/Anthropic dominance.
- **Pi** offers the most flexible model configuration (per-model request config) and MCP extension architecture.
- **Gemini CLI** uniquely focuses on AST-aware code operations for token efficiency.

---

## 5. Community Momentum & Maturity

| Tool | Community Activity | Iteration Speed | Maturity Signal |
|------|-------------------|-----------------|-----------------|
| **Claude Code** | 🔥🔥🔥 High | Fast — 14 PRs, active issue triage | Mature — 50+ active contributors, enterprise adoption |
| **OpenAI Codex** | 🔥🔥🔥 High | Fast — 50 PRs, 2 releases | Mature — extensive permissions architecture, stable API |
| **Gemini CLI** | 🔥🔥 Medium | Moderate — 24 PRs | Growing — rapid feature additions, experimental features |
| **Copilot CLI** | 🔥 Medium | Slow — no recent PRs | Stagnant — potential maintenance gap |
| **Kimi Code** | 🔥 Low | Low — 11 PRs, 4 issues | Early — small community, focused on stability |
| **OpenCode** | 🔥🔥🔥 High | Fast — 50 PRs, active releases | Mature — performance-focused, DeepSeek integration leader |
| **Qwen Code** | 🔥🔥🔥 High | Fast — 43 PRs, 2 releases | Growing — aggressive iteration, cost management focus |
| **Pi** | 🔥🔥 Medium | Moderate — 15 PRs, MCP landed | Growing — extension ecosystem emerging |

**Key Insights:**
- **Qwen Code** and **OpenCode** are the most aggressively iterated tools, with 40+ PRs per day and frequent releases.
- **Copilot CLI** shows signs of stagnation with no PR activity, raising concerns about long-term maintenance.
- **Claude Code** maintains the highest community engagement per issue (88 comments on a single bug), indicating strong user investment.
- **Pi** and **Gemini CLI** are in a growth phase, with new features (MCP extension, AST-aware tools) attracting developer interest.

---

## 6. Trend Signals

The following signals from community feedback provide actionable intelligence for developers and decision-makers:

### 6.1 MCP Standardization Accelerating
MCP is emerging as the de facto protocol for AI tool integration. **Claude Code**, **Codex**, **Gemini CLI**, **Pi**, and **Qwen Code** all have active MCP development. The Pi MCP extension (#3774) with stdio/SSE transport sets a precedent for multi-transport support. **Developers should prioritize MCP-compatible toolchains.**

### 6.2 Multi-Agent Architectures Go Mainstream
Feature requests for subagent management, background agents, and multi-agent orchestration appear across **Claude Code**, **Gemini CLI**, **Copilot CLI**, and **OpenCode**. The background agent UI in Qwen Code (#3488) and Pi (#3781) signals production-ready multi-agent capabilities. **Enterprises should evaluate multi-agent workflows now.**

### 6.3 Cost Visibility Becomes a Differentiator
**Qwen Code** (119 comments on OAuth policy), **OpenCode** (#9281, 21 👍), and **Pi** (#3631) are responding to demand for cost tracking. Per-model pricing configuration and unified usage commands are emerging. **Cost-aware teams should monitor Qwen Code and Pi for cost management features.**

### 6.4 Windows Remains the Problematic Platform
Across all tools, Windows-specific issues dominate: Unix-only commands (#2981), WSL/TMUX rendering (#8484), rg.exe permissions (#13542), and bash routing (#26009). **Windows developers should expect friction and monitor tool-specific workarounds.**

### 6.5 DeepSeek V4 Integration is a Battleground
**OpenCode**, **Qwen Code**, and **Pi** are racing to support DeepSeek V4's `reasoning_content` handling. Bugs in reasoning block serialization (#3742) and `reasoning_content` conflicts (#3579) indicate immature integration. **DeepSeek users should verify reasoning model support before production use.**

### 6.6 Native Checkpoint/Rewind is a Top Request
The **Codex** `/rewind` request (#11626) has 95 👍—the highest upvote count across all tools. **Claude Code** (#52209) and **OpenCode** (#25947) have related fixes. **This signals a universal need for undoable AI interactions.**

### 6.7 Streaming Reliability is a Production Blocker
Pi's 5-minute undici timeout (#3715) and Claude Code's API stream idle timeout (#47841) indicate streaming reliability is not yet production-grade across the ecosystem. **Mission-critical deployments should implement timeout handling and retry logic.**

### 6.8 AST-Aware Tools Reduce Token Noise
**Gemini CLI** (#22745) and **OpenCode** (#24515) are investing in AST-aware file operations to reduce tool call turns and token usage. This trend aligns with cost optimization pressures. **Token-efficient workflows will increasingly rely on AST-aware navigation.**

---

## Summary for Decision-Makers

| Consideration | Recommendation |
|---------------|----------------|
| **Platform Choice** | For MCP depth → **Claude Code**; For Windows → **OpenAI Codex**; For cost management → **Qwen Code** or **Pi**; For DeepSeek V4 → **OpenCode** or **Qwen Code** |
| **Enterprise Adoption** | **Claude Code** and **OpenAI Codex** show the strongest enterprise maturity; **Copilot CLI** may pose maintenance risks |
| **Development Investment** | MCP integration, multi-agent workflows, and cost tracking are safe bets for tooling investment |
| **Risk Areas** | Windows compatibility, streaming reliability, and DeepSeek V4 integration remain unstable across all tools |
| **Watch List** | **Qwen Code** (rapid iteration, cost features), **Pi** (MCP extensions, model config), **OpenCode** (DeepSeek leadership, performance) |

---

*Cross-tool analysis synthesized from GitHub community data on 2026-04-27. All issue and PR references link to respective repositories.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest

**Date:** 2026-04-27
**Source:** github.com/anthropics/claude-code

---

## 1. Today's Highlights

The community's most urgent concern remains the widespread hanging/freezing issue (#26224), now with 88 comments and 112 👍 reactions, indicating a critical impact on developer productivity. A major open-source request (#41447) has emerged, proposing to open-source Claude Code entirely, which has attracted significant attention. Several TUI-related bugs—including rewind freezes and window resize duplication—have surfaced, suggesting increased focus on terminal experience quality.

---

## 2. Releases

**No new releases in the last 24 hours.**

---

## 3. Hot Issues

| # | Issue | Key Points | Community Reaction |
|---|-------|------------|-------------------|
| **#26224** | **[BUG] Claude Code is hanging / freezing / stuck on heaps of prompts for 5-20 minutes** | Critical production issue affecting widespread users. Created Feb 2026, still unresolved. | 🔥 88 comments, 112 👍 |
| **#1785** | **[Feature] Support for MCP Sampling to leverage Claude Max subscriptions** | Would enable cost reduction by using Claude Max for sampling decisions. | 💡 54 comments, 109 👍 |
| **#28077** | **[Feature] Allow scrolling back to view full conversation history in CLI TUI** | Alt-screen buffer prevents terminal scrollback; users cannot review long conversations. | 📜 29 comments, 58 👍 |
| **#47841** | **[BUG] API Error: Stream idle timeout - partial response received** | Affects Claude Code Web users; duplicate issue. | ⚠️ 15 comments, 14 👍 |
| **#44805** | **[BUG] Remote Control: mobile app fails with "GitHub repository access check failed"** | Blocks mobile workflow when `git_repo_url` environment variable is set. | 📱 10 comments, 10 👍 |
| **#53610** | **[Feature] Multi-agent runtime needs mechanical enforcement: 9 gaps** | Documents critical gaps preventing unattended overnight multi-agent operations. | 🤖 8 comments, 0 👍 |
| **#40867** | **[BUG] Opus repeatedly ignores explicit user instructions and custom skills** | Model behavior issue causing ~265k token waste through preventable violations. | ⚠️ 8 comments, 2 👍 |
| **#52209** | **[Bug] Rewind functionality causes terminal freeze** | Users must kill terminal entirely; now closed. | 🔒 6 comments, 9 👍 |
| **#43989** | **[BUG] v2.1.92 regression: autocompact threshold reduced to 400k on Opus 4.6** | Undocumented regression reduces 1M context to 400k threshold. | 📉 6 comments, 3 👍 |
| **#53200** | **[BUG] Ink render panic on Agent-Teams subagent spawn** | Panic in v2.1.119 when spawning named teammates via Agent tool. | 💥 6 comments, 2 👍 |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| **#41447** | **feat: open source claude code** | Major community proposal to open-source the entire Claude Code project. | OPEN |
| **#53679** | **[Bug] Anthropic API Error: Server rate limiting** | $800 bounty-funded fix for rate limiting across multiple Pro accounts. | OPEN |
| **#53661** | **fix(marketplace): add version and author to agent-sdk-dev entry** | Fixes missing metadata in plugin marketplace. | OPEN |
| **#53658** | **fix(scripts): paginate API fetches in dedupe scripts** | Adds `per_page=100` to prevent silent failures on busy issues. | OPEN |
| **#53657** | **docs: fix stale docs URL in bash command validator example** | Updates outdated hooks documentation URL. | OPEN |
| **#53529** | **fix(plugins): add missing plugin-dev manifest and validate bundled marketplace** | Adds CI validation for local marketplace entries. | OPEN |
| **#33351** | **docs: add workaround for false-positive update banner on brew/winget** | Documents `DISABLE_AUTOUPDATER=1` workaround for version-channel mismatch. | OPEN |
| **#53639** | **Claude Code Desktop silently uses project API keys for billing** | $200 bounty report of billing transparency issue. | OPEN |
| **#53482** | **Chore/devcontainer aws volume** | Devcontainer improvement. | CLOSED |
| **#31945** | **docs: Add CLAUDE.md repository guide for AI assistants** | Adds comprehensive AI assistant guide for the codebase. | CLOSED |

---

## 5. Feature Request Trends

Based on the issue analysis, the community is prioritizing:

1. **MCP (Model Context Protocol) Enhancements**
   - MCP Sampling support for cost optimization (#1785)
   - Claude.ai Connectors integration with Routines (#52586)
   - Improved MCP tool reliability across sessions (#53489, #53550)

2. **Multi-Agent Capabilities**
   - Mechanical enforcement for unattended operation (#53610)
   - Hooks for subagent tool calls (#34692)
   - Worktree isolation improvements (#52958)

3. **TUI/CLI Improvements**
   - Scrollback buffer for conversation history (#28077)
   - Window resize handling fixes (#53394, #53680)
   - Status line refresh after `/compact` (#53672)

4. **IDE Integration**
   - JetBrains plugin with proper Claude AI Assist interface (#47166)
   - VSCode terminal rendering improvements (#53699)

5. **Cost & Usage Management**
   - `--wait-on-usage-limit` flag for non-interactive sessions (#41502)
   - Better quota visibility and crash prevention (#53283)

---

## 6. Developer Pain Points

The following recurring issues represent the highest-friction areas for developers:

| Pain Point | Impact | Frequency |
|------------|--------|-----------|
| **Hanging/Freezing Sessions** | Blocks work for 5-20+ minutes; affects production use | High (88 comments, 112 👍) |
| **TUI Rewind Freeze** | Forces terminal kill; destroys workflow | High (multiple reports) |
| **Context Auto-Compaction Issues** | Fires prematurely (16% context), reduces threshold unexpectedly | High (regression reports) |
| **Rate Limiting** | Blocks work across multiple Pro accounts; $800/month users affected | High |
| **Subagent Hooks Not Firing** | Breaks automation workflows relying on PreToolUse/PostToolUse | Medium |
| **Git Worktree Memory Misdirection** | Points to wrong project directory | Medium |
| **Project-Level Skills Ignored** | Skills not included in system prompt | Medium |
| **Model Instruction Violations** | Repeatedly ignores CLAUDE.md rules and direct instructions | Medium |

---

*Generated from GitHub data • 50 issues, 14 PRs analyzed*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest

**Date:** 2026-04-27
**Data Source:** github.com/openai/codex

---

## 1. Today's Highlights

The Codex team continues rapid iteration with two new Rust alpha releases (v0.126.0-alpha.3/4). A major community push is emerging around GPT-5.5's 1M token context support, with 57 developers backing the request. The permissions subsystem is seeing significant refactoring, with five PRs from @bolinfest modernizing how sandbox policies and profiles are handled. Windows users continue to report integration issues, particularly around bundled tools and WSL paths.

---

## 2. Releases

| Version | Summary |
|---------|---------|
| **rust-v0.126.0-alpha.4** | Latest alpha release in the v0.126.0 series. No changelog details provided. |
| **rust-v0.126.0-alpha.3** | Preceding alpha release. Incremental progress toward stable v0.126.0. |

Both releases appear to be Rust SDK updates. No breaking changes or feature highlights announced in release notes.

---

## 3. Hot Issues

| # | Issue | Author | Comments | 👍 | Why It Matters |
|---|-------|--------|----------|----|----------------|
| **#19464** | **[enhancement] Support 1M token context for GPT-5.5 in Codex** | @umikato | 40 | 57 | Currently documented at 400K; community wants alignment with API capabilities. High engagement signals demand for long-context workflows. [Link](https://github.com/openai/codex/issues/19464) |
| **#13542** | **[bug] Windows: bundled rg in Codex Desktop resolves on PATH but fails with Access Denied** | @neavo | 32 | 21 | Affects Windows PowerShell users relying on ripgrep. Suggests sandbox permission gaps in the packaged binary execution path. [Link](https://github.com/openai/codex/issues/13542) |
| **#12491** | **[bug] MCP child processes not reaped — 1300+ zombies, 37GB memory leak** | @rolldav | 18 | 3 | Critical resource exhaustion bug in Codex.app GUI. Demonstrates systemic issue with MCP plugin lifecycle management. [Link](https://github.com/openai/codex/issues/12491) |
| **#11626** | **[enhancement] Add /rewind checkpoint restore for chat context and code edits** | @Alek2077 | 14 | 95 | Highest 👍 on the board. Users want native undo functionality that reverts both conversation state and workspace changes from checkpoints. [Link](https://github.com/openai/codex/issues/11626) |
| **#13733** | **[bug] Background process polling wastes tokens: full API turn per poll** | @jitlabs-sg | 11 | 11 | Inefficient polling burns credits on every status check. Affects anyone running long builds/tests. [Link](https://github.com/openai/codex/issues/13733) |
| **#15975** | **[bug] Codex extension stuck on loading/logo screen after VS Code update** | @PranavAcml | 10 | 0 | Regression after VS Code updates breaks productivity for Windows users. [Link](https://github.com/openai/codex/issues/15975) |
| **#18993** | **[bug] Unable to open past conversation history in VS Code extension** | @iamhenryhuang | 10 | 11 | Session persistence broken; users lose access to historical work. [Link](https://github.com/openai/codex/issues/18993) |
| **#17526** | **[bug] Clicking file reference opens pane but doesn't jump to line** | @chenyukang | 7 | 12 | Navigation UX regression in Codex Desktop; minor but frustrating for code review workflows. [Link](https://github.com/openai/codex/issues/17526) |
| **#18506** | **[bug] Windows Codex + WSL: UNC cwd breaks terminal, config leaks** | @blockedby | 5 | 8 | Multi-platform workflow pain; WSL users face terminal and config isolation issues. [Link](https://github.com/openai/codex/issues/18506) |
| **#19703** | **[bug] Unstable websocket reconnection after restart when resuming sessions** | @GGBondBlueWhale | 4 | 0 | Session reliability issue; reconnections fail intermittently, disrupting work continuity. [Link](https://github.com/openai/codex/issues/19703) |

---

## 4. Key PR Progress

| # | PR | Author | Status | Summary |
|---|-----|--------|--------|---------|
| **#19734** | **permissions: centralize legacy sandbox projection** | @bolinfest | OPEN | Consolidates `SandboxPolicy` at compatibility boundaries to prevent behavior drift across app-server, CLI, and config code. [Link](https://github.com/openai/codex/pull/19734) |
| **#19737** | **permissions: derive legacy exec policies at boundaries** | @bolinfest | OPEN | Prevents cached legacy `SandboxPolicy` from drifting from richer profile state; removes unnecessary round trips. [Link](https://github.com/openai/codex/pull/19737) |
| **#19736** | **permissions: constrain requirements as profiles** | @bolinfest | OPEN | Migrates `allowed_sandbox_modes` validation through `SandboxPolicy` to support profile-backed configurations. [Link](https://github.com/openai/codex/pull/19736) |
| **#19735** | **permissions: store only constrained permission profiles** | @bolinfest | OPEN | Eliminates dual storage of `PermissionProfile` and `SandboxPolicy` to avoid synchronization overhead. [Link](https://github.com/openai/codex/pull/19735) |
| **#19395** | **permissions: finish profile-backed app surfaces** | @bolinfest | OPEN | Removes legacy sandbox projection from user-facing surfaces for fidelity between `External` and `Disabled` modes. [Link](https://github.com/openai/codex/pull/19395) |
| **#19058** | **Add /auto_review_denials retry approval flow** | @won-openai | OPEN | New TUI surface for selecting recent denials and sending explicit approval context back into the session. [Link](https://github.com/openai/codex/pull/19058) |
| **#19739** | **Lazily resolve hostname for remote sandbox config** | @abhinav-oai | OPEN | Fixes slow startup on machines where hostname lookup is expensive by deferring resolution until requirements actually need it. [Link](https://github.com/openai/codex/pull/19739) |
| **#19709** | **Render delegated patch approval details** | @etraut-openai | OPEN | Fixes #19632; ensures inactive-thread approval path renders file change diffs correctly for delegated agents. [Link](https://github.com/openai/codex/pull/19709) |
| **#19717** | **fix: fall back to git metadata for HEAD commit hash** | @bolinfest | OPEN | Fixes flaking e2e tests on Windows by using git metadata fallback when `git rev-parse HEAD` fails. [Link](https://github.com/openai/codex/pull/19717) |
| **#19733** | **Allow agents.max_threads to work with multi_agent_v2** | @andmis | CLOSED | Enables `max_threads` configuration for multi-agent workflows. [Link](https://github.com/openai/codex/pull/19733) |

---

## 5. Feature Request Trends

Analysis of 50 issues reveals these dominant themes:

| Theme | Frequency | Examples |
|-------|-----------|----------|
| **Context Window Expansion** | High | 1M token support for GPT-5.5 (#19464), conversation compaction (#11641) |
| **Checkpoint/Undo Functionality** | High | Native `/rewind` for chat + edits (#11626, 95 👍) |
| **Windows/WSL Integration** | High | UNC path handling (#18506), rg.exe permissions (#13542), VS Code extension issues (#15975, #18993) |
| **MCP (Model Context Protocol)** | Medium | Zombie processes (#12491), plugin visibility (#19701), skill loading (#10878) |
| **Session Persistence** | Medium | History access (#18993), workspace folder remapping (#15347), websocket reconnection (#19703) |
| **Token Efficiency** | Medium | Polling waste (#13733), summarized message display (#19387) |
| **Computer Use** | Low | Full Windows desktop support (#19305) |

---

## 6. Developer Pain Points

1. **Windows Tooling Gaps**: Bundled executables (rg.exe) fail with Access Denied; WSL UNC paths break terminal and config isolation. Windows developers face the most friction.

2. **MCP Resource Leaks**: The 37GB memory leak from unreaped MCP child processes (#12491) indicates systemic lifecycle management issues in the plugin architecture.

3. **Token Waste in Polling**: Background process polling triggers full API round-trips per check, burning credits unnecessarily (#13733).

4. **Session Reliability**: Websocket reconnection instability (#19703) and inability to open past conversations (#18993) undermine trust in session persistence.

5. **Limited Context Windows**: Despite GPT-5.5's potential, Codex is documented at 400K, prompting calls for 1M token support (#19464).

6. **No Native Undo/Rewind**: The 95-👍 request for `/rewind` (#11626) highlights absence of granular rollback for both chat and code state.

---

*End of Digest*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-27

## Today's Highlights

The Gemini CLI community is actively addressing agent reliability and Windows compatibility issues. A critical P1 issue (#22323) reveals subagents incorrectly reporting success after hitting MAX_TURNS, while the team is investigating AST-aware file operations to reduce token noise and improve precision (#22745). On the tooling side, new PRs tackle sandbox container naming race conditions (#26014) and TLS environment variable propagation (#26011), both addressing long-standing developer friction points.

---

## Releases

**No new releases in the last 24 hours.**

---

## Hot Issues

| # | Issue | Comments | Why It Matters |
|---|-------|----------|----------------|
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **AST-aware file reads, search, and mapping** | 5 | Epic tracking investigation into AST-aware tools that could reduce tool call turns and token noise by reading method bounds precisely. Community sees high value in this optimization. |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent recovery after MAX_TURNS reports GOAL success** | 4 | P1 bug where `codebase_investigator` subagent falsely reports success despite hitting turn limits. Masks actual failures during repository analysis. |
| [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) | **Permission prompts repeat for same file** | 3 | Security/UX issue where "allow for all future sessions" doesn't persist, causing repeated interruptions. Affects workflow continuity. |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell commands stuck with "Waiting input"** | 2 | Core bug where CLI hangs after simple shell commands complete, showing active shell despite finished execution. Blocks productivity. |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | **Model creates tmp scripts in random directories** | 2 | P2 issue where restricting shell execution causes model to scatter edit scripts across workspace, creating cleanup overhead for commits. |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | **Browser Agent ignores settings.json overrides** | 2 | P2 bug where Browser Agent doesn't respect `maxTurns` and other config overrides from global/project-level settings.json. |
| [#26001](https://github.com/google-gemini/gemini-cli/issues/26001) | **Free quota consumed 25%→90% in 4 minutes** | 1 | User complaint about aggressive quota consumption during bug-fixing session with multiple file reads. Raises concerns about token efficiency. |
| [#25216](https://github.com/google-gemini/gemini-cli/issues/25216) | **EISDIR error on Windows A:\ path** | 1 | Core bug causing critical error when running `--yolo` in PowerShell on Windows with certain path configurations. |
| [#24915](https://github.com/google-gemini/gemini-cli/issues/24915) | **Thick black border at prompt bar** | 1 | UI rendering issue visible in attached screenshot, affecting terminal aesthetics and potentially readability. |
| [#24202](https://github.com/google-gemini/gemini-cli/issues/24202) | **Text scrambled when running over SSH** | 1 | Windows-to-gLinux SSH users report unusable CLI output due to text rendering issues in remote sessions. |

---

## Key PR Progress

| # | PR | Area | Summary |
|---|-----|------|---------|
| [#26005](https://github.com/google-gemini/gemini-cli/pull/26005) | **Fix infinite dialog loop in /skills link** | CLI | Fixes confirmation dialog that blocks interaction after user selection; adds ESC key support. |
| [#26016](https://github.com/google-gemini/gemini-cli/pull/26016) | **Fix broken contribution guide links** | Docs | Repairs 404 errors and lychee warnings in CONTRIBUTING.md documentation. |
| [#26018](https://github.com/google-gemini/gemini-cli/pull/26018) | **Add skill discovery troubleshooting checklist** | Docs | Adds 5-point checklist to help beginners debug skill discovery issues. |
| [#26014](https://github.com/google-gemini/gemini-cli/pull/26014) | **Randomize sandbox container names** | CLI | Replaces sequential allocator with 12-hex random suffix to prevent race conditions when multiple CLIs start concurrently. |
| [#25822](https://github.com/google-gemini/gemini-cli/pull/25822) | **Add missing response key to custom theme schema** | Core | Fixes validation schema to include `text.response` color override documented in themes guide. |
| [#25962](https://github.com/google-gemini/gemini-cli/pull/25962) | **Standardize config option names** | Config | Adopts consistent positive boolean semantics (`showX`, `enableY`) across codebase for readability. |
| [#25900](https://github.com/google-gemini/gemini-cli/pull/25900) | **Prefer pwsh.exe over Windows PowerShell 5.1** | Core | Fixes command execution failures with embedded double quotes on Windows by preferring PowerShell 7+. |
| [#26011](https://github.com/google-gemini/gemini-cli/pull/26011) | **Propagate TLS env vars from .gemini/.env** | CLI | Fixes `NODE_EXTRA_CA_CERTS` and TLS vars ignored after parent/child process model change. |
| [#25947](https://github.com/google-gemini/gemini-cli/pull/25947) | **Versioned pre-write backups with agent-driven restore** | Tools | Introduces session-scoped transactional layer for file operations to mitigate destructive modification loops. |
| [#26009](https://github.com/google-gemini/gemini-cli/pull/26009) | **Experimental Windows bash routing** | Core | Routes shell commands through bash on Windows to handle Unix syntax (`&&`, `grep`, `awk`, pipes) that models naturally emit. |

---

## Feature Request Trends

Based on issue analysis, the community is requesting:

1. **Agent Intelligence & Memory**
   - AST-aware file operations for precise code navigation (#22745, #22746)
   - Memory routing: global vs. project-scoped storage (#22819)
   - Proactive memory writes triggered by user preferences (#22809)

2. **Subagent Coordination**
   - Awareness of active approval modes (Plan/Auto-Edit) (#23582)
   - Robust recovery after MAX_TURNS (#22323)
   - Behavioral evaluations for subagent tool call rejections (#23897)

3. **Windows & Cross-Platform**
   - Bash routing for Windows to handle Unix shell syntax (#26009)
   - SSH session detection and rendering fixes (#24202, #24546)
   - PowerShell 7+ preference over legacy versions (#25900)

4. **Model Management**
   - Favorite models and keyboard-based cycling (#25072)
   - Internal utility model updates to 3.1 flash lite (#23823)

5. **Safety & Reliability**
   - File backup and reversion system (#25947)
   - Discouragement of destructive commands (#22672)
   - RAG defense against malicious injections (#25190)

---

## Developer Pain Points

1. **Permission Prompt Fatigue** — Users report repeated permission requests for the same files despite selecting "allow for all future sessions" (#24916).

2. **Shell Hangs** — Simple shell commands leave the CLI stuck in "Awaiting user input" state, requiring manual intervention (#25166).

3. **Windows Path Handling** — Errors like `EISDIR` on certain Windows paths block core functionality (#25216).

4. **Quota Anxiety** — Free tier users report alarming consumption rates (25%→90% in minutes), raising concerns about token efficiency (#26001).

5. **SSH Rendering** — Remote session users experience scrambled text, making the CLI unusable over SSH (#24202).

6. **Scroll Jitter** — Long chat sessions exhibit screen flashes and scrollbar jumping during navigation (#24470).

7. **Tmp Script Clutter** — Models create scattered temporary scripts when shell execution is restricted, complicating clean commits (#23571).

8. **Settings Ignored** — Browser Agent doesn't respect `settings.json` overrides, forcing users to work around configuration (#22267).

---

*Generated: 2026-04-27 | Data source: [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# OpenCode Community Digest — 2026-04-27

## Today's Highlights

OpenCode **v1.14.26** shipped with critical fixes for DeepSeek V4 reasoning output handling and config parsing preservation. The community is actively addressing a **memory megathread** (#20695) with 65 comments, signaling widespread performance concerns. Several race conditions and session handling bugs were closed, while new experimental HTTP API bridges for PTY and TUI routes are under development.

---

## Releases

### v1.14.26 (Latest)
**Core:**
- Fixed config parsing to preserve permission rule order
- Fixed OpenRouter DeepSeek reasoning output handling
- Added `opencode/<version>` User-Agent header with HTTP requests

**TUI:**
- Added Zed editor selection support for editor context
- Show `/connect` tip when no mo...

---

## Hot Issues

| # | Issue | Comments | 👍 | Why It Matters |
|---|-------|----------|----|----------------|
| [#20695](https://github.com/anomalyco/opencode/issues/20695) | **[perf, core] Memory Megathread** | 65 | 39 | Central tracking for scattered memory reports; team requests heap snapshots to diagnose root causes |
| [#24442](https://github.com/anomalyco/opencode/issues/24442) | **[core] DeepSeek V4 reasoning_content lost on second interleaved pass** | 25 | 0 | Regression from PR #24146; breaks DeepSeek V4 functionality; already closed |
| [#24462](https://github.com/anomalyco/opencode/issues/24462) | **[bug, core] OpenCode Go Kimi route returns Moonshot 429** | 13 | 9 | Billing/quota error confusion; users charged incorrectly despite available quota |
| [#15035](https://github.com/anomalyco/opencode/issues/15035) | **[core] about agent-teams** | 11 | 3 | High-demand feature request; users asking when multi-agent collaboration lands |
| [#24184](https://github.com/anomalyco/opencode/issues/24184) | **[opentui, windows] IDE/editor context persists after closing file** | 10 | 1 | Stale context injection causes LLM confusion; regression since v1.14.23 |
| [#23907](https://github.com/anomalyco/opencode/issues/23907) | **[bug, windows, core] model executed .cmd script despite shell permission Ask** | 10 | 0 | Security concern; shell execution bypasses permission settings |
| [#8484](https://github.com/anomalyco/opencode/issues/8484) | **[bug, opentui, windows, perf] Screen lag/freezing (WSL2, TMUX, Alacritty)** | 10 | 14 | Long-standing perf issue; affects terminal-heavy workflows |
| [#9281](https://github.com/anomalyco/opencode/issues/9281) | **[FEATURE] Add unified usage tracking via /usage** | 8 | 21 | Highly upvoted; users want visibility into plan limits for Codex, Copilot, Claude |
| [#24475](https://github.com/anomalyco/opencode/issues/24475) | **[opentui, perf] TUI hangs in tmux after opentui 0.1.103 upgrade** | 7 | 4 | Theme detection regression; makes TUI unusable in tmux |
| [#22187](https://github.com/anomalyco/opencode/issues/22187) | **[bug, perf, web] Opencode desktop scans random system folders** | 7 | 4 | Privacy/security issue; desktop app accessing unintended directories at 100% CPU |

---

## Key PR Progress

| # | PR | Author | Type | Summary |
|---|-----|--------|------|---------|
| [#24515](https://github.com/anomalyco/opencode/pull/24515) | **feat(tool): add patch_file, ast_query, ast_edit** | @r3vs | New Feature | Three new built-in tools for hash-anchored + AST-native editing; reduces token usage on large codebases |
| [#23612](https://github.com/anomalyco/opencode/pull/23612) | **fix(opencode): add lsp sync range for roslyn** | @VladD2 | Bug Fix | Fixes Roslyn LSP server crash and workspace symbol queries |
| [#24482](https://github.com/anomalyco/opencode/pull/24482) | **fix(opencode): agent create generates permissions field** | @21pounder | Bug Fix | Corrects deprecated `tools` field → `permissions` field with `deny` strings |
| [#24555](https://github.com/anomalyco/opencode/pull/24555) | **upgrade opentui to 0.1.105** | @kommander | Dependency | Latest opentui upgrade (Vouched) |
| [#24554](https://github.com/anomalyco/opencode/pull/24554) | **refactor: remove module barrels** | @thdxr | Refactor | Eliminates barrel `index.ts` files to avoid provider/session cycles |
| [#24553](https://github.com/anomalyco/opencode/pull/24553) | **fix(session): harden shell cancellation** | @kitlangton | Bug Fix | Treats explicit shell cancellation as interrupt; ensures proper output ordering |
| [#18767](https://github.com/anomalyco/opencode/pull/18767) | **feat(app): Mobile Touch Optimization** | @noahbentusi | New Feature | Mobile/touch device optimization while preserving desktop experience |
| [#20491](https://github.com/anomalyco/opencode/pull/20491) | **feat(opencode): add Kiro provider** | @NachoFLizaur | New Feature | Adds Kiro (AWS) as a new provider |
| [#23501](https://github.com/anomalyco/opencode/pull/23501) | **fix: OpenAI-compatible provider improvements** | @jwcrystal | Bug Fix | Fixes system messages, image support, and stream interruption for Ollama/local models |
| [#20602](https://github.com/anomalyco/opencode/pull/20602) | **feat: configurable shell selection + desktop settings UI** | @Hona | New Feature | Shell setting for desktop; wires through terminal sessions, prompt execution, bash tool |

---

## Feature Request Trends

Based on issue analysis, the community is prioritizing:

1. **Usage Tracking** (#9281) — Unified `/usage` command for authenticated providers (Codex, Copilot, Claude) with 21 👍
2. **Agent Teams** (#15035) — Multi-agent collaboration and delegation capabilities
3. **Continuous Execution Loop** (#18636) — Native config for autonomous task completion loops
4. **GitHub Copilot Auto Model Routing** (#20235) — Request for `/models/session` API access and chat.model plugin hook
5. **Mobile Optimization** (#18767) — Touch-friendly UI (PR in progress)

---

## Developer Pain Points

| Category | Issues | Impact |
|----------|--------|--------|
| **Terminal Compatibility** | #8484, #24475, #24358 | TUI freezing/lagging in tmux, WSL2, Alacritty; affects power users |
| **Memory Usage** | #20695 | Scattered reports being consolidated; heap snapshot collection in progress |
| **DeepSeek Integration** | #24442, #24534 | Reasoning content loss and rate limiting; ongoing stability issues |
| **Windows-Specific Bugs** | #24184, #23907, #24081, #24288 | Context persistence, permission bypass, WSL1 binary errors, mouse sequence leaks |
| **Session/State Management** | #24542, #24295, #23534 | Race conditions, stale file references, sub-agent cleanup failures |
| **Clipboard/Toast UX** | #23613, #23394 | "Copied to clipboard" toast disappears too quickly on macOS |

---

*Generated: 2026-04-27 | Source: github.com/anomalyco/opencode*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-27

## 1. Today's Highlights

The Qwen Code team shipped **v0.15.3** alongside a new nightly build, introducing native context menu copy actions for VS Code webview chat and a significant **91% reduction in runtime sync I/O on the tool hot path**. Meanwhile, the community is actively debating a controversial OAuth free tier policy adjustment that would slash daily request limits from 1,000 to 100, with issue #3203 generating 119 comments. Several DeepSeek V4 integration bugs related to `reasoning_content` handling have surfaced, indicating potential compatibility issues with newer reasoning models.

---

## 2. Releases

### v0.15.3
- **feat(vscode)**: Native context menu copy actions for webview chat ([#3477](https://github.com/QwenLM/qwen-code/pull/3477))
- **perf(core)**: Cut runtime sync I/O on tool hot path by **91%** ([#3581](https://github.com/QwenLM/qwen-code/pull/3581))
- **feat(cli)**: Traditional Chinese language support added

### v0.15.2-nightly.20260427.3b0b6c052
- **feat**: Catalan language support ([#3643](https://github.com/QwenLM/qwen-code/pull/3643))
- **fix(vscode-companion)**: Slash command completion not triggering after message submit ([#3609](https://github.com/QwenLM/qwen-code/pull/3609))
- **fix(cli)**: Gradient render guard improvements

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#3203](https://github.com/QwenLM/qwen-code/issues/3203) | **Qwen OAuth Free Tier Policy Adjustment** — Proposes reducing daily quota from 1,000 to 100 requests and phasing out free tier by May 20 | Directly impacts all free-tier users; 119 comments indicate strong community concern | **119 comments** — heated debate over policy fairness |
| [#656](https://github.com/QwenLM/qwen-code/issues/656) | **API Error 400: InternalError.Algo.InvalidParameter** — Every message fails with 400 error for 12-16 hours | P1 bug affecting all API users; indicates backend regression | **9 comments** — users reporting widespread outage |
| [#3619](https://github.com/QwenLM/qwen-code/issues/3619) | **DeepSeek V4 reasoning_content error** — API requires `reasoning_content` in thinking mode but it's not being passed | Compatibility issue with newer DeepSeek models; blocks reasoning workflows | **8 comments** — multiple users confirming the issue |
| [#3579](https://github.com/QwenLM/qwen-code/issues/3579) | **DeepSeek API 400 error — reasoning_content conflict** — Clarification needed on stripping thought blocks vs preserving `reasoning_content` | Design conflict between model switch handling and reasoning requirements | **7 comments** — ongoing discussion on correct behavior |
| [#3520](https://github.com/QwenLM/qwen-code/issues/3520) | **Tool ran without output or errors** — Silent failures in tool execution | Data integrity concern; tools appear to succeed but produce no results | **6 comments** — investigating root cause |
| [#2466](https://github.com/QwenLM/qwen-code/issues/2466) | **Adding branching for MCP** — Request for MCP server branching support | Expands MCP integration capabilities for complex workflows | **6 comments** — feature request with implementation context |
| [#3585](https://github.com/QwenLM/qwen-code/issues/3585) | **增加模型计费功能** — Request for per-model pricing configuration and cost tracking | Enables cost visibility across multi-provider setups | **5 comments** — feature request with clear use case |
| [#1295](https://github.com/QwenLM/qwen-code/issues/1295) | **ACP mode switching doesn't work** — Agent-shell mode switching fails in Emacs | Blocks Emacs/ACP users from changing agent behavior | **4 comments** — long-standing integration issue |
| [#3641](https://github.com/QwenLM/qwen-code/issues/3641) | **401 invalid access token** — Internal error on token validation | Authentication failure affecting user sessions | **4 comments** — users seeking workarounds |
| [#3644](https://github.com/QwenLM/qwen-code/issues/3644) | **Rewind functionality fails with IDE integration** — `/rewind` broken when `ide.enabled: true` | Feature regression impacting IDE users | **2 comments** — reproducible bug report |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#3488](https://github.com/QwenLM/qwen-code/pull/3488) | **feat(cli): background-agent UI** — Pill indicator, combined dialog, detail view for background agents | User-facing UI for background subagent management | Open |
| [#3607](https://github.com/QwenLM/qwen-code/pull/3607) | **feat(cli): Improve custom auth wizard** — Step indicators, cleaner advanced config | Enhanced authentication setup UX | Open |
| [#3647](https://github.com/QwenLM/qwen-code/pull/3647) | **fix(cli): keep sticky todo panel compact** — Limits visible items based on terminal height | UI polish for task visibility | Open |
| [#3471](https://github.com/QwenLM/qwen-code/pull/3471) | **feat(core): model-facing agent control** — `task_stop`, `send_message`, per-agent transcript | Full control plane for background agents | Open |
| [#705](https://github.com/QwenLM/qwen-code/pull/705) | **fix: apply auth type from arg or env variables** — Respect `--openai-api-key` after wizard completion | Long-standing auth regression fix | Open |
| [#3653](https://github.com/QwenLM/qwen-code/pull/3653) | **refactor(config): dedupe QWEN_CODE_API_TIMEOUT_MS env override** | Cleanup to prevent timeout configuration bugs | Closed |
| [#3631](https://github.com/QwenLM/qwen-code/pull/3631) | **feat(stats): add model cost estimation** — Optional per-model pricing display in `/stats model` | Addresses #3585 feature request | Open |
| [#3654](https://github.com/QwenLM/qwen-code/pull/3654) | **refactor: unify tool execution logic** — Consolidate tool handling across Interactive, Non-Interactive, and ACP modes | Reduces code duplication and future maintenance burden | Open |
| [#3642](https://github.com/QwenLM/qwen-code/pull/3642) | **feat(core): managed background shell pool** — Registry, output capture, status query, termination for background shells | Addresses long-standing shell management limitations | Open |
| [#3635](https://github.com/QwenLM/qwen-code/pull/3635) | **feat(core): --insecure flag and QWEN_TLS_INSECURE env var** — Skip TLS verification for self-signed endpoints | Enables dev/lab environment support | Open |

---

## 5. Feature Request Trends

Analysis of 32 open issues reveals these dominant feature directions:

1. **Multi-Provider Cost Management** — Multiple requests for per-model pricing configuration and cost tracking ([#3585](https://github.com/QwenLM/qwen-code/issues/3585), PR [#3631](https://github.com/QwenLM/qwen-code/pull/3631))
2. **Enhanced Reliability Mechanisms** — Exponential backoff, model fallback on 529 errors, token refresh ([#3004](https://github.com/QwenLM/qwen-code/issues/3004))
3. **MCP Integration Expansion** — Branching support, better MCP server management ([#2466](https://github.com/QwenLM/qwen-code/issues/2466))
4. **IDE/Editor Parity** — Visual Studio extension request ([#3625](https://github.com/QwenLM/qwen-code/issues/3625)), improved Emacs ACP integration ([#1295](https://github.com/QwenLM/qwen-code/issues/1295))
5. **Memory & Diagnostics** — Memory diagnostic tools for V8 heap analysis ([#3000](https://github.com/QwenLM/qwen-code/issues/3000))
6. **API Preconnection** — TCP+TLS preconnect to eliminate 100-200ms first-call latency ([#3223](https://github.com/QwenLM/qwen-code/issues/3223))

---

## 6. Developer Pain Points

| Pain Point | Frequency | Evidence |
|------------|-----------|----------|
| **DeepSeek V4 `reasoning_content` errors** | High — 3 related issues | [#3619](https://github.com/QwenLM/qwen-code/issues/3619), [#3579](https://github.com/QwenLM/qwen-code/issues/3579), [#3613](https://github.com/QwenLM/qwen-code/issues/3613) |
| **API 400/401 errors** | Recurring | [#656](https://github.com/QwenLM/qwen-code/issues/656), [#3641](https://github.com/QwenLM/qwen-code/issues/3641), [#3437](https://github.com/QwenLM/qwen-code/issues/3437) |
| **Session persistence failures** | Multiple reports | [#3606](https://github.com/QwenLM/qwen-code/issues/3606) — session not found despite existing files |
| **IDE integration conflicts** | Ongoing | [#3644](https://github.com/QwenLM/qwen-code/issues/3644) — rewind fails with IDE enabled; [#2702](https://github.com/QwenLM/qwen-code/issues/2702) — multiple edits fail in default mode |
| **Terminal UI issues** | Persistent | [#3638](https://github.com/QwenLM/qwen-code/issues/3638) — flickering; [#3639](https://github.com/QwenLM/qwen-code/issues/3639) — NO_COLOR crash in wide terminals |
| **Auth configuration regressions** | Long-standing | [#705](https://github.com/QwenLM/qwen-code/pull/705) — CLI flags/env vars ignored after wizard |

---

*Digest generated from GitHub data for [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) on 2026-04-27*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-04-27

## Today's Highlights

The pi community addressed several critical bugs this week, including a fix for the 5-minute streaming timeout affecting local LLM users (#3715, #3711) and improved Claude model compatibility via Antigravity (#3563). A major new MCP extension (#3774) landed, enabling stdio/SSE transport support for connecting agent sessions to MCP servers. The team also closed multiple feature requests around UI theming, model discovery, and provider configuration flexibility.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

| # | Title | Author | Comments | Why It Matters |
|---|-------|--------|----------|----------------|
| [#3299](https://github.com/badlogic/pi-mono/issues/3299) | Add "max" thinking level so pi's ladder stays in sync with Opus 4.7's five-rung API | @Krystofee | 8 | Aligns pi's thinking levels with the latest Opus API; ensures consistent behavior across models. |
| [#3715](https://github.com/badlogic/pi-mono/issues/3715) | `local-llm` streams terminate at 5 min from undici default `bodyTimeout` | @LooSik | 6 | **Critical bug**: Long tool calls against local backends (vLLM/Qwen3) die with `UND_ERR_BODY_TIMEOUT`; `retry.provider.timeoutMs` cannot override the cap. |
| [#1436](https://github.com/badlogic/pi-mono/issues/1436) | Contribution proposal: Auto-detect light/dark mode | @smurfix | 4 | Highly requested UX improvement; pi should follow system theme without restart. |
| [#2366](https://github.com/badlogic/pi-mono/issues/2366) | [bug] Rate limiting doesn't work | @smurfix | 4 | Users hitting TPM limits get no graceful handling; causes unexpected failures on high-usage orgs. |
| [#3767](https://github.com/badlogic/pi-mono/issues/3767) | `pi config` and startup resolve symlinked resource directories inconsistently | @clementtisseau | 3 | Config/runtime inconsistency when user and project dirs symlink to same physical locations. |
| [#3665](https://github.com/badlogic/pi-mono/issues/3665) | Anthropic normalizeToolCallId returns empty string for empty input, 400s on cross-provider replay | @nhwaani | 3 | Breaks sessions that switch providers and resume on Claude; causes `invalid_request_error`. |
| [#3563](https://github.com/badlogic/pi-mono/issues/3563) | Claude models fail via Antigravity: `const` unsupported in OpenAPI schema sanitization | @tuxevil | 3 | Fix merged (#3561); resolves `Unknown name "const"` errors for Sonnet/Opus via Cloud Code Assist. |
| [#3325](https://github.com/badlogic/pi-mono/issues/3325) | Qwen3.6 tool calls loop with empty arguments: qwen-chat-template missing preserve_thinking | @0xbentang | 3 | Model loops emitting empty `{}` args after 2–3 turns; caused by missing `preserve_thinking` in chat template. |
| [#3177](https://github.com/badlogic/pi-mono/issues/3177) | Feature: Dynamic model discovery via /v1/models API | @asimov2011 | 3 | Would replace hardcoded `models.generated.js`; enables user-enabled models from provider APIs. |
| [#3758](https://github.com/badlogic/pi-mono/issues/3758) | Avoid rebuilding assistant message components during token streaming | @bhaskarmelkani | 2 | Performance issue: component churn and flicker during long streaming responses. |

---

## Key PR Progress

| # | Title | Author | Status | Impact |
|---|-------|--------|--------|--------|
| [#3781](https://github.com/badlogic/pi-mono/pull/3781) | Pi coding agent live pager | @jrhy | Closed | Makes opt-in interactive pager live while streaming; viewport stays stable with live-output tail. |
| [#3774](https://github.com/badlogic/pi-mono/pull/3774) | feat(mcp): add MCP extension with stdio/SSE transport support | @dillbath-ai | Closed | **Major feature**: Connects sessions to MCP servers via `.pi/mcp.json`; tools auto-register as `mcp__<server>__<tool>`. |
| [#3775](https://github.com/badlogic/pi-mono/pull/3775) | Added `opencode-go` provider variants for DeepSeek V4 Flash and V4 Pro | @lwis | Closed | Expands provider options for new DeepSeek models on Go subscription. |
| [#3561](https://github.com/badlogic/pi-mono/pull/3561) | fix(ai): convert `const` to `enum` in OpenAPI schema sanitization for Claude via Antigravity | @tuxevil | Closed | Resolves `Unknown name "const"` errors for Claude Sonnet/Opus via Cloud Code Assist. |
| [#3754](https://github.com/badlogic/pi-mono/pull/3754) | fix: handle undefined model when restoring sessions | @KrabsWong | Closed | Prevents `Cannot read properties of undefined` when provider/model no longer exists (e.g., after renaming). |
| [#3678](https://github.com/badlogic/pi-mono/pull/3678) | fix(ai): honor Fireworks Anthropic tool compat | @deybhayden | Open | Fixes errors when using Fireworks API provider with any FW model. |
| [#3749](https://github.com/badlogic/pi-mono/pull/3749) | Allow per-model request config | @Ziphyrien | Closed | Enables `baseUrl`, `apiKey`, `headers`, `authHeader` on individual `models[]` entries—not just provider level. |
| [#3742](https://github.com/badlogic/pi-mono/pull/3742) | fix(ai): preserve DeepSeek reasoning after tool results | @ArtichoKaleyard | Closed | Completes DeepSeek V4 replay fix; serializes thinking blocks into `reasoning_content` and caches them. |
| [#3740](https://github.com/badlogic/pi-mono/pull/3740) | doc(README): update "quick start" | @Yvem | Closed | Fixes broken quick start example in README; tested locally. |
| [#3632](https://github.com/badlogic/pi-mono/pull/3632) | feat(coding-agent): add persistModelChanges setting | @felixge | Closed | New setting (default: true); set to false for session-only model selection without persisting to settings.json. |

---

## Feature Request Trends

1. **UI/UX Theming & Customization**
   Multiple requests for hooks into built-in renderers: dialog themes (#3772), markdown/code-block styling (#3771), assistant message renderer overrides (#3771), side panels (#3769), empty states (#3770), and input editor backgrounds (#3768). The community wants deeper extension points for visual customization.

2. **Model Discovery & Configuration Flexibility**
   Requests for dynamic model discovery via `/v1/models` API (#3177) and per-model request configuration (#3749). Users want fine-grained control over endpoints, API keys, and headers at the model level rather than provider level.

3. **Extension Architecture**
   The new MCP extension (#3774) signals strong interest in plugin ecosystems. Requests for async external editor modes (#3766) and public `ctx.ui` APIs indicate demand for richer extension capabilities.

4. **Keyboard & Input Improvements**
   Ctrl-P/Ctrl-N keymaps for TUI navigation (#2133) and fixes for Kitty Keyboard Protocol on Italian layouts (#3780) show attention to input handling polish.

---

## Developer Pain Points

1. **Streaming Timeouts**
   The 5-minute undici `bodyTimeout` is a recurring issue (#3715, #3711). Local LLM users with long tool calls hit `UND_ERR_BODY_TIMEOUT` errors, and `retry.provider.timeoutMs` cannot raise the ceiling. This affects vLLM, Qwen3 with thinking, and other local backends.

2. **Provider/Model Compatibility**
   Multiple bugs around cross-provider behavior: Claude via Antigravity fails with `const` errors (#3563), DeepSeek V4 emits raw DSML markers (#3712), Qwen3.6 loops with empty tool args (#3325), and Fireworks Anthropic tool compatibility issues (#3678). Users on non-OpenAI providers face frequent breakage.

3. **Rate Limiting Failures**
   Rate limiting doesn't work correctly (#2366), causing unexpected `429` errors for high-volume users hitting TPM limits.

4. **Symlink & Path Inconsistencies**
   Config and startup resolve symlinked resource directories inconsistently (#3767), causing confusion when user and project dirs point to the same physical locations.

5. **Model Selection Behavior**
   `pi --model` selects unavailable models instead of falling back to favorites (#3777), and session restoration fails when referenced models no longer exist (#3754).

6. **Proxy & Authentication Issues**
   NTLM proxy authentication not supported (#3713), and silent hangs on rate-limited OpenAI Codex requests due to missing per-request timeouts (#3778).

---

*Generated 2026-04-27 | Source: [badlogic/pi-mono](https://github.com/badlogic/pi-mono)*

</details>

---
*This digest is auto-generated by [Radar Forge](https://github.com/borq168/radar-forge).*
