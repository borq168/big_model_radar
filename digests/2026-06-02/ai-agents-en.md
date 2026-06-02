# OpenClaw Ecosystem Digest 2026-06-02

> Issues: 463 | PRs: 500 | Projects covered: 4 | Generated: 2026-06-02 02:45 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-06-02

## Today's Activity Brief

463 issues were updated in the last 24 hours (299 open/active, 164 closed), and 500 pull requests saw activity (397 open, 103 merged/closed). Two beta releases shipped today: `v2026.6.1-beta.1` and `v2026.6.1-beta.2`, both focused on cleaner recovery from interrupted tool calls and steadier channel delivery across Telegram, WhatsApp, iMessage, and Slack. The project continues to surface regressions in the Codex runtime transition and Session/Transcript SQLite migration planning, while maintainers are actively reviewing pull requests for tool failure disclosure, Telegram approval reactions, and event-loop stalls.

## Releases

**v2026.6.1-beta.2** ([release link](https://github.com/openclaw/openclaw/releases/tag/v2026.6.1-beta.2)) and **v2026.6.1-beta.1** ([release link](https://github.com/openclaw/openclaw/releases/tag/v2026.6.1-beta.1)) share the same highlights:

- Agents and CLI-backed runtimes recover more cleanly from interrupted tool calls, stale session bindings, compaction handoffs, and media delivery retries (references: #88129, #88136, #88141, #88162, #88182)
- Channels and mobile delivery are steadier across Telegram, WhatsApp, iMessage, and Slack

No breaking changes or migration notes are listed.

## Project Progress

103 pull requests were merged or closed in the last 24 hours (out of 500 updated). Notable closed bugs with linked fix PRs include:

- **#86820** (P1) — Codex OAuth compaction fallback failure: closed with fix
- **#87177** (P1) — Message duplication in QQBot channel: closed with fix
- **#88102** (P1) — Codex runtime rejects `openai/gpt-5.5`: closed with fix
- **#84820** (P1) — Unclosed FileHandle on session JSONL lock crashes gateway on Node ≥24: closed with fix
- **#57019** (P1) — Session write lock race condition: closed with fix

Open PRs advancing features or fixes (top by size or maintainer attention):

- **#89157** (XL, "ready for maintainer look") — Document reusable helper contracts (docs pass)
- **#87072** (XL, "needs proof") — Opt-in interleaved progress lane for Telegram
- **#87056** (XL, "ready for maintainer look") — Policy data handling conformance checks
- **#89285** (S, "needs proof") — Hide tool failure details in public channels
- **#89027** (S, "needs proof") — Prevent `empty_response` failover for completed thinking-only turns
- **#89290** (S, "needs proof") — Keep Codex waiting after raw reasoning progress
- **#89287** (L, "needs proof") — Verify completion delivery target (ACP/subagent)
- **#89268** (L, "needs proof") — Resolve pending approvals from Telegram message reactions
- **#89289** (L, "ready for maintainer look") — Aggregate archived session usage
- **#89038** (M, "needs proof") — Skip setup-only channel plugins in outbound resolution + drain pending deliveries on QQBot reconnect
- **#89040** (L, "needs proof") — Avoid event-loop stall during `embedded_run` bootstrap-context
- **#88992** (S, "needs proof") — Recover stranded replies in `message_tool_only` mode
- **#89109** (M, "ready for maintainer look") — Block message-tool spam loops defeated by volatile message IDs
- **#89251** (M, maintainer) — Deliver TTS tool audio on WhatsApp
- **#89045** (M, "needs proof") — Recover terminal session status on visible inbound turns

## Community Hot Topics

### Issues (by comment count)

1. **#80171** (15 comments, 1 👍) — [CLOSED] [stale] Codex-vs-Pi runtime parity QA harness (RFC + tracking) — [link](https://github.com/openclaw/openclaw/issues/80171)
   - Tracks the transition from Pi to Codex as default runtime. Multiple child issues and PRs referenced. Still unresolved at the parity proof level.

2. **#80380** (14 comments, 4 👍) — [OPEN] [enhancement] Update OpenClaw to use `gemini-3.1-flash-lite` (GA) instead of `-preview` — [link](https://github.com/openclaw/openclaw/issues/80380)
   - User request to switch to the GA version of Gemini 3.1 Flash-Lite before the preview is deprecated. No maintainer action yet.

3. **#88838** (12 comments, 1 👍) — [OPEN] Track core session/transcript SQLite migration via accessor seam — [link](https://github.com/openclaw/openclaw/issues/88838)
   - Maintainer-led planning issue for breaking the large session/transcript migration into small, reviewable PRs using branch-by-abstraction. Created 2026-06-01, high activity.

4. **#84038** (12 comments, 3 👍) — [CLOSED] `doctor --fix` silently migrates `openai-codex/` config to `openai/`, breaking PI+OAuth runtime and causing 3-4x token inflation — [link](https://github.com/openclaw/openclaw/issues/84038)
   - High-severity bug (P1, impact data-loss, auth-provider). Closed — fix likely shipped.

5. **#78308** (11 comments, 1 👍) — [OPEN] Channel-mediated approval for MCP tool calls (consent envelope) — [link](https://github.com/openclaw/openclaw/issues/78308)
   - Feature request to allow MCP servers to use the same `/approve <id>` pipeline as shell-exec calls. Still awaiting maintainer review and product decision.

### Pull Requests (by size/maintainer attention)

- **#89157** (XL, "ready for maintainer look") — Document reusable helper contracts — [link](https://github.com/openclaw/openclaw/pull/89157)
- **#87072** (XL, "needs proof") — Telegram interleaved progress lane — [link](https://github.com/openclaw/openclaw/pull/87072)
- **#87056** (XL, "ready for maintainer look") — Policy conformance checks — [link](https://github.com/openclaw/openclaw/pull/87056)
- **#88066** (M, "needs proof") — Fast-ack final button callbacks on Telegram — [link](https://github.com/openclaw/openclaw/pull/88066)

## Bugs & Stability

### P1 Regressions (most severe)

| Issue | Summary | Status | Fix PR? |
|-------|---------|--------|---------|
| **#88312** (8 comments, 2 👍) | Codex app-server turn-completion stall returns — regression of #84076 (fixed by #85107) — [link](https://github.com/openclaw/openclaw/issues/88312) | OPEN (clawsweeper:needs-live-repro) | Related: #89290 |
| **#88234** (6 comments) | Feishu dispatch: `TypeError: Cannot read properties of undefined (reading 'run')` — [link](https://github.com/openclaw/openclaw/issues/88234) | OPEN | None in top PRs |
| **#88039** (6 comments, 1 👍) | Session-selected model incorrectly included in fallback list — [link](https://github.com/openclaw/openclaw/issues/88039) | OPEN | None in top PRs |
| **#87744** (7 comments, 3 👍) | Codex-backed Telegram turns repeatedly time out waiting for `turn/completed` — [link](https://github.com/openclaw/openclaw/issues/87744) | OPEN (clawsweeper:needs-live-repro) | None in top PRs |
| **#86519** (9 comments, 1 👍) | Agent repeats identical replies 2-10x on Telegram after 5.20 update — [link](https://github.com/openclaw/openclaw/issues/86519) | OPEN (clawsweeper:needs-info) | Related: #89045 |

### P2 Bugs

- **#87641** (5 comments, 1 👍) — `opencode-go/kimi-k2.6` multi-turn tasks rejected with opaque `Provider returned error` (reason=format) — [link](https://github.com/openclaw/openclaw/issues/87641) | CLOSED
- **#86808** (4 comments, 1 👍) — OpenClaw persists `tool.call` without matching `tool.result` when Codex turn is denied/interrupted — [link](https://github.com/openclaw/openclaw/issues/86808) | OPEN
- **#88499** (5 comments, 1 👍) — `openai-responses` provider: 404 on `previous_response_id` when `store=false` — [link](https://github.com/openclaw/openclaw/issues/88499) | CLOSED

### Newly Reported (today, 2026-06-02)

- **#89265** (4 comments) — Feature request: more local providers (open weights, inference software improving) — [link](https://github.com/openclaw/openclaw/issues/89265) | OPEN, P3
- **#88592** (4 comments) — Control UI Workboard card settings don't persist + drag to running fails — [link](https://github.com/openclaw/openclaw/issues/88592) | OPEN, P2

## Feature Request Clusters

1. **Local Provider Parity** — #89265 (enhancement, 4 comments, P3) requests treating local models as first-class citizens as open-weight models improve. No related PR yet.

2. **Telegram Guest Bots & Bot-to-Bot** — #79077 (7 comments, 7 👍) requests support for Telegram's May 2026 release of guest bots and bot-to-bot communication. Stale but high community interest.

3. **MCP Tool Permission Model** — #78308 (OPEN, 11 comments) asks for channel-mediated approval consent envelope for MCP tool calls, extending the existing `/approve` pipeline. Needs maintainer review and product decision.

4. **Multi-Agent Collaboration** — #35203 (OPEN, 8 comments) is an RFC for capability profiling, shared blackboard, layered memory, and token cost governance. Long-running, still awaiting decisions.

5. **i18n for Slash Commands** — #79458 (OPEN, 5 comments, P3) requests i18n support for slash command descriptions (e.g., Chinese users). Needs maintainer review.

6. **TTS Audio on WhatsApp** — #89251 (PR, maintainer) fixes TTS tool audio delivery for channel-backed runs such as WhatsApp.

7. **Approval Reactions on Telegram** — #89268 (PR, L, "needs proof") adds native Telegram approval-reaction support (👍/👎) as alternative to callback buttons or text commands.

## User Feedback Summary

Several users report significant reliability regressions after recent updates:

- **@yair** (#88312) reports Codex turn-completion stall returning in 2026.5.27 after being fixed in 2026.5.26 — "reliable failure" on multi-tool agent turns.
- **@adamamzalag** (#87744) reports Codex-backed Telegram turns "repeatedly time out waiting for turn/completed" — agent does work but never reaches terminal state.
- **@qq850580483** (#87177) reports frequent message duplication in QQBot channel due to heartbeat session leakage and session rebuild on reconnect.
- **@Enominera** (#87938) reports Feishu DM sessions being rebuilt after gateway restart, causing duplicate keys and maintenance pruning.
- **@brokemac79** (#88102) reports Codex runtime rejecting `openai/gpt-5.5` after upgrade — workaround with `codex/gpt-5.5` drops Telegram `/status` usage.

Positive feedback is not directly captured in issues, but the number of closed bugs (103 PRs merged/closed today) suggests active remediation.

## Backlog Watch

### Issues needing maintainer attention (tagged `needs-maintainer-review`, `needs-product-decision`, or `stale`)

- **#51871** (P2, 10 comments) — Control UI: Cron jobs not displayed in dashboard — last updated 2026-06-01, but created 2026-03-21. [link](https://github.com/openclaw/openclaw/issues/51871)
- **#75767** (P2, 5 comments) — Gateway restart hangs on

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-06-02

## 1. Daily Cross-Project Overview

Today’s digest shows a clear tier of activity: OpenClaw dominates with 463 issues and 500 PRs updated, driven by a high rate of regressions and ongoing Codex runtime transition work. NanoBot shipped its v0.2.1 major release (84 PRs merged) and closed 25 issues, indicating a consolidation period. Zeroclaw and PicoClaw saw moderate to low activity, with Zeroclaw merging a batch of bug fixes and PicoClaw addressing targeted issues like Bedrock temperature deprecation and cron tool enhancements. No single cross-project trend dominates, but reliability around tool calls and provider compatibility (especially with Gemini, Claude Opus, and Kimi) recurs across multiple projects.

## 2. Activity Comparison

| Project    | Issues Updated | PRs Updated | Release(s) Today | Activity Note |
|------------|----------------|-------------|------------------|---------------|
| OpenClaw   | 463 (299 open, 164 closed) | 500 (397 open, 103 merged/closed) | Two beta releases (v2026.6.1-beta.1/.2) | Very high volume; heavy focus on regressions and Codex runtime stability |
| NanoBot    | 29 (4 open, 25 closed) | 31 (14 open, 17 merged/closed) | v0.2.1 (major, 84 PRs merged) | Moderate; shipping major WebUI improvements and bug fixes |
| Zeroclaw   | 36 (28 open, 8 closed) | 37 (24 open, 13 merged/closed) | None | Moderate; bug-fix batch landed, large PRs (zerocode TUI, WIT interfaces) remain open |
| PicoClaw   | 7 (all open) | 11 (6 open, 5 merged/closed) | Nightly build (v0.2.9-nightly) | Low; focused fixes for Bedrock, cron, symlinks, and skill token optimization |

## 3. OpenClaw Compared With Peers

- **Activity Volume**: OpenClaw’s daily issue and PR update counts (463 / 500) are an order of magnitude larger than any peer. This reflects both a larger community surface and a high rate of incoming bug reports and PR submissions.
- **Technical Focus**: OpenClaw is deep in a runtime transition (Pi to Codex) and SQLite migration planning, while peers are shipping more user-facing features (NanoBot WebUI, Zeroclaw TUI/RPC, PicoClaw cron enhancements). OpenClaw has more P1 regressions actively tracked (5 listed with fix PRs, plus several open P1s).
- **Community Surface**: OpenClaw has the most commented issues (e.g., #80171 with 15 comments) and the widest range of feature request clusters (local providers, MCP approval, Telegram guest bots). NanoBot and Zeroclaw have smaller but vocal communities, with Zeroclaw seeing active requests for skill compilation and Discord channel filtering.

## 4. Shared Technical Focus Areas

- **Tool Call Reliability & Recovery**: OpenClaw’s beta releases target cleaner recovery from interrupted tool calls. NanoBot merged a fix for orphaned tool results (though issue #4006 remains open). Zeroclaw merged a fix for fallback before visible stream errors (#6983). PicoClaw opened a PR to retry empty LLM responses (#2983). All four projects are actively addressing tool-call-related failures.
- **Provider Compatibility Fixes**: OpenClaw fixed Codex runtime rejecting `openai/gpt-5.5` (#88102). NanoBot merged XML tool call emission fixes for glm models (#4124). Zeroclaw fixed Kimi temperature serialization (#7049). PicoClaw fixed Bedrock Claude Opus 4.8 temperature deprecation (#2982). Provider-specific bugs are a common pain point.
- **Channel Delivery Steadiness**: OpenClaw’s beta releases note “steadier channel delivery” across Telegram, WhatsApp, iMessage, Slack. NanoBot improved DingTalk group isolation and added Napcat QQ channel. Zeroclaw fixed Discord redaction and SMTP credential handling. PicoClaw added Server酱³ Bot channel. Delivery reliability and channel expansion are shared priorities.
- **Token Cost Awareness**: NanoBot merged heartbeat optimization to skip LLM calls when no active tasks, and has a discussion on cache-miss token costs. Zeroclaw has a long-running issue (#5146) on token minimization via skill compilation. PicoClaw merged a PR to reduce skill catalog token usage on tool iterations (#2781). OpenClaw has no explicit token-cost feature today but the broader ecosystem is cost-conscious.

## 5. Differentiation Analysis

- **Feature Focus**: OpenClaw emphasizes runtime parity and cross-channel consistency (Telegram, WhatsApp, Slack). NanoBot is heavily investing in WebUI and chat UX (live file edits, tool traces). Zeroclaw is building toward a TUI/RPC management layer (zerocode) and WASI plugin interfaces. PicoClaw focuses on edge-device compatibility (RISC-V, symlink handling) and niche channel integrations (Server酱³).
- **Target Users**: OpenClaw appears geared toward power users and multi-channel deployments. NanoBot targets hobbyists and small teams with an improved WebUI. Zeroclaw appeals to developers wanting a Rust-based, plugin-extensible agent framework. PicoClaw attracts Chinese-language users and users on alternative hardware (RISC-V).
- **Technical Architecture**: OpenClaw uses a core reference implementation (TypeScript/Node) with heavy focus on SQLite and Codex runtime. Zeroclaw is Rust-based with WASI plugin interface. NanoBot (likely TypeScript/Node) and PicoClaw (probably Go or Rust, based on symlink fix) differ in language and infrastructure choices.

## 6. Community Activity Notes

- **OpenClaw** — Tier 1 activity: 463 issues, 500 PRs, two beta releases. High bug report velocity and active maintainer response (103 PRs merged/closed).
- **NanoBot** — Tier 2 activity: 29 issues, 31 PRs, major release. Consolidation after v0.2.1; many closed issues and merged PRs.
- **Zeroclaw** — Tier 2 activity: 36 issues, 37 PRs, no release. Moderate with several large open PRs and a notable bug-fix batch.
- **PicoClaw** — Tier 3 activity: 7 issues, 11 PRs, nightly build. Lower volume, primarily small fixes and one new channel.

No project shows signs of stagnation; even PicoClaw has active maintenance. OpenClaw’s high volume is partly due to its role as a core reference implementation attracting the largest community surface.

## 7. Evidence-Backed Observations

1. **Tool-call failure handling is a cross-project priority.** OpenClaw shipped two betas specifically for cleaner recovery; NanoBot fixed orphaned tool results; Zeroclaw fixed fallback on stream errors; PicoClaw opened a retry-on-empty-response PR. The issue spans all four projects, indicating a systemic challenge in LLM agent tool execution.

2. **Provider compatibility issues are recurring.** Each project today merged a fix for a model-specific API regression (OpenClaw: gpt-5.5; NanoBot: glm XML; Zeroclaw: Kimi temperature; PicoClaw: Bedrock Opus temperature). This suggests rapid API changes from providers (OpenAI, Anthropic, Google, MoonShot) are a constant maintenance burden.

3. **Channel diversification continues.** OpenClaw works on Telegram/WhatsApp/Slack; NanoBot added QQ via Napcat; Zeroclaw merged Jina AI web search and fixed Discord redaction; PicoClaw added Server酱³ Bot. No project is single-channel, and each is expanding to new platforms.

4. **Token cost concerns are rising.** NanoBot and PicoClaw both shipped optimizations to reduce LLM calls or token usage today. Zeroclaw has an active issue on skill compilation for token minimization. OpenClaw does not have a direct equivalent today, but the peer projects suggest cost pressure is a growing user pain point.

5. **No clear cross-project trend toward a specific new architecture** (e.g., WASI plugins, agent collaboration buses) is visible today. While Zeroclaw is actively developing WASI WIT interfaces and PicoClaw has a collaboration bus PR, these are isolated to single projects. The evidence does not support calling them ecosystem-wide shifts.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

## NanoBot Project Digest – 2026-06-02

### 1. Today's Activity Brief
Across the past 24 hours, 29 issues were updated (4 open, 25 closed) and 31 pull requests were touched (14 open, 17 merged/closed). The project shipped **v0.2.1**, a major release consolidating 84 merged PRs and contributions from 17 new contributors, with the headline feature being a significantly improved WebUI that now supports live file edits, tool trace rendering, and smoother chat interactions. Closed issues include fixes for heartbeat task duplication, cron reminder delivery, and retry logic for MCP connections, while open discussions focus on orphaned tool results, cost optimisation for cache-miss tokens, and new channel support (QQ via Napcat).

### 2. Releases
**[v0.2.1](https://github.com/HKUDS/nanobot/releases/tag/v0.2.1)**
🐈 *“The agent got a real workbench.”*
- 84 PRs merged, 17 new contributors.
- WebUI improvements: live file edits show as activity, tool traces render more clearly, chat surface smoother and faster.
- No explicit breaking changes or migration notes mentioned in the release snippet.

### 3. Project Progress (Merged/Closed PRs)
The 17 merged/closed PRs today cover a range of features and fixes:
- **New Features & Enhancements**
  - [DingTalk group_user_isolation](https://github.com/HKUDS/nanobot/pull/4016) — separate sessions per user in group chats.
  - [Napcat QQ channel](https://github.com/HKUDS/nanobot/pull/3509) — OneBot v11 Forward WebSocket support (backported to main). See also [#4146](https://github.com/HKUDS/nanobot/pull/4146) (open, based on same work).
  - [Local Whisper transcription](https://github.com/HKUDS/nanobot/pull/3723) — faster-whisper for offline voice transcription.
  - [WebUI runtime state refactored onto event bus](https://github.com/HKUDS/nanobot/pull/4135) — cleaner state translation for WebUI/WebSocket.
  - [Session retention refactor](https://github.com/HKUDS/nanobot/pull/4143) — returns `RetentionResult` for clearer archive semantics.
  - [Heartbeat optimisation](https://github.com/HKUDS/nanobot/pull/2482), [#2435](https://github.com/HKUDS/nanobot/pull/2435) — skip LLM call when HEARTBEAT.md has no active tasks.
  - [Keep cron runs silent](https://github.com/HKUDS/nanobot/pull/3126) — suppress progress/tool-hint output until final delivery.

- **Bug Fixes**
  - [Fix XML tool call emissions from mimo/glm models](https://github.com/HKUDS/nanobot/pull/4124) — raw XML no longer leaks to chat channels.
  - [Fix duplicate item id error with GPT models](https://github.com/HKUDS/nanobot/pull/3633) — related to Codex session handling.

### 4. Community Hot Topics
- **Most commented issue:** [#2880](https://github.com/HKUDS/nanobot/issues/2880) (18 comments, closed) — user reported “无论发什么消息都回复报错”; resolved after investigation.
- **High reaction counts (👍):**
  - [#49](https://github.com/HKUDS/nanobot/issues/49) (6 👍) — Add Signal channel support via signal-cli (feature request).
  - [#1536](https://github.com/HKUDS/nanobot/issues/1536) (3 👍) — Add retry logic for MCP reconnection.
  - [#1862](https://github.com/HKUDS/nanobot/issues/1862) (3 👍) — Support media path access when restrictToWorkspace enabled.
- **Active discussion:** [#4006](https://github.com/HKUDS/nanobot/issues/4006) (2 comments, open) — orphaned tool results in conversation history; user notes it persists after a previous fix.
- **Feature request with alignment to existing work:** [#4142](https://github.com/HKUDS/nanobot/issues/4142) (discussion) — optimisation of cache-miss input token costs, especially for DeepSeek V4 Flash/Pro.

### 5. Bugs & Stability
**Critical / High Severity (potential data loss or silent failures):**
- **[#4006](https://github.com/HKUDS/nanobot/issues/4006)** — orphaned tool results without corresponding tool_calls; violates OpenAI/Anthropic spec and causes API rejections and render errors. Open, no fix PR yet.
- **[#4133](https://github.com/HKUDS/nanobot/issues/4133)** — Agent response silently fails to deliver after tool calls (Telegram). Observed with Claude/DeepSeek V4 Flash via OpenRouter. Closed today, but root cause may need follow-up.

**Medium Severity:**
- **[#4128](https://github.com/HKUDS/nanobot/issues/4128)** — `retain_recent_legal_suffix` causes user messages to be duplicate-archived in some edge cases. Closed today with PR #4129 (merged).
- **[#4069](https://github.com/HKUDS/nanobot/issues/4069)** — Dream cron job registered without an enable gate, causing unconditional scheduling. Closed.

**Minor / Observations:**
- Tool loading issues (e.g., [#2071](https://github.com/HKUDS/nanobot/issues/2071) – DuckDuckGo search not working without explicit config) noted but closed.

### 6. Feature Request Clusters
- **New Communication Channels:**
  - Signal support ([#49](https://github.com/HKUDS/nanobot/issues/49)) – 6 👍, closed.
  - QQ via Napcat (PR [#3509](https://github.com/HKUDS/nanobot/pull/3509) merged, PR [#4146](https://github.com/HKUDS/nanobot/pull/4146) open for main branch).
  - WebSocket server channel for custom clients ([#2819](https://github.com/HKUDS/nanobot/issues/2819)) – closed.

- **Cost Optimisation:**
  - Skip heartbeat LLM call when no active tasks (PR [#2482](https://github.com/HKUDS/nanobot/pull/2482), [#2435](https://github.com/HKUDS/nanobot/pull/2435) merged).
  - Discussion on cache-miss input tokens ([#4142](https://github.com/HKUDS/nanobot/issues/4142)) – user proposes optimisations for DeepSeek V4.

- **Tool & Provider Enhancements:**
  - Custom image generation provider (e.g. Agnes AI) ([#4132](https://github.com/HKUDS/nanobot/issues/4132)).
  - Toggle for built-in filesystem tools (`tools.file.enable`) ([#4138](https://github.com/HKUDS/nanobot/pull/4138)).
  - Azure AAD-based auth for Azure OpenAI provider ([#4126](https://github.com/HKUDS/nanobot/pull/4126)).
  - Volcengine web search provider ([#4141](https://github.com/HKUDS/nanobot/pull/4141)).

- **Hooks & Scripting:**
  - Implement hooks (like Claude Code) ([#2182](https://github.com/HKUDS/nanobot/issues/2182)) – closed, likely not yet implemented.

- **Session & UI:**
  - Edit button for sent messages in WebUI ([#4148](https://github.com/HKUDS/nanobot/pull/4148)).
  - `/status` command for IM channels ([#2131](https://github.com/HKUDS/nanobot/issues/2131)) – closed.

### 7. User Feedback Summary
- **Positive:** The v0.2.1 release with WebUI improvements is acknowledged (“the agent got a real workbench”).
- **Pain Points:**
  - Chinese users reporting recurring bugs ([#2880](https://github.com/HKUDS/nanobot/issues/2880) – all replies error), duplication of scheduled tasks ([#3028](https://github.com/HKUDS/nanobot/issues/3028)), and duplicate archiving ([#4128](https://github.com/HKUDS/nanobot/issues/4128)).
  - Token waste: several users (e.g., [#2406](https://github.com/HKUDS/nanobot/issues/2406), [#4142](https://github.com/HKUDS/nanobot/issues/4142)) highlight unnecessary LLM calls during heartbeat and cache-miss costs.
  - Silent delivery failures after tool calls ([#4133](https://github.com/HKUDS/nanobot/issues/4133)) and intermediate thinking messages in cron tasks ([#3064](https://github.com/HKUDS/nanobot/issues/3064)) disrupt user experience.
  - Feature requests for more granular channel control (e.g., Discord bot-to-bot messaging [#3217](https://github.com/HKUDS/nanobot/issues/3217), ability to disable skills without deletion [#1932](https://github.com/HKUDS/nanobot/issues/1932)) indicate desire for flexible configuration.

### 8. Backlog Watch
- **Open Issues That Need Maintainer Attention:**
  - [#4006](https://github.com/HKUDS/nanobot/issues/4006) (orphaned tool results) – affects strict API compliance; no fix PR yet.
  - [#4142](https://github.com/HKUDS/nanobot/issues/4142) (discussion) – cost optimisation; has 1 comment, no resolution.
  - [#4136](https://github.com/HKUDS/nanobot/issues/4136) (refactor session retention result) – PR [#4143](https://github.com/HKUDS/nanobot/pull/4143) closed, but issue remains open – may need closure.
  - [#4132](https://github.com/HKUDS/nanobot/issues/4132) (custom image generation provider) – no PR yet.

- **Open PRs (awaiting review/merge):**
  - [#3997](https://github.com/HKUDS/nanobot/pull/3997) (pre-warm tokenizer) – performance improvement.
  - [#4148](https://github.com/HKUDS/nanobot/pull/4148) (WebUI edit button) – new feature.
  - [#4147](https://github.com/HKUDS/nanobot/pull/4147) (fix cursor allocation race condition) – addresses concurrency issue [#4081](https://github.com/HKUDS/nanobot/issues/4081).
  - [#4139](https://github.com/HKUDS/nanobot/pull/4139) (cloud deployment layer for HF Spaces) – significant new infrastructure.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest — 2026-06-02

## Today's Activity Brief
The project saw moderate activity on June 2, 2026: **36 issues** were updated (28 open/active, 8 closed) and **37 pull requests** were updated (24 open, 13 merged/closed). No new releases were tagged. A notable batch of bug-fix PRs landed, including fixes for Discord redaction, SMTP credential handling, web fetch DNS allowlisting, and a Kimi temperature serialization bug. The large `zerocode` TUI / RPC socket PR (#6848) remains open and continues to receive updates. Several critical bugs affecting Ollama, Gemini, and delegate agents remain under investigation.

## Releases
No new releases today.

## Project Progress
**Merged/closed PRs today (selected):**
- [#7049](https://github.com/zeroclaw-labs/zeroclaw/pull/7049) — fix(providers): omit temperature for kimi-k2 models in compatible.rs (closes #7022)
- [#6979](https://github.com/zeroclaw-labs/zeroclaw/pull/6979) — fix(email): ignore blank SMTP credential overrides (closes #6881)
- [#6974](https://github.com/zeroclaw-labs/zeroclaw/pull/6974) — fix(web_fetch): honor private DNS host allowlist
- [#6972](https://github.com/zeroclaw-labs/zeroclaw/pull/6972) — fix(tools): resolve image_info paths through policy
- [#6983](https://github.com/zeroclaw-labs/zeroclaw/pull/6983) — fix(runtime): fall back before visible stream errors
- [#6931](https://github.com/zeroclaw-labs/zeroclaw/pull/6931) — fix(channels): restore date-only channel prompt context
- [#6904](https://github.com/zeroclaw-labs/zeroclaw/pull/6904) — feat(channels): define lean default channel bundle (closes #6895)
- [#6833](https://github.com/zeroclaw-labs/zeroclaw/pull/6833) — feat(tools): add Jina AI as web_search provider (closes #6827)
- [#7031](https://github.com/zeroclaw-labs/zeroclaw/pull/7031) — fix(channels): redact Discord delivery failure targets
- [#5979](https://github.com/zeroclaw-labs/zeroclaw/pull/5979) — feat(channels): opt-out reply-intent precheck + lower-effort classifier call

Additionally, a NOOP issue (#7058) was closed.

## Community Hot Topics
**Most active issues (by comment count):**
- [#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146) — "Token consumption minimization via skill compilation" (8 comments). User @jonsmirl argues that full skill files are sent on every inference, wasting tokens; proposes a compilation step.
- [#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) — "Ollama Provider call failed when tools are needed" (6 comments, S1 block). User @ufukbakan reports that tool-using workflows are completely blocked with Ollama.
- [#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378) — "Discord Bot respond only in specific Discord channels" (6 comments). @BaroDevelopment requests `allowed_channels` config, analogous to other channels.
- [#6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302) — "Gemini 400 — assistant tool_call emitted as first non-system turn" (4 comments, high risk). The history serialization violates Gemini’s turn order constraints.

**Most active PRs (by comment count, undefined but top-listed):**
- [#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) — “feat(integration): introduce zerocode TUI, RPC socket transport, DenyWithEdit approval, and beta-2 integration” (XL size, touches nearly every component). This branch is intended as the basis for v0.8.0-beta-2.
- [#7060](https://github.com/zeroclaw-labs/zeroclaw/pull/7060) — “feat(wasi): define WIT interface files for Tool, Channel, and Memory plugins” — long-requested plugin interface definitions.
- [#7067](https://github.com/zeroclaw-labs/zeroclaw/pull/7067) — “feat(eval): Phase 0 agent eval harness — deterministic replay” — new crate for offline evaluation of agent responses.
- [#7066](https://github.com/zeroclaw-labs/zeroclaw/pull/7066) — “fix(channels): excise default-model-provider credential fallback” — addresses architectural debt from the V2 schema.

## Bugs & Stability
**Critical bugs (S1 – workflow blocked):**
- [#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) — Ollama provider fails when tools are required; no fix PR yet, status `in-progress`.
- [#5155](https://github.com/zeroclaw-labs/zeroclaw/issues/5155) — Delegate agents ignore `prompt_injection_mode` and always inject full skills; status `in-progress`.
- [#7022](https://github.com/zeroclaw-labs/zeroclaw/issues/7022) (**closed**) — Kimi models rejected 400 due to forced `temperature: 0.7` in compatible.rs; fixed by [#7049](https://github.com/zeroclaw-labs/zeroclaw/pull/7049) (merged today).

**High-risk bugs (S2 – degraded behavior):**
- [#6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302) — Gemini 400 from assistant-first turn order; status `in-progress`.
- [#6472](https://github.com/zeroclaw-labs/zeroclaw/issues/6472) — Gateway panics when using Postgres memory (`"Cannot start a runtime from within a runtime"`); status `in-progress`.
- [#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) — WhatsApp allowed-numbers bypass for LID-based contacts, silent drops; status `in-progress`.
- [#7063](https://github.com/zeroclaw-labs/zeroclaw/issues/7063) — Channel-served agents bypass per-agent tool allowlist; no fix PR yet.
- [#7059](https://github.com/zeroclaw-labs/zeroclaw/issues/7059) — Channel orchestrator carries fake "default model provider" concept from V2 schema; fix PR [#7066](https://github.com/zeroclaw-labs/zeroclaw/pull/7066) is open.
- [#7068](https://github.com/zeroclaw-labs/zeroclaw/issues/7068) — Telegram channel returns Codex scratchpad/tool transcript as final response.

**Medium-risk bugs:**
- [#6881](https://github.com/zeroclaw-labs/zeroclaw/issues/6881) (**closed**) — Email channel ignored blank SMTP overrides; fixed by [#6979](https://github.com/zeroclaw-labs/zeroclaw/pull/6979).
- [#6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548) — Channel runtime replies bypass Fluent localization; status `in-progress`.
- [#6645](https://github.com/zeroclaw-labs/zeroclaw/issues/6645) — SkillImprover + skill_manage only handle `SKILL.toml`, not `manifest.toml`.
- [#6683](https://github.com/zeroclaw-labs/zeroclaw/issues/6683) — `skill_manage` patch ignores cooldown; status `in-progress`.

## Feature Request Clusters
**Skill system improvements (multiple requests):**
- Token minimization via skill compilation [#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146)
- Installing skills from `.well-known` URI [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853)
- Prompt-triggered install suggestions for missing skills [#6289](https://github.com/zeroclaw-labs/zeroclaw/issues/6289)
- Track: v0.7.6 skills support and UX [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253)
- Several bugs on skill tooling ([#6645](https://github.com/zeroclaw-labs/zeroclaw/issues/6645), [#6683](https://github.com/zeroclaw-labs/zeroclaw/issues/6683))

**Channel configuration and filtering:**
- Discord `allowed_channels` [#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378)
- Per-channel reply-min-interval-secs (throttle) [#6345](https://github.com/zeroclaw-labs/zeroclaw/issues/6345)
- Lean default channel set (merged today via [#6904](https://github.com/zeroclaw-labs/zeroclaw/pull/6904))

**Management UI and multi-machine fleet:**
- Dashboard "Update ZeroClaw" button over gateway [#6365](https://github.com/zeroclaw-labs/zeroclaw/issues/6365)
- `zeroclaw node add <url>` CLI [#6390](https://github.com/zeroclaw-labs/zeroclaw/issues/6390)
- Real heartbeat tracking for daemon nodes [#6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391)
- Node CLI + dashboard health & management [#6346](https://github.com/zeroclaw-labs/zeroclaw/issues/6346)

**Plugin interface and evaluation:**
- WASI WIT interface definitions (PR [#7060](https://github.com/zeroclaw-labs/zeroclaw/pull/7060))
- Agent evaluation harness (`zeroclaw eval`) — issue [#7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065) and PR [#7067](https://github.com/zeroclaw-labs/zeroclaw/pull/7067)

**Other:**
- Custom TLS CA cert support for providers [#5797](https://github.com/zeroclaw-labs/zeroclaw/pull/5797) (still open)
- Route-layer auth middleware for `/api/config` and `/api/onboard` [#6250](https://github.com/zeroclaw-labs/zeroclaw/issues/6250)
- Jina AI web search provider (merged [#6833](https://github.com/zeroclaw-labs/zeroclaw/pull/6833))

## User Feedback Summary
- **Token waste:** User @jonsmirl explicitly points out that sending the full `SKILL.md` on every query is wasteful and proposes compilation (#5146). This is a clear pain point for cost-conscious users.
- **Ollama tool support:** @ufukbakan reports that tool-using workflows are completely broken with Ollama, blocking real use cases (#5962).
- **Gemini compatibility:** @dmnkhorvath encountered a 400 error due to message ordering, preventing Gemini usage (#6302).
- **Discord channel scoping:** @BaroDevelopment wants to restrict bot to specific channels, a common governance request (#6378).
- **WhatsApp silent drops:** @theonlyhennygod reports that LID contacts bypass the allowed-numbers filter without any error (#6350).
- **Postgres memory panic:** @hjh218 hit a runtime panic when trying to use Postgres as memory backend (#6472).
- **Codex transcript leakage:** @sbenedetto saw internal scratchpad content sent to Telegram when using Codex, a serious UX and trust issue (#7068).
- **Tool allowlist bypass:** @alex-nax discovered that channel-served agents ignore the per-agent tool allowlist, a security concern (#7063).
- **Kimii temperature bug:** @RO-mix reported that kimi-k2.5 and kimi-k2.6 fail with temperature 0.7; the fix (#7049) landed the same day.
- **General localization:** @drbparadise notes that some channel runtime replies are still hard-coded English even with `zh-CN` locale (#6548).

## Backlog Watch
- **Issues with no maintainer response or stale:**
  - [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) (Installing skills from `.well-known` URI, created March 27, 3 comments, status `accepted` but no PR).
  - [#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146) (Token minimization via skill compilation, created March 29, 8 comments, status `accepted`, no PR).
  - [#

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-02

## Today's Activity Brief

In the last 24 hours, PicoClaw saw activity on **7 issues** (all open) and **11 pull requests** (6 open, 5 merged/closed). A new **nightly build** (`v0.2.9-nightly.20260602.426046fc`) was released. Five PRs were merged, including a fix for AWS Bedrock Claude Opus 4.8 temperature deprecation, a Server酱³ Bot channel integration, and a cron tool enhancement. One new task issue requests documentation updates to match the upcoming v0.2.9 changes.

## Releases

- **Nightly Build** `v0.2.9-nightly.20260602.426046fc` (2026-06-02)
  Automated build containing changes on the `main` branch since `v0.2.9`. Marked as potentially unstable.
  [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

No release notes or migration steps were provided beyond the automated changelog.

## Project Progress

Five PRs were merged or closed today (all closed as merged except where noted):

- **[#2982](https://github.com/sipeed/picoclaw/pull/2982) — fix(bedrock): drop temperature for models that deprecate it (Opus 4.8)**
  Resolves HTTP 400 errors when using Claude Opus 4.8 on AWS Bedrock by omitting the `temperature` field, which the model no longer accepts.

- **[#2977](https://github.com/sipeed/picoclaw/pull/2977) — feat(cron): add get and update actions to cron tool**
  Lets agents inspect full persisted cron job payloads and apply partial updates without recreating jobs, preventing rescheduling flows from using `remove -> add`.

- **[#2893](https://github.com/sipeed/picoclaw/pull/2893) — feat: add Server酱³ Bot (SC3Bot) channel support** (merged)
  Adds a new channel type for the Chinese notification service Server酱³, supporting both polling and webhook modes.

- **[#2890](https://github.com/sipeed/picoclaw/pull/2890) — fix: resolve symlinks in cwdPath on macOS to fix path validation** (merged)
  Fixes file path validation failures caused by `/var` → `/private/var` symlink inconsistency on macOS.

- **[#2781](https://github.com/sipeed/picoclaw/pull/2781) — perf: reduce skill catalog token usage on tool iterations and subsequent turns** (merged)
  Optimizes context usage by sending the full skill catalog only on initial requests and reusing cached versions for tool call round-trips and follow-up turns.

Additionally, one open PR was created today:
- **[#2983](https://github.com/sipeed/picoclaw/pull/2983) — fix(agent): retry empty llm response**
  Addresses a gap where an OpenAI-compatible provider returns HTTP 200 with a semantically empty assistant message (e.g., `content: null` with no tool calls) — previously not retried.

## Community Hot Topics

The most active discussion threads in the last 24 hours:

- **[Issue #1042](https://github.com/sipeed/picoclaw/issues/1042)** (15 comments, 2 👍) — **BUG: exec工具guardCommand方法路径判断误报**
  When `restrict_to_workspace=true`, the `exec` tool’s `guardCommand` incorrectly blocks commands like `curl -s "wttr.in/Beijing?T"` because regex matching produces a false relative path (`../../../../Beijing?T`). The underlying need is for a more intelligent path detection that distinguishes URLs from filesystem paths.

- **[Issue #2887](https://github.com/sipeed/picoclaw/issues/2887)** (8 comments) — **BUG: .deb version on RISC-V not functional with OpenAI model**
  Users on RISC-V Debian systems cannot use any OpenAI model with the `.deb` package. No workaround has been identified yet.

- **[Issue #2720](https://github.com/sipeed/picoclaw/issues/2720)** (7 comments) — **BUG: Singleton PID check doesn't verify process identity — stale PID causes crash loop**
  A crash loop occurs when a stale PID file is left behind and the OS reuses the PID for an unrelated process. The fix is in open PR [#2813](https://github.com/sipeed/picoclaw/pull/2813), which adds gateway identity verification.

- **[Issue #2796](https://github.com/sipeed/picoclaw/issues/2796)** (5 comments) — **BUG: 历史记录中多次用户消息只能看到最后一条**
  In conversations with multiple user messages, only the last user message is displayed in history. Users expect all messages to be shown, even if compression is applied for the LLM.

## Bugs & Stability

| Issue | Severity | Description | Fix PR Status |
|-------|----------|-------------|---------------|
| [#2720](https://github.com/sipeed/picoclaw/issues/2720) | **High** | Stale PID crash loop – gateway fails to start if PID reused by unrelated process | [#2813](https://github.com/sipeed/picoclaw/pull/2813) open since May 7 |
| [#2887](https://github.com/sipeed/picoclaw/issues/2887) | **High** | `.deb` on RISC-V completely non-functional with OpenAI models | No fix PR |
| [#2941](https://github.com/sipeed/picoclaw/issues/2941) | **Medium** | Default config seeds `claude-sonnet-4.6` (dotted) – Anthropic API expects hyphens, returns 404 | [#2942](https://github.com/sipeed/picoclaw/pull/2942) open since May 25 |
| [#2939](https://github.com/sipeed/picoclaw/issues/2939) | **Medium** | `claude-opus-4-7` fails because `temperature` is deprecated – HTTP 400 | [#2940](https://github.com/sipeed/picoclaw/pull/2940) open since May 25 |
| [#1042](https://github.com/sipeed/picoclaw/issues/1042) | **Medium** | `exec` tool false positive path blocking – blocks valid URL commands | No fix PR |
| [#2796](https://github.com/sipeed/picoclaw/issues/2796) | **Low** | History UI shows only last user message in multi-message conversations | No fix PR |
| [#2982](https://github.com/sipeed/picoclaw/pull/2982) | – | **Fixed today** – Bedrock Opus 4.8 temperature deprecation | Merged |
| [#2983](https://github.com/sipeed/picoclaw/pull/2983) | – | **Open fix** – Agent retry on empty LLM responses | Open since today |

## Feature Request Clusters

- **Agent Collaboration** — PR [#2937](https://github.com/sipeed/picoclaw/pull/2937) (open since May 24) introduces a first-class internal Agent Collaboration Bus with per-agent mailboxes, collaboration threads, and structured message envelopes. This is the largest feature currently under review, with no related user issue requesting it yet.

- **New Provider Integrations** — PR [#2917](https://github.com/sipeed/picoclaw/pull/2917) (open since May 21) adds NEAR AI Cloud as an OpenAI-compatible provider. Meanwhile, Server酱³ Bot support ([#2893](https://github.com/sipeed/picoclaw/pull/2893)) was merged today, satisfying a channel integration request for Chinese market users.

- **Documentation Update** — Issue [#2981](https://github.com/sipeed/picoclaw/issues/2981) (created today) is a formal task to update the instruction manual to match the v0.2.9 changes. No PR is attached yet.

- **Cron Tool Enhancement** — PR [#2977](https://github.com/sipeed/picoclaw/pull/2977) (merged today) adds `get` and `update` actions to the cron tool, addressing agents’ need to inspect and modify scheduled jobs without destructive recreate cycles.

## User Feedback Summary

Users are experiencing several real-world pain points with the current release:

- **False path blocking** ([#1042](https://github.com/sipeed/picoclaw/issues/1042)): The `exec` tool’s safety guard is too simplistic, blocking innocuous commands like `curl` with URLs. The user-provided example (`curl -s "wttr.in/Beijing?T"`) highlights a mismatch between security intent and actual usage.
- **Out-of-box failures** ([#2941](https://github.com/sipeed/picoclaw/issues/2941), [#2939](https://github.com/sipeed/picoclaw/issues/2939)): Fresh installations with default configs fail on first use due to model ID formatting and deprecated parameters. This suggests the default configuration is not validated against current Anthropic API requirements.
- **Platform gaps** ([#2887](https://github.com/sipeed/picoclaw/issues/2887)): RISC-V users on Debian cannot use the `.deb` package with OpenAI models at all, indicating a build or dependency issue.
- **History visibility** ([#2796](https://github.com/sipeed/picoclaw/issues/2796)): The UI/API truncation of historical user messages reduces trust and usability for multi-turn conversations, even though the internal compression may be correct.
- **Crash loops** ([#2720](https://github.com/sipeed/picoclaw/issues/2720)): The stale PID issue causes repeated startup failures, making the gateway unavailable until manual intervention.

No positive satisfaction signals were explicitly recorded in the tracked data.

## Backlog Watch

Several important issues and open PRs have remained unresolved for extended periods without visible maintainer action:

- **[Issue #1042](https://github.com/sipeed/picoclaw/issues/1042)** (created 2026-03-04, last updated 2026-06-01) — The `exec` tool false positive bug has been open for nearly 3 months with 15 comments but no associated fix PR.
- **[Issue #2720](https://github.com/sipeed/picoclaw/issues/2720)** (created 2026-04-30) — High-priority stale PID crash loop. A fix exists in PR [#2813](https://github.com/sipeed/picoclaw/pull/2813) (open since May 7) but has not been reviewed or merged in 26 days.
- **[Issue #2796](https://github.com/sipeed/picoclaw/issues/2796)** (created 2026-05-07) — History message truncation bug with 5 comments, no fix PR.
- **[Issue #2887](https://github.com/sipeed/picoclaw/issues/2887)** (created 2026-05-17) — RISC-V `.deb` non-functional, no fix PR or maintainer comment confirming investigation.
- **[PR #2937](https://github.com/sipeed/picoclaw/pull/2937)** (open since May 24) — Agent collaboration feature, a large architectural change, has received no review comments.
- **[PR #2942](https://github.com/sipeed/picoclaw/pull/2942) and [#2940](https://github.com/sipeed/picoclaw/pull/2940)** (both open since May 25) — Fixes for default model config and temperature deprecation, both small changes but not yet merged.
- **[Issue #2981](https://github.com/sipeed/picoclaw/issues/2981)** (created 2026-06-01) — Documentation update task, still with empty to-do list.

</details>