# OpenClaw Ecosystem Digest 2026-05-14

> Issues: 500 | PRs: 500 | Projects covered: 4 | Generated: 2026-05-14 02:26 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-05-14

## Today's Activity Brief

The project remains at peak activity with 500 issues and 500 PRs updated in the last 24 hours, though only 54 issues and 27 PRs reached closed/merged status. Three beta releases shipped today (v2026.5.12-beta.4 through beta.6) focused on iMessage media handling, gateway protocol frame format for SDK clients, and Codex runtime migration fixes. The community is heavily engaged on regressions from the v2026.4.x series, with the most active threads involving Slack connection loss, stuck session recovery, and a re-emerging `thought_signature` API error.

## Releases

Three beta releases shipped today in quick succession:

- **v2026.5.12-beta.4** — Fixed `MODULE_NOT_FOUND` error for the official `@openclaw/codex` package during migrated OpenAI/Codex beta runs. Also fixed Codex migration `Enter` key behavior to activate the highlighted checkbox row before continuing.

- **v2026.5.12-beta.5** — Gateway now passes Talk session scope to the AI resolver. Updated gateway protocol to require v4 clients and stream explicit chat `deltaText`/`replace` frames so SDK clients can consume assistant updates without local diffing. Includes GitHub Copilot fixes (details truncated).

- **v2026.5.12-beta.6** — iMessage no longer sends visible `<media:image>` placeholder text for media-only native image sends, while preserving the internal echo key that prevents self-echo duplicate replies. Also fixes agent session creation to configure agent main sessions before first session event.

No breaking changes or migration notes were documented in these releases.

## Project Progress

Today's merge activity was modest relative to total open work:

- **#50643 (closed/merged)** — Fixes macOS node client TLS auto-trust vulnerability where first `wss://` connection accepted any certificate without `SecTrustEvaluateWithError`. An active network attacker could impersonate the gateway.
- **#81574 (closed)** — Exposed reload kind in config schema lookup, but was replaced by #81612 due to corrupted branch metadata.
- **#76177 (closed)** — Prevents `deleteAfterRun` from deleting non-cron user sessions when a cron job targets a custom `sessionKey`.
- **#75682 (closed)** — Safe handling of undefined `providerForCard` in agent status display.

Among today's open PRs, the largest in scope is **#79925** (XL, context-pressure-aware continuation) adding `continue_work`/`continue_delegate`/`request_compaction` for agent self-elected turn continuation. **#81586** (L, route Codex message tool replies to WebChat/TUI) and **#81317** (L, treat ambient group chatter as room events) also represent significant feature additions currently under review.

## Community Hot Topics

**Most commented/discussed issues:**

1. **#72808 — Silent Slack connection loss** (16 comments, 2 👍) — User's Slack connection to OpenClaw worked for days then silently stopped answering mid-demo. No crash, no error. The user was only able to confirm the disconnection after returning to their desk and sending additional messages. This reflects a reliability gap where channel disconnect detection lacks user-visible failure signals.

2. **#68449 — Dreaming plugin stopword list too narrow** (10 comments, 2 👍) — The dreaming pipeline surfaces tokenization artifacts (e.g., "assistant" with 2754 hits) as top themes due to incomplete stopwords. Users want cron-triggered session filtering to prevent noise.

3. **#71127 — Stuck processing sessions never aborted** (9 comments) — The diagnostic subsystem detects stuck sessions and emits warnings but has no recovery action wired to that detection. Sessions remain frozen indefinitely; only external gateway restart recovers them.

4. **#72879 — `thought_signature` 400 regression** (8 comments) — Google Generative AI API 400 error regressed in v2026.4.25 after being fixed in v2026.4.24. Users are frustrated by the lack of regression test coverage.

5. **#71736 — Control UI plugin contribution slots RFC** (8 comments) — Community discussion about adding data-driven slots for plugin chat modes, approval cards, and event classifiers to avoid patches to core UI components.

**Most active PRs by discussion** — All 30 top PRs have undefined comment counts, suggesting the comment data may be incomplete or these PRs have minimal discussion.

## Bugs & Stability

**Critical severity:**
- **#50642 — macOS node auto-trusts first TLS certificate** (CVSS 9.0/9.5) — Open since March 19, fix PR #50643 was merged today. An active network attacker can impersonate the gateway and receive all traffic.

**High severity regressions:**
- **#72879 — `thought_signature` 400 regression** — Recurred after v2026.4.25 despite being closed as fixed in v2026.4.24. Active in today's top issues with 8 comments. No fix PR yet.
- **#74907 — Multi-tool turn replay produces orphan tool_use blocks** — After upgrade from v2026.3.8 to v2026.4.x, gateway produces 400 errors from Anthropic on long-running sessions with multi-tool turns. Regression characteristic.
- **#74358 — Slack streaming preview completely silent** — `streaming.preview.toolProgress: false` produces zero in-flight preview since v2026.4.21.

**Medium severity bugs:**
- **#75621 — Gateway lazy-spawns duplicate stdio MCP children** — Doubles memory and CPU cost for each configured MCP server.
- **#75502 — Downgrade fails due to stale file-transfer entry** — Plugin installs.json prevents rollback between patch versions.
- **#75670 — Matrix thread session key case-normalization** — Creates duplicate stuck sessions by lowercasing event IDs inconsistently.

