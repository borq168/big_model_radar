# AI CLI Tools Community Digest 2026-04-30

> Generated: 2026-04-30 02:06 UTC | Tools covered: 8

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

**Date:** 2026-04-30
**Prepared for:** Technical Decision-Makers and Developers

---

## 1. Ecosystem Overview

The AI CLI tools landscape is experiencing rapid maturation with differentiated feature trajectories across providers. Claude Code and OpenAI Codex maintain enterprise-grade feature sets with strong billing controls and IDE integration depth, while Gemini CLI differentiates through AST-aware tooling and memory routing. Emerging players—Qwen Code, Pi, and Kimi Code—show the highest iteration velocity, collectively shipping 80+ PRs in 24 hours. The ecosystem is converging on shared requirements: granular tool permissions, multi-session management, MCP protocol support, and cost visibility. DeepSeek model integration has become a critical differentiator, with OpenCode, Qwen Code, and Pi actively addressing reasoning_content handling bugs. The trend toward subagent coordination and background task support signals a shift from single-turn interactions to persistent, multi-session development workflows.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases | Release Velocity |
|------|-------------|-----------|----------|------------------|
| **Qwen Code** | 48 | 46 | 2 (v0.15.5 stable + nightly) | Highest |
| **Pi** | 50 | 23 | 0 | High |
| **Gemini CLI** | 30 | 20 | 1 (nightly) | High |
| **Claude Code** | 30 | 10 | 1 (v2.1.123) | Moderate |
| **OpenCode** | 30 | 10 | 1 (v1.14.30) | Moderate |
| **OpenAI Codex** | 20 | 10 | 5 (alpha series) | High (internal) |
| **GitHub Copilot CLI** | 34 | 1 | 1 (v1.0.40-0) | Low |
| **Kimi Code CLI** | 6 | 11 | 0 | Moderate |

**Key Observations:**

- **Qwen Code and Pi** lead in raw activity volume, indicating aggressive feature development and community engagement.
- **Gemini CLI** shows strong PR momentum (20 PRs) despite fewer releases, suggesting internal refactoring.
- **GitHub Copilot CLI** has low PR activity (1 PR) despite 34 issues, indicating potential backlog or resource constraints.
- **OpenAI Codex** ships 5 alpha releases internally, signaling rapid iteration on the Rust codebase.

---

## 3. Shared Feature Directions

The following requirements appear across multiple tool communities, indicating ecosystem-wide priorities:

### 3.1 Multi-Session and Context Management

| Tool | Specific Need |
|------|---------------|
| **Claude Code** | Session switching hangs, resume by name, session bar renaming |
| **Kimi Code CLI** | ACP session history replay, multiple active sessions in VSCode |
| **OpenCode** | Missing sessions in Desktop, session list discrepancies in TUI |
| **Qwen Code** | Session persistence failures, duplicate entry corruption |
| **Pi** | Duplicate session entries, /tree hanging |

**Convergence Signal:** All tools recognize that session management is a critical reliability requirement. Expect unified session lifecycle APIs across tools.

---

### 3.2 Tool Permission Granularity

| Tool | Specific Need |
|------|---------------|
| **Claude Code** | Path-pattern scanner false positives, tool dispatch stalls |
| **GitHub Copilot CLI** | Tool whitelist for interactive mode, granular organizational policies |
| **Kimi Code CLI** | Granular auto-approval rules, permission asking repeatedly |
| **Pi** | Edit tool access failures, read vs. write permission separation |

**Convergence Signal:** The binary "allow all vs. per-action approval" model is insufficient. Tools are moving toward configurable, context-aware permission policies.

---

### 3.3 Cost Visibility and Control

| Tool | Specific Need |
|------|---------------|
| **Claude Code** | HERMES.md billing misrouting ($200 losses), quota information in CLI |
| **OpenAI Codex** | Usage limits not decreasing, phone number requirement friction |
| **OpenCode** | Unified usage tracking via /usage (22 👍), plan quota visibility |
| **Pi** | External LLM usage notice, configurable cost overrides |

**Convergence Signal:** Billing transparency is a top user demand. Tools lacking real-time quota visibility will face user attrition.

---

### 3.4 MCP (Model Context Protocol) Support

| Tool | Specific Need |
|------|---------------|
| **Claude Code** | Cowork MCP server concurrency, MCP tool approval bypass |
| **OpenAI Codex** | MCP tool review events, always-allow MCP tools |
| **Gemini CLI** | MCP schema exposure guardrails, MCP tool call scoping |
| **Kimi Code CLI** | ACP MCP tool calls, MCP server connection issues |
| **Qwen Code** | MCP config as CLI, Plan mode MCP tools |

**Convergence Signal:** MCP is becoming the standard for tool extensibility. Tools without MCP support risk feature parity gaps.

---

### 3.5 DeepSeek Model Integration

| Tool | Specific Need |
|------|---------------|
| **OpenCode** | DeepSeek reasoning_content bug (multiple issues), Mistral Medium 3.5 |
| **Qwen Code** | DeepSeek V4 reasoning_content preservation across all operations |
| **Pi** | Deepseek 4pro on fireworks broken, deepseek-v4-flash xhigh support |

**Convergence Signal:** DeepSeek V4's reasoning effort parameter requires tool-specific handling. Reasoning_content preservation across session resume, rewind, and compression is a critical bug class.

---

### 3.6 Background and Async Task Support

| Tool | Specific Need |
|------|---------------|
| **Gemini CLI** | Compact lifecycle hooks (PreCompact/PostCompact), background task management |
| **Qwen Code** | Background shells wired into task_stop, background agent resume |
| **Kimi Code CLI** | Background task management roadmap (multi-phase) |

**Convergence Signal:** The shift from single-turn to persistent workflows requires robust background task lifecycle management.

---

## 4. Differentiation Analysis

### 4.1 Feature Focus

| Tool | Primary Differentiation | Secondary Focus |
|------|------------------------|-----------------|
| **Claude Code** | Enterprise billing controls, Cowork collaborative mode | Hookify global rules, session UUID/name resume |
| **OpenAI Codex** | Azure enterprise auth, comprehensive analytics pipeline | IDE context support, thread deletion |
| **Gemini CLI** | AST-aware file operations, memory routing (global vs. project) | RalphFlow loop prevention, compact lifecycle hooks |
| **GitHub Copilot CLI** | ACP protocol leadership, slash command ecosystem | Tool whitelist, organizational policies |
| **Kimi Code CLI** | RalphFlow ephemeral context architecture, clipboard headless support | Dynamic terminal titles, granular auto-approval |
| **OpenCode** | Effect-based functional architecture, mobile optimization | Shiki syntax highlighting, usage tracking |
| **Qwen Code** | DeepSeek V4 optimization, review pipeline with 9 parallel agents | Parallel skill loading, event monitor with throttling |
| **Pi** | Extension ecosystem, multi-provider flexibility (Gloo, Cloudflare) | Shiki migration, profile isolation |

---

### 4.2 Target Users

| Tool | Primary Audience | User Profile |
|------|-----------------|--------------|
| **Claude Code** | Enterprise developers, Anthropic ecosystem users | Security-conscious, billing-aware |
| **OpenAI Codex** | Azure enterprise, Copilot subscribers | IDE-centric, analytics-driven |
| **Gemini CLI** | Google Cloud users, AST-aware developers | Precision-focused, memory-conscious |
| **GitHub Copilot CLI** | GitHub ecosystem, ACP adopters | Protocol-driven, slash-command power users |
| **Kimi Code CLI** | Chinese market, Zed/JetBrains users | IDE-integrated, multi-session workers |
| **OpenCode** | Cross-platform developers, mobile users | Performance-conscious, multi-model users |
| **Qwen Code** | DeepSeek users, review-heavy workflows | Quality-assurance, background task runners |
| **Pi** | Extension developers, multi-provider users | Flexible, experimental, lightweight |

---

### 4.3 Technical Approach

| Tool | Architecture | Key Technical Choices |
|------|-------------|----------------------|
| **Claude Code** | TypeScript/Node | Hookify plugin system, Cowork sandbox |
| **OpenAI Codex** | Rust (alpha) | Effect-based HTTP API, analytics-first |
| **Gemini CLI** | TypeScript | AST-aware tooling, memory routing |
| **GitHub Copilot CLI** | TypeScript | ACP protocol, slash command engine |
| **Kimi Code CLI** | TypeScript | RalphFlow ephemeral context, soul-level commands |
| **OpenCode** | TypeScript | Effect framework, Shiki highlighting |
| **Qwen Code** | TypeScript | Parallel skill loading, event monitor throttling |
| **Pi** | TypeScript | Extension system, multi-provider abstraction |

