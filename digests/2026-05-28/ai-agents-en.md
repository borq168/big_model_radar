# OpenClaw Ecosystem Digest 2026-05-28

> Issues: 375 | PRs: 500 | Projects covered: 4 | Generated: 2026-05-28 02:13 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-05-28

## 1. Today's Activity Brief
The project saw very high activity: **375 issues** (177 open, 198 closed) and **500 pull requests** (261 open, 239 merged/closed) updated in the last 24 hours. Two releases were published – `v2026.5.26` (stable) and `v2026.5.26-beta.2` – both focusing on faster gateway startup and reduced cache churn under load. Several regressions were reported against the new stable release, particularly around native hook relay unavailability and Telegram plugin‑state limits. Maintainers merged a number of fixes for session handling, gateway probing, and UI state management.

---

## 2. Releases (since last digest)
**`v2026.5.26`** and **`v2026.5.26-beta.2`** share the same release highlights:
- **Faster Gateway startup** – avoids repeated scans of plugins, channels, sessions, usage‑cost, warnings, scheduled services, and filesystem.
- **Visible replies** – separate user‑facing sends from slower follow‑up work, improving perceived latency.
- **Reduced cache churn** – gateway runtime/session caches churn less under load.

No breaking changes, migration notes, or detailed changelog were provided beyond these bullet points. The releases address general performance and reliability of the gateway layer.

---

## 3. Project Progress (Merged/Closed PRs)
239 PRs were merged or closed in the last 24 hours. Notable among them (from the top 30 by comment count):

