# AI CLI Tools Community Digest 2026-05-02

> Generated: 2026-05-02 01:57 UTC | Tools covered: 8

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

**Date:** 2026-05-02
**Scope:** Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Qwen Code, Pi

---

## 1. Ecosystem Overview

The AI CLI tools ecosystem is experiencing rapid fragmentation and specialization. Eight major tools now compete for developer attention, each backed by distinct organizations with varying strategic priorities. Anthropic's Claude Code and OpenAI's Codex dominate Western enterprise adoption, while Chinese-origin tools (Kimi Code, Qwen Code, Pi) serve regional markets with localized model integrations. The community is converging on shared requirements—model flexibility, session management, and observability—while diverging on implementation philosophy. OpenCode stands out as the only truly community-driven project without corporate backing, while others leverage proprietary model ecosystems. The pace of iteration is accelerating, with most tools shipping nightly or weekly releases, indicating this market is still in its formative, high-churn phase.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Release Today | Release Version |
|------|-------------|-----------|---------------|-----------------|
| **Claude Code** | 50 | 50 | ✅ Yes | v2.1.126 |
| **OpenAI Codex** | 50 | 50 | ✅ Yes | rust-v0.129.0-alpha.2 |
| **Gemini CLI** | 50 | 50 | ❌ None | — |
| **GitHub Copilot CLI** | 18 | 0 | ✅ Yes | v1.0.40 |
| **Kimi Code CLI** | 4 | 7 | ❌ None | — |
| **OpenCode** | 50 | 50 | ✅ Yes | v1.14.31 |
| **Qwen Code** | 6 | 24 | ✅ Yes | v0.15.6-nightly |
| **Pi** | 50 | 50 | ✅ Yes | v0.72.0 |

**Key Observations:**
- **Highest activity:** Claude Code, OpenAI Codex, Gemini CLI, OpenCode, and Pi all reported 50 issues/PRs in the last 24 hours, suggesting automated activity tracking or high community engagement.
- **Release cadence:** 5 of 8 tools shipped releases today, indicating weekly or nightly release cycles.
- **PR drought:** GitHub Copilot CLI had 18 issues but 0 PRs merged; Kimi Code CLI had only 4 issues and 7 PRs, suggesting lower velocity or smaller team.

---

## 3. Shared Feature Directions

The following requirements appear across multiple tool communities, indicating industry-wide convergence:

| Feature Direction | Tools Affected | Specific Needs |
|-------------------|----------------|----------------|
| **Model Flexibility & Switching** | Claude Code, OpenAI Codex, Gemini CLI, OpenCode, Qwen Code, Pi | Non-interactive model switching for CI, per-model thinking levels, reasoning effort control, model priority ordering |
| **Session & Memory Management** | Claude Code, Gemini CLI, OpenCode, Qwen Code | Cross-device session sync, memory routing (global vs. project), Auto Memory inbox flows, session window controls |
| **MCP (Model Context Protocol) Improvements** | Claude Code, OpenAI Codex, Gemini CLI, Kimi Code CLI, Pi | OAuth token refresh, resource subscriptions, schema exposure guardrails, sub-agent tool call reliability |
| **Cost Estimation & Billing Visibility** | Claude Code, OpenAI Codex, OpenCode, Qwen Code | Real-time token/session consumption, per-model pricing, credit balance accuracy, session window depletion tracking |
| **Privacy & Security Controls** | Claude Code, OpenAI Codex, OpenCode | Session naming privacy, API key secure storage, permission prompt persistence, hook trust review flows |
| **CI/CD & Non-Interactive Usage** | Claude Code, OpenAI Codex, GitHub Copilot CLI, Qwen Code | Stricter exit codes for MCP failures, headless model switching, structured output (JSON Schema), background job support |
| **Terminal & Cross-Platform Compatibility** | Claude Code, OpenAI Codex, Gemini CLI, Kimi Code CLI, Pi | SSH scrolling, Zellij keybindings, Windows Terminal fixes, IME/Vietnamese input, macOS drag-and-drop |
| **Observability & Telemetry** | Gemini CLI, Qwen Code, Pi | OpenTelemetry hardening, HTTP OTLP routing, event monitoring, graceful shutdown |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target Users | Technical Approach |
|------|--------------|--------------|-------------------|
| **Claude Code** | Developer productivity with Anthropic models | Professional developers, AI enthusiasts | Official Anthropic CLI; strong community engagement; controversial `/buddy` removal |
| **OpenAI Codex** | Enterprise-grade code generation | Enterprise teams, GitHub Copilot users | Deep OpenAI ecosystem integration; Rust-based architecture; extensive CI/CD features |
| **Gemini CLI** | Evaluation and benchmarking | AI researchers, model evaluators | Robust behavioral evaluation framework; 76+ eval tests; multi-model support |
| **GitHub Copilot CLI** | Lightweight CLI for Copilot | GitHub Copilot subscribers | Minimalist CLI; plugin architecture; focus on authentication and model listing |
| **Kimi Code CLI** | Chinese market, Moonshot AI integration | Chinese developers, Moonshot users | Localization-first; DeepSeek V4 compatibility; subagent loop fixes |
| **OpenCode** | Open-source, community-driven | Open-source contributors, self-hosters | No corporate backing; anomaly detection; community governance |
| **Qwen Code** | Alibaba Qwen ecosystem | Chinese developers, Qwen users | Qwen model optimization; parallel skill loading; review pipeline automation |
| **Pi** | Gaming/graphics development (badlogic) | Game developers, graphics engineers | Lightweight; Shiki syntax highlighting; local LLM provider extensions |

**Notable Differentiators:**
- **Claude Code** has the most engaged community (1,000+ 👍 on `/buddy` issue) but faces backlash over unannounced feature removal.
- **OpenAI Codex** prioritizes enterprise features like commit attribution, review pipelines, and CI-friendly exits.
- **Gemini CLI** is the only tool with a formal evaluation framework, targeting researchers rather than end-users.
- **OpenCode** is the sole community-driven project, relying on donations and volunteer maintainers.
- **Pi** uniquely targets graphics/gaming developers with Shiki highlighting and local LLM extensions.

---

## 5. Community Momentum & Maturity

| Tool | Community Size | Iteration Speed | Maturity Indicators |
|------|---------------|-----------------|---------------------|
| **Claude Code** | 🟢 Large | Weekly releases | v2.1.126; established changelog; active issue triage |
| **OpenAI Codex** | 🟢 Large | Weekly/alpha releases | rust-v0.129.0-alpha.2; formal PR review process |
| **Gemini CLI** | 🟡 Medium | Weekly releases | 50 issues/PRs daily; formal evaluation framework |
| **GitHub Copilot CLI** | 🟡 Medium | Weekly releases | v1.0.40; Microsoft backing; VS Code integration |
| **Kimi Code CLI** | 🔴 Small | Irregular | Few issues/PRs; regional focus |
| **OpenCode** | 🟡 Medium | Weekly releases | v1.14.31; community governance; anomaly detection |
| **Qwen Code** | 🟡 Medium | Nightly releases | v0.15.6-nightly; rapid iteration; Chinese market |
| **Pi** | 🔴 Small | Weekly releases | v0.72.0; niche focus (gaming); small team |

