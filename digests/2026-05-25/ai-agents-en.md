# OpenClaw Ecosystem Digest 2026-05-25

> Issues: 500 | PRs: 500 | Projects covered: 4 | Generated: 2026-05-25 02:37 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

## OpenClaw Project Digest - 2026-05-25

### 1. Today's Activity Brief
In the last 24 hours, 500 issues and 500 pull requests were updated across the OpenClaw repository. Two beta releases were published (v2026.5.24-beta.1 and beta.2), bringing iMessage thumb-approval reactions and multiple gateway performance improvements. The most active development area is the **Channel Broker** initiative, with eight stacked PRs spanning phases 1 through 4 that aim to consolidate channel plugin semantics. Meanwhile, 122 PRs were merged or closed today, and 37 issues were resolved.

### 2. Releases
Two beta releases were published today, both dated 2026.5.24:

- **v2026.5.24-beta.2** — Adds iMessage "thumb-approval" reactions: `👍` resolves an approval as `allow-once`, `👎` resolves as `deny`, with the explicit-approver allowlist read from `channels.imessage.allowFrom`. Manual `/approve <id> allow-always` remains available.

- **v2026.5.24-beta.1** — Gateway performance improvements: reuse process-stable channel catalog reads, avoid repeated bundled-channel boundary checks, and rotate gateway watch CPU profiles so benchmark runs do not accumulate unbounded artifacts. Also caches stable install-record, channel-catalog, and bundled-channel lookups.

No breaking changes or migration notes were included in the release descriptions.

### 3. Project Progress
Today 122 PRs were merged or closed (out of 500 updated). Among the most significant open PRs that advanced toward merge:

