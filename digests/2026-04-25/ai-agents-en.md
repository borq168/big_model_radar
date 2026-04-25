# OpenClaw Ecosystem Digest 2026-04-25

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-25 01:44 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)
- [NemoClaw](https://github.com/NVIDIA/NemoClaw)

---

## OpenClaw Deep Dive

<think>Let me analyze the GitHub data for OpenClaw and create a structured project digest for 2026-04-25.

Key data points:
- Issues updated in last 24h: 500 (open/active: 20, closed: 480)
- PRs updated in last 24h: 500 (open: 130, merged/closed: 370)
- New releases: 4 (all v2026.4.23 variants - beta.4, beta.5, beta.6, and stable)

Let me organize this into the required sections.

1. **Today's Overview**: High activity day with 500 issues and 500 PRs updated. 4 releases in the v2026.4.23 series. 130 open PRs, 370 merged/closed. 20 active issues.

2. **Releases**: v2026.4.23 stable and 3 beta versions released. Main changes: OpenAI image generation via Codex OAuth, OpenRouter image generation support.

3. **Project Progress**: Looking at PRs - several fixes merged/closed including:
   - Fix for thinking default in session rows
   - Claude CLI auth status reflection
   - Thread-bound subagent completion fallback
   - Session history loss prevention
   - Codex Windows shell fix
   - WebChat queue persistence
   - Cron session isolation
   - And many more

4. **Community Hot Topics**: Looking at issues with most comments:
   - #45504: devices list/approve regression (18 comments)
   - #45227: 422 status with mistral (16 comments)
   - #44714: logs --follow fails (16 comments)
   - #45560: gateway CLI handshake fails (15 comments)
   - #45485: Discord WebSocket timeout (14 comments)
   - #44755: /compact option crashes (14 comments)
   
5. **Bugs & Stability**: Multiple regressions from 2026.3.12 affecting gateway CLI, WebSocket connections, and UI components. Several crashes and behavior bugs reported with varying severity levels.

6. **Feature Requests & Roadmap Signals**: Multi-agent session switching in WebChat, context-pressure-aware continuation, and deep research capabilities are being requested.

7. **User Feedback Summary**: Users experiencing pain points with the 2026.3.12 upgrade, particularly around gateway CLI reliability and WebSocket stability.

8. **Backlog Watch**: Several issues remain unresolved, including cron isolated sessions timing out, Telegram provider polling failures, and Control UI crashes with large conversation histories.
</think>

# OpenClaw Project Digest — 2026-04-25

## 1. Today's Overview

OpenClaw experienced extremely high activity on April 25, 2026, with 500 issues and 500 PRs updated in the last 24 hours. The project released four new versions in the v2026.4.23 series (stable plus beta.4, beta.5, and beta.6), all focused on image generation capabilities for OpenAI and OpenRouter providers. Community engagement remains robust with 130 open PRs and 20 active issues, while 370 PRs were merged or closed, indicating strong development velocity. The issue queue shows significant regression reports stemming from the 2026.3.12 release, though many have been addressed in subsequent versions.

## 2. Releases

### v2026.4.23 (Stable)
**Release Date:** 2026-04-23

**Key Changes:**
- **Providers/OpenAI:** Added image generation and reference-image editing through Codex OAuth, enabling `openai/gpt-image-2` without requiring an `OPENAI_API_KEY`. Fixes [#70703](https://github.com/openclaw/openclaw/issues/70703).
- **Providers/OpenRouter:** Added image generation and reference-image editing through the `image_generate` endpoint, supporting OpenRouter image mode.

### v2026.4.23-beta.6, beta.5, beta.4
Identical changes to the stable release, representing the beta release pipeline leading to v2026.4.23.

**Migration Notes:** No breaking changes. Users of `openai/gpt-image-2` can now authenticate via Codex OAuth instead of maintaining separate API keys.

---

## 3. Project Progress

### Merged/Closed PRs (Selected Highlights)

| PR | Author | Area | Summary |
|----|--------|------|---------|
| [#71242](https://github.com/openclaw/openclaw/pull/71242) | RenzoMXD | gateway | Fall back to `lastCallUsage` on `/v1/chat/completions` to fix zero token counts |
| [#71016](https://github.com/openclaw/openclaw/pull/71016) | iskim77 | telegram | Pass `modelNames` to `buildModelsKeyboard` in button-click callback |
| [#71307](https://github.com/openclaw/openclaw/pull/71307) | BunsDev | docs | Add tweakcn custom theme import functionality |
| [#71287](https://github.com/openclaw/openclaw/pull/71287) | keishingu | agents | Merge user `mcp.servers` into claude-cli bundle config |
| [#71107](https://github.com/openclaw/openclaw/pull/71107) | le910n7 | agents | Disable thinking for Ollama models when `thinkingLevel=off` |
| [#70923](https://github.com/openclaw/openclaw/pull/70923) | colin-lgtm | googlechat | Resolve `domexception` startup crash and prevent silent text loss |
| [#56542](https://github.com/openclaw/openclaw/pull/56542) | Thatgfsj | web-ui | Restore chat history, queue, and draft on page refresh |
| [#64123](https://github.com/openclaw/openclaw/pull/64123) | ly85206559 | browser | Keep explicit AI snapshots out of efficient role fallback |
| [#71334](https://github.com/openclaw/openclaw/pull/71334) | ottodeng | agents | Preserve opaque reasoning IDs from Copilot Responses proxy |

### Open PRs Under Review

| PR | Author | Size | Area | Summary |
|----|--------|------|------|---------|
| [#70981](https://github.com/openclaw/openclaw/pull/70981) | chen-zhang-cs-code | XS | gateway | Use config-resolved thinking default in session rows |
| [#71332](https://github.com/openclaw/openclaw/pull/71332) | neeravmakwana | S | models | Reflect Claude CLI auth status accurately |
| [#71064](https://github.com/openclaw/openclaw/pull/71064) | DolencLuka | L | agents | Fix thread-bound subagent completion fallback |
| [#71328](https://github.com/openclaw/openclaw/pull/71328) | jjjojoj | XS | sessions | Prevent session history loss during `rotateSessionFile` crash window |
| [#71340](https://github.com/openclaw/openclaw/pull/71340) | vincentkoc | M | cron | Isolate fresh cron session state |
| [#71338](https://github.com/openclaw/openclaw/pull/71338) | Lucenx9 | S | codex | Respect command approval decisions |
| [#71341](https://github.com/openclaw/openclaw/pull/71341) | KimHyeongRae0 | S | codex | Spawn app server through shell on Windows |
| [#71336](https://github.com/openclaw/openclaw/pull/71336) | jjjojoj | S | webchat | Persist chat queue to localStorage with drain-on-reconnect |
| [#38780](https://github.com/openclaw/openclaw/pull/38780) | karmafeast | XL | agents | Context-pressure-aware continuation (CONTINUE_WORK / CONTINUE_DELEGATE) |
| [#71321](https://github.com/openclaw/openclaw/pull/71321) | neeravmakwana | M | agents | Apply web fetch SSRF policy to media |
| [#71339](https://github.com/openclaw/openclaw/pull/71339) | gertsio | S | agents | Add deep research skill |
| [#71324](https://github.com/openclaw/openclaw/pull/71324) | 91wan | M | webchat | Hide legacy runtime transcript wrappers |

---

## 4. Community Hot Topics

### Most Active Issues (by Comment Count)

1. **[#45504](https://github.com/openclaw/openclaw/issues/45504)** — `[CLOSED]` **Regression:** `openclaw devices list` / `devices approve` fail against local loopback gateway after 2026.3.12 upgrade
   - **Comments:** 18 | **Reactions:** 5
   - **Author:** @maxzzznz | **Created:** 2026-03-13

2. **[#45227](https://github.com/openclaw/openclaw/issues/45227)** — `[CLOSED]` **Regression:** 422 status code with Mistral provider
   - **Comments:** 16 | **Reactions:** 4
   - **Author:** @JuergenBluemer | **Created:** 2026-03-13

3. **[#44714](https://github.com/openclaw/openclaw/issues/44714)** — `[CLOSED]` `openclaw logs --follow` fails after 2026.3.12 upgrade with handshake timeout
   - **Comments:** 16 | **Reactions:** 6
   - **Author:** @anyech | **Created:** 2026-03-13

4. **[#45560](https://github.com/openclaw/openclaw/issues/45560)** — `[CLOSED]` **Regression:** Local gateway CLI handshake fails (probe timeout / gateway call closed 1000)
   - **Comments:** 15 | **Reactions:** 3
   - **Author:** @adamji1900 | **Created:** 2026-03-14

5. **[#45485](https://github.com/openclaw/openclaw/issues/45485)** — `[CLOSED]` Discord WebSocket times out every 10 minutes
   - **Comments:** 14 | **Reactions:** 0
   - **Author:** @papiofficial | **Created:** 2026-03-13

6. **[#44755](https://github.com/openclaw/openclaw/issues/44755)** — `[CLOSED]` Selecting `/compact` option crashes main webchat with white triangular logo
   - **Comments:** 14 | **Reactions:** 0
   - **Author:** @alexivanov-ai | **Created:** 2026-03-13

### Underlying Community Needs

The high comment volume on these issues reveals several recurring themes:

- **Gateway reliability:** Multiple reports of CLI commands failing against local loopback gateways, suggesting networking/handshake logic needs hardening.
- **Provider regressions:** Issues with Mistral, Discord, and Telegram providers indicate integration testing gaps in the 2026.3.12 release.
- **UI stability:** Several reports of UI crashes (blank screens, broken chat areas) affecting user experience across browsers.

---

## 5. Bugs & Stability

### Critical/High Severity Issues

| Issue | Title | Severity | Status | Fix PR |
|-------|-------|----------|--------|--------|
| [#65740](https://github.com/openclaw/openclaw/issues/65740) | Chrome CDP websocket unreachable after start - macOS ARM64 | Regression | CLOSED | — |
| [#45504](https://github.com/openclaw/openclaw/issues/45504) | devices list/approve fail against loopback gateway | Regression | CLOSED | — |
| [#45560](https://github.com/openclaw/openclaw/issues/45560) | Gateway CLI handshake fails (probe timeout) | Regression | CLOSED | — |
| [#45227](https://github.com/openclaw/openclaw/issues/45227) | 422 status code with Mistral | Regression | CLOSED | — |
| [#44714](https://github.com/openclaw/openclaw/issues/44714) | `logs --follow` fails with handshake timeout | Regression | CLOSED | — |
| [#45485](https://github.com/openclaw/openclaw/issues/45485) | Discord WebSocket timeout every 10 minutes | Crash | CLOSED | — |
| [#45057](https://github.com/openclaw/openclaw/issues/45057) | ReferenceError: Cannot access 'ANTHROPIC_MODEL_ALIASES' on gateway start | Crash | CLOSED | — |
| [#44718](https://github.com/openclaw/openclaw/issues/44718) | ReferenceError on config load, all CLI commands broken | Crash | CLOSED | — |

### Medium/Behavior Issues

| Issue | Title | Type | Status |
|-------|-------|------|--------|
| [#45794](https://github.com/openclaw/openclaw/issues/45794) | Control UI chat pane breaks at 100% context used | Behavior | CLOSED |
| [#45750](https://github.com/openclaw/openclaw/issues/45750) | Intermittent gateway RPC/WebSocket failures break cron commands | Regression | CLOSED |
| [#45513](https://github.com/openclaw/openclaw/issues/45513) | Chat input hidden behind warning overlay | Behavior | CLOSED |
| [#45046](https://github.com/openclaw/openclaw/issues/45046) | Agents simulate tool usage instead of invoking tools | Behavior | CLOSED |
| [#45110](https://github.com/openclaw/openclaw/issues/45110) | Prompt-cache not used due to prompt prefix changes | Regression | CLOSED |
| [#45311](https://github.com/openclaw/openclaw/issues/45311) | Slack socket mode receives zero inbound events | Regression | CLOSED |
| [#45714](https://github.com/openclaw/openclaw/issues/45714) | Telegram provider stops polling for inbound messages | Behavior | CLOSED |
| [#45687](https://github.com/openclaw/openclaw/issues/45687) | Control UI crashes when session history is too large | Regression | CLOSED |

**Stability Assessment:** The 2026.3.12 release introduced multiple regressions affecting gateway connectivity, provider integrations, and UI rendering. However, the high closure rate (480 of 500 issues updated) suggests these issues have been addressed in subsequent releases. The v2026.4.23 release appears to be stabilizing the codebase.

---

## 6. Feature Requests & Roadmap Signals

### Notable Feature Requests

1. **[#45086](https://github.com/openclaw/openclaw/issues/45086)** — **WebChat UI: Add agent/session switcher for multi-agent support**
   - **Comments:** 7 | **Reactions:** 3
   - **Author:** @1209313311w-eng
   - **Request:** Support switching between multiple agents (main, assistant, coder, writer, chill) in the Control UI, each with separate workspaces and identities.

2. **[#38780](https://github.com/openclaw/openclaw/pull/38780)** — **Context-pressure-aware continuation (CONTINUE_WORK / CONTINUE_DELEGATE)**
   - **Size:** XL | **Status:** OPEN
   - **Author:** @karmafeast
   - **Feature:** Enable persistent agents to self-elect turn continuation based on context pressure, controlling their own turn cycle.

3. **[#71339](https://github.com/openclaw/openclaw/pull/71339)** — **Add deep research skill**
   - **Size:** S | **Status:** OPEN
   - **Author:** @gertsio
   - **Feature:** Bundled Deep Research skill for multi-source cited research workflows.

### Roadmap Signals

- **Multi-agent UI:** The request for agent/session switching in WebChat has moderate community interest (3 reactions, 7 comments) and aligns with the ongoing multi-agent architecture work.
- **Agent autonomy:** The context-pressure-aware continuation PR (#38780) represents a significant architectural shift toward self-directed agents.
- **Image generation:** The v2026.4.23 release signals prioritization of image generation capabilities across providers.

---

## 7. User Feedback Summary

### Pain Points

1. **Upgrade regressions:** Multiple users reported that upgrading to 2026.3.12 broke core functionality:
   - Gateway CLI commands (`devices list`, `gateway probe`, `logs --follow`) became unreliable
   - WebSocket connections to Discord and Telegram providers dropped
   - Control UI crashed with blank screens or error triangles

2. **Context management issues:**
   - Session history causing UI crashes when too large
   - Context limit warnings blocking chat input
   - Prompt-cache not working due to prefix changes (causing x1000 inference cost increases)

3. **Provider integration failures:**
   - Slack socket mode not receiving events
   - Telegram polling stopping unexpectedly
   - Mistral API returning 422 errors

### Positive Feedback Signals

- The image generation additions in v2026.4.23 (OpenAI Codex OAuth, OpenRouter support) address a key user need for seamless image generation without manual API key management.
- The high volume of PRs merged (370) indicates responsive maintenance and community contribution.

---

## 8. Backlog Watch

### Long-Unanswered Important Issues

| Issue | Title | Age | Comments | Priority |
|-------|-------|-----|----------|----------|
| [#40868](https://github.com/openclaw/openclaw/issues/40868) | Cron isolated sessions timing out after 2026.3.8 update | ~46 days | 11 | High |
| [#42632](https://github.com/openclaw/openclaw/issues/42632) | Cron `sessionTarget="isolated"` + `agentTurn` timeout | ~45 days | 7 | Medium |
| [#45285](https://github.com/openclaw/openclaw/issues/45285) | Isolated cron jobs never execute agent turn | ~43 days | 6 | Medium |
| [#51000](https://github.com/openclaw/openclaw/issues/51000) | Isolated cron jobs overwrite parent session's updatedAt | ~36 days | 8 | Medium |

### Issues Needing Maintainer Attention

| Issue | Title | Age | Status |
|-------|-------|-----|--------|
| [#45726](https://github.com/openclaw/openclaw/issues/45726) | Feishu request timeout due to persistent session lock file | ~41 days | CLOSED |
| [#45607](https://github.com/openclaw/openclaw/issues/45607) | session-memory hook writes files boot sequence never reads | ~41 days | CLOSED |
| [#45540](https://github.com/openclaw/openclaw/issues/45540) | ReferenceError with agents.defaults.model object form | ~42 days | CLOSED |
| [#45464](https://github.com/openclaw/openclaw/issues/45464) | Telegram DM exec parity broken on agent:main:main | ~42 days | CLOSED |

**Backlog Assessment:** The cron isolated session issues represent a significant backlog, with multiple related issues spanning 36-46 days. While most have been closed, the underlying cron session isolation logic may need further hardening. The maintainer team appears responsive, with most issues receiving attention and resolution.

---

*Digest generated from OpenClaw GitHub data for 2026-04-25. All issue and PR links reference https://github.com/openclaw/openclaw.*

---

## Cross-Ecosystem Comparison

<think>The user wants a cross-project comparison report synthesizing all the individual project digests I just created. Let me analyze the data from each project and create a comprehensive comparison report.

Let me gather the key metrics from each project:

1. **OpenClaw** (github.com/openclaw/openclaw)
   - Issues: 500 updated (20 open/active, 480 closed)
   - PRs: 500 updated (130 open, 370 merged/closed)
   - Releases: 4 (v2026.4.23 stable + 3 betas)
   - Health: High activity, strong maintenance

2. **NanoBot** (github.com/HKUDS/nanobot)
   - Issues: 16 updated (10 open/active, 6 closed)
   - PRs: 41 updated (7 open, 34 merged/closed)
   - Releases: 0
   - Health: Active development

3. **Zeroclaw** (github.com/zeroclaw-labs/zeroclaw)
   - Issues: 50 updated (43 open/active, 7 closed)
   - PRs: 50 updated (21 open, 29 merged/closed)
   - Releases: 0
   - Health: High activity, many open issues

4. **PicoClaw** (github.com/sipeed/picoclaw)
   - Issues: 11 updated (7 open/active, 4 closed)
   - PRs: 38 updated (19 open, 19 merged/closed)
   - Releases: 1 (nightly build)
   - Health: Active development

5. **NanoClaw** (github.com/qwibitai/nanoclaw)
   - Issues: 15 updated (7 open, 8 closed)
   - PRs: 35 updated (11 open, 24 merged/closed)
   - Releases: 0
   - Health: Active, v2 migration in progress
   
6. **IronClaw** (github.com/nearai/ironclaw)
   - Issues: 16 updated (14 open/active, 2 closed)
   - PRs: 50 updated (43 open, 7 merged/closed)
   - Releases: 0
   - Health: High activity, many open PRs

7. **LobsterAI** (github.com/netease-youdao/LobsterAI)
   - Issues: 3 updated (3 open, 0 closed)
   - PRs: 42 updated (0 open, 42 merged/closed)
   - Releases: 2 (v2026.4.24, v2026.4.23)
   - Health: Very high velocity, rapid releases

8. **TinyClaw** (github.com/TinyAGI/tinyclaw)
   - Issues: 0 updated
   - PRs: 0 updated
   - Releases: 0
   - Health: No activity

9. **Moltis** (github.com/moltis-org/moltis)
   - Issues: 10 updated (3 open/active, 7 closed)
   - PRs: 32 updated (4 open, 28 merged/closed)
   - Releases: 0
   - Health: Active, security focus

10. **CoPaw** (github.com/agentscope-ai/CoPaw)
    - Issues: 50 updated (28 open, 22 closed)
    - PRs: 50 updated (15 open, 35 merged/closed)
    - Releases: 2 (v1.1.4, v1.1.4.post1)
    - Health: Very high velocity, rapid releases

11. **ZeptoClaw** (github.com/qhkm/zeptoclaw)
    - Issues: 1 updated (1 open, 0 closed)
    - PRs: 1 updated (1 open, 0 merged/closed)
    - Releases: 0
    - Health: Low activity

12. **EasyClaw** (github.com/gaoyangz77/easyclaw)
    - Issues: 0 updated
    - PRs: 0 updated
    - Releases: 1 (v1.8.9)
    - Health: Minimal activity

13. **NemoClaw** (github.com/NVIDIA/NemoClaw)
    - Issues: 50 updated (21 open/active, 29 closed)
    - PRs: 50 updated (18 open, 32 merged/closed)
    - Releases: 0
    - Health: High activity, security focus

Now I'll organize this into the comparison report structure.
</think>

# Cross-Project Comparison Report: Personal AI Assistant & Agent Open-Source Ecosystem

## 1. Ecosystem Overview

The personal AI assistant and agent open-source ecosystem is experiencing a period of intense fragmentation and parallel innovation. On 2026-04-25, the thirteen tracked projects collectively logged over 800 pull requests and 700 issues updated in 24 hours, indicating that the ecosystem is in a rapid development phase with no clear dominant architecture. Projects range from mature, enterprise-oriented platforms (OpenClaw, NemoClaw) to niche, community-driven experiments (ZeptoClaw, TinyClaw). The dominant technical themes emerging across all projects are **multi-provider LLM integration**, **multi-channel messaging support**, **security hardening** (particularly around SSRF, sandboxing, and credential management), and **agent-to-agent orchestration**. The ecosystem shows a clear split between projects building on OpenClaw as a core (NanoClaw, PicoClaw, Zeroclaw, ZeptoClaw, NemoClaw) and those pursuing independent architectures (CoPaw, LobsterAI, Moltis, NanoBot). No project has yet achieved the stability and feature completeness to dominate the landscape; instead, the ecosystem is converging on shared patterns while diverging in implementation details.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Open Issues | Open PRs | Releases (24h) | Activity Tier |
|---------|---------------------|-------------------|-------------|----------|----------------|---------------|
| **OpenClaw** | 500 | 500 | 20 | 130 | 4 (v2026.4.23) | 🥇 Tier 1 |
| **CoPaw** | 50 | 50 | 28 | 15 | 2 (v1.1.4) | 🥇 Tier 1 |
| **LobsterAI** | 3 | 42 | 3 | 0 | 2 (v2026.4.24) | 🥇 Tier 1 |
| **NemoClaw** | 50 | 50 | 21 | 18 | 0 | 🥇 Tier 1 |
| **Zeroclaw** | 50 | 50 | 43 | 21 | 0 | 🥈 Tier 2 |
| **NanoClaw** | 15 | 35 | 7 | 11 | 0 | 🥈 Tier 2 |
| **Moltis** | 10 | 32 | 3 | 4 | 0 | 🥈 Tier 2 |
| **PicoClaw** | 11 | 38 | 7 | 19 | 1 (nightly) | 🥈 Tier 2 |
| **NanoBot** | 16 | 41 | 10 | 7 | 0 | 🥈 Tier 2 |
| **IronClaw** | 16 | 50 | 14 | 43 | 0 | 🥈 Tier 2 |
| **ZeptoClaw** | 1 | 1 | 1 | 1 | 0 | 🥉 Tier 3 |
| **EasyClaw** | 0 | 0 | 0 | 0 | 1 (v1.8.9) | 🥉 Tier 3 |
| **TinyClaw** | 0 | 0 | 0 | 0 | 0 | 🥉 Tier 3 |

**Health Score Methodology:** Composite of PR merge rate, issue closure rate, release cadence, and open issue backlog. Tier 1 projects show >30 PRs merged/24h with <2:1 open:closed ratio. Tier 2 projects show 10-30 PRs merged/24h. Tier 3 projects show minimal activity.

---

## 3. OpenClaw's Position

### Advantages vs Peers

OpenClaw maintains its position as the **de facto core framework** for the ecosystem, with four derivative projects (NanoClaw, PicoClaw, Zeroclaw, ZeptoClaw, NemoClaw) building on its architecture. Its advantages include:

- **Unmatched velocity**: 500 issues and 500 PRs updated in 24 hours—10x the activity of the next most active project (CoPaw, NemoClaw, Zeroclaw at 50 each).
- **Release cadence**: 4 releases in 24 hours (v2026.4.23 stable + 3 betas), indicating continuous integration and deployment maturity.
- **Community size**: 130 open PRs and 20 active issues suggest a large contributor base, though the high open PR count also indicates review bottleneck.
- **Feature breadth**: Image generation (OpenAI Codex OAuth, OpenRouter), multi-agent support, cron isolation, and WebSocket improvements demonstrate broad capability coverage.

### Technical Approach Differences

| Aspect | OpenClaw | CoPaw | LobsterAI | Moltis |
|--------|----------|-------|-----------|--------|
| **Architecture** | Monolithic core, plugin channels | Modular with skill-based HTTP | Modular, memory-focused | Rust-based, Landlock sandboxing |
| **Provider Model** | Built-in, OAuth-native | Built-in, skill-extensible | Built-in, embedding-configurable | Built-in, vault-protected |
| **Security Model** | Gateway isolation, OAuth | Shell invasion disabled by default | Config-based | Kernel-level (Landlock) |
| **Release Model** | Continuous (beta/stable) | Patch-based (v1.1.4.post1) | Daily nightlies | No tagged releases |

### Community Size Comparison

OpenClaw's 130 open PRs and 480 closed issues in 24 hours dwarf all other projects. By comparison, the next largest (CoPaw, NemoClaw, Zeroclaw) each show 50 items updated. This suggests OpenClaw has 5-10x the contributor activity of its closest competitors, though it also carries a proportionally larger backlog.

---

## 4. Shared Technical Focus Areas

The following requirements and capabilities are emerging across multiple projects, indicating ecosystem-wide convergence:

### 4.1 Multi-Provider LLM Integration

**Projects affected:** All 13 projects

Every project is grappling with multi-provider LLM support, but with different emphases:

| Provider Need | Projects | Specific Requirements |
|---------------|----------|----------------------|
| DeepSeek V4 support | OpenClaw, NanoClaw, LobsterAI, CoPaw, NemoClaw | Reasoning content handling, multi-turn continuity |
| OpenAI-compatible endpoints | Zeroclaw, PicoClaw, NanoClaw, Moltis | BYO backend (LiteLLM, llama.cpp, vLLM) |
| Anthropic Claude integration | OpenClaw, CoPaw, NemoClaw | Tool schema compatibility, auth status reflection |
| Local model support | Zeroclaw, PicoClaw, Moltis | Ollama, llama.cpp, LM Studio integration |
| Provider failover | NanoBot, Zeroclaw, Moltis | Auto-switch on 429/5xx/timeout |

**Key insight:** The ecosystem lacks a standardized provider abstraction. Each project implements its own provider interface, leading to duplicated effort and inconsistent behavior (e.g., DeepSeek reasoning content handling varies across projects).

### 4.2 Security Hardening

**Projects affected:** OpenClaw, Moltis, NemoClaw, CoPaw, PicoClaw, Zeroclaw

Security is the second-most common theme, with multiple projects independently addressing similar vulnerabilities:

| Security Concern | Projects | Approach |
|-----------------|----------|----------|
| SSRF validation | NemoClaw, Moltis | Config-set SSRF hardening, URL validation |
| Sandbox isolation | Moltis, NemoClaw, Zeroclaw | Landlock FS isolation, seccomp restrictions |
| Credential management | Moltis, CoPaw, LobsterAI | Plaintext API key storage, vault integration |
| WebSocket CSRF | PicoClaw | CheckOrigin hardening |
| IPC directory isolation | NanoClaw | Per-group directory separation |

**Key insight:** Security is being addressed reactively rather than proactively. Projects are fixing similar classes of vulnerabilities independently, suggesting an opportunity for shared security primitives or a common security framework.

### 4.3 Multi-Channel Messaging

**Projects affected:** OpenClaw, NanoBot, Zeroclaw, CoPaw, LobsterAI, IronClaw, Moltis

The ecosystem shows strong investment in multi-channel support:

| Channel | Projects Supporting | Notable Gaps |
|---------|--------------------|--------------|
| Telegram | OpenClaw, NanoBot, Zeroclaw, CoPaw, LobsterAI, Moltis | Media batching, markdown rendering |
| Discord | OpenClaw, Zeroclaw, CoPaw, Moltis | WebSocket timeout, thread creation |
| WhatsApp | Zeroclaw, Moltis | Web channel stability, document mimetype |
| DingTalk | LobsterAI, CoPaw | File download metadata, long-connection |
| Feishu/Lark | ZeptoClaw, CoPaw | Long-connection architecture |
| WeChat | NanoBot, LobsterAI | Message limits, file handling |
| Matrix/Signal | Zerocaw | request_approval() implementation |
| QQ | PicoClaw | Voice message duplication |
| MSTeams | OpenClaw, Moltis | Threaded replies, conversation refs |

**Key insight:** Channel support is table stakes, but quality varies significantly. Projects that invest in channel-specific optimizations (media batching, approval workflows, thread management) differentiate themselves.

### 4.4 Agent Memory & Context Management

**Projects affected:** OpenClaw, NanoBot, LobsterAI, CoPaw, Moltis, NemoClaw

Memory systems are a major focus, with projects implementing:

- **Pluggable backends**: LobsterAI's memory module refactor with automatic summarization
- **Embedding configuration**: LobsterAI's remote embedding provider support (OpenAI, Gemini)
- **CJK-aware tokenization**: LobsterAI's memory search improvements
- **Memory context closing tags**: OpenClaw's cron/daemon memory boundary markers
- **Memory recall with wildcards**: Moltis's `memory_recall` with `*` pattern

### 4.5 Observability & Debugging

**Projects affected:** Moltis, NemoClaw, OpenClaw, PicoClaw

Tool call logging, activity observability, and tracing are emerging as first-class requirements:

- Moltis: Tool execution witness recording + zkperf-service integration
- NemoClaw: Landlock access denial debug logging
- OpenClaw: Session history loss prevention, cron isolation
- PicoClaw: Thought visibility toggle, thought bubble collapse state

---

## 5. Differentiation Analysis

### Feature Focus Differentiation

| Project | Primary Differentiator | Target User |
|---------|----------------------|-------------|
| **OpenClaw** | Ecosystem core, OAuth-native, multi-agent | Developers building on a platform |
| **CoPaw** | Rapid release cadence, memory module, DingTalk focus | Chinese-market users, rapid iterators |
| **LobsterAI** | Memory embedding, multi-robot IM, daily nightlies | Memory-intensive workflows |
| **NemoClaw** | NVIDIA/Jetson integration, security hardening | Edge AI, enterprise deployments |
| **Zeroclaw** | Multi-agent routing, HMAC receipts, PostgreSQL backend | Multi-agent orchestration |
| **Moltis** | Rust-based, Landlock sandboxing, Nix Flake | Security-conscious, Linux-native |
| **NanoBot** | LLM timeout protection, video support, document parsing | Multi-channel bot operators |
| **PicoClaw** | MCP CLI management, Windows build, MQTT channel | Power users, embedded/IoT |
| **IronClaw** | Engine V2, WASM→Skills migration, TEE support | Advanced agent developers |
| **NanoClaw** | v2 rewrite, custom endpoints, observability | Self-hosted, BYO backend |

### Target User Differentiation

| User Profile | Recommended Project(s) |
|-------------|----------------------|
| Enterprise, needs stability and OAuth | OpenClaw, NemoClaw |
| Chinese market, DingTalk/WeChat focus | LobsterAI, CoPaw |
| Security-critical, kernel-level sandboxing | Moltis, NemoClaw |
| Self-hosted, BYO LLM backend | NanoClaw, Zeroclaw, PicoClaw |
| Rapid prototyping, daily updates | LobsterAI, CoPaw |
| NVIDIA Jetson/edge deployment | NemoClaw |
| Multi-agent orchestration | Zeroclaw, OpenClaw |

### Technical Architecture Differences

| Architecture Pattern | Projects | Pros | Cons |
|---------------------|----------|------|------|
| **Monolithic core + plugins** | OpenClaw, Zeroclaw | Simple, consistent | Less flexible |
| **Modular skill-based** | CoPaw, Moltis | Extensible, composable | Complexity management |
| **Memory-centric** | LobsterAI, CoPaw | Better context management | Memory overhead |
| **Rust-based** | Moltis | Performance, memory safety | Smaller ecosystem |
| **Derivative of OpenClaw** | NanoClaw, PicoClaw, ZeptoClaw, NemoClaw | Faster development | Dependency on upstream |

---

## 6. Community Momentum & Maturity

### Activity Tiers

**🥇 Tier 1 — Rapid Iteration (4 projects):**

- **OpenClaw**: 500 PRs/24h, 4 releases/24h, 130 open PRs. The ecosystem leader, but facing review bottleneck.
- **CoPaw**: 50 PRs/24h, 2 releases/24h, rapid regression response (v1.1.4.post1 within hours of v1.1.4). High velocity but desktop stability issues.
- **LobsterAI**: 42 PRs/24h, 2 releases/24h, 0 open PRs. Exceptional merge rate; all PRs closed. Strongest PR-to-open ratio in ecosystem.
- **NemoClaw**: 50 PRs/24h, 32 merged, security-focused. High activity with security hardening as primary theme.

**🥈 Tier 2 — Active Development (7 projects):**

- **Zeroclaw**: 50 PRs/24h but 43 open issues. High bug volume suggests stability challenges.
- **IronClaw**: 50 PRs/24h but 43 open PRs. Large PR backlog indicates review bottleneck or architectural complexity.
- **NanoBot**: 41 PRs/24h, 34 merged. Strong maintenance velocity.
- **PicoClaw**: 38 PRs/24h, 19 merged. Balanced activity.
- **

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

<think>Let me analyze the GitHub data for NanoBot and create a structured project digest for 2026-04-25.

Key data points:
- Issues updated in last 24h: 16 (open/active: 10, closed: 6)
- PRs updated in last 24h: 41 (open: 7, merged/closed: 34)
- New releases: 0

Let me organize this into the required sections.

**Today's Overview:**
- High activity with 16 issues and 41 PRs updated
- 6 issues closed, 34 PRs merged/closed
- No new releases
- Multiple bug fixes and features merged

**Releases:**
- None today

**Project Progress:**
Looking at the PRs:
- #3428: fix(agent): add LLM request timeout to prevent session lock starvation (CLOSED)
- #3430: feat(webui): render video media attachments (CLOSED)
- #3429: feat(channels): add video support for Telegram and WebSocket (CLOSED)
- #3423: perf(document): lazy-import heavy document parsers (CLOSED)
- #3432: fix(msteams): send threaded replies via replyToId (OPEN)
- #3173: feat(observability): OpenTelemetry tracing for LLM calls and tools (OPEN)
- #3427: Fix session replay token budgeting and cap session file growth (OPEN)

**Community Hot Topics:**
Looking at issues by comments:
- #2049: Missing ability to create skills (13 comments, CLOSED)
- #3376: 支持模型异常自动切换 (7 comments, OPEN)
- #3421: RFC: Should we add a `nanobot update` command? (4 comments, OPEN)
- #3344: DingTalk Group Can not Seed file to Nanobot Agent (4 comments, OPEN)


- #162: Improve session management (4 comments, CLOSED)

**Bugs & Stability:**
Several critical issues emerged today. The agent loop was deadlocking when LLM API calls hung without proper timeout handling (#3424), and the Telegram markdown rendering became unreliable in v0.1.4.post6 (#2568). Memory consumption spiked significantly in v0.1.5.post2 (#3410), while the OpenAI Codex provider stopped streaming progress deltas as a regression (#3426). The anthropic_provider also hardcoded temperature settings that caused Claude Opus 4.7 to reject requests with a 400 error (#3417).

**Feature Requests & Roadmap Signals:**
The community is requesting provider and model failover mechanisms for automatic switching when exceptions occur (#3376), a CLI command to update nanobot (#3421), and per-chat group policy overrides for the Telegram channel (#3309).

**User Feedback Summary:**
Users are encountering issues with skill creation, file uploads in DingTalk groups, and WeChat message limits. Telegram markdown rendering remains inconsistent, and memory usage has become problematic.

**Backlog Watch:**
Several issues remain open and unaddressed: the WeChat message limit of 10 (#2772), DingTalk file upload problems (#3344), and Telegram markdown rendering issues (#2568).
</think>

# NanoBot Project Digest — 2026-04-25

## 1. Today's Overview

NanoBot continues to show high development velocity with **16 issues and 41 PRs updated** in the last 24 hours. The project closed 6 issues and merged/closed 34 pull requests, indicating strong maintenance activity. No new releases were published today, but several impactful bug fixes and features were merged—including LLM timeout protection, video support for Telegram/WebSocket, and lazy-loading of document parsers to reduce startup memory. The community is actively filing issues around provider resilience, multi-channel improvements, and regression reports from recent versions.

---

## 2. Releases

**No new releases today.** The project last shipped versions in the v0.1.5.post2 range. Users are advised to monitor the repository for upcoming patch releases addressing the memory and regression issues filed today.

---

## 3. Project Progress

The following PRs advanced or were merged today:

| PR | Title | Status |
|----|-------|--------|
| [#3428](https://github.com/HKUDS/nanobot/pull/3428) | fix(agent): add LLM request timeout to prevent session lock starvation | **Merged** |
| [#3430](https://github.com/HKUDS/nanobot/pull/3430) | feat(webui): render video media attachments | **Merged** |
| [#3429](https://github.com/HKUDS/nanobot/pull/3429) | feat(channels): add video support for Telegram and WebSocket | **Merged** |
| [#3423](https://github.com/HKUDS/nanobot/pull/3423) | perf(document): lazy-import heavy document parsers | **Merged** |
| [#3427](https://github.com/HKUDS/nanobot/pull/3427) | Fix session replay token budgeting and cap session file growth; normalize DeepSeek content payloads | **Open** |
| [#3432](https://github.com/HKUDS/nanobot/pull/3432) | fix(msteams): send threaded replies via replyToId | **Open** |
| [#3173](https://github.com/HKUDS/nanobot/pull/3173) | feat(observability): OpenTelemetry tracing for LLM calls and tools | **Open** |

**Key highlights:**
- **LLM timeout fix** (#3428) directly addresses the deadlock reported in issue #3424, adding wall-clock timeout guards to prevent session lock starvation.
- **Video support** (#3429, #3430) enables inline video playback in Telegram and WebUI, improving media-rich interactions.
- **Memory optimization** (#3423) moves heavy document parser imports (`pypdf`, `python-docx`, `openpyxl`, `python-pptx`) into lazy-loading, saving ~25 MB at startup.
- **Session hardening** (#3427) fixes DeepSeek payload normalization and adds token-aware history replay with hard caps on session file growth.

---

## 4. Community Hot Topics

Most-discussed issues (by comment count):

| Issue | Title | Comments | Status |
|-------|-------|----------|--------|
| [#2049](https://github.com/HKUDS/nanobot/issues/2049) | Missing ability to create skills | 13 | Closed |
| [#3376](https://github.com/HKUDS/nanobot/issues/3376) | 支持模型异常自动切换（Provider / Model Failover） | 7 | Open |
| [#3421](https://github.com/HKUDS/nanobot/issues/3421) | RFC: Should we add a `nanobot update` command? | 4 | Open |
| [#3344](https://github.com/HKUDS/nanobot/issues/3344) | DingTalk Group Can not Seed file to Nanobot Agent | 4 | Open |
| [#162](https://github.com/HKUDS/nanobot/issues/162) | Improve session management: support multiple conversations, new session command, and auto-expiration | 4 | Closed |

**Analysis:**
- **Skill creation regression** (#2049, 13 comments): Users report that the skill-creator tool became unavailable after a recent upgrade. This was the top discussion topic and is now closed—likely addressed in a recent patch.
- **Provider failover** (#3376, 7 comments): Strong demand for multi-provider resilience. Users want automatic switching when a provider hits timeouts, 429 rate limits, or 5xx errors—currently nanobot only retries within the same provider.
- **CLI update command** (#3421, 4 comments): Community RFC proposing a `nanobot update` CLI command to streamline upgrades, reflecting the project's fast release cadence.
- **DingTalk file upload** (#3344, 4 comments): File and @mention arrive as separate messages, breaking nanobot's ability to process attachments.

---

## 5. Bugs & Stability

Reported bugs ranked by potential severity:

| Issue | Title | Severity Signals | Fix PR? |
|-------|-------|------------------|---------|
| [#3424](https://github.com/HKUDS/nanobot/issues/3424) | Agent loop deadlocks when LLM API call hangs — no timeout | **Critical** — agent becomes fully unresponsive | [#3428](https://github.com/HKUDS/nanobot/pull/3428) merged |
| [#3410](https://github.com/HKUDS/nanobot/issues/3410) | Large RAM consumption in v0.1.5.post2 | **High** — ~3x memory increase (200 MB → 600 MB) | None |
| [#3426](https://github.com/HKUDS/nanobot/issues/3426) | OpenAI Codex provider no longer streams `_progress` deltas (regression) | **Medium** — streaming UX regression v0.1.4.post6 → v0.1.5.post2 | None |
| [#3417](https://github.com/HKUDS/nanobot/issues/3417) | anthropic_provider hardcodes `temperature=1.0` — Claude Opus 4.7 rejects with 400 | **Medium** — API breakage for Opus 4.7 users | None |
| [#2568](https://github.com/HKUDS/nanobot/issues/2568) | Telegram not correctly rendering markdown reliably | **Medium** — inconsistent markdown since v0.1.4.post6 | None |
| [#3390](https://github.com/HKUDS/nanobot/issues/3390) | Tool Call: "Sorry, I encountered an error" on workspace clean | **Medium** — silent failure with error message | None |

**Notable:** The deadlock issue (#3424) was addressed within the same day via PR #3428, demonstrating responsive maintenance. The memory regression (#3410) and streaming regression (#3426) remain open and may warrant quick patches.

---

## 6. Feature Requests & Roadmap Signals

Active feature requests indicating user needs:

| Issue | Title | Demand Signals |
|-------|-------|----------------|
| [#3376](https://github.com/HKUDS/nanobot/issues/3376) | Provider/Model Failover — auto-switch on errors | 7 comments, 1 👍; strong operational resilience ask |
| [#3421](https://github.com/HKUDS/nanobot/issues/3421) | `nanobot update` CLI command | 4 comments; addresses fast release cadence |
| [#3309](https://github.com/HKUDS/nanobot/issues/3309) | Per-chat group policy overrides for Telegram | 1 comment, 1 👍; multi-tenant bot use case |
| [#3433](https://github.com/HKUDS/nanobot/issues/3433) | Prune stale MSTeams conversation refs | 0 comments; maintenance/robustness |
| [#3431](https://github.com/HKUDS/nanobot/issues/3431) | MSTeams threaded replies should use replyToId | 0 comments; fix for Teams integration |

**Prediction:** Provider failover (#3376) is the highest-impact feature request and likely to be prioritized given operational demands. The `nanobot update` command (#3421) is a straightforward DX improvement that could land in an upcoming minor release. MSTeams fixes (#3431, #3433) have corresponding PRs (#3432) in progress.

---

## 7. User Feedback Summary

**Pain points:**
- **Skill creation broken** after upgrade — users lost ability to create skills via the bot (#2049).
- **Memory regression** in v0.1.5.post2 — 3x memory usage increase is blocking upgrades for resource-constrained deployments (#3410).
- **Telegram markdown instability** — inconsistent rendering undermines communication clarity (#2568).
- **WeChat message limit** — context_token caps at 10 messages with no workaround (#2772).
- **DingTalk file handling** — files and mentions arrive as separate messages, breaking bot context (#3344).

**Positive signals:**
- Session management improvements (#162) were closed, indicating progress on multi-conversation support.
- Video support for Telegram and WebUI (#3429, #3430) addresses media-rich use cases.
- Lazy document parsing (#3423) directly addresses startup performance concerns.

---

## 8. Backlog Watch

Important issues lacking recent activity or maintainer attention:

| Issue | Title | Age | Status | Concern |
|-------|-------|-----|--------|---------|
| [#2772](https://github.com/HKUDS/nanobot/issues/2772) | 当用微信对话时，最多支持返回10条消息 | ~22 days | Open | WeChat context limit with no workaround |
| [#2568](https://github.com/HKUDS/nanobot/issues/2568) | Telegram markdown rendering unreliable | ~29 days | Open | Regression since v0.1.4.post6 |
| [#3344](https://github.com/HKUDS/nanobot/issues/3344) | DingTalk Group cannot send file to Nanobot | ~4 days | Open | Channel integration gap |
| [#3410](https://github.com/HKUDS/nanobot/issues/3410) | Large RAM consumption in v0.1.5.post2 | ~2 days | Open | Memory regression, no fix PR yet |
| [#3426](https://github.com/HKUDS/nanobot/issues/3426) | OpenAI Codex streaming regression | 1 day | Open | Regression, no fix PR yet |

**Recommendation:** The WeChat message limit (#2772) and Telegram markdown regression (#2568) are long-standing issues that may need explicit triage. The memory (#3410) and streaming (#3426) regressions from v0.1.5.post2 should be prioritized for patch releases.

---

*Digest generated from NanoBot repository activity on 2026-04-25. Data sourced from GitHub issues and pull requests updated within the last 24 hours.*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>Let me analyze the GitHub data for Zeroclaw and generate a structured project digest for 2026-04-25.

Key data points:
- Issues updated in last 24h: 50 (open/active: 43, closed: 7)
- PRs updated in last 24h: 50 (open: 21, merged/closed: 29)
- New releases: 0

Let me organize the information:

**Today's Overview:**
- High activity with 50 issues and 50 PRs updated
- 29 PRs merged/closed, 21 still open
- No new releases
- Multiple bug fixes and features in progress

**Releases:**
- None today

**Project Progress:**
Merged/Closed PRs:
1. #6016 - PostgreSQL backend re-introduction
2. #6010 - request_approval() for Discord, Slack, Signal, Matrix, WhatsApp
3. #6021 - JSON array parsing fix
4. #6027 - MiniMax native tool calling enabled
5. #6092 - fix for fallback providers reading api_key, base_url from config
6. #6093 - fix for redundant narration push before AssistantToolCalls
7. #6082 - memory context closing tag fix
8. #6080 - webhook endpoint tool support
9. #6076 - rag-pdf feature fix
10. #6035 - ACP tool output formatting
11. #5975 - Gemini/OpenRouter tool-call compatibility
12. #6087 - env var overrides for channel tokens
13. #6088 - Telegram batch media-group images

Open PRs:
1. #5788 - Mozilla Fluent pipeline + multi-locale mdBook
2. #5960 - onboard rewrite
3. #5735 - decouple gateway and tui-onboarding from agent-runtime


4. #6093 - agent narration fix
5. #6013 - ACP defaultModel fix
6. #6025 - docker web dashboard
7. #6064 - security bypass (DO NOT MERGE)
8. #6091 - session key normalization

**Community Hot Topics:**
Issues with most comments:
1. #5815 - Provider ignores llamacpp object (9 comments, in-progress)
2. #2503 - napcat/onebot channel (8 comments)
3. #5722 - shell sandbox blocks Python patterns (6 comments)
4. #4830 - HMAC tool execution receipts (6 comments, closed)
5. #5584 - Duplicate consecutive assistant messages (6 comments)
6. #5890 - RFC: Multi-agent UX flow (5 comments)
7. #5318 - stream_mode Partial (4 comments)
8. #4846 - WhatsApp-Web Channel Broken (4 comments)
9. #5556 - Summarization timed out (4 comments)
10. #2767 - Multi-Agent Routing (4 comments, 8 👍)

**Bugs & Stability:**
Critical issues blocking workflows:
1. #5815 - llamacpp provider ignored (S1, in-progress)
2. #4846 - WhatsApp-Web broken (S1)
3. #5459 - Ollama tool_count=0 (S1)
4. #5962 - Ollama provider call failed (S1)
5. #6051 - self-test reports localhost (S1)
6. #5984 - zeroclaw-desktop crash (S1)
7. #6000 - hard-coded defaults vs local hosted (S1, closed)
8. #2324 - Tools in always_ask silently denied (S1, closed)
9. #5289 - Bedrock sends API_KEY header (S2)
10. #5809 - shell policy blocks git -C (S2)
11. #5584 - Duplicate consecutive assistant messages (S2)
12. #5285 - Thoughts merge into final message (S2)

**Feature Requests & Roadmap Signals:**
1. #5890 - RFC: Multi-agent UX flow (active discussion)
2. #5891 - Multi-agent v1 tracker
3. #2767 - Multi-Agent Routing (8 👍)
4. #4647 - Provider-scoped model fallback chains
5. #5752 - Configurable timeout values
6. #5674 - classify_channel_reply_intent configurable
7. #5259 - WeChat iLink channel recovery

**User Feedback Summary:**
- Ollama integration problems causing tool calling failures
- Shell sandbox restrictions preventing legitimate git operations
- WhatsApp-Web channel experiencing breakage
- Configuration challenges with local LLM setups
- Memory recall wildcard queries returning no results
- QQ voice messages generating duplicate entries

**Backlog Watch:**
Stale or long-running issues needing attention:
1. #2767 - Multi-Agent Routing (stale)
2. #5259 - WeChat iLink channel (no recent activity)
3. #4647 - Provider-scoped model fallback chains
4. #5752 - Configurable timeout values
5. #5674 - classify_channel_reply_intent configurable
</think>

# Zeroclaw Project Digest — 2026-04-25

## 1. Today's Overview

Zeroclaw experienced high development activity on 2026-04-25, with 50 issues and 50 pull requests updated in the last 24 hours. The team closed/merged 29 PRs while 21 remain open for review. No new releases were published today. Notable progress includes fixes for Ollama tool calling, PostgreSQL memory backend restoration, and multi-channel approval workflows. Several S1 (workflow-blocking) bugs remain in-progress, particularly around provider configuration and channel stability.

---

## 2. Releases

**No new releases today.** The project last shipped v0.6.9 (referenced in issue #5722 and #5498).

---

## 3. Project Progress

### Merged/Closed PRs (29 total)

| PR | Title | Impact |
|----|-------|--------|
| [#6016](https://github.com/zeroclaw-labs/zeroclaw/pull/6016) | Re-introduce PostgreSQL memory backend | Restores shared concurrent-write store for multi-instance deployments |
| [#6010](https://github.com/zeroclaw-labs/zeroclaw/pull/6010) | Implement `request_approval()` for Discord, Slack, Signal, Matrix, WhatsApp | Fixes silent auto-denial of `always_ask` tools in non-CLI channels |
| [#6021](https://github.com/zeroclaw-labs/zeroclaw/pull/6021) | Parse JSON array syntax in config for `Vec<String>` fields | Fixes config display for array fields |
| [#6027](https://github.com/zeroclaw-labs/zeroclaw/pull/6027) | Enable MiniMax native tool calling | Restores tool support for MiniMax provider |
| [#6092](https://github.com/zeroclaw-labs/zeroclaw/pull/6092) | Read `api_key`, `base_url`, `name` from config for fallback providers | Fixes hardcoded env-var-only resolution |
| [#6093](https://github.com/zeroclaw-labs/zeroclaw/pull/6093) | Drop redundant narration push before `AssistantToolCalls` | Fixes duplicate consecutive assistant messages |
| [#6082](https://github.com/zeroclaw-labs/zeroclaw/pull/6082) | Add closing tag to memory context in cron/daemon | Enables model to distinguish memory block boundaries |
| [#6080](https://github.com/zeroclaw-labs/zeroclaw/pull/6080) | Enable tool support in webhook endpoint | Webhook users now get full tool support |
| [#6076](https://github.com/zeroclaw-labs/zeroclaw/pull/6076) | Unbreak `--features rag-pdf` and restore Windows tests | Fixes silent feature inertness |
| [#6035](https://github.com/zeroclaw-labs/zeroclaw/pull/6035) | Correct ACP tool output formatting | Enables proper tool output display |
| [#5975](https://github.com/zeroclaw-labs/zeroclaw/pull/5975) | Gemini/OpenRouter tool-call compatibility + schema clarity | Fixes namespace prefix stripping and schema issues |
| [#6087](https://github.com/zeroclaw-labs/zeroclaw/pull/6087) | Support env var overrides for channel tokens | Slack, Discord, Telegram token override support |
| [#6088](https://github.com/zeroclaw-labs/zeroclaw/pull/6088) | Batch Telegram media-group images into single request | Reduces redundant agent requests for albums |

### Open PRs Under Review

| PR | Title | Size | Risk |
|----|-------|------|------|
| [#5788](https://github.com/zeroclaw-labs/zeroclaw/pull/5788) | Mozilla Fluent pipeline + multi-locale mdBook + docs overhaul | XL | Medium |
| [#5960](https://github.com/zeroclaw-labs/zeroclaw/pull/5960) | Clean-slate onboard rewrite — schema-driven, idempotent, DRY | XL | Medium |
| [#5735](https://github.com/zeroclaw-labs/zeroclaw/pull/5735) | Decouple gateway and tui-onboarding from agent-runtime | XS | Low |
| [#6064](https://github.com/zeroclaw-labs/zeroclaw/pull/6064) | **Security:** Implement bypass for shell policy validation (DO NOT MERGE) | — | High |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

1. **[#5815](https://github.com/zeroclaw-labs/zeroclaw/issues/5815)** — Provider ignores llamacpp object *(9 comments, S1, in-progress)*
   - **Need:** `[providers.models.llamacpp]` config is ignored, default values always applied. Broke after schema version 2.

2. **[#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503)** — Where is napcat/onebot channel *(8 comments)*
   - **Need:** Users cannot find OneBot11 or napcat channel option; request to add OneBot support.

3. **[#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722)** — Shell sandbox blocks Python skill patterns *(6 comments, high risk)*
   - **Need:** Default sandbox configuration blocks realistic Python development workflows; affects InvestorClaw portfolio analysis skill.

4. **[#4830](https://github.com/zeroclaw-labs/zeroclaw/issues/4830)** — HMAC tool execution receipts *(6 comments, closed)*
   - **Feature proposal:** Cryptographic HMAC-SHA256 receipts for runtime verification of tool outputs.

5. **[#5584](https://github.com/zeroclaw-labs/zeroclaw/issues/5584)** — Duplicate consecutive assistant messages *(6 comments)*
   - **Need:** When model returns narration text alongside tool calls, two consecutive assistant messages appear.

6. **[#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890)** — RFC: Multi-agent UX flow *(5 comments, active RFC)*
   - **Need:** Design proposal for multi-agent user experience; 7-day discussion period in progress.

### Most Popular Feature Requests (by 👍)

| Issue | Title | 👍 |
|-------|-------|-----|
| [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) | Multi-Agent Routing | 8 |
| [#5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459) | Ollama provider sends `tool_count=0` | 4 |
| [#5674](https://github.com/zeroclaw-labs/zeroclaw/issues/5674) | Make `classify_channel_reply_intent` configurable | 3 |

---

## 5. Bugs & Stability

### S1 — Workflow Blocked (Critical)

| Issue | Title | Status | Fix PR |
|-------|-------|--------|--------|
| [#5815](https://github.com/zeroclaw-labs/zeroclaw/issues/5815) | Provider ignores llamacpp object | In-progress | — |
| [#4846](https://github.com/zeroclaw-labs/zeroclaw/issues/4846) | WhatsApp-Web Channel Broken | Open | — |
| [#5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459) | Ollama sends `tool_count=0` | Open | — |
| [#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) | Ollama provider call failed when tools needed | Open | — |
| [#6051](https://github.com/zeroclaw-labs/zeroclaw/issues/6051) | Self-test reports `127.0.0.1` contrary to config | Open | — |
| [#5984](https://github.com/zeroclaw-labs/zeroclaw/issues/5984) | zeroclaw-desktop crash for "No provider set" | Open | — |
| [#6000](https://github.com/zeroclaw-labs/zeroclaw/issues/6000) | Hard-coded defaults vs local hosted setup | **Closed** | — |
| [#2324](https://github.com/zeroclaw-labs/zeroclaw/issues/2324) | Tools in `always_ask` silently denied | **Closed** | [#6010](https://github.com/zeroclaw-labs/zeroclaw/pull/6010) ✅ |

### S2 — Degraded Behavior

| Issue | Title | Status | Fix PR |
|-------|-------|--------|--------|
| [#5289](https://github.com/zeroclaw-labs/zeroclaw/issues/5289) | Bedrock sends `x-api-key` header causing 403 | Open | — |
| [#5809](https://github.com/zeroclaw-labs/zeroclaw/issues/5809) | Shell policy blocks `git -C <path>` | In-progress | — |
| [#5584](https://github.com/zeroclaw-labs/zeroclaw/issues/5584) | Duplicate consecutive assistant messages | Open | [#6093](https://github.com/zeroclaw-labs/zeroclaw/pull/6093) ✅ |
| [#5285](https://github.com/zeroclaw-labs/zeroclaw/issues/5285) | Thoughts merge into final message (GLM-5) | Open | — |
| [#5117](https://github.com/zeroclaw-labs/zeroclaw/issues/5117) | Mistral tool calls fail due to invalid `tool_call.id` | In-progress | — |

### S3 — Minor Issues

| Issue | Title | Status |
|-------|-------|--------|
| [#5556](https://github.com/zeroclaw-labs/zeroclaw/issues/5556) | Summarization timed out after 60s (Ollama) | Open |
| [#6020](https://github.com/zeroclaw-labs/zeroclaw/issues/6020) | Cargo test fail on Windows | Open |
| [#5170](https://github.com/zeroclaw-labs/zeroclaw/issues/5170) | `memory_recall` with `*` returns empty | Open |

**Stability Note:** Ollama provider has multiple critical issues (#5459, #5962) affecting tool calling. The team merged [#6092](https://github.com/zeroclaw-labs/zeroclaw/pull/6092) to fix fallback provider config reading, which may address some root causes.

---

## 6. Feature Requests & Roadmap Signals

### Active RFC / Design Proposals

| Issue | Title | Stage |
|-------|-------|-------|
| [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) | RFC: Multi-agent UX flow — design | 7-day discussion period (started 2026-04-19) |
| [#5891](https://github.com/zeroclaw-labs/zeroclaw/issues/5891) | Multi-agent v1 — tracker | Tracking issue |

**Analysis:** Multi-agent architecture is the dominant roadmap theme. Community interest is high (#2767 has 8 👍), and the RFC is in formal review. Expect multi-agent support to be a major v0.7.x theme.

### Other Notable Feature Requests

| Issue | Title | Priority Signal |
|-------|-------|-----------------|
| [#4647](https://github.com/zeroclaw-labs/zeroclaw/issues/4647) | Provider-scoped model fallback chains | Provider reliability enhancement |
| [#5752](https://github.com/zeroclaw-labs/zeroclaw/issues/5752) | Replace hardcoded timeout values with configurable parameters | In-progress |
| [#5674](https://github.com/zeroclaw-labs/zeroclaw/issues/5674) | Make `classify_channel_reply_intent` configurable | 3 👍 |
| [#5259](https://github.com/zeroclaw-labs/zeroclaw/issues/5259) | Recover WeChat iLink channel | Reverted feature restoration |
| [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) | Add OneBot11/napcat channel | Channel expansion |

### Large Open PRs Indicating Near-Term Features

- **#5788** — Mozilla Fluent i18n pipeline + full docs overhaul (XL, likely v0.7.0)
- **#5960** — Clean-slate onboard rewrite (XL, likely v0.7.0)

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Ollama tool calling broken** | #5459, #5962, #5815 | S1 — Multiple users blocked |
| **Shell sandbox too restrictive** | #5722, #5809 | S2 — Blocks legitimate Python/git workflows |
| **Local LLM configuration difficult** | #6000 (closed), #6051 | S1 — Setup friction |
| **WhatsApp-Web channel broken** | #4846 | S1 — Popular channel down |
| **Memory recall failures** | #5170 | S3 — Edge case but confusing |
| **QQ voice message duplication** | #5662 | S3 — Database bloat |

### Use Cases Reported

- **Portfolio analysis skills** (#5722) — InvestorClaw project using FINOS CDM 5.x
- **Multi-instance deployments** (#6016) — Need shared PostgreSQL store
- **Multi-agent orchestration** (#2767, #5890) — Isolated agents with routing
- **OneBot/napcat integration** (#2503) — Connecting to existing bot ecosystems

### Satisfaction Signals

- PostgreSQL backend restoration (#6016) addresses a critical gap for production deployments
- Multi-channel `request_approval()` (#6010) resolves long-standing UX gap for supervised autonomy
- Telegram media batching (#6088) improves real-world group chat experience

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

<think>Let me analyze the GitHub data for PicoClaw and generate a structured project digest for 2026-04-25.

Key data points:
- Issues updated in last 24h: 11 (open/active: 7, closed: 4)
- PRs updated in last 24h: 38 (open: 19, merged/closed: 19)
- New releases: 1 (nightly build v0.2.7-nightly.20260425.8d51d306)

Let me organize this into the required sections.
</think>

# PicoClaw Project Digest — 2026-04-25

## 1. Today's Overview

PicoClaw maintains high development velocity with 38 PRs and 11 issues updated in the last 24 hours. The project closed 19 PRs (merged or closed) and resolved 4 issues, indicating strong code review and integration throughput. A new nightly build (**v0.2.7-nightly.20260425.8d51d306**) was published, suggesting active progress toward the v0.2.7 release. Community engagement is robust, with multiple contributors filing bugs, enhancements, and features across provider integrations, tool infrastructure, and channel support. Overall project health appears strong, though several provider-specific bugs (Anthropic, DeepSeek) and a Windows build regression remain open.

---

## 2. Releases

### New Nightly Build Published

| Version | Build ID | Date |
|---------|----------|------|
| **v0.2.7-nightly.20260425.8d51d306** | 8d51d306 | 2026-04-25 |

- **Status:** Automated nightly build; marked as potentially unstable.
- **Changelog:** https://github.com/sipeed/picoclaw/compare/v0.2.7...main
- **Note:** This build includes all commits from `main` since the last tagged release. Users are advised to use with caution in production environments.

---

## 3. Project Progress

### Merged/Closed PRs (19 total)

| PR | Author | Domain | Summary |
|----|--------|--------|---------|
| [#2641](https://github.com/sipeed/picoclaw/pull/2641) | @afjcjsbx | tool, config | **MCP CLI management suite** — Full CRUD interface (`show`, `add`, `list`, `remove`, `test`, `edit`) for MCP server configuration via terminal |
| [#2487](https://github.com/sipeed/picoclaw/pull/2487) | @SiYue-ZO | build, go | **Fixed Windows build flow** — Removed Unix-only assumptions in `Makefile` and `web/Makefile`; replaced Unix-only operations |
| [#2256](https://github.com/sipeed/picoclaw/pull/2256) | @mateea326 | channel, go | **Security hardening for WebSocket `CheckOrigin`** — Mitigated Cross-Site WebSocket Hijacking (CSWSH) vulnerability |
| [#2573](https://github.com/sipeed/picoclaw/pull/2573) | @shaun0927 | tool, go | **Fixed launcher locale mutation of web-search routing** — UI language changes no longer affect backend auto-provider selection |

**Key advancements:**
- MCP tooling now fully manageable via CLI (significant UX improvement for power users).
- Windows build path is now functional, addressing long-standing cross-platform gaps.
- WebSocket security hardened against CSWSH attacks.
- Launcher locale isolation bug resolved, preventing unintended side effects on web search routing.

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Title | Author | Comments | Reactions | Domain |
|-------|-------|--------|----------|-----------|--------|
| [#2448](https://github.com/sipeed/picoclaw/issues/2448) | **[BUG] WebUI Chat responses merge agent reasoning and user-facing reply** | @s-varenia | 3 | 0 | channel, agent |
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) | **[Feature] Add in config to send streaming HTTP request** | @OuSatoru | 2 | 1 | provider, config |
| [#2499](https://github.com/sipeed/picoclaw/issues/2499) | **[Feature] Secure third-party Pico WS access + versioned compatibility policy** | @SiYue-ZO | 2 | 0 | channel, config |

### Most Active PRs (by attention)

| PR | Title | Author | Domain |
|----|-------|--------|--------|
| [#2656](https://github.com/sipeed/picoclaw/pull/2656) | **Prompt layering** | @alexhoshina | agent, tool |
| [#2653](https://github.com/sipeed/picoclaw/pull/2653) | **MQTT channel support** | @hehaijunandhenry | channel |
| [#2531](https://github.com/sipeed/picoclaw/pull/2531) | **Delegate tool for cross-agent task handoff** | @is-Xiaoen | agent, tool |

### Underlying Needs Analysis

1. **Agent reasoning transparency:** Issue [#2448](https://github.com/sipeed/picoclaw/issues/2448) highlights a critical UX failure where internal chain-of-thought is exposed to end users, indicating the need for better separation between reasoning and response rendering. This aligns with PR [#2661](https://github.com/sipeed/picoclaw/pull/2661) (thought visibility toggle) currently in review.

2. **Streaming support:** Feature request [#2404](https://github.com/sipeed/picoclaw/issues/2404) requests OpenAI-style streaming configuration, reflecting demand for real-time response delivery.

3. **Third-party ecosystem:** Issue [#2499](https://github.com/sipeed/picoclaw/issues/2499) seeks a secure, versioned API for external clients and browser extensions, indicating growing third-party integration interest.

4. **Advanced agent orchestration:** PRs for prompt layering (#2656) and delegate tool (#2531) signal investment in multi-agent architectures and structured prompt management.

---

## 5. Bugs & Stability

### Open Bugs (ranked by potential severity)

| # | Issue | Author | Domain | Severity Signal |
|---|-------|--------|--------|-----------------|
| [#2665](https://github.com/sipeed/picoclaw/issues/2665) | **Wrong model IDs in Anthropic dropdown (dots vs dashes)** | @gatorbrain | provider | **High** — API calls will fail for all Anthropic models |
| [#2648](https://github.com/sipeed/picoclaw/issues/2648) | **DeepSeek returns 400 due to misordered reasoning content** | @SiYue-ZO | provider, agent | **High** — Breaks conversation continuity after tool calls |
| [#2650](https://github.com/sipeed/picoclaw/issues/2650) | **DeepSeek-V4-Flash tool calls error with reasoning enabled** | @Dedonkey | provider | **High** — Blocks tool usage with reasoning models |
| [#2616](https://github.com/sipeed/picoclaw/issues/2616) | **web_search tool not registered when DuckDuckGo disabled** | @SiYue-ZO | tool, config | **Medium** — International users lose web search entirely |
| [#2651](https://github.com/sipeed/picoclaw/issues/2651) | **Windows build documentation gap** | @lstarboy | build | **Medium** — Onboarding blocker for Windows developers |

### Fix PRs Already Submitted

| PR | Fixes | Author |
|----|-------|--------|
| [#2657](https://github.com/sipeed/picoclaw/pull/2657) | DeepSeek reasoning history persistence | @lc6464 |
| [#2661](https://github.com/sipeed/picoclaw/pull/2661) | Thought visibility toggle (addresses #2448) | @SiYue-ZO |
| [#2659](https://github.com/sipeed/picoclaw/pull/2659) | Isolate thought bubble collapse state | @SiYue-ZO |

**Stability Note:** The cluster of DeepSeek-related bugs (#2648, #2650) combined with the active fix PR (#2657) suggests the reasoning content handling is a known pain point being actively addressed.

---

## 6. Feature Requests & Roadmap Signals

### New Feature Requests Filed Today

| # | Feature | Author | Domain | Likelihood of Inclusion |
|---|---------|--------|--------|------------------------|
| [#2652](https://github.com/sipeed/picoclaw/issues/2652) | **GitHub Copilot provider support** | @lstarboy | provider | Medium — No implementation details yet |
| [#2649](https://github.com/sipeed/picoclaw/issues/2649) | **Serial port (UART) tool support** | @SiYue-ZO | tool | High — Aligns with existing I2C/SPI toolset |
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) | **Streaming HTTP request configuration** | @OuSatoru | provider, config | High — Matches PR #2653 MQTT work pattern |

### Roadmap-Aligned PRs in Progress

| PR | Feature | Significance |
|----|---------|--------------|
| [#2653](https://github.com/sipeed/picoclaw/pull/2653) | **MQTT channel support** | New communication channel; expands IoT/embedded integration |
| [#2656](https://github.com/sipeed/picoclaw/pull/2656) | **Prompt layering** | Architectural improvement for prompt management |
| [#2531](https://github.com/sipeed/picoclaw/pull/2531) | **Delegate tool (cross-agent handoff)** | Phase 2 plan item; enables multi-agent orchestration |
| [#1780](https://github.com/sipeed/picoclaw/pull/1780) | **QQ channel stability improvements** | Mature feature with configurable retry/rate-limit parameters |

**Prediction:** UART tool support (#2649) is highly likely for v0.2.8+ given the existing I2C/SPI precedent. MQTT channel (#2653) and streaming config (#2404) are strong candidates for v0.2.8 as they expand connectivity options.

---

## 7. User Feedback Summary

### Pain Points Reported

1. **Agent reasoning exposure in WebUI** ([#2448](https://github.com/sipeed/picoclaw/issues/2448)):
   - Users on Synology NAS see raw chain-of-thought concatenated with responses.
   - **Impact:** Unreadable messages; broken user experience.
   - **Sentiment:** Frustrated; filed 2026-04-09, still active.

2. **DeepSeek reasoning mode breaks tool calls** ([#2650](https://github.com/sipeed/picoclaw/issues/2650)):
   - Users with DeepSeek-V4-Flash (reasoning enabled) encounter errors on skill/exec tool calls.
   - **Impact:** Blocks core functionality; workaround is to disable reasoning.
   - **Sentiment:** Buggy behavior in a flagship model.

3. **Anthropic model IDs malformed** ([#2665](https://github.com/sipeed/picoclaw/issues/2665)):
   - Dropdown shows `claude-sonnet-4.6` but API expects `claude-sonnet-4-6`.
   - **Impact:** All Anthropic users cannot select valid models.
   - **Sentiment:** Blocking; filed same day.

4. **Windows build documentation absent** ([#2651](https://github.com/sipeed/picoclaw/issues/2651)):
   - Developer cannot find Windows build instructions.
   - **Impact:** Onboarding barrier for Windows contributors.
   - **Sentiment:** Seeking guidance.

### Positive Signals

- **MCP CLI suite** ([#2641](https://github.com/sipeed/picoclaw/pull/2641) merged) received community acclaim for eliminating manual JSON editing.
- **Windows build fix** ([#2487](https://github.com/sipeed/picoclaw/pull/2487) merged) addresses long-standing cross-platform complaints.
- **WebSocket security hardening** ([#2256](https://github.com/sipeed/picoclaw/pull/2256) merged) addresses enterprise security concerns.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| # | Title | Age | Status | Priority |
|---|-------|-----|--------|----------|
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) | Streaming HTTP request config | 18 days | Open | High (2 👍) |
| [#2499](https://github.com/sipeed/picoclaw/issues/2499) | Secure third-party WS access policy | 12 days | Closed (wontfix) | Review needed — community may need alternative |
| [#2652](https://github.com/sipeed/picoclaw/issues/2652) | GitHub Copilot support | 1 day | Open | Needs scope clarification |

### PRs Awaiting Review/Merge

| # | Title | Age | Status | Risk if Stale |
|---|-------|-----|--------|---------------|
| [#2656](https://github.com/sipeed/picoclaw/pull/2656) | Prompt layering | 1 day | Open | Architectural delay |
| [#2653](https://github.com/sipeed/picoclaw/pull/2653) | MQTT channel support | 1 day | Open | Community interest high |
| [#2531](https://github.com/sipeed/picoclaw/pull/2531) | Delegate tool (Phase 2) | 10 days | Open | Roadmap blocker |
| [#2163](https://github.com/sipeed/picoclaw/pull/2163) | Google OAuth scope preservation | 27 days | Open | Security-sensitive |
| [#1780](https://github.com/sipeed/picoclaw/pull/1780) | QQ channel stability | 37 days | Open | Feature maturity concern |

**Backlog Note:** PR [#2163](https://github.com/sipeed/picoclaw/pull/2163) (Google OAuth refresh) has been open 27 days with no activity — this is a security-sensitive fix that should be prioritized. The QQ channel PR (#1780) at 37 days may need either merge or closure to prevent bitrot.

---

*Digest generated from PicoClaw GitHub activity on 2026-04-25. Data sourced from github.com/sipeed/picoclaw.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

<think>Let me analyze the GitHub data for NanoClaw and generate a structured project digest for 2026-04-25.

Key observations:
1. **Activity**: 15 issues updated in last 24h (7 open, 8 closed), 35 PRs updated (11 open, 24 merged/closed)
2. **Releases**: None in last 24h
3. **Recent v2 launch**: v2 was released 2026-04-22, so this is very recent
4. **Major themes**:
   - v2 migration issues (setup problems, duplicate replies, systemd detection)
   - Custom endpoint support (Codex + OpenCode)
   - Tool call logging/observability
   - WhatsApp document mimetype fix
   - Pre-v2 cleanup (docs, stale files)
   - Security fix (IPC directory isolation)

Let me structure this properly.
</think>

# NanoClaw Project Digest — 2026-04-25

## 1. Today's Overview

NanoClaw is experiencing high velocity today with 35 PRs and 15 issues updated in the last 24 hours. The project is in active stabilization mode following the v2 architectural rewrite released on 2026-04-22. Multiple community contributors are addressing v2 migration pain points (setup failures, systemd detection, duplicate replies), while also advancing custom endpoint support for Codex and OpenCode providers. Overall project health is strong with 24 PRs merged/closed today, indicating healthy code review throughput despite the transition period.

---

## 2. Releases

**No new releases in the last 24 hours.** The most recent release is **v2.0.0** (2026-04-22), a substantial architectural rewrite. Active issues today suggest users are still onboarding onto the new architecture.

---

## 3. Project Progress

### Merged/Closed PRs (24 total)

| PR | Author | Summary |
|----|--------|---------|
| [#1992](https://github.com/qwibitai/nanoclaw/pull/1992) | Jeffrey-Keyser | Enable tool call logging for host-side agents (CEO/ops) |
| [#1991](https://github.com/qwibitai/nanoclaw/pull/1991) | Jeffrey-Keyser | CEO/ops agent observability via PostToolUse hooks |
| [#1980](https://github.com/qwibitai/nanoclaw/pull/1980) | glifocat | Docs: refresh schema + slug-scoped service commands |
| [#1979](https://github.com/qwibitai/nanoclaw/pull/1979) | glifocat | Docs: refresh schema + terminology on mixed-status docs |
| [#1978](https://github.com/qwibitai/nanoclaw/pull/1978) | glifocat | Docs: add historical banners to pre-v2 architecture references |
| [#1977](https://github.com/qwibitai/nanoclaw/pull/1977) | glifocat | Chore: remove pre-v2 group prompt files |
| [#1967](https://github.com/qwibitai/nanoclaw/pull/1967) | IamAdamJowett | Per-provider continuations + agent-route file forwarding fixes |
| [#1965](https://github.com/qwibitai/nanoclaw/pull/1965) | danshapiro | Recover/fail conversational turns with no visible reply |
| [#1963](https://github.com/qwibitai/nanoclaw/pull/1963) | grtwrn | Wire channels with correct engage fields, skip prefix for native JIDs |
| [#4](https://github.com/qwibitai/nanoclaw/pull/4) | gavrielc | **Security fix**: Isolate IPC directories per group (task data leakage) |

**Key advancements:**
- **Observability**: Tool call logging now extended to CEO and ops agents (previously only container workers)
- **v2 cleanup**: Pre-v2 documentation and stale group prompt files removed
- **Stability**: Fixes for silent conversational failures and channel registration bugs
- **Security**: IPC directory isolation prevents cross-group data leakage

### Open PRs (11 total)

| PR | Author | Summary |
|----|--------|---------|
| [#1995](https://github.com/qwibitai/nanoclaw/pull/1995) | TeeJS | OpenCode: custom provider npm, no-auth, env API key + `/add-local-llama` skill |
| [#1994](https://github.com/qwibitai/nanoclaw/pull/1994) | TeeJS | Codex: route per-group custom OpenAI-compat endpoints |
| [#1993](https://github.com/qwibitai/nanoclaw/pull/1993) | Jeffrey-Keyser | Add tool logging to ClaudeCliBackend |
| [#1990](https://github.com/qwibitai/nanoclaw/pull/1990) | Jeffrey-Keyser | Enable tool call logging for CEO/ops via startup migration |
| [#1988](https://github.com/qwibitai/nanoclaw/pull/1988) | grtwrn | WhatsApp: set real mimetype for document attachments |
| [#1987](https://github.com/qwibitai/nanoclaw/pull/1987) | TeeJS | Setup: fail fast when build tools missing before pnpm install |
| [#1986](https://github.com/qwibitai/nanoclaw/pull/1986) | Jeffrey-Keyser | Implement live agent activity observability + `/activity` command |
| [#1985](https://github.com/qwibitai/nanoclaw/pull/1985) | Jeffrey-Keyser | Live agent activity observability (SQLite tool_call_events) |
| [#1983](https://github.com/qwibitai/nanoclaw/pull/1983) | TeeJS | Wire per-group `container_config.env` into spawn |
| [#1968](https://github.com/qwibitai/nanoclaw/pull/1968) | IamAdamJowett | End-to-end per-agent provider and model configuration |
| [#1989](https://github.com/qwibitai/nanoclaw/issues/1989) | dustinlucien | Upgrade nanoclaw fork to v2 (issue, not PR) |

---

## 4. Community Hot Topics

### Most Active Issues

| Issue | Author | Comments | Topic |
|-------|--------|----------|-------|
| [#1503](https://github.com/qwibitai/nanoclaw/issues/1503) | @lactose | 18 | **SSL cert invalid on nanoclaw.dev** (open since 2026-03-28) |
| [#1984](https://github.com/qwibitai/nanoclaw/issues/1984) | @TeeJS | 3 | Provider support for custom/local OpenAI-compat endpoints |
| [#414](https://github.com/qwibitai/nanoclaw/issues/414) | @Koshkoshinsk | 1 | Linux: stale docker group detected but not remediated |

**Analysis:**
- **SSL certificate issue (#1503)** has been open for ~4 weeks with 18 comments—likely blocking some users from accessing documentation/resources. Needs maintainer attention.
- **Custom endpoint support (#1984/#1994/#1995)** is the most active feature thread, with 3 PRs open. Community strongly wants BYO OpenAI-compatible endpoints (LiteLLM, llama.cpp, vLLM). This appears to be a high-priority roadmap item.

---

## 5. Bugs & Stability

### Open Bug Reports (ranked by severity/impact)

| Issue | Priority | Summary | Fix PR? |
|-------|----------|---------|---------|
| [#1982](https://github.com/qwibitai/nanoclaw/issues/1982) | **High** | v2: duplicate replies after pairing second channel | None |
| [#1981](https://github.com/qwibitai/nanoclaw/issues/1981) | **High** | v2 setup: systemd misdetected as absent on headless Linux | None |
| [#1973](https://github.com/qwibitai/nanoclaw/issues/1973) | **Medium** | `onecli not found` on fresh Linux (PATH not propagated) | None |
| [#1971](https://github.com/qwibitai/nanoclaw/issues/1971) | **Medium** | v2 setup verify fails for CLI-only installs | None |
| [#414](https://github.com/qwibitai/nanoclaw/issues/414) | **Medium** | Stale docker group detected but not remediated | None |

**Key observations:**
- v2 setup experience has multiple friction points on Linux (systemd detection, PATH issues, build tools)
- Duplicate replies bug (#1982) affects multi-channel setups—user-impacting regression
- No fix PRs exist yet for these v2 bugs; maintainer triage needed

### Fixed/Closed Bugs

| PR | Summary |
|----|---------|
| [#1965](https://github.com/qwibitai/nanoclaw/pull/1965) | Recover/fail conversational turns with no visible reply |
| [#1963](https://github.com/qwibitai/nanoclaw/pull/1963) | Channel registration wiring bugs |
| [#4](https://github.com/qwibitai/nanoclaw/pull/4) | Security: IPC directory isolation per group |

---

## 6. Feature Requests & Roadmap Signals

### Active Feature PRs

| PR | Author | Feature | Strategic Value |
|----|--------|---------|-----------------|
| [#1995](https://github.com/qwibitai/nanoclaw/pull/1995) | TeeJS | OpenCode custom provider + `/add-local-llama` skill | **High** — enables local models |
| [#1994](https://github.com/qwibitai/nanoclaw/pull/1994) | TeeJS | Codex per-group custom endpoints | **High** — BYO backend flexibility |
| [#1968](https://github.com/qwibitai/nanoclaw/pull/1968) | IamAdamJowett | Per-agent provider/model configuration | **High** — multi-model orchestration |
| [#1986](https://github.com/qwibitai/nanoclaw/pull/1986) | Jeffrey-Keyser | Live `/activity` command + observability | **Medium** — ops/debugging |
| [#1988](https://github.com/qwibitai/nanoclaw/pull/1988) | grtwrn | WhatsApp document mimetype fix | **Low** — polish |

**Roadmap prediction:**
- **Custom endpoint support** (local LLMs, LiteLLM, vLLM) appears imminent based on 3 related PRs from same author
- **Per-agent model selection** is a significant architectural feature enabling heterogeneous agent pools
- **Observability tooling** (`/activity`, tool call logging) is being actively built out

---

## 7. User Feedback Summary

### Pain Points

1. **v2 onboarding failures**: Users report setup breaking on fresh Ubuntu/Hetzner installs due to systemd detection, PATH issues, and missing build tools
2. **SSL cert down**: nanoclaw.dev inaccessible for ~4 weeks—blocks documentation access
3. **Multi-channel instability**: Duplicate replies after adding second channel suggests race conditions in v2 channel management

### Positive Signals

- Community contributors (TeeJS, Jeffrey-Keyser, glifocat, IamAdamJowett) are highly active with substantial PRs
- Observability features receiving investment (tool logging, `/activity` command)
- Pre-v2 cleanup happening rapidly (docs refreshed, stale files removed)

### Use Cases Emerging

- **Local model deployment**: Strong demand for llama.cpp/vLLM/LiteLLM integration
- **Enterprise/self-hosted**: Custom endpoint support + per-group configuration
- **Multi-channel messaging**: Telegram + WhatsApp + other channels in production

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Priority | Summary |
|-------|-----|----------|---------|
| [#1503](https://github.com/qwibitai/nanoclaw/issues/1503) | ~4 weeks | **High** | SSL cert invalid on nanoclaw.dev |
| [#414](https://github.com/qwibitai/nanoclaw/issues/414) | ~2 months | **Medium** | Stale docker group not remediated |
| [#1989](https://github.com/qwibitai/nanoclaw/issues/1989) | 1 day | **Medium** | Fork upgrade to v2 blocked |

**Notes:**
- **#1503** is the oldest open issue with highest comment count—likely needs infrastructure/ops response
- **#414** has been open since February; workaround exists but issue remains unfixed
- **#1989** is a fork maintainer requesting v2 upgrade guidance—opportunity for community support

---

*Digest generated from NanoClaw GitHub activity on 2026-04-25. Data: 15 issues, 35 PRs updated in last 24h.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>Let me analyze the GitHub data for IronClaw and generate a structured project digest for 2026-04-25.

Key data points:
- Issues updated in last 24h: 16 (open/active: 14, closed: 2)
- PRs updated in last 24h: 50 (open: 43, merged/closed: 7)
- New releases: 0

Let me organize the information:

**Today's Overview:**
- High activity with 16 issues and 50 PRs updated
- No new releases
- Multiple bug reports from QA testing
- Several large PRs in progress

**Releases:**
- None

**Project Progress:**
Looking at closed PRs:
1. #2952 - Closed, remove mission_id from response, add max/min amount
2. #2463 - Closed, fix NEAR AI tool schemas
3. #1988 - Closed, char-boundary-safe truncation for MCP tool descriptions
4. #2890 - Closed, fix empty "Fetch available models" for NEAR AI

**Community Hot Topics:**
- #2868 - Large PR for engine-v2 available_actions
- #2951 - Fix LLM tool schema shaping for near ai
- #2953 - Feedback on reborn architecture design
- #2904 - Refactor WASM API-proxy tools to skill-based HTTP

**Bugs & Stability:**
- #2949 - Platform download error (x86_64-unknown-linux-gnu)
- #2946 - LLM backend overwritten on startup
- #2945 - One-time login link returns Unauthorized
- #2944 - Assistant claims success despite failed steps
- #2943 - Assistant response only appears after refresh
- #2942 - Telegram shows MTProto config instead of user-friendly flow


- #2939 - Telegram bot stops responding after upgrade
- #2938 - Routines tab missing after upgrade
- #2930 - Live canary failed: provider-matrix openai-compatible
- #2929 - Live canary failed: public-smoke

**Feature Requests:**
- #2950 - Split provider-safe tool schema cleanup
- #2900 - Decouple webhook listener from HTTP channel
- #1344 - Mobile layout redesign
- #1741 - Kernel/extension architecture design

**User Feedback:**
- Installation issues
- Config persistence problems
- Auth issues
- UI/UX problems

**Backlog Watch:**
- #1344 - Mobile layout (open since 2026-03-18)
- #1741 - Architecture design (open since 2026-03-29)
- #1764 - Abound demo (open since 2026-03-30)
</think>

# IronClaw Project Digest — 2026-04-25

## 1. Today's Overview

IronClaw shows **high development activity** on April 25, 2026, with 16 issues and 50 PRs updated in the last 24 hours. No new releases shipped today. The project is actively addressing LLM provider integration issues (particularly NEAR AI tool schema handling), with several large cross-cutting PRs in review. QA testing on staging environments surfaced multiple regressions from recent upgrades, particularly around Telegram integration and the Routines UI. The community is engaged with significant architectural discussions and a growing backlog of feature requests.

---

## 2. Releases

**No new releases today.** The project has not published any releases in the past 24 hours.

---

## 3. Project Progress

### Merged/Closed PRs (4 items)

| PR | Title | Scope | Status |
|----|-------|-------|--------|
| [#2952](https://github.com/nearai/ironclaw/pull/2952) | remove mission_id from response; add maximum and minimum amount | tool/builtin, docs | **Closed** |
| [#2463](https://github.com/nearai/ironclaw/pull/2463) | fix(llm): normalize NEAR AI tool schemas | llm, docs | **Closed** |
| [#1988](https://github.com/nearai/ironclaw/pull/1988) | fix(cli): char-boundary-safe truncation for MCP tool descriptions | channel/cli | **Closed** |
| [#2890](https://github.com/nearai/ironclaw/pull/2890) | fix(web): resolve empty "Fetch available models" result for NEAR AI | channel/web | **Closed** |

**Key advancements:**
- **NEAR AI integration fixes**: PRs #2463 and #2890 resolved tool schema normalization and model fetching issues for NEAR AI private endpoints, addressing provider compatibility.
- **UTF-8 safety**: PR #1988 fixed potential panics when MCP tool descriptions contain multi-byte characters (CJK, emoji).
- **Tool schema improvements**: PR #2952 refined response handling with amount validation.

---

## 4. Community Hot Topics

### Most Active PRs (by scope/impact)

| PR | Title | Size | Risk | Key Themes |
|----|-------|------|------|------------|
| [#2868](https://github.com/nearai/ironclaw/pull/2868) | engine-v2: make available_actions callable-only for blocked providers | XL | medium | Engine V2 epic, provider restrictions |
| [#2951](https://github.com/nearai/ironclaw/pull/2951) | fix llm tool schema shaping for near ai | XL | low | LLM schema extraction, provider-safe policies |
| [#2953](https://github.com/nearai/ironclaw/pull/2953) | Add feedback on reborn architecture design | XS | low | Architecture review, design feedback |
| [#2904](https://github.com/nearai/ironclaw/pull/2904) | Refactor: replace 11 WASM API-proxy tools with skill-based HTTP declarations | XL | medium | WASM→Skills migration, simplification |
| [#2947](https://github.com/nearai/ironclaw/pull/2947) | fit tool names to 64-char provider limit | L | medium | AWS Bedrock/OpenAI compatibility |

### Key Issue Discussions

| Issue | Title | Author | Theme |
|-------|-------|--------|-------|
| [#2950](https://github.com/nearai/ironclaw/issues/2950) | split provider-safe tool schema cleanup from strict optional-field rewriting | @henrypark133 | LLM schema architecture |
| [#2900](https://github.com/nearai/ironclaw/issues/2900) | Decouple unified webhook listener bind address from HTTP channel | @theredspoon | Configuration architecture |
| [#1741](https://github.com/nearai/ironclaw/issues/1741) | design: kernel/extension architecture | @ilblackdragon | OS-like architecture vision |

**Analysis:** The community is focused on **three major themes**: (1) Engine V2 completion with provider-specific constraints, (2) WASM simplification via skill-based HTTP declarations, and (3) architectural refactoring to decouple concerns. The reborn architecture feedback (PR #2953) indicates active design review.

---

## 5. Bugs & Stability

### Critical/High Severity

| Issue | Title | Environment | Severity |
|-------|-------|-------------|----------|
| [#2949](https://github.com/nearai/ironclaw/issues/2949) | ERROR: no download for platform x86_64-unknown-linux-gnu | Production | **High** — Installation blocked |
| [#2946](https://github.com/nearai/ironclaw/issues/2946) | LLM backend overwritten on every startup | Local (0.25.0) | **High** — Config priority broken |
| [#2945](https://github.com/nearai/ironclaw/issues/2945) | One-time login link returns "Unauthorized" | hosted-staging | **P2** — Auth broken |
| [#2939](https://github.com/nearai/ironclaw/issues/2939) | Telegram bot stops responding after TEE upgrade | railway-staging | **P2** — Integration broken |
| [#2938](https://github.com/nearai/ironclaw/issues/2938) | Routines tab missing after TEE upgrade | railway-staging | **P2** — UI regression |

### Medium Severity

| Issue | Title | Theme |
|-------|-------|-------|
| [#2944](https://github.com/nearai/ironclaw/issues/2944) | Assistant claims success despite failed extraction/search | Reliability |
| [#2943](https://github.com/nearai/ironclaw/issues/2943) | Assistant response only appears after page refresh | Streaming/UI |
| [#2942](https://github.com/nearai/ironclaw/issues/2942) | Telegram shows MTProto dev config instead of user-friendly flow | UX |
| [#2930](https://github.com/nearai/ironclaw/issues/2930) | Live canary failed: provider-matrix openai-compatible | CI/CD |
| [#2929](https://github.com/nearai/ironclaw/issues/2929) | Live canary failed: public-smoke | CI/CD |

**Stability Assessment:** Two live canary lanes failed today (openai-compatible and public-smoke), indicating regressions in provider integration testing. The TEE IronClaw upgrade introduced regressions in Telegram and Routines UI. Config priority order is broken for `llm_backend` setting.

---

## 6. Feature Requests & Roadmap Signals

### High-Impact Requests

| Issue | Title | Author | Priority Signal |
|-------|-------|--------|-----------------|
| [#1344](https://github.com/nearai/ironclaw/issues/1344) | Redesign mobile layout with collapsible hamburger menu | @ilblackdragon | P1, enhancement |
| [#1741](https://github.com/nearai/ironclaw/issues/1741) | Kernel/extension architecture — OS-like minimal kernel | @ilblackdragon | Architectural vision |
| [#2900](https://github.com/nearai/ironclaw/issues/2900) | Decouple webhook listener bind address from HTTP channel | @theredspoon | Config clarity |

### In-Progress Features (Large PRs)

| PR | Title | Scope |
|----|-------|-------|
| [#1764](https://github.com/nearai/ironclaw/pull/1764) | Abound demo — Responses API, credential injection, skills, guardrails | XL, high risk |
| [#1446](https://github.com/nearai/ironclaw/pull/1446) | Add Aliyun Coding Plan support | XL, new provider |
| [#2335](https://github.com/nearai/ironclaw/pull/2335) | Cmd+K command palette for omnisearch | XL, UX |
| [#2728](https://github.com/nearai/ironclaw/pull/2728) | Engine V2 migrate CLI for OpenClaw and Hermes | XL, migration |

**Roadmap Signals:** The kernel/extension architecture design (#1741) and mobile redesign (#1344) represent long-term architectural goals. The Aliyun provider addition (#1446) signals expansion to non-Western LLM markets. Skill-based HTTP declarations (#2904) indicate a simplification trend.

---

## 7. User Feedback Summary

### Pain Points

| Feedback | Source | Impact |
|----------|--------|--------|
| **Installation failure** on Linux x86_64 | @gittyhubert (#2949) | Users cannot install via official installer script |
| **Config reset** — `llm_backend` reverts to default on every startup | @kummell (#2946) | Production deployments affected; documented priority order not honored |
| **Auth regression** — one-time login links immediately fail | @joe-rlo (#2945) | User onboarding blocked on staging |
| **Telegram UX** — shows MTProto developer config instead of guided flow | @joe-rlo (#2942) | Integration onboarding confusing |
| **Rust version mismatch** — README says 1.85, actual minimum is 1.91 | @robins (#2898) | Developers unable to compile from source |

### Positive Signals

- PR #2952 received quick closure with concrete improvements (mission_id removal, amount validation)
- Community contributor @ztsalexey actively fixing edge cases (shell workdir fallback, UTF-8 truncation)
- Architecture feedback document (PR #2953) shows engaged design review

---

## 8. Backlog Watch

### Long-Unanswered Important Issues

| Issue | Title | Age | Status | Concern |
|-------|-------|-----|--------|---------|
| [#1344](https://github.com/nearai/ironclaw/issues/1344) | Mobile layout redesign | 38 days | Open | P1 enhancement, no maintainer response |
| [#1741](https://github.com/nearai/ironclaw/issues/1741) | Kernel/extension architecture | 27 days | Open | Architectural vision, needs consensus |
| [#1764](https://github.com/nearai/ironclaw/pull/1764) | Abound demo | 26 days | Open | Large PR, high risk, needs review |
| [#1446](https://github.com/nearai/ironclaw/pull/1446) | Aliyun Coding Plan support | 36 days | Open | New provider, needs review |

### PRs Needing Maintainer Attention

| PR | Title | Age | Risk | Blocking |
|----|-------|-----|------|----------|
| [#2868](https://github.com/nearai/ironclaw/pull/2868) | engine-v2 available_actions | 3 days | medium | Engine V2 epic |
| [#2904](https://github.com/nearai/ironclaw/pull/2904) | WASM→Skills refactor | 2 days | medium | Simplification |
| [#2947](https://github.com/nearai/ironclaw/pull/2947) | 64-char tool name limit | 1 day | medium | AWS/OpenAI compatibility |

**Backlog Concern:** Issue #1344 (mobile redesign) has been open for 38 days without maintainer engagement. The Abound demo PR (#1764) and Aliyun provider PR (#1446) represent significant contributions awaiting review for over 3 weeks.

---

*Digest generated from IronClaw (nearai/ironclaw) GitHub data for 2026-04-25.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

<think>Let me analyze the GitHub data for LobsterAI and create a structured project digest for 2026-04-25.

Key observations:
1. **Activity**: Very high - 42 PRs merged/closed, 3 new issues, 2 releases in last 24h
2. **Releases**: Two releases (2026.4.24 and 2026.4.23) with various fixes and features
3. **PRs**: Heavy activity around providers (DeepSeek V4, Kimi K2.6), memory settings, UI fixes, IM sync, multi-robot support
4. **Issues**: 3 open issues, one is a bug report about DeepSeek V4 not working
5. **Contributors**: liuzhq1986 is very active, also btc69m979y-dotcom and liugang519

Let me structure this properly.
</think>

# LobsterAI Project Digest — 2026-04-25

## 1. Today's Overview

LobsterAI demonstrates exceptionally high development velocity today, with **42 PRs merged** and **2 new releases** shipped within 24 hours. The project shows strong momentum across multiple fronts: provider expansion (DeepSeek V4, Kimi K2.6, LM Studio), UI/UX refinements, and infrastructure improvements including memory embedding configuration and gateway stability. Three open issues remain active, with one critical bug report regarding DeepSeek V4's LLM request failures requiring immediate attention. Overall project health is robust, with maintainer response times appearing prompt across most contributions.

---

## 2. Releases

### v2026.4.24
**Highlights:**
- **New Models Added**: `deepseek-v4-flash` and `deepseek-v4-pro` providers integrated ([#1812](https://github.com/netease-youdao/LobsterAI/pull/1812))
- **Search UX Improvement**: Trimmed and normalized search query whitespace; added clear button for skills/MCP search ([#1811](https://github.com/netease-youdao/LobsterAI/pull/1811))
- **Cowork UI Alignment**: Quick actions width aligned with homepage input box (max-w-3xl constraint) ([#1816](https://github.com/netease-youdao/LobsterAI/pull/1816))

### v2026.4.23
**Highlights:**
- **Auth Fix**: Corrected UserProfile fields and included userId in update check requests ([#1784](https://github.com/netease-youdao/LobsterAI/pull/1784))
- **Version Tracking**: Added version field to update requests for better telemetry ([#1785](https://github.com/netease-youdao/LobsterAI/pull/1785))
- **Install Improvements**: Fixes to installation timing/logging

**Breaking Changes**: None identified  
**Migration Notes**: No migration required; backward-compatible updates

---

## 3. Project Progress

### Merged PRs Summary (42 total, key items)

| Category | PRs | Notable Changes |
|----------|-----|-----------------|
| **Providers** | 3 | Added DeepSeek V4 (flash/pro), Kimi K2.6, LM Studio support |
| **UI/Renderer** | 8 | DiffView fix for edit tool, responsive layout improvements, i18n updates |
| **Memory/Embedding** | 1 | Embedding configuration for memory search with remote providers ([#1810](https://github.com/netease-youdao/LobsterAI/pull/1810)) |
| **Skills/MCP** | 2 | Removed `~/.claude/skills` from discovery roots to match runtime path ([#1815](https://github.com/netease-youdao/LobsterAI/pull/1815)) |
| **IM/Integration** | 5 | Multi-robot Telegram support, Discord multi-bot, DingTalk fixes, IM sync algorithm improvements |
| **Infrastructure** | 4 | Gateway restart optimization, increased chat.send RPC timeout (30s→90s), Windows log export enhancement |
| **Cowork** | 3 | Content max-width increase (896px→1024px), tool call summary width fixes |

**Key Technical Debt Items Resolved:**
- Skills discovery path mismatch causing "skill not found" errors ([#1815](https://github.com/netease-youdao/LobsterAI/pull/1815))
- DiffView component failing with edit tool's `edits` array format ([#1814](https://github.com/netease-youdao/LobsterAI/pull/1814))
- Gateway RPC timeout issues during initialization ([#1803](https://github.com/netease-youdao/LobsterAI/pull/1803))

---

## 4. Community Hot Topics

### Most Active Issues

| Issue | Title | Comments | Status |
|-------|-------|----------|--------|
| [#1813](https://github.com/netease-youdao/LobsterAI/issues/1813) | DeepSeek V4 无法使用 (LLM request failed) | 1 | OPEN |
| [#38](https://github.com/netease-youdao/LobsterAI/issues/38) | 有没有节省tokens和请求数量的方法？ | 1 | OPEN (stale) |
| [#41](https://github.com/netease-youdao/LobsterAI/issues/41) | playwright skill错误 | 1 | OPEN (stale) |

**Analysis:**
- **Issue #1813** (DeepSeek V4 failure) is the most critical—users report "provider rejected the request schema or tool payload" errors. This directly impacts the newly released DeepSeek V4 models and warrants immediate investigation.
- **Issue #38** reflects ongoing interest in cost optimization (token/request reduction), suggesting demand for caching or compression features.
- **Issue #41** indicates Playwright skill integration issues persist despite being marked stale.

### Most Active PRs (by engagement)

| PR | Title | Comments | Status |
|----|-------|----------|--------|
| [#1810](https://github.com/netease-youdao/LobsterAI/pull/1810) | Embedding configuration for memory search | — | CLOSED |
| [#1812](https://github.com/netease-youdao/LobsterAI/pull/1812) | Add kimi-k2.6, deepseek-v4 models | — | CLOSED |
| [#1815](https://github.com/netease-youdao/LobsterAI/pull/1815) | Remove ~/.claude/skills from discovery roots | — | CLOSED |

**Underlying Needs:**
- Flexible embedding provider support (OpenAI, Gemini, etc.) for memory search
- Broader model provider coverage
- Consistent skill discovery between UI and runtime environments

---

## 5. Bugs & Stability

### Reported Bugs (Ranked by Severity)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| 🔴 **High** | [#1813](https://github.com/netease-youdao/LobsterAI/issues/1813) | DeepSeek V4 LLM request failures ("provider rejected request schema") | No |
| 🟡 **Medium** | Skills Discovery | Skills shown in UI but unavailable at runtime ("skill not found") | [#1815](https://github.com/netease-youdao/LobsterAI/pull/1815) ✅ Fixed |
| 🟡 **Medium** | DiffView | Incorrect rendering with edit tool's `edits` array format | [#1814](https://github.com/netease-youdao/LobsterAI/pull/1814) ✅ Fixed |
| 🟢 **Low** | Gateway Timeout | chat.send RPC timing out at 30s during gateway init | [#1803](https://github.com/netease-youdao/LobsterAI/pull/1803) ✅ Fixed |

**Stability Assessment:** Two medium-severity bugs were resolved via PRs today. The DeepSeek V4 issue (#1813) is the primary outstanding concern and may require hotfix attention.

---

## 6. Feature Requests & Roadmap Signals

### User-Requested Features

| Request | Source | Signals | Likelihood |
|---------|--------|---------|------------|
| **Token/Request Optimization** | Issue #38 | Multiple users interested in cost reduction | High |
| **Enhanced Playwright Skill** | Issue #41 | Skill configuration confusion reported | Medium |
| **Local Embedding (GGUF)** | PR #1810 | Hide option added—indicates future enablement planned | Medium |
| **Extended Model Support** | PR #1812 | Continuous provider expansion trend | High |

**Roadmap Prediction:**
Based on current PR patterns, the next release likely includes:
- DeepSeek V4 bug fixes (critical)
- Potential GGUF embedding enablement toggle
- Continued multi-platform bot support (Telegram/Discord expansion)

---

## 7. User Feedback Summary

### Pain Points Identified

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **DeepSeek V4 Integration Failures** | Issue #1813 with screenshot | High—blocks new model usage |
| **Skill Discovery Inconsistency** | PR #1815 description | Medium—confusing UX |
| **Playwright Skill Configuration** | Issue #41 | Low—documentation gap |
| **Gateway Initialization Delays** | PR #1803 logs | Medium—timeout frustration |

### Positive Signals
- High PR merge velocity indicates active development and responsiveness
- Multi-robot support additions (Telegram, Discord) suggest platform expansion is valued
- Memory embedding configuration shows investment in search quality

---

## 8. Backlog Watch

### Issues Requiring Maintainer Attention

| Issue | Age | Status | Priority |
|-------|-----|--------|----------|
| [#38](https://github.com/netease-youdao/LobsterAI/issues/38) | ~2 months | Stale, 1 comment | Medium—feature request |
| [#41](https://github.com/netease-youdao/LobsterAI/issues/41) | ~2 months | Stale, 1 comment | Low—documentation |
| [#1813](https://github.com/netease-youdao/LobsterAI/issues/1813) | 1 day | Open, 1 comment | **High—bug** |

### Recommendations

1. **Immediate**: Investigate DeepSeek V4 request rejection issue (#1813)—likely schema compatibility problem with newly added models
2. **This Week**: Consider closing or triaging stale issues #38 and #41 to reduce backlog noise
3. **Ongoing**: The high volume of IM-related PRs (5 today) suggests consider dedicated IM/integration labels for better tracking

---

*Digest generated from LobsterAI repository activity on 2026-04-25*  
*Repository: [github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

<think>The user wants me to generate a structured project digest for the Moltis project based on the provided GitHub data. Let me analyze the data and create a comprehensive digest following the specified sections.

Let me organize the key information:

**Activity Overview:**
- Issues updated in last 24h: 10 (open/active: 3, closed: 7)
- PRs updated in last 24h: 32 (open: 4, merged/closed: 28)
- New releases: 0

**Latest Issues (10 total):**
Open issues:
1. #868 - feat: Add Landlock access denial debug logging (2026-04-24)
2. #867 - [bug] Voice provider API keys stored in plain text in moltis.toml (2026-04-24) - SECURITY
3. #858 - [Bug]: Heartbeat re-fires in tight loop when agent uses exec during heartbeat turn (2026-04-24)

Closed issues:
1. #176 - [enhancement] Add datetime to system prompt context (2026-02-17, closed 2026-04-24)
2. #776 - [bug] task_list.list (2026-04-17, closed 2026-04-24)
3. #828 - [bug] Docker sandbox fails on WSL2 due to missing /sys/class/dmi (2026-04-22, closed 2026-04-24)
4. #824 - [enhancement] don't auto-scroll to end of chat session if scrolled up (2026-04-22, closed 2026-04-24)
5. #344 - [bug] UX for vault is sealed is bad (2026-03-06, closed 2026-04-24)
6. #848 - [bug] Fireworks Fire Pass: JSON Schema not supported (2026-04-23, closed 2026-04-24)


7. #857 - [bug] Silent memory turn saves with wrong dates in filenames (2026-04-23, closed 2026-04-24)

**Latest Pull Requests (32 total, showing top 20):**
Open PRs:
1. #870 - feat(skills): add bundled skill whitelist/blacklist filtering (2026-04-25)
2. #866 - feat: Landlock FS isolation for restricted-host sandbox (2026-04-24)
3. #871 - feat(cron): add heartbeat wake cooldown to prevent exec re-fire loop (2026-04-25)
4. #869 - feat(browser): add Obscura as lightweight sidecar browser backend (2026-04-24)

Closed/merged PRs:
1. #470 - feat(witness): tool execution witness recording + zkperf-service integration (2026-03-23, closed 2026-04-24)
2. #791 - refactor(splitter): extract moltis-splitter crate for AST-aware chunking (2026-04-18, closed 2026-04-24)
3. #863 - fix(cron): add heartbeat wake cooldown to prevent exec re-fire loop (2026-04-24, closed 2026-04-24)
4. #840 - feat(skills): MCP server management skill and post-install recipes (2026-04-22, closed 2026-04-24)
5. #844 - feat(config): add default sub-agent presets (2026-04-22, closed 2026-04-24)
6. #865 - feat(discord): channel name pattern filtering and per-pattern overrides (2026-04-24, closed 2026-04-24)
7. #864 - feat(config): layered config with defaults.toml and override-only user config (2026-04-24, closed 2026-04-24)
8. #303 - feat(web): add push-to-talk, VAD continuous listening, and voice settings (2026-03-03, closed 2026-04-24)
9. #339 - feat(i18n): add zh-TW Traditional Chinese locale support (2026-03-05, closed 2026-04-24)
10. #845 - chore(deps): bump the cargo group across 1 directory with 2 updates (2026-04-23, closed 2026-04-24)
11. #802 - [AutoDoc] docs: batch 4 — voice, checkpoints, configuration-reference (2026-04-20, closed 2026-04-24)
12. #800 - [AutoDoc] docs: batch 2 — channels, discord, nostr, browser-automation (2026-04-20, closed 2026-04-24)
13. #799 - [AutoDoc] docs: batch 1 — core config, hooks, compaction (2026-04-20, closed 2026-04-24)
14. #789 - [AutoDoc] docs: fix P2 issues from Greptile reviews — rotisserie corrections (2026-04-18, closed 2026-04-24)
15. #783 - [AutoDoc] docs: batch update — 44 docs audited and fixed across 50 rotisserie commits (2026-04-18, closed 2026-04-24)
16. #745 - Feature: Nix Flake (2026-04-16, closed 2026-04-24)

**Key observations:**
- High activity with 32 PRs updated in 24h
- 28 PRs merged/closed
- 7 issues closed
- Security issue reported (#867 - API keys in plain text)
- Several feature PRs merged including Landlock FS isolation, layered config, MCP server management
- Heavy documentation updates via AutoDoc

Now I'll structure the digest following the user's requirements.
</think>

# Moltis Project Digest — 2026-04-25

## 1. Today's Overview

Moltis demonstrates exceptional development velocity with 32 PRs updated and 28 merged/closed in the past 24 hours. The project shows strong momentum across multiple fronts: security hardening (Landlock FS isolation), configuration management improvements (layered config system), and expanded platform support (Nix Flake, Traditional Chinese localization). Seven issues were resolved, addressing bugs in heartbeat loops, Docker sandbox compatibility, and memory date handling. Three new issues remain open, including a **critical security concern** regarding plaintext API key storage. Overall project health is robust with active maintenance and community engagement.

## 2. Releases

**No new releases today.** The project continues active development on the main branch with significant features staged for upcoming release.

## 3. Project Progress

### Merged/Closed PRs (28 total)

| PR | Author | Summary |
|----|--------|---------|
| [#470](https://github.com/moltis-org/moltis/pull/470) | @jmikedupont2 | Tool execution witness recording + zkperf-service integration |
| [#791](https://github.com/moltis-org/moltis/pull/791) | @Cstewart-HC | Extract `moltis-splitter` crate for AST-aware code chunking |
| [#863](https://github.com/moltis-org/moltis/pull/863) | @Cstewart-HC | Fix heartbeat re-fire loop when agent uses exec during heartbeat turn |
| [#840](https://github.com/moltis-org/moltis/pull/840) | @penso | MCP server management skill and post-install recipes |
| [#844](https://github.com/moltis-org/moltis/pull/844) | @penso | Default sub-agent presets (`research`, `coder`, `reviewer`, `qa`, `ux`, `docs`, `coordinator`) |
| [#865](https://github.com/moltis-org/moltis/pull/865) | @penso | Discord channel name pattern filtering and per-pattern overrides |
| [#864](https://github.com/moltis-org/moltis/pull/864) | @penso | Layered config with `defaults.toml` and override-only user config |
| [#303](https://github.com/moltis-org/moltis/pull/303) | @P2Chill | Push-to-talk, VAD continuous listening, and voice settings |
| [#339](https://github.com/moltis-org/moltis/pull/339) | @PeterDaveHello | Traditional Chinese (zh-TW) locale support |
| [#745](https://github.com/moltis-org/moltis/pull/745) | @tbaumann | Nix Flake support for `nix run` and `nix build` |
| [#845](https://github.com/moltis-org/moltis/pull/845) | dependabot | Cargo dependency updates (openssl 0.10.75→0.10.78, rand) |
| [#802](https://github.com/moltis-org/moltis/pull/802) | @Cstewart-HC | AutoDoc batch 4 — voice, checkpoints, configuration-reference |
| [#800](https://github.com/moltis-org/moltis/pull/800) | @Cstewart-HC | AutoDoc batch 2 — channels, discord, nostr, browser-automation |
| [#799](https://github.com/moltis-org/moltis/pull/799) | @Cstewart-HC | AutoDoc batch 1 — core config, hooks, compaction |
| [#789](https://github.com/moltis-org/moltis/pull/789) | @Cstewart-HC | AutoDoc P2 fixes from Greptile reviews |
| [#783](https://github.com/moltis-org/moltis/pull/783) | @Cstewart-HC | AutoDoc batch update — 44 docs audited across 50 commits |

### Open PRs (4 total)

| PR | Author | Summary |
|----|--------|---------|
| [#871](https://github.com/moltis-org/moltis/pull/871) | @Cstewart-HC | Heartbeat wake cooldown to prevent exec re-fire loop |
| [#870](https://github.com/moltis-org/moltis/pull/870) | @Cstewart-HC | Bundled skill whitelist/blacklist filtering with wildcard support |
| [#866](https://github.com/moltis-org/moltis/pull/866) | @Cstewart-HC | Landlock FS isolation for restricted-host sandbox |
| [#869](https://github.com/moltis-org/moltis/pull/869) | @penso | Obscura as lightweight sidecar browser backend |

**Key advancements:**
- **Security**: Landlock FS isolation merged (#866) provides kernel-level filesystem sandboxing
- **Configuration**: Layered config system (#864) improves defaults management
- **Platform**: Nix Flake support (#745) enables modern NixOS integration
- **Localization**: Traditional Chinese support (#339) expands international reach
- **Documentation**: 44+ docs audited and updated via automated rotisserie process

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Issue | Type | Author | Comments | Summary |
|-------|------|--------|----------|---------|
| [#176](https://github.com/moltis-org/moltis/issues/176) | enhancement | @gazambuja | 18 | Add datetime to system prompt context |
| [#776](https://github.com/moltis-org/moltis/issues/776) | bug | @fgoo | 3 | task_list.list malfunction |
| [#828](https://github.com/moltis-org/moltis/issues/828) | bug | @tsukimiya | 2 | Docker sandbox fails on WSL2 |

**Analysis:**
- **#176** (18 comments) represents the highest community engagement. The request to add datetime context to system prompts addresses a common need for time-aware agent behavior. This long-standing issue (created 2026-02-17) has now been closed, indicating implementation.
- **#776** and **#828** show moderate engagement around functional bugs affecting specific environments (WSL2 Docker compatibility).

### Open Issues Requiring Attention

| Issue | Type | Author | Summary |
|-------|------|--------|---------|
| [#867](https://github.com/moltis-org/moltis/issues/867) | **security/bug** | @penso | Voice provider API keys stored in plain text in `moltis.toml` |
| [#858](https://github.com/moltis-org/moltis/issues/858) | bug | @Cstewart-HC | Heartbeat re-fires in tight loop when agent uses exec |
| [#868](https://github.com/moltis-org/moltis/issues/868) | enhancement | @Cstewart-HC | Add Landlock access denial debug logging |

**Underlying needs:**
- **Security hardening**: Issue #867 highlights a critical gap—API keys in plaintext config files pose risk. Users need secure credential management.
- **Reliability**: Heartbeat loop issue (#858) affects automation reliability; fix PR #871 is pending.
- **Observability**: Landlock debug logging (#868) supports troubleshooting kernel-level sandboxing.

## 5. Bugs & Stability

### Reported Bugs (Ranked by Severity)

| Severity | Issue | Author | Status | Fix PR |
|----------|-------|--------|--------|--------|
| **CRITICAL** | [#867](https://github.com/moltis-org/moltis/issues/867) Voice provider API keys in plaintext | @penso | OPEN | — |
| **HIGH** | [#858](https://github.com/moltis-org/moltis/issues/858) Heartbeat re-fire loop | @Cstewart-HC | OPEN | [#871](https://github.com/moltis-org/moltis/pull/871) |
| MEDIUM | [#776](https://github.com/moltis-org/moltis/issues/776) task_list.list malfunction | @fgoo | CLOSED | — |
| MEDIUM | [#828](https://github.com/moltis-org/moltis/issues/828) Docker sandbox fails on WSL2 | @tsukimiya | CLOSED | — |
| MEDIUM | [#848](https://github.com/moltis-org/moltis/issues/848) Fireworks JSON Schema enum error | @david-ros | CLOSED | — |
| MEDIUM | [#857](https://github.com/moltis-org/moltis/issues/857) Silent memory turn saves wrong dates | @maop | CLOSED | — |
| LOW | [#344](https://github.com/moltis-org/moltis/issues/344) UX for vault sealed state | @lostmsu | CLOSED | — |

**Stability assessment:**
- **7 of 10 issues** resolved in the past 24 hours indicates strong bug turnaround
- **Critical security bug** (#867) requires immediate attention—plaintext API key storage is a significant vulnerability
- Heartbeat loop bug (#858) has a corresponding fix PR (#871) pending review
- WSL2 Docker compatibility (#828) and memory date handling (#857) fixed, improving cross-platform reliability

## 6. Feature Requests & Roadmap Signals

### Notable Feature Requests

| Request | Author | Summary | Likelihood of Inclusion |
|---------|--------|---------|------------------------|
| [#867](https://github.com/moltis-org/moltis/issues/867) | @penso | Secure API key storage (vault/integration) | **High** — Security priority |
| [#868](https://github.com/moltis-org/moltis/issues/868) | @Cstewart-HC | Landlock access denial debug logging | **High** — Complements existing Landlock work |
| [#870](https://github.com/moltis-org/moltis/pull/870) | @Cstewart-HC | Bundled skill whitelist/blacklist | **High** — Open PR |

### Roadmap Signals from Recent Merges

The merged PRs suggest these areas are prioritized:
1. **Security hardening**: Landlock FS isolation, secure credential storage request
2. **Configuration flexibility**: Layered config, sub-agent presets
3. **Platform expansion**: Nix Flake, Traditional Chinese localization
4. **Developer experience**: MCP server management, AST-aware code chunking
5. **Voice capabilities**: Push-to-talk, VAD continuous listening

**Prediction for next release:**
- Secure API key storage solution (addressing #867)
- Landlock debug logging (completing #868)
- Skill filtering system (PR #870)
- Potential heartbeat stability fix (PR #871)

## 7. User Feedback Summary

### Pain Points Identified

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Plaintext API keys** | Issue #867 | Security risk; users concerned about credential exposure |
| **Heartbeat instability** | Issue #858 | Automation reliability affected when agents use exec |
| **WSL2 Docker incompatibility** | Issue #828 | Blocks Windows/WSL2 users from Docker sandbox |
| **Vault sealed UX** | Issue #344 | Poor user experience when vault is sealed |
| **Auto-scroll behavior** | Issue #824 | Annoying when reviewing chat history |

### Positive Feedback Signals

- **Feature completeness**: Requests for datetime context (#176, 18 comments) indicate users want richer agent context
- **Localization appreciation**: Traditional Chinese support merged (#339)
- **Platform adoption**: Nix Flake support (#745) enables new user base
- **Documentation quality**: Extensive AutoDoc updates (16+ PRs) suggest investment in user guidance

### Use Cases Emerging

- **Automation/Cron**: Heartbeat system for scheduled agent tasks
- **Multi-channel**: Discord integration with pattern-based filtering
- **Browser automation**: Sidecar browser backends (Obscura)
- **Security-conscious deployments**: Landlock sandboxing for restricted environments

## 8. Backlog Watch

### Long-Unanswered or Stale Issues

| Issue | Age | Author | Summary | Priority |
|-------|-----|--------|---------|----------|
| [#176](https://github.com/moltis-org/moltis/issues/176) | ~67 days | @gazambuja | Add datetime to system prompt context | ✅ CLOSED |
| [#344](https://github.com/moltis-org/moltis/issues/344) | ~50 days | @lostmsu | UX for vault sealed is bad | ✅ CLOSED |
| [#470](https://github.com/moltis-org/moltis/pull/470) | ~32 days | @jmikedupont2 | Tool execution witness recording | ✅ CLOSED |

**Note:** Previously stale issues have been addressed in this cycle. No long-unanswered critical items remain.

### PRs Needing Maintainer Attention

| PR | Author | Summary | Age |
|----|--------|---------|-----|
| [#871](https://github.com/moltis-org/moltis/pull/871) | @Cstewart-HC | Heartbeat wake cooldown fix | NEW |
| [#870](https://github.com/moltis-org/moltis/pull/870) | @Cstewart-HC | Skill whitelist/blacklist filtering | NEW |
| [#866](https://github.com/moltis-org/moltis/pull/866) | @Cstewart-HC | Landlock FS isolation | 1 day |
| [#869](https://github

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

<think>Let me analyze this GitHub data for CoPaw (QwenPaw) and generate a structured project digest for 2026-04-25.

Key data points:
- Issues updated in last 24h: 50 (28 open, 22 closed)
- PRs updated in last 24h: 50 (15 open, 35 merged/closed)
- New releases: 2 (v1.1.4.post1 and v1.1.4)

Let me organize this into the required sections.
</think>

# CoPaw (QwenPaw) Project Digest — 2026-04-25

## 1. Today's Overview

CoPaw (QwenPaw) shows **high development velocity** on April 25, 2026, with 50 issues and 50 PRs updated in the last 24 hours. The project closed or merged 35 PRs and resolved 22 issues, indicating strong maintenance activity. Two new releases (v1.1.4 and v1.1.4.post1) shipped today, with the patch release reverting a Vite upgrade that caused regressions. Notable focus areas include memory system improvements, DeepSeek model compatibility fixes, DingTalk channel enhancements, and desktop client stability — the latter showing multiple user-reported white-screen and crash issues on Windows v1.1.4.

---

## 2. Releases

### v1.1.4.post1 (2026-04-24)
**Revert release** addressing a regression introduced in v1.1.4.

| Change | Author | PR |
|--------|--------|-----|
| Revert "build(console): upgrade Vite from v6 to v8" (which caused white-screen issues on desktop) | @zhijianma | [#3812](https://github.com/agentscope-ai/QwenPaw/pull/3812) |
| feat(memory): add CJK-aware query tokenization for memory search | @jinliyl | [#3811](https://github.com/agentscope-ai/QwenPaw/pull/3811) |

### v1.1.4 (2026-04-24)
**Feature release** with major memory system overhaul.

| Category | Highlights |
|----------|------------|
| **Agent System** | Refactored long-term memory module with pluggable backends, automatic summarization every N turns, automatic retrieval, and new context management interface |

**Migration Note:** The memory module refactor (#3548) may require configuration updates for users with custom memory backends. No breaking API changes reported for default configurations.

---

## 3. Project Progress

### Merged/Closed PRs (35 total; selected highlights)

| PR | Author | Description |
|----|--------|-------------|
| [#3812](https://github.com/agentscope-ai/QwenPaw/pull/3812) | @zhijianma | **Revert Vite v6→v8 upgrade** — fixes desktop white-screen regression |
| [#3811](https://github.com/agentscope-ai/QwenPaw/pull/3811) | @jinliyl | **Memory CJK tokenization** — improves Chinese/Japanese/Korean query handling in memory search |
| [#3797](https://github.com/agentscope-ai/QwenPaw/pull/3797) | @qbc2016 | **Add DeepSeek v4 models** — expands model support |
| [#3794](https://github.com/agentscope-ai/QwenPaw/pull/3794) | @qbc2016 | **Fix DeepSeek thinking content** — prevents `invalid_request_error` in multi-turn conversations |
| [#3790](https://github.com/agentscope-ai/QwenPaw/pull/3790) | @hongxicheng | **DingTalk: stop exposing local file paths** — privacy fix |
| [#3778](https://github.com/agentscope-ai/QwenPaw/pull/3778) | @hongxicheng | **DingTalk: add cron_message_type** — independent message format control for scheduled tasks |
| [#3786](https://github.com/agentscope-ai/QwenPaw/pull/3786) | @qbc2016 | **Fix formatter: avoid passing fileblock to Anthropic** — resolves API 400 errors |
| [#3781](https://github.com/agentscope-ai/QwenPaw/pull/3781) | @gnipping | **Security: disable shell invasion by default + Windows path support** |
| [#3766](https://github.com/agentscope-ai/QwenPaw/pull/3766) | @zhijianma | **Async buffered token usage recording** |
| [#3758](https://github.com/agentscope-ai/QwenPaw/pull/3758) | @YingchaoX | **Fix missing builtin tool icons** — resolves 500 error on `/api/tools` |
| [#3740](https://github.com/agentscope-ai/QwenPaw/pull/3740) | @huangrichao2020 | **Add built-in agent audit workflow skill** |
| [#3803](https://github.com/agentscope-ai/QwenPaw/pull/3803) | @zhijianma | **Version bump to 1.1.5b1** — next release cycle begins |

### Open PRs Under Review (selected)

| PR | Author | Focus |
|----|--------|-------|
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | @youngchan1988 | **Tauri 2.x desktop app support** (first-time contributor) |
| [#3525](https://github.com/agentscope-ai/QwenPaw/pull/3525) | @energyd | **Discord thread creation before agent dispatch** for Cron jobs |
| [#3550](https://github.com/agentscope-ai/QwenPaw/pull/3550) | @vvv214 | **Scope-aware effective model routing** alignment |
| [#3553](https://github.com/agentscope-ai/QwenPaw/pull/3553) | @Prince-liu | **Fix SSE crash on malformed surrogate text** (first-time contributor) |
| [#3603](https://github.com/agentscope-ai/QwenPaw/pull/3603) | @seoeaa | **Display sender identity and timestamps** in conversation history |
| [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) | @hellogxp | **Semantic skill routing** via embedding-based retrieval (needs discussion) |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Type | Comments | Summary |
|-------|------|----------|---------|
| [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) | enhancement | **60** | **Help Wanted: Open Tasks** — Community contribution tracker with P0-P2 priorities |
| [#3753](https://github.com/agentscope-ai/QwenPaw/issues/3753) | question | **7** | Request for Volcano Coding Plan default support |
| [#3489](https://github.com/agentscope-ai/QwenPaw/issues/3489) | bug | **5** | **Anthropic API 400 errors** from invalid message formats (fixed) |
| [#3742](https://github.com/agentscope-ai/QwenPaw/issues/3742) | enhancement | **5** | DingTalk markdown >3500 chars and card message分段推送 |
| [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) | bug | **5** | **MCP client TaskGroup freeze** causing agent unresponsive |
| [#3782](https://github.com/agentscope-ai/QwenPaw/issues/3782) | bug | **4** | DeepSeek reasoning_content not passed in subsequent requests (fixed) |
| [#3672](https://github.com/agentscope-ai/QwenPaw/issues/3672) | enhancement | **4** | Built-in skill update workflow optimization |
| [#3760](https://github.com/agentscope-ai/QwenPaw/issues/3760) | bug | **4** | DingTalk file download loses filename/extension + path exposure |
| [#3702](https://github.com/agentscope-ai/QwenPaw/issues/3702) | bug | **4** | Skill pool persistent errors |
| [#2225](https://github.com/agentscope-ai/QwenPaw/issues/2225) | enhancement | **3** | Async agent-to-agent communication with callbacks |

### Underlying Needs Analysis

1. **Multi-channel robustness**: Multiple DingTalk issues (#3742, #3760, #3790) indicate heavy usage and need for better file handling, message segmentation, and privacy protection.
2. **Model provider diversity**: Requests for Volcano Coding Plan (#3753) and DeepSeek v4 support show demand for expanding LLM provider coverage.
3. **Desktop stability**: Windows desktop issues (#3555, #3805, #3807, #3815) are accumulating — the Vite revert (#3812) was a quick response but the pattern suggests need for better desktop CI/CD testing.
4. **Async/parallel agent patterns**: Issue #2225 (60 comments over time) reflects advanced users wanting multi-agent orchestration beyond sequential workflows.

---

## 5. Bugs & Stability

### Critical/High Severity

| Issue | Severity | Description | Status | Fix PR |
|-------|----------|-------------|--------|--------|
| [#3815](https://github.com/agentscope-ai/QwenPaw/issues/3815) | **Critical** | v1.1.4 desktop white-screen (browser also blank) | Closed | [#3812](https://github.com/agentscope-ai/QwenPaw/pull/3812) (reverted Vite) |
| [#3807](https://github.com/agentscope-ai/QwenPaw/issues/3807) | **Critical** | v1.1.4 white-screen on Windows 10/11 | Closed | [#3812](https://github.com/agentscope-ai/QwenPaw/pull/3812) |
| [#3555](https://github.com/agentscope-ai/QwenPaw/issues/3555) | **High** | Desktop hangs at "Waiting for HTTP ready..." on Windows | Open | — |
| [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) | **High** | MCP client TaskGroup freeze → agent unresponsive | Open | — |
| [#3782](https://github.com/agentscope-ai/QwenPaw/issues/3782) | **High** | DeepSeek reasoning_content missing in multi-turn | Closed | [#3794](https://github.com/agentscope-ai/QwenPaw/pull/3794) |
| [#3489](https://github.com/agentscope-ai/QwenPaw/issues/3489) | **High** | Anthropic API 400 from invalid message formats | Closed | [#3786](https://github.com/agentscope-ai/QwenPaw/pull/3786) |

### Medium Severity

| Issue | Description | Status |
|-------|-------------|--------|
| [#3818](https://github.com/agentscope-ai/QwenPaw/issues/3818) | Installation script + model config leads to silent failure | Open |
| [#3808](https://github.com/agentscope-ai/QwenPaw/issues/3808) | MCP client enables → macOS Dock shows Python icon | Open |
| [#3775](https://github.com/agentscope-ai/QwenPaw/issues/3775) | VLLM deployment causes premature reply truncation | Open |
| [#3817](https://github.com/agentscope-ai/QwenPaw/issues/3817) | Vector model config reset on Docker container restart | Open |
| [#3760](https://github.com/agentscope-ai/QwenPaw/issues/3760) | DingTalk file download loses filename + path exposure | Closed | [#3790](https://github.com/agentscope-ai/QwenPaw/pull/3790) |

### Stability Assessment

**Concern:** The v1.1.4 release introduced a desktop regression that required an emergency patch (v1.1.4.post1) within hours. This pattern — rapid revert after user reports — suggests the release process may benefit from additional desktop-specific smoke tests before tagging stable releases.

---

## 6. Feature Requests & Roadmap Signals

### High-Interest Requests (by engagement)

| Issue | Votes/Interest | Request | Likelihood of Inclusion |
|-------|----------------|---------|------------------------|
| [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) | 60 comments | **Community contribution task board** | Already in progress |
| [#2225](https://github.com/agentscope-ai/QwenPaw/issues/2225) | 3 comments | **Async agent-to-agent communication** | Under consideration |
| [#2975](https://github.com/agentscope-ai/QwenPaw/issues/2975) | 2 comments | **Markdown rendering for user input** | Feature request |
| [#3752](https://github.com/agentscope-ai/QwenPaw/issues/3752) | 3 comments | **Right-click context menu** in Console | Under review |
| [#3774](https://github.com/agentscope-ai/QwenPaw/issues/3774) | 2 comments | **Timestamps in Console** | PR [#3603](https://github.com/agentscope-ai/QwenPaw/pull/3603) addresses |
| [#3814](https://github.com/agentscope-ai/QwenPaw/issues/3814) | 1 comment | **Workspace sandbox mechanism** | Early request |

### Roadmap Signals from Open PRs

- **Tauri desktop** (#3813) — first-time contributor adding alternative to Electron; indicates desktop diversification strategy
- **Semantic skill routing** (#3117) — embedding-based skill filtering suggests memory/context optimization focus
- **Discord thread support** (#3525) — expanding Cron job capabilities across channels
- **Sender identity + timestamps** (#3603) — UX improvements for conversation history

---

## 7. User Feedback Summary

### Pain Points

| Category | Evidence |
|----------|----------|
| **Desktop instability** | Multiple users reporting white-screen (#3815, #3807), hangs (#3555), crashes (#3805) on v1.1.4 Windows desktop |
| **Windows-specific bugs** | File path handling (#3580), security module (#3457), taskbar icon (#3405), proxy parsing (#3664) |
| **Memory configuration fragility** | Docker deployments lose vector model settings on restart (#3817) |
| **MCP integration issues** | TaskGroup freeze (#3640), macOS Dock icon corruption (#3808) |
| **File handling in channels** | DingTalk file downloads lose metadata (#3760), path exposure privacy risk (#3790 fixed) |

### Positive Feedback Signals

| Signal | Source |
|--------|--------|
| Active community contributions | 3 first-time contributors with PRs today (#3813, #3553, #3793) |
| Rapid regression response | v1.1.4.post1 released within ~24h of v1.1.4 |
| Comprehensive model support | DeepSeek v4, CJK memory tokenization, multiple channel integrations |

### Dissatisfaction Themes

1. **Upgrade regressions**: v1.1.4 desktop issues causing users to downgrade to v1.1.3post1
2. **Windows parity gaps**: File handling, path security, and UI issues disproportionately affect Windows users
3. **Configuration persistence**: Docker/container deployments losing settings indicates config management gaps

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Priority | Description |
|-------|-----|----------|-------------|
| [#3555](https://github.com/agentscope-ai/QwenPaw/issues/3555) | 7 days | High | Windows desktop hangs at HTTP ready — no response |
| [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) | 4 days | High | MCP TaskGroup freeze — no response |
| [#3817](https://github.com/agentscope-ai/QwenPaw/issues/3817) | 1 day | High | Docker config reset — no response |
| [#3775](https://github.com/agentscope-ai/QwenPaw/issues/3775) | 1 day | Medium | VLLM truncation — unclear ownership (QwenPaw vs VLLM vs Feishu) |
| [#3816](https://github.com/agentscope-ai/QwenPaw/issues/3816) | 1 day | Medium | macOS file:// link click no-op |
| [#3814](https://github.com/agentscope-ai/QwenPaw/issues/3814) | 1 day | Low | Workspace sandbox request — feature triage needed |

### PRs Needing Review/Merge

| PR | Age | Status | Description |
|----|-----|--------|-------------|
| [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) | 17 days | Needs discussion | Semantic skill routing — marked as needing discussion |
| [#3525](https://github.com/agentscope-ai/QwenPaw/pull/3525) | 8 days | Under Review | Discord thread for Cron — awaiting merge |
| [#3550](https://github.com/agentscope-ai/QwenPaw/pull/3550) | 8 days | Under Review | Scope-aware model routing |
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | 1 day | Open | Tauri desktop — first-time contributor, needs review |

### Long-Running Threads

- **#2291** (Help Wanted): 60 comments over ~1 month; task board needs periodic refresh and P0 items should be highlighted for new contributors
- **#2225** (Async agents): Open since March 25; feature design discussion stalled — maintainer input would help unblock

---

*Digest generated from GitHub data for [agentscope-ai/CoPaw](https://github.com/agentscope-ai/QwenPaw) on 2026-04-25.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

<think>Let me analyze the GitHub data for ZeptoClaw and generate a structured project digest for 2026-04-25.

Key data points:
- Issues updated in last 24h: 1 (open/active: 1, closed: 0)
- PRs updated in last 24h: 1 (open: 1, merged/closed: 0)
- New releases: 0
- Latest Issues: 1 item - Issue #546 about Feishu long-connection
- Latest PRs: 1 item - PR #544 about CI coverage expansion

Let me structure this into the required sections.
</think>

# ZeptoClaw Project Digest

**Date:** 2026-04-25
**Repository:** [github.com/qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)

---

## 1. Today's Overview

ZeptoClaw shows modest but focused activity on 2026-04-25. The project logged 1 issue and 1 pull request updated in the last 24 hours, with no new releases or merged code. The active work centers on infrastructure improvements—specifically expanding CI coverage for optional integration features (PR #544) and exploring a new native Feishu long-connection architecture (Issue #546). No critical bugs or regressions were reported today. The project appears healthy with maintainers actively reviewing and advancing both testing rigor and architectural experimentation.

---

## 2. Releases

**No new releases today.**

The project has no releases recorded in the past 24 hours. Maintainers and users should continue using the latest stable version; no migration guidance is applicable at this time.

---

## 3. Project Progress

| Type | # | Title | Author | Status |
|------|---|-------|--------|--------|
| PR | [#544](https://github.com/qhkm/zeptoclaw/pull/544) | [codex] expand CI coverage for optional integration features | @manelsen | **OPEN** |

**Analysis:**
PR #544 represents a significant investment in long-term code quality. The author is expanding ZeptoClaw's CI feature-matrix to compile and test optional integration paths before merge, specifically:
- `channel-email`
- `google`
- `provider-vertex`
- `whatsapp-web`

This PR also includes two small compatibility fixes to ensure the expanded matrix passes cleanly. While not yet merged, this work signals a maturation of the project's CI/CD practices and a commitment to preventing integration regressions.

---

## 4. Community Hot Topics

| # | Type | Title | Author | Reactions | Link |
|---|------|-------|--------|-----------|------|
| #546 | Issue | feat(channels): native Feishu long-connection to Nanodio subprocess worker | @CangWolf17 | 👍 0 | [Link](https://github.com/qhkm/zeptoclaw/issues/546) |

**Analysis:**
Issue #546 is the sole active discussion item today. Author @CangWolf17 is proposing a new architectural path for ZeptoClaw's Feishu/Lark integration: implementing a native long-connection host path that forwards inbound messages to a supervised local subprocess worker (Nanodio) rather than embedding Nanodio in-process.

**Underlying needs this signals:**
- **Decoupling:** Users want clearer separation between ZeptoClaw and Nanodio execution contexts.
- **Scalability:** Long-running subprocess workers may offer better resource management for high-volume Feishu message handling.
- **Flexibility:** The proposal suggests a desire for pluggable worker architectures beyond in-process embedding.

The issue is currently open with no comments, indicating early-stage proposal discussion. Maintainer input and scoping feedback will be key to advancing this.

---

## 5. Bugs & Stability

**No bugs or regressions reported today.**

No issues or comments flagged stability concerns, crashes, or regressions in the past 24 hours. The absence of bug reports is a positive indicator for current release stability.

---

## 6. Feature Requests & Roadmap Signals

| # | Type | Title | Author | Link |
|---|------|-------|--------|------|
| #546 | Issue | feat(channels): native Feishu long-connection to Nanodio subprocess worker | @CangWolf17 | [Link](https://github.com/qhkm/zeptoclaw/issues/546) |

**Roadmap Signal:**
Issue #546 suggests a potential roadmap item around **external worker management** for Feishu/Lark channels. If implemented, this could influence how ZeptoClaw handles other messaging channels with similar subprocess supervision needs.

**Predicted next-version candidates:**
- CI matrix expansion (PR #544) — likely to merge soon given its testing focus
- Feishu long-connection architecture (Issue #546) — depends on maintainer scoping and architectural review

---

## 7. User Feedback Summary

**Pain Points:**
- Current Feishu integration may require in-process Nanodio embedding, which could create coupling and resource management challenges (per Issue #546).

**Use Cases Emerging:**
- Users want ZeptoClaw to act as a supervisor for external worker processes, enabling more flexible deployment topologies.
- CI/CD quality gates are a priority for contributors (PR #544 author @manelsen is investing time to improve test coverage).

**Satisfaction Indicators:**
- No bug reports or negative feedback in today's activity.
- Active contributor engagement on both infrastructure (CI) and feature (Feishu) topics.

---

## 8. Backlog Watch

| # | Type | Title | Age | Status | Link |
|---|------|-------|-----|--------|------|
| #546 | Issue | feat(channels): native Feishu long-connection to Nanodio subprocess worker | 1 day | OPEN | [Link](https://github.com/qhkm/zeptoclaw/issues/546) |
| #544 | PR | [codex] expand CI coverage for optional integration features | 2 days | OPEN | [Link](https://github.com/qhkm/zeptoclaw/pull/544) |

**Maintainer Attention Needed:**

1. **Issue #546** — New but requires scoping. Maintainers should evaluate whether the proposed Feishu long-connection architecture aligns with project goals and provide feedback to @CangWolf17 on feasibility and priority.

2. **PR #544** — Awaiting review. The CI expansion work appears well-scoped and low-risk; a timely review and merge would encourage continued contributor investment.

---

*End of Digest — Generated 2026-04-25*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

<think>The user wants a structured English EasyClaw project digest for 2026-04-25, based on the provided GitHub data. The data includes:

- Issues updated in last 24h: 0
- PRs updated in last 24h: 0
- New releases: 1 (v1.8.9: RivonClaw v1.8.9)
- Installation instructions for macOS (fix for Gatekeeper)
- No latest issues or PRs.

We need to generate a digest with sections:

1. Today's Overview
2. Releases
3. Project Progress
4. Community Hot Topics
5. Bugs & Stability
6. Feature Requests & Roadmap Signals
7. User Feedback Summary
8. Backlog Watch

We need to be objective, data-driven, highlighting project health. Include GitHub links for each item.

We have limited data: only a release note about v1.8.9, with installation instructions for macOS. No issues or PRs. So many sections will be empty or minimal.

We need to include GitHub links. The repository is github.com/gaoyangz77/easyclaw. For the release, we can link to the release page: https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.9

We can also link to the repository main page.

We need to generate plausible content based on the data. Since there is no activity in issues/PRs, we can note that.

We need to follow the style: objective, data-driven.

We need to ensure we don't hallucinate details not present. But we can provide context based on the release notes.

The release note includes installation instructions for macOS, specifically a fix for Gatekeeper. That indicates a known issue with macOS unsigned apps. We can mention that.

We can also note that the release is named "RivonClaw v1.8.9", which might be the name of the software.

We need to generate the digest in English.

We need to be careful with the date: 2026-04-25.

We need to include sections as specified.

Let's outline:

1. **Today's Overview**: Summarize that there is one new release, no issues/PRs activity, project is stable.

2. **Releases**: Detail v1.8.9, changes: installation instructions for macOS, fix for Gatekeeper issue. Possibly note that it's a minor release.

3. **Project Progress**: No PRs merged/closed today. Note that.

4. **Community Hot Topics**: No active issues/PRs. Note that.

5. **Bugs & Stability**: No bugs reported. But note the known macOS Gatekeeper issue addressed in release.

6. **Feature Requests & Roadmap Signals**: No new feature requests. Possibly predict based on previous issues? But we have no data. We can note that none were raised today.

7. **User Feedback Summary**: No feedback. But we can note the release includes guidance for macOS users, indicating user pain point.

8. **Backlog Watch**: No long-unanswered issues. Note that.

We need to include GitHub links. For each item, we can include links to the release, repository, etc.

We need to keep it concise but thorough.

We need to avoid speculation beyond the data.

We need to ensure we follow the format.

Let's write the digest.

We need to include the date.

We need to include section headers.

We need to include bullet points where appropriate.

We need to include links.

We need to ensure it's in English.

Let's start.
</think>

# EasyClaw Project Digest – 2026-04-25

## 1. Today's Overview  
EasyClaw (github.com/gaoyangz77/easyclaw) shows minimal activity on 2026-04-25. No issues or pull requests were updated in the last 24 hours, indicating a quiet period. A new release (v1.8.9) was published, focusing on macOS compatibility and providing step-by-step guidance to bypass Gatekeeper restrictions. The project appears stable with no reported bugs or community discussions today.

## 2. Releases  
- **v1.8.9 – RivonClaw v1.8.9**  
  - **Release Link**: https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.9  
  - **Key Changes**:  
    - Added detailed macOS installation instructions to resolve Gatekeeper blocking unsigned apps.  
    - Provided a fix for the “‘RivonClaw’ is damaged and can't be opened” error, common on macOS systems.  
  - **Migration Notes**: No breaking changes; users on macOS should follow the new steps if they encounter Gatekeeper warnings.  
  - **Severity**: Low (cosmetic/ux improvement for macOS users).

## 3. Project Progress  
- **PRs Merged/Closed (last 24h)**: 0  
- **Issues Updated (last 24h)**: 0  
- **Assessment**: No code contributions or issue resolutions today. The release is the sole update, suggesting maintainer focus on stability rather than new features.

## 4. Community Hot Topics  
- **Active Issues**: None (total: 0 items).  
- **Active PRs**: None (total: 0 items).  
- **Analysis**: The absence of discussions indicates low community engagement today. The release note addresses a known macOS user pain point, but no further community interaction was recorded.

## 5. Bugs & Stability  
- **Reported Bugs (last 24h)**: 0  
- **Known Issues**:  
  - macOS Gatekeeper blocking unsigned apps (addressed in v1.8.9).  
- **Regressions**: None reported.  
- **Fix PRs**: None today; the release itself provides a workaround.

## 6. Feature Requests & Roadmap Signals  
- **New Feature Requests (last 24h)**: 0  
- **Predicted Next Steps**:  
  - Given the focus on macOS compatibility, future releases may prioritize signing/certifying the app to eliminate Gatekeeper warnings.  
  - No explicit roadmap signals were raised today.

## 7. User Feedback Summary  
- **Pain Points Addressed**:  
  - macOS users encountering “damaged app” errors now have clear remediation steps (Terminal commands to remove quarantine attribute).  
- **Satisfaction/Dissatisfaction**:  
  - The release improves UX for macOS users, likely reducing support queries related to Gatekeeper.  
  - No negative feedback recorded today.

## 8. Backlog Watch  
- **Long-Unanswered Issues**: None (0 items).  
- **PRs Needing Maintainer Attention**: None (0 items).  
- **Notes**: The project’s issue/PR queue is empty, indicating no pending community contributions require review.

---  
**Project Health Summary**: EasyClaw is stable with a minor release addressing macOS usability. No community activity or bugs today; maintainers are focused on polish rather than new features.

</details>

<details>
<summary><strong>NemoClaw</strong> — <a href="https://github.com/NVIDIA/NemoClaw">NVIDIA/NemoClaw</a></summary>

<think>Let me analyze the GitHub data for NemoClaw and generate a structured project digest for 2026-04-25.

Key data points:
- Issues updated in last 24h: 50 (open/active: 21, closed: 29)
- PRs updated in last 24h: 50 (open: 18, merged/closed: 32)
- New releases: 0

Let me organize the information:

**Today's Overview:**
- High activity with 50 issues and 50 PRs updated
- No new releases
- Multiple security fixes being worked on
- Several bugs affecting core functionality (E2E failures, gateway crashes, TLS issues)

**Releases:**
- None today

**Project Progress (PRs):**
Looking at the PRs:
- #2453: fix(onboard): retry and fallback for container reachability check
- #2466: fix(hermes): set file permissions so sandbox user can read copied files
- #2449: fix: auto-disable device auth for non-loopback URLs
- #2411: feat(onboard): auto-allocate dashboard port for multi-sandbox
- #2345: fix(sandbox): export GIT_SSL_CAINFO so git trusts proxy CA
- #2465: refactor(cli): centralize subprocess execution
- #2462: feat(cli): add nemohermes alias for Hermes agent
- #2464: chore(deps): bump OpenClaw from 2026.4.2 to 2026.4.8
- #2463: docs: catch up release prep for 0.0.25
- #2435: fix(test): move installer integration tests to CI-only vitest project
- #2359: chore(test): apply shfmt formatting to E2E scripts
- #2414: fix(security): harden config set SSRF validation


- #2457: fix(sandbox): survive Landlock and seccomp restrictions on OpenShell 0.0.36
- #2445: docs: reorganize Get Started and add Deployment Topology diagram
- #2440: fix(onboard): always inject NEMOCLAW_DASHBOARD_PORT into sandbox env
- #2436: fix(security): validate symlinks in snapshot create and rollback paths
- #2461: ci: gate every PR on tsc-cli regardless of touched paths
- #2227: refactor(sandbox): default to mutable config, make shields opt-in
- #2460: ci: gate every PR on tsc-cli regardless of touched paths
- #2459: fix(deploy): correct vLLM HF model id and pass HF_TOKEN to VM

The most active issues are #1992 (nightly E2E failures with 105 comments), #1908 (Jetson Orin HTTP 503 errors at 11 comments), #1831 (security CVE concerns with 6 comments), #2427 (gateway crashes in sandbox environments), and #1828 (proxy CA certificate injection problems). Several security vulnerabilities are being addressed, including SSRF validation hardening and symlink validation in snapshot operations.

Additional security work includes auto-disabling device auth for non-loopback URLs, along with fixes for TLS certificate handling, file permissions in Hermes, and container reachability checks. The project is also tackling platform-specific issues like Docker permission problems, gateway restart failures, and missing Linux tools in sandboxed environments. There's a feature request for a `nemoclaw policy add` command and ongoing work to refactor the onboarding and CLI into a safer, more reviewable structure.

The most critical issue blocking progress is the nightly E2E test failure, which has accumulated 105 comments and is preventing reliable validation of the system.
</think>

# NemoClaw Project Digest — 2026-04-25

## 1. Today's Overview

NemoClaw shows high development activity on 2026-04-25, with 50 issues and 50 PRs updated in the last 24 hours. The project is actively addressing multiple security vulnerabilities (SSRF validation, symlink validation, secret redaction unification) while resolving critical stability issues including nightly E2E pipeline failures and gateway crashes in sandbox environments. No new releases were published today, though documentation updates for v0.0.25 are in progress. The community is engaged with 32 PRs merged/closed and 18 new PRs opened, indicating strong forward momentum on bug fixes and enhancements.

## 2. Releases

**No new releases today.** The project is preparing for v0.0.25, with documentation catch-up PRs merged (#2463) and version references updated across the codebase.

## 3. Project Progress

### Merged/Closed PRs (32 total)
| PR | Title | Area |
|----|-------|------|
| [#2463](https://github.com/NVIDIA/NemoClaw/pull/2463) | docs: catch up release prep for 0.0.25 | Documentation |
| [#2435](https://github.com/NVIDIA/NemoClaw/pull/2435) | fix(test): move installer integration tests to CI-only vitest project | Testing |
| [#2359](https://github.com/NVIDIA/NemoClaw/pull/2359) | chore(test): apply shfmt formatting to E2E scripts | Testing |
| [#2445](https://github.com/NVIDIA/NemoClaw/pull/2445) | docs: reorganize Get Started and add Deployment Topology diagram | Documentation |
| [#2440](https://github.com/NVIDIA/NemoClaw/pull/2440) | fix(onboard): always inject NEMOCLAW_DASHBOARD_PORT into sandbox env | Onboarding |
| [#2436](https://github.com/NVIDIA/NemoClaw/pull/2436) | fix(security): validate symlinks in snapshot create and rollback paths | Security |
| [#2461](https://github.com/NVIDIA/NemoClaw/pull/2461) | ci: gate every PR on tsc-cli regardless of touched paths | CI/CD |
| [#2460](https://github.com/NVIDIA/NemoClaw/pull/2460) | ci: gate every PR on tsc-cli regardless of touched paths | CI/CD |

### Open PRs (18 total) — Key Advancements
- **Security hardening**: [#2414](https://github.com/NVIDIA/NemoClaw/pull/2414) hardens config set SSRF validation; [#2436](https://github.com/NVIDIA/NemoClaw/pull/2436) validates symlinks in snapshot paths
- **TLS/Certificate fixes**: [#2345](https://github.com/NVIDIA/NemoClaw/pull/2345) exports GIT_SSL_CAINFO so git trusts proxy CA; [#2457](https://github.com/NVIDIA/NemoClaw/pull/2457) survives Landlock/seccomp restrictions on OpenShell 0.0.36
- **CLI enhancements**: [#2462](https://github.com/NVIDIA/NemoClaw/pull/2462) adds `nemohermes` alias for Hermes agent; [#2411](https://github.com/NVIDIA/NemoClaw/pull/2411) auto-allocates dashboard port for multi-sandbox
- **Dependency updates**: [#2464](https://github.com/NVIDIA/NemoClaw/pull/2464) bumps OpenClaw from 2026.4.2 to 2026.4.8
- **Infrastructure**: [#2466](https://github.com/NVIDIA/NemoClaw/pull/2466) fixes Hermes Dockerfile file permissions; [#2453](https://github.com/NVIDIA/NemoClaw/pull/2453) adds retry/fallback for container reachability checks

## 4. Community Hot Topics

### Most Active Issues by Comment Count

| Issue | Title | Comments | Priority |
|-------|-------|----------|----------|
| [#1992](https://github.com/NVIDIA/NemoClaw/issues/1992) | [bug, CI/CD, E2E] Nightly E2E failed | 105 | Critical |
| [#1908](https://github.com/NVIDIA/NemoClaw/issues/1908) | [Jetson Orin] OpenClaw TUI HTTP 503 "inference service unavailable" | 11 | Medium |
| [#1831](https://github.com/NVIDIA/NemoClaw/issues/1831) | [URGENT][SECURITY] CVE not issued for fixed vulnerability | 6 | High |
| [#2427](https://github.com/NVIDIA/NemoClaw/issues/2427) | openclaw gateway crashes with uv_interface_addresses SystemError | 6 | Triage |
| [#1828](https://github.com/NVIDIA/NemoClaw/issues/1828) | Proxy CA certificate not injected into sandbox trust store | 5 | Medium |

**Analysis:**
- **#1992** dominates discussion with 105 comments — the nightly E2E pipeline failure is blocking validation. The community needs reliable CI/CD before releases.
- **#1908** and **#1828** indicate persistent TLS/proxy issues on Jetson platforms, suggesting the MITM TLS termination implementation needs hardening.
- **#1831** reveals a gap in CVE coordination — security researchers expect formal CVE issuance after vulnerability fixes.

## 5. Bugs & Stability

### Critical Bugs
| Issue | Title | Severity | Fix PR? |
|-------|-------|----------|---------|
| [#1992](https://github.com/NVIDIA/NemoClaw/issues/1992) | Nightly E2E failed | Critical | — |
| [#2427](https://github.com/NVIDIA/NemoClaw/issues/2427) | Gateway crashes with uv_interface_addresses SystemError | High | — |
| [#2426](https://github.com/NVIDIA/NemoClaw/issues/2426) | Impossible to restart hermes gateway if it ever stops | High | — |

### Security Bugs
| Issue | Title | Status | Fix PR? |
|-------|-------|--------|---------|
| [#1831](https://github.com/NVIDIA/NemoClaw/issues/1831) | CVE not issued for fixed vulnerability | Open | — |
| [#2300](https://github.com/NVIDIA/NemoClaw/issues/2300) | Incomplete SSRF validation in config set | Open | [#2414](https://github.com/NVIDIA/NemoClaw/pull/2414) |
| [#1436](https://github.com/NVIDIA/NemoClaw/issues/1436) | K8s Manifest Images Not Pinned by Digest | Closed | — |

### Platform-Specific Bugs
- **Docker/Permissions**: [#2191](https://github.com/NVIDIA/NemoClaw/issues/2191) — Wrong permissions in Dockerfile for Hermes Agent sandbox
- **Jetson Orin**: [#2017](https://github.com/NVIDIA/NemoClaw/issues/2017) — DNS not resolving during onboarding
- **macOS**: [#2267](https://github.com/NVIDIA/NemoClaw/issues/2267) — Exported port not effective with TUI

## 6. Feature Requests & Roadmap Signals

### Active Feature Requests
| Issue | Title | Priority | Likelihood |
|-------|-------|----------|------------|
| [#1534](https://github.com/NVIDIA/NemoClaw/issues/1534) | Add `nemoclaw policy add <preset>` command for incremental policy management | Medium | High |
| [#2343](https://github.com/NVIDIA/NemoClaw/issues/2343) | Support for necessary linux tools inside the sandbox (e.g., `ps`) | Medium | Medium |
| [#2403](https://github.com/NVIDIA/NemoClaw/issues/2403) | compatible-endpoint provider should honor NEMOCLAW_LOCAL_INFERENCE_TIMEOUT | Medium | High |
| [#1422](https://github.com/NVIDIA/NemoClaw/issues/1422) | nemoclaw start should auto-patch allowedOrigins for tunnel URL | Medium | Medium |

### Roadmap Signals
- **Policy management CLI**: The `nemoclaw policy add` command (#1534) is a clear user need for managing network access incrementally
- **Hermes agent alias**: Already merged in [#2462](https://github.com/NVIDIA/NemoClaw/pull/2462) — `nemohermes` CLI binary added
- **Mutable sandbox config**: [#2227](https://github.com/NVIDIA/NemoClaw/pull/2227) flips default to mutable config, making shields opt-in — significant architectural change

## 7. User Feedback Summary

### Pain Points
1. **TLS/Certificate Failures**: Users report git HTTPS failures despite whitelisted endpoints (#2331), missing CA certificate bundles (#2395), and proxy CA not injected into sandbox trust store (#1828)
2. **Gateway Reliability**: Gateway crashes on startup (#2427) and cannot restart after stopping (#2426) — users find the TUI unusable
3. **Onboarding Failures**: Multi-step onboarding fails at various points: container reachability checks (#2453), sandbox image builds (#2101), DNS resolution on Jetson (#2017)
4. **Permissions Issues**: Docker Dockerfile permissions prevent sandbox user from accessing key folders (#2191); `/sandbox` directory not read-only as expected (#2394)

### Positive Signals
- **Documentation improvements**: Users are contributing docs reorganizations (#2445, #2463), indicating investment in user experience
- **Security focus**: Multiple security PRs merged/pending shows maintainer responsiveness to vulnerability reports
- **Multi-sandbox support**: Auto-allocation of dashboard ports (#2411) addresses real multi-instance deployment needs

## 8. Backlog Watch

### Long-Unanswered Important Issues
| Issue | Title | Age | Status | Action Needed |
|-------|-------|-----|--------|---------------|
| [#996](https://github.com/NVIDIA/NemoClaw/issues/996) | [Linux] Brev deploy: vLLM exits - wrong HF model id | ~30 days | Open | Fix merged in [#2459](https://github.com/NVIDIA/NemoClaw/pull/2459) — needs review |
| [#1734](https://github.com/NVIDIA/NemoClaw/issues/1734) | Restack onboarding and CLI refactor into safe PR stack | ~15 days | Open | Needs maintainer coordination |
| [#1422](https://github.com/NVIDIA/NemoClaw/issues/1422) | nemoclaw start should auto-patch allowedOrigins | ~22 days | Open | Feature request pending |

### Stale Security Items
| Issue | Title | Age | Notes |
|-------|-------|-----|-------|
| [#1831](https://github.com/NVIDIA/NemoClaw/issues/1831) | CVE not issued for fixed vulnerability | ~12 days | Security team needs to engage on CVE issuance process |
| [#1436](https://github.com/NVIDIA/NemoClaw/issues/1436) | K8s Manifest Images Not Pinned by Digest | ~22 days | Closed but may need verification |

### PRs Needing Review
| PR | Title | Age | Blockers |
|----|-------|-----|----------|
| [#2227](https://github.com/NVIDIA/NemoClaw/pull/2227) | refactor(sandbox): default to mutable config | 3 days | Architectural change — needs thorough review |
| [#2459](https://github.com/NVIDIA/NemoClaw/pull/2459) | fix(deploy): correct vLLM HF model id | 1 day | Fix for #996 — should prioritize |
| [#2465](https://github.com/NVIDIA/NemoClaw/pull/2465) | refactor(cli): centralize subprocess execution | <1 day | Large refactor — needs review |

---

*Digest generated from NemoClaw GitHub activity on 2026-04-25. Data includes 50 issues and 50 PRs updated in the last 24 hours.*

</details>

---
*This digest is auto-generated by [Big Model Radar](https://github.com/borq168/big_model_radar).*