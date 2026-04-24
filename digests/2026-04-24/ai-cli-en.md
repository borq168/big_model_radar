# AI CLI Tools Community Digest 2026-04-24

> Generated: 2026-04-24 01:52 UTC | Tools covered: 8

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

<think>The user wants a comprehensive cross-tool comparison report synthesizing all the individual digests I've already generated. Let me analyze the data from all seven tools and create a structured comparison report.

Let me organize the key data points from each tool:

**1. Claude Code (Anthropics)**
- Issues: 50 total, 10 hot issues analyzed
- PRs: 11 total, 11 analyzed
- Releases: v2.1.119 (settings persistence, prUrlTemplate)
- Key themes: Model quality regressions, MCP improvements, session management, plugin system

**2. OpenAI Codex**
- Issues: 50 total, 10 hot issues analyzed
- PRs: 11 total, 10 analyzed
- Releases: v0.124.0 (TUI reasoning controls, auth refactor)
- Key themes: Platform packaging, context regressions, WebSocket stability, permissions

**3. Gemini CLI (Google)**
- Issues: 50 total, 10 hot issues analyzed
- PRs: 20 total, 10 analyzed
- Releases: v0.41.0-nightly, v0.40.0-preview.2, v0.39.0
- Key themes: Memory management, voice mode, Windows compatibility, MCP integration

**4. GitHub Copilot CLI**
- Issues: 50 total, 10 hot issues analyzed
- PRs: 1 total, 1 analyzed
- Releases: v1.0.35 (Ctrl+Y, $SHELL support, session management)
- Key themes: Model availability, rate limiting, session stability, platform parity

**5. Kimi Code CLI (Moonshot)**
- Issues: 21 total, 10 hot issues analyzed
- PRs: 27 total, 10 analyzed
- Releases: None in last 24h
- Key themes: Terminal interaction, model flexibility, MCP compatibility, PTY allocation


- **6. OpenCode** shows 50 issues and 20 PRs with v1.14.22 addressing memory and session state management. **7. Qwen Code** has 24 issues and 42 PRs, with v0.15.1 focused on streaming parsing and localization. Now I'll structure the comparison across ecosystem overview, activity metrics, shared directions, differentiation factors, community engagement, and emerging trends.
</think>

# AI CLI Tools Ecosystem — Cross-Tool Comparison Report

**Date:** 2026-04-24  
**Scope:** Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Qwen Code

---

## 1. Ecosystem Overview

The AI CLI tools ecosystem is experiencing rapid iteration across all major providers, with seven tools actively releasing updates and addressing community feedback simultaneously. Anthropic's Claude Code and OpenAI's Codex lead in release cadence, while Google's Gemini CLI and Moonshot's Kimi Code CLI demonstrate aggressive feature velocity through high PR counts. The ecosystem shows clear convergence on core capabilities—session management, MCP server integration, and multi-model support—while diverging in terminal UX, permission models, and enterprise positioning. Community engagement is healthy across all tools, with the most active discussions centered on model quality regressions, rate limiting UX, and platform packaging reliability.

---

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Releases (24h) | Community Sentiment |
|------|---------------------|-------------------|----------------|---------------------|
| **Claude Code** | 50 | 11 | v2.1.119 | ⚠️ Concerned (model quality regressions, /buddy removal) |
| **OpenAI Codex** | 50 | 11 | v0.124.0 | ⚠️ Frustrated (platform packaging failures, context regressions) |
| **Gemini CLI** | 50 | 20 | v0.41.0-nightly | ✅ Positive (YOLO mode fixes, voice mode progress) |
| **Copilot CLI** | 50 | 1 | v1.0.35 | 😐 Mixed (UX improvements, but model availability gaps) |
| **Kimi Code CLI** | 21 | 27 | None | ✅ Positive (terminal fixes, Python SDK in progress) |
| **OpenCode** | 50 | 20 | v1.14.22 | ⚠️ Concerned (memory issues, Bun crashes) |
| **Qwen Code** | 24 | 42 | v0.15.1 | ✅ Positive (high PR velocity, localization progress) |

**Key observations:**
- **Qwen Code** leads in PR velocity (42 PRs), indicating rapid feature development
- **Claude Code** and **OpenAI Codex** face the most community friction around model quality and platform reliability
- **Gemini CLI** and **Kimi Code CLI** show healthy iteration with minimal negative community feedback
- **Copilot CLI** has low PR activity (1 PR) despite high issue volume, suggesting a bottleneck

---

## 3. Shared Feature Directions

The following requirements appear across multiple tool communities, indicating industry-wide priorities:

### A. Multi-Model Support & Flexibility

| Tool | Specific Need |
|------|---------------|
| Claude Code | Model selection per session, Opus 4.6/4.7 thinking variants |
| OpenAI Codex | GPT-5.5 support, remote development model access |
| Gemini CLI | Gemma 4 models, availability-aware auto-routing |
| Copilot CLI | Org-enabled model visibility, free tier model configuration |
| Kimi Code CLI | K2.5 vs K2.6 switching, thinking mode controls |
| OpenCode | GPT-5.5, Kimi K2.6, Claude Opus 4.7 variants |
| Qwen Code | Local model configuration, multiple provider support |

**Signal:** Users demand granular control over model selection, thinking effort, and provider configuration. Tools that restrict model choice face significant backlash.

### B. Session Management & Persistence

| Tool | Specific Need |
|------|---------------|
| Claude Code | Session auto-resume, MCP config persistence |
| Gemini CLI | Session manager plugin (delete, list, cleanup) |
| Copilot CLI | Session corruption fixes, cross-device sync |
| Kimi Code CLI | Session history integrity, resume reliability |
| OpenCode | Session state staleness, nested session navigation |
| Qwen Code | Conversation rewind, auto-titling |

**Signal:** Session management is a universal pain point. Users expect seamless resume, corruption resistance, and multi-session organization.

### C. MCP Server Integration

| Tool | Specific Need |
|------|---------------|
| Claude Code | Auto-reload on config change, user-level MCP enable/disable |
| Gemini CLI | Stderr stream handling, MCP server initialization conflicts |
| Kimi Code CLI | Claude-compatible local plugins, stdio server compatibility |
| OpenCode | ACP session MCP loading, JSON schema strictness |
| Qwen Code | HTTP MCP for ACP mode, provider configuration |

**Signal:** MCP is becoming a standard extension mechanism. Tools must improve plugin loading, schema compatibility, and configuration flexibility.

### D. Terminal UX & Platform Compatibility

| Tool | Specific Need |
|------|---------------|
| Claude Code | Terminal title propagation, hook configuration |
| Gemini CLI | PowerShell 5.1 compatibility, SSH text rendering |
| Copilot CLI | XDG_CONFIG_HOME support, Windows stability |
| Kimi Code CLI | PTY allocation, interactive command support |
| OpenCode | Sixel image support, tmux paste handling |
| Qwen Code | Voice input, Traditional Chinese UI |

**Signal:** Cross-platform terminal compatibility remains challenging. PTY allocation, SSH rendering, and clipboard integration are recurring issues.

### E. Cost Control & Rate Limiting

| Tool | Specific Need |
|------|---------------|
| Claude Code | Usage limit transparency, token consumption visibility |
| OpenAI Codex | Rate limit UX, credit consumption clarity |
| Gemini CLI | Quota exhaustion alerts, faster depletion reports |
| Copilot CLI | Endless rate limit prompts, premium request tracking |

**Signal:** Users are increasingly cost-conscious. Tools must provide transparent usage tracking and graceful rate limit handling.

---

## 4. Differentiation Analysis

### Target User Positioning

| Tool | Primary Audience | Differentiation |
|------|-----------------|-----------------|
| **Claude Code** | Professional engineers, complex workflows | Deep Anthropic model integration, extensive plugin ecosystem |
| **OpenAI Codex** | Enterprise, GitHub-integrated teams | Native GitHub integration, Codex OAuth, VS Code extension parity |
| **Gemini CLI** | Google ecosystem users | Gemini model access, voice mode, experimental features |
| **Copilot CLI** | GitHub Copilot subscribers | Tight Copilot integration, familiar GitHub CLI UX |
| **Kimi Code CLI** | Chinese market, cost-sensitive users | Kimi model access, competitive pricing, Moonshot ecosystem |
| **OpenCode** | Power users, plugin developers | Highly extensible, open-source, community-driven |
| **Qwen Code** | Chinese developers, local model enthusiasts | Qwen/Alibaba integration, Python SDK, local model focus |

### Technical Approach Divergence

| Aspect | Leaders | Laggards |
|--------|---------|----------|
| **Release Cadence** | Qwen Code (42 PRs), Gemini CLI (20 PRs) | Copilot CLI (1 PR) |
| **Plugin Architecture** | Claude Code, OpenCode | Copilot CLI |
| **Platform Packaging** | Gemini CLI, Qwen Code | OpenAI Codex, Copilot CLI |
| **Memory Management** | Gemini CLI (async quota fetch) | OpenCode (ongoing OOM issues) |
| **Enterprise Features** | OpenAI Codex (auth refactor) | Kimi Code CLI |
| **Localization** | Qwen Code (i18n sync) | OpenAI Codex (English-only) |

### Unique Capabilities

| Tool | Unique Feature |
|------|---------------|
| **Claude Code** | `/buddy` skill (now removed), extensive hook system, theme persistence |
| **OpenAI Codex** | Remote development support, Codex OAuth, quick reasoning TUI controls |
| **Gemini CLI** | Real-time voice mode, RalphFlow loop prevention, SEA bundling |
| **Copilot CLI** | GitHub CLI integration, session sync across devices |
| **Kimi Code CLI** | RalphFlow architecture, preserved thinking env var, skill scoping |
| **OpenCode** | Sixel image support, Dev Container feature request, memory megathread |
| **Qwen Code** | Python SDK, Traditional Chinese UI, API preconnect optimization |

---

## 5. Community Momentum & Maturity

### High-Momentum Tools

| Tool | Evidence | Trajectory |
|------|----------|------------|
| **Qwen Code** | 42 PRs in 24h, searchable auth flow, Python SDK in progress | 🚀 Rapidly ascending |
| **Gemini CLI** | 20 PRs, voice mode advancing, memory improvements | 🚀 Rapidly ascending |
| **Kimi Code CLI** | 27 PRs, RalphFlow architecture, PTY improvements | 🚀 Rapidly ascending |

### Stable but Challenged

| Tool | Evidence | Trajectory |
|------|----------|------------|
| **Claude Code** | 583-comment model quality issue, /buddy removal backlash | ➡️ Contested |
| **OpenAI Codex** | Platform packaging failures, context regressions | ➡️ Contested |
| **OpenCode** | Memory megathread (63 comments), Bun crashes | ➡️ Contested |

### Low-Activity Concerns

| Tool | Evidence | Trajectory |
|------|----------|------------|
| **Copilot CLI** | 1 PR in 24h despite 50 issues, model availability gap | ⚠️ Stalled |

### Maturity Indicators

| Tool | Stability | Documentation | Ecosystem |
|------|-----------|---------------|-----------|
| **Claude Code** | High (mature plugin system) | Excellent | Extensive |
| **OpenAI Codex** | Medium (packaging regressions) | Good | Growing |
| **Gemini CLI** | Medium (nightly-heavy) | Good | Emerging |
| **Copilot CLI** | Medium (session corruption) | Good | Limited |
| **Kimi Code CLI** | Medium (terminal issues) | Good | Growing |
| **OpenCode** | Low (memory issues) | Good | Active |
| **Qwen Code** | Medium (rapid iteration) | Good | Emerging |

---

## 6. Trend Signals

### For Tool Developers

1. **Model Quality Transparency is Non-Negotiable**
   - Claude Code's 583-comment backlash (#42796) demonstrates that model regressions without clear communication destroy trust. Users need changelogs, rollback options, and honest communication when model behavior changes.

2. **Session Management is a Competitive Moat**
   - All seven tools struggle with session persistence, corruption, and resume reliability. Tools that solve this elegantly (Gemini CLI's session-manager plugin, Copilot CLI's session sync) will differentiate significantly.

3. **MCP is the Extension Standard**
   - Community demand for MCP improvements across all tools confirms this protocol's dominance. Tools without first-class MCP support (Copilot CLI) face feature parity pressure.

4. **Platform Packaging Cannot Be an Afterthought**
   - OpenAI Codex and Copilot CLI's packaging failures (missing Linux binaries, Windows startup crashes) cause immediate user abandonment. Cross-platform CI/CD must be a first-class concern.

5. **Cost Visibility Drives Trust**
   - Rate limiting UX and token consumption transparency are top pain points. Tools should provide real-time usage dashboards and predictable rate limit behavior.

### For Enterprise Decision-Makers

1. **Evaluate Based on Plugin Ecosystem, Not Just Model**
   - Claude Code and OpenCode lead in extensibility. Kimi Code CLI and Qwen Code are rapidly closing the gap with Claude-compatible plugin support.

2. **Cross-Tool Portability is Emerging**
   - Claude-compatible local plugin requests across multiple tools (Kimi Code CLI #1714, OpenCode) suggest a converging plugin API. Standardization could enable tool-agnostic workflows.

3. **Chinese Market Tools Are Accelerating**
   - Qwen Code and Kimi Code CLI show aggressive feature development and localization investment. For teams operating in or with Chinese markets, these tools offer competitive advantages.

4. **Authentication is a Weakness Across the Board**
   - OAuth flow failures, token rotation issues, and proxy compatibility problems affect all tools. Enterprise environments with custom auth infrastructure should expect integration friction.

### For the Industry

1. **The "AI CLI" Category is Consolidating Around Core Features**
   - Session management, MCP integration, multi-model support, and terminal UX are now table stakes. Differentiation will shift to specialized domains (voice, enterprise security, local inference).

2. **Memory and Context Management Remain Unsolved**
   - Every tool has active memory-related issues. The community is requesting AST-aware context, proactive memory writes, and configurable context windows—indicating demand for smarter context management.

3. **Developer Experience Gaps Persist**
   - Hook configuration breakage (Claude Code), XDG non-compliance (Copilot CLI), and extension lifecycle issues (OpenCode) indicate that DX is still secondary to feature development.

4. **Voice Mode is the Next Frontier**
   - Gemini CLI's real-time voice mode and Qwen Code's voice input request signal that CLI tools are expanding beyond text-only interaction.

---

*Report generated from GitHub activity across 7 AI CLI tools on 2026-04-24. Data reflects last-24h activity and may not represent long-term trends.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

<think>The user wants me to generate a structured digest for Claude Code community based on the provided GitHub data. Let me analyze the data and create a professional, concise digest.

Let me organize the information:

**Releases:**
- v2.1.119: Settings now persist to ~/.claude/settings.json with override precedence, added prUrlTemplate setting

**Hot Issues (top 10 by comment count):**
1. #42796 - MODEL - Claude Code unusable for complex engineering tasks (583 comments, 2077 👍) - CLOSED
2. #45596 - Bring Back Buddy (216 comments, 935 👍) - OPEN
3. #41930 - Usage limit drain bug (108 comments) - CLOSED
4. #24057 - MCP servers/hooks/plugins should auto-reload (24 comments) - OPEN
5. #38098 - Telegram plugin auto-loads in all sessions (20 comments) - OPEN
6. #11085 - Persistent user-level MCP configurations (20 comments) - OPEN
7. #37793 - Subagents fail with 'prompt too long' with many MCP servers (14 comments) - OPEN
8. #46727 - Opus 4.6 Max hallucinations (10 comments) - CLOSED
9. #27780 - Analytics Admin API doesn't return subscription/OAuth users (10 comments) - OPEN
10. #44197 - High usage after continue (8 comments) - CLOSED

**Key PRs:**
1. #52650 - Open PR (farm bureau benefits tool)
2. #47676 - CLOSED - fix YAML in hookify and plugin-dev
3. #47674 - CLOSED - fix theme name typo
4. #47673 - CLOSED - add missing plugin.json manifest
5. #26328 - CLOSED - session-manager plugin
6. #52239 - CLOSED - point $schema at schemastore.org


7. #52418 - OPEN - prevent heredoc injection
8. #52417 - OPEN - add explicit sort parameters
9. #52416 - OPEN - escape regex metacharacters
10. #52415 - OPEN - normalize whitespace
11. #41518 - OPEN - Fully Open Source Claude Code

Now I'll structure this into a professional digest format.
</think>

# Claude Code Community Digest

**Date:** 2026-04-24
**Source:** github.com/anthropics/claude-code

---

## 1. Today's Highlights

The v2.1.119 release introduces persistent settings storage at `~/.claude/settings.json` with full override precedence, plus a customizable `prUrlTemplate` for PR badge links. Community attention remains heavily focused on model quality regressions (Issue #42796 with 583 comments) and the removal of the `/buddy` skill (Issue #45596 with 216 comments), both of which continue to drive significant discussion despite one being closed.

---

## 2. Releases

### v2.1.119
- **Settings persistence:** `/config` settings (theme, editor mode, verbose, etc.) now persist to `~/.claude/settings.json` and participate in project/local/policy override precedence
- **PR badge customization:** Added `prUrlTemplate` setting to point the footer PR badge at a custom code-review URL instead of github.com

---

## 3. Hot Issues

| # | Issue | Comments | 👍 | Status | Why It Matters |
|---|-------|----------|-----|--------|----------------|
| [#42796](https://github.com/anthropics/claude-code/issues/42796) | Claude Code unusable for complex engineering tasks with Feb updates | 583 | 2,077 | CLOSED | Massive community backlash over model quality; 2,000+ developers affected; highlights tension between model updates and engineering reliability |
| [#45596](https://github.com/anthropics/claude-code/issues/45596) | Bring Back Buddy — A Consolidated Plea | 216 | 935 | OPEN | Community mourning removal of `/buddy` skill with no changelog notice; signals need for better deprecation communication |
| [#41930](https://github.com/anthropics/claude-code/issues/41930) | Widespread abnormal usage limit drain | 108 | 85 | CLOSED | Multiple root causes identified; raises concerns about cost transparency and API communication |
| [#24057](https://github.com/anthropics/claude-code/issues/24057) | MCP servers/hooks/plugins should auto-reload | 24 | 8 | OPEN | Developer workflow friction; requires full session restart on config changes |
| [#38098](https://github.com/anthropics/claude-code/issues/38098) | Telegram plugin auto-loads in all sessions | 20 | 7 | OPEN | Plugin isolation bug affecting user experience |
| [#11085](https://github.com/anthropics/claude-code/issues/11085) | Persistent user-level MCP configurations | 20 | 29 | OPEN | Feature gap vs competitors; users want per-project MCP server enable/disable |
| [#37793](https://github.com/anthropics/claude-code/issues/37793) | Subagents fail with 'prompt too long' (200k+ tokens) | 14 | 10 | OPEN | Scalability issue with many MCP servers; breaks multi-agent workflows |
| [#46727](https://github.com/anthropics/claude-code/issues/46727) | Opus 4.6 Max systematic hallucinations | 10 | 3 | CLOSED | Quality regression report for high-tier model |
| [#27780](https://github.com/anthropics/claude-code/issues/27780) | Analytics Admin API missing subscription/OAuth users | 10 | 9 | OPEN | Enterprise integration gap; blocks proper usage analytics |
| [#44197](https://github.com/anthropics/claude-code/issues/44197) | 56% usage in 5h after "continue" | 8 | 0 | CLOSED | Cost management concern; excessive token consumption on simple tasks |

---

## 4. Key PR Progress

| # | PR | Status | Summary |
|---|-----|--------|---------|
| [#52650](https://github.com/anthropics/claude-code/pull/52650) | Farm bureau benefits tool | OPEN | New tool contribution |
| [#47676](https://github.com/anthropics/claude-code/pull/47676) | Fix YAML in hookify/plugin-dev | CLOSED | Resolved YAML parsing errors in agent frontmatter |
| [#47674](https://github.com/anthropics/claude-code/pull/47674) | Fix theme name typo | CLOSED | Corrected "powerline10k" → "powerlevel10k" in Dockerfile |
| [#47673](https://github.com/anthropics/claude-code/pull/47673) | Add missing plugin.json manifest | CLOSED | Completed plugin-dev plugin manifest |
| [#26328](https://github.com/anthropics/claude-code/pull/26328) | Session-manager plugin | CLOSED | **Major feature:** `/session-manager:delete`, list, and cleanup commands |
| [#52239](https://github.com/anthropics/claude-code/pull/52239) | Point $schema at schemastore.org | CLOSED | Fixed 404 schema URL for better editor integration |
| [#52418](https://github.com/anthropics/claude-code/pull/52418) | Prevent heredoc injection | OPEN | Security fix for ralph loop setup script |
| [#52417](https://github.com/anthropics/claude-code/pull/52417) | Add explicit sort parameters | OPEN | API query optimization |
| [#52416](https://github.com/anthropics/claude-code/pull/52416) | Escape regex metacharacters | OPEN | Robustness fix for frontmatter parsing |
| [#52415](https://github.com/anthropics/claude-code/pull/52415) | Normalize whitespace in completion | OPEN | Fix comparison failures in promise validation |
| [#41518](https://github.com/anthropics/claude-code/pull/41518) | Fully Open Source Claude Code | OPEN | Community effort to extract and build from npm package |

---

## 5. Feature Request Trends

Analysis of open issues reveals these dominant feature directions:

1. **Session Management** — Resume last session by default, session lifecycle controls (delete, list, cleanup)
2. **MCP Server Improvements** — Auto-reload on config change, persistent user-level enable/disable, better handling of many servers
3. **Terminal Integration** — Propagate session name to terminal title via escape sequences
4. **Cost Controls** — Better visibility into token consumption, usage alerts, cost-per-task tracking
5. **Plugin System** — Plugin isolation fixes, manifest validation, hook system improvements

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **Model quality regressions** | High (Issue #42796: 2,077 👍) | Engineers unable to rely on Claude Code for complex tasks |
| **Silent feature removal** | High (Issue #45596: 935 👍) | Broken workflows without deprecation notice |
| **Session restart fatigue** | Medium | MCP config changes require full restart, losing context |
| **Token consumption opacity** | Medium | Users surprised by rapid usage limit depletion |
| **Subagent scalability** | Medium | Fails when many MCP servers configured |
| **Documentation gaps** | Low-Medium | Status line docs missing `effort.level` and `thinking.enabled` fields |

---

*Generated from GitHub data • Total issues tracked: 50 • Total PRs: 11*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate a structured digest for OpenAI Codex community for 2026-04-24 based on the provided GitHub data. Let me analyze the data and create a comprehensive digest.

Let me organize the information:

**Releases:**
- rust-v0.124.0: 0.124.0 with new TUI quick reasoning controls
- rust-v0.124.0-alpha.3, alpha.2, alpha.1: Pre-release versions

**Top Issues (by comment count):**
1. #10450 - Remote Development in Codex Desktop App (156 comments, 596 👍)
2. #16231 - High CPU usage on macOS (47 comments, 58 👍)
3. #11023 - Linux release request (15 comments, 59 👍)
4. #13555 - Missing optional dependency on Ubuntu (12 comments)
5. #18341 - Blurred overlay on Mac (12 comments, 8 👍)
6. #3808 - Codex stopped doing Code Reviews (9 comments, 11 👍)
7. #17390 - Unable to use after update (9 comments, 2 👍)
8. #11735 - Stream disconnected (9 comments, 1 👍)
9. #19142 - Long context regressed (8 comments, 5 👍)
10. #16535 - Slash commands not working (8 comments, 1 👍)

**Key PRs:**
1. #19246 - Increase app-server WebSocket outbound buffer (CLOSED)
2. #18950 - Let model providers own model discovery
3. #18900 - Migrate fork and resume reads to thread store
4. #18880 - Add debug trace reduction command
5. #19048 - Expose AWS account state from account/read
6. #18897 - Add sticky environment API and thread state


7. #19247 - Apply truncation policy to unified_exec
8. #18265 - Avoid instant remote disconnects under websocket queue pressure (CLOSED)
9. #19244 - Update unix socket transport to use WebSocket upgrade
10. #19231 - Make profiles represent enforcement

I'll focus on the most impactful technical developments and community discussions. The digest will highlight key improvements in WebSocket handling, thread management, and environment interactions, while also addressing critical user-reported issues like CPU usage and dependency problems.
</think>

# OpenAI Codex Community Digest

**Date:** 2026-04-24

---

## 1. Today's Highlights

The **v0.124.0** stable release introduces quick reasoning controls in the TUI (`Alt+,` / `Alt+.`), addressing a key user experience gap. Critical regressions dominate today's discussions: a long-context failure on GPT-5.4 affecting ~290k token contexts, high CPU usage on Apple Silicon Macs, and missing platform binaries for Linux/Windows users. On the infrastructure side, two PRs addressing WebSocket stability have landed, and a major auth refactor is progressing through review.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **0.124.0** | Stable | TUI quick reasoning controls (`Alt+,` / `Alt+.`); accepted model upgrades now reset reasoning to model defaults instead of carrying stale settings. App-server sessions now support multiple environments. |
| 0.124.0-alpha.3/2/1 | Pre-release | Successive alpha builds leading to stable. |

**Upgrade note:** Users on 0.124.0-alpha.x should upgrade to stable to avoid hook configuration regressions (#19199).

---

## 3. Hot Issues

| # | Issue | Author | Comments | 👍 | Why It Matters |
|---|-------|--------|----------|----|----------------|
| **#10450** | [Remote Development in Codex Desktop App](https://github.com/openai/codex/issues/10450) | @pocca2048 | 156 | 596 | Top-voted feature request; users want Codex App to support remote workspaces (SSH, containers) similar to VS Code Remote Development. 596 👍 signals strong demand for parity with existing IDE workflows. |
| **#16231** | [High CPU usage on macOS after updating VS Code extension](https://github.com/openai/codex/issues/16231) | @Filly-MinghaoLUO | 47 | 58 | Affects Apple Silicon (M5 Pro) users on macOS Tahoe 26.4; 47 comments suggest a widespread regression in the VS Code extension's event loop or background polling. |
| **#11023** | [Codex App for Linux](https://github.com/openai/codex/issues/11023) | @Suhaibinator | 15 | 59 | Linux users blocked from Mac-specific issues (#10432) have no viable alternative; 59 👍 indicates significant pent-up demand. |
| **#13555** | [Missing @openai/codex-linux-x64 on Ubuntu](https://github.com/openai/codex/issues/13555) | @tsugumi-sys | 12 | 0 | CLI fails to install on Ubuntu x86_64 due to missing optional dependency; blocks production use. |
| **#18341** | [Blurred overlay below composer on Intel Mac](https://github.com/openai/codex/issues/18341) | @vulcanhelix | 12 | 8 | Rendering bug on Intel Macs (macOS 15.0.1) creates persistent visual artifacts; affects usability. |
| **#19142** | [GPT-5.4 long context regressed: ~672k worked Apr 22, ~290k fails Apr 23](https://github.com/openai/codex/issues/19142) | @markobogoevski-dev | 8 | 5 | Sharp regression in context window handling within 24 hours; users relying on large codebase context are blocked. |
| **#19243** | [Missing @openai/codex-win32-x64 on Windows v0.124](https://github.com/openai/codex/issues/19243) | @asdfqwerzxcc | 4 | 1 | Windows users unable to run CLI after upgrading to 0.124.0; likely a packaging issue. |
| **#19196** | ['Full Access' permissions broken -- network calls still sandboxed](https://github.com/openai/codex/issues/19196) | @agjones | 5 | 8 | Security/permissions regression where `DangerFullAccess` profile fails to unblock network access; critical for CI/CD workflows. |
| **#19220** | [macOS startup failure: unsupported feature `workspace_dependencies`](https://github.com/openai/codex/issues/19220) | @SnowfallHD | 5 | 0 | App fails to start on Darwin 25.4 after update; blocks entire workflow for affected users. |
| **#19199** | [codex-cli 0.124.0 fails to start when hook config present](https://github.com/openai/codex/issues/19199) | @elmakus | 2 | 2 | Hook configuration format incompatibility with 0.124.0; users with custom hooks cannot launch CLI. |

---

## 4. Key PR Progress

| # | PR | Author | Status | Summary |
|---|-----|--------|--------|---------|
| **#19246** | [Increase app-server WebSocket outbound buffer](https://github.com/openai/codex/pull/19246) | @etraut-openai | **CLOSED** | Fixes #18203. Increases per-connection writer queue capacity beyond 128 messages to prevent disconnects during bursty turn/progress notifications on remote TUI clients. |
| **#18265** | [Avoid instant remote disconnects under websocket queue pressure](https://github.com/openai/codex/pull/18265) | @etraut-openai | **CLOSED** | Companion fix to #19246; changes slow-client signal behavior to allow healthy WebSocket clients to handle temporary backpressure. |
| **#18950** | [Let model providers own model discovery](https://github.com/openai/codex/pull/18950) | @celia-oai | Open | Refactors `codex-models-manager` to delegate provider-specific concerns (auth, telemetry, catalog sourcing) to providers themselves, improving reusability. |
| **#18897** | [Add sticky environment API and thread state](https://github.com/openai/codex/pull/18897) | @starr-openai | Open | Persists environment selections at thread level and carries them through session state; enables consistent environment across turns. |
| **#19244** | [Update unix socket transport to use WebSocket upgrade](https://github.com/openai/codex/pull/19244) | @willwang-openai | Open | Standardizes Unix socket connections to use HTTP WebSocket upgrade handshake, improving protocol consistency. |
| **#18811** | [Route Codex auth through AuthProvider](https://github.com/openai/codex/pull/18811) | @efrazer-oai | **CLOSED** | Major auth refactor; moves backend request authentication from direct bearer-token handling to a shared `AuthProvider` trait. |
| **#18904** | [Load AgentIdentity from JWT login/env](https://github.com/openai/codex/pull/18904) | @efrazer-oai | Open | Enables programmatic AgentIdentity users to authenticate via stdin or environment variables; complements #18811. |
| **#19247** | [Apply truncation policy to unified_exec](https://github.com/openai/codex/pull/19247) | @sayan-oai | Open | Ensures `truncation_policy` is respected in `unified_exec` and `write_stdin`, fixing output token clamping. |
| **#19231** | [Make profiles represent enforcement](https://github.com/openai/codex/pull/19231) | @bolinfest | Open | Refines `PermissionProfile` to faithfully represent sandboxing modes (`DangerFullAccess`, `ExternalSandbox`); fixes lossy profile handling. |
| **#19054** | [Add background agent task auth](https://github.com/openai/codex/pull/19054) | @adrian-openai | Open | Part of HAI reintroduction stack; adds auth primitives for background agent tasks. |

---

## 5. Feature Request Trends

Analysis of open issues reveals these dominant themes:

1. **Cross-Platform Parity** — Linux desktop app support (#11023), remote development (#10450), and consistent platform binaries are top requests. Users want Codex to match VS Code's platform coverage.

2. **Performance & Resource Usage** — High CPU on macOS (#16231), memory/context regressions (#19142), and Fast mode credit inefficiency (#18692) indicate users need predictable resource behavior, especially on Apple Silicon.

3. **Session & Profile Management** — Multiple simultaneous profiles (#18655), adjustable chat width (#16669), and `/recap` alias (#18884) reflect demand for richer session customization.

4. **Permissions & Sandboxing** — Full Access not unblocking network (#19196), Git permission errors (#19190), and seatbelt debug flags (#19218) show users need fine-grained control for CI/CD and development workflows.

5. **UX Enhancements** — Claude-style recap (#18884), undo without Git dependency (#19205), and model switching in non-project chats (#19213) are high-leverage usability improvements.

---

## 6. Developer Pain Points

| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **Platform binary packaging failures** | High | #13555 (Ubuntu), #19243 (Windows), #19220 (macOS startup) — users cannot install or run CLI after updates. |
| **Context window regressions** | High | #19142 — long context handling degraded sharply, breaking large codebase workflows. |
| **VS Code extension instability** | High | #16231 (CPU), #19181 (flash/blink), #18993 (history broken) — core IDE integration feels unreliable. |
| **Hook configuration breakage** | Medium | #19199 — 0.124.0 fails with hook config present; format incompatibility blocks power users. |
| **Permissions/sandboxing confusion** | Medium | #19196, #19190, #19204 — Full Access doesn't behave as expected; Git operations fail due to sandbox restrictions. |
| **Connectivity & streaming** | Medium | #11735, #19255 — stream disconnects and auto-compact errors interrupt sessions. |
| **Rate limit visibility** | Low-Medium | #18692, #19242 — users unclear on credit consumption vs. actual speed; balance discrepancies reported. |

**Bottom line:** The 0.124.0 release introduced regressions in platform packaging, hook configuration, and context handling that are blocking users. The auth provider refactor (#18811) and WebSocket stability fixes (#19246, #18265) are positive infrastructure improvements. Remote development and Linux support remain the most-requested long-term features.

---

*Generated from github.com/openai/codex activity on 2026-04-24.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a structured English digest for the Gemini CLI community based on the provided GitHub data. Let me analyze the data and create a comprehensive digest following the specified format.

Let me organize the information:

**Releases (last 24h):**
1. v0.41.0-nightly.20260423.gd1c91f526 - with fixes for YOLO mode and ripgrep binaries
2. v0.40.0-preview.2 - version bump and SSL error retry fix
3. v0.39.0 - policy priorities refactor and memory test harness

**Issues (top 30 by comment count):**
1. #22745 - AST-aware file reads/search/mapping (5 comments)
2. #24916 - Permission asking repeatedly (3 comments)
3. #22323 - Subagent recovery after MAX_TURNS (3 comments)
4. #25892 - Agent Rule Violations (2 comments)
5. #25166 - Shell command stuck with "Waiting input" (2 comments)
6. #23571 - Model creates tmp scripts in random spots (2 comments)
7. #25901 - Faster quota use on 0.39.0 (1 comment)
8. #25216 - Gemini failed to open in temporary path A:\ (1 comment)
9. #24915 - Thick black border at prompt bar (1 comment)
10. #24202 - SSH text scrambled (1 comment)
11. #23582 - Subagents awareness of approval modes (1 comment)
12. #22819 - Memory routing: global vs project (1 comment)
13. #22816 - Multiple indents for dependencies (1 comment)
14. #22809 - Tune main agent for proactive memory writes (1 comment)
15. #22746 - AST aware CLI tools (1 comment)


16. #22672 - Stop destructive behavior (1 comment)
17. #25902 - Extensions install feedback (0 comments)
18. #25895 - Auto-memory skill extraction (0 comments)
19. #25218 - Table renders incrementally (0 comments)
20. #24943 - Clarify parallel tool call layouts (0 comments)
21. #24935 - Corruption after exiting editors (0 comments)
22. #24546 - Helper to detect SSH (0 comments)
23. #24470 - Scroll issues with long chats (0 comments)
24. #24353 - Robust component level evaluations (0 comments)
25. #24246 - 400 error with > 128 tools (0 comments)
26. #24037 - Tracker update during replanning (0 comments)
27. #23925 - Enable tracker by default (0 comments)
28. #23897 - Behavioral eval for subagent rejections (0 comments)
29. #23823 - Update internal utility models (0 comments)
30. #23556 - Investigate pathological compression (0 comments)

**Pull Requests (top 20 by comment count):**
1. #25900 - fix(core): prefer pwsh.exe over Windows PowerShell 5.1
2. #25888 - feat(repo): add gemini-cli-bot metrics and workflows
3. #25846 - Changelog for v0.40.0-preview.2
4. #25848 - Changelog for v0.39.0
5. #25893 - fix(core): drain stderr stream unconditionally
6. #25894 - fix(cli): allow output redirection for cli commands
7. #25874 - update FatalUntrustedWorkspaceError message (CLOSED)
8. #25409 - feat(core): wire up the new ContextManager and AgentChatHistory
9. #25827 - fix(cli): prevent duplicate SessionStart systemMessage render
10. #25873 - feat(memory): persist auto-memory scratchpad for skill extraction
11. #25885 - fix(core): prevent ENOENT crash due to proper-lockfile race condition
12. #25604 - feat(core,cli): add support for Gemma 4 models (CLOSED)
13. #25802 - fix(cli): render LaTeX-style output as Unicode
14. #24174 - feat(voice): implement real-time voice mode
15. #25890 - fix(cli): use os.homedir() for home directory warning check
16. #25758 - perf(core): fix slow boot by fetching experiments and quota asynchronously (CLOSED)
17. #25877 - feat: add compactToolOutputAllowlist setting
18. #25880 - fix(ui): corrected background color check (CLOSED)
19. #25886 - feat(routing): availability-aware auto-routing with best-effort pro
20. #25882 - fix(cli): restrict ctrl+backspace detection to Windows Terminal only

Now I'll organize this into a structured digest with the required sections.
</think>

# Gemini CLI Community Digest

**Date:** 2026-04-24  
**Source:** github.com/google-gemini/gemini-cli

---

## 1. Today's Highlights

The Gemini CLI team released **v0.41.0-nightly** with critical fixes including YOLO mode protection and offline ripgrep support via SEA bundling. A new **gemini-cli-bot** architecture is being introduced with pulse maintenance and brain investigation workflows, signaling increased automation in repository management. Windows users see significant improvements with PowerShell 5.1 compatibility fixes and proper stderr handling for MCP servers.

---

## 2. Releases

### v0.41.0-nightly.20260423.gd1c91f526
- **Fix:** Prevent YOLO mode from being downgraded ([#25341](https://github.com/google-gemini/gemini-cli/pull/25341))
- **Feature:** Bundle ripgrep binaries into SEA for offline support ([#25342](https://github.com/google-gemini/gemini-cli/pull/25342))

### v0.40.0-preview.2
- **Chore:** Version bump to 0.40.0-nightly.20260414.g5b1f7375a
- **Fix:** Retry additional OpenSSL 3.x SSL errors during streaming

### v0.39.0
- **Refactor:** Simplify policy priorities and consolidate read-only rules ([#24849](https://github.com/google-gemini/gemini-cli/pull/24849))
- **Feature:** Add memory usage integration test harness ([#24876](https://github.com/google-gemini/gemini-cli/pull/24876))

---

## 3. Hot Issues

| # | Issue | Summary | Impact | Link |
|---|-------|---------|--------|------|
| 1 | **AST-aware file operations** | Epic tracking value of AST-aware file reads, search, and codebase mapping to reduce tool call turns and token noise | High—could significantly improve agent precision | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) |
| 2 | **Permission prompts repeating** | CLI repeatedly asks for file permissions even after "allow for all future sessions" | User experience blocker; 3 comments | [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) |
| 3 | **Subagent MAX_TURNS hiding** | Subagent reports GOAL success despite hitting max turn limit without analysis | Reliability concern; 2 👍 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) |
| 4 | **Agent rule violations** | Agent repeatedly violates project coding guidelines and modifies off-limits files | Security/trust issue; 2 comments | [#25892](https://github.com/google-gemini/gemini-cli/issues/25892) |
| 5 | **Shell "Waiting input" hang** | Shell commands complete but CLI hangs showing "Awaiting user input" | Frequent crash scenario; 3 👍 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) |
| 6 | **Tmp scripts in random spots** | Model generates edit scripts across various directories when shell execution restricted | Workspace cleanliness; 2 comments | [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) |
| 7 | **Quota exhaustion faster on 0.39.0** | Anecdotal reports of significantly faster quota depletion after upgrade | Cost/usage concern; 1 comment | [#25901](https://github.com/google-gemini/gemini-cli/issues/25901) |
| 8 | **A:\ path EISDIR error** | Critical error when running in Windows temp path A:\ | Windows edge case; 1 comment | [#25216](https://github.com/google-gemini/gemini-cli/issues/25216) |
| 9 | **SSH text scrambled** | Terminal text becomes unusable when running over SSH to cloudtop | Remote workflow blocker; 1 comment | [#24202](https://github.com/google-gemini/gemini-cli/issues/24202) |
| 10 | **Subagent approval mode awareness** | Subagents lack awareness of Plan/Auto-Edit modes, causing instruction conflicts | Architecture gap; 1 👍 | [#23582](https://github.com/google-gemini/gemini-cli/issues/23582) |

---

## 4. Key PR Progress

| # | PR | Description | Priority | Link |
|---|-----|-------------|----------|------|
| 1 | **#25900** | Fix PowerShell 5.1 stripping double quotes—prefer pwsh.exe on Windows | P2 | [#25900](https://github.com/google-gemini/gemini-cli/pull/25900) |
| 2 | **#25888** | Add gemini-cli-bot metrics and workflows (Pulse + Brain architecture) | P1 | [#25888](https://github.com/google-gemini/gemini-cli/pull/25888) |
| 3 | **#25893** | Drain stderr stream unconditionally for StdioClientTransport—fixes MCP server deadlocks | Need Issue | [#25893](https://github.com/google-gemini/gemini-cli/pull/25893) |
| 4 | **#25894** | Allow output redirection for CLI subcommands (fixes piped output suppression) | Need Issue | [#25894](https://github.com/google-gemini/gemini-cli/pull/25894) |
| 5 | **#25885** | Prevent ENOENT crash from proper-lockfile race condition on startup | P0 | [#25885](https://github.com/google-gemini/gemini-cli/pull/25885) |
| 6 | **#25877** | Add `compactToolOutputAllowlist` setting for UI tool output control | Feature | [#25877](https://github.com/google-gemini/gemini-cli/pull/25877) |
| 7 | **#25886** | Availability-aware auto-routing with "Best Effort Pro" fallback to Flash | Feature | [#25886](https://github.com/google-gemini/gemini-cli/pull/25886) |
| 8 | **#25873** | Persist auto-memory scratchpad for skill extraction (-16.7% fewer extractor turns) | Feature | [#25873](https://github.com/google-gemini/gemini-cli/pull/25873) |
| 9 | **#24174** | Real-time voice mode with cloud (Gemini Live API) and local (Whisper.cpp) backends | Feature | [#24174](https://github.com/google-gemini/gemini-cli/pull/24174) |
| 10 | **#25758** | Fix slow boot by fetching experiments and quota asynchronously | Performance | [#25758](https://github.com/google-gemini/gemini-cli/pull/25758) |

---

## 5. Feature Request Trends

Based on issue analysis, the community is requesting:

1. **Memory & Context Management**
   - Global vs. project memory routing ([#22819](https://github.com/google-gemini/gemini-cli/issues/22819))
   - Proactive memory write prompts ([#22809](https://github.com/google-gemini/gemini-cli/issues/22809))
   - Auto-memory skill extraction improvements ([#25895](https://github.com/google-gemini/gemini-cli/issues/25895))

2. **Agent Reliability & Safety**
   - Stop destructive behavior patterns ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672))
   - Subagent awareness of approval modes ([#23582](https://github.com/google-gemini/gemini-cli/issues/23582))
   - Behavioral evaluations for tool call rejections ([#23897](https://github.com/google-gemini/gemini-cli/issues/23897))

3. **Terminal & UI Improvements**
   - SSH detection helper ([#24546](https://github.com/google-gemini/gemini-cli/issues/24546))
   - Scroll stability for long chats ([#24470](https://github.com/google-gemini/gemini-cli/issues/24470))
   - LaTeX rendering as Unicode ([#25802](https://github.com/google-gemini/gemini-cli/pull/25802))

4. **Model & Tooling**
   - Gemma 4 model support (experimental) — merged in [#25604](https://github.com/google-gemini/gemini-cli/pull/25604)
   - AST-aware codebase mapping ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745))
   - Voice mode implementation ([#24174](https://github.com/google-gemini/gemini-cli/pull/24174))

---

## 6. Developer Pain Points

| Pain Point | Frequency | Evidence |
|------------|-----------|----------|
| **Windows PowerShell compatibility** | High | Multiple issues with quote stripping, stderr handling, ctrl+backspace detection |
| **Permission system confusion** | High | Repeated prompts despite "allow all" selection |
| **Shell command hangs** | High | "Waiting input" after completion affects simple commands |
| **Quota exhaustion** | Medium | Reports of faster depletion on v0.39.0 |
| **SSH/random path edge cases** | Medium | EISDIR errors, scrambled text over SSH |
| **Tool call layout confusion** | Medium | Parallel calls grouping incorrectly with auto-approved calls |
| **Slow startup times** | Medium | Addressed in [#25758](https://github.com/google-gemini/gemini-cli/pull/25758) |

---

*Generated: 2026-04-24 | Data period: last 24h*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants a structured English digest for the GitHub Copilot CLI community for 2026-04-24. I need to parse the provided data and generate a report with the specified sections.

**1. Analyze the Data:**

*   **Latest Releases (last 24h):**
    *   v1.0.35 (2026-04-23)
        *   Slash commands support tab-completion.
        *   Shell escape commands (!) use $SHELL.
        *   Permission prompts fix for remote sessions.
        *   Session selector shows branch names.
    *   v1.0.35-6 (Minor patch)
        *   Session sync prompt labels improved.
    *   v1.0.35-5 (Minor patch)
        *   Added COPILOT_GH_HOST env var.
        *   Added Ctrl+Y for accepting completions.
        *   Added `/session delete` subcommands.

*   **Latest Issues (updated in last 24h):**
    *   Total 50 items shown, top 30 by comment count provided.
    *   *Top Issues:*
        *   #1703: Copilot CLI does not list all org-enabled models (Open, 24 comments, 38 upvotes). High priority.
        *   #1347: XDG_CONFIG_HOME not supported (Closed, 8 comments).
        *   #2760: HTTP retry logic for 429 (Closed, 7 comments).
        *   #2787: Endless rate limit prompts (Closed, 5 comments).
        *   #2741: "user_weekly_rate_limited" error (Closed, 5 comments).
        *   #2416: Sub-agents cannot see skills due to token truncation (Closed, 5 comments).
        *   #35: Dev Container feature request (Open, 4 comments).
        *   #2840: Rate limit aborts subagents (Closed, 3 comments).
        *   #20: Codebase indexing feature parity (Open, 3 comments).
        *   #2900: Can't resume sessions after update (Closed, 2 comments).
        *   #2889: Percentage of remaining premium requests fluctuating (Closed, 2 comments).
        *   #2869: Delete Session folder command (Closed, 2 comments).
        *   #2858: Collapse compaction summary by default (Closed, 2 comments).
        *   #2818: Session token expired (Closed, 2 comments).
        *   #2754: Rate limiting causing autopilot malfunction (Closed, 2 comments).
        *   #2747: GitHub CLI Crashes with Copilot extension (Closed, 2 comments).
        *   #2939: Allow subagents to override model (Closed, 1 comment).
        *   #2938: Support .mcp.json in repo root (Closed, 1 comment).
        *   #2936: Model Context Mismatch after Image Read (Closed, 1 comment).
        *   #2937: macOS segfault (Open, 1 comment).
        *   #2933: Task completion reminder overrides instructions (Open, 1 comment).
        *   #2932: Cannot use Grok 4.20 due to reasoningEffort (Open, 1 comment).
        *   #2935: Cannot set free model as default in config (Closed, 1 comment).
        *   #2904: Custom Agent YAML Frontmatter Should Support Reasoning Effort (Open, 1 comment).
        *   #2921: Need more granular agent tool whitelisting (Closed, 1 comment).
        *   #2908: Allow individual command permissions (Closed, 1 comment).
        *   #2896: Programmatic Model Switching (Closed, 1 comment).
        *   #2864: Windows ENOTCONN error (Open, 1 comment).
        *   #2884: Show diffs in readable format (Closed, 1 comment).
        *   #1981: Custom instructions skipped when gitignored (Open, 1 comment).

*   **Latest Pull Requests (last 24h):**
    *   #2565: install: guard against duplicate PATH entries (Open).

**2. Structure the Digest:**

*   **Section 1: Today's Highlights:**
    *   Focus on the release (v1.0.35) and the high-impact open issue (#1703) regarding model listing.
    *   Also mention the session management improvements.

*   **Section 2: Releases:**
    *   Summarize v1.0.35 and the minor patches. Highlight the new env var and Ctrl+Y shortcut.

*   **Section 3: Hot Issues:**
    *   Select 10 issues. Criteria: Comment count, upvotes, recency, and impact.
    *   #1703 (Model list), #1347 (XDG), #2760 (HTTP retry), #2416 (Sub-agent skills), #35 (Dev Container), #20 (Codebase indexing), #2900 (Session resume), #2937 (macOS segfault), #2933 (Task reminder override), #1981 (Custom instructions gitignore).

*   **Section 4: Key PR Progress:**
    *   Only 1 PR listed. #2565 (Duplicate PATH entries). I should mention this and perhaps look for any implied trends or just focus on this one if it's the only one in 24h. The prompt asks to pick 10, but data only shows 1. I will mention the one available and note the context.

*   **Section 5: Feature Request Trends:**
    *   Look for patterns.
    *   Model configuration/control (Grok, free models, reasoning effort, model switching).
    *   Session management (delete, resume, compaction).
    *   Permissions/Security (Granular whitelisting, command permissions).
    *   Context/Indexing (Codebase indexing, MCP support).
    *   Stability (Rate limits, crashes).

*   **Section 6: Developer Pain Points:**
    *   Rate limiting issues (prompts, autopilot malfunction).
    *   Configuration issues (XDG, free models).
    *   Session stability (corruption, expiration).
    *   Windows issues.

**3. Drafting Content:**

*   *Title:* GitHub Copilot CLI Community Digest - 2026-04-24

*   *Highlights:* v1.0.35 release brings UX improvements (Ctrl+Y, $SHELL usage). A critical open issue highlights a disparity between CLI and VS Code model availability.

*   *Releases:* v1.0.35, 35-5, 35-6.

*   *Hot Issues:*
    1.  #1703: Model list disparity (High priority).
    2.  #1347: XDG_CONFIG_HOME (Common config issue).
    3.  #2760: HTTP 429 Retry (Network robustness).
    4.  #2416: Sub-agent skill truncation (Agent architecture).
    5.  #35: Dev Container (DevEx).
    6.  #20: Codebase Indexing (Feature parity).
    7.  #2900: Session corruption (Data loss risk).
    8.  #2937: macOS segfault (Platform stability).
    9.  #2933: Task reminder override (Behavioral bug).
    10. #1981: Gitignore custom instructions (Configuration bug).

*   *Key PR Progress:*
    *   #2565: Fix for duplicate PATH entries on reinstall.

*   *Feature Trends:*
    *   Advanced Model Control (Reasoning effort, per-agent models, provider configuration).
    *   Enterprise Security (Granular permissions, tool whitelisting).
    *   Session Resilience (Better handling of expiration, compaction UI).
    *   Platform Parity (Windows fixes, Dev Containers, Codebase indexing).

*   *Pain Points:*
    *   Rate Limiting UX (Confusing prompts, blocking autopilot).
    *   Configuration Complexity (XDG, free tier restrictions).
    *   Stability (Segfaults, session corruption).

**4. Refinement:**
*   Ensure links are formatted correctly.
*   Keep tone professional.
*   Check constraints: "Pick 10" for Hot Issues and Key PRs. I only have 1 PR. I will note the singular PR but fulfill the 10 for issues. If I cannot find 10 distinct "Key PRs" in the data (since only 1 is listed), I should acknowledge the data provided. The prompt says "Pick 10 important PRs", but the data source only shows 1 PR updated in the last 24h. I will list the one available and explain that it was the only one, or perhaps look at closed PRs implied by the fixes in the release notes? No, the data source explicitly limits "Latest Pull Requests (updated in last 24h)" to 1 item. I will treat that as the sole focus for that section, or perhaps group it with "Recent Development Activity". However, sticking strictly to the prompt "Pick 10 important PRs" is impossible with 1 data point. I will list the one available and mention the lack of others, or stick to the data provided for PRs. Actually, looking at the "Latest Issues", many are closed. Maybe I can treat closed issues that represent resolved PRs? The prompt specifically asks for "Key PR Progress". I will stick to the provided PR list.

Let's double check the "Hot Issues" selection.
1. #1703 (Model list) - 24 comments.
2. #1347 (XDG) - 8 comments.
3. #2760 (HTTP Retry) - 7 comments.
4. #2787 (Endless rate limit) - 5 comments.
5. #2741 (Weekly rate limit) - 5 comments.
6. #2416 (Sub-agent skills) - 5 comments.
7. #35 (Dev Container) - 4 comments.
8. #2840 (Rate limit abort) - 3 comments.
9. #20 (Codebase indexing) - 3 comments.
10. #2900 (Session resume) - 2 comments.
This covers the top comment counts well.

For Feature Trends, I will group the issues by theme.
- Models: #1703, #2932, #2904, #2896, #2935.
- Sessions: #2900, #2869, #2858.
- Permissions: #2921, #2908.
- Platform/DevEx: #35, #20, #2937, #2747.

For Pain Points:
- Rate Limits (#2787, #2741, #2840, #2754).
- Config (#1347, #2935).
- Stability (#2937, #2900).

Okay, ready to write.

One detail: The release versions are v1.0.35, v1.0.35-5, v1.0.35-6. It looks like -5 and -6 are minor iterations or patches on the main release. I will group them under the main release summary.

Links format: `[Issue #1703](https://github.com/github/copilot-cli/issues/1703)`

Check dates: "2026-04-24". Releases are 2026-04-23. Issues updated 2026-04-23/24. PR updated 2026-04-23. All fits.

Final check on PR count: The prompt asks to pick 10 PRs. The data only has 1. I will mention the one PR and state that it was the only PR updated in the last 24 hours, fulfilling the requirement to the best of the data's ability.

Wait, should I look at the closed issues to infer PRs? The prompt says "Key PR Progress". Usually, this implies active or recently merged PRs. The data provided is "Latest Pull Requests". I will stick to that list.

Let's refine the "Feature Request Trends" and "Developer Pain Points" to be distinct. Trends = what people want. Pain = what is breaking their workflow.

Trends:
1. Granular Model Control (Reasoning effort, custom models, switching).
2. Enhanced Security/Permissions (Tool whitelisting, command-level allow/deny).
3. Session Management (Persistence, compaction UI, deletion).
4. Platform Parity (Codebase indexing, Dev Containers, Windows stability).

Pain:
1. Aggressive/Confusing Rate Limiting.
2. Configuration Headaches (XDG, free models).
3. Session Instability (Corruption, expiration).
4. Platform Crashes (macOS segfault, Windows ENOTCONN).

Looks solid. I will generate the response now.
</think>

# GitHub Copilot CLI Community Digest
**Date:** 2026-04-24
**Source:** [github.com/github/copilot-cli](https://github.com/github/copilot-cli)

---

## 1. Today's Highlights

The team released **v1.0.35**, introducing significant UX enhancements including a new `COPILOT_GH_HOST` environment variable for enterprise flexibility and `Ctrl+Y` support for accepting completions. Community attention remains high on model availability; a critical open issue (#1703) highlights a disparity between the models listed in the CLI versus VS Code, preventing users from accessing org-enabled models like Gemini 3.1 Pro. Session management saw improvements, but stability remains a concern with reports of session corruption and macOS segmentation faults.

---

## 2. Releases

**v1.0.35 (Latest)**
- **UX Improvements:** Slash commands now support tab-completion for arguments and subcommands. Shell escape commands (`!`) now respect the `$SHELL` environment variable.
- **TUI Fixes:** Permission prompts now appear correctly in remote sessions, and the session selector displays branch names alongside status.
- **New Environment Variable:** Added `COPILOT_GH_HOST` to allow explicit GitHub hostname configuration, taking precedence over `GH_HOST`.
- **Keyboard Shortcuts:** Added `Ctrl+Y` (in addition to `Tab`) to accept highlighted options in completion popups.
- **Session Management:** Added `/session delete`, `delete <id>`, and `delete-all` subcommands for better session hygiene.

**v1.0.35-5 & v1.0.35-6 (Patches)**
- Improved session sync prompt labels and clarified GitHub.com cross-device sync explanations.

---

## 3. Hot Issues

1. **[#1703](https://github.com/github/copilot-cli/issues/1703) [OPEN] Copilot CLI does not list all org-enabled models**
   - *Why it matters:* This is the most commented issue (24 comments, 38 upvotes), indicating a major feature gap for enterprise users. Users cannot access premium models enabled in their organization (e.g., Gemini 3.1 Pro) via the CLI, while the VS Code extension works fine.
   - *Status:* Open and awaiting triage.

2. **[#1347](https://github.com/github/copilot-cli/issues/1347) [CLOSED] XDG_CONFIG_HOME is not supported correctly**
   - *Why it matters:* A fundamental configuration issue where Copilot fails to respect the `XDG_CONFIG_HOME` standard, causing problems for power users managing dotfiles across multiple systems.
   - *Status:* Closed (presumably fixed or acknowledged).

3. **[#2760](https://github.com/github/copilot-cli/issues/2760) [CLOSED] Implement proper HTTP retry logic for 429 responses**
   - *Why it matters:* The CLI exhibited aggressive retry behavior on rate limits, creating a loop of 20+ rapid retries per minute that degraded network performance and user experience.
   - *Status:* Closed (likely addressed in recent networking updates).

4. **[#2416](https://github.com/github/copilot-cli/issues/2416) [CLOSED] Sub-agents cannot see skills from their own plugin**
   - *Why it matters:* A critical architectural limitation where custom sub-agents only see a truncated list of 29 skills due to `<available_skills>` token truncation, breaking complex multi-agent workflows.
   - *Status:* Closed.

5. **[#35](https://github.com/github/copilot-cli/issues/35) [OPEN] Dev Container for GitHub Copilot CLI**
   - *Why it matters:* A long-standing request (9 months old) to add Dev Container support for Codespaces, which is essential for standardizing development environments for terminal-based AI agents.
   - *Status:* Open.

6. **[#20](https://github.com/github/copilot-cli/issues/20) [OPEN] Codebase indexing should be supported**
   - *Why it matters:* Users are requesting feature parity with the VS Code extension. Without codebase indexing, the CLI lacks deep repository context, limiting its effectiveness for large codebases.
   - *Status:* Open.

7. **[#2900](https://github.com/github/copilot-cli/issues/2900) [CLOSED] Can't resume sessions after update**
   - *Why it matters:* An update on 4/22 caused session files to become corrupt, preventing users from resuming work. This represents a data integrity risk during auto-updates.
   - *Status:* Closed.

8. **[#2937](https://github.com/github/copilot-cli/issues/2937) [OPEN] macOS segfault: EXC_BAD_ACCESS**
   - *Why it matters:* A critical stability bug causing the CLI to crash with a segmentation fault immediately upon invocation on macOS, rendering the tool unusable for affected users.
   - *Status:* Open.

9. **[#2933](https://github.com/github/copilot-cli/issues/2933) [OPEN] Task completion reminder overrides user instructions**
   - *Why it matters:* A behavioral bug where the "always on" `task_complete` directive forces the agent to commit code even when the user explicitly instructed it not to, overriding explicit safety guardrails.
   - *Status:* Open.

10. **[#1981](https://github.com/github/copilot-cli/issues/1981) [OPEN] Custom instructions are skipped when gitignored**
    - *Why it matters:* Copilot silently ignores custom instructions stored in `.github/` if that path is in `.gitignore`, leading to unreliable and confusing behavior for users relying on custom guidelines.
    - *Status:* Open.

---

## 4. Key PR Progress

**Only 1 PR was updated in the last 24 hours.**

1. **[#2565](https://github.com/github/copilot-cli/pull/2565) [OPEN] install: guard against duplicate PATH entries on reinstall**
   - *Focus:* Installation robustness.
   - *Summary:* Running the installer twice without restarting the shell currently appends the PATH configuration line to the shell profile multiple times, leading to bloated configuration files and potential path ordering issues.
   - *Action:* This PR aims to check for existing entries before appending.

---

## 5. Feature Request Trends

Analysis of recent issues reveals several dominant themes driving community demand:

1. **Advanced Model Control:** There is significant pressure for finer control over AI models. Requests include support for specific reasoning efforts per agent (#2904), programmatic model switching based on task complexity (#2896), and configuration of free models as defaults (#2935). Users want the CLI to match the flexibility of the Claude Agent SDK.
2. **Enterprise Security & Permissions:** Developers are requesting granular tool whitelisting (#2921

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>The user wants me to generate a structured English digest for the Kimi Code CLI community, dated 2026-04-24. I need to analyze the provided GitHub data and create a professional technical digest with the following sections:

1. Today's Highlights
2. Releases (if any)
3. Hot Issues (10 noteworthy issues)
4. Key PR Progress (10 important PRs)
5. Feature Request Trends
6. Developer Pain Points

Let me analyze the data:

**Releases**: None in the last 24h

**Issues**: 21 total, I need to pick 10 noteworthy ones. Let me identify the most significant:

1. #1925 - Kimi K2.5 vs K2.6 enhancement (user wants to switch back to K2.5 due to hallucinations)
2. #1990 - Terminal closes in IDEA when using kimi cli (bug)
3. #2040 - VS Code notification enhancement for approval requests
4. #2038 - Bottom toolbar git subprocess causes typing lag
5. #2022 - Dev environment segfault on Python 3.14.0a5 (closed)
6. #1714 - Claude-compatible local plugin support (feature request)
7. #2031 - MCP stdio server fails with 'Server already initialized'
8. #2049 - Session history lost on resume (bug)
9. #2048 - Notification hook with matcher=permission_prompt never triggers
10. #2043 - UTF-8 BOM causes Invalid TOML error
11. #2037 - Shell tool interactive commands cause terminal input corruption
12. #2024 - Subagent context usage not tracked
13. #2021 - OAuth connection flow bug
14. #2019 - Wrong usage color (bug, also has PR fix)
15. #2017 - Conversation cannot continue

**Pull Requests**: 27 total, I need to pick 10 important ones:


I'll highlight the most impactful pull requests that address critical issues and introduce significant improvements. The RalphFlow architecture PR stands out as a potential breakthrough in preventing infinite loops. Several PRs focus on fixing color and usage display problems, which enhance user experience. The MCP configuration loading and yolo mode fixes demonstrate ongoing refinement of the CLI's core functionality. The skill scoping and agent task count PRs show continuous efforts to improve system performance and user interface responsiveness.

The tool strict mode and session ID inclusion PRs represent important quality-of-life improvements. The TTY hang prevention and token rotation fixes address critical stability concerns. The preserved thinking feature and slash command registration expand the CLI's capabilities and user interaction methods.

The community's focus areas reveal a strong emphasis on model performance, cross-platform compatibility, and robust error handling. Key priorities include supporting alternative models, ensuring smooth integration with development environments, and maintaining consistent behavior across different platforms.

Emerging themes highlight the need for enhanced plugin ecosystems, improved context management, and more sophisticated interaction mechanisms. The community is actively seeking solutions for performance bottlenecks, particularly around subprocess interactions and input responsiveness.

Critical technical challenges involve terminal interactions, configuration parsing, and maintaining clean session states. Specific pain points include PTY allocation complexities, UTF-8 encoding issues, and seamless authentication flows across different development tools.
</think>

# Kimi Code CLI Community Digest

**Date:** 2026-04-24
**Source:** github.com/MoonshotAI/kimi-cli

---

## 1. Today's Highlights

The Kimi Code CLI community is actively addressing terminal interaction issues and model configuration concerns. Multiple PRs target UX improvements including the `/usage` command color thresholds, yolo mode refinements, and PTY allocation fixes. The RalphFlow architecture PR introduces an automated iteration framework to prevent infinite loops, representing a significant architectural advancement.

---

## 2. Releases

**No new releases in the last 24 hours.** The latest stable version remains 1.38.0.

---

## 3. Hot Issues

### 1. K2.5 vs K2.6 Model Preference ([#1925](https://github.com/MoonshotAI/kimi-cli/issues/1925))
Users request the ability to switch back to Kimi K2.5, citing that K2.6's extended thinking mode "drowns out creativity and actually increases hallucinations" and removes the model's personality. **8 comments** indicate strong community interest in model selection flexibility.

### 2. Terminal Closes in IDEA ([#1990](https://github.com/MoonshotAI/kimi-cli/issues/1990))
A critical bug where using kimi cli in IntelliJ IDEA causes the entire terminal to close after sending messages. Affects macOS users on Darwin 24.5.0 with kimi-k2.6. **2 comments** suggest this is a high-priority integration issue.

### 3. VS Code Approval Notifications ([#2040](https://github.com/MoonshotAI/kimi-cli/issues/2040))
Feature request to show VS Code native notifications (`showInformationMessage`) when approval is required, preventing missed approvals when VS Code is minimized. **2 comments** highlight this as a significant UX gap.

### 4. Git Subprocess Typing Lag ([#2038](https://github.com/MoonshotAI/kimi-cli/issues/2038))
Bottom toolbar's git branch/status subprocess calls cause noticeable keystroke lag during normal prompt typing. Isolated via binary search—the lag disappears when git subprocesses are disabled. **1 comment** indicates this is a performance bottleneck.

### 5. MCP Server Initialization Conflict ([#2031](https://github.com/MoonshotAI/kimi-cli/issues/2031))
MCP stdio server fails with "Server is already initialized" due to fastmcp's `keep_alive=True` setting. Affects macOS 15.x users with `@steipete/peekaboo` MCP server. **1 comment** shows this blocks MCP integration.

### 6. Session History Lost on Resume ([#2049](https://github.com/MoonshotAI/kimi-cli/issues/2049))
Session history appears on screen but is lost when resuming, affecting Windows 10 users on kimi-for-coding. **0 comments** but represents data integrity concern.

### 7. Permission Prompt Hook Never Triggers ([#2048](https://github.com/MoonshotAI/kimi-cli/issues/2048))
The `Notification` hook with `matcher = "permission_prompt"` never fires despite documentation listing this as a valid use case. **0 comments** indicates potential documentation-code mismatch.

### 8. UTF-8 BOM Causes TOML Parse Failure ([#2043](https://github.com/MoonshotAI/kimi-cli/issues/2043))
Config files with UTF-8 BOM fail to parse with "Empty key at line 1 col 0" error, preventing kimi startup. **0 comments** but affects any user with BOM-enabled editors.

### 9. Shell Tool Interactive Command Corruption ([#2037](https://github.com/MoonshotAI/kimi-cli/issues/2037))
Shell tool closes stdin and lacks PTY allocation, breaking interactive commands (`ssh-add`, `sudo`, `npm init`). **0 comments** but represents a fundamental terminal interaction limitation.

### 10. OAuth Connection Flow Broken ([#2021](https://github.com/MoonshotAI/kimi-cli/issues/2021))
`kimi mcp auth {MCP_SERVER_NAME}` fails during OAuth connection flow on Darwin 25.4.0. **0 comments** but blocks MCP authentication.

---

## 4. Key PR Progress

### 1. RalphFlow Architecture ([#1960](https://github.com/MoonshotAI/kimi-cli/pull/1960))
Introduces automated iteration framework with ephemeral context and convergence detection to prevent infinite loops while enabling robust multi-step workflows.

### 2. Usage Quota Color Fixes ([#2039](https://github.com/MoonshotAI/kimi-cli/pull/2039), [#2046](https://github.com/MoonshotAI/kimi-cli/pull/2046))
Two independent PRs fixing inverted quota colors in `/usage` command. Root cause: `_ratio_color()` receives remaining-quota ratio but thresholds were mapped incorrectly.

### 3. MCP Configuration Loading ([#2047](https://github.com/MoonshotAI/kimi-cli/pull/2047))
Fixes ACP server sessions not loading `~/.kimi/mcp.json`, leaving users without MCP tools in editors like Zed.

### 4. Yolo Mode Refinement ([#2045](https://github.com/MoonshotAI/kimi-cli/pull/2045))
Splits conflated "auto-approve" and "non-interactive" semantics into orthogonal `yolo` and `afk` modes, fixing erroneous model messaging.

### 5. Skill System Prompt Scoping ([#2044](https://github.com/MoonshotAI/kimi-cli/pull/2044))
Scopes skills by group and honors project overrides, fixing project-local skills being invisible to model reasoning.

### 6. Agent Task Count Display ([#2041](https://github.com/MoonshotAI/kimi-cli/pull/2041))
Shows active agent task count in prompt status bar, addressing UX when many background agents are running.

### 7. Tool Strict Mode ([#2036](https://github.com/MoonshotAI/kimi-cli/pull/2036))
Enables OpenAI/Anthropic strict schema validation for core tools: Shell, ReadFile, Grep, WriteFile, StrReplaceFile, SetTodoList.

### 8. TTY Hang Prevention ([#1985](https://github.com/MoonshotAI/kimi-cli/pull/1985))
Adds `os.set_blocking(fd, False)` after `tty.setcbreak()` to prevent TTY hang on exit and ensure proper MCP connection cleanup.

### 9. Preserved Thinking Environment Variable ([#2029](https://github.com/MoonshotAI/kimi-cli/pull/2029))
Adds `KIMI_MODEL_THINKING_KEEP` env var to enable Preserved Thinking on supported models (kimi-k2.6, kimi-k2-thinking).

### 10. Token Rotation Handling ([#2026](https://github.com/MoonshotAI/kimi-cli/pull/2026))
Fixes stale in-memory tokens when concurrent processes rotate refresh tokens, preventing authentication failures.

---

## 5. Feature Request Trends

Analysis of 21 recent issues reveals these dominant feature directions:

| Trend | Frequency | Description |
|-------|-----------|-------------|
| **Model Flexibility** | High | Users want model selection (K2.5 vs K2.6), thinking mode controls, preserved thinking options |
| **Plugin Ecosystem** | High | Claude-compatible local plugin support, MCP server compatibility, skill scoping |
| **Terminal UX** | High | PTY allocation for interactive commands, typing latency fixes, notification hooks |
| **Context Management** | Medium | Subagent context tracking, session history integrity, ephemeral context frameworks |
| **IDE Integration** | Medium | VS Code notifications, IDEA terminal fixes, Zed editor support |
| **Configuration Robustness** | Medium | TOML parsing resilience, UTF-8 BOM handling, config file validation |

---

## 6. Developer Pain Points

### Terminal & Input Issues
- **PTY Allocation**: Interactive commands (`ssh`, `sudo`, `npm init`) fail due to missing pseudo-terminal allocation
- **Typing Latency**: Git subprocess calls in bottom toolbar cause keystroke lag
- **Modal Input Performance**: Extreme latency in inline approval feedback fields

### Configuration & Startup
- **UTF-8 BOM Parsing**: Config files with BOM cause silent startup failures
- **Token Rotation**: Concurrent processes cause authentication failures due to stale in-memory tokens

### MCP Integration
- **Server Initialization**: `keep_alive=True` causes "already initialized" conflicts
- **JSON Schema Strictness**: Moonshot's flavored schema requires explicit `type` fields, breaking standard MCP servers
- **ACP Session MCP Loading**: Local MCP configs not loaded in ACP server sessions

### Model Behavior
- **Thinking Mode Trade-offs**: Extended thinking increases hallucinations and removes personality
- **Context Visibility**: Subagent context consumption invisible to parent agent statistics

### Authentication
- **OAuth Flow**: MCP authentication fails on newer macOS versions
- **Hook Reliability**: Notification hooks with `permission_prompt` matcher never trigger

---

*End of Digest*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate an OpenCode community digest for 2026-04-24 based on the provided GitHub data. Let me analyze the data and create a structured digest with the requested sections.

Let me organize the information:

**Releases:**
- v1.14.22 (latest)
- v1.14.21

**Key Issues (by comment count):**
1. #20695 - Memory Megathread (63 comments) - OPEN
2. #8785 - Bun crash (28 comments) - OPEN
3. #22408 - Kimi K2.6 integration (21 comments) - CLOSED
4. #14808 - Plugin session.created event not firing (15 comments) - OPEN
5. #22683 - 1.4.6 crashing (12 comments) - OPEN
6. #22852 - Claude Opus 4.7 thinking blocks (11 comments) - CLOSED
7. #24039 - GPT-5.5 support (11 comments) - CLOSED
8. #16612 - Stale context/repeating answers (10 comments) - OPEN
9. #14539 - Copilot premium requests (9 comments) - OPEN
10. #23449 - PTY terminal support (8 comments) - OPEN
11. #18969 - tui.footer.items plugin hook (8 comments) - OPEN
12. #10229 - LMStudio API KEY (8 comments) - CLOSED
13. #2784 - Agentrouter provider (6 comments) - CLOSED
14. #20317 - Copilot Claude context limits (6 comments) - CLOSED
15. #15907 - Clipboard over SSH+tmux (5 comments) - OPEN
16. #6309 - Sessions/commits connection (4 comments) - CLOSED
17. #24036 - GPT 5.5 support (4 comments) - CLOSED


18. #23907 - .cmd script permission (4 comments) - OPEN
19. #8634 - Timestamp in chat (4 comments) - OPEN
20. #19515 - Workspace folders (3 comments) - OPEN
21. #23719 - Nix flake broken (3 comments) - OPEN
22. #20452 - Java LSP not working (3 comments) - OPEN
23. #22565 - Tool output truncation (3 comments) - CLOSED
24. #24049 - /vcs/diff OOM (2 comments) - OPEN
25. #24071 - GPT 5.5 stopping mid-message (2 comments) - CLOSED
26. #24061 - ACP Registry agent in Zed (2 comments) - OPEN
27. #24069 - Norton Antivirus flagging (2 comments) - CLOSED
28. #22623 - Azure GPT-5 max_tokens (2 comments) - OPEN
29. #24044 - Nvidia Nim support gone (2 comments) - CLOSED
30. #22233 - Subagent visibility (2 comments) - OPEN

**Key PRs:**
1. #12633 - Auto-accept permission mode - OPEN
2. #24079 - Disable vcs diff auto-fetch - OPEN
3. #24070 - Remote local-network hosts with proxy - CLOSED
4. #4917 - Bash tool shell description - OPEN
5. #13854 - Stop streaming after message completes - OPEN
6. #18767 - Mobile Touch Optimization - OPEN
7. #23269 - Contexty plugin docs - OPEN
8. #24076 - Handle Bun stream errors - OPEN
9. #24055 - Allow gpt-5.5 in Codex OAuth - CLOSED
10. #22098 - Interactive burst TUI logo - CLOSED
11. #16108 - Support .local.md variants - OPEN
12. #24068 - Avoid E2BIG during batched revert - CLOSED
13. #23783 - Grandchild session navigation - OPEN
14. #23785 - Subagent status indicator - OPEN
15. #5903 - Keybinding custom slash commands - OPEN
16. #18306 - Open WebUI provider - OPEN
17. #23890 - Runtime-aware search service - OPEN
18. #23609 - LangSmith tracing plugin docs - OPEN
19. #24058 - Prevent unbounded memory growth - CLOSED
20. #24059 - Evict gitignored files - CLOSED

The most active discussions center on memory management and performance issues (#20695, #24049, #24058), with multiple PRs addressing memory leaks and resource constraints. Model support continues to be a major theme, particularly around GPT-5.5 integration and handling (#24039, #24036, #24071, #24055). There's also significant work on terminal and shell improvements (#23449, #4917, #24079), plugin system enhancements (#18969, #23785), and provider flexibility (#18306, #24070). The community is actively contributing fixes for clipboard functionality, LSP integration, and search capabilities.
</think>

# OpenCode Community Digest — 2026-04-24

---

## 1. Today's Highlights

The OpenCode team shipped **v1.14.22** with critical fixes for session state management and `.npmrc` support, while simultaneously addressing a surge of memory-related issues. The community is actively debating GPT-5.5 integration and model support, with multiple PRs merged to enable the new model. A new experimental flag to disable VCS diff auto-fetch aims to prevent OOM crashes in large workspaces.

---

## 2. Releases

### v1.14.22 (Latest)
- **Core**: Respects `.npmrc` settings during npm installs; ensures custom project icons persist correctly across sessions.
- **Desktop**: Fixes session views and nested session items from getting stuck with stale state when switching between sessions.

### v1.14.21
- **Core**: Adds pull diagnostics support for LSP servers (C#, Kotlin); improves project detection for bare Git repos and worktrees; enhances session compaction to preserve useful context in long threads; adds UTF-8 preservation.
- **Contributors**: Thanks to @StevenTCramer for worktree detection improvements.

---

## 3. Hot Issues

| # | Title | Comments | 👍 | Why It Matters |
|---|-------|----------|----|----------------|
| [#20695](https://github.com/anomalyco/opencode/issues/20695) | Memory Megathread | 63 | 39 | Central tracking for all memory issues; team explicitly requests heap snapshots from users rather than LLM-generated solutions. |
| [#8785](https://github.com/anomalyco/opencode/issues/8785) | Bun has crashed | 28 | 6 | Ongoing Bun runtime crashes on Windows; affects production users with baseline configurations. |
| [#22408](https://github.com/anomalyco/opencode/issues/22408) | Kimi K2.6 integration | 21 | 18 | Feature request for new Kimi models; **CLOSED** — indicates team is evaluating provider additions. |
| [#14808](https://github.com/anomalyco/opencode/issues/14808) | Plugin `session.created` event not firing | 15 | 12 | Critical plugin API breakage; Engram memory system and other plugins can't respond to session creation events. |
| [#22683](https://github.com/anomalyco/opencode/issues/22683) | 1.4.6 constantly crashing | 12 | 1 | Users experiencing frequent crashes with OmO plugin; related to memory issues. |
| [#22852](https://github.com/anomalyco/opencode/issues/22852) | Claude Opus 4.7 thinking blocks not persisting | 11 | 0 | **CLOSED** — Thinking block contents hidden by default in Claude Opus 4.7; affects model output visibility. |
| [#24039](https://github.com/anomalyco/opencode/issues/24039) | Add GPT-5.5 support | 11 | 12 | **CLOSED** — High-demand feature; PR #24055 merged to enable GPT-5.5 in Codex OAuth. |
| [#16612](https://github.com/anomalyco/opencode/issues/16612) | Stale context: repeating previous answers | 10 | 5 | Assistant sometimes responds to previous user message instead of latest input; disrupts workflow. |
| [#14539](https://github.com/anomalyco/opencode/issues/14539) | Copilot premium request consumption | 9 | 3 | Tool usages in Copilot incorrectly consume premium requests; financial impact for enterprise users. |
| [#23449](https://github.com/anomalyco/opencode/issues/23449) | Agent should use integrated PTY terminal | 8 | 1 | Proposal to replace shell spawning with built-in ghostty-web terminal; would improve terminal experience. |

---

## 4. Key PR Progress

| # | Title | Status | Significance |
|---|-------|--------|--------------|
| [#24079](https://github.com/anomalyco/opencode/pull/24079) | Add experimental flag to disable vcs diff auto-fetch | **OPEN** | Partially fixes OOM crashes in umbrella workspaces with nested git repos (#24049, #22683). |
| [#24076](https://github.com/anomalyco/opencode/pull/24076) | Handle Bun stream connection errors with automatic retry | **OPEN** | Improves resilience when LLM providers close streaming connections mid-response. |
| [#24055](https://github.com/anomalyco/opencode/pull/24055) | Allow gpt-5.5 in Codex OAuth model list | **CLOSED** | Enables GPT-5.5 for Codex OAuth users; resolves #24036 and #24039. |
| [#24070](https://github.com/anomalyco/opencode/pull/24070) | Allow remote local-network hosts when proxy env vars set | **CLOSED** | Enables corporate proxy bypass for private hosts (.local, private IPs); improves enterprise compatibility. |
| [#24068](https://github.com/anomalyco/opencode/pull/24068) | Avoid E2BIG during batched revert checkout | **CLOSED** | Prevents command-line length overflows during snapshot operations; critical for large repositories. |
| [#24058](https://github.com/anomalyco/opencode/pull/24058) | Prevent unbounded memory growth from stuck SSE streams | **CLOSED** | Fixes memory accumulation when SSE peers disconnect via TCP half-close; addresses #22198. |
| [#24059](https://github.com/anomalyco/opencode/pull/24059) | Evict gitignored files from shadow snapshot index | **CLOSED** | Prevents staged files from persisting after being added to .gitignore; related to memory megathread #20695. |
| [#23785](https://github.com/anomalyco/opencode/pull/23785) | Add subagent status indicator in prompt footer | **OPEN** | Adds visual feedback for subagent activity; improves UX during multi-agent workflows. |
| [#23783](https://github.com/anomalyco/opencode/pull/23783) | Allow navigation into grandchild sessions from subagent view | **OPEN** | Fixes session navigation bug where grandchild sessions were inaccessible from sub-agent view. |
| [#18306](https://github.com/anomalyco/opencode/pull/18306) | Add Open WebUI provider | **OPEN** | Expands provider ecosystem with Open WebUI integration; builds on previous provider work. |

---

## 5. Feature Request Trends

Analysis of recent issues reveals these dominant feature directions:

1. **Model Support Expansion** — Multiple requests for GPT-5.5, Kimi K2.6, and Claude Opus 4.7 variants. Community wants first-class support for newer model releases with proper context limits and thinking variants.

2. **Terminal & Shell Improvements** — Strong interest in PTY-based integrated terminal (#23449), better shell detection for Bash tool (#4917), and SSH/tmux clipboard support fixes (#15907).

3. **Plugin System Enhancements** — Requests for new plugin hooks including `tui.footer.items` for persistent status displays (#18969), and fixes for event bus reliability (#14808).

4. **Workspace Management** — Multi-directory workspace support (#19515) and improved VCS handling for umbrella repos (#24049).

5. **Provider Flexibility** — Adding new providers (Open WebUI #18306), improving LMStudio integration (#10229), and supporting agentrouter (#2784).

6. **UI/UX Polish** — Timestamps in chat (#8634), subagent visibility improvements (#22233, #23785), and mobile touch optimization (#18767).

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **Memory Leaks & OOM Crashes** | High | Multiple issues (#20695, #22683, #24049, #24058) with heap snapshots being actively collected. |
| **Bun Runtime Instability** | Medium | Crashes on Windows (#8785) and stream connection errors (#24076) affecting reliability. |
| **Session State Staleness** | Medium | Users experiencing repeated answers to old queries (#16612) and stuck session views. |
| **LSP Integration Issues** | Medium | Java LSP (jdtls) regressions (#20452) and Copilot context limit errors (#20317). |
| **Proxy/Corporate Network Friction** | Medium | Local network hosts being incorrectly proxied; now addressed in #24070. |
| **Permission & Security Model** | Low-Medium | Shell script execution bypassing permission prompts (#23907); Norton antivirus false positives (#24069). |
| **Nix Build Breakage** | Low | Flake broken since 1.4.11 (#23719); affects NixOS users. |

---

*Digest generated from GitHub data for [anomalyco/opencode](https://github.com/anomalyco/opencode) — 2026-04-24*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to generate a Qwen Code community digest for 2026-04-24 based on the provided GitHub data. Let me analyze the data and create a structured digest with the requested sections.

Let me organize the information:

**Releases:**
- v0.15.1-nightly.20260424.4e0a37549 - nightly build with fixes for ReadFile, auto-title sessions, i18n sync
- v0.15.1 - stable release with fixes for StreamingToolCallParser and shell time indicator

**Issues (24 total, I'll pick 10 noteworthy):**
1. #3203 - Qwen OAuth Free Tier Policy Adjustment (117 comments, very active)
2. #3384 - Unable to add OpenAI-compatible local LLM (9 comments)
3. #1792 - How to force Chinese responses (CLOSED)
4. #2201 - Read tool loop issue (CLOSED)
5. #3307 - Alibaba Cloud Coding Plan out of stock (CLOSED)
6. #3530 - Maximum update depth exceeded error (5 comments, 2 👍)
7. #3532 - Local model configuration issues (4 comments)
8. #3461 - Documentation feedback for OpenTelemetry
9. #3110 - CLI voice input feature request (2 comments)
10. #3095 - Extra blank line issue (CLOSED)
11. #3473 - Loop reading file beginning
12. #3551 - qwen --update feature request (CLOSED)
13. #3553 - Kimi-K2.5 model tool_calls error
14. #3555 - Multiple provider configuration issue
15. #3549 - ACP mode HTTP MCP support
16. #3545 - 401 invalid access token (CLOSED)
17. #3286 - write_file error (CLOSED)


18. #3568 - Concurrent subagents limit
19. #3566 - /skills list react error
20. #3503 - i18n translation mismatch (CLOSED)
21. #3558 - ReadFile empty pages parameter (CLOSED)
22. #3548 - plansDirectory setting
23. #3535 - SSL ignore flag
24. #3565 - /simplify skill request

**Pull Requests (42 total, I'll pick 10 important):**
1. #3509 - Remove residual blank lines (CLOSED)
2. #3522 - Tighten PR template validation
3. #3564 - macOS Desktop App installation script
4. #3494 - Python SDK implementation
5. #3463 - ACP Agent tool calls concurrent execution
6. #3569 - Traditional Chinese UI language
7. #3455 - Worker threads for file search
8. #3214 - Git ls-files + ripgrep for file mentions
9. #3318 - API preconnect for latency reduction
10. #3441 - Conversation rewind feature
11. #1702 - Direct text input for plan revision
12. #3498 - Telemetry documentation clarification
13. #3481 - Error handling in qwenOAuth2.ts
14. #3519 - Paste base64/data URL images
15. #3567 - OPENAI_MODEL precedence fix
16. #3534 - i18n sync (CLOSED)
17. #3563 - oh-my-agent-check skill
18. #3562 - OSC notification support
19. #3561 - OSC notification support (CLOSED)
20. #3560 - OSC notification support (CLOSED)

Now I'll organize this into a structured digest format.
</think>

# Qwen Code Community Digest

**Date:** 2026-04-24  
**Source:** github.com/QwenLM/qwen-code

---

## 1. Today's Highlights

The Qwen Code team released **v0.15.1** with critical fixes for streaming tool call parsing and shell time indicators, alongside a new nightly build addressing ReadFile parameter handling and session auto-titling. Community activity remains high with 24 issues and 42 PRs updated in the last 24 hours, including significant work on macOS desktop app support, Python SDK implementation, and Traditional Chinese localization. A contentious policy discussion about OAuth free tier changes has generated 117 comments, reflecting strong user engagement.

---

## 2. Releases

### v0.15.1-nightly.20260424.4e0a37549
**Nightly build** addressing three key improvements:
- **ReadFile fix**: Empty `pages` parameter now treated as unset, resolving rejection errors with certain model variants
- **Session auto-titling**: New `/rename --auto` command uses fast model for automatic session naming
- **i18n sync**: Localization updates for international users

### v0.15.1
**Stable release** with two fixes:
- **StreamingToolCallParser**: Scoped per stream instead of per Converter, fixing concurrency issues (#3516)
- **CLI shell time indicator**: Combined elapsed + timeout display for better execution visibility

---

## 3. Hot Issues

| # | Issue | Summary | Why It Matters | Community Reaction |
|---|-------|---------|----------------|-------------------|
| [#3203](https://github.com/QwenLM/qwen-code/issues/3203) | **Qwen OAuth Free Tier Policy Adjustment** | Proposes reducing daily free quota from 1,000 to 100 requests and phasing out free tier by April 20 | Directly impacts all free-tier users; 117 comments indicates strong community concern | 🔥 117 comments, actively debated |
| [#3384](https://github.com/QwenLM/qwen-code/issues/3384) | **Unable to Add OpenAI-Compatible Local LLM** | Users cannot configure local models (e.g., Qwen3.6-35B-A3B via VLLM) despite following documentation | Local model support is a key use case; 9 comments suggest ongoing configuration pain | 💬 9 comments, 👍 1 |
| [#3530](https://github.com/QwenLM/qwen-code/issues/3530) | **Maximum Update Depth Exceeded on Model Switch** | React error when using `/model` command | Blocks core functionality; affects UI stability | 💬 5 comments, 👍 2 |
| [#3532](https://github.com/QwenLM/qwen-code/issues/3532) | **Local Model Configuration Authentication Issues** | Users unable to authenticate when configuring local models per documentation | Blocks local deployment workflows | 💬 4 comments |
| [#3461](https://github.com/QwenLM/qwen-code/issues/3461) | **OpenTelemetry Documentation Unclear** | Documentation lacks Alibaba Cloud product entry point details | Hinders observability setup for enterprise users | 💬 3 comments |
| [#3110](https://github.com/QwenLM/qwen-code/issues/3110) | **CLI Voice Input Request** | Feature request for `/voice` command to support voice input | Highly requested quality-of-life improvement | 💬 2 comments |
| [#3553](https://github.com/QwenLM/qwen-code/issues/3553) | **Kimi-K2.5 Tool Calls Error** | API error with `tool_calls.type` parameter validation | Compatibility issue with third-party models | 💬 1 comment |
| [#3555](https://github.com/QwenLM/qwen-code/issues/3555) | **Multiple Provider Configuration Same Model** | Cannot configure duplicate models from different providers | Limits multi-provider fallback flexibility | 💬 1 comment |
| [#3549](https://github.com/QwenLM/qwen-code/issues/3549) | **ACP Mode HTTP MCP Support** | Request to support HTTP-based MCP in ACP mode | Expands protocol compatibility | 💬 1 comment |
| [#3568](https://github.com/QwenLM/qwen-code/issues/3568) | **Configurable Concurrent Subagents Limit** | Request to limit subagents to serial execution (1 concurrent) | Important for resource-constrained local deployments | New, 0 comments |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#3564](https://github.com/QwenLM/qwen-code/pull/3564) | **macOS Desktop App Installation** | Native macOS application allowing launch via Spotlight/Launchpad | 🆕 Open |
| [#3494](https://github.com/QwenLM/qwen-code/pull/3494) | **Python SDK Implementation** | Adds `packages/sdk-python` with async/sync query, process transport, and permission handling | 🆕 Open |
| [#3463](https://github.com/QwenLM/qwen-code/pull/3463) | **ACP Agent Tool Calls Concurrent Execution** | Executes multiple Agent tool calls concurrently instead of sequentially, reducing latency | 🆕 Open |
| [#3569](https://github.com/QwenLM/qwen-code/pull/3569) | **Traditional Chinese (zh-TW) UI Language** | Adds zh-TW as dedicated UI language option via `/language ui zh-TW` | 🆕 Open |
| [#3455](https://github.com/QwenLM/qwen-code/pull/3455) | **Worker Threads for File Search** | Moves `@`-picker crawl and fzf index to `worker_threads`, preventing UI freeze on large repos | 🆕 Open |
| [#3214](https://github.com/QwenLM/qwen-code/pull/3214) | **Git ls-files + Ripgrep for File Mentions** | Replaces fdir crawler with git-aware strategy respecting `.gitignore` | 🆕 Open |
| [#3318](https://github.com/QwenLM/qwen-code/pull/3318) | **API Preconnect for Latency Reduction** | Fire-and-forget HEAD request at startup to warm TCP+TLS, saving 100-200ms on first API call | 🆕 Open |
| [#3441](https://github.com/QwenLM/qwen-code/pull/3441) | **Conversation Rewind Feature** | Double-ESC and `/rewind` command to return to previous conversation turns | 🆕 Open |
| [#3519](https://github.com/QwenLM/qwen-code/pull/3519) | **Paste Base64/Data URL Images** | Support for pasting images directly with `[Image #N]` placeholders | 🆕 Open |
| [#3567](https://github.com/QwenLM/qwen-code/pull/3567) | **OPENAI_MODEL Precedence Fix** | Corrects CLI model resolution order: `argv.model` → `OPENAI_MODEL` → `QWEN_MODEL` → `settings.model` | 🆕 Open |

### Recently Merged
| # | PR | Description |
|---|-----|-------------|
| [#3509](https://github.com/QwenLM/qwen-code/pull/3509) | **Remove Residual Blank Lines** | Fixes extra blank lines below status bar (closes #3095) |
| [#3534](https://github.com/QwenLM/qwen-code/pull/3534) | **i18n Key Sync** | Synchronizes mismatched keys between en.js and zh.js translation files |
| [#3561](https://github.com/QwenLM/qwen-code/pull/3561) | **OSC Notification Support** | Rich system notifications for iTerm2, Kitty, and Ghostty |

---

## 5. Feature Request Trends

Analysis of 24 issues reveals these dominant feature directions:

| Trend | Frequency | Examples |
|-------|-----------|----------|
| **Local Model Support** | High | Configuration improvements, authentication fixes, multiple provider support |
| **UI/UX Enhancements** | High | Voice input (#3110), Traditional Chinese UI (#3569), `/simplify` skill (#3565), conversation rewind (#3441) |
| **Developer Experience** | Medium | Python SDK (#3494), configurable subagent limits (#3568), plansDirectory setting (#3548) |
| **Protocol Compatibility** | Medium | HTTP MCP for ACP (#3549), SSL error ignore flag (#3535), image paste support (#3519) |
| **Performance** | Medium | Worker threads for file search (#3455), API preconnect (#3318), concurrent tool execution (#3463) |
| **Documentation** | Low | OpenTelemetry clarity (#3461), translation sync (#3503) |

---

## 6. Developer Pain Points

### Top Frustrations

1. **Local Model Configuration Complexity**
   - Multiple issues (#3384, #3532) report inability to configure OpenAI-compatible local models
   - Authentication failures despite following documentation
   - Users request clearer setup guides and better error messages

2. **ReadFile Tool Instability**
   - Recurring loop issues (#2201, #3473) where ReadFile reads from beginning repeatedly
   - Offset parameter not working as expected
   - Empty `pages` parameter rejection (#3558) affecting certain model variants

3. **OAuth/Authentication Errors**
   - 401 invalid token errors (#3545) causing connection failures
   - Free tier policy uncertainty (#3203) creating community anxiety
   - Alibaba Cloud Coding Plan availability issues (#3307)

4. **React/UI Errors**
   - "Maximum update depth exceeded" errors on model switch (#3530) and `/skills list` (#3566)
   - Extra blank lines in terminal (#3095) — recently fixed

5. **Third-Party Model Compatibility**
   - Kimi-K2.5 tool_calls parameter errors (#3553)
   - Multiple provider duplicate model handling (#3555)

### High-Frequency Requests

- **Voice input for CLI** (multiple mentions)
- **Concurrent subagent control** (resource management)
- **Better observability setup** (OpenTelemetry documentation)
- **SSL certificate flexibility** (self-signed cert support)

---

*Digest generated from GitHub data for 2026-04-24. For real-time updates, visit [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code).*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

<think>The user wants me to generate a Pi community digest for 2026-04-24 based on the provided GitHub data. Let me analyze the data and create a structured digest following the specified format.

Let me organize the information:

**Releases:**
- v0.70.0 was released with a new searchable auth provider login flow feature

**Issues (50 total, showing top 30 by comment count):**
Let me identify the most important ones:

1. #3588 - Terminal progress escape sequences configurable - 10 comments
2. #2980 - Speed up `pi update` - 9 comments
3. #3208 - Custom Thinking Levels per Model - 7 comments, 6 👍
4. #3600 - Enter key stops working - 7 comments
5. #2514 - Recursive settings look-up - 5 comments
6. #2467 - Keyboard forces full redraw in Termux - 5 comments
7. #3582 - Segfault in clipboard addon - 4 comments
8. #3543 - Remove URL gates around long cache retention - 4 comments
9. #3575 - Anthropic-compatible proxy regression - 4 comments
10. #2144 - Cannot paste images - 3 comments
11. #3604 - `pi install`/`pi update` hardcodes `--omit=dev` - 3 comments
12. #3589 - OpenAI/Anthropic clients without timeout - 3 comments
13. #3610 - Progress bar stops after 15 seconds in Ghostty - 3 comments
14. #2528 - Azure OpenAI 404 missing api-version - 3 comments
15. #3605 - Hook into raw responses stream - 3 comments
16. #3599 - TUI editor leaks CSI-u text in tmux - 3 comments


17. #3571 - Restore prompt text after submission error - 3 comments
18. #3591 - Support CLAUDE_CODE_OAUTH_TOKEN - 3 comments
19. #3576 - Malformed tool call corrupts session - 3 comments
20. #3573 - Bun compiled binary empty process.env - 3 comments
21. #3586 - Kimi provider 429 due to missing User-Agent - 3 comments
22. #3626 - pkg:pods documented pi agent command not implemented - 2 comments
23. #3625 - Withdrawn: pkg:tui ES2022 /v regex report - 2 comments

I'm also seeing several other issues worth noting: #3619 involves forwarding model.baseUrl to @google/genai httpOptions, #3616 has SettingsManager.inMemory() losing initial settings on reload, #3617 shows extension shortcuts being skipped when colliding with built-ins, #3581 reveals parseChunkUsage double-counting reasoning tokens, #3611 is about speeding up session lookup, #3579 has openai-responses sending non-conforming session_id header, and #3602 shows ctx.ui.setStatus() not re-rendering after await fetch(). On the PR side, #3624 adds Together AI Provider, #3623 fixes CSI-u Ctrl+letter decoding in bracketed paste, #3618 aligns GPT-5.5 Codex capability handling, and #3620 awaits native clipboard before emitting OSC 52.

Additional PRs include #3197 adding interrupt() for graceful turn interruption, #3608 updating stale mocks and fixing /clone expectation, #3607 showing double-press hint in footer, #3583 routing remaining hardcoded pi branding through APP_NAME, #3603 adding img2sixel sixel support, #3596 stripping trailing index.js|ts from extension labels, #3597 tearing down extension UI on shutdown, #3615 adding GPT-5.5, #3593 retrying on http2 request errors, #3572 adding searchable auth provider login flow, and #3106 removing trailing spaces with no bg color. Now I'll organize this into a structured digest.
</think>

# Pi Community Digest — 2026-04-24

## Today's Highlights

The v0.70.0 release introduces a searchable auth provider login flow, making it easier to locate and configure providers when many are available. The community addressed several critical stability issues including a clipboard segfault on Linux, terminal progress escape sequence annoyances, and a tmux paste corruption bug. Notable new provider support is on the horizon with a Together AI integration PR pending review.

---

## Releases

### v0.70.0
- **Searchable auth provider login flow**: The `/login` provider selector now supports fuzzy search/filtering, enabling faster provider discovery when many are configured. See [docs/providers.md](docs/providers.md). ([#3572](https://github.com/badlogic/pi-mono/pull/3572) by @mitsuhiko)

---

## Hot Issues

1. **[#3588](https://github.com/badlogic/pi-mono/issues/3588)** — Terminal progress escape sequences configurable or disabled by default  
   *Why it matters*: OSC progress sequences introduced in v0.69.0 cause visual interference in iTerm2 (animated green line). With 10 comments, this is the most-discussed issue, reflecting broad user frustration with the default behavior.  
   **Status**: CLOSED | 👍 1

2. **[#2980](https://github.com/badlogic/pi-mono/issues/2980)** — Speed up `pi update`  
   *Why it matters*: `pi update` incurs full CLI startup costs before reaching the package handler, making it sluggish. Nine comments indicate significant community interest in performance improvements.  
   **Status**: CLOSED (inprogress) | 👍 0

3. **[#3208](https://github.com/badlogic/pi-mono/issues/3208)** — Custom Thinking Levels per Model  
   *Why it matters*: Users want models to define their own thinking levels so `Shift+Tab` only cycles through supported levels. This is the highest-👍 open feature request (6 👍), indicating strong demand for model-specific UI behavior.  
   **Status**: OPEN | 👍 6

4. **[#3600](https://github.com/badlogic/pi-mono/issues/3600)** — Enter key stops sending prompts mid-session  
   *Why it matters*: A race condition causes the Enter key to stop working randomly during sessions, forcing users to restart. Seven comments suggest this is a blocker for active workflows.  
   **Status**: CLOSED | 👍 0

5. **[#3582](https://github.com/badlogic/pi-mono/issues/3582)** — Segfault in clipboard.linux-x64-gnu.node during high-frequency bash output  
   *Why it matters*: Pi crashes with a segfault when using tools like `rsync --info=progress2`, indicating a critical stability issue in the native clipboard addon on Linux.  
   **Status**: CLOSED | 👍 0

6. **[#3575](https://github.com/badlogic/pi-mono/issues/3575)** — Anthropic-compatible proxy regression: `eager_input_streaming` causes 400 errors  
   *Why it matters*: After upgrading to 0.68.1, users with custom Anthropic proxies behind `anthropic-messages` backends encounter failures when tools are enabled. This breaks existing setups.  
   **Status**: CLOSED (inprogress) | 👍 1

7. **[#3604](https://github.com/badlogic/pi-mono/issues/3604)** — `pi install`/`pi update` on `git:` packages hardcodes `--omit=dev`, breaking pnpm/yarn  
   *Why it matters*: The git flow hardcodes an npm-only flag that pnpm v7+ rejects, breaking workflows for non-npm package managers.  
   **Status**: CLOSED (inprogress) | 👍 0

8. **[#3589](https://github.com/badlogic/pi-mono/issues/3589)** — OpenAI/Anthropic clients constructed without timeout  
   *Why it matters*: Default 10-minute timeouts silently abort long local inference runs (>10 min), causing unexpected failures for users running local models.  
   **Status**: CLOSED (inprogress) | 👍 0

9. **[#3586](https://github.com/badlogic/pi-mono/issues/3586)** — Built-in kimi-coding provider gets systematic 429 due to missing User-Agent  
   *Why it matters*: Kimi's backend whitelists known coding agents; the missing User-Agent causes all requests to be rejected, rendering the provider unusable.  
   **Status**: CLOSED (inprogress) | 👍 0

10. **[#3599](https://github.com/badlogic/pi-mono/issues/3599)** — TUI editor leaks `[106;5u` text into prompt when pasting inside tmux popup  
    *Why it matters*: CSI-u encoded Ctrl+J sequences leak into pasted content within tmux popups, corrupting input. A fix PR ([#3623](https://github.com/badlogic/pi-mono/pull/3623)) is already merged.  
    **Status**: CLOSED | 👍 0

---

## Key PR Progress

1. **[#3624](https://github.com/badlogic/pi-mono/pull/3624)** — Add Together AI Provider (OPEN)  
   Adds native Together AI support via its OpenAI-compatible Chat Completions API, including TOGETHER_API_KEY detection and tool-capable model filtering.

2. **[#3623](https://github.com/badlogic/pi-mono/pull/3623)** — fix(tui): decode CSI-u Ctrl+letter inside bracketed paste (OPEN)  
   Fixes the tmux popup paste corruption issue (#3599) by properly decoding CSI-u sequences.

3. **[#3618](https://github.com/badlogic/pi-mono/pull/3618)** — Align GPT-5.5 Codex capability handling (CLOSED)  
   Treats GPT-5.5 the same as GPT-5.4 for Codex capabilities, applying xhigh-capable status and appropriate pricing multipliers.

4. **[#3620](https://github.com/badlogic/pi-mono/pull/3620)** — fix(coding-agent): await native clipboard before emitting OSC 52 (CLOSED)  
   Eliminates a race condition that panicked the native clipboard addon on macOS by awaiting clipboard completion before OSC 52 emission.

5. **[#3197](https://github.com/badlogic/pi-mono/pull/3197)** — feat(agent): add interrupt() for graceful turn interruption (OPEN, inprogress)  
   Introduces a non-destructive interruption mechanism that stops the agent without tearing down in-flight tool work—addressing a long-standing gap in turn control.

6. **[#3607](https://github.com/badlogic/pi-mono/pull/3607)** — feat(coding-agent): show double-press hint in the footer (CLOSED)  
   Adds visual feedback when a two-press mechanic has a pending window, improving discoverability of exit/confirm shortcuts.

7. **[#3603](https://github.com/badlogic/pi-mono/pull/3603)** — feat(tui): add img2sixel sixel support (CLOSED)  
   Enables inline image display in Windows Terminal and VS Code's embedded terminal via Sixel format, addressing a long-standing Windows compatibility gap.

8. **[#3615](https://github.com/badlogic/pi-mono/pull/3615)** — feat(models): Add GPT-5.5 (CLOSED)  
   Official support for the GPT-5.5 model with appropriate capability handling and pricing configuration.

9. **[#3593](https://github.com/badlogic/pi-mono/pull/3593)** — fix(coding-agent): retry on http2 'request did not get a response' errors (CLOSED)  
   Adds automatic retry logic for AWS Bedrock users experiencing http2 connection errors, reducing manual intervention.

10. **[#3572](https://github.com/badlogic/pi-mono/pull/3572)** — feat(coding-agent): add searchable auth provider login flow (CLOSED)  
    Released in v0.70.0; enables fuzzy search in the `/login` provider selector.

---

## Feature Request Trends

Analysis of all 50 issues reveals these dominant feature directions:

| Theme | Examples | Demand Signal |
|-------|----------|---------------|
| **Model-specific UI/behavior** | Custom thinking levels per model (#3208), model-defined capabilities | High (6+ 👍) |
| **Provider extensibility** | Together AI provider (#3624), hook into raw response streams (#3605) | Growing |
| **Settings/configuration** | Recursive settings lookup (#2514), in-memory settings persistence (#3616) | Moderate |
| **Terminal compatibility** | Sixel image support (#3603), progress bar fixes (#3610), tmux paste handling (#3599) | Ongoing |
| **Extension API gaps** | Extension UI lifecycle (#3597), shortcut collision diagnostics (#3617) | Emerging |

---

## Developer Pain Points

1. **Stability regressions in v0.68.x–0.70**: Multiple critical bugs surfaced in recent releases—clipboard segfaults (#3582), Enter key failures (#3600), and proxy compatibility issues (#3575)—suggesting a need for more comprehensive regression testing.

2. **Package manager compatibility**: The hardcoded `--omit=dev` flag (#3604) breaks pnpm/yarn workflows, indicating assumptions tightly coupled to npm behavior.

3. **Timeout and connection handling**: Long-running local inference (#3589) and http2 errors (#3593) expose gaps in connection resilience, requiring manual workarounds.

4. **Windows/Termux compatibility**: Ongoing issues with image display (#3603), keyboard handling (#2467), and environment variable propagation (#3573) indicate these platforms remain second-class citizens.

5. **Extension developer experience**: Silent failures (shortcut collisions #3617), missing hooks (raw response streams #3605), and UI lifecycle issues (#3597) suggest the extension API needs more polish before third-party ecosystem growth.

---

*Generated from [github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono) activity on 2026-04-24.*

</details>

---
*This digest is auto-generated by [Big Model Radar](https://github.com/borq168/big_model_radar).*