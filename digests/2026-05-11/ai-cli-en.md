# AI CLI Tools Community Digest 2026-05-11

> Generated: 2026-05-11 02:14 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report — 2026-05-11

## 1. Daily Cross-Tool Overview

Today saw patch releases from **OpenCode** (v1.14.46–v1.14.48) and **Qwen Code** (v0.15.10 + nightly), while all other tracked tools published no releases. Community activity was dominated by billing logic defects (Claude Code #53262 — `HERMES.md` routing, closed), session management gaps (Codex, Kimi, Claude Code), and subagent reliability bugs (Gemini, Copilot). Qwen Code experienced a concentrated spike of file‑type misidentification reports (4 issues in 48 hours). Maintainer responsiveness varied: Claude Code closed the critical billing bug promptly, OpenCode and Qwen Code shipped fixes, while several long‑standing regressions (e.g., Gemini’s subagent recovery, Copilot’s hook enforcement) remain open.

## 2. Activity Comparison

| Tool | Issues Updated / Created | Pull Requests | Releases Today |
|------|--------------------------|---------------|----------------|
| **Claude Code** | 50 updated | 2 new PRs (swarm plugin, false‑positive fix) | None |
| **OpenAI Codex** | 50 updated | 50 updated (10 key PRs; 4 merged) | None |
| **Gemini CLI** | 50 updated | 50 updated (10 key PRs; 2 merged) | None |
| **GitHub Copilot CLI** | 27 updated (spam‑filtered) | 1 (spam) | None |
| **Kimi Code CLI** | 8 new issues | 5 active PRs | None |
| **OpenCode** | ~50 updated (est.) | ~50 updated (10 key PRs; 2 merged) | **v1.14.46–v1.14.48** |
| **Qwen Code** | 31 updated | 45 updated (10 key PRs; 1 merged) | **v0.15.10 + nightly** |

## 3. Shared Feature Directions

Requirements appearing across multiple tool communities today:

- **Session continuity & context sharing** — Claude Code (#24798, #11455, #15542, #13843), Codex (#3550, #19910, #8784), Gemini (#22741), Kimi (#2222), OpenCode (#26549). The cluster covers inter‑session handoff, cross‑surface (web→CLI), and deletion/archive controls.

- **Message queuing / non‑interrupting input** — Claude Code (#50246) and Qwen Code (#4021) both propose queueing user messages so an active task is not derailed. Coincides with Kimi’s request for a dedicated `/goal` command (#2218).

- **Cost visibility and billing accuracy** — Claude Code (#53262, #46787, #57719) and Codex (#22040 — rate‑limit polling burns tokens) highlight user distrust in charge tracking. Qwen Code added session billing estimates in PR #3668.

- **Subagent / agent reliability** — Gemini (#22323 — `MAX_TURNS` reported as success), Copilot (#2392 — hooks bypassed in subagents), Claude Code (#28469 — Opus 4.6 regression), and Kimi (#2224 — agent timeout data loss) all report agents masking failures or losing results.

- **MCP / plugin configurability** — Kimi (#2221 — configurable `MAX_OUTPUT_CHARS`), Copilot (#2901 — lazy MCP server loading), Claude Code (#57880 — swarm plugin), and Codex (#21396 — plugin marketplace CLI) indicate growing demand for flexible tool orchestration.

- **File‑type detection & large file handling** — Qwen Code (4 separate bugs: encrypted files, large files, UTF‑8, `.cs`) echoes Copilot’s `posix_spawnp` false‑negative (#2736) and Claude Code’s context compaction (#9796) as infrastructure‑level regressions.

## 4. Differentiation Analysis

- **Claude Code** is centered on **cost & billing** (critical bug closed today) and **session persistence** (context compaction, orphaned processes). Its swarm‑orchestrator PR (#57880) indicates a push toward multi‑agent coordination beyond built‑in Teams.

- **OpenAI Codex** is investing heavily in **multi‑environment tool routing** (PR #20137 merged), **plugin marketplace CLI**, and **goal continuation** (PR #22045). Community heat is on session management (delete/archive) and Windows/WSL compatibility.

- **Gemini CLI** is refining **agent infrastructure**: subagent recovery, memory system bugs, Vertex AI compatibility, and AST‑aware code tools. Its “policy engine” PR (#26540) suggests enterprise security hardening.

- **GitHub Copilot CLI** is struggling with **hook enforcement gaps** (parallel tool calls, subagent bypass) and **silent stalls** (tool‑only turns, premature turn end). Community engagement is low relative to other tools; spam contamination is high.

- **Kimi Code CLI** is focused on **agent timeout handling** and **MCP reliability** (permanent session poisoning with `tool_reference`). WebUI sidebar UX improvements from a single contributor dominate PR activity.

- **OpenCode** is **rapidly shipping** (3 patch releases today) and **modernising its type system** (Effect Schema replacing Zod). The `/exit` command regression (multiple reports) and TUI config schema mismatch are the sharpest pain points.

- **Qwen Code** is battling a **file‑type detection regression** (four distinct binary‑misidentification bugs in 48 hours) while advancing infrastructure: an HTTP daemon (`qwen serve`), structured output via `--json-schema`, and cross‑session prompt caching.

## 5. Community Activity Notes

- **Highest raw activity**: Claude Code, Codex, and Gemini each report “50 issues updated” — all have sustained high engagement. Qwen Code (31 issues, 45 PRs) is also highly active.

- **Release velocity**: OpenCode (3 patches in 24 hours) and Qwen Code (2 patches) are shipping fixes fastest. No other tool released today.

- **Maintainer responsiveness**: Claude Code closed the critical billing bug (#53262) on the same day it was reported. Codex merged four PRs (markdown tables, multi‑env routing, CI stability). OpenCode merged two PRs. Qwen Code closed several file‑type issues. Gemini merged the `/fork` command (#22760) and CI env scrubbing (#26838). Copilot and Kimi had no merged PRs.

- **Notable open regressions**: Opus 4.6 quality regression in Claude Code (#28469) remains open and accumulating comments. Gemini’s subagent recovery (#22323) and `save_memory` tool regression (#26563) are P1‑flagged but unmerged. Copilot’s silent‑turn stall (#3239) has no maintainer response yet.

## 6. Evidence‑Backed Observations

1. **Billing and cost transparency is a cross‑tool trust issue.** Claude Code’s `HERMES.md` bug (204👍) and orphaned process billing (#46787), combined with Codex’s idle polling burning tokens (#22040), show that users cannot rely on current cost accounting. No tool has a comprehensive spend‑cap or real‑time dashboard in place.

2. **Session continuity remains the single largest unmet demand.** Six tools have active issues for session handoff, deletion, cross‑surface sync, or resumption (Claude Code, Codex, Gemini, Kimi, OpenCode, Qwen Code). The combined community upvotes (over 300 across identified issues) dwarf any other feature cluster.

3. **Agent reliability defects are masked by success‑reporting.** Gemini’s subagent reports `MAX_TURNS` as success (#22323), Copilot’s preToolUse hooks silently bypassed (#2893), Claude Code’s Opus 4.6 memory loss (#28469), and Kimi’s agent timeout still completing work (#2224) all share a pattern: the tool indicates success even when the agent has failed, leaked context, or lost results. This erodes user trust in autonomous operation.

4. **File‑type detection and execution infrastructure is fragile across tools.** Qwen Code’s four binary‑misidentification bugs, Copilot’s `posix_spawnp` false‑negative (#2736), and Gemini’s shell hang after command completion (#25166) all point to basic I/O and process‑handling regressions that block core editing and shell‑execution workflows.

5. **Plugin/MCP ecosystems are growing but lack standardisation.** Claude Code’s swarm plugin (community‑built), Codex’s plugin marketplace CLI, Copilot’s lazy‑loading request, and Kimi’s configurable output limits all demonstrate demand for richer tool integration — but each tool defines its own plugin model, and cross‑tool compatibility is absent.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-05-11

## Today's Update Brief
No new releases were published in the last 24 hours. Community activity remains high, with 50 issues updated; the top story is a critical billing bug (#53262) where the string `HERMES.md` in git commit messages silently routes API requests to extra usage billing instead of included plan quota, triggering 91 comments and over 200 👍 reactions. Two new pull requests landed, including a swarm orchestrator plugin and a false-positive fix for the security reminder hook.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **[#53262 – HERMES.md in git commit messages causes requests to route to extra usage billing instead of plan quota](https://github.com/anthropics/claude-code/issues/53262)**
   *Labels: bug, has repro, platform:macos, area:cost* | 91 comments | 204 👍 | **CLOSED**
   **Affected workflow:** Any git repository whose recent commit history contains the case-sensitive string `HERMES.md` will cause Claude Code to charge extra usage credits instead of using the Max plan’s included 20x allowance. One reporter burned $200 in extra usage while their plan capacity sat untouched.
   **Impact:** Billing logic leak — seemingly a parsing issue in cost routing. Community reaction is strong (closed today, likely fixed).

2. **[#28469 – Opus 4.6 comprehensive regression: loops, memory loss, ignored instructions](https://github.com/anthropics/claude-code/issues/28469)**
   *Labels: bug, platform:windows, area:model, area:core* | 22 comments | 17 👍 | **OPEN**
   **Affected workflow:** A daily professional user (8+ hrs/day) reports severe quality drop since Opus 4.6 (Feb 5, 2026): loops, memory loss, ignored instructions. Reproducible examples provided.
   **Impact:** Core model regression affecting all professional users. High engagement suggests widespread impact.

3. **[#6527 – `ask` list is ignored when "Bash" is in allow list](https://github.com/anthropics/claude-code/issues/6527)**
   *Labels: bug, platform:linux, area:tools, area:security* | 21 comments | 17 👍 | **OPEN**
   **Affected workflow:** When a user adds "Bash" to the permission allow list, the `ask` list (commands requiring confirmation) is completely bypassed, undermining the intended security model.
   **Impact:** Permission model bug — dangerous for users who rely on granular controls.

4. **[#9796 – Context compaction erases `.claude/project-context.md` instructions](https://github.com/anthropics/claude-code/issues/9796)**
   *Labels: bug, has repro, platform:macos, area:core, memory* | 20 comments | 3 👍 | **OPEN**
   **Affected workflow:** When context compaction triggers (e.g., long sessions), the project-level instruction file is silently dropped, causing Claude to lose custom setup instructions mid-task.
   **Impact:** Data loss within a session; undermines project configuration stability.

5. **[#24798 – Inter-session communication for multi-Claude workflows](https://github.com/anthropics/claude-code/issues/24798)**
   *Labels: enhancement, area:tui, area:core* | 19 comments | 13 👍 | **OPEN**
   **Affected workflow:** Users running multiple Claude Code sessions in parallel (one per module) have no way to pass results or coordinate between sessions. Request is for a message bus or shared state.
   **Impact:** Blocks large project decomposition; echoes the "session handoff" demand (see Feature Request Clusters).

6. **[#11455 – Session Handoff / Continuity Support](https://github.com/anthropics/claude-code/issues/11455)**
   *Labels: enhancement, has repro, area:core* | 15 comments | 21 👍 | **OPEN**
   **Affected workflow:** No mechanism to hand off an in-progress session to another developer or machine. Work is lost when switching environments.
   **Impact:** Collaboration blocker; frequently requested.

7. **[#15542 – Enable Claude Code to access chat history in Claude App](https://github.com/anthropics/claude-code/issues/15542)**
   *Labels: enhancement, area:core, area:api* | 13 comments | 68 👍 | **OPEN**
   **Affected workflow:** Users want to start a conversation in the Claude web/app interface (e.g., planning) and then continue it inside Claude Code for execution.
   **Impact:** Highly voted request (68👍), indicating strong desire for cross-surface continuity.

8. **[#13843 – Share conversation context from Claude.ai to Claude Code](https://github.com/anthropics/claude-code/issues/13843)**
   *Labels: enhancement, area:core, area:api* | 13 comments | 66 👍 | **OPEN**
   **Affected workflow:** Same theme as #15542 — users want to move from claude.ai (research/planning) to Claude Code (coding) without losing context.
   **Impact:** Another high-vote request; clearly a top community desire.

9. **[#50246 – Message queue mode – queue messages instead of interrupting active tasks](https://github.com/anthropics/claude-code/issues/50246)**
   *Labels: enhancement, area:tui* | 6 comments | 20 👍 | **OPEN**
   **Affected workflow:** When Claude is in the middle of a task, users must interrupt it to send a follow-up. Request is for a message queue that Claude processes after completing its current step.
   **Impact:** Workflow friction; 20👍 suggests strong interest.

10. **[#46787 – Orphaned processes silently burn usage quota; dropped sessions continue running; unauthorized debit card charges](https://github.com/anthropics/claude-code/issues/46787)**
    *Labels: bug, platform:macos, area:cost, area:core, area:mcp* | 3 comments | 0 👍 | **OPEN**
    **Affected workflow:** A Max plan subscriber reports that dropped/archived sessions continue to consume API tokens via orphaned processes, leading to unexpected charges on a debit card. Also includes MCP-related process leaks.
    **Impact:** Financial and privacy risk; echoes other cost-related reports (see Developer Pain Points).

## Key PR Progress

1. **[#57880 – Autonomous Claude Swarms — DAG-aware multi-tier coordination with role-typed heads for autonomous agent teams](https://github.com/anthropics/claude-code/pull/57880)**
   *Author: @kushalj1997* | **OPEN**
   **Description:** A community-built plugin extending Claude Code's native Agent Teams feature. Implements DAG-based orchestration for multi-agent workflows with role-typed heads. Started as a personal project, then discovered the Teams feature.
   **Significance:** Demonstrates demand for advanced multi-agent coordination beyond current built-in capabilities.

2. **[#57888 – Scope `child_process_exec` to JS/TS files (fix Python false-positive)](https://github.com/anthropics/claude-code/pull/57888)**
   *Author: @emora-hash* | **OPEN**
   **Description:** The `security_reminder_hook.py` rule `child_process_exec` used a substring match on `"exec("` that incorrectly flagged Python's `asyncio.create_subprocess_exec(`. PR narrows the rule to only apply to `.js`/`.ts` files.
   **Significance:** Reduces noise in security warnings for Python developers using MCP/hooks.

## Feature Request Clusters

- **Session continuity and cross‑surface context sharing** — Multiple requests (e.g., #24798, #11455, #15542, #13843) ask for the ability to move conversations between Claude.ai and Claude Code, hand off sessions between machines, or share context across parallel Claude Code instances. Combined 168 👍 across these two clusters.

- **Non‑interrupting message queue** — Issue #50246 (20👍) proposes a queue mode so users can send follow‑ups without derailing an active task. Compliments the inter‑session continuity requests.

- **CLI `--continue` fallback** — Issue #45842 asks for a single flag that resumes an existing session if available otherwise creates a new one, simplifying scripting and automation.

- **Cost visibility and spending controls** — Several issues (#57719, #50589, #46787) request spend caps, real‑time cost dashboards, and ability to pause sessions when hitting limits. Particularly acute for headless (`claude -p`) and scheduled tasks.

- **Cowork/Routines reliability improvements** — Issues #55631 and #57896 report that scheduled tasks stop firing after 12–30 hours on Windows, requiring manual reboot. Also #57910 shows orphaned process accumulation from scheduled tasks. Users want consistent autonomous execution.

## Developer Pain Points

- **Unexpected billing and quota depletion** — This week’s data is dominated by cost‑related bugs: the `HERMES.md` billing routing bug (#53262), orphaned processes burning quota (#46787, #57910, #50589), weekly limit inconsistencies (#51222, #52135), and headless workloads lacking spend visibility (#57719). Multiple users report hundreds of dollars in unauthorized charges. Trust in billing accuracy is shaken.

- **Model quality regressions** — The Opus 4.6 regression (#28469) remains open and continues to draw comments. Users report loops, memory loss, and ignored instructions, with the reporter saying it “severely degraded every dimension of the tool.”

- **Context and session instability** — Context compaction erases project instructions (#9796), desktop sessions auto‑archive on focus loss (#57602), and `--resume` fails if the working directory is removed (#57920). Users lose work or have to restart from scratch.

- **Permission model inconsistencies** — The `ask` list being ignored when Bash is allowed (#6527) and permission prompts not being respected when auto‑edit is toggled (#57911) create security‑vs‑usability tension. Users cannot rely on the permission configuration.

- **Scheduler/Cowork reliability** — On Windows, scheduled tasks stop firing after ~24 hours (#55631, #57896) and orphaned processes accumulate (#57910). The scheduler’s long‑term reliability is insufficient for users depending on autonomous operations.

- **Hooks timing** — SessionStart hooks with MCP tool type fire before MCP servers connect (#57932), causing all such hooks to fail silently. Affects plugin developers relying on startup automation.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest – 2026-05-11

## Today’s Update Brief
No new releases appeared in the last 24 hours. Activity remains high across the repository: 50 issues and 50 pull requests were updated, with maintainers merging several PRs related to multi‑environment tool routing, Windows CI stability, and goal continuation improvements. Community engagement is concentrated on session management features (delete/archive) and Windows/WSL compatibility bugs.

## Releases
*(None)*

---

## Hot Issues

1. **[#3550 – Scope Codex chats to VS Code projects/workspaces](https://github.com/openai/codex/issues/3550)**
   *Enhancement* – Votes: 63, Comments: 26
   Users want the VS Code extension’s “Recent Tasks” list filtered by active workspace. Currently global across projects, making it hard to keep sessions organized.

2. **[#8784 – Add `codex delete <session>` command](https://github.com/openai/codex/issues/8784)**
   *Enhancement (TUI)* – Votes: 79, Comments: 24
   CLI users request a delete command for sessions they never intend to resume. High demand for basic session lifecycle control.

3. **[#13762 – Windows WSL mode uses Windows `CODEX_HOME` inside WSL](https://github.com/openai/codex/issues/13762)**
   *Bug (Windows, WSL)* – Votes: 27, Comments: 22
   When Codex Desktop is installed on Windows and WSL mode is enabled, worktrees and data are stored on `/mnt/c` instead of the WSL native filesystem, causing performance and permission issues.

4. **[#19910 – Goals: active goal continuation prompt and audit requirements lost after mid‑turn compaction](https://github.com/openai/codex/issues/19910)**
   *Bug (Context)* – Votes: 0, Comments: 22
   Early adopters of the new Goals feature report that after context compaction, the model loses track of the active goal and audit constraints, forcing manual re‑prompting.

5. **[#17444 – Booting MCP Server fails on Windows](https://github.com/openai/codex/issues/17444)**
   *Bug (Windows, MCP)* – Votes: 9, Comments: 22
   Users on Windows with Pro+ subscriptions cannot start the MCP server; the process fails without clear diagnostic output. Involves `codex-cli 0.120.0`.

6. **[#18960 – Frequent reconnect loop: websocket closed by server before response.completed](https://github.com/openai/codex/issues/18960)**
   *Bug (Connectivity)* – Votes: 18, Comments: 20
   Pro users on macOS experience repeated WebSocket disconnections mid‑stream, forcing session restarts. Active investigation.

7. **[#12129 – Make ENTER insert newline, send on Ctrl+Enter](https://github.com/openai/codex/issues/12129)**
   *Enhancement (TUI)* – Votes: 28, Comments: 20 (CLOSED)
   A long‑standing request to change TUI input behavior for multiline prompts. Maintainers closed with a note that this is being evaluated for an upcoming release.

8. **[#13018 – Allow to delete threads in the Codex app](https://github.com/openai/codex/issues/13018)**
   *Enhancement (App)* – Votes: 82, Comments: 14
   Users want a delete (not just archive) button for threads. Currently must manually remove files from `~/.codex/archived_sessions/`.

9. **[#17491 – Windows ARM64 running Codex App in Emulation](https://github.com/openai/codex/issues/17491)**
   *Enhancement (Windows)* – Votes: 10, Comments: 10
   The Windows app is x64‑only; ARM64 users (Surface Pro 11) have to run under emulation. Request for native ARM64 builds.

10. **[#21978 – Codex CLI still renders at stale terminal size after resize](https://github.com/openai/codex/issues/21978)**
    *Bug (TUI)* – Votes: 0, Comments: 8
    A recent regression on `codex-cli 0.131.0-alpha.4` where the TUI does not re‑flow when the terminal is resized. Occurs on macOS arm64.

---

## Key PR Progress

1. **[#12523 – feat(tui): render markdown tables with Unicode box‑drawing borders](https://github.com/openai/codex/pull/12523)** (CLOSED)
   Improves TUI readability by rendering pipe‑delimited tables as aligned box‑drawn tables. Merged into main.

2. **[#21396 – Add plugin marketplace CLI commands](https://github.com/openai/codex/pull/21396)** (OPEN)
   Introduces `codex plugin marketplace` commands to list, add, and remove plugins. Supports `plugin@marketplace` identifiers for clarity. Maintainer‑authored.

3. **[#22045 – Improve goal continuation based on feedback](https://github.com/openai/codex/pull/22045)** (OPEN)
   Addresses #19910 by switching goal continuation prompts to hidden user‑context messages (instead of developer messages) and tightening the continuation prompt.

4. **[#21983 – Validate API key before login success](https://github.com/openai/codex/pull/21983)** (OPEN)
   Prevents persisting invalid API keys by testing them against the provider’s `/models` endpoint during login.

5. **[#18748 – Emit terminal review events](https://github.com/openai/codex/pull/18748)** (OPEN, code‑reviewed)
   Adds first‑class telemetry events for guardian and user reviews across shell, file, and network actions, replacing denormalized counters.

6. **[#21206 – feat(tui): add ambient terminal pets](https://github.com/openai/codex/pull/21206)** (OPEN)
   Brings animated pets to the TUI, similar to the desktop app’s companion. Intent is to not obstruct chat or approval UI.

7. **[#20137 – Route tools through selected environments](https://github.com/openai/codex/pull/20137)** (CLOSED)
   Core infrastructure for multi‑environment tool execution. Routes shell, exec, patch, and file tools through selected turn environments.

8. **[#20533 – Add exec‑server status endpoints](https://github.com/openai/codex/pull/20533)** (CLOSED)
   Adds `/healthz`, `/readyz`, `/status`, and `/metrics` to `codex exec-server`, enabling better monitoring and health checks.

9. **[#20534 – Gracefully drain exec‑server on shutdown signals](https://github.com/openai/codex/pull/20534)** (CLOSED)
   Implements a 30‑second drain timeout for the exec‑server, stopping new connections while existing sessions complete.

10. **[#21585 – Stabilize Windows rust‑ci‑full lanes](https://github.com/openai/codex/pull/21585)** (CLOSED)
    Fixes recurring Windows CI test failures by enabling Dev Drive setup, updating `sccache`, and adjusting test isolation.

---

## Feature Request Clusters

**Session/Thread Management**
Multiple requests for deleting sessions (#8784, #13018, #21347) and scoping chats to projects/workspaces (#3550). Community strongly desires basic CRUD operations for conversation history.

**Windows & WSL Compatibility**
Several issues target Windows ARM64 support (#17491), WSL filesystem integration (#13762, #18506), and missing Chrome plugin on Windows (#21788, #21929, #22051). Users report that the app works poorly with WSL paths and UNC paths.

**TUI Input & Rendering**
Requests for improved multiline input (#12129), terminal resize handling (#21978), and exposing TUI prompts to external hook systems (#19328). The new ambient pets PR (#21206) suggests ongoing investment in TUI polish.

**Plugin & Skills Ecosystem**
Growing interest in plugin marketplaces (#21396), local plugin visibility (#22078, #22051, #21788), and the browser use skill (#21440). Some users cannot see installed plugins or skills after enabling them.

**Connectivity & WebSocket Stability**
Recurring reports of WebSocket disconnections (#18960, #13169) and high‑demand errors on custom endpoints (#21569). Users on Azure/Foundry and Pro plans are affected.

---

## Developer Pain Points

- **Goal continuation loss after compaction** – despite high praise for the Goals feature, the loss of active goal context (#19910) forces manual restarts. The PR #22045 aims to fix this.
- **Windows WSL path confusion** – multiple open bugs (#13762, #18506) show that Codex mixes Windows and WSL filesystem roots, breaking worktrees and terminal cwd.
- **Inability to delete sessions/threads** – users must manually navigate to filesystem directories to clean up (#8784, #13018). High upvote counts signal strong demand.
- **WebSocket reconnect loops** – intermittent failures (#18960) degrade productivity, especially for Pro users on macOS.
- **High‑demand errors on Azure endpoints** – compact_remote fails when contexts approach 244k tokens (#21569), stalling CLI sessions.
- **Rate‑limit token consumption on idle checks** – `codex status` polling burns subscription tokens (#22040), a surprising cost for users on limited plans.
- **Missing Windows ARM64 native support** – users on Snapdragon X Elite and Surface Pro ARM must run emulated x64 builds (#17491, #13565).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-11

**Today’s Update Brief**

Activity remains high with 50 issues and 50 PRs updated in the last 24 hours, though no new releases were cut. The community is focused on agent reliability (subagent recovery, browser agent quirks, memory system bugs) and infrastructure improvements (policy engine, Vertex AI compatibility, security hardening). Several long-standing investigations and features continue to see maintenance attention.

**Releases**

No new releases in the last 24 hours.

---

## Hot Issues

1. **[#22745 – Assess the impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)**
   *Comments: 7*
   Epics tracking whether AST-aware tools can reduce turns, token noise, and improve codebase mapping. Sub-issues like [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) and [#22747](https://github.com/google-gemini/gemini-cli/issues/22747) propose concrete tools (e.g., `tilth`, `glyph`, AST grep). Community interest is moderate (👍1).

2. **[#24353 – Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)**
   *Comments: 6*
   Follow-up on “behavioral evals” (76 tests so far) to make them reliable enough for CI. The issue highlights flaky results (“bleeding”) that erode trust.

3. **[#22323 – Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)**
   *Priority: p1* | *Comments: 6*
   The `codebase_investigator` subagent incorrectly signals success after hitting the turn limit. This masks real failures and misleads the main agent. Two upvotes indicate community impact.

4. **[#21968 – Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)**
   *Comments: 6*
   Anecdotal report that custom skills (e.g., Gradle, Git) are ignored unless explicitly instructed. Suggests poor prompt engineering or prioritization in agent planning.

5. **[#26563 – Tool "save_memory" not found](https://github.com/google-gemini/gemini-cli/issues/26563)**
   *Comments: 5*
   `Gemini CLI v0.41.1` – `/memory add` fails because the tool `save_memory` is missing. The error suggests a tool registration regression.

6. **[#21983 – browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)**
   *Priority: p1* | *Comments: 4*
   The browser subagent crashes on Wayland, likely due to display server incompatibility. One upvote.

7. **[#25166 – Shell command execution gets stuck with "Waiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166)**
   *Comments: 3* | *👍3*
   Simple shell commands cause the CLI to hang, showing “Awaiting user input” even after completion. Three upvotes — frequent frustration.

8. **[#23571 – Model frequently creates tmp scripts in random spots](https://github.com/google-gemini/gemini-cli/issues/23571)**
   *Comments: 3*
   When shell execution is restricted via exclusion, the model scatters temporary edit scripts across the filesystem, complicating cleanup.

9. **[#22267 – Browser Agent ignores settings.json overrides (e.g., maxTurns)](https://github.com/google-gemini/gemini-cli/issues/22267)**
   *Comments: 3*
   The `AgentRegistry` reads settings correctly, but the browser agent doesn’t apply them. Affects configuration-driven workflows.

10. **[#22186 – get-shit-done output hook causes crash](https://github.com/google-gemini/gemini-cli/issues/22186)**
    *Priority: p1* | *Comments: 2*
    Crash when the “get-shit-done” summary is printed. Likely a rendering bug in the new alternate buffer mode.

---

## Key PR Progress

1. **[#22760 – Add `/fork` command for session branching](https://github.com/google-gemini/gemini-cli/pull/22760)**
   *CLOSED* — Creates a safe way to branch sessions without write-conflict issues from `--resume`. Merged.

2. **[#25033 – Add `agent_name` field to BeforeAgent/AfterAgent hooks](https://github.com/google-gemini/gemini-cli/pull/25033)**
   Lets hook scripts distinguish main agent from subagents (e.g., `browser_agent`). Useful for custom toolchains.

3. **[#26652 – Use snake_case thought_signature for Vertex AI compatibility](https://github.com/google-gemini/gemini-cli/pull/26652)**
   *Priority p1* — Fixes 400 INVALID_ARGUMENT on Vertex AI backends by aligning property naming conventions.

4. **[#26838 – Scrub CI env vars in dev mode to keep ink interactive](https://github.com/google-gemini/gemini-cli/pull/26838)**
   *CLOSED* — `CI=true` caused the CLI to hang silently. Quick fix for local development.

5. **[#25287 – Fix(dev): scrub CI env vars when running locally](https://github.com/google-gemini/gemini-cli/pull/25287)**
   Similar to #26838 but broader — checks for any `CI_` prefix. Still open.

6. **[#25190 – Defense techniques fix (RAG validation sandbox)](https://github.com/google-gemini/gemini-cli/pull/25190)**
   Adds a validation sandbox to block malicious injections in RAG workflows. Security harden.

7. **[#26063 – Restrict permissions on project temp dir tree](https://github.com/google-gemini/gemini-cli/pull/26063)**
   Closes [#24743](https://github.com/google-gemini/gemini-cli/issues/24743). Tightens default permissions on sensitive state files.

8. **[#19857 – Support verbose mode for subagents](https://github.com/google-gemini/gemini-cli/pull/19857)**
   Streams subagent thinking and tool calls into history when verbose is on. Helps debugging silent failures.

9. **[#23809 – Mitigate heap exhaustion via string truncation and buffer limits](https://github.com/google-gemini/gemini-cli/pull/23809)**
   *Priority p1* — Fixes OOM crashes from oversized telemetry payloads (closes [#16271](https://github.com/google-gemini/gemini-cli/issues/16271)).

10. **[#26361 – Externalize https-proxy-agent to fix proxy support](https://github.com/google-gemini/gemini-cli/pull/26361)**
    Fixes `TypeError: HttpsProxyAgent is not a constructor` in bundled builds. Critical for enterprise proxy environments.

---

## Feature Request Clusters

- **Backgroundable subagents** – Issue [#22741](https://github.com/google-gemini/gemini-cli/issues/22741) requests a `Ctrl+B` shortcut to send local subagents to the background (e.g., for non-blocking builds/linting). Community upvotes (👍2) suggest demand.

- **AST-aware code tools** – Cluster around [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) and its sub-tasks ([#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747)) explore using AST grep and AST-based file reading to improve tool precision and reduce token usage.

- **Browser agent resilience** – Multiple requests for better session handling: automatic lock takeover ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)), ignoring `settings.json` overrides ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), and Wayland compatibility ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)).

- **Safety and destructiveness guards** – Issue [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) asks the agent to discourage destructive commands (e.g., `git reset --force`, database modifications). Also related to the new policy engine work in PR [#26540](https://github.com/google-gemini/gemini-cli/pull/26540).

- **Shell environment and aliases** – Issue [#21461](https://github.com/google-gemini/gemini-cli/issues/21461) reports that shell aliases defined in `.bash_profile` are not available to the CLI’s shell execution.

---

## Developer Pain Points

- **Subagent reliability** – Agent recovery after `MAX_TURNS` reporting success instead of failure ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)) and subagents running without permission since v0.33.0 ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)) erode trust.

- **Memory system bugs** – A cluster of recent issues from @SandyTao520 ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26516](https://github.com/google-gemini/gemini-cli/issues/26516)) highlight Auto Memory retrying low-signal sessions, logging secrets before redaction, and silently skipping invalid patches.

- **Terminal rendering glitches** – Hanging after shell commands ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), crashes when resizing ([#21924](https://github.com/google-gemini/gemini-cli/issues/21924)), corruption after exiting external editors ([#24935](https://github.com/google-gemini/gemini-cli/issues/24935)), and general flickering remain open.

- **Tool availability and limits** – `save_memory` tool regression ([#26563](https://github.com/google-gemini/gemini-cli/issues/26563)) and a 400 error when more than 128 tools are available ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)) suggest scaling issues in the tool registry.

- **Evaluation consistency** – Steering eval tests that fail intermittently ([#23313](https://github.com/google-gemini/gemini-cli/issues/23313)) and unstable component-level evals ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353)) hinder CI trust.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest – 2026-05-11

## Today’s Update Brief
No new releases were published in the last 24 hours. Issue activity was high (27 items) but heavily mixed with spam reports from a single account. Several critical regressions and plugin‑related bugs were reported, including a silent‑turn stall in 1.0.4x and preToolUse hook bypasses. Pull request activity was negligible.

## Releases
None.

## Hot Issues
*Top 10 noteworthy issues from the last 24 hours (spam and closed‑invalid items excluded).*

1. **[#3239 – [BUG] Main session: text‑only assistant turn after action‑requesting user message ends turn silently with no auto‑continue (1.0.4x regression)](https://github.com/github/copilot-cli/issues/3239)**
   *Serious regression.* The CLI agent responds with a text‑only message instead of calling tools, then stalls without warning – user is left waiting for action. No comments yet; severity flagged by the reporter.

2. **[#3238 – Malformed plugin.json “commands” field crashes every prompt with cryptic “TypeError: a.replace is not a function”](https://github.com/github/copilot-cli/issues/3238)**
   A plugin with an array of objects in `commands` (instead of strings) crashes the CLI with a minified error. No recovery or diagnostic messages. Affects all prompts while the plugin is installed.

3. **[#3225 – Copilot forgets the current conversation](https://github.com/github/copilot-cli/issues/3225)**
   User must close the chat window to test instructions; upon reopening, the conversation history is lost. Highlights a session‑memory problem where context is not preserved across UI interactions.

4. **[#3222 – Tool‑only assistant turns leave UI silent – model emits multiple consecutive tool batches with no text block](https://github.com/github/copilot-cli/issues/3222)**
   When the model outputs only tool calls without narration, the terminal appears frozen. Users see no progress feedback even though tools are executing in the background.

5. **[#3223 – $TOOL_INPUT_FILE_PATH for chat hooks doesn’t work](https://github.com/github/copilot-cli/issues/3223)**
   The documented hook environment variable fails, causing a prettier hook to error with “No parser and no file path given”. Official VS Code hook configuration is broken.

6. **[#2736 – Fails with “posix_spawnp failed” and then misdiagnoses command as missing](https://github.com/github/copilot-cli/issues/2736)**
   CLI fails to launch a command (e.g., `npm`), then wrongly tells the user it is not installed or not on `PATH`. Has 3 👍 and 2 comments; affects basic shell command execution.

7. **[#2893 – preToolUse hooks silently bypassed under parallel tool calls (timeout→allow fallback + serial dispatch)](https://github.com/github/copilot-cli/issues/2893)**
   When multiple tools are called in parallel, `preToolUse` hooks time out and are effectively skipped. The hook process continues running, but the CLI proceeds without enforcing restrictions.

8. **[#2392 – preToolUse hooks are not enforced in subagents](https://github.com/github/copilot-cli/issues/2392)**
   Hooks defined in `config.json` apply only to the main agent; subagents spawned via the `task` tool ignore them entirely, creating an easy bypass for any tool restriction. 3 👍.

9. **[#3240 – winget install github.copilot installs PowerShell even when PowerShell Preview is installed](https://github.com/github/copilot-cli/issues/3240)**
   The Windows package manager installs `microsoft.powershell` regardless of a newer `microsoft.powershell.preview`. Users who already have Preview get an unnecessary duplicate.

10. **[#2901 – Lazy‑load MCP servers on first tool invocation](https://github.com/github/copilot-cli/issues/2901)**
    Feature request: all MCP servers are connected at startup, increasing launch time. Users with many servers (ADO, GitHub, custom agents) want lazy loading. 6 👍.

## Key PR Progress
Only one pull request was updated in the last 24 hours, and it appears to be spam ([#3163 – ViewSonic monitor](https://github.com/github/copilot-cli/pull/3163)). No meaningful code changes or feature PRs were active.

## Feature Request Clusters
- **Desktop integration:** Issue [#3224](https://github.com/github/copilot-cli/issues/3224) asks for a slash command (`/desktop` or `/github`) to open GitHub Desktop in the current directory, mirroring the existing `/ide` command.
- **Startup performance:** Issue [#2901](https://github.com/github/copilot-cli/issues/2901) requests lazy loading of MCP servers to reduce cold‑start time as the number of configured servers grows.

## Developer Pain Points
- **Hook enforcement gaps:** `preToolUse` hooks can be bypassed through parallel tool calls ([#2893](https://github.com/github/copilot-cli/issues/2893)) and subagent delegation ([#2392](https://github.com/github/copilot-cli/issues/2392)), undermining security/restriction models.
- **Silent stalls / poor UI feedback:** The agent sometimes produces tool‑only turns without narration ([#3222](https://github.com/github/copilot-cli/issues/3222)) or ends a turn prematurely ([#3239](https://github.com/github/copilot-cli/issues/3239)), leaving users uncertain if work is being done.
- **Flaky command execution:** False negatives from `posix_spawnp` ([#2736](https://github.com/github/copilot-cli/issues/2736)) and broken hook environment variables ([#3223](https://github.com/github/copilot-cli/issues/3223)) erode trust in basic tool invocations.
- **Plugin ecosystem fragility:** Malformed plugin.json files crash the entire CLI with cryptic errors ([#3238](https://github.com/github/copilot-cli/issues/3238)), and proper validation/recovery is missing.
- **Windows packaging oddities:** The winget installer unnecessarily pulls a full PowerShell package even when Preview is present ([#3240](https://github.com/github/copilot-cli/issues/3240)), causing clutter and potential path confusion.

*Note: A single user account (@parezanovicluka863‑byte) submitted multiple incoherent/spam issues (#3226–#3236). These were excluded from analysis as they do not represent genuine technical reports.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest – 2026-05-11

## Today's Update Brief

A moderately active day with no new releases but 8 new Issues and 5 active PRs. Community focus is split between MCP/tooling reliability bugs and WebUI UX improvements, with a notable cluster of requests for better long-running task support and session recovery. Two PRs from the same contributor (@morphishk) directly address previously reported WebUI sidebar pain points.

---

## Releases

No new releases in the last 24 hours. The latest published version remains v1.41.0.

---

## Hot Issues (8 total, all shown)

### #2224 — Agent timeout: completed work not synced back to main conversation
- **Author**: @thsun6
- **Link**: https://github.com/MoonshotAI/kimi-cli/issues/2224
- **Impact**: When an agent is assigned a complex task, it times out from the calling context but continues executing. If it later finishes, the results are never returned to the main conversation. Users get stuck with stale agent state and can't recover the completed work.
- **Affected workflow**: Agent-based multi-step coding sessions with timeouts.
- **Community reaction**: New issue, no comments yet. Zero reactions.

### #2223 — MCP `tool_reference` messages permanently poison `/coding/` API sessions
- **Author**: @AaronWWK
- **Link**: https://github.com/MoonshotAI/kimi-cli/issues/2223
- **Impact**: Using the Anthropic-compatible Kimi Code endpoint, once ToolSearch introduces MCP `tool_reference` messages into the conversation, all subsequent API calls return `HTTP 400 invalid_request_error`. Sessions are permanently broken and cannot be recovered. This blocks any workflow involving tool search + MCP tool chaining.
- **Affected workflow**: API-based integrations using the `/coding/` endpoint, especially chained tool calls.
- **Community reaction**: New issue, zero comments. Likely a critical API-level bug for MCP-heavy users.

### #2222 — `kimi --continue` fails with "No previous session found" despite visible history
- **Author**: @LiPingFeel
- **Link**: https://github.com/MoonshotAI/kimi-cli/issues/2222
- **Impact**: Running `kimi --continue` in a directory where a prior session exists (and where plain `kimi` shows history) results in "No previous session found". Session resumption is broken via the `--continue` flag, forcing users to navigate differently or lose the ability to restart interrupted work.
- **Affected workflow**: CLI session resumption, especially for users who rely on `--continue` as a restart command.
- **Community reaction**: New issue, zero comments. Likely affects scripted workflows.

### #2221 — Request: make MCP tool output character limit configurable
- **Author**: @lingeasy
- **Link**: https://github.com/MoonshotAI/kimi-cli/issues/2221
- **Impact**: The MCP `MAX_OUTPUT_CHARS` is hard-coded to 100,000 characters. Different MCP servers have wildly different output sizes; this uniform cap prevents either large-output servers from being useful or wastes tokens on chatty tools. Users cannot tune per-server limits.
- **Affected workflow**: Custom MCP server integration, especially with data-heavy tools.
- **Community reaction**: Feature request, zero comments. Clear configurable-limits demand.

### #2219 — Performance degradation after K2.6 model update
- **Author**: @jilek-josef
- **Link**: https://github.com/MoonshotAI/kimi-cli/issues/2219
- **Impact**: K2.6 is reported as slower and with degraded output quality compared to the previous model version. The reporter notes "slower which is acceptable" but highlights that output quality regression is the main frustration.
- **Affected workflow**: All coding tasks using the K2.6 model on Linux.
- **Community reaction**: New issue, zero comments. Single data point but from a regular user reporting measurable degradation.

### #2218 — Request: `/goal` command for long-running tasks (similar to Codex)
- **Author**: @dkcn2006
- **Link**: https://github.com/MoonshotAI/kimi-cli/issues/2218
- **Impact**: Users want a dedicated command (similar to Codex's `/goal`) that allows them to define and manage long-running, background tasks. This directly relates to the agent timeout problem in #2224 — users need structured support for tasks that exceed normal response windows.
- **Affected workflow**: Complex multi-step coding tasks, background code generation.
- **Community reaction**: Feature request, zero comments. Clear demand for structured long-task support.

### #2206 — WebUI sidebar: action buttons hidden by long filenames
- **Author**: @morphishk
- **Link**: https://github.com/MoonshotAI/kimi-cli/issues/2206
- **Impact**: In the WebUI Workspace files sidebar, long filenames push the expand/download buttons outside the visible viewport. Sidebar width is fixed, so users cannot access these actions for files with long names. This is a basic UI blocking issue for users with deeply nested or descriptive file names.
- **Affected workflow**: WebUI file browsing, file operations. User already contributed a fix in PR #2207.
- **Community reaction**: Bug report, zero comments. Self-reported and self-patched by the same user.

### #2216 — Request: editable path bar with autocomplete in WebUI sidebar
- **Author**: @morphishk
- **Link**: https://github.com/MoonshotAI/kimi-cli/issues/2216
- **Impact**: Currently the WebUI sidebar only supports mouse-based directory navigation. For deep directory structures, this requires many clicks. An editable path bar with smart autocomplete would allow direct path input, significantly speeding up navigation.
- **Affected workflow**: WebUI file navigation, deep directory access. User also contributed a PR (#2215).
- **Community reaction**: Feature request, zero comments. Self-reported and self-implemented.

---

## Key PR Progress (5 total, all shown)

### #2220 — [CLOSED] Add `.piebox/skills` scanning and `AGENTS.local.md` loading
- **Author**: @liuhaoyooc
- **Link**: https://github.com/MoonshotAI/kimi-cli/pull/2220
- **Merged/Status**: CLOSED (likely merged)
- **Summary**: Adds support for `.piebox/skills` directory as a skill scanning path. Supports `AGENTS.local.md` loading for local agent definitions. Removes 9-backtick code block wrapping from AGENTS.md in system prompts. Adds display-line navigation in shell prompt (visual wrap for cursor movement). Enforces skill usage when triggered via `/skill:xxx` or `/flow:xxx`.
- **Impact**: Expands skill loading capabilities and improves prompt formatting for agents. Users can now define local overrides and skills in `.piebox/skills`.

### #2217 — [OPEN] Fix: recover background auto-trigger after cooldown
- **Author**: @he-yufeng
- **Link**: https://github.com/MoonshotAI/kimi-cli/pull/2217
- **Fixes**: #2193
- **Summary**: Pauses background auto-trigger for 10 minutes after 3 consecutive failed follow-up runs. Resets the failure counter after cooldown expires so background completions can trigger the agent again. Ensures user input remains responsive during cooldown. Adds focused regression tests.
- **Impact**: Solves the "background agent goes silent permanently after repeated failures" problem. Users should now get automatic recovery without manual intervention.

### #2215 — [OPEN] Editable path bar with autocomplete in Workspace files sidebar
- **Author**: @morphishk
- **Link**: https://github.com/MoonshotAI/kimi-cli/pull/2215
- **Summary**: Adds an editable path bar with smart autocomplete to the Workspace files sidebar. Users can type paths, get suggestions, and navigate directly. Significantly improves navigation efficiency for deep directory structures.
- **Impact**: Direct implementation of request #2216. If merged, would solve a major WebUI navigation UX gap.

### #2207 — [OPEN] Fix: prevent long filenames from hiding action buttons in sidebar
- **Author**: @morphishk
- **Link**: https://github.com/MoonshotAI/kimi-cli/pull/2207
- **Summary**: Fixes Radix UI ScrollArea overflow clipping that pushes expand/download buttons out of view. Applies explicit left margin to buttons with `overflow: visible`. Long filenames now truncate with ellipsis while keeping action buttons accessible.
- **Impact**: Fixes bug #2206. A straightforward CSS fix for a basic usability issue.

### #2214 — [OPEN] Fix: show rotated backup hint after `/clear`
- **Author**: @zbl1998-sdjn
- **Link**: https://github.com/MoonshotAI/kimi-cli/pull/2214
- **Summary**: Returns the rotated backup path from `Context.clear()`. Shows a message with the rotated backup filename when `/clear` is used. Clarifies that `/undo` cannot restore turns from before `/clear`. Adds regression tests for clear return value and slash clear message.
- **Impact**: Improves transparency after session clear — users now know which backup was created and can locate it. Reduces confusion about undo behavior after clearing.

---

## Feature Request Clusters

### 1. Long-running / background task management
Two independent requests (#2224, #2218) both highlight the need for better support for tasks that exceed normal response windows. #2224 reports that agent timeouts break result synchronization entirely, while #2218 explicitly requests a `/goal` command similar to Codex. Both point to the same underlying gap: the tool lacks structured primitives for defining, tracking, and resuming long-running or background coding tasks.

### 2. MCP configurability
Issue #2221 requests making the MCP tool output character limit configurable. This is a common pattern in MCP-based tools: as users connect to diverse MCP servers, per-server or per-tool settings become necessary. No other MCP config requests appeared today, but this aligns with a recurring desire for MCP server granularity.

### 3. WebUI workspace navigation improvements
Two items (#2206 bug report, #2216 feature request) from the same contributor (@morphishk) cover WebUI sidebar navigation. One is a fix for long-filename clipping, the other proposes an editable path bar with autocomplete. Both would significantly improve the file browsing experience in WebUI.

---

## Developer Pain Points

1. **Agent timeout causing data loss** (#2224): When an agent times out during a complex task, completed work never reaches the main conversation. Users cannot recover the output even if the agent finishes. No workaround mentioned.
2. **MCP `tool_reference` permanently breaking API sessions** (#2223): A single bad message pattern can render an entire session unusable with HTTP 400 errors. No recovery path other than starting a new session.
3. **Session resumption via `--continue` unreliable** (#2222): The `--continue` flag fails to find sessions that are visible with plain `kimi` in the same directory. This breaks scripted or automated session restarts.
4. **WebUI sidebar action buttons inaccessible** (#2206): Long filenames hide expand/download buttons behind a fixed-width container. A basic usability bug for users with deep file trees.
5. **Performance regression after K2.6** (#2219): Single report but from a regular user noticing output quality degradation. If reproducible, this is a high-impact model quality concern for all users.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-11

## Today’s Update Brief

Three patch releases (v1.14.46–v1.14.48) landed in the last 24 hours, focusing on image attachment preservation, TUI keybinding restoration, and HTTP API error readability. Community discussion was dominated by a cluster of reports about the missing `/exit` slash command (at least 6 distinct issues), along with ongoing provider bugs (Azure, Deepseek, kiro) and a new config schema mismatch that can crash the TUI. PR activity remains high, with several refactoring contributions from @kitlangton around LLM event handling and caching.

## Releases

### v1.14.48
- **Core Improvement:** Original image attachments are now preserved instead of being resized before sending to the model.

### v1.14.47
- **Bugfixes:** Restored prompt editing keybindings in TUI textarea (`esc`, `enter` and aliases); model changes now persist across session activity; HTTP API schema validation errors return a readable `400` response body.
- **Improvement:** Scout feature now materializes (likely “materialize” – text truncated in source).

### v1.14.46
- **Improvement:** Added built-in `customize-opencode` skill to reduce config-editing breakage on startup.
- **Bugfixes:** Fixed numeric HTTP API query parameters in generated OpenAPI spec and SDK; fixed boolean HTTP API query parameter handling.

## Hot Issues (10 noteworthy)

1. [#26549 – `/exit` and `/quit` slash commands missing in autocomplete](https://github.com/anomalyco/opencode/issues/26549) — Opened May 9, 12 comments, 20 👍. Commands appear in Ctrl+P but not when typing `/` in the prompt. High community upvote indicates widespread frustration.

2. [#26684 – Was the `/exit` command removed?](https://github.com/anomalyco/opencode/issues/26684) — Another report from v1.14.46, 12 👍, asking why `/exit` stopped working.

3. [#20287 – `@ai-sdk/azure` provider broken with `/chat/completions` since v1.3.4](https://github.com/anomalyco/opencode/issues/20287) — Long-standing Azure incompatibility, 12 comments, closed. User provides config snippet.

4. [#26628 – TUI config schema mismatch + leader `none` crash](https://github.com/anomalyco/opencode/issues/26628) — Schema says `keymap`, but v1.14.46 rejects it; using old `keybinds` with `"leader": "none"` causes blank screen. 10 comments, critical UI impact.

5. [#20802 – Custom OpenAI-compatible providers: image attachments do not reach vision models](https://github.com/anomalyco/opencode/issues/20802) — Images silently fail with custom providers (e.g. `longent`). 10 comments, active since April.

6. [#13999 – Azure OpenAI Cognitive Services: Responses API missing `?api-version=`](https://github.com/anomalyco/opencode/issues/13999) — All `/responses` requests fail for Azure Cognitive Services endpoints. 8 comments, 8 👍, open since February.

7. [#25802 – Subagent model assignment not recognized](https://github.com/anomalyco/opencode/issues/25802) — Defining a different model for a subagent returns empty string. 6 comments.

8. [#25031 – Deepseek v4 error: “sequence item 0: expected str instance, list found”](https://github.com/anomalyco/opencode/issues/25031) — AI_APICallError on `/chat/completions` with DeepSeek Flash Thinking. Closed.

9. [#15315 – Copilot Gemini models fail to produce structured tool calls](https://github.com/anomalyco/opencode/issues/15315) — Models output plain-text tool calls instead of structured `tool_calls`. Root cause identified as `sanitizeGemini`.

10. [#26761 – `/exit` prints “Exiting.” but does not actually exit in v1.14.46](https://github.com/anomalyco/opencode/issues/26761) — Even when the command appears to run, TUI remains open. 3 comments.

## Key PR Progress (10 important)

1. [#26786 – `feat(llm): cache-policy auto-placement`](https://github.com/anomalyco/opencode/pull/26786) (closed) — Adds `LLMRequest.cache: "auto" | "none" | CachePolicyObject` for declarative cache-marker placement at compile time. By @kitlangton.

2. [#26796 – `Validate prompt messages with Effect Schema`](https://github.com/anomalyco/opencode/pull/26796) (open) — Replaces Zod validation in prompt message validation with Effect Schema decoders, preserving non-throwing behavior.

3. [#14484 – `fix(tui): make new-session prompt handoff deterministic`](https://github.com/anomalyco/opencode/pull/14484) (open) — Ensures prompt box text does not linger after submitting. Closes #11922.

4. [#26735 – `refactor(llm): normalize Usage as inclusive total + non-overlapping breakdown`](https://github.com/anomalyco/opencode/pull/26735) (closed) — Reshapes `LLM.Usage` to avoid subtraction; totals match AI SDK / OpenAI conventions.

5. [#26639 – `Consume native LLM events in session processing`](https://github.com/anomalyco/opencode/pull/26639) (open) — Maps AI SDK `fullStream` events into native `LLMEvent`s at the `LLM.Service.stream` boundary; moves session usage accounting to native `Usage`.

6. [#26792 – `chore(http-recorder): remove content-matching dispatch mode`](https://github.com/anomalyco/opencode/pull/26792) (open) — Removes `dispatch: "match"` default to prevent silent record/replay divergence in tests.

7. [#26291 – `fix(ci): pin workflow actions`](https://github.com/anomalyco/opencode/pull/26291) (open) — Pins GitHub Actions to immutable commit SHAs for CI reproducibility.

8. [#17096 – `fix(tui): make question footer actions clickable`](https://github.com/anomalyco/opencode/pull/17096) (open) — Makes `enter` and `esc` actions in question prompt footer clickable by routing mouse and keyboard through same logic.

9. [#8535 – `feat(session): bi-directional cursor-based pagination`](https://github.com/anomalyco/opencode/pull/8535) (open) — Adds bidirectional cursor pagination for session messages across server, app, TUI, and API. Closes #6548.

10. [#7756 – `feat(task): Add subagent-to-subagent delegation with budgets, persistent sessions …`](https://github.com/anomalyco/opencode/pull/7756) (open) — Large feature adding hierarchical session navigation and budget-based delegation. Closes multiple issues.

## Feature Request Clusters

- **Slash command /exit restoration** — Multiple reports that `/exit`, `/quit`, and `/q` are missing from autocomplete and sometimes non-functional in v1.14.46 (#26549, #26659, #26684, #26612, #26761). The console `Ctrl+C` remains the only reliable exit path.

- **TUI configuration schema stability** — Users report that `tui.json` schema expects `keymap` but the current release rejects it, forcing fallback to `keybinds`, and setting `leader: "none"` can crash the interface (#26628, #26242).

- **Image attachment reliability** — Recurring theme: images silently fail with custom OpenAI-compatible providers (#20802) and local Ollama vision models (#26780). The latter also highlights missing drag-and-drop support in TUI.

- **Better progress indicators** — Requests for collapsible reasoning summaries (#15257), a thinking spinner with elapsed time or estimated progress (#26381), and page-based conversation history navigation (#26327).

## Developer Pain Points

- **Missing `/exit` command** — The top frustration today, with more than a dozen cumulative upvotes and multiple duplicate reports. The command exists in the codebase but is not surfaced in autocomplete or fails to execute.

- **TUI config schema mismatch** — Confusion between `keymap` and `keybinds`, and crash when disabling leader key, blocks users from customizing keybindings.

- **Provider compatibility headaches** — Azure (both cognitive services and chat completions), Deepseek v4, kiro, and Copilot Gemini all exhibit breakage or missing features (tool calls, api-version parameter). Users are forced to downgrade or use workarounds.

- **Subagent model recognition** — Defining a different model for subagents silently fails, forcing all agents to use the same model.

- **History navigation bugs** — Up/Down arrow keys get stuck on one history entry, requiring manual cursor movement (#26769).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest – 2026-05-11

## Today’s Update Brief

Two patch releases (v0.15.10 and a nightly build) landed, bringing performance improvements to session-list metadata reads and fixing CLI argument validation. Issue activity remains high (31 updated, 45 PRs), with a clear cluster of bugs around file-type misidentification affecting `edit`/`write_file` tools – four separate reports since May 8. Several feature‑request meta‑issues proposing a complete profile‑sync and MCP‑server ecosystem were also filed.

---

## Releases

### [v0.15.10](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.10) (stable)

- **fix(cli)**: Validate `/model` command arguments (@yiliang114)
- **fix(core)**: Log the actual OpenAI request sent on the wire (@tanzhenxin)

### [v0.15.10-nightly.20260511](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.10-nightly.20260511.0a05ea800)

- **perf(core)**: Bound session-list metadata reads to head/tail 64KB; pool buffer; lazy message count (@qqqys)
- **test**: Stabilise main e2e

---

## Hot Issues (10)

1. **[#3964](https://github.com/QwenLM/qwen-code/issues/3964) – Encrypted `.c/.cpp/.h` misidentified as binary**
   *Status: CLOSED* | *Priority: P1*
   **Impact**: Starting from v0.15.7, `edit` and `write_file` refuse to handle DRM‑protected source files, breaking workflows in encrypted file‑system environments.
   **Reaction**: 7 comments, closed after triage.

2. **[#3945](https://github.com/QwenLM/qwen-code/issues/3945) – `edit` tool deadlocked on large files**
   *Status: CLOSED* | *Priority: P1*
   **Impact**: `read_file` truncates files >~800 lines, making the “fully read” precondition for `edit` impossible to satisfy.
   **Reaction**: 5 comments, acknowledged as a regression.

3. **[#4004](https://github.com/QwenLM/qwen-code/issues/4004) – UTF‑8 text (Chinese+Markdown) rejected as binary**
   *Status: OPEN* | *Priority: P1*
   **Impact**: `write_file` returns “binary / image / audio / video / PDF / notebook payload” for UTF‑8 files containing Chinese characters and Markdown. Agent then falls back to `cat` commands.
   **Reaction**: 3 comments, user suspects over‑conservative encoding detection.

4. **[#4010](https://github.com/QwenLM/qwen-code/issues/4010) – `read_file` marks truncated large files as binary**
   *Status: CLOSED*
   **Impact**: After reading a large file (>800 lines), the tool incorrectly labels the file as binary, preventing subsequent edits.
   **Reaction**: 2 comments, closed.

5. **[#4024](https://github.com/QwenLM/qwen-code/issues/4024) – Some `.cs` files rejected as binary**
   *Status: CLOSED*
   **Impact**: `edit` and `write_file` reject certain C# source files, likely due to byte‑pattern detection.
   **Reaction**: 2 comments.

6. **[#4025](https://github.com/QwenLM/qwen-code/issues/4025) – Statusline context percentage inaccurate**
   *Status: OPEN* | *Type: bug/ui*
   **Impact**: Users cannot reliably decide when to run `/compact`; the displayed `cxt` percentage may be too low or too high, leading to sudden errors or premature compaction.
   **Reaction**: 2 comments.

7. **[#4035](https://github.com/QwenLM/qwen-code/issues/4035) – DashScope‑intl endpoint fetch fails**
   *Status: OPEN* | *Type: bug/authentication*
   **Impact**: Every prompt fails with `fetch failed` when using the international DashScope endpoint (`dashscope-intl.aliyuncs.com`), due to an incompatible undici dispatcher. Only reported for Node v26.1.0.
   **Reaction**: 1 comment.

8. **[#4036](https://github.com/QwenLM/qwen-code/issues/4036) – Test blocked by ink upgrade**
   *Status: OPEN* | *Category: development/testing*
   **Impact**: `ink-testing-library` does not yet support ink 7 (upgraded in PR #3860), forcing a disabled test for `AskUserQuestionDialog` navigation.
   **Reaction**: 1 comment; status/blocked.

9. **[#4028](https://github.com/QwenLM/qwen-code/issues/4028) – Performance comparison with llama.cpp/web**
   *Status: OPEN* | *Category: performance*
   **Impact**: User reports that Qwen Code is significantly slower than the llama.cpp web UI for the same model (Qwen3‑Coder‑30B‑A3B‑GGUF). Data includes token‑by‑token timings.
   **Reaction**: 3 comments.

10. **[#3323](https://github.com/QwenLM/qwen-code/issues/3323) – Localize slash‑command descriptions**
    *Status: CLOSED*
    **Impact**: Non‑English users cannot see translated `/`‑command descriptions; request for runtime i18n.
    **Reaction**: 3 comments, closed.

---

## Key PR Progress (10)

1. **[#3775](https://github.com/QwenLM/qwen-code/pull/3775) – Route side‑query LLM calls through `runSideQuery` chokepoint**
   *Status: OPEN*
   **Summary**: Unifies all one‑shot LLM calls (session title, recap, tool‑use summary, etc.) into a single chokepoint for consistent logging, tracing, and rate‑limiting.
   **Author**: @tanzhenxin

2. **[#3981](https://github.com/QwenLM/qwen-code/pull/3981) – Fix search empty‑query exit & Windows Backspace**
   *Status: OPEN*
   **Summary**: Resolves a CI failure on Windows where emptying the search query did not exit back to list mode. Synchronises the exit callback and normalises Backspace behavior.
   **Author**: @B-A-M-N

3. **[#3598](https://github.com/QwenLM/qwen-code/pull/3598) – Add `--json-schema` for structured output in headless mode**
   *Status: OPEN*
   **Summary**: New flag that registers a synthetic `structured_output` tool – the model must call it to deliver a result conforming to the user‑supplied JSON Schema. Useful for programmatic extraction.
   **Author**: @wenshao

4. **[#3896](https://github.com/QwenLM/qwen-code/pull/3896) – Normalise cumulative OpenAI stream deltas to suffixes**
   *Status: OPEN*
   **Summary**: Some DashScope/Coding Plan paths send accumulated full text instead of incremental deltas. This PR fixes duplicate content concatenation during streaming.
   **Author**: @chiga0

5. **[#3997](https://github.com/QwenLM/qwen-code/pull/3997) – Improve runtime fetch options error handling**
   *Status: OPEN*
   **Summary**: Follow‑up to `runtimeFetchOptions` refactor: adds warning logs when proxy creation fails, and better documents the API.
   **Author**: @ZevGit

6. **[#3668](https://github.com/QwenLM/qwen-code/pull/3668) – Add current session billing estimates**
   *Status: CLOSED*
   **Summary**: Adds configurable model pricing in settings, shows estimated costs in `/stats model` and session summary.
   **Author**: @shenyankm

7. **[#3910](https://github.com/QwenLM/qwen-code/pull/3910) – Codegraph skill for PR review risk analysis**
   *Status: OPEN*
   **Summary**: Introduces a new `codegraph` skill that automates PR risk assessment and cross‑PR conflict detection using `codegraph-ai`. Aimed at maintainers.
   **Author**: @BingqingLyu

8. **[#3889](https://github.com/QwenLM/qwen-code/pull/3889) – `qwen serve` daemon (Stage 1)**
   *Status: OPEN*
   **Summary**: Implements an HTTP daemon bridging ACP NDJSON over HTTP+SSE, plus an SDK‑side `DaemonClient`. Covers health, session create/list, prompt, cancel, and tool routes.
   **Author**: @wenshao

9. **[#4023](https://github.com/QwenLM/qwen-code/pull/4023) – Auto‑restore prompt & preserve queue on cancel**
   *Status: OPEN*
   **Summary**: When ESC is pressed immediately after submit (or during tool execution), the cancelled prompt is no longer stranded in transcript/history, and queued follow‑up inputs are preserved.
   **Author**: @wenshao

10. **[#4020](https://github.com/QwenLM/qwen-code/pull/4020) – Improve Anthropic proxy compatibility & global prompt cache scope**
    *Status: OPEN*
    **Summary**: Adapts to IdeaLab‑style Anthropic proxies (non‑`*.anthropic.com` base URLs) and enables cross‑session prompt caching without breaking direct Anthropic API calls.
    **Author**: @wenshao

---

## Feature Request Clusters

A large batch of feature‑request issues (11+) filed by @Maddock‑DR on 2026‑05‑10 centres on a **unified configuration and multi‑tool ecosystem**. The common themes are:

- **Profile Sync & Export/Import** ([#4012](https://github.com/QwenLM/qwen-code/issues/4012), [#4013](https://github.com/QwenLM/qwen-code/issues/4013), [#4015](https://github.com/QwenLM/qwen-code/issues/4015), [#4017](https://github.com/QwenLM/qwen-code/issues/4017), [#4018](https://github.com/QwenLM/qwen-code/issues/4018)) – Git‑integrated synchronisation of `SOUL.md`, Skills, Memory, and tool‑specific configs; `/export` and `/import` commands.

- **MCP & HTTP Server Modes** ([#4007](https://github.com/QwenLM/qwen-code/issues/4007), [#4008](https://github.com/QwenLM/qwen-code/issues/4008)) – Expose Qwen Code tools as MCP Server or REST API for external agents (e.g., Claude Desktop, AliCloud Bailian).

- **Security Hardening** ([#4016](https://github.com/QwenLM/qwen-code/issues/4016)) – AES‑256‑GCM encrypted storage for API keys and tokens.

- **Skills Packaging & Distribution** ([#4014](https://github.com/QwenLM/qwen-code/issues/4014)) – `.skill.tar.gz` format with dependency declarations and integrity checks.

- **Anti‑Sycophancy Protocol** ([#4011](https://github.com/QwenLM/qwen-code/issues/4011)) – A core personality definition to counteract RLHF‑induced sycophancy, based on Marc Andreessen’s system prompt decoding.

Additionally, a **Cowork Mode** ([#4026](https://github.com/QwenLM/qwen-code/issues/4026)) proposes a desktop multi‑agent collaboration interface similar to Anthropic’s Claude Cowork, and several smaller requests (TAB completion for `/model` [#4029](https://github.com/QwenLM/qwen-code/issues/4029), browser‑use integration [#4034](https://github.com/QwenLM/qwen-code/issues/4034), and a message queue system [#4021](https://github.com/QwenLM/qwen-code/issues/4021)) suggest growing interest in making Qwen Code a more autonomous agent platform.

---

## Developer Pain Points

**1. File‑type detection reliability** (4+ separate bug reports in 48 hours) – Encrypted source files, large files, UTF‑8 text with Chinese + Markdown, and certain `.cs` files are consistently misidentified as binary. This breaks the core `edit` and `write_file` tools, forcing agents to resort to shell commands. The issue appears to have regressed after v0.15.6.

**2. Large file handling deadlock** – The `edit` tool’s requirement that a file must be “fully read” via `read_file` (without offset/limit) is impossible for files over ~800 lines because `read_file` truncates them. Users report a complete standstill for editing large source files.

**3. Context‑percentage inaccuracy** – The status line’s `cxt` percentage does not reliably reflect actual context usage, leading to unexpected `MAX_TOKENS` errors or premature compaction.

**4. Performance vs. external UIs** – A user comparing Qwen Code with llama.cpp’s web UI for the same GGUF model found significantly slower response times, suggesting overhead in the streaming/rendering pipeline.

**5. International endpoint compatibility** – The DashScope‑intl endpoint fails due to an

</details>