**Maturity Assessment:**
- **Most mature:** Claude Code and OpenAI Codex — high community engagement, regular releases, professional issue triage.
- **Rapidly iterating:** Qwen Code (nightly builds), Gemini CLI (frequent updates).
- **Early stage:** Kimi Code CLI, Pi — low issue volume, niche audiences, limited community infrastructure.
- **Community-driven:** OpenCode — relies on volunteer contributions without corporate funding.

---

## 6. Trend Signals

The following signals emerge from community feedback, offering predictive value for developers and decision-makers:

### 🔴 High-Impact Trends

1. **Session Window Economics** — Multiple tools (Claude Code, OpenAI Codex, OpenCode) report issues with unpredictable token consumption and session window depletion. Users demand granular visibility into what burns tokens. Expect billing dashboards and cost controls in future releases.

2. **MCP Ecosystem Expansion** — MCP is becoming the de facto standard for tool integration. All major tools are investing in MCP improvements (OAuth, resource subscriptions, schema guardrails). Developers should standardize on MCP for extensibility.

3. **Local LLM Support** — Pi, OpenCode, and Qwen Code are shipping official extensions for llama.cpp, Ollama, LM Studio, and vLLM. The trend toward self-hosted models is accelerating, driven by privacy and cost concerns.

4. **Privacy & Security Scrutiny** — OpenCode's session naming privacy issue and Pi's API key storage concerns indicate growing user awareness. Tools will need explicit privacy controls and secure credential management.

### 🟡 Emerging Trends

5. **Reasoning Effort Control** — Per-model thinking levels (Claude Code, Pi, OpenCode) and reasoning effort maps (Qwen Code) are gaining traction. Expect standardized controls for balancing speed vs. depth.

6. **CI/CD Integration** — Structured output (JSON Schema), headless model switching, and stricter exit codes are requested across all tools. AI CLIs are becoming programmable components in automated pipelines.

7. **Cross-Platform Terminal Parity** — Windows Terminal, Zellij, SSH, and IME compatibility issues persist. Tools are investing in terminal abstraction layers to ensure consistent behavior.

8. **Feature Parity with Claude Code** — The `/btw` command (OpenCode), `/undo` restoration (OpenAI Codex), and `/rewind` checkpoint restore (OpenAI Codex) indicate Claude Code remains the reference implementation. Other tools are rapidly copying its UX patterns.

### 🔵 Niche Trends

9. **Chinese Market Localization** — Kimi Code CLI, Qwen Code, and Pi serve Chinese developers with local model integrations (Xiaomi MiMo, DeepSeek V4, Qwen). This market may diverge from Western tool evolution.

10. **Evaluation & Benchmarking** — Gemini CLI's formal evaluation framework may inspire others to add behavioral testing, particularly for enterprise customers requiring reliability guarantees.

---

## Strategic Recommendations

| Audience | Recommendation |
|----------|----------------|
| **Enterprise Decision-Makers** | Prioritize Claude Code or OpenAI Codex for mature ecosystems; evaluate Gemini CLI for evaluation needs. |
| **Individual Developers** | Consider OpenCode for open-source flexibility; Pi for graphics/gaming use cases. |
| **Chinese Market** | Evaluate Kimi Code CLI or Qwen Code for local model integration and language support. |
| **AI Researchers** | Gemini CLI's evaluation framework offers unique value for model benchmarking. |
| **DevOps/Platform Teams** | Demand structured output, headless mode, and strict exit codes from any tool; prioritize MCP extensibility. |

---

*Report generated 2026-05-02. Data sourced from GitHub activity across 8 AI CLI tools. For individual tool digests, see the preceding reports.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest

**Date:** 2026-05-02
**Source:** github.com/anthropics/claude-code

---

## Today's Highlights

The community continues to process the removal of `/buddy` with issue #45596 now exceeding 1,000 👍 reactions, making it the most-upvoted issue in the repository's recent history. Meanwhile, v2.1.126 introduces gateway model discovery and a new project purge command, while Windows PowerShell users see relief from silent session exits through PR #55433.

---

## Releases

### v2.1.126
- **Model picker enhancement:** Now lists models from your gateway's `/v1/models` endpoint when `ANTHROPIC_BASE_URL` points at an Anthropic-compatible gateway
- **New command:** Added `claude project purge [path]` to delete all Claude Code state for a project (transcripts, tasks, file history, config entries)

---

## Hot Issues

