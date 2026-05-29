# OpenClaw Ecosystem Digest 2026-05-29

> Issues: 374 | PRs: 500 | Projects covered: 4 | Generated: 2026-05-29 02:28 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

Here is the OpenClaw project digest for 2026-05-29.

---

## OpenClaw Project Digest — 2026-05-29

### 1. Today's Activity Brief

Activity remains high with 374 issues and 500 pull requests updated in the last 24 hours, including 160 merged/closed PRs. Two new releases (v2026.5.27 and v2026.5.27-beta.1) shipped today, primarily focused on hardening security and content boundaries. Active regressions from the v2026.5.26 and v2026.5.22 releases continue to draw community attention, particularly around native hook relay failures, event-loop starvation, and duplicate message delivery across multiple channels.

### 2. Releases

Two releases were published today:

- **[v2026.5.27](https://github.com/openclaw/openclaw/releases/tag/v2026.5.27)**
- **[v2026.5.27-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.5.27-beta.1)**

Both share the same highlight summary: security and content boundaries are strengthened. Group prompt text is now kept out of the system prompt. Repeated-dot hostnames are normalized. Side-effecting command wrappers and unsafe Node runtime environment overrides are blocked. No-auth Tailscale exposure is rejected. Node/device-role approval paths are tightened.

No breaking changes or migration notes were included in the release descriptions.

### 3. Project Progress

The following PRs were merged or are in active review state today, representing continued work on agent reliability, channel integrations, and security posture:

- **[#87777](https://github.com/openclaw/openclaw/pull/87777)** (size: XL, proof-provided) — Adds a Speakeasy Telegram voice button, including eligibility, Airy V2 voice generation, and daily rate limits.
- **[#87618](https://github.com/openclaw/openclaw/pull/87618)** (size: M, proof-supplied) — Fixes the daemon to detect system-scope systemd gateway units on Linux, addressing issue [#87577](https://github.com/openclaw/openclaw/issues/87577).
- **[#87794](https://github.com/openclaw/openclaw/pull/87794)** (size: XL, needs-proof) — Refactors voice model cataloging through providers, unifying TTS, realtime transcription, and realtime voice model selection under a `kind: "voice"` metadata system.
- **[#87074](https://github.com/openclaw/openclaw/pull/87074)** (size: XL, needs-proof) — Tightens policy validation so unsupported policy keys are rejected as `policy/policy-jsonc-invalid` instead of being silently ignored.
- **[#87849](https://github.com/openclaw/openclaw/pull/87849)** (size: XL, needs-proof) — Adds a new `codex-supervisor` plugin for Codex app-server endpoint probing, session listing, transcript reads, sends, and interrupt controls.
- **[#87810](https://github.com/openclaw/openclaw/pull/87810)** (size: S, automerge-armed) — Fixes the gateway to clear completed session active runs.
- **[#87489](https://github.com/openclaw/openclaw/pull/87489)** (size: XL, proof-sufficient) — Enforces explicit subagent run timeouts so non-terminal `agent.wait` calls end at the stored deadline, including restarts.
- **[#87855](https://github.com/openclaw/openclaw/pull/87855)** (size: XS, proof-supplied) — Handles an `ENOENT` race condition in Telegram spool drain recovery rename.
- **[#87836](https://github.com/openclaw/openclaw/pull/87836)** (size: L, needs-proof) — Improves `cron create` delivery ergonomics with Hermes-style expression parsing and webhook support.
- **[#87845](https://github.com/openclaw/openclaw/pull/87845)** (size: L, proof-sufficient) — Adds Fal Krea image model payload schemas for native `aspect_ratio`, `creativity`, and `image_style_references`.
- **[#87141](https://github.com/openclaw/openclaw/pull/87141)** (size: XL) — Hardens runtime/plugin schema and metadata boundaries against malformed synthetic plugin data.
- **[#87521](https://github.com/openclaw/openclaw/pull/87521)** (size: M, needs-proof) — Normalizes `Request` input in `proxy-fetch` to prevent dropped headers/body.
- **[#87643](https://github.com/openclaw/openclaw/pull/87643)** (size: L, proof-sufficient) — Adds opt-in AI session title generation with privacy-safe defaults.
- **[#87664](https://github.com/openclaw/openclaw/pull/87664)** (size: S, needs-proof) — Adds defensive checks for Feishu channel runtime initialization during cold starts.
- **[#87853](https://github.com/openclaw/openclaw/pull/87853)** (size: S, proof-sufficient) — Staggers Discord gateway reconnects per account to prevent thundering herd issues.
- **[#87530](https://github.com/openclaw/openclaw/pull/87530)** (size: S, needs-proof) — Adds account-scoped voice groups and delayed `autoJoin` safety nets for Discord voice connections.
- **[#87526](https://github.com/openclaw/openclaw/pull/87526)** (size: S, needs-proof) — Adds `allowPrivateNetwork` option to Volcengine TTS provider for TUN proxy stacks.
- **[#87839](https://github.com/openclaw/openclaw/pull/87839)** (size: M) — Bounds manual git fetches in CI to prevent hung workflows.
- **[#87852](https://github.com/openclaw/openclaw/pull/87852)** (size: XS, needs-proof) — Fixes `openclaw status --deep` to include gateway auth paths from secret references.
- **[#80266](https://github.com/openclaw/openclaw/pull/80266)** (size: XL, proof-supplied) — Adds skill author-defined setup hooks that run supplied scripts on install/update.
- **[#70543](https://github.com/openclaw/openclaw/pull/70543)** (size: XL) — Adds normalized `exec auto` mode with Guardian-reviewed Codex app-server execution.
- **[#75970](https://github.com/openclaw/openclaw/pull/75970)** (size: S, proof-sufficient) — Hardens cron store loading so malformed persisted jobs are quarantined with a repair warning.

### 4. Community Hot Topics

The most active discussions this period center on regressions introduced in the v2026.5.26 and v2026.5.22 releases:

- **[#87331](https://github.com/openclaw/openclaw/issues/87331)** (17 comments, 10 👍) — A P1 regression in v2026.5.26: "Native hook relay unavailable" errors after relay re-registration due to generation UUID staleness. Reporter on macOS, works around via gateway restart.
- **[#87395](https://github.com/openclaw/openclaw/issues/87395)** (14 comments, 8 👍) — A separate P1 report of the native hook relay becoming intermittently unavailable on v2026.5.26, blocking memory/filesystem tools.
- **[#86599](https://github.com/openclaw/openclaw/issues/86599)** (13 comments, 1 👍) — A beta release blocker on Windows: local model provider calls block the gateway event loop, causing ~4-minute delays on trivial inference runs.
- **[#69208](https://github.com/openclaw/openclaw/issues/69208)** (12 comments, 0 👍) — Maintainer umbrella issue tracking duplicate transcript, replay, and context assembly bugs across multiple channels (MSTeams, webchat, Telegram, etc.).
- **[#73148](https://github.com/openclaw/openclaw/issues/73148)** (11 comments, 3 👍) — The `image` tool fails with an opaque error when the optional `sharp` package is not installed; users want a clear fallback or error message.

Underlying needs expressed in these discussions include: clearer error messages for missing dependencies, stable native hook relay behavior across upgrades, and resolution of cross-channel duplication bugs that degrade user experience.

### 5. Bugs & Stability

Several regressions and stability issues were reported or remained active today:

**Critical / P1 regressions:**
- **[#87331](https://github.com/openclaw/openclaw/issues/87331)**, **[#87395](https://github.com/openclaw/openclaw/issues/87395)** (both closed) — Native hook relay failures on v2026.5.26. A fix PR may be linked but not explicitly shown in today's data.
- **[#85999](https://github.com/openclaw/openclaw/issues/85999)** (closed) — Gateway pre-warm blocking event loop ~60s on startup in v2026.5.22, breaking channel handshakes. Fixed.
- **[#86599](https://github.com/openclaw/openclaw/issues/86599)** (open) — Windows beta: event loop starvation from local model calls.
- **[#86519](https://github.com/openclaw/openclaw/issues/86519)** (open) — Agent repeats identical replies 2-10x on Telegram after v2026.5.20 update. Upgrading to v2026.5.22 reduced but did not fix.
- **[#87609](https://github.com/openclaw/openclaw/issues/87609)** (open, P1) — WhatsApp group: subsequent @mentions silently dropped after first on v2026.5.26.
- **[#86239](https://github.com/openclaw/openclaw/issues/86239)** (closed) — MissingAgentHarnessError on inbound dispatch under event-loop starvation, even though harness IS registered on v2026.5.22.
- **[#86895](https://github.com/openclaw/openclaw/issues/86895)** (closed) — Webchat tool turns hang in post-tool-result generation for ~365s, then silently lost.

**Other notable stability issues:**
- **[#87536](https://github.com/openclaw/openclaw/issues/87536)** (open) — Native hook relay bridge never spawns on v2026.5.26, all native tool calls fail.
- **[#86201](https://github.com/openclaw/openclaw/issues/86201)** (closed) — v2026.5.22: slow responses / high CPU on WSL2 with event-loop delay.
- **[#87736](https://github.com/openclaw/openclaw/issues/87736)** (closed) — Regression: preflight compaction still surfaces missing Codex thread failure after previous fix.
- **[#87016](https://github.com/openclaw/openclaw/issues/87016)** (closed) — Preflight compaction deadlock causing bot to bounce every message on empty-session edge case.
- **[#71491](https://github.com/openclaw/openclaw/issues/71491)** (open, P1) — Kimi K2.6 reasoning_content 400 errors in long conversations after LCM compaction.

**Fix PRs in review for active bugs:**
- **[#87596](https://github.com/openclaw/openclaw/pull/87596)** — Rewrites duplicate native Kimi tool_call ids on replay (addresses part of the Kimi regression).
- **[#87489](https://github.com/openclaw/openclaw/pull/87489)** — Enforces subagent run timeouts.
- **[#87855](https://github.com/openclaw/openclaw/pull/87855)** — Fixes Telegram ENOENT race.
- **[#87664](https://github.com/openclaw/openclaw/pull/87664)** — Fixes Feishu cold-start crashes.
- **[#87853](https://github.com/openclaw/openclaw/pull/87853)** — Fixes Discord reconnect thundering herd.

### 6. Feature Request Clusters

No entirely new feature requests dominated today's data, but several in-progress PRs address long-standing user requests:

- **Voice model cataloging** ([#87794](https://github.com/openclaw/openclaw/pull/87794)) — Unifies TTS and realtime voice model selection through a single provider metadata system. This addresses fragmented voice configuration.
- **Codex supervisor plugin** ([#87849](https://github.com/openclaw/openclaw/pull/87849)) — Provides OpenClaw tools for managing Codex app-server sessions, a request for deeper Codex integration.
- **Cron delivery ergonomics** ([#87836](https://github.com/openclaw/openclaw/pull/87836)) — Adds Hermes-style parsing for cron expressions, responding to requests for simpler cron scheduling.
- **Skill setup hooks** ([#80266](https://github.com/openclaw/openclaw/pull/80266)) — Allows skill authors to define scripts that run on install/update, a feature requested in issue [#80213](https://github.com/openclaw/openclaw/issues/80213).
- **Exec auto mode** ([#70543](https://github.com/openclaw/openclaw/pull/70543)) — Adds Guardian-reviewed Codex app-server execution for safe automatic tool execution.
- **AI session title generation** ([#87643](https://github.com/openclaw/openclaw/pull/87643)) — Opt-in feature for automatic session title summarization, addressing privacy and usability concerns raised during review.

### 7. User Feedback Summary

User sentiment reflects frustration with regressions after recent upgrades, balanced against appreciation for rapid bug fixes.

**Dissatisfaction / Pain Points:**
- Recurring "Native hook relay unavailable" errors on v2026.5.26 ([#87331](https://github.com/openclaw/openclaw/issues/87331), [#87395](https://github.com/openclaw/openclaw/issues/87395), [#87536](https://github.com/openclaw/openclaw/issues/87536)) are blocking users on macOS and Windows from using local memory/filesystem tools.
- Telegram duplicate message replies ([#86519](https

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-05-29

## 1. Daily Cross-Project Overview

Today's activity across the four tracked projects shows OpenClaw dominating in raw volume with 374 issues and 500 PRs updated, largely driven by two security-focused releases and regressions from earlier this week. NanoBot and Zeroclaw saw moderate activity with a combined 29 issues and 61 PRs updated, both focused on bug-fixing and feature integration rather than new releases. PicoClaw had the lightest issue activity (6 updated) but maintained steady PR throughput (32) with a nightly release and several dependency upgrades. Cross-project attention converged on concurrency bugs, context retention, and channel-specific reliability issues, though each project addresses these through different architectural approaches.

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | Release Status | Notable Today |
|---------|---------------|-------------|----------------|---------------|
| OpenClaw | 374 | 500 | v2026.5.27 + beta.1 | Security hardening release; regression storm from v2026.5.26/22; 160 merged/closed PRs |
| NanoBot | 10 | 21 | No release | Major bug-fix batch (#4041) merged; community WebUI panel showcased; GitAgent Protocol PRs |
| Zeroclaw | 19 | 40 | No release | DeepSeek-V4 incompatibility (#6059) active; beta-2 integration PR (#6848) seeking review; 6 PRs merged |
| PicoClaw | 6 | 32 | v0.2.9-nightly.20260529 | Nightly build; OpenAI API channel closed (#1738); RISC-V bug (#2887) unaddressed |

## 3. OpenClaw Compared With Peers

OpenClaw's activity volume (374 issues, 500 PRs) is an order of magnitude higher than any peer today — this reflects both its role as the core reference implementation and the downstream effects of two recent releases triggering widespread regression reports. By contrast, NanoBot (10 issues, 21 PRs) and Zeroclaw (19 issues, 40 PRs) show more focused, incremental activity.

OpenClaw is the only project publishing stable releases today (v2026.5.27 with security hardening), while PicoClaw's nightly build is explicitly marked unstable. OpenClaw's release notes emphasize security boundaries (group prompt isolation, no-auth Tailscale rejection, unsafe runtime overrides) — a dimension absent from peers' activity today.

OpenClaw's PR surface includes full plugin ecosystem work (codex-supervisor plugin, skill setup hooks, voice model cataloging) that dwarfs the plugin/convention work in NanoBot (AUTHORITY.md, GitAgent Protocol) and Zeroclaw (sandbox policy RFC). The scale of community regression reporting (17 comments on a single relay bug, multiple P1 issues) is also unique to OpenClaw.

## 4. Shared Technical Focus Areas

**Cross-channel reliability and duplication bugs** — OpenClaw has an umbrella issue (#69208) tracking duplicate transcript/replay bugs across MSTeams, webchat, and Telegram, plus a specific Telegram duplicate reply regression (#86519). NanoBot's #4041 fix batch addressed streaming duplication and session-lock ordering. Both projects are wrestling with ensuring unique message delivery across heterogeneous channel backends.

**Concurrency and context-budget correctness** — OpenClaw's event-loop starvation on Windows (#86599) and subagent timeout enforcement (#87489) parallel NanoBot's concurrent session bug fixes in #4041 (mutable request context across sessions, context-budget token counting). Zeroclaw's context_compressor bug (#6361) dropping tool calls for OpenAI providers similarly touches context assembly.

**Voice and media pipeline** — OpenClaw's voice model cataloging PR (#87794) unifies TTS/realtime voice selection, while PicoClaw adds inbound image compression (#2964) and media-attachment support for the message tool (#2855). Both are extending modality support but at different layers.

**Extension and plugin conventions** — OpenClaw's codex-supervisor plugin (#87849) and skill setup hooks (#80266) mirror NanoBot's GitAgent Protocol support (#4030, #4034) and Zeroclaw's sandbox policy RFC (#6996). All three are defining how external capabilities integrate.

**Session-scoped configuration** — OpenClaw's AI session title generation (#87643), NanoBot's WebUI project workspaces (#4007) and context window selector (#4045), and Zeroclaw's session-scoped runtime overrides (#6817) all seek finer-grained per-session control.

## 5. Differentiation Analysis

**Technical architecture and target users:**
- **OpenClaw** serves as the reference implementation with the broadest surface: multiple channel integrations (Telegram, Discord, Feishu, WhatsApp, webchat), a rich plugin system, voice pipelines, and cron scheduling. It attracts power users deploying multi-channel AI agents and community contributors submitting integration PRs (Speakeasy Telegram voice, Codex supervisor).
- **NanoBot** focuses on lightweight deployment with pragmatic feature additions: WebUI workspaces, Discord slash commands, GitAgent Protocol for portability. The community-built `nanobot-webui` panel (#1922) indicates demand for self-hosted management UIs. Concurrency bugs (#4041) suggest real-world multi-session usage.
- **Zeroclaw** emphasizes enterprise-grade compatibility and safety: DeepSeek-V4 API support, OpenAI Codex subscription onboarding, granular sandbox policies, Fluent localization. The RPC socket transport and TUI application ("zerocode") target developers who need CLI/RPC interfaces over chat-only. Release versioning (v0.8.0-beta-1) indicates earlier maturity stage.
- **PicoClaw** targets embedded and edge deployments: RISC-V builds, Termux support, dependency bumps for stability. The NEAR AI Cloud provider (#2917) and MiMo provider models suggest use on lower-powered or mobile hardware. Nightly release cadence indicates continuous development with less formal stability guarantees.

**Security posture:**
- OpenClaw's v2026.5.27 explicitly hardens security (group prompt isolation, no-auth Tailscale rejection, unsafe runtime override blocking). Zeroclaw's sandbox policy RFC (#6996) and NanoBot's dangerous-command confirmation (#3937) address security at different layers. PicoClaw shows no security-focused activity today.

**Community contribution patterns:**
- NanoBot's #4041 batch was driven by a single external contributor (@hamb1y) reporting and fixing five bugs. Zeroclaw's DeepSeek-V4 bug (#6059) has 14 comments but no fix PR yet. OpenClaw sees higher volume but also more maintainer-driven work.

## 6. Community Activity Notes

**High activity tier:** OpenClaw — 374 issues and 500 PRs updated, two releases, 160 merged PRs. Community regression discussions span multiple P1 issues with 10+ comments each.

**Moderate activity tier:** Zeroclaw (19 issues, 40 PRs, 6 merged) and PicoClaw (6 issues, 32 PRs, 1 nightly release, 8 merged). Zeroclaw's DeepSeek-V4 discussion (#6059) is the single most active cross-project thread outside OpenClaw.

**Lower activity tier:** NanoBot (10 issues, 21 PRs, 8 merged, no release). Despite lower volume, NanoBot resolved five bugs in one batch, showing high efficiency per item.

All four projects show recent maintainer engagement (within 24 hours), though PicoClaw has several stale PRs (7+ days without reviewer assignment) and Zeroclaw has two stale blocked issues (#5570, #5470) dating to April.

## 7. Evidence-Backed Observations

1. **Regression regression is the dominant pattern in OpenClaw** — Two releases this week (v2026.5.26, v2026.5.22) triggered at least 5 P1-level bugs (native hook relay failures, event-loop starvation, Telegram duplicates, WhatsApp @mention drops, webchat tool hangs). This is not observed in peers, who show more steady-state bug fixing.

2. **Cross-project focus on session context and concurrency** — OpenClaw's event-loop starvation, NanoBot's mutable request context fix, and Zeroclaw's context compressor bug all address the same class of problem: ensuring agents maintain correct state across concurrent or interrupted operations. This suggests a shared community pain point.

3. **Community contributions are driving key integrations** — NanoBot's GitAgent Protocol and WebUI panel, OpenClaw's Speakeasy Telegram voice button and skill setup hooks, and PicoClaw's NEAR AI Cloud provider all originate from external contributors. This indicates healthy extension ecosystems.

4. **Security hardening is project-specific, not cross-project** — OpenClaw's v2026.5.27 is the only explicit security release today. No peer shows equivalent security-focused activity. The absence suggests either earlier maturity (peers haven't reached that phase) or different priorities.

5. **No clear cross-project optimization signal** — While PicoClaw has a performance optimization proposal (#2916) and NanoBot has context-budget fixes, these are isolated. There is no evidence of shared optimization efforts, common performance benchmarks, or cross-project coordination on efficiency.

6. **PicoClaw's stale PR backlog may indicate maintainer bandwidth constraints** — Seven PRs from May 20-21 remain with no reviewer assignment, including dependency bumps and bug fixes. This contrasts with OpenClaw where 160 PRs were merged/closed today. No other peer shows similar stagnation.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-29

## 1. Today's Activity Brief
In the last 24 hours, NanoBot saw 10 issues updated (7 closed, 3 open) and 21 pull requests updated (8 merged/closed, 13 open). A major bug-fix batch (#4041) merged five concurrency and context-budgeting fixes reported by the same contributor. The community delivered two independent GitAgent Protocol support PRs (one merged, one open) and a new self-hosted web management panel (`nanobot-webui`) was showcased. Several open PRs are advancing workspace management, extension registries, and provider configuration. No new releases were cut today.

## 2. Releases
No new releases today.

## 3. Project Progress
Eight pull requests were merged or closed today:
- **#4032** — Added optional `AUTHORITY.md` bootstrap file for high-priority behavioral prompts.
- **#4015** — Added observation-reflection prompt after tool execution to improve agent loop self‑correction.
- **#4007** — Introduced WebUI project workspaces with persistent scope and access controls.
- **#4041** — Fixed five bugs (#4036, #4037, #4038, #4039, #4040) covering session-lock ordering, concurrent goal context, streaming duplication, context-budget token counting, and `/stop` cancellation in unified-session mode.
- **#4023** — Replaced standalone HeartbeatService with a cron-based auto-registration system.
- **#3937** — Implemented user confirmation mechanism for dangerous shell commands.
- **#4031** — Added a Discord `/model` slash command to switch runtime presets.
- **#4030** — Added GitAgent Protocol support (`agent.yaml` + `SOUL.md`) to NanoBot.

Additionally, closed issues such as #1922 (community-built `nanobot-webui` panel) and #2772 (WeChat 10-message limit query) reflect active use.

## 4. Community Hot Topics
- **#1922 ([CLOSED] `nanobot-webui` panel)** — The most reacted issue (12 comments, 10 👍). Author built a self-hosted web management UI with dashboards, real-time chat, and configurable providers/channels/MCP servers. Community enthusiasm suggests demand for richer self-hosted interfaces.
  [Issue](https://github.com/HKUDS/nanobot/issues/1922)

- **#4044 ([OPEN] short-term memory loss)** — Bug report describing that NanoBot forgets the context of its own questions. Three comments, no maintainer reply yet. Resonates with other session/context issues.
  [Issue](https://github.com/HKUDS/nanobot/issues/4044)

- **#4034 / #4030 — GitAgent Protocol** — Two PRs (one merged, one still open) from the same external contributor proposing support for the GitAgent.sh portable agent standard. Indicates community interest in interoperability.
  Open PR: [#4034](https://github.com/HKUDS/nanobot/pull/4034) | Merged PR: [#4030](https://github.com/HKUDS/nanobot/pull/4030)

- **#4048 ([OPEN] arrearage warning fix)** — PR surfacing clear billing/quota errors to users rather than silent failures. Closes #3006.
  [PR](https://github.com/HKUDS/nanobot/pull/4048)

## 5. Bugs & Stability
This day had a high concentration of bug fixes. Major bugs reported and addressed:

| Issue | Summary | Severity | Fix PR |
|---|---|---|---|
| #4044 | Short-term memory loss: agent asks a question, then forgets it asked. | High | No fix PR yet |
| #4042 | Matrix channel lacks `m.key.verification.*` handling, causing “unverified device” warnings in Element X. | Medium | None |
| #4040 | `/stop` fails to cancel active tasks when `unified_session` is enabled. | Medium | Fixed in #4041 |
| #4039 | Context snipping ignores tool-schema tokens when computing retained history budget. | Medium | Fixed in #4041 |
| #4038 | Streaming retry duplicates already-emitted deltas after partial failure. | High (user-visible) | Fixed in #4041 |
| #4037 | `long_task` and `complete_goal` share mutable request context across concurrent sessions. | High | Fixed in #4041 |
| #4036 | Pending queue overwrite reroutes follow-up messages away from the active turn. | Medium | Fixed in #4041 |

The #4041 batch resolved five bugs in a single PR. The memory loss (#4044) and Matrix E2EE (#4042) remain open without a fix PR.

## 6. Feature Request Clusters
Multiple feature requests and corresponding PRs surfaced today, clustering around a few areas:

- **Configurability & Flexibility**
  - #4043 (enhancement): Request for a config option to disable automatic document extraction when users prefer custom pipelines. No PR yet.
  - #2772 (closed): User asked how to raise the 10-message limit in WeChat; closed without resolution.

- **Workspace & Project Management**
  - #4007 (merged): WebUI project workspaces with per-chat folder binding.
  - #4045 (open): WebUI context window size selector (64K / 256K).
  - #4046 (open): External extension registry for Apps catalog.

- **Agent Collaboration & Standards**
  - #3992 (open): Cross-instance agent messaging bus for multi-agent collaboration.
  - #4034 / #4030: GitAgent Protocol support (portable agent files).

- **Platform-Specific Features**
  - #4016 (open): DingTalk group chat per-user session isolation via `group_user_isolation` setting.
  - #4017 (open): Parse text-format tool_calls from OpenAI-compatible providers (e.g., Xiaomi MiMo).

- **Security / Trust**
  - #4047 (open): Hardening Microsoft Teams channel against untrusted service URLs.
  - #3937 (merged): User confirmation for dangerous commands.

No PRs exist yet for #4043 or #4042.

## 7. User Feedback Summary
- **Pain points**: Users report context loss (#4044), limited message return count in WeChat (#2772), lack of control over automatic document extraction (#4043), and confusing E2EE warnings on Matrix (#4042). The concentration of bug reports by @hamb1y (#4036–#4040) highlights real-world concurrency and cancellation issues.
- **Positive signals**: The community-built `nanobot-webui` (#1922) received 10 👍, showing appetite for a full-featured management interface. The GitAgent Protocol PRs (#4030, #4034) indicate external developers view NanoBot as an extensible, portable platform.
- **User behaviour**: Contributors are actively submitting fixes (hamb1y, chengyongru, Re-bin, etc.) and feature PRs, reflecting a healthy open-source ecosystem.

## 8. Backlog Watch
No issues or PRs appear to be long-unanswered in today’s data: the oldest open issue is from 2026-05-28 (#4044, #4043, #4042, #4040). Most PRs have recent maintainer activity. The #4047 security fix for Microsoft Teams has been open for only a few hours. Maintainer attention may be needed on:
- **#4044 (short-term memory loss)** — No fix PR yet; high-impact bug affecting conversational coherence.
- **#4042 (Matrix verification)** — Could hamper E2EE adoption for Element X users; no response.
- Several open enhancement PRs (#3994, #3992, #3990, #4017, #4016, #3997) are waiting review, but none are blocked by maintainer inaction.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest — 2026-05-29

## Today’s Activity Brief

In the last 24 hours, Zeroclaw saw **19 issues updated** (18 still open, 1 closed) and **40 PRs updated** (34 open, 6 merged/closed). No new releases were published. The most intense discussion centred on **DeepSeek-V4 API incompatibility** (#6059, 14 comments). A major **integration PR** (#6848) for the beta‑2 release candidate and TUI application “zerocode” gathered broad cross‑component changes, while three PRs were closed: one fixing OpenAI Codex subscription onboarding, one tweaking Slack’s default mention rule, and one adding native extended thinking support for Anthropic.

## Releases
None.

## Project Progress
Six PRs were closed or merged in the last 24 hours. Three are visible in the provided data:

- **#6908** ([PR](https://github.com/zeroclaw-labs/zeroclaw/pull/6908)) – `fix(onboard): add Codex subscription auth for OpenAI provider`
  Allows configuring “requires-openai-auth” without an API key for ChatGPT Plus/Pro users.

- **#6994** ([PR](https://github.com/zeroclaw-labs/zeroclaw/pull/6994)) – `fix(slack): default strict_mention_in_thread to true`
  Makes the @-mention rule apply uniformly to top‑level messages and thread replies.

- **#5650** ([PR](https://github.com/zeroclaw-labs/zeroclaw/pull/5650)) – `feat(provider): add native extended thinking for Anthropic provider`
  Introduces `budget_tokens` and `native_thinking` configuration for Anthropic’s dedicated reasoning chain API.

## Community Hot Topics

- **#6059** ([Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6059)) – `[Bug]: Incompatible with DeepSeek-V4 API format` – **14 comments, 4 👍**
  High‑risk `S2` bug; both DeepSeek-V4-Pro and Flash models fail with errors related to thinking mode. Labelled `in-progress` and `priority:p1`.

- **#6147** ([Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6147), closed) – `Anthropic opus-4-7 temperature shape on native API` – 4 comments, closed after verification that the native API is more permissive than Bedrock.

- **#5674** ([Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5674)) – `[Feature]: Make classify_channel_reply_intent configurable` – **4 comments, 3 👍**
  The “should I reply” gate is irrelevant in 1:1 chats and causes the assistant to ignore users.

- **#5570** ([Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5570)) – `Faster SQLite memory vector search through ANN` – 4 comments, stale/blocked, awaiting author action.

- **#6848** ([PR](https://github.com/zeroclaw-labs/zeroclaw/pull/6848)) – `feat(integration): introduce zerocode TUI, RPC socket transport, DenyWithEdit approval, and beta-2 integration` – Size XL, touches nearly every component. Seeking first‑round feedback.

## Bugs & Stability

New bugs reported today (created or updated 2026-05-28) with high severity:

| Issue | Severity | Description | Component |
|-------|----------|-------------|-----------|
| **#6992** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/6992)) | S1 – workflow blocked | Slack Socket Mode rejects all messages as “unauthorized user” | channel/slack |
| **#6975** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/6975)) | S1 – workflow blocked | `zeroclaw onboard` marks sections complete without writing config | onboard |
| **#6991** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/6991)) | S2 – degraded behavior | Native tool serialization ignores Risk Profile and Tool Filter restrictions in v0.8.0-beta-1 | runtime |
| **#6976** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/6976)) | S2 – degraded behavior | Web UI WebSocket chat fails with 1006 – missing `?agent=` query parameter | gateway/ws |
| **#6995** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/6995)) | S2 – degraded behavior | Backspace in `zeroclaw agent` CLI deletes byte‑by‑byte for CJK characters | CLI |
| **#6548** ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/6548)) | S3 – minor | Channel runtime command replies bypass Fluent localization | channel/core |

Ongoing high‑risk bugs include #6059 (DeepSeek-V4, priority p1, in‑progress) and #6361 (context_compressor drops tool calls for OpenAI‑compatible providers, priority p1, in‑progress). No fix PRs have been opened yet for the newly reported bugs, though several existing PRs (e.g. #6908, #6994) address related stability issues.

## Feature Request Clusters

- **Granular sandbox policy** – [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) (RFC): config‑driven filesystem and network restrictions for Landlock/Bubblewrap/Seatbelt backends.
- **i18n for file_download tool** – [#6990](https://github.com/zeroclaw-labs/zeroclaw/issues/6990): bring new tool strings under the `fl!()` / Fluent contract.
- **Header token redaction** – [#6989](https://github.com/zeroclaw-labs/zeroclaw/issues/6989): extend `#[secret]` derive to handle `HashMap` values so bearer tokens in `[mcp.servers.*.headers]` and `[file_upload].headers` are redacted.
- **Ephemeral daemon mode** – [#6818](https://github.com/zeroclaw-labs/zeroclaw/issues/6818) (in‑progress): `zeroclaw daemon --ephemeral` to self‑terminate when last RPC client disconnects.
- **Session‑scoped runtime overrides** – [#6817](https://github.com/zeroclaw-labs/zeroclaw/issues/6817) (in‑progress): per‑session model/temperature changes without daemon reload.
- **Cron announce mode** – [#6510](https://github.com/zeroclaw-labs/zeroclaw/issues/6510) (accepted): option to send only the final assistant message instead of every intermediate text turn.
- **Configurable channel reply intent** – [#5674](https://github.com/zeroclaw-labs/zeroclaw/issues/5674) (in‑progress): make `classify_channel_reply_intent` switchable per agent.

## User Feedback Summary

- **@SSDGADsss** reports that both DeepSeek-V4-Pro and Flash APIs fail with thinking‑mode‑related errors, blocking use of the model (#6059).
- **@harry‑m** is frustrated that the reply‑intent gate causes the assistant to ignore them in 1:1 private chats (#5674).
- **@nxtkofi** experiences multiple issues when running “safely” with GPT‑5.4: duplicate telegram memory saves, inaccurate token counting, and cron channel formatting problems (#5470).
- **@pavelanni** reports that `zeroclaw onboard` completes interactively but writes no config, and that the Web UI WebSocket fails with a 1006 error due to a missing query parameter (#6975, #6976).
- **@nmgray** states that Slack Socket Mode rejects every message as “unauthorized user”, making the channel unusable (#6992).
- **@creator521314** says the CLI backspace deletes byte‑by‑byte, requiring three backspaces to remove a single CJK character (#6995).
- **@phildetof** notes that in v0.8.0‑beta‑1 tool serialization ignores configured Risk Profile and Tool Filter restrictions (#6991).
- **@aguung** wants an option in cron `announce` mode to avoid flooding the channel with every intermediate reasoning turn (#6510).
- **@drbparadise** observes that channel runtime command replies are still hard‑coded English even when locale is set to `zh‑CN` (#6548).

## Backlog Watch

Several important issues and PRs remain blocked or awaiting author action:

- **#5570** ([Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5570)) - Faster SQLite ANN memory search – **stale, blocked, needs author action** since 2026-04-09.
- **#5470** ([Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5470)) - Multiple instability issues – **stale, blocked, needs reproduction** since 2026-04-07.
- **#5450** ([PR](https://github.com/zeroclaw-labs/zeroclaw/pull/5450)) - IPv6 support and reqwest.url fix – **needs author action** since 2026-04-07.
- **#6428** ([PR](https://github.com/zeroclaw-labs/zeroclaw/pull/6428)) - Slack thread backfill on first encounter – **needs author action** since 2026-05-06.
- **#5187** ([PR](https://github.com/zeroclaw-labs/zeroclaw/pull/5187)) - arm64 Docker target – **needs author action** since 2026-04-02.
- **#6389** ([PR](https://github.com/zeroclaw-labs/zeroclaw/pull/6389)) - Per‑recipient reply pacing across 9 channels – **needs author action** since 2026-05-05.
- **#6361** ([Issue](https://github

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-29

## 1. Today’s Activity Brief
Today saw a **nightly release (v0.2.9-nightly.20260529)** and lively community interaction: **6 issues were updated** (2 open, 4 closed) and **32 pull requests were updated** (24 open, 8 merged/closed). Notable new PRs include inbound image compression (#2964), a fix for workspace guard misreading scheme‑less URLs (#2965), and several dependency bumps (Anthropic SDK, larksuite, Pion RTP, etc.). An enhancement to add an OpenAI API‑compatible channel (#1738) was closed, indicating likely completion.

## 2. Releases
**Nightly build (v0.2.9-nightly.20260529.85751492)**
An automated build from the `main` branch, tagged as `nightly`. This version is considered unstable. The full changelog between v0.2.9 and `main` can be viewed at:
[https://github.com/sipeed/picoclaw/compare/v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)
No breaking changes or migration notes were provided.

## 3. Project Progress
Eight pull requests were merged or closed today. Key closed items include:
- **Dependency bumps** – `larksuite/oapi-sdk-go` (v3.7.5 → v3.9.2 in #2918) and `anthropics/anthropic-sdk-go` (v1.26.0 → v1.45.0 in #2920) – both merged.
- **Four issues were closed**, representing tangible progress:
  - **#1738** (closed) – Added OpenAI API‑format channel support (feature request).
  - **#2855** (closed) – Extended `message` tool to support media attachments and channel‑aware outbound delivery.
  - **#2912** (closed) – Added `FUNDING.yml` to support project sponsorship.
  - **#2944** (closed) – Fixed X509 certificate errors in Termux/Termux‑chroot by explicitly setting `SSL_CERT_FILE`.

Two open PRs also advance stability and functionality:
- **#2965** – Fixes a workspace guard bug that misreads scheme‑less URLs (e.g. `curl -s "wttr.in/Beijing?T"`).
- **#2964** – Adds configurable inbound image compression for the vision pipeline.

## 4. Community Hot Topics
The most active discussions centered on:

- **#2887** (open, 7 comments) – **BUG: .deb version on RISC‑V not functional with OpenAI model**
  The user reports that PicoClaw v0.2.8 on Debian GNU/Linux (RISC‑V) fails when using GPT‑5.4. No maintainer response is visible yet.
  [https://github.com/sipeed/picoclaw/issues/2887](https://github.com/sipeed/picoclaw/issues/2887)

- **#2916** (open, 3 comments) – **CPU, Memory and IO optimizations**
  A detailed proposal for overall performance improvements; the issue includes code references and optimisation suggestions.
  [https://github.com/sipeed/picoclaw/issues/2916](https://github.com/sipeed/picoclaw/issues/2916)

- **#1738** (closed, 3 comments) – **Feature: OpenAI API‑format channel**
  This long‑standing request was resolved today, satisfying users who wanted to embed PicoClaw into existing systems without major modifications.
  [https://github.com/sipeed/picoclaw/issues/1738](https://github.com/sipeed/picoclaw/issues/1738)

## 5. Bugs & Stability
| Severity | Issue/PR | Description | Status |
|----------|----------|-------------|--------|
| **High** | [#2887](https://github.com/sipeed/picoclaw/issues/2887) | `.deb` on RISC‑V fails with OpenAI models (gpt‑5.4) – likely a platform‑specific build issue. | Open, no fix PR |
| **Medium** | [#2944](https://github.com/sipeed/picoclaw/issues/2944) | X509 certificate errors in Termux – fixed by setting `SSL_CERT_FILE`. | Closed |
| **Medium** | [#2965](https://github.com/sipeed/picoclaw/pull/2965) | Workspace guard misreads scheme‑less URLs, causing false path extraction. Fix in review. | Open PR |
| **Medium** | [#2907](https://github.com/sipeed/picoclaw/pull/2907) | JSONL session metadata drift after a crash – fixes crash‑consistency in `pkg/memory`. | Open PR |
| **Low** | [#2913](https://github.com/sipeed/picoclaw/pull/2913) | JSONL session index hot‑path cloning and TTL refresh – performance fix for cache hits. | Open PR |

Missing maintainer attention on the high‑severe RISC‑V bug (#2887) may be a concern for users on that architecture.

## 6. Feature Request Clusters
Several user‑requested features have either been delivered or are under active development:

- **Provider / AI Service Support**
  - **NEAR AI Cloud provider** – PR #2917 adds a first‑class OpenAI‑compatible provider for NEAR AI Cloud, with model‑list fetch and TEE‑capable suggestions.
  - **MiMo provider CommonModels** – PR #2915 adds `mimo‑v2.5` (multimodal) and `mimo‑v2.5‑pro` (text‑only) to improve WebUI model recommendation.

- **Media Handling**
  - **Image input compression** – PR #2964 introduces configurable inbound compression for the vision pipeline.
  - **Message tool with media attachments** – Issue #2855 (closed) extended the `message` tool to support rich outbound delivery with media; now merged.

- **Performance Optimizations**
  - Issue #2916 remains open with a detailed proposal covering CPU, memory, and IO improvements. No associated PR yet.

- **Sponsorship / Funding**
  - Issue #2912 (closed) added `FUNDING.yml` – a quick community suggestion adopted by maintainers.

## 7. User Feedback Summary
- **Pain points expressed**:
  - **RISC‑V compatibility** – A user on Debian RISC‑V cannot use PicoClaw with OpenAI models (#2887). This is a blocking issue for that niche platform.
  - **Termux certificate errors** – Reported and quickly fixed (#2944). User noted that `curl` worked fine but PicoClaw failed – a CA bundle resolution issue.
- **Positive/neutral**:
  - The addition of OpenAI API channel (#1738) was well received (👍: 1) and addresses a common integration need.
  - A contributor suggested adding a `FUNDING.yml` to enable financial support via GitHub Sponsors; this was closed as implemented.

## 8. Backlog Watch
Items that may require maintainer attention:

| Item | Age (since) | Notes |
|------|-------------|-------|
| [#2887](https://github.com/sipeed/picoclaw/issues/2887) – RISC‑V OpenAI bug | 2026-05-17 | No fix PR, no maintainer comment. High severity for affected users. |
| [#2916](https://github.com/sipeed/picoclaw/issues/2916) – CPU/Memory/IO optimisations | 2026-05-21 | Stale label applied. User has provided detailed code analysis; needs review or decision. |
| [#2917](https://github.com/sipeed/picoclaw/pull/2917) – NEAR AI Cloud provider | 2026-05-21 | Stale, no reviewer assigned. |
| [#2915](https://github.com/sipeed/picoclaw/pull/2915) – MiMo provider CommonModels | 2026-05-21 | Stale. |
| [#2913](https://github.com/sipeed/picoclaw/pull/2913) – JSONL session index fix | 2026-05-21 | Stale, performance improvement. |
| [#2908](https://github.com/sipeed/picoclaw/pull/2908) – Restore provider logo fallbacks | 2026-05-20 | Stale, frontend fix. |
| [#2907](https://github.com/sipeed/picoclaw/pull/2907) – JSONL crash‑consistency fix | 2026-05-20 | Stale. |
| Multiple dependabot PRs (#2918–2927) | 2026-05-21 | Many marked `stale`; they bump React, shadcn, TanStack Router, etc. Mostly safe to merge after brief testing. |

The high number of stale PRs suggests maintainers may be resource‑constrained or prioritizing other work.

</details>