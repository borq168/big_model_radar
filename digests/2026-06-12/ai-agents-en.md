# OpenClaw Ecosystem Digest 2026-06-12

> Issues: 500 | PRs: 500 | Projects covered: 4 | Generated: 2026-06-12 02:42 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-06-12

## 1. Today’s Activity Brief
The project saw very high activity in the last 24 hours: 500 issues updated (476 open, 24 closed) and 500 pull requests updated (384 open, 116 merged/closed). No new releases were published. Among the closed PRs were a docs template cleanup, an exec-path denylist fix, and an autofix pipeline addition. The most active issue (109 comments) continues to be a long‑standing request for Linux/Windows Clawdbot apps. Several new fix PRs landed for the Feishu channel, OpenAI Responses message handling, and cron delivery accounting.

## 2. Releases
No new releases.

## 3. Project Progress (Merged/Closed PRs Today)
- **PR #92316** (closed) — Removed the “React Like a Human!” section from the default `AGENTS.md` template. ([link](https://github.com/openclaw/openclaw/pull/92316))
- **PR #83729** (closed) — Added `tools.exec.deniedPaths` as a preflight guard to block agent execution on configured paths, addressing issue #11829. ([link](https://github.com/openclaw/openclaw/pull/83729))
- **PR #68936** (closed) — Added a PR review autofix pipeline using Claude Agent SDK and a Windows daemon for supervision. ([link](https://github.com/openclaw/openclaw/pull/68936))
- **Issue #91330** (closed) — Addressed a bug where current‑session message‑tool replies could be replaced by private bookkeeping finals. ([link](https://github.com/openclaw/openclaw/issues/91330))
- **Issue #56263** (closed) — Feature request for configurable file permissions for multi‑user setups. ([link](https://github.com/openclaw/openclaw/issues/56263))

Several other fix PRs remain open and are being reviewed (see Bugs & Stability).

## 4. Community Hot Topics
The most active issues (by comment count) reveal a few key areas of user concern:

- **#75 – Linux/Windows Clawdbot Apps** (109 comments, 79 👍) – Users request parity with the existing macOS/iOS/Android apps. The issue has been open since January 2026 and has gathered significant community support. ([link](https://github.com/openclaw/openclaw/issues/75))
- **#9443 – Prebuilt Android APK releases** (25 comments) – Submitted on behalf of a user by an AI assistant. Users want official APK downloads instead of building from source. ([link](https://github.com/openclaw/openclaw/issues/9443))
- **#32473 – Control UI requires device identity secure context** (17 comments) – A regression where the control UI fails on non‑HTTPS setups even after configuring a Brave key. ([link](https://github.com/openclaw/openclaw/issues/32473))
- **#22438 – Tiered bootstrap file loading** (17 comments) – A proposal to reduce token waste by loading only relevant bootstrap files per session. A related PR (#22439) is open. ([link](https://github.com/openclaw/openclaw/issues/22438), [PR](https://github.com/openclaw/openclaw/pull/22439))
- **#22676 – Signal daemon race condition on SIGUSR1 restart** (17 comments) – Orphaned processes and send failures caused by premature spawn of new signal‑cli instances. ([link](https://github.com/openclaw/openclaw/issues/22676))
- **#32296 – Agent replies to previous message** (15 comments) – Session context confusion causing misaligned responses. ([link](https://github.com/openclaw/openclaw/issues/32296))

## 5. Bugs & Stability
Multiple bugs were reported or updated today, many with linked fix PRs:

- **Security/architecture**: #32473 (control UI secure context, regression), #22676 (signal daemon race condition), #29387 (bootstrap files in agentDir silently ignored), #31583 (`exec` tool not inheriting skill env vars, regression), #29736 (exec-approvals path ignores state root), #38327 (Google Vertex crash with “Cannot convert undefined or null to object” in 2026.3.2)
- **Session/context**: #32296 (agent replies to previous message), #57901 (safeguard compaction ignores compaction.model), #40001 (write tool lacks append mode, destroys shared files), #39476 (A2A sessions_send back causes duplicate messages), #69118 (Claude CLI sessions reset on every turn in group channels)
- **Cron & reliability**: #85888 (cron jobs fail with MiniMax 503 during early morning, manual triggers succeed), #91363 (isolated cron consistently fails with “LLM request failed”), #40611 (heartbeat drift fix causes aggressive retry blocking Telegram)
- **Integrations**: #38439 (webchat avatar 404 regression), #41165 (Telegram DMs still land in main session), #37966 (cacheRetention ignored for LiteLLM-proxied Anthropic), #40540 (`openclaw update` fails with EBUSY on Windows)

