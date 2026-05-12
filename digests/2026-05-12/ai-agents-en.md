# OpenClaw Ecosystem Digest 2026-05-12

> Issues: 500 | PRs: 500 | Projects covered: 4 | Generated: 2026-05-12 02:09 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-05-12

## 1. Today's Activity Brief
In the last 24 hours, the project saw 500 updated issues (426 open, 74 closed) and 500 updated pull requests (436 open, 64 closed/merged). Three new beta releases were published (v2026.5.10-beta.3 through beta.5), adding CI artifact improvements, Fly.io environment detection, and stricter TypeScript/formatting checks. A batch of issues filed by @100yenadmin around Codex runtime parity was closed after investigation revealed they were QA harness/fixture bugs rather than user-facing runtime regressions.

## 2. Releases
Three new releases were created today:

- **v2026.5.10-beta.5**: Non-blocking `plugin-inspector-advisory` artifact added to Plugin Prerelease CI. Fly Machines are now detected as container environments via runtime env vars, allowing proper gateway binding.
- **v2026.5.10-beta.4**: Same CI and Fly changes as beta.5.
- **v2026.5.10-beta.3**: Stricter Vitest lint rules for focused, disabled, conditional, hooks, matchers, and expectations. Explicit oxfmt defaults pinned in shared formatter config. TypeScript compiler checks strengthened.

No breaking changes or migration notes were announced.

## 3. Project Progress
In the last 24 hours, 64 PRs were closed or merged, and 74 issues were closed. Concrete changes that advanced:

- **PR #80675** (merged): Surface explicit error on LLM idle timeout to prevent ghost turns.
- **PR #74186** (open): Detect `media://` URIs before sandbox bridge path resolution – under review.
- **PR #64717** (open): Telegram now respects configured text chunk limit.
- **PR #64719** (open): Security fix – deny dangerous tools (exec, read, write, etc.) for channel auto-reply.
- **PR #64718** (open): Default exec tool to `deny` for non-owner auto-reply senders.
- **PR #64712** (open): Suppress phantom default Feishu account in channel-summary when no accounts configured.
- **PR #64703** (open): Parse scientific notation (e.g. `1e5`) as number in config values.
- **PR #64416** (open): Normalize ACP completion delivery guidance to reduce duplicate chatter.
- **PR #64384** (open): Fix proactive compaction scheduler not re-firing after first checkpoint (bug #63892).

Many of the recently closed issues were QA-related corrections (see Bugs & Stability section).

## 4. Community Hot Topics

### Most commented issues (all with 10+ comments)

- **#76877** – [Bug] Agents stop responding mid-work (14 comments, 4 👍). Regression in 2026.5.2; user reports tool calls abruptly stop until progress query. Still open.
- **#62505** – [Bug] Coding Agent never completes anything (12 comments, 1 👍). Worked in 2026.4.2, regression in later versions. Still open.
- **#80319** – QA tool-defaults suite conflates Codex-native tools with OpenClaw dynamic tool parity (12 comments, 1 👍). Resolved – was a mock provider incompatibility.
- **#58450** – Agent can promise later follow-up without starting any follow-up action (12 comments, 2 👍). User-facing behavior bug; agent appears to lie. Still open.
- **#61278** – Gateway startup too slow due to hook initialization blocking (11 comments). Startup takes ~4 minutes. Still open.
- **#76562** – High CPU, extreme control-plane RPC latency after upgrade to 2026.4.29/2026.5.2 (10 comments, 4 👍). Gateway CPU pinned at 100%. Still open.
- **#63101** – Feishu channel config validation fails after upgrade (10 comments). Config schema changed between v4.5 and v4.8. Still open.
- **#80320**, **#80312**, **#80236**, **#80321**, **#80434** – All closed as QA harness bugs (9-10 comments each). @100yenadmin filed multiple issues that were later found to be mock provider artifacts, not product bugs.

### Most commented PRs
Comment counts were not provided, but the following PRs had active discussion:
- **#64717** (Telegram chunk limit)
- **#64656** (Auto-failover isolation and overflow circuit breaker)
- **#64318** (Unified Amazon plugin – Polly, Transcribe, Nova Sonic)

**Underlying needs**: Users are frustrated by agent reliability regressions (mid-turn silence, never-completing coding tasks) and performance degradation after upgrades. Config schema breakage (Feishu) and slow startup also generate high engagement. Several users request better transparency when agents promise actions they don't execute.

## 5. Bugs & Stability

### High severity (active, user-facing)
- **#76877** – Agents stop responding mid-work – regression, no fix PR identified.
- **#62505** – Coding agent never completes – regression, no fix PR.
- **#76562** – High CPU / control-plane latency – regression, may need significant debugging.
- **#63216** – Repeated hard resets on same session despite high `reserveTokensFloor` – retry loop injects bootstrap context.
- **#58479** – Approval dialog succeeds but exec never consumes approval – causes double approval IDs.
- **#80040** – Cascading failure: OAuth invalidation → placeholder reply → duplicate tool execution → cold-cache context loss.
- **#64500** – `globalCircuitBreakerThreshold` blocks per-tool only, not per-pair, allowing ping-pong loops to survive.
- **#63819** – Sessions stuck in “running” status after timeout.
- **#72879** – Google Generative AI `thought_signature` 400 error regressed in 2026.4.25.
- **#57901** – Safeguard compaction ignores `compaction.model` config.
- **#63612** – `Cannot read properties of undefined (reading 'length')` in compaction token estimation.
- **#80777** – Pre-fix plaintext tokens in config audit log persist indefinitely after upgrade.
- **#59330** – Control UI Raw mode permanently disabled since 2026.3.31.
- **#80437** – Discord native slash command deploy failed (regression).
- **#61137** – Intermittent JSON parse error on arm64 (Raspberry Pi 5).
- **#63905** – Slack attachments in container sandbox fail with `invalid onRequestStart method`.

