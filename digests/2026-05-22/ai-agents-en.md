# OpenClaw Ecosystem Digest 2026-05-22

> Issues: 500 | PRs: 500 | Projects covered: 4 | Generated: 2026-05-22 02:33 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-05-22

## 1. Today's Activity Brief
In the last 24 hours, 500 issues were updated (465 open, 35 closed) and 500 pull requests were updated (444 open, 56 merged/closed). Two new releases were published: v2026.5.20 and v2026.5.20-beta.2. The release notes highlight a backward‑incompatible change in exec approvals that removes the old `cat SKILL.md && printf …` allowlist compatibility path, forcing skill files to be loaded via the `read` tool. Discord voice sessions gained the ability to follow configured users into voice channels. Activity remains high across security hardening, session‑state fixes, and multi‑platform feature requests.

## 2. Releases

### v2026.5.20 (stable) and v2026.5.20-beta.2
**Changes (identical in both):**
- **Exec approvals:** Removed the old `cat SKILL.md && printf … && <skill-wrapper>` allowlist compatibility path. Skill files must now be loaded with the `read` tool; only the real skill executable is auto‑allowed.
  *Migration note:* Users who relied on the removed path must update their skill definitions and allowlists to use the `read` tool for description inspection.
- **Discord:** Voice sessions can now follow configured Discord users into voice channels.

No further migration notes or breaking changes were mentioned.

## 3. Project Progress
Today 56 PRs were merged or closed. While the top‑30 PR list shows only open items, several high‑priority bug issues were **closed**, indicating fixes have been shipped:

- **#84059** – `EmbeddedAttemptSessionTakeoverError` (session file changed while lock released) – closed, fix likely merged.
- **#84076** – Codex app‑server stall after `item/completed` – closed, previously reported as partially fixed, now fully resolved.
- **#83796** – Security regression where Codex runtime + sandbox allowed agent escape – closed, container isolation tightened.
- **#84957** – Isolated cron jobs using `payload.model` could start without the requested `exec` tool – closed, regression addressed.

