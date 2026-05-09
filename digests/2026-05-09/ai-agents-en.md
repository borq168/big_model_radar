# OpenClaw Ecosystem Digest 2026-05-09

> Issues: 500 | PRs: 500 | Projects covered: 4 | Generated: 2026-05-09 02:04 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-05-09

## 1. Today's Activity Brief

The project saw heavy activity with **500 issues** and **500 pull requests** updated in the last 24 hours. Of those, **216 issues were closed** and **148 PRs were merged or closed**, indicating a strong focus on bug fixing and stabilization. No new releases were published today. A significant number of recent PRs target the **ACP runtime**, **session handling**, **configuration preservation**, and **gateway stability**, with several critical regressions appearing to have been resolved since yesterday.

## 2. Releases

None.

## 3. Project Progress

No new releases, but 148 PRs were merged or closed today. Among the most notable closures are:

- **#78407** – `openclaw doctor --fix` rewrote OpenAI‑Codex model references to OpenAI, locking out OAuth‑only users (closed with #79461 as follow‑up fix on 2026.5.7).
- **#77668** – Discord gateway hang on macOS (six closed duplicates, fix isolated to Carbon client lifecycle).
- **#73655** – Gateway leak triad on plugin restart (Manifest EADDRINUSE, signal‑handler accumulation, sync I/O starvation).
- **#76600** – ACP runtime string‑prompt failure (direct ACPX worked, `sessions_spawn` failed).
- **#78601** – Liveness watchdog restarting the gateway every few minutes (2026.5.6 regression).
- **#50590** – Sandbox resolved skill paths globally instead of locally.
- **#12590** – `memoryFlush` not firing reliably.
- **#78949** – Feishu group chat bot mentions receiving no response.
- **#77908** – Non‑main agent replies not delivered back to Telegram/Discord.
- **#77374** – Assistant messages disappearing from Control UI after each user message.

