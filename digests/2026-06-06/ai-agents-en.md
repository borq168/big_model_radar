# OpenClaw Ecosystem Digest 2026-06-06

> Issues: 468 | PRs: 500 | Projects covered: 4 | Generated: 2026-06-06 02:15 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-06-06

## Today's Activity Brief
In the last 24 hours, 468 issues were updated (340 open, 128 closed) and 500 pull requests were updated (373 open, 127 merged/closed). No new releases were cut. The project remains highly active with several critical regression fixes merged (voice-call stream tracking, Anthropic stream start event deferral, memory index identity) while new regressions continue to surface, particularly around OpenAI ChatGPT Responses transport, Matrix channel dispatch, and memory-core dreaming on the latest release. User feedback clusters around session state stability, provider auth consistency, and tool schema overhead.

## Releases
No new versions were published today. The last known releases remain 2026.5.28 and 2026.6.1, both of which are referenced in several new bug reports.

## Project Progress
Of the 127 merged/closed PRs today, notable fixes include:

- **Voice-call**: #90607 (closed) fixes Twilio stream tracking; #90620 (open) preserves live streams in stale reaper.
- **Memory**: #90748 (open) resolves adapter default model display in `memory status`.
- **Anthropic streaming**: #90697 (open) defers stream start event until after `message_start` to prevent extended thinking sessions from breaking on restart or cache expiry.
- **OpenAI audio auth**: #90793 (open) routes audio transcription auth through the correct API contract instead of OAuth profiles.
- **MCP tool result coercion**: #90728 (open) fixes non-text/image content blocks from MCP tools causing agent crashes.
- **Codex native hook relay**: #90805 (open) fails closed when PreToolUse delivery is missing.
- **CLI update dry-run**: #88683 (open) rejects unpublished npm targets consistently.
- **macOS node-mode reconnect**: #90736 (open) caches TLS pinning session to prevent false reconnection notifications.
- **Telegram TTS churn**: #83988 (open) defers text settlement in final-mode TTS to eliminate message flicker.

