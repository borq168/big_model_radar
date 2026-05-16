# AI CLI Tools Community Digest 2026-05-16

> Generated: 2026-05-16 02:07 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report — 2026-05-16

## 1. Daily Cross-Tool Overview

Today’s activity across six tracked AI CLI tools is sustained and broadly distributed. Five of six tools shipped new releases (Claude Code v2.1.143, Codex v0.131.0-alpha.19–.22, Copilot CLI v1.0.49-0/1, OpenCode v1.15.0, Qwen Code multiple nightlies/previews; Kimi Code had none). Combined issue and PR update counts range from 21 (Kimi Code) to ~100 (Codex, Gemini, Copilot raw counts). Common themes include memory/stability concerns (Qwen Code, OpenCode, Gemini CLI), agent reliability bugs (Gemini, Claude Code, Copilot, Kimi), and extensibility improvements via hooks, plugins, and MCP (Claude Code, Codex, Kimi, Copilot, OpenCode, Gemini). No single tool dominates across all metrics; each is progressing on distinct priorities.

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Releases Today |
|------|---------------------|-------------------|----------------|
| Claude Code | 50 | 2 | v2.1.143 |
| OpenAI Codex | ~50 | ~50 | v0.131.0-alpha.19, .21, .22 (3) |
| Gemini CLI | 50 | 50 | v0.44.0-nightly.20260515 |
| GitHub Copilot CLI | 50 | 0 | v1.0.49-0, v1.0.49-1 (2) |
| Kimi Code CLI | 11 | 10 | None |
| OpenCode | 50 | 10 | v1.15.0 |
| Qwen Code | 33 | 50 | v0.15.11-nightly, v0.15.12-preview.0–.2 (4) |

*Note: “Updated” includes new, commented, closed, or merged items. Some counts (e.g., Codex “over 50”) are approximate per digest wording.*

## 3. Shared Feature Directions

