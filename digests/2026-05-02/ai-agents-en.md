# OpenClaw Ecosystem Digest 2026-05-02

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-02 01:57 UTC

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

# OpenClaw Project Digest — 2026-05-02

## 1. Today's Overview

OpenClaw maintains high activity with 500 issues and 500 PRs updated in the last 24 hours, indicating intense community engagement. No new releases shipped today. The project faces significant stability challenges, particularly around gateway reliability (leaks, deadlocks, CPU saturation), multi-agent orchestration, and session management. Security concerns around TLS certificate trust and Tailscale authentication bypass remain open. The community is actively contributing fixes across 35+ merged/closed PRs, with 465 PRs still open and under review.

---

## 2. Releases

**No new releases** in the last 24 hours.

---

## 3. Project Progress

### Merged/Closed PRs (35 total in last 24h)

| PR | Author | Area | Summary |
|----|--------|------|---------|
| [#75880](https://github.com/openclaw/openclaw/pull/75880) | hclsys | browser | Add `--headed` flag to browser start for runtime headed handoff |
| [#75495](https://github.com/openclaw/openclaw/pull/75495) | ottodeng | memory-host-markdown | Use global regex to replace all managed blocks (fixes CRLF/duplicate issue) |
| [#72843](https://github.com/openclaw/openclaw/pull/72843) | jakepresent | agents | Warm context-window cache for the gateway daemon |
| [#68566](https://github.com/openclaw/openclaw/pull/68566) | AstronautGumbo | agents/auth | Skip cooldown for format errors and HTTP 400s |
| [#68543](https://github.com/openclaw/openclaw/pull/68543) | Feelw00 | infra | Keep retryAsync delays above server-supplied Retry-After |
| [#68538](https://github.com/openclaw/openclaw/pull/68538) | isopenclaw | discord | Timebox native-command defer before dispatch |
| [#68537](https://github.com/openclaw/openclaw/pull/68537) | TTTT-T | telegram | Allow ACP bindings for direct chats |
| [#68503](https://github.com/openclaw/openclaw/pull/68503) | likewen-tech | gateway | Reduce diagnosis noise in `status --all` |
| [#75672](https://github.com/openclaw/openclaw/pull/75672) | ottodeng | sessions | Clean up archived transcript files on cleanup |
| [#68462](https://github.com/openclaw/openclaw/pull/68462) | smartchainark | config | Refuse to restore from polluted backup containing redacted secrets |
| [#68455](https://github.com/openclaw/openclaw/pull/68455) | ahbi1006-hue | feishu | Allow custom accountId during Feishu channel onboarding |
| [#68444](https://github.com/openclaw/openclaw/pull/68444) | GaosCode | feishu | Stop auto-forwarding mentions when disabled |
| [#75076](https://github.com/openclaw/openclaw/pull/75076) | Shadow-3 | web-ui/gateway | Harden Control UI auth, status warnings, and build provenance |
| [#68435](https://github.com/openclaw/openclaw/pull/68435) | foxer0952 | gateway | Accept audio/file content blocks in `/v1/chat/completions` |
| [#68422](https://github.com/openclaw/openclaw/pull/68422) | nightq | web-ui | Constrain web chat width to 920px for readability |
| [#68418](https://github.com/openclaw/openclaw/pull/68418) | briandevans | agents | Unpack typed-block delta.content arrays in openai-completions stream |
| [#68408](https://github.com/openclaw/openclaw/pull/68408) | jasonmakr | memory-core | Strip dreaming managed blocks from daily memory reads |
| [#68389](https://github.com/openclaw/openclaw/pull/68389) | lyfuci | plugins | Clarify allowlist warning when entries don't match discovered ids |
| [#68257](https://github.com/openclaw/openclaw/pull/68257) | mkoslacz | gateway | Stop restarting gateway on OAuth token refresh |
| [#68155](https://github.com/openclaw/openclaw/pull/68155) | everySympathy | memory | Apply decay to nested dated files |
| [#68152](https://github.com/openclaw/openclaw/pull/68152) | patricklee001 | web-ui | Use i18n t() for Node option in exec approvals |
| [#68149](https://github.com/openclaw/openclaw/pull/68149) | langningchen-openclaw | gateway | Use PowerShell Register-ScheduledTask for Windows auto-start |
| [#68146](https://github.com/openclaw/openclaw/pull/68146) | sparkeros | gateway | Hold startup-gated requests until post-attach |
| [#67796](https://github.com/openclaw/openclaw/pull/67796) | nightq | mattermost | Support filePath and path as mediaUrl fallbacks |
| [#67783](https://github.com/openclaw/openclaw/pull/67783) | huiwen01 | feishu | Target typing reaction on inbound message |
| [#67782](https://github.com/openclaw/openclaw/pull/67782) | p3nchan | telegram | Skip delete before non-empty command sync |
| [#67451](https://github.com/openclaw/openclaw/pull/67451) | jiasi-latent | whatsapp | Handle group prefix in WhatsApp target normalization |
| [#67432](https://github.com/openclaw/openclaw/pull/67432) | akinshaywai | web-ui | Add aria-label to pinned message Unpin button |
| [#67405](https://github.com/openclaw/openclaw/pull/67405) | IgorGanapolsky | gateway/cli | Add hands-free exec preset and clearer output |

**Key Themes:**
- **Security hardening**: Control UI auth improvements (#75076), backup safety (#68462)
- **Multi-channel fixes**: Feishu, Telegram, Discord, WhatsApp, Mattermost all receiving patches
- **Memory system improvements**: Nested file support, dreaming block stripping, decay fixes
- **Gateway stability**: Context-window cache warming, startup timing fixes, OAuth handling

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| # | Title | Comments | Reactions | Link |
|---|-------|----------|-----------|------|
| 73323 | Gateway runtime degradation: pricing fetch 60s timeouts, Telegram polling stalls, slow RPC | 15 | 1 | [Link](https://github.com/openclaw/openclaw/issues/73323) |
| 73655 | Gateway leak triad on plugin restart: Manifest EADDRINUSE retry loop, signal-handler accumulation, sync I/O | 11 | 1 | [Link](https://github.com/openclaw/openclaw/issues/73655) |
| 72808 | Silently lost connection to Slack | 11 | 2 | [Link](https://github.com/openclaw/openclaw/issues/72808) |
| 34400 | Feature: memory_search should support recursive subdirectory search | 10 | 0 | [Link](https://github.com/openclaw/openclaw/issues/34400) |
| 50248 | Bug: sessions cleanup --fix-missing can prune fresh cron sessions | 8 | 0 | [Link](https://github.com/openclaw/openclaw/issues/50248) |
| 71736 | [RFC] Control UI plugin contribution slots | 8 | 0 | [Link](https://github.com/openclaw/openclaw/issues/71736) |
| 66944 | Plugin UI Extension System — Allow Plugins to Contribute Native Pages | 7 | 3 | [Link](https://github.com/openclaw/openclaw/issues/66944) |
| 43367 | Multi-agent orchestration unstable: concurrent agents add/config overwrites | 7 | 0 | [Link](https://github.com/openclaw/openclaw/issues/43367) |
| 49157 | Session write locks leak causing >30min deadlocks | 7 | 0 | [Link](https://github.com/openclaw/openclaw/issues/49157) |
| 75137 | TUI process consumes 89-99% CPU at idle (busy-loop) | 6 | 1 | [Link](https://github.com/openclaw/openclaw/issues/75137) |

**Analysis:**
- **Gateway stability dominates**: Three of the top four issues relate to gateway degradation, leaks, and resource consumption
- **Slack integration concerns**: Silent connection loss is a high-impact reliability issue
- **Memory search demand**: Recursive subdirectory support (#34400) has been open since March, indicating unmet user need
- **Plugin ecosystem growth**: Multiple issues (#71736, #66944) request better plugin extensibility for Control UI

---

## 5. Bugs & Stability

### Critical/High Severity Bugs

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **Critical** | [#50642](https://github.com/openclaw/openclaw/issues/50642) | macOS node auto-trusts first TLS certificate, accepts rogue gateway control (CVSS 9.0) | No |
| **Critical** | [#50630](https://github.com/openclaw/openclaw/issues/50630) | Tailscale serve + auth.mode=none exposes gateway to full Tailnet without auth (CVSS 9.3) | No |
| **High** | [#73323](https://github.com/openclaw/openclaw/issues/73323) | Gateway runtime degradation: 60s pricing timeouts, Telegram polling stalls, RPC slowdowns | No |
| **High** | [#73655](https://github.com/openclaw/openclaw/issues/73655) | Gateway leak triad on plugin restart (EADDRINUSE, signal accumulation, sync I/O) | No |
| **High** | [#75137](https://github.com/openclaw/openclaw/issues/75137) | TUI 89-99% CPU busy-loop at idle | No |
| **High** | [#75707](https://github.com/openclaw/openclaw/issues/75707) | Gateway CPU pinned at 100% (root causes identified) | No |
| **High** | [#73874](https://github.com/openclaw/openclaw/issues/73874) | Gateway HTTP/WS dispatch deadlock on Windows + Docker | No |
| **Medium** | [#72808](https://github.com/openclaw/openclaw/issues/72808) | Slack silently lost connection | No |
| **Medium** | [#72808](https://github.com/openclaw/openclaw/issues/72808) | Telegram polling stalls causing silent outbound message loss | No |
| **Medium** | [#74907](https://github.com/openclaw/openclaw/issues/74907) | Multi-tool turn replay produces orphan tool_use blocks (v2026.4.x regression) | No |

**Notable Regression:**
- Issue [#74907](https://github.com/openclaw/openclaw/issues/74907): Multi-tool turn replay regression in v2026.4.x causes 400 errors from Anthropic on long-running sessions

**Stability Pattern:**
Multiple issues point to **resource leaks** (memory, file locks, signal handlers) in long-running gateway processes, suggesting a need for systematic leak detection and prevention.

---

## 6. Feature Requests & Roadmap Signals

### High-Engagement Feature Requests

| # | Title | Comments | Reactions | Likelihood of Inclusion |
|---|-------|----------|-----------|------------------------|
| [#34400](https://github.com/openclaw/openclaw/issues/34400) | memory_search recursive subdirectory support | 10 | 0 | High — clear user need, longstanding |
| [#66944](https://github.com/openclaw/openclaw/issues/66944) | Plugin UI Extension System (native tabs in Control UI) | 7 | 3 | High — aligns with plugin ecosystem goals |
| [#71736](https://github.com/openclaw/openclaw/issues/71736) | Control UI plugin contribution slots | 8 | 0 | High — SDK surface proposal |
| [#50199](https://github.com/openclaw/openclaw/issues/50199) | Skill Priority Configuration | 7 | 0 | Medium — overlapping skills need resolution |
| [#50404](https://github.com/openclaw/openclaw/issues/50404) | Session Sidebar with Chat History Management | 6 | 2 | Medium — Control UI UX improvement |
| [#50291](https://github.com/openclaw/openclaw/issues/50291) | Plugin Hooks: trace context (messageId, runId, parentSpanId) | 6 | 0 | High — observability gap |
| [#50739](https://github.com/openclaw/openclaw/issues/50739) | System event priority/bypass-queue mode | 6 | 1 | Medium — reliability enhancement |
| [#47597](https://github.com/openclaw/openclaw/issues/47597) | streamTo="parent" support for runtime="subagent" | 5 | 0 | Medium — feature parity request |
| [#47856](https://github.com/openclaw/openclaw/issues/47856) | Configurable mediaLocalRoots for image tool | 5 | 0 | Medium — flexibility enhancement |

**Roadmap Signals:**
1. **Plugin ecosystem expansion**: Multiple RFCs for plugin contribution slots and UI extensions suggest this is a strategic direction
2. **Observability improvements**: Trace context in hooks (#50291) addresses a known gap for distributed tracing
3. **Memory system maturation**: Recursive search and nested file support indicate evolving memory architecture

---

## 7. User Feedback Summary

### Pain Points

| Category | Issue Count | Key Feedback |
|----------|-------------|--------------|
| **Gateway Stability** | 8+ | Users report chronic degradation over hours/days; timeouts, stalls, deadlocks |
| **Multi-Agent Reliability** | 4+ | Concurrent operations cause config overwrites, session-lock failures, detached child work |
| **Channel Integration** | 6+ | Slack silent drops, Telegram polling stalls, WhatsApp raw tool syntax display |
| **Session Management** | 4+ | Cleanup falsely prunes sessions, write locks leak, subagent sessions persist |
| **Windows/Docker** | 3+ | Specific issues on Windows 11, Docker Desktop with bind mounts |

### Positive Feedback Signals
- Issue [#66944](https://github.com/openclaw/openclaw/issues/66944) (Plugin UI Extension) received 3 👍, indicating strong interest in extensibility
- Session Sidebar request (#50404) has 2 👍, showing demand for better UX
- Active-memory reliability suggestion (#72015) received 2 👍, suggesting users value the feature but need stability

### Dissatisfaction Themes
1. **Silent failures**: Slack connection loss, Telegram message loss without error indication
2. **Regression patterns**: Issues introduced in v2026.4.x that worked in 2026.3.x
3. **Debugging difficulty**: Long diagnostic times, unclear error messages

---

## 8. Backlog Watch

### Long-Unanswered Important Issues

| # | Age | Title | Priority | Status |
|---|-----|-------|----------|--------|
| [#34400](https://github.com/openclaw/openclaw/issues/34400) | ~2 months | memory_search recursive subdirectory support | Feature | Open |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | ~7 weeks | Multi-agent orchestration unstable | Bug | Open |
| [#49157](https://github.com/openclaw/openclaw/issues/49157) | ~7 weeks | Session write locks leak causing deadlocks | Bug | Open |
| [#50248](https://github.com/openclaw/openclaw/issues/50248) | ~6 weeks | sessions cleanup --fix-missing prunes fresh cron sessions | Bug | Open |
| [#50291](https://github.com/openclaw/openclaw/issues/50291) | ~6 weeks | Plugin Hooks missing

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant & Agent Open-Source Ecosystem

## 1. Ecosystem Overview

The personal AI assistant and agent open-source ecosystem is experiencing **high development velocity** across its major projects, with 8 of 13 tracked repositories showing activity in the past 24 hours. OpenClaw maintains its position as the reference implementation with the largest community footprint (500+ issues/PRs updated daily), while specialized forks like NanoClaw, PicoClaw, and Zeroclaw are carving distinct niches through targeted feature development. The ecosystem reveals three converging trends: **multi-channel integration** (Telegram, Discord, Slack, WhatsApp, Feishu), **provider diversification** (DeepSeek, Gemini, NVIDIA, Azure, local Ollama), and **security hardening** (session isolation, skills whitelisting, OAuth token management). However, stability remains a concern—multiple projects report critical bugs around gateway reliability, memory leaks, and session management, suggesting the architecture is still maturing under production load.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Releases (24h) | Merged PRs | Open PRs | Health Score |
|---------|---------------------|-------------------|----------------|------------|----------|--------------|
| **OpenClaw** | 500 (467 open / 33 closed) | 500 (465 open / 35 merged) | None | 35 | 465 | 🟢 High |
| **IronClaw** | 29 (22 open / 7 closed) | 50 (31 open / 19 merged) | None | 19 | 31 | 🟢 High |
| **Zeroclaw** | 50 (37 open / 13 closed) | 50 (45 open / 5 merged) | **v0.7.4** | 5 | 45 | 🟢 High |
| **NemoClaw** | 50 (38 open / 12 closed) | 50 (42 open / 8 merged) | None | 8 | 42 | 🟡 Medium-High |
| **NanoBot** | 11 (2 open / 9 closed) | 31 (7 open / 24 merged) | None | 24 | 7 | 🟢 High |
| **NanoClaw** | 10 (6 open / 4 closed) | 28 (12 open / 16 merged) | None | 16 | 12 | 🟢 High |
| **PicoClaw** | 11 (10 open / 1 closed) | 24 (11 open / 13 merged) | Nightly build | 13 | 11 | 🟡 Medium-High |
| **Moltis** | 6 (1 open / 5 closed) | 11 (2 open / 9 merged) | None | 9 | 2 | 🟢 High |
| **CoPaw** | 7 (7 open / 0 closed) | 4 (3 open / 1 merged) | None | 1 | 3 | 🟡 Medium |
| **LobsterAI** | 0 | 6 (6 open / 0 merged) | None | 0 | 6 | 🔴 Low |
| **TinyClaw** | 0 | 0 | None | 0 | 0 | ⚫ Inactive |
| **ZeptoClaw** | 0 | 0 | None | 0 | 0 | ⚫ Inactive |
| **EasyClaw** | 0 | 0 | None | 0 | 0 | ⚫ Inactive |

**Health Score Methodology**: Combines PR merge rate, issue resolution velocity, release cadence, and absence of critical unaddressed bugs. Projects with >15 merged PRs in 24h and no critical bugs score 🟢. Projects with stalled PRs or critical bugs score 🟡 or 🔴.

---

## 3. OpenClaw's Position

### Advantages vs. Peers

| Dimension | OpenClaw | Peer Average |
|-----------|----------|--------------|
| **Community Size** | 500 issues/PRs daily | ~30 issues/PRs daily |
| **Plugin Ecosystem** | 35+ merged PRs, active plugin UI extension RFCs | Limited (NanoBot, PicoClaw have basic plugin hooks) |
| **Multi-Channel Coverage** | 15+ channels (Telegram, Discord, Slack, WhatsApp, Feishu, Mattermost, etc.) | 3-6 channels typical |
| **Security Hardening** | TLS cert trust, Tailscale auth bypass, Control UI auth hardening | Basic; LobsterAI has skills whitelisting |
| **Memory Architecture** | Recursive search, nested file decay, dreaming blocks | NanoBot has basic memory; others minimal |

### Technical Approach Differences

OpenClaw operates as the **core reference implementation**, with other projects (NanoClaw, PicoClaw, Zeroclaw, IronClaw, NemoClaw) serving as specialized forks or downstream adopters. Key architectural differentiators:

- **Gateway-Centric Design**: OpenClaw's monolithic gateway handles routing, session management, and tool orchestration. NanoClaw and PicoClaw follow similar patterns but with simplified architectures.
- **Plugin System**: OpenClaw's RFC for Plugin UI Extension System (#66944) and Control UI contribution slots (#71736) indicate a mature, extensible plugin model. NanoBot's HookCenter typed-event system (#3564) is a comparable but simpler approach.
- **Multi-Agent Orchestration**: OpenClaw acknowledges instability in concurrent agent operations (#43367), while NanoClaw is actively designing multi-agent UX flows (#5890). This remains an unsolved challenge across the ecosystem.

### Community Size Comparison

OpenClaw's activity is **10-50x higher** than peer projects, with 500 issues/PRs updated daily versus 10-50 for active peers. This reflects its role as the upstream reference and the largest community. However, high activity does not guarantee stability—OpenClaw also carries the highest bug volume (8+ critical bugs reported today).

---

## 4. Shared Technical Focus Areas

The following requirements are emerging across multiple projects, indicating ecosystem-wide needs:

### 4.1 Multi-Channel Reliability

| Project | Specific Need |
|---------|---------------|
| **OpenClaw** | Slack silent connection loss (#72808), Telegram polling stalls (#73323) |
| **NanoBot** | Matrix auth error spam (#1851), Matrix reads old messages on startup (#3553) |
| **PicoClaw** | Telegram markdown table rendering (#2739), Android data access (#2744) |
| **NemoClaw** | Messaging bridge stop command missing (#1825, #2097) |
| **Moltis** | Telegram send_document panic (#947), Discord slash command args (#948) |

**Cross-Project Pattern**: All projects with multi-channel deployments report channel-specific reliability issues, particularly around authentication, message ordering, and connection state management.

### 4.2 Provider Diversification & Fallback

| Project | Provider Focus |
|---------|---------------|
| **OpenClaw** | MiniMax TTS, DeepSeek, OpenAI-compatible streams |
| **NanoBot** | DeepSeek reasoning_content, Anthropic auto-fallback, Xiaomi models |
| **PicoClaw** | NVIDIA, Azure AI Foundry, DeepSeek proxy detection |
| **IronClaw** | GLM-5, DeepSeek, OpenAI o-series, Qwen reasoning traces |
| **NemoClaw** | NVIDIA Endpoints, DeepSeek V4 Pro, model deprecations |
| **CoPaw** | Volcengine provider, Ollama context loss |

**Cross-Project Pattern**: Every project is expanding provider support, with DeepSeek being the most frequently added provider in the past 30 days. Local model support (Ollama, LM Studio) is a secondary but growing focus.

### 4.3 Security Hardening

| Project | Security Focus |
|---------|---------------|
| **OpenClaw** | TLS cert trust, Tailscale auth bypass, Control UI auth hardening |
| **PicoClaw** | Session-level workspace isolation, skills whitelisting, multi-user isolation |
| **NanoClaw** | OAuth credential proxy with auto-refresh (#1076) |
| **Zeroclaw** | Config backup safety, gateway silent-fallback hardening |
| **NemoClaw** | SSRF validation hardening (#2414) |

**Cross-Project Pattern**: Security is a top-three priority across all active projects. Session isolation, OAuth token management, and skills/tools whitelisting are the most common hardening targets.

### 4.4 Session & Memory Management

| Project | Memory/Session Need |
|---------|---------------------|
| **OpenClaw** | Session write locks leak (#49157), memory search recursive subdirectory (#34400) |
| **NanoClaw** | Session messages persistence (#2334), interrupted-run detection (#2173) |
| **NanoBot** | Session-level focus tool (#3292), sender_id to LLM context (#3549) |
| **CoPaw** | Enhanced memory management and recall (#3995) |
| **IronClaw** | Reborn memory subsystem (libSQL, Postgres repositories) |

**Cross-Project Pattern**: Session continuity and memory persistence are critical gaps. Projects are moving from ephemeral to durable session management, with IronClaw's reborn-memory being the most architecturally advanced approach.

### 4.5 CLI & Developer Experience

| Project | DX Focus |
|---------|----------|
| **NemoClaw** | oclif CLI migration (sandbox inspection, maintenance, skill install) |
| **Zeroclaw** | Web onboarding parity via CRUD endpoints (#6179) |
| **OpenClaw** | TUI CPU busy-loop (#75137), hands-free exec preset (#67405) |
| **NanoClaw** | Pre-commit hook optimization (#2171) |

**Cross-Project Pattern**: CLI modernization and developer tooling are active workstreams, with oclif adoption in NemoClaw potentially serving as a reference for others.

---

## 5. Differentiation Analysis

### Feature Focus Differentiation

| Project | Primary Focus | Secondary Focus |
|---------|---------------|-----------------|
| **OpenClaw** | Core reference, plugin ecosystem, multi-channel | Security, memory architecture |
| **IronClaw** | Reborn architecture, legal harness (DOCX, RAG) | Trust-aware capability dispatch |
| **Zeroclaw** | Schema v3 migration, multi-agent UX | Skills whitelisting, cron automation |
| **NanoBot** | Provider compatibility, streaming stability | HookCenter plugin system |
| **NanoClaw** | OpenCode provider stability, V1→V2 migration | Interrupted-run observability |
| **PicoClaw** | Security hardening, multi-user isolation | K3s deployment, embedded/IoT tools |
| **NemoClaw** | CLI oclif migration, NVIDIA ecosystem | Hermes agent integration |
| **Moltis** | Bug fixing velocity, i18n (zh-TW) | Portable data import/export |
| **CoPaw** | Multi-channel (DingTalk, Feishu), cron automation | Local Ollama support |

### Target User Differentiation

| Project | Target Users |
|---------|--------------|
| **OpenClaw** | Power users, developers, enterprises requiring plugin extensibility |
| **IronClaw** | Legal professionals, enterprise users requiring obligation tracking |
| **Zeroclaw** | Developers seeking schema-driven configuration |
| **NanoBot** | Researchers, developers prioritizing provider flexibility |
| **NanoClaw** | Developers using OpenCode provider, local model setups |
| **PicoClaw** | Security-conscious deployments, embedded/IoT use cases |
| **NemoClaw** | NVIDIA hardware users, GPU-accelerated inference |
| **Moltis** | General users, i18n-focused communities |
| **CoPaw** | Chinese market users (DingTalk, Feishu integration) |

### Technical Architecture Differentiation

| Project | Architecture Style | Notable Choices |
|---------|-------------------|-----------------|
| **OpenClaw** | Monolithic gateway | Plugin UI extensions, multi-agent orchestration |
| **IronClaw** | Modular with reborn runtime | Native libSQL/Postgres memory, trust-aware dispatch |
| **Zeroclaw** | Schema-driven | Schema v3 migrations, traits-based config |
| **NanoBot** | Lightweight agent | HookCenter typed events, NapCatQQ channel |
| **NanoClaw** | OpenCode-centric | Process group management, session isolation |
| **PicoClaw** | Security-first | Session workspace isolation, skills whitelisting |
| **NemoClaw** | CLI-centric | oclif framework, NVIDIA Endpoints integration |
| **Moltis** | Bug-fix focused | Rapid iteration on regressions |

---

## 6. Community Momentum & Maturity

### Activity Tiers

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapid Iteration** | OpenClaw, IronClaw, Zeroclaw, NemoClaw | >40 PRs updated daily, multiple releases per month, active RFC processes |
| **Steady Development** | NanoBot, NanoClaw, PicoClaw, Moltis | 10-30 PRs updated daily, regular merges, stable release cadence |
| **Low Activity** | CoPaw, LobsterAI | <10 PRs updated daily, stalled PRs, limited community engagement |
| **Inactive** | TinyClaw, ZeptoClaw, EasyClaw | No activity in 30+ days |

### Rapidly Iterating Projects

| Project | Velocity Signals | Maturity Indicators |
|---------|------------------|---------------------|
| **OpenClaw** | 35 PRs merged today, 500 daily updates | 8+ years, large community, RFC process established |
| **IronClaw** | 19 PRs merged today, Reborn epic in progress | ~2 years, active re-architecture |
| **Zeroclaw** | v0.7.4 released today, schema v3 migration | ~1.5 years, breaking changes in progress |
| **NemoClaw** | 8 PRs merged today, CLI migration ongoing | ~1 year, NVIDIA-backed |

### Stabilizing Projects

| Project | Signals | Notes |
|---------|---------|-------|
| **Moltis** | All recent bugs fixed, 9 PRs merged, 0 open bugs | Bug-fixing phase, preparing for feature push |
| **NanoClaw** | OpenCode provider stabilized, V1→V2 migration planned | Moving from stabilization to feature expansion |

### Struggling Projects

| Project | Issues | Recommendations |
|---------|--------|-----------------|
| **LobsterAI** | 6 stale PRs, 0 merges in 30+ days | Maintainer attention needed; consider archiving or recruiting new maintainers |
| **CoPaw** | 7 open bugs, 1 PR merged in 24h | Prioritize critical bugs (#3992, #399

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-02

## 1. Today's Overview

NanoBot continues to demonstrate high development velocity with 31 PRs updated and 11 issues addressed in the last 24 hours. The project shows strong momentum in bug fixes, particularly around streaming APIs, channel integrations (Matrix, Feishu, QQ), and provider compatibility (DeepSeek, Anthropic). No new releases were published today, but the merge rate (24 PRs closed/merged) indicates active stabilization. The community is actively requesting multi-agent routing capabilities and improved session persistence, signaling a maturing platform moving beyond basic chatbot functionality.

## 2. Releases

**No new releases today.** The project last published versions prior to this reporting period.

---

## 3. Project Progress

### Merged/Closed PRs (24 total)

| PR | Author | Summary | Status |
|----|--------|---------|--------|
| [#3549](https://github.com/HKUDS/nanobot/pull/3549) | @yorkhellen | Add `sender_id` to LLM runtime context for user-aware responses (closes #3511) | ✅ Closed |
| [#3582](https://github.com/HKUDS/nanobot/pull/3582) | @yorkhellen | Restore tiktoken fallback in `estimate_prompt_tokens_chain` (closes #3581) | ✅ Closed |
| [#3579](https://github.com/HKUDS/nanobot/pull/3579) | @coldxiangyu163 | Auto-fallback to stream on long-request error for Anthropic (closes #2709) | ✅ Closed |
| [#3578](https://github.com/HKUDS/nanobot/pull/3578) | @coldxiangyu163 | Stop Matrix sync loop on irrecoverable auth errors (closes #1851) | ✅ Closed |
| [#3577](https://github.com/HKUDS/nanobot/pull/3577) | @hongshunanhai | Strip partial think tags in streaming output | ✅ Closed |
| [#3560](https://github.com/HKUDS/nanobot/pull/3560) | @JiajunBernoulli | Adjust DeepSeek reasoning mode check condition (fixes #3554) | ✅ Closed |
| [#3561](https://github.com/HKUDS/nanobot/pull/3561) | @tongtianli03-code | Add `origin_message_id` support and outbound deduplication | ✅ Closed |
| [#3555](https://github.com/HKUDS/nanobot/pull/3555) | @boogieLing | Fix API stream lifecycle for tool-backed requests (closes #3551) | ✅ Closed |
| [#3528](https://github.com/HKUDS/nanobot/pull/3528) | @XJPeng12 | Sanitize URL in WebFetchTool to strip markdown formatting | ✅ Closed |
| [#3114](https://github.com/HKUDS/nanobot/pull/3114) | @morandot | Add LongCat as OpenAI-compatible provider | ✅ Closed |
| [#2334](https://github.com/HKUDS/nanobot/pull/2334) | @LZDQ | Make session messages persistence more frequent (per-iteration) | ✅ Closed |
| [#2337](https://github.com/HKUDS/nanobot/pull/2337) | @LZDQ | Add NapCatQQ channel with group chat and images support | ✅ Closed |
| [#2379](https://github.com/HKUDS/nanobot/pull/2379) | @LZDQ | Add NapCat QQ channel (synthesized from #2016) | ✅ Closed |

**Key Themes:**
- **Stability fixes**: Multiple PRs addressing streaming edge cases, token estimation crashes, and auth error handling
- **Channel expansion**: NapCatQQ integration for QQ platform users
- **User context**: Sender identity propagation to LLM for multi-user environments
- **Provider diversity**: LongCat OpenAI-compatible backend support

---

## 4. Community Hot Topics

### Most Active Issues

| Issue | Title | Author | Comments | 👍 | Status |
|-------|-------|--------|----------|-----|--------|
| [#2072](https://github.com/HKUDS/nanobot/issues/2072) | Feature Request: Native Multi-Agent Routing | @WoodyWangHou | 8 | 1 | Closed |
| [#3292](https://github.com/HKUDS/nanobot/issues/3292) | Session-Level Focus Tool: Persistent Task Awareness | @piliplaker | 4 | 0 | Open |
| [#3518](https://github.com/HKUDS/nanobot/issues/3518) | Please support Xiaomi's models | @js110 | 3 | 0 | Closed |
| [#1851](https://github.com/HKUDS/nanobot/issues/1851) | Matrix: auth error spams the server | @smurfix | 3 | 0 | Closed |
| [#3553](https://github.com/HKUDS/nanobot/issues/3553) | Matrix channel reads old messages on startup | @escoand | 2 | 0 | Closed |

### Most Active PRs

| PR | Title | Author | Status |
|----|-------|--------|--------|
| [#3492](https://github.com/HKUDS/nanobot/pull/3492) | Security: Harden public-deploy footguns on WebUI | @mohamed-elkholy95 | Open |
| [#3583](https://github.com/HKUDS/nanobot/pull/3583) | Improve beta WebUI turn completion and chat isolation | @ramonpaolo | Open |
| [#3564](https://github.com/HKUDS/nanobot/pull/3564) | HookCenter typed-event hook system with plugin support | @aiguozhi123456 | Open |
| [#3358](https://github.com/HKUDS/nanobot/pull/3358) | Add model presets for quick model switching | @chengyongru | Open |

### Analysis

**Multi-Agent Routing** (#2072, 8 comments) is the most discussed topic, with users requesting native support comparable to OpenClaw's approach. Currently, users must manually spin up multiple gateway instances—a workaround that highlights demand for first-class multi-agent orchestration.

**Session-Level Focus Tool** (#3292, 4 comments) addresses a fundamental agent limitation: inability to maintain task context across interruptions. This aligns with emerging research on "task anchoring" in LLM agents.

**Xiaomi Model Support** (#3518) indicates growing demand for Chinese AI provider integration beyond existing options.

---

## 5. Bugs & Stability

### Reported Bugs (Ranked by Impact)

| Severity | Issue | Description | Fix PR | Status |
|----------|-------|-------------|--------|--------|
| 🔴 High | [#3584](https://github.com/HKUDS/nanobot/issues/3584) | DeepSeek API 'reasoning_content' error — strict validation failure | — | Open |
| 🔴 High | [#2709](https://github.com/HKUDS/nanobot/issues/2709) | Streaming required error for long Anthropic requests | [#3579](https://github.com/HKUDS/nanobot/pull/3579) | Fixed |
| 🟠 Medium | [#1851](https://github.com/HKUDS/nanobot/issues/1851) | Matrix auth errors spam homeserver indefinitely | [#3578](https://github.com/HKUDS/nanobot/pull/3578) | Fixed |
| 🟠 Medium | [#3553](https://github.com/HKUDS/nanobot/issues/3553) | Matrix reads old messages on startup/restart | — | Closed |
| 🟠 Medium | [#3581](https://github.com/HKUDS/nanobot/issues/3581) | NameError in tiktoken fallback | [#3582](https://github.com/HKUDS/nanobot/pull/3582) | Fixed |
| 🟠 Medium | [#3551](https://github.com/HKUDS/nanobot/issues/3551) | OpenAI streaming closes early for tool-backed requests | [#3555](https://github.com/HKUDS/nanobot/pull/3555) | Fixed |
| 🟡 Low | [#3571](https://github.com/HKUDS/nanobot/issues/3571) | ReadFileTool reports "unchanged" across sessions | — | Closed |
| 🟡 Low | [#3511](https://github.com/HKUDS/nanobot/issues/3511) | sender_id not passed to LLM context | [#3549](https://github.com/HKUDS/nanobot/pull/3549) | Fixed |

### Notable Fixes Merged Today

- **Anthropic Long-Request Auto-Fallback** (#3579): Automatically enables streaming when Anthropic SDK raises "Streaming is required for operations that may take longer than 10 minutes"
- **Matrix Auth Loop** (#3578): Stops sync loop on fatal auth errors (M_UNKNOWN_TOKEN), preventing homeserver spam
- **Tiktoken Fallback** (#3582): Resolves NameError when provider token counter is unavailable
- **Streaming Partial Tags** (#3577): Prevents incomplete `# Zeroclaw Project Digest — 2026-05-02

## 1. Today's Overview

Zeroclaw demonstrates high activity on 2026-05-02, with 50 issues and 50 PRs updated in the last 24 hours. The project released **v0.7.4**, a patch delivering a Matrix rewrite, Fluent i18n pipeline, and CLI/TUI onboarding overhaul. Community engagement remains robust with 5 PRs merged/closed and 45 PRs still under review. Critical bugs around shell sandbox configuration and provider fallback resolution are actively being addressed, while schema v3 migration work advances toward the v0.8.0 release.

---

## 2. Releases

### v0.7.4 — Released Today
**Changelog (v0.7.3 → v0.7.4)**

This is the first patch release on the v0.7.x workspace foundation, delivering four major improvements:

| Component | Change |
|-----------|--------|
| **Matrix Protocol** | Clean-room rewrite of Matrix integration |
| **Internationalization** | Mozilla Fluent i18n pipeline with multi-locale documentation support |
| **Onboarding** | Ground-up rewrite of CLI/TUI onboarding flow |
| **Channels** | WeChat iLink Bot channel recovery |

> **Note:** The changelog entry appears truncated ("Around 1") in the source data; the full changelog may contain additional items.

**Upgrade Path:** Standard patch upgrade from v0.7.3. No migration flags reported.

---

## 3. Project Progress

### Merged/Closed PRs (5 total)

| PR | Title | Impact |
|----|-------|--------|
| [#6179](https://github.com/zeroclaw-labs/zeroclaw/pull/6179) | feat(gateway,web,cli): web onboarding parity via per-property CRUD endpoints | **High** — Enables full browser-based onboarding; adds `/api/config/*` CRUD surface |
| [#6262](https://github.com/zeroclaw-labs/zeroclaw/pull/6262) | chore(ci): test | CI maintenance |
| [#6164](https://github.com/zeroclaw-labs/zeroclaw/pull/6164) | feat(cron): manually trigger cron from webui | **Medium** — New `POST /api/cron/{id}/run` endpoint for manual cron execution |
| [#6264](https://github.com/zeroclaw-labs/zeroclaw/pull/6264) | fix(compatible): preserve tool_call extra_content for Gemini thoughtSignature | **Medium** — Fixes vendor extension blob survival in round-trips |
| [#5416](https://github.com/zeroclaw-labs/zeroclaw/pull/5416) | Add Codex runner (parity with claude code) | **Medium** — New `codex_runner` tool for Codex CLI integration |

### Key Open PRs Under Review

| PR | Title | Risk/Size | Status |
|----|-------|-----------|--------|
| [#6167](https://github.com/zeroclaw-labs/zeroclaw/pull/6167) | fix(channels/acp): implement ACP protocol v1 with tool-call permission | **XL / High** | Ready for review |
| [#6009](https://github.com/zeroclaw-labs/zeroclaw/pull/6009) | feat(obs): enrich OTel tool spans with gen_ai.tool.* semantic convention attrs | M / Medium | Open |
| [#6159](https://github.com/zeroclaw-labs/zeroclaw/pull/6159) | fix(gateway): record cost and token usage on every gateway turn | M / Medium, P1 | Needs author action |
| [#6092](https://github.com/zeroclaw-labs/zeroclaw/pull/6092) | fix(providers): read api_key, base_url, and name from config for fallback providers | XS / Medium | In progress |
| [#6266](https://github.com/zeroclaw-labs/zeroclaw/pull/6266) | Feat/v2 to v3 | Large | Intentionally blank (do not review) |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| # | Title | Comments | Priority | Theme |
|---|-------|----------|----------|-------|
| [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) | [Bug]: default_model issue on fresh install | **15** | P1 | **Onboarding failure** — Fresh LXC installs cannot run `zeroclaw agent` due to default_model configuration |
| [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) | [Bug]: zeroclaw does not know it can add cron | **8** | S3 | **Capability discovery** — Agent unaware it can use `zeroclaw cron` command |
| [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) | [Feature]: A better LOGO of Zeroclaw | **8** | P2 | **Branding** — Community requests visual identity refresh |
| [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) | RFC: Multi-agent UX flow — design | **7** | Accepted | **Architecture** — RFC discussion concluded; awaiting proposal extraction to docs |
| [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) | [Feature]: schema v3 — batch breaking field migrations | **6** | In progress | **Migration** — Merge blocker for v0.8.0; all checklist items must complete |
| [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) | Default shell sandbox blocks Python skill patterns | **6** | P1, High | **Runtime** — Shell sandbox too restrictive for realistic Python development |
| [#5720](https://github.com/zeroclaw-labs/zeroclaw/issues/5720) | PYTHONPATH=val command inline env var prefix broken | **6** | P1 | **Runtime** — Inline environment variable syntax broken in shell tool |

### Underlying Needs Analysis

1. **Onboarding Reliability**: Issue #6123 (15 comments) reveals systemic onboarding failures when users configure remote providers (e.g., Ollama on separate LXC). The community needs clearer provider configuration guidance and robust default_model fallback.

2. **Schema v3 Migration Blocking**: #5947 is explicitly marked as a merge blocker for v0.8.0. The batch breaking change requires coordinated effort across multiple teams.

3. **Multi-Agent Architecture**: RFC #5890 has completed its 7-day discussion and core team vote. The next step (extracting to `docs/proposals/multi-agent-ux-flow.md`) signals a significant UX direction change.

---

## 5. Bugs & Stability

### Critical Bugs (P0/P1)

| # | Title | Severity | Risk | Status | Fix PR |
|---|-------|----------|------|--------|--------|
| [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) | Default shell sandbox blocks Python skills | P1 | **High** | In progress | — |
| [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) | default_model issue on fresh install | P1 | Workflow blocked | Open | — |
| [#6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001) | gateway-chat succeeds but /api/cost stays zero | P1 | Observability | Open | [#6159](https://github.com/zeroclaw-labs/zeroclaw/pull/6159) |
| [#5835](https://github.com/zeroclaw-labs/zeroclaw/issues/5835) | cancel_tokens entries not evicted for abandoned sessions | P1 | High | Closed | Merged |
| [#6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096) | install.sh does not extract web dashboard | P1 | S2 degraded | Open | — |
| [#6210](https://github.com/zeroclaw-labs/zeroclaw/issues/6210) | SkillForge emits non-schema fields in [skill] block | P1 | Blocked | Blocked | — |
| [#6132](https://github.com/zeroclaw-labs/zeroclaw/issues/6132) | Extend manifest prompt audit to scan [skill].prompts | P1 | Security | Blocked | — |
| [#6127](https://github.com/zeroclaw-labs/zeroclaw/issues/6127) | gateway silent-fallback hardening follow-up | P1 | Security | Open | [#6215](https://github.com/zeroclaw-labs/zeroclaw/pull/6215) |

### Notable Bug Fixes Merged

- **#5835**: Evicted cancel_tokens entries for abandoned sessions — prevents memory leaks in long-running gateway processes.

### Stability Concerns

1. **Shell Sandbox Over-Restriction**: #5722 reports that default sandbox configuration blocks "all realistic Python skill patterns," impacting skill developers (e.g., InvestorClaw portfolio analysis skill).

2. **Cost Tracking Broken**: #6001 + #6159 address gateway-chat success but zero cost reporting, affecting observability and billing.

3. **WASM Plugin Path Divergence**: #6254 reports install path (`~/.zeroclaw/workspace/plugins/`) differs from runtime scan path (`~/.zeroclaw/plugins/`), causing plugins to be invisible.

---

## 6. Feature Requests & Roadmap Signals

### High-Interest Feature Requests

| # | Title | Votes | Priority | Likelihood for v0.8 |
|---|-------|-------|----------|---------------------|
| [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) | RFC: Multi-agent UX flow | 0 (+7 comments) | Accepted | **High** — RFC vote passed |
| [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) | schema v3 — batch breaking migrations | 0 (+6 comments) | In progress | **Confirmed** — v0.8.0 blocker |
| [#6175](https://github.com/zeroclaw-labs/zeroclaw/issues/6175) | Web onboarding parity with CLI | 0 (+1 comment) | P1 | **High** — PR #6179 merged |
| [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) | Installing skills from .well-known URI | 0 (+2 comments) | P2 | **Medium** — Standards alignment |
| [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) | Better logo design | 2 👍 | P2 | **Low** — Cosmetic |
| [#6260](https://github.com/zeroclaw-labs/zeroclaw/issues/6260) | Configurable LM Studio server URL | 0 (+1 comment) | Open | **Medium** — New contributor |

### Roadmap Signals

1. **v0.8.0 Incoming**: Schema v3 migration (#5947) is explicitly blocking the v0.8.0 branch (`upstream/integration/v0.8.0`). Expect breaking changes to config shape.

2. **Multi-Agent Support**: RFC #5890 approval signals upcoming architectural changes to support multiple concurrent agents.

3. **Web UI Parity**: #6175/#6179 delivered CRUD endpoints for full browser-based onboarding, reducing CLI dependency.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Impact |
|-------|----------|--------|
| **Onboarding failures with remote providers** | #6123 (15 comments) — Fresh install + remote Ollama = broken default_model | Blocks new user adoption |
| **Shell sandbox too restrictive** | #5722 — Blocks Python skill development | Hinders ecosystem growth |
| **Cost/usage tracking broken** | #6001 — gateway-chat succeeds but no cost recorded | Breaks observability |
| **Dashboard bugs** | #5244 — Channels tab crash, Overview render error | Degraded UX |
| **Config self-test misleading** | #6051 — Reports localhost despite 0.0.0.0 config | Confuses debugging |
| **WASM plugin discovery broken** | #6254 — Install/scan paths diverge | Plugin ecosystem broken |

### Positive Signals

- **Cron manual trigger delivered**: #6164 merged, addressing #5501 request.
- **Codex runner parity**: #5416 adds Codex integration, matching Claude Code capabilities.
- **WhatsApp cron delivery**: #6261 adds WhatsApp to supported cron channels.
- **Web onboarding parity**: #6179 enables full browser-based setup.

---

## 8. Backlog Watch

### Long-Unanswered or Stalled Issues

| # | Title | Age | Status | Concern |
|---|-------|-----|--------|---------|
| [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) | Better logo | ~38 days | Accepted | Low priority; no timeline |
| [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) | Agent doesn't know it can add cron | ~14 days | Needs repro | S3 but indicates UX gap |
| [#5863](https://github.com/zeroclaw-labs/zeroclaw/issues/5863) | Document about skills wanted | ~14 days | Open | Documentation gap |
| [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) | Multi-agent UX RFC | ~13 days | Accepted, pending doc | Next step stalled |
| [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) | Schema v3 migrations | ~12 days | In progress | v0.8.0 blocker |
| [#6254](https://github.com/zeroclaw-labs/zeroclaw/issues/6254) | WASM plugin path divergence | 1 day | Open | New, needs triage |

### Issues Needing Maintainer Attention

1. **#6210** (SkillForge non-schema fields) — Blocked status; likely needs review to unblock skill ecosystem.

2. **#6132** (Prompt audit extension) — Blocked; security-sensitive follow-up to #5972.

3. **#5890** — RFC accepted but proposal not yet extracted to `docs/proposals/`.

4. **#6249** — CI cleanup step failed post-v0.7.4 release; PR #6265 filed to fix.

---

*Digest generated from Zeroclaw GitHub data (2026-05-02). All links point to https://github.com/zeroclaw-labs/zeroclaw.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-02

## 1. Today's Overview

PicoClaw shows high development velocity on 2026-05-02, with 24 PRs and 11 issues updated in the last 24 hours. The project released a new nightly build (v0.2.8-nightly.20260502.6e1fab80) and merged/closed 13 pull requests, indicating active integration of new features and fixes. Community engagement remains strong, with multiple bug reports surfacing around the recent v0.2.8 release, particularly related to image recognition, Android data access, and Telegram channel stability. The project continues to expand its provider ecosystem and security hardening, with significant contributions from a single prolific contributor (stevef1uk) driving major architectural improvements.

---

## 2. Releases

### New Release: Nightly Build v0.2.8-nightly.20260502.6e1fab80

- **Type:** Automated nightly build
- **Status:** Unstable — use with caution
- **Full Changelog:** https://github.com/sipeed/picoclaw/compare/v0.2.8...main

> **Note:** This is an automated build from the main branch following the v0.2.8 stable release. Users are advised to wait for a tagged stable release unless they need the latest fixes.

---

## 3. Project Progress

### Merged/Closed Pull Requests (13 total)

| PR | Author | Domain | Summary |
|----|--------|--------|---------|
| [#2739](https://github.com/sipeed/picoclaw/pull/2739) | @cjkihl | channel (Telegram) | Fix markdown pipe tables in Telegram by wrapping in fenced code blocks |
| [#2743](https://github.com/sipeed/picoclaw/pull/2743) | @cjkihl | provider | Detect DeepSeek models behind non-DeepSeek proxies (openai_compat) |
| [#2326](https://github.com/sipeed/picoclaw/pull/2326) | @stevef1uk | build, docker | Add K3s deployment manifests and specialized Dockerfiles |
| [#2325](https://github.com/sipeed/picoclaw/pull/2325) | @stevef1uk | agent, skill | Add Skills Whitelisting for enhanced agent security |
| [#2324](https://github.com/sipeed/picoclaw/pull/2324) | @stevef1uk | channel, config | Add asynchronous /chat HTTP endpoint for external integrations |
| [#2323](https://github.com/sipeed/picoclaw/pull/2323) | @stevef1uk | provider | Add NVIDIA and Azure AI providers |
| [#2322](https://github.com/sipeed/picoclaw/pull/2322) | @stevef1uk | agent, tool | Implement Session-Level Workspace Isolation and Security Hardening |
| [#2102](https://github.com/sipeed/picoclaw/pull/2102) | @stevef1uk | agent | Fix isolation hardening issues |
| [#2095](https://github.com/sipeed/picoclaw/pull/2095) | @stevef1uk | agent, tool | Multi-User Session Isolation |
| [#1991](https://github.com/sipeed/picoclaw/pull/1991) | @stevef1uk | agent | Make /chat API asynchronous |
| [#1963](https://github.com/sipeed/picoclaw/pull/1963) | @stevef1uk | provider, skill | Azure skills whitelisting |
| [#2313](https://github.com/sipeed/picoclaw/pull/2313) | @stevef1uk | agent, tool, config, build, docker | Multi-User Support, Security Hardening, Skills whitelisting |
| [#2327](https://github.com/sipeed/picoclaw/pull/2327) | @stevef1uk | agent, tool | Final Security Shield & Hardening Tidy-up |

**Key Themes:**
- **Security Hardening:** Multiple PRs from @stevef1uk consolidating session isolation, workspace isolation, and skills whitelisting
- **Provider Expansion:** Native support for NVIDIA and Azure AI Foundry
- **Infrastructure:** K3s Kubernetes manifests and Docker optimizations
- **Integration:** Asynchronous /chat HTTP endpoint for external systems (Teams bots, custom frontends)
- **Telegram Improvements:** Markdown table rendering fix

### Open Pull Requests (11 total)

Notable open PRs awaiting review:

| PR | Author | Domain | Summary |
|----|--------|--------|---------|
| [#2740](https://github.com/sipeed/picoclaw/pull/2740) | @cjkihl | provider | Fix DeepSeek reasoning_content capture from streaming |
| [#2662](https://github.com/sipeed/picoclaw/pull/2662) | @milseg | documentation | Unify vendors table in providers documentation |
| [#2655](https://github.com/sipeed/picoclaw/pull/2655) | @ZanzyTHEbar | agent, tool, ci, build, docker | Restore verified unified kernel baseline |
| [#2647](https://github.com/sipeed/picoclaw/pull/2647) | @yuxuan-7814 | tool, config | Enable web_search tool config YAML support, enable DuckDuckGo by default |
| [#2626](https://github.com/sipeed/picoclaw/pull/2626) | @webhtb | provider, agent | Support native audio input for multimodal LLMs |
| [#2270](https://github.com/sipeed/picoclaw/pull/2270) | @loafoe | config | Handle non-addressable SecureString values in collectSensitive |
| [#2128](https://github.com/sipeed/picoclaw/pull/2128) | @loafoe | tool | Ensure tool parameters have valid JSON Schema properties field |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

1. **#1757** — [BUG] Channel error when scheduling hourly tasks ([6 comments](https://github.com/sipeed/picoclaw/issues/1757))
   - **Author:** @dhensen | **Domain:** channel, cron
   - **Issue:** Agent scheduling recurring tasks results in channel errors on Telegram
   - **Underlying Need:** Reliable task scheduling and cron integration

2. **#2376** — [Feature] Option to disable 'Enter' key from sending messages ([4 comments](https://github.com/sipeed/picoclaw/issues/2376))
   - **Author:** @lukehackem | **Domain:** channel
   - **Issue:** Mobile users want Enter to create new lines, not send messages
   - **Underlying Need:** Better mobile UX and input flexibility

3. **#2651** — How to build on Windows? ([3 comments](https://github.com/sipeed/picoclaw/issues/2651))
   - **Author:** @lstarboy | **Domain:** build
   - **Issue:** Missing Windows build documentation
   - **Underlying Need:** Cross-platform accessibility

4. **#2602** — [BUG] OAuth Authentication Errors ([3 comments](https://github.com/sipeed/picoclaw/issues/2602))
   - **Author:** @TrudeEH | **Domain:** provider
   - **Issue:** OAuth fails for OpenAI and Antigravity providers
   - **Underlying Need:** Reliable authentication with OAuth-enabled providers

5. **#2404** — [Feature] Add config option for streaming HTTP requests ([3 comments](https://github.com/sipeed/picoclaw/issues/2404))
   - **Author:** @OuSatoru | **Domain:** provider, config
   - **Issue:** Request for streaming support similar to Python OpenAI client
   - **Underlying Need:** Real-time response streaming

### Hot PRs (by recent activity)

- **#2740** — DeepSeek reasoning_content streaming fix (open, updated 2026-05-02)
- **#2739** — Telegram markdown table fix (merged)
- **#2743** — DeepSeek proxy detection (merged)

---

## 5. Bugs & Stability

### Critical Bugs Reported (v0.2.8 Regressions)

| Priority | Issue | Author | Domain | Status | Fix PR |
|----------|-------|--------|--------|--------|--------|
| 🔴 High | [#2738](https://github.com/sipeed/picoclaw/issues/2738) — Image recognition broken in v0.2.8 | @axwfae | provider | Open | — |
| 🔴 High | [#2744](https://github.com/sipeed/picoclaw/issues/2744) — Android v0.2.8 cannot access data from tabs | @stl3 | channel, config | Open | — |
| 🔴 High | [#2742](https://github.com/sipeed/picoclaw/issues/2742) — Gateway starts with no channels in v0.2.8 | @keys4words | channel | Open | — |
| 🟡 Medium | [#1757](https://github.com/sipeed/picoclaw/issues/1757) — Channel error with hourly task scheduling | @dhensen | channel, cron | Open | — |
| 🟡 Medium | [#2602](https://github.com/sipeed/picoclaw/issues/2602) — OAuth authentication failures | @TrudeEH | provider | Open | — |
| 🟡 Medium | [#1533](https://github.com/sipeed/picoclaw/issues/1533) — Skill name conversion bug (hyphen→underscore) | @coolbiubiu | tool, skill | **Closed** | — |

**Assessment:** Three critical bugs are specific to v0.2.8, suggesting regressions introduced in the latest stable release. The nightly build may contain fixes not yet in stable. Image recognition and Android tab access issues are particularly impactful for user experience.

---

## 6. Feature Requests & Roadmap Signals

### Notable Feature Requests

| Request | Author | Domain | 👍 | Link | Likelihood of Near-Term Implementation |
|---------|--------|--------|-----|------|----------------------------------------|
| Streaming HTTP requests config | @OuSatoru | provider, config | 1 | [#2404](https://github.com/sipeed/picoclaw/issues/2404) | Medium — aligns with PR #2740 streaming work |
| GitHub Copilot provider support | @lstarboy | provider | 0 | [#2652](https://github.com/sipeed/picoclaw/issues/2652) | Low — requires significant API integration |
| Serial port (UART) tools | @SiYue-ZO | tool | 0 | [#2649](https://github.com/sipeed/picoclaw/issues/2649) | Medium — complements existing I2C/SPI tools |
| Native audio input for multimodal LLMs | @webhtb | provider, agent | 0 | [#2626](https://github.com/sipeed/picoclaw/pull/2626) | **High — PR #2626 open** |
| Mobile Enter key behavior toggle | @lukehackem | channel | 1 | [#2376](https://github.com/sipeed/picoclaw/issues/2376) | Medium — UX improvement |

**Roadmap Signals:**
- **Provider diversity** continues to be a priority (NVIDIA, Azure, GitHub Copilot requests)
- **Embedded/IoT focus** evident in UART tool requests (complements existing I2C/SPI)
- **Multimodal expansion** with audio input support in progress
- **Security-first architecture** being solidified through ongoing hardening PRs

---

## 7. User Feedback Summary

### Pain Points

1. **v0.2.8 Instability:** Multiple users reporting regressions in image recognition, Android tab access, and channel initialization after upgrading to v0.2.8. This suggests rushed release or insufficient regression testing.

2. **OAuth Authentication:** Users experiencing authorization failures with OpenAI and Antigravity providers, indicating potential API compatibility or configuration issues.

3. **Windows Build Barrier:** New users unable to build PicoClaw on Windows due to missing documentation, limiting adoption on the Windows platform.

4. **Mobile UX:** Android users frustrated by Enter key behavior, wanting standard text input conventions.

### Positive Feedback Signals

- **Security improvements** are being well-received through extensive hardening PRs
- **Provider expansion** (NVIDIA, Azure) addresses user demand for more model options
- **K3s deployment** support enables enterprise/production deployments

### Use Cases Observed

- **Embedded systems:** UART/I2C/SPI tool requests indicate strong IoT/embedded usage
- **Multi-channel deployment:** Telegram, Discord, HTTP integrations show diverse deployment scenarios
- **Multi-tenant environments:** Session isolation and skills whitelisting suggest enterprise adoption

---

## 8. Backlog Watch

### Long-Unanswered Important Issues Needing Maintainer Attention

| Issue | Author | Age | Domain | Summary | Priority |
|-------|--------|-----|--------|---------|----------|
| [#1757](https://github.com/sipeed/picoclaw/issues/1757) | @dhensen | ~45 days | channel, cron | Hourly task scheduling causes channel errors | 🔴 High |
| [#2376](https://github.com/sipeed/picoclaw/issues/2376) | @lukehackem | ~26 days | channel | Mobile Enter key UX issue | 🟡 Medium |
| [#2651](https://github.com/sipeed/picoclaw/issues/2651) | @lstarboy | ~8 days | build | Windows build documentation needed | 🟡 Medium |
| [#2602](https://github.com/sipeed/picoclaw/issues/2602) | @TrudeEH | ~12 days | provider | OAuth authentication failures | 🔴 High |
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) | @OuSatoru | ~25 days | provider, config | Streaming HTTP request support | 🟡 Medium |
| [#2652](https://github.com/sipeed/picoclaw/issues/2652) | @lstarboy | ~8 days | provider | GitHub Copilot provider request | 🟢 Low |
| [#2649](https://github.com/sipeed/picoclaw/issues/2649) | @SiYue-ZO | ~8 days | tool | UART serial port tools | 🟡 Medium |

### Stale PRs Requiring Review

| PR | Author | Age | Domain | Summary | Status |
|----|--------|-----|--------|---------|--------|
| [#2662](https://github.com/sipeed/picoclaw/pull/2662) | @milseg | ~8 days | documentation | Unify vendors table in providers docs | Open, stale |
| [#2655](https://github.com/sipeed/picoclaw/pull/2655) | @ZanzyTHEbar | ~8 days | agent, tool, ci, build, docker | Restore unified kernel baseline | Open, stale |
| [#2647](https://github.com/sipeed/picoclaw/pull/2647) | @yuxuan-7814 | ~8 days | tool, config | Enable web_search YAML config, DuckDuckGo default | Open, stale |
| [#2128](https://github.com/sipeed/picoclaw/pull/2128) | @loafoe | ~35 days | tool | Ensure valid JSON Schema properties for tools | Open, stale |

**Maintainer Action Recommended:**
- Address v0.2.8 regressions (#2738, #2744, #2742) as top priority
- Review and merge streaming-related PRs (#2740, #2647) to address user requests
- Provide Windows build documentation to reduce friction (#2651)
- Triage OAuth authentication issue (#2602) which blocks provider usage

---

*Digest generated for PicoClaw (github.com/sipeed/picoclaw) on 2026-05-02*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-02

## 1. Today's Overview

NanoClaw experienced high development velocity over the past 24 hours with 28 PR updates and 10 issue updates. The project closed 4 high-priority bugs related to the OpenCode provider (process leaks, hardcoded timeouts, context resolution failures) and merged 16 pull requests including significant fixes to host-sweep orphan handling and OpenCode provider stability. Six new issues were opened covering interrupted-run observability, Gmail containment side effects, and V1→V2 migration planning. Overall project health is strong with active maintenance and clear prioritization of stability-critical fixes.

## 2. Releases

No new releases were published in the past 24 hours.

## 3. Project Progress

**Merged/Closed PRs (16 total):**

| PR | Title | Status |
|----|-------|--------|
| [#2151](https://github.com/qwibitai/nanoclaw/pull/2151) | fix(host-sweep): clear orphan processing_ack rows on kill to prevent claim-stuck respawn loop | Closed |
| [#2152](https://github.com/qwibitai/nanoclaw/pull/2152) | fix(opencode): kill server process group + configurable IDLE_TIMEOUT_MS | Closed |
| [#2165](https://github.com/qwibitai/nanoclaw/pull/2165) | Resolve CLAUDE.md includes for OpenCode provider | Closed |
| [#2153](https://github.com/qwibitai/nanoclaw/pull/2153) | fix(opencode): use native instructions config to load CLAUDE.md and fragments | Closed |
| [#2170](https://github.com/qwibitai/nanoclaw/pull/2170) | feat: bidirectional WhatsApp media messages (skill/03) | Closed |
| [#2160](https://github.com/qwibitai/nanoclaw/pull/2160) | fix(agent-runner): open inbound.db fresh per messages_in read | Closed |
| [#2171](https://github.com/qwibitai/nanoclaw/pull/2171) | chore(tooling): switch pre-commit hook to lint-staged | Closed |
| [#2180](https://github.com/qwibitai/nanoclaw/pull/2180) | Upgrade to 2.0.0 base | Closed |

**Key advancements:**
- **OpenCode provider stability**: Multiple PRs (#2151, #2152, #2153, #2165) addressed process management, configurable timeouts, and CLAUDE.md include resolution—directly resolving 4 high-severity bugs
- **WhatsApp enhancement**: Bidirectional media message support merged (#2170)
- **Developer experience**: Pre-commit hooks optimized via lint-staged (#2171)
- **Database reliability**: Inbound.db handling improved (#2160)

## 4. Community Hot Topics

**Most Active Issues:**

| Issue | Title | Comments | Priority |
|-------|-------|----------|----------|
| [#2150](https://github.com/qwibitai/nanoclaw/issues/2150) | OpenCode provider: wrapPromptWithContext sends literal @./...md lines | 5 | High |
| [#2177](https://github.com/qwibitai/nanoclaw/issues/2177) | Active-query push-mode stalls silently after empty-text result | 2 | — |
| [#2173](https://github.com/qwibitai/nanoclaw/issues/2173) | B-01: Interrupted-Run Detection and Observability | 1 | — |

**Analysis:**
- **Context resolution failures** (#2150) generated the most discussion, indicating the OpenCode provider's prompt construction was a pain point for multiple users
- **Interrupted-run observability** (#2173, #2174) represents a new architectural concern—users need visibility into messages that leave the normal polling path
- **Push-mode stalling** (#2177) reveals edge cases in non-chat surfaces where empty results cause silent failures

**Active PRs with community interest:**

| PR | Title | Status |
|----|-------|--------|
| [#2069](https://github.com/qwibitai/nanoclaw/pull/2069) | Skill/webchat v1 | Open |
| [#1931](https://github.com/qwibitai/nanoclaw/pull/1931) | feat: v1 → v2 migration to setup flow (experimental) | Open |
| [#2136](https://github.com/qwibitai/nanoclaw/pull/2136) | feat(providers): add Google Gemini provider support | Open |

## 5. Bugs & Stability

**High Severity Bugs (Closed with Fixes):**

| Issue | Title | Fix PR | Status |
|-------|-------|--------|--------|
| [#2147](https://github.com/qwibitai/nanoclaw/issues/2147) | Host sweep: orphan processing_ack rows survive kill-ceiling | [#2151](https://github.com/qwibitai/nanoclaw/pull/2151) | Fixed |
| [#2148](https://github.com/qwibitai/nanoclaw/issues/2148) | OpenCode provider: proc.kill('SIGKILL') leaks underlying binary | [#2152](https://github.com/qwibitai/nanoclaw/pull/2152) | Fixed |
| [#2150](https://github.com/qwibitai/nanoclaw/issues/2150) | OpenCode provider: literal @./...md lines sent to LLM | [#2165](https://github.com/qwibitai/nanoclaw/pull/2165) | Fixed |

**Medium Severity (Closed):**
- [#2149](https://github.com/qwibitai/nanoclaw/issues/2149): Hardcoded 90s idle timeout breaks local-model setups → Fixed via [#2152](https://github.com/qwibitai/nanoclaw/pull/2152)

**Open Bugs Requiring Attention:**

| Issue | Title | Severity |
|-------|-------|----------|
| [#2177](https://github.com/qwibitai/nanoclaw/issues/2177) | Active-query push-mode stalls after empty-text result | — |
| [#2172](https://github.com/qwibitai/nanoclaw/issues/2172) | container/build.sh and Node compute different image slugs on macOS | — |

**Stability Assessment:** The OpenCode provider received comprehensive fixes addressing process leaks and context resolution. The host-sweep orphan handling fix prevents session lockout scenarios. Remaining open bugs are lower severity but affect specific environments (macOS) or edge cases (empty results).

## 6. Feature Requests & Roadmap Signals

**New Feature PRs:**

| PR | Title | Impact |
|----|-------|--------|
| [#2136](https://github.com/qwibitai/nanoclaw/pull/2136) | feat(providers): add Google Gemini provider support | High—first-class alternative provider |
| [#2069](https://github.com/qwibitai/nanoclaw/pull/2069) | Skill/webchat v1 | Channel expansion |
| [#2170](https://github.com/qwibitai/nanoclaw/pull/2170) | feat: bidirectional WhatsApp media messages | Completed—media handling |

**Strategic Issues:**

| Issue | Title | Signal |
|-------|-------|--------|
| [#2175](https://github.com/qwibitai/nanoclaw/issues/2175) | V1 → V2 Upgrade: operational contracts, diagnostics, safe delegation | Major migration planning underway |
| [#2173](https://github.com/qwibitai/nanoclaw/issues/2173) | B-01: Interrupted-Run Detection and Observability | Reliability/observability investment |
| [#2174](https://github.com/qwibitai/nanoclaw/issues/2174) | B-02: Interrupted-Run Recovery and Requeue | Follow-up to B-01 |

**Roadmap Prediction:** The next version is likely to emphasize:
1. V1→V2 migration tooling with preserved operational contracts
2. Enhanced observability for interrupted runs
3. Google Gemini as a first-class provider alternative
4. Continued OpenCode provider hardening

## 7. User Feedback Summary

**Pain Points Identified:**

| Theme | Evidence | Impact |
|-------|----------|--------|
| **OpenCode instability** | Multiple high-severity bugs (#2147, #2148, #2150) | Session lockout, context loss, process leaks |
| **Silent failures** | Push-mode stalling (#2177), interrupted runs (#2173) | Users lose visibility into agent operations |
| **Local model friction** | Hardcoded 90s timeout (#2149) | Breaks slow inference setups |
| **macOS compatibility** | Case-insensitive filesystem slug mismatch (#2172) | Build failures on Apple Silicon |
| **Gmail containment side effects** | SC loses context after fresh sessions (#2176) | Workflow continuity breaks |

**Positive Signals:**
- WhatsApp media support (#2170) merged successfully
- Pre-commit tooling improvements (#2171) address developer experience
- V1→V2 migration tooling (#1931) in progress indicates forward momentum

## 8. Backlog Watch

**Issues Needing Maintainer Attention:**

| Issue | Title | Age | Priority | Notes |
|-------|-------|-----|----------|-------|
| [#701](https://github.com/qwibitai/nanoclaw/pull/701) | fix: inject date/time context into all agent prompts | ~59 days | — | Status: Blocked |
| [#746](https://github.com/qwibitai/nanoclaw/pull/746) | fix(whatsapp): prevent service restart hammering | ~58 days | — | Status: Blocked |
| [#1076](https://github.com/qwibitai/nanoclaw/pull/1076) | fix: OAuth credential proxy — auto-refresh tokens | ~49 days | — | Status: Needs Review |
| [#2175](https://github.com/qwibitai/nanoclaw/issues/2175) | V1 → V2 Upgrade planning | New | High | Needs architectural decision |
| [#2173](https://github.com/qwibitai/nanoclaw/issues/2173) | B-01: Interrupted-Run Detection | New | — | Depends on #2174 |

**Long-standing PRs requiring review:**
- OAuth token auto-refresh (#1076) has been pending review for 49 days
- Date/time context injection (#701) blocked for 59 days
- WhatsApp auth failure handling (#746) blocked for 58 days

**Recommendation:** Prioritize review of #1076 (OAuth refresh), #701 (date/time context), and #746 (WhatsApp restart hammering) to unblock these long-standing fixes. The V1→V2 migration issue (#2175) warrants early architectural alignment.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-02

## 1. Today's Overview

IronClaw experienced **high development velocity** on 2026-05-02, with 50 PRs and 29 issues updated in the last 24 hours. The project remains heavily focused on the **Reborn architecture landing** (epic #2987), with multiple stacked PRs advancing the memory subsystem, runtime composition, and obligation handling. Community contributions are also surging, with a new contributor (@abbyshekit) driving parallel workstreams on CLI tooling (backup, insights) and a legal harness feature set. No new releases shipped today, but several high-impact bug fixes were merged addressing installer failures and routine creation errors.

---

## 2. Releases

**No new releases** were published in the last 24 hours.

---

## 3. Project Progress

### Merged/Closed PRs (19 total)

| PR | Title | Impact |
|----|-------|--------|
| [#3155](https://github.com/nearai/ironclaw/pull/3155) | fix(bridge): mission_* tools accept name; resolves #2583 | **Bug Fix** — Resolved routine creation failures ("5 consecutive code errors") by allowing `mission_*` handlers to accept `name` in addition to `id` UUID |
| [#3172](https://github.com/nearai/ironclaw/pull/3172) | fix(release): bump cargo-dist to 0.31.0 to fix installer (#2818) | **Bug Fix** — Fixed broken Linux x86_64 installers by upgrading cargo-dist |
| [#3129](https://github.com/nearai/ironclaw/pull/3129) | plumb reasoning and smoke tests | **Quality** — Added `emit_reasoning_trace` helper for chain-of-thought logging across GLM-5, DeepSeek, OpenAI o-series, and Qwen models |

### Open PRs Advancing Key Features

**Reborn Memory Subsystem** (6 stacked PRs, #3180–#3185):
- [#3180](https://github.com/nearai/ironclaw/pull/3180) — Native-isolated guardrails + module split
- [#3181](https://github.com/nearai/ironclaw/pull/3181) — Native schema + empty repo wiring
- [#3182](https://github.com/nearai/ironclaw/pull/3182) — Native libSQL repository behavior
- [#3183](https://github.com/nearai/ironclaw/pull/3183) — Native Postgres repository behavior
- [#3184](https://github.com/nearai/ironclaw/pull/3184) — Behavior contract over native repos
- [#3185](https://github.com/nearai/ironclaw/pull/3185) — Vertical integration tests through public seams

**CLI Enhancements** (new contributor @abbyshekit):
- [#3178](https://github.com/nearai/ironclaw/pull/3178) — `ironclaw backup --quick` for portable state snapshots
- [#3177](https://github.com/nearai/ironclaw/pull/3177) — `ironclaw insights` for usage analytics

**Legal Harness** (multi-stream parallel work):
- [#3173](https://github.com/nearai/ironclaw/pull/3173) — Foundation: projects, documents, ingest
- [#3174](https://github.com/nearai/ironclaw/pull/3174) — DOCX export for chat threads
- [#3176](https://github.com/nearai/ironclaw/pull/3176) — X bookmarks ingest + triage skill
- [#3179](https://github.com/nearai/ironclaw/pull/3179) — Chat-with-docs RAG layer

**Runtime & Security**:
- [#3159](https://github.com/nearai/ironclaw/pull/3159) — Wire EnforceResourceCeiling into runtime/sandbox
- [#3157](https://github.com/nearai/ironclaw/pull/3157) — Inline gate await for Tier 0/1 Approval gates
- [#3175](https://github.com/nearai/ironclaw/pull/3175) — Readonly Google Drive OAuth scope

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Title | Comments | Theme |
|-------|-------|----------|-------|
| [#2987](https://github.com/nearai/ironclaw/issues/2987) | [EPIC] Track Reborn architecture landing strategy | **44** | Reborn architecture coordination |
| [#3067](https://github.com/nearai/ironclaw/issues/3067) | [TEST] Reborn: Add vertical-slice integration test suite | **14** | Testing infrastructure |
| [#3085](https://github.com/nearai/ironclaw/issues/3085) | Use shared Reborn runtime HTTP egress for WASM, Script, and MCP | **7** | Runtime unification |
| [#3087](https://github.com/nearai/ironclaw/issues/3087) | [Reborn] Compose ironclaw_host_runtime services | **4** | Service composition |
| [#3137](https://github.com/nearai/ironclaw/issues/3137) | [Reborn] Wire concrete MCP HTTP/SSE client through shared runtime HTTP egress | **4** | MCP integration |

**Analysis**: The Reborn architecture landing dominates community discussion. The 44-comment epic (#2987) reflects the complexity of coordinating a multi-PR stacked landing without overwhelming reviewers. The vertical integration test suite (#3067) signals the team's commitment to contract-level testing before declaring Reborn production-ready.

---

## 5. Bugs & Stability

### Reported Bugs (ranked by severity)

| Severity | Issue | Status | Fix Available? |
|----------|-------|--------|----------------|
| **High** | [#2949](https://github.com/nearai/ironclaw/issues/2949) — Missing download for x86_64-unknown-linux-gnu | Open | ⚠️ Partial — #3172 merged but issue not yet closed |
| **High** | [#2963](https://github.com/nearai/ironclaw/issues/2963) — Docker Hub image `nearai/ironclaw:latest` does not exist | Open | ❌ No PR |
| **Medium** | [#2818](https://github.com/nearai/ironclaw/issues/2818) — Installer fails on x86_64 Linux (v0.26.0) | Closed | ✅ #3172 |
| **Medium** | [#2583](https://github.com/nearai/ironclaw/issues/2583) — Routine creation fails with "5 consecutive code errors" | Closed | ✅ #3155 |
| **Medium** | [#3133](https://github.com/nearai/ironclaw/issues/3133) — Mission to send email failed (Gmail auth) | Open | ❌ No PR |

**Stability Assessment**: Two critical installation/platform issues remain open. The Docker Hub image absence (#2963) blocks container-based deployments. The x86_64 Linux download issue (#2949) may be resolved by the cargo-dist bump but confirmation is pending.

---

## 6. Feature Requests & Roadmap Signals

### User-Requested Features

| Feature | Issue | Signals |
|---------|-------|---------|
| **ARM64 Docker support** | [#3168](https://github.com/nearai/ironclaw/issues/3168) — Add arm64/aarch64 platform support for Docker builds | High demand; Cranelift already supports aarch64 |
| **Mission auto-resume** | [#3166](https://github.com/nearai/ironclaw/issues/3166) — Auto-resume after auth/approval gate resolution | Follow-up to #3133; improves UX for gated tools |
| **Portable backup/restore** | [#3178](https://github.com/nearai/ironclaw/pull/3178) (PR) | CLI feature in review; addresses state portability |
| **Usage analytics** | [#3177](https://github.com/nearai/ironclaw/pull/3177) (PR) | Hermes parity feature; in review |

### Roadmap-Adjacent Work (Reborn Epic)

The Reborn epic (#2987) is driving development of:
- Shared HTTP egress across WASM/Script/MCP runtimes (#3085)
- Host runtime service composition (#3087, #3088)
- Trust-aware capability dispatch (#3146)
- Cost-based budget integration (#3141, #3144)
- Durable event/audit store (#3162)
- Background process obligation lifecycle (#3145)

**Prediction**: ARM64 Docker support (#3168) and mission auto-resume (#3166) are strong candidates for the next release given their user-facing impact and relatively contained scope.

---

## 7. User Feedback Summary

### Pain Points

| Pain Point | Source | Issue |
|------------|--------|-------|
| **Installation failure on Linux** | Multiple users | [#2949](https://github.com/nearai/ironclaw/issues/2949), [#2818](https://github.com/nearai/ironclaw/issues/2818) |
| **Docker image unavailable** | @magnusviri | [#2963](https://github.com/nearai/ironclaw/issues/2963) |
| **Gmail OAuth failures** | @sergeiest | [#3133](https://github.com/nearai/ironclaw/issues/3133) |
| **Routine creation errors** | @joe-rlo | [#2583](https://github.com/nearai/ironclaw/issues/2583) (now fixed) |

### Use Cases & Satisfaction

- **Positive**: Community contributor @abbyshekit is actively building legal industry features (contract review, DOCX export, RAG), indicating IronClaw is gaining traction in professional/enterprise workflows.
- **Positive**: The reborn-memory stack demonstrates IronClaw's commitment to native database backends (libSQL, Postgres) rather than third-party API dependencies.
- **Concern**: Repeated platform/installation issues may frustrate new users; the Docker Hub image absence is particularly blocking for container-first workflows.

---

## 8. Backlog Watch

### Issues Requiring Maintainer Attention

| Issue | Age | Priority | Description |
|-------|-----|----------|-------------|
| [#2963](https://github.com/nearai/ironclaw/issues/2963) | 6 days | High | Docker Hub image missing — blocks container deployments |
| [#2949](https://github.com/nearai/ironclaw/issues/2949) | 8 days | High | x86_64 Linux download missing — blocks Linux installs |
| [#3133](https://github.com/nearai/ironclaw/issues/3133) | 1 day | Medium | Gmail OAuth failure — user-facing auth regression |
| [#3168](https://github.com/nearai/ironclaw/issues/3168) | 1 day | Medium | ARM64 Docker support request — platform parity gap |

### Long-Running Epics

| Epic | Created | Status | Notes |
|------|---------|--------|-------|
| [#2987](https://github.com/nearai/ironclaw/issues/2987) — Reborn architecture landing | 2026-04-27 | Active | 44 comments; complex multi-PR coordination |
| [#3031](https://github.com/nearai/ironclaw/issues/3031) — Reborn product surface migration | 2026-04-28 | Active | Blocking gates: #3020, #3022, #3032, #3039, #3067 |

---

*Digest generated from IronClaw GitHub activity on 2026-05-02. Data sources: [github.com/nearai/ironclaw](https://github.com/nearai/ironclaw).*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-05-02

## 1. Today's Overview

LobsterAI shows **no new releases or issue activity** in the past 24 hours, with 0 issues updated and 6 pull requests remaining open. All active PRs carry a `[stale]` label, indicating they have been awaiting review or merge for approximately one month since early April 2026. The project appears to be in a **low-activity maintenance phase** with no recent merges, suggesting maintainer attention may be focused elsewhere or the repository is in a stabilization period. Six PRs spanning auth reliability, UI/UX improvements, performance optimization, and installer fixes represent the current development pipeline.

---

## 2. Releases

**No new releases** in the past 24 hours.

---

## 3. Project Progress

No PRs were merged or closed today. The following 6 open PRs represent the current development queue:

| PR | Type | Summary |
|----|------|---------|
| [#1181](https://github.com/netease-youdao/LobsterAI/pull/1181) | Bug Fix | Hide OpenClaw main agent sessions from user-facing Cowork session list by adding a `hidden` column |
| [#822](https://github.com/netease-youdao/LobsterAI/pull/822) | Bug Fix | Unify token refresh lock across three auth paths to eliminate race conditions on 401 responses |
| [#825](https://github.com/netease-youdao/LobsterAI/pull/825) | Bug Fix | Add duplicate detection for local skill uploads using SHA256 content hashing |
| [#1185](https://github.com/netease-youdao/LobsterAI/pull/1185) | Feature | Add "Open Folder" button to imported skill cards for direct filesystem access |
| [#1186](https://github.com/netease-youdao/LobsterAI/pull/1186) | Perf | Optimize streaming response rendering—eliminate full message tree rebuilds every 90ms using `createSelector` and `React.memo` |
| [#1190](https://github.com/netease-youdao/LobsterAI/pull/1190) | Bug Fix | Ensure Windows uninstaller terminates the app before removal to prevent orphaned processes |

---

## 4. Community Hot Topics

All 6 open PRs are marked `[stale]` and have received no comments or reactions recorded. This suggests **limited community engagement** on these items, though the PRs themselves address substantive issues:

- **#1186 (Performance)** — The streaming rendering fix targets a measurable inefficiency: ~6,600 full message tree traversals during a 10-minute streaming session, causing scroll lag and high CPU. This is a high-impact UX issue.
- **#822 (Auth Race Conditions)** — Three independent token refresh paths without concurrency guards represent a **reliability risk** in production environments with multiple simultaneous 401 responses.
- **#825 (Skill Duplicates)** — Preventing storage waste and list clutter from duplicate skill uploads addresses a **user-facing friction point** in the skill management workflow.

No issues are currently open, indicating no new bug reports or feature requests have been filed recently.

---

## 5. Bugs & Stability

No new bugs were reported today (0 issues opened). However, **three PRs address known stability issues** that remain unmerged:

| Severity | PR | Issue |
|----------|-----|-------|
| **High** | [#822](https://github.com/netease-youdao/LobsterAI/pull/822) | Race conditions in token refresh can cause auth failures under concurrent load |
| **Medium** | [#1190](https://github.com/netease-youdao/LobsterAI/pull/1190) | Windows uninstall leaves running app processes, confusing users |
| **Low** | [#1181](https://github.com/netease-youdao/LobsterAI/pull/1181) | Internal agent sessions visible to users cause confusion |

All three have proposed fixes ready but are awaiting merge.

---

## 6. Feature Requests & Roadmap Signals

Two PRs represent **user-facing feature additions**:

- **#1185** — "Open Folder" button for imported skills (UX convenience for power users editing skill files)
- **#825** — Duplicate skill detection (quality-of-life improvement for skill management)

These suggest the project is addressing **skill ecosystem usability** as a near-term focus. The performance work in **#1186** indicates streaming response smoothness is a priority. If these PRs merge, the next release may emphasize **stability, skill management UX, and rendering performance**.

---

## 7. User Feedback Summary

Direct user feedback is not visible in the provided data (0 issues, 0 comments on PRs). However, the PRs themselves reveal inferred pain points:

- **Confusion** from internal sessions appearing in user-facing lists (#1181)
- **Auth instability** when multiple requests fail simultaneously (#822)
- **Storage clutter** from duplicate skill uploads (#825)
- **Inconvenience** of navigating to skill folders manually (#1185)
- **Poor streaming performance** causing scroll lag and CPU strain (#1186)
- **Windows uninstall confusion** when the app continues running post-removal (#1190)

---

## 8. Backlog Watch

The following open PRs have been `[stale]` for ~30 days and may need maintainer attention:

| PR | Age | Priority | Concern |
|----|-----|----------|---------|
| [#822](https://github.com/netease-youdao/LobsterAI/pull/822) | ~38 days | High | Auth race condition—risk of user lockout under load |
| [#825](https://github.com/netease-youdao/LobsterAI/pull/825) | ~38 days | Medium | Storage/data integrity issue |
| [#1181](https://github.com/netease-youdao/LobsterAI/pull/1181) | ~31 days | Low | UX confusion |
| [#1185](https://github.com/netease-youdao/LobsterAI/pull/1185) | ~31 days | Low | UX convenience |
| [#1186](https://github.com/netease-youdao/LobsterAI/pull/1186) | ~31 days | Medium | Performance regression affecting all streaming sessions |
| [#1190](https://github.com/netease-youdao/LobsterAI/pull/1190) | ~31 days | Medium | Windows installer correctness |

**Recommendation**: Maintainers should prioritize reviewing **#822** (auth reliability) and **#1186** (performance), as these affect core functionality and broad user experience.

---

*Digest generated from LobsterAI repository data — 2026-05-02*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# CoPaw Project Digest — 2026-05-02

## 1. Today's Overview

CoPaw (QwenPaw) shows moderate activity on 2026-05-02 with 7 issues and 4 pull requests updated in the last 24 hours. All issues remain open with no new releases announced. The project is actively receiving community contributions, including a new provider integration (Volcengine) and a Discord thread feature. Notably, several critical bugs affecting conversation continuity and packaging workflows have surfaced, indicating areas needing immediate maintainer attention.

---

## 2. Releases

**No new releases** were published in the last 24 hours.

---

## 3. Project Progress

| PR | Title | Status | Summary |
|----|-------|--------|---------|
| [#3989](https://github.com/agentscope-ai/QwenPaw/pull/3989) | add knowledge | **CLOSED** | First-time contributor addition of knowledge base content |
| [#3994](https://github.com/agentscope-ai/QwenPaw/pull/3994) | Feat/volcengine provider | OPEN | New provider for Volcengine (火山引擎) and its coding plan |
| [#3525](https://github.com/agentscope-ai/QwenPaw/pull/3525) | feat(cron): create Discord thread before agent dispatch | OPEN (Under Review) | Isolates cron job output into Discord threads to avoid mixing with regular conversation |
| [#3831](https://github.com/agentscope-ai/QwenPaw/pull/3831) | Add vector model connection test feature | OPEN | New diagnostic feature for testing vector model connectivity |

**Key Advances:**
- Community contributor added Volcengine provider integration
- Discord cron job isolation feature progressing toward merge
- Vector model connection testing feature under development

---

## 4. Community Hot Topics

| Issue | Title | Comments | Type | Link |
|-------|-------|----------|------|------|
| #3992 | [Bug]: Chat stops after several rounds with agent | 2 | Bug | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3992) |
| #3988 | [Bug]: Windows conda-pack packaging conflict with pip install | 2 | Bug | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3988) |
| #3990 | [Feature]: Channel response speed too slow | 2 | Enhancement | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3990) |

**Analysis:**
- **Conversation reliability** is a top concern — users report chat sessions terminating unexpectedly after multiple rounds
- **Packaging/installation friction** on Windows remains problematic, with conda/pip conflicts blocking developer onboarding
- **Performance concerns** around channel response latency suggest optimization opportunities

---

## 5. Bugs & Stability

| Priority | Issue | Title | Details | Fix PR? |
|----------|-------|-------|---------|---------|
| 🔴 High | [#3992](https://github.com/agentscope-ai/QwenPaw/issues/3992) | Chat stops after several rounds | Agent ceases execution after a few conversation turns — critical UX break | No |
| 🔴 High | [#3991](https://github.com/agentscope-ai/QwenPaw/issues/3991) | Ollama channel loses conversation history | Context not carried between requests; every turn treated as new conversation | No |
| 🟡 Medium | [#3988](https://github.com/agentscope-ai/QwenPaw/issues/3988) | Windows conda-pack conflict | pip install upgrades pip/setuptools, conflicting with conda-pack ≤0.7.1 during packaging | No |
| 🟡 Medium | [#3996](https://github.com/agentscope-ai/QwenPaw/issues/3996) | DeepSeek V4 missing thinking levels | Only binary toggle available; xhigh/max thinking levels not exposed despite API support | No |

**Stability Assessment:** Two critical conversation continuity bugs (#3992, #3991) require urgent investigation. The Ollama context loss particularly impacts local model users.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Title | Description | Community Interest |
|-------|-------|-------------|-------------------|
| [#3995](https://github.com/agentscope-ai/QwenPaw/issues/3995) | Enhanced memory management & recall | Lifecycle management for memory files, auto-archival of notes older than 30 days, conflict detection on writes | 1 comment |
| [#3993](https://github.com/agentscope-ai/QwenPaw/issues/3993) | OpenAI Responses API support | Native tool-calling capabilities beyond traditional Chat Completions API | 1 comment |
| [#3990](https://github.com/agentscope-ai/QwenPaw/issues/3990) | Channel response speed improvement | Performance optimization for channel responsiveness | 2 comments |
| [#3996](https://github.com/agentscope-ai/QwenPaw/issues/3996) | DeepSeek V4 thinking levels | Expose xhigh/max thinking modes in UI/API | 1 comment |

**Roadmap Prediction:**
- Memory management enhancements (#3995) align with long-term usability goals — likely candidate for near-term implementation
- OpenAI Responses API support (#3993) reflects industry trend toward newer API paradigms — strategic addition
- DeepSeek V4 granular thinking controls (#3996) is a straightforward API mapping task

---

## 7. User Feedback Summary

**Pain Points:**
1. **Conversation Memory Loss** — Ollama users report complete context loss between turns, severely impacting usability of local models
2. **Windows Development Friction** — Packaging conflicts create barriers for Windows contributors
3. **Chat Reliability** — Agents stopping after several rounds undermines trust in autonomous operation

**Use Cases Identified:**
- Local LLM deployment via Ollama is a significant use case requiring better context handling
- Multi-channel deployment (Discord, DingTalk, Feishu) is active with cron job automation needs
- Memory-intensive workflows relying on Markdown-based storage need lifecycle management

**Satisfaction Signals:**
- Active community contributions (new providers, features) indicate healthy engagement
- First-time contributor PR merged successfully

---

## 8. Backlog Watch

| Item | Age | Status | Concern |
|------|-----|--------|---------|
| [#3525](https://github.com/agentscope-ai/QwenPaw/pull/3525) | ~15 days | Under Review | Discord thread isolation for cron jobs — stalled in review |
| [#3831](https://github.com/agentscope-ai/QwenPaw/pull/3831) | ~7 days | Open | Vector model connection test feature — awaiting review |
| [#3994](https://github.com/agentscope-ai/QwenPaw/pull/3994) | 1 day | Open | Volcengine provider — fresh contribution needs timely review |

**Maintainer Attention Needed:**
- PR #3525 has been under review for 15 days — consider prioritizing merge or providing feedback
- Critical bugs #3992 and #3991 have no linked fix PRs — assign owners or acknowledge receipt

---

*Digest generated for CoPaw (QwenPaw) — 2026-05-02*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>NemoClaw</strong> — <a href="https://github.com/NVIDIA/NemoClaw">NVIDIA/NemoClaw</a></summary>

# NemoClaw Project Digest — 2026-05-02

## 1. Today's Overview

NemoClaw shows high activity with 50 issues and 50 PRs updated in the last 24 hours, indicating intense development. No new releases were published today. The project continues its CLI migration to oclif, with multiple sandbox inspection and maintenance commands being refactored. Several critical bugs persist, including a long-running nightly E2E pipeline failure (#1992, 319 comments) and ongoing platform-specific issues across Windows/WSL, macOS, Ubuntu, DGX Spark, and Brev. Security-related issues marked as wont-fix suggest some architectural limitations being acknowledged. Two model deprecation notices (kimi-k2.5, minimax-m2.5) require user attention before mid-May deadlines.

---

## 2. Releases

**No new releases today.** The project remains on v0.0.33 (referenced across multiple issues and PRs). Users on earlier versions should monitor the release prep documentation refresh in PR #2866.

---

## 3. Project Progress

### Merged/Closed PRs (8 total)
| PR | Title | Status |
|----|-------|--------|
| [#2796](https://github.com/NVIDIA/NemoClaw/pull/2796) | refactor(cli): migrate sandbox logs command to oclif | Closed |
| [#2788](https://github.com/NVIDIA/NemoClaw/pull/2788) | refactor(cli): migrate maintenance commands to oclif | Closed |
| [#2787](https://github.com/NVIDIA/NemoClaw/pull/2787) | refactor(cli): migrate sandbox inspection commands to oclif | Closed |
| [#2860](https://github.com/NVIDIA/NemoClaw/pull/2860) | feat(inference): refresh NVIDIA endpoint model options | Closed |
| [#2866](https://github.com/NVIDIA/NemoClaw/pull/2866) | docs: refresh release prep docs for 0.0.33 | Closed |
| [#2382](https://github.com/NVIDIA/NemoClaw/pull/2382) | fix(hermes): pre-create rc files so .bashrc sources HERMES_HOME | Closed |
| [#2856](https://github.com/NVIDIA/NemoClaw/pull/2856) | chore(skills): sync generated skills | Closed |

### Key Advancements
- **CLI Refactoring**: Continued migration of sandbox inspection and maintenance commands to oclif framework, improving command structure consistency
- **Hermes Integration**: Fixed rc file creation to properly source HERMES_HOME (#2382)
- **Model Catalog**: Added DeepSeek V4 Pro as curated NVIDIA Endpoints model, deprecated older models (#2860)
- **Documentation**: Release prep docs refreshed for v0.0.33

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Title | Comments | Status |
|-------|-------|----------|--------|
| [#1992](https://github.com/NVIDIA/NemoClaw/issues/1992) | Nightly E2E failed | 319 | OPEN |
| [#414](https://github.com/NVIDIA/NemoClaw/issues/414) | Web Plugin: `getaddrinfo EAI_AGAIN api.search.brave.com` | 10 | CLOSED |
| [#888](https://github.com/NVIDIA/NemoClaw/issues/888) | Gateway restart regenerates TLS certificates | 6 | CLOSED |
| [#2097](https://github.com/NVIDIA/NemoClaw/issues/2097) | nemoclaw lacks way to remove/stop messaging channels | 5 | OPEN |
| [#2199](https://github.com/NVIDIA/NemoClaw/issues/2199) | local-inference preset missing Ollama ports | 5 | OPEN |

### Analysis
- **#1992 (E2E Pipeline)**: The 319-comment thread indicates a persistent CI/CD issue causing nightly test failures. This represents significant developer frustration and blocks confidence in releases.
- **#414 (DNS Resolution)**: Web search tool failures suggest network configuration issues in certain environments, possibly related to corporate proxies or DNS resolution.
- **#888 (TLS Regeneration)**: Security concern where gateway restarts break existing sandbox connections—this is a known issue affecting production stability.
- **#2097 & #2199**: User experience gaps around messaging channel management and local model provider configuration.

### Most Active PRs (by recent updates)
| PR | Title | Updates |
|----|-------|---------|
| [#2797](https://github.com/NVIDIA/NemoClaw/pull/2797) | refactor(cli): migrate skill install command to oclif | 2026-05-02 |
| [#2646](https://github.com/NVIDIA/NemoClaw/pull/2646) | fix(recovery): add connect probe recovery path | 2026-05-02 |
| [#2874](https://github.com/NVIDIA/NemoClaw/pull/2874) | fix(runtime): harden overrides and gateway recovery | 2026-05-02 |
| [#2876](https://github.com/NVIDIA/NemoClaw/pull/2876) | fix: harden Dockerfile replaceConfigFile patch | 2026-05-02 |

---

## 5. Bugs & Stability

### Critical Bugs (High Priority)

| Issue | Platform | Summary | Fix PR? |
|-------|----------|---------|---------|
| [#1992](https://github.com/NVIDIA/NemoClaw/issues/1992) | All | Nightly E2E pipeline failure | None |
| [#888](https://github.com/NVIDIA/NemoClaw/issues/888) | OpenShell | TLS certificate regeneration breaks connections | None |
| [#2001](https://github.com/NVIDIA/NemoClaw/issues/2001) | Windows/WSL | Networking latency during onboard/validation | None |
| [#2604](https://github.com/NVIDIA/NemoClaw/issues/2604) | DGX Spark, Ubuntu | nemoclaw status omits fields, cloudflared stopped | None |
| [#2414](https://github.com/NVIDIA/NemoClaw/pull/2414) | NemoClaw CLI | SSRF validation hardening | OPEN |

### Platform-Specific Issues
- **Windows/WSL**: cgroup v2 detection failure (#2096), PATH issues after install (#2868)
- **macOS**: Exported ports not effective with TUI (#2267)
- **DGX Spark**: Dashboard shows "Version n/a" and "Health Offline" (#2342)
- **Brev**: Sandbox name validation gaps (#2869)

### Regressions
- [#2177](https://github.com/NVIDIA/NemoClaw/issues/2177): Presets do not apply correctly (all platforms, v0.0.33)
- [#2376](https://github.com/NVIDIA/NemoClaw/issues/2376): Hermes Agent writes to wrong location (`~/.hermes` instead of `~/.hermes-data`)

### Security Issues (Wont-Fix Acknowledged)
- [#803](https://github.com/NVIDIA/NemoClaw/issues/803): No custom seccomp profile — marked wont-fix
- [#801](https://github.com/NVIDIA/NemoClaw/issues/801): No per-task lifecycle tracking — marked wont-fix
- [#2215](https://github.com/NVIDIA/NemoClaw/issues/2215): Multi-agent security risks — marked wont-fix

---

## 6. Feature Requests & Roadmap Signals

### User-Requested Features

| Issue | Request | Priority |
|-------|---------|----------|
| [#2097](https://github.com/NVIDIA/NemoClaw/issues/2097) | Support removing/disabling messaging channels (Telegram, Discord, Slack) | High |
| [#2390](https://github.com/NVIDIA/NemoClaw/issues/2390) | Dashboard Delivery Contract for unified dashboard reachability | Medium |
| [#2848](https://github.com/NVIDIA/NemoClaw/pull/2848) | Add sandbox doctor command (PR merged) | — |
| [#2797](https://github.com/NVIDIA/NemoClaw/pull/2797) | Migrate skill install to oclif (in progress) | — |

### Model Deprecations Requiring Action
- **kimi-k2.5**: API redirect active until May 20, 2026 (#2120)
- **minimax-m2.5**: Full shutdown May 12, 2026 — no extended window (#2855)

### Predicted Next Version (v0.0.34) Focus Areas
1. CLI oclif migration completion (skill install, remaining commands)
2. Gateway recovery hardening (#2646, #2874)
3. SSRF validation security fix (#2414)
4. Hermes integration improvements (#2834, #2872)

---

## 7. User Feedback Summary

### Pain Points

| Category | Issue | User Impact |
|----------|-------|-------------|
| **Installation** | PATH not updated after install (#2868, #2515) | Users cannot run `nemoclaw` command; silent failures |
| **Messaging Bridges** | `nemoclaw stop` doesn't stop Telegram/Discord/Slack (#1825) | Bots continue responding, resource waste |
| **Local Models** | Ollama ports missing from local-inference preset (#2199) | Cannot use local LLM providers |
| **Hermes Integration** | Wrong directory writes (#2376), dependency issues (#2834) | Agent crashes, incomplete setup |
| **Windows/WSL** | Multiple install/runtime failures (#2096, #2001) | Poor Windows experience |

### Positive Feedback Signals
- Documentation refresh (#2866) indicates active maintenance
- CLI migration to oclif (#2787, #2788, #2796) improving command consistency
- New sandbox doctor command (#2848) addressing diagnostic needs

---

## 8. Backlog Watch

### Issues Requiring Maintainer Attention (>3 days without response)

| Issue | Age | Summary | Priority |
|-------|-----|---------|----------|
| [#1417](https://github.com/NVIDIA/NemoClaw/issues/1417) | ~29 days | Weather skill cannot complete in sandbox | Medium |
| [#1737](https://github.com/NVIDIA/NemoClaw/issues/1737) | ~22 days | Telegram mention-only mode request | Enhancement |
| [#1825](https://github.com/NVIDIA/NemoClaw/issues/1825) | ~19 days | nemoclaw stop doesn't stop messaging bridges | High |
| [#2096](https://github.com/NVIDIA/NemoClaw/issues/2096) | ~12 days | WSL2 cgroup v2 failure | Low |
| [#2097](https://github.com/NVIDIA/NemoClaw/issues/2097) | ~12 days | No way to remove messaging channels | High |
| [#2199](https://github.com/NVIDIA/NemoClaw/issues/2199) | ~11 days | Ollama ports missing from preset | Medium |

### Stale PRs Needing Review

| PR | Age | Summary |
|----|-----|---------|
| [#2696](https://github.com/NVIDIA/NemoClaw/pull/2696) | ~3 days | Dockerfile replaceConfigFile patch robustness |
| [#2692](https://github.com/NVIDIA/NemoClaw/pull/2692) | ~3 days | Honor --yes-i-accept-third-party-software in non-TTY |
| [#2414](https://github.com/NVIDIA/NemoClaw/pull/2414) | ~8 days | SSRF validation hardening (security) |

### Long-Running Critical Issue
**#1992** (Nightly E2E failed) — 15 days old, 319 comments, no resolution. This blocks CI confidence and should be prioritized for root cause analysis.

---

*Generated: 2026-05-02 | Data source: GitHub NemoClaw repository activity*

</details>

---
*This digest is auto-generated by [Radar Forge](https://github.com/borq168/radar-forge).*
