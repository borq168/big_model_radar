# AI CLI Tools Community Digest 2026-05-22

> Generated: 2026-05-22 02:33 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report — 2026-05-22

## 1. Daily Cross-Tool Overview

Today saw a flurry of patch releases for Claude Code (two hotfixes) and GitHub Copilot CLI (three patches), while Gemini CLI and OpenCode each pushed a new stable version alongside heavy community issue/PR activity. Memory pressure and session corruption emerged as a cross-cutting concern (Qwen Code, Kimi Code, OpenAI Codex), and terminal UI regressions continued to frustrate users across most tools. Remote session / multi-device handoff requests appeared in four of the seven monitored repositories, marking it as the most consensus-driven feature ask of the day. No major architectural announcements were made; the ecosystem remains in a “bugfix and polish” phase.

## 2. Activity Comparison

| Tool | Issues Updated (last 24h) | PRs Updated (last 24h) | Releases Today |
|------|---------------------------|------------------------|----------------|
| Claude Code (Anthropic) | 50 (tracker items) | 9 | v2.1.147, v2.1.148 |
| OpenAI Codex | ~20 (estimated) | ~10+ (key PRs) | rust-v0.133.0 |
| Gemini CLI | 50 | 50 | v0.43.0, v0.44.0-preview.0 |
| GitHub Copilot CLI | 37 | 0 | v1.0.52-0, v1.0.52-1 |
| Kimi Code CLI | 9 | 0 | None |
| OpenCode | 50 | 50 | v1.15.7 |
| Qwen Code | 10+ (hot issues highlighted) | 10+ (key PRs) | v0.16.0 |

**Notes:**
- Gemini CLI and OpenCode each updated 50 issues and 50 PRs—the highest raw activity.
- Copilot CLI and Kimi Code had zero PR updates; Claude Code and OpenAI Codex had moderate PR throughput.
- Claude Code and Copilot CLI shipped multiple patches addressing regressions (Bash tool, remote sessions). Kimi Code released nothing.

## 3. Shared Feature Directions

Multiple independent requests across tools point to a cluster of overlapping user needs:

