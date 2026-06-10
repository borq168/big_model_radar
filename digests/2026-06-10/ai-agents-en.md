# OpenClaw Ecosystem Digest 2026-06-10

> Issues: 445 | PRs: 488 | Projects covered: 4 | Generated: 2026-06-10 02:36 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-06-10

## Today's Activity Brief

The project saw heavy activity with **445 issues** and **488 pull requests** updated in the last 24 hours, 316 open issues and 355 open PRs remaining. Two releases shipped (`v2026.6.5` and `v2026.6.5-beta.6`) both focused on fixing QQBot reasoning tag leakage and hardening MCP tool result coercion. A significant cluster of high-severity regressions continues to dominate conversation, particularly around Codex app-server turn-completion stalls, Matrix thread reply failures, and session lane wedges across multiple messaging backends. Several maintainers pushed fixes for iMessage, cron, and gateway diagnostics.

## Releases

**v2026.6.5** and **v2026.6.5-beta.6** (identical highlights)
- QQBot now strips model reasoning/thinking scaffolding before native delivery, preventing raw `<thinking>` content from leaking into channel replies. (#89913, #90132) — thanks @openperf.
- MCP tool results now coerce `resource_link`, `resource`, `audio`, malformed image, and future unhandled result shapes into safe representations instead of passing raw payloads.

No breaking changes or migration notes were published with these releases.

## Project Progress

Multiple PRs were merged or closed today, advancing several stability and diagnostics fronts:

- **Context-engine compaction ownership for Codex sessions** ([#91590](https://github.com/openclaw/openclaw/pull/91590), merged): Keeps owning context-engine compaction primary for budget compaction when a Codex/native harness is also selected, and treats Codex native `thread/compact/start` as a bounded secondary follow-up. Clears stale Codex thread-bootstrap state. Fixes a regression where Codex sessions could lose compaction control.
- **Cron queue disabled wake fallback for one-shots** ([#91811](https://github.com/openclaw/openclaw/pull/91811), closed): Treats `runHeartbeatOnce()` returning `skipped: disabled` as a safe wake-now fallback path, queuing a heartbeat request instead of marking the one-shot run as skipped.
- **iMessage inbound startup diagnostics** ([#91785](https://github.com/openclaw/openclaw/pull/91785), merged): Adds default-level privacy-safe diagnostics when inbound rows are dropped for echo/reflection reasons, improving debug visibility.
- **iMessage outbound send transport hardening** ([#91783](https://github.com/openclaw/openclaw/pull/91783), merged): Introduces configurable `channels.imessage.sendTransport` with `auto`, `bridge`, or `applescript` options, and stops monitor final replies from reusing the long-lived watch RPC client.

## Community Hot Topics

### Most Active Issues by Comments/Reactions

1. **#25592 — Text between tool calls leaks to messaging channels** ([link](https://github.com/openclaw/openclaw/issues/25592))
   29 comments, 1 👍. Labeled P1, security, `impact:message-loss`. Core request: agent internal processing output (error handling, acknowledgments, narration) should not be visible to end users. Stale since Feb 2026 with multiple reviewer labels still pending.

2. **#88312 — Codex app-server turn-completion stall regression** ([link](https://github.com/openclaw/openclaw/issues/88312))
   15 comments, 3 👍. Regression of #84076 (previously fixed by #85107). Reliably fails multi-tool agent turns with "Codex stopped before confirming the turn was complete" starting in 2026.5.27. Reported by maintainer @yair.

3. **#87307 — Matrix thread replies sent as normal replies on 2026.5.22** ([link](https://github.com/openclaw/openclaw/issues/87307))
   14 comments, 1 👍. Two related Matrix issues: bot replies no longer posted as thread replies, and `/status` and `/model` commands are silent. Reported on stable `2026.5.22`.

### Underlying Themes

The most active threads cluster around **message visibility and session lifecycle issues**:
- Leaked internal content (tool calls, thinking tags, reasoning) to user channels remains a top concern across multiple platforms (Discord, QQBot, general tool-call text).
- Session stalls and wedge states (Codex, WhatsApp, Telegram) drive persistent debate about watchdog recovery, timeout handling, and diagnostics.
- Matrix users report clear regressions after upgrading to the latest stable release — this is the second consecutive weekly digest where Matrix thread handling has been a top issue.

## Bugs & Stability

### High Severity (P1, regressions, message-loss or session-state impact)

- **Codex app-server turn-completion stall** ([#88312](https://github.com/openclaw/openclaw/issues/88312), P1, open): Regression in 2026.5.27. Multi-tool turns reliably stall. A fix PR (#91590) was merged today, addressing context-engine compaction ownership for Codex sessions.
- **Matrix thread replies regression** ([#87307](https://github.com/openclaw/openclaw/issues/87307), P1, open): Bot replies sent as normal messages, `/status` and `/model` silent. No fix PR yet; live repro still needed.
- **EmbeddedAttemptSessionTakeoverError during Discord runs** ([#86508](https://github.com/openclaw/openclaw/issues/86508), P1, open): Session file changed while embedded prompt lock was released. Reported by @OC-BBBB with 4 👍.
- **Session write-lock timeouts blocking subagent delivery** ([#86538](https://github.com/openclaw/openclaw/issues/86538), P1, open): Session JSONL write-lock timeouts block main, cron-nested, and subagent lanes. Linked PR open (#86538).
- **Gateway heap grows unbounded, killed by OOM** ([#89315](https://github.com/openclaw/openclaw/issues/89315), P1, open): Long-running systemd deployments see memory growth. Reported on v2026.5.28.

### Medium Severity (P2, behavior bugs with workarounds)

- **RISC-V64 LLM request failure** ([#54253](https://github.com/openclaw/openclaw/issues/54253), P2, stale): "LLM Request Failed" on RISC-V64. 13 comments, 4 👍. Needs maintainer review.
- **image tool "Failed to optimize image"** ([#73424](https://github.com/openclaw/openclaw/issues/73424), closed): Preprocessing pipeline error for JPEG images with VLM models. Closed with fix.
- **"Something went wrong" in large Telegram sessions** ([#87299](https://github.com/openclaw/openclaw/issues/87299), P2, open): Spurious failures in long Telegram direct sessions with Codex runtime. Needs live repro.

### Fix PRs Available Today

- **Session lane release after drained abort** ([#91801](https://github.com/openclaw/openclaw/pull/91801), open): Fixes #91700 — stuck-session recovery now resets the session lane when an active run aborts and drains cleanly but diagnostic shows queued work.
- **Memory recall restoration from plugin tools** ([#91813](https://github.com/openclaw/openclaw/pull/91813), open): Draft PR restoring native Codex memory recall by activating memory plugin prompt capability only when visible tools include `memory_search` or `memory_get`.

## Feature Request Clusters

### Session & Message Presentation

- **Persistent task-status surface for long-running channel turns** ([#52640](https://github.com/openclaw/openclaw/issues/52640), P2, open): Request for a first-class status indicator (Discord first) beyond typing indicators and heartbeat updates. No active PR.
- **Session labels/nicknames** ([#55249](https://github.com/openclaw/openclaw/issues/55249), P2, open): Opaque auto-generated session keys make identification difficult. No active PR.
- **MathJax/LaTeX support in Control UI** ([#42840](https://github.com/openclaw/openclaw/issues/42840), P2, open): Mathematical formulas displayed as raw text. 6 👍, no active PR.

### Model & Provider Configuration

- **Per-channel / per-group / per-DM model overrides** ([#53638](https://github.com/openclaw/openclaw/issues/53638), P2, open): Granular model selection beyond global default. No active PR.
- **Resolved backend model in session_status** ([#51441](https://github.com/openclaw/openclaw/issues/51441), P2, open): When using LiteLLM, agents can't see actual backend model used. No active PR.
- **Telegram Inline Query support** ([#54794](https://github.com/openclaw/openclaw/issues/54794), P2, open): Allow invoking bot via `@botname query` from any chat. No active PR.

### Memory & State Management

- **STATE.md auto-loaded workspace bootstrap** ([#56110](https://github.com/openclaw/openclaw/issues/56110), P2, open): After context compaction, lost working state needs automatic recovery. No active PR.
- **Bounded/validated append semantics for pre-compaction memory flush** ([#90354](https://github.com/openclaw/openclaw/issues/90354), P2, open): Hard guardrails for append size and post-write validation. No active PR.
- **Context provenance metadata for injected segments** ([#54373](https://github.com/openclaw/openclaw/issues/54373), P3, open): Agent currently can't distinguish source or volatility of injected content. RFC state.

### Security & Access Control

- **Configurable file permissions for multi-user setups** ([#56263](https://github.com/openclaw/openclaw/issues/56263), P1, stale): Hardcoded `chmod 0o600` breaks group-read access in container deployments. Needs security review.
- **External content provenance propagation to policy hooks** ([#91800](https://github.com/openclaw/openclaw/pull/91800), open): Adds structured external-content provenance to tool-call policy hooks, detecting `EXTERNAL_UNTRUSTED_CONTENT` markers.

## User Feedback Summary

### Pain Points Repeated Across Channels

1. **Message leakage**: Users consistently report internal agent tool-call text, reasoning, and processing artifacts appearing in end-user channels (Discord, QQBot, general tool-call text). The #25592 thread has been open since February and remains one of the project's highest-engagement issues.

2. **Session stalls and lost replies**: Multiple users report models that complete generation but never deliver replies (WhatsApp, Telegram, Codex). The pattern of "incomplete turn, payloads=0, reply never delivered" recurs across #84569, #88312, #86508.

3. **Regression sensitivity**: #88312 (Codex stall) and #87307 (Matrix thread replies) both identify regressions introduced in recent stable releases, with users providing clean before/after comparisons. #88312 was a re-regression of a previously fixed bug (#84076).

4. **Config and state loss**: #54634 reports silent config drop on version upgrade when `HOME` changes; #54634 notes session file renaming after network disconnect (#87700). Both erode user trust in session persistence.

### Satisfaction Signals

- Positive mention of RISC-V64 interest (#54253) — "quite excited to have tried using OpenClaw on my Mac & x86 Systems." The user invested significant effort in cross-platform testing.
- The release's QQBot thinking-tag fix (#89913, #90132) directly addresses a widely-reported issue, suggesting maintainers are actively responding to user feedback on message leakage.

## Backlog Watch

### Long-unanswered Important Issues

- **#42840 — MathJax/LaTeX Support** ([link](https://github.com/openclaw/openclaw/issues/42840)): Created 2026-03-11, P2, 6 👍. No maintainer response beyond triage labels. Unanswered for 3 months.
- **#52640 — Persistent task-status surface** ([link](https://github.com/openclaw/openclaw/issues/52640)): Created 2026-03-23, P2, 7 comments. Needs maintainer review since March.
- **#56263 — Configurable file permissions** ([link](https://github.com/openclaw/openclaw/issues/56263)): Created 2026-03-28, P1, needs security review. No maintainer movement in 2+ months.
- **#54531 — Force reply to originating channel** ([link](https://github.com/openclaw/openclaw/issues/54531)): Created 2026-03-25, P1, 10 comments. Linked PR is open but no maintainer review.
- **#48003 — Steer mode mid-turn message injection** ([link](https://github.com/openclaw/openclaw/issues/48003)): Created 2026-03-16, P1, 12 comments. Multiple reviewer labels still pending.

### Stale P1 Issues With Linked PRs

- **#44905 — Discord leaks internal tool-call traces** ([link](https://github.com/openclaw/openclaw/issues/44905)): Created 2026-03-13, P1, 10 comments. All required reviewer labels (needs-product-decision, needs-security-review) still unchecked.
- **#31331 — Docker Install + Sandbox workspaceAccess** ([link](https://github.com/openclaw/openclaw/issues/31331)): Created 2026-03-02, P1, 9 comments. Needs product decision and security review — unresolved for over 3 months.
- **#25592 — Text between tool calls leaks** ([link](https://github.com/openclaw/openclaw/issues/25592)): Created 2026-02-24, P1, 29 comments. Multiple reviewer labels remain unaddressed despite being the most-commented open issue.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-06-10

## 1. Daily Cross-Project Overview

Today saw heavy activity in OpenClaw (445 issues, 488 PRs, two releases) while NanoBot, Zeroclaw, and PicoClaw showed moderate activity with 6–50 issues and 17–50 PRs each. No releases were published for the latter three, except a PicoClaw nightly build. Cross-project themes include message visibility and session isolation (OpenClaw, NanoBot, Zeroclaw), model compatibility fixes (all projects), and a surge of security reports filed against PicoClaw (15 issues from a single researcher). OpenClaw’s volume dominates, but each project contributed concrete fixes and ongoing community discussions.

## 2. Activity Comparison

| Project    | Issues Updated (24h) | PRs Updated (24h) | Release Today        | Activity Note |
|------------|-------------------|-------------------|----------------------|---------------|
| OpenClaw   | 445               | 488               | v2026.6.5 & beta.6   | Very high; regression fixes and releases dominate |
| NanoBot    | 6                 | 23                | None                 | Moderate; documentation, WebUI fork, GPT-5 fix merged |
| Zeroclaw   | 50                | 50                | None                 | Moderate; high-severity bugs and provider refactor in discussion |
| PicoClaw   | 20                | 17                | nightly v0.2.9       | Moderate; 15 security issues filed, agent collaboration merged |

*Note: OpenClaw’s issue and PR counts are an order of magnitude larger; treat as outlier.*

## 3. OpenClaw Compared With Peers

- **Activity volume**: OpenClaw dwarfs peers (~10× issues, ~20× PRs). It ships two releases while others ship none (beyond a nightly). This reflects its role as the core reference implementation with a larger contributor base.
- **Technical focus**: OpenClaw concentrates on cross-platform messaging reliability (iMessage, Matrix, Discord, QQBot, Telegram), session lifecycle stability, and compiler-level control over context compaction. Peers focus more on feature requests (NanoBot per-conversation model, Zeroclaw multi-tenant RBAC) and security hardening (PicoClaw).
- **Community surface area**: OpenClaw’s top issue (#25592, text between tool calls leaks) has 29 comments and is 4 months old, indicating persistent community pain. Other projects’ top issues have 11–19 comments, with shorter open durations. OpenClaw also maintains a larger backlog of stale P1 issues.

## 4. Shared Technical Focus Areas

Several requirements appear in multiple projects today:

- **Message leak / visibility control**: OpenClaw (#25592, tool-call text leaks) and NanoBot (#4259, cross-session context pollution) both involve internal content appearing where it should not. Zeroclaw (#6034, user message loss) and PicoClaw (#2796, history missing messages) touch on message integrity.
- **Model/provider parameter compatibility**: All four projects addressed model-specific parameter mismatches: OpenClaw (MCP result coercion), NanoBot (GPT-5 `max_completion_tokens`), Zeroclaw (OpenRouter `reasoning` field), PicoClaw (Claude opus-4-7 temperature).
- **Security hardening**: PicoClaw’s 15 security reports (SSRF, authorization bypass, CSRF) are the most prominent. OpenClaw has lingering P1 security issues (#25592, #44905, #31331). Zeroclaw has MCP auto-approve bypass (#6721, #6876). NanoBot has a pending symlink escape PR (#4119).
- **Configuration friction**: NanoBot (#4253, per-conversation model override), Zeroclaw (#5862, agent unaware of cron), PicoClaw (#2404, streaming flag) all show users wanting simpler, more flexible configuration. OpenClaw has many feature requests on the same theme.

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Zeroclaw | PicoClaw |
|-----------|----------|---------|----------|----------|
| **Primary focus** | Multi-platform messaging reliability and session lifecycle | Personal AI assistant with strong WebUI and documentation | Provider architecture unification and multi-tenant deployments | Lightweight agent for edge devices (Sipeed hardware association) |
| **Target users** | Developers running agents on many messaging backends | Individuals wanting a configurable personal assistant | Teams deploying multi-tenant, self-hosted agent instances | Users on low-power devices or embedded systems |
| **Technical architecture** | Heavy emphasis on context compaction, lane management, and gateway diagnostics | Modular skill system with WebUI fork, cron, and memory | Focus on provider abstraction (MCP, LiteLLM), observability (OTel), and TUI | Minimal agent collaboration feature; nightly builds; SSRF and authorization layers |
| **Community activity pattern** | High volume with many regression reports and long-open P1 issues | Smaller but engaged; feature requests prompt discussion | Moderate; high-severity bugs and RFC-style refactor proposals | New security audit influx; feature acceptance mixed |

## 6. Community Activity Notes

Based solely on today’s counts and releases:

- **Very High Activity**: OpenClaw (445 issues updated, 488 PRs, two releases).
- **Moderate Activity**: Zeroclaw (50 issues, 50 PRs), NanoBot (6 issues, 23 PRs), PicoClaw (20 issues, 17 PRs, one nightly).
- *No project shows low activity today. OpenClaw’s volume is exceptional; the others cluster within a similar band.*

## 7. Evidence-Backed Observations

1. **Message integrity is a cross-project pain point**. OpenClaw’s #25592 (tool-call text leaks), NanoBot’s #4259 (cross-session context pollution), Zeroclaw’s #6034 (user message loss), and PicoClaw’s #2796 (history missing messages) all involve user-facing content being lost, leaked, or contaminated. The issue appears across four distinct codebases, suggesting systemic challenges in agent message lifecycle management.

2. **Security auditing is active but maintainer response varies**. PicoClaw received 15 security issues from one researcher today—none yet responded to. OpenClaw has P1 security issues (e.g., #25592, #44905, #31331) that have been open for months with unchecked reviewer labels. Zeroclaw’s MCP auto-approve bypass (#6721) and NanoBot’s workspace escape PR (#4119) remain unmerged. Security backlog is building across projects.

3. **Model/provider compatibility breaks are frequent and quickly patched**. Today, all four projects merged or discussed fixes for parameter mismatches: NanoBot (#4268, GPT-5), Zeroclaw (#7423, OpenRouter `reasoning`), PicoClaw (#2940, Claude temperature). These are merged within days of the issue being reported, indicating active maintainer attention to provider drift.

4. **Feature requests for per-conversation/scope configuration recur across projects**. NanoBot (#4253), Zeroclaw (#6378, Discord per-channel), and PicoClaw (#2404, per-turn streaming) all ask for granular control beyond global settings. No project has a merged implementation for these, suggesting a common unmet user need.

5. **No clear cross-project signal**: There is no evidence of a single trend “becoming the standard” or a “market reshaping” development. The projects remain differentiated in focus and scale.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-10

## Today's Activity Brief

In the past 24 hours, NanoBot saw **6 issues updated** (all open) and **23 pull requests updated** (13 open, 10 merged/closed). No new releases were published. The most active topics include a request to override the model per conversation, a reported cross-session context pollution bug, and fixes for GPT-5 token parameter compatibility. Several long-running test harness and security PRs continue to receive updates, while documentation and WebUI improvements were merged.

## Releases

No new releases today.

## Project Progress

Ten pull requests were merged or closed in the last 24 hours. Notable changes include:

- **WebUI fork-from-here** ([#4208](https://github.com/HKUDS/nanobot/pull/4208) – merged): Users can now fork a conversation from a specific assistant reply, creating a new chat with the prefix.
- **Documentation overhaul** ([#4177](https://github.com/HKUDS/nanobot/pull/4177) – merged): Reworked onboarding docs with beginner-friendly setup paths, CLI command chooser, and deployment guides.
- **Cron schedule change** ([#4265](https://github.com/HKUDS/nanobot/pull/4265) – merged): `daily-english-read` skill changed from daily to every 2 days.
- **LaTeX rendering for Feishu channel** ([#3434](https://github.com/HKUDS/nanobot/pull/3434) – merged): Markdown LaTeX is now rendered as images via CodeCogs API.
- **Dream identity file protection** ([#3400](https://github.com/HKUDS/nanobot/pull/3400) – merged): Users can disable Dream edits to `SOUL.md` and `USER.md` via `allow_edit_identity_files`.
- **GitAgent Protocol support** ([#4034](https://github.com/HKUDS/nanobot/pull/4034) – closed as duplicate): A PR adding `agent.yaml` + `SOUL.md` was closed; maintainers likely have alternative plans.
- **Tool call validation strictness** ([#4190](https://github.com/HKUDS/nanobot/pull/4190) – merged): Tool argument validation now rejects malformed non-object values instead of silently repairing them.

## Community Hot Topics

- **Model override per conversation** ([#4253](https://github.com/HKUDS/nanobot/pull/4253) – 3 comments, 0 👍): The author wants to switch between a fast OpenRouter preset and a private local LLaMA.cpp preset depending on task sensitivity. This is the most discussed issue today, reflecting a desire for per-conversation model flexibility.
- **Cross-session context pollution** ([#4259](https://github.com/HKUDS/nanobot/pull/4259) – 2 comments, 0 👍): A Chinese-language bug report details how `history.jsonl` entries from other sessions leak into the current session’s system prompt due to missing session isolation. High interest among maintainers and users concerned about privacy.
- **OpenAI-compatible tool call parsing** ([#4061](https://github.com/HKUDS/nanobot/pull/4061) – 1 comment, 0 👍): Some providers emit tool calls as plain text instead of structured `tool_calls`. The issue is open since May 29 and still unresolved, but a fix PR is not yet linked.

## Bugs & Stability

Bugs reported today, ranked by severity:

1. **Cross-session context pollution** ([#4259](https://github.com/HKUDS/nanobot/issues/4259)): History from other sessions contaminates current session system prompt. **Severity: High** – can leak private data and confuse the model. No fix PR exists yet.
2. **IdleCompact uses incomplete history** ([#4264](https://github.com/HKUDS/nanobot/issues/4264)): The compaction mechanism excludes the last 8 messages, which means user corrections and final correct answers are lost during summarization. **Severity: Medium** – leads to wrong historical summaries.
3. **OpenAI-compatible tool call parsing** ([#4061](https://github.com/HKUDS/nanobot/issues/4061)): Structured tool calls are not emitted by some providers, so tools fail. **Severity: Medium** – users of non-standard providers are blocked.
4. **`max_tokens` vs `max_completion_tokens` for GPT-5** ([#4261](https://github.com/HKUDS/nanobot/issues/4261)): GPT-5.x models reject `max_tokens` and require `max_completion_tokens`. **Severity: Medium** – breaks compatibility with newest OpenAI models.

Fix PRs submitted today:
- [#4268](https://github.com/HKUDS/nanobot/pull/4268) and [#4263](https://github.com/HKUDS/nanobot/pull/4263) both address the GPT-5 token parameter issue (model-name-based fallback).
- [#4266](https://github.com/HKUDS/nanobot/pull/4266) fixes line separation in `apply_patch` tool.
- [#4267](https://github.com/HKUDS/nanobot/pull/4267) fixes WebUI session content being intermittently dropped.
- [#4257](https://github.com/HKUDS/nanobot/pull/4257) makes `split_message` fenced-code-block-aware.
- [#4256](https://github.com/HKUDS/nanobot/pull/4256) fixes memory cursor monotonicity issues.

## Feature Request Clusters

- **Per-conversation model override** ([#4253](https://github.com/HKUDS/nanobot/issues/4253)): User requests the ability to switch model presets per conversation. No PRs yet; remains in discussion.
- **Use botIcon in agent mode** ([#4262](https://github.com/HKUDS/nanobot/issues/4262)): When starting agent mode, the bot icon from config should be used instead of a default puppy. No PRs yet.
- **On-demand version check** ([#4255](https://github.com/HKUDS/nanobot/pull/4255) – open PR): Replaces background PyPI polling with a click-to-check button in Settings. This PR is a refactor, not a user-facing feature request, but addresses a prior issue.

## User Feedback Summary

- **Multi-preset workflow**: Users like @rombert need to alternate between fast online models and private local models based on task privacy/speed requirements. This is a clear pain point for users running both cloud and local providers.
- **Session isolation**: The cross-session context pollution bug (#4259) indicates that users rely on clean session boundaries for privacy and accuracy. The current history consolidation lacks session-scoping.
- **History compaction losing corrections**: @imkuang points out that idleCompact discards the last 8 messages, which can include critical user corrections, leading to incorrect summarization and future mistakes.
- **Tool call compatibility**: @hamb1y reports that some OpenAI-compatible providers don't emit structured tool calls, causing tool failures. This suggests a need for a more flexible tool call parser.
- **Bot icon display**: @mraad notes that the default puppy icon appears briefly before the configured botIcon, which is a minor cosmetic annoyance.
- **GPT-5 compatibility**: @mraad also reports a parameter mismatch for new OpenAI models, showing that users are already adopting the latest models and expect seamless integration.

## Backlog Watch

- **Issue #4061** ([OpenAI tool call parsing](https://github.com/HKUDS/nanobot/issues/4061)): Open since May 29, no maintainer comments or fix PRs. This is blocking users of certain providers.
- **Test harness PRs** (e.g., [#3982](https://github.com/HKUDS/nanobot/pull/3982), [#3983](https://github.com/HKUDS/nanobot/pull/3983), [#4193](https://github.com/HKUDS/nanobot/pull/4193)): Open for 1–2 weeks, authored by @yu-xin-c. These add scripted testing for agent runner and memory lifecycle. No maintainer feedback visible in the data.
- **Security fix PR** [#4119](https://github.com/HKUDS/nanobot/pull/4119) (block relative symlink workspace escapes): Open since May 31, no apparent maintainer interaction. Could be waiting for review.
- **Read-only roots PR** [#4053](https://github.com/HKUDS/nanobot/pull/4053): Open since May 29, also from @yu-xin-c. These PRs collectively improve execution safety and test coverage but have not yet been merged.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest — 2026-06-10

## 1. Today's Activity Brief

In the last 24 hours, the Zeroclaw repository saw 50 issues updated (48 open, 2 closed) and 50 pull requests updated (49 open, 1 merged/closed). No new releases were published. The project’s most discussed issue remains the long-running logo redesign (19 comments), while several high-severity bugs affecting cron, context budget, and tool approval remain active. A single PR was merged today fixing channel cost lookup fallback. Activity is concentrated on runtime fixes, observability features, and provider compatibility improvements.

## 2. Releases

No new releases in the last 24 hours. The latest beta (v0.8.0-beta-1) was referenced in several bug reports; no migration notes or changelogs are available from today’s data.

## 3. Project Progress

- **Merged/Closed PRs today:**
  - **#7425** – `fix(runtime): resolve channel pricing via bare-type fallback in cost lookup` (closed). This resolved a bug where per‑day budget enforcement was silently inert for all channel agents because pricing was keyed by the wrong discriminator.
- **Closed Issues today:**
  - **#4710** – Logo redesign issue closed after extended discussion (19 comments).
  - **#7117** – Config UX parity feature request closed (2 comments).

No other PRs were merged; 49 remain open.

## 4. Community Hot Topics

Most active issues by comment count (≥5):

- **#4710** (19 comments) – [Feature]: A better LOGO of Zeroclaw – *closed today after long community input*.
- **#5862** (12 comments) – [Bug]: zeroclaw does not know it can add cron – user frustrated that the agent cannot use `zeroclaw cron` despite being asked to schedule tasks.
- **#5937** (10 comments) – [Feature]: refactor: Unify providers architecture and reqwest client management – maintainer-proposed redesign for provider module to reduce duplication.
- **#5982** (9 comments) – [Feature]: Per-sender RBAC for multi-tenant agent deployments – user request for role‑based access control in a single instance.
- **#6378** (7 comments) – [Feature]: Discord Bot respond only in specific Discord channels – parity with Matrix/Nextcloud Talk `allowed_rooms`.
- **#5844** (6 comments) – [Bug]: Too much emphasis on memory – user reports system prompt over‑prioritizes memory over current context.
- **#4853** (5 comments) – [Feature]: Installing skills from `.well-known` URI – standardisation request for skill discovery.
- **#6034** (5 comments) – [Bug]: User message loss in single/multi‑turn dialogue – Chinese‑language bug report with S1 severity.
- **#6721** (4 comments) – [Bug]: tool_search not in default_auto_approve → deferred_loading+webhook hangs 120s then auto‑denies – critical interaction between MCP tool loading and webhook mode.
- **#6002** (4 comments) – [Bug]: Not clearly addressed to the assistant – Telegram channel misidentifies user messages.

Most active PRs (by implication of being part of a stack with multiple changes) include **#7442** (fix parallel subagents), **#7365** (book rework), and **#7385** (observability turn metadata), though no comment counts are provided in the data.

## 5. Bugs & Stability

High‑severity bugs reported or updated today:

- **S1 – Workflow blocked**:
  - **#6034** – User message loss with custom OpenAI‑compatible provider (400 errors).
  - **#5808** – Default 32k context budget exhausted by system prompt on first iteration, causing perpetual trim.
  - **#6646** – `web_search_tool` and `web_fetch` not firing via Telegram in v0.7.5.
  - **#6721** – MCP `tool_search` auto‑denied in webhook mode due to missing auto‑approve.
  - **#6037** – Cron jobs launched repeatedly while still running (risk high, no severity label but described as burst).
  - **#6876** – `risk_profile.allowed_tools` does not restrict MCP tools (version v0.8.0-beta-1).

- **S2 – Degraded behavior**:
  - **#5844** – Excessive memory priority in system prompt.
  - **#6584** – OpenRouter/vLLM `reasoning` field ignored; only `reasoning_content` read.
  - **#7376** – zerocode Dashboard hides error states and mislabels history as active.
  - **#7377** – zerocode dark themes inherit unreadable terminal foreground.
  - **#7378** – macOS Cmd‑C copy treated as quit chord in zerocode.

- **S3 – Minor**:
  - **#7400** – zerocode locale change requires restart.
  - **#7253** – Web console config page shows JSON parse error.

Several bugs already have fix PRs submitted:
- **#6037** → PR #7348 (cron skip overdue on startup).
- **#6584** → PR #7423 (preserve `reasoning` field).
- **#6646** → PR #7438 (Telegram prompt no longer discourages tool use).
- **#6721** (no PR yet).
- **#7376** → PR #7444 (Dashboard state labeling fix).
- **#6876** (no PR yet).

## 6. Feature Request Clusters

Today’s issue and PR data shows several active feature development clusters:

- **Provider architecture unification** – Issue #5937 (refactor providers) is a maintainer-led effort; related PRs #7350 (Azure reasoning_effort), #7423 (reasoning field preservation).
- **Multi‑tenant access control** – Issue #5982 (per-sender RBAC) and #5775 (per-skill security permissions) point to growing demand for granular security.
- **Channel parity** – Issue #6378 (Discord `allowed_channels`), PR #7361 (per‑turn output routing via `send_via`), PR #7367 (webhook per‑alias routing), PR #7349 (Matrix thread fix).
- **Observability & cost tracking** – Issue #7248 (persist cached input tokens), PR #7385 (turn metadata for OTel), PR #7425 (fixed cost lookup).
- **Config UI/UX** – Issue #7117 (closed), #7410 (dynamic webhook secrets), #7253 (web console JSON bug), #7376‑#7380 (zerocode TUI improvements).
- **Tool execution restrictions** – Issue #6916 (process memory limits), #6917 (Composio action‑scope filter), #5842 (Codex CLI extra_args validation).
- **Cron & scheduling** – Issue #6037 (burst launches), #7250 (catch_up_on_startup), PR #7348 (fix), PR #7417 (cron edit modal fields).

No strong predictions are made; these clusters reflect current maintainer and community attention.

## 7. User Feedback Summary

- **Pain points**:
  - Several users report that the agent ignores its own built‑in capabilities (cron, web search) due to prompt phrasing (#5862, #6646).
  - Memory system is criticized for being too dominant, causing incomplete task execution (#5844).
  - MCP tool loading in webhook mode is broken (#6721), blocking headless deployments.
  - macOS users find the zerocode TUI keyboard handling frustrating (#7378, #7377).
  - Config‑related JSON errors in the web console prevent remote configuration (#7253).
- **Use cases**:
  - Multiple requests for multi‑tenant setups (RBAC, isolated tool scopes, per‑channel Discord).
  - Demand for standardized skill installation via `.well-known` URIs (#4853).
  - Need for better cost/cache visibility (issue #7248).
- **Satisfaction**:
  - The logo redesign issue (#4710) received 2 👍 and 19 comments, indicating community engagement but no clear consensus.
  - The quickstart config wizard is being improved (PR #7215), suggesting users rely on it for onboarding.

## 8. Backlog Watch

Issues that are long‑unanswered or blocked, requiring maintainer attention:

- **#5862** (Apr 18) – `zeroclaw does not know it can add cron` – Needs‑author‑action, blocked. User frustration not yet resolved.
- **#5982** (Apr 22) – Per‑sender RBAC – Blocked, needs‑author‑action.
- **#5775** (Apr 15) – Per‑skill security permissions – Blocked, accepted.
- **#5842** (Apr 17) – Codex CLI `extra_args` validation – Accepted, no PR yet.
- **#6037** (Apr 23) – Cron duplicate launches – Status `in-progress` with PR #7348 open, but has only 1 comment.
- **#6917** (May 25) – Composio action‑scope – Blocked, accepted.
- **#6880** (not in top 30 but mentioned in data?) – No, but note that many issues carry `needs-author-action` label (e.g., #5862, #5982, #4710 before closure).
- **#7253** (Jun 5) – Web console JSON error – Only 1 comment, no fix PR yet.

The project also has a backlog of 48 open issues and 49 open PRs as of today, indicating sustained maintenance load.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest – 2026-06-10

## Today's Activity Brief
In the last 24 hours, the repository saw 20 issues updated (18 open, 2 closed) and 17 pull requests updated (12 open, 5 merged/closed). A nightly release `v0.2.9-nightly.20260610.b9a8fad6` was published. The most notable activity was a large batch of 15 security-related issues filed by a single researcher (YLChen-007), covering SSRF bypasses, authorization bypasses, CSRF, and replay vulnerabilities across several channels and components. On the fix side, four PRs were merged, including corrections to Claude model parameter handling, a config migration panic fix, and documentation updates.

## Releases
- **nightly**: Nightly Build `v0.2.9-nightly.20260610.b9a8fad6`
  Automated, unstable build. Changelog: [compare v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

## Project Progress
**Merged/closed PRs in the last 24 hours:**
- [#3064 – fix(config): add ok check for type assertion in migration model name indexing](https://github.com/sipeed/picoclaw/pull/3064) – Prevents panic on malformed config entries.
- [#2942 – fix(config): use canonical hyphenated model ID for default claude-sonnet entry](https://github.com/sipeed/picoclaw/pull/2942) – Corrects `Model` field to use hyphens, fixing first-run failures.
- [#2940 – fix(providers): omit temperature for claude-opus-4-7](https://github.com/sipeed/picoclaw/pull/2940) – Avoids HTTP 400 for this model.
- [#2937 – Feat/agent collaboration](https://github.com/sipeed/picoclaw/pull/2937) – Merged feature adding inter‑agent messaging with mailboxes, collaboration threads, and permission awareness.
- [#3086 – docs: update wechat qrcode](https://github.com/sipeed/picoclaw/pull/3086) – Documentation update.

## Community Hot Topics
- **Issue #2404** – [Feature] Add in config to send streaming HTTP request
  11 comments, 1 👍. Author @OuSatoru requests a simple `streaming: true` config flag for OpenAI‑compatible streaming. This issue has been open since April and continues to draw discussion.
  [https://github.com/sipeed/picoclaw/issues/2404](https://github.com/sipeed/picoclaw/issues/2404)

- **Issue #2796** – [BUG] History missing previous user messages (closed)
  6 comments. User @EverestSnow reported that only the last user message is shown in conversation history. A fix PR ([#2990](https://github.com/sipeed/picoclaw/pull/2990)) is now open and stale.
  [https://github.com/sipeed/picoclaw/issues/2796](https://github.com/sipeed/picoclaw/issues/2796)

- **Issue #2984** – [Feature][Protocol] Add explicit turn completion signal for Pico WebSocket clients
  1 comment, 1 👍. User @Brook-sys wants a deterministic end‑of‑turn signal for external WebSocket clients.
  [https://github.com/sipeed/picoclaw/issues/2984](https://github.com/sipeed/picoclaw/issues/2984)

## Bugs & Stability
**Security vulnerabilities (all filed 2026-06-09 by @YLChen-007; no maintainer responses yet):**

| Issue | Summary | Severity |
|-------|---------|----------|
| #3077 | `web_fetch` SSRF bypass via `198.18.0.0/15` (RFC 2544) | Critical |
| #3078 | `web_fetch` SSRF bypass via environment HTTP proxy | Critical |
| #3074 | `web_fetch` SSRF bypass via ISATAP IPv6 | Critical |
| #3079 | `exec` whitelist allows `jq` environment disclosure | High |
| #3080 | `allowed_cidrs` bypass via loopback proxying in first‑run | High |
| #3081 | `exec` approval hook `cwd` symlink race | High |
| #3082 | Feishu reply-context expansion bypasses `allow_from` | High |
| #3070 | OneBot media URL host‑side arbitrary fetch | High |
| #3071 | WebSocket clients can trigger unauthorized `/reload` | High |
| #3072 | CSRF in launcher first‑run password setup | High |
| #3073 | Signed LINE webhook replay duplicate execution | Medium |
| #3075 | Untrusted local `skills/` auto‑loaded into system prompt | Medium |
| #3068 | MQTT `allow_from` bypass via spoofed `client_id` | Medium |
| #3069 | `allowed_cidrs` bypass via reverse proxy `RemoteAddr` | Medium |
| #3076 | WeCom group trigger policy bypass | Medium |

**Other bugs reported today:**
- [#3088 – Replace libolm with vodozemac](https://github.com/sipeed/picoclaw/issues/3088) – Security/feature request (0 comments).
- [#2939 – claude-opus-4-7 temperature deprecated (closed)](https://github.com/sipeed/picoclaw/issues/2939) – Fixed by PR #2940.
- Open fix PRs targeting other known bugs: [#3087 (exec relative paths)](https://github.com/sipeed/picoclaw/pull/3087), [#3085 (add 198.18.0.0/15 to SSRF guard)](https://github.com/sipeed/picoclaw/pull/3085), [#3061 (hide Windows console flashes)](https://github.com/sipeed/picoclaw/pull/3061), [#3067 (persist dm_scope setting)](https://github.com/sipeed/picoclaw/pull/3067), [#2990 (fix session history display)](https://github.com/sipeed/picoclaw/pull/2990), [#2988 (fix `summarize_token_percent`)](https://github.com/sipeed/picoclaw/pull/2988), [#2987 (fix tool_calls filtering)](https://github.com/sipeed/picoclaw/pull/2987), [#2983 (retry empty LLM response)](https://github.com/sipeed/picoclaw/pull/2983).

## Feature Request Clusters
- **Streaming / Protocol enhancements**:
  - [#2404 – Config‑level streaming flag](https://github.com/sipeed/picoclaw/issues/2404)
  - [#2984 – Explicit turn completion signal for WebSocket](https://github.com/sipeed/picoclaw/issues/2984)

- **Provider & Gateway additions**:
  - [#3088 – Replace libolm with vodozemac](https://github.com/sipeed/picoclaw/issues/3088)
  - [#3063 – Delta Chat gateway (open PR)](https://github.com/sipeed/picoclaw/pull/3063)
  - [#2917 – NEAR AI Cloud provider (open PR)](https://github.com/sipeed/picoclaw/pull/2917)
  - [#2937 – Agent collaboration (merged)](https://github.com/sipeed/picoclaw/pull/2937)

- **Security hardening**:
  - Several open PRs and issues listed above, including [#3083 (harden launcher access control)](https://github.com/sipeed/picoclaw/pull/3083), [#3085 (SSRF guard block range)](https://github.com/sipeed/picoclaw/pull/3085), and the 15 security advisories filed today.

## User Feedback Summary
Real user pain points expressed in today’s data:
- **Configuration friction**: Users want a simple `streaming: true` toggle (#2404) and expect `summarize_token_percent` to work as documented (#2988).
- **History inconsistency**: The “last message only” bug (#2796) caused confusion for those reviewing multi‑message conversations.
- **Model compatibility breaks**: `claude-opus-4-7` failed on first requests due to deprecated `temperature` (#2939, fixed by #2940). Default model ID hyphens also caused initial failures (#2942, fixed).
- **External integration needs**: Developers ask for a clear “agent done” signal (#2984) and better WebSocket protocol stability.
- **Security concerns**: The batch of security reports indicates that users and testers are actively reviewing PicoClaw’s network‑facing components and call sites. Many reports describe concrete bypasses, suggesting real deployment risks.

## Backlog Watch
Items that remain open without recent maintainer activity or have been flagged as stale:

- **Issue #2404** – Streaming config (opened Apr 7, 11 comments). No maintainer comment since creation.
  https://github.com/sipeed/picoclaw/issues/2404

- **PR #2990** – Fix session history display (opened Jun 2, stale label). No review or merge.
  https://github.com/sipeed/picoclaw/pull/2990

- **PR #2988** – Fix `summarize_token_percent` (opened Jun 2, stale).
  https://github.com/sipeed/picoclaw/pull/2988

- **PR #2987** – Fix `tool_calls` filtering (opened Jun 2, stale).
  https://github.com/sipeed/picoclaw/pull/2987

- **PR #2983** – Retry empty LLM response (opened Jun 1, stale).
  https://github.com/sipeed/picoclaw/pull/2983

- **PR #2917** – NEAR AI Cloud provider (opened May 21, stale).
  https://github.com/sipeed/picoclaw/pull/2917

- **All 15 security issues #3068–#3082** – Filed 2026-06-09, no maintainer response or triage labels applied yet.
  (See list in Bugs & Stability section.)

</details>