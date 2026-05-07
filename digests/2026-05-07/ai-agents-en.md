# OpenClaw Ecosystem Digest 2026-05-07

> Issues: 500 | PRs: 500 | Projects covered: 4 | Generated: 2026-05-07 02:04 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-05-07

## 1. Today's Activity Brief

OpenClaw recorded 500 issues and 500 PRs updated in the last 24 hours, with 306 issues remaining open and 147 PRs merged or closed. Two new releases shipped today (v2026.5.6 and v2026.5.5), both containing targeted fixes for regressions introduced in the prior release. Community engagement remains high, with multiple issues attracting 10+ comments and several PRs addressing critical stability regressions in the gateway and channel plugins.

---

## 2. Releases

### v2026.5.6
**Released:** 2026-05-07

**Fixes:**
- **Doctor/OpenAI Codex:** Reverted a migration from v2026.5.5 where `doctor --fix` incorrectly rewrote valid `openai-codex/*` ChatGPT/Codex OAuth routes to `openai/*`, which could break OAuth-only GPT-5.5 setups or force users onto the API-key route. Users who already ran the v2026.5.5 migration may need manual remediation.

### v2026.5.5
**Released:** 2026-05-07

**Fixes:**
- **Feishu:** Hydrated missing native topic starter thread IDs before session routing, ensuring first turns and follow-ups stay in the same topic session. Fixes #78262. Thanks @joeyzenghuan.
- **LINE:** Rejected `dmPolicy: "open"` configs without wildcard `allowFrom` so webhook DMs fail validation.

---

## 3. Project Progress

### Merged/Closed PRs (Today)

| PR | Description | Area |
|----|-------------|------|
| [#78709](https://github.com/openclaw/openclaw/pull/78709) | Added log-memory subsystem with auto-dream cycle, hybrid retrieval, and episodic consolidation | extensions: memory-core |
| [#78554](https://github.com/openclaw/openclaw/pull/78554) | Fixed Google Chat grant error caused by gaxios version mismatch | channel: googlechat |
| [#78678](https://github.com/openclaw/openclaw/pull/78678) | Implemented `oc://` addressing substrate across md/jsonc/json/yaml formats | workspace |
| [#78583](https://github.com/openclaw/openclaw/pull/78583) | Added World ID AgentKit HITL approvals | docs, agents, channels |
| [#71170](https://github.com/openclaw/openclaw/pull/71170) | Fixed webchat `/new` reset behavior when `dmScope` is main | gateway |
| [#78618](https://github.com/openclaw/openclaw/pull/78618) | Fixed session file rotation after daily reset | gateway |
| [#78479](https://github.com/openclaw/openclaw/pull/78479) | Fixed WebSocket connection drops (1000/1005/1006) during event-loop starvation | gateway |
| [#78235](https://github.com/openclaw/openclaw/pull/78235) | Fixed Discord gateway heartbeat ACK timing | channel: discord |
| [#78234](https://github.com/openclaw/openclaw/pull/78234) | Fixed repeated Codex native approval prompts after allow-always | extensions: codex |
| [#78340](https://github.com/openclaw/openclaw/pull/78340) | Fixed Quick Settings security badge reading wrong config path | app: web-ui |
| [#77952](https://github.com/openclaw/openclaw/pull/77952) | Bound Discord REST entity cache to prevent unbounded Map growth | channel: discord |

### Notable Open PRs

| PR | Description | Size |
|----|-------------|------|
| [#78701](https://github.com/openclaw/openclaw/pull/78701) | Added computed status field to `cron list --json` output | XS |
| [#78705](https://github.com/openclaw/openclaw/pull/78705) | Fixed auth-wrapped session streams bypassing boundary-aware transport | S |
| [#78228](https://github.com/openclaw/openclaw/pull/78228) | Fixed silent-reply rewrite for Telegram no-response DM turns | S |
| [#78230](https://github.com/openclaw/openclaw/pull/78230) | Fixed Feishu group source replies defaulting to automatic | S |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Title | Comments | Reactions | Link |
|-------|-------|----------|-----------|------|
| #75 | Linux/Windows Clawdbot Apps | 104 | 74 👍 | [Link](https://github.com/openclaw/openclaw/issues/75) |
| #9443 | Request: Prebuilt Android APK releases | 24 | 1 👍 | [Link](https://github.com/openclaw/openclaw/issues/9443) |
| #73655 | Gateway leak triad on plugin restart | 16 | 1 👍 | [Link](https://github.com/openclaw/openclaw/issues/73655) |
| #73323 | Gateway runtime degradation (pricing fetch timeouts, Telegram stalls) | 16 | 1 👍 | [Link](https://github.com/openclaw/openclaw/issues/73323) |
| #78407 | doctor --fix rewrites openai-codex/* to openai/* (OAuth lockout) | 15 | 3 👍 | [Link](https://github.com/openclaw/openclaw/issues/78407) |

**Analysis:** Issue #75 (Linux/Windows desktop apps) remains the highest-engagement feature request with 104 comments and 74 reactions, indicating sustained demand for cross-platform parity. The v2026.5.5/5.6 regression around `openai-codex/*` OAuth routing (#78407) generated significant attention, with the hotfix shipped within hours.

---

## 5. Bugs & Stability

### Critical/Regressions Reported Today

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **High** | [#78604](https://github.com/openclaw/openclaw/issues/78604) | Compaction triggers every ~5 minutes instead of ~30min (unfixed in hotfix) | — |
| **High** | [#76562](https://github.com/openclaw/openclaw/issues/76562) | High CPU, extreme RPC latency, unstable polling after upgrade to 2026.4.29+ | — |
| **High** | [#73655](https://github.com/openclaw/openclaw/issues/73655) | Gateway leak triad: Manifest EADDRINUSE retry loop, signal-handler accumulation, sync I/O starvation | — |
| **Medium** | [#78402](https://github.com/openclaw/openclaw/issues/78402) | Gateway repeatedly closes WebSocket connections (1000/1005/1006) due to event-loop starvation | [#78479](https://github.com/openclaw/openclaw/pull/78479) merged |
| **Medium** | [#78232](https://github.com/openclaw/openclaw/issues/78232) | openclaw-weixin plugin 2.4.1 incompatible with OpenClaw 2026.5.4 | — |
| **Medium** | [#77930](https://github.com/openclaw/openclaw/issues/77930) | Discord channel not loaded in 2026.5.4 (regression from beta.1) | — |
| **Medium** | [#78000](https://github.com/openclaw/openclaw/issues/78000) | Model allowlist breaks existing cron jobs using claude-haiku-4-5 | — |

**Note:** Multiple performance regressions (CPU pinning, RPC latency) are reported across versions 2026.4.29–2026.5.6. Maintainers are actively investigating (#77700 tracks prepared runtime resolution migration).

---

## 6. Feature Request Clusters

### Active Feature Requests

| Cluster | Issue | Summary | Link |
|---------|-------|---------|------|
| **Cross-platform desktop** | #75 | Linux/Windows Clawdbot apps (macOS/iOS/Android exist) | [Link](https://github.com/openclaw/openclaw/issues/75) |
| **Android distribution** | #9443 | Prebuilt Android APK releases requested | [Link](https://github.com/openclaw/openclaw/issues/9443) |
| **Security hardening** | #8719 | OpenClaw Security Profile v1.1 (data-centric, secure-by-default) | [Link](https://github.com/openclaw/openclaw/issues/8719) |
| **Safety modes** | #6731 | Safe/unsafe ClawdBot (sandbox vs. unrestricted) | [Link](https://github.com/openclaw/openclaw/issues/6731) |
| **TOTP for approvals** | #67440 | Optional TOTP challenge for exec approvals | [Link](https://github.com/openclaw/openclaw/issues/67440) |
| **Context visibility** | #2597 | Add context usage percentage to Runtime line | [Link](https://github.com/openclaw/openclaw/issues/2597) |
| **Accessibility** | #9637 | Add config option to disable emojis/unicode in TUI | [Link](https://github.com/openclaw/openclaw/issues/9637) |
| **WhatsApp stickers** | #7476 | WhatsApp sticker send support | [Link](https://github.com/openclaw/openclaw/issues/7476) |

### Related PRs Advancing Features

- [#78709](https://github.com/openclaw/openclaw/pull/78709): Memory-core log-memory subsystem with auto-dream cycle
- [#78678](https://github.com/openclaw/openclaw/pull/78678): Full `oc://` addressing substrate
- [#78583](https://github.com/openclaw/openclaw/pull/78583): World ID AgentKit HITL approvals

---

## 7. User Feedback Summary

### Pain Points Reported

1. **OAuth routing regression:** Users on ChatGPT/Codex OAuth setups report being locked out after v2026.5.5's `doctor --fix` migration. v2026.5.6 addresses this but affected users may need manual config repair.

2. **Performance degradation:** Multiple reports of CPU pinning (100%+), 60s pricing fetch timeouts, Telegram polling stalls (127–266s), and slow RPC (8–83s) across Windows 11 + Node 24 environments.

3. **Plugin compatibility:** WeChat plugin 2.4.1 incompatible with OpenClaw 2026.5.4 due to channelRuntime API changes. Discord channel fails to load in 2026.5.4+.

4. **Compaction loop:** Users report compaction triggering every ~5 minutes instead of configured ~30 minutes, still unfixed in v2026.5.6 hotfix.

5. **Steer queue mode:** Messages not injected mid-turn as documented; silently degrades to followup behavior with no diagnostic logging.

### Positive Feedback Signals

- Feishu topic session fix (#78262) resolved session splitting for users with `groupSessionScope: "group_topic"`.
- Discord heartbeat ACK timing fix improves connection stability.
- Google Chat grant fix restores authentication flow.

---

## 8. Backlog Watch

### Long-Unanswered or Stalled Issues Needing Maintainer Attention

| Issue | Age | Summary | Last Updated |
|-------|-----|---------|--------------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | ~4 months | Linux/Windows desktop apps | 2026-05-06 |
| [#2597](https://github.com/openclaw/openclaw/issues/2597) | ~3 months | Context usage percentage display | 2026-05-06 |
| [#6731](https://github.com/openclaw/openclaw/issues/6731) | ~3 months | Safe/unsafe ClawdBot modes | 2026-05-07 |
| [#1210](https://github.com/openclaw/openclaw/issues/1210) | ~3 months | Discord images stored as base64 causing context overflow | 2026-05-06 |
| [#37634](https://github.com/openclaw/openclaw/issues/37634) | ~2 months | Sandbox workspaceAccess "none" mounts read-only | 2026-05-06 |
| [#46080](https://github.com/openclaw/openclaw/issues/46080) | ~2 months | Anthropic tool_result succeeds but empty assistant content | 2026-05-06 |
| [#64752](https://github.com/openclaw/openclaw/issues/64752) | ~1 month | Telegram inbound reactions don't trigger agent turn | 2026-05-06 |

### Stalled PRs

| PR | Age | Summary | Status |
|----|-----|---------|--------|
| [#50745](https://github.com/openclaw/openclaw/pull/50745) | ~7 weeks | WhatsApp LID to phone number lookup | Open |
| [#72645](https://github.com/openclaw/openclaw/pull/72645) | ~2 weeks | Per-message OTel tracing across run/skill/tool/model | Open |

---

*Digest generated from OpenClaw GitHub activity on 2026-05-07. All links reference https://github.com/openclaw/openclaw.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-05-07

## 1. Daily Cross-Project Overview

All four tracked projects showed elevated activity on 2026-05-07. OpenClaw dominated in raw volume with 500 issues and 500 PRs updated, shipping two hotfix releases (v2026.5.5/5.6) to address a critical OAuth routing regression. NanoBot focused on runtime context isolation and channel stability, merging 17 PRs with no new releases. Zeroclaw continued provider ecosystem expansion with seven new model provider PRs while investigating critical WhatsApp Web and gateway bugs. PicoClaw published a nightly build and advanced work on multi-instance support, web search integration, and authentication handling.

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Releases Today | Open Issues | Open PRs |
|---------|---------------------|-------------------|----------------|-------------|----------|
| **OpenClaw** | 500 | 500 | 2 (v2026.5.5, v2026.5.6) | 306 | ~353 |
| **NanoBot** | 16 | 38 | 0 | ~7 new | 21 |
| **Zeroclaw** | 50 | 50 | 0 | Not specified | Not specified |
| **PicoClaw** | 21 | 62 | 1 nightly | 41 | 41 |

*Note: OpenClaw's counts reflect total updates across all tracked items; NanoBot, Zeroclaw, and PicoClaw report net new activity.*

## 3. OpenClaw Compared With Peers

**Volume:** OpenClaw's 500/500 update cycle is approximately 10× the activity of the next most active peer (Zeroclaw at 50/50), indicating significantly larger contributor base and issue traffic.

**Technical Focus:** OpenClaw's releases addressed OAuth routing regressions and Feishu/LINE channel fixes, while peers focused on provider integrations (Zeroclaw), runtime isolation (NanoBot), and multi-instance support (PicoClaw). OpenClaw's bug list shows gateway-level systemic issues (compaction loops, CPU pinning, RPC latency) affecting multiple versions, whereas peers report isolated channel-specific failures.

**Community Surface Area:** OpenClaw's #75 (Linux/Windows desktop apps) accumulated 104 comments and 74 reactions—substantially higher engagement than any single issue in peer projects. This suggests OpenClaw serves a broader consumer-user base, while Zeroclaw and PicoClaw skew toward self-hosted/developer deployments.

## 4. Shared Technical Focus Areas

**Channel Stability (OpenClaw, NanoBot, Zeroclaw, PicoClaw):**
- OpenClaw: Discord heartbeat timing, WebSocket drops, Feishu topic routing
- NanoBot: WeChat silent message loss, WebUI LAN auth
- Zeroclaw: WhatsApp Web message flow failure, Matrix duplicate replies
- PicoClaw: WeChat multi-instance validation, DingTalk SDK crashes

**Authentication and Credential Handling (OpenClaw, PicoClaw):**
- OpenClaw: Google Chat grant error (gaxios version mismatch), Codex OAuth lockout
- PicoClaw: 401 errors across Groq/OpenRouter/Nvidia despite valid keys (#2769), multiple auth credentials error (#2548)

**Runtime Context and Session Management (OpenClaw, NanoBot, PicoClaw):**
- NanoBot: Runtime context scaffolding leaking into persisted chat history (multiple PRs #3666, #3668, #3669, #3671)
- PicoClaw: Session context lost after API timeout (#2621), session messages lacking timestamps (#2787)
- OpenClaw: Session file rotation after daily reset (#78618)

**Provider Ecosystem Expansion (Zeroclaw, PicoClaw):**
- Zeroclaw: 7 new model providers (Inception Labs, Lambda AI, Arcee AI, Featherless AI, Upstage Solar, GitHub Models, Morph)
- PicoClaw: OpenAI-compatible embeddings for vLLM (#2624), ChatGPT OAuth subscription (#2679)

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Zeroclaw | PicoClaw |
|-----------|----------|---------|----------|----------|
| **Primary Focus** | Gateway stability, channel parity, regression management | Runtime isolation, offline reliability | Provider ecosystem, multi-channel integration | Multi-instance support, mobile/embedded |
| **Target Users** | Enterprise/self-hosted with multi-channel deployments | Developers seeking lightweight (~4K LOC) edge agent | Self-hosted power users, multi-provider setups | Mobile users, embedded devices, group chat scenarios |
| **Architecture** | Plugin-based with gateway/core separation | Lightweight single-binary | Rust-based with typed provider families | Modular with provider/channel/agent layers |
| **Release Cadence** | Multiple hotfixes per day | Conservative (nightly only) | Milestone-based (v0.7.5 pending) | Nightly builds |
| **Critical Issues Today** | Compaction loop, CPU pinning, OAuth regression | Runtime context leaks, DeepSeek reasoning errors | WhatsApp Web protocol bump, postgres panic | 401 auth failures, no retry on LLM failure |

## 6. Community Activity Notes

**Tier 1 — High Volume:** OpenClaw (500 issues/PRs updated) clearly leads in activity density, with sufficient traffic to support multiple simultaneous hotfix releases.

**Tier 2 — Moderate Volume:** Zeroclaw (50/50) and PicoClaw (21/62) show comparable moderate activity with active PR pipelines. Zeroclaw's activity centers on provider expansion; PicoClaw's on feature PRs under review.

**Tier 3 — Focused Activity:** NanoBot (16/38) maintains lower raw volume but high PR merge efficiency (17 PRs closed/merged from 38 updated), suggesting a smaller but active contributor base focused on bug fixes.

**Release Activity:** Only OpenClaw shipped stable releases today. PicoClaw published a nightly build. NanoBot and Zeroclaw released no versions.

## 7. Evidence-Backed Observations

1. **OAuth/credential handling is a cross-project pain point:** OpenClaw's `doctor --fix` regression locked out Codex OAuth users; PicoClaw reports 401 errors across multiple providers despite valid keys. This suggests systemic issues in credential validation and migration tooling rather than isolated incidents.

2. **Channel-specific bugs dominate stability reports:** Every project has active WhatsApp/WeChat/Feishu issues, indicating these integrations remain fragile across the ecosystem. Zeroclaw's WhatsApp Web issue traces to an April 2026 protocol bump, suggesting external API changes are a recurring destabilizer.

3. **Runtime context isolation is a shared architectural concern:** NanoBot merged four PRs addressing context scaffolding leaks; PicoClaw and OpenClaw both have open session/context management issues. This pattern suggests the problem is inherent to how agents handle multi-turn memory across different persistence layers.

4. **Provider ecosystem expansion is a convergent priority:** Zeroclaw (7 new providers) and PicoClaw (OpenAI-compatible embeddings, ChatGPT OAuth) are both investing heavily in provider diversity. This may reflect user demand for flexibility in model selection amid varying API pricing and availability.

5. **No clear cross-project signal on autonomous browser operations:** PicoClaw's #293 (Autonomous Browser Operations) has 8 👍 and 7 comments, but no equivalent feature requests appear in today's OpenClaw, NanoBot, or Zeroclaw digests. This appears to be a PicoClaw-specific interest rather than an ecosystem-wide trend.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-07

## 1. Today's Activity Brief

NanoBot activity on 2026-05-07 was high with **16 issues** and **38 PRs** updated in the last 24 hours. No new releases were published. The project saw significant bug-fixing activity, particularly around runtime context handling (multiple PRs merged to fix context leaking into persisted chat history), channel stability improvements (WeChat silent message loss fixed, WebUI LAN auth tightened), and transcription reliability (Whisper retry logic backported to main). Community engagement remained active with 9 issues closed and 17 PRs merged/closed, while 7 new issues and 21 PRs remain open.

## 2. Releases

**No new releases** were published on 2026-05-07.

---

## 3. Project Progress

### Merged/Closed PRs (17 total)

| PR | Title | Author | Key Changes |
|----|-------|--------|-------------|
| [#3669](https://github.com/HKUDS/nanobot/pull/3669) | Fix/runtime context ephemeral nightly | @T3chC0wb0y | Fixes nightly regression where runtime context scaffolding leaks into persisted chat |
| [#3668](https://github.com/HKUDS/nanobot/pull/3668) | Fix/runtime context ephemeral nightly | @T3chC0wb0y | Alternative fix approach for same regression |
| [#3666](https://github.com/HKUDS/nanobot/pull/3666) | Fix/cli runtime context leak | @T3chC0wb0y | Moves runtime context out of user message content; adds defensive stripping in CLI/history/save paths |
| [#3660](https://github.com/HKUDS/nanobot/pull/3660) | fix(dream): restore cursor with memory state | @Jefsky | Tracks `.dream_cursor` in GitStore so restores roll back cursor; adds regression test |
| [#3661](https://github.com/HKUDS/nanobot/pull/3661) | feat(webui): polish chat UX and slash commands | @Re-bin | Refined sidebar styling, search/grouping, blank new-chat landing, header controls, composer styling, copy action |
| [#3659](https://github.com/HKUDS/nanobot/pull/3659) | fix(weixin): raise exceptions on message send failure | @chengyongru | WeChat channel now raises exceptions instead of silently dropping messages on API errors |
| [#3658](https://github.com/HKUDS/nanobot/pull/3658) | fix(webui): require token_issue_secret for LAN bootstrap | @chengyongru | Requires authentication for LAN access when host is `0.0.0.0` |
| [#3646](https://github.com/HKUDS/nanobot/pull/3646) | fix(transcription): retry Whisper calls on transient failures | @chengyongru | Cherry-picked from nightly; adds exponential backoff retry for 502/503 errors |
| [#3656](https://github.com/HKUDS/nanobot/pull/3656) | fix(webui): allow LAN access when host is 0.0.0.0 | @chengyongru | Skips localhost check when server bound to `0.0.0.0` or `::` |

### Open PRs with Notable Activity

| PR | Title | Author | Status |
|----|-------|--------|--------|
| [#3649](https://github.com/HKUDS/nanobot/pull/3649) | fix(api): add configurable Bearer token authentication | @orbisai0security | **Security fix** — adds optional Bearer-token auth to API server |
| [#3672](https://github.com/HKUDS/nanobot/pull/3672) | chore(ci): Enable full ruff -F checks | @yorkhellen | Upgrades Ruff from `--select F401,F841` to `--select F`; fixes all F821 errors |
| [#3671](https://github.com/HKUDS/nanobot/pull/3671) | Fix/runtime context ephemeral upstream nightly | @T3chC0wb0y | Targets `nightly` branch; keeps runtime context ephemeral without reducing prompt cache reuse |
| [#2526](https://github.com/HKUDS/nanobot/pull/2526) | fix(agent): preserve user message and tool calls when /stop cancels | @pblocz | Long-standing PR (since 2026-03-26) to preserve session state on `/stop` command |
| [#3664](https://github.com/HKUDS/nanobot/pull/3664) | fix: log errors in silent exception handlers | @vystartasv | Fixes bare `except Exception` blocks in Matrix and Weixin channels |
| [#3663](https://github.com/HKUDS/nanobot/pull/3663) | fix(transcription): tolerate chat-style apiBase for Groq/OpenAI | @subalkum | Normalizes transcription endpoint to accept both chat-style base URLs and full `/audio/transcriptions` URLs |
| [#3662](https://github.com/HKUDS/nanobot/pull/3662) | fix(tokens): avoid network loads during estimation | @Jefsky | Avoids calling `tiktoken.get_encoding()` unless encoder is cached; adds offline fallback |
| [#3591](https://github.com/HKUDS/nanobot/pull/3591) | feat(dream): add update scope controls | @Jefsky | Allows disabling Dream or restricting it to memory/context updates |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

1. **[#3618](https://github.com/HKUDS/nanobot/issues/3618)** — `[bug] Error: 'This model is not available in your region.' (code 403)` — **11 comments**
   - Author: @bigsinger | Status: CLOSED
   - Regional model availability error with GLM-4.1 (智谱); user resolved via backup restore

2. **[#3639](https://github.com/HKUDS/nanobot/issues/3639)** — `Proposal: Identity + Onboarding protocols for cross-agent trust` — **3 comments**
   - Author: @vystartasv | Status: CLOSED
   - Proposes Ed25519-based identity protocol and onboarding for NanoBot agents across devices

3. **[#2132](https://github.com/HKUDS/nanobot/issues/2132)** — `Runtime context metadata merged into user messages` — **2 comments**
   - Author: @T3chC0wb0y | Status: CLOSED
   - Related PRs #3666, #3668, #3669, #3671 address this issue

4. **[#3584](https://github.com/HKUDS/nanobot/issues/3584)** — `[bug] DeepSeek API 'reasoning_content' error` — **2 comments**
   - Author: @fcocarrasquel | Status: CLOSED
   - Root cause identified; patch provided for strict API validation error

### Underlying Needs

- **Cross-agent interoperability**: Issue #3639 reflects growing interest in NanoBot deployment across devices, requiring verifiable identity and trust protocols
- **Offline reliability**: Multiple PRs (#3662 token estimation, #3659 WeChat error handling) address degraded behavior when network is unreliable
- **Channel parity**: Ongoing work on WhatsApp, WeChat, Matrix, and WebUI channels suggests users expect consistent behavior across all integration points

---

## 5. Bugs & Stability

### Reported Bugs (ranked by activity/severity)

| Issue | Title | Severity | Status | Fix PR |
|-------|-------|----------|--------|--------|
| [#3665](https://github.com/HKUDS/nanobot/issues/3665) | deepseek-v4-flash "reasoning_content must be passed back" after few queries | **High** | OPEN | — |
| [#3670](https://github.com/HKUDS/nanobot/issues/3670) | Runtime context prompt scaffolding leaks into persisted/replayed chat history | **High** | OPEN | [#3671](https://github.com/HKUDS/nanobot/pull/3671) |
| [#3638](https://github.com/HKUDS/nanobot/issues/3638) | 100% CPU leak via MCP `streamable_http_client` cancel-scope mismatch | **High** | CLOSED | — |
| [#3637](https://github.com/HKUDS/nanobot/issues/3637) | Transcription Provider Configuration Not Transparent Enough | Medium | OPEN | [#3663](https://github.com/HKUDS/nanobot/pull/3663) |
| [#3633](https://github.com/HKUDS/nanobot/issues/3633) | Duplicate item found with id error when using GPT | Medium | OPEN | — |
| [#3605](https://github.com/HKUDS/nanobot/issues/3605) | Safety guard abort silently drops the turn | Medium | CLOSED | — |
| [#3625](https://github.com/HKUDS/nanobot/issues/3625) | WhatsApp sends each LLM token as separate message with `supports_progress_deltas = True` | Medium | CLOSED | — |
| [#3597](https://github.com/HKUDS/nanobot/issues/3597) | NanoBot confused and couldn't access workspace root | Low | CLOSED | — |

### Notable Stability Fixes Merged

- **WeChat silent message loss** (#3659): Messages no longer permanently lost on API errors
- **Whisper transient failures** (#3646): Exponential backoff retry added for 502/503 errors
- **WebUI LAN security** (#3658): Token authentication now required for LAN bootstrap
- **Dream cursor rollback** (#3660): Restores now properly roll back `.dream_cursor`

---

## 6. Feature Request Clusters

### Active Feature Requests

| Issue/PR | Title | Author | Cluster |
|----------|-------|--------|---------|
| [#3652](https://github.com/HKUDS/nanobot/issues/3652) | Can Dream be disabled? | @skyline75489 | Dream controls |
| [#3591](https://github.com/HKUDS/nanobot/pull/3591) | feat(dream): add update scope controls | @Jefsky | Dream controls |
| [#3650](https://github.com/HKUDS/nanobot/issues/3650) | Configure bot name and icon | @mraad | Customization |
| [#3647](https://github.com/HKUDS/nanobot/issues/3647) | Suggestion: Use local tokenizer for estimating prompt tokens | @hudaxian999 | Tokenization |
| [#3662](https://github.com/HKUDS/nanobot/pull/3662) | fix(tokens): avoid network loads during estimation | @Jefsky | Tokenization |
| [#3467](https://github.com/HKUDS/nanobot/pull/3467) | feat(command): add /clear command to reset session history | @LeoFYH | Commands |
| [#2526](https://github.com/HKUDS/nanobot/pull/2526) | fix(agent): preserve user message and tool calls when /stop cancels | @pblocz | Session management |
| [#3639](https://github.com/HKUDS/nanobot/issues/3639) | Identity + Onboarding protocols for cross-agent trust | @vystartasv | Identity/Trust |
| [#1443](https://github.com/HKUDS/nanobot/pull/1443) | feat: decouple heartbeat reasoning from notification | @phelps-sg | Heartbeat |
| [#3649](https://github.com/HKUDS/nanobot/pull/3649) | fix(api): add configurable Bearer token authentication | @orbisai0security | Security |

### Request Themes

- **Dream configurability**: Users want granular control over Dream feature (disable, scope restrictions)
- **Offline tokenization**: Local tokenizer to avoid network dependency during prompt estimation
- **Customization**: Bot name/icon configuration for brand consistency
- **Security hardening**: Bearer token authentication for API server

---

## 7. User Feedback Summary

### Pain Points Reported

1. **Regional model availability**: User @bigsinger experienced complete service outage due to GLM-4.1 regional restrictions; resolved via backup restore ([#3618](https://github.com/HKUDS/nanobot/issues/3618))

2. **Workspace access confusion**: User @fablau reported NanoBot couldn't save files to workspace root, causing draft X post task failure ([#3597](https://github.com/HKUDS/nanobot/issues/3597))

3. **Silent failures**: User @rytyr reported safety guard aborts silently drop turns with no retry or error message to user ([#3605](https://github.com/HKUDS/nanobot/issues/3605))

4. **WhatsApp token spam**: User @basil reported each LLM token sent as separate WhatsApp message when using providers with `supports_progress_deltas = True` ([#3625](https://github.com/HKUDS/nanobot/issues/3625))

5. **DeepSeek reasoning errors**: Multiple users (@fcocarrasquel, @tomjuggler) hit `reasoning_content` validation errors with DeepSeek models ([#3584](https://github.com/HKUDS/nanobot/issues/3584), [#3665](https://github.com/HKUDS/nanobot/issues/3665))

### Positive Feedback

- Issue #3639 (Identity proposal) received community interest, indicating users value NanoBot's lightweight design (~4,000 lines) for mobile/edge deployment
- Quick turnaround on WeChat silent message loss fix (#3659) demonstrates responsive maintenance

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Title | Age | Status | Notes |
|-------|-------|-----|--------|-------|
| [#2526](https://github.com/HKUDS/nanobot/issues/2526) | Preserve user message and tool calls when /stop cancels | ~42 days | OPEN | PR #2526 exists but not merged; affects session state preservation |
| [#1443](https://github.com/HKUDS/nanobot/pull/1443) | Decouple heartbeat reasoning from notification | ~66 days | OPEN | Long-standing feature request; changes heartbeat default behavior |
| [#3665](https://github.com/HKUDS/nanobot/issues/3665) | deepseek-v4-flash reasoning_content error | 1 day | OPEN | High-severity; no fix PR yet |
| [#3670](https://github.com/HKUDS/nanobot/issues/3670) | Runtime context leaks into persisted chat (nightly) | 1 day | OPEN | Fix PR #3671 exists but not yet merged |
| [#3633](https://github.com/HKUDS/nanobot/issues/3633) | Duplicate item id error with GPT | 2 days | OPEN | Blocks GPT/Codex usage |
| [#3637](https://github.com/HKUDS/nanobot/issues/3637) | Transcription config not transparent | 1 day | OPEN | Fix PR #3663 exists |

### Stale PRs

| PR | Title | Age | Status | Notes |
|----|-------|-----|--------|-------|
| [#2526](https://github.com/HKUDS/nanobot/pull/2526) | fix(agent): preserve user message and tool calls when /stop cancels | ~42 days | OPEN | Awaiting review/merge |
| [#3467](https://github.com/HKUDS/nanobot/pull/3467) | feat(command

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest — 2026-05-07

## 1. Today's Activity Brief

Zeroclaw saw high activity on May 7, 2026, with **50 issues and 50 PRs updated** in the last 24 hours. No new releases shipped today, though a version-bump PR (#6492) to v0.7.5 is open. The project is actively expanding its provider ecosystem with seven new model provider PRs merged or in progress (Inception Labs, Lambda AI, Arcee AI, Featherless AI, Upstage Solar, GitHub Models, Morph), and four new channel integrations are being developed (Zulip, Rocket.Chat, Mastodon, Twilio SMS). Several high-severity bugs—particularly around WhatsApp Web, the gateway, and Matrix channels—are under active investigation.

---

## 2. Releases

**No new releases today.** The last release milestone (v0.7.5) is tracked in issue #5878, with the version-bump PR #6492 currently open.

---

## 3. Project Progress

### Merged/Closed PRs

| PR | Title | Status |
|----|-------|--------|
| [#6369](https://github.com/zeroclaw-labs/zeroclaw/pull/6369) | fix(web): agent tool button height | CLOSED |
| [#6486](https://github.com/zeroclaw-labs/zeroclaw/pull/6486) | fix(docs): generate lang switcher before mdbook sync | OPEN |
| [#6490](https://github.com/zeroclaw-labs/zeroclaw/pull/6490) | fix(web,runtime): human-readable integration category labels | OPEN |
| [#6473](https://github.com/zeroclaw-labs/zeroclaw/pull/6473) | docs: clarify review and PR workflow guidance | OPEN |

### Notable Open PRs

| PR | Title | Size | Risk |
|----|-------|------|------|
| [#6492](https://github.com/zeroclaw-labs/zeroclaw/pull/6492) | chore: bump version to v0.7.5 | XS | low |
| [#6417](https://github.com/zeroclaw-labs/zeroclaw/pull/6417) | feat(providers): separate llama.cpp into dedicated provider kind | XL | high |
| [#6403](https://github.com/zeroclaw-labs/zeroclaw/pull/6403) | feat(config,providers): typed-family split for model + TTS providers | XL | high |
| [#6491](https://github.com/zeroclaw-labs/zeroclaw/pull/6491) | feat: integrate Atomic Chat as local OpenAI-compatible runtime provider | — | — |
| [#6230](https://github.com/zeroclaw-labs/zeroclaw/pull/6230) | fix(cron): allow whatsapp as cron delivery channel | M | medium |
| [#6392](https://github.com/zeroclaw-labs/zeroclaw/pull/6392) | feat(gateway,web): nodes dashboard + device identification | XL | high |
| [#6370](https://github.com/zeroclaw-labs/zeroclaw/pull/6370) | feat(gateway,web): dashboard self-update flow | L | low |
| [#6117](https://github.com/zeroclaw-labs/zeroclaw/pull/6117) | feat(codex): support native Responses tool calls | L | high |
| [#6306](https://github.com/zeroclaw-labs/zeroclaw/pull/6306) | fix(matrix): avoid duplicate inbound replies | S | high |

### New Model Provider PRs

| PR | Provider |
|----|----------|
| [#6463](https://github.com/zeroclaw-labs/zeroclaw/pull/6463) | Inception Labs (Mercury) |
| [#6462](https://github.com/zeroclaw-labs/zeroclaw/pull/6462) | Lambda AI Inference |
| [#6461](https://github.com/zeroclaw-labs/zeroclaw/pull/6461) | Arcee AI |
| [#6460](https://github.com/zeroclaw-labs/zeroclaw/pull/6460) | Featherless AI |
| [#6459](https://github.com/zeroclaw-labs/zeroclaw/pull/6459) | Upstage Solar |
| [#6445](https://github.com/zeroclaw-labs/zeroclaw/pull/6445) | GitHub Models |
| [#6440](https://github.com/zeroclaw-labs/zeroclaw/pull/6440) | Morph |

---

## 4. Community Hot Topics

### Most-Discussed Issues

| Issue | Title | Comments | Link |
|-------|-------|----------|------|
| #4710 | [Feature]: A better LOGO of Zeroclaw | 10 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) |
| #5878 | release: v0.7.5 milestone tracking | 8 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5878) |
| #6246 | [Bug]: WhatsApp Web channel: pair succeeds but messages don't flow after April 2026 server-side protocol bump | 4 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) |
| #6472 | [Bug]: gateway can not use postgres | 2 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6472) |
| #6413 | [Bug]: WhatsApp Web channel reacts to own-account outbound messages | 2 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6413) |

**Analysis:** The community is most engaged with the logo redesign discussion (10 comments), indicating interest in brand identity. The v0.7.5 release tracking issue is drawing attention as the release approaches. WhatsApp Web reliability issues—particularly around the April 2026 protocol bump and self-message handling—are generating significant concern, reflecting heavy reliance on this channel.

---

## 5. Bugs & Stability

### Critical/High Severity (P0–P1)

| Issue | Title | Severity | Status | Fix PR |
|-------|-------|----------|--------|--------|
| [#6487](https://github.com/zeroclaw-labs/zeroclaw/issues/6487) | Multi-alias channel instances silently clobber each other; shared Matrix state_dir corrupts sessions | S1 (P0 blocker) | OPEN | — |
| [#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) | WhatsApp Web: messages don't flow after April 2026 protocol bump | S1 (P1) | OPEN | — |
| [#6472](https://github.com/zeroclaw-labs/zeroclaw/issues/6472) | Gateway cannot use postgres (runtime panic) | S2 (P1) | OPEN | — |
| [#6474](https://github.com/zeroclaw-labs/zeroclaw/issues/6474) | Slack channel: 1 user request invokes LLM twice repeatedly | P1 | IN-PROGRESS | — |
| [#6413](https://github.com/zeroclaw-labs/zeroclaw/issues/6413) | WhatsApp Web reacts to own-account outbound messages | S1 (P1) | CLOSED | — |
| [#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) | Shell tool calls refused at `[autonomy] level = "full"` | S1 (P1) | OPEN | — |
| [#6418](https://github.com/zeroclaw-labs/zeroclaw/issues/6418) | Fallback providers fail to inherit credentials from config.toml | S0 (P1) | CLOSED (duplicate) | — |

### Medium Severity (P2)

| Issue | Title | Severity | Status |
|-------|-------|----------|--------|
| [#6433](https://github.com/zeroclaw-labs/zeroclaw/issues/6433) | Heartbeat not working with Matrix channel | S1 (P2) | OPEN |
| [#6431](https://github.com/zeroclaw-labs/zeroclaw/issues/6431) | SQLite memory schema init fails during concurrent startup | S2 (P2) | IN-PROGRESS |
| [#6419](https://github.com/zeroclaw-labs/zeroclaw/issues/6419) | WorkspaceManager fails to load profiles at runtime startup | S0 (P2) | OPEN |
| [#6422](https://github.com/zeroclaw-labs/zeroclaw/issues/6422) | cron_add: unhelpful error for plain string schedule input | P2 | OPEN |

**Note:** PR #6306 addresses duplicate Matrix event handlers, which may relate to #6433.

---

## 6. Feature Request Clusters

### New Model Providers (7 PRs open)
Expanding the provider ecosystem with OpenAI-compatible endpoints:
- **Morph** (#6439, #6440) — fast apply-edits for coding-agent flows
- **Inception Labs Mercury** (#6458, #6463) — diffusion-based language models
- **Lambda AI** (#6457, #6462) — GPU-cloud hosted open-weight models
- **Arcee AI** (#6456, #6461) — small, fine-tuned specialist models
- **Featherless AI** (#6455, #6460) — serverless inference platform
- **Upstage Solar** (#6459) — Korea-built foundation model
- **GitHub Models** (#6445) — free-tier inference

### New Channel Integrations (4 issues in-progress)
- **Zulip** (#6437) — long-poll events MVP
- **Rocket.Chat** (#6435) — REST polling MVP
- **Mastodon** (#6423) — ActivityPub support
- **Twilio SMS** (#6427) — gateway-routed webhook + REST send

### Gateway & Dashboard Enhancements
- **Nodes dashboard** (#6392) — fleet health and device identification
- **Self-update flow** (#6370) — "Update ZeroClaw" button in dashboard
- **Typed-family provider config** (#6403, #6273) — schema restructuring

### Architectural Proposals
- **"Everything is a plugin"** (#6489) — phased path from Integrations to unified plugin catalog
- **Human-readable category labels** (#6488, #6490) — fix dead headings in Integrations page

---

## 7. User Feedback Summary

### Pain Points Reported

1. **WhatsApp Web reliability** — Users report message flow breaking after the April 2026 WhatsApp server-side protocol bump (#6246). This blocks workflows for personal-mode users.

2. **Gateway postgres runtime panic** — A tokio runtime conflict prevents the gateway from using postgres memory backend (#6472), causing degraded behavior.

3. **Shell tool autonomy** — Despite `[autonomy] level = "full"` and permissive config, shell tool calls are refused (#6434), blocking automated workflows.

4. **SQLite concurrent initialization** — Schema init fails when multiple ZeroClaw components start simultaneously (#6431), causing degraded behavior.

5. **Cron schedule error messages** — Passing a plain string to `cron_add`'s schedule parameter yields an unhelpful error (#6422).

6. **Documentation gap** — Users request clearer documentation on skills format and how to add them (#5863).

### Use Cases Highlighted
- Multi-agent deployments with separate Matrix channel instances (currently broken by #6487)
- Local inference with Atomic Chat (#6491) and llama.cpp (#6417)
- Cross-platform messaging via Zulip, Rocket.Chat, Mastodon, and SMS channels

---

## 8. Backlog Watch

### Long-Unanswered Important Issues

| Issue | Title | Age | Comments | Priority | Notes |
|-------|-------|-----|----------|----------|-------|
| [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) | [Feature]: A better LOGO of Zeroclaw | ~6 weeks | 10 | P2 | Status: accepted; awaiting design work |
| [#5878](https://github.com/zeroclaw-labs/zeroclaw/issues/5878) | release: v0.7.5 milestone tracking | ~3 weeks | 8 | P1 | Active release tracking |
| [#5863](https://github.com/zeroclaw-labs/zeroclaw/issues/5863) | [Feature]: Document about skills wanted | ~3 weeks | 2 | P2 | Awaiting docs response |
| [#6151](https://github.com/zeroclaw-labs/zeroclaw/issues/6151) | [Feature]: Track: web interaction platform — onboarding, stability, and chat UX | ~10 days | 1 | P1 | CLOSED; may need follow-up |

### PRs Needing Maintainer Attention

| PR | Title | Age | Notes |
|----|-------|-----|-------|
| [#6417](https://github.com/zeroclaw-labs/zeroclaw/pull/6417) | feat(providers): separate llama.cpp into dedicated provider kind | ~1 day | XL size, high risk; awaiting review |
| [#6403](https://github.com/zeroclaw-labs/zeroclaw/pull/6403) | feat(config,providers): typed-family split for model + TTS providers | ~2 days | XL size, high risk; targets integration/v0.8.0 |
| [#6117](https://github.com/zeroclaw-labs/zeroclaw/pull

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-07

## 1. Today's Activity Brief

PicoClaw saw high development activity on 2026-05-07, with **21 issues** and **62 pull requests** updated in the last 24 hours. A new nightly build (**v0.2.8-nightly.20260507.788cda5c**) was published, with 41 PRs remaining open and 21 merged or closed. The community filed multiple new bug reports and feature requests, while several long-standing issues advanced through code review. The project continues to iterate rapidly across providers, channels, and agent capabilities.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| **v0.2.8-nightly.20260507.788cda5c** | Nightly | Automated build; may be unstable. Full changelog: https://github.com/sipeed/picoclaw/compare/v0.2.8...main |

No stable release today. The nightly build includes changes merged up to 2026-05-07.

---

## 3. Project Progress

### Merged/Closed PRs (21 total updated; selected highlights)

| PR | Author | Domain | Summary |
|----|--------|--------|---------|
| [#2629](https://github.com/sipeed/picoclaw/pull/2629) | @wj-xiao | tools | Centralized web search provider readiness and selection; enables native-search-capable models to use built-in search when `tools.web.prefer_native` is set |
| [#2624](https://github.com/sipeed/picoclaw/pull/2624) | @badgerbees | provider | Added OpenAI-compatible embeddings support for vLLM-style endpoints; handles local vector truncation and preserves existing dimensions |
| [#2610](https://github.com/sipeed/picoclaw/pull/2610) | @imguoguo | ci | Release workflow now supports releasing from an existing tag without creating a new one at HEAD |
| [#2606](https://github.com/sipeed/picoclaw/pull/2606) | @dsus4wang | channel | Enhanced WeChat channel multi-instance support, validation, and error handling |
| [#2411](https://github.com/sipeed/picoclaw/pull/2411) | @imalasong | provider | Fixed split SSE stream chunk parsing to preserve partial payloads only when JSON is incomplete |
| [#2192](https://github.com/sipeed/picoclaw/pull/2192) | @whtiehack | provider | Fixed `anthropic_messages` provider to send system prompts as content blocks with `cache_control`, matching SDK behavior |

### Open PRs Under Review (selected)

| PR | Author | Domain | Summary |
|----|--------|--------|---------|
| [#2778](https://github.com/sipeed/picoclaw/pull/2778) | @bogdanovich | agents | Adds `working_summary` tool feedback style for chat channels — shows compact in-place progress messages during tool execution |
| [#2788](https://github.com/sipeed/picoclaw/pull/2788) | @LiusCraft | session | Adds per-message `created_at` timestamps to the Session API |
| [#2770](https://github.com/sipeed/picoclaw/pull/2770) | @Gabrielsv01 | config | Adds a dedicated MCP section to the web Config UI for managing MCP settings and servers |
| [#2715](https://github.com/sipeed/picoclaw/pull/2715) | @is-Xiaoen | provider/agent | Attributes history messages per sender for multi-user group chats (Discord, Telegram groups, Slack) |
| [#2691](https://github.com/sipeed/picoclaw/pull/2691) | @dtapps | tool | Adds a new `get_current_time` utility tool supporting multiple formats and timezones |
| [#2679](https://github.com/sipeed/picoclaw/pull/2679) | @tbeaudouin05 | provider | Enables ChatGPT subscription (OAuth) in PicoClaw; fixes empty Codex responses |
| [#2413](https://github.com/sipeed/picoclaw/pull/2413) | @ex-takashima | channel | Refactors LINE channel to use official LINE Bot SDK v8, replacing ~270 lines of hand-rolled code |
| [#2311](https://github.com/sipeed/picoclaw/pull/2311) | @Alix-007 | session | Preserves archived chat history after summarization truncation (fixes #2310) |
| [#2383](https://github.com/sipeed/picoclaw/pull/2383) | @Alix-007 | gateway | Adds `picoclaw gateway stop` and `picoclaw gateway status` CLI commands |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Author | Type | Comments | Summary |
|-------|--------|------|----------|---------|
| [#629](https://github.com/sipeed/picoclaw/issues/629) | @manhnt9 | bug | 12 | LLM call failures (HTTP 500) do not trigger retry; tasks hang indefinitely |
| [#1042](https://github.com/sipeed/picoclaw/issues/1042) | @icyfire | bug | 7 | `exec` tool's `guardCommand` method incorrectly flags valid commands as path traversal violations |
| [#293](https://github.com/sipeed/picoclaw/issues/293) | @Zepan | roadmap | 7 | Feature request: Autonomous Browser Operations — allow AI to interact with websites directly |
| [#2548](https://github.com/sipeed/picoclaw/issues/2548) | @andrebruton | bug | 6 | Multiple authentication credentials received error when configuring Gemini provider |
| [#2367](https://github.com/sipeed/picoclaw/issues/2367) | @aquaratixc | bug | 6 | Android app: last screen title remains in Chinese when English is selected |
| [#2368](https://github.com/sipeed/picoclaw/issues/2368) | @aquaratixc | bug | 5 | Android app: local model shows "not configured" even after all fields are filled |
| [#2310](https://github.com/sipeed/picoclaw/issues/2310) | @liuxiaobo007 | bug | 5 | Chat history only shows last 1–2 messages after page reload; session files incomplete |
| [#2217](https://github.com/sipeed/picoclaw/issues/2217) | @MaoJianwei | enhancement | 4 | Feature request: dashboard showing token consumption statistics for WebUI |

### Underlying Needs

- **Reliability**: Multiple issues (#629, #2548, #2769) highlight authentication and retry failures across providers, indicating gaps in error handling.
- **Multi-instance & multi-user**: Several issues and PRs (#2606, #2715, #2368) reflect growing adoption in group chat and multi-user scenarios.
- **Web automation**: Issue #293 (Autonomous Browser Operations) has 8 👍 and signals demand for extending PicoClaw beyond API-based interactions to direct web UI control.
- **Localization**: Issue #2367 (Chinese UI text persisting in English mode) indicates incomplete i18n coverage in the Android app.

---

## 5. Bugs & Stability

Ranked by potential impact:

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#2769](https://github.com/sipeed/picoclaw/issues/2769) | PicoClaw returns 401 Invalid API Key across multiple providers (Groq, OpenRouter, Nvidia) despite valid keys | No |
| **High** | [#629](https://github.com/sipeed/picoclaw/issues/629) | No retry on LLM call failure (HTTP 500); tasks hang | No |
| **High** | [#2704](https://github.com/sipeed/picoclaw/issues/2704) | DingTalk SDK panic crashes the gateway due to race condition in stream SDK | No |
| **Medium** | [#1042](https://github.com/sipeed/picoclaw/issues/1042) | `exec` tool incorrectly blocks valid commands (e.g., `curl wttr.in/Beijing`) | No |
| **Medium** | [#2787](https://github.com/sipeed/picoclaw/issues/2787) | Session messages lack individual timestamps; all share `session.updated` time | [#2788](https://github.com/sipeed/picoclaw/pull/2788) open |
| **Medium** | [#2780](https://github.com/sipeed/picoclaw/issues/2780) | Reloading config breaks voice recognition (groq-asr) | No |
| **Medium** | [#2621](https://github.com/sipeed/picoclaw/issues/2621) | Session context lost after API timeout; creates duplicate default session | No |
| **Low** | [#2785](https://github.com/sipeed/picoclaw/issues/2785) | Feishu only shows first tool call message in notification center when `separate_messages` is enabled | No |
| **Low** | [#2784](https://github.com/sipeed/picoclaw/issues/2784) | README documents incorrect Baidu Search free tier quota (1000/day vs actual 50/day) | No |

**Note**: Issue [#2786](https://github.com/sipeed/picoclaw/issues/2786) (same timestamp issue) was closed, with the fix in PR [#2788](https://github.com/sipeed/picoclaw/pull/2788).

---

## 6. Feature Request Clusters

### Active Feature Requests

| Cluster | Issue/PR | Author | Summary |
|---------|----------|--------|---------|
| **Browser Automation** | [#293](https://github.com/sipeed/picoclaw/issues/293) | @Zepan | Autonomous browser operations — navigate pages, extract data, perform actions |
| **MCP Enhancements** | [#2782](https://github.com/sipeed/picoclaw/issues/2782) | @oawbz | MCP client should support Streamable HTTP transport (newer MCP servers require this) |
| **MCP UI** | [#2770](https://github.com/sipeed/picoclaw/pull/2770) | @Gabrielsv01 | Dedicated MCP section in web Config UI (PR open) |
| **Token Dashboard** | [#2217](https://github.com/sipeed/picoclaw/issues/2217) | @MaoJianwei | WebUI dashboard for token consumption statistics |
| **Time Tool** | [#2691](https://github.com/sipeed/picoclaw/pull/2691) | @dtapps | `get_current_time` utility tool (PR open) |
| **OpenCode Provider** | [#2671](https://github.com/sipeed/picoclaw/issues/2671) | @zcj1122-rgb | Support for OpenCode's Zen and Go subscriptions |
| **DeepSeek Thinking** | [#2706](https://github.com/sipeed/picoclaw/issues/2706) | @wowowowowowowowonojieba | Support DeepSeek v4 thinking model (requires passing `reasoning_content` in follow-up requests) |
| **Subagent Identity** | [#2775](https://github.com/sipeed/picoclaw/issues/2775) | @sdjeny | Sub-agents inherit root agent's AGENT.md, causing role identity confusion |
| **Multi-user Group Chat** | [#2715](https://github.com/sipeed/picoclaw/pull/2715) | @is-Xiaoen | Attribute history messages per sender (PR open) |
| **Working Summary UI** | [#2778](https://github.com/sipeed/picoclaw/pull/2778) | @bogdanovich | In-place tool progress feedback for chat channels (PR open) |
| **.env Support** | [#2623](https://github.com/sipeed/picoclaw/issues/2623) | @zphiliam | Pass environment variables to custom skills via `.env` file (closed) |

---

## 7. User Feedback Summary

### Pain Points

- **Authentication failures**: Multiple users report 401 errors across providers despite valid API keys (#2769, #2548), suggesting a systemic issue in credential handling or header construction.
- **Retry behavior**: The lack of automatic retry on transient LLM failures (#629) causes tasks to hang, which is particularly problematic for long-running operations.
- **Chat history loss**: Users report that session history becomes incomplete after page reload or summarization (#2310, #2311), making it difficult to review past conversations.
- **Android app localization**: The Android app retains Chinese text in the UI even when English is selected (#2367), indicating incomplete i18n implementation.
- **Local model configuration**: Android users cannot select locally configured models due to persistent "not configured" status (#2368).
- **DingTalk stability**: The gateway crashes when the DingTalk SDK encounters a race condition (#2704), affecting production deployments.

### Use Cases & Satisfaction Signals

- **Group chat adoption**: Growing interest in multi-user scenarios (Discord, Telegram groups, Slack) is evident from issue #2715 and related PRs.
- **Web search integration**: The improved web search provider fallback (#2629) addresses a common need for reliable search across different backends.
- **MCP ecosystem**: Users are actively trying to connect newer MCP servers that use Streamable HTTP transport (#2782), indicating strong interest in the MCP integration ecosystem.
- **Token monitoring**: Request for a token consumption dashboard (#2217) suggests users are running PicoClaw at scale and need cost visibility.

---

## 8. Backlog Watch

Issues or PRs that are stale, long-running, or need maintainer attention:

| Item | Age | Status | Notes |
|------|-----|--------|-------|
| [#293](https://github.com/sipeed/picoclaw/issues/293) — Autonomous Browser Operations | ~80 days | Open | High community interest (8 👍); roadmap-level feature; no clear implementation path yet |
| [#629](https://github.com/sipeed/picoclaw/issues/629) — No retry on LLM failure | ~84 days | Open | 12 comments; high severity; no PR yet |
| [#1042](https://github.com/sipeed/picoclaw/issues/1042) — exec guardCommand false positives | ~64 days | Open | 7 comments; affects weather/tools use cases |
| [#2775](https://github.com/sipeed/picoclaw/issues/2775) — Sub-agent identity confusion | 2 days | Open | New but important architectural issue |
| [#2782](https://github.com/sipeed/picoclaw/issues/2782) — MCP Streamable HTTP | 1 day | Open | Growing MCP ecosystem compatibility gap |
| [#2769](https://github.com/sipeed/picoclaw/issues/2769) — 401 across providers | 3 days | Open | Affects multiple providers; likely systemic |
| [#2706](https://github.com/sipeed/picoclaw/issues/2706) — DeepSeek v4 thinking | 8 days | Open | Requires architectural change to preserve `reasoning_content` |
| [#2199](https://github.com/sipeed/picoclaw/pull/2199) — Telegram reply context | ~38 days | Open | Stale; addresses command vs. reply behavior |
| [#2183](https://github.com/sipeed/picoclaw/pull/2183) — Subagent model ID normalization | ~38 days | Open | Stale; related to #2775 |
| [#2309](https://github.com/sipeed/picoclaw/pull/2309) — Normalize tool-call history | ~35 days | Open | Stale |
| [#2306](https://github.com/sipeed/picoclaw/pull/2306) — Honor thinking_level | ~35 days | Open | Stale |

**Observations**: Several PRs from @Alix-007 addressing agent behavior, session handling, and Telegram integration have been in review for 30+ days without merge or closure. The autonomous browser operations roadmap item (#293) has been open since mid-February with significant community interest but no visible implementation progress.

---

*Digest generated from GitHub data for github.com/sipeed/picoclaw on 2026-05-07.*

</details>