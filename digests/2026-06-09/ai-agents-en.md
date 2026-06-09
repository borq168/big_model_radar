# OpenClaw Ecosystem Digest 2026-06-09

> Issues: 500 | PRs: 470 | Projects covered: 4 | Generated: 2026-06-09 02:12 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-06-09

## Today's Activity Brief
Activity remains extremely high: 500 issues and 470 PRs were updated in the last 24 hours, with 59 issues closed and 139 PRs merged or closed. Two new beta releases (v2026.6.5-beta.5 and v2026.6.5-beta.3) shipped, both fixing a QQBot thinking-scaffolding leak and MCP tool result coercion. The PR queue shows active work on Control UI fixes, gateway config reload drift, session routing, and a large delegated-sessions feature. Several high-severity bugs remain open, including a critical OpenAI ChatGPT Responses transport failure for GPT-5.4/5.5 and a persistent session context confusion issue.

## Releases
Two versions shipped today:
- **v2026.6.5-beta.5**: QQBot now strips model reasoning/thinking scaffolding before native delivery, preventing raw `<thinking>` content from leaking into channel replies. MCP tool results now coerce `resource_link`, `resource`, `audio`, malformed image, and future types. (#89913, #90132)
- **v2026.6.5-beta.3**: Same QQBot fix and MCP tool result coercion (truncated highlight text). No breaking changes or migration notes in either release.

## Project Progress
139 PRs were merged or closed today. Notable merged/closed items:
- **#91550** (closed): Native hook relay lifetime bounded with a deadline, fixing a timeout vulnerability. Fixes #90993.
- **#91507** (closed): Canonicalized Codex protocol JSON asset ordering to reduce LOC churn in generated assets.
- **#91430** (closed): OpenAI embedding model now respects configured input limits, fixing memory indexing failures for third-party models with smaller limits than OpenClaw's fallback. Fixes #91396.
- **#89439** (closed): Documentation corrected for `host=node` auto-routing behavior under an active sandbox. Fixes #61009.
- **#67477** (closed): WhatsApp now emits hooks for auto-replies, passing session/account/conversation metadata through the dispatch path.
- **#44292** (closed): An autofix/generator for missing config field labels to prevent CI failures when new help keys are added.
- **#44297** (closed): Slack external argument-menu fallback failures now surface as a visible health signal.
- **#48300** (closed): Fixed `memory_search` hybrid mode not returning FTS matches.
- **#87326** (closed): Telegram streaming intermediate text blocks between tool calls no longer silently lost/overwritten. Fixes Telegram text loss.

## Community Hot Topics
- **#48788** (18 comments, open): Feature request for a centralized filename encoding utility to handle multiple encodings (Shift-JIS, EUC-KR, GB18030) across all channel adapters. Currently stale with no fix PR.
- **#32473** (17 comments, 4 reactions, open): Control UI requires device identity (HTTPS/localhost). A regression bug affecting Docker/VPS users. Stale, needs maintainer and security review.
- **#90083** (15 comments, 3 reactions, open): OpenAI ChatGPT Responses transport fails with `invalid_provider_content_type` for GPT-5.4/5.5 after upgrading to 2026.6.1. P1, needs live reproduction.
- **#50090** (15 comments, 2 reactions, open): Community Skill Development & ClawHub ecosystem gap — the gap between the promise of publishable skills and current reality (driftnet issues, missing tooling). Stale, needs product decision.
- **#32296** (14 comments, open): Agent replies to previous message instead of current message — session context confusion. P1, needs live reproduction.
- **#45740** (13 comments, open): Security vulnerability — `gh-issues` skill injects raw GitHub issue bodies directly into sub-agent prompts without sanitization. Stale, P1 security impact.
- **#88929** (12 comments, closed): Feishu streaming card with typewriter effect truncates final content to last character. Closed — likely fixed.
- **#51429** (12 comments, open): Hardcoded working path `/Users/wangtao` merged into code and published, causing directory creation on install. P2, linked PR open.
- **#48573** (12 comments, open): Embedded-run subagent zombie session state leak — stale state persists after parent terminates. P2, source repro available.

## Bugs & Stability
Highest-severity open bugs:
- **P1, #90083** — OpenAI ChatGPT Responses transport broken for GPT-5.4/5.5. Needs live reproduction.
- **P1, #32296** — Session context confusion: agent replies to wrong message. Needs live reproduction.
- **P1, #45740** — `gh-issues` skill injects untrusted issue bodies into sub-agent prompts (security). Stale, linked PR open.
- **P1, #51429** — Hardcoded `/Users/wangtao` path in published code. Linked PR open.
- **P1, #48003** — Steer mode fails to inject messages mid-turn for main sessions. Linked PR open.
- **P1, #43367** — Multi-agent orchestration unstable: concurrent config overwrites, session-lock failures, detached child work. Needs live reproduction.
- **P1, #51396** — `clearUnboundScopes` strips operator scopes unconditionally for non-local token-auth clients (regression). Linked PR open.
- **P1, #47975** — Subagent sessions persist after completion, main session becomes unresponsive. Needs live reproduction.
- **P1, #49876** — Cron sessions hallucinate output when tool calls fail instead of failing cleanly. Needs product decision.

Fix PRs exist for some bugs:
- **#87474** (PR open) — Fixes false busy state in Control UI webchat after response completion.
- **#91529** (PR open) — Fixes transcript image redaction poisoning session image blocks (fixes #90760).
- **#91526** (PR open) — Drops unused async Kysely driver from node:sqlite dialect (dead code).
- **#91544** (PR open) — Fixes Claude AskUserQuestion bridge.
- **#90500** (PR open) — Fixes stale session routes for removed providers.

## Feature Request Clusters
- **Centralized filename encoding utility** (#48788): Multiple users want proper multi-encoding (Shift-JIS, EUC-KR, GB18030) filename handling across all channel adapters rather than per-channel fixes. Stale, needs product decision.
- **Per-agent cost budget enforcement** (#42475): Request for daily/monthly cost caps enforced at gateway before model calls. Stale, needs product decision.
- **Skill priority configuration** (#50199): Users want intelligent skill selection rules when multiple skills can perform the same task. Stale, needs product decision.
- **YAML config file support** (#45758): Request for YAML as alternative to JSON5 for `openclaw.json`. Stale, P3.
- **MathJax/LaTeX rendering** (#42840): Control UI needs math formula display support. Stale, P2.
- **Multi-session architecture RFC** (#48874): Shared LLM + isolated sessions + public knowledge base proposal. Stale, P2, needs security review.
- **System event priority/bypass-queue mode** (#50739): Users want reliable in-session alerts even when session lanes are congested. Stale, P2.
- **Pre-reset agentic memory flush** (#45608): `/new` and daily reset should flush memory like compaction does. Stale, P2.

The largest active feature PR is **#91093** (XL, open) — ACP Hub delegated sessions for persistent external harness workers on WebChat/WeChat without Discord/Telegram threads.

## User Feedback Summary
- **Hardcoded developer path**: Users are frustrated that a personal hardcoded path (`/Users/wangtao`) was merged and published, creating incorrect directory structures on install (#51429: "Apparently some wangtao hardcode his working space path into the code").
- **Session context confusion**: Multiple reports (over 10 comments) of agents responding to old messages instead of current ones, making conversation flow unreliable (#32296).
- **Memory management inconsistency**: One user reports their OpenClaw stores memory in `~/.openclaw/memory/main.sqlite` while colleagues have completely different storage behavior (#43747: "I never see any of our memory is managed in same way").
- **Loss of intermediate text in Telegram streaming**: Users report that intermediate text between tool calls is overwritten by the final block, losing meaningful content (#87326, closed).
- **Docs ahead of release**: Users follow live documentation features (like `IsolatedSessions` in heartbeat) only to find them not yet in the latest release (#48920: "Heartbeat IsolatedSessions is in the live docs but not in the latest version").
- **Feishu streaming truncation**: Typewriter effect and final content truncated to single character in Feishu card mode (#88929, closed).
- **Platform-specific bugs**: Windows PowerShell invocation issues (#91545), Docker sandbox container name collisions (#51363), and Tailscale startup race (#91553) indicate cross-platform friction.

## Backlog Watch
Several high-importance issues remain stale with no recent maintainer activity:
- **#48788** (stale 84 days, P2): Centralized filename encoding — maintainer review needed.
- **#50090** (stale 82 days, P2): Community Skill Development & ClawHub — product decision pending.
- **#32473** (stale 98 days, P1): Control UI device identity requirement — maintainer + security review needed.
- **#45740** (stale 87 days, P1): `gh-issues` skill prompt injection — security review needed.
- **#51396** (stale 80 days, P1): Operator scope stripping — maintainer + security review needed.
- **#42475** (stale 91 days, P2): Per-agent cost budgets — product decision needed.
- **#45031** (stale 88 days, P1): Built-in security scanning for skill installation — maintainer + security review needed.
- **#48874** (stale 84 days, P2): Multi-session architecture RFC — security review needed.

Multiple large feature PRs are waiting on author response, including #78441 (subagent toolsAllow forwarding), #88815 (channel echo/session pinning), #85104 (fast talks auto mode), and #91093 (ACP hub delegated sessions).

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-06-09

## 1. Daily Cross-Project Overview

OpenClaw dominated today’s activity with over 500 issues and 470 PRs touched, shipping two beta releases that fix a QQBot thinking-scaffolding leak and MCP tool coercion. Zeroclaw processed 50 issues and 50 PRs, merging fixes for Matrix session isolation and Telegram message splitting. NanoBot merged a cluster of transcription provider PRs but published no release, while PicoClaw delivered a nightly build and merged a set of defensive coding improvements. Across all projects, session state management and cross-platform channel stability were recurring themes in both fixes and open issues.

## 2. Activity Comparison

| Project    | Issues Updated | PRs Updated | Releases Today | Activity Note                                                                 |
|------------|----------------|-------------|----------------|-------------------------------------------------------------------------------|
| OpenClaw   | 500            | 470         | 2 betas        | Extremely high activity; 59 issues closed, 139 PRs merged/closed.             |
| Zeroclaw   | 50             | 50          | None           | High activity; 11 PRs merged, 2 issues closed. Moderate release pace.         |
| NanoBot    | 7              | 37          | None           | Moderate activity; 16 PRs merged, focused on transcription consolidation.     |
| PicoClaw   | 3              | 19          | 1 nightly      | Low to moderate activity; 9 PRs merged, mostly defensive code improvements.   |

*Issues/PRs updated* include all state changes (new, closed, commented). OpenClaw’s counts are an order of magnitude higher than any peer.

## 3. OpenClaw Compared With Peers

- **Activity volume**: OpenClaw’s daily update volume (500 issues, 470 PRs) is ~10× higher than Zeroclaw (50/50) and far exceeds NanoBot and PicoClaw. Its 139 merged/closed PRs alone surpass the other projects’ total PR updates.
- **Technical focus**: OpenClaw is working on large features (delegated sessions, Control UI fixes, multi-agent orchestration) alongside many high-severity bugs (OpenAI transport failure, session confusion, security injection). Peers are more narrowly focused: NanoBot on transcription providers and collaboration bus, Zeroclaw on session isolation and gateway reliability, PicoClaw on defensive coding and a new DeltaChat channel.
- **Community surface area**: OpenClaw has multiple hot topics with 12–18 comments each discussing skill ecosystem gaps, session confusion, and security vulnerabilities. Peers have 1–2 active discussions with fewer comments (e.g., Zeroclaw’s computer‑use RFC, NanoBot’s agent collaboration PR). OpenClaw also maintains a detailed backlog watch with stale items across security, product decisions, and maintenance.

## 4. Shared Technical Focus Areas

- **Session state management**: All four projects addressed session-related issues today.
  - OpenClaw: session context confusion (#32296), zombie subagent sessions (#48573), session routing (#91544).
  - Zeroclaw: Matrix session isolation per channel alias (#7388), trim_history guard (#7403).
  - NanoBot: orphan tool results in session history (#4219), WeChat session expiry dead loop (#4223).
  - PicoClaw: agent loop reload stability (PR #2904, idle).
- **Telegram message splitting/code-block preservation**: Two projects worked on related Telegram formatting issues.
  - OpenClaw: fixed loss of intermediate text between tool calls (#87326, closed).
  - Zeroclaw: merged fix for markdown fence preservation when splitting (#6701).
  - NanoBot: open bug on code-block breaking in Telegram splits (#4250), with fix PR submitted.
- **Security and authentication improvements**: Multiple projects had security-related items.
  - OpenClaw: `gh-issues` skill prompt injection (#45740), hardcoded developer path (#51429), operator scope stripping (#51396).
  - NanoBot: SSRF loopback bypass (#4074, closed).
  - Zeroclaw: RFCs for pluggable security provider (#7142), OIDC (#7141), TOTP gate (#3767).
  - PicoClaw: type assertion safety checks (7 PRs merged), error wrapping (#3051).

## 5. Differentiation Analysis

- **Feature focus**: OpenClaw is building a comprehensive multi-session architecture (ACP Hub delegated sessions, Control UI improvements, pricing per-agent budgets) while managing a large bug and feature backlog. NanoBot is doubling down on transcription capabilities and agent-to-agent communication. Zeroclaw is moving toward computer-use support, authentication frameworks, and hardware integration (ESP32). PicoClaw focuses on incremental stability and expanding channel integration (DeltaChat).
- **Target users**: OpenClaw appears aimed at advanced developers and operations teams (many configuration options, multi-provider support, complex session models). NanoBot’s transcription consolidation and collaboration bus target chatbot builders integrating speech and multi-instance workflows. Zeroclaw’s computer-use and security RFCs suggest enterprise or security-conscious use cases. PicoClaw’s nightly builds and focus on window flash suppression and platform-specific fixes hint at an edge/IoT or embedded audience.
- **Technical architecture**: OpenClaw uses a reference implementation model with heavy PR/issue volume; it has the largest community and most functional surface. NanoBot is introducing a cross-instance message bus (PR #3992) for agent collaboration, a unique architectural addition. Zeroclaw uses WASM plugins and a gateway-centric model, with multiple RFCs for authentication and session isolation. PicoClaw is a smaller codebase with a focus on platform compatibility and defensive coding.

## 6. Community Activity Notes

| Activity Tier         | Projects                                      |
|-----------------------|-----------------------------------------------|
| Extremely High        | OpenClaw (500 issues, 470 PRs, 2 releases)    |
| High                  | Zeroclaw (50 issues, 50 PRs, no release)      |
| Moderate              | NanoBot (7 issues, 37 PRs, no release)        |
| Low-Moderate          | PicoClaw (3 issues, 19 PRs, 1 nightly)        |

OpenClaw’s release cadence (two betas today) and community discussion volume (multiple threads with 15+ comments) set it apart. Zeroclaw maintains respectable activity but no new release. NanoBot’s transcription PR cluster shows focused development. PicoClaw’s nightly build indicates ongoing development but lower engagement.

## 7. Evidence-Backed Observations

1. **Session state management is a cross-project pain point.** OpenClaw has a P1 session context confusion bug (#32296) and zombie subagent sessions (#48573). Zeroclaw invested in Matrix session isolation and a trim_history guard. NanoBot fixed orphan tool results in history and has an open WeChat expiry dead loop. PicoClaw’s idle agent loop reload PR (#2904) addresses goroutine leaks. This recurring theme suggests that session lifecycle handling remains a core challenge in agent frameworks.

2. **Telegram message formatting issues appear across multiple projects.** OpenClaw closed a bug where intermediate text was lost (#87326). Zeroclaw merged a fix for markdown fence preservation (#6701). NanoBot opened a new bug for code-block splitting (#4250) and has a fix PR ready. The Telegram API’s message length limits and markup behavior continue to cause problems for agent-generated content.

3. **Security and authentication improvements are active across the ecosystem.** OpenClaw has multiple P1 security vulnerabilities (prompt injection, hardcoded paths, operator scope stripping). NanoBot closed an SSRF bypass. Zeroclaw has initiated RFCs for pluggable security, OIDC, and TOTP. PicoClaw merged a batch of type assertion safety checks. This suggests the entire ecosystem is in a phase of hardening core security, though OpenClaw’s backlog contains more urgent items.

4. **Expansion of provider/channel ecosystems continues in all projects.** OpenClaw shipped QQBot fixes and works on ACP delegated sessions. NanoBot merged three new transcription providers (AssemblyAI, Xiaomi MiMo, OpenRouter). Zeroclaw added AMQP inbound channel and an ESP32 hardware demo. PicoClaw opened a DeltaChat gateway PR. The emphasis on adding new input/output channels rather than optimizing existing ones indicates a focus on breadth over depth.

5. **Community engagement levels vary dramatically by project.** OpenClaw’s hot topics generate 12–18 comments on many issues, with multiple user reports and maintainer responses. Zeroclaw’s most active issue has 7 comments, NanoBot’s collaboration PR has ongoing discussion but relatively low volume, and PicoClaw’s longest thread has 9 comments with no maintainer response. This disparity suggests that OpenClaw has a larger and more vocal user base, while smaller projects have quieter but still active communities.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-09

## Today's Activity Brief

Over the past 24 hours, NanoBot saw **7 issues updated** (3 open, 4 closed) and **37 pull requests updated** (21 open, 16 merged/closed), with no new releases published. A cluster of transcription-related PRs (AssemblyAI, Xiaomi MiMo, OpenRouter, shared voice input) all merged, consolidating speech-to-text into a top-level system. On the bug-fix side, multiple workspace-escape and session-history fixes landed, while a Telegram code-block splitting bug and a memory cursor monotonicity issue got opened with corresponding fix PRs already submitted. A WebUI version badge with PyPI update notifications was proposed and appears to be under active discussion.

## Releases

None.

## Project Progress

The following PRs were **merged or closed** in the last 24 hours:

- **Transcription system consolidation**: Multiple PRs landed to build a unified top-level `transcription` system:
  - [#4224](https://github.com/HKUDS/nanobot/pull/4224) — Add AssemblyAI as transcription provider
  - [#4175](https://github.com/HKUDS/nanobot/pull/4175) — Add Xiaomi MiMo ASR provider (`mimo-v2.5-asr`)
  - [#4113](https://github.com/HKUDS/nanobot/pull/4113) — Configurable STT model + OpenRouter transcription provider
  - [#4232](https://github.com/HKUDS/nanobot/pull/4232) — Shared voice input support (transcription becomes cross-channel capability)
- **Provider config enhancement**: [#4217](https://github.com/HKUDS/nanobot/pull/4217) — Added `extra_query` config for OpenAI-compatible providers (addresses #4204)
- **Session/history fixes**:
  - [#4219](https://github.com/HKUDS/nanobot/pull/4219) — Drop orphan tool results before trimming history (fixes #4203)
  - [#4221](https://github.com/HKUDS/nanobot/pull/4221) — Block relative symlink workspace escapes in ExecTool (fixes #4072)
- **WebUI version display**: [#4235](https://github.com/HKUDS/nanobot/pull/4235) — Show NanoBot version in Settings Overview (closes #4233)

Several long-running test-infrastructure PRs remain open, including scripted agent runner harness (#3982), tool-call finish-reason coverage (#3983), blocked read-only root paths (#4053), a memory lifecycle harness (#4193), and the agent cross-instance collaboration message bus (#3992).

## Community Hot Topics

The most active items by comment count (though exact counts not fully available in data):

- **Agent collaboration (#3992)** — [#3992](https://github.com/HKUDS/nanobot/pull/3992): This large PR implementing a cross-instance message bus for agent collaboration has been under review since 2026-05-24. It enables multiple agent instances to communicate over a shared bus, a significant architectural addition. Multiple test/refinement PRs from the same author (ysofologis) are still open alongside it.

- **WebUI version badge (#4255)** — [#4255](https://github.com/HKUDS/nanobot/pull/4255): Proposed version badge in WebUI header with real-time PyPI update check, inspired by OpenClaw's system. This follows the earlier Settings Overview version display (#4235) which already merged. The discussion likely centers on UX preferences (badge vs settings page vs both).

- **Email IMAP post-actions (#4170)** — [#4170](https://github.com/HKUDS/nanobot/pull/4170): Configurable post-actions for processed email messages, specifically useful for agent-managed mailboxes. Open since 2026-06-03, lack of comments suggests the feature is uncontroversial but awaiting review cycles.

The **overall community focus** appears to be on expanding provider ecosystem (transcription, email, query params) and fixing long-standing reliability issues (session expiry, symlink escapes, code-block splitting, memory cursor monotonicity).

## Bugs & Stability

Bugs reported or fixed today, ranked by severity:

1. **High — MCP HTTP/SSE loopback before SSRF rejection (#4074)** — [Issue #4074](https://github.com/HKUDS/nanobot/issues/4074) (closed 2026-06-08): SSRF validation was applied only after attempting loopback connections, leaving a window for potential security bypass. Status: **Closed** — fix appears to have been applied, though the specific PR is not listed in today's set.

2. **Medium — Telegram split_message breaks fenced code blocks (#4250)** — [Issue #4250](https://github.com/HKUDS/nanobot/issues/4250) (open, created today): When splitting long responses, message chunks can land inside `` ``` `` fences, rendering broken HTML in both chunks. **Fix PR exists**: [#4257](https://github.com/HKUDS/nanobot/pull/4257) submitted same day.

3. **Medium — MemoryStore cursor monotonicity (#4256)** — [PR #4256](https://github.com/HKUDS/nanobot/pull/4256) (open, created today): When `.cursor` is stale, compacted ahead, or negative, ID allocation breaks monotonicity. **Fix PR** submitted same day.

4. **Medium — WeChat session expiry dead loop (#4223)** — [PR #4223](https://github.com/HKUDS/nanobot/pull/4223) (open): After session token expires (errcode -14), `_poll_once` sets a 60-minute pause but fails to reload state afterward, causing permanent silent dead loop until manual re-login. Fix submitted.

5. **Low — Orphan tool results in session history (#4219)** — [PR #4219](https://github.com/HKUDS/nanobot/pull/4219) (merged): Trailing tool results could cause history trimming to lose the latest user turn. Fix has been merged.

## Feature Request Clusters

Feature requests with discernible community interest or related PRs:

- **File/image upload in chat (#4251)** — [Issue #4251](https://github.com/HKUDS/nanobot/issues/4251) (closed): User requested ability to upload images/PDFs in the input box for summarization/analysis tasks. **Closed** — may have been addressed by existing functionality or superseded by transcription/image handling work.

- **Per-conversation model override (#4253)** — [Issue #4253](https://github.com/HKUDS/nanobot/issues/4253) (open, created today): User wants to switch between fast/online and private/local models based on privacy/time sensitivity per conversation, not just globally. No related PR yet.

- **Version display in WebUI (#4233)** — [Issue #4233](https://github.com/HKUDS/nanobot/issues/4233) (open): Now largely addressed — #4235 merged version into Settings Overview, #4255 proposes a header badge with update notifications.

- **Transcription provider expansion** (cluster): Multiple users contributed transcription providers (AssemblyAI, Xiaomi MiMo, OpenRouter) and shared voice input — all merged today. This appears to be the most actively developed feature cluster this sprint.

- **Email channel IMAP post-actions (#4170)** — [PR #4170](https://github.com/HKUDS/nanobot/pull/4170) (open): Enables configurable post-processing for agent-managed inboxes.

## User Feedback Summary

- **Privacy-aware model switching**: User `@rombert` (#4253) describes a concrete dual-model workflow: OpenRouter for fast/cloud, local llama.cpp for private/slow. They want per-conversation overrides rather than global settings — clear pain point for users operating across trust boundaries.

- **File upload for summarization**: User `@JFPURE` (#4251) wants to upload images for description and PDFs for summarization directly in chat, suggesting current multi-modal input is not intuitive enough or requires channel-specific configuration.

- **Version visibility**: User `@viblo` (#4233) noted the `/status` endpoint was not discoverable; requested version in UI, plus update notifications. The community responded quickly — two PRs within 48 hours (merged and proposed).

- **Chinese speech recognition**: Xiaomi MiMo ASR addition (#4172, #4175) by `@zpljd258` explicitly motivated by strong Chinese ASR performance — indicates demand for locale-specific STT capabilities beyond English-centric providers.

- **Email channel as autonomous operator**: The IMAP post-actions PR (#4170) from `@flaviovs` frames NanoBot as the "primary operator" of an inbox — suggests advanced users want fully autonomous mailbox management, not just read-and-reply.

## Backlog Watch

The following items have been open for extended periods and may need maintainer attention:

- **Agent collaboration (#3992)** — [PR #3992](https://github.com/HKUDS/nanobot/pull/3992): Large architectural PR (cross-instance message bus) open since 2026-05-24 (16 days). Multiple associated test/refinement PRs (#3982, #3983, #4053, #4119) from the same author also remain open. This represents a significant feature but has not been merged. No maintainer comments visible in today's data.

- **Email IMAP post-actions (#4170)** — [PR #4170](https://github.com/HKUDS/nanobot/pull/4170): Open since 2026-06-03 (6 days), no comments. Clean feature addition with clear use case — awaiting review.

- **WeChat session reload fix (#4223)** — [PR #4223](https://github.com/HKUDS/nanobot/pull/4223): Open since 2026-06-06 (3 days), addresses a reproducible silent failure (permanent dead loop on WeChat). No visible maintainer engagement yet.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest — 2026-06-09

## 1. Today’s Activity Brief
In the last 24 hours, 50 issues and 50 pull requests were updated. 11 PRs were merged or closed (including three non-trivial fixes) and 2 issues were closed. The project saw substantial progress on Matrix session isolation, gateway webhook routing, Telegram message splitting, and a long‑standing file_write workspace ephemerality bug. No new releases were published.

## 2. Releases
None.

## 3. Project Progress — Merged/Closed PRs (Today)
- **[#7388 fix(matrix): isolate session state per channel alias and repair key backup]**
  🟢 *Closed.* A breaking change that moves each Matrix channel alias to its own on‑disk session store, preventing the clobbering bug described in [#6487](https://github.com/zeroclaw-labs/zeroclaw/issues/6487). Operators must migrate state manually.

- **[#7403 fix(runtime): guard trim_history against orphan-cascade emptying all messages]**
  🟢 *Closed.* Adds a safety guard so that `trim_history` does not produce an empty message list when the orphan‑removal cascade would remove all non‑system messages.

- **[#6701 fix(telegram): preserve markdown fences when splitting messages]**
  🟢 *Closed.* `split_message_for_telegram` now correctly budgets continuation markers and synthetic code‑fence closings, fixing ugly message splits.

- **[#6148 feat(hardware): smart-room ESP32 demo with Telegram + simulator]**
  🟢 *Closed.* A hackathon‑project PR that landed an end‑to‑end hardware demo (phone → Telegram → ZeroClaw → ESP32).

Also **closed today**: issue [#6487](https://github.com/zeroclaw-labs/zeroclaw/issues/6487) (Matrix session clobbering, resolved by #7388) and issue [#6225](https://github.com/zeroclaw-labs/zeroclaw/issues/6225) (Smart Truncation for Telegram, resolved earlier but closed today).

## 4. Community Hot Topics
The most active discussions by comment count:

- **[#6699 – tool_filter_groups is a no‑op for real MCP tools (prefix‑check bug)]** (7 comments)
  Two distinct bugs: the MCP‑tool prefix mismatch in the filter gate and no integration with deferred loading. Maintainers accepted the issue as priority:p1.

- **[#6909 – RFC: Computer‑use support for desktop screen interaction and input control]** (6 comments)
  A high‑impact proposal to add screenshot capture and mouse/keyboard injection, drawing parallels with OpenAI Codex and other agents.

- **[#5844 – Too much emphasis on memory]** (5 comments)
  Users report that memory overrides current prompts, especially in cron jobs. The issue is accepted as priority:p1 and is still open.

- **[#7184 – RFC: Move translated .ftl and .po files into a git submodule]** (5 comments)
  Proposes splitting translation churn into a submodule to decouple i18n from core development. Ongoing discussion.

- **[#6302 – Gemini 400 — assistant tool_call emitted as first non‑system turn]** (4 comments, in‑progress)
  A history‑serializer invariant violation blocking Gemini use. Maintainers have a PR in the works.

- **[#5542 – consecutive OOM in wsl2]** (4 comments, in‑progress)
  S0 severity – out‑of‑memory kills under WSL2, being actively investigated.

## 5. Bugs & Stability
**Critical / S0 – data loss or security risk:**
- [#4627](https://github.com/zeroclaw-labs/zeroclaw/issues/4627) – `file_write` silently fails; writes invisible on host filesystem. **Fix PR [#7129](https://github.com/zeroclaw-labs/zeroclaw/pull/7129)** is open and updated today – it guards all workspace write surfaces.
- [#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542) – Consecutive OOM kills under WSL2. No fix PR yet; status in‑progress.

**High / S1 – workflow blocked:**
- [#6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302) – Gemini 400 error on tool call ordering. In‑progress.
- [#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) – Shell tools refused at `autonomy level = "full"`. Accepted and in‑progress.
- [#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361) – `context_compression` drops assistant(tool_calls) for OpenAI‑compatible providers, causing tool loops. In‑progress.
- [#6877](https://github.com/zeroclaw-labs/zeroclaw/issues/6877) – `max_tool_iterations` only works on `[agents.*]`, not `[runtime_profiles.*]`. Accepted and in‑progress.
- [#7402](https://github.com/zeroclaw-labs/zeroclaw/pull/7402) – Gateway crashes on transient `accept()` errors (e.g., `EMFILE`). Open PR aiming to fix.

**Medium / S2 – degraded behavior:**
- [#6254](https://github.com/zeroclaw-labs/zeroclaw/issues/6254) – WASM plugin install path vs scan path mismatch, making plugins invisible. Accepted.
- [#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) – Memory overemphasis degrades agent focus. Accepted.
- [#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) – WhatsApp Web `allowed_numbers` bypass for LID‑based contacts (silent drops). In‑progress.
- [#5795](https://github.com/zeroclaw-labs/zeroclaw/issues/5795) – XML `tool_result` tags leak into channel responses. In‑progress.
- [#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360) – Prompt caching not working with Telegram. In‑progress.
- [#6683](https://github.com/zeroclaw-labs/zeroclaw/issues/6683) – `skill_manage patch` ignores cooldown, allowing unbounded patches. In‑progress.

**Low / S3 – minor:**
- [#4873](https://github.com/zeroclaw-labs/zeroclaw/issues/4873) – Feishu channel calls LLM instead of Agent.
- [#6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548) – Channel runtime command replies bypass Fluent localization.

## 6. Feature Request Clusters
- **Computer‑use / desktop interaction** – RFC [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) proposes screenshot + input control. No PR yet.
- **Security & authentication** – Multiple RFCs: [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) (pluggable security provider trait), [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) (per‑execution shell confirmation + allow/ask/deny policy), [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) (OIDC authentication), [#3767](https://github.com/zeroclaw-labs/zeroclaw/issues/3767) (cross‑channel TOTP gate). No PRs yet.
- **Local‑first mode for small models** – [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) (compact prompts, strict parser, no prompt leakage). In‑progress.
- **MCP integration expansion** – [#4467](https://github.com/zeroclaw-labs/zeroclaw/issues/4467) (MCP resource and prompt support) remains open. A related PR [#7267](https://github.com/zeroclaw-labs/zeroclaw/pull/7267) adds per‑field MCP server config editing in the web dashboard and TUI.
- **Plugin improvements** – PR [#7337](https://github.com/zeroclaw-labs/zeroclaw/pull/7337) namespaces plugin tools and adds `RateLimitedTool` wrapping. PR [#7060](https://github.com/zeroclaw-labs/zeroclaw/pull/7060) defines WIT interface files for WASI plugins.
- **Gateway & channels** – PR [#7367](https://github.com/zeroclaw-labs/zeroclaw/pull/7367) routes inbound webhooks per channel alias. PR [#7223](https://github.com/zeroclaw-labs/zeroclaw/pull/7223) adds slash‑commands to the web chat input. PR [#7369](https://github.com/zeroclaw-labs/zeroclaw/pull/7369) adds AMQP inbound channel with mutual TLS.
- **Commit recovery audit** – [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) tracks 153 commits lost in a bulk revert. Help wanted.

## 7. User Feedback Summary
- **Memory overemphasis** (`#5844`): Users running cron jobs report that the agent prioritizes stored memories over the current prompt, reducing task accuracy.
- **Plugin invisibility** (`#6254`): Installing a WASM plugin via `zeroclaw plugin install` places it in a path that the runtime never scans, rendering the plugin effectively absent.
- **Silent file write failures** (`#4627`): `file_write` returns success but writes into an ephemeral workspace that disappears after the container/VM restarts – a data‑loss vector.
- **XML tag leakage** (`#5795`): Raw `<tool_result>` blocks from Gemini appear verbatim in channel output, breaking message formatting.
- **WhatsApp allowed‑number bypass** (`#6350`): LID‑based contacts are not filtered by `allowed_numbers`, causing messages to be silently dropped.
- **Cron job re‑entrance** (`#6037`): Jobs running longer than the scheduler poll interval can be launched repeatedly, leading to overload.
- **Gateway crash on transient errors** (`#7042`, PR `#7402`): The gateway loop crashes on file‑descriptor exhaustion, forcing a restart.
- **Banner update** (PR `#7396`): A community member requested the project banner be updated with the new mascot while preserving original styling.

## 8. Backlog Watch
Issues and PRs that have been open for weeks or months with little recent maintainer activity:

- **[#3767](https://github.com/zeroclaw-labs/zeroclaw/issues/3767) – Cross‑channel TOTP gate** (opened Mar 17) – status `

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-09

## 1. Today's Activity Brief

- **19 pull requests** were updated in the last 24 hours (10 open, 9 merged/closed), and **3 issues** were updated (2 open, 1 closed).
- A new **nightly build (v0.2.9-nightly.20260609.46b29a0a)** was released; it is an automated, potentially unstable build.
- A significant batch of defensive coding improvements (unchecked type assertions, error wrapping, `Close()` error handling) landed, primarily authored by @chengzhichao-xydt.
- A bug fix for Telegram location messages was merged, and a new **DeltaChat gateway** feature PR was opened.
- The project saw no new major release beyond the nightly; the latest stable release remains v0.2.8.

## 2. Releases

**Nightly Build (v0.2.9-nightly.20260609.46b29a0a)**
*Released 2026-06-09* — an automated build that may be unstable.
Full changelog: [compare/v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main) (note: the link points to `v0.2.9...main`, but the comparison is against the previous stable `v0.2.8`).
No documented breaking changes or migration notes; use for testing only.

## 3. Project Progress (Merged/Closed PRs Today)

- **Telegram location support** — PR [#3052](https://github.com/sipeed/picoclaw/pull/3052) (merged) converts `message.location` to a text string so location pins are no longer silently ignored. Fixes issue [#3049](https://github.com/sipeed/picoclaw/issues/3049).
- **Health check fix** — PR [#3062](https://github.com/sipeed/picoclaw/pull/3062) (closed as merged) corrected a bug where the health check always returned "not ready".
- **Type assertion safety** — 7 PRs by @chengzhichao-xydt were merged, adding `ok` checks for unchecked type assertions across:
  - `pkg/tools/shared/base.go` ([#3056](https://github.com/sipeed/picoclaw/pull/3056))
  - `pkg/tools/subagent.go` and `spawn.go` ([#3057](https://github.com/sipeed/picoclaw/pull/3057))
  - `pkg/tools/webfetch` ([#3058](https://github.com/sipeed/picoclaw/pull/3058))
  - `pkg/channels/line` (2 PRs: [#3054](https://github.com/sipeed/picoclaw/pull/3054) merged, [#3018](https://github.com/sipeed/picoclaw/pull/3018) closed)
  - `pkg/evolution/store.go` ([#3053](https://github.com/sipeed/picoclaw/pull/3053) merged, [#3018](https://github.com/sipeed/picoclaw/pull/3018) also covered another instance)
- **Error wrapping** — PR [#3051](https://github.com/sipeed/picoclaw/pull/3051) (merged) fixed `%v` → `%w` in `pkg/channels/errutil.go` and MCP error paths.
- **Structured logging** — PR [#3050](https://github.com/sipeed/picoclaw/pull/3050) (merged) replaced `log.Printf`/`fmt.Printf` with the project’s structured logger in `pkg/state/state.go` and other locations.
- **`os.Getwd()` error handling** — PRs [#3055](https://github.com/sipeed/picoclaw/pull/3055) and [#3018](https://github.com/sipeed/picoclaw/pull/3018) (merged) added error checks for `os.Getwd()` in `NewContextBuilder` and other call sites.
- **Explicit `Close()` error ignoring** — PR [#3059](https://github.com/sipeed/picoclaw/pull/3059) (merged) tidied ignored `Close()` returns in error/retry paths.

## 4. Community Hot Topics

**Most commented issue**: [#2887 [BUG] .deb version on RISC-V is not functional with OpenAI model](https://github.com/sipeed/picoclaw/issues/2887)
- Author: @s0me0ne-unkn0wn
- Created 2026-05-17, last updated 2026-06-08, **9 comments**, 0 reactions.
- The user reports that the `.deb` package for RISC-V fails to work with OpenAI’s GPT-5.4 model. No maintainer resolution is visible yet.
- *Underlying need*: RISC-V platform support is incomplete for the official package format, likely a missing architecture-specific dependency or build flag.

**Other active issue**: [#3015 [BUG] QQ channel connection failure on Windows](https://github.com/sipeed/picoclaw/issues/3015)
- Author: @cuandada
- Created 2026-06-06, 2 comments. Describes a token retrieval timeout error when starting `picoclaw gateway` on Windows. Pico channel works normally.

**No PRs had notable comment activity** (all have 0–1 comments).

## 5. Bugs & Stability

| Issue | Severity | Status | Fix PR? |
|-------|----------|--------|---------|
| [#2887](https://github.com/sipeed/picoclaw/issues/2887) — .deb on RISC‑V doesn’t work with OpenAI | Medium (platform-specific, blocks RISC‑V users) | Open, stale | No |
| [#3015](https://github.com/sipeed/picoclaw/issues/3015) — QQ channel connection fails on Windows | Medium (Windows release blocker for QQ) | Open | No |
| [#3049](https://github.com/sipeed/picoclaw/issues/3049) — Telegram location messages ignored | Low (only affects location pins) | Closed (fixed) | [#3052](https://github.com/sipeed/picoclaw/pull/3052) merged |

No new crashes or regressions were reported today.

## 6. Feature Request Clusters

- **DeltaChat gateway** — PR [#3063](https://github.com/sipeed/picoclaw/pull/3063) (open, authored by @trufae) adds a new gateway for the DeltaChat messaging protocol. This expands the project’s channel ecosystem beyond the existing Telegram, QQ, LINE, WeCom, etc.
- **Windows console flash suppression** — PR [#3061](https://github.com/sipeed/picoclaw/pull/3061) (open) extends a previous fix to hide console window flashes for *all* child processes on Windows, not just those in `gateway.go`. Improves user experience for GUI launcher users.
- **Agent loop reload stability** — PR [#2904](https://github.com/sipeed/picoclaw/pull/2904) (open since 2026-05-20) addresses three issues in `pkg/agent` related to reload goroutines and panic cleanup. This PR has been idle for several weeks.

No other explicit feature requests appeared in issues today.

## 7. User Feedback Summary

- **RISC‑V dissatisfaction**: User @s0me0ne-unkn0wn reports the official `.deb` package does not work with OpenAI on RISC‑V. The issue has been open since mid‑May with no fix; the user has not received a response from maintainers.
- **Windows QQ channel failure**: @cuandada experienced a token retrieval timeout when starting the QQ channel on Windows. No workaround has been proposed.
- **Telegram location message fix**: @terurium reported that Telegram location pins were silently dropped. The merged fix (#3052) now converts them to text, which should satisfy the need for location‑aware agent pipelines.
- **General pattern**: Users are encountering platform‑specific (RISC‑V, Windows) and channel‑specific (QQ, Telegram) issues, with the Telegram fix being the only one addressed this cycle.

## 8. Backlog Watch

- **Issue [#2887](https://github.com/sipeed/picoclaw/issues/2887)** (RISC‑V .deb with OpenAI) — open since 2026-05-17, 9 comments, no maintainer response. Last update from user a day ago. The issue is stale but actively used.
- **PR [#2904](https://github.com/sipeed/picoclaw/pull/2904)** (agent loop reload stability) — open since 2026-05-20, no recent activity. This is a significant fix for goroutine leaks and panic safety, but has not been reviewed or merged.
- **Issue [#3015](https://github.com/sipeed/picoclaw/issues/3015)** (QQ channel on Windows) — open since 2026-06-06, 2 comments, no maintainer response. Affects a specific Windows use case.

These items may require maintainer attention to avoid accumulating unresolved platform/channel issues.

</details>