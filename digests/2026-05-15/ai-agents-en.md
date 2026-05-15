# OpenClaw Ecosystem Digest 2026-05-15

> Issues: 500 | PRs: 500 | Projects covered: 4 | Generated: 2026-05-15 02:15 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-05-15

## 1. Today's Activity Brief

In the past 24 hours, 500 issues and 500 pull requests were updated across the repository, with 24 issues and 45 PRs closed/merged. Four new releases were published, including the latest `v2026.5.14-beta.1` and the mature `v2026.5.12` which brings major dependency externalization for leaner installs. Community discussion remains heavy around Docker install failures, text-leak UX bugs, and gateway degradation, while maintainers advanced several security and stability PRs.

## 2. Releases

### v2026.5.14-beta.1
- **Dependencies:** Root ambient Node proxy agents now route through `@openclaw/proxyline`; dropped `proxy-agent`, `https-proxy-agent`, and `minimatch` from core.
- **Control UI/i18n:** Added `pnpm ui:i18n:report` baseline report for hardcoded-copy focus areas and locale fallback metadata.
- No breaking changes or migration notes documented.

### v2026.5.12 (non-beta)
- **Highlights:**
  - **Leaner installs:** WhatsApp, Slack, Amazon Bedrock, Anthropic Vertex, and related provider/plugin dependency cones moved out of core – installs now only pull what you use.
  - **Telegram resilience:** Isolated polling, durable local spooling, safer group-media handling.

### v2026.5.12-beta.8 / v2026.5.12-beta.7
- Both betas externalize Amazon Bedrock (AWS SDK) and Slack, OpenShell sandbox, Anthropic Vertex plugins so core installs don’t pull their dependency cones unless explicitly installed.

## 3. Project Progress

45 PRs were merged or closed today. Notable merges visible in the release notes above. Among open PRs (top 30 by comment count), several are moving toward merge:
- **#81970** – fix preserving ACP metadata across stale session-store writes (proof supplied).
- **#81971** – fix answering Claude live `control_request can_use_tool` via exec policy (fixes #80819).
- **#81896** – honor `cwd` for native subagent spawns.
- **#81895** – add `config unset --dry-run` CLI flag.
- **#81841** – retry silent reasoning and empty-error turns with feedback.
- **#81834** – add SenseAudio TTS provider (ASR already existed).
- **#80922** – route allow-always through command authorization planner (large, in review).
- **#69310** – surface dropped media to users instead of silent swallow (triage needed).
- **#81312** – preserve bundled capability manifest contracts (fix for Feishu/Lark).
- **#79068** – bound gateway session memory after compaction.

Several PRs from the backlog (March) remain open but updated, e.g., #42303 (restore Linuxbrew in Docker), #41624 (Docker cache permissions), #42327 (cron positional id).

## 4. Community Hot Topics

