# OpenClaw Ecosystem Digest 2026-05-31

> Issues: 500 | PRs: 500 | Projects covered: 4 | Generated: 2026-05-31 02:38 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-05-31

## Today’s Activity Brief
In the last 24 hours, 500 issues were updated (428 open, 72 closed) and 500 pull requests were updated (317 open, 183 merged/closed). One new release, v2026.5.28, was published with improvements to Agent and Codex runtime recovery, including better workspace separation for subagents, prompt-local hook context, and session lock cleanup. Several high-severity regressions from the previous week’s releases (e.g., Feishu dispatch failure, Codex terminal-fallback leaks) have been closed, but new P1 issues around session state and recovery continue to surface.

## Releases
- **v2026.5.28** — Release notes highlight:
  - Agent and Codex runtime recovery is steadier: subagents keep cwd/workspace separation, hook context stays prompt-local, session locks release on timeout abort while live OpenClaw locks survive cleanup, stale restart continuations are avoided, and Codex app-server/helper failures no longer cause cascading issues.

No breaking changes or migration notes were published in the provided excerpt.

## Project Progress
Of the 183 merged/closed PRs updated today, the most notable closed PRs (from the top-30 by comment count) include:
- **#88273** (closed, `plugins: Emit hooks for Codex native subagents`) — Adds plugin lifecycle hooks for Codex native subagent spawn/end events, fixing an asymmetry where OpenClaw-managed subagents emitted hooks but native Codex subagents did not.
- **#88054** (closed, `test(doctor): preserve unresolved SecretRef diagnostics`) — Adds regression coverage for an auth-policy guard without runtime behavior change.

Active PRs that advanced significantly (updated today, still open) include:
- **#88485** — `fix(agents): guard vanished workspaces` (small, waiting on author)
- **#88496** — `fix(auto-reply): redact secrets in config show output` (small, ready for maintainer)
- **#88368** — `fix(agents): quarantine invalid runtime tool schemas` (large, ready for maintainer)
- **#87072** — `feat(telegram): opt-in interleaved progress lane` (large, ready for maintainer)
- **#88477** — `[codex] Add dashboard Projects and SNES smoke proof` (large, needs proof)
- **#88343** — `feat(channels): shared progress-lane engine` (large, needs real-behavior proof)
- **#88468** — `fix(configure): migrate stale Codex defaults after OpenAI auth` (medium, ready for maintainer)
- **#88493** — `fix(doctor): report runtime tool schema validation errors` (medium, ready for maintainer)

Many infrastructure PRs from @Feelw00 address atomic writes, session store corruption prevention, and secret migration safety.

## Community Hot Topics
The following issues and PRs received the most comments and reactions today:

- **#87646** ([feishu dispatch TypeError after upgrade](https://github.com/openclaw/openclaw/issues/87646)) — 12 comments, closed. Users hit a blocking bug on Feishu channels after upgrading to v2026.5.27. Root cause: undefined property access. Quickly closed, but the same error reappeared in a new report (#88234).
- **#86820** ([Codex OAuth compaction falls back and fails without API key](https://github.com/openclaw/openclaw/issues/86820)) — 12 comments, closed. Regression in compaction path when using OpenAI Codex OAuth; fix was applied.
- **#73424** ([image tool “Failed to optimize image”](https://github.com/openclaw/openclaw/issues/73424)) — 9 comments, stale since April. Users report JPEG processing failure with a specific VLM model; no resolution yet.
- **#87436** ([Codex harness recreates legacy state after doctor –fix](https://github.com/openclaw/openclaw/issues/87436)) — 8 comments, closed. A session-route bug that undid repairs; fix merged.
- **#87307** ([Matrix thread replies regression](https://github.com/openclaw/openclaw/issues/87307)) — 8 comments, open P1. Thread replies sent as normal messages; /status and /model commands silent. No fix PR linked yet.
- **#87744** ([Codex-backed Telegram turns timeout](https://github.com/openclaw/openclaw/issues/87744)) — 6 comments, open P1. After v2026.5.27 upgrade, Codex turns never reach terminal state, causing Telegram sessions to fail.
- **#88020** ([REPLAY_INVALID_RE missing Anthropic thinking signature](https://github.com/openclaw/openclaw/issues/88020)) — 6 comments, open P1. Hard session failure instead of recovery retry for expired thinking block signatures.
- **#88234** ([Feishu dispatch TypeError again](https://github.com/openclaw/openclaw/issues/88234)) — 5 comments, open. Same error as #87646 but in a different code path; likely a related regression.

Underlying needs: Users urgently need stable channel operation (Feishu, Matrix, Telegram) and reliable Codex runtime integration after recent upgrades. Many issues involve race conditions, missing recovery logic, or mismatched provider/runtime state.

## Bugs & Stability
High-severity bugs reported or updated in the last 24 hours:

| Issue | Severity | Status | Description | Fix PR? |
|-------|----------|--------|-------------|---------|
| #88020 | P1 | open | Anthropic thinking signature expiration causes hard failure | Not yet |
| #87744 | P1 | open | Codex Telegram turns never complete (v2026.5.27) | #87725 closed (related) |
| #88352 | P1 | open | Codex transient starts drop prior session context after #88262 | Not yet |
| #87646 | P1 | closed | Feishu dispatch TypeError (undefined `run`) | Fixed in v2026.5.28? |
| #88234 | P1 | open | Feishu dispatch TypeError (different code path) | Not yet |
| #87801 | P2 | open | `supportsAdaptiveThinking()` omits opus-4-8 → 400 error | Not yet |
| #87436 | P2 | closed | Codex harness recreates legacy route after doctor –fix | Fixed |
| #86820 | P1 | closed | Codex OAuth compaction fails without API key | Fixed |
| #87650 | P1 | closed | onboard/doctor –fix did not recover Codex mismatch | Fixed in v2026.5.28 |
| #87641 | P2 | closed | `opencode-go/kimi-k2.6` multi-turn 400 format error | Closed (no fix noted) |
| #87938 | – | open | Feishu DM sessions rebuilt after restart — duplicate keys | Not yet |
| #88301 | – | open (PR) | Bootstrap warning default / system prompt digest drift | PR #88301 ready for maintainer |

Several critical bugs from v2026.5.27 appear to have been addressed in v2026.5.28, but new related issues point to remaining edge cases (especially around Codex subagent thread resumption and channel-specific dispatch).

## Feature Request Clusters
Notable feature requests and related PRs (open or closed) from today’s data:

- **Xiaomi MiMo Token Plan support** — #86169 (closed) requested first-class provider support. Related PR #88378 adds MiMo TTS voicedesign support.
- **Realtime Talk documentation and voice-agent role** — #76952 (closed, stale) asked for docs on voice options; no PR evident yet.
- **Discord voice channel I/O to text-channel** — #73699 (open, stale) requests bridging voice session I/O into text.
- **Shared progress-lane engine for channels** — Feature PR #88343 (open, needs proof) aims to unify per-channel progress streaming (supersedes earlier Discord-only work).
- **Telegram interleaved progress lane** — PR #87072 (open, ready for maintainer) adds opt-in reasoning/event rendering for Telegram.
- **Auto-trim lean local model tools** — PR #88212 (open, waiting on author) proposes automatic tool trimming based on model context cap.

No new feature requests appeared in the top comments today, but several PRs implement user-facing enhancements.

## User Feedback Summary
Real pain points expressed in today’s issues and comments:

- **Upgrade regressions** are the dominant theme. Multiple users reported that v2026.5.27 broke Feishu, Matrix, Telegram, and Codex integration. One user (@thoth-ctl) said `onboard` and `doctor --fix` did not repair the Codex provider/runtime mismatch after update.
- **Feishu channel instability** — Two separate TypeError reports (#87646, #88234) with identical symptoms but different code paths; frustration about recurring crash after fix.
- **Matrix thread behavior** — User @sibbl reported that Matrix thread replies stopped working correctly after v2026.5.22 upgrade, and `/status` and `/model` commands became silent.
- **Telegram reliability** — User @adamamzalag described Codex-backed Telegram turns repeatedly timing out without delivering final answers.
- **Windows performance degradation** — Issue #76884 (still open) complains that each newer version gets slower on native Windows.
- **Image tool failure** — Issue #73424 (stale) has a user stuck with “Failed to optimize image” for JPEGs; no resolution provided.
- **Plugin downgrade** — Issue #84256 (open, P2) reports that `openclaw plugins update --all` actively downgrades manually-updated npm plugins.
- **Accessibility** — Issue #65538 (open, P1) describes screen readers announcing every token due to `aria-live="polite"` streaming; still unresolved.

## Backlog Watch
Issues and PRs that have remained open for an extended period without maintainer action or that are waiting on maintainer review:

- **#73424** (Apr 28) — Image tool optimization error, stale, 9 comments, no fix.
- **#76315** (May 2) — Gateway unstable under subagent load on Linux, 8 comments, stale.
- **#75739** (May 1) — Codex harness migration fallback/oauth mismatch, 8 comments, stale.
- **#74907** (Apr 30) — Multi-tool turn replay produces orphan tool_use blocks, 7 comments, stale.
- **#72950** (Apr 27) — Plugin config has no env-var overlay, 6 comments, stale.
- **#65538** (Apr 12) — Accessibility: screen readers announce every streaming token, 5 comments, stale.
- **#65156** (Apr 12) — Memory vector search broken due to SQLite ABI mismatch, 6 comments, stale (P2).
- **#48780** (Mar 17) — Windows exec/read commands corrupted with `</arg_value>>` suffix, 5 comments, stale (P1).
- **#58853** (Apr 1) — WSL diagnostics check PR, open, ready for maintainer review for nearly two months.
- **#77237** (May 4) — Preserve managed npm plugin root on failed update PR, open, ready for maintainer.
- **#75128** (Apr 30) — Wrap BOOT.md in internal-runtime-context PR, waiting on author.
- **#81402** (May 13) — Move runtime state to SQLite PR, very large, waiting on author.

The backlog includes several P1/P2 issues affecting core reliability (Windows, plugin management, memory search) and accessibility that have not seen maintainer responses in weeks.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-05-31

## 1. Daily Cross-Project Overview

Today’s activity across the four tracked ecosystems shows a steep hierarchy of scale. OpenClaw dominated with 500 issues and 500 PRs updated, a new patch release (v2026.5.28), and dozens of community threads. ZeroClaw merged a dense cluster of macOS permission handlers and the long-running voice conversation pipeline, while NanoBot closed six bugs with matching fix PRs in a single day. PicoClaw published a nightly build and merged three features (image paste, Azure Identity, Bangla i18n), but also saw fresh regressions from its v0.2.9 upgrade. Provider-specific issues (especially Codex from Anthropic) and channel reliability bugs appear as cross-project concerns.

## 2. Activity Comparison

| Project   | Issues updated (open/closed) | PRs updated (open/merged) | Release status | Activity note |
|-----------|------------------------------|---------------------------|----------------|---------------|
| OpenClaw  | 500 (428 open + 72 closed)   | 500 (317 open + 183 merged) | **v2026.5.28** | Very high volume; 183 PRs merged; major bug-fix release addressing Feishu, Codex, session locks |
| NanoBot   | 6 (2 open + 4 closed)        | 15 (9 open + 6 merged)    | None           | Low volume but all merged PRs closed bugs; critical SSRF fix and Matrix verification |
| ZeroClaw  | 50 (11 open + 39 closed)     | 50 (18 open + 32 merged)  | None           | Moderate; bulk merge of desktop permission flows and voice pipeline; two new RFCs |
| PicoClaw  | 7 (3 open + 4 closed)        | 11 (3 merged + 8 open)    | **nightly build** | Low; nightly published; three features merged; two high-severity regressions from v0.2.9 |

## 3. OpenClaw Compared With Peers

- **Activity volume**: OpenClaw’s 500 issues and 500 PRs updated dwarfs the next largest (ZeroClaw at 50/50). This reflects OpenClaw’s role as the core reference project with a much larger contributor base and user community.
- **Technical focus**: OpenClaw’s daily work centres on runtime recovery, session locking, Codex integration, and channel dispatch stability—all core infrastructure. Peers address more circumscribed areas: NanoBot on concurrency and security bypasses; ZeroClaw on desktop native features and voice; PicoClaw on provider authentication, i18n, and web UI.
- **Community surface area**: OpenClaw has dozens of hot topics with up to 12 comments each; the other projects rarely exceed 4–6 comments per thread. OpenClaw users report multi-channel regressions after upgrades; NanoBot and PicoClaw users also report upgrade-related issues but at a smaller scale.

## 4. Shared Technical Focus Areas

- **Provider compatibility issues** appear in three projects:
  - **OpenClaw**: Codex OAuth compaction failure (#86820), Anthropic thinking signature expiration (#88020).
  - **NanoBot**: Anthropic content block type coercion (#3993, fixed).
  - **PicoClaw**: Codex streamed output returns null final `response.output` (PR #2967, open).
- **Channel reliability** is a cross-project concern:
  - **OpenClaw**: Feishu dispatch TypeError (two code paths), Matrix thread replies regression, Telegram timeout.
  - **NanoBot**: Matrix E2EE verification (#4042, fixed); Heartbeat false notification (#4111, open).
  - **PicoClaw**: QQ channel restart loop (#2952), Web UI history bleed after upgrade (#2972).
- **Security & sandboxing** emerged today in three projects:
  - **NanoBot**: SSRF IPv6-mapped IPv4 bypass (fixed), bounded Matrix media downloads (fixed).
  - **OpenClaw**: Session lock cleanup, secret migration safety (reflected in v2026.5.28).
  - **ZeroClaw**: Doctor warning for tilde/$VAR expansion in `gateway.web_dist_dir` (merged).
- **Web UI improvements** are underway in PicoClaw (image paste, drag-and-drop) and OpenClaw (shared progress-lane engine, Telegram lane), though at different stages.

## 5. Differentiation Analysis

- **Scope and scale**: OpenClaw is a broad platform supporting multiple channels, providers, and plugin systems. Its daily activity reflects deep infrastructure work and high community involvement. It treats subagent and Codex runtime management as first-class problems.
- **Target user**: **NanoBot** and **PicoClaw** both target self-hosters and hobbyists but differ in language and hardware focus. NanoBot is Python-based with a focus on lightweight memory (Dream), WebUI, and Matrix; PicoClaw is Go-based with nightly builds and embedded/hardware heritage (Sipeed).
- **Desktop-native push**: **ZeroClaw** is the only project with a significant Tauri desktop app—today’s merges of permission handlers and the voice pipeline suggest a strategic bet on local-first, multimodal interaction. This sets it apart from the others, which remain web/CLI-oriented.
- **Release cadence**: OpenClaw issues stable patch releases (v2026.5.28); PicoClaw uses nightly builds; NanoBot and ZeroClaw had no releases today. Maintainer responsiveness varies: NanoBot merged all reported bug fixes same day; PicoClaw closed two feature requests quickly but left v0.2.9 regressions unaddressed.

## 6. Community Activity Notes

**Tier 1 – Very High**: **OpenClaw** with 500 issues and 500 PRs updated, one stable release, and numerous active threads. Community pain points are well-documented and frequently addressed.

**Tier 2 – Moderate**: **ZeroClaw** (50 issues, 50 PRs) saw large feature merges but low discussion volume per thread (≤4 comments). The two open RFCs may drive future engagement.

**Tier 3 – Low**: **NanoBot** (6 issues, 15 PRs) and **PicoClaw** (7 issues, 11 PRs) had lower raw counts. However, NanoBot’s maintainers responded quickly to all bug reports; PicoClaw’s community is vocal about regressions but with limited maintainer replies.

- No project showed signs of stagnation or community decline; all had active maintainer activity today.

## 7. Evidence-Backed Observations

- **Upgrade regressions are a cross-project pain point.** OpenClaw v2026.5.27 broke Feishu, Matrix, and Telegram; PicoClaw v0.2.9 introduced WebUI history bleed and context command inaccuracies. Both projects issued fixes or nightly builds, but new edge cases continue to surface in the following days.
- **Provider-specific issues recur across projects.** Codex/Anthropic problems are the most common: OpenClaw (OAuth compaction, thinking signature expiration), PicoClaw (streamed output null), NanoBot (content block type). Each project handles them differently, but the pattern suggests fragmentation in provider API compatibility.
- **Security and reliability patches are being actively merged.** NanoBot fixed an SSRF bypass and added media download limits; OpenClaw hardened session lock cleanup; ZeroClaw added diagnostics for misconfigured web paths. These are concrete improvements to core safety, not just feature additions.
- **Desktop and voice features are maturing in ZeroClaw.** The simultaneous merge of five macOS permission handlers and three voice pipeline PRs signals a deliberate push toward native, voice-driven interaction. No other project in the comparison shows this level of desktop-focused delivery.
- **Community engagement volume correlates strongly with issue/PR count.** OpenClaw’s 500+ updates generate more than ten times the discussion of any peer. However, smaller projects like NanoBot show that low volume can still result in high responsiveness—all four reported bugs were fixed within 24 hours.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

## NanoBot Project Digest — 2026-05-31

### 1. Today's Activity Brief
- **6 issues** were updated in the last 24 hours (2 open, 4 closed).
  - Closed: #3885 (Dream global toggle), #4042 (Matrix verification), #4080 (per‑session dispatch lock bypass), #3993 (Anthropic content block type).
  - Open: #4111 (Heartbeat false alert), #4107 (bwrap bind mount config).
- **15 pull requests** were updated (9 open, 6 merged/closed).
  - Merged/closed PRs addressed concurrency locks, Matrix device verification, SSRF safety, media download limits, WebUI timeline, and combined fixes for Anthropic type coercion + Dream toggle.
- **No new releases** were published today.

---

### 2. Releases
*None.*

---

### 3. Project Progress
Six pull requests were merged or closed today (all within the last 24 hours):

- **[#4110] fix(matrix): handle SAS device verification** — Merged. Adds opt‑in SAS verification handling for Element X clients, fixing the “unverified device” warning.
- **[#4104] fix(agent): acquire per‑session lock in process_direct** — Merged. Fixes a concurrency bug where `process_direct()` bypassed the session dispatch lock, risking history corruption.
- **[#4108] feat(webui): refine output timeline and model controls** — Merged. Reworks WebUI agent output into a clearer timeline with media previews and adds a composer guidance flow.
- **[#4054] fix: coerce typeless Anthropic content blocks + add Dream enable toggle** — Merged. Closes #3993 and #3885: coerces bare dicts to text blocks for Anthropic, and adds `DreamConfig.enabled` to skip Dream cron registration when set to `false`.
- **[#4086] fix(security): normalize IPv6‑mapped IPv4 addresses in SSRF checks** — Merged. Closes a security bypass where `0.0.0.0` could be accessed via IPv6‑mapped addresses.
- **[#4106] [security] fix(matrix): bound inbound media downloads** — Merged. Enforces configured media size limits before downloading Matrix attachments, rejecting untrusted size fields.

---

### 4. Community Hot Topics
- **#3885 – Dream system global toggle (closed, 4 comments)**
  User `@codeLong1024` requested a configuration flag to completely disable the Dream cron job. The discussion led to PR #4054 which implemented `DreamConfig.enabled`.
  *Link:* [#3885](https://github.com/HKUDS/nanobot/issues/3885)

- **#4042 – Matrix SAS verification (closed, 1 comment)**
  `@PaddyPatPat` reported that Element X clients show an “unverified device” warning for every E2EE message. The fix merged in #4110 resolves the issue by handling SAS verification events.
  *Link:* [#4042](https://github.com/HKUDS/nanobot/issues/4042)

- **#4111 – Heartbeat false “All clear.” notification (open, 0 comments)**
  `@CashSoldier` reported that the Heartbeat cron job sends a misleading “All clear.” message to Feishu even when no tasks exist. Two fix PRs (#4114, #4112) were opened shortly after.
  *Link:* [#4111](https://github.com/HKUDS/nanobot/issues/4111)

The most active conversations involved configuration controllability (Dream toggle, bwrap bind mounts) and Matrix channel reliability.

---

### 5. Bugs & Stability
| Bug | Severity | Status | Fix PR | Description |
|-----|----------|--------|--------|-------------|
| **#4080 – process_direct bypasses per‑session dispatch locks** | High | Closed (fix merged) | [#4104](https://github.com/HKUDS/nanobot/pull/4104) | Direct calls (API, cron, WebUI) could run concurrently with bus turns on the same session, corrupting history. |
| **#4111 – Heartbeat sends “All clear.” to Feishu on empty task list** | Medium | Open | [#4114](https://github.com/HKUDS/nanobot/pull/4114), [#4112](https://github.com/HKUDS/nanobot/pull/4112) | Cron job evaluates non‑empty `HEARTBEAT.md` but still sends a notification when no real tasks exist. |
| **#4042 – Matrix E2EE “unverified device” warning** | Medium | Closed (fix merged) | [#4110](https://github.com/HKUDS/nanobot/pull/4110) | Element X clients show a warning for every message because SAS verification is not handled. |
| **#3993 – Anthropic rejects content blocks without `type`** | Medium | Closed (fix merged) | [#4054](https://github.com/HKUDS/nanobot/pull/4054) | Tool returns bare dict → `_convert_user_content` fails type requirement. |
| **#4086 – IPv6‑mapped IPv4 SSRF bypass** | Critical | Closed (fix merged) | [#4086](https://github.com/HKUDS/nanobot/pull/4086) | SSRF checks could be bypassed using `0.0.0.0` via IPv6‑mapped addresses. |
| **#4106 – Unbounded Matrix media downloads** | High | Closed (fix merged) | [#4106](https://github.com/HKUDS/nanobot/pull/4106) | Matrix channel could download media without enforcing size limits. |

All reported bugs, except #4111, have a merged fix in today’s window.

---

### 6. Feature Request Clusters
Today’s data shows several thematic feature requests and corresponding PRs:

- **Memory / Dream system control**
  - #3885 (closed) – Add `DreamConfig.enabled` toggle. Implemented in #4054.
  - #4050 (open) – Add *manual memory mode* with an isolated memory flow.
  - #4109 (open) – Implement lightweight RAG for memory retrieval using local embeddings.

- **Provider / LLM configuration**
  - #3993 (closed) – Anthropic content block type coercion.
  - #3994 (open) – Registry‑driven provider config fields (Bedrock `region`, `profile`) and WebUI integration.
  - #4113 (open) – Configurable STT model + OpenRouter transcription provider.
  - #3997 (open) – Tokenizer pre‑warm and startup timing diagnostics.

- **Sandbox / security configuration**
  - #4107 (open) – Allow configuring additional bind mounts for bwrap sandbox.

- **Agent collaboration & portability**
  - #3992 (open) – Cross‑agent message bus for multi‑instance collaboration.
  - #4034 (open) – Add GitAgent Protocol support (`agent.yaml` + `SOUL.md`).

- **Channel / UI improvements**
  - #4108 (merged) – WebUI timeline and model controls refinement.
  - #4042 / #4110 – Matrix SAS verification (merged).

No single feature cluster dominates; multiple ongoing efforts reflect community interest in memory control, provider flexibility, and sandbox extensibility.

---

### 7. User Feedback Summary
- **Pain points expressed:**
  - “Dream cron job runs even when memory is disabled” – @codeLong1024 (#3885)
  - “Matrix E2EE warning on every message with Element X” – @PaddyPatPat (#4042)
  - “`process_direct()` corrupts session history” – @hamb1y (#4080)
  - “Heartbeat sends false ‘All clear.’ notification” – @CashSoldier (#4111)
  - “bwrap sandbox only binds hardcoded paths” – @Kyakui (#4107)
  - “Anthropic rejects bare dict content blocks” – @mraad (#3993)

- **Satisfaction indicators:** All of the above issues (except #4111 and #4107) have been resolved in today’s merged PRs, suggesting responsive maintainers. Users’ direct configuration and compatibility concerns are being addressed quickly.

- **Use cases reflected:**
  - Customizable memory/background job behavior.
  - Reliable end‑to‑end encryption in Matrix.
  - Safe and extensible sandbox for tool execution.
  - Multi‑provider (Anthropic, Bedrock, OpenRouter) support.

---

### 8. Backlog Watch
Several open PRs and issues have not yet received maintainer attention or are waiting for review:

- **PR #4034 – GitAgent Protocol support**
  Created 2026‑05‑28, last updated 2026‑05‑30. No maintainer comments visible.
  [Link](https://github.com/HKUDS/nanobot/pull/4034)

- **PR #3992 – Agent collaboration message bus**
  Created 2026‑05‑24, last updated 2026‑05‑30. Significant feature with no maintainer interaction yet.
  [Link](https://github.com/HKUDS/nanobot/pull/3992)

- **PR #4050 – Manual memory mode**
  Created 2026‑05‑29, updated 2026‑05‑30. Relates to #3885 which is already closed; may need alignment.
  [Link](https://github.com/HKUDS/nanobot/pull/4050)

- **Issue #4107 – bwrap additional bind mounts**
  Created 2026‑05‑30, no comments. Enhancement request with no assignee.
  [Link](https://github.com/HKUDS/nanobot/issues/4107)

These items may require maintainer review to avoid prolonged stagnation, especially given their scope and community interest.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-31

## 1. Today's Activity Brief
In the last 24 hours, the project saw 50 issues updated (11 open/active, 39 closed) and 50 PRs updated (18 open, 32 merged/closed). No new releases were published. The bulk of merged work centred on the macOS desktop/Tauri app: five permission-flow handlers (Accessibility, Screen Recording, Microphone, Input Monitoring, Full Disk Access) and five capability handlers (click, type_keys, notify, read_ax, approval) were all merged. The voice conversation pipeline (PCM16 WebSocket frames, energy-based VAD, speech capture + STT) reached closure after weeks of review. Two new RFCs — for routing scheduled tasks through the orchestrator and for a unified output routing model — remain open for maintainer review.

## 2. Releases
No new releases.

## 3. Project Progress — Merged/Closed PRs Today

**Desktop / Tauri**
- PR [#6761](https://github.com/zeroclaw-labs/zeroclaw/pull/6761) — Merged five capability handlers for macOS UI control (click, type_keys, notify, read_ax, approval).
- PR [#6762](https://github.com/zeroclaw-labs/zeroclaw/pull/6762) — Merged macOS Accessibility permission prompt with resume re-check.
- PR [#6763](https://github.com/zeroclaw-labs/zeroclaw/pull/6763) — Merged screen recording permission flow with revocation detection.
- PR [#6764](https://github.com/zeroclaw-labs/zeroclaw/pull/6764) — Merged microphone permission flow with revocation detection.
- PR [#6765](https://github.com/zeroclaw-labs/zeroclaw/pull/6765) — Merged input monitoring permission flow.
- PR [#6766](https://github.com/zeroclaw-labs/zeroclaw/pull/6766) — Merged full disk access permission flow.
- PR [#6767](https://github.com/zeroclaw-labs/zeroclaw/pull/6767) — Merged Local Network permission revocation detection.

**Voice Conversation Pipeline**
- PR [#5974](https://github.com/zeroclaw-labs/zeroclaw/pull/5974) — Merged WebSocket binary audio frames (PCM16) with validation and VAD integration.
- PR [#5976](https://github.com/zeroclaw-labs/zeroclaw/pull/5976) — Merged energy-based Voice Activity Detector.
- PR [#5978](https://github.com/zeroclaw-labs/zeroclaw/pull/5978) — Merged speech capture buffer and STT dispatch.

**Self-test / Diagnostics**
- PR [#6961](https://github.com/zeroclaw-labs/zeroclaw/pull/6961) — Merged doctor warning when `gateway.web_dist_dir` uses tilde or `$VAR` expansion.

**Notable Open PRs**
- PR [#7026](https://github.com/zeroclaw-labs/zeroclaw/pull/7026) (open, size L) — Proposes removing the entire Tauri desktop app (`apps/tauri/`, 94 files) because it “stalled out and does not have the same impact or usage as the web dashboard”.
- PR [#7023](https://github.com/zeroclaw-labs/zeroclaw/pull/7023) (open) — Implements versioned documentation deployment and a version selector.
- PR [#6956](https://github.com/zeroclaw-labs/zeroclaw/pull/6956) (open) — Removes marketplace sync workflow (Coolify, Dokploy, EasyPanel templates).

## 4. Community Hot Topics

**Most Commented Issues** (top 3; all ≤4 comments, indicating low-thread activity)
- [#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269) (4 comments) — Context compressor drops `reasoning_content` for DeepSeek provider. Now closed.
- [#5649](https://github.com/zeroclaw-labs/zeroclaw/issues/5649) (3 comments) — Clipboard paste & drag-and-drop image support in Web Chat UI. Now closed after implementation.
- [#6499](https://github.com/zeroclaw-labs/zeroclaw/issues/6499) (3 comments) — macOS UI control capability handlers (referenced by now-merged PRs). Now closed.

**RFCs with Maintainer Attention Needed**
- [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) (2 comments, `needs-maintainer-review`) — Proposes routing scheduled tasks through the orchestrator pipeline to fix a cluster of bugs (#6037, #6105, #6648, #6632, #6686).
- [#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969) (2 comments) — RFC for unified output routing with per-peer modality preferences and an agent `send_via` tool. Author migrated from Letta and describes concrete broken workflows.

**PRs with Discussion**
The voice pipeline PRs (#5974, #5976, #5978) carried `needs-author-action` labels for several weeks before being closed today, suggesting sustained community and maintainer engagement.

## 5. Bugs & Stability

**High Severity (closed)**
- [#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269) (S2 - degraded behavior) — Context compressor drops `reasoning_content` from compressed assistant messages, affecting DeepSeek provider. Closed; fix assumed merged.

**Medium Severity (closed)**
- [#6349](https://github.com/zeroclaw-labs/zeroclaw/issues/6349) — Desktop menu-bar chat surfaces every `tool_call` inline (parity with web bug #6348). Closed.
- [#6331](https://github.com/zeroclaw-labs/zeroclaw/issues/6331) — Menu-bar app launch-at-login and `LSUIElement` behavior not verified. Closed.
- [#6340](https://github.com/zeroclaw-labs/zeroclaw/issues/6340) — Crash reporting / panic capture for desktop app. Closed.

**Open Bug Fix PRs** (from today's PR list)
- [#7008](https://github.com/zeroclaw-labs/zeroclaw/pull/7008) (open) — Fix WhatsApp replies for LID JIDs and empty sanitization.
- [#7002](https://github.com/zeroclaw-labs/zeroclaw/pull/7002) (open) — Bind TTS manager to the channel-owning agent (Telegram/WhatsApp).
- [#7000](https://github.com/zeroclaw-labs/zeroclaw/pull/7000) (open) — Wire `transcription_provider` alias for inbound voice on Telegram.

## 6. Feature Request Clusters

**Desktop/Tauri Polish (now largely shipped)**
A dense cluster of 20+ issues from the `@theonlyhennygod` author, all filed May 3–7 and closed today. These cover menu-bar chat parity (tool approval, cancel, drag-and-drop images, token display, sessions list, settings editor, global shortcut), tray menu items, universal binary, accessibility audits, auto-updating, and per-feature TCC permission prompts. The merged PRs listed in Section 3 implement most of these.

**Voice Conversation with Barge-in**
Issue [#5896](https://github.com/zeroclaw-labs/zeroclaw/issues/5896) was the main feature request; the three voice pipeline PRs (#5974, #5976, #5978) were merged today, signalling delivery of the core infrastructure.

**Scheduled Tasks Pipeline**
Open RFC [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) calls for routing cron jobs through the orchestrator to fix a class of bugs. No PR yet.

**Unified Output Routing**
Open RFC [#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969) requests per-peer modality preferences and an agent `send_via` tool. No PR yet.

**Recovery of Lost Commits**
Issue [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) (open since Apr 24) tracks 153 commits lost in a bulk revert and aims for recovery. No PR linked.

## 7. User Feedback Summary

- **DeepSeek Provider Pain** – Issue #6269 reports that reasoning content is silently dropped during context compression, degrading behaviour for DeepSeek users. Now fixed.
- **Web Chat Image Input** – User @nerdCopter requested clipboard paste and drag-and-drop images; the feature was implemented and closed (#5649).
- **Voice-First Use Case** – @hurtdidit (from tavina.ai) advocated for phone-call-like voice conversation with barge-in. The voice pipeline PRs merged today deliver the foundation.
- **Missing Output Control** – @mov-xound-glitch, migrating from Letta, reports that they cannot control where/how replies are delivered (morning brief vs. email summary). This motivated RFC #6969.
- **Scheduled Task Bugs** – @mov-xound-glitch also reported a cluster of bugs caused by the cron scheduler bypassing the orchestrator, leading to RFC #6954.
- **Desktop Parity Desired** – @theonlyhennygod filed over 20 features for the Tauri desktop app, all of which were closed/merged today.
- **Commit History Management** – @Audacity88 raised an audit issue (#6074) about 153 commits lost in a bulk revert, indicating frustration with commit hygiene.

## 8. Backlog Watch

| Item | Summary | Days Open | Maintainer Action Needed |
|------|---------|-----------|--------------------------|
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | Audit 153 commits lost in bulk revert c3ff635 for recovery | 37 | Review and assign recovery strategy |
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) | RFC: Route scheduled tasks through orchestrator pipeline | 5 | Needs maintainer review (`needs-maintainer-review` label) |
| [#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969) | RFC: Unified output routing model (per-peer modality + send_via) | 4 | Needs maintainer response; no official maintainer comment yet |
| [#7008](https://github.com/zeroclaw-labs/zeroclaw/pull/7008) | Fix WhatsApp LID JID delivery (open PR) | 2 | Needs review |
| [#7002](https://github.com/zeroclaw-labs/zeroclaw/pull/7002) | Fix TTS manager binding to channel-owning agent (open PR) | 2 | Needs review |
| [#7000](https://github.com/zeroclaw-labs/zeroclaw/pull/7000) | Wire transcription provider alias for Telegram voice (open PR) | 2 | Needs review |
| [#7026](https://github.com/zeroclaw-labs/zeroclaw/pull/7026) | Remove Tauri desktop app entirely (open PR, size L) | 1 | Needs decision from maintainers – significant direction change |
| [#7023](https://github.com/zeroclaw-labs/zeroclaw/pull/7023) | Versioned documentation deployment (open PR) | 1 | Needs review |

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-31

## 1. Today's Activity Brief
In the last 24 hours, the PicoClaw repository saw updates to 7 issues (3 open, 4 closed) and 11 pull requests (3 merged/closed, 8 open). A new nightly build `v0.2.9-nightly.20260531` was published. Maintainers merged three features (web image paste, Azure Identity for Azure OpenAI, and Bangla i18n) and closed four older bugs. Several open PRs target important fixes for the Codex provider, workspace guard, and Makefile build issues. The community remains active with multiple bug reports related to the v0.2.9 upgrade and a feature request cluster around tool execution and channel stability.

## 2. Releases
**Nightly Build `v0.2.9-nightly.20260531.1ce353ba`**
- This is an automated, potentially unstable build based on the `main` branch.
- Full changelog: [v0.2.9…main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)
- No stable version was released; users on v0.2.9 should be aware that nightly builds may introduce regressions.

## 3. Project Progress
**Merged/Closed PRs today:**
- [#2969](https://github.com/sipeed/picoclaw/pull/2969) — **feat(web): add chat image paste and drag-and-drop upload** (merged). Normalizes extension-only files and handles mixed clipboard payloads.
- [#2971](https://github.com/sipeed/picoclaw/pull/2971) — **feat(provider): Add optional Azure Identity support for Azure OpenAI provider** (merged). Gated behind `azidentity` build tag; enables auth without secret strings.
- [#2974](https://github.com/sipeed/picoclaw/pull/2974) — **feat(i18n): Add Bangla support `bn-in`** (merged). New locale for the web UI.

**Other closed items:** Issues [#2742](https://github.com/sipeed/picoclaw/issues/2742) (gateway starts with no channels) and [#2880](https://github.com/sipeed/picoclaw/issues/2880) (Android permission denied) were marked closed, though no explicit fix PR was referenced in their summaries.

**Open PRs that advanced today** (updated, no merges):
- [#2856](https://github.com/sipeed/picoclaw/pull/2856) (media attachments & Telegram rich delivery)
- [#2838](https://github.com/sipeed/picoclaw/pull/2838) (frontmatter tool policy filters)
- [#2967](https://github.com/sipeed/picoclaw/pull/2967) (fix Codex streamed output)
- [#2976](https://github.com/sipeed/picoclaw/pull/2976) (fix Makefile space handling in Go version check)
- [#2965](https://github.com/sipeed/picoclaw/pull/2965) (fix workspace guard misreading scheme-less URLs)
- [#2975](https://github.com/sipeed/picoclaw/pull/2975) (feat Telegram reply-as-mention in group chats)
- Two dependency bumps: [#2962](https://github.com/sipeed/picoclaw/pull/2962) (Anthropic SDK 1.26.0→1.46.0), [#2963](https://github.com/sipeed/picoclaw/pull/2963) (Lark Suite SDK 3.7.5→3.9.3).

## 4. Community Hot Topics
The most active issues and PRs by comment count and reactions:

- **Bug #2742** (closed, 6 comments) – “gateway starts with no channels in v0.2.8”. Although closed, it received the highest number of comments, indicating upstream concerns about channel initialization in the previous stable release.
- **Bug #2972** (open, 2 comments) – “Web UI message chaos after upgrade to v0.2.9”. Users report history leaking into new sessions. No fix PR yet.
- **Feature request #2952** (open, 2 comments) – “好久没发新版本了” (“Long time no new release”). The user describes three distinct issues: `exec` tool `actions:run` default behavior, QQ channel restart loop, and a request for better model provider UI (show saved keys, dropdown selection, API test connection).
- **Bug #2968** (open, 1 comment, 1👍) – “/context always show Compress at: 76800 tokens”. User reports the command always returns the same token count regardless of compression.

Other notable items: The Bangla i18n request [#2973](https://github.com/sipeed/picoclaw/issues/2973) and Azure Identity request [#2970](https://github.com/sipeed/picoclaw/issues/2970) were both quickly fulfilled by PRs merged today, showing responsive maintainers for well-defined features.

## 5. Bugs & Stability
**High severity (no known fix PR yet):**
- [#2972](https://github.com/sipeed/picoclaw/issues/2972) – Web UI message chaos after upgrading to v0.2.9. Every new session attaches old message history. Affects MiniMax provider on FreeBSD.
- [#2968](https://github.com/sipeed/picoclaw/issues/2968) – `/context` command always shows “Compress at: 76800 tokens”, never changing even after compression. Raises concerns about context management in v0.2.9.

**Medium severity (fix PRs open):**
- [#2967](https://github.com/sipeed/picoclaw/pull/2967) – Fix for Codex OAuth empty responses when streaming `output_text.delta` but final `response.output` is null. Open PR by @miruchigawa.
- [#2965](https://github.com/sipeed/picoclaw/pull/2965) – Fix `exec` tool’s workspace guard misinterpreting scheme-less URLs (e.g., `curl wttr.in/Beijing?T`). Open PR by @maxmilian.
- [#2976](https://github.com/sipeed/picoclaw/pull/2976) – Fix Makefile failing to compile when `go env GOVERSION` returns spaces. Open PR by @opsec-ai.

**Lower severity (closed today):**
- [#2742](https://github.com/sipeed/picoclaw/issues/2742) – Gateway starts with no channels in v0.2.8 (closed, no linked fix).
- [#2880](https://github.com/sipeed/picoclaw/issues/2880) – Android version 0.1.3 fails to create `Downloads/picoclaw` directory despite permissions (closed, likely fixed in later versions).

Additionally, issue #2952 (the Chinese feature request) reports two bugs under the same thread: `exec` tool often omits `actions:run` on first call, causing extra commands to run; and QQ channel restart loops unless context is cleared.

## 6. Feature Request Clusters
Feature requests today fall into several clusters:

- **i18n expansion**: [#2973](https://github.com/sipeed/picoclaw/issues/2973) (Bangla) → merged as PR #2974. Also note earlier PR #2932 as reference.
- **Azure Identity auth**: [#2970](https://github.com/sipeed/picoclaw/issues/2970) → merged as PR #2971, gated behind `azidentity` build tag.
- **Web UI improvements**: [#2969](https://github.com/sipeed/picoclaw/pull/2969) (image paste/drag-and-drop) merged. Also #2952 includes a request for a better model provider selection UI (dropdown, key reuse, API test).
- **Telegram channel enhancements**: [#2975](https://github.com/sipeed/picoclaw/pull/2975) (reply-as-mention in group chats) open; [#2856](https://github.com/sipeed/picoclaw/pull/2856) (media attachments and rich delivery) open and stale.
- **Agent tool policy & workspace restrictions**: [#2838](https://github.com/sipeed/picoclaw/pull/2838) (frontmatter tool allow/deny) open and stale. [#2965](https://github.com/sipeed/picoclaw/pull/2965) (workspace guard fix) addresses a related reliability issue.

No new clusters beyond these were observed today.

## 7. User Feedback Summary
Users express clear pain points around the v0.2.9 upgrade:

- **Web UI history bleed** (#2972) undermines session isolation and is a significant regression for anyone using the Web channel.
- **Context compression display** (#2968) seems broken, eroding trust in token management features.

Older bugs (v0.2.8 gateway channels, Android permissions) were flagged but have now been closed, though the lack of linked fix commits leaves some uncertainty about root cause.

In #2952, a user expresses frustration over lack of a new stable release (“好久没发新版本了”) and lists specific production usability issues with the `exec` tool and QQ channel stability. The user also requests UI improvements for model provider management.

Overall satisfaction appears mixed: rapid closure of i18n and Azure Identity requests shows responsiveness, but stability regressions in v0.2.9 are causing frustration. The nightly build cadence may be insufficient for users wanting a reliable release.

## 8. Backlog Watch
Issues and PRs that have been open for a while or lack maintainer response:

- **PR #2856** (media attachments / Telegram rich delivery) – last updated 2026-05-30, but created 2026-05-11. No recent maintainer activity despite being a significant feature.
- **PR #2838** (frontmatter tool policy filters) – created 2026-05-09, last updated 2026-05-30. Marked stale. No maintainer comments.
- **Issue #2952** (Chinese feature request / bug report) – open since 2026-05-27, no maintainer reply visible. Includes multiple actionable items (exec tool, QQ restart, UI).
- **Bug #2972** – high severity, open since 2026-05-30, no fix PR yet and only one comment from user.
- **Bug #2968** – open since 2026-05-30, similarly no response.
- **PR #2967** (Codex fix) – open since 2026-05-30, no maintainer review yet.
- **PR #2976** (Makefile fix) – open since 2026-05-30, trivial but blocking compilation on some Go versions.

Maintainers may need to triage the two new v0.2.9 regressions urgently and provide feedback on the stale PRs and the multifaceted issue #2952.

</details>