# AI CLI Tools Community Digest 2026-05-03

> Generated: 2026-05-03 02:01 UTC | Tools covered: 8

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

**Date:** 2026-05-03
**Scope:** Claude Code · OpenAI Codex · Gemini CLI · GitHub Copilot CLI · Kimi Code CLI · OpenCode · Qwen Code · Pi

---

## 1. Ecosystem Overview

The AI CLI tools ecosystem is in a phase of rapid, parallel iteration, with eight major tools each advancing distinct feature pipelines while converging on shared pain points. Billing and quota management dominate Claude Code's community; Windows platform parity is a cross-cutting concern for OpenAI Codex, Gemini CLI, Copilot CLI, and Kimi Code; and agent reliability—subagent behavior, permission persistence, shell execution stability—emerges as the most universal challenge. The ecosystem reflects a maturation from pure feature competition toward infrastructure hardening: error classification, retry logic, session recovery, and hook/permission systems are under active development across multiple tools simultaneously. Meanwhile, Claude Code parity is explicitly cited as a roadmap target by Kimi Code and Pi, signaling Anthropic's CLI as a de facto design reference.

---

## 2. Activity Comparison

| Tool | Releases (24h) | Issues Updated | PRs Updated | Top Issue Theme | Community Velocity |
|------|---------------|----------------|-------------|-----------------|-------------------|
| **Claude Code** | 0 | 30+ | 8 | Billing/subscription management (2,100+ combined comments) | High — massive community engagement, billing crisis |
| **OpenAI Codex** | 0 | 30+ | 10 | Windows Browser Use failures, TUI customization | High — active Windows platform push |
| **Gemini CLI** | 0 | 30+ | 10+ | Subagent reliability, shell execution hangs | High — infrastructure hardening focus |
| **Copilot CLI** | 0 | 28 | 1 | Deadlock in postToolUse hook, Windows compatibility | Medium — limited recent PR activity |
| **Kimi Code CLI** | 0 | 9 | 3 | Windows crash (v1.41.0), Claude Code parity | Medium — small but active community |
| **OpenCode** | 2 (v1.14.32, v1.14.33) | 50 | 20+ | Async sub-agent delegation, streaming toggle | Very High — highest PR throughput |
| **Qwen Code** | 1 (nightly) | 11 | 30 | API retry logic, provider compatibility | High — strong release cadence |
| **Pi** | 1 (v0.72.1 patch) | 37+ closed | 10+ | Keyboard handling, internationalization, provider expansion | High — rapid bug closure rate |

**Key observation:** OpenCode leads in PR throughput (20+ in 24h), while Claude Code leads in community engagement volume. Pi and Qwen Code maintain the most active release cadence with patches and nightlies.

---

## 3. Shared Feature Directions

The following requirements appear across three or more tool communities, indicating ecosystem-wide demand:

| Feature Direction | Tools Citing | Specific Needs |
|-------------------|-------------|----------------|
| **Windows Platform Parity** | Codex, Gemini CLI, Copilot CLI, Kimi Code, OpenCode | Browser Use failures, path completion crashes, shell execution hangs, elevated sandbox issues |
| **Claude Code Parity / Feature Copying** | Kimi Code, Pi, Copilot CLI | Configurable statuslines, usage displays, session branching, nested skill discovery |
| **Agent Reliability & Safety** | Claude Code, Gemini CLI, Copilot CLI, OpenCode | Subagent permission bypass, MAX_TURNS recovery, indefinite session loops, hook deadlocks |
| **MCP (Model Context Protocol) Enhancements** | Claude Code, Copilot CLI, Gemini CLI, Kimi Code | Lazy-loading schemas, resource subscriptions, disable/enable UX, configuration persistence |
| **Billing / Quota Transparency** | Claude Code, Kimi Code, OpenCode | Dual quota systems, credit balance errors, plan tier visibility, usage tracking |
| **Session Management** | Claude Code, Copilot CLI, Gemini CLI, OpenCode | Branching/forking, undo/redo, session recovery, phantom locks |
| **Retry / Error Handling** | Qwen Code, Claude Code, OpenCode | Exponential backoff, error classification, transport failure vs deterministic errors |
| **International Keyboard Support** | Pi, Copilot CLI, OpenCode | Non-Latin layouts, Ctrl shortcuts, accented characters, Kitty Protocol edge cases |
| **Provider / Model Compatibility** | Qwen Code, Pi, Claude Code, OpenCode | DeepSeek v4 Pro, Kimi K2.5/K2.6, Xiaomi MiMo, regional token plans |

---

## 4. Differentiation Analysis

| Tool | Primary Differentiator | Target User | Technical Approach |
|------|----------------------|-------------|-------------------|
| **Claude Code** | Anthropic-native integration, Max subscription model | Developers deeply invested in Anthropic ecosystem | Tool-call-first architecture, HERMES.md billing triggers |
| **OpenAI Codex** | OpenAI model variety, service tier flexibility | Enterprise users needing model selection and compliance | Dynamic service tiers from model metadata, hook-based permission system |
| **Gemini CLI** | Google Cloud / Vertex integration, quota preservation | GCP users, cost-sensitive deployments | Flash-lite for utility models, Vertex location overrides |
| **Copilot CLI** | GitHub ecosystem tight integration | GitHub Copilot subscribers, enterprise GitHub users | ACP protocol, JetBrains/Zed client support, agent mode |
| **Kimi Code CLI** | Claude Code parity, Moonshot AI models | Chinese market, Claude Code migrants | Nested skill discovery, Claude Code-style statuslines |
| **OpenCode** | Open-source, multi-provider, Effect-based architecture | Power users, self-hosters, provider-agnostic workflows | Effect-based CLI architecture, 20+ PRs per day, aggressive refactoring |
| **Qwen Code** | Qwen/Alibaba integration, Python SDK infrastructure | Qwen users, Python-centric developers | Python SDK release automation, provider-agnostic retry logic |
| **Pi** | Lightweight, extension ecosystem, international support | Daily-driver CLI users, non-English keyboard users | Kitty Keyboard Protocol, TypeBox validation, extension function tables |

**Strategic positioning:** Claude Code and OpenAI Codex target enterprise and subscription-based revenue models. Gemini CLI anchors Google Cloud adoption. OpenCode differentiates as the open-source, provider-agnostic alternative. Qwen Code and Kimi Code serve the Chinese developer market with local model integration. Pi targets the daily-driver CLI user with strong international keyboard support.

---

## 5. Community Momentum & Maturity

| Tool | Maturity Signal | Momentum Assessment |
|------|----------------|---------------------|
| **Claude Code** | Mature — 2,100+ combined comments on top issues, established subscription model | **Very High** — massive community, but crisis mode on billing |
| **OpenAI Codex** | Mature — structured service tiers, desktop attestation, hook system | **High** — active Windows platform push, strong PR pipeline |
| **Gemini CLI** | Maturing — P1/P2 issue labeling, structured roadmaps | **High** — infrastructure hardening, quota management focus |
| **Copilot CLI** | Mature — established plugin system, stable API | **Medium** — limited recent PR activity, stability-focused |
| **Kimi Code CLI** | Early — v1.41.0 with reported regressions | **Medium** — small community, active feature parity push |
| **OpenCode** | Rapidly maturing — Effect-based architecture, 20+ PRs/day | **Very High** — highest throughput, aggressive modernization |
| **Qwen Code** | Maturing — nightly releases, Python SDK infrastructure | **High** — strong release cadence, provider compatibility focus |
| **Pi** | Maturing — v0.72.x with patch releases, international focus | **High** — rapid bug closure, provider expansion |

**Bottom line:** OpenCode shows the highest iteration velocity. Claude Code has the most engaged community by volume but is managing a billing crisis. Gemini CLI and Qwen Code are rapidly maturing with strong release cadences. Copilot CLI appears to be in a maintenance phase with limited new feature development.

---

## 6. Trend Signals

The following signals from community feedback carry strategic weight for developers and decision-makers:

### 6.1 Windows Is the New Battleground
Five of eight tools report significant Windows-specific issues: Browser Use failures (Codex, Copilot CLI), shell execution hangs (Gemini CLI, Kimi Code), path completion crashes (Kimi Code), and elevated sandbox issues (Copilot CLI). The ecosystem is collectively investing in Windows parity, suggesting this platform will become a competitive differentiator in 2026.

### 6.2 Billing and Quota Management Are Critical UX
Claude Code's community has generated 2,100+ comments on Max plan billing issues in a single cycle. Kimi Code and OpenCode both have open issues about confusing dual-quota systems. This signals that **transparency in usage tracking and cost management is a top user priority**, and tools that nail this UX will differentiate significantly.

### 6.3 Agent Reliability Is the Next Frontier
Subagent permission bypass (Claude Code, Gemini CLI), indefinite session loops (Copilot CLI, Gemini CLI), hook deadlocks (Copilot CLI), and MAX_TURNS recovery failures (Gemini CLI) indicate that **multi-agent architectures are outpacing reliability infrastructure**. Teams building agentic CLI tools should prioritize permission systems, turn limit handling, and session isolation.