| # | Title | Comments | 👍 | Why It Matters |
|---|-------|----------|----|----------------|
| [#45596](https://github.com/anthropics/claude-code/issues/45596) | Bring Back Buddy — A Consolidated Plea from the Community | 225 | 1,021 | The `/buddy` skill vanished in v2.1.97 with no changelog mention. This is the most-engaged issue in recent memory, signaling strong community attachment to the feature. |
| [#46987](https://github.com/anthropics/claude-code/issues/46987) | API Error: Stream idle timeout - partial response received | 174 | 157 | macOS users report recurring timeout errors disrupting workflow. Affects production use cases requiring stable connections. |
| [#5088](https://github.com/anthropics/claude-code/issues/5088) | Claude Account Disabled After Payment for Max 5x Plan | 168 | 54 | A critical billing bug where payment triggers account lockout. Users lose access immediately after paying—high severity for paying customers. |
| [#45335](https://github.com/anthropics/claude-code/issues/45335) | Gift subscription auto-canceled after ~1 week | 52 | 21 | Gift subscriptions revert to Free plan without user action, indicating subscription management logic issues. |
| [#41924](https://github.com/anthropics/claude-code/issues/41924) | `/buddy` command not executing actions | 42 | 2 | Related regression where the buddy command fails to trigger actions in v2.1.81. |
| [#14131](https://github.com/anthropics/claude-code/issues/14131) | German umlauts (ä, ö, ü) randomly replaced with ASCII | 24 | 16 | Character encoding bug affecting German-speaking developers. Reproducible and impacts code quality for localized projects. |
| [#55053](https://github.com/anthropics/claude-code/issues/55053) | 5-hour session window depletes 5–10× faster since Apr 29 | 22 | 9 | Session consumption regression causes accelerated token usage. Light editing now burns 20-25% per hour. |
| [#54839](https://github.com/anthropics/claude-code/issues/54839) | credit_balance_too_low despite sufficient account credits | 19 | 10 | API returns billing errors despite $105 credit balance and no spend limits. Blocks all API access. |
| [#16345](https://github.com/anthropics/claude-code/issues/16345) | Support standard `.github/skills/` directory for agent skills | 13 | 21 | Feature parity request—`.github/skills/` is now the community standard; CLI lacks support. |
| [#49902](https://github.com/anthropics/claude-code/issues/49902) | Opus 4.7 thinking summaries not rendered in VSCode | 8 | 25 | VSCode extension regression breaks thinking summary display for Opus 4.7 models. |

---

## Key PR Progress

| # | Title | Status | Significance |
|---|-------|--------|--------------|
| [#55433](https://github.com/anthropics/claude-code/pull/55433) | Fix PowerShell silent exit on Windows | OPEN | Resolves silent session termination after 50+ Bash tool uses in long-running sessions. Root cause identified in dense Bash subprocess chains. |
| [#55425](https://github.com/anthropics/claude-code/pull/55425) | Fix drag-and-drop image hang on macOS | OPEN | Addresses session freeze when dragging screenshots. Caused by macOS thumbnail preview writing to disk before file completion. |
| [#55478](https://github.com/anthropics/claude-code/pull/55478) | Sports Polymarket dashboard | CLOSED | Community contribution merged. |
| [#45721](https://github.com/anthropics/claude-code/pull/45721) | Add Claude Mythos operating contract | CLOSED | Infrastructure contribution merged. |

---

## Feature Request Trends

The following themes emerge from 50 open issues:

1. **Cross-device session continuity** — Multiple requests (#55473, #55472, #31992, #35985) ask for session sync across machines and devices. The `--fork-session` primitive is seen as the right foundation but needs a destination mechanism.

2. **Skills and MCP improvements** — Support for `.github/skills/` directory (#16345), MCP OAuth token refresh automation (#43789), and plugin schema enhancements (#15439) indicate demand for deeper extensibility.

3. **Cost and session management** — Developers want granular control over session windows (#55053, #54684), file access scoping (#55451), and usage monitoring without rate limits (#31637).

4. **Platform-specific refinements** — Windows process management (#55482), macOS URL handler installation location (#41015), and Linux AVX compatibility (#33153) show platform parity gaps.

5. **Desktop app enhancements** — PR status bar accuracy (#48694), Dispatch integration (#46460), and renderer stability (#54369) indicate desktop experience needs polish.

---

## Developer Pain Points

- **Billing reliability:** Payment processing triggers account lockouts (#5088), subscriptions auto-revert (#45335), and API calls fail despite available credits (#54839). This erodes trust in paid plans.

- **Session consumption opacity:** The 5-hour window depletes unpredictably fast (#55053, #54684), with no clear attribution or controls. Developers feel they lack visibility into what burns tokens.

- **Buddy grief:** The unannounced removal of `/buddy` remains the dominant community frustration, with 225 comments and 1,000+ 👍—the highest engagement in recent history.

- **macOS instability:** Renderer crashes (#54369), drag-and-drop hangs (#55425), and AVX compatibility issues (#33153) suggest macOS desktop app needs attention.

- **OAuth token churn:** MCP integrations requiring manual `/mcp` reconnects due to token expiration (#43789) disrupt automated pipelines.

---

*End of digest. Data collected from GitHub activity on 2026-05-02.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest

## 2026-05-02

---

### 1. Today's Highlights

The Codex community continues to grapple with token consumption concerns, with Issue #14593 reaching 568 comments as users report unexpectedly high token usage. A new alpha release (rust-v0.129.0-alpha.2) dropped, while several PRs targeting sandbox permissions, async realtime startup, and app-server lifecycle management signal active infrastructure improvements. Windows-specific issues, particularly around Browser Use and app-server initialization, remain a focal point of recent activity.

---

### 2. Releases

| Version | Type | Summary |
|---------|------|---------|
| **rust-v0.129.0-alpha.2** | Alpha | Latest pre-release of the Rust codebase. No changelog details provided in this cycle. |

---

### 3. Hot Issues

**1. [bug, rate-limits] Burning tokens very fast** (#14593)
   **Author:** @cy-ooi88 | 568 comments | 248 👍
   **Link:** https://github.com/openai/codex/issues/14593
   **Why it matters:** This is the highest-traffic issue in the repository, with users across VS Code, Business subscriptions, and Windows environments reporting severe token burn rates. The community has been actively debugging subscription tiers, IDE versions, and model configurations without resolution.

**2. [enhancement, context] Support 1M token context for GPT-5.5 in Codex** (#19464)
   **Author:** @umikato | 100 comments | 132 👍
   **Link:** https://github.com/openai/codex/issues/19464
   **Why it matters:** Users are requesting alignment between Codex's 400K context window and the full 1M token capability announced for GPT-5.5. This is a top feature request for developers working with large codebases.

**3. [enhancement, TUI, session] Please make "/undo" back** (#9203)
   **Author:** @SunRunAway | 34 comments | 171 👍
   **Link:** https://github.com/openai/codex/issues/9203
   **Why it matters:** The loss of the `/undo` command is a frequent pain point, especially when Codex modifies or deletes files outside git tracking. High 👍 count indicates widespread frustration.

**4. [enhancement, TUI] CLI: Add /rewind checkpoint restore** (#11626)
   **Author:** @Alek2077 | 21 comments | 107 👍
   **Link:** https://github.com/openai/codex/issues/11626
   **Why it matters:** Proposes a native checkpoint/restore mechanism for both conversation state and workspace edits—directly complementary to the `/undo` request above.

**5. [bug, auth] Codex need phone number** (#20161)
   **Author:** @Sistem-Pack | 21 comments | 19 👍
   **Link:** https://github.com/openai/codex/issues/20161
   **Why it matters:** Users encountering unexpected phone verification prompts during SSO login on secondary devices. Impacts user onboarding and cross-device workflows.

**6. [enhancement, extension] Drag-and-Drop non-image Files** (#3761)
   **Author:** @CongDon1207 | 20 comments | 39 👍
   **Link:** https://github.com/openai/codex/issues/3761
   **Why it matters:** A long-standing VS Code extension enhancement request to extend drag-and-drop beyond images, improving file interaction workflows.

**7. [bug, context] Error running remote compact task: stream disconnected** (#14559)
   **Author:** @AminoBatlog | 18 comments | 9 👍
   **Link:** https://github.com/openai/codex/issues/14559
   **Why it matters:** Remote context compaction failures on GPT-5.4 leave threads unusable, forcing users to restart sessions. Affects productivity during long coding sessions.

**8. [bug, TUI] 0.98.0 breaks scrolling when running over ssh** (#11014)
   **Author:** @John-Allard | 16 comments | 2 👍
   **Link:** https://github.com/openai/codex/issues/11014
   **Why it matters:** Terminal scrolling regressions impact developers using Codex over SSH with iOS client apps—a niche but critical use case for mobile developers.

**9. [bug, windows-os, app, app-server] Windows Codex app: Browser Use fails** (#19187)
   **Author:** @ElScelt | 11 comments | 19 👍
   **Link:** https://github.com/openai/codex/issues/19187
   **Why it matters:** Multiple Windows-specific issues (#20048, #20206, #20661) report Browser Use failing due to app-server startup errors. This is a recurring theme across recent Windows reports.

**10. [bug, CLI, safety-check] "Flagged for possible cybersecurity risk" on legitimate tasks** (#19601)
    **Author:** @hourianto | 10 comments | 4 👍
    **Link:** https://github.com/openai/codex/issues/19601
    **Why it matters:** Overly aggressive safety classification blocks legitimate CTF and hackthebox tasks, frustrating security researchers and developers. Related issues #20699 and #20495 echo the same concern.

---

### 4. Key PR Progress

**1. feat: add network proxy feature flag** (#20147)
   **Author:** @viyatb-oai
   **Link:** https://github.com/openai/codex/pull/20147
   Separates sandbox network bit from managed proxy startup, enabling direct network access without implicit proxy initialization. Critical for users on legacy sandbox modes.

**2. Use responses request helpers for compact requests** (#20719)
   **Author:** @aibrahim-oai
   **Link:** https://github.com/openai/codex/pull/20719
   Unifies `/responses/compact` request handling with `/responses`, ensuring new fields and headers propagate correctly to compaction flows.

**3. tui: hook trust review flow** (#20684)
   **Author:** @abhinav-oai
   **Link:** https://github.com/openai/codex/pull/20684
   Introduces a startup warning flow for untrusted or changed unmanaged hooks, improving security visibility in the TUI.

**4. Add app-server daemon lifecycle management** (#20718)
   **Author:** @euroelessar
   **Link:** https://github.com/openai/codex/pull/20718
   Enables desktop/mobile clients to bootstrap and manage `codex app-server` over SSH, addressing the Windows app-server startup failures seen in multiple issues.

**5. fix(permissions): preserve managed deny-read during escalation** (#15977)
   **Author:** @viyatb-oai
   **Link:** https://github.com/openai/codex/pull/15977
   Ensures administrator-enforced `deny_read` constraints persist through sandbox escalations, zsh-fork prefixes, and legacy overrides.

**6. Make realtime sideband startup async** (#20715)
   **Author:** @kmeelu-oai
   **Link:** https://github.com/openai/codex/pull/20715
   Moves WebRTC realtime websocket connection out of the voice start critical path, reducing latency and improving responsiveness.

**7. feat: allow limited git writes in workspace sandbox** (#17036)
   **Author:** @viyatb-oai
   **Link:** https://github.com/openai/codex/pull/17036
   Adds `allow_limited_git_writes` for workspace-write sandboxes, enabling Git commands that update metadata without making repo config or hooks writable.

**8. [codex] Split tool handlers by tool name** (#20687)
   **Author:** @pakrym-oai
   **Link:** https://github.com/openai/codex/pull/20687
   Refactors tool registration to move ownership to handler implementations, eliminating internal multiplexing and improving maintainability.

**9. [codex] Add unsandboxed command exec API** (#19040)
   **Author:** @euroelessar
   **Link:** https://github.com/openai/codex/pull/19040
   Provides an argv-based execution flow without sandbox selection/validation, useful for environments with external controls rejecting sandbox-disabling paths.

**10. config: add strict config parsing** (#20559)
    **Author:** @bolinfest
    **Link:** https://github.com/openai/codex/pull/20559
    Adds opt-in strict mode for `config.toml` to catch typos and misplaced keys, addressing silent failures that frustrate developers.

---

### 5. Feature Request Trends

Analysis of recent issues reveals the following dominant feature directions:

| Trend | Description | Evidence |
|-------|-------------|----------|
| **Extended Context Windows** | Users want 1M+ token context support for GPT-5.5, beyond the current 400K limit. | #19464 (132 👍) |
| **Session/Undo Management** | Strong demand for reversible operations (`/undo`, `/rewind`) to recover from unintended file modifications. | #9203 (171 👍), #11626 (107 👍) |
| **Windows Platform Parity** | Multiple reports of Browser Use, app-server, and sandbox issues on Windows. | #19187, #20048, #20206, #20661 |
| **Enhanced Text Selection in CLI** | Requests for Shift+Arrow text selection and full composer text selection support. | #12882, #20645 (CLOSED) |
| **Hook/Subagent Visibility** | Developers want root/subagent metadata exposed in hook payloads for better integration control. | #20675 |
| **Git Integration in Sandboxes** | Allow limited Git operations without exposing repo config/hooks. | #17036 (merged progress) |
| **Relaxed Safety Classification** | Security researchers want legitimate CTF/hackthebox tasks unblocked. | #19601, #20699, #20495 |

---

### 6. Developer Pain Points

1. **Token Consumption Anxiety:** The #14593 thread (568 comments) indicates widespread frustration with unpredictable token burn rates, particularly on Business subscriptions and VS Code.

2. **Windows App-Server Failures:** Browser Use and in-app browser features fail on Windows due to `codex app-server` startup errors (`os error 3`). Multiple duplicate issues filed.

3. **Loss of `/undo` Functionality:** The removal of `/undo` is a recurring complaint, especially for untracked file modifications outside Git.

4. **Remote Context Compaction Failures:** GPT-5.5 context compaction errors render threads unusable, forcing session restarts.

5. **Overly Aggressive Safety Filters:** Legitimate cybersecurity training tasks (CTFs, hackthebox) are incorrectly flagged, blocking educational use cases.

6. **macOS Intel UI Rendering:** Broken desktop UI on Intel Macs (clipped workspace, malformed plugins page, broken slash-command overlay) affects a subset of users.

7. **Config Parsing Opacity:** Silent ignoring of unknown `config.toml` fields makes debugging configuration issues difficult.

8. **SSH Terminal Scrolling:** Scrolling regressions when using Codex over SSH with iOS clients.

---

*End of Digest*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest

**Date:** 2026-05-02
**Repository:** [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 1. Today's Highlights

The Gemini CLI community is actively addressing critical agent reliability issues, with maintainers focusing on subagent behavior, memory management, and session state handling. A new Auto Memory inbox flow feature is under development, while several security and stability fixes are progressing through code review. The team continues to refine the generalist profile and tackle API limitations around tool scaling.

---

## 2. Releases

**No new releases in the last 24 hours.**

---

## 3. Hot Issues

| # | Issue | Author | Comments | Why It Matters |
|---|-------|--------|----------|----------------|
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **Robust component level evaluations** | @gundermanc | 5 | Epic to expand behavioral evals from 76 tests; critical for measuring agent reliability across 6 supported Gemini models. |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Assess AST-aware file reads, search, and mapping** | @gundermanc | 5 | Investigates precision improvements for method-bound reads and codebase navigation using AST-aware tools (tilth/glyph). |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent recovery after MAX_TURNS reports GOAL success** | @matei-anghel | 4 | Bug where `codebase_investigator` reports success despite hitting turn limits; masks failures from users. |
| [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) | **Gemini CLI keeps asking permissions on same file** | @nikhilkapoor0919 | 3 | Security/UX issue where "allow for all future sessions" doesn't persist; repeated prompts frustrate users. |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell command execution stuck with "Waiting input"** | @rnett | 2 | Core bug causing CLI hangs after simple shell commands complete; blocks workflow productivity. |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | **Model creates tmp scripts in random spots** | @galz10 | 2 | When shell execution is restricted, model generates scattered edit scripts, creating cleanup overhead. |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | **Browser Agent ignores settings.json overrides** | @hsm207 | 2 | Configuration bug where `AgentRegistry` merges settings but Browser Agent doesn't respect them (e.g., `maxTurns`). |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **400 error with >128 tools** | @gundermanc | 1 | API limitation causing failures when >400 tools available; needs smarter tool scoping. |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) | **Implement memory routing: global vs. project** | @SandyTao520 | 1 | Feature to route memory saves to `~/.gemini/` (global) or `.gemini/` (project) based on context. |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | **Agent should stop/discourage destructive behavior** | @abhipatel12 | 1 | Safety concern: model may use `git reset --force` or destructive DB operations when safer alternatives exist. |

---

## 4. Key PR Progress

| # | PR | Author | Status | Summary |
|---|-----|--------|--------|---------|
| [#26357](https://github.com/google-gemini/gemini-cli/pull/26357) | **Minor fixes for generalist profile** | @joshualitt | OPEN | Introduces snapshotting threshold to avoid over-snapshotting; strengthens snapshotter language; raises normalization threshold for better precision/recall balance. |
| [#26352](https://github.com/google-gemini/gemini-cli/pull/26352) | **Filter unsupported multimodal types from tool responses** | @aishaneeshah | OPEN | Implements "Smart Redirect" to filter unsupported audio/video binary data from `functionResponse` parts, preventing 400 Bad Request errors. |
| [#26338](https://github.com/google-gemini/gemini-cli/pull/26338) | **Auto Memory inbox flow with canonical-patch contract** | @SandyTao520 | OPEN | Adds experimental `experimental.autoMemory` feature; background extraction agent proposes memory updates as unified-diff `.patch` files in project-local inbox. |
| [#26322](https://github.com/google-gemini/gemini-cli/pull/26322) | **Sanitize keychain errors, restore test execution** | @Indrapal-70 | OPEN | Security fix introducing `SecureStorageError` to prevent sensitive data leakage from native keychain errors. |
| [#26179](https://github.com/google-gemini/gemini-cli/pull/26179) | **Allow removing invalid/unwanted workspace directories** | @mini2s | OPEN | Fixes inability to remove directories added via `--include-directories` or `/directory add` when they become invalid or inaccessible. |
| [#25352](https://github.com/google-gemini/gemini-cli/pull/25352) | **Massive logs cause scrolling lag** | @mini2s | OPEN | Adds search and level-based filtering to debug console for faster troubleshooting of high-volume logs. |
| [#25139](https://github.com/google-gemini/gemini-cli/pull/25139) | **Prevent unmapped keys in Vim Normal mode** | @Rajeshpatel07 | OPEN | Fixes bug where pressing unmapped keys in Vim Normal mode inserts characters into input buffer; aligns with standard Vim behavior. |
| [#26303](https://github.com/google-gemini/gemini-cli/pull/26303) | **Enforce evaluation role and multi-iteration feedback loop** | @gundermanc | OPEN | Improves Gemini CLI Bot prompts to resolve architectural conflicts, restricts critique agent to evaluation-only role. |
| [#24736](https://github.com/google-gemini/gemini-cli/pull/24736) | **Union-find context compaction for AgentHistoryProvider** | @kimjune01 | OPEN | Adds union-find clustering as alternative compression strategy; messages graduate from hot buffer to cold forest based on semantic similarity. |
| [#26306](https://github.com/google-gemini/gemini-cli/pull/26306) | **Prevent infinite retry loop on persistent backend errors** | @masqquerade | OPEN | Fixes liveness failure preventing CLI from hanging indefinitely during service outages or quota exhaustion. |

---

## 5. Feature Request Trends

Based on issue analysis, the community is requesting:

1. **Memory Management Enhancements** — Global vs. project memory routing, proactive memory writes, and Auto Memory inbox flows for session-based memory extraction.

2. **Agent Reliability & Safety** — Better subagent recovery, prevention of destructive operations, and automatic session takeover for locked browser profiles.

3. **AST-Aware Tooling** — Precise method-bound reads, codebase mapping, and navigation using Abstract Syntax Tree analysis to reduce noise and improve token efficiency.

4. **Configuration Persistence** — Settings.json overrides should apply consistently across all agents, including Browser Agent.

5. **Tool Scaling Intelligence** — Smarter tool scoping when >128 tools are available to prevent API 400 errors.

6. **Terminal/SSH Compatibility** — Helper functions to detect SSH sessions and fix text scrambling issues in remote terminal environments.

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **Permission prompts not persisting** | High | Repeated authorization requests block workflow |
| **Shell command hangs** | High | CLI becomes unresponsive after command completion |
| **Vim mode key handling** | Medium | Unmapped keys incorrectly insert text |
| **Tmp script sprawl** | Medium | Workspace pollution when shell is restricted |
| **Session state split on resume** | Medium | Internal services retain old session ID after resumption |
| **OAuth flow cancellation in raw TTY** | Medium | Auth fails in Ghostty/VS Code WSL terminals |
| **Scroll issues with long chats** | Medium | Screen flashes and scrollbar jumps |
| **Browser profile lock handling** | Low | Fail-fast strategy causes crashes instead of recovery |

---

*Generated: 2026-05-02 | Data source: [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

## GitHub Copilot CLI Community Digest – 2026-05-02

### 1. Today's Highlights
GitHub Copilot CLI v1.0.40 was released on 2026-05-01, introducing UI fixes for branch decoration, smoother streaming, and plugin version display. The community continues to report pressing issues around authentication, model selection, and MCP server stability, with several high-impact feature requests gaining traction.

### 2. Releases
- **v1.0.40** (2026-05-01) – [Release notes](https://github.com/github/copilot-cli/releases/tag/v1.0.40)
  - Fixed branch decoration in footer for long model names.
  - `/clear` and `/new` now reset active custom agent selection.
  - Improved streaming output for assistant responses.
  - `copilot plugin list` now shows correct version after `copilot plugin update`.

### 3. Hot Issues
1. **[#33] Support OAuth http MCP servers** (Closed) – [Link](https://github.com/github/copilot-cli/issues/33)
   *Why it matters:* Enables integration with OAuth-protected MCP servers (e.g., Figma, Atlassian), expanding plugin ecosystem.
   *Community reaction:* 110 👍, 38 comments – high demand for OAuth support.

2. **[#1081] AggregateError: Failed to list models** (Open) – [Link](https://github.com/github/copilot-cli/issues/1081)
   *Why it matters:* Enterprise users cannot execute commands after login, blocking CLI usage.
   *Community reaction:* 8 👍, 23 comments – active investigation.

3. **[#3019] Breaking Change: .vscode/mcp.json no longer supported** (Open) – [Link](https://github.com/github/copilot-cli/issues/3019)
   *Why it matters:* Forces users to maintain separate MCP configurations for VS Code and CLI.
   *Community reaction:* 2 👍, 2 comments – seeks parity.

4. **[#3067] Terminal freezes when stdio MCP child crashes** (Open) – [Link](https://github.com/github/copilot-cli/issues/3067)
   *Why it matters:* Causes full CLI unresponsiveness on Windows, requiring force-close.
   *Community reaction:* 0 👍, 1 comment – critical on Windows.

5. **[#2201] sessionStart hook doesn’t print or run at startup** (Open) – [Link](https://github.com/github/copilot-cli/issues/2201)
   *Why it matters:* Hooks tutorial fails, breaking custom banner/logging workflows.
   *Community reaction:* 1 👍, 1 comment – documentation gap.

6. **[#3030] Sub-agent MCP tool calls fail with Zod validation error** (Open) – [Link](https://github.com/github/copilot-cli/issues/3030)
   *Why it matters:* Breaks autonomous agent workflows when MCP returns JSON arrays.
   *Community reaction:* 0 👍, 1 comment – blocks multi-agent setups.

7. **[#3074] Add `/effort` command for reasoning effort** (Open) – [Link](https://github.com/github/copilot-cli/issues/3074)
   *Why it matters:* Simplifies switching reasoning effort without multi-step `/model` commands.
   *Community reaction:* 0 👍, 0 comments – new request.

8. **[#3073] Support MCP resources/subscribe and notifications** (Open) – [Link](https://github.com/github/copilot-cli/issues/3073)
   *Why it matters:* Enables dynamic resource updates for autonomous agents, improving reactivity.
   *Community reaction:* 0 👍, 0 comments – high-impact for agentic workflows.

9. **[#3071] Cannot use Claude Opus at Pro+** (Open) – [Link](https://github.com/github/copilot-cli/issues/3071)
   *Why it matters:* Blocks access to Opus model despite Pro+ subscription.
   *Community reaction:* 0 👍, 0 comments – subscription blocker.

10. **[#3064] Stricter exit code when MCP servers fail to start** (Open) – [Link](https://github.com/github/copilot-cli/issues/3064)
    *Why it matters:* CI pipelines currently pass with zero tools, masking failures.
    *Community reaction:* 0 👍, 0 comments – critical for CI/CD.

### 4. Key PR Progress
No PRs were merged in the last 24 hours. The release v1.0.40 incorporates previous fixes; see the [release notes](https://github.com/github/copilot-cli/releases/tag/v1.0.40) for details.

### 5. Feature Request Trends
- **MCP Server Enhancements:** OAuth support, resource subscriptions, and notifications for dynamic agent workflows.
- **Model Flexibility:** Array support for custom agent model fields, reasoning effort control, and improved model picker.
- **Authentication & Sessions:** Persistent login, re-authentication fixes, and remote session deletion.
- **CI/CD Integration:** Stricter exit codes for MCP failures and non-interactive usage improvements.
- **Configuration Parity:** Unified MCP config between VS Code and CLI, and hook/custom agent improvements.

### 6. Developer Pain Points
- **Authentication Fatigue:** Frequent re-login and re-authentication cycles.
- **Model Selection Issues:** Failures in listing models, Opus access blockers, and UI desync when switching models.
- **MCP Stability:** Terminal freezes on MCP crashes, sub-agent tool call failures, and breaking config changes.
- **CI Reliability:** Silent failures when MCP servers fail to start, leading to false-positive pipeline passes.
- **Configuration Complexity:** Need for dual MCP JSON files and lack of default keep-alive settings.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest

**Date:** 2026-05-02
**Repository:** [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 1. Today's Highlights

The Kimi Code CLI community is actively addressing stability and compatibility issues. Seven pull requests were merged or updated in the last 24 hours, focusing on shell mode improvements, MCP tool handling, and skill discovery robustness. Four new issues were reported, with agent loop behavior and cross-platform PDF handling emerging as key concerns.

---

## 2. Releases

**No new releases in the last 24 hours.**

The last stable release remains **v2.1.109** (Claude Code). Users are encouraged to monitor the [releases page](https://github.com/MoonshotAI/kimi-cli/releases) for upcoming updates.

---

## 3. Hot Issues

### Issue #1888 — Kimi K2.6 Problem in Claude Code
**Status:** Open | **Comments:** 3 | **Author:** @Greenplumwine
**Link:** [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/1888)

Users report that Kimi K2.6 enters infinite loops when integrated with Claude Code, causing excessive API calls. This impacts developers using the CLI as a backend for Claude Code workflows. The community is actively debugging the interaction between the two systems.

---

### Issue #2143 — Windows PDF Preview Downloads viewer.html
**Status:** Open | **Comments:** 0 | **Author:** @PanagiotisDrakatos
**Link:** [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2143)

A bug in Kimi Desktop (Windows 3.0.7) causes PDF previews to download `viewer.html` instead of rendering inline. The root cause is identified as `Content-Disposition: attachment` being set on the PDF.js wrapper. This affects user experience on Windows platforms.

---

### Issue #2142 — Agent Loops on Same Shell Command
**Status:** Open | **Comments:** 0 | **Author:** @yangliping
**Link:** [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2142)

Agents are observed looping on the same shell command with truncated output. This prevents successful command execution and disrupts development workflows. The issue is reproducible on Darwin 25.4.0 arm64.

---

### Issue #2141 — DeepSeek V4 Compatibility Fix
**Status:** Open | **Comments:** 0 | **Author:** @wintrover
**Link:** [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2141)

A proposed fix ensures `reasoning_content` is passed on all assistant messages for DeepSeek V4 Pro compatibility. Without this, multi-turn conversations with tool calls fail with a 400 error when thinking mode is enabled.

---

## 4. Key PR Progress

### PR #2144 — Multiline Input Text Alignment Fix
**Author:** @blackwell-systems
**Link:** [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2144)

Fixes misaligned multiline input text in shell mode where the first line is indented by one character relative to continuation lines. The root cause is the shell prompt appending `"$ "` (2 chars) without setting `prompt_continuation`.

---

### PR #1933 — Work Directory Override for Subagents
**Author:** @zhuxixi
**Link:** [View PR](https://github.com/MoonshotAI/kimi-cli/pull/1933)

Adds an optional `work_dir` parameter to the Agent tool, allowing subagents to operate in a different directory than the parent agent's working directory. Resolves issue #1931.

---

### PR #2112 — MCP Schema Exposure Guardrails
**Author:** @Sisyphbaous-DT-Project
**Link:** [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2112)

Adds guardrails for MCP tools exposed to the model, preventing large MCP tool lists from causing initial chat request failures. All MCP tools remain registered internally but are selectively exposed.

---

### PR #2140 — Skip Invalid Skill Encodings
**Author:** @bugkeep
**Link:** [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2140)

Prevents CLI startup crashes when encountering invalid UTF-8 subdirectory skills. Returns `None` for undecodable skill bodies during slash skill loading. Includes regression tests for invalid UTF-8 SKILL.md files.

---

### PR #2139 — Preserve MCP Structured Content
**Author:** @bugkeep
**Link:** [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2139)

Ensures MCP `structured_content` is appended as JSON text so tool results retain machine-readable payloads. Also sanitizes MCP input schemas by removing metadata siblings from `$ref` nodes.

---

### PR #2138 — Respect Default Shell in Shell Mode
**Author:** @bugkeep
**Link:** [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2138)

Passes `$SHELL` as the POSIX `create_subprocess_shell` executable for Ctrl-X shell mode. Environment detection now prefers the user's default shell before falling back to bash.

---

### PR #2137 — Publish Permission Prompt Notifications
**Author:** @bugkeep
**Link:** [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2137)

Binds the approval runtime to the session notification manager and publishes a `permission_prompt` notification whenever a manual approval request is created. Adds regression coverage for approval-created notification metadata.

---

## 5. Feature Request Trends

Based on recent issues and PRs, the community is prioritizing:

1. **Enhanced Subagent Control** — Work directory overrides and improved subagent dispatch flexibility
2. **MCP Tool Scalability** — Guardrails for large MCP tool lists and schema optimization
3. **Cross-Platform Consistency** — Resolving Windows-specific PDF and shell behavior differences
4. **Model Compatibility** — Ensuring seamless integration with third-party models (DeepSeek V4, Claude Code)
5. **Shell Mode Improvements** — Better multiline input handling and default shell detection

---

## 6. Developer Pain Points

The following recurring issues are generating significant community attention:

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **Agent Loop Behavior** | High | Causes infinite command execution and API overuse |
| **Shell Output Truncation** | Medium | Prevents developers from seeing full command results |
| **MCP Tool Schema Failures** | Medium | Large MCP tool lists break initial chat requests |
| **Invalid Skill Crashes** | Low-Medium | Startup failures due to malformed skill files |
| **Cross-Platform PDF Rendering** | Low | Windows users cannot preview PDFs inline |

**Recommended Actions:**
- Monitor [Issue #1888](https://github.com/MoonshotAI/kimi-cli/issues/1888) and [Issue #2142](https://github.com/MoonshotAI/kimi-cli/issues/2142) for loop-related fixes
- Review [PR #2112](https://github.com/MoonshotAI/kimi-cli/pull/2112) for MCP scalability improvements
- Test [PR #2144](https://github.com/MoonshotAI/kimi-cli/pull/2144) for shell mode text alignment

---

*Digest generated for 2026-05-02. Data sourced from GitHub activity in the last 24 hours.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest

**Date:** 2026-05-02
**Source:** github.com/anomalyco/opencode

---

## 1. Today's Highlights

The v1.14.31 release brings critical improvements to Azure integration and session security, with better prompts for resource naming and strengthened permission boundaries for child sessions. The community continues to grapple with DeepSeek reasoning_content errors persisting across versions, while a new PR proposes wrapping AI thinking content in proper `<thinking>` tags for better markdown export compatibility.

---

## 2. Releases

### v1.14.31 (Latest)

| Component | Change |
|-----------|--------|
| **Core** | Azure setup now prompts for resource name when needed and saves it with the API key |
| **Core** | Task child sessions now preserve parent `external_dir` and deny permissions (@remorses) |
| **Core** | Invalid remote MCP URLs now fail with a clear error instead of breaking setup |

---

## 3. Hot Issues

### 🔴 High-Activity Issues

**1. [Broken Claude Max](https://github.com/anomalyco/opencode/issues/7410)** — 393 comments, 357 👍
**Status:** CLOSED | **Author:** @piotryordanov
Users report Claude Max stopped working with errors. This was the most-discussed issue this period, indicating significant impact on paying customers.

**2. [Copilot Auth Consuming Premium Requests](https://github.com/anomalyco/opencode/issues/8030)** — 223 comments, 79 👍
**Status:** CLOSED | **Author:** @bowmanjd
GitHub Copilot's Opus 4.5 incorrectly marked ~60 agent-initiated requests as "user" requests, rapidly depleting premium quotas. The `X-Initiator: agent` header was not being set properly.

**3. [Support for Cursor?](https://github.com/anomalyco/opencode/issues/2072)** — 64 comments, 161 👍
**Status:** OPEN | **Author:** @ThallesP
Feature request to integrate Cursor's CLI. High 👍 ratio suggests strong community interest in broader tool compatibility.

**4. [OpenCode is Not Private by Default?](https://github.com/anomalyco/opencode/issues/10416)** — 54 comments, 31 👍
**Status:** OPEN | **Author:** @MatthewCroughan
Session titles are computed externally rather than locally, raising privacy concerns for users with self-hosted LLMs and network restrictions.

**5. [Custom Provider Docs Incorrect](https://github.com/anomalyco/opencode/issues/5937)** — 26 comments, 17 👍
**Status:** OPEN | **Author:** @cgilly2fast
Documentation references an "Other" provider option that doesn't exist in the `/connect` command, blocking custom provider setup.

**6. [Sessions Mixed with Home Directory](https://github.com/anomalyco/opencode/issues/3551)** — 18 comments
**Status:** CLOSED | **Author:** @raymelon
Sessions from the home directory incorrectly appear when working in other directories, causing confusion.

**7. [Model Repeats Response in Loop](https://github.com/anomalyco/opencode/issues/16218)** — 17 comments
**Status:** OPEN | **Author:** @rishilpasunuri
Windows users report the model generates correct responses but then loops, repeating the same answer indefinitely.

**8. [VSCode Extension Data Provider Error](https://github.com/anomalyco/opencode/issues/10119)** — 17 comments, 12 👍
**Status:** OPEN | **Author:** @morpheus9393
The OpenCode Beta VSCode extension displays "There is no data provider registered" error on fresh install.

**9. [AI Responses Cut Off by `<` or `<=` Operators](https://github.com/anomalyco/opencode/issues/23928)** — 14 comments
**Status:** OPEN | **Author:** @blankyblank
Recurring issue where responses get truncated when the AI output contains comparison operators.

**10. [Feature Request: `/btw` Command](https://github.com/anomalyco/opencode/issues/16992)** — 13 comments, 76 👍
**Status:** OPEN | **Author:** @eladcandroid
Request to add Anthropic's `/btw` command (from Claude Code) for interjecting side comments during sessions.

---

## 4. Key PR Progress

| PR | Title | Type | Author |
|----|-------|------|--------|
| [#25370](https://github.com/anomalyco/opencode/pull/25370) | Allow context tooltip on touch & add mobile context tab | UI Fix | @fydiog |
| [#25369](https://github.com/anomalyco/opencode/pull/25369) | Add constellation-opencode to ecosystem docs | Docs | @rbonestell |
| [#21907](https://github.com/anomalyco/opencode/pull/21907) | Add free model resolution | Feature | @caretak3r |
| [#18767](https://github.com/anomalyco/opencode/pull/18767) | Mobile Touch Optimization | Feature | @noahbentusi |
| [#13854](https://github.com/anomalyco/opencode/pull/13854) | Stop streaming markdown/code after message completes | TUI Fix | @mocksoul |
| [#25367](https://github.com/anomalyco/opencode/pull/25367) | Cache messages across prompt loop for byte-identity | Core Fix | @BYK |
| [#25368](https://github.com/anomalyco/opencode/pull/25368) | Wrap reasoning in `<thinking>` tags in markdown export | Transcript Fix | @1fanwang |
| [#23053](https://github.com/anomalyco/opencode/pull/23053) | Enable auto-vacuum and add periodic DB maintenance | DB Improvement | @BYK |
| [#21866](https://github.com/anomalyco/opencode/pull/21866) | Harden plan mode — deny escape, show preview, guard empty | Security Fix | @BYK |
| [#25281](https://github.com/anomalyco/opencode/pull/25281) | Fix long tips truncated in TUI home view | TUI Fix | @TO19 |

**Notable merged PRs:**
- [#21114](https://github.com/anomalyco/opencode/pull/21114) — **Prevent unsupported image formats** (AVIF, etc.) from being sent to providers, closing #17772 and #15264 (@zeke)

---

## 5. Feature Request Trends

Based on issue analysis, the community is requesting:

| Trend | Evidence |
|-------|----------|
| **Multi-model support** | Cursor CLI integration (#2072), free model resolution (#21907) |
| **Enhanced privacy controls** | Session naming privacy (#10416), local computation requests |
| **Improved mobile/touch experience** | Multiple PRs (#25370, #18767) addressing mobile UX |
| **Chat UX improvements** | Multiline support (#20446), `/btw` command (#16992) |
| **Agent configuration flexibility** | Per-agent model variants (#25363), chat_template_kwargs (#23995) |
| **Better transcript/export** | `<thinking>` tag wrapping (#25368) |

---

## 6. Developer Pain Points

**🔴 Persistent Issues:**

1. **DeepSeek reasoning_content errors** — Multiple reports (#24722, #25311) confirm v1.14.31 still has 400 errors when `reasoning_content` isn't passed back in multi-turn conversations. Unmerged PRs reportedly contain fixes.

2. **Azure OpenAI broken since latest update** — Issue #22444 shows GPT-5.x Codex models fail with "cannot assist" errors after the recent update.

3. **Image format handling** — AVIF images and invalid image payloads cause session failures (#17772, #15264). Recent fix merged but may need verification.

4. **Desktop security concerns** — Issue #25307 reports API keys stored as plain text form data in Electron, viewable by anyone with file access.

5. **Session isolation problems** — Sessions bleeding across directories (#3551) and reasoning_content stripped on replay (#19081) affect local inference users.

6. **Custom provider setup friction** — Missing "Other" option (#25297, #5937) blocks OpenAI-compatible provider configuration despite documentation.

7. **VSCode extension reliability** — Extension shows data provider errors on install (#10119) and switching terminals leaves artifacts (#14533).

---

*End of Digest*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-02

## Today's Highlights

The Pi project released **v0.72.0** with a new Xiaomi MiMo Token Plan provider, expanding AI backend options for Chinese users. Meanwhile, the community addressed critical regressions including a Shift+Enter issue in Zellij, verbosity-related tool-calling failures in OpenAI Codex, and WebSocket transport improvements for OpenAI Responses. Local LLM support took a major step forward with official provider extensions for llama.cpp, LM Studio, vLLM, and Ollama.

---

## Releases

### v0.72.0
- **Xiaomi MiMo Token Plan provider** — New Anthropic-compatible provider with `XIAOMI_API_KEY` auth, default model `mimo-v2.5-pro`, and `/login` display support. ([#4005](https://github.com/badlogic/pi-mono/pull/4005))

### v0.71.1
- Added `websocket-cached` transport option for OpenAI Codex provider with ChatGPT subscription auth. Keeps WebSocket open across sessions and sends only new conversation items after the first request, reducing overhead.

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#3208](https://github.com/badlogic/pi-mono/issues/3208) | **Custom Thinking Levels per Model** — Request to let models define their own thinking levels in `models.json` | Enables fine-grained control over `Shift+Tab` cycling; prevents errors when models don't support certain reasoning formats | 13 👍, 13 comments — high demand |
| [#3357](https://github.com/badlogic/pi-mono/issues/3357) | **Official Local LLM Provider Extension** — Fetch model list dynamically from `{baseUrl}/models` | Critical for hooking Pi to llama.cpp, Ollama, LM Studio, and vLLM | 17 👍, 7 comments — top-voted feature request |
| [#3259](https://github.com/badlogic/pi-mono/issues/3259) | **Shift+Enter Regression in Zellij** — Newline insertion broken after upgrade | Breaks workflow for Zellij terminal users; indicates regression in keybinding handling | 14 comments — active investigation |
| [#4026](https://github.com/badlogic/pi-mono/issues/4026) | **OpenAI Codex verbosity regression** — Default `text.verbosity = "low"` causes tool-calling failures | Impacts Codex reliability; runs stop mid-task with commentary-only responses | 7 comments — inprogress |
| [#3786](https://github.com/badlogic/pi-mono/issues/3786) | **EBADF with bash executor** — File descriptor errors after extended sessions | Causes `git`, `pwd`, `python` commands to fail; suggests resource leak | 7 comments — inprogress |
| [#2733](https://github.com/badlogic/pi-mono/issues/2733) | **Backspace/Delete broken in Windows Terminal** — Regression from 0.62.0 → 0.64.0 | Affects Windows users; long-standing issue since March | 9 comments — still problematic |
| [#2144](https://github.com/badlogic/pi-mono/issues/2144) | **Cannot paste images into Pi** — Missing clipboard image support | Feature parity with Claude Code; requested by multiple users | 5 comments |
| [#4046](https://github.com/badlogic/pi-mono/issues/4046) | **Compaction deletes everything** — Data loss bug | Critical data safety issue | 6 comments |
| [#1436](https://github.com/badlogic/pi-mono/issues/1436) | **Auto-detect light/dark mode** — System theme following | Long-requested UX improvement | 6 comments, 2 👍 |
| [#3942](https://github.com/badlogic/pi-mono/issues/3942) | **pi update --self fails with npm --prefix** — Self-update broken for Nix users | Breaks update for users with non-standard npm paths | 7 comments |

---

## Key PR Progress

| # | PR | Summary |
|---|-----|---------|
| [#4005](https://github.com/badlogic/pi-mono/pull/4005) | **feat(ai): add Xiaomi MiMo provider** | Adds Xiaomi MiMo as built-in provider with OpenAI-completions compatibility |
| [#4007](https://github.com/badlogic/pi-mono/pull/4007) | **feat(coding-agent): add official local-LLM provider extensions** | Ships four official extensions for llama.cpp, LM Studio, vLLM, and Ollama with async-factory pattern |
| [#3868](https://github.com/badlogic/pi-mono/pull/3868) | **refactor(coding-agent): migrate syntax highlighting to Shiki** | Replaces terminal/HTML export highlighting with Shiki; adds cached highlighters and lazy loading |
| [#3197](https://github.com/badlogic/pi-mono/pull/3197) | **feat(agent): add interrupt() for graceful turn interruption** | New API for stopping agents without destroying in-flight tool work (vs. destructive `abort()`) |
| [#4062](https://github.com/badlogic/pi-mono/pull/4062) | **fix(tui): support Vietnamese/IME input with combining marks** | Fixes laggy typing for Vietnamese and other NFD-form languages by processing complete UTF-8 sequences |
| [#4060](https://github.com/badlogic/pi-mono/pull/4060) | **feat(ai): add DigitalOcean serverless inference provider** | Adds DigitalOcean Serverless Inference as OpenAI-compatible provider |
| [#3678](https://github.com/badlogic/pi-mono/pull/3678) | **fix(ai): honor Fireworks Anthropic tool compat** | Resolves tool compatibility errors with Fireworks API models |
| [#4053](https://github.com/badlogic/pi-mono/pull/4053) | **Expose skills override to extensions** | Adds `pi.registerSkillsOverride()` API for extensions to chain skill overrides |
| [#3997](https://github.com/badlogic/pi-mono/pull/3997) | **Enhance Slack integration** | Adds configuration, deduplication, and tools for Slack workflow |
| [#4081](https://github.com/badlogic/pi-mono/pull/4081) | **docs(coding-agent): fix link to plan-mode extension** | Documentation fix for moved files |

---

## Feature Request Trends

Analysis of 50 recent issues reveals these dominant themes:

1. **Provider Expansion** — Strong demand for new AI providers (Xiaomi MiMo, DigitalOcean, Cursor models) and improved local LLM support
2. **Transport Improvements** — WebSocket transport for OpenAI Responses, session-persistent connections
3. **Model-Specific Controls** — Per-model thinking levels, reasoning effort maps, verbosity settings
4. **Extension API Gaps** — `registerProvider()` baseUrl handling, skills override exposure, paste content APIs
5. **Terminal Compatibility** — Zellij keybindings, Windows Terminal fixes, IME/Vietnamese input support
6. **UX Polish** — Auto light/dark mode, image paste, TUI stability (flicker fixes)

---

## Developer Pain Points

- **Regression Frustrations**: Multiple regressions in recent releases (Shift+Enter, Backspace/Delete, verbosity defaults) indicate need for better regression testing
- **Windows Support Gaps**: Long-standing Windows Terminal issues remain unresolved
- **Local LLM Complexity**: Despite new extensions, dynamic model discovery and configuration remain cumbersome
- **Self-Update Limitations**: `pi update --self` fails for non-standard npm installations (Nix, custom prefixes)
- **Tool Call Reliability**: OpenAI Codex verbosity changes breaking tool-calling is a recurring theme
- **TUI Stability**: Flickering during concurrent bash operations and streaming output needs attention

---

*Generated 2026-05-02 | Source: [github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono)*

</details>

---
*This digest is auto-generated by [Big Model Radar](https://github.com/borq168/big_model_radar).*