**Fix PRs in progress** (open today):
- #92172 – Bilingual fallback for Feishu no‑visible‑reply ([link](https://github.com/openclaw/openclaw/pull/92172))
- #92300 – Collapse cumulative OpenAI Responses message snapshots ([link](https://github.com/openclaw/openclaw/pull/92300))
- #92113 – Resolve custom provider secretref‑managed apiKey from runtime snapshot ([link](https://github.com/openclaw/openclaw/pull/92113))
- #90579 – Allow trusted host‑read HTML after outbound staging ([link](https://github.com/openclaw/openclaw/pull/90579))
- #92318 – Require explicit message target proof for cron ([link](https://github.com/openclaw/openclaw/pull/92318))
- #92312 – Fix dashboard history projection and approval followups ([link](https://github.com/openclaw/openclaw/pull/92312))
- #92178 – Guard `formatAuditList` against non‑string items ([link](https://github.com/openclaw/openclaw/pull/92178))
- #90872 – Surface safe terminal tool fallbacks ([link](https://github.com/openclaw/openclaw/pull/90872))
- #90799 – Handle Claude CLI synthetic placeholders ([link](https://github.com/openclaw/openclaw/pull/90799))
- #88748 – Bridge OAuth profiles into Gemini CLI runtime ([link](https://github.com/openclaw/openclaw/pull/88748))

## 6. Feature Request Clusters
User requests today cluster around the following themes:

- **Platform expansion**: Linux/Windows Clawdbot apps (#75), prebuilt Android APK (#9443), Telegram Business bot support (#20786)
- **Security & sandboxing**: Masked secrets (#10659), filesystem sandboxing config (#7722), denylist for exec‑approvals (#6615), path‑scoped RWX permissions (#39979), backup exclude patterns (#40786), secrets management integration (#13610), memory trust tagging (#7707)
- **Multi‑agent / orchestration**: Post‑subagent completion hook (#22358), `announceTarget` for completion routing (#27445), capability profiling + shared blackboard (#35203), forward `toolsAllow` from `sessions_spawn` (PR #78441)
- **Session & memory**: Automated session memory preservation (#40418), opt‑in cross‑channel visibility (#40678), suppress sub‑agent announce (#8299)
- **Tool / token efficiency**: Tiered bootstrap loading (#22438, PR #22439), reduce tool schema token overhead (#14785)
- **Integration enhancements**: Slack tool‑level progress (#33413), chatCompletions ignore model when agent‑id header present (#30381), Swedish control UI locale (PR #62063), rich message API for Telegram (PR #92309)

Related open PRs exist for several of these (e.g., #22439, #78441, #86655 for Claude bridge).

## 7. User Feedback Summary
Users continue to express pain points around missing platform support (Linux/Windows, prebuilt APK), reliability of cron jobs and signal daemon handling, and security concerns (API key exposure, lack of sandboxing). Several regressions in recent releases (e.g., #32473, #38327) have frustrated users who relied on previously working features. The complex multi‑agent orchestration flows are reported as unstable (#43367), and isolated cron sessions frequently fail with opaque errors (#91363). On the positive side, the community is actively contributing fixes (over 100 PRs merged/closed in the last 24 hours) and engaging with feature requests, indicating a responsive maintainer team despite the high volume.

## 8. Backlog Watch
Several important issues and PRs remain open with no recent maintainer response or fix PR:

- **#75 – Linux/Windows Clawdbot Apps** (109 comments, opened January 2026) – Still awaiting a product decision and maintainer review. ([link](https://github.com/openclaw/openclaw/issues/75))
- **#9443 – Prebuilt Android APK releases** (25 comments, opened February 2026) – Needs maintainer and security review. ([link](https://github.com/openclaw/openclaw/issues/9443))
- **#32473 – Control UI secure context regression** (17 comments, opened March 2026) – Needs maintainer review and product decision. ([link](https://github.com/openclaw/openclaw/issues/32473))
- **#10659 – Masked secrets feature request** (13 comments, opened February 2026) – Needs maintainer and security review. ([link](https://github.com/openclaw/openclaw/issues/10659))
- **#6731 – Safe/unsafe ClawdBot** (12 comments, opened February 2026) – Needs maintainer review. ([link](https://github.com/openclaw/openclaw/issues/6731))
- **#20786 – Telegram Business Bot support** (8 comments, opened February 2026) – Has a linked PR but still needs maintainer review. ([link](https://github.com/openclaw/openclaw/issues/20786))
- **#13610 – Native secrets management integration** (7 comments, opened February 2026) – Needs maintainer review and product decision. ([link](https://github.com/openclaw/openclaw/issues/13610))

Many of these carry the `clawsweeper:needs-maintainer-review` label and have been open for months, suggesting they are waiting for capacity or prioritization from the core team.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-06-12

## 1. Daily Cross-Project Overview
Today’s activity across the tracked projects ranged from very high (OpenClaw: 500 issues, 500 PRs) to moderate (NanoBot: 4 issues, 19 PRs). Zeroclaw shipped a major v0.8.0 release introducing multi-agent support, while PicoClaw merged multiple fixes and published a nightly build. All projects show active bug reporting and feature discussions, with multi-agent coordination, cron reliability, and Windows compatibility emerging as shared areas of attention.

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | Release | Activity Note |
|---------|---------------|-------------|---------|---------------|
| OpenClaw | 500 (476 open, 24 closed) | 500 (384 open, 116 merged/closed) | None | Very high; massive volume of issues and PRs; many bugs and community discussions |
| NanoBot | 4 (2 open, 2 closed) | 19 (13 open, 6 merged/closed) | None | Moderate; focused PR merges on specific fixes and features |
| Zeroclaw | 50 (49 open, 1 closed) | 50 (47 open, 3 closed/merged) | **v0.8.0** | High; major release; many open bugs and feature requests |
| PicoClaw | 6 (3 open, 3 closed) | 31 (13 open, 18 merged/closed) | v0.2.9-nightly | Moderate–high; many merged fixes; active development on agent collaboration |

## 3. OpenClaw Compared With Peers
OpenClaw’s activity volume (500+500) dwarfs the other projects, indicating a larger contributor base and/or faster CI/automation pipeline. Its community discussions center on platform expansion (Linux/Windows apps, prebuilt APK) and regressions, while Zeroclaw and PicoClaw focus on core architecture (multi-agent, MCP reliability). OpenClaw’s backlog includes several high-comment issues (e.g., #75 Linux/Windows apps, open since January) without maintainer response, whereas Zeroclaw’s v0.8.0 delivers a long-requested multi-agent feature but still has many stalled fix PRs. NanoBot is the smallest in volume and appears to have a narrower scope (Slack, cron, custom providers).

## 4. Shared Technical Focus Areas
Requirements appearing across multiple projects today:

- **Multi-agent coordination**: Zeroclaw v0.8.0 ships per-agent workspaces and security policies; PicoClaw has an open PR (#2937) for an agent collaboration bus; OpenClaw’s feature requests include post-subagent completion hooks and capability profiling.
- **Cron reliability**: OpenClaw reports cron jobs failing with MiniMax 503 and isolated cron failures (#85888, #91363); NanoBot addresses premature cron completion with subagents (#4290, PR #4304) and session binding (PR #4299).
- **Tool execution and sandboxing**: OpenClaw adds exec-path denylist (#83729) and requests filesystem sandboxing (#7722); Zeroclaw has S1 bugs on shell tool refusal (#6434) and MCP tool filtering (#6699).
- **Windows compatibility**: OpenClaw has `openclaw update` failing with EBUSY (#40540); PicoClaw’s `list_dir` fails on Windows (#2472); Zeroclaw has OOM in WSL2 (#5542) and Windows execution issues (#7214).
- **Security and secrets**: OpenClaw requests masked secrets (#10659); PicoClaw fixed an `allowed_cidrs` bypass (#3080); OpenClaw’s PR #83729 introduces denied paths for exec.

## 5. Differentiation Analysis
- **OpenClaw**: Positions as a comprehensive reference platform with broad integration support (Feishu, Telegram, Slack, signal, etc.) and a very high issue/PR volume. Faces scaling challenges: many bugs and regressions.
- **Zeroclaw**: Emphasizes multi-agent orchestration with per-agent isolation, security policies, and a rewritten config schema in v0.8.0. Still has numerous S1/S0 bugs and stale PRs.
- **NanoBot**: Lightweight, focused on Slack and custom provider support. Lower activity but responsive maintainers (several fixes merged today). Targets users who need a simpler bot with good Slack integration.
- **PicoClaw**: Go-based fork with emphasis on stability, MCP features, and channel-specific fixes (WhatsApp, tool_calls streaming). Developing agent collaboration as a major feature (#2937) but currently experimental.

## 6. Community Activity Notes
- **High activity**: OpenClaw (500+500 combined), Zeroclaw (~100 combined, plus major release).
- **Moderate activity**: PicoClaw (37 combined, though 18 PRs merged), NanoBot (23 combined).
- Release activity: Zeroclaw shipped v0.8.0; PicoClaw published a nightly; OpenClaw and NanoBot had no release today.
- Community engagement (comments) is highest on OpenClaw’s platform expansion request (#75, 109 comments) and Zeroclaw’s Dream Mode issue (#5849, 17 comments). NanoBot and PicoClaw have lower comment volumes but active fix pipelines.

## 7. Evidence-Backed Observations
1. **Multi-agent orchestration is a common priority**: Zeroclaw ships it, PicoClaw prototypes it, and OpenClaw receives feature requests for it. No clear winner yet, but the space is actively developing.
2. **Cron job reliability remains a pain point**: Both OpenClaw and NanoBot report failures (service provider errors, timing issues with subagents). Multiple PRs are open but not all merged.
3. **Windows support is incomplete across projects**: Specific bugs exist in OpenClaw, PicoClaw, and Zeroclaw, and OpenClaw’s long-standing request for native Windows apps (#75) has 109 comments with no maintainer response.
4. **Security issues are being addressed but at different paces**: OpenClaw added exec-path denylist; PicoClaw fixed an `allowed_cidrs` bypass; Zeroclaw has several security-related bugs (tool filtering, risk_profile) still unresolved.
5. **OpenClaw’s community engagement on platform expansion is unmatched**: The Linux/Windows Clawdbot app request (#75) has been open since January 2026 with 109 comments and 79 👍, indicating significant unmet demand that competing projects could target.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-12

## Today's Activity Brief
In the last 24 hours, 4 issues were updated (2 closed, 2 open) and 19 pull requests received updates (6 merged/closed, 13 still open). No new releases were cut. Notable merges include a fix for fenced-code-block-aware message splitting (`#4257`), a Slack `groupRequireMention` feature (`#4289`), and a SiliconFlow transcription provider (`#4281`). The open issue `#4302` reporting a gateway crash after MCP reconnect has an accompanying fix PR (`#4303`).

## Releases
No new releases.

## Project Progress
Six pull requests were merged or closed in the last 24 hours:
- `#4020` (closed) – Makes stream-idle timeout configurable per provider, addressing issues with local LLMs (LM Studio, Ollama).
- `#4281` (merged) – Adds SiliconFlow as a transcription provider, reusing the existing OpenAI-compatible adapter.
- `#4289` (merged) – Adds `groupRequireMention` option for Slack allowlist channels, so the bot only responds when @mentioned in allowed channels.
- `#4257` (merged) – Fixes `split_message` to be fenced-code-block-aware, preventing broken HTML when splitting long messages inside code blocks.
- `#4297` / `#4298` (closed) – Two research doc PRs (content not detailed).

## Community Hot Topics
The most discussed issue today was `#4233` (CLOSED) – requesting the NanoBot version be shown in the WebUI, with 2 comments and a maintainer response leading to closure. The open issue `#4305` (multiple custom providers) and `#4302` (gateway crash) have no comments yet but are actively being addressed in related PRs (`#3239` and `#4303`). Among PRs, `#4301` (skills loader caching) and `#4299` (cron session binding) are generating update activity and touch core performance and scheduling workflows.

## Bugs & Stability
Three bugs were prominent in today’s data, ranked by severity:

1. **Gateway crash after MCP reconnect** (`#4302` **OPEN**) – The process crashes when an MCP server session terminates and reconnects. A fix PR (`#4303`) proposes closing tracked generators in `_close_server`.
2. **Orphaned tool results persisted to history** (`#4006`, referenced by `#4306` **OPEN**) – Session history can contain `role:"tool"` messages with no matching `tool_call_id`, causing API rejects and broken trajectory rendering. PR `#4306` provides a fix.
3. **Cron jobs with subagents marked complete prematurely** (`#4290`, addressed by `#4304` **OPEN**) – Spawned subagents are still running when the parent job is recorded as finished. PR `#4304` adds waiting logic.

A previously reported bug (`#4236`) regarding Bubblewrap sandbox failures on Ubuntu 24.04 was closed.

## Feature Request Clusters
User requests for **multiple custom OpenAI-compatible providers** appear in both issue `#4305` (open) and the older PR `#3239` (still open since April). No maintainer response recorded on `#4305` yet. Another cluster involves **cron automation improvements**: PR `#4299` binds scheduled automations to sessions and defers execution until idle, addressing a pain point. **Skill dependency/type checks** are proposed in PR `#4300`. The Python SDK gains richer runtime controls in PR `#4296`. The version-display request (`#4233`) was accepted and closed, likely already shipped.

## User Feedback Summary
Users reported concrete pain points and use cases:
- **Version visibility** – A user found `/status` but wanted version printed in the UI, plus an update notification (`#4233`).
- **Sandbox incompatibility** – Bubblewrap fails on Ubuntu 24.04 due to restricted user namespaces (`#4236`).
- **Multiple provider needs** – A user needs more than one custom/OpenAI provider, suggesting a template parameter (`#4305`).
- **Gateway instability** – Crashes after MCP reconnect hinder continuous operation (`#4302`).
- **Cron-subagent timing** – Background subagent tasks cause logical errors in job completion (`#4290`).
- **Tool result consistency** – Orphaned tool results in history cause compatibility issues with strict API clients (`#4006`).
- **Stream timeout** – The 90-second idle timeout was too aggressive for local models; now made configurable (`#4020`, merged).
- **Slack mention flexibility** – A contributor added `groupRequireMention` for more precise bot activation (`#4289`, merged).

## Backlog Watch
Several important items have been open for extended periods without maintainer closure or comment:
- **PR `#3239`** – Support multiple custom OpenAI-compatible providers. Open since April 17, 2026; last updated today but still no maintainer review.
- **PR `#3538`** – Gateway start/stop/restart commands. Open since April 29, 2026; last updated June 11.
- **PR `#4021`** – Dedup reasoning items for Codex provider to avoid duplicate-item errors. Open since May 27, 2026; still awaiting merge.
- **PR `#4293`** – Add `pending_queue` to `process_direct` for subagent result injection. Open since June 11, 2026; no comments.
- **PR `#4294`** – Remove desktop app from core repo. Open since June 11, 2026; no comments.

These long-standing PRs represent feature gaps and stability fixes that may need maintainer attention.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-12

## 1. Today's Activity Brief
- **50 issues** were updated in the last 24 hours (49 open, 1 closed).
- **50 pull requests** were updated (47 open, 3 closed/merged).
- One new release, **v0.8.0**, shipped — a major release introducing multi-agent support with per-agent workspaces, memory, security policies, and a rewritten configuration schema.
- The single closed issue ([#7263](https://github.com/zeroclaw-labs/zeroclaw/issues/7263)) and two closed PRs ([#7517](https://github.com/zeroclaw-labs/zeroclaw/pull/7517), [#7519](https://github.com/zeroclaw-labs/zeroclaw/pull/7519)) were resolved, primarily fixing subagent CWD inheritance and config serialization.
- A tracker issue for the v0.8.0 release queue ([#7112](https://github.com/zeroclaw-labs/zeroclaw/issues/7112)) remains open as the milestone coordination hub.

## 2. Releases
### v0.8.0
- **Summary**: ZeroClaw v0.8.0 is described as “the big one”. A single daemon now runs many *named agents*, each with its own workspace, memory, model provider, security policy, channels, and personality.
- **Configuration**: The configuration schema has been rewritten and includes automatic migration from existing setups.
- **Breaking changes**: Not explicitly detailed in the provided data, but the mention of “schema/config breaking-change cleanup” in the v0.8.0 tracker (#7112) suggests some breaking changes.
- **Migration**: Automatic migration is mentioned in the release summary; users should review their config after upgrade.
- **Release artifacts**: Published as v0.8.0 on GitHub; likely includes binary releases and Docker images.

*(Note: Only the release summary snippet was provided; full changelog not available in the data.)*

## 3. Project Progress
- **Merged/closed PRs today (3 total):**
  - [#7517](https://github.com/zeroclaw-labs/zeroclaw/pull/7517) – `fix(runtime/subagent): inherit ACP session cwd into spawn_subagent and delegate` (closed/merged). Resolves the subagent-cwd bug filed in #7263.
  - [#7519](https://github.com/zeroclaw-labs/zeroclaw/pull/7519) – `fix(config): persist [[mcp.servers]] per-field edits via natural-key dirty-path walker` (closed/merged). Fixes on-disk incremental saving of MCP server configurations.
  - [#7520](https://github.com/zeroclaw-labs/zeroclaw/pull/7520) – `ci: install cross g++ for ARM glibc release builds` (closed). CI infrastructure fix to enable ARM glibc release builds for v0.8.0.
- **Other active PRs**: 47 open PRs remain, many in “needs-author-action” or “stale-candidate” states, covering features like MCP auto-reconnect, Windows fixes, skill registry, observability, and fuzzing.

## 4. Community Hot Topics
- **Most commented issues** (top by comment count):
  - [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) – *Dream Mode — Periodic Memory Consolidation & Reflective Learning* (17 comments). This feature request for background memory consolidation continues to attract discussion. It is labelled `risk: high`, `status:accepted`, and `priority:p2`.
  - [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) – *tool_filter_groups is a no-op for real MCP tools* (7 comments). A high-risk bug blocking tool filtering.
  - [#7470](https://github.com/zeroclaw-labs/zeroclaw/issues/7470) – *delegate agentic mode rejects empty risk_profile.allowed_tools* (7 comments). A newly filed (2026-06-11) S1 bug that blocks multi-agent delegation workflows.
- **Most active PRs** (by comment count, all undefined in data; likely low activity):
  - [#7351](https://github.com/zeroclaw-labs/zeroclaw/pull/7351) – *feat(mcp): auto-reconnect on stale session or dropped stream* – still open, likely waiting for review.
  - [#7429](https://github.com/zeroclaw-labs/zeroclaw/pull/7429) – *feat(plugins): add wasmtime dependency and feature flags* – large change, marking a shift toward wasmtime as a plugin runtime.

**Underlying needs**: Users are pushing for better multi-agent coordination (delegation, tool filtering, workspace inheritance), improved stability (MCP reconnection, OOM), and richer agent behavior (memory consolidation, observable context compression).

## 5. Bugs & Stability
### High-severity bugs reported today (new or updated in last 24h):
- **#7470** (new, S1 – workflow blocked): *delegate agentic mode rejects empty allowed_tools* — blocks multi-agent reviewer/research setups. No fix PR yet.
- **#6699** (updated, S1): *tool_filter_groups no-op for MCP tools* — two distinct bugs. No fix PR merged.
- **#6434** (updated, S1): *Shell tool calls refused at `[autonomy] level = "full"`* — tool dispatch never reaches runtime. Related to PR #6914 (still open).
- **#5808** (updated, S1): *Default 32k context budget exceeded on first iteration* — causes perpetual preemptive trimming.
- **#5903** (updated, S1): *MCP stdio child processes accumulate with heartbeat* — one orphan per tick. No fix PR merged.
- **#6037** (updated, S1): *Cron jobs launched repeatedly while still running* — PR #6038 (fix) is open but stale.
- **#5542** (updated, S0 – data loss/security risk): *Consecutive OOM in WSL2* — still in progress, needs author action.
- **#6302** (updated, S1): *Gemini 400 – assistant tool_call emitted as first non-system turn* — PR #6303 (fix) is open but stale.
- **#6361** (updated, S1): *context_compression drops assistant(tool_calls) and tool(result) for OpenAI-compatible providers* – impacts MiniMax multi-turn conversations.
- **#6678** (updated, S1): *Skill tools rejected by Anthropic API due to name format* – naming violates Anthropic constraints.

### Bug fixes merged today:
- #7517 fixed subagent CWD inheritance (#7263).
- #7519 fixed MCP per-field config persistence.

### Overall stability picture: Multiple S1/S0 bugs remain open with fix PRs stalled. The v0.8.0 release appears to have landed while these high-risk issues are still unresolved — the release may be considered “Stable” but several blockers are still tracked in #7112.

## 6. Feature Request Clusters
- **Dream Mode / Memory Consolidation (#5849)**: A large feature request (17 comments) for periodic background memory consolidation. Accepted but remains at priority p2.
- **Webhook path routing (#6312)**: Per-alias webhook path routing for multi-instance channels. Recent audit notes that a different mechanism (?agent= query) shipped in #7297 but the path-based routing is still desired.
- **Heartbeat tracking (#6391)**: Real Online/Stale/Offline detection for daemon nodes based on WebSocket liveness.
- **CLI node registration (#6390)**: `zeroclaw node add <url>` to register remote daemons. Blocked by #6391.
- **Dashboard update button (#6365)**: Expose `zeroclaw update` via the web dashboard.
- **TUI ACP Bridge (#6823)**: Tracker for client-side connection layer between TUI and daemon.
- **Observability GenAI spans (#6642)**: Capture full prompt/completion on LLM calls via OpenTelemetry. PR #6190 exists but is stale.
- **Skill registry support (#6143)**: Universal registry trait for external skill sources (agentskills.io, skills.sh). PR open but needs author action.

## 7. User Feedback Summary
- **Pain points expressed**:
  - Multi-agent delegation is blocked by tool filtering and risk_profile bugs (e.g., #7470, #6699).
  - Context budgeting is broken by default (#5808) – system prompt + tool definitions already exceed the 32K limit on iteration 1.
  - MCP tools show no filtering effect (#6699) and cause process leaks (#5903).
  - Cron jobs lack proper locking (#6037) and WhatsApp delivery is missing (#6224).
  - Named instance systemd unit detection is broken (#6227).
  - Skill management tools ignore cooldown periods (#6683) and only support `SKILL.toml` not `manifest.toml` (#6645).
  - Users running on Windows face multiple execution issues (#7214).
- **Positive signals**: The v0.8.0 release delivers on long-awaited multi-agent support; automatic config migration reduces migration friction.

## 8. Backlog Watch
### Issues needing maintainer attention (multiple contributors, no recent merge):
- **#5903** (MCP orphan leak) – open since April 19, labelled `status:accepted`, but no fix PR merged.
- **#5808** (context budget overflow) – open since April 16, accepted, no fix PR.
- **#5542** (OOM in WSL2) – open since April 9, in progress, likely needs either a fix or a decision to defer.
- **#6037** (cron concurrent execution) – PR #6038 exists but is stale (`needs-author-action`).
- **#6302** (Gemini 400) – PR #6303 exists but stale.
- **#6434** (shell tool refusal at full autonomy) – PR #6914 exists but blocked.
- **#6361** (context_compression drops tool messages) – PR #6303 may partially address; separate fix needed.
- **#6678** (Anthropic name validation) – no PR yet.

### PRs stalled on author action (selected):
- **#5516** (fuzz targets) – stale candidate.
- **#5661** (cron CLI delivery flags) – stale candidate.
- **#5892** (three production blockers) – stale candidate.
- **#6143** (skill registry) – stale candidate.
- **#6190** (OTel GenAI spans) – stale candidate.
- **#6230** (WhatsApp cron delivery) – stale candidate.
- **#6288** (systemd unit name) – stale candidate.
- **#6303** (fix Gemini 400) – stale candidate.
- **#6318** (on_before_compaction hook) – stale candidate.

These stagnant PRs indicate that maintainer review bandwidth or contributor follow-through is a bottleneck. The v0.8.0 release may have shifted focus toward stabilisation, but critical bug fixes remain in limbo.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-12

## Today's Activity Brief
Six issues were updated in the last 24 hours (3 open, 3 closed), along with 31 pull requests (13 open, 18 merged/closed). A new nightly build (v0.2.9-nightly.20260612) was released automatically. Merged PRs included fixes for dropped `tool_calls` messages during streaming, a PID file reuse vulnerability, a model ID mismatch for Claude Sonnet 4.6, and WhatsApp native mode detection. A security advisory about `allowed_cidrs` bypass during first-run setup was closed with an apparent fix.

## Releases
- **nightly** (v0.2.9-nightly.20260612.413d3749) — Automated nightly build, may be unstable.
  Changelog: https://github.com/sipeed/picoclaw/compare/v0.2.9...main
  No breaking changes or migration notes provided.

## Project Progress
Notable merged/closed PRs in the last 24 hours:

- **#2957** – fix(channels): prevent `tool_calls` from being dropped during streaming (closed)
  https://github.com/sipeed/picoclaw/pull/2957
- **#2955** – fix: verify process identity in singleton PID check (closed)
  https://github.com/sipeed/picoclaw/pull/2955
- **#2947** – fix: correct `claude-sonnet-4.6` model ID to use hyphens (closed)
  https://github.com/sipeed/picoclaw/pull/2947
- **#2934** – fix(channels): allow WhatsApp native mode with `use_native` flag (closed)
  https://github.com/sipeed/picoclaw/pull/2934
- **#2696** – feat(mcp): support per-request dynamic headers from channel context (closed)
  https://github.com/sipeed/picoclaw/pull/2696
- **#3060** – fix: use `%w` for error wrapping and handle `json.MarshalIndent` error (closed)
  https://github.com/sipeed/picoclaw/pull/3060
- **#3067** – fix: add `DmScope` field to `SessionConfig` to persist `dm_scope` setting (closed)
  https://github.com/sipeed/picoclaw/pull/3067
- **#3106, #3099, #3098, #3102** – Dependency bumps (AWS SDK, Go sync, MCP SDK, etc.) (closed)
  https://github.com/sipeed/picoclaw/pull/3106
  https://github.com/sipeed/picoclaw/pull/3099
  https://github.com/sipeed/picoclaw/pull/3098
  https://github.com/sipeed/picoclaw/pull/3102

A major open PR **#2937** (“Feat/agent collaboration”) remains under review, introducing an internal agent collaboration bus with mailboxes, threads, and permission-aware message delivery.
https://github.com/sipeed/picoclaw/pull/2937

## Community Hot Topics
- **#2472** (open, 5 comments, 1 👍) – `list_dir` returns `invalid argument` on Windows due to path separator mismatch with `os.Root`. Users have reported the issue since April and continue to engage. Fix still pending.
  https://github.com/sipeed/picoclaw/issues/2472
- **#2937** (open PR) – Agent collaboration feature; the most substantial functional addition under active development, gathering community interest through continued activity.
- **#2958** (closed) – `tool_calls` messages dropped during consecutive requests via the pico WebSocket channel. Fixed in PR #2957, which was merged today.
  https://github.com/sipeed/picoclaw/issues/2958

## Bugs & Stability
### High Severity
- **#3080** (closed) – Security: `allowed_cidrs` can be bypassed via same-host loopback proxying during first-run setup. Closed today; fix appears to be included in the nightly build or a related PR (details not explicitly shown in the data).
  https://github.com/sipeed/picoclaw/issues/3080

### Moderate Severity
- **#2472** (open) – `list_dir` fails on Windows with `invalid argument` because backslashes are not converted to forward slashes for `os.Root`. No fix PR yet; requires platform-aware path handling.
  https://github.com/sipeed/picoclaw/issues/2472
- **#3094** (open) – Asynchronous sub‑agent (`spawn`) tasks produce duplicate messages on channels because the `ForUser` field is used both for direct push and main agent summarization.
  https://github.com/sipeed/picoclaw/issues/3094
- **#3108** (open, 0 comments) – Image description requests hallucinate when the active model lacks vision support (e.g., `deepseek/deepseek-v4-flash`). The `load_image` tool is called but the model ignores content.
  https://github.com/sipeed/picoclaw/issues/3108
- **#2954** (closed) – Lack of 32-bit Android support; closed as stale without further action.

### Fixes in place
- #2957 fixes #2958 (dropped tool_calls)
- #2955 fixes PID reuse startup failure
- #3067 fixes `DmScope` not persisting
- #3060 fixes error wrapping and ignored `json.MarshalIndent` error

## Feature Request Clusters
- **Agent collaboration** (#2937 PR) – Durable inter‑agent communication with mailboxes, collaboration threads, and permission‑aware envelopes. This is the largest feature currently under development.
- **MCP dynamic headers** (#2696, merged) – Channels can now forward HTTP headers to MCP servers per‑request, enabling per‑user authentication.
- **WhatsApp native mode** (#2934, merged) – Allows WhatsApp channel to use the native whatsmeow library instead of requiring a bridge URL.
- **Session config persistence** (#3067, merged) – The DM scope setting can now be saved from the UI.

Several dependency updates (e.g., GitHub Copilot SDK from 0.2.0 to 1.0.1, shadcn from 4.7.0 to 4.11.0) were also opened today but remain unmerged.

## User Feedback Summary
- **Windows pain point**: The `list_dir` bug (path separator) has been open since April and remains unfixed, impacting Windows users who rely on file listing tools.
- **Sub‑agent message duplication**: Users using `spawn` for asynchronous tasks receive duplicate messages on channels, reducing UX quality.
- **Vision model fallback**: The image hallucination issue indicates a need for model capability checks before invoking image tools.
- **Security concern**: The `allowed_cidrs` bypass (though fixed) highlighted that first‑run setup could be exploited via local proxy. The swift closure suggests maintainers prioritized this.
- **Configuration persistence**: The `dm_scope` setting not saving was a friction point reported by users; resolved in today’s merge.

## Backlog Watch
- **#2472** (Windows path separator bug, open since April 2026) – No fix PR or assignee; continues to accumulate comments. Maintainer attention needed.
- **#2956** (open PR, stale for 16 days) – Fix to preserve channel enabled state when merging security.yml. No recent activity.
  https://github.com/sipeed/picoclaw/pull/2956
- **#3048** (open PR, 5 days old) – Fix for MCP `add` command rejecting unknown flags like `--no-color`. Still open.
  https://github.com/sipeed/picoclaw/pull/3048

</details>