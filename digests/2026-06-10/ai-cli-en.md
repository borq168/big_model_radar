# AI CLI Tools Community Digest 2026-06-10

> Generated: 2026-06-10 02:36 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Tool Comparison Report — 2026-06-10

## 1. Daily Cross-Tool Overview

Today saw high activity across all major AI CLI tools, with Claude Code shipping its v2.1.170 release featuring the new Claude Fable 5 Mythos-class model, while Qwen Code pushed two preview releases of v0.18.0 focused on output formatting fixes. OpenCode and Gemini CLI each processed 50+ issues/PRs updated, with persistent themes around session integrity, model behavior inconsistencies, and platform-specific TUI bugs recurring across tools. Kimi Code had the lightest day with only two updated issues and one PR, reflecting a quieter development cadence. Several tools shipped critical stability patches for session corruption, MCP connection handling, and crash-on-resize bugs.

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Releases Today | Key Release |
|---|---|---|---|---|
| **Claude Code** | 50 | 9 (open) | 1 | v2.1.170 (Claude Fable 5) |
| **OpenAI Codex** | 50 | 50 | 1 + 3 alphas | v0.139.0 |
| **Gemini CLI** | 50 | 37 | 4 | v0.46.0 (PTY resize fix) |
| **GitHub Copilot CLI** | 30 | 1 | 1 | v1.0.61 |
| **Kimi Code CLI** | 2 | 1 | 0 | — |
| **Qwen Code** | 28 | 50 | 2 | v0.18.0-preview.0/1 |
| **OpenCode** | 50 | 50 | 0 | — |

*Note: "Issues updated" includes both new issues and comments on existing ones. PR counts for OpenCode and Codex include all updated PRs in 24h; Claude Code and Copilot CLI report only currently open PRs.*

## 3. Shared Feature Directions

Several requirements appeared across multiple tool communities today:

**Linux Desktop Builds** — Claude Code (#65697, 406 👍) and OpenCode (#2242, sandboxing request) both see strong community demand for dedicated desktop experiences on Linux. Claude Code's issue explicitly requests .deb/.rpm builds; OpenCode users want filesystem sandboxing that would benefit from desktop integration.

**Remote Session Control & Resumption** — Claude Code (#29006) requests remote session inspection from the Desktop app. GitHub Copilot CLI (#3729) asks for session sharing across machines. Qwen Code (#4773) is actively building ACP WebSocket transport. All three communities want session portability beyond local CLI.

**MCP Integration Reliability** — GitHub Copilot CLI (#3701, #3436) reports runaway MCP server spawning and incorrect registry URLs. Qwen Code (#4615) proposes project-scoped `.mcp.json` with approval semantics. Claude Code (#66359) reports prompt injection via plugin installation. All point to growing pains in the MCP/plugin ecosystem.

**Subagent Autonomy & Cost Control** — Claude Code (#66762) reports UltraCode agent fleets silently draining usage windows. Gemini CLI (#21968, #22093) reports sub-agents ignoring custom skills and settings. Qwen Code (#4876) reports sub-agents returning incorrect image analysis. Multiple tools are struggling with subagent behavior predictability.

**Model Selection & Availability Gaps** — Claude Code (#66757) requests non-Opus model support. GitHub Copilot CLI (#1703) reports org-enabled models missing from CLI but present in VS Code. Qwen Code (#4904) reports new models unavailable after update. Users consistently find model lists inconsistent between CLI and other interfaces.

## 4. Differentiation Analysis

**Claude Code** is positioning around model capability (Fable 5 launch) and plugin marketplace expansion, but today's data shows significant friction: severe session integrity bugs (transcripts rewritten to stubs, permanent session death), plugin security concerns, and cost management gaps. The model hallucination reports (#66273, #66771) are uniquely specific to Claude's behavior.

**OpenAI Codex** is focused on MCP lifecycle maturity (fallible startup, lock removal, goal analytics) and realtime handoff improvements. The most distinct pain point is chat history disappearance — 10+ open issues with ~150 cumulative comments — a UX regression that disproportionately affects long-term project workflows. Token efficiency regression (#19585, #27242) is unique to Codex's Pro plan economics.

**Gemini CLI** is investing in stability backports (PTY resize crashes, session metadata re-seeding) and tool output standardization. The community's dominant complaint pattern is agent autonomy ("does what it wants") — sub-agents ignoring settings, thinking stalls, false success reports. Auto Memory system improvements and AST-aware tooling are differentiating R&D directions.

**GitHub Copilot CLI** shows model parity gaps as its most distinctive community concern — enterprise users see smaller model lists than in VS Code. Encoding-related corruption bugs (non-UTF-8, double-encode CJK) are unique to Copilot CLI and growing rapidly (3 issues in 24h). Plugin hook reliability is a specialized pain point for this tool's extensibility model.

**Qwen Code** is the most active on daemon-mode and ACP protocol development (WebSocket transport, session reaper, REST parity, Agent Team mode). Dual-output/FIFO blocking bugs are unique to Qwen's headless automation use case. The model switching confusion (runtime prefixes leaking into settings) is a Qwen-specific provider management issue.

**Kimi Code CLI** is too quiet today to differentiate meaningfully — the two open bugs (infinite file-reading loop, edit tool failures) are tool reliability issues common across all platforms.

**OpenCode** is differentiated by its custom provider support (or lack thereof) — multiple bugs block self-hosted/third-party OpenAI-compatible providers. The memory megathread (#20695, 91 comments) is the most active debugging effort across any tool today. OpenCode also has the most distinct sub-projects in PRs (iFlow provider, ACP client integration, screen clipboard passthrough).

## 5. Community Activity Notes

**Highest raw engagement:** OpenCode (50 issues, 50 PRs), OpenAI Codex (50 issues, 50 PRs), and Gemini CLI (50 issues, 37 PRs) are all at peak activity today. Claude Code's 50 issue updates reflect a burst of fresh bugs from the v2.1.170 release.

**Fastest maintainer response:** Claude Code shows active triage with 9 open PRs filed today, including auto-generated fixes (REAPR tool) for Fable 5 safety classifier issues. Qwen Code has 50 PRs updated and clear directional investment in ACP protocol features. Gemini CLI shipped 4 releases today, indicating a responsive patch pipeline for Vertex AI model mapping.

**Highest community demand signal:** Claude Code's Linux Desktop issue (#65697) at 406 👍 in under a week is the strongest single demand signal across any tool. GitHub Copilot CLI's model parity issue (#1703) at 54 👍 and OpenCode's memory megathread (#20695) at 64 👍 also show concentrated community investment.

**Most neglected:** Kimi Code CLI had no maintainer responses on either updated issue. GitHub Copilot CLI's model parity issue (#1703) has seen no maintainer resolution. OpenAI Codex's token efficiency regression (#19585) similarly lacks maintainer response despite 29 comments and 26 👍.

**Release cadence:** Qwen Code (2 preview releases), Gemini CLI (4 releases including previews and patches), and OpenAI Codex (1 release + 3 alphas) are shipping most actively today. OpenCode shipped no releases.

## 6. Evidence-Backed Observations

**1. Windows desktop and TUI gaps persist as the most widespread cross-tool pain point.** Claude Code (Windows relaunch lock #42776, 86 comments), OpenAI Codex (Windows sandbox regressions #24391, 44 comments), and GitHub Copilot CLI (Windows install issues #3662, Ctrl+Zoom breakage #3735) all have active Windows-specific bugs. Linux TUI clipboard copying is broken in Claude Code (#62699), GitHub Copilot CLI (#2082), and OpenCode (#13984). No tool has a seamless cross-platform terminal experience.

**2. Model rollouts are causing immediate operational regressions.** Claude Code's Fable 5 launch triggered safety classifier fallback bugs (#66607, #66641), false safety blocks on benign physics questions (#66608), and hallucination evidence (#66273, #66771). OpenAI Codex's 5.5 model introduced token efficiency regression (#19585, #27242). Qwen Code's new model availability bug (#4904) followed a preview release. The pattern suggests insufficient pre-release integration testing.

**3. Session integrity is a recurring failure mode across multiple tools.** Claude Code reports transcripts rewritten to stubs (#66734), permanently unrecoverable sessions from invalid content blocks (#66760), and broken `/history` recovery (#66754). OpenAI Codex has 10+ issues for chat history disappearing from UI while data remains on disk. Gemini CLI fixed session metadata corruption during recreation (#27453). Qwen Code fixed runtime snapshot prefix leakage into settings (#4729). Session state management is an unresolved cross-cutting engineering challenge.

**4. Plugin/MCP ecosystems are experiencing growing pains in authentication, reliability, and security.** Claude Code reports prompt injection from plugin installation (#66359), marketplace metadata sync failures (#66577), and broken plugin registration for new users (#66750). GitHub Copilot CLI reports MCP URL construction errors (#3436), runaway server spawning (#3701), and plugin hooks not firing (#2540). Qwen Code proposes approval semantics for project-scoped MCP configs (#4615). No tool has clear security or reliability standards for third-party integration.

**5. Agent cost management and usage visibility is an emerging concern.** Claude Code (#66762) reports UltraCode agent fleets silently consuming entire usage windows with no abort mechanism. OpenAI Codex (#19585, #27242) reports Pro weekly limits feeling insufficient due to token efficiency regression. Both communities lack transparency into how agent behavior maps to cost consumption. No tool currently offers per-task cost estimation or proactive usage alerts.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

**Claude Code Community Digest — 2026-06-10**

Generated from `github.com/anthropics/claude-code` activity over the past 24 hours.

---

### Today's Update Brief

Anthropic shipped **v2.1.170** featuring the newly announced **Claude Fable 5** model, a Mythos-class model positioned as their most capable general release to date. Issue activity remains high (50 updated items), with 9 open pull requests and a rash of fresh bugs reported today — many targeting session integrity, plugin marketplace registration, and model hallucination patterns in the latest builds.

---

### Releases

**v2.1.170** — [Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.170)

- **Introduces Claude Fable 5** — Mythos-class model now generally available; requires update to this version for access.
- Fixed session behavior.

---

### Hot Issues

10 of the most noteworthy issues sorted by community engagement and severity:

**1. [#42776 – Claude Code Desktop fails to Relaunch on Windows due to orphaned process file lock](https://github.com/anthropics/claude-code/issues/42776)**
*Workflow:* Windows desktop users restarting the app.
*Impact:* Persistent relaunch failure; process lock survives app exit.
*Community:* **86 comments**, 31 👍. Open since April; still active.

**2. [#65697 – Official Claude Desktop build for Linux (Ubuntu LTS / Debian)](https://github.com/anthropics/claude-code/issues/65697)**
*Workflow:* Linux developers wanting a native desktop experience.
*Impact:* No Linux desktop build exists; CLI-only on the platform.
*Community:* **406 👍** (highest-voted open issue), 31 comments. Opened 5 days ago.

**3. [#61889 – CVP approved user being blocked on benign queries in fresh sessions on claude.ai](https://github.com/anthropics/claude-code/issues/61889)**
*Workflow:* CVP (trusted) users hitting safety blocks on harmless prompts.
*Impact:* Loss of trust; blocks occur without clear cause.
*Community:* 29 comments, 3 👍.

**4. [#29006 – Enable Remote Control for Claude Code sessions in Claude Desktop App](https://github.com/anthropics/claude-code/issues/29006)**
*Workflow:* Managing headless/long-running sessions from desktop UI.
*Impact:* No remote session inspection or control today.
*Community:* 28 comments, 94 👍. Open since February.

**5. [#62699 – Text cannot be copied from Claude Code's output using `Ctrl+Shift+C` or right-click on Linux](https://github.com/anthropics/claude-code/issues/62699)**
*Workflow:* Linux TUI — selecting output text.
*Impact:* Productivity break — no way to copy model output on Linux.
*Community:* 10 comments, 7 👍.

**6. [#37581 – Cowork VM disk full on session start — ENOSPC blocks all Bash commands](https://github.com/anthropics/claude-code/issues/37581)**
*Workflow:* macOS Cowork sessions.
*Impact:* Session immediately broken; every Bash invocation fails.
*Community:* 6 comments, 5 👍. Has repro.

**7. [#66273 – Claude Code (Opus): self-favoring asymmetric skepticism, unstable calibration, and false-completion claim](https://github.com/anthropics/claude-code/issues/66273)**
*Workflow:* Extended model interaction in Opus.
*Impact:* Model exhibits contradictory self-evaluation; claims false task completion.
*Community:* 5 comments. Includes session transcript evidence.

**8. [#59634 – Rate-limit-aware deferred prompt scheduling for Claude Code](https://github.com/anthropics/claude-code/issues/59634)**
*Workflow:* Heavy CLI users hitting usage limits mid-task.
*Impact:* Tasks abandoned when rate limits hit; no queueing mechanism.
*Community:* 4 comments.

**9. [#66359 – Unattributable prompt injection instruction detected in Claude Code session after plugin installation](https://github.com/anthropics/claude-code/issues/66359)**
*Workflow:* Plugin users on macOS.
*Impact:* Potential prompt-injection / env-var exfiltration with unknown source.
*Community:* 4 comments. Security-sensitive.

**10. [#66760 – API 400: harness emits content block with type "fallback" — session becomes permanently unrecoverable](https://github.com/anthropics/claude-code/issues/66760)**
*Workflow:* Any API call.
*Impact:* Permanent session death; retries replay invalid payload.
*Community:* 3 comments. Filed today.

---

### Key PR Progress

9 open pull requests; all filed within the last 24 hours.

**1. [#66650 – fix(pr-review-toolkit): use full author name in plugin manifest](https://github.com/anthropics/claude-code/pull/66650)**
*Fix:* Corrects author name from "Daisy" to "Daisy Hollman" for consistency across bundled plugins. By @sanidhyasin.

**2. [#66608 – fix(#66592): False positive Usage Policy block on lattice gauge theory question (Fable 5)](https://github.com/anthropics/claude-code/pull/66608)**
*Fix:* Auto-generated fix via REAPR tool addressing false-positive safety blocks on physics questions. By @exodusubuntu-tech.

**3. [#66607 – fix(#66595): Fable 5 safety classifier auto-switches to Opus mid-session](https://github.com/anthropics/claude-code/pull/66607)**
*Fix:* Addresses the classifier downgrade from Fable 5 to Opus during authorized security testing. By @exodusubuntu-tech.

**4. [#66577 – fix(marketplace): sync security-guidance version and description with plugin.json](https://github.com/anthropics/claude-code/pull/66577)**
*Fix:* Marketplace metadata was out of sync (version 1.0.0 vs 2.0.0, stale description). By @sridhar-3009.

**5. [#66575 – fix(pr-review-toolkit): use full author name in plugin.json](https://github.com/anthropics/claude-code/pull/66575)**
*Fix:* Same author consistency fix as #66650, targeting the plugin.json file directly. By @sridhar-3009.

**6. [#66573 – fix(ralph-wiggum): restore dead error handlers broken by `set -euo pipefail`](https://github.com/anthropics/claude-code/pull/66573)**
*Fix:* Two execution paths in `stop-hook.sh` exit before reaching error-handling code due to `set -e` behavior. By @sridhar-3009.

**7. [#66572 – [WIP] Repeated "Image couldn't be processed" API errors consuming usage limit](https://github.com/anthropics/claude-code/pull/66572)**
*Fix:* Work-in-progress fix for image processing errors that burn API credits. By @Codewithpabitra.

**8. [#65723 – Claude/subscription debate chat rx ewi](https://github.com/anthropics/claude-code/pull/65723)**
*Unknown:* PR description empty; no summary provided. By @nowordsformylove.

**9. [#66416 – fix(plugin-dev): validator scripts abort on first finding due to `set -e`](https://github.com/anthropics/claude-code/pull/66416)**
*Fix:* Three validator scripts (`validate-agent.sh`, `hook-linter.sh`, `validate-hook-schema.sh`) stop at first error instead of reporting all findings. By @wellkilo.

---

### Feature Request Clusters

Recurring feature requests visible in today's data, grouped by theme:

**Linux Desktop Build**
Issue [#65697](https://github.com/anthropics/claude-code/issues/65697) receives over 400 upvotes in under a week, reflecting a large underserved user base. No official .deb/.rpm desktop build exists; users currently rely on CLI-only access.

**Remote Session Control**
Issue [#29006](https://github.com/anthropics/claude-code/issues/29006) requests the ability to inspect, resume, or control Claude Code sessions from the Desktop app remotely. 94 👍 suggest strong demand for headless/delegated workflow management.

**Rate-Limit-Aware Scheduling**
Issue [#59634](https://github.com/anthropics/claude-code/issues/59634) asks for deferred prompt queueing when API rate limits or usage cap is reached mid-task, avoiding task abandonment.

**Model Selection Beyond Opus**
Issue [#66757](https://github.com/anthropics/claude-code/issues/66757) requests support for models other than Opus (specifically Mythos-class models) within Claude Code, noting that tests are being pushed back to Opus.

**Workflow Trigger Improvements**
Issue [#66773](https://github.com/anthropics/claude-code/issues/66773) identifies that `@claude` triggers fire on substring matches (e.g., `@claudette`) in comments, requesting exact-match or configurable triggers.

**Cost Control for UltraCode / Agent Fleets**
Issue [#66762](https://github.com/anthropics/claude-code/issues/66762) reports that ultracode mode can silently consume an entire 5-hour usage window via subagent swarms with no visibility or abort mechanism.

---

### Developer Pain Points

Recurring frustrations from today's issue data:

**Platform-specific TUI and Desktop Bugs**
- Windows relaunch still broken after two months ([#42776](https://github.com/anthropics/claude-code/issues/42776)).
- Linux TUI cannot copy text output ([#62699](https://github.com/anthropics/claude-code/issues/62699)).
- iOS SSH terminal shows cursor desync and frame corruption on v2.1.163+ ([#65989](https://github.com/anthropics/claude-code/issues/65989)).
- Windows Terminal cursor invisible in agent typing window ([#66398](https://github.com/anthropics/claude-code/issues/66398)).

**Session Integrity and Data Loss**
- Session transcripts being rewritten to metadata-only stubs, losing all user/assistant messages ([#66734](https://github.com/anthropics/claude-code/issues/66734)).
- Permanently unrecoverable sessions caused by invalid `"fallback"` content block type ([#66760](https://github.com/anthropics/claude-code/issues/66760)).
- `/history` command removal breaks session recovery on interruption ([#66754](https://github.com/anthropics/claude-code/issues/66754)).

**Plugin and Integration Reliability**
- Official plugin marketplace not seeded for never-launched users, breaking install/update ([#66750](https://github.com/anthropics/claude-code/issues/66750)).
- Validator scripts abort on first finding due to `set -e` ([#66416](https://github.com/anthropics/claude-code/issues/66416)).
- PR monitor chips never retire — survive merge, archive, and restart ([#66763](https://github.com/anthropics/claude-code/issues/66763)).
- `claude.yml` workflow triggers on substring match, causing false fires ([#66773](https://github.com/anthropics/claude-code/issues/66773)).

**Model Behavior Inconsistencies**
- Hallucinating non-existent user messages and refusing to retract ([#66771](https://github.com/anthropics/claude-code/issues/66771), [#66273](https://github.com/anthropics/claude-code/issues/66273)).
- Fable 5 safety classifier silently falls back to Opus mid-session during authorized security testing ([#66641](https://github.com/anthropics/claude-code/issues/66641)).
- Cowork write agents generating status reports instead of file content ([#66745](https://github.com/anthropics/claude-code/issues/66745)).

**Cost and Usage Management**
- No rate-limit queueing or deferred scheduling ([#59634](https://github.com/anthropics/claude-code/issues/59634)).
- UltraCode agent fleets can silently drain an entire 5-hour usage window ([#66762](https://github.com/anthropics/claude-code/issues/66762)).
- Repeated API errors ("Image couldn't be processed") continue consuming paid usage credits ([#66572](https://github.com/anthropics/claude-code/pull/66572)).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-10

## Today’s Update Brief
A steady release day with one minor feature release (v0.139.0) and three alpha tags. Community activity remains high: **50 issues and 50 PRs updated in the last 24 hours**, with persistent reports of chat history disappearing from the Desktop app and Windows sandbox regressions. OpenAI merged several internal fixes for MCP lifecycle, realtime handoff, and performance tracing.

---

## Releases
- **rust-v0.139.0** (#26719): Code mode can now call standalone web search directly, including from nested JavaScript tool calls, and receive plaintext results. Tool and connector input schemas now preserve `oneOf`/`allOf`; large schemas keep more shallow structure when compacted.
- **rust-v0.140.0-alpha.2**, **rust-v0.139.0-alpha.3**, **rust-v0.139.0-alpha.2**: Alpha tags with no visible changelog (likely internal pre-releases).

---

## Hot Issues (10 selected)

1. [#24391 – Windows sandbox: spawn setup refresh fails on CLI 0.133.0](https://github.com/openai/codex/issues/24391)
   **44 comments, 25 👍**
   Shell commands fail after npm global install on Windows. A recurring problem with Windows sandbox readiness.

2. [#20741 – Desktop project chat histories disappeared after update](https://github.com/openai/codex/issues/20741)
   **33 comments, 14 👍**
   After a macOS update, all local project conversations vanished from the UI. SQLite data remains, but app no longer surfaces them.

3. [#19585 – Pro weekly usage limit depletes unusually fast on 5.5](https://github.com/openai/codex/issues/19585)
   **29 comments, 26 👍**
   Pro users report token efficiency regression; the same workload burns limits faster, making the 20x allowance feel insufficient.

4. [#21128 – Desktop silently hides conversations outside global recent-50 window](https://github.com/openai/codex/issues/21128)
   **23 comments, 16 👍**
   Older project conversations become invisible once they fall outside the 50-conversation window. Workflow broken for long-term projects.

5. [#23979 – Local project conversation history missing after update, threads still in SQLite](https://github.com/openai/codex/issues/23979)
   **20 comments, 4 👍**
   Threads disappear from UI but remain in `state_5.sqlite`. Multiple users report the same pattern on different platforms.

6. [#17540 – Windows: older local threads disappear from sidebar after restart](https://github.com/openai/codex/issues/17540)
   **19 comments, 6 👍**
   Persistent issue on Windows: threads exist on disk but are not loaded after app restart.

7. [#25500 – Desktop Projects sidebar shows "No chats" for projects with older threads](https://github.com/openai/codex/issues/25500)
   **17 comments, 2 👍**
   Even non-archived, non-pinned threads disappear from the project view.

8. [#26493 – Context compaction fails with `invalid_enum_value` for `context_compaction`](https://github.com/openai/codex/issues/26493)
   **16 comments, 4 👍**
   Error prevents automatic compaction on long sessions. Users on Windows and remote SSH are affected.

9. [#24287 – Desktop UI stuck in “Thinking”; Stop fails and turn becomes invisible after restart](https://github.com/openai/codex/issues/24287)
   **14 comments, 0 👍**
   Interaction bug: prompts accepted but no response; subsequent restart hides the stalled turn.

10. [#27242 – Token efficiency regression makes 20x Pro feel insufficient](https://github.com/openai/codex/issues/27242)
    **3 comments, 0 👍** (new, but high-signal from same reporter as #19585)
    Recently worsened token usage; same dev tasks burn more of the weekly limit.

---

## Key PR Progress (10 selected)

1. [#27261 – Make MCP connection startup fallible](https://github.com/openai/codex/pull/27261)
   Fixes required MCP server validation split between `Session::new` and `McpConnectionManager`; prevents bypass of required servers.

2. [#27127 – Forward assistant output to realtime through handoffs](https://github.com/openai/codex/pull/27127)
   Ensures the frontend model hears every Codex message during voice handoffs, making realtime feel like one coherent assistant.

3. [#27055 – Add parent turn ID to analytics](https://github.com/openai/codex/pull/27055)
   Carries nullable `parent_turn_id` from runtime submissions into analytics events for multi-agent and delegation flows.

4. [#27259 – Replace MCP manager lock with explicit retirement](https://github.com/openai/codex/pull/27259)
   Removes a `RwLock` contention hot spot during session startup; copies tool-list into a snapshot to avoid holding lock while waiting for MCP startup.

5. [#27276 – Reduce archive rollout lookup CPU](https://github.com/openai/codex/pull/27276)
   Optimizes thread archiving: uses rollout filename (contains UUID) to skip broader filesystem search, reducing app-server CPU spikes.

6. [#25232 – Derive window generation from effective rollout lineage](https://github.com/openai/codex/pull/25232) (merged)
   Fixes `x-codex-window-id` generation after rollback/resume/retained-history fork – re-computes from effective rollout history.

7. [#27078 – Emit goal lifecycle analytics](https://github.com/openai/codex/pull/27078) (merged)
   Adds analytics events for `/goal` behavior; identifies goal execution and outcomes.

8. [#17931 – Support encrypted local secrets for keyring auth](https://github.com/openai/codex/pull/17931)
   Encrypts auth payloads stored in keyring to work around Windows Credential Manager’s 2,560-byte limit (affects MCP OAuth and ChatGPT auth).

9. [#19051 – Use run agent task auth for inference](https://github.com/openai/codex/pull/19051)
   Part of HAI single-run-task stack; wires authenticated inference through agent identity.

10. [#25158 – Support more Vim normal commands](https://github.com/openai/codex/pull/25158)
    Adds `gg`/`G`, `dG`, `yG`, `c{motion}`, and characterwise visual mode motions for large composer buffers.

---

## Feature Request Clusters

- **Multi-root workspace support**
  [#2909](https://github.com/openai/codex/issues/2909) (125 👍, open since 2025-08-29) – VS Code users repeatedly request the extension to handle multiple workspace folders.

- **Configurable Windows agent shell**
  [#16717](https://github.com/openai/codex/issues/16717) (closed, 15 👍) – Allow users to switch from PowerShell to Git Bash or other shells for better model command generation.

- **Vim and advanced editor controls**
  [#25158](https://github.com/openai/codex/pull/25158) (PR, open) – Expand Vim normal-mode support in the composer buffer; community has asked for `gg`/`G` and similar motions.

- **Custom MCP server configuration**
  Multiple issues (e.g., [#27002](https://github.com/openai/codex/issues/27002) on Windows MCP startup failure) indicate growing demand for robust MCP integration with fallback/reconnection.

---

## Developer Pain Points

1. **Chat history silently disappearing** – At least 10 open issues in the top 30 report threads not appearing in Desktop UI while data remains on disk. This is the most commented-on problem (cumulative ~150 comments). Workflow severely impacted for long-term projects.

2. **Windows sandbox regressions** – Two issues ([#24391](https://github.com/openai/codex/issues/24391), [#26158](https://github.com/openai/codex/issues/26158)) with high comment counts; CLI 0.133.0 and 0.138.0 broke sandbox execution; rollback to 0.132.0 required.

3. **Token efficiency / rate limit depletion** – Two issues ([#19585](https://github.com/openai/codex/issues/19585), [#27242](https://github.com/openai/codex/issues/27242)) report that the same workloads now use significantly more of the Pro weekly limit. 29 👍 combined; no maintainer response yet.

4. **Context compaction failures** – Issues [#26493](https://github.com/openai/codex/issues/26493), [#24544](https://github.com/openai/codex/issues/24544), [#22890](https://github.com/openai/codex/issues/22890), [#27267](https://github.com/openai/codex/issues/27267) all report `context_compaction` errors (`invalid_enum_value`, `context_length_exceeded`) on Windows, macOS, and mobile Web. Compaction is essential for long sessions.

5. **Performance tracing needs** – PRs [#27094](https://github.com/openai/codex/pull/27094) and [#27258](https://github.com/openai/codex/pull/27258) add spans and caching for tool search; internal profiling shows `append_tool_search_executor` at ~113ms per call, indicating known performance bottlenecks.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the Gemini CLI community digest for June 10, 2026.

---

**Gemini CLI Community Digest – 2026-06-10**

### Today's Update Brief
High activity with four releases (including a new preview and a stable patch) and 50 issues/37 PRs updated in the last 24 hours. The team shipped several stability backports, fixing a crash in PTY resize handling and resolving multiple session-state corruption bugs. Community attention remains focused on agent autonomy issues (sub-agents ignoring settings, thinking stalls, recovery bugs) and improvements to the Auto Memory system.

### Releases
- **v0.47.0-preview.0**: New preview release includes backend definition improvements. [View](https://github.com/google-gemini/gemini-cli/releases/tag/v0.47.0-preview.0)
- **v0.46.0**: Stable release with a critical fix for PTY resize crashes (`fix(core): harden PTY resize against native crashes`). [View](https://github.com/google-gemini/gemini-cli/releases/tag/v0.46.0)
- **v0.46.0-preview.3**: Preview patch that cherry-picks the Vertex AI model mapping fix (PR #27749) to the preview branch. [View](https://github.com/google-gemini/gemini-cli/releases/tag/v0.46.0-preview.3)
- **v0.45.3**: Stable patch (cherry-picked from same model mapping fix) backported to the v0.45.x line. [View](https://github.com/google-gemini/gemini-cli/releases/tag/v0.45.3)

### Hot Issues (Pick of 10)
1. **[#27417 – Gemini overrules user action](https://github.com/google-gemini/gemini-cli/issues/27417)** (Closed, 12 comments)
   *Affected Workflow:* User issues explicit commands that get overridden by the agent. The CLI is producing unpredictable behavior. *Reaction:* High engagement; maintainers requested exported chat history for root cause.

2. **[#24353 – Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)** (Open, 7 comments)
   *Affected Workflow:* Risk evaluation framework for agent components. Epic tracking behavioral evals across 6 supported Gemini models. *Reaction:* Large workstream rollup; maintainers-only.

3. **[#22745 – AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** (Open, 7 comments)
   *Affected Workflow:* Investigates if AST tools can reduce token noise and tool calls in codebase navigation. *Reaction:* One 👍; low community reaction but strategic.

4. **[#22323 – Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** (Open, 6 comments)
   *Affected Workflow:* Sub-agents that hit turn limits report “success,” hiding the actual timeout. *Reaction:* Two 👍; multiple users affected, being retested.

5. **[#21968 – Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** (Open, 6 comments)
   *Affected Workflow:* Custom skills (e.g., “gradle”, “git”) are ignored unless explicitly requested. *Reaction:* Frustrated anecdote; model chooses generic tools over custom ones.

6. **[#27766 – Thinking Bug](https://github.com/google-gemini/gemini-cli/issues/27766)** (Open, 4 comments)
   *Affected Workflow:* Agent gets stuck in a 7-minute “thinking” state for tasks that normally take 1–2 minutes. *Reaction:* Direct user reporting degraded response speed; maintainers requesting info.

7. **[#25166 – Shell command execution stuck with “Waiting input”](https://github.com/google-gemini/gemini-cli/issues/25166)** (Open, 4 comments)
   *Affected Workflow:* After simple shell commands finish, the CLI hangs showing “Awaiting user input.” *Reaction:* 3 👍; frequent recurrence reported.

8. **[#21983 – Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** (Open, 4 comments)
   *Affected Workflow:* Browser subagent cannot complete goals under Wayland display server. *Reaction:* 1 👍; Linux users blocked.

9. **[#26525 – Add deterministic redaction in Auto Memory](https://github.com/google-gemini/gemini-cli/issues/26525)** (Open, 5 comments)
   *Affected Workflow:* Secrets sent to model context before redaction. Also, excessive logging of skill knowledge. *Reaction:* Maintainers-only security concern.

10. **[#24246 – 400 error with >128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)** (Open, 3 comments)
    *Affected Workflow:* Loading many tools (e.g., MCP servers) causes HTTP 400. *Reaction:* Request for smarter tool scoping.

### Key PR Progress (Pick of 10)
1. **[#27776 – Changelog for v0.47.0-preview.0](https://github.com/google-gemini/gemini-cli/pull/27776)** (Open, maintainer only)
   Auto-generated changelog for the latest preview release.

2. **[#27777 – Changelog for v0.46.0](https://github.com/google-gemini/gemini-cli/pull/27777)** (Open, maintainer only)
   Changelog for the stable release.

3. **[#27749 – Vertex AI model mapping fix](https://github.com/google-gemini/gemini-cli/pull/27749)** (Merged, size L)
   Refactors model ID mapping for `gemini-3.5-flash` to support `LOGIN_WITH_GOOGLE` and `COMPUTE_ADC` auth types. Cherry-picked into two patched releases.

4. **[#27768 – Patch v0.46.0-preview.2 → v0.46.0-preview.3](https://github.com/google-gemini/gemini-cli/pull/27768)** (Merged)
   Cherry-pick of Vertex AI model mapping fix into preview release line.

5. **[#27769 – Patch v0.45.2 → v0.45.3](https://github.com/google-gemini/gemini-cli/pull/27769)** (Merged)
   Same model mapping fix backported to stable release.

6. **[#27465 – Surface extension enable/disable feedback](https://github.com/google-gemini/gemini-cli/pull/27465)** (Merged)
   Previously, running `gemini extensions enable/disable` produced no terminal output; feedback was only in debug logs. Now shows success/error messages.

7. **[#27453 – Re-seed metadata when chat session file is recreated mid-session](https://github.com/google-gemini/gemini-cli/pull/27453)** (Merged)
   Fixes a parse crash when the session `.jsonl` file is deleted and recreated during an active session.

8. **[#27643 – Fix parallel workspace compilation race condition](https://github.com/google-gemini/gemini-cli/pull/27643)** (Open)
   Splits monorepo build into sequential stages to prevent failures when building with `--parallel`.

9. **[#27772 – Standardize tool output formatting](https://github.com/google-gemini/gemini-cli/pull/27772)** (Open)
   Introduces `wrapUntrusted` helper to ensure consistent output structure from `mcp-tool`, `shell`, and `web-fetch` tools.

10. **[#27771 – Fix MCP header encoding for non-ASCII values](https://github.com/google-gemini/gemini-cli/pull/27771)** (Open)
    Fixes issue #25668 where MCP discovery fails when a header contains Unicode characters (e.g., `mąka`).

### Feature Request Clusters
- **Sub-Agent Autonomy & Direction:** Multiple issues (#21968, #22267, #22093) ask for the model to better invoke custom skills, respect `settings.json` overrides, and not run sub-agents without permission. Recurring theme: the model “does what it wants” instead of following configured rules.
- **AST-Aware Tooling:** A cluster of issues (#22745, #22746, #22323 EPIC) explores AST-based codebase mapping to avoid token waste and misaligned file reads. Not yet merged, but under active investigation.
- **Self-Awareness & Self-Commands:** Issue #21432 requests that the CLI understand its own flags, hotkeys, and ability to execute itself for workflows like “help me debug the CLI.” Also includes self-diagnosis for destructive behavior (#22672).
- **Browser Agent Resilience:** Several reports (#22232, #21983, #22267) ask for automatic session takeover, lock recovery, and handling Wayland environments. The browser sub-agent is a frequent pain point for test automation users.

### Developer Pain Points
- **Hanging / Stuck States:** Most-repeated complaint in the bug tracker. The CLI hangs after shell commands (#25166), gets stuck in “thinking” for minutes (#27766), or reports false “success” after timeouts (#22323).
- **Sub-Agent Ignoring Config/Custom Tools:** Users who define custom skills or disable sub-agents find them ignored (#21968, #22093). The model prefers generic built-in tools.
- **Corruption After Editor Exits:** Issue #24935 reports screen corruption when exiting external editors in `terminalBuffer` mode.
- **Browser Agent Failures on Linux/Wayland:** The browser sub-agent is non-functional in Wayland (#21983), failing goals without recovery.
- **Auto Memory Over-Retries:** Issue #26522 highlights that the background extraction agent infinitely retries low-signal sessions, wasting credits and time.
- **Security/Integrity Concerns:** Path traversal vulnerabilities in skill installation (#27767) and pre-redaction exposure of secrets in Auto Memory (#26525) are under immediate fix.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-10

## Today's Update Brief

A single patch release (v1.0.61) shipped yesterday with UI polish and a new in-app settings dialog. Activity remains high: 30 issues and 1 PR were updated in the last 24 hours. Community attention is focused on authentication failures when resuming sessions, model parity gaps between CLI and VS Code, and a growing number of encoding-related corruption bugs.

## Releases

**v1.0.61** (2026-06-09) — [Full changelog](https://github.com/github/copilot-cli/releases/tag/v1.0.61)
- Polished the agents picker and the Create New Agent wizard with consistent borders, headers, and styled inputs.
- Fixed a blank screen when resuming a session.
- Added `/settings` interactive dialog to browse and edit all user settings in one place.
- Fixed an issue where resuming a local session with certain state could fail.

## Hot Issues

1. **#53 — Bring back the original CLI commands to not break workflows**
   [Link](https://github.com/github/copilot-cli/issues/53)
   **Workflow:** Users who script or alias `github-copilot-cli` commands report breaking changes.
   **Impact:** High — 75 👍, 31 comments spanning many months. The community has started rolling its own replacements (e.g., `shell-ai`).
   **Reaction:** Frustration at lack of official response; self-hosted forks gaining traction.

2. **#1703 — Copilot CLI does not list all org-enabled models (e.g., Gemini 3.1 Pro)**
   [Link](https://github.com/github/copilot-cli/issues/1703)
   **Workflow:** Enterprise users who enable models via org settings find them missing in the CLI but present in VS Code.
   **Impact:** High — 54 👍, 29 comments. Blocks access to newer/larger models for CLI power users.
   **Reaction:** Users ask for model list parity; maintainers have not yet resolved.

3. **#2082 — Ctrl+Shift+C no longer copies to clipboard on Linux**
   [Link](https://github.com/github/copilot-cli/issues/2082)
   **Workflow:** Linux terminal users rely on the standard shortcut for copy.
   **Impact:** Medium — 8 👍, 20 comments. Affects Ubuntu 24.04 since v1.0.4.
   **Reaction:** Workarounds suggested; no fix confirmed yet.

4. **#2050 — Claude Sonnet 4.6: “HTTP/2 GOAWAY connection terminated” after retries**
   [Link](https://github.com/github/copilot-cli/issues/2050)
   **Workflow:** Using `claude-sonnet-4.6` for large specification generation tasks (8 KB YAML).
   **Impact:** Medium — 4 👍, 8 comments. Gemini 3 Pro works fine.
   **Reaction:** Suspected network-layer issue with Claude endpoint; user reports it does not happen in VS Code.

5. **#3436 — `/mcp search` constructs wrong URL for custom MCP registries (missing `/v0.1/` segment)**
   [Link](https://github.com/github/copilot-cli/issues/3436)
   **Workflow:** Enterprise MCP registry users who set a custom `{registryUrl}`.
   **Impact:** High for affected orgs — causes 404 on self-hosted registries.
   **Reaction:** Closed as fixed (pull #3440), but notable as a regression in v1.0.49.

6. **#2540 — Plugin-defined `preToolUse` hooks never fire**
   [Link](https://github.com/github/copilot-cli/issues/2540)
   **Workflow:** Plugin authors defining hooks in `hooks.json`.
   **Impact:** Medium — 3 👍, 7 comments. Hooks don’t fire in main session or subagents.
   **Reaction:** Distinct from existing hook bugs; no maintainer update yet.

7. **#3701 — Runaway MCP server spawning on Windows (IDE lock-file watcher re-init loop)**
   [Link](https://github.com/github/copilot-cli/issues/3701)
   **Workflow:** Windows users with VS Code integration and MCP servers (e.g., Playwright).
   **Impact:** High — 0 👍 but detailed report. Spawns 79+ instances during a single session.
   **Reaction:** Closed as fixed in v1.0.61; root cause was lock-file watcher race.

8. **#3123 — `/research` can't write its research report**
   [Link](https://github.com/github/copilot-cli/issues/3123)
   **Workflow:** Running `/research` topic; the agent completes research but cannot save to a file.
   **Impact:** Medium — 4 👍, 4 comments. The `create` tool is unavailable in that context.
   **Reaction:** Users point out the agent needs write permissions it doesn’t have.

9. **#3596 — Resuming a session shows “Error: Not authenticated” for `/model` list**
   [Link](https://github.com/github/copilot-cli/issues/3596)
   **Workflow:** Resuming a specific session then trying to list available models.
   **Impact:** High — 10 👍, 3 comments. New sessions work fine.
   **Reaction:** Suggests session state loses auth token; no fix yet.

10. **#1613 — Feature request: Built-in git worktree lifecycle management**
    [Link](https://github.com/github/copilot-cli/issues/1613)
    **Workflow:** Developers want Copilot to create/destroy worktrees during problem-solving.
    **Impact:** High demand — 31 👍, 2 comments.
    **Reaction:** Positive, but see #2243 for the opposing view (worktrees should be opt-in).

## Key PR Progress

Only one PR was updated in the last 24 hours:

**#3737 — “Jigg empire ai”**
[Link](https://github.com/github/copilot-cli/pull/3737)
**Author:** @j2030aiNotez — **Status:** OPEN
**Summary:** A single-line PR with the description “Let’s try this new method” and no substantive code changes. Appears to be a test or spam contribution.
**Reaction:** No comments; unlikely to be merged.

*No other PRs were updated in the last 24 hours.*

## Feature Request Clusters

- **Enterprise Model Parity** (#1703, #3730, #3548): Users want the CLI to surface all org-enabled models (BYOK, custom endpoints) that are already available in VS Code. The `/model` list is consistently smaller.
- **MCP Registry & Authentication Improvements** (#3436, #3548, #3706): Requests for better MCP registry URL handling, ability to persist `/mcp enable github-mcp-server` across sessions, and mitigation of repeated OAuth flows for remote MCP servers.
- **Session Sharing Across Machines** (#3729, #2655): Users want to resume a session started on one machine from another. Currently sessions are local-only, and `cwd`/`branch` metadata is not persisting to the database.
- **Git Worktree Management** (#1613, #2243): Two opposing requests: one for built-in worktree creation/destruction, another to disable worktrees by default to prevent messy state.

## Developer Pain Points

1. **Model Availability Gaps** — Several high-👍 issues (#1703, #53, #3596) point to inconsistent model lists between CLI and VS Code, and authentication errors when resuming sessions. This is the most frequently cited block for power users.

2. **Input & Keyboard Regressions** — Linux users lose clipboard shortcuts (#2082); Windows users lose Ctrl+Zoom (#3735); Chinese/CJK characters are double-encoded when copied from the CLI (#3726). Multiple issues suggest the input handling layer has accumulated regressions.

3. **Plugin & Hook Reliability** — Plugin `preToolUse` hooks don’t fire (#2540); `userPromptSubmitted` hook context was dropped in v1.0.60 (#3727). Plugin authors are losing confidence in the extensibility surface.

4. **Encoding & File Corruption** — Three issues filed in the last 24 hours alone (#3601, #3732, #3726) report silent corruption of non-UTF-8 bytes in bash output, edited files, and clipboard copy. This is a fast-growing pain point.

5. **Windows-Specific Installation & Uninstallation** — Users report being unable to uninstall the CLI via Control Panel (#3662), and `Ctrl+G` fails to launch `code-insiders --wait` (#3733). Windows experience still has rough edges.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest – 2026-06-10

## Today’s Update Brief
Activity on `github.com/MoonshotAI/kimi-cli` was light today: no new releases, two open issues updated, and one pull request opened. Both issues report tool‑level regressions – an infinite reading loop and a failing edit tool – while the PR improves feedback from post‑tool hooks to the LLM.

## Releases
*No new releases in the last 24 hours.*

## Hot Issues

1. **[#640] Kimi CLI stuck in reading one file again and again in a loop**
   *Author: @isbafatima90-arch | Created: 2026-01-19 | Updated: 2026-06-10*
   A long‑standing bug where the CLI repeatedly reads the same file and never progresses. The user is running Kimi CLI v0.76 on Arch Linux with a custom Anthropic endpoint (`mimo-v2-flash`). Despite 7 comments, the issue remains open. The fact that it received an update today suggests maintainers may be re‑evaluating it.
   [↗ GitHub](https://github.com/MoonshotAI/kimi-cli/issues/640)

2. **[#2443] Edit tool keeps failing in new kimi-code**
   *Author: @iaindooley | Created: 2026-06-09 | Updated: 2026-06-09*
   On Kimi Code v0.12.0 with model `k2.6` (Debian), the edit tool fails frequently. No comments yet, but the report aligns with other recent tool‑stability complaints. Affects core editing workflow.
   [↗ GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2443)

## Key PR Progress

1. **[#2445] feat(hooks): surface PostToolUse hook stderr to LLM context**
   *Author: @zwpdbh | Created: 2026-06-10 | Updated: 2026-06-10*
   Changes the `PostToolUse` hook from fire‑and‑forget to awaited, so hook stderr is collected and appended to the tool result message. This gives the LLM immediate visibility into hook output after a tool call. The PR is a targeted improvement for anyone relying on custom post‑tool hooks.
   [↗ GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2445)

## Feature Request Clusters
*No feature request clusters were identified in today’s data. The open issues are bug reports, not feature requests.*

## Developer Pain Points
- **Infinite file‑reading loop** (Issue #640): Affects users on Linux with custom endpoints; the CLI enters a non‑terminating loop, halting all work.
- **Edit tool failures** (Issue #2443): The new Kimi Code v0.12.0’s edit tool breaks frequently on Debian with model `k2.6`, disrupting code modification workflows.
- Both issues point to tool reliability concerns, especially on Linux and with non‑default model configurations. The lack of maintainer responses on either issue (despite #640 being updated) may frustrate affected users.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-10

## Today’s Update Brief
No new releases were published in the last 24 hours. Community activity remained high: 50 issues and 50 pull requests were updated, with strong engagement on memory debugging, custom‑provider compatibility, and CLI usability. Several long‑running bugs—including context awareness, parallel task execution, and clipboard behaviour—received new comments and partial fixes.

## Releases
*None in the last 24 hours.*

## Hot Issues
1. **#20695 — Memory Megathread**
   [Link](https://github.com/anomalyco/opencode/issues/20695)
   Central tracking issue for scattered memory‑leak reports. Maintainers request heap snapshots (not LLM suggestions). 91 comments, 64 👍. Community is actively providing snapshots. *Impact:* high, affects all users running long sessions.

2. **#2242 — Sandbox the agent**
   [Link](https://github.com/anomalyco/opencode/issues/2242)
   Request to restrict terminal commands to the current directory. References macOS seatbelt equivalents in other tools. 64 comments, 53 👍. No maintainer resolution yet.

3. **#13984 — Cannot copy/paste in CLI**
   [Link](https://github.com/anomalyco/opencode/issues/13984)
   Clipboard operations appear to succeed (toast) but paste yields nothing. 45 comments, 20 👍. Affects terminal workflow on multiple platforms.

4. **#3472 — Context awareness not working**
   [Link](https://github.com/anomalyco/opencode/issues/3472)
   VSCode extension claims context awareness, but agent does not see selected lines. Closed, but continues to receive comments. 38 comments, 26 👍. Users uncertain about configuration.

5. **#5674 — Custom OpenAI‑compatible provider options ignored**
   [Link](https://github.com/anomalyco/opencode/issues/5674)
   `baseURL` and `apiKey` in `opencode.json` are not passed to API calls. 23 comments, 13 👍. Blocks self‑hosted/third‑party providers.

6. **#20802 — Image attachments not reaching vision models via custom providers**
   [Link](https://github.com/anomalyco/opencode/issues/20802)
   Images sent through OpenCode sessions are lost for custom OpenAI‑compatible providers. 15 comments, 7 👍. Affects users with vision‑capable models.

7. **#31498 — Extremely bad developer prompt**
   [Link](https://github.com/anomalyco/opencode/issues/31498)
   Default system prompt leads to overly cautious agent behaviour (e.g., explaining `mv` instead of running it). 7 comments, 1 👍. New issue, low visibility but strong sentiment.

8. **#31525 — Prompt loop reloads all messages every iteration**
   [Link](https://github.com/anomalyco/opencode/issues/31525)
   `filterCompactedEffect` re‑reads the entire message history from DB each loop turn, breaking Anthropic prompt caching. 4 comments, 0 👍. Serious performance regression for Anthropic users.

9. **#31579 — `@ai-sdk/anthropic` 3.0.71 rejects `fallback_message` usage type**
   [Link](https://github.com/anomalyco/opencode/issues/31579)
   Anthropic now emits `"fallback_message"` when a fallback model is used; the SDK only allows `"compaction"|"message"`. Causes turn failures. New, critical for users of Claude Fable with fallbacks.

10. **#31588 — Tool stderr leaks into message input field on bash timeout**
    [Link](https://github.com/anomalyco/opencode/issues/31588)
    Multi‑line stderr output from timed‑out bash commands overwrites the user input buffer. Requires clearing with spacebar. 2 comments, 0 👍. Annoyance.

## Key PR Progress
1. **#31392 — Stage edits for native review in ACP clients**
   [Link](https://github.com/anomalyco/opencode/pull/31392)
   Enables OpenCode to work with Zed/Devin’s native file‑review UI. New feature behind ACP protocol.

2. **#28592 — Fix OSC52 clipboard passthrough under GNU screen**
   [Link](https://github.com/anomalyco/opencode/pull/28592)
   Previously only tmux DCS passthrough was handled; adds screen support. Closes #28590.

3. **#31595 — Make MCP client creation failure‑safe**
   [Link](https://github.com/anomalyco/opencode/pull/31595)
   Wraps MCP initialization in a total boundary; returns explicit error status instead of crashing.

4. **#31515 — Add iFlow provider for web tools**
   [Link](https://github.com/anomalyco/opencode/pull/31515)
   Opt‑in iFlow path for existing `websearch`/`webfetch` tools. New feature.

5. **#28936 — Fix TUI dialog takeover by question prompts**
   [Link](https://github.com/anomalyco/opencode/pull/28936)
   Prevents question modals from blocking the open dialog. React‑ish hook fix.

6. **#31591 — Output error message in CLI `.fail()` handler**
   [Link](https://github.com/anomalyco/opencode/pull/31591)
   Yargs failure handler now prints the actual error instead of silent help output.

7. **#30682 — Preserve orphan sessions on project ID drift**
   [Link](https://github.com/anomalyco/opencode/pull/30682)
   After `git rebase` (no remote URL), project ID changes; this fix keeps old sessions visible.

8. **#31589 — Use v2 filesystem search for pickers**
   [Link](https://github.com/anomalyco/opencode/pull/31589)
   Migrates file pickers from legacy `find` to `v2.fs.find`. Centralised response mapping.

9. **#31581 — Sync models.dev reasoning options**
   [Link](https://github.com/anomalyco/opencode/pull/31581)
   Parses provider‑specific `reasoning_options` (toggle/effort/budget_tokens) from models.dev and exposes typed union.

10. **#31547 — Ensure tool_use/tool_result integrity and Anthropic user‑first ordering**
    [Link](https://github.com/anomalyco/opencode/pull/31547)
    Defensive pass to pair every `tool_use` with its `tool_result`, fixing message ordering issues. Closes #27594.

## Feature Request Clusters
- **Sandboxing & Security:** Multiple requests to restrict agent filesystem/terminal access (#2242). No solution yet.
- **Context Awareness:** Several users ask for explicit selection support in VSCode and CLI (#3472, #22235). Documentation gaps.
- **CLI/TUI Customisation:** Requests include configurable model‑selector widths (#31582), tmux window name (#24822), and in‑CLI usage stats (#27698).
- **Provider Configuration:** Feature requests for context‑window limits for local models (#31433) and better onboarding for custom OpenAI‑compatible providers.
- **Billing & Refunds:** Two issues (#26508, #29182) report confusion with ZEN payment flow and lack of support responses for refunds.

## Developer Pain Points
- **Memory Issues:** The Memory Megathread (#20695) continues to gather heap snapshots. No fix yet.
- **Custom Provider Frustration:** Multiple bugs (#5674, #20802, #26412) prevent custom OpenAI‑compatible providers from working correctly—options ignored, images dropped, streaming tool calls fail.
- **CLI Clipboard:** Copy/paste broken for many terminal environments (#13984, #28590). PR #28592 fixes screen, but root cause may persist.
- **Tool Execution Aborted:** Frequent “Tool execution aborted” errors in v1.3.0 (#18757) force session restarts.
- **Prompt Loop Performance:** Reloading entire message history each iteration (#31525) kills prompt caching benefits for Anthropic users.
- **Unexpected Stderr Leak:** Bash timeout output contaminates user input (#31588).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest – 2026-06-10

---

## 1. Today's Update Brief

Two preview releases (v0.18.0-preview.0 and v0.18.0-preview.1) were published, both containing a fix for CLI thought parts in copy output. Community activity remains high: 28 issues and 50 pull requests were updated in the last 24 hours, with notable progress on daemon-mode features (ACP WebSocket transport, session reaper, cursor pagination) and several critical bug fixes. Two release workflow runs failed, indicating ongoing CI instability.

---

## 2. Releases

**v0.18.0-preview.0** and **v0.18.0-preview.1** — both released on 2026-06-10, with identical changelogs:
- `chore(release): v0.17.1`
- `fix(cli): skip thought parts in copy output` (by @he-yufeng)

The duplication suggests a re-tag or CI artifact. No further details.
- Release notes: https://github.com/QwenLM/qwen-code/releases/tag/v0.18.0-preview.1

---

## 3. Hot Issues (10 selected)

### #4514 – Daemon capability gaps & prioritized backlog
**Feature request** (14 comments, open)
Tracks remaining gaps in `qwen serve` HTTP/SSE surface after accounting for slash-command passthrough. Covers remote ACP-compatible invocation.
https://github.com/QwenLM/qwen-code/issues/4514

### #4615 – Project-scoped `.mcp.json` with pending approval semantics
**Feature request** (5 comments, open)
Adds workspace-level MCP server config with a `Pending` state before servers are started. Addresses security and multi-project isolation.
https://github.com/QwenLM/qwen-code/issues/4615

### #4727 – Dual Output mode TUI no response
**Bug** (5 comments, open)
Using `--json-file` with FIFOs on v0.17.0 causes the TUI to hang when writing input. Blocks headless automation workflows.
https://github.com/QwenLM/qwen-code/issues/4727

### #4782 – ACP Streamable HTTP transport implementation status
**Feature request / tracking** (4 comments, open)
Qwen-Code Daemon now implements ACP Streamable HTTP at `/acp`. Native support for Zed, Goose, JetBrains.
https://github.com/QwenLM/qwen-code/issues/4782

### #4729 – Runtime snapshot prefix leaks into settings.model.name, causes 404
**Bug** (3 comments, closed)
`~/.qwen/settings.json` accumulates internal runtime prefixes on restart (e.g. `$runtime|openai|$runtime|openai|...`), breaking model switching.
https://github.com/QwenLM/qwen-code/issues/4729

### #4888 – IDEA plugin: `ask_user_question` not showing text or inputs
**Bug** (3 comments, open)
When Qwen asks a user question in JetBrains IDE, the question text is invisible and input fields are missing. Submit/cancel buttons appear only.
https://github.com/QwenLM/qwen-code/issues/4888

### #4876 – Subagent reading images returns unrelated content
**Bug** (3 comments, open)
A subagent configured to analyze images via `read_file` returns content completely unrelated to the input, while the same model in the main agent works correctly.
https://github.com/QwenLM/qwen-code/issues/4876

### #4907 – Down arrow requires 2 presses to reach subagent content
**Bug** (2 comments, open)
From the input field, pressing ↓ first focuses a hidden subagent tab bar instead of directly navigating to the live agent panel.
https://github.com/QwenLM/qwen-code/issues/4907

### #4891 – Terminal resize during streaming leaves fragmented scrollback
**Bug** (2 comments, open)
Resizing the terminal while output is streaming causes content rendered at mixed widths, with tool-call borders breaking at inconsistent columns.
https://github.com/QwenLM/qwen-code/issues/4891

### #4904 – Cannot switch to new model (qwen3.7-plus)
**Bug** (2 comments, open)
With Coding Plan provider, the model list in v0.17.1 does not include `qwen3.7-plus`, and manual switch fails with "Model not available for auth type 'openi'".
https://github.com/QwenLM/qwen-code/issues/4904

---

## 4. Key PR Progress (10 selected)

### #4890 – Add `/cd` command
New slash command to change working directory without restarting the session. Validates path, prompts trust, updates workspace roots and cwd-backed services.
https://github.com/QwenLM/qwen-code/pull/4890

### #4810 – Fix OpenAI SDK abort listener leak
Wraps `AbortSignal` in per-request child controllers to isolate SDK’s internal listener leak. Prevents memory growth in long-lived sessions.
https://github.com/QwenLM/qwen-code/pull/4810

### #4917 – Default `splitToolMedia` to true for OpenAI-compatible backends
Ensures images returned by tool calls reach strict OpenAI-compatible backends by flipping the runtime default, placing tool media in a follow-up user message.
https://github.com/QwenLM/qwen-code/pull/4917

### #4894 – Fix FIFO blocking on startup in dual-output mode
Opens named pipes with `O_RDWR | O_NONBLOCK` and adds 1 MB buffer high-water mark to prevent blocking when no reader is connected.
https://github.com/QwenLM/qwen-code/pull/4894

### #4773 – ACP WebSocket transport (phase 2)
New transport-agnostic interface and WebSocket adapter, coexisting with SSE. Depends on #4827 for REST parity.
https://github.com/QwenLM/qwen-code/pull/4773

### #4903 – Windows installer: auto-detect SYSTEM account, default PATH to machine
When running under SYSTEM (SID S-1-5-18), PATH scope defaults to machine-wide install, making `qwen` discoverable in new sessions.
https://github.com/QwenLM/qwen-code/pull/4903

### #4827 – ACP/REST parity – 29 new `_qwen/*` methods + production hardening
+935 lines adding session extensions, telemetry, context usage, model info, and more. Replaces earlier PR#4736.
https://github.com/QwenLM/qwen-code/pull/4827

### #4844 – Experimental Agent Team mode
Enables parallel sub-agent coordination: named teams, inter-agent messaging, shared task lists, consolidated answer.
https://github.com/QwenLM/qwen-code/pull/4844

### #4833 – Session idle reaper for automatic cleanup
Two-layer cleanup: close-on-last-detach (immediate) and configurable idle timeout (default 30 min). Prevents stale sessions in daemon bridge.
https://github.com/QwenLM/qwen-code/pull/4833

### #4914 – Harden OOM prevention – idempotent compaction tests, explicit GC, debug log defaults
Adds regression tests for compactOldItems idempotency, explicit GC calls, and adjusted default log levels. Follow-up to #4824.
https://github.com/QwenLM/qwen-code/pull/4914

---

## 5. Feature Request Clusters

**Daemon & MCP integration**
- ACP Streamable HTTP transport (#4782) and WebSocket phase 2 (#4773) – ongoing push for native editor support.
- Project-scoped `.mcp.json` with pending approval (#4615) – security-focused workspace isolation.
- In-process MCP server support for Python SDK (#4889) – crucial for SDK-based agent workflows.

**CLI usability & navigation**
- `/cd` command (#4879, #4890) – session working directory changes without restart.
- Optional timestamps in CLI responses (#4899) – time awareness in long sessions.
- `--safe-mode` flag (#4883) – troubleshooting mode disabling all customizations.
- Preserve CLI flags when resuming background sessions (#4884).

**UI/UX improvements**
- Desktop app sidebar for file content (#4885) – avoid full-screen file view.
- Terminal resize resilience (#4891) – fragmented scrollback after resize is a known issue.
- Model indicator clickability in web-shell (#4887) – already addressed in PR.

**Automated changelog & CI**
- Automated CHANGELOG generation (#4872) – requested to match Claude Code’s format.
- Queued status feedback for PR review workflow (#4846) – immediate acknowledgment when review is triggered.

---

## 6. Developer Pain Points

**Model switching & provider confusion**
- Runtime snapshot prefixes leak into settings, causing 404 on restart (#4729).
- Shared baseUrl cannot be set once for multiple models (#4813).
- OpenWork cannot distinguish same model from different providers (#4877).
- New models (e.g., qwen3.7-plus) not available after update (#4904).

**Dual-output / FIFO blocking**
- Using `--json-file` with named pipes hangs TUI on startup if no reader is connected (#4727). Partially fixed in #4894.

**Subagent and tool integration bugs**
- Subagents reading images return incorrect content (#4876).
- MCP server configuration lacks approval semantics for project-level safety (#4615).
- SplitToolMedia default prevents tool-returned images from reaching certain backends (#4917, now fixed).

**Cross-platform installation issues**
- Windows standalone installer fails to register `qwen` in PATH when run as SYSTEM user (#4901, fix in #4903).
- Dev launcher path assertions break on Windows CI (#4915, closed).

**Keyboard navigation & TUI responsiveness**
- Down arrow requires two presses to reach subagent panel (#4907, fix in #4911).
- Terminal resize during streaming corrupts scrollback display (#4891).
- IDEA plugin `ask_user_question` completely broken (#4888).

**CI/release reliability**
- Two release workflows failed on 2026-06-10 (#4913, #4912), indicating potential pipeline issues.

</details>