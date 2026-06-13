# OpenClaw Ecosystem Digest 2026-06-13

> Issues: 500 | PRs: 486 | Projects covered: 4 | Generated: 2026-06-13 02:35 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-06-13

## Today's Activity Brief

In the past 24 hours, 500 issues and 486 pull requests were updated across the OpenClaw repository, with 91 issues closed and 142 PRs merged or closed. Two releases (v2026.6.6 and v2026.6.6-beta.2) were published, both focused on tightening security boundaries across transcripts, sandbox binds, host environment inheritance, MCP stdio, Codex HTTP access, and several channel-specific moderation surfaces. The community continues to surface critical memory leak, session context confusion, and inter-agent orchestration bugs, while maintainers merged approximately two dozen small-to-medium fixes spanning memory search, CLI exit codes, WebSocket streaming, and channel-specific event handling.

## Releases

Two releases were published, both with identical highlighted changes:

- **v2026.6.6** (stable) — [Release link](https://github.com/openclaw/openclaw/releases/tag/v2026.6.6)
- **v2026.6.6-beta.2** (beta) — [Release link](https://github.com/openclaw/openclaw/releases/tag/v2026.6.6-beta.2)

### Highlights (shared between both)

Security boundaries are substantially tighter across:
- Transcripts
- Sandbox binds
- Host environment inheritance
- MCP stdio
- Codex HTTP access
- Native search policy
- Elevated sender checks
- Deleted-agent ACP bypasses
- Loopback tools
- Discord moderation
- Teams group actions

The `exec` tool changes are called out as potentially breaking — users relying on inherited environment variables or permissive sandbox bindings may need to review their configurations. No formal migration guide was published alongside the releases.

## Project Progress

The following PRs were merged or closed today (partial list of closed PRs from the top-30-by-comment set):

- **#92382** ([link](https://github.com/openclaw/openclaw/pull/92382)) — Fix: Don't defer text delta streaming for `before_agent_finalize` hooks. Any plugin registering this hook was silently disabling all text streaming in webchat; now streaming continues during hook processing. (Proof supplied via video)
- **#92319** ([link](https://github.com/openclaw/openclaw/pull/92319)) — Feat(workboard): Added `workboard_delete` tool and CLI command for card removal. Closes #92314.
- **#92357** ([link](https://github.com/openclaw/openclaw/pull/92357)) — Fix(memory): Keyboard-only results in hybrid search are no longer silently dropped when chunk IDs don't overlap with vector results. Fixes #92337.
- **#92427** ([link](https://github.com/openclaw/openclaw/pull/92427)) — Feat(skill-workshop): Increased description limit from 160 to 500 characters. Refs #92425.
- **#92308** ([link](https://github.com/openclaw/openclaw/pull/92308)) — Fix(memory): Windows absolute paths in QMD command resolution are now preserved; `splitShellArgs` no longer treats backslashes as POSIX escape characters. Fixes #92302.
- **#92348** ([link](https://github.com/openclaw/openclaw/pull/92348)) — Fix(feishu): Ignore `bot_p2p_chat_entered_v1` events to prevent accumulated warnings from causing gateway restarts. Fixes #42351.
- **#92335** ([link](https://github.com/openclaw/openclaw/pull/92335)) — Fix(exec-approvals): YOLO fast path now correctly works when a socket token exists in `exec-approvals.json`. Fixes #92330.
- **#92368** ([link](https://github.com/openclaw/openclaw/pull/92368)) — Fix(tools): Emits `console.warn` diagnostic when tool availability descriptors contain empty `allOf`/`anyOf` groups, instead of silently hiding the tool. Fixes #92361.
- **#92390** ([link](https://github.com/openclaw/openclaw/pull/92390)) — Fix(outbound): Route direct-only plugin bare targets correctly to direct sessions (fixes phantom group sessions for WeChat DM peers). Fixes #92384.
- **#92435** ([link](https://github.com/openclaw/openclaw/pull/92435)) — Fix(gateway): SIGUSR1 restart is now skipped for `browser.profiles.*` config changes, as these are read on-demand and don't require a restart. Fixes #43803.
- **#92396** ([link](https://github.com/openclaw/openclaw/pull/92396)) — Fix(moonshot): Backfill `reasoning_content` on assistant tool-call replay messages to fix 400 errors after LCM compaction and cross-model fallback with thinking mode enabled.
- **#92568** ([link](https://github.com/openclaw/openclaw/pull/92568)) — Fix(cron): `openclaw tasks cancel` now routes through Gateway's `tasks.cancel` method and tracks active cron cancellation callbacks for proper abort. Fixes #90630.

## Community Hot Topics

The following issues and PRs generated the most discussion in the past 24 hours:

1. **#25592** ([link](https://github.com/openclaw/openclaw/issues/25592)) — "Text between tool calls leaks to messaging channels" (32 comments, diamond lobster severity). Users report that internal agent processing output (error handling, acknowledgments, narration) between tool calls is routed to Slack, iMessage, and other messaging channels as visible messages. The underlying need is for better internal vs. external content routing, with security implications (leaking internal state).

2. **#9443** ([link](https://github.com/openclaw/openclaw/issues/9443)) — "Request: Prebuilt Android APK releases" (25 comments). Users want precompiled Android companion app APKs in GitHub releases, as the source code in `apps/android` requires manual compilation. This reflects demand for easier mobile deployment.

3. **#32473** ([link](https://github.com/openclaw/openclaw/issues/32473)) — "[Bug]: control ui requires device identity (use HTTPS or localhost secure context)" (17 comments). A regression where the Control UI refuses to work on a VPS without HTTPS, even with a configured Brave key. Users need either documentation for HTTPS setup or a fix to allow non-HTTPS deployment in trusted networks.

4. **#22438** ([link](https://github.com/openclaw/openclaw/issues/22438)) — "feat: Tiered bootstrap file loading for progressive context control" (17 comments). Users want to avoid wasting LLM token budget on bootstrap files that are never referenced, especially in sub-agents and cron jobs. The proposal is for tiered loading based on session type.

5. **#22676** ([link](https://github.com/openclaw/openclaw/issues/22676)) — "Signal daemon stop() race condition on SIGUSR1 restart" (17 comments). A race condition where the new signal-cli instance spawns before the old one releases its HTTP port and config file lock, resulting in orphaned processes and send failures.

6. **#32296** ([link](https://github.com/openclaw/openclaw/issues/32296)) — "Agent replies to previous message instead of current message" (15 comments). Session context confusion where the agent responds to the wrong user message. Users report this as a recurring, hard-to-diagnose issue.

## Bugs & Stability

### Critical (P0)

- **#91588** ([link](https://github.com/openclaw/openclaw/issues/91588)) — **Gateway Memory Leak**: RSS grows from ~350MB to 15.5GB over 2-3 days, causing repeated OOM crashes and `launchd-handoff` restart cycles. No fix PR linked. This is the most urgent stability issue currently open.

### High Severity (P1)

- **#32296** ([link](https://github.com/openclaw/openclaw/issues/32296)) — Agent replies to previous message instead of current (session context confusion). No fix PR linked. Needs live repro and maintainer review.
- **#22676** ([link](https://github.com/openclaw/openclaw/issues/22676)) — Signal daemon SIGUSR1 restart race condition: orphaned processes and send failures. Linked PR open but fix not yet merged.
- **#25592** ([link](https://github.com/openclaw/openclaw/issues/25592)) — Text between tool calls leaks to messaging channels. Needs security review and product decision.
- **#31583** ([link](https://github.com/openclaw/openclaw/issues/31583)) — `exec` tool does not inherit `skills.entries.*.env` environment variables. Regression. Linked PR open.
- **#32473** ([link](https://github.com/openclaw/openclaw/issues/32473)) — Control UI requires HTTPS/localhost secure context (regression).
- **#29387** ([link](https://github.com/openclaw/openclaw/issues/29387)) — Bootstrap files in `agentDir` are silently ignored; only workspace directory files are injected.
- **#57326** ([link](https://github.com/openclaw/openclaw/issues/57326)) — CLI-backed helper paths still bypass CLI dispatch on latest main.
- **#29736** ([link](https://github.com/openclaw/openclaw/issues/29736)) — Exec approvals path ignores active state root, writes to `~/.openclaw` instead of configured runtime root.
- **#38327** ([link](https://github.com/openclaw/openclaw/issues/38327)) — "Cannot convert undefined or null to object" error with google-vertex/gemini-3.1-pro-preview (regression in 2026.3.2). No linked fix PR.
- **#83184** ([link](https://github.com/openclaw/openclaw/issues/83184)) — Heartbeat-driven agent replies leave `pendingFinalDelivery` stuck, blocking subsequent heartbeats. Linked PR open.
- **#86538** ([link](https://github.com/openclaw/openclaw/issues/86538)) — Session write-lock timeouts block subagent delivery lanes. Linked PR open.
- **#84569** ([link](https://github.com/openclaw/openclaw/issues/84569)) — WhatsApp session stalls on long model calls; incomplete turn with payloads=0, reply never delivered. Updated today.
- **#92043** ([link](https://github.com/openclaw/openclaw/issues/92043)) — 180s compaction timeout is a single wall clock over the whole chunk pipeline; legitimate long compactions fail identically every turn. No linked fix PR.
- **#91778** ([link](https://github.com/openclaw/openclaw/issues/91778)) — `memory_search` index metadata missing since v2026.6.1 (French-language report, P0 severity claimed by reporter). Needs live repro.

### Regressions

- **#32473** (Control UI HTTPS requirement)
- **#31583** (`exec` tool env variable inheritance)
- **#38327** (Google Vertex model crash on null object)
- **#38439** ([link](https://github.com/openclaw/openclaw/issues/38439)) — Webchat avatar endpoint returns 404 even with valid IDENTITY.md avatar
- **#84644** ([link](https://github.com/openclaw/openclaw/issues/84644)) — Windows node-host connects but reports no commands

### Fixed Today

- Memory hybrid search: keyword-only results preserved when chunk IDs don't overlap (#92357)
- Feishu channel: bot_p2p_chat_entered_v1 events no longer cause gateway restarts (#92348)
- Exec-approvals YOLO fast path with socket tokens (#92335)
- Outbound routing: direct-only plugin bare targets correctly routed to direct sessions (#92390)
- Gateway: browser.profiles config changes no longer trigger unnecessary SIGUSR1 restart (#92435)
- Moonshot: reasoning_content backfill on tool-call replay messages (#92396)
- Windows: absolute paths preserved in QMD command resolution (#92308)
- Cron: `tasks cancel` now properly aborts active runs (#92568)
- Webchat: text delta streaming no longer deferred by `before_agent_finalize` hooks (#92382)

## Feature Request Clusters

**Memory & Context Management**
- Tiered bootstrap file loading for progressive context control (#22438)
- Memory Trust Tagging by Source (#7707)
- Post-subagent completion extension hooks (#22358)
- `announceTarget` option for sub-agent completion announce routing (#27445)
- Automated Session Memory Preservation & Synthesis on `/new` (#40418)
- Backup/restore utility for config, cron jobs, and session history (#13616)

**Channel & Platform Integration**
- Prebuilt Android APK releases (#9443)
- Slack Block Kit support for agent messages (#12602)
- Telegram Business Bot support (business_message/business_connection) (#20786)
- Slack tool-level progress in assistant thread status (#33413)

**Security & Governance**
- Pre-response enforcement hooks (hard gates) for mandatory tool-call/policy rules (#13583)
- Exec denylist support (allow everything except X) (#6615)
- Fallback approval mode + model attribution in messages (#33975)
- Native secrets management (AWS Secrets Manager, Vault, etc.) (#13610)

**Multi-Agent & Orchestration**
- Multi-Agent Collaboration Enhancement: Capability Profiling + Shared Blackboard + Layered Memory + Token Cost Governance (#35203)
- Direct Exec Mode for Cron Jobs (#18160)
- Webhook hook sessions reuse existing session for multi-turn support (#11665)

## User Feedback Summary

**Pain Points:**
- Security leaks: Internal agent processing text leaking to messaging channels (#25592) and exec approvals writing to wrong state root (#29736) are creating trust issues.
- Session state confusion: Agents replying to wrong messages (#32296), subagent sessions persisting after completion (#47975), and context confusion are making conversations unreliable.
- Memory search failures: The v2026.6.1 regression on `memory_search` index metadata (#91778) is causing "all agents blind" situations, particularly affecting CJK-language users.
- Token waste: Bootstrap files consuming context budget in every session (#22438) and full tool schemas taking ~3,500 tokens per session (#14785) are significant cost concerns.
- Configuration complexity: The onboarding wizard doesn't mention memory/embedding setup (#16670), HTTPS requirement for Control UI (#32473) is undocumented, and implicit discovery mechanisms make network calls on startup (#33329).
- Platform gaps: No prebuilt Android APK (#9443), no Slack Block Kit (#12602), no Telegram Business support (#20786).
- OOM crashes: The gateway memory leak (#91588) is causing process death every 2-3 days under normal load.

**Satisfaction Signals:**
- Multiple small fixes merged today suggest maintainers are responsive to community reports.
- The dual release (stable + beta) with security tightening demonstrates ongoing investment in hardening.

## Backlog Watch

Issues and

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-06-13

## 1. Daily Cross-Project Overview

Across the four tracked projects, OpenClaw dominated with 500 issues and 486 PRs updated, including two simultaneous releases (stable and beta) centered on security boundary tightening. NanoBot saw moderate activity with 6 issues and 30 PRs updated but no release, focusing on memory lifecycle fixes, an audit subsystem, and TTS configuration. Zeroclaw experienced a spike in S1 (workflow-blocked) bug reports likely tied to its v0.8.0 release and packaging changes, with 13 issues and 33 PRs updated. PicoClaw continued incremental improvements with one nightly release and 14 PRs updated, addressing error handling and WebSocket signaling gaps.

## 2. Activity Comparison

| Project    | Issues Updated | PRs Updated | Release Status  | Activity Note |
|------------|----------------|-------------|-----------------|---------------|
| OpenClaw   | 500            | 486         | 2 releases (stable + beta) | Dominant volume; dual release with security hardening |
| NanoBot    | 6              | 30          | None            | Steady feature PRs (TTS, audit, SDK); no release |
| Zeroclaw   | 13             | 33          | None            | High bug-report density post-v0.8.0; turn-engine unification PR open |
| PicoClaw   | 6              | 14          | 1 nightly       | Smallest activity; error handling and channel refactoring |

## 3. OpenClaw Compared With Peers

OpenClaw’s activity volume is an order of magnitude higher than the next most active project (Zeroclaw with 13 issues / 33 PRs). It is the only project to ship two releases in a single day, both with publicly called-out breaking changes (`exec` tool environment inheritance, sandbox bindings). The community surface area is also far larger: the top discussion issue (#25592) received 32 comments, exceeding the total comment volume of any single issue in the other three projects. OpenClaw’s bug tracker shows a broad range of platform/channel integrations (Slack, iMessage, Feishu, WeChat, WhatsApp, Discord, Teams) while the other projects have narrower channel coverage. Finally, OpenClaw is the only project reporting a critical P0 memory leak (#91588) that is actively crashing gateways every 2–3 days.

## 4. Shared Technical Focus Areas

- **Memory and Context Management**
  OpenClaw fixed hybrid search memory drops (#92357) and has a live memory leak P0 bug (#91588). NanoBot has open bugs on short-term memory loss (#4044) and post-turn consolidation wiping delivery messages (#4307). Zeroclaw’s turn-engine unification (#7415 / #7540) is fundamentally about reducing context inconsistency across execution paths. PicoClaw’s turn completion signaling (#2984 / PR #3116) addresses a related client-side context gap.

- **Agent Execution and Tool-Call Correctness**
  OpenClaw fixed text leaking between tool calls to messaging channels (#25592, still open) and a `before_agent_finalize` hook blocking text streaming (#92382). NanoBot closed bugs on orphaned tool results (#4006) and a `find_legal_message_start` defect (#4203). Zeroclaw reported an `ask_user` tool failure in gateway WebSocket sessions (#7542). PicoClaw has a Gemini 3.5 Flash tool execution bug (#3111) and added JSON marshal error handling in tool loops (#3112, #3113).

- **Channel and Platform Bugs**
  OpenClaw fixed Feishu bot-p2p events causing restarts (#92348), outbound WeChat DM routing to phantom group sessions (#92390), and has Slack/iMessage content leakage discussions. NanoBot has an open bug on WhatsApp session stalls (#84569, reported earlier). Zeroclaw accepted a Twitch channel feature (#6443) and has open PRs for Discord intents (#7524). PicoClaw fixed Telegram forum topic misrouting (#3110, still open) and has permission scoping requests per chat type (#3109, #3114).

- **Security and Observability**
  OpenClaw’s entire v2026.6.6 release is a security hardening pass across transcripts, sandbox binds, host env, MCP stdio, Codex HTTP, and several channel-specific surfaces. NanoBot introduced an audit subsystem (`tools.audit`) with multiple transports (#4319, #4320). Zeroclaw has a fix for MCP tools not appearing under explicit `allowed_tools` risk profiles (#7547). PicoClaw has feature requests for channel-level permission scoping (#3109, #3114).

## 5. Differentiation Analysis

- **Feature Focus**
  OpenClaw is broadest, addressing security, multi-platform channels, memory search, cron, and gateway stability. NanoBot is more developer-tooling oriented (Python SDK, TTS configuration, audit WebUI parity). Zeroclaw’s current focus is on ironing out post-release distribution bugs (Docker, Windows, macOS) and unifying its internal turn architecture. PicoClaw is the only project with an explicit edge-device remote agent mode (PR #3118) and nightly builds.

- **Target Users**
  OpenClaw appeals to self-hosters running multi-channel agents with high reliability requirements. NanoBot targets Python developers building custom agents with SDK access and WebUI-based configuration. Zeroclaw is aimed at Rust-savvy users who prefer a compiled binary with CLI focus; its current bug surge suggests teething pains for mainstream adoption. PicoClaw seems tuned for embedded/edge scenarios (Sipeed hardware, WebSocket remote mode) and hobbyists willing to use nightly builds.

- **Technical Architecture**
  OpenClaw is a large TypeScript/Node.js monorepo with extensive plugin and channel adapters. NanoBot is Python-based with a strong WebUI component. Zeroclaw is Rust-based with `cargo` toolchain and a single binary. PicoClaw is Go-based, smallest codebase, with a focus on lightweight footprint.

## 6. Community Activity Notes

Based solely on today’s raw counts and release events, the projects fall into three activity tiers:

- **High**: OpenClaw (500 issues, 486 PRs, 2 releases)
- **Moderate**: Zeroclaw (13 issues, 33 PRs, no release), NanoBot (6 issues, 30 PRs, no release)
- **Low**: PicoClaw (6 issues, 14 PRs, 1 nightly release)

No maturity ranking is inferred; the tiers reflect only the volume of updates in the past 24 hours.

## 7. Evidence-Backed Observations

1. **Security hardening is a cross-project theme** – OpenClaw’s v2026.6.6 release explicitly targets six security surfaces. NanoBot merged an audit subsystem (#4319). PicoClaw has feature requests for channel-level permission scoping (#3109, #3114). Zeroclaw’s MCP tools fix (#7547) and read-only root isolation PR (#4053, still open) are also security-oriented. At least two projects have implemented or planned mitigation measures in the same 24-hour window.

2. **Agent execution and turn management bugs are concentrated in multiple projects** – OpenClaw’s text leakage between tool calls (#25592) and session context confusion (#32296) are open. NanoBot’s orphaned tool results (#4006) and find_legal_message_start bug (#4203) were closed today. Zeroclaw’s turn-engine unification RFC (#7415) and ask_user tool failure (#7542) are active. PicoClaw’s turn completion signaling (#2984 / PR #3116) addresses a similar gap. This suggests a broader awareness of context integrity challenges in agent middleware.

3. **Distribution and packaging issues are concentrated in Zeroclaw’s v0.8.0 release** – Five S1 bugs reported today (#7523, #7542, #7537, #7533, #7527) cover dashboard unavailability, Windows quickstart failure, Docker build failure, macOS app unresponsiveness, and self-update broken on Windows. No other project reported more than two platform-specific bugs in similar categories.

4. **Memory and context bugs remain a cross-project pain point** – OpenClaw’s memory leak (#91588) and hybrid search fix (#92357) are urgent. NanoBot’s short-term memory loss (#4044) and message wipe on consolidation (#4307) are open. Zeroclaw’s turn-engine unification is driven by context inconsistency complaints. PicoClaw’s token drain under evolution mode (#3012) is a memory cost bug. These share the common underlying need for reliable context preservation across turns.

5. **No clear cross-project signal on model provider or platform integration trends** – While PicoClaw reported a Gemini 3.5 Flash tool failure (#3111) and Zeroclaw accepted a Twitch channel, no other project reported issues or features tied to the same model or platform. Similarly, requests for Telegram features appear in PicoClaw (#3110, #3114) but not in the other three. The data does not indicate a converged ecosystem push toward any single provider or channel.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-13

## Today’s Activity Brief
Six GitHub issues were updated in the last 24 hours, three remaining open and three closed. Thirty pull requests saw activity, with nine merged or closed and twenty-one still open. No new releases were published. The project saw focused work on memory lifecycle fixes, tool input validation, and a sizable batch of feature PRs covering TTS configuration, an audit subsystem, WebUI–config.json parity, and Python SDK expansion. Several long‑standing open bugs (short‑term memory loss, orphaned tool results) remain under investigation.

## Releases
No new releases today.

## Project Progress
Nine pull requests were merged or closed during the period:

- **#4319** (closed) – `feat(audit): Add tools.audit for agent action observability` – introduced an audit module with scope filtering, four transports (loguru, HTTP webhook, JSONL file, programmatic callback), integrated into `AgentLoop` and `AgentRunSpec`.
- **#4318** (closed) – Duplicate of #4319, also closed.
- **#4304** (closed) – `fix(cron): wait for spawned subagents before marking cron job complete` – resolved premature cron job completion while subagent tasks were still running (fixes issue #4290).
- **#4203** (closed) – `fix: find_legal_message_start` logic defect (see Bugs section).
- **#4006** (closed) – `bug: orphaned tool results` (see Bugs section).
- Other closed PRs include #4305 (closed, enhancement: multiple custom providers) and a few smaller fixes not listed in the top‑20.

Remaining open PRs that advanced today include #4316 (TTS system), #4313 (WebUI/config parity), #4320 (audit variant), #4321 (dream cursor fix), #4315 (malformed history entries), #4312 (media attachment validation), #4311 (file pagination limits), #4256 (memory cursor monotonicity), #4193 (memory lifecycle tests), #4119 (symlink escape fix), #4053 (read‑only root isolation), and #4296 (Python SDK runtime controls).

## Community Hot Topics
- **Issue #4044** `[bug] short term memory loss` ([link](https://github.com/HKUDS/nanobot/issues/4044)) — most commented issue (5 comments). The agent forgets prior context between turns, suspected to be caused by context window pressure or consolidation logic. Still open, with no linked fix PR yet.
- **PR #4316** `feat(tts): add TTS configuration system with multi-provider support` ([link](https://github.com/HKUDS/nanobot/pull/4316)) — significant new feature with OpenAI, Groq, ElevenLabs support; triggered discussion in other channels.
- **PR #4320** `feat(audit): add tools.audit config and AuditTool` ([link](https://github.com/HKUDS/nanobot/pull/4320)) — observability PR that garnered several iterations (closely related to closed #4318/#4319).

No single issue or PR generated an unusually large number of reactions or comments beyond these.

## Bugs & Stability
Three bugs were closed today, two remain open as high‑priority:

- **#4203** (closed) – **Critical**: `find_legal_message_start` in session/manager.py could discard all messages when a user message is followed by an orphaned tool result. Fix merged.
- **#4006** (closed) – **Critical**: Orphaned tool results in conversation history after a previous fix (#3984). The fix ensures tool call/result pairs are consistent. Merged.
- **#4307** (open) – **High**: Post‑turn consolidation wipes the agent’s own delivery message when `context_window_tokens` is set to a modest value (e.g., 40k). No fix PR linked yet.
- **#4309** (open) – **Medium**: `/v1/chat/completions` endpoint returns zero usage tokens despite the agent loop already tracking real usage. No fix PR.
- **#4044** (open) – **High**: Short‑term memory loss across turns. Discussed as likely caused by context window pressure or stale consolidation code. No fix PR.

Additional stability work visible in open PRs: #4315 (malformed history entries), #4312 (malformed media attachments), #4311 (non‑positive file pagination limits), #4321 (dream cursor not advancing when dream is disabled), #4303 (MCP generator crash on reconnect).

## Feature Request Clusters
- **Multiple custom providers** – Issue #4305 (closed) requested support for more than one “custom” or “openai” provider via a template parameter. No corresponding PR has been opened.
- **Text‑to‑Speech** – PR #4316 adds a full TTS configuration system with three providers (OpenAI, Groq/Orpheus, ElevenLabs), plus a WebUI settings endpoint and agent‑facing discoverability docs.
- **Audit / Observability** – PRs #4319, #4318, and #4320 all implement a `tools.audit` configuration section to record agent tool invocations with scope filtering and multiple transports.
- **WebUI–config.json parity** – PR #4313 closes the gap between the WebUI settings panels and `config.json`, adding write endpoints for temperature, tool limits, dream, channels, memory fields, and new UI controls.
- **Python SDK expansion** – PR #4296 upgrades the Python SDK from a minimal `bot.run(...)` facade to include richer `RunResult` metadata, stable session/memory/runtime handles, and backward compatibility.
- **WhatsApp mentions** – PR #4317 adds an option to enable sender mentions when sending messages through the WhatsApp channel.

## User Feedback Summary
- **Pain point – memory loss**: Several users (issues #4044, #4307) report that the agent loses context or its own delivery messages, making multi‑turn conversations unreliable. This is currently the most active source of user dissatisfaction.
- **Pain point – API compliance**: Issue #4309 shows that the OpenAI‑compatible endpoint does not report real token usage, which breaks billing and monitoring integrations.
- **Pain point – orphaned tool results**: Issues #4006 and #4203 (both closed) highlight that tool call/result pairing logic was fragile, causing API rejections and trace rendering errors. The fixes are now merged.
- **Use case – multi‑provider flexibility**: Issue #4305 (closed) indicates users need to configure more than one custom provider simultaneously.
- **Satisfaction – new features**: PRs for TTS, audit, SDK expansion, and WebUI parity suggest active community contribution and maintainer responsiveness to feature requests.

## Backlog Watch
- **Issue #4044** – *Short‑term memory loss* (created 2026-05-28, last updated 2026-06-12, no fix PR). This is the oldest high‑priority open bug and has not received a maintainer response or solution yet.
- **PR #3983** – *test: cover runner blocked tool-call finish reasons* (created 2026-05-24, last updated 2026-06-12) and **PR #3982** – *test: add scripted agent runner harness* (created 2026-05-24) remain open with no recent activity beyond automated updates. These testing improvements are needed to stabilise the runner, but no maintainer review comments are visible.
- **PR #4053** – *fix(tools): keep read‑only roots out of write paths* (created 2026-05-29) and **PR #4119** – *fix(exec): block relative symlink workspace escapes* (created 2026-05-31) are security‑related fixes that have been open for two weeks without merge. Both have been updated in the last 24 hours but still await final review.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest — 2026-06-13

## 1. Today's Activity Brief

In the last 24 hours, 13 issues were updated (11 open, 2 closed) and 33 pull requests were updated (30 open, 3 merged/closed). No new releases were published. The v0.8.0 release queue was closed (#7112) alongside the Twitch channel feature (#6443). Two PRs were closed today: a `cargo cleanup` chore (#7548) and a duplicate MCP tools fix (#7545). The most notable activity centers on the consolidation of the three agent turn engines: RFC #7415 now has an implementation PR (#7540) that reduces the turn execution paths to a single engine.

## 2. Releases

No new releases in the last 24 hours.

## 3. Project Progress

Three pull requests were merged or closed today:

- **#7548** – `Chore/01.5 cargo cleanup` (mostly CI/dependency/channel labels) — merged.
- **#7545** – `fix(runtime): auto-include discovered MCP tools in risk_profile allowed_tools` — closed (superseded by #7547, which remains open).
- **#7112** – `[Tracker]: v0.8.0 release queue and Stable-tier blockers` — closed as the v0.8.0 release queue has been finalized.
- **#6443** – `[Feature]: Add Twitch chat channel (thin IRC adapter)` — closed/accepted.

Several feature or fix PRs advanced today, though none were merged:

- **#7540** – Starts implementing the turn-engine unification (RFC #7415).
- **#7549** – Aligns plugin install/discovery paths and adds legacy migration.
- **#7524** – Derives Discord gateway intents from config instead of hardcoding.
- **#7534** – Fixes Docker build failure by adding `g++` for cc-rs C++ detection.
- **#7529** – Only prints the dashboard URL when the web dist directory is actually available.
- **#7530** – Accepts `.zip` release assets on Windows targets for self-update.

## 4. Community Hot Topics

**Most commented issues today:**

- **#7415** – RFC: Unify the three agent turn engines (3 comments). The community and maintainers have converged on a single consolidation PR (#7540) instead of a phased migration.
- **#7112** – v0.8.0 release queue tracker (3 comments) — now closed.
- **#6443** – Twitch chat channel feature (2 comments) — now closed/accepted.

**Most commented PRs:** The data does not show comment counts for PRs, but the following received maintainer attention:

- **#7540** – Implements #7415; refactors `run_tool_call_loop` as the sole turn engine.
- **#7547** – Fixes MCP tools not appearing when `risk_profile` has explicit `allowed_tools`.
- **#7549** – Fixes plugin install/discovery path mismatch — a recurring user pain point.

Underlying needs: Users are pressing for a unified agent turn loop to reduce bugs and inconsistency across channels and the gateway, and for plugin paths to work reliably after CLI installation.

## 5. Bugs & Stability

**S1 (workflow blocked) bugs reported today:**

- **#7523** – Web dashboard not available on `0.8.0` after `brew install` and `cargo web build`. User reports blank page. No fix PR yet. Related PR #7529 addresses a misleading dashboard URL print but not the core issue.
- **#7542** – `ask_user` tool fails with “Channel closed before receiving a response” in gateway web dashboard WebSocket sessions. No fix PR yet.
- **#7537** – `zeroclaw quickstart` fails on Windows 10 with “no map-keyed/list section at peer-groups”. New user blocked. No fix PR yet.
- **#7533** – Docker build fails during `cargo web build` due to missing C++ compiler (ToolNotFound: “c++”). Fix PR #7534 adds `g++` to the build layer.
- **#7527** – macOS app not working after install: permission detection fails, empty page, window disappears on restart. No fix PR yet.

**S2 (degraded behavior):**

- **#7541** – V3 legacy paths still use shared `data_dir` as agent `workspace_dir` in gateway WS chat and one-shot channel send builder. No fix PR yet.

The number of S1 reports is unusually high today, likely tied to the v0.8.0 release and its packaging/distribution changes (brew, Docker, Windows installer). Several of these bugs have corresponding fix PRs (#7534 for Docker, #7530 for Windows update, #7529 for dashboard print), but the core dashboard availability and `ask_user` failures remain unaddressed.

## 6. Feature Request Clusters

**New feature requests today:**

- **#7543** – Multi-session support in gateway web chat UI (session sidebar: new / switch / rename / delete). No associated PR.
- **#7539** – llama.cpp model router for quick switching of local models. No associated PR.
- **#7531** – Streaming card message support for QQ, DingTalk, WeChat, Feishu channels to reduce user wait time. No associated PR.

**Related ongoing feature work:**

- **#7415 / #7540** – Turn engine unification (enhancement, RFC, high risk) — implementation PR waiting review.
- **#7524** – Discord gateway intents configurable (enhancement, PR open).
- **#6842** – NEAR AI Cloud provider (PR open since May 21, 2026).
- **#7429** – WASM plugin support via wasmtime dependency (PR open, high risk, runtime:wasm).

All feature requests today center on the gateway web chat (multi-session, streaming cards, local model router) and channel improvements (streaming cards for Chinese chat platforms). No prediction on shipping order.

## 7. User Feedback Summary

**Pain points expressed in today’s bug reports:**

- **Windows installation** (#7537): `zeroclaw quickstart` fails with a confusing parse error. New user reports being blocked immediately.
- **macOS application** (#7527): After install, the app cannot detect macOS permissions, becomes unresponsive, and the window disappears on restart. User dissatisfaction is implied.
- **Dashboard unavailability** (#7523): Brew-installed version 0.8.0 shows no dashboard; user had to build frontend manually. Misleading startup print (fixed by #7529) but core issue persists.
- **Self-update broken on Windows** (#7530 fix): `zeroclaw update` fails because `.zip` assets are not accepted — user cannot update.
- **Docker build broken** (#7533): Users trying to build from Dockerfile hit a C++ compiler missing error.
- **`ask_user` tool broken** (#7542): Tool fails in gateway WebSocket sessions, preventing interactive workflows.

**Positive signals:** Users are actively filing detailed bug reports and feature requests, indicating strong engagement. The Twitch channel request was accepted and implemented (closed). Turn-engine unification (RFC #7415) has moved from discussion to implementation, responding to community feedback about inconsistencies.

## 8. Backlog Watch

**Issues and PRs requiring maintainer attention:**

- **#7415** RFC: Unify turn engines — open since June 9, now has implementation PR #7540. Needs maintainer review of the consolidation approach.
- **#6970** Tracker for v0.8.1 integration/channel/provider/tool PR queue — open since May 27 with no recent comments. Maintainers may need to update its status as v0.8.0 is closed.
- **#6842** PR: NEAR AI Cloud provider — open since May 21, 2026, no recent activity. Waiting review.
- **#7245** PR: `fix(read_skill): load plugin-bundled skills and bounded skills` — open since June 5, marked `needs-author-action`. Author has not responded.
- **#7549** PR: Align plugin install/discovery paths and legacy migration — just opened today, needs early review due to high impact on plugin users.
- **#7527** macOS app not working — no fix PR yet; maintainers should prioritize as it affects the macOS user base.
- **#7539** llama.cpp model router feature request — no PR; maintainers may want to gauge interest or close if out of scope.

No issues older than 60 days remain open except #6842 (23 days), which is a long-running PR needing maintainer input.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-13

## 1. Today's Activity Brief

Over the last 24 hours, PicoClaw saw **6 issues updated** (5 open, 1 closed), **14 pull requests updated** (11 open, 3 merged/closed), and **1 new nightly release**. Activity centered on bug fixes for WebSocket turn signaling (PR #3116), media routing (PR #3117), error handling in serialization (PR #3113, #3112), and the addition of a remote Pico WebSocket agent mode (PR #3118). Three issues were opened yesterday covering a Gemini 3.5 Flash tool execution failure, a Telegram forum topic reply bug, and further Telegram permission control requests.

## 2. Releases

- **[`nightly` — v0.2.9-nightly.20260613.c362114c](https://github.com/sipeed/picoclaw/releases/tag/v0.2.9-nightly.20260613.c362114c)**
  An automated nightly build (may be unstable). Full changelog: [compare v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main). No breaking changes or migration notes provided.

## 3. Project Progress

Three pull requests were merged or closed in the last 24 hours:

- **#2551** (closed) – *refactor: standardize channel identification and decouple name from provider type* – A long‑running refactor that allows multiple instances of the same channel provider by introducing a `ChannelType` in `InboundContext`.
- **#3113** (closed) – *fix(channels): check json marshal/unmarshal errors in toChannelHashes* – Silently discarded JSON errors in channel config serialization are now caught.
- **#3112** (closed) – *fix(tools): handle json.Marshal error in toolloop tool call arguments* – Prevents loss of tool‑call arguments when marshaling fails.

These fixes improve robustness around error handling and lay the groundwork for multi‑instance channel configurations.

## 4. Community Hot Topics

| Issue / PR | Comments | Reactions | Summary |
|---|---|---|---|
| [#2984 – Add explicit turn completion signal for Pico WebSocket clients](https://github.com/sipeed/picoclaw/issues/2984) | 2 | 2 👍 | Users need a deterministic `turn.done` event to know when the agent has finished processing. A related fix PR (#3116) was opened yesterday. |
| [#3012 – Continuous consumption of tokens every minute when evolution is enabled](https://github.com/sipeed/picoclaw/issues/3012) | 2 | 0 | Stale bug report but updated recently – token drain under evolution mode, high potential impact for users with paid API usage. |
| [#3109 – Channel-level permission scoping](https://github.com/sipeed/picoclaw/issues/3109) | 1 | 0 | Feature request (closed as duplicate or implemented?) – advocates distinguishing safe/unsafe operations per chat type. A parallel Chinese request (#3114) was opened yesterday. |

The most active discussion is around **turn completion signaling** – a clear client‑side UX gap that maintainers have begun addressing.

## 5. Bugs & Stability

Three bugs were reported yesterday (2026-06-12), ranked by severity:

1. **High – [#3111](https://github.com/sipeed/picoclaw/issues/3111) – Tool execution fails with Gemini 3.5 Flash (Missing `thought_signature` in schema)**
   - `400 Bad Request` from Google API. Blocks tool/skill execution entirely for users of the new model. **No fix PR yet.**

2. **High – [#3012](https://github.com/sipeed/picoclaw/issues/3012) – Continuous token consumption with evolution enabled**
   - Reported 8 days ago, marked stale but still open. Token waste in evolution mode. **No fix PR linked.**

3. **Medium – [#3110](https://github.com/sipeed/picoclaw/issues/3110) – Telegram adapter ignores `message_thread_id` in Forum topics**
   - Bot replies to the wrong thread (defaults to `#General`). Annoying for users in forum‑enabled groups. **No fix PR yet.**

Additionally, a fix for a related media‑routing bug (#3108) was proposed in PR [#3117](https://github.com/sipeed/picoclaw/pull/3117) (open). The Gemini issue (#3111) may be the most impactful as it blocks a popular model.

## 6. Feature Request Clusters

Several feature requests appearing in both issues and PRs:

- **Turn completion signaling** – #2984 (request) → PR #3116 (fix).
- **Channel/chat‑type permission control** – #3109 (closed), #3114 (open) – users want to restrict dangerous operations (e.g., shell commands) in group/channel chats while allowing full power in private chats.
- **New provider / channel integrations** –
  - PR #2917 (NEAR AI Cloud provider) – open since May 21.
  - PR #3063 (DeltaChat gateway) – open since June 8.
- **UX improvements** – PR #3097 (Shift+Enter hint in web composer) – small quality‑of‑life change.
- **Remote agent mode** – PR #3118 – adds `--remote` flag to the `picoclaw agent` command, enabling a WebSocket‑connected remote agent.

No single cluster dominates, but permission scoping and turn completion are the most discussed by users.

## 7. User Feedback Summary

From the latest issues and PR discussions:

- **Pain points:**
  - Token waste under evolution mode (first reported a week ago, still unresolved).
  - Model incompatibility with Gemini 3.5 Flash – prevents tool usage.
  - Forum topic misrouting in Telegram.
  - Lack of deterministic turn‑end notifications for external WebSocket clients.

- **Requests:**
  - Fine‑grained permission boundaries per Telegram chat type (private/group/channel).
  - Support for newer LLM providers (NEAR AI, DeltaChat).

- **Satisfaction:** Users opening feature requests and bug reports indicate active engagement; maintainers are responding with PRs (e.g., turn.done, media routing fixes).

## 8. Backlog Watch

Items that have been open or stale for a notable time and may need maintainer attention:

- **Issue #3012** – Continuous token consumption bug, **stale** (opened June 5, tagged `stale`). No fix PR.
- **PR #2964** – Image input compression feature, **stale** (opened May 28). Has not been merged or closed; activity label may have been automatically applied.
- **PR #2917** – NEAR AI Cloud provider (opened May 21) – still open with no recent comments.
- **PR #2551** – Channel identification refactor – only just closed yesterday after a long period. While now merged, the underlying multi‑instance channel support may introduce follow‑up bugs.

Maintainers may want to review the stale items to decide whether to advance, close, or request updates.

</details>