- **Channel Broker Phase 1–4** ([#86096](https://github.com/openclaw/openclaw/pull/86096), [#86153](https://github.com/openclaw/openclaw/pull/86153), [#86154](https://github.com/openclaw/openclaw/pull/86154), [#86156](https://github.com/openclaw/openclaw/pull/86156), [#86157](https://github.com/openclaw/openclaw/pull/86157), [#86164](https://github.com/openclaw/openclaw/pull/86164), [#86165](https://github.com/openclaw/openclaw/pull/86165)) — a large stacked series from @100yenadmin consolidating Telegram/Discord/Slack/WhatsApp/Signal/iMessage plugin maintenance behind a single Channel Broker contract.

- **Internalize OpenClaw agent runtime** ([#85341](https://github.com/openclaw/openclaw/pull/85341)) — removes the old Pi-shaped architecture and re-integrates agent execution, model routing, and plugin surfaces as OpenClaw-owned core.

- **Warm provider auth off main thread** ([#86281](https://github.com/openclaw/openclaw/pull/86281)) — moves gateway provider-auth prewarm into a worker thread to avoid monopolizing the main Node event loop during startup.

- **Fix stale approval prompts in Control UI** ([#86270](https://github.com/openclaw/openclaw/pull/86270)) — treats stale resolve responses as terminal cleanup signals, dismissing prompts when an approval is resolved from another client.

- **Fix Codex preflight compaction auth routing** ([#86292](https://github.com/openclaw/openclaw/pull/86292)) — preserves persisted session runtime route during budget preflight compaction for Codex-backed sessions.

### 4. Community Hot Topics
| Issue/PR | Comments | 👍 | Key Need |
|----------|----------|---|----------|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot Apps | 106 | 77 | Cross-platform desktop support, requested since Jan |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) Prebuilt Android APK releases | 25 | 2 | Compiled APK downloads, submitted via AI assistant QING |
| [#68596](https://github.com/openclaw/openclaw/issues/68596) Configurable streaming watchdog timeout | 13 | 8 | Models with extended reasoning trigger false watchdog resets |
| [#12602](https://github.com/openclaw/openclaw/issues/12602) Slack Block Kit support | 13 | 0 | Richer channel message formatting for agent outputs |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) Masked Secrets | 13 | 4 | Agents should use, not see, API keys; prompt injection defense |
| [#58450](https://github.com/openclaw/openclaw/issues/58450) Agent promises follow-up but doesn't act | 13 | 2 | Agent turns end with empty promises; no background action started |
| [#59330](https://github.com/openclaw/openclaw/issues/59330) Control UI Raw mode disabled since 2026.3.31 | 7 | 12 | Regression in config editor; raw mode permanently blocked |

The thread on Linux/Windows desktop apps remains the single most-engaged issue (106 comments, 77 reactions), reflecting sustained demand for broader OS support.

### 5. Bugs & Stability
Several bugs reported or updated today, ranked by impact:

- **Codex app-server client closes mid-turn** ([#86214](https://github.com/openclaw/openclaw/issues/86214), P1) — image/tool requests fail mid-flight with `stopped/aborted` state in the UI, especially with large `logs_2.sqlite`. Fix PR not yet identified.

- **Telegram direct gets generic /new fallback after successful tool turn** ([#86184](https://github.com/openclaw/openclaw/issues/86184), P2) — on 2026.5.22, completed turns produce fallback message instead of final reply. Fix PR not yet identified.

- **Matrix thread session key case-normalization** ([#75670](https://github.com/openclaw/openclaw/issues/75670), P2) — lowercasing event IDs creates duplicate sessions, causing thread delivery failures. Fix PR not yet identified.

- **Codex app-server startup retries exhausted** ([#83959](https://github.com/openclaw/openclaw/issues/83959), P1) — startup retries can exhaust before replacement server is ready. Fix PR not yet identified.

- **Ollama embeddings fail when proxy enabled** ([#81249](https://github.com/openclaw/openclaw/issues/81249), closed today) — SSRF defenses ignore `NO_PROXY`. Now resolved and closed.

- **Google Chat space messages silently ignored** ([#58514](https://github.com/openclaw/openclaw/issues/58514), P1) — DMs work but space/group messages are dropped. Fix PR not yet identified.

Several fix PRs are open for related issues: [#86216](https://github.com/openclaw/openclaw/pull/86216) recovers Codex binding after stale preflight compaction (fixes #86211), [#85958](https://github.com/openclaw/openclaw/pull/85958) fails Codex compaction at the Codex boundary, and [#86089](https://github.com/openclaw/openclaw/pull/86089) delivers restart recovery replies.

### 6. Feature Request Clusters
Today's data shows several distinct clusters:

- **Channel/Message Delivery** — The Channel Broker series of eight PRs (#86096, #86153–#86157, #86164–#86165) addresses long-standing cross-channel inconsistencies. Separate requests target WhatsApp backfill ([#50093](https://github.com/openclaw/openclaw/issues/50093)) and forced reply to originating Telegram/Discord channels ([#54531](https://github.com/openclaw/openclaw/issues/54531)).

- **Security & Secrets Management** — Multiple feature requests ask for stronger credential isolation: masked secrets ([#10659](https://github.com/openclaw/openclaw/issues/10659)), native secrets manager integration ([#13610](https://github.com/openclaw/openclaw/issues/13610)), filesystem sandboxing config ([#7722](https://github.com/openclaw/openclaw/issues/7722)), denylist for exec-approvals ([#6615](https://github.com/openclaw/openclaw/issues/6615)), and capability-based skill permissions ([#12678](https://github.com/openclaw/openclaw/issues/12678)).

- **Model Provider & Fallback** — Users want dynamic model discovery ([#10687](https://github.com/openclaw/openclaw/issues/10687)), configurable streaming watchdog ([#68596](https://github.com/openclaw/openclaw/issues/68596)), context-length-triggered model fallback ([#9986](https://github.com/openclaw/openclaw/issues/9986)), and provider fallback by failure class ([#47910](https://github.com/openclaw/openclaw/issues/47910)).

- **Platform/Deployment** — Prebuilt Android APK ([#9443](https://github.com/openclaw/openclaw/issues/9443)), comprehensive AWS deployment guide ([#13597](https://github.com/openclaw/openclaw/issues/13597)), and backup/restore utility ([#13616](https://github.com/openclaw/openclaw/issues/13616)) remain requested.

### 7. User Feedback Summary
Real user pain points visible in today's data:

- **Silent failures are a recurring theme.** Users report the agent failing to send responses back to Telegram ([#86184](https://github.com/openclaw/openclaw/issues/86184)), Google Chat silently dropping space messages ([#58514](https://github.com/openclaw/openclaw/issues/58514)), and the Control UI Raw mode silently disabled ([#59330](https://github.com/openclaw/openclaw/issues/59330)).

- **Streaming watchdog false positives** frustrate users of reasoning models like kimi-k2.5 and DeepSeek-R1. The 30-second threshold triggers even during normal extended thinking ([#68596](https://github.com/openclaw/openclaw/issues/68596)).

- **No precompiled Android APK** forces users to build from source or skip the companion app entirely ([#9443](https://github.com/openclaw/openclaw/issues/9443)).

- **Telegram HTML parse_mode** silently truncates responses containing angle-bracket tags like `<think>` ([#49104](https://github.com/openclaw/openclaw/issues/49104)), a regression that impacts structured model outputs.

- **New Xiaomi MiMo Token Plan users** report the provider does not connect cleanly, with no clear validation error ([#86169](https://github.com/openclaw/openclaw/issues/86169)).

### 8. Backlog Watch
Issues that have been open for extended periods without maintainer attention:

- **#75 Linux/Windows Clawdbot Apps** (created Jan 1, 2026; 106 comments, 77 👍) — oldest high-engagement issue, tagged `help wanted` and `needs-maintainer-review`. No PR or recent maintainer comment visible.

- **#9443 Prebuilt Android APK** (created Feb 5; 25 comments) — requested via AI assistant; tagged `needs-product-decision` and `needs-security-review`.

- **#6615 Denylist for exec-approvals** (created Feb 1; 7 👍) — complements existing allowlist; tagged `needs-maintainer-review` and `needs-security-review`.

- **#10659 Masked Secrets** (created Feb 6; 13 comments, 4 👍) — tagged `P1` with `impact:security` across three categories; still awaiting maintainer review.

- **#58450 Agent promises follow-up without action** (created Mar 31; 13 comments) — tagged `needs-live-repro` and `needs-product-decision`; no linked fix PR.

- **#59031 (not fully shown)** and several other `P1` issues tagged `needs-product-decision` remain in review limbo without assigned owners or linked PRs.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-05-25

## 1. Daily Cross-Project Overview
Today’s activity across the four tracked projects was dominated by OpenClaw (500 issues and 500 PRs updated, two beta releases), reflecting its role as the core reference implementation. NanoBot and ZeroClaw showed moderate activity focused on targeted bug fixes and infrastructure refactoring, while PicoClaw continued steady progress on agent collaboration and platform-specific features. A recurring theme across projects was work on channel delivery reliability, provider compatibility, and security/safety mechanisms, though implementation approaches differed significantly.

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | Release Today | Notable Activity |
|---------|---------------|-------------|---------------|------------------|
| **OpenClaw** | 500 issues | 500 PRs | ✅ v2026.5.24-beta.1 & beta.2 | Massive volume; Channel Broker series (8 stacked PRs); 122 PRs merged; 37 issues resolved |
| **NanoBot** | 5 issues (3 open, 2 closed) | 18 PRs (11 open, 7 merged) | ❌ | Focused activity: tool call ID fix merged, spawn temperature added, MCP preset setup merged |
| **ZeroClaw** | 50 issues (3 closed in top-30) | 50 PRs (5 merged/closed) | ❌ | High activity; multi-database session backend PR, channel allowlist migration chain, provider bug fixes |
| **PicoClaw** | 4 issues (2 open, 2 closed) | 10 PRs (8 open, 2 merged) | ✅ v0.2.9-nightly | Agent collaboration bus PR opened; cron fix merged; documentation expansions |

## 3. OpenClaw Compared With Peers

**Activity volume:** OpenClaw’s 500 issues/500 PRs updated dwarfs the other projects by an order of magnitude or more. This is consistent with its role as the reference implementation with the largest contributor base.

**Technical focus:** OpenClaw’s Channel Broker initiative (consolidating Telegram/Discord/Slack/WhatsApp/Signal/iMessage behind a single contract) represents a more ambitious architectural unification than what peers are doing. ZeroClaw has a 24-PR chain for migrating hand-rolled allowlist checks to shared aspects, but at a smaller scale. PicoClaw’s agent collaboration bus is similarly ambitious but at an earlier stage.

**Community surface area:** OpenClaw has the most engaged community on specific long-standing issues (e.g., #75 Linux/Windows desktop apps: 106 comments, 77 reactions). ZeroClaw shows active RFC discussion (#6808 Work Lanes, 6 comments) but lower per-issue engagement. NanoBot and PicoClaw have minimal community discussion volume today, with activity concentrated on technical PRs.

**Release cadence:** OpenClaw and PicoClaw both published builds today; NanoBot and ZeroClaw did not. OpenClaw’s beta releases include concrete end-user features (iMessage thumb-approval reactions), while PicoClaw’s nightly build is purely an automated artifact.

## 4. Shared Technical Focus Areas

**Provider compatibility and model reliability:**
- **OpenClaw:** Ollama embeddings SSRF fix closed; streaming watchdog timeout config requested (#68596)
- **NanoBot:** OpenAI API type config merged (#3974); tool call ID mismatch with GLM-4.7/Kimi 2.6 fixed (#3984)
- **ZeroClaw:** Reasoning field preservation fix merged (#6606); Gemini history serializer invariant bug open (#6302); Ollama tool call failure open (#5962)
- **PicoClaw:** LM Studio integration request on Android (#28) — ongoing community pain point

**Channel message delivery reliability:**
- **OpenClaw:** Channel Broker consolidation (8 PRs), Telegram direct fallback bug (#86184), Google Chat space messages silently dropped (#58514)
- **ZeroClaw:** Cron output not routed to channels (#6647), Slack bot_token env var not supported (#6844), `show_tool_calls` regression (#6856)
- **PicoClaw:** Steering-chain final replies incorrectly edited placeholders (#2839, fixed today)

**Security and tool access control:**
- **OpenClaw:** Masked secrets requested (#10659), denylist for exec-approvals (#6615), capability-based skill permissions (#12678)
- **NanoBot:** Loop detection / rate limiting requested (#3986), tool call ID mismatch affecting tool result linkage
- **ZeroClaw:** MCP `tool_filter_groups` no-op for real MCP tools (#6699), OTP-gated actions silently accept unknown names (#5810)
- **PicoClaw:** `exec` tool `guardCommand` false positive (#1042), per-agent tool policy feature merged (#2837)

## 5. Differentiation Analysis

**Feature focus:**
- **OpenClaw** is driving toward architectural unification (Channel Broker, internalized agent runtime) while addressing a broad surface of end-user features (iMessage reactions, cross-platform desktop demand)
- **NanoBot** is optimizing developer workflows: benchmark-driven compaction prompt optimization, sub-agent temperature parameter, MCP preset setup as first-class WebUI capability
- **ZeroClaw** is heavily invested in provider correctness and stability: reasoning field threading, Gemini history serialization, Ollama tool call recovery; also expanding channel diversity (Mastodon, Twilio SMS, Rocket.Chat, Zulip)
- **PicoClaw** is building multi-agent infrastructure (collaboration bus) and platform-specific deployment (Termux guide for Android, WeChat multi-account, Traditional Chinese localization)

**Target users:**
- **OpenClaw** and **ZeroClaw** target advanced users and deployers — complex architectural changes, broad platform support demands
- **NanoBot** targets developers and tool builders — benchmark tools, provider configuration flexibility, MCP setup presets
- **PicoClaw** targets Chinese-speaking mobile users and edge device deployers — WeChat, Android/Termux, zh-TW localization, LM Studio connectivity

**Technical architecture:**
- **OpenClaw** and **ZeroClaw** are larger codebases dealing with more complex state management (Codex sessions, channel catalog caches, multi-database backends)
- **NanoBot** and **PicoClaw** are lighter, with more focused feature additions (spawn temperature, MCP presets, agent collaboration bus)
- PicoClaw’s Go-based implementation (inferred from goroutine/panic/recover references) contrasts with OpenClaw’s Node.js-based gateway and ZeroClaw’s Rust-based approach

## 6. Community Activity Notes

**High activity tier:** **OpenClaw** — 500 issues + 500 PRs updated, two beta releases, 122 PRs merged, active community discussion on long-standing issues (desktop apps, Android APK, streaming watchdog)

**Moderate activity tier:** **ZeroClaw** — 50 issues + 50 PRs, 5 PRs merged, active RFC discussion (Work Lanes), several critical bugs open

**Low activity tier:** **NanoBot** — 5 issues + 18 PRs, 7 PRs merged, minimal community discussion; **PicoClaw** — 4 issues + 10 PRs, 2 PRs merged, two long-standing community issues (LM Studio, exec guard) remain open

## 7. Evidence-Backed Observations

1. **Provider compatibility remains a cross-project pain point.** Today alone: OpenClaw fixed Ollama embeddings SSRF and has an unresolved Xiaomi MiMo Token Plan issue; NanoBot fixed tool call ID mismatches with alternative OpenAI-compatible providers; ZeroClaw fixed reasoning field preservation and has open bugs for Gemini serialization and Ollama tool calls; PicoClaw has an open LM Studio integration request. Each project is independently solving similar integration challenges with different provider ecosystems.

2. **Silent failures are a recurring pattern across projects.** OpenClaw has agent responses not delivered to Telegram and Google Chat messages silently dropped; ZeroClaw has cron output invisible in channels and slack bot token silently unsupported; PicoClaw had cron commands silently failing (fixed today). This suggests a systemic challenge in error propagation from backend to user-facing channels.

3. **Channel and agent collaboration infrastructure is active across three of four projects.** OpenClaw’s Channel Broker (8 stacked PRs) and ZeroClaw’s channel allowlist migration chain (24 PRs) both refactor existing channel semantics rather than adding new channels. PicoClaw’s agent collaboration bus is building cross-agent messaging. This suggests maturing ecosystems where consolidation and reliability are prioritized over new feature breadth.

4. **Security and tool access control is a growing concern, but implementation maturity varies.** OpenClaw is still fielding feature requests for masked secrets and denylists (both awaiting maintainer attention); ZeroClaw has bugs where tool filters are no-ops and security config silently fails; PicoClaw’s exec guard false positive has been open since March. Only NanoBot has concrete tool loop detection in a PR (#3985). No project appears to have these mechanisms fully production-tested.

5. **Community pain points around deployment and platform support persist without resolution.** OpenClaw’s #75 (Linux/Windows desktop apps, since January, 106 comments) and #9443 (prebuilt Android APK, since February) remain open. PicoClaw’s #28 (LM Studio Easy Connect, since February, 20 comments) has no maintainer response. These are the highest-engagement issues across their respective projects that lack resolution or clear ownership.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest – 2026-05-25

## 1. Today's Activity Brief
In the past 24 hours, NanoBot saw 5 issues updated (3 open, 2 closed) and 18 pull requests updated (11 open, 7 merged/closed). No new releases were published. Key merged work includes a fix for tool call/result ID mismatches with OpenAI‑compatible APIs, a new `spawn` sub‑agent temperature parameter, WebUI slash command improvements, and an MCP preset setup feature. Several open PRs target loop detection, agent collaboration, and Dream system refactoring.

## 2. Releases
*No new releases were recorded for this date.*

## 3. Project Progress (Merged/Closed PRs)
Seven PRs were merged or closed today:

- **#3920** – [feat(benchmark): add compaction benchmark + optimize consolidator prompt](https://github.com/HKUDS/nanobot/pull/3920) – Optimized context compaction prompt based on systematic benchmarks; `decision_rationale` found to be most impactful factor.
- **#3974** – [feat(providers): add OpenAI API type and extra body configuration](https://github.com/HKUDS/nanobot/pull/3974) – Added `providers.openai.apiType` (auto/chat_completions/responses) and support for `extraBody` fields.
- **#1678** – [fix(tools): use temp files instead of pipes for shell output on Windows](https://github.com/HKUDS/nanobot/pull/1678) – Resolves hang on Windows when shell commands spawn long‑lived child processes.
- **#3987** – [feat(webui): improve slash command actions](https://github.com/HKUDS/nanobot/pull/3987) – Streamlined composer slash palette; added localized copy across 6 locales.
- **#3984** – [fix(provider): preserve OpenAI-compatible tool call ids](https://github.com/HKUDS/nanobot/pull/3984) – Fixes tool call/result ID mismatch for providers like GLM‑4.7 and Kimi 2.6 (closes #3980).
- **#3979** – [feat(mcp): add preset setup and capability mentions](https://github.com/HKUDS/nanobot/pull/3979) – Made MCP setup a first‑class WebUI capability with presets, testing, hot reload, and `@` mentions.
- **#3975** – [feat(spawn): allow per‑subagent sampling temperature](https://github.com/HKUDS/nanobot/pull/3975) – Adds optional `temperature` parameter to `spawn` tool (closes #3969).

## 4. Community Hot Topics
With zero comments and zero reactions across all listed issues, activity remains development‑focused rather than community discussion. The most substantive items are:

- **#3986** – [Feature Request: 通用工具级循环检测与速率限制护栏](https://github.com/HKUDS/nanobot/pull/3985) (open enhancement issue) describes real user frustration with LLMs repeatedly calling tools with identical parameters (e.g., `grep` 3+ times, `list_dir` 5 times in 3 seconds). A corresponding open PR **#3985** provides a concrete implementation (“loop guard v2.0”).
- **#3973** – [Dream System: Hunger Problem & Lack of Real-time Learning](https://github.com/HKUDS/nanobot/issues/3973) (open enhancement) details limitations of the Dream self‑improvement mechanism, citing single input source (`history.jsonl`) and lack of real‑time learning. No maintainer response yet.

## 5. Bugs & Stability
One confirmed bug was fixed today:

- **#3980** (closed) – **Tool call ID mismatch** with OpenAI‑compatible APIs (antchat‑proxied GLM‑4.7, Kimi 2.6). **Severity: Medium** – could break workflows relying on tool result linkage. Fix merged in PR #3984.

Two open bug‑like issues:

- **#3993** (open) – **Anthropic content block type requirement** – bare dicts from tool returns cause failures in `AnthropicProvider::_convert_user_content`. Proposed fix: coerce to text block. **Severity: Medium** – affects all Anthropic users.
- **#3978** (open PR) – **maxConcurrentSubagents config not propagated** – hardcoded default of 1 overrides user config. Patch ready in PR #3978. **Severity: Low** – configuration bug, workaround available.

## 6. Feature Request Clusters
Several enhancement requests share common themes:

- **Loop detection / rate limiting**: Issue #3986 and PR #3985 (“loop guard v2.0”) target repeated tool call patterns. No relation to existing `repeated_external_lookup_error` (web‑only).
- **Dream system improvements**: Issue #3973 (hunger problem, real‑time learning) and open PR #3990 (refactor two‑phase consolidation into single phase) both address Dream’s self‑improvement pipeline.
- **Sub‑agent configurability**: Issue #3969 (spawn temperature) was resolved by PR #3975. Open PR #3992 extends this to cross‑agent messaging over a shared bus.
- **MCP / tooling**: PR #3979 (merged) adds MCP preset setup. Open PR #3988 adds a StepFun Step Plan provider. Open PR #3991 adds HyperFrames CLI plugin.

## 7. User Feedback Summary
Real user pain points expressed today:

- **LLM tool loops**: Users report models repeatedly calling tools with unchanged parameters (grep, list_dir, read_file) wasting time and API calls. They request universal detection beyond web search.
- **Dream system stagnation**: The Dream feature relies solely on `history.jsonl` and doesn’t learn in real time, limiting its value for ongoing conversations.
- **Temperature control for sub‑agents**: Users want per‑task temperature variation (precise, creative, analytical) when spawning multiple sub‑agents, now addressed.
- **Anthropic compatibility**: Users hitting `type` declaration errors in Anthropic provider block usage.

No explicit satisfaction signals or complaints about project direction were recorded.

## 8. Backlog Watch
All issues in today’s data are recent (created ≤3 days ago). The following open items may need maintainer attention due to lack of response:

- **#3973** – Dream System issues (created 2026-05-23, no maintainer comment) — describes a fundamental limitation; related PR #3990 exists but only refactors consolidation.
- **#3993** – Anthropic type requirement (created 2026-05-25, zero comments) — clear bug for Anthropic provider users.
- **#3988** – Step Plan provider PR (open, no activity beyond author) — awaiting review.

No older, neglected issues appear in the 24‑hour window.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-25

## 1. Today's Activity Brief
The project saw high activity with **50 issues** and **50 pull requests** updated in the last 24 hours. Of those, **3 issues were closed** (2 open, 1 closed in the top-30 view) and **5 PRs were merged/closed** (3 closed PRs visible in the top-20 list). No new releases were published. The bulk of activity centers on bug fixes across providers, channels, and runtime stability, alongside a large multi-database session backend PR and a batch of channel allowlist migration PRs.

## 2. Releases
No new releases today.

## 3. Project Progress
The following PRs were merged or closed in the last 24 hours (based on the top-20 list):
- **#6866** (closed) — `feat(channels): support selective channel builds and filter channel list by compiled features` ([PR](https://github.com/zeroclaw-labs/zeroclaw/pull/6866)).
  Adds `default-channels` feature bundle and allows targeted builds (e.g., `--no-default-features --features agent-runtime,channel-telegram`).
- **#6606** (closed) — `fix(providers): preserve compatible reasoning field` ([PR](https://github.com/zeroclaw-labs/zeroclaw/pull/6606)).
  Ensures reasoning field names (`reasoning_content` vs `reasoning`) are correctly threaded through streaming and history for compatible providers.
- **#6712** (closed) — `fix(provider): replace expect_err panic with propagated error in Codex stream cleanup` ([PR](https://github.com/zeroclaw-labs/zeroclaw/pull/6712)).
  Turns a potential panic into a recoverable provider error.

Additionally, one issue was closed:
- **#5630** (closed) — `[Feature]: Native extended thinking support for Anthropic provider` ([issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5630)).
  The feature request was resolved (likely via the reasoning field fix in #6606, though not explicitly linked).

## 4. Community Hot Topics
The most discussed issues today (by comment count) are:

- **#6808** — RFC: Work Lanes, Board Automation, and Label Cleanup (6 comments)
  [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)
  A governance RFC proposing lightweight PR lanes and board automation to reduce manual routing overhead for maintainers. The RFC has sparked discussion on labeling conventions and workflow automation.

- **#6699** — `tool_filter_groups` is a no-op for real MCP tools (6 comments)
  [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6699)
  Two distinct bugs: prefix mismatch in the filter gate and no integration with deferred loading. The high priority and detailed reproduction have attracted attention from contributors.

- **#6856** — `show_tool_calls` missing from `[channel]` (5 comments)
  [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6856)
  Schema v3 dropped the ability to display tool call details in channel responses. Users are voicing frustration over the missing backward compatibility.

- **#6647** — Cron job output not routed to configured channels (4 comments)
  [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6647)
  Workflow-blocking issue: cron results only appear in the web dashboard, not in Telegram or other channels.

PRs with the most discussion are harder to assess because comment counts are not displayed in the extracted data; however, the largest structural PR is **#6893** (multi-database session backends) and the channel migration chain (#6793, #6778, #6638) is also notable.

## 5. Bugs & Stability
Several high-severity bugs were reported or discussed today:

**Critical / Workflow-blocking (S1 / priority:p1):**
- **#6647** — Cron job output not routed to channels ([issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6647)).
  No output delivered to Telegram; only visible in web dashboard.
- **#6699** — MCP `tool_filter_groups` is a no-op ([issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6699)).
  Two bugs: filter prefix mismatch and no deferred_loading integration. Fix PRs are not yet visible.
- **#6302** — Gemini 400 due to history serializer invariant violation ([issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6302)).
  Assistant tool_call emitted before first user turn. Status: in-progress.
- **#6721** — `tool_search` not in `default_auto_approve` causes silent hang with webhook ([issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6721)).
  Hangs 120s then auto-denies.
- **#6844** — Slack `bot_token` cannot be supplied via environment variable ([issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6844)).
  Duplicate of #6237; fix commit exists but issue remains open.
- **#6841** — `vision_provider` silently ignored in multimodal pipeline ([issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6841)).
  Inbound images are routed to fallback instead of configured vision provider.

**High severity (risk: high):**
- **#6472** — Gateway cannot use Postgres memory backend ([issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6472)).
  Panic due to nested Tokio runtime.
- **#6254** — WASM plugin install and runtime scan paths diverge ([issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6254)).
  Plugins invisible to agent.
- **#5903** — MCP stdio child processes leak on daemon with heartbeat ([issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5903)).
  One orphan per tick.
- **#5810** — `security.otp.gated_actions` silently accepts unknown action names ([issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5810)).
  Security config can appear to protect actions it does not.

Fix PRs are visible for some issues: e.g., **#6897** fixes cron delivery failure persistence (risk:high), **#6882** fixes compressor media markers before truncation, **#6905** fixes channel runtime reload defaults being context-scoped. However, many high-severity bugs lack linked fix PRs.

## 6. Feature Request Clusters
Multiple user feature requests revolve around **new communication channels**:
- **#6423** — Mastodon (ActivityPub) channel ([issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6423))
- **#6427** — Twilio SMS channel ([issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6427))
- **#6435** — Rocket.Chat channel ([issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6435))
- **#6437** — Zulip channel ([issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6437))

All are marked as priority:p2 and status:in-progress, suggesting active development.

Other feature clusters:
- **Provider-scoped model fallback chains** — #4647 ([issue](https://github.com/zeroclaw-labs/zeroclaw/issues/4647)), requesting fallback configuration per provider rather than globally.
- **Shell command hooks** — #3696 ([issue](https://github.com/zeroclaw-labs/zeroclaw/issues/3696)), pre/post message hooks for memory and logging.
- **Bubblewrap sandbox configurability** — #5127 ([issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5127)), writable paths and network access.
- **Tool-calling for memory consolidation** — #4760 ([issue](https://github.com/zeroclaw-labs/zeroclaw/issues/4760)), replacing prompt-constrained JSON.

No corresponding feature PRs are merged today, but the channel migration PRs (#6793, #6778, #6638) are refactoring existing channel behavior rather than adding new channels.

## 7. User Feedback Summary
Users report several concrete pain points:
- **Cron output isolation**: Results from scheduled jobs are only visible in web dashboard, not delivered to Telegram or other channels (#6647). This blocks automated workflows.
- **Slack bot token configuration**: Cannot be set via environment variable, forcing hardcoded secrets in config (#6844).
- **Ollama provider failure**: Tool calls fail after error, blocking further messages in the same session (#5962).
- **Vision provider ignored**: Multimodal pipeline silently falls back to default provider even when `vision_provider` is explicitly configured (#6841).
- **MCP tool filter ineffective**: `tool_filter_groups` does not work for real MCP tools, frustrating users who want to restrict tool access (#6699).
- **Missing `show_tool_calls` in channel**: Regression from schema v3, users want the v2 behavior back (#6856).
- **Diagnostics lacking detail**: Provider error messages collapse to one line, hiding root cause (DNS, timeout, TLS) (#6901 — fix PR open).

Positive signals: Users are contributing via PRs (e.g., #6833 adds Jina AI as web_search provider, #5120 fixes memory clear on append-only backend). The community is actively involved in migration of hand-rolled allowlist checks to shared aspects (24-PR chain).

## 8. Backlog Watch
Several important issues appear to lack maintainer attention or resolution:
- **#5962** (Ollama provider tool call failure) — open since April 21, status:in-progress but no linked fix PR. [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5962)
- **#5122** (web_fetch `allowed_private_hosts` useless for domains resolving to private IPs) — open since March 29, status:accepted, no fix PR. [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5122)
- **#4721** (zeroclaw logs to stdout instead of stderr) — open since March 26, status:accepted, no PR. [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/4721)
- **#5810** (silently accepts unknown OTP-gated action names) — open since April 16, status:accepted, no fix PR. [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5810)
- **#6722** (MemoryConfig.rerank_enabled / rerank_threshold scaffolded but no consumer) — open since May 16, status:accepted, no code consuming these config fields. [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6722)

Several PRs are flagged as `needs-author-action`, meaning the author has not responded to maintainer requests: #5120, #6607, #6606 (closed now but had that label earlier), #6590, #6793, #6778, #6638. These PRs risk stalling without author follow-up.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-25

## Today's Activity Brief
Over the past 24 hours, 4 issues were updated (2 open, 2 closed) and 10 pull requests were updated (8 open, 2 merged/closed). A new nightly build (`v0.2.9-nightly`) was released. Activity focused on agent collaboration infrastructure, bug fixes for the cron and tool safety systems, and documentation expansions (Termux guide, Traditional Chinese localization). Two long-standing issues (LM Studio integration, `exec` tool guard false positives) remain active with ongoing discussion.

## Releases
- **nightly (v0.2.9-nightly.20260525.ab6d3946)** — Automated nightly build, may be unstable.
  [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)
  No breaking changes or migration notes documented.

## Project Progress
**Merged/closed PRs today:**
- [#2938](https://github.com/sipeed/picoclaw/pull/2938) — `fix(cron): add missing action arg for command job execution` (merged). Silently failing cron command jobs fixed by adding the required `"action": "run"` argument to `ExecTool.Execute()` calls.
- [#2759](https://github.com/sipeed/picoclaw/pull/2759) — `fix(seahorse): retrieval tools to current session` (merged). Scopes `short_grep` and `short_expand` tools to the active session by default, preventing accidental cross‑session message expansion.

**Closed issues today:**
- [#2839](https://github.com/sipeed/picoclaw/issues/2839) — `[BUG] send steering-chain final replies as new messages instead of editing tool-feedback placeholders` (closed). Channel rendering issue resolved.
- [#2837](https://github.com/sipeed/picoclaw/issues/2837) — `[Feature] support allow/deny/glob tool policies in AGENT.md frontmatter` (closed). Feature implemented; per‑agent capability filtering.

## Community Hot Topics
- **[#28](https://github.com/sipeed/picoclaw/issues/28) — Feat Request: LM Studio Easy Connect** (open, 20 comments, 2 👍). User requests a seamless way to connect to LM Studio from Android. Discussion indicates many users face similar configuration hurdles.
- **[#1042](https://github.com/sipeed/picoclaw/issues/1042) — `[BUG] exec工具的guardCommand方法问题`** (open, 13 comments, 2 👍). False positive safety guard blocks legitimate commands like `curl "wttr.in/Beijing?T"` because the regex extracts a relative path that appears to escape the workspace.
- **[#2937](https://github.com/sipeed/picoclaw/pull/2937) — `Feat/agent collaboration`** (open, just opened). Large PR introducing an internal Agent Collaboration Bus with per‑agent mailboxes, collaboration threads, and permission awareness. Gaining early attention as a foundational feature.

## Bugs & Stability
| Issue/PR | Description | Severity | Status |
|----------|-------------|----------|--------|
| [#1042](https://github.com/sipeed/picoclaw/issues/1042) | `exec` tool `guardCommand` false positive blocks legal commands (e.g., curl without file paths) | **High** – hinders usability of exec tool for many skills | Open, no fix PR yet |
| [#2839](https://github.com/sipeed/picoclaw/issues/2839) | Steering‑chain final replies edited placeholder messages wrongly | **Medium** – visual glitch; closed today | Fixed |
| [#2938](https://github.com/sipeed/picoclaw/pull/2938) | Cron command jobs silently fail due to missing action arg (regression) | **High** – silent failure of scheduled tasks | Merged today |
| [#2906](https://github.com/sipeed/picoclaw/pull/2906) | Message bus backpressure handling and health visibility (bounded waits, drop stats) | **Medium** – reliability improvement under load | Open, in review |
| [#2904](https://github.com/sipeed/picoclaw/pull/2904) | Agent loop reload and panic cleanup stability (synchronous defer/recover) | **Medium** – prevents goroutine leaks and panics | Open, in review |

## Feature Request Clusters
- **LM Studio integration** ([#28](https://github.com/sipeed/picoclaw/issues/28)) — User request for simplified connection setup on Android; no related PR yet.
- **Multi‑agent tool policies** ([#2837](https://github.com/sipeed/picoclaw/issues/2837), closed) — Per‑agent `allow`/`deny`/`glob` policies in AGENT.md frontmatter; now merged.
- **Agent collaboration** ([#2937](https://github.com/sipeed/picoclaw/pull/2937)) — New internal bus for durable inter‑agent messaging; open for review.
- **WeChat multi‑account** ([#2883](https://github.com/sipeed/picoclaw/pull/2883)) — Dynamic detection of `weixin_*` config keys; open, needs merge.
- **Android Termux guide** ([#2902](https://github.com/sipeed/picoclaw/pull/2902)) — Documentation for running on ARM64 Android devices; open.
- **Traditional Chinese (zh‑TW) i18n** ([#2935](https://github.com/sipeed/picoclaw/pull/2935)) — Full documentation and frontend locale; open.
- **Skill binary dependency filtering** ([#2936](https://github.com/sipeed/picoclaw/pull/2936)) — Skip skills whose required binaries are missing on `PATH` (fixes [#2351](https://github.com/sipeed/picoclaw/issues/2351)); open.

## User Feedback Summary
- **Pain points:** Connecting LM Studio remains a barrier for Android users ([#28](https://github.com/sipeed/picoclaw/issues/28)). False safety guard in `exec` tool blocks legitimate commands, causing frustration ([#1042](https://github.com/sipeed/picoclaw/issues/1042)). Cron commands silently failing with no error feedback ([#2938](https://github.com/sipeed/picoclaw/pull/2938), now fixed). WhatsApp native mode (`use_native: true`) not configurable ([#2934](https://github.com/sipeed/picoclaw/pull/2934), fix PR open).
- **Use cases:** Multi‑agent workflows (collaboration bus), mobile deployment (Termux guide), WeChat integration for Chinese users, and localization for Traditional Chinese speakers.
- **Satisfaction indicators:** Quick turnaround on cron regression (filed and merged same day). Steering‑chain bug and tool policy feature both closed.

## Backlog Watch
- **[#28](https://github.com/sipeed/picoclaw/issues/28) — LM Studio Easy Connect** (open since Feb 11, 2026). Stale, 20 comments but no maintainer response or assignee. High community interest.
- **[#1042](https://github.com/sipeed/picoclaw/issues/1042) — `exec` guardCommand false positive** (open since Mar 4, 2026). Stale, 13 comments. No fix PR exists; maintainer attention needed.
- **[#2883](https://github.com/sipeed/picoclaw/pull/2883) — WeChat multi‑account support** (open since May 16, no merge yet). Awaiting review.
- **[#2906](https://github.com/sipeed/picoclaw/pull/2906) — Backpressure handling** and **[#2904](https://github.com/sipeed/picoclaw/pull/2904) — Agent reload stability** are both open with no recent review activity.

</details>