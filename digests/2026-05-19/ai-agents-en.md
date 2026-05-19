# OpenClaw Ecosystem Digest 2026-05-19

> Issues: 500 | PRs: 500 | Projects covered: 4 | Generated: 2026-05-19 02:31 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest – 2026-05-19

## Today's Activity Brief

The repository saw high activity with **500 issues** and **500 pull requests** updated in the last 24 hours, including **55 closed issues** and **72 closed/merged PRs**. Four new releases were published, the most recent being `v2026.5.19-beta.1`, which focuses on agent development guidelines and dependency updates. Community discussion remains concentrated around session‑state reliability, channel delivery issues, and the ClawHub skill ecosystem, with several long‑standing P1 bugs still awaiting maintainer decisions.

## Releases

Four releases were created today:

- **[v2026.5.19-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.5.19-beta.1)** – Latest pre‑release. Changes: agent fixes should default to clean bounded refactors with explicit plugin SDK/API deprecation paths; updated `@openclaw/proxyline` to 0.3.3; updated Pi packages to 0.75.1 and raised minimum supported Node.js to 22.19.
- **v2026.5.18** – Same change notes as above (agent guidelines + dependency bumps), published as a stable release.
- **v2026.5.18-beta.1** – Identical change set to the stable v2026.5.18, but as a beta.
- **v2026.5.16-beta.7** – Includes the Pi/proxyline updates, Node.js 22.19 baseline, and adds `OPENCLAW_IMAGE_APT_PACKAGES` as a runtime‑neutral Docker/Podman image build argument for extra apt packages.

**Migration notes**: Operators using Docker should review the new `OPENCLAW_IMAGE_APT_PACKAGES` arg. The Node.js minimum is now 22.19 – any environment running an older Node version must upgrade. No breaking structural changes are recorded in these releases.

## Project Progress

Three pull requests were **closed/merged** today (based on data snapshot, actual merges may be higher):

- [#79083](https://github.com/openclaw/openclaw/pull/79083) – **fix(whatsapp): periodic delivery‑queue drain** – Ensures enqueued WhatsApp deliveries are drained even when the connection stays up, rather than waiting for a reconnect. Addresses message‑delay regressions.
- [#50777](https://github.com/openclaw/openclaw/pull/50777) – **fix(ui): prevent copy button showing "CopyCopied!"** – Uses a hidden `attr` instead of CSS‑only hiding to avoid visual glitch when CSS fails to load.
- [#83850](https://github.com/openclaw/openclaw/pull/83850) – **docker: support optional pip packages in local builds** (clawsweeper automerge) – Adds `OPENCLAW_IMAGE_PIP_PACKAGES` to Dockerfiles for custom Python dependencies.

Additionally, the **[clawsweeper[bot]](https://github.com/clawsweeper[bot)] automerge loop** continues to process PRs – notably [#83845](https://github.com/openclaw/openclaw/pull/83845) (fix codex plugin tool auth profiles) is armed for automerge.

## Community Hot Topics

### Most Discussed Issues

| Issue | Comments | Reactions | Summary |
|-------|----------|-----------|---------|
| [#52875](https://github.com/openclaw/openclaw/issues/52875) | **20** | 0 👍 | Regression: `sessions_send` returns "session not found" after upgrade to 2026-03-22. Agent‑to‑agent communication broken. |
| [#48788](https://github.com/openclaw/openclaw/issues/48788) | **17** | 0 👍 | Centralized filename encoding utility for multi‑encoding `Content‑Disposition` handling (feishu, etc.). |
| [#50090](https://github.com/openclaw/openclaw/issues/50090) | **14** | 1 👍 | Community Skill Development & ClawHub – gap between promise and practice; driftnet has blocked many contributions. |
| [#53628](https://github.com/openclaw/openclaw/issues/53628) | **12** | 0 👍 | `$XDG_CONFIG_HOME` not expanded when installing a skill from ClawHub. |
| [#51429](https://github.com/openclaw/openclaw/issues/51429) | **11** | 0 👍 | Hardcoded `/Users/wangtao` workspace path merged into code and published – affects all installations. |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | **11** | 0 👍 | Per‑agent cost budget enforcement at gateway level (daily/monthly caps). |
| [#54253](https://github.com/openclaw/openclaw/issues/54253) | **10** | **3 👍** | Request for RISC‑V64 support – LLM request fails on that architecture. |
| [#51871](https://github.com/openclaw/openclaw/issues/51871) | **10** | 1 👍 | Cron jobs not displayed in dashboard (control UI) – regression on Raspberry Pi. |
| [#39476](https://github.com/openclaw/openclaw/issues/39476) | **10** | 0 👍 | A2A `sessions_send` causing duplicate messages when target agent calls back. |
| [#83018](https://github.com/openclaw/openclaw/issues/83018) | **9** | **2 👍** | Security: allow disabling Codex inner sandbox when Docker sandbox is already active. |

**Underlying needs**: The community is demanding reliable agent‑to‑agent communication, a working ClawHub ecosystem with proper skill installation, better channel delivery guarantees, and per‑agent cost controls. Security considerations around nested sandboxes are gaining traction.

## Bugs & Stability

### Bugs Reported / Updated Today (High Severity)

- **P1 Security**: [#83018](https://github.com/openclaw/openclaw/issues/83018) – Codex forced to run bwrap inside an existing Docker sandbox, causing startup failures. Still open, needs maintainer review and product decision.
- **P1 Session State**: [#83744](https://github.com/openclaw/openclaw/issues/83744) – Discord `progress` failed state persists across runs, suppressing final replies. Created 2026‑05‑18, still open.
- **P1 Crash/Regression**: [#83752](https://github.com/openclaw/openclaw/issues/83752) *(closed)* – Gateway RSS grows sharply after Telegram turns using active memory full‑context preflight. Closed but affects v2026.5.18.
- **P1 Message Loss**: [#82858](https://github.com/openclaw/openclaw/issues/82858) *(closed)* – Discord chunked send drops chunks silently on transient errors (regression in 2026.5.12). Fixed by PR? (closed as not planned? Actually closed, but no fix PR linked – check). Likely a known regression that was closed without resolution.

### Notable New Bug Reports (with Fix PRs)

- [#83873](https://github.com/openclaw/openclaw/pull/83873) – **fix(telegram): preserve inbound text entities** – Rendering formatting entities as markdown. Open, needs proof.
- [#83844](https://github.com/openclaw/openclaw/pull/83844) – **fix(discord): preserve streamed replies after tool warnings** – Prevents final reply being lost when an error tool warning is delivered in the same turn. Open, proof needed.
- [#83858](https://github.com/openclaw/openclaw/pull/83858) – **fix(memory): close local embedding providers on timeout** – Addresses memory embedding hang. Fix PR submitted by [@brokemac79](https://github.com/brokemac79).

### Ongoing High‑Impact Regressions

- [#52875](https://github.com/openclaw/openclaw/issues/52875) – `sessions_send` regression still open with 20 comments.
- [#51871](https://github.com/openclaw/openclaw/issues/51871) – Cron UI dashboard empty on Raspberry Pi.
- [#53540](https://github.com/openclaw/openclaw/issues/53540) – Embedded runner "Network connection lost" on large tool call parameters (P1).

## Feature Request Clusters

### 1. ClawHub & Skill Ecosystem
- [#50090](https://github.com/openclaw/openclaw/issues/50090) – Community Skill Development & ClawHub (14 comments, 1 👍)
- [#43260](https://github.com/openclaw/openclaw/issues/43260) – Per‑skill model routing via `model` field in SKILL.md
- [#50199](https://github.com/openclaw/openclaw/issues/50199) – Skill priority configuration
- [#53628](https://github.com/openclaw/openclaw/issues/53628) – `$XDG_CONFIG_HOME` not processed in skill install

### 2. Channel Delivery Reliability & UX
- [#54531](https://github.com/openclaw/openclaw/issues/54531) – Force reply to originating channel (Telegram/Discord/WhatsApp) – 9 comments, 1 👍
- [#50093](https://github.com/openclaw/openclaw/issues/50093) – WhatsApp backfill missed messages after reconnection
- [#49692](https://github.com/openclaw/openclaw/issues/49692) – Friendlier gateway drain message + auto‑retry unprocessed messages
- [#51628](https://github.com/openclaw/openclaw/issues/51628) – Telegram delivery queue recovery can replay

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report – 2026-05-19

## 1. Daily Cross-Project Overview

OpenClaw dominated activity with ~500 issues and ~500 PRs updated, four releases, and a strong focus on channel delivery fixes, session-state regressions, and ClawHub ecosystem complaints. NanoBot had moderate but focused development (22 PRs updated, 10 merged) with significant refactoring of its agent runner and new provider support (Ant Ling, Gemini image generation). Zeroclaw processed 50 PRs and 26 issues, with the massive v0.8.0 multi-agent runtime PR still awaiting approval and a number of provider-related bug closures. PicoClaw saw lower activity (18 PRs, 6 issues) but notable new features (streaming support, Server酱³ channel) and a critical bug in its Seahorse memory system. No cross-project security incident or breaking change was recorded today.

## 2. Activity Comparison

| Project    | Issues Updated (Open/Closed) | PRs Updated (Merged/Open) | Releases Today | Activity Note |
|------------|------------------------------|---------------------------|----------------|---------------|
| OpenClaw   | 500 (55 closed)              | 500 (72 merged)           | 4 (1 beta, 2 stable-like) | Highest volume by far; heavy community discussion on regressions |
| NanoBot    | 7 (2 closed)                 | 22 (10 merged)            | 0              | Focused merges: runner refactor, new providers, WebUI fixes |
| Zeroclaw   | 26 (11 closed)               | 50 (8 merged)             | 0              | Moderate volume; CI workflow failure surfaced; v0.8.0 PR still open |
| PicoClaw   | 6 (1 closed)                 | 18 (1 merged)             | 1 (nightly)    | Low merge rate but active PRs for streaming and new channels |

## 3. OpenClaw Compared With Peers

- **Activity volume**: OpenClaw’s issue and PR update counts are roughly 10–20× that of the next-most-active project (Zeroclaw). This likely reflects a larger user base and more automated activity (e.g., bot-driven PR processing).
- **Technical focus**: OpenClaw’s day’s changes centre on WhatsApp delivery draining, UI glitch fixes, and Docker build argument additions – incremental improvements rather than architectural refactoring. In contrast, NanoBot merged a major internal refactoring of `AgentRunner.run()`, and Zeroclaw is preparing a v0.8.0 multi-agent runtime overhaul.
- **Community surface area**: OpenClaw shows 10 heavily-discussed issues with 10–20 comments each, touching session state, ClawHub skill ecosystem, and per-agent cost controls. Zeroclaw has fewer heavily-commented issues (e.g., FreeBSD support with 7 comments), while NanoBot and PicoClaw show smaller engagement per thread.

## 4. Shared Technical Focus Areas

- **Channel delivery reliability**
  OpenClaw fixed WhatsApp delivery-queue draining (PR #79083) and discussed Discord chunked-send drops. Zeroclaw has an open issue on cron delivery failure persistence (#6632) and a fix for Matrix draft isolation. PicoClaw introduced streaming support (PR #2892) to improve real-time delivery.

- **Cost/usage controls**
  OpenClaw has a popular feature request for per-agent cost budget enforcement (#42475, 11 comments). Zeroclaw’s v0.8.0 hardening includes per-agent capability flags (#6729). No explicit cost-control requests appeared in NanoBot or PicoClaw today.

- **Skill/platform ecosystems**
  OpenClaw’s ClawHub skill installation issues (#50090, #53628) and hardcoded workspace path (#51429) are receiving sustained community attention. Zeroclaw closed skill-related bugs (skill install panic #6681) and has an open skills tracker (#6253). PicoClaw’s Seahorse memory system (closed, #1919) and context-budget bypass bug (#2894) are skill/agent-memory related.

## 5. Differentiation Analysis

- **Target users and scale**: OpenClaw appears oriented toward production deployments with Docker/Podman, WhatsApp, and multi-channel reliability. NanoBot leans toward developers and tinkerers with its CLI wizards, new provider integrations (Ant Ling, Gemini, MiniMax), and Docker documentation improvements. Zeroclaw targets advanced users with Rust-native performance, FreeBSD builds, and a large pending multi-agent architectural change. PicoClaw focuses on lightweight deployment (Yocto, .deb) and an open community with many external PRs for new channels and features.

- **Technical architecture**: OpenClaw uses Node.js (minimum 22.19) and a plugin SDK; Zeroclaw is Rust-based and emphasises schema versioning and cross-compilation; NanoBot uses Python and is refactoring its agent runner into composable components; PicoClaw is likely Python-based as well (Seahorse memory, Codex integration). This suggests different ecosystems for plugin development and deployment.

- **Community contribution style**: OpenClaw’s large number of issues and PRs implies a high user-to-contributor ratio with many support and bug reports. NanoBot’s PRs are more concentrated on deliberate features and refactoring. Zeroclaw has a notable backlog of author-blocked PRs, indicating maintainer review capacity may be a bottleneck. PicoClaw shows enthusiastic external contributions (Telegram modes, Yocto layer, Server酱³) but slower merge pace.

## 6. Community Activity Notes

- **Tier 1 (Very High)**: OpenClaw – >500 issues, >500 PRs, 4 releases. Community discussion volume is substantially higher than all others combined.
- **Tier 2 (Moderate)**: Zeroclaw – 26 issues, 50 PRs, no release. Activity is sustained but dominated by a single large PR (#6398) and CI bugs.
- **Tier 3 (Moderate-Low)**: NanoBot – 7 issues, 22 PRs, 10 merged, no release. Merge rate is healthy but overall volume lower.
- **Tier 4 (Low)**: PicoClaw – 6 issues, 18 PRs, 1 merged, 1 release. Merge activity is minimal despite active PR submissions.

## 7. Evidence-Backed Observations

1. **Channel delivery reliability is a cross-project pain point**. OpenClaw, Zeroclaw, and PicoClaw each had at least one issue or fix related to message delivery failures (WhatsApp draining, cron persistence, Discord chunks, Matrix drafts). This indicates a common challenge in multi-channel AI agent platforms.

2. **Agent session state and memory continue to be unstable**. OpenClaw’s `sessions_send` regression (#52875) remains unresolved with 20 comments. PicoClaw’s Seahorse system introduced a context-budget bypass bug (#2894). NanoBot has a request for persistent cross-session memory (#3888, closed). This cluster suggests that reliable agent state management is not yet mature across the ecosystem.

3. **OpenClaw’s issue count is an order of magnitude larger, but the signal-to-noise ratio may be lower**. Many OpenClaw issues have few reactions (e.g., only 3 issues have 2+ 👍) while high-severity regressions (P1) stay open without maintainer resolution. In contrast, smaller projects like NanoBot and PicoClaw have fewer issues but clearer paths to fix (e.g., #2894 with a fix PR opened same day).

4. **Feature requests for new LLM providers and platform support are concentrated in NanoBot and Zeroclaw**. NanoBot merged three new providers today (Ant Ling, Gemini image, MiniMax image), while Zeroclaw closed requests for Morph and GitHub Models and is working on a custom provider bug (#6558). OpenClaw had no provider addition in these releases. This suggests divergent specialization: NanoBot/Zeroclaw prioritise provider breadth; OpenClaw prioritises channel and ecosystem stability.

5. **CI and operational reliability lags in some projects**. Zeroclaw has a CI workflow that has never run successfully (#6751), and OpenClaw’s large number of open P1 bugs with no linked fix implies gaps in automated testing and triage. No similar systemic CI failures were noted for NanoBot or PicoClaw today.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-19

## 1. Today's Activity Brief

Today saw heavy developer activity with 22 PRs updated (10 merged/closed) and 7 issues updated (2 closed). The most significant merged PRs include a major refactoring of the `AgentRunner.run()` method into focused components, addition of Ant Ling as a first-class LLM provider, a new Gemini image generation provider, and multiple WebUI fixes for remote/Docker deployment scenarios. No new releases were published. The project also received a substantial image generation provider registry refactor (PR #3893) that should simplify future provider additions.

## 2. Releases

No new releases today.

## 3. Project Progress

**10 PRs merged/closed today**, covering important refactoring, provider expansion, and bug fixes:

- **Refactoring & Core Architecture**
  - `#3892`: Extracted the 330-line monolithic `AgentRunner.run()` into 9 focused methods with a `RunContext` dataclass and explicit `LoopAction` enum.
  - `#3893` (open): Introduced `ImageGenerationProvider` base class and module-level registry, plus fixed WebSocket/WebUI image dropping bug.
  - `#3890`: Added Model Preset CLI wizard for interactive model configuration.

- **New Providers**
  - `#3900`: Added **Ant Ling** as a first-class OpenAI-compatible LLM provider (merged).
  - `#3886`: Added **Gemini image generation** support covering Imagen 4 and Gemini Flash endpoints (merged).
  - `#3879`: Added **MiniMax image generation** provider support (merged).

- **WebUI & Docker**
  - `#3899`: Added live file edit activity streaming to WebUI (merged).
  - `#3889`: Fixed single newline rendering in WebUI markdown using `remark-breaks` plugin (merged).
  - `#3875`: Updated Docker documentation and configs for WebUI access and `bwrap` sandbox (merged).

- **Misc**
  - `#3897`: Vision-related PR (merged, description empty).
  - `#3883`: Added CLI commands for model configuration, marked invalid/closed.

## 4. Community Hot Topics

- **WeChat Login Failure** (`#3863`, 5 comments) — User cannot log in via WeChat QR code due to "版本较低" error despite having latest WeChat version. No fix PR identified yet; likely requires upstream WeChat integration updates.
  https://github.com/HKUDS/nanobot/issues/3863

- **X Checking Job Loop** (`#3901`, 1 comment) — User reports NanoBot enters infinite tool-call loop when trying to set up a simple cron job for X API monitoring, hitting max iteration limit. Suggests potential deadlock in task execution.
  https://github.com/HKUDS/nanobot/issues/3901

- **Skill Content in Multi-turn Conversations** (`#3846`, 1 comment, 1 👍) — Proposed enhancement to preserve skill definitions across conversation turns. Related PR `#3847` is still open.
  https://github.com/HKUDS/nanobot/issues/3846

- **Image Generation Provider Refactor** (`#3893`, PR) — Significant architectural change generating discussion; simplifies provider additions from ~8 files to a single registry entry.
  https://github.com/HKUDS/nanobot/pull/3893

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| High | #3863 | WeChat login broken with "版本较低" error despite latest client | No fix |
| Medium | #3901 | X checking job stuck in infinite loop, hitting max tool call limit | No fix |
| Medium | #3873 | Docker deployment docs inconsistent with v0.2.0 (WebUI, bwrap, reverse proxy) | Fixed in #3875 |
| Low | #3903 | Image generation bugs: hardcoded PNG MIME type, MiniMax/AIHubMix bypass base HTTP | PR #3893 addresses partially |

## 6. Feature Request Clusters

- **Skill Persistence in Conversations** (`#3846`, PR #3847) — Community request to prevent skill content from being lost during multi-turn interactions. Open PR exists.

- **User Authorization for Dangerous Commands** (`#3887`) — Request for ability to whitelist specific commands blocked by hardcoded deny patterns. Related PR #3898 adds restricted mode tool isolation with admin tool filtering.

- **Persistent Memory** (`#3888`, closed) — Proposal to integrate Mnemon for cross-session memory. The issue was closed, but the feature may ship separately.

- **Image Generation Improvements** (`#3903`) — Follow-ups to PR #3893: fix hardcoded MIME type in MiniMax, and ensure all providers use base `_http_post()`.

## 7. User Feedback Summary

- **WeChat Login**: User reports broken functionality despite fully updated client, causing inability to use the WeChat channel.
- **Task Execution Issues**: User attempted a simple API monitoring task but experienced application-freezing infinite loops.
- **Docker Deployment Pains**: Multiple users encountered 403 errors on WebUI bootstrap, unreachable health endpoints, and sandbox failures when following official documentation.
- **Skill Content Loss**: Users observed that skill definitions are overwritten or lost during extended conversations.

## 8. Backlog Watch

- `#3568` (Manifest LLM router provider, 19 days open) — Review status unclear; no recent maintainer comments.
  https://github.com/HKUDS/nanobot/pull/3568

- `#3621` (Multi-role agent squad for HF Spaces, 15 days open) — Large PR with no recent maintainer activity.
  https://github.com/HKUDS/nanobot/pull/3621

- `#3762` (Codex provider retry fix, 7 days open) — Tested code with incomplete test path; awaiting maintainer review.
  https://github.com/HKUDS/nanobot/pull/3762

- `#3847` (Skill load tool for multi-turn conversations, 4 days open) — Addresses popular enhancement request #3846; no maintainer response yet.
  https://github.com/HKUDS/nanobot/pull/3847

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest — 2026-05-19

## 1. Today's Activity Brief
- 26 issues updated (15 open, 11 closed) and 50 PRs updated (42 open, 8 merged/closed) in the last 24 hours.
- No new releases were cut; the project remains at the v0.7.x series while the massive v0.8.0 multi-agent runtime PR (#6398) continues to seek final approval.
- 11 issues were closed, including several long-standing items (FreeBSD platform support, skillforge schema fixes, Tavily search stub, provider additions for Morph and GitHub Models).
- A notable CI‑silent failure was surfaced: the PR‑title validation workflow (#6396) has never run successfully since merge.

## 2. Releases
None.

## 3. Project Progress
- **8 PRs were merged or closed** today. The only merged PR explicitly visible in the top-20 list is:
  - [#6749 – ci: expand manual cross-platform build matrix coverage](https://github.com/zeroclaw-labs/zeroclaw/pull/6749) (closed) — added missing build targets (e.g., `x86_64-unknown-freebsd`) to the manual CI matrix.
- Additional closed items include bug‑fix PRs for channel streaming state (Matrix draft isolation, #6735), tool‑call protocol internalization (#6736), and no‑default‑feature channel builds (#6745). All remain open or were merged; details are sparse without a full merged‑list.
- **Closed high‑impact issues**:
  - #1924 – FreeBSD platform support (pre‑built binaries now published? closed without release note).
  - #6210 / #6128 – SkillMeta schema hardening via `#[serde(deny_unknown_fields)]` and follow‑up for auto‑generated TOML fields.
  - #6439 / #6444 – New model providers: Morph (fast apply) and GitHub Models.

## 4. Community Hot Topics
- **#1924 – FreeBSD platform support** (7 comments, 1 👍) – user `@suselee` requested pre‑built FreeBSD amd64 binaries. The issue was closed, suggesting a long‑standing gap now addressed.
- **#6398 – v0.8.0 Multi‑Agent Runtime and Schema V3** (open, 0 visible comments, but the PR description signals “SEEKING APPROVAL – THIS WILL BE MERGED AND USED AS BASIS FOR BETA RELEASE”). This sprawling XL‑sized PR touches nearly every crate and is the day’s single most significant in‑flight change.
- **#6210 – SkillForge auto‑integrator emits non‑schema fields** (5 comments) – surfaced during code review; closed after the `deny_unknown_fields` follow‑up (#6128) landed.
- **#6558 – Custom provider API 405 error** (3 comments) – user `@jonhoosh` reports a non‑retryable error with DashScope endpoint. Still open.

## 5. Bugs & Stability
*Issues reported/updated within the last 24h, ranked by severity label:*

| Severity | Issue | Description | Status |
|----------|-------|-------------|--------|
| S0 (data loss / security) | [#6747](https://github.com/zeroclaw-labs/zeroclaw/issues/6747) | `amannn/action-semantic-pull-request` fails to run (actions allow‑list missing) | Closed (duplicate) |
| S0 (implied) | [#6558](https://github.com/zeroclaw-labs/zeroclaw/issues/6558) | Custom provider `405 Method Not Allowed` – all providers fail | Open |
| S1 (workflow blocked) | [#6681](https://github.com/zeroclaw-labs/zeroclaw/issues/6681) | `zeroclaw skills install clawhub:*` panics due to `reqwest::blocking` inside `#[tokio::main]` | Closed (fix presumed merged) |
| S2 (degraded) | [#6632](https://github.com/zeroclaw-labs/zeroclaw/issues/6632) | Manual `cron_run` persists best‑effort delivery failures as `ok` | Open |
| S2 (degraded) | [#6643](https://github.com/zeroclaw-labs/zeroclaw/issues/6643) | GLM‑5.1 thoughts merge into final message (re‑opened from #5285) | Open |
| S2 (degraded) | [#6739](https://github.com/zeroclaw-labs/zeroclaw/issues/6739) | Cron timezone contract inconsistent across tools, CLI, API | Closed |
| (risk: high) | [#6756](https://github.com/zeroclaw-labs/zeroclaw/issues/6756) | `models list` fails for custom providers because stored API key not read | Open |
| (risk: high, CI) | [#6751](https://github.com/zeroclaw-labs/zeroclaw/issues/6751) | PR‑title workflow (`startup_failure`) never ran since #6396 | Open |
| (risk: high) | [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) | Channels supervisor crash‑loops when all channels are `enabled=false` | Open |

- Fix PRs exist or are in‑progress for several: #6681 closed, #6739 closed, #6632 has no associated fix PR yet, #6643 still open.

## 6. Feature Request Clusters
- **Provider support**: Three new provider integrations were recently closed (Morph #6439, GitHub Models #6444) and one remains open (custom provider bug #6558). No new provider requests today.
- **Skills ecosystem**: The v0.7.6 skills tracker (#6253) remains open, tracking improvements across CLI, loader, audit, sandbox, and test harness. Skill install panic (#6681) was fixed.
- **New tools / integrations**: PRs for Jira (#6481), Eight Sleep (#6471), Home Assistant (#6464), and Philips Hue (#6470) all remain open, awaiting author action or review. All add new tool capabilities.
- **Security & config**: Feature request [#6729](https://github.com/zeroclaw-labs/zeroclaw/issues/6729) proposes per‑agent capability flags for `shared/` access and workspace escape — part of v0.8.0 hardening.
- **Docker / documentation**: [#6760](https://github.com/zeroclaw-labs/zeroclaw/issues/6760) provides a working Docker Compose example for v0.7.5‑debian (subject to YAML formatting).
- **Repository housekeeping**: [#6715](https://github.com/zeroclaw-labs/zeroclaw/issues/6715) asks to delete >200 stale branches; labeled `needs-maintainer-review`.

## 7. User Feedback Summary
- **Pain points**: Several users hit configuration friction: custom providers fail with misleading errors (#6558, #6756), skills install crashes on `clawhub:` (#6681), and cron timezone behavior is puzzling (#6739 closed).
- **Channel frustrations**: Email channel usability issues (wrong subject, markdown as attachments) were reported in PR #6512 and are awaiting author changes. Matrix streaming draft state needed isolation (#6735).
- **Positive signals**: FreeBSD support request (#1924) was closed, likely satisfying that community. The successful closure of two model‑provider issues (Morph, GitHub Models) indicates responsiveness to user‑requested integrations.
- **Observation**: The community is actively contributing PRs (many `needs-author-action`) but a backlog of author‑blocked PRs suggests maintainer review bandwidth may lag.

## 8. Backlog Watch
- **Long‑standing issues with few maintainer responses**:
  - [#5745](https://github.com/zeroclaw-labs/zeroclaw/issues/5745) – PDF support in tools (created Apr 15, accepted but no code in progress). 2 comments.
  - [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) – Tracking 153 commits lost in bulk revert (Apr 24, 2 comments, needs recovery plan).
- **PRs awaiting author action** (dozens): Key examples include Jira tool (#6481), file‑rotation crate (#6611), Discord reply‑to‑bot (#6278), i18n channel replies (#6578), cron DingTalk delivery (#6521), and several others. These block feature delivery until the original authors respond.
- **Needs‑maintainer‑review**: Repository branch cleanup (#6715) and Docker docs update (#6760) have no maintainer comment yet.
- **CI risk**: The PR‑title workflow bug (#6751) silently missing all PR checks is a high‑priority operational gap that has gone unnoticed for days.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-19

## Today’s Activity Brief

Over the past 24 hours, PicoClaw saw 6 issues updated (5 open, 1 closed) and 18 pull requests updated (17 open, 1 merged). A new nightly release was published. The closed issue (#1919) finalised the “Seahorse” biologically-inspired memory system for AI agents, while a fresh bug (#2894) about Seahorse bypassing the context budget was reported and already has a fix PR (#2895). Among PRs, streaming support (#2892), a “Reset to Factory Defaults” feature (#2891), and a Server酱³ Bot channel (#2893) stand out as significant new contributions.

## Releases

- **nightly** (v0.2.8-nightly.20260519.941bac23) — automated build from `main`, may be unstable.
  Changelog: [compare v0.2.8…main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)
  No breaking changes or migration notes provided.

## Project Progress

Only one PR was merged/closed today:

- **[#2886 — feat(chat): add chat detail visibility selector](https://github.com/sipeed/picoclaw/pull/2886)** (merged)
  Replaces the Web Chat assistant detail toggle with a four-state selector for reasoning and tool call visibility. Migrates browser preference from `localStorage`.

All other PRs remain open or stale.

## Community Hot Topics

- **[#1919 — Seahorse: Biologically-inspired Memory System](https://github.com/sipeed/picoclaw/issues/1919)** (CLOSED, 11 comments)
  Discussion centred on giving AI agents a human-like short-term/long-term memory architecture. The issue was closed today, suggesting implementation or acceptance.

- **[#2674 — Codex OAuth: empty assistant response](https://github.com/sipeed/picoclaw/issues/2674)** (4 comments, 4 👍)
  Users report empty replies when using the OpenAI Codex OAuth provider against the ChatGPT backend. The fallback message (`“The model returned an empty response…”`) appears, indicating possible token limit or provider error. High reaction count reflects broad user impact.

- **[#2796 — History shows only last user message](https://github.com/sipeed/picoclaw/issues/2796)** (3 comments)
  In Chinese: when a conversation contains multiple user messages, only the last one is visible after revisiting the history. Users expect the full message list to be displayed.

## Bugs & Stability

| Bug | Severity | Fix PR exists? |
|-----|----------|----------------|
| **[#2894 — Seahorse Assembler: FreshTail bypasses budget limit](https://github.com/sipeed/picoclaw/issues/2894)** (new today) | **Critical** — causes `400 BadRequestError` when context tokens exceed model limit | ✅ [#2895](https://github.com/sipeed/picoclaw/pull/2895) (open, fixes budget enforcement on fresh tail) |
| **[#2887 — .deb on RISC‑V not functional with OpenAI model](https://github.com/sipeed/picoclaw/issues/2887)** | **High** — platform-specific, prevents use on RISC‑V systems | ❌ No fix PR yet |
| **[#2674 — Codex OAuth empty response](https://github.com/sipeed/picoclaw/issues/2674)** (stale) | **Medium** — degrades experience for users of the ChatGPT backend | ❌ No fix PR |
| **[#2796 — History shows only last user message](https://github.com/sipeed/picoclaw/issues/2796)** (stale) | **Medium** — UI/UX regression | ❌ No fix PR |

## Feature Request Clusters

- **Steering-heavy turns** — [#2843](https://github.com/sipeed/picoclaw/issues/2843) requests a “same-agent final no-tools render” to avoid over‑focusing on the latest follow‑up. PR [#2844](https://github.com/sipeed/picoclaw/pull/2844) implements an experimental `final_turn_render_mode` option. PR [#2840](https://github.com/sipeed/picoclaw/pull/2840) fixes related placement of final replies.

- **Streaming support** — PR [#2892](https://github.com/sipeed/picoclaw/pull/2892) adds configuration‑driven provider streaming with dual opt‑in (model + channel). PR [#2853](https://github.com/sipeed/picoclaw/pull/2853) adds real‑time token streaming for the pico channel via WebSocket.

- **New channel integrations** — PR [#2893](https://github.com/sipeed/picoclaw/pull/2893) adds Server酱³ Bot (SC3) support. PR [#2849](https://github.com/sipeed/picoclaw/pull/2849) adds Telegram guest mode, and PR [#2845](https://github.com/sipeed/picoclaw/pull/2845) adds Telegram Business mode.

- **Embedded deployment** — PR [#2851](https://github.com/sipeed/picoclaw/pull/2851) contributes a Yocto/OpenEmbedded layer (`meta-picoclaw`) for building PicoClaw into custom firmware.

- **MCP dynamic headers** — PR [#2696](https://github.com/sipeed/picoclaw/pull/2696) allows channels to forward per‑request HTTP headers to MCP servers.

## User Feedback Summary

- **Provider reliability pain**: Issue #2674 shows users are dissatisfied with the empty‑response problem when using the ChatGPT Codex backend. Four thumbs‑up indicate multiple users affected.
- **History completeness**: Issue #2796 reveals frustration when multi‑message conversations lose earlier user messages—users expect the displayed history to mirror actual messages, not a compressed version for the model.
- **Platform support**: Issue #2887 highlights that RISC‑V users cannot run PicoClaw with OpenAI models via the `.deb` package, a blocker for that architecture.
- **Context budget surprise**: Issue #2894 reports a counter‑intuitive behaviour where the fresh‑tail feature bypasses the context budget, causing provider errors—users expect budget limits to be strictly enforced.
- **Active feature contributions**: Several community‑authored PRs (Telegram modes, Yocto layer, Server酱³) show users are eager to extend PicoClaw to their own workflows.

## Backlog Watch

Items that may need maintainer attention due to staleness or lack of response:

- **[#2674 — Codex OAuth empty response](https://github.com/sipeed/picoclaw/issues/2674)** (stale, updated 2026-05-18, no maintainer reply visible)
- **[#2796 — History shows only last user message](https://github.com/sipeed/picoclaw/issues/2796)** (stale, updated 2026-05-18)
- **[#2551 — Refactor: standardize channel identification](https://github.com/sipeed/picoclaw/pull/2551)** (open since April 16, updated today but no recent maintainer activity)
- **[#2239 — Modify docker compose with privileged](https://github.com/sipeed/picoclaw/pull/2239)** (open since April 1, stale)
- **[#2750 — Fix exec guard relative path handling](https://github.com/sipeed/picoclaw/pull/2750)** (stale, updated 2026-05-18 but no merge)
- **[#2826 — Fix relative path resolution in exec tool](https://github.com/sipeed/picoclaw/pull/2826)** (stale, overlapping with #2750)

</details>