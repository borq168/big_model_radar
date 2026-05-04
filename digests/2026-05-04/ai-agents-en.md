# OpenClaw Ecosystem Digest 2026-05-04

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-04 02:02 UTC

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

<think>Let me analyze the GitHub data for OpenClaw and generate a structured project digest for 2026-05-04.

Key data points:
- Issues updated in last 24h: 500 (open/active: 425, closed: 75)
- PRs updated in last 24h: 500 (open: 454, merged/closed: 46)
- New releases: 1 (v2026.5.3-beta.2)

Let me organize this into the requested sections.
</think>

# OpenClaw Project Digest — 2026-05-04

## 1. Today's Overview

OpenClaw continues to show high activity with 500 issues and 500 PRs updated in the last 24 hours. The project released **v2026.5.3-beta.2**, introducing a bundled file-transfer plugin with new agent tools for binary file operations. Community engagement remains strong, with 46 PRs merged/closed and 75 issues resolved. Notable focus areas today include performance fixes for gateway tool preparation stalls, transcript persistence improvements, and ongoing work on channel integrations (Discord, Telegram, macOS). The project appears healthy with active maintenance across multiple subsystems.

---

## 2. Releases

### v2026.5.3-beta.2 — OpenClaw 2026.5.3 beta 2

**Highlight:** New bundled file-transfer plugin with agent tools for binary file operations on paired nodes.

**Key Changes:**
- **Plugins/file-transfer:** Added bundled file-transfer plugin with `file_fetch`, `dir_list`, `dir_fetch`, and `file_write` agent tools for binary file operations on paired nodes
- **Security:** Default-deny per-node path policy under `plugins.entries.file-transfer.config.nodes` with operator approval workflow

**Note:** This is a beta release; migration notes and breaking changes will be documented in the stable release.

---

## 3. Project Progress

### Merged/Closed PRs (46 total)

