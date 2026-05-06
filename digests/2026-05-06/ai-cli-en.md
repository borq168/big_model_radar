# AI CLI Tools Community Digest 2026-05-06

> Generated: 2026-05-06 02:01 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# Cross-Tool AI CLI Ecosystem Comparison Report

**Date:** 2026-05-06
**Tools Analyzed:** Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Qwen Code

---

## 1. Ecosystem Overview

The AI CLI tools landscape demonstrates mature but uneven development across seven major platforms. Anthropic's Claude Code and OpenAI's Codex maintain the highest community engagement with critical regressions (rate limits, PR creation failures) dominating discourse. Google's Gemini CLI shows aggressive iteration with nightly builds and security hardening focus. GitHub Copilot CLI differentiates through Claude-powered experimental features while addressing long-standing POSIX compatibility issues. Chinese-origin tools (Kimi Code, Qwen Code) and OpenCode exhibit higher bug-report volumes relative to feature requests, suggesting earlier maturity stages. The ecosystem collectively signals convergence toward MCP (Model Context Protocol) integration, remote development capabilities, and enterprise-grade authentication as table-stakes requirements.

---

## 2. Activity Comparison

| Tool | Releases (24h) | Hot Issues | Key PRs | Community Engagement Signal |
|------|----------------|------------|---------|----------------------------|
| **Claude Code** | 1 (v2.1.129) | 10 | 4 (2 closed) | High — #41788: 58 comments, 83 👍 |
| **OpenAI Codex** | 2 (alpha) | 10 | 10 (2 closed) | Very High — #10450: 173 comments, 635 👍 |
| **Gemini CLI** | 3 (preview + nightly) | 10 | 10 (4 closed) | High — maintainer-heavy activity |
| **Copilot CLI** | 3 (v1.0.41–42) | 10 | 0 | Medium — #677: 35 comments |
| **Kimi Code CLI** | 0 | 3 | 2 | Low — stability-focused, no new releases |
| **OpenCode** | 3 (v1.14.37–39) | 10 | 10 (1 closed) | Medium — rapid bugfix cadence |
| **Qwen Code** | 3 (preview + nightly) | 10 | 10+ | Medium — 49 PRs updated |

**Key Observation:** OpenAI Codex and Claude Code lead in community-driven engagement metrics, while Gemini CLI and Qwen Code lead in release velocity. Kimi Code CLI shows minimal activity, indicating possible resource constraints or quiet stabilization phase.

---

## 3. Shared Feature Directions

The following requirements appear across multiple tool communities, indicating industry-wide priorities:

| Feature Direction | Tools Affected | Specific Needs |
|-------------------|----------------|----------------|
| **Remote/SSH Development** | Codex, Copilot CLI | VS Code-like remote workspace support (#10450: 635 👍 on Codex alone) |
| **MCP Integration Enhancements** | Claude Code, Codex, Copilot CLI, Gemini CLI | Tool inheritance for agents, OAuth with HTTPS URIs, per-project disable, granular permissions |
| **Extended Context Windows** | Codex, Qwen Code | 1M token support (#19464: 159 👍), subagent context overflow prevention |
| **Windows/Platform Stability** | Claude Code, Copilot CLI, OpenCode, Kimi Code | Session locks, bash tool failures, WSL crashes, file descriptor limits |
| **OAuth/Session Reliability** | Claude Code, Gemini CLI, Copilot CLI | Premature token rejection, refresh failures, multi-session management |
| **Background/Agent Task Management** | Qwen Code, Gemini CLI, Copilot CLI | Persistent background agents, cancellation UI, dream task surfacing |
| **Plugin/Extension System** | Claude Code, Copilot CLI, OpenCode | Dynamic loading, config sync, hook extensibility |

---

## 4. Differentiation Analysis

| Tool | Primary Differentiator | Target User | Technical Approach |
|------|-----------------------|-------------|-------------------|
| **Claude Code** | MCP ecosystem leadership, plugin URL fetching | Professional developers, enterprise | Plugin architecture, environment-driven config |
| **OpenAI Codex** | Remote development, massive context (1M tokens) | Teams with distributed workflows | Alpha/nightly rapid iteration, app-server consolidation |
| **Gemini CLI** | OIDC enterprise auth, Auto Memory security | Enterprise integrations (Jira, Slack) | Maintainer-driven security hardening, nightly builds |
| **Copilot CLI** | Claude-powered rubber-duck agent, shell completions | GitHub-native developers | Experimental feature flags, Claude integration |
| **Kimi Code CLI** | RalphFlow ephemeral context architecture | Chinese market, complex workflows | Architecture-first design, convergence detection |
| **OpenCode** | Mobile optimization, CORS SDK, session warping | Multi-platform developers, SDK consumers | Rapid bugfix cadence, plugin hook extensibility |
| **Qwen Code** | FileReadCache, Agent Team coordination | Large codebase analysis, parallel workflows | Tree-sitter AST parsing, OpenTelemetry tracing |

---

## 5. Community Momentum & Maturity

**High Momentum:**
- **OpenAI Codex** — Highest single-issue engagement (635 👍), active internal refactoring reducing `codex-core` scope, 10+ active PRs
- **Claude Code** — Critical regression (#41788) generating 83 👍 indicates strong user investment; rapid response infrastructure visible

**Rapid Iteration:**
- **Gemini CLI** — Nightly + preview channels, 10 PRs with 40% closure rate
- **Qwen Code** — 49 PRs updated in 24h, FileReadCache optimization shipped
- **OpenCode** — Three rapid bugfix releases (v1.14.37–39) in 24h

**Stabilization Phase:**
- **Kimi Code CLI** — No releases in 24h, all recent issues are bug reports; appears to be consolidating after v1.41.0
- **Copilot CLI** — No PRs updated, feature requests largely fulfilled (shell completions closed)

**Maturity Indicators:**
- Claude Code, Codex, and Gemini CLI show balanced issue/PR ratios with clear maintainer response patterns
- OpenCode and Qwen Code exhibit higher bug volume relative to feature requests, suggesting earlier maturity stage
- Copilot CLI's closed issues (shell completions, bash tool fix) indicate feature completion rather than exploration

---

## 6. Trend Signals

### Critical Infrastructure Priorities
1. **Rate Limiting & Billing Reliability** — Claude Code's Max 20 regression (#41788) and payment flow breakage (#55982) signal that subscription infrastructure requires hardening as tools move upmarket
2. **PR Creation Workflows** — Consistent failures across Codex Cloud/Web (#21000, #14604) block core value propositions; this is a multi-platform concern

### Emerging Capabilities
3. **Remote Development** — 635+ 👍 on Codex alone indicates strong demand; expect all tools to add SSH/container workspace support
4. **Agent Composability** — MCP tool inheritance (Claude Code #7296), Agent Team coordination (Qwen Code #2886), and subagent context isolation signal architectural investment in multi-agent workflows
5. **Enterprise Authentication** — OIDC support (Gemini CLI), OAuth refresh reliability, and HTTPS redirect URI handling indicate enterprise readiness as a competitive differentiator

### Platform-Specific Concerns
6. **Windows Parity Gaps** — Multiple tools (Claude Code, Copilot CLI, OpenCode, Kimi Code) report Windows-specific failures; Windows developer experience requires dedicated investment
7. **Terminal Compatibility** — Sync output detection (Claude Code), TUI freezes (Codex), and emoji width handling (OpenCode) indicate ongoing TUI refinement needs

### Technical Debt Signals
8. **Core Refactoring** — Codex's `codex-core` scope reduction and Qwen Code's tree-sitter AST replacement suggest architectural cleanup as a prerequisite for stability
9. **Legacy Protocol Removal** — Multiple tools removing deprecated ops (ListSkills, ListModels, ListMcpTools) indicates protocol surface area reduction in progress

---

**Bottom Line for Decision-Makers:**

- **For enterprise adoption:** Gemini CLI (OIDC) and Claude Code (MCP ecosystem) lead in enterprise readiness; monitor Claude Code's rate limit regression resolution
- **For team workflows:** OpenAI Codex's remote development push addresses a critical gap; expect 3–6 month timeline for production-ready implementation
- **For individual developers:** Copilot CLI's shell completions and Claude Code's plugin system offer immediate productivity gains
- **For cross-platform projects:** All tools show Windows instability; consider CLI-only workflows until desktop parity improves

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-05-06

---

## Today's Highlights

The v2.1.129 release introduces plugin URL fetching via `--plugin-url` and a new `CLAUDE_CODE_FORCE_SYNC_OUTPUT` environment variable for terminal compatibility. Meanwhile, the community's most pressing concern remains the Max 20 plan rate limit regression (#41788), which has accumulated 58 comments and 83 👍 reactions, with users reporting 100% exhaustion within 70 minutes—a critical issue affecting professional workflows.

---

## Releases

### v2.1.129
**What's new:**
- **`--plugin-url <url>` flag** — Fetch a plugin `.zip` archive from a URL for the current session, enabling dynamic plugin loading without local installation.
- **`CLAUDE_CODE_FORCE_SYNC_OUTPUT=1` env var** — Force-enable synchronized output on terminals where auto-detection fails (e.g., Emacs `eat`).
- **`CLAUDE_CODE_PACKAGE_MANAG*`** — Partial entry; additional package management functionality (details truncated in changelog).

📎 [Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.129)

---

## Hot Issues

### 1. Max 20 plan rate limit exhausted within ~70 minutes (#41788)
**58 comments · 83 👍 · [Open]**

The highest-traffic issue by far. Since v2.1.89, Max 20 subscribers report 100% rate limit exhaustion within ~70 minutes of a reset—behavior never observed in prior versions. This is a **regression that directly impacts professional billing users**. Community is actively debugging version-by-version; v2.1.86–v2.1.88 were stable.

🔗 [Issue #41788](https://github.com/anthropics/claude-code/issues/41788)

---

### 2. Plan upgrade payment fails — PaymentIntent voided (#55982)
**16 comments · 4 👍 · [Open]**

Payment flow breaks during plan upgrade; `PaymentIntent` is voided with `void_invoice` before confirmation completes. Affects new and upgrading subscribers. Reproducible preflight confirmed.

🔗 [Issue #55982](https://github.com/anthropics/claude-code/issues/55982)

---

### 3. Dispatch completely non-functional after incident q5qk1234v205 (#40958)
**10 comments · 2 👍 · [Open]**

48+ hours post-incident, Dispatch remains broken for Max plan users with no support response. Escalating frustration from enterprise users who depend on Dispatch for team workflows.

🔗 [Issue #40958](https://github.com/anthropics/claude-code/issues/40958)

---

### 4. MCP OAuth fails with HTTPS redirect URIs (#29934)
**9 comments · 14 👍 · [Open]**

MCP OAuth authentication fails when providers require HTTPS redirect URIs. Has reproduction steps and affects macOS platform. This blocks adoption of MCP servers requiring OAuth, a growing ecosystem.

🔗 [Issue #29934](https://github.com/anthropics/claude-code/issues/29934)

---

### 5. Cowork desktop app — bash workspace fails to start (#55404)
**8 comments · 3 👍 · [Open]**

Windows-specific: Cowork bash workspace repeatedly fails to start across sessions. Impacts the growing Cowork desktop user base on Windows.

🔗 [Issue #55404](https://github.com/anthropics/claude-code/issues/55404)

---

### 6. Agents don't inherit MCP tool access (#7296)
**8 comments · 19 👍 · [Closed]**

Agents launched via the `Task` tool do not inherit MCP tool access despite servers being connected. This was a significant architectural limitation; the issue is now closed, suggesting a fix may be in progress or shipped.

🔗 [Issue #7296](https://github.com/anthropics/claude-code/issues/7296)

---

### 7. Voice mode: 'no speech detected' despite working microphone (#38918)
**7 comments · 10 👍 · [Open]**

Voice mode consistently fails to detect speech after the warmup phase on macOS, even with a fully functional microphone. Affects hands-free workflow users.

🔗 [Issue #38918](https://github.com/anthropics/claude-code/issues/38918)

---

### 8. OAuth refresh returns 400 before local expiresAt (#54443)
**7 comments · 1 👍 · [Open]**

OAuth sessions are rejected by the server before the locally stored `expiresAt` time, causing repeated `/login` prompts. Affects multi-session users and team environments.

🔗 [Issue #54443](https://github.com/anthropics/claude-code/issues/54443)

---

### 9. session-env dir locks on Windows (#49984)
**7 comments · 5 👍 · [Open]**

Windows-specific: `session-env` directory locks require manual `rmdir` to unstick the Bash tool. Regression impacting Windows developer productivity.

🔗 [Issue #49984](https://github.com/anthropics/claude-code/issues/49984)

---

### 10. 47 skill descriptions dropped in v2.1.129 (#56448)
**1 comment · 0 👍 · [Open]**

v2.1.129 prints "47 skill descriptions dropped" on startup for configs that load cleanly on v2.1.128. Likely a false-positive warning, but indicates a regression in skill loading logic.

🔗 [Issue #56448](https://github.com/anthropics/claude-code/issues/56448)

---

## Key PR Progress

### 1. docs: Add Windows Developer Mode note for symlink support (#56334)
**Author:** @EnjouZeratul · [Open]

Documents that Windows users without Developer Mode enabled may experience silent failures where background agent outputs show "0 tokens" with no error. Improves DX for Windows onboarding.

🔗 [PR #56334](https://github.com/anthropics/claude-code/pull/56334)

---

### 2. fix: Line-specific spinner/status updates to prevent terminal flicker (#9369)
**Author:** @kshiteej-mali · [Closed]

Long-standing UX fix: replaces `console.clear()` and full-buffer redraws with line-specific updates, eliminating visual flickering during status indicator and spinner updates. Closed after resolution.

🔗 [PR #9369](https://github.com/anthropics/claude-code/pull/9369)

---

### 3. Update HackerOne links in SECURITY.md (#53949)
**Author:** @OctavianGuzu · [Open]

Keeps security disclosure infrastructure current by updating HackerOne submission form and program page links.

🔗 [PR #53949](https://github.com/anthropics/claude-code/pull/53949)

---

### 4. Remove 'statsig.anthropic.com' from firewall script (#56179)
**Author:** @nafu · [Open]

Removes a stale domain reference (`statsig.anthropic.com`) from firewall scripts, as the domain no longer resolves (NXDOMAIN). Improves reliability of network configuration guidance.

🔗 [PR #56179](https://github.com/anthropics/claude-code/pull/56179)

---

## Feature Request Trends

Analysis of open and recently closed issues reveals these dominant feature directions:

| Theme | Representative Issues | Community Interest |
|-------|----------------------|-------------------|
| **MCP Integration Enhancements** | Gmail label management (#36547), per-project MCP disable (#53656), cross-surface architecture (#56353) | High — 20+ 👍 combined |
| **Desktop App Parity** | `/resume` in desktop (#50067), open in specific folder (#54614) | Growing demand for CLI feature parity |
| **Auth & Session Management** | `--bare` mode auth preservation (#38022), OAuth refresh reliability (#54443) | Enterprise users seeking flexibility |
| **Context & Performance Control** | Graceful degradation over silent compaction (#56385) | Users want control over context management |
| **Model Cycling** | `chat:cycleModel` keybinding (#56477) | Keyboard-driven workflow optimization |
| **Plan Tier Expansion** | Mid-range plan between Pro and Max (#42007) | 2 👍 — niche but recurring request |

---

## Developer Pain Points

### 🔴 Critical / High Impact
1. **Rate Limit Regression** — Max 20 plan users experiencing accelerated exhaustion is the #1 community concern. Professional workflows are disrupted.
2. **Payment Flow Breakage** — Upgrade failures block subscription growth and user retention.
3. **Dispatch Outage** — 48+ hours without resolution for enterprise teams.

### 🟡 Recurring / Platform-Specific
4. **Windows Stability** — Multiple issues (#55404, #49984, #51886) indicate Windows is a pain point for Cowork and Bash tool users.
5. **OAuth Session Management** — Premature token rejection causes repeated re-authentication, disrupting multi-session workflows.
6. **MCP Tool Inheritance** — Agents not inheriting MCP access limits composability of AI workflows.

### 🟢 UX & Polish
7. **Terminal Compatibility** — Sync output detection gaps (e.g., Emacs `eat`) require manual workarounds.
8. **Skill Loading Warnings** — False-positive "dropped" warnings in v2.1.129 create noise.
9. **Voice Mode Reliability** — macOS users report consistent speech detection failures.
10. **Desktop Feature Parity** — Missing `/resume` and folder-specific launch options push users back to CLI.

---

*Digest generated from GitHub data for [anthropics/claude-code](https://github.com/anthropics/claude-code) · 2026-05-06*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest

**Date:** 2026-05-06
**Data Source:** github.com/openai/codex

---

## 1. Today's Highlights

The Codex project saw two alpha releases (v0.129.0-alpha.7 and v0.129.0-alpha.8) in the last 24 hours. A critical cluster of PR creation failures emerged in Codex Cloud/Web (#21000, #21227), with multiple users reporting consistent issues. The community's top feature request—Remote Development support for the Desktop App—continues gaining momentum with 635+ 👍 and 173 comments, signaling strong demand for VS Code-like remote workflow capabilities.

---

## 2. Releases

| Version | Type | Summary |
|---------|------|---------|
| `rust-v0.129.0-alpha.8` | Alpha | Latest pre-release build |
| `rust-v0.129.0-alpha.7` | Alpha | Pre-release build |

No changelog details provided for these alpha releases. Users on the alpha channel should expect rapid iteration.

---

## 3. Hot Issues

| # | Title | Author | Comments | 👍 | Why It Matters |
|---|-------|--------|----------|----|----------------|
| [#10450](https://github.com/openai/codex/issues/10450) | Remote Development in Codex Desktop App | @pocca2048 | 173 | 635 | **Top community request.** Users want Codex to support remote workspaces via SSH or containers, matching VS Code's Remote Development extension capabilities. The 635 👍 make this the highest-voted open issue. |
| [#11189](https://github.com/openai/codex/issues/11189) | GPT-5.3-Codex being routed to GPT-5.2 | @theBucky | 169 | 67 | Model routing bug causing users on Pro subscriptions to receive incorrect model responses. High impact on reliability. |
| [#19464](https://github.com/openai/codex/issues/19464) | Support 1M token context for GPT-5.5 in Codex | @umikato | 129 | 159 | Community wants to leverage GPT-5.5's full 1M token context window rather than the current 400K limitation in Codex. Significant for large codebase analysis. |
| [#11981](https://github.com/openai/codex/issues/11981) | Codex app 100% CPU Usage even when only one agent is running | @beladiyaraj | 49 | 14 | Performance regression affecting Mac users. Single-agent workloads causing full CPU saturation indicates resource management issues. |
| [#14604](https://github.com/openai/codex/issues/14604) | Failed to create PR in Codex Cloud | @alethrainc | 24 | 12 | Enterprise users blocked from completing the PR workflow in cloud deployments. |
| [#9926](https://github.com/openai/codex/issues/9926) | Enhancement: interactive ask_user_question tool | @vbp1 | 15 | 23 | Proposes structured Q&A UI for Codex CLI to resolve ambiguity through constrained answer formats rather than free-form chat. |
| [#17812](https://github.com/openai/codex/issues/17812) | Error running remote compact task | @tsoofbaror | 15 | 24 | Compact task execution failing on remote setups; impacts users with distributed workflows. |
| [#16688](https://github.com/openai/codex/issues/16688) | TUI freeze during agent fan-out | @Auties00 | 14 | 1 | Terminal UI becomes unresponsive when Codex spawns multiple sub-agents, affecting Windows users particularly. |
| [#20301](https://github.com/openai/codex/issues/20301) | Low cache hit rate when Codex integrates with GPT-5.5 | @pyfdtic | 10 | 1 | Performance concern: GPT-5.5 integration showing poor caching efficiency, increasing latency and API costs. |
| [#21000](https://github.com/openai/codex/issues/21000) | Codex Web cannot open PRs | @benglewis | 8 | 8 | Web UI users unable to complete PR creation—reproducible with any Codex task. |

---

## 4. Key PR Progress

| # | Title | Author | Status | Impact |
|---|-------|--------|--------|--------|
| [#21287](https://github.com/openai/codex/pull/21287) | Move skills watcher to app-server | @pakrym-oai | OPEN | Refactors skills update notifications from `codex-core` to `app-server`, improving separation of concerns. |
| [#19193](https://github.com/openai/codex/pull/19193) | Support Codex Apps auth elicitations | @mzeng-openai | OPEN | Enables URL-mode MCP elicitations for auth flows and routes them into the TUI app-link flow. |
| [#21282](https://github.com/openai/codex/pull/21282) | Remove legacy ListSkills op | @pakrym-oai | CLOSED | Cleanup: removes duplicate `Op::ListSkills` now covered by app-server v2 API. |
| [#21278](https://github.com/openai/codex/pull/21278) | Move message history out of core | @pakrym-oai | OPEN | Extracts message history from `codex-core` to reduce core's scope and improve maintainability. |
| [#21276](https://github.com/openai/codex/pull/21276) | Remove unused ListModels op | @pakrym-oai | CLOSED | Cleanup: removes dead `ListModels` submission op no longer used by any client. |
| [#21284](https://github.com/openai/codex/pull/21284) | Add response.processed websocket request | @pakrym-oai | OPEN | Adds websocket payload for Responses API to signal when a response completes processing. |
| [#21285](https://github.com/openai/codex/pull/21285) | fix(bwrap): emit libcap after standalone archive | @viyatb-oai | OPEN | Build fix ensuring `libcap` is linked after standalone `bwrap` binary compilation. |
| [#20949](https://github.com/openai/codex/pull/20949) | rework thread_source for thread analytics | @rhan-oai | OPEN | Makes `thread_source` an explicit optional field on thread events for better analytics tracking. |
| [#21055](https://github.com/openai/codex/pull/21055) | Preserve session MCP config on refresh | @aaronl-openai | OPEN | Fixes MCP refresh from dropping thread-start session overlays (e.g., app-injected MCP servers). |
| [#21281](https://github.com/openai/codex/pull/21281) | Remove core MCP list tools op | @pakrym-oai | OPEN | Cleanup: removes dead `Op::ListMcpTools` request path superseded by app-server MCP inventory APIs. |

**Trend:** Heavy internal refactoring focused on reducing `codex-core` scope, removing legacy protocol surfaces, and consolidating functionality in `app-server`.

---

## 5. Feature Request Trends

Based on issue analysis, the community's most-requested capabilities are:

1. **Remote Development Support** — SSH/container-based workspaces for the Desktop App (635+ 👍, #10450)
2. **Extended Context Windows** — 1M token support for GPT-5.5 in Codex (159 👍, #19464)
3. **Interactive Q&A Tooling** — Structured questionnaire UI for resolving ambiguity (#9926)
4. **Plan Mode Enhancements** — Compact context option in Plan Mode (#18490)
5. **Broader Platform Support** — FreeBSD compatibility (#13802), Windows ARM64 support (#17491)
6. **In-App Browser Authentication** — Support auth flows in the embedded browser (#19276)
7. **Stable External APIs** — Expose run/review lifecycle metadata (#20943) and document JSONL schema stability (#20952)

---

## 6. Developer Pain Points

| Category | Description | Frequency |
|----------|-------------|-----------|
| **PR Creation Failures** | Codex Cloud/Web consistently fails to create PRs across multiple repos (#21000, #21227, #14604) | High |
| **Performance Issues** | 100% CPU usage with single agents (#11981), TUI freezes during fan-out (#16688) | High |
| **Model Routing Bugs** | GPT-5.3-Codex incorrectly routed to GPT-5.2 (#11189) | Medium |
| **Caching Inefficiency** | Low cache hit rates with GPT-5.5 integration (#20301) | Medium |
| **Sandbox Behavior** | Incorrect sandbox permissions for automations (#15310), persistent "retry without sandbox" prompts (#18053) | Medium |
| **Windows-Specific Issues** | Excessive git command spawning (#20567), browser-use navigation failures (#19314) | Medium |
| **Safety Check False Positives** | Users flagged as cybersecurity threats erroneously (#21248, #21262) | Low-Medium |

---

*Digest generated from GitHub data. For real-time updates, visit [github.com/openai/codex](https://github.com/openai/codex).*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-06

## Today's Highlights

The Gemini CLI team shipped **v0.42.0-preview.1** as a patch release alongside a new nightly build (v0.42.0-nightly.20260505), addressing UI rendering fixes and CLI stability improvements. Community activity is heating up with 50 new issues and PRs in the last 24 hours, including a significant new OIDC authentication provider for enterprise remote agents and multiple Auto Memory security hardening PRs from maintainer SandyTao520.

---

## Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.42.0-preview.1** | Patch | Cherry-pick fix to patch v0.42.0-preview.0 |
| **v0.42.0-preview.0** | Preview | Prevent automatic updates from switching to less stable channels |
| **v0.42.0-nightly.20260505** | Nightly | Clear skills consent dialog before reload; render LaTeX-style output as Unicode in TUI |
| **v0.41.1** | Patch | Cherry-pick fix to patch v0.41.0 |
| **v0.41.0** | Stable | General availability release |

**Notable nightly fix**: Skills consent dialog now clears properly before reload, and LaTeX output renders as Unicode in the terminal UI.

---

## Hot Issues

1. **[#21925](https://github.com/google-gemini/gemini-cli/issues/21925)** — Hand icon appears when action not required (16 comments)
   **Why it matters**: False-positive "action required" indicators frustrate users during long-running shell scripts. This is a high-visibility UX bug affecting daily workflows.
   *Tags*: area/core, priority community concern

2. **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)** — Robust component-level evaluations (5 comments)
   **Why it matters**: Epic tracking expansion of behavioral eval tests from 76 to broader coverage across 6 supported Gemini models. Critical for regression prevention.
   *Tags*: priority/p1, area/agent, maintainer-only

3. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** — Assess AST-aware file reads, search, and mapping (5 comments)
   **Why it matters**: Investigating whether AST-aware tools can reduce token noise and misaligned reads—potential performance breakthrough.
   *Tags*: area/agent, maintainer-only

4. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** — Subagent reports GOAL success despite hitting MAX_TURNS (5 comments)
   **Why it matters**: Silent failure hides incomplete analysis, leading to false confidence in results.
   *Tags*: priority/p1, area/agent

5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** — Gemini doesn't use skills and sub-agents enough (5 comments)
   **Why it matters**: Users report custom skills (e.g., "gradle", "git") go unused unless explicitly instructed, limiting automation value.
   *Tags*: priority/p2, area/agent

6. **[#24916](https://github.com/google-gemini/gemini-cli/issues/24916)** — Gemini CLI keeps asking for permissions on the same file (3 comments)
   **Why it matters**: Repeated permission prompts degrade user experience and trust in the permission model.
   *Tags*: area/security

7. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** — Shell command execution stuck with "Waiting input" after completion (2 comments, 3 👍)
   **Why it matters**: CLI hangs after simple shell commands, forcing users to restart sessions. High-impact bug.
   *Tags*: area/core

8. **[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)** — Model creates tmp scripts in random spots (2 comments)
   **Why it matters**: Clutters workspace and creates cleanup overhead for clean commits.
   *Tags*: priority/p2, area/agent

9. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** — Gemini CLI encounters 400 error with >128 tools (1 comment)
   **Why it matters**: Agent fails silently when tool count exceeds API limits—needs smarter tool scoping.
   *Tags*: area/agent

10. **[#25218](https://github.com/google-gemini/gemini-cli/issues/25218)** — Table renders incrementally during streaming (0 comments)
    **Why it matters**: Broken layout in screen reader mode during streaming—accessibility concern.
    *Tags*: area/core

---

## Key PR Progress

| PR | Author | Description |
|----|--------|-------------|
| **[#26559](https://github.com/google-gemini/gemini-cli/pull/26559)** | alexandrevarga | **feat(core): implement OpenID Connect (OIDC) auth provider** for remote A2A communication—enables enterprise integrations with Jira, Slack, etc. |
| **[#26560](https://github.com/google-gemini/gemini-cli/pull/26560)** | cynthialong0-0 | **fix(core): handle invalid custom plans directory gracefully** — prevents crash from unhandled promise rejection during startup |
| **[#26536](https://github.com/google-gemini/gemini-cli/pull/26536)** | alexandrevarga | **feat(core): add system-wide fallback for ripgrep detection** — improves reliability in non-standard installation environments |
| **[#26554](https://github.com/google-gemini/gemini-cli/pull/26554)** | sripasg | **fix(acp): move tool explanation from thought stream to tool call content** — reduces UI noise for MCP tools |
| **[#26548](https://github.com/google-gemini/gemini-cli/pull/26548)** | akh64bit | **fix(core): cache model routing decision in LocalAgentExecutor** — avoids redundant route() calls per turn |
| **[#26504](https://github.com/google-gemini/gemini-cli/pull/26504)** *(CLOSED)* | cynthialong0-0 | **fix(cli): provide JSON output for AgentExecutionStopped** in non-interactive mode |
| **[#26452](https://github.com/google-gemini/gemini-cli/pull/26452)** | joshualitt | **fix(core): Fix hysteresis in async context management pipelines** |
| **[#26534](https://github.com/google-gemini/gemini-cli/pull/26534)** *(CLOSED)* | joshualitt | **fix(core): Fix chat corruption bug in context manager** |
| **[#26542](https://github.com/google-gemini/gemini-cli/pull/26542)** *(CLOSED)* | galz10 | **fix(core): allow redirection in YOLO and AUTO_EDIT modes without sandboxing** |
| **[#26535](https://github.com/google-gemini/gemini-cli/pull/26535)** | SandyTao520 | **Tighten private Auto Memory patch allowlist** — security hardening for memory system |

---

## Feature Request Trends

Analysis of open issues reveals these dominant feature directions:

1. **Agent Intelligence & Tool Use** — Requests for better autonomous skill/sub-agent invocation, smarter tool scoping (>128 tools), and AST-aware navigation
2. **Memory System Improvements** — Multiple maintainer-only issues targeting Auto Memory security, patch validation, and session retry logic
3. **UI/UX Polish** — Hand icon false positives, table streaming bugs, ToDo→Tasks rename, parallel tool call layouts
4. **Platform Compatibility** — Wayland browser failures, SSH text scrambling, Windows path handling (EISDIR bug)
5. **Enterprise Readiness** — OIDC auth provider (merged), permission persistence, non-interactive JSON mode improvements

---

## Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **Shell hangs after command completion** (#25166) | Recurring | Forces session restart |
| **Permission prompts repeat for same files** (#24916) | Reported multiple times | UX frustration |
| **Skills/sub-agents not auto-invoked** (#21968) | Anecdotal but consistent | Limits automation value |
| **False "action required" indicators** (#21925) | High visibility | User distrust |
| **Tmp scripts scattered across directories** (#23571) | Common pattern | Cleanup overhead |
| **Floating promise timeouts** (#25295) | Audit finding | 30s delays, poor responsiveness |

---

*Digest generated from GitHub data for 2026-05-06. All links reference https://github.com/google-gemini/gemini-cli.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest

**Date:** 2026-05-06
**Source:** github.com/github/copilot-cli

---

## 1. Today's Highlights

GitHub Copilot CLI shipped three releases in the last 24 hours, including a new experimental rubber-duck agent powered by Claude and significant UI responsiveness improvements. The community continues to report critical issues around model selection, MCP server permissions, and session management, with 43 issues updated in the past day.

---

## 2. Releases

### v1.0.42-0 (2026-05-06)
- **Added:** Rubber-duck agent for GPT sessions, powered by Claude (available in `/experimental`)

### v1.0.41 (2026-05-05)
- CLI starts faster by rendering UI immediately while authentication resolves in the background
- Shell completions (bash, zsh, fish) automatically installed on first run and updated after `copilot update`
- Tab-completing slash commands that accept arguments now adds a trailing space

### v1.0.41-1 (2026-05-05)
- Slash command picker searches command descriptions and underlines matched characters
- Memory tool confirmation prompt now shows scope (repository or user) when requesting permission
- SQL todo timeline entries display more accurately for INSERT OR IGNORE/REPLACE

---

## 3. Hot Issues

| # | Issue | Author | Comments | 👍 | Status | Why It Matters |
|---|-------|--------|----------|-----|--------|----------------|
| 1 | **[Bash Tool Fails with posix_spawnp Error](https://github.com/github/copilot-cli/issues/677)** | @hamadycisselp360 | 35 | 11 | CLOSED | Long-standing critical bug causing bash operations to fail after extended use, affecting power users with multi-step workflows |
| 2 | **[Skills not used unless explicitly stated](https://github.com/github/copilot-cli/issues/978)** | @EdouardCourty | 12 | 6 | OPEN | Skills feature doesn't trigger automatically, limiting AGENTS.md organization benefits and requiring explicit invocation |
| 3 | **[Add shell completions](https://github.com/github/copilot-cli/issues/334)** | @scaryrawr | 9 | 11 | CLOSED | Feature request fulfilled in v1.0.41—now users can integrate copilot with bash, zsh, and fish shells |
| 4 | **[Error: model not supported (opus 4.5)](https://github.com/github/copilot-cli/issues/2661)** | @Midnight-W4lker | 8 | 0 | CLOSED | Users unable to use available models through CLI despite access via VS Code and student pack |
| 5 | **[3rd party MCP servers disabled](https://github.com/github/copilot-cli/issues/1707)** | @jaroslaw-buryk-lgs | 7 | 0 | CLOSED | Enterprise users blocked from using custom MCP servers despite no organizational policy restriction |
| 6 | **[preToolUse silent command rewrite](https://github.com/github/copilot-cli/issues/2643)** | @jeziellopes | 6 | 0 | OPEN | Hooks cannot silently rewrite commands—every rewritten command triggers confirmation dialog, breaking automation |
| 7 | **[Blinking flickering output](https://github.com/github/copilot-cli/issues/1716)** | @berrat | 5 | 5 | CLOSED | Terminal rendering issues with long formatted output causing visual disruption |
| 8 | **[MCP permissions configuration](https://github.com/github/copilot-cli/issues/3028)** | @artur-kozminski | 4 | 1 | OPEN | Users request granular control over which MCP server tools can be accessed, similar to trustedFolders |
| 9 | **[Plugin update not syncing config.json](https://github.com/github/copilot-cli/issues/3129)** | @ericchansen | 3 | 0 | CLOSED | Local plugin updates don't update version in config.json, causing version mismatch issues |
| 10 | **[Session file corrupted with U+2028/U+2029](https://github.com/github/copilot-cli/issues/2012)** | @stimitoak | 3 | 2 | OPEN | `/resume` fails with JSON parse errors when session files contain Unicode line/paragraph separators |

---

## 4. Key PR Progress

*Note: No pull requests were updated in the last 24 hours.*

---

## 5. Feature Request Trends

Analysis of 43 updated issues reveals these dominant feature directions:

1. **Model Flexibility & Control**
   - OpenRouter integration ([#2943](https://github.com/github/copilot-cli/issues/2943)) — 6 👍
   - Reasoning effort configuration for Claude Opus models ([#3080](https://github.com/github/copilot-cli/issues/3080))
   - Enterprise model access controls ([#3101](https://github.com/github/copilot-cli/issues/3101))

2. **MCP Server Enhancements**
   - Granular tool-level permissions ([#3028](https://github.com/github/copilot-cli/issues/3028))
   - Workspace `.mcp.json` discovery ([#3126](https://github.com/github/copilot-cli/issues/3126))
   - Dynamic tool list updates ([#3125](https://github.com/github/copilot-cli/issues/3125))

3. **Plugin System Improvements**
   - Static plugin snapshots (remove `.git` directory) ([#3132](https://github.com/github/copilot-cli/issues/3132))
   - Bundled reference resources for custom agents ([#3131](https://github.com/github/copilot-cli/issues/3131))
   - Config.json sync on plugin update ([#3129](https://github.com/github/copilot-cli/issues/3129))

4. **Session & Workflow Management**
   - Alphanumeric session ID restoration ([#3128](https://github.com/github/copilot-cli/issues/3128))
   - Clickable file references in output ([#3134](https://github.com/github/copilot-cli/issues/3134))
   - Sound alerts for input prompts ([#2299](https://github.com/github/copilot-cli/issues/2299))

5. **Agent Tooling**
   - Blocked/allowed tools for sub-agents ([#3133](https://github.com/github/copilot-cli/issues/3133))
   - Hot-reload for new agents during conversation ([#3106](https://github.com/github/copilot-cli/issues/3106))
   - Working directory CLI flag ([#457](https://github.com/github/copilot-cli/issues/457))

---

## 6. Developer Pain Points

1. **Authentication & Browser Issues**
   - CLI unable to open browser for GitHub auth ([#3130](https://github.com/github/copilot-cli/issues/3130)) — blocks PR creation workflows

2. **Session Reliability**
   - `/resume` fails with corrupted session files ([#2012](https://github.com/github/copilot-cli/issues/2012))
   - `session_store_sql` silently returns empty with local sync ([#2654](https://github.com/github/copilot-cli/issues/2654))
   - Model change breaks next launch with exit code 1 ([#2524](https://github.com/github/copilot-cli/issues/2524))

3. **Tool Execution Failures**
   - Bash tool `posix_spawnp` errors after extended use ([#677](https://github.com/github/copilot-cli/issues/677)) — 35 comments, highest engagement
   - `task_complete` not written to output causing result loss ([#2482](https://github.com/github/copilot-cli/issues/2482))

4. **Plugin Management Friction**
   - Plugin updates don't sync version to config.json ([#3129](https://github.com/github/copilot-cli/issues/3129))
   - Installed plugins remain live git repos causing drift ([#3132](https://github.com/github/copilot-cli/issues/3132))

5. **Terminal & UI Issues**
   - Mouse scroll scrolls message history instead of terminal output ([#2405](https://github.com/github/copilot-cli/issues/2405)) — 4 👍
   - Blinking/flickering output with long formatted text ([#1716](https://github.com/github/copilot-cli/issues/1716))

6. **Windows Platform**
   - Node permission issues preventing CLI execution without admin rights ([#2953](https://github.com/github/copilot-cli/issues/2953))

---

*End of digest. For more details, visit [github.com/github/copilot-cli](https://github.com/github/copilot-cli).*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – 2026-05-06**

**Today's Highlights**
- No new releases in the last 24 hours; the team is likely focusing on stability after the recent v1.41.0 rollout.
- Three new bug reports surfaced, highlighting API error handling, login failures, and random crashes on WSL.
- Two pull requests were updated, including a major architecture proposal for ephemeral context and a fix for flaky tests.

**Releases**
- No new releases in the last 24 hours. The latest version remains **v1.41.0** (released 2026‑05‑05). For changes in v1.41.0, see the [release page](https://github.com/MoonshotAI/kimi-cli/releases).

**Hot Issues**
1. **#2164 – [bug] api error 400** (Open) – Reported by @RollingTheRock on 2026‑05‑05. Users on Fedora Workstation 43 running kimi‑cli 1.40.0 encounter a 400 API error when using the k2.6 model. The issue includes a screenshot of the error. Community reaction: 0 👍, 1 comment. This matters because it suggests a potential breaking change in API request formatting that could affect many Linux users.
   - Link: https://github.com/MoonshotAI/kimi-cli/issues/2164

2. **#2162 – [bug] Cannot Login** (Open) – Reported by @gg582 on 2026‑05‑05. Users on Linux (6.18.15‑400.asahi.fc43.aarch64+16k) cannot log in after upgrading to v1.41.0. The issue includes a log snippet. Community reaction: 0 👍, 1 comment. This is critical as login failures block all functionality, especially on non‑x86 architectures.
   - Link: https://github.com/MoonshotAI/kimi-cli/issues/2162

3. **#2163 – [bug] Random KIMI CLI crash on WSL** (Open) – Reported by @spektant‑png on 2026‑05‑05. Users on Windows 11 with WSL (Ubuntu 22–26) experience random crashes when using the CLI with API KEY and model KIMI 2.6. Community reaction: 0 👍, 0 comments. This is significant as WSL is a popular development environment, and crashes disrupt workflows.
   - Link: https://github.com/MoonshotAI/kimi-cli/issues/2163

**Key PR Progress**
1. **#1960 – feat(soul): RalphFlow architecture with ephemeral context and convergence detection** (Open) – Authored by @ORDL‑AMF on 2026‑04‑20, updated 2026‑05‑05. This PR introduces the **RalphFlow architecture**—an automated iteration framework that prevents infinite loops and enables robust multi‑step workflows by using isolated temporary context files. Key changes:
   - **Ephemeral Context**: Flow iterations run in isolated temporary context files.
   - **Convergence Detection**: Automatically detects when a workflow has converged, avoiding endless loops.
   This is a major enhancement for agent reliability. Community reaction: 0 👍, comments undefined. If merged, it could significantly improve the CLI’s ability to handle complex tasks.
   - Link: https://github.com/MoonshotAI/kimi-cli/pull/1960

2. **#2008 – test(background): fix flaky approval‑wait tests via wait_for_status** (Open) – Authored by @ahyangyi on 2026‑04‑22, updated 2026‑05‑05. This PR fixes flaky tests in `test_agent_tool.py` by increasing wait times and using `wait_for_status` to handle slow runners. It addresses test reliability, which is crucial for CI/CD pipelines. Community reaction: 0 👍, comments undefined. This fix should reduce false negatives in testing.
   - Link: https://github.com/MoonshotAI/kimi-cli/pull/2008

**Feature Request Trends**
- The three issues reported in the last 24 hours are all bug reports, indicating that the community is currently focused on stability and reliability rather than new features. The main themes are:
   - **API Error Handling**: Users expect clearer error messages and better handling of 400 errors, especially when switching models or platforms.
   - **Authentication and Login**: There is a need for more robust login flows, particularly on non‑x86 Linux distributions and after version updates.
   - **Cross‑Platform Stability**: Issues on WSL and Fedora highlight the need for thorough testing across Windows (WSL), ARM Linux, and other environments.

**Developer Pain Points**
- **Frequent Crashes on WSL**: Developers using Windows Subsystem for Linux report random crashes, which hinder productivity and discourage use in Windows‑centric workflows.
- **Login Failures After Updates**: The login mechanism seems fragile across different Linux distributions, causing blockers for users on newer or less common platforms.
- **API Error Ambiguity**: The 400 error reported by multiple users lacks clear guidance, making it hard for developers to diagnose and resolve issues quickly.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-06

## Today's Highlights

The OpenCode team shipped three rapid bugfix releases (v1.14.37–v1.14.39), addressing critical issues including CSP regressions affecting the web terminal, proxy environment variable handling in the desktop app, and improved task cancellation logic. The community continues to drive significant feature development, with active PRs targeting mobile optimization, CORS support for SDK consumers, and enhanced TUI customization options.

---

## Releases

| Version | Category | Changes |
|---------|----------|---------|
| **v1.14.39** | Desktop | Fixed proxy environment variable (`HTTP_PROXY`, etc.) support; improved null handling for stored values |
| **v1.14.38** | Core | Fixed CSP allowing embedded UI requests with arbitrary `connect-src` origins |
| **v1.14.38** | Desktop | Desktop now trusts system CA certificates for HTTPS connections |
| **v1.14.37** | Core | Task cancellation now properly cascades to child subtask sessions; improved v2 session rendering with cleaner tool states and accurate timing |
| **v1.14.37** | Core | Added session warping between workspaces and local projects |

---

## Hot Issues

1. **[#24418](https://github.com/anomalyco/opencode/issues/24418) — CLI stuck on "Loading plugins..." on Windows** *(24 comments, CLOSED)*
   CLI intermittently hangs at startup on Windows (~50% of attempts), requiring full process termination. Affects users since v1.14.25. High impact on Windows developer workflows.

2. **[#4443](https://github.com/anomalyco/opencode/issues/4443) — Plan mode by default** *(21 comments, 24 👍, OPEN)*
   Users want to default to plan mode, especially when integrating with editors like Helix. Currently requires manual Tab switching, causing accidental code modifications.

3. **[#23944](https://github.com/anomalyco/opencode/issues/23944) — Frequent OpenAI errors** *(12 comments, 9 👍, OPEN)*
   Reports of recurring `server_error` responses from OpenAI GPT-5.4, suggesting potential API stability or rate-limiting concerns.

4. **[#25824](https://github.com/anomalyco/opencode/issues/25824) — Desktop plugin agents not visible in GUI** *(10 comments, 3 👍, OPEN)*
   oh-my-openagent plugins load successfully but custom agents don't appear in the desktop app's agent selector dropdown, while TUI works correctly.

5. **[#4986](https://github.com/anomalyco/opencode/issues/4986) — Local Relevance Index** *(10 comments, 2 👍, OPEN)*
   Feature request to address context window data loss by implementing local relevance scoring for better context management.

6. **[#197](https://github.com/anomalyco/opencode/issues/197) — Volta/node manager compatibility** *(9 comments, 5 👍, CLOSED)*
   OpenCode fails to run when Node/npm is managed by Volta, blocking adoption by developers using version managers.

7. **[#7624](https://github.com/anomalyco/opencode/issues/7624) — Base path/prefix routing support** *(7 comments, 27 👍, OPEN)*
   High-demand feature for embedding OpenCode under URL prefixes in larger platforms. Currently limits enterprise integration scenarios.

8. **[#18793](https://github.com/anomalyco/opencode/issues/18793) — chat.model plugin hook** *(7 comments, 6 👍, OPEN)*
   Request for a new plugin hook enabling pre-call model routing, allowing plugins to dynamically swap provider/model combinations.

9. **[#7578](https://github.com/anomalyco/opencode/issues/7578) — Web terminal not working** *(4 comments, 6 👍, CLOSED)*
   Web UI terminal input captured by chat instead of terminal, making web-based workflows unusable.

10. **[#8358](https://github.com/anomalyco/opencode/issues/8358) — File descriptor limits on Mac** *(4 comments, 6 👍, CLOSED)*
    OpenCode exhausts Mac file descriptors (256 limit), requiring `ulimit` adjustments. Suggests resource management improvements needed.

---

## Key PR Progress

1. **[#18767](https://github.com/anomalyco/opencode/pull/18767) — Mobile Touch Optimization** *(OPEN)*
   New feature optimizing OpenCode App for mobile/touch devices while preserving desktop experience.

2. **[#24951](https://github.com/anomalyco/opencode/pull/24951) — Web file watcher fix** *(OPEN)*
   Fixes file watcher in web/serve mode to properly subscribe to file changes beyond just `.git/HEAD`.

3. **[#25818](https://github.com/anomalyco/opencode/pull/25818) — Type session not-found errors** *(CLOSED)*
   Migrated session errors to typed Effect channels with proper HTTP 404 declarations and regression coverage.

4. **[#24865](https://github.com/anomalyco/opencode/pull/24865) — CORS option for SDK** *(OPEN)*
   Adds configurable CORS origins to SDK ServerOptions, enabling cross-origin deployments.

5. **[#25672](https://github.com/anomalyco/opencode/pull/25672) — Prevent pkill hang** *(OPEN)*
   Fixes process hang when using `pkill -f` by resolving exit signals on `exit` event instead of `close`.

6. **[#25944](https://github.com/anomalyco/opencode/pull/25944) — Display loaded skills list** *(OPEN, needs:compliance)*
   New feature allowing users to view currently loaded skills without consuming query tokens.

7. **[#6138](https://github.com/anomalyco/opencode/pull/6138) — Session list limit for TUI** *(OPEN)*
   Adds `tui.session_list_limit` config option to control session picker behavior.

8. **[#6130](https://github.com/anomalyco/opencode/pull/6130) — XML/HTML syntax theme tokens** *(OPEN)*
   Adds TUI theme tokens for XML/HTML tag highlighting (`syntaxTag`, `syntaxAttribute`, `syntaxTagDelimiter`).

9. **[#12999](https://github.com/anomalyco/opencode/pull/12999) — Config boundary option** *(OPEN)*
   Adds `configBoundary` option to control parent config traversal, addressing nested workspace scenarios.

10. **[#25942](https://github.com/anomalyco/opencode/pull/25942) — ZWJ emoji width handling** *(OPEN)*
    New `width_method` config option to handle Zero-Width Joiner emoji sequences that corrupt terminal layouts.

---

## Feature Request Trends

Analysis of 50 recent issues reveals these dominant feature directions:

| Trend | Description | Notable Issues |
|-------|-------------|----------------|
| **Plugin System Extensions** | More hooks for pre-call routing, command handling, and tool execution | #18793, #25916, #25918 |
| **Platform Integration** | URL prefix routing, base URL support, enterprise embedding | #7624, #18209 |
| **UI/UX Enhancements** | Mouse scroll, customizable shortcuts, command selectors, agent colors | #18218, #25871, #13451 |
| **Provider Flexibility** | New providers (Omniroute), model routing, local relevance indexing | #25947, #4986 |
| **Mobile & Touch** | Mobile optimization, safe area handling | #18767, #25833 |
| **Localization** | Message translation for non-English AI outputs | #25923 |

---

## Developer Pain Points

1. **Web Terminal CSP Regressions** — Multiple reports (#25893, #25945) indicate CSP headers breaking Ghostty WASM in web UI, a recurring issue that was previously fixed and has regressed twice.

2. **Desktop Plugin Visibility** — Plugin-loaded agents not appearing in desktop GUI dropdowns (#25824, #25948) creates confusion between working TUI and broken desktop experiences.

3. **Windows Stability** — CLI hangs on startup (#24418) and PowerShell command hangs (#25938) suggest Windows-specific reliability issues.

4. **Provider/API Reliability** — Frequent OpenAI errors (#23944) and empty 400 responses (#25790) indicate upstream provider integration challenges.

5. **Resource Limits** — File descriptor exhaustion on Mac (#8358) and general resource management concerns highlight infrastructure gaps.

6. **Plugin Hook Gaps** — Missing or unimplemented hooks (#25916, #25918) prevent developers from building session-control and tool-execution plugins effectively.

7. **Model Configuration Complexity** — Issues with model chutes (#22312) and Go model documentation (#24649) suggest configuration UX needs improvement.

---

*Generated: 2026-05-06 | Data source: github.com/anomalyco/opencode*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-06

## Today's Highlights

The Qwen Code team shipped three releases in the past 24 hours (v0.15.7-preview.0, v0.15.6-preview.1, v0.15.6-nightly) introducing **FileReadCache** for short-circuiting unchanged file reads—a performance optimization that reduces redundant I/O. Meanwhile, the community is actively addressing UI stability issues, with a critical terminal infinite-scroll bug (#3838) gaining traction and multiple PRs targeting subagent context management and observability.

---

## Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.15.7-preview.0** | Preview | FileReadCache + short-circuit unchanged Reads; CLI proxy setting fix |
| **v0.15.6-preview.1** | Preview | Same as above |
| **v0.15.6-nightly.20260506.2a5be0d3b** | Nightly | Same as above |

All three releases share identical changes from PRs #3766, #3717, and a proxy fix by @cyphercodes. The **FileReadCache** addition is the headline feature, designed to skip re-reading files that haven't changed since the last access.

---

## Hot Issues

| # | Issue | Status | Why It Matters |
|----|-------|--------|----------------|
| **#3838** | Terminal infinite scroll/refresh loop | Open | UI rendering bug causes terminal content to flicker and scrollbar to grow unbounded during model output. Affects usability for any code analysis or generation task. |
| **#3652** | 400 InternalError: Range of input length should be [1, 983616] | Closed | Users hit hard length limits in long conversations, forcing them to restart chats repeatedly. |
| **#3490** | Model not responding | Closed | API connectivity issues to Alibaba internal endpoints caused silent failures. |
| **#3843** | Qwen overrides settings.json on startup | Open | User configurations are being overwritten, breaking custom setups. |
| **#3858** | 401 invalid access token error | Open | Users unable to authenticate with the CLI despite valid API keys. |
| **#3845** | Failed to install Qwen Code (Cannot find module) | Open | Installation script failures prevent new users from onboarding. |
| **#3770** | Cannot switch Ctrl+E focus between parallel SubAgents | Open | UI bug introduced in PR #3721 breaks keyboard navigation for parallel agent workflows. |
| **#3759** | Auto-memory recall blocks every user turn for 5s | Closed | Performance regression caused 5-second delays on every prompt. |
| **#3765** | Side queries use main model's per-model settings | Closed | Fast model ignored its own config (e.g., thinking mode), causing unexpected behavior. |
| **#3817** | Race condition in McpClientManager creates duplicate MCP processes | Closed | Startup/reinit race created duplicate processes, wasting resources. |

**Community Reaction:** The terminal UI bug (#3838) is generating the most discussion among users, with 2 comments in 24 hours. Installation failures (#3845) and authentication issues (#3858) are blocking new adoptions.

---

## Key PR Progress

| # | PR | Author | Summary |
|----|----|--------|---------|
| **#3836** | feat(core,cli): surface and cancel auto-memory dream tasks | @wenshao | Brings background dream consolidation tasks into the unified Background Tasks UI with cancellation support. |
| **#3115** | feat: add commit attribution with per-file AI contribution tracking | @wenshao | Tracks AI-generated changes separately in git history for compliance and auditability. |
| **#3768** | feat(cli): route foreground subagents through pill+dialog while running | @tanzhenxin | Suppresses inline display during foreground agent execution, surfacing runs via footer pill + dialog instead. |
| **#2886** | feat: add Agent Team experimental feature for parallel sub-agent coordination | @tanzhenxin | Enables lead agent to spawn and coordinate teams of sub-agents working in parallel on task decomposition. |
| **#2652** | refactor: replace shell-utils string parsing with tree-sitter AST | @LaZzyMan | Replaces fragile string parsing with tree-sitter AST for robust handling of quotes, heredocs, and nested constructs. |
| **#3769** | fix(core): isolate fast model side queries | @LaZzyMan | Routes auto-memory and other side queries to use the correct model configuration instead of inheriting from the main agent. |
| **#3673** | feat(memory): add autoSkill background project skill extraction | @LaZzyMan | Automatically extracts reusable workflows into project-level skills after 20 tool calls (opt-in feature). |
| **#3736** | feat(cli): improve slash command discovery | @LaZzyMan | Enhances slash command completion and discovery for better discoverability. |
| **#3735** | fix(core): auto-compact subagent context to prevent overflow | @tanzhenxin | Subagent chats now auto-compact at configured thresholds, preventing 400 errors on long multi-turn runs. |
| **#3847** | feat(telemetry): inject traceId/spanId into debug log files | @doudouOUC | Adds OpenTelemetry correlation to debug logs for tracing in SLS/Grafana backends. |

**Notable CI/Infra PRs:**
- **#3854** — Qwen Issue Follow-up Bot workflow for automated community issue handling
- **#3855** — Release asset verification for installation packages
- **#3828** — Publishes `install-qwen.sh` and `install-qwen.bat` as official GitHub Release assets

---

## Feature Request Trends

Analysis of open and recently closed issues reveals these dominant feature directions:

1. **Background Task Management** (#3634) — Roadmap finalized; Phase A/B merged. Users want persistent background agents with resume/continuation.
2. **WebSearch Tool** (#3841) — Qwen Code is the only major Code Agent CLI without a web search capability; underlying DashScope support already exists.
3. **Slash Command UX** (#3736, #3700) — Improved discovery, keyboard navigation, and format selection for `/export` and other slash commands.
4. **AI Contribution Tracking** (#3115) — Per-file attribution to distinguish AI-generated changes in git history for open-source compliance.
5. **Model Picker Bypass** (#3410) — Allow `/model qwen3-coder-next` syntax to skip interactive picker when using local proxies.

---

## Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **Terminal UI rendering instability** | High (multiple reports) | Blocks productive use during code generation/analysis |
| **Installation failures** | High | Prevents new user onboarding |
| **Authentication/API key issues** | High | Blocks CLI usage entirely |
| **Settings.json overwrites** | Medium | Breaks custom configurations on every restart |
| **Context overflow in subagents** | Medium | Causes 400 errors on long multi-turn subagent runs |
| **Auto-memory recall delays** | Medium (now closed) | 5-second delay per turn was a severe regression |
| **Duplicate MCP processes** | Medium (now closed) | Resource waste and potential instability on restart |

**Bottom Line:** The community is actively engaged with 49 PRs and 20 issues updated in the last 24 hours. The focus areas are **UI stability**, **installation/auth reliability**, and **advanced agent coordination features** (Agent Team, background tasks, skill extraction). The FileReadCache optimization and subagent context management improvements signal a push toward production readiness for complex, long-running workflows.

---

*Generated: 2026-05-06 | Data source: github.com/QwenLM/qwen-code*

</details>