### Recently closed QA harness bugs (non-user-facing)
- **#80319**, **#80320**, **#80312**, **#80236**, **#80321**, **#80434** – All closed after correction. These were not runtime bugs but mock provider/harness issues.

Many of the open high-severity bugs do not yet have associated fix PRs. The `pre-commit` and `triage: needs-real-behavior-proof` labels appear on several PRs and issues.

## 6. Feature Request Clusters

### Memory & Context
- **#63829** (6 👍) – Per-agent memory-wiki vault configuration. PR #64647 (open) implements per-agent memory backend overrides.
- **#63990** – Multi-index embedding memory with model-aware failover.
- **#60572** (3 👍) – Multi-slot memory architecture (multiple memory plugins simultaneously).
- **#63892** – Proactive compaction scheduler should re-fire after first checkpoint (bug fix in PR #64384).

### Performance & Startup
- **#61278** – Async/non-blocking hook loading for faster gateway startup.
- **#78851** (2 👍) – HTTP connection pooling for model resolution (7-8s per run).
- **#59413** – Per-candidate retry count for model fallback (proxy/pool providers).

### Security & Auditing
- **#64046** – Sensitive data masking (API keys in configs, logs, UI).
- **#80777** – Pre-fix plaintext tokens in audit log not scrubbed after upgrade (bug + feature request).
- **#64344** – PR to distinguish `${ENV_VAR}` from plaintext in secrets audit.

### Integration & Providers
- **#63930** – Support Anthropic advisor tool (server-side tool). PR #64064 (open) implements this.
- **#64318** – PR to add unified Amazon plugin (Polly, Transcribe, Nova Sonic).
- **#62924** – Expose actual media-understanding model name in agent context.

### Multi-Tenancy & Isolation
- **#60127** – Multi-tenancy support (RBAC, scoped resources) in single instance.
- **#63829** – Per-agent vault (see above).

No prediction made on shipping timeline.

## 7. User Feedback Summary

