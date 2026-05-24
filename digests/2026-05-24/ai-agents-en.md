# OpenClaw Ecosystem Digest 2026-05-24

> Issues: 500 | PRs: 500 | Projects covered: 4 | Generated: 2026-05-24 02:29 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-05-24

## 1. Today’s Activity Brief
Over the past 24 hours, 500 issues were updated (475 open, 25 closed) and 500 pull requests were updated (219 open, 281 merged/closed). Two new releases were published: v2026.5.22 (stable) and v2026.5.22-beta.1, both containing performance improvements and documentation clarifications. The community remains highly active, with top issues generating over 100 comments and significant engagement around security, session stability, and feature requests.

## 2. Releases
Two new releases were cut:

- **v2026.5.22**: Gateway performance improvements — reuse process-stable channel catalog reads, avoid repeated bundled-channel boundary checks, and rotate gateway watch CPU profiles to prevent unbounded artifact accumulation. Also reuses immutable plugin metadata snapshots across startup.
- **v2026.5.22-beta.1**: Documentation updates only — clarifies README onboarding, Gateway startup paths, WhatsApp QR/408 recovery, cron output language prompts, skill advanced features, Gateway upstream 403 troubleshooting, and plugin fallback override guidance. Thanks to @deepujain, @Zacxxx, @Jah-yee, @neyric, @usimic.

No breaking changes or migration notes were mentioned.

## 3. Project Progress
281 PRs were merged or closed in the past 24 hours. Notable merged/closed PRs from the top 30 list include:

- **#85898** – Added regression test for heartbeat dispatch with `target: "none"`.
- **#44086** – Fix for assistant message content `null` instead of empty string, breaking OpenAI-compatible providers.
- **#43982** – Gateway: strips inline image payloads from chat history to avoid massive base64 blobs.
- **#43912** – CLI: prefers bundled installs for scoped plugin specs, preventing duplicate global copies.
- **#43895** – `status` command: avoids misleading default model when agent defaults vary across agents.
- **#43832** – Cron: drains in-flight operations on hot reload to prevent state overwrite.
- **#43808** – Cron: keeps failure destination for threaded delivery (Telegram topic-specific).
- **#43467** – Fix for cosine similarity norm calculation when vectors have different lengths (memory/indexing).
- **#43416** – UI: add copy button for assistant messages.
- **#72748** – Memory: complete recursive memory search follow-up (closes #34400).

Several other PRs remain open and are in maintainer review or awaiting proof.

## 4. Community Hot Topics
The most active conversations reflect deep user engagement with OpenClaw’s core architecture:

- **#75** (105 comments, 77 👍) – Request for Linux/Windows ClawdBot apps. Persistent demand for desktop coverage beyond macOS/iOS/Android. Still open after 5 months.
- **#25592** (26 comments) – Text between tool calls leaks to messaging channels. A significant UX issue where internal agent processing becomes visible to end users. Labelled P1, security impact.
- **#9443** (25 comments, 2 👍) – Request for prebuilt Android APK releases. Filed by an AI assistant on behalf of a user; highlights friction for non-developer Android users.
- **#22676** (17 comments) – Signal daemon race condition on SIGUSR1 restart, causing orphaned processes and send failures. P1, message-loss and crash-loop impacts.
- **#22438** (16 comments) – Feature proposal for tiered bootstrap file loading to save LLM tokens. Community discussion around context window management.
- **#32473** (15 comments, 4 👍) – Control UI requires HTTPS/localhost secure context, blocking VPS users. Regression, security impact. Fix still in discussion.

Among PRs, **#85415** (image setup/request timeout split), **#85889** (clamp max_completion_tokens for proxy endpoints), and **#84966** (CLI backend alias routing fix) are under active review.

## 5. Bugs & Stability
Several high-severity bugs were reported or remain active:

- **P1** `#25592` – Text between tool leaks. No linked fix PR yet.
- **P1** `#22676` – Signal daemon race condition. No linked fix PR yet.
- **P1** `#32296` – Agent replies to previous message (session context confusion). No linked fix PR.
- **P1** `#31583` – `exec` tool does not inherit skill-specific environment variables (regression). No linked fix PR.
- **P1** `#39476` – A2A `sessions_send` causes duplicate messages. Fix PR `#85860` (treat aborted subagent runs as terminal) may relate.
- **P1** `#40001` – Write tool lacks append mode; isolated cron sessions destroy shared files. No linked fix PR.
- **P1** `#40540` – `openclaw update` fails with EBUSY on Windows. No linked fix PR.
- **P1** `#38327` – “Cannot convert undefined or null to object” with google-vertex/gemini-3.1-pro-preview in 2026.3.2 (regression). No fix PR yet.
- **P1** `#40611` – Heartbeat drift fix causes aggressive retry that blocks Telegram. No linked fix PR.
- **P1** `#63819` (closed) – Session stuck in “running” status persisted in v2026.4.9. No details on resolution.

Security-related bugs include `#29736` (exec approvals path ignores active state root), `#32473` (HTTPS requirement), `#41201` (avatar endpoint regression), and `#41545` (WebSocket URL edit clears token). Several have clawsweeper labels but no merge-ready fixes.

## 6. Feature Request Clusters
The following thematic clusters emerge from today’s issues and PRs:

- **Security & Secret Management**: `#10659` (masked secrets – prevent agent from seeing raw API keys), `#13610` (native secrets management integration – AWS Secrets Manager, Vault), `#7722` (filesystem sandboxing via `tools.fileAccess`), `#6615` (denylist for exec-approvals), `#39979` (path-scoped RWX permissions). No PRs yet.
- **Multi-Agent & Collaboration**: `#35203` (capability profiling, shared blackboard, layered memory, cost governance – RFC style), `#27445` (announceTarget for sub-agent routing), `#22358` (post-subagent completion hook), `#41366` (durable natural-language rule learning).
- **Memory & Context**: `#34400` (recursive memory subdirectory search – now closed by PR #72748), `#29387` (bootstrap files in agentDir silently ignored), `#22438` (tiered bootstrap loading).
- **Channel & UI Enhancements**: `#12602` (Slack Block Kit support), `#20786` (Telegram Business Bot), `#33413` (Slack tool-level progress), `#42276` (reasoning stream), `#80380` (update default model to gemini-3.1-flash-lite).
- **Cron & Automation**: `#18160` (direct exec mode for cron jobs), `#40001` (append mode for write tool).
- **Cost Control**: `#42475` (per-agent cost budget enforcement at gateway level).

## 7. User Feedback Summary
Real user pain points visible in today’s data:

- **LLM token waste** — Users want finer control over what context is loaded (`#22438`, `#29387`).
- **Security anxiety** — Several users report leaked secrets, missing sandboxing, and inability to restrict file/exec access (`#10659`, `#7722`, `#6615`, `#39979`).
- **Desktop platform gap** — Strong desire for native Linux/Windows apps (`#75`). Android prebuilt APK also requested (`#9443`).
- **Session reliability** — Frustration with session context confusion (`#32296`), cron job failures (`#18160`), and orphaned sub-agent announce (`#27445`).
- **Operational friction** — Windows update failures (`#40540`), missing backup/restore (`#13616`), no onboard memory embedding setup wizard (`#16670`).
- **Positive signals** — Users thank contributors in release notes and on issues; the community actively submits detailed bug reports with steps to reproduce.

## 8. Backlog Watch
Several important issues and PRs appear to be waiting for maintainer attention:

- **#75** (Linux/Windows apps) – 105 comments, 5 months old. Tagged with multiple `clawsweeper` labels but no product decision.
- **#25592** (text leak between tool calls) – 26 comments, 3 months old, P1 security impact. No linked fix PR.
- **#22676** (Signal daemon race) – 17 comments, 3 months old, P1. No linked fix PR.
- **#9443** (prebuilt Android APK) – 25 comments, 3.5 months old. No maintainer response visible.
- **#10659** (masked secrets) – 12 comments, 3.5 months old. Awaiting maintainer review.
- **#10687** (dynamic model discovery) – 9 comments, 3.5 months old. Awaiting product decision.
- **#7722** (filesystem sandboxing) – 7 comments, 3.5 months old. Needs security review.
- **PR #85341** (internalize agent runtime) – Huge refactor with many extensions touched. Still needs proof and maintainer review.
- **PR #85643** (explicit default model pins) – Large PR, proof supplied but status “needs proof”.

These items represent significant community demand or blocking issues that have not yet received resolution.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-05-24

## 1. Daily Cross-Project Overview

Across the four tracked projects, daily activity ranged from high (OpenClaw with 500 issues and 500 PRs updated) to moderate (ZeroClaw at 50 each) and low (NanoBot and PicoClaw at single-digit counts). OpenClaw published two new releases (stable and beta), while PicoClaw shipped a nightly build; NanoBot and ZeroClaw had no new releases. OpenClaw’s community generated the most discussion across P1 bugs and feature requests, while NanoBot closed long-standing memory consolidation bugs and ZeroClaw focused on channel reliability fixes. PicoClaw resolved several vision-pipeline and budget-enforcement defects.

## 2. Activity Comparison

| Project    | Issues Updated (Open/Closed) | PRs Updated (Open/Merged) | Releases Published | Notes |
|------------|------------------------------|----------------------------|--------------------|-------|
| OpenClaw   | 500 (475 open, 25 closed)    | 500 (219 open, 281 merged) | 2 (stable + beta)  | Highest volume; 100+ comments on top issues; multiple P1 bugs |
| NanoBot    | 7 (4 open, 3 closed)         | 10 (6 open, 4 merged)      | None               | Merged Dream consolidation fix and exec timeout uncap |
| ZeroClaw   | 50 (42 open, 8 closed)       | 50 (42 open, 8 merged)     | None               | Matrix leak fix; allowlist migration PR series open |
| PicoClaw   | 6 (2 open, 4 closed)         | 9 (3 open, 6 merged)       | 1 nightly          | Fixed Discord vision, Seahorse budget, interim reply suppression |

## 3. OpenClaw Compared With Peers

- **Activity Volume**: OpenClaw’s 500 issues/PRs dwarfs the other three combined (~63 issues, ~69 PRs). This reflects its larger contributor base and broader surface area, though daily counts may include automated labeling or batch updates.
- **Technical Focus**: OpenClaw covers a wider range—gateway performance, security sandboxing, multi-agent orchestration, UI copy buttons, and cost control. Peers are more narrowly focused: NanoBot on memory and provider coupling, ZeroClaw on channel reliability and Rust-based architecture, PicoClaw on vision pipelines and embedded targets.
- **Community Surface Area**: OpenClaw has the most heavily discussed issues (105 comments on Linux/Windows app request, 26 on tool-leak bug). ZeroClaw has moderate discussion (5–6 comments per hot issue). NanoBot and PicoClaw have 1–3 comment threads. OpenClaw’s backlog includes many feature requests with no maintainer response; peers show faster closure on reported bugs.

## 4. Shared Technical Focus Areas

Multiple projects address similar concerns in today’s data:

- **Memory and Context Management**:
  - OpenClaw: issues on tiered bootstrap loading (#22438), silent bootstrap failures (#29387), and recursive memory search (closed via #72748).
  - NanoBot: fixed Dream consolidation (MECE structuring, deduplication) in #3952; new concerns about real-time learning (#3973).
  - ZeroClaw: RFC for `MemoryStrategy` trait decoupling (#6850).
  - PicoClaw: fixed Seahorse FreshTail budget bypass (#2895) where last messages could overflow context window.

- **Channel and UI Enhancements**:
  - OpenClaw: requests for Slack Block Kit (#12602), Telegram Business Bot (#20786), UI copy button (#43416, merged).
  - NanoBot: new PR for `/skill` slash command (#3968), request for WhatsApp bot pause after human reply (#2837).
  - ZeroClaw: missing `show_tool_calls` in channel schema v3 (#6856), TUI integration PR (#6848).
  - PicoClaw: email channel request (#2421, closed but unimplemented), code block line numbers PR (#2933).

- **Developer Experience and Documentation**:
  - OpenClaw: documentation improvements in beta release for onboarding, recovery, troubleshooting.
  - NanoBot: fixed transcription config transparency (#3637).
  - ZeroClaw: corrected stale `RUST_LOG` documentation (#6691).
  - PicoClaw: upgrade tutorial requested (#2834, closed without action); Czech locale PR (#2932).

- **Bug Fixes with User Impact**:
  - OpenClaw: tool-leak bug (#25592), Signal daemon race (#22676), session context confusion (#32296).
  - NanoBot: exec timeout cap fixed (#3967), GPT duplicate item error (#3633) still open.
  - ZeroClaw: dashboard JSON parse break (#6862, accepted).
  - PicoClaw: Discord vision pipeline fixed (#2931), interim reply suppression fixed (#2835).

## 5. Differentiation Analysis

| Aspect              | OpenClaw                                  | NanoBot                                    | ZeroClaw                                 | PicoClaw                                   |
|---------------------|-------------------------------------------|--------------------------------------------|------------------------------------------|--------------------------------------------|
| **Language/Stack**  | Likely JavaScript/Node (CLI, gateway)     | TypeScript/Node (providers, skills)        | Rust (channels, gateway SPA, RUST_LOG) | Go (golang.org/x/net, helpers.go)          |
| **Target Users**    | General agent builders, channel integrators | Researchers, memory-focused tinkerers     | Reliability-focused ops, channel devs   | Embedded/edge device users (SiPEED)        |
| **Key Feature Area** | Broad feature set: multi-agent, security, cron | Long-term memory (Dream system), provider extensibility | Channel robustness, allowlist migration, protocol extensions | Vision pipelines, budget enforcement, nightly builds |
| **Community Maturity** | Large, slower to resolve P1 bugs (many without fix PR) | Small, responsive (bugs fixed within weeks) | Medium, steady PR activity with maintainer acceptance | Small, active contributor PRs but limited maintainer response on stale issues |

OpenClaw positions as the “core reference” ecosystem with the widest feature coverage. NanoBot emphasizes memory innovation and research (HKUDS). ZeroClaw focuses on reliable multi-channel operation in a Rust codebase. PicoClaw targets resource-constrained or device-specific deployments with nightly releases.

## 6. Community Activity Tiers

Based solely on today’s issue/PR counts and releases:

- **High**: OpenClaw (500 issues, 500 PRs, 2 releases)
- **Moderate**: ZeroClaw (50 issues, 50 PRs, no release)
- **Low**: NanoBot (7 issues, 10 PRs, no release) and PicoClaw (6 issues, 9 PRs, 1 nightly release)

OpenClaw’s volume may reflect its larger ecosystem size but also includes automated activity (e.g., “500 issues updated” could include bot-labeled items). Peer counts are more indicative of manual community engagement.

## 7. Evidence-Backed Observations

1. **Memory management is the most cross-cutting pain point today.** OpenClaw has multiple open issues and a resolved PR (recursive search); NanoBot closed its Dream consolidation problem but new concerns about real-time learning emerged; ZeroClaw has a formal RFC for memory strategy decoupling; PicoClaw fixed a budget overflow in Seahorse. No single solution exists across projects.

2. **Channel and UI feature requests are uniformly distributed.** Every project has at least one active issue or PR improving channel-specific behavior (Slack, Telegram, WhatsApp, email, TUI, code block display). This suggests that end-user interface parity remains a high community demand regardless of project scope.

3. **Security/sandboxing concerns are concentrated in OpenClaw.** OpenClaw has multiple P1 bugs around tool-leak, exec environment variables, and secret masking that have no linked fix PR. NanoBot, ZeroClaw, and PicoClaw show no equivalent security-focused issues or features in today’s data, indicating differing threat models or maturity.

4. **Bug fix velocity varies significantly.** NanoBot closed two long-standing bugs (Dream memory, exec timeout) within the same day their fixes were merged. PicoClaw merged three fixes (Discord vision, Seahorse budget, interim reply) in one day. OpenClaw and ZeroClaw have many P1 bugs that remain open without a fix PR (e.g., OpenClaw #25592, #22676; ZeroClaw #6558). This may reflect differences in maintainer bandwidth, testing requirements, or fix complexity.

5. **Documentation and localization are a recurring theme.** OpenClaw dedicated an entire beta release to documentation updates. ZeroClaw fixed stale docs. PicoClaw received a full Czech locale PR. NanoBot improved provider configuration documentation. This indicates that projects recognize onboarding and transparency as key user friction points.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-24

## 1. Today's Activity Brief
In the past 24 hours, 7 issues were updated (3 closed, 4 open) and 10 pull requests were updated (4 merged/closed, 6 open). No new releases were published. Two notable PRs merged a fix for the exec timeout cap and transcription API base normalization, and an enhancement to the Dream memory consolidation system. Several new feature PRs arrived—adding a `/skill` slash command, per-subagent sampling temperature, Zhipu image generation, Azure Speech transcription, and extended OpenAI provider configuration.

## 2. Releases
None. No new versions were tagged or published.

## 3. Project Progress
**Merged/closed PRs today:**
- **#3952** — `feat(memory): enhance Dream + Consolidator prompts for MECE long-term memory` (by [@chengyongru](https://github.com/chengyongru)) — Improves Dream deduplication and MECE structuring; closes #3047 and related memory bloat issues. ([PR](https://github.com/HKUDS/nanobot/pull/3952))
- **#3967** — `fix: uncap exec config timeout and normalize transcription apiBase` (by [@04cb](https://github.com/04cb)) — Decouples `tools.exec.timeout` from the per-call cap (removes 600s limit) and fixes Groq transcription API base handling. Closes #3595 and #3637. ([PR](https://github.com/HKUDS/nanobot/pull/3967))
- **#3972** — `docs: use xiaomi_mimo provider for MiMo token plan` (by [@honjiaxuan](https://github.com/honjiaxuan)) — Replaces custom provider docs with built-in `xiaomi_mimo` provider instructions. ([PR](https://github.com/HKUDS/nanobot/pull/3972))
- **#3971** — `feat: Add Zhipu (智谱) image generation provider` (by [@JiajunBernoulli](https://github.com/JiajunBernoulli)) — Adds image generation support for the Zhipu platform. ([PR](https://github.com/HKUDS/nanobot/pull/3971))

**Also resolved today:**
- Issues #3637 (transparency of transcription config) and #3595 (exec timeout cap) were closed via #3967.
- Issue #3047 (Dream consolidation problems) was closed via #3952.

## 4. Community Hot Topics
Most active discussions (by comments or reactions) in the last 24h:

- **#2182** — [OPEN] `[feature request] Implement hooks feature` — 2 comments, 2 👍. Requesting lifecycle hook support similar to Claude Code. Still open since March 17, with recent activity. ([Issue](https://github.com/HKUDS/nanobot/issues/2182))
- **#3637** — [CLOSED] `Transcription Provider Configuration Is Not Transparent Enough` — 3 comments. User detailed misleading `apiBase` handling for Groq; now fixed by #3967. ([Issue](https://github.com/HKUDS/nanobot/issues/3637))
- **#3047** — [CLOSED] `Issues with Dream memory consolidation` — 2 comments. Long-standing context overflow and duplication problems; resolved by #3952. ([Issue](https://github.com/HKUDS/nanobot/issues/3047))
- **#3973** — [OPEN] `Dream System: Hunger Problem & Lack of Real-time Learning` — New issue filed today with 1 comment, raising two related Dream system flaws. ([Issue](https://github.com/HKUDS/nanobot/issues/3973))
- **#3865** — [OPEN] `[question] feat(agent): BM25-lite skill router — reduce system prompt by ~60%` — Active PR with no comments yet but notable for potential major system prompt reduction. ([PR](https://github.com/HKUDS/nanobot/pull/3865))
- **#3974** — [OPEN] `feat(providers): add OpenAI API type and extra body configuration` — New PR adding `apiType` (auto/chat_completions/responses) and `extraBody` fields for OpenAI. ([PR](https://github.com/HKUDS/nanobot/pull/3974))

Underlying needs: users want more transparent provider configuration, better long-term memory (Dream deduplication and real-time learning), and automation hooks for extensibility.

## 5. Bugs & Stability
**Bug #3633** — `Duplicate item found with id error when using GPT (Codex)` — OPEN. User reports unrecoverable error with GPT-5.5 model. No fix PR yet. Severity: high (breaks agent loop). ([Issue](https://github.com/HKUDS/nanobot/issues/3633))

**Bug #3637** (transcription provider config) — CLOSED, fixed in #3967. Low severity but caused user confusion.

**Bug #3595** (exec timeout capped at 600s) — CLOSED, fixed in #3967. Medium severity for long-running tasks.

**New potential bug/regression:** Issue #3973 describes the Dream system's "hunger" and lack of real-time learning, indicating structural flaws. No fix PR open yet.

## 6. Feature Request Clusters
Several feature areas are seeing active development:

| Feature Cluster | Related Issues/PRs | Status |
|---|---|---|
| **Hooks / Lifecycle Events** | #2182 (issue) | Open, 2 👍 |
| **Dream / Long-term Memory** | #3047 (closed), #3952 (merged), #3973 (new) | Resolution merged; new concerns filed |
| **Slash Commands** | #3959 (implied), #3968 (/skill PR) | Open PR |
| **Per-Agent Sampling Temperature** | #3969 (issue), #3975 (spawn temperature PR) | Open PR |
| **Skill Routing** | #3865 (BM25-lite PR) | Open PR |
| **Speech / Transcription** | #3970 (Azure Speech PR), #3637 (Groq fix) | New Azure PR open; Groq fix merged |
| **Provider Config Extensions** | #3974 (OpenAI apiType), #3972 (Xiaomi MiMo docs) | Both open/merged |
| **WhatsApp Human Intervention** | #2837 (pause after human reply) | Open since April 6 |
| **Heartbeat Decoupling** | #1443 (reasoning vs notification) | Open since March 2 |
| **Image Generation** | #3971 (Zhipu) | Merged |

No predictions about what will ship next.

## 7. User Feedback Summary
- **Transparency painpoint**: User [@sandr1x](https://github.com/sandr1x) (issue #3637) reported that Groq transcription config is not transparent—using `apiBase` from chat context incorrectly. Resolved in #3967.
- **Memory bloat & context overflow**: User [@MARJORIESHA-pBAD](https://github.com/MARJORIESHA-pBAD) (issue #3047) experienced duplicated memories and token limit exhaustion within Dream windows. Fixed in #3952.
- **Real-time learning gap**: User [@chxuan](https://github.com/chxuan) (issue #3973) argues Dream system needs real-time learning instead of batched 2-hour consolidation.
- **Automation need**: User [@andrader](https://github.com/andrader) (issue #2182) wants hooks for automation, citing Claude Code as reference.
- **Human-over-bot control**: User [@CHM5](https://github.com/CHM5) (issue #2837) requests WhatsApp bot to pause after human replies to avoid interference.

Overall sentiment shows appreciation for recent fixes (exec timeout, transcription) but continued demand for more flexible memory and automation.

## 8. Backlog Watch
Issues and PRs that have been open for an extended period without maintainer response or resolution:

- **#2182** — `[feature request] Implement hooks feature` (since Mar 17, 2 comments, 2 👍) — Low maintainer activity. ([Issue](https://github.com/HKUDS/nanobot/issues/2182))
- **#1443** — `feat: decouple heartbeat reasoning from notification` (since Mar 2, still open PR) — No recent maintainer review. ([PR](https://github.com/HKUDS/nanobot/pull/1443))
- **#2837** — `[WhatsApp] Pause/stop bot replies for 12h after a REAL HUMAN replies` (since Apr 6, 1 comment) — No PR or maintainer response. ([Issue](https://github.com/HKUDS/nanobot/issues/2837))
- **#3633** — `Duplicate item found with id error when using GPT` (since May 5, 1 comment) — No fix in progress despite high severity. ([Issue](https://github.com/HKUDS/nanobot/issues/3633))
- **#3865** — `feat(agent): BM25-lite skill router` (since May 16, no comments) — Needs maintainer review. ([PR](https://github.com/HKUDS/nanobot/pull/3865))

All links above are GitHub URLs. Maintainers may want to prioritize the open GPT bug (#3633) and the long-unanswered hooks request (#2182) given community interest.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-24

## 1. Today's Activity Brief
The repository saw high activity with **50 issues** and **50 pull requests** updated in the last 24 hours. Among issues, 42 remain open and 8 were closed; among PRs, 42 are open and 8 were merged or closed. No new releases were published. Notable closed items include a fix for a Matrix channel memory leak (#6651), corrections to `RUST_LOG` documentation (#6691), and a gettext catalog churn fix (#6694). The most prominent open PR cluster is a massive, coordinated migration of per-channel allowlist predicates to a shared `AllowlistAspect` (PRs #6782–#6800, by @yijunyu), part of a planned ICSE 2027 evaluation.

## 2. Releases
None.

## 3. Project Progress (Merged/Closed PRs and Issues)
Eight issues were closed today. Highlights:
- **#6651** (`[Bug]: matrix channel leaks ~1 MB Pss per /admin/reload`) — closed after a fix for the upstream `matrix-sdk` Arc cycle.
- **#6691** (`[Bug]: RUST_LOG docs use stale zeroclaw target filters`) — closed; documentation updated.
- **#6694** (`[Bug]: cargo mdbook sync creates broad gettext catalog churn`) — closed; tooling improvement.
- **#6208** (`[Feature]: Make the blog more accessible`) — closed; RSS/sitemap improvements shipped.
- **#6060** (`[Feature]: Pin a 1.0 Refactor Tracking Issue`) — closed; tracking issue consolidated.
- **#3852** (`[Bug]: no creating config.toml`) — closed; compilation issue resolved.
Eight PRs were merged/closed (details not available in top‑20 data). The open PRs with the highest risk labels include the allowlist migration series and new selective channel builds (#6866).

## 4. Community Hot Topics
Issues with the most discussion (by comment count) reflect user configuration and UI concerns:

- **[#6856](https://github.com/zeroclaw-labs/zeroclaw/issues/6856)** (5 comments) — `show_tool_calls` missing in channel schema v3. Users request parity with v2.
- **[#6127](https://github.com/zeroclaw-labs/zeroclaw/issues/6127)** (4 comments) — Gateway silent‑fallback hardening; tracking issue for a prior merge condition.
- **[#5262](https://github.com/zeroclaw-labs/zeroclaw/issues/5262)** (3 comments) — Request to add ZeroClaw logo to the official Agent Skills client list.
- **[#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724)** (3 comments) — Supervisor crashloops when all channels have `enabled=false`. Reproducible via dashboard UX.
- **[#6558](https://github.com/zeroclaw-labs/zeroclaw/issues/6558)** (3 comments) — Provider error (405 Method Not Allowed) with custom API endpoint; user unable to use qwen3.5-plus.
- **[#6180](https://github.com/zeroclaw-labs/zeroclaw/issues/6180)** (3 comments) — llama-server configuration fails; agent workflow blocked.

PRs receiving attention include **#6866** (selective channel builds) and **#6848** (TUI integration), both updated within the last 24 hours.

## 5. Bugs & Stability
Reports by severity:

| Severity | Issue | Description | Status |
|----------|-------|-------------|--------|
| **S0** (data loss / security) | [#6558](https://github.com/zeroclaw-labs/zeroclaw/issues/6558) | Custom API `405 Method Not Allowed` for qwen3.5‑plus; all providers fail. | Blocked (needs author action) |
| **S0** | [#6063](https://github.com/zeroclaw-labs/zeroclaw/issues/6063) | Web search for “openclaw” returns nothing. | Blocked (needs author action) |
| **S1** (workflow blocked) | [#6180](https://github.com/zeroclaw-labs/zeroclaw/issues/6180) | llama‑server provider configuration error. | Blocked (needs repro) |
| **S1** | [#6862](https://github.com/zeroclaw-labs/zeroclaw/issues/6862) | Gateway SPA fallback serves `index.html` for `/api/*` routes, breaking dashboard JSON parsing. | Accepted (P1) |
| **S1** | [#6881](https://github.com/zeroclaw-labs/zeroclaw/issues/6881) | Email channel ignores blank SMTP credential overrides, causing failures. | Accepted (P1) |
| **S1** | [#6877](https://github.com/zeroclaw-labs/zeroclaw/issues/6877) | `max_tool_iterations` under `[runtime_profiles.*]` has no effect; must be set on `[agents.*]`. | Open (P1) |
| **S2** (degraded) | [#6856](https://github.com/zeroclaw-labs/zeroclaw/issues/6856) | `show_tool_calls` missing from channel schema v3. | Accepted |
| **S2** | [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) | Channels supervisor crashloops when all channels disabled. | Blocked (needs author action) |
| **S2** | [#6517](https://github.com/zeroclaw-labs/zeroclaw/issues/6517) | Context overflow causes hallucination / topic drift in long conversations. | Blocked (needs author action) |
| **S2** | [#6632](https://github.com/zeroclaw-labs/zeroclaw/issues/6632) | Manual `cron_run` persists best‑effort delivery failures as `ok`. | Accepted |

The S1 dashboard JSON parse bug ([#6862](https://github.com/zeroclaw-labs/zeroclaw/issues/6862)) was reported today against v0.8.0‑beta‑1 and is already accepted as P1. No fix PR has appeared yet.

## 6. Feature Request Clusters
Several user‑requested enhancements are documented with open issues and associated PRs:

- **Terminal UI Agent Chat** — [#6824](https://github.com/zeroclaw-labs/zeroclaw/issues/6824) (in‑progress, no‑stale). Related PR [#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) integrates a Ratatui‑based interactive chat.
- **ACP protocol extensions** — [#6820](https://github.com/zeroclaw-labs/zeroclaw/issues/6820) (in‑progress, no‑stale). Adds diff display and file‑proposal message types for approval cycles.
- **Memory strategy decoupling** — [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) (RFC, blocked on maintainer review). Proposes a `MemoryStrategy` trait to separate lifecycle policy from storage.
- **Selective channel builds** — PR [#6866](https://github.com/zeroclaw-labs/zeroclaw/pull/6866) adds feature‑gated channel compilation.
- **Agent capability flags** — [#6729](https://github.com/zeroclaw-labs/zeroclaw/issues/6729) (accepted). Per‑agent flags for `shared/` access and workspace escape.
- **Remove remote‑markdown‑link block from skill audit** — [#6714](https://github.com/zeroclaw-labs/zeroclaw/issues/6714) (blocked). High false‑positive rate on real skills.
- **Preserve streamed output during websocket steering** — [#6661](https://github.com/zeroclaw-labs/zeroclaw/issues/6661) (accepted). Ensures transcript integrity when steering mid‑turn.
- **Invert `zeroclaw-channels` → `zeroclaw-runtime` dependency** — [#6864](https://github.com/zeroclaw-labs/zeroclaw/issues/6864). Architecture refactoring.
- **MCP‑to‑XCode integration** — [#6065](https://github.com/zeroclaw-labs/zeroclaw/issues/6065) (blocked). Enables using ZeroClaw as a chat agent inside XCode.
- **

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-24

## 1. Today's Activity Brief
The project saw moderate activity with 6 issues updated in the last 24 hours (2 open, 4 closed) and 9 pull requests updated (3 open, 6 merged/closed). A new nightly release **v0.2.9-nightly.20260524** was published. Key work today included fixing Discord attachment handling for the vision pipeline (PR #2931), mapping DeepSeek’s thinking fields to PicoClaw’s internal `thinking_level` abstraction (PR #2928), and enforcing budget limits on Seahorse’s fresh tail and rebuild paths (PR #2895). Two new feature PRs were opened: adding line numbers and wrap toggle to code blocks, and adding a Czech locale.

## 2. Releases
**Nightly Build — v0.2.9-nightly.20260524.d499cbec**
Automated build, may be unstable. No breaking changes or migration notes documented.
Full changelog: [https://github.com/sipeed/picoclaw/compare/v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

## 3. Project Progress
Six PRs were merged/closed today:
- **#2931** — `fix(discord): download attachments for vision pipeline` ([link](https://github.com/sipeed/picoclaw/pull/2931)). Previously Discord only downloaded audio attachments; other types (images, files) were passed as raw CDN URLs which were silently dropped by the provider serializer. Now non-audio attachments are downloaded and converted to base64.
- **#2928** — `feat(openai_compat): map DeepSeek thinking fields` ([link](https://github.com/sipeed/picoclaw/pull/2928)). Maps `thinking_level: off/low/medium/high/xhigh` to DeepSeek’s API fields (`thinking` and `reasoning_effort`), closing issue #2903.
- **#2895** — `fix(seahorse): enforce budget on fresh tail and rebuild paths` ([link](https://github.com/sipeed/picoclaw/pull/2895)). Fixes context budget overflow when `FreshTailCount` messages alone exceed the budget (reported in #2894). The fix applies budget enforcement to the fresh tail path and also to rebuild/compile paths.
- **#2835** — `fix(agent): always publish final reply after interim message` ([link](https://github.com/sipeed/picoclaw/pull/2835)). Ensures that a normal final reply is not suppressed when the same turn used the `message` tool for a progress update.
- **#1838** — `Update helpers.go` ([link](https://github.com/sipeed/picoclaw/pull/1838)). Corrects a prompt text in the “picoclaw onboard” command.
- **#2930** — `build(deps): bump golang.org/x/net to v0.55.0` ([link](https://github.com/sipeed/picoclaw/pull/2930)). Addresses `govulncheck` findings in utility functions. Companion bump of `golang.org/x/sys`.

## 4. Community Hot Topics
- **#2421** (closed) — `[Feature]: Add email as native channel` ([link](https://github.com/sipeed/picoclaw/issues/2421)). 7 comments, 2 👍. Proposed use cases: corporate/scientific environments relying on email. The issue was closed, but no follow-up PR exists yet; the request remains unmet.
- **#2742** (open, stale) — `[BUG] gateway starts with no channels in v0.2.8` ([link](https://github.com/sipeed/picoclaw/issues/2742)). 5 comments. User reports that after upgrading to v0.2.8, the gateway starts with zero channels even though Telegram is configured. Stale since May 1. No maintainer response yet.
- **#2834** (closed) — `[Feature] Update from source` ([link](https://github.com/sipeed/picoclaw/issues/2834)). 3 comments. User asks for a tutorial on upgrading from an old version. Closed without a documented article.
- **#2880** (open, stale) — `[BUG]` (Android permission denied) ([link](https://github.com/sipeed/picoclaw/issues/2880)). 1 comment. User on v0.1.3 (old) reports failure to create `Downloads/picoclaw` directory despite granting all storage permissions. No reply yet.

## 5. Bugs & Stability
- **Critical** — Seahorse FreshTail budget bypass (#2894, closed). The last `FreshTailCount` messages were completely exempt from budget enforcement, causing requests to exceed the model’s context window. **Fix PR #2895 merged today.**
- **Important** — Gateway starts with no channels (#2742, open). User on v0.2.8; no reproduction by maintainers yet. Stale for 23 days.
- **Moderate** — Android storage permission denied (#2880, open). Old version 0.1.3; may be resolved in newer releases but no confirmation.
- **Minor** — Discord attachments not being processed for vision (#2931, closed). **Fix merged today.**
- **Minor** — `message` tool suppressing final reply (#2835, closed). **Fix merged today.**

## 6. Feature Request Clusters
- **Email as native channel** (#2421) — closed but no implementation. No related PR.
- **DeepSeek thinking mapping** (#2903, closed) — implemented via PR #2928 merged today.
- **WeChat multi-account support** — PR #2883 (open, stale) adds `weixin_*` config key support and frontend integration. No maintainer activity since submission.
- **Czech locale** — PR #2932 (open) adds 792 translated strings covering most UI sections, including MQTT, MCP, and model catalog.
- **Code block UI** — PR #2933 (open) adds line numbers and a global wrap toggle to frontend code blocks across chat, skill views, and MQTT examples.
- **Upgrade tutorial** — #2834 (closed) requested documentation; no written guide yet.

## 7. User Feedback Summary
- Pain points: upgrading from old versions is unclear (#2834); Android storage permissions broken on v0.1.3 (#2880); gateway channel configuration broken on v0.2.8 (#2742); Discord vision pipeline silently dropped attachments (#2931).
- Use cases: corporate/email-first environments (#2421); DeepSeek users needing native thinking controls (#2903); non-English users requesting full i18n (Czech PR #2932).
- Satisfaction: Several bugs (Seahorse budget, interim reply suppression, Discord attachments) were fixed promptly with merged PRs. The community actively contributes features (WeChat, i18n, code block improvements).

## 8. Backlog Watch
- **#2742** (open since May 1, stale) — gateway starts with no channels in v0.2.8. No maintainer comment. Could be a configuration or regression issue.
- **#2880** (open since May 16, stale) — Android permission denied on old version. User may need to upgrade, but no official guidance.
- **#2883** (PR open since May 16, stale) — WeChat multi-account feature PR. No review or comments from maintainers. May conflict with recent channel architecture changes.
- **#2421** (closed) — Email channel feature request. If maintainers intended to implement, an open issue or a roadmap mention would help signal commitment. Currently no follow-up.

</details>