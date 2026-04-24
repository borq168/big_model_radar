# OpenClaw Ecosystem Digest 2026-04-24

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-24 01:52 UTC

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

<think>The user wants me to generate a structured project digest for OpenClaw based on the provided GitHub data. Let me analyze the data and create a comprehensive digest following the specified sections.

Key data points:
- Issues: 500 total, 363 open, 137 closed in last 24h
- PRs: 500 total, 297 open, 203 merged/closed in last 24h
- 1 new release: v2026.4.22

Let me organize this into the requested sections:

1. **Today's Overview** - High activity, many bug reports, recent release
2. **Releases** - v2026.4.22 with xAI enhancements
3. **Project Progress** - PRs merged/closed
4. **Community Hot Topics** - Most active issues
5. **Bugs & Stability** - Critical bugs, regressions
6. **Feature Requests & Roadmap Signals** - Feature requests
7. **User Feedback Summary** - Pain points
8. **Backlog Watch** - Long-unanswered issues

Let me create this digest now.
</think>

# OpenClaw Project Digest — 2026-04-24

## 1. Today's Overview

OpenClaw demonstrates high development velocity with 500 issues and 500 PRs updated in the last 24 hours. The project released **v2026.4.22** with significant xAI provider enhancements including image generation and speech capabilities. Community engagement remains robust with 102 comments on the Native Agent Identity RFC, indicating strong interest in security/trust verification features. However, multiple regression bugs from recent releases (particularly around missing npm dependencies and plugin runtime failures) are generating substantial issue traffic, suggesting a need for improved release validation processes.

---

## 2. Releases

### v2026.4.22 — openclaw 2026.4.22
**Released:** 2026-04-22

**Key Changes:**
- **xAI Provider Enhancements:**
  - Added image generation support (`grok-imagine-image` / `grok-imagine-image-pro`)
  - Reference-image editing capabilities
  - Text-to-speech with six live xAI voices
  - TTS formats: MP3, WAV, PCM, G.711
  - Speech-to-text transcription (`grok-stt`)
  - Real-time transcription support

