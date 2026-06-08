# OpenClaw Ecosystem Digest 2026-06-08

> Issues: 293 | PRs: 500 | Projects covered: 4 | Generated: 2026-06-08 02:45 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest – 2026-06-08

## 1. Today’s Activity Brief
- **293 issues** updated in the last 24 hours (178 open, 115 closed).
- **500 pull requests** updated in the same period (336 open, 164 merged/closed).
- **No new releases** published today.
- Critical security regression reported (`minSecurity` rank order inverted, #91283) and a delivery-recovery bug after gateway restart (#91212) both surfaced today.
- Several high-priority PRs were merged, including fixes for Codex subagent completion results (#91235), cron turn-payload preservation (#91230), and inbound-meta truncation for reply context (#87909).

## 2. Releases
*None.*

## 3. Project Progress
Notable merged/closed PRs today (from the displayed set):
- **#91235** – fix(codex): preserve native subagent completion results (automerge, P1).
- **#91230** – fix(cron): preserve isolated agent turn payload message (automerge, P1).
- **#87909** – fix(inbound-meta): head+tail truncation for reply context body preserves actionable tail content.
- **#91026** – feat(talk): add macOS realtime relay mode.
- **#70330**, **#70005**, **#69778**, **#70253**, **#70164**, **#74822**, **#73802**, **#84216**, **#88234**, **#68113** – various closed issues (bug fixes, enhancements, and stale closures).

*(Full list of 115 closed issues and 164 merged/closed PRs is available in the repository.)*

## 4. Community Hot Topics
**Most-commented issues (top by comment count):**
- [#25592 – Text between tool calls leaks to messaging channels](https://github.com/openclaw/openclaw/issues/25592) (27 comments, stale, P1, security impact). Users report internal processing text is routed to messaging channels (Slack, iMessage, etc.) as visible messages.
- [#88838 – Track core session/transcript SQLite migration via accessor seam](https://github.com/openclaw/openclaw/issues/88838) (18 comments, P2, needs product decision). Discussion on branch-by-abstraction approach for high-risk runtime migration.
- [#88312 – [Regression] Codex app-server turn-completion stall](https://github.com/openclaw/openclaw/issues/88312) (14 comments, P1, bug). Users confirm regression from the 2026.5.27 build; previous fix (#85107) appears to have re-surfaced.
- [#29387 – Bootstrap files in agentDir silently ignored](https://github.com/openclaw/openclaw/issues/29387) (14 comments, stale, P1, security impact). Only workspace directory files are injected into the system prompt; per-agent bootstrap files have no effect.
- [#90991 – Cron scheduled trigger contaminates global runtime state](https://github.com/openclaw/openclaw/issues/90991) (13 comments, P1, needs live repro). Transient system-wide overload failures reported.

**Most-reacted issues (👍 count):**
- [#29387 – Bootstrap files ignored](https://github.com/openclaw/openclaw/issues/29387) (5 👍)
- [#37634 – sandbox: keep workspaceAccess none workspaces writable](https://github.com/openclaw/openclaw/issues/37634) (6 👍)
- [#40215 – Show cumulative context usage in /usage](https://github.com/openclaw/openclaw/issues/40215) (3 👍)
- [#68113 – Mattermost slash commands 503](https://github.com/openclaw/openclaw/issues/68113) (3 👍) – *closed today*.

*(PR comment counts are not shown in the provided data; activity on PRs #89659, #88212, #91305, etc. was ongoing.)*

## 5. Bugs & Stability
**Newly reported or updated today (June 8):**

| Issue | Severity | Description | Fix PR? |
|-------|----------|-------------|---------|
| [#91283 – minSecurity inverted](https://github.com/openclaw/openclaw/issues/91283) | **Critical** – security impact | Rank order in `exec-approvals.js` treats `full` as most restrictive (clamping sessions to `allowlist`). Reported with source repro. | None yet |
| [#91212 – delivery-recovery 0 recovered / N failed after restart](https://github.com/openclaw/openclaw/issues/91212) | **High** – message loss | Recovery attempts before channel transport ready; retryCount persists across restarts. | None yet |
| [#90639 – compaction safeguard mode allows 200K+ token sessions](https://github.com/openclaw/openclaw/issues/90639) | **High** – session-state, message loss | Session grows to context ceiling, "Something went wrong" with no in-channel recovery on Slack. | None yet |
| [#90428 – exec tool triggers SIGTERM on WSL2 / Node 24](https://github.com/openclaw/openclaw/issues/90428) | **High** – crash-loop | Regression; gateway restart triggered by `exec` tool. | None yet |
| [#88312 – Codex turn-completion stall regression](https://github.com/openclaw/openclaw/issues/88312) | **High** – message loss | 2026.5.27 build breaks multi-tool turns; previous fix reverts. | Original fix #85107, but regression persists |
| [#91299 – Deep Sleep summary not written to DREAMS.md](https://github.com/openclaw/openclaw/issues/91299? as PR) | **Medium** – feature gap | Dreaming phase skips updating DREAMS.md with `## Deep Sleep` section. | PR #91299 (open, needs proof) |
| [#87136 – compaction absolute token thresholds break when switching models](https://github.com/openclaw/openclaw/issues/87136) | **Medium** – session-state | Absolute parameters (softThresholdTokens, etc.) misbehave with 1M vs 200K context windows. | None yet |
| [#45501 – session.resetPrompt not configurable](https://github.com/openclaw/openclaw/issues/45501) | **Medium** – UX | Hardcoded startup message cannot be customized. | None yet; linked PR? Not listed |

Other ongoing regressions: `exec` tool env inheritance (#31583), Webchat avatar 404 (#38439), bootstrap files ignored (#29387), cron shared file overwrite (#40001).

## 6. Feature Request Clusters
Multiple user requests share common themes:

**Session/Context Management**
- [#90916 – Topic-session families](https://github.com/openclaw/openclaw/issues/90916): multiple named context lanes for one assistant, with family-level memory rules. (P2, needs product decision)
- [#45501 – Configurable `session.resetPrompt`](https://github.com/openclaw/openclaw/issues/45501): replace hardcoded startup message. (P2, stale)
- [#90354 – Bounded/validated append semantics for pre-compaction memory flush](https://github.com/openclaw/openclaw/issues/90354): guardrails for oversized memory writes. (P2)
- [#40215 – Show cumulative context usage in `/usage`](https://github.com/openclaw/openclaw/issues/40215): model + context tokens / window. (P2, stale)

**Gateway/Multi-Channel Enhancements**
- [#86881 – Gateway-lite mode without AI harness](https://github.com/openclaw/openclaw/issues/86881): deterministic deployments for gateways, webhooks, cron only.
- [#33413 – Slack tool-level progress in thread status](https://github.com/openclaw/openclaw/issues/33413): dynamic status instead of static "is typing...". (P2, stale)
- [#33962 – Slug-generator: use lightweight model to prevent lane congestion](https://github.com/openclaw/openclaw/issues/33962): avoid using primary model for trivial filename tasks. (P2, stale)

**Sandbox/Isolation**
- [#37634 – Keep `workspaceAccess: none` sandbox workspaces writable](https://github.com/openclaw/openclaw/issues/37634): current read-only mount breaks many tools. (P1, stale, 6 👍)
- [#40001 – Write tool lacks append mode](https://github.com/openclaw/openclaw/issues/40001): cron sessions overwrite shared files, causing data loss. (P1, stale)

**Open PRs implementing related features:**
- [#90101 – feat: add runtime self context config and tool](https://github.com/openclaw/openclaw/pull/90101) (XL, waiting on author) – part of a larger runtime/offload awareness effort.
- [#89712 – feat(cron): support command jobs](https://github.com/openclaw/openclaw/pull/89712) (XL, waiting on author) – run shell commands without agent overhead.
- [#78441 – feat(subagents): forward toolsAllow from sessions_spawn](https://github.com/openclaw/openclaw/pull/78441) (M, ready for maintainer look) – allowlist for subagent tools.
- [#90611 – feat(i18n): localize runtime user-facing copy](https://github.com/openclaw/openclaw/pull/90611) (L, ready for maintainer look) – adds Chinese locale.
- [#91256 – feat(diagnostics-otel): capture tool input/output content](https://github.com/openclaw/openclaw/pull/91256) (M, waiting on author) – wires OTel span content for tools.

## 7. User Feedback Summary
**Pain points expressed across issues and PRs:**

- **Text leakage between tool calls** (#25592): internal processing output (errors, acknowledgments) leaks into visible messaging channels. Users find this disruptive for UX.
- **Approvals lost on gateway restart** (#64664): in-flight approval IDs vanish after restart; stale buttons show confusing errors.
- **UI not reflecting remote session resets** (#38966): TUI does not update when session reset via Telegram/Discord.
- **False positives in `doctor`** (#65201): gateway auth token managed via SecretRef triggers unnecessary warning.
- **Dreaming summaries irrelevant** (#70005): material selection driven by word frequency rather than semantic importance.
- **Slash commands 503 on Mattermost** (#68113, *closed today*): regression in v2026.4.15 required manual restart.
- **Delivery recovery fails silently** (#91212, *new*): messages lost because recovery runs before transports are ready.
- **Exec tool env variables not inherited** (#31583): secrets passed via skills config are not passed to subprocesses.
- **Sessions stuck in `failed` status** (related PR #89045): group chats drop all messages after entering terminal state.

**Positive signals:** Several high-priority PRs reached automerge or maintainer-ready status today, indicating active maintainer engagement on pressing issues like cron payload handling and Codex subagent results.

## 8. Backlog Watch
Issues and PRs that have been open for a while and need maintainer attention:

| Item | Created | Status | Notes |
|------|---------|--------|-------|
| [#25592 – Text leaks to channels](https://github.com/openclaw/openclaw/issues/25592) | 2026-02-24 | Needs product decision, security review | 27 comments, diamond lobster, no fix PR. |
| [#29387 – Bootstrap files ignored](https://github.com/openclaw/openclaw/issues/29387) | 2026-02-28 | Needs maintainer review, product decision, security review | 14 comments, 5 👍, linked PR open? |
| [#31583 – exec tool env inheritance](https://github.com/openclaw/openclaw/issues/31583) | 2026-03-02 | Needs maintainer review, product decision, security review | 12 comments, linked PR open. |
| [#22358 – Post-subagent completion hook](https://github.com/openclaw/openclaw/issues/22358) | 2026-02-21 | Needs product decision, security review | 12 comments, stale. |
| [#40001 – Write tool append mode](https://github.com/openclaw/openclaw/issues/40001) | 2026-03-08 | Needs product decision | 11 comments, linked PR open. |
| [#37634 – Sandbox workspace writable](https://github.com/openclaw/openclaw/issues/37634) | 2026-03-06 | Needs maintainer review, product decision, security review | 9 comments, 6 👍. |
| [#90916 – Topic-session families](https://github.com/openclaw/openclaw/issues/90916) | 2026-06-06 | Needs maintainer review, product decision, security review | New but already flagged. |
| [#88312 – Codex turn-completion stall regression](https://github.com/openclaw/openclaw/issues/88312) | 2026-05-30 | Needs maintainer review, product decision, live repro | 14 comments, 3 👍, regression. |
| [#87136 – Compaction absolute thresholds](https://github.com/openclaw/openclaw/issues/87136) | 2026-05-27 | Needs maintainer review, product decision, live repro | 5 comments. |

PRs waiting on author (blocked):
- [#87380 – fix(gateway): persist configured extra CA certs](https://github.com/openclaw/opencl

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report – 2026-06-08

## 1. Daily Cross-Project Overview

OpenClaw dominated activity with 293 issues and 500 pull requests updated, including a critical security regression (`minSecurity` inverted). NanoBot saw limited activity (8 issues, 19 PRs) with focus on sandbox and session-history fixes. Zeroclaw had moderate activity (50 issues, 50 PRs) centered on v0.8.0 dashboard and provider improvements. PicoClaw published a nightly release and merged 12 PRs, including a new Kagi search provider and an Android Termux guide, alongside two newly opened bug reports with immediate fix PRs. Across projects, channel integrations, sandbox isolation, and provider fallback logic were recurring themes.

## 2. Activity Comparison

| Project     | Issues Updated | PRs Updated | Release Today | Activity Note |
|-------------|---------------|-------------|---------------|----------------|
| OpenClaw    | 293 (178 open, 115 closed) | 500 (336 open, 164 merged/closed) | None          | Very high volume; critical security regression (#91283) and delivery-recovery bug (#91212) reported. |
| NanoBot     | 8 (6 open, 2 closed)       | 19 (15 open, 4 merged/closed)    | None          | Low activity; four PRs merged (Feishu, WhatsApp, reasoning content, ANSI rendering). |
| Zeroclaw    | 50 (32 open, 18 closed)    | 50 (38 open, 12 merged/closed)   | None          | Moderate activity; TUI dashboard PRs merged (#7190, #7209, #7249). Web dashboard still reported broken (#4866). |
| PicoClaw    | 21 (4 open, 17 closed)     | 21 (9 open, 12 merged/closed)    | v0.2.9-nightly | Moderate activity; nightly release, two new bugs with open fix PRs (#3041, #3044). |

## 3. OpenClaw Compared With Peers

- **Activity volume**: OpenClaw’s 293 issues and 500 PRs dwarf every other project (NanoBot: 27 total, Zeroclaw: 100, PicoClaw: 42). This reflects its role as the core reference implementation and its larger maintainer team.
- **Security surface area**: OpenClaw reported a critical regression in `minSecurity` (#91283) and a long-standing text-leakage risk (#25592) with security impact. No comparable critical security issue surfaced in other projects today.
- **Community engagement**: The most-commented issue across all projects is OpenClaw’s #25592 (27 comments), followed by Zeroclaw’s #4866 (28 comments on web dashboard unavailability). NanoBot’s top issue had 4 comments; PicoClaw’s top issue had 8.
- **Maintainer response**: OpenClaw merged 164 PRs today, including high-priority fixes for Codex subagent completion (#91235) and cron turn payload (#91230). PicoClaw merged 12 PRs within 24 hours of bug reports. Zeroclaw merged 12 PRs primarily around TUI features. NanoBot’s 4 merged PRs addressed targeted channel and rendering issues.

## 4. Shared Technical Focus Areas

*Requirements or bug patterns observed in multiple projects today:*

- **Sandbox/Isolation**
  - OpenClaw: `workspaceAccess: none` breaks tools (#37634), sandbox keeps workspace read-only.
  - NanoBot: Bubblewrap fails on Ubuntu 24.04 (#4236) and does not reset `$HOME` (#4237); fix PRs in progress.
  - Zeroclaw: Request for writable paths and network access in bubblewrap (#5127) and air-gapped mode RFC (#6293).
  - *Observation: Three projects actively wrestling with sandbox execution environments.*

- **Channel-specific bugs**
  - OpenClaw: Text leakage to Slack/iMessage (#25592), Mattermost slash commands 503 (#68113, closed).
  - NanoBot: Feishu mention resolution (#2885, closed), WhatsApp LID group mention (#2663, closed).
  - Zeroclaw: Feishu channel calls LLM instead of Agent (#4873, open), NapCat/OneBot channel request (#2503).
  - PicoClaw: Matrix `allow_from` fails for user IDs with colons (#3044), Telegram location messages ignored (#3049).

- **Provider and fallback configuration**
  - OpenClaw: minSecurity inverted (#91283) affects execution approvals.
  - Zeroclaw: Provider-scoped fallback chains (#7178 merged), but older fallback chain config issues closed (#5803).
  - PicoClaw: Anthropic default model ID fixed (#3036) to match API.
  - NanoBot: Empty-string reasoning content from custom providers fixed (#4227).

- **Session/Context management**
  - OpenClaw: Compaction safeguard allows 200K+ token sessions (#90639), Codex turn-completion stall (#88312 regression).
  - NanoBot: `find_legal_message_start` drops all messages (#4203, fix PR #4219 open).
  - Zeroclaw: `context_compression` not triggered in daemon mode (#4880, closed).

## 5. Differentiation Analysis

- **OpenClaw** positions as the comprehensive reference implementation: broadest architecture (gateway, cron, subagent, deep sleep), highest volume of bug reports and feature requests, and strongest security focus (minSecurity, bootstrap file injection). Targets large-scale, multi-channel AI assistant deployments.

- **NanoBot** is lighter and more channel-specific: active fix activity for Feishu and WhatsApp integration, and a notable emphasis on Bubblewrap sandbox improvements. Lower issue volume suggests a smaller user base or more focused scope. The “version display” and “voice input” features indicate a drive toward WebUI parity.

- **Zeroclaw** differentiates with a heavy TUI/dashboard push (outbound message queue, model picker, theme enhancements). The community’s strongest requests are for multi-agent routing (#2767, 9 👍) and token-cost minimization (#5146). The project also has the only per-alias webhook routing PR in development (#7367).

- **PicoClaw** targets edge and mobile scenarios: the Android Termux guide (#2902) merged today, ARM64 support, and a nightly release under `v0.2.9`. The Kagi web search provider (#3037) and MCP flag parsing fix (#3041) show attention to lightweight provider integration. Smaller issue count indicates a tight-knit, possibly early-stage community.

## 6. Community Activity Notes

- **Tier 1 – Highest activity**: OpenClaw (293 issues, 500 PRs). The only project with critical security regression and 27+ comments on a single issue.
- **Tier 2 – Moderate activity**: Zeroclaw and PicoClaw (50/50 and 21/21 respectively). Both merged 12 PRs today. PicoClaw also published a nightly release.
- **Tier 3 – Lowest activity**: NanoBot (8 issues, 19 PRs). No release. Activity concentrated on 4 merged PRs and 2 new bug reports.

*No project showed signs of maintainer abandonment; all had some merged PRs today.*

## 7. Evidence-Backed Observations

1. **Sandbox isolation is a cross-project pain point.** OpenClaw (workspace read-only), NanoBot (Bubblewrap Ubuntu 24.04, HOME reset), and Zeroclaw (air-gapped mode RFC, writable paths request) all have recent issues or PRs on sandbox functionality. No project has a universally working sandbox solution.

2. **Provider configuration inconsistencies are widespread.** OpenClaw’s `minSecurity` inversion, Zeroclaw’s fallback chain issues, PicoClaw’s wrong Anthropic default ID, and NanoBot’s reasoning content drop all relate to provider or model configuration logic. This suggests either lack of shared provider abstraction or independent implementations diverging.

3. **Channel integration remains a hot spot of bug fixes.** Across all four projects, today’s activity includes fixes for Feishu (NanoBot), WhatsApp (NanoBot), Matrix (PicoClaw), Slack (OpenClaw text leakage), and Mattermost (OpenClaw). Each project is actively debugging its specific channel bindings.

4. **OpenClaw’s community surfaces more security-related issues than peers.** Issues tagged with “security impact” appear in OpenClaw (text leakage, bootstrap files ignored, minSecurity inverted) but are absent in other projects’ today’s digests. This may reflect OpenClaw’s larger user base, more thorough labeling, or actual security gaps.

5. **No clear cross-project signal on a unified direction.** Each project has distinct feature priorities: OpenClaw focuses on core architecture and scalability; NanoBot on lightweight channel support; Zeroclaw on TUI and multi-agent routing; PicoClaw on edge deployment and provider diversity. The observed overlap (sandbox, provider config) is reactive bug-fixing rather than coordinated feature convergence.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-08

## 1. Today's Activity Brief

In the last 24 hours (2026-06-07 through 2026-06-08), NanoBot saw 8 issues updated (6 open/active, 2 closed) and 19 pull requests updated (15 open, 4 merged/closed). No new releases were published. Notable activity includes four closed PRs—two fixing Feishu and WhatsApp channel mentions, one preserving empty-string reasoning content from custom providers, and one adding ANSI output rendering in the WebUI. Multiple new bug reports surfaced around Bubblewrap sandbox failures on Ubuntu 24.04 and a session-history trimming logic defect, with corresponding fix PRs already submitted.

## 2. Releases

No new releases were tagged or published in the last 24 hours. The latest available version remains the previous release.

## 3. Project Progress

Four pull requests were closed or merged in the reporting period:

- **Feishu channel mention resolution & token initialization** – [#2885](https://github.com/HKUDS/nanobot/pull/2885) (closed) fixes `@_user_n` placeholder replacement and ensures access token is properly initialised.
- **WhatsApp LID group mention handling** – [#2663](https://github.com/HKUDS/nanobot/pull/2663) (closed) normalises JIDs for LID and device-suffixed bot JIDs, improves group mention detection, and forwards group participant.
- **Preserve empty-string reasoning_content** – [#4227](https://github.com/HKUDS/nanobot/pull/4227) (closed) corrects the custom provider path so that `""` is not coerced to `None`, matching the behaviour of the standard provider.
- **ANSI output rendering in WebUI** – [#4240](https://github.com/HKUDS/nanobot/pull/4240) (closed) adds a small ANSI SGR parser to render coloured output inside code blocks, with clean-text copy support.

Other open PRs that advanced include:
- [#4235](https://github.com/HKUDS/nanobot/pull/4235) – Show NanoBot version in Settings Overview (implements [#4233](https://github.com/HKUDS/nanobot/issues/4233)).
- [#4239](https://github.com/HKUDS/nanobot/pull/4239) – Fix `HOME` inside Bubblewrap sandbox.
- [#4219](https://github.com/HKUDS/nanobot/pull/4219) – Drop orphan tool results before trimming session history (fixes [#4203](https://github.com/HKUDS/nanobot/issues/4203)).
- [#4232](https://github.com/HKUDS/nanobot/pull/4232) – Shared voice input support for WebUI and desktop.

## 4. Community Hot Topics

The most commented issue in the last 24 hours was:

- [#2256](https://github.com/HKUDS/nanobot/pull/2256) (closed) – Feishu topic‑group bot reply question, with 4 comments. The user requested that replies in topic groups be scoped to the correct thread. The issue was closed, suggesting a resolution or deferral.

Other issues with 1–2 comments include:
- [#4203](https://github.com/HKUDS/nanobot/issues/4203) – `find_legal_message_start` bug discarding all messages (2 comments).
- [#4237](https://github.com/HKUDS/nanobot/issues/4237) and [#4236](https://github.com/HKUDS/nanobot/issues/4236) – Bubblewrap sandbox bugs (1 comment each).

No single item saw heavy discussion; the community focused on reporting and fixing sandbox and session issues.

## 5. Bugs & Stability

Several bugs were reported or updated today, ranked by severity:

- **Critical – Bubblewrap sandbox fails on Ubuntu 24.04** ([#4236](https://github.com/HKUDS/nanobot/issues/4236)): Unprivileged user namespaces are restricted by default, causing commands to abort silently. No fix PR yet; the issue recommends documentation or fallback logic.
- **High – Bubblewrap sandbox does not reset HOME** ([#4237](https://github.com/HKUDS/nanobot/issues/4237)): The `$HOME` inside the sandbox still points to the host home directory, breaking tool writes. A fix PR ([#4239](https://github.com/HKUDS/nanobot/pull/4239)) already exists and sets `HOME` to the workspace.
- **High – `find_legal_message_start` drops all messages** ([#4203](https://github.com/HKUDS/nanobot/issues/4203)): When a user message is followed by an orphan tool result, the entire history is discarded. A fix PR ([#4219](https://github.com/HKUDS/nanobot/pull/4219)) is open.
- **Medium – Empty-string reasoning_content dropped** ([#4105](https://github.com/HKUDS/nanobot/issues/4105)): Custom providers lose `""` reasoning content. This was fixed by PR [#4227](https://github.com/HKUDS/nanobot/pull/4227) (closed).
- **Medium – `dream.enabled: false` still injects chat history** ([#4242](https://github.com/HKUDS/nanobot/issues/4242)): The dream cursor is never advanced, so the Recent History section always includes all history. No fix PR yet.
- **Low – Empty-response retry duplicates user turns** ([#4234](https://github.com/HKUDS/nanobot/pull/4234)): A fix PR removes the retry logic that duplicates user messages in the API handler.
- **Low – Microcompact gating** ([#4238](https://github.com/HKUDS/nanobot/pull/4238)): Extracts context governance and gates microcompaction on actual pressure instead of fixed tool‑result counts (improvement, not strictly a bug fix).

## 6. Feature Request Clusters

Several feature requests and enhancements were active in the last 24 hours, often linked to open PRs:

- **Show NanoBot version in WebUI** ([#4233](https://github.com/HKUDS/nanobot/issues/4233)) – implemented by PR [#4235](https://github.com/HKUDS/nanobot/pull/4235) which also adds a PyPI update check.
- **Model parameter for subagent spawn** ([#4231](https://github.com/HKUDS/nanobot/issues/4231)) – the `spawn` tool currently cannot override the model; a feature request with no associated PR yet.
- **Feishu topic‑group bot reply** ([#2256](https://github.com/HKUDS/nanobot/issues/2256)) – closed, likely resolved.
- **Voice input as shared capability** ([#4232](https://github.com/HKUDS/nanobot/pull/4232)) – makes transcription a top‑level config with fallback, supporting WebUI and desktop voice input.
- **DingTalk group chat allowlist** ([#4206](https://github.com/HKUDS/nanobot/pull/4206)) – adds `group_allow_from` to restrict groups.
- **MCP URL security** ([#4123](https://github.com/HKUDS/nanobot/pull/4123)) – validates MCP SSE/streamable HTTP URLs with SSRF guard.

No single cluster dominates; the requests span channel improvements, WebUI polish, and sandbox/security hardening.

## 7. User Feedback Summary

Users voiced concrete pain points this period:

- **Sandbox compatibility**: One user ([@primit1v0](https://github.com/primit1v0)) reported that Bubblewrap fails on Ubuntu 24.04 due to user namespace restrictions and that the HOME variable is not reset inside the sandbox, making tool writes impossible. Fix PRs are available for the latter.
- **Session history loss**: Another user ([@huji820](https://github.com/huji820)) found that valid conversation history gets silently dropped when a tool result appears after a user turn without a preceding assistant call. A fix PR is open.
- **Reasoning content handling**: A custom‑provider user ([@tjc0726](https://github.com/tjc0726)) noted that empty `reasoning_content` strings were being dropped, which prevented downstream processing. The issue is now fixed.
- **Version visibility**: User ([@viblo](https://github.com/viblo)) requested version display in the WebUI for easier verification; a PR already implements this.
- **Dream feature**: User ([@skyline75489](https://github.com/skyline75489)) reported that disabling the dream cron job still injects all history via the Recent History section, indicating a missing cursor advancement path.

Overall, users are actively reporting real‑world deployment issues (sandbox, session, API behaviour) and requesting quality‑of‑life improvements. Maintainers responded quickly with fix PRs in most cases.

## 8. Backlog Watch

Several PRs have remained open for more than a week without resolution or significant maintainer comment:

- **Scripted agent runner harness** ([#3982](https://github.com/HKUDS/nanobot/pull/3982), opened 2026-05-24) – adds a test harness for agent runner scenarios. Last updated 2026-06-07.
- **Runner blocked tool‑call finish reasons** ([#3983](https://github.com/HKUDS/nanobot/pull/3983), opened 2026-05-24) – adds test coverage for non‑executable tool‑call scenarios.
- **Keep read‑only roots out of write paths** ([#4053](https://github.com/HKUDS/nanobot/pull/4053), opened 2026-05-29) – security hardening for filesystem tools.
- **Block relative symlink workspace escapes** ([#4119](https://github.com/HKUDS/nanobot/pull/4119), opened 2026-05-31) – another filesystem security improvement.
- **MCP unsafety HTTP URLs rejection** ([#4123](https://github.com/HKUDS/nanobot/pull/4123), opened 2026-05-31) – SSRF guard for MCP transports.

These test‑infrastructure and security PRs have been awaiting review for over a week. They are not blocked by conflicts but have not been merged, possibly due to maintainer bandwidth. No critical unaddressed issues remain unanswered for an extended period.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

## Today's Activity Brief

Over the past 24 hours, Zeroclaw saw 50 issues updated (32 open/active, 18 closed) and 50 PRs updated (38 open, 12 merged/closed). No new releases were published. Key activity centered on dashboard PRs for the upcoming v0.8.0, including outbound-message queue, model picker, and theme enhancements that were merged. Bug reports continue to highlight persistent web-dashboard unavailability, provider fallback misconfiguration, and Gemini OAuth failures.

## Releases

None today.

## Project Progress

**Merged/closed PRs today** (among top 20 by comments, all reported as closed):

- [#7360](https://github.com/zeroclaw-labs/zeroclaw/pull/7360) – fix(zerocode): size quickstart modals by wrapped row height
- [#7249](https://github.com/zeroclaw-labs/zeroclaw/pull/7249) – feat(zerocode): theme enhancements (color-depth fallback, presets, per-agent overrides)
- [#7190](https://github.com/zeroclaw-labs/zeroclaw/pull/7190) – feat(zerocode): outbound message queue with sidebar and injection
- [#7209](https://github.com/zeroclaw-labs/zeroclaw/pull/7209) – feat(zerocode): `/model` and `/model-provider` live picker
- [#7178](https://github.com/zeroclaw-labs/zeroclaw/pull/7178) – feat(providers): per-alias model-provider fallback on failure

These PRs advance the zerocode TUI with non-blocking input, in-session model switching, improved theme handling, and more granular fallback chains.

**Other notable open PRs** (updated today):
- [#7365](https://github.com/zeroclaw-labs/zeroclaw/pull/7365) – docs book cleanup (WIP, DO NOT MERGE)
- [#7367](https://github.com/zeroclaw-labs/zeroclaw/pull/7367) – feat(gateway): per-alias webhook routing (addresses #6312)
- [#7234](https://github.com/zeroclaw-labs/zeroclaw/pull/7234) – migrate gateway and channel consolidation to `MemoryStrategy`
- [#7229](https://github.com/zeroclaw-labs/zeroclaw/pull/7229) – web dashboard tabs for MCP, Skills, Plugins & Providers
- [#7330](https://github.com/zeroclaw-labs/zeroclaw/pull/7330) – fix(zerocode): Quickstart model-provider form UX
- [#7361](https://github.com/zeroclaw-labs/zeroclaw/pull/7361) – per-turn output routing via `send_via` + voice delivery fixes

## Community Hot Topics

Most commented issues in the last 24 hours:

- [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) (closed) – *"Web dashboard is still not available"* — 28 comments. Users cannot access the web UI or desktop app; the issue persists across versions.
- [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) – *"A better LOGO of Zeroclaw"* — 11 comments. Discussion includes design proposals.
- [#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146) – *"Token consumption minimization via skill compilation"* — 9 comments. Users want to avoid sending full skill prompts on every request.
- [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) – *"Provide a 'full' docker image"* — 9 comments. Request for an all-features-enabled Docker image to lower the entry barrier.
- [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) – *"where is napcat channel"* — 9 comments. Users want OneBot/NapCat channel support.

Most reacted issue (by 👍):
- [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) – *"Multi-Agent Routing"* — 9 👍, 6 comments. Strong community interest in isolated multi-profile workspace management.

## Bugs & Stability

**High-severity bugs reported or still open today:**

| Issue | Severity | Summary | Fix PR? |
|-------|----------|---------|---------|
| [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) (closed) | S1 | Web dashboard not built/available | No direct fix linked; closed as stale? |
| [#4880](https://github.com/zeroclaw-labs/zeroclaw/issues/4880) (closed) | S2 | context_compression not triggered in daemon mode | Closed |
| [#4827](https://github.com/zeroclaw-labs/zeroclaw/issues/4827) (closed) | S1 | auto_compact_history not working in channel mode | Closed |
| [#5122](https://github.com/zeroclaw-labs/zeroclaw/issues/5122) (closed) | S2 | web_fetch allowed_private_hosts useless for DNS->private IP | Closed |
| [#5803](https://github.com/zeroclaw-labs/zeroclaw/issues/5803) (closed) | S1 | Fallback chain ignores `[providers.X]` config | Closed |
| [#5155](https://github.com/zeroclaw-labs/zeroclaw/issues/5155) (closed) | S1 | Delegate agents ignore `prompt_injection_mode` | Closed |
| [#4848](https://github.com/zeroclaw-labs/zeroclaw/issues/4848) (closed) | S2 | MCP tools not detected | Closed |
| [#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) (open) | S1 | Gemini CLI OAuth fails after authentication | No fix PR; status `in-progress` |
| [#4627](https://github.com/zeroclaw-labs/zeroclaw/issues/4627) (open) | S0 | file_write silently fails – files invisible on host | Status `in-progress` |
| [#4721](https://github.com/zeroclaw-labs/zeroclaw/issues/4721) (open) | S2 | zeroclaw logs to stdout (should be stderr) | No fix yet |
| [#4873](https://github.com/zeroclaw-labs/zeroclaw/issues/4873) (open) | S3 | Feishu channel calls LLM instead of Agent | No fix |

Notable: #4627 (file_write silent failure) is rated S0 (data loss/security risk) and still in progress. #4879 (Gemini OAuth) is a workflow blocker with no merged fix.

## Feature Request Clusters

Clusters of user-requested features and their corresponding pull requests (if any):

- **Token & Cost Efficiency**
  [#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146) – Skill compilation to reduce token consumption. No dedicated PR yet.

- **Agent-to-Agent & Multi-Agent Interop**
  [#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) – A2A protocol support (7 👍).
  [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) – Multi-agent routing (9 👍). No PRs yet.

- **Gateway & Webhooks**
  [#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) – Custom webhook transforms (blocked).
  [#6312](https://github.com/zeroclaw-labs/zeroclaw/issues/6312) – Per-alias webhook routing → PR [#7367](https://github.com/zeroclaw-labs/zeroclaw/pull/7367) (open).

- **Security & Sandboxing**
  [#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) – Air-gapped execution mode (RFC).
  [#5127](https://github.com/zeroclaw-labs/zeroclaw/issues/5127) – bubblewrap sandbox: writable paths and network access.
  [#4832](https://github.com/zeroclaw-labs/zeroclaw/issues/4832) – Option to disable LeakDetector redaction.

- **Memory & Context**
  [#4760](https://github.com/zeroclaw-labs/zeroclaw/issues/4760) – Use tool-calling for memory consolidation.
  [#5145](https://github.com/zeroclaw-labs/zeroclaw/issues/5145) – `send_channel_message` tool for direct user delivery.

- **Provider & Model Management**
  [#4647](https://github.com/zeroclaw-labs/zeroclaw/issues/4647) – Provider-scoped model fallback chains (PR [#7178](https://github.com/zeroclaw-labs/zeroclaw/pull/7178) merged today).
  [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) – Installing skills from `.well-known` URI.

- **Channel Ecosystem**
  [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) – NapCat/OneBot channel.
  [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) – Full Docker image with all features.

- **Developer Experience**
  [#7184](https://github.com/zeroclaw-labs/zeroclaw/issues/7184) – Move translated files into a git submodule.
  [#6760](https://github.com/zeroclaw-labs/zeroclaw/issues/6760) – Update Docker documentation.

## User Feedback Summary

- **Positive**: The TUI improvements (outbound message queue, model picker) were merged today, addressing long-standing input blocking and inflexibility. Multiple users contributed PRs, indicating active community participation.
- **Pain Points**:
  - Web dashboard continues to be broken or unavailable for many ([#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866)).
  - Gemini OAuth integration is non-functional ([#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879)), blocking users relying on Gemini providers.
  - The file_write tool silently fails with no error, causing data-loss risk ([#4627](https://github.com/zeroclaw-labs/zeroclaw/issues/4627)).
  - New users find the barrier high due to incomplete Docker images and missing channel support (e.g., NapCat).
  - Several configuration and fallback bugs (e.g., fallback chain ignoring config, MCP detection) have been reported but many are closed, suggesting fixes are landing.
- **Satisfaction**: Users in feature requests show enthusiasm (9 👍 on multi-agent routing). The presence of detailed RFCs (e.g., air-gapped mode, i18n submodule) shows a technically engaged community.

## Backlog Watch

Important open issues or PRs that have not seen recent maintainer action or resolution:

- [#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) – Gemini CLI OAuth not working (S1, P1, `in-progress`). No fix PR yet.
- [#4627](https://github.com/zeroclaw-labs/zeroclaw/issues/4627) – file_write silent failure (S0, P1, `in-progress`). Critical data-loss issue.
- [#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) – Air-gapped execution mode (RFC, `blocked`, `needs-maintainer-review`). Lacks maintainer feedback.
- [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) – Full Docker image (blocked, needs maintainer).
- [#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) – Webhook transforms (blocked).
- [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) – NapCat channel request (no maintainer response).

None of these have a milestone or recent assignee change.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-08

## 1. Today’s Activity Brief
In the last 24 hours, the PicoClaw repository saw 21 issues updated (4 open, 17 closed) and 21 pull requests updated (9 open, 12 merged/closed). One nightly release was published (`v0.2.9-nightly.20260608.875cf4a2`). The maintainer team merged 12 PRs covering error handling hardening, a new Kagi web search provider, an Android Termux setup guide, and a fix for Anthropic default model IDs. Three new bug reports emerged, two of which already have open fix PRs.

## 2. Releases
**Nightly Build (v0.2.9-nightly.20260608.875cf4a2)**
[Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)
*This is an automated, potentially unstable build.* No stable release update occurred. No breaking changes or migration notes are documented.

## 3. Project Progress
Twelve PRs were merged or closed today. Notable merged contributions:

- **#3042** — `fix: handle os.Getwd() error in evolution skills_recall and drafts`
  [PR](https://github.com/sipeed/picoclaw/pull/3042)
- **#3046** — `fix(agent): add ok checks for startup info type assertions`
  [PR](https://github.com/sipeed/picoclaw/pull/3046)
- **#3037** — `Add native Kagi web search provider`
  [PR](https://github.com/sipeed/picoclaw/pull/3037)
- **#2902** — `docs: add Android Termux guide`
  [PR](https://github.com/sipeed/picoclaw/pull/2902) — *Adds documentation for running PicoClaw on ARM64 Android via Termux.*
- **#2936** — `feat(skills): skip skills whose required binaries are missing on PATH`
  [PR](https://github.com/sipeed/picoclaw/pull/2936) — *Fixes #2351; prevents advertising skills the LLM cannot execute.*
- **#2906** — `Fix message bus backpressure handling and health visibility`
  [PR](https://github.com/sipeed/picoclaw/pull/2906) — *Bounded waiting on queue saturation, drop stats, health endpoint.*
- **#3036** — `fix(config): use canonical Anthropic default model ID`
  [PR](https://github.com/sipeed/picoclaw/pull/3036) — *Changes default model string from `claude-sonnet-4.6` to `claude-sonnet-4-6` to match Anthropic API.*
- **#3040**, **#3034**, **#3035**, **#3033** — *Multiple PRs adding `ok` checks on type assertions and explicit error handling for `Close()` calls after file operations.*
- **#3042** and **#3046** (already listed above) also cover error propagation improvements.

Several issues in the EXM/EX/RG series (e.g., #3030–#3032, #3024–#3029) were closed, describing low-level components for a trading system prototype (ClawHub, Binance connectors, risk manager). These appear to be structured tasks from an external contributor.

## 4. Community Hot Topics
The issues and PRs with the most engagement in the past 24 hours:

- **#2674** (8 comments, 4 👍) — *[CLOSED] Codex OAuth: empty assistant response when ChatGPT backend streams items via `response.output_item.done`*
  [Issue](https://github.com/sipeed/picoclaw/issues/2674)
  *Users reported empty responses when using the OpenAI Codex OAuth provider. The issue was closed, likely after a fix was merged earlier.*
- **#286** (8 comments, 2 👍) — *[CLOSED] Docs: Add guide for running PicoClaw on Android via Termux*
  [Issue](https://github.com/sipeed/picoclaw/issues/286)
  *The feature request has been fulfilled with the merged PR #2902 today.*
- **#2952** (4 comments, 0 👍) — *[CLOSED] [Feature] 好久没发新版本了*
  [Issue](https://github.com/sipeed/picoclaw/issues/2952)
  *Chinese-language feature request touching on `exec` command behavior, QQ channel restart loop, and model provider UI improvements. Closed with a stale label.*
- **#2834** (4 comments) — *[CLOSED] [Feature] Update from source*
  [Issue](https://github.com/sipeed/picoclaw/issues/2834)
  *User asked for upgrade tutorial; closed as likely resolved by existing documentation.*
- **#652** (4 comments) — *[CLOSED] [Task] Check correction of workspace skills/skill-creator*
  [Issue](https://github.com/sipeed/picoclaw/issues/652)
  *Skill creator pointing to missing script; closed after audit.*

**Community sentiment**: Users are actively requesting documentation and fixes for provider interactions. The Kagi search provider addition (#3037) signals interest in third-party service integration.

## 5. Bugs & Stability
Three new bugs were reported today; two already have open fix PRs.

**High Severity**
- **#3041** — `mcp add` mis-parses global flags into positionals, breaking http/sse adds and silently mis-naming stdio servers
  [Issue](https://github.com/sipeed/picoclaw/issues/3041)
  *Version v0.2.9. The `--no-color` flag is consumed as a positional argument, preventing MCP server registration. Fix PR #3048 (open) exists.*
  - **Fix PR**: [#3048](https://github.com/sipeed/picoclaw/pull/3048)

**Medium Severity**
- **#3044** — `allow_from` fails for Matrix user IDs containing colon (standard `@user:domain` format)
  [Issue](https://github.com/sipeed/picoclaw/issues/3044)
  *Root cause: `ParseCanonicalID` splits on first colon, misinterpreting the ID. Fix PR #3045 (open) corrects the parsing.*
  - **Fix PR**: [#3045](https://github.com/sipeed/picoclaw/pull/3045)

**Low Severity**
- **#3049** — Telegram channel ignores location messages (`message.location`)
  [Issue](https://github.com/sipeed/picoclaw/issues/3049)
  *No reaction or log output. No fix PR yet.*

Additionally, issues #3039 and #3038 (duplicate Matrix `allow_from` bugs) were marked for deletion.

**Stability improvements merged today**: Multiple PRs add defensive error checks for type assertions, file `Close()` errors, and `os.Getwd()` failures, reducing potential silent data corruption.

## 6. Feature Request Clusters

| Request | Related PR / Status |
|---------|-------------------|
| Add OmniRoute as a provider (#2978) | Open, stale (1 comment, no maintainer response) |
| Telegram: treat reply to bot as mention in group chats (#2975) | Open PR [#2975](https://github.com/sipeed/picoclaw/pull/2975) (stale) |
| Telegram: handle location messages (#3049) | New bug report, no fix yet |
| Native Kagi web search provider | Merged today via [#3037](https://github.com/sipeed/picoclaw/pull/3037) |
| Multiple UI/UX improvements (Chinese request #2952) | Closed as stale |
| Android Termux guide | Merged today via [#2902](https://github.com/sipeed/picoclaw/pull/2902) |

No clear cluster beyond provider expansion and Telegram enhancements.

## 7. User Feedback Summary
- **Pain points**: The `mcp add` command is broken with persistent flags (#3041). Matrix user ID parsing is incompatible with standard format (#3044). Telegram location messages are completely ignored (#3049). Anthropic default model ID in configuration was invalid (fixed in #3036).
- **Positive feedback**: Users who waited for the Android Termux guide (#286) now have it merged. The Kagi search provider was added swiftly after request. Multiple error-handling fixes were acknowledged and merged the same day.
- **Unaddressed requests**: The OmniRoute provider request (#2978) has been open for over a week without a project response. The Chinese feature bundle (#2952) was closed without implementation.

## 8. Backlog Watch
- **#2978** — *Add omniroute as provider* (open since May 31, no maintainer comment)
  [Issue](https://github.com/sipeed/picoclaw/issues/2978)
- **#2904** — *Fix agent loop reload and panic cleanup stability* (open PR since May 20, stale)
  [PR](https://github.com/sipeed/picoclaw/pull/2904)
- **#2975** — *feat(telegram): treat reply to bot message as mention in group chats* (open PR since May 30, stale)
  [PR](https://github.com/sipeed/picoclaw/pull/2975)

These items have received no recent maintainer attention and may require review or feedback.

</details>