---

## 5. Community Momentum and Maturity

### 5.1 Iteration Velocity

| Tier | Tools | Characteristics |
|------|-------|-----------------|
| **Rapid Iteration** | Qwen Code, Pi, Gemini CLI | 20-46 PRs/24h, frequent releases, aggressive feature shipping |
| **Steady Development** | Claude Code, OpenAI Codex, OpenCode | 10 PRs/24h, stable release cadence, polish-focused |
| **Low Activity** | GitHub Copilot CLI, Kimi Code CLI | 1-11 PRs/24h, feature backlog, stability-focused |

---

### 5.2 Community Engagement Quality

| Tool | Issue Response | PR Merge Rate | Community Health |
|------|---------------|---------------|------------------|
| **Claude Code** | High (79-comment issue, 103 👍 on billing) | Moderate | Mature, enterprise-focused |
| **OpenAI Codex** | High (65 👍 on thread deletion) | Moderate | Strong Azure enterprise voice |
| **Gemini CLI** | Moderate | High | Active internal refactoring |
| **GitHub Copilot CLI** | Low | Low | Feature backlog concern |
| **Kimi Code CLI** | Low | High | IDE integration focus |
| **OpenCode** | Moderate | High | Mobile and multi-model driven |
| **Qwen Code** | High | High | DeepSeek optimization driven |
| **Pi** | Moderate | High | Extension ecosystem growing |

---

### 5.3 Technical Debt Indicators

| Tool | Debt Signals |
|------|-------------|
| **Claude Code** | Silent tool dispatch stalls, context compression swallowing |
| **OpenAI Codex** | Dead API version handling, GPU animation overhead |
| **Gemini CLI** | Unsafe exec() in app.ts (critical fix merged) |
| **GitHub Copilot CLI** | Long-standing feature requests (thread deletion since 2024) |
| **Kimi Code CLI** | ACP session history not replayed, Zed integration gaps |
| **OpenCode** | Bun runtime panics, WSL1 binary execution errors |
| **Qwen Code** | DeepSeek reasoning_content regression (8+ related issues) |
| **Pi** | Self-update failures across npm/bun/system-wide |

---

## 6. Trend Signals

### 6.1 Industry Trends from Community Feedback

**1. Multi-Provider Flexibility is Table Stakes**
Pi's addition of Gloo AI and Cloudflare AI Gateway, Qwen Code's DeepSeek optimization, and OpenCode's Mistral Medium 3.5 support indicate users expect seamless multi-provider workflows. Tools lacking provider abstraction risk marginalization.

**2. Session Persistence is a Reliability Requirement**
All eight tools have active session management issues. The ecosystem recognizes that lost sessions, duplicate entries, and context corruption are critical reliability blockers. Expect unified session lifecycle APIs in 2026 H2.

**3. Tool Permission Granularity Prevents Adoption**
The binary allow/deny model is insufficient for enterprise adoption. Claude Code's HERMES.md billing misrouting, GitHub Copilot CLI's tool whitelist demand, and Pi's edit tool access failures all point to the same root cause: insufficient permission granularity.

**4. Background Task Support Enables New Workflows**
Gemini CLI's compact lifecycle hooks, Qwen Code's background shells, and Kimi Code's background task roadmap signal a shift from single-turn to persistent development agents. Tools without background task support will lag in automation scenarios.

**5. DeepSeek V4 Exposes Reasoning_content Handling Gaps**
Multiple tools (OpenCode, Qwen Code, Pi) have open issues around DeepSeek's reasoning_content parameter. This is a new failure mode specific to thinking-enabled models and requires tool-specific normalization logic.

**6. IDE Integration Depth Drives Adoption**
Claude Code's Cowork mode, Kimi Code's Zed/JetBrains ACP integration, and OpenAI Codex's IDE context support indicate that CLI tools are increasingly designed as IDE backends rather than standalone terminals.

**7. Cost Visibility Prevents User Churn**
Claude Code's $200 billing incident and OpenCode's 22-👍 usage tracking request demonstrate that billing transparency is a top user concern. Tools lacking real-time quota visibility will face retention challenges.

---

### 6.2 Recommendations for Developers

| Scenario | Recommended Tool | Rationale |
|----------|-----------------|-----------|
| **Enterprise with billing controls** | Claude Code | Mature billing visibility, organizational policies |
| **Azure enterprise users** | OpenAI Codex | Azure auth, analytics pipeline |
| **AST-aware precision workflows** | Gemini CLI | AST-aware file operations, memory routing |
| **ACP protocol ecosystem** | GitHub Copilot CLI | ACP leadership, slash command ecosystem |
| **IDE-centric multi-session** | Kimi Code CLI | Zed/JetBrains integration, RalphFlow architecture |
| **Mobile and multi-model flexibility** | OpenCode | Mobile optimization, Effect architecture |
| **DeepSeek-heavy workflows** | Qwen Code | DeepSeek V4 optimization, review pipeline |
| **Extension-driven customization** | Pi | Extension ecosystem, multi-provider flexibility |

---

### 6.3 Watch List for Technical Decision-Makers

1. **GitHub Copilot CLI's low PR activity** — 34 issues vs. 1 PR suggests potential resource constraints or strategic shift.
2. **DeepSeek reasoning_content normalization** — Multiple tools have open bugs; a unified approach would benefit the ecosystem.
3. **Session persistence reliability** — All tools affected; expect breaking changes in session file formats.
4. **Effect-based architecture adoption** — OpenAI Codex and OpenCode are both moving to Effect, signaling a functional programming trend.
5. **Background task lifecycle** — Multi-phase roadmaps in Gemini CLI, Qwen Code, and Kimi Code indicate convergence on persistent agent workflows.

---

*End of Report*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest

**Date:** 2026-04-30
**Source:** github.com/anthropics/claude-code

---

## 1. Today's Highlights

The v2.1.123 patch addresses a critical OAuth authentication bug that caused retry loops when experimental betas were disabled. The community continues to grapple with billing confusion—the HERMES.md commit message issue has been closed but exposed significant cost visibility gaps, with users requesting better quota information access directly in the CLI. Platform-specific issues remain prominent, particularly around macOS stability and Windows installation failures.

---

## 2. Releases

### v2.1.123
**OAuth Fix:** Resolved an authentication failure causing 401 retry loops when `CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS=1` is set. Users with experimental features disabled can now authenticate properly.

---

## 3. Hot Issues