**Note:** Multiple issues (#70701, #70852) report plugin runtime dependency failures in this version, particularly affecting Telegram channels and bundled plugin installations.

---

## 3. Project Progress

### Merged/Closed PRs (Selected Highlights)

| PR | Description | Size | Status |
|----|-------------|------|--------|
| [#64020](https://github.com/openclaw/openclaw/pull/64020) | fix(daemon): derive XDG_RUNTIME_DIR/DBUS bus address for systemctl spawns | S | Closed |
| [#69682](https://github.com/openclaw/openclaw/pull/69682) | fix(agents): resolve auth profile for imageModel inference calls | S | Closed |
| [#67634](https://github.com/openclaw/openclaw/pull/67634) | fix: describe images via imageModel when primary model is text-only | L | Closed |
| [#63783](https://github.com/openclaw/openclaw/pull/63783) | fix(webchat): preserve image attachments for text-only models | M | Closed |
| [#69947](https://github.com/openclaw/openclaw/pull/69947) | fix: quiet noninteractive doctor checks | M | Closed |
| [#70684](https://github.com/openclaw/openclaw/pull/70684) | fix(agents): break madge import cycle in harness selection path | S | Closed |
| [#70867](https://github.com/openclaw/openclaw/pull/70867) | refactor: split models list row sources | S | Closed |

### Active PRs (Notable)

| PR | Description | Size |
|----|-------------|------|
| [#70866](https://github.com/openclaw/openclaw/pull/70866) | [codex] Add adaptive thinking resolution | S |
| [#70876](https://github.com/openclaw/openclaw/pull/70876) | fix: include MCP server tools in /tools inventory | S |
| [#70749](https://github.com/openclaw/openclaw/pull/70749) | fix(sessions): ignore compaction checkpoints in usage totals | M |
| [#70523](https://github.com/openclaw/openclaw/pull/70523) | fix(memory-core): suppress raw dreaming inline dumps on fallback | M |
| [#42637](https://github.com/openclaw/openclaw/pull/42637) | fix(skills): list omitted skill names when prompt is truncated | L |
| [#42669](https://github.com/openclaw/openclaw/pull/42669) | feat(skills): add skills.priority config for prompt ordering | L |

---

## 4. Community Hot Topics

### Most Active Issues (by Comment Count)

| Issue | Title | Comments | Reactions | Status |
|-------|-------|----------|-----------|--------|
| [#49971](https://github.com/openclaw/openclaw/issues/49971) | RFC: Native Agent Identity & Trust Verification for OpenClaw | 102 | 0 | OPEN |
| [#75](https://github.com/openclaw/openclaw/issues/75) | [enhancement, help wanted] Linux/Windows Clawdbot Apps | 93 | 71 | OPEN |
| [#70457](https://github.com/openclaw/openclaw/issues/70457) | [Bug]: npm install -g openclaw@latest fails with missing module '@larksuiteoapi/node-sdk' | 26 | 3 | CLOSED |
| [#7200](https://github.com/openclaw/openclaw/issues/7200) | Feature Request: Real-time Voice Conversation Support | 22 | 23 | OPEN |

### Analysis of Underlying Needs

1. **Identity & Trust Verification (#49971):** Strong community interest in decentralized identity (ERC-8004, W3C DID/VC standards) integration—suggests demand for enterprise-grade security features.

2. **Cross-Platform Desktop Apps (#75):** 71 reactions indicate Linux/Windows desktop parity is a highly requested feature, currently blocking adoption in enterprise environments.

3. **Real-time Voice (#7200):** Bidirectional streaming audio support would enable phone-like interactions, aligning with the new xAI TTS/STT capabilities in v2026.4.22.

---

## 5. Bugs & Stability

### Critical/Regression Bugs (Ranked by Severity)

| Severity | Issue | Title | Fix PR? |
|----------|-------|-------|---------|
| 🔴 Critical | [#70701](https://github.com/openclaw/openclaw/issues/70701) | v2026.4.22: Telegram channels crash on startup — Cannot find package 'openclaw' | [#70852](https://github.com/openclaw/openclaw/pull/70852) |
| 🔴 Critical | [#70457](https://github.com/openclaw/openclaw/issues/70457) | npm install fails with missing '@larksuiteoapi/node-sdk' and 'nostr-tools' | CLOSED |
| 🔴 Critical | [#70292](https://github.com/openclaw/openclaw/issues/70292) | Installation fails with "Cannot find module '@larksuiteoapi/node-sdk'" | CLOSED |
| 🟠 High | [#65603](https://github.com/openclaw/openclaw/issues/65603) | LLM request failed: Azure Foundry GPT models rejected | — |
| 🟠 High | [#68735](https://github.com/openclaw/openclaw/issues/68735) | LLM request failed: provider rejected request schema (regression) | — |
| 🟠 High | [#67936](https://github.com/openclaw/openclaw/issues/67936) | Matrix channel cannot start after 2026.04.15 | — |
| 🟡 Medium | [#60213](https://github.com/openclaw/openclaw/issues/60213) | Compaction silently kills session — all conversation memory lost | — |
| 🟡 Medium | [#70050](https://github.com/openclaw/openclaw/issues/70050) | Session history blocks startup for ~20 minutes | — |
| 🟡 Medium | [#70810](https://github.com/openclaw/openclaw/issues/70810) | Discord slash commands stuck "Loading" in Thread channels | — |

### Pattern Analysis

**Dependency Resolution Issues:** Multiple issues (#70457, #70292, #70346, #70587, #70701) indicate systemic problems with npm package resolution in bundled installations, particularly affecting Feishu, Nostr, and Telegram plugins.

**Regression Trend:** 8+ regression bugs reported in the last 48 hours suggest recent changes to the build/packaging pipeline may need additional validation.

---

## 6. Feature Requests & Roadmap Signals

### High-Impact Feature Requests

| Issue | Title | Reactions | Likelihood of Near-Term Implementation |
|-------|-------|-----------|---------------------------------------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows Clawdbot Apps | 71 | High (help wanted, long-standing) |
| [#7200](https://github.com/openclaw/openclaw/issues/7200) | Real-time Voice Conversation Support | 23 | High (aligned with v2026.4.22 xAI work) |
| [#50898](https://github.com/openclaw/openclaw/issues/50898) | Add native support for NVIDIA API keys / NVIDIA NIM provider | 5 | Medium |
| [#66944](https://github.com/openclaw/openclaw/issues/66944) | Plugin UI Extension System | 3 | Medium |
| [#68596](https://github.com/openclaw/openclaw/issues/68596) | Configurable streaming watchdog timeout threshold | 4 | Medium |

### Roadmap Signals

1. **Multimodal Expansion:** Image generation (#55066), voice capabilities, and vision model routing fixes indicate multimodal features are a priority.

2. **Enterprise Features:** Identity verification (#49971), security audit improvements (#68154), and OAuth token handling fixes suggest enterprise-readiness focus.

3. **Performance:** Compaction scheduler issues (#63892), session startup delays (#70050), and models list refactoring (#70867) indicate performance optimization work in progress.

---

## 7. User Feedback Summary

### Pain Points

| Category | Issue Count | Key Complaints |
|----------|-------------|----------------|
| **Installation Failures** | 5+ | Missing npm dependencies break fresh installs across macOS, Ubuntu, Windows |
| **Plugin Runtime** | 4+ | Bundled plugins fail to load in packaged installations |
| **LLM Provider Errors** | 3+ | Azure Foundry, OpenRouter, Groq integration failures |
| **Session Memory Loss** | 2+ | Compaction and context window issues cause data loss |

### Use Cases & Satisfaction

**Positive Signals:**
- xAI provider enhancements receiving rapid iteration
- Image handling improvements for text-only models (#67634, #63783) address real user workflows
- Skills priority configuration (#42669) addresses prompt engineering needs

**Dissatisfaction Areas:**
- Cross-platform desktop parity lacking (Linux/Windows)
- Regression frequency causing upgrade hesitancy
- Documentation gaps for advanced features (memory-wiki, heartbeat isolated mode)

---

## 8. Backlog Watch

### Long-Unanswered Important Issues (Stale >30 days)

| Issue | Title | Age | Comments | Priority |
|-------|-------|-----|----------|----------|
| [#39160](https://github.com/openclaw/openclaw/issues/39160) | RFC: CaMeL Prompt Injection Defense | 48 days | 5 | Security |
| [#39038](https://github.com/openclaw/openclaw/issues/39038) | OpenClaw node program hangs on Windows 11 24H2 | 48 days | 6 | Platform |
| [#38971](https://github.com/openclaw/openclaw/issues/38971) | macOS Cron tab shows error | 48 days | 6 | UI |
| [#38986](https://github.com/openclaw/openclaw/issues/38986) | web_fetch fails when using VPN TUN mode | 48 days | 5 | Network |
| [#39068](https://github.com/openclaw/openclaw/issues/39068) | Cannot enable tools on main agent (new install) | 48 days | 5 | Regression |
| [#39223](https://github.com/openclaw/openclaw/issues/39223) | Configure wizard hangs at Gateway selection | 48 days | 5 | UX |
| [#39289](https://github.com/openclaw/openclaw/issues/39289) | Duplicate messages in Webchat | 48 days | 5 | Channel |
| [#39335](https://github.com/openclaw/openclaw/issues/39335) | NO_REPLY fragment leaks to webchat UI | 48 days | 5 | UI |

### Issues Needing Maintainer Attention

| Issue | Title | Updated | Blockers |
|-------|-------|---------|----------|
| [#32638](https://github.com/openclaw/openclaw/issues/32638) | Groq + reasoning models fail with 400 error | 2026-04-23 | Provider API compatibility |
| [#39156](https://github.com/openclaw/openclaw/issues/39156) | OTLP log export doesn't work | 2026-04-23 | Module isolation |
| [#37633](https://github.com/openclaw/openclaw/issues/37633) | Feishu error plugin status | 2026-04-23 | Env variable resolution |

---

*Digest generated from OpenClaw GitHub activity on 2026-04-24*

---

## Cross-Ecosystem Comparison

<think>The user wants me to generate a cross-project comparison report based on all the individual project digests I've created. Let me analyze the data from each project and create a comprehensive comparison report.

Let me compile the key metrics from each project:

1. **OpenClaw** (github.com/openclaw/openclaw)
   - Issues: 500 updated in 24h
   - PRs: 500 updated in 24h
   - Releases: 1 new (v2026.4.22)
   - Health: Very high activity, multiple critical bugs, active development

2. **NanoBot** (github.com/HKUDS/nanobot)
   - Issues: 14 updated in 24h
   - PRs: 21 updated in 24h
   - Releases: 0
   - Health: High activity, memory regression issues, active bug fixing

3. **Zeroclaw** (github.com/zeroclaw-labs/zeroclaw)
   - Issues: 50 updated in 24h
   - PRs: 50 updated in 24h
   - Releases: 0
   - Health: High activity, security issues, desktop app development

4. **PicoClaw** (github.com/sipeed/picoclaw)
   - Issues: 36 updated in 24h
   - PRs: 45 updated in 24h
   - Releases: 1 nightly build
   - Health: High activity, provider flexibility, channel enhancements

5. **NanoClaw** (github.com/qwibitai/nanoclaw)
   - Issues: 16 updated in 24h
   - PRs: 33 updated in 24h
   - Releases: 0
   - Health: High activity, security audit findings, Signal channel V2

6. **IronClaw** (github.com/nearai/ironclaw)
   - Issues: 36 updated in 24h
   - PRs: 50 updated in 24h
   - Releases: 0
   - Health: High activity, engine-v2 development, mission scheduling

7. **LobsterAI** (github.com/netease-youdao/LobsterAI)
   - Issues: 6 updated in 24h
   - PRs: 13 updated in 24h
   - Releases: 0
   - Health: Moderate activity, Electron 40 compatibility issues, UI improvements

8. **TinyClaw** (github.com/TinyAGI/tinyclaw)
   - No activity in 24h

9. **Moltis** (github.com/moltis-org/moltis)
   - Issues: 9 updated in 24h
   - PRs: 12 updated in 24h
   - Releases: 0
   - Health: Moderate activity, bug fixes, Signal integration

10. **CoPaw** (github.com/agentscope-ai/CoPaw)
    - Issues: 50 updated in 24h
    - PRs: 50 updated in 24h
    - Releases: 2 (v1.1.4-beta.1, v1.1.3.post1)
    - Health: High activity, console UI improvements, bug fixes

11. **ZeptoClaw** (github.com/qhkm/zeptoclaw)
    - Issues: 4 updated in 24h
    - PRs: 8 updated in 24h
    - Releases: 0
    - Health: Moderate activity, security features, CI improvements

12. **EasyClaw** (github.com/gaoyangz77/easyclaw)
    - Issues: 1 updated in 24h
    - PRs: 0 updated in 24h
    - Releases: 3 (v1.8.7, v1.8.8, v1.8.9)
    - Health: Low activity, maintenance releases

13. **NemoClaw** (github.com/NVIDIA/NemoClaw)
    - Issues: 50 updated in 24h
    - PRs: 50 updated in 24h
    - Releases: 0
    - Health: High activity, security hardening, CI improvements

Now I'll organize this into a comprehensive comparison report.
</think>

# Personal AI Agent Ecosystem: Cross-Project Comparison Report

**Date:** 2026-04-24
**Scope:** 13 Open-Source Projects in the Personal AI Assistant / Agent Landscape

---

## 1. Ecosystem Overview

The personal AI assistant and agent open-source ecosystem is experiencing **high development velocity** across the board, with 12 of 13 tracked projects showing activity in the last 24 hours. The landscape is bifurcating into two distinct tiers: **core platforms** (OpenClaw, Zeroclaw, IronClaw, CoPaw, NemoClaw) with 50+ PRs updated daily, and **specialized forks** (NanoBot, PicoClaw, NanoClaw, Moltis, ZeptoClaw) with 8–33 PRs updated daily. A critical observation is the **security-first maturation** occurring across all projects—multiple forks are independently implementing SSRF protection, credential redaction, and sandbox hardening, suggesting convergent engineering priorities driven by production deployment requirements. The ecosystem shows strong interest in multi-channel delivery (Signal, Telegram, Discord, WhatsApp), local model inference (Ollama, LM Studio, vLLM), and autonomous mission scheduling.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases (24h) | Activity Tier | Health Score |
|---------|-------------|-----------|----------------|---------------|--------------|
| **OpenClaw** | 500 | 500 | 1 (v2026.4.22) | 🔴 Tier 1 | 🟢 Strong |
| **Zeroclaw** | 50 | 50 | 0 | 🟠 Tier 2 | 🟢 Strong |
| **IronClaw** | 36 | 50 | 0 | 🟠 Tier 2 | 🟡 Mixed (P1 bugs) |
| **CoPaw** | 50 | 50 | 2 (beta + patch) | 🟠 Tier 2 | 🟢 Strong |
| **NemoClaw** | 50 | 50 | 0 | 🟠 Tier 2 | 🟡 Mixed (security focus) |
| **PicoClaw** | 36 | 45 | 1 (nightly) | 🟠 Tier 2 | 🟢 Strong |
| **NanoClaw** | 16 | 33 | 0 | 🟡 Tier 3 | 🟡 Mixed (security audit) |
| **NanoBot** | 14 | 21 | 0 | 🟡 Tier 3 | 🟡 Mixed (memory regression) |
| **Moltis** | 9 | 12 | 0 | 🟡 Tier 3 | 🟢 Strong |
| **ZeptoClaw** | 4 | 8 | 0 | 🟢 Tier 4 | 🟢 Strong |
| **LobsterAI** | 6 | 13 | 0 | 🟢 Tier 4 | 🟡 Mixed (Electron 40) |
| **EasyClaw** | 1 | 0 | 3 (patches) | 🔴 Tier 5 | 🟡 Maintenance |
| **TinyClaw** | 0 | 0 | 0 | ⚫ Inactive | ⚫ Dormant |

**Health Score Methodology:** Combines release cadence, bug closure rate, security responsiveness, and community engagement. Projects with critical unfixed bugs or regressions receive lower scores.

---

## 3. OpenClaw's Position

### Advantages vs Peers

| Dimension | OpenClaw | Peer Average |
|-----------|----------|--------------|
| **Activity Volume** | 500 issues/PRs/day | 27 issues/PRs/day |
| **Release Cadence** | Weekly (v2026.4.22) | Sporadic |
| **Community Size** | Largest (by issue volume) | Varies |
| **Feature Breadth** | 50+ channels, 20+ providers | 5–15 channels |
| **Bug Closure Rate** | High (8+ regressions fixed) | Moderate |
| **Security Response** | Rapid (multiple security PRs) | Varies |

### Technical Approach Differences

OpenClaw operates as the **core reference implementation** for the ecosystem, with the following architectural differentiators:

1. **Monolithic Core + Plugin Architecture**: Unlike Zeroclaw's Rust-first approach or IronClaw's engine-v2 abstraction, OpenClaw maintains a Node.js/TypeScript monorepo with a mature plugin system, enabling rapid iteration but requiring careful regression management.

2. **Provider Abstraction**: OpenClaw supports the broadest provider matrix (xAI, Azure, OpenRouter, Anthropic, Google, Ollama, LM Studio, etc.), with today's v2026.4.22 adding xAI image generation and TTS/STT capabilities.

3. **Community Fork Model**: OpenClaw serves as the upstream for NanoClaw, Zeroclaw, PicoClaw, and others, creating a **hub-and-spoke ecosystem** where security fixes and features propagate downstream.

### Community Size Comparison

| Project | Issue Volume (24h) | PR Volume (24h) | Comment Velocity | Relative Size |
|---------|-------------------|-----------------|------------------|---------------|
| **OpenClaw** | 500 | 500 | Very High | Largest |
| **Zeroclaw** | 50 | 50 | High | Large |
| **IronClaw** | 36 | 50 | Medium | Medium-Large |
| **CoPaw** | 50 | 50 | Medium | Medium-Large |
| **NemoClaw** | 50 | 50 | High | Medium-Large |
| Others | <36 | <45 | Low-Medium | Small |

---

## 4. Shared Technical Focus Areas

The following requirements are emerging across multiple projects, indicating ecosystem-wide engineering priorities:

### 4.1 Security Hardening (All Projects)

| Project | Security Focus | Implementation |
|---------|---------------|----------------|
| **OpenClaw** | Native runtime Docker bypass, agent-to-host privilege escalation | Multiple security PRs, regression fixes |
| **NanoClaw** | CSO audit: 7 critical/high findings, agent sandbox hardening | PR #1945 (readonly runner, sshd deny docker) |
| **NemoClaw** | Credential redaction, symlink attack prevention, token externalization | PRs #2392, #1996, #2378, #1954 |
| **ZeptoClaw** | SSRF endpoint validation, hash-chain audit trail | PRs #527, #528 |
| **Moltis** | MCP OAuth re-auth UI, secure credential handling | PR #852 |

**Consensus Need:** All projects are independently implementing:
- SSRF protection for provider endpoints
- Credential/token redaction in logs and error messages
- Symlink validation to prevent path traversal attacks
- Sandbox isolation verification

### 4.2 Local Model Inference (NanoBot, PicoClaw, NemoClaw, ZeptoClaw)

| Project | Local Model Support | Specific Issues |
|---------|--------------------|--------------------|
| **NanoBot** | Ollama, LM Studio | Port override returns 401 (#2318), local inference not working (#2354) |
| **PicoClaw** | Ollama, LM Studio, Intel OpenVINO | Ollama cloud credentials (#2225), OpenVINO support PR #2496 |
| **NemoClaw** | Ollama | Ollama port override returns 401 (#2318) |
| **ZeptoClaw** | Liquid AI (LFM) | PR #543 for LFM2 integration |
| **OpenClaw** | Ollama, LM Studio, vLLM | Self-hosted vLLM integration (#893) |

**Consensus Need:** Users want seamless local model integration with automatic OpenAI-compatible endpoint detection, credential management, and fallback to cloud providers.

### 4.3 Multi-Channel Delivery (OpenClaw, NanoClaw, PicoClaw, CoPaw, Moltis)

| Channel | Projects Supporting | Notable Gaps |
|---------|--------------------|--------------------|
| **Signal** | NanoClaw (V2), Moltis, OpenClaw | NanoClaw V2 just merged; Moltis in progress |
| **Telegram** | All major projects | Silent failures on long responses (IronClaw, PicoClaw) |
| **Discord** | OpenClaw, CoPaw, PicoClaw | Reply routing bugs, Opus decoder corruption |
| **WhatsApp** | OpenClaw, PicoClaw | LID migration causes message drops (PicoClaw) |
| **Feishu/Lark** | OpenClaw, CoPaw | RenderMode hardcoded, thinking tags not filtered |
| **Matrix** | Zeroclaw | Feature request, not yet implemented |

**Consensus Need:** Reliable multi-channel delivery with consistent message formatting, attachment handling, and graceful degradation.

### 4.4 Autonomous Scheduling / Mission Execution (OpenClaw, IronClaw, CoPaw, NemoClaw)

| Project | Scheduling Feature | Status |
|---------|-------------------|--------|
| **OpenClaw** | Cron, scheduled tasks | Multiple bugs: channel restrictions, notification delays |
| **IronClaw** | Mission tool family (create, list, update, fire, pause, resume) | Just shipped; "terminal exhausted" error blocking manual Fire |
| **CoPaw** | Cron tasks | Weixin channel fails with KeyError |
| **NemoClaw** | Scheduled tasks | npm install blocked (403), policy edge cases |

**Consensus Need:** Reliable, channel-agnostic scheduling with notification delivery and error recovery.

### 4.5 MCP (Model Context Protocol) Integration (OpenClaw, IronClaw, Moltis, CoPaw)

| Project | MCP Status | Issues |
|---------|------------|--------|
| **OpenClaw** | Active development | MCP server tools not in /tools inventory (#70876) |
| **IronClaw** | Active development | stdio MCP activation fails with OAuth discovery (#2923) |
| **Moltis** | Active development | OAuth re-auth button missing (#851, fixed) |
| **CoPaw** | Active development | MCP client TaskGroup exception causes freeze (#3640) |

**Consensus Need:** Robust MCP server management with OAuth support, credential refresh, and graceful error handling.

---

## 5. Differentiation Analysis

### Feature Focus Differentiation

| Project | Primary Focus | Target User | Key Differentiator |
|---------|--------------|-------------|-------------------|
| **OpenClaw** | General-purpose agent platform | Developers, power users | Broadest channel/provider support, core reference |
| **Zeroclaw** | Rust-native, enterprise features | Enterprise, security-conscious | WASM plugin execution, schema v3 migration, Tauri desktop |
| **IronClaw** | Mission orchestration, multi-tenant | Teams, enterprises | Mission scheduling, gateway state convergence epic |
| **CoPaw** | Console UI, visual management | Non-technical users | Web console, skill pool management, visual configuration |
| **NemoClaw** | NVIDIA ecosystem, Jetson edge | Edge AI, robotics | NVIDIA inference integration, Jetson optimization |
| **PicoClaw** | Lightweight, Go-based | Resource-constrained | Smaller footprint, parallel Go development |
| **NanoBot** | Memory optimization | Efficiency-focused | history.jsonl bloat prevention, memory capping |
| **NanoClaw** | Signal-first, security | Privacy-conscious | Native Signal integration, CSO security audit |
| **ZeptoClaw** | Safety, audit | Security-first deployments | SSRF validation, hash-chain audit trail |
| **Moltis** | Rust-native, local models | Local inference enthusiasts | Rust performance, skill bundling (101 skills) |
| **LobsterAI** | Desktop app, Chinese market | Non-technical, Chinese users | Electron desktop, WeChat/Feishu integration |
| **EasyClaw** | Simple distribution | End users | Pre-built binaries, minimal configuration |

### Technical Architecture Comparison

| Project | Language | Architecture | Sandbox | Plugin Model |
|---------|----------|--------------|---------|--------------|
| **OpenClaw** | TypeScript/Node.js | Monorepo | Docker | npm packages |
| **Zeroclaw** | Rust + TypeScript | Hybrid | Docker, native | SKILL.md + WASM |
| **IronClaw** | Python (Monty) + TypeScript | Engine v2 abstraction | Docker | Skills, MCP |
| **CoPaw** | Python + TypeScript | Web-first | Docker | Python skills |
| **NemoClaw** | Go + Python | CLI-centric | Docker | openclaw plugins |
| **PicoClaw** | Go | Lightweight | Docker | MCP tools |
| **NanoBot** | Python | Memory-optimized | Docker | Skills |
| **NanoClaw** | TypeScript/Node.js | Fork of OpenClaw | Docker | Skills, Signal |
| **ZeptoClaw** | Rust | Safety-focused | Docker | Rust modules |
| **Moltis** | Rust | Performance-focused | Docker | SKILL.md |
| **LobsterAI** | Python + Electron | Desktop app | Docker | openclaw plugins |
| **EasyClaw** | Unknown | Binary distribution | Unknown | Unknown |
| **TinyClaw** | Unknown | Unknown | Unknown | Unknown |

### Target User Segmentation

```
Enterprise / Security-Conscious
├── Zeroclaw (Rust, WASM, schema v3)
├── ZeptoClaw (SSRF protection, audit trail)
└── NemoClaw (NVIDIA ecosystem, Jetson)

Teams / Multi-Tenant
├── IronClaw (multi-tenant channels, missions)
└── CoPaw (console UI, skill pools)

Developers / Power Users
├── OpenClaw (core reference, broadest support)
├── PicoClaw (Go, lightweight)
└── Moltis (Rust, local models)

Non-Technical / End Users
├── LobsterAI (desktop app, Chinese market)
└── EasyClaw (pre-built binaries)

Privacy / Signal-Focused
└── NanoClaw (Signal V2, security audit)

Efficiency / Memory-Constrained
└── NanoBot (memory optimization)
```

---

## 6. Community Momentum & Maturity

### Activity Tiers

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapid Iteration** | OpenClaw, Zeroclaw, IronClaw, CoPaw, NemoClaw, PicoClaw | 36–500 PRs/day, weekly releases, active security hardening, multiple P1 bugs in flight |
| **Steady Development** | NanoClaw, NanoBot, Moltis | 9–33 PRs/day, sporadic releases, focused feature development (Signal V2, memory fixes, bundled skills) |
| **Maintenance** | ZeptoClaw, LobsterAI | 4–13 PRs/day, patch releases, bug fixes

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

<think>Let me analyze the GitHub data for NanoBot and generate a structured project digest for 2026-04-24.

Key data points:
- Issues updated in last 24h: 14 (5 open, 9 closed)
- PRs updated in last 24h: 21 (12 open, 9 merged/closed)
- New releases: 0

Let me categorize and analyze:

**Today's Overview:**
- High activity with 14 issues and 21 PRs updated
- No new releases
- Multiple bug fixes merged, especially around history.jsonl bloat
- Several feature PRs in progress

**Releases:**
- None today

**Project Progress (merged/closed PRs):**
1. #3415 - fix(agent): bound remaining memory/history pollution paths
2. #3412 - fix(agent): prevent history.jsonl bloat from raw_archive and stuck consolidation
3. #3414 - fix(agent): cap recent history section in system prompt
4. #3413 - fix(agent): cherry-pick of #3412 to nightly
5. #3399 - feat(agent): emit structured tool-event payloads via on_progress
6. #3264 - feat(config): add custom provider support (duplicate)
7. #3234 - fix(email): guard against self-reply loop when bot emails itself
8. #3398 - feat(telegram): add inline keyboard buttons

**Community Hot Topics (by comments):**
1. #2892 - cron mechanism question (15 comments) - closed
2. #2049 - Missing ability to create skills (13 comments) - closed
3. #1932 - Skill disable feature request (7 comments) - open
4. #3402 - Replace JSON with TOML (7 comments) - closed
5. #3407 - File upload in webUI (4 comments) - closed


6. #173 - API key reuse issue (4 comments) - closed
7. #3377 - Multi subagent repeated reply bug (4 comments) - closed
8. #162 - Session management improvement (3 comments) - closed
9. #3406 - WhatsApp invalid token (3 comments) - closed

**Bugs & Stability:**
Several critical issues resolved today: history.jsonl bloat causing memory problems, email self-reply loops, WhatsApp token validation errors, and multi-subagent reply duplication. The team also addressed API key caching issues and session management problems.

**Feature Requests & Roadmap Signals:**
Users are requesting TOML configuration support, web UI file uploads, native WhatsApp voice capabilities, and skill management features like enable/disable toggles. There's also interest in OpenTelemetry observability, model presets, and project-manager skills for context isolation.

**User Feedback:**
Cron mechanism questions and skill creation gaps are creating friction. Memory consumption jumped significantly in v0.1.5.post2, and users want more granular control over the Dream feature's file editing capabilities.

**Backlog Watch:**
Several issues remain unaddressed: the skill disable request (#1932) has been sitting for over a month, WhatsApp voice support (#2152) is marked as open, and the large RAM consumption bug (#3410) needs investigation.
</think>

# NanoBot Project Digest — 2026-04-24

## 1. Today's Overview

NanoBot shows **high development activity** on 2026-04-24 with 14 issues and 21 PRs updated in the last 24 hours. No new releases were published, but the team merged **8 pull requests** focused on critical bug fixes—particularly around `history.jsonl` bloat causing memory issues and an email self-reply loop. Community engagement remains strong with 14 issues updated, including several feature discussions. The project appears stable with active maintenance, though a memory regression in v0.1.5.post2 (#3410) and a deprecated API parameter issue (#3417) were newly reported.

---

## 2. Releases

**No new releases today.** The last release remains v0.1.5.post2, which users report introduced a memory regression (see Bugs section).

---

## 3. Project Progress

The following PRs were **merged/closed** today:

| PR | Title | Category |
|----|-------|----------|
| [#3415](https://github.com/HKUDS/nanobot/pull/3415) | fix(agent): bound remaining memory/history pollution paths | Bug Fix |
| [#3412](https://github.com/HKUDS/nanobot/pull/3412) | fix(agent): prevent history.jsonl bloat from raw_archive and stuck consolidation | Bug Fix |
| [#3414](https://github.com/HKUDS/nanobot/pull/3414) | fix(agent): cap recent history section in system prompt | Bug Fix |
| [#3413](https://github.com/HKUDS/nanobot/pull/3413) | fix(agent): cherry-pick of #3412 to nightly | Bug Fix |
| [#3399](https://github.com/HKUDS/nanobot/pull/3399) | feat(agent): emit structured tool-event payloads via on_progress | Feature |
| [#3234](https://github.com/HKUDS/nanobot/pull/3234) | fix(email): guard against self-reply loop when bot emails itself | Bug Fix |
| [#3398](https://github.com/HKUDS/nanobot/pull/3398) | feat(telegram): add inline keyboard buttons | Feature |
| [#3264](https://github.com/HKUDS/nanobot/pull/3264) | feat(config): add custom provider support (duplicate) | Feature |

**Key advancements:**
- **Memory/History fixes**: Multiple PRs (#3412, #3413, #3414, #3415) addressed `history.jsonl` bloat that was causing system prompt inflation and memory issues. Removed the problematic `_cap_consolidation_boundary` and added caps on recent history sections.
- **Email loop fix**: PR #3234 prevents infinite reply loops when the bot emails itself.
- **Telegram enhancement**: PR #3398 adds inline keyboard button support for Telegram channels.

---

## 4. Community Hot Topics

Issues with highest engagement (by comment count):

| Issue | Title | Comments | Status |
|-------|-------|----------|--------|
| [#2892](https://github.com/HKUDS/nanobot/issues/2892) | 定时任务的机制 - cron mechanism | 15 | Closed |
| [#2049](https://github.com/HKUDS/nanobot/issues/2049) | [question] Missing ability to create skills | 13 | Closed |
| [#1932](https://github.com/HKUDS/nanobot/issues/1932) | 技能不支持禁用，只能删除 | 7 | **Open** |
| [#3402](https://github.com/HKUDS/nanobot/issues/3402) | Replace JSON with TOML for configuration files | 7 | Closed |
| [#3407](https://github.com/HKUDS/nanobot/issues/3407) | Feature Request: Add file upload support in the webUI | 4 | Closed |

**Analysis:**
- **Cron mechanism confusion** (#2892): Users don't understand why scheduled tasks only execute after gateway restart. This suggests documentation gaps around the task scheduling architecture.
- **Skill creation missing** (#2049): Users expect the bot to help create skills but the tool is unavailable. Indicates a regression or missing feature.
- **Skill disable toggle** (#1932): **Open issue** with 7 comments—users want granular control over skills without deletion. This is a common feature request pattern.
- **TOML config migration** (#3402): Strong interest in human-friendly configuration; closed but may inform future config improvements.
- **WebUI file upload** (#3407): Users want direct file uploads in the browser interface.

---

## 5. Bugs & Stability

**Newly reported bugs:**

| Issue | Title | Severity | Fix PR |
|-------|-------|----------|--------|
| [#3417](https://github.com/HKUDS/nanobot/issues/3417) | anthropic_provider hardcodes `temperature=1.0` — Claude Opus 4.7 rejects with 400 | **High** | [#3418](https://github.com/HKUDS/nanobot/pull/3418) (open) |
| [#3410](https://github.com/HKUDS/nanobot/issues/3410) | Large RAM consumption in v0.1.5.post2 (~600MB vs ~200MB) | **High** | None |
| [#3406](https://github.com/HKUDS/nanobot/issues/3406) | WhatsApp fail to login said invalid token after upgrade | Medium | None |
| [#3390](https://github.com/HKUDS/nanobot/issues/3390) | Tool Call error "Sorry, I encountered an error" in Telegram | Medium | None |
| [#3377](https://github.com/HKUDS/nanobot/issues/3377) | Multi subagent doing jobs lead to multi repeated reply | Medium | None |

**Fixed bugs (merged today):**
- **Email self-reply loop** (#3215 → PR #3234): Bot was sending thousands of emails when emailing itself.
- **History.jsonl bloat** (multiple PRs): Memory pollution from uncapped LLM summaries and stuck consolidation.

**Stability note:** The memory regression in v0.1.5.post2 (#3410) is concerning and may be related to the new "dream" feature. No fix PR exists yet.

---

## 6. Feature Requests & Roadmap Signals

**Active feature PRs (open):**

| PR | Title | Category |
|----|-------|----------|
| [#3411](https://github.com/HKUDS/nanobot/pull/3411) | feat(lateX): add lateX to feishu channel using codecogs | Channel Enhancement |
| [#3173](https://github.com/HKUDS/nanobot/pull/3173) | feat(observability): OpenTelemetry tracing for LLM calls and tools | Observability |
| [#3358](https://github.com/HKUDS/nanobot/pull/3358) | feat(config): add model presets for quick model switching | Configuration |
| [#3400](https://github.com/HKUDS/nanobot/pull/3400) | feat(dream): allow users to decide whether dream can edit USER.md and SOUL.md | Security/Control |
| [#3408](https://github.com/HKUDS/nanobot/pull/3408) | feat(mgp): opt-in MGP sidecar for governed cross-session memory | Memory |
| [#3403](https://github.com/HKUDS/nanobot/pull/3403) | feat(skills): add project-manager for per-project context isolation | Skills |
| [#3401](https://github.com/HKUDS/nanobot/pull/3401) | feat(api): add embeddings support for OpenAI-compatible providers | API |
| [#3303](https://github.com/HKUDS/nanobot/pull/3303) | feat: spawn_status/spawn_cancel tools, domain loop detection | Tooling |
| [#3416](https://github.com/HKUDS/nanobot/pull/3416) | feat: add prefer_free option for OpenRouter free models | Provider |

**Roadmap signals:**
- **Observability**: OpenTelemetry integration (#3173) suggests focus on enterprise readiness.
- **Memory governance**: MGP sidecar (#3408) indicates investment in long-term memory management.
- **Model flexibility**: Model presets (#3358) and embeddings support (#3401) show expansion of multi-model workflows.
- **User control**: Dream file editing restrictions (#3400) address security concerns.

---

## 7. User Feedback Summary

**Pain points:**
1. **Memory regression**: Upgrading to v0.1.5.post2 causes 3x memory increase (~200MB → ~600MB). Users suspect the "dream" feature.
2. **Cron task confusion**: Scheduled tasks only work after gateway restart—counterintuitive UX.
3. **Skill management**: Cannot disable skills without deleting them (#1932).
4. **API key caching**: Old API keys persist despite config updates (#173).

**Positive feedback:**
- WebUI is described as "clean and user-friendly" (#3407).
- Project is generally well-received: "thanks for this excellent project!"

**Use cases emerging:**
- Multi-subagent orchestration for parallel analysis tasks.
- Cross-session memory with governance requirements.
- Per-project context isolation for complex workflows.

---

## 8. Backlog Watch

**Issues needing maintainer attention:**

| Issue | Title | Age | Priority |
|-------|-------|-----|----------|
| [#1932](https://github.com/HKUDS/nanobot/issues/1932) | 技能不支持禁用，只能删除 | ~42 days | Medium |
| [#2152](https://github.com/HKUDS/nanobot/issues/2152) | Feature: Native WhatsApp voice message support (STT + TTS) | ~38 days | Medium |
| [#3410](https://github.com/HKUDS/nanobot/issues/3410) | Large RAM consumption in v0.1.5.post2 | New | **High** |
| [#3406](https://github.com/HKUDS/nanobot/issues/3406) | WhatsApp fail to login invalid token | 1 day | Medium |

**Notes:**
- **#1932** (skill disable) has 7 comments and a "good first issue" label—ideal for community contribution.
- **#2152** (WhatsApp voice) has 2 👍 reactions; user built a working integration but needs core support.
- **#3410** (memory) is fresh but high-impact; users downgrading versions to avoid it.

---

*Digest generated from NanoBot (HKUDS/nanobot) GitHub data for 2026-04-24.*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>Let me analyze the GitHub data for Zeroclaw and generate a structured project digest for 2026-04-24.

Key data points:
- Issues updated in last 24h: 50 (open/active: 45, closed: 5)
- PRs updated in last 24h: 50 (open: 45, merged/closed: 5)
- New releases: 0

Let me organize the information:

**Today's Overview:**
- High activity with 50 issues and 50 PRs updated
- No new releases
- Several high-priority bugs and features in progress

**Releases:**
- None today

**Project Progress:**
Looking at PRs:
- #6054: fix(skills): respect timeout_secs from SKILL.toml - new PR
- #5952: fix(skills): restrict audit to structural checks - in progress
- #6050: fix(windows): unbreak cargo test - closed
- #5365: fix(gateway): track pre-built web dashboard - closed
- #5905: fix(#5720): add workspace bind-mount support to DockerSandbox
- #5972: fix(#5721): allow prompts inside [skill] TOML section
- #5992: feat(slack): add strict_mention_in_thread option
- #5265: feat(desktop): Tauri desktop app with node persistence and E2E tests
- #5788: RFC: Replace TOML i18n with Mozilla Fluent
- #6033: feat(tools): SessionsCurrentTool
- #5986: feat(observability): add runtime tracing and SSE broadcast
- #6009: feat(obs): enrich OTel tool spans
- #6008: feat(provider): add prompt caching to OpenRouter
- #6035: fix(channels/acp): correct tool output formatting
- #6043: feat(infra): add get_session_metadata(key)


- #5979: feat(channels): opt-out reply-intent precheck
- #5957: fix(acp): accept prompt as content-part array
- #5985: fix(infra): add SQLite FTS UPDATE trigger
- #5987: feat: nix package

**Community Hot Topics:**
Looking at issues by comment count:
1. #5719 (CLOSED) - runtime.kind = "native" does not bypass Docker for shell tool execution - 12 comments, high risk security bug
2. #2503 (OPEN) - Feature: where is napcat channel - 8 comments
3. #5877 (OPEN) - release: v0.7.4 milestone tracking - 6 comments
4. #5847 (OPEN) - Bug: Document the use of gateway.web_dist_dir - 6 comments
5. #5947 (OPEN) - Feature: schema v3 — batch breaking field migrations - 5 comments
6. #3361 (CLOSED) - Feature: Add Matrix as a delivery channel - 4 comments
7. #5844 (OPEN) - Bug: Too much emphasis on memory - 3 comments
8. #6007 (OPEN) - Bug: Anthropic provider always sends `temperature` - 3 comments
9. #5951 (OPEN) - Feature: Clean-slate rewrite of zeroclaw onboard - 3 comments
10. #6001 (OPEN) - Bug: gateway-chat succeeds but /api/cost stays zero - 3 comments

**Bugs & Stability:**
High severity issues include a critical runtime bug where native mode doesn't bypass Docker for shell execution, plus an S0-level cron job failure causing data loss and security risks. The Anthropic provider is also sending temperature parameters incorrectly, breaking Claude 4.7 compatibility. Several S1-level issues are blocking workflows, including Ollama provider failures when tools are needed, message delivery problems, and desktop crashes. Lower-priority S3 issues involve missing web dashboard documentation and minor bugs.

**Feature Requests & Roadmap:**
Major initiatives are underway: a clean-slate rewrite of the onboard system, schema v3 with batch breaking field migrations, WASM execution bridge completion via Extism, and a Tauri desktop application with node persistence and end-to-end tests. Additional features include Slack's strict_mention_in_thread option, OpenRouter prompt caching, and runtime tracing with SSE broadcast capabilities.

**User Feedback:**
Users are encountering several friction points: Docker configuration complexity, missing documentation for gateway.web_dist_dir, memory prioritization issues in cron jobs, and challenges with multiple model providers. The napcat/onebot channel remains difficult to locate.

**Backlog Watch:**
Several long-standing issues need attention: #2503 requesting napcat channel support, #2998 asking for multiple model providers, and #2973 seeking print performance optimization for loop run results.
</think>

# Zeroclaw Project Digest — 2026-04-24

## 1. Today's Overview

Zeroclaw shows **high development velocity** with 50 issues and 50 PRs updated in the last 24 hours, though no new releases shipped today. The project is actively addressing a critical security bug (#5719, now closed) involving Docker bypass in native runtime mode, while multiple high-priority features are progressing through review—including a major onboard rewrite (#5951) and schema v3 migration (#5947). Community engagement remains strong with several discussions exceeding 5 comments, indicating active collaboration on complex features like WASM plugin execution (#5912) and observability enhancements (#5986).

## 2. Releases

**No new releases** were published today. The project is tracking v0.7.4 milestones in [#5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877), with work items including the review-session skill landing and retirement of the github-pr-skill.

## 3. Project Progress

### Merged/Closed PRs (5)
| PR | Description | Status |
|----|-------------|--------|
| [#6050](https://github.com/zeroclaw-labs/zeroclaw/pull/6050) | fix(windows): unbreak cargo test and add update self-update target triples | Closed |
| [#5365](https://github.com/zeroclaw-labs/zeroclaw/pull/5365) | fix(gateway): track pre-built web dashboard in git for reliable installs | Closed |

### Notable Open PRs Advancing
| PR | Description | Area |
|----|-------------|------|
| [#6054](https://github.com/zeroclaw-labs/zeroclaw/pull/6054) | fix(skills): respect timeout_secs from SKILL.toml | Skills |
| [#5952](https://github.com/zeroclaw-labs/zeroclaw/pull/5952) | fix(skills): restrict audit to structural checks, delegate command safety to shell policy | Skills |
| [#5905](https://github.com/zeroclaw-labs/zeroclaw/pull/5905) | fix(#5720): add workspace bind-mount support to DockerSandbox | Runtime |
| [#5972](https://github.com/zeroclaw-labs/zeroclaw/pull/5972) | fix(#5721): allow prompts inside [skill] TOML section | Skills |
| [#6033](https://github.com/zeroclaw-labs/zeroclaw/pull/6033) | feat(tools): SessionsCurrentTool — expose active session identity | Tools |
| [#5986](https://github.com/zeroclaw-labs/zeroclaw/pull/5986) | feat(observability): add runtime tracing and SSE broadcast for agent turn lifecycle | Observability |
| [#6008](https://github.com/zeroclaw-labs/zeroclaw/pull/6008) | feat(provider): add prompt caching to OpenRouter | Provider |
| [#5265](https://github.com/zeroclaw-labs/zeroclaw/pull/5265) | feat(desktop): Tauri desktop app with node persistence and E2E tests | Desktop |
| [#5987](https://github.com/zeroclaw-labs/zeroclaw/pull/5987) | feat: nix package (decoupled Rust + Web builds) | Packaging |

## 4. Community Hot Topics

**Most Active Discussions (by comment count):**

1. **[#5719](https://github.com/zeroclaw-labs/zeroclaw/issues/5719)** — `[CLOSED]` runtime.kind = "native" does not bypass Docker for shell tool execution — **12 comments**  
   *Critical security/runtime bug; now closed after resolution*

2. **[#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503)** — `[OPEN]` Feature: where is napcat channel — **8 comments**  
   *Users cannot find the napcat/onebot channel option; request to add onebot11 support*

3. **[#5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877)** — `[OPEN]` release: v0.7.4 milestone tracking — **6 comments**  
   *Tracking issue for upcoming release with checklist items*

4. **[#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847)** — `[OPEN]` Bug: Document gateway.web_dist_dir usage — **6 comments**  
   *Users unclear how to configure web dashboard; documentation gap*

5. **[#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947)** — `[OPEN]` Feature: schema v3 — batch breaking field migrations — **5 comments**  
   *Merge blocker; coordinating all pending breaking config field changes*

**Underlying Needs:**  
- **Channel expansion**: Users want Matrix (#3361) and OneBot (#2503) delivery channels  
- **Documentation clarity**: Gateway configuration and web dashboard setup need better docs  
- **Schema stability**: Major breaking migration in progress signals technical debt management

## 5. Bugs & Stability

**Ranked by Severity:**

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **S0** | [#5991](https://github.com/zeroclaw-labs/zeroclaw/issues/5991) | Failed cron job causing data loss/security risk | — |
| **S0** | [#5719](https://github.com/zeroclaw-labs/zeroclaw/issues/5719) | Native runtime bypassing Docker (security) | Closed |
| **S1** | [#6007](https://github.com/zeroclaw-labs/zeroclaw/issues/6007) | Anthropic provider sends `temperature`, breaking Claude 4.7 | — |
| **S1** | [#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) | Ollama Provider call failed when tools are needed | — |
| **S1** | [#6002](https://github.com/zeroclaw-labs/zeroclaw/issues/6002) | Messages not clearly addressed to assistant | — |
| **S1** | [#5984](https://github.com/zeroclaw-labs/zeroclaw/issues/5984) | zeroclaw-desktop crash for "No provider set" | In-progress |
| **S2** | [#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) | Too much emphasis on memory in cron jobs | — |
| **S3** | [#5959](https://github.com/zeroclaw-labs/zeroclaw/issues/5959) | Web dashboard unavailable in Docker image | — |

**Key Observations:**
- 4 S1-level workflow blockers reported; no fix PRs identified yet
- Anthropic provider bug (#6007) affects Claude 4.7 compatibility—requires struct modification
- Desktop app stability issues emerging (#5984)

## 6. Feature Requests & Roadmap Signals

**High-Impact Features In Progress:**

| Feature | Issue/PR | Status | Notes |
|---------|----------|--------|-------|
| Clean-slate onboard rewrite | [#5951](https://github.com/zeroclaw-labs/zeroclaw/issues/5951) | In-progress | Replacing 8,534-line wizard.rs monolith |
| Schema v3 migration | [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) | In-progress | Batch breaking field changes |
| WASM execution bridge (Extism) | [#5912](https://github.com/zeroclaw-labs/zeroclaw/issues/5912) | In-progress | Phase 2 D2 per RFC #5574 |
| Tauri desktop app | [#5265](https://github.com/zeroclaw-labs/zeroclaw/pull/5265) | Open | macOS automation, node persistence, E2E tests |
| SessionsCurrentTool | [#6033](https://github.com/zeroclaw-labs/zeroclaw/pull/6033) | Open | Expose active session identity |
| Prompt caching (OpenRouter) | [#6008](https://github.com/zeroclaw-labs/zeroclaw/pull/6008) | Open | Forward cache markers to upstream providers |

**User-Requested Features Likely in Next Release:**
- Multiple model provider support (#2998) — long-standing request
- Matrix delivery channel (#3361) — cron output delivery
- Slack strict_mention_in_thread (#5992) — thread behavior control
- Cancellation support for ACP sessions (#5837)

## 7. User Feedback Summary

**Pain Points:**
- **Docker complexity**: Native runtime not bypassing Docker as expected (#5719)
- **Configuration confusion**: Unclear how to set `gateway.web_dist_dir` (#5847)
- **Memory over-prioritization**: Cron jobs giving too much weight to memories (#5844)
- **Channel discovery**: Cannot find napcat/onebot option (#2503)
- **Provider limitations**: Cannot use multiple model providers simultaneously (#2998)

**Positive Signals:**
- InvestorClaw project (#5719) demonstrates production-grade usage as exemplar
- Active community contributions across skills, observability, and infrastructure
- Desktop app development (#5265) expanding platform reach

**Dissatisfaction Areas:**
- Documentation gaps for gateway configuration
- SQLite FTS index staleness during streaming persistence (#5834, #5985)
- ACP protocol tool output formatting issues (#6035)

## 8. Backlog Watch

**Important Issues Needing Maintainer Attention:**

| Issue | Age | Priority | Description |
|-------|-----|----------|-------------|
| [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) | ~53 days | Enhancement | napcat/onebot channel not discoverable |
| [#2998](https://github.com/zeroclaw-labs/zeroclaw/issues/2998) | ~47 days | Enhancement | Multiple model providers request |
| [#2973](https://github.com/zeroclaw-labs/zeroclaw/issues/2973) | ~47 days | Enhancement | Optimize print performance of loop run results |
| [#3361](https://github.com/zeroclaw-labs/zeroclaw/issues/3361) | ~43 days | Enhancement | Matrix delivery channel for cronjobs |
| [#4352](https://github.com/zeroclaw-labs/zeroclaw/issues/4352) | ~32 days | Enhancement | GitHub integration tool |

**Stale PRs Requiring Action:**
| PR | Age | Description |
|----|-----|-------------|
| [#5265](https://github.com/zeroclaw-labs/zeroclaw/pull/5265) | ~21 days | Tauri desktop app (large feature, needs review) |
| [#5788](https://github.com/zeroclaw-labs/zeroclaw/pull/5788) | ~8 days | RFC: Replace TOML i18n with Mozilla Fluent |

---
*Digest generated from Zeroclaw GitHub activity on 2026-04-24*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

<think>Let me analyze the GitHub data for PicoClaw and generate a structured project digest for 2026-04-24.

Key data points:
- Issues updated in last 24h: 36 (all open/active, 0 closed)
- PRs updated in last 24h: 45 (39 open, 6 merged/closed)
- New releases: 1 (nightly build v0.2.7-nightly.20260424.f4400472)

Let me organize this into the required sections:

1. **Today's Overview** - High activity, 36 issues, 45 PRs, one nightly release
2. **Releases** - Nightly build v0.2.7-nightly.20260424.f4400472
3. **Project Progress** - Need to identify merged/closed PRs from the data
4. **Community Hot Topics** - Most commented issues
5. **Bugs & Stability** - Bug reports
6. **Feature Requests & Roadmap Signals** - Enhancement requests
7. **User Feedback Summary** - Pain points from issues
8. **Backlog Watch** - Long-unanswered issues

Looking at the PRs:
- #2640 is CLOSED - dependency bump for bedrockruntime
- The rest are OPEN

Looking at the issues, all 36 are OPEN. The most commented ones are:
- #2408: 9 comments - LLM Account Stacking feature
- #2225: 8 comments - Ollama cloud credentials
- #2468: 6 comments - Scheduled Task Fails to Execute
- #1757: 5 comments - channel error with cron
- #2377: 5 comments - unsafe terminal control characters
- #2465: 5 comments - SMTP email feature request

Let me structure this properly.
</think>

# PicoClaw Project Digest — 2026-04-24

## 1. Today's Overview

PicoClaw shows **high development velocity** with 36 issues and 45 PRs updated in the last 24 hours. All tracked issues remain open with no closures, indicating active discussion rather than resolution. The project released a new nightly build (v0.2.7-nightly.20260424.f4400472), suggesting ongoing feature integration. Community engagement is robust, with feature requests dominating the issue queue, particularly around provider flexibility, channel enhancements, and tool improvements. The dependency update cadence is healthy, with multiple PRs bumping Go and TypeScript dependencies.

---

## 2. Releases

### Nightly Build Released
- **Version**: `v0.2.7-nightly.20260424.f4400472`
- **Type**: Automated nightly build (unstable)
- **Changelog**: https://github.com/sipeed/picoclaw/compare/v0.2.7...main
- **Note**: Users are advised to use with caution as this is an unstable build.

---

## 3. Project Progress

### Merged/Closed PRs (6 total)
| PR | Description | Status |
|----|-------------|--------|
| [#2640](https://github.com/sipeed/picoclaw/pull/2640) | Bump aws-sdk-go-v2/service/bedrockruntime (1.50.4 → 1.50.5) | Closed |

### Open PRs Advancing (39 total)
| PR | Author | Domain | Summary |
|----|--------|--------|---------|
| [#2643](https://github.com/sipeed/picoclaw/pull/2643) | BeaconCat | CI/Build | Parallel macOS CGO launcher build, lowercase Docker tags |
| [#2642](https://github.com/sipeed/picoclaw/pull/2642) | BeaconCat | Docker/Go | PID file fix for container environments, govet shadow fix |
| [#2645](https://github.com/sipeed/picoclaw/pull/2645) | loafoe | Provider | Bedrock StreamingProvider implementation for real-time token streaming |
| [#2644](https://github.com/sipeed/picoclaw/pull/2644) | afjcjsbx | Tool | Separate message mode for chat tool feedback |
| [#2641](https://github.com/sipeed/picoclaw/pull/2641) | afjcjsbx | Tool/CLI | Full MCP CLI management suite (show, add, list, remove, test, edit) |
| [#2626](https://github.com/sipeed/picoclaw/pull/2626) | webhtb | Provider/Agent | Native audio input support for multimodal LLMs (Gemini 1.5) |
| [#2496](https://github.com/sipeed/picoclaw/pull/2496) | JohnLeFeng | Provider | Intel OpenVINO Model Server support for local LLM inference |
| [#2504](https://github.com/sipeed/picoclaw/pull/2504) | jacrify | Channel | Fix Opus frame data corruption in OGG decoder for Discord voice |

**Key Themes**: Enhanced CI/CD infrastructure, expanded provider support (Bedrock streaming, OpenVINO), improved MCP tooling, and multimodal capabilities.

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Comments | Type | Topic |
|-------|----------|------|-------|
| [#2408](https://github.com/sipeed/picoclaw/issues/2408) | 9 | Enhancement | **LLM Account Stacking** — Automatic API key rotation on rate limits/quotas |
| [#2225](https://github.com/sipeed/picoclaw/issues/2225) | 8 | Enhancement | **Ollama Cloud Credentials** — Support for Ollama cloud authentication |
| [#2468](https://github.com/sipeed/picoclaw/issues/2468) | 6 | Bug | **Scheduled Task Fails** — Cron tool restricted to internal channels |
| [#1757](https://github.com/sipeed/picoclaw/issues/1757) | 5 | Bug | **Hourly Task Channel Error** — Agent cron scheduling breaks with Telegram |
| [#2377](https://github.com/sipeed/picoclaw/issues/2377) | 5 | Bug | **Unsafe Terminal Characters** — exec tool emits ANSI/bidi control characters |
| [#2465](https://github.com/sipeed/picoclaw/issues/2465) | 5 | Enhancement | **SMTP Email Channel** — Send scheduled task results via email |

### Underlying Needs Analysis
- **Provider Flexibility**: Users want multi-account support (#2408) and diverse authentication methods (#2225, #2169 double-HEAD support)
- **Reliable Scheduling**: Cron/scheduling functionality has multiple related bugs (#2468, #1757) affecting core use cases
- **Communication Channels**: Feature requests for SMTP (#2465), WhatsApp improvements (#2540, #2541), and mobile UX (#2376)
- **Security**: Terminal output safety (#2377) and workspace isolation concerns (#2519)

---

## 5. Bugs & Stability

### Active Bug Reports (ranked by engagement)

| Issue | Severity Signals | Domain | Status |
|-------|------------------|--------|--------|
| [#2468](https://github.com/sipeed/picoclaw/issues/2468) | High — Core feature broken | Cron | Open |
| [#2377](https://github.com/sipeed/picoclaw/issues/2377) | Medium — Security concern | Tool | Open |
| [#2478](https://github.com/sipeed/picoclaw/issues/2478) | Medium — Skill override bug | Agent/Skill | Open |
| [#2280](https://github.com/sipeed/picoclaw/issues/2280) | Medium — Startup failure | Provider/Channel | Open |
| [#2482](https://github.com/sipeed/picoclaw/issues/2482) | Medium — Tool calls fail | Provider | Open |
| [#2540](https://github.com/sipeed/picoclaw/issues/2540) | Medium — Silent message drops | WhatsApp | Open |
| [#2472](https://github.com/sipeed/picoclaw/issues/2472) | Medium — Windows incompatibility | Tool | Open |
| [#2447](https://github.com/sipeed/picoclaw/issues/2447) | Medium — Message loss | Channel | Open |

### Fix PRs Available
- [#2644](https://github.com/sipeed/picoclaw/pull/2644) — Tool feedback regression fix
- [#2504](https://github.com/sipeed/picoclaw/pull/2504) — Discord Opus decoder corruption fix
- [#2128](https://github.com/sipeed/picoclaw/pull/2128) — Tool schema validation fix

---

## 6. Feature Requests & Roadmap Signals

### High-Engagement Feature Requests

| Issue | 👍 | Domain | Request |
|-------|---|--------|---------|
| [#2408](https://github.com/sipeed/picoclaw/issues/2408) | 0 | Provider/Config | **LLM Account Stacking** — Multi-key rotation for rate limits |
| [#2225](https://github.com/sipeed/picoclaw/issues/2225) | 0 | Provider | **Ollama Cloud Credentials** — Authentication support |
| [#2465](https://github.com/sipeed/picoclaw/issues/2465) | 0 | Channel | **SMTP Email Integration** — Scheduled report delivery |
| [#2376](https://github.com/sipeed/picoclaw/issues/2376) | 1 | Channel | **Disable Enter Key** — Mobile UX improvement |
| [#2546](https://github.com/sipeed/picoclaw/issues/2546) | 0 | Channel/Config | **OAuth 2.1 + PKCE for MCP** — Dashboard-addable MCP servers |
| [#2515](https://github.com/sipeed/picoclaw/issues/2515) | 0 | Provider | **Memory System Integration** — mem0, Supermemory, HydraDB |
| [#2527](https://github.com/sipeed/picoclaw/issues/2527) | 0 | Agent/Config | **Configurable fresh_tail_size** — Context budget tuning |
| [#2444](https://github.com/sipeed/picoclaw/issues/2444) | 1 | Tool/Config | **MCP Secrets in .security.yml** — Environment variable secrets |

### Predicted Next Version Priorities
Based on PR activity and issue engagement:
1. **Enhanced MCP CLI Management** (#2641) — Likely to land soon
2. **Bedrock Streaming** (#2645) — Implementation appears mature
3. **Native Audio Input** (#2626) — Multimodal expansion
4. **Intel OpenVINO Support** (#2496) — Local inference expansion

---

## 7. User Feedback Summary

### Pain Points
- **Cron/Scheduling Reliability**: Multiple users report scheduling tasks fails or causes channel errors ([#2468](https://github.com/sipeed/picoclaw/issues/2468), [#1757](https://github.com/sipeed/picoclaw/issues/1757))
- **Workspace Isolation**: Tools attempting operations outside workspace generate excessive errors ([#2519](https://github.com/sipeed/picoclaw/issues/2519), [#1042](https://github.com/sipeed/picoclaw/issues/1042))
- **WhatsApp LID Migration**: Messages silently dropped after WhatsApp account migration ([#2540](https://github.com/sipeed/picoclaw/issues/2540))
- **Windows Compatibility**: list_dir fails on Windows due to path separator issues ([#2472](https://github.com/sipeed/picoclaw/issues/2472))
- **Multi-Channel Concurrency**: Message processing issues when multiple channels have pending tasks ([#2446](https://github.com/sipeed/picoclaw/issues/2446), [#2447](https://github.com/sipeed/picoclaw/issues/2447))

### Use Cases & Satisfaction
- **Positive**: MCP CLI management suite receives strong interest; audio input for multimodal models anticipated
- **Requested**: Better documentation on Docker runtime requirements ([#2440](https://github.com/sipeed/picoclaw/issues/2440)); clearer credential persistence ([#2302](https://github.com/sipeed/picoclaw/issues/2302))

---

## 8. Backlog Watch

### Issues Requiring Maintainer Attention

| Issue | Age | Comments | Priority | Topic |
|-------|-----|----------|----------|-------|
| [#1757](https://github.com/sipeed/picoclaw/issues/1757) | ~37 days | 5 | High | Cron + Telegram channel error (regression?) |
| [#2225](https://github.com/sipeed/picoclaw/issues/2225) | ~25 days | 8 | High | Ollama cloud credentials (popular request) |
| [#2408](https://github.com/sipeed/picoclaw/issues/2408) | ~17 days | 9 | High | LLM Account Stacking (most commented) |
| [#2169](https://github.com/sipeed/picoclaw/issues/2169) | ~26 days | 3 | Medium | Double-HEAD authentication support |
| [#2519](https://github.com/sipeed/picoclaw/issues/2519) | ~10 days | 2 | Medium | Workspace isolation configuration |
| [#2440](https://github.com/sipeed/picoclaw/issues/2440) | ~15 days | 1 | Medium | Docker readonlyrootfs documentation |

### Stale PRs Needing Review
| PR | Age | Topic |
|----|-----|-------|
| [#2496](https://github.com/sipeed/picoclaw/pull/2496) | ~11 days | Intel OpenVINO support |
| [#2504](https://github.com/sipeed/picoclaw/pull/2504) | ~11 days | Discord Opus fix |
| [#2239](https://github.com/sipeed/picoclaw/pull/2239) | ~23 days | Docker compose privileged |

---

*Digest generated from PicoClaw GitHub activity on 2026-04-24*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

<think>Let me analyze the GitHub data for NanoClaw and generate a structured project digest for 2026-04-24.

Key observations:
1. **Activity**: 16 issues updated in last 24h (15 open, 1 closed), 33 PRs updated (13 open, 20 merged/closed)
2. **Releases**: None in the last 24h
3. **Major themes**:
   - CSO security audit findings (7 critical/high security issues)
   - Signal channel adapter V2 merged
   - Apple Container bugs (networking, credential proxy)
   - Discord reply routing bug
   - Various setup/registration fixes
   - Google Calendar/Gmail MCP tools
   - Voice transcription V2

Let me structure this properly:

**Today's Overview**: High activity day with 33 PR updates, significant security hardening PR merged, Signal channel V2 completed, but many new security issues surfaced from CSO audit.

**Releases**: None

**Project Progress**: 
- Security hardening PR #1945 merged (addresses 7 CSO findings)
- Signal channel adapter V2 merged (#1953, #1954, #1878)
- Multiple setup/registration fixes merged
- Discord bug fixes merged
- New MCP tools for Gmail and Google Calendar in progress

**Community Hot Topics**:
- Security issues from CSO audit (7 findings)
- Signal channel development
- Apple Container networking issues
- Discord reply routing bug

**Bugs & Stability**:
- CRITICAL: Security issues from CSO audit
- HIGH: Apple Container networking, credential proxy bugs
- Various setup/registration bugs fixed

**Feature Requests**:
- Native file-ops MCP tools proposal
- Support for other models/APIs
- Voice transcription V2

**User Feedback**:
- Apple Silicon brew path issues
- Max subscription OAuth token issues
- Various setup pain points

**Backlog Watch**:
- Long-standing Apple Container issues


- Security vulnerabilities requiring immediate attention
- Feature requests waiting for prioritization

I'll focus on the critical security vulnerabilities and feature requests that need urgent review. The CSO audit revealed multiple high-severity security issues, with several still open and requiring immediate action. Apple Container networking problems persist, indicating potential systemic challenges in the project's infrastructure. Feature requests like native file-ops MCP tools and multi-model support suggest growing user demands for expanded functionality.
</think>

# NanoClaw Project Digest — 2026-04-24

---

## 1. Today's Overview

NanoClaw experienced exceptionally high activity on 2026-04-24, with 33 PR updates and 16 issues touched in the last 24 hours. The most significant event was the completion of a CSO security audit that surfaced 7 critical/high findings, with PR #1945 addressing several of them. The Signal channel adapter V2 reached completion with three merged PRs, and multiple setup/registration bugs from the v2 migration were resolved. However, 15 new issues remain open, including several critical security concerns that require maintainer attention.

---

## 2. Releases

**No new releases in the last 24 hours.**

---

## 3. Project Progress

### Merged/Closed PRs (20 total)

| PR | Title | Impact |
|----|-------|--------|
| [#1945](https://github.com/qwibitai/nanoclaw/pull/1945) | fix(security): harden agent sandbox — readonly runner, sshd deny docker, gitignore secrets | **Critical** — Addresses agent-to-host privilege escalation |
| [#1953](https://github.com/qwibitai/nanoclaw/pull/1953) | feat(skill): Add Signal channel adapter (V2) | Native Signal integration via signal-cli TCP JSON-RPC |
| [#1954](https://github.com/qwibitai/nanoclaw/pull/1954) | feat(setup): wire Signal into the auto setup flow | Signal now available in `bash nanoclaw.sh` |
| [#1878](https://github.com/qwibitai/nanoclaw/pull/1878) | feat(skill): add Signal channel adapter (V2) — native signal-cli JSON-RPC | Zero npm dependencies, battle-tested |
| [#1932](https://github.com/qwibitai/nanoclaw/pull/1932) | v2: Fix Discord approval card bugs | DM interaction user ID resolution, group routing |
| [#1940](https://github.com/qwibitai/nanoclaw/pull/1940) | fix(setup): detect registered groups from v2 central db | Migration from v1 store path |
| [#1941](https://github.com/qwibitai/nanoclaw/pull/1941) | fix: container restart recovery — stale heartbeat + orphan claim loop | Silent message drops on container restart |
| [#1942](https://github.com/qwibitai/nanoclaw/pull/1942) | fix(chat-sdk-bridge): encode option index in callback_data for Telegram 64-byte cap | Question cards failing on Telegram |
| [#1943](https://github.com/qwibitai/nanoclaw/pull/1943) | fix(delivery): make pending_questions/approvals insert idempotent | Retry loop failures |
| [#1958](https://github.com/qwibitai/nanoclaw/pull/1958) | fix(container-runner): honor agent_provider DB columns with session override | Provider-install skills not working |
| [#1960](https://github.com/qwibitai/nanoclaw/pull/1960) | fix(setup): register step uses engage_mode columns dropped by migration 010 | Fresh v2 install registration failures |

### Open PRs (13 total)

| PR | Title | Status |
|----|-------|--------|
| [#1964](https://github.com/qwibitai/nanoclaw/pull/1964) | skill(add-gcal-tool): OneCLI-native Google Calendar MCP tool | New — Gmail companion |
| [#1961](https://github.com/qwibitai/nanoclaw/pull/1961) | skill(add-gmail-tool): OneCLI-native Gmail MCP tool | New — OneCLI credential injection |
| [#1963](https://github.com/qwibitai/nanoclaw/pull/1963) | fix(register): wire channels with correct engage fields | Bug fix for `/manage-channels` |
| [#1962](https://github:///qwibitai/nanoclaw/pull/1962) | feat(signal): replyTo shape fix + voice transcription, images, mentions | Signal V2 enhancements |
| [#1938](https://github.com/qwibitai/nanoclaw/pull/1938) | fix: include /opt/homebrew/bin in launchd plist PATH | Apple Silicon Homebrew support |
| [#1931](https://github.com/qwibitai/nanoclaw/pull/1931) | feat: v1 → v2 migration to setup flow (experimental) | Automated migration path |
| [#1879](https://github.com/qwibitai/nanoclaw/pull/1879) | feat(skill): voice transcription V2 — local Whisper + OpenAI fallback | Channel-agnostic voice support |

---

## 4. Community Hot Topics

### Most Active Discussions

**Security Audit Fallout (7 CSO Findings)**
- Issue [#1947](https://github.com/qwibitai/nanoclaw/issues/1947) — CRITICAL: `bypassPermissions` + Bash with untrusted inbound channels
- Issue [#1946](https://github.com/qwibitai/nanoclaw/issues/1946) — CRITICAL: `--add-host=host.docker.internal:host-gateway` escalation vector (verified in production)
- Issue [#1948](https://github.com/qwibitai/nanoclaw/issues/1948) — HIGH: Integration tokens in writable group folder
- Issue [#1950](https://github.com/qwibitai/nanoclaw/issues/1950) — HIGH: Agent-runner source mount (FIXED in #1945)
- Issue [#1951](https://github.com/qwibitai/nanoclaw/issues/1951) — HIGH: SSHd Match rule documentation needed
- Issue [#1949](https://github.com/qwibitai/nanoclaw/issues/1949) — HIGH: Tailscale authkey in plaintext
- Issue [#1952](https://github.com/qwibitai/nanoclaw/issues/1952) — MEDIUM: Unpinned `@anthropic-ai/claude-code` version

**Analysis**: The CSO audit on 2026-04-23 revealed systemic security gaps in the agent sandbox architecture. The production incident where a Telegram agent (`telegram_main`) SSHed back to the host and stopped other containers demonstrates real-world exploitation. Community response indicates strong demand for sandbox hardening.

**Signal Channel V2**
- PRs [#1953](https://github.com/qwibitai/nanoclaw/pull/1953), [#1954](https://github.com/qwibitai/nanoclaw/pull/1954), [#1878](https://github.com/qwibitai/nanoclaw/pull/1878) — All merged
- PR [#1962](https://github.com/qwibitai/nanoclaw/pull/1962) — Voice transcription, images, mentions, groupV2 support

**Analysis**: Signal integration is now first-class alongside WhatsApp and Telegram. The native signal-cli approach (no npm dependencies) reflects community preference for lightweight, auditable integrations.

**Apple Container Issues**
- Issue [#1103](https://github.com/qwibitai/nanoclaw/issues/1103) — Networking (host gateway + proxy bind address)
- Issue [#1934](https://github.com/qwibitai/nanoclaw/issues/1934) — Credential proxy never started

**Analysis**: Apple Container remains problematic. The `bridge100` interface (`192.168.64.1`) incompatibility with `127.0.0.1` assumptions has been open since March 15, indicating this is a complex cross-platform networking issue.

---

## 5. Bugs & Stability

### Critical Severity

| Issue | Title | Fix Status |
|-------|-------|------------|
| [#1946](https://github.com/qwibitai/nanoclaw/issues/1946) | Drop `--add-host=host.docker.internal:host-gateway` from agent container default | **Open** — Production incident verified |
| [#1947](https://github.com/qwibitai/nanoclaw/issues/1947) | Rethink `bypassPermissions` + Bash with untrusted inbound channels | **Open** — CRITICAL confidence 9/10 |

### High Severity

| Issue | Title | Fix Status |
|-------|-------|------------|
| [#1103](https://github.com/qwibitai/nanoclaw/issues/1103) | Apple Container: fix networking (host gateway + proxy bind address) | **Open** — Since 2026-03-15 |
| [#1934](https://github.com/qwibitai/nanoclaw/issues/1934) | Apple Container: credential proxy never started | **Open** |
| [#1948](https://github.com/qwibitai/nanoclaw/issues/1948) | Move integration tokens out of writable group folder | **Open** |
| [#1949](https://github.com/qwibitai/nanoclaw/issues/1949) | Tailscale sidecar template should use env substitution for TS_AUTHKEY | **Open** |
| [#1950](https://github.com/qwibitai/nanoclaw/issues/1950) | Mount per-group agent-runner source as readonly | **Fixed in #1945** |
| [#1951](https://github.com/qwibitai/nanoclaw/issues/1951) | Recommend sshd Match rule to deny Docker bridge networks | **Open** — Script added in #1945 |

### Medium Severity

| Issue | Title | Fix Status |
|-------|-------|------------|
| [#1959](https://github.com/qwibitai/nanoclaw/issues/1959) | Discord replies delivered based on container init rather than message source | **Open** — v2 regression |
| [#1944](https://github.com/qwibitai/nanoclaw/issues/1944) | Max subscription: OAuth token can't be used for Sonnet inference | **Open** |
| [#1935](https://github.com/qwibitai/nanoclaw/issues/1935) | launchd plist PATH missing /opt/homebrew/bin | **Open** — PR #1938 pending |

### Recently Fixed

- [#1941](https://github.com/qwibitai/nanoclaw/pull/1941) — Container restart recovery (stale heartbeat + orphan claim loop)
- [#1940](https://github.com/qwibitai/nanoclaw/pull/1940) — Setup detecting registered groups from v2 central db
- [#1958](https://github.com/qwibitai/nanoclaw/pull/1958) — Provider-install skills honoring DB columns

---

## 6. Feature Requests & Roadmap Signals

### Notable Proposals

**Issue [#1956](https://github.com/qwibitai/nanoclaw/issues/1956) — Native file-ops MCP tools**
- Author: @chiptoe-svg
- Request: Native `Read`, `Write`, `Edit`, `Glob`, `Grep` tools (like Claude Agent SDK) to replace bash shelling out
- Rationale: Lower latency, reduced cost per file operation, safety
- **Prediction**: High likelihood of implementation given parity goals with Claude

**Issue [#1930](https://github.com/qwibitai/nanoclaw/issues/1930) — Support other models & third-party APIs**
- Author: @hello532
- Request: More open model support
- **Prediction**: Aligns with existing `/add-opencode`, `/add-codex` patterns; likely incremental

**Issue [#1955](https://github.com/qwibitai/nanoclaw/issues/1955) — Latency improvements for Codex**
- Three measurable, low-risk improvements from production fork
- Two benefit all providers
- **Prediction**: Likely to land in near-term release

### Active Feature Development

| PR | Feature | Progress |
|----|---------|----------|
| [#1964](https://github.com/qwibitai/nanoclaw/pull/1964) | Google Calendar MCP tool | Open — Needs review |
| [#1961](https://github.com/qwibitai/nanoclaw/pull/1961) | Gmail MCP tool | Open — Needs review |
| [#1879](https://github.com/qwibitai/nanoclaw/pull/1879) | Voice transcription V2 (local Whisper + OpenAI fallback) | Open — Channel-agnostic |
| [#1931](https://github.com/qwibitai/nanoclaw/pull/1931) | v1 → v2 automated migration | Open — Experimental |

---

## 7. User Feedback Summary

### Pain Points

**Apple Silicon Homebrew Path** ([#1935](https://github.com/qwibitai/nanoclaw/issues/1935))
- Users on Apple Silicon cannot use Homebrew-installed Node or container binaries
- `setup/service.ts` hard-codes `/usr/local/bin` paths
- Impact: New Apple Silicon users cannot complete setup

**Max Subscription OAuth Token** ([#1944](https://github.com/qwibitai/nanoclaw/issues/1944))
- Claude Max 20x subscribers cannot use OAuth tokens for Sonnet inference
- `claude setup-token` generates `sk-ant-oat01-...` tokens that agent containers reject
- Impact: High-value subscribers blocked from core functionality

**Discord Reply Routing** ([#1959](https://github.com/qwibitai/nanoclaw/issues/1959))
- Agent replies go to thread created at container spawn, not message source
- Impact: Multi-user Discord channels receive replies in wrong location

**Apple Container Credential Proxy** ([#1934](https://github.com/qwibitai/nanoclaw/issues/1934))
- `startCredentialProxy` never called; `CREDENTIAL_PROXY_HOST` not read from `.env`
- Impact: Apple Container agents cannot authenticate

### Positive Signals

- Issue [#1957](https://github.com/qwibitai/nanoclaw/issues/1957) — PicoClaw successfully tested on NXP i.MX93 EVK
- Signal V2 completion demonstrates strong community contribution (multiple authors: @jorgenclaw, @ddaniels, @ira-at-work, @gavrielc)
- v1 → v2 migration tooling shows investment in user upgrade path

---

## 8. Backlog Watch

### Long-Unanswered Issues (>7 days)

| Issue | Title | Age | Priority |
|-------|-------|-----|----------|
| [#1103](https://github.com/qwibitai/nanoclaw/issues/1103) | Apple Container: fix networking | 39 days | High |
| [#1057](https://github.com/qwibitai/nanoclaw/pull/1057) | Signal messenger channel skill | 41 days | Skill |

### Issues Needing Maintainer Attention

| Issue | Title | Notes |
|-------|-------|-------|
| [#1946](https://github.com/qwibitai/nanoclaw/issues/1946) | CRITICAL: host-gateway escalation | Production verified; no fix PR yet |
| [#1947](https://github.com/qwibitai/nanoclaw/issues/1947) | CRITICAL: bypassPermissions + Bash | Needs architectural decision |
| [#1948](https://github.com/qwibitai/nanoclaw/issues/1948) | HIGH: Token storage security | Needs design for secure credential path |
| [#1959](https://github.com/qwibitai/nanoclaw/issues/1959) | Discord reply routing | v2 regression; affects multi-user channels |
| [#1944](https://github.com/qwibitai/nanoclaw/issues/1944) | Max subscription OAuth | Blocks high-value users |

### Stalled PRs

| PR | Title | Status |
|----|-------|--------|
| [#1057](https://github.com/qwibitai/nanoclaw/pull/1057) | Signal messenger channel (V1 skill) | Needs Review — 41 days old |

---

*Digest generated from NanoClaw GitHub activity on 2026-04-24. Data sourced from github.com/qwibitai/nanoclaw.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>Let me analyze the GitHub data for IronClaw and generate a structured project digest for 2026-04-24.

Key data points:
- Issues updated in last 24h: 36 (open/active: 29, closed: 7)
- PRs updated in last 24h: 50 (open: 42, merged/closed: 8)
- New releases: 0

Let me organize this into the required sections.
</think>

# IronClaw Project Digest — 2026-04-24

## 1. Today's Overview

IronClaw shows **high activity** on 2026-04-24, with 36 issues and 50 PRs updated in the last 24 hours. The project is actively iterating on engine-v2, with multiple PRs advancing the new action/capability surface and multi-tenant channel control plane. No new releases shipped today, but the staging promotion pipeline continues batching commits for the next release. A notable cluster of QA bug reports (P1/P2) from the hosted-staging environment landed, covering Telegram, Google Sheets, and mission scheduling — suggesting active end-to-end testing is underway. Community contributors are also pushing meaningful infrastructure work (webhook ingress, deploy primitives, WASM→skill migration).

---

## 2. Releases

**No new releases today.** The last release cadence is not reflected in the 24h window; the project appears to be in a continuous staging-promotion cycle rather than tagging stable releases on this date.

---

## 3. Project Progress

### Merged / Closed PRs (8 total in 24h window)

| PR | Title | Scope | Risk |
|---|---|---|---|
| [#2784](https://github.com/nearai/ironclaw/pull/2784) | chore(engine): bump Monty to v0.0.16 | engine, dependencies | low |
| [#2894](https://github.com/nearai/ironclaw/pull/2894) | feat(missions): redesign missions overview surface | web, missions | low |
| [#2873](https://github.com/nearai/ironclaw/pull/2873) | feat(tools): mission tool family (engine v2) | tool/builtin | medium |
| [#2922](https://github.com/nearai/ironclaw/pull/2922) | add retry logic to achieve parameter validated and debugging logs | tool/builtin | medium |
| [#2869](https://github.com/nearai/ironclaw/pull/2869) | engine-v2: refresh canonical prompt metadata on resume | engine, channel/web | medium |
| [#2876](https://github.com/nearai/ironclaw/pull/2876) | Add engine v2 action discovery metadata | engine, tool | medium |
| [#2889](https://github.com/nearai/ironclaw/pull/2889) | Finish engine v2 deferred action inventory cleanup | engine, tool | medium |
| [#2883](https://github.com/nearai/ironclaw/issues/2883) (issue closed) | bug: WASM tool dispatch broken after capability surface policy centralization | tool/wasm | — |

**Key advances:**
- **Engine v2** continues to solidify: prompt metadata refresh, action discovery metadata, and deferred action inventory cleanup are all merged — indicating the v2 prompt/tool layer is nearing a stable state.
- **Mission tool family** shipped (`mission_create`, `mission_list`, `mission_update`, `mission_delete`, `mission_fire`, `mission_pause`, `mission_resume`) with a redesigned missions overview surface.
- **Monty** (Python engine) bumped from v0.0.11 → v0.0.16, exposing the new `hasattr` builtin.
- **WASM tool dispatch regression** (issue #2883) was identified and closed, confirming the regression is isolated to WASM paths while MCP equivalents pass.

---

## 4. Community Hot Topics

### Most-Discussed Issues (by comment count)

| Issue | Title | Comments | Status |
|---|---|---|---|
| [#2231](https://github.com/nearai/ironclaw/issues/2231) | [bug] Multiple chats cannot run in parallel — responses blocked in queue | 5 | OPEN |
| [#2792](https://github.com/nearai/ironclaw/issues/2792) | Epic: Gateway state convergence — eliminate UI/backend state drift | 5 | OPEN |
| [#2474](https://github.com/nearai/ironclaw/issues/2474) | Bug: stdio MCP servers trigger OAuth discovery flow on activation | 3 | CLOSED |
| [#1998](https://github.com/nearai/ironclaw/issues/1998) | Slack connect flow is broken | 3 | CLOSED |
| [#1503](https://github.com/nearai/ironclaw/issues/1503) | Google slides integration failed | 3 | CLOSED |

**Analysis of underlying needs:**
- **#2231 (Parallel chat blocking):** Users need true multi-thread concurrency. This is a core UX expectation for an AI agent platform — blocking responses in queue undermines the agent-asynchronous-workflow promise.
- **#2792 (Gateway state convergence epic):** The team is tackling a fundamental architectural goal: making the frontend a pure function of the backend, eliminating state drift. This is a high-leverage epic that, if completed, will reduce a class of UI/backend sync bugs permanently.
- **#2474 / #2923 (stdio MCP OAuth bug):** A re-filed bug (#2923) clarifies that stdio transport *is* supported in v0.25.0; the bug is in the activation pre-flight check. This signals that MCP tooling is a live, actively used surface.

### Most-Active PRs (by scope breadth & strategic importance)

| PR | Title | Comments | Status |
|---|---|---|---|
| [#2927](https://github.com/nearai/ironclaw/pull/2927) | fix(channels): wire load_startup_active_channels for first-run fallback | — | OPEN |
| [#2807](https://github.com/nearai/ironclaw/pull/2807) | fix(worker): introduce `finish_job` tool as the only explicit completion path | — | OPEN |
| [#2904](https://github.com/nearai/ironclaw/pull/2904) | Refactor: replace 11 WASM API-proxy tools with skill-based HTTP declarations | — | OPEN |
| [#2868](https://github.com/nearai/ironclaw/pull/2868) | engine-v2: make available_actions callable-only for blocked providers | — | OPEN |
| [#2925](https://github.com/nearai/ironclaw/pull/2925) | feat(deploy): downstream deploy infra (AGENTS_SEED_PATH, MissionSlot) | — | OPEN |
| [#2921](https://github.com/nearai/ironclaw/pull/2921) | feat(webhooks): tool-driven webhook ingress with Linear integration | — | OPEN |
| [#2841](https://github.com/nearai/ironclaw/pull/2841) | feat: multi-tenant channel instances control plane (phase 1) | — | OPEN |

**Strategic themes:**
- **#2904** is a significant architectural refactor: replacing 11 WASM HTTP-proxy tools with SKILL.md declarations + the built-in `http` tool. This simplifies the tool surface and shifts API documentation into prompt instructions.
- **#2841** (multi-tenant channel instances, phase 1) introduces a `channel_instances` DB table — a foundational step toward multi-tenant deployments.
- **#2921** adds generic webhook ingress, enabling external systems (e.g., Linear) to trigger IronClaw routines — expanding integration surface.

---

## 5. Bugs & Stability

### P1 Bugs (Critical — Active)

| Issue | Title | Environment | Fix PR? |
|---|---|---|---|
| [#2905](https://github.com/nearai/ironclaw/issues/2905) | Agent saves files to `/home/agent` which is not accessible in hosted setup | hosted-production, v0.24 | — |
| [#2903](https://github.com/nearai/ironclaw/issues/2903) | Telegram response too long fails silently | hosted-production, v0.24 | — |

### P2 Bugs (High — Active)

| Issue | Title | Feature Area | Fix PR? |
|---|---|---|---|
| [#2231](https://github.com/nearai/ironclaw/issues/2231) | Multiple chats cannot run in parallel | Chat / Concurrency | — |
| [#2915](https://github.com/nearai/ironclaw/issues/2915) | "terminal or budget exhausted" error blocks manual Fire on active missions | Missions | — |
| [#2914](https://github.com/nearai/ironclaw/issues/2914) | Skill installation fails with SKILL.md YAML frontmatter parse error | Skills | — |
| [#2913](https://github.com/nearai/ironclaw/issues/2913) | Duplicate Google Sheets created during single workflow | Google Sheets | — |
| [#2912](https://github.com/nearai/ironclaw/issues/2912) | Google Sheets requires re-authentication after successful sheet creation | Google Sheets / OAuth | — |
| [#2911](https://github.com/nearai/ironclaw/issues/2911) | Asana integration shows inconsistent state | Integrations / Asana | — |
| [#2910](https://github.com/nearai/ironclaw/issues/2910) | Linear integration shows conflicting success/failure states | Integrations / Linear | — |
| [#2909](https://github.com/nearai/ironclaw/issues/2909) | CSV file sent as text summary instead of document attachment to Telegram | Telegram / File handling | — |
| [#2908](https://github.com/nearai/ironclaw/issues/2908) | Mission notification to Telegram delayed ~5min and uses raw formatting | Missions / Telegram | — |
| [#2907](https://github.com/nearai/ironclaw/issues/2907) | Duplicate missions created for same request | Missions | — |
| [#2906](https://github.com/nearai/ironclaw/issues/2906) | Tool calls displayed without human-readable descriptions in chat UI | Chat UI / Tool display | — |
| [#2923](https://github.com/nearai/ironclaw/issues/2923) | stdio MCP activation fails with "Failed to discover authorization endpoints" | tool/mcp | — |
| [#2887](https://github.com/nearai/ironclaw/issues/2887) | Auth Browser Consent canary fails — Google bot detection on CI runner | CI / Auth | — |
| [#2886](https://github.com/nearai/ironclaw/issues/2886) | Provider Matrix (openai-compatible) fails — malformed LLM_BASE_URL | LLM / Config | — |

### Recently Closed Bugs

| Issue | Title | Resolution |
|---|---|---|
| [#2883](https://github.com/nearai/ironclaw/issues/2883) | WASM tool dispatch broken after capability surface policy centralization | CLOSED — regression isolated to WASM path |
| [#2884](https://github.com/nearai/ironclaw/issues/2884) | New users with no conversations get no writable thread after sidebar refactor | CLOSED |
| [#2474](https://github.com/nearai/ironclaw/issues/2474) | stdio MCP servers trigger OAuth discovery flow on activation | CLOSED (disputed; re-filed as #2923) |

**Stability assessment:** The P1 bugs (#2905, #2903) affect the hosted-production environment and represent real user-facing failures (file path inaccessibility, silent Telegram truncation). The cluster of P2 QA bugs from 2026-04-23 suggests a structured bug-bash session was conducted on hosted-staging; the volume (10+ P2 issues in one day) indicates active QA but also that the staging environment has meaningful surface area to shake out. No fix PRs are currently linked to these bugs.

---

## 6. Feature Requests & Roadmap Signals

### Active Feature Requests

| Issue | Title | Signals |
|---|---|---|
| [#2792](https://github.com/nearai/ironclaw/issues/2792) | Epic: Gateway state convergence — eliminate UI/backend state drift | High-priority epic; structural architecture goal |
| [#2920](https://github.com/nearai/ironclaw/issues/2920) | Better data persistence & upgrade safety for the hosted platform | User demand for production-grade durability (SQLite in Docker concern) |
| [#2898](https://github.com/nearai/ironclaw/issues/2898) | Minimum rustc version to compile is 1.91 (not 1.85) | Documentation accuracy; affects contributors |
| [#2900](https://github.com/nearai/ironclaw/issues/2900) | Decouple unified webhook listener bind address from named HTTP channel enablement | Config clarity; reduces coupling |
| [#2917](https://github.com/nearai/ironclaw/issues/2917) | ui(logs): widen target column so module paths aren't truncated | UX polish; low effort, clear win |
| [#2918](https://github.com/nearai/ironclaw/issues/2918) | bug(logs): browser find collapses expanded log rows | UX bug; affects debugging workflow |
| [#1044](https://github.com/nearai/ironclaw/issues/1044) | Create e2e test powered by Claude Code with Chrome MCP | CI/testing improvement |

**Roadmap predictions:**
- **#2792 (Gateway state convergence)** is the most significant roadmap signal — it aims to make UI state a pure function of backend state, which would eliminate an entire class of bugs. Likely targeted for an upcoming milestone.
- **#2920 (Data persistence for hosted platform)** addresses a real production gap (SQLite in Docker). Given the P1 file-path bug (#2905) also affects hosted production, expect increased investment in hosted-platform reliability.
- **#2841 (Multi-tenant channel instances phase 1)** is already in review — phase 2 likely in the next sprint cycle.
- **#2904 (WASM → SKILL.md refactor)** is open and represents a deliberate simplification of the tool surface; if merged, it reduces maintenance burden for 11 tools.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|---|---|---|
| **Telegram unreliability** | Silent failures on long responses (#2903), delayed mission notifications with raw formatting (#2908), CSV sent as text instead of attachment (#2909), broken for NEAR Foundation instance (#2902) | High |
| **Google integrations broken** | Duplicate sheet creation (#2913), re-authentication required after successful creation (#2912), slides integration failed (#1503) | High |
| **Mission scheduling bugs** | "terminal or budget exhausted" blocking manual Fire (#2915), duplicate missions created (#2907), skill installation YAML parse error (#2914) | High |
| **Hosted platform file paths** | Agent saves to `/home/agent` which is inaccessible in hosted setup (#2905) | Critical |
| **Chat concurrency** | Parallel chats blocked in queue (#2231) — fundamental UX expectation gap | High |
| **OAuth/Auth flows fragile** | Slack connect broken (#1998), Google bot detection in CI (#2887), stdio MCP OAuth bug (#2923) | Medium-High |
| **Logs UI unusable** | Module paths truncated (#2917), browser find collapses rows (#2918) | Medium |

### Positive Signals

- The **mission redesign** (#2894) and **mission tool family** (#2873) represent significant investment in the autonomous execution use case — a core differentiator for IronClaw.
- **Webhook ingress** (#2921) and **deploy primitives** (#2925) indicate the project is being used as a platform for downstream deployments, suggesting product-market fit beyond self-hosted usage.
- Community contributors (new, regular, experienced) are actively opening PRs across all scope areas, indicating a healthy contributor ecosystem.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Title | Age | Why It Needs Attention |
|---|---|---|---|
| [#2231](https://github.com/nearai/ironclaw/issues/2231) | Multiple chats cannot run in parallel | ~14 days (opened 2026-04-10) | High-impact bug; 5 comments; no fix PR; blocks core concurrency promise |
| [#2792](https://github.com/nearai/ironclaw/issues/2792) | Epic: Gateway state convergence | ~3 days | Strategic epic; needs maintainer buy-in and milestone assignment |
| [#2923](https://github.com/nearai/ironclaw/issues/2923) | stdio MCP activation fails | opened 2026-04-24 | Re-filed from #2474; clarifies scope; needs confirmation that fix is in flight |
| [#2920](https://github.com/nearai/ironclaw/issues/2920) | Better data persistence for hosted platform | opened 2026-04-23 | Production-grade gap; likely affects paying users |
| [#2905](https://github.com/nearai/ironclaw/issues/2905) | Agent saves files to inaccessible path | opened 2026-04-23 | P1 in hosted-production; no fix PR |
| [#2903](https://github.com/nearai/ironclaw/issues/2903) | Telegram long response fails silently | opened 2026-04-23 | P1 in hosted-production; silent failures erode trust |
| [#2898](https://github.com/nearai/ironclaw/issues/2898) | README says rustc 1.85 but needs 1.91 | opened 2026-04-23 | Blocks contributors; trivial fix, high friction |
| [#1044](https://github.com/nearai/ironclaw/issues/1044) | Create e2e test with Claude Code + Chrome MCP | ~33 days (opened 2026-03-12) | Low comment count but strategic for CI quality; needs owner |

### PRs Needing Review/Merge

| PR | Title | Risk | Why It Needs Attention |
|---|---|---|---|
| [#2927](https://github.com/nearai/ironclaw/pull/2927) | fix(channels): wire load_startup_active_channels for first-run fallback | medium | New contributor; fixes first-run channel activation bug; DB migration scope |
| [#2926](https://github.com/nearai/ironclaw/pull/2926) | fix(setup): honor explicit DATABASE_BACKEND and direct profile selection | high | New contributor; correctness bug in setup wizard; high risk |
| [#2807](https://github.com/nearai/ironclaw/pull/2807) | fix(worker): introduce `finish_job` tool | medium | Affects job completion path; needs thorough review |
| [#2904](https://github://github.com/nearai/ironclaw/pull/2904) | Refactor: replace 11 WASM API-proxy tools with skill-based HTTP declarations | medium | Large refactor; reduces tool surface; strategic direction |
| [#2841](https://github

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

<think>Let me analyze the GitHub data for LobsterAI (github.com/netease-youdao/LobsterAI) for 2026-04-24.

**Data Overview:**
- Issues updated in last 24h: 6 (open/active: 6, closed: 0)
- PRs updated in last 24h: 13 (open: 0, merged/closed: 13)
- New releases: 0

**Latest Releases:** None

**Latest Issues (6 items):**
1. #26 - "自己在Linux上编译的还是0.1.16版本？" - Chinese user asking about version update
2. #15 - "Electron 40 startup failure" - TypeError on startup
3. #29 - "希望能增加codex登录" - Feature request for Codex login
4. #14 - "飞书通道 renderMode 配置无效 + thinking 标签未过滤" - Feishu channel issues
5. #35 - "Discord Connectivity Diagnostics" - Discord connectivity issue
6. #1797 - "建议增加对话删除功能" - Feature request for conversation deletion

**Latest Pull Requests (13 items):**
1. #1809 - i18n update for update-ready pill
2. #1808 - UI style constraint homepage input width
3. #1807 - Fix draft input preservation when switching sessions
4. #1806 - Upgrade popo plugin
5. #1805 - Release/2026.04.22 (major release with multiple features)
6. #1804 - Fix sharp native binding and NODE_PATH
7. #1802 - Update stale tests
8. #1803 - Increase chat.send RPC timeout
9. #1801 - Prevent stale reply loop and MCP tool abort


10. #1800 - Include install-timing.log in Windows log export
11. #1799 - UI responsive improvements
12. #61 - Add OpenAI API type selection
13. #1798 - Optimize gateway restart

The project shows strong activity with 13 merged PRs and no new releases. Several critical fixes landed: sharp native binding issues, RPC timeout adjustments, and MCP tool abort handling. UI responsiveness and internationalization updates are also included. Notable gaps remain around version documentation for Linux users and unresolved Electron 40 startup failures.
</think>

# LobsterAI Project Digest — 2026-04-24

## 1. Today's Overview

LobsterAI demonstrates strong development velocity with 13 pull requests merged in the past 24 hours and zero new releases. All activity centered on the `Release/2026.04.22` milestone, delivering multi-bot support for Discord/Telegram, LM Studio integration, and numerous stability fixes. Six issues remain open and stale, with the most critical being an Electron 40 startup failure affecting both macOS and Windows users. The project shows healthy maintenance patterns with UI responsiveness improvements, internationalization updates, and infrastructure hardening, though community-reported bugs indicate lingering compatibility challenges with newer Electron versions.

---

## 2. Releases

**No new releases published in the last 24 hours.**

The most recent release milestone (`Release/2026.04.22`) was merged via PR [#1805](https://github.com/netease-youdao/LobsterAI/pull/1805) and includes:

- **Discord / Telegram Multi-Bot Support**: Multiple bot instances per IM platform without interference ([#1792](https://github.com/netease-youdao/LobsterAI/issues/1792), [#1794](https://github.com/netease-youdao/LobsterAI/issues/1794))
- **LM Studio Provider**: New local inference model provider added to model configuration page ([#1787](https://github.com/netease-youdao/LobsterAI/issues/1787))
- **WeCom Plugin Upgrade**: `wecom-openclaw-plugin` updated to 2026.4.22 with latest WeChat Work capabilities ([#1790](https://github.com/netease-youdao/LobsterAI/issues/1790))
- **Windows Log Diagnostics**: `install-timing.log` now included in log exports for installation performance analysis ([#1799](https://github.com/netease-youdao/LobsterAI/issues/1799))
- **Update Request Enhancements**: Update requests now carry additional metadata

---

## 3. Project Progress

**13 PRs merged/closed today** — all activity in renderer, main process, cowork, and platform-specific areas.

### Key Advancements:

| PR | Area | Change |
|----|------|--------|
| [#1805](https://github.com/netease-youdao/LobsterAI/pull/1805) | All | Release/2026.04.22 — multi-bot, LM Studio, WeCom upgrades |
| [#1807](https://github.com/netease-youdao/LobsterAI/pull/1807) | renderer, cowork | **Fix**: Draft text and attachments preserved when switching sessions via "New Chat" button or keyboard shortcut |
| [#1806](https://github.com/netease-youdao/LobsterAI/pull/1806) | plugin | Upgrade popo plugin version, fixing token expiration issues |
| [#1804](https://github.com/netease-youdao/LobsterAI/pull/1804) | main, openclaw | **Fix**: Restore `@img/sharp-win32-x64` native binding; add `cfmind/node_modules` to `NODE_PATH` |
| [#1803](https://github.com/netease-youdao/LobsterAI/pull/1803) | main | **Fix**: Increase `chat.send` RPC timeout from 30s to 90s; add warning log for operations >10s |
| [#1801](https://github.com/netease-youdao/LobsterAI/pull/1801) | main, chat, mcp | **Fix**: Prevent stale reply loop when user stops session during MCP tool execution |
| [#1798](https://github.com/netease-youdao/LobsterAI/pull/1798) | main | **Feat**: Optimize gateway restart — avoid restart on focus/blur events |
| [#1800](https://github.com/netease-youdao/LobsterAI/pull/1800) | log | **Feat**: Include `install-timing.log` in Windows log export |
| [#1799](https://github.com/netease-youdao/LobsterAI/pull/1799) | renderer, cowork | **Style**: Expand tool call summary width; increase content max-width from 896px to 1024px |
| [#1808](https://github.com/netease-youdao/LobsterAI/pull/1808) | renderer, cowork | **Style**: Constrain homepage input width to 768px |
| [#1809](https://github.com/netease-youdao/LobsterAI/pull/1809) | renderer | **Chore**: Update i18n for update-ready pill and modal title |
| [#1802](https://github.com/netease-youdao/LobsterAI/pull/1802) | test | Update stale tests for LM Studio, Telegram multi-instance, and backup manager |
| [#61](https://github.com/netease-youdao/LobsterAI/pull/61) | openai | **Feat**: Add OpenAI API type selection (`responses` vs `chat_completions`) |

---

## 4. Community Hot Topics

### Most Active Issues (by comments):

1. **[#26](https://github.com/netease-youdao/LobsterAI/issues/26)** — "自己在Linux上编译的还是0.1.16版本？" (4 comments)
   - **Topic**: Version update confusion on Linux builds
   - **Underlying Need**: Users cannot determine current version or how to update after pulling latest code; no version documentation visible on Youdao homepage
   - **Sentiment**: Frustrated, seeking guidance

2. **[#15](https://github.com/netease-youdao/LobsterAI/issues/15)** — "Electron 40 startup failure" (2 comments)
   - **Topic**: `TypeError: Cannot set properties of undefined (setting 'name')` on startup
   - **Underlying Need**: Compatibility issue with Electron 40.2.1 bundled Node.js v24.11.1 affecting both macOS and Windows
   - **Sentiment**: Blocking issue, application unusable

3. **[#29](https://github.com/netease-youdao/LobsterAI/issues/29)** — "希望能增加codex登录" (2 comments)
   - **Topic**: Feature request for Codex login integration
   - **Underlying Need**: Users want direct Codex API access within LobsterAI
   - **Sentiment**: Feature request, moderate interest

4. **[#14](https://github.com/netease-youdao/LobsterAI/issues/14)** — "飞书通道 renderMode 配置无效 + thinking 标签未过滤" (1 comment)
   - **Topic**: Feishu channel renderMode hardcoded to "text"; `<thinking>` tags not filtered
   - **Underlying Need**: Users need flexible message rendering (auto/markdown, raw, card) and clean output without model metadata
   - **Sentiment**: Configuration gap, functional limitation

### Most Discussed PRs (by engagement):

- **[#1805](https://github.com/netease-youdao/LobsterAI/pull/1805)** — Release/2026.04.22: Major feature release with multi-bot support and LM Studio integration
- **[#1807](https://github.com/netease-youdao/LobsterAI/pull/1807)** — Draft preservation fix: High user impact UX improvement
- **[#61](https://github.com/netease-youdao/LobsterAI/pull/61)** — OpenAI API type selection: Flexibility for different OpenAI API usage patterns

---

## 5. Bugs & Stability

### Active Bug Reports:

| Issue | Severity | Platform | Status | Fix PR? |
|-------|----------|----------|--------|---------|
| **[#15](https://github.com/netease-youdao/LobsterAI/issues/15)** — Electron 40 startup crash | **Critical** | macOS, Windows | Open, stale | No |
| **[#14](https://github.com/netease-youdao/LobsterAI/issues/14)** — Feishu renderMode hardcoded | Medium | All | Open, stale | No |
| **[#35](https://github.com/netease-youdao/LobsterAI/issues/35)** — Discord connectivity diagnostics | Medium | All | Open, stale | No |

### Bugs Fixed Today (via PRs):

- **[#1804](https://github.com/netease-youdao/LobsterAI/pull/1804)**: Sharp native binding restoration — resolves image processing failures on Windows
- **[#1803](https://github.com/netease-youdao/LobsterAI/pull/1803)**: RPC timeout increased to 90s — prevents false failures during gateway initialization
- **[#1801](https://github.com/netease-youdao/LobsterAI/pull/1801)**: Stale reply loop prevention — fixes incorrect message restoration after stopping MCP tool execution
- **[#1807](https://github.com/netease-youdao/LobsterAI/pull/1807)**: Draft preservation — eliminates data loss when switching sessions

**Assessment**: The Electron 40 startup failure ([#15](https://github.com/netease-youdao/LobsterAI/issues/15)) is the most critical unresolved issue, rendering the application unusable for users on Electron 40.2.1. No fix PR exists, indicating this may require significant investigation into Node.js v24.11.1 compatibility.

---

## 6. Feature Requests & Roadmap Signals

### New Feature Requests:

1. **[#1797](https://github.com/netease-youdao/LobsterAI/issues/1797)** — "建议增加对话删除功能，可以批量删除无效对话，保证上下文内容有效" (1 👍)
   - **Request**: Add conversation deletion feature with batch support
   - **Use Case**: Manage conversation history, remove invalid entries to maintain effective context
   - **Likelihood**: Medium — addresses real UX need for context management

2. **[#29](https://github.com/netease-youdao/LobsterAI/issues/29)** — Codex login integration (2 comments)
   - **Request**: Add Codex API authentication support
   - **Use Case**: Access Codex models directly within LobsterAI
   - **Likelihood**: Low-Medium — depends on Codex API strategy

### Implemented Features (from today's PRs):

- **Multi-bot support** for Discord/Telegram ([#1792](https://github.com/netease-youdao/LobsterAI/issues/1792), [#1794](https://github.com/netease-youdao/LobsterAI/issues/1794))
- **LM Studio local inference** provider ([#1787](https://github.com/netease-youdao/LobsterAI/issues/1787))
- **OpenAI API type selection** (responses vs chat_completions) ([#61](https://github.com/netease-youdao/LobsterAI/pull/61))

**Roadmap Prediction**: Based on issue patterns, expect future releases to address:
- Electron compatibility updates
- Feishu channel renderMode flexibility
- Conversation management features
- Enhanced local model provider support

---

## 7. User Feedback Summary

### Pain Points:

1. **Version Confusion** ([#26](https://github.com/netease-youdao/LobsterAI/issues/26)): Linux users struggle to identify current version and update process. No clear version documentation on homepage. Users feel abandoned after pulling code.

2. **Startup Failures** ([#15](https://github.com/netease-youdao/LobsterAI/issues/15)): Electron 40 incompatibility blocks entire user base on both macOS and Windows. Error message (`Cannot set properties of undefined`) is cryptic and provides no actionable guidance.

3. **Feishu Integration Gaps** ([#14](https://github.com/netease-youdao/LobsterAI/issues/14)): Configuration options don't work as documented; renderMode is hardcoded. Users cannot control message formatting for Feishu messages.

### Positive Feedback Signals:

- **Multi-bot support** ([#1805](https://github.com/netease-youdao/LobsterAI/pull/1805)) addresses a highly requested feature for users managing multiple IM bots
- **Draft preservation** ([#1807](https://github.com/netease-youdao/LobsterAI/pull/1807)) eliminates frustrating data loss during session switching
- **LM Studio integration** ([#1787](https://github.com/netease-youdao/LobsterAI/issues/1787)) supports local AI inference workflows

### Dissatisfaction Themes:

- **Stale issues not addressed**: All 6 active issues are marked "stale" with no recent maintainer response
- **Documentation gaps**: Version information, update procedures, and configuration options lack clarity
- **Compatibility lag**: Electron 40 issue reported ~2 months ago (created 2026-02-20) still unresolved

---

## 8. Backlog Watch

### Long-Unanswered Important Issues Requiring Maintainer Attention:

| Issue | Age | Priority | Topic | Last Update |
|-------|-----|----------|-------|-------------|
| **[#15](https://github.com/netease-youdao/LobsterAI/issues/15)** | ~63 days | **Critical** | Electron 40 startup crash | 2026-04-23 |
| **[#14](https://github.com/netease-youdao/LobsterAI/issues/14)** | ~63 days | Medium | Feishu renderMode + thinking tag | 2026-04-23 |
| **[#26](https://github.com/netease-youdao/LobsterAI/issues/26)** | ~63 days | Medium | Linux version confusion | 2026-04-23 |
| **[#29](https://github.com/netease-youdao/LobsterAI/issues/29)** | ~63 days | Low | Codex login request | 2026-04-23 |
| **[#35](https://github.com/netease-youdao/LobsterAI/issues/35)** | ~63 days | Medium | Discord connectivity | 2026-04-23 |

### PRs Needing Review/Attention:

- **[#61](https://github.com/netease-youdao/LobsterAI/pull/61)** — OpenAI API type selection: Merged but represents significant feature; monitor for regressions

**Maintainer Action Recommended**:

1. **Urgent**: Investigate Electron 40.2.1 compatibility issue ([#15](https://github.com/netease-youdao/LobsterAI/issues/15)) — this is a blocking bug
2. **High**: Address Feishu renderMode configuration gap ([#14](https://github.com/netease-youdao/LobsterAI/issues/14))
3. **Medium**: Add version documentation and update release notes visibility ([#26](https://github.com/netease-youdao/LobsterAI/issues/26))
4. **Low**: Consider stale issue triage — close or provide status updates to reduce community frustration

---

*Digest generated from LobsterAI (github.com/netease-youdao/LobsterAI) activity on 2026-04-24*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

<think>Let me analyze the GitHub data for Moltis and create a structured project digest for 2026-04-24.

Key data points:
- Issues updated in last 24h: 9 (4 open, 5 closed)
- PRs updated in last 24h: 12 (5 open, 7 merged/closed)
- New releases: 0

Let me organize this into the required sections.

## Today's Overview
The project is quite active with 9 issues and 12 PRs updated in the last 24 hours. No new releases, but significant bug fixes and features were merged. The activity suggests active development with good community engagement.

## Releases
None today.

## Project Progress (Merged/Closed PRs)
Let me identify the closed PRs:
1. #797 - feat(skills): bundle 101 default skills with category UI and format fallback
2. #856 - fix(providers): deep-merge properties in schema union collapse, strip redundant boolean enum
3. #854 - test(voice): add ElevenLabs TTS tests for custom voice support
4. #855 - fix(prompt): move datetime from system message to user content for KV cache stability
5. #853 - fix(sandbox): skip sysfs tmpfs mounts for missing paths (ARM/Raspberry Pi)
6. #841 - feat(signal): add signal-cli channel
7. #852 - fix(mcp): show re-auth button when OAuth server needs re-authentication

## Community Hot Topics
Looking at issues with most comments:
- #176: Add datetime to system prompt context - 16 comments, closed
- #828: Docker sandbox fails on WSL2 - 1 comment, closed

## Bugs & Stability
Open bugs:
- #858: Heartbeat re-fires in tight loop when agent uses exec during heartbeat turn


- #857: Silent memory turn saves with wrong dates in filenames
- #848: Fireworks Fire Pass: JSON Schema not supported

Closed bugs (fixed):
- #849: "parameters.required[0]: property is not defined" is back - fixed by #856
- #735: custom elevenlabs voices don't work - fixed by #854
- #851: MCP OAuth re-auth button missing from UI - fixed by #852
- #828: Docker sandbox fails on WSL2 - fixed by #853

## Feature Requests & Roadmap Signals
- #850: Support client_secret in MCP server OAuth override config
- #176: Add datetime to system prompt context - implemented in #855

## User Feedback Summary
Users are reporting issues with Docker sandbox compatibility across different platforms, problems with memory persistence and date handling, and missing OAuth functionality in the MCP server. The community is actively contributing fixes for these pain points.

## Backlog Watch
Several issues remain open and need attention: heartbeat loop behavior (#858), date formatting in silent memory turns (#857), JSON schema validation for Fireworks (#848), OAuth configuration support (#850), and UI integration for the project dropdown (#847). These represent the most pressing unresolved items that could impact user experience.
</think>

# Moltis Project Digest — 2026-04-24

## 1. Today's Overview

Moltis shows strong development activity on 2026-04-24, with 9 issues and 12 pull requests updated in the last 24 hours. No new releases were published, but the team merged 7 PRs addressing critical bugs and shipped notable features including a Signal messenger integration, 101 bundled default skills, and platform-specific sandbox fixes for ARM/Raspberry Pi and WSL2. Community engagement remains healthy with 16 comments on a datetime feature request and multiple bug reports being rapidly closed. The project appears stable with a healthy pipeline of enhancements.

---

## 2. Releases

**No new releases today.** The last release information is not provided in the current data window.

---

## 3. Project Progress

Seven pull requests were merged or closed in the past 24 hours:

| PR | Title | Impact |
|----|-------|--------|
| [#797](https://github.com/moltis-org/moltis/pull/797) | feat(skills): bundle 101 default skills with category UI and format fallback | **Major** — Adds a committed assets directory with pre-vetted skills (Hermes Agent, etc.), embedded via `include_dir!`, plus a new `BundledSkillStore` with dev-mode filesystem fallback |
| [#856](https://github.com/moltis-org/moltis/pull/856) | fix(providers): deep-merge properties in schema union collapse, strip redundant boolean enum | **Critical** — Fixes #849 and #848; resolves schema normalization issues affecting Gemini (via OpenRouter) and Fireworks AI |
| [#855](https://github.com/moltis-org/moltis/pull/855) | fix(prompt): move datetime from system message to user content for KV cache stability | **High** — Fixes KV cache prefix invalidation for local LLMs (llama.cpp, Ollama, LM Studio) by moving datetime injection to user content |
| [#853](https://github.com/moltis-org/moltis/pull/853) | fix(sandbox): skip sysfs tmpfs mounts for missing paths (ARM/Raspberry Pi) | **High** — Fixes Docker sandbox failures on Raspberry Pi and WSL2 by replacing WSL2-only detection with per-path host existence checking |
| [#852](https://github.com/moltis-org/moltis/pull/852) | fix(mcp): show re-auth button when OAuth server needs re-authentication | **Medium** — Fixes #851; adds Re-auth button and auth status badge to `ServerCard` |
| [#854](https://github.com/moltis-org/moltis/pull/854) | test(voice): add ElevenLabs TTS tests for custom voice support | **Testing** — Adds wiremock unit tests and live integration tests for ElevenLabs custom voices |
| [#841](https://github.com/moltis-org/moltis/pull/841) | feat(signal): add signal-cli channel | **Feature** — Adds new `moltis-signal` channel plugin backed by `signal-cli` daemon HTTP JSON-RPC and SSE events |

---

## 4. Community Hot Topics

**Most Active Issues:**

- **[#176](https://github.com/moltis-org/moltis/issues/176)** — `[enhancement] Add datetime to system prompt context`  
  *16 comments, 1 reaction, closed 2026-04-23*  
  **Signal:** Strong community demand for datetime context injection. The fix was implemented in [#855](https://github.com/moltis-org/moltis/pull/855) but required careful handling to avoid KV cache instability for local LLMs.

- **[#828](https://github.com/moltis-org/moltis/issues/828)** — `[bug] Docker sandbox fails on WSL2 due to missing /sys/class/dmi`  
  *1 comment, closed 2026-04-23*  
  **Signal:** Platform compatibility concern; fixed by [#853](https://github.com/moltis-org/moltis/pull/853) with a more robust per-path detection approach.

**Most Active PRs (by engagement):**

- **[#847](https://github.com/moltis-org/moltis/pull/847)** — `fix(ui): wire up project combo dropdown in chat header`  
  Connects previously scaffolded but unconnected UI state setters and event bindings to the DOM template. Closes #838.

- **[#846](https://github.com/moltis-org/moltis/pull/846)** — `feat(web-ui): smart auto-scroll for chat messages`  
  Implements user-friendly scroll behavior: shows "↓ New messages" indicator when user scrolls up, dismisses when they return to bottom. Closes #824.

---

## 5. Bugs & Stability

**Open Bugs (requiring attention):**

| # | Bug | Severity | Notes |
|---|-----|----------|-------|
| [#858](https://github.com/moltis-org/moltis/issues/858) | Heartbeat re-fires in tight loop when agent uses exec during heartbeat turn | **High** | New today; can cause infinite loops in agent execution |
| [#857](https://github.com/moltis-org/moltis/issues/857) | Silent memory turn saves with wrong dates in filenames | **Medium** | Date handling bug in silent memory persistence |
| [#848](https://github.com/moltis-org/moltis/issues/848) | Fireworks Fire Pass: JSON Schema not supported (HTTP 400) | **Medium** | Schema normalization issue; fix pending in [#856](https://github.com/moltis-org/moltis/pull/856) |

**Recently Fixed Bugs:**

| # | Bug | Fix PR | Status |
|---|-----|--------|--------|
| [#849](https://github.com/moltis-org/moltis/issues/849) | "parameters.required[0]: property is not defined" is back | [#856](https://github.com/moltis-org/moltis/pull/856) | ✅ Fixed |
| [#735](https://github.com/moltis-org/moltis/issues/735) | Custom ElevenLabs voices don't work | [#854](https://github.com/moltis-org/moltis/pull/854) | ✅ Fixed |
| [#851](https://github.com/moltis-org/moltis/issues/851) | MCP OAuth re-auth button missing from UI | [#852](https://github.com/moltis-org/moltis/pull/852) | ✅ Fixed |
| [#828](https://github.com/moltis-org/moltis/issues/828) | Docker sandbox fails on WSL2 | [#853](https://github.com/moltis-org/moltis/pull/853) | ✅ Fixed |

**Stability Assessment:** The team is actively addressing bugs with a 4-for-4 close rate on recent issues. The heartbeat loop bug (#858) is the most concerning for production stability and warrants prompt attention.

---

## 6. Feature Requests & Roadmap Signals

**Active Feature Requests:**

| # | Request | Priority Signal |
|---|---------|-----------------|
| [#850](https://github.com/moltis-org/moltis/issues/850) | Support `client_secret` in MCP server OAuth override config | **High** — Addresses OAuth configuration gaps for enterprise deployments |
| [#176](https://github.com/moltis-org/moltis/issues/176) | Add datetime to system prompt context | ✅ **Implemented** in #855 |

**Roadmap Signals from Open PRs:**

- **[#837](https://github.com/moltis-org/moltis/pull/837)** — `feat(projects): add code_index_enabled toggle to project settings`  
  Indicates upcoming per-project control over semantic code search features.

- **[#844](https://github.com/moltis-org/moltis/pull/844)** — `feat(config): add default sub-agent presets`  
  Adds built-in presets (`research`, `coder`, `reviewer`, `qa`, `ux`, `docs`, `coordinator`) and session-scoped Modes, suggesting a push toward workflow orchestration capabilities.

- **[#840](https://github.com/moltis-org/moltis/pull/840)** — `feat(skills): MCP server management skill and post-install recipes`  
  Documents the full `mcp.*` RPC namespace for programmatic MCP server management, indicating improved developer experience and extensibility.

**Prediction:** The next release is likely to include MCP OAuth improvements, sub-agent presets, and per-project code indexing controls based on current PR momentum.

---

## 7. User Feedback Summary

**Pain Points Identified:**

1. **Platform Compatibility Issues** — Docker sandbox failures on WSL2 and ARM platforms (Raspberry Pi) indicate users are running Moltis in diverse environments. The fix in #853 addresses this but highlights the need for broader CI/CD testing across platforms.

2. **LLM Provider Schema Handling** — Multiple issues (#849, #848) stem from inconsistent JSON Schema handling across providers (Gemini, Fireworks). Users expect plug-and-play model compatibility.

3. **OAuth UX Friction** — Missing re-auth button (#851) caused user frustration; now fixed. OAuth configuration gaps (#850) remain a concern for enterprise users.

4. **Memory/Persistence Bugs** — Silent memory turn date issues (#857) suggest users rely on Moltis for long-running agent sessions where data integrity is critical.

**Positive Signals:**

- The datetime feature (#176) received 16 comments, indicating strong user interest in context-aware agent behavior.
- The bundled skills initiative (#797) with 101 default skills suggests users want immediate out-of-the-box functionality.
- Smart auto-scroll (#846) addresses a common UX complaint in chat interfaces.

---

## 8. Backlog Watch

**Issues Needing Maintainer Attention:**

| # | Title | Age | Status | Concern |
|---|-------|-----|--------|---------|
| [#858](https://github.com/moltis-org/moltis/issues/858) | Heartbeat re-fires in tight loop | **New (today)** | Open | **Critical** — Can cause agent infinite loops; needs triage |
| [#857](https://github.com/moltis-org/moltis/issues/857) | Silent memory turn saves with wrong dates | **1 day** | Open | **Medium** — Data integrity for long sessions |
| [#848](https://github.com/moltis-org/moltis/issues/848) | Fireworks Fire Pass: JSON Schema not supported | **1 day** | Open | **Medium** — Provider compatibility; fix PR #856 merged |
| [#850](https://github.com/moltis-org/moltis/issues/850) | Support client_secret in MCP OAuth override | **1 day** | Open | **Medium** — Enterprise deployment blocker |

**Stale/Open PRs Requiring Review:**

| # | Title | Age | Status |
|---|-------|-----|--------|
| [#847](https://github.com/moltis-org/moltis/pull/847) | Wire up project combo dropdown | 1 day | Open |
| [#846](https://github.com/moltis-org/moltis/pull/846) | Smart auto-scroll for chat | 1 day | Open |
| [#837](https://github.com/moltis-org/moltis/pull/837) | code_index_enabled toggle | 2 days | Open |
| [#840](https://github.com/moltis-org/moltis/pull/840) | MCP server management skill | 2 days | Open |
| [#844](https://github.com/moltis-org/moltis/pull/844) | Default sub-agent presets | 2 days | Open |

**Recommendation:** Prioritize review of #847 and #846 as they address UI functionality gaps. The heartbeat bug (#858) should be triaged immediately given its potential for disrupting agent execution.

---

*Digest generated from GitHub data for [moltis-org/moltis](https://github.com/moltis-org/moltis) on 2026-04-24.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

<think>Let me analyze the GitHub data for CoPaw (QwenPaw) and generate a structured project digest for 2026-04-24.

Key data points:
- Issues updated in last 24h: 50 (open/active: 26, closed: 24)
- PRs updated in last 24h: 50 (open: 17, merged/closed: 33)
- New releases: 2 (v1.1.4-beta.1 and v1.1.3.post1)

Let me organize this into the required sections.
</think>

# CoPaw Project Digest — 2026-04-24

## 1. Today's Overview

CoPaw (QwenPaw) shows **high activity** on April 24, 2026, with 50 issues and 50 PRs updated in the last 24 hours. The project closed or merged 33 PRs while 17 remain open, indicating strong review throughput. Two new releases shipped — a patch release v1.1.3.post1 addressing a defender regression and a beta v1.1.4-beta.1 — suggesting active stabilization. Community engagement remains robust, with the "Help Wanted" issue (#2291) accumulating 60 comments, reflecting an active contributor pipeline. Overall project health is good, though several bugs around session state, channel configuration, and MCP client stability warrant attention.

---

## 2. Releases

### v1.1.4-beta.1
**Changes:**
- **chore(version):** Bumping version to 1.1.4b1 ([#3674](https://github.com/agentscope-ai/QwenPaw/pull/3674)) — preparation for next development cycle
- **docs(backup):** Fixed language issues in documentation figures ([#3678](https://github.com/agentscope-ai/QwenPaw/pull/3678))
- **chore(console):** Added `.prettierignore` and updated formatting

**Notes:** This is a beta release; breaking changes may still occur. No migration notes required.

---

### v1.1.3.post1
**Changes:**
- **fix:** Reverted to avoid defender issue ([#3717](https://github.com/agentscope-ai/QwenPaw/pull/3717)) — addresses a regression introduced in v1.1.3
- **fix(desktop):** Use native save dialog for file downloads in pywebview ([#3719](https://github.com/agentscope-ai/QwenPaw/pull/3719)) — improves desktop user experience

**Notes:** This is a patch release fixing a critical regression in v1.1.3. Users experiencing defender-related issues should upgrade immediately. No migration required.

---

## 3. Project Progress

### Merged/Closed PRs (33 total)

**Console UI Improvements (major focus):**
- **#3683** — Console/icon: Replaced alicdn logo with local image; added custom icons for Channel and Provider ([PR #3683](https://github.com/agentscope-ai/QwenPaw/pull/3683))
- **#3666** — fix: Dark mode font color ([PR #3666](https://github.com/agentscope-ai/QwenPaw/pull/3666))
- **#3654** — fix: Table pagination behavior (Ant Design v5 compatibility) ([PR #3654](https://github.com/agentscope-ai/QwenPaw/pull/3654))
- **#3639** — fix: Markdown tables and code blocks display; modified File page layout ([PR #3639](https://github.com/agentscope-ai/QwenPaw/pull/3639))
- **#3634** — fix: Skill select & skillpool select — split search dropdown, refactored skill page components ([PR #3634](https://github.com/agentscope-ai/QwenPaw/pull/3634))
- **#3616** — fix (console): Fix search in skill page ([PR #3616](https://github.com/agentscope-ai/QwenPaw/pull/3616))
- **#3608** — style: Statistics code refactoring and sidebar icon replacement ([PR #3608](https://github.com/agentscope-ai/QwenPaw/pull/3608))
- **#3737** — Console/configuration: Optimized Tool Execution Security config module and ApprovalCard style ([PR #3737](https://github.com/agentscope-ai/QwenPaw/pull/3737))
- **#3715** — feat: Security — collapsed detection rules by type; added Shell Evasion Detection module ([PR #3715](https://github.com/agentscope-ai/QwenPaw/pull/3715))
- **#3667** — fix: Del fontFamily ([PR #3667](https://github.com/agentscope-ai/QwenPaw/pull/3667))
- **#3590** — style: Debug code refactoring and style optimization ([PR #3590](https://github.com/agentscope-ai/QwenPaw/pull/3590))

**Backend/Provider:**
- **#3719** — fix(desktop): Use native save dialog for file downloads in pywebview ([PR #3719](https://github.com/agentscope-ai/QwenPaw/pull/3719))
- **#3717** — fix: Revert to avoid defender ([PR #3717](https://github.com/agentscope-ai/QwenPaw/pull/3717))

---

### Open PRs (17 total)

**New Features:**
- **#3759** — feat(providers): Add Unsloth Studio provider — extends `OpenAIProvider` for local LLM hosting ([PR #3759](https://github.com/agentscope-ai/QwenPaw/pull/3759))
- **#3509** — feat: Add multimodal message support (images/files) — adds MediaContent model, auto-detection, Base64/URL/file path support ([PR #3509](https://github.com/agentscope-ai/QwenPaw/pull/3509))
- **#3550** — feat(routing): Align scope-aware effective model semantics ([PR #3550](https://github.com/agentscope-ai/QwenPaw/pull/3550))

**Bug Fixes:**
- **#3761** — style: Fix text overlap in agentSelect ([PR #3761](https://github.com/agentscope-ai/QwenPaw/pull/3761))
- **#3758** — fix(tools): Normalize missing builtin tool icons in API responses — fixes 500 error for legacy configs ([PR #3758](https://github.com/agentscope-ai/QwenPaw/pull/3758))
- **#3605** — fix: Updated WeixinChannel identifier name to match registry key name ("weixin" vs "wechat") ([PR #3605](https://github.com/agentscope-ai/QwenPaw/pull/3605))

**Documentation:**
- **#3755** — docs(website): Add self-evolving and proactive documentation ([PR #3755](https://github.com/agentscope-ai/QwenPaw/pull/3755))

**Infrastructure:**
- **#3698** — Optimize pip installation in Dockerfile using uv ([PR #3698](https://github.com/agentscope-ai/QwenPaw/pull/3698))

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Title | Comments | Status | Link |
|-------|-------|----------|--------|------|
| #2291 | Help Wanted: Open Tasks — Come Contribute! | 60 | OPEN | [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) |
| #2831 | Web console chat page, write_file failed many times, but cannot stop it | 9 | CLOSED | [#2831](https://github.com/agentscope-ai/QwenPaw/issues/2831) |
| #3709 | I disabled a safe guard rule, but it still blocked some command | 8 | OPEN | [#3709](https://github.com/agentscope-ai/QwenPaw/issues/3709) |
| #3695 | 最新版本1.1.3执行打包镜像，出现git错误 | 7 | CLOSED | [#3695](https://github.com/agentscope-ai/QwenPaw/issues/3695) |
| #2317 | 无法正常对话 | 7 | CLOSED | [#2317](https://github.com/agentscope-ai/QwenPaw/issues/2317) |

**Analysis:**
- **#2291** (60 comments) is a meta-issue for community contributions, indicating strong contributor engagement and a healthy open-task pipeline.
- **#2831** (9 comments) highlights UX pain around inability to stop long-running write_file operations — a user experience gap.
- **#3709** (8 comments) reveals confusion around guard rule configuration; users expect disabled rules to be fully bypassed but they still trigger, suggesting documentation or UX clarity needed.
- **#3695** (7 comments) reports `git: not found` in Docker builds, indicating missing dependencies in the Dockerfile — a DevOps/integration issue.

---

## 5. Bugs & Stability

### Reported Bugs (ranked by severity/impact)

| Severity | Issue | Description | Status | Fix PR? |
|----------|-------|-------------|--------|---------|
| **High** | #3750 | Stop button doesn't reset session state; new messages blocked after stopping (desktop) | OPEN | Related #2991, #1489 |
| **High** | #3709 | Disabled guard rule still blocks commands (TOOL_CMD_IFS_INJECTION) | OPEN | None |
| **High** | #3640 | MCP client TaskGroup exception causes agent freeze (no response, no error) | OPEN | None |
| **Medium** | #3573 | Cron task with channel=weixin fails with KeyError | OPEN | #3605 (fixes identifier mismatch) |
| **Medium** | #3552 | Console channel crashes on malformed Unicode surrogate during SSE | OPEN | None |
| **Medium** | #3677 | Discord connection fails due to invalid regex in discord.py | CLOSED | None mentioned |
| **Medium** | #3047 | MemorySearch fails: database file not found (SQLite assumption) | OPEN | None |
| **Low** | #3748 | qwenpaw update cannot shutdown existing process | OPEN | None |
| **Low** | #3549 | ValidationError on FunctionCallOutput call_id (ARM system) | OPEN | None |

**Critical Observations:**
- **Session state bug (#3750):** Users cannot recover from stopped tasks without restarting the application — this is a significant UX regression.
- **Guard rule bypass bug (#3709):** Security configuration appears non-functional when rules are disabled, which could erode user trust.
- **MCP client freeze (#3640):** Silent failures in async TaskGroup cause agents to become unresponsive, a stability concern.

---

## 6. Feature Requests & Roadmap Signals

### Notable Feature Requests

| Request | Description | Comments | Link |
|---------|-------------|----------|------|
| #3593 | Make execute_shell_command timeout configurable per agent in agent.json | 4 | [#3593](https://github.com/agentscope-ai/QwenPaw/issues/3593) |
| #2655 | browser_use tool should support Apple Silicon (ARM) by default on macOS | 4 | [#2655](https://github.com/agentscope-ai/QwenPaw/issues/2655) |
| #3742 | DingTalk channel: support segmented push for messages > 3500 chars | 3 | [#3742](https://github.com/agentscope-ai/QwenPaw/issues/3742) |
| #3752 | Add right-click context menu in desktop and web UI | 2 | [#3752](https://github.com/agentscope-ai/QwenPaw/issues/3752) |
| #3531 | Add OpenAI Responses API support for custom providers | 2 | [#3531](https://github.com/agentscope-ai/QwenPaw/issues/3531) |

**Roadmap Signals:**
- **Configurable shell timeouts (#3593):** 60-second default is too restrictive for long-running tasks; likely candidate for v1.1.4.
- **Apple Silicon browser support (#2655):** Performance issue on M-series Macs; affects developer experience on modern hardware.
- **Multimodal support (#3509):** Open PR suggests this is in active development — may land in v1.1.4.
- **Unsloth Studio provider (#3759):** New provider PR indicates expanding local LLM integration ecosystem.

---

## 7. User Feedback Summary

### Pain Points

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Cannot stop AI operations** | #2831, #3750 | Users feel trapped; forced to restart app |
| **Guard rules don't disable properly** | #3709 | Security configuration confusion |
| **Docker build failures** | #3695 | DevOps friction; missing `git` in Dockerfile |
| **MCP client freezes silently** | #3640, #3642 | Loss of trust; no error feedback |
| **Weixin channel misconfiguration** | #3573, #3605 | Channel identifier mismatch causes failures |
| **Multimodal not working** | #3756 | Users expect vision capabilities with multimodal models |

### Use Cases Observed

- **AI coding assistance** — write_file operations, git commit automation
- **Cross-channel notifications** — DingTalk, WeChat, Discord integrations
- **Local LLM hosting** — Ollama, LM Studio, now Unsloth Studio
- **Cron/scheduled tasks** — automated reminders and reports
- **Desktop deployment** — exe packaging for non-technical users

### Satisfaction Signals

- Active contributor community (60 comments on help-wanted issue)
- Rapid bug fixes (v1.1.3.post1 released within days of v1.1.3)
- UI improvements landing frequently (11 console UI PRs merged)

---

## 8. Backlog Watch

### Long-Unanswered or Important Issues Needing Maintainer Attention

| Issue | Age | Status | Priority | Link |
|-------|-----|--------|----------|------|
| #2291 | ~30 days | OPEN | Community | [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) |
| #2655 | ~24 days | OPEN | Feature | [#2655](https://github.com/agentscope-ai/QwenPaw/issues/2655) |
| #3047 | ~17 days | OPEN | Bug | [#3047](https://github.com/agentscope-ai/QwenPaw/issues/3047) |
| #3549 | ~7 days | OPEN | Bug | [#3549](https://github.com/agentscope-ai/QwenPaw/issues/3549) |
| #3750 | 1 day | OPEN | Bug (High) | [#3750](https://github.com/agentscope-ai/QwenPaw/issues/3750) |
| #3709 | 1 day | OPEN | Bug (High) | [#3709](https://github.com/agentscope-ai/QwenPaw/issues/3709) |

**Notes:**
- **#3047** (MemorySearch database error) has been open 17 days without response — may indicate a complex backend issue.
- **#3549** (ARM ValidationError) affects ARM Linux users; no response in 7 days.
- **#3750** and **#3709** are fresh but high-severity bugs requiring prompt attention.

---

*Digest generated for CoPaw (QwenPaw) on 2026-04-24. Data sourced from GitHub activity in the last 24 hours.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

<think>Let me analyze the GitHub data for ZeptoClaw and generate a structured project digest for 2026-04-24.

Key observations:
1. **Activity**: 4 issues updated, 8 PRs updated in last 24h
2. **No new releases** today
3. **Active areas**: providers (Liquid AI), safety (SSRF, audit trail), CI improvements
4. **Community engagement**: Issues with comments (541, 221), PRs from multiple contributors

Let me structure this properly:

**Today's Overview**: High activity day with 8 PRs (3 open, 5 merged/closed), focus on safety features and CI improvements.

**Releases**: None today.

**Project Progress**: 
- Safety features merged: SSRF validation at config time, hash-chain audit trail
- CI expansion PR open
- Liquid AI provider integration in progress
- Dependencies updated

**Community Hot Topics**:
- Liquid AI provider integration (issue #541, PR #543)
- CI coverage expansion (issue #545, PR #544)
- Safety features (SSRF validation, audit trail)

**Bugs & Stability**: No bugs reported today, but safety features being added to improve stability.

**Feature Requests**: Liquid AI integration, CI improvements, safety features.

**User Feedback**: Not directly visible from data, but safety and reliability seem to be priorities.

**Backlog Watch**: Need to check for long-unanswered items.

Let me write this up properly.
</think>

# ZeptoClaw Project Digest — 2026-04-24

## 1. Today's Overview

ZeptoClaw experienced high development activity on 2026-04-24, with 8 PRs updated and 4 issues receiving attention in the last 24 hours. The project continues to advance its safety and security capabilities, with two significant security features (SSRF validation and hash-chain audit trail) merged into the codebase. CI infrastructure improvements are a focal point, with an open PR expanding feature coverage. The Liquid AI provider integration remains a key upcoming feature, with both an issue and corresponding PR in flight. Overall project health appears strong with no reported bugs or regressions.

## 2. Releases

**No new releases today.** The project has not published any versions in the last 24 hours.

---

## 3. Project Progress

### Merged/Closed PRs (5 total)

| PR | Title | Area | Key Changes |
|----|-------|------|-------------|
| [#527](https://github.com/qhkm/zeptoclaw/pull/527) | feat(safety): add config-time SSRF endpoint validation | Safety | Added endpoint validation for provider `api_base` values; surfaced diagnostics in `zeptoclaw config check`; added `--allow-private-endpoints` onboarding flag |
| [#528](https://github.com/qhkm/zeptoclaw/pull/528) | feat: add in-memory hash-chain audit trail for tool execution | Safety | Implemented SHA-256 hash chain in `src/audit.rs`; wired `kernel::execute_tool()` to record `ToolInvoke` entries; classified shell/network/spawn calls with specific audit actions |
| [#524](https://github.com/qhkm/zeptoclaw/pull/524) | feat: add coding benchmark fixture for agent comparisons | Testing | Added self-contained coding benchmark fixture under `test-coding/`; included `verify.py` checks and task instructions for repeatable evaluation |
| [#542](https://github.com/qhkm/zeptoclaw/pull/542) | chore(deps): bump EmbarkStudios/cargo-deny-action from 2.0.15 to 2.0.16 | Dependencies | Cherry-picked dependabot PR under author-owned branch to bypass workflow scope restrictions |
| [#521](https://github.com/qhkm/zeptoclaw/pull/521) | chore(deps): bump EmbarkStudios/cargo-deny-action from 2.0.15 to 2.0.16 | Dependencies | Original dependabot PR (superseded by #542) |

### Open PRs (3 total)

| PR | Title | Area | Status | Notes |
|----|-------|------|--------|-------|
| [#544](https://github.com/qhkm/zeptoclaw/pull/544) | expand CI coverage for optional integration features | CI | Open | Closes #545; adds `channel-email`, `google`, `provider-vertex`, `whatsapp-web` to feature matrix |
| [#543](https://github.com/qhkm/zeptoclaw/pull/543) | feat(providers): add Liquid AI (LFM2) as OpenAI-compatible provider | Providers | Open | Adds Liquid AI as first-class provider (base URL `https://labs.liquid.ai/api/v1`); supports LFM2 model family |
| [#517](https://github.com/qhkm/zeptoclaw/pull/517) | chore(deps): bump sha2 from 0.10.9 to 0.11.0 | Dependencies | Open | RustCrypto sha2 crate update |

---

## 4. Community Hot Topics

### Most Active Discussions

**1. Liquid AI Provider Integration** — Issue [#541](https://github.com/qhkm/zeptoclaw/issues/541) (Open, 2 comments)
- **Topic**: Integration of Liquid AI's LFM (Liquid Foundation Models) as edge-native models
- **Significance**: Aligns with ZeptoClaw's edge/IoT thesis; LFM models offer non-transformer architecture with lower memory footprint
- **Models targeted**: LFM-1B, LFM-3B, LFM-7B, plus LFM2 family (LFM2-1.2B-Tool, LFM2.5-1.2B-Instruct, LFM2-24B-A2B)
- **Companion PR**: [#543](https://github.com/qhkm/zeptoclaw/pull/543) implements the integration as OpenAI-compatible provider
- **Analysis**: Strong strategic fit for the project's focus on resource-constrained deployments; community interest appears in enabling on-device AI capabilities

**2. CI Feature Coverage Expansion** — Issue [#545](https://github.com/qhkm/zeptoclaw/issues/545) (Open, 0 comments)
- **Topic**: Compile optional integration features in normal PR CI
- **Problem**: Current CI allows optional integrations to drift silently; PRs can be green without testing integration paths
- **Proposed solution**: Expand feature matrix to include `channel-email`, `google`, `provider-vertex`, `whatsapp-web`
- **Companion PR**: [#544](https://github.com/qhkm/zeptoclaw/pull/544) implements the expansion
- **Analysis**: Addresses maintainability concerns; ensures integration compatibility before merge

**3. Merkle Hash-Chain Audit Trail** — Issue [#221](https://github.com/qhkm/zeptoclaw/issues/221) (Closed, 1 comment)
- **Topic**: Tamper-evident, append-only audit log for tool invocations
- **Implementation**: Merged via [#528](https://github.com/qhkm/zeptoclaw/pull/528)
- **Analysis**: Completed feature addressing security/compliance requirements; provides trust signals for production deployments

---

## 5. Bugs & Stability

**No bugs or regressions reported today.**

### Stability Improvements Merged

| Feature | PR | Impact |
|---------|-----|--------|
| SSRF endpoint validation at config/onboard time | [#527](https://github.com/qhkm/zeptoclaw/pull/527) | Prevents misconfiguration of provider endpoints; blocks private IP access during onboarding |
| Hash-chain audit trail | [#528](https://github.com/qhkm/zeptoclaw/pull/528) | Provides tamper-evident logging for tool executions; enables integrity verification |

**Note**: The SSRF validation feature (Issue [#450](https://github.com/qhkm/zeptoclaw/issues/450)) was also closed today after the PR merged, completing the security hardening work that began with runtime SSRF prevention.

---

## 6. Feature Requests & Roadmap Signals

### Active Feature Requests

| Issue | Title | Priority | Area | Likelihood of Near-Term Inclusion |
|-------|-------|----------|------|-----------------------------------|
| [#541](https://github.com/qhkm/zeptoclaw/issues/541) | Liquid AI (LFM) provider integration | P2-High | Providers | **High** — PR #543 already open |
| [#545](https://github.com/qhkm/zeptoclaw/issues/545) | Compile optional integration features in PR CI | Normal | CI | **High** — PR #544 already open |

### Roadmap Signals

1. **Provider Ecosystem Expansion**: Liquid AI integration indicates continued focus on edge-optimized model providers
2. **CI/CD Maturity**: Systematic expansion of CI coverage suggests investment in developer experience and regression prevention
3. **Security Hardening**: SSRF validation and audit trail features indicate security-first approach for production readiness

---

## 7. User Feedback Summary

*Note: Direct user feedback is not captured in the provided GitHub data. The following analysis is inferred from issue discussions and feature implementations.*

### Inferred User Needs

| Theme | Evidence | Interpretation |
|-------|----------|----------------|
| **Edge/IoT Deployment** | Liquid AI integration (non-transformer, low-memory models) | Users want on-device AI capabilities for resource-constrained environments |
| **Security & Compliance** | SSRF validation, hash-chain audit trail | Production users require tamper-evident logging and configuration-time safety checks |
| **CI Reliability** | CI expansion PR | Contributors want confidence that optional integrations don't break silently |
| **Benchmarking** | Coding benchmark fixture | Users need reproducible evaluation frameworks for agent comparisons |

### Satisfaction Indicators
- Two security features completed and merged within 24 hours suggests responsive maintenance
- Multiple contributors (qhkm, manelsen, dependabot) active indicates healthy community engagement

---

## 8. Backlog Watch

### Issues Requiring Maintainer Attention

| Issue | Title | Age | Status | Notes |
|-------|-------|-----|--------|-------|
| [#221](https://github.com/qhkm/zeptoclaw/issues/221) | Merkle hash-chain audit trail | ~7 weeks | **Closed** ✅ | Recently merged via #528 |
| [#450](https://github.com/qhkm/zeptoclaw/issues/450) | SSRF validation at config/onboard time | ~4 weeks | **Closed** ✅ | Recently merged via #527 |
| [#541](https://github.com/qhkm/zeptoclaw/issues/541) | Liquid AI provider integration | 1 day | Open | Active discussion (2 comments); PR #543 in flight |
| [#545](https://github.com/qhkm/zeptoclaw/issues/545) | CI feature coverage expansion | 1 day | Open | PR #544 in flight |

### Long-Standing Items
No long-unanswered issues detected in the 24-hour window. All recent issues have received updates or have corresponding PRs in progress.

### Dependency Updates Pending

| PR | Dependency | Version Change | Status |
|----|------------|----------------|--------|
| [#517](https://github.com/qhkm/zeptoclaw/pull/517) | sha2 (RustCrypto) | 0.10.9 → 0.11.0 | Open (9 days) |

---

## Summary Table

| Metric | Value |
|--------|-------|
| Issues updated (24h) | 4 |
| PRs updated (24h) | 8 |
| New releases | 0 |
| Open issues | 2 |
| Closed issues | 2 |
| Open PRs | 3 |
| Merged/closed PRs | 5 |
| Security features merged | 2 |
| Provider integrations in progress | 1 |

---

*Digest generated from ZeptoClaw GitHub data for 2026-04-24*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

<think>Let me analyze the GitHub data for EasyClaw (github.com/gaoyangz77/easyclaw) and generate a structured project digest for 2026-04-24.

Key data points:
- Issues updated in last 24h: 1 (open/active: 0, closed: 1)
- PRs updated in last 24h: 0 (open: 0, merged/closed: 0)
- New releases: 3 (v1.8.9, v1.8.8, v1.8.7)
- Latest Issue: #34 - Website download link broken (404 error for Windows version)
- No PRs

Let me structure this into the required format.
</think>

# EasyClaw Project Digest

**Date:** 2026-04-24
**Repository:** [github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

## 1. Today's Overview

EasyClaw (RivonClaw) shows **high release activity** today with three consecutive versions published (v1.8.7, v1.8.8, v1.8.9), indicating active maintenance. However, **development activity is minimal** with zero PRs merged/closed and zero new issues opened in the last 24 hours. One issue was closed—reportedly addressing a broken download link on the official website. The project appears to be in a **maintenance phase** with focus on packaging and distribution rather than new feature development.

---

## 2. Releases

| Version | Status | Key Notes |
|---------|--------|-----------|
| **v1.8.9** | Latest | Current stable release |
| **v1.8.8** | Previous | Patch release |
| **v1.8.7** | Previous | Patch release |

**Installation Notes (all versions):**
- **macOS users** may encounter Gatekeeper warnings ("RivonClaw is damaged and can't be opened"). This is a **false positive**—the app is unsigned, not corrupted.
- **Fix:** Open Terminal and run: `xattr -cr "/Applications/RivonClaw.app"` (command truncated in release notes)

**Breaking Changes:** None identified.
**Migration Notes:** No migration required between v1.8.7–v1.8.9.

---

## 3. Project Progress

| Metric | Count |
|--------|-------|
| PRs Merged/Closed (24h) | 0 |
| Issues Closed (24h) | 1 |

**Closed Issue:**
- [#34](https://github.com/gaoyangz77/rivonclaw/issues/34) — Official website download link returning 404 for Windows version (reported by @slowayear, closed 2026-04-23)

**Assessment:** No new code contributions or feature PRs today. The project is in a **quiet development period** with focus on resolving user-reported site issues.

---

## 4. Community Hot Topics

**Most Active Issue:**

| #34 | [CLOSED] 官网下载链接失效 (Website Download Link Invalid) |
|------|--------------------------------------------------------|
| **Author** | @slowayear |
| **Created** | 2026-04-23 |
| **URL** | [github.com/gaoyangz77/rivonclaw/issues/34](https://github.com/gaoyangz77/rivonclaw/issues/34) |
| **Reactions** | 0 👍 |
| **Comments** | 0 |

**Analysis:** This issue highlights a **critical distribution problem**—users cannot download the Windows version from the official site. The quick closure suggests the maintainer may have fixed the link or redirected users. This signals a need for **CI/CD automation** to ensure download links remain valid with each release.

---

## 5. Bugs & Stability

| Severity | Issue | Status |
|----------|-------|--------|
| **High** | Website download returning 404 for Windows builds | ✅ Closed (likely resolved) |

**Assessment:** No new bugs or regressions reported today. The download link issue appears to be an **infrastructure/deployment problem** rather than a code defect. No fix PRs were opened, suggesting manual resolution by the maintainer.

---

## 6. Feature Requests & Roadmap Signals

**No feature requests filed today.**

**Inferred Roadmap Signals:**
- Rapid consecutive releases (v1.8.7→v1.8.9) suggest **bug-fix-driven releases** rather than feature development
- macOS Gatekeeper workarounds indicate **potential plans for code signing** in future releases
- No open issues remain active—community engagement appears low

**Prediction:** The next release (v1.9.0 or v1.8.10) may focus on:
1. Automated release pipeline to prevent broken download links
2. macOS code signing to eliminate Gatekeeper warnings
3. Possibly new AI agent capabilities (given the project category)

---

## 7. User Feedback Summary

| Pain Point | Source | Impact |
|------------|--------|--------|
| **Broken download link** | Issue #34 | Users cannot download Windows version |
| **macOS Gatekeeper warnings** | Release notes | Poor first-run experience for macOS users |

**User Sentiment:** Mixed. The broken download link represents a **critical friction point** for user acquisition. The Gatekeeper issue, while not blocking, creates confusion and erodes trust (users may believe the app is malware).

**Satisfaction Signals:** None reported today. Low issue volume may indicate either satisfaction or low user engagement.

---

## 8. Backlog Watch

| Item | Age | Priority | Notes |
|------|-----|----------|-------|
| No long-unanswered issues | — | — | All issues addressed promptly |

**Assessment:** The backlog is **healthy**—no stale issues detected. Issue #34 was closed within 24 hours of creation, indicating responsive maintainer engagement.

---

## Summary Metrics

| Metric | Value |
|--------|-------|
| **Releases (24h)** | 3 |
| **PRs Merged (24h)** | 0 |
| **Issues Closed (24h)** | 1 |
| **Open Issues** | 0 |
| **Open PRs** | 0 |
| **Project Health** | 🟡 Moderate (active releases, low code activity) |

---

*Generated: 2026-04-24 | Data Source: GitHub API*

</details>

<details>
<summary><strong>NemoClaw</strong> — <a href="https://github.com/NVIDIA/NemoClaw">NVIDIA/NemoClaw</a></summary>

<think>Let me analyze the GitHub data for NemoClaw and generate a structured project digest for 2026-04-24.

Key data points:
- Issues updated in last 24h: 50 (open/active: 32, closed: 18)
- PRs updated in last 24h: 50 (open: 22, merged/closed: 28)
- New releases: 0

Let me organize this into the requested sections.

**1. Today's Overview**
- High activity with 50 issues and 50 PRs updated
- 28 PRs merged/closed, 22 still open
- No new releases
- Multiple security fixes merged
- Several bug fixes targeting v0.0.24 and v0.0.25

**2. Releases**
- No new releases today

**3. Project Progress**
Looking at merged PRs:
- #2397: CI/CD deduplication for E2E tests
- #2393: OpenShell version bump to 0.0.36
- #2396: Docs bumped to 0.0.24
- #2392: Redact messaging tokens in session failures
- #2377: Patch plugin install for symlinked extensions dir
- #2373: Show live gateway inference in list/status
- #2355: Prevent Slack auth failure from crashing gateway
- #2366: Make rebuild atomic with credential preflight
- #2304: Honor narrowed preset selection in non-interactive path
- #2398: Extract dashboard delivery chain into modules
- #2356: Add procps for ps/top/kill debug tools
- #2327: Fix npm install fork-bomb
- #1996: Reject symlinks on ~/.nemoclaw to prevent credential hijack
- #2324: Share private-network block list between CLI and plugin
- #2378: Externalize gateway auth token from openclaw.json


- #1990: Migrate GLM-5 model references to GLM-5.1
- #1954: Redact gateway auth token from console output

**4. Community Hot Topics**
The most active issue is #1992 with 96 comments about nightly E2E pipeline failures, followed by #1908 (11 comments) involving OpenClaw TUI HTTP 503 errors on Jetson Orin. Several other issues have 7 comments each, including #993 about npm install being blocked and #893 about connecting to self-hosted vLLM models.

**5. Bugs & Stability**
Critical security vulnerabilities are being addressed: #2336 involves messaging tokens leaking during onboarding sessions, while #1996 prevents symlink-based credential hijacking. The project is also fixing a fork-bomb vulnerability in npm install (#2327), plugin installation issues with symlinked extensions directories (#2203), and sandbox destruction when stopping the gateway (#2276). Additional fixes target empty content returns from tool calls (#1193), timeout configuration problems (#2281), and Hermes Agent writing to incorrect locations (#2376).

**6. Feature Requests & Roadmap Signals**
Users are requesting a `nemoclaw reconnect` command for post-reboot recovery (#910), local Ollama inference support (#2354), and expanded Linux tool availability within sandboxes (#2343). There's also interest in per-agent configuration overrides (#2400) and Brev CI launchables for E2E testing (#1326, #1328).

**7. User Feedback Summary**
Users encounter frequent onboarding failures, particularly around messaging token handling and plugin installation. The nightly E2E pipeline shows instability, and local model integration remains problematic. DNS resolution issues on Jetson Orin and missing debugging tools like `ps` create friction. Security concerns around credential exposure are prominent.

**8. Backlog Watch**
Several issues remain unresolved: #1992 tracking nightly E2E failures, #1908 with OpenClaw TUI HTTP 503 errors, #893 requesting self-hosted vLLM support, #910 needing a reconnect command, and #1326/#1328 for Brev CI launchables. The Epic #1326 is blocked and awaiting attention.
</think>

# NemoClaw Project Digest — 2026-04-24

## 1. Today's Overview

NemoClaw experienced high activity on 2026-04-24, with 50 issues and 50 PRs updated in the last 24 hours. The project closed or merged 28 PRs while 22 remain open. Notably, no new releases were cut today, though the team is actively preparing v0.0.24 (docs bumped) and v0.0.25. A significant security push is underway with multiple PRs addressing credential exposure, symlink attacks, and token redaction. The community continues to report integration challenges with local models (Ollama, vLLM) and platform-specific issues on Jetson and Ubuntu.

---

## 2. Releases

**No new releases today.** The project is in a pre-release state with v0.0.24 documentation promoted and v0.0.25 work in progress via PR #2397.

---

## 3. Project Progress

### Merged/Closed PRs (28 total)

| PR | Title | Impact |
|----|-------|--------|
| [#2397](https://github.com/NVIDIA/NemoClaw/pull/2397) | ci: deduplicate PR E2E — move sandbox tests exclusively to NVIDIA runners | Reduces CI duplication, speeds up PR validation |
| [#2393](https://github.com/NVIDIA/NemoClaw/pull/2393) | chore(deps): bump OpenShell version pin from 0.0.32 to 0.0.36 | Dependency alignment for v0.0.25 |
| [#2396](https://github.com/NVIDIA/NemoClaw/pull/2396) | docs(version): bump docs to 0.0.24 | Prepares v0.0.24 release docs |
| [#2392](https://github.com/NVIDIA/NemoClaw/pull/2392) | fix(onboard): redact messaging tokens in session failures | Security: prevents Slack/Telegram/Discord token leaks |
| [#2377](https://github.com/NVIDIA/NemoClaw/pull/2377) | fix(dockerfile): patch plugin install for symlinked extensions dir | Fixes `openclaw plugins install` inside sandbox |
| [#2373](https://github.com/NVIDIA/NemoClaw/pull/2373) | fix(cli): show live gateway inference in list/status | CLI now reflects runtime inference changes |
| [#2366](https://github.com/NVIDIA/NemoClaw/pull/2366) | fix(rebuild): make rebuild atomic with credential preflight | Prevents sandbox loss during failed rebuilds |
| [#2355](https://github.com/NVIDIA/NemoClaw/pull/2355) | fix(channels): prevent Slack auth failure from crashing gateway | Improves Slack integration stability |
| [#2356](https://github.com/NVIDIA/NemoClaw/pull/2356) | feat(sandbox): add procps for ps/top/kill debug tools | Adds essential debugging tools to sandbox |
| [#2327](https://github.com/NVIDIA/NemoClaw/pull/2327) | fix: npm install → prepare → npm link → prepare... causing fork-bombs | Fixes CI/build instability |
| [#2304](https://github.com/NVIDIA/NemoClaw/pull/2304) | fix(onboard): honor narrowed preset selection in non-interactive path | Corrects policy preset behavior on re-onboard |
| [#1236](https://github.com/NVIDIA/NemoClaw/pull/1236) | test: add regression guards for sandbox config provisioning | Adds CI guards for config provisioning fixes |
| [#2398](https://github.com/NVIDIA/NemoClaw/pull/2398) | refactor(cli): extract dashboard delivery chain into contract/health/recover modules | Code quality: modularizes dashboard logic |
| [#2378](https://github.com/NVIDIA/NemoClaw/pull/2378) | feat(security): externalize gateway auth token from openclaw.json | Security: removes token from readable config |
| [#2324](https://github.com/NVIDIA/NemoClaw/pull/2324) | fix(security): share private-network block list between CLI and plugin | Security: unified SSRF protection |
| [#1996](https://github.com/NVIDIA/NemoClaw/pull/1996) | fix(security): reject symlinks on ~/.nemoclaw to prevent credential hijack | Security: prevents symlink-based attacks |
| [#1954](https://github.com/NVIDIA/NemoClaw/pull/1954) | fix(security): redact gateway auth token from console output | Security: prevents token exposure in logs |
| [#1990](https://github.com/NVIDIA/NemoClaw/pull/1990) | fix(inference): migrate GLM-5 model references to GLM-5.1 | Model deprecation preparation (deadline May 9, 2026) |

### Open PRs (22 total)

Key open PRs include:
- [#2385](https://github.com/NVIDIA/NemoClaw/pull/2385): docs(cli): correct onboard banner and help for --model/--provider flags
- [#2398](https://github.com/NVIDIA/NemoClaw/pull/2398): refactor(cli): extract dashboard delivery chain (modularization)
- [#2147](https://github.com/NVIDIA/NemoClaw/pull/2147): feat(cli): add nemoclaw list --json (machine-readable output)

---

## 4. Community Hot Topics

### Most Active Issues by Comment Count

| Issue | Title | Comments | Trend |
|-------|-------|----------|-------|
| [#1992](https://github.com/NVIDIA/NemoClaw/issues/1992) | [bug, CI/CD, E2E] Nightly E2E failed | **96** | 🔴 Active |
| [#1908](https://github.com/NVIDIA/NemoClaw/issues/1908) | [Jetson Orin] OpenClaw TUI HTTP 503 "inference service unavailable" | **11** | 🔴 Active |
| [#993](https://github.com/NVIDIA/NemoClaw/issues/993) | [Linux] Policy edge case: npm install blocked (403) | **7** | 🟡 Ongoing |
| [#893](https://github.com/NVIDIA/NemoClaw/issues/893) | Connecting Nemoclaw to self-hosted vLLM model | **7** | 🟡 Ongoing |
| [#1193](https://github.com/NVIDIA/NemoClaw/issues/1193) | openclaw agent returns empty content when model makes tool calls | **4** | 🟢 Closed |

### Analysis

- **#1992 (96 comments):** The nightly E2E pipeline failure is the most discussed topic. Users and maintainers are debugging install/test logs. This signals CI/CD reliability concerns and potential flaky test issues.
- **#1908 (11 comments):** Jetson Orin users face inference service unavailability, indicating platform-specific integration challenges with NVIDIA cloud inference endpoints.
- **#893 (7 comments):** Self-hosted vLLM integration remains a pain point; users want better OpenAI-compatible endpoint support.
- **#993 (7 comments):** Network policy blocking npm registry access is a recurring sandbox security vs. usability tension.

---

## 5. Bugs & Stability

### Critical/High Priority Bugs

| Issue | Title | Severity | Status | Fix PR |
|-------|-------|----------|--------|--------|
| [#2336](https://github.com/NVIDIA/NemoClaw/issues/2336) | Messaging Tokens (Slack/Discord/Telegram) Leaked in Onboarding Sessions | 🔴 Critical | Open | [#2392](https://github.com/NVIDIA/NemoClaw/pull/2392) merged |
| [#1992](https://github.com/NVIDIA/NemoClaw/issues/1992) | Nightly E2E pipeline failed | 🔴 Critical | Open | — |
| [#2203](https://github.com/NVIDIA/NemoClaw/issues/2203) | openclaw plugins install fails inside sandbox: "Invalid extensions directory" | 🟠 High | Closed | [#2377](https://github.com/NVIDIA/NemoClaw/pull/2377) merged |
| [#2276](https://github.com/NVIDIA/NemoClaw/issues/2276) | openshell stop destroys sandbox | 🟠 High | Open | — |
| [#2281](https://github.com/NVIDIA/NemoClaw/issues/2281) | Unable to increase agents.defaults.timeoutSeconds | 🟠 High | Closed | — |
| [#2376](https://github.com/NVIDIA/NemoClaw/issues/2376) | Hermes Agent tries to write to wrong location | 🟠 High | Open | — |
| [#2318](https://github.com/NVIDIA/NemoClaw/issues/2318) | Ollama port override returns 401 Unauthorized | 🟡 Medium | Open | — |
| [#2354](https://github.com/NVIDIA/NemoClaw/issues/2354) | Local Ollama inferencing not working | 🟡 Medium | Open | — |

### Stability Concerns

- **Security posture:** Multiple security PRs merged today (#2392, #2378, #2324, #1996, #1954) indicate proactive hardening against credential leaks and symlink attacks.
- **CI reliability:** #1992 (96 comments) suggests ongoing E2E flakiness; #2397 attempts to address by consolidating to NVIDIA runners.
- **Local model integration:** Multiple issues (#2354, #2318, #893) point to friction with Ollama/vLLM setup.

---

## 6. Feature Requests & Roadmap Signals

### Notable Feature Requests

| Issue | Title | Priority | Signals |
|-------|-------|----------|---------|
| [#910](https://github.com/NVIDIA/NemoClaw/issues/910) | feat(cli): add nemoclaw reconnect command for post-reboot recovery | 🟠 High | 2 comments; addresses known UX friction |
| [#2343](https://github.com/NVIDIA/NemoClaw/issues/2343) | Support for necessary linux tools inside the sandbox | 🟡 Medium | 1 comment; **Addressed by** [#2356](https://github.com/NVIDIA/NemoClaw/pull/2356) merged |
| [#2400](https://github.com/NVIDIA/NemoClaw/issues/2400) | openclaw config set rejects unset keys, blocking per-agent override | 🟠 High | 0 comments; blocks documented workaround |
| [#1326](https://github.com/NVIDIA/NemoClaw/issues/1326) | Epic: Brev CI launchables — pre-baked environments for E2E test reliability | 🟡 Medium | Blocked; relates to #1992 |
| [#2147](https://github.com/NVIDIA/NemoClaw/pull/2147) | feat(cli): add nemoclaw list --json | 🟢 Low | Open PR; machine-readable output |

### Roadmap Signals

- **v0.0.24:** Documentation promoted; includes fixes for Slack auth crashes (#2355), plugin installation (#2377), and CLI inference display (#2373).
- **v0.0.25:** In progress; includes CI deduplication (#2397), OpenShell 0.0.36 bump (#2393), and security hardening.
- **Local model support:** Multiple issues suggest this is a growing user need; consider prioritizing Ollama/vLLM integration docs and testing.

---

## 7. User Feedback Summary

### Pain Points

1. **Onboarding failures leak credentials:** #2336 exposes a critical flaw where messaging tokens are written to `~/.nemoclaw/onboard-session.json` without proper redaction. Fixed by #2392.
2. **Nightly E2E instability:** #1992 has 96 comments, indicating sustained frustration with CI reliability.
3. **Local model setup friction:** Users struggle with Ollama (#2354, #2318) and self-hosted vLLM (#893) integration.
4. **Missing sandbox debugging tools:** #2343 reported `ps` command unavailable; addressed by #2356.
5. **Post-reboot workflow:** #910 highlights the need for a single `nemoclaw reconnect` command instead of manual steps.
6. **Jetson Orin DNS/inference issues:** #1908 and #2017 indicate platform-specific challenges on edge devices.

### Positive Signals

- Security improvements are being rapidly merged, showing responsiveness to critical issues.
- CLI quality-of-life improvements (#2373, #2385) address documented friction points.
- Modular refactoring (#2398) suggests improving long-term maintainability.

---

## 8. Backlog Watch

### Long-Unanswered or Blocked Issues Needing Maintainer Attention

| Issue | Title | Age | Status | Notes |
|-------|-------|-----|--------|-------|
| [#1992](https://github.com/NVIDIA/NemoClaw/issues/1992) | Nightly E2E failed | 7 days | Open | 96 comments; high community impact |
| [#1908](https://github.com/NVIDIA/NemoClaw/issues/1908) | Jetson Orin OpenClaw TUI HTTP 503 | 9 days | Open | Platform-specific; affects edge AI users |
| [#893](https://github.com/NVIDIA/NemoClaw/issues/893) | Connecting to self-hosted vLLM | ~30 days | Open | 7 comments; recurring theme |
| [#910](https://github.com/NVIDIA/NemoClaw/issues/910) | nemoclaw reconnect command | ~30 days | Open | 2 comments; simple but high-value |
| [#1326](https://github.com/NVIDIA/NemoClaw/issues/1326) | Epic: Brev CI launchables | 22 days | Blocked | Epic for CI reliability; blocked |
| [#1328](https://github.com/NVIDIA/NemoClaw/issues/1328) | ci: create Flavor 2 Brev launchable — CI-Ready GPU | 22 days | Blocked | Child of #1326 |
| [#2400](https://github.com/NVIDIA/NemoClaw/issues/2400) | openclaw config set rejects unset keys | 0 days | Open | New; blocks documented workaround |

### Recommendations

1. **Prioritize #1992:** The 96-comment E2E failure is the highest-engagement issue; a fix or clear workaround would reduce community frustration.
2. **Address #1326/#1328:** The blocked Brev CI launchable epic directly relates to E2E reliability; unblocking would improve CI health.
3. **Triage #893 and #2354:** Local model integration is a recurring theme; consider dedicated documentation or a "local models" troubleshooting guide.
4. **Review #2400:** New issue blocking documented workarounds; needs quick assessment.

---

*Digest generated from NemoClaw GitHub activity on 2026-04-24. Data sourced from github.com/NVIDIA/NemoClaw.*

</details>

---
*This digest is auto-generated by [Big Model Radar](https://github.com/borq168/big_model_radar).*