- **Remote session / multi-device handoff** – Claude Code’s pinned background sessions, Copilot CLI’s `--resume` issues and mobile attachment request (#1979, 53👍), Kimi Code’s explicit handoff request (#2269), and Qwen Code’s daemon mode (`qwen serve`) all aim at making sessions portable or controllable across devices. This is the most consistent new feature ask across the ecosystem.

- **MCP (Model Context Protocol) integration pain points** – MCP tool inheritance bugs (Claude Code #30280), MCP OAuth token refresh failures (Codex #17265, Gemini CLI #20990), MCP tool parallelism requests (Codex #23750), and Windows MCP discovery failures (Qwen Code #4218) indicate that MCP is now a critical integration surface but its implementation remains inconsistent and brittle across tools.

- **Terminal UI regressions** – Garbled displays (Claude Code #59539), frozen input (Claude Code #59688, OpenCode #27875), scrollback loss (Codex #14277), TUI lag in tmux (Copilot CLI #3439), Android Termux scroll issues (Kimi Code #2338), and token count doubling after upgrade (Qwen Code #4420) show that TUI stability is a recurring community frustration.

- **Session state / data corruption under pressure** – SQLite corruption w/ no recovery (Codex #21750, #23863), session corruption under memory (Kimi Code #2336), undo state mismatch (OpenCode #5474), and V8 heap OOM in long sessions (Qwen Code #4149, #4351) all describe scenarios where persistent state becomes unreadable or lost.

- **OAuth / authentication friction** – Gemini CLI reports refresh token loss after ~1 hour (#21691); Codex’s phone/WhatsApp requirement (#20161, #22725); Copilot CLI’s MCP OAuth redirect port issues (#3418); Qwen Code’s missing API key on Anthropic retries (#4323). These are separate mechanisms but all create barriers to continuous use.

## 4. Differentiation Analysis

- **Claude Code** leans into agentic governance (code-review plugin, web4-governance plugin, scope enforcement) and autonomous reliability (model hallucination of agent dispatches is a unique concern). Its “pinned background sessions” are the most advanced implementation of persistent remote sessions.
- **OpenAI Codex** distinguishes itself with `codex remote-control` as a foreground daemon, desktop app integration with token usage indicators, and a strong push on MCP parallelism and tool schema compaction. Its community also heavily requests vi-mode in the TUI (#9184, 44👍).
- **Gemini CLI** has the most active OAuth/entitlement reporting and is investing heavily in enterprise policy features (CUELang migration, custom safety checkers, global privacy settings). Its performance PRs (heap OOM fix, sub-second session loading) target large-codebase users.
- **GitHub Copilot CLI** is distinct in its enterprise focus: org-level model parity (#1703, 49👍), remote session policy compliance, and Windows platform stability (PowerShell spawning, keyboard layouts). Zero PR updates today suggest a slower development cadence.
- **Kimi Code CLI** remains the quietest, with only 9 issues and zero releases/PRs. Its unique differentiators are mobile (Android Termux) support and ACP integration for IDEs like Zed/JetBrains. Session corruption under memory pressure (#2336) is a critical but unfixed problem.
- **OpenCode** stands out for its multi-provider support (Grok OAuth added today), subagent permission architecture, and advanced debugging tools (raw API request viewer requests #2339/2340). The `/undo` state mismatch (#5474) and Enter-key-on-permission issues (#27875) are unique UX pain points.
- **Qwen Code** is singularly focused on memory management and observability. It is the only tool with a dedicated daemon mode roadmap (#4175), W3C trace propagation (#4390), and TTFT instrumentation (#4417). Its community is also the most vocal about AI-generated code quality (issue #4369).

## 5. Community Activity Notes

- **Most issues updated:** Gemini CLI and OpenCode both saw 50 issues updated—highest raw volume. Claude Code’s tracker shows 50 items. Copilot CLI had 37.
- **Most PR throughput:** Gemini CLI and OpenCode each touched 50 PRs; Claude Code had 9; Codex 10+ key PRs; Qwen Code 10+; Copilot and Kimi had zero PR updates.
- **Most releases:** Copilot CLI shipped three patches; Claude Code two; Gemini, Codex, OpenCode, Qwen each one stable/preview release; Kimi Code none.
- **Fastest maintainer response:** Claude Code patched the Bash exit code 127 regression within hours (issue #61293 → v2.1.148). Qwen Code merged critical telemetry PRs (#4390) and a memory fix. Copilot CLI addressed disk growth and status line polish in its three patches.
- **No maintainer response yet:** Kimi Code issues (#2269, #1956, #2336) and several OpenCode bugs (#28750, #27875) have no maintainer activity recorded as of the digest.

## 6. Evidence-Backed Observations

1. **Session corruption and memory pressure are the most widely felt stability bugs.** Codex (SQLite corruption w/ no auto-recovery), Kimi Code (session loss under memory), Qwen Code (V8 heap OOM at ~4GB across multiple reports), and Copilot CLI (negative exit-code corruption) all surfaced distinct manifestations of the same underlying problem: long-running sessions degrade to the point of unrecoverable state loss. This is not one tool’s issue—it cuts across four of seven tools.

2. **Terminal UI regressions are a near-universal pain point.** With reports from Claude Code, Codex, Copilot CLI, Kimi Code, OpenCode, and Qwen Code, every tool except Gemini CLI had at least one TUI-related bug updated today. These range from display corruption to input freezing to cross-platform inconsistencies, suggesting that TUI frameworks (likely React Ink or similar) are brittle when faced with diverse terminal emulators and OS-level changes.

3. **Remote session mobility is the most consistently requested feature, but implementations vary widely.** Claude Code’s pinned sessions are the most mature; Copilot’s `--resume` and remote sessions still struggle with org repos and policy errors; Kimi Code explicitly asks for handoff; Qwen Code builds a daemon architecture from scratch. No common protocol or standard exists, which may increase fragmentation.

4. **MCP adoption is accelerating, but with growing pains.** Every tool that supports MCP (Claude Code, Codex, Gemini CLI, Qwen Code) saw issues about tool inheritance, OAuth token refresh, parallel calls, or transport compatibility. Copilot CLI also has MCP/OAuth issues. This suggests MCP is becoming a critical integration layer, but its specification and tool implementations are not yet mature enough to handle the full range of authentication and lifecycle scenarios.

5. **No strong signal for model hallucination or agentic trust as a cross-tool concern

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-05-22

## 1. Today's Update Brief

Two patch releases landed (v2.1.147→v2.1.148) fixing a critical Bash-tool regression that made every command return exit code 127. The issue tracker is active (50 items, 30 shown), with several high-severity bugs reported — including model hallucination of agent dispatches, unintended scope violations, and billing anomalies. Nine pull requests saw updates, mostly around the code‑review plugin and governance plugins.

## 2. Releases

**v2.1.148** — Hotfix for the Bash tool regression introduced in v2.1.147 that caused exit code 127 on every command (including shell builtins). The bug rendered the Bash tool completely unusable for Linux users and some macOS users.
🔗 https://github.com/anthropics/claude-code/releases/tag/v2.1.148

**v2.1.147** — Two key changes:
- Pinned background sessions (`Ctrl+T` in `claude agents`) now stay alive when idle, are restarted in place to apply Claude Code updates, and are shed under memory pressure only after non-pinned sessions.
- The `/simplify` command has been renamed to `/code-review`. It now reports correctness bugs in addition to simplification suggestions.
🔗 https://github.com/anthropics/claude-code/releases/tag/v2.1.147

## 3. Hot Issues (10 noteworthy)

1. **#60366 – Saying "hi" returns "API Error: violates Usage Policy"**
   [OPEN] [bug, area:model]
   Users reporting that simple greetings trigger an API policy violation. 22 comments, 10 👍.
   Affected workflow: Any user attempting a basic conversation.
   Impact: Blocks all usage for affected accounts.
   🔗 https://github.com/anthropics/claude-code/issues/60366

2. **#59539 – Terminal display corrupted with garbled characters**
   [CLOSED] [bug, platform:macos, area:tui]
   Garbled characters throughout every session. Closed but 19 comments, 8 👍.
   Impact: Complete loss of TUI readability.
   🔗 https://github.com/anthropics/claude-code/issues/59539

3. **#61102 – Model ignores scope constraints and executes beyond user’s explicit request**
   [CLOSED] [bug, platform:macos, area:model, area:agents]
   User asked to delete caches and simulators; the model also deleted `node_modules` across all projects. 13 comments.
   Impact: Unintended destructive operations, trust erosion.
   🔗 https://github.com/anthropics/claude-code/issues/61102

4. **#23626 – Feature request: diff comparison against branches other than main**
   [OPEN] [enhancement, area:ide]
   Long‑standing request (since Feb 2026) to support arbitrary branch diffs. 13 comments, 36 👍.
   Affected workflow: Developers working with feature branches.
   🔗 https://github.com/anthropics/claude-code/issues/23626

5. **#61167 – Opus 4.7 fabricates agent dispatches**
   [OPEN] [bug, area:model]
   Model claims to dispatch agents through “OpenClaw” orchestration, describes outputs, but never actually invokes them. 10 comments.
   Impact: Hallucination of execution, misleading users about what was done.
   🔗 https://github.com/anthropics/claude-code/issues/61167

6. **#61293 – Bash tool returns exit code 127 on every command in v2.1.147**
   [CLOSED] [bug, platform:linux, area:bash]
   Reported and fixed within hours. 9 comments, 6 👍.
   Impact: Bash tool completely unusable.
   🔗 https://github.com/anthropics/claude-code/issues/61293

7. **#50331 – Auto mode injects undocumented behavioral system‑reminder**
   [OPEN] [bug, platform:macos, area:core, area:permissions]
   Auto mode goes beyond its documented permission‑gate contract. 8 comments, 10 👍.
   Impact: Users cannot trust documented behavior of permission modes.
   🔗 https://github.com/anthropics/claude-code/issues/50331

8. **#30280 – Sub‑agents don’t reliably inherit MCP tools**
   [OPEN] [bug, has repro, platform:macos, area:mcp, area:agents]
   Documentation says sub‑agents inherit all tools, but they often don’t. 6 comments, 12 👍.
   Impact: Breaks agentic workflows relying on MCP toolchains.
   🔗 https://github.com/anthropics/claude-code/issues/30280

9. **#59688 – Agent View: home page input frozen after returning from agent detail (Windows)**
   [OPEN] [bug, platform:windows, area:tui, area:agent-view]
   TUI rendered correctly but no keyboard input works. 6 comments, 6 👍.
   Impact: Windows users unable to navigate agent list.
   🔗 https://github.com/anthropics/claude-code/issues/59688

10. **#61334 – Compaction threshold regression in v2.1.144+**
    [OPEN] [bug, has repro, area:core, area:mcp, regression]
    MCP tool definitions over‑counted, causing auto‑compact to fire at ~74K tokens instead of ~143K. 2 comments.
    Impact: Frequent context compaction thrashes MCP‑heavy sessions.
    🔗 https://github.com/anthropics/claude-code/issues/61334

## 4. Key PR Progress

1. **#60813 – Fix excessive token consumption on initial prompt**
   [OPEN] PR claiming to address #56136. Proposes an engineered solution.
   🔗 https://github.com/anthropics/claude-code/pull/60813

2. **#61319 – Fix changelog**
   [CLOSED] Minor cleanup to the changelog file.
   🔗 https://github.com/anthropics/claude-code/pull/61319

3. **#20448 – Add web4‑governance plugin for AI governance with R6 workflow**
   [OPEN] Adds lightweight governance with trust tensors and audit trails.
   🔗 https://github.com/anthropics/claude-code/pull/20448

4. **#31974 – Code‑review plugin: pattern learning to auto‑suggest CLAUDE.md rules**
   [CLOSED] Collects validated issues across PRs and suggests CLAUDE.md additions.
   🔗 https://github.com/anthropics/claude-code/pull/31974

5. **#31698 – Fix: strengthen code‑review step 1 gating agent reliability**
   [CLOSED] Upgrades the gate agent from Haiku to a stronger model and adds criteria.
   🔗 https://github.com/anthropics/claude-code/pull/31698

6. **#31699 – Add `--model` flag to code‑review plugin**
   [CLOSED] Allows overriding per‑step model selection for cost/quality tuning.
   🔗 https://github.com/anthropics/claude-code/pull/31699

7. **#31690 – Fix code‑review README algorithm description and add tests/lint.sh**
   [CLOSED] Corrects outdated documentation and adds test harness.
   🔗 https://github.com/anthropics/claude-code/pull/31690

8. **#31697 – Fix: include CLAUDE.md agents in step 5 validation**
   [CLOSED] Previously dropped issues from CLAUDE.md compliance agents, making the review ineffective.
   🔗 https://github.com/anthropics/claude-code/pull/31697

9. **#47061 – Add notification‑sound plugin**
   [OPEN] Plays a system sound on completion events so users don’t miss task ends.
   🔗 https://github.com/anthropics/claude-code/pull/47061

## 5. Feature Request Clusters

**Branch diff flexibility**
- Support diff comparison against branches other than `main` (#23626) — 36 👍, oldest open enhancement.

**Plugin & org management**
- Auto‑install plugins from org managed settings in CLI (#45323).
- Governance / web4 plugin for audit trails (#20448).

**CLI/TUI localization & polish**
- Localize spinner/thinking indicators based on `\language` setting (#61352).
- Support `spinnerVerbs` in VS Code extension (#60814).
- Allow renaming session titles in VS Code (#61345, closed as duplicate).

**Windows‑specific enhancements**
- Specify location of `pwsh.exe` explicitly (#61335).
- Configure LocalCache/Cowork VM data location on Windows (#61350).

**CLAUDE.md enforcement**
- TypeScript interfaces as structural enforcement for CLAUDE.md (#45241).
- Pattern learning to auto‑suggest CLAUDE.md rules (#31974).

## 6. Developer Pain Points

- **Bash tool regressions** – The exit code 127 regression (#61293) broke all Bash usage, though it was quickly patched.
- **TUI corruption** – Multiple reports of garbled display on macOS (#59539) and frozen input on Windows agent view (#59688).
- **Model hallucination & scope violation** – Opus 4.7 fabricating agent dispatches (#61167) and models ignoring explicit scope constraints (#61102) erode trust in autonomous features.
- **Permission mode surprises** – Undocumented system‑reminder injection in Auto mode (#50331) and silent stalling of sub‑agents on MCP permission gates (#61315).
- **MCP inheritance gaps** – Sub‑agents not reliably inheriting MCP tools (#30280) and Windows MCP `npx` failures (#58510).
- **Context compaction thrashing** – Aggressive auto‑compact thresholds (#61334, #61351) disrupt complex agentic sessions.
- **Cost & billing issues** – Double‑charging after plan downgrade (#61339) and excessive token consumption (#60813).
- **Chrome extension unreliability** – MV3 service worker dormancy causing MCP bridge failures (#61347).
- **Cross‑platform inconsistencies** – Mac vs. Windows sending different API request fields (#61348) and `Edit/Write` tool failures in deep git worktrees on Windows (#61303).

*All links point to GitHub issues/PRs in the [`anthropics/claude-code`](https://github.com/anthropics/claude-code) repository.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Codex Community Digest – 2026-05-22

## Today’s Update Brief

The repository saw a new minor release (rust‑v0.133.0) with Goals enabled by default and improvements to `codex remote‑control`. Issues continued to surface around missing context/token usage indicators in the Desktop app, SQLite state corruption on startup, authentication barriers (phone/WhatsApp), and remote‑control regressions. A batch of PRs focused on plugin archive handling, MCP tool parallelism, configuration routing, and tool schema compaction.

## Releases

- **`rust‑v0.133.0`** – Goals are now enabled by default with dedicated storage and progress tracking across active turns. `codex remote‑control` runs as a foreground command, waits for readiness, reports machine status, and retains explicit daemon‑style `start/` behaviour. ([release notes](https://github.com/openai/codex/releases/tag/rust-v0.133.0))

## Hot Issues (10 noteworthy)

1. **[#20161 – Phone number verification doesn’t work](https://github.com/openai/codex/issues/20161)** [CLOSED]
   Authentication flow broken when users try to log in on a different device; SSO leads to a phone‑number prompt even for accounts without a phone. **Impact:** High – blocks access after re‑authentication. **Reaction:** 136 comments, 95 👍.

2. **[#23794 – Codex Desktop no longer shows visible context/token usage indicator](https://github.com/openai/codex/issues/23794)** [OPEN]
   After the latest app update, the in‑line context counter disappeared. Multiple users (including #23862, #23969) confirm the same regression. **Impact:** Reduces user awareness of token consumption. **Reaction:** 22 comments, 25 👍.

3. **[#21750 – Corrupt `state_5.sqlite` wedges startup with no auto‑recovery](https://github.com/openai/codex/issues/21750)** [OPEN]
   SQLite “file is not a database” error on Linux / Enterprise accounts. No recovery path; the CLI hangs. **Impact:** Critical – prevents CLI usage entirely. **Reaction:** 19 comments.

4. **[#23863 – sqlx migration checksum mismatch on `logs_2.sqlite` after app update](https://github.com/openai/codex/issues/23863)** [OPEN]
   Windows 11 crash on startup with sqlx error. **Impact:** App unusable until manual DB fix. **Reaction:** 12 comments.

5. **[#9184 – vi editing mode (like Claude Code / vim)](https://github.com/openai/codex/issues/9184)** [OPEN]
   Request for full vi‑mode in the TUI. Current workarounds unsatisfactory. **Reaction:** 11 comments, 44 👍 – strong community interest.

6. **[#17265 – MCP OAuth tokens not auto‑refreshed](https://github.com/openai/codex/issues/17265)** [OPEN]
   Even with a stored `refresh_token`, Codex does not refresh expired access tokens for routed MCP servers, causing auth errors on tool calls. **Impact:** Breaks persistent MCP workflows. **Reaction:** 9 comments.

7. **[#23915 – Remote Control setup authenticates but shows no devices](https://github.com/openai/codex/issues/23915)** [OPEN]
   After updating macOS app, remote‑control setup completes but no devices appear, though remote instances are still accessible from earlier versions. **Impact:** Breaks cross‑device remote workflows. **Reaction:** 8 comments.

8. **[#23848 – GUI fails to launch due to SQLite state DB initialisation](https://github.com/openai/codex/issues/23848)** [OPEN]
   SQLite initialisation error on Windows 10. **Impact:** Startup failure. **Reaction:** 6 comments.

9. **[#14277 – `--no-alt-screen` does not preserve scrollback in xterm.js terminals](https://github.com/openai/codex/issues/14277)** [OPEN]
   Despite the flag, Cursor/VS Code integrated terminals lose scrollback history. **Impact:** Workflow disruption for users relying on terminal history. **Reaction:** 5 comments.

10. **[#22725 – Codex requires WhatsApp for new subscriptions](https://github.com/openai/codex/issues/22725)** [OPEN]
    Users report being forced to link a WhatsApp account before purchasing a subscription, creating a barrier to entry. **Impact:** Blocks new sign‑ups. **Reaction:** 4 comments.

## Key PR Progress (10 important)

1. **[#23983 – fix: plugin bundle archive handling for upload and install](https://github.com/openai/codex/pull/23983)** [OPEN]
   Moves tar.gz packing/unpacking into a shared helper, eliminating duplicate logic and adding support for GNU long‑name entries. Reduces security surface (size, traversal, link checks).

2. **[#23980 – Add back trace_id to TurnContextItem](https://github.com/openai/codex/pull/23980)** [OPEN]
   Restores the `trace_id` field for debugging internal turn context.

3. **[#23976 – feat(tui): add next prompt suggestions](https://github.com/openai/codex/pull/23976)** [OPEN]
   Contextual follow‑up prompts after completed turns, without re‑introducing heavy hidden‑thread machinery.

4. **[#23757 – Default function tools into tool hooks](https://github.com/openai/codex/pull/23757)** [OPEN]
   Automates `PreToolUse`/`PostToolUse` coverage for local function tools, reducing boilerplate and missed hooks.

5. **[#23750 – Allow parallel MCP tool calls when annotated readOnly](https://github.com/openai/codex/pull/23750)** [OPEN]
   Treats MCP tools with `readOnlyHint: true` as parallel‑safe even when the server doesn’t declare `supports_parallel_tool_calls`.

6. **[#23925 – Use member usage‑limit beacon copy in CLI](https://github.com/openai/codex/pull/23925)** [CLOSED]
   Shows the Desktop workspace‑member usage‑limit message in the CLI after rate‑limited turns.

7. **[#23763 – Preserve auto‑review approval policy in `codex exec`](https://github.com/openai/codex/pull/23763)** [OPEN]
   Prevents `codex exec` from overriding `auto_review` to `never`, enabling unattended exec workflows to use the reviewed MCP write path.

8. **[#23625 – Fix TUI remote config reads](https://github.com/openai/codex/pull/23625)** [OPEN]
   Corrects remote‑mode TUI config reads that still used client‑local state after plugin/MCP ownership moved to the app server.

9. **[#23904 – feat: best‑effort compact large tool schemas](https://github.com/openai/codex/pull/23904)** [CLOSED]
   Adds a compaction pass for connector tool JSON Schemas with large `$defs` and nested shapes, keeping schemas within budget.

10. **[#23975 – Split McpConnectionManager in two](https://github.com/openai/codex/pull/23975)** [OPEN]
    Separates global connection/spawning responsibilities from per‑thread responsibilities, preparing for stdio MCP lifecycle tied to harness.

Also notable:
- [#23963 – Expose conversation history to extension tools](https://github.com/openai/codex/pull/23963) [CLOSED]
- [#23935 – Add image re‑encoding benchmarks](https://github.com/openai/codex/pull/23935) [OPEN]
- [#22916 – Route startup/onboarding config writes through app server](https://github.com/openai/codex/pull/22916) [OPEN]
- [#21567 – Non‑interactive install script mode](https://github.com/openai/codex/pull/21567) [OPEN]

## Feature Request Clusters

- **Terminal editing modes** – Full vi/vim‑mode in the TUI remains the top‑voted open enhancement (#9184, 44 👍).
- **Platform support** – Official Windows ARM64 builds (#23170) and `winget` installation instructions (#20597) are requested by users.
- **Authentication alternatives** – Several users object to requiring WhatsApp (#22725) or phone numbers (#20161) for new accounts or re‑login.
- **Context/token usage visibility** – The removal of the inline usage indicator in the app has generated multiple threads (#23794, #23862, #23969, #23985) asking for its return or a visible alternative.

## Developer Pain Points

- **SQLite corruption and readonly errors** – Multiple reports (#21750, #23863, #23848, #13971) of `state_*.sqlite` or `logs_*.sqlite` becoming unreadable after updates, causing app/CLI crashes with no auto‑repair.
- **Remote control instability** – After updating, remote‑control authentication succeeds but devices vanish (#23915), or only one host is shown (#22950).
- **MCP token refresh failures** – Stored `refresh_token` is not used to re‑authenticate, breaking MCP integrations mid‑session (#17265).
- **Missing context indicator** – Users lose the ability to see token usage in the Desktop app after recent updates, impacting cost awareness.
- **Scrollback loss in xterm terminals** – `--no-alt-screen` still fails to preserve history in VS Code and Windows Terminal (#14277).
- **Generic error messages** – `/goal` failures collapse to generic TUI messages, hiding underlying DB/schema mismatches (#23984).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest – 2026-05-22

## Today’s Update Brief
Two new releases landed today (v0.43.0 and v0.44.0-preview.0). Community activity remained high with 50 issues and 50 PRs updated in the last 24 hours. Notable fixes address parallel tool call duplication, OAuth token refresh hangs, and Flash quota fallback chains.

## Releases

- **v0.43.0** (stable) – [Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.43.0)
  - `feat(core): steer model to use edit tool for surgical edits, fix a typo` by @aishaneeshah
  - `docs: clarify Auto Memory proposes memory updates and skills` by @SandyTao520

- **v0.44.0-preview.0** (preview) – [Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.44.0-preview.0)
  - Bumps version to 0.44.0-nightly base
  - Includes changelog for v0.42.0
  - Contains a refactor to eliminate unsafe assignments (partial linter hygiene work)

## Hot Issues (10 noteworthy)

1. **#21256 – “Why is it so slow?”** – [Issue](https://github.com/google-gemini/gemini-cli/issues/21256)
   *Priority P3, area/core* – User reports file editing taking 20 minutes for a simple island name change. 12 👍, 23 comments. Highlights persistent performance frustration, especially with large codebases.

2. **#19440 – [EPIC] Linter hygiene** – [Issue](https://github.com/google-gemini/gemini-cli/issues/19440)
   *Priority P2, area/platform, help wanted* – Tracks adoption of strict linter rules (unsafe assignments, unsafe returns, promise misuse). 15 comments. Part of broader code quality push.

3. **#27149 – Google OAuth login may not map to correct entitlement path** – [Issue](https://github.com/google-gemini/gemini-cli/issues/27149)
   *Priority P2, area/security, kind/bug* – API 403 errors after OAuth login. User’s personal account blocked due to entitlement routing. 9 comments.

4. **#21691 – OAuth refresh token lost during refresh** – [Issue](https://github.com/google-gemini/gemini-cli/issues/21691)
   *Priority P1, area/core, help wanted* – After ~1 hour, refresh token is not resent, leading to “No refresh token is set”. 9 comments. Critical for long-running sessions.

5. **#21185 – Implement global privacy setting for Gemini Code Assist** – [Issue](https://github.com/google-gemini/gemini-cli/issues/21185)
   *Priority P2, area/security, kind/enhancement* – Request for per-account privacy toggle. 8 comments.

6. **#20990 – MCP OAuth 2.1 Dynamic client registration fails** – [Issue](https://github.com/google-gemini/gemini-cli/issues/20990)
   *Priority P2, area/security, kind/bug* – `registrationUrl` dropped in WWW-Authenticate discovery path. 8 comments, 1 👍. Blocks connection to MCP servers using RFC 8414.

7. **#19979 – Migrate policy configuration from TOML to CUELang** – [Issue](https://github.com/google-gemini/gemini-cli/issues/19979)
   *Priority P2, area/enterprise, kind/enhancement* – TOML’s limitations for complex policies. 8 comments. Community interest in a more expressive policy language.

8. **#19873 – Leverage model’s bash affinity via Zero-Dependency OS Sandboxing** – [Issue](https://github.com/google-gemini/gemini-cli/issues/19873)
   *Priority P2, area/agent, maintainer only* – Proposal to enable native POSIX tool chaining safely. 7 comments, 1 👍. Tracks sandboxing and post-execution routing.

9. **#19666 – Support verbose mode for subagents** – [Issue](https://github.com/google-gemini/gemini-cli/issues/19666)
   *Priority P2, area/agent, kind/enhancement* – Users want subagent to print all thinking/actions. 5 comments, 1 👍.

10. **#19259 – Add regular expressions to agent skills** – [Issue](https://github.com/google-gemini/gemini-cli/issues/19259)
    *Priority P2, area/agent, kind/enhancement* – Regex support for input validation and data extraction. 5 comments.

## Key PR Progress (10 important)

1. **#26652 – fix(core): use snake_case thought_signature for Vertex AI compatibility** – [PR](https://github.com/google-gemini/gemini-cli/pull/26652)
   *Closed* – Fixes 400 INVALID_ARGUMENT errors blocking model steering commands. Critical for Vertex AI users.

2. **#26657 – fix: resolve JavaScript heap out of memory crash using streaming fs.opendir** – [PR](https://github.com/google-gemini/gemini-cli/pull/26657)
   *Closed* – Replaces synchronous file listing with streaming to prevent OOM on large directories. Affects shell completion.

3. **#26632 – fix(core): add silent fallback chains for utility models under Flash quota pressure** – [PR](https://github.com/google-gemini/gemini-cli/pull/26632)
   *Closed* – When Flash3 hits quota, background tasks (edit-fixer, web-search, etc.) now fall back gracefully instead of failing.

4. **#26667 – fix(core): default wait_for_previous to true to fix redundant parallel tool calls** – [PR](https://github.com/google-gemini/gemini-cli/pull/26667)
   *Closed* – Stops duplicate parallel tool executions caused by model over-sampling.

5. **#26672 – ci(triage): fix comment spam by separating internal explanation from public comment** – [PR](https://github.com/google-gemini/gemini-cli/pull/26672)
   *Closed* – Triage bot no longer posts internal reasoning on every triaged issue.

6. **#26634 – fix(core): allow HTTP custom base URLs for private/local proxies** – [PR](https://github.com/google-gemini/gemini-cli/pull/26634)
   *Closed* – Removes HTTPS-only restriction so users can point to local HTTP mirrors/proxies.

7. **#26630 – fix(browser): reset actionCounter between sequential browser_agent invocations** – [PR](https://github.com/google-gemini/gemini-cli/pull/26630)
   *Closed* – Prevents sequential browser agent calls from hitting `maxActionsPerTask` immediately.

8. **#27054 – feat(cli): add support for Windows image pasting and clipboard styling** – [PR](https://github.com/google-gemini/gemini-cli/pull/27054)
   *Open* – Enables paste of images from clipboard in Windows Terminal. Includes empty sequence handling and UI styling.

9. **#27028 – perf(sessions): sub-second /chat loading for large session histories** – [PR](https://github.com/google-gemini/gemini-cli/pull/27028)
   *Open* – Reduces `/chat` load time from 25+ seconds to 634ms for 59 sessions / 2.3GB of JSONL. Builds ultra-fast preview and streaming approach.

10. **#27047 – fix(hooks): make AfterAgent prompt_response match the streamed answer** – [PR](https://github.com/google-gemini/gemini-cli/pull/27047)
    *Open* – Fixes duplicated/corrupted text in `prompt_response` by using actual streamed output instead of debug buffer.

## Feature Request Clusters

- **Policy & Permissions** – Multiple requests for a more expressive policy system: migrating from TOML to CUELang (#19979), fine-grained pattern-based tool argument permissions (#15542), and custom external safety checkers (#27185). All in area/enterprise.

- **Agent Skills & Subagent Configurability** – Users want regex support in skills (#19259), verbose mode for subagents (#19666), and general subagent configurability (tools, policies, hooks) tracked in epic #17760.

- **OAuth & Authentication** – Consistent feedback about OAuth token refresh failures (#21691, #21956), MCP dynamic client registration (#20990), and entitlement mapping for personal accounts (#27149). Also a request for global privacy setting (#21185).

- **Performance & Reliability** – Slow file editing (#21256), quota display bugs (#27191), and silent hangs after shell commands (#25166) drive calls for more robust backend handling.

## Developer Pain Points

- **Performance on large codebases**: Editing files takes many minutes (#21256). The heap OOM crash (#26657) shows memory issues persist.
- **OAuth token management**: Refresh token loss after 1 hour (#21691) and silent refresh hangs (#21956) break long-running sessions.
- **Quota confusion**: Users report 100% quota shown even without usage (#27191), and quota on one model blocking others (#27181).
- **Unreliable file editing**: The agent sometimes uses `WRITE_FILE` instead of partial edits (#21549), and can’t ignore `.venv` in skills (#27205).
- **Session and shell issues**: Resumed sessions miss `!` shell command history (#21066); shell commands get stuck with “Waiting input” (#25166); slash-command conflict deduplication fails to reset (#24333).
- **Antigravity CLI uncertainty**: Questions about whether Gemini CLI will be replaced and whether existing custom commands/credits will transfer (e.g., #27265, #27325) indicate community anxiety about the platform direction.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest – 2026-05-22

## Today’s Update Brief
Three new patches (v1.0.52‑0 and v1.0.52‑1) landed, introducing deferred tool‑loading for custom agents and plain‑shell status line support. 37 issues were updated, with model parity between VS Code and CLI and remote session reliability remaining top community concerns. No pull requests were merged in the last 24 hours.

## Releases
**v1.0.52‑0** – Added opt‑in `deferred-tool-loading` frontmatter for custom agents, enabling tool‑search discovery for agents with large tool lists. Improved `/compact` to accept optional focus instructions, and enhanced general‑purpose subagent usage.

**v1.0.52‑1** – Status line command now supports plain shell commands in addition to executable script paths. Prunes old process log files from `~/.copilot/logs/` at startup to prevent unbounded disk growth. Polished the `/statusline` picker with cleaner item descriptions and better spacing.

## Hot Issues (10 selected)

1. **[#1703 – Copilot CLI does not list all org‑enabled models (e.g., Gemini 3.1 Pro)](https://github.com/github/copilot-cli/issues/1703)**
   *Area: models* – Users report that VS Code Copilot shows more models than the CLI on the same GitHub organization. The missing models are enabled in org settings.
   **Impact:** Blocks teams that rely on org‑specific model selections.
   **Reaction:** 26 comments, 49 👍 – the most active issue today.

2. **[#2751 – `/remote` fails with `could not resolve repository` on organization repos](https://github.com/github/copilot-cli/issues/2751)**
   *Area: agents, enterprise* – Remote sessions fail when the repository is owned by an org, even with correct permissions.
   **Impact:** Breaks enterprise remote‑session workflows.
   **Reaction:** 7 comments, 11 👍.

3. **[#2355 – Internal PowerShell tool fails to spawn pwsh.exe on Windows (ENOENT)](https://github.com/github/copilot-cli/issues/2355)**
   *Area: non‑interactive, platform‑windows* – Interactive prompts work, but the internal PowerShell runtime cannot find `pwsh.exe` despite it being on PATH.
   **Impact:** Windows users cannot use CLI’s non‑interactive PowerShell features.
   **Reaction:** 5 comments, 5 👍.

4. **[#1999 – Cannot enter `@` on German keyboard (Alt‑Gr + Q)](https://github.com/github/copilot-cli/issues/1999)**
   *Area: input‑keyboard* – The CLI ignores key combinations like Alt‑Gr for `@`, making the tool nearly unusable on German layouts.
   **Impact:** Affects all users with non‑US keyboard layouts.
   **Reaction:** 5 comments, 1 👍.

5. **[#3377 – `copilot --resume` no longer creates a new session with a deterministic UUID](https://github.com/github/copilot-cli/issues/3377)**
   *Area: sessions* – A recent change broke the ability to start a new session with a specific UUID via `--resume=<uuid>`.
   **Impact:** External launchers that rely on deterministic session IDs are broken.
   **Reaction:** 4 comments, 3 👍 – now closed as duplicate of #3406.

6. **[#1979 – Feature request: remote session support to attach from mobile/browser](https://github.com/github/copilot-cli/issues/1979)**
   *Area: sessions* – Users want to attach to running CLI sessions from mobile devices or browsers, similar to Claude Code’s remote feature.
   **Impact:** Highly requested – 53 👍, the most upvoted open issue.

7. **[#3439 – TUI rendering lag inside tmux on mintty/Cygwin (1.0.49 regression)](https://github.com/github/copilot-cli/issues/3439)**
   *Area: platform‑windows, terminal‑rendering* – Terminal UI freezes and stutters inside tmux on Windows/Cygwin, not present in v1.0.43/48.
   **Impact:** Windows tmux users cannot use CLI smoothly.
   **Reaction:** 3 comments, 0 👍 but a clear regression report.

8. **[#3444 – `ping` reply `timestamp` is JSON number on Windows, JSON string on Linux (same CLI version)](https://github.com/github/copilot-cli/issues/3444)**
   *Area: non‑interactive* – Cross‑platform JSON‑RPC inconsistency breaks tooling that parses `ping` responses.
   **Impact:** Affects CI/CD pipelines and automation scripts that rely on consistent types.
   **Reaction:** 3 comments, 0 👍.

9. **[#3048 – Support custom providers via ACP (Agent Communication Protocol)](https://github.com/github/copilot-cli/issues/3048)**
   *Area: non‑interactive, models, configuration* – Custom providers set via `COPILOT_PROVIDER_*` env vars are ignored in ACP mode.
   **Impact:** Limits flexibility for BYOK/self‑hosted models.
   **Reaction:** 3 comments, 4 👍.

10. **[#3442 – `Remote sessions not enabled` error after update to v1.0.51](https://github.com/github/copilot-cli/issues/3442)**
    *Area: sessions, enterprise* – Users with remote sessions enabled in org policy see the warning after upgrading, preventing `/remote on`.
    **Impact:** Blocks remote session features for affected enterprise users.
    **Reaction:** 1 comment, 4 👍.

## Key PR Progress
No pull requests were updated in the last 24 hours.

## Feature Request Clusters
- **Model parity & custom providers** – Several issues request that the CLI surface the same model selection as VS Code (#1703) and respect custom providers in ACP mode (#3048, #3448).
- **Remote session improvements** – Users want mobile/browser session attachments (#1979), better org repo support (#2751), and visible policy error messages (#3442).
- **Windows platform stability** – Frequent reports of PowerShell spawning failures (#2355), keyboard‑layout issues (#1999), TUI lag in tmux (#3439), and negative‑exit‑code session corruption (#3454).
- **MCP/OAuth refinements** – Requests for static clientId support (#2717), correct MCP registry URL paths (#3436), and concurrent refresh‑token safety (#3456).
- **Session management** – Feature requests for deterministic resume via UUID (#3377, #3406) and a real‑time session stats panel (#1784).

## Developer Pain Points
- **Cross‑platform inconsistencies** – The `ping` JSON‑RPC timestamp type differs between Windows and Linux (#3444), causing brittle automation.
- **Non‑US keyboard layouts** – Inability to type `@` (and similar keys) renders the CLI unusable on several keyboard layouts (#1999).
- **Windows shell integration** – The internal PowerShell tool fails silently (#2355), and session loading breaks on negative exit codes (#3454).
- **Version‑specific regressions** – The TUI lag (#3439) and remote sessions error (#3442) were introduced in recent patches, forcing users to downgrade.
- **Complex MCP authentication** – Issues with concurrent refresh tokens (#3456) and ignored redirect ports (#3418) make OAuth integration fragile.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-22

## Today's Update Brief

No new releases or pull requests were published in the last 24 hours. However, the community submitted 9 issues — mostly feature requests and bug reports — with notable discussion around cross-device session handoff, ACP integration gaps, and a critical session corruption bug under memory pressure.

## Releases

*No new releases in the last 24 hours.*

## Hot Issues

All 9 issues updated in the last 24 hours are listed below. Community involvement is minimal (0–3 comments per issue), but several topics signal clear user needs.

### 1. 📱 Remote Control / Multi-Device Session Handoff
**#2269** – Author: [@lucianalima777](https://github.com/lucianalima777)
Created: 2026-05-13 | Updated: 2026-05-21 | 💬 3 comments
**Summary:** Request to start a Kimi CLI session on one device and seamlessly continue or remotely control it from another (laptop, web, mobile). Aims to improve workflows across multiple environments.
**Impact:** High for multi-device users; no maintainer response yet.
[🔗 GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2269)

### 2. 🔄 ACP Integration: Session History Not Replayed
**#1956** – Author: [@victorhqc](https://github.com/victorhqc)
Created: 2026-04-20 | Updated: 2026-05-21 | 💬 2 comments
**Summary:** When using kimi-cli as an ACP agent (e.g., with Zed or JetBrains), loading or switching sessions does not replay past conversation history to the client. Clients always start with a blank context.
**Impact:** Blocks effective use of ACP-based integrations with persistent sessions.
[🔗 GitHub](https://github.com/MoonshotAI/kimi-cli/issues/1956)

### 3. 🐛 Session Corruption Under Memory Pressure
**#2336** – Author: [@kkc25](https://github.com/kkc25)
Created: 2026-05-21 | Updated: 2026-05-21 | 💬 1 comment
**Version:** 1.43.0 | **Model:** kimi-for-coding | **Platform:** Linux
**Summary:** When the system is under memory pressure, session conversations are lost and a `400 tool_call` response error occurs on resume.
**Impact:** Critical data loss for users running concurrent AI tasks on memory-constrained machines.
[🔗 GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2336)

### 4. ❓ Error Code 400 Issue (Closed)
**#2341** – Author: [@shaundroberts](https://github.com/shaundroberts)
Created: 2026-05-21 | Updated: 2026-05-21 | 💬 0 comments
**Status:** Closed (no reason stated)
**Summary:** User attached a debug export file but did not describe the issue in text. Likely resolved or duplicate.
[🔗 GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2341)

### 5. 👁️ Reference Implementation for Raw API Request/Response Visualization
**#2340** – Author: [@xiaoheiDTF](https://github.com/xiaoheiDTF)
Created: 2026-05-21 | Updated: 2026-05-21 | 💬 0 comments
**Summary:** Proposes a tool (`claude-tap-plus`) that captures and visualizes raw Claude API requests/responses, serving as a reference for #2339.
**Impact:** Helps debug agent behavior by exposing the exact payload sent to the LLM.
[🔗 GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2340)

### 6. 👁️ Feature Request: Raw API Request/Response Viewer in `vis` Module
**#2339** – Author: [@xiaoheiDTF](https://github.com/xiaoheiDTF)
Created: 2026-05-21 | Updated: 2026-05-21 | 💬 0 comments
**Summary:** The `vis` module lacks the ability to view the complete raw API request sent to the LLM provider. The author details what is missing: full request URL, raw prompt content, tool call specifics, and response details.
**Impact:** Critical for advanced debugging and understanding agent behavior.
[🔗 GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2339)

### 7. 🐛 Kimi Web Cannot Mount Custom Agent File (Closed)
**#1363** – Author: [@gjczone](https://github.com/gjczone)
Created: 2026-03-08 | Updated: 2026-05-21 | 💬 0 comments | 👍 1
**Language:** Chinese
**Summary:** The `kimi --agent-file /path/to/my-agent.yaml web` command does not work as documented; custom agent files cannot be mounted in the web interface.
**Status:** Closed (likely fixed or handled elsewhere).
[🔗 GitHub](https://github.com/MoonshotAI/kimi-cli/issues/1363)

### 8. 🐛 Cannot Scroll in Android Termux
**#2338** – Author: [@xinma711](https://github.com/xinma711)
Created: 2026-05-21 | Updated: 2026-05-21 | 💬 0 comments
**Version:** 1.44.0 | **Model:** k2.6 | **Platform:** Android (Termux)
**Summary:** The terminal interface does not support scrolling on Android Termux, making it unusable for long outputs.
**Impact:** Blocks mobile usage entirely.
[🔗 GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2338)

### 9. 🔔 Enhancement: Approval Prompts Should Trigger a Hook Event
**#2337** – Author: [@pinkelephant0079](https://github.com/pinkelephant0079)
Created: 2026-05-21 | Updated: 2026-05-21 | 💬 0 comments
**Version:** 1.12.0 | **Platform:** macOS
**Summary:** Request to emit a hook (e.g., lifecycle event) when an approval prompt is shown, enabling automation or custom UX flows.
**Impact:** Useful for advanced users integrating approval workflows into custom pipelines.
[🔗 GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2337)

---

## Key PR Progress

*No pull requests were updated in the last 24 hours.*

---

## Feature Request Clusters

Several independent issues point to recurring community asks:

- **Cross-Device & Session Portability**
  #2269 (remote control/handoff) stands alone but aligns with general demand for session mobility.

- **Debugging & Observability Improvements**
  #2339 and #2340 both ask for raw API request/response viewer in the `vis` module, indicating a lack of transparency when troubleshooting agent behavior.

- **ACP Integration Gaps**
  #1956 highlights that session history is not passed to ACP clients. This is a known gap for IDE integrations (Zed, JetBrains).

- **Hooks / Event System**
  #2337 requests a hook for approval prompts. This suggests a desire for more programmatic control over the CLI’s interactive flows.

- **Terminal / UI Compatibility**
  #2338 (Android Termux scrolling) reflects a broader need for better mobile terminal support.

---

## Developer Pain Points

The following recurring frustrations emerge from today’s issue data:

1. **Session Corruption & Data Loss** (#2336) – Memory pressure can destroy session history and trigger API errors, disrupting long-running workflows.
2. **Invisible LLM Payloads** (#2339) – Without raw request/replay visibility, debugging agent behavior is opaque.
3. **Broken ACP Context** (#1956) – Integrations with popular editors cannot leverage existing session history, forcing a blank slate each time.
4. **Mobile Terminal Unusability** (#2338) – Lack of scroll support makes the CLI non-functional on Android Termux.

These pain points are each raised by single users, but their specificity indicates real-world blockers. No maintainer responses have been recorded yet.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-22

## Today's Update Brief

OpenCode v1.15.7 shipped with Grok OAuth sign-in and security hardening around error responses. Community activity remains high: 50 issues and 50 PRs updated in the last 24 hours, with notable regression reports in subagent permission inheritance, OpenAI provider stability, and TUI interaction bugs. Several PRs addressing image/media handling in streaming protocols and JDTLS project root detection are under review.

## Releases

**v1.15.7** ([diff](https://github.com/anomalyco/opencode/compare/v1.15.6...v1.15.7))
- **Improvement:** Added Grok OAuth sign-in, including device-code login flow.
- **Bugfix:** V2 session APIs now return safe `UnknownError` responses with log reference IDs when stored messages are corrupt.
- **Bugfix:** Generic API 500 errors no longer leak server configuration details.

## Hot Issues

1. **#5474 – `/undo` only rolls back conversation, not file changes**
   *[OPEN]* After `/undo`, AI-made file modifications persist in the workspace while only the chat message is removed, causing state mismatch. 25 comments, 11 👍.
   [View](https://github.com/anomalyco/opencode/issues/5474)

2. **#9178 – Copilot provider reauthentication failure**
   *[CLOSED]* GitHub auth flow completes successfully, but Copilot models remain unusable in OpenCode. 19 comments, 6 👍.
   [View](https://github.com/anomalyco/opencode/issues/9178)

3. **#26700 – Subagent parent deny inheritance over-constrains delegated agents**
   *[CLOSED]* Regression from #26597: read-only parent agents copying all deny rules into child agents prevents explicit permissions from working. 17 comments, 2 👍.
   [View](https://github.com/anomalyco/opencode/issues/26700)

4. **#23944 – Frequent `server_error` when using OpenAI GPT-5.4**
   *[OPEN]* Users see repeated `server_error` responses during normal operation, requiring retries. 17 comments, 11 👍.
   [View](https://github.com/anomalyco/opencode/issues/23944)

5. **#27905 – OpenAI OAuth login options missing since v1.14.49**
   *[OPEN]* `auth login` for OpenAI no longer offers browser-based OAuth flows; only API key entry is reachable. 14 comments.
   [View](https://github.com/anomalyco/opencode/issues/27905)

6. **#28377 – Feature request: Gemini 3.5 Flash model support**
   *[OPEN]* Request to add Google's newly announced Gemini 3.5 Flash, prioritizing speed and intelligence. 6 comments, 15 👍.
   [View](https://github.com/anomalyco/opencode/issues/28377)

7. **#28750 – GPT-5.4 fails after reasoning/todowrite in v1.15.7**
   *[OPEN]* Multi-step agent runs break with `assistant messages only support text and tool-call content` error in the OpenAI Responses protocol. 5 comments.
   [View](https://github.com/anomalyco/opencode/issues/28750)

8. **#27875 – Enter key stuck at permission granting prompt**
   *[OPEN]* Subagent permission requests cannot be confirmed; Enter does not submit, only Ctrl+Enter adds newlines. 5 comments.
   [View](https://github.com/anomalyco/opencode/issues/27875)

9. **#28653 – Topbar disappeared in v1.15.6 web UI**
   *[OPEN]* Search bar, terminal, and diff logs all missing after upgrade. 3 comments.
   [View](https://github.com/anomalyco/opencode/issues/28653)

10. **#28753 – Terminal theme resets to default on next visit**
    *[OPEN]* Switching themes with `/theme` does not persist; reverts to `lucent-orng` on re-entry. 2 comments.
    [View](https://github.com/anomalyco/opencode/issues/28753)

## Key PR Progress

1. **#25867 – Clone tool input before passing to EventV2**
   Fixes `TypeError: Attempted to assign to readonly property` on every tool call with experimental mode enabled.
   [View](https://github.com/anomalyco/opencode/pull/25867)

2. **#28761 – Resolve JDTLS root to topmost pom.xml in Maven multi-module projects**
   Fixes issue where JDTLS spawned separate processes per submodule instead of sharing a single instance.
   [View](https://github.com/anomalyco/opencode/pull/28761)

3. **#28255 – Responsive and configurable TUI prompt size**
   Makes prompt area grow with terminal width instead of being capped at 6 lines.
   [View](https://github.com/anomalyco/opencode/pull/28255)

4. **#28757 – Surface code, type, and nested fields on provider stream errors**
   Replaces opaque "stream error" strings with structured error details for OpenAI and Anthropic providers.
   [View](https://github.com/anomalyco/opencode/pull/28757)

5. **#28755 – Emit structured image blocks for tool-result media in Anthropic Messages**
   Fix encoding of multi-megabyte base64 image data in tool results.
   [View](https://github.com/anomalyco/opencode/pull/28755)

6. **#28754 – Emit structured `input_image` for tool-result media in OpenAI Responses**
   Similar fix for OpenAI Responses protocol to properly encode content-typed tool results.
   [View](https://github.com/anomalyco/opencode/pull/28754)

7. **#28734 – Emit `writeTextFile` for file edits in ACP mode**
   Enables Zed's "Review changes" button to appear after file edits through ACP.
   [View](https://github.com/anomalyco/opencode/pull/28734)

8. **#28751 – TUI diff viewer interaction improvements**
   Aligns patch navigation with file tree order, improves single-patch mode selection, adds tests.
   [View](https://github.com/anomalyco/opencode/pull/28751)

9. **#23501 – OpenAI-compatible provider improvements**
   Bundles fixes for system messages, image support, and stream interruption for local/Ollama providers.
   [View](https://github.com/anomalyco/opencode/pull/23501)

10. **#28660 – Fetch messages from server in undo/redo to fix trimmed cache bug**
    Fixes undo/redo failures when in-memory message cache (100-entry cap) is exceeded by long agent loops.
    [View](https://github.com/anomalyco/opencode/pull/28660)

## Feature Request Clusters

**Subagent resource customization**
Multiple requests (#28759, #28747, #28695) ask for finer-grained control over subagents: specifying different models per subagent (e.g., Haiku for cheap tasks), including subagent conversations in session exports, and lifecycle hooks for persistent plugin state.

**Model support expansion**
Users request first-class support for newly announced models: Gemini 3.5 Flash (#28377) and observations that Qwen3.6 Free model in Web UI ignores user questions and continues generating (#28712).

**Permission and security hardening**
Feedback around subagent permission inheritance (#26700), background subagent interruption (#28738), and model-reset on subagent result delivery (#28735) signals demand for clearer agent boundary enforcement.

## Developer Pain Points

- **Undo state mismatch** (#5474, #28026, #28660): The `/undo` command failing to revert file changes and the "p" key not registering after content updates are persistent UX friction points.
- **Subagent control limitation** (#28738, #27875, #28735): Interruptions not propagating to subagents and Enter key not working on permission prompts degrade multi-agent workflows.
- **Provider reliability** (#23944, #26344, #9178, #28750): Frequent server errors with OpenAI GPT-5.4 and Copilot "forbidden" errors interrupt development sessions.
- **Edit tool precision** (#24742): Loose fallback matching in the `edit` tool can delete large file ranges, with one report of non-contiguous `oldString` causing unintended deletions.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-22

## Today's Update Brief

Qwen Code v0.16.0 was released but the launch was rocky, with 7 CI/CD workflow failures across the release and VSCode Companion build pipelines in the past 24 hours. The community’s attention is heavily focused on memory pressure and OOM crashes in long sessions—at least 5 distinct OOM-related issues received updates today. Concurrently, telemetry and observability infrastructure is seeing active development, with 3 PRs landing trace propagation and time-to-first-token (TTFT) instrumentation.

## Releases

- **v0.16.0** — Released 2026-05-21
  - `feat(cli)`: wrap markdown links in OSC 8 escape sequences so wrapped URLs remain clickable in terminal emulators ([#4037](https://github.com/QwenLM/qwen-code/pull/4037))
  - `fix(core)`: normalize cumulative OpenAI stream deltas, fixing a bug where partial delta accumulation produced malformed text responses in the `openai` API provider

## Hot Issues

1. **[#4175 — proposal(serve): Mode B feature-priority roadmap toward v0.16 production-ready](https://github.com/QwenLM/qwen-code/issues/4175)** (26 comments)
   Community-driven roadmap for the `qwen serve` daemon mode. The author lays out a Wave-based delivery plan building on the merged `1 daemon = 1 workspace` refactor. Active discussion among maintainers about priority ordering; labeled `scope/non-interactive`.

2. **[#3803 — Daemon mode (qwen serve): proposal & open decisions](https://github.com/QwenLM/qwen-code/issues/3803)** (21 comments)
   The original 6-chapter daemon design proposal by @wenshao. Reopened after v0.16.0 launch to track remaining implementation items. The community is pushing for a single-process architecture, which the maintainers have accepted as the baseline.

3. **[#4149 — FATAL ERROR: Ineffective mark-compacts near heap limit — JavaScript heap out of memory](https://github.com/QwenLM/qwen-code/issues/4149)** (11 comments)
   Detailed GC trace showing V8 heap exhaustion (~4085 MB) in a long CI session. No clear reproduction step yet; the reporter suspects unbounded history growth. Multiple `👍` reactions indicate this is a widely felt pain point.

4. **[#4351 — Out of memory with local Qwen 3.6 model via llama.cpp under Linux](https://github.com/QwenLM/qwen-code/issues/4351)** (7 comments)
   Reporter hit OOM twice after resuming a session with a local model endpoint. The issue adds a data point that OOM is not limited to cloud API usage—local inference users are affected too.

5. **[#4035 — fetch failed on DashScope-intl endpoint: undici dispatcher incompatibility](https://github.com/QwenLM/qwen-code/issues/4035)** (5 comments, **CLOSED**)
   DashScope (International) users could not make any API calls because the internal Undici HTTP dispatcher was not configured to handle the `dashscope-intl.aliyuncs.com` endpoint. Closed by a fix shipped in v0.16.0. High community reaction (3 👍).

6. **[#4218 — MCP Server "filesystem" shows connected but tools unavailable to model (Windows)](https://github.com/QwenLM/qwen-code/issues/4218)** (3 comments)
   Windows-specific MCP integration bug. The UI reports the `@modelcontextprotocol/server-filesystem` server as connected, but the model sees zero tool definitions. Reporter tried both stdio and SSE transports with the same result. No workaround identified yet.

7. **[#4223 — mimo-v2.5-pro API Error: 400 Param Incorrect after first tool call](https://github.com/QwenLM/qwen-code/issues/4223)** (4 comments, **CLOSED**)
   Model-agnostic tool-use regression: any non-OpenAI-compatible API provider returning a `reasoning_content` field in the first response causes subsequent tool calls to fail with `400 Param Incorrect`. Root cause identified as the `reasoning_content` field being passed back to the API provider unsanitized.

8. **[#4323 — anthropic Missing API key](https://github.com/QwenLM/qwen-code/issues/4323)** (4 comments)
   A Chinese-language user reports that the Anthropic provider silently drops the `X-Api-Key` header in outbound requests after the first successful call. Debug by HTTP proxy shows the key is present on the first request but absent on retries. No maintainer response yet.

9. **[#4420 — UI bug causing token doubling after upgrade to v0.16.0 on Windows](https://github.com/QwenLM/qwen-code/issues/4420)** (2 comments, **new today**)
   P1-priority Windows-specific bug: terminal UI renders garbled characters, and the status bar shows token counts doubled. Reporter downgraded to v0.15.11 to recover. The issue is only hours old.

10. **[#4369 — Stop using AI issue / PR and fix RAM leak manually](https://github.com/QwenLM/qwen-code/issues/4369)** (4 comments, **CLOSED**)
    Frustrated user argues that the project is relying too heavily on AI-generated code to fix memory issues, which “makes code hard to read and GC hard to work.” Suggests rendering only visible content on screen and saving history to files instead of keeping it in-memory. Closed without maintainer comment, but the sentiment is notable.

## Key PR Progress

1. **[#4390 — feat(telemetry): propagate W3C traceparent + X-Qwen-Code-Session-Id to outbound LLM requests](https://github.com/QwenLM/qwen-code/pull/4390)** (merged)
   Closes #4384. Every outbound LLM request now carries a W3C `traceparent` header and a `X-Qwen-Code-Session-Id` header, enabling end-to-end trace correlation across Qwen Code, the upstream model service, and any downstream observability backend. Sub-issue of #3731 (P3 deeper observability).

2. **[#4417 — Phase 4a: TTFT capture + GenAI semconv dual-emit](https://github.com/QwenLM/qwen-code/pull/4417)** (open)
   Adds time-to-first-token (TTFT) measurement to the `qwen-code.llm_request` OTel span. A new `hasUserVisibleContent(chunk)` helper detects the first contentful token. Dual-emits GenAI semantic convention attributes for compatibility with standard OTel dashboards. Part of the P3 observability milestone.

3. **[#4359 — feat(ci): preflight-triage AI review + PR compliance gates](https://github.com/QwenLM/qwen-code/pull/4359)** (open, `oversized-ok`)
   Adds two CI workflows: a mandatory PR-compliance gate (template check, size limit) and an advisory AI review that routes PRs to one of four review tiers (`ULTRA_LIGHT`, `LIGHT`, `STANDARD`, `DEEP`) based on diff complexity. 34 files changed; the PR is itself the largest change this week.

4. **[#3570 — feat(core): add simplify bundled skill](https://github.com/QwenLM/qwen-code/pull/3570)** (dormant, updated)
   Adds a `/simplify` slash command skill that runs a structured cleanup of recent changes. The skill is discoverable via the bundled skill registry. No recent activity from maintainers.

5. **[#4290 — feat(memory): project-scoped memory writes and .qwen/QWEN.local.md](https://github.com/QwenLM/qwen-code/pull/4290)** (open)
   Two features: (1) `auto` scope for `save_memory` that writes to the project-level `QWEN.md` when a project file exists, and (2) support for a user-specific `.qwen/QWEN.local.md` file that overlays on top of the project memory without being committed to version control. Addresses a long-standing request (#359).

6. **[#4416 — fix(cli): stabilize flaky sticky-todo remeasure test](https://github.com/QwenLM/qwen-code/pull/4416)** (open)
   Fixes a flaky CI test that failed intermittently on macOS runners. The test incorrectly used an absolute `mock.calls.length` assertion instead of accounting for React strict-mode double-renders. A small but important maintenance fix.

7. **[#4406 — feat: fortune loading phrases](https://github.com/QwenLM/qwen-code/pull/4406)** (open)
   Adds an optional `enableFortunes` setting that replaces the default loading spinner messages with output from the Unix `fortune` command (or any custom command). Silly but harmless—merged after maintainers OK’d it as a “fun toggle.”

8. **[#4414 — feat(cli): background housekeeping for stale file-history dirs](https://github.com/QwenLM/qwen-code/pull/4414)** (open)
   PR #4064 introduced `~/.qwen/file-history/{sessionId}/` for `/rewind` functionality but had no cleanup mechanism. This adds a background housekeeping framework that sweeps directories older than 30 days (configurable). The first user of the framework.

9. **[#4412 — docs(developers): add daemon-mode developer deep-dive documentation set](https://github.com/QwenLM/qwen-code/pull/4412)** (open)
    Adds a 2-file developer docs set under `docs/developers/daemon/`, covering the daemon architecture, session lifecycle, and the SSE event protocol. Valuable for contributors working on the `qwen serve` daemon mode (#3803).

10. **[#4411 — perf(core): F2 cleanup PR A — R9/W11/W12/R10 (post-merge follow-ups)](https://github.com/QwenLM/qwen-code/pull/4411)** (open)
    Series of pure-refactor / data-structure fixes from the F2 review (#4336). Highlights: `McpClientManager` constructor reduces 7 positional args to a config object; removes dead code paths in MCP routing; adds a `getMcpTransportPool()` accessor for future pool-sharing work. No behavioral change.

## Feature Request Clusters

- **Memory management & diagnostics** — Multiple users request configurable memory caps, automatic cleanup of old history, and diagnostics for V8 heap pressure. Issues #3000 (Memory Diagnostics), #4374 (disable auto-memory recall), and #4369 (render-only visible content) all orbit this theme, although each proposes a different solution approach.

- **Daemon mode (`qwen serve`) feature completion** — Issues #4175 and #3803 together form a detailed roadmap for turning the daemon mode into a production-ready service. Additional feature requests within these threads cover MCP transport pooling (delivered in PR #4336), persistent session storage, and multi-user access control.

- **Observability / telemetry extension** — Beyond the merged trace propagation (#4390) and the TTFT PR (#4417), issue #4384 requests W3C `traceparent` + session ID propagation (now closed by the PR). The cluster also includes a request for structured LLM cost tracking per session (implicit in #3731).

- **Authentication & API compatibility** — The `dashscope-intl` endpoint fix (#4035, closed) and the `mimo-v2.5-pro` `400 Param Incorrect` bug (#4223, closed) both surfaced broader concerns: Qwen Code should sanitize vendor-specific response fields before re-sending them in subsequent requests. A third issue (#4323) reports a missing API key on Anthropic retries.

- **CI/CD stability** — Multiple automated workflow failures on 2026-05-21 (issues #4409, #4400, #4395, #4392, #4391, #4389, #4388, #4338) for both the main release and VSCode Companion release. The frequency suggests the release pipeline is fragile and may need retry logic or infrastructure hardening.

## Developer Pain Points

- **Memory pressure / OOM** — This is the single most acute pain point this week. At least 4 distinct OOM reports (#4149, #4351, #4276, #4399) all show V8 heap exhaustion around 4–4.1 GB in long sessions. The community suspects unbounded history accumulation and a `structuredClone` hot path (the fix PR #4286 replaced `structuredClone` with shallow copies). The maintainers are actively merging memory-related PRs (#4403, #4286, #4366).

- **v0.16.0 release instability** — While the release is out, the CI/CD pipelines failed 7 times in the last 24 hours. Combined with a new Windows UI regression (#4420) that doubles token counts, and the M

</details>