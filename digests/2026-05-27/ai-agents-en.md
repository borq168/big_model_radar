# OpenClaw Ecosystem Digest 2026-05-27

> Issues: 382 | PRs: 500 | Projects covered: 4 | Generated: 2026-05-27 02:37 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-05-27

## Today's Activity Brief

OpenClaw saw heavy activity across all dimensions: **382 issues updated** (171 open, 211 closed) and **500 PRs updated** (265 open, 235 merged/closed) in the last 24 hours. Two new betas shipped — `v2026.5.26-beta.1` and `v2026.5.25-beta.1` — bringing faster reply delivery, improved iMessage attachment handling, and startup optimization. A large volume of bug-fix PRs landed, but several beta-blocker severity issues remain open, particularly around event-loop saturation, silent session drops, and subagent failures.

---

## Releases

### v2026.5.26-beta.1
_Released 2026-05-26_

**Highlights:**
- **Faster replies and startup:** Visible reply delivery now separates user-facing sends from slower follow-up work. Command/model/plugin metadata is reused on hot paths, and Gateway startup avoids repeated plugin, channel, session, usage-cost, and filesystem scans.
- Other performance improvements and bug fixes.

### v2026.5.25-beta.1
_Released 2026-05-25_

**Beta 1 late fixes:**
- **iMessage attachment fix:** Thread current channel/account inbound attachment roots into the image tool so iMessage-saved attachments under `~/Library/Messages/Attachments` (including wildcard roots) are read through the existing inbound path policy instead of being rejected.

**No breaking changes or migration notes** are documented for either release beyond standard upgrade paths.

---

## Project Progress — Merged/Closed PRs

**Key fixes landed today:**

