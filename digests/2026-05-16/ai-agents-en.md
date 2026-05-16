# OpenClaw Ecosystem Digest 2026-05-16

> Issues: 500 | PRs: 500 | Projects covered: 4 | Generated: 2026-05-16 02:07 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-05-16

## Today's Activity Brief

OpenClaw saw extremely high activity today with 500 issues and 500 PRs updated in the last 24 hours, though the ratio of open/active items remains high (458 open issues, 473 open PRs) compared to only 42 closed issues and 27 merged/closed PRs. Two beta releases shipped — `v2026.5.16-beta.1` and `v2026.5.14-beta.2` — focusing on maintainer tooling defaults, CLI internationalization, and SDK channel-turn improvements. The community continues to report a constant barrage of Telegram and Discord delivery bugs (at least 7 distinct Telegram issues active), alongside several regression reports tied to the recent 2026.5.12 update. A notable fix PR (#82378) addressing Codex app-server watchdog timing and Telegram isolated-ingress blocking was merged today.

## Releases

### v2026.5.16-beta.1
- **Maintainer tooling**: Crabbox skill defaults now route through the repo brokered AWS config; Blacksmith Testbox is now an explicit opt-in rather than the broad-proof default
- **CLI/onboarding**: Setup wizard and bundled channel setup flows now localized for English, Simplified Chinese (additional languages implied but not explicitly listed)

### v2026.5.14-beta.2
- **Channels/SDK**: Normalized command turn facts added to channel turn construction; command-turn helpers exposed for plugin inbound contexts
- **Agents/config**: Per-agent bootstrap profile overrides now supported for `contextInjection`, `bootstrapMaxChars`, and `bootstrapTotalMaxChars`, with inheritance from defaults

No explicit breaking changes or migration notes were documented in the release summaries.

## Project Progress

### Merged/Closed PRs Today
- **#82378** — Fix Codex raw tool-output watchdog: keeps the short turn-completion idle watchdog armed after raw `custom_tool_call_output` notifications; adds regression tests for Codex raw tool-output completion silence and Telegram isolated-ingress interleaving
- **#82362** — Add xAI Grok OAuth (`xai-oauth` for SuperGrok subscription-backed login); wires OAuth token refresh through xAI provider
- **#57440** — Fix `sessions_spawn` model forwarding: resolves target agent's `model.primary` and passes it in the actual agent gateway call (fixes subagent model override)
- **#41807** — Add `agents.defaults.systemPromptFile` config option for enforcing behavioral instructions via system prompts

### Notable Open PRs Updated Today
- **#82285** — Tool-use injection + rolling-timer indicator for `claude-stream-json` backends, adding in-stream textual markers and a three-phase timer
- **#82298** — Fix Telegram stop lane and gateway session aborts, enabling stop to match on either raw or canonical session keys
- **#82100** — Extract GoogleChat channel schemas into dedicated module, following existing provider pattern
- **#80686** — Extend session-write-lock orphan grace from 5s to 30s to prevent false lock drops under CPU pressure
- **#82391** — Warn for stale web search providers in Gateway startup, building on provider selection fixes
- **#82392** — Make Android chat links tappable by preserving Compose URL annotations

## Community Hot Topics

### Most Active Issues (by comment count)

**#78308** — [Feature]: Channel-mediated approval for MCP tool calls (consent envelope) — 10 comments
- Requests extending the existing `/approve <id>` pipeline (currently used for shell-exec) to MCP tool calls
- Would let MCP servers opt into the approval flow by returning a standard envelope from `tools/call`
- 1 👍; reflects demand for safety controls beyond shell execution

**#78016** — Voice messages to agent don't work on Matrix — 9 comments
- Author @frankdierolf reports the agent receives audio but generates a polite but incorrect reply instead of answering the question
- Highlights a gap in cross-platform voice message handling

**#81955** — Injections do not work on 2026.5.12 update (agent using ollama loses persona) — 7 comments, 2 👍
- High-severity regression: agent loses identity after update despite `/context list` showing correct workspace files
- Key thread for maintainers investigating the 2026.5.12 regression wave

**#78461** — Gateway re-scans plugin metadata during model normalization — 7 comments, 3 👍
- Performance issue: `resolveDefaultModelForAgent()` repeatedly calls `loadPluginMetadataSnapshot()` in workspace-scoped gateway runtimes
- Indicates inefficient caching during model alias resolution

**#71412** — stopChannel abort-timeout leaves zombie task in store — 6 comments
- Infrastructure bug: `CHANNEL_STOP_ABORT_TIMEOUT_MS` (5s) timeout creates phantom running state, blocking health-monitor restart
- Last updated today, suggests active investigation

### By Reactions
- **#77576** (Telegram group session responses route to webchat) — 4 👍
- **#80520** (Telegram messages silently dropped) — 3 👍
- **#82150** (DeepSeek V4 via OpenRouter returns 500 on tool call turns) — 3 👍
- **#78885** (MEDIA directive causes duplicate message delivery in webchat) — 3 👍

## Bugs & Stability

### High Severity (crash/fail/data loss)

| Issue | Created | Summary | Fix PR? |
|-------|---------|---------|---------|
| **#82385** | 2026-05-16 | Xiaomi MiMo provider: replay fails with 400 "Param Incorrect" when tool calls present (missing `reasoning_content` field) | None yet |
| **#81955** | 2026-05-14 | Injections broken on 2026.5.12 — agent loses persona with ollama (regression) | None yet |
| **#82274** | 2026-05-15 | Telegram isolated-ingress HOL blocking + Codex app-server stalls mid-turn → 30 min idle timeout | #82378 (merged) |
| **#82343** | 2026-05-15 | Agent sessions using Codex app-server backend timeout (model completes but response never delivered) | None yet |
| **#77930** | 2026-05-05 | Discord channel not loaded in 2026.5.4 (regression matrix shows beta.2→beta.3 broken, beta.1 works) | None yet |
| **#78055** | 2026-05-05 | Subagent announce delivers stale output; subagent sessions inherit unrelated history (data leakage) | None yet |

### Medium Severity (behavioral regressions)

- **#82150** — DeepSeek V4 via OpenRouter: empty `reasoning_content` field injected into tool-call assistant messages causes HTTP 500 (closed)
- **#81934** — Multiple critical failures on macOS after 2026.5.12: Gmail sending, Dropbox terminal access, PDF generation
- **#81902** — Google API 429 rate limits swallowed and misclassified as timeouts due to regex and idle timer race
- **#82069** — openai-codex OAuth refresh still 401 `token_expired` on v2026.5.14-beta.1 (post-#80738 fix)
- **#82239** — Telegram partial streaming finalizes to truncated reply despite full transcript (closed)
- **#79752** — Discord HTTP responses fail with `Unexpected token '\u001f'` — gzip not decompressed under Node v26 on macOS (Node.js upgrade breakage)

### Infrastructure & Tooling

- **#79375** — Upgrade leaves stale user-level systemd unit; dueling services kill each other on Linux
- **#79308** — Telegram group replies sent to wrong chat_id (DM instead of group)
- **#77576** — Telegram group session responses route to webchat instead of back to Telegram
- **#77733** — Bare `/new` and `/reset` no longer trigger persona greeting (regression vs 4.x)

## Feature Request Clusters

### MCP Tool Approval Pipeline
- **#78308** requests extending the `/approve <id>` channel-mediated approval system to MCP tool calls
- Related: **#77202** requests live tool-call progress for Signal channel using edit-free send-and-delete pattern
- Cluster indicates user demand for better tool-call visibility and safety controls across all channels

### Internationalization & Localization
- **#79458** requests i18n fields for slash command descriptions (Chinese users see English-only descriptions)
- The `v2026.5.16-beta.1` release includes CLI/onboarding localization for English and Simplified Chinese
- **#71301** requests version-matched bundled docs + native agent retrieval for agent-guided onboarding (multilingual implications)

### Upload & File Handling
- **#71142** requests configurable upload size limit for Control UI (currently hardcoded 5MB limit)
- **#78885** reports MEDIA directive causes duplicate message delivery in webchat

### Channel-Specific Enhancements
- **#78016** — Voice message support for Matrix
- **#77202** — Live tool-call progress for Signal
- **#77359** — Slash command registration for non-default Discord accounts in multi-bot setups

### No related PRs found for any of the above feature requests.

## User Feedback Summary

**Pain points (high frequency):**
- Telegram delivery is the most common failure theme: messages silently dropped (#80520), wrong chat_id (#79308), truncated streaming (#82239), group-to-webchat routing (#77576), forum topic processing (#81530)
- Multiple regressions from the 2026.5.12 update: injection/persona loss (#81955), Codex app-server stalls (#82274, #82343), macOS critical failures (#81934)
- OAuth refresh failures across multiple providers: openai-codex (#82069), MiniMax Portal (#77467)
- Node.js v26 compatibility breakage (gzip decompression) affecting Discord and potentially other HTTP-based channels (#79752)
- Subagent memory/data contamination: stale announcements delivered (#78055), narrative session cleanup leaves residue (#77723)
- Control UI stalls and CSP issues: chat stuck in busy state (#78362, #42258), polling after provider 429 (#79803)

**Satisfaction signals:**
- Rapid fix cycle: xAI Grok OAuth PR merged same day (#82362)
- Community actively reporting with detailed reproduction steps and regression matrices
- Multiple PRs from maintainers addressing long-standing Telegram bugs (batch fix PR #42059 remains open but actively updated)

## Backlog Watch

**Long-unanswered important issues needing maintainer attention:**

| Issue | Age | Summary | Last Maintainer Activity |
|-------|-----|---------|--------------------------|
| **#36614** | Mar 5 (72 days) | `per-channel-peer`: `updateLastRoute` still contaminates main session with channel-specific delivery context | No recent maintainer comment |
| **#68751** | Apr 19 (27 days) | `session-memory`: raw prior-session turns replay as current input on `/reset` (autonomous re-execution) | No recent maintainer comment |
| **#69492** | Apr 20 (26 days) | `system-event-shape` consumer-path leakage; proposes per-event audience classification | Last updated Apr 26, no maintainer response |
| **#71301** | Apr 25 (21 days) | Ship version-matched bundled docs + native docs retrieval for agent-guided onboarding | No recent maintainer comment |
| **#68209** | Apr 17 (29 days) | Model switch from `openai-codex/gpt-5.4` to `codex/gpt-5.4` triggers runaway context growth | No recent maintainer comment |
| **#70164** | Apr 22 (24 days) | WebSocket dialogue output skips events, directly outputs `state:final` (Chinese-language report) | No recent maintainer comment |

**Long-open PRs:**
- **#42059** — Batch fix 13 Telegram channel bugs (open since Mar 10, 67 days, needs behavior proof)
- **#42122** — Speed up install smoke Docker builds (open since Mar 10, last updated today but no merge)
- **#42223** — Fix sidebar tree collapse (open since Mar 10)
- **#42361** — Include URL and error reason in `web_fetch` network failure messages (open since Mar 10)
- **#47365** — Default log timestamps to local timezone (open since Mar 15, 62 days, last updated today)

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-05-16

## 1. Daily Cross-Project Overview

Today saw the highest activity from **OpenClaw**, with over 500 issues and 500 pull requests touched and two beta releases shipped—though the open-to-closed ratio remains high. **NanoBot** closed 52 issues in a documentation and translation sprint while merging 15 PRs covering new agent features, security fixes, and performance improvements. **ZeroClaw** focused on security hardening (session ownership, tool approval UI) and SOP infrastructure, merging 4 PRs and closing 9 issues. **PicoClaw** merged 19 community-driven pull requests, including fixes for MiMo reasoning, MCP integration, and a nightly build release. Across projects, common threads appeared around Xiaomi MiMo reasoning fixes, security hardening, and localization efforts.

## 2. Activity Comparison

| Project     | Issues Updated (Open/Closed) | PRs Updated (Open/Merged) | Releases Today | Notable Activity |
|-------------|------------------------------|---------------------------|----------------|------------------|
| **OpenClaw**   | 500 total (458 open, 42 closed) | 500 total (473 open, 27 merged) | v2026.5.16-beta.1, v2026.5.14-beta.2 | High open-to-closed ratio; two beta releases; heavy Telegram bug reporting |
| **NanoBot**    | 57 total (5 open, 52 closed)    | 20 total (5 open, 15 merged)   | None           | Documentation sprint (28 issues closed by @xianqiangfu); LongTaskTool and /goal features merged |
| **ZeroClaw**   | 23 total (14 open, 9 closed)    | 50 total (46 open, 4 merged)   | None           | Security hardening (session ownership, allowed_Path fix); SOP audit gaps opened |
| **PicoClaw**   | 11 total (9 open, 2 closed)     | 32 total (13 open, 19 merged)  | v0.2.8-nightly.20260516 | Community-driven fixes for MiMo reasoning, MCP, Matrix filter; nightly release |

## 3. OpenClaw Compared With Peers

**Activity Volume**: OpenClaw’s raw counts (500 issues, 500 PRs) are an order of magnitude higher than the next busiest project (ZeroClaw at 50 PRs). This reflects both a larger user base and a higher rate of incoming bug reports—over 400 open issues remain unclosed.

**Technical Focus**: OpenClaw is dominated by **integration debugging and regression management**—Telegram delivery bugs, Codex app-server stalls, and fallout from the 2026.5.12 update. In contrast, NanoBot and PicoClaw shipped new agent features (LongTaskTool, native audio input) and security fixes, while ZeroClaw emphasised **infrastructure hardening** (SOP audit, session ownership, CI freshness).

**Community Surface Area**: OpenClaw issues attract many comments (e.g., #78308 with 10 comments, #81955 with 7) and reactions (multiple issues with 3–4 👍). This suggests a broader and more vocal user base. NanoBot and PicoClaw have fewer but often highly detailed bug reports; ZeroClaw’s community feedback is more concentrated on specific feature requests and SOP gaps.

**Release Cadence**: Only OpenClaw and PicoClaw cut releases today—OpenClaw’s two betas are tied to ongoing regressions, while PicoClaw’s nightly build continues its automated schedule. NanoBot and ZeroClaw had no releases.

## 4. Shared Technical Focus Areas

- **Xiaomi MiMo Reasoning Handling**
  - **OpenClaw**: Issue #82385 – MiMo replay fails with “Param Incorrect” when `reasoning_content` missing.
  - **ZeroClaw**: Issue #6672 (S0) – `reasoning_content` not forwarded in agentic tool-call loops.
  - **PicoClaw**: PRs #2741 and #2862 – parse `reasoning_content` in streaming and align replay rules.
  - *Observation*: All three projects are actively patching different manifestations of the same MiMo `reasoning_content` problem.

- **Security Hardening**
  - **OpenClaw**: PR #82393 (warn for stale web search providers) – minor security hygiene.
  - **NanoBot**: PR #3842 – confine local media attachments to workspace (prevents path escalation); PR #3789 – Feishu filename sanitization.
  - **ZeroClaw**: Issue #5533 (S0) – `allowed_Path` contains logic fixed; Issue #5833 – session ownership model for destructive tools; PR #5779 – TOTP-gated shell commands.
  - **PicoClaw**: PR #2877 – optional Tirith pre-exec scanning for shell commands.
  - *Observation*: Security fixes appeared in all four projects, with ZeroClaw and NanoBot addressing the most critical vulnerabilities (path escalation, session contamination).

- **Localization / Internationalization**
  - **OpenClaw**: v2026.5.16-beta.1 includes CLI/onboarding localization for English and Simplified Chinese.
  - **NanoBot**: 28 documentation issues closed in a Chinese translation sprint by @xianqiangfu.
  - **ZeroClaw**: Issue #6670 – localize skills install output with Fluent (PR #6674 open).
  - *Observation*: All three projects that had active localization work today are targeting Chinese-language users, indicating a cross-project push for Simplified Chinese support.

- **Tool Approval & Visibility**
  - **OpenClaw**: Issue #78308 – channel-mediated approval for MCP tool calls (consent envelope).
  - **ZeroClaw**: Issue #6522 – web chat tool approval UI for supervised mode (closed today).
  - *Observation*: Two projects are independently implementing user-approval flows for tool execution, suggesting a common user demand for safety controls beyond shell-exec approval.

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | ZeroClaw | PicoClaw |
|-----------|----------|---------|----------|----------|
| **Primary Focus** | Core reference; bug fixing & channel integration | Agent features & documentation | Infrastructure, security, SOP | Embedded/edge deployment; reasoning fixes |
| **Target User** | Developers & power users running self-hosted agents | Tinkerers & small-team deployers | Enterprise-like deployments requiring audit/security | Mobile & resource-constrained users (Android, Sipeed hardware) |
| **Release Cadence** | Frequent betas with regression-driven fixes | Feature-driven, less frequent | No release this period; PR-driven | Nightly automated builds |
| **Community Contribution Model** | High volume of bug reports; low PR merge rate (27/500) | Moderate; documentation sprint from one contributor | Moderate; many open PRs (46) with some needing author action | High merge rate (19/32 PRs); community fixes dominate |
| **Technical Architecture Emphasis** | Plugin/extension heavy (channels, SDK, MCP) | Meta-agent tools (LongTaskTool, goal), WebUI | Skills ecosystem, Fluent i18n, CI automation | Edge optimization, reasoning streaming, Matrix/LM Studio |

## 6. Community Activity Notes

- **Highest activity**: **OpenClaw** (500+ issues and PRs, two releases). However, the high open-to-closed ratio (458 open issues, 473 open PRs) indicates a triage bottleneck or rapid incoming bug volume.
- **Moderate activity**: **ZeroClaw** (50 PRs, 23 issues, no release) and **PicoClaw** (32 PRs, 11 issues, nightly release). Both show balanced open/closed ratios.
- **Lower activity but high completion**: **NanoBot** (57 issues, 52 closed; 20 PRs, 15 merged). The documentation sprint drove a high closure rate.
- **Release activity**: Only OpenClaw and PicoClaw produced downloadable artifacts today; NanoBot and ZeroClaw did not tag any release.
- **Security urgency**: ZeroClaw and NanoBot closed S0 security bugs today (allowed_Path, media path escalation); OpenClaw and PicoClaw did not report security-critical fixes.
- **Community contribution**: PicoClaw and NanoBot had the highest ratio of merged PRs from non-maintainers (implied by descriptions of “community contributions” and the dedicated documentation sprint). ZeroClaw’s open PR list (46) suggests many externally contributed but pending review.

## 7. Evidence-Backed Observations

1. **MiMo reasoning issues are a cross-project pain point.** OpenClaw (#82385), ZeroClaw (#6672), and PicoClaw (#2741/#2862) all addressed failures related to Xiaomi’s `reasoning_content` field today. The variety of symptoms (replay failures, missing forwarding, stream parsing) indicates that the MiMo provider’s format is not consistently handled across the ecosystem.

2. **Security hardening is accelerating across the ecosystem, not concentrated in any single project.** Both NanoBot (media path escalation fix) and ZeroClaw (allowed_Path contains logic fix) closed S0-severity security bugs today. OpenClaw and PicoClaw also shipped security-related improvements (stale provider warnings, Tirith scanning). This suggests a coordinated or independent prioritisation of security.

3. **Localization for Chinese users is a concrete cross-project initiative.** OpenClaw shipped bilingual CLI, NanoBot translated 28 documentation items, and ZeroClaw prototyped Fluent-based localization for skill output. All three efforts target Simplified Chinese specifically, with no evidence of similar work for other languages.

4. **Regressions from recent updates are most visible in OpenClaw, but not exclusive to it.** OpenClaw’s 2026.5.12 update triggered multiple reports (injection/persona loss, Codex stalls, macOS failures). PicoClaw’s Android v0.2.8 nightly also broke tab access (#2744). The other projects did not report regression waves today, possibly due to lower release frequency.

5. **Tool approval flows are emerging independently in OpenClaw (MCP consent) and ZeroClaw (web chat UI).** Both proposals aim to give users control over tool execution beyond the existing shell-exec approval pipeline. The similarity in timing and lack of cross-reference suggests parallel demand rather than shared design.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest – 2026-05-16**

---

## 1. Today's Activity Brief
In the last 24 hours, 57 issues were updated (5 open, 52 closed) and 20 pull requests were updated (5 open, 15 merged/closed). A major documentation and code annotation sprint by contributor @xianqiangfu drove the bulk of closed issues: 28 issues covering architecture docs, diagrams, Chinese translations, and best-practice guides were all completed. On the code side, several bug fixes and features landed, including WebUI rendering optimizations, a new `LongTaskTool`, gateway lifecycle notifications, and security hardening for media attachments. No new releases were published.

---

## 2. Releases
*None in this period.*

---

## 3. Project Progress (Merged/Closed PRs)
The following PRs were merged or closed in the last 24 hours (15 total). Highlights by category:

**Features**
- [#3460 - `LongTaskTool`](https://github.com/HKUDS/nanobot/pull/3460): Multi-step agent tasks via a meta-ReAct loop.
- [#3788 - `/goal` command & long-running tasks](https://github.com/HKUDS/nanobot/pull/3788): Chat-scoped sustained goal state with WebUI integration.
- [#3373 - Gateway lifecycle hooks (on_start/on_stop)](https://github.com/HKUDS/nanobot/pull/3373) & [#3792 - Feishu implementation](https://github.com/HKUDS/nanobot/pull/3792): Notify users when gateway starts/stops.
- [#3774 - Chat-native DM sender approval](https://github.com/HKUDS/nanobot/pull/3774): Pairing flow for private-assistant deployments.

**Bug Fixes**
- [#3782 - WebUI markdown preload fix](https://github.com/HKUDS/nanobot/pull/3782): Removed eager preload of a >1MB rendering chunk that caused startup slowdowns.
- [#3793 - Codex prompt cache key stabilization](https://github.com/HKUDS/nanobot/pull/3793): Fixed per-turn hash causing cache misses across follow-up turns (fixes #2440).
- [#3840 - Brave search rate limit backoff](https://github.com/HKUDS/nanobot/pull/3840): Retries on HTTP 429 with a 1s delay.
- [#3734 - MiMo thinking control](https://github.com/HKUDS/nanobot/pull/3734): Allows disabling reasoning by setting `reasoning_effort: "none"`.
- [#3752 - Voice transcription media_paths cleanup](https://github.com/HKUDS/nanobot/pull/3752): Prevents leftover .ogg file paths from confusing the LLM.
- [#3764 - Shell UNC path support](https://github.com/HKUDS/nanobot/pull/3764): Properly handles `\\server\share` paths on Windows.
- [#3844 - Cache stability via runtime context placement](https://github.com/HKUDS/nanobot/pull/3844): Appends runtime context (time, channel) after user content to improve KV cache hit rates.

**Security**
- [#3842 - Confine local media attachments](https://github.com/HKUDS/nanobot/pull/3842): `message(media=...)` now expands paths safely under workspace restriction (fixes an LLM-controlled path escalation).
- [#3789 - Feishu media filename sanitization](https://github.com/HKUDS/nanobot/pull/3789): Prevents provider-returned filenames from being interpreted as filesystem paths.

**Refactoring / Tooling**
- [#3841 - Remove GlobTool](https://github.com/HKUDS/nanobot/pull/3841): Standalone glob tool removed; `GrepTool.glob` parameter already covers file-name filtering.

**Documentation / Contributing**
- [#3850 - `ruff format` warning](https://github.com/HKUDS/nanobot/pull/3850): Added note that the codebase predates the formatter; new contributors should use scoped formatting.

---

## 4. Community Hot Topics
- **#3790 [BUG] WebUI session display corruption** – 9 comments
  User reports that after updating to the latest source (2026-05-13), printed WebUI session content becomes garbled until a page refresh. No fix PR has been linked yet.
  [Issue link](https://github.com/HKUDS/nanobot/issues/3790)

- **#2172 [Feature] Support secret references instead of plaintext** – 4 comments
  Suggests reading secrets from file/exec/environment to avoid storing them in `config.json`. Still open; no associated PR.
  [Issue link](https://github.com/HKUDS/nanobot/issues/2172)

- **#3848 [BUG] WebUI render bug** – 1 comment (closed)
  Appears to be a duplicate/related rendering issue that was quickly closed.
  [Issue link](https://github.com/HKUDS/nanobot/issues/3848)

> All other top-comment issues (28 issues) were part of the documentation sprint by @xianqiangfu and were completed on the same day; they are not generating ongoing discussion.

---

## 5. Bugs & Stability
| Issue | Severity | Status | Related Fix |
|-------|----------|--------|-------------|
| **#3790 – WebUI session display corruption** | High – breaks core chat experience, requires manual refresh | **Open** | None yet |
| **#3848 – WebUI render bug** | Medium – similar symptom | Closed | Likely resolved by #3782 (markdown preload fix) |
| **#2440 – Codex prompt cache key instability** | Medium – degrades performance in multi-turn conversations | Closed | Fixed by #3793 |
| **#3752 – Voice transcription leftover media_paths** | Low – confuses LLM but transcription already succeeded | Closed | Fixed by #3752 |
| **#3842 – Media attachment path escalation** | **Security** – allowed LLM-controlled access beyond workspace in restricted deployments | Closed | Fixed by #3842 |
| **#3789 – Feishu media filename injection** | **Security** – provider-returned filename could be misinterpreted as path | Closed | Fixed by #3789 |
| **#2560 – Brave search rate limits** | Low – intermittent 429 errors | Closed | Fixed by #3840 |
| **#3764 – Shell UNC path extraction** | Low – Windows-specific path handling bug | Closed | Fixed by #3764 |

---

## 6. Feature Request Clusters
- **Agent task decomposition**
  Two PRs landed: `LongTaskTool` (#3460) and `/goal` command (#3788). Another PR is still open: `plan` tool (#3791) for explicit planning with progress tracking. These together address user demand for long-running, multi-step agent workflows.

- **Gateway lifecycle notifications**
  Requested in #3279, implemented in #3373 (generic) and #3792 (Feishu-specific), both merged today.

- **Secret management**
  #2172 (open) requests reading secrets from external sources. No PR yet; comments indicate ongoing design discussion.

- **Provider integrations**
  [#3785 (open)](https://github.com/HKUDS/nanobot/pull/3785) adds OpenCode Go gateway support for multiple Chinese LLM providers.
  [#3851 (open)](https://github.com/HKUDS/nanobot/pull/3851) wires MiMo thinking control through gateway providers.

- **Skill content persistence**
  [#3847 (open)](https://github.com/HKUDS/nanobot/pull/3847) introduces a `skill_load` tool to prevent skill.md content from being lost across turns. Addresses a reported pain point in multi-turn conversations.

---

## 7. User Feedback Summary
- **Positive**: The documentation sprint (28 issues) and Chinese localization effort were well received; many issues were closed quickly after creation.
- **Pain points**:
  - **WebUI display corruption** (#3790) after the 2026-05-13 build frustrates users because the fix is not yet merged.
  - **Security concerns** about plaintext secrets (#2172) continue to be discussed, though no actionable PR exists.
  - **Brave rate limits** (#2560) caused silent failures during tool calls; now fixed.
  - **Windows UNC paths** (#3764) broke shell tool execution for some enterprise users; now fixed.
  - **Voice transcription artifacts** (#3752) confused users into thinking the LLM couldn’t process audio; now fixed.
- **Feature requests** around planning/long tasks and gateway lifecycle hooks were promptly implemented, indicating responsive maintainers.

---

## 8. Backlog Watch
- **#2172 – Secret references** (created 2026-03-17, updated 2026-05-15)
  Remains open with 4 comments. No assignee and no PR. Given the security implications and the fact that other security fixes (media confinement) were prioritized, this may need a maintainer to determine the design scope.
  [Issue link](https://github.com/HKUDS/nanobot/issues/2172)

- **#3790 – WebUI display corruption** (created 2026-05-14, updated 2026-05-15)
  The only high-severity open bug. No fix yet; a PR should be expected soon as the project is actively maintained.
  [Issue link](https://github.com/HKUDS/nanobot/issues/3790)

> No other issues or PRs in the provided data appear to have been left unanswered for an extended period. All other open items (5 issues total) are either very recent or are feature requests with ongoing discussion.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest – 2026-05-16

## 1. Today's Activity Brief

In the last 24 hours, 23 issues were updated (14 currently open/active, 9 closed) and 50 pull requests were touched (46 open, 4 merged/closed). No new releases were cut. Activity concentrated on security hardening (session ownership model, TOTP-gated commands), CI reliability (fresh PR checks, advisory updates), skills infrastructure (Fluent localization, cooldown enforcement, ClawHub async fix), and standard operating procedures (SOP) audit gaps. Several high-severity bugs were closed, including a security-sensitive `allowed_Path` logic flaw and a Docker bind‑mount shadowing issue, while new S0/S1 bugs were opened around Anthropic API tool naming and Xiaomi thinking‑mode reasoning loss.

## 2. Releases

None.

## 3. Project Progress

Four PRs were merged or closed today. The only visible merged/closed PR from the top‑20 list is:

- **[#6525 – fix(matrix): avoid threading root timeline messages](https://github.com/zeroclaw-labs/zeroclaw/pull/6525)**: Matrix root timeline messages no longer auto‑open threads; existing `m.thread` roots are preserved.

The remaining nine closed issues (see Bugs & Stability) were resolved, many with associated fix PRs not shown in the top‑20 PR list. Notable closed issues:

- **[#6679 – bug(ci): require fresh PR checks before merging stale branches](https://github.com/zeroclaw-labs/zeroclaw/issues/6679)** – CI hardening.
- **[#5533 – [Bug]: allowed_Path doesn’t respect contains logic](https://github.com/zeroclaw-labs/zeroclaw/issues/5533)** – S0 security fix.
- **[#6400 – Docker bind mount shadows pre‑built web dashboard](https://github.com/zeroclaw-labs/zeroclaw/issues/6400)** – S2 degraded behaviour.
- **[#6402 – bash completion infinite recursion](https://github.com/zeroclaw-labs/zeroclaw/issues/6402)** – S2 crash.
- **[#6522 – Web chat: tool approval UI for supervised mode](https://github.com/zeroclaw-labs/zeroclaw/issues/6522)** – closes feature request.

## 4. Community Hot Topics

Two issues drew the most comments today:

- **[#5833 – feat(tools): session ownership model for destructive operations](https://github.com/zeroclaw-labs/zeroclaw/issues/5833)** (4 comments, closed today). This enhancement adds per‑agent session key scoping to prevent agents from resetting or deleting other agents’ sessions. It addresses a security gap with `SessionResetTool` / `SessionDeleteTool`.

- **[#5316 – [Feature]: Propose SearXNG search support and improve Web Search robustness](https://github.com/zeroclaw-labs/zeroclaw/issues/5316)** (3 comments, still open). The user requests a privacy‑focused search provider and CAPTCHA detection for DuckDuckGo. It remains open with “help wanted” and “needs‑maintainer‑review” labels.

The **v0.7.6 skills tracker** [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) (open, 1 comment) is gathering community input on CLI, audit, install, and authoring tool improvements.

## 5. Bugs & Stability

**Open bugs (ranked by reported severity):**

| Severity | Issue | Summary |
|----------|-------|---------|
| **S0 – data loss / security risk** | [#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) | `reasoning_content` not forwarded in agentic tool‑call loops with Xiaomi thinking‑mode models (mimo‑v2.5). **No fix PR yet.** |
| **S1 – workflow blocked** | [#6681](https://github.com/zeroclaw-labs/zeroclaw/issues/6681) | `zeroclaw skills install clawhub:*` panics due to `reqwest::blocking` dropped inside `#[tokio::main]`. **PR [#6682](https://github.com/zeroclaw-labs/zeroclaw/pull/6682) open.** |
| **S2 – degraded behaviour** | [#6678](https://github.com/zeroclaw-labs/zeroclaw/issues/6678) | Skill tools rejected by Anthropic API – tool names violate `^[a-zA-Z0-9_-]{1,128}$` because of `format!("{}.{}", ...)`. No fix PR yet. |
| S2 | [#6689](https://github.com/zeroclaw-labs/zeroclaw/issues/6689) | Production SOP audit is silently no‑op – documented Memory keys are never written. |
| S2 | [#6687](https://github.com/zeroclaw-labs/zeroclaw/issues/6687) | Two independent `SopEngine` instances per daemon – MQTT‑started runs invisible to agent `sop_status`. |
| S2 | [#6686](https://github.com/zeroclaw-labs/zeroclaw/issues/6686) | SOP cron triggers have no production caller – `check_sop_cron_triggers` never runs. |
| S2 | [#6685](https://github.com/zeroclaw-labs/zeroclaw/issues/6685) | SOP HTTP fan‑in (`POST /sop/*` and `/webhook` fallback) is documented but not wired. |
| S2 | [#6683](https://github.com/zeroclaw-labs/zeroclaw/issues/6683) | `skill_manage patch` ignores cooldown – unbounded patches possible. **PR [#6684](https://github.com/zeroclaw-labs/zeroclaw/pull/6684) open.** |
| S3 | [#6654](https://github.com/zeroclaw-labs/zeroclaw/issues/6654) | Cron read‑only queries still hit writable schema‑ensure path. (closed today) |
| – | [#6691](https://github.com/zeroclaw-labs/zeroclaw/issues/6691) | RUST_LOG docs use stale filter targets (doc bug, S2). |

**Closed bugs today:** [#5533](https://github.com/zeroclaw-labs/zeroclaw/issues/5533) (S0), [#6679](https://github.com/zeroclaw-labs/zeroclaw/issues/6679) (S2), [#6400](https://github.com/zeroclaw-labs/zeroclaw/issues/6400) (S2), [#6402](https://github.com/zeroclaw-labs/zeroclaw/issues/6402) (S2), [#6657](https://github.com/zeroclaw-labs/zeroclaw/issues/6657) (advisory scan vulnerability).

## 6. Feature Request Clusters

- **Security & access control:**
  - [#5833](https://github.com/zeroclaw-labs/zeroclaw/issues/5833) (closed): Session ownership model for destructive tools.
  - PR [#5779](https://github.com/zeroclaw-labs/zeroclaw/pull/5779) (open, needs‑author‑action): TOTP gate for specific shell commands (gated_commands).
  - [#6522](https://github.com/zeroclaw-labs/zeroclaw/issues/6522) (closed): Web chat tool approval UI for supervised mode.

- **Search & web tool robustness:**
  - [#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) (open): SearXNG support + DuckDuckGo CAPTCHA detection.

- **Skills ecosystem:**
  - [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) (open): v0.7.6 skills support tracker (CLI, loader, audit, install).
  - [#6670](https://github.com/zeroclaw-labs/zeroclaw/issues/6670) (open): Localize skills install output with Fluent – PR [#6674](https://github.com/zeroclaw-labs/zeroclaw/pull/6674) open.
  - [#6683](https://github.com/zeroclaw-labs/zeroclaw/issues/6683) (open): Cooldown enforcement for skill patches – PR [#6684](https://github.com/zeroclaw-labs/zeroclaw/pull/6684) open.

- **Observability:**
  - [#6669](https://github.com/zeroclaw-labs/zeroclaw/issues/6669) (open): Audit observability backends for split‑instance metric/trace sinks.
  - PR [#6553](https://github.com/zeroclaw-labs/zeroclaw/pull/6553) (open): Restore SSE `/logs` stream, add build‑stamped version and health pulse.

- **Channel addition:**
  - PR [#6680](https://github.com/zeroclaw-labs/zeroclaw/pull/6680) (open): WeCom AI Bot WebSocket channel.

## 7. User Feedback Summary

Several concrete pain points were reported:

- **@lucasjinreal** ([#5533](https://github.com/zeroclaw-labs/zeroclaw/issues/5533)): `allowed_Path` does not respect subdirectory contains logic – fixed today.
- **@rikwade** ([#6400](https://github.com/zeroclaw-labs/zeroclaw/issues/6400)): Docker bind mount at `/zeroclaw-data` shadows the web dashboard – fixed.
- **@Nillth** ([#6402](https://github.com/zeroclaw-labs/zeroclaw/issues/6402)): Bash completion infinite recursion crashes SSH sessions – fixed.
- **@babaksh** ([#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672)): `reasoning_content` not forwarded in agentic loops with Xiaomi mimo models – **open, S0 severity** (data loss).
- **@KundKMC** ([#6678](https://github.com/zeroclaw-labs/zeroclaw/issues/6678)): Skill tool names rejected by Anthropic API – agent loop fails with 400.
- **@NiuBlibing** ([#6681](https://github.com/zeroclaw-labs/zeroclaw/issues/6681)): `zeroclaw skills install clawhub:*` panics – workflow blocked.
- **@JordanTheJet** ([#6683](https://github.com/zeroclaw-labs/zeroclaw/issues/6683), [#6685](https://github.com/zeroclaw-labs/zeroclaw/issues/6685), [#6686](https://github.com/zeroclaw-labs/zeroclaw/issues/6686), [#6687](https://github.com/zeroclaw-labs/zeroclaw/issues/6687), [#6689](https://github.com/zeroclaw-labs/zeroclaw/issues/6689)): Five SOP‑related gaps – documented features not wired, cooldown not enforced, silent no‑ops. Reported same day.
- **@drbparadise** ([#6654

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest – 2026-05-16

## Today's Activity Brief
PicoClaw saw elevated activity with **32 pull requests updated** (19 merged/closed, 13 open) and **11 issues updated** (9 open/active, 2 closed) in the past 24 hours. A new **nightly build v0.2.8-nightly.20260516** was released automatically. Community contributions dominated the day: fixes landed for OpenAI-compatible reasoning streaming, MiMo multi-turn thinking, Matrix channel `allow_from` filter, and the `exec` guard path scanner. A new security scanning integration (Tirith) was proposed. Several long-standing bugs around voice transcription and Android configuration remain open.

## Releases
- **Nightly Build v0.2.8-nightly.20260516.0df050ff** ([Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.8...main))
  An automated nightly build, may be unstable. No breaking changes or migration notes documented.
  *Download:* https://github.com/sipeed/picoclaw/releases/tag/nightly

## Project Progress (Merged/Closed PRs in Past 24h)
Of the 19 merged/closed PRs, the most significant include:

- [#2862 – fix(openai_compat): align MiMo reasoning replay with DeepSeek](https://github.com/sipeed/picoclaw/pull/2862) — Resolves multi-turn thinking failures for Xiaomi MiMo and similar providers by reusing the canonical reasoning history rules.
- [#2741 – fix(openai_compat): parse reasoning_content in streaming responses](https://github.com/sipeed/picoclaw/pull/2741) — Accumulates `reasoning_content` deltas during SSE parsing, needed for DeepSeek and MiMo thinking models.
- [#2811 – fix(mcp): support streamable HTTP alias, request-response mode and integration tests](https://github.com/sipeed/picoclaw/pull/2811) — Adds a generalized Docker-backed integration test framework and improves MCP transport configuration.
- [#2874 – fix(pico): preserve image media across pico attachments and client](https://github.com/sipeed/picoclaw/pull/2874) — Ensures inline images from `media` and structured `attachments` are forwarded correctly in the pico client.
- [#2626 – feat(agent): support native audio input for multimodal LLMs](https://github.com/sipeed/picoclaw/pull/2626) — Adds `Audio` field to protocol messages, enabling native support for Gemini 1.5 and similar.
- [#2766 – docs: sync all documentation to V3 config format](https://github.com/sipeed/picoclaw/pull/2766) — Updates 26 files to match the V3 schema (`api_key` → `api_keys`, `channels` → `channel_list`, version 2→3).
- [#2270 – fix(config): handle non-addressable SecureString values in collectSensitive](https://github.com/sipeed/picoclaw/pull/2270) — Fixes a panic when iterating over map values containing `SecureString`.

Additional open PRs that advanced significantly (not yet merged):
- [#2877 – feat(security): add optional tirith pre-exec scanning](https://github.com/sipeed/picoclaw/pull/2877) — New feature to scan shell commands with the Tirith terminal scanner.
- [#2879 – fix(config): make load_image configurable](https://github.com/sipeed/picoclaw/pull/2879) — Addresses today’s bug [#2878](https://github.com/sipeed/picoclaw/issues/2878) by adding a dedicated config branch for `load_image`.

## Community Hot Topics
- [#28 – Feat Request: LM Studio Easy Connect](https://github.com/sipeed/picoclaw/issues/28)
  **Comments: 19 | 👍: 2**
  User requests a simplified way to connect PicoClaw to LM Studio. No maintainer response visible in summary; the request has been open since February 2026 and is tagged stale. The underlying need is for seamless local model setup, especially on Android.

- [#1042 – [BUG] exec工具的guardCommand方法问题](https://github.com/sipeed/picoclaw/issues/1042)
  **Comments: 11 | 👍: 2**
  Detailed analysis of the `exec` tool’s safety guard incorrectly blocking commands like `curl` due to regex matching relative paths. A fix PR [#2814](https://github.com/sipeed/picoclaw/pull/2814) is open and addresses the root cause.

- [#2706 – Deepseek v4 thinking model问题](https://github.com/sipeed/picoclaw/issues/2706)
  **Comments: 4 | 👍: 1** (Closed)
  Reported that DeepSeek v4 thinking mode fails because `reasoning_content` is not saved/replayed. The fix was merged via [#2741](https://github.com/sipeed/picoclaw/pull/2741), which also resolved similar issues for MiMo.

- [#2820 – Support non-destructive fresh-session reset without deleting Seahorse history](https://github.com/sipeed/picoclaw/issues/2820)
  **Comments: 1 | 👍: 1**
  User wants a `/clear` alternative that resets conversation state without wiping the SQLite-backed session history. No maintainer response yet.

## Bugs & Stability
Several bugs were reported or updated today, with some having fix PRs already proposed:

| Issue | Summary | Severity | Fix PR |
|-------|---------|----------|--------|
| [#2878 – load_image无法在config.json中配置](https://github.com/sipeed/picoclaw/issues/2878) | Tool registration bypassed config check; `load_image` always enabled | Medium – breaks user intent | [#2879](https://github.com/sipeed/picoclaw/pull/2879) (open) |
| [#2817 – Voice transcription succeeds but transcript not passed to LLM](https://github.com/sipeed/picoclaw/issues/2817) | Transcribed text not substituted; model receives `[voice]` instead | High – voice input non-functional | None yet |
| [#2815 – allow_from filter has no effect on Matrix channel](https://github.com/sipeed/picoclaw/issues/2815) | Any non-empty list blocks all messages; only empty allows through | High – security filter broken | [#2827](https://github.com/sipeed/picoclaw/pull/2827) (open) |
| [#2816 – Matrix sender identity not injected into agent context](https://github.com/sipeed/picoclaw/issues/2816) | Agent has no sender info on Matrix messages | Medium – limits per-user logic | None yet |
| [#2744 – Android v0.2.8 cannot access any data from tabs](https://github.com/sipeed/picoclaw/issues/2744) | Data tabs completely inaccessible | High – core broken on Android | None yet |
| [#2859 – MiMo multi-turn conversation failures](https://github.com/sipeed/picoclaw/issues/2859) | After 2-3 rounds, 400 error due to incorrect parameter | Medium | Fixed by [#2862](https://github.com/sipeed/picoclaw/pull/2862) (merged) |
| [#2785 – ToolFeedbackAnimator causes feishu to show only first tool call message](https://github.com/sipeed/picoclaw/issues/2785) | Notification center truncates tool feedback | Low | None yet |

Additional fix PRs for earlier bugs:
- [#2814 – fix(tools): allow relative script paths in exec guard](https://github.com/sipeed/picoclaw/pull/2814) – Addresses [#1042](https://github.com/sipeed/picoclaw/issues/1042).
- [#2822 – fix(subturn): dismiss child tool feedback after sync completion](https://github.com/sipeed/picoclaw/pull/2822) – Fixes lingering tool feedback in session-scoped child agent calls.

## Feature Request Clusters
- **LM Studio / Local Model Connectivity** (#28) – No dedicated PR yet; the community continues to request a one-click connect workflow.
- **Non-Destructive Session Reset** (#2820) – User wants to preserve Seahorse history while clearing active state. No PR yet.
- **Tirith Pre-Exec Scanning** (#2877) – New security feature to scan shell commands for content-level threats before execution.
- **Native Audio Input for Multimodal LLMs** (merged in [#2626](https://github.com/sipeed/picoclaw/pull/2626)) – Now supports Gemini 1.5 audio input.
- **Configurable Tool Feedback Animation** (open PR [#2789](https://github.com/sipeed/picoclaw/pull/2789)) – Allows users to set `animation_interval_secs` for editable tool feedback throttling.

## User Feedback Summary
- **Pain points**
  - Android users report that v0.2.8 cannot open any data tabs (#2744), making the app nearly unusable.
  - Voice input is broken for Groq Whisper users – the transcript is never passed to the LLM (#2817).
  - Matrix users face two blockers: the `allow_from` filter doesn’t work at all (#2815), and sender identity is not injected (#2816).
  - DeepSeek v4 and MiMo thinking models failed until today’s fixes (#2706, #2859).
  - The `exec` tool’s safety guard still has false positives for non-path commands like `curl` (#1042).
  - `load_image` tool is not configurable in `config.json`, forcing it to always be enabled (#2878).

- **Positive signals**
  - The community is actively contributing: 19 PRs merged/closed today, including complex fixes like reasoning streaming and Docker integration tests.
  - Users are politely requesting features (“thank you all for anyone who reads this” – #28) and providing detailed repro steps.
  - Several bug reporters have received fix PRs within hours or days (e.g., MiMo reasoning, Matrix filter).

## Backlog Watch
Issues and PRs that have been open for an extended period without recent maintainer activity or resolution:

- **#28 – LM Studio Easy Connect** (Opened Feb 2026, updated May 15, 19 comments) – No maintainer reply visible. Highly requested but stagnant.
- **#1042 – exec guardCommand false positives** (Opened Mar 2026, 11 comments) – Fix PR [#2814](https://github.com/sipeed/picoclaw/pull/2814) is open but not yet merged; needs review.
- **#2744 – Android v0.2.8 tabs not working** (Opened May 1, updated May 15) – No maintainer response; critical for Android users.
- **#2817 – Voice transcription not passed to LLM** (Opened May 7) – No fix PR yet; high-impact regression.
- **#2662 – Unify vendors table in providers documentation** (Opened Apr 24, updated May 15) – Open PR with no recent feedback.
- **#2239 – modify docker compose with privileged** (Opened Apr 1) – Open PR, stale, needs maintainer guidance.

*Note: The system tags items as `[stale]` after a period of inactivity, but several of these have recent updates from commenters or authors without maintainer response.*

</details>