# OpenClaw Ecosystem Digest 2026-05-08

> Issues: 500 | PRs: 500 | Projects covered: 4 | Generated: 2026-05-08 02:10 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-05-08

## Today's Activity Brief

OpenClaw saw 500 issues and 500 pull requests updated in the last 24 hours, with 309 open and 191 closed issues, and 353 open versus 147 merged/closed PRs. One new release, `v2026.5.7`, shipped with plugin publishing reliability improvements targeting ClawHub CLI dependency retries and preview cell flake handling. A significant cluster of regression reports from users upgrading to `2026.5.4` and `2026.5.5` dominated support activity, particularly around WeChat/Weixin plugin incompatibility, configuration migration side-effects, and gateway connection stability.

## Releases

**v2026.5.7** — `openclaw 2026.5.7`

Fixes:
- Release/plugin publishing: retry transient ClawHub CLI dependency install failures, keep preview-passing plugins publishable when one preview cell flakes, and verify every expected ClawHub package version after publish so maintenance releases are faster to recover and less likely to hit partial-publish states.

No breaking changes or migration notes documented in this release.

## Project Progress

Notable PRs merged or closed today include:

- **Cron silent job false-positive warnings** — [#79078](https://github.com/openclaw/openclaw/pull/79078) fixes cron jobs with `delivery.mode === "none"` producing spurious incomplete-turn warnings when the agent ends with an empty final assistant message.
- **Chinese localization improvements** — Two PRs advanced i18n: [#78994](https://github.com/openclaw/openclaw/pull/78994) (closed) corrected 6 inaccurate glossary translations and added 26 new entries; [#79016](https://github.com/openclaw/openclaw/pull/79016) (closed) added zh-CN support to the CLI setup wizard.
- **Codex app-server defaults** — [#79151](https://github.com/openclaw/openclaw/pull/79151) (open, maintainer-reviewed) fixes Codex requirements for app-server defaults, respecting `/etc/codex/requirements.toml` sandbox mode restrictions.
- **World ID HITL approvals** — [#78583](https://github.com/openclaw/openclaw/pull/78583) (open, XL) adds World AgentKit human-in-the-loop approval for agent tool calls, gating through the existing TUI/chat approval flow.
- **Discord realtime voice modes** — [#79156](https://github.com/openclaw/openclaw/pull/79156) (open, XL) adds Discord voice modes including STT-TTS, talk-buffer, and bidirectional realtime chat.
- **iMessage private-API support** — [#78317](https://github.com/openclaw/openclaw/pull/78317) (open, XL) adds imsg JSON-RPC support for tapbacks, threaded replies, edits, unsend, attachments, and group management.
- **Gateway restart throttle** — [#79181](https://github.com/openclaw/openclaw/pull/79181) fixes an infinite restart loop on Linux when OOM killer terminates the process during sidecar startup, introduced in v2026.4.24+.
- **Plugin convergence before gateway restart** — [#79143](https://github.com/openclaw/openclaw/pull/79143) (open, XL) enforces mandatory post-core plugin convergence (repair/reinstall) before gateway restart during update, preventing split-plugin-state incidents.
- **ClawHub docs tab** — [#79159](https://github.com/openclaw/openclaw/pull/79159) (closed) adds a dedicated ClawHub tab to the Mintlify documentation navigation.

## Community Hot Topics

### Most Active Issues

1. **#9443 — Prebuilt Android APK releases** ([link](https://github.com/openclaw/openclaw/issues/9443)) — 24 comments, 1 👍. A user requests prebuilt APK downloads for the Android companion app, noting the repo contains source code but no compiled releases. The issue indicates a barrier to mobile adoption.

2. **#78407 — `openclaw doctor --fix` rewrites model refs, locks out ChatGPT-OAuth users** ([link](https://github.com/openclaw/openclaw/issues/78407)) — 16 comments, 3 👍. Closed. A migration bug in the 2026.5.4→2026.5.5 update path automatically rewrites `openai-codex/*` model references to `openai/*`, breaking OAuth authentication for ChatGPT users. This received significant user engagement and was resolved.

3. **#65824 — Consolidated feature request bundle (11 items)** ([link](https://github.com/openclaw/openclaw/issues/65824)) — 15 comments, 1 👍. Closed. An intensive daily user audited 11 platform gaps against 2026.4.15, each backed by working workaround scripts. The bundle covers multiple areas, suggesting broad platform maturity needs.

4. **#12602 — Slack Block Kit support** ([link](https://github.com/openclaw/openclaw/issues/12602)) — 13 comments. Users want agents to compose richer Slack messages (CRM summaries, database query results, action confirmations) beyond plain text with markdown.

5. **#10659 — Masked secrets to prevent agent access to raw API keys** ([link](https://github.com/openclaw/openclaw/issues/10659)) — 12 comments, 4 👍. A security-focused request for API keys to be usable by agents but not visible to them, protecting against prompt injection.

6. **#78402 — Gateway repeatedly closes connections due to event-loop starvation** ([link](https://github.com/openclaw/openclaw/issues/78402)) — 11 comments, 2 👍. A regression in 2026.5.5 causes WebSocket disconnections (1000/1005/1006), UI dropouts, and CLI crashes shortly after startup.

### Most Active PRs

Several large PRs (XL size) with maintainer attention and real-behavior proofs attracted community interest: the World ID HITL approvals PR (#78583), Discord realtime voice (#79156), iMessage private-API (#78317), plugin convergence during update (#79143), and the `oc://` path addressing substrate (#78678). These represent significant infrastructure and channel expansion work.

## Bugs & Stability

### Critical Regressions

- **Gateway event-loop starvation (2026.5.5)** — [#78402](https://github.com/openclaw/openclaw/issues/78402) (closed): WebSocket connections fail with codes 1000/1005/1006 after upgrade, caused by stuck tool calls. No dedicated fix PR identified yet.
- **WeChat/Weixin plugin incompatibility (2026.5.4)** — [#78232](https://github.com/openclaw/openclaw/issues/78232) (closed): `channelRuntime` API changes break inbound message processing. Also [#77837](https://github.com/openclaw/openclaw/issues/77837) (closed): Weixin fetch fails after upgrade with `TypeError: fetch failed`.
- **WebChat transcript persistence regression (2026.5.2)** — [#76804](https://github.com/openclaw/openclaw/issues/76804) (closed): Assistant responses streamed to Control UI but not written to session transcript. 5 👍.
- **Non-main agent replies not delivered to channels** — [#77908](https://github.com/openclaw/openclaw/issues/77908) (closed): Replies visible in WebUI but not returned to Telegram topics or Discord channels.
- **Discord message tool fails with "Unknown Channel"** — [#78572](https://github.com/openclaw/openclaw/issues/78572) (closed): Regression in 2026.5.4, Docker environment.

### Performance & Stability

- **High CPU / control-plane RPC latency after 2026.4.29** — [#76562](https://github.com/openclaw/openclaw/issues/76562) (open, 4 👍): CPU pinned near 100%, 10–30s control-plane latency, unstable polling. User identified a `setInterval` replaced by `setTimeout`.
- **Gateway instability under subagent/embedded-run load on Linux** — [#76315](https://github.com/openclaw/openclaw/issues/76315) (open): WhatsApp 408 disconnects, deferred reloads, event-loop stalls.
- **Zombie channel state from `stopChannel` abort-timeout** — [#71412](https://github.com/openclaw/openclaw/issues/71412) (open): Exceeding `CHANNEL_STOP_ABORT_TIMEOUT_MS` leaves channel in a state where restart silently no-ops, preventing health-monitor recovery.
- **Google Gemini models hang/timeout on main sessions** — [#78502](https://github.com/openclaw/openclaw/issues/78502) (open): Gemini 3.1 Pro & 2.5 Pro hang on main sessions but work in subagents and direct API calls. Reproduced on 2026.5.5 and 2026.5.3-1.

### Other Notable Bugs

- **Mistral thinking outputs `[object Object]`** — [#78846](https://github.com/openclaw/openclaw/issues/78846) (closed): All Mistral models produce `[object Object]` in replies and memory. Likely a provider serialization issue.
- **Feishu topic session key mismatch** — [#78262](https://github.com/openclaw/openclaw/issues/78262) (closed): First message uses `messageId`, subsequent messages use `thread_id`, causing session splitting.
- **Bedrock ExpiredTokenException after credential refresh** — [#77551](https://github.com/openclaw/openclaw/issues/77551) (closed): Regression in v2026.5.3 where gateway no longer picks up refreshed AWS credentials.
- **Grok context usage shows `?/1.0m`** — [#77525](https://github.com/openclaw/openclaw/issues/77525) (closed): xAI Grok models show unknown context usage while other providers show accurate numbers.
- **Auth router ignores provider entry's `apiKey` field** — [#67423](https://github.com/openclaw/openclaw/issues/67423) (open): For split provider entries sharing the same upstream endpoint, wrong API key is selected.

### Fix PRs in Flight

Several fix PRs address related stability issues: [#79181](https://github.com/openclaw/openclaw/pull/79181) (gateway restart throttle), [#77848](https://github.com/openclaw/openclaw/pull/77848) (provider resolution cache scoping), [#75524](https://github.com/openclaw/openclaw/pull/75524) (stripping trailing empty assistant turns before fallback), [#75525](https://github.com/openclaw/openclaw/pull/75525) (excluding tool result details from guard budget), and [#75523](https://github.com/openclaw/openclaw/pull/75523) (keeping metadata hosts blocked when private network is allowed).

## Feature Request Clusters

The following clusters of related feature requests appeared in today's data:

- **Secrets & credential management** — Multiple requests: masked secrets for agents ([#10659](https://github.com/openclaw/openclaw/issues/10659)), native secrets management integration with AWS Secrets Manager / Vault ([#13610](https://github.com/openclaw/openclaw/issues/13610)), and a security profile proposal for data-centric, secure-by-default operation ([#8719](https://github.com/openclaw/openclaw/issues/8719)).
- **Session persistence & recovery** — Context state lost after compaction ([#2597](https://github.com/openclaw/openclaw/issues/2597)), session checkpoints with save/load ([#13700](https://github.com/openclaw/openclaw/issues/13700)), and backup/restore utility ([#13616](https://github.com/openclaw/openclaw/issues/13616)).
- **Approval & enforcement gates** — Pre-response enforcement hooks for mandatory tool-call policies ([#13583](https://github.com/openclaw/openclaw/issues/13583)), channel-mediated MCP tool call approval ([#78308](https://github.com/openclaw/openclaw/issues/78308)), denylist support for exec-approvals ([#6615](https://github.com/openclaw/openclaw/issues/6615)), and opt-in reaction-triggered agent turns ([#17840](https://github.com/openclaw/openclaw/issues/17840)).
- **Cost & usage visibility** — Per-hour spending ceiling to prevent runaway failover costs ([#38248](https://github.com/openclaw/openclaw/issues/38248)), per-model usage logging ([#13219](https://github.com/openclaw/openclaw/issues/13219)), and sub-agent announce suppression ([#8299](https://github.com/openclaw/openclaw/issues/8299)).
- **Platform & deployment** — Prebuilt Android APK releases ([#9443](https://github.com/openclaw/openclaw/issues/9443)), comprehensive AWS deployment guide ([#13597](https://github.com/openclaw/openclaw/issues/13597)), backup/restore utility ([#13616](https://github.com/openclaw/openclaw/issues/13616)), and plugin config writable-overlay paths for policy-locked sandboxes ([#72950](https://github.com/openclaw/openclaw/issues/72950)).
- **Rewards/affirmation** — The demand for agent reward signals, nudge support, and expressive reply customization (e.g., React/Telegram reactions,

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-05-08

## 1. Daily Cross-Project Overview

Today saw highly uneven activity across the four tracked projects. OpenClaw dominated with 500 issues and 500 PRs updated, a new release (v2026.5.7) addressing plugin publishing reliability, and a large cluster of regression reports from recent upgrades. The three smaller projects exhibited moderate to low volume: ZeroClaw (50 issues, 50 PRs) and PicoClaw (36 issues, 48 PRs) each progressed desktop onboarding and security hardening respectively, while NanoBot (9 issues, 26 PRs) closed several bugs and merged a long-standing custom LLM arguments PR. No stable releases were cut for NanoBot, ZeroClaw, or PicoClaw (the latter issued a nightly build).

## 2. Activity Comparison

| Project     | Issues Updated | PRs Updated | Release Today       | Activity Note                                                                 |
|-------------|----------------|-------------|---------------------|-------------------------------------------------------------------------------|
| OpenClaw    | 500            | 500         | v2026.5.7           | High volume driven by regression reports; large feature PRs in review.        |
| NanoBot     | 9              | 26          | None                | Low volume; focus on bug fixes and one long-standing feature PR merged.       |
| ZeroClaw    | 50             | 50          | None                | Moderate; desktop onboarding milestone achieved, WhatsApp protocol issue open.|
| PicoClaw    | 36             | 48          | v0.2.8-nightly      | Moderate; Go toolchain security fix, exec sandbox false-positive PR opened.   |

## 3. OpenClaw Compared With Peers

- **Activity volume**: OpenClaw’s 500 issues and 500 PRs updated in 24 hours dwarf the combined total of the other three projects (~95 issues, ~124 PRs). This reflects OpenClaw’s role as the core reference implementation with a larger contributor and user base.
- **Technical focus**: OpenClaw’s activity spans broad infrastructure (plugin publishing, gateway stability, channel expansion) and many concurrent feature tracks (World ID approvals, Discord voice, iMessage). Peers focus on narrower areas: NanoBot on bug triage and minor features, ZeroClaw on desktop parity and WhatsApp Web reliability, PicoClaw on security hardening and sandbox fixes.
- **Community surface area**: OpenClaw has more cross-cutting feature request bundles and higher comment counts on key issues (e.g., #65824 with 15 comments, #9443 with 24). Peer projects show smaller discussion volumes and fewer multi-item feature bundles.

## 4. Shared Technical Focus Areas

The following requirements appeared in multiple projects today:

- **LLM reliability and retry handling**: OpenClaw has an open issue about Gemini models hanging (#78502); NanoBot closed a 300-second LLM timeout bug (#3681); PicoClaw has a long-open issue about no retry on HTTP 500 (#629). All three projects are seeing user reports of call failures or timeouts.
- **Channel-specific breakage after server-side changes**: OpenClaw’s WeChat/Weixin regression (#78232, #77837) and WebSocket gateway drops (#78402); ZeroClaw’s WhatsApp Web protocol bump halting message flow (#6246); NanoBot’s WebSocket handshake failure (#3682). Several projects are reacting to upstream platform changes.
- **Tool sandbox and security gating**: ZeroClaw reports shell tool calls refused at `autonomy = "full"` (#6434); PicoClaw has a false-positive exec sandbox guard (#1042); OpenClaw has open feature requests for exec-approval denylist (#6615) and pre-response enforcement hooks (#13583). Balancing security with usability is a recurring theme.
- **Session and history management**: OpenClaw has multiple feature requests around session persistence (#2597, #13700); NanoBot fixed a `last_consolidated` corruption issue; ZeroClaw reports context overflow causing hallucination (#6517); PicoClaw has a bug where session history truncation hides earlier messages (#2796). Users across projects want better session control.

## 5. Differentiation Analysis

| Dimension              | OpenClaw                          | NanoBot                           | ZeroClaw                           | PicoClaw                           |
|------------------------|-----------------------------------|-----------------------------------|------------------------------------|------------------------------------|
| Primary use case       | Full-featured agent platform      | Lightweight CLI agent              | Open-source desktop agent          | Minimal CLI agent                  |
| Release cadence        | Frequent stable releases          | Infrequent; no release today       | Working toward v0.7.5 release      | Nightly builds; no stable today    |
| Notable feature focus  | Channel expansion (Discord voice, iMessage, World ID) | Bug stability, SSE streaming, custom LLM args | Desktop onboarding (macOS Tauri), WhatsApp Web | Security (toolchain, exec sandbox), MCP tooling |
| Community growth signs | High issue/PR volume, large PRs   | Responsive triage (many closed quickly) | Desktop parity requests increasing | Active security fixes, but user frustration on LLM reliability |
| Technical stack        | Monorepo with plugin system        | Python-based, modular channels     | Rust/Tauri desktop app              | Go-based CLI                        |

## 6. Community Activity Notes

- **Tier 1 (Very High)**: OpenClaw — 500 issues, 500 PRs, new release, multiple large feature PRs under maintainer review.
- **Tier 2 (Moderate)**: ZeroClaw (50 issues, 50 PRs) and PicoClaw (36 issues, 48 PRs) — both have ongoing feature development and security/workflow fixes.
- **Tier 3 (Low)**: NanoBot (9 issues, 26 PRs) — activity concentrated on bug closure and one merged feature; no release today.

No project showed explosive growth in new contributors or sudden spikes in user engagement beyond OpenClaw’s regression reports.

## 7. Evidence-Backed Observations

1. **LLM reliability is a cross-project pain point.** OpenClaw, NanoBot, and PicoClaw each have open or recently closed issues where LLM calls hang, timeout, or fail without retry. This spans models from Gemini to DeepSeek to general HTTP 500 errors, affecting users across all project sizes.

2. **Channel integration fragility is widespread.** Multiple projects today experienced breakage from upstream changes in WhatsApp Web, WeChat, and WebSocket protocols. These are not isolated to one project’s implementation — they reflect external platform evolution outpacing client adaptation.

3. **Desktop and onboarding improvements are an active area in ZeroClaw and, to a lesser extent, OpenClaw.** ZeroClaw merged a macOS onboarding wizard and closed a desktop parity issue. OpenClaw has a long-standing request for prebuilt Android APKs (#9443). The other two projects show no desktop development.

4. **Secrets and credential management is an emerging concern.** OpenClaw has feature requests for masked secrets and native secrets manager integration. ZeroClaw closed a duplicate issue about fallback provider credentials not being inherited (#6418). PicoClaw has a request for custom auth headers (#2169). This indicates growing awareness of credential security as agent deployments scale.

5. **Tool sandbox security remains contentious.** ZeroClaw reports shell tool calls blocked at `full` autonomy level (#6434), while PicoClaw’s exec guard has false positives on benign commands (#1042). Both projects are actively working on or discussing fixes, suggesting the balance between security and usability is not yet settled.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-08

**Generated from GitHub data (updated in the last 24 hours as of 2026-05-08).**

---

## 1. Today’s Activity Brief

- **Issues**: 9 updated (3 open, 6 closed).
- **Pull Requests**: 26 updated (18 open, 8 merged/closed).
- **Releases**: 0.

Activity focused on bug fixes and stability improvements across multiple channels. Six issues were resolved, covering WebSocket handshake failures, DeepSeek reasoning mode errors, WhatsApp voice message handling, and LLM timeouts. Eight PRs were merged or closed, including fixes for WeChat silent message drops, SSE streaming buffering, CI linting, and logging traceback preservation. A longstanding PR (#1835) adding support for arbitrary backend LLM arguments was finally closed. No new releases were cut today.

---

## 2. Releases

None.

---

## 3. Project Progress

Eight pull requests were merged or closed today. Notable merges include:

- **[#3660 – fix(dream): restore cursor with memory state](https://github.com/HKUDS/nanobot/pull/3660)** — Tracks and rolls back the Dream memory cursor when restoring from GitStore. Includes a regression test.
- **[#3677 – fix(api): remove enable_compression to restore real SSE streaming](https://github.com/HKUDS/nanobot/pull/3677)** — Turned off HTTP compression in aiohttp to prevent SSE chunks from being buffered, restoring true incremental streaming.
- **[#3672 – chore(ci): Enable full ruff -F rules](https://github.com/HKUDS/nanobot/pull/3672)** — Expanded CI linting from two F rules to the entire F rule set, fixing the newly detected errors.
- **[#3678 – refactor(logging): preserve tracebacks in remaining except blocks](https://github.com/HKUDS/nanobot/pull/3678)** — Replaced bare `logger.error` calls inside exception handlers with `logger.exception` to retain full stack traces in logs.
- **[#1835 – Added support for sending arbitrary additional arguments to backend LLMs](https://github.com/HKUDS/nanobot/pull/1835)** — Enables custom arguments (e.g., `"stream": false` for Ollama) in LLM requests. Merged after two months of review.

These changes strengthen reliability (SSE streaming, logging), code quality (CI linting), and flexibility (custom LLM arguments).

---

## 4. Community Hot Topics

- **[#3682 – [bug] websocket导致的报错](https://github.com/HKUDS/nanobot/issues/3682)** (3 comments) — A WebSocket handshake failure error. The issue was closed, indicating a fix or configuration workaround.
- **[#3665 – [bug] deepseek-v4-flash "The reasoning_content in the thinking mode must be passed back"](https://github.com/HKUDS/nanobot/issues/3665)** (2 comments) — Intermittent error when using DeepSeek in thinking mode. Closed, likely resolved.
- **[#3652 – [enhancement] Can Dream be disabled?](https://github.com/HKUDS/nanobot/issues/3652)** (2 comments) — User requests a simple `enabled` flag in Dream config to completely disable the feature.

The WebSocket and DeepSeek issues highlight two ongoing pain points in connectivity and model compatibility. The Dream disable request reflects a recurring desire for finer-grained feature control.

---

## 5. Bugs & Stability

**High severity:**

- **WebSocket handshake failure** ([#3682](https://github.com/HKUDS/nanobot/issues/3682), closed) — Server-side error during WebSocket upgrade.
- **DeepSeek reasoning_content error** ([#3665](https://github.com/HKUDS/nanobot/issues/3665), closed) — API rejects streaming responses when `reasoning_content` is not passed back.
- **WebSocket channel silently drops media from inbound messages** ([#3674](https://github.com/HKUDS/nanobot/issues/3674), open) — The `WebSocketChannel._dispatch_envelope()` ignores the `media` field, causing file attachments to be lost. **No fix PR exists yet.**

**Medium severity:**

- **Cross-platform WebSocket access issue** ([#3683](https://github.com/HKUDS/nanobot/issues/3683), closed) — Linux WebSocket server inaccessible from Windows/macOS browsers.
- **WhatsApp voice messages not downloading** ([#3604](https://github.com/HKUDS/nanobot/issues/3604), closed) — Voice input fails silently.
- **LLM call timeout after 300s** ([#3681](https://github.com/HKUDS/nanobot/issues/3681), closed) — Reported on Windows with nanobot 0.1.5.post3; may be environment-specific.

**Low severity / configuration:**

- **WeChat silent message drops** — Addressed by PR [#3684](https://github.com/HKUDS/nanobot/pull/3684) (open) which fixes swallowed exceptions in polling loops.

Most reported bugs from the last 24 hours were quickly closed, suggesting maintainers are actively triaging. The open media drop issue (#3674) is a notable remaining gap.

---

## 6. Feature Request Clusters

- **Disable Dream feature** — Issue [#3652](https://github.com/HKUDS/nanobot/issues/3652) requests a simple `enabled` flag in Dream config.
- **Custom bot name and icon** — Issue [#3650](https://github.com/HKUDS/nanobot/issues/3650) asks for `botName` and `icon` config options to replace defaults in agent mode.
- **WhatsApp /sync-meta command** — Issue [#3688](https://github.com/HKUDS/nanobot/issues/3688) (closed) proposes a command to push slash commands to Meta’s conversational automation endpoint for WhatsApp Business.
- **Show reasoning in CLI** — PR [#3655](https://github.com/HKUDS/nanobot/pull/3655) (open) adds `show_reasoning` option to display model thinking content during streaming.
- **Skip heartbeat when idle** — PR [#1939](https://github.com/HKUDS/nanobot/pull/1939) (open) avoids LLM calls for heartbeat when there is nothing to do, saving tokens.
- **Custom sandbox bind mounts** — PR [#3642](https://github.com/HKUDS/nanobot/pull/3642) (open) allows users to specify extra read-only/read-write host paths for the bwrap sandbox.
- **Unified transcription with local Whisper** — PR [#3513](https://github.com/HKUDS/nanobot/pull/3513) (open) overhauls voice transcription to be provider-agnostic and adds local Whisper support.
- **SimpleX channel** — PR [#3486](https://github.com/HKUDS/nanobot/pull/3486) (open) integrates the SimpleX messaging protocol via its CLI.

These requests cluster around configuration transparency (disable features, rename bot), channel completeness (WhatsApp, SimpleX), and UX polish (reasoning display, token-saving heartbeat).

---

## 7. User Feedback Summary

**Pain points expressed:**

- WebSocket connectivity failures and cross-platform browser access issues (Chinese-speaking users).
- DeepSeek thinking mode incompatibility causing API errors.
- Voice message handling broken on WhatsApp.
- LLM timeouts (reported as frequent on Windows).
- Media attachments silently dropped in the WebSocket channel.
- Conversation history lost due to session file corruption when `last_consolidated` exceeds message count (addressed in PR [#3680](https://github.com/HKUDS/nanobot/pull/3680)).
- Inability to customize bot name/icon or disable the Dream feature.

**Positive signals:**

- Many bugs were closed rapidly, suggesting responsive maintainers.
- The closure of the long-open PR #1835 (custom LLM arguments) was likely well-received by users needing non-standard model configurations.

---

## 8. Backlog Watch

**Long-open PRs needing maintainer attention:**

- **[#1219 – Add stock market analysis, code performance, and test case generation skills](https://github.com/HKUDS/nanobot/pull/1219)** (opened 2026-02-26, last updated 2026-05-07) — A large feature addition with documentation. No maintainer review in over two months.
- **[#1443 – Decouple heartbeat reasoning from notification](https://github.com/HKUDS/nanobot/pull/1443)** (opened 2026-03-02, last updated 2026-05-07) — Adds silent heartbeat reasoning. Awaiting review.
- **[#1939 – Skip heartbeat before LLM call](https://github.com/HKUDS/nanobot/pull/1939)** (opened 2026-03-12, last updated 2026-05-07) — Token-saving optimization. No recent maintainer response.

**Long-open issues without resolution:**

- No issues older than a few days are currently open. The backlog is predominantly composed of old feature PRs.

These three PRs represent the most significant unaddressed contributions, each offering meaningful functionality (new skills, heartbeat optimization). They have been open for 2–3 months and could benefit from a maintainer decision or feedback cycle.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-08

## Today's Activity Brief

- **50 issues** updated in the last 24h (48 open, 2 closed).
- **50 pull requests** updated (48 open, 2 merged/closed).
- **No new releases** today.
- Two PRs merged: [#6506](https://github.com/zeroclaw-labs/zeroclaw/pull/6506) (macOS onboarding wizard) and [#6507](https://github.com/zeroclaw-labs/zeroclaw/pull/6507) (desktop screenshot and AppleScript commands) — both stacked on the same feature branch.
- One enhancement issue closed: [#6320](https://github.com/zeroclaw-labs/zeroclaw/issues/6320) (desktop menu-bar first-run onboarding parity).
- Continued high activity around WhatsApp Web protocol issues, shell tool permission regressions, and desktop onboarding features.

---

## Releases

*None.*

---

## Project Progress

### Merged / Closed Pull Requests

- **[#6506](https://github.com/zeroclaw-labs/zeroclaw/pull/6506)** — `feat(desktop): macOS onboarding wizard, permission primitives, and capability sync` (XL, risk:high). Adds an 8-step first-run wizard for TCC permissions (Contacts, Calendar, etc.) and capability sync for the Tauri desktop app.
- **[#6507](https://github.com/zeroclaw-labs/zeroclaw/pull/6507)** — `feat(desktop): take_screenshot and run_applescript Tauri commands` (S, risk:high). Adds two capability handlers as a proof-of-concept for the desktop onboarding feature. Both PRs target the `feat/desktop-onboarding` branch.

### Closed Enhancement Issue

- **[#6320](https://github.com/zeroclaw-labs/zeroclaw/issues/6320)** — Desktop menu-bar chat first-run onboarding parity (no CLI required). Closed today; part of the v0.7.7 desktop parity milestone.

---

## Community Hot Topics

### Most Active Issues (by comment count)

- **[#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246)** (6 comments) — **WhatsApp Web channel fails after server-side protocol bump (2026-04-24)**. User reports silent message flow halt. Severity S1 (workflow blocked). No fix PR yet; maintainers need to investigate protocol changes.
- **[#6418](https://github.com/zeroclaw-labs/zeroclaw/issues/6418)** (4 comments, closed) — **Fallback providers fail to inherit credentials from `config.toml`**. Marked duplicate; severity S0 (data loss/security risk). Closed as duplicate.
- **[#6474](https://github.com/zeroclaw-labs/zeroclaw/issues/6474)** (3 comments) — **LLM invoked twice per user request** when using `omlx` local provider. User suspects double invocation in runtime; status `in-progress`.
- **[#6516](https://github.com/zeroclaw-labs/zeroclaw/issues/6516)** (2 comments) — **ACP `cwd` change locks agent out of reading its own skill files**. S1 – workflow blocked. Skill prompts fail because file resolution uses the wrong working directory.
- **[#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360)** (2 comments) — **Prompt caching broken in Telegram channel** while working via CLI. S2 – degraded behavior.
- **[#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434)** (2 comments) — **Shell tool calls refused at autonomy level `"full"`** — no `tool_dispatch` reaches runtime. S1 – workflow blocked.
- **[#6472](https://github.com/zeroclaw-labs/zeroclaw/issues/6472)** (2 comments) — **Gateway cannot use Postgres memory backend** due to nested runtime panic. S2 – degraded behavior.
- **[#6465](https://github.com/zeroclaw-labs/zeroclaw/issues/6465)** (1 comment) — **Feature: Bundle chat-ui as static assets in desktop binary** to boot without remote gateway. S1 – workflow blocked.

### Most Active Pull Requests (by recency, all have 0 comments)

- **[#6521](https://github.com/zeroclaw-labs/zeroclaw/pull/6521)** — `fix(cron): support dingtalk delivery channel`. Adds DingTalk to cron delivery allowlist. Draft.
- **[#6509](https://github.com/zeroclaw-labs/zeroclaw/pull/6509)** — `fix(daemon): add Matrix channel support for heartbeat`. Closes #6433.
- **[#6508](https://github.com/zeroclaw-labs/zeroclaw/pull/6508)** — `chore: re-attempt v0.7.5 release after CI fix (#6502 must merge first)`. Release-gate PR.

---

## Bugs & Stability

### Severity S0 (data loss / security risk)

- **[#6418](https://github.com/zeroclaw-labs/zeroclaw/issues/6418)** (closed) — **Fallback provider credentials not inherited** from `config.toml`. Closed as duplicate. Root cause may be unresolved.
- **[#6500](https://github.com/zeroclaw-labs/zeroclaw/issues/6500)** (open) — **Docker sandbox image `zeroclawlabs/tool-runner` not found** on Docker Hub. Docs reference non-existent image. No fix PR yet.

### Severity S1 (workflow blocked)

- **[#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246)** — WhatsApp Web channel broken after protocol bump. No fix PR.
- **[#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434)** — Shell tool calls refused at autonomy level `"full"`. Status `accepted`, no fix PR.
- **[#6516](https://github.com/zeroclaw-labs/zeroclaw/issues/6516)** — ACP `cwd` change locks agent out of skill files. Reported today.
- **[#6399](https://github.com/zeroclaw-labs/zeroclaw/issues/6399)** — Custom remote provider sends local image file paths instead of data URLs, breaking multimodal on Raspberry Pi.
- **[#6377](https://github.com/zeroclaw-labs/zeroclaw/issues/6377)** — Llama.cpp provider defaults to wrong API mode, causing 500 errors on tool use.
- **[#6410](https://github.com/zeroclaw-labs/zeroclaw/issues/6410)** — Google Workspace tool fails on Windows (`.cmd` extension) and mangles JSON.
- **[#6465](https://github.com/zeroclaw-labs/zeroclaw/issues/6465)** — Desktop app unusable without remote gateway (chat-ui not bundled).

### Severity S2 (degraded behavior)

- **[#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360)** — Prompt caching broken for Telegram.
- **[#6472](https://github.com/zeroclaw-labs/zeroclaw/issues/6472)** — Postgres memory gateway crashes with nested runtime panic.
- **[#6520](https://github.com/zeroclaw-labs/zeroclaw/issues/6520)** — Gemini CLI provider crashes due to outdated `--print` vs `--prompt` argument. New report today.
- **[#6517](https://github.com/zeroclaw-labs/zeroclaw/issues/6517)** — Context overflow causes hallucination/topic drift after long conversations. New report today.
- **[#6402](https://github.com/zeroclaw-labs/zeroclaw/issues/6402)** — Bash completion infinite recursion crashes SSH sessions.

### Fix PRs in progress

- **[#6509](https://github.com/zeroclaw-labs/zeroclaw/pull/6509)** adds Matrix channel to heartbeat daemon (fixes #6433).
- **[#6432](https://github.com/zeroclaw-labs/zeroclaw/pull/6432)** makes SQLite memory schema migrations safe under concurrent startup.
- **[#6519](https://github.com/zeroclaw-labs/zeroclaw/pull/6519)** fixes Gemini CLI provider crash by passing prompt as argument instead of stdin.
- **[#6515](https://github.com/zeroclaw-labs/zeroclaw/pull/6515)** fixes history pruner to avoid consecutive assistant messages that break GLM-5 (fixes #5636).
- **[#6502](https://github.com/zeroclaw-labs/zeroclaw/pull/6502)** unblocks v0.7.5 release by fixing CI order (gen-api before tsc).

---

## Feature Request Clusters

### Desktop & Onboarding

- **[#6465](https://github.com/zeroclaw-labs/zeroclaw/issues/6465)** — Bundle chat-ui SPA into Tauri binary so desktop app works without remote gateway.
- **[#6339](https://github.com/zeroclaw-labs/zeroclaw/issues/6339)** — Build universal macOS binary (arm64 + x86_64).
- **[#6329](https://github.com/zeroclaw-labs/zeroclaw/issues/6329)** — Right-click tray menu items (quit, restart gateway, copy pairing token, show logs).
- **[#6327](https://github.com/zeroclaw-labs/zeroclaw/issues/6327)** — Port channels overview to desktop panel (mirrors #5244).
- **[#6485](https://github.com/zeroclaw-labs/zeroclaw/issues/6485)** — Per-feature lazy permission prompts (Contacts, Calendar, Photos) instead of one-shot first-run dump.

### Configuration & Provider Extensibility

- **[#6375](https://github.com/zeroclaw-labs/zeroclaw/issues/6375)** — V3 env-var override mechanism for credentials and runtime knobs. Operator request.
- **[#6416](https://github.com/zeroclaw-labs/zeroclaw/issues/6416)** — `zeroclaw onboard` should validate `config.toml` and warn about provider/settings incompatibilities.
- **[#6518](https://github.com/zeroclaw-labs/zeroclaw/issues/6518)** — First-class support for custom/OpenAI-compatible providers (e.g., Kimi K2.5). Currently requires workarounds.
- **[#6513](https://github.com/zeroclaw-labs/zeroclaw/pull/6513)** (PR) — Adds Atomic Chat as a selectable local provider via OpenAI-compatible path.

### WhatsApp Web

- **[#6371](https://github.com/zeroclaw-labs/zeroclaw/issues/6371)** — Per-JID group allowlist (`allowed_groups`) for WhatsApp Web. Operator scoping request.

### Cron & Delivery

- **[#6521](https://github.com/zeroclaw-labs/zeroclaw/pull/6521)** — Add DingTalk delivery channel for cron.
- **[#6510](https://github.com/zeroclaw-labs/zeroclaw/issues/6510)** — Option to deliver only final assistant message in cron `announce` mode (skip intermediate turns).

---

## User Feedback Summary

- **WhatsApp Web reliability** remains a top pain point: users report silent message drops after server-side changes (#6246) and lack of group scoping (#6371).
- **Provider credential handling** frustrates operators: fallback providers losing config credentials (#6418), Gemini CLI crash due to argument syntax (#6520), custom multimodal provider sending local paths (#6399), and Llama.cpp defaulting to wrong API mode (#6377).
- **Shell tool security** is still under active debate: a user reports that `autonomy level = "full"` with empty allowlists actually blocks shell calls (#6434).
- **Desktop app usability** gaps are frequently highlighted: cannot boot without remote gateway (#6465), no tray menu (#6329), macOS universal binary missing (#6339).
- **Context management** issues: one user reports hallucination and topic drift after context overflow (#6517).
- **Docker documentation** broken: sandbox image referenced in docs does not exist (#6500), Docker bind mount shadows pre-built web dashboard (#6400).
- **Onboarding friction**: Chinese users report broken Docker installation instructions on a third-party site (`zeroclaws.io`) (#6393); maintainers may need to clarify official docs.

---

## Backlog Watch

These issues and PRs have been open for an extended period or are stale, requiring maintainer attention:

- **[#4944](https://github.com/zeroclaw-labs/zeroclaw/pull/4944)** (Mar 28, 2026) — Bundle wrapper migration for file, pdf/image, cron, AI CLI, runner, network, skill tools. Needs author action (labeled `needs-author-action`).
- **[#5779](https://github.com/zeroclaw-labs/zeroclaw/pull/5779)** (Apr 15, 2026) — TOTP gate for destructive shell commands (`gated_commands`). Needs maintainer review and author action.
- **[#5120](https://github.com/zeroclaw-labs/zeroclaw/pull/5120)** (Mar 29, 2026) — Reject `clear` on append-only markdown memory backend. Ready but unmerged.
- **[#5088](https://github.com/zeroclaw-labs/zeroclaw/pull/5088)** (Mar 29, 2026) — Support custom Anthropic endpoints in onboarding.
- **[#5075](https://github.com/zeroclaw-labs/zeroclaw/pull/5075)** (Mar 29, 2026) — Clarify WhatsApp Web reinstall guidance. No maintainer activity.
- **[#6172](https://github.com/zeroclaw-labs/zeroclaw/pull/6172)** (Apr 28, 2026) — Update Arduino Uno Q setup docs with RAM warning. Low risk, unmerged.
- **[#6502](https://github.com/zeroclaw-labs/zeroclaw/pull/6502)** (May 7, 2026) — Fix v0.7.5 release CI (gen-api before tsc).

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-08

## Today's Activity Brief

The PicoClaw project saw substantial community activity with 48 pull requests and 36 issues updated in the last 24 hours. A new nightly build (v0.2.8-nightly.20260508) was released, though it carries a stability warning as an automated build from the main branch. Security received notable attention: two separate PRs (#2818, #2821) bumped the Go toolchain to 1.25.10 to address three standard-library vulnerabilities. The maintainer @bogdanovich submitted several fix PRs covering Telegram topic context preservation, exec tool sandbox path handling, tool registry cloning for subagents, and a new non-destructive `/reset` CLI command.

## Releases

A single nightly release was published:
- **v0.2.8-nightly.20260508.2834db13** — automated nightly build from `main`, described as potentially unstable.
- Full changelog: [v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

No stable release or migration notes accompany this build.

## Project Progress

Eighteen PRs were closed or merged in the last 24 hours. Notable merged/closed PRs:

- **Security hardening**: Two PRs (#2818, #2821) bumped the Go compiler from 1.25.9 to 1.25.10, fixing CVEs `GO-2026-4976`, `GO-2026-4971`, and `GO-2026-4976` in `net/http` and `net/http/httputil`.
- **CLI improvement**: PR #2819 landed a non-destructive `/reset` command that starts a fresh session without deleting stored Seahorse conversation history, plus a `/reset clear` variant to restore the original session.
- **MCP tooling**: PR #2460 fixed a nil-arguments serialization bug in MCP `CallTool` that broke Zod-validated TypeScript SDK servers.
- **Exec sandbox hardening**: PR #2298 introduced fail-closed preflight checks for ambiguous interpreter commands (piped, shell-wrapped, process-substitution forms).
- **Channel fixes**: PR #2091 resolved false-negative @mention detection in Feishu groups by probing bot display names at startup. PR #2504 fixed an Opus frame buffer reuse bug in the OGG decoder that caused audio corruption in Discord's voice sender.
- **Provider support**: PR #2240 added stdio transport support for the GitHub Copilot provider, preserving existing gRPC/external-server paths. PR #2443 fixed empty-response handling for Codex/OpenAI OAuth `gpt-5.4` models.

Open PRs of note include ongoing tool registry cloning fixes (`#2793`), Telegram album media group buffering (`#2758`), and integration test framework work for MCP streaming (`#2811`).

## Community Hot Topics

The most active discussions cluster around provider resilience, session handling, and tool sandboxing:

- **#629** (Open, 13 comments) — **[BUG] Didn't retry if meet LLM call failed**: User reports that long-running tasks hang when the server returns HTTP 500, as the LLM call path lacks retry logic. This issue has been open since February 2026 with no maintainer resolution visible.
- **#2408** (Closed, 11 comments) — **[Feature] LLM Account Stacking**: Proposed automatic API key rotation across multiple accounts on rate limits/quotas ("cartridge-belt" pattern). This was closed, but the discussion suggests strong user interest in provider fault tolerance.
- **#2171** (Open, 10 comments) — **[Refactor] Consider moving OpenAI endpoints to Responses API**: User recommends migrating from Chat Completions to OpenAI Responses API. The issue has a to-do list partially checked, but remains open since March.
- **#2468** (Closed, 8 comments) — **[BUG] Scheduled Task Fails to Execute**: User reports cron tool execution blocked with "scheduling command execution is restricted to internal channels" error.
- **#1763** (Closed, 8 comments) — **[BUG] aarch64 .deb not install**: ARM64 Debian package install failure due to missing dependencies (`libgit2-1.9`, `libhttp-parser2.9`, etc.).
- **#1042** (Open, 8 comments, 2 👍) — **[BUG] exec tool guardCommand false positive**: Relative script paths like `curl -s "wttr.in/Beijing?T"` are misidentified as path traversal attempts, blocked by the sandbox guard. A fix PR (#2814) was opened today.

## Bugs & Stability

**Critical:**

- **#2796** (Open, 1 comment, reported today) — Session history display truncation: In conversations with multiple user messages, only the last user message is visible in history. The reporter notes "message compression should be for the model, not for user-facing history display." No fix PR identified yet.
- **#2721** (Open, 1 comment) — Session history race condition with Anthropic Messages API: `tool_use_id` returns 400 errors. User reports the issue persists in v0.2.5 despite previous issue #704 being closed without visible fix. This carries a `priority: high` label.

**High:**

- **#1042** (Open, 8 comments) — Exec tool sandbox false positive on benign commands. PR #2814 opened today proposes a fix.
- **#2702** (Open, 2 comments) — Multi-user group channels lack sender attribution in default session scope, mixing user contexts.

**Moderate:**

- **#2820** (Open, 0 comments, reported today) — Destructive `/clear` command deletes Seahorse history. This is positioned as a feature request for non-destructive reset, which PR #2819 addresses.
- **#2790** (Open) — Route spawn tool not honoring target agent selection.

## Feature Request Clusters

User feature requests today focus on several themes:

**Session and History Management**:
- Non-destructive session reset (#2820) — user @bogdanovich proposed this two days before also submitting the implementing PR (#2819).
- Full history display for multi-message conversations (#2796), currently a bug report.

**Provider and Authorization**:
- Automatic API key rotation on rate limits (#2408, closed) and retry on LLM call failures (#629, open) share a reliability theme.
- Custom auth headers beyond `Authorization` (#2169, closed), e.g., `X-API-Key`.
- Migration to OpenAI Responses API (#2171, open).

**Channel and Tooling**:
- SMTP email output for scheduled tasks (#2465, closed).
- Multiple Feishu application instances (#2493, closed).
- MCP server secret storage in `.security.yml` (#2444, closed, 2 👍).
- General attachment handling across channels (#348, open, `priority: high`).

A notable related PR is #2811 (open), which introduces support for MCP streamable HTTP alias and request-response mode, backed by a new Docker-backed integration test framework.

## User Feedback Summary

Several user pain points emerge from today's data:

- **LLM reliability frustration**: Issue #629 describes tasks hanging without retry on transient HTTP 500 errors, a problem open since February. One user in #2429 expressed strong dissatisfaction with model configuration and console input behavior ("What kind of idiots give this one stars?").
- **Tool sandbox false positives**: Issue #1042 (2 upvotes) shows the `exec` guard's `restrict_to_workspace` mode incorrectly blocks benign commands like weather queries.
- **Cross-channel session confusion**: Issues #2447, #2446, #2464, and #2702 all report problems in multi-channel or group setups: messages being echoed, only latest message processed, and lack of sender attribution in shared session history.
- **Documentation gaps**: Issues #2438 and #2439 note that `PICOCLAW_GATEWAY_TOKEN` behavior is misleading (only covers health endpoints, not WebSocket auth) and that token override logic is undocumented, causing integration breakage.

## Backlog Watch

Several important open issues lack maintainer response:

- **#629** (Open since Feb 22, 13 comments) — LLM call retry failure: high-impact reliability issue with no visible fix or maintainer assignee.
- **#2171** (Open since Mar 30, 10 comments) — OpenAI Responses API migration: partially checked to-do list, but no merge progress.
- **#1042** (Open since Mar 4, 8 comments, 2 👍) — Exec tool sandbox false positives: a fix PR (#2814) was opened today, so maintainer attention may now be in progress.
- **#348** (Open since Feb 17, `priority: high`) — General attachment support: a roadmap-level feature with 3 comments but no assignee.

</details>