**Bugs with fix PRs today:**
- SSRF guard blocking `.internal` hostnames (#79850) — Fix PR #79862 submitted (allows `hostnameAllowlist` to bypass `.internal`/`.localhost`/`.local` blocks).

## Feature Request Clusters

**Plugin registry and startup performance:**
- **#80682** — Standalone runtime registry reloads on every dispatch despite warm gateway startup registry (~4.4s, 25 MB per process).
- **#78851** — HTTP connection pooling for model resolution (7-8s per agent run).
- **#81143** — Repeated plugin manifest scans during auth/provider resolution causing latency and idle CPU.

**Gateway/CLI UX and pairing:**
- **#74484** — Gateway pairing scope deadlock: CLI cannot approve/reject auto-reissued over-scoped repair requests.
- **#80730** — TUI requires scope re-approval after reboot despite valid tokens.
- **#72948** — `openclaw gateway stop` returns success without killing foreground gateway.

**Configurability gaps:**
- **#71142** — Configurable upload size limit for Control UI (currently hardcoded 5MB).
- **#72950** — Plugin config has no env-var or writable-overlay path; every change requires image rebuild in policy-locked sandboxes.

**Multi-agent and coordination:**
- **#72629** — Token-cost scaling in conversational multi-agent coordination (quadratic cost with agents × rounds).
- **#74837** — `sessions_spawn` model parameter silently ignored; sub-agents always use orchestrator default.

**Control UI/WebChat:**
- **#71992** — Every assistant reply duplicated exactly twice (regression from #5964/#39469).
- **#72341** — Assistant text-between-tools blocks render as cumulative duplicates.

## User Feedback Summary

**Pain points from today's data:**

- *Reliability anxiety:* Multiple users report silent failures — Slack connections dropping mid-demo (#72808), stuck sessions that require manual restart (#71127), and cron jobs that vanish without error (#60212). Users explicitly mention frustration about demo failures and lack of recovery.
- *Regression fatigue:* The `thought_signature` error re-emerging after being marked fixed (#72879) and the multi-tool turn replay bug (#74907) after upgrading from v2026.3.8 indicate insufficient regression coverage. One user thanked the team for beta.3 fixes but had to reopen a seemingly-resolved issue (#80714).
- *Operational deadlocks:* Users describe scenarios where the CLI is in a scope deadlock with no escape path (#74484), or where a fresh install shows duplicate replies with "no obvious explanation" (#71992).
- *Performance complaints:* Users report 7-8s per agent run for model resolution (#78851), duplicate MCP children doubling memory (#75621), and 4.4s registry reloads on every dispatch (#80682).
- *Positive signals:* Users who report fixes often include thanks and appreciation for the team's rapid shipping pace (#80714, #81143). One user noted that recent config-reread and SSRF fixes "directly helped our setup."

## Backlog Watch

**Unanswered critical issues:**
- **#50642** — macOS TLS auto-trust (CVSS 9.0/9.5, created March 19, fix PR merged today after 56 days open).

**High-importance issues lacking maintainer response (created >30 days):**
- **#16555** — TTL/expiry for delivery queue messages (created February 14, 4 comments, no maintainer activity beyond triage).
- **#40165** — Strip NO_REPLY from both prefix and suffix positions for robust suppression (created March 8, 4 comments).
- **#53408** — Write/exec tool parameters silently dropped after long conversations (created March 24, 4 comments).

**PRs needing maintainer review (created >14 days):**
- **#59196** — Doctor health check for disk space (created April 1, still needs real-behavior-proof label review).
- **#60212** — Cron repair for empty sanitized final replies (created April 3, still open).
- **#43810** — Unapproved users receive pairing codes on every `/start` (created March 12, open for 63 days).

The volume of issues from April 24-27 (roughly 15 of the top 50 issues) suggests v2026.4.24 introduced multiple regressions that continue to surface in user reports.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-05-14

## 1. Daily Cross-Project Overview

Today's activity is dominated by OpenClaw, which processed over 1,000 issue and PR updates, shipped three beta releases, and closed 54 issues — a volume roughly an order of magnitude higher than any peer. ZeroClaw and PicoClaw show strong throughput in merges (17 and 29, respectively), while NanoBot had a quieter day with 8 merges and no release. Common threads across projects include model failover enhancements, streaming-related fixes, and security hardening. OpenClaw’s data points to regression fatigue from its v2026.4.x releases, a pattern not observed in the smaller projects.

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | Release Status | Activity Note |
|---------|---------------|-------------|----------------|---------------|
| OpenClaw | 500 (54 closed) | 500 (27 merged) | 3 beta releases (v2026.5.12-beta.4/5/6) | Extremely high volume; major project under heavy regression churn |
| NanoBot | 16 (13 closed) | 14 (8 merged) | No new release | Focused improvements; model failover and MCP stability shipped |
| ZeroClaw | 37 (15 closed) | 50 (17 merged) | No new release | Moderate; large v0.8.0 multi-agent PR accumulating labels; bug fix batch merged |
| PicoClaw | 9 (5 closed) | 43 (29 merged) | 1 nightly build (v0.2.8-nightly) | High PR merge rate; streaming and tool additions dominate |

## 3. OpenClaw Compared With Peers

- **Activity volume**: OpenClaw’s 500 issues and 500 PRs updated completely overshadow peers (9–50). Even its 54 closed issues exceed the total updated issues of any other project.
- **Community surface area**: OpenClaw shows 30+ heavily discussed issues and PRs with comment counts as high as 16, and clear user frustration (silent Slack drops, regression fatigue). Other projects have at most 15 comments on a single thread (NanoBot #235).
- **Release cadence**: OpenClaw ships multiple betas per day; PicoClaw has one nightly; ZeroClaw and NanoBot have none today. Only OpenClaw documents protocol-level changes (gateway frame format, session scoping).
- **Bug profile**: OpenClaw’s top issues include a CVSS 9.5 TLS vulnerability and multiple regressions from v2026.4.24–25. Peers have lower-severity bugs (NanoBot’s context compression crash, ZeroClaw’s cron output routing, PicoClaw’s auth failures). No other project shows the systematic regression pattern OpenClaw exhibits.

## 4. Shared Technical Focus Areas

- **Model/Provider failover and compatibility**: NanoBot merged `fallback_models` (#3756). ZeroClaw merged Anthropic Opus temperature omission (#6591) and fixed router vision bypass (#6589). OpenClaw is fighting the `thought_signature` 400 regression (#72879). All three projects treat provider-level errors as a priority, but approaches differ (failover lists vs. parameter omission vs. regression fixes).
- **Streaming and output formatting**: OpenClaw’s beta.5 introduced explicit `deltaText`/`replace` frames for SDK clients. PicoClaw has active streaming enhancement requests (#1950, #2404) and a PR fixing `reasoning_content` parsing (#2741). NanoBot and ZeroClaw show no streaming-specific activity today.
- **Cron and session lifecycle**: OpenClaw merged a fix preventing cron jobs from deleting non-cron sessions (#76177). ZeroClaw has new bugs about cron output not routing to channels (#6647) and session-target isolation (#6648). Both projects are refining cron behavior.
- **Security hardening**: OpenClaw merged a fix for macOS TLS auto-trust vulnerability (CVSS 9.5, #50643). ZeroClaw has an issue requesting stronger pairing codes (#6613). PicoClaw has an open PR to fix sandbox bypass via `find /` (#2693). Security improvements appear across all four projects.
- **Multi-agent / multi-session coordination**: OpenClaw’s XL PR #79925 adds context-pressure-aware continuation. ZeroClaw’s large #6398 is building a v0.8.0 multi-agent runtime. Both are tackling coordination complexity, albeit at different scales.

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | ZeroClaw | PicoClaw |
|-----------|----------|---------|----------|----------|
| **Primary focus** | Core reference implementation, gateway protocol, large-scale community | Lightweight assistant with pluggable channels and model failover | Multi-agent runtime, ACP sessions, observability, WASM skills | Edge/device-friendly agent (Raspberry Pi, Android), streaming UI, tool additions |
| **Target user** | Developers building on the canonical agent framework | Users who want a simpler, standalone self-hosted bot | Developers wanting advanced multi-agent orchestration and skill systems | Hobbyists and edge-case hardware users (low-resource, mobile) |
| **Release & stability model** | Fast beta churn (multiple/day), accepts regressions as trade-off | Fewer releases, longer intervals, lower risk | Moderate pace; large PRs accumulate before batch merging | Nightly builds; merges many small PRs daily |
| **Community engagement** | Extremely high — heavy discussion, detailed bug reports, feature RFCs | Moderate — issues get closed quickly, but less visible debate | Moderate — focused on internal PR labels and maintainer conversation | Low comment volume per issue, but high PR throughput |
| **Technical scope** | Full protocol stack (gateway, resolver, SDK, UI components) | Channel integrations (Telegram, Discord, WhatsApp), memory, exec output | ACP, OpenTelemetry, skill review, cron, next-generation runtime | Image gen, web search via Gemini, MCP non-fatal init, WhatsApp builds |

## 6. Community Activity Notes

Based solely on today’s issue/PR counts and releases:

- **Tier 1 (very high)**: OpenClaw — 500 issues, 500 PRs, 3 releases. Dominates by every metric.
- **Tier 2 (moderate)**: ZeroClaw — 37 issues, 50 PRs, no release. Active but not comparable to OpenClaw.
- **Tier 3 (lower volume, high per-activity throughput)**: PicoClaw — 9 issues, 43 PRs, 1 nightly; 29 merges indicate efficient review pipeline. NanoBot — 16 issues, 14 PRs, 8 merges; smallest absolute numbers but all items addressed.

Note: No project shows signs of being “mature” or “stagnant”; all have active PRs and issue resolution.

## 7. Evidence-Backed Observations

1. **OpenClaw’s regression cluster is unique in today’s data.** Multiple high-severity bugs originated from v2026.4.24–25 (thought_signature re-emergence #72879, multi-tool replay #74907, Slack streaming silent #74358). No other project shows a comparable regression pattern in the last 24 hours.

2. **Model failover is a shared priority across OpenClaw and NanoBot.** OpenClaw’s beta.5 improved error handling for Codex runs, and its community discussed provider error handling (#72879). NanoBot merged a dedicated `fallback_models` configuration (#3756). Both projects are responding to users’ need for resilience against provider outages.

3. **Streaming improvements are concentrated in OpenClaw and PicoClaw.** OpenClaw redesigned its gateway frame format for SDK client streaming (beta.5). PicoClaw has two open streaming enhancement requests and a fix for `reasoning_content` during streaming (#2741). NanoBot and ZeroClaw show no streaming-related activity today.

4. **Cron/session lifecycle bugs appear in both OpenClaw and ZeroClaw.** OpenClaw merged a fix for cron jobs deleting non-cron sessions (#76177). ZeroClaw opened S1 bugs about cron output not reaching Telegram and session-target misrouting (#6647, #6648). This suggests both projects are adding cron features but encountering integration issues.

5. **Security improvements are happening across all projects, but in different stages.** OpenClaw merged a high-severity TLS fix after 56 days (#50643). ZeroClaw raised a feature request for stronger pairing codes (#6613). PicoClaw has an open PR for sandbox bypass fix (#2693). No clear trend beyond general security awareness.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-14

## Today’s Activity Brief

In the last 24 hours, 16 issues were updated (3 open, 13 closed) and 14 pull requests were updated (6 open, 8 merged/closed). No new releases were published. The project saw the closure of several long-standing issues, including a multi‑agent setup question (#1642) and the model‑name routing issue (#67). On the PR side, two notable enhancements were merged: a model‑failover mechanism (`fallback_models`, #3756) and an HTTP‑port probe for MCP connections (#3740). Meanwhile, four fresh PRs opened today—two focused on Telegram channel improvements (#3770, #3771), one fixing UNC path support on Windows (#3764), and one preserving session messages during auto‑compact (#3765).

## Releases

*None.* No new versions were tagged in the last 24 hours.

## Project Progress (Merged/Closed PRs)

Eight PRs were merged or closed today (all merged/closed, none reopened):

- **#3740 – MCP HTTP port probe** (by @chengyongru) – Prevents event‑loop crashes when an MCP server is unreachable by adding a lightweight TCP probe before connecting.
- **#3756 – Model failover with `fallback_models`** (by @chengyongru) – Introduces a `fallback_models` list in `ModelPresetConfig`. When the primary model errors without streaming any content, the runner automatically tries each fallback model, potentially on different providers.
- **#3655 – Display model reasoning content during streaming** (by @Flinn‑X) – Adds a `show_reasoning` config option and an `emit_reasoning` hook; fixes a TUI content duplication bug.
- **#1923 & #1896 – Exec output truncation configuration** (by @ethanclaw and @wanghesong2019) – Both address issue #1871, adding either a config parameter (`max_output`, `truncate_mode`) or environment variables (`NANOBOT_MAX_OUTPUT`) to control how long command outputs are truncated.
- **#1135 – Correct “Nanobot” capitalisation in README** (by @JonDevOps) – Cosmetic documentation fix.
- **#915 – Add ContextMemory integration guide** (by @AkashKobal) – Documentation PR adding a guide for persisting development context.
- **#3766 – Expand test coverage and refactor test structure** (by @chengyongru) – Added 121 new tests across `ContextBuilder`, `SubagentManager`, and `AutoCompact`; split a 3313‑line test file into 9 focused files.

## Community Hot Topics

The most active issues and PRs by comments or reactions:

- **#235 – “I've completed processing but have no response to give”** (closed, 15 comments, 9 👍)
  [Link](https://github.com/HKUDS/nanobot/issues/235)
  User reports that after a period of normal operation, the bot repeatedly outputs the above message with no errors. The high engagement (15 comments) indicates this is a common or confusing failure mode.
- **#3376 – Enhancement: Provider / Model failover** (closed, 13 comments, 1 👍)
  [Link](https://github.com/HKUDS/nanobot/issues/3376)
  Request for automatic failover across multiple providers/models when encountering errors like timeouts, rate limits, or 5xx. The merged PR #3756 directly addresses this, closing the issue.
- **#3768 – Enhancement: `dmPolicy` – unknown sender pairing/allowlist** (open, 1 comment)
  [Link](https://github.com/HKUDS/nanobot/issues/3768)
  Suggests gating DMs on Telegram/Discord/WhatsApp behind a pairing or allowlist to prevent quota consumption and prompt injection. A complementary PR (#3770) was opened today adding per‑chat access rules for Telegram.
- **#3769 – Enhancement: `nanobot doctor` CLI command** (open, 0 comments)
  [Link](https://github.com/HKUDS/nanobot/issues/3769)
  Proposes a diagnostic command to validate configuration and channel connectivity, inspired by similar tools.

## Bugs & Stability

Bugs reported in the last 24 hours, ranked by reported impact:

1. **#3726 – Context compression bug causing system crash** (closed)
   [Link](https://github.com/HKUDS/nanobot/issues/3726)
   Token consolidation fails because no safe boundary is found, leading to a crash. A fix PR (#3765) is open that preserves session messages during auto‑compact and adds a compression indicator.
2. **#3739 – MCP service not started crashes agent startup** (closed)
   [Link](https://github.com/HKUDS/nanobot/issues/3739)
   When MCP services are not running, `nanobot agent` crashes. The merged PR #3740 (TCP probe) addresses a related cause (unreachable MCP servers).
3. **#3746 – WebUI markdown renderer eagerly preloads large chunk** (open)
   [Link](https://github.com/HKUDS/nanobot/issues/3746)
   A >1 MB code‑highlighting chunk is loaded on startup even when no code fences appear, affecting startup performance.
4. **#1640 – Session stuck after manual memory file deletion** (closed)
   [Link](https://github.com/HKUDS/nanobot/issues/1640)
   The conversation context cannot be reset even after deleting session/memory files. Root cause not yet identified; issue closed but may warrant follow‑up.

## Feature Request Clusters

Multiple related feature requests and corresponding PRs were observed:

| Request cluster | Key issues / PRs | Status |
|----------------|------------------|--------|
| **Model/Provider failover** | #3376 (closed), PR #3756 (merged) | Shipped |
| **DM security / access control** | #3768 (open), PR #3770 (open) | In progress (Telegram per‑chat rules) |
| **CLI diagnostics** | #3769 (open) | No PR yet |
| **WebSocket channel support** | #1685 (closed) | Author mentioned working on a fork; no PR from that fork yet |
| **Streaming output** | #1860 (closed) | Closed without action; after `show_reasoning` PR #3655, streaming may be partly addressed |
| **Exec output truncation control** | #1871 (closed), PR #1923 & #1896 (both merged) | Shipped |
| **Long‑running task handling** | PR #3460 (open) | Under review – adds `LongTaskTool` with sub‑agent loops |
| **LLM concurrency throttling** | PR #3693 (open) | Under review – centralises concurrency gate for background tasks |

## User Feedback Summary

Key pain points and user reactions visible in today’s data:

- **“No response” after normal operation** – Issue #235 (9 👍) shows users frustrated by a silent failure mode where the bot processes a request but returns no content. The problem was not resolved in the issue; further investigation may be needed.
- **Multi‑agent setup confusion** – #1642 asks how to set up multiple agents; the README suggests separate workspaces, but the user questions whether a single workspace could work. The issue was closed with “stale” label.
- **Custom endpoint routing blocked** – #67 (7 👍) had users unable to use custom model names with local servers due to automatic routing. This is now addressed by the merged PR? The issue was closed; the fix likely came via `fallback_models` or a separate change.
- **Brave‑only web search** – #941 complains that only Brave search is allowed, requesting flexibility for free search tools. The issue is closed with no clear resolution.
- **Session stuck after manual deletion** – #1640 reports that even deleting memory files does not reset context with cloud models; users may need a proper reset mechanism.
- **Long‑term memory confusion with plain text** – #1774 questions the use of plain text for memory instead of SQLite. The issue was labelled stale and closed without action.

## Backlog Watch

No issues with a “stale” or “good first issue” label remain open from today’s data. However, the following open PRs may need maintainer attention due to their scope or age:

- **#3460 – `LongTaskTool`** (open since Apr 26, last updated May 13) – Large PR adding meta‑ReAct loop support. Relatively new but may benefit from additional reviews.
- **#3693 – LLM concurrency gate** (open since May 8) – Addresses background tasks causing connection errors to local LLMs. Could impact stability for local deployments.
- **#3765 – Auto‑compact message preservation** (open since May 13) – A potential fix for the crash in #3726; should be reviewed soon to close the reported bug.
- **#3764 – UNC path support** (open since May 13) – Small fix for Windows users; low complexity.

No issues from earlier months (e.g., #235, #1642, #67) remain open. The project appears to be actively closing old items while processing new requests.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-14

## 1. Today's Activity Brief
In the last 24 hours, 37 issues were updated (22 open/active, 15 closed) and 50 pull requests were updated (33 open, 17 merged/closed). No new releases were published. The project saw a batch of bug fixes merged, notably for ACP session persistence, Anthropic provider temperature handling, Matrix outbound attachments, and WebSocket turn spinning. Several high-severity bugs were filed today, particularly around cron job output routing and the web search tool not firing via Telegram. The large v0.8.0 multi-agent runtime PR (#6398) continues to accumulate labels and discussion, while the skills review fork PR (#6594) and extended thinking PR (#5652) remain open and under active development.

## 2. Releases
No new releases in the last 24 hours.

## 3. Project Progress
Notable PRs merged/closed today (based on top 20 by comment count and available status):

- **#6602** (CLOSED) — `feat(channels/acp): persist ACP sessions` — SQLite-backed persistence for ACP session metadata and conversation history, merged into `integration/v0.8.0`.
  [PR #6602](https://github.com/zeroclaw-labs/zeroclaw/pull/6602)

- **#6591** (CLOSED) — `fix(provider): omit Anthropic opus temperature` — prevents sending `temperature` for Opus models that reject it, covering chat, tool, and streaming paths.
  [PR #6591](https://github.com/zeroclaw-labs/zeroclaw/pull/6591)

- **#6609** (CLOSED) — `[Bug]: Matrix outbound attachments omit size metadata` — addressed in a merge today.
  [Issue #6609](https://github.com/zeroclaw-labs/zeroclaw/issues/6609)

- **#6514** (CLOSED) — `[Bug]: gateway WebSocket turn may spin after client disconnect and make abort/health unresponsive` — fixed.
  [Issue #6514](https://github.com/zeroclaw-labs/zeroclaw/issues/6514)

- **#6526** (CLOSED) — `[Bug]: /api/events SSE drops tool-call events from agent loop` — fixed.
  [Issue #6526](https://github.com/zeroclaw-labs/zeroclaw/issues/6526)

- **#6551** (CLOSED) — `[Bug]: Non-leading system messages can be sent to OpenAI-compatible providers` — fixed.
  [Issue #6551](https://github.com/zeroclaw-labs/zeroclaw/issues/6551)

- **#6589** (CLOSED) — `[BUG]: RouterProvider::supports_vision() uses .any() while supports_native_tools() uses default — silent bypass` — fixed.
  [Issue #6589](https://github.com/zeroclaw-labs/zeroclaw/issues/6589)

Additionally, multiple other issues (e.g. #6419, #6156, #6520, #6410, #6528, #6500, #5266, #6604) were closed, indicating active bug-fix throughput.

Several ongoing feature PRs advanced in review:
- **#6594** (OPEN) — Background skill review fork (Hermes-style) + `skill_manage` tool — updated with new commits.
  [PR #6594](https://github.com/zeroclaw-labs/zeroclaw/pull/6594)
- **#5652** (OPEN) — Native extended thinking for Anthropic/Bedrock providers — labelled `needs-author-action`.
  [PR #5652](https://github.com/zeroclaw-labs/zeroclaw/pull/5652)
- **#6398** (OPEN) — v0.8.0: Multi-Agent Runtime and Schema V3 — large PR accumulating additional labels.
  [PR #6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398)

## 4. Community Hot Topics
Issues and PRs with the most comments (2 comments each) in the last 24h:

- **#6419** `[Bug]: WorkspaceManager fails to load profiles at Runtime startup` — closed, fix PR #6605 in progress.
  [Issue #6419](https://github.com/zeroclaw-labs/zeroclaw/issues/6419)
- **#6156** `[Bug]: Nextcloud Talk model request is canceled after ~5sec` — closed.
  [Issue #6156](https://github.com/zeroclaw-labs/zeroclaw/issues/6156)
- **#6520** `[Bug]: Gemini CLI provider crashes due to outdated argument syntax (--print vs --prompt)` — closed.
  [Issue #6520](https://github.com/zeroclaw-labs/zeroclaw/issues/6520)
- **#6140** `plugins: skill capability — hybrid skills + WASM tools` — open enhancement discussion.
  [Issue #6140](https://github.com/zeroclaw-labs/zeroclaw/issues/6140)
- **#6309** `[Bug]: Agent running model_routing_config "action": "upsert_agent" stomps on schema_version = 2 settings` — open, P1.
  [Issue #6309](https://github.com/zeroclaw-labs/zeroclaw/issues/6309)
- **#6120** `[Bug]: Onboarding: choosing OpenAI Codex prompts for OpenAI API key instead` — open, P1.
  [Issue #6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120)

The **#6398** PR (v0.8.0 multi-agent) has an exceptionally wide label set, indicating significant cross‑cutting impact and broad maintainer/contributor engagement.

## 5. Bugs & Stability
Bugs reported today (created 2026-05-14) with severity:

| Issue | Component | Severity | Summary |
|-------|-----------|----------|---------|
| [#6648](https://github.com/zeroclaw-labs/zeroclaw/issues/6648) | runtime/cron | S2 | `cron session_target=main` still runs in isolated session |
| [#6647](https://github.com/zeroclaw-labs/zeroclaw/issues/6647) | runtime/daemon | S1 | Cron job output not routed to configured channels (Telegram) |
| [#6646](https://github.com/zeroclaw-labs/zeroclaw/issues/6646) | runtime/daemon | S1 | `web_search_tool` and `web_fetch` not firing via Telegram in v0.7.5 |
| [#6645](https://github.com/zeroclaw-labs/zeroclaw/issues/6645) | skills | S2 | `SkillImprover` + `skill_manage` only handle `SKILL.toml`, not `manifest.toml` |
| [#6644](https://github.com/zeroclaw-labs/zeroclaw/issues/6644) | skills | S2 | Skill review fork summary parser misses tool receipts |
| [#6643](https://github.com/zeroclaw-labs/zeroclaw/issues/6643) | provider | S2 | Thoughts merge into final message using GLM-5.1 (regression) |
| [#6634](https://github.com/zeroclaw-labs/zeroclaw/issues/6634) | channel/cron | S2 | Cron-scheduled webhook callbacks drop `thread_id` |
| [#6613](https://github.com/zeroclaw-labs/zeroclaw/issues/6613) | security | S2 | Default 6-digit pairing code too weak (feature request but bug-like severity) |

Existing fix PRs for several of these:
- **#6635** (OPEN) — carries `thread_id` through cron announce delivery (fixes #6634).
  [PR #6635](https://github.com/zeroclaw-labs/zeroclaw/pull/6635)
- **#6605** (OPEN) — loads workspace profiles before tool registration (fixes #6419).
  [PR #6605](https://github.com/zeroclaw-labs/zeroclaw/pull/6605)
- **#6592** (OPEN) — gates router vision on default provider (fixes #6589).
  [PR #6592](https://github.com/zeroclaw-labs/zeroclaw/pull/6592)

Additional bug fixes merged recently or still open for other issues include #6580 (LM Studio runtime options), #6629 (stale tool-result images), #6620 (DeepSeek tool-call parser), #6631 (reasoning effort model restriction), #6598 (Anthropic Opus temperature), and #6607 (respect explicit provider kind).

## 6. Feature Request Clusters
New feature requests appearing in the last 24h:

- **Stronger pairing code** — #6613 requests allowing alphanumeric, longer pairing codes with a default of 32 alphanumeric characters.
  [Issue #6613](https://github.com/zeroclaw-labs/zeroclaw/issues/6613)

- **Observability enhancements** — #6642 (capture full prompt/completion on LLM spans via `gen_ai.input.messages` / `gen_ai.output.messages`) and #6641 (turn-level OpenTelemetry trace correlation, nesting LLM/tool/memory spans under a single turn trace). Both reference existing work by @alexandme on #6009 and #6190.
  [Issue #6642](https://github.com/zeroclaw-labs/zeroclaw/issues/6642)
  [Issue #6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641)

- **SSE lifecycle semantics** — #6637 asks for clarification of `/api/events` event stream semantics (raw observable vs deduplicated lifecycle timeline).
  [Issue #6637](https://github.com/zeroclaw-labs/zeroclaw/issues/6637)

- **Configurable image-bearing message behaviour** — #6574 (open since 05-11) proposes a configurable fallback when no vision path is available, rather than surfacing `provider_capability_error{capability=vision}` to the user.
  [Issue #6574](https://github.com/zeroclaw-labs/zeroclaw/issues/6574)

Ongoing feature clusters from prior days still active:
- **Hybrid skills + WASM tools** (#6140) — continues to receive comments.
- **Multi-agent support** — #6604 was closed as duplicate; the large #6398 PR consolidates this work.

## 7. User Feedback Summary
User-reported pain points and use cases from today’s issues:

- **Cron output not reaching channels** — @icemann521 reports cron job results only appear in the web dashboard; Telegram receives nothing (S1).
  [#6647

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-14

## Today's Activity Brief
Over the past 24 hours, the project saw 9 updated issues (4 open, 5 closed) and 43 updated pull requests (14 open, 29 merged/closed), signaling strong development momentum. A new nightly release (`v0.2.8-nightly.20260514.eb065307`) was published, automatically built from the `main` branch. Key activity clusters include streaming support, multi-provider authentication fixes, and tooling enhancements such as an image generation tool and a Gemini web search provider.

## Releases
- **`nightly` (v0.2.8-nightly.20260514.eb065307)**
  Automated nightly build for the v0.2.8 track. The full changelog ([compare to v0.2.8](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)) includes several merged PRs (see Project Progress). No breaking changes or migration notes are documented. Use is recommended with caution due to potential instability.

## Project Progress
29 pull requests were merged or closed in the last 24 hours. Among the top-20 PRs by comment count, the following key changes were completed:

- **Merged/Closed PRs**:
  - [#2763](https://github.com/sipeed/picoclaw/pull/2763) — Adds a Gemini Google Search provider for the existing `web_search` tool, using `generateContent` with grounding.
  - [#2715](https://github.com/sipeed/picoclaw/pull/2715) — Attributes history messages per sender in multi-user group chats (Discord, Telegram, Slack), resolving issue [#2702](https://github.com/sipeed/picoclaw/issues/2702).
  - [#2383](https://github.com/sipeed/picoclaw/pull/2383) — Adds `picoclaw gateway status` and `picoclaw gateway stop` CLI commands.
  - [#2311](https://github.com/sipeed/picoclaw/pull/2311) — Preserves archived chat history after summarization truncation; fixes [#2310](https://github.com/sipeed/picoclaw/issues/2310).
  - [#2309](https://github.com/sipeed/picoclaw/pull/2309) — Normalizes tool-call history for strict providers, dropping duplicate or stray tool messages.
  - [#2306](https://github.com/sipeed/picoclaw/pull/2306) — Honors `thinking_level` for direct model references, fixing [#2286](https://github.com/sipeed/picoclaw/issues/2286).
  - [#2199](https://github.com/sipeed/picoclaw/pull/2199) — Fixes Telegram reply context for non-command messages while preserving `/` and `!` commands.
  - [#2183](https://github.com/sipeed/picoclaw/pull/2183) — Normalizes subagent model IDs before spawn to prevent OpenRouter prefixed refs from reaching `RunToolLoop`.

Additionally, five issues (e.g., [#2368](https://github.com/sipeed/picoclaw/issues/2368) – Android local model configuration, [#2706](https://github.com/sipeed/picoclaw/issues/2706) – Deepseek v4 thinking model, [#2704](https://github.com/sipeed/picoclaw/issues/2704) – DingTalk SDK panic) were closed, typically with associated fixes merged earlier.

## Community Hot Topics
- **Streaming output for Web Chat** ([#1950](https://github.com/sipeed/picoclaw/issues/1950), 8 comments) — An enhancement request to support streaming output in the web UI. Currently labelled low priority, but it has drawn moderate discussion. Related PR [#2741](https://github.com/sipeed/picoclaw/pull/2741) (open) attempts to fix streaming `reasoning_content` parsing for OpenAI-compatible providers.
- **Streaming HTTP request config** ([#2404](https://github.com/sipeed/picoclaw/issues/2404), 6 comments, 1 👍) — Users want a simple config toggle (e.g., `"streaming": true`) to enable streaming from LLM backends. This aligns with the broader streaming theme.
- **WhatsApp-compiled builds** ([#2625](https://github.com/sipeed/picoclaw/issues/2625), 4 comments, 1 👍) — A user running on Raspberry Pi Zero 2 requests that default arm64 builds include WhatsApp support to simplify rapid updates.
- **Authentication failures** ([#2769](https://github.com/sipeed/picoclaw/issues/2769), 2 comments) — A newly opened bug report about `401 Invalid API Key` errors across multiple providers (Groq, OpenRouter, Nvidia) despite valid keys. This is causing immediate friction for affected users (see Bugs & Stability).
- **Gemini web search provider** ([#2763](https://github.com/sipeed/picoclaw/pull/2763), merged) — The PR itself was one of the most active, adding a new provider for web search via Gemini grounding.

## Bugs & Stability
The following bugs were reported or addressed today, ordered by estimated severity:

1. **Authentication fails with valid API keys** ([#2769](https://github.com/sipeed/picoclaw/issues/2769), open) — Users receive 401 errors across Groq, OpenRouter, and Nvidia even with verified keys. The issue occurs on both stable and nightly builds. No fix PR is open yet. **High severity** as it blocks core functionality.
2. **Deepseek v4 thinking model incompatibility** ([#2706](https://github.com/sipeed/picoclaw/issues/2706), closed) — The `reasoning_content` field is not saved/returned, causing 400 errors. A related fix PR [#2741](https://github.com/sipeed/picoclaw/pull/2741) is open to parse `reasoning_content` in streaming responses. Closed, possibly with workaround (disabling thinking via `extra_body`).
3. **Android app model not configured** ([#2368](https://github.com/sipeed/picoclaw/issues/2368), closed) — Local models added via web interface remain unselectable. Though closed, no explicit fix PR was linked; it may have been resolved by other configuration changes.
4. **DingTalk SDK panic crashes gateway** ([#2704](https://github.com/sipeed/picoclaw/issues/2704), closed) — Race condition in `dingtalk-stream-sdk-go` caused a panic on ping timeouts. Likely fixed by SDK upgrade or workaround.
5. **Sandbox bypass via `find /`** ([#2688](https://github.com/sipeed/picoclaw/issues/2688), fix PR [#2693](https://github.com/sipeed/picoclaw/pull/2693) open) — The `find /` command can escape the workspace sandbox. PR is open but not yet merged.
6. **MCP initialization failure halts agent** ([#2725](https://github.com/sipeed/picoclaw/pull/2725), open) — PR makes MCP init non-fatal, preventing zombie state when all MCP servers fail.

## Feature Request Clusters
- **Streaming support** — Two independent enhancement requests ([#1950](https://github.com/sipeed/picoclaw/issues/1950) for web chat, [#2404](https://github.com/sipeed/picoclaw/issues/2404) for config-based HTTP streaming) indicate strong user desire for streaming output across channels. No single PR addresses both, but [#2741](https://github.com/sipeed/picoclaw/pull/2741) fixes streaming `reasoning_content` parsing, and [#2768](https://github.com/sipeed/picoclaw/pull/2768) improves retry handling for streaming errors.
- **Tool additions** — Multiple new tool PRs are in flight: `update_plan` ([#2765](https://github.com/sipeed/picoclaw/pull/2765)), `image_generate` ([#2760](https://github.com/sipeed/picoclaw/pull/2760)), `get_current_time` ([#2691](https://github.com/sipeed/picoclaw/pull/2691)), and an image diff preview for `edit_file` ([#2848](https://github.com/sipeed/picoclaw/issues/2848), closed as feature request).
- **Provider enhancements** — Users request support for OpenCode ([#2671](https://github.com/sipeed/picoclaw/issues/2671), closed), Gemini web search (merged PR [#2763](https://github.com/sipeed/picoclaw/pull/2763)), and ChatGPT subscription via OAuth ([PR #2679](https://github.com/sipeed/picoclaw/pull/2679), open).
- **Channel improvements** — Standardized channel identification ([PR #2551](https://github.com/sipeed/picoclaw/pull/2551), open) to allow multiple instances of the same provider type.

## User Feedback Summary
- **Pain points**: Authentication failures ([#2769](https://github.com/sipeed/picoclaw/issues/2769)) are the most urgent; users report being blocked from using the application entirely. Streaming absence ([#1950](https://github.com/sipeed/picoclaw/issues/1950), [#2404](https://github.com/sipeed/picoclaw/issues/2404)) is a recurring ask for improving chat responsiveness. WhatsApp users on low-end hardware ([#2625](https://github.com/sipeed/picoclaw/issues/2625)) are inconvenienced by having to compile their own builds.
- **Use cases**: Raspberry Pi deployment, group chats (multi-user attribution merged in [#2715](https://github.com/sipeed/picoclaw/pull/2715)), local models on Android, and image generation for agent workflows.
- **Satisfaction**: Closed issues and merged PRs suggest the team is responsive to bug reports (e.g., DingTalk crash, Telegram reply context, Deepseek thinking). However, the authentication bug (#2769) remains unresolved and is likely causing frustration.

## Backlog Watch
- **Authentication bug** ([#2769](https://github.com/sipeed/picoclaw/issues/2769)) — Open since May 4, no maintainer response yet. Critical for multiple providers.
- **Streaming web chat** ([#1950](https://github.com/sipeed/picoclaw/issues/1950)) — Open since March 24, labelled low priority. No direct implementation has been proposed beyond the streaming config request.
- **WhatsApp compiled builds** ([#2625](https://github.com/sipeed/picoclaw/issues/2625)) — Open since April 22, no maintainer comment. User explicitly requested compiler flag inclusion in default builds.
- **Stale PRs needing review**:
  - [#2551](https://github.com/sipeed/picoclaw/pull/2551) (channel identification refactor, last updated April 16)
  - [#2679](https://github.com/sipeed/picoclaw/pull/2679) (ChatGPT OAuth support, last updated April 26)
  - [#2693](https://github.com/sipeed/picoclaw/pull/2693) (sandbox bypass fix, last updated April 27)
  - [#2725](https://github.com/sipeed/picoclaw/pull/2725) (MCP init non-fatal, last updated April 30)
  - [#2765](https://github.com/sipeed/picoclaw/pull/2765) (update_plan tool, last updated May 4)
  - [#2766](https://github.com/sipeed/picoclaw/pull/2766) (V3 documentation sync, last updated May 4)

</details>