Several older regressions were also closed, including high CPU regression (#76562), Mattermost slash commands 503 (#68113), and Telegram reaction context not triggering (#64752).

## Community Hot Topics
Most active issues (by comment count, all updated within 24h):

- [[OPEN] #22438](https://github.com/openclaw/openclaw/issues/22438) — **Tiered bootstrap file loading** (17 comments). Users request progressive context control to reduce token waste. 0 👍.
- [[OPEN] #62505](https://github.com/openclaw/openclaw/issues/62505) — **[Bug] Coding Agent never completes anything** (14 comments, 1 👍). Regression from 2026.4.2; agent only produces vague status updates. Marked P1, stale, diamond lobster.
- [[CLOSED] #76562](https://github.com/openclaw/openclaw/issues/76562) — **High CPU, RPC latency after upgrade** (13 comments, 5 👍). Gateway pinned at 100% CPU after 2026.4.29/2026.5.2. Closed.
- [[OPEN] #78308](https://github.com/openclaw/openclaw/issues/78308) — **Channel-mediated approval for MCP tool calls** (12 comments, 1 👍). Allows MCP servers to reuse existing `/approve` pipeline for state-mutating tool calls.
- [[OPEN] #90083](https://github.com/openclaw/openclaw/issues/90083) — **[Bug] OpenAI ChatGPT Responses transport fails with invalid_provider_content_type** (12 comments, 3 👍). P1 regression in 2026.6.1 affecting gpt-5.4/5.5.
- [[OPEN] #88929](https://github.com/openclaw/openclaw/issues/88929) — **Feishu streaming card truncated** (10 comments, 1 👍). Typewriter effect abnormal and final content reduced to last character.
- [[OPEN] #63829](https://github.com/openclaw/openclaw/issues/63829) — **Per-agent memory-wiki vault configuration** (9 comments, 9 👍). Popular request to allow isolated knowledge wikis per agent in multi-agent setups.

Most active PRs (by comment count not shown, but notable by size and rating):

- #90328 (M, diamond lobster) — Expose model picker agent runtimes in WebUI.
- #90423 (M, platinum hermit) — TTS summarization sanitization to prevent scaffolding leak.
- #90607 (XS, diamond lobster, closed) — Twilio stream tracking fix.
- #90790 (S, platinum hermit) — Preserve completed Codex replies after client close.
- #90799 (M, platinum hermit) — Handle Claude CLI synthetic placeholders.

## Bugs & Stability
**Critical (P1) regressions reported today:**

- [#90083](https://github.com/openclaw/openclaw/issues/90083) — OpenAI Responses transport fails with `invalid_provider_content_type` for gpt-5.4/5.5 after upgrade to 2026.6.1. 12 comments, 3 👍. No fix PR yet.
- [#90325](https://github.com/openclaw/openclaw/issues/90325) — Matrix channel dispatch crashes with `TypeError: Cannot read properties of undefined (reading 'run')` on 2026.6.1. 5 comments, 2 👍. No fix PR.
- [#90466](https://github.com/openclaw/openclaw/issues/90466) — memory-core dreaming on 2026.6.1 reads `.jsonl.deleted.*` paths and writes fallback despite valid prose. 5 comments, 1 👍. No fix PR.
- [#87756](https://github.com/openclaw/openclaw/issues/87756) — Prompt-launched Lobster workflow hangs on `/tools/invoke`; curl-launched works. 7 comments, 1 👍. No fix PR.
- [#87017](https://github.com/openclaw/openclaw/issues/87017) (not in top list but referenced) — Codex OAuth refresh wedge (#86215 is similar, P1, 7 comments). No fix PR yet.
- [#85030](https://github.com/openclaw/openclaw/issues/85030) — MCP tools not injected into subagent sessions despite allowlist configuration. 7 comments, 3 👍. Fix PR #90723 (not in top list) may be related.
- [#64810](https://github.com/openclaw/openclaw/issues/64810) — Heartbeat interrupts and swallows in-progress replies in Telegram topic sessions. 8 comments, 1 👍. No fix PR.
- [#62505](https://github.com/openclaw/openclaw/issues/62505) — Coding Agent never completes. 14 comments, 1 👍. Stale, no fix PR.

**High-impact P2 bugs with fix PRs available:**

- [#90711](https://github.com/openclaw/openclaw/issues/90711) — `launchd plist` hardcodes stderr to /dev/null, hiding all gateway diagnostics. 6 comments. Fix PR #90710? Not listed, but related to #90728? No direct PR.
- [#88929](https://github.com/openclaw/openclaw/issues/88929) — Feishu streaming card truncated. No fix PR.
- [#77012](https://github.com/openclaw/openclaw/issues/77012) — WebChat session transcript overwritten every turn (5.2 regression). 5 comments. No fix PR.
- [#72031](https://github.com/openclaw/openclaw/issues/72031) — `image` tool fails for Bedrock with `auth mode: aws-sdk`. 6 comments. Fix PR #72092 (open) allows aws-sdk auth mode.
- [#64267](https://github.com/openclaw/openclaw/issues/64267) — Agent internal thinking exposed to user. 5 comments, 2 👍. No fix PR.

**Fixed/closed today:** High CPU regression (#76562), Mattermost slash commands (#68113), Telegram reactions (#64752), voice messages Matrix (#78016), Playwright in isolated sessions (#70493), `apply_patch` tool policy (#45269).

## Feature Request Clusters
- **Memory/Context Management**: Multiple requests for per-agent memory isolation (#63829, 9 👍), tiered bootstrap loading (#22438, 0 👍), guarantee last N raw messages (#58818), session max duration/tokens (#64463). No related PRs yet.
- **UI/UX Improvements**: Hide/collapse Workspace rail in WebChat (#90246, 2 👍); CJK IME composition fix PR #86036 (open). Model picker runtime labels PR #90328.
- **Security/Approvals**: Channel-mediated approval for MCP calls (#78308); exec() sandbox isolation inspired by Claude Code source (#58730); Discord role-based access lists (#69748).
- **Tool Schema Optimization**: Reduce tool schema token overhead (#14785, 0 👍, 7 comments). No active PR.
- **Model Fallback & Auth**: Provider-wide quota exhaustion not triggering fallbacks (#85103); Codex OAuth refresh wedge (#86215). PR #72092 addresses Bedrock auth mode for image/audio.

## User Feedback Summary
- **Upgrade pain**: Several users report regressions after moving from 2026.4.x to 2026.5.x/2026.6.1 — coding agent stops working (#62505), Mattermost commands fail (#68113), high CPU (#76562), cron state wiped (#90072), launchd stderr hidden (#90711).
- **Session state instability**: Telegram topic sessions interrupted by heartbeats (#64810), WebChat transcript overwritten (#77012), approvals lost on restart (#64664).
- **Platform-specific issues**: Android onboarding stuck when offline (#61005), Feishu streaming truncated (#88929), Matrix crash (#90325).
- **Wasted tokens**: Bootstrap files loaded every session (#22438), tool schema overhead (#14785), system prompt byte differences cause cache invalidation (#63030).
- **Model provider friction**: OpenAI Responses transport broken (#90083), OpenAI audio auth incorrectly uses OAuth (#90793 fix), model fallback chain not triggered (#85103).
- **Positive engagement**: Users request features with high 👍 counts — per-agent memory wiki (9 👍), focus on practical multi-agent improvements.

## Backlog Watch
Issues and PRs that appear to need maintainer attention (based on labels like `needs-maintainer-review`, `stale`, or lack of response):

- [#58730](https://github.com/openclaw/openclaw/issues/58730) (P1, stale, needs maintainer review, needs product decision) — exec() sandbox isolation feature request inspired by Claude Code source leak. 5 comments, 1 👍. Last updated 2026-04-01.
- [#63905](https://github.com/openclaw/openclaw/issues/63905) (P2, stale, needs-maintainer-review) — Slack inbound attachments in container sandbox fail. Last updated 2026-04-09.
- [#64664](https://github.com/openclaw/openclaw/issues/64664) (P2, stale) — Approvals lost on gateway restart. Last updated 2026-04-11.
- [#64696](https://github.com/openclaw/openclaw/issues/64696) (P2, stale) — memory-wiki bridge import mishandles relative links. Last updated 2026-04-11.
- [#63030](https://github.com/openclaw/openclaw/issues/63030) (P2, stale) — System prompt assembled differently across code paths causing cache invalidation. Last updated 2026-04-08.
- [#61009](https://github.com/openclaw/openclaw/issues/61009) (P2, stale) — docs/tools/exec docs contradict runtime behavior. Last updated 2026-04-04.
- PR [#65198](https://github.com/openclaw/openclaw/pull/65198) (P3, stale, needs real-behavior-proof) — test for string-backed non-streaming assistant replies. Last updated 2026-04-12.
- PR [#81208](https://github.com/openclaw/openclaw/pull/81208) (P2, stale, needs proof) — Amazon Bedrock Mantle implicit discovery gate. Last updated 2026-05-12.

These items have not seen recent maintainer activity and may pose ongoing risks or unresolved feature gaps.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-06-06

## 1. Daily Cross-Project Overview

OpenClaw dominated the day with roughly 968 total issue/PR updates, while ZeroClaw (100 updates), NanoBot (39), and PicoClaw (28) had progressively lower volumes. OpenClaw saw critical regressions in OpenAI Responses transport, Matrix dispatch, and memory-core dreaming, alongside many fixes. ZeroClaw advanced multiple large feature PRs (new channels, providers, observability) and fixed several runtime bugs. NanoBot addressed high-severity SDK shutdown crashes and message loss, while also merging provider and channel improvements. PicoClaw cut a nightly release and merged rapid fixes for OneBot, safety assertions, and documentation, but a new token-drain bug appeared.

## 2. Activity Comparison

| Project    | Issues Updated (open/closed) | PRs Updated (open/merged) | Release Today | Activity Note |
|------------|------------------------------|---------------------------|---------------|---------------|
| OpenClaw   | 468 (340 open, 128 closed)   | 500 (373 open, 127 merged) | None          | Very high; dominated by regressions and fixes; huge community surface area. |
| ZeroClaw   | 50 (44 open, 6 closed)       | 50 (36 open, 14 merged)    | None          | Medium-high; large feature additions (channels, providers, observability) alongside bugfixes. |
| NanoBot    | 11 (6 open, 5 closed)        | 28 (17 open, 11 merged)    | None          | Low-medium; focused on SDK stability, provider integration, and UI improvements. |
| PicoClaw   | 6 (2 open, 4 closed)         | 22 (2 open, 20 merged)     | Nightly build | Low; many small merges for OneBot, security, docs; new open bug on token drain. |

*Note: OpenClaw’s “issues updated” includes many not listed in its top-20 sample; counts are from the digest’s stated totals.*

## 3. OpenClaw Compared With Peers

OpenClaw’s activity volume (968 combined updates) is roughly **10× that of ZeroClaw** and **25× NanoBot**. Its community engagement is also far larger: its most active issue had 17 comments and 5 👍, while other projects’ top issues had 15 comments (ZeroClaw) or 9 👍 (NanoBot). Technically, OpenClaw exhibits a high regression rate after recent releases (2026.5/2026.6), with many P1 bugs affecting core functionality (voice-call, transport, coding agent). Peers like ZeroClaw and NanoBot show fewer regressions but still have high-severity bugs (SDK crash in NanoBot, UTF-8 panics in ZeroClaw). OpenClaw’s broader focus includes deep integrations (Codex, Anthropic stream deferrals, MCP tool coercion), while peers concentrate on channel expansion (ZeroClaw: Twilio, Mastodon, etc.) or desktop/SDK stability (NanoBot, PicoClaw).

## 4. Shared Technical Focus Areas

- **Provider additions and authentication**: OpenClaw fixed OpenAI audio auth routing (#90793). NanoBot added Exa web search (#4213) and Volcengine image generation (#4196). ZeroClaw added 7 OpenAI-compatible providers (#7260) and `extra_body` support (#7163). PicoClaw added MiMo common models (#2915).
- **Security hardening**: OpenClaw has an open issue for `exec()` sandbox isolation (#58730). ZeroClaw has RFCs for pluggable security provider (#7142) and OIDC auth (#7141). PicoClaw merged CSRF protection, path traversal validation, and security headers (#2900).
- **Channel/platform expansion**: ZeroClaw prominently added SMS (Twilio, Plivo, Telnyx, Sinch, Vonage), social (Mastodon, Rocket.Chat, Zulip, Lemmy), and Twitch chat via PRs #7265, #7270, #7275. NanoBot merged Weixin/Telegram DM pairing (#4197). PicoClaw fixed OneBot group reply (#3009).
- **Observability and monitoring**: OpenClaw has no direct observability feature in today’s digest. ZeroClaw advanced a structured observability PR (#7233) with OTel correlation. NanoBot added desktop notifications for streamed replies (#4210). PicoClaw lacks observability improvements today.
- **Memory and session management**: OpenClaw has high-👍 requests for per-agent memory isolation (#63829) and tiered bootstrap (#22438). NanoBot has a request for smarter consolidator (#4212) and subagent mailbox (#4205). ZeroClaw has session tombstoning for `session/kill` (#7258). PicoClaw fixed `/context` display (#2985).

## 5. Differentiation Analysis

- **OpenClaw** is the core reference project with the widest scope: it handles multiple model providers, voice-call, MCP tools, Codex integration, and has the largest community and regression volume. Its feature requests often involve deep architectural changes (per-agent memory, tiered bootstrap). It appears targeted at advanced users and integrators.
- **ZeroClaw** is aggressively adding new channels and providers through schema-v3 slots, and has a formal RFC process for governance (work lanes, output routing). Its feature set leans toward extensibility and enterprise-like features (pluggable security, OIDC, A2A agent discovery). User feedback highlights onboarding friction and output routing limitations.
- **NanoBot** is more focused on SDK stability, desktop experience, and lightweight agent deployment. Its feature PRs (fork-from-here, mailbox protocol, shell polish) suggest a developer-oriented product. It has the smallest community of the three, but maintainers appear responsive (e.g., DM pairing fix merged quickly).
- **PicoClaw** is the smallest and most focused: rapid bugfixing, security hardening, and a nightly release cadence. Its user base includes multi-channel bot operators and skill developers. The new token-drain bug (#3012) is the only high-severity open issue. It differentiates with resource-constrained targets (Edge, FreeBSD) and minimal dependencies.

## 6. Community Activity Notes

**High activity tier** — OpenClaw (468 issues + 500 PRs).
**Medium activity tier** — ZeroClaw (50 issues + 50 PRs).
**Low activity tier** — NanoBot (11 issues + 28 PRs) and PicoClaw (6 issues + 22 PRs).

Only PicoClaw published a release (nightly build) today. NanoBot and ZeroClaw had no releases. OpenClaw had no releases, but its last releases (2026.5.28, 2026.6.1) are cited in many bug reports.

## 7. Evidence-Backed Observations

1. **Provider expansion is the most common cross-project theme**: three of four projects added new provider integrations or fixed provider auth today. ZeroClaw added 7 providers, NanoBot added Exa, PicoClaw added MiMo models, OpenClaw fixed OpenAI audio auth routing. No project ignored provider-related work.

2. **Regression severity varies by project maturity**: OpenClaw, the most active and widely used, reported multiple P1 regressions (OpenAI transport, Matrix crash, memory-core dreaming). ZeroClaw’s regressions were less severe (UTF-8 panics, config redaction gaps). NanoBot and PicoClaw each had one high-severity open bug (SDK crash, token drain, respectively) but fewer total reported regressions.

3. **Security hardening is emerging across projects**: OpenClaw’s exec sandbox request, ZeroClaw’s pluggable security/OIDC RFCs, and PicoClaw’s merged CSRF/security headers all point to growing attention on safe execution and authentication. This is not yet a coordinated trend but appears in three of four digests today.

4. **PicoClaw’s nightly release cadence contrasts with no releases from peers**: While OpenClaw, NanoBot, and ZeroClaw had no releases today, PicoClaw published a nightly build. This suggests a faster iteration cycle for bugfixes, possibly at the cost of stability (the nightly is explicitly unstable).

5. **Governance and formal RFCs are unique to ZeroClaw**: ZeroClaw had two RFCs in discussion today (work lanes, output routing) and multiple accepted-RFC features in pipeline. No other project in today’s data showed comparable structured governance. OpenClaw features are driven by community issues and PRs with less formal proposal tracking.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-06

## Today's Activity Brief

In the last 24 hours, NanoBot saw 11 issues updated (6 open, 5 closed) and 28 pull requests updated (17 open, 11 merged/closed). No new releases were published. Key maintenance included fixes for the SDK MCP shutdown crash, orphan tool result message loss, and Weixin/Telegram DM pairing. The community submitted several feature PRs, including a new Exa web search provider, DingTalk group allowlist, mailbox-backed subagent results, and a desktop shell polish. Two long-standing CI workflow PRs remain open.

## Releases

None — no new versions were cut today.

## Project Progress

**Merged/closed PRs (notable):**
- **#4210** (closed) — Fix desktop restart token and replay gaps; refreshes WebUI tokens after native engine restart and persists WebSocket transcript events so replays do not lose stream output. Also adds desktop notifications for streamed replies.
- **#3968** (closed) — Adds `/skill` built-in slash command to list enabled skills, addressing the missing command report in #3959.
- **#4197** (closed) — Fixes DM pairing for Weixin and Telegram channels; routes denied senders through the shared pairing flow while preserving early side-effect guards.

Other closed items likely include minor bug fixes and configuration tweaks but were not shown in the top-20 list.

## Community Hot Topics

- **#2573** (closed, 4 comments, 9 👍) — “Github Copilot登录失败”: Users reported a regression after switching from litellm to the OpenAI library. The `Authorization header` is badly formatted during OAuth device flow. The issue was closed, indicating a fix was applied or a workaround found. High reaction count suggests many users encountered this.
- **#3959** (closed, 4 comments) — `/skill list disabled skills`: Users found that disabled skills still appear in the `/skill` command output. The PR #3968 introduced the proper skill listing command, but the underlying bug (disabled skills not filtered) may still need a separate fix.

Other issues and PRs have few or no comments, indicating lighter community participation.

## Bugs & Stability

| Severity | Bug (Issue) | Description | Fix PR |
|----------|-------------|-------------|--------|
| High | #4211 (open) | SDK leaves stdio MCP open → "exit cancel scope in a different task" at shutdown. Blocks clean embedding via `Nanobot.from_config()`. | #4216 (open) |
| High | #4203 (open) | `find_legal_message_start` discards all messages when a user message is followed by an orphan tool result. Causes unpredictable session truncation. | #4215 (open) |
| Medium | #4200 (closed) | User message lost when refreshing the browser (WebUI). Closed, likely fixed by a prior or related patch. | – |
| Medium | #2573 (closed) | GitHub Copilot OAuth login broken due to bad Authorization header formatting. Closed. | – |
| Low | #3959 (closed) | `/skill` lists disabled skills. A new command was added (#3968) but the underlying disabled-skills filter may still be broken. | #3968 (closed) |

**Note:** Two high-severity bugs have open fix PRs (#4216, #4215) that are actively awaiting review.

## Feature Request Clusters

- **Provider / Model Support**:
  - #4204 — Add `extra_query` support for OpenAI-compatible providers (e.g., Azure-style `?api-version=`). PR #4209 also allows nullifying default OpenAI image parameters via `extraBody`.
  - #4196 (closed, duplicate) — Add Volcengine Seedream image generation support.
  - #4132 (closed) — Support custom image generation providers (e.g., Agnes AI) by reading `tools.imageGeneration` config.
  - #4213 (open) — PR to add Exa as a web search provider.

- **Session & Memory Control**:
  - #4212 — Prevent re-injected history from reinforcing unconfirmed inferences as broad facts. Wants smarter consolidator/correction logic.
  - #4198 — Expose subagent `fail_on_tool_error` to config, allowing recovery from minor tool errors.
  - #4205 (open) — PR introducing a mailbox-backed subagent results protocol for cleaner task tracking.

- **Channel & UI Enhancements**:
  - #4206 (open) — DingTalk group chat allowlist via `group_allow_from` config.
  - #4208 (open) — PR for “fork from here” in WebUI, with composer prefill isolation.
  - #4170 (open) — PR for configurable IMAP post-actions (move/delete) for email channel.
  - #4195 (open) — PR that polishes desktop shell and shared WebUI surfaces.

- **Infrastructure / Configuration**:
  - #4207 (open) — PR to drop Python 3.11/3.12 support to match CI (only 3.13/3.14 tested).
  - #4202 (open) — Clarify filesystem workspace write policy, add `extra_write_allowed_dirs`.
  - #3538 (open) — Add gateway CLI start/stop/restart/status commands.
  - #3992 (open) — Cross-agent message bus for multi-instance collaboration.

## User Feedback Summary

- **Pain points**: Several users reported regressions or missing basic features: Copilot login broken (#2573), skill listing not respecting `disabledSkills` (#3959), message loss on browser refresh (#4200), and SDK shutdown crash (#4211). These indicate recent refactors introduced stability issues.
- **Use cases**: Contributions like the Exa search provider (#4213) and Volcengine image generation (#4196) show demand for third-party integrations. The WebUI “fork from here” (#4208) and subagent mailbox (#4205) reflect a maturing collaborative agent workflow.
- **Satisfaction**: Closed issues and merged PRs (e.g., DM pairing fix, skill command) suggest maintainers are responsive. However, user frustration may be brewing around the lack of custom image generation support (#4132) and the inability to pass query parameters to Azure-style gateways (#4204).

## Backlog Watch

These important items have been open for weeks or months without maintainer resolution:

- **#1946** (open since 2026-03-13, last updated 2026-06-05) — Matrix test error on `main`. Single comment, no maintainer response. Could affect Matrix channel reliability.
- **#1408** (open since 2026-03-02, last updated 2026-06-05) — Unit-test CI workflow with coverage gate and README badge. In progress but not merged.
- **#1284** (open since 2026-02-27, last updated 2026-06-05) — CI/CD pipeline with quality checks and coverage. Also unmerged.
- **#3538** (open since 2026-04-29, last updated 2026-06-05) — Gateway start/stop/restart/status commands. No maintainer review comments.

These PRs represent essential infrastructure and channel support; their longevity suggests either maintainer bandwidth constraints or unresolved design debates.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-06

## 1. Today's Activity Brief
Activity remained high with **50 issues** and **50 pull requests** updated in the last 24 hours. Of the issues, 44 are open/active and 6 were closed. Among PRs, 36 are open and **14 were merged or closed** (not individually listed in today’s sample). No new releases were published. The project saw a significant batch of new feature PRs adding SMS, social, and chat channels (Twilio, Mastodon, Twitch, etc.), a large observability enhancement, and new provider integrations. Several critical bugfixes addressed runtime crashes, session tombstoning, and config redaction gaps.

## 2. Releases
**None.** No new versions or release tags were created in the 24‑hour window.

## 3. Project Progress
While the top‑20 PRs shown are all still open, **14 PRs were merged or closed overall** in the period. Notable advances visible in open PRs that are likely to land soon:

- **Web UI management dashboard** (#7229) adds dedicated tabs for MCP, Skills, Plugins, and Providers – enabling operators to manage these resources from the UI instead of editing config.
- **Structured Observability Enhancement** (#7233) enriches `ObserverEvent` with channel attribution, LLM I/O, OTel trace correlation, and a streaming context context – directly addressing the RFC (#7232).
- **New channel integrations** (schema v3): Twilio, Plivo, Telnyx, Sinch, Vonage SMS (#7265); Mastodon, Rocket.Chat, Zulip, Lemmy polling (#7270); Twitch chat (#7275). All use the alias‑keyed v3 slot pattern.
- **Provider additions**: 7 OpenAI‑compatible providers (Morph, GitHub Models, Upstage, Featherless, Arcee, Lambda AI, Inception) wired through schema‑v3 (#7260); `extra_body` support for compatible providers (#7163).
- **Plugin pilot**: A new WASM plugin for Shazam track lookup (#7277) joins the existing `image-gen-fal` reference plugin.
- **Config improvement**: Per‑field editing for `[[mcp.servers]]` in both web and TUI (#7267) via `#[natural_key]`.

## 4. Community Hot Topics
The most active issues (by comment count) this period were:

- [#6808 – RFC: Work Lanes, Board Automation, and Label Cleanup](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) (9 comments) – A governance RFC proposing lightweight PR lanes and issue routing, currently in proposed status.
- [#6969 – RFC: unified output routing model](https://github.com/zeroclaw-labs/zeroclaw/issues/6969) (7 comments) – A user who migrated from Letta describes the loss of per‑reply channel control. The RFC aims to add per‑peer modality preference and an `agent send_via` tool.
- [#5601 – OAuth support for Ollama Cloud, Zhipu, Kimi, MiniMax](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) (6 comments) – Requests subscription‑native OAuth for four providers; currently blocked, needs maintainer review.
- Several issues with 4 comments each touch security, observability, and shell‑command policies: [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) (per‑execution confirmation for high‑risk shell), [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) (pluggable security provider), [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) (OIDC auth), [#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) (LSP support), [#7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232) (observability) – all accepted or in RFC status.

Underlying needs: **governance of workflow**, **output routing control** (a common pain for ex‑Letta users), **broader provider authentication** (OAuth), and a cluster of **security‑UX improvements** (shell confirmation, pluggable enforcement, OIDC).

No PRs had high comment counts in the sample (comments column showed `undefined`); the most noteworthy PRs are the large feature additions listed in section 3.

## 5. Bugs & Stability
Several bugs were reported or fixed today, mostly in the **high severity** range:

- **S1 (workflow blocked):** [#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120) (closed) – Onboarding for Codex subscription incorrectly prompts for an OpenAI API key instead of letting users choose Codex. Fix not visible in today’s PR list.
- **S2 (degraded):** [#7059](https://github.com/zeroclaw-labs/zeroclaw/issues/7059) (open, in‑progress) – Channel orchestrator carries an ambient “default model provider” that doesn’t exist in schema V3, causing credential/URL fallback issues.
- **UTF‑8 char‑boundary panics** in Bluesky/LinkedIn truncation and dashboard – fixed by PR [#7123](https://github.com/zeroclaw-labs/zeroclaw/pull/7123) (high risk, size XS).
- **ACP session kill gaps** – `session/kill` removed the live session but left the durable row restorable. PR [#7258](https://github.com/zeroclaw-labs/zeroclaw/pull/7258) (size M, high risk) adds a `killed_at` tombstone.
- **Think‑block leakage** – inline `` blocks from model output were not stripped before building display text. PR [#7254](https://github.com/zeroclaw-labs/zeroclaw/pull/7254) (size S, high risk) applies a streaming sanitizer.
- **Config secret redaction** – nested object‑array secrets were not redacted in UI display. PR [#7261](https://github.com/zeroclaw-labs/zeroclaw/pull/7261) (size M, high risk) fixes terminal redaction.
- **Web UI drift false‑positive** – `paired_tokens` changes were incorrectly flagged due to kebab‑case vs snake_case mismatch. PR [#7247](https://github.com/zeroclaw-labs/zeroclaw/pull/7247) (size XS, high risk) also makes the ReloadBanner dismissable.
- **Provider alias not editable in quickstart** – hardcoded “default” alias caused validation failure. Fix PR [#7240](https://github.com/zeroclaw-labs/zeroclaw/pull/7240) (size XS, medium risk).

## 6. Feature Request Clusters
A strong wave of feature requests concentrated in three areas:

**Security & Runtime Isolation**
- Pluggable security provider interface ([#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142)), OIDC auth for RPC/WSS ([#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)), per‑execution confirmation tier + pattern policy for high‑risk shell ([#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)), air‑gapped execution with companion daemon ([#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293)), skill‑scoped tool activation ([#6915](https://github.com/zeroclaw-labs/zeroclaw/issues/6915)), process‑memory limits on subprocesses ([#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916)), and Composio action‑scope filter ([#6917](https://github.com/zeroclaw-labs/zeroclaw/issues/6917)). Many of these are in RFC or blocked status.

**Observability & Agent Interoperability**
- Structured observability with OTel correlation ([#7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232)), A2A agent discovery via `/.well-known/agent-card.json` ([#7218](https://github.com/zeroclaw-labs/zeroclaw/issues/7218)), per‑model capability & context‑window config ([#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100)).

**Channel & Integration Expansion**
- Multiple new channel types (SMS, social, chat) already implemented in PRs (see Section 3). On the request side: XCode integration ([#6065](https://github.com/zeroclaw-labs/zeroclaw/issues/6065)), shell host configuration for Windows ([#7089](https://github.com/zeroclaw-labs/zeroclaw/issues/7089)), office document parsing WASM plugin ([#7024](https://github.com/zeroclaw-labs/zeroclaw/issues/7024)).

A lighter core through external tools is also under RFC ([#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165)).

## 7. User Feedback Summary
Users expressed several concrete pain points:

- **Output routing limitations**: A user migrating from Letta reported that per‑reply channel control is missing in ZeroClaw, motivating RFC [#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969).
- **Onboarding friction**: Choosing a Codex subscription wrongly requests an API key instead of authenticating via OAuth ([#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120), now closed). Another user requested config validation in quickstart to surface incompatibilities early ([#6416](https://github.com/zeroclaw-labs/zeroclaw/issues/6416)).
- **Skill audit false positives**: The “remote markdown links are blocked” check incorrectly flags legitimate documentation URLs, blocking valid skills ([#6714](https://github.com/zeroclaw-labs/zeroclaw/issues/6714)).
- **REPL limitations**: The current terminal REPL does not support insertion of new messages or proper agent‑mode interaction, requested in [#5882](https://github.com/zeroclaw-labs/zeroclaw/issues/5882) (closed with a related PR).
- **LSP support for coding**: Users want language server protocol support to reduce model hallucination, similar to Claude Code and OpenCode ([#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907)).
- **Security concerns**: A user requested validation/allowlist for `extra_args` forwarded to Codex CLI, noting security‑affecting flags ([#5842](https://github.com/zeroclaw-labs/zeroclaw/issues/5842)).

Overall sentiment appears constructive with many feature requests and thoughtful RFCs; the large number of open/blocked issues suggests maintainer bandwidth is a bottleneck.

## 8. Backlog Watch
Several important issues have been open for weeks without maintainer response (marked `needs-maintainer-review` or `status:blocked`). The oldest and most impactful:

- [#5601 – OAuth support for Ollama Cloud, Zhipu, Kimi, MiniMax](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) – Opened 2026-04-10, 6 comments. Needs maintainer review.
- [#6165 – RFC: Lighter core through external integrations](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) – Opened 2026-04-27, 4 comments. Needs maintainer review.
- [#5908 – CI/CD container builds for Debian](https://github.com/zeroclaw-labs/zeroclaw/issues/5908) – Opened 2026-04-19, 2 comments. Needs maintainer review.
- [#

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-06

## Today's Activity Brief

In the past 24 hours, PicoClaw saw **6 issues updated** (2 open, 4 closed) and **22 pull requests updated** (2 open, 20 merged/closed). A new **nightly build** (v0.2.9-nightly.20260606.89ee8f1b) was released. Notable activity includes rapid fixes for the OneBot channel, several safety and type-assertion patches, and dependency bumps across the frontend and backend. The community flagged a new bug around continuous token consumption when Evolution is enabled, while older issues around skill-creator documentation and exec-tool false positives were finally resolved.

## Releases

- **nightly** (v0.2.9-nightly.20260606.89ee8f1b) — Automated nightly build from `main`. May be unstable.
  **Full Changelog**: [v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

No breaking changes or migration notes were provided for this release.

## Project Progress

The following PRs were merged or closed today (2026-06-05 / early 2026-06-06). Key improvements:

- **OneBot group reply fix** (#3009) — Corrected `ChatID` prefix so group messages use `send_group_msg` instead of `send_private_msg`.
  [PR #3009](https://github.com/sipeed/picoclaw/pull/3009)
- **Safe type assertions** (#3010, #3011) — Added `ok` checks in `toChannelHashes` and `UnsubscribeEvents` to prevent panics on unexpected data.
  [PR #3010](https://github.com/sipeed/picoclaw/pull/3010) | [PR #3011](https://github.com/sipeed/picoclaw/pull/3011)
- **Context display fix** (#2985) — `/context` now shows both summarization and compression thresholds (fixes #2968).
  [PR #2985](https://github.com/sipeed/picoclaw/pull/2985)
- **Skill-creator docs update** (#3013) — Removed references to missing helper scripts, added manual creation steps (addresses #652).
  [PR #3013](https://github.com/sipeed/picoclaw/pull/3013)
- **Anthropic SDK bump** (#2962) — `anthropic-sdk-go` updated from v1.26.0 to v1.46.0.
  [PR #2962](https://github.com/sipeed/picoclaw/pull/2962)
- **MiMo provider CommonModels** (#2915) — Added model entries for `mimo-v2.5` (multimodal) and `mimo-v2.5-pro` (text-only).
  [PR #2915](https://github.com/sipeed/picoclaw/pull/2915)
- **JSONL store crash consistency** (#2907, #2913) — Fixed metadata drift after crash and reduced hot-path cloning in session index.
  [PR #2907](https://github.com/sipeed/picoclaw/pull/2907) | [PR #2913](https://github.com/sipeed/picoclaw/pull/2913)
- **Fallback chain handling** (#2905) — Expired request contexts now stop fallback chain immediately.
  [PR #2905](https://github.com/sipeed/picoclaw/pull/2905)
- **Provider logo fallback** (#2908) — Restored logo rendering on models page after backend refactor.
  [PR #2908](https://github.com/sipeed/picoclaw/pull/2908)
- **Security fixes** (#2900) — Added CSRF protection, path traversal validation, and security headers to the web backend.
  [PR #2900](https://github.com/sipeed/picoclaw/pull/2900)
- **Multiple dependency bumps** (#2927, #2926, #2925, #2924, #2922, #2919) — Updated React, shadcn, TanStack Router/Query, Tabler Icons, Go util libraries.

## Community Hot Topics

Most active issues by comments and reactions:

- **#1042** ([BUG] exec工具的guardCommand方法问题) — 15 comments, 2 👍
  False-positive safety guard on commands like `curl`, where `restrict_to_workspace` incorrectly blocked non‑path commands. **Closed** after lengthy discussion.
  [Issue #1042](https://github.com/sipeed/picoclaw/issues/1042)

- **#2968** ([BUG] /context always show Compress at: 76800 tokens) — 5 comments, 1 👍
  Users confused because only the hard compression threshold was shown, not the soft summarization trigger. Fixed in PR #2985.
  [Issue #2968](https://github.com/sipeed/picoclaw/issues/2968)

- **#2916** (CPU, Memory and IO optimizations) — 4 comments
  Proposed optimizations for the skills system and bus IO patterns. Closed (merged).
  [Issue #2916](https://github.com/sipeed/picoclaw/issues/2916)

- **#652** ([Task] Check correction of workspace skills/ skill-creator) — 3 comments
  Long‑standing task to audit skill‑creator; docs update merged today (#3013).
  [Issue #652](https://github.com/sipeed/picoclaw/issues/652)

- **#3012** ([BUG] Continuous consumption of tokens every minutes when evolution is enabled) — 1 comment (new, open)
  User reports token drain when Evolution is active. No fix PR yet.
  [Issue #3012](https://github.com/sipeed/picoclaw/issues/3012)

## Bugs & Stability

| Bug | Severity | Status | Fix |
|-----|----------|--------|-----|
| #3012 – Continuous token consumption with Evolution enabled | High (cost impact) | Open, new | None yet |
| #3002 – OneBot group reply uses `send_private_msg` | Medium (functionality broken) | Closed | #3009 merged |
| #1042 – exec guardCommand false positive on `curl` | Medium (blocks valid commands) | Closed | Fix not linked but issue closed |
| #2968 – /context only shows compress threshold | Low (display clarity) | Closed | #2985 merged |
| #2916 – CPU/Memory/IO optimizations | Low (performance) | Closed | Merged (presumably) |
| #652 – skill‑creator missing scripts (documentation only) | Low (usability) | Addressed | #3013 merged |

Open bug of highest concern: **#3012** requires immediate investigation to prevent unnecessary token consumption.

## Feature Request Clusters

- **Image Input Compression** — Open PR #2964 adds configurable multi‑level compression for inbound images before building model payloads.
  [PR #2964](https://github.com/sipeed/picoclaw/pull/2964)
- **Channel Identification Refactor** — Open PR #2551 decouples channel names from provider types to allow multiple instances, with changes to `InboundContext` and message bus dispatch.
  [PR #2551](https://github.com/sipeed/picoclaw/pull/2551)
- **MiMo Vision Support** — Closed PR #2915 added common models for MiMo provider, enabling WebUI to recommend vision‑capable models by default.
- **Security Hardening** — Closed PR #2900 brought CSRF protection, path traversal validation, and security headers.
- **Performance & Reliability** — Multiple closed PRs (#2907, #2913, #2905) addressed crash consistency, hot‑path cloning, and fallback chain handling.

No new feature requests were opened today; the above are ongoing or recently merged.

## User Feedback Summary

- **Pain points**:
  - Safety guard preventing legitimate system commands (`curl`) (#1042).
  - Confusing `/context` output showing only compression threshold (#2968).
  - OneBot group replies failing with `send_private_msg` (#3002).
  - skill‑creator unusable out‑of‑the‑box due to missing scripts (#652).
  - Unexpected token drain when Evolution is enabled (#3012).

- **Satisfaction signals**:
  - Quick turnaround on OneBot fix and context display improvement (both reported and fixed within 2 days).
  - Appreciation for multiple type‑assertion safety patches (PR #3010, #3011) — users value crash prevention.

- **Use cases represented**:
  - Multi‑channel bot operators (OneBot, Web).
  - Skill developers needing reliable tool execution.
  - Users of MiniMax/MiMo providers with vision capabilities.
  - Those running PicoClaw in resource‑constrained environments (FreeBSD, Edge variants).

## Backlog Watch

- **Issue #652** ([Task] Check correction of workspace skills/ skill-creator) — Opened Feb 22, now partially resolved by #3013 docs update, but the underlying audit of all workspace skills may still be ongoing.
- **PR #2551** (Channel identification refactor) — Open since April 16, stale label, but activity on 2026-06-05. This is a significant refactor that may affect all channel configurations; needs careful review.
- **PR #2964** (Image input compression) — Open since May 28, stale label. No recent maintainer comments. Would benefit from review before next stable release.
- **Issue #3012** (Continuous token consumption) — Newly opened, requires maintainer triage and a fix to prevent costly token waste.

All other open issues/PRs seen in the data are either recently updated (within 24h) or have maintainer attention.

</details>