| # | Issue | Comments | 👍 | Why It Matters |
|---|-------|----------|----|----------------|
| [#13480](https://github.com/anthropics/claude-code/issues/13480) | **Oversized image breaks conversation permanently** | 79 | 78 | Critical data loss bug—users must start new chats after sending oversized images. No recovery mechanism exists. |
| [#53262](https://github.com/anthropics/claude-code/issues/53262) | **HERMES.md causes billing misrouting** | 64 | 103 | Silent cost leak: commit messages containing "HERMES.md" routed requests to expensive "extra usage" instead of plan quota. User lost $200. **Now closed.** |
| [#36151](https://github.com/anthropics/claude-code/issues/36151) | **Multi-account switching in Claude Mobile** | 50 | 162 | High-demand feature for users managing personal/work accounts without shared email requirements. |
| [#13585](https://github.com/anthropics/claude-code/issues/13585) | **Add Quota Information Access to CLI** | 12 | 67 | Directly addresses the billing visibility gap exposed by #53262. Users want `claude quota` or similar command. |
| [#50466](https://github.com/anthropics/claude-code/issues/50466) | **SIGILL crash on Ivy Bridge Intel Macs** | 12 | 2 | Regression in 2.1.113 broke older Intel hardware without AVX2. **Now closed.** |
| [#48806](https://github.com/anthropics/claude-code/issues/48806) | **Chrome control failures in Cowork Mode** | 11 | 2 | macOS-specific Cowork integration issue affecting Chrome-based workflows. |
| [#51649](https://github.com/anthropics/claude-code/issues/51649) | **Desktop webview hangs on session switch** | 10 | 0 | Session switching triggers blank screens and auto-restarts on macOS with concurrent MCP operations. |
| [#49917](https://github.com/anthropics/claude-code/issues/49917) | **Windows installer AddPackage failure** | 10 | 0 | MSIX installation leaves packages in inconsistent state, blocking clean reinstalls. |
| [#54847](https://github.com/anthropics/claude-code/issues/54847) | **Tool dispatch stalls in 2.1.121–2.1.123** | 3 | 0 | Silent failures: `tool_use` emitted but no `tool_result`, no disk changes, no errors. Intermittent but blocking. |
| [#54856](https://github.com/anthropics/claude-code/issues/54856) | **Path-pattern scanner false positives on macOS** | 2 | 0 | Security scanner incorrectly flags paths with periods in usernames; "always allow" persistence broken for Bash/Write tools. |

---

## 4. Key PR Progress

| # | PR | Author | Summary |
|---|-----|--------|---------|
| [#54777](https://github.com/anthropics/claude-code/pull/54777) | **export-session plugin** | @amrita154 | Adds session export to md/json/txt/docx/pdf formats with `--last N` selective export. Reads transcript JSONL directly—zero extra model tokens. |
| [#54749](https://github.com/anthropics/claude-code/pull/54749) | **Global hookify rules** | @watarus | Extends `hookify` to load rules from `~/.claude/hookify.*.local.md` in addition to project-local rules. Project rules override global ones. |
| [#54551](https://github.com/anthropics/claude-code/pull/54551) | **Inline image rendering proposal** | @xodn348 | Feature proposal for rendering images inline in the TUI, addressing a gap vs. web interface. |
| [#54531](https://github.com/anthropics/claude-code/pull/54531) | **Security fix: auth script vulnerability** | @orbisai0security | Fixes HIGH severity vulnerability in `scripts/backfill-duplicate-comments.ts`. |
| [#54796](https://github.com/anthropics/claude-code/pull/54796) | **--resume with session names** | @jciafardini-lv | Allows `claude --resume <name>` as alternative to UUID, using names set via `/rename`. |
| [#54859](https://github.com/anthropics/claude-code/issues/54859) | **Cowork scheduled task storage config** | @aleozlx | Feature request to make Cowork's scheduled task storage location configurable (currently hardcoded to `~/Documents/Claude/Scheduled/`). |
| [#20448](https://github.com/anthropics/claude-code/pull/20448) | **web4-governance plugin** | @dp-web4 | Adds AI governance plugin with R6 workflow, trust tensors, and audit trails. |
| [#54741](https://github.com/anthropics/claude-code/pull/54741) | **README clarity update** | @Banaxi-Tech | Clarifies that running `claude` opens Claude Code, reducing first-time user confusion. |
| [#54849](https://github.com/anthropics/claude-code/issues/54849) | **Project-scoped skill metadata filtering** | @luigileap | Reduces session startup overhead by filtering skill catalogue to project-relevant entries (~31KB savings observed). **Now closed.** |
| [#52666](https://github.com/anthropics/claude-code/pull/52666) | **README brand casing fix** | @YspritanHyzygy | Corrects "Github" → "GitHub" and "MacOS" → "macOS" in documentation. |

---

## 5. Feature Request Trends

Analysis of open issues reveals these dominant feature directions:

1. **Cost Visibility & Control** — Users strongly request quota information in CLI (#13585), better billing transparency, and cost controls. The HERMES.md incident amplified demand.

2. **Session Management Enhancements** — Resume by session name (#54796), `/rename` fixes (#54851), and session switching stability (#51649) are recurring themes.

3. **Platform Reliability** — macOS stability (webview hangs, tool dispatch stalls, Cowork failures) and Windows installer issues (#49917) represent significant friction.

4. **MCP & Tooling Improvements** — Tool dispatch reliability (#54847), MCP server concurrency issues (#51649), and Edit tool escape sequence handling (#52813) indicate tooling rough edges.

5. **Cowork Mode Features** — Configurable storage locations (#54859), Chrome integration fixes (#48806), and session mounting improvements (#54744) show growing Cowork adoption.

6. **Security & Permissions** — Path-pattern scanner false positives (#54856) and permission persistence issues need refinement.

---

## 6. Developer Pain Points

- **Silent Failures:** Tool dispatch stalls (#54847) and response swallowing (#54411) leave developers with no error feedback, making debugging difficult.
- **Billing Surprises:** The HERMES.md incident demonstrates how subtle string matching can cause unexpected costs. Users lack real-time visibility into quota consumption.
- **Platform Inconsistencies:** macOS and Windows users experience different bugs and severity levels, suggesting platform-specific testing gaps.
- **Context Management:** Oversized images breaking conversations (#13480) and context compression swallowing responses (#54411) threaten work continuity.
- **Installation Friction:** Windows MSIX installer failures (#49917) and macOS regression crashes (#50466) block initial adoption.
- **Skill Metadata Overhead:** 122 skill entries (~31KB) injected at session start (#54849) represents unnecessary token consumption for most projects.

---

*End of digest. Data collected 2026-04-30.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest

**Date:** 2026-04-30
**Source:** github.com/openai/codex

---

## 1. Today's Highlights

The Codex team shipped five consecutive alpha releases (v0.126.0-alpha.13 through v0.126.0-alpha.17) in the Rust codebase, indicating active development on the next major iteration. On the community side, macOS startup failures related to `workspace_dependencies` have emerged as the most pressing issue with 20 comments, while a significant PR stack introducing comprehensive tool analytics is progressing through review.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.126.0-alpha.17` | Alpha | Latest in series |
| `rust-v0.126.0-alpha.16` | Alpha | — |
| `rust-v0.126.0-alpha.15` | Alpha | — |
| `rust-v0.126.0-alpha.14` | Alpha | — |
| `rust-v0.126.0-alpha.13` | Alpha | — |

Five alpha releases within 24 hours suggest intensive internal testing. No changelogs were provided; users tracking Rust SDK changes should monitor the repository for commit-level details.

---

## 3. Hot Issues

| # | Title | Comments | 👍 | Why It Matters |
|---|-------|----------|----|----------------|
| [#19220](https://github.com/openai/codex/issues/19220) | macOS startup failure: unsupported feature `workspace_dependencies` | 20 | 2 | Blocks entire app launch on Darwin 25.4.0; affects Pro subscribers after recent update |
| [#16857](https://github.com/openai/codex/issues/16857) | High GPU usage from tiny useless animation | 19 | 21 | Performance regression impacting battery life; 21 👍 indicates broad user pain |
| [#13699](https://github.com/openai/codex/issues/13699) | Windows crash with WSL config location | 17 | 9 | Breaks Codex on Windows when WSL is configured; Enterprise users affected |
| [#17318](https://github.com/openai/codex/issues/17318) | Can't change model and reasoning efforts | 14 | 22 | Core UX limitation; 22 👍 shows demand for model switching flexibility |
| [#8732](https://github.com/openai/codex/issues/8732) | Azure DefaultAzureCredential auth support | 13 | 18 | Security/compliance blocker for enterprise Azure deployments |
| [#13018](https://github.com/openai/codex/issues/13018) | Allow delete threads in Codex app | 11 | 65 | Highest 👍 count; users frustrated by forced archiving over deletion |
| [#10969](https://github.com/openai/codex/issues/10969) | Commit message autofill ignores configured format | 9 | 12 | Breaks team commit conventions; generates subject-only commits |
| [#18299](https://github.com/openai/codex/issues/18299) | Display dot files and folders | 9 | 13 | Essential for viewing `.agents`/`.codex` configs; 13 👍 indicates common need |
| [#20161](https://github.com/openai/codex/issues/20161) | Phone number required on SSO login | 9 | 3 | Authentication friction; blocks users without phone-linked accounts |
| [#18507](https://github.com/openai/codex/issues/18507) | macOS CLI microphone permission without entitlement | 9 | 4 | Computer Use helper fails with Apple event error -10000 |

---

## 4. Key PR Progress

| # | Title | Status | Significance |
|---|-------|--------|--------------|
| [#20294](https://github.com/openai/codex/pull/20294) | Add /ide context support to the TUI | OPEN | Brings IDE live context (current file, open tabs, selections) to terminal users |
| [#20299](https://github.com/openai/codex/pull/20299) | Helper to map item event to ServerNotifications | OPEN | Refactors event mapping into reusable `codex-app-server-protocol::event_mapping` |
| [#20291](https://github.com/openai/codex/pull/20291) | Remove dead API version handling | CLOSED | Cleanup of legacy `ApiVersion::V1` code |
| [#18748](https://github.com/openai/codex/pull/18748) | Emit terminal tool review events | OPEN | Analytics stack: emits review events from terminal tool usage |
| [#18747](https://github.com/openai/codex/pull/18747) | Add tool review event schema | OPEN | Defines typed payloads for tool review analytics |
| [#17090](https://github.com/openai/codex/pull/17090) | Emit tool item events from item lifecycle | OPEN | Centralizes analytics emission in app-server reducer |
| [#17089](https://github.com/openai/codex/pull/17089) | Add tool item event schemas | OPEN | Schema definitions for tool lifecycle events |
| [#20239](https://github.com/openai/codex/pull/20239) | Add protocol-native item timestamps | OPEN | Adds `started_at_ms`, `completed_at_ms`, `duration_ms` for precise timing |
| [#20300](https://github.com/openai/codex/pull/20300) | Centralize thread analytics state | OPEN | Consolidates connection IDs and thread metadata in shared maps |
| [#20069](https://github.com/openai/codex/pull/20069) | Bypass review for always-allow MCP tools | OPEN | Respects `approve` mode for MCP tools in auto-review guardian mode |
| [#20275](https://github.com/openai/codex/pull/20275) | Show correct Bedrock runtime endpoint in /status | OPEN | Fixes misleading endpoint display for AWS Bedrock sessions |
| [#20278](https://github.com/openai/codex/pull/20278) | Add workspace plugin sharing APIs | OPEN | Implements v2 plugin/share RPCs with size limits and upload flow |
| [#20298](https://github.com/openai/codex/pull/20298) | Surface admin-disabled remote plugin status | OPEN | Propagates `PluginAvailabilityStatus` and rejects installs for disabled plugins |
| [#19905](https://github.com/openai/codex/pull/19905) | Add compact lifecycle hooks | OPEN | Introduces `PreCompact` and `PostCompact` hooks for context compaction events |
| [#20293](https://github.com/openai/codex/pull/20293) | Support library tool and file upload | OPEN | External contribution for library tool and file upload capabilities |

---

## 5. Feature Request Trends

Analysis of open issues reveals these dominant themes:

1. **Thread Management** — Users strongly want to *delete* threads, not just archive them (#13018, 65 👍). This is the highest-voted feature request.

2. **Model Flexibility** — Ability to switch models and adjust reasoning effort mid-session (#17318, 22 👍) is a frequent ask.

3. **File Visibility** — Display of dotfiles (`.agents`, `.codex`, etc.) in the file viewer (#18299, 13 👍) is needed for configuration management.

4. **Azure Enterprise Auth** — Support for `DefaultAzureCredential` (#8732, 18 👍) is critical for security-compliant Azure deployments.

5. **Approval Granularity** — Separate read vs. write approval policies (#3710, 22 👍) would improve security workflows.

6. **Message Editing** — In-place editing of conversation messages (#11086, 37 👍) is requested to match competitor UX.

7. **Project-Local Skills Config** — Filtering skills per-project (#20210) addresses team-specific workflow needs.

---

## 6. Developer Pain Points

| Category | Issue Count | Top Examples |
|----------|-------------|--------------|
| **Platform Crashes** | High | macOS startup (#19220), Windows/WSL (#13699), Desktop not opening (#19659) |
| **Performance** | High | GPU drain from animations (#16857), XTerm crashes (#20226), context window too small (#20272) |
| **Auth Friction** | Moderate | Phone number prompts (#20161), usage limits not decreasing (#20238) |
| **Tool Execution** | Moderate | Codex replies but doesn't execute (#20205), image generation saves opaque PNGs (#18905) |
| **Git Integration** | Moderate | Commit message format ignored (#10969), code review prompts useless (#13561) |
| **TUI/CLI Issues** | Moderate | Ctrl+D exits Codex instead of side chat (#20264), Windows TUI missing backgrounds (#8852) |

**Recurring themes:**
- **Stability on Windows/WSL** — Multiple crash reports across Windows environments
- **Resource consumption** — Unnecessary GPU/CPU usage during idle "thinking" states
- **Authentication edge cases** — Phone requirements, SSO flows, API key management
- **Tool execution reliability** — Commands not executing, WebSocket failures with non-ASCII paths

---

*End of digest. Data collected 2026-04-30.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest

**Date:** 2026-04-30
**Repository:** [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 1. Today's Highlights

The Gemini CLI team released **v0.42.0-nightly.20260429** with critical policy improvements for error handling and new metric analysis capabilities. Security remains a priority with a critical fix removing unsafe `exec()` calls, while multiple UI/UX improvements address terminal rendering issues in tmux and SSH environments. The community is actively discussing AST-aware tooling and subagent behavior refinements.

---

## 2. Releases

### v0.42.0-nightly.20260429.g6d9911393
- **Policy Fix:** Transient errors no longer marked as terminal, improving error recovery ([#26066](https://github.com/google-gemini/gemini-cli/pull/26066))
- **New Bot:** Time-series metric analysis bot deployed to suggest repository management improvements

---

## 3. Hot Issues

| # | Issue | Summary | Comments | 👍 | Why It Matters |
|---|-------|---------|----------|----|----------------|
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | AST-aware file operations | Epic tracking value of AST-aware file reads, search, and codebase mapping to reduce token noise and misaligned reads | 5 | 1 | Could significantly improve agent precision and reduce API costs |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent MAX_TURNS recovery | Subagents report GOAL success even when hitting max turn limit without analysis | 4 | 2 | Masks task failures, leading to incomplete investigations |
| [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) | Repeated permission prompts | CLI keeps asking for file permissions despite "allow for all future sessions" | 3 | 0 | UX friction; users blocked from productive work |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | Component-level evaluations | Epic for robust eval framework across 76 behavioral tests for 6 supported models | 3 | 0 | Critical for regression prevention and quality assurance |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command hangs | Execution stuck with "Waiting input" after simple commands complete | 2 | 3 | Blocks workflow automation; high user impact |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | Temp scripts in random locations | Model creates edit scripts across various directories when shell restricted | 2 | 0 | Creates cleanup overhead; clutters workspaces |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent ignores settings.json | maxTurns and other overrides completely ignored | 2 | 0 | Configuration system broken for browser agent |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | 400 error with >128 tools | Agent fails when >400 tools available; needs smarter scoping | 1 | 0 | Scalability limitation for large codebases |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) | Memory routing: global vs. project | Need to route memory saves to correct scope (user-wide vs. project-specific) | 1 | 2 | Foundation for persistent, context-aware memory |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | Discourage destructive behavior | Agent occasionally uses `git reset --force` when safer alternatives exist | 1 | 1 | Safety concern for production environments |

---

## 4. Key PR Progress

| # | PR | Status | Summary | Impact |
|---|-----|--------|---------|--------|
| [#26169](https://github.com/google-gemini/gemini-cli/pull/26169) | Remove unsafe exec() in app.ts | **OPEN** | Fixes CRITICAL security vulnerability in a2a-server | Security-critical |
| [#26241](https://github.com/google-gemini/gemini-cli/pull/26241) | Fix tmux scroll issue | **OPEN** | Resolves scroll buffer using only top 20% of screen in tmux | UX improvement |
| [#26238](https://github.com/google-gemini/gemini-cli/pull/26238) | Fix topic marker leakage | **OPEN** | Prevents `[active topic]` text appearing in CLI output | Output quality |
| [#26240](https://github.com/google-gemini/gemini-cli/pull/26240) | Metrics Integrity & Standardized Reporting | **OPEN** | Improves repository health tracking accuracy | DevOps |
| [#26149](https://github.com/google-gemini/gemini-cli/pull/26149) | Runtime identity sidecar | **OPEN** | Exposes `(pid, sessionId, workDir)` via `runtime.json` for external tools | Integration |
| [#26073](https://github.com/google-gemini/gemini-cli/pull/26073) | Generalist profile fixes | **OPEN** | Addresses remaining issues with generalist agent profile | Agent quality |
| [#18499](https://github.com/google-gemini/gemini-cli/pull/18499) | Voice input with pluggable backend | **OPEN** | Adds voice input supporting Gemini (zero-install) and Whisper | Accessibility |
| [#26220](https://github.com/google-gemini/gemini-cli/pull/26220) | Discourage unprompted git add . | **OPEN** | Updates prompts to selectively stage task-specific files only | Safety |
| [#26222](https://github.com/google-gemini/gemini-cli/pull/26222) | Delegate prompt processing to GeminiClient | **CLOSED** | Establishes parity with core terminal features (compression, masking, limits) | Architecture |
| [#26230](https://github.com/google-gemini/gemini-cli/pull/26230) | Prevent exit_plan_mode via shell | **CLOSED** | Fixes hallucination where agent treats exit_plan_mode as CLI command | Agent reliability |

---

## 5. Feature Request Trends

Analysis of 50 recent issues reveals these dominant feature directions:

1. **Agent Intelligence & Memory**
   - AST-aware file operations for precise code navigation
   - Global vs. project memory routing
   - Proactive memory write guidance in system prompts

2. **Subagent Coordination**
   - Awareness of approval modes (Plan Mode, Auto-Edit Mode)
   - Robust recovery after MAX_TURNS
   - Behavioral evaluations for subagent tool call rejections

3. **Terminal & UI Improvements**
   - SSH session text rendering fixes
   - Scroll stability for long conversations
   - Parallel tool call layout clarification
   - Table streaming rendering for accessibility

4. **Security & Safety**
   - Discouraging destructive git operations
   - Browser agent resilience (session takeover, lock recovery)
   - Proxy URL handling for enterprise environments

5. **Developer Experience**
   - Voice input integration
   - Runtime identity for external observability
   - Automated Gemma setup documentation

---

## 6. Developer Pain Points

| Pain Point | Frequency | Examples | Impact |
|------------|-----------|----------|--------|
| **Permission prompts loop** | High | #24916 | Blocks workflow; repeated user intervention |
| **Shell command hangs** | High | #25166 | Automation scripts fail; productivity loss |
| **SSH text scrambling** | Medium | #24202 | Windows-to-Linux sessions unusable |
| **Tmp script sprawl** | Medium | #23571 | Workspace clutter; cleanup overhead |
| **Browser agent config ignored** | Medium | #22267 | Settings system broken for key feature |
| **Scroll buffer issues** | Medium | #24470, #26241 | Poor UX in tmux and long chats |
| **Tool limit errors** | Low-Medium | #24246 | Blocks large codebase usage |

---

*Generated: 2026-04-30*
*Data source: github.com/google-gemini/gemini-cli*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# Kimi Code CLI Community Digest

**Date:** 2026-04-30
**Source:** github.com/MoonshotAI/kimi-cli

---

## 1. Today's Highlights

The Kimi Code CLI community shows strong activity around IDE integration and session management. Key developments include a new RalphFlow architecture for preventing infinite loops, enhanced clipboard support for headless Linux environments, and multiple PRs addressing ACP (Agent Communication Protocol) integration issues. The community is actively requesting granular security controls for tool execution and better multi-session support across IDEs.

---

## 2. Releases

**No new releases in the last 24 hours.**

---

## 3. Hot Issues

### Issue #1956 — ACP Integration: Session History Not Replayed
**Link:** https://github.com/MoonshotAI/kimi-cli/issues/1956
**Author:** @victorhqc | **Updated:** 2026-04-29 | **Comments:** 1

When using kimi-cli as an ACP agent with Zed or JetBrains IDEs, loading or switching sessions does not replay conversation history to the client. All ACP-based integrations start with a blank context, even when older session history exists. This is a significant blocker for IDE integration workflows.

---

### Issue #1745 — Plan Mode Can't Write File in Zed ACP
**Link:** https://github.com/MoonshotAI/kimi-cli/issues/1745
**Author:** @lihsai0 | **Updated:** 2026-04-29 | **Comments:** 1 | **👍:** 1

Users report that Plan mode fails to write files when using the Zed ACP integration. This bug affects the core planning workflow for users of the Zed editor, limiting the CLI's utility in that environment.

---

### Issue #2120 — Tool Call Safety Configuration/Parameters
**Link:** https://github.com/MoonshotAI/kimi-cli/issues/2120
**Author:** @iaindooley | **Updated:** 2026-04-29

A highly requested enhancement to configure which bash commands are allowed/disallowed and restrict file read/write operations to specific directories. Currently, users must choose between an "afk/yolo" mode (allows everything) or manual approval for every action.

---

### Issue #2119 — VSCode Plugin Multiple Active Sessions
**Link:** https://github.com/MoonshotAI/kimi-cli/issues/2119
**Author:** @thsun6 | **Updated:** 2026-04-29

Feature request to support multiple concurrent chat sessions in the VSCode plugin, similar to Cursor. This would allow developers to work on multiple unrelated tasks simultaneously within the same project.

---

### Issue #2118 — Performance Issues: "Why So Stuck Today?"
**Link:** https://github.com/MoonshotAI/kimi-cli/issues/2118
**Author:** @1260924056 | **Updated:** 2026-04-29

User reports severe performance degradation preventing conversation. This may indicate service-side issues affecting user experience.

---

### Issue #2116 — Expose Runtime Identity (PID + Session ID)
**Link:** https://github.com/MoonshotAI/kimi-cli/issues/2116
**Author:** @yeelam-gordon | **Updated:** 2026-04-29

Third-party IDE plugins and agent session-management tools cannot determine whether a Kimi session is currently served by a running `kimi-cli` process. This information gap prevents proper session lifecycle management.

---

## 4. Key PR Progress

### PR #1960 — RalphFlow Architecture with Ephemeral Context
**Link:** https://github.com/MoonshotAI/kimi-cli/pull/1960
**Author:** @ORDL-AMF | **Status:** OPEN

Introduces an automated iteration framework that prevents infinite loops while enabling robust multi-step workflows. Key innovation: flow iterations run in isolated temporary context files while the main context remains intact.

---

### PR #2115 — Enable Clipboard Paste on Headless Linux over SSH
**Link:** https://github.com/MoonshotAI/kimi-cli/pull/2115
**Author:** @ZichenWen1 | **Status:** OPEN

Fixes clipboard functionality on headless Linux machines accessed via SSH where `DISPLAY` environment variable is unavailable. Resolves `pyperclip.paste()` initialization failures.

---

### PR #2082 — Expose Runtime Identity (PID + Session ID)
**Link:** https://github.com/MoonshotAI/kimi-cli/pull/2082
**Author:** @yeelam-gordon | **Status:** OPEN

Resolves Issue #2116 by exposing `(session_id → live PID?)` mapping to external observers, enabling proper session lifecycle management for third-party tools.

---

### PR #2083 — Dynamic Terminal Title with CWD + Session Topic
**Link:** https://github.com/MoonshotAI/kimi-cli/pull/2083
**Author:** @yeelam-gordon | **Status:** OPEN

Fixes regression from v1.15.0 (Issue #1475). Sets dynamic terminal titles showing both current working directory and session topic, disambiguating tabs when the same project has multiple concurrent sessions.

---

### PR #2114 — Granular Auto-Approval Rules
**Link:** https://github.com/MoonshotAI/kimi-cli/pull/2114
**Author:** @suJayhh | **Status:** OPEN

Adds fine-grained auto-approval configuration rules to `config.toml`, allowing users to define approval policies for specific command types or directories without approving each action individually.

---

### PR #2097 — /reload-skills Command
**Link:** https://github.com/MoonshotAI/kimi-cli/pull/2097
**Author:** @cyliu0 | **Status:** OPEN

Adds a new soul-level slash command that rescans skill directories and rebuilds the slash command registry without requiring session restart, improving developer workflow iteration speed.

---

### PR #2113 — Wrap Shell Command in `bash -c` for Terminal/Create
**Link:** https://github.com/MoonshotAI/kimi-cli/pull/2113
**Author:** @kevintruong | **Status:** OPEN

Fixes ACP terminal integration by wrapping shell commands in `bash -c` when forwarding to clients that advertise terminal capability, ensuring proper shell execution context.

---

### PR #2112 — MCP Schema Exposure Guardrails
**Link:** https://github.com/MoonshotAI/kimi-cli/pull/2112
**Author:** @Sisyphbaous-DT-Project | **Status:** OPEN

Adds guardrails preventing large MCP tool lists from causing initial chat request failures. MCP servers exposing many tools or large input schemas are now handled gracefully.

---

### PR #2095 — Auto Approval with Config Granularity (CLOSED)
**Link:** https://github.com/MoonshotAI/kimi-cli/pull/2095
**Author:** @suJayhh | **Status:** CLOSED

Closed PR for auto-approval configuration features. This appears to be superseded by PR #2114 which implements similar functionality.

---

### PR #2080 — Show Diff Content in Web ToolInput
**Link:** https://github.com/MoonshotAI/kimi-cli/pull/2080
**Author:** @21paradox | **Status:** OPEN

Fixes web interface to display diff content instead of raw JSON strings for new/old values, improving developer readability of changes.

---

## 5. Feature Request Trends

Analysis of recent issues reveals the following dominant feature directions:

| Trend | Description | Frequency |
|-------|-------------|-----------|
| **Multi-Session Support** | Concurrent active sessions in IDE plugins | High |
| **Granular Security Controls** | Configurable tool/command allowlists and restrictions | High |
| **IDE Integration Improvements** | Better ACP support for Zed, VSCode, JetBrains | High |
| **Session Management** | Runtime identity exposure, session history persistence | Medium |
| **Dynamic Configuration** | Runtime skill reloading, configurable approval rules | Medium |

---

## 6. Developer Pain Points

1. **ACP Session History Loss** — IDE integrations (Zed, JetBrains) cannot access or replay previous conversation context, forcing users to repeat information.

2. **Binary Security Choice** — Current tool execution requires either unrestricted access or per-action approval, with no middle ground for trusted workflows.

3. **Headless Environment Limitations** — Clipboard and other GUI-dependent features fail on remote Linux servers accessed via SSH.

4. **Session State Visibility** — External tools cannot determine if a session is actively running, complicating multi-tool orchestration.

5. **Skill Discovery Without Restart** — Adding new skills requires session restart, slowing development iteration.

6. **MCP Tool List Scalability** — Large MCP tool collections cause request failures due to schema size.

---

*End of Digest*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest

**Date:** 2026-04-30
**Source:** github.com/anomalyco/opencode

---

## 1. Today's Highlights

The v1.14.30 release addresses critical path mismatch issues affecting Desktop session recovery and fixes Azure reasoning item ordering errors. The community is actively working on DeepSeek reasoning_content handling across multiple fronts, with several related issues and PRs converging on a solution. A major refactoring effort is underway to convert the HTTP API backend to Effect, with new tests and authorization middleware being added.

---

## 2. Releases

### v1.14.30
**Released:** 2026-04-30

| Component | Change |
|-----------|--------|
| **Core** | Fixed missing sessions in Desktop caused by path mismatches, including recovery for existing stored data |
| **Core** | Fixed Azure Responses defaults to avoid reasoning item ordering errors |
| **Core** | Improved DeepSeek compatibility with providers that vary model naming |
| **Core** | Added Mistral Medium 3.5 with reasoning support |

---

## 3. Hot Issues

### 1. GPT 5.4 Azure Reasoning Error [CLOSED]
**#20698** | 40 comments | Author: @DanielusG

Azure-hosted GPT 5.4 xhigh fails after 1-2 tool calls with `"Item ... of type 'reasoning' was provided without its required following item."` This critical bug affected both web UI and TUI, making the combination unusable. The issue is now closed, likely addressed in v1.14.30.

🔗 https://github.com/anomalyco/opencode/issues/20698

---

### 2. Provider Returned Error - Kimi
**#21010** | 15 comments | Author: @avinashkanaujiya

Users report consistent "Provider returned error" messages for Kimi since upgrading to 1.3.13. The issue appears load-related and started recently, affecting reliability.

🔗 https://github.com/anomalyco/opencode/issues/21010

---

### 3. Slow Startup in TUI
**#14965** | 14 comments | 👍 9 | Author: @nickkadutskyi

OpenCode takes significantly longer to start in Ghostty terminal compared to Terminal, Alacritty, or Kitty. First reported in v1.2.1, this performance regression impacts daily workflow.

🔗 https://github.com/anomalyco/opencode/issues/14965

---

### 4. Split external_directory Permission
**#5395** | 14 comments | 👍 11 | Author: @charles-cooper

Feature request to separate `external_directory` into read vs. write permissions. Currently, the single permission controls all file operations, preventing use cases where reading external files is desired without allowing writes.

🔗 https://github.com/anomalyco/opencode/issues/5395

---

### 5. WSL1 Binary Execution Error
**#24081** | 11 comments | Author: @lengran

OpenCode 1.14.21 and 1.14.22 fail to execute in WSL1 with "Exec format error." Users are stuck on 1.14.20, indicating a compatibility regression for WSL1 environments.

🔗 https://github.com/anomalyco/opencode/issues/24081

---

### 6. Stale Context / Repeating Previous Turn
**#16612** | 11 comments | 👍 7 | Author: @leo512zy

OpenCode sometimes responds to the previous user message instead of the latest input, getting "stuck" in a loop. Re-sending the command often recovers, but the issue indicates context management problems.

🔗 https://github.com/anomalyco/opencode/issues/16612

---

### 7. Native Multimodal Context Support [CLOSED]
**#10531** | 11 comments | 👍 10 | Author: @AimAmit

Feature request for native video/audio multimodal support. The discussion suggests users want OpenCode to handle non-text content natively, similar to Cursor's capabilities.

🔗 https://github.com/anomalyco/opencode/issues/10531

---

### 8. Session List Missing in TUI Mode
**#20238** | 10 comments | Author: @JohnYehyo

The `/session` command in TUI displays only 4 sessions while `opencode session list` shows the complete list. This discrepancy makes session management difficult in the terminal interface.

🔗 https://github.com/anomalyco/opencode/issues/20238

---

### 9. DeepSeek reasoning_content Not Passed Back [CLOSED]
**#24261** | 10 comments | Author: @tomtimlt

DeepSeek models with thinking mode enabled fail in multi-turn conversations because `reasoning_content` isn't passed back in subsequent requests, causing API errors.

🔗 https://github.com/anomalyco/opencode/issues/24261

---

### 10. Unified Usage Tracking via /usage
**#9281** | 9 comments | 👍 22 | Author: @CasualDeveloper

High-demand feature to view remaining plan usage/limits for authenticated providers (Codex, Copilot, Claude) directly in the TUI. Currently no way to check usage limits without external tools.

🔗 https://github.com/anomalyco/opencode/issues/9281

---

## 4. Key PR Progress

### 1. HTTP API Test Port to Effect
**#25036** | Author: @kitlangton

Ports the first HttpApi test instance to the idiomatic Effect testing pattern using `NodeHttpServer.layerTest` and `HttpRouter.serve`.

🔗 https://github.com/anomalyco/opencode/pull/25036

---

### 2. Effect Config for HttpApi Authorization
**#25035** | Author: @kitlangton

Adds a reusable `ConfigService.Service` helper that converts Effect `Config` definitions into typed Context services with generated default layers.

🔗 https://github.com/anomalyco/opencode/pull/25035

---

### 3. Windows Child Process Exit Fix
**#24783** | Author: @bingkxu

Fixes Windows child process hang when grandchild processes inherit stdout/stderr pipe handles. Adds exit event fallback for proper cleanup of build tools like Gradle daemons.

🔗 https://github.com/anomalyco/opencode/pull/24783

---

### 4. HTTP API Backend Default On for Dev/Beta
**#25034** | Author: @kitlangton

Flips `Flag.OPENCODE_EXPERIMENTAL_HTTPAPI` to default-on for `dev`, `beta`, and `local` channels, enabling internal users to exercise the new Effect-httpapi server backend.

🔗 https://github.com/anomalyco/opencode/pull/25034

---

### 5. Home/End Key Fix for Prompt Input
**#25015** | Author: @euxaristia | **CLOSED**

Fixes Home/End keys to properly move caret to line edges in the contenteditable prompt input, addressing Chromium's unreliable default behavior with mixed content.

🔗 https://github.com/anomalyco/opencode/pull/25015

---

### 6. TUI Question Option Submission Fix
**#25016** | Author: @euxaristia | **CLOSED**

Prevents question option submission when dragging to select text in plan mode, allowing proper text copying instead of accidental option selection.

🔗 https://github.com/anomalyco/opencode/pull/25016

---

### 7. Mobile Touch Optimization
**#18767** | Author: @noahbentusi

New feature optimizing OpenCode App for mobile/touch devices while preserving desktop experience. Addresses growing demand for mobile AI coding assistance.

🔗 https://github.com/anomalyco/opencode/pull/18767

---

### 8. Stop Streaming After Message Completes
**#13854** | Author: @mocksoul

Fixes TUI streaming behavior where completed messages were incorrectly treated as potentially incomplete, causing the last table row to be skipped.

🔗 https://github.com/anomalyco/opencode/pull/13854

---

### 9. Apply Agent Variant When No Explicit Model
**#24962** | Author: @21pounder

Fixes model selection logic so agent variant is properly applied when no explicit model is configured, improving default behavior consistency.

🔗 https://github.com/anomalyco/opencode/pull/24962

---

### 10. Faster Cold Starts via Dynamic Import Splitting
**#25029** | Author: @antonok-edm

Refactors CLI cold starts by splitting dynamic imports, addressing slow startup due to large static import tree resolution.

🔗 https://github.com/anomalyco/opencode/pull/25029

---

## 5. Feature Request Trends

Analysis of open issues reveals these dominant feature directions:

| Trend | Description | Evidence |
|-------|-------------|----------|
| **Multimodal Support** | Native video/audio context handling | #10531 (11 👍) |
| **Usage Tracking** | In-app quota/limit visibility | #9281 (22 👍) |
| **Permission Granularity** | Read vs. write file permissions | #5395 (11 👍) |
| **Mobile Optimization** | Touch-friendly interface | #18767 (PR) |
| **Provider Diversity** | Support for Augment Code, Perplexity | #10216, #24976 (docs PR) |

---

## 6. Developer Pain Points

| Issue | Frequency | Impact |
|-------|-----------|--------|
| **DeepSeek reasoning_content handling** | Multiple related issues (#24261, #24722, #25000) | Breaks multi-turn conversations with thinking-enabled models |
| **Windows/WSL compatibility** | #24081, #24916, #24463, #24148 | Blocks users on specific Windows configurations |
| **Session management** | #20238, path mismatches in v1.14.30 | Lost sessions, incomplete lists |
| **TUI performance** | #14965, #24916 | Slow startup, crashes, screen artifacts |
| **Model context limits** | #24751 | Hard-coded values override user config |
| **Bun runtime panics** | #24148 | NAPI errors on macOS with embedded Bun |

---

*Generated: 2026-04-30 | Data reflects activity from the last 24 hours*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-30

## 1. Today's Highlights

The Qwen Code team shipped **v0.15.5** with critical fixes for DeepSeek reasoning_content handling and background shell integration, while the nightly build (v0.15.3-nightly.20260430) addresses memory and CLI display issues. Community activity remains high with 48 issues and 46 PRs updated in the last 24 hours, with the DeepSeek V4 thinking mode bug dominating attention—multiple PRs now comprehensively fix reasoning_content preservation across session resume, rewind, compression, and merge paths.

---

## 2. Releases

### v0.15.5 (Stable)
- **MCP config as CLI** — Model Context Protocol configuration now accessible via command-line interface ([#1279](https://github.com/QwenLM/qwen-code/pull/1279))
- **Static header refresh on model switch** — UI now properly updates when switching models ([#3667](https://github.com/QwenLM/qwen-code/pull/3667))
- **Background shells wired into task_stop** — Long-running shell processes can now be terminated via the task_stop tool ([PR #3687](https://github.com/QwenLM/qwen-code/pull/3687))

### v0.15.3-nightly.20260430.da2936336
- **Memory fix**: Project transcript path now correctly used for dream functionality ([#3722](https://github.com/QwenLM/qwen-code/pull/3722))
- **CLI display fix**: SubAgent display bounded by visual height to prevent flicker ([#3721](https://github.com/QwenLM/qwen-code/pull/3721))
- **Sticky todo panel**: Improved compact rendering with overflow summary

---

## 3. Hot Issues

| # | Issue | Status | Comments | Why It Matters |
|---|-------|--------|----------|----------------|
| [#3579](https://github.com/QwenLM/qwen-code/issues/3579) | DeepSeek API 400 error — reasoning_content in thinking mode | CLOSED | 11 | Root cause of widespread DeepSeek V4 failures; fix extended to all assistant turns in [#3747](https://github.com/QwenLM/qwen-code/pull/3747) |
| [#1002](https://github.com/QwenLM/qwen-code/issues/1002) | Connection problems / streaming timeouts | OPEN | 10 | Recurring reliability issue affecting production use; difficult to reproduce |
| [#3740](https://github.com/QwenLM/qwen-code/issues/3740) | Cannot configure non-Coding Plan models in settings.json | OPEN | 8 | Regression in v0.15.5; breaks external LLM configuration workflows |
| [#3652](https://github.com/QwenLM/qwen-code/issues/3652) | Input length validation error (Range [1, 983616]) | OPEN | 7 | Blocks long conversations; indicates context window handling issues |
| [#3307](https://github.com/QwenLM/qwen-code/issues/3307) | Alibaba Cloud Coding Plan "out of stock" | CLOSED | 6 | Affects paid users; highlights dependency on external billing system |
| [#1276](https://github.com/QwenLM/qwen-code/issues/1276) | Feature request: Standalone native binary (Node-free) | CLOSED | 4 | Highly requested for enterprise/CI environments; marks design direction |
| [#3724](https://github.com/QwenLM/qwen-code/issues/3724) | Root cause analysis of reasoning_content loss with fix | CLOSED | 3 | User-contributed patch identifies converter.ts as source of bug |
| [#3634](https://github.com/QwenLM/qwen-code/issues/3634) | Background task management roadmap | OPEN | 2 | Tracks multi-phase implementation of background agent features |
| [#3748](https://github.com/QwenLM/qwen-code/issues/3748) | Non-interactive mode prints API errors 3x with stack trace | OPEN | 1 | Poor error UX in CI/automation contexts; fix in [#3749](https://github.com/QwenLM/qwen-code/pull/3749) |
| [#3548](https://github.com/QwenLM/qwen-code/issues/3548) | Configurable plansDirectory for Plan Mode | OPEN | 1 | Feature parity with Claude Code/Gemini CLI; welcome PR tag indicates openness |

---

## 4. Key PR Progress

| PR | Title | Status | Significance |
|----|-------|--------|--------------|
| [#3747](https://github.com/QwenLM/qwen-code/pull/3747) | Replay DeepSeek reasoning_content on all assistant turns | CLOSED | Completes fix for [#3579](https://github.com/QwenLM/qwen-code/issues/3579); extends normalization beyond tool-calling turns |
| [#3737](https://github.com/QwenLM/qwen-code/pull/3737) | Preserve reasoning_content in rewind, compression, merge | OPEN | Fixes three remaining paths where reasoning_content was silently dropped |
| [#3684](https://github.com/QwenLM/qwen-code/pull/3684) | Event monitor tool with throttled stdout streaming (Phase C) | OPEN | New Monitor tool with token-bucket throttling for long-running commands |
| [#3604](https://github.com/QwenLM/qwen-code/pull/3604) | Parallelize skill loading + path-conditional activation | OPEN | Performance optimization: Promise.all replaces nested for-await loops |
| [#3680](https://github.com/QwenLM/qwen-code/pull/3680) | Expand TUI markdown rendering | OPEN | Adds Mermaid diagrams, math, task lists, blockquotes support |
| [#3754](https://github.com/QwenLM/qwen-code/pull/3754) | Expand review pipeline + qwen review CLI subcommands | OPEN | 9 parallel agents, iterative reverse audit, 6 new CLI helpers |
| [#3723](https://github.com/QwenLM/qwen-code/pull/3723) | Shared permission flow for tool execution unification | OPEN | Unifies L3→L4 permission decisions across Interactive, Non-Interactive, and ACP modes |
| [#3749](https://github.com/QwenLM/qwen-code/pull/3749) | Stop double-wrapping API errors in non-interactive mode | OPEN | Clean single-line error output for CI/automation |
| [#3717](https://github.com/QwenLM/qwen-code/pull/3717) | Add FileReadCache and short-circuit unchanged Reads | OPEN | Performance: avoids re-reading unchanged files in long sessions |
| [#3739](https://github.com/QwenLM/qwen-code/pull/3739) | Background agent resume and continuation | OPEN | Persisted resume support with transcript-first design |

---

## 5. Feature Request Trends

Analysis of open and recently closed issues reveals these dominant feature directions:

1. **External LLM Flexibility** — Users increasingly want to configure models beyond the Coding Plan whitelist ([#3740](https://github.com/QwenLM/qwen-code/issues/3740), [#985](https://github.com/QwenLM/qwen-code/issues/985)). The team is addressing model precedence in [#3645](https://github.com/QwenLM/qwen-code/pull/3645).

2. **Deployment & Portability** — Strong demand for standalone binaries without Node.js dependency ([#1276](https://github.com/QwenLM/qwen-code/issues/1276)), proxy configuration fixes ([#3753](https://github.com/QwenLM/qwen-code/pull/3753)), and CI-friendly error handling.

3. **Background & Long-Running Tasks** — Multi-phase roadmap for background task management ([#3634](https://github.com/QwenLM/qwen-code/issues/3634)) with Phase A/B/C implementations merging.

4. **Plan Mode Enhancements** — Requests for MCP tool access in Plan mode ([#740](https://github.com/QwenLM/qwen-code/issues/740)), configurable plansDirectory ([#3548](https://github.com/QwenLM/qwen-code/issues/3548)), and banner customization ([#3671](https://github.com/QwenLM/qwen-code/pull/3671)).

5. **Session & Context Management** — Chat session naming/saving ([#3190](https://github.com/QwenLM/qwen-code/pull/3190)), context optimization, and session resume reliability.

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact | Status |
|------------|-----------|--------|--------|
| **DeepSeek V4 reasoning_content 400 errors** | 8+ related issues | Critical — blocks thinking mode usage | Fixes merged ([#3747](https://github.com/QwenLM/qwen-code/pull/3747), [#3737](https://github.com/QwenLM/qwen-code/pull/3737)) |
| **Connection/streaming timeouts** | 4+ issues | High — reliability in production | Investigating ([#1002](https://github.com/QwenLM/qwen-code/issues/1002)) |
| **Session persistence failures** | 3+ issues | Medium — lost work | Fixes in progress |
| **Non-interactive mode error verbosity** | 1 issue | Medium — CI/CD friction | Fix ready ([#3749](https://github.com/QwenLM/qwen-code/pull/3749)) |
| **Terminal flicker/display issues** | 2 issues | Low-Medium — UX annoyance | Fixed in nightly ([#3721](https://github.com/QwenLM/qwen-code/pull/3721)) |

**Bottom line**: The team is actively resolving the DeepSeek reasoning_content regression that affected multiple users. The v0.15.5 release and accompanying PRs provide comprehensive coverage across session lifecycle operations. Users on v0.15.5 should monitor for the non-Coding Plan model configuration regression ([#3740](https://github.com/QwenLM/qwen-code/issues/3740)) and consider the nightly build for the latest fixes.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-04-30

## Today's Highlights

The pi community addressed critical stability issues this cycle, including multiple self-update failures across npm, bun, and system-wide installations. Notable progress on DeepSeek model support (xhigh reasoning effort for v4-flash) and a new Cloudflare AI Gateway provider draft signal expanding multi-provider flexibility. Session handling received attention with duplicate entry fixes, while the TUI gained focus-aware cursor rendering.

---

## Releases

No new releases published in the last 24 hours.

---

## Hot Issues

**1. [Bun startup crash when `bun pm bin -g` fails](https://github.com/badlogic/pi-mono/issues/3929) — 6 comments, 3 👍**
pi crashes on startup when Bun's global package.json is missing. This is a follow-up to #3809/#2544, indicating incomplete Bun integration. Blocks users on latest main.

**2. [Deepseek 4pro on fireworks provider broken](https://github.com/badlogic/pi-mono/issues/3984) — 6 comments**
Only deepseek-4-pro fails on Fireworks; other models work fine. The issue is isolated to pi's Fireworks integration vs. opencode behavior.

**3. [deepseek-v4-flash xhigh thinking level missing](https://github.com/badlogic/pi-mono/issues/3879) — 4 comments, 6 👍**
DeepSeek API supports `reasoning_effort: "max"` for flash models, but pi's `supportsXhigh()` only includes v4-pro. Community requests parity with official API capabilities.

**4. [pi update --self fails with npm --prefix](https://github.com/badlogic/pi-mono/issues/3942) — 4 comments**
Self-update introduced in v0.70.3 breaks for custom npm prefixes (common with nix). Impacts users with non-writable global paths.

**5. [Error with Mistral API (404)](https://github.com/badlogic/pi-mono/issues/3959) — 4 comments**
Users encounter 404 errors across mistral-large, small, and codestral models with multiple API keys. Suggests potential endpoint or model ID changes.

**6. [Fix stale tool-call XML recovery in AgentSession](https://github.com/badlogic/pi-mono/issues/3976) — 3 comments**
Models like DeepSeek-V4-Flash emit tool calls as XML text instead of structured calls. Auto-recovery queued to eliminate manual 'continue' typing.

**7. [displayName for providers from extensions](https://github.com/badlogic/pi-mono/issues/3956) — 3 comments**
Extension-registered providers show raw providerId instead of human-friendly names in `/login`. Built-in providers display correctly; extensions need parity.

**8. [pi config hardcodes `~/.pi/agent/` path](https://github.com/badlogic/pi-mono/issues/3978) — 3 comments**
Skills from `~/.agents/skills` incorrectly appear under "User (~/.pi/agent/)" in config output, ignoring actual resource locations.

**9. [Request: Mistral Medium 3.5 support](https://github.com/badlogic/pi-mono/issues/3989) — 3 comments**
New Mistral model announced; contributor ready with local testing. No direct SDK support yet, API lacks reasoning parameter specification.

**10. [Expose custom fetch hook in StreamOptions](https://github.com/badlogic/pi-mono/issues/3987) — 3 comments**
No current mechanism to swap HTTP client for proxy support. Request to thread optional `fetch` through OpenAI/Anthropic providers.

---

## Key PR Progress

**1. [fix(coding-agent): handle duplicate session entries](https://github.com/badlogic/pi-mono/pull/3991) — OPEN**
Tracks persisted record count on session reopen; skips duplicate IDs while building tree. Prevents repeated node chains in `/tree`.

**2. [fix(coding-agent): use alternate logic to find Bun's node_modules](https://github.com/badlogic/pi-mono/pull/3861) — CLOSED**
Resolves `bun root -g` failure when npmCommand is set to bun. Adds runtime detection to build correct paths.

**3. [fix(coding-agent): auto-recover stale tool-call text responses](https://github.com/badlogic/pi-mono/pull/3973) — CLOSED**
Detects XML-formatted tool calls (e.g., `<DSML>...</DSML>`) after agent_end, queues recovery follow-up, auto-continues session.

**4. [feat(coding-agent,tui): run slash commands from inline autocomplete](https://github.com/badlogic/pi-mono/pull/3915) — CLOSED**
Slash commands now execute mid-text via autocomplete + Enter. Non-destructive commands preserve remaining text.

**5. [fix(coding-agent): report edit access failures correctly](https://github.com/badlogic/pi-mono/pull/3955) — OPEN**
Rejects/returns errors based on error `code` instead of generic "File not found". Covers write-protected file scenarios.

**6. [refactor(coding-agent): migrate syntax highlighting to Shiki](https://github.com/badlogic/pi-mono/pull/3868) — OPEN**
Replaces terminal and HTML export highlighting with Shiki. Uses `shiki/core` with cached highlighters and lazy language loading.

**7. [feat(ai): expose routed model on openai-completions](https://github.com/badlogic/pi-mono/pull/3968) — CLOSED**
Surfaces `AssistantMessage.responseModel` when OpenRouter `auto` resolves to concrete model (e.g., `anthropic/...`).

**8. [fix(ai): honor Fireworks Anthropic tool compat](https://github.com/badlogic/pi-mono/pull/3678) — OPEN**
Fixes errors when using Fireworks API provider with any model. Addresses Anthropic tool compatibility layer.

**9. [Add Gloo AI as First-Class Provider](https://github.com/badlogic/pi-mono/pull/3986) — CLOSED**
New provider with OAuth2 `client_credentials` and 22-model catalog. Adds another inference platform option.

**10. [Draft: add Cloudflare AI Gateway provider](https://github.com/badlogic/pi-mono/pull/3951) — CLOSED (Draft)**
Introduces `cloudflare-ai-gateway` provider via Cloudflare's OpenAI-compatible `/compat` endpoint.

---

## Feature Request Trends

| Category | Requests |
|----------|----------|
| **Provider Expansion** | Gloo AI (merged), Cloudflare AI Gateway (draft), Xiaomi MiMo, Mistral Medium 3.5 |
| **Model Capability Parity** | DeepSeek xhigh reasoning, latest OpenRouter models, image content support |
| **Developer Experience** | Profile isolation (`--profile`/`PI_PROFILE`), slash command autocomplete, compact JSON logging |
| **Extensibility** | Custom fetch hooks for proxies, displayName for extension providers, cost override from extensions |
| **API Key Management** | `!!` syntax for uncached short-lived credentials |

---

## Developer Pain Points

**Self-Update Failures (High Frequency)**
Multiple installation methods break `pi update`: npm with custom prefix (#3942), system-wide npm (#3922), bun global installs (#3980). Community seeks unified detection logic.

**Bun Integration Gaps**
`bun pm bin -g` and `bun root -g` fail in various scenarios (#3929, #3861). Users with bun as primary runtime encounter startup crashes.

**Edit Tool Fragility**
Fails on escaped backticks (#3878), write-protected files (#3894), and doesn't report access errors correctly (#3955).

**Session Corruption**
Duplicate entry IDs cause `/tree` to hang (#3930). Sessions with malformed JSONL become unresponsive.

**Terminal Compatibility**
Alacritty registers backspace twice (#3974). Firefox users can't copy from pi.dev packages page (#3941). TUI cursor visibility issues on blur (#3969).

**Model Discovery Gaps**
Latest OpenRouter models (e.g., gpt-5.5) not recognized, forcing fallback to custom model IDs (#3931). DeepSeek pricing in codebase doesn't match official rates (#3910).

</details>

---
*This digest is auto-generated by [Radar Forge](https://github.com/borq168/radar-forge).*