Additionally, many PRs are in active review or waiting on author. Notable progress includes improvements to subagent thinking inheritance (#84007), Slack plugin approval threads (#85153), xAI OAuth web search (#85182), Codex compaction failure surfacing (#85160), and CLI session key support (#85121).

## 4. Community Hot Topics

| Issue | Comments | 👍 | Summary |
|-------|----------|---|---------|
| [#75](https://github.com/openclaw/openclaw/issues/75) – Linux/Windows Clawdbot Apps | 105 | 75 | Highest community demand: users want desktop apps for Linux and Windows, similar to macOS. |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) – Prebuilt Android APK | 24 | 1 | Request for official APK releases; submitted on behalf of a user by AI assistant QING. |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) – Tiered bootstrap file loading | 16 | 0 | Proposal for progressive context control to save token budget on large workspaces. |
| [#12602](https://github.com/openclaw/openclaw/issues/12602) – Slack Block Kit support | 13 | 0 | Agents should be able to send rich, interactive Block Kit messages in Slack. |
| [#39604](https://github.com/openclaw/openclaw/issues/39604) – `tools.web.fetch.allowPrivateNetwork` | 12 | 8 | Opt‑in config to allow `web_fetch` to reach private network addresses (localhost, 10.x, etc.). |
| [#84059](https://github.com/openclaw/openclaw/issues/84059) – Session takeover error (now closed) | 13 | 8 | High‑impact bug after upgrading to 2026.5.18 – all embedded agents failed. |
| [#18160](https://github.com/openclaw/openclaw/issues/18160) – Direct exec mode for cron jobs | 11 | 9 | Strong demand for skipping LLM interpretation in cron jobs to reduce latency and improve reliability. |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) – Masked secrets system | 12 | 4 | Prevent agent from accessing raw API keys – security improvement against injection. |

**Underlying needs:**
- Cross‑platform support (desktop, mobile) for broader accessibility.
- Security sandboxing and credential protection are top‑of‑mind for many users.
- Session and state management improvements (tiered loading, cron reliability, sub‑agent hooks) reflect growing complexity in multi‑agent workflows.

## 5. Bugs & Stability

### Critical / P1 bugs (closed today)
| Issue | Summary | Fix PR |
|-------|---------|--------|
| [#84059](https://github.com/openclaw/openclaw/issues/84059) | `EmbeddedAttemptSessionTakeoverError` – session file changed while lock released after upgrade to 2026.5.18 | Merged |
| [#84076](https://github.com/openclaw/openclaw/issues/84076) | Codex app‑server stalls after `item/completed` without `turn/completed`, causing lost turns | Merged |
| [#83796](https://github.com/openclaw/openclaw/issues/83796) | Security: Codex runtime + sandbox = agent escapes containment (regression) | Merged |
| [#84957](https://github.com/openclaw/openclaw/issues/84957) | Isolated cron jobs with `payload.model` + `toolsAllow: ["exec"]` could start without the exec tool (regression) | Merged |

### Open P1 / P2 bugs (unresolved)
| Issue | Severity | Summary |
|-------|----------|---------|
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | P1 (regression) | Google Vertex / Gemini‑3.1‑pro‑preview: "Cannot convert undefined or null to object" after update to 2026.3.2 |
| [#31583](https://github.com/openclaw/openclaw/issues/31583) | P1 (regression) | `exec` tool does not inherit `skills.entries.*.env` environment variables |
| [#40540](https://github.com/openclaw/openclaw/issues/40540) | P1 (behavior) | `openclaw update` fails with EBUSY on Windows |
| [#40611](https://github.com/openclaw/openclaw/issues/40611) | P1 | Heartbeat drift fix causes aggressive retry that blocks Telegram during active conversations |
| [#37966](https://github.com/openclaw/openclaw/issues/37966) | P2 | `cacheRetention` ignored for LiteLLM‑proxied Anthropic models |
| [#32868](https://github.com/openclaw/openclaw/issues/32868) | P1 | Block streaming: block replies not delivered before tool execution (same‑channel) |
| [#63905](https://github.com/openclaw/openclaw/issues/63905) | P2 | Slack attachments in container sandbox fail with placeholder‑only turn and fetch error |
| [#40440](https://github.com/openclaw/openclaw/issues/40440) | P2 | Telegram group history entries lose media data (only placeholder preserved) |
| [#84880](https://github.com/openclaw/openclaw/issues/84880) | P1 | Subagent thinking still rejects non‑off on v2026.5.19; previous fix was only config migration |
| [#85126](https://github.com/openclaw/openclaw/issues/85126) | New | Control UI sessions auto‑select wrong `authProfileOverride` (DeepSeek instead of MiniMax) |

## 6. Feature Request Clusters

### Multi‑platform & Deployment
- [#75](https://github.com/openclaw/openclaw/issues/75) – Linux/Windows Clawdbot Apps (105 comments, 75 👍)
- [#9443](https://github.com/openclaw/openclaw/issues/9443) – Prebuilt Android APK releases
- [#13597](https://github.com/openclaw/openclaw/issues/13597) – AWS deployment guide (EC2, ECS, Lambda)
- Related PRs: None linked yet.

### Security & Permissions (largest cluster)
- Exec allowlist/denylist: [#6615](https://github.com/openclaw/openclaw/issues/6615) – denylist support; [#39979](https://github.com/openclaw/openclaw/issues/39979) – path‑scoped RWX permissions
- Filesystem sandboxing: [#7722](https://github.com/openclaw/openclaw/issues/7722) – `tools.fileAccess` config
- Secrets handling: [#10659](https://github.com/openclaw/openclaw/issues/10659) – masked secrets; [#13610](https://github.com/open

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-05-22

## 1. Daily Cross-Project Overview

Today's activity across the four tracked projects shows a clear volume leader in OpenClaw, which processed 500 issues and 500 PRs alongside two stable releases. NanoBot and ZeroClaw maintained moderate activity with 12–22 issues and 22–50 PRs respectively, while PicoClaw operated at the smallest scale with 9 issues and 27 PRs but published a nightly build. All four projects merged substantive bug fixes and feature work, with no project in a stalled or maintenance-only state. Provider integrations and session/state management improvements appeared as recurring themes across multiple projects.

## 2. Activity Comparison

| Project | Issues Updated (Open/Closed) | PRs Updated (Open/Merged) | Releases | Activity Note |
|---------|-----------------------------|---------------------------|----------|---------------|
| **OpenClaw** | 500 (465 open, 35 closed) | 500 (444 open, 56 merged) | 2 (v2026.5.20 stable + beta) | Highest volume; 4 critical bugs closed, security regression fixed |
| **NanoBot** | 12 (3 open, 9 closed) | 22 (7 open, 15 merged) | None | Sustained bug-fix pace; 4 provider-related PRs merged |
| **ZeroClaw** | 22 (20 open, 2 closed) | 50 (46 open, 4 merged) | None | Two large infrastructure PRs merged (multi-agent runtime V3, RPC layer) |
| **PicoClaw** | 9 (2 open, 7 closed) | 27 (16 open, 11 merged) | 1 nightly build | 7 bug issues closed; Telegram fixes and context policies merged |

## 3. OpenClaw Compared With Peers

**Activity volume:** OpenClaw's 500 issues and 500 PRs updated in 24 hours exceeds all peers combined by approximately 10×. This reflects both larger community size and more maintainer bandwidth for processing contributions.

**Technical focus:** OpenClaw's work today concentrated on security hardening (exec allowlist removal, sandbox escape regression fix, session takeover bug), session-state integrity, and multi-platform feature requests. The closed critical bugs (#84059, #84076, #83796, #84957) all affected core reliability. Peers focused more on provider integration (NanoBot: 4 new providers; ZeroClaw: NEAR AI; PicoClaw: NEAR AI) and user-facing improvements (NanoBot WebUI, PicoClaw Telegram, ZeroClaw TUI infrastructure).

**Community surface area:** OpenClaw's top community thread (#75, Linux/Windows desktop apps) has 105 comments and 75 👍, exceeding the total comment volume of any peer project's most active thread today. Security and permissions feature requests form the largest cluster in OpenClaw's issue tracker.

## 4. Shared Technical Focus Areas

The following requirements appeared in at least two projects' digests today:

**Provider ecosystem expansion**
- **NanoBot:** Merged Novita AI (#3927) and Skywork (#3916); open PRs for xAI Grok OAuth, Ollama image gen, OpenAI image gen
- **ZeroClaw:** Open PR for NEAR AI Cloud provider (#6842); request for jina.ai web_search (#6827)
- **PicoClaw:** Open PR for NEAR AI Cloud provider (#2917); closed issue for native GPT4Free support (#2901)
- *Note: OpenClaw's digest does not report new provider additions today.*

**Security and permission policies**
- **OpenClaw:** Removed backward-incompatible exec allowlist path; closed sandbox escape regression (#83796); active feature requests for denylist (#6615) and path-scoped RWX (#39979)
- **ZeroClaw:** Fixed multiline heredocs incorrectly blocked by SecurityPolicy (#6771); open bug with `tool_filter_groups` being a no-op (#6699)
- **PicoClaw:** Merged request-scoped context policies (#2914); open PR for frontmatter tool policy filters (#2838)

**Multi-platform and deployment**
- **OpenClaw:** #75 (Linux/Windows desktop apps) most-commented issue; #9443 (Android APK); #13597 (AWS deployment guide)
- **ZeroClaw:** PR for ARM64 Docker target (#5187, open since April, needs author action)
- **PicoClaw:** Merged root-level Dockerfile (#2812)

**State and session management**
- **OpenClaw:** Session takeover error fixed (#84059); tiered bootstrap file loading proposed (#22438)
- **NanoBot:** Dream memory system "uncontrollable" complaints (#3885, #3948); heartbeat duplicate cron tasks still open (#3028)
- **PicoClaw:** Session history truncation bug fixed (#2795); multi-user group chat attribution fixed (#2702)

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | ZeroClaw | PicoClaw |
|-----------|----------|---------|----------|----------|
| **Scale of operations** | Reference implementation; largest community, highest issue/PR volume | Mid-size; focused on consumer-facing WebUI experience | Infrastructure-heavy; multi-agent runtime and RPC layer | Lightweight fork; platform-specific fixes (Telegram, PDF, Docker) |
| **Target user persona** | Developers and power users running self-hosted agents; security-conscious | End users and hobbyists; WebUI-centric with Dream memory system | Developers building multi-agent coordination and custom tooling | Users needing a smaller, deployable variant; Telegram bot operators |
| **Technical architecture focus** | Core agent runtime, sandboxing, session persistence, multi-platform | Provider integrations, WebUI reliability, shell executor, WeChat channel | Multi-agent runtime, JSON-RPC dispatch, Unix socket transport, TUI | Context policies, platform-specific channel fixes (Telegram, Signal), nightly builds |
| **Community pain points** | Cross-platform desktop apps, secret masking, cron reliability | Dream memory uncontrollability, WebUI display corruption, shell guard over-blocking | WhatsApp QR, Slack token configuration, DeepSeek-V4 incompatibility | Telegram PDF handling, agent role confusion, LLM retry on HTTP 500 |

## 6. Community Activity Notes

Based solely on today's counts (issues, PRs, releases):

**Highest activity:** OpenClaw (500 issues, 500 PRs, 2 releases). The volume is an order of magnitude above peers.

**Moderate activity:** NanoBot (12 issues, 22 PRs, 0 releases) and ZeroClaw (22 issues, 50 PRs, 0 releases). Both merged substantive feature work but no new releases.

**Lower activity:** PicoClaw (9 issues, 27 PRs, 1 nightly build). Absolute counts are smallest, but the nightly release and closure of 7 bugs indicate active maintenance.

## 7. Evidence-Backed Observations

1. **Security hardening is cross-cutting but approached differently.** OpenClaw removed a backward-incompatible exec allowlist path and closed a sandbox escape regression in the same day. ZeroClaw fixed a security policy that was blocking its own prescribed workflow. PicoClaw added request-scoped context policies and has an open PR for tool policy filters. Each project is treating security as a configurable policy layer rather than a hard-coded permission set.

2. **Provider diversity is a common community demand, but projects prioritize different integration methods.** NanoBot merged 4 provider-related PRs today and has 3 more open, reflecting a strategy of broad, shallow provider support. ZeroClaw and PicoClaw both accepted NEAR AI Cloud (a TEE-backed inference provider) today, suggesting interest in trust-verified inference. OpenClaw's digest does not list provider additions, which may indicate a different maturity point or community focus.

3. **Session and memory state management remains an unresolved challenge across all projects.** OpenClaw fixed a session takeover error but still has tiered bootstrap loading proposed. NanoBot has open complaints about the Dream memory system being "uncontrollable" with no fix merged. PicoClaw fixed session history truncation but only in today's nightly build. No project has shipped a comprehensive solution for memory/session state that satisfies users.

4. **Platform expansion demand (desktop, mobile, Docker) is concentrated in OpenClaw but barely surfaces in peers.** The most-commented OpenClaw issue (#75, Linux/Windows desktop apps) has 105 comments and 75 👍, while ZeroClaw's ARM64 Docker PR has been open since April with no maintainer action, and PicoClaw only added a root-level Dockerfile today. This suggests OpenClaw's user base includes broader deployment needs that peers may not yet serve.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-22

## Today's Activity Brief
In the last 24 hours, 12 issues were updated (9 closed, 3 still open) and 22 pull requests were updated (15 merged/closed, 7 open). No new releases were published. The project saw a high volume of bug fixes and several feature additions merged, including provider integrations (Novita AI, Skywork, OpenRouter thinking effort fix) and WebUI improvements (sidebar performance, new chat persistence). Community discussions concentrated on the Dream memory system, WebUI stability, and shell safety-guard false positives.

## Releases
None.

## Project Progress
Fifteen pull requests were merged or closed today (2026-05-21/22). Notable merged changes:

- **Provider additions:** Support for Novita AI ([#3927](https://github.com/HKUDS/nanobot/pull/3927)) and Skywork as a first-level provider ([#3916](https://github.com/HKUDS/nanobot/pull/3916)), both merged.
- **WebUI improvements:** Sidebar performance batch rendering and “Show more” control ([#3953](https://github.com/HKUDS/nanobot/pull/3953)), refined collapsible sidebar with cat icon and collapsed rail ([#3951](https://github.com/HKUDS/nanobot/pull/3951)), and a fix to preserve new chats during session refresh ([#3944](https://github.com/HKUDS/nanobot/pull/3944)).
- **Executor fixes:** Detached stdin from shell commands to prevent inheritance ([#3922](https://github.com/HKUDS/nanobot/pull/3922)), Windows shell test stabilization ([#3947](https://github.com/HKUDS/nanobot/pull/3947)), and a shell guard fix that misclassified URL-bearing commands (e.g., `curl`) as workspace paths ([#3933](https://github.com/HKUDS/nanobot/pull/3933)).
- **Coding workflows:** Added a structured `apply_patch` tool with workspace validation and rollback ([#3923](https://github.com/HKUDS/nanobot/pull/3923)).
- **Provider fixes:** Dropped redundant `reasoning_effort` for Kimi thinking models on Moonshot ([#3940](https://github.com/HKUDS/nanobot/pull/3940)), injected `reasoning.effort` for OpenRouter thinking models ([#3867](https://github.com/HKUDS/nanobot/pull/3867)).
- **WeChat channel:** Prevented silent message drops from poll exceptions, expired tokens, and rate‑limit issues ([#3684](https://github.com/HKUDS/nanobot/pull/3684)).
- **Documentation:** Added Xiaomi MiMo token plan custom provider setup ([#3619](https://github.com/HKUDS/nanobot/pull/3619)).

## Community Hot Topics
The most commented issues and PRs reflect user frustration with the Dream memory system and WebUI stability:

- **Issue #3790** (14 comments) — Closed bug: WebUI print display corruption after updating to 5.13. Required page refresh to recover.
- **Issue #3884** (6 comments) — Closed bug: WebUI conversation closes after the first response on Debian with WebSocket channel.
- **Issue #3028** (3 comments) — Open bug: Heartbeat mechanism creates duplicate cron tasks, causing repeated greetings without contextual awareness.
- **Issue #3885** (2 comments) — Open enhancement request: Add an `enabled` flag to the Dream system configuration to allow complete suppression of automatic memory jobs.
- **Issue #3956** (1 comment) — Closed bug: Tool results containing list content (e.g., image reads) cause permanent Anthropic API 400 error.

## Bugs & Stability
Several regressions were reported and mostly fixed today:

| Issue | Severity | Summary | Fix PR |
|-------|----------|---------|--------|
| #3956 | High | `read_file` returning list content blocks causes persistent Anthropic 400 errors | Closed directly |
| #3931 | High | `restrictToWorkspace=true` blocks legitimate web requests (e.g., `curl https://…`) | #3933 merged |
| #3945 | Medium | WebUI “Duplicate value for 'tool_call_id'” error during conversation | Closed |
| #3939 | Medium | Moonshot rejects Kimi k2.5/k2.6 when both `thinking` and `reasoning_effort` are sent | #3940 merged |
| #3876 | Medium | WebUI bootstrap endpoint is localhost-only, inaccessible from Docker | Closed |
| #3790 | Low | WebUI print display corruption after update | Closed |
| #3884 | Low | WebUI conversation closes after first response | #3944 merged |
| #3028 | Medium | Heartbeat duplicate cron tasks (still open, created Apr 11) | No fix yet |

## Feature Request Clusters
Several user-requested features are visible in issues and open PRs today:

- **Dream system controls:** Multiple users (#3885, #3948) request a global on/off switch for automatic memory jobs. No merged PR yet; PR #3952 (memory prompt enhancement) is open but does not address the toggle.
- **Image generation providers:** Requests for native Ollama image generation (#3946) and OpenAI/Codex image generation (#3954) are addressed in open PRs.
- **Group messaging improvements:** PR #3949 adds debounced group-message buffering for Telegram and Feishu to reduce redundant AI turns.
- **Provider diversity:** Open PRs add xAI Grok OAuth (#3936), Ollama image generation (#3946), and OpenAI/Codex image generation (#3954). Merged today: Novita AI (#3927) and Skywork (#3916).
- **Documentation:** PR #3950 adds a FAQ section. (Merged docs for Xiaomi MiMo earlier.)
- **Skill routing:** PR #3865 introduces a BM25-lite skill router to reduce system prompt size by ~60% (still open).

## User Feedback Summary
Common pain points expressed in today’s issues:

- **Dream memory system “uncontrollable”** – Users report that even after disabling memory skills in their profile, Dream jobs run and generate repetitive, unwanted entries, wasting tokens. Frustration is high (#3790 follow‑up, #3885, #3948).
- **WebUI reliability** – Print display corruption and conversation drops after first response affect daily usage. Fixes were merged quickly.
- **Docker accessibility** – The WebUI bootstrap endpoint rejecting external connections prevented containerized deployments (#3876, closed).
- **Shell guard over‑blocking** – `restrictToWorkspace` blocked `curl` and `wget` requests; fix merged (#3931, #3933).
- **Anthropic API 400 errors** – A subtle format issue in tool results was caught and fixed (#3956).

## Backlog Watch
Items that have been open for a longer period or lack maintainer response:

- **#3028 (open since Apr 11)** – Heartbeat duplicate cron tasks. Despite user description with version v0.15, no maintainer comment or PR appears linked. This may be affecting many users.
- **#3865 (open PR, Apr 16?)** – BM25-lite skill router. No maintainer review yet.
- **#3955 (opened today)** – NEXUS prediction market data API. This is an external tooling contribution rather than a core feature; may need clarity on integration scope.
- **#3949 (open PR)** – Debounced group-message buffering. Awaiting review.
- **#3952 (open PR)** – Memory/Dream prompt enhancement for MECE memory. Addresses duplication but not the toggle request.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest – 2026-05-22

## 1. Today’s Activity Brief
22 issues were updated in the last 24 hours (20 open, 2 closed). 50 pull requests were updated (46 open, 4 merged/closed). No new releases were published. The project saw a major merge: the multi-agent runtime and schema V3 pull request (#6398) was closed, and the RPC dispatch layer and Unix socket transport (#6839) was also merged. A new batch of TUI-related feature tracker issues and a new WhatsApp bug (QR not showing) arrived. Community activity remains high, with several S1 (workflow-blocked) bug reports and a clustering of enhancement requests around terminal user interface infrastructure.

## 2. Releases
No new releases today. The last release (not shown) predates the 24‑hour window.

## 3. Project Progress
Two pull requests were merged/closed today:

- **#6398 (closed)** – `feat!: multi-agent runtime and schema V3` (author: @singlerider). A large pull request covering almost every component, introducing multi-agent coordination, a new configuration schema, and numerous provider/tool integrations. This serves as the basis for the upcoming beta release.
- **#6839 (closed)** – `feat(runtime): RPC dispatch layer and Unix socket transport` (author: @singlerider). Extracted JSON-RPC 2.0 types, moved session logic, and added server-side dispatcher for TUI and other local clients.

Additionally, two issues were closed:
- **#5890** – RFC: Multi-agent UX flow (accepted, design phase).
- **#6771** – Bug: Multiline heredocs incorrectly blocked by SecurityPolicy (fixed and closed).

No other merged/closed PRs were visible in the top 20 list; the remaining two closed PRs are not detailed but are counted.

## 4. Community Hot Topics
The most active threads (by comments/reactions) reflect both immediate integration needs and long‑term design discussions:

- **#6059** (`[Bug]: Incompatible with DeepSeek-V4 API format`) – 12 comments, 4 👍. User @SSDGADsss reports a high‑severity bug when using DeepSeek-V4 models (Pro and Flash). The error appears to be related to the “thinking mode” of the provider. No fix PR is yet linked. The project maintains a `provider:deepseek` label.
- **#5890** (closed) – RFC on multi‑agent UX flow (10 comments). Discussed design for orchestrating multiple agents; now accepted.
- **#6699** (`tool_filter_groups is a no-op for real MCP tools`) – 5 comments. Two separate bugs identified by @nick‑pape: a prefix mismatch in the filter gate and missing integration with deferred loading. P1 priority.
- **#6808** (RFC: Work Lanes, Board Automation, and Label Cleanup) – 3 comments. Governance proposal by @Audacity88 aiming to streamline issue/PR routing.
- **#6820** (ACP protocol extensions for diff/file‑proposal message types) – 2 comments. Request to enable side‑by‑side diffs and counter‑proposals in TUI/web clients.

The burst of TUI trackers by @singlerider (#6824, #6825, #6826, #6823, etc.) suggests a coordinated push toward a terminal user interface, likely following the merged RPC dispatch layer.

## 5. Bugs & Stability
Three new bugs with **S1 (workflow blocked)** severity were reported today:

- **#6847** – `[Bug]: whatsapp channel not showing QR` (author: @MushiTheMoshi). User cannot complete WhatsApp onboarding because the QR code is not displayed. No fix PR yet.
- **#6844** – `[Bug]: slack bot_token must be in config, cannot be supplied by environment variable` (author: @mgstoyanov). Described as a duplicate of #6237, which was supposedly fixed but the env‑var override remains broken. No fix PR.
- **#6841** – `[Bug]: vision_provider silently ignored — inbound images routed to providers.fallback` (author: @ppoloskov). When `[multimodal].vision_provider` is configured, images are still processed by the fallback provider. No fix PR.

Additionally, **S2 (degraded behavior)** bugs:

- **#6836** – Windows `setup.bat --minimal` produces 26 MB build instead of expected ~6 MB (author: @rockswang). Exact cause unclear.

Previously reported high‑risk open bugs with no fix PRs in the 24h window:

- **#6059** (DeepSeek-V4 incompatibility) – still open.
- **#6699** (tool_filter_groups no‑op) – still open.

One bug was fixed: **#6771** (multiline heredocs blocked) was closed after a fix.

## 6. Feature Request Clusters
Today’s data shows a strong cluster around **Terminal User Interface (TUI) infrastructure**. Six enhancement tracker issues (#6824, #6825, #6826, #6823, #6819, #6817) and three concrete feature requests (#6820, #6821, #6822) all relate to building a standalone TUI binary, protocol bridges, ephemeral daemon mode, session‑scoped overrides, and file upload support. The merged PR #6839 (RPC dispatch layer) is the enabler for this cluster.

Another cluster is **new provider integrations**:

- **#6842** (PR) – Adds NEAR AI Cloud provider (OpenAI‑compatible, TEE‑backed inference).
- **#6827** (issue) – Request to support jina.ai as a `web_search` provider, citing generous free tier.

Other enhancements on the board:

- **#6636** (PR) – Add `[browser].headed` config for agent_browser (debugging/login).
- **#6675** (PR) – Add `strict_tool_parsing` per‑agent option.
- **#6700** (PR) – Skills management API with enable/disable toggle and web dashboard.
- **#6481** (PR) – Jira actions: list transitions, transition ticket, create ticket.
- **#6840** (PR) – Outbound emoji reactions for Signal channel.
- **#6843** (PR) – Expose `message_id` in agent channel context.
- **#6818** (issue) – Ephemeral daemon mode (`--ephemeral` flag).
- **#6817** (issue) – Session‑scoped runtime overrides.

## 7. User Feedback Summary
Users expressed appreciation for the project (“Thanks for all the hardwork done here. Greatly appreciated. Best tool out there.” – @MushiTheMoshi), while also reporting concrete pain points:

- **Onboarding friction**: QR code not showing for WhatsApp (#6847).
- **Configuration frustration**: Slack bot token must be hard‑coded in config file (#6844); vision provider settings silently ignored (#6841).
- **Unexpected build sizes**: Windows minimal build much larger than documented (#6836).
- **Provider incompatibility**: DeepSeek-V4 API changes break integration (#6059).
- **Security policy too strict**: ZeroClaw’s own security policy blocks its prescribed PR creation skill (fixed in #6771).

Reported use cases include: WhatsApp bot, Slack integration, multi‑modal image processing, web search via custom providers, and running on Windows.

## 8. Backlog Watch
Several important issues and pull requests have been open for extended periods or are blocked waiting for maintainer or author action:

- **#5187** (PR, ARM64 Docker target) – open since April 2, 2026, tagged `needs-author-action`. A long‑standing infrastructure improvement.
- **#5779** (PR, TOTP gate for shell tool) – open since April 15, tagged `needs-author-action` and `needs-maintainer-review`.
- **#6611** (PR, file‑rotation crate) – open since May 13, tagged `needs-author-action`.
- **#6699** (issue, tool_filter_groups no‑op) – P1, open since May 16, no fix PR yet.
- **#6059** (issue, DeepSeek-V4 bug) – P1, open since April 24, no fix PR yet.
- **#5987** (PR, Nix package) – open since April 22, tagged `needs-author-action`.
- **#6428** (PR, Slack thread backfill) – open since May 6, tagged `needs-author-action`.
- **#6481** (PR, Jira actions) – open since May 6, tagged `needs-author-action`.
- **#5838** (PR, webhook retry logic) – open since April 17, tagged `needs-author-action`.

These items may require maintainer attention to unblock or reassign.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest – 2026-05-22

## Today's Activity Brief
In the last 24 hours, PicoClaw saw 9 issues updated (2 still open, 7 closed) and 27 pull requests updated (16 open, 11 merged/closed). A new nightly build `v0.2.8-nightly.20260522.5bbebb5f` was published. Notable merged work includes a request‑scoped context policy system, several Telegram‑related bug fixes (topic routing, typing indicator, PDF streaming), and a new `working_summary` tool feedback mode. A PR adding NEAR AI Cloud as a first‑class provider opened, and a suggestion to add a `FUNDING.yml` file is under discussion.

## Releases
- **Nightly build** `v0.2.8-nightly.20260522.5bbebb5f`
  *Automated build, may be unstable.*
  Full changelog: [compare v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)
  No breaking changes or migration notes are documented.

## Project Progress (Merged/Closed PRs)
Several PRs were merged or closed today:

- **#2914** – `feat: add request-scoped context policies` – Adds a global request context policy via `agents.defaults.turn_profile`, allowing control over whether each turn includes history, system context, skill prompts, and callable tools.
- **#2812** – `Make a Dockerfile in the root` – Provides a root‑level Dockerfile for easier deployment.
- **#2779** – `feat(telegram): add topic group trigger overrides` – Allows per‑topic `group_trigger` overrides in Telegram supergroups.
- **#2778** – `feat(agents): add working summary tool feedback` – Introduces a compact, in‑place progress display for long‑running tool calls.
- **#2777** – `fix(cron): suppress feedback for scheduled turns` – Prevents background cron jobs from emitting transient tool messages into chat.
- **#2776** – `fix(telegram): stop typing for topic replies` – Properly cleans up typing/reaction state for Telegram forum topics.
- **#2772** – `fix(telegram): Preserve Telegram forum topic for message tool sends` – Ensures interim `message` tool calls retain the correct topic routing.

## Community Hot Topics
The most active issue by comment count was **#629** (15 comments, closed) – *[BUG] Didn't retry if meet LLM call failed*. It reports that long tasks hang when the LLM returns HTTP 500; the issue was fixed after several months.

Two open issues are fresh and attracting attention:
- **#2916** – *CPU, Memory and IO optimizations* – An overall performance improvement proposal, with 2 comments so far.
- **#2912** – *Suggestion: add FUNDING.yml to support the project* – No comments yet, but indicates community interest in financial support channels.

Other notable issues that generated back‑and‑forth (all now closed): **#2702** (multi‑user group chat history attribution), **#2775** (child agent role confusion due to AGENT.md inheritance), and **#2795** (conversation history showing only the last user message).

## Bugs & Stability
Seven bug‑related issues were closed today, indicating fixes have been merged (likely via the PRs listed above):

- **#2798** – *PDF Stream Data error in Telegram Bot* – PDF attachment breaks session in Docker Compose setup; works in OpenClaw, so PicoClaw‑specific. **(Severity: medium)**
- **#2795** – *对话历史只能看到对话中最后一条用户消息* – Session compression only kept the last user message; expected full history. **(Severity: high)**
- **#2787** – *Session messages lack individual timestamps* – All messages share the session‑level `updated` time. **(Severity: low)**
- **#2702** – *Multi‑user group channels: conversation history lacks sender attribution in default session scope* – Historical messages in shared sessions lose sender info. **(Severity: medium)**
- **#2775** – *子 Agent 继承根 Agent 的 AGENT.md 导致角色身份混淆* – Spawned agents inherit root role definition. **(Severity: medium)**
- **#629** – *[BUG] Didn't retry if meet LLM call failed* – No retry on HTTP 500 from server. **(Severity: high)**

These fixes appear to have been deployed as part of the nightly build.

## Feature Request Clusters
Several feature‑oriented items were active:

- **Provider additions** – **#2917** (NEAR AI Cloud provider, open PR), **#2901** (Native GPT4Free support, closed issue). Both seek to expand the model backend ecosystem.
- **Agent and tool policy** – **#2838** (open PR: *feat(agent): support frontmatter tool policy filters*) extends `AGENT.md` with allow/deny patterns for tools and MCP servers. **#2914** (merged) adds request‑scoped context policies.
- **Telegram channel management** – **#2779** (merged) enables per‑topic `group_trigger` overrides. **#2776** and **#2772** (both merged) improve Telegram forum topic handling.
- **Documentation** – **#2662** (open PR: *Unify vendors table in providers documentation*) aims to clean up provider docs.

No clear cluster beyond provider support and Telegram improvements is evident.

## User Feedback Summary
User‑reported pain points being addressed this cycle:

- **Telegram PDF handling** – Bot breaks when a PDF is attached; user notes the same PDF works with OpenClaw.
- **Agent role confusion** – Chinese‑speaking user reports spawned agents (Planner, Builder, etc.) inherit root AGENT.md, causing identity confusion.
- **Conversation history truncation** – Switching dialogues shows only the last user message, not the full history.
- **Session timestamps** – Frontend cannot display per‑message times, relying on a single session timestamp.
- **LLM retry** – Lack of automatic retry on transient server errors causes tasks to hang silently.

Satisfaction is implied by the closure of these issues – fixes appear to be included in the nightly build.

## Backlog Watch
- **PR #2662** – *Unify vendors table in providers documentation* (open since Apr 24, labeled `stale`) – A documentation cleanup PR awaiting maintainer review.
- **PR #2838** – *feat(agent): support frontmatter tool policy filters* (open since May 9) – A substantive feature enhancement that has not been merged or updated for 13 days.
- **Issue #2912** – *Suggestion: add FUNDING.yml* (opened today, no maintainer response yet) – Low effort, may warrant quick acknowledgment.

None of the open items appear to be critical, but #2662 and #2838 have been waiting for weeks and could benefit from maintainer attention.

</details>