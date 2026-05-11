# OpenClaw Ecosystem Digest 2026-05-11

> Issues: 500 | PRs: 500 | Projects covered: 4 | Generated: 2026-05-11 02:14 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-05-11

## Today's Activity Brief
OpenClaw saw extremely high activity across 500 issues and 500 pull requests updated in the last 24 hours, with 444 open issues and 451 open PRs reflecting a fast-moving but heavily backlogged project. Two new beta releases (`v2026.5.10-beta.1` and `beta.2`) shipped, both focused on QA/Mantis automation infrastructure for Telegram PR evidence capture. The project's move toward adopting Codex as the default runtime for OpenAI turns is generating a substantial QA harness effort, with multiple new issues tracking parity testing between Pi and Codex runtimes. Community activity remains intense, with several regressions from the `2026.5.2` release causing user frustration around agent responsiveness and memory growth.

## Releases

### v2026.5.10-beta.2
- **QA/Mantis:** Added Telegram live PR evidence automation using Convex-leased credentials, Crabbox transcript capture, motion GIF previews, and inline PR comments.
- **QA/Mantis:** Added a Telegram desktop scenario builder that leases Crabbox, installs native Telegram Desktop, and configures OpenClaw for automated testing.

### v2026.5.10-beta.1
- Same changes as beta.2 (identical changelog), suggesting a rapid re-release with minor fixes.

No breaking changes or migration notes were documented for either release.

## Project Progress
Today's merged/closed PRs include several targeted fixes:

