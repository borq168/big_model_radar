# OpenClaw Ecosystem Digest 2026-06-07

> Issues: 297 | PRs: 500 | Projects covered: 4 | Generated: 2026-06-07 02:42 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-06-07

## Today's Activity Brief

The project saw 297 issues updated in the last 24 hours (149 open, 148 closed) and 500 pull requests updated (401 open, 99 merged/closed). Two beta releases were published: v2026.6.5-beta.1 and v2026.6.5-beta.2, primarily fixing QQBot thinking leakage and MCP tool result coercion. Activity is concentrated on regressions around the Codex/OAuth runtime and prompt cache breakage for DeepSeek, with a notable P1 cron contamination bug filed today. Several longstanding issues received maintainer reviews but remain unresolved.

## Releases

**v2026.6.5-beta.2: openclaw 2026.6.5-beta.2**

- QQBot now strips model reasoning/thinking scaffolding before native delivery, preventing raw `<thinking>` content from leaking into channel replies. (PRs #89913, #90132, thanks @openperf)
- MCP tool results now coerce `resource_link`, `resource`, `audio`, malformed image, and future types predictatively.

**v2026.6.5-beta.1: openclaw 2026.6.5-beta.1**

- Same QQBot thinking strip fix and MCP result coercion as beta.2.
- No additional breaking changes or migration notes in either release.

## Project Progress

Of the 500 PRs touched today, 99 were merged or closed. Notable merged/stable PRs include:

- [#90960](https://github.com/openclaw/openclaw/pull/90960) — fix(google): enable Vertex AI image and video generation by routing Google Vertex requests through an explicit credential path
- [#89659](https://github.com/openclaw/openclaw/pull/89659) — fix(feishu): retry on send rate-limit errors (codes 230020/230006) with up to 2 retries and linear backoff
- [#89681](https://github.com/openclaw/openclaw/pull/89681) — fix(ui): key skills lists with `repeat()` so toggle state survives filtering
- [#90122](https://github.com/openclaw/openclaw/pull/90122) — fix(ui): collapse non-terminal internal tool errors in WebChat timeline
- [#90110](https://github.com/openclaw/openclaw/pull/90110) — fix(anthropic): add missing static catalog entry for Claude Haiku 4.5

A large PR ([#90872](https://github.com/openclaw/openclaw/pull/90872), size XL, waiting on author) aims to surface safe terminal tool fallbacks across agent-core, session tool definitions, and the embedded runner.

## Community Hot Topics

The three most active issues by comment count:

- **#90083** ([OPEN, P1, 14 comments, 3👍](https://github.com/openclaw/openclaw/issues/90083)) — OpenAI ChatGPT Responses transport fails with `invalid_provider_content_type` for gpt-5.4/gpt-5.5 after upgrading to 2026.6.1. User reports immediate connection errors after config/plugin migration. Underlying need: reliable compatibility with latest GPT model versions through the OpenAI Responses transport.

- **#67035** ([CLOSED, P1, 14 comments](https://github.com/openclaw/openclaw/issues/67035)) — Windows chat UI regression from 2026.4.14: input text swallowed, streamed replies invisible until refresh, typing indicator flashes then blanks. Closed today after weeks of discussion. Underlying need: core web UI reliability on Windows.

- **#88312** ([OPEN, P1, 13 comments, 3👍](https://github.com/openclaw/openclaw/issues/88312)) — Codex app-server turn-completion stall returns in 2026.5.27, a regression of previously fixed #84076. Multi-tool agent turns reliably fail with "Codex stopped before confirming the turn was complete". Underlying need: stable multi-tool agent execution on the Codex runtime.

- **#88929** ([OPEN, 11 comments, 2👍](https://github.com/openclaw/openclaw/issues/88929)) — Feishu streaming card shows abnormal typewriter effect (1-2 characters at a time) and final content truncated to last character. Underlying need: correct Feishu card streaming delivery.

## Bugs & Stability

**Critical/P1 regressions filed or escalated today:**

- **#90991** ([P1, 7 comments](https://github.com/openclaw/openclaw/issues/90991)) — Cron scheduled trigger contaminates global runtime state, causing transient system-wide overload failures. User reports MiniMax provider connections fail for all sessions after cron fires. No fix PR yet.

- **#91018** ([P1, 4 comments, 1👍](https://github.com/openclaw/openclaw/issues/91018)) — Upgrade to 2026.6.1 broke DeepSeek prompt cache entirely; user reports burning ~$6 in one hour due to full context being re-sent on every turn. No fix PR yet; marked `needs-maintainer-review`.

- **#90925** ([P1, 5 comments, 1👍](https://github.com/openclaw/openclaw/issues/90925)) — Subagent announce compaction for Codex/OAuth falls into openai-responses API-key route instead of OAuth route, breaking high-context parent sessions.

- **#90886** ([5 comments](https://github.com/openclaw/openclaw/issues/90886)) — Gateway hangs at `[gateway] starting...` when a declared provider lacks credentials, a regression from v2026.4.8 to v2026.4.26.

**Ongoing high-severity bugs still open:**

- #90083 — ChatGPT Responses transport broken for gpt-5.4/5.5 (P1, open since June 4)
- #90093 — openai-chatgpt-responses native replay sends encrypted reasoning, breaks next turn (P1, open since June 4)
- #90595 — Cron "failed" notifications fire during hot reload and retries causing alert fatigue (P1, open since June 5)
- #90428 — exec tool triggers gateway SIGTERM restart on WSL2 with Node 24 (open since June 4)

## Feature Request Clusters

- **Topic-session families** ([#90916](https://github.com/openclaw/openclaw/issues/90916), 6 comments, 1👍) — Request for one assistant to maintain multiple named topic lanes with isolated context while sharing family-level memory. No linked PR.

- **Local provider improvements** ([#89265](https://github.com/openclaw/openclaw/issues/89265), 5 comments, 1👍) — Request to treat local model providers as first-class citizens with better documentation and support. No linked PR.

- **Self-hosted STT/TTS in webchat** ([#45508](https://github.com/openclaw/openclaw/issues/45508), 4 comments, 1👍) — Route webchat TTS through gateway instead of browser Speech API to support self-hosted voice setups. No linked PR.

- **Memory/context improvements** ([#11955](https://github.com/openclaw/openclaw/issues/11955), 4 comments) — Grouped request for agent self-evaluation metrics, global semantic search, conversation chaining, and preload on restart. No linked PR.

- **Circuit breaker for unhealthy sessions** ([#62615](https://github.com/openclaw/openclaw/issues/62615), 4 comments) — Gateway-side circuit breaker after consecutive failures to stop retrying failing sessions. No linked PR.

- **Runtime self-context** ([PR #90101](https://github.com/openclaw/openclaw/pull/90101), size XL) — Implements config-backed runtime self-context for offload/scale/cost-awareness; linked to #89537.

## User Feedback Summary

**Pain points:**

- Cost sensitivity: #91018 reports $6/hour in excess DeepSeek costs after upgrade, with explicit Chinese-language alarm language (`严重警告`). User is on container/Android deployment.
- Session reliability: multiple users report Codex/OAuth integration breakdowns (#88312, #90925, #90083) that block production use of the platform's premium runtime path.
- UI regressions: persistent webchat problems on Windows (#67035) and Feishu (#88929) erode trust in channel delivery.
- Configuration friction: #90886 shows that missing provider credentials hang gateway startup with no clear error message; #44599 (CLOSED) highlights whitespace-in-path issues in Docker setups.

**Positive signals:**

- The QQBot thinking strip patch (released today) directly addresses user complaints about leaked internal reasoning.
- The Feishu rate-limit retry PR (#89659) is an active fix for a known production issue.
- Multiple PRs in "ready for maintainer look" status suggest maintainer bandwidth is being applied to the backlog.

## Backlog Watch

Issues that have been open for extended periods without resolution or maintainer response:

- **#67793** ([OPEN, April 16](https://github.com/openclaw/openclaw/issues/67793), P2, 10 comments) — `queue.mode "collect"` not batching messages despite debounce. Tagged `needs-maintainer-review`.

- **#49603** ([OPEN, March 18](https://github.com/openclaw/openclaw/issues/49603), P1, 9 comments) — Orphaned lock files not cleared on gateway restart when PID matches current process. No maintainer activity since March.

- **#59413** ([OPEN, April 2](https://github.com/openclaw/openclaw/issues/59413), P2, 9 comments) — Per-candidate retry count for model fallback to support pool-based/proxy providers. Tagged `needs-product-decision`.

- **#43015** ([OPEN, March 11](https://github.com/openclaw/openclaw/issues/43015), P1, 8 comments) — `message.send` schema overexposes poll/components/modal causing GPT auto-population breakages. Tagged `needs-product-decision` and `needs-linked-pr-open`.

- **#45508** ([OPEN, March 13](https://github.com/openclaw/openclaw/issues/45508), P2, 4 comments) — Self-hosted STT/TTS provider support in webchat. Tagged `needs-product-decision`.

- **#57256** ([OPEN, March 29](https://github.com/openclaw/openclaw/issues/57256), 6 comments) — `openclaw status` falsely reports mem0 memory as unavailable when live gateway plugin is working. Tagged `needs-live-repro`.

- **#64267** ([OPEN, April 10](https://github.com/openclaw/openclaw/issues/64267), P1, 5 comments) — Agent internal thinking (English) exposed to user across multiple models. Tagged `needs-security-review`.

Long-running PRs needing maintainer attention:

- **#78441** ([OPEN, May 6](https://github.com/openclaw/openclaw/pull/78441), size L) — `feat(subagents): forward toolsAllow from sessions_spawn`. Status "ready for maintainer look" for over a month.
- **#85993** ([OPEN, May 24](https://github.com/openclaw/openclaw/pull/85993), size XL) — `feat(browser): expand Chrome MCP web capabilities`. Status "waiting on author".
- **#85155** ([OPEN, May 22](https://github.com/openclaw/openclaw/pull/85155), size XS) — `fix(agents): avoid inviting provider swaps in model alias guidance`. Status "ready for maintainer look" for 16 days.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-06-07

## 1. Daily Cross-Project Overview

All four tracked projects showed active development today, with OpenClaw dominating raw volume (500 PRs, 297 issues updated) and Zeroclaw demonstrating high feature velocity (50 PRs, 39 issues) focused on WASM plugin infrastructure. NanoBot and PicoClaw operated at lower but steady activity levels, with NanoBot advancing WhatsApp reliability and memory isolation, while PicoClaw merged a multi-agent framework and a slate of defensive fixes. Security and access-control improvements appeared across all projects, and channel-specific delivery bugs (QQ, Feishu, WhatsApp, Telegram) were addressed by multiple teams.

---

## 2. Activity Comparison

| Project    | Issues Updated | PRs Updated | Releases Today | Activity Note |
|------------|----------------|-------------|----------------|---------------|
| OpenClaw   | 297 (149 open, 148 closed) | 500 (401 open, 99 merged/closed) | 2 beta releases (v2026.6.5-beta.1, beta.2) | Highest absolute volume; regression-heavy (Codex/OAuth, prompt cache, cron contamination) |
| NanoBot    | 7 (4 open, 3 closed) | 24 (14 open, 10 merged/closed) | 0 | Steady integration fixes (WhatsApp bridge, memory isolation, provider compatibility) |
| Zeroclaw   | 39 (count not split) | 50 (count not split) | 0 | High velocity on WASM plugin ecosystem; sandbox isolation, remote registry, 7 new plugin PRs |
| PicoClaw   | 12 (10 open, 2 closed) | 18 (15 merged/closed, 3 open) | 1 nightly build (v0.2.9-nightly) | Merged multi-agent framework, Google Chat, tool policies; defensive fixes from contributor |

---

## 3. OpenClaw Compared With Peers

**Activity volume:** OpenClaw's 500 PRs and 297 issues updated in 24 hours dwarf peers. Zeroclaw (50 PRs) is the next most active, followed by NanoBot (24) and PicoClaw (18). OpenClaw's scale reflects its role as the core reference implementation with a larger user base.

**Technical focus today:** OpenClaw is in a regression-heavy phase — multiple P1 issues cite breakages after recent upgrades (e.g., DeepSeek prompt cache broken in v2026.6.1, Codex turn-completion stall, Cron global state contamination). Peers are building new capabilities: Zeroclaw expanded its plugin ecosystem (6+ new plugin PRs), NanoBot added memory isolation and MCP access control, PicoClaw merged a multi-agent framework.

**Community surface area:** OpenClaw's top issues attract 11–14 comments, while Zeroclaw's most active issue (#5601) has 7 comments and NanoBot's top (#2573) had 3 comments (closed). OpenClaw shows sustained community engagement on longstanding production-blocking issues (e.g., #90083, #88312). PicoClaw's most active issue had 8 comments but was closed as stale.

**Bugfix velocity differs:** In Zeroclaw and NanoBot, today's filed bugs often received fix PRs the same day or within 24 hours (e.g., NanoBot #4167 → #4209, Zeroclaw S0 bugs closed today). OpenClaw has several P1 regressions (#91018, #90991) filed today with no fix PR yet, indicating either higher complexity or constrained maintainer bandwidth relative to bug volume.

---

## 4. Shared Technical Focus Areas

The following needs appeared across **two or more** projects in today's data:

| Need | Projects | Evidence |
|------|----------|----------|
| **Provider compatibility fixes** | OpenClaw, NanoBot, PicoClaw | OpenClaw: DeepSeek prompt cache breakage (#91018), GPT-5.x transport failure (#90083). NanoBot: custom provider reasoning_content fix (#4228), image API compatibility (#4209). PicoClaw: DeepSeek protocol fix for ModelScope (#1112). |
| **Security / access control hardening** | OpenClaw, NanoBot, Zeroclaw, PicoClaw | OpenClaw: OAuth route contamination (#90925). NanoBot: MCP access control (#2533), symlink escape fix (#4221). Zeroclaw: path guard fixes (#7281), nested secret redaction (#6978), sandbox isolation series (#7335–7). PicoClaw: workspace guard URL fix (#2965), tool policy filters (#2838). |
| **Channel delivery reliability** | OpenClaw, NanoBot, Zeroclaw, PicoClaw | OpenClaw: QQBot thinking strip, Feishu rate-limit retry (#89659). NanoBot: WhatsApp bridge fixes (#2528, #2529, #2555). Zeroclaw: Telegram scratchpad leak (#7068), zero-draft interval flood (#7332). PicoClaw: QQ Windows connection failure (#3015), Google Chat (#830), Slack improvements (#3020). |
| **Cost / performance optimization** | OpenClaw, NanoBot | OpenClaw: circuit breaker request (#62615), DeepSeek cache regression costing $6/hour (#91018). NanoBot: prefix caching invalidation bug (#4222). |
| **Web UI and dashboard improvements** | OpenClaw, Zeroclaw | OpenClaw: UI key skills filtering (#89681), collapsing internal tool errors (#90122). Zeroclaw: web dashboard parity PR (#7298), web dashboard tabs PR (#7229). |

---

## 5. Differentiation Analysis

**OpenClaw** remains the broadest platform with the largest ecosystem surface. Today's data shows it absorbing pressure from multiple integration points (Codex/OAuth, Feishu, QQBot, Google Vertex, Anthropic, DeepSeek, OpenAI ChatGPT Responses). The project is in a stabilization phase after recent releases — most activity is regression fixes and compatibility patches.

**Zeroclaw** is investing heavily in plugin ecosystem infrastructure: 7 new plugin PRs today, sandbox isolation (resource limits, egress guards, namespace), a remote registry, and lifecycle hooks RFCs. This contrasts with OpenClaw's built-in integration model. Zeroclaw's community is smaller but focused on extensibility.

**NanoBot** is prioritizing multi-user deployment (per-user memory isolation #2968, per-MCP-server access control #2533) and targeted integration fixes (WhatsApp bridge, transcription providers). Activity is narrower in scope compared to OpenClaw and Zeroclaw.

**PicoClaw** is the smallest project but shows unique characteristics: Edge device concern (arm64 builds, Raspberry Pi), multi-agent frameworks (merged today #423), and emerging trading automation features (7 new issues from one contributor). The high ratio of defensive fixes (8 PRs from one contributor) suggests the codebase needs robustness improvements that others have already addressed.

---

## 6. Community Activity Notes

**Tier 1 (Very High):** OpenClaw — 500 PRs, 297 issues, 2 releases. Community engagement is broad but scattered across regressions. Maintainer response times vary: some PRs remain in "ready for maintainer look" for weeks (e.g., #78441 since May 6), while critical regressions get immediate attention.

**Tier 2 (High):** Zeroclaw — 50 PRs, 39 issues. High contributor activity around plugin infrastructure. Community issues show patience on authentication features (e.g., #5601 blocked since April). Bugfix velocity is strong.

**Tier 3 (Moderate):** PicoClaw — 18 PRs, 12 issues. One dedicated contributor (@chengzhichao-xydt) generated half the merged PRs. New trading feature proposals from a single contributor (@jcafeitosa) suggest a specialized user segment.

**Tier 4 (Low):** NanoBot — 24 PRs, 7 issues. Low issue count relative to PRs indicates either fewer users or effective triage. The prefix caching bug (#4222) is the most notable open concern.

---

## 7. Evidence-Backed Observations

1. **Provider compatibility is the most cross-cutting pain point.** Three of four projects (OpenClaw, NanoBot, PicoClaw) had at least one fix or regression tied to specific model providers (GPT-5.x, DeepSeek, Claude Haiku) today. This reflects the fast pace of model releases and the challenge of maintaining stable integration.

2. **Security and access control hardening is active across the ecosystem.** All four projects merged or filed fixes in this area today: OAuth routing, symlink escapes, path guards, secret redaction, MCP access control, workspace guards, tool policies. No project is ignoring this concern.

3. **Channel-specific delivery bugs are a recurring operational cost.** Every project had fixes or bugs related to a specific messaging platform (QQ, Feishu, WhatsApp, Telegram, Google Chat, Slack). Multi-channel support continues to generate disproportionate maintenance overhead.

4. **Plugin ecosystem development is concentrated in Zeroclaw.** Today's data shows 7 new plugin PRs, stacked sandbox isolation PRs, a remote registry, and lifecycle hooks RFCs — all from Zeroclaw. No other project showed comparable plugin infrastructure investment.

5. **Bugfix velocity varies meaningfully between projects.** Zeroclaw and NanoBot closed critical bugs within hours or days of reporting (Zeroclaw's S0 bugs, NanoBot's #4167). OpenClaw has multiple P1 regressions from today that remain unfixed, suggesting the scale of its integration surface creates a larger backlog relative to maintainer capacity.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-07

## 1. Today’s Activity Brief
NanoBot saw active development over the past 24 hours: **24 pull requests were updated** (14 open, 10 merged/closed) and **7 issues were updated** (4 open, 3 closed). No new releases were published. Key merges include a fix for empty `reasoning_content` in custom providers (#4228), a desktop shell polish (#4195), and several WhatsApp bridge improvements from contributor `@franciscomaestre`. On the issue tracker, the most reacted item (#2573, 9 👍) remains a closed authentication bug for GitHub Copilot, while new reports around prefix caching invalidation (#4222) and GitHub Enterprise support (#4220) signal growing demand for production-grade deployments.

---

## 2. Releases
*None in the last 24 hours.*

---

## 3. Project Progress
The following pull requests were merged or closed in the last 24 hours (from the top‑20 list by activity):

- **#4228** – *fix: preserve empty reasoning_content in streaming response parsing* – Merged to address issue #4105 for custom providers (e.g., DeepSeek).
- **#4209** – *fix(providers): allow dropping default OpenAI image params via null extraBody* – Closes #4167, enabling compatibility with OpenAI‑compatible APIs that reject `response_format`.
- **#4195** – *feat(desktop): polish desktop shell and shared WebUI surfaces* – Prepares nanobot’s first open desktop surface, adding file preview, skills, and automation gateway APIs.
- **#2968** – *feat(memory): per-user memory isolation via agents.defaults.per_user_memory* – Merged after long review; adds opt‑in flag to separate memory directories per user.
- **#2555** – *fix(whatsapp-bridge): close existing clients on new connection to prevent duplicate messages* – Ensures only one WebSocket client is active.
- **#2533** – *feat: per-MCP-server allowFrom access control* – Adds `allowFrom` list to restrict MCP tool access by user.
- **#2532** – *feat(search): add Serper.dev as Google Search provider* – Integrates Serper as a web search provider.
- **#2529** – *fix(whatsapp-bridge): download audio messages for transcription* – Passes downloaded audio to Python transcription.
- **#2528** – *fix(whatsapp-bridge): drop messages older than startup to avoid replaying history* – Prevents responses to stale conversations.

These merges advance stability (WhatsApp bridge, reasoning_content), multi‑user isolation, search providers, and desktop readiness.

---

## 4. Community Hot Topics
The most active issues and PRs by comments and reactions:

- **#2573** – *Github Copilot登录失败* ([link](https://github.com/HKUDS/nanobot/issues/2573)) – **Closed**
  3 comments, 9 👍. Users report OAuth login broken after migration from litellm to openai. The maintainers closed it, likely after a fix (not visible in today’s data). Strong community demand for Copilot authentication.

- **#4167** – *Image generation fails with OpenAI-compatible APIs that don't support `response_format`* ([link](https://github.com/HKUDS/nanobot/issues/4167)) – **Closed**
  2 comments. Quickly fixed by PR #4209, merged today.

- **#4105** – *[bug] Custom provider will drop reasoning content if it's empty string* ([link](https://github.com/HKUDS/nanobot/issues/4105)) – **Open**
  1 comment. Two competing fixes emerged today: #4228 (merged) and #4227 (open). The duplicate suggests active community/contributor engagement.

- **#4222** – *[bug] max_messages truncation and microcompact continuously invalidate prefix/prompt caching* ([link](https://github.com/HKUDS/nanobot/issues/4222)) – **Open**
  No comments yet. Author details a serious performance issue where context governance defeats prompt caching on nearly every turn.

**Underlying needs**: Reliable authentication with GitHub Copilot, compatibility with non‑OpenAI image APIs, preservation of reasoning content from custom providers, and efficient token caching for production workflows.

---

## 5. Bugs & Stability
**High severity**:

- **#4222** – *Prefix caching invalidated every turn* – max_messages slice boundary drift and micro‑compact shifting cause message prefix to mutate constantly, defeating prompt caching. No fix PR yet. **Critical for cost/performance.**

- **#4105** – *Empty-string reasoning_content dropped* – Causes fields to disappear for providers like DeepSeek, breaking reasoning displays. Fix merged in #4228; alternative fix #4227 remains open.

- **#4221** – *Relative symlink workspace escapes* – `ExecTool` permitted symlink traversal outside allowed workspace. A fix PR #4221 was opened today (security fix).

**Medium severity**:

- **#4211** – *SDK leaves stdio MCP open → RuntimeError at shutdown* – Closed today. Likely fixed by related PR #4219 (session orphan tool result handling) or a separate patch.

**Low severity / fixed**:

- **#2573** – GitHub Copilot login failure (closed, likely patched earlier).
- **#4167** – Image generation API incompatibility (closed, fixed by #4209).

**Stability note**: Three of today’s merged PRs (#2528, #2555, #2529) directly address WhatsApp bridge reliability (replay, duplicates, audio).

---

## 6. Feature Request Clusters
User‑requested features and related active/merged PRs today:

- **Enterprise / Team integrations**
  - #4220 (open) – *Add GitHub Copilot for Business / GitHub Enterprise support* – Requests different API endpoints for enterprise deployments.
  - #4033 (open) – *Add chat sender identity context* – Distinguishes users in shared channels (Discord).
  - #4225 (open PR) – *cron silent mode and lock_recipient* – Enables background monitoring without channel noise.

- **WebUI enhancements**
  - #4218 (open) – *Feature Request: WebUI Cron Job Management* – Users want a UI to manage cron jobs instead of editing config files.

- **Transcription / Audio**
  - #4224 (open PR) – *Add AssemblyAI as transcription provider* – Third option alongside OpenAI and Groq.

- **WhatsApp improvements**
  - #4226 (open PR) – *Forwarded message detection, startup guard, and contact handling* – Production‑facing enhancements.

- **Security / Network**
  - #4123 (open PR) – *fix(mcp): reject unsafe HTTP URLs before probe* – SSRF guard for MCP endpoints.

**No single trend dominates**; the requests are spread across enterprise readiness, UI convenience, provider diversity, and security.

---

## 7. User Feedback Summary
Common pain points from today’s issues:

- **Authentication hurdles**: GitHub Copilot OAuth broken after provider migration (#2573). This issue attracted 9 reactions, indicating high impact on users relying on Copilot.
- **Provider compatibility friction**: Image generation fails with APIs that lack `response_format` (#4167). Custom providers drop `reasoning_content` (#4105). Users are pushing for broader compatibility with non‑OpenAI APIs.
- **Performance regressions**: Prefix caching rendered useless by context governance (#4222) – a detailed report from `@imkuang` that could affect latency and costs.
- **SDK embedding issues**: `RuntimeError` at shutdown when using stdio MCP (#4211), now closed.

**Positive signals**: Multiple bugs were fixed within a day of being reported (#4167 → #4209, #4105 → #4228). Community members actively submit fixes (e.g., `@michaelxer`, `@Yuxin-Lou`, `@franciscomaestre`). The surge of WhatsApp bridge PRs suggests real‑world deployment is driving iterative improvement.

---

## 8. Backlog Watch
Issues and PRs that have remained open for an extended period and may need maintainer attention:

- **#4033** – *Add chat sender identity context* – Opened 2026‑05‑28. No maintainer comments since creation. Important for multi‑user Discord/thread scenarios.
- **#4094** – *fix channel dispatch durability and stream identity* – Opened 2026‑05‑29. Closes three linked bugs (#4062, #4063, #4064). Still open after 9 days; no activity from core team.
- **#4123** – *fix(mcp): reject unsafe HTTP URLs before probe* – Opened 2026‑05‑31. Security‑related; no merge or close yet.
- **#4105** – *Custom provider will drop reasoning content if it's empty string* – Opened 2026‑05‑30. Now has two fix PRs (#4227, #4228); #4228 already merged. Likely soon to be closed.

No long‑unanswered issues older than two weeks appear in today’s data; the project’s response tempo is generally high.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest — 2026-06-07

## Today's Activity Brief

Active development continues at high velocity with 39 issues and 50 pull requests updated in the last 24 hours, reflecting a project in a burst phase across multiple parallel workstreams. The v0.8.x release line remains a central focus with three active milestone trackers (v0.8.0 stable blockers, v0.8.2 WASM plugin program, v0.8.3 MCP dashboard/plugin management surfaces) all receiving updates today. A significant surge in WASM plugin infrastructure is evident — six new plugin PRs landed alongside two RFCs exploring lifecycle hook bridges and remote plugin registries. Bugfix velocity is also high, with several severity S0–S1 issues closed (session rehydration vulnerability, nested secret exposure, Telegram scratchpad leak) and their fix PRs merged or in review. No new releases were published today.

## Releases

No new releases today.

## Project Progress

**Merged/Closed PRs (5 total):**
- **#7334** (CLOSED) — `fix(channels/telegram): clamp zero draft update interval` — Prevents Telegram partial streaming from flooding edits when `draft_update_interval_ms = 0`. Fixes bug #7332. ([#7334](https://github.com/zeroclaw-labs/zeroclaw/pull/7334))
- **#7281** (CLOSED) — `fix(policy): stop path guard false-positives on heredoc bodies and non-path tildes` — Fixes #7133 by surgically tokenizing only argv positions, not heredoc bodies or quoted strings. ([#7281](https://github.com/zeroclaw-labs/zeroclaw/pull/7281))
- **#7297** (CLOSED) — `feat(gateway): per-request agent dispatch for POST /webhook via ?agent=` — Enables multi-agent routing on the webhook endpoint. ([#7297](https://github.com/zeroclaw-labs/zeroclaw/pull/7297))

**Closed Issues (15 total):**
- **Security-critical bug fixes closed:** #6978 (nested secret redaction in config display — S0), #7252 (session rehydration of killed ACP sessions — S0), #7068 (Telegram scratchpad leak — S1), #6875 (Llama 4 Scout tool call parser failure — S1), #7126 (WebUI "Clear all" not clearing backend history — S1), #7151 (observability telemetry leaking onto chat WebSocket — S2), #7332 (Telegram zero draft interval flooding — S2)
- **Enhancements/features closed:** #6295 (wiring `providers.fallback` into provider resolution), #6915 (skill-scoped temporary tool activation)
- **Docs/maintenance closed:** #7110 (generated assistant translations in docs PO catalogs), #7299 (stale-window reset bypassing recommendation cooldown — low severity, currently safe)

**Open PRs advancing features:**
- #7229 — Adds MCP, Skills, Plugins & Providers dashboard tabs to the web UI (XL-sized, risk: high)
- #7335/#7336/#7337 — Stacked plugin sandbox isolation series: resource limits, egress guards, namespace/rate-limiting for plugin tools
- #7333 — Remote plugin registry (`zeroclaw plugin search` + install-by-name)
- #7340 — Refactoring duplicate domain/URL validation logic across browser/web tools
- #7245 — Fixes `read_skill` tool to load plugin-bundled skills and bounded skills
- #7256 — Feishu/Lark channel hardening (reactions, draft streaming, per-user sessions, two production bug fixes)
- #7298 — UX improvements: zeroclaw Config tab split-pane parity with zerocode
- #7307 — Applies runtime profiles to delegate sub-loops for correct tool-loop limits

**New Plugin PRs (7 today):**
- #7324 — ollama-embed local embeddings plugin
- #7325 — sd-webui self-hosted image generation plugin
- #7326 — LanguageTool grammar/style plugin
- #7327 — Nominatim geocoding plugin
- #7328 — n8n workflow-trigger plugin
- #7331 — ACE-Step self-hosted music generation plugin
- #7329/7330 — (mentioned in tracker, not yet prominent)

## Community Hot Topics

**Most Active Issues (by comment count):**

1. **#5601** (7 comments) — `[Feature]: Add subscription-native OAuth support for Ollama Cloud, z.ai, Kimi, MiniMax` — User request for OAuth login for four additional providers, enabling authentication without static API keys. Created April 10, still open with `status:blocked`. ([#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601))

2. **#7184** (4 comments) — `RFC: Move translated .ftl and .po files into a git submodule` — Proposed architectural change to isolate translation churn from main repo history. Created June 4, actively discussed. ([#7184](https://github.com/zeroclaw-labs/zeroclaw/issues/7184))

3. **#6715** (4 comments) — `[Feature]: Delete unneeded branches from main zeroclaw-labs/zeroclaw repository` — Repository hygiene request citing 200+ stale branches. Created May 16, still open. ([#6715](https://github.com/zeroclaw-labs/zeroclaw/issues/6715))

4. **#7141** (4 comments) — `[Feature]: OIDC Authentication Provider support` — Tracking issue for pluggable authentication-provider work targeting v0.9.0. Created June 3. ([#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141))

**Notable PRs:** The stacked plugin sandbox series (#7335 → #7336 → #7337) and the large web dashboard PR (#7229, 4 days old) are likely receiving the most maintainer and contributor attention, though comment counts are not visible in the data for most PRs.

**Underlying Needs:**
- **Authentication complexity:** Multiple issues (#5601, #7141, #6917, #6914) reflect growing demand for flexible, secure authentication — both for external provider access and for tool dispatch authorization.
- **Plugin ecosystem expansion:** The 7+ plugin PRs in one day, combined with sandbox and registry infrastructure work, indicate strong community and maintainer investment in a plugin marketplace model.
- **Web UI parity:** PR #7298 specifically addresses parity between zeroclaw and zerocode dashboards, suggesting the web frontend is catching up to a more mature reference client.

## Bugs & Stability

**High-severity bugs today (ranked by severity):**

| Severity | Issue | Description | Status |
|----------|-------|-------------|--------|
| **S0** | #6978 | Nested secrets in `ObjectArray` config properties not redacted | CLOSED |
| **S0** | #7252 | Session/kill rehydrates killed ACP sessions from durable history | CLOSED |
| **S1** | #7068 | Telegram bot sends Codex scratchpad/tool transcript as final response | CLOSED |
| **S1** | #6875 | Tool call parser fails on `<tool_calls>` plural tag (Llama 4 Scout) | CLOSED |
| **S1** | #7126 | WebUI "Clear all" only wipes frontend, not backend session history | CLOSED |
| **S1** | #7151 | Observability telemetry leaks onto chat WebSocket, renders permanent "unknown" tool cards | CLOSED |
| **S2** | #7133 | Path-policy false-positive on `~` tokens in quoted/heredoc command data | CLOSED (#7281 merged) |
| **S2** | #7332 | Telegram partial streaming accepts zero draft update interval, floods edits | CLOSED (#7334 merged) |
| **S2** | #7197 | Web toolbar loads slowly and spawns visible cmd windows on Windows | CLOSED |

All reported today have corresponding fix PRs already merged or in the merge queue. No new S0 bugs were filed today.

**Notable:** The v0.8.0 release tracker (#7112) lists config and tool-call-parser Stable-tier promotion, schema/breaking-change cleanup, and runtime/provider configuration correctness as blockers that must be settled before release.

## Feature Request Clusters

**Authentication & Security Permissions (4 related issues):**
- #5601 — OAuth support for 4 more providers (blocked, open since April 10)
- #7141 — OIDC Authentication Provider support (RFC, targeting v0.9.0)
- #6914 — `allowed_tools` enforcement in main agent loop (blocked, accepted)
- #6917 — Action-scope filter for Composio tool dispatch (blocked)
- #5775 — Per-skill security permissions for `allow_scripts` and `allowed_commands` (blocked)

**Plugin Ecosystem (2 RFCs + 7 PRs):**
- #7338 — RFC: WASM plugin lifecycle hooks (HookRunner bridge) — filed today
- #7339 — Tracking issue for #7338 feasibility spike — filed today
- #7335/#7336/#7337 — Sandbox isolation, signature mode, namespace/rate-limiting (all open)
- #7333 — Remote plugin registry + install-by-name (open)
- 7 plugin PRs adding n8n, ACE-Step, sd-webui, Nominatim, LanguageTool, ollama-embed, and more

**CI & Infrastructure:**
- #5908 — GitHub Actions CI/CD for Debian container image builds (blocked since April 19)
- #6906 — Improve Nix flake to expose package and module (blocked since May 25)

**Scheduling & Control Flow:**
- #5607 — Pre-hook skip gates for cron jobs and SOP triggers (blocked, accepted since April 10)
- #7184 — RFC: move translation files to git submodule (open, 4 comments)

## User Feedback Summary

Real user pain points expressed in today's issues:

- **Authentication friction:** User @dolsol3 in #5601 explicitly requests OAuth for Ollama Cloud, z.ai, Kimi, and MiniMax to avoid managing static API keys, noting ZeroClaw already supports this for three providers. This suggests the authentication model is a gate for adoption with certain providers.
- **Repository cleanliness:** @Project516 in #6715 reports "over 200 branches" in the repo, most merged, creating confusion for forkers. The request for branch cleanup indicates the repo's branching strategy impacts contributor onboarding.
- **Nix ecosystem mismatch:** @wariuccio in #6906 reports the Nix flake outputs a toolchain instead of a `zeroclaw` package, indicating the existing flake doesn't follow Nix community expectations for discoverability.
- **Telegram channel issues:** Multiple Telegram bugs (#7068, #7332, #7197) from different users (@sbenedetto, @rifuki, @NiuBlibing) suggest the Telegram integration is receiving real-world stress testing with several failure modes exposed.
- **Web UI parity concern:** PR #7298 explicitly calls out that the zeroclaw Config tab "diverged from the zerocode Config tab's split-pane," suggesting users migrating between the two interfaces experience inconsistency.

## Backlog Watch

**Long-unanswered important issues needing maintainer attention:**

1. **#5601** (OAuth for 4 providers) — Created April 10, last updated June 6, blocked, accepted, 7 comments, 1 👍. The oldest high-activity issue still open. Maintainer response appears present (status: accepted, blocked) but the user's core request remains unaddressed after 2 months.

2. **#5607** (Pre-hook skip gates for cron jobs) — Created April 10, last updated June 6, blocked, accepted, 2 comments. Same creation date as #5601; seems to be waiting on architectural decisions.

3. **#5908** (Debian container image CI/CD) — Created April 19, blocked, accepted, 3 comments. Has not advanced despite being filed over 6 weeks ago. Container build automation is a standard CI expectation for users.

4. **#5775** (Per-skill security permissions) — Created April 15, blocked, accepted. Part of the broader security permissions cluster; dependencies on other architectural work may be blocking.

5. **#6715** (Branch cleanup) — Created May 16, 4 comments, updated June 6 but no maintainer resolution on the cleanup action. Simple operational task that could improve contributor experience.

**Observation:** Most backlogged issues carry `status:blocked` and `status:accepted` labels, indicating maintainers have acknowledged them but are waiting on cross-cutting architectural work (likely the authentication refactor and tool dispatch security overhaul) before implementation can proceed.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-07

## 1. Today’s Activity Brief
In the last 24 hours, 12 issues were updated (10 open, 2 closed) and 18 pull requests were updated (15 merged/closed, 3 open). A new nightly build (`v0.2.9-nightly.20260607.7d2b0c2a`) was released. A flurry of defensive fixes from contributor @chengzhichao-xydt addressed goroutine leaks, unchecked type assertions, and silent error paths. A batch of exchange-related issues were opened by @jcafeitosa, signaling early work on a trading CLI and exchange connectors.

## 2. Releases
- **Nightly Build** `v0.2.9-nightly.20260607.7d2b0c2a`
  Automated build — may be unstable. No breaking changes or migration notes provided.
  **Full Changelog**: https://github.com/sipeed/picoclaw/compare/v0.2.9...main

## 3. Project Progress
Fifteen PRs were merged or closed today. Notable feature advances:

- **Multi-agent collaboration framework** (#423) — merged after long WIP; adds shared context pool (Blackboard), agent handoff, and discovery tools.
- **Google Chat channel support** (#830) — new channel integration merged.
- **Tool policy filters** (#2838) — `AGENT.md` frontmatter now supports `allow`/`deny` policies and glob patterns for tools and MCP servers.
- **DeepSeek protocol support for ModelScope** (#1112) — fixes `unknown protocol` error for `deepseek-ai/DeepSeek-V3.2`.
- **Slack formatting & channel routing** (#3020) — improved Slack tool feedback tracking, message formatting, and channel allow/ignore filters.
- **Workspace guard URL fix** (#2965) — `restrict_to_workspace` no longer misreads scheme-less URLs used by `curl`.
- **Documentation**: unified vendors table (#2662), Traditional Chinese locale PR (#2935) remains open.

Eight PRs from @chengzhichao-xydt were merged, fixing:
- Goroutine leak in `Manager.Reload()` (#3014, #3016)
- Safe startup info map access (#3021)
- `sync.Map` type assertion safety (#3022, #3018)
- `Close()` error checking in updater (#3023)
- Base64 encoder close on error path (#3017)
- Type-switch capture and nil guard (#3019)

**Open PRs** (3):
- #2935 – Traditional Chinese docs & i18n
- #3016 – cancel old dispatchTask (merged as #3014? Actually #3016 is open and #3014 closed; they are similar. #3016 remains open)
- #3018 – type assertions and `os.Getwd` error (open)

## 4. Community Hot Topics
- **Issue #2625** [CLOSED] [Feature] “Provide compiled builds with WhatsApp support”
  *8 comments, 1 reaction*
  Author @duckida wants WhatsApp support in default arm64 builds for Raspberry Pi Zero 2. Closed as stale after no maintainer action. Underlying need: easier deployment of WhatsApp-enabled builds.

- **Issue #2929** [CLOSED] [Task] “Add first-class agent-to-agent communication”
  *3 comments, 2 reactions*
  Request for peer-to-peer agent messaging beyond `spawn`/`delegate`. Closed as stale, though PR #423 (merged today) provides a foundation with shared context and handoff.

- **Issue #3032** [OPEN] “EXM-003: cmd/clawtrade CLI structure”
  *1 comment*
  Part of a new series by @jcafeitosa proposing `trade`, `backtest`, `agent`, `status` commands.

## 5. Bugs & Stability
- **New Bug: QQ channel connection failure on Windows** (#3015)
  Reported by @cuandada: token retrieval timeout when running `picoclaw gateway` on Windows. Pico channel works normally. Likely a platform-specific HTTP/SSL issue. No fix PR yet.

- **Defensive fixes merged today** (8 PRs) address potential crashes and resource leaks:
  - Goroutine leaks on config reload (#3014, #3016)
  - Panic when agent is nil (#3021)
  - `sync.Map` type assertion panics (#3022)
  - Silently ignored `Close()` errors during self-update (#3023)
  - Incomplete base64 output on `io.Copy` failure (#3017)
  - Redundant type assertions and missing nil checks (#3019, #3018)

- **Workspace guard bug** (#2965) – scheme-less URLs now correctly handled under `restrict_to_workspace`.

Severity ranking: #3015 (QQ Windows) is highest as it blocks a channel. The rest are corner-case stability improvements.

## 6. Feature Request Clusters
- **WhatsApp Builds** (#2625) – closed stale; no PR. Community desire for pre-built WhatsApp support persists.
- **Agent-to-Agent Communication** (#2929) – closed stale; PR #423 provides partial implementation (shared context, handoff). Full peer-to-peer messaging remains unimplemented.
- **Trading/Exchange Features** – Seven new issues from @jcafeitosa (EX-001 to EX-005, EXM-001 to EXM-003) covering Binance connectors (REST, WebSocket, lock-free order book), risk manager, ClawHub message types, CI/CD, and CLI. No PRs yet.
- **Google Chat Channel** (#830) – merged today, fulfilling a prior feature request.

## 7. User Feedback Summary
- **Pain points**:
  - Windows QQ channel unusable (#3015).
  - Default arm64 builds lack WhatsApp support, forcing manual compilation (#2625).
  - No first-class agent-to-agent communication beyond delegation (#2929).
- **Use cases**: Running PicoClaw on Raspberry Pi Zero 2 with WhatsApp; multi-agent cooperative workflows; trading automation.
- **Satisfaction**: Rapid merging of defensive fixes and community PRs (e.g., Google Chat, Slack improvements, DeepSeek support) indicates responsive maintainership. The nightly build ensures latest changes are accessible, though stability warnings apply.

## 8. Backlog Watch
- **Issue #2625** (WhatsApp builds) and **#2929** (agent-to-agent comm) were closed as stale after weeks without maintainer action. While not requiring immediate attention, their closure suggests these features are not currently prioritized.
- **PR #2935** (Traditional Chinese documentation) opened May 24, still open with no review comments. May need maintainer attention to avoid staleness.
- **Issue #3015** (QQ Windows bug) is fresh; maintainer response is pending.
- **Batch of trading issues** (#3024–#3032) were filed today; no maintainer response yet.

All links: use the provided GitHub URLs.

</details>