- **[#86722](https://github.com/openclaw/openclaw/pull/86722) (closed):** `fix(tui): queue prompts submitted while busy` — Lets TUI prompts submitted during active runs reach `sendChat` so existing queue policy can decide steering, following up, collecting, or interrupting.

- **[#87084](https://github.com/openclaw/openclaw/pull/87084) (closed):** `fix(plugin-sdk): use Function.name to find onDiagnosticEvent export` — Fixes plugin failures during gateway stop/restart after bundled build reshuffles minified export aliases, which broke `onDiagnosticEvent` detection.

- **[#87069](https://github.com/openclaw/openclaw/pull/87069) (closed):** `Suppress transient runner failures in channels` — Stops OpenClaw from spamming channels with API rate-limited error messages on every new message.

- **[#62643](https://github.com/openclaw/openclaw/pull/62643) (closed):** `fix(status): document purpose="status" contract for memory plugins` — Fixes false negative reports (e.g., `vector off`) when `openclaw status` loads third-party memory plugins asynchronously.

- **[#86711](https://github.com/openclaw/openclaw/pull/86711) (open):** `fix(acp): skip oneshot sessions during startup identity reconcile` — Prevents misleading errors during gateway startup when reconciling oneshot ACP session identities.

- **[#86889](https://github.com/openclaw/openclaw/pull/86889) (open):** `fix(gateway): drop pre-session-start subagent_announce pairs from chat.history hydration` — Prevents stale subagent announcement content from leaking into fresh `/new` conversations.

- **[#86806](https://github.com/openclaw/openclaw/pull/86806) (open):** `fix: recover crashed main sessions via lock-file detection fallback` — Adds recovery path for sessions that remain stuck after unclean gateway crash when lock-file staleness checks fail (PID reuse).

**Other notable open PRs with maintainer attention:**
- **[#85936](https://github.com/openclaw/openclaw/pull/85936) (open):** `fix: preserve plugin LLM command auth` — Preserves host-selected agent auth/profile binding when plugin command paths invoke LLM completions.
- **[#86157](https://github.com/openclaw/openclaw/pull/86157) (open):** `[Feature]: Channel Broker Phase 2D Slack opt-in broker routing proof` — Consolidates recurring channel maintenance behind one Channel Broker contract.
- **[#81402](https://github.com/openclaw/openclaw/pull/81402) (open):** `refactor: move runtime state to SQLite` — Large refactor moving away from scattered JSON/JSONL/lock files to typed SQLite layout.

---

## Community Hot Topics

**Most active issue (109 comments):**
- **[#75 — Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)** (open since Jan 1, 77 👍) — Users continue to push for desktop app support beyond macOS/iOS/Android. No signs of imminent implementation, but sustained community interest.

**Highly commented P1 bugs:**
- **[#44925 — Subagent completion silently lost](https://github.com/openclaw/openclaw/issues/44925)** (18 comments) — Multiple failure modes where subagent task results silently disappear with no retry, no notification, no auto-restart on timeout. Core reliability concern affecting Telegram forum bots on Ubuntu.
- **[#68596 — Configurable streaming watchdog timeout](https://github.com/openclaw/openclaw/issues/68596)** (14 comments, 8 👍) — Extended-reasoning models (kimi-k2.5, DeepSeek-R1) trigger 30s streaming watchdog warnings; users request configurable thresholds.
- **[#81249 — Ollama embeddings fail when proxy is enabled](https://github.com/openclaw/openclaw/issues/81249)** (11 comments) — SSRF protections clear bypass variables, making it impossible to exempt local embedding providers from proxy tunnels.
- **[#86599 — Local model calls block Gateway event loop on Windows beta](https://github.com/openclaw/openclaw/issues/86599)** (11 comments, beta blocker) — Windows gateway becomes unresponsive for ~4 minutes on trivial model calls.
- **[#76562 — High CPU, extreme RPC latency after upgrade](https://github.com/openclaw/openclaw/issues/76562)** (11 comments, 5 👍) — Gateway performance regression from 2026.4.24 to 2026.4.29/2026.5.2: CPU pinned at 100%, control-plane RPC times 10–50s, HTTP checks failing.

**Active PRs with significant discussion:**
- No individual PRs have explicit comment counts shown in the dataset (all listed as `undefined`), but the following have high engagement via labels and status: [#70864](https://github.com/openclaw/openclaw/pull/70864) (scoped mention pattern policy), [#82431](https://github.com/openclaw/openclaw/pull/82431) (plugin approval action metadata), [#86156](https://github.com/openclaw/openclaw/pull/86156) and [#86157](https://github.com/openclaw/openclaw/pull/86157) (Channel Broker Phase 2C/2D).

---

## Bugs & Stability

### Beta-Blocker Severity (P1 with "beta-blocker" label)

1. **[#86948 — Codex app-server turns silently drop with event loop saturation](https://github.com/openclaw/openclaw/issues/86948)** (P1, beta-blocker) — In-process codex app-server drops turns after 1–4 successful interactions; OpenAI Responses API event received but turn never resolves. Gateway event loop emits "customer preemption or server restart" advisory. **No linked fix PR yet.**

2. **[#86599 — Local model provider calls block Gateway event loop on Windows beta](https://github.com/openclaw/openclaw/issues/86599)** (P1, beta-blocker) — Trivial `infer` runs take ~4 minutes; gateway event loop starved. **No linked fix PR yet.**

### P1 Regressions & Crashes

3. **[#86508 — EmbeddedAttemptSessionTakeoverError during Discord runs](https://github.com/openclaw/openclaw/issues/86508)** (P1, regression) — "session file changed while embedded prompt lock was released" error on Discord. `doctor --fix` does not resolve. **No linked fix PR.**

4. **[#86509 — Event-loop starvation regression on v2026.5.22](https://github.com/openclaw/openclaw/issues/86509)** (P1) — 87s session-lock phase, 31s loop delay. Rollback to 5.20 required. Recurrence of #80695. **No linked fix PR.**

5. **[#86827 — Group chat session stuck in 'failed' state silently drops all messages](https://github.com/openclaw/openclaw/issues/86827)** (P1) — After AI turn fails, all subsequent messages silently dropped with no error surfaced. **No linked fix PR.**

6. **[#86613 — Every memory_search call leaks ~N FDs](https://github.com/openclaw/openclaw/issues/86613)** (P1) — One FD per `.md` file leaked per `memory_search` call on macOS; long-running gateways degrade toward FD exhaustion. **No linked fix PR.**

7. **[#85030 — MCP tools not injected into subagent sessions](https://github.com/openclaw/openclaw/issues/85030)** (P1) — `bundle-mcp` + per-tool allowlist + per-agent allowlist all ignored; subagent receives only built-in tools. **No linked fix PR.**

8. **[#86354 — Codex native code mode disabled on Node.js-hosted gateways](https://github.com/openclaw/openclaw/issues/86354)** (P1) — v2026.5.22 strips `exec`/`read`/`write`/`edit` from isolated sessions when exec host resolves to `node`. **No linked fix PR.**

### P2 Important Bugs

9. **[#86746 — Default toolResultMaxChars (16K) too small for frontier models](https://github.com/openclaw/openclaw/issues/86746)** (P2) — Setting exists but default is undocumented and leaves models like Claude Opus 200K, Grok 1M+ using tiny fraction of context window. **Closed as won't fix** — maintainers note knob exists.

10. **[#86861 — Cron tasks fail due to rate-limit cooldown timeout in 5.20+](https://github.com/openclaw/openclaw/issues/86861)** — Regression in how rate-limit cooldown is handled for cron-triggered tasks. **No linked fix PR.**

### Recently Fixed (today)

- **[#86939 — Webchat run-status-label stuck on "In progress"](https://github.com/openclaw/openclaw/issues/86939)** (P2, closed) — Race condition between terminal chat event and sessions.list/sessions.get caused status label to flip back to "In progress" permanently.
- **[#85953 — sessions_yield leaves parent session transcript lock held](https://github.com/openclaw/openclaw/issues/85953)** (P1, closed) — Fixed subagent completion callback timeout caused by parent session lock not being released.
- **[#86613 — FD leak fix PRs in review](https://github.com/openclaw/openclaw/issues/86613)** — Still open; fix pending.

---

## Feature Request Clusters

### Cross-Platform Desktop Apps (Persistent)
- **[#75 — Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)** — 109 comments, 77 👍. Long-standing request for desktop apps beyond macOS/iOS/Android. No maintainer timeline indicated.

### Streaming & Watchdog Controls
- **[#68596 — Configurable streaming watchdog timeout threshold](https://github.com/openclaw/openclaw/issues/68596)** (14 comments, 8 👍) — Extended-reasoning models (kimi-k2.5, DeepSeek-R1) produce false watchdog warnings.

### Subagent/Orchestration Improvements
- **[#38626 — Subagent lifecycle observability + async supervision controls](https://github.com/openclaw/openclaw/issues/38626)** (5 comments) — Operators need deterministic visibility/control for async subagent workflows.
- **[#79905 — Typed transcript projections and rebuild contract](https://github.com/openclaw/openclaw/issues/79905)** (5 comments) — Improve transcript access patterns.

### Channel-Specific Features
- **[#50093 — WhatsApp backfill missed messages after reconnection](https://github.com/openclaw/openclaw/issues/50093)** (9 comments) — Messages during outage window are silently lost.
- **[#78016 — Voice messages to agent don't work on Matrix](https://github.com/openclaw/openclaw/issues/78016)** (11 comments) — Agent receives audio but ignores it, making up polite replies instead.

### Developer Experience
- **[#86237 — Rename 'cron' subsystem to disambiguate from system cron](https://github.com/openclaw/openclaw/issues/86237)** (4 comments) — Name collision causes real, repeatable confusion for new and experienced operators.
- **[#85731 — Proposed iOS app direction](https://github.com/openclaw/openclaw/issues/85731)** (4 comments) — Design screenshots shared for iOS app: command/home surface, chat surface, talk toggle.

---

## User Feedback Summary

**Pain points (explicit from issue reports):**
- **Silent message loss** is the most urgent cluster: subagent completions silently lost (#44925), WhatsApp messages lost during reconnection (#50093), group chat stuck in 'failed' state silently drops all messages (#86827), Webchat messages lost during WebSocket reconnect (#45952).
- **Gateway performance regressions** after minor version upgrades (#76562, #86509) force users to pin specific versions and add to local `BLOCKED_VERSIONS` lists.
- **Windows compatibility** remains fragile: event-loop blocking (#86599), startup crashes (#62055), and general performance issues.
- **MCP/subagent tool isolation** is broken: MCP tools not injected into subagent sessions (#85030), Codex native code mode disabled on Node (#86354).
- **Configuration defaults** are undocumented or inappropriate for frontier models: `toolResultMaxChars` default (#86746), streaming watchdog timeout (#68596).

**Satisfaction indicators:**
- High engagement with new beta releases (382 issues, 500 PRs in 24h) suggests active testing community.
- Community is contributing fixes: 235 merged/closed PRs today.
- Feature-rich PRs like Channel Broker (#86156, #86157) and SQLite runtime state (#81402) show substantial volunteer investment.

---

## Backlog Watch

### Long-Open Important Issues (90+ days, high community engagement)

| Issue | Age | Status | Notes |
|-------|-----|--------|-------|
| [#75 — Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75) | ~147 days | Open, 77 👍, 109 comments | Needs maintainer product decision, security review |
| [#38626 — Subagent lifecycle observability](https://github.com/openclaw/openclaw/issues/38626) | ~81 days | Open, P2 | Needs maintainer review, product decision, security review |
| [#44925 — Subagent completion silently lost](https://github.com/openclaw/openclaw/issues/44925) | ~75 days | Open, P1 | Needs maintainer review, product decision |
| [#45550 — Anthropic 1M context migration GA](https://github.com

---

## Cross-Ecosystem Comparison

## Cross-Project Comparison Report — 2026-05-27

### 1. Daily Cross-Project Overview
Today’s activity was overwhelmingly concentrated in **OpenClaw**, which accounted for 382 issues and 500 PRs—dwarfing the other three projects combined. **Zeroclaw** and **PicoClaw** showed moderate but steady activity (35 and 21 PRs respectively), while **NanoBot** had the lightest day (19 PRs, 4 issues). Only OpenClaw published two new beta releases; PicoClaw pushed a nightly build, and the others had no releases. Across projects, common threads included provider compatibility fixes, channel-specific improvements, and continued work on MCP tool integration.

### 2. Activity Comparison

| Project     | Issues Updated (Open/Closed) | PRs Updated (Open/Merged) | Releases Today | Activity Note |
|-------------|-----------------------------|---------------------------|----------------|---------------|
| **OpenClaw**   | 382 (171 open, 211 closed)  | 500 (265 open, 235 merged) | v2026.5.26-beta.1, v2026.5.25-beta.1 | Highest volume by far; many beta-blocker bugs open |
| **NanoBot**    | 4 (4 open, 0 closed)        | 19 (13 open, 6 merged)    | None           | Light day; merged Kagi search fix, Telegram webhook, agentmail skill |
| **Zeroclaw**   | 6 (6 open, 0 closed)        | 35 (29 open, 6 merged)    | None           | Modest activity; email channel fix merged, RFC on scheduled tasks |
| **PicoClaw**   | 7 (5 open, 2 closed)        | 21 (8 open, 13 merged)    | nightly v0.2.9-nightly | Balanced merges; exec tool safety, Telegram guest/business, WeChat multi-account |

### 3. OpenClaw Compared With Peers
- **Activity volume**: OpenClaw’s 500 PRs and 382 issues in 24 hours exceed the combined total of the other three projects by an order of magnitude. This reflects a much larger contributor base and a more complex release cycle (two betas in two days).
- **Technical focus**: OpenClaw concentrated on gateway stability (event-loop saturation, session drops, subagent failures) and community feature requests (Linux/Windows desktop apps, streaming watchdog configurability). In contrast, NanoBot, Zeroclaw, and PicoClaw worked on smaller, concrete fixes (Kagi API compatibility, email threading, exec path safety) and targeted features (Telegram business mode, MCP resource bridges).
- **Community surface area**: OpenClaw had 109 comments on a single issue (#75) and multiple P1 bugs with sustained discussion. NanoBot, Zeroclaw, and PicoClaw lacked high-comment issues; the most discussed was Zeroclaw’s DeepSeek-V4 bug (13 comments).

### 4. Shared Technical Focus Areas
- **MCP tool integration**: NanoBot (#4014) and Zeroclaw (#6946) worked on MCP reconnection/notification and resource/prompt bridges. OpenClaw’s #85030 (MCP tools not injected into subagent sessions) also touches this area.
- **Channel-specific improvements**: All four projects had channel work: OpenClaw (iMessage attachment fix, Discord fallback, Telegram/business modes via PRs in PicoClaw), NanoBot (Telegram webhook mode), Zeroclaw (email channel fix), PicoClaw (Telegram guest/business, WeChat multi-account).
- **Provider/compatibility fixes**: OpenClaw (Ollama embeddings proxy bug #81249, DeepSeek-R1 watchdog #68596), Zeroclaw (DeepSeek-V4 API format #6059), NanoBot (Kagi search API #4004, Codex transport errors #4009), PicoClaw (Codex OAuth empty responses #2674, Claude model ID corrections #2948/#2947).
- **TUI/WebUI enhancements**: OpenClaw (TUI queue fix #86722), NanoBot (WebUI ESLint #3981, new chat preservation #3944), Zeroclaw (TUI keybinding fix #6950, mode switching), PicoClaw (WebUI line numbers #2933).
- **Configuration and defaults**: OpenClaw (toolResultMaxChars undocumented #86746, streaming watchdog timeout #68596), Zeroclaw (cooldown enforcement #6684, delegate agent config #6688), PicoClaw (streaming HTTP toggle #2404).

### 5. Differentiation Analysis
- **OpenClaw** is the core reference implementation with a massive feature surface: subagent orchestration, event-loop architecture, multiple channel backends, plugin SDK. Today’s digest highlights systemic stability issues (silent message loss, beta-blocker bugs) that come with scale and rapid iteration.
- **NanoBot** focuses on lightweight, modular agent features: Dream system (long-term memory), agent collaboration message bus, GitAgent Protocol. Its activity is more feature-driven than bug-fix-driven, with lower issue volumes but steady PR momentum.
- **Zeroclaw** places emphasis on RFC-driven design (routed scheduled tasks #6954, computer-use support #6909) and TUI accessibility. Its community is smaller and more feature-request oriented, with active maintainer responses (fix PRs same day as bugs).
- **PicoClaw** differentiates through cross-platform support (RISC-V .deb, Yocto/OpenEmbedded layer, Termux SSL detection) and embedded/telegram use cases. Its release cadence is nightly-only, and user frustration with infrequent stable releases is evident (#2952).

### 6. Community Activity Notes
- **High activity tier**: OpenClaw — 382 issues, 500 PRs, two betas. The project is clearly the most active in raw numbers, likely driven by a large open-source contributor base and maintainer team.
- **Moderate-high activity tier**: Zeroclaw — 35 PRs, 6 issues, no release but active RFC discussion. Contributor responsiveness is high (same-day fixes).
- **Moderate activity tier**: NanoBot (19 PRs, 4 issues) and PicoClaw (21 PRs, 7 issues, one nightly). Both show steady incremental progress with smaller communities.
- **Release patterns**: Only OpenClaw and PicoClaw published new builds today. NanoBot and Zeroclaw had no releases, indicating they may be in a pre-release or stabilization phase.

### 7. Evidence-Backed Observations
1. **OpenClaw dominates raw activity but also carries most beta-blocker bugs.** Its 500 PRs/382 issues reflect both high development velocity and unresolved stability risks (event-loop saturation, silent session drops). No other project reported anything equivalent in severity.
2. **Provider compatibility is a cross-project pain point.** OpenClaw (Ollama proxy, DeepSeek-R1 watchdog), Zeroclaw (DeepSeek-V4), NanoBot (Kagi API change, Codex transport errors), and PicoClaw (Codex OAuth, Claude model IDs) all addressed or discussed provider-specific issues today.
3. **Channel-specific fixes are a common incremental improvement area.** Every project merged or discussed at least one channel fix (email, Telegram, WeChat, Discord, iMessage). This suggests ongoing user demand for multi-platform agent reach.
4. **MCP tooling continues to gain attention in the broader ecosystem.** NanoBot and Zeroclaw actively developed MCP features (reconnection, resource bridges, tool filtering), while OpenClaw has an open P1 bug on MCP tool injection into subagents. No project has achieved full MCP maturity yet.
5. **TUI/WebUI quality-of-life improvements are a recurring theme across all four projects.** From OpenClaw’s prompt queue fix to NanoBot’s ESLint to Zeroclaw’s keybinding and PicoClaw’s line numbers, developers are investing in interface polish. No clear cross-project standard approach is evident.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest – 2026-05-27

## 1. Today's Activity Brief
Over the past 24 hours, the NanoBot repository saw moderate activity: **4 open issues** were updated (all still open, 0 closed) and **19 pull requests** received updates (13 open, 6 merged/closed). No new releases were published. Development momentum remains high, with a merged fix for Kagi search API integration, a WebUI ESLint chore, a Telegram webhook mode, a Docker agentmail skill, and a Codex transport error handling fix. Several substantial feature PRs continue to progress, including MCP reconnection fixes, an observation-reflection agent loop, and an agent collaboration message bus.

## 2. Releases
**None** – no new versions were published today.

## 3. Project Progress
Six pull requests were merged or closed today:

- **#4004** – `fix(web): update Kagi search API integration` (merged) – Switched to Kagi’s current v1 Search API (POST, Bearer auth, JSON body). ([#4004](https://github.com/HKUDS/nanobot/pull/4004))
- **#4009** – `fix(provider): handle blank Codex transport errors` (merged) – Adds structured metadata for retry classification when Codex fails with no details. ([#4009](https://github.com/HKUDS/nanobot/pull/4009))
- **#4008** – `feat(docker): mount agentmail CLI and add agentmail skill` (merged) – Mounts the `agentmail` binary into the container and wires up the skill. ([#4008](https://github.com/HKUDS/nanobot/pull/4008))
- **#3996** – `feat(telegram): add webhook mode` (merged) – Adds opt-in webhook support with secret-token validation while keeping long polling default. ([#3996](https://github.com/HKUDS/nanobot/pull/3996))
- **#3944** – `fix(webui): keep new chat during session refresh` (merged) – Preserves optimistic new chats across session-list refreshes. ([#3944](https://github.com/HKUDS/nanobot/pull/3944))
- **#3981** – `chore: enable WebUI ESLint` (merged) – Introduces flat ESLint config and dependencies for the WebUI. ([#3981](https://github.com/HKUDS/nanobot/pull/3981))

Additionally, several open PRs saw further commits or comments, advancing work on MCP tool-change notifications, agent collaboration, Dream system consolidation, and more.

## 4. Community Hot Topics
No issues or PRs accumulated more than 0 comments or reactions today, making it difficult to identify intense debate. However, the following items drew continued development attention:

- **Dream System Overhaul** – PR [#3990](https://github.com/HKUDS/nanobot/pull/3990) (`feat(dream): single-phase consolidation via AgentLoop with goal-state lifecycle`) was updated and remains open, alongside an enhancement issue [#3973](https://github.com/HKUDS/nanobot/issues/3973) that motivated it. This reflects ongoing community interest in improving NanoBot’s long-term memory and self-improvement mechanisms.
- **Agent Collaboration** – PR [#3992](https://github.com/HKUDS/nanobot/pull/3992) (`feat(agent-collab) - enable cross agent messaging`) was updated, suggesting active work on cross-instance agent communication.
- **Orphaned Tool Results Bug** – Issue [#4006](https://github.com/HKUDS/nanobot/issues/4006) (orphaned `role: "tool"` messages) gained a fix PR [#4011](https://github.com/HKUDS/nanobot/pull/4011) on the same day, indicating responsive triage.

## 5. Bugs & Stability
Three bugs were reported today, ranked by severity:

1. **Stream stalled for >90 seconds** – [#4013](https://github.com/HKUDS/nanobot/issues/4013) (open). User reports that after updating from 0.1.5post2 to 0.2.0, every real work session is broken by a hardcoded goal-related stall. No fix PR exists yet. **Severity: Critical** – blocks core usage.
2. **Orphaned tool results in conversation history** – [#4006](https://github.com/HKUDS/nanobot/issues/4006) (open). `role: "tool"` messages without matching `tool_calls` can cause API rejections and trace renderer errors. A fix PR [#4011](https://github.com/HKUDS/nanobot/pull/4011) was opened on the same day to drop unmatched tool results. **Severity: High** – affects API compatibility with strict providers.
3. **Codex transport blank errors** – Addressed by merged PR [#4009](https://github.com/HKUDS/nanobot/pull/4009) – no longer a live bug.

Additionally, PR [#3869](https://github.com/HKUDS/nanobot/pull/3869) (DeepSeek message hardening, opened May 16) remains open, addressing null content and empty placeholder leaks that cause 400 errors.

## 6. Feature Request Clusters
Several feature requests appear in issues and are accompanied by related PRs:

- **Text-to-Speech / Voice Output** – Issue [#4010](https://github.com/HKUDS/nanobot/issues/4010) requests voice output to complement existing voice input. No corresponding PR yet.
- **Dream System Improvements** – Issue [#3973](https://github.com/HKUDS/nanobot/issues/3973) highlights the “hunger problem” (relying solely on `history.jsonl`) and lack of real-time learning. PR [#3990](https://github.com/HKUDS/nanobot/pull/3990) proposes a single-phase AgentLoop-based consolidation with goal-state lifecycle.
- **GitAgent Protocol (GAP) Support** – PR [#4005](https://github.com/HKUDS/nanobot/pull/4005) proposes adding `agent.yaml` + `SOUL.md` support for portable, discoverable agents. Open.
- **Skill Discovery Command** – PR [#3968](https://github.com/HKUDS/nanobot/pull/3968) adds a `/skill` slash command to list enabled skills.
- **Agent Collaboration** – PR [#3992](https://github.com/HKUDS/nanobot/pull/3992) implements a cross-instance message bus.
- **Workspace Sandbox** – PR [#4007](https://github.com/HKUDS/nanobot/pull/4007) exposes workspace sandbox capability (`off`, `application`, `system`) into AgentLoop and WebUI.
- **MCP Tools List Changed Notification** – PR [#4014](https://github.com/HKUDS/nanobot/pull/4014) enables automatic reloading of MCP tools when servers send `ToolListChangedNotification`.
- **Peers Update via WS Event** – PR [#3908](https://github.com/HKUDS/nanobot/pull/3908) emits `peers_update` events from `NANOBOT_PEER_*` environment variables.
- **Heartbeat Reasoning Decoupling** – PR [#1443](https://github.com/HKUDS/nanobot/pull/1443) (open since March) adds silent reasoning mode for heartbeat agents.

## 7. User Feedback Summary
- **Satisfaction with v0.1.5, frustration with v0.2.0** – User `@mxnbf` (#4013) explicitly praised the WebUI in v0.1.5post2 but called the v0.2.0 stream stall bug “renders any real work useless”.
- **Desire for richer self-improvement** – `@chxuan` (#3973) outlined the Dream system’s limitations in detail, signaling a power-user expectation for more dynamic memory.
- **Voice loop completion** – `@olgagaga` (#4010) noted that voice input works but voice output is missing, closing the conversational loop is a “minimal new surface area” request.
- **API compatibility complaints** – `@sgod39507-a11y` (#4006) reported that orphaned tool results cause strict API rejections and errors in trace renderers, affecting provider interoperability.

Overall, users report a positive experience with earlier stable versions but encounter regressions in the latest release and seek more sophisticated memory/capability features.

## 8. Backlog Watch
The following items have been open for an extended period without recent maintainer response or merge:

- **PR #1443** – `feat: decouple heartbeat reasoning from notification` (opened 2026-03-02, last updated today) – 87 days open. No maintainer comments. ([#1443](https://github.com/HKUDS/nanobot/pull/1443))
- **PR #2515** – `integrated_memory_framework` (opened 2026-03-26, last updated today) – 62 days open. Pluggable memory backends (Mem0, Graphiti, etc.). Needs review. ([#2515](https://github.com/HKUDS/nanobot/pull/2515))
- **PR #3869** – `fix(providers): DeepSeek message hardening` (opened 2026-05-16, last updated today) – 11 days open. Critical for DeepSeek provider stability. ([#3869](https://github.com/HKUDS/nanobot/pull/3869))
- **Issue #3973** – `Dream System: Hunger Problem & Lack of Real-time Learning` (opened 2026-05-23, last updated today) – 4 days open, no comments from maintainers. ([#3973](https://github.com/HKUDS/nanobot/issues/3973))

These items would benefit from maintainer triage to avoid stagnation or user dissatisfaction.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest — 2026-05-27

## 1. Today's Activity Brief
In the last 24 hours, 6 issues were updated (all open) and 35 pull requests were updated (29 open, 6 closed/merged). No new releases were published. The project saw active bug fixing and feature work across TUI, provider onboarding, MCP tools, and channel infrastructure. A major RFC proposing routed scheduled tasks entered discussion, and a long‑standing email channel fix was finally merged.

## 2. Releases
No new releases were tagged on 2026-05-27.

## 3. Project Progress
Six pull requests were closed or merged. Two of those are visible in the top‑20 sample:

- **#6512** (closed) – `fix(channels/email): html body rendering, subject threading, attachment path resolution` — This large PR resolved three email channel usability issues: wrong default subject, raw Markdown in HTML emails, and zero‑byte attachment path resolution. It touched 25+ channels to add the `subject` field to `ChannelMessage`.
  <https://github.com/zeroclaw-labs/zeroclaw/pull/6512>

- **#6901** (closed) – `fix(providers): preserve full reqwest error chains in transport/log diagnostics` — Provider transport failures now expose root causes (timeout vs DNS vs TLS) instead of collapsing to a top‑level text message.
  <https://github.com/zeroclaw-labs/zeroclaw/pull/6901>

Several open PRs are nearing review, including TUI keybinding fixes (#6952), cooldown enforcement (#6684), and delegated agent config respect (#6688).

## 4. Community Hot Topics
- **#6059** (Bug, high risk, 13 comments, 4 👍) – `[Bug]: Incompatible with DeepSeek-V4 API format` — Users report that both DeepSeek-V4-Pro and DeepSeek-V4-Flash fail with a thinking‑mode‑related error. The issue is tagged `status:in-progress`, indicating active maintainer attention.
  <https://github.com/zeroclaw-labs/zeroclaw/issues/6059>

- **#6909** (RFC, 3 comments) – `[Feature]: computer-use support (screen interaction like Codex / Peekaboo)` — User requests desktop GUI control via screenshots and mouse/keyboard events. The RFC is `status:accepted`, meaning the feature has been approved in principle.
  <https://github.com/zeroclaw-labs/zeroclaw/issues/6909>

- **#6954** (RFC, 0 comments but references five linked bugs) – `RFC: Route scheduled tasks through the orchestrator message pipeline` — Proposes fixing a cluster of scheduler bugs (#6037, #6105, #6648, #6632, #6686) by integrating cron jobs into the same safety/context/history pipeline as regular messages.
  <https://github.com/zeroclaw-labs/zeroclaw/issues/6954>

## 5. Bugs & Stability
| Issue | Severity | Description | Fix PR(s) |
|-------|----------|-------------|-----------|
| #6059 | High – S2 degraded | DeepSeek-V4 API format incompatibility on both Pro and Flash endpoints, likely tied to thinking mode. | – (in progress) |
| #6944 | Medium – S2 degraded | `[system]` log lines printed inline in interactive TTY mode, drowning out conversation output. | #6947 (open) |
| #6950 | Low – S3 annoyance | TUI only accepts F1–F5, unusable on compact keyboards without dedicated function keys. | #6952 (open) |
| #6684 | High – logic bug | Skill cooldown predicates exist but are never called in the `skill_manage patch` action. | #6684 (open, needs author action) |
| #6908 | High – onboarding | OpenAI onboarding forces API key prompt even when Codex subscription auth is wanted. | #6908 (open) |
| #6688 | Medium – config ignore | Delegate agents hardcode `SkillsPromptInjectionMode::Full`, ignoring `prompt_injection_mode` config. | #6688 (open, needs author action) |
| #6719 | High – state loss | `model_switch` tool flag is not persisted across turns via `set_route_selection()`. | #6719 (open) |
| #6934 | Medium – retry logic | Discord `/gateway/bot` 429 responses are wrapped as fatal errors, preventing retry. | #6934 (open) |

## 6. Feature Request Clusters
- **Desktop computer-use** – #6909 (accepted RFC) requests screenshot + mouse/keyboard control, citing OpenAI Codex and openclaw/hermes as reference. No implementation PR yet.
- **Scheduled task refactoring** – #6954 (new RFC) proposes moving cron jobs into the orchestrator pipeline, directly addressing five scheduler bugs.
- **MCP resource/prompt bridges** – #6946 (open PR) adds four synthetic MCP bridge tools (`mcp_list_resources`, `mcp_read_resource`, `mcp_list_prompts`, `mcp_get_prompt`) routed through the existing `McpRegistry`.
- **Per‑agent classifier provider** – #6945 (open PR) introduces `classifier_provider` config so that REPLY/NO_REPLY intent classification can use a cheaper model than the main agent.
- **Skill‑scoped tool elevation** – #6924 (open PR) adds `kind = "builtin"` for skills, letting them bypass agent‑level tool blocks without granting blanket access.
- **MCP tool filtering at execution time** – #6920 (open PR) enforces `allowed_tools`/`denied_tools` on MCP tool discovery, preventing disallowed tools from ever appearing in LLM context.
- **ZeroCode TUI + beta-2 integration** – #6848 (large open PR, 56+ labels) introduces a new TUI, RPC socket transport, and DenyWithEdit approval workflow. Known issues include broken delegates and fallback model behaviors.
- **Documentation & config hardening** – #6937 / #6949 (attachment path validation docs), #6953 (SiliconFlow international endpoint default).

## 7. User Feedback Summary
- **DeepSeek-V4 incompatibility** – User @SSDGADsss reports that both V4-Pro and V4-Flash fail with a thinking‑mode error, blocking use of a major provider.
- **TUI keyboard accessibility** – @theonlyhennygod reports that compact keyboards (Logitech MX Keys Mini, Keychron K‑series) without F‑keys cannot switch TUI modes. The submitted PR #6952 (Tab/Shift+Tab cycling) was created within hours.
- **Interactive mode log pollution** – @NiuBlibing reports that `[system]` INFO/WARN logs interleave with conversation output in TTY mode. A fix PR #6947 exists.
- **Missing attachment path validation docs** – @Audacity88 requests that the validation boundary around `MediaAttachment::from_file` be documented/hardened after the email attachment fix.
- **General satisfaction with responsiveness** – Multiple bugs (TUI keys, log clutter, Discord retry) received fix PRs on the same day they were reported, indicating active maintainer engagement.

## 8. Backlog Watch
- **#6059** – DeepSeek-V4 API bug (13 comments, 4 👍, status in‑progress). No fix PR yet; maintainers are actively working on it.
- **#6684** – Skill cooldown fix PR marked `needs-author-action` since 2026-05-15. Author @JordanTheJet has not responded to review comments.
- **#6667** – Large skills background review fork PR (`size: XL`, `needs-author-action`) integrating `SkillImprover` with a post‑turn fork pattern. Also waiting on author.
- **#6688** – Delegate agent config fix PR (`needs-author-action`) with no activity since 2026-05-15.
- **#6848** – Massive beta‑2 integration PR (`size: XL`, DO NOT MERGE label) with known issues (delegates, fallback, context counter). Likely requires significant maintainer review. No recent author updates.

All issues and PRs above are linked in their respective sections.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-27

## Today's Activity Brief
7 issues were updated in the last 24 hours (5 open, 2 closed), 21 PRs were updated (8 open, 13 merged/closed), and one nightly release was published. The community remains active around streaming HTTP configuration, Codex OAuth failures, and a RISC-V packaging issue. Several bug fixes and features were merged, including improvements to exec tool path safety, web search configuration, Telegram guest/business modes, and steering-heavy turn rendering. New open PRs address web search API compatibility, Claude model ID corrections, and Termux SSL certificate detection.

## Releases
- **nightly**: v0.2.9-nightly.20260527.28ec5793
  An automated nightly build; may be unstable.
  Full changelog: [compare v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)
  *No breaking changes or migration notes provided.*

## Project Progress
13 PRs were merged or closed today (listed below). Key advances include:

- **Web search YAML support** (#2647) – enables `web_search` tool configuration in YAML and sets DuckDuckGo as default.
- **Exec tool path safety fixes** – two PRs (#2826, #2750) correct relative path resolution in the exec bash guard, fixing workspace escape issues.
- **Telegram channel features** – guest mode (#2849) and business mode (#2845) added.
- **Channel identification refactor** (#2846) – Feishu now uses dynamic channel names for multi-instance support.
- **Steering-heavy turn improvements** – final turn render mode (`#2844`) and correct reply delivery (`#2840`) for multi-step tool chains.
- **Async spawn delivery policy** (#2830) – introduces explicit `delivery_mode` for `spawn` tool results.
- **WeChat multi-account support** (#2883) – allows multiple WeChat accounts via `weixin_*` config keys.
- **Web UI enhancement** (#2933) – line numbers and wrap toggle for code blocks.
- **History timestamp preservation** (#2946) – `created_at` is now carried through SeaHorse storage.
- **Yocto/OpenEmbedded layer docs** (#2851) – community contribution for embedded Linux builds.

**Open PRs updated today** (8): #2551, #2239, #2951, #2950, #2949, #2948, #2947.

## Community Hot Topics
- **[#2404 – Feature: Add config to send streaming HTTP request](https://github.com/sipeed/picoclaw/issues/2404)**
  8 comments, 1 👍. User wants a `"streaming": true` option in config to stream LLM responses like the OpenAI Python client. No maintainer assignment yet.

- **[#2674 – Codex OAuth: empty assistant response with ChatGPT backend](https://github.com/sipeed/picoclaw/issues/2674)**
  6 comments, 4 👍. When using OpenAI Codex OAuth against `chatgpt.com/backend-api/codex`, assistant responses come back empty. Stale label applied.

- **[#2887 – .deb version on RISC-V not functional with OpenAI model](https://github.com/sipeed/picoclaw/issues/2887)**
  5 comments. Package fails on RISC-V Debian with gpt-5.4-2026-03-05. Root cause unknown.

- **[#2952 – [Feature] 好久没发新版本了](https://github.com/sipeed/picoclaw/issues/2952)**
  Created today. User reports multiple issues (exec command, QQ channel restart loop, lack of model selection UI) and requests a new release.

## Bugs & Stability
- **Codex OAuth empty response** – #2674 (open, stale, 4 👍). No fix PR visible. High severity (users cannot use ChatGPT backend).
- **RISC-V .deb broken** – #2887 (open). Affects OpenAI model usage on RISC-V Linux. Medium severity.
- **WeChat image sending triggers API error** – #2943 (open). Sending images through WeChat channel causes ZhiPu GLM-5 API error 1210 (parameter error). No fix PR yet.
- **Exec command first turn issue** – mentioned in #2952 (open). Models often omit tool calls on first turn, causing redundant execution.
- **QQ channel restart loop** – also in #2952. After restart, next message triggers another restart unless context cleared.

**Fix PRs submitted today** (open):
- #2951 – web_search: use function-type instead of `web_search_preview` for better API compatibility.
- #2949 – auto-detect Termux SSL certificate path (fixes HTTPS failures on mobile).
- #2948 – skip temperature parameter for `claude-opus-4-7` models (fixes HTTP 400).
- #2947 – correct `claude-sonnet-4.6` model ID to hyphenated form (fixes 404 errors).

## Feature Request Clusters
- **Streaming HTTP responses** – #2404 requests a simple config toggle (no related PR).
- **UI improvements for model selection** – #2952 asks for dropdown selection of providers with key reuse, API test, and model list import.
- **Telegram guest/business modes** – already merged (#2849, #2845).
- **WeChat multi-account** – merged (#2883).
- **Steering-heavy turn rendering** – merged (#2844, #2840).
- **Async spawn delivery policy** – merged (#2830).
- **Yocto/OpenEmbedded integration** – docs merged (#2851).
- **FUNDING.yml** – open PR #2950 adds GitHub Sponsors button.

## User Feedback Summary
- **Pain points**: Codex OAuth failures are the most reacted issue (#2674, 4 👍). RISC-V users cannot run the .deb package. WeChat image uploads fail with certain providers. Exec tool relative path issues (now fixed) caused workspace escapes.
- **Use cases**: Embedded Linux engineers contributed a Yocto layer. Telegram users requested business/guest modes. Streaming HTTP is wanted for real-time LLM interactions.
- **Satisfaction/dissatisfaction**: Community contributions are active, but #2952 expresses frustration with infrequent releases and unresolved bugs. The nightly build cycle continues.

## Backlog Watch
- **#2674 – Codex OAuth empty response** (open since Apr 26, 4 👍). No maintainer comment. Stale label added.
- **#2887 – RISC-V .deb not functional** (open since May 17). No fix PR or maintainer response.
- **#2404 – Streaming HTTP request** (open since Apr 7, 8 comments). No assignment.
- **PR #2551 – Channel identification refactor** (open since Apr 16, stale). Would enable multi-instance channels; pending review.
- **PR #2239 – Docker compose with privileged** (open since Apr 1). Needs maintainer decision.

*All times refer to updates in the 24 hours preceding 2026-05-27.*

</details>