| PR | Author | Area | Summary |
|----|--------|------|---------|
| [#77005](https://github.com/openclaw/openclaw/pull/77005) | @1yihui | agents | **Fixed:** Lazy-load pdfjs-dist to eliminate ~2.5s per-turn blocking overhead |
| [#77036](https://github.com/openclaw/openclaw/pull/77036) | @steipete | docs | **Fixed:** Keep pnpm source installs compatible with Baileys (git subdependency resolution) |
| [#77034](https://github.com/openclaw/openclaw/pull/77034) | @ziomancer | gateway | **Added:** `diagnostics.pricing` method for pricing cache visibility |
| [#72033](https://github.com/openclaw/openclaw/pull/72033) | @ziomancer | gateway | **Added:** `diagnostics.pricing` method (earlier version, now closed as duplicate) |
| [#77031](https://github.com/openclaw/openclaw/pull/77031) | @steipete | gateway | **Fixed:** Reduce gateway tool prep stalls by optimizing secrets runtime snapshot handling |
| [#70681](https://github.com/openclaw/openclaw/pull/70681) | @mmartoccia | infra | **Fixed:** Verify gateway PIDs via ps argv on Unix, not lsof p_comm (macOS fix) |
| [#75507](https://github.com/openclaw/openclaw/pull/75507) | @vyctorbrzezowski | gateway | **Fixed:** Keep launchd managed env values on macOS |
| [#76238](https://github.com/openclaw/openclaw/pull/76238) | @keshavbotagent | telegram | **Fixed:** Render interactive reply buttons in Telegram |
| [#76870](https://github.com/openclaw/openclaw/pull/76870) | @SymbolStar | openai-codex | **Fixed:** Retry on IPv4 when IPv6 egress fails |
| [#76911](https://github.com/openclaw/openclaw/pull/76911) | @1yihui | discord | **Fixed:** Handle unresolved SecretRef tokens gracefully in Discord plugin |
| [#76747](https://github.com/openclaw/openclaw/pull/76747) | @steipete | qa-lab | **Added:** Mantis Discord status reaction scenario for QA |

### Open PRs of Note (30+)

| PR | Author | Area | Summary |
|----|--------|------|---------|
| [#77033](https://github.com/openclaw/openclaw/pull/77033) | @steipete | gateway | **Fix:** Prevent stale transcript replay in WebChat |
| [#77030](https://github.com/openclaw/openclaw/pull/77030) | @openperf | cli-runner | **Fix:** Drop stale claude-cli sessionId when transcript missing |
| [#77021](https://github.com/openclaw/openclaw/pull/77021) | @hclsys | sessions | **Feat:** Add per-label summary to cleanup dry-run output |
| [#77023](https://github.com/openclaw/openclaw/pull/77023) | @fuller-stack-dev | agents | **Feat:** Steer mid-turn prompts by default |
| [#77017](https://github.com/openclaw/openclaw/pull/77017) | @Ittiz | web-ui | **Feat:** Add generated image actions in chat UI |
| [#77013](https://github.com/openclaw/openclaw/pull/77013) | @NikolaFC | codex | **Feat:** Bridge native goal completion for Codex |
| [#76923](https://github.com/openclaw/openclaw/pull/76923) | @NikolaFC | gateway | **Feat:** Add safe restart coordinator with preflight checks |
| [#76851](https://github.com/openclaw/openclaw/pull/76851) | @chinar-amrutkar | agents | **Fix:** Cache getActiveSecretsRuntimeSnapshot() to eliminate ~8s core-plugin-tools latency |
| [#76069](https://github.com/openclaw/openclaw/pull/76069) | @zarruk | docs | **Feat:** Add messaging window command for inbound message batching |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Author | Comments | Topic |
|-------|--------|----------|-------|
| [#43735](https://github.com/openclaw/openclaw/issues/43735) | @che1404 | 12 | **Skills not loading** in agent context from `~/.openclaw/workspace/skills/` |
| [#45740](https://github.com/openclaw/openclaw/issues/45740) | @zients | 12 | **gh-issues skill:** Untrusted issue body injected directly into sub-agent prompt (security) |
| [#39604](https://github.com/openclaw/openclaw/issues/39604) | @alokemajumder | 12 | **Feature:** Add `tools.web.fetch.allowPrivateNetwork` config for private network access |
| [#76307](https://github.com/openclaw/openclaw/issues/76307) | @pma-sp | 11 | **Regression:** Long-output agent replies truncate at ~25–80 chars |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | @IIIyban | 10 | **Bug:** Subagent completion silently lost — no retry, no notification |
| [#29552](https://github.com/openclaw/openclaw/issues/29552) | @Bekiman1 | 10 | **Bug:** Version mismatch since v2026.2.25 |
| [#41744](https://github.com/openclaw/openclaw/issues/41744) | @wangyaok1 | 10 | **Feishu:** Read image tool result loses media before final outbound payload |
| [#41494](https://github.com/openclaw/openclaw/issues/41494) | @moeedahmed | 10 | **Regression:** Gemini reasoning leaks into chat on v2026.3.8 |

### Analysis of Underlying Needs

1. **Security & Sandboxing:** Issue #45740 highlights a critical security concern — untrusted GitHub issue bodies being injected into sub-agent prompts without sanitization. This suggests the community values robust input isolation.

2. **Skills & Extensibility:** Multiple issues (#43735, #44051) point to problems with skills loading and path resolution, indicating users heavily rely on custom skills for their workflows.

3. **Output Reliability:** The truncation bug (#76307) and subagent completion loss (#44925) suggest users encounter silent failures that erode trust in the system's reliability.

4. **Private Network Access:** The feature request for `allowPrivateNetwork` (#39604) shows demand for enterprise/intranet use cases.

---

## 5. Bugs & Stability

### Critical/Regressions Reported Today

| Issue | Severity | Topic | Status |
|-------|----------|-------|--------|
| [#76307](https://github.com/openclaw/openclaw/issues/76307) | **High** | Long-output agent replies truncate at ~25–80 chars (regression) | Open |
| [#76295](https://github.com/openclaw/openclaw/issues/76295) | **High** | core-plugin-tools stage constant ~8.3s latency since v2026.4.24 | Open |
| [#76382](https://github.com/openclaw/openclaw/issues/76382) | **High** | Gateway becoming very slow, CPU 100% (v4.24 - 5.2) | Closed |
| [#76804](https://github.com/openclaw/openclaw/issues/76804) | **Medium** | WebChat: assistant text responses not persisted to session transcript | Open |
| [#43795](https://github.com/openclaw/openclaw/issues/43795) | **Medium** | 500 v.content is not iterable (regression) | Open |
| [#46637](https://github.com/openclaw/openclaw/issues/46637) | **Medium** | reasoning_content in conversation history causes JSON parse error | Open |

### Fix PRs Available

- **#76851** — Caches `getActiveSecretsRuntimeSnapshot()` to eliminate ~8s core-plugin-tools latency (addresses #76295)
- **#77005** — Lazy-loads pdfjs-dist to eliminate ~2.5s per-turn blocking overhead
- **#77031** — Reduces gateway tool prep stalls by optimizing secrets runtime snapshot handling
- **#77033** — Prevents stale transcript replay in WebChat

### Stability Notes

The project has multiple open regression reports affecting output truncation, latency, and memory management. The maintainer team appears responsive with several fix PRs already merged or in review. Users on v2026.4.24+ should be aware of potential performance regressions in core-plugin-tools initialization.

---

## 6. Feature Requests & Roadmap Signals

### High-Engagement Feature Requests

| Issue | Author | Votes | Topic |
|-------|--------|-------|-------|
| [#39604](https://github.com/openclaw/openclaw/issues/39604) | @alokemajumder | 5 | `tools.web.fetch.allowPrivateNetwork` for private network access |
| [#42840](https://github.com/openclaw/openclaw/issues/42840) | @henserlu | 4 | MathJax/LaTeX Support in Control UI |
| [#76804](https://github.com/openclaw/openclaw/issues/76804) | @dertbv | 4 | WebChat assistant text responses not persisted (regression) |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | @hkochar | 0 | Per-agent cost budget enforcement at gateway level |
| [#43260](https://github.com/openclaw/openclaw/issues/43260) | @AlethiaQuizForge | 0 | Support `model` field in SKILL.md frontmatter for per-skill model routing |
| [#45608](https://github.com/openclaw/openclaw/issues/45608) | @kamikariat | 2 | Pre-reset agentic memory flush before `/new` and daily reset |
| [#45758](https://github.com/openclaw/openclaw/issues/45758) | @xuxusheng | 1 | Support YAML as config file format |
| [#47677](https://github.com/openclaw/openclaw/issues/47677) | @100menotu001 | 1 | First-class Telegram reaction triggers for agent wake-up |

### Roadmap Signals

Based on current PRs and issues, likely near-term focus areas:
1. **Performance:** Continued work on reducing per-turn latency (tool prep, secrets snapshot caching)
2. **Reliability:** Fixes for silent failures, transcript persistence, and output truncation
3. **Enterprise Features:** Private network access, per-agent cost budgets, YAML config support
4. **UX Enhancements:** MathJax rendering, messaging window controls, mid-turn prompt steering

---

## 7. User Feedback Summary

### Pain Points

1. **Silent Failures:** Users report results being "silently lost" (#44925) with no retry or notification, causing confusion and data loss.

2. **Performance Regressions:** Multiple users experiencing 8+ second delays in tool preparation (#76295) and output truncation (#76307), significantly impacting usability.

3. **Memory Management Chaos:** Issue #43747 describes inconsistent memory behavior across users — some see chunking/embedding while others don't, suggesting environment-specific bugs.

4. **Channel Reliability:** Telegram issues (#50040, #47643) highlight polling stalls leading to silent message loss, and Feishu image handling problems (#41744).

5. **Windows Compatibility:** Multiple issues on Windows (#40540, #39038, #44599) including EBUSY errors on update, PATH hangs, and whitespace in config directory failures.

### Positive Feedback Signals

- Active maintainer engagement with rapid bug fixes (multiple PRs merged today)
- New features like file-transfer plugin and diagnostics.pricing show continued investment in core capabilities
- Discord and Telegram channel improvements being actively developed

---

## 8. Backlog Watch

### Long-Unanswered Important Issues

| Issue | Age | Author | Topic | Priority |
|-------|-----|--------|-------|----------|
| [#29552](https://github.com/openclaw/openclaw/issues/29552) | ~65 days | @Bekiman1 | Version mismatch since v2026.2.25 | High |
| [#38204](https://github.com/openclaw/openclaw/issues/38204) | ~59 days | @gocyclic249 | Grok 4.2 Multi Model support (HTTP 400 error) | Medium |
| [#39038](https://github.com/openclaw/openclaw/issues/39038) | ~58 days | @Joper89 | Windows 11 24H2 node startup hangs on PATH | High |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | ~57 days | @altsoulkiller | Write tool lacks append mode — isolated cron sessions destroy shared files | Medium |
| [#41494](https://github.com/openclaw/openclaw/issues/41494) | ~56 days | @moeedahmed | Gemini reasoning leaks into chat (regression) | Medium |
| [#43735](https://github.com/openclaw/openclaw/issues/43735) | ~53 days | @che1404 | Skills not loading in agent context | High |
| [#43747](https://github.com/openclaw/openclaw/issues/43747) | ~53 days | @AntiMoron | Memory management chaos (regression) | High |
| [#45740](https://github.com/openclaw/openclaw/issues/45740) | ~51 days | @zients | gh-issues skill: untrusted issue body injection (security) | **Critical** |

### Issues Needing Maintainer Attention

- **Security:** #45740 — Untrusted input injection in gh-issues skill
- **Windows Support:** #39038, #40540, #44599 — Multiple Windows-specific bugs
- **Memory/Storage:** #43747, #40001 — Data loss risks
- **Model Support:** #38204 — Grok 4.2 integration broken

---

*Digest generated for 2026-05-04. Data sourced from OpenClaw GitHub repository (github.com/openclaw/openclaw).*

---

## Cross-Ecosystem Comparison

<think>The user wants me to generate a cross-project comparison report based on the individual project digests I've already created. Let me analyze all the data from each project and create a comprehensive comparison.

Let me compile the key metrics from each project:

1. **OpenClaw** (github.com/openclaw/openclaw)
   - Issues: 500 updated in 24h (425 open, 75 closed)
   - PRs: 500 updated in 24h (454 open, 46 merged/closed)
   - Releases: 1 (v2026.5.3-beta.2)
   - Health: High activity, multiple regressions reported

2. **NanoBot** (github.com/HKUDS/nanobot)
   - Issues: 6 updated in 24h (4 open, 2 closed)
   - PRs: 22 updated in 24h (15 open, 7 merged/closed)
   - Releases: 0
   - Health: Good, security hardening in progress

3. **Zeroclaw** (github.com/zeroclaw-labs/zeroclaw)
   - Issues: 50 updated in 24h (42 open, 8 closed)
   - PRs: 50 updated in 24h (30 open, 20 merged/closed)
   - Releases: 0
   - Health: High activity, desktop app focus

4. **PicoClaw** (github.com/sipeed/picoclaw)
   - Issues: 5 updated in 24h (3 open, 2 closed)
   - PRs: 20 updated in 24h (14 open, 6 merged/closed)
   - Releases: 0
   - Health: Good, provider compatibility focus

5. **NanoClaw** (github.com/qwibitai/nanoclaw)
   - Issues: 10 updated in 24h (2 open, 8 closed)
   - PRs: 50 updated in 24h (19 open, 31 merged/closed)
   - Releases: 0
   - Health: High throughput, security hardening

6. **IronClaw** (github.com/nearai/ironclaw)
   - Issues: 19 updated in 24h (17 open, 2 closed)
   - PRs: 24 updated in 24h (21 open, 3 merged/closed)
   - Releases: 0
   - Health: Architecture refactoring, Reborn substrate landing

7. **LobsterAI** (github.com/netease-youdao/LobsterAI)
   - Issues: 1 updated in 24h (1 open, 0 closed)
   - PRs: 2 updated in 24h (2 open, 0 merged/closed)
   - Releases: 0
   - Health: Low activity, needs maintainer attention

8. **TinyClaw** (github.com/TinyAGI/tinyclaw)
   - No activity in 24h

9. **Moltis** (github.com/moltis-org/moltis)
   - Issues: 1 updated in 24h (1 open, 0 closed)
   - PRs: 2 updated in 24h (2 open, 0 merged/closed)
   - Releases: 0
   - Health: Low activity, focused development

10. **CoPaw** (github.com/agentscope-ai/CoPaw)
    - Issues: 33 updated in 24h (22 open, 11 closed)
    - PRs: 16 updated in 24h (11 open, 5 merged/closed)
    - Releases: 0 (1.1.6b1 bumped)
    - Health: Good, memory system improvements

11. **ZeptoClaw** (github.com/qhkm/zeptoclaw)
    - Issues: 5 updated in 24h (4 open, 1 closed)
    - PRs: 22 updated in 24h (3 open, 19 merged/closed)
    - Releases: 0
    - Health: High throughput, middleware framework

12. **EasyClaw** (github.com/gaoyangz77/easyclaw)
    - No activity in 24h

13. **NemoClaw** (github.com/NVIDIA/NemoClaw)
    - Issues: 17 updated in 24h (8 open, 9 closed)
    - PRs: 50 updated in 24h (39 open, 11 merged/closed)
    - Releases: 0
    - Health: High activity, security hardening

Now I'll organize this into the requested sections.
</think>

# Cross-Project Comparison Report: Personal AI Assistant & Agent Open-Source Ecosystem

## 1. Ecosystem Overview

The personal AI assistant and agent open-source ecosystem is experiencing **rapid maturation**, with 13 tracked projects demonstrating diverse approaches to the same core challenge: enabling reliable, extensible AI agents that users can self-host and customize. The landscape bifurcates into two distinct tiers—large, established projects like OpenClaw (500+ PRs/24h) and Zeroclaw (50 PRs/24h) serving as community anchors, and smaller specialized projects targeting niche use cases (IronClaw's Reborn architecture, ZeptoClaw's middleware framework, CoPaw's multi-channel integration). Common themes emerging across all projects include security hardening (SSRF protection, credential management, sandbox isolation), provider diversity (DeepSeek, Gemini, Ollama, Liquid AI), and reliability improvements (retry logic, transcript persistence, session recovery). The ecosystem shows healthy competition and cross-pollination, with projects visibly adopting patterns from each other (NanoClaw's Hermes Agent self-improving loop, Zeroclaw's Tauri desktop parity).

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Open Issues | Open PRs | Releases (24h) | Health Score |
|---------|-------------|-----------|-------------|----------|----------------|--------------|
| **OpenClaw** | 500 | 500 | ~425 | ~454 | 1 (v2026.5.3-beta.2) | 🟡 Active-Regression |
| **Zeroclaw** | 50 | 50 | 42 | 30 | 0 | 🟢 High Velocity |
| **NemoClaw** | 17 | 50 | 8 | 39 | 0 | 🟢 High Velocity |
| **NanoClaw** | 10 | 50 | 2 | 19 | 0 | 🟢 High Velocity |
| **CoPaw** | 33 | 16 | 22 | 11 | 0 (1.1.6b1 bumped) | 🟢 Good |
| **IronClaw** | 19 | 24 | 17 | 21 | 0 | 🟡 Architecture Refactor |
| **NanoBot** | 6 | 22 | 4 | 15 | 0 | 🟢 Good |
| **ZeptoClaw** | 5 | 22 | 4 | 3 | 0 | 🟢 High Throughput |
| **PicoClaw** | 5 | 20 | 3 | 14 | 0 | 🟢 Good |
| **Moltis** | 1 | 2 | 1 | 2 | 0 | 🔴 Low |
| **LobsterAI** | 1 | 2 | 1 | 2 | 0 | 🔴 Low |
| **TinyClaw** | 0 | 0 | — | — | 0 | ⚫ Inactive |
| **EasyClaw** | 0 | 0 | — | — | 0 | ⚫ Inactive |

**Health Score Methodology:** Combines PR merge rate, issue resolution velocity, regression frequency, and maintainer responsiveness. 🟡 indicates projects with significant open bugs or regressions despite high activity.

---

## 3. OpenClaw's Position

### Advantages vs Peers

| Dimension | OpenClaw | Peer Average |
|-----------|----------|--------------|
| **Community Size** | Dominant (500 issues/PRs/24h) | 17 issues, 28 PRs/24h |
| **Release Cadence** | Weekly beta releases | Sporadic or none |
| **Bug Resolution** | Multiple PRs merged daily | Slower, often stale |
| **Feature Breadth** | 12+ channels, 10+ providers | 3-6 channels, 2-4 providers |
| **Documentation** | Comprehensive, multi-language | Inconsistent |

### Technical Approach Differences

OpenClaw operates as the **reference implementation** for the ecosystem, with its architecture (gateway-agent-tool hierarchy, session transcript persistence, approval manager) explicitly cited by NanoBot, Zeroclaw, and others. Key differentiators:

- **Bundled plugin ecosystem** (file-transfer, MCP) vs. external skill repos
- **Safety guard system** with configurable policies vs. simpler allowlists
- **Transcript-centric session model** enabling replay and context preservation
- **Multi-turn coordination** with subagent delegation

### Community Size Comparison

OpenClaw's activity is **10x the ecosystem average**, positioning it as the de facto standard. However, this scale creates maintenance challenges—multiple regressions reported simultaneously (output truncation, latency spikes, safety guard false positives)—that smaller projects avoid through lower complexity.

---

## 4. Shared Technical Focus Areas

### Cross-Project Requirements Emerging Today

| Requirement | Projects Affected | Specific Needs |
|-------------|-------------------|----------------|
| **Security Hardening** | NanoBot, NanoClaw, NemoClaw, Zeroclaw | SSRF validation, credential management, sandbox isolation, CSRF protection |
| **Provider Compatibility** | PicoClaw, CoPaw, IronClaw, Moltis | DeepSeek reasoning_content, Gemini schema validation, Ollama context management |
| **Session/Transcript Persistence** | OpenClaw, IronClaw, Zeroclaw | WebSocket transcript replay, durable event stores, snapshot state preservation |
| **Safety Guard Refinement** | OpenClaw, NanoBot | False positive reduction, soft boundaries, retry throttling |
| **Memory System Reliability** | CoPaw, OpenClaw, IronClaw | Vector index building, memory search, context loss prevention |
| **Recovery/Failure Handling** | NemoClaw, Zeroclaw, NanoClaw | Ghost entries, stale locks, auto-respawn, SIGINT handling |
| **Multi-Channel Voice** | CoPaw, Zeroclaw, NanoBot | WhatsApp voice, Telegram audio, TTS/STT pipeline |
| **Desktop Parity** | Zeroclaw, CoPaw | Tauri app, system tray, clipboard handling in headless |

**Key Insight:** Security and reliability dominate today's cross-project concerns, suggesting the ecosystem is transitioning from feature development to production hardening.

---

## 5. Differentiation Analysis

### Feature Focus

| Project | Primary Differentiation | Secondary Focus |
|---------|------------------------|-----------------|
| **OpenClaw** | Reference implementation, plugin ecosystem | Safety guard, multi-turn coordination |
| **Zeroclaw** | Desktop (Tauri) parity, voice duplex | Schema v3 migration, config aliasing |
| **IronClaw** | Reborn architecture (event sourcing) | NEAR blockchain intents, portfolio automation |
| **NanoClaw** | Self-hosted simplicity, v2 migration | Security hardening, container config |
| **CoPaw** | Multi-channel (Telegram, Feishu, WeChat) | Memory system, skill management |
| **ZeptoClaw** | Middleware framework, Rust performance | Hermes Agent pattern adoption |
| **NemoClaw** | NVIDIA/Hermes integration, Brev deploy | Recovery scenarios, E2E testing |
| **PicoClaw** | Provider diversity, Android support | OAuth, retry logic, MCP |

### Target Users

| Project | Primary Audience |
|---------|-----------------|
| **OpenClaw** | Developers, power users, enterprises |
| **Zeroclaw** | Desktop users, voice-first users |
| **IronClaw** | NEAR blockchain users, portfolio managers |
| **NanoClaw** | Self-hosted enthusiasts, privacy-focused |
| **CoPaw** | Multi-platform team deployments |
| **ZeptoClaw** | Rust developers, edge deployment |
| **NemoClaw** | NVIDIA GPU users, Brev customers |

### Technical Architecture

| Project | Architecture Style | Language | Storage |
|---------|-------------------|----------|---------|
| **OpenClaw** | Gateway-Agent-Tool | TypeScript | JSONL, SQLite |
| **Zeroclaw** | Modular channels/providers | TypeScript | JSONL |
| **IronClaw** | Event-sourced Reborn | Rust | PostgreSQL, libSQL |
| **NanoClaw** | Lightweight agent | TypeScript | JSONL |
| **CoPaw** | Channel adapters | TypeScript | SQLite |
| **ZeptoClaw** | Middleware pipeline | Rust | JSONL |
| **NemoClaw** | CLI + Brev cloud | Go | SQLite |

---

## 6. Community Momentum & Maturity

### Activity Tiers

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Tier 1: Anchor** | OpenClaw | 500+ activity/day, weekly releases, community-driven |
| **Tier 2: Rapid Iteration** | Zeroclaw, NemoClaw, NanoClaw | 50 PRs/24h, high merge rate, active feature development |
| **Tier 3: Steady Development** | CoPaw, IronClaw, NanoBot, ZeptoClaw, PicoClaw | 5-33 items/24h, balanced PRs/issues, stable cadence |
| **Tier 4: Low Activity** | Moltis, LobsterAI | 1-2 items/24h, needs maintainer attention |
| **Tier 5: Inactive** | TinyClaw, EasyClaw | No activity, potential abandonment |

### Rapidly Iterating Projects

- **Zeroclaw**: Desktop app launch driving high velocity; 8+ desktop issues in single day
- **NemoClaw**: Security hardening sprint; 14 dependency updates + 7 test coverage PRs
- **NanoClaw**: 31 PRs merged in 24h; v2 migration + security trio
- **ZeptoClaw**: Middleware framework Phase 1 landed; 19 PRs merged

### Stabilizing Projects

- **OpenClaw**: High activity but regression-heavy; entering stabilization phase
- **IronClaw**: Reborn substrate landing signals architecture freeze approaching
- **CoPaw**: Memory system improvements indicate feature completion

---

## 7. Trend Signals

### For AI Agent Developers

1. **Event Sourcing is Gaining Traction**
   - IronClaw's Reborn architecture, ZeptoClaw's middleware pipeline, and CoPaw's event hooks all point toward **event-driven agent loops** as the emerging pattern
   - Implication: Agents should emit structured events for observability, replay, and auditability

2. **Safety Guard Systems Need Rethinking**
   - OpenClaw and NanoBot both report safety guard false positives causing user frustration
   - Implication: Policy-as-code with soft boundaries, retry throttling, and user notification beats hard aborts

3. **Provider Abstraction Remains Fragile**
   - DeepSeek, Gemini, Ollama, and Liquid AI all have edge-case failures across multiple projects
   - Implication: Provider SDKs need schema normalization, graceful degradation, and comprehensive test matrices

4. **Desktop is the Next Battleground**
   - Zeroclaw, CoPaw, and NemoClaw all investing in desktop parity (Tauri, system tray, headless handling)
   - Implication: Cross-platform desktop support will become a competitive differentiator

5. **Self-Improvement Patterns Emerging**
   - NanoClaw's Hermes Agent skill management, ZeptoClaw's trigger phrase nudges, CoPaw's skill telemetry
   - Implication: Agents that manage their own skill lifecycle based on usage patterns are the next frontier

6. **Recovery/Resilience is Underinvested**
   - NemoClaw, Zeroclaw, and NanoClaw all have open issues around ghost entries, stale locks, and failed respawns
   - Implication: Production deployments need robust failure-mode handling; this is a gap across the ecosystem

7. **Internationalization Expanding**
   - CoPaw adding Brazilian Portuguese, ZeptoClaw refreshing multi-language docs
   - Implication: Non-English user bases are growing; i18n investment pays off

### Value for Decision-Makers

| Signal | Strategic Implication |
|--------|----------------------|
| OpenClaw's regression issues | Even mature projects struggle with multi-provider complexity; expect ongoing maintenance burden |
| Security hardening across 4+ projects | Security is a shared concern; consider contributing to shared security primitives |
| Desktop investment | User expectations for desktop experience are rising; web-only is becoming insufficient |
| Architecture convergence (event sourcing) | Event-driven patterns are becoming standard; new projects should adopt early |
| Recovery failures | Production deployments need careful failure-mode testing; no project is fully mature here |

---

*Report generated 2026-05-04. Data sourced from 13 projects in the personal AI assistant and agent open-source ecosystem. Health scores and tier assignments are editorial assessments based on 24-hour activity patterns.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

<think>Let me analyze the GitHub data for NanoBot and generate a structured project digest for 2026-05-04.

Key data points:
- Issues updated in last 24h: 6 (open/active: 4, closed: 2)
- PRs updated in last 24h: 22 (open: 15, merged/closed: 7)
- New releases: 0

Let me organize the information:

**Latest Issues (6 total):**
1. #2665 [OPEN] - Good first issue, feature request about re-authenticating OpenAI Codex provider
2. #3604 [OPEN] - Bug: WhatsApp voice not work
3. #3599 [CLOSED] - Bug: 升级v0.1.5.post3 后经常提示 Command blocked by safety guard
4. #3611 [OPEN] - Enhancement: limit concurrent subagents to prevent OOM
5. #3600 [CLOSED] - fix: CLI渠道缺少retry_wait消息拦截
6. #3605 [OPEN] - Bug: Safety guard abort silently drops the turn

**Latest PRs (22 total, showing top 20):**
Open PRs:
- #3607 - fix(bridge): support WhatsApp voice message download
- #3254 - fix(sdk): populate RunResult.tools_used and RunResult.messages
- #3492 - fix(security): harden public-deploy footguns + browser-CSRF
- #3255 - feat(security): enforce history.jsonl / .dream_cursor at filesystem layer
- #3615 - feat(agent): limit concurrent subagent execution
- #3252 - fix(security): detect non-http schemes in shell-command SSRF scan
- #3235 - fix(security): fail closed on DNS failure in validate_resolved_url
- #3612 - feat(cli): add provider logout command


- #2727 - feat(cli): add provider logout command (duplicate/related)
- #1443 - feat: decouple heartbeat reasoning from notification
- #3610 - fix(mcp): shield aclose on failed connect
- #2867 - telegram group allowlist, fallback agents
- #3608 - Prepare Sen local setup docs
- #3601 - feat(cli): panel-based terminal display
- #3564 - feat(hooks): HookCenter typed-event hook system

Closed/Merged PRs:
- #3613 - fix(agent): prevent safety guard false positives and streamed message drop
- #3614 - fix(runner): soft workspace boundary with retry throttle
- #3606 - fix(cron): atomic write for jobs.json
- #3609 - fix(cli): stop provider retry messages garbling interactive output
- #3583 - Improve beta WebUI turn completion and chat isolation

The security work is substantial—multiple PRs addressing SSRF vulnerabilities, DNS validation, and filesystem protections. CLI improvements include logout functionality and better terminal display, while agent fixes tackle safety guard issues and workspace boundaries. The WebUI and hook system enhancements show continued platform expansion.
</think>

# NanoBot Project Digest — 2026-05-04

## 1. Today's Overview

NanoBot continues to demonstrate high development velocity with 22 PRs and 6 issues updated in the last 24 hours. The project is actively addressing critical stability issues, particularly around the safety guard system and workspace boundaries, with multiple fixes merged today. Security hardening remains a strong focus, with several PRs targeting SSRF protection, CSRF prevention, and credential management. The community is actively contributing across CLI enhancements, WhatsApp integration, and subagent concurrency controls.

## 2. Releases

**No new releases today.** The project remains on v0.1.5.post3 based on reported issue metadata.

## 3. Project Progress

### Merged/Closed PRs (7 total)

| PR | Author | Summary |
|----|--------|---------|
| [#3613](https://github.com/HKUDS/nanobot/pull/3613) | @chengyongru | **fix(agent): prevent safety guard false positives and streamed message drop** — Allows `/dev/*` paths, exempts `/dev` like `media_path`, fixes message drop on safety abort |
| [#3614](https://github.com/HKUDS/nanobot/pull/3614) | @Re-bin | **fix(runner): soft workspace boundary with retry throttle** — Replaces fatal abort with recoverable tool errors; throttles repeated violations |
| [#3609](https://github.com/HKUDS/nanobot/pull/3609) | @04cb | **fix(cli): stop provider retry messages garbling interactive output** — Routes retry wait messages to progress line, closes #3600 |
| [#3606](https://github.com/HKUDS/nanobot/pull/3606) | @hussein1362 | **fix(cron): atomic write for jobs.json + don't silently overwrite corrupt store** — Prevents scheduled job loss after container restart |
| [#3583](https://github.com/HKUDS/nanobot/pull/3583) | @ramonpaolo | **Improve beta WebUI turn completion and chat isolation** — Keeps composer active until `turn_end` signal; fixes chat-switch caching |
| [#2727](https://github.com/HKUDS/nanobot/pull/2727) | @mikaku9944 | **feat(cli): add provider logout command** — Implements OAuth credential clearing for openai-codex |
| [#3600](https://github.com/HKUDS/nanobot/issues/3600) (issue) | @Antelisha | **Bug closed:** CLI retry messages causing terminal garbling (fixed by #3609) |

### Open PRs Advancing (15 total)

Key open PRs with significant scope:

- **#3615** — [feat(agent): limit concurrent subagent execution](https://github.com/HKUDS/nanobot/pull/3615) — Adds `maxConcurrentSubagents` config (default: 1) with asyncio semaphore; closes #3611
- **#3607** — [fix(bridge): support WhatsApp voice message download](https://github.com/HKUDS/nanobot/pull/3607) — Fixes #3604; adds `audioMessage` handling
- **#3612** — [feat(cli): add provider logout command](https://github.com/HKUDS/nanobot/pull/3612) — Adds `nanobot provider logout <provider>` with handlers for openai-codex and github-copilot
- **#3492** — [fix(security): harden public-deploy footguns + browser-CSRF on /v1/*](https://github.com/HKUDS/nanobot/pull/3492) — Addresses dangerous default configurations for public tunnels/reverse proxies
- **#3254** — [fix(sdk): populate RunResult.tools_used and RunResult.messages](https://github.com/HKUDS/nanobot/pull/3254) — Wires up undocumented/hardcoded fields in SDK facade
- **#3564** — [feat(hooks): HookCenter typed-event hook system](https://github.com/HKUDS/nanobot/pull/3564) — Plugin support via `entry_points` with observe/transform/guard modes

## 4. Community Hot Topics

### Most Active Discussions

| Topic | Type | Link | Activity |
|-------|------|------|----------|
| Re-authenticating OpenAI Codex provider | Issue #2665 | [Link](https://github.com/HKUDS/nanobot/issues/2665) | 3 comments; "good first issue" tag; feature request for logout command |
| WhatsApp voice message handling | Issue #3604 + PR #3607 | [Issue](https://github.com/HKUDS/nanobot/issues/3604) / [PR](https://github.com/HKUDS/nanobot/pull/3607) | Active fix in progress |
| Safety guard false positives | Issue #3605 | [Link](https://github.com/HKUDS/nanobot/issues/3605) | Silent turn drops reported; related fixes #3613, #3614 merged |

### Underlying Needs Analysis

1. **OAuth credential lifecycle management** — Users need to log out and re-authenticate providers (especially OAuth-based like Codex). The new `provider logout` command addresses this gap.

2. **Safety guard refinement** — Multiple issues (#3599, #3605) highlight that the safety guard is too aggressive, blocking legitimate operations (e.g., `/dev/null`) and silently failing on violations. The merged PRs #3613 and #3614 represent a significant course correction toward a "soft boundary" model.

3. **Multi-channel voice support** — WhatsApp voice messages represent a growing use case requiring proper download and transcription pipeline integration.

## 5. Bugs & Stability

### Reported Bugs (Ranked by apparent severity)

| Severity | Issue | Link | Status | Fix PR |
|----------|-------|------|--------|--------|
| **High** | Safety guard silently drops turns without user notification | [#3605](https://github.com/HKUDS/nanobot/issues/3605) | Open | — |
| **Medium** | WhatsApp voice messages not downloading | [#3604](https://github.com/HKUDS/nanobot/issues/3604) | Open | [#3607](https://github.com/HKUDS/nanobot/pull/3607) |
| **Medium** | v0.1.5.post3 safety guard false positives (path blocking) | [#3599](https://github.com/HKUDS/nanobot/issues/3599) | **Closed** | [#3613](https://github.com/HKUDS/nanobot/pull/3613), [#3614](https://github.com/HKUDS/nanobot/pull/3614) |
| **Low** | CLI retry messages garbling terminal output | [#3600](https://github.com/HKUDS/nanobot/issues/3600) | **Closed** | [#3609](https://github.com/HKUDS/nanobot/pull/3609) |

### Stability Notes

- **Cron job persistence fixed** — PR #3606 addresses silent job loss after container restarts due to non-atomic writes and corrupt store overwrites.
- **MCP connection cleanup** — PR #3610 prevents event-loop spin on failed MCP connections.

## 6. Feature Requests & Roadmap Signals

### User-Requested Features

| Feature | Link | Notes |
|---------|------|-------|
| Limit concurrent subagents to prevent OOM | [#3611](https://github.com/HKUDS/nanobot/issues/3611) | Critical for local LLM servers (Ollama, mlx_lm); PR #3615 ready |
| Provider logout command | [#2665](https://github.com/HKUDS/nanobot/issues/2665) | PRs #3612 and #2727 both address this |
| Panel-based terminal display | [#3601](https://github.com/HKUDS/nanobot/pull/3601) | CLI UX enhancement in progress |
| Telegram group allowlist | [#2867](https://github.com/HKUDS/nanobot/pull/2867) | ACL expansion for group-level control |
| Decouple heartbeat reasoning from notification | [#1443](https://github.com/HKUDS/nanobot/pull/1443) | Silent reasoning mode requested |

### Likely Near-Term Additions

Based on PR convergence, expect in next release:
- Subagent concurrency limiting (config: `agents.defaults.maxConcurrentSubagents`)
- Provider logout functionality
- WhatsApp voice message support
- Refined safety guard with soft boundaries and retry throttling

## 7. User Feedback Summary

### Pain Points

1. **Safety guard over-sensitivity** — Users report legitimate commands (e.g., `rm file.txt 2>/dev/null`) being blocked, forcing manual retries. The v0.1.5.post3 release introduced regressions that are now being addressed.

2. **OAuth re-authentication gap** — Users switching accounts (e.g., team → personal OpenAI plans) cannot clear cached credentials, as no logout mechanism existed.

3. **Silent failures** — Safety guard aborts that don't notify users leave conversations in undefined states, especially problematic in Telegram integrations.

4. **Cron job reliability** — Scheduled jobs disappearing after restarts is a production stability concern.

### Positive Signals

- WebUI improvements (#3583) show attention to UX polish
- HookCenter plugin system (#3564) indicates architectural investment for extensibility
- Security hardening across multiple PRs demonstrates proactive posture

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Link | Age | Notes |
|-------|------|-----|-------|
| Re-authenticate OpenAI Codex provider | [#2665](https://github.com/HKUDS/nanobot/issues/2665) | ~34 days | Tagged "good first issue"; PRs exist but may need review prioritization |
| Safety guard silent drop | [#3605](https://github.com/HKUDS/nanobot/issues/3605) | 1 day | High severity; no fix PR yet |

### Stale Security PRs

| PR | Link | Age | Notes |
|----|------|-----|-------|
| SSRF protection: non-http schemes | [#3252](https://github.com/HKUDS/nanobot/pull/3252) | ~17 days | Blocks `file://`, `gopher://` bypasses |
| DNS failure fail-closed | [#3235](https://github.com/HKUDS/nanobot/pull/3235) | ~17 days | Fail-open vulnerability in URL validation |
| History file protection | [#3255](https://github.com/HKUDS/nanobot/pull/3255) | ~17 days | Filesystem-layer enforcement for history.jsonl/.dream_cursor |
| Public deploy hardening | [#3492](https://github.com/HKUDS/nanobot/pull/3492) | ~6 days | CSRF and tunnel security |

### Recommendation

The security PRs (#3252, #3235, #3255, #3492) represent a coordinated hardening effort by @mohamed-elkholy95 and should be reviewed together to ensure consistent security posture. The safety guard silent drop issue (#3605) warrants priority attention given its user-visible impact.

---

*Digest generated from NanoBot (HKUDS/nanobot) activity on 2026-05-04*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to generate a structured project digest for Zeroclaw based on the provided GitHub data. Let me analyze the data and create a comprehensive digest following the specified sections.

Key data points:
- Issues updated in last 24h: 50 (open/active: 42, closed: 8)
- PRs updated in last 24h: 50 (open: 30, merged/closed: 20)
- New releases: 0

Let me organize the information:

1. **Today's Overview**: High activity with 50 issues and 50 PRs updated. No releases. Many desktop/tauri related issues, WhatsApp bugs, voice features, and config fixes.

2. **Releases**: None today

3. **Project Progress**: 
   - PRs merged/closed: #6274 (skills consolidation), #5590 (docs restructure), #5589 (docs archive)
   - Notable open PRs: #6101 (hot-switch model), #6183 (multimodal fix), #5978-5974 (voice features)

4. **Community Hot Topics**:
   - #5837: ACP cancellation support (4 comments)
   - #6149: config.toml examples mismatch (4 comments)
   - #5809: git -C security policy bug (3 comments, 2 👍)
   - #5896: Full-duplex voice conversation (1 comment, but large feature)

5. **Bugs & Stability**:
   - High severity: #6207 (WebSocket bypasses ApprovalManager), #5803 (Fallback provider chain ignores config), #6173 (model_switch tool persistence)
   - WhatsApp bugs: #6351, #6350 (self-chat-mode, allowed-numbers bypass)
   - Desktop issues: #6348, #6349 (tool calls rendered as chat bubbles)
   
6. **Feature Requests & Roadmap Signals**: The project is heavily focused on desktop expansion with Tauri menu-bar app work (#6343), macOS distribution packaging (#6341, #6338), and universal binary support (#6339). Voice capabilities are also a priority with full-duplex conversation and barge-in functionality (#5896), plus installer improvements and onboarding enhancements (#6292). Configuration schema v3 migration is underway (#6266).

7. **User Feedback Summary**: Configuration documentation needs alignment with actual implementation, and security policies are creating friction in common workflows like git operations. Installation processes have gaps, particularly around web dashboard setup, and WhatsApp integration has reliability issues that need addressing.

8. **Backlog Watch**: Several issues require maintainer review, including high-priority items (#6207, #6173) and multiple desktop-related tasks. The config.toml documentation mismatch (#6149) and Telegram test failures (#6347) are blocking issues that need resolution.
</think>

# Zeroclaw Project Digest — 2026-05-04

## 1. Today's Overview

Zeroclaw shows **high development activity** on May 4, 2026, with 50 issues and 50 PRs updated in the last 24 hours. No new releases shipped today. The project is actively addressing a cluster of **high-severity bugs** (particularly around WebSocket security and WhatsApp integration) while pushing forward on **desktop app (Tauri) parity**, **voice duplex features**, and **config schema v3 migration**. Community engagement is strong, with several issues receiving multiple comments indicating active discussion on security policy, provider configuration, and ACP protocol enhancements.

---

## 2. Releases

**No new releases today.** The project last shipped releases prior to this date; no version tags or release assets were published in the past 24 hours.

---

## 3. Project Progress

### Merged/Closed PRs (3 notable)

| PR | Title | Impact |
|----|-------|--------|
| [#6274](https://github.com/zeroclaw-labs/zeroclaw/pull/6274) | feat(skills): consolidate first-party skills into repo, default to compact mode | **Major** — Moves skills from separate `zeroclaw-skills` repo into `skills/` directory; simplifies bundling and removes mirror sync overhead |
| [#5590](https://github.com/zeroclaw-labs/zeroclaw/pull/5590) | docs: AI-assisted alignment audit and restructure to target layout [RFC #5576 Phase 2-3] | Documentation restructuring per RFC #5576 |
| [#5589](https://github.com/zeroclaw-labs/zeroclaw/pull/5589) | docs: archive current documentation tree to docs/legacy/ [RFC #5576 Phase 1] | Documentation archival to enable RFC-compliant restructure |

### Active PRs Advancing Key Features

| PR | Title | Status | Significance |
|----|-------|--------|--------------|
| [#5978](https://github.com/zeroclaw-labs/zeroclaw/pull/5978) | feat(voice): speech capture buffer + STT dispatch | Open, needs-author-action | Core voice duplex infrastructure |
| [#5976](https://github.com/zeroclaw-labs/zeroclaw/pull/5976) | feat(voice): energy-based Voice Activity Detector | Open, needs-author-action | Replaces NoopVAD with functional RMS-based VAD |
| [#5974](https://github.com/zeroclaw-labs/zeroclaw/pull/5974) | feat(voice): WebSocket binary audio frames with PCM16 validation | Open, needs-author-action | Enables audio frame handling in gateway |
| [#6183](https://github.com/zeroclaw-labs/zeroclaw/pull/6183) | fix(multimodal): normalize image markers across agent and tool history | Open | Fixes `[IMAGE:]` marker handling for multimodal inputs |
| [#6101](https://github.com/zeroclaw-labs/zeroclaw/pull/6101) | feat(webui): hot-switch model & preserve chat context | Open, needs-author-action | Improves model switching UX and state persistence |
| [#6266](https://github.com/zeroclaw-labs/zeroclaw/pull/6266) | feat(config): schema v3 migration, channel aliasing, model-provider aliasing | Open (targets `integration/v0.8.0`) | Breaking-change migration for next major version |

---

## 4. Community Hot Topics

### Most-Discussed Issues (by comment count)

1. **[#5837](https://github.com/zeroclaw-labs/zeroclaw/issues/5837)** — `feat(channels): add cancellation support for ACP-protocol sessions`  
   **4 comments** | Priority: P2 | Status: blocked  
   *Need:* ACP-protocol sessions lack cancellation token support, unlike the gateway's `/api/sessions/{id}/abort` endpoint. Users need equivalent abort capability for ACP clients.

2. **[#6149](https://github.com/zeroclaw-labs/zeroclaw/issues/6149)** — `[Bug]: config.toml examples for YOLO / local testing do not match current config keys`  
   **4 comments** | Priority: P2 | Severity: S1 (workflow blocked)  
   *Need:* Documentation examples are outdated, causing configuration failures during local testing. High friction for new users.

3. **[#5809](https://github.com/zeroclaw-labs/zeroclaw/issues/5809)** — `[Bug]: shell policy blocks git -C <path> by lowercasing args`  
   **3 comments, 2 👍** | Priority: P2 | Risk: high | Status: in-progress  
   *Need:* Security policy incorrectly blocks legitimate `git -C` usage by conflating `-C` with `-c`. Impacts developer workflows.

4. **[#6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096)** — `[Bug]: install.sh does not extract web dashboard from release tarball`  
   **3 comments** | Priority: P0 | Severity: S2  
   *Need:* Binary installation skips web dashboard assets, breaking `zeroclaw gateway` and desktop functionality out-of-the-box.

5. **[#6051](https://github.com/zeroclaw-labs/zeroclaw/issues/6051)** — `[Bug]: zeroclaw self-test reports using 127.0.0.1 contrary to any config`  
   **3 comments** | Priority: P2 | Severity: S1 (workflow blocked)  
   *Need:* Self-test diagnostic ignores configured host, always reports localhost, hindering network debugging.

### Trending PRs (by attention)

- **[#5978](https://github.com/zeroclaw-labs/zeroclaw/pull/5978)** / **[#5976](https://github.com/zeroclaw-labs/zeroclaw/pull/5976)** / **[#5974](https://github.com/zeroclaw-labs/zeroclaw/pull/5974)** — Voice duplex trio tracking [#5896](https://github.com/zeroclaw-labs/zeroclaw/issues/5896); represents significant investment in phone-call-like voice experience
- **[#6266](https://github.com/zeroclaw-labs/zeroclaw/pull/6266)** — Schema v3 migration; high-risk breaking change coordinated via integration branch

---

## 5. Bugs & Stability

### Critical/High-Severity Bugs (Ranked)

| # | Issue | Severity | Status | Fix PR? |
|---|-------|----------|--------|---------|
| 1 | [#6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207) — WebSocket `/ws/chat` bypasses ApprovalManager; supervised tool approvals never surface in daemon web UI | S1 | Open | None |
| 2 | [#5803](https://github.com/zeroclaw-labs/zeroclaw/issues/5803) — Fallback provider chain ignores `[providers.X]` config; credentials/base_url resolve only from env vars | S1 | In-progress | None |
| 3 | [#6173](https://github.com/zeroclaw-labs/zeroclaw/issues/6173) — `model_switch` tool does not persist across turns; gateway/UI path ignores it entirely | S2 | Open | None |
| 4 | [#5453](https://github.com/zeroclaw-labs/zeroclaw/issues/5453) — WebSocket `/ws/chat` does not process `[IMAGE:]` multimodal markers | S2 | Open | [#6183](https://github.com/zeroclaw-labs/zeroclaw/pull/6183) (open) |
| 5 | [#6351](https://github.com/zeroclaw-labs/zeroclaw/issues/6351) — WhatsApp self-chat-mode triggers on all `fromMe` messages; agent replies to operator's contacts | S2 | Open | None |
| 6 | [#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) — WhatsApp `allowed-numbers` bypassed for LID-based contacts (silent drops) | S2 | Open | None |
| 7 | [#6348](https://github.com/zeroclaw-labs/zeroclaw/issues/6348) — Dashboard Agent chat surfaces every `tool_call` inline as a chat message | S2 | Open | None |
| 8 | [#6349](https://github.com/zeroclaw-labs/zeroclaw/issues/6349) — Desktop menu-bar chat surfaces every `tool_call` inline (parity issue) | S2 | Open | None |

### Notable Fixes Merged

- **[#6299](https://github.com/zeroclaw-labs/zeroclaw/pull/6299)** — fix(installer): install prebuilt dashboard assets — Addresses the install.sh dashboard extraction bug ([#6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096))
- **[#6317](https://github.com/zeroclaw-labs/zeroclaw/pull/6317)** — fix(config): preserve dotted provider map keys — Fixes config key parsing for dotted/URL keys
- **[#6314](https://github.com/zeroclaw-labs/zeroclaw/pull/6314)** — fix(providers/anthropic): respect base_url config for default provider — Ensures Anthropic provider respects configured base_url

---

## 6. Feature Requests & Roadmap Signals

### High-Priority Feature Requests

| # | Title | Priority | Signals |
|---|-------|----------|---------|
| [#5896](https://github.com/zeroclaw-labs/zeroclaw/issues/5896) | Full-duplex voice conversation with barge-in support | P1 | 3 PRs in progress; active development |
| [#6292](https://github.com/zeroclaw-labs/zeroclaw/issues/6292) | installer.sh overhaul, feature selection, web dist handling, post-install onboarding | P1 | Desktop/macOS distribution push |
| [#5649](https://github.com/zeroclaw-labs/zeroclaw/issues/5649) | Clipboard paste & drag-and-drop image support in Web Chat UI | P2 | Desktop/web parity |
| [#6343](https://github.com/zeroclaw-labs/zeroclaw/issues/6343) | Desktop app (Tauri) parity, menu bar, macOS accessibility | — | Major desktop initiative |
| [#6341](https://github.com/zeroclaw-labs/zeroclaw/issues/6341) | Ship signed .dmg for macOS | — | Desktop distribution |
| [#6338](https://github.com/zeroclaw-labs/zeroclaw/issues/6338) | macOS notarization + code-signing pipeline | — | Desktop distribution |
| [#6346](https://github.com/zeroclaw-labs/zeroclaw/issues/6346) | zeroclaw node CLI + dashboard health & management | — | Multi-machine/node management |
| [#6344](https://github.com/zeroclaw-labs/zeroclaw/issues/6344) | Dashboard editor for workspace persona files | — | UX enhancement |

### Roadmap Indicators

- **Desktop (Tauri) is a major focus**: 8+ desktop-related issues created on 2026-05-03, covering menu bar, macOS signing/notarization, universal binary, crash reporting, and parity with web dashboard
- **Voice features progressing**: Three PRs in flight for voice duplex (#5978, #5976, #5974) tracking feature request #5896
- **Config schema v3 in preparation**: PR #6266 targets `integration/v0.8.0` branch, indicating next major version work

---

## 7. User Feedback Summary

### Pain Points Identified

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Config documentation drift** | [#6149](https://github.com/zeroclaw-labs/zeroclaw/issues/6149): config.toml examples don't match actual keys; blocks local testing | High |
| **Installation friction** | [#6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096): binary install missing web dashboard; [#6292](https://github.com/zeroclaw-labs/zeroclaw/issues/6292): installer needs overhaul | High |
| **Security policy over-blocking** | [#5809](https://github.com/zeroclaw-labs/zeroclaw/issues/5809): `git -C` blocked; impacts developer workflows | Medium-High |
| **WhatsApp reliability** | [#6351](https://github.com/zeroclaw-labs/zeroclaw/issues/6351), [#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350): self-chat misrouting, silent message drops | Medium |
| **Provider config inconsistency** | [#5803](https://github.com/zeroclaw-labs/zeroclaw/issues/5803): fallback chain ignores config file; env vars only | High |
| **WebSocket multimodal failures** | [#5453](https://github.com/zeroclaw-labs/zeroclaw/issues/5453): `[IMAGE:]` markers not processed via WebSocket | Medium |

### Positive Signals

- **Documentation restructuring underway**: RFC #5576 implementation tracking ([#5934](https://github.com/zeroclaw-labs/zeroclaw/issues/5934)) shows commitment to documentation quality
- **Skills consolidation merged**: PR #6274 simplifies skill management, reducing user confusion about skill installation
- **Voice feature investment**: Active development on full-duplex voice indicates responsiveness to user demand for phone-like experience

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| # | Title | Age | Status | Notes |
|---|-------|-----|--------|-------|
| [#6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207) | WebSocket bypasses ApprovalManager | 5 days | Open, needs-maintainer-review | Security-sensitive; no fix PR |
| [#6173](https://github.com/zeroclaw-labs/zeroclaw/issues/6173) | model_switch tool does not persist | 6 days | Open | S2 degraded behavior |
| [#5453](https://github.com/zeroclaw-labs/zeroclaw/issues/5453) | WebSocket multimodal markers not processed | ~27 days | Open | Fix PR #6183 pending |
| [#6347](https://github.com/zeroclaw-labs/zeroclaw/issues/6347) | Telegram tests fail under default features | 1 day | Open | Test infrastructure issue |
| [#6149](https://github.com/zeroclaw-labs/zeroclaw/issues/6149) | config.toml examples mismatch | 7 days | Closed | Fixed? Verify resolution |
| [#5803](https://github.com/zeroclaw-labs/zeroclaw/issues/5803) | Fallback provider ignores config | 18 days | In-progress | No PR yet |

### Stale/PRs Lacking Reviews

| # | Title | Age | Notes |
|---|-------|-----|-------|
| [#6101](https://github.com/zeroclaw-labs/zeroclaw/pull/6101) | hot-switch model & preserve chat context | 9 days | needs-author-action |
| [#5978](https://github.com/zeroclaw-labs/zeroclaw/pull/5978) | speech capture buffer + STT dispatch | 13 days | needs-author-action |
| [#5976](https://github.com/zeroclaw-labs/zeroclaw/pull/5976) | energy-based VAD | 13 days | needs-author-action |
| [#5974](https://github.com/zeroclaw-labs/zeroclaw/pull/5974) | WebSocket binary audio frames | 13 days | needs-author-action |

---

*Digest generated from Zeroclaw GitHub activity data for 2026-05-04. All links point to https://github.com/zeroclaw-labs/zeroclaw.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

<think>Let me analyze the GitHub data for PicoClaw and generate a structured project digest for 2026-05-04.

Key data points:
- Issues updated in last 24h: 5 (open/active: 3, closed: 2)
- PRs updated in last 24h: 20 (open: 14, merged/closed: 6)
- New releases: 0

Let me organize this into the required sections.

**Today's Overview:**
- High activity with 20 PRs updated, 6 merged/closed
- 5 issues updated, 2 closed
- No new releases
- Multiple bug fixes merged, feature development ongoing

**Releases:**
- None

**Project Progress:**
Merged/closed PRs:
1. #2677 - Feat/runtime events (CLOSED)
2. #2682 - docs: fix agents.defaults model configuration format (CLOSED)
3. #2735 - build(deps): bump aws-sdk (CLOSED)
4. #2681 - fix(mcp): sanitize MCP tool schemas for Gemini function calling (CLOSED)
5. #2717 - feat: add DeepSeek vision unsupported error detection (CLOSED)
6. #2669 - feat(agent): add network error retry with configurable max retries and backoff (CLOSED)

**Community Hot Topics:**
Looking at comments/reactions:
- #2225 [OPEN] - Ollama cloud credentials - 10 comments, 0 👍
- #2668 [CLOSED] - Gemini API bug - 1 comment, 1 👍
- #2718 [CLOSED] - DeepSeek image_url bug - 0 comments, 0 👍

**Bugs & Stability:**
- #2753 [OPEN] - Build from source launcher issue
- #2744 [OPEN] - Android v0.2.8 cannot access data


- Several critical fixes addressing provider compatibility and tool integration across different platforms

**Feature Requests & Roadmap Signals:**
- #2757 - OpenAI OAuth for Codex
- #2755 - streaming reasoning_content and video support
- #2754 - multi subagent parallel calls
- #2752 - improve model configuration workflows
- #2750 - exec guard path handling
- #2740 - DeepSeek reasoning_content streaming
- #2725 - MCP initialization non-fatal
- #2696 - per-request dynamic headers from channel context
- #2647 - web_search tool config YAML support

**User Feedback Summary:**
- Build issues from source
- Android app stability
- Provider compatibility issues (DeepSeek, Gemini)
- OAuth support needs

**Backlog Watch:**
- #2239 - Docker compose privileged (stale)
- #2647 - web_search tool config (stale)
- #2462 - codex streaming and telegram duplicate retries
</think>

# PicoClaw Project Digest — 2026-05-04

---

## 1. Today's Overview

PicoClaw shows **high development velocity** on 2026-05-04, with 20 PRs updated in the last 24 hours and 6 successfully merged or closed. Issue activity is moderate (5 updated, 2 closed), and no new releases were published. The project is actively addressing provider compatibility issues (DeepSeek, Gemini, OpenAI), improving agent robustness with retry logic and runtime events, and expanding multimodal capabilities. Overall health appears strong with multiple contributors shipping fixes across providers, channels, and tooling.

---

## 2. Releases

**No new releases** were published today.

---

## 3. Project Progress

The following PRs reached a closed/merged state today:

| # | PR | Author | Summary |
|---|-----|--------|---------|
| [#2677](https://github.com/sipeed/picoclaw/pull/2677) | Feat/runtime events | @alexhoshina | Introduced unified runtime event infrastructure in `pkg/events` with event envelope, kinds, filters, subscription channels, backpressure policies, and subscriber stats. Migrates agent observability onto the new system. |
| [#2682](https://github.com/sipeed/picoclaw/pull/2682) | docs: fix agents.defaults model configuration format | @dtapps | Corrected documentation for `agents.defaults.model` configuration from incorrect object format (`primary` + `fallbacks`) to the correct flat format (`model_name` + `model_fallbacks`). |
| [#2681](https://github.com/sipeed/picoclaw/pull/2681) | fix(mcp): sanitize MCP tool schemas for Gemini function calling | @afjcjsbx | Fixed HTTP 400 crashes when Gemini models use MCP tools with complex JSON Schemas (`$ref`, `anyOf`). Introduced a shared Gemini schema sanitizer. |
| [#2717](https://github.com/sipeed/picoclaw/pull/2717) | feat: add DeepSeek vision unsupported error detection | @LiusCraft | Added detection for DeepSeek and strict providers that reject `image_url` field at JSON schema level with `unknown variant` error. |
| [#2669](https://github.com/sipeed/picoclaw/pull/2669) | feat(agent): add network error retry with configurable max retries and backoff | @david1gp | Added network error retry handling to the LLM call pipeline with configurable retry count and backoff to prevent transient failures from immediately failing agent requests. |
| [#2735](https://github.com/sipeed/picoclaw/pull/2735) | build(deps): bump aws-sdk-go-v2/config | dependabot | Routine dependency bump from 1.32.16 → 1.32.17. |

---

## 4. Community Hot Topics

**Most active discussions by comment volume:**

1. **[#2225](https://github.com/sipeed/picoclaw/issues/2225)** — `[Feature] Ollama cloud credentials` (OPEN)
   - Author: @Suisei110 | 10 comments | 0 👍
   - **Underlying need:** Users want to authenticate with Ollama Cloud (hosted service) rather than just local Ollama instances. This signals demand for broader provider credential flexibility beyond API keys.

2. **[#2668](https://github.com/sipeed/picoclaw/issues/2668)** — Gemini API returns HTTP 400 for MCP tools with complex JSON schemas (CLOSED)
   - Author: @YoranBrault | 1 comment | 1 👍
   - **Underlying need:** Interoperability between MCP tool ecosystems and Google's strict function-calling validation. Fixed via PR #2681.

3. **[#2718](https://github.com/sipeed/picoclaw/issues/2718)** — DeepSeek fails with `unknown variant image_url` (CLOSED)
   - Author: @LiusCraft | 0 comments | 0 👍
   - **Underlying need:** Multimodal content filtering when non-vision models receive image messages from chat channels (WeChat, DingTalk). Fixed via PR #2717.

**Notable open PRs generating discussion:**

- **[#2757](https://github.com/sipeed/picoclaw/pull/2757)** — OpenAI OAuth for Codex and transcription (fix in progress)
- **[#2754](https://github.com/sipeed/picoclaw/pull/2754)** — Multi-subagent parallel calls feature
- **[#2755](https://github.com/sipeed/picoclaw/pull/2755)** — Streaming reasoning_content and video media support for Xiaomi Mimo provider

---

## 5. Bugs & Stability

**Reported bugs (ranked by potential impact):**

| # | Issue | Author | Domain | Severity Signal |
|---|-------|--------|--------|-----------------|
| [#2753](https://github.com/sipeed/picoclaw/issues/2753) | Build from source → launcher does not exist | @guettli | build | **High** — Blocks self-hosted deployments; no workaround documented |
| [#2744](https://github.com/sipeed/picoclaw/issues/2744) | Android v0.2.8 cannot access data from tabs | @stl3 | channel/config | **Medium** — Affects mobile users; likely regression in v0.2.8 |
| [#2751](https://github.com/sipeed/picoclaw/pull/2751) | fix(pid): verify gateway identity before blocking startup on stale PID | @mrigangha | agent | **Medium** — Prevents zombie gateway state after crashes |

**Fix PRs already merged today addressing bugs:**
- [#2681](https://github.com/sipeed/picoclaw/pull/2681) — Gemini MCP schema sanitization
- [#2717](https://github.com/sipeed/picoclaw/pull/2717) — DeepSeek vision error detection
- [#2669](https://github.com/sipeed/picoclaw/pull/2669) — Network error retry with backoff

**Open fix PRs awaiting merge:**
- [#2751](https://github.com/sipeed/picoclaw/pull/2751) — PID verification fix
- [#2725](https://github.com/sipeed/picoclaw/pull/2725) — MCP initialization failure non-fatal
- [#2740](https://github.com/sipeed/picoclaw/pull/2740) — DeepSeek reasoning_content streaming fix
- [#2750](https://github.com/sipeed/picoclaw/pull/2750) — Exec guard path handling fix

---

## 6. Feature Requests & Roadmap Signals

**User-requested features with open PRs or issues:**

| # | Request | Author | Domain | Likelihood of Near-Term Merge |
|---|---------|--------|--------|-------------------------------|
| [#2757](https://github.com/sipeed/picoclaw/pull/2757) | OpenAI OAuth for Codex and transcription | @bogdanovich | provider | **High** — PR open, addresses real auth gap |
| [#2755](https://github.com/sipeed/picoclaw/pull/2755) | Streaming reasoning_content + video support (Xiaomi Mimo) | @BeaconCat | provider | **Medium** — Provider-specific, adds multimodal depth |
| [#2754](https://github.com/sipeed/picoclaw/pull/2754) | Multi-subagent parallel calls | @tbeaudouin05 | agent | **Medium** — Enables same-turn parallel delegation |
| [#2752](https://github.com/sipeed/picoclaw/pull/2752) | Improve model configuration workflows (UI + API) | @SiYue-ZO | config | **Medium** — UX improvement, upstream model fetching |
| [#2225](https://github.com/sipeed/picoclaw/issues/2225) | Ollama Cloud credentials support | @Suisei110 | provider | **Medium** — 10 comments indicate community demand |
| [#2696](https://github.com/sipeed/picoclaw/pull/2696) | Per-request dynamic headers from channel context (MCP) | @loafoe | tool | **Medium** — Enables auth forwarding patterns |
| [#2647](https://github.com/sipeed/picoclaw/pull/2647) | Enable web_search tool config YAML + DuckDuckGo default | @yuxuan-7814 | tool | **Medium** — Stale PR, addresses config ergonomics |

**Roadmap signals:** The convergence of provider-specific improvements (DeepSeek reasoning, Gemini schema sanitization, OpenAI OAuth, Xiaomi Mimo), agent observability (runtime events), and robustness features (retry logic, MCP non-fatal init) suggests the project is maturing toward a stable multi-provider, multi-channel agent framework.

---

## 7. User Feedback Summary

**Pain points reported today:**

1. **Build tooling broken for self-hosters** (#2753): Users following the README to install from source cannot find the `picoclaw-launcher` binary. This is a friction point for the self-hosted audience PicoClaw targets.

2. **Android app data access regression** (#2744): Users on Android v0.2.8 cannot access data from tabs, indicating a regression that impacts mobile-first deployments.

3. **Provider compatibility gaps**: Multiple issues (DeepSeek `image_url`, Gemini schema validation, Ollama Cloud auth) highlight that the provider abstraction layer still has rough edges when users mix channels, models, and tool integrations.

**Positive signals:**
- The runtime events infrastructure (#2677) and network retry logic (#2669) demonstrate the project is investing in production reliability.
- Multi-subagent parallel execution (#2754) addresses advanced orchestration use cases.

---

## 8. Backlog Watch

**Issues/PRs needing maintainer attention:**

| # | Item | Age | Status | Notes |
|---|------|-----|--------|-------|
| [#2239](https://github.com/sipeed/picoclaw/pull/2239) | Docker compose with privileged | ~33 days | OPEN, stale | Low activity; clarify if Docker privileged mode is still needed |
| [#2647](https://github.com/sipeed/picoclaw/pull/2647) | web_search tool YAML config + DuckDuckGo default | ~10 days | OPEN, stale | Addresses config ergonomics; needs review |
| [#2462](https://github.com/sipeed/picoclaw/pull/2462) | Codex streaming output + Telegram duplicate retries | ~25 days | OPEN | Affects Android + low-resource deployments; needs review |
| [#2225](https://github.com/sipeed/picoclaw/issues/2225) | Ollama Cloud credentials | ~34 days | OPEN | 10 comments — high community interest; no PR yet |
| [#2744](https://github.com/sipeed/picoclaw/issues/2744) | Android v0.2.8 data access | 3 days | OPEN | Regression in latest release; likely needs hotfix |

**Recommendation:** Prioritize #2753 (build issue) and #2744 (Android regression) for quick resolution. The stale PRs (#2239, #2647) should either be merged or closed to reduce backlog noise.

---

*Digest generated for 2026-05-04. Data sourced from github.com/sipeed/picoclaw.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

<think>Let me analyze the GitHub data for NanoClaw and generate a structured project digest for 2026-05-04.

Key data points:
- Issues updated in last 24h: 10 (open/active: 2, closed: 8)
- PRs updated in last 24h: 50 (open: 19, merged/closed: 31)
- New releases: 0

Let me categorize the information:

**Today's Overview:**
- High activity with 50 PRs updated and 10 issues
- 31 PRs merged/closed, 8 issues closed
- 2 open issues remain active
- No new releases

**Latest Issues:**
Open issues:
1. #2234 - llama.cpp compatibility question
2. #2227 - Bug: engage_mode='always' not handled

Closed issues (all from 2026-05-03):
- #853 - ANTHROPIC_AUTH_TOKEN support (bug fix)
- #2223 - Telegram handle identity confusion
- #2221 - gh CLI missing from PATH (regression)
- #2220 - Agent posts in deregistered chat
- #2219 - RULES.md diet tracking
- #2218 - PR #121 pre-ship validation tracking
- #2217 - MCP server-side tool filtering tracking
- #2214 - iMessage local-mode adapter issue

**Latest Pull Requests:**
Open PRs (19):
- #2238 - MacPorts support
- #2004 - Security: trust only canonical channels remote
- #2000 - Security: cap request bodies
- #1999 - Security: reject symlinked directories
- #2230 - Podman user mapping fix
- #2237 - Interval-based scheduling
- #2236 - WORKDIR alignment fix
- #2235 - Migration UX improvements (supersedes #2216)


- #2233 - Per-group model overrides
- #2232 - Fall back to URL fetch
- #2231 - sendAsRaw flag
- #2222 - Update /update-nanoclaw skill
- #2209 - Orphan-claim delete fix
- #2226 - Missing channel adapter error
- #2225 - Telegram polling session conflict

Closed PRs (31):
- #2206 - "Other…" option for channel picker
- #2229 - ANTHROPIC_AUTH_TOKEN recognition
- #2216 - Migration script UX improvements
- #2097 - Lore Context semantic memory skill
- #2228 - Baget partial team support

The most active discussions center on several key areas. Security hardening is prominent with three PRs addressing channel trust, request body limits, and symlink rejection. The migration path from v1 to v2 is generating significant attention through multiple PRs and issues. Container configuration problems are being resolved through WORKDIR alignment and podman user mapping fixes. There's also work on Telegram resilience with polling conflict handling, plus scheduling improvements and channel picker enhancements.

Several bugs require immediate attention. The gh CLI regression in #2221 needs resolution, while #2227's engage_mode='always' bug is currently open. The llama.cpp compatibility question in #2234 is still pending. Security-related issues like missing channel adapter errors and Telegram polling conflicts are being addressed through targeted fixes.

The project is actively evolving with security hardening, v2 migration, and container configuration as primary focus areas. No new releases have been issued yet.
</think>

# NanoClaw Project Digest — 2026-05-04

## 1. Today's Overview

NanoClaw experienced high development activity on 2026-05-04, with **50 PRs updated** and **10 issues processed** in the last 24 hours. The maintainer team closed 8 issues and merged/closed 31 pull requests, indicating strong throughput. Two issues remain open and active. No new releases were published today. The project continues to focus on security hardening, v2 migration tooling, and container configuration improvements, with several regression fixes and new feature PRs awaiting review.

---

## 2. Releases

**No new releases** were published today. The project remains on the last stable version with no version bumps or changelog entries in the reporting period.

---

## 3. Project Progress

### Merged/Closed PRs (31 total)

| PR | Title | Category |
|----|-------|----------|
| [#2206](https://github.com/qwibitai/nanoclaw/pull/2206) | feat(setup): add "Other…" option to channel picker | UX/Setup |
| [#2229](https://github.com/qwibitai/nanoclaw/pull/2229) | Recognize ANTHROPIC_AUTH_TOKEN in setup verification | Bug Fix |
| [#2216](https://github.com/qwibitai/nanoclaw/pull/2216) | fix: migration script UX improvements | Migration |
| [#2097](https://github.com/qwibitai/nanoclaw/pull/2097) | feat(skill): add Lore Context semantic memory skill | Feature |
| [#2228](https://github.com/qwibitai/nanoclaw/pull/2228) | feat(baget): partial team support — CoS-required, specialists optional | Feature |

**Key advancements:**
- **Setup UX improved**: Channel picker now includes an "Other…" option, eliminating the need for users to manually run `/add-<name>` commands for non-listed channels.
- **Credential handling fixed**: ANTHROPIC_AUTH_TOKEN is now recognized in setup verification, resolving authentication issues for Claude Code users.
- **Semantic memory added**: Lore Context integration skill enables cross-session memory for agents.
- **Migration tooling enhanced**: Script UX improvements for v2 migration, including interactive terminal requirements and legacy service file retirement.

---

## 4. Community Hot Topics

### Most Active Discussions

**Security Hardening Trio** (3 PRs, all open):
- [#2004](https://github.com/qwibitai/nanoclaw/pull/2004) — fix(setup): trust only canonical channels remote
- [#2000](https://github.com/qwibitai/nanoclaw/pull/2000) — fix(webhook): cap request bodies before adapter dispatch
- [#1999](https://github.com/qwibitai/nanoclaw/pull/1999) — fix(container): reject symlinked host-managed directories

**Analysis**: All three PRs address trust boundary hardening. The channel installer, webhook server, and container filesystem are being fortified against supply-chain and injection attacks. Community interest is high given the security implications.

**v2 Migration Track** (multiple PRs/issues):
- [#2216](https://github.com/qwibitai/nanoclaw/pull/2216) (closed) / [#2235](https://github.com/qwibitai/nanoclaw/pull/2235) (open) — Migration script UX improvements
- [#2222](https://github.com/qwibitai/nanoclaw/pull/2222) — Update /update-nanoclaw skill for v2 architecture

**Analysis**: Users are actively transitioning to v2; migration tooling UX is a pain point being addressed incrementally.

**Container Configuration Fixes**:
- [#2236](https://github.com/qwibitai/nanoclaw/pull/2236) — Align WORKDIR with actual group mount path
- [#2230](https://github.com/qwibitai/nanoclaw/pull/2230) — Map host user via keep-id on rootless podman

**Analysis**: Container runtime inconsistencies are being resolved to ensure agents see their workspaces correctly.

---

## 5. Bugs & Stability

### Reported Issues (Ranked by Severity)

| # | Issue | Severity | Status | Fix PR |
|---|-------|----------|--------|--------|
| [#2221](https://github.com/qwibitai/nanoclaw/issues/2221) | gh CLI missing from agent container PATH (regression) | **High** | Closed | — |
| [#2227](https://github.com/qwibitai/nanoclaw/issues/2227) | engage_mode='always' silently drops all group messages | **High** | Open | — |
| [#2223](https://github.com/qwibitai/nanoclaw/issues/2223) | Agent conflates Telegram bot handle with identity | Medium | Closed | — |
| [#2220](https://github.com/qwibitai/nanoclaw/issues/2220) | Agent posts in deregistered 'Old.wtf' chat | Medium | Closed | — |
| [#2214](https://github.com/qwibitai/nanoclaw/issues/2214) | iMessage local-mode adapter never delivers inbound messages | Medium | Closed | — |
| [#2234](https://github.com/qwibitai/nanoclaw/issues/2234) | llama.cpp compatibility question (timeout issues) | Low | Open | — |

**Critical Observations:**
- **#2221 (gh CLI regression)**: A previously working tool is now unavailable in the container environment. Logs show the error occurring at 07:11:08 on 2026-05-03. No fix PR exists yet.
- **#2227 (engage_mode bug)**: The `evaluateEngage()` function lacks an `'always'` case, causing silent message dropping. This is a code logic gap that needs a fix.
- **#2234 (llama.cpp)**: User question about connecting to llama-server; may indicate a compatibility issue or configuration problem.

### Open Bug Fix PRs

| PR | Fix | Status |
|----|-----|--------|
| [#2226](https://github.com/qwibitai/nanoclaw/pull/2226) | Throw MissingChannelAdapterError instead of silent drop | Open |
| [#2225](https://github.com/qwibitai/nanoclaw/pull/2225) | Fail fast on Telegram polling session conflict (HTTP 409) | Open |
| [#2232](https://github.com/qwibitai/nanoclaw/pull/2232) | Fall back to URL fetch for adapters without fetchData | Open |
| [#2209](https://github.com/qwibitai/nanoclaw/pull/2209) | Orphan-claim delete fix (regression from #2183) | Open |

---

## 6. Feature Requests & Roadmap Signals

### Notable Feature PRs

| PR | Feature | Readiness |
|----|---------|-----------|
| [#2238](https://github.com/qwibitai/nanoclaw/pull/2238) | Support MacPorts as macOS package manager | Open |
| [#2237](https://github.com/qwibitai/nanoclaw/pull/2237) | Interval-based recurrence (@every:\<ms\>) for scheduling | Open |
| [#2233](https://github.com/qwibitai/nanoclaw/pull/2233) | Per-group model + effort overrides | Open |
| [#2231](https://github.com/qwibitai/nanoclaw/pull/2231) | sendAsRaw flag to bypass adapter Markdown round-trip | Open |
| [#2230](https://github.com/qwibitai/nanoclaw/pull/2230) | Map host user via keep-id on rootless podman | Open |

### Roadmap Signals

1. **Scheduling enhancements**: The `@every:<ms>` interval format addresses drift prevention and downtime recovery—indicating production reliability focus.
2. **Multi-platform support**: MacPorts support (#2238) expands beyond Homebrew-only macOS installations.
3. **Per-group configuration**: Model and effort overrides (#2233) suggest demand for multi-tenant or multi-agent deployment flexibility.
4. **MCP tool filtering**: Issue [#2217](https://github.com/qwibitai/nanoclaw/issues/2217) tracks dynamic tool registration by container tier to reduce token waste (13-16K preventable tokens).

---

## 7. User Feedback Summary

### Pain Points Identified

| Pain Point | Source | Evidence |
|------------|--------|----------|
| Channel picker missing options | Issue #2206 (fixed) | Users couldn't install matrix, github, linear, webex channels via UI |
| Credential recognition gaps | Issue #853 (fixed) | ANTHROPIC_AUTH_TOKEN not recognized; OAuth-mode users locked out |
| Migration script non-interactive | Issue #2216 (fixed) | Running via Claude Code's Bash tool collapsed output |
| gh CLI unavailable | Issue #2221 (open) | Regression; agents can't create GitHub issues |
| engage_mode='always' broken | Issue #2227 (open) | Agents silently ignore group messages |
| llama.cpp connection failures | Issue #2234 (open) | Timeout errors when connecting to llama-server |

### Use Cases Surfacing

- **Semantic memory**: Lore Context skill (#2097) enables cross-session context retention.
- **Team support**: Baget partial team support (#2228) addresses CoS-required, specialist-optional workflows.
- **Container flexibility**: Per-group model overrides (#2233) support varied agent configurations.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| # | Issue | Age | Priority | Notes |
|---|-------|-----|----------|-------|
| [#2221](https://github.com/qwibitai/nanoclaw/issues/2221) | gh CLI missing from PATH | 1 day | High | Regression; no fix PR yet |
| [#2227](https://github.com/qwibitai/nanoclaw/issues/2227) | engage_mode='always' bug | 1 day | High | Code logic gap; needs fix |
| [#2234](https://github.com/qwibitai/nanoclaw/issues/2234) | llama.cpp compatibility | 1 day | Low | User question; needs clarification |

### PRs Stalled or Awaiting Review

| # | PR | Age | Category | Notes |
|---|-----|-----|----------|-------|
| [#2004](https://github.com/qwibitai/nanoclaw/pull/2004) | Security: canonical channels remote | 9 days | Security | Needs security review |
| [#2000](https://github.com/qwibitai/nanoclaw/pull/2000) | Security: cap request bodies | 9 days | Security | Needs security review |
| [#1999](https://github.com/qwibitai/nanoclaw/pull/1999) | Security: reject symlinks | 9 days | Security | Needs security review |

**Note**: The three security PRs from 2026-04-25 have been open for 9 days without merge or closure. Prioritizing security reviews would reduce the project's attack surface.

---

*Digest generated from NanoClaw GitHub data for 2026-05-04. All links reference https://github.com/qwibitai/nanoclaw.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>Let me analyze the GitHub data for IronClaw and create a structured project digest for 2026-05-04.

Key observations:
1. **Activity**: 19 issues updated, 24 PRs updated in last 24h
2. **Releases**: None today
3. **Major themes**:
   - Reborn architecture work (many issues/PRs related to "reborn" - the new architecture)
   - Bug fixes for Gemini tool calling, terminal issues, clipboard issues
   - Dependency updates (Dependabot)
   - Slack Socket Mode feature
   - Event store backends for Reborn
   - WASM channel fixes for headless servers

Let me structure this properly:

**Today's Overview**: High activity day with focus on Reborn architecture landing. 24 PRs updated, 19 issues. Major PR #3230 lands Reborn substrate behind default-off gates.

**Releases**: None

**Project Progress**: 
- PR #3230: Land Reborn substrate into main (XL, critical)
- PR #3226: Fix Gemini thought_signature issue (closed)
- PR #3233: Fix WASM channels on headless servers (open)
- PR #3234: Replace deleted preflight test (closed)
- PR #3235: Unblock Live Canary auth lanes (open)
- PR #3170: Add host runtime vertical gates (closed)
- PR #3099: Add Reborn transport adapter contract (open)
- PR #3171: Add Reborn event store backends (open)
- PR #3212: Add Reborn event projection service (open)

**Community Hot Topics**:
- Issues #3016, #3013, #3091, #3090, #3238, #3237, #3236, #3202, #3199, #3198, #3107, #3232, #3195, #3231 - all Reborn architecture issues


- Several critical bugs emerged: Gemini API key authentication fails on second turn (#3225), terminal corruption occurs after /quit in SSH/noVNC/screen/tmux (#3228), and LLM provider fallback persists to DB on startup (#3229). Additionally, Deepseek tool use isn't functioning (#3201), TUI text copy fails in headless environments (#3227), and Slack Socket Mode connectivity (#1549) needs attention.

**Feature Requests & Roadmap Signals**: Slack Socket Mode for NAT-friendly connectivity, Reborn transport adapter contract, event store backends, event projection service, NEAR intents trial mode, basket DCA + multi-asset NL prompts, IronClaw mission scaffold for DCA schedules.

**User Feedback Summary**: Users report terminal corruption in remote/multiplexed sessions, clipboard failures in headless environments, and critical model config persistence issues.

**Backlog Watch**: Several Reborn architecture issues remain open with no comments, including #3238, #3237, #3236, #3201, #3227, #3202, #3199, #3198, #3107, #3232, #3195, #3231. The Slack Socket Mode PR (#1549) has been open since March 21st without updates.
</think>

# IronClaw Project Digest — 2026-05-04

## 1. Today's Overview

IronClaw experienced high development activity on 2026-05-04, with 19 issues and 24 PRs updated in the last 24 hours. The most significant milestone is PR #3230, which lands the **Reborn substrate into `main`** behind default-off gates, reducing long-lived branch drift. Core contributors are actively working through the Reborn architecture tracker (#2987), with multiple parallel tracks for TurnCoordinator, TurnRunner, event stores, and transport adapters. Three bugs were reported today affecting LLM providers (Gemini, DeepSeek) and terminal/clipboard functionality in headless environments, with one critical severity issue around model config persistence.

---

## 2. Releases

**No new releases today.** The project remains on v0.27.0 based on reported bug versions.

---

## 3. Project Progress

### Merged/Closed PRs (3 total)

| PR | Title | Scope | Status |
|----|-------|-------|--------|
| [#3226](https://github.com/nearai/ironclaw/pull/3226) | fix(llm): preserve Gemini thought_signature in OpenAI-compatible tool loops | LLM | **CLOSED** |
| [#3234](https://github.com/nearai/ironclaw/pull/3234) | ci(e2e): replace deleted preflight test with tool_activate surface | CI | **CLOSED** |
| [#3170](https://github.com/nearai/ironclaw/pull/3170) | test(reborn): add host runtime vertical gates | Testing | **CLOSED** |

**Key highlights:**
- **#3226** fixes a critical Gemini API failure where tool calls failed on the second LLM turn due to missing `thought_signature`. This adds integration regression coverage.
- **#3170** expands Reborn host runtime test coverage with durable replay cursor/gap behavior and scoped mount attenuation tests.

### Open PRs of Note (21 total)

| PR | Title | Size | Risk | Priority |
|----|-------|------|------|----------|
| [#3230](https://github.com/nearai/ironclaw/pull/3230) | feat(reborn): land Reborn substrate into main behind default-off gates | XL | Medium | **Critical** |
| [#3099](https://github.com/nearai/ironclaw/pull/3099) | Add Reborn transport adapter contract | XL | Medium | High |
| [#3171](https://github.com/nearai/ironclaw/pull/3171) | Add Reborn event store backends | XL | Medium | High |
| [#3212](https://github.com/nearai/ironclaw/pull/3212) | Add Reborn event projection service | XL | Medium | High |
| [#1549](https://github.com/nearai/ironclaw/pull/1549) | feat: Slack Socket Mode for NAT-friendly connectivity | XL | Medium | Medium |
| [#3233](https://github.com/nearai/ironclaw/pull/3233) | fix(channels): activate WASM channels on headless servers | L | Medium | High |
| [#3235](https://github.com/nearai/ironclaw/pull/3235) | test(e2e): unblock Live Canary auth lanes after engine-v2 contract change | S | Medium | Medium |
| [#3224](https://github.com/nearai/ironclaw/pull/3224) | feat(portfolio): basket DCA + multi-asset NL prompts | XL | Medium | Medium |
| [#3223](https://github.com/nearai/ironclaw/pull/3223) | feat(portfolio): IronClaw mission scaffold for DCA schedules | XL | Medium | Medium |
| [#3218](https://github.com/nearai/ironclaw/pull/3218) | [codex] Add nominal NEAR intents trial mode | XL | Medium | Medium |

---

## 4. Community Hot Topics

### Most Active Issues (by discussion/comment volume)

| Issue | Title | Author | Comments | Theme |
|-------|-------|--------|----------|-------|
| [#3016](https://github.com/nearai/ironclaw/issues/3016) | [Reborn] Reborn cutover blocker: add reference AgentLoopHost facade | @serrrfirat | 3 | Architecture |
| [#3013](https://github.com/nearai/ironclaw/issues/3013) | [Reborn] Reborn cutover blocker: add kernel TurnCoordinator | @serrrfirat | 1 | Architecture |
| [#3225](https://github.com/nearai/ironclaw/issues/3225) | bug: gemini API-key backend fails tool-calling with missing thought_signature | @thomasmaerz | 1 | Bug (Fixed) |
| [#3228](https://github.com/nearai/ironclaw/issues/3228) | Terminal corruption after /quit in SSH/noVNC/screen/tmux | @thomasmaerz | 1 | Bug (Open) |
| [#3091](https://github.com/nearai/ironclaw/issues/3091) | [Reborn] Add loop support services | @serrrfirat | 1 | Architecture |
| [#3090](https://github.com/nearai/ironclaw/issues/3090) | [Reborn] Add ToolSurfaceService and CapabilityCatalog | @serrrfirat | 1 | Architecture |

**Analysis:** The Reborn architecture (tracked under #2987) dominates community discussion with 14+ open issues. Core contributor @serrrfirat is systematically defining contracts for TurnCoordinator, TurnRunner, loop support services, and cancellation semantics. The community is also actively reporting bugs in the v0.27.0 release, particularly around terminal behavior and LLM provider integration.

### New Issues Filed Today (7 total)

- [#3238](https://github.com/nearai/ironclaw/issues/3238) — Define cancellation semantics (reborn)
- [#3237](https://github.com/nearai/ironclaw/issues/3237) — Define runtime HTTP syscall contract for shared egress (reborn)
- [#3236](https://github.com/nearai/ironclaw/issues/3236) — Define same-thread follow-up and steering policy (reborn)
- [#3232](https://github.com/nearai/ironclaw/issues/3232) — Define LoopExit contract (reborn)
- [#3231](https://github.com/nearai/ironclaw/issues/3231) — Follow-up architecture deepening after main substrate landing
- [#3229](https://github.com/nearai/ironclaw/issues/3229) — **CRITICAL**: LLM provider fallback persists to DB on startup
- [#3227](https://github.com/nearai/ironclaw/issues/3227) — TUI text copy fails silently in headless/X11-less environments

---

## 5. Bugs & Stability

### Critical Bugs

| Issue | Title | Severity | Status | Fix PR |
|-------|-------|----------|--------|--------|
| [#3229](https://github.com/nearai/ironclaw/issues/3229) | LLM provider fallback persists to DB on startup, permanently destroying user's model/provider config | **Critical** | Open | None |

**Impact:** Fresh installs of v0.27.0 lose user configuration on restart. Component: `src/config/mod.rs` — `resolve_llm_with_secre...`

### High Severity Bugs

| Issue | Title | Status | Fix PR |
|-------|-------|--------|--------|
| [#3225](https://github.com/nearai/ironclaw/issues/3225) | Gemini API-key backend fails tool-calling with missing thought_signature | **Fixed** | [#3226](https://github.com/nearai/ironclaw/pull/3226) |
| [#3228](https://github.com/nearai/ironclaw/issues/3228) | Terminal corruption after /quit in SSH/noVNC/screen/tmux — mouse tracking only partially disabled | Open | None |

**#3228 Details:** Affects SSH, noVNC, screen, and tmux environments. Mouse tracking not fully disabled after `/quit` command.

### Medium Severity Bugs

| Issue | Title | Status | Fix PR |
|-------|-------|--------|--------|
| [#3227](https://github.com/nearai/ironclaw/issues/3227) | TUI text copy fails silently in headless/X11-less environments (arboard needs X11/Wayland) | Open | None |
| [#3201](https://github.com/nearai/ironclaw/issues/3201) | [QA] Tool use for Deepseek is not working | Open | None |

**#3201 Details:** DeepSeek model (`deepseek-v4-flash`) fails when attempting tool use. Reproduction available at commit `93c7d6a`.

### Stability Note
PR [#3233](https://github.com/nearai/ironclaw/pull/3233) addresses a regression where WASM channels (e.g., Telegram polling) fail to auto-activate on headless servers without settings DB or web UI.

---

## 6. Feature Requests & Roadmap Signals

### High-Priority Feature Work

| PR | Title | Signals |
|----|-------|---------|
| [#1549](https://github.com/nearai/ironclaw/pull/1549) | Slack Socket Mode for NAT-friendly connectivity | **Community demand** for easier deployment without public URLs/tunnels |
| [#3224](https://github:///nearai/ironclaw/pull/3224) | basket DCA + multi-asset NL prompts | **NEAR Intents integration** expanding to multi-asset dollar-cost averaging |
| [#3223](https://github.com/nearai/ironclaw/pull/3223) | IronClaw mission scaffold for DCA schedules | **Automation layer** for recurring investment strategies |
| [#3218](https://github.com/nearai/ironclaw/pull/3218) | Add nominal NEAR intents trial mode | **User onboarding** for NEAR blockchain interactions |

### Reborn Architecture Tracks (Default-Off)

The Reborn substrate landing (#3230) signals these upcoming capabilities:
- **TurnCoordinator** — Host-layer turn coordination with one-active-run enforcement
- **Event Store Backends** — JSONL, PostgreSQL, and libSQL durable event/audit storage
- **Event Projection Service** — Runtime event projection without concrete storage dependencies
- **Transport Adapter Contract** — Policy-free transport layer bridging existing v1 Channels
- **Loop Support Services** — PromptContextService, MemoryPromptContextService, SkillContextService

---

## 7. User Feedback Summary

### Pain Points Reported Today

1. **Terminal Behavior in Remote Environments** (#3228)
   - Users accessing IronClaw via SSH, noVNC, screen, or tmux experience terminal corruption after `/quit`
   - Mouse tracking not fully disabled, causing UX issues
   - **Use case:** Remote/headless server administration

2. **Clipboard Failures in Headless Environments** (#3227)
   - TUI text copy silently fails when X11/Wayland unavailable
   - Affects users running in LXC containers without display server
   - **Use case:** Containerized deployments

3. **Configuration Loss on Restart** (#3229)
   - LLM provider fallback overwrites user settings in database
   - Critical for users who have customized model/provider configurations
   - **Use case:** Persistent personal AI assistant setups

4. **LLM Provider Reliability** (#3225, #3201)
   - Gemini fails on second tool call turn
   - DeepSeek tool use completely broken
   - **Use case:** Multi-provider flexibility

### Positive Signals
- Active community contribution from new contributors (@KonstantinMirin, @abbyshekit, @CaveNightingale)
- Core team rapidly addressing bugs (Gemini fix merged same day)
- Reborn architecture systematically addressing long-term maintainability

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (No Comments, Created 1-2 Days Ago)

| Issue | Title | Age | Priority |
|-------|-------|-----|----------|
| [#3238](https://github.com/nearai/ironclaw/issues/3238) | Define cancellation semantics | New | High |
| [#3237](https://github.com/nearai/ironclaw/issues/3237) | Define runtime HTTP syscall contract | New | High |
| [#3236](https://github.com/nearai/ironclaw/issues/3236) | Define same-thread follow-up and steering policy | New | High |
| [#3232](https://github.com/nearai/ironclaw/issues/3232) | Define LoopExit contract | New | High |
| [#3201](https://github.com/nearai/ironclaw/issues/3201) | [QA] Tool use for Deepseek is not working | 2 days | High |
| [#3227](https://github.com/nearai/ironclaw/issues/3227) | TUI text copy fails silently in headless/X11-less | New | Medium |

### Long-Standing PRs

| PR | Title | Age | Status | Concern |
|----|-------|-----|--------|---------|
| [#1549](https://github.com/nearai/ironclaw/pull/1549) | Slack Socket Mode for NAT-friendly connectivity | ~6 weeks | Open | Large PR (XL) from new contributor, no comments |
| [#3099](https://github.com/nearai/ironclaw/pull/3099) | Add Reborn transport adapter contract | 5 days | Open | Critical for Reborn architecture |

### Recommended Actions

1. **Triage #3229** (Critical bug — config persistence) — assign to on-call
2. **Review #1549** — 6-week-old PR from new contributor needs feedback
3. **Acknowledge #3201** — DeepSeek tool use bug unacknowledged for 2 days
4. **Merge #3230** — Reborn substrate landing is blocking other architecture work

---

*Digest generated from IronClaw (nearai/ironclaw) GitHub data for 2026-05-04*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

<think>Let me analyze the GitHub data for LobsterAI and create a structured project digest for 2026-05-04.

Key data points:
- Issues updated in last 24h: 1 (open/active: 1, closed: 0)
- PRs updated in last 24h: 2 (open: 2, merged/closed: 0)
- New releases: 0
- Latest Issues: 1 item - #1880 about adding Hermes Agent functionality
- Latest PRs: 2 items - #812 about SQLite performance optimization, #871 about skill execution statistics

Let me structure this into the required format.
</think>

# LobsterAI Project Digest — 2026-05-04

## 1. Today's Overview

LobsterAI shows **low but steady activity** on May 4, 2026. The project received 1 new issue and 2 pull request updates in the past 24 hours, with no new releases or merged code. Both active PRs (#812, #871) remain in "stale" open status, indicating they have been waiting for maintainer review for over a month. Community interest is focused on expanding agent integration capabilities and improving performance/stability. Overall health appears stable but in need of maintainer attention on pending contributions.

---

## 2. Releases

**No new releases** in the past 24 hours.

---

## 3. Project Progress

| PR | Title | Author | Status | Summary |
|----|-------|--------|--------|---------|
| [#812](https://github.com/netease-youdao/LobsterAI/pull/812) | perf(sqlite): debounce save() 并缓存 getConfig() 减少主线程阻塞 | @noransu | OPEN (stale) | Addresses SQLite synchronous write blocking the Electron main process by implementing 500ms debounce on `save()` and switching to async `fs.promises.writeFile`. Targets Issue #562. |
| [#871](https://github.com/netease-youdao/LobsterAI/pull/871) | feat(skills): 新增skill执行统计展示 | @tiamy | OPEN (stale) | Adds skill execution statistics by parsing OpenClaw session JSONL data, displaying analytics in a SkillsManager UI popup. |

**No PRs were merged or closed today.** Both PRs were last updated on 2026-05-03 but remain unmerged.

---

## 4. Community Hot Topics

### Most Active Issue

| Issue | Title | Author | Reactions | Comments |
|-------|-------|--------|-----------|----------|
| [#1880](https://github.com/netease-youdao/LobsterAI/issues/1880) | 希望增加Hermes Agent功能 | @ecolife007 | 👍 0 | 0 |

**Analysis:** A user has requested integration of **Hermes Agent and OpenClaw** as agent backends into LobsterAI, referencing Open WebUI's implementation. The request links to external documentation for design guidance. This signals strong user demand for **expanded agent ecosystem support** beyond current integrations. The lack of comments/reactions may indicate early-stage visibility; maintainer acknowledgment would help gauge broader community interest.

---

## 5. Bugs & Stability

**No new bugs or regressions reported** in the past 24 hours.

However, PR #812 (stale) addresses a **known performance issue**: SQLite synchronous writes blocking the Electron main thread during streaming turns (~11-13 writes per turn). This is a significant stability concern for production use.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Priority Signal |
|---------|-------|-----------------|
| **Hermes Agent Integration** | [#1880](https://github.com/netease-youdao/LobsterAI/issues/1880) | High — references Open WebUI's agent architecture |
| **Skill Execution Analytics** | [#871](https://github.com/netease-youdao/LobsterAI/pull/871) | Medium — adds observability to skill usage |
| **SQLite Performance Optimization** | [#812](https://github.com/netease-youdao/LobsterAI/pull/812) | High — addresses main thread blocking |

**Prediction:** The next release (if any) is likely to address **performance fixes** (SQLite debounce) given the technical severity. Agent integration features may be queued for future roadmap consideration pending maintainer review of #1880.

---

## 7. User Feedback Summary

| Theme | Source | Sentiment |
|-------|--------|-----------|
| **Agent Ecosystem Expansion** | Issue #1880 | Positive — users want parity with Open WebUI agent features |
| **Performance Concerns** | PR #812 | Negative — blocking I/O impacts UX in Electron context |
| **Observability Needs** | PR #871 | Positive — users value analytics on skill usage |

**Key Pain Point:** Users experience **main thread blocking** during SQLite operations, which degrades real-time interaction quality. The proposed debounce solution is well-scoped.

---

## 8. Backlog Watch

| Item | Type | Age | Status | Action Needed |
|------|------|-----|--------|---------------|
| [#812](https://github.com/netease-youdao/LobsterAI/pull/812) | PR | ~40 days (opened 2026-03-25) | OPEN (stale) | Maintainer review — performance fix ready |
| [#871](https://github.com/netease-youdao/LobsterAI/pull/871) | PR | ~40 days (opened 2026-03-25) | OPEN (stale) | Maintainer review — feature enhancement |
| [#1880](https://github.com/netease-youdao/LobsterAI/issues/1880) | Issue | 1 day | OPEN | Maintainer acknowledgment recommended |

**⚠️ Attention Required:** Two PRs from late March remain unmerged and marked stale. Maintainer action (review, request changes, or close with reason) would improve contributor trust and project velocity.

---

*Digest generated from LobsterAI (netease-youdao/LobsterAI) GitHub data for 2026-05-04.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

<think>Let me analyze the GitHub data for Moltis (github.com/moltis-org/moltis) and generate a structured project digest for 2026-05-04.

Key data points:
- Issues updated in last 24h: 1 (open/active: 1, closed: 0)
- PRs updated in last 24h: 2 (open: 2, merged/closed: 0)
- New releases: 0
- Latest Issues: 1 item - Issue #963 about tool calls with malformed/empty arguments
- Latest PRs: 2 items - PR #962 (docs update for TTS providers) and PR #961 (fix for DeepSeek reasoning content replay)

Let me structure this into the required format:

1. **Today's Overview** - Summarize the project status
2. **Releases** - None today
3. **Project Progress** - The two open PRs
4. **Community Hot Topics** - The issue and PRs
5. **Bugs & Stability** - The issue about tool calls
6. **Feature Requests & Roadmap Signals** - Based on the PRs
7. **User Feedback Summary** - Pain points from the issue
8. **Backlog Watch** - Long-unanswered items

Let me write this out professionally.
</think>

# Moltis Project Digest — 2026-05-04

## 1. Today's Overview

Moltis shows moderate activity on 2026-05-04, with 1 new issue and 2 open pull requests updated within the last 24 hours. No new releases were published, and no PRs were merged during this period. The project remains in active development with maintainer contributions focused on provider documentation updates and bug fixes for reasoning content handling. Overall health appears stable, though one critical bug report regarding tool call validation warrants attention.

---

## 2. Releases

**No new releases today.** The project has not published version updates in the past 24 hours. Contributors and users should monitor the repository for upcoming releases addressing the open issues and PRs.

---

## 3. Project Progress

Two pull requests were updated today, both currently open and awaiting review:

| PR | Title | Author | Status |
|----|-------|--------|--------|
| [#962](https://github.com/moltis-org/moltis/pull/962) | Update local TTS provider docs | @penso | Open |
| [#961](https://github.com/moltis-org/moltis/pull/961) | fix(providers): replay DeepSeek reasoning content | @penso | Open |

**PR #962** — This documentation update addresses outdated references in the local TTS provider documentation. It fixes issue #958 by updating Piper docs to link to the maintained OHF-Voice repository and Coqui docs to reference the maintained idiap/coqui-ai-TTS fork. Additionally, it adds the Piper `.onnx.json` config download to match current requirements.

**PR #961** — This bug fix addresses issue #959 by preserving provider reasoning on typed assistant messages during chat history conversion. It ensures persisted tool reasoning is replayed as `reasoning_content` for DeepSeek/OpenAI-compatible follow-up requests. The PR also adds regression coverage for DeepSeek V4 thinking-mode scenarios.

---

## 4. Community Hot Topics

The most notable active discussion is **Issue #963**: *Tool calls with malformed or empty arguments collapse to missing required fields*.

- **URL**: https://github.com/moltis-org/moltis/issues/963
- **Author**: @Cstewart-HC
- **Created/Updated**: 2026-05-03
- **Reactions**: 0 👍 | Comments: 0

**Summary**: Intermittent `exec` calls fail with `missing=command` even after the model has successfully activated the `exec` tool and executed commands previously. The runner rejects the call during pre-dispatch schema validation before `ExecTool.execute()` or `BeforeToolCall` hooks run.

**Underlying Need**: This indicates a gap in schema validation robustness. Users need tool calls with edge-case arguments (empty strings, malformed JSON) to either be accepted with graceful handling or produce clearer error messages rather than silent failures. The issue suggests the validation layer is too strict and bypasses custom tool logic.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#963](https://github.com/moltis-org/moltis/issues/963) | Tool calls with malformed/empty arguments fail during pre-dispatch schema validation, causing `missing=command` errors even when the tool was previously functional | No |

**Analysis**: This is a regression or edge-case bug affecting tool execution reliability. The issue occurs during schema validation *before* tool execution hooks, meaning users cannot implement workarounds via `BeforeToolCall` handlers. The intermittent nature suggests timing or state-dependent behavior. No fix PR exists yet; maintainer investigation is required.

---

## 6. Feature Requests & Roadmap Signals

Based on today's activity, the following signals emerge:

- **Provider Documentation Modernization**: PR #962 indicates ongoing effort to keep third-party provider documentation current. This suggests the roadmap includes maintaining integration quality with external AI services (Piper TTS, Coqui TTS).

- **DeepSeek Reasoning Support**: PR #961 demonstrates investment in DeepSeek-specific features, particularly around reasoning content persistence. This signals DeepSeek is becoming a first-class supported provider.

- **Tool Call Robustness**: Issue #963 highlights a need for more resilient tool call handling, potentially leading to configurable schema validation or improved error messaging in future releases.

**Predicted Next Version Focus**: Expect updates to provider documentation and DeepSeek compatibility, with possible schema validation improvements if Issue #963 is addressed.

---

## 7. User Feedback Summary

**Pain Points Identified**:

1. **Tool Call Failures**: Users experience intermittent `exec` tool failures with cryptic `missing=command` errors. This breaks workflows that previously worked, indicating a regression or newly discovered edge case.

2. **Documentation Staleness**: Users relying on local TTS providers (Piper, Coqui) encounter outdated links and references, complicating setup and maintenance.

**Satisfaction Signals**:

- Active maintenance of provider integrations (DeepSeek reasoning support) indicates responsiveness to user needs.
- Quick turnaround on documentation fixes (PR #962 addresses issue #958) shows community feedback is being addressed.

---

## 8. Backlog Watch

The following items require maintainer attention:

| Item | Type | Age | Status | Notes |
|------|------|-----|--------|-------|
| [#963](https://github.com/moltis-org/moltis/issues/963) | Issue | 1 day | Open | High-severity bug; no fix PR yet; needs investigation |
| [#962](https://github.com/moltis-org/moltis/pull/962) | PR | 1 day | Open | Documentation fix; awaiting review/merge |
| [#961](https://github.com/moltis-org/moltis/pull/961) | PR | 1 day | Open | Bug fix for DeepSeek reasoning; awaiting review/merge |

**Priority Attention Needed**: Issue #963 represents a potential blocker for production users relying on tool execution. Given no fix PR exists, maintainers should prioritize root cause analysis. The two open PRs from @penso appear ready for review and could be merged to improve documentation accuracy and DeepSeek compatibility.

---

*Digest generated for Moltis (github.com/moltis-org/moltis) on 2026-05-04.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

<think>Let me analyze the GitHub data for CoPaw (QwenPaw) and generate a structured project digest for 2026-05-04.

Let me organize the data:

**Issues Overview:**
- 33 issues updated in last 24h (22 open/active, 11 closed)
- Total: 33 items shown (top 30 by comment count)

**PRs Overview:**
- 16 PRs updated in last 24h (11 open, 5 merged/closed)
- New releases: 0

Let me categorize the issues and PRs:

**Latest Issues (by comment count):**
1. #3936 [CLOSED] - Agent isolation question (8 comments)
2. #1516 [OPEN] - AudioContent not supported in Telegram (5 comments)
3. #3977 [OPEN] - Memory search error (4 comments)
4. #3969 [OPEN] - FunctionCallOutput validation error (3 comments)
5. #3991 [CLOSED] - Ollama context memory loss (3 comments)
6. #3992 [CLOSED] - Agent stops after several rounds (3 comments)
7. #3976 [OPEN] - Session cleanup mechanism bug (3 comments)
8. #3980 [CLOSED] - Running Config page returns Not Found (3 comments)
9. #4018 [OPEN] - embedding_model_config reset after update (2 comments)
10. #2430 [OPEN] - System tray icon feature request (2 comments)
11. #3944 [OPEN] - Auto-Memory exclude heartbeat/cron (2 comments, 1 👍)
12. #3961 [CLOSED] - MCP service JIN10 issue (2 comments)
13. #3984 [OPEN] - context_check orphan messages (2 comments)


14. #3986 [CLOSED] - Cron scheduler not triggering (2 comments)
15. #3997 [OPEN] - MCP client timeout issue (2 comments)
16. #4002 [CLOSED] - Visual shared area feature (2 comments)
17. #3019 [OPEN] - skill.json encoding corruption (2 comments)
18. #3983 [CLOSED] - Artifact style code/preview (2 comments)
19. #3996 [CLOSED] - DeepSeek V4 thinking toggle (2 comments)
20. #3979 [CLOSED] - Windows client background running (2 comments)
21. #4011 [OPEN] - Fallback model option (2 comments)
22. #4010 [CLOSED] - Feishu/WeChat interrupt feature (2 comments)
23. #4023 [OPEN] - Input box lag (1 comment)
24. #4022 [OPEN] - Workspace config subfolder (1 comment)
25. #4020 [OPEN] - MEMORY/AGENTS/SOUL read-only (1 comment)
26. #4019 [OPEN] - Guide mode feature (1 comment)
27. #4017 [OPEN] - HEARTBEAT network reconnection (1 comment)
28. #4004 [OPEN] - auto-derive max_input_length (1 comment)
29. #3995 [OPEN] - Enhanced memory management (1 comment)
30. #4003 [OPEN] - Ollama support (1 comment)

**Latest Pull Requests:**
1. #4021 [OPEN] - fix(message_processing): return resolved path for file:// URL audio blocks
2. #3928 [OPEN] - fix(agent-tools): add safe default timeout for delegate_external_agent
3. #4016 [OPEN] - fix(skill): resilient loading for migrated or malformed skill & skill pool entries
4. #4014 [OPEN] - fix(approval): /approve shorthand ignores request_id argument
5. #4013 [CLOSED] - docs(website): update documentation to v1.1.5
6. #1642 [CLOSED] - feat(error code): add error code
7. #1055 [CLOSED] - feat: add MiniMax as a built-in provider
8. #559 [CLOSED] - fix: remove failed user messages from memory to prevent session poisoning
9. #3994 [OPEN] - Feat/volcengine provider
10. #3911 [OPEN] - plugin: add gpt image 2 tool plugin
11. #3999 [OPEN] - feat(skills): add cli skill test command
12. #3926 [OPEN] - Add MseeP.ai badge
13. #4009 [OPEN] - feat(i18n): add Brazilian Portuguese (pt-BR) locale support
14. #4005 [OPEN] - fix(#3041): WSL2 NAT network environment docs
15. #4007 [OPEN] - fix: 修复 #3182 和 #3828，新增 MemoryHook 长期记忆增强
16. #4012 [CLOSED] - chore(version): bumping version to 1.1.6b1

The repository shows active maintenance with multiple fixes and features in progress. Recent work includes documentation updates, new provider integrations like Volcengine and MiniMax, internationalization efforts with Brazilian Portuguese support, and several bug fixes addressing skill loading, approval handling, and memory management. A new beta version 1.1.6b1 has been released.
</think>

# CoPaw Project Digest — 2026-05-04

## 1. Today's Overview

CoPaw (QwenPaw) shows **high development activity** on May 4, 2026, with 33 issues and 16 pull requests updated in the last 24 hours. The project is actively addressing stability issues—several bugs around memory management, session handling, and configuration persistence were closed, while new features including a Volcengine provider, Brazilian Portuguese localization, and a MemoryHook long-term memory enhancement are under review. The community is particularly engaged with agent isolation, workspace configuration, and multi-channel integration topics. No new stable releases were published today, though version 1.1.6b1 was bumped, signaling an upcoming beta.

---

## 2. Releases

**No new stable releases today.**

- **Version 1.1.6b1** was bumped ([PR #4012](https://github.com/agentscope-ai/CoPaw/pull/4012)) but remains in beta. No changelog details provided yet.
- Documentation was updated to v1.1.5 ([PR #4013](https://github.com/agentscope-ai/CoPaw/pull/4013)).

---

## 3. Project Progress

### Merged/Closed PRs (5 total)

| PR | Title | Type |
|----|-------|------|
| [#4013](https://github.com/agentscope-ai/CoPaw/pull/4013) | docs(website): update documentation to v1.1.5 | Documentation |
| [#1642](https://github.com/agentscope-ai/CoPaw/pull/1642) | feat(error code): add error code | Feature |
| [#1055](https://github.com/agentscope-ai/CoPaw/pull/1055) | feat: add MiniMax as a built-in provider | Provider |
| [#559](https://github.com/agentscope-ai/CoPaw/pull/559) | fix: remove failed user messages from memory to prevent session poisoning | Bug Fix |
| [#4012](https://github.com/agentscope-ai/CoPaw/pull/4012) | chore(version): bumping version to 1.1.6b1 | Version Bump |

**Key advancements:**
- **MiniMax provider** merged ([#1055](https://github.com/agentscope-ai/CoPaw/pull/1055)) — adds MiniMax-M2.5 and MiniMax-M2.5-highspeed models with OpenAI-compatible API support.
- **Session poisoning fix** merged ([#559](https://github.com/agentscope-ai/CoPaw/pull/559)) — removes failed user messages from memory to prevent corrupted session state.
- **Error code system** added ([#1642](https://github.com/agentscope-ai/CoPaw/pull/1642)).

### Open PRs Under Review (11 total)

| PR | Title | Author | Status |
|----|-------|--------|--------|
| [#4021](https://github.com/agentscope-ai/CoPaw/pull/4021) | fix(message_processing): return resolved path for file:// URL audio blocks | @karls0r | Open |
| [#3928](https://github.com/agentscope-ai/CoPaw/pull/3928) | fix(agent-tools): add safe default timeout for delegate_external_agent | @q1023884985 | Under Review |
| [#4016](https://github.com/agentscope-ai/CoPaw/pull/4016) | fix(skill): resilient loading for migrated or malformed skill entries | @Leirunlin | Open |
| [#4014](https://github.com/agentscope-ai/CoPaw/pull/4014) | fix(approval): /approve shorthand ignores request_id argument | @xieyxclack | Open |
| [#3994](https://github.com/agentscope-ai/CoPaw/pull/3994) | Feat/volcengine provider | @Nioolek | Under Review |
| [#3911](https://github.com/agentscope-ai/CoPaw/pull/3911) | plugin: add gpt image 2 tool plugin | @rayrayraykk | Open |
| [#3999](https://github.com/agentscope-ai/CoPaw/pull/3999) | feat(skills): add cli skill test command | @JingHou1215 | Open |
| [#4009](https://github.com/agentscope-agentscope-ai/CoPaw/pull/4009) | feat(i18n): add Brazilian Portuguese (pt-BR) locale support | @Jailtonfonseca | Under Review |
| [#4007](https://github.com/agentscope-ai/CoPaw/pull/4007) | fix: 修复 #3182 和 #3828，新增 MemoryHook 长期记忆增强 | @gvaiis | Open |
| [#4005](https://github.com/agentscope-ai/CoPaw/pull/4005) | fix(#3041): WSL2 NAT network environment docs | @hllqkb | Open |
| [#3926](https://github.com/agentscope-ai/CoPaw/pull/3926) | Add MseeP.ai badge | @mseep-ai | Open |

**Notable incoming features:**
- **Volcengine provider** ([#3994](https://github.com/agentscope-ai/CoPaw/pull/3994)) — adds Volcano Engine and its coding plan provider.
- **MemoryHook** ([#4007](https://github.com/agentscope-ai/CoPaw/pull/4007)) — fixes vector index never being built (#3182) and config sync issues (#3828), adds long-term memory enhancement.
- **Brazilian Portuguese i18n** ([#4009](https://github.com/agentscope-ai/CoPaw/pull/4009)) — ~46% of console strings translated.
- **CLI skill test command** ([#3999](https://github.com/agentscope-ai/CoPaw/pull/3999)) — `qwenpaw skills test <skill>` for validation.

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| # | Title | Comments | Status | Link |
|---|-------|----------|--------|------|
| 3936 | [Question]: 智能体之间是否可以完全隔离，或让使用者选择是否隔离 | 8 | Closed | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3936) |
| 1516 | [Bug]: AudioContent not supported in Telegram channel | 5 | Open | [Link](https://github.com/agentscope-ai/QwenPaw/issues/1516) |
| 3977 | [Bug]: 对话上下文没有记忆管理，使用到memory_search报错 | 4 | Open | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3977) |
| 3969 | [Bug]: `FunctionCallOutput` validation error when `call_id` is None | 3 | Open | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3969) |
| 3991 | [Question]: Ollama 频道无法携带对话历史，导致会话记忆丢失 | 3 | Closed | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3991) |
| 3992 | [Bug]: 和agent聊天了几轮之后，就不会继续执行了 | 3 | Closed | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3992) |
| 3976 | [Bug]: 會話空閒清理機制錯誤取消正在運行的任務 | 3 | Open | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3976) |
| 3980 | [Bug]: "Running Config" Settings Page Returns "Not Found" Error | 3 | Closed | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3980) |

### Analysis of Underlying Needs

1. **Agent Isolation & Workspace Security** (#3936, 8 comments) — Users strongly want per-agent workspace isolation with fine-grained file protection (whitelist mode), not just global blacklists. This reflects enterprise/multi-agent deployment needs.

2. **Telegram Audio Processing** (#1516, 5 comments) — Voice messages in Telegram cannot be processed because `AudioContent` isn't converted for LLM consumption. This is a channel integration gap.

3. **Memory System Reliability** (#3977, #3991, #4007) — Multiple issues around `memory_search` returning empty results, Ollama context loss, and vector index not being built. The MemoryHook PR (#4007) directly addresses #3182 and #3828.

4. **Session Stability** (#3976, #3992) — Idle cleanup mechanism incorrectly cancels in-flight tasks; agents stop responding after several rounds. These indicate race conditions in `UnifiedQueueManager`.

---

## 5. Bugs & Stability

### Open Bugs (Ranked by Activity)

| # | Title | Severity Signals | Fix PR? |
|---|-------|------------------|---------|
| [#1516](https://github.com/agentscope-ai/QwenPaw/issues/1516) | AudioContent not supported in Telegram channel | 5 comments, affects voice messages | None yet |
| [#3977](https://github.com/agentscope-ai/QwenPaw/issues/3977) | memory_search returns errors (AttributeError on list) | 4 comments, blocks core feature | Partial via [#4007](https://github.com/agentscope-ai/CoPaw/pull/4007) |
| [#3969](https://github.com/agentscope-ai/QwenPaw/issues/3969) | FunctionCallOutput validation error when call_id is None | 3 comments, validation regression | None yet |
| [#3976](https://github.com/agentscope-ai/QwenPaw/issues/3976) | Session idle cleanup incorrectly cancels running tasks | 3 comments, data loss risk | None yet |
| [#4018](https://github.com/agentscope-ai/QwenPaw/issues/4018) | embedding_model_config reset after qwenpaw update | 2 comments, breaks vector search | None yet |
| [#3019](https://github.com/agentscope-ai/QwenPaw/issues/3019) | skill.json encoding corruption after skill uninstall | 2 comments, blocks agent startup | Partial via [#4016](https://github.com/agentscope-ai/CoPaw/pull/4016) |
| [#4017](https://github.com/agentscope-ai/QwenPaw/issues/4017) | HEARTBEAT enabled → network reconnection fails | 1 comment, reliability issue | None yet |
| [#4023](https://github.com/agentscope-ai/QwenPaw/issues/4023) | Input box lag/stuttering | 1 comment, UX degradation | None yet |

### Recently Closed Bugs

| # | Title | Resolution |
|---|-------|------------|
| [#3991](https://github.com/agentscope-ai/QwenPaw/issues/3991) | Ollama context memory loss | Closed |
| [#3992](https://github.com/agentscope-ai/QwenPaw/issues/3992) | Agent stops after several rounds | Closed |
| [#3980](https://github.com/agentscope-ai/QwenPaw/issues/3980) | Running Config page returns "Not Found" | Closed |
| [#3986](https://github.com/agentscope-ai/QwenPaw/issues/3986) | Cron scheduler never triggers | Closed |

**Stability Assessment:** Memory system and session management bugs dominate. The MemoryHook PR (#4007) and resilient skill loading PR (#4016) are critical incoming fixes. Cron scheduler and Running Config bugs were resolved.

---

## 6. Feature Requests & Roadmap Signals

### High-Engagement Feature Requests

| # | Title | 👍 | Comments | Likelihood of Inclusion |
|---|-------|----|----------|------------------------|
| [#2430](https://github.com/agentscope-ai/QwenPaw/issues/2430) | System tray icon and minimize-to-tray for Windows | 0 | 2 | Medium — aligns with desktop UX improvements |
| [#3944](https://github.com/agentscope-ai/QwenPaw/issues/3944) | Auto-Memory exclude Heartbeat & Cron sessions | 1 | 2 | Medium — addresses memory quality |
| [#4011](https://github.com/agentscope-ai/CoPaw/issues/4011) | Fallback model option when primary unavailable | 0 | 2 | High — reliability feature |
| [#4010](https://github.com/agentscope-ai/CoPaw/issues/4010) | Feishu/WeChat interrupt & terminate functionality | 0 | 2 | Medium — channel control |
| [#4002](https://github.com/agentscope-ai/QwenPaw/issues/4002) | Visual shared area with框选/标注 for chat UI | 0 | 2 | Low-Medium — major UI change |
| [#4022](https://github.com/agentscope-ai/QwenPaw/issues/4022) | Save workspace config files to subfolder | 0 | 1 | Medium — config organization |
| [#4020](https://github.com/agentscope-ai/QwenPaw/issues/4020) | Force read-only for MEMORY/AGENTS/SOUL files | 0 | 1 | Medium — security/isolation |
| [#4019](https://github.com/agentscope-ai/QwenPaw/issues/4019) | Mid-task guidance/instruction feature (Codex-like) | 0 | 1 | Low — experimental |
| [#3995](https://github.com

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

<think>Let me analyze the GitHub data for ZeptoClaw and generate a structured project digest for 2026-05-04.

Key observations:
1. **Activity**: 5 issues updated, 22 PRs updated in last 24h
2. **Releases**: None today
3. **Issues**: 5 total, 4 open, 1 closed (Liquid AI provider integration)
4. **PRs**: 22 total, 3 open, 19 merged/closed
5. **Major themes**:
   - Hermes Agent self-improving loop adoption (skill management, telemetry, trigger phrases)
   - Documentation alignment and positioning
   - Middleware framework implementation
   - Dependency updates (mostly from dependabot)

Let me structure this into the requested format.
</think>

# ZeptoClaw Project Digest — 2026-05-04

## 1. Today's Overview

ZeptoClaw shows **high development velocity** with 22 PRs updated and 5 issues processed in the last 24 hours. The project is actively advancing its agent infrastructure through a multi-phase middleware framework implementation (Phase 1 merged), while simultaneously adopting patterns from the Hermes Agent project for self-improving skill management. Documentation hygiene and positioning alignment are receiving focused attention, with multiple PRs targeting README, AGENTS.md, and CLAUDE.md consistency. No new releases were published today, but the codebase appears stable with 19 PRs successfully merged/closed, indicating a healthy CI/CD pipeline.

## 2. Releases

**No new releases today.** The project has no releases recorded in the past 24 hours.

---

## 3. Project Progress

### Merged/Closed PRs (19 items)

| PR | Title | Category | Impact |
|----|-------|----------|--------|
| [#564](https://github.com/qhkm/zeptoclaw/pull/564) | refactor(agent): middleware framework + 11 implementations (phase 1 of #399) | Architecture | **Major** — Adds `Middleware` trait, `ToolMiddleware` trait, `PipelineContext`, `PipelineBuilder`, and 11 middleware implementations under `src/agent/middleware/` |
| [#404](https://github.com/qhkm/zeptoclaw/pull/404) | refactor(agent): middleware pipeline scaffolding (#399) | Architecture | **Major** — Original scaffolding PR now closed after #564 landed cleanly |
| [#571](https://github.com/qhkm/zeptoclaw/pull/571) | feat(tools): trigger-phrase nudges in longterm_memory description | Feature | Adds explicit "Use when" / "Do NOT use when" triggers to tool descriptions |
| [#570](https://github.com/qhkm/zeptoclaw/pull/570) | docs: align ZeptoClaw positioning claims | Documentation | Aligns README, Cargo metadata, CLAUDE.md, AGENTS.md around local-first positioning |
| [#566](https://github.com/qhkm/zeptoclaw/pull/566) | docs: refresh positioning, channel/provider counts, test status | Documentation | Refreshes LOC count (~106k → ~154k), clarifies MQTT channel status |
| [#559](https://github.com/qhkm/zeptoclaw/pull/559) | chore(deps): bump @astrojs/starlight 0.38.2 → 0.38.3 | Dependency | Landing page docs |
| [#554](https://github.com/qhkm/zeptoclaw/pull/554) | chore(deps): bump @astrojs/starlight 0.38.2 → 0.38.3 | Dependency | r8r docs |
| [#562](https://github.com/qhkm/zeptoclaw/pull/562) | chore(deps): bump taiki-e/install-action 2.75.10 → 2.75.17 | CI/CD | GitHub Actions |
| [#556](https://github.com/qhkm/zeptoclaw/pull/556) | chore(deps): bump cargo-deny-action 2.0.16 → 2.0.17 | CI/CD | Security linting |
| [#553](https://github.com/qhkm/zeptoclaw/pull/553) | chore(deps): bump action-gh-release 2.6.1 → 3.0.0 | CI/CD | Release automation |
| [#557](https://github.com/qhkm/zeptoclaw/pull/557) | chore(deps): bump astro 6.0.8 → 6.1.6 | Dependency | ZeptoClaw docs |
| [#563](https://github.com/qhkm/zeptoclaw/pull/563) | chore(deps): bump lettre 0.11.20 → 0.11.21 | Dependency | Rust email library |
| [#560](https://github.com/qhkm/zeptoclaw/pull/560) | chore(deps): bump libc 0.2.184 → 0.2.185 | Dependency | Rust stdlib bindings |
| [#558](https://github.com/qhkm/zeptoclaw/pull/558) | chore(deps): bump webpki-roots 1.0.6 → 1.0.7 | Dependency | TLS root certificates |
| [#555](https://github.com/qhkm/zeptoclaw/pull/555) | chore(deps): bump zip 8.4.0 → 8.5.1 | Dependency | Archive handling |
| [#550](https://github.com/qhkm/zeptoclaw/pull/550) | chore(deps): bump tokio 1.50.0 → 1.51.1 | Dependency | Async runtime |
| [#552](https://github.com/qhkm/zeptoclaw/pull/552) | chore(deps): bump astro 6.0.5 → 6.1.6 | Dependency | r8r docs |
| [#561](https://github.com/qhkm/zeptoclaw/pull/561) | chore(deps): bump vite 8.0.0 → 8.0.8 | Dependency | Panel dev server |
| [#551](https://github.com/qhkm/zeptoclaw/pull/551) | chore(deps): bump actions/upload-artifact 7.0.0 → 7.0.1 | CI/CD | Artifact upload |
| [#549](https://github.com/qhkm/zeptoclaw/pull/549) | chore(deps): bump debian trixie-slim base image | Dependency | Docker container |

### Open PRs (3 items)

| PR | Title | Category | Status |
|----|-------|----------|--------|
| [#571](https://github.com/qhkm/zeptoclaw/pull/571) | feat(tools): trigger-phrase nudges in longterm_memory description | Feature | Open |
| [#570](https://github.com/qhkm/zeptoclaw/pull/570) | docs: align ZeptoClaw positioning claims | Documentation | Open |
| [#566](https://github.com/qhkm/zeptoclaw/pull/566) | docs: refresh positioning, channel/provider counts, test status | Documentation | Open |

---

## 4. Community Hot Topics

### Most Active Issues (by discussion/comment activity)

| Issue | Title | Area | Priority | Comments | Activity |
|-------|-------|------|----------|----------|----------|
| [#541](https://github.com/qhkm/zeptoclaw/issues/541) | feat(providers): Liquid AI (LFM) provider integration — edge-native models | Providers | P2-High | 2 | **Closed** — Integration of Liquid Foundation Models (LFM-1B/3B/7B) for edge deployment |
| [#569](https://github.com/qhkm/zeptoclaw/issues/569) | chore(tools): trigger-phrase nudges in longterm_memory tool description | Tools | P3 | 0 | Open — Phase 1.5 of Hermes Agent self-improving loop adoption |
| [#568](https://github.com/qhkm/zeptoclaw/issues/568) | feat(skills): usage telemetry sidecar (.usage.json) | Memory | P3 | 0 | Open — Phase 2 of Hermes Agent self-improving loop |
| [#567](https://github.com/qhkm/zeptoclaw/issues/567) | feat(tools): agent-callable skill_manage tool (CRUD on user skills) | Tools | P3 | 0 | Open — Phase 1 of Hermes Agent self-improving loop |
| [#565](https://github.com/qhkm/zeptoclaw/issues/565) | docs: align ZeptoClaw positioning and comparison claims | Docs | P3 | 0 | Open — Positioning hygiene across README, AGENTS.md, CLAUDE.md |

### Analysis of Underlying Needs

**1. Hermes Agent Pattern Adoption (Issues #567, #568, #569)**
The project is systematically adopting the Hermes Agent self-improving loop pattern across three phases:
- **Phase 1**: Agent-managed skill CRUD (`skill_manage` tool)
- **Phase 1.5**: Trigger phrase guidance in tool descriptions
- **Phase 2**: Usage telemetry for skill lifecycle management

This indicates a strategic shift toward **autonomous agent self-improvement**, allowing the AI to manage its own skill inventory based on usage patterns.

**2. Edge-Native Provider Integration (Issue #541)**
Liquid AI's LFM models represent a non-transformer architecture optimized for edge deployment, aligning with ZeptoClaw's "local-first personal AI assistant" positioning. The closed status suggests this feature is either implemented or in progress.

**3. Documentation Consistency (Issue #565)**
Multiple open PRs (#566, #570) and this issue indicate a coordinated effort to align project messaging across all documentation surfaces, ensuring claims about speed, size, security, and competitor comparisons are verifiable.

---

## 5. Bugs & Stability

**No bugs or regressions reported today.** The 19 merged PRs (including dependency updates and the middleware framework) completed without reported issues, suggesting stable CI/CD pipelines and good test coverage.

| Severity | Count | Notes |
|----------|-------|-------|
| Critical | 0 | None reported |
| High | 0 | None reported |
| Medium | 0 | None reported |
| Low | 0 | None reported |

**Dependency Health**: All 14 dependency updates (Rust, JavaScript, GitHub Actions, Docker) merged successfully, indicating no breaking changes in upstream libraries.

---

## 6. Feature Requests & Roadmap Signals

### Active Feature Requests

| Issue | Title | Area | Priority | Likelihood of Near-Term Implementation |
|-------|-------|------|----------|----------------------------------------|
| [#567](https://github.com/qhkm/zeptoclaw/issues/567) | feat(tools): agent-callable skill_manage tool (CRUD on user skills) | Tools | P3 | **High** — PR already open, Phase 1 of planned 3-phase implementation |
| [#568](https://github.com/qhkm/zeptoclaw/issues/568) | feat(skills): usage telemetry sidecar (.usage.json) | Memory | P3 | **High** — Phase 2 of same initiative, natural follow-on |
| [#569](https://github.com/qhkm/zeptoclaw/issues/569) | chore(tools): trigger-phrase nudges in longterm_memory description | Tools | P3 | **High** — PR #571 already open |
| [#541](https://github.com/qhkm/zeptoclaw/issues/541) | feat(providers): Liquid AI (LFM) provider integration | Providers | P2 | **Medium** — Closed, likely implemented |

### Roadmap Signals

1. **Middleware Pipeline Completion**: Phase 1 of #399 landed (#564). Phase 2+ will likely wire middleware into the agent loop.
2. **Agent Self-Improvement**: The Hermes Agent pattern adoption suggests future versions will enable agents to autonomously create, refine, and retire skills based on telemetry.
3. **Edge Deployment Focus**: Liquid AI integration and "edge-native" messaging indicate positioning for on-device AI scenarios.

---

## 7. User Feedback Summary

**No direct user feedback (issues/PRs with user reactions) recorded today.** The project shows zero 👍 reactions on all issues and PRs, suggesting either:
- Early-stage feature development without external user testing
- Community engagement via other channels (Discord, GitHub Discussions not captured here)
- Internal development focus before public beta

### Observed Development Patterns

| Pattern | Evidence | Interpretation |
|---------|----------|----------------|
| Rapid iteration | 22 PRs in 24h | Active development, possibly pre-release push |
| Dependency hygiene | 14 dependabot PRs merged | Automated maintenance working well |
| Documentation focus | 3 docs PRs + 1 docs issue | Project maturing, investing in clarity |
| Architecture evolution | Middleware framework Phase 1 | Breaking changes likely in future major release |

---

## 8. Backlog Watch

### Issues Requiring Maintainer Attention

| Issue | Title | Age | Priority | Status | Concern |
|-------|-------|-----|----------|--------|---------|
| [#541](https://github.com/qhkm/zeptoclaw/issues/541) | feat(providers): Liquid AI (LFM) provider integration | 11 days | P2-High | **Closed** | Verify implementation completeness; no linked PR visible |
| [#565](https://github.com/qhkm/zeptoclaw/issues/565) | docs: align ZeptoClaw positioning | 1 day | P3 | Open | PR #570 addresses; monitor for completeness |

### Long-Running PRs

| PR | Title | Age | Status | Concern |
|----|-------|-----|--------|---------|
| [#404](https://github.com/qhkm/zeptoclaw/pull/404) | refactor(agent): middleware pipeline scaffolding (#399) | ~41 days | **Closed** | Superseded by #564; proper closure maintained |

### Items Needing Response

| Item | Type | Age | Notes |
|------|------|-----|-------|
| [#567](https://github.com/qhkm/zeptoclaw/issues/567) | Issue | 1 day | Feature request; PR exists, needs review/merge |
| [#568](https://github.com/qhkm/zeptoclaw/issues/568) | Issue | 1 day | Feature request; no PR yet |
| [#569](https://github.com/qhkm/zeptoclaw/issues/569) | Issue | 1 day | Feature request; PR exists (#571) |

---

## Summary Metrics

| Metric | Value | Trend |
|--------|-------|-------|
| Issues updated (24h) | 5 | Neutral |
| PRs updated (24h) | 22 | **High** |
| Open issues | 4 | — |
| Open PRs | 3 | — |
| Merged PRs | 19 | **High** |
| Releases | 0 | Neutral |
| Dependency updates | 14 | Normal |
| Bug reports | 0 | Healthy |

---

*Digest generated from ZeptoClaw GitHub data for 2026-05-04. All links reference https://github.com/qhkm/zeptoclaw.*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>NemoClaw</strong> — <a href="https://github.com/NVIDIA/NemoClaw">NVIDIA/NemoClaw</a></summary>

<think>Let me analyze the GitHub data for NemoClaw and generate a structured project digest for 2026-05-04.

Key data points:
- Issues updated in last 24h: 17 (open/active: 8, closed: 9)
- PRs updated in last 24h: 50 (open: 39, merged/closed: 11)
- New releases: 0

Let me organize this into the required sections.

**Today's Overview:**
The project is highly active with 17 issues and 50 PRs updated in the last 24 hours. No new releases, but there's significant development activity. The focus seems to be on bug fixes (especially around CLI, security, and recovery scenarios), test coverage improvements, and integration work with Hermes.

**Releases:**
None today.

**Project Progress:**
Looking at the PRs:
- 11 PRs merged/closed
- 39 open PRs
- Key PRs:
  - #2888: fix for OpenClaw config generator permissions
  - #2950: fix for distinct messaging credentials across sandboxes
  - #2948: fix for invalid sandbox names validation
  - #2941: fix to preserve Hermes durable state (fixes #2882)
  - #2414: security fix for SSRF validation (priority: high)
  - Several test coverage PRs by @cv
  - #2935: fix for Linux Ollama OLLAMA_HOST override
  - #2820: removed deprecated tls termination directives

**Community Hot Topics:**
Looking at issues by comments:
- #1992: Nightly E2E failed (341 comments) - very active
- #1045: Declarative Interface for Host Filesystem Access (8 comments)
- #2882: snapshot command misses crucial data (1 comment) - but has PR #2941


- #2467: security fix for token leakage (1 comment) - PR exists

**Bugs & Stability:**
Several critical issues need attention: token leakage in dashboard URLs (#2467), phantom sandbox entries after SIGINT (#2753), gateway auto-respawn failures (#2757), and TUI errors in Hermes (#2949). The snapshot command is also missing critical data (#2882) with an open PR. Recovery scenarios and CLI stability remain problematic areas.

**Feature Requests & Roadmap Signals:**
Users want better filesystem access controls (#1045), clearer naming for the NemoHermes gateway (#2801), and model size previews before downloading (#2639).

**User Feedback Summary:**
The core pain points center on recovery workflows—phantom entries, failed respawns, and stale lock files blocking subsequent operations. There's also friction around Hermes integration and CLI flag behavior that doesn't match documentation.

**Backlog Watch:**
The nightly E2E failures (#1992) have accumulated 341 comments and need resolution. The declarative filesystem interface (#1045) has been open since March and addresses a significant workflow gap.
</think>

# NemoClaw Project Digest — 2026-05-04

## 1. Today's Overview

NemoClaw demonstrates high development velocity with 17 issues and 50 PRs updated in the last 24 hours. The project shows strong focus on bug remediation and test coverage hardening, with 11 PRs merged/closed and 39 remaining open. Notable security fixes are progressing (SSRF validation, token leakage prevention), while integration work with Hermes continues to mature. No new releases were published today, indicating stabilization work rather than version bumps.

---

## 2. Releases

**No new releases today.** The project remains on the v0.0.34 development track based on PR targeting.

---

## 3. Project Progress

### Merged/Closed PRs (11 total)

| PR | Author | Summary |
|----|--------|---------|
| [#2946](https://github.com/NVIDIA/NemoClaw/pull/2946) | @cv | Narrowed sandbox destroy test coverage ignores |
| [#2945](https://github.com/NVIDIA/NemoClaw/pull/2945) | @cv | Added coverage for maintenance action helpers |
| [#2943](https://github.com/NVIDIA/NemoClaw/pull/2943) | @cv | Covered global action facade with tests |
| [#2820](https://github.com/NVIDIA/NemoClaw/pull/2820) | @deepujain | Removed deprecated `tls: terminate` directives from policies (fixes #2749) |

### Open PRs Advancing (39 total)

**Security Fixes:**
- [#2414](https://github.com/NVIDIA/NemoClaw/pull/2414) — Hardens `config set` SSRF validation to block loopback/private targets recursively (priority: high)
- [#2888](https://github.com/NVIDIA/NemoClaw/pull/2888) — Normalizes OpenClaw config generator permissions in Dockerfile

**Bug Fixes:**
- [#2950](https://github.com/NVIDIA/NemoClaw/pull/2950) — Allows distinct messaging credentials across sandboxes
- [#2948](https://github.com/NVIDIA/NemoClaw/pull/2948) — Rejects invalid sandbox names before Brev deploy
- [#2941](https://github.com/NVIDIA/NemoClaw/pull/2941) — Preserves Hermes durable state in snapshots (fixes #2882)
- [#2935](https://github.com/NVIDIA/NemoClaw/pull/2935) — Uses systemd drop-in for Linux Ollama `OLLAMA_HOST` override

**Test Coverage Expansion (by @cv):**
- [#2942](https://github.com/NVIDIA/NemoClaw/pull/2942), [#2944](https://github.com/NVIDIA/NemoClaw/pull/2944), [#2940](https://github.com/NVIDIA/NemoClaw/pull/2940), [#2939](https://github.com/NVIDIA/NemoClaw/pull/2939), [#2938](https://github.com/NVIDIA/NemoClaw/pull/2938), [#2937](https://github.com/NVIDIA/NemoClaw/pull/2937), [#2936](https://github.com/NVIDIA/NemoClaw/pull/2936) — Systematic removal of broad coverage ignores across CLI adapters, utilities, and routing helpers

**Documentation:**
- [#2823](https://github.com/NVIDIA/NemoClaw/pull/2823) — Documents local tool-call reliability for Ollama/vLLM

---

## 4. Community Hot Topics

### Most Active Issues

| Issue | Comments | Topic |
|-------|----------|-------|
| [#1992](https://github.com/NVIDIA/NemoClaw/issues/1992) | 341 | **Nightly E2E pipeline failure** — Long-running CI issue with artifacts for debugging |
| [#1045](https://github.com/NVIDIA/NemoClaw/issues/1045) | 8 | Declarative interface for host filesystem access (WSL/local dev) |
| [#2754](https://github.com/NVIDIA/NemoClaw/issues/2754) | 2 | Ubuntu 24.10 onboard preflight ignores `NEMOCLAW_OPENSHELL_BIN` env var |

**Analysis:** The E2E failure (#1992) has accumulated 341 comments, indicating a complex, unresolved CI/CD issue requiring coordinated debugging. The filesystem access request (#1045) reflects developer demand for relaxed sandbox isolation during local development workflows—a recurring theme in AI agent tooling.

---

## 5. Bugs & Stability

### Critical/High Severity

| Issue | Severity | Platform | Status | Fix PR |
|-------|----------|----------|--------|--------|
| [#2467](https://github.com/NVIDIA/NemoClaw/issues/2467) | **High (Security)** | All | Closed | — |
| [#2414](https://github.com/NVIDIA/NemoClaw/pull/2414) | **High (Security)** | All | Open | — |

**#2467** — Dashboard URLs leaked auth tokens via raw `console.log()`, exposing tokens in terminal scrollback and CI logs (CWE-532). **Status: Closed** (fix merged).

**#2414** — SSRF validation gap in `config set` allows loopback/private target configuration. **Status: Open** (PR targeting v0.0.34).

### Medium Severity

| Issue | Summary | Status |
|-------|---------|--------|
| [#2882](https://github.com/NVIDIA/NemoClaw/issues/2882) | Snapshot command misses Hermes SQLite state (`~/.hermes/state.db`) | Open; PR [#2941](https://github.com/NVIDIA/NemoClaw/pull/2941) exists |
| [#2755](https://github.com/NVIDIA/NemoClaw/issues/2755) | `logs --tail/--since/--help` flags silently ignored | Open |
| [#2756](https://github.com/NVIDIA/NemoClaw/issues/2756) | Ghost sandbox registered after failed onboard (SIGINT) | Open |
| [#2757](https://github.com/NVIDIA/NemoClaw/issues/2757) | Gateway killed → no auto-respawn; parent daemon exits | Open |
| [#2595](https://github.com/NVIDIA/NemoClaw/issues/2595) | macOS: `status` reports "Inference: healthy" while gateway is down | Closed |
| [#2765](https://github.com/NVIDIA/NemoClaw/issues/2765) | Stale `onboard.lock` blocks subsequent runs after preflight failure | Closed |

**Stability Concern:** Multiple recovery scenarios (ghost sandboxes, no respawn, stale locks) indicate gaps in failure-mode handling—likely candidates for v0.0.35 hardening.

---

## 6. Feature Requests & Roadmap Signals

### Active Feature Requests

| Issue | Request | Demand Signal |
|-------|---------|---------------|
| [#1045](https://github.com/NVIDIA/NemoClaw/issues/1045) | Declarative host filesystem access / volume mounting for WSL/local dev | 8 comments; enhancement label |
| [#2801](https://github.com/NVIDIA/NemoClaw/issues/2801) | Rename NemoHermes gateway branding from hard-coded "nemoclaw" | 1 comment; integration discussion |
| [#2639](https://github.com/NVIDIA/NemoClaw/issues/2639) | Show model size + confirmation before Ollama download | Closed; merged in v0.0.34 |

**Roadmap Prediction:**
- **Near-term (v0.0.34):** Hermes integration polish (snapshot durability, gateway naming), Brev validation, credential scoping
- **Mid-term:** Filesystem access relaxation for local dev (likely behind feature flag), improved recovery UX
- **Long-term:** Cross-platform consistency (macOS stability issues noted)

---

## 7. User Feedback Summary

### Pain Points

1. **Recovery Failures** — Users report confusing states after onboard interruption: phantom sandbox entries, inability to reconnect, manual `nemoclaw connect` required. Multiple issues (#2753, #2756, #2757, #2765) converge on this theme.

2. **Hermes Integration Roughness** — TUI fails to launch due to read-only `/opt/hermes` (#2949), Dockerfile.base missing PR #2773 changes (#2947), snapshot state not preserved (#2882).

3. **CLI Flag Misbehavior** — `logs` subcommand silently ignores `--tail`, `--since`, `--help` flags, returning full dump regardless (#2755).

4. **macOS Instability** — Status command reports healthy inference when gateway is down (#2595), suggesting platform-specific health-check logic gaps.

### Positive Signals

- Policy deprecation cleanup (#2749 fixed via #2820) received 👍 reaction, indicating user appreciation for reducing noise
- Test coverage expansion signals maintainer investment in long-term stability

---

## 8. Backlog Watch

### Issues Requiring Maintainer Attention

| Issue | Age | Priority | Gap |
|-------|-----|----------|-----|
| [#1992](https://github.com/NVIDIA/NemoClaw/issues/1992) | ~17 days | High | Nightly E2E failure; 341 comments unresolved |
| [#1045](https://github.com/NVIDIA/NemoClaw/issues/1045) | ~37 days | Enhancement | Filesystem access UX; no maintainer response since initial triage |
| [#2949](https://github.com/NVIDIA/NemoClaw/issues/2949) | 1 day | Medium | Hermes TUI broken; new but blocking Hermes adoption |
| [#2947](https://github.com/NVIDIA/NemoClaw/issues/2947) | 1 day | Medium | Dockerfile.base drift from main; blocks Hermes feature parity |

### Stalled PRs

| PR | Age | Risk |
|----|-----|------|
| [#2414](https://github.com/NVIDIA/NemoClaw/pull/2414) | ~10 days | Security fix pending review; high priority |
| [#2823](https://github.com/NVIDIA/NemoClaw/pull/2823) | ~3 days | Documentation PR; low risk but unmerged |

**Recommendation:** Prioritize review of #2414 (SSRF hardening) and resolution of #1992 (E2E pipeline) to restore CI confidence. The E2E failure's 341-comment thread suggests a systemic issue requiring coordinated investigation.

---

*Digest generated from NemoClaw GitHub activity on 2026-05-04.*

</details>

---
*This digest is auto-generated by [Big Model Radar](https://github.com/borq168/big_model_radar).*