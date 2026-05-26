# OpenClaw Ecosystem Digest 2026-05-26

> Issues: 471 | PRs: 500 | Projects covered: 4 | Generated: 2026-05-26 02:28 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-05-26

## Today's Activity Brief

In the last 24 hours, 471 issues were updated (188 open, 283 closed) and 500 PRs were updated (273 open, 227 merged/closed). No new releases were published. Activity remains dominated by regressions in the Codex runtime parity layer, session-state and message-loss bugs, and two large ongoing refactors: the SQLite runtime-state migration (#81402) and the internalization of the agent runtime (#85341). A new P1 FD-leak regression in `memory_search` (#86613) was opened yesterday and already has an accompanying fix PR (#86701), illustrating the project's rapid response to critical stability issues.

## Releases

No new releases were published in the last 24 hours.

## Project Progress

**Merged/closed PRs today** (partial list):

- **#70112** (merged) — fix(agents): use CJK-aware token estimation in compaction path. Addresses #70052 where Chinese/Japanese/Korean content was severely underestimated (~4 chars/token assumed, actual ~1 char/token), causing compaction to trigger too late and overflow context.
- **#86697** (closed) — fix(whatsapp): restore ack emoji identity fallback. The WhatsApp ack reaction config was reading only `emoji` field, ignoring valid configs like `{ direct: true, group: "mentions" }` without an emoji.
- **#86720** (closed) — fix(imessage): fix iMessage group media delivery. Routes media-only sends to explicit chat targets through `imsg send-attachment --transport auto` instead of generic RPC.
- **#80490** (closed) — fix: `doctor --fix` auto-builds unbuilt plugins. Addresses a longstanding issue where doctor advertised itself as the fix for unbuilt plugins but never ran the build step.
- Various other closed items: #85999 (gateway startup blocking), #68944 (CLI WebSocket hang), #86201 (WSL2 slowness), #85048 (manifest-id mismatch warnings), #84945 (LLM idle timeout silently dropped), #85120 (macOS update stops gateway), #85240 (cross-user privacy leak), #85306 (EmbeddedAttemptSessionTakeoverError on single-turn), #86288 (AGENTS.md review policy).

**Notable open PRs under active development:**

- **#86701** (open, P1) — fix(memory-core): avoid per-file watcher FD fan-out for memory directories. Direct fix for the FD-leak regression #86613.
- **#86709** (open) — fix(agents): handle preflight compaction no-op budgets. Treats `ok: true, compacted: false` as successful no-ops instead of failing the reply path.
- **#86676** (open) — feat: configurable diagnostics.laneWaitWarnMs threshold. Addresses #14747 by making the hardcoded 2-second lane wait warning configurable.
- **#86642** (open) — feat: add structured provider error descriptors. Backwards-compatible contract for provider plugins to classify stable upstream errors.
- **#86270** (open) — Fix stale approval prompts in Control UI when approvals are resolved from other clients (Discord, Slack, CLI, etc.).

## Community Hot Topics

**Most commented issues (last 24 hours):**

1. **#80319** (17 comments) — [OPEN] "QA tool-defaults suite conflates Codex-native tools with OpenClaw dynamic tool parity." The author corrects their original overclaim about Codex dropping tool calls, clarifying it's a QA harness/mock-provider issue. Community discussion focuses on test isolation and mock fidelity.

2. **#44925** (17 comments) — [OPEN, P1, diamond lobster] "Subagent completion silently lost — no retry, no notification, no auto-restart on timeout." Multiple failure patterns documented (E31, E42, E45) where subagent results are silently lost. This has been open since March 13 and carries five ClawSweeper labels indicating it needs both a fix shape and a product decision.

3. **#84038** (12 comments, 👍3) — [OPEN, P1, diamond lobster] "doctor --fix silently migrates intentional openai-codex/ config to openai/, breaking PI+OAuth runtime and causing 3-4x token inflation." Users report `doctor --fix` actively breaks their working setup by migrating Codex-native config sections to OpenAI sections, causing massive token inflation. The author notes this is a known upstream issue OpenClaw cannot fix, but doctor should not silently change configs.

4. **#18160** (12 comments, 👍9) — [OPEN, P2, diamond lobster] "Direct Exec Mode for Cron Jobs." Users want cron jobs to bypass LLM interpretation for simple commands. High reaction count (9 👍) suggests broad interest. Has been open since February 16 with multiple maintainer review and product decision labels still applied.

5. **#80520** (11 comments, 👍3) — [OPEN, P1] "Telegram messages silently dropped, no sendMessage logged." User reports multiple instances today where Telegram gateway receives messages but never logs a sendMessage API call. Community discussion focuses on whether this is a session-lock race or a heartbeat-lane issue (related to #85913 and #83184).

**Most active PRs:**

1. **#70864** (feat: scoped mention pattern policy) — large XL PR covering 30+ channels, still open since April 24, with "needs proof" status.
2. **#86723** (fix(qqbot): persist group inbound delivery route) — opened today, triage label "needs-real-behavior-proof."
3. **#86504** (fix(diagnostics): track model stream progress) — ready for maintainer review, addresses diagnostic false positives for healthy streamed calls.
4. **#86696** (fix: add ENETDOWN to transient network error codes) — opened today, targets gateway crash when local network interface briefly drops.

## Bugs & Stability

**P1 bugs (most severe):**

- **#86613** (open, P1, diamond lobster) — "Gateway accumulates >12K read-only file descriptors on workspace memory/**; correlated with memory_search tool activity." **Fix PR #86701 exists** (open, P1). A single `POST /tools/invoke memory_search` call against a multi-thousand-`.md` workspace opens one FD per file, never released. This is a concrete regression from 2026.5.22.

- **#86599** (open, P1, gold shrimp) — "Local model provider calls thread block gateway event loop on Windows beta; trivial infer run takes ~4 minutes." Filed yesterday, marked as **beta release blocker**. User reports a fresh prompt takes ~4 minutes on Windows 2026.5.24-beta.1.

- **#85953** (open, P1, platinum hermit) — "sessions_yield can leave parent session transcript lock held, causing subagent completion callback timeout." The lock remains held by the live gateway process, preventing the subagent from writing back results. No fix PR yet.

- **#85251** (open, P1, diamond lobster) — "Codex app-server emits notification:turn/started then goes silent; embedded run wedges for full stuck-session recovery window (default 360s)." No fix PR yet.

- **#83184** (open, P1, diamond lobster) — "Heartbeat-driven agent replies leave pendingFinalDelivery stuck, blocking subsequent heartbeats." The heartbeat writes `lastHeartbeatText` but never nulls `pendingFinalDelivery*` fields, causing cascading blocking of later heartbeats.

**Regressions reported today:**

- **#86696** (fix PR exists) — `ENETDOWN` missing from transient network error codes causes gateway crash when local network drops briefly during SSRF guard operations.
- Several of the P1 bugs above are regressions from the 2026.5.22 release.

**Cross-user security issue closed today:**

- **#85240** (closed, P0 Security, diamond lobster) — "relevant-memories: Cross-user privacy leakage via semantic recall without sender_id isolation." This was closed today after the fix was merged (PR not shown in top 30). Private memories from one user could be injected into another user's conversation context.

## Feature Request Clusters

**Sub-agent orchestration improvements:**
- **#44925** (open since March, P1) — Subagent completion silently lost; add retry and notification
- **#27445** (open since February, P2, 👍5) — `announceTarget` option for sub-agent completion announce routing to parent session
- **#85953** (open, P1) — sessions_yield transcript lock held, preventing subagent writeback

**Session management and persistence:**
- **#79904** (open, P2) — Add cursored SQLite transcript read API for companion consumers
- **#79903** (open, P2) — Expose durable session lineage and sessionId discovery across rotations
- **#79905** (open, P2) — Add typed transcript projections and companion rebuild contract
- These three related feature requests from @100yenadmin are part of a broader SQLite runtime refactor umbrella (#79902).

**Cron and scheduled task execution:**
- **#18160** (open since February, P2, 👍9) — Direct Exec Mode for cron jobs to bypass LLM interpretation

**Provider support:**
- **#86169** (open, P2) — Add Xiaomi MiMo Token Plan provider support
- **#51441** (open, P2) — Expose resolved backend model in session_status (for LiteLLM routing proxies)

**Channel-specific:**
- **#10737** (closed) — iMessage auto-acknowledgment (was closed, but no replacement indicated in top issues)
- **#24943** (closed) — iMessage markdown-to-plain-text conversion (closed)
- **#10872** (closed) — iMessage reply/thread context (closed)

## User Feedback Summary

**Pain points reported today:**

1. **Token inflation from doctor --fix** (#84038, 👍3): A user reports switching from Codex to PI runtime causes 3-4x token usage, which they understand is upstream, but `doctor --fix` silently breaks their working config. Frustration is evident: "this is a known upstream issue that OpenClaw cannot fix — but doctor --fix should not silently change configs."

2. **Silent message failures** are the most common user complaint this week: Telegram drops (#80520), iMessage replays (#62761), LLM idle timeout (#84945), compaction-delivered replies (#47335), heartbeat delivery stuck (#83184). Multiple users describe the same experience: "the gateway receives the message, processes it, generates a reply visible in the transcript, but the user never receives it."

3. **Session takeover errors** (#85913, #85306): Users on single-turn direct conversations are hit with `EmbeddedAttemptSessionTakeoverError` when heartbeat lanes race with direct lanes on the same session file. One user reports it "happens on every single turn" on 2026.5.20.

4. **Startup and performance regressions**: Users on 2026.5.22 report 60-second gateway startup blocking (#85999), high CPU on WSL2 (#86201), and Windows beta taking ~4 minutes for a trivial prompt (#86599). One user described the upgrade as making the assistant "noticeably slower to respond."

5. **Configuration and approval flow friction**: Approval dialog succeeds in Control UI but exec never consumes the approval (#58479). Configuration wizard lists eligible skills but doesn't let users inspect or enable/disable them (#85015).

**Positive signals:**
- Multiple users are actively testing Codex runtime parity and providing detailed QA reports (#80319, #80936).
- The community is filing well-structured bug reports with reproductions, which helps maintainers respond quickly.
- Several high-value feature requests (cron direct exec, lane wait diagnostics, structured provider errors) have active PRs in review.

## Backlog Watch

**Long-unanswered important issues needing maintainer attention:**

- **#44925** (opened 2026-03-13, P1, diamond lobster) — Subagent completion silently lost. Despite 17 comments and five ClawSweeper labels (including `needs-maintainer-review` and `needs-product-decision`), no fix PR exists. This is one of the oldest open P1 issues.

- **#18160** (opened 2026-02-16, P2, diamond lobster, 👍9) — Direct Exec Mode for Cron Jobs. High community interest with 9 upvotes, but still awaiting product decision after 3+ months.

- **#14747** (opened 2026-02-12, P2, diamond lobster) — Configurable lane wait diagnostic threshold (hardcoded 2-second warning). A fix PR (#86676) was opened today, so this may now be addressed.

- **#60858** (opened 2026-04-04, P1, diamond lobster) — Three `hasRealConversationContent` guards silently block compaction; `session.messages` arrives empty. No fix PR visible. This causes compaction to never trigger, leading to context overflow.

- **#51947** (opened 2026-03-22, maintainer-labeled) — Proactive sends from DM route to wrong conversation when user has multiple conversations. Closed today, likely fixed.

- **#10872** (opened 2026-02-07) — iMessage reply/thread context not included in incoming messages. Closed today, no replacement indicated.

**PRs waiting for maintainer review (with "ready for maintainer look" status):**
- #86504 (fix diagnostics model stream progress)
- #86642 (structured provider error descriptors)
- #86627 (core doctor health in contribution order)
- #86709 (handle preflight compaction no-op budgets)
- #86251 (handle Bun optional import misses)
- #86270 (fix stale approval prompts in Control UI)
- #85993 (expand Chrome MCP web capabilities)

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-05-26

## 1. Daily Cross-Project Overview

Today’s activity volume varied sharply across the four tracked projects. OpenClaw dominated with 471 issues and 500 PRs updated, driven by regression fixes and large ongoing refactors (SQLite runtime migration, agent runtime internalization). NanoBot and Zeroclaw saw moderate activity (5/117 and 28/50 issues/PRs respectively) while PicoClaw had low activity (10 issues, 8 PRs). No stable releases were published by any project; only PicoClaw pushed a nightly build. Provider compatibility problems (DeepSeek-V4, Anthropic model ID changes) appeared across multiple projects, and security/sandboxing improvements were a common theme. All four projects are actively handling bugs but also carrying a tail of long-open issues awaiting maintainer attention.

## 2. Activity Comparison

| Project | Issues Updated (open/closed) | PRs Updated (open/merged+closed) | Release Status | Activity Note |
|---|---|---|---|---|
| **OpenClaw** | 471 (188 open, 283 closed) | 500 (273 open, 227 merged/closed) | No new release | Dominant activity; heavy on regression fixes and large refactors |
| **NanoBot** | 5 (2 open, 3 closed) | 117 (108 open, 9 merged/closed) | No new release | Moderate activity; focused merges on provider fixes and agent runtime |
| **Zeroclaw** | 28 (21 open, 7 closed) | 50 (35 open, 15 merged/closed) | No new release | Moderate activity; provider bugs and security/scoping improvements |
| **PicoClaw** | 10 (9 open, 1 closed) | 8 (all open) | Nightly v0.2.9-nightly | Low activity; no merges today; several new issues filed |

All activity counts are for the last 24 hours ending 2026-05-26.

## 3. OpenClaw Compared With Peers

- **Activity volume**: OpenClaw’s 471 issues and 500 PRs updated dwarf the other projects (NanoBot’s 117 PRs, Zeroclaw’s 50 PRs, PicoClaw’s 8 PRs). This reflects OpenClaw’s role as the core reference implementation with a larger contributor base.
- **Technical focus**: OpenClaw’s activity is heavily oriented toward regressions (P1 FD-leak, WebSocket hang, heartbeat blocking) and large refactors (SQLite runtime-state migration #81402, internalization of agent runtime #85341). NanoBot and Zeroclaw are more focused on specific provider integration fixes and new features; PicoClaw on small platform-specific bugs (Anthropic model IDs, Termux certificates).
- **Community surface area**: OpenClaw has the most commented issues (17 comments on #80319 and #44925) and the widest range of user-reported pain points (Telegram drops, token inflation from `doctor --fix`, session takeover errors). Zeroclaw’s community is also active but more narrowly focused on provider compatibility and security. PicoClaw’s community is smaller (max 14 comments on one issue).

## 4. Shared Technical Focus Areas

Requirements appearing across multiple projects today:

- **Provider compatibility (DeepSeek-V4)**: Both NanoBot (#3469, merged fix) and Zeroclaw (#6059, open) have active issues with DeepSeek-V4 API format, specifically around thinking mode errors. OpenClaw had #84038 about OpenAI vs Codex config migration.
- **Anthropic model ID and parameter changes**: PicoClaw filed two new issues today (#2941, #2939) about default config using a non-canonical model ID (`claude-sonnet-4.6`) and a deprecated `temperature` parameter for `claude-opus-4-7`. No similar issues appeared in other projects today, but the pattern of Anthropic API updates is a general ecosystem concern.
- **Streaming and real-time delivery**: PicoClaw has a long-open streaming config request (#2404) and an active ChatStream PR (#2853). OpenClaw has a diagnostic streaming progress fix (#86504) and multiple issues about silent message drops (Telegram #80520, heartbeat #83184). NanoBot’s PowerShell flicker (#3995) is also a streaming output quality issue.
- **Security and sandboxing**: Zeroclaw has active work on tool execution scoping (#6920, #6924) and process memory limits (#6916). OpenClaw closed a cross-user privacy leak today (#85240). PicoClaw has a long-standing `exec` tool guard false positive (#1042).
- **Developer experience / configuration friction**: OpenClaw’s `doctor --fix` silently migrating configs (#84038) and PicoClaw’s default config using invalid model IDs (#2941) both represent configuration pitfalls. Zeroclaw’s Windows build size issue (#6836) and PicoClaw’s Termux certificate issue (#2944) are platform-specific friction points.
- **Diagnostics and monitoring**: OpenClaw added a configurable lane-wait warning threshold (#86676) and structured provider error descriptors (#86642). Zeroclaw improved error logging depth (#6889, closed). NanoBot did not have similar items today.

## 5. Differentiation Analysis

- **Feature focus**: OpenClaw is the broadest, covering all agent-channels, runtime parity with Codex, and deep refactoring. NanoBot emphasizes agent runtime orchestration (sustained goals, unified apps, Dreams skills) and provider integration (DeepSeek, OpenRouter, StepFun). Zeroclaw stands out for security (Canvas iframe hardening, MCP tool scoping, process limits) and a large TUI overhaul (#6848). PicoClaw targets lightweight deployments (RISC-V, WeChat, Server酱³) and mobile/embedded use.
- **Target users**: OpenClaw serves the widest audience including advanced users testing Codex parity and contributors tackling core refactors. NanoBot appeals to developers building custom agents and skills (Dream, MCP, GitAgent). Zeroclaw targets users with strong sandboxing requirements and production deployments (tool filtering, process limits). PicoClaw aims at hobbyists and users on resource-constrained or Asian-market platforms (e.g., Sipeed hardware, WeChat).
- **Technical architecture**: OpenClaw’s refactors (SQLite runtime, agent runtime internalization) indicate a move toward stateless storage and modular runtime. NanoBot’s unified apps and Step Plan provider suggest a service-oriented approach. Zeroclaw’s plugin system (Extism to wasmtime) and TUI RPC socket transport point to an extensible desktop/server hybrid. PicoClaw’s nightly build model and small PR count suggest a slower-moving, embedded-friendly design.

## 6. Community Activity Notes

Based solely on today’s issue/PR counts and release activity:

- **Very High Activity**: OpenClaw (471 issues, 500 PRs, no release but rapid response to P1 regressions).
- **Medium Activity**: NanoBot (5 issues, 117 PRs, most merges today); Zeroclaw (28 issues, 50 PRs, active discussions on provider bugs and security).
- **Low Activity**: PicoClaw (10 issues, 8 PRs, no merges, one nightly release).

All figures are from the 24-hour period ending 2026-05-26. No stable releases were published; only PicoClaw issued a nightly build.

## 7. Evidence-Backed Observations

1. **Provider API changes are a cross-cutting pain point**: DeepSeek-V4’s thinking mode error affects both NanoBot (merged fix) and Zeroclaw (open). Anthropic’s model ID and parameter deprecations directly broke PicoClaw’s default config. OpenClaw’s `doctor --fix` issue (#84038) shows similar friction when moving between provider schemas. At least three of four projects had provider-related issues reported today.

2. **Security and sandboxing improvements are being driven by production use cases**: Zeroclaw’s multiple tool-scoping and process-limit feature requests (from user `alex-nax`) and the Canvas XSS fix (#6942) indicate deployment in sensitive environments. OpenClaw closed a cross-user privacy leak (#85240). PicoClaw’s `exec` guard false positive (#1042) shows users expecting safe-by-default but finding it too restrictive.

3. **Streaming and message delivery remain weak spots**: OpenClaw has multiple silent-delivery regression reports (Telegram #80520, heartbeat #83184, LLM idle timeout #84945). PicoClaw has a long-standing streaming config request (#2404) and an active streaming PR (#2853). NanoBot had a user-visible streaming display bug in PowerShell (#3995). No project appears to have a fully reliable streaming model.

4. **Long-open issues indicate maintainer bandwidth constraints**: OpenClaw’s P1 subagent completion loss (#44925) has been open since March 13 with no fix PR despite five labels. NanoBot’s heartbeat reasoning decoupling PR (#1443) has been open since March 2. Zeroclaw’s DeepSeek-V4 bug (#6059) dates from April 24. PicoClaw’s exec guard false positive (#1042) dates from March 4. In each case, the issue has community interest but no visible maintainer progress.

5. **Developer configuration friction is a recurring theme**: OpenClaw’s `doctor --fix` silently breaking configs (#84038), PicoClaw’s default config causing API 404 on first launch (#2941), and Zeroclaw’s `web_fetch` private host whitelist not working (#5122) all show that even basic setup can fail in unexpected ways. These issues reduce trust in out-of-the-box experiences.

No single project is emerging as a clear leader in any dimension; each has distinct strengths and ongoing problem areas.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-26

## Today's Activity Brief
In the past 24 hours, 5 issues were updated (3 closed, 2 open) and 117 pull requests saw activity (9 merged/closed, 108 still open). No new releases were published. The project saw a flurry of merges fixing provider integration bugs (DeepSeek‑v4 API errors, MiMo thinking control, OpenRouter reasoning effort), adding a dedicated Step Plan provider, and enhancing agent runtime stability (sustained goal lifecycle, tool‑call fallback). On the community side, a user reported severe terminal flicker in PowerShell during streaming, and a generic tool loop detection feature continues to gather interest.

## Releases
*No new versions or releases in this period.*

## Project Progress
Nine PRs were closed or merged today. Key changes include:

- **Agent runtime**
  – [#3999](https://github.com/HKUDS/nanobot/pull/3999) (merged): Prevents `AgentRunner` from exiting while a sustained goal (`long_task`) is active, so agents keep working until the goal is explicitly completed.
  – [#3991](https://github.com/HKUDS/nanobot/pull/3991) (merged): Unifies CLI apps and MCP presets into a single “Apps” experience with shared search, filtering and a `agent-app.v1` manifest.
  – [#3978](https://github.com/HKUDS/nanobot/pull/3978) (merged): Fixes `maxConcurrentSubagents` configuration not being passed to `SubagentManager`.

- **Provider & API fixes**
  – [#3851](https://github.com/HKUDS/nanobot/pull/3851), [#3867](https://github.com/HKUDS/nanobot/pull/3867) (merged): Wires MiMo thinking control (`reasoning_effort`) through gateway providers like OpenRouter, and fixes the injection of `reasoning.effort` parameter for thinking models.
  – [#3988](https://github.com/HKUDS/nanobot/pull/3988) (merged): Adds a `step_plan` provider for StepFun’s Step Plan subscription, using a dedicated endpoint.
  – [#4004](https://github.com/HKUDS/nanobot/pull/4004) (open): Updates Kagi web search API integration to use the current v1 endpoint.

- **Documentation**
  – [#3850](https://github.com/HKUDS/nanobot/pull/3850) (merged): Warns contributors that running `ruff format nanobot/` produces a huge unrelated diff because the codebase predates the formatter.
  – [#3866](https://github.com/HKUDS/nanobot/pull/3866) (merged): Expands the secrets configuration section with additional examples and clarifies that resolved values are never written back to disk.

- **Other notable merges**
  – [#4002](https://github.com/HKUDS/nanobot/pull/4002) (open): Fixes tool‑call fallback logic when models return only reasoning tokens with no executable content or tool calls.
  – [#4003](https://github.com/HKUDS/nanobot/pull/4003) (open): Adds `dream_managed` frontmatter to skills so Dream only modifies skills it created, protecting user‑crafted workspace skills.

## Community Hot Topics
The two issues with the most comments (2 each) are:

- **DeepSeek‑v4 API error** ([#3469](https://github.com/HKUDS/nanobot/pull/3469), closed) – User reports that when multiple thinking rounds are required, the API returns a `reasoning_content` error. This points to an underlying incompatibility with the model’s thinking mode in multi‑turn conversations.
- **PowerShell streaming display bug** ([#3995](https://github.com/HKUDS/nanobot/pull/3995), closed) – Agent’s streaming output causes excessive line breaks and terminal flickering on Windows PowerShell, making the conversation hard to follow.

Long‑standing open PRs continue to draw attention:

- **Heartbeat reasoning decoupling** ([#1443](https://github.com/HKUDS/nanobot/pull/1443), open since March 2) proposes that heartbeat agents should reason silently by default, only delivering explicit `message` tool calls to the user.
- **Terminal TUI** ([#2155](https://github.com/HKUDS/nanobot/pull/2155), open since March 17) adds a full TUI channel for local interaction.
- **Tool call cycle detection** ([#2271](https://github.com/HKUDS/nanobot/pull/2271), open since March 19) implements a `CycleDetector` to prevent infinite tool call loops.

## Bugs & Stability
- **[High] DeepSeek‑v4 reasoning token mismatch** ([#3469](https://github.com/HKUDS/nanobot/pull/3469), closed) – API returns 400 error when multiple thinking rounds occur. Root cause appears to be missing `reasoning_content` in the response structure. Fix merged in related PRs? The issue is closed; likely resolved by the MiMo/OpenRouter thinking control fixes.
- **[Medium] PowerShell streaming line‑break flicker** ([#3995](https://github.com/HKUDS/nanobot/pull/3995), closed) – Agent output on Windows PowerShell suffers severe screen flickering due to incorrect rendering of newlines per data chunk. The issue was closed, but no linked fix PR is visible in today’s data.
- **[Medium] Sustained goal exit** ([#3999](https://github.com/HKUDS/nanobot/pull/3999), merged) – Agent would stop with `stop_reason="completed"` even when a long‑running goal was still active, causing unexpected early termination. Fixed.
- **[Low] Empty tool‑call responses** ([#4002](https://github.com/HKUDS/nanobot/pull/4002), open) – Some models (e.g. Kimi 2.6 on OpenRouter) return only reasoning tokens; the fallback chain was not properly triggered. A fix is in review.
- **[Low] MaxConcurrentSubagents wiring** ([#3978](https://github.com/HKUDS/nanobot/pull/3978), merged) – User‑configured limit was ignored and always fell back to 1. Fixed.

## Feature Request Clusters
User‑requested features and related PRs this period:

1. **Tool loop detection**
   – Issue [#3986](https://github.com/HKUDS/nanobot/pull/3986) (open) requests a generic cycle/rate‑limit guard for all tools, not just web search. A companion PR [#3985](https://github.com/HKUDS/nanobot/pull/3985) (closed as *invalid*) attempted a v2.0 implementation. An earlier long‑open PR [#2271](https://github.com/HKUDS/nanobot/pull/2271) also targets the same problem. The maintainer may be deciding on the best approach.

2. **StepFun / Step Plan ASR**
   – Issue [#4000](https://github.com/HKUDS/nanobot/pull/4000) (open) requests a native StepFun ASR provider for voice transcription, since the existing Whisper endpoint is not available on the Step Plan base URL. The Step Plan provider itself was added in merged PR [#3988](https://github.com/HKUDS/nanobot/pull/3988), but transcription remains unimplemented.

3. **Weather skill as an example**
   – Issue [#3958](https://github.com/HKUDS/nanobot/pull/3958) (open) proposes moving the built‑in weather skill to an example folder to keep the core lean.

4. **Dream improvements**
   – PR [#4003](https://github.com/HKUDS/nanobot/pull/4003) (open) adds skill ownership guards to Dream.
   – PR [#3990](https://github.com/HKUDS/nanobot/pull/3990) (open) refactors Dream into a single‑phase, AgentLoop‑driven process with goal‑state lifecycle.

5. **Agent collaboration**
   – PR [#3992](https://github.com/HKUDS/nanobot/pull/3992) (open) introduces a cross‑instance message bus for multiple agent instances.

6. **Telegram webhook mode**
   – PR [#3996](https://github.com/HKUDS/nanobot/pull/3996) (open) adds an opt‑in webhook listener alongside the default polling mode.

7. **GitAgent Protocol**
   – PR [#4005](https://github.com/HKUDS/nanobot/pull/4005) (open) proposes supporting the GitAgent Protocol (`agent.yaml` + `SOUL.md`) for portable agent discovery.

## User Feedback Summary
- **API reliability**: A user hitting DeepSeek‑v4 errors (multi‑turn thinking) highlights the need for robust handling of non‑standard model response shapes.
- **Terminal UX**: The PowerShell streaming flicker report reflects a broader desire for stable and readable output in all environments.
- **Tool loop frustration**: The request for generic cycle detection (issue [#3986](https://github.com/HKUDS/nanobot/pull/3986)) shows that users frequently encounter agents stuck repeating identical tool calls, wasting tokens and time.
- **Provider coverage**: Requests for StepFun ASR and the weather skill example demonstrate that users want both wider provider compatibility and clearer separation of built‑in vs. example skills.
- **Satisfaction signals**: The high number of open PRs (117 updated today) and active issue reporting indicate a healthy, engaged community, though the density of long‑open PRs suggests maintainer bandwidth may be stretched.

## Backlog Watch
Several important PRs have been open for months with no recent maintainer action:

- **Heartbeat reasoning decoupling** ([#1443](https://github.com/HKUDS/nanobot/pull/1443), since March 2) – Would reduce noise by making heartbeat agents silent by default. No maintainer comment since initial submission.
- **Terminal TUI** ([#2155](https://github.com/HKUDS/nanobot/pull/2155), since March 17) – Adds a full terminal UI channel. Still open with no merge activity.
- **Tool call cycle detection** ([#2271](https://github.com/HKUDS/nanobot/pull/2271), since March 19) – Implements a `CycleDetector`. Given the new issue [#3986](https://github.com/HKUDS/nanobot/pull/3986) requesting the same feature, coordination may be needed.

Newer items that may need attention:

- **Weather skill as example** ([#3958](https://github.com/HKUDS/nanobot/pull

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest — 2026-05-26

## 1. Today's Activity Brief
In the last 24 hours, the project saw updates to **28 issues** (21 open/active, 7 closed) and **50 pull requests** (35 open, 15 merged/closed). No new releases were published. The most active areas were **high‑priority provider‑compatibility bugs** (DeepSeek‑V4, Gemini 400, zai‑cn), **security and sandbox improvements** (Canvas iframe hardening, process‑memory limits, tool scoping), and a large **zerocode TUI integration PR** (#6848) that remains in a “DO NOT MERGE” state. Several bugs were closed, including a Bubblewrap sandbox failure on Fedora 43 and a Telegram image‑message stall.

## 2. Releases
None.

## 3. Project Progress
Of the 15 merged/closed PRs today, the following are known from the visible data:
- **#6939** — `fix(canvas): drop allow-same-origin, switch to srcdoc, sanitize SVG (GHSA-f385-f6h2-3gqj)` – closed in favor of a private‑fork PR.
- **#6940** and **#6941** — both NO‑OPs (closed without changes).
Additionally, **7 issues were closed** today, including:
- **#6878** `[Bug]: Bubblewrap fails on Fedora 43` – S2, closed with a fix.
- **#6889** `[Bug]: reqwest errors in provider only show top-level message` – S3, closed.
- **#6836** `[Bug]: setup.bat --minimal produces ~26 MB build` – S2, closed.
- **#6912** `Telegram image messages can stall reply‑intent precheck` – S2, closed.
- **#6315** `Document configuration of WhatsApp and Signal` – closed.
- **#6751** `fix(ci): pr-title workflow has never run` – closed.
- **#5722** `Default shell sandbox configuration blocks ... Python skill patterns` – closed (S1, resolved).

Key open PRs advancing features today:
- **#6920** `feat(agent): enforce allowed_tools / denied_tools at execution time` – defense‑in‑depth for MCP tools.
- **#6924** `feat(skills): add builtin and composio tool kinds for skill-scoped elevation` – enables skills to use blocked tools temporarily.
- **#6907** `feat(memory): introduce MemoryStrategy trait and DefaultMemoryStrategy` – decouples memory lifecycle policy.
- **#6933** `feat(gateway): preserve websocket steering transcript` – improves session persistence.

## 4. Community Hot Topics
The most active issues and PRs by comment count and reactions are:

**Issues:**
- **#6059** `[Bug]: Incompatible with DeepSeek-V4 API format` – 12 comments, 4 👍. Users unable to use DeepSeek‑V4‑Pro/Flash due to a “thinking mode” error. The underlying need is **full API compatibility** with a widely used provider, blocked for over a month.
- **#4710** `[Feature]: A better LOGO of Zeroclaw` – 10 comments, 2 👍. Community members offering design proposals; stuck on author action.
- **#5722** `Default shell sandbox configuration blocks all realistic Python skill patterns` – 6 comments (now closed). User Jason Perlow developing a FINOS‑compliant portfolio analysis skill; the sandbox was too restrictive.

**Pull Requests:**
- **#6848** `feat: introduce zerocode TUI, RPC socket transport, DenyWithEdit approval, and beta-2 integration` – a massive PR (XL, 43 labels) still open and marked “DO NOT MERGE”. It represents a major UX overhaul; discussion focused on known issues (delegates missing, provider fallback, context counter reliability).
- **#6907** `feat(memory): introduce MemoryStrategy trait` – received reviews and comments (undefined count), tackling a core architectural decoupling.
- **#6942** `fix(web): tighten Canvas iframe sandbox to prevent token theft via XSS` – security fix for CVE‑like vulnerability GHSA‑f385‑f6h2‑3gqj.

## 5. Bugs & Stability
High‑priority bugs reported or active today, ranked by severity:

| Issue | Severity | Description | Fix PR / Status |
|---|---|---|---|
| **#6059** (OPEN) | S2 – degraded | DeepSeek‑V4‑Pro and Flash API calls fail due to “thinking mode” error. | No fix PR visible; status `in-progress`. |
| **#6302** (OPEN) | S2 – degraded | Gemini 400 error: assistant tool_call sent before first user turn. | No fix PR visible; status `in-progress`. |
| **#5636** (OPEN) | S1 – broken | zai‑cn provider returns error 1214 with `glm-5-turbo` after context trim. | No fix PR visible; status `in-progress`. |
| **#5122** (OPEN) | S2 – degraded | `web_fetch allowed_private_hosts` useless for domains resolving to private IPs. | No fix PR visible; status `accepted`. |
| **#6923** (OPEN) | S2 – degraded | OpenAI Codex OAuth works, but config path falls back to API key at runtime. | No fix PR yet. |
| **#6884** (OPEN) | S2 – degraded | `web_fetch max_response_size=0` reads only 1 byte. | Fix PR #6884 open (`fix(web_fetch): treat max_response_size=0 as unlimited`). |
| **#6935** (OPEN) | S3 – minor | System streaming missing `RouterModelProvider::stream_chat_with_system` override. | Fix PR #6935 open. |
| **#6942** (OPEN) | S2 – degraded | Canvas iframe sandbox allows token theft via XSS (GHSA‑f385‑f6h2‑3gqj). | Fix PR #6942 open. |
| **#6836** (CLOSED) | S2 – degraded | Windows minimal build 26 MB instead of ~6 MB. | Closed, fix merged. |
| **#6878** (CLOSED) | S2 – degraded | Bubblewrap failure on Fedora 43 due to missing `/lib64`. | Closed. |
| **#6889** (CLOSED) | S3 – minor | reqwest errors hide root cause in provider logs. | Closed. |
| **#6912** (CLOSED) | S2 – degraded | Telegram image messages stall reply‑intent precheck. | Closed. |

Notable: Of the 7 closed issues, 5 were bugs (including S1 #5722). No new crashes or regressions were reported today beyond the S2 items above.

## 6. Feature Request Clusters
User‑requested enhancements visible in today’s data, along with related open PRs:

- **Security & Sandboxing (high activity)**
  - `allowed_tools/denied_tools` enforcement (#6914, PR #6920)
  - Process‑memory limits on shell subprocess (#6916)
  - Skill‑scoped tool activation (#6915, PR #6924)
  - Composio action‑scope filter (#6917)
- **Platform & Integration**
  - Improve Nix flake to expose package and module (#6906)
  - Add Arcee AI as a model provider (#6456)
  - Computer‑use (screen interaction) support (#6909)
- **UX & Documentation**
  - Better logo (#4710)
  - Improved skills support and UX (#6253)
  - Document minimum browser requirements and add unsupported‑browser banner (#6921, PR #6936)
  - Document attachment path validation boundary (#6937)
  - Document configuration of WhatsApp and Signal (#6315, closed)
- **Plugin & Architecture**
  - Unified “everything is a plugin” catalog (#6489)
  - Deconflict plugin system goals (Extism → wasmtime) (#6943)
- **Gateway & Persistence**
  - Shared reply‑message constructor (#6883)
  - Persist gateway WebSocket sessions as full transcripts (#6932, PR #6933)

No strong signal that any particular cluster is about to ship; the security scoping and TUI (PR #6848) are the most actively developed.

## 7. User Feedback Summary
Real pains expressed by users:

- **Provider incompatibility** is the dominant frustration: DeepSeek‑V4 (SSDGADsss), Gemini 400 (dmnkhorvath), zai‑cn error 1214 (CrazyMed), and OpenAI Codex OAuth fallback (vrurg) all block basic usage. Several issues are over a month old.
- **Sandbox and security friction**: perlowja reported that the default shell sandbox cannot run realistic Python skills (closed today). lovemonkey257 hit a Bubblewrap crash on Fedora 43 (closed). alex‑nax filed three concurrent feature requests for tool filtering and process limits, indicating pressure from production deployments.
- **Windows build size**: rockswang found the minimal build 4× larger than documented (closed).
- **Missing documentation**: robbito could not configure WhatsApp without a Meta Business account; wariuccio found the Nix flake unusable for packaging.
- **Positive signals**: Several bugs were closed quickly (Bubblewrap, Telegram stall, reqwest error logging), suggesting maintainer responsiveness. Users such as perlowja and alex‑nax are contributing detailed issue reports and PRs, indicating an engaged technical community.

## 8. Backlog Watch
Items that have been open for an extended time or are blocked awaiting maintainer review:

| Issue / PR | Since | Status | Notes |
|---|---|---|---|
| **#6059** DeepSeek-V4 bug | 2026-04-24 | `in-progress` (no fix PR) | 12 comments, P1 – likely a blocker for users relying on DeepSeek. |
| **#5636** zai-cn provider error (S1) | 2026-04-11 | `in-progress` | Broken functionality, no visible progress. |
| **#5122** web_fetch private host whitelist useless | 2026-03-29 | `accepted` | No fix PR; domain‑to‑IP resolution issue. |
| **#

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-26

## Today’s Activity Brief

Over the past 24 hours, 10 issues were updated (9 open/active, 1 closed) and 8 pull requests were updated (all open, none merged or closed). A new nightly release (`v0.2.9-nightly.20260526.ab6d3946`) was published, though it is marked as potentially unstable. The most active discussion centered on an old `exec` tool guard bug (#1042, 14 comments) and a newly closed streaming feature request (#1950). Several fresh issues were filed today (three about Anthropic model compatibility, one about X509 certificates in Termux, one about the WeChat channel with GLM-5, and one about default config errors), while two new PRs were opened to fix the Anthropic model ID format (#2942) and the deprecated `temperature` parameter for `claude-opus-4-7` (#2940).

## Releases

- **Nightly build (v0.2.9-nightly.20260526.ab6d3946)**
  Published as an automated nightly build. No official changelog beyond the full diff against v0.2.9.
  **⚠️ Unstable** – use only for testing.
  [Release page](https://github.com/sipeed/picoclaw/releases/tag/v0.2.9-nightly.20260526.ab6d3946)

## Project Progress

No pull requests were merged or closed today. All eight updated PRs remain open:

- **ChatStream support for pico channel** (#2853) – adds real-time token streaming to WebSocket clients.
- **MCP per-request dynamic headers** (#2696) – allows channels to forward HTTP headers to MCP servers.
- **Server酱³ Bot channel** (#2893) – new polling/webhook channel for the SC3 notification service.
- **Symlink path validation fix on macOS** (#2890) – resolves `t.TempDir()` symlink issues.
- **Token usage reduction for skill catalog** (#2781) – avoids resending the full skill list on every turn.
- **PID identity verification** (#2813) – validates that the PID file actually belongs to a picoclaw gateway.
- **Default config model ID fix** (#2942) – changes `claude-sonnet-4.6` to canonical `claude-sonnet-4-6`.
- **Omit `temperature` for claude-opus-4-7** (#2940) – stops sending the deprecated parameter.

## Community Hot Topics

- **#1042** – `exec` tool `guardCommand` false positive for commands with no file paths (e.g. `curl` with URL containing `..`). **14 comments, 2 👍**. The issue has been open since March and remains active.
  [Link](https://github.com/sipeed/picoclaw/issues/1042)

- **#1950** – Feature request for streaming output in Web Chat. Closed today after 10 comments. The enhancement was marked as “Nice-to-Have” and aligned with the roadmap.
  [Link](https://github.com/sipeed/picoclaw/issues/1950)

- **#2404** – Request to add `streaming: true` config flag for HTTP streaming to LLM backends. 8 comments, 1 👍. No related PR or maintainer response yet.
  [Link](https://github.com/sipeed/picoclaw/issues/2404)

- **#2720** – High-priority bug: singleton PID check does not verify process identity, causing crash loops when a stale PID is reused by systemd-resolved. 6 comments (including discussion on the proposed fix in #2813).
  [Link](https://github.com/sipeed/picoclaw/issues/2720)

## Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | #2720 | Stale PID reuse → gateway fails to start | Yes, #2813 (open) |
| **High** | #2941 | Default config seeds `claude-sonnet-4.6` (dots) → API 404 | Yes, #2942 (open) |
| **High** | #2939 | `claude-opus-4-7` fails with `temperature is deprecated` | Yes, #2940 (open) |
| **Medium** | #2943 | WeChat channel sending images → GLM-5 API error 1210 | No |
| **Medium** | #2944 | Termux/termux-chroot: X509 certificate errors | Workaround mentioned |
| **Medium** | #2887 | `.deb` on RISC-V not functional with OpenAI model | No |
| **Medium** | #2796 | History view shows only last user message per conversation | No |
| **Low** | #1042 | `exec` tool guardCommand blocks safe commands with `..` in URL | No |

## Feature Request Clusters

- **Streaming / Real-Time Output**
  - #1950 (closed) – Web Chat streaming
  - #2404 – Config option for streaming HTTP requests to LLM backends
  - PR #2853 – ChatStream support for pico channel (still open)

- **New Channel Integrations**
  - #2893 (PR) – Server酱³ Bot channel (polling/webhook)

- **Extensibility / MCP**
  - #2696 (PR) – Per-request dynamic headers from channel context to MCP servers

- **Utility Enhancements**
  - #2781 (PR) – Reduce token usage by caching skill catalog across turns

## User Feedback Summary

- **Authentication / Configuration friction**: Two issues filed today (#2941, #2939) highlight that default configuration and hardcoded parameters break immediately for certain Anthropic models. Users must manually fix the model ID and remove deprecated parameters.
- **Platform-specific deployment pains**: Reports from Termux (X509 certs) and RISC-V (`.deb` package non-functional) show that cross-platform testing gaps exist.
- **Tool safety false positives**: The `exec` tool guard has been a long-standing pain point (issue #1042, since March) – legitimate commands like `curl` with URL containing `..` are blocked.
- **History display bug (#2796)**: Users relying on conversation history find it broken – only the last user message is saved, making multi-turn reviews impossible.
- **Chinese user reports**: Two issues in Chinese (WeChat + GLM-5 error, history bug) show active use in Asia with specific channel/provider combinations.

## Backlog Watch

- **#1042** – `exec` tool guard bug (open since 2026-03-04, 14 comments, no fix PR yet). Stale tag absent but no maintainer action visible.
- **#2404** – Streaming config request (open since 2026-04-07, stale tag, 8 comments). No PR or maintainer reply.
- **#2887** – RISC-V `.deb` non-functional (open since 2026-05-17, stale tag, 5 comments). No maintainer response.
- **#2796** – History display bug (open since 2026-05-07, 4 comments). No fix PR.
- **#2696** – MCP dynamic headers PR (open since 2026-04-28, stale tag). No merge progress.
- **#2781** – Skill catalog token reduction PR (open since 2026-05-06, stale tag). No merge progress.
- **#2853** – ChatStream PR (open since 2026-05-11, stale tag). No merge progress.
- **#2893** – Server酱³ Bot PR (open since 2026-05-18, stale tag). No merge progress.

</details>