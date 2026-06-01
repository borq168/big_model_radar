# OpenClaw Ecosystem Digest 2026-06-01

> Issues: 500 | PRs: 500 | Projects covered: 4 | Generated: 2026-06-01 02:47 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-06-01

## Today's Activity Brief

OpenClaw saw very high activity on 2026-06-01, with **500 issues** and **500 pull requests** updated in the last 24 hours (284 open/active issues, 216 closed; 201 open PRs, 299 merged/closed). **4 new beta releases** were published (v2026.5.31-beta.1 through beta.4), all sharing identical highlights focused on recovery of agents and CLI-backed runtimes from interrupted tool calls, stale session bindings, compaction handoffs, and media delivery retries, plus steadier channel delivery across Telegram, WhatsApp, iMessage, and Slack. The project shipped fixes for several P1 regressions including Anthropic thinking block signature expiry, Codex app-server startup exhaustion, and auth cooldown config forcing full gateway restarts.

## Releases

**4 releases** published today, all `2026.5.31` beta variants:

- **v2026.5.31-beta.1**
- **v2026.5.31-beta.2**
- **v2026.5.31-beta.3**
- **v2026.5.31-beta.4**

All share identical release notes:

> **Highlights**
> - Agents and CLI-backed runtimes recover more cleanly from interrupted tool calls, stale session bindings, compaction handoffs, and media delivery retries. (#88129, #88136, #88141, #88162, #88182)
> - Channels and mobile delivery are steadier across Telegram, WhatsApp, iMessage, Slack

No breaking changes or migration notes were mentioned in the release entries.

## Project Progress

**299 PRs were merged or closed** in the last 24 hours. Notable closed items based on data:

- **#88020 [CLOSED]** — Fix for Anthropic `Invalid signature in thinking block` regression where sessions with extended thinking failed hard instead of performing recovery retry. (`REPLAY_INVALID_RE` missing)
- **#87801 [CLOSED]** — `supportsAdaptiveThinking()` now properly includes `opus-4-8`, resolving 400 errors on reasoning-enabled requests.
- **#88443 [CLOSED]** — Fix for auth cooldown config changes forcing full gateway restart and dropping in-flight CLI runs.
- **#88873 [CLOSED]** — Hardened Agent OS full-local Docker substrate (loopback publish, isolated Blackboard DB, package inclusion).
- **#88877 [OPEN — new]** — Recognizes npm shrinkwrap in update status (fixes #87732).

Among merging PRs, notable structural changes advanced:
- **#88504** — Adds multi-slot memory role architecture (memory.recall, compaction, capture, etc.)
- **#84758** — Subagent execution backend placement contract (first implementation for #82017)
- **#78441** — Forwards `toolsAllow` from `sessions_spawn` to subagent runs
- **#87072** — Opt-in interleaved progress lane for Telegram (reasoning + structured events in one live message)

## Community Hot Topics

The following issues and PRs attracted the most comments and reactions today:

- **#32296** [OPEN, P1] *Session context confusion bug: Agent replies to previous message instead of current.* 13 comments, 1 👍. Created March 2 — still unresolved. [View](https://github.com/openclaw/openclaw/issues/32296)
- **#87307** [OPEN, P1] *Matrix thread replies sent as normal replies on 2026.5.22; /status and /model silent.* 11 comments, 1 👍. [View](https://github.com/openclaw/openclaw/issues/87307)
- **#13583** [OPEN, P2] *Feature: Pre-response enforcement hooks (hard gates) for mandatory tool-call / policy rules.* 11 comments, 2 👍. [View](https://github.com/openclaw/openclaw/issues/13583)
- **#78308** [OPEN] *Channel-mediated approval for MCP tool calls (consent envelope).* 11 comments, 1 👍. [View](https://github.com/openclaw/openclaw/issues/78308)
- **#88788** [OPEN, P2] *GHCR 2026.5.28 image emits stale Discord progress commentary config schema.* 9 comments, 1 👍. [View](https://github.com/openclaw/openclaw/issues/88788)
- **#75739** [CLOSED] *Codex harness migration: runtime-routing bugs with fallback and OAuth.* 9 comments, 3 👍. [View](https://github.com/openclaw/openclaw/issues/75739)
- **#83959** [OPEN, P1] *Codex app-server startup retries exhaust before replacement server ready.* 8 comments. [View](https://github.com/openclaw/openclaw/issues/83959)

**Underlying needs:** Users are experiencing session-state confusion and message delivery failures across multiple channels (Matrix, Telegram, Discord). The core patterns are (a) session context not correctly tracking which message to reply to, (b) delivery retry leading to duplicate or misrouted messages, and (c) tool-call approval pipelines lacking for non-shell operations. The high comment count on #32296 (open since March) suggests this is a persistent and impactful issue.

## Bugs & Stability

**Critical/P1 bugs with active discussion:**

| Issue | Severity | Impact | Fix PR Exists? |
|---|---|---|---|
| [#32296](https://github.com/openclaw/openclaw/issues/32296) — Session context confusion (agent replies to wrong message) | P1 | session-state, message-loss | No (open since March) |
| [#87307](https://github.com/openclaw/openclaw/issues/87307) — Matrix thread reply regression | P1 | session-state, message-loss | No |
| [#83959](https://github.com/openclaw/openclaw/issues/83959) — Codex app-server startup retries exhaust | P1 | crash-loop | No |
| [#85251](https://github.com/openclaw/openclaw/issues/85251) — Codex app-server goes silent after turn/started | P1 | session-state, message-loss | No |
| [#86047](https://github.com/openclaw/openclaw/issues/86047) — Codex plugin approval stalls in Nextcloud Talk | P1 | session-state, message-loss | No |
| [#86996](https://github.com/openclaw/openclaw/issues/86996) — Active Memory + Codex path causes latency/aborts | P1 | message-loss, auth-provider, crash-loop | No |
| [#45494](https://github.com/openclaw/openclaw/issues/45494) — Cron jobs silently time out during LLM outages | P1 | data-loss | No |

**Recent fixes (today's releases address):**
- **#88020** — Anthropic thinking block signature expiry recovery (closed)
- **#87801** — opus-4-8 adaptive thinking support (closed)
- **#88443** — Auth cooldown config restart regression (closed)

**Newly reported issues:**
- **#88596** [OPEN] — xAI models report incorrect context window (200k vs 1M), root cause identified as `long_context_threshold` misinterpretation. 4 comments. [View](https://github.com/openclaw/openclaw/issues/88596)
- **#88788** [OPEN] — GHCR 2026.5.28 Docker image emits stale config schema rejecting Discord progress commentary. [View](https://github.com/openclaw/openclaw/issues/88788)
- **#86029** — Gateway PR to surface cost telemetry in `agent.wait` response (still open).
- **#87326** — Telegram streaming: intermediate text blocks between tool calls silently lost (overwritten). 5 comments. [View](https://github.com/openclaw/openclaw/issues/87326)

## Feature Request Clusters

**Memory architecture:**
- Multiple PRs advancing memory subsystem: **#88504** (multi-slot memory roles), **#88830** (dreaming shadow trial candidate scoring), **#88238** (batch memory embeddings across files), **#88806** (reject envelope metadata sludge in lancedb)
- Cluster suggests users want composable, non‑global memory backends and better embedding pipeline resilience.

**Execution placement and subagents:**
- **#84758** adds subagent execution backend placement contract
- **#78441** forwards `toolsAllow` from `sessions_spawn`
- **#78055** [OPEN] reports subagents delivering stale output/unrelated history
- Users want fine-grained control over where subagents run and what tools they can access.

**Channel delivery improvements:**
- **#87072** — Opt-in interleaved progress lane for Telegram
- **#88245** — Refactor WhatsApp inbound message contexts
- **#87307** — Matrix thread reply regression
- **#77359** — Slash commands not registered for non-default Discord accounts
- **#77666** — Feishu group messages receive 0 replies
- **#79308** — Telegram group replies sent to wrong chat_id (DM instead of group)
- Pattern: multi-account and channel-specific delivery logic still requires hardening.

**Tool-call / policy enforcement:**
- **#13583** — Hard gates (pre-response enforcement hooks) — 2 👍, 11 comments
- **#78308** — Channel-mediated approval for MCP tool calls — 1 👍, 11 comments
- **#88879** — New `resolve_exec_env` plugin hook for exec environment variables
- Users want mechanical, non-soft enforcement for high-stakes tool calls.

**UI/Config improvements:**
- **#85015** [CLOSED] — Skills config wizard doesn't list eligible skills
- **#87568** — KaTeX math rendering support (open PR)
- **#88685** — Dashboard chat history incremental rendering (fixes 8-10s switches)
- **#88690** — Emit `sessions.changed` for in-chat command metadata

## User Feedback Summary

**Pain points and dissatisfaction:**
- *Session context confusion* (#32296) — "Agent replies to content from previous messages" leading to conversation misalignment. Open since March, still unresolved.
- *Matrix thread regression* (#87307) — After upgrading from 2026.5.20 to 2026.5.22, bot answers become normal replies instead of threaded. `/status` and `/model` commands go silent.
- *Feishu group replies broken* (#77666) — Group messages received but no reply (0 replies), while DMs work fine. 4 👍 indicates broad impact.
- *Codex native runtime high latency* (#78947) — Even trivial "OK" replies take 25.9s with 33k prompt tokens. Disagreement between docs and actual behavior on recommended model prefix. 2 👍.
- *Telegram streaming intermediate text loss* (#87326) — Text between tool calls overwritten, only final text visible. Meaningful intermediate commentary lost.
- *GitHub Copilot Claude Opus 1M context window* (#72824) — Treated as 128K despite Copilot offering 1M context. Closed with 1 👍.
- *Plugin loader silent failures* (#78301) — Plugin-authoring bugs surface as opaque runtime errors hours later, causing significant debugging time. 2 👍.

**Satisfaction (indirect signals):**
- The repeated beta releases with identical highlights suggest maintainers are urgently addressing agent recovery and channel delivery — the most commonly reported bug categories.
- Many closed bugs (299 PRs merged/closed) show responsive maintainer engagement.
- The #88020 fix for thinking block signature expiry was marked regression/bug but resolved quickly within same release cycle.

## Backlog Watch

**Long-unanswered important issues needing maintainer attention:**

| Issue | Date Created | Last Update | Comments | Notes |
|---|---|---|---|---|
| [#32296](https://github.com/openclaw/openclaw/issues/32296) — Session context confusion | 2026-03-02 | 2026-05-31 | 13 | P1, open 91 days, no fix PR |
| [#13583](https://github.com/openclaw/openclaw/issues/13583) — Hard gates for tool-call enforcement | 2026-02-10 | 2026-05-31 | 11 | P2, open 111 days, needs product decision |
| [#78308](https://github.com/openclaw/openclaw/issues/78308) — MCP approval envelope | 2026-05-06 | 2026-05-31 | 11 | Stale, linked PR open, needs product decision |
| [#45494](https://github.com/openclaw/openclaw/issues/45494) — Cron jobs silent timeout on LLM errors | 2026-03-13 | 2026-05-31 | 7 | P1 regression, needs maintainer review |
| [#51628](https://github.com/openclaw/openclaw/issues/51628) — Telegram delivery queue replay duplicates | 2026-03-21 | 2026-05-31 | 6 | P2, needs product decision |
| [#78435](https://github.com/openclaw/openclaw/issues/78435) — Slack start-account blocks event loop 5+ min | 2026-05-06 | 2026-05-31 | 7 | Stale, Windows-specific, needs live repro |
| [#83699?] No, #78301 — Plugin loader silent failures | 2026-05-06 | 2026-05-31 | 5 | Stale, affects plugin authors |
| [#8441](https://github.com/openclaw/openclaw/issues/8441) — Per-skill thinking/model config | 2026-02-04 | 2026-05-31 | 5 | Enhancement, open 117 days, needs security review |

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-06-01

## 1. Daily Cross-Project Overview

OpenClaw dominated today’s activity with 500 issues and 500 PRs updated, plus four identical beta releases focused on agent recovery from interrupted tool calls and steadier channel delivery across Telegram, WhatsApp, iMessage, and Slack. NanoBot and PicoClaw saw quieter days—NanoBot merged several stability fixes (WebUI crash, WebSocket security, heartbeat false positives), while PicoClaw published a nightly build and merged two patches (Codex OAuth empty responses, media attachments for the `message` tool). Zeroclaw maintained moderate activity (46 issues, 50 PRs) with community discussion concentrated on provider unification, RBAC, and output routing, but released no new version. Across projects, channel delivery reliability, provider/model configuration inconsistencies, and OAuth-related failures remain recurring pain points.

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | Releases | Activity Note |
|---|---|---|---|---|
| OpenClaw | 500 (284 open, 216 closed) | 500 (201 open, 299 merged/closed) | 4 beta releases (v2026.5.31-beta.1–4) | Very high activity; 4 identical beta releases; 299 PRs merged/closed |
| NanoBot | 6 (2 open, 4 closed) | 18 (11 open, 7 merged/closed) | 0 | Low activity; 7 PRs merged including critical WebUI and security fixes |
| Zeroclaw | 46 (34 open, 12 closed) | 50 (40 open, 10 merged/closed) | 0 | Moderate activity; no release; 10 PRs merged |
| PicoClaw | 7 (4 open, 3 closed) | 10 (7 open, 3 merged/closed) | 1 nightly build (v0.2.9-nightly) | Low activity; 3 PRs merged, 1 nightly build |

## 3. OpenClaw Compared With Peers

- **Activity volume**: OpenClaw’s 500 issues and 500 PRs updated in 24 hours is an order of magnitude larger than the next busiest project (Zeroclaw at 46/50). This reflects both a larger codebase/contributor base and the maintainer push to stabilize after recent regressions.
- **Technical focus**: OpenClaw is the only project actively shipping memory architecture enhancements (multi-slot memory roles, dreaming shadow scoring, batch embeddings) and subagent execution placement contracts. No other project has comparable memory/agent lifecycle work today.
- **Community surface area**: OpenClaw has more long-standing, heavily commented issues (e.g., #32296 session context confusion open since March, 13 comments) and a broader set of channel-specific bugs (Matrix, Telegram, Feishu, Discord). Other projects have fewer such persistent threads.
- **Release cadence**: OpenClaw published 4 betas in one day with identical release notes, indicating urgent patching after regressions. No other project released a non-nightly build.

## 4. Shared Technical Focus Areas

| Focus Area | Projects | Specific Needs |
|---|---|---|
| Channel delivery reliability | OpenClaw, Zeroclaw, PicoClaw | OpenClaw: Telegram intermediate text loss (#87326), Matrix thread regression (#87307). Zeroclaw: cron output not routed to configured channels (#6647). PicoClaw: Telegram mention handling (#2975 PR). |
| Provider/model configuration inconsistencies | OpenClaw, Zeroclaw, PicoClaw | OpenClaw: xAI context window misinterpretation (#88596). Zeroclaw: Kimi K2 models receive incompatible temperature parameter (#7022). PicoClaw: LM Studio easy connect (#28), OmniRoute provider request (#2978). |
| OAuth and authentication failures | OpenClaw, Zeroclaw, NanoBot, PicoClaw | OpenClaw: auth cooldown config forcing gateway restart (#88443). Zeroclaw: Gemini CLI OAuth broken (#4879). NanoBot: WebSocket token issuance without auth (#4103 fix). PicoClaw: Codex OAuth empty responses (#2674, #2953). |
| Tool-call / action enforcement | OpenClaw, Zeroclaw | OpenClaw: hard gates feature request (#13583), MCP approval envelope (#78308). Zeroclaw: risk_profile.allowed_tools does not restrict MCP tools (#6876), per-sender RBAC (#5982). |
| Memory / agent lifecycle | OpenClaw, Zeroclaw | OpenClaw: multi-slot memory roles (#88504), batch memory embeddings (#88238). Zeroclaw: decouple memory strategy from storage via MemoryStrategy trait (#6850). NanoBot and PicoClaw have no similar memory work today. |

## 5. Differentiation Analysis

- **OpenClaw** positions as the core reference implementation, with the broadest channel support (Telegram, WhatsApp, iMessage, Slack, Matrix, Discord, Feishu) and deepest focus on agent memory architecture, subagent orchestration, and LLM provider compatibility (Anthropic thinking blocks, opus-4-8 integration). Its large issue count reflects both strong adoption and the challenges of maintaining a complex, multi-provider, multi-channel system.
- **NanoBot** is lighter-weight, concentrating on WebUI polish, heartbeat monitoring, and the Dream skill system. Its community is smaller and more feature-request oriented (Azure AAD auth, voice recording, heartbeat decoupling). No activity on multi-tenancy or memory architecture.
- **Zeroclaw** differentiates through a strong emphasis on multi-tenancy (per-sender RBAC), output routing (orchestrator pipeline, peer modality preferences), and security hardening (MCP tool restriction gap, risk_profile enforcement). It also shows early hardware integration (smart-room ESP32 demos) and computer-use requests (#6909), suggesting a target audience of advanced users and enterprise deployments.
- **PicoClaw** (from Sipeed) appears aimed at low-resource or embedded use cases (Android Termux guide ARM64, nightly builds). Its community is small but vocal about provider onboarding ease (LM Studio, OmniRoute) and core reliability (Codex OAuth, exec command failures). No evidence of memory architecture or multi-tenancy work.

## 6. Community Activity Notes

- **Very high activity tier**: OpenClaw (500 issues, 500 PRs, 4 releases). The volume suggests a maintainer-driven sprint to close regressions; community hot topics are mostly bugs rather than feature requests.
- **Moderate activity tier**: Zeroclaw (46 issues, 50 PRs, 0 releases). Community discussion is active around provider architecture design decisions and security features. Several long-standing issues remain open with no fix PR.
- **Low activity tier**: NanoBot (6 issues, 18 PRs, 0 releases) and PicoClaw (7 issues, 10 PRs, 1 nightly). Community engagement is low (few comments per issue), but both projects merged meaningful fixes today. NanoBot’s WebSocket security fix indicates active maintenance despite low volume.

## 7. Evidence-Backed Observations

1. **Channel delivery reliability remains a cross-project pain point.** OpenClaw has four active P1 bugs related to session context confusion and message misrouting across Matrix, Telegram, and Feishu. Zeroclaw fixed a cron output routing bug today (#6647) and has open issues for Telegram group reply handling (#5866). PicoClaw is working on Telegram mention handling (#2975 PR). No project appears to have a fully robust delivery pipeline.

2. **OAuth and authentication bugs are recurring across all four projects.** OpenClaw fixed an auth cooldown restart regression today (#88443). Zeroclaw has a blocked S1 issue for Gemini OAuth failure (#4879, open since March). NanoBot closed a WebSocket token issuance vulnerability (#4103). PicoClaw still has an open Codex OAuth empty-response bug (#2674) despite today’s related fix (#2967). This pattern suggests that multi-provider OAuth handling, where each provider has idiosyncratic streaming and token management, is a systemic engineering challenge.

3. **Provider/model configuration inconsistencies are a shared headache.** OpenClaw’s xAI context window misinterpretation (#88596), Zeroclaw’s Kimi K2 forced-temperature bug (#7022), and PicoClaw’s Codex streaming event variance (#2674) all show that providers return inconsistent or undocumented parameters, forcing each project to implement error-prone per-provider workarounds. No unified abstraction layer across projects is evident.

4. **Tool enforcement and security gating are emerging as distinct concerns, but only OpenClaw and Zeroclaw are actively addressing them.** Both projects have feature requests and design discussions for pre-response enforcement hooks (#13583), channel-mediated approval for MCP tool calls (#78308), and risk_profile restrictions on MCP (#6876). NanoBot and PicoClaw show no equivalent activity, likely reflecting their smaller user bases or less demanding deployment scenarios.

5. **Memory architecture improvements are concentrated in OpenClaw and Zeroclaw, with no signal from NanoBot or PicoClaw.** OpenClaw has multiple PRs advancing multi-slot memory roles, dreaming shadow scoring, and batch embeddings. Zeroclaw has a feature request for a memory strategy trait (#6850). The absence of memory work in the smaller projects suggests that advanced memory composition is not yet a priority for less complex agent deployments.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-01

## 1. Today’s Activity Brief

In the last 24 hours, 6 issues were updated (2 open, 4 closed) and 18 pull requests were updated (11 open, 7 merged/closed). No new releases were published. The team merged fixes for a high‑severity WebUI crash caused by code blocks without a language specifier, a security vulnerability in WebSocket token issuance, and a heartbeat notification bug that sent "All clear." incorrectly. Several other bug fixes and enhancements remain open for review.

## 2. Releases

No new releases were tagged today.

## 3. Project Progress

Seven pull requests were closed or merged in the last 24 hours:

- **[#4127](https://github.com/HKUDS/nanobot/pull/4127)** – `fix(agent): extend sustained goal iteration budget` (merged)
- **[#4121](https://github.com/HKUDS/nanobot/pull/4121)** – `feat(webui): polish chat rendering and host runtime` (merged)
- **[#4117](https://github.com/HKUDS/nanobot/pull/4117)** – `fix(webui): handle undefined language in code blocks` (merged, fixes [#4116](https://github.com/HKUDS/nanobot/issues/4116))
- **[#4112](https://github.com/HKUDS/nanobot/pull/4112)** – `fix(heartbeat): fail closed on internal checks` (merged, part of [#4111](https://github.com/HKUDS/nanobot/issues/4111) fix)
- **[#4103](https://github.com/HKUDS/nanobot/pull/4103)** – `Require auth for WebSocket token issuance` (merged, fixes [#4077](https://github.com/HKUDS/nanobot/issues/4077))
- **[#4114](https://github.com/HKUDS/nanobot/pull/4114)** – `fix(heartbeat): skip empty HEARTBEAT.md and fail closed on delivery` (merged, fixes [#4111](https://github.com/HKUDS/nanobot/issues/4111))
- **[#4118](https://github.com/HKUDS/nanobot/pull/4118)** – Test push (closed without changes)

These merges address critical stability issues (WebUI crash, WebSocket security, heartbeat false positives) and polish the chat rendering experience.

## 4. Community Hot Topics

Activity on issues and PRs today was generally low in terms of comments, but one item stands out:

- **[#4120](https://github.com/HKUDS/nanobot/issues/4120)** – *Vest × HKUDS: tool recommendations or monetization angle* (closed, 1 comment). An external contributor from Vest‑ai‑tools proposed integrating an MCP‑based tool recommendation service. The proposal was acknowledged and closed without further discussion.

Other issues with 1 comment each:

- **[#4125](https://github.com/HKUDS/nanobot/issues/4125)** – `[enhancement] Add support for Azure AAD Based Auth for Azure OpenAI Provider` (open, 1 comment)
- **[#4128](https://github.com/HKUDS/nanobot/issues/4128)** – `[bug] retain_recent_legal_suffix causes duplicate archive` (open, 0 comments)

No issues or PRs received multiple comments or reactions today, indicating a quiet community engagement period.

## 5. Bugs & Stability

Three distinct bugs were reported and fixed today:

- **High severity — WebUI crash on code blocks without language specifier**
  [#4116](https://github.com/HKUDS/nanobot/issues/4116) (closed) → fixed by [#4117](https://github.com/HKUDS/nanobot/pull/4117). The fix adds a fallback to `"text"` when `language` is `undefined` in `react-syntax-highlighter`.

- **Medium severity — Heartbeat timer sends "All clear." when no tasks exist**
  [#4111](https://github.com/HKUDS/nanobot/issues/4111) (closed) → fixed by [#4114](https://github.com/HKUDS/nanobot/pull/4114) and [#4112](https://github.com/HKUDS/nanobot/pull/4112). The fix skips empty HEARTBEAT.md and fails closed on delivery.

- **Medium severity — Duplicate archiving of user messages in session manager**
  [#4128](https://github.com/HKUDS/nanobot/issues/4128) (open) – no fix PR yet. The bug affects the `retain_recent_legal_suffix` method in `nanobot/session/manager.py`.

- **Security — WebSocket token minting without authentication**
  [#4077](https://github.com/HKUDS/nanobot/issues/4077) (closed) → fixed by [#4103](https://github.com/HKUDS/nanobot/pull/4103). The fix requires `Authorization` header for the token issue route when a static WebSocket token is configured.

## 6. Feature Request Clusters

Two user-requested enhancements are under development:

- **Azure AAD‑based authentication for Azure OpenAI provider**
  Request [#4125](https://github.com/HKUDS/nanobot/issues/4125) (open) → implementation PR [#4126](https://github.com/HKUDS/nanobot/pull/4126) (open). This would allow users in Azure subscriptions that require identity‑based auth to use NanoBot without API keys.

- **Voice recording and local ASR transcription in WebUI**
  PR [#4122](https://github.com/HKUDS/nanobot/pull/4122) (open) adds browser‑based audio recording and FunASR integration. This is an enhancement request from an external contributor.

Additionally, a long‑standing PR for decoupling heartbeat reasoning from notification ([#1443](https://github.com/HKUDS/nanobot/pull/1443), open since March) adds configuration options for silent reasoning.

## 7. User Feedback Summary

Real pain points surfaced today:

- WebUI users experienced a full white‑screen crash when loading sessions containing code blocks without a language specifier (reported by @Flinn‑X).
- A user running heartbeat cron jobs received unwanted "All clear." notifications via Feishu (reported by @CashSoldier).
- A configuration‑oriented user (@kunalk16) requested Azure AAD auth to comply with corporate policies that disable API‑key authentication.
- An external team (Vest) proposed integrating a tool recommendation service, hinting at use‑cases where agents need to select SaaS tools without hallucination.

Workarounds exist for none of these bugs; all were addressed or have open fix PRs.

## 8. Backlog Watch

Several important PRs have been open for extended periods and may need maintainer attention:

- **[#1443](https://github.com/HKUDS/nanobot/pull/1443)** – `feat: decouple heartbeat reasoning from notification` (open since 2026-03-02, last updated 2026-05-31). Adds a `sendReasoning` config field. No comments from maintainers since submission.

- **[#3990](https://github.com/HKUDS/nanobot/pull/3990)** – `refactor(dream): replace two-phase Dream class with simple cron + process_direct` (open since 2026-05-24, last updated 2026-05-31). A significant refactor of the Dream skill system.

- **[#4101](https://github.com/HKUDS/nanobot/pull/4101)** – `Enforce Dream skill ownership markers` (open since 2026-05-29, last updated 2026-05-31). Prevents Dream from overwriting user‑created skills.

- **[#4099](https://github.com/HKUDS/nanobot/pull/4099)** – `Keep filesystem extra roots read-only` (open since 2026-05-29, last updated 2026-05-31). Improves security for write‑capable tools.

These PRs touch core functionality (heartbeat, Dream, filesystem security) and have been open for days to months without maintainer review.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest – 2026-06-01

## Today’s Activity Brief

Over the past 24 hours, 46 issues were updated (34 open, 12 closed) and 50 pull requests were touched (40 open, 10 merged/closed). No new releases were published. The team merged several bug fixes (e.g., a TUI refresh after setup in `zerocode`, a channels-all aggregate feature refactor) and landed a multi-tenant Linq channel. Community discussion remains concentrated around provider unification, security hardening (RBAC, tool enforcement), and output routing improvements.

## Releases

None.

## Project Progress

10 pull requests were closed or merged in the last 24 hours. Notable examples:

- **Closed**: [#7029](https://github.com/zeroclaw-labs/zeroclaw/pull/7029) – fix `zerocode` TUI: refresh empty states after setup.
- **Closed**: [#7044](https://github.com/zeroclaw-labs/zeroclaw/pull/7044) – refactor: extract `channels-all` aggregate feature in Cargo.
- **Open (awaiting review/merge)**: several PRs for hardware (smart-room demo) and channel improvements (see below).

Also closed (from today’s issue data): bugs like [#6647](https://github.com/zeroclaw-labs/zeroclaw/issues/6647) (cron output not routed, fixed) and [#5289](https://github.com/zeroclaw-labs/zeroclaw/issues/5289) (Bedrock API key header, fixed). The integration branch `integration/zeroclaw-tui` (#6848) is still open and under review.

## Community Hot Topics

Issues with the highest comment activity:

- [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) (9 comments) – Unify providers architecture and reqwest client management. The community is discussing code duplication and inconsistent configuration across provider modules.
- [#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) (8 comments, closed) – Documentation for `gateway.web_dist_dir` / `ZEROCLAW_WEB_DIST_DIR`. User asked for setup docs; the issue was closed after a maintainer responded.
- [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) (8 comments) – Per-sender RBAC for multi-tenant deployments. Users want isolated workspaces, rate limits, and prompt scoping per user class.
- [#4842](https://github.com/zeroclaw-labs/zeroclaw/issues/4842) (7 comments, closed) – `zeroclaw update` downloads wrong architecture binary on aarch64. Fixed (closed).
- [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) (4 comments) – Computer-use support (screen interaction). Users are requesting desktop GUI control similar to OpenAI Codex.

Top PRs by recent activity (comment counts not shown but open discussion visible):
- [#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) – Integration TUI, RPC socket, DenyWithEdit, beta-2 (large, under review).
- [#7041](https://github.com/zeroclaw-labs/zeroclaw/pull/7041) – Multi-tenant Linq channel with per-alias routing.
- [#7021](https://github.com/zeroclaw-labs/zeroclaw/pull/7021) – Email channel: XOAUTH2 auth, observer mode, read-only IMAP tools.

## Bugs & Stability

High‑severity bugs reported or updated today (ranked by S-level and risk tag):

| Issue | Severity | Risk | Summary | Fix PR? |
|-------|----------|------|---------|---------|
| [#5122](https://github.com/zeroclaw-labs/zeroclaw/issues/5122) | S2 – degraded | high | `web_fetch` allowed_private_hosts useless for domains with private IPs | In‑progress, accepted |
| [#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) | S1 – blocked | high | Gemini CLI OAuth fails after authentication | Open, no fix PR |
| [#6876](https://github.com/zeroclaw-labs/zeroclaw/issues/6876) | S1 – blocked | high | `risk_profile.allowed_tools` does not restrict MCP tools (design gap) | Open + related PRs |
| [#7022](https://github.com/zeroclaw-labs/zeroclaw/issues/7022) | S1 – blocked | medium | Kimi K2.5/K2.6 fails because compatible provider always sends `temperature: 0.7` | [#7049](https://github.com/zeroclaw-labs/zeroclaw/pull/7049) |
| [#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) | S1 – blocked | medium | Ollama provider fails when tools are needed | In‑progress |

Two closed bugs today: [#6647](https://github.com/zeroclaw-labs/zeroclaw/issues/6647) (cron output not routed to configured channels) and [#5289](https://github.com/zeroclaw-labs/zeroclaw/issues/5289) (Bedrock sends `x-api-key` header causing 403).

## Feature Request Clusters

Several thematic clusters of feature requests are visible:

**Provider & Model Architecture**
- [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) – Unify providers and reqwest client management.
- [#5843](https://github.com/zeroclaw-labs/zeroclaw/issues/5843) – Per‑model reasoning configuration (not global).
- [#5731](https://github.com/zeroclaw-labs/zeroclaw/issues/5731) – Add manifest‑style provider for API‑key routing.

**Security & Multi‑Tenancy**
- [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) – Per‑sender RBAC.
- [#6914](https://github.com/zeroclaw-labs/zeroclaw/issues/6914) – Enforce `allowed_tools` / `denied_tools` at execution time.
- [#6876](https://github.com/zeroclaw-labs/zeroclaw/issues/6876) – MCP tool restriction gap (see Bugs).
- [#6915](https://github.com/zeroclaw-labs/zeroclaw/issues/6915) – Skill‑scoped tool activation.
- [#6917](https://github.com/zeroclaw-labs/zeroclaw/issues/6917) – Honor action‑scope filter in Composio dispatch.

**Output & Message Routing**
- [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) – Route scheduled tasks through orchestrator pipeline.
- [#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969) – Unified output routing with peer modality preferences.
- [#6883](https://github.com/zeroclaw-labs/zeroclaw/issues/6883) – Shared reply‑message constructor on `SendMessage`.
- PR [#7020](https://github.com/zeroclaw-labs/zeroclaw/pull/7020) – Static `output_modality` preference on peer groups.
- PR [#7021](https://github.com/zeroclaw-labs/zeroclaw/pull/7021) – Email channel: XOAUTH2, observer, IMAP tools.

**Memory & Agent Lifecycle**
- [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) – Decouple memory strategy from storage via `MemoryStrategy` trait.

**Desktop/Computer Use**
- [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) – Screen‑interaction support (screenshots, mouse, keyboard).
- PRs [#7045](https://github.com/zeroclaw-labs/zeroclaw/pull/7045), [#7046](https://github.com/zeroclaw-labs/zeroclaw/pull/7046), [#7047](https://github.com/zeroclaw-labs/zeroclaw/pull/7047) – Smart‑room hardware tools and ESP32 simulator.

**Skills & Tools**
- [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) – Track skills support and UX (v0.7.6).
- [#4467](https://github.com/zeroclaw-labs/zeroclaw/issues/4467) – MCP resource and prompt support.
- [#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916) – Process‑memory limits on shell/skill_tool subprocess.

**CI & Documentation**
- [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) – Audit 153 lost commits from bulk revert.
- [#6760](https://github.com/zeroclaw-labs/zeroclaw/issues/6760) – Update Docker documentation for v0.7.5‑debian.
- PR [#7023](https://github.com/zeroclaw-labs/zeroclaw/pull/7023) – Versioned documentation deployment.

## User Feedback Summary

User pain points expressed in today’s issue updates:

- **Gemini OAuth broken** ([#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879)): “CLI OAuth is simply not working” – rate‑limited after authentication, workflow blocked.
- **Ollama provider fails with tools** ([#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962)): “Throws error blocking any message in the same session” when tools are needed.
- **Cron output not routed** ([#6647](https://github.com/zeroclaw-labs/zeroclaw/issues/6647), closed): User expected results in Telegram but only saw web dashboard.
- **`web_fetch` private‑host protection bypass** ([#5122](https://github.com/zeroclaw-labs/zeroclaw/issues/5122)): `allowed_private_hosts` doesn’t work for domain names that resolve to private IPs.
- **`risk_profile.allowed_tools` doesn’t restrict MCP tools** ([#6876](https://github.com/zeroclaw-labs/zeroclaw/issues/6876)): Setting does nothing for MCP, user notes “security gap”.
- **Kimi K2 models fail** ([#7022](https://github.com/zeroclaw-labs/zeroclaw/issues/7022)): `temperature` sent always as 0.7, but models enforce fixed temperatures. Fix PR [#7049](https://github.com/zeroclaw-labs/zeroclaw/pull/7049) proposed.
- **Telegram reply ignored in groups** ([#5866](https://github.com/zeroclaw-labs/zeroclaw/issues/5866)): Bot ignores replies on its own messages when `mention_only=true`.
- **Updater broken on aarch64** ([#4842](https://github.com/zeroclaw-labs/zeroclaw/issues/4842), closed): Binary downloaded for wrong architecture – user on Raspberry Pi.
- **Positive Docker experience** ([#6760](https://github.com/zeroclaw-labs/zeroclaw/issues/6760)): User provided working Docker Compose YAML for gateway and web UI.

## Backlog Watch

Long‑standing issues and PRs that remain open and may need maintainer attention:

| Item | Created | Last Updated | Status | Notes |
|------|---------|--------------|--------|-------|
| [#4467](https://github.com/zeroclaw-labs/zeroclaw/issues/4467) – MCP resource/prompt support | 2026‑03‑24 | 2026‑05‑31 | In‑progress, accepted | 4 👍; 1 comment; no maintainer response visible. |
| [#3100](https://github.com/zeroclaw-labs/zeroclaw/issues/3100) – Mattermost oncall mode | 2026‑03‑10 | 2026‑05‑31 | In‑progress, accepted | 2 👍; high‑risk enhancement; no recent maintainer comment. |
| [#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) – Gemini OAuth not working | 2026‑03‑28 | 2026‑05‑31 | Open, P1 | 2 👍; S1 workflow‑blocked; no fix PR. |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) – Audit 153 lost commits | 2026‑04‑24 | 2026‑05‑31 | Open, P2 | In‑progress; no recent activity. |
| [#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) – Integration TUI (beta‑2) | 2026‑05‑22 | 2026‑06‑01 | Open, large PR | Blocked on review; has `DO NOT MERGE` label. |
| [#6148](https://github.com/zeroclaw-labs/zeroclaw/pull/6148) – Smart‑room ESP32 demo | 2026‑04‑27 | 2026‑05‑31 | Open, needs‑author‑action | Author asked to split; no recent response. |
| [#6429](https://github.com/zeroclaw-labs/zeroclaw/pull/6429) – Twilio SMS channel | 2026‑05‑06 | 2026‑05‑31 | Open, needs‑author‑action | Awaiting author updates. |

Several issues are also labeled `needs-maintainer-review` (e.g., [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850), [#6914](https://github.com/zeroclaw-labs/zeroclaw/issues/6914), [#6915](https://github.com/zeroclaw-labs/zeroclaw/issues/6915), [#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916), [#6917](https://github.com/zeroclaw-labs/zeroclaw/issues/6917)) and are currently blocked pending maintainer decision.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest – 2026-06-01

## 1. Today's Activity Brief
In the last 24 hours, PicoClaw saw **7 issues updated** (4 open, 3 closed) and **10 pull requests updated** (7 open, 3 merged/closed). A new **nightly build** (v0.2.9-nightly.20260601.ba806592) was published. Two significant fixes were merged: a patch for OpenAI/Codex OAuth empty responses (PR #2967) and a feature bringing media attachments and richer outbound delivery to the `message` tool (PR #2856). New feature proposals include an OmniRoute provider integration (#2978) and enhancements to the cron tool (#2977).

## 2. Releases
- **nightly** (2026-06-01): `v0.2.9-nightly.20260601.ba806592` – Automated nightly build, potentially unstable. No breaking changes or migration notes provided.
  [Full changelog](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

## 3. Project Progress
Three pull requests were merged/closed in the past 24 hours:
- **#2967** (fix) – *Preserve streamed output text deltas for Codex OAuth provider*. Closes issue #2953.
  [PR #2967](https://github.com/sipeed/picoclaw/pull/2967)
- **#2856** (feature) – *Media attachments and Telegram rich delivery for the `message` tool*. Closes issue #2855.
  [PR #2856](https://github.com/sipeed/picoclaw/pull/2856)
- **#2980** (chore) – *Add debug output files to `.gitignore`*.
  [PR #2980](https://github.com/sipeed/picoclaw/pull/2980)

All three were closed (presumably merged) as of this digest date.

## 4. Community Hot Topics
The most active issues and PRs by comment count and reactions:
- **#28** (closed, enhancement) – *LM Studio Easy Connect* – 21 comments, 2 👍. A long-running request that was closed but generated significant discussion.
  [Issue #28](https://github.com/sipeed/picoclaw/issues/28)
- **#2674** (open, bug) – *Codex OAuth: empty assistant response when ChatGPT backend streams via `response.output_item.done`* – 7 comments, 4 👍. Still open despite a related fix (#2967) addressing a different streaming path.
  [Issue #2674](https://github.com/sipeed/picoclaw/issues/2674)
- **#2968** (open, bug) – */context always shows Compress at: 76800 tokens* – 3 comments, 1 👍. A user-reported issue with the context compression display.
  [Issue #2968](https://github.com/sipeed/picoclaw/issues/2968)
- **#2952** (open, feature) – *“好久没发新版本了” (Please release a new version)* – 3 comments. Contains multiple requests: exec command behaviour, QQ channel restart loop, model UI improvements.
  [Issue #2952](https://github.com/sipeed/picoclaw/issues/2952)

No PRs attracted more than a few comments; the most notable open PRs are the stale ones listed in the Backlog Watch section.

## 5. Bugs & Stability
**High severity:**
- **#2674** – *Codex OAuth empty response* (still open). The ChatGPT backend sends a `response.completed` event with `response.output` null after streaming `response.output_item.done` events. The fix in #2967 only covers the `response.output_text.delta` path; this variant remains unhandled.
  [Issue #2674](https://github.com/sipeed/picoclaw/issues/2674) (4 👍)

**Medium severity:**
- **#2968** – */context always shows same compress token count* (open). User reports that `max_tokens` changes are not reflected in the `/context` output. Could be a display bug or a provider-specific issue.
  [Issue #2968](https://github.com/sipeed/picoclaw/issues/2968)

**Low severity / closed:**
- **#2953** (closed) – *Codex OAuth empty response due to ignored `response.output_text.delta`* – Fixed by PR #2967.
  [Issue #2953](https://github.com/sipeed/picoclaw/issues/2953)

No regressions or crashes were reported in the last 24 hours.

## 6. Feature Request Clusters
Several user-requested features were discussed or implemented:

- **Provider integrations** – Requests for easy LM Studio connection (closed #28) and adding OmniRoute as a provider (new #2978).
- **Message tool enhancements** – The merger of PR #2856 now allows agents to send media attachments and channel-aware rich payloads through the `message` tool (addresses #2855).
- **Cron tool improvements** – PR #2977 proposes `get` and `update` actions to allow agents to inspect and partially modify cron jobs without recreating them.
- **Telegram mention handling** – PR #2975 treats replies to bot messages as mentions in group chats when `mention_only: true` is set.
- **UI / configuration** – Issue #2952 includes requests for better provider selection UI, key reuse, and API test connection to list models.
- **Android support** – PR #2902 (open, stale) adds a Termux guide for ARM64 Android devices.
- **Anthropic SDK update** – PR #2979 updates the Anthropic provider to remain compatible with `anthropic-sdk-go v1.46.0`, whose API removed `NewThinkingConfigAdaptiveParam()`.

None of these are confirmed for the next release.

## 7. User Feedback Summary
User feedback reflects a mix of appreciation for existing work and frustration with specific blockers:

- **Positive**: @Franzferdinan51 (#28) expressed gratitude for the LM Studio feature, noting they lacked skills to implement it. @bogdanovich (#2855) and @livinghorror (#2953) contributed clear bug reports with reproduction steps.
- **Pain points**:
  - **Codex OAuth inconsistency** – Two separate bugs (#2674, #2953) cause empty responses with no clear error. Users report authentication succeeds but responses are missing.
  - **Context token display** – @xpader (#2968) reports that `/context` always shows the same compress limit regardless of model settings.
  - **Exec command reliability** – @xhynice (#2952) notes that many models omit the required `actions:run` on first call, causing failures.
  - **QQ channel restart loop** – Same user describes a restart loop after rebooting via QQ.
- **Feature requests** – Users want easier provider onboarding (LM Studio, OmniRoute), better UI for model configuration, and richer message capabilities.

## 8. Backlog Watch
Items that have been unanswered or stale for some time and may need maintainer attention:

- **Issue #2674** (open since 2026-04-26, 4 👍) – Codex OAuth empty response (alternative streaming event). Still open with no assigned milestone.
  [Issue #2674](https://github.com/sipeed/picoclaw/issues/2674)
- **PR #2936** (open since 2026-05-24) – *Skip skills whose required binaries are missing* – No comments from maintainers. Would resolve issue #2351.
  [PR #2936](https://github.com/sipeed/picoclaw/pull/2936)
- **PR #2904** (open since 2026-05-20) – *Fix agent loop reload and panic cleanup stability* – Three related fixes in `pkg/agent`. No maintainer feedback.
  [PR #2904](https://github.com/sipeed/picoclaw/pull/2904)
- **PR #2906** (open since 2026-05-20) – *Fix message bus backpressure handling and health visibility* – No review comments.
  [PR #2906](https://github.com/sipeed/picoclaw/pull/2906)
- **PR #2902** (open since 2026-05-20) – *docs: add Android Termux guide* – No maintainer activity.
  [PR #2902](https://github.com/sipeed/picoclaw/pull/2902)

These items may benefit from maintainer prioritization to clear technical debt and unblock community contributions.

</details>