- **Discord type fix** ([#80473](https://github.com/openclaw/openclaw/pull/80473)): Replaced `ReturnType`-based type aliases to eliminate `oxlint no-redundant-type-constituents` errors in the Discord native command route.
- **Plugin SDK host workflow seams** ([#80267](https://github.com/openclaw/openclaw/pull/80267)): A large (XL-sized) PR consolidating host workflow seams across multiple channels and plugins, carrying forward prior contributor work.
- **QA harness fixture corrections** ([#80312](https://github.com/openclaw/openclaw/pull/80312), [#80321](https://github.com/openclaw/openclaw/pull/80321)): Two closed issues clarifying that reported Codex runtime bugs were actually mock provider/fixture artifacts, not user-facing issues.
- **Gateway fix for loopback sessions** ([#48285](https://github.com/openclaw/openclaw/pull/48285)): Fixed a regression where internal services connecting from `127.0.0.1` were rejected with "device identity required".
- **CI secret scan restoration** ([#48115](https://github.com/openclaw/openclaw/pull/48115)): Restored `detect-secrets` in CI and added missing doc symlinks.

Other notable open PRs advancing features include:
- **Config data loss fix** ([#80257](https://github.com/openclaw/openclaw/pull/80257)): Prevents user-authored config fields from being destroyed during version upgrades.
- **Subagent announce routing** ([#80242](https://github.com/openclaw/openclaw/pull/80242)): Routes completion announcements to the correct parent session.
- **Media drop surface** ([#69310](https://github.com/openclaw/openclaw/pull/69310)): Surfaces failed `MEDIA:` directives as user-visible warnings instead of silently dropping them.

## Community Hot Topics

### Most Discussed Issues

1. **[Feishu monitor memory leak](https://github.com/openclaw/openclaw/issues/48183)** (16 comments, open since March 16): The Feishu plugin's monitor state cleanup deletes `httpServers` Map entries without waiting for server closure, causing potential memory leaks.

2. **[Heartbeat timing regression](https://github.com/openclaw/openclaw/issues/47940)** (13 comments, open since March 16): Heartbeat alternates between "sent" and "ok-token" every cycle, effectively doubling the configured interval. User reports their agent goes silent for extended periods.

3. **[gh-issues skill injection vulnerability](https://github.com/openclaw/openclaw/issues/45740)** (12 comments, open since March 14): Untrusted GitHub issue bodies are injected directly into sub-agent prompts without sanitization — a security concern for users who process external issues.

4. **[Session memory unbounded growth](https://github.com/openclaw/openclaw/issues/55334)** (8 comments, 1👍, open since March 26): `sessions.json` accumulates entries with full `skillsSnapshot` duplicates, causing OOM crashes (~50-100 MB/min memory growth). This is closely related to the high-CPU regression reported in [#76562](https://github.com/openclaw/openclaw/issues/76562) after the 2026.4.29 upgrade.

5. **[Codex-vs-Pi runtime parity RFC](https://github.com/openclaw/openclaw/issues/80171)** (7 comments, 1👍, opened yesterday): A formal RFC tracking the QA harness effort for moving to Codex as the default runtime. Multiple support issues ([#80312](https://github.com/openclaw/openclaw/issues/80312), [#80320](https://github.com/openclaw/openclaw/issues/80320), [#80319](https://github.com/openclaw/openclaw/issues/80319)) were filed to correct test fixture problems exposed during this work.

Underlying needs from these discussions: Users are experiencing **silent failures** (lost subagent results, swallowed media, missed heartbeat cycles) and **instability from session state bloat**. The community is actively reporting and reproducing these issues, with detailed logs and reproduction steps.

## Bugs & Stability

### Critical / High Severity

1. **[Sessions JSON unbounded growth → OOM](https://github.com/openclaw/openclaw/issues/55334)** — Open since March 26. Gateway memory grows 50-100 MB/min due to unpruned `sessions.json` entries with duplicated `skillsSnapshot`. No fix PR identified yet. Users report gateway becoming unresponsive or being OOM-killed.

2. **[High CPU / extreme latency after 2026.4.24→4.29 upgrade](https://github.com/openclaw/openclaw/issues/76562)** (8 comments, 4👍). CPU pinned at 100%, control-plane RPC latency spikes, unstable polling. Multiple users affected. No fix PR identified.

3. **[Agents stop responding mid-work — 2026.5.2 regression](https://github.com/openclaw/openclaw/issues/76877)** (10 comments, 4👍). Agents use tools then go silent until prompted. User reports they cannot run anything newer than 2026.04-23. This is a confirmed regression with high user impact.

4. **[Memory management "in chaos" across users](https://github.com/openclaw/openclaw/issues/43747)** (8 comments, open since March 12). Multiple users observe wildly different memory behavior — some get chunking/embedding, others get summary-only storage, others get full JSON transcripts. No consistent behavior.

5. **[Subagent completion silently lost on timeout](https://github.com/openclaw/openclaw/issues/44925)** (10 comments, open since March 13). Multiple failure modes where subagent results disappear without notification, retry, or restart.

### Moderate Severity

- **Discord tool-call leaks** ([#44905](https://github.com/openclaw/openclaw/issues/44905)) — Internal LLM artifacts (tool JSON, `NO_REPLY`, commentary) visible to end-users in Discord channels.
- **Control UI progressively stuck** ([#45698](https://github.com/openclaw/openclaw/issues/45698)) — Dashboard becomes sluggish and unusable after being open for a while.
- **Compaction timeout hang** ([#43661](https://github.com/openclaw/openclaw/issues/43661)) — Session hangs indefinitely on compaction timeout, causing repeated duplicate message sends.
- **TUI input swallowed during generation** ([#45326](https://github.com/openclaw/openclaw/issues/45326)) — User input during model generation is queued for the next turn instead of interrupting.

### Fix PRs Exist

- [PR #48283](https://github.com/openclaw/openclaw/pull/48283) — Fixes aborted assistant messages writing stale buffer content (fixes [#48241](https://github.com/openclaw/openclaw/issues/48241)).
- [PR #80257](https://github.com/openclaw/openclaw/pull/80257) — Fixes config data loss during version upgrades, addressing the root cause of configuration corruption after `doctor --fix`.
- [PR #47754](https://github.com/openclaw/openclaw/pull/47754) — Uses FTS5 `snippet()` for keyword search instead of truncating from the beginning.

Today's data shows the project is in a **stability trough** — several regressions from March and late April releases remain unfixed, and the high volume of open issues (444) relative to closed (56) suggests the team is struggling to keep up.

## Feature Request Clusters

### Security & Access Control

- **Per-agent cost budget enforcement** ([#42475](https://github.com/openclaw/openclaw/issues/42475), 9 comments): Daily/monthly caps on model spend at the gateway level.
- **Built-in security scanning for skill installation** ([#45031](https://github.com/openclaw/openclaw/issues/45031), 6 comments): Automated checks when installing skills via clawhub.
- **Plugin trust tier classification** ([PR #47743](https://github.com/openclaw/openclaw/pull/47743)): Formalizes `content | sandboxed | native` trust tiers for plugins.
- **Per-skill model routing** ([#43260](https://github.com/openclaw/openclaw/issues/43260), 8 comments): Allow `model` field in `SKILL.md` frontmatter for per-skill model selection.
- **Skill author-defined setup hooks** ([PR #80266](https://github.com/openclaw/openclaw/pull/80266)): Run skill-supplied scripts on install/update.

### Reliability & Observability

- **Pre-reset memory flush** ([#45608](https://github.com/openclaw/openclaw/issues/45608), 8 comments, 3👍): Run silent memory flush before `/new`, `/reset`, and daily reset.
- **Gateway lifecycle warnings to dedicated channel** ([#45565](https://github.com/openclaw/openclaw/issues/45565), 6 comments): Route system health warnings away from conversation channels.
- **MathJax/LaTeX support in Control UI** ([#42840](https://github.com/openclaw/openclaw/issues/42840), 6 comments, 4👍): Render mathematical formulas in the dashboard.
- **YAML config file support** ([#45758](https://github.com/openclaw/openclaw/issues/45758), 6 comments, 1👍): Alternative to JSON5 for configuration files.

### Platform & Integration

- **Private network access for web_fetch** ([#39604](https://github.com/openclaw/openclaw/issues/39604), 12 comments, 6👍): Opt-in `tools.web.fetch.allowPrivateNetwork` config key.
- **Anthropic 1M context GA migration** ([#45550](https://github.com/openclaw/openclaw/issues/45550), 8 comments, 1👍): Track migration from beta to GA for the 1M context window.

## User Feedback Summary

### Pain Points

- **"Agents stop responding mid-work"** ([#76877](https://github.com/openclaw/openclaw/issues/76877)): "Unless you ask for progress" — users are having to manually prod agents to continue working after they go silent. The 2026.5.2 release is causing significant workflow disruption.
- **"Memory management is in chaos"** ([#43747](https://github.com/openclaw/openclaw/issues/43747)): Three users with identical setups observe completely different memory behavior, suggesting a non-deterministic bug.
- **"My colleague turned off the bot"** — One user reports losing a colleague because the bot was unreliable.
- **"Cannot run anything newer than 2026.04-23"** — User locked to an older version due to regressions.

### Use Cases Visible in the Data

Users are deploying OpenClaw for:
- **Multi-agent orchestration** (parallel coding batches, subagent spawning)
- **Heartbeat/cron monitoring** (scheduled reminders, system checks)
- **GitHub issue integration** (automatic code review, issue triage)
- **Enterprise communication channels** (Feishu, Teams, Telegram, Discord, Slack)
- **VPN/proxy environments** (Telegram media download behind proxy)

### Satisfaction Signals

- Users are providing detailed reproduction steps and logs, indicating investment in helping debug.
- Several users express preference for features (LaTeX support, YAML config, private network access) suggesting they want to deepen their use of OpenClaw.
- The QA harness effort ([#80171](https://github.com/openclaw/openclaw/issues/80171), 1👍) was launched by a maintainer/contributor focusing on runtime parity — a sign of proactive quality assurance.

## Backlog Watch

### Issues Needing Maintainer Attention

1. **[Feishu monitor memory leak](https://github.com/openclaw/openclaw/issues/48183)** — Open since March 16, 16 comments, zero maintainer response visible. Potential production impact for Feishu users.

2. **[Heartbeat timing regression](https://github.com/openclaw/openclaw/issues/47940)** — Open since March 16, 13 comments, no maintainer response. Users are reporting their agents effectively halving their responsiveness.

3. **[

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-05-11

## 1. Daily Cross-Project Overview

Today’s data shows OpenClaw as the most active project by a wide margin, with 500 issues and 500 PRs updated, two beta releases, and a heavy focus on QA infrastructure for the Codex runtime transition. Zeroclaw saw moderate activity (20 issues, 28 PRs) with the multi-agent runtime finally merging into its integration branch, alongside several high-severity provider bugs. NanoBot and PicoClaw each recorded fewer than 10 issue/PR updates, with no releases from NanoBot and only an automated nightly from PicoClaw. Across all projects, provider compatibility and state-management bugs remain recurring pain points.

## 2. Activity Comparison

| Project   | Issues Updated | PRs Updated | Release Status                    | Activity Note |
|-----------|----------------|-------------|-----------------------------------|---------------|
| OpenClaw  | 500            | 500         | Two beta releases (v2026.5.10-beta.1 & .2) | Extremely high update volume, heavy backlog (444 open issues, 451 open PRs). Focus on QA automaton for Codex runtime. |
| NanoBot   | 5 (3 open, 2 closed) | 6 (4 open, 2 merged/closed) | No new release | Low activity; two PRs merged (KV cache fix, NVIDIA NIM provider). One critical bug reported (context compression crash). |
| Zeroclaw  | 20 (16 open, 4 closed) | 28 (19 open, 9 merged/closed) | No new release | Moderate activity; multi-agent runtime merged into integration/v0.8.0. Several high-severity bugs remain open (S0 data loss, S1 message loss). |
| PicoClaw  | 4 (all open)    | 6 (all open) | Automated nightly build (v0.2.8-nightly) | Low activity; no PRs merged. Stale PID file crash and bash path bug unresolved. |

## 3. OpenClaw Compared With Peers

- **Activity Volume:** OpenClaw’s 500+ issue/PR updates dwarf the other projects combined (Zeroclaw: 48 total, NanoBot: 11, PicoClaw: 10). This reflects both a much larger contributor base and a significant backlog.
- **Technical Focus:** OpenClaw is investing heavily in QA automation (Telegram PR evidence capture, parity testing between Pi and Codex runtimes), while peers concentrate on core runtime features (Zeroclaw multi-agent, NanoBot plugin architecture). No other project has a dedicated QA harness effort of this scale.
- **Community Surface Area:** OpenClaw’s 444 open issues (vs. Zeroclaw’s ~16 open, NanoBot’s 3 open, PicoClaw’s 4 open) indicate a wider deployment and many more user-facing pain points. The community is actively reporting regressions with detailed logs (e.g., session memory OOM, silent agent failures).
- **Release Cadence:** OpenClaw pushed two betas today, whereas Zeroclaw and NanoBot had no releases, and PicoClaw only an automated nightly. This suggests OpenClaw is under pressure to ship fixes quickly but also introducing new infrastructure.

## 4. Shared Technical Focus Areas

| Focus Area | Projects Involved | Concrete Examples |
|------------|-------------------|-------------------|
| Provider Compatibility & Runtime Parity | OpenClaw, NanoBot, Zeroclaw, PicoClaw | OpenClaw: Codex vs Pi runtime parity RFC; NanoBot: NVIDIA NIM provider, Ollama tool calling broken; Zeroclaw: custom DashScope 405 error, Gemini CLI argument crash; PicoClaw: Codex OAuth empty responses, Ollama cloud credentials. |
| State/Memory Management | OpenClaw, NanoBot | OpenClaw: sessions.json unbounded growth (50-100 MB/min), Feishu memory leak; NanoBot: context compression crash halting gateway. |
| Multi-Agent & Sub-Agent Capabilities | OpenClaw, Zeroclaw | OpenClaw: subagent announce routing PR, subagent completion silently lost bug; Zeroclaw: multi-agent runtime merged (per-alias workspaces, SubAgent inheritance). |
| Configuration & Build Friction | Zeroclaw, PicoClaw | Zeroclaw: Matrix build failure, Windows profile loading failure; PicoClaw: stale PID file causing crash loop, bash relative path resolution bug on Ubuntu/Docker. |
| Chinese-Language Community Engagement | NanoBot, Zeroclaw | NanoBot issue #3724 in Chinese (gratitude plus feature request); Zeroclaw issue #6034 in Chinese (user message loss). |

No shared focus on voice transcription (only NanoBot), media generation (only Zeroclaw), or Telegram business mode (only PicoClaw) across projects today.

## 5. Differentiation Analysis

- **Scale & Community Maturity:** OpenClaw is by far the largest project with a broad user base spanning enterprise channels (Feishu, Teams, Discord, Slack) and a heavy regression burden. It acts as a core reference, absorbing the most feature requests and bug reports.
- **Runtime & Provider Strategy:** OpenClaw is actively moving from Pi to Codex as default runtime, whereas NanoBot and Zeroclaw support multiple providers (NVIDIA, Ollama, Gemini, custom endpoints) without indicating a single preferred runtime. PicoClaw has a Codex OAuth integration but still relies on OpenAI-oriented backends.
- **Multi-Agent Architecture:** Zeroclaw’s newly merged multi-agent runtime offers per-alias workspaces and shared resources, a distinct architectural approach. OpenClaw handles sub-agents via routing but does not yet ship a multi-agent isolation feature. NanoBot and PicoClaw lack explicit multi-agent capabilities.
- **Plugin & Tool Ecosystem:** NanoBot is introducing a self-describing plugin architecture (PR #3729) and self-correction hooks. OpenClaw has a Plugin SDK with host workflow seams (PR #80267). Zeroclaw and PicoClaw do not have visible plugin abstraction efforts.
- **Target User Base:** OpenClaw’s features (session memory growth, heartbeat timing, Discord tool leaks) suggest enterprise and automation users. NanoBot’s voice transcription and agent self-correction target interactive personal assistants. Zeroclaw’s router/provider compatibility fixes and multi-agent isolation appeal to custom deployment scenarios. PicoClaw’s Telegram business mode and nightly builds indicate rapid iteration for mobile/constrained environments.

## 6. Community Activity Notes

| Activity Tier | Projects | Basis for Tier |
|---------------|----------|----------------|
| High          | OpenClaw | 500+ issue/PR updates; two beta releases; 444 open issues; intense community discussion on regressions. |
| Moderate      | Zeroclaw | 28 PR updates, 20 issue updates, 9 merges; multi-agent runtime merging is a notable milestone. |
| Low           | NanoBot & PicoClaw | <10 issue or PR updates each; NanoBot had 2 merges, PicoClaw 0; no releases from NanoBot, only nightly from PicoClaw. |

Community responsiveness varies: OpenClaw maintainers engaged in multiple PRs today but left several high-profile issues (Feishu memory leak, heartbeat regression) without visible response for weeks. Zeroclaw maintainers merged major PRs today but also have silent bugs (S0 data loss). NanoBot maintainers merged two PRs but have not addressed the context compression crash. PicoClaw maintainers have not responded to the Ollama credentials request (open since March 31) or the PID crash issue.

## 7. Evidence-Backed Observations

1. **Provider compatibility is a cross-cutting pain point.** All four projects have open issues or PRs related to specific provider errors or integration gaps (OpenClaw’s Codex runtime parity, NanoBot’s Ollama tool calling and Groq transcription, Zeroclaw’s 405 errors and non-leading system messages, PicoClaw’s Codex OAuth empty responses). No project appears immune.

2. **Memory and state management regressions are destabilizing multiple projects.** OpenClaw’s `sessions.json` unbounded growth (50-100 MB/min) and Feishu memory leak, combined with NanoBot’s context compression crash, indicate that state management is a recurring weak point—likely exacerbated by increased feature complexity.

3. **Multi-agent and sub-agent capabilities are actively being built, but with different architectural choices.** OpenClaw routes sub-agent announcements per session (PR #80242); Zeroclaw merges a full multi-agent runtime with workspaces and permissions. Both projects treat agent orchestration as a core feature, while NanoBot and PicoClaw remain single-agent focused.

4. **QA infrastructure investment is concentrated in OpenClaw, but lacking elsewhere.** The OpenClaw team has dedicated a large portion of today’s activity to QA harness parity testing between Pi and Codex runtimes, plus Telegram PR evidence automation. No other project shows comparable effort; Zeroclaw’s 9 merges are mostly fixes and features without systematic testing layers.

5. **Chinese-language community contributions are visible in at least two projects.** NanoBot issue #3724 (Chinese) thanks the team and proposes dynamic agent cognition; Zeroclaw issue #6034 (Chinese) reports user message loss. This suggests a non-negligible user base in Mandarin-speaking regions, though maintainer responses in Chinese are not evident from today’s data.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-11

## Today's Activity Brief
In the last 24 hours, NanoBot saw 5 issues updated (3 open, 2 closed) and 6 pull requests updated (4 open, 2 merged/closed). No new releases were published. Notable activity includes a closed enhancement issue thanking the project (#3724), a merged PR fixing KV cache inefficiency by moving archived summaries into the system prompt (#3711), and a new PR introducing self-describing plugin architecture for tools (#3729). A context-compression bug causing a system crash was reported (#3726), and several open PRs continue to address transcription transparency and agent self-correction.

## Releases
None.

## Project Progress
Two pull requests were merged/closed today:

- **[#3711 – fix(agent): move archived summary into system prompt for KV cache stability](https://github.com/HKUDS/nanobot/pull/3711)** (merged) – Relocates conversation summaries from runtime context to system prompt, reducing KV cache waste and improving summary consistency across turns.
- **[#3707 – feat: add NVIDIA NIM provider support](https://github.com/HKUDS/nanobot/pull/3707)** (closed) – Adds support for the NVIDIA NIM inference API as a new provider.

Additionally, several open PRs represent active work (see other sections).

## Community Hot Topics
- **[#3724 – [CLOSED] [enhancement] 感谢nanobot作为我项目的基座](https://github.com/HKUDS/nanobot/issues/3724)** (4 comments) – A user expressed gratitude for using NanoBot as a base for their project [Taiji](https://github.com/wenge6090-cell/Taiji.git), and proposed making the agent’s system prompt, toolset, and knowledge base dynamically adaptable to avoid repetitive behavior ("复读机").
- **[#3637 – [OPEN] [bug, documentation] Transcription Provider Configuration Is Not Transparent Enough](https://github.com/HKUDS/nanobot/issues/3637)** (3 comments) – Users reported that Groq transcription endpoint setup is unclear, leading to invalid configurations. A PR (#3663) is open to address this.
- **[#3726 – [OPEN] [bug] 上下文压缩bug。导致系统无法运行。](https://github.com/HKUDS/nanobot/issues/3726)** (1 comment) – A critical bug where context compression causes the gateway to crash immediately on message processing. No fix PR yet.

## Bugs & Stability
**High severity**
- **#3726 – Context compression crash** – The `maybe_consolidate_by_tokens` logic fails with no safe boundary identified, halting the gateway. No fix PR yet. [Issue link](https://github.com/HKUDS/nanobot/issues/3726)

**Medium severity**
- **#2829 – Ollama tool calling broken** – Models like gemma4:e4b cannot use tools; the forwarding format appears incorrect. Unresolved since April 5. [Issue link](https://github.com/HKUDS/nanobot/issues/2829)
- **#3637 – Groq transcription endpoint not transparent** – Using chat-style `apiBase` leads to silent failures. Open PR #3663 attempts a fix. [Issue link](https://github.com/HKUDS/nanobot/issues/3637)

**Low severity (fixed)**
- **#3469 – deepseek-v4 reasoning_content error** – Closed after fix; occurred when multiple thinking rounds were required. [Issue link](https://github.com/HKUDS/nanobot/issues/3469)

## Feature Request Clusters
- **Dynamic agent cognition** – Issue #3724 proposes making system prompts, tool sets, and knowledge bases adaptive per task to avoid agent stagnation. No corresponding PR yet.
- **Plugin architecture for tools** – PR #3729 refactors hardcoded tool registration into a self-describing plugin pattern using `ToolLoader`. [PR link](https://github.com/HKUDS/nanobot/pull/3729)
- **Agent self-correction hooks** – PR #3728 adds `LoopDetectHook` and `ReflectRetryHook` to detect and recover from tool-call loops and blind retries. [PR link](https://github.com/HKUDS/nanobot/pull/3728)
- **Local voice transcription** – PR #3723 adds support for `faster-whisper` for offline transcription, eliminating API key dependency. [PR link](https://github.com/HKUDS/nanobot/pull/3723)

## User Feedback Summary
- **Gratitude and feature vision** – A user (Issue #3724) thanked the team and shared their project built on NanoBot, but identified static cognition as a limitation causing repetitive outputs. This reflects a desire for more adaptive agent behavior.
- **Configuration friction** – Multiple users reported difficulty configuring transcription providers (#3637) and Ollama tool usage (#2829). A contributor noted that the Groq endpoint handling was “not transparent enough”.
- **Stability concerns** – The context compression bug (#3726) causes a hard crash, indicating a regression in memory management.
- **Positive reception** – The user in #3724 explicitly thanked the community, implying general satisfaction with NanoBot as a foundation despite the specific limitations.

## Backlog Watch
- **#2829 – Ollama tool calling broken** (created 2026-04-05, last updated 2026-05-10) – Important functional bug affecting Ollama users. No maintainer response or fix PR identified. [Issue link](https://github.com/HKUDS/nanobot/issues/2829)
- **#3637 – Transcription configuration transparency** (created 2026-05-06) – Open PR #3663 exists but is not yet merged; maintainer attention needed to either merge or suggest improvements. [Issue link](https://github.com/HKUDS/nanobot/issues/3637) [PR link](https://github.com/HKUDS/nanobot/pull/3663)
- **#3726 – Context compression crash** (created 2026-05-10) – High severity, no fix yet. Requires immediate maintainer triage. [Issue link](https://github.com/HKUDS/nanobot/issues/3726)

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest — 2026-05-11

## Today's Activity Brief

In the last 24 hours, the project saw moderate activity with 20 issues updated (16 open, 4 closed) and 28 pull requests updated (19 open, 9 merged/closed). Four PRs were closed/merged, including the long‑awaited multi‑agent runtime landing on `integration/v0.8.0` and a breaking‑change config schema PR for the same branch. Several high‑severity bugs remain open, notably a data‑loss issue in a custom provider integration and a workflow‑blocking problem with non‑leading system messages. No new releases were cut.

## Releases

None (no new versions tagged in the reporting period).

## Project Progress

Four pull requests were closed/merged today (all closed on 2026-05-10, shown in today’s update window):

- **#6534** [fix(sop): call reload() after SopEngine construction at both call sites](https://github.com/zeroclaw-labs/zeroclaw/pull/6534) – Resolved a critical bug where SOPs were never loaded because `reload()` was not called after engine construction.
- **#6533** [fix(config): respect ZEROCLAW_CONFIG_DIR in path field defaults](https://github.com/zeroclaw-labs/zeroclaw/pull/6533) – Seven path‑field defaults now honour `ZEROCLAW_CONFIG_DIR` before falling back to `~/.zeroclaw`, fixing multi‑profile deployments.
- **#6545** [feat(runtime): multi-agent runtime](https://github.com/zeroclaw-labs/zeroclaw/pull/6545) – Landed on `integration/v0.8.0`; provides per‑alias workspaces, permissions, shared resources, and SubAgent inheritance.
- **#6523** [feat(config)!: V0.8.0 schema-mirror env-var grammar (breaking change)](https://github.com/zeroclaw-labs/zeroclaw/pull/6523) – Also targeting `integration/v0.8.0`; rewrites the operator‑facing environment‑variable contract to mirror the V3 schema.

## Community Hot Topics

Issues with the most discussion (by comment count) this period:

- **#6530** (4 comments) – [Bug: Build failure with matrix‑sdk v0.16.0: recursion limit overflow when building with channel‑matrix feature](https://github.com/zeroclaw-labs/zeroclaw/issues/6530) – A compile‑time crash affecting users who enable Matrix support. Status: accepted, priority p3.
- **#6207** (4 comments, closed) – [Bug: Web dashboard / WebSocket gateway path bypasses ApprovalManager](https://github.com/zeroclaw-labs/zeroclaw/issues/6207) – A high‑severity workflow blocker that has now been closed, indicating a fix was deployed.
- **#6034** (3 comments) – [Bug: 单轮对话以及多轮对话会出现丢失 user message 的现象](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) – Chinese‑language report of user messages being lost in single‑ and multi‑turn conversations, caused by a non‑retryable 400 error. Status: accepted, priority p1.

These issues highlight ongoing pain points in provider compatibility (Matrix build, custom API 400 errors) and gateway security (approval bypass – now fixed).

## Bugs & Stability

New or updated bug reports, ranked by severity:

| Severity | Issue | Summary | Fix PR exists? |
|----------|-------|---------|----------------|
| **S0** – data loss / security risk | [#6558](https://github.com/zeroclaw-labs/zeroclaw/issues/6558) | Custom provider at `https://coding.dashscope.aliyuncs.com/v1` returns 405 Method Not Allowed – all provider attempts fail. | No |
| **S1** – workflow blocked | [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) | User messages lost in conversations (custom API 400 error). | No |
| **S1** – workflow blocked | [#6551](https://github.com/zeroclaw-labs/zeroclaw/issues/6551) | Non‑leading system messages can be sent to OpenAI‑compatible providers, causing rejections. | Yes: [#6552](https://github.com/zeroclaw-labs/zeroclaw/pull/6552) (open) |
| **S2** – degraded | [#6520](https://github.com/zeroclaw-labs/zeroclaw/issues/6520) | Gemini CLI provider crashes due to outdated `--print` vs `--prompt` argument syntax. | No |
| **S2** – degraded | [#6419](https://github.com/zeroclaw-labs/zeroclaw/issues/6419) | `WorkspaceManager` fails to load profiles at runtime startup on Windows. | No |
| **S2** – degraded | [#6556](https://github.com/zeroclaw-labs/zeroclaw/issues/6556) | Discord channel media pipeline broken: inbound images never reach agent, outbound markers leak. | No |
| **S2** – degraded | [#6530](https://github.com/zeroclaw-labs/zeroclaw/issues/6530) | Build failure with Matrix channel feature enabled (recursion limit). | No |
| **S3** – minor | [#6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548) | Runtime command replies bypass Fluent localization (hard‑coded English). | Yes: [#6550](https://github.com/zeroclaw-labs/zeroclaw/pull/6550) (open) |

The most critical open bug (#6558, S0) involves a 405 response from a custom provider endpoint, which has not yet attracted a fix PR. The S1 bug #6551 is being addressed by PR #6552 (still open), and the S3 localization issue has a corresponding fix PR (#6550).

## Feature Request Clusters

- **Multi‑agent runtime & isolation** – Issue [#6272](https://github.com/zeroclaw-labs/zeroclaw/issues/6272) (per‑alias workspaces, permissions, shared resources) was addressed by PR #6545 which has now been merged into `integration/v0.8.0`. A companion schema proposal [#6271](https://github.com/zeroclaw-labs/zeroclaw/issues/6271) (V3 SwarmConfig) also remains open.
- **Media generation** – Two new features surfaced: [#6563](https://github.com/zeroclaw-labs/zeroclaw/issues/6563) proposes Comfy Cloud as a shared media provider (image generation + future video), and PR [#6555](https://github.com/zeroclaw-labs/zeroclaw/pull/6555) adds RunPod ComfyUI as an alternative image generation backend (needs author action).
- **Privacy‑focused search** – [#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) requests SearXNG support and improved Web Search robustness (CAPTCHA detection for DuckDuckGo). Still awaiting maintainer review.
- **Provider & model improvements** – [#6557](https://github.com/zeroclaw-labs/zeroclaw/issues/6557) asks for reconciling runtime model switching with the newer provider structure before v0.8.0. PR [#6549](https://github.com/zeroclaw-labs/zeroclaw/pull/6549) adds vision input support to the Claude‑Code provider.
- **ACP session restore** – [#6543](https://github.com/zeroclaw-labs/zeroclaw/issues/6543) requests implementing ACP v1 `session/load` for restoring previous sessions.

## User Feedback Summary

Real pain points expressed in recent issues:

- **Provider compatibility failures** – Users report crashes with the Gemini CLI provider (#6520), 405 errors with a custom DashScope provider (#6558), and lost messages with a custom API endpoint (#6034). Multiple reports indicate that strict OpenAI‑compatible endpoints reject non‑leading system messages (#6551).
- **Build and configuration hurdles** – Matrix channel support fails to compile (#6530), and on Windows the `WorkspaceManager` does not load profiles at startup (#6419). The Homebrew merge failure (#6547) indicates packaging friction.
- **Channel/media issues** – Discord users cannot send or receive images (#6556), and inbound image markers are not normalized for all auxiliary LLM calls (PR #6114 attempts to fix this).
- **Localization gaps** – Even with a `zh-CN` locale, several runtime command replies remain in English (#6548).
- **Desire for multi‑agent isolation** – Issue #6272 requests per‑alias workspaces and identity files, reflecting a need for better multi‑tenant or multi‑profile management.

## Backlog Watch

Issues or PRs that have been open for an extended period or lack maintainer response:

- **#5316** ([SearXNG search support](https://github.com/zeroclaw-labs/zeroclaw/issues/5316)) – Opened 2026-04-05, labelled `needs-maintainer-review`, only 2 comments. No maintainer engagement despite being open for over a month.
- **#6074** ([audit: track 153 commits lost in bulk revert](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)) – Opened 2026-04-24, labelled `status:in-progress` but no visible activity beyond the initial audit request.
- **#6034** ([User message loss](https://github.com/zeroclaw-labs/zeroclaw/issues/6034)) – Opened 2026-04-23, priority p1, accepted, but no corresponding fix PR yet.
- PRs with `needs-author-action`: [#6183](https://github.com/zeroclaw-labs/zeroclaw/pull/6183), [#6133](https://github.com/zeroclaw-labs/zeroclaw/pull/6133), [#6117](https://github.com/zeroclaw-labs/zeroclaw/pull/6117), [#6555](https://github.com/zeroclaw-labs/zeroclaw/pull/6555) – All require author updates to move forward.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-11

## Today’s Activity Brief
Over the past 24 hours, PicoClaw saw 4 open issues and 6 open pull requests updated, with no closures or merges. A new nightly release `v0.2.8-nightly.20260511.6e6293e5` was published as an automated, potentially unstable build. The most discussed topic remains a feature request for Ollama cloud credential support (11 comments), while a high-priority bug regarding stale PID files causing crash loops has a fix still pending. Two PRs addressing a reported bash path resolution bug have been opened but not yet merged.

## Releases
- **Nightly Build (`v0.2.8-nightly.20260511.6e6293e5`)**
  Automated nightly build from the `main` branch. Marked as unstable. No breaking changes or migration notes provided beyond the general warning.
  [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

## Project Progress
No pull requests were merged or closed today. All six PRs in the dataset remain open:
- **Fix for relative path bug** – #2826 (updated today) and #2750 both address the same issue (#2749).
- **Fix for Codex streaming & Telegram duplicate retries** – #2462 (stale, last updated May 10).
- **Session API: per-message timestamps** – #2788 (feature, open).
- **Telegram business mode** – #2845 (feature, opened May 10).
- **Media store alignment after gateway reload** – #2783 (fix, updated May 10).

No merged work was recorded for this digest period.

## Community Hot Topics
- **#2225 – [Feature] Ollama cloud credentials**
  Most active issue (11 comments). User @Suisei110 requests credential configuration support for Ollama Cloud. No recent maintainer response.
  [Link](https://github.com/sipeed/picoclaw/issues/2225)

- **#2674 – Codex OAuth: empty assistant response**
  Three comments and three 👍 reactions. Describes empty responses when streaming from the ChatGPT backend via Codex OAuth.
  [Link](https://github.com/sipeed/picoclaw/issues/2674)

- **#2720 – Singleton PID check doesn’t verify process identity**
  High-priority bug with two comments. The gateway crashes when a PID file points to an unrelated process.
  [Link](https://github.com/sipeed/picoclaw/issues/2720)

## Bugs & Stability
| Issue | Severity | Summary | Fix PR? |
|-------|----------|---------|---------|
| #2720 | **High** | Stale PID file causes gateway crash loop; singleton check does not verify process identity. Environment: picoclaw gateway. | No dedicated fix PR yet; remains open. |
| #2674 | Medium | Codex OAuth streaming returns empty assistant responses when using `response.output_item.done` events. | PR #2462 (stale, open) attempts to address but not confirmed. |
| #2749 | Medium | Bash exec tool treats relative paths as absolute due to path scanning regex, breaking workspace restrictions on Ubuntu/Docker. | Two fix PRs open: #2826 and #2750. |

No crashes or regressions were newly reported today beyond those listed.

## Feature Request Clusters
- **Ollama Cloud Credentials** (#2225) – User needs authentication options for Ollama Cloud. No related PR yet.
- **Telegram Business Mode** (PR #2845) – Adds a new channel setting `business_mode` to handle Telegram Business updates.
- **Per-Message Timestamps** (PR #2788) – Enhances the Session API to return individual `created_at` for messages instead of a single session-level timestamp.

These requests come from distinct domains (provider, channel, API) and do not form a cluster.

## User Feedback Summary
- **Positive use case**: A user (#2462) successfully ran PicoClaw on Android 7 (Termux) with Telegram and OpenAI OAuth for two days before encountering a streaming issue, indicating real-world deployment in constrained environments.
- **Pain points**:
  - Lack of Ollama Cloud credential support (feature gap).
  - Empty responses from Codex OAuth provider (reliability).
  - Bash tool incorrectly resolving relative paths, breaking commands on Ubuntu and Docker (usability).
  - Gateway crash due to stale PID file (stability).
- **Satisfaction**: Limited visible positive feedback; most interactions are bug reports or feature requests.

## Backlog Watch
Items requiring maintainer attention due to age or lack of response:
- **#2225** (Ollama credentials) – Created March 31, last updated May 10, 11 comments. No maintainer reply.
- **#2462** (Codex fix/Telegram retries) – Created April 9, last updated May 10. PR has not been reviewed or merged.
- **#2720** (Singleton PID) – Created April 30, high priority, only 2 comments. No fix PR in sight.
- **#2749** (Bash relative path) – Created May 2, has two fix PRs but none merged yet.

These issues may indicate areas where maintainer bandwidth is limited or decisions are pending.

</details>