**Memory management and crash diagnostics**
- Qwen Code: OOM crashes in long sessions (#4149, #4167); `/doctor memory` command added in PR #4180; heap-pressure auto-compaction safety net (#4186).
- OpenCode: Memory megathread (#20695, 77 comments) with maintainers requesting heap snapshots; separate report of TUI high RAM (#27778).
- Gemini CLI: Memory system bugs cluster (4 issues from one reporter) covering Auto Memory redaction, silent patch failures, infinite retry loops (#26525, #26523, #26522, #26516).

**Agent reliability and hang recovery**
- Gemini CLI: Generalist agent hangs forever (#21409, P1); shell command stuck on “Awaiting input” (#25166, P1).
- Claude Code: Background tasks trigger autonomous API calls without permission prompts (#39027, 7 👍).
- Copilot CLI: Main agent not receiving sub-agent completion notifications (#2923).
- Kimi Code: K2.6 model overloaded under normal load (#2077, Critical, 14 comments).

**Plugin/hook/extensibility system enhancements**
- Claude Code: Plugin dependency enforcement in v2.1.143.
- Codex: SubagentStart hook added (#22782); new “remote control” feature based on multiple PRs.
- Kimi Code: Multiple hook payload fixes (UserPromptSubmit, Stop hook) via community PRs #2305, #2308.
- OpenCode: New Effect-based core event system in v1.15.0.
- Gemini CLI: MCP sampling handler first PR (#27130).
- Copilot CLI: Experimental MCP server search (`/mcp search`) in v1.0.49-0.

**Multi-device/remote workflows**
- Codex: Remote control feature in active development (PR stack #22508–#22510, #22878, #22769); authorization bugs (#22696).
- Qwen Code: Daemon mode (`qwen serve`) proposal with two architectural variants (#3803, #4156); debug page PR (#4132).
- OpenCode: “Discover running serve instances from TUI” PR (#27805); LAN provider discovery (#27554).
- Claude Code: Background tasks and agent awareness request (#59598).

**Windows and platform-specific issues**
- Claude Code: Windows 11 interactive command frozen (#57242).
- Codex: Windows sandbox permission migration PR (#22923); Browser Use broken on Windows (#21618).
- Gemini CLI: WSL path handling fix (#27025).
- Copilot CLI: macOS TLS cert 5‑second startup delay (#3330).
- Kimi Code: No Windows-specific issues reported today.
- Qwen Code: Tab key conflict on Windows (#4171); install script fails in Git Bash (#2774).
- OpenCode: Alpine Linux musl crash (#27589).

## 4. Differentiation Analysis

- **Claude Code** focuses on **plugin lifecycle and cost visibility** (projected context cost in TUI, plugin dependency enforcement) and **usage limit transparency** (reset time bugs dominate community). Little emphasis on remote control or memory diagnostics today.
- **OpenAI Codex** prioritizes **remote multi-client sync and subagent orchestration** (3-PR stack for TUI next-turn state, SubagentStart hook). Also advancing audio input support and Windows sandbox permissions. Billing and data-loss bugs are active pain points.
- **Gemini CLI** is dealing with **agent-level reliability** (two P1 hangs) and **memory subsystem quality** (Auto Memory bugs from internal testing). AST-aware codebase tools are a new feature direction.
- **GitHub Copilot CLI** has the fewest PRs (0) but added **experimental MCP search** and a “None” reasoning effort option. Community pain points center on model access policy errors, MCP connection pool timeouts, and macOS-specific delays.
- **Kimi Code CLI** has **no maintainer release today** but the strongest **community contribution signal**: 10 PRs from external contributors addressing hooks, security (auto-updater filter), and shell ergonomics. The K2.6 model reliability issue remains unresolved.
- **OpenCode** released a **new event system** and is seeing high community interest in a VS Code extension, agent marketplace, and TUI scrolling fixes. Memory issues are the #1 megathread.
- **Qwen Code** is most active on **memory diagnostics and daemon mode** (two PRs directly targeting OOM prevention, `/doctor memory` command, `/stuck` diagnostic skill). Also advancing tool-invariant fixes for weak-network scenarios.

## 5. Community Activity Notes

- **Highest combined issue+PR activity:** Codex (~100 items) and Gemini CLI (~100 items) tie, followed by OpenCode (60), Copilot CLI (50), Qwen Code (83), Claude Code (52), Kimi Code (21).
- **Most releases:** Qwen Code (4), Codex (3), Copilot CLI (2), Claude Code (1), OpenCode (1), Gemini CLI (1), Kimi Code (0).
- **Strongest maintainer response (PR merges and active engagement):** Codex (multiple remote control PRs, rate-limit labels), Qwen Code (PR #4186, #4180 merged; maintainer active on daemon design), OpenCode (multiple PRs merged).
- **Community-driven development:** Kimi Code stands out with 10 PRs from external contributors despite no release today; Qwen Code and OpenCode also have notable community PRs.
- **Stalled or silent issues:** Several high-upvote requests (OpenCode VS Code extension #11176 with 81 👍, Copilot session forking #1697 with 22 👍) have no recent maintainer comment.

## 6. Evidence-Backed Observations

1. **Memory pressure is a cross-tool concern, not isolated.** Qwen Code reports multiple OOM crashes, OpenCode has a running memory megathread, and Gemini CLI shows a concentrated set of memory-system bugs. Each is at a different stage: Qwen is actively building diagnostics, OpenCode is collecting snapshots, Gemini is cleaning up subsystem issues.

2. **Agent hang/freeze bugs affect three major tools today.** Gemini CLI (P1 generalist hang, shell command stall), Copilot CLI (sub-agent notification failure), and Kimi Code (model overload) all report workflows that completely stall. “Agent stuck” is the most disruptive single failure pattern across communities.

3. **Remote and multi-device workflows are being actively built by at least three tools.** Codex has the most complete implementation (remote control PRs stack), Qwen Code is designing daemon mode, and OpenCode is adding server discovery. This is a clear area of competitive development, though no tool has shipped it stable yet.

4. **Hook/plugin extensibility is a shared investment area with varying maturity.** Claude Code enforces plugin dependencies, Codex adds lifecycle hooks, Kimi Code is fixing payload bugs, Copilot experiments with MCP search, and OpenCode replaces its event system. The intent to support third-party integrations is uniform, but the mechanisms diverge (MCP, CLI hooks, custom event buses).

5. **Windows compatibility remains a recurring friction point across tools.** Claude Code, Codex, Gemini, Qwen, and OpenCode all have platform-specific bugs reported today—ranging from CLI freezes to install script failures to sandbox issues. No tool appears immune, and the problems are varied rather than a single systemic cause.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-05-16

## Today’s Update Brief
One patch release (v2.1.143) landed with plugin dependency enforcement and projected context cost display. Community activity remains high: 50 open/closed issues updated in the last 24 hours, plus two pull requests. The most debated topics are weekly usage limit reset bugs (multiple duplicates), a channels plugin that reports “not available” while working, and background tasks triggering unauthorized API calls.

## Releases
**v2.1.143** — [Full changelog](https://github.com/anthropics/claude-code/releases/tag/v2.1.143)
- **Plugin dependency enforcement:** `claude plugin disable` now refuses when another enabled plugin depends on the target (provides a copy‑pasteable disable‑chain hint); `claude plugin enable` force‑enables transitive dependencies.
- **Projected context cost:** Per‑turn and per‑session projected cost is now shown in the TUI.

## Hot Issues (10 most noteworthy)

1. **#36503 – Channels plugin shows “not available” but inbound notifications ignored**
   `claude --channels` displays “Channels are not currently available” at startup, yet the plugin polls Telegram correctly. Inbound messages never trigger a response.
   [43 comments, 35 👍]
   [GitHub](https://github.com/anthropics/claude-code/issues/36503)

2. **#52472 – Weekly usage limit reset occurring before scheduled reset time**
   Pro plan users see the week ending 5 days early (e.g., Monday instead of Thursday). Multiple reports confirm the /usage endpoint shows inconsistent reset dates.
   [18 comments, 2 👍]
   [GitHub](https://github.com/anthropics/claude-code/issues/52472)

3. **#39471 – Cowork OTLP monitoring not emitting events**
   Despite correct Admin‑side configuration, the Cowork VM’s OTel exporter sends zero HTTP requests. Affects multiple endpoints/protocols.
   [14 comments, 7 👍]
   [GitHub](https://github.com/anthropics/claude-code/issues/39471)

4. **#51222 – Weekly usage reset time displayed incorrectly**
   Pro plan users see “Resets by 6:00 AM” but expected ~8:00 AM ET. Extra usage is charged during the gap.
   [11 comments, 5 👍]
   [GitHub](https://github.com/anthropics/claude-code/issues/51222)

5. **#40574 – Garbled characters (mojibake) in CLI output since v2.1.86**
   Unicode rendering broken in certain terminal configurations. Regression reported on macOS.
   [8 comments]
   [GitHub](https://github.com/anthropics/claude-code/issues/40574)

6. **#39027 – Background task notifications trigger autonomous API calls with `bypassPermissions`**
   When a `run_in_background` task completes while REPL is idle, Claude Code materializes a synthetic notification and the model responds as if it were the user—without permission prompts.
   [8 comments, 7 👍]
   [GitHub](https://github.com/anthropics/claude-code/issues/39027)

7. **#33539 – OAuth login URL broken by TUI box/table formatting**
   The OAuth URL is rendered inside decorative pipes/spaces, making it unclickable and uncopyable—blocks Pro/Max subscribers from authenticating.
   [7 comments, 6 👍]
   [GitHub](https://github.com/anthropics/claude-code/issues/33539)

8. **#57242 – Windows 11: interactive `claude` command frozen in all terminals**
   Non‑interactive mode and `claude doctor` work fine. Regression likely introduced in recent releases.
   [6 comments]
   [GitHub](https://github.com/anthropics/claude-code/issues/57242)

9. **#59101 – VSCode extension crashes when Read tool offset passed as array**
   The model sometimes sends `offset` as `[1500]` instead of `1500`. The tool input validator rejects it, but the error handler crashes the extension session. Closed as fixed in pending release? (CLOSED)
   [6 comments, 3 👍]
   [GitHub](https://github.com/anthropics/claude-code/issues/59101)

10. **#59577 – Permission-suggestion UI generates malformed rule (unclosed quote)**
    For git commit heredoc patterns, the suggested permission rule has an unclosed quotation mark, sometimes crashing the dialog.
    [3 comments]
    [GitHub](https://github.com/anthropics/claude-code/issues/59577)

## Key PR Progress

1. **#59508 – Fix bash_command_validator regex false negatives**
   Open. Corrects two regex bugs in the example hook script that caused silent false negatives (e.g., exempting `grep` when it was the leading command in a pipeline).
   [GitHub](https://github.com/anthropics/claude-code/pull/59508)

2. **#59495 – Fix GitHub capitalization in README**
   Closed. “Github” → “GitHub” per brand guidelines.
   [GitHub](https://github.com/anthropics/claude-code/pull/59495)

## Feature Request Clusters

Several enhancements surfaced in the last 24 hours, all with limited community discussion (1 comment each):

- **Reasoning tracking:** Live‑stream users want a visible “thinking” indicator in the TUI. [#59599](https://github.com/anthropics/claude-code/issues/59599)
- **Background agent awareness:** Agents working in the same repo should be aware of each other (e.g., to avoid worktree isolation that is invisible to Git tooling). [#59598](https://github.com/anthropics/claude-code/issues/59598)
- **Slack MCP: expose `conversations.open`** to support group DMs. [#54332](https://github.com/anthropics/claude-code/issues/54332)
- **Documentation gaps for agent‑view:** Multiple issues request clearer docs on `--dangerously-skip-permissions` persistence across retire/wake ([#59590](https://github.com/anthropics/claude-code/issues/59590)), MCP/settings/plugin flag preservation ([#59593](https://github.com/anthropics/claude-code/issues/59593)), and `claude agents --allow-dangerously-skip-permissions` behavior ([#59596](https://github.com/anthropics/claude-code/issues/59596), [#59589](https://github.com/anthropics/claude-code/issues/59589)).

## Developer Pain Points

- **Weekly usage limit/reset bugs** continue to dominate – at least three distinct issues ([#52472](https://github.com/anthropics/claude-code/issues/52472), [#51222](https://github.com/anthropics/claude-code/issues/51222), [#52921](https://github.com/anthropics/claude-code/issues/52921)) with reports of premature resets and inconsistent displayed times.
- **CronCreate `durable: true` silently ignored** – two duplicate reports ([#55109](https://github.com/anthropics/claude-code/issues/55109), [#59603](https://github.com/anthropics/claude-code/issues/59603)) confirm the flag is accepted but tasks remain session‑only.
- **Background task autonomous API calls** with permission bypass ([#39027](https://github.com/anthropics/claude-code/issues/39027)) raises security concerns for agent workflows.
- **Windows‑specific freezes** ([#57242](https://github.com/anthropics/claude-code/issues/57242)) and **unlimited Node.js process spawning** from `preview_start` ([#59602](https://github.com/anthropics/claude-code/issues/59602)) show platform stability gaps.
- **VSCode extension crash** on malformed tool inputs ([#59101](https://github.com/anthropics/claude-code/issues/59101)) indicates insufficient input validation error handling.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest – 2026-05-16

## Today’s Update Brief
Activity remained high with three alpha releases shipped (v0.131.0-alpha.19 through .22) and over 50 issues and 50 PRs updated in the last 24 hours. The community is heavily engaged around the new remote control feature—both requesting enhancements and reporting authorization and connectivity bugs—while the maintainer team pushed multiple stacks of PRs improving remote session sync, permission profiles, and the Windows sandbox.

## Releases
Three **rust-v0.131.0-alpha** releases were published in the last 24 hours (alpha.19, alpha.21, alpha.22). No detailed changelog was provided beyond the version bump. These are likely iterative patches on the CLI and app-server before a stable 0.131.0.

## Hot Issues (Top 10 by Activity)

1. [#9224 – Codex Remote Control](https://github.com/openai/codex/issues/9224) [CLOSED]
   *401 👍, 54 comments.* The top-voted feature request asks for the ability to remotely control the Codex CLI running on a desktop PC from the ChatGPT app (Codex tab). Closed after a discussion revealed that the feature is now in active development (see PRs below).

2. [#11626 – CLI: Add /rewind checkpoint restore](https://github.com/openai/codex/issues/11626) [OPEN]
   *130 👍.* Proposes a native `/rewind` command that reverts both conversation state and applied workspace edits from a selected checkpoint. Current Esc-rewind only handles conversation history.

3. [#22696 – Failed to authorize remote control](https://github.com/openai/codex/issues/22696) [OPEN]
   *46 👍, 27 comments.* A widespread bug after updating to Codex 26.513.20950: setting up “Control from ChatGPT” fails with an authorization error. Affects Pro users on macOS. Maintainers are investigating.

4. [#22694 – Computer Use has undocumented hard requirement on macOS 26.0](https://github.com/openai/codex/issues/22694) [OPEN]
   *7 👍.* Blindly linking to a missing Swift symbol (`swift_task_addPriorityEscalationHandler`). Users on older macOS versions (e.g., macOS 25.x) cannot use the Computer Use runtime despite having it installed.

5. [#21218 – VS Code Codex extension DNS failures: Could not resolve any host name](https://github.com/openai/codex/issues/21218) [OPEN]
   *11 comments.* Enterprise users on macOS report the VS Code extension cannot resolve hostnames intermittently. Possibly related to custom network configurations.

6. [#20741 – Desktop project chat histories disappeared after recent update](https://github.com/openai/codex/issues/20741) [OPEN]
   *8 comments.* Users on Pro found all project chat histories wiped after upgrading to version 26.429.30905. No backup or migration path was provided.

7. [#18018 – Codex keeps running after weekly limit is reached, without consuming remaining credits](https://github.com/openai/codex/issues/18018) [CLOSED]
   *5 comments.* Billing inconsistency: the weekly quota is exhausted but the tool continues to execute, yet remaining credits are not consumed. Marked closed, likely fixed in a later release.

8. [#17193 – Long threads can jump back to top while scrolling downward](https://github.com/openai/codex/issues/17193) [OPEN]
   *3 comments.* UX bug: when scrolling to the latest messages in very long conversations, the viewport resets to the top. Makes reviewing recent output very difficult.

9. [#15521 – Mysterious Exec usage eats entire 5h and weekly budget in 30 minutes upon reset](https://github.com/openai/codex/issues/15521) [CLOSED]
   *3 comments.* A user reports that after a weekly reset, “Exec” usage drains their entire budget in under an hour with no observability. Likely related to subagent or background task billing.

10. [#22752 – Plugins no longer load correctly (app regression)](https://github.com/openai/codex/issues/22752) [OPEN]
    *4 👍.* In Codex Desktop 26.513.20950, typing `@` to invoke plugins shows “loading forever”. Blocks all plugin-based workflows including browser use and data analysis.

## Key PR Progress (Top 10 by Scope)

1. [#22879 – fix: Prevent /review crash when entering Esc on steer message](https://github.com/openai/codex/pull/22879)
   Fixes a crash (#22815) when pressing Esc during a `/review` turn. Steering is not supported in review mode; this PR adds a safe early exit.

2. [#22510 – [3 of 3] Sync TUI next-turn state](https://github.com/openai/codex/pull/22510)
   Completes a three‑PR stack to keep remote TUI clients in sync when model, plan mode, or permissions change on another client. Wire up app‑server notifications.

3. [#22509 – [2 of 3] Add app-server next-turn state API](https://github.com/openai/codex/pull/22509)
   Introduces a dedicated v2 API for updating a thread’s next‑turn defaults without starting a new turn.

4. [#22508 – [1 of 3] Add core next-turn state plumbing](https://github.com/openai/codex/pull/22508)
   Adds core/session hooks to allow the app server to store and retrieve turn context without forcing a turn.

5. [#22769 – exec-server: support auth-backed remote executor registration](https://github.com/openai/codex/pull/22769)
   Replaces a registry‑issued credential with normal Codex auth for remote executor registration, simplifying the setup flow.

6. [#22923 – windows-sandbox: drive write roots from resolved permissions](https://github.com/openai/codex/pull/22923)
   Third PR in the Windows sandbox permission migration: moves workspace write resolution from legacy `SandboxPolicy` to `PermissionProfile`.

7. [#22929 – Harden CLI rate limit window labels](https://github.com/openai/codex/pull/22929)
   Fixes rate‑limit labels using actual returned window duration instead of assuming “5h primary / weekly secondary”, preventing confusing status output.

8. [#22782 – Add SubagentStart hook](https://github.com/openai/codex/pull/22782)
   New hook that fires when a thread‑spawned subagent is created, before its first model request. Allows custom logic per agent type.

9. [#22878 – Improve `codex remote-control` CLI UX](https://github.com/openai/codex/pull/22878)
   Makes `codex remote-control` a foreground command by default: waits for readiness, prints machine name, stays alive until Ctrl‑C. Retains daemon mode via flag.

10. [#22679 – Support audio input](https://github.com/openai/codex/pull/22679)
    Adds `InputModality::Audio` and converts MCP audio blocks into structured tool‑output for audio‑capable models. Gated by model capabilities.

## Feature Request Clusters

- **Remote Control & Connectivity**
  Multiple requests and follow‑ups around the new remote control feature: better key authentication on SSH hosts ([#22857](https://github.com/openai/codex/issues/22857)), proxy support for remote‑control pairing ([#22851](https://github.com/openai/codex/issues/22851)), and iOS pairing reliability ([#22750](https://github.com/openai/codex/issues/22750), [#22831](https://github.com/openai/codex/issues/22831)).

- **Checkpoint / Rewind**
  The `/rewind` feature ([#11626](https://github.com/openai/codex/issues/11626)) continues to attract support. Advocates want it to revert both conversation context and applied file edits.

- **Custom Model Providers**
  A request to integrate NVIDIA NIM as an official inference provider ([#19145](https://github.com/openai/codex/issues/19145)) was closed, but the topic signals user interest in self‑hosted / enterprise LLM backends.

- **Windows Usability**
  Configurable agent shell (PowerShell vs Git‑Bash) ([#16717](https://github.com/openai/codex/issues/16717)) and sandbox permission improvements (multiple PRs) reflect ongoing Windows platform maturity.

- **Hooks & Skills**
  Users want skill‑scoped model/reasoning‑effort overrides ([#22908](https://github.com/openai/codex/issues/22908)) and a trusted way for local IDE wrappers to install hooks ([#21615](https://github.com/openai/codex/issues/21615)). The addition of `SubagentStart`/`SubagentStop` hooks (PRs [#22782](https://github.com/openai/codex/pull/22782), [#22873](https://github.com/openai/codex/pull/22873)) moves in this direction.

## Developer Pain Points

- **Remote Control Authorization** – The top bug (#22696) frustrates many users trying to set up the new mobile‑to‑desktop bridge. Pairing often stalls at “Waiting for desktop” or fails with unclear auth errors.

- **Unexpected Data Loss** – Chat histories vanishing after an update (#20741) erodes trust in the desktop app’s persistence. Side‑chat failures (#22934) and viewport jumps (#17193, #22936) also impair daily workflow.

- **Platform‑Specific Bugs** – Computer Use failing on older macOS (#22694), VS Code extension DNS failures (#21218), and Browser Use broken on Windows (#21618) create uneven user experiences across operating systems.

- **Billing Confusion** – Exec usage draining budgets without explanation (#15521) and rate‑limit labels that lie (#18018, though closed) make cost monitoring opaque. The new rate‑limit label hardening PR (#22929) should help.

- **Plugin / Extension Reliability** – Plugins failing to load (#22752) and the iOS app showing spurious “run failed” messages (#22693) indicate regressions in the latest app release (26.513.20950). Several reports ask for better error observability.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-16

## Today's Update Brief

Activity remains high with **50 issues** and **50 pull requests** updated in the last 24 hours. A new nightly release (`v0.44.0-nightly.20260515`) shipped two notable improvements: exposing RAG snippet logs for debugging and fixing credential conflicts on enterprise gateways. Community discussion continues to concentrate on agent reliability, subagent behavior, and the growing memory system issue cluster.

## Releases

**v0.44.0-nightly.20260515.g928a311fb** — Nightly release containing two changes:
- **feat(core):** Expose RAG snippets to local log file for debugging ([#27016](https://github.com/google-gemini/gemini-cli/pull/27016)) — Provides developers in agent-related workflows with structured visibility into retrieval-augmented generation steps.
- **fix(acp/auth):** Prevent conflicting credentials on enterprise gateways and support optional API keys natively ([commit](https://github.com/google-gemini/gemini-cli/commit/g928a311fb)) — Addresses authentication collisions in enterprise deployments with multiple gateway configurations.

## Hot Issues (10 noteworthy)

**1. Generalist agent hangs forever** ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)) — `p1`, `kind/bug`
Affected workflow: Any task that triggers subagent delegation (e.g., folder creation). The generalist agent hangs indefinitely when deferred to. The workaround is instructing the model not to use subagents.
- 7 comments, 7 👍 — High community signal; this is a primary blocker for production use.

**2. Subagent recovery after MAX_TURNS reports GOAL success** ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)) — `p1`, `kind/bug`
Affected workflow: `codebase_investigator` reports `status: "success"` despite hitting turn limits before doing real work. Misleads users into thinking analysis completed.
- 6 comments, 2 👍

**3. AST-aware file reads, search, and mapping EPIC** ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745)) — `p2`, `kind/feature`, `kind/customer-issue`
Affected workflow: Codebase navigation and method-boundary detection. Proposes AST-aware tools to reduce misaligned reads, minimize token waste, and improve search precision.
- 7 comments, 1 👍 — Several sub-issues linked.

**4. Robust component-level evaluations** ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353)) — `p1`, `kind/customer-issue`
Affected workflow: Quality assurance for agent behavior. Follow-up to #15300; currently 76 behavioral eval tests run across 6 Gemini model configurations.
- 6 comments

**5. Gemini does not use skills and sub-agents enough** ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)) — `p2`, `kind/bug`
Affected workflow: Custom skill adoption. Users define "gradle" and "git" skills but the model rarely invokes them autonomously. Only works under explicit instruction.
- 6 comments

**6. Shell command execution hangs with "Waiting input"** ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)) — `p1`, `kind/bug`
Affected workflow: Post-command execution. Simple CLI commands complete but Gemini remains stuck showing "Awaiting user input." Extremely reproducible.
- 3 comments, 3 👍

**7–10. Memory system bugs cluster** — A single author (SandyTao520) filed four related issues covering Auto Memory logging, inbox patch handling, retry loops, and overall quality:
- **Redaction & logging** ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)) — Secrets sent to model context before redaction; also excessive logging.
- **Invalid inbox patches** ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)) — Silently skipped patches not surfaced or quarantined.
- **Low-signal retry loops** ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)) — Sessions not marked as processed, retried indefinitely.
- **Tracking issue** ([#26516](https://github.com/google-gemini/gemini-cli/issues/26516)) — Aggregates all memory quality improvements.
- Each at 2 comments; collectively indicates a targeted cleanup effort for the Auto Memory subsystem.

## Key PR Progress (10 important)

**1. AfterAgent hook text duplication fix** ([#27096](https://github.com/google-gemini/gemini-cli/pull/27096)) — `area/extensions`
Fixes duplicate text and extra spaces in `AfterAgent` hook payloads. Ensures extensions receive clean model output. Filed by community contributor AkaCoder404.

**2. OAuth model routing fix** ([#27131](https://github.com/google-gemini/gemini-cli/pull/27131)) — `p1`, `area/core`, `bot-fix`
Bot-generated fix routing personal OAuth users to stable model aliases to prevent 404/400 errors.

**3. Full-access approval controls** ([#27026](https://github.com/google-gemini/gemini-cli/pull/27026)) — `p3`, `area/agent`, maintainer-only
Adds `--full-access` flag as preferred privileged approval mode, deprecating `--yolo`. Community-facing copy updated.

**4. WSL path handling** ([#27025](https://github.com/google-gemini/gemini-cli/pull/27025)) — `p1`, `area/core`, maintainer-only
Translates Windows drive-letter paths to WSL mount paths when running under WSL. Preserves non-WSL behavior.

**5. MCP sampling handler (1/3)** ([#27130](https://github.com/google-gemini/gemini-cli/pull/27130)) — `p2`, `area/agent`
First PR of a 3-part series for MCP client sampling support. Adds pure core handler only — no UI or client wiring yet.

**6. Issue-fixer skill for CLI Bot** ([#26951](https://github.com/google-gemini/gemini-cli/pull/26951)) — `feat(bot)`
Implements `issue-fixer` skill and mandate selection (`auto`, `issue-fixer`, `metrics`, `interactive`) for `workflow_dispatch` triggers. PR by @gundermanc.

**7. Custom tools for Vertex auth** ([#27126](https://github.com/google-gemini/gemini-cli/pull/27126)) — `p2`, `area/agent`
Fixes `custom-tools model` flag being limited to Gemini API key auth. Now resolves `pro`/`auto` correctly for Vertex sessions.

**8. Sandbox stdin duplication fix** ([#27127](https://github.com/google-gemini/gemini-cli/pull/27127)) — `p2`, `area/non-interactive`
Prevents double user messages when sandbox mode relaunches CLI with piped stdin. Addresses #18978.

**9. Clickable approval mode indicator** ([#27091](https://github.com/google-gemini/gemini-cli/pull/27091)) — `p2`, `area/core`, `bot-fix`
Allows switching approval mode by clicking the indicator in the UI. Implements feature request #27035.

**10. Keychain credential idempotent deletion** ([#27123](https://github.com/google-gemini/gemini-cli/pull/27123)) — `p1`, `area/core`
Makes `deleteCredentials()` treat missing credentials as already deleted. Fixes crash on re-deletion.

## Feature Request Clusters

**1. AST-aware codebase tooling** — Three linked issues ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747)) request AST-aware file reads, search, and codebase mapping to improve precision and reduce turn waste. References `tilth`/`glyph` tools and `AST grep` as starting points.

**2. Agent self-awareness and skill usage** — Multiple requests for the agent to:
- Provide accurate CLI flags and hotkey guidance ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432))
- Periodically recommend creation or update of skills based on trajectory ([#21421](https://github.com/google-gemini/gemini-cli/issues/21421))
- More autonomously invoke existing custom skills ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968))

**3. Subagent control and backgrounding** — Users request:
- Backgrounding local subagents with Ctrl+B ([#22741](https://github.com/google-gemini/gemini-cli/issues/22741))
- Subagent eval strategies for regression testing ([#22601](https://github.com/google-gemini/gemini-cli/issues/22601))
- Utilizing generalist agent for build-fix workflows ([#22602](https://github.com/google-gemini/gemini-cli/issues/22602))

## Developer Pain Points

**Agent hangs and stalls** — Two `p1` bugs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409) generalist agent hang, [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) shell command stuck on "Waiting input") are generating the most community upvotes and comments. Both severely impact usability for CI and production workflows.

**Configuration and subagent compliance** — Issues report subagents running despite being disabled in config ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)) and browser agent ignoring `settings.json` overrides ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)). Users expect explicit configuration to be respected.

**Memory system reliability** — A tight cluster of 4 issues ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26516](https://github.com/google-gemini/gemini-cli/issues/26516)) from a single reporter highlights systemic problems with Auto Memory: secret exposure risk, silent patch failures, infinite retry loops, and patch accumulation. These appear to be surfacing during internal testing rather than broad community frustration yet.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-16

## Today’s Update Brief
Two patch releases shipped (v1.0.49-0 and v1.0.49-1), adding experimental MCP server search, a “None” reasoning effort option, and automatic MCP source loading in prompt mode. Activity remains high with 50 issues updated in the last 24 hours; no pull requests were updated. Notable bug reports include model access policy errors, MCP connection pool timeouts, and macOS-specific delays.

## Releases
- **v1.0.49-1** ([release link](https://github.com/github/copilot-cli/releases/tag/v1.0.49-1))
  *Improved*: Prompt mode (`-p`) now automatically loads workspace MCP sources when the current folder is already trusted.

- **v1.0.49-0** ([release link](https://github.com/github/copilot-cli/releases/tag/v1.0.49-0))
  *Added* (experimental):
  - `/mcp search` command to search and install MCP servers from a registry.
  - Tool search with deferred loading for MCP and external tools.
  - “None” reasoning effort option to disable model reasoning in the reasoning effort picker.
  - `COPILOT_PLUGIN_DIR_ONLY` environment variable (details cut off in source).

## Hot Issues (10 selected)

1. **#3101** – [CLOSED] Enterprise policy denial (`access denied by Copilot policy`)
   *Impact*: Users with Copilot business/enterprise accounts cannot load models after updating to v1.0.40+.
   *Reaction*: 6 comments, 3 👍. Likely a policy configuration mismatch that the team has resolved.
   [Link](https://github.com/github/copilot-cli/issues/3101)

2. **#3080** – [CLOSED] `reasoning_effort=high` rejected for `claude-opus-4.7-high`
   *Impact*: CLI sends `reasoning_effort: "medium"` to a model that only supports `high`, causing 400 errors. Model effectively unusable.
   *Community*: 3 comments, 2 👍.
   [Link](https://github.com/github/copilot-cli/issues/3080)

3. **#3318** – [OPEN] Copilot suddenly refusing valid requests
   *Impact*: Users report that even simple, safe prompts (e.g., “fix bugs”, “list files”) are rejected, despite clean context. Occurs across recent versions.
   *Status*: 2 comments, 2 👍.
   [Link](https://github.com/github/copilot-cli/issues/3318)

4. **#3257** – [OPEN] HTTP MCP servers fail with `TypeError: fetch failed` after idle period
   *Impact*: CLI reuses dead pooled TCP connections (no FIN/RST). Idle timeouts (60–300 s) cause silent failures on MCP tool calls.
   *Status*: 2 comments.
   [Link](https://github.com/github/copilot-cli/issues/3257)

5. **#3066** – [CLOSED] macOS prerelease model picker hides Opus 4.7 reasoning variants
   *Impact*: `/model` picker only shows base `claude-opus-4.7`, hiding internal/high/xhigh variants even when the account can route to them.
   *Status*: 2 comments, 1 👍.
   [Link](https://github.com/github/copilot-cli/issues/3066)

6. **#2923** – [OPEN] Main agent not receiving work‑completed notifications from sub‑agents
   *Impact*: Multi‑agent orchestration breaks; the main agent never learns that sub‑tasks are done, stalling workflows.
   *Status*: 2 comments.
   [Link](https://github.com/github/copilot-cli/issues/2923)

7. **#1697** – [OPEN] Feature request: session forking (branch a conversation into parallel sessions)
   *Impact*: Users want to split a session at decision points without losing context.
   *Community*: 2 comments, 22 👍 – the highest upvoted open issue.
   [Link](https://github.com/github/copilot-cli/issues/1697)

8. **#3330** – [OPEN] macOS TLS CA certificate call adds 5+ seconds per invocation
   *Impact*: `tls.getCACertificates("system")` iterates all keychain certs synchronously via XPC, causing a noticeable startup delay.
   *Status*: 1 comment.
   [Link](https://github.com/github/copilot-cli/issues/3330)

9. **#3345** – [OPEN] `.github/hooks/*.json` not loaded in non‑interactive (`copilot -p`) mode
   *Impact*: Repository‑level hooks (permissions, notifications) work in interactive mode but are ignored in automated/pipeline use. Filed today.
   *Status*: 0 comments.
   [Link](https://github.com/github/copilot-cli/issues/3345)

10. **#3339** – [OPEN] Quoted strings starting with `/` misinterpreted as file paths
    *Impact*: The path‑access scanner flags shell arguments like `"/usr/bin/env"` as a read/write path, even when the command treats it as literal data. Causes false permission prompts.
    *Status*: 0 comments.
    [Link](https://github.com/github/copilot-cli/issues/3339)

## Key PR Progress
No pull requests were updated in the last 24 hours. The repository’s PR queue is currently empty.

## Feature Request Clusters
The following recurring themes appear across open issues:

- **Session & Context Management**
  - Session forking (#1697, 22 👍) – branch a conversation into parallel threads.
  - Alphanumeric session IDs (#3128) – easier session resumption.
  - Configurable auto‑compaction threshold (#3026) – parity with Claude Code.

- **Plugin & Hook Extensibility**
  - Auto‑update plugins on startup via marketplace flag (#3331).
  - Machine‑level custom slash commands (#3343).
  - `notification` hooks that can cancel the default notification (#3341).

- **UI/UX & Input**
  - Distinguish “agent working” vs “awaiting input” in the title bar (#3327).
  - Allow model switching while editing a prompt without losing the draft (#3138).
  - Input box height regression in latest update (#3340).

- **Non‑Interactive / Automation**
  - Hooks not loaded in `copilot -p` mode (#3345).
  - Extensions not loaded with `--autopilot` flag (#3124).
  - `copilot feedback` command (#3116).

## Developer Pain Points
1. **Model Access & Policy** – Enterprise policy denials (#3101), reasoning effort incompatibility (#3080), and sudden refusal of valid prompts (#3318) create inconsistent model availability.
2. **macOS‑Specific Issues** – 5‑second startup delay due to TLS cert loading (#3330), broken image paste (#3104), and backspace‑on‑image‑token behavior (#3105) degrade the experience on Apple hardware.
3. **Networking & MCP** – Stale HTTP connection pools for MCP servers (#3257) and lack of Kerberos proxy support (#523) hinder enterprise and cloud deployments.
4. **Agent Orchestration** – Sub‑agent notifications (#2923) and stranded queued messages (#3344) break multi‑step workflows.
5. **Permission False Positives** – Quoted strings with `/` misclassified as file paths (#3339) and permission‑scanner false alarms frustrate developers using shell commands.
6. **Inconsistent Non‑Interactive Mode** – Hooks (#3345) and extensions (#3124) not loading in `-p`/`--autopilot` modes reduce reliability for CI/CD usage.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-16

## Today’s Update Brief
Today saw moderate community activity with no new releases but a concentrated wave of pull requests (10) and issues (11) focused on **Hook system fixes**, **shell UI ergonomics**, and **security hardening**. A critical K2.6 model reliability issue (#2077) continues unresolved, while multiple contributors submitted patches for the hook payload pipeline, auto-updater security, and shell keybindings, signaling active community-driven development.

---

## Releases
**None** in the past 24 hours.

---

## Hot Issues

1. **#2077 – [Critical] K2.6 model overloaded under normal load**
   *Impact*: Users with Allegretto membership report K2.6 is effectively unusable due to constant retries/timeouts. 14 comments indicate widespread frustration. No maintainer resolution posted.
   [Issue](https://github.com/MoonshotAI/kimi-cli/issues/2077) | 👍: 1

2. **#2252 – [Enhancement] Add `/goal` command & allow coding plan import into Codex**
   *Impact*: Bilingual request (CN/EN) asking for parity with Claude Code’s `/goal` and Codex integration. 9 comments with community support. No maintainer response.
   [Issue](https://github.com/MoonshotAI/kimi-cli/issues/2252) | 👍: 1

3. **#1117 – Shell tool lacks interactive input support (long-standing)**
   *Impact*: Commands like `npm init`, `read`, `input()` block indefinitely until timeout. Filed Feb 12, still open. Only 2 comments, but the underlying limitation affects any interactive script workflow.
   [Issue](https://github.com/MoonshotAI/kimi-cli/issues/1117) | 👍: 0

4. **#2304 – UserPromptSubmit Hook silently discards stdout**
   *Impact*: Hook output that should inject prompt enhancements is silently dropped, making the hook system effectively broken for prompt modification. Filed today.
   [Issue](https://github.com/MoonshotAI/kimi-cli/issues/2304) | 👍: 0

5. **#2254 – [Feat] Support Shift+Enter for newlines**
   *Impact*: Users want parity with Ctrl-J / Alt-Enter for inserting newlines. Simple ergonomic request with 1 comment.
   [Issue](https://github.com/MoonshotAI/kimi-cli/issues/2254) | 👍: 1

6. **#2273 – [Security] Auto-updater downloads + executes binary without integrity verification**
   *Impact*: Critical security concern — `tarfile.extractall` is unfiltered, no SHA256/signature check, creating a supply chain risk. 1 comment but high severity.
   [Issue](https://github.com/MoonshotAI/kimi-cli/issues/2273) | 👍: 0

7. **#2310 – Shell tool timeout does not terminate child processes**
   *Impact*: When a shell command times out, the child process continues running in the background, potentially causing resource leaks. Filed today on Linux/WSL2.
   [Issue](https://github.com/MoonshotAI/kimi-cli/issues/2310) | 👍: 0

8. **#2307 – [Enhancement] Include LLM response and stop reason in Stop hook payload**
   *Impact*: Current Stop hook payload is minimal; hooks cannot access the actual response. Requested for downstream logging/monitoring use cases.
   [Issue](https://github.com/MoonshotAI/kimi-cli/issues/2307) | 👍: 0

9. **#2306 – APC protocol session history not displayed**
   *Impact*: Both `kimi acp` (Zed integration) and `kimi web` (browser) lose session history on restart. Filed today with detailed reproduction steps.
   [Issue](https://github.com/MoonshotAI/kimi-cli/issues/2306) | 👍: 0

10. **#2303 – UserPromptSubmit hook receives empty prompt from shell UI**
    *Impact*: Another hook payload bug — when input comes from the shell UI (not CLI), the hook receives an empty string instead of the user’s prompt. Filed on macOS.
    [Issue](https://github.com/MoonshotAI/kimi-cli/issues/2303) | 👍: 0

---

## Key PR Progress

1. **#2305 – fix(hook): capture input text instead of empty string in UserPromptSubmit**
   Direct fix for #2303. Changes payload generation to include actual user input. Merged/commented by @AkaCoder404.
   [PR](https://github.com/MoonshotAI/kimi-cli/pull/2305)

2. **#2308 – feat(hook): include response and stop_reason in Stop hook payload**
   Implements #2307. Enriches Stop hook with LLM response data. Also by @AkaCoder404.
   [PR](https://github.com/MoonshotAI/kimi-cli/pull/2308)

3. **#2302 – feat(shell): add Shift+Enter as newline shortcut**
   Implements #2254. Updates keybinding and toolbar hint in both EN and CN i18n. By @ktwu01.
   [PR](https://github.com/MoonshotAI/kimi-cli/pull/2302)

4. **#2301 – feat(cli): add non-interactive `kimi usage` command**
   Resolves #2169. Adds `kimi usage` with Rich panel output and `--json` for CI/scripting. Reuses `/usage` logic. By @binichallein.
   [PR](https://github.com/MoonshotAI/kimi-cli/pull/2301)

5. **#2300 – fix(shell): hide context usage until warning threshold (80%)**
   Resolves #2291. Stops rendering the context meter until it reaches 80%, reducing visual noise. By @binichallein.
   [PR](https://github.com/MoonshotAI/kimi-cli/pull/2300)

6. **#2299 – docs: clarify quota estimates for usage limits**
   Resolves #2278. Clarifies that membership request counts are approximate, points users to `/usage` for truth. By @binichallein.
   [PR](https://github.com/MoonshotAI/kimi-cli/pull/2299)

7. **#2297 – fix(install.sh): source uv env script after upstream installer**
   Fixes a bug where `uv` binary isn’t in PATH after install because upstream `install.sh` doesn’t export it. By @ktwu01.
   [PR](https://github.com/MoonshotAI/kimi-cli/pull/2297)

8. **#2298 – fix(update): set filter="data" on tarfile.extractall**
   Partial fix for #2273. Adds defense-in-depth on the extractor to prevent path traversal (does not address SHA256 signing). By @ktwu01.
   [PR](https://github.com/MoonshotAI/kimi-cli/pull/2298)

9. **#2296 – docs(readme): add Prerequisites subsection to Development**
   Lists required tools (`make`, `uv`, Python) for new contributors. By @ktwu01.
   [PR](https://github.com/MoonshotAI/kimi-cli/pull/2296)

10. **#2295 – docs(readme): surface install command in Getting Started**
    Moves the one-liner `curl ... | bash` into the Getting Started section to reduce friction for first-time users. By @ktwu01.
    [PR](https://github.com/MoonshotAI/kimi-cli/pull/2295)

---

## Feature Request Clusters

**Hook System Expansion**
Multiple issues (#2303, #2304, #2307) and corresponding PRs (#2305, #2308) indicate strong demand for richer hook payloads. Users want to: (1) access actual user input in UserPromptSubmit, (2) capture LLM responses in Stop hooks, and (3) avoid silent failure when hook stdout is discarded. This cluster suggests the hook system is being actively explored for integration with external tools.

**Shell Tool & Input Ergonomics**
Requests center on: interactive input support (#1117), Shift+Enter for newlines (#2254 → PR #2302), and proper child process lifecycle on timeout (#2310). These all relate to making shell interactions feel more natural and less error-prone.

**Cross-Platform Integration & Interoperability**
Issue #2252 asks for `/goal` command parity with competitors and Codex integration; #2306 requests ACP session history fixes for Zed/browser. Both reflect a desire to use Kimi CLI within broader workflows and toolchains.

---

## Developer Pain Points

**Model Reliability & Stability** — Issue #2077 (K2.6 overload) remains open with 14 comments and no resolution, indicating a persistent production pain point for paying users.

**Security & Trust** — Issue #2273 on auto-updater integrity, combined with the partial fix in PR #2298 (filter but no signing), highlights community concern about supply chain security. The maintainers have not yet addressed the core SHA256 verification request.

**Onboarding Friction** — Multiple documentation PRs (#2295, #2296) from community contributors explicitly tackle unclear installation and development setup instructions, suggesting the current README creates unnecessary friction for both users and potential contributors.

**Ambiguous Quota & Configuration** — Issues #2252 (coding plan import) and #2299 (quota clarity) reflect confusion about how membership, usage limits, and plan export work, with users seeking better docs and cross-platform portability.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest – 2026-05-16

## Today’s Update Brief
Version 1.15.0 was released, adding an Effect‑based core event system and fixing two tool‑loading edge cases. Issue activity remains high (50 items updated in 24h) with the memory megathread continuing as the most commented topic, while several TUI and slash‑command bugs drew community attention. Ten pull requests were advanced, including a native LLM runtime preview and a desktop free‑limit dialog.

## Releases
**v1.15.0** – [Release notes](https://github.com/anomalyco/opencode/releases/tag/v1.15.0)
- **Core:** New Effect‑based event system for more reliable event delivery across sessions and integrations.
- **Bugfixes:**
  - Invalid exports in custom tool modules no longer fail tool loading (silently ignored).
  - Project instruction lookup errors are now swallowed so sessions continue loading.

## Hot Issues
1. **[Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)** – #20695 (77 comments, 54 👍)
   Central collection point for scattered memory reports. Maintainers ask for heap snapshots, not LLM‑generated solutions.
2. **[Official VS Code Extension](https://github.com/anomalyco/opencode/issues/11176)** – #11176 (17 comments, 81 👍)
   Request to make OpenCode available as a native VS Code extension. Very high community support.
3. **[Agent Marketplace](https://github.com/anomalyco/opencode/issues/7467)** – #7467 (15 comments, 9 👍)
   Proposal for a GitHub‑based marketplace to share and discover agents.
4. **[Terminal Flooded with Mouse Escape Sequences](https://github.com/anomalyco/opencode/issues/26198)** – #26198 (15 comments, 2 👍)
   Mouse tracking is not disabled on exit, causing raw SGR sequences to leak into the terminal after a process runs.
5. **[`/exit` Missing in Autocomplete](https://github.com/anomalyco/opencode/issues/26549)** – #26549 (14 comments, 22 👍)
   Slash commands `/exit`, `/quit`, `/q` no longer appear in the prompt autocomplete dropdown (v1.14.42). Work in command palette.
6. **[Alpine Linux (musl) Crash](https://github.com/anomalyco/opencode/issues/27589)** – #27589 (13 comments, 2 👍)
   Regression in 1.14.50: `getcontext` symbol not found on musl. Version 1.14.48 was fine.
7. **[Keybinds Messed Up on Dvorak](https://github.com/anomalyco/opencode/issues/27096)** – #27096 (11 comments)
   After 1.14.48, keyboard scanning uses scancodes instead of keycodes, breaking Emacs‑style binds for non‑QWERTY layouts.
8. **[Read Tool Cannot Pass Images to Vision Models](https://github.com/anomalyco/opencode/issues/15728)** – #15728 (9 comments, 6 👍)
   The `Read` tool fails to convert image data into visual input format for models like qwen3.5‑plus.
9. **[Automatic Scroll Disrupts Reading](https://github.com/anomalyco/opencode/issues/7659)** – #7659 (8 comments, 12 👍)
   Chat window automatically scrolls down while agent is generating, making it hard to read earlier output.
10. **[Was `/exit` Removed?](https://github.com/anomalyco/opencode/issues/26684)** – #26684 (7 comments, 14 👍)
    User reports `/exit` disappeared after updating to 1.14.46.

## Key PR Progress
1. **[Desktop: Add Free Limit + Go Usage Dialogs](https://github.com/anomalyco/opencode/pull/27677)** – #27677 (open)
   Mimics TUI dialogs for desktop clients when free tier or Go usage is exceeded, with a subscription button.
2. **[Native LLM Runtime Preview](https://github.com/anomalyco/opencode/pull/27114)** – #27114 (open, beta)
   Opt‑in native LLM runtime that streams both AI SDK and native providers into a shared `LLMEvent` shape. Includes OpenAI Responses request cache.
3. **[Dialog Prompt Submit Keybind](https://github.com/anomalyco/opencode/pull/27807)** – #27807 (merged)
   Adds a dedicated `dialog.prompt.submit` keybind (default: Return) scoped to the focused textarea, allowing it to be rebound separately from `input_submit`.
4. **[Fix TUI Config Error Display](https://github.com/anomalyco/opencode/pull/27803)** – #27803 (merged)
   Preserves config validation/JSON errors through HTTP as 400s, formats SDK‑wrapped errors in TUI bootstrap with file path and invalid path.
5. **[FFF Search Tools](https://github.com/anomalyco/opencode/pull/27802)** – #27802 (open)
   Implements fff‑style pickers for file search, content search, and directory search in the all‑file‑search operation.
6. **[Prevent Crash on Missing Child Session](https://github.com/anomalyco/opencode/pull/26944)** – #26944 (open)
   Stops the TUI from crashing when a task references a child session that no longer exists.
7. **[ACP Client Input/Output Expose](https://github.com/anomalyco/opencode/pull/11303)** – #11303 (open)
   Fixes ACP client to properly expose tool input and output in the `tool_call` event for integrations like Zed.
8. **[Discover Running Serve Instances from TUI](https://github.com/anomalyco/opencode/pull/27805)** – #27805 (open, beta)
   Adds an Effect‑backed discovery service so the TUI can reuse a healthy discovered server when no explicit target is configured.
9. **[Fix `replaceAll` Edit Tool Literal Replacement](https://github.com/anomalyco/opencode/pull/27804)** – #27804 (open)
   `String.prototype.replaceAll` was interpreting `$&`, `$$` in replacement text; now inserts literally. Includes regression test.
10. **[Local LAN Provider Discovery](https://github.com/anomalyco/opencode/pull/27554)** – #27554 (open)
    Adds `/connect` discovery for local OpenAI‑compatible servers via mDNS, LAN scans, and config files, automatically listing available models.

## Feature Request Clusters
- **VS Code Integration** (#11176) – Strong community desire for an official VS Code extension to run OpenCode natively in the editor.
- **Agent Marketplace** (#7467, #21096) – Sharing and discovering agents via GitHub, with signed receipts for tool calls (protect‑mcp plugin).
- **Privacy & Sharing Defaults** (#17188, #7982) – Multiple requests to change default sharing to “disabled” and require explicit consent.
- **TUI Navigation & Scroll Control** (#7659, #27787, #27791) – Users want to stop automatic scrolling, add a focused navigation mode, and a confirmation dialog before closing with active tasks.
- **Slash Command Discoverability** (#26549, #26684, #26625) – `/exit` and `/timestamps` missing from autocomplete suggests broader slash‑command UX improvements are needed.

## Developer Pain Points
- **Memory issues** – High‑activity megathread (#20695) and a new report of TUI consuming a lot of RAM (#27778). Heap snapshots requested.
- **Terminal state corruption** – Mouse escape sequences not cleaned up (#26198) and terminal not restored on Ctrl+C (#10719).
- **Auto‑scroll during generation** – Multiple reports (#7659, #20600, #27792) that reading is disrupted by unpredictable scrolling while the agent works.
- **Slash command regression** – `/exit` missing from autocomplete (#26549) and removed entirely for some (#26684), causing workflow interruption.
- **Plugin/TUI crashes** – “No renderer found” errors after 1.14.50 for plugins using `@opentui/solid` (#27447, #27756).
- **musl incompatibility** – Alpine Linux broken in 1.14.50 (#27589), blocking container deployments.
- **Keyboard layout issues** – Dvorak users see scancode‑based key handling breaking Emacs binds (#27096).
- **Infinite loops after tool calls** – Agent gets stuck and unresponsive (#26220, #19252).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-16

## Today's Update Brief

Today saw high activity with 4 nightly/preview releases, 33 updated issues, and 50 updated PRs. The community focus continues to sharpen around memory diagnostics and OOM mitigation, with multiple new issues and PRs targeting heap pressure, session scalability, and `/doctor memory` commands. The daemon mode (`qwen serve`) ecosystem also received significant attention with new feature proposals and a debug page PR.

## Releases

Four releases were published today, all carrying the same three changes:

- **v0.15.11-nightly.20260516.435f711e3**
- **v0.15.12-preview.0**, **v0.15.12-preview.1**, **v0.15.12-preview.2**

**Common changelog:**
- `feat(cli)`: Wrap markdown links in OSC 8 escape sequences so wrapped URLs stay clickable in terminals (by @BZ-D, [#4037](https://github.com/QwenLM/qwen-code/pull/4037))
- `fix(core)`: Normalize cumulative OpenAI stream deltas to suffixes (by @chiga0, [#3896](https://github.com/QwenLM/qwen-code/pull/3896))
- `fix(cli)`: Auto-restore on crash or interruption

## Hot Issues

1. **[#3203](https://github.com/QwenLM/qwen-code/issues/3203) — Qwen OAuth Free Tier Policy Adjustment (125 comments)**
   Requests reducing the daily free quota from 1,000 to 100 requests/day and ultimately phasing out the free tier. High community engagement but no maintainer resolution yet.

2. **[#3803](https://github.com/QwenLM/qwen-code/issues/3803) — Daemon mode (qwen serve): proposal & open decisions (12 comments)**
   A comprehensive design proposal organized as a 6-chapter series. Tracked for implementation, with maintainer @wenshao actively involved. The core debate revolves around headless vs. TUI-integrated daemon architecture.

3. **[#3926](https://github.com/QwenLM/qwen-code/issues/3926) — Improve input text editing and selection capability (CLOSED, 9 comments)**
   User reported that `Ctrl+Backspace` to delete a word does not work while `Ctrl+Delete` does, and text selection is missing. Marked `welcome-pr`, indicating maintainers are open to a community contribution.

4. **[#4156](https://github.com/QwenLM/qwen-code/issues/4156) — proposal(serve): qwen --serve (Mode A) — TUI + in-process HTTP daemon (6 comments)**
   Proposes a "Mode A" where the TUI process itself hosts the HTTP daemon, so a local user can simultaneously interact via TUI and receive remote daemon requests. Builds on top of the Stage 1 headless daemon (#3889).

5. **[#3914](https://github.com/QwenLM/qwen-code/issues/3914) — API connected, no errors but fail to fetch (5 comments)**
   User on Windows with Node.js v26 reports that the API key connection succeeds but then fails with "Connection error." Affects developers using OpenRouter as a backend.

6. **[#4167](https://github.com/QwenLM/qwen-code/issues/4167) — cli crashed: Mark-Compact near heap limit (5 comments)**
   A V8 heap OOM crash during a Mark-Compact cycle, with heap at ~2 GB. Another data point in the growing pattern of memory-related crashes in long sessions.

7. **[#4149](https://github.com/QwenLM/qwen-code/issues/4149) — FATAL ERROR: Ineffective mark-compacts near heap limit (5 comments)**
   Similar OOM crash with heap reaching ~4 GB limit. Multiple reporters experiencing this during long agent sessions with large tool outputs.

8. **[#4139](https://github.com/QwenLM/qwen-code/issues/4139) — tool_result's tool id not found (3 comments)**
   User on MiniMax CodePlan model hits an API 400 error where the `tool_id` submitted back does not match any pending `tool_use`. This blocks all subsequent conversations until restart.

9. **[#4178](https://github.com/QwenLM/qwen-code/issues/4178) — Close tool_use↔tool_result invariant at failure point (2 comments)**
   A defense-in-depth proposal to ensure that even when SSE drops mid-stream, the partial `tool_use` is persisted so subsequent `tool_result` submissions succeed.

10. **[#4179](https://github.com/QwenLM/qwen-code/issues/4179) — Add baseline /doctor memory diagnostics (2 comments)**
    Proposes a new `/doctor memory` slash command that emits a compact, paste-safe memory report for OOM debugging. Part of the broader #3000 memory diagnostics initiative.

## Key PR Progress

1. **[#4186](https://github.com/QwenLM/qwen-code/pull/4186) — fix(core): add heap-pressure auto-compaction safety net**
   Adds a safety net in `GeminiChat.tryCompress()`: when V8 heap usage exceeds 70% of the limit, auto-compaction triggers even if the token threshold hasn't been reached. Directly addresses the OOM pattern seen in #4149 and #4167.

2. **[#4180](https://github.com/QwenLM/qwen-code/pull/4180) — feat(cli): add baseline /doctor memory diagnostics**
   Implements `/doctor memory` to collect process memory, V8 heap stats, and handle counts. Includes tests for the formatter and command routing. Parent issue: #4179.

3. **[#4176](https://github.com/QwenLM/qwen-code/pull/4176) — fix(core,cli): close tool_use↔tool_result invariant across all failure paths**
   Fixes an unrecoverable wedge on weak networks (e.g., DeepSeek-V4-Pro via Anthropic protocol). Persists partial `tool_use` during mid-stream SSE drops so `tool_result` submissions succeed. Closes the bug pattern seen in #4139.

4. **[#4151](https://github.com/QwenLM/qwen-code/pull/4151) — feat(cli,core): add Auto approval mode with LLM classifier**
   Adds a fifth approval mode (`auto`) between Auto-Edit and YOLO. An LLM classifier evaluates tool calls in real time, auto-approving safe operations and blocking risky ones (shell, network, file-write).

5. **[#4064](https://github.com/QwenLM/qwen-code/pull/4064) — feat(rewind): add file restoration support to /rewind command**
   Closes #3697 by adding a file-copy backup system (ported from claude-code's `fileHistory`). Users can now roll back files modified by the assistant, not just conversation history.

6. **[#4132](https://github.com/QwenLM/qwen-code/pull/4132) — feat(serve): add /demo debug page for qwen serve daemon**
   Adds a self-contained `/demo` HTML page with a browser-based UI for testing all daemon routes. Requires no external tools or build steps—useful for headless daemon debugging.

7. **[#4124](https://github.com/QwenLM/qwen-code/pull/4124) — feat(cli): add session path status command**
   Adds `/status paths` to print the current session transcript, debug log, plan file, and OpenAI log paths. Helpful for debugging session artifact locations.

8. **[#4097](https://github.com/QwenLM/qwen-code/pull/4097) — feat(telemetry): add interaction span and detailed sensitive attributes**
   Adds a `qwen-code.interaction` span per user-driven turn, with optional rich content attributes (prompts, tool I/O, model output). Aligns with Claude Code's beta tracing capabilities.

9. **[#4133](https://github.com/QwenLM/qwen-code/pull/4133) — feat(skills): add /stuck diagnostic skill for frozen sessions**
   New `/stuck` bundled skill that diagnoses frozen or slow sessions by scanning processes for high CPU, abnormal states (D/T/Z), and checking recent debug logs.

10. **[#4188](https://github.com/QwenLM/qwen-code/pull/4188) — fix: add cache limits to prevent OOM during build/test**
    Implements bounded FIFO eviction for `crawlCache` and `fileReadCache` to prevent unbounded memory growth in parallel Vitest workers. Also adds `--max-old-space-size=3072` to critical npm scripts as a safety net.

## Feature Request Clusters

**Memory diagnostics & OOM prevention** (9 issues): The largest cluster today. Issues #4179, #4181, #4182, #4183, #4184, #4185, #3000 all request `/doctor memory` improvements (structured output, heap snapshots, interpretation layer, large tool-result diagnostics, memory timeline). PRs #4180 and #4186 are already in progress.

**Daemon mode (qwen serve) expansion** (3 issues): #3803 (design proposal), #4156 (Mode A: TUI + daemon), and #4175 (Mode B production roadmap) together indicate strong community interest in making the headless daemon production-ready with combined TUI/HTTP operation.

**Auto-approval & workflow automation** (2 issues): #4151 (Auto mode with LLM classifier) and #3926 (input text editing) both aim to reduce friction in interactive sessions. The Auto mode proposal is a significant escalation from existing approval levels.

**Session persistence & state management** (3 issues): #4173 (stale file-history cleanup), #4178 (tool_use invariant defense), and related PRs show focus on making long-running sessions more robust against failures.

## Developer Pain Points

- **OOM crashes in long sessions**: At least 5 distinct reports (#4149, #4167, #4116, #4185, #3000) describe V8 heap exhaustion during Mark-Compact, especially with large tool outputs and `/compress` operations. This is the single most impactful stability issue today.
- **Weak-network tool_use failures**: The `tool_id not found` error (#4139) and the related `tool_use↔tool_result` invariant gap (#4176, #4178) represent a hard-to-diagnose failure mode that completely wedges sessions on unreliable connections.
- **Windows-specific input conflicts**: Tab key triggers both auto-completion and permission mode simultaneously (#4171); the install script fails in Git Bash (#2774); the `qwen` command behaves differently in PowerShell vs. CMD (#3021).
- **Lack of memory diagnostic tools**: Users struggling with OOM have no built-in way to collect heap snapshots or retention metrics, forcing them to guess at root causes. The `/doctor memory` work is directly responsive to this pain.

</details>