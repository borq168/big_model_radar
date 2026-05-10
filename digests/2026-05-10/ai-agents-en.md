# OpenClaw Ecosystem Digest 2026-05-10

> Issues: 500 | PRs: 500 | Projects covered: 4 | Generated: 2026-05-10 02:05 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-05-10

## 1. Today's Activity Brief
- **500 issues** updated in the last 24 hours (452 open/active, 48 closed).
- **500 pull requests** updated (330 open, 170 merged/closed).
- **1 new release** published: `v2026.5.9-beta.1`.
- Major ongoing work includes a database-first runtime refactor moving session state into SQLite (#78595) and the addition of World ID AgentKit human-in-the-loop approvals (#78583).
- A new PR introducing a `doctor` command with detection and validation support (#80055) opened today.

## 2. Releases
**v2026.5.9-beta.1** (2026-05-09)
- **Chat commands**: Added `/think default` and `/fast default` to clear session-level overrides and fall back to configured/provider defaults (#79385, thanks @VACInc).
- **Dependency refresh**: Updated workspace pins and lockfile, including `@openai/codex` `0.130.0`, `acpx` `0.7.0`, and AWS SDK `3.1044.0`.
- No breaking changes or migration notes were provided.

## 3. Project Progress (Merged/Closed PRs Today)
Several PRs merged or closed on 2026-05-10:

- **#80029** (closed): Reorganized Codex harness docs into a topic page with dedicated sections for setup, configuration, routing, and troubleshooting.
- **#74756** (closed): Exposed child process PID in `sessions_spawn` results for ACP sessions (#74684).
- **#74035** (closed): Added `persist` flag and `trustedSources` config for skills, allowing operators to skip code safety scanning for designated sources (#73549).
- **#73959** (closed): Added `modelContextWindowOverrides` for per-model context window config in Amazon Bedrock (#73328).
- **#67115** (closed): Fixed macOS GUI detection when SSH environment variables are present (#67088).
- **#79866** (closed): Changed memory recall status from `empty` to `no-results` for normal, no-match queries.
- **#80003** (closed): Surfaced `exec`/`bash` tool failures as concise warnings instead of silent suppression.
- **#79801** (closed): Fixed `channelSummary` to include external channel plugins via setup fallback.
- **#80028** (closed): Improved sub-agent orchestration with stronger delegation prompts, `sessions_yield` support, and stable `taskName` handling.

## 4. Community Hot Topics
The following issues and PRs generated the most discussion and reactions:

- **#75** (104 comments, 74 👍): Request for Linux and Windows desktop apps (Clawdbot), similar to existing macOS/iOS/Android versions. *Long-standing request with high engagement.*
- **#14593** (29 comments, 17 👍): `brew not installed` error when running `openclaw onboard` inside Docker on Linux. *Blocks skill installation for container users.*
- **#9443** (24 comments, 1 👍): Request for prebuilt Android APK releases in GitHub releases. *Community member submitted on behalf of another user.*
- **#22438** (16 comments): Proposal for tiered bootstrap file loading to save LLM tokens – load only relevant files per session.
- **#32473** (15 comments, 4 👍): Regression requiring HTTPS or localhost for Control UI after recent changes; users on VPS/Docker cannot access.
- **#12602** (13 comments): Feature request for Slack Block Kit support to enable richer agent messages (CRMs, briefings, buttons).
- **#29387** (13 comments, 4 👍): Bootstrap files placed in per-agent directories are silently ignored; only workspace-level files are loaded.
- **#10659** (12 comments, 4 👍): Request for “masked secrets” to prevent agents from seeing raw API keys while still using them.
- **#6731** (12 comments): Proposal to rewrite ClawdBot in Rust for safe/unsafe modes.
- **#31583** (11 comments, 1 👍): Regression: `exec` tool does not inherit `skills.entries.*.env` environment variables. *Blocks secret injection for subprocesses.*

## 5. Bugs & Stability
**High-severity bugs reported or active today:**

- **#14593** (Docker): `brew not installed` prevents skill installation in official container. *No known fix PR.*
- **#32473** (Regression): Control UI refuses to run over HTTP (non-secure context). Affects VPS/Docker users without HTTPS. *No fix noted.*
- **#29387** (Behavior): Per-agent bootstrap files silently ignored. *Aims to fix #22438 but different scope.*
- **#31583** (Regression): `exec` tool missing env vars from skill config. *Workaround exists but no official fix.*
- **#38439** (Regression): Webchat avatar endpoint returns 404 even with valid `IDENTITY.md`.
- **#39038** (Crash): OpenClaw node on Windows 11 24H2 hangs at PATH output, cannot connect to Gateway.
- **#38327** (Regression): “Cannot convert undefined or null to object” with `google-vertex/gemini-3.1-pro-preview` in v2026.3.2.
- **#79531** (Behavior): Telegram forum topic sessions stop responding intermittently while DMs work.
- **#39223** (Behavior): Configure wizard hangs at Gateway selection, blocking OAuth for Anthropic.
- **#31331** (Behavior): Docker + sandbox combination fails to mount workspace correctly.

**Bug-fix PRs merged or submitted today:**
- **#79418** (open): Fixes CPU spin/crash loop on Raspberry Pi 4 (ARM64) due to negative delay in heartbeat scheduler.
- **#80054** (open): Ignores unsupported Gemini ACP timeout controls to prevent lane failures.
- **#80049** (open): Stops raw tool output from leaking into sub-agent completion announces (#79986).
- **#80053** (open): Honors explicit `cwd` in `sessions_spawn` for native sub-agent runtime.
- **#80003** (merged): Surfaces exec failures instead of silent swallowing.
- **#80022** (open): Allows cron runs inspection in self-remove scope.

## 6. Feature Request Clusters
**Multi-platform and deployment:**
- Linux/Windows desktop apps (#75, 104 comments).
- Prebuilt Android APK (#9443, 24 comments).
- AWS deployment guide (#13597, 6 comments).
- Docker-specific improvements (#14593, #31331).

**Secrets and security:**
- Masked secrets to hide API keys from agents (#10659, 12 comments).
- Native secrets management integration (AWS Secrets Manager, Vault) (#13610, 7 comments).
- Skill permission manifest standard (#12219, 5 comments).
- Security Profile v1.1 with data-centric secure-by-default (#8719, 6 comments).
- Denylist support for exec-approvals (#6615, 7 comments).

**Agent collaboration and orchestration:**
- Capability profiling + shared blackboard + layered memory (#35203, 7 comments).
- Pre-response enforcement hooks (#13583, 10 comments).
- Announce target routing for sub-agent completions (#27445, 9 comments).
- Suppress sub-agent announce (#8299, 6 comments).
- Multi-agent collaboration enhancement RFC (#35203).

**Messaging channel improvements:**
- Slack Block Kit (#12602, 13 comments); tool-level progress in Slack thread status (#33413, 7 comments).
- Telegram Business bot support (#20786, 7 comments); allowBots for Telegram groups (#8295, 6 comments); resolve forum topic bottlenecks (#76951, PR).
- Message delete/revoke for WhatsApp (#14344, 5 comments).

**Memory and context:**
- Recursive subdirectory search for memory (#34400, 10 comments).
- Memory/embedding setup as mandatory onboarding step (#16670, 8 comments).
- Tiered bootstrap file loading (#22438, 16 comments).
- Session snapshots (#13700, 6 comments).

**Tool schema and token optimization:**
- Reduce tool schema token overhead (#14785, 6 comments).
- Before/after tool call hooks exposure (#13364, 6 comments).

**UI and customization:**
- Theme customization system with preset themes and studio (#28300, 6 comments).
- Control UI HTTPS requirement workaround (#32473).

**Other notable requests:**
- SQLite transcript/seams for companions (#79902, 10 comments).
- Fallback approval mode + model attribution (#33975, 6 comments).
- Webhook hook session reuse for multi-turn (#11665, 6 comments).
- Anthropic native server-side tools support (#23353, 5 comments).

## 7. User Feedback Summary
**Pain points expressed by users:**
- **Docker users blocked**: `brew not installed` error (#14593) prevents skill installation entirely.
- **Platform lock-in**: No Linux/Windows desktop apps (#75) and no prebuilt Android APK (#9443) force users to build from source or use alternative platforms.
- **Configuration frustrations**: Control UI requires HTTPS → Docker/VPS users cannot access (#32473); per-agent bootstrap files ignored (#29387); `exec` tool missing env vars (#31583).
- **Memory setup not guided**: Onboarding wizard lacks memory/embedding configuration (#16670).
- **Telegram

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-05-10

## 1. Daily Cross-Project Overview

Today’s data shows OpenClaw dominating in raw volume (500 issues and 500 PRs updated) with a new beta release and a major database runtime refactor underway. NanoBot saw moderate PR activity (136) but low issue churn, with a focus on internal refactoring and a state-machine rewrite. ZeroClaw merged a landmark multi-agent runtime feature onto its v0.8.0 integration branch, alongside several focused bug fixes. PicoClaw released a nightly build and merged a cluster of features including xAI provider support, multi-agent discovery, and steering-chain UX improvements. Across all projects, multi-agent orchestration, security/approval mechanisms, and provider interoperability issues are recurring themes.

## 2. Activity Comparison

| Project   | Issues Updated | PRs Updated | Release Today? | Activity Note |
|-----------|---------------|-------------|----------------|---------------|
| OpenClaw  | 500 (452 open, 48 closed) | 500 (330 open, 170 merged/closed) | Yes – v2026.5.9-beta.1 | Very high volume; database refactor, health command, World ID approvals |
| NanoBot   | 13 (4 open, 9 closed) | 136 (106 open, 30 merged/closed) | No | Moderate PRs; refactoring of message loop, HookCenter typed events, bug fixes |
| ZeroClaw  | 50 (2 closed, remainder open) | 42 (42 updated, 9 merged/closed) | No | Elevated activity; multi-agent runtime landed on v0.8.0, 9 bug fixes merged |
| PicoClaw  | 13 (10 open, 3 closed) | 25 (15 open, 10 merged/closed) | Yes – v0.2.8-nightly | High per-project; steering-chain UX, spawn routing, MCP transport, xAI provider merged |

## 3. OpenClaw Compared With Peers

OpenClaw’s activity volume is approximately 10× the next busiest project in issues and 3–4× in PRs. Technically, OpenClaw is the only project currently undertaking a database‑first runtime refactor (moving session state into SQLite) and integrating World ID AgentKit for human‑in‑the‑loop approvals—features not seen elsewhere. Its community surface area is larger, with long‑standing requests (Linux/Windows apps, prebuilt APK) accumulating 100+ comments each, while bugs like Docker `brew not installed` (#14593) block entire user segments. By contrast, NanoBot’s community discussion is more contained (e.g., Web UI interest resolved via third‑party fork), and ZeroClaw and PicoClaw show more targeted, issue‑driven discussions with faster bug‑fix cycles (many PRs merged within days).

## 4. Shared Technical Focus Areas

- **Multi‑agent / Sub‑agent orchestration**: OpenClaw (#80028, sub‑agent delegation with `sessions_yield`), ZeroClaw (#6545, full multi‑agent runtime on v0.8.0 branch), PicoClaw (#2790, spawn routing to target agent; #2158, multi‑agent discovery prompt).
- **Security & tool approval**: OpenClaw (#74035, trusted sources for skills; #10659, masked secrets), ZeroClaw (#6539, shell approval in direct sessions), PicoClaw (#2836, PowerShell injection fix; #2837, agent tool policy filters).
- **Channel‑specific improvements**: OpenClaw (Telegram forum topic issues #79531), ZeroClaw (#6378 Discord channel restriction request), PicoClaw (#2421 email channel request). NanoBot also has Feishu topic isolation requests (#3692).
- **Provider interoperability bugs**: OpenClaw (#38327, Google Vertex “null or object” error), NanoBot (Anthropic streaming timeout #2709), ZeroClaw (#6298 empty `tool_calls` array, #6361 context compression dropping tool calls), PicoClaw (#2674 Codex OAuth empty response, #2745 OpenRouter reasoning leak).
- **Context & memory management**: OpenClaw (memory recall status change #79866, tiered bootstrap loading #22438), NanoBot (interrupted session loss #3689, last_summary persistence #3685), ZeroClaw (context compression bug #6361).

## 5. Differentiation Analysis

- **OpenClaw** positions itself as the core reference implementation with extensive security infrastructure (World ID, trust policies, secrets masking) and heavy investment in runtime architecture (SQLite refactor, doctor command, advanced sub‑agent orchestration). Its community demands cross‑platform desktop apps and Docker usability—indicating a broad user base that includes both developers and end users.
- **NanoBot** focuses on lightweight agent loop design and channel integrations (WeChat, Feishu, Telegram). Its architecture emphasizes maintainability (state‑machine rewrite, HookCenter event system) and a growing third‑party web UI. The project is less feature‑dense but responsive to bug reports and contributor PRs.
- **ZeroClaw** is building toward a v0.8.0 release with multi‑agent runtime as its marquee feature, combined with a strong Rust/CLI foundation and active bug‑fix culture. Its community encounters production‑grade issues (provider strictness, Discord media broken) that suggest mid‑scale deployments.
- **PicoClaw** targets embedded/low‑resource environments (Sipeed hardware) and differentiates with nightly builds, steering‑chain UX (synthesized final replies), agent‑level tool policies, and MCP transport support. It merges features quickly but also faces security and OAuth handling challenges.

## 6. Community Activity Notes

- **Tier 1 – Very High Volume**: OpenClaw (500 issues, 500 PRs, a beta release). The sheer count suggests significant ongoing development and community engagement, but also a high number of open issues (452) and open PRs (330).
- **Tier 2 – Moderate Volume**: ZeroClaw (50 issues, 42 PRs, no release) and NanoBot (13 issues, 136 PRs, no release). Both show focused activity: ZeroClaw on feature integration and bug fixes, NanoBot on refactoring and documentation.
- **Tier 3 – Moderate but Concentrated**: PicoClaw (13 issues, 25 PRs, nightly release). Despite lower counts, the high merge rate (10 PRs closed) and release cadence indicate an active small team.

No project showed declining engagement; all had measurable daily updates.

## 7. Evidence‑Backed Observations

1. **Multi‑agent orchestration is a cross‑project priority.** OpenClaw (#80028), ZeroClaw (#6545), and PicoClaw (#2790, #2158) all shipped or advanced sub‑agent/multi‑agent features today. ZeroClaw’s is the most structural (schema primitives, database migrations on the v0.8.0 branch); OpenClaw’s is at the delegation‑prompt level; PicoClaw’s focuses on routing and discovery.

2. **Security and tool‑approval mechanisms are being strengthened in all four projects.** OpenClaw added World ID AgentKit and trusted source configs; ZeroClaw merged shell approval checks; PicoClaw merged a PowerShell injection fix and is adding agent‑level tool `allow`/`deny` policies. NanoBot’s security posture is less visible but its HookCenter PR (#3564) could introduce plugin‑level controls.

3. **Provider compatibility remains a significant pain point across the ecosystem.** Every project reported at least one bug caused by strict JSON schemas (ZeroClaw #6298), empty responses (PicoClaw #2674), reasoning leaks (PicoClaw #2745), streaming timeouts (NanoBot #2709), or proprietary API quirks (OpenClaw #38327, #79531). These are not isolated incidents but recurring friction for users deploying across multiple LLM backends.

4. **Channel‑specific feature requests indicate demand for richer collaboration patterns.** OpenClaw’s Telegram forum topics (#79531), ZeroClaw’s Discord channel restriction (#6378), NanoBot’s Feishu topic isolation (#3692), and PicoClaw’s email channel request (#2421) all ask for more controlled per‑channel behavior. No project has a universal solution; workarounds are channel‑by‑channel.

5. **Refactoring for maintainability is active in NanoBot and ZeroClaw, while OpenClaw and PicoClaw lean into new features.** NanoBot rewrote its 300‑line message loop into a state machine and introduced `AgentLoop.from_config()`; ZeroClaw merged multiple focused bug fixes and is building a new runtime branch. OpenClaw is deep into a database refactor but also adding `doctor` commands and World ID; PicoClaw is adding xAI support, MCP transport, and steering‑chain UX rather than restructuring existing code.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest – 2026-05-10

## 1. Today's Activity Brief
In the last 24 hours, NanoBot saw 13 issues updated (4 open, 9 closed) and 136 pull requests updated (106 open, 30 merged/closed). No new releases were published. Notable activity includes the closure of long‑standing discussions around Web UI support, several bug fixes merging (e.g., unreachable dead code, CLI spinner corruption), and the introduction of a refactored `AgentLoop.from_config()` and a new `HookCenter` typed‑event system. The community continues to push for a built‑in web interface and more flexible topic isolation in channel integrations.

---

## 2. Releases
No new releases today.

---

## 3. Project Progress
Thirty PRs were merged or closed today. Key advances include:

- **Refactoring & Maintainability**
  - [#3715](https://github.com/HKUDS/nanobot/pull/3715) – Refactored the 300‑line `_process_message` method into an explicit functional state machine (`RESTORE → COMPACT → COMMAND → BUILD → RUN → SAVE → RESPOND`).
  - [#3708](https://github.com/HKUDS/nanobot/pull/3708) – Introduced `AgentLoop.from_config()` to centralize loop assembly across CLI commands and the `Nanobot` facade (PR 1/4 of the model‑preset feature).
  - [#3719](https://github.com/HKUDS/nanobot/pull/3719) – Removed unreachable dead code in `find_legal_message_start` (fixes [#3716](https://github.com/HKUDS/nanobot/issues/3716)).

- **Bug Fixes & Stability**
  - [#3705](https://github.com/HKUDS/nanobot/pull/3705) – Fixed CLI spinner corruption when retry/progress messages are printed.
  - [#3685](https://github.com/HKUDS/nanobot/pull/3685) – Persists `_last_summary` across process restarts to prevent loss of archived conversation context.
  - [#3680](https://github.com/HKUDS/nanobot/pull/3680) – Added sanity check for corrupted session files where `last_consolidated` exceeds message count.
  - [#3720](https://github.com/HKUDS/nanobot/pull/3720) – Ensures cron reminders are streamed with `stream_id` and `turn_end` (fixes [#3718](https://github.com/HKUDS/nanobot/issues/3718)).

- **Documentation & Tooling**
  - [#3534](https://github.com/HKUDS/nanobot/pull/3534) – Added `CLAUDE.md` and `.agent/` guides for AI contributors.

- **Web UI & Configuration**
  - [#3709](https://github.com/HKUDS/nanobot/pull/3709) – Extended WebUI BYOK settings to include Web Search credential configuration.
  - [#3714](https://github.com/HKUDS/nanobot/pull/3714) – Added `ModelPresetConfig` and runtime preset switching (new feature PR).

---

## 4. Community Hot Topics
- **Web UI Discussions**
  Issue [#2949](https://github.com/HKUDS/nanobot/issues/2949) (“Should nanobot have its own WebUI?”) was closed after 10 comments and 13 👍, reflecting strong community interest. A third‑party project [nanobot-webui](https://github.com/Good0007/nanobot-webui) was shared in [#1922](https://github.com/HKUDS/nanobot/issues/1922) (9 comments, 10 👍). A separate feature request [#3059](https://github.com/HKUDS/nanobot/issues/3059) for a built‑in Web UI was also closed, indicating the discussion has converged toward integration.

- **Update Command**
  Issue [#3421](https://github.com/HKUDS/nanobot/issues/3421) (“RFC: Should we add a `nanobot update` command?”) garnered 4 comments and was closed, suggesting maintainers may act on this.

- **Hook System**
  PR [#3564](https://github.com/HKUDS/nanobot/pull/3564) (HookCenter typed‑event system with plugin support) remains open and is one of the most substantial architectural proposals under review.

*Note: PR comment counts were not available in the data provided.*

---

## 5. Bugs & Stability
| Bug | Status | Severity | Fix PR |
|-----|--------|----------|--------|
| [#3718](https://github.com/HKUDS/nanobot/issues/3718) – Cron reminders stream without `stream_id` | **Open** | High – breaks client‑side streaming parsing | [#3720](https://github.com/HKUDS/nanobot/pull/3720) (open) |
| [#3716](https://github.com/HKUDS/nanobot/issues/3716) – Unreachable dead code in `helpers.py` | **Closed** | Low – no functional impact | [#3719](https://github.com/HKUDS/nanobot/pull/3719) (merged) |
| [#3674](https://github.com/HKUDS/nanobot/issues/3674) – WebSocket channel silently drops `media` field | **Closed** | Medium – file attachments lost | (closed without details, likely fixed earlier) |
| [#2709](https://github.com/HKUDS/nanobot/issues/2709) – LLM streaming timeout error with Anthropic | **Closed** | Medium – advisory, workaround exists | (closed) |
| [#3689](https://github.com/HKUDS/nanobot/issues/3689) – Interrupted session loses prior conversation context | **Open** | High – disrupts multi‑step tasks | No fix PR yet |
| [#3692](https://github.com/HKUDS/nanobot/issues/3692) – Feishu topic isolation lacks configurable switch | **Open** | Medium – users need control | No fix PR yet |
| [#3712](https://github.com/HKUDS/nanobot/pull/3712) – Corrupted session file handling (open PR) | **Open** | Medium – data loss risk | [#3712](https://github.com/HKUDS/nanobot/pull/3712) (open) |

Overall bug activity is moderate; the most critical open bugs involve streaming completeness and conversation persistence.

---

## 6. Feature Request Clusters
- **Web User Interface** – Multiple requests over the past month ([#2949](https://github.com/HKUDS/nanobot/issues/2949), [#1922](https://github.com/HKUDS/nanobot/issues/1922), [#3059](https://github.com/HKUDS/nanobot/issues/3059)) have been closed, suggesting the team is likely working on an official integrated Web UI or has accepted the community project.
- **CLI & Developer Experience** – [#3421](https://github.com/HKUDS/nanobot/issues/3421) requested a `nanobot update` command; the RFC was closed, indicating possible implementation.
- **Channel Enhancements**
  - [#3692](https://github.com/HKUDS/nanobot/issues/3692) – Configurable Feishu topic isolation (open).
  - [#2389](https://github.com/HKUDS/nanobot/issues/2389) – OpenWebUI as a channel (closed).
  - [#3558](https://github.com/HKUDS/nanobot/pull/3558) – Feishu emoji reaction allowlist/dynamic update (open PR).
- **Model & Presets** – [#3714](https://github.com/HKUDS/nanobot/pull/3714) introduces named model presets and runtime switching (open PR).
- **Audio/Voice** – [#3723](https://github.com/HKUDS/nanobot/pull/3723) adds local Whisper transcription via `faster-whisper` (open PR).
- **Plugin System** – [#3564](https://github.com/HKUDS/nanobot/pull/3564) (HookCenter) and [#1012](https://github.com/HKUDS/nanobot/issues/1012) (subagent profiles) remain open and represent longer‑term architecture improvements.

---

## 7. User Feedback Summary
- **Positive sentiment**: Users express enthusiasm (“CONGRATS for this awesome project! I'm greatly enjoying it” – [#510](https://github.com/HKUDS/nanobot/issues/510)). The community is actively contributing third‑party tools ([nanobot-webui](https://github.com/Good0007/nanobot-webui)) and submitting detailed bug reports.
- **Common pain points**:
  - Lack of a built‑in web interface for management and chat.
  - Need for a convenient CLI update mechanism.
  - Streaming / timeout issues with certain LLM providers.
  - Conversation context loss after interruptions or process restarts.
  - Media files dropped in WebSocket channel.
  - Feishu topic isolation not configurable.
- **Use cases**: Users are deploying NanoBot in group chats (WeChat, Feishu, Telegram), need file processing, cron reminders, and task automation. They expect robust context retention and seamless multi‑modal attachment handling.

---

## 8. Backlog Watch
- [#1012](https://github.com/HKUDS/nanobot/issues/1012) – *Add subagent profiles with configurable tools and skills* (created 2026‑02‑22, last updated 2026‑05‑09, 1 comment). This request for specialized subagent types has been open for over two months with no maintainer response. It represents a significant missing feature for advanced multi‑agent setups.
- [#3723](https://github.com/HKUDS/nanobot/pull/3723) – *Local whisper transcription* (open, created today) – a major new capability; requires review and testing.
- [#3689](https://github.com/HKUDS/nanobot/issues/3689) – *Interrupted session loses prior conversation context* (open, 1 comment) – a reported regression in context persistence that could undermine user trust; no fix has been merged yet.
- [#3692](https://github.com/HKUDS/nanobot/issues/3692) – *Feishu topic isolation switch* (open, 1 comment) – a moderate enhancement that would improve usability for file‑heavy workflows.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-10

## Today's Activity Brief

Activity remains elevated: 50 issues and 42 PRs updated in the last 24 hours, with 2 issues closed and 9 PRs merged or closed. No new releases were published. The most significant concrete update is the landing of the multi-agent runtime feature (PR #6545) on the v0.8.0 integration branch, representing a major structural change. A series of focused fixes also merged today, including the SopEngine reload bug (PR #6534) and a gateway pairing code fix (PR #6192), alongside several ongoing PRs addressing session ownership, tool protocol suppression, and build infrastructure.

## Releases

No new releases in the last 24 hours.

## Project Progress

**Merged/Closed PRs (9 total):**
- **#6534** (`fix(sop): call reload() after SopEngine construction` — by @Yyukan): Fixes a critical bug where the SOP engine was never loaded at runtime because neither call site invoked `reload()`. Effectively no SOPs were ever executed. This PR was closed/merged.
- **#6192** (`fix(gateway): target paircode retrieval to running instance` — by @nebullii): Adds `--port` and `--host` flags to `zeroclaw gateway get-paircode` so the command targets the actual running instance rather than defaults.
- **#6541** (`fix(channels): scope session key for channel tools` — by @Audacity88): Scopes `TOOL_LOOP_SESSION_KEY` per channel session, fixing a session identification bug.
- **#6539** (`fix(runtime): require shell approval in direct sessions` — by @Audacity88): Ensures shell commands in direct sessions go through the appropriate approval flow.
- **#6546** (`fix(agent): suppress tool protocol when no tools are available` — by @Audacity88): Stops the runtime from telling small/local models about unavailable tools or XML syntax.
- **#6540** (`fix(build): route source web builds through cargo` — by @Audacity88): Fixes stale API client generation during Docker/web builds.
- **#6533** (`fix(config): respect ZEROCLAW_CONFIG_DIR in path field defaults` — by @flyin1600): Makes seven path-field defaults respect the `ZEROCLAW_CONFIG_DIR` env var.
- **#6544** (`fix(runtime): omit native tool prompt catalog` — by @Audacity88): Recovers native-tools prompt cleanup to avoid duplicate tool specs in the prompt.
- **#6552** (`fix: keep system messages at the start of chat history` — by @drbparadise): Normalizes runtime chat history to merge all system messages into the first message before provider dispatch.

**Major feature progress:**
- **PR #6545** (`feat(runtime): #6272 multi-agent runtime` — by @singlerider): Lands full multi-agent runtime on the `integration/v0.8.0` branch, including schema primitives, cross-reference validators, per-backend agent tables, and migration support for SQLite/Postgres/Lucid. This is the v0.8.0-only feature tracked by issue #6272.

## Community Hot Topics

- **Issue #6378** — [Feature]: Discord Bot respond only in specific Discord channels (5 comments, ~6 days open). Request for an `allowed_channels` config field to restrict bot responses, mirroring existing Matrix/Nextcloud patterns. This has strong community support with a clear, well-defined use case.

- **Issue #6530** — [Bug]: Build failure with matrix-sdk v0.16.0 causing recursion limit overflow (3 comments, ~3 days open). Blocks compilation with Matrix channel support. Maintainers have labelled it `status:blocked`.

- **Issue #6298** — [Bug]: Empty `tool_calls` array sent to provider API causing 400 errors on strict validators (3 comments, ~8 days open). Affects DeepSeek and NVIDIA NIM users. Labelled `priority:p1` and `status:accepted`.

- **Issue #6361** — [Bug]: context_compression drops assistant(tool_calls) and tool(result) entirely for OpenAI-compatible providers (2 comments, ~6 days open). Causes tool loops and role errors with MiniMax. A fix PR (#6362) is open and in progress.

**Underlying needs:** Users are hitting real production issues — tool call serialization problems with strict providers, build breakage from dependency updates, and missing channel configuration options that exist in other channels. The common thread is a need for provider interoperability and finer-grained channel control.

## Bugs & Stability

**High-severity bugs reported today:**
- **#6551** — Non-leading system messages can be sent to OpenAI-compatible providers (S1 - workflow blocked). Fix PR #6552 exists and appears to have merged.
- **#6556** — Discord channel media send/receive broken: inbound images never processed, non-image types dropped, outbound markers leak (S2 - degraded behavior). No fix PR yet.
- **#6548** — Channel runtime command replies bypass Fluent localization (S3 - minor). Reported today, no fix yet.
- **#6557** — Reconcile runtime model switching with provider structure for v0.8.0 (opened today, no severity). Planning issue.

**Previously reported high-severity bugs with progress:**
- **#6361** (context_compression drops tool calls) — Fix PR #6362 is open.
- **#6298** (empty `tool_calls` array) — Accepted, awaiting fix.
- **#6309** (model_routing_config stomps on schema_version=2 settings) — Accepted.
- **#6528** (Trust system CA for provider requests) — Needs maintainer review.
- **#6520** (Gemini CLI provider crashes due to outdated `--print` vs `--prompt` syntax) — Accepted.
- **#6517** (Context overflow causes hallucination/topic drift) — Needs author action.
- **#6433** (Heartbeat not working with Matrix channel) — In progress.
- **#6422** (cron_add schedule error message unhelpful for plain string input) — Accepted.
- **#6419** (WorkspaceManager fails to load profiles on Windows) — Accepted.

**Closed bugs:**
- **#6039** — Copilot provider does not handle image uploaded via Discord channel (closed, fix previously deployed).
- **#6404** — MCP HTTP/SSE timeout policy gaps (closed, previously fixed by #5945 and #6397).

## Feature Request Clusters

- **Discord channel control** (#6378): Request for `allowed_channels` config to restrict bot responses. No related PR.
- **Multi-agent runtime** (#6272): Fully addressed by PR #6545 on the `integration/v0.8.0` branch.
- **Skills support UX** (#6253): Coordinating tracker for v0.7.6 theme. No specific PR yet.
- **Tool approval UI** (#6522): Web frontend needs to handle WebSocket approval frames for supervised tool execution. No fix PR yet.
- **Per-channel reply rate limiting** (#6345): Request for `reply-min-interval-secs` config. Accepted, in progress.
- **cron announce mode improvement** (#6510): Opt-in flag to deliver only final assistant message. Accepted.
- **Desktop/CI enhancements** (#6339, #6327, #6329): Universal macOS binary, desktop channels overview, tray menu items. All accepted.

## User Feedback Summary

- **Pain points from issues:**
  - Discord image handling is broken in multiple ways (inbound images never reach agent, non-images dropped, markers leak) — see #6556.
  - OpenAI-compatible provider strictness is causing tool call failures (#6298, #6361, #6551).
  - Gemini CLI provider crashes immediately due to outdated argument syntax (#6520).
  - Context overflow leads to hallucination, felt during long conversations (#6517).
  - No way to restrict Discord bot to specific channels (#6378) or throttle reply rate (#6345).
  - Localization gaps: hard-coded English strings in channel runtime replies (#6548).
  - Cron `delivery.mode = "announce"` floods channel with all intermediate reasoning text (#6510).
  - Email channel had confusing default subject and broken HTML rendering (#6512 — fix PR open).
  - Homebrew merge failure for version 0.7.5 (#6547 — user just reporting, not proposing code).

- **Positive signals:** Users are actively filing detailed bug reports with reproduction steps, suggesting a committed user base. Multiple users are contributing PRs (Audacity88 alone authored 5+ PRs today).

## Backlog Watch

- **Issue #5833** — Session ownership model for destructive operations (opened Apr 17, labelled `needs-maintainer-review`). Session keys are not scoped per-agent, allowing any agent to reset/delete another's sessions. Security concern with no recent maintainer response.
- **Issue #6074** — Audit tracking 153 commits lost in a bulk revert (opened Apr 24, labelled `risk: high`). Important for recovery but no recent activity beyond today.
- **Issue #6311** (not in top 30 but noted in earlier context) — User profile template rendering issue. Not visible in today's top issues.
- **Issue #6528** — Trust system CA for provider requests (opened May 8, `needs-maintainer-review`). Blocks users with self-signed certificate providers.
- **Issue #6518** — First-class support for custom/OpenAI-compatible providers (opened May 7, `needs-maintainer-review`). User describes a long series of non-obvious workarounds needed for providers like Kimi K2.5.
- **Issue #6361** (context_compression bug) — Also `needs-maintainer-review`. Fix PR #6362 is open but not yet reviewed.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest – 2026-05-10

## 1. Today's Activity Brief

Activity was high: 13 issues updated (10 open, 3 closed) and 25 PRs updated (15 open, 10 merged/closed) in the last 24 hours. A nightly build (v0.2.8‑nightly) was released. Development focus centered on steering‑chain UX improvements, spawn tool routing, agent tool policy filters, MCP transport support, and bug fixes across Telegram, web UI, and provider integrations. Several long‑standing feature PRs (xAI provider, multi‑agent discovery, Google Antigravity token refresh) were finally merged.

## 2. Releases

**Nightly Build** — `v0.2.8-nightly.20260510.6e6293e5`
Automated build, may be unstable. No documented breaking changes or migration notes.
Full changelog: [https://github.com/sipeed/picoclaw/compare/v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

## 3. Project Progress

Nine PRs were merged/closed today, representing notable advances:

| PR | Summary |
|----|---------|
| [#2842](https://github.com/sipeed/picoclaw/pull/2842) | Synthesize steering‑chain final replies from action log (new feature) |
| [#2823](https://github.com/sipeed/picoclaw/pull/2823) | Dismiss tool feedback when outbound is skipped (bug fix) |
| [#2828](https://github.com/sipeed/picoclaw/pull/2828) | Transcribe queued voice follow‑ups (bug fix) |
| [#2793](https://github.com/sipeed/picoclaw/pull/2793) | Fix hidden tools promoted in parent registry instead of subagent’s (bug fix) |
| [#2790](https://github.com/sipeed/picoclaw/pull/2790) | Route spawn tool to target agent (multi‑agent feature fix) |
| [#2630](https://github.com/sipeed/picoclaw/pull/2630) | Show full reply datetime in web UI (enhancement) |
| [#2260](https://github.com/sipeed/picoclaw/pull/2260) | Add xAI provider support via OpenAI‑compatible path (feature) |
| [#2163](https://github.com/sipeed/picoclaw/pull/2163) | Maintain OAuth scopes during Google Antigravity token refresh (bug fix) |
| [#2158](https://github.com/sipeed/picoclaw/pull/2158) | Multi‑agent discovery prompt (feature) |

Additionally, issues [#2665](https://github.com/sipeed/picoclaw/issues/2665) (Anthropic model IDs) and [#1347](https://github.com/sipeed/picoclaw/issues/1347) (GitHub Device Code Auth) were closed.

## 4. Community Hot Topics

Issues with the most comments or reactions in the last 24h:

- [#2421](https://github.com/sipeed/picoclaw/issues/2421) – **Feature: Email as native channel**
  (5 comments, 1 👍) Users in corporate/conservative environments request email support.

- [#2546](https://github.com/sipeed/picoclaw/issues/2546) – **Feature: OAuth 2.1 + PKCE for MCP servers, addable from dashboard**
  (4 comments) Non‑technical users need a URL‑paste flow to connect OAuth‑protected MCP servers.

- [#2674](https://github.com/sipeed/picoclaw/issues/2674) – **Bug: Codex OAuth – empty assistant response**
  (2 comments, 3 👍) High reaction count; ChatGPT backend returns empty results when streaming `response.output_item.done`.

- [#2782](https://github.com/sipeed/picoclaw/issues/2782) – **Feature: MCP client support for Streamable HTTP transport**
  (1 comment) Growing demand as MCP servers switch from SSE to the new Streamable HTTP protocol.

- [#2745](https://github.com/sipeed/picoclaw/issues/2745) – **Bug: OpenRouter reasoning model leaks thinking into assistant content**
  (1 comment, but stale) Reasoning preamble appears in final message.

PRs receiving attention today include the steering‑chain fixes ([#2840](https://github.com/sipeed/picoclaw/pull/2840), [#2844](https://github.com/sipeed/picoclaw/pull/2844)) and the spawn asymptotic delivery policy ([#2830](https://github.com/sipeed/picoclaw/pull/2830)).

## 5. Bugs & Stability

New bugs reported today (ranked by severity):

- **High:** [#2836](https://github.com/sipeed/picoclaw/pull/2836) – PowerShell encoding bypass via `iex` injection (security fix PR open).
- **Medium:** [#2839](https://github.com/sipeed/picoclaw/issues/2839) – Steering‑chain final replies edited into tool‑feedback placeholders instead of sent as new messages. Fix PR [#2840](https://github.com/sipeed/picoclaw/pull/2840) open.
- **Medium:** [#2745](https://github.com/sipeed/picoclaw/issues/2745) – OpenRouter reasoning leak (stale, no fix PR yet).
- **Medium:** [#2674](https://github.com/sipeed/picoclaw/issues/2674) – Codex OAuth empty response (open, no fix PR yet).

Several bugs were closed today: [#2823](https://github.com/sipeed/picoclaw/pull/2823) (tool feedback dismiss), [#2828](https://github.com/sipeed/picoclaw/pull/2828) (voice follow‑ups), [#2793](https://github.com/sipeed/picoclaw/pull/2793) (hidden tools), [#2790](https://github.com/sipeed/picoclaw/pull/2790) (spawn routing), and [#2163](https://github.com/sipeed/picoclaw/pull/2163) (Google Antigravity token refresh).

## 6. Feature Request Clusters

Requests being actively worked on or with corresponding PRs:

- **Steering‑chain final replies**: Issues [#2841](https://github.com/sipeed/picoclaw/issues/2841) (synthesize from action log, closed by [#2842](https://github.com/sipeed/picoclaw/pull/2842)) and [#2843](https://github.com/sipeed/picoclaw/issues/2843) (same‑agent final render, PR [#2844](https://github.com/sipeed/picoclaw/pull/2844)).
- **Agent tool policies in `AGENT.md`**: Issue [#2837](https://github.com/sipeed/picoclaw/issues/2837) – PR [#2838](https://github.com/sipeed/picoclaw/pull/2838) adds `allow`/`deny` with glob patterns.
- **Async tool result delivery**: Issue [#2829](https://github.com/sipeed/picoclaw/issues/2829) – PR [#2830](https://github.com/sipeed/picoclaw/pull/2830) introduces an explicit delivery policy.
- **MCP Streamable HTTP transport**: Issue [#2782](https://github.com/sipeed/picoclaw/issues/2782) – no PR yet.
- **Email as native channel**: Issue [#2421](https://github.com/sipeed/picoclaw/issues/2421) – no PR yet.
- **OAuth MCP server integration**: Issue [#2546](https://github.com/sipeed/picoclaw/issues/2546) – no PR yet.
- **Gemini web search provider**: PR [#2763](https://github.com/sipeed/picoclaw/pull/2763) open, adds `web_search` tool with Gemini grounding.

A completed feature request was merged today: xAI provider ([#2260](https://github.com/sipeed/picoclaw/pull/2260)) and multi‑agent discovery ([#2158](https://github.com/sipeed/picoclaw/pull/2158)).

## 7. User Feedback Summary

User‑reported pain points from today’s data:

- **Corporate/restricted environments** need email support ([#2421](https://github.com/sipeed/picoclaw/issues/2421)).
- **Non‑technical users** struggle to integrate OAuth‑protected MCP servers; they want a simple dashboard URL paste flow ([#2546](https://github.com/sipeed/picoclaw/issues/2546)).
- **OpenRouter reasoning models** leak internal thinking, breaking clean assistant output ([#2745](https://github.com/sipeed/picoclaw/issues/2745)).
- **ChatGPT Codex OAuth** returns empty responses, making the provider unusable for some users ([#2674](https://github.com/sipeed/picoclaw/issues/2674)).
- **Upgrade/update process** is unclear; multiple users ask for a tutorial ([#2834](https://github.com/sipeed/picoclaw/issues/2834)).
- **Steering‑chain UX** can be confusing when final replies overwrite placeholder messages ([#2839](https://github.com/sipeed/picoclaw/issues/2839)) or over‑focus on the last follow‑up ([#2843](https://github.com/sipeed/picoclaw/issues/2843)).

Positive signals: many fixes were merged within days of reporting, indicating responsive maintenance.

## 8. Backlog Watch

Issues or PRs that have been open for a while without recent maintainer action:

- [#2421](https://github.com/sipeed/picoclaw/issues/2421) – Email native channel (created 2026‑04‑08, last maintainer comment? none visible in summary).
-

</details>