- **Reliability regressions** are the most painful theme: agents that stop responding (issue #76877), coding agents that never finish (#62505), and approval flows that double-fire (#58479). Users downgrading to older versions reported.
- **Performance degradation**: Gateway CPU saturation (#76562) and slow startup (#61278) are frustrating operators; one user described “pinned 100% CPU” after a minor upgrade.
- **Configuration breakage**: Feishu channel validation (#63101) and Telegram multi-account regression (#62985) caused restart failures. Users expect backward compatibility in config schema.
- **Context and compaction frustrations**: Repeated hard resets (#63216), compaction not respecting custom model (#57901), and scheduler never re-firing (#63892) – users tuning for long-running sessions are hitting invisible limits.
- **Security concerns**: Plaintext tokens in audit logs (#80777) and lack of sensitive data masking (#64046) raised by multiple users. Approval-flow bypasses also noted.
- **Positive signals**: The QA harness corrections show maintainers actively auditing code, and new plugin capabilities (e.g., Amazon plugin, advisor tool) are welcomed by developers.

## 8. Backlog Watch

These important issues or PRs have been open for an extended period without clear maintainer resolution or recent updates:

- **#57326** (2026-03-29, 10 comments) – CLI-backed helper paths still bypass CLI dispatch on `main`.
- **#48003** (2026-03-16, 9 comments, 2 👍) – Steer mode does not inject messages mid-turn for main sessions. Root cause identified but no fix integrated.
- **#45698** (2026-03-14, 9 comments) – Control UI becomes progressively stuck after being open for a while.
- **#58450** (2026-03-31, 12 comments, 2 👍) – Agent promises follow-up without starting action – no fix PR.
- **#59330** (2026-04-02, 7 comments, 12 👍) – Control UI Raw mode permanently disabled since 2026.3.31.
- **#60858** (2026-04-04, 5 comments) – Three `hasRealConversationContent` guards silently block compaction – no response from maintainers.
- **#61005** (2026-04-04, 6 comments, 3 👍) – Android onboarding “Connect” button inactive when offline.
- **#63905** (2026-04-09, 6 comments) – Slack attachments in container sandbox fetch error.
- **#63216** (2026-04-08, 9 comments, 1 👍) – Repeated hard resets on same session – no fix PR.
- **#64500** (2026-04-10, 8 comments) – Circuit breaker bypass via ping-pong tool pairs – no fix PR.

Many of these lack a `triage: acknowledged` or maintainer comment. They represent long-standing usability problems that continue to affect users.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-05-12

## 1. Daily Cross-Project Overview

The four tracked projects together saw updates to over 540 issues and roughly 590 pull requests in the last 24 hours, with OpenClaw dominating the volume (500+ issues and PRs each). Two projects published releases: OpenClaw pushed three beta builds (v2026.5.10-beta.3 through beta.5), while PicoClaw cut a single nightly build. NanoBot and Zeroclaw did not tag any releases. Agent reliability regressions appear across projects, with users reporting mid-turn silences, never-completing tasks, and lost messages. Provider integration and media handling improvements were the most active development themes outside bug fixes.

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | Release Status | Activity Note |
|---------|---------------|-------------|----------------|---------------|
| **OpenClaw** | 500 (426 open, 74 closed) | 500 (436 open, 64 merged/closed) | 3 beta releases today | High-velocity churn: large issue/PR volume, many QA harness corrections, several high-severity regressions |
| **NanoBot** | 10 (7 open, 3 closed) | 22 (16 open, 6 merged/closed) | No new release | Moderate activity: merged multi-tenant auth, WebSocket media fix, MiMo reasoning fix; 7 new issues opened |
| **Zeroclaw** | 19 (10 open, 9 closed) | 50 (30 open, 20 merged/closed) | No new release | Moderate-high activity: large `integration/v0.8.0` draft PR active, 20 PRs merged/closed, several bug fixes landed |
| **PicoClaw** | 12 (4 open, 8 closed) | 27 (18 open, 9 merged/closed) | 1 nightly release (v0.2.8-nightly) | Moderate activity: 9 PRs merged, including Telegram media groups, Bedrock streaming, config fix, model API foundation |

## 3. OpenClaw Compared With Peers

OpenClaw’s activity volume (~500 issues and ~500 PRs) is an order of magnitude higher than the other three projects combined. Its 3 beta releases in a single day contrast with zero releases from NanoBot and Zeroclaw and one nightly from PicoClaw. OpenClaw’s community hot topics center on high-severity regressions (agent mid-turn silence, coding agent never completing, CPU saturation at 100%) and have attracted 10+ comments each, signaling broad impact. Many of its open bugs lack fix PRs. In contrast, NanoBot, Zeroclaw, and PicoClaw show more contained bug reports (fewer comments per issue) and have fix PRs associated with most active bugs. OpenClaw also has the largest backlog of items awaiting maintainer attention (issues open since March–April without response). This suggests OpenClaw is the most complex, heavily-used, and resource-constrained project in the ecosystem.

## 4. Shared Technical Focus Areas

The following needs appear across multiple projects based on today’s data:

- **Agent reliability and defect regression**: OpenClaw (#76877, #62505 – agents stop responding), NanoBot (#2828 – DuckDuckGo search hang, now closed), Zeroclaw (#6034 – user message loss in Chinese interactions), PicoClaw (#2796 – history truncation showing only last message). All four projects have active or recently resolved bugs that directly impact user trust in agent behavior.

- **Provider integration expansion**: OpenClaw (unified Amazon plugin PR #64318, Anthropic advisor tool PR #64064), NanoBot (LongCat/Meituan provider, MiMo thinking fix, VolcEngine token support), Zeroclaw (GLM vision capability marking, reasoning field fallback for OpenAI-compatible providers PR #6587), PicoClaw (Bedrock streaming provider, DeepSeek reasoning capture PR #2740). Each project added or enhanced support for at least one LLM provider today.

- **Media handling in channels**: NanoBot (fixed WebSocket media being silently dropped), Zeroclaw (configurable behavior for image-bearing messages without vision path #6574, ComfyUI media provider proposal #6563), PicoClaw (Telegram media group album buffering merged, media attachment proposal for message tool #2855). OpenClaw did not have notable media-related updates today.

- **Search tool robustness**: NanoBot (DuckDuckGo hang fixed, provider-hosted web search proposal #3741), Zeroclaw (web search tool not propagating to Telegram #4083 closed, SearXNG support request #5316), PicoClaw (web search YAML config PR #2647, Gemini Google Search grounding provider #2763). OpenClaw had no search-specific updates today.

**Security / auditing** was a shared focus only between OpenClaw and NanoBot (OpenClaw: sensitive data masking #64046, plaintext tokens in audit log #80777; NanoBot: none prominent today). Memory / context management appeared strongly in OpenClaw (per-agent vault, compaction bugs) and NanoBot (session-level memory isolation, MGP sidecar), but not prominently in Zeroclaw or PicoClaw today.

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Zeroclaw | PicoClaw |
|-----------|----------|---------|----------|----------|
| **Scale & maturity** | Core reference; largest org, highest issue/PR volume, multiple beta releases | Mid-scale; single-tenant to multi-tenant WebUI, focus on consumer IM (Telegram, Feishu, WeChat) | Mid-scale; Rust-based (from context), channel-heavy (Telegram, Matrix, Slack, SOP webhook) | Smallest scale; lightweight, embedded-oriented (Yocto layer, Android APK), RISC-V/arm support |
| **Primary target users** | Developers/deployers of full agent infrastructure | Individual users and small teams, Chinese IM ecosystem (WeChat Work, Feishu) | Operators running multi-channel gateways, Matrix users | Embedded developers, low-resource edge deployments, mobile users |
| **Technical architecture** | TypeScript/Node.js (from PR contexts), large monorepo | Python (from code snippets), single-binary, WebUI + IM channel agents | Rust (from references to cargo, rust-analyzer), modular channel feature gates | Lightweight, possibly C/C++/Go? (Yocto layer, Android native binary) |
| **Key technical directions today** | Bug fix churn, plugin system, compaction scheduler, approval flows | Multi-tenant auth, tool plugin architecture, agent self-correction hooks | Large v0.8.0 integration, SOP webhook, reasoning fallback, media provider | Model config UI foundation, streaming providers, media albums, embedded deployment |
| **Release velocity** | High (multiple betas daily) | Low (no release today, last unknown) | Low (no release today) | Moderate (nightly builds) |

## 6. Community Activity Notes

- **Very High Activity**: OpenClaw – 500+ issues and PRs updated, 3 beta releases. Highest engagement, most user-reported regressions, and most maintainer triage activity.
- **High Activity**: Zeroclaw – 50 PRs, 19 issues, large draft PR for v0.8.0. Active merge/close rate (20 PRs merged/closed).
- **Moderate Activity**: NanoBot (22 PRs, 10 issues) and PicoClaw (27 PRs, 12 issues, 1 nightly release). Both have a manageable number of open items and ongoing coding activity.

*No project shows signs of being abandoned or dormant based on today’s data.*

## 7. Evidence-Backed Observations

1. **Agent reliability regressions are the most painful and widespread issue across projects.** OpenClaw has two high-severity bugs with 14 and 12 comments (#76877, #62505); NanoBot closed a system-hanging DuckDuckGo bug after five weeks; Zeroclaw has an accepted S1 bug for user message loss (#6034); PicoClaw reports history truncation (#2796). Multiple users in OpenClaw and Zeroclaw explicitly mention downgrading to older versions, indicating this is a cross-project pain point.

2. **Provider ecosystem expansion is accelerating, driven by user demand for flexibility and cost control.** Each project added or modified support for at least one LLM provider today, including less common ones (LongCat/Meituan, GLM, MiMo, Bedrock). Users in NanoBot (#3742) and Zeroclaw (#6584) request dynamic model switching and reasoning token support for OpenAI-compatible providers, showing a need to avoid vendor lock-in.

3. **Media handling in multi-modal agent channels is an emerging focus for IM-centric projects.** NanoBot fixed WebSocket media drops, PicoClaw merged Telegram album buffering and proposed media attachments in the message tool, and Zeroclaw discussed configurable image behaviour and ComfyUI media providers. This cluster of activity indicates that users expect agents to handle images, audio, and documents natively in channel conversations.

4. **Search tool reliability and cost are recurring concerns outside the core reference project.** NanoBot’s DuckDuckGo hang (now fixed), Zeroclaw’s web search tool not propagating to Telegram and request for SearXNG, and PicoClaw’s YAML config for search fallback and Gemini grounding all point to a common need for dependable, privacy-respecting search APIs. The closure of Brave’s free tier was cited by PicoClaw users as a reason for alternative search integrations.

5. **No clear cross-project signal emerges for security features beyond OpenClaw.** OpenClaw’s sensitive data masking and audit log scrubbing issues are not mirrored in the other three projects’ today’s digests. This may reflect OpenClaw’s role as the core reference (handling secrets, auditing) while peer projects currently prioritize functionality and reliability over security hardening.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest – 2026-05-12

## 1. Today's Activity Brief

Over the past 24 hours, the NanoBot repository saw updates to **10 issues** (7 open, 3 closed) and **22 pull requests** (16 open, 6 merged/closed). No new releases were published. Two closed issues from earlier periods (DuckDuckGo system hang #2828, bot name/icon configuration #3650) were resolved, while 7 new issues (mostly bugs and feature requests) were opened. The PR list included fixes for MiMo reasoning disabling, WeChat Work file name handling, WebUI crypto shim, and MCP connection robustness, alongside several feature extensions (provider-hosted web search, token usage insights, multi-tenant auth, and tool plugin architecture). Community attention concentrated on cross-session memory isolation, model slash commands, and provider-hosted search tools.

## 2. Releases

No new releases were tagged today. The latest release (if any) remains unchanged.

## 3. Project Progress

Six pull requests were merged or closed in the last 24 hours. These represent concrete improvements and fixes:

| PR | Title | Summary |
|----|-------|---------|
| [#3749](https://github.com/HKUDS/nanobot/pull/3749) | feat(auth): multi-tenant WebUI accounts + per-user state isolation | Converts nanobot from single-tenant to multi-user WebUI. Adds email+password auth, per-user state under `~/.nanobot/users/<ulid>/`. Chat channels remain admin-scoped in v1. |
| [#3673](https://github.com/HKUDS/nanobot/pull/3673) | fix(websocket): pass media through in `_dispatch_envelope` | Fixes a bug where image attachments sent via the `media` field in WebSocket JSON envelopes were silently dropped—agent never received them. |
| [#3733](https://github.com/HKUDS/nanobot/pull/3733) | fix(webui): shim `crypto.randomUUID` for non-secure contexts | Fixes WebUI crash on LAN (plain HTTP) where `crypto.randomUUID` is undefined. Adds a polyfill to `ChatPane.tsx`. |
| [#3734](https://github.com/HKUDS/nanobot/pull/3734) | fix(providers): wire MiMo to thinking_type to allow disabling reasoning (#3585) | Fixes a 1.5-week-old bug where `reasoning_effort: null` did not disable thinking on Xiaomi MiMo. Now maps `"none"` to `thinking: disabled`. |
| [#3736](https://github.com/HKUDS/nanobot/pull/3736) | feat: add LongCat (美团) provider support | Adds first-class provider support for the LongCat (Meituan) API using OpenAI-compatible format with defaults: `https://api.longcat.chat/openai`. |
| (one additional closed PR, not detailed in the top 20) | – | – |

Additionally, a number of open PRs received updates, including refactors to the tool plugin system (#3729) and agent self-correction hooks (#3728).

## 4. Community Hot Topics

The most commented/discussed items in the last 24 hours were:

- [#2828 – DuckDuckGo web search hangs entire system](https://github.com/HKUDS/nanobot/issues/2828) (5 comments, 1 👍)
  *Closed* after 5 weeks. The issue described a severe system freeze when using DuckDuckGo web search, requiring forced VM stop. The fix is likely in the code but no specific commit is linked in the summary.

- [#3650 – [feature] Configure bot name and icon](https://github.com/HKUDS/nanobot/issues/3650) (3 comments)
  *Closed* after 6 days. User requested ability to customise the bot's display name and icon in agent mode (instead of “nanobot is thinking…” with a cat). The solution was to add `"botName"` and related settings in `config.json`.

- [#3744 – Session-level MEMORY for multi-user teams](https://github.com/HKUDS/nanobot/issues/3744) (2 comments)
  *Open* (15 hours old). User asks how multiple IM users sharing the same agent should handle `USER.md` and `MEMORY.md` files, and what the `session/` directory is for. Underlying need: proper cross-session memory isolation per user, a recurring theme.

- [#3741 – Support provider-hosted web search tools with local fallback](https://github.com/HKUDS/nanobot/issues/3741) (0 comments)
  *Open* (1 day old). Proposes a new architecture to support native web search tools exposed by providers (e.g., Azure OpenAI Responses API) while maintaining fallback to local search tools. A related PR (#3743) has been submitted.

## 5. Bugs & Stability

The following bugs were reported or addressed today, ranked by severity:

| Severity | Issue/PR | Description | Fix status |
|----------|----------|-------------|------------|
| **High** | [#2828](https://github.com/HKUDS/nanobot/issues/2828) | DuckDuckGo web search hangs the entire system (force stop required) | **Closed** – assumed fixed; no further details. |
| **Medium** | [#3739](https://github.com/HKUDS/nanobot/issues/3739) | Starting nanobot agent errors when MCP service is not running (`RuntimeError` / `ExceptionGroup`) | **Open** – PR #3740 proposes a TCP probe to avoid event-loop crash. |
| **Medium** | [#3746](https://github.com/HKUDS/nanobot/issues/3746) | WebUI eagerly preloads a >1 MB markdown/code chunk on startup, even when sessions never render code blocks | **Open** – performance regression; no fix PR yet. |
| **Low** | [#3737](https://github.com/HKUDS/nanobot/issues/3737) | WeChat Work files saved with `"unknown"` filename instead of real name from SDK | **Open** – PR #3751 submitted to pass `None` instead of `"unknown"`, allowing SDK to return real filename. |
| **Low** | [#3585](https://github.com/HKUDS/nanobot/issues/3585) | `reasoning_effort: null` does not disable thinking on Xiaomi MiMo | **Closed** – fixed by PR #3734 (merged today). |

Other minor fixes: PR #3673 (WebSocket media drop) and PR #3733 (WebUI crypto crash on HTTP) were merged.

## 6. Feature Request Clusters

New feature requests and their associated pull requests (if any) are grouped below:

**Memory & Session Isolation**
- [#3744](https://github.com/HKUDS/nanobot/issues/3744) – Session-level MEMORY for multi-user teams.
- [#3408](https://github.com/HKUDS/nanobot/pull/3408) (open since Apr 23) – Opt-in MGP sidecar for governed cross-session memory.

**Provider & Model Enhancements**
- [#3741](https://github.com/HKUDS/nanobot/issues/3741) & PR [#3743](https://github.com/HKUDS/nanobot/pull/3743) – Support provider-hosted web search (e.g., Azure OpenAI).
- [#3742](https://github.com/HKUDS/nanobot/issues/3742) – Support `/model` slash command to switch provider & model dynamically.
- [#3738](https://github.com/HKUDS/nanobot/pull/3738) – Fix `max_completion_tokens` support for VolcEngine.

**User Interface & Commands**
- [#3650](https://github.com/HKUDS/nanobot/issues/3650) – Configure bot name and icon (closed, feature added).
- [#3731](https://github.com/HKUDS/nanobot/issues/3731) & PR [#3735](https://github.com/HKUDS/nanobot/pull/3735) – `/insights` command for historical token usage tracking.
- [#3747](https://github.com/HKUDS/nanobot/pull/3747) – Add `topic_isolation` config switch for Feishu.

**Agent & Tooling Improvements**
- [#3728](https://github.com/HKUDS/nanobot/pull/3728) – LoopDetectHook and ReflectRetryHook for agent self-correction.
- [#3729](https://github.com/HKUDS/nanobot/pull/3729) – Refactor tool system to plugin architecture with self-describing tools.
- [#3621](https://github.com/HKUDS/nanobot/pull/3621) – Multi-role agent squad deployment for HF Spaces.
- [#3655](https://github.com/HKUDS/nanobot/pull/3655) – Display model reasoning content during streaming (CLI/TUI).

## 7. User Feedback Summary

- **DuckDuckGo search crash** (#2828) was a major pain point that forced users to kill VMs. It is now resolved, presumably preventing severe system hangs.
- **MiMo reasoning control** (#3585) frustrated users who could not disable thinking. Fixed today via PR #3734.
- **MCP service failures** (#3739) cause unhandled event-loop crashes when MCP servers are unreachable. Users on Windows (EurusZhang) reported this as blocking startup.
- **WeChat Work file naming** (#3737) breaks file identification when downloading attachments; the submitted PR (#3751) should restore correct filenames.
- **WebUI performance** (#3746) concerns users about unnecessary large (~1 MB) chunk loading that impacts initial page load, even for basic chats.
- **Multi-user memory isolation** (#3744) reflects growing demand for team deployments where multiple users share a single agent instance. The current `session/` directory role is unclear.
- **Provider-hosted web search** (#3741) is requested by users of Azure OpenAI who want to leverage native search tools without duplicating local search infrastructure.
- **Model switching command** (#3742) stems from connectivity instability in mainland China – users need dynamic provider/model fallback.
- **Token usage tracking** (#3731) is needed for cost-conscious users on pay-per-token providers like OpenRouter and DeepSeek.
- The **LongCat (Meituan) provider** (#3736) was contributed and merged, expanding ecosystem support.

## 8. Backlog Watch

Issues and PRs that appear stale or awaiting maintainer attention:

| Item | Created | Last Update | Status | Reason for Attention |
|------|---------|-------------|--------|----------------------|
| [#3408](https://github.com/HKUDS/nanobot/pull/3408) – MGP sidecar for governed memory | 2026-04-23 | 2026-05-11 (today) | **Open** – no merge comment | Long-standing feature PR (19 days) with no maintainer review. Could set direction for memory governance. |
| [#3621](https://github.com/HKUDS/nanobot/pull/3621) – Multi-role agent squad for HF Spaces | 2026-05-04 | 2026-05-11 | **Open** | Still open after 8 days. Significant change to HF deployment workflow. |
| [#3693](https://github.com/HKUDS/nanobot/pull/3693) – Centralize LLM concurrency gate | 2026-05-08 | 2026-05-11 | **Open** | Affects background tasks (heartbeat, auto-compact, dream) hitting local LLMs. No feedback from maintainers. |
| [#3655](https://github.com/HKUDS/nanobot/pull/3655) – Show reasoning in CLI streaming | 2026-05-06 | 2026-05-11 | **Open** | 6 days open, no review. Enhances CLI usefulness with reasoning visibility. |
| [#3728](https://github.com/HKUDS/nanobot/pull/3728) – LoopDetectHook & ReflectRetryHook | 2026-05-10 | 2026-05-11 | **Open** | Agent self-correction feature, 2 days old but no comments yet. |

The oldest issue still open in today's set (#3744) is only 15 hours old, so no long-ignored user issues are apparent. However, several feature PRs have been pending without maintainer engagement for a week or more, which may slow community contribution momentum.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest — 2026-05-12

## Today's Activity Brief
Over the past 24 hours, 19 issues were touched (10 open, 9 closed) and 50 pull requests were updated (30 open, 20 merged/closed). No new releases were published. The large `integration/v0.8.0` draft PR (#6398) continues to be the most significant work-in-progress, while several bug fixes landed today, including Matrix‑SDK compatibility patches, CI labeler corrections, and documentation fixes. Community reports highlighted provider‑feature inconsistencies, missing reasoning tokens in OpenAI‑compatible providers, and a persistent loss of user messages in Chinese‑language interactions.

## Releases
No new releases were cut today.

## Project Progress
Merged or closed pull requests (within the top‑20 comment‑activity group) include:
- **#6585** — `fix(update): tighten release asset selection` (closed, risk: medium)
- **#6569** — `fix(vscode): remove duplicate --all-targets from rust-analyzer extraArgs` (closed, risk: low)
- **#6568** — `fix(channels): gate telegram tests behind channel-telegram feature` (closed, risk: low)
- **#6567** — `fix(ci): add crate paths to labeler.yml for workspace layout` (closed, risk: low)
- **#6570** — `docs(container): correct image registry and add onboarding/re-auth steps` (closed, risk: low)
- **#6247** — `Feat/sop webhook dispatch` (closed, risk: high) – a large feature landing SOP webhook dispatch.

These merged changes address CI labelling, VS Code tooling, Telegram test gating, Docker documentation, and update reliability. The integration/v0.8.0 branch (#6398) remains open as a draft and is gathering feedback.

## Community Hot Topics
- **#4083** *(closed bug)*: “Can't get web search tool working on channels” – 5 comments, user @ilteoood reported that the web_search tool fails on Telegram but works in the agent. Closed after fixes.
- **#6530** *(closed bug)*: “Build failure with matrix-sdk v0.16.0: recursion limit overflow when building with channel-matrix feature” – 5 comments, resolved by a compatibility bump.
- **#6034** *(open bug, S1)*: “单轮对话以及多轮对话会出现丢失 user message的现象” – 4 comments, Chinese user reports loss of user messages in single/multi-turn dialogues, blocking workflow. Maintainer labels indicate `status:accepted`.
- **#6547** *(closed)*: “homebrew merge fail” – 3 comments, user @luckbyte reports Homebrew PR #281539 cannot merge because version 0.7.5 is missing.
- **#5991** *(closed bug)*: “failed cron job” – 3 comments, @ilteoood reported a cron job generating a morning recap failing entirely.

## Bugs & Stability
Bugs reported or updated today (2026-05-11/12) include:

| Issue | Severity | Description | Fix PR exists? |
|-------|----------|-------------|----------------|
| **#6589** (open) | S2 | `RouterProvider::supports_vision()` uses `.any()` while `supports_native_tools()` uses default – silent bypass of multimodal fallback in mixed‑provider setups. | No direct PR; related to #6587? |
| **#6584** (open) | S2 | OpenAI‑compatible provider ignores `reasoning` field, only reads `reasoning_content`. Affects vLLM, OpenRouter, etc. | **PR #6587** (open) adds `reasoning` fallback. |
| **#6561** (open) | S2 (risk: low) | Gateway non‑loopback `--host` recovery hint advertises admin URL that admin guard rejects. | None listed. |

Other active bugs with earlier creation dates:
- **#6034** (S1, open) – user message loss (Chinese model interaction).
- **#5316** (open, enhancement but includes DuckDuckGo CAPTCHA detection) – S2 severity implied.

## Feature Request Clusters
Multiple enhancement requests were updated today, clustering around three themes:

**Media & Vision Handling:**
- **#6574** – “configurable behaviour for image-bearing messages when no vision path is available” (risk: low)
- **#6563** – “Comfy Cloud / ComfyUI as shared media provider (remote workflows; image + path to gen_video)” (risk: high, needs‑maintainer‑review)

**Channel UX Improvements:**
- **#6565** – “clear inline-keyboard + reflect outcome on Telegram tool-approval messages after click” (risk: medium)
- **#6576** – “Add v0.7.6 Matrix live homeserver smoke check after matrix-sdk 0.17 bump” (risk: low)

**Search & Provider Enhancements:**
- **#5316** – “Propose SearXNG search support and improve Web Search robustness” (risk: high, needs‑maintainer‑review)
- **#6573** (PR) – marks GLM provider as vision‑capable.

## User Feedback Summary
- **@ilteoood** (#4083, #5991): Frustration with web search tool not propagating to Telegram channels and cron jobs failing on a morning‑recap task.
- **@lazy-hs** (#6034): Workflow‑blocking loss of user messages when using a custom provider (Qwen3.5‑35B).
- **@rikwade** (#6530): Build failure with Matrix SDK upgrade – work in progress on a fix.
- **@bbrowning** (#6584): Reasoning tokens silently dropped for OpenAI‑compatible providers (OpenRouter, vLLM).
- **@lynnkeele** (#6589): Silent bypass of multimodal fallback in router provider – degraded behavior.
- **@donut-wenzhang** (#6565): Telegram tool‑approval inline‑keyboard buttons remain clickable after use, confusing UX.
- **@alkaid-ops** (#6393): Docker installation documentation contains wrong registry and missing steps (fixed in #6570).
- **@luckbyte** (#6547): Homebrew merge blocked because release version 0.7.5 is not published.
- **@m-tky** (#5316): DuckDuckGo search often blocked; requests privacy‑focused SearXNG support.

## Backlog Watch
Issues and PRs that appear to need maintainer attention or have been awaiting action for some time:

- **#6034** (S1 bug, open since Apr 23) – user message loss, labelled `status:accepted` but no due date or committed solution.
- **#5316** (enhancement, open since Apr 5) – SearXNG search support and DuckDuckGo CAPTCHA detection; labelled `needs-maintainer-review`.
- **#6563** (enhancement, open since May 10) – ComfyUI as media provider; labelled `needs-maintainer-review`.
- **#4944** (PR, open since Mar 28) – tool wrapper migration; labelled `needs-author-action`.
- **#6183** (PR, open since Apr 28) – fix multimodal image markers; labelled `needs-author-action`.
- **#6074** (enhancement, open since Apr 24) – audit of 153 lost commits after bulk revert; labelled `status:in-progress` but no recent maintainer update.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-12

## 1. Today’s Activity Brief
In the last 24 hours, 12 issues were updated (4 open, 8 closed) and 27 pull requests were updated (18 open, 9 merged/closed). A nightly release `v0.2.8-nightly.20260512.777269b4` was published. Several stale bugs and enhancements were closed, while new feature proposals around media attachments, unified diffs, and agent evolution controls appeared. The project saw ongoing work on model configuration workflows, Telegram channel improvements, and provider integrations.

## 2. Releases
- **nightly: Nightly Build** (v0.2.8-nightly.20260512.777269b4)
  Automated build based on the main branch. Likely includes all merged changes up to that point. Use with caution.
  Full changelog: [v0.2.8…main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)
  No breaking changes or migration notes documented.

## 3. Project Progress
Nine pull requests were merged or closed in the last 24 hours. Notable closed PRs include:

- **#2758** — `fix(telegram): media group album handling` — Buffers and processes Telegram media group albums as one message, preserving captions and ordering.
- **#2645** — `feat(bedrock): implement StreamingProvider for real-time token streaming` — Adds `ChatStream` method for Bedrock provider using AWS ConverseStream API.
- **#2581** — `Recover Codex output from streamed message events` — Fixes empty output in ChatGPT Codex provider by reconstructing from streamed items.
- **#2565** — `fix(config): preserve explicit mention_only=false in GroupTriggerConfig` — Fixes a bug where `omitempty` JSON tag caused `MentionOnly=false` to be lost on config reload.
- **#2831** — `feat(web,api): provider selection and model form foundation` (Part 1 of 3) — Adds backend CRUD for models, provider metadata, and API endpoint stubs.
- **#2719** — `feat(channels): add slack_webhook output-only channel` — New channel for pushing messages to Slack via Incoming Webhooks with Block Kit formatting.

These PRs represent concrete progress on streaming support, configuration robustness, embedded hardware deployment (Yocto layer link added via #2851), and channel extensibility.

## 4. Community Hot Topics
The most active discussions in the last 24 hours centered around:

- **#2855** (open, 0 comments, new) — *Extend message tool to support media attachments and channel-aware rich outbound delivery* — A proposal to allow the `message` tool to carry media alongside text, avoiding split sends on channels that support combined payloads. A companion PR #2856 was opened immediately.
  [Issue](https://github.com/sipeed/picoclaw/issues/2855) | [PR](https://github.com/sipeed/picoclaw/pull/2856)

- **#2829** (open, 0 comments) — *Explicit async result delivery policy for async tool results* — Addresses unnecessary parent turns when a spawned subagent produces a final result that gets re-injected as a follow-up. PR #2830 implements the fix.
  [Issue](https://github.com/sipeed/picoclaw/issues/2829) | [PR](https://github.com/sipeed/picoclaw/pull/2830)

- **#2796** (open, 2 comments) — *[BUG] History only shows last user message in multi‑message conversations* — Users report that when viewing past conversations, only the final user message is visible; earlier messages are missing. This is a usability regression.
  [Issue](https://github.com/sipeed/picoclaw/issues/2796)

- **#2848** (open, 0 comments) — *[Feature] show unified diff preview for edit_file tool* — Requests that the `edit_file` tool return a diff preview (old → new) so users can verify changes immediately, similar to Claude Code CLI behavior.
  [Issue](https://github.com/sipeed/picoclaw/issues/2848)

- **#2046** (closed, 6 comments, 1 👍) — *[BUG] PicoClaw does not call tool with LongCat API* — A stale provider bug that has now been resolved.

## 5. Bugs & Stability
- **#2796** (open, critical) — **History truncation**: In conversations with multiple user messages, only the last user message is displayed when revisiting history. Impact is high for users relying on conversation context. No fix PR yet.
  [Issue](https://github.com/sipeed/picoclaw/issues/2796)

- **#2780** (closed) — *Reload config broke voice recognition* — On Ubuntu/Telegram, reloading configuration after setting up `groq-asr` caused voice recognition to stop working. Now closed, presumably fixed.
  [Issue](https://github.com/sipeed/picoclaw/issues/2780)

- **#2684** (closed) — *[BUG] address parsing error when searching third‑party skills on Android* — Users on v0.2.7 reported address resolution failures for skill search in the Android app. Closed, likely patched.
  [Issue](https://github.com/sipeed/picoclaw/issues/2684)

- **#2690** (closed) — *Gateway started with no channels on v0.2.7* — Docker deployment of v0.2.7 resulted in a gateway with zero channels (QQ configured but not loaded). Closed.
  [Issue](https://github.com/sipeed/picoclaw/issues/2690)

- **#2590** (closed) — *[ERROR] Android service does not start* — The APK could not execute the native binary. Now resolved.
  [Issue](https://github.com/sipeed/picoclaw/issues/2590)

Overall, several older stability issues were closed, but the history bug (#2796) is a notable current concern.

## 6. Feature Request Clusters
Several related feature requests and their implementation PRs appeared in the last 24 hours:

- **Media-rich messaging** — #2855 proposes extending the `message` tool to include media attachments (images, audio, documents) and channel-aware delivery. PR #2856 implements the first iteration for Telegram.
  [Issue](https://github.com/sipeed/picoclaw/issues/2855) | [PR](https://github.com/sipeed/picoclaw/pull/2856)

- **Agent evolution & configuration** — #2852 adds documentation and Web UI configuration for agent self-evolution (`evolution` config block).
  [PR](https://github.com/sipeed/picoclaw/pull/2852)

- **Async tool result policy** — #2829 proposes explicit delivery modes for async tool results to avoid spurious parent agent turns. PR #2830 adds a `delivery_mode` override on the `spawn` tool.
  [Issue](https://github.com/sipeed/picoclaw/issues/2829) | [PR](https://github.com/sipeed/picoclaw/pull/2830)

- **Unified diff preview** — #2848 requests that `edit_file` show a before/after diff instead of a silent file path. No PR yet.
  [Issue](https://github.com/sipeed/picoclaw/issues/2848)

- **Model configuration UX** — A three‑part series (#2831, #2832, #2833) adds backend APIs for fetching models from providers, saving model catalogs, and testing connections. These are the foundation of a revamped model editor in the web UI.
  [PR #2831](https://github.com/sipeed/picoclaw/pull/2831) | [PR #2832](https://github.com/sipeed/picoclaw/pull/2832) | [PR #2833](https://github.com/sipeed/picoclaw/pull/2833)

- **Web search API improvements** — #2647 (open, stale) enables YAML config for web_search and sets DuckDuckGo as default provider; #2763 (open) adds a Gemini Google Search grounding provider.
  [PR #2647](https://github.com/sipeed/picoclaw/pull/2647) | [PR #2763](https://github.com/sipeed/picoclaw/pull/2763)

- **Embedded deployment** — #2851 contributes a Yocto/OpenEmbedded layer (`meta-picoclaw`) to simplify building PicoClaw into custom embedded Linux images.
  [PR](https://github.com/sipeed/picoclaw/pull/2851)

## 7. User Feedback Summary
- **Reliability pain points**: Users reported history truncation (#2796) and service startup failures on Android (#2590). The latter was fixed; the former is open.
- **Search API cost/fallback**: Multiple users requested alternative search APIs because Brave is no longer free (#2232, #2582). The project responded with a Gemini search provider (#2763) and YAML configuration for fallback chains (#2647).
- **Rich delivery expectations**: The proposal for media attachments (#2855) stems from workflows where agents split text and media into separate sends, which is awkward for channels that natively support combined messages (e.g., Telegram).
- **Configuration friction**: Reloading config broke voice recognition (#2780), and the `MentionOnly=false` field was silently lost on reload (#2565). Both have been fixed.
- **Hardware interest**: A user requested Raspberry Pi support (#2675, closed) and a community Yocto layer was contributed (#2851), indicating interest in low‑resource edge deployments.

## 8. Backlog Watch
The following open issues/PRs have been idle for some time and may require maintainer attention:

- **#2647** (open since 2026-04-24, stale) — `fix: enable web_search tool config YAML support and enable DuckDuckGo by default` — A relatively small change that has not been merged.
  [PR](https://github.com/sipeed/picoclaw/pull/2647)

- **#2740** (open since 2026-05-01, stale) — `fix(deepseek): capture reasoning_content from streaming` — Fixes a missing field in DeepSeek thinking mode; waiting for review.
  [PR](https://github.com/sipeed/picoclaw/pull/2740)

- **#2768** (open since 2026-05-04, stale) — `fix(agent): retry transient LLM HTTP errors` — Improves error handling for HTTP 500 responses from OpenRouter/OpenAI.
  [PR](https://github.com/sipeed/picoclaw/pull/2768

</details>