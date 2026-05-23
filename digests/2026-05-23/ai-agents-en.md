# OpenClaw Ecosystem Digest 2026-05-23

> Issues: 500 | PRs: 500 | Projects covered: 4 | Generated: 2026-05-23 02:10 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-05-23

## 1. Today’s Activity Brief
Over the past 24 hours, 500 issues were updated (442 open, 58 closed) and 500 pull requests were updated (378 open, 122 merged/closed). No new releases were published. The most discussed item remains the Linux/Windows Clawdbot Apps request (#75, 105 comments), while a flurry of bug-fix PRs focused on security hardening (ReDoS guarding, secret redaction) and session reliability (compaction failure recovery, subagent lifecycle promises). A major refactor PR moving runtime state to SQLite (#81402) is under active review.

## 2. Releases
None today.

## 3. Project Progress
The 122 merged/closed PRs today include several targeted fixes, though the top‑30 PR list does not expose individual merges. Among closed issues, three notable items:

- **#58479** (closed, P1): Approval dialog bug where approval succeeded in Control UI but was never consumed – fixed in a recent commit.
- **#72262** (closed, P3): WhatsApp 408 disconnect troubleshooting runbook added to docs.
- **#9303** (closed, stale): OpenAI Whisper skill script lacked execute permissions – fix merged.

Other progress signals:
- **#82081** (PR, automerge armed): Fix silent session transcript loss on `/new` rotation.
- **#82596** (PR, waiting on author): Exec denylist feature to bridge allowlist and unrestricted modes.
- **#81402** (PR, needs proof): Large refactor to migrate scattered JSON/JSONL runtime state into SQLite.
- **#79925** (PR, needs proof): Context‑pressure‑aware continuation (continue_work / continue_delegate / request_compaction).

## 4. Community Hot Topics
Most commented/reacted issues:

| Issue | Comments | 👍 | Subject |
|-------|----------|----|---------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | 105 | 75 | Linux/Windows Clawdbot Apps |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) | 24 | 1 | Prebuilt Android APK releases |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | 16 | 0 | Tiered bootstrap file loading |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 14 | 0 | Subagent completion silently lost |
| [#12602](https://github.com/openclaw/openclaw/issues/12602) | 13 | 0 | Slack Block Kit support |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | 12 | 4 | Masked Secrets – prevent agent raw key access |
| [#57901](https://github.com/openclaw/openclaw/issues/57901) | 12 | 0 | Safeguard compaction ignores compaction.model |
| [#18160](https://github.com/openclaw/openclaw/issues/18160) | 11 | 9 | Direct Exec Mode for Cron Jobs |
| [#55334](https://github.com/openclaw/openclaw/issues/55334) | 11 | 1 | sessions.json unbounded growth → gateway OOM |
| [#13583](https://github.com/openclaw/openclaw/issues/13583) | 10 | 2 | Pre‑response enforcement hooks (hard gates) |

The most popular PR by labeling and size is **#79925** (context‑pressure‑aware continuation, XL, P1, needs proof) and **#81402** (SQLite refactor, XL, P1, needs proof). Both are central architectural changes drawing heavy maintainer attention.

## 5. Bugs & Stability
**P1 bugs reported/updated today:**

- **#44925** (subagent completion silently lost – no retry, no notification, no auto-restart on timeout) – open, no fix PR yet.
- **#55334** (sessions.json unbounded growth, skillsSnapshot duplicated per session, OOM crash) – open, fix PR not listed.
- **#58479** (approval dialog bug, closed – fixed)
- **#85333** (`openclaw doctor --fix` 4‑5x slower on 2026.5.20 than 2026.5.19 – session snapshot path traversal bottleneck) – open, needs live repro.
- **#57326** (CLI‑backed helper paths bypass CLI dispatch on latest main – session state/security) – open.
- **#57019** (session write lock race – async release can delete newly‑acquired lock) – open, has linked PR open.

**P2 bugs with fix PRs in review:**

- **#71992** (Control UI webchat duplicates every assistant reply on 2026.4.21) – open.
- **#84607** (no automatic retry with fallback on provider overload) – open.
- **#53399** (browser control server hangs: chrome-devtools-mcp spawn stuck) – open.
- **#57901** (safeguard compaction ignores compaction.model) – open, has linked PR.

**Security‑related bugs:**

- **#10659** (masked secrets request – high 👍 count) – open.
- **#7722** (filesystem sandboxing config) – open.
- **#6615** (denylist for exec‑approvals) – open, high 👍 count.

**Fix PRs merged/active today:**

- **#82952** (fix compaction: preserve partial summary on mid‑chain chunk failure)
- **#82950** (add ReDoS guard to exec approval argPattern matching)
- **#82951** (redact sensitive headers in standalone debug proxy captures)
- **#83106** (add .catch() to expiry delivery fire‑and‑forget)
- **#84616** (add .catch() to subagent lifecycle promises)

## 6. Feature Request Clusters
Several distinct clusters emerge from today’s issue update:

### Multi‑platform & distribution
- **#75** (Linux/Windows Clawdbot Apps, 75 👍)
- **#9443** (Prebuilt Android APK releases)
- **#80380** (Update default model to gemini‑3.1‑flash‑lite GA)

### Security & permissions
- **#10659** (Masked Secrets, 4 👍)
- **#6731** (safe/unsafe ClawdBot mode)
- **#7722** (Filesystem sandboxing, 4 👍)
- **#6615** (Exec‑approval denylist, 7 👍)
- **#56349** (Unbypassable outbound policy enforcement)
- **#12219** (Skill Permission Manifest standard)
- **#12678** (Capability‑based permissions for skills/tools)
- **#13364** (Expose before_tool_call/after_tool_call hooks)
- **#13583** (Pre‑response enforcement hard gates, 2 👍)
- **#13610** (Native secrets management integration – AWS Secrets Manager, Vault, 1 👍)
- **#13751** (Feishu plugin: remove overly broad contact permission, 2 👍)

### Agent orchestration & session control
- **#22438** (Tiered bootstrap file loading)
- **#22358** (Post‑subagent completion extension hook)
- **#27445** (`announceTarget` option for sub‑agent completion routing, 4 👍)
- **#13700** (Session snapshots – save/load context checkpoints)
- **#11665** (Webhook hook sessions should reuse session on consistent sessionKey)

### Channel integrations
- **#12602** (Slack Block Kit)
- **#17925** (Native web_search passthrough for ZAI and Google, 5 👍)
- **#14344** (WhatsApp message delete / revoke, 1 👍)
- **#7476** (WhatsApp sticker send, 1 👍)
- **#13337** (Voice Call Plugin: Add Vapi provider)

### Observability & operations
- **#13219** (Per‑model usage logging for cost tracking, 1 👍)
- **#13616** (Backup/restore utility for config, cron, session history)
- **#12855** (Built‑in auto‑update with schedule/confirmation, 0 👍)
- **#13597** (Comprehensive AWS deployment guide, 3 👍)

### Accessibility
- **#9637** (Disable emojis/unicode in TUI for screenreader users)

## 7. User Feedback Summary
**Pain points repeatedly voiced:**
- **Platform gaps:** Strong demand for Linux, Windows, and Android releases (#75, #9443). The macOS and iOS apps exist, but users on other platforms cannot run the full Clawdbot experience.
- **Agent safety & control:** Many users want to prevent agents from seeing raw API keys, restrict filesystem access, enable denylists for exec, and enforce hard policy gates (#10659, #6731, #7722, #6615, #13583). The current soft‑instruction approach is not trusted for production or high‑stakes workflows.
- **Reliability:** Subagent completion loss (#44925), session data corruption (#57019), memory leaks (#55334), and silent failures in hooks (#82943, #84616) are causing operational pain. Users are asking for automatic retries, fallback on overload, and better session compaction.
- **Onboarding friction:** Missing memory/embedding setup in the onboarding wizard (#16670) and unclear documentation for cloud deployment (#13597) slow adoption.
- **Channel limitations:** Lack of rich features like Slack Block Kit, WhatsApp sticker/reaction support, and full message‑control capabilities frustrate users in those ecosystems.

**Satisfaction signals:**
- High reaction counts on long‑standing feature requests (75 👍 on #75, 9 👍 on #18160, 7 👍 on #6615) show an engaged community eagerly awaiting these improvements.
- Multiple bug‑fix PRs submitted by community contributors (e.g., @SebTardif with ~10 PRs today) indicate a healthy contributor base.

## 8. Backlog Watch
Issues and PRs that have been open for several months and still carry “needs‑maintainer‑review” or “needs‑product‑decision” labels:

| Issue / PR | Created | Last Updated | Status | Notes |
|------------|---------|--------------|--------|-------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | 2026‑01‑01 | 2026‑05‑23 | Needs product decision, security review | Linux/Windows apps, very high community interest |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) | 2026‑02‑05 | 2026‑05‑22 | Needs maintainer review, needs product decision | Prebuilt Android APK |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | 2026‑02‑21 | 2026‑05‑23 | Needs maintainer review, linked PR open | Tiered bootstrap loading |
| [#12602](https://github.com/openclaw/openclaw/issues/12602) | 2026‑02‑09 | 2026‑05‑23 | Needs maintainer review, needs product decision | Slack Block Kit |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | 2026‑02‑06 | 2026‑05‑23 | Needs maintainer review, security review, source repro | Masked Secrets, 4 👍 |
| [#57901](https://github.com/openclaw/openclaw/issues/57901) | 2026‑03‑30 | 2026‑05‑22 | Source repro, linked PR open | Compaction model bug |
| [#79925](https://github.com/openclaw/openclaw/pull/79925) | 2026‑05‑09 | 2026‑05‑23 | Needs proof, merge‑risk flagged | Large context‑pressure PR |
| [#81402](https://github.com/openclaw/openclaw/pull/81402) | 2026‑05‑13 | 2026‑

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-05-23

## 1. Daily Cross-Project Overview
OpenClaw, NanoBot, and ZeroClaw all saw active issue and PR updates, while PicoClaw’s digest generation failed and cannot be included. OpenClaw dominated with 500 issues and 500 PRs updated, including a large architectural refactor to SQLite (#81402). NanoBot and ZeroClaw had smaller but focused activity: NanoBot merged 12 PRs (CLI Apps, Ollama image generation, SSRF fix), and ZeroClaw closed 7 issues and merged 14 PRs (WhatsApp protocol fix, OTel trace enrichment). No new releases were published by any project. Cross‑project themes include security hardening, platform portability demands, and reliability fixes for state management.

## 2. Activity Comparison

| Project   | Issues Updated (Open/Closed) | PRs Updated (Open/Merged) | Any Release? | Activity Note |
|-----------|------------------------------|---------------------------|--------------|---------------|
| OpenClaw  | 500 (442 open, 58 closed)    | 500 (378 open, 122 merged) | No           | Very high volume; major refactor and many bug fixes |
| NanoBot   | 6 (4 open, 2 closed)         | 21 (9 open, 12 merged)    | No           | Moderate; feature‑focused (CLI Apps, image gen) |
| ZeroClaw  | 37 (30 open? 7 closed)       | 50 (36 open? 14 merged)   | No           | Moderate‑high; channel and observability fixes |
| PicoClaw  | N/A (digest failed)          | N/A                       | N/A          | No data available |

## 3. OpenClaw Compared With Peers
- **Activity Volume:** OpenClaw’s 500 issues and 500 PRs updated dwarf NanoBot (6 issues, 21 PRs) and ZeroClaw (37 issues, 50 PRs). This reflects both its larger project scope and different community scale.
- **Technical Focus:** OpenClaw’s top PRs (#81402 SQLite refactor, #79925 context‑pressure continuation) are architectural, while NanoBot and ZeroClaw emphasise feature additions (CLI Apps, image generation) and targeted bug fixes (WhatsApp protocol, SSRF).
- **Community Surface Area:** OpenClaw has higher comment counts (e.g., #75 with 105 comments, 75 👍) compared to NanoBot’s most‑commented issue at 4 comments. ZeroClaw’s #5849 has 11 comments. This suggests broader community engagement in OpenClaw.

## 4. Shared Technical Focus Areas
Several requirements appear in multiple projects today:

| Focus Area | OpenClaw | NanoBot | ZeroClaw |
|------------|----------|---------|----------|
| **Security hardening** | ReDoS guard (#82950), secret redaction (#82951), masked secrets (#10659) | Redirect‑time SSRF fix (#3928) | Slack token env‑var support (#6844); user demands for permission control |
| **Platform portability** | Linux/Windows Clawdbot Apps (#75, 105 comments) | Windows CI for CLI Apps (#3965) | Windows shell encoding fix (#6704); Telegram custom API endpoint request |
| **Reliability & state management** | Subagent completion loss (#44925), SQLite migration (#81402), session OOM (#55334) | Skill list command respects disabledSkills (#3959); exec timeout fix (#3967) | WhatsApp protocol crash fix (#6246); streaming decode hang (#6243); MCP tool filtering bug (#6861) |
| **Memory/context persistence** | Context‑pressure continuation (#79925), tiered bootstrap (#22438) | Multi‑turn skill content (#3846) | Dream Mode memory consolidation (#5849, #6693) |

## 5. Differentiation Analysis
- **Project Scale & Role:** OpenClaw is a core reference implementation with tens of thousands of files and a large maintainer team. Today’s activity focuses on stability, security, and major refactoring. NanoBot and ZeroClaw are smaller, community‑driven projects with faster feature iteration.
- **Target Users:** OpenClaw and ZeroClaw both target agent users needing robust channel integrations (Slack, WhatsApp, Signal). NanoBot targets developers wanting extensibility (CLI Apps, Ollama, skills).
- **Technical Architecture:** OpenClaw is moving runtime state to SQLite (#81402) for consistency. ZeroClaw is integrating a TUI and RPC layer (#6848, #6837). NanoBot employs a skill‑based routing system (BM25 router #3865) to reduce prompt size.

## 6. Community Activity Notes
- **High activity:** OpenClaw (500 issues, 500 PRs, 122 merged) — very high volume with active community contributors.
- **Moderate activity:** ZeroClaw (37 issues, 50 PRs, 14 merged) — steady progress on channels and observability.
- **Lower activity:** NanoBot (6 issues, 21 PRs, 12 merged) — smaller team but merged several new features.
- **No new releases** were published for any project today.
- PicoClaw data is unavailable; its activity cannot be compared.

## 7. Evidence‑Backed Observations
1. **Security hardening is a shared priority across projects.** OpenClaw merged ReDoS and secret redaction PRs; NanoBot fixed redirect‑time SSRF; ZeroClaw saw user requests for env‑var support for secrets. No project ignored security today.

2. **Platform portability demands persist without resolution.** OpenClaw’s #75 (Linux/Windows apps) has 105 comments and 75 👍, remains without product decision. ZeroClaw fixed a Windows shell encoding bug but reported a new setup.bat size regression (#6836). NanoBot added Windows CI but the underlying CLI Apps feature is Linux‑first.

3. **Reliability issues around session and sub‑agent state are common.** OpenClaw documented subagent completion loss (#44925), session OOM (#55334), lock races (#57019). ZeroClaw fixed WhatsApp crash (#6246) and has an open agent loop on Android (#6036). NanoBot fixed exec timeout capping (#3967). Each project is investing in state consistency.

4. **Community contributors are actively submitting fixes.** Named contributors (e.g., @SebTardif in OpenClaw, @alexandme in ZeroClaw, @puneetdixit200 in ZeroClaw) merged multiple PRs today. This indicates healthy contributor bases in all three projects.

5. **No clear cross‑project signal for a unified direction.** While themes overlap, each project pursues distinct architectural paths (SQLite vs. TUI vs. skill routers). The absence of shared releases or coordinated feature announcements suggests independent evolution.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

## NanoBot Project Digest — 2026-05-23

### 1. Today’s Activity Brief
Activity was high on both issues and pull requests. In the last 24 hours, **6 issues** were updated (4 open, 2 closed) and **21 PRs** saw updates (9 open, 12 merged/closed). No new releases were published. The merged PRs included a major new **CLI Apps** integration, **Ollama image generation** support, and a **security fix** for redirect‑time SSRF. Community discussion focused on skill‑list commands, multi‑turn skill retention, and spawn temperature control.

### 2. Releases
*No new releases today.*

### 3. Project Progress – Merged/Closed PRs (12 total)
Key features and fixes that advanced:

- **CLI Apps ([#3963](https://github.com/HKUDS/nanobot/pull/3963))** – Adds a first‑pass capability to install and run CLI tools from the CLI‑Anything registry, making them available for `@` mentions.
- **Ollama image generation ([#3946](https://github.com/HKUDS/nanobot/pull/3946))** – New `OllamaImageGenerationClient` that talks to Ollama’s `/api/generate` endpoint; supports aspect‑ratio hints and optional bearer auth.
- **OpenAI & Codex image generation ([#3954](https://github.com/HKUDS/nanobot/pull/3954))** – Adds provider support for OpenAI DALL·E and routing Codex image generation through the Responses `image_generation` tool.
- **Security – redirect validation ([#3928](https://github.com/HKUDS/nanobot/pull/3928))** – Hardens `web_fetch` against redirect‑time SSRF by validating `Location` targets before following them.
- **Cron anti‑recursion ([#2364](https://github.com/HKUDS/nanobot/pull/2364))** – Prevents cron jobs from self‑duplicating by injecting a directive that tells the agent not to create new cron tasks when run from cron.
- **Windows CI for CLI Apps ([#3965](https://github.com/HKUDS/nanobot/pull/3965))** – Makes CLI App runner tests platform‑neutral and runs the main test workflow on Windows for PR pushes.
- **Responses replay ID deduplication ([#3961](https://github.com/HKUDS/nanobot/pull/3961))** – Fixes Codex rejections of resumed conversations by using unique replay IDs for restored assistant messages.
- **Deprecated patch mode removed ([#3960](https://github.com/HKUDS/nanobot/pull/3960))** – Drops the old unified‑diff `patch` parameter from `apply_patch`, leaving only the structured `edits` array.
- **Image provider HTTP unification ([#3929](https://github.com/HKUDS/nanobot/pull/3929))** – Consolidates request posting for MiniMax and AIHubMix, and documents Gemini image base URLs.
- **Locale updates ([#3964](https://github.com/HKUDS/nanobot/pull/3964), [#3962](https://github.com/HKUDS/nanobot/pull/3962))** – Fill missing WebUI locale keys for `es`, `fr`, `id`, `ko`, `vi`, `zh‑TW`, and `ja`.

### 4. Community Hot Topics
Most commented issues and PRs today:

- **Skill list command ([#3959](https://github.com/HKUDS/nanobot/issues/3959))** – “`/skill list` shows disabled skills”. 4 comments. Users report that the built‑in skill command does not respect the `disabledSkills` config. A fix PR ([#3968](https://github.com/HKUDS/nanobot/pull/3968)) adds a `/skill` command that lists only *enabled* skills.
- **Multi‑turn skill content ([#3846](https://github.com/HKUDS/nanobot/issues/3846))** – 4 comments, 1 👍. Proposes keeping skill definitions (`skill.md`) in context across turns instead of relying on a generic `read_file` tool. Underlying pain: current approach loses skill context in long conversations.
- **Weather skill as example ([#3958](https://github.com/HKUDS/nanobot/issues/3958))** – Suggests moving the built‑in weather skill to an example folder to keep the core lean.
- **Spawn temperature parameter ([#3969](https://github.com/HKUDS/nanobot/issues/3969))** – New issue (0 comments yet) requesting the `spawn` tool accept a `temperature` override, enabling sub‑agents with different sampling temperatures for varied tasks.

### 5. Bugs & Stability
Reported bugs and regression fixes, ranked by severity:

- **Critical – Anthropic API 400 error on image reads ([#3956](https://github.com/HKUDS/nanobot/issues/3956))** – Closed. When `read_file` reads an image, the tool result stores content as a list, causing a permanent 400 error when sending history to the Anthropic API. Fixed by ensuring serialization uses a flat content block. *(No associated PR in today’s data; likely fixed earlier.)*
- **Medium – `/skill list` ignores disabledSkills ([#3959](https://github.com/HKUDS/nanobot/issues/3959))** – Open. A fix is proposed in PR [#3968](https://github.com/HKUDS/nanobot/pull/3968) (adds a new `/skill` slash command).
- **Medium – Exec config timeout capped incorrectly ([#3595](https://github.com/HKUDS/nanobot/issues/3595), [#3637](https://github.com/HKUDS/nanobot/issues/3637))** – Fixed in PR [#3967](https://github.com/HKUDS/nanobot/pull/3967) which decouples `tools.exec.timeout` from the per‑call cap and normalizes transcription `apiBase`.
- **Low – Redirect‑time SSRF ([#3928](https://github.com/HKUDS/nanobot/issues/3928))** – Already merged as PR [#3928](https://github.com/HKUDS/nanobot/pull/3928) (see Project Progress).

### 6. Feature Request Clusters
Several overlapping user requests emerged today:

| Cluster | Issues / PRs | Description |
|---------|--------------|-------------|
| **Skill management** | [#3846](https://github.com/HKUDS/nanobot/issues/3846) (multi‑turn content), [#3968](https://github.com/HKUDS/nanobot/pull/3968) (enable‑only listing), [#3958](https://github.com/HKUDS/nanobot/issues/3958) (weather as example), [#3865](https://github.com/HKUDS/nanobot/pull/3865) (BM25 router) | Users want finer control over which skills are loaded, how they’re presented, and how they persist across turns. |
| **Image generation** | [#3941](https://github.com/HKUDS/nanobot/issues/3941) (Ollama), [#3946](https://github.com/HKUDS/nanobot/pull/3946) (merged), [#3954](https://github.com/HKUDS/nanobot/pull/3954) (OpenAI/Codex merged) | Ollama image generation and additional provider support were completed today. The original requests are now satisfied. |
| **Sub‑agent temperature** | [#3969](https://github.com/HKUDS/nanobot/issues/3969) | Suggests adding a `temperature` argument to the `spawn` tool to let each sub‑agent use a different sampling temperature. |
| **Agent diagnostics** | [#3776](https://github.com/HKUDS/nanobot/pull/3776) (`nanobot doctor`) | A diagnostic command to run health checks (Python, config, API keys, etc.) is still open. |
| **Memory deduplication** | [#3952](https://github.com/HKUDS/nanobot/pull/3952) | Enhances Dream + Consolidator prompts to avoid redundant entries in long‑term memory. |

### 7. User Feedback Summary
Real pain points and use cases expressed in today’s issues:

- **Skill usability**: The `/skill` command not filtering disabled skills caused confusion. Users expect the command to reflect actual configuration.
- **Anthropic compatibility**: A tool‑result formatting edge case broke all conversations using image reads with the Anthropic provider. The fix was applied swiftly.
- **Multi‑turn value**: Maintaining skill definitions across conversation turns is important for complex workflows – the current `read_file` approach is too generic.
- **Temperature per task**: Developers want to spawn sub‑agents with different temperatures (e.g., low for parsing, high for brainstorming) without modifying the main provider config.
- **Lean core**: The weather skill being built‑in was seen as unnecessary; users prefer a minimal core with optional examples.
- **Local image generation**: The addition of Ollama image generation (merged today) directly addresses a frequent request from users running local models.

### 8. Backlog Watch
Important open items that have not seen recent maintainer activity:

- **Heartbeat reasoning decoupling ([#1443](https://github.com/HKUDS/nanobot/pull/1443))** – Open since March 2, 2026. Proposes silent heartbeat reasoning by default with an opt‑in full‑response mode. No recent comments.
- **Manifest LLM router support ([#3568](https://github.com/HKUDS/nanobot/pull/3568))** – Open since April 30, 2026. Adds Manifest as a built‑in provider. Still awaiting review.
- **`nanobot doctor` diagnostic command ([#3776](https://github.com/HKUDS/nanobot/pull/3776))** – Open since May 14, 2026. Adds a health check CLI command. Needs maintainer feedback.
- **BM25 skill router ([#3865](https://github.com/HKUDS/nanobot/pull/3865))** – Open since May 16, 2026. Promises a ~60% reduction in system prompt size by selecting only relevant skills. No maintainer response yet.
- **User confirmation for dangerous commands ([#3937](https://github.com/HKUDS/nanobot/pull/3937))** – Open since May 20, 2026. Implements a confirmation mechanism for risky exec commands (related to issue #3887). No updates since creation.

All links are to the NanoBot repository (https://github.com/HKUDS/nanobot).

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-23

## 1. Today's Activity Brief
The project saw 37 issues and 50 PRs updated in the last 24 hours. Seven issues were closed, including the high‑impact WhatsApp Web protocol crash (#6246) and a Windows shell‑tool encoding bug (#6704). Fourteen PRs were merged or closed, among them the WhatsApp protocol fix (#6706), the OTel trace enrichment (#6009), and a doctor models credential fix (#6838). No new releases were published. Several high‑profile feature PRs remain open, including Dream Mode (#6693) and the TUI integration branch (#6848), while a new bug fix for MCP tool filtering was opened today (#6861).

## 2. Releases
None.

## 3. Project Progress
*WhatsApp protocol restoration:* PR #6706 (alexandme) closed the critical bug #6246 by bumping `whatsapp-rust` to v0.6, restoring message flow after the April 2026 server‑side protocol change.

*Doctor models fix:* #6838 (puneetdixit200) merged, allowing `zeroclaw doctor models` to resolve provider credentials from the config, fixing #6756.

*OTel trace enrichment:* #6009 (alexandme) merged, adding `tool_call_id`, arguments, and result details to tracing spans, improving observability for tool failures.

*Windows shell output fix:* Issue #6704 (garbled output on non‑UTF‑8 code pages) was closed; the fix (presumably in #6772) decodes stdout/stderr using the active console code page.

*Documentation & infra:* #6769 (Project516) fixed malformed links in `philosophy.md`; #6814 corrected labeler behaviour; #6748 optimised 24 image assets; #6804 parametrised the systemd service template for non‑`pi` users.

*New bug fix opened:* #6861 (nick‑pape) corrects a bug where `tool_filter_groups` mistakenly filtered out MCP tools by checking for `__` in tool names, which also matched skill tools.

## 4. Community Hot Topics
- **Dream Mode (#5849)** – 11 comments, most active issue. Users discuss periodic memory consolidation and reflective learning. A companion PR #6693 (JordanTheJet) implements the feature but is labelled `needs-author-action`.
- **RFC: Work Lanes, Board Automation, Label Cleanup (#6808)** – 4 comments. Proposes governance changes for PR lanes and issue labelling. No maintainer response yet.
- **MCP tool_filter_groups bug (#6699)** – 6 comments, recently updated. The bug prevents MCP tool filtering from working; a fix PR (#6861) was opened today.
- **WhatsApp QR not showing (#6847)** – 2 comments, reported today as S1. User praises the tool (“Best tool out there”) but is blocked on onboarding.
- **Agent infinite loop on Termux/Android (#6036)** – 2 comments, still blocked. Affects Android users running the agent; label `needs-author-action` and `needs-repro`.

## 5. Bugs & Stability
*New S1 (workflow blocked) bugs:*
- **#6847** – WhatsApp channel does not show QR code on onboarding. No fix PR yet.
- **#6841** – `vision_provider` silently ignored; inbound images routed to fallback provider. No fix PR yet.
- **#6844** – Slack `bot_token` cannot be supplied via environment variable; blocked config. No fix PR yet.
- **#6036** – Agent enters infinite tool‑call loop on Android/Termux; blocked, awaiting repro from author.

*S2 (degraded) new bugs:*
- **#6836** – `setup.bat --minimal` produces ~26 MB instead of ~6 MB on Windows.
- **#6856** – `show_tool_calls` config option missing from v3 channel schema.
- **#6813** – Parallel dispatch test is brittle due to fixed wall‑clock threshold.

*Recently fixed bugs (closed):*
- **#6246** – WhatsApp protocol bump (fixed by #6706).
- **#6756** – Doctor models fails on custom providers (fixed by #6838).
- **#6704** – Windows shell output garbled on non‑UTF‑8 code pages.
- **#6158** – `zeroclaw-channels` fails to compile with `--no-default-features`.
- **#6801** – `purge_namespace` deletes by category column (fixed on v0.8.0 branch).
- **#5980** – OTel trace enrichment merged (#6009).

## 6. Feature Request Clusters
- **Memory & Reflection:** Dream Mode (#5849) and the `MemoryStrategy` trait proposal (#6850) both aim to decouple memory lifecycle from storage. A PR (#6693) exists but is blocked awaiting author action.
- **TUI & Runtime RPC:** A group of interlinked features: TUI Agent Chat (#6824), moving `zeroclaw-tui` to `apps/tui` (#6821), and an RPC dispatch layer over Unix sockets (#6837). PR #6848 is the integration branch for TUI, with a stacked PR clarifying first‑run UI (#6858).
- **Session-scoped overrides (#6817):** Allows per‑session model/temperature changes without daemon reload. No PR yet.
- **Skills UX (#6253):** Tracker for v0.7.6 improvements to `zeroclaw skills` CLI, loader, audit, and testing. Still in progress.
- **Channel enhancements:** Telegram custom web API endpoint (#6807), Signal emoji reactions (PR #6840, open), headed/headless browser config (#6241, closed/merged).
- **Jira integration (PR #6481):** Adds `list_transitions`, `transition_ticket`, `create_ticket` actions; labelled `needs-author-action`.

## 7. User Feedback Summary
- **Onboarding friction:** Several channel‑specific setup blockers: WhatsApp QR not shown (#6847), Slack token not accepting environment variables (#6844), Telegram custom API endpoint request (#6807).
- **Streaming & provider issues:** A user reports that a custom HTTP provider causes the agent to hang after a streaming decode error, with GPU usage stuck at 50% (#6243). No maintainer response yet.
- **Windows builds:** A user reports `setup.bat --minimal` produces 26 MB instead of the documented 6 MB (#6836). This suggests the build flags may not be trimming dependencies as expected.
- **General appreciation:** In #6847, a user explicitly calls ZeroClaw “the best tool out there” and wishes more stars, indicating strong satisfaction despite the bug.
- **Convenience features:** Users request environment‑variable support for secrets (e.g., Slack token) and the ability to specify custom API endpoints for Telegram, reflecting a desire for flexible deployment.

## 8. Backlog Watch
- **#6036 (Agent infinite loop on Android/Termux)** – S1 bug, blocked; has `needs-author-action` and `needs-repro` labels. Last maintainer response unknown.
- **#6243 (Streaming error with custom HTTP provider)** – S1, blocked; no maintainer action recorded.
- **#6074 (Audit: 153 commits lost in bulk revert)** – Open since April 24, no recent activity. Important for code recovery but no PR yet.
- **PR #6481 (Jira actions)** – Labelled `needs-author-action`; no reviews. Awaiting author updates.
- **PR #6693 (Dream Mode implementation)** – Labelled `needs-author-action`; author has not responded to feedback.
- **PR #6840 (Signal reactions)** – Labelled `needs-author-action`; author may need to address review comments.
- **#6503 (Tauri dependency bump)** – A dependabot PR open since May 7 with no reviews; version 2.11.1 may include security fixes.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ Summary generation failed.

</details>