| Issue | Comments | Summary |
|-------|----------|---------|
| [#14593](https://github.com/openclaw/openclaw/issues/14593) | 29 | `brew not installed` in Docker when installing skills on Linux; user frustration with missing Homebrew. |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 26 | Agent text between tool calls leaks to messaging channels (Slack, iMessage) – a UX bug causing internal narration to appear to users. |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) | 24 | Request for prebuilt Android APK releases; users cannot run the companion app without compiling from source. |
| [#73323](https://github.com/openclaw/openclaw/issues/73323) | 17 | Gateway runtime degradation on Windows 11/Node 24: pricing fetch timeouts (60s), Telegram polling stalls (127–266s), slow RPC (8–83s). Chronic across several versions. |
| [#22676](https://github.com/openclaw/openclaw/issues/22676) | 16 | Signal daemon `stop()` race condition on SIGUSR1 restart – orphaned processes and send failures. |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | 16 | Feature request: tiered bootstrap file loading to save tokens per session – resonates with users with large workspaces. |
| [#32473](https://github.com/openclaw/openclaw/issues/32473) | 15 | Control UI requires secure context (HTTPS) – regression for VPS/Docker users without HTTPS configured. |
| [#29387](https://github.com/openclaw/openclaw/issues/29387) | 13 | Bootstrap files in `agentDir` silently ignored; only workspace directory files are loaded. |
| [#32296](https://github.com/openclaw/openclaw/issues/32296) | 12 | Agent replies to previous message due to session context confusion. |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | 12 | Request for masked secrets to prevent agents from seeing raw API keys. |

**Underlying needs:** Users are demanding better Docker/PaaS support, stable multi-platform runtime, cleaner UX for agent output routing, and more granular control over context costs and secrets.

## 5. Bugs & Stability

### High Severity (data loss / crash / security)
- **#73323** Gateway degradation on Windows 11/Node 24 – multi-subsystem network/timer failures (no fix PR visible).
- **#22676** Signal daemon race condition on restart – process orphans, send failures (no fix PR).
- **#32296** Session context confusion – agent responds to wrong message (no fix PR).
- **#31583** `exec` tool does not inherit `skills.entries.*.env` – secrets not passed to subprocesses (no fix PR).
- **#25592** Text between tool calls leaks to channels – information disclosure (no fix PR yet; discussed).
- **#40001** Write tool lacks append mode – isolated cron sessions destroy shared files via overwrite (no fix PR).
- **#41330** (CLOSED) iMessage duplicate message loop – fix may have been merged? (closed but details not shown).

### Medium Severity (functionality broken)
- **#14593** Docker skill install fails: `brew not installed` – fix PR #42303 (restore Linuxbrew) remains open since March.
- **#38439** Webchat avatar endpoint returns 404 – regression (no fix PR).
- **#38327** `"Cannot convert undefined or null to object"` with google-vertex/gemini-3.1-pro-preview – regression (no fix PR).
- **#40540** `openclaw update` fails with EBUSY on Windows – file lock issue (no fix PR).
- **#31331** Docker + sandbox can't mount workspace (bind mount misrouting) – (no fix PR).
- **#41165** Telegram DMs still land in `agent:main:main` after prior fix – session isolation regression.
- **#41545** Editing WebSocket URL clears Gateway Token in Overview UI – behavior bug.
- **#41744** Feishu: read image loses media before final payload – tool result loss.
- **#32473** Control UI requires HTTPS – regression (no fix PR).

### Fix PRs in Review
- **#81971** fixes Claude live control request answer.
- **#42303** restores Linuxbrew in Docker (still open).
- **#81970** fixes ACP metadata loss.
- **#79068** bounds memory after compaction.
- **#69310** surfaces dropped media warnings.
- **#42207** default `tools.fs.workspaceOnly` to true (security hardening).

## 6. Feature Request Clusters

| Feature | Issues | Related PRs |
|---------|--------|-------------|
| **Prebuilt APK / mobile builds** | #9443 (24 comments) | None |
| **Slack Block Kit support** | #12602 (13 comments) | None |
| **Masked secrets** | #10659 (12 comments) | None |
| **Tiered bootstrap file loading** | #22438 (16 comments) | None |
| **Direct exec mode for cron jobs** | #18160 (10 comments) | None |
| **Post-subagent completion hook** | #22358 (11 comments) | None |
| **Telegram Business bot support** | #20786 (8 comments) | None |
| **Theme customization system** | #28300 (6 comments) | None |
| **Fallback approval mode + model attribution** | #33975 (6 comments) | None |
| **Memory search recursive subdirectories** | #34400 (10 comments) | None |
| **Multi-agent collaboration enhancements** | #35203 (7 comments) | None |
| **Session snapshots (save/load context)** | #13700 (6 comments) | None |
| **Path-scoped RWX permissions** | #39979 (7 comments) | None |
| **Backup CLI with .gitignore-like excludes** | #40786 (6 comments) | None |
| **Native secrets management (AWS Secrets Manager, Vault)** | #13610 (7 comments) | None |
| **Durable rule learning + multi-mention reply semantics** | #41366 (6 comments) | None |

Some feature requests have partial overlap with recent PRs (e.g., security defaults in #42207), but most lack corresponding implementation.

## 7. User Feedback Summary

**Pain points expressed in open issues:**
- Docker-based deployments are fragile – missing Homebrew, sandbox workspace mount issues, control UI requiring HTTPS.
- Agent output leaks internal text to public channels, causing confusion and potential data exposure.
- Memory/embedding setup is not prompted during onboarding, leaving new users unaware of a core persistence feature.
- Cron jobs timeout because they always require LLM interpretation; users want direct exec mode.
- Session context confusion makes multi-turn conversations unreliable.
- Write tool overwrites files instead of appending – destructive for shared memory files.
- No prebuilt Android APK – mobile users must compile from source.
- Telegram DMs still misrouted despite prior fixes.

**Positive signals:**
- The `v2026.5.12` release’s leaner dependency extraction is well-received (many users asked for reduced install size).
- SenseAudio TTS PR and i18n reporting tool show ongoing polish.
- Several security-focused PRs (#42207, #42208) indicate attention to safety.

## 8. Backlog Watch

The following high-impact issues have been open for weeks or months with no merged fix:

- **#14593** (Feb 12) – Docker skill install `brew not installed`. Fix PR #42303 open since Mar 10, not merged.
- **#22676** (Feb 21) – Signal daemon race condition. No fix PR.
- **#25592** (Feb 24) – Text between tool calls leaks to channels. No fix PR.
- **#29387** (Feb 28) – Bootstrap files in `agentDir` silently ignored. No fix PR.
- **#29736** (Feb 28) – Exec approvals path ignores active state root. No fix PR.
- **#31331** (Mar 2) – Docker sandbox workspace mount broken. No fix PR.
- **#31583** (Mar 2) – `exec` tool does not inherit skill env variables. No fix PR.
- **#32296** (Mar 2) – Agent replies to previous message. No fix PR.
- **

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-05-15

## 1. Daily Cross-Project Overview

Today’s activity shows clear disparity in scale: OpenClaw dominates with 500 issues and 500 PRs updated, driven by a major release and heavy community discussion. Zeroclaw saw elevated activity (50 PRs, 24 issues) with a focus on security patches, observability, and cron-related bugs. NanoBot and PicoClaw maintained moderate levels (20–23 PRs each) with primarily bug fixes and dependency bumps. No project other than OpenClaw published a non-nightly release. Across all projects, Telegram channel integration, session/context management, and LLM provider compatibility issues are recurring themes.

## 2. Activity Comparison

| Project      | Issues updated | PRs updated | Releases today | Activity note |
|--------------|----------------|-------------|----------------|---------------|
| **OpenClaw** | 500 (24 closed)| 500 (45 merged/closed) | 4 (incl. v2026.5.12 stable) | Volume spike, major dependency externalization release, community hot topics on Docker, text leaks, gateway degradation |
| **NanoBot**  | 22 (12 closed) | 23 (8 merged) | None | Moderate; fixed shortcut persistence, Telegram transcription, SSL verify; community issues in Chinese around provider failures |
| **Zeroclaw** | 24 (4 closed)  | 50 (3 merged)| None | Elevated; security advisory patch (lettre), large observability PR, active triage on cron output routing bug |
| **PicoClaw** | 9 (2 closed)   | 23 (5 merged)| 1 nightly    | Moderate; mostly Dependabot bumps; meaningful PRs on model fetching and Telegram forum topic handling |

## 3. OpenClaw Compared With Peers

- **Volume**: OpenClaw’s 500 issues/PRs is 10–20× higher than the next busiest project (Zeroclaw with 50 PRs). This reflects a much larger codebase, maintainer team, and user base.
- **Technical focus**: OpenClaw’s release v2026.5.12 externalizes provider/plugin dependency cones (WhatsApp, Slack, Bedrock, Anthropic Vertex) to reduce install size—a concern not prominent in other projects. Community issues center on Docker reliability, text leakage, and Windows gateway degradation, indicating heavy production/enterprise usage.
- **Community surface area**: OpenClaw has dozens of long-running issues (months-old bugs still open) and high-comment feature requests (e.g., prebuilt APK, masked secrets). Other projects have smaller, more issue-specific conversations.

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Telegram integration improvements** | OpenClaw, Zeroclaw, PicoClaw | OpenClaw: text leakage to channels, polling stalls. Zeroclaw: web tools not firing via Telegram, cron output routing to Telegram. PicoClaw: forum topic fix, typing state cleanup |
| **Session/context management** | OpenClaw, NanoBot, Zeroclaw, PicoClaw | OpenClaw: ACP metadata loss, session context confusion. NanoBot: interruption loses session history. Zeroclaw: context compressor drops reasoning_content. PicoClaw: session history race condition, missing timestamps |
| **LLM provider compatibility** | All four | OpenClaw: Claude tool control fix, Gemini errors. NanoBot: DeepSeek V4 Flash refusal to read files, reasoning_content 400 errors. Zeroclaw: native extended thinking, reasoning field preservation. PicoClaw: Xiaomi MIMO multi-turn failure with 4xx errors |
| **Security and secrets management** | OpenClaw, NanoBot, Zeroclaw | OpenClaw: masked secrets feature request, security hardening PR (#42207). NanoBot: DM policy/allowlist, corporate proxy SSL verify. Zeroclaw: lettre TLS advisory patched same day |
| **Container/deployment friction** | OpenClaw, Zeroclaw | OpenClaw: Docker skill install missing Homebrew, sandbox mount issues, HTTPS requirement for Control UI. Zeroclaw: Docker dashboard path fix, musl aarch64 prebuilt support |

## 5. Differentiation Analysis

- **OpenClaw**: Broadest platform ecosystem (multi-provider, multi-channel, skill system). Leverages JavaScript/Node.js. Largest community. Focus on production stability and dependency reduction.
- **NanoBot**: Appears Chinese-language–dominant (most issues and PR descriptions in Mandarin). Heavier focus on Chinese LLM providers (DeepSeek, Xiaomi?) and Feishu/Lark integration. Smaller scope but active.
- **Zeroclaw**: Rust-based (evident from lettre, matrix-sdk dependencies). Emphasis on observability (SSE logs, OTel tracing, build-stamped version), cron/automation (skills background review, cron output routing), and security auditing.
- **PicoClaw**: Go-based (telego, larksuite). More focused on mobile/embedded (nightly builds, Sipeed brand). Primarily Telegeram and Feishu channels; less emphasis on broader LLM ecosystem than peers.

## 6. Community Activity Notes

- **Tier 1 – High activity**: OpenClaw (500 issues, 500 PRs, 4 releases). Community discussion volume is an order of magnitude above others.
- **Tier 2 – Moderate-to-elevated**: Zeroclaw (24 issues, 50 PRs, no release) – high PR count relative to issues suggests active development cycle.
- **Tier 3 – Moderate**: NanoBot (22 issues, 23 PRs) and PicoClaw (9 issues, 23 PRs) – both show steady contributions but no release momentum today.

## 7. Evidence-Backed Observations

1. **Telegram channel issues are the most commonly shared pain point** across three of four projects (OpenClaw, Zeroclaw, PicoClaw), ranging from tool execution failures to message routing and typing state bugs.

2. **Session/context management remains a systemic challenge** in agent architectures. Every project shows at least one bug or feature request related to preserving conversational state across interruptions, tool calls, or cron turns.

3. **LLM provider integration friction is concentrated on non-OpenAI providers**. Issues repeatedly mention Anthropic Claude (OpenClaw), DeepSeek (NanoBot), Xiaomi MIMO (PicoClaw), and Gemini (OpenClaw), while OpenAI-related complaints are absent in today’s data.

4. **Security hardening is a growing but uneven focus**. Zeroclaw patched a TLS advisory within hours; NanoBot added SSL verify config and DM policy proposals; OpenClaw has a security hardening PR in review and a masked-secrets feature request. No security-related activity was observed in PicoClaw today.

5. **Docker/PaaS deployment friction is specific to OpenClaw and Zeroclaw**. Both projects have open issues around container mounting, missing dependencies, or HTTPS requirements—suggesting these projects target self-hosted production deployments, while NanoBot and PicoClaw may be more light-weight or desktop-focused.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-15

## 1. Today’s Activity Brief

In the last 24 hours, NanoBot saw **22 issues updated** (10 open, 12 closed) and **23 pull requests updated** (15 open, 8 merged/closed). No new releases were published. Closed issues addressed configuration format migration (JSON → TOML), session interruption handling, file access control, and several bug fixes. Merged PRs improved plugin channel compatibility, corporate proxy SSL handling, shortcut command persistence, Feishu bot member events, Telegram transcription wiring, and documentation. Several new features entered the open PR queue, including gateway lifecycle hooks, a `plan` tool for task decomposition, DM sender pairing, and a CLI health diagnostic command.

## 2. Releases

None.

## 3. Project Progress

Eight PRs were closed/merged today:

- **[#2848] Fix config compatibility for plugin channels** – Resolved `is_allowed` method failure when plugin channels use dict-style configs.
- **[#3783] fix(web): add ssl_verify config for corporate proxy SSL verification** – Allows disabling SSL verification behind MITM proxies.
- **[#3779] fix(agent): persist shortcut commands without polluting LLM context** – Shortcut commands (`/help`, `/pairing`) now save turns to session files, fixing empty WebUI chat histories after shortcut usage.
- **[#3775] fix(feishu): register no-op handlers for bot member events** – Silences “processor not found” errors when other bots join/leave a Feishu group via WebSocket.
- **[#3786] fix(telegram): wire transcription config fields through to the channel** – Voice messages now respect `transcription_provider`, `transcription_api_key`, and `transcription_language` settings.
- **[#3483] docs: add OpenCode Go provider entries to configuration docs** – Documents the OpenCode Go gateway (OpenAI + Anthropic compatible) in the providers table.
- **[#3773] feat(cli): add doctor command, session management, and /export slash command** – Closed as invalid/question; the actual features are split into separate PRs (#3776, #3777, #3778) still open.
- **[#2920] bug(msteams): hardcoded “Reply with quote test” fallback** – Fixed a misparse issue in Teams channel quote normalization.

## 4. Community Hot Topics

Issues with the most discussion (by comment count):

- **[#2880] [BUG] 无论发什么消息都回复报错** (17 comments) – A long-standing stale bug where the bot replies with an error regardless of input. User tried reinstalling and clearing data, only NanoBot agent works. No maintainer response yet.
- **[#3402] [enhancement] Replace JSON with TOML for configuration files** (9 comments) – Closed after debate; community agreed TOML is more human-editable. The migration appears accepted.
- **[#3689] [enhancement] 中断会话丢失上一轮会话的聊天记录** (5 comments) – User reports that interrupting a looping task causes the agent to lose the conversation context. Closed with solution (likely related to PR #3779).

Other active topics: **[#3780]** (file access control for Windows, 3 comments) and **[#3790]** (WebUI display corruption, 2 comments).

No PRs showed comment counts; most had none.

## 5. Bugs & Stability

**Open bugs reported or updated today:**

- **[#3790] WebUI会话-打印内容显示错乱** – Display corruption after updating to 2026-05-13 source; requires page refresh. (Severity: medium)
- **[#3718] 服务器流式输出cron提醒的消息没有streamid** – Cron reminder SSE messages lack `streamid`, breaking client parsing. (Severity: medium)
- **[#3647] Suggestion: Use local tokenizer for estimating prompt tokens** – `tiktoken.get_encoding` depends on network, causing delays when offline. (Severity: low, enhancement)
- **[#3698] 在 nanobot API server 的 streaming 中注入 tool 事件** – Missing `tool.progress` SSE events. (Severity: low, feature gap)
- **[#3768] feat(security): dmPolicy — unknown sender pairing/allowlist** – Bot currently processes DMs from anyone; proposed gating. (Severity: medium, security)

**Closed bugs fixed today:**

- **[#3772]** (Feishu bot mention error) – Fixed by no-op handler registration (#3775).
- **[#3760]** (deepseek-v4-flash `reasoning_content` 400 error) – Closed; likely resolved by configuration workaround.
- **[#3754]** (deepseek-v4-flash ignores external file content) – Closed.
- **[#3780] File access control & script review** – Closed as enhancement; community agreed to add config options later.

**Recent fix PRs merged:** #3779 (shortcut persistence), #3783 (SSL verify), #3786 (Telegram transcription).

## 6. Feature Request Clusters

Today’s data shows several distinct clusters of user-requested features:

- **CLI diagnostics and session management** – Multiple issues and PRs: `nanobot doctor` (#3769, #3776), session management (#3777), `/export` slash command (#3778). This cluster appears driven by needs for debugging and data portability.
- **DM security and pairing** – Issue #3768 (DM policy/allowlist) and PR #3774 (chat-native DM sender approval) propose gating direct messages for private-assistant deployments. The problem is also raised in #3787 (bot reply mention).
- **Long-running / multi-step tasks** – PR #3791 (`plan` tool for task decomposition), PR #3788 (goal_state streaming & long_task WebUI), and PR #3460 (LongTaskTool) all aim at better handling of complex tasks.
- **Provider-hosted web search** – Issue #3741 requests support for Azure OpenAI’s native `web_search` tool and similar provider-managed search.
- **Gateway lifecycle notifications** – PR #3792 adds `on_start`/`on_stop` hooks to send notifications on gateway state changes.
- **Model routing** – Issue #3070 (closed) proposed a OpenRouter-like model routing based on task complexity; not yet implemented.

## 7. User Feedback Summary

**Pain points expressed today:**

- Multiple users in China (mandarin titles) struggling with model-specific errors: all messages fail (#2880), coder models incompatible (#1998), DeepSeek V4 Flash refusing to read files (#3754), and `reasoning_content` 400 errors (#3760). These suggest deep integration issues with Chinese LLM providers.
- Interrupted sessions losing chat context (#3689) – “打断的时候应该让nanobot仍然记住对话”.
- Corporate/enterprise users want safer file access controls (#3780) and corporate proxy support (#3783).
- WebUI display corruption (#3790) frustrates users who just updated.
- Low-comment issues show frustration with missing stream IDs (#3718) and network-dependent tokenizer (#3647).
- Positive signal: several enhancement requests were closed as implemented or accepted (TOML config, session persistence, Feishu event silence).

Users are deploying NanoBot for shared team use, automation, and as an AI assistant, and they consistently ask for more predictable behavior, better error messages, and security hardening for production use.

## 8. Backlog Watch

Issues / PRs that appear stale or lack maintainer response:

- **[#2880] [bug] 无论发什么消息都回复报错** – Open since 2026-04-07, 17 comments, tagged `stale`. The reporter describes a complete refusal to respond. No maintainer reply. High priority to investigate.
- **[#3647] Use local tokenizer** – Open since May 6, 0 comments, no maintainer attention. Simple fix with significant UX impact for offline users.
- **[#3698] Tool events in streaming** – Open since May 8, 0 comments. Feature request with proposed code changes; maintainer review needed.
- **[#3718] Cron streaming missing streamid** – Open since May 9, 0 comments. Defect reported with screenshot; no maintainer response.
- **[#3741] Provider-hosted web search** – Open since May 11, 0 comments. Interface design question.
- **[#3768] DM policy** – Open since May 13, 1 comment (author). Merge-ready PR (#3774) exists and depends on #3779 (which is merged). May be blocked by review.
- **[#3769] nanobot doctor** – Open since May 13, 0 comments. Multiple PRs already implement this (#3776 etc.), but none merged yet.

**PRs awaiting maintainer feedback:**

- [#3792] (gateway lifecycle hooks)
- [#3774] (DM pairing) – said to depend on #3779 which is merged.
- [#3791] (plan tool)
- [#3788] (goal state streaming)
- [#3785] (OpenCode Go provider)
- [#3782] (remove eager markdown preload)
- [#3693] (LLM concurrency gate)
- [#3778], [#3777], [#3776] (session/export/doctor) – all from same author.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest — 2026-05-15

## 1. Today's Activity Brief

ZeroClaw saw elevated activity on 2026-05-14/15, with 24 issues updated (20 open, 4 closed) and 50 pull requests updated (47 open, 3 merged/closed). No new releases were published. High-priority (P1) bugs were reported around cron job output routing failing to deliver to configured channels (#6647), a security advisory scan failure (#6657), and multiple tool-firing issues via Telegram (#6646, #6659). A large observability fix (#6553) addressing broken SSE logs and build-stamped version is under active review, and a security patch for the `lettre` dependency (#6662) landed quickly after the advisory was opened. The project also saw continued work on the skills background review fork (#6667), ACP session persistence (#6649), and file-rotation infrastructure (#6611).

## 2. Releases

No new releases were published today. The latest available version remains 0.7.5, with the 0.7.6 release cycle still in progress (tracked under #6253).

## 3. Project Progress

Three items were closed/merged today:

- **#6547 (CLOSED)** — Homebrew core merge failure resolved; the version 0.7.5 formula was successfully integrated into Homebrew.
- **#6229 (CLOSED)** — Telegram `mention_only=true` bug where the bot responded to photo/media messages without a mention was fixed.
- **#6634 (CLOSED)** — Cron-scheduled webhook callbacks silently dropping `thread_id` was resolved.
- **#6627 (CLOSED)** — Stale tool-result images replaying across later provider turns was fixed.

Among open PRs, several reached new milestones today:

- **#6553** — The large observability fix (restore SSE `/logs` stream, add build-stamped version, add health pulse for remote/Docker deployments) received updates and has integrated scope from the earlier #5986.
- **#6447** — GitHub Actions update to target Node 24 (deprecating Node 20) advanced; community SHA verification was noted.
- **#6662** — The `lettre` dependency security patch (RUSTSEC-2026-0141) was opened and updated, raising the dependency floor to 0.11.22.
- **#6621** — Docker dashboard installation path fix (#6400) was updated; the dashboard bundle is now installed outside the bind-mounted `/zeroclaw-data` directory.

## 4. Community Hot Topics

**Highest engagement today:**

- **#6647** — [Bug]: Cron job output not routed to configured channels (4 comments). Multiple users report that cron job results only appear in the web dashboard, not in configured channels like Telegram. This is a high-severity workflow-blocking issue. The thread shows active triage including channel and runtime maintainers.

- **#6269** — Context compressor drops `reasoning_content` from compressed assistant messages (4 comments). This S2 bug has been open since May 2 and is marked "in-progress". Recent discussion suggests the fix may be related to the reasoning field preservation work in PR #6606.

- **#6553** — fix(observability): restore broken SSE /logs stream (large PR, multiple maintainers engaged). The PR supersedes #5986 and adds build-stamped version information, which addresses a long-standing pain point for remote/Docker deployments.

- **#6659** — No API for pushing notifications into an operator's gateway session (3 comments). A plugin developer (klodi-plugin) reports that backend processes cannot inject notifications into the gateway session, limiting operator awareness of background events.

**Underlying needs:** Users are increasingly relying on ZeroClaw's cron system for scheduled agent tasks and want results delivered to their preferred chat channels (Telegram, etc.). The observability fixes reflect growing deployment in Docker and remote environments where log access via SSE is essential. The gateway notification gap highlights that multi-process integration patterns are still maturing.

## 5. Bugs & Stability

**Critical (S1 — workflow blocked):**

- **#6647** [OPEN] — Cron job output not routed to configured channels. No dedicated fix PR yet; under active triage.
- **#6659** [OPEN] — No API for pushing notifications into operator's gateway session. Needs maintainer review.
- **#6646** [OPEN] — `web_search_tool` and `web_fetch` not firing via Telegram channel in v0.7.5 (P1). Accepted as bug; no fix PR yet.

**High (S2 — degraded behavior):**

- **#6269** [OPEN] — Context compressor drops `reasoning_content`. Status: in-progress. Related PR #6606 may address this for compatible providers.
- **#6105** [OPEN] — Agent has no context of the cron job it's run (P2, blocked since April 25). No progress today.
- **#5122** [OPEN] — `web_fetch` `allowed_private_hosts` list ineffective for domains resolving to private IPs (P1, no-stale). No new activity.
- **#6627** [CLOSED] — Stale tool-result images replay across later provider turns. Fixed today.
- **#6634** [CLOSED] — Cron-scheduled webhook callbacks drop `thread_id`. Fixed today.
- **#6651** [OPEN] — Matrix channel leaks ~1 MB Pss per `/admin/reload` due to upstream Arc cycle (blocked on matrix-sdk fix). No fix PR.
- **#6654** [OPEN] — Cron read-only queries still hit the writable schema-ensure path (P3, minor). In-progress.

**Security:**

- **#6657** [OPEN] — TLS hostname verification disabled when using Boring TLS backend (lettre 0.11.21). **Fix PR #6662 opened same day** to update `lettre` to 0.11.22.

**Dependency issues:**

- **#6651** — Upstream Arc cycle in `matrix-sdk 0.17` (`matrix-rust-sdk#6573`). No fix in ZeroClaw until matrix-sdk ships a fix.

## 6. Feature Request Clusters

**Observability & Telemetry:**

- **#6661** [ENHANCEMENT] — Preserve committed streamed output during websocket steering. Explores additive behavior for mid-turn steering without invalidating already-streamed assistant text.
- **#6641** [ENHANCEMENT] — Turn-level OTel trace correlation (nest LLM/tool/memory spans under single turn trace). Blocked, tagged for maintainer @alexandme.
- **#6642** [ENHANCEMENT] — Capture full prompt/completion on `llm.call` spans via `gen_ai.input.messages` / `gen_ai.output.messages`. Blocked, tags same maintainer.
- Related PR: **#6611** — Add `zeroclaw-file-rotation` crate and file trace infrastructure.

**Channels & Communication:**

- **#6663** [ENHANCEMENT] — Show tool-call progress during partial streaming in Telegram. Accepted.
- **#6649** [PR] — Persist ACP sessions (SQLite-backed). Implements four new JSON-RPC methods for session lifecycle. Large PR (XL).

**DevOps & Deployment:**

- **#6653** [ENHANCEMENT] — Define host-architecture policy for emulated installs. Needs maintainer review.
- **#6658** [ENHANCEMENT] — Install script support for musl aarch64 linux with `--prebuilt`. Accepted.
- **#6617** [PR] — Emit JSON patch errors for CLI patch (improves error UX).
- **#6621** [PR] — Fix Docker dashboard install path.

**Skills & Agent Capabilities:**

- **#6253** [ENHANCEMENT] — ZeroClaw skills support and UX (v0.7.6 release theme). Community input requested; many sub-issues.
- **#6645** [BUG] — SkillImprover + `skill_manage` only handle `SKILL.toml`, not `manifest.toml`. Accepted (P2).
- **#6667** [PR] — Background review fork + `skill_manage` tool (agentskills.io SKILL.md). Large PR targeting the integration gap from #4619.
- **#6644** [BUG] — Skill review fork summary parser misses tool receipts (blocked).

**Provider Enhancements:**

- **#5652** [PR] — Native extended thinking for Anthropic and Bedrock providers (needs author action since April 11).
- **#6549** [PR] — Vision input support for Claude Code provider.
- **#6606** [PR] — Preserve compatible reasoning field across providers (needs author action).
- **#6607** [PR] — Respect explicit `provider.kind` in config (needs author action).
- **#6624** [PR] — Normalize image markers at provider boundary (fixes vLLM rejection of raw local paths).

**Web/Tool Approval:**

- **#6603** [PR] — Tool approval UI for supervised-mode tool execution (closes #6522). The gateway had WebSocket approval protocol, but the web frontend wasn't showing approval requests.

## 7. User Feedback Summary

**Pain points reported today:**

- **Cron job output delivery** (#6647, #6105): Users expect cron-triggered agent results to arrive in their configured chat channels (Telegram, etc.), not only in the web dashboard. This is a core workflow expectation for scheduled agent tasks.
- **Context loss** (#6269): When conversation history triggers compression, `reasoning_content` is lost, which is critical for providers that use reasoning for follow-up turns. Users experience degraded response quality.
- **Telegram web tools not firing** (#6646): With v0.7.5, `web_search_tool` and `web_fetch` fail to execute when triggered via Telegram with custom LM Studio provider. This is a workflow blocker for users relying on Telegram as their primary interface.
- **Stale images in provider turns** (#6627, now fixed): Image markers from earlier turns were replayed, causing confusion and wasted tokens.
- **Missing API for notifications** (#6659): Plugin developers need a way to push notifications into the gateway session for asynchronous backend events. Current approach requires workarounds.
- **Deployment friction** (#6547 closed, #6658 open): Homebrew installation needed fix for 0.7.5; musl aarch64 users still cannot use `--prebuilt` install on Alpine/musl systems.

**Satisfaction signals:**

- Quick response to the security advisory (#6657 → #6662 within hours).
- Community PRs continue to land (e.g., #6624 image normalization, #6621 Docker fix).
- Users are actively building plugins (klodi-plugin) and contributing provider integrations (Manifest, #6268).

## 8. Backlog Watch

**High-priority items needing maintainer attention:**

- **#6659** (P1, needs-maintainer-review) — No API for pushing notifications into gateway session. Filed by a plugin developer with a clear use case. No maintainer response yet.
- **#6253** (P1, accepted) — Skills support and UX tracker for v0.7.6. Accepted but has 14 linked sub-issues and PRs; may be a coordination bottleneck.
- **#6074** (P2, in-progress) — Audit of 153 commits lost in bulk revert. No new progress for over a week. The scale of this issue suggests ongoing recovery work.
- **#5122** (P1, no-stale) — `web_fetch` `allowed_private_hosts` ineffective for domains resolving to private IPs. Open since March 29 with no PR attached.
- **#6105** (P2, blocked) — Agent lacks cron job context. Blocked since April 25; related to #6647 but with a different scope (session memory vs. output routing).

**PRs needing author action (needs-author-action label):**

- **#5652** — Native extended thinking for Anthropic/Bedrock (pending since April 11).
- **#6617** — JSON patch errors for CLI config.
- **#6607** — Respect explicit provider kind.
- **#6606** — Preserve compatible reasoning field (P1 priority).
- **#6592** — Gate router vision on default provider.
- **#6515** — History pruner fix (#5636).

**Blocked items:**

- **#6644** (blocked) — Skill review summary parser misses tool receipts.
- **#6654** (in-progress but silent) — Cron read-only queries hit writable path.
- **#6641** and **#6642** (blocked, waiting on @alexandme) — OTel trace correlation and prompt capture.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-15

## Today's Activity Brief

In the last 24 hours, the PicoClaw repository saw 9 issues updated (7 still open, 2 closed), 23 pull requests updated (18 open, 5 merged/closed), and one new nightly release. The project’s primary activity was dependency bumps by Dependabot, but several non-trivial PRs also moved forward: a merged feature for model fetching and catalog management (`#2832`), and ongoing work on Telegram forum topic fixes, cron job feedback suppression, and a working summary tool feedback mode. A new nightly build (`v0.2.8-nightly.20260515.794eb04f`) was published.

## Releases

One nightly release was cut:

- **`v0.2.8-nightly.20260515.794eb04f`** – automated nightly build, may be unstable. No breaking changes or migration notes provided. Changelog spans all commits since `v0.2.8`: https://github.com/sipeed/picoclaw/compare/v0.2.8...main

## Project Progress

**Merged/closed PRs today (5 total):**

- [#2866 – `build(deps): bump github.com/mymmrac/telego from 1.8.0 to 1.9.0`](https://github.com/sipeed/picoclaw/pull/2866) – dependency update for Telegram library.
- [#2865 – `build(deps-dev): bump vite from 8.0.10 to 8.0.13 in /web/frontend`](https://github.com/sipeed/picoclaw/pull/2865) – frontend bundler update.
- [#2864 – `build(deps): bump github.com/larksuite/oapi-sdk-go/v3 from 3.6.1 to 3.7.5`](https://github.com/sipeed/picoclaw/pull/2864) – Feishu/Lark SDK update.
- [#2863 – `build(deps): bump modernc.org/sqlite from 1.48.2 to 1.50.1`](https://github.com/sipeed/picoclaw/pull/2863) – SQLite dependency bump.
- [#2832 – `feat(web,api): fetch models and saved catalog support`](https://github.com/sipeed/picoclaw/pull/2832) – adds `POST /api/models/fetch` and `GET /api/models/saved` endpoints, part of a larger split PR series (depends on #2831). This introduces backend APIs for discovering upstream models and managing a user’s saved model catalog.

**Notable open PRs with recent updates:**

- [#2779 – `feat(telegram): add topic group trigger overrides`](https://github.com/sipeed/picoclaw/pull/2779) – enables per-topic `group_trigger` overrides for Telegram forums.
- [#2778 – `feat(agents): add working summary tool feedback`](https://github.com/sipeed/picoclaw/pull/2778) – shows a compact inline progress message while a tool chain is running.
- [#2777 – `fix(cron): suppress feedback for scheduled turns`](https://github.com/sipeed/picoclaw/pull/2777) – prevents background cron jobs from emitting transient messages.
- [#2776 – `fix(telegram): stop typing for topic replies`](https://github.com/sipeed/picoclaw/pull/2776) – corrects typing state cleanup for forum topics.
- [#2772 – `fix(telegram): Preserve Telegram forum topic for message tool sends`](https://github.com/sipeed/picoclaw/pull/2772) – ensures interim tool-sent messages keep the correct topic context.

## Community Hot Topics

Most discussion activity centered on two issues:

- **[#629 – `[BUG] Didn't retry if meet LLM call failed`](https://github.com/sipeed/picoclaw/issues/629)** (14 comments, open since Feb 2026) – an old bug about HTTP 500 responses causing the agent task to hang without retry. Last update yesterday; still no resolution or linked PR. High user frustration visible in comments.
- **[#2171 – `[Refactor] Consider moving all OpenAI based endpoints supported to use OpenAI Responses API`](https://github.com/sipeed/picoclaw/issues/2171)** (11 comments, closed yesterday) – a completed enhancement to migrate from Chat Completions to OpenAI’s newer Responses API. The to-do list is fully checked, reflecting a successful refactor.

One new issue with a single reaction: **[#2859 – Xiaomi MIMO model multi-turn conversation failure](https://github.com/sipeed/picoclaw/issues/2859)** (1 reaction, 1 comment) – user reports repeated `400` errors after 2–3 turns.

## Bugs & Stability

**Newly updated bugs (all stale, but updated today):**

- **High severity – [#2859](https://github.com/sipeed/picoclaw/issues/2859)** (Xiaomi MIMO multi-turn, LLM call fails after retries). No fix PR yet.
- **Medium – [#2795](https://github.com/sipeed/picoclaw/issues/2795)** (conversation history shows only last user message; viewing history loses prior messages). Affects v0.2.8-64-g4d3070e8. No fix PR.
- **Medium – [#2798](https://github.com/sipeed/picoclaw/issues/2798)** (PDF stream data error in Telegram bot, works in OpenClaw). No fix PR.
- **Medium – [#2787](https://github.com/sipeed/picoclaw/issues/2787)** (Session API messages lack per-message timestamps, all share session.updated time). No fix PR.
- **Low – [#2702](https://github.com/sipeed/picoclaw/issues/2702)** (multi-user group channels: history lacks sender attribution in default session scope). Stale since April.
- **Low – [#629](https://github.com/sipeed/picoclaw/issues/629)** (no retry on LLM call failure). Stale since February.

**Previously reported bug now closed:**
- **[#2721](https://github.com/sipeed/picoclaw/issues/2721)** (Session history race causing `tool_use_id` 400 from Anthropic) was reopened in April, but closed yesterday without visible fix commit. The race condition may still be unresolved—the closure reason is not documented.

## Feature Request Clusters

Several feature PRs are in active development:

- **Telegram forum enhancements**: [#2779](https://github.com/sipeed/picoclaw/pull/2779) (per-topic trigger overrides), [#2776](https://github.com/sipeed/picoclaw/pull/2776) (typing state), [#2772](https://github.com/sipeed/picoclaw/pull/2772) (message tool topic preservation) – all by the same contributor, addressing forum topic routing gaps.
- **Agent UX improvements**: [#2778](https://github.com/sipeed/picoclaw/pull/2778) (working_summary tool feedback), [#2587](https://github.com/sipeed/picoclaw/pull/2587) (web chat streaming and scroll UX) – aimed at real-time feedback and frontend polish.
- **Configuration and documentation**: [#2766](https://github.com/sipeed/picoclaw/pull/2766) (sync docs to V3 config format) – updates 26 files to reflect new schema (`api_key` → `api_keys`, `channels` → `channel_list`, version 2→3).
- **Channel identification refactor**: [#2551](https://github.com/sipeed/picoclaw/pull/2551) (standardize channel identification, decouple name from provider type) – open since April, could enable multiple instances of the same provider.

User-requested features visible in issues: [#2775](https://github.com/sipeed/picoclaw/issues/2775) (sub-agent should not inherit root AGENT.md – causes role confusion) has 2 comments but no PR addressing it yet.

## User Feedback Summary

- **Pain points**: several users report session/conversation history issues – missing messages (#2795), missing timestamps (#2787), lack of sender attribution in multi-user chats (#2702). These affect chat UX across channels (Telegram, WeChat, web). Also, LLM retry failures (#629) and specific provider integration issues (#2859 with Xiaomi MIMO) cause task hangs.
- **Use cases**: Discord multi-user group chats (#2702), Telegram PDF attachment (#2798), long-running agent tasks (#629), sub-agent architectures (#2775), and daily cron jobs (#2777).
- **Satisfaction**: no explicitly positive feedback in today’s data. The closed enhancement #2171 (OpenAI Responses API) likely satisfied earlier requests, but no user acknowledgments noted.

## Backlog Watch

Issues and PRs that have been open for extended periods with no recent maintainer response or fix:

- **[#629](https://github.com/sipeed/picoclaw/issues/629)** – “Didn't retry if meet LLM call failed.” Created Feb 22, updated today, 14 comments, no fix PR. One of the most-voted (by discussion) open bugs.
- **[#2702](https://github.com/sipeed/picoclaw/issues/2702)** – “Multi-user group channels: conversation history lacks sender attribution.” Created Apr 28, stale, 3 comments.
- **[#2775](https://github.com/sipeed/picoclaw/issues/2775)** – “子Agent继承根Agent的AGENT.md导致角色身份混淆.” Created May 5, 2 comments.
- **[#2551](https://github.com/sipeed/picoclaw/pull/2551)** – “refactor: standardize channel identification.” Open since Apr 16, no maintainer review activity.
- **[#2587](https://github.com/sipeed/picoclaw/pull/2587)** – “Add Pico web chat streaming and scroll UX.” Open since Apr 19, no merge. Requires coordination with backend streaming support.

These items may need maintainer attention to advance or resolve.

</details>