### 6.4 Claude Code Is the De Facto Design Reference
Kimi Code explicitly requests "Claude Code-style configurable statuslines" and nested skill discovery. Pi cites Claude Code as a comparison point for usage displays. OpenCode's streaming toggle request references Claude Code behavior. **Anthropic's CLI has become the UX benchmark** that other tools are racing to match or differentiate from.

### 6.5 Provider Diversification Is Accelerating
Qwen Code and Pi are both adding Xiaomi MiMo, Together AI, and regional token plan variants. OpenCode supports 20+ providers. This reflects **user demand for provider-agnostic tooling** that can switch models without workflow disruption, and suggests that tools locked to a single provider will face increasing pressure.

### 6.6 International Keyboard Support Is a Gap
Pi, Copilot CLI, and OpenCode all report issues with non-Latin keyboard layouts (Italian, French BÉPO, Ukrainian, Hangul). This is a **systematic gap** affecting a significant portion of global developers, and tools that prioritize keyboard protocol compliance will capture underserved markets.

### 6.7 Hook and Permission Systems Are Maturing
OpenAI Codex, Copilot CLI, and Gemini CLI are all investing in PreToolUse hooks, permission decision frameworks, and session-scoped approval persistence. This indicates **a convergence toward standardized extension and permission APIs**, which will enable a richer plugin ecosystem and safer agent behaviors.

---

*Report synthesized from individual tool digests for 2026-05-03. Data sourced from GitHub activity across all eight repositories.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest

**Date:** 2026-05-03
**Source:** github.com/anthropics/claude-code

---

## 1. Today's Highlights

The Claude Code community continues to grapple with **billing and subscription management issues**, as two critical Max plan bugs (#16157, #38335) have accumulated over 2,100 combined comments from frustrated users reporting unexpectedly rapid quota exhaustion. A recently closed issue (#53262) identified that the string "HERMES.md" in git commit history silently routes API requests to extra usage billing—a $200 surprise for affected Max subscribers. Meanwhile, the project sees continued plugin ecosystem growth with new remote-control and skill library contributions merged this cycle.

---

## 2. Releases

**No new releases in the last 24 hours.**

---

## 3. Hot Issues

| # | Title | Author | Comments | 👍 | Why It Matters |
|---|-------|--------|----------|----|----------------|
| [#16157](https://github.com/anthropics/claude-code/issues/16157) | [BUG] Instantly hitting usage limits with Max subscription | @deqrocks | 1,463 | 689 | **Highest-impact issue** — Users on Max plans report immediate rate limiting despite substantial included quotas. Community suspects billing system miscalculation or plan tier routing bugs. |
| [#38335](https://github.com/anthropics/claude-code/issues/38335) | [BUG] Claude Max plan session limits exhausted abnormally fast since March 23, 2026 | @karenrebecag | 675 | 449 | Corroborates #16157 with a specific date correlation (March 23), suggesting a server-side change triggered widespread quota miscalculation. |
| [#53262](https://github.com/anthropics/claude-code/issues/53262) | HERMES.md in git commit messages causes requests to route to extra usage billing | @sasha-id | 91 | 193 | **Closed with fix potential** — Demonstrates a subtle but costly bug where a common filename pattern triggers billing misrouting, burning $200 in credits. |
| [#13480](https://github.com/anthropics/claude-code/issues/13480) | [BUG] Oversized image breaks conversation permanently | @precisionpete | 86 | 82 | **UX severity** — Images exceeding size limits permanently corrupt conversation state with no recovery path, forcing users to abandon sessions. |
| [#54839](https://github.com/anthropics/claude-code/issues/54839) | [Bug] Anthropic API Error: credit_balance_too_low despite sufficient account credits | @ndconsulting | 27 | 10 | API returns 400 errors even when workspace shows $105 available balance and no spend limits active—blocks all API usage. |
| [#17888](https://github.com/anthropics/claude-code/issues/17888) | [BUG] An error occurred while executing Claude Code | @leonard-henriquez | 16 | 5 | Generic error message masks root cause; high community interest suggests widespread occurrence. |
| [#36411](https://github.com/anthropics/claude-code/issues/36411) | Telegram MCP plugin: inbound notifications never delivered | @jmercado1986 | 15 | 14 | MCP integration gap—outbound works but inbound event delivery fails silently, limiting automation workflows. |
| [#53133](https://github.com/anthropics/claude-code/issues/53133) | Every command retries up to 10 times on Windows | @zeronight3301 | 10 | 0 | Windows-specific retry storm blocks all user input; 10-attempt retry loop indicates network or handshake failure. |
| [#37436](https://github.com/anthropics/claude-code/issues/37436) | MAX100 subscription - abnormal quota consumption and rate_limit_error with multi-session | @sinjaeya | 10 | 3 | Multi-session usage on MAX100 plan triggers 5-hour quota exhaustion and rate limiting—affects power users. |
| [#46465](https://github.com/anthropics/claude-code/issues/46465) | Harness-emitted `<system-reminder>` uses "NEVER mention this reminder" phrasing indistinguishable from prompt injection | @Studnicky | 5 | 0 | **Security concern** — Internal harness instructions mimic prompt injection signatures, potentially confusing security tooling. |

---

## 4. Key PR Progress

| # | Title | Author | Status | Summary |
|---|-------|--------|--------|---------|
| [#55484](https://github.com/anthropics/claude-code/pull/55484) | Claude/dashboard improvements se h7a | @cvidge | Closed | Dashboard UI enhancements; merged this cycle. |
| [#41447](https://github.com/anthropics/claude-code/pull/41447) | feat: open source claude code ✨ | @gameroman | Open | Ambitious proposal to open-source the project; references closure of multiple issues (#59, #456, #2846, #22002, #41434). |
| [#20448](https://github.com/anthropics/claude-code/pull/20448) | Add web4-governance plugin for AI governance with R6 workflow | @dp-web4 | Open | Introduces cryptographic provenance and audit trail capabilities via T3 trust tensors for enterprise governance needs. |
| [#36594](https://github.com/anthropics/claude-code/pull/36594) | feat(plugins): add remote-control plugin for guided setup and launch | @ghost | Closed | New `/remote-control` command with diagnostics, session naming, and browser/mobile connection guidance. |
| [#36592](https://github.com/anthropics/claude-code/pull/36592) | Add comprehensive skill library across three new plugins | @ghost | Closed | 20+ skills across API development, document processing, and example implementations in three plugin packages. |
| [#36562](https://github.com/anthropics/claude-code/pull/36562) | Add CLAUDE_CODE_GIT_BASH_PATH environment variable for Windows | @ghost | Closed | Enables non-standard Git Bash installation paths on Windows via new env var configuration. |
| [#46025](https://github.com/anthropics/claude-code/pull/46025) | docs: add Linux subprocess isolation and CLAUDE_CODE_SCRIPT_CAPS docs | @Christian-Sidak | Closed | Documentation for Linux PID namespace isolation, `CLAUDE_CODE_SCRIPT_CAPS` env var, and hardened subprocess settings. |
| [#55490](https://github.com/anthropics/claude-code/pull/55490) | examples/hooks: add snap_pack_on_stop.py for auto-pack on session end | @achiii800 | Open | Adds `Stop` hook that auto-saves session JSONL to portable `.snap.jsonl` artifacts at configurable paths. |

---

## 5. Feature Request Trends

Analysis of open issues reveals these dominant feature directions:

| Trend | Evidence | Issue(s) |
|-------|----------|----------|
| **MCP UI/UX improvements** | Requests for collapsible tool result output, visible MCP tool arguments | [#55696](https://github.com/anthropics/claude-code/issues/55696) |
| **Billing transparency** | Users demand clearer quota tracking, spend visibility, and plan limit warnings | [#16157](https://github.com/anthropics/claude-code/issues/16157), [#38335](https://github.com/anthropics/claude-code/issues/38335) |
| **Cross-platform parity** | Windows-specific bugs (retry loops, streaming stalls) highlight platform gaps | [#53133](https://github.com/anthropics/claude-code/issues/53133), [#55681](https://github.com/anthropics/claude-code/issues/55681) |
| **Claude Desktop integration** | Requests to share settings between CLI and Desktop, unified experience | [#52679](https://github.com/anthropics/claude-code/issues/52679) |
| **Token usage controls** | Feature request to disable token consumption during thinking/cogitating phases | [#55618](https://github.com/anthropics/claude-code/issues/55618) |
| **Session recovery** | Better handling of conversation state corruption, oversized input recovery | [#13480](https://github.com/anthropics/claude-code/issues/13480), [#42264](https://github.com/anthropics/claude-code/issues/42264) |

---

## 6. Developer Pain Points

**Billing & Quota Management (Critical)**
The most significant community frustration centers on Max subscription billing. Users report:
- Quotas exhausting in hours instead of days/months
- API errors (`credit_balance_too_low`) despite visible account credits
- Silent routing to extra usage billing triggered by unexpected conditions (e.g., "HERMES.md" in commits)
- Multi-session usage triggering disproportionate quota consumption

**Platform Reliability**
- Windows users experience retry storms (10-attempt loops) blocking all interaction
- macOS users face renderer crashes (`SIGTRAP`) and memory scoping issues
- Linux subprocess isolation behavior differs from macOS in memory management

**MCP Integration Gaps**
- Telegram plugin inbound notifications fail silently
- HTTP transport strips configured path components
- Working directory not updating on shell `cd` commands within MCP sessions

**Core UX Issues**
- Oversized images permanently corrupt conversation state
- Generic error messages ("An error occurred while executing") provide no actionable debugging info
- Claude ignores explicit "do not act" instructions, performing unwanted file edits

**Performance Concerns**
- `tree-kill` dependency causes `pgrep` storms and 100% CPU on macOS
- 8-hour sessions wasted on TPU iteration loops that device probes could resolve quickly

---

*End of digest. Data sourced from GitHub activity on 2026-05-03.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest

**Date:** 2026-05-03
**Source:** github.com/openai/codex

---

## 1. Today's Highlights

The community continues to push for expanded context windows, with issue #19464 (1M token support for GPT-5.5) generating 112 comments and 141 👍 reactions. Windows platform issues dominate the bug reports, particularly around Browser Use and app-server functionality. On the PR side, significant work is underway to implement structured service tiers and enhance the TUI with responsive Markdown rendering and raw scrollback mode.

---

## 2. Releases

**No new releases in the last 24 hours.**

The latest stable release remains **v0.128.0**, with alpha builds at v0.128.0-alpha.1 circulating for testing.

---

## 3. Hot Issues

| # | Issue | Comments | 👍 | Why It Matters |
|---|-------|----------|----|----------------|
| **#19464** | [Support 1M token context for GPT-5.5 in Codex](https://github.com/openai/codex/issues/19464) | 112 | 141 | The community strongly desires the full 1M token context that GPT-5.5 supports via API, but Codex currently caps at 400K. This is the highest-engagement issue, indicating widespread demand for enterprise-scale context handling. |
| **#20161** | [Codex requires phone number on device switch](https://github.com/openai/codex/issues/20161) | 35 | 30 | Users report being locked out when switching devices, with SSO login triggering unexpected phone verification. This auth flow regression affects user accessibility across multiple devices. |
| **#8259** | [Format Markdown tables for human readability](https://github.com/openai/codex/issues/8259) | 25 | 98 | Markdown tables generated by Codex have whitespace alignment issues, making output difficult to read. High 👍 count suggests this UX issue impacts many users regularly. |
| **#20591** | [`/goal` slash command broken in v0.128.0](https://github.com/openai/codex/issues/20591) | 21 | 3 | A regression in the latest version breaks the `/goal` command, preventing users from setting session objectives. Affects Pro subscribers on Darwin. |
| **#10090** | [Windows elevated sandbox causing agent failures](https://github.com/openai/codex/issues/10090) | 16 | 6 | `elevated_windows_sandbox` causes all agent commands to fail with `CreateProcessAsUserW failed: 5` on Windows Business tier. Blocks automated workflows for enterprise users. |
| **#17827** | [Customizable status line](https://github.com/openai/codex/issues/17827) | 12 | 16 | Request to add a Claude Code-style customizable status line showing token usage, model name, git branch, etc. Directly compares Codex unfavorably to competitors. |
| **#20048** | [Windows Browser Use fails to start app-server](https://github.com/openai/codex/issues/20048) | 9 | 3 | The desktop Browser Use feature fails to initialize on Windows despite the CLI working correctly. Multiple related Windows Browser Use issues indicate systemic platform support gaps. |
| **#19365** | [Windows Browser Use: Node REPL tool not exposed](https://github.com/openai/codex/issues/19365) | 6 | 9 | Browser Use unavailable on Windows because the Node REPL tool isn't exposed to the app-server, blocking browser automation workflows. |
| **#20206** | [Browser Use fails with os error 3](https://github.com/openai/codex/issues/20206) | 6 | 0 | Path resolution failure (`Das System kann den angegebenen Pfad nicht finden`) prevents Browser Use from starting the app-server on Windows. |
| **#20214** | [Codex App freezes on Windows 11 Pro](https://github.com/openai/codex/issues/20214) | 6 | 5 | Frequent UI freezes/stutters despite sufficient system resources (Ryzen 5 5600, 32GB RAM). Impacts productivity for Windows power users. |

---

## 4. Key PR Progress

| # | PR | Status | Summary |
|---|-----|--------|---------|
| **#20252** | [Render responsive Markdown tables in TUI](https://github.com/openai/codex/pull/20252) | OPEN | Adds width-sensitive Markdown table rendering that preserves raw source for re-rendering after terminal resizes. Addresses issue #8259. |
| **#20824** | [Drive TUI service-tier commands from model metadata](https://github.com/openai/codex/pull/20824) | OPEN | Builds slash commands dynamically from model `serviceTiers` metadata instead of hardcoded variants, enabling flexible tier selection. |
| **#20822** | [Use structured service tiers across core and app-server](https://github.com/openai/codex/pull/20822) | OPEN | Adds `ModelServiceTier` metadata to shared model info, presets, and app-server payloads. Standardizes tier representation across the stack. |
| **#20702** | [Support PreToolUse permissionDecision allow/ask](https://github.com/openai/codex/pull/20702) | OPEN | Extends PreToolUse hooks to allow steering permission boundaries with `allow` or `ask` outcomes, not just `deny`. |
| **#20823** | [Expose structured service tiers in app-server](https://github.com/openai/codex/pull/20823) | CLOSED | Adds `serviceTiers` array to app-server `model/list` payloads; deprecates `additionalSpeedTiers`. |
| **#20744** | [Fix flaky request_permissions test](https://github.com/openai/codex/pull/20744) | OPEN | Resolves nondeterminism in `approved_folder_write_request_permissions_unblocks_later_apply_patch` test on macOS. |
| **#20812** | [Use backend service-tier metadata in app-server and TUI](https://github.com/openai/codex/pull/20812) | CLOSED | Aligns app-server and TUI with backend's real selectable tiers, replacing legacy hardcoded `/fast` command. |
| **#20619** | [Request desktop attestation from app](https://github.com/openai/codex/pull/20619) | OPEN | Implements v2 `attestation/generate` server request and desktop app integration for protected ChatGPT Codex requests. |
| **#20825** | [Read cached metadata for installed Git plugins](https://github.com/openai/codex/pull/20825) | OPEN | Populates `plugin/list` metadata for Git-sourced marketplace plugins from cached bundles. |
| **#20819** | [Add raw scrollback mode](https://github.com/openai/codex/pull/20819) | OPEN | Enables granular copy functionality by providing raw scrollback access, solving paragraph-copy issues. |

---

## 5. Feature Request Trends

Analysis of 50 recent issues reveals these dominant feature directions:

1. **Expanded Context Windows** — Strong demand for 1M token support (#19464) and larger context handling for complex codebase analysis.

2. **Windows Platform Parity** — Browser Use, Computer Use, and app-server features are consistently broken on Windows. Multiple issues (#20048, #19365, #20206, #19450, #19305) request full feature parity with macOS.

3. **TUI Enhancements** — Customizable status lines (#17827), readable Markdown tables (#8259), raw scrollback (#20819), improved keymap coverage (#20798), and in-session profile switching (#20635).

4. **Hook & Permission System** — Multiple PRs (#20702, #20692, #20756, #20733, #20321) indicate significant investment in extending PreToolUse hooks and centralizing approval prompts.

5. **Service Tier Flexibility** — Structured service tiers (#20822, #20824) will replace hardcoded speed commands, enabling dynamic tier selection based on model capabilities.

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **Windows Browser Use broken** | 8+ related issues | Blocks browser automation workflows; app-server fails to start with path errors |
| **Auth/phone verification issues** | 2+ issues | Locks users out when switching devices or using SSO |
| **UI freezes on Windows/macOS** | 3+ issues | Causes productivity loss; affects desktop app users |
| **Regression in v0.128.0** | 1 issue (`/goal` broken) | Latest release introduces functional breakage |
| **Flaky tests** | 1 PR fix | Unreliable test suite delays development confidence |
| **Rate limit UI inconsistent** | 1 issue | Developers can't reliably monitor usage/limits |

**Bottom line:** Windows platform support remains the most significant pain point, with Browser Use and app-server functionality consistently failing. The team is actively addressing this through multiple PRs. Meanwhile, the community strongly desires expanded context windows and richer TUI customization options.

---

*Generated: 2026-05-03 | Data refresh: last 24h*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-03

## Today's Highlights

The community is actively addressing critical agent reliability issues, with two P1 bugs receiving attention: subagent recovery after MAX_TURNS reporting false success (#22323) and subagents running without permission since v0.33.0 (#22093). On the infrastructure side, proxy support is being restored via externalization of `https-proxy-agent` (#26361), and a significant quota preservation fix using flash-lite for utility models has been merged (#25684).

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

| # | Issue | Priority | Comments | Why It Matters |
|---|-------|----------|----------|----------------|
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | [Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353) | P1 | 5 | Epic to expand behavioral eval tests from 76 to broader coverage; critical for regression prevention |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | [Assess AST-aware file reads, search, mapping](https://github.com/google-gemini/gemini-cli/issues/22745) | — | 5 | Investigating precision improvements for method-bound reads and codebase navigation |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | [Subagent recovery after MAX_TURNS reports GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323) | P1 | 4 | **Bug**: Subagents report success despite hitting turn limits, hiding interruptions from users |
| [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) | [Permission asked repeatedly for same file](https://github.com/google-gemini/gemini-cli/issues/24916) | — | 3 | **UX/Security**: "Allow for all future sessions" fails to persist; users blocked by repeated prompts |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | [Shell command stuck with "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166) | — | 2 | **Bug**: CLI hangs after simple shell commands complete; blocks workflow productivity |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | [Model creates tmp scripts in random spots](https://github.com/google-gemini/gemini-cli/issues/23571) | P2 | 2 | Model generates scattered edit scripts when shell execution is restricted; creates cleanup overhead |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | [Browser Agent ignores settings.json overrides](https://github.com/google-gemini/gemini-cli/issues/22267) | P2 | 2 | **Bug**: Browser agent doesn't respect `maxTurns` or other config overrides; AgentRegistry merging fails |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | [400 error with >128 tools](https://github.com/google-gemini/gemini-cli/issues/24246) | — | 1 | API limitation causes failures when >400 tools available; needs smarter tool scoping |
| [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) | [Subagents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093) | P1 | 1 | **Security**: Agents mode disabled but subagents still activate; unexpected behavior post-update |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) | [Memory routing: global vs. project](https://github.com/google-gemini/gemini-cli/issues/22819) | — | 1 | Feature request to separate `~/.gemini/` (user preferences) from `.gemini/` (project-specific) memory |

---

## Key PR Progress

| # | PR | Priority | Status | Summary |
|---|-----|----------|--------|---------|
| [#26361](https://github.com/google-gemini/gemini-cli/pull/26361) | [Externalize https-proxy-agent for proxy support](https://github.com/google-gemini/gemini-cli/pull/26361) | P1 | OPEN | Fixes `TypeError: HttpsProxyAgent is not a constructor` by externalizing from esbuild bundle |
| [#25684](https://github.com/google-gemini/gemini-cli/pull/25684) | [Use flash-lite for utility model configs](https://github.com/google-gemini/gemini-cli/pull/25684) | — | OPEN | Preserves quota by switching internal tools to 3.1 flash-lite; mitigates infinite rate-limit loops |
| [#25362](https://github.com/google-gemini/gemini-cli/pull/25362) | [Add vertexLocation config for region override](https://github.com/google-gemini/gemini-cli/pull/25362) | — | OPEN | Enables Vertex AI users to use preview models available in `global` region instead of `us-central1` |
| [#26387](https://github.com/google-gemini/gemini-cli/pull/26387) | [System ripgrep fallback when bundled binary missing](https://github.com/google-gemini/gemini-cli/pull/26387) | — | OPEN | Detects and uses system-installed ripgrep when vendor binaries unavailable in NPM tarballs |
| [#25947](https://github.com/google-gemini/gemini-cli/pull/25947) | [Versioned pre-write backups with agent-driven restore](https://github.com/google-gemini/gemini-cli/pull/25947) | P2 | OPEN | Introduces session-scoped transactional file operations to prevent destructive modification loops |
| [#26374](https://github.com/google-gemini/gemini-cli/pull/26374) | [Optimize performance/memory for large chats](https://github.com/google-gemini/gemini-cli/pull/26374) | — | CLOSED | Refactored `MainContent` with `React.memo`; addresses input lag, slow loading, memory exhaustion for 1000+ messages |
| [#26383](https://github.com/google-gemini/gemini-cli/pull/26383) | [Enforce rate limiting in fallback fetch](https://github.com/google-gemini/gemini-cli/pull/26383) | — | CLOSED | Ensures rate limiting applies uniformly across primary and fallback web fetch paths |
| [#26332](https://github.com/google-gemini/gemini-cli/pull/26332) | [Resolve ACP agent mode disconnect](https://github.com/google-gemini/gemini-cli/pull/26332) | — | CLOSED | Fixes disconnect between JetBrains/Zed clients and agent regarding mode changes (Plan/Default/YOLO/Auto-Edit) |
| [#25072](https://github.com/google-gemini/gemini-cli/pull/25072) | [Favorite models and model cycling](https://github.com/google-gemini/gemini-cli/pull/25072) | P3 | OPEN | Adds `model.favorites` setting and keyboard shortcuts to cycle through preferred models |
| [#26324](https://github.com/google-gemini/gemini-cli/pull/26324) | [Prevent ghost text wrapping infinite loop](https://github.com/google-gemini/gemini-cli/pull/26324) | P2 | OPEN | Fixes CLI hang when wrapping long prompt-completion ghost text with zero-width terminals |

---

## Feature Request Trends

Analysis of open issues reveals these dominant feature directions:

1. **Agent Reliability & Safety**
   - Subagent behavior control (recovery, permissions, turn limits)
   - Destructive operation safeguards (git reset --force, file overwrites)
   - Memory management (global vs. project routing, proactive writes)

2. **Tool Intelligence**
   - AST-aware file operations for precise method-bound reads
   - Better tool scoping to avoid 400 errors with large tool counts
   - MCP schema compatibility improvements

3. **User Experience**
   - Persistent permission settings
   - Favorite models and keyboard-driven model cycling
   - SSH-aware behavior adjustments

4. **Performance & Scalability**
   - Large chat session handling (1000+ messages)
   - Streaming optimization (table rendering, scroll behavior)
   - Quota management for utility models

---

## Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **Shell execution hangs** | High | CLI becomes unresponsive after simple commands; requires manual intervention |
| **Permission prompts don't persist** | High | Users repeatedly asked for same file access despite "allow for all" selection |
| **Subagent permission bypass** | High | Agents activate unexpectedly despite being disabled in config |
| **Browser agent ignores settings** | Medium | `settings.json` overrides (e.g., `maxTurns`) have no effect on browser agent |
| **Quota exhaustion blocks CLI** | Medium | Utility model quota depletion makes entire CLI unusable |
| **Scroll/UI glitches in long chats** | Medium | Screen flashes and scrollbar jumps during navigation |
| **Tmp script sprawl** | Medium | Model creates cleanup overhead when shell access restricted |
| **SSH text scrambling** | Low | Gemini CLI unusable over SSH sessions on Windows→Linux |

---

*Generated from [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) — 2026-05-03*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – 2026-05-03**

---

### 1. Today's Highlights
The Copilot CLI community faces critical stability and compatibility challenges. A severe deadlock issue in the `postToolUse` hook (issue #3084) causes processes to spin at 99% CPU, while Windows 11 users are blocked by hardcoded `pwsh.exe` references (issue #1680). On the feature front, a new PR (#3075) aims to improve the feature request template, and session management enhancements (branching, forking) continue to gain traction.

---

### 2. Releases
No new releases in the last 24 hours. The latest stable version remains v1.0.40 (as referenced in recent issues).

---

### 3. Hot Issues
The following 10 issues are noteworthy due to impact, community engagement, or severity:

1. **[#3084](https://github.com/github/copilot-cli/issues/3084) – postToolUse hook deadlocks after write-permission request**
   *Area: permissions, plugins*
   A critical deadlock occurs when the `postToolUse` hook triggers a write-permission request, causing the process to spin at 99% CPU and ignore SIGTERM. This has been reported with 0 comments but high severity.
   **Why it matters:** Blocks workflow and consumes resources indefinitely.

2. **[#1680](https://github.com/github/copilot-cli/issues/1680) – pwsh.exe hardcoded, CLI unusable on Windows 11 with PowerShell 5.1**
   *Area: platform-windows, tools*
   The CLI fails to run on Windows machines with only PowerShell 5.1 due to hardcoded `pwsh.exe` references. This issue has 7 comments and 9 thumbs-up.
   **Why it matters:** Breaks the CLI for a significant Windows user segment.

3. **[#1590](https://github.com/github/copilot-cli/issues/1590) – Execution failed: Failed to get response from AI model (retried 5 times)**
   *Closed, but persistent*
   Long-running executions encounter repeated server errors, with 11 comments and 12 thumbs-up.
   **

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest

**Date:** 2026-05-03
**Source:** github.com/MoonshotAI/kimi-cli

---

## 1. Today's Highlights

The Kimi Code CLI community shows active development with a new PR addressing nested skill directory discovery (#2146), while Windows users report critical bugs in v1.41.0 including path completion crashes and image attachment failures. Feature requests are trending toward Claude Code parity—configurable statuslines, lazy-loaded MCP tool schemas, and improved API usage displays are gaining traction.

---

## 2. Releases

**No new releases in the last 24 hours.** The latest stable version remains v1.41.0, though users are reporting bugs with this version (see Hot Issues below).

---

## 3. Hot Issues

### [#2151](https://github.com/MoonshotAI/kimi-cli/issues/2151) — Critical: v1.41.0 Windows Crash on Path Completion
- **Author:** @weiq0482-dev | **Created/Updated:** 2026-05-03
- **Severity:** High — `NoneType` crash during path completion + broken image attachment transmission on Windows 10
- **Why it matters:** This is a fresh, uncommented bug report indicating a regression in the latest version affecting core functionality on Windows.
- **Impact:** Blocks basic CLI operations for Windows users.

### [#2091](https://github.com/MoonshotAI/kimi-cli/issues/2091) — Session Performance Degradation in v1.37.0
- **Author:** @proccl | **Created:** 2026-04-27 | **Updated:** 2026-05-02 | **Comments:** 2
- **Severity:** Medium — Specific sessions become extremely slow (seconds per token) after extensive MATLAB work
- **Why it matters:** Indicates a memory or state management leak that affects long-running sessions, while other sessions remain fast.
- **Community reaction:** 2 comments seeking reproduction steps; suggests session isolation issue.

### [#2040](https://github.com/MoonshotAI/kimi-cli/issues/2040) — VS Code Extension: Missing Approval Notifications
- **Author:** @taitoojp | **Created:** 2026-04-23 | **Updated:** 2026-05-03 | **Comments:** 5
- **Type:** Enhancement Request
- **Why it matters:** When using the VS Code Extension, approval dialogs appear inside the webview panel—if VS Code is minimized, users miss pending approvals entirely.
- **Community reaction:** 5 comments discussing implementation approaches; moderate interest in native VS Code notifications.

### [#1894](https://github.com/MoonshotAI/kimi-cli/issues/1894) — Nested Skill Directory Loading Incompatibility
- **Author:** @retamia | **Created:** 2026-04-15 | **Updated:** 2026-05-02 | **Comments:** 2 | 👍: 0
- **Type:** Enhancement (Feature Parity with Codex)
- **Why it matters:** Kimi CLI cannot discover skills in nested directories like `.agents/skills/{name}/skills/xxx`, while Codex supports this structure. This breaks compatibility for projects using Codex-style nested skill layouts.
- **Community reaction:** 2 comments; actively being addressed by PR #2146.

### [#2150](https://github.com/MoonshotAI/kimi-cli/issues/2150) — Confusing API Usage Display
- **Author:** @fishtvlvoe | **Created:** 2026-05-02 | **Comments:** 0
- **Type:** UX Improvement
- **Why it matters:** The `/usage` command shows two independent quota systems with inverted semantics and poor discoverability, confusing users migrating from Claude Code.
- **Community reaction:** Fresh report, no comments yet; addresses a known friction point for power users.

### [#2149](https://github.com/MoonshotAI/kimi-cli/issues/2149) — Request: Claude Code-Style Configurable Statusline
- **Author:** @fishtvlvoe | **Created:** 2026-05-02 | **Comments:** 0
- **Type:** Feature Request
- **Why it matters:** Requests a configurable status bar that displays runtime metadata (model, cost, tokens) after each interaction—mirroring Claude Code's `statusline` feature.
- **Community reaction:** Fresh report; indicates demand for Claude Code feature parity.

### [#2148](https://github.com/MoonshotAI/kimi-cli/issues/2148) — UserPromptSubmit Hook Receives Empty Prompt
- **Author:** @barrelc | **Created:** 2026-05-02 | **Comments:** 0
- **Type:** Bug
- **Why it matters:** When `user_input` is `list[ContentPart]`, the hook receives an empty prompt, breaking custom hook integrations.
- **Community reaction:** Fresh uncommented bug; affects users relying on the hook system for custom workflows.

### [#2147](https://github.com/MoonshotAI/kimi-cli/issues/2147) — Lazy-Load MCP Tool Schemas
- **Author:** @Evan-Kim2028 | **Created:** 2026-05-02 | **Comments:** 0
- **Type:** Feature Request
- **Why it matters:** Currently, all MCP tool schemas are injected into context at session start, consuming thousands of tokens before any user message. Lazy loading would significantly reduce context overhead.
- **Community reaction:** Fresh report; addresses a real scalability concern for users with multiple MCP servers.

### [#2145](https://github.com/MoonshotAI/kimi-cli/issues/2145) — Hooks Enhancement Request
- **Author:** @divakaran5005 | **Created:** 2026-05-02 | **Comments:** 0
- **Type:** Enhancement
- **Why it matters:** Requests granular permission controls for agent tools (e.g., different write/edit permissions per agent).
- **Community reaction:** Fresh report; indicates demand for more sophisticated hook/permission systems.

---

## 4. Key PR Progress

### [#2146](https://github.com/MoonshotAI/kimi-cli/pull/2146) — Recursively Discover Skills in Nested Subdirectories
- **Author:** @netwmr01 | **Status:** OPEN | **Updated:** 2026-05-03
- **Summary:** Implements `_discover_subdir_skills()` helper to find skills in nested layouts like `.agents/skills/cloudlive/skills/cloudlive-project-layout/SKILL.md`. Previously, `discover_skills()` only scanned immediate children.
- **Significance:** Directly addresses Issue #1894, bringing Kimi CLI to feature parity with Codex for nested skill structures.

### [#768](https://github.com/MoonshotAI/kimi-cli/pull/767) — Persist `approve_for_session` Per Session
- **Author:** @JessyTsui | **Status:** CLOSED | **Updated:** 2026-05-02
- **Summary:** Saves `auto_approve_actions` to a session-scoped state file (`approval_state.json`) and loads it on session restore, keeping auto-approval settings persistent across session resumes.
- **Significance:** Resolves Issue #765; improves session continuity for users relying on approval workflows.

### [#767](https://github.com/MoonshotAI/kimi-cli/pull/768) — Add Pseudo-CWD for Shell Mode
- **Author:** @JessyTsui | **Status:** CLOSED | **Updated:** 2026-05-02
- **Summary:** Shell mode now tracks a current directory, updates it on `cd`, and passes it as `cwd` when running subsequent shell commands—without changing the agent's workdir.
- **Significance:** Resolves Issue #766; makes shell usage feel consistent with standard terminal behavior.

---

## 5. Feature Request Trends

Analysis of recent issues reveals three dominant feature directions:

1. **Claude Code Parity** — Multiple requests (#2149, #2150) seek features that mirror Claude Code's functionality: configurable statuslines, clearer usage displays, and familiar UX patterns. This suggests a significant user segment is migrating from or comparing against Claude Code.

2. **MCP & Tooling Improvements** — Lazy-loading of MCP tool schemas (#2147) and granular hook permissions (#2145) indicate demand for better integration with external tools and more sophisticated automation controls.

3. **IDE/Extension Integration** — Requests for VS Code native notifications (#2040) and better nested skill discovery (#1894) show users want tighter IDE integration and Codex-compatible workflows.

---

## 6. Developer Pain Points

| Pain Point | Frequency | Evidence |
|------------|-----------|----------|
| **Windows-specific regressions** | High | #2151 (v1.41.0 crash), #2091 (session slowdown) |
| **Session state instability** | Medium | #2091 (memory/state leak), #2148 (hook receives empty prompt) |
| **Nested skill discovery** | Medium | #1894 (Codex incompatibility) |
| **Confusing API quota display** | Medium | #2150 (two systems, inverted semantics) |
| **MCP context overhead** | Medium | #2147 (thousands of tokens at session start) |

**Bottom line:** Windows users on v1.41.0 should be aware of the reported crash on path completion. The community is actively building Claude Code parity features, with nested skill discovery (#2146) now in PR review.

---

*End of digest. For questions or contributions, visit [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli).*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-03

## Today's Highlights

OpenCode shipped two releases in the last 24 hours (v1.14.32 and v1.14.33), addressing critical regressions in plugin agent loading and shell mode editability. The community is actively contributing to CLI refactoring efforts, with maintainer @kitlangton landing multiple Effect-based architecture changes, while several long-standing feature requests around streaming mode toggle and async sub-agent delegation continue gaining traction.

---

## Releases

### v1.14.33
**Core:** Fixed issue with custom agents in plugins not loading (regression from v1.14.32).
**Community Contributors:** @jerome-benoit, @OpeOginni, @HyeokjaeLee

### v1.14.32
**Core:** Shell mode in the prompt is now editable again (backspace, cursor movement, and other editing keys work as expected). Fixed HTTP API workspace adapters losing instance context, which could break workspace create, sync, and routing flows. Also addressed experimental workspace creation requests.

---

## Hot Issues

1. **[#23887](https://github.com/anomalyco/opencode/issues/23887)** — **[core][Bug] OpenCode Go + Kimi K2.6/K2.5 returns 'Provider returned error' on CLI 1.14.20**
   *35 comments, 6 👍*
   Users report that Kimi K2.6/K2.5 models consistently fail with "Provider returned error" while other models under the same OpenCode Go subscription work fine. This suggests a provider-specific compatibility issue that needs investigation.

2. **[#785](https://github.com/anomalyco/opencode/issues/785)** — **Is there a way to disable streaming mode?**
   *23 comments, 37 👍*
   A long-standing request for a streaming toggle, as some proxy providers (e.g., Credal OpenAI Proxy) don't support streaming. Users need this for broader provider compatibility.

3. **[#24418](https://github.com/anomalyco/opencode/issues/24418)** — **[bug, windows] CLI stuck on "Loading plugins..." screen on startup**
   *21 comments*
   Windows users experience intermittent hangs (~50% of startups) since v1.14.25, with no workaround other than killing the terminal. High impact on Windows workflow.

4. **[#14462](https://github.com/anomalyco/opencode/issues/14462)** — **[core][FEATURE] add roslyn-language-server as opt-in C# LSP alternative**
   *19 comments, 8 👍*
   Request to add Microsoft's official Roslyn-based C# LSP as an alternative to the community-maintained csharp-ls. Would improve C# support quality for enterprise users.

5. **[#5887](https://github.com/anomalyco/opencode/issues/5887)** — **[feat] True Async/Background Sub-Agent Delegation**
   *19 comments, 67 👍*
   Currently, sub-agent delegation blocks the primary flow. This highly-upvoted request (67 👍) asks for fire-and-forget delegation so agents can work in parallel without context switching.

6. **[#23928](https://github.com/anomalyco/opencode/issues/23928)** — **[bug, opentui, core] < or <= operators causing responses to get cut off**
   *17 comments*
   A recurring issue where AI responses are randomly truncated mid-output, potentially related to comparison operators in prompt rendering.

7. **[#22683](https://github.com/anomalyco/opencode/issues/22683)** — **[bug, opentui, perf] 1.4.6 constantly crashing**
   *17 comments*
   Users report frequent crashes after updating to v1.4.6, with memory-related errors. Affects stability for active sessions.

8. **[#15035](https://github.com/anomalyco/opencode/issues/15035)** — **[core] about agent-teams**
   *14 comments*
   Community inquiry about timeline for multi-agent team collaboration features, indicating demand for more advanced agent orchestration.

9. **[#4240](https://github.com/anomalyco/opencode/issues/4240)** — **[bug] acp, zed: does not support native changes review**
   *14 comments, 17 👍*
   Unlike Gemini CLI, OpenCode doesn't support native change review inside Zed editor. A fix is in progress via PR #22674.

10. **[#961](https://github.com/anomalyco/opencode/issues/961)** — **Termux support**
    *9 comments, 18 👍*
    Mobile/tablet users want to run OpenCode in Termux (Android Linux environment), expanding use cases beyond desktop.

---

## Key PR Progress

1. **[#25512](https://github.com/anomalyco/opencode/pull/25512)** — **refactor(cli): convert web + account to effectCmd**
   Converts `web` and `account` commands to the new Effect-based architecture with `instance: false` opt-out for lightweight execution.

2. **[#25513](https://github.com/anomalyco/opencode/pull/25513)** — **feat: support serving opencode from a subpath**
   Adds native `basePath` support so OpenCode can be served cleanly from subpaths like `/opencode`, enabling reverse proxy deployments.

3. **[#25511](https://github.com/anomalyco/opencode/pull/25511)** — **fix(session): detect empty tool args from gpt-5.5 and prevent abort loop**
   Addresses infinite abort loops when gpt-5.5 (and similar models) return empty/invalid tool arguments during streaming.

4. **[#25358](https://github.com/anomalyco/opencode/pull/25358)** — **Preserve workspace adapter context**
   Converts internal workspace adapters to Effect-native operations while keeping plugin adapters Promise-based, fixing HTTP API workspace creation context loss.

5. **[#25507](https://github.com/anomalyco/opencode/pull/25507)** — **feat(cli): add instance: false opt-out to effectCmd**
   Adds `instance: false` flag for commands that don't need full project state, reducing startup overhead by skipping InstanceBootstrap.

6. **[#25510](https://github.com/anomalyco/opencode/pull/25510)** — **feat(lifecycle): tie bootstrap fibers to instance scope**
   Bootstrap resources now live and die with their instance scope, improving resource management and cleanup.

7. **[#24512](https://github.com/anomalyco/opencode/pull/24512)** — **Refactor v2 session events as schemas**
   Reworks session events from schema classes to const schema definitions, adding shared prompt attachment schemas.

8. **[#25466](https://github.com/anomalyco/opencode/pull/25466)** — **fix(agent): initialize plugins before resolving config**
   Fixes plugin agent registration issues by reordering initialization—plugins now load before config resolution.

9. **[#23271](https://github.com/anomalyco/opencode/pull/23271)** — **fix(tui): defer --model validation until providers load**
   Fixes `--model` flag being rejected at startup because validation ran before provider metadata loaded.

10. **[#18767](https://github.com/anomalyco/opencode/pull/18767)** — **feat(app): Mobile Touch Optimization**
    Optimizes OpenCode App for mobile/touch devices while preserving desktop experience.

---

## Feature Request Trends

Analysis of open issues reveals these dominant feature directions:

| Theme | Examples | Demand Signal |
|-------|----------|---------------|
| **Async/Parallel Agent Execution** | #5887 (sub-agent delegation), #15035 (agent-teams) | 67+ 👍 combined, 33+ comments |
| **Provider Flexibility** | #785 (streaming toggle), #23887 (Kimi compatibility), #22132 (Ollama hangs) | 60+ 👍, 70+ comments |
| **LSP/Language Support** | #14462 (Roslyn C# LSP), #23566 (LSP docs clarification) | 8+ 👍, 26+ comments |
| **Platform Expansion** | #961 (Termux), #17749 (Windows network drives), #18767 (mobile UI) | 18+ 👍, 18+ comments |
| **Session Management** | #6548 (paginated loading), #23675 (resume blank), #4734 (manual model refresh) | 12+ 👍, 16+ comments |
| **Usage/Analytics** | #16017 (Go plan usage API), #9545 (usage tracking) | 18+ 👍, 14+ comments |

---

## Developer Pain Points

1. **Plugin Agent Registration Failures**
   Multiple reports (#25457, #25441, #25450) indicate third-party plugins' agents fail to register after v1.14.32, breaking workflows for users of plugins like `oh-my-opencode`.

2. **Windows Stability Issues**
   Recurring reports of CLI hangs on startup (#24418), excessive memory usage (#24449), and network mapping problems (#17749). Windows users experience a degraded experience compared to macOS/Linux.

3. **Streaming Mode Inflexibility**
   The inability to disable streaming (#785) blocks adoption with enterprise proxy providers that don't support it, forcing users to seek alternatives.

4. **Model Compatibility Gaps**
   Specific model combinations (Kimi K2.6/K2.5, local Ollama) fail or hang unpredictably, suggesting gaps in provider adapter testing.

5. **CLI Paste Behavior**
   macOS users report `cmd+v` pastes only the first letter (#25312), a regression affecting daily productivity.

6. **Session Resume Failures**
   Users on NixOS and other platforms report blank screens when attempting to resume saved sessions (#23675), losing work context.

---

*Digest generated from GitHub data for [anomalyco/opencode](https://github.com/anomalyco/opencode) on 2026-05-03.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-03

## Today's Highlights

The Qwen Code project advances with a new nightly release (v0.15.6-nightly.20260503) featuring a FileReadCache for improved read performance and proxy configuration fixes. The community addresses critical reliability improvements including DeepSeek v4 Pro compatibility, error handling refinements in non-interactive mode, and significant work on retry logic classification. Python SDK infrastructure sees substantial investment with new release automation and standardization efforts.

---

## Releases

### v0.15.6-nightly.20260503.5037fa762

**Key Changes:**

- **feat(core):** Introduced `FileReadCache` with short-circuit logic for unchanged file reads, reducing redundant I/O operations and improving session performance ([#3717](https://github.com/QwenLM/qwen-code/pull/3717))
- **fix(cli):** Proxy settings now properly honored across all CLI operations ([#3766](https://github.com/QwenLM/qwen-code/pull/3766))
- **chore:** Automated release versioning via CI bot

---

## Hot Issues

### 1. [P1] API Exponential Backoff & Fallback Retry [#3004](https://github.com/QwenLM/qwen-code/issues/3004)
**Status:** Open | Priority: P1 | Updated: 2026-05-02

**Why it matters:** Currently, only configurable retry counts exist without exponential backoff, model downgrade on 529 errors, or token refresh handling. This is a critical reliability gap for production deployments.

**Community reaction:** 2 comments, labeled `area:reliability`. Reference documentation on retry strategies available.

---

### 2. Background Task Management Roadmap [#3634](https://github.com/QwenLM/qwen-code/issues/3634)
**Status:** Open | Updated: 2026-05-02

**Why it matters:** Documents the multi-phase roadmap for background task management. Phase A (#3471, #3488) and Phase B (#3642) are merged, with follow-up work on `task_stop` shell integration (#3687) and combined dialog shells (#3720) completed.

**Community reaction:** 2 comments. Provides transparency on upcoming architectural changes.

---

### 3. Non-Interactive Mode Error Duplication [#3748](https://github.com/QwenLM/qwen-code/issues/3748)
**Status:** Closed | Updated: 2026-05-03

**Why it matters:** When running with `-p` flag against OpenAI-compatible endpoints, 4xx responses produced three stderr lines with double-wrapping and stack traces. This was a significant UX and debugging pain point.

**Community reaction:** Fixed via [#3749](https://github.com/QwenLM/qwen-code/pull/3749). Resolved the error pipeline to print exactly one clean line.

---

### 4. DeepSeek v4 Pro API Error 400 [#3772](https://github.com/QwenLM/qwen-code/issues/3772)
**Status:** Open | Updated: 2026-05-02

**Why it matters:** Multi-turn conversations fail with `reasoning_content in thinking mode must be passed back to the API` error. Related to [#3786](https://github.com/QwenLM/qwen-code/issues/3786) (also closed).

**Community reaction:** 1 comment. Affects users of MiMo-V2.5-Pro and DeepSeek v4 Pro models.

---

### 5. File System Directory Reading on Windows [#3789](https://github.com/QwenLM/qwen-code/issues/3789)
**Status:** Open | Updated: 2026-05-02

**Why it matters:** Under Sunflower remote desktop on Windows (win32 x64), file system directory reading fails entirely. Environment: Node.js v24.11.1, npm 11.6.2, Ali Cloud Coding Plan.

**Community reaction:** 1 comment. Platform-specific regression affecting remote work scenarios.

---

### 6. ACP Mode Thinking Language Inconsistency [#3787](https://github.com/QwenLM/qwen-code/issues/3787)
**Status:** Open | Updated: 2026-05-02

**Why it matters:** Model responses respect user's target language, but thinking process always uses English even when explicitly requested otherwise. Impacts multilingual workflows.

**Community reaction:** 0 comments. User experience issue for non-English speakers.

---

### 7. Python SDK Release Notes Inheritance [#3796](https://github.com/QwenLM/qwen-code/issues/3796)
**Status:** Open | Updated: 2026-05-02

**Why it matters:** Current workflow inherits previous release body verbatim, creating a linear chain where any planted content persists forever. Technical debt affecting release hygiene.

**Community reaction:** 0 comments. Maintenance improvement for Python SDK release process.

---

### 8. Shared Release Helper Duplication [#3795](https://github.com/QwenLM/qwen-code/issues/3795)
**Status:** Open | Updated: 2026-05-02

**Why it matters:** `isExpectedMissingGitHubRelease` function exists identically in three files across Python SDK, TypeScript SDK, and root scripts. Any `gh` error handling changes require triple updates.

**Community reaction:** 0 comments. Code duplication flagged for refactoring.

---

### 9. Network Timeout Gaps in Release Workflow [#3794](https://github.com/QwenLM/qwen-code/issues/3794)
**Status:** Open | Updated: 2026-05-02

**Why it matters:** `get-release-version.js` makes network calls via `fetch()` and `execSync('gh release view')` without timeouts. If APIs accept connections but never respond, workflows hang until 360-minute job timeout.

**Community reaction:** 0 comments. Reliability issue for CI/CD pipelines.

---

### 10. TAG_PREFIX Convention Inconsistency [#3793](https://github.com/QwenLM/qwen-code/issues/3793)
**Status:** Open | Updated: 2026-05-02

**Why it matters:** Python SDK uses `'sdk-python-'` (no trailing `v`) while TypeScript SDK uses `'sdk-typescript-v'` (with `v`). Callers handle this differently, creating maintenance confusion.

**Community reaction:** 0 comments. Standardization issue across SDKs.

---

## Key PR Progress

### 1. Support Reasoning Effort 'max' Tier (DeepSeek) [#3800](https://github.com/QwenLM/qwen-code/pull/3800)
**Author:** @wenshao | Status: Open

DeepSeek extended `reasoning_effort` with a `max` tier above `high`. This PR plumbs the new option end-to-end, allowing users to set `reasoning.effort: 'max'` in settings for maximum reasoning depth.

---

### 2. Replace fdir Crawler with git ls-files + ripgrep [#3214](https://github.com/QwenLM/qwen-code/pull/3214)
**Author:** @scrollDynasty | Status: Open

Replaces the fdir-based filesystem crawler for `@` file mention autocomplete with a two-tier strategy. Current fdir crawler re-scans entire directory trees on every keystroke (slow on large repos) and ignores `.gitignore`. Closes #3137.

---

### 3. Enforce Prior Read Before Edit/WriteFile [#3774](https://github.com/QwenLM/qwen-code/pull/3774)
**Author:** @wenshao | Status: Open

Building on PR #3717's FileReadCache, this PR enables verification that the model has actually seen a file's current bytes before mutating it. Prevents blind edits and improves safety.

---

### 4. Add /model list Subcommand [#3797](https://github.com/QwenLM/qwen-code/pull/3797)
**Author:** @B-A-M-N | Status: Open

Adds `/model list` subcommand that queries configured OpenAI-compatible `/models` endpoint and prints available model IDs in scriptable format. Uses active content generator config for `baseUrl` + `apiKey`.

---

### 5. Model Switching Non-Interactively [#3783](https://github.com/QwenLM/qwen-code/pull/3783)
**Author:** @alex-musick | Status: Open

Adds new syntax to the `/model` command for non-interactive model switching, enabling scripted and programmatic model selection.

---

### 6. Log Actual OpenAI Request Sent [#3767](https://github.com/QwenLM/qwen-code/pull/3767)
**Author:** @tanzhenxin | Status: Open

The `--openai-logging` decorator now records the exact request the OpenAI SDK was called with, instead of building a parallel reconstruction that silently dropped provider-injected fields like `extra_body`.

---

### 7. Parallelize Skill Loading + Path-Conditional Activation [#3604](https://github.com/QwenLM/qwen-code/pull/3604)
**Author:** @wenshao | Status: Open

Replaces three nested `for-await` loops in `SkillManager` with `Promise.all` for parallel execution. Adds path-conditional skill activation for more granular control.

---

### 8. Fix Non-Interactive Error Pipeline [#3749](https://github.com/QwenLM/qwen-code/pull/3749)
**Author:** @umut-polat | Status: Closed

Fixes the non-interactive (`-p`) error pipeline so upstream 4xx errors print exactly one cleanly-formatted line to stderr and exit with non-zero code, eliminating triple-printing and stack traces.

---

### 9. Classify Retryable vs Deterministic Errors [#3798](https://github.com/QwenLM/qwen-code/pull/3798)
**Author:** @B-A-M-N | Status: Open

Adds `classifyError()` to categorize errors without retrying deterministic request errors (400, 401, 403, 404, 422). Only retries transport/provider failures: 429, 408, 409, 500-599, and network errors.

---

### 10. Add Memory Diagnostics Doctor Command [#3785](https://github.com/QwenLM/qwen-code/pull/3785)
**Author:** @yiliang114 | Status: Open

Adds `/doctor memory` subcommand reporting point-in-time memory diagnostics snapshot. Includes `--json` flag for structured output suitable for issue reports and benchmark tooling.

---

## Feature Request Trends

Analysis of open issues reveals these dominant feature directions:

| Theme | Frequency | Examples |
|-------|-----------|----------|
| **Reliability & Retry Logic** | High | Exponential backoff (#3004), error classification (#3798), transport failure handling |
| **Model Provider Compatibility** | High | DeepSeek v4 Pro support (#3772, #3786), multi-provider robustness |
| **CLI/UX Improvements** | Medium | Non-interactive mode fixes (#3749), model switching (#3783), session management (#3190) |
| **SDK Standardization** | Medium | Release workflow improvements (#3685, #3793-#3796), Python SDK infrastructure |
| **Performance Optimization** | Medium | FileReadCache (#3717), fdir replacement (#3214), skill loading parallelization (#3604) |
| **Developer Experience** | Medium | Memory diagnostics (#3785), commit attribution (#3115), file path handling (#3743) |

---

## Developer Pain Points

1. **Error Handling Inconsistency:** Non-interactive mode produces confusing multi-line errors with stack traces. Fixed in latest PR but highlights need for consistent error pipelines across modes.

2. **Provider-Specific API Quirks:** DeepSeek v4 Pro's `thinking` mode requirements cause 400 errors in multi-turn conversations. Each provider has unique edge cases that require ongoing adaptation.

3. **Network Timeout Gaps:** Release workflows can hang indefinitely on unresponsive APIs. Critical for CI/CD reliability.

4. **File System Operations on Windows:** Remote desktop scenarios expose platform-specific failures in file reading operations.

5. **Multilingual UX Gaps:** ACP mode thinking process ignores user's language preference, forcing English-only internal reasoning.

6. **Code Duplication in Release Infrastructure:** Identical functions across Python/TypeScript SDKs create maintenance burden and synchronization risks.

7. **Large Repository Performance:** Current fdir crawler scans entire directory trees on every keystroke, causing latency in `@` file mention autocomplete.

---

*Digest generated from GitHub data for 2026-05-03. All issue and PR links reference https://github.com/QwenLM/qwen-code.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-03

## Today's Highlights

The v0.72.1 patch release addresses critical regressions including a session export bug and transport option handling in the OpenAI Codex provider. The community closed 37 issues in the last 24 hours, with keyboard handling across non-Latin layouts emerging as a major theme alongside multiple provider and model compatibility fixes.

---

## Releases

| Version | Summary |
|---------|---------|
| **v0.72.1** | Patch release resolving: session export (`/export`) not saving `.html` files correctly, transport field not honored in `openai-codex` provider, and Codex WebSocket transport preventing `--print` mode from exiting. |

---

## Hot Issues

1. **[#3259](https://github.com/badlogic/pi-mono/issues/3259)** — *Shift+Enter regression in Zellij* (16 comments)
   **Why it matters:** A key workflow shortcut broke after upgrading pi, but only inside Zellij terminal multiplexer. Community is actively debugging keybinding conflicts between pi and Zellij's input handling.

2. **[#4026](https://github.com/badlogic/pi-mono/issues/4026)** — *OpenAI Codex verbosity regression* (8 comments)
   **Why it matters:** Default `text.verbosity = "low"` causes GPT-5.3-Codex to emit commentary instead of tool calls, halting tasks mid-execution. High impact for automated coding workflows.

3. **[#1436](https://github.com/badlogic/pi-mono/issues/1436)** — *Auto-detect light/dark mode* (7 comments)
   **Why it matters:** Long-standing request for pi to follow system theme changes without restart. Community sees this as a quality-of-life essential for daily-driver usage.

4. **[#4046](https://github.com/badlogic/pi-mono/issues/4046)** — *Compaction deletes everything* (7 comments)
   **Why it matters:** Data loss risk. The compaction operation is silently wiping files, flagged as a critical data safety issue.

5. **[#4082](https://github.com/badlogic/pi-mono/issues/4082)** — *Xiaomi MiMo Token Plan support* (6 comments)
   **Why it matters:** Chinese regional endpoint returns 401 errors. Follow-up PR [#4112](https://github.com/badlogic/pi-mono/pull/4112) already addresses this by splitting provider into API-billing and token-plan regional variants.

6. **[#3780](https://github.com/badlogic/pi-mono/issues/3780)** — *Italian keyboard duplicate chars with Kitty Protocol* (5 comments)
   **Why it matters:** Kitty Keyboard Protocol flag 4 causes double-insertion on Italian layouts. Demonstrates ongoing keyboard protocol edge cases across locales.

7. **[#4086](https://github.com/badlogic/pi-mono/issues/4086)** — *Install failures on fresh machines* (5 comments)
   **Why it matters:** New users cannot onboard. Blocked adoption and first impressions are harmed.

8. **[#4104](https://github.com/badlogic/pi-mono/issues/4104)** — *Overrideable base filesystem operations* (3 comments, 3 👍)
   **Why it matters:** Extensions need a function table for core filesystem operations to ensure consistent behavior across all tools. Architectural request with broad extension ecosystem implications.

9. **[#4109](https://github.com/badlogic/pi-mono/issues/4109)** — *Ukrainian Cyrillic Ctrl key combinations* (3 comments)
   **Why it matters:** pi's TUI only maps QWERTY keycodes, breaking Ctrl shortcuts for non-Latin keyboard users. Part of a broader internationalization concern.

10. **[#4114](https://github.com/badlogic/pi-mono/issues/4114)** — *resolveToCwd crashes with undefined cwd* (2 comments)
    **Why it matters:** Non-Claude models crash when `cwd` is undefined in path utilities, affecting extensions that call these functions without context.

---

## Key PR Progress

1. **[#4112](https://github.com/badlogic/pi-mono/pull/4112)** — *Xiaomi MiMo: split API billing vs. regional token plan*
   Follow-up to #4005. Separates Xiaomi MiMo into default API billing endpoint and per-region token plan providers, closing #4082.

2. **[#4110](https://github.com/badlogic/pi-mono/pull/4110)** — *Fix Qwen3.5/3.6 and MiniMax M2.7 model definitions*
   Resolves #4106. Corrects API type and endpoint mismatches for three models from OpenCode Go.

3. **[#4090](https://github.com/badlogic/pi-mono/pull/4090)** — *Honor transport field in buildBaseOptions*
   Fixes #4083. Ensures the transport field propagates correctly in OpenAI Codex provider options.

4. **[#4094](https://github.com/badlogic/pi-mono/pull/4094)** — *OpenAI image generation in interactive TUI*
   Wires native image generation tool for OpenAI Responses/Codex, parsing `image_generation_call` stream items and rendering images in the TUI.

5. **[#4091](https://github.com/badlogic/pi-mono/pull/4091)** — *Forward Codex WebSocket transport in streamSimple*
   Fixes regression where `websocket-cached` transport was ignored by coding-agent callers.

6. **[#4093](https://github.com/badlogic/pi-mono/pull/4093)** — *Fix nested Codex stream error formatting*
   Handles nested `error` objects in streamed `type: "error"` events from OpenAI Codex.

7. **[#3624](https://github.com/badlogic/pi-mono/pull/3624)** — *Add Together AI as a provider* (Open)
   Adds native Together AI provider support via OpenAI-compatible Chat Completions API with TOGETHER_API_KEY detection and model filtering.

8. **[#4005](https://github.com/badlogic/pi-mono/pull/4005)** — *Add Xiaomi MiMo provider*
   Introduces Xiaomi MiMo as a built-in provider, wired through packages/ai and coding-agent.

9. **[#3474](https://github.com/badlogic/pi-mono/pull/3474)** — *Migrate to TypeBox v1 with extension compat*
   Replaces AJV-based validation with TypeBox 1.x, maintaining legacy extension imports and JSON schema coercion.

10. **[#3615](https://github.com/badlogic/pi-mono/pull/3615)** — *Add GPT-5.5 model support*
    Adds GPT-5.5 to the model roster with appropriate context window and max token settings.

---

## Feature Request Trends

| Theme | Evidence |
|-------|----------|
| **International keyboard support** | Multiple issues (#3780, #4067, #4099, #4109) flag keyboard protocol failures for Italian, French (BÉPO), Ukrainian, and Hangul layouts. Community wants Ctrl shortcuts and accented characters to work universally. |
| **Provider/model expansion** | Requests for Together AI (#3624), Nebius Token Factory (#3348), and Xiaomi MiMo (#4005) show demand for broader LLM provider coverage. |
| **Theme/UI adaptability** | Auto light/dark mode detection (#1436) and settings.local.json support (#4097) indicate users want pi to adapt to their environment without manual reconfiguration. |
| **Extension architecture** | Issues #4104 and #4100 request lower-level hooks for filesystem operations and TUI path overrides, enabling richer sandbox and cloud-based extension scenarios. |
| **Session/export reliability** | Bug #4108 (export not saving) and #4102 (mise versioning corruption) highlight that core workflow preservation features need hardening. |

---

## Developer Pain Points

1. **Keyboard handling regressions are frequent and widespread.**
   Kitty Keyboard Protocol breaks accented chars, AltGr, F-keys, and Ctrl combos across multiple non-QWERTY layouts. These issues surface repeatedly with each protocol flag change.

2. **Provider transport options are inconsistently honored.**
   Multiple PRs (#4090, #4091) fixed transport field propagation in the last 24 hours alone, indicating a systemic gap in how base options are built and forwarded.

3. **Model definitions drift from upstream reality.**
   Qwen3.5/3.6, MiniMax M2.7, Kimi K2.5, and Deepseek models all had recent definition mismatches causing 400/404 errors. Keeping model metadata in sync is a maintenance burden.

4. **Non-Claude models hit undefined-cwd crashes.**
   Path utilities assume a defined working directory, but extensions calling these functions without context cause silent crashes for non-Claude models (#4114).

5. **Install and onboarding failures block new users.**
   Fresh machine installs fail with missing internal pieces (#4086), and npm extensions with `@latest` slow startup significantly (#1291).

6. **Rate limit handling freezes the TUI.**
   GitHub Copilot provider's unbounded Retry-After waits leave pi frozen with no user feedback (#3671).

---

*Digest generated from github.com/badlogic/pi-mono activity on 2026-05-03.*

</details>

---
*This digest is auto-generated by [Big Model Radar](https://github.com/borq168/big_model_radar).*
