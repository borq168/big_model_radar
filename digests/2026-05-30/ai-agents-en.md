# OpenClaw Ecosystem Digest 2026-05-30

> Issues: 330 | PRs: 500 | Projects covered: 4 | Generated: 2026-05-30 02:13 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-05-30

## 1. Today's Activity Brief

In the last 24 hours, OpenClaw saw substantial activity with **330 issues** (155 open/active, 175 closed) and **500 PRs** (331 open, 169 merged/closed). Four beta releases were published (all v2026.5.28-beta), each focusing on stabilizing the Agent and Codex runtime recovery. The project continues to address a high volume of regressions, particularly around the Codex harness, session lock handling, and event-loop starvation. Many of the day’s top bug reports center on version-specific regressions introduced in the last week.

## 2. Releases

Four releases were published today, all **v2026.5.28-beta** (beta.1, beta.2, beta.3, beta.4). Each carries the same headline improvements:

- **Agent and Codex runtime recovery** is steadier: subagents keep cwd/workspace separation, hook context stays prompt-local, session locks release on timeout abort, stale restart continuations are avoided, and Codex app-server/helper failures no longer tear down shared runtime state.

No breaking changes or migration notes have been flagged in these release notes. Users upgrading from earlier 2026.5 builds should monitor for Codex route compatibility (see Bugs section below).

## 3. Project Progress

**Merged/closed PRs (selected highlights):**

- **#88161** – [`Fix restart sentinel internal continuations`](https://github.com/openclaw/openclaw/pull/88161): Makes restart-sentinel turns internal by default, preventing synthetic restart outputs from auto-delivering to the originating channel. (CLOSED, merged)
- **#88134** – [`fix(imessage): preserve SMS approval reply routes`](https://github.com/openclaw/openclaw/pull/88134): Prevents SMS-qualified iMessage routes from being lost across context and session storage. (CLOSED, merged)
- **#88191** – [`Fix Codex raw image generation media projection`](https://github.com/openclaw/openclaw/pull/88191): Projects raw Codex app-server image generation payloads into managed OpenClaw media artifacts, with replay safety. (CLOSED, merged)
- **#87743** – [`fix(reply): deliver plugin binding replies under message-tool mode`](https://github.com/openclaw/openclaw/pull/87743): Ensures plugin-owned binding replies are delivered even when a group/channel uses message-tool visible replies. (CLOSED, merged)
- **#82056** – [`feat(minimax): migrate OAuth to account/oauth2 endpoints + add refresh`](https://github.com/openclaw/openclaw/pull/82056): Modernises MiniMax OAuth flow and adds token refresh support. (CLOSED, merged)
- **#88190** – [`feat(minimax): add MiniMax-M3 with native multimodal + 512K context`](https://github.com/openclaw/openclaw/pull/88190): Adds MiniMax-M3 as a first-class catalog entry. (CLOSED, merged)

**Other notable progress:**

- **#87956** – [`fix(codex): keep turn alive after image_generation_call`](https://github.com/openclaw/openclaw/pull/87956): Prevents the idle watchdog from retiring a Codex turn prematurely when an image generation finishes. (CLOSED, merged)
- **#88048** – [`feat(gateway): add opt-in WebChat OpenResponses progress event`](https://github.com/openclaw/openclaw/pull/88048): Adds an SSE event for early progress in WebChat (open).
- **#87481** – [`fix(agents): broadcast agent stream=thinking to gateway clients`](https://github.com/openclaw/openclaw/pull/87481): Decouples streamReasoning from channel callback for webchat/Control UI runs (open).

## 4. Community Hot Topics

**Most commented issues:**