An unusually high number of ACP‑related fixes landed today, including PRs that address transcript writing, event log capturing, token usage persistence, session classification, warm‑restore of active sessions, and outbound delivery for spawn‑child turns (e.g., #79545, #79539, #79540, #79541, #79544, #79548, #79550, #79536, #79537, #79543, #79549, #79571, #79574, #79565, #79566, #79567, #74235, #78595). The large PR **#78595** refactors runtime state into a SQLite‑first model, and **#79328** replaces the core `oc‑path` implementation with a bundled plugin.

## 4. Community Hot Topics

The most active issues (by comment count) reveal intense debugging and user frustration around core reliability:

- **#14593** (29 comments, open) – Skill install failure in Docker because Homebrew is missing from the Linux container. Users want a Docker‑specific skill install path.
- **#34810** (29 comments, closed) – Agent suddenly lost filesystem exec/read/write capabilities around 4 AM ET. Closed, but the investigation was extensive.
- **#77668** (21 comments, closed) – Discord gateway hang on macOS after restart, affecting many users.
- **#78407** (19 comments, closed) – `openclaw doctor --fix` corrupted model refs for Codex‑OAuth users; follow‑up #79461 showed the fix wasn't complete on 2026.5.7.
- **#12590** (19 comments, closed) – `memoryFlush` unreliability caused by dedup logic race.
- **#73655** (17 comments, closed) – Compounded gateway leaks after a normal restart.
- **#22438** (16 comments, open) – Feature request for tiered bootstrap file loading to save tokens.
- **#22676** (16 comments, open) – Signal daemon race condition on SIGUSR1 restart leading to orphaned processes.

Community sentiment: Users deeply rely on the Docker, Discord, and filesystem capabilities, and regressions cause immediate disruption. The closure of many high‑severy bugs in the last 24 hours is likely a relief, but some issues remain open and attract continued discussion.

## 5. Bugs & Stability

**Critical / High‑severity bugs reported or updated today:**

| Issue | Status | Description | Fix PR |
|-------|--------|-------------|--------|
| #79455 | OPEN | Telegram DM topics broken after 2026‑05‑08; `message_thread_id` rejected for private DM topics | None yet |
| #78508 | OPEN | Control UI WebSocket RPC fails with `missing scope: operator.read` on 2026.5.5 (trusted‑proxy regression) | None yet |
| #78572 | CLOSED | Discord `message` tool send fails with "Unknown Channel" (2026.5.4 regression) | Closed, presumably fixed |
| #76063 | OPEN | MCP server tools still missing from agent request body (regression persists since v2026.4.27) | None yet |
| #78546 | OPEN | ACP `sessions_spawn` fails with `ACP_TURN_FAILED` while direct ACPX works | PRs #79545, #79539, #79540 etc. target ACP, but not explicitly this issue |
| #74837 | OPEN | `sessions_spawn` model parameter silently ignored; sub‑agents always use orchestrator default | None yet |
| #79492 | OPEN | Agent runtime returns empty response for `claude‑opus‑4‑7` while `infer model run` works | None yet |
| #77896 | OPEN | Matrix channel fails after host npm update to 2026.5.4 – `matrix‑js‑sdk` missing | None yet |
| #78407 | CLOSED | Doctor migration rewrote model refs – follow‑up #79461 indicates incomplete fix on 2026.5.7 | Closed, but follow‑up open |
| #78601 | CLOSED | Liveness watchdog restarting gateway every few minutes | Closed, fixed |
| #79461 | CLOSED | Doctor still rewrites `openai‑codex/*` → `openai/* + agentRuntime.id="codex"` on 2026.5.7 (Codex‑OAuth hosts) | Closed, presumably patched in 2026.5.8? |
| #78785 | OPEN | Claude‑CLI backend doesn't auto‑invalidate session after AbortError/FailoverError | None yet |
| #79408 | OPEN | Telegram forum‑topic replies vanish when `message_thread_id` becomes invalid | None yet |
| #78285 | CLOSED | iMessage per‑group `systemPrompt` not honored | Closed, fixed |
| #72979 | OPEN | `thought_signature` regression (Google Generative AI) – reappeared in 2026.4.25 after earlier fix | None yet |

## 6. Feature Request Clusters

Several clusters of user‑requested features remain open and active:

- **Native web search passthrough** – #17925 requests support for ZAI (GLM) and Google (Gemini) providers, similar to existing Grok support.
- **Telegram enhancements** – #20786 (Business Bot support), #8295 (`allowBots` for bot‑to‑bot communication), #20321 (allowlist by user IDs instead of group chat IDs), #45839 (inline buttons for pairing approve/deny).
- **Efficiency & token savings** – #22438 (tiered bootstrap loading) and #14785 (reduce tool schema token overhead) both aim to lower LLM costs per session.
- **Capability‑based permissions** – #12678 proposes a default‑deny model for skills/tools to protect against malicious or compromised skills.
- **Voice message support** – #78016 reports that voice messages sent to Matrix agents are not processed; users want transcription or direct audio handling.
- **Reaction‑triggered agent turns** – #17840 asks for opt‑in reaction events to wake the agent for interactive patterns (polling, reactions).
- **Session reuse for webhooks** – #11665 documents that `sessionKey` for multi‑turn webhook conversations does not work as documented.
- **Cron improvements** – #18160 (Direct Exec Mode to bypass LLM for simple commands) and #14376 (reason‑aware guardrails with circuit breakers) both seek to make cron jobs more reliable.
- **Channel awareness** – #20837 requests that the agent know which channel received

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-05-09

## 1. Daily Cross-Project Overview

Today’s activity across the four tracked projects shows a wide spread in volume and focus. OpenClaw dominated with 500+ issues and PRs updated, primarily around ACP runtime stabilization and bug regression fixes, while NanoBot, Zeroclaw, and PicoClaw operated at 10–45 PRs each. Zeroclaw and PicoClaw published new releases (v0.7.5 and a nightly), whereas OpenClaw and NanoBot did not. Common themes included tool-call safety, provider compatibility, and channel-specific reliability (Matrix, Feishu, Telegram). Several critical bugs were reported across projects, with Zeroclaw having the highest count of S1 (workflow-blocked) issues.

## 2. Activity Comparison

| Project    | Issues Updated | PRs Updated | Release Today | Key Activity Note |
|------------|----------------|-------------|---------------|-------------------|
| OpenClaw   | 500 (216 closed) | 500 (148 merged/closed) | None | Heavy stabilization: 148 PRs merged, focus on ACP runtime & gateway regressions |
| NanoBot    | 10 (6 open, 4 closed) | 22 (8 open, 14 merged) | None | Tool-call safety guards, Feishu topic fix, WebUI redesign, small bug fixes |
| Zeroclaw   | 19 (14 open, 5 closed) | 45 (33 open, 12 merged) | v0.7.5 (in-browser onboarding) | Provider architecture discussion, Matrix stability, S1 bugs (image paths, approval bypass) |
| PicoClaw   | 20 (6 open, 14 closed) | 42 (26 open, 16 merged) | Nightly v0.2.8-nightly | MQTT channel merged, exec tool safety, OAuth empty response, many stale closures |

## 3. OpenClaw Compared With Peers

- **Activity volume**: OpenClaw’s 500+ issues and PRs far exceed the other projects (10–45 each). This reflects either a much larger contributor base or a concentrated push to resolve a backlog of regressions.
- **Technical focus**: OpenClaw’s activity is dominated by deep runtime and session-layer fixes (ACP, SQLite-first state model, gateway watchdog). In contrast, NanoBot, Zeroclaw, and PicoClaw show more incremental feature work and channel-specific bug fixes.
- **Community surface area**: OpenClaw’s most-discussed issues (29 comments on #14593 and #34810) indicate high user engagement and frustration with core reliability. Other projects have smaller discussion threads (3–8 comments at most).

## 4. Shared Technical Focus Areas

Multiple projects addressed similar technical requirements today:

- **Tool-call safety and loop prevention**: NanoBot implemented guards for repeated identical local tool calls (#3701, #3702) and closed related issues. PicoClaw merged a fix for exec tool safety guard false positives (#2826). OpenClaw’s #73655 touched on sync I/O starvation and signal-handler accumulation, though not directly tool loops.
- **Channel-specific session/topic routing**: Feishu topic leaks were fixed in NanoBot (#3704) and reported in Zeroclaw (#6524, Matrix root timeline). PicoClaw merged a fix for Matrix allow_from (@-prefixed entries, #2827) and a fix for Telegram topic context preservation (#2756, still open).
- **Provider compatibility and streaming**: Zeroclaw addressed Mistral tool_call.id serialization (#5121), custom provider image path bugs (#6399). PicoClaw merged streaming usage for OpenAI endpoints (#2522) and MCP schema sanitization for Gemini (#2681). OpenClaw had multiple ACP streaming fixes (e.g., #79545, #79539).
- **OAuth and authentication regressions**: OpenClaw’s #78407 (Codex-OAuth model rewriting) and #79461 (incomplete fix). PicoClaw’s #2674 (Codex OAuth empty response). Zeroclaw’s Codex setup docs (#5077). NanoBot had no OAuth-related activity today.

## 5. Differentiation Analysis

- **OpenClaw** is the only project today with a core runtime refactor (SQLite-first state model, #78595). Its scale and focus on ACP, gateway, and session-layer components suggest it targets production-heavy multi-agent deployments.
- **NanoBot** emphasizes WebUI modernization (sidebar redesign, BYOK provider management) and small, rapidly merged quality-of-life fixes. It shows the fastest turnaround from bug report to fix (tool-loop issues closed same day).
- **Zeroclaw** invests in provider architecture unification (blocked design discussion #5937) and supervised approval UI (#6522). Its v0.7.5 release with in-browser onboarding suggests a push toward easier first-time setup.
- **PicoClaw** shows the strongest emphasis on local model support (LM Studio compatibility, Gemini web search, MCP schema fixes) and mobile/Android UX (regression in v0.2.8 Android build). Its many stale issue closures indicate active backlog cleaning.

## 6. Community Activity Notes

- **High activity tier**: OpenClaw (500+ issues/PRs, heavy bug triage).
- **Moderate activity tier**: Zeroclaw (45 PRs, 1 release, S1 bugs); PicoClaw (42 PRs, nightly release, many stale closures).
- **Low activity tier**: NanoBot (22 PRs, no release, but fast fix turnaround).
- **Release maturity**: No project published a stable production release today. Only Zeroclaw’s v0.7.5 and PicoClaw’s nightly are new; OpenClaw and NanoBot had none. OpenClaw’s lack of a release despite 148 merged PRs suggests it may be accumulating changes for a larger version.

## 7. Evidence-Backed Observations

1. **Matrix channel stability is a cross-project pain point**: Zeroclaw fixed duplicate inbound replies (#6306) and had new issues on threaded sessions (#6524) and build failures with matrix-sdk (#6530). PicoClaw fixed allow_from parsing (#2827). NanoBot merged silent exception logging for Matrix (#3664). No project appears fully satisfied with Matrix support.
2. **Provider unification is a recurring design desire**: Zeroclaw’s #5937 (providers architecture refactor, blocked) and PicoClaw’s #28 (LM Studio Easy Connect, 18 comments, no maintainer reply) both point to community frustration with fragmented or incompatible provider integration.
3. **Tool-call safety mechanisms are being independently developed**: NanoBot introduced turn-level escalation policies (#3702), while PicoClaw fixed exec tool path safety (#2826). OpenClaw’s closed issues on leak and starvation are less directly related. No common standard or shared library is evident.
4. **Android and mobile UX remain underserved**: PicoClaw has an active Android regression (#2744, no fix) and a stale request to disable Enter key (#2376). OpenClaw and Zeroclaw show no mobile-specific activity. NanoBot’s WebUI redesign may indicate a web-first mobile strategy.
5. **OAuth/commercial model integration causes recurring regressions**: OpenClaw’s Codex-OAuth model rewriting (#78407, #79461) and PicoClaw’s Codex OAuth empty response (#2674) both affect users of commercial backends. No coordinated approach across projects is visible.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-09

## Today's Activity Brief

NanoBot saw elevated activity today with **10 issues updated** (6 open, 4 closed) and **22 PRs updated** (8 open, 14 merged/closed). No new releases were published. The majority of activity centered around loop-safety guards (two related issues and PRs), Feishu group-topic fixes, and a redesign of the WebUI settings experience. A flurry of small bug-fix PRs were merged, covering silent exception handlers in Matrix/Weixin channels, Windows emoji handling in the CLI, and onboarding wizard input validation.

## Releases

*(No new releases today.)*

## Project Progress

**14 PRs were merged or closed today**, representing significant stability and feature work:

**Tool-call safety (merged):**
- [#3701](https://github.com/HKUDS/nanobot/pull/3701) — Guards repeated identical local tool calls in a single turn, with synthetic error short-circuiting and tests.
- [#3702](https://github.com/HKUDS/nanobot/pull/3702) — Adds configurable turn-level escalation policy for repeated tool-call patterns, with deterministic interrupt behavior, logging, and tests.

**Feishu fixes (merged):**
- [#3704](https://github.com/HKUDS/nanobot/pull/3704) — Fixes Feishu group-topic routing: all messages now stay in the topic when in a thread, rather than leaking to the group.

**CLI and input fixes (merged):**
- [#3697](https://github.com/HKUDS/nanobot/pull/3697) — Sanitizes surrogate code points (e.g., Windows emoji input) before entering the message bus, preventing `json.dumps` crashes.
- [#3690](https://github.com/HKUDS/nanobot/pull/3690) / [#3691](https://github.com/HKUDS/nanobot/pull/3691) — Fixes onboarding wizard input validation: empty strings and falsy values no longer incorrectly treated as `None`.

**Memory and history (merged):**
- [#3687](https://github.com/HKUDS/nanobot/pull/3687) — Fixes consolidation so it sees the full unconsolidated session tail, not the replay-limited window.

**Channel and provider fixes (merged):**
- [#3664](https://github.com/HKUDS/nanobot/pull/3664) — Logs errors in silent `except` blocks in Matrix and Weixin channels.
- [#3587](https://github.com/HKUDS/nanobot/pull/3587) — Honors explicit `reasoningEffort: null` to disable reasoning effort, distinct from omitting the field.
- [#3695](https://github.com/HKUDS/nanobot/pull/3695) — Adds image generation tool with WebUI mode and persistent media artifacts.
- [#3703](https://github.com/HKUDS/nanobot/pull/3703) — Redesigns WebUI settings with a dedicated sidebar and BYOK provider management.

**Open PRs of note:**
- [#3696](https://github.com/HKUDS/nanobot/pull/3696) — Adds named model presets with automatic failover and runtime switching (reopened from a prior merge of [#3358](https://github.com/HKUDS/nanobot/pull/3358)).
- [#3673](https://github.com/HKUDS/nanobot/pull/3673) — Fixes WebSocket channel to pass media through `_dispatch_envelope`.
- [#3684](https://github.com/HKUDS/nanobot/pull/3684) — Fixes three silent message-loss causes in the WeChat channel (poll exceptions, expired tokens, ret=-2).
- [#3591](https://github.com/HKUDS/nanobot/pull/3591) — Adds update-scope controls to Dream, allowing disable or restriction to memory-only updates.
- [#3693](https://github.com/HKUDS/nanobot/pull/3693) — Centralizes LLM concurrency gate to throttle background tasks (`heartbeat`, `auto-compact`, `dream`).

## Community Hot Topics

**Most-discussed issues today:**

- [#3650](https://github.com/HKUDS/nanobot/issues/3650) — *"Configure bot name and icon"* (3 comments). User @mraad requests the ability to customize the agent's display name and logo beyond the default "nanobot" and cat icon. Suggested implementation via `config.json` `botName` field. Good first issue label.

- [#3652](https://github.com/HKUDS/nanobot/issues/3652) — *"Can Dream be disabled?"* (3 comments). User @skyline75489 asks for a simple `enabled` flag for the Dream consolidation feature. Closed after PR [#3591](https://github.com/HKUDS/nanobot/pull/3591) implemented the feature.

- [#3699](https://github.com/HKUDS/nanobot/issues/3699) — *"Repeated identical local tool calls should be blocked"* (2 comments). User @andrew-ellis-engineering identified a gap: Nanobot guards repeated external lookups but not identical local calls, causing infinite reasoning loops. Fixed in [#3701](https://github.com/HKUDS/nanobot/pull/3701) and escalated in [#3702](https://github.com/HKUDS/nanobot/pull/3702).

- [#3637](https://github.com/HKUDS/nanobot/issues/3637) — *"Transcription Provider Configuration Is Not Transparent Enough"* (2 comments). User @sandr1x reports that Groq transcription setup is non-transparent and prone to invalid configurations, with unclear error messages.

- [#1412](https://github.com/HKUDS/nanobot/issues/1412) — *"Processing from another bot?"* (2 comments, 1 👍). User @jsapede asks about cross-bot message routing for Home Assistant notification diffusion. Unanswered for over two months.

## Bugs & Stability

**Critical severity:**
- **Tool-call infinite loops** ([#3699](https://github.com/HKUDS/nanobot/issues/3699), [#3700](https://github.com/HKUDS/nanobot/issues/3700)) — Repeated identical local tool calls in a single turn could produce unbounded reasoning loops. Both issues were reported and fixed on the same day via [#3701](https://github.com/HKUDS/nanobot/pull/3701) and [#3702](https://github.com/HKUDS/nanobot/pull/3702).

**High severity:**
- **Feishu file routing in topics** ([#3694](https://github.com/HKUDS/nanobot/issues/3694)) — When sending multiple files in a Feishu group topic, one file would go to the topic while another leaked to the main group. Fixed in [#3704](https://github.com/HKUDS/nanobot/pull/3704).
- **Windows emoji crash** ([#3690](https://github.com/HKUDS/nanobot/issues/3690) via [#3697](https://github.com/HKUDS/nanobot/pull/3697)) — `prompt_toolkit` on Windows produces lone surrogate code points for emoji, causing `json.dumps` failures. Fixed.
- **Silent message drops in WeChat** ([#3684](https://github.com/HKUDS/nanobot/pull/3684)) — Three causes: swallowed exceptions in `_poll_once`, expired tokens, and `ret=-2` errors. Fix PR is open.

**Medium severity:**
- **Transcription config opacity** ([#3637](https://github.com/HKUDS/nanobot/issues/3637)) — Groq transcription setup is error-prone with unclear error messages. No fix PR yet.
- **Sessions interrupted losing context** ([#3689](https://github.com/HKUDS/nanobot/issues/3689)) — User reports that interrupting a bot loops loses prior conversation history, causing the bot to restart from scratch.

## Feature Request Clusters

**Bot customization:**
- [#3650](https://github.com/HKUDS/nanobot/issues/3650) — Configure bot name and icon in agent mode.

**Dream/consolidation control:**
- [#3652](https://github.com/HKUDS/nanobot/issues/3652) — Disable Dream entirely. Implemented in [#3591](https://github.com/HKUDS/nanobot/pull/3591) (still open for review).

**Topic isolation toggles:**
- [#3692](https://github.com/HKUDS/nanobot/issues/3692) — User @sonicrang requests a configurable switch for Feishu group topic isolation, as each file becomes its own topic when the user wants them in one.
- [#3694](https://github.com/HKUDS/nanobot/issues/3694) — Related: files sent to a topic should stay in the topic. Fixed in [#3704](https://github.com/HKUDS/nanobot/pull/3704).

**SSE streaming enhancements:**
- [#3698](https://github.com/HKUDS/nanobot/issues/3698) — Inject tool-progress events (`nanobot.tool.progress`) into the SSE stream from the API server. User @kaka1992 provides a 15-line implementation sketch.

**Model presets and switching:**
- [#3696](https://github.com/HKUDS/nanobot/pull/3696) — Adds `ModelPresetConfig` for named model presets with automatic failover and runtime switching (PR open, previously merged from [#3358](https://github.com/HKUDS/nanobot/pull/3358)).

**Image generation:**
- [#3695](https://github.com/HKUDS/nanobot/pull/3695) — Adds a `generate_image` tool, provider abstraction, and WebUI-first workflow (merged today).

## User Feedback Summary

**Pain points reported today:**

- **Bot loop interruption loses context** ([#3689](https://github.com/HKUDS/nanobot/issues/3689)) — User @lyh161 reports frustration that interrupting a looping bot causes it to forget prior conversation, requiring the user to re-explain tasks. They expect the bot to remember session state.
- **Cross-bot processing isn't working** ([#1412](https://github.com/HKUDS/nanobot/issues/1412)) — User @jsapede tried to route messages from another bot for Home Assistant notification, but the "allow from" feature doesn't appear to work. Two months without response.
- **Feishu topic isolation is too aggressive** ([#3692](https://github.com/HKUDS/nanobot/issues/3692)) — User @sonicrang finds the new topic-isolation feature prevents multi-file workflows; each file spawns a separate topic.
- **Transcription setup is confusing** ([#3637](https://github.com/HKUDS/nanobot/issues/3637)) — User @sandr1x finds Groq voice transcription configuration non-transparent and error-prone.
- **Dream lacks kill switch** ([#3652](https://github.com/HKUDS/nanobot/issues/3652)) — User @skyline75489 simply wants to disable Dream; PR [#3591](https://github.com/HKUDS/nanobot/pull/3591) implements this but remains open.

**Positive signals:**
- Rapid turnaround on critical bugs: loop issues [#3699]/[#3700] were reported and fixed the same day.
- Multiple contributors submitted fixes: @andrew-ellis-engineering, @chengyongru, @Re-bin, @yorkhellen, @Jefsky are all active in today's data.

## Backlog Watch

**Long-unanswered issues:**
- [#1412](https://github.com/HKUDS/nanobot/issues/1412) — *"Processing from another bot?"* (Created 2026-03-02, updated 2026-05-08, 2 comments, 1 👍). User asked about cross-bot message routing. No maintainer response in over two months.
- [#3637](https://github.com/HKUDS/nanobot/issues/3637) — *"Transcription Provider Configuration Is Not Transparent Enough"* (Created 2026-05-06, 2 comments). No fix PR yet; bug report describes a clear setup failure with Groq transcription.
- [#3689](https://github.com/HKUDS/nanobot/issues/3689) — *"中断会话丢失上一轮会话的聊天记录"* (Created 2026-05-08, 0 comments). Session interruption losing context. No maintainer response yet.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest — 2026-05-09

## 1. Today's Activity Brief

In the last 24 hours, 19 issues were updated (14 open, 5 closed) and 45 pull requests were updated (33 open, 12 merged/closed). One new release, **v0.7.5**, was published, bringing in‑browser onboarding and a schema‑driven `/onboard` flow. Activity remains high around provider architecture, Matrix channel stability, and supervised‑tool approval in the Web dashboard. Several S1‑severity bugs (workflow‑blocked) were reported, with corresponding fix PRs already open.

## 2. Releases

- **v0.7.5** (published): [Changelog v0.7.4 → v0.7.5](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.7.5)
  - Headline: in‑browser onboarding and configuration – a schema‑driven `/onboard` flow, a per‑property gateway CRUD surface backed by an OpenAPI 3.1 spec and a typed CLI, and a three‑surface personality editor (CLI / T… *snippet truncated*).
  - No explicit breaking changes or migration notes were included in the release snippet; the release is a substantial follow‑on to v0.7.4.

## 3. Project Progress

12 PRs were merged or closed today. Among the closed items (from the top‑20 list):

- **#6319 – refactor(memory): share memory context marker constants**
  [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/6319) — Extracted `MEMORY_CONTEXT_OPEN` / `MEMORY_CONTEXT_CLOSE` into shared constants; updated runtime, cron, daemon, and channel injection sites.

- **#6306 – fix(matrix): avoid duplicate inbound replies**
  [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/6306) — Dropped event handlers when the sync loop returns, preventing message duplication after listener restarts.

- **#5121 – fix(provider): enforce Mistral‑compatible tool_call.id serialization**
  [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/5121) — Enforces Mistral’s 9‑character ASCII‑alphanumeric contract for `tool_call.id` in OpenAI‑compatible provider paths.

- **#6502 – fix(ci): unblock v0.7.5 release**
  [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/6502) — Added `gen-api` before `tsc` and new scripts/dev workflow; the release shipped while this PR was under review.

- **#5077 – docs(auth): clarify codex setup and service logs**
  [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/5077) — Improved documentation for OpenAI Codex subscription‑auth configuration.

Several other open PRs advanced features or fixes, including the `integration/v0.8.0` branch for a config schema grammar rewrite (#6523) and a fix for ACP workspace path / `/dev/null` policy (#6532).

## 4. Community Hot Topics

The most‑commented issues in the last 24h:

- **#5937 – [Feature]: refactor: Unify providers architecture and reqwest client management**
  [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) (8 comments) — Proposed a major refactoring of the `providers` module to eliminate inconsistent `reqwest` usage and model‑construction duplication. Blocked and marked `status:blocked`, indicating a design discussion is ongoing.

- **#6153 – [Bug]: Matrix: voice transcription failed: Unsupported audio format '.'**
  [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6153) (7 comments, closed) — Users reported that voice transcription via Element Web/Android fails with an unsupported audio format error. The bug was closed, but the discussion reflects broader Matrix channel compatibility needs.

- **#6399 – [Bug]: Custom remote provider sends local image file paths instead of data URLs**
  [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6399) (4 comments, open, S1) — A user running on Raspberry Pi with a remote vLLM server reports that multimodal requests break because local file paths are sent instead of data URLs. The issue is accepted and tagged `needs-maintainer-review`.

- **#6207 – [Bug]: Web dashboard / WebSocket gateway path bypasses ApprovalManager**
  [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6207) (3 comments, open, S1) — Supervised‑mode tool approvals never surface in the daemon web UI. Tagged `status:in-progress`; a companion feature issue (#6522) proposes the frontend implementation.

Underlying needs: providers require a cleaner, unified architecture (especially for custom/remote setups); Matrix channel reliability and audio support are actively worked; and the supervised‑approval path for the web dashboard must be completed for secure multi‑surface operation.

## 5. Bugs & Stability

New bugs reported today (2026-05-08/09) ranked by severity:

**S1 – Workflow blocked**
- **#6399** – Custom remote provider sends local image file paths instead of data URLs (reported May 5, still open, accepted).
  [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6399)
- **#6207** – WebSocket gateway bypasses ApprovalManager (in‑progress, fix PR #6522 filed).
  [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6207)
- **#6516** – ACP `cwd` change locks agent out of reading its own skill files (open, PR #6532 ships a fix).
  [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6516) | [Fix PR](https://github.com/zeroclaw-labs/zeroclaw/pull/6532)

**S2 – Degraded behavior**
- **#6530** – Build failure with `matrix-sdk v0.16.0` (recursion limit overflow with `channel-matrix` feature, 3 comments, open).
  [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6530)
- **#6528** – Custom provider requests fail to trust system CA for self‑signed certificates (open, no fix PR yet).
  [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6528)
- **#6526** – `/api/events` SSE drops tool‑call events (open, fix PR #6527 submitted).
  [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6526) | [Fix PR](https://github.com/zeroclaw-labs/zeroclaw/pull/6527)
- **#6524** – Matrix root timeline messages create separate threaded sessions (open).
  [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6524)
- **#6517** – Context overflow causes hallucination / topic drift (open).
  [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6517)
- **#6474** – Process invokes LLM twice per user request (in‑progress).
  [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6474)
- **#6431** – SQLite memory schema init can fail during concurrent startup (in‑progress, fix PR #6432 open).
  [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6431) | [Fix PR](https://github.com/zeroclaw-labs/zeroclaw/pull/6432)

## 6. Feature Request Clusters

Several feature requests and related PRs were active today, grouped by topic:

- **Provider Architecture**
  #5937 (refactor providers / reqwest) – blocked, design phase.
  #6377 (Llama.cpp default to “responses” endpoint) – closed, accepted.

- **Multi‑Agent Runtime**
  #6272 (per‑alias workspaces, permissions, shared resources) – open, discussion ongoing.

- **Desktop / macOS**
  #6499 (capability handlers for macOS UI control – screenshot, click, keys, AX, AppleScript) – open, in‑progress.

- **Web UI – Supervised Tool Approvals**
  #6522 (web chat tool approval UI) – open, filed today, companion to bug #6207.

- **Observability**
  #5986 (runtime tracing and SSE broadcast for agent turn lifecycle) – open PR, needs author action.

- **Channel‑Specific Enhancements**
  #6068 (configurable reply‑intent precheck model + timeout) – open PR.
  #6178 (Ollama tuning: num_ctx, num_predict, temperature) – open PR.

No single dominant cluster emerges, but improvements to provider flexibility, desktop support, and web‑dashboard interactivity are recurring themes.

## 7. User Feedback Summary

Real user pain points reported in the last 24 hours:

- **Matrix channel reliability**: Users report audio transcription failing (S2), duplicate messages after restarts (now fixed in PR #6306), and misrouted threaded sessions (#6524). Multiple issues indicate frustration with Matrix as a production channel.
- **Custom/remote provider compatibility**: A Raspberry Pi user hitting #6399 (image path vs. data URL) cannot use multimodal models with remote vLLM. Another user reported that self‑signed certificates are not trusted (#6528), blocking custom provider usage.
- **Supervised‑tool approval gap**: Users interacting via the web dashboard see no approval prompt for supervised tools (#6207, #6522). One comment noted “the user sees no approval prompt, no inline button” – a critical usability gap for safety‑conscious deployments.
- **ACP workspace isolation**: A user reported that setting `cwd` to an external repo locks the agent out of its own skill files (#6516), requiring a sandbox workaround.
- **Context overflow**: A user described hallucination/drift after long conversations (#6517), suggesting that automatic context management is missing.
- **Build friction**: One user attempted to build with Matrix support and hit a recursion limit overflow with `matrix-sdk v0.16.0` (#6530).

Overall satisfaction appears mixed: the new v0.7.5 release addresses onboarding and configuration, but several S1 bugs are still open, and Matrix stability remains a recurring pain point.

## 8. Backlog Watch

Issues and PRs that have been open for an extended period and may require maintainer attention:

- **#5937 – Unify providers architecture** (open since April 20, blocked with no resolution direction) – high risk, design‑level discussion stalled.
- **#6399 – Custom remote provider image paths** (open since May 5, accepted but no fix PR yet) – S1, needs maintainer‑review.
- **#6207 – WebSocket approval bypass** (open since April 29, in‑progress but still no frontend implementation) – companion feature #6522 was only filed today.
- **#6474 – Double LLM invocation** (open since May 6, in‑progress) – root cause not yet confirmed.
- **#5254 – fix(provider): sanitize llama.cpp gemma4 tool schemas** (PR open since April 3) – marked `risk: medium`, no recent maintainer activity.
- **#5986 – feat(observability): runtime tracing and SSE broadcast** (PR open since April 22, labelled `needs-author-action`) – awaiting author updates.
- **#5838 – feat(channels/webhook): retry logic with exponential backoff** (PR open since April 17, needs-author-action) – similarly waiting.

These items, particularly the S1 bugs and the long‑idle PRs, may benefit from maintainer attention or community ping to move forward.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-09

## Today’s Activity Brief
In the last 24 hours, 20 issues (6 open, 14 closed) and 42 pull requests (26 open, 16 merged/closed) were updated. One new nightly build was published (v0.2.8-nightly). Activity focused on bug fixes (exec tool safety guard, OAuth streaming, Matrix channel filtering, tool feedback dismissal), infrastructure improvements (MQTT channel merged), and several community feature requests (LM Studio integration, multi-agent discovery, Gemini web search provider). A significant number of stale issues were automatically closed, reducing backlog noise.

## Releases
- **nightly v0.2.8-nightly.20260509.8508f806**
  Automated nightly build which may be unstable. No breaking changes or migration notes provided. Full changelog: [compare/v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

## Project Progress
The following PRs were merged or closed today (selected from top-20 updated PRs):
- **#2705** — **MQTT channel support** (new feature, merged)
- **#2681** — **fix(mcp): sanitize MCP tool schemas for Gemini function calling** (fixes crash with complex schemas, merged)
- **#2655** — **fix: restore verified unified kernel baseline** (multiple runtime invariants fixed, merged)
- **#2522** — **fix(openai_compat): request stream usage** (adds streaming usage for OpenAI endpoints, merged)
- **#2128** — **fix(tools): ensure tool parameters have valid JSON Schema properties field** (fixes LM Studio compatibility, merged)

Other active PRs advancing features:
- **#2828** — transcribe queued voice follow-ups
- **#2826** — resolve relative paths correctly in exec tool safety guard
- **#2763** — Gemini web search provider (new tool provider)
- **#2158** — Multi-agent discovery prompt (layer 1 agent registry)
- **#2626** — Native audio input for multimodal LLMs
- **#2587** — Pico web chat streaming and scroll UX

## Community Hot Topics
- **#28** — [Feat Request: LM Studio Easy Connect](https://github.com/sipeed/picoclaw/issues/28) (18 comments, 2 👍)
  User requests a simple way to connect PicoClaw to local LM Studio instances. Long-standing (since Feb 2026) with no maintainer response yet.
- **#1042** — [[BUG] exec工具guardCommand方法问题](https://github.com/sipeed/picoclaw/issues/1042) (10 comments, 2 👍)
  Reports false-positive path safety errors for commands that use relative paths like `wttr.in/Beijing?T`. PR #2826 directly addresses this.
- **#2674** — [Codex OAuth: empty assistant response](https://github.com/sipeed/picoclaw/issues/2674) (2 comments, 3 👍)
  High-interest bug where ChatGPT Codex backend streams cause empty responses. No fix PR yet.
- **#2376** — [Option to disable 'Enter' key from sending messages](https://github.com/sipeed/picoclaw/issues/2376) (5 comments, 1 👍)
  Android users request separate send button; closed as stale but remains a common UX pain point.

## Bugs & Stability
**Active open bugs (updated today)**:
- **#2744** — [[BUG] Android v0.2.8 cannot access any data from tabs](https://github.com/sipeed/picoclaw/issues/2744) (high severity, 1 comment)
  New regression on Android build; user cannot access tab data at all. No fix PR yet.
- **#2785** — [ToolFeedbackAnimator make feishu only show first tool call message](https://github.com/sipeed/picoclaw/issues/2785) (medium, 1 comment)
  Feishu notification center broken when `separate_messages: false`. New issue.
- **#2674** — Codex OAuth empty response (medium, above)
- **#1042** — exec tool safety guard false positives (medium, fix in #2826)

**Closed bugs (mostly stale, but worth noting)**:
- **#2738** — Image recognition broken in v0.2.8 (closed, likely fixed in nightly)
- **#2602** — OAuth authorization errors for OpenAI/Antigravity (closed with no detailed fix)
- **#2540**, **#2541** — WhatsApp native channel compound defects (closed, patches likely merged)

**Fix PRs active today**:
- #2826 (exec tool relative paths)
- #2828 (voice follow-up transcription)
- #2823 (dismiss tool feedback when outbound skipped)
- #2822 (dismiss child tool feedback after subturn)
- #2756 (preserve Telegram topic context)
- #2827 (skip canonical ID parsing for @-prefixed allow_from entries – fixes Matrix channel)

## Feature Request Clusters
Several user-requested enhancements are backed by active or recently merged PRs:

- **Local model integration** — #28 (LM Studio Easy Connect) remains open; PR #2128 (already merged) improved LM Studio compatibility via schema validation.
- **Multi-agent / memory / discovery** — #2158 (multi-agent discovery prompt, open), #2515 (memory system integrations, closed as stale), #2527 (configurable fresh_tail_size, closed as stale).
- **New providers** — #2652 (GitHub Copilot, closed with no action), #2645 (Bedrock streaming, open), #2763 (Gemini web search, open).
- **Channel enhancements** — #2625 (compiled builds with WhatsApp support, open), #2580 (Feishu plugin optimization, closed as stale), #2705 (MQTT channel, merged).
- **Mobile/Android UX** — #2376 (disable Enter key, closed stale), #2744 (new Android tab bug).
- **New tools** — #2649 (serial port tools, closed stale).
- **Documentation** — #2662 (unifies vendors table, open).

## User Feedback Summary
- **Pain points** reported today: Android v0.2.8 tab crash (#2744), Feishu notification display (#2785), Matrix channel allow_from fully broken (#2827, fix in PR), exec tool false positives (#1042).
- **Ongoing frustrations**: OAuth complexity (#2602, #2674), WhatsApp migration breakage (#2540/2541, now fixed), lack of prebuilt WhatsApp binaries (#2625).
- **Positive community contributions**: Detailed bug reports with patches (aporb for WhatsApp, icyfire for exec tool, bogdanovich for voice/telegram fixes). Users actively debugging and submitting PRs.
- **Unmet desires**: Easy connection to local LM Studio (#28), built-in memory system (#2515), GitHub Copilot support (#2652), better Feishu integration for Chinese users (#2580).

## Backlog Watch
Issues and PRs that have been open for extended periods or lack maintainer response:

- **#28** (LM Studio Easy Connect) — open since Feb 2026, 18 comments, no maintainer note.
- **#2158** (Multi-agent discovery PR) — open since March 29, no maintainer review comments.
- **#2587** (Pico web chat streaming UX) — open since April 19, likely waiting for review.
- **#2625** (WhatsApp build inclusion) — open since April 22, 3 comments, no maintainer reply.
- **#2674** (Codex OAuth empty response) — open since April 26, 2 comments, 3 👍, no acknowledged fix.
- **#2744** (Android tab crash) — open today, needs immediate attention.

Note: Many older issues were closed as “stale” today, possibly by a bot. The items above remain open and may require maintainer decision.

</details>