# OpenClaw Ecosystem Digest 2026-05-20

> Issues: 500 | PRs: 500 | Projects covered: 4 | Generated: 2026-05-20 02:31 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest – 2026-05-20

## 1. Today's Activity Brief
- **500 issues** were updated in the last 24 hours (450 open/active, 50 closed).
- **500 pull requests** saw updates (467 open, 33 merged/closed).
- Two new releases landed: `v2026.5.19-alpha.1` and `v2026.5.19-beta.2`, both containing dependency bumps and agent fix guidance.
- High‑activity topics included the `EmbeddedAttemptSessionTakeoverError` regression (issues #84059, #83615) and a `doctor --fix` migration bug that silently corrupts `openai-codex` config (#84038, with a linked automerge PR #84362).
- Community attention remains focused on security‑related feature requests (API key protection, filesystem sandboxing, security profile) and ongoing session‑state reliability problems.

## 2. Releases
**v2026.5.19-beta.2** and **v2026.5.19-alpha.1**
*Both releases share identical changelog content; the beta tag likely indicates a more stable target.*

- **Agents:** Clarified that fixes should default to clean bounded refactors, lean internals, and explicit plugin SDK/API deprecation paths.
- **Dependencies:**
  - `@openclaw/proxyline` updated to `0.3.3`.
  - Pi packages updated to `0.75.1`.
  - Minimum supported Node.js raised to version 22.
- No breaking changes or migration notes were published in the release entries.

## 3. Project Progress
- **Closed/merged PRs today** (from the top‑30 list):
  - [#84369](https://github.com/openclaw/openclaw/pull/84369) – (automerge) Fix Codex image generation tool timeout.
  - [#84398](https://github.com/openclaw/openclaw/pull/84398) – Use context‑aware `reserveTokensFloor` in overflow recovery hint (closed without merge; a duplicate PR #84399 remains open).
- **Notable open PRs with active status:**
  - [#84362](https://github.com/openclaw/openclaw/pull/84362) – Automerging fix for `doctor --fix` preserving explicit `agentRuntime` pin during Codex model migration (AI‑assisted, ClawSweeper‑armed).
  - [#84102](https://github.com/openclaw/openclaw/pull/84102) – Normalize `SendMessage`/`content`/`text` aliases to `message` before send validation (fixes #84079).
  - [#79925](https://github.com/openclaw/openclaw/pull/79925) – Large feature PR for context‑pressure‑aware continuation signals (`continue_work`/`continue_delegate`/`request_compaction`).
  - [#82921](https://github.com/openclaw/openclaw/pull/82921) – Preserve `AGENTS.md` policy during bootstrap truncation.

## 4. Community Hot Topics
### Most commented issues
- [#75](https://github.com/openclaw/openclaw/issues/75) – **Linux/Windows Clawdbot Apps** (105 comments, 75 👍) – Persistent demand for desktop apps on missing platforms.
- [#18677](https://github.com/openclaw/openclaw/issues/18677) – **Security Scan Hook API for `skill:install`** (16 comments) – Users want a hook point for pre‑install security scanning.
- [#11829](https://github.com/openclaw/openclaw/issues/11829) – **Security Roadmap: Protecting API Keys from Agent Access** (16 comments) – Layered approach to prevent key leaks.
- [#67035](https://github.com/openclaw/openclaw/issues/67035) – **Windows chat UI regression** (13 comments, 0 👍) – Input swallowing, invisible streamed replies.
- [#42475](https://github.com/openclaw/openclaw/issues/42475) – **Per‑agent cost budget enforcement** (13 comments) – Operator‑level spend caps.

### Most reactions (👍)
- [#75](https://github.com/openclaw/openclaw/issues/75) – 75 👍 (Clawdbot Apps)
- [#39604](https://github.com/openclaw/openclaw/issues/39604) – 8 👍 (Private network access toggle)
- [#68596](https://github.com/openclaw/openclaw/issues/68596) – 7 👍 (Configurable streaming watchdog timeout)
- [#63829](https://github.com/openclaw/openclaw/issues/63829) – 7 👍 (Per‑agent memory‑wiki vault)

### Underlying needs
- **Cross‑platform parity** – The oldest open issue (#75) continues to dominate discussion.
- **Security hardening** – Topics around API key protection, private network access, security scan hooks, and secure defaults appear consistently in highly‑rated items.
- **Session reliability** – Bugs related to heartbeat, context overflow, and stream interruptions generate many comments and cross‑references.

## 5. Bugs & Stability
### High‑severity (P1) bugs reported or updated today
- **[#84038](https://github.com/openclaw/openclaw/issues/84038)** – `doctor --fix` silently migrates intentional `openai-codex/` config to `openai/`, breaking PI+OAuth runtime and causing 3‑4× token inflation. **Status:** open, linked PR [#84362](https://github.com/openclaw/openclaw/pull/84362) (automerge).
- **[#84059](https://github.com/openclaw/openclaw/issues/84059)** – `EmbeddedAttemptSessionTakeoverError`: session file changed while embedded prompt lock was released. Occurs on every embedded run after upgrade to 2026.5.18. **Status:** open, no fix PR yet.
- **[#83615](https://github.com/openclaw/openclaw/issues/83615)** – `EmbeddedAttemptSessionTakeoverError` causes truncated replies and kimi‑k2.6 schema incompatibility after upgrade. **Status:** open, 7 comments, 2 👍.
- **[#83744](https://github.com/openclaw/openclaw/issues/83744)** – Discord “progress” failed state persists across runs, suppressing later final replies. **Status:** open.

### Other notable bugs
- [#68113](https://github.com/openclaw/openclaw/issues/68113) – Mattermost slash commands return 503 “not yet initialized” in v2026.4.15 (regression).
- [#67366](https://github.com/openclaw/openclaw/issues/67366) – `TypeError` during `openclaw onboard` when replacing Telegram token (open, fix not yet linked).
- [#67793](https://github.com/openclaw/openclaw/issues/67793) – `queue.mode "collect"` not batching messages despite debounce.
- [#63216](https://github.com/openclaw/openclaw/issues/63216) – Repeated hard resets on same session key despite high `reserveTokensFloor`.

### Closed bug today
- [#84348](https://github.com/openclaw/openclaw/issues/84348) (closed) – The UI should be using those 1.3B tokens… (low‑severity, closed without action).

## 6. Feature Request Clusters
### Security & access control
- [#64046](https://github.com/openclaw/openclaw/issues/64046) – Sensitive data desensitization (P1, 8 comments).
- [#7722](https://github.com/openclaw/openclaw/issues/7722) – Filesystem sandboxing config via `tools.fileAccess` (P2, 7 comments, 4 👍).
- [#8719](https://github.com/openclaw/openclaw/issues/8719) – OpenClaw Security Profile v1.1 (P1, 6 comments, 3 👍).
- [#39604](https://github.com/openclaw/openclaw/issues/39604) – `tools.web.fetch.allowPrivateNetwork` toggle (P2, 12 comments, 8 👍).

### Plugin & extension systems
- [#66944](https://github.com/openclaw/openclaw/issues/66944) – Plugin UI Extension System – native pages in Control UI (8 comments, 4 👍).
- [#13364](https://github.com/openclaw/openclaw/issues/13364) – Expose `before_tool_call`/`after_tool_call` hooks (7 comments).
- [#22358](https://github.com/openclaw/openclaw/issues/22358) – Post‑subagent completion extension hook (11 comments).

### Per‑agent configuration
- [#42475](https://github.com/openclaw/openclaw/issues/42475) – Per‑agent cost budget at gateway level (13 comments).
- [#63829](https://github.com/openclaw/openclaw/issues/63829) – Per‑agent memory‑wiki vault (8 comments, 7 👍).
- [#66252](https://github.com/openclaw/openclaw/issues/66252) – Per‑agent TTS/STT overrides for multi‑language support (7 comments, 1 👍).

### Model & skill routing
- [#43260](https://github.com/openclaw/openclaw/issues/43260) – Per‑skill model routing via SKILL.md frontmatter (9 comments).
- [#10687](https://github.com/openclaw/openclaw/issues/10687) – Fully dynamic model discovery (OpenRouter + beyond) (9 comments, 3 👍).

### Session & context improvements
- [#68596](https://github.com/openclaw/openclaw/issues/68596) – Configurable streaming watchdog timeout (12 comments, 7 👍).
- [#67419](https://github.com/openclaw/openclaw/issues/67419) – Session context bloat from re‑injected bootstrap files (7 comments, 1 👍).
- [#27445](https://github.com/openclaw/openclaw/issues/27445) – `announceTarget` option for sub‑agent completion routing (9 comments, 4 👍).

## 7. User Feedback Summary
### Pain points
- **Session state reliability** – Multiple open bugs describe sessions losing context (#63216, #67419), heartbeat stalling (#65161), and message drops in Telegram (#80520). Users express frustration with regressions after minor updates.
- **Windows experience** – Issue #67035 (chat UI regression on Windows) remains open with no fix PR, and the missing Linux/Windows desktop apps (#75) is the most‑upvoted issue.
- **Security & privacy** – Users are concerned about plaintext API keys in configs, logs, and UI (#64046), as well as insufficient sandboxing for filesystem and network access (#7722, #39604).
- **Cost control** – Lack of per‑agent budget enforcement (#42475) and token waste from bloated contexts (#67419) are frequently mentioned.
- **Plugin ecosystem friction** – Issues around hooks, UI extension, and dynamic model discovery indicate developers want more extensibility without hacking core internals.

### Satisfaction signals
- The community actively engages with detailed feature proposals (e.g., security profile #8719, context‑pressure continuation #79925).
- The number of thumbs‑up reactions (e.g., 75 👍 for #75, 8 👍 for #39604) shows strong support for specific improvements.
- Several PRs (e.g., #84362 automerge, #82921 policy fix) demonstrate maintainers are actively addressing regressions.

## 8. Backlog Watch
### Issues requiring maintainer attention (unanswered for >1 month)
- **#7227** – Security: Accessibility permissions requested for `node` exposes all npm packages to GUI automation (created Feb 2, 8 comments).
- **#10687** – Fully dynamic model discovery (created Feb 6, 9 comments, 3 👍). Labeled `bug, maintainer`.
- **#11665** – Webhook hook sessions should reuse existing session for multi‑turn support (created Feb 8, 8 comments). Labeled `enhancement, P2, needs‑product‑decision`.
- **#11829** – Security roadmap: Protecting API keys from agent access (created Feb 8, 16 comments).
- **#22358** – Post‑subagent completion extension hook (created Feb 21, 11 comments). Needs `maintainer-review` and `product-decision`.

### Stale PRs needing review
- **#52075** – Docs: clarify custom mobile client usage (created Mar 22, P3, waiting on author).
- **#69084** – Fix(webchat): hide heartbeat chat output using `showAlerts` (created Apr 19, needs proof).
- **#69076** – [Codex] classify manual cancellations as killed (created Apr 19, needs proof).
- **#69312** – Fix false‑positive `MEDIA:` extraction from indented code blocks (created Apr 20, actively grinding).

### Observations
- Many long‑standing items carry the `clawsweeper:needs-product-decision` or `needs-maintainer-review` labels, suggesting a bottleneck in product/architectural decisions rather than in code contributions.
- The oldest open issue (#75, created Jan 1) has not received a maintainer response about timeline or feasibility, despite being the most‑commented and most‑upvoted issue.
- Security‑related items (#7227, #11829, #8719) often involve cross‑cutting concerns that may require a dedicated design review.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report – 2026-05-20

## 1. Daily Cross-Project Overview

Today’s digest covers four projects in the AI agent open-source ecosystem: **OpenClaw**, **NanoBot**, **Zeroclaw**, and **PicoClaw**. OpenClaw dominates in absolute activity volume (500 issues and 500 PRs updated, plus two releases), while the other three projects show moderate but focused activity (8–31 issues, 19–44 PRs each, with one nightly build from PicoClaw). Session reliability, security hardening, and multi-agent orchestration appear as shared concerns across multiple projects. OpenClaw’s community is the largest by a wide margin, but all projects received maintainer attention today—merging bug fixes, accepting feature proposals, and advancing refactoring efforts.

## 2. Activity Comparison

| Project     | Issues Updated (Open/Closed) | PRs Updated (Open/Merged) | Releases Today | Notable Activity |
|-------------|------------------------------|--------------------------|----------------|------------------|
| OpenClaw    | 500 (450 open, 50 closed)    | 500 (467 open, 33 merged) | Yes (2)        | v2026.5.19-alpha.1 & beta.2; heavy session/security discussion |
| NanoBot     | 31 (4 open, 27 closed)       | 35 (12 open, 23 merged)   | No             | 23 PRs merged; new providers (Skywork, APIFree, StepFun); WebUI fixes |
| Zeroclaw    | 8 (6 open, 2 closed)         | 44 (41 open, 3 merged)    | No             | Batch of 25 allowlist migration PRs; v0.8.0 multi-agent runtime PR seeks approval |
| PicoClaw    | 9 (4 open, 5 closed)         | 19 (10 open, 9 merged)    | Yes (1 nightly)| Nightly build v0.2.8-nightly; security sandbox fix; DeepSeek streaming fix |

## 3. OpenClaw Compared With Peers

- **Activity volume difference**: OpenClaw’s 500 issues and 500 PRs updated in 24 hours is roughly 10–60× the volume of any peer project. This reflects a much larger community and contributor base.
- **Release cadence**: OpenClaw published two tagged releases today (alpha and beta); only PicoClaw published a nightly build. NanoBot and Zeroclaw had no releases.
- **Community surface area**: OpenClaw’s most-commented issue (#75, 105 comments) alone has more discussion than the total issues updated in NanoBot, Zeroclaw, or PicoClaw. OpenClaw also has the highest reaction counts (75 👍 on #75).
- **Bug severity density**: OpenClaw reports 4 high‑severity (P1) bugs open today; Zeroclaw reports 1 S1 and 1 S2; PicoClaw reports 2 high‑severity bugs; NanoBot reports 1 critical and 1 moderate—OpenClaw’s higher absolute count is proportional to its scale.
- **Feature request maturity**: OpenClaw’s request clusters (security roadmap, per‑agent budgets, plugin SDK) are more architectural and span multiple subsystems; peer projects’ requests often focus on single-provider additions or UI polish.

## 4. Shared Technical Focus Areas

The following requirements appear in two or more projects’ digests today:

| Focus Area | OpenClaw | NanoBot | Zeroclaw | PicoClaw |
|------------|----------|---------|----------|----------|
| **Session/context reliability** | Bugs #84059, #83615 (session takeover), #67419 (context bloat) | Issue #3790 (WebUI garbled), PR #3920 (context compaction benchmark) | PR #6238 (WeChat context token persistence fix) | PR #2491 (session management commands), bug #2894 (context budget overflow) |
| **Security hardening** | API key protection (#11829), filesystem sandboxing (#7722), security profile (#8719) | Shell tool restrictToWorkspace fix (#3919) | SecurityPolicy blocking heredocs (#6771), air‑gapped mode (#6293) | Sandbox bypass fix (#2688), Codex OAuth issue (#2674) |
| **Multi-agent orchestration** | Context-pressure continuation PR #79925, sub-agent hooks (#22358) | Multi-agent squad PR #3621 merged, Legion PR #3913 open | v0.8.0 multi-agent runtime PR #6398 | Agent Refactor Phase 2 (#1934), subagent agent_id PR #2761 |
| **Provider extensibility** | OpenAI/Codex migration issues | Skywork, APIFree, StepFun providers merged | Local CA certificate support (closed #1458) | GLM/Zai endpoint (#82), Intel OpenVINO (#2703) |
| **Memory & persistent state** | Per‑agent wiki vault (#63829), memory consolidation | Mnemon integration (#3888), memory async (#2604) | Dream Mode periodic consolidation (#5849) | Context & memory management suggestion (#2774) |

## 5. Differentiation Analysis

- **Target user profile**: OpenClaw appeals to developers and operators needing enterprise‑grade security, plugin SDK, and cross‑platform desktop support. NanoBot tilts toward hobbyists and deployers wanting quick provider integrations and multi‑channel bots (Telegram, WeChat). Zeroclaw is chasing advanced multi‑agent runtime capabilities (v0.8.0) and enterprise air‑gapped deployments. PicoClaw targets edge/embedded scenarios (Raspberry Pi, Intel OpenVINO, Xiaomi hardware).

- **Technical architecture emphasis**: OpenClaw invests heavily in session management (heartbeat, context overflow recovery, takeover detection) and a formal plugin SDK. NanoBot prioritizes provider breadth and WebUI user experience. Zeroclaw is refactoring code quality (allowlist migrations, ICSE evaluation) while building a schema V3 multi‑agent runtime. PicoClaw focuses on streaming reasoning (DeepSeek), multimodal support, and lightweight deployment via nightly builds.

- **Community engagement style**: OpenClaw has structured security roadmaps and product‑decision bottlenecks. NanoBot merges community PRs rapidly (23 merges today) and closes old issues. Zeroclaw’s contributor @yijunyu submitted 25 refactoring PRs in a single batch, indicating heavy external contribution. PicoClaw maintains a steady stream of bug‑fix merges (9 merged/closed PRs) and a nightly build for early adopters.

- **Release maturity**: OpenClaw uses alpha/beta tags for pre‑release testing; PicoClaw uses nightly builds; Zeroclaw is working toward v0.8.0 beta; NanoBot releases are not tagged frequently. This suggests different stages of development maturity and release governance.

## 6. Community Activity Notes

Based only on today’s issue/PR counts and releases:

- **Very high activity**: OpenClaw (500 issues, 500 PRs, 2 releases)
- **Moderate activity**: NanoBot (31 issues, 35 PRs, no release), PicoClaw (9 issues, 19 PRs, 1 nightly build)
- **Moderate activity with high PR count relative to issues**: Zeroclaw (8 issues, 44 PRs, no release) – the high PR count is driven by a coordinated refactoring batch, not organic growth.

No single project shows signs of stagnation; all have maintainer responses and merged PRs in today’s digest.

## 7. Evidence-Backed Observations

1. **Session reliability is a consistent pain point across all four projects.** Every digest contains at least one bug or feature request related to session state, context bloat, heartbeat, or takeover errors. This suggests the open-source AI agent ecosystem still lacks a robust, standardised session management model.

2. **Security hardening is a growing shared priority, but approaches differ.** OpenClaw focuses on API key protection and sandboxing through dedicated feature requests; NanoBot and Zeroclaw fix specific tool‑access bypasses; PicoClaw addresses sandbox and OAuth issues. No cross‑project security standard or common pattern is evident.

3. **Multi-agent orchestration is actively being implemented across all four projects, but at different levels of abstraction.** OpenClaw proposes low‑level continuation signals; NanoBot merges a squad PR and has another in review; Zeroclaw’s v0.8.0 is a large integration; PicoClaw plans Phase 2 of agent refactoring. This indicates broad market interest but no convergence on a single approach.

4. **Provider extensibility remains a high churn area, especially for NanoBot and PicoClaw.** Both projects merged new provider support today (Skywork, APIFree, StepFun in NanoBot; GLM, Intel OpenVINO in PicoClaw). OpenClaw’s provider‑related activity is more about migration compatibility (Codex → OpenAI) than adding new backends. This suggests NanoBot and PicoClaw are positioning as integration‑friendly platforms, while OpenClaw focuses on stability of existing integrations.

5. **Community scale varies dramatically, with OpenClaw accounting for the vast majority of discussion volume.** However, the smaller projects demonstrate faster feature iteration (NanoBot merged 23 PRs today) and more targeted hardware/embedded support (PicoClaw), which may attract different developer segments. No clear cross‑project signal of market consolidation or dominant design emerges from today’s data.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest – 2026-05-20

## Today's Activity Brief
In the last 24 hours, NanoBot saw **31 issues** updated (4 open, 27 closed) and **35 pull requests** updated (12 open, 23 merged/closed). No new releases were published. Activity was dominated by bug fixes, infrastructure refactoring, and community-driven feature additions. The project continues to evolve rapidly, with maintainers actively merging contributions—especially around new model providers and WebUI improvements. Several long-standing issues (e.g., Telegram duplicate responses, session bloat) were closed, indicating progress on stability.

## Releases
*No releases today.*

## Project Progress
**Merged/Closed PRs** (23 merged/closed out of 35 updated) advanced the following areas:

- **Shell tool fix** – PR [#3919](https://github.com/HKUDS/nanobot/pull/3919) (by [@cctester](https://github.com/cctester)) fixes a bug where `restrictToWorkspace` did not block commands on sub‑folders when set to true.
- **New provider support** – Merged: Skywork first‑level OpenAI‑compatible support ([#3916](https://github.com/HKUDS/nanobot/pull/3916) by [@Re-bin](https://github.com/Re-bin)); APIFree provider ([#3915](https://github.com/HKUDS/nanobot/pull/3915) by [@morandot](https://github.com/morandot)); StepFun image‑generation provider ([#3910](https://github.com/HKUDS/nanobot/pull/3910) by [@morandot](https://github.com/morandot)).
- **Image generation refactor** – PR [#3914](https://github.com/HKUDS/nanobot/pull/3914) (by [@zayfod](https://github.com/zayfod)) splits the monolithic `image_generation.py` into a per‑provider package, improving maintainability.
- **WebUI enhancements** – Merged: settings page upgraded to an app‑style configuration center ([#3906](https://github.com/HKUDS/nanobot/pull/3906) by [@Re-bin](https://github.com/Re-bin)); peer roster bootstrap endpoint for multi‑instance deployment ([#3854](https://github.com/HKUDS/nanobot/pull/3854) by [@DreamShepherd2006](https://github.com/DreamShepherd2006)); fix for tool‑trace rendering in WebUI ([#3894](https://github.com/HKUDS/nanobot/pull/3894) by [@HengWeiBin](https://github.com/HengWeiBin)); `bootstrap_allow_from` configuration for remote Docker deployments ([#3891](https://github.com/HKUDS/nanobot/pull/3891) by [@DreamShepherd2006](https://github.com/DreamShepherd2006)).
- **Documentation** – PR [#3912](https://github.com/HKUDS/nanobot/pull/3912) (by [@yanalialiuk](https://github.com/yanalialiuk)) adds local provider setup guidance in README; PR [#3911](https://github.com/HKUDS/nanobot/pull/3911) (by [@morandot](https://github.com/morandot)) adds StepFun/StepPlan docs.
- **Multi‑agent squad** – PR [#3621](https://github.com/HKUDS/nanobot/pull/3621) (by [@DreamShepherd2006](https://github.com/DreamShepherd2006)) – production‑ready multi‑agent orchestration for Hugging Face Spaces, now merged.
- **Packaging fix** – PR [#2773](https://github.com/HKUDS/nanobot/pull/2773) (by [@YouDiyu](https://github.com/YouDiyu)) ensures SDK works by including `nanobot/*.py` in the package.

**Open PRs of note** – [#3918](https://github.com/HKUDS/nanobot/pull/3918) (performance, 94% gateway cold‑start reduction) and [#3920](https://github.com/HKUDS/nanobot/pull/3920) (context compaction benchmark) are both new and still open.

## Community Hot Topics
**Most active Issues** (by comment count, updated in last 24h):
- [#193](https://github.com/HKUDS/nanobot/issues/193) (14 comments, closed) – *Ollama API support?*: A long‑standing request, finally closed without merge. The community continues to ask for local model support beyond vLLM.
- [#3790](https://github.com/HKUDS/nanobot/issues/3790) (14 comments, open) – *WebUI session print content garbled*: A display bug after recent source update; users need page refresh to recover. Still unresolved.
- [#2463](https://github.com/HKUDS/nanobot/issues/2463) (11 comments, closed) – *Architectural issue: prompt prefix mismatch*: A fundamental concern about conversation history fidelity and OpenAI compatibility. Closed, but no solution visible.
- [#1692](https://github.com/HKUDS/nanobot/issues/1692) (9 comments, closed) – *Telegram bot answers twice*: Duplicate markdown‑rendered response—now closed, likely fixed.
- [#74](https://github.com/HKUDS/nanobot/issues/74) (9 comments, closed) – *Telegram messages not receiving replies*: Old issue, closed today.

**Most active PRs** (open):
- [#3918](https://github.com/HKUDS/nanobot/pull/3918) – *perf: optimize gateway cold start* (significant performance improvement but still open for review).
- [#3852](https://github.com/HKUDS/nanobot/pull/3852) – *Signal channel support*: Strong community interest in expanding messaging platforms.
- [#3913](https://github.com/HKUDS/nanobot/pull/3913) – *Nanobot Legion multi‑agent squad*: A showcase for multi‑agent orchestration, gathering attention.
- [#3735](https://github.com/HKUDS/nanobot/pull/3735) – */insights command for token usage*: Addresses growing need for cost transparency.

**Underlying needs**: Users are consistently asking for:
1. Broader LLM provider compatibility (Ollama, local models, more free endpoints).
2. Persistent memory and session management (memory consolidation failures, unbounded history).
3. WebUI reliability and feature completeness (settings, display, multi‑peer).
4. Multi‑channel and multi‑agent deployment (Signal, multi‑role squads).

## Bugs & Stability
**Bugs reported today (severity high to low):**

| Issue | Description | Severity | Status | Fix PR? |
|-------|-------------|----------|--------|---------|
| [#3884](https://github.com/HKUDS/nanobot/issues/3884) | WebUI conversation closes after first response | **Critical** – core WebUI broken for some users | Open | No fix PR yet |
| [#3790](https://github.com/HKUDS/nanobot/issues/3790) | WebUI session print garbled, requires refresh | **Moderate** – usability degradation | Open | Not directly, but #3894 fixed tool‑trace rendering |
| [#3901](https://github.com/HKUDS/nanobot/issues/3901) | X checking job stuck in infinite loop (max tool calls) | **Moderate** – cron/task loop bug | Closed (likely fixed) | None identified |
| [#3863](https://github.com/HKUDS/nanobot/issues/3863) | WeChat login fails due to "version low" error | **Low** – platform‑specific | Closed | N/A |
| [#3907](https://github.com/HKUDS/nanobot/issues/3907) | Reasoning page rendering: each word on new line | **Low** – cosmetic, CLI issue | Closed | N/A |

**Stability improvements from merged PRs:**
- Shell tool restriction fix ([#3919](https://github.com/HKUDS/nanobot/pull/3919)).
- WebUI tool‑trace rendering now shows `end`/`error` phases ([#3894](https://github.com/HKUDS/nanobot/pull/3894)).
- DeepSeek message hardening PR ([#3869](https://github.com/HKUDS/nanobot/pull/3869)) is still open, targeting null content errors.

## Feature Request Clusters
Multiple user requests and corresponding PRs appeared today:

- **Persistent Memory** – Issue [#3888](https://github.com/HKUDS/nanobot/issues/3888) (closed) introduces **Mnemon** integration. Related open issue [#3846](https://github.com/HKUDS/nanobot/issues/3846) proposes keeping skill content across multi‑turn conversations. Also [#2604](https://github.com/HKUDS/nanobot/issues/2604) remains open for async memory consolidation.
- **Multi‑Agent Orchestration** – PR [#3913](https://github.com/HKUDS/nanobot/pull/3913) (open) and [#3621](https://github.com/HKUDS/nanobot/pull/3621) (merged) both target squad‑based multi‑agent deployments. Peer discovery endpoint ([#3854](https://github.com/HKUDS/nanobot/pull/3854)) supports this direction.
- **New Messaging Channels** – PR [#3852](https://github.com/HKUDS/nanobot/pull/3852) adds Signal; older issue [#1604](https://github.com/HKUDS/nanobot/issues/1604) requested Telegram personalization.
- **Cost/Token Visibility** – PR [#3735](https://github.com/HKUDS/nanobot/pull/3735) (open) adds `/insights` command for historical token usage.
- **Provider Extensibility** – Merged PRs added Skywork, APIFree, StepFun. Issue [#193](https://github.com/HKUDS/nanobot/issues/193) (Ollama) remains closed but unresolved; users may raise new requests.
- **Human Override** – Issue [#3322](https://github.com/HKUDS/nanobot/issues/3322) (closed) requested a pause mechanism for WhatsApp – a general need for agent control.

## User Feedback Summary
- **Pain points expressed**: WebUI stability (conversation closes early, garbled output); session history grows unbounded; memory consolidation failures cause silent unresponsiveness; bot repeats questions without executing actions; duplicate responses on Telegram; Feishu channel fails after long conversations (tool‑role errors); difficulty integrating certain MCP servers and GitHub MCP; Docker build hangs on Windows.
- **Positive signals**: Users are actively experimenting with advanced use cases (cron jobs, image generation, multi‑agent squads). The project is seen as promising but maturing.
- **Common request pattern**: Many users want the bot to "just work" without excessive confirmation loops (see [#923](https://github.com/HKUDS/nanobot/issues/923), [#877](https://github.com/HKUDS/nanobot/issues/877)). Autonomy and reliable tool execution remain high on the wishlist.

## Backlog Watch
Issues/PRs open for some time that may need maintainer attention:

- [#2604](https://github.com/HKUDS/nanobot/issues/2604) – *Make memory consolidation fully asynchronous* (created March 29, 2 comments, open). No maintainer response visible.
- [#3846](https://github.com/HKUDS/nanobot/issues/3846) – *Enhance skill content in multi‑turn conversations* (May 15, 3 comments, open). Proposed design but no commitment.
- [#3884](https://github.com/HKUDS/nanobot/issues/3884) – *WebUI conversation closes after first response* (May 17, high severity, open). No fix PR yet.
- [#3735](https://github.com/HKUDS/nanobot/pull/3735) – *`/insights` command for token usage* (May 11, open PR). Needs review/merge.

No PR or issue appears to have been completely ignored for months—project activity is very high

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest — 2026-05-20

## 1. Today's Activity Brief

In the last 24 hours, 8 issues were updated (6 open, 2 closed) and 44 pull requests were updated (41 open, 3 merged/closed). No new releases were published. One Web UI fix PR was closed, and two feature requests (local CA certificate support, ACP session restore) were closed. A large multi‑agent runtime PR (#6398) continues to seek approval as the basis for the v0.8.0 beta release. A coordinated series of 25 channel allowlist migrations (ICSE 2027 M1 evaluation) was opened by contributor @yijunyu. Two new bugs—one S1 (workflow blocked) and one S2 (degraded behavior)—were reported, with a fix PR already submitted for the S2 issue.

## 2. Releases

None.

## 3. Project Progress

**Merged/closed PRs today (3 total, 1 visible in top 20):**
- [#6776](https://github.com/zeroclaw-labs/zeroclaw/pull/6776) (CLOSED) — `fix(web): 0.8.0 ui fixes`: Aligns reload banner text, authored by @ilteoood.

**Closed issues today:**
- [#1458](https://github.com/zeroclaw-labs/zeroclaw/issues/1458) (CLOSED) — Feature request: local CA certificate support for custom inference provider (merged/enabled).
- [#6543](https://github.com/zeroclaw-labs/zeroclaw/issues/6543) (CLOSED) — Feature: ACP session restore (`session/load`) implemented.

**Ongoing major work visible in active PRs:**
- [#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) (OPEN) — **v0.8.0: Multi‑Agent Runtime and Schema V3**. A massive integration PR seeking approval, targeting a beta release.
- [#6238](https://github.com/zeroclaw-labs/zeroclaw/pull/6238) (OPEN) — Fix for WeChat channel context token persistence and tilde path expansion.

**Code quality / refactoring (ICSE 2027 M1 evaluation):**
- A batch of ~25 PRs by @yijunyu (e.g., [#6800](https://github.com/zeroclaw-labs/zeroclaw/pull/6800), [#6799](https://github.com/zeroclaw-labs/zeroclaw/pull/6799), [#6798](https://github.com/zeroclaw-labs/zeroclaw/pull/6798), …) migrating per‑channel hand‑rolled allowlist predicates to a shared `AllowlistAspect`. This replaces 147 LOC across 16 channels.

## 4. Community Hot Topics

**Most discussed issue:**
- [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) (OPEN, 10 comments) — **Dream Mode — Periodic Memory Consolidation & Reflective Learning**
  Proposed by @Svtter. Accepted as p1, high risk. Users are discussing how ZeroClaw could use idle periods to consolidate memories, reflect on interactions, and update long‑term knowledge structures.

**Other active discussions:**
- [#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) (OPEN, 2 comments) — **Air‑gapped execution mode with companion daemon over Unix socket**
  High risk, blocked, needs maintainer review. Proposes splitting ZeroClaw into an offline agent container and an online companion daemon for internet‑access proxying.
- [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) (OPEN, 1 comment) — **Tracker: zeroclaw skills support and UX (v0.7.6)**
  Coordinating tracker for improving skill CLI, loader, audit, sandbox, and test harness. Community input requested.

## 5. Bugs & Stability

**S1 — Workflow blocked:**
- [#6771](https://github.com/zeroclaw-labs/zeroclaw/issues/6771) (OPEN) — **Multiline Heredocs incorrectly blocked by SecurityPolicy**
  ZeroClaw’s own security policy prevents using a prescribed skill (gh pr create with a heredoc) for raising PRs. No fix PR yet.

**S2 — Degraded behavior:**
- [#6801](https://github.com/zeroclaw-labs/zeroclaw/issues/6801) (OPEN, created today) — **`purge_namespace` deletes by category column**
  `SqliteMemory::purge_namespace` runs `DELETE FROM memories WHERE category = ?1` instead of filtering by the `namespace` column.
  **Fix PR submitted:** [#6777](https://github.com/zeroclaw-labs/zeroclaw/pull/6777) (OPEN) — Changes SQL to use the correct `namespace` column.

## 6. Feature Request Clusters

- **Memory & learning:** [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) — Dream Mode (idle‑time memory consolidation) is the most discussed request, accepted as p1.
- **Deployment & security:** [#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) — Air‑gapped mode with companion daemon (high risk, blocked).
  [#1458](https://github.com/zeroclaw-labs/zeroclaw/issues/1458) (now closed) — Local CA certificates for custom inference.
- **Skills ecosystem:** [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) — Tracker for improving `zeroclaw skills` UX and tooling (targeting v0.7.6).
- **CLI polish:** [#6770](https://github.com/zeroclaw-labs/zeroclaw/issues/6770) — Request to show only channels compiled into the current build in `zeroclaw channel list`.

## 7. User Feedback Summary

- **Use case: idle background processing** — User @Svtter wants ZeroClaw to perform periodic memory consolidation during idle periods, indicating a desire for more autonomous, reflective behaviour.
- **Enterprise / air‑gapped deployment** — User @singlerider proposed a split architecture for running ZeroClaw offline with controlled internet access via approved servers, reflecting demand for secure, isolated deployments.
- **Skill‑driven workflows hit security boundaries** — Bug #6771 shows that ZeroClaw’s own security policy blocks a prescribed skill (heredoc in `gh pr create`), which frustrates users trying to automate PR creation using the recommended approach.
- **Channel list transparency** — User @NiuBlibing requested that `zeroclaw channel list` reflect compile‑time feature selections, indicating confusion when all channels are listed regardless of build.

## 8. Backlog Watch

- [#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) (OPEN since 2026‑05‑03) — Air‑gapped mode with companion daemon. **Blocked** and **needs maintainer review**. No maintainer response visible.
- [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) (OPEN since 2026‑04‑18, accepted p1) — Dream Mode. Despite being accepted and having 10 comments, no associated PR or assignee has been noted.
- [#6771](https://github.com/zeroclaw-labs/zeroclaw/issues/6771) (OPEN since 2026‑05‑19) — S1 bug with heredocs blocked by SecurityPolicy. No fix PR or maintainer comment yet.
- [#6770](https://github.com/zeroclaw-labs/zeroclaw/issues/6770) (OPEN since 2026‑05‑19) — Feature request for compile‑time channel filtering. No maintainer response.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-20

## Today’s Activity Brief
In the past 24 hours, 9 issues were updated (4 open, 5 closed) and 19 pull requests saw activity (10 open, 9 merged/closed). A nightly build v0.2.8-nightly.20260520.639b3270 was published. Several important bug fixes landed, including a security sandbox bypass fix (#2688) and a DeepSeek reasoning‑content streaming fix (#2740). The community showed strong interest in the Codex OAuth empty response issue (#2674) and the ongoing Agent Refactor Phase 2 (#1934).

## Releases
- **Nightly Build v0.2.8-nightly.20260520.639b3270**
  An automated, potentially unstable build.
  Full changelog: [compare v0.2.8…main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

## Project Progress (Merged/Closed PRs)
Nine PRs were merged or closed today:

| PR | Summary |
|----|---------|
| [#317](https://github.com/sipeed/picoclaw/pull/317) | **Discord: add `mention_only` option** – only respond when @-mentioned. |
| [#82](https://github.com/sipeed/picoclaw/pull/82) | **OpenAI‑compatible endpoint for GLM/Zai models** – routes to custom `api_base` for models like GLM‑4.6. |
| [#2761](https://github.com/sipeed/picoclaw/pull/2761) | **Sync subagent: support `agent_id`** – allows explicit lane selection in same‑turn tasks. |
| [#2755](https://github.com/sipeed/picoclaw/pull/2755) | **Streaming `reasoning_content` and video media support** – driven by Xiaomi Mimo provider integration. |
| [#2740](https://github.com/sipeed/picoclaw/pull/2740) | **Fix DeepSeek thinking mode** – capture `reasoning_content` from streaming deltas. |
| [#2703](https://github.com/sipeed/picoclaw/pull/2703) | **Intel OpenVINO Model Server support** – local LLM inference on Intel CPU/GPU/NPU. |
| [#2491](https://github.com/sipeed/picoclaw/pull/2491) | **Session management commands** – `/status`, `/compact`, `/new` for manual context control. |
| [#2892](https://github.com/sipeed/picoclaw/pull/2892) | **Configuration‑driven streaming** – dual opt‑in (model + channel) and generic agent streaming eligibility. |
| [#2888](https://github.com/sipeed/picoclaw/pull/2888) | **Fix tool config load / image reaction** – bug fix for image reaction handling. |

## Community Hot Topics
- **#2674 [OPEN]** – [Codex OAuth: empty assistant response when ChatGPT backend streams `response.output_item.done`](https://github.com/sipeed/picoclaw/issues/2674)
  5 comments, 4 👍. Users experience empty responses despite streaming working. High interest, no fix PR yet.
- **#1934 [OPEN]** – [Meta: Agent Refactor Phase 2 – Multi‑Agent Collaboration within Single Pico](https://github.com/sipeed/picoclaw/issues/1934)
  7 comments, planning for multi‑agent collaboration and agent memory. Phase 1 completed.
- **#1757 [CLOSED]** – [Channel error when scheduling hourly tasks](https://github.com/sipeed/picoclaw/issues/1757)
  9 comments. The user received a channel error after setting up a cron task. Labeled `bug, question, domain: channel, domain: cron`. Closed after resolution.

## Bugs & Stability
| Issue | Severity | Status | Summary |
|-------|----------|--------|---------|
| [#2674](https://github.com/sipeed/picoclaw/issues/2674) | **High** (empty responses) | Open | Codex OAuth provider returns empty assistant responses on streaming. 4 👍, no fix PR yet. |
| [#2720](https://github.com/sipeed/picoclaw/issues/2720) | **High** (crash loop) | Open | Singleton PID check doesn’t verify process identity – stale PID causes gateway crash loop. Fix PR [#2813](https://github.com/sipeed/picoclaw/pull/2813) is open. |
| [#2688](https://github.com/sipeed/picoclaw/issues/2688) | **Medium** (sandbox bypass) | Closed | `find /` could enumerate paths outside workspace sandbox. Fix landed. |
| [#1757](https://github.com/sipeed/picoclaw/issues/1757) | **Medium** (channel error) | Closed | Cron task channel error. Resolved. |
| [#2753](https://github.com/sipeed/picoclaw/issues/2753) | **Low** (build) | Closed | “launcher does not exist” when building from source. Fixed. |

A new bug surfaced in [#2894](https://github.com/sipeed/picoclaw/issues/2894) (context budget overflow in Seahorse), with a fix PR [#2895](https://github.com/sipeed/picoclaw/pull/2895) opened yesterday.

## Feature Request Clusters
- **Config reliability & migration** ([#2771](https://github.com/sipeed/picoclaw/issues/2771)) – user requests updated example config, migration tool DX improvements. Closed after discussion.
- **Context & memory management** ([#2774](https://github.com/sipeed/picoclaw/issues/2774)) – inspired by the `magic-context` plugin: cache‑aware infinite context, cross‑session memory, history compression. Closed as suggestion.
- **Async result delivery policy for spawn** ([#2829](https://github.com/sipeed/picoclaw/issues/2829)) – parent agent receiving unwanted synthetic follow‑ups from subagents. PR [#2830](https://github.com/sipeed/picoclaw/pull/2830) proposes explicit `delivery_mode` option.
- **Per‑message timestamps** ([#2788](https://github.com/sipeed/picoclaw/pull/2788)) – adds `created_at` to session API messages for accurate frontend display.
- **Persist model_name across history** ([#2897](https://github.com/sipeed/picoclaw/pull/2897)) – stores model name in chat history and SeaHorse for consistent rendering.
- **Unify provider metadata** ([#2896](https://github.com/sipeed/picoclaw/pull/2896)) – backend becomes primary owner of shared provider metadata, reducing maintenance cost.

## User Feedback Summary
- **Pain points**:
  - Channel errors when using cron tasks (`#1757`).
  - Empty responses from Codex OAuth provider (`#2674`).
  - Gateway crash loops due to stale PID files (`#2720`).
  - Security sandbox bypass via `find` (`#2688`, now fixed).
  - Build missing launcher binary (`#2753`, fixed).
  - Outdated example config and migration tool UX gaps (`#2771`).
- **Use cases**:
  - Running PicoClaw on a Raspberry Pi Zero W with Telegram (`#1757`).
  - Using GLM/Zai models via custom OpenAI‑compatible endpoints (`#82`).
  - Local inference on Intel hardware via OpenVINO (`#2703`).
  - Multimodal (image, video, audio) understanding via Xiaomi Mimo (`#2755`).
- **Satisfaction indicators**:
  - Several bug‑fix PRs merged quickly (e.g., security sandbox, DeepSeek streaming).
  - Feature requests are being implemented (spawn delivery policy, per‑message timestamps).
  - Active community engagement on roadmap items (multi‑agent collaboration).

## Backlog Watch
- **PR [#2551](https://github.com/sipeed/picoclaw/pull/2551)** (opened Apr 16) – Standardizes channel identification and decouples name from provider type. Still open, labeled `bug, domain: channel, agent, tool, cron`. Needs maintainer review.
- **PR [#2647](https://github.com/sipeed/picoclaw/pull/2647)** (opened Apr 24) – Enables web_search tool YAML config and DuckDuckGo by default. Stale, linked to issue [#2616](https://github.com/sipeed/picoclaw/issues/2616). No recent comments.
- **Issue [#2829](https://github.com/sipeed/picoclaw/issues/2829)** (opened May 9) – Async result delivery policy proposal, has companion PR [#2830](https://github.com/sipeed/picoclaw/pull/2830). Low activity since creation.

</details>