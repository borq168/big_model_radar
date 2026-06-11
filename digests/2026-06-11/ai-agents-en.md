# OpenClaw Ecosystem Digest 2026-06-11

> Issues: 500 | PRs: 500 | Projects covered: 4 | Generated: 2026-06-11 02:46 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-06-11

## 1. Today's Activity Brief

OpenClaw saw extremely high activity with **500 issues** and **500 PRs** updated in the last 24 hours. 30 issues were closed and 102 PRs were merged or closed. A new beta release **v2026.6.6-beta.1** was published, focusing on tightening security boundaries across transcripts, sandbox binds, host environment inheritance, MCP stdio, Codex HTTP access, native search policy, elevated sender checks, deleted-agent ACP bypasses, loopback tools, Discord moderation, and Teams group access. Community discussions remain centered on message leakage, session state corruption, and multi-agent orchestration reliability.

## 2. Releases

**v2026.6.6-beta.1** (OpenClaw 2026.6.6-beta.1)
[Release link](https://github.com/openclaw/openclaw/releases/tag/v2026.6.6-beta.1)

- **Highlights** (from release notes): Security boundaries tightened substantially across:
  - transcripts
  - sandbox binds
  - host environment inheritance
  - MCP stdio
  - Codex HTTP access
  - native search policy
  - elevated sender checks
  - deleted-agent ACP bypasses
  - loopback tools
  - Discord moderation
  - Teams group access

No breaking changes or migration notes were listed in the provided data.

## 3. Project Progress

**Merged/closed PRs today (102 total):** Among the top 30 PRs by comment count, two were closed:

- **[#77367 – fix(discord): scope command-deploy cache by application id](https://github.com/openclaw/openclaw/pull/77367)** – Fixes multi-bot Discord slash command registration (secondary accounts). Merged.
- **[#91296 – fix: hand off supervised git updates](https://github.com/openclaw/openclaw/pull/91296)** – Routes supervised git-source update calls through the detached update handoff path. Closed (merged).

Other notable PRs in progress (open) include:
- [#90579 – fix: allow trusted host-read html after outbound staging](https://github.com/openclaw/openclaw/pull/90579)
- [#90110 – fix(anthropic): resolve Claude Haiku 4.5 static catalog refs](https://github.com/openclaw/openclaw/pull/90110)
- [#91976 – feat(auto-reply): durable inter-tool commentary via verbose standalone progress](https://github.com/openclaw/openclaw/pull/91976)
- [#88810 – fix(telegram): silently skip empty-text sends](https://github.com/openclaw/openclaw/pull/88810)
- [#90167 – fix(plugins): resolve config env vars for runtime loads](https://github.com/openclaw/openclaw/pull/90167)
- [#89975 – fix(reply): suppress direct tool-error progress leaks](https://github.com/openclaw/openclaw/pull/89975)
- [#92073 – fix: handle explicit silent assistant replies](https://github.com/openclaw/openclaw/pull/92073) (just opened today)
- [#92071 – fix(anthropic): resolve thinking profile for custom Anthropic-compatible providers](https://github.com/openclaw/openclaw/pull/92071) (just opened)
- [#92063 – fix(ui): collapse duplicate assistant groups during segmented streaming](https://github.com/openclaw/openclaw/pull/92063) (just opened)
- [#92053 – fix(thinking): apply Claude profile to anthropic-messages catalog rows](https://github.com/openclaw/openclaw/pull/92053)

## 4. Community Hot Topics

The most commented issues and PRs reflect deep user concerns around **message leakage**, **session state corruption**, and **tool reliability**.

### Top Issues by Comment Count

| Issue | Comments | Summary | Link |
|-------|----------|---------|------|
| #25592 | 31 | Text between tool calls leaks to messaging channels (P1, security, message-loss) | [Issue](https://github.com/openclaw/openclaw/issues/25592) |
| #44925 | 19 | Subagent completion silently lost — no retry, no notification, no auto-restart on timeout (P1) | [Issue](https://github.com/openclaw/openclaw/issues/44925) |
| #88838 | 19 | Track core session/transcript SQLite migration via accessor seam (P0, maintainer) | [Issue](https://github.com/openclaw/openclaw/issues/88838) |
| #32473 | 17 | Control UI requires device identity (HTTPS/localhost) – regression (P2, security) | [Issue](https://github.com/openclaw/openclaw/issues/32473) |
| #22438 | 17 | Tiered bootstrap file loading for progressive context control (P2, feature) | [Issue](https://github.com/openclaw/openclaw/issues/22438) |
| #22676 | 17 | Signal daemon stop() race condition on SIGUSR1 restart (P1, message-loss, crash-loop) | [Issue](https://github.com/openclaw/openclaw/issues/22676) |
| #32296 | 15 | Agent replies to previous message instead of current message (P1, session confusion) | [Issue](https://github.com/openclaw/openclaw/issues/32296) |
| #58450 | 15 | Agent can promise follow-up without starting any action (P2) | [Issue](https://github.com/openclaw/openclaw/issues/58450) |
| #29387 | 14 | Bootstrap files in agentDir silently ignored – only workspace files injected (P1, security) | [Issue](https://github.com/openclaw/openclaw/issues/29387) |
| #39604 | 13 | Feature: Add `tools.web.fetch.allowPrivateNetwork` (P2, 9 👍) | [Issue](https://github.com/openclaw/openclaw/issues/39604) |
| #41744 | 12 | Feishu: read image tool result loses media before final outbound payload (P1) | [Issue](https://github.com/openclaw/openclaw/issues/41744) |
| #42475 | 12 | Feature: Per-agent cost budget enforcement at gateway (P2) | [Issue](https://github.com/openclaw/openclaw/issues/42475) |
| #31583 | 12 | `exec` tool does not inherit `skills.entries.*.env` environment variables (P1, regression, security) | [Issue](https://github.com/openclaw/openclaw/issues/31583) |
| #22358 | 12 | Feature: Post-subagent completion extension hook (P2) | [Issue](https://github.com/openclaw/openclaw/issues/22358) |
| #18160 | 12 | Feature: Direct Exec Mode for Cron Jobs (P2, 10 👍) | [Issue](https://github.com/openclaw/openclaw/issues/18160) |
| #40001 | 11 | Write tool lacks append mode – isolated cron sessions destroy shared files (P1, data-loss) | [Issue](https://github.com/openclaw/openclaw/issues/40001) |
| #13583 | 11 | Feature: Pre-response enforcement hooks (hard gates) for mandatory tool-call / policy rules (P2) | [Issue](https://github.com/openclaw/openclaw/issues/13583) |
| #44905 | 10 | Discord leaks internal tool-call traces (NO_REPLY, commentary, JSON) to channel (P1) | [Issue](https://github.com/openclaw/openclaw/issues/44905) |
| #74586 | 10 | AM embedded run aborts memory_search tool calls; classifies as timeout despite model completion | [Issue](https://github.com/openclaw/openclaw/issues/74586) |
| #43367 | 10 | Multi-agent orchestration instability: config overwrites, session-lock failures, detached work (P1) | [Issue](https://github.com/openclaw/openclaw/issues/43367) |

### Top PRs by Comment Count (all had no comment count shown in data, but are active)

- [#77367 (closed)](https://github.com/openclaw/openclaw/pull/77367) – Discord multi-bot fix
- [#90579 (open)](https://github.com/openclaw/openclaw/pull/90579) – Trusted HTML outbound staging
- [#90110 (open)](https://github.com/openclaw/openclaw/pull/90110) – Claude Haiku 4.5 catalog refs
- [#91976 (open)](https://github.com/openclaw/openclaw/pull/91976) – Durable inter-tool commentary
- [#89920 (open)](https://github.com/openclaw/openclaw/pull/89920) – Matrix command progress recovery
- [#89975 (open)](https://github.com/openclaw/openclaw/pull/89975) – Suppress tool-error progress leaks

**Underlying needs:** Users are demanding reliable message delivery without internal tool artifacts leaking, robust session state management across agent orchestration, and better security boundaries around tool execution and network access.

## 5. Bugs & Stability

### Critical/High Severity Bugs (P0/P1) with Security or Data Loss Impact

| Issue | Severity | Impact | Fix PR exists? | Notes |
|-------|----------|--------|----------------|-------|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | P1 | Security, message-loss | Linked PR open (no new fix PR label) | Text between tool calls leaks to channels |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | P1 | Session-state, message-loss | Needs maintainer review, no fix PR yet | Subagent completion silently lost |
| [#88838](https://github.com/openclaw/openclaw/issues/88838) | P0 | Session-state, message-loss | Maintainer tracked | SQLite migration tracking issue |
| [#32473](https://github.com/openclaw/openclaw/issues/32473) | P2 (regression) | Security, auth-provider | Needs security review | Control UI HTTPS requirement |
| [#22676](https://github.com/openclaw/openclaw/issues/22676) | P1 | Message-loss, crash-loop | Linked PR open | Signal daemon race condition |
| [#32296](https://github.com/openclaw/openclaw/issues/32296) | P1 | Session-state, message-loss | Needs product decision | Agent replies to previous message |
| [#29387](https://github.com/openclaw/openclaw/issues/29387) | P1 | Session-state, security | Needs maintainer review | Bootstrap files ignored |
| [#31583](https://github.com/openclaw/openclaw/issues/31583) | P1 (regression) | Security, auth-provider | Needs security review | `exec` tool doesn't inherit env vars |
| [#31331](https://github.com/openclaw/openclaw/issues/31331) | P1 (regression) | Session-state, security | Needs product decision | Docker sandbox workspaceAccess broken |
| [#37634](https://github.com/openclaw/openclaw/issues/37634) | P1 | Session-state, security | Linked PR open | Sandbox workspace writable when access=none |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | P1 (regression) | Auth-provider, crash-loop | Source repro | Null/undefined error with Gemini |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | P1 | Data-loss | Linked PR open | Write tool lacks append mode |
| [#44905](https://github.com/openclaw/openclaw/issues/44905) | P1 |

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-06-11

## 1. Daily Cross-Project Overview

Today’s activity across the four tracked projects was dominated by OpenClaw, which processed over 500 issues and 500 PRs and released a major security-hardening beta. Zeroclaw and NanoBot both shipped multiple bug fixes and feature PRs, with Zeroclaw exhibiting higher volume (42 issues, 50 PRs) and NanoBot focusing on stream reliability and session isolation. PicoClaw had a quieter day, merging a critical SSRF bypass patch and a long-standing Windows path bug. Cross-cutting concerns around message leakage, session state corruption, and multi-agent reliability appear in all projects, reinforcing these as top pain points in the agent ecosystem.

## 2. Activity Comparison

| Project    | Issues Updated (closed) | PRs Updated (merged/closed) | Release(s) Today            | Activity Note |
|------------|--------------------------|------------------------------|-----------------------------|---------------|
| OpenClaw   | 500 (30 closed)          | 500 (102 merged/closed)      | v2026.6.6-beta.1            | Extremely high activity; security-focused beta with 11 boundary categories tightened. |
| NanoBot    | 10 (6 closed)            | 34 (19 merged/closed)        | None (latest v0.2.1)        | Moderate activity; stream stall fix, session-scoped history, SiliconFlow transcription merged. |
| Zeroclaw   | 42 (19 closed)           | 50 (17 merged/closed)        | None                        | High activity; critical bug fixes (image delivery, Discord thread reply) and RFCs for turn-engine unification. |
| PicoClaw   | 5 (0 closed)             | 15 (6 merged/closed)         | v0.2.9-nightly (automated)  | Low activity; SSRF bypass fix and Windows `list_dir` bug closed; new duplicate-message bug filed. |

## 3. OpenClaw Compared With Peers

- **Activity volume**: OpenClaw’s 500+ issues and 500+ PRs in 24 hours is two orders of magnitude larger than any peer (Zeroclaw second with 42 issues, 50 PRs). This reflects its role as the core reference implementation with the largest user and contributor base.
- **Technical focus**: Today’s OpenClaw release hardens security boundaries across 11 areas (transcript, sandbox, MCP, Discord, Teams, etc.), while peers address narrower security items (PicoClaw SSRF, Zeroclaw token revocation, NanoBot bwrap `$HOME`). OpenClaw’s community discussion also centers on complex orchestration failures (subagent completion silently lost, session lock failures) that are less amplified in other projects.
- **Community surface area**: OpenClaw’s top issues attract 10–31 comments each, covering Discord leaks, tool-error progress leaks, and multi-agent instability. Peers’ top issues have 2–6 comments, indicating a smaller or less vocal user base. The breadth of platform integrations (Discord, Teams, Feishu, Telegram, Matrix) is unique to OpenClaw among these four projects.

## 4. Shared Technical Focus Areas

- **Security boundaries & access control**:
  OpenClaw’s release blocked loopback tools, tightened sandbox binds, and added elevated sender checks. PicoClaw closed an SSRF bypass (198.18.0.0/15). Zeroclaw has an open PR for token revocation (#7243). NanoBot’s bwrap `$HOME` not reset (#4237) was resolved today.

- **Session state & message integrity**:
  OpenClaw’s top issues report message leakage (#25592), subagent completion silently lost (#44925), and agent replying to previous message (#32296). NanoBot fixed cross-session history pollution (#4259) and stream stall (#4013). Zeroclaw has an open S1 bug on user message loss (#6034). PicoClaw filed a duplicate-message bug in async sub-agents (#3094).

- **Multi-agent orchestration reliability**:
  OpenClaw tracks subagent timeout/retry (#44925) and multi-agent orchestration instability (#43367). NanoBot has cron ending early when subagent spawned (#4290) and a PR for configurable subagent presets (#4291). Zeroclaw addresses subagent CWD inheritance (#7263) and delegate agentic mode (#7470). PicoClaw’s #3094 is about async sub-agent duplicates.

- **Tool execution environment**:
  OpenClaw has `exec` tool not inheriting env vars (#31583) and write tool lacking append mode (#40001). NanoBot added `pathPrepend` for exec (#4273) and fixed bwrap `$HOME`. Zeroclaw’s subagent CWD inheritance (#7263) is under review. PicoClaw fixed Windows path separation in `list_dir` (#2472).

## 5. Differentiation Analysis

| Project    | Feature Focus                                     | Target Users                          | Technical Architecture              |
|------------|---------------------------------------------------|---------------------------------------|-------------------------------------|
| OpenClaw   | Broad platform coverage, security hardening, orchestration | Large-scale deployments, enterprise   | Monolithic reference implementation in Python; extensive integration surface. |
| NanoBot    | Stream reliability, session isolation, WebUI enhancements | Individual developers, Telegram users | Python; lighter core, modular skills, WebUI-first. |
| Zeroclaw   | Architectural unification, plugin system, observability | Self-hosters, advanced admins         | Rust-based (Zerocode CLI/TUI); Kilo gateway integration; RFC-driven redesign. |
| PicoClaw   | Lightweight, edge-friendly, cross-platform        | SiPEED hardware users, security-conscious | Go-based; nightly builds; smaller community, focused on correctness and hardening. |

## 6. Community Activity Notes

Based solely on today’s issue/PR counts and releases:

- **High activity**: OpenClaw (500+ per category, new beta release)
- **Medium activity**: Zeroclaw (42 issues, 50 PRs, no release) and NanoBot (10 issues, 34 PRs, no release)
- **Low activity**: PicoClaw (5 issues, 15 PRs, one nightly release)

No project exhibited zero activity. OpenClaw’s counts dwarf all peers, consistent with its role as the largest project in this set.

## 7. Evidence-Backed Observations

1. **Security hardening is a cross-project priority** — OpenClaw’s beta tightens 11 security boundaries; PicoClaw patched an SSRF bypass; NanoBot addressed bwrap `$HOME` isolation; Zeroclaw has open PRs for token revocation. Each project today shipped or discussed at least one security fix.

2. **Message leakage and session corruption are top user pain points across all four projects** — OpenClaw’s #25592, #44925, #32296; NanoBot’s #4259; Zeroclaw’s #6034; and PicoClaw’s #3094 all describe similar symptoms: agent internals leaking to channels, messages forwarded to wrong sessions, or duplicate outputs. This indicates a systematic challenge in maintaining session boundaries in agent frameworks.

3. **Multi-agent orchestration reliability remains an active area** — Four independent bugs/feature requests across projects (OpenClaw #44925, #43367; NanoBot #4290; Zeroclaw #7263, #7470; PicoClaw #3094) deal with subagent lifecycle, CWD inheritance, and result delivery. No single project has a complete solution, suggesting the problem is not trivial.

4. **OpenClaw’s community engagement is an order of magnitude larger than peers** — 500 issues/PRs vs. ~40–50 for Zeroclaw, ~10–34 for NanoBot, ~5–15 for PicoClaw. While partly a reflection of project maturity and user base, this also means OpenClaw’s community discussions surface a richer set of edge cases and requirements.

5. **No clear cross-project architectural shift or new paradigm emerged today** — All changes are incremental: bug fixes, security patches, feature additions, and RFCs for future refactoring. There is no evidence of a disruptive new capability or consensus on a “standard” approach to agent orchestration.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest – 2026-06-11

## Today's Activity Brief
- **10 issues** updated in the last 24 hours (4 open, 6 closed). Key closed bugs include stream-stall timeout, `history.jsonl` session pollution, and bwrap `$HOME` not being reset.
- **34 pull requests** updated (15 open, 19 merged/closed). Notable merged changes add SiliconFlow transcription, segment transcript storage, session-scoped recent history, and fallback/retry on stream stalls.
- No new releases were published today; the latest release remains v0.2.1.

## Releases
No new releases. The most recent version is **v0.2.1**.

## Project Progress (Merged/Closed PRs)
The following PRs were merged or closed today, representing the main advances and fixes:

- **Fallback & retry on stream stall** — [#4272](https://github.com/HKUDS/nanobot/pull/4272) allows retry and fallback when a model stalls mid-response. Directly addresses [#4013](https://github.com/HKUDS/nanobot/issues/4013).
- **Session-scoped recent history** — [#4274](https://github.com/HKUDS/nanobot/pull/4274) fixes cross-session context pollution reported in [#4259](https://github.com/HKUDS/nanobot/issues/4259) by filtering `# Recent History` by session key.
- **`pathPrepend` for exec tool** — [#4273](https://github.com/HKUDS/nanobot/pull/4273) adds `tools.exec.pathPrepend` so users can give their virtualenv/binaries higher PATH precedence. Resolves [#3934](https://github.com/HKUDS/nanobot/issues/3934) (pip installation issue).
- **WebUI transcript segment storage** — [#4278](https://github.com/HKUDS/nanobot/pull/4278) replaces single-file transcript replay with segmented JSONL storage, making large chats cheaper to open.
- **On-demand version check** — [#4255](https://github.com/HKUDS/nanobot/pull/4255) removes background PyPI polling; users now click to check updates in Settings > About.
- **WebUI transcript size limit** — [#4247](https://github.com/HKUDS/nanobot/pull/4247) auto-compacts transcripts when they exceed the 8 MB hard limit.
- **Fail fast on invalid config** — [#4275](https://github.com/HKUDS/nanobot/pull/4275) causes NanoBot to error immediately on malformed config files instead of silently falling back to defaults.
- **Feishu lazy-load** — [#4277](https://github.com/HKUDS/nanobot/pull/4277) postpones loading the heavy `lark_oapi` SDK until the channel actually starts, improving startup.
- **SiliconFlow transcription** — [#4281](https://github.com/HKUDS/nanobot/pull/4281) registers SiliconFlow as a Whisper-compatible transcription provider.
- **Split message code‑block awareness** — [#4257](https://github.com/HKUDS/nanobot/pull/4257) prevents broken fences when splitting long messages.

Additionally, several refactors and smaller fixes were merged: [#4261](https://github.com/HKUDS/nanobot/issues/4261) (max_tokens→max_completion_tokens for GPT-5) was closed without a code change, likely as a configuration fix.

## Community Hot Topics
The most discussed issues and PRs in the last 24 hours:

- **Stream stall timeout** — [#4013](https://github.com/HKUDS/nanobot/issues/4013) (4 comments). User updated from v0.1.5post2 to v0.2.0 and got “stream stalled for more than 90 seconds”. The fix was merged today in [#4272](https://github.com/HKUDS/nanobot/pull/4272). The user expressed gratitude for the earlier version.
- **`exec` tool pip installation** — [#3934](https://github.com/HKUDS/nanobot/issues/3934) (3 comments, Chinese language). User reported system Python prevented pip installs; resolved via `pathPrepend` in [#4273](https://github.com/HKUDS/nanobot/pull/4273).
- **History cross-session pollution** — [#4259](https://github.com/HKUDS/nanobot/issues/4259) (2 comments). Detailed analysis of how `history.jsonl` entries from other sessions leaked into the current session’s system prompt. Fixed in [#4274](https://github.com/HKUDS/nanobot/pull/4274).
- **Empty model responses not fallbackable** — [#4287](https://github.com/HKUDS/nanobot/issues/4287) (1 comment). User reports DeepSeek returns empty `choices` during peak hours, but NanoBot classifies it as non-fallbackable. A fix PR [#4288](https://github.com/HKUDS/nanobot/pull/4288) is open, adding `'empty'` to fallback tokens.

## Bugs & Stability
- **High severity**: Empty model responses not triggering fallback ([#4287](https://github.com/HKUDS/nanobot/issues/4287)). Fix PR [#4288](https://github.com/HKUDS/nanobot/pull/4288) is open but not yet merged.
- **High severity**: Cron jobs ending early when a subagent is spawned ([#4290](https://github.com/HKUDS/nanobot/issues/4290)). A fix PR [#4293](https://github.com/HKUDS/nanobot/pull/4293) is open, adding a `pending_queue` to `process_direct`.
- **Medium severity**: Missing “sustained goal” context ([#4286](https://github.com/HKUDS/nanobot/issues/4286)). User reports NanoBot repeatedly returns an unexpected missing-goal error. No fix PR yet.
- **Low severity**: `bwrap` sandbox not resetting `$HOME` ([#4237](https://github.com/HKUDS/nanobot/issues/4237)) was closed today, likely fixed (no explicit PR in top 20, but could be part of another PR).
- **Resolved**: Stream stall timeout ([#4013](https://github.com/HKUDS/nanobot/issues/4013)) is fixed in [#4272](https://github.com/HKUDS/nanobot/pull/4272).
- **Resolved**: `max_tokens` vs `max_completion_tokens` for GPT-5 ([#4261](https://github.com/HKUDS/nanobot/issues/4261)) closed as a configuration fix.
- **Resolved**: `history.jsonl` cross-session pollution ([#4259](https://github.com/HKUDS/nanobot/issues/4259)) is fixed in [#4274](https://github.com/HKUDS/nanobot/pull/4274).

## Feature Request Clusters
Several user-requested features have active PRs or were merged today:

- **Subagent improvements**:
  - Configurable model presets for subagents ([#4291](https://github.com/HKUDS/nanobot/pull/4291) – open).
  - Aggregated notifications to prevent LLM hallucinations ([#4279](https://github.com/HKUDS/nanobot/issues/4279) – open, no PR yet).
- **Exec tool PATH control** — Users asked for a way to prioritise a Python virtualenv over system Python. Merged in [#4273](https://github.com/HKUDS/nanobot/pull/4273) as `pathPrepend`.
- **Slack @mention-only channels** — Request for a mode where the bot only responds in allowlisted channels when @mentioned ([#4289](https://github.com/HKUDS/nanobot/pull/4289) – open).
- **WebUI enhancements**:
  - Slash‑command skill activation ([#4284](https://github.com/HKUDS/nanobot/pull/4284) – open).
  - Folder browsing / file management in settings ([#4282](https://github.com/HKUDS/nanobot/pull/4282) – open).
  - Activity duration display fix ([#4283](https://github.com/HKUDS/nanobot/pull/4283) – open).
- **Transcription providers** — After StepFun native ASR request ([#4000](https://github.com/HKUDS/nanobot/issues/4000)), SiliconFlow support was added ([#4281](https://github.com/HKUDS/nanobot/pull/4281)). Other providers like StepFun remain unaddressed.
- **History archive improvements** — Idea to archive full session history (including corrections) in idle compact ([#4270](https://github.com/HKUDS/nanobot/pull/4270) – open).

## User Feedback Summary
- **Positive**: Users appreciated the stability of v0.1.5post2 ([#4013](https://github.com/HKUDS/nanobot/issues/4013)). The exec tool PIP fix ([#3934](https://github.com/HKUDS/nanobot/issues/3934)) and session history fix ([#4259](https://github.com/HKUDS/nanobot/issues/4259)) were well received.
- **Pain points**:
  - v0.2.x introduced a regression with stream stalls that has now been fixed.
  - Peak‑hour empty responses from DeepSeek without fallback are a major annoyance ([#4287](https://github.com/HKUDS/nanobot/issues/4287)).
  - Cron tasks that spawn subagents fail intermittently ([#4290](https://github.com/HKUDS/nanobot/issues/4290)).
  - `bwrap` sandbox broke file writes because `$HOME` wasn’t isolated ([#4237](https://github.com/HKUDS/nanobot/issues/4237)).
  - Unexpected missing “sustained goal” context caused work to stall ([#4286](https://github.com/HKUDS/nanobot/issues/4286)).
- **Use cases**: Telegram bot runtime (GitHub user @glebov), website article creation (@fablau), and CLI agent workflows with subagents. Several Chinese‑language users are active.

## Backlog Watch
Open issues that appear to need maintainer attention:

- [#4286](https://github.com/HKUDS/nanobot/issues/4286) – “Missing sustained goal context” (0 comments, no fix PR).
- [#4279](https://github.com/HKUDS/nanobot/issues/4279) – Aggregated subagent notifications (0 comments, no PR).
- [#4290](https://github.com/HKUDS/nanobot/issues/4290) – Cron ends early with subagent (0 comments, but has an open fix PR [#4293](https://github.com/HKUDS/nanobot/pull/4293)).
- [#4287](https://github.com/HKUDS/nanobot/issues/4287) – Empty model responses not fallbackable (has open PR [#4288](https://github.com/HKUDS/nanobot/pull/4288) but not yet merged).

Long‑standing older issues (e.g., [#3934](https://github.com/HKUDS/nanobot/issues/3934) from 2026-05-20) have been resolved. No issues older than a few weeks appear to have been ignored.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest — 2026-06-11

## Today's Activity Brief
Over the last 24 hours, 42 issues were updated (23 open/active, 19 closed) and 50 pull requests were updated (33 open, 17 merged/closed). No new releases were published. A cluster of high-severity bug fixes and RFCs for architectural changes (turn engine unification, native plugin system) drove the most discussion. Several critical bugs—including missing image delivery to vision models, silent token revocation gaps, and subagent CWD inheritance failures—were addressed by newly merged or open fix PRs.

## Releases
None.

## Project Progress
- **Kilo AI Gateway integration** – PR [#7136](https://github.com/zeroclaw-labs/zeroclaw/pull/7136) (closed) added Kilo as a first-class model provider with pricing capture.
- **Gateway remote admin** – PR [#7344](https://github.com/zeroclaw-labs/zeroclaw/pull/7344) (closed) introduced an opt-in `gateway.allow_remote_admin` setting.
- **Channel fixes** – PR [#7370](https://github.com/zeroclaw-labs/zeroclaw/pull/7370) (closed) dropped truncated tool-call envelopes at delivery; PR [#7347](https://github.com/zeroclaw-labs/zeroclaw/pull/7347) (closed) fixed Discord bot replying to thread creation events.
- **Observability** – PR [#7382](https://github.com/zeroclaw-labs/zeroclaw/pull/7382) (closed) correctly attributed WebSocket turn telemetry and cost to the agent’s model.
- **Multimodal fix** – PR [#7446](https://github.com/zeroclaw-labs/zeroclaw/pull/7446) (closed) made `image_info` images reach vision models end‑to‑end.
- **Config and MCP** – PR [#7464](https://github.com/zeroclaw-labs/zeroclaw/pull/7464) (open) makes configured MCP servers usable by default; PR [#7427](https://github.com/zeroclaw-labs/zeroclaw/pull/7427) (open) removes the dead `context_aware_tools` field.
- **Other closed PRs** – #7347, #7344, #7382, #7370, #7446, #7136; also #7409 (clippy lint gate fix), #6576 (Matrix smoke check), and #6309, #4627, #6253, etc. were closed.

## Community Hot Topics
- **Logo redesign** – Issue [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) (closed, 20 comments, 2 👍) proposed a new logo; the community engaged heavily, but the issue is now closed.
- **Full Docker image** – Issue [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) (open, 12 comments, 3 👍) requests a feature‑flag‑compiled Docker image to lower the entry barrier for non‑technical users. Still awaiting maintainer action.
- **User message loss** – Issue [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) (open, 6 comments) reports a critical bug where single‑ and multi‑turn conversations lose user messages when using a custom provider. Filed as S1 – workflow blocked.
- **tool_search hang** – Issue [#6721](https://github.com/zeroclaw-labs/zeroclaw/issues/6721) (open, 5 comments) describes a silent 120‑second hang then auto‑deny when `tool_search` is not in `default_auto_approve`. Linked to webhook/non‑interactive mode.

## Bugs & Stability
**High‑severity (S1 – workflow blocked):**
- **#6034** – User message loss with custom provider. No fix PR yet.
- **#6721** – `tool_search` auto‑deny hang in webhook mode. No fix PR yet.
- **#7263** – Subagents do not inherit `cwd` in ACP sessions. PR [#6993](https://github.com/zeroclaw-labs/zeroclaw/pull/6993) (open) partially addresses peer send targets.
- **#7470** (filed 2026‑06‑11) – Delegate agentic mode rejects empty `risk_profile.allowed_tools` and blocks stricter delegated targets. New issue, no fix PR yet.

**High‑severity (S2 – degraded behavior):**
- **#7436** – `image_info` tool output does not reach vision models in common cases. Fix PR [#7446](https://github.com/zeroclaw-labs/zeroclaw/pull/7446) (closed) resolves this.
- **#7431** – Pre‑turn routing intent extraction (enhancement, but missing feature causes routing failures).
- **#7415** – RFC to unify three agent turn engines, addressing missing protections in two implementations.

**Other notable bugs:**
- **#7469** – Default editor “vi” not included in container (S3).
- **#7376** – `zerocode` Dashboard hides error states and mislabels history (S2, closed by PR #?).
- **#6958** – Matrix channel session keyed on event_id causes amnesia; PR fixing it may be in progress.

## Feature Request Clusters
- **Turn‑loop architecture** – Two RFCs propose significant refactoring: [#7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415) (unify three turn engines) and [#7431](https://github.com/zeroclaw-labs/zeroclaw/issues/7431) (pre‑turn routing intent extraction). Both have maintainer review.
- **Plugin system** – RFC [#7420](https://github.com/zeroclaw-labs/zeroclaw/issues/7420) proposes a native dynamic‑library plugin system to reduce monolithic pain. Related tracker [#7314](https://github.com/zeroclaw-labs/zeroclaw/issues/7314) covers v0.8.2 WASM plugin program.
- **Lighter core** – RFC [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) (open since April) suggests removing dedicated integrations in favour of skills.
- **UI/UX enhancements** – [#7467](https://github.com/zeroclaw-labs/zeroclaw/issues/7467) (edit string flexibility) and [#7468](https://github.com/zeroclaw-labs/zeroclaw/issues/7468) (alias renaming) were filed today for the `zerocode` TUI.
- **Full Docker image** – [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) remains open.

## User Feedback Summary
- **Docker usability** – Users want a pre‑built full image to avoid manual feature‑flag compilation (issue #3642). The current debian image build process is not automated per PR (#5908, closed).
- **Provider compatibility** – Custom provider integration is fragile; the user in #6034 experienced complete message loss, blocking their workflow. A fix for `image_info` not reaching vision models was just merged (#7446).
- **Onboarding friction** – Quickstart wizard missed the `port` field for webhook config (PR #7215 fix). The default editor `vi` missing from container (#7469) frustrates users.
- **Configuration confusion** – The dead `context_aware_tools` field (#6720) and ambiguous `config-list` prefix matching (#7471) were flagged. A PR to remove the dead field is open (#7427).
- **Security concerns** – Token revocation on rotation/device deletion was not implemented, leaving bearer tokens active (PR #7243, partial fix open).

## Backlog Watch
- **RFC #6165** (April 27) – Lighter core through external integrations – no maintainer response since filing.
- **RFC #7415 and #7420** – New RFCs from June 9 that require ratification votes and maintainer review; no PRs yet.
- **Issue #3642** (March 15) – Full Docker image – still open with 3 👍 and 12 comments; maintainer action requested.
- **PR #7243** (June 5) – Token revocation fix – needs author action (marked `needs-author-action`).
- **PR #7215** (June 4) – Quickstart port field – also `needs-author-action`.
- **Issue #6970 and #7314** – Trackers for v0.8.1 and v0.8.2 milestones; no blocking issues beyond open RFCs.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-11

## Today's Activity Brief

PicoClaw’s open-source AI agent framework saw 15 updated pull requests and 5 updated issues in the last 24 hours, with one new automated nightly build released (v0.2.9-nightly). The most significant merged changes included a high-severity SSRF bypass fix (CVE-like: `198.18.0.0/15` block) and a long-standing Windows path separator bug fix (`list_dir` `os.Root` issue #2472). A maintainer-driven batch of safety fixes from @chengzhichao-xydt addresses unchecked type assertions across multiple subsystems, while community discussion remains active around a duplicate-message bug in async sub-agent (`spawn`) routing.

## Releases

- **nightly (v0.2.9-nightly.20260611.d955d5bb)**: Automated nightly build, may be unstable. No breaking changes or migration notes documented.
  [Full changelog](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

## Project Progress

### Merged/Closed PRs Today (6 items)

- **#3089** — `fix os.Root api on windows issue` (closed, merged)
  Contributor @cs8425 fixed the `list_dir` returns “invalid argument” on Windows bug (issue #2472) by normalizing path separators before passing to `os.Root`.
  [PR #3089](https://github.com/sipeed/picoclaw/pull/3089)

- **#3085** — `fix(tools): block 198.18.0.0/15 in SSRF guard` (closed, merged)
  Contributor @ACMYuechen patched a SSRF restriction bypass in `web_fetch` where the RFC 2544 benchmark range (used in the wild for internal routing) was not blocked.
  [PR #3085](https://github.com/sipeed/picoclaw/pull/3085)

- **#2951** — `fix: use function-type web_search for better API compatibility` (closed, stale)
  Switched `web_search_preview` to `function`-type tool definition, resolving HTTP 400 errors on OpenAI API endpoints that reject the preview type.
  [PR #2951](https://github.com/sipeed/picoclaw/pull/2951)

- **#2948** — `fix: skip temperature parameter for claude-opus-4-7 models` (closed, stale)
  Removed the deprecated `temperature` field for the `claude-opus-4-7` model family, fixing HTTP 400 errors.
  [PR #2948](https://github.com/sipeed/picoclaw/pull/2948)

- **#2945** — `feat: add debug trace viewer (picoclaw-tracer)` (closed, stale)
  Added a standalone web UI for real-time LLM trace inspection via gateway JSON-Lines logs.
  [PR #2945](https://github.com/sipeed/picoclaw/pull/2945)

- **#3043** — `fix: check strconv.Atoi and json.Unmarshal errors` (closed, merged)
  Added error handling for two discarded error cases in `short_retrieval.go` and `seahorse`.
  [PR #3043](https://github.com/sipeed/picoclaw/pull/3043)

### Advanced Features Remaining Open

- **#2937** — `Feat/agent collaboration` (stale, open) introduces an inter-agent mailbus with per-agent mailboxes and collaboration threads.
- **#3083** — `feat(web): harden launcher access control` (open) adds configurable localhost bypass and trusted proxy CIDRs.
- **#3067** — `fix: add DmScope field to SessionConfig to persist dm_scope setting` (open) resolves a UI config save failure.

## Community Hot Topics

### Most Active Issues

- **#2472** — `[BUG] list_dir returns "invalid argument" on Windows`
  5 comments, 1 👍. The bug has been open since April; a fix PR (#3089) was merged today.
  [Issue #2472](https://github.com/sipeed/picoclaw/issues/2472)

- **#3094** — `[Bug] 异步子代理(spawn)任务完成时，ForUser字段被同时用于直接推送和主代理汇总，导致重复消息`
  Filed today with 0 comments so far. Reports that async sub-agent results produce duplicate messages (one raw push, one summarised by the main agent).
  [Issue #3094](https://github.com/sipeed/picoclaw/issues/3094)

- **#3077** — `[Security] PicoClaw web_fetch SSRF restriction bypass via special-use IPv4 literal 198.18.0.0/15`
  0 comments; already closed by PR #3085 today.
  [Issue #3077](https://github.com/sipeed/picoclaw/issues/3077)

### Consistent Contributor Activity

A series of type-safety fixes from @chengzhichao-xydt appeared across multiple PRs today (#3095, #3091, #3092, #3053, #3045), all adding `ok` checks to type assertions. This suggests a focused hardening sprint on runtime panic prevention.

## Bugs & Stability

### High Severity

- **SSRF bypass — 198.18.0.0/15** (issue #3077 → fix #3085)
  Fixed and merged. Allows outbound requests to a range used for internal benchmark testing; could be leveraged to probe internal networks.
  [Issue #3077](https://github.com/sipeed/picoclaw/issues/3077)

- **Windows path separator mismatch** (issue #2472 → fix #3089)
  Fixed and merged. Crashed `list_dir` on Windows with “invalid argument”.
  [Issue #2472](https://github.com/sipeed/picoclaw/issues/2472)

### Medium Severity

- **Async sub-agent duplicate messages** (issue #3094)
  New, unaddressed. `ForUser` field is dispatched both as a raw push and a summarised output, flooding chat channels.
  [Issue #3094](https://github.com/sipeed/picoclaw/issues/3094)

- **iOS Safari panel failure** (issue #3090)
  Panel UI broken on iOS <16.4. Covers a broad range of older iPhones and iPads. No fix PR yet.
  [Issue #3090](https://github.com/sipeed/picoclaw/issues/3090)

### Low/Unreported

- **Matrix user ID parsing** (issue #3044 → fix #3045, open) prevents `allow_from` from filtering Matrix users correctly.
- **Temperature deprecation for claude-opus-4-7** (PR #2948, closed) resolved.
- **web_search_preview HTTP 400 on non-OpenAI endpoints** (PR #2951, closed) resolved.

## Feature Request Clusters

### Explicit User Requests

- **#3093** — Request for SimpleX, Tox, or Wire gateway support. Short request with 0 discussion.
  [Issue #3093](https://github.com/sipeed/picoclaw/issues/3093)

### Implicit Needs (via PR discussions)

- **Better agent interop**: PR #2937 (agent collaboration bus, stale) addresses durable inter-agent communication, a common theme in agent orchestration use cases.
- **Debugging tooling**: PR #2945 (picoclaw-tracer, closed) adds standalone LLM trace viewing.
- **Config persistence**: PR #3067 (dm_scope setting save, open) indicates UI config not being persisted is a user frustration.
- **Launcher access hardening**: PR #3083 (trusted proxy CIDRs, open) suggests deployment behind reverse proxies is becoming more common.

## User Feedback Summary

- **Windows users** have been blocked from using `list_dir` for 2 months (issue #2472). The fix merged today directly addresses this pain point.
- **Matrix channel operators** cannot use `allow_from` due to colon parsing — a config trust issue that has not yet been merged.
- **Self-hosting users** behind reverse proxies (e.g., nginx, Traefik) are requesting better launcher access controls (PR #3083).
- **iOS users** on older devices (pre-16.4) cannot access the Panel at all — a potential blocker for field operators using iPads.
- **Chat channel admins** face message noise: duplicate sub-agent outputs in Feishu/Telegram (issue #3094) double the cognitive load.
- **Security-conscious users** will appreciate the quick turnaround on the SSRF bypass report (issue → fix within 24 hours).

## Backlog Watch

- **#2472** — Windows `list_dir` bug: ~2 months old, fixed today by PR #3089. No longer a backlog item.
- **#2937** — Agent Collaboration Bus: open since 2026-05-24 (19 days), no maintainer activity. Large feature with multi-file changes that may need review bandwidth.
- **#3045** — Matrix user ID `allow_from` fix: open since 2026-06-07, has LGTM but not merged. Could block Matrix deployments.
- **#3067** — dm_scope setting persistence: open since 2026-06-09, waiting on review.
- **#3090** — iOS Safari incompatibility: filed today, no response. If the Panel is considered a primary interface, this warrants attention.

</details>