1. [#67035 – Windows chat UI regression: input text swallowed, streamed replies invisible](https://github.com/openclaw/openclaw/issues/67035) (13 comments, P1, open). Users report that after upgrading to 2026.4.14, the web/dashboard chat UI on Windows fails to render input and streamed replies properly. Long-standing issue still unresolved.

2. [#84038 – doctor --fix silently migrates intentional openai-codex/ config, breaking PI+OAuth runtime](https://github.com/openclaw/openclaw/issues/84038) (12 comments, P1, closed). Doctor --fix incorrectly rewrites Codex config, causing 3-4x token inflation. Community frustration over silent config migration. A fix appears to have been merged (closed status).

3. [#86820 – Codex OAuth compaction falls back to direct OpenAI API and fails without key](https://github.com/openclaw/openclaw/issues/86820) (11 comments, closed). Session compaction tries direct OpenAI API instead of Codex OAuth, leading to missing-key errors. Closed, likely fixed.

4. [#88102 – 2026.5.27 Codex runtime rejects openai/gpt-5.5](https://github.com/openclaw/openclaw/issues/88102) (11 comments, closed, P1). Regression in 2026.5.27 where the Codex harness refuses `openai/gpt-5.5` routes. Closed, suggesting a fix was deployed in today’s betas.

5. [#51871 – Control UI: Cron jobs not displayed in dashboard](https://github.com/openclaw/openclaw/issues/51871) (10 comments, closed, P2). Long-standing cron dashboard blank bug, closed recently.

**High-reaction issues:**

- [#86820](https://github.com/openclaw/openclaw/issues/86820) (👍6) – Codex OAuth compaction failures.
- [#77576](https://github.com/openclaw/openclaw/issues/77576) (👍4) – Telegram group responses route to webchat instead of Telegram (still open, P1).
- [#83184](https://github.com/openclaw/openclaw/issues/83184) (👍3) – Heartbeat-driven agent replies leave `pendingFinalDelivery` stuck (open, P1).

The dominant community concern is **Codex runtime regressions**—multiple issues report that upgrades break previously working Codex provider/routing setups, forcing rollbacks or workarounds.

## 5. Bugs & Stability

**Critical/P1 bugs reported or updated in the last 24h:**

- **#86948** – [Beta blocker: codex — app-server turns silently drop with event loop saturation](https://github.com/openclaw/openclaw/issues/86948) (P1, beta-blocker, closed). Turns fail after 1-4 successful interactions due to event-loop starvation. A fix was merged (closed).
- **#87744** – [Codex-backed Telegram turns repeatedly time out waiting for turn/completed](https://github.com/openclaw/openclaw/issues/87744) (P1, open). Telegram sessions using Codex runtime never reach terminal state after update to 2026.5.27. No fix PR yet.
- **#87646** – [Feishu cannot dispatch messages after v2026.5.27 upgrade](https://github.com/openclaw/openclaw/issues/87646) (P1, open). TypeError: read property 'run' of undefined. Need live repro.
- **#86509** – [Event-loop starvation returns (87s session-lock phase) on v2026.5.22](https://github.com/openclaw/openclaw/issues/86509) (P1, closed). Regression re-appeared after earlier fix; closed after rollback workaround.
- **#88102** – [Codex runtime rejects openai/gpt-5.5](https://github.com/openclaw/openclaw/issues/88102) (P1, closed). Fix likely included in 2026.5.28 betas.
- **#86358** – [Event-loop starvation during context compaction causes fetch timeouts](https://github.com/openclaw/openclaw/issues/86358) (P1, closed). 16.9s timer delay; fix merged.
- **#87711** – [Empty assistant delivery on first turn after /new on Telegram-routed topic lane](https://github.com/openclaw/openclaw/issues/87711) (P1, open). Footer-only output with “— out” usage. Needs info.
- **#87536** – [Native hook relay bridge never spawns on 2026.5.26](https://github.com/openclaw/openclaw/issues/87536) (closed, fix likely in betas).
- **#87641** – [opencode-go/kimi-k2.6: every multi-turn task rejected with opaque 400](https://github.com/openclaw/openclaw/issues/87641) (P2, closed). Provider 400 errors on second model call; closed.
- **#87650** – [onboard and doctor --fix did not recover Codex provider/runtime mismatch after update](https://github.com/openclaw/openclaw/issues/87650) (P1, open). Upgrade from 2026.5.22 to 2026.5.27 left Codex out of sync; workaround required.

**Notable regressions:** Several issues report that the 2026.5.27 release introduced Codex routing failures, Telegram timeouts, and event-loop starvation. The day’s betas appear to address these, but user feedback suggests some problems persist.

**Stability themes:** Event-loop starvation remains a recurrent issue (issues #86509, #86358, #86948, #75378). Session lock races and endless lock states are also common (#57019, #87217, #85888).

## 6. Feature Request Clusters

- **Slack Modals** – [#88154](https://github.com/openclaw/openclaw/issues/88154) (open, enhancement): First-class support for Slack modals to collect structured user input. No maintainer response yet.
- **Native web_search passthrough for ZAI (GLM) and Google (Gemini)** – [#17925](https://github.com/openclaw/openclaw/issues/17925) (open, 7 months old, 5👍): Users want the same native web_search support already provided for xAI Grok.
- **TUI Shift+Enter for newline** – [#10118](https://github.com/openclaw/openclaw/issues/10118) (open, 4 months old, 3👍): Multi-line message support in terminal UI.
- **Per-agent dreaming configuration** – [#67413](https://github.com/openclaw/openclaw/issues/67413) (open, April, 3👍): Allow scheduling dreaming per workspace to avoid OOM.
- **Reliable wall-clock time source for agents** – [#82968](https://github.com/openclaw/openclaw/issues/82968) (closed, but discussion): Expose explicit date/time to agents instead of uptime.

**Related open PRs:**

- **#87072** – [`feat(telegram): opt-in interleaved progress lane`](https://github.com/openclaw/openclaw/pull/87072) – Adds reasoning/live progress for Telegram.
- **#81851** – [`feat(anthropic): claude-cli-interactive backend — stream reasoning via local TLS proxy`](https://github.com/openclaw/openclaw/pull/81851) – New backend

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-05-30

## 1. Daily Cross-Project Overview

Today’s activity across the three tracked projects shows a wide disparity in scale and urgency. OpenClaw dominated with 500 pull requests and four beta releases aimed at stabilizing its Codex runtime and agent recovery, while NanoBot and Zeroclaw saw no releases but faced concentrated bug influxes — NanoBot from a single security researcher and Zeroclaw from critical channel integration failures. Common threads include event-loop/concurrency problems (OpenClaw, NanoBot), MCP tool integration issues (NanoBot, Zeroclaw), and broken chat channel workflows (all three projects). No project published a stable release; all are mid-cycle with open regressions.

## 2. Activity Comparison

| Project    | Issues (open/closed) | PRs (open/merged) | Releases Today | Key Activity Note |
|------------|----------------------|-------------------|----------------|-------------------|
| OpenClaw   | 330 (155 open, 175 closed) | 500 (331 open, 169 merged) | 4 beta (v2026.5.28-beta.1–.4) | High-volume day with multiple betas targeting Codex runtime regressions |
| NanoBot    | 32 (30 open, 2 closed)     | 42 (28 open, 14 merged)    | None           | Security & correctness wave from one contributor; 20+ bug reports with fix PRs same day |
| Zeroclaw   | 18 (17 open, 1 closed)     | 46 (38 open, 8 merged)     | None           | Focus on channel bugs (Slack, Telegram) and per-agent configuration features |

## 3. OpenClaw Compared With Peers

- **Activity volume** is an order of magnitude higher: OpenClaw’s 500 PRs and 330 issues dwarf NanoBot (42 PRs) and Zeroclaw (46 PRs), reflecting both its larger contributor base and the urgency of recent regressions.
- **Release cadence** differs sharply. OpenClaw pushed four betas in one day, while peers remain at their last stable tag (Zeroclaw v0.7.5, NanoBot no recent release).
- **Technical focus** — OpenClaw is primarily addressing runtime recovery (Codex, event-loop starvation, session locks), while NanoBot is deep in security hardening and Zeroclaw is fixing broken channel integrations and adding configuration granularity.
- **Community surface area** is largest in OpenClaw, with multiple high-comment issues (e.g., #67035 with 13 comments) and reaction-heavy bugs. NanoBot’s discussions are shorter; Zeroclaw’s are modest but include RFC-style issues (#6996, #6998).

## 4. Shared Technical Focus Areas

The following requirements appeared across two or more projects:

- **Event-loop / concurrency stability** — OpenClaw: event-loop starvation bugs (#86509, #86358, #86948). NanoBot: duplicate cursor allocation under concurrent writes (#4081), per-session lock for direct calls (#4080). Zeroclaw: no explicit concurrency bug today, but a pending PR (#6389) addresses per-recipient pacing — a related concern.
- **Channel integration reliability** — OpenClaw: Telegram responses route to wrong channel (#77576). NanoBot: Matrix verification missing (#4042). Zeroclaw: Slack Socket Mode completely broken (#6992), Telegram voice transcription fails (#6999). All three have at least one channel-specific issue where user workflows are blocked.
- **MCP tool handling** — NanoBot: MCP configuration allows SSRF loopback before proper rejection (#4074). Zeroclaw: `tool_filter_groups` is a no-op for real MCP tools (#6699). OpenClaw does not explicitly mention MCP today.
- **Security / authorization gaps** — NanoBot: multiple authentication bypass and ownership issues (#4075–#4078). Zeroclaw: sandbox policy RFC (#6996), native tool serialization ignores risk profile (#6991). OpenClaw: no security-specific items in today’s data.

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Zeroclaw |
|-----------|----------|---------|----------|
| **Primary focus** | Core agent runtime & Codex stability | Security hardening & model configuration | Channel integrations & per-agent flexibility |
| **Target user** | Developers running self-hosted agent infrastructure | Hobbyists/teams needing quick agent deployment | Users requiring multi-channel, sandboxed agent deployments |
| **Architecture** | Monolithic with Codex abstraction layer | Modular with plugin/API support | Component-based with TUI and RPC socket (beta) |
| **Current pain point** | High regression rate from rapid feature churn | Memory/context pressure and silent failures | Critical channel outages and MCP integration gaps |
| **Community engagement style** | High-volume issue/PR discussion with active maintainer responses | Concentrated security report wave from one contributor | RFC-driven feature design with moderate comment activity |

## 6. Community Activity Notes

- **Activity tier 1 (high)**: OpenClaw — 500 PRs, 4 releases, 10+ P1 bugs in the last 24h, multiple hot threads.
- **Activity tier 2 (moderate)**: NanoBot — 42 PRs, 20+ new bugs/security reports, moderate comment activity.
- **Activity tier 3 (low)**: Zeroclaw — 46 PRs (but most in review), 18 issues, no releases, lower comment volume.

These tiers are based solely on today’s counts and release activity. No project exhibited complete stagnation; all had meaningful changes.

## 7. Evidence-Backed Observations

1. **Channel integration bugs are the most common cross-project pain point.**
   OpenClaw (#77576, Telegram misrouting), NanoBot (#4042, Matrix verification), and Zeroclaw (#6992 Slack blocked, #6999 Telegram transcription) all have at least one open channel issue blocking user workflows. The pattern suggests that channel code paths are under-tested across the ecosystem.

2. **Concurrency and event-loop issues remain recurring, not merely transient.**
   OpenClaw has three separate event-loop starvation issues in the last 24h alone (#86509, #86358, #86948). NanoBot adds concurrent cursor allocation (#4081) and lock bypass (#4080). Zeroclaw’s pending PR on per-recipient pacing (#6389) indirectly addresses similar timing concerns. The recurrence indicates root causes not yet fully eliminated.

3. **MCP (Model Context Protocol) integration is a growing concern for security and usability.**
   NanoBot’s security report on SSRF loopback via MCP (#4074) and Zeroclaw’s report that `tool_filter_groups` is ignored for MCP tools (#6699) show that MCP support is still maturing. Both projects have open PRs or RFCs addressing these gaps.

4. **Security and authorization hardening is concentrated in NanoBot today, but absent from the other two.**
   NanoBot had 7 distinct security bugs filed in the last 24h (authentication bypass, ownership enforcement, workspace escape). OpenClaw and Zeroclaw did not have equivalent security-focused issues in this snapshot, though Zeroclaw’s sandbox RFC (#6996) hints at future work.

5. **No clear cross-project signal on a single dominant feature request.**
   While local-first mode (Zeroclaw #5287, NanoBot #4043 context management) and model presets (NanoBot #3696) appear, they are each isolated to one project. The data does not support a statement like “everyone is prioritizing small models” or “everyone is adding Slack support.”

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-30

## 1. Today's Activity Brief
In the last 24 hours, 32 issues were updated (30 open/active, 2 closed) and 42 pull requests were updated (28 open, 14 merged/closed). No new releases were published. A concentrated wave of bug reports and security findings — primarily filed by @hamb1y — dominated the activity, with corresponding fix PRs opened on the same day. The project also saw two long-standing feature PRs closed/merged (model presets, Windows exec fix) and several community-reported issues resolved.

## 2. Releases
None.

## 3. Project Progress
Among the 14 merged/closed PRs observed today, the following notable changes advanced:

- **Model presets** – PR #3696 (by @chengyongru) merged, adding `ModelPresetConfig` for quick model switching with automatic failover and runtime switching support.
- **Windows multi-line execution fix** – PR #4051 (by @chengyongru) merged, bypassing `cmd.exe` for multi-line `python -c` commands on Windows by using PowerShell instead.
- **Per-session lock for direct calls** – PR #4104 (by @04cb) opened, addressing issue #4080 to prevent concurrent history corruption when `process_direct()` is called from API, cron, or WebUI.
- **Manual memory mode** – PR #4050 (by @outlook84) remains open, adding an isolated manual memory flow alongside automatic memory mode.

A large batch of security and correctness fixes from @hamb1y (PRs #4086–#4103) are open and under review, covering SSRF normalization, WebSocket auth, message tool authorization, Dream ownership, MCP probing, filesystem read-only roots, exec workspace symlinks, config validation, stream buffer keys, channel durability, tool-call parsing, and context trimming.

## 4. Community Hot Topics
- **Issue #4044 – Short term memory loss** (4 comments)
  [GitHub](https://github.com/HKUDS/nanobot/issues/4044)
  A user reports that the bot asks a question then immediately forgets it, likely due to context window pressure or system-prompt size issues. The thread suggests root causes in `SOUL.md`, `USER.md`, and `MEMORY.md` crowding the context. This is the most active issue today by comment count.

- **Issue #4042 – Matrix Channel: no m.key.verification.* handling** (1 comment)
  [GitHub](https://github.com/HKUDS/nanobot/issues/4042)
  Tagged `good first issue`. Users of Element X (matrix-rust-sdk client) see warnings about unverified devices because the Matrix channel does not implement verification handshake flows.

- **Issue #3006 – No warning when API key in arrears** (1 comment, closed)
  [GitHub](https://github.com/HKUDS/nanobot/issues/3006)
  User requests a warning instead of silent failure when the API key is exhausted. No related PR found; presumably resolved in a different way.

- **Issue #4043 – Config to disable document extraction** (1 comment, closed)
  [GitHub](https://github.com/HKUDS/nanobot/issues/4043)
  Feature request for a setting to prevent automatic document extraction/injection into the model. Closed, likely implemented.

## 5. Bugs & Stability
Today saw a large influx of bug and security reports, mostly from @hamb1y. All listed below have open fix PRs as of May 29–30.

### High severity (security, data loss, authentication bypass)
- **#4078 – OpenAI-compatible API accepts unauthenticated requests** –
  [Issue](https://github.com/HKUDS/nanobot/issues/4078) | Fix: #4103
- **#4077 – WebSocket token issue route mints tokens without issue secret** –
  [Issue](https://github.com/HKUDS/nanobot/issues/4077) | Fix: #4103
- **#4074 – MCP HTTP/SSE configuration attempts loopback before SSRF rejection** –
  [Issue](https://github.com/HKUDS/nanobot/issues/4074) | Fix: #4100
- **#4076 – message tool lacks outbound recipient authorization** –
  [Issue](https://github.com/HKUDS/nanobot/issues/4076) | Fix: #4102
- **#4075 – Dream can overwrite user-created skills without ownership enforcement** –
  [Issue](https://github.com/HKUDS/nanobot/issues/4075) | Fix: #4101
- **#4073 – Filesystem extra_allowed_dirs treated as writable roots** –
  [Issue](https://github.com/HKUDS/nanobot/issues/4073) | Fix: #4099
- **#4072 – ExecTool restricted workspace bypass via relative symlinks** –
  [Issue](https://github.com/HKUDS/nanobot/issues/4072) | Fix: #4098

### Medium severity (concurrency, data corruption, logic errors)
- **#4080 – process_direct bypasses per-session dispatch locks** –
  [Issue](https://github.com/HKUDS/nanobot/issues/4080) | Fix: #4104
- **#4081 – MemoryStore.append_history can allocate duplicate cursors under concurrent writes** –
  [Issue](https://github.com/HKUDS/nanobot/issues/4081)
- **#4079 – API empty-response retry can duplicate user turns** –
  [Issue](https://github.com/HKUDS/nanobot/issues/4079)
- **#4082 – Cron jobs reuse fixed session context across runs** –
  [Issue](https://github.com/HKUDS/nanobot/issues/4082)
- **#4056 – Context trimming can drop the assistant question immediately before user reply** –
  [Issue](https://github.com/HKUDS/nanobot/issues/4056) | Fix: #4089
- **#4066 – Corrupt/high last_consolidated can hide entire session history** –
  [Issue](https://github.com/HKUDS/nanobot/issues/4066) | Fix: #4090
- **#4057 – Distinct session keys can collide on disk after filename sanitization** –
  [Issue](https://github.com/HKUDS/nanobot/issues/4057) | Fix: #4090

### Low severity (cosmetic, edge cases)
- **#4065 – Invalid NANOBOT_STREAM_IDLE_TIMEOUT_S crashes streaming** –
  [Issue](https://github.com/HKUDS/nanobot/issues/4065) | Fix: #4095
- **#4067 – Invalid config silently falls back to defaults** –
  [Issue](https://github.com/HKUDS/nanobot/issues/4067) | Fix: #4095
- **#4060 – Anthropic provider can emit assistant content blocks without required type** –
  [Issue](https://github.com/HKUDS/nanobot/issues/4060) | Fix: #4093
- **#4061 – OpenAI-compatible text-format tool calls not parsed** –
  [Issue](https://github.com/HKUDS/nanobot/issues/4061) | Fix: #4092
- **#4059 – Non-stream parser preserves duplicate tool call IDs** –
  [Issue](https://github.com/HKUDS/nanobot/issues/4059) | Fix: #4092
- **#4058 – Tool-result protocol repair allows missing/duplicate states** –
  [Issue](https://github.com/HKUDS/nanobot/issues/4058) | Fix: #4091
- **Matrix stream buffer keyed only by chat_id** (#4068) – Fix: #4096
- **Stream delta coalescing ignores _stream_id** (#4063) – Fix: #4094
- **Pending mid-turn messages lose runtime context** (#4064) – Fix: #4094
- **WebSocket drops proactive messages when no subscribers** (#4062) – Fix: #4094
- **Dream cron job registered without enabled gate** (#4069) – No fix PR yet

## 6. Feature Request Clusters
- **Disable document extraction** – Issue #4043 (closed) and a related discussion in #3006 indicate users want more control over automatic content injection into model context.
- **Manual memory mode** – PR #4050 introduces a separate memory flow independent of automatic memory, tied to issues #3885 and #3948 (not shown in today’s data).
- **Matrix device verification** – Issue #4042 asks for E2EE verification handshake support for matrix-rust-sdk clients.
- **Model presets** – PR #3696 (merged) adds named model presets with failover and runtime switching, addressing a long-standing request for easier model configuration.

## 7. User Feedback Summary
- **Pain with memory/context**: Issue #4044 describes the bot forgetting the conversation mid-turn, which appears to be a common frustration. No immediate resolution has been posted.
- **Silent failures**: Issue #3006 (closed) shows dissatisfaction when API key exhaustion causes no visible warning — users want explicit error feedback.
- **Matrix client compatibility**: Issue #4042 highlights friction when using modern Matrix clients (Element X) due to unhandled verification flows.
- **Configurability demand**: Issue #4043 (closed) and the large number of config-related bug reports (e.g., #4067, #4065) suggest users value strict validation and granular controls.

## 8. Backlog Watch
- **Issue #3006** – Opened 2026-04-10, closed 2026-05-29. Resolved after ~7 weeks, but no PR explicitly linked; may have been fixed elsewhere.
- **Issue #4042** – Open since 2026-05-28, tagged `good first issue`, no associated PR yet. May need maintainer guidance or a contributor pickup.
- **Issue #4069** (Dream cron without enabled gate) and **#4081** (duplicate cursors) are open bugs without a fix PR at this time.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest – 2026-05-30

## 1. Today's Activity Brief

Over the past 24 hours, Zeroclaw saw 18 issues updated (17 open/active, 1 closed) and 46 pull requests updated (38 open, 8 merged/closed). No new releases were tagged. The project continues to process a high volume of bug reports and feature PRs, with notable activity around channel integrations (Telegram, Slack, WhatsApp) and runtime/profile enhancements. Several critical bugs were reported, including Slack Socket Mode total rejection and Telegram voice transcription failures, while the v0.8.0-beta‑2 integration PR (#6848) remains in review as a major pending change.

## 2. Releases

None in the reported period. The latest official release remains v0.7.5 (documentation currently references v0.8.0‑beta‑1, which is noted as a bug – see #6997).

## 3. Project Progress

Eight PRs were merged or closed today. Key items among them:

- [PR #6607](https://github.com/zeroclaw-labs/zeroclaw/pull/6607) – Fixed provider kind routing so aliases correctly select the implementation.
- [PR #5450](https://github.com/zeroclaw-labs/zeroclaw/pull/5450) – Added IPv6 support and switched to `reqwest::Url` for web tools.
- [PR #6945](https://github.com/zeroclaw-labs/zeroclaw/pull/6945) – Added per‑agent `classifier_provider` to route reply‑intent checks to cheaper models.
- [PR #6907](https://github.com/zeroclaw-labs/zeroclaw/pull/6907) – Introduced `MemoryStrategy` trait and `DefaultMemoryStrategy` for memory lifecycle policy.
- [PR #6884](https://github.com/zeroclaw-labs/zeroclaw/pull/6884) – Fixed `web_fetch` tool treating `max_response_size=0` as unlimited instead of truncating to 1 byte.

Other closed PRs included fixes for GLM history pruning, Tauri linker flags, and documentation ownership paths.

## 4. Community Hot Topics

Most active issues by comment count and reactions:

- [Issue #6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) – `tool_filter_groups` is a no‑op for real MCP tools (7 comments). User reports a prefix‑check bug and missing deferred‑loading integration; maintainer accepted as high‑risk.
- [Issue #3090](https://github.com/zeroclaw-labs/zeroclaw/issues/3090) – Wecom channel support (5 comments). Request for WeCom (WxWork) integration; closed as the feature was likely implemented elsewhere.
- [Issue #5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) – Local‑First Mode for small models (2 reactions, 3 comments). Requests compact prompting, strict parsing, and no prompt leakage; accepted but still open.
- [Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) – Audit trail for 153 commits lost in a bulk revert (2 comments). Maintainer is tracking recovery; marked in‑progress.

These reflect user interest in MCP tool integration, local‑first capabilities, and WeCom channel support. The MCP bug (#6699) received the most discussion.

## 5. Bugs & Stability

High‑severity bugs updated or reported in the last 24 hours (ranked by severity label):

**S1 – Workflow blocked**
- [Slack Socket Mode](https://github.com/zeroclaw-labs/zeroclaw/issues/6992) – All messages rejected as “unauthorized user”. No fix PR referenced yet.
- [Telegram voice transcription](https://github.com/zeroclaw-labs/zeroclaw/issues/6999) – Always fails; channel never wires `transcription_provider` alias. No fix PR.
- [Documentation version mismatch](https://github.com/zeroclaw-labs/zeroclaw/issues/6997) – Docs reference v0.8.0‑beta‑1 while latest release is v0.7.5, blocking contributor workflow.

**S2 – Degraded behavior**
- [Native tool serialization](https://github.com/zeroclaw-labs/zeroclaw/issues/6991) – Ignores Risk Profile and Tool Filter restrictions in v0.8.0‑beta‑1.
- [TTS voice replies in multi‑agent config](https://github.com/zeroclaw-labs/zeroclaw/issues/7001) – Resolves wrong agent’s `tts_provider`.
- [Backspace CJK byte issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6995) – UTF‑8 CJK characters require 3 backspaces in CLI.

**S3 – Minor**
- [Onboarding wizard strings](https://github.com/zeroclaw-labs/zeroclaw/issues/7005) – Not using Fluent i18n path. A fix PR ([#7012](https://github.com/zeroclaw-labs/zeroclaw/pull/7012)) is open and localizes the wizard copy.

Several other bugs (risk:high) include the MCP `tool_filter_groups` no‑op (#6699), secret‑derivation header support (#6989), and sandbox policy gaps (#6996 – RFC stage).

## 6. Feature Request Clusters

The following themes emerged from today’s issues and PRs:

- **Local‑first / small model mode** – [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) proposes compact prompting, strict parser, and no prompt leakage. No dedicated PR yet.
- **Sandbox policy granularity** – [RFC #6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) requests config‑driven filesystem and network restrictions for Landlock/Bubblewrap/Seatbelt backends.
- **Schema‑Guided Reasoning (SGR)** – [RFC #6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) proposes cross‑provider structured output, superseding #4760.
- **New tool: file_download** – [PR #6957](https://github.com/zeroclaw-labs/zeroclaw/pull/6957) adds a config‑gated tool to fetch remote files into the workspace (read‑side of file endpoints).
- **Channel and provider integration** – Several PRs add per‑recipient reply pacing ([#6389](https://github.com/zeroclaw-labs/zeroclaw/pull/6389)), per‑agent classifier provider ([#6945](https://github.com/zeroclaw-labs/zeroclaw/pull/6945) – merged), and lean default channel bundles ([#6904](https://github.com/zeroclaw-labs/zeroclaw/pull/6904)).
- **TUI and v0.8.0‑beta‑2** – [PR #6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) (XL, still in review) introduces a TUI, RPC socket transport, DenyWithEdit approval, and other beta‑2 integration changes.
- **Runtime profiles** – [PR #7014](https://github.com/zeroclaw-labs/zeroclaw/pull/7014) (open) adds runtime‑profile support for agent loop tunables.

## 7. User Feedback Summary

Real pain points expressed in today’s issues:

- **MCP tool filtering broken** – User reports that `tool_filter_groups` has no effect on real MCP tools, making agent configuration misleading (#6699).
- **Slack channel unusable** – Slack Socket Mode rejects all messages, blocking a major integration (#6992).
- **Telegram voice notes silently dropped** – Transcription never wired; users lose voice interactions (#6999).
- **Multi‑agent TTS confusion** – Voice replies hit the wrong agent’s TTS provider (#7001).
- **CJK users face byte‑wise backspace** – Terminal input is painful for Asian languages (#6995).
- **Documentation mismatch** – Users following docs may encounter deprecated or non‑existent features (#6997).
- **No native tool restrictions respected** – Risk profiles and tool filters ignored in v0.8.0‑beta‑1, weakening security control (#6991).
- **Local‑first users want less bloat** – Request for compact prompts and no prompt leakage (#5287).
- **Sandbox policy too coarse** – Users want granular filesystem/network controls beyond current backends (#6996, RFC).

Satisfaction is difficult to gauge from bug reports alone, but the high number of S1 bugs indicates some user workflows are completely blocked.

## 8. Backlog Watch

Important issues and PRs that have remained open for an extended period or lack maintainer response:

- [PR #5187](https://github.com/zeroclaw-labs/zeroclaw/pull/5187) – ARM64 Docker target (opened 2026‑04‑02, needs‑author‑action). A high‑value CI improvement waiting for further updates.
- [Issue #5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) – Local‑First Mode (opened 2026‑04‑04, accepted but not yet assigned). Two reactions and community interest.
- [Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) – Audit of 153 lost commits (opened 2026‑04‑24, in‑progress). Important for recovery but no recent progress updates.
- [PR #6284](https://github.com/zeroclaw-labs/zeroclaw/pull/6284) – Fix for DeepSeek reasoning_content preservation (opened 2026‑05‑02, open without recent comments).
- [PR #6389](https://github.com/zeroclaw-labs/zeroclaw/pull/6389) – Per‑recipient reply pacing across 9 channels (opened 2026‑05‑05, needs‑author‑action). Substantial feature that could benefit many channels.

These items could benefit from maintainer triage or author updates to avoid permanent staleness.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ Summary generation failed.

</details>