- **`fix(gateway): drain probe client close`** [#87230](https://github.com/openclaw/openclaw/pull/87230) – Ensures `probeGateway()` waits for WebSocket teardown before returning to CLI callers.
- **`fix(sessions): avoid stale restart continuation reuse`** [#87378](https://github.com/openclaw/openclaw/pull/87378) – Prevents normal completed‑run lifecycle fields from interfering with session freshness decisions.
- **`fix(ui): ignore stale running rows after terminal chat`** [#86952](https://github.com/openclaw/openclaw/pull/86952) – Stops a terminal chat session from being revived by stale `status: "running"` rows.
- **`[codex] Fix explicit custom web_search provider routing`** [#77736](https://github.com/openclaw/openclaw/pull/77736) – Corrects provider discovery for custom web search tools.
- **`fix(pi-embedded-runner): wire Anthropic thinking recovery`** [#87464](https://github.com/openclaw/openclaw/pull/87464) – Updates error pattern matching for persisted‑thinking‑block rejections.

These represent forward movement in gateway stability, session lifecycle correctness, UI consistency, and provider routing.

---

## 4. Community Hot Topics
The most active discussions (by comment count) today:

| Issue/PR | Comments | Summary |
|----------|----------|---------|
| [#48183](https://github.com/openclaw/openclaw/issues/48183) **Feishu monitor memory leak** | 17 | `httpServers` Map entries deleted before server close; potential memory leak. |
| [#87331](https://github.com/openclaw/openclaw/issues/87331) **5.26 regression: relay unavailable** | 13 | "Native hook relay unavailable" after relay re‑register due to generation UUID staleness. Closed. |
| [#86702](https://github.com/openclaw/openclaw/issues/86702) **MemoryIndexManager close race** | 13 | `MemoryIndexManager.close()` races with in‑flight sync, closing provider/DB early. Closed. |
| [#80380](https://github.com/openclaw/openclaw/issues/80380) **Update to gemini-3.1-flash-lite** | 13 | Request to switch from preview to GA model before preview deprecation. |
| [#86599](https://github.com/openclaw/openclaw/issues/86599) **Local model blocks event loop on Windows** | 13 | P1 beta blocker; trivial inference takes ~4 minutes. Needs maintainer review. |

**Underlying needs**: Users are facing real stability issues after the latest update (relay, race conditions, performance on Windows). The high interest in the Gemini model update shows a desire to keep up with provider deprecation timelines. The Feishu memory leak and session race condition are being actively discussed but remain open for longer.

---

## 5. Bugs & Stability
Several regressions and high‑severity bugs were reported against the new `v2026.5.26` release:

- **`Native hook relay unavailable`** – Multiple reports: [#87331](https://github.com/openclaw/openclaw/issues/87331) (closed), [#87317](https://github.com/openclaw/openclaw/issues/87317), [#87395](https://github.com/openclaw/openclaw/issues/87395). Symptoms: native tools fail intermittently after upgrade. #87331 was closed, but the problem appears to persist in other contexts.
- **Docker upgrade breaks agent** – [#87302](https://github.com/openclaw/openclaw/issues/87302): Container fails to respond after upgrading to 2026.5.26. No fix PR yet.
- **Telegram plugin‑state hits 1000‑row cap** – [#87357](https://github.com/openclaw/openclaw/issues/87357), [#87332](https://github.com/openclaw/openclaw/issues/87332): `expires_at = NULL` causes rows to accumulate and block new writes. Fix PR [#87332](https://github.com/openclaw/openclaw/issues/87332) is closed; #87357 remains open.
- **Event‑loop starvation regression** – [#86509](https://github.com/openclaw/openclaw/issues/86509): 87‑second session‑lock phase, 31‑second loop delay on v2026.5.22. User rolled back to v2026.5.20.
- **Preflight compaction deadlock** – [#87016](https://github.com/openclaw/openclaw/issues/87016): Discord bot bounces every message after empty‑session edge case.

**Severity summary**: Multiple P1 bugs with `impact:message-loss` or `impact:session-state`. Some have associated fix PRs (e.g., #87332 for Telegram cap, #87378 for session restart), but others such as relay unavailability and Docker breakage still need resolution.

---

## 6. Feature Request Clusters
User‑requested features with active issues or PRs:

- **Gateway‑lite mode** – [#86881](https://github.com/openclaw/openclaw/issues/86881): Lightweight deployment without AI harness for deterministic use cases. No related PR yet.
- **Task flow lifecycle hook events** – [#87362](https://github.com/openclaw/openclaw/issues/87362): Expose internal `TaskFlowRegistryObserverEvent` via plugin SDK for observability. New issue, no PR yet.
- **Multi‑slot memory role architecture** – PR [#86210](https://github.com/openclaw/openclaw/pull/86210): Adds canonical memory role slots (`memory.recall`, `memory.compaction`, etc.) to allow memory plugins to compose rather than replace each other. Open, needs proof.
- **Scoped mention pattern policy** – PR [#70864](https://github.com/openclaw/openclaw/pull/70864): Allows global, agent, and channel‑level mention‑pattern gating across channel runtimes. Open since April 24, still needs proof.
- **Model update: gemini-3.1-flash-lite** – [#80380](https://github.com/openclaw/openclaw/issues/80380): Upgrade from preview to GA model. No associated PR; user request with 4 👍.

These clusters indicate user interest in modularity, observability, and provider lifecycle management.

---

## 7. User Feedback Summary
- **Pain points**:
  - **Upgrade regressions**: Users report that v2026.5.26 breaks Docker containers ([#87302](https://github.com/openclaw/openclaw/issues/87302)) and native hook relay ([#87331](https://github.com/openclaw/openclaw/issues/87331), [#87395](https://github.com/openclaw/openclaw/issues/87395)).
  - **Telegram plugin cap**: Several users hit the 1000‑row plugin‑state limit immediately after install ([#87357](https://github.com/openclaw/openclaw/issues/87357), [#87332](https://github.com/openclaw/openclaw/issues/87332)).
  - **Session takeover errors**: Discord and embedded runs throw `EmbeddedAttemptSessionTakeoverError` ([#86508](https://github.com/openclaw/openclaw/issues/86508), [#85913](https://github.com/openclaw/openclaw/issues/85913)).
  - **Event‑loop starvation**: Returns in v2026.5.22 after earlier fix ([#86509](https://github.com/openclaw/openclaw/issues/86509) refs #80695).
- **Satisfaction indicators**:
  - Users provide detailed reproduction steps and environment info, reflecting invested community.
  - Several issues have high reaction counts (e.g., 8 👍 on #87331, 10 👍 on #63510).
- **Frustration**: Some users explicitly block versions and roll back ([#86509](https://github.com/openclaw/openclaw/issues/86509) – “Rolled back to v2026.5.20 to recover”).

---

## 8. Backlog Watch
Issues and PRs that remain open for an extended period or have not received recent maintainer attention:

- [#48183](https://github.com/openclaw/openclaw/issues/48183) **Feishu memory leak** – Opened March 16, last updated May 27. 17 comments. No fix PR linked. Impact: potential memory leak.
- [#80380](https://github.com/openclaw/openclaw/issues/80380) **Update gemini model** – Opened May 10, last updated May 27. 13 comments. Needs a product decision.
- [#86599](https://github.com/openclaw/openclaw/issues/86599) **Windows event loop blocked** – P1 beta blocker, opened May 25, needs maintainer review and live repro.
- [#84903](https://github.com/openclaw/openclaw/issues/84903) **Single stalled session blocks gateway** – P1, opened May 21, needs maintainer review and live repro.
- [#70864](https://github.com/openclaw/openclaw/pull/70864) **Scoped mention pattern policy** – Opened April 24, still needs proof. Large PR touching many channels.
- [#81185](https://github.com/openclaw/openclaw/pull/81185) **Redact exec tool result payloads** – Opened May 12, waiting on author.
- [#75270](https://github.com/openclaw/openclaw/pull/75270) **Prevent sticky model fallback** – Opened April 30, needs proof.

Several high‑impact bugs (P1) have been open for more than a week without a fix PR, indicating they may need additional maintainer cycles or community contributions.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-05-28

## 1. Daily Cross-Project Overview

Today’s activity across the monitored AI agent ecosystem shows a stark contrast in scale: OpenClaw dominates with over 800 combined issue/PR updates and two releases, while the other three projects together total about 116 updates. OpenClaw’s new stable release introduced several regressions (relay unavailability, Docker breakage, Telegram plugin‑state cap), triggering a wave of bug reports and fix PRs. NanoBot and ZeroClaw focused on infrastructure reliability — MCP reconnection fixes, credential redaction, and streaming timeout corrections — while PicoClaw merged a streaming feature and addressed environment‑specific bugs. No cross‑project release coordination or shared roadmaps are evident in today’s data.

## 2. Activity Comparison

| Project     | Issues Updated (open/closed) | PRs Updated (open/merged/closed) | Release Status Today          | Activity Note |
|-------------|-------------------------------|----------------------------------|-------------------------------|---------------|
| OpenClaw    | 375 (177 open, 198 closed)    | 500 (261 open, 239 merged/closed) | **Stable v2026.5.26** + beta | Very high – dominated by regression reports and fixes after new release |
| NanoBot     | 5 (4 open, 1 closed)          | 24 (17 open, 7 merged/closed)    | None                          | Moderate – MCP infrastructure patches and one agent‑loop feature merged |
| ZeroClaw    | 31 (21 open, 10 closed)       | 50 (41 open, 9 merged/closed)    | None                          | Moderate – security/onboarding bugs and DeepSeek‑V4 incompatibility |
| PicoClaw    | 4 (all open)                  | 6 (5 open, 1 merged)             | **Nightly v0.2.9‑nightly**    | Low – Android/streaming bugs and one ChatStream merge |

*Note: “Updated” counts include any change (new, closed, new comment) in the last 24 hours.*

## 3. OpenClaw Compared With Peers

- **Activity volume**: OpenClaw’s 375 issues + 500 PRs is an order of magnitude larger than ZeroClaw (31+50) and far exceeds NanoBot and PicoClaw. This reflects OpenClaw’s role as the core reference implementation with the largest contributor base.
- **Release cadence**: OpenClaw shipped two releases today, one stable and one beta, while peers released only a single nightly (PicoClaw). No other project had a stable release today.
- **Technical focus**: OpenClaw’s activity centers on **gateway performance**, **session lifecycle**, and **UI state management** – core infrastructure components. Peers are more focused on **protocol integration** (MCP, GitAgent Protocol), **streaming reliability**, and **security hardening**.
- **Community surface area**: OpenClaw sees multiple reports of the same regression (e.g., relay unavailable: #87331, #87317, #87395), indicating widespread deployment and real‑world impact. NanoBot’s community is smaller but shows strong interest in portable agent standards (multiple GitAgent Protocol PRs) and GUI management (webui idea). ZeroClaw’s community engages in RFC processes and detailed security audits. PicoClaw’s user base reports environment‑specific bugs (Android, QQ channel).

## 4. Shared Technical Focus Areas

Requirements appearing across multiple projects today:

| Requirement | OpenClaw | NanoBot | ZeroClaw | PicoClaw |
|-------------|----------|---------|----------|----------|
| **Streaming reliability** | Visible replies feature (separates send from follow‑up) | Streaming timeout fix (#4018, #4020) | Stream integrity fix closed (#6661) | ChatStream merge (#2853) |
| **MCP (Model Context Protocol) improvements** | – | Reconnection fixes (#4012, #4027), tool change notification (#4014, #4028) | – | Dynamic MCP headers PR (#2696) |
| **LLM provider compatibility** | Gemini model update request (#80380) | – | DeepSeek‑V4 API incompatibility (#6059) | OpenAI/Codex OAuth empty response (#2953) |
| **Security / credential handling** | – | – | Credential redaction bug (#6978), token rotation issue (#6984) | TLS verification config for MQTT (#2899) |

**Observation**: Streaming reliability is a clear cross‑project concern, with all four projects having at least one relevant change today. MCP improvements are limited to NanoBot and PicoClaw. Provider compatibility issues appear in three projects but each involves a different provider. Security hardening is concentrated in ZeroClaw.

## 5. Differentiation Analysis

- **OpenClaw** positions as the **comprehensive core reference** with high‑traffic community, frequent releases, and regressions that test real‑world deployments. Its technical focus is on gateway scalability, session correctness, and plugin‑state management at scale.
- **NanoBot** differentiates through **agent‑loop self‑improvement** (Think→Verify→Update→Act cycle), **MCP integration depth**, and exploration of **portable agent standards** (GitAgent Protocol proposals). The “Dream” memory consolidation system is a unique architectural feature.
- **ZeroClaw** stands out for its **security‑first stance** (S0/S1 credential and token bugs), **RFC‑driven design process** (output routing, work lanes), and **TUI development** (zerocode TUI with RPC socket transport). It also has the most structured onboarding workflow (`zeroclaw onboard`).
- **PicoClaw** targets **embedded and mobile environments** (Android, pico channel, MQTT) with a smaller footprint. Its activity is lower but includes practical fixes for edge‑case environments and a streaming feature for real‑time token delivery over WebSocket.

## 6. Community Activity Notes

Based solely on today’s counts and release activity:

- **Tier 1 – Very High**: OpenClaw (375 issues, 500 PRs, 2 releases). Overwhelming volume dominated by regression reports.
- **Tier 2 – Moderate**: ZeroClaw (31 issues, 50 PRs, no release) and NanoBot (5 issues, 24 PRs, no release). Both show meaningful infrastructure work but no new releases.
- **Tier 3 – Low**: PicoClaw (4 issues, 6 PRs, nightly release). Smallest activity, but a new feature was merged.

*Note: Maturity or adoption cannot be inferred from activity alone; OpenClaw’s high activity partly stems from regressions in its latest release.*

## 7. Evidence‑Backed Observations

1. **Streaming reliability is a shared priority across all projects.** Each project had at least one change today addressing streaming – from OpenClaw’s visible replies to NanoBot’s timeout fix, ZeroClaw’s stream integrity fix, and PicoClaw’s ChatStream merge. This suggests ongoing user demand for low‑latency, non‑blocking token delivery.

2. **MCP protocol support is actively evolving in NanoBot and PicoClaw, but not yet in OpenClaw or ZeroClaw.** NanoBot merged two MCP‑related PRs and has two more open; PicoClaw has a month‑old PR for dynamic MCP headers. Neither OpenClaw nor ZeroClaw shows MCP‑specific activity today, indicating divergence in integration strategies.

3. **OpenClaw’s latest stable release triggered a wave of regressions that may indicate insufficient pre‑release testing.** Multiple P1 bugs (relay unavailability, Docker upgrade breakage, event‑loop starvation) with numerous user reports suggest the release process did not catch these issues. In contrast, NanoBot and ZeroClaw are addressing stability through targeted fix PRs without a major release today.

4. **Security and credential management is a growing concern in ZeroClaw but not yet prominent in other projects.** ZeroClaw had two S0/S1 security bugs filed today (credential redaction, token rotation) – both new and without fix PRs. No equivalent security‑dedicated issues appeared in OpenClaw, NanoBot, or PicoClaw, though PicoClaw has a TLS verification PR.

5. **No clear cross‑project signal for a unified agent standard or ecosystem‑wide direction.** While NanoBot saw multiple attempts to add GitAgent Protocol, other projects show no similar activity. The community interest in portable agent definitions and GUI management (NanoBot’s webui) remains project‑specific rather than ecosystem‑wide today.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-28

## Today's Activity Brief

Activity remains high: 5 issues were updated in the last 24 hours (4 open, 1 closed), and 24 pull requests were updated (17 open, 7 merged/closed). No new releases were published. Infrastructure patches dominate today's data: three independent PRs from different authors address MCP reconnection fixes and tool change notification support, suggesting a coordinated community push around MCP reliability. A notable new feature—optional `AUTHORITY.md` bootstrap file for agent system prompts—was contributed by a first-time PR author. Multiple attempts to add GitAgent Protocol (GAP) support were submitted and subsequently closed as duplicates or invalid, indicating strong community interest but a need for project coordination.

## Releases

No new releases were published today. The latest available release remains **0.2.0** (based on user context from issue #4013).

## Project Progress

Seven PRs were merged or closed today:

- **Agent loop self-improvement**: [#4015](https://github.com/HKUDS/nanobot/pull/4015) merged — adds an observation-reflection prompt (`Think→Verify→Update User→Act`) after tool execution, described as "最小代价实现Agent Loop自循环" (self-loop at minimal cost), with built-in cleanup of old observations.
- **MCP infrastructure fixes**: [#4014](https://github.com/HKUDS/nanobot/pull/4014) merged — adds MCP `ToolListChangedNotification` support; [#4012](https://github.com/HKUDS/nanobot/pull/4012) merged — fixes MCP reconnection bug where `_mcp_connected` flag was never reset on session drop.
- **Codex provider fix**: [#4018](https://github.com/HKUDS/nanobot/pull/4018) merged — makes Codex provider honor `NANOBOT_STREAM_IDLE_TIMEOUT_S` environment variable instead of hardcoding 60s timeout.
- **Docker enhancement**: [#4026](https://github.com/HKUDS/nanobot/pull/4026) merged — adds GitHub CLI and `gogcli` tools to the official Docker image.
- **GitAgent Protocol**: [#4005](https://github.com/HKUDS/nanobot/pull/4005) and [#4024](https://github.com/HKUDS/nanobot/pull/4024) closed as invalid/duplicate — two separate attempts by different contributors ([@shreyas-lyzr](https://github.com/shreyas-lyzr), [@computer-agent](https://github.com/computer-agent)) to add portable agent support, with an updated submission still open ([#4030](https://github.com/HKUDS/nanobot/pull/4030), [#4019](https://github.com/HKUDS/nanobot/pull/4019)).

## Community Hot Topics

**Most active issue**: [#1922](https://github.com/HKUDS/nanobot/issues/1922) (10 comments, 10 👍) — [@Good0007](https://github.com/Good0007) created `nanobot-webui`, a self-hosted web management panel featuring a full dashboard, real-time chat, configuration UI for providers/channels/MCP servers/skills/cron jobs, and multi-user support. The strong positive reaction indicates high community demand for GUI management capabilities.

**Dream system configuration**: [#3885](https://github.com/HKUDS/nanobot/issues/3885) (4 comments) — requests a global enable/disable switch for Dream system jobs (memory consolidation), noting that even with memory skills disabled, the cron job is still registered. This is part of a broader pattern: issue [#4029](https://github.com/HKUDS/nanobot/issues/4029) also requests provider override support for Dream-specific models.

**Multiple GitAgent Protocol submissions**: [#4019](https://github.com/HKUDS/nanobot/pull/4019), [#4030](https://github.com/HKUDS/nanobot/pull/4030) — two distinct open PRs adding GitAgent Protocol (`agent.yaml` + `SOUL.md`) from different authors after previous attempts were closed. The repeated submissions suggest strong community alignment around portable agent standards, but the project has not yet communicated guidelines for acceptance.

## Bugs & Stability

**High severity**: [#4013](https://github.com/HKUDS/nanobot/issues/4013) — "Error calling LLM: stream stalled for more than 90 seconds." User reports upgrading from 0.1.5post2 to 0.2.0 introduced this error, making "any real work useless." A related fix PR [#4020](https://github.com/HKUDS/nanobot/pull/4020) makes stream-idle timeout configurable per-provider, addressing the root cause for local LLMs (LM Studio, Ollama). The Codex provider fix ([#4018](https://github.com/HKUDS/nanobot/pull/4018), merged) also directly addresses this class of bug.

**Medium severity**: [#2772](https://github.com/HKUDS/nanobot/issues/2772) — WeChat conversations limited to returning at most 10 messages per context token; user is asking for solutions to this limitation. No PR or maintainer response visible in today's data.

**Infrastructure bugs with fix PRs open**: Two MCP reconnection PRs remain open ([#4027](https://github.com/HKUDS/nanobot/pull/4027), [#4028](https://github.com/HKUDS/nanobot/pull/4028)) that extend the already-merged fixes, suggesting the MCP reconnection issue is not fully resolved. PR [#4025](https://github.com/HKUDS/nanobot/pull/4025) fixes a memory compaction bug where unprocessed history entries could be incorrectly compacted.

## Feature Request Clusters

**Dream system enhancements** (3 related items):
- [#3885](https://github.com/HKUDS/nanobot/issues/3885) — add global enable/disable switch for Dream cron jobs
- [#4029](https://github.com/HKUDS/nanobot/issues/4029) — provider override config for Dream-specific models
- [#3990](https://github.com/HKUDS/nanobot/pull/3990) — refactor Dream from two-phase to single-phase consolidation via AgentLoop (open PR)

**MCP notification & reconnection** (multiple PRs from same author):
- [#4014](https://github.com/HKUDS/nanobot/pull/4014) (merged), [#4028](https://github.com/HKUDS/nanobot/pull/4028) (open) — tool change notification support
- [#4012](https://github.com/HKUDS/nanobot/pull/4012) (merged), [#4027](https://github.com/HKUDS/nanobot/pull/4027) (open) — MCP reconnection fixes

**GitAgent Protocol** (multiple PRs, diverse authors):
- [#4019](https://github.com/HKUDS/nanobot/pull/4019), [#4030](https://github.com/HKUDS/nanobot/pull/4030) — open, awaiting project guidance after earlier closes
- No maintainer communication about acceptance criteria visible in PR comments

**System prompt customization**: [#4022](https://github.com/HKUDS/nanobot/pull/4022) — adds ability to toggle system prompt components; [#4032](https://github.com/HKUDS/nanobot/pull/4032) — adds optional `AUTHORITY.md` bootstrap file for moral/behavioral instructions near the start of the agent system prompt.

**WebUI workspaces**: [#4007](https://github.com/HKUDS/nanobot/pull/4007) — adds Codex-style project workspaces with access controls, chat-to-project binding, and composer permission system.

## User Feedback Summary

**Positive**: The `nanobot-webui` project ([#1922](https://github.com/HKUDS/nanobot/issues/1922)) received strong approval (10 👍), indicating that users actively want self-hosted GUI management. The 0.1.5post2 user in [#4013](https://github.com/HKUDS/nanobot/issues/4013) explicitly said "it's been very good (way to say ty)" before the upgrade regressed their experience.

**Pain points**: The 90-second streaming timeout is causing real work disruption for local LLM users after the 0.2.0 upgrade. The WeChat 10-message limit ([#2772](https://github.com/HKUDS/nanobot/issues/2772)) remains unaddressed. The forced Dream job registration ([#3885](https://github.com/HKUDS/nanobot/issues/3885)) frustrates users who have explicitly disabled memory features.

## Backlog Watch

**Old open issue with strong community signal**: [#1922](https://github.com/HKUDS/nanobot/issues/1922) (created March 2026, 2 months old) — while closed, the `nanobot-webui` project idea has 10 👍 and merits maintainer attention for potential integration or endorsement.

**Lingering bug with no visible response**: [#2772](https://github.com/HKUDS/nanobot/issues/2772) (created April 2026, nearly 2 months old) — WeChat message limit of 10; user is asking for solutions but no maintainer or community fix is visible.

**Functionality request awaiting maintainer decision**: [#3885](https://github.com/HKUDS/nanobot/issues/3885) (created May 18, 10 days old) — Dream system global toggle; 4 comments with no maintainer response visible. This combines with [#4029](https://github.com/HKUDS/nanobot/issues/4029) (created today) for a coherent request cluster.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest – 2026-05-28

## Today's Activity Brief
In the last 24 hours, 31 issues were updated (21 open, 10 closed) and 50 pull requests were touched (41 open, 9 merged/closed). No new releases were cut. Activity centered on security-critical bug fixes (credential redaction, bearer-token revocation), onboarding/configuration inconsistencies, and the continued rollout of the v0.8.x integration queue. The most commented issue is the ongoing DeepSeek-V4 API incompatibility (14 comments). A large cross-cutting PR (#6848) introduces the zerocode TUI, RPC socket transport, and DenyWithEdit approval, targeting a beta-2 release.

## Releases
None.

## Project Progress
Nine pull requests were merged or closed in the last 24 hours. Notable progress evidenced by closed issues:

- **RFC accepted and closed**: [#6969] RFC: unified output routing model (per-peer modality preference + agent send_via tool) – closed after 1 comment.
- **Stream integrity fix closed**: [#6661] Feature: preserve committed streamed output during WebSocket steering.
- **Cron bug fixed**: [#6632] bug(cron): manual cron_run still persists best-effort delivery failures as ok – addressed via PR #6026 follow-up.
- **Container daemon channel crash fixed**: [#6888] Bug: Daemon component 'channels' exits unexpectedly in container (v0.8-beta-1).
- **OpenAI Codex OAuth fallback fixed**: [#6923] Bug: OpenAI Codex OAuth works, but providers.models.openai.<alias> falls back to OPENAI_API_KEY.
- **Browser requirements documented**: [#6921] Feature: Document minimum browser requirements and add an unsupported-browser banner.
- **Test flakiness resolved**: [#6813] bug(tests): make channel parallel-dispatch test avoid brittle timing threshold.
- **Log interleaving fixed**: [#6944] Bug: Interactive mode — [system] log lines printed inline, drowning out conversation output.
- **Discord preflight retry fixed**: [#6879] fix(discord): keep gateway preflight 429 retryable (S1 workflow blocker).

## Community Hot Topics
- [#6059] **[Bug]: Incompatible with DeepSeek-V4 API format** (14 comments, 4 👍) — Users report `thinking` mode errors with DeepSeek-V4-Pro and V4-Flash. The error suggests the API response structure changed in V4. A fix PR [#6980] (preserve `reasoning_content` in native tool requests) is open and likely addresses the root cause.
- [#6808] **RFC: Work Lanes, Board Automation, and Label Cleanup** (7 comments) — Community input on automating project board workflow and label hygiene for v0.80-beta1.
- [#6074] **audit: track 153 commits lost in bulk revert c3ff635 for recovery** (2 comments) — Long-standing tracking issue for recovering features and fixes that were rolled back in a bulk revert.

## Bugs & Stability

### S0 – Data loss / Security risk
- [#6978] **bug(config): redact nested secrets in object-array property displays** (new, no fix PR yet) — `Vec<T>` config fields with `#[secret]` nested fields are serialised in plain text, exposing credentials. **Critical**: no mitigation available in current code.

### S1 – Workflow blocked
- [#6984] **bug(gateway): token rotation does not revoke existing bearer tokens** (new, no fix PR yet) — CLI pairing-code rotation and admin token renewal leave old tokens valid.
- [#6975] **[Bug]: `zeroclaw onboard` marks agents/profiles sections complete without writing config** (new, no fix PR yet) — Interactive onboarding records completion state but does not actually write `[agents.*]` or profile sections to `config.toml`.
- [#6964] **[Bug]: Windows desktop build fails with duplicate MANIFEST resource (CVT1100/LNK1123)** (new, no fix PR yet) — CI blocker for Windows Tauri build.
- [#6965] **[Bug]: canvas page never receives frames pushed by web-UI chat agent** (new, no fix PR yet) — WebSocket chat agent's `canvas` tool output never appears.
- [#6959] **bug: ToolAccessPolicy not applied to eager built-in tools — only deferred/tool_search layer is gated** (new, no fix PR yet) — Allow/deny policies bypassed for tools registered directly in the registry.

### S2 – Degraded behavior (selected)
- [#6059] **Incompatible with DeepSeek-V4 API format** – open, fix in progress via [#6980].
- [#6976] **Web UI WebSocket chat fails with 1006 — missing `?agent=` query parameter** – UI or server-side regression.
- [#6958] **Matrix channel: session keyed on event_id causes amnesia between messages** – no conversation history across messages.
- [#6923] **OpenAI Codex OAuth fallback** – already closed as fixed.

## Feature Request Clusters

**Security & Credential Hardening**
- [#6977] Align `http_request` private-host allowlist with `web_fetch` (accepted).
- [#6971] RFC: Security UX, runtime credential boundaries, and isolation defaults (needs maintainer review).
- [#6982] fix(config): classify credential-shaped config surfaces (open PR).

**Plugin System & Architecture**
- [#6489] "Everything is a plugin" — unified plugin catalog (long-term architecture).
- [#6943] RFC: Deconflict Plugin System Goals in FND-001 (replace Extism with wasmtime component model).
- [#6915] Skill-scoped tool activation (temporary elevation) (blocked, needs maintainer review).

**Observability & TUI**
- [#6966] Capture prompt/completion content on `llm.call` spans (open PR for Langfuse/Tempo).
- [#6825] TUI UX tracker (theming, keybindings, navigation).
- [#6848] Introduce zerocode TUI, RPC socket transport, DenyWithEdit approval (XL PR, known issues).
- [#6952] Add Tab/Shift+Tab mode cycling for compact keyboards (open PR).

**Channel & Integration Enhancements**
- [#6389] Per-recipient reply pacing across 9 channels (open, needs author action).
- [#5838] Webhook channel retry logic with exponential backoff (open).
- [#6833] Add Jina AI as web_search provider (open).
- [#6968] Configurable URI and response_format for OpenAI TTS provider (open).

**Memory & Skills**
- [#6907] Introduce `MemoryStrategy` trait and `DefaultMemoryStrategy` (open PR).
- [#6924] Add builtin tool kind for skill-scoped elevation (open PR).
- [#6775] Add `file_upload_bundle` tool for multi-file uploads (open PR).

## User Feedback Summary
- **DeepSeek-V4 API failure** (#6059) blocks users relying on DeepSeek as provider; workaround none until fix lands.
- **Onboarding broken** (#6975) – new users cannot complete setup because `zeroclaw onboard` does not write configuration, leaving agents non-functional.
- **Web UI WebSocket crash** (#6976) – chat unusable for users of the web interface.
- **Matrix channel amnesia** (#6958) – bot has no conversation memory, making it useless for ongoing discussions.
- **TUI keyboard limitations** (#6950, #6952) – compact keyboard users cannot navigate TUI modes. Fix PR #6952 adds Tab/Shift+Tab.
- **Security concerns** (#6978, #6984, #6959) – credentials leaked in config displays, token rotation ineffective, tool access controls bypassed. Users expect better safety defaults.
- **Positive signals**: RFCs (#6808, #6969)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest – 2026-05-28

## Today's Activity Brief
Four issues and six pull requests were updated in the last 24 hours, all remaining open except for one merged PR. A new nightly build (`v0.2.9-nightly.20260528`) was published, though it is flagged as potentially unstable. Bug reports were filed covering Android 32‑bit incompatibility, OpenAI/Codex OAuth empty responses, and dropped `tool_calls` messages over the pico WebSocket channel. Three fix PRs were opened in response to these and other stability concerns, while the project also merged a major streaming feature for the pico channel.

## Releases
- **nightly (v0.2.9-nightly.20260528.28ec5793)** – Automated nightly build against `main`. No breaking changes or migration notes were provided. Full changelog: [compare/v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main). Use with caution.

## Project Progress
One pull request was merged:
- **#2853** (merged) – *feat(pico): add ChatStream support for real-time token streaming*. This enables streaming of tokens to WebSocket clients connected via the pico channel, with streamer tracking per conversation turn and integration with the provider’s `ChatStream`.
  [https://github.com/sipeed/picoclaw/pull/2853](https://github.com/sipeed/picoclaw/pull/2853)

No other PRs were closed today.

## Community Hot Topics
None of the active issues or PRs attracted more than one comment, but several drew attention:

- **#2952** – *[Feature] 好久没发新版本了* (translated: “haven’t released a new version in a while”). The reporter describes three pain points: the `exec` command’s `actions:run` default behavior, QQ channel restart loops, and a request to improve the model configuration UI.
  [https://github.com/sipeed/picoclaw/issues/2952](https://github.com/sipeed/picoclaw/issues/2952)

- **#2953** – *Bug: OpenAI/Codex OAuth returns empty response because response.output_text.delta stream events are ignored*. The user explains that OAuth succeeds but the agent returns “empty response” due to mishandled streaming events.
  [https://github.com/sipeed/picoclaw/issues/2953](https://github.com/sipeed/picoclaw/issues/2953)

- **#2958** – *tool_calls messages dropped during consecutive requests via pico channel*. The issue reports that after the first tool invocation, subsequent `tool_calls` are not delivered to the UI. A fix PR (#2957) has already been submitted.
  [https://github.com/sipeed/picoclaw/issues/2958](https://github.com/sipeed/picoclaw/issues/2958)

## Bugs & Stability
Three new bugs were reported today, with corresponding fix PRs for two of them:

| Issue | Summary | Severity | Related Fix PR |
|-------|---------|----------|----------------|
| #2954 | **32‑bit Android not supported** – environment reported but no workaround given. | Medium | None |
| #2953 | **OpenAI/Codex OAuth empty response** – streaming events ignored, causing silent failures. | High | None yet |
| #2958 | **tool_calls dropped on consecutive requests** – breaks multi‑turn tool use. | High | #2957 (open) |
Additionally, two other fix PRs were opened today:
- **#2955** – Fixes singleton PID check misidentifying reused PIDs (e.g., from unrelated processes).
  [https://github.com/sipeed/picoclaw/pull/2955](https://github.com/sipeed/picoclaw/pull/2955)
- **#2956** – Preserves channel `enabled` state when merging `.security.yml` credentials (channels could be inadvertently disabled).
  [https://github.com/sipeed/picoclaw/pull/2956](https://github.com/sipeed/picoclaw/pull/2956)

## Feature Request Clusters
- **UI/UX improvements for model configuration** – Issue #2952 requests that the model interface default to showing saved API keys and allow drop‑down selection of providers, with key reuse and a “test connection” button to fetch model lists.
- **Dynamic MCP headers** – PR #2696 (still open) proposes allowing channels to forward HTTP headers per‑request to MCP servers via `InboundContext.Raw`. It has been open for a month and was updated today.
  [https://github.com/sipeed/picoclaw/pull/2696](https://github.com/sipeed/picoclaw/pull/2696)
- **Configurable TLS verification for MQTT** – PR #2899 (open) adds a `TLSSkipVerify` option to the MQTT channel, addressing a hardcoded insecure default.
  [https://github.com/sipeed/picoclaw/pull/2899](https://github.com/sipeed/picoclaw/pull/2899)

## User Feedback Summary
- **Android 32‑bit users** are blocked from running PicoClaw entirely (#2954).
- **OpenAI/Codex users** report that successful OAuth flows still result in “empty response” errors, undermining trust in the provider integration (#2953).
- **Pico channel users** lose tool call messages after the first request, breaking interactive workflows (#2958).
- A user expressed frustration that no release had been cut recently, and also described two concrete bugs: the `exec` command defaulting to an empty `actions:run`, and a QQ channel restart causing repeated restarts unless context is cleared (#2952).

## Backlog Watch
Two open PRs have lingered for extended periods and would benefit from maintainer review:
- **#2696** – *feat(mcp): support per-request dynamic headers from channel context* – opened 2026-04-28, last updated today. No comments or reviews yet.
  [https://github.com/sipeed/picoclaw/pull/2696](https://github.com/sipeed/picoclaw/pull/2696)
- **#2899** – *fix: add configurable TLS verification for MQTT channel* – opened 2026-05-20, last updated today.
  [https://github.com/sipeed/picoclaw/pull/2899](https://github.com/sipeed/picoclaw/pull/2899)

Both are feature enhancements with security implications. No maintainer response was noted.

</details>