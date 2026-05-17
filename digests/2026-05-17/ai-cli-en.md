# AI CLI Tools Community Digest 2026-05-17

> Generated: 2026-05-17 02:11 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Tool Comparison Report — 2026-05-17

## 1. Daily Cross-Tool Overview

Today saw no major releases across the tracked tools except OpenCode, which shipped three patch releases (v1.15.1–v1.15.3) fixing file reading, TUI context, and startup validation bugs. Qwen Code and Gemini CLI generated the most pull request activity—50 and 35 PRs respectively—driven by Qwen's daemon mode (Mode B) rollout and Gemini's leak/UX fixes. Claude Code had the quietest day with a single placeholder PR and no releases, while Copilot CLI and Kimi Code CLI saw moderate activity. Community pain points cluster around remote session fragility (Claude Code, OpenAI Codex, Gemini CLI), multi-repo workspace configuration (Claude Code, Kimi Code), and rate-limit transparency (Claude Code, OpenAI Codex, Copilot CLI).

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Active (24h) | Releases (24h) | Notable |
|---|---|---|---|---|
| **Claude Code** | 50 | 1 | None | Single placeholder PR (#58673); no maintainer activity |
| **OpenAI Codex** | 30 | 20 | None | High PR velocity on remote sync stack (7-PR series) |
| **Gemini CLI** | 50 | 35 | None | Most PRs today; 10 key PRs landed or advanced |
| **Copilot CLI** | 24 | 2 | None | Notable PR #3353 proposing subscription removal |
| **Kimi Code CLI** | 6 | 3 | None | Smallest activity volume among tracked tools |
| **OpenCode** | 50 | 10 | **3 patch releases** | v1.15.1 → v1.15.3; most active release cadence today |
| **Qwen Code** | 24 | 50 | None | Highest PR count; daemon mode spike PRs across 4 layers |

## 3. Shared Feature Directions

The following requirements appeared across **two or more** tool communities in today's digests:

- **Multi-device / remote session continuity**: Claude Code (#28571 — remote resync failure), OpenAI Codex (#22696 — remote authorization failures), Gemini CLI (no explicit issue today but PRs sync TUI state), Kimi Code (#2269 — multi-device session handoff request). All four communities show demand for reliable cross-device session persistence and remote control.

- **Per-project / per-directory agent configuration**: Claude Code (#23669 — per-teammate work_dir and CLAUDE.md), OpenAI Codex (#12115 — dynamically loaded AGENTS.md per subdirectory), Kimi Code (#2152 — global ~/.kimi/AGENTS.md). Communities want agent instructions to respect directory boundaries without manual copying.

- **Rate limit visibility and predictability**: Claude Code (#52135 — quota depletion faster than expected), OpenAI Codex (#9508 — deterministic weekly reset window, #22929 — rate-limit label hardening), Copilot CLI (#3305 — per-org usage monitoring, #3312 — per-prompt statistics). Three tools see users demanding clearer, more deterministic billing and limit information.

- **Memory leak / resource exhaustion fixes**: Gemini CLI (3 PRs today: PTY memory leak #27154, PTY dep upgrade #27147, env var redaction #27144), Kimi Code (2 PRs: broadcast queue bounding #2236, TCPConnector reuse #2231), Qwen Code (#2562 — structuredClone OOM, #4188 — cache limits), OpenCode (#2236 — broadcast queue fix). Multiple maintainer teams are actively patching resource leaks under long sessions.

- **Approval mode UX simplification**: Gemini CLI (PR #27158 — Full Access mode in Shift+Tab cycle), Kimi Code (PR #2249 — unified approval modes), OpenCode (PR #27855 — /yolo toggle). Three tools are converging on simplified "auto-approve" or "full access" UX patterns.

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Qwen Code |
|---|---|---|---|---|---|---|---|
| **Primary focus today** | Bug triage, documentation fixes | Remote session sync, goal behavior | Reliability fixes (leaks, hangs, UX) | Subscription model shift, auth fixes | UI bugs, cross-project config | Patch releases, skills discoverability | Daemon mode (Mode B) rollout across layers |
| **Target user emphasis** | Agent teams, multi-repo workflows | Pro/Business tier, VS Code extension | Skill-based autonomy, sub-agents | Enterprise observability, BYOK | Multi-project devs, Windows users | Terminal-first power users | Structured output, daemon/API users |
| **Technical approach** | Agent team orchestration with per-teammate config | RPC-based remote sync, turn context ops | AST-aware codebase mapping, Auto Memory | MCP integration, platform-specific auth | Shared config, session handoff | Slash commands, skills system, TUI polish | HTTP/SSE daemon with typed event schema |
| **Most distinctive feature** | Agent tool for subagent spawning | First-class SDK login support | `/compress` slash command for long sessions | Proposal to remove subscription requirement | Unified approval toolbar | Per-agent thinking toggle | `--json-schema` structured output mode |

## 5. Community Activity Notes

- **Highest issue volume**: Claude Code and Gemini CLI both saw 50 issues updated, though Claude Code's were mostly bug reports with no maintainer PR response, while Gemini CLI's issues were accompanied by active PR fixes.

- **Highest PR velocity**: Qwen Code (50 PRs, primarily daemon mode spike implementations from three contributors) and Gemini CLI (35 PRs, mostly from maintainers fixing leaks and UX). OpenAI Codex had 20 PRs, including a 7-PR remote sync stack.

- **Most releases**: OpenCode shipped three patch versions today, the only tool with new releases. No other tool published a release in the last 24 hours.

- **Strongest maintainer response**: Gemini CLI and Qwen Code show the most coordinated maintainer activity—Gemini with 10 key PRs addressing specific bug reports, Qwen with multiple contributors landing daemon mode adapters simultaneously. OpenAI Codex maintainers are actively triaging the 7-PR sync stack.

- **Lowest maintainer engagement**: Claude Code had no maintainer PR traffic beyond a placeholder; its most-upvoted issue (#28571, 48 👍) has no visible maintainer response. Copilot CLI's PR #3353 (subscription removal) has no maintainer comments, and Kimi Code's 6 issues received minimal maintainer interaction.

## 6. Evidence-Backed Observations

1. **Three tools are simultaneously shipping memory leak fixes under long-running sessions.** Gemini CLI (PTY leak, FD leak), Kimi Code (broadcast queue, TCP connector), and Qwen Code (structuredClone OOM, cache limits) all published PRs today addressing resource exhaustion. This suggests extended agent sessions are becoming common enough across platforms to expose underlying resource management issues.

2. **Remote session reliability is a cross-tool pain point with no unified solution.** Claude Code (#28571), OpenAI Codex (#22696, #18960), and Kimi Code (#2269) all report connection drops, authorization failures, or lack of reconnection logic. Each tool is solving this independently—OpenAI Codex is furthest along with a 7-PR remote sync stack, while Claude Code's top issue has no maintainer response.

3. **Multi-repo workspace configuration is emerging as a consistent unmet need.** Claude Code users want per-teammate directories and CLAUDE.md files (#23669). OpenAI Codex users want dynamically loaded AGENTS.md per subdirectory (#12115). Kimi Code users want global AGENTS.md for cross-project conventions (#2152). All three requests address the same core problem: agent configuration does not scale to multi-project workflows.

4. **Rate limit and billing transparency is a growing source of user frustration across paid tiers.** Claude Code Max plan users report 51% weekly quota consumed mid-week (#52135). OpenAI Codex Pro users want deterministic reset windows (#9508) and report charged-but-undelivered credits (#21973, #19830). Copilot CLI users request per-org and per-prompt usage statistics (#3305, #3312). The pattern suggests current metering implementations are opaque enough to erode trust.

5. **Platform-specific regressions continue to break basic functionality on Windows and Linux.** Claude Code Windows back-arrow freeze (#59251, just fixed). Copilot CLI Windows auth failure (#716, open since December). Kimi Code UTF-8 decode error on Windows (#2313). Gemini CLI browser agent fails on Wayland (#21983). OpenCode Alpine Linux musl incompatibility (#27589). Each tool has at least one unresolved platform-specific blocker, suggesting insufficient testing coverage on non-macOS environments.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-05-17

## Today's Update Brief

Low activity overall: no new releases in the last 24 hours, and only a single trivial pull request (placeholder “s”). The issue tracker saw 50 items updated, with a concentration of bugs around recent agent-view and fast-mode model changes (v2.1.139–v2.1.142), along with a fresh cluster of documentation fixes contributed by one community member. Community reactions remain strongest on the long-standing remote control resync failure and the per‑teammate workspace configuration request.

## Releases

No new versions published in the last 24 hours. Latest reported version in issues: **v2.1.143**.

## Hot Issues

### 1. Remote control session fails to resync after connection drop
**#28571** — [link](https://github.com/anthropics/claude-code/issues/28571)
The iOS remote control connection silently drops (backgrounding, network interruption) without user feedback; messages appear to send but fail, and the session remains stuck as “Interactive”. 48 👍 and 14 comments make this the most upvoted active issue. Community wants a visible connection indicator and automatic reconnection logic.

### 2. Per‑teammate working directory, CLAUDE.md, and MCP configs for Agent Teams
**#23669** — [link](https://github.com/anthropics/claude-code/issues/23669)
When working on multi‑repo features, teammates currently inherit the team‑lead’s working directory. Request to allow per‑teammate `work_dir`, `CLAUDE.md` path, and independent MCP server configs. 24 👍 and 20 comments; remains open since February.

### 3. Max (20x) weekly quota depletion disproportionately fast
**#52135** — [link](https://github.com/anthropics/claude-code/issues/52135)
On the top Max 20x plan, users observe 51% of weekly quota consumed mid‑week and ~17% burnt within minutes of a session reset. 11 comments, 3 👍. Suggests cache‑read tokens or background overhead are not being discounted as expected.

### 4. AskUserQuestion tool_use event not written to session.jsonl until user responds (regression)
**#58463** — [link](https://github.com/anthropics/claude-code/issues/58463)
Session transcripts no longer record `AskUserQuestion` events until after the user answers. Verified working in v2.1.119, broken in current versions. Impacts anyone parsing session logs programmatically.

### 5. Pressing back arrow while response is generating freezes CLI (Windows)
**#59251** — [link](https://github.com/anthropics/claude-code/issues/59251) — **Closed**
When using `claude agents` on Windows, pressing the back arrow during generation completely freezes the terminal. Closed with a fix already shipped. 5 comments, 4 👍.

### 6. In‑process team agents lack the Agent tool (cannot spawn subagents)
**#31977** — [link](https://github.com/anthropics/claude-code/issues/31977)
Default `--teammate-mode in-process` omits the `Agent` tool, preventing sub‑agent creation (Explore, Plan, etc.). Switching to `--teammate-mode tmux` works. 6 👍, 5 comments.

### 7. Token drift in parallel Write tool calls (path prefix substitution)
**#55455** — [link](https://github.com/anthropics/claude-code/issues/55455)
When generating multiple parallel `Write` calls with identical path prefixes, the fifth instance substitutes real‑world parts (e.g. `shane` → `seine`), causing write failures. Suggests a token‑level coherence issue in the model.

### 8. Claude Code for VS Code hangs in v2.1.78+
**#45729** — [link](https://github.com/anthropics/claude-code/issues/45729)
The VS Code extension becomes unresponsive after upgrade. Affects Windows, macOS, WSL. 3 👍, 3 comments. Regression likely introduced in the agent‑view release train.

### 9. Background sessions don’t load user agents from ~/.claude/agents/
**#58729** — [link](https://github.com/anthropics/claude-code/issues/58729)
Custom agents defined in `~/.claude/agents/` are not available in `bg` (background) sessions, though they work in foreground sessions. Follows the same pattern as #41973 and #58353.

### 10. Interactive `claude` sessions classified as background jobs post‑2.1.139
**#59848** — [link](https://github.com/anthropics/claude-code/issues/59848)
Every session now gets `$CLAUDE_JOB_DIR` and a `template: "bg"` flag, causing bg‑only guards (e.g. overnight limits) to fire on interactive work. Introduced with the agent-view rewrite.

## Key PR Progress

Only one PR was updated in the last 24 hours:

**#58673** — [link](https://github.com/anthropics/claude-code/pull/58673)
Title: “s”
A placeholder PR with no substantive description or comments. No actionable progress today.

## Feature Request Clusters

### Multi‑repository & multi‑teammate workspace flexibility
- **#23669** — Per‑teammate `work_dir`, `CLAUDE.md`, and MCP configs
- **#59502** — Programmatic `/effort` and `/model` switching for multi‑agent orchestration
- **#31977** — In‑process teammates need the Agent tool (sub‑agent spawning)
- **#58729** — Background sessions should load user‑defined agents
- **#57037** — Permission cascade failure when multiple Agent tool calls happen in one message

Taken together, users building orchestrated, multi‑repo workflows are hitting several hard limits in the current agent team and session model.

### VS Code extension experience gaps
- **#45729** — Hang after upgrade to v2.1.78+
- **#59874** — Model picker shows stale model name after selection
- **#59826** — Granting new permissions requires hand‑editing JSON; no in‑extension “Allow once/always” flow

### Documentation improvements (contributed by @coygeek)
- **#56881** — Missing `CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN` env var
- **#56156** — Worktrees guide still says `EnterWorktree` branches from default branch
- **#56157** — Errors page omits `/compact` and `--debug` guidance for auto mode classifier outages
- **#56498** — `/branch` docs omit the branched session ID usable with `/resume`
- **#56499** — Managed MCP URL‑pattern docs omit `*://` scheme wildcard
- **#56879** — `CLAUDE_CODE_SESSION_ID` not documented in env‑vars reference
- **#57449** — Prompt suggestions docs still say Enter accepts and submits

All closed; fixes have been merged.

## Developer Pain Points

- **Model & cost issues** — Multiple reports of quota depletion faster than expected on Max plans (#52135, #59872), silent fast-mode model swap breaking pinned‑model workflows (#59860), and reasoning regression in long‑running sessions with Opus 4.7 (#59873).
- **UI freezing & lockups** — Back‑arrow freeze on Windows agents (#59251, fixed), VS Code extension hanging (#45729), edit UI not appearing on macOS/iOS (#59869).
- **Session classification confusion** — Interactive sessions mis‑tagged as background jobs (#59848), leading to unintended guard rails.
- **Token coherence bugs** — Parallel Write calls suffering path‑prefix drift (#55455) undermines trust in multi‑tool output.
- **Remote control fragility** — No reconnection or user feedback on connection drop (#28571), affecting iOS users heavily.
- **Permission management friction** — No in‑UI approval flow for new permissions in VS Code (#59826), and cascade‑failure when multiple agent calls prompt simultaneously (#57037).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-17

## Today's Update Brief

No new releases were published in the last 24 hours. Community activity remained high across all surfaces, with 30 open/updated issues and 20 active pull requests covering rate-limit transparency, remote session synchronization, goal/pause agent behavior, and IDE extension enhancements. Several infrastructure PRs from OpenAI maintainers are consolidating core operation types and routing TUI configuration writes through the app-server.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **#12564 — Allow renaming task/thread titles to improve history navigation** (52 comments, 96 👍)
   Request for the VS Code extension to support renaming conversation/thread titles. Community is strongly in favor; maintainers have labeled `[enhancement, extension]`.
   [Link](https://github.com/openai/codex/issues/12564)

2. **#7291 — VSCode extension failed to revert the changes** (42 comments)
   Business-tier user on macOS reports that Codex's "revert" action leaves stale state. The workaround is manual rollback. Continued discussion without a fix patch yet.
   [Link](https://github.com/openai/codex/issues/7291)

3. **#20552 — View > Toggle File Tree is enabled but does not reliably reveal the file tree** (34 comments)
   macOS desktop app: toggling the file tree from the menu is unreliable. User reports needing multiple clicks or restarting the app; affects basic project navigation.
   [Link](https://github.com/openai/codex/issues/20552)

4. **#22696 — Failed to authorize remote control** (30 comments, 46 👍)
   Pro users on macOS report that the new remote control setup (`Control + Click` → `Connect`) fails with authorization errors after the most recent Codex update. High community concern because remote is a flagship feature.
   [Link](https://github.com/openai/codex/issues/22696)

5. **#18960 — Frequent reconnect loop: websocket closed by server before response completed** (27 comments)
   Pro-tier user on macOS hitting persistent streaming failures. The app enters a reconnect loop, consuming time while producing no output. Multiple users report similar symptoms in comments.
   [Link](https://github.com/openai/codex/issues/18960)

6. **#9508 — Make Weekly Limit Reset Deterministic** (23 comments)
   Pro users want a fixed reset window for weekly usage limits instead of a rolling window. Current behavior creates unpredictable "can't work" gaps. Maintainers have labeled `[enhancement, rate-limits]`.
   [Link](https://github.com/openai/codex/issues/9508)

7. **#12115 — Dynamically loading nested AGENTS.md** (18 comments, 52 👍)
   CLI users request `AGENTS.md` files in child directories load on-demand (similar to Claude Code's `CLAUDE.md` behavior). Current flat-loading is inconvenient for monorepos. Targeted at maintainers Clay and Cooper Reid.
   [Link](https://github.com/openai/codex/issues/12115)

8. **#20678 — Browser Use cannot connect to IAB from Node REPL on macOS** (11 comments)
   Browser Use tool fails to bootstrap on macOS with `Failed to connect to browser-use backend "iab"`. Affects the in-app browser skill for desktop users.
   [Link](https://github.com/openai/codex/issues/20678)

9. **#13009 — Spark model rejects reasoning.summary with unsupported_parameter** (11 comments)
   CLI 0.106.0: the `spark` model variant returns an `unsupported_parameter` error when codex sends `reasoning.summary`. Breaks reasoning-based workflows on Pro tier.
   [Link](https://github.com/openai/codex/issues/13009)

10. **#22107 — Desktop: context compaction fails with remote compact stream disconnected** (7 comments)
    Context compaction during long sessions fails with `stream disconnected before completion`. Leaves users unable to continue long-running conversations without restarting.
    [Link](https://github.com/openai/codex/issues/22107)

## Key PR Progress

1. **#23093 — sdk/python: add first-class login support**
   Exposes `account/login`, `account/read`, and `account/login/completed` RPCs/notifications as a public client API. Currently, SDK users must configure auth externally.
   [Link](https://github.com/openai/codex/pull/23093)

2. **#22510 — [7 of 7] Sync TUI next-turn state**
   Final PR in a stack wiring remote TUI clients to app-server notifications so model/plan/fast-mode changes made in one TUI propagate to all connected TUIs.
   [Link](https://github.com/openai/codex/pull/22510)

3. **#23094 — goal: pause continuation loops on usage limits and blockers**
   Addresses three linked issues: `/goal` will pause when hitting hard usage limits, repeated permission blockers, or external-resource blockers instead of burning tokens on retry loops.
   [Link](https://github.com/openai/codex/pull/23094)

4. **#22929 — Harden CLI rate limit window labels**
   Formats rate-limit warning labels only for known window durations (5h, daily, weekly, monthly, annual). Falls back to generic copy when secondary protection data is missing.
   [Link](https://github.com/openai/codex/pull/22929)

5. **#22509 — [6 of 7] Add app-server next-turn state API**
   Adds a dedicated v2 API for remote clients to update a thread's next-turn defaults and receive broadcast notifications.
   [Link](https://github.com/openai/codex/pull/22509)

6. **#23075 — [3 of 7] Remove UserTurn**
   Mechanical migration moving remaining `Op::UserTurn` callers onto `Op::UserInput`, simplifying the core input op family.
   [Link](https://github.com/openai/codex/pull/23075)

7. **#22508 — [5 of 7] Add queued core turn context op**
   Introduces `Op::TurnContext` so remote app-server clients can update turn context without starting a new turn, preserving ordering.
   [Link](https://github.com/openai/codex/pull/22508)

8. **#23096 — Track MCP server entrypoint usage**
   Adds new telemetry to distinguish `codex mcp-server` CLI subcommand from the standalone binary and the VS Code extension's MCP server, enabling deprecation evaluation.
   [Link](https://github.com/openai/codex/pull/23096)

9. **#23091 — Add Codex release completion manifest**
   Uploads a manifest (`release-complete.json`) with SHA256 hashes per platform after the final DotSlash release assets are published, helping downstream mirrors avoid partial publication races.
   [Link](https://github.com/openai/codex/pull/23091)

10. **#22999 — fix(permissions) truncate rules as tokens**
    Swaps permission rule truncation from byte-count to token-count, reducing the risk of mid-token truncation breaking rule enforcement.
    [Link](https://github.com/openai/codex/pull/22999)

## Feature Request Clusters

- **Thread/Task Management**: Multiple issues request the ability to rename conversation threads (#12564) or disable intrusive UI elements like the auto-hover sidebar in the desktop app (#22168).

- **Context & Agent Guidance**: Users want dynamic loading of `AGENTS.md` files per subdirectory (#12115) and improved `/goal` behavior that recognizes repeated blockers as completion criteria (#23067, addressed by PR #23094). The `/goal` command is also requested as a first-class feature in the IDE extension (#23086).

- **Rate Limit Transparency**: Several requests ask for deterministic weekly reset windows (#9508) and clearer telemetry around credit consumption and limit resets (#19536, #19830). The CLI rate-limit window label hardening (#22929) directly addresses this.

## Developer Pain Points

- **Remote/Authorization Instability**: Four separate issues today report remote control authorization failures, thread history not loading on Android clients, unrecoverable mobile pairing state, and session conflicts between CLI and VS Code extension (#22696, #22762, #23090, #23077).

- **Rate Limit & Billing Confusion**: Free-tier users report token draining at ~10% per prompt without explanation (#23068). Business/Plus users report being charged for credits that are never delivered (#21973, #19830). Weekly limit remaining displays can show contradictory 100%/0% data (#19536).

- **Connectivity & Compaction Failures**: Desktop and CLI users frequently hit `stream disconnected` during context compaction (#22107, #23050) and websocket reconnect loops (#18960). Browser Use tool connectivity fails on macOS (#20678).

- **Platform-Specific Issues**: Windows users face raw ANSI escape sequence rendering in TUI (#23031), long delays during image generation rejection (#23015), and app freezes with large history JSONL files (#22991). macOS users have reported kernel panics linked to Codex Desktop (#20283) and AppleSystemPolicy failures.

- **False-Positive Security Alerts**: Pro users on Linux report being flagged as cybersecurity risks and having Trusted Access verification blocked (#22988).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-17

## Today's Update Brief

Activity remains high with 50 open issues and 35 PRs updated in the last 24 hours, though no new releases shipped. The community is reporting two critical reliability regressions — file deletion and command hanging — while maintainers land fixes for concurrent edit races, PTY memory leaks, and Full Access mode UX. A cluster of Auto Memory quality and security issues emerged mid-week and continues to see triage activity.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

**1. Accidental mass deletion on single-file delete command** ([#26713](https://github.com/google-gemini/gemini-cli/issues/26713))
*Workflow:* Using the CLI to delete one file results in many personal files and folders being deleted unintentionally.
*Impact:* Data loss severity. 11 comments, most commented issue today. User reports the command was targeted but the agent’s interpretation expanded scope. No maintainer response visible on the public thread.

**2. Generalist agent hangs indefinitely** ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409), 7 comments, 7 👍)
*Workflow:* Any task that defers to the generalist sub-agent (e.g., folder creation) hangs forever; cancelling only works after up to an hour. Workaround: instruct the model not to use sub-agents.
*Impact:* Blocks all multi-step tasks. One of the highest-voted bugs.

**3. Sub-agent `MAX_TURNS` interruption reported as goal success** ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323), 6 comments, 2 👍)
*Workflow:* `codebase_investigator` hits its turn limit but reports `status: "success"` / `Termination Reason: "GOAL"`, hiding the interruption.
*Impact:* Users and the orchestrator agent cannot distinguish between genuine completion and truncated analysis. A reliability/transparency bug.

**4. Shell command execution hangs with “Waiting input” after completion** ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166), 3 comments, 3 👍)
*Workflow:* After any simple CLI command (e.g., `ls`), the shell remains shown as active awaiting input despite the command having finished.
*Impact:* Frequent user-visible blockage of the agent loop. High frustration.

**5. Agent does not use custom skills/sub-agents autonomously** ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968), 6 comments)
*Workflow:* Even when relevant “gradle” or “git” skills are defined with descriptions, the agent ignores them unless explicitly instructed.
*Impact:* Undermines the value of the skills system. Community identifies this as a core autonomy gap.

**6. Browser agent fails on Wayland** ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983), 4 comments, 1 👍)
*Workflow:* `browser subagent` crashes with a Wayland-related failure; termination reason shows “GOAL” despite the error.
*Impact:* Linux users on Wayland cannot use browser automation.

**7. AST-aware file read/search EPIC** ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), 7 comments, 1 👍)
*Scope:* Tracking investigation into whether AST-aware tools (method-bound reads, AST grep) reduce turns, token noise, and misaligned reads.
*Why it matters:* If landed, could meaningfully improve codebase understanding efficiency and reduce token cost.

**8. Auto Memory leaks secrets in transcripts before redaction** ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525), 2 comments)
*Workflow:* Auto Memory reads local transcripts and sends content to the model; redaction happens after content is already in context. The service can also log unredacted skill results.
*Impact:* Potential secret exposure via logs or model context.

**9. Auto Memory retries low-signal sessions indefinitely** ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522), 2 comments)
*Workflow:* If the extraction agent decides not to read a low-signal session, it remains unprocessed and is surfaced again, causing infinite retries.
*Impact:* Wasted token spend and noisy extraction behavior.

**10. 400 error when >128 tools available** ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246), 2 comments)
*Workflow:* The API returns a 400 error when the tool count exceeds 128. The agent is not filtering tools by enabled scope.
*Impact:* Breaks the agent for users with many MCP servers or custom tools enabled.

---

## Key PR Progress

**1. `Shift+Tab` cycle now includes Full Access mode with auto-mode indicator** ([#27158](https://github.com/google-gemini/gemini-cli/pull/27158))
*What:* Adds `--yolo`/`ApprovalMode.YOLO` to the in-session `Shift+Tab` approval cycle and renders a `⏵⏵ auto mode on` footer indicator.
*Why:* Closes a UX gap where Full Access was only reachable via CLI flag or `Ctrl+Y` with no visible cue.

**2. Non-interactive env and PTY skip for Full Access shell exec** ([#27157](https://github.com/google-gemini/gemini-cli/pull/27157))
*What:* Injects `DEBIAN_FRONTEND=noninteractive`, `npm_config_yes=true`, etc., and skips PTY allocation so tools like `npm`, `apt`, `pip` don’t hang on interactive prompts.
*Why:* Direct fix for the “waiting input” hang pattern (#25166) in Full Access mode.

**3. Opt-in trust for MCP `readOnlyHint` in Plan Mode** ([#27156](https://github.com/google-gemini/gemini-cli/pull/27156))
*What:* New setting `general.plan.trustReadOnlyHint` (default `false`) lets MCP tools declared `readOnlyHint = true` run silently in Plan Mode.
*Why:* Reduces per-tool prompts while keeping secure-by-default behavior.

**4. Sub-second `/chat` loading for large session histories** ([#27028](https://github.com/google-gemini/gemini-cli/pull/27028))
*What:* Three bottlenecks eliminated in `chatRecordingService.ts`, `sessionListing`, and file system traversal. Benchmark: 59 sessions / 2.3GB of JSONL loads in 634ms (was 25+ seconds).
*Why:* Major UX improvement for heavy users.

**5. Fix ghost text wrapping stall** ([#27161](https://github.com/google-gemini/gemini-cli/pull/27161), closed)
*What:* Fixes `InputPrompt` infinite loop when a code point is wider than `inputWidth`, causing split index to remain at 0 repeatedly.
*Why:* Low-level terminal rendering fix preventing terminal freezes on certain inputs.

**6. Serialize concurrent edits to the same file** ([#27153](https://github.com/google-gemini/gemini-cli/pull/27153))
*What:* Adds per-file locking to `EditTool` and `WriteFileTool` so concurrent `Promise.all` dispatches cannot race read-compute-write sequences.
*Why:* Prevents data corruption on concurrent edits — a latent correctness bug.

**7. Fix PTY memory leak by synchronous deletion** ([#27154](https://github.com/google-gemini/gemini-cli/pull/27154))
*What:* Moves `activePtys.delete(ptyPid)` from inside a `.then()` callback to synchronous execution; previously, background log stream failures prevented cleanup.
*Why:* Critical leak fix — orphaned PTY entries and headless terminals were never garbage collected.

**8. Add `/compress` slash command for ACP** ([#27151](https://github.com/google-gemini/gemini-cli/pull/27151))
*What:* Registers `/compress` as a first-class ACP command so long-running ACP sessions can compact history before hitting context limits.
*Why:* Previously processed `/compress` as plain text, wasting tokens.

**9. Upgrade PTY dependencies** ([#27147](https://github.com/google-gemini/gemini-cli/pull/27147))
*What:* Bumps `@lydell/node-pty` to 1.2.0-beta.12, picking up upstream macOS `/dev/ptmx` leak fix.
*Why:* PTY leak directly affects terminal stability.

**10. Enable env var redaction by default** ([#27144](https://github.com/google-gemini/gemini-cli/pull/27144), closed)
*What:* `getSecureSanitizationConfig()` now defaults `enableEnvironmentVariableRedaction` to `true`; previously callers like `NoopSandboxManager` skipped all redaction.
*Why:* Security fix — API keys, tokens, and passwords could leak in logs.

---

## Feature Request Clusters

**Agent autonomy and skill utilization** — Three related requests ask the agent to (a) autonomously use custom skills and sub-agents ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)), (b) self-reflect on its trajectory and recommend skill creation ([#21421](https://github.com/google-gemini/gemini-cli/issues/21421)), and (c) maintain accurate self-knowledge of its own flags, hotkeys, and capabilities ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)). Several commenters note skills exist but the model doesn’t invoke them unless explicitly told.

**AST-aware codebase mapping** — Three sub-issues under the main EPIC ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745)) ask for AST-aware file reads ([#22747](https://github.com/google-gemini/gemini-cli/issues/22747)), AST-aware codebase mapping ([#22746](https://github.com/google-gemini/gemini-cli/issues/22746)), and evaluation of both. The team is investigating tools like “tilth,” “glyph,” and “AST grep.”

**Auto Memory quality improvements** — Four issues from a single author ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26516](https://github.com/google-gemini/gemini-cli/issues/26516)) cover deterministic redaction, invalid patch quarantine, infinite retries, and general memory system bugs. These are all maintainer-only but signal active internal quality work.

---

## Developer Pain Points

*Frequent agent hangs* — Two distinct hang patterns surfaced: generalist sub-agent hangs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)) and shell command “Waiting input” after completion ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)). Both have high upvote counts and no merged fix yet, though PR [#27157](https://github.com/google-gemini/gemini-cli/pull/27157) targets the latter for Full Access mode.

*Sub-agent reliability and transparency* — Sub-agents report `GOAL` success when actually hitting turn limits ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), and the browser agent fails silently on Wayland ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)). The community wants honest failure reporting.

*Accidental destructive behavior* — The mass deletion bug ([#26713](https://github.com/google-gemini/gemini-cli/issues/26713)) is the top issue by comments and represents the most severe user-facing reliability failure. A companion feature request ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)) asks the agent to discourage/avoid destructive git operations and DB modifications.

*Memory and FD leaks* — Three PRs today fix PTY, headless terminal, and file descriptor leaks ([#27154](https://github.com/google-gemini/gemini-cli/pull/27154), [#27147](https://github.com/google-gemini/gemini-cli/pull/27147)), suggesting the community is actively hitting resource exhaustion under extended sessions.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-17

## Today’s Update Brief
Activity on the `github/copilot-cli` repository was moderate, with **24 issues updated** in the last 24 hours and **2 pull requests** touched. No new releases were published. Noteworthy topics include a **new BYOK thinking toggle bug**, a **long-standing Windows authentication issue**, and a **proposal to remove the required Copilot subscription** in a single PR. Several terminal rendering and MCP configuration issues remain under discussion.

## Releases
None in the last 24 hours.

## Hot Issues (Noteworthy, Updated in Last 24h)

1. **[#3354 – CTRL+T does not expand or display model thinking for BYOK models](https://github.com/github/copilot-cli/issues/3354)**
   **Status:** OPEN (created today)
   **Workflow affected:** Bring-your-own-key (BYOK) users cannot view model reasoning via the keyboard shortcut, which works with GitHub-hosted models. No workaround reported. Community reaction: initial report, zero comments.

2. **[#716 – Failed to authenticate: getaddrinfo ENOTFOUND next-waitlist.azurewebsites.net (Windows)](https://github.com/github/copilot-cli/issues/716)**
   **Status:** OPEN (updated today, 5 👍)
   **Workflow affected:** Authentication on Windows cmd fails entirely. The error points to a DNS resolution failure for a Microsoft-owned domain. The issue has been open since December 2025, indicating a persistent platform-specific pain point.

3. **[#1082 – Copilot CLI hangs on sudo commands – does not prompt for password](https://github.com/github/copilot-cli/issues/1082)**
   **Status:** OPEN (updated today, 11 👍)
   **Workflow affected:** Running shell commands that require `sudo` (e.g., package installs) causes the CLI to hang indefinitely. Users cannot complete tasks needing elevated permissions. High community demand (most 👍 in the list).

4. **[#3181 – Remove automatic co-author to Copilot CLI commits (or add opt-out)](https://github.com/github/copilot-cli/issues/3181)**
   **Status:** CLOSED (updated yesterday, 7 comments)
   **Workflow affected:** Copilot CLI automatically adds a co-author tag to commits. Users want the ability to disable this, arguing that AI should not be personified. The discussion reflects strong developer sentiment against forced attribution.

5. **[#3189 – `copilot -p’ exits 1 silently with no output or log (macOS, v1.0.44-1)](https://github.com/github/copilot-cli/issues/3189)**
   **Status:** CLOSED (updated yesterday, 5 comments)
   **Workflow affected:** Non-interactive mode (`-p`) fails immediately without any stdout/stderr or log file, while interactive mode works. Reported regression. Community reaction: detailed repro provided.

6. **[#3340 – Input Box too Tall in latest update](https://github.com/github/copilot-cli/issues/3340)**
   **Status:** CLOSED (updated yesterday, 3 comments)
   **Workflow affected:** After an update, the terminal input box became visibly taller, taking up extra screen space. Users find it intrusive. Likely a rendering regression.

7. **[#3303 – Allow rejecting/providing custom response when presented with options (plan mode)](https://github.com/github/copilot-cli/issues/3303)**
   **Status:** CLOSED (updated yesterday, 2 comments)
   **Workflow affected:** In plan mode, when the model suggests multiple options, users cannot input a custom alternative; they are forced to choose from the list. Feature request to add a “none of these” or free-text option.

8. **[#3128 – Bring back the alphanumeric Session ID](https://github.com/github/copilot-cli/issues/3128)**
   **Status:** CLOSED (updated yesterday, 2 comments)
   **Workflow affected:** Session resumption previously used a short alphanumeric ID; now it uses an AI-generated title, which users find less convenient. Request to revert or retain both.

9. **[#3305 – Provide a way to monitor Copilot CLI usage across an org (especially skill usage)](https://github.com/github/copilot-cli/issues/3305)**
   **Status:** CLOSED (updated yesterday, 2 comments)
   **Workflow affected:** Enterprise admins lack visibility into which CLI features/skills are being used, by whom, and their reliability. Request for dashboards or telemetry.

10. **[#2181 – Regression: COPILOT_CUSTOM_INSTRUCTIONS_DIR not loading all instructions (v1.0.9)](https://github.com/github/copilot-cli/issues/2181)**
    **Status:** OPEN (updated today, 1 comment, 1 👍)
    **Workflow affected:** Instruction files configured via environment variable are silently ignored in v1.0.9 but worked in v1.0.8. Affects users with multi-directory custom instructions.

## Key PR Progress (Updated in Last 24h)

1. **[#3353 – Copilot subscription no longer required](https://github.com/github/copilot-cli/pull/3353)**
   **Status:** OPEN (created yesterday)
   **Description:** This pull request proposes removing the requirement for an active Copilot subscription, making the CLI free to use. No further details in the initial description. If merged, this would be a major shift in the product’s licensing model.

2. **[#140 – Add GitHub Actions for Issue Management](https://github.com/github/copilot-cli/pull/140)**
   **Status:** CLOSED (merged/updated yesterday)
   **Description:** Introduces automation workflows for issue/PR triage, labeling, stale management, and lack-of-response closure. Infrastructure improvement for repository maintainers.

## Feature Request Clusters

Several recurring feature themes appear across today’s issues:

- **Configuration & Control**
  Users want more configurability: opt-out of automatic co-author tags ([#3181](https://github.com/github/copilot-cli/issues/3181), [#3177](https://github.com/github/copilot-cli/issues/3177)), a unified `/config` slash command ([#3352](https://github.com/github/copilot-cli/issues/3352)), and adjustable MCP slow-connection warning thresholds ([#2907](https://github.com/github/copilot-cli/issues/2907)).

- **Enterprise & Observability**
  Multiple requests for usage monitoring: per-org skill usage ([#3305](https://github.com/github/copilot-cli/issues/3305)) and per-prompt statistics on resource consumption ([#3312](https://github.com/github/copilot-cli/issues/3312)).

- **Session Management**
  Users request improvements to session resumption: sorting by current working directory ([#3277](https://github.com/github/copilot-cli/issues/3277)) and restoring the short alphanumeric session ID ([#3128](https://github.com/github/copilot-cli/issues/3128)).

- **Customization of AI Behavior**
  Ability to reject model-suggested options and enter custom answers ([#3303](https://github.com/github/copilot-cli/issues/3303)) and better management of BYOK model reasoning effort ([#3135](https://github.com/github/copilot-cli/issues/3135), [#3185](https://github.com/github/copilot-cli/issues/3185)).

## Developer Pain Points

- **Platform-specific Authentication Failures**
  Windows users continue to experience auth outages ([#716](https://github.com/github/copilot-cli/issues/716)), and macOS users hit a silent crash in non-interactive mode ([#3189](https://github.com/github/copilot-cli/issues/3189)). These break basic usage.

- **Forced Co-author Attribution**
  The automatic addition of “Copilot” as a commit co-author is polarizing; users want it removable ([#3181](https://github.com/github/copilot-cli/issues/3181)). This remains a friction point even after closure.

- **Terminal Rendering Regressions**
  Multiple recent issues point to input box height changes ([#3340](https://github.com/github/copilot-cli/issues/3340)), text wrapping failures for non-English languages ([#3325](https://github.com/github/copilot-cli/issues/3325)), and line break insertion on copy-paste ([#3316](https://github.com/github/copilot-cli/issues/3316)). These degrade the interactive experience.

- **MCP & Context Window Degradation**
  MCP server connection delays trigger hardcoded warnings ([#2907](https://github.com/github/copilot-cli/issues/2907)), and many MCP servers can exhaust the context window, forcing continuous compaction ([#3024](https://github.com/github/copilot-cli/issues/3024)). There are also tool schema loading inconsistencies ([#2634](https://github.com/github/copilot-cli/issues/2634)).

- **BYOK Model Inconsistencies**
  Custom models face reasoning effort overrides ([#3185](https://github.com/github/copilot-cli/issues/3185), [#3135](https://github.com/github/copilot-cli/issues/3135)) and the new thinking-pane shortcut does not work ([#3354](https://github.com/github/copilot-cli/issues/3354)), limiting the value of BYOK configurations.

- **Custom Instructions Regression**
  The `COPILOT_CUSTOM_INSTRUCTIONS_DIRS` environment variable stopped loading instructions in v1.0.9 ([#2181](https://github.com/github/copilot-cli/issues/2181)), breaking a key customization path.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest – 2026-05-17

## Today's Update Brief
No new releases appeared in the last 24 hours. Community activity is moderate: 6 open issues were updated, and 3 pull requests saw new commentary or commits. Discussions center on persistent UI bugs, performance concerns, and a cluster of requests for cross‑project configuration and multi‑device session handoff.

## Releases
*(None in the last 24 hours.)*

## Hot Issues

### #2152 – [Feature Request] Support global `~/.kimi/AGENTS.md` for multi‑project shared conventions
- **Author:** @lNeverl
- **Created:** 2026-05-03 | **Updated:** 2026-05-16
- **Comments:** 4 · 👍 3
- **Summary:** Proposes loading an `AGENTS.md` from the user’s home directory (`~/.kimi/AGENTS.md`) so that developers managing 10+ projects can maintain shared rules without copying the file into each repository.
- **Workflow impact:** Reduces friction for multi‑project setups; currently rules are project‑local only.
- **Link:** https://github.com/MoonshotAI/kimi-cli/issues/2152

### #2314 – Prompts take way too long to complete in general
- **Author:** @kingkpink
- **Created:** 2026-05-16 | **Updated:** 2026-05-16
- **Comments:** 2 · 👍 0
- **Summary:** Reports that simple tasks (e.g., pushing data to NeonDB) take ~5 minutes; the model appears to overthink straightforward operations.
- **Workflow impact:** Severe slowdown for everyday coding tasks; frustrates users expecting quick feedback.
- **Link:** https://github.com/MoonshotAI/kimi-cli/issues/2314

### #2269 – [Feature Request] Remote Control / Multi‑Device Session Handoff
- **Author:** @lucianalima777
- **Created:** 2026-05-13 | **Updated:** 2026-05-16
- **Comments:** 2 · 👍 0
- **Summary:** Requests the ability to start a Kimi session on one device and seamlessly continue or remotely control it from another (laptop, web, mobile).
- **Workflow impact:** Important for users who switch between environments; currently sessions are device‑locked.
- **Link:** https://github.com/MoonshotAI/kimi-cli/issues/2269

### #2312 – [bug] Web UI: Clicking on archived sessions does not open them
- **Author:** @shadowzoom
- **Created:** 2026-05-16 | **Updated:** 2026-05-16
- **Comments:** 1 · 👍 0
- **Summary:** On the Web UI (kimi version 1.44.0), clicking archived sessions fails to open them. No error shown.
- **Workflow impact:** Hinders access to historical conversations; likely a front‑end interaction bug.
- **Link:** https://github.com/MoonshotAI/kimi-cli/issues/2312

### #2313 – [bug] `'utf-8' codec can't decode byte 0x97` on Windows
- **Author:** @thoughtworld
- **Created:** 2026-05-16 | **Updated:** 2026-05-16
- **Comments:** 0 · 👍 0
- **Summary:** On Windows x64, running kimi (v1.44.0) triggers an encoding error reading a file (byte 0x97 at position 462).
- **Workflow impact:** Blocks startup or command execution for users whose file paths or content contain non‑UTF‑8 characters.
- **Link:** https://github.com/MoonshotAI/kimi-cli/issues/2313

### #2311 – [bug] First question claims 19516 TPM – “so weird!”
- **Author:** @dk520zm1314-wq
- **Created:** 2026-05-16 | **Updated:** 2026-05-16
- **Comments:** 0 · 👍 0
- **Summary:** On macOS with kimi-2.6, the initial prompt reportedly shows a token‑per‑minute (TPM) count of 19,516, which the user flags as implausibly high.
- **Workflow impact:** Suggests a meter‑reading or UI formatting bug; may cause confusion about actual usage.
- **Link:** https://github.com/MoonshotAI/kimi-cli/issues/2311

## Key PR Progress

### #2249 – feat(shell): unified approval modes with toolbar badges and temporary toasts
- **Author:** @baldasso
- **Created:** 2026-05-12 | **Updated:** 2026-05-17
- **Summary:** Consolidates four overlapping auto‑approval mechanisms (`--yolo`, `--afk`, `/yolo`, `/afk`, and the per‑session button) into a single, clearly‑badged toolbar with temporary toast notifications.
- **Significance:** Simplifies UX and reduces confusion; last activity today suggests maintainers are reviewing.
- **Link:** https://github.com/MoonshotAI/kimi-cli/pull/2249

### #2236 – fix(utils): bound broadcast queues and cap web store cache to prevent memory leaks
- **Author:** @ekhodzitsky
- **Created:** 2026-05-11 | **Updated:** 2026-05-16
- **Summary:** Fixes unbounded `asyncio.Queue` growth in `BroadcastQueue` and caps the in‑memory session cache to avoid OOM crashes when users accumulate thousands of sessions.
- **Significance:** Directly addresses stability for heavy users; patch is likely high‑priority.
- **Link:** https://github.com/MoonshotAI/kimi-cli/pull/2236

### #2231 – fix(aiohttp): reuse TCPConnector to prevent connection leaks
- **Author:** @ekhodzitsky
- **Created:** 2026-05-11 | **Updated:** 2026-05-16
- **Summary:** Replaces per‑call `new_client_session()` calls with a shared `TCPConnector`, enabling HTTP connection reuse and reducing file‑descriptor pressure under parallel workloads.
- **Significance:** Improves latency and resource usage across tool calls, fetches, and auth flows.
- **Link:** https://github.com/MoonshotAI/kimi-cli/pull/2231

## Feature Request Clusters

- **Shared / Global Configuration**
  Requests for a `~/.kimi/AGENTS.md` file to store cross‑project developer‑level conventions (issue #2152). Multiple commenters expressed support.

- **Multi‑Device Session Handoff**
  A request to start a session on one device and continue it from another (laptop, web, mobile) (#2269). Currently no such capability exists in the CLI.

- **Unified Approval UX** (derived from PR #2249) – while this is a pull request, the underlying motivation (four overlapping approval modes causing confusion) mirrors a recurring user pain point.

*No other distinct feature request clusters were identified from today’s issue data.*

## Developer Pain Points

- **Slow Prompt Execution** – Issue #2314 reports 5‑minute delays for simple database operations. Users perceive the model as “overthinking” rather than executing efficiently.
- **Encoding Errors on Windows** – The `utf-8` decode failure (#2313) blocks usage for files with non‑UTF‑8 byte sequences.
- **Web UI Session Interaction Bug** – Archived sessions cannot be opened (#2312), breaking access to historical work.
- **Misleading TPM Metrics** – The first‑question TPM reading of 19,516 (#2311) appears erroneous, undermining user trust in usage counters.
- **Memory / Connection Leaks** – Two PRs (#2236, #2231) directly address unbounded queues and unshared TCPConnectors that cause OOM and file‑descriptor pressure, highlighting real‑world stability concerns for power users.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-17

## Today's Update Brief
Three patch releases (v1.15.1 → v1.15.3) landed today, fixing core bugs around file reading, TUI instance context, sync events, and startup validation. The issue tracker saw heavy activity: 50 issues updated, with strong community demand for a `/skills` command (71 👍) and recurring frustration over the missing `/exit` command. Several important PRs advanced, including a per-agent thinking toggle and a sticky‑scroll fix that has been long‑requested.

## Releases

### v1.15.3
- **Core:** Reduced wasted work when reading very large files after output truncation.
- **TUI:** Fixed async commands losing the active instance context (affects agent generation and GitHub‑driven runs).

### v1.15.2
- **Core:** Reduced unnecessary prompting around shell, task, and todo flows.
- **Core:** Fixed sync events not reaching project‑scoped subscribers in injected instances.
- **TUI:** Newly pinned sessions now stay at the end of the pinned list (no more jumping).

### v1.15.1
- **Core:** Clarified recovery when npm package is installed without its native binary.
- **Core:** Avoid duplicate consecutive entries in prompt history.
- **Core:** Show full config validation errors during TUI startup instead of a generic failure.
- **Core:** Fixed npm installs so the postinstall script runs correctly.

Full release notes: [v1.15.3](https://github.com/anomalyco/opencode/releases/tag/v1.15.3), [v1.15.2](https://github.com/anomalyco/opencode/releases/tag/v1.15.2), [v1.15.1](https://github.com/anomalyco/opencode/releases/tag/v1.15.1)

## Hot Issues

1. **`/skills` command to list and quick‑invoke skills**
   [#7846](https://github.com/anomalyco/opencode/issues/7846) — 23 comments, 71 👍
   Users want an in‑TUI `/skills` command to discover and run installed skills without fumbling through config files. The issue explicitly distinguishes it from marketplace discovery (#7716) and sidebar display (#7533).

2. **ESC to interrupt not working on some terminals**
   [#888](https://github.com/anomalyco/opencode/issues/888) — 22 comments, 5 👍
   A long‑standing bug (since 2025) where pressing ESC repeatedly toggles the prompt without actually interrupting the LLM. Still open, indicating a complex terminal interaction.

3. **Request: Ctrl+C twice to close TUI**
   [#10975](https://github.com/anomalyco/opencode/issues/10975) — 20 comments, 4 👍
   Windows users find Ctrl+C for copy conflicting with the single‑press exit. Suggests double‑press to close TUI.

4. **TUI fails on Alpine Linux (musl) — `getcontext` symbol not found**
   [#27589](https://github.com/anomalyco/opencode/issues/27589) — 16 comments, 3 👍
   Regression in v1.14.50. Alpine (musl‑based) users cannot start TUI. Worked in v1.14.48. High priority for container/CI users.

5. **Winget installation option for Windows**
   [#5121](https://github.com/anomalyco/opencode/issues/5121) — 13 comments, 21 👍
   Community notes a winget package exists but is outdated. Users request official winget support and version sync.

6. **GLIBC_2.29+ dependency introduced in v1.14.49**
   [#27419](https://github.com/anomalyco/opencode/issues/27419) — 11 comments, 2 👍
   Older Linux distros (e.g., Ubuntu 18.04) broke after upgrade. Workaround is to downgrade to v1.14.48.

7. **Blank assistant text with MCP servers enabled**
   [#20465](https://github.com/anomalyco/opencode/issues/20465) — 9 comments, 1 👍
   Regression in v1.3.4 (AI SDK upgrade). Assistant text disappears in TUI when MCP is active. PR #20467 fixes it by treating "other" as a continue stop reason.

8. **Setting to prevent TUI scrolling when new messages stream in**
   [#7648](https://github.com/anomalyco/opencode/issues/7648) — 8 comments, 11 👍
   Users want to read earlier output without being auto‑scrolled to bottom. A linked PR (#19540) is already open to disable sticky scroll while user has scrolled up.

9. **Support more DBMS for session storage**
   [#14212](https://github.com/anomalyco/opencode/issues/14212) — 8 comments, 15 👍
   After migration to Drizzle, users ask for Postgres (and others) support for state storage. Would enable multi‑user/team setups.

10. **`/exit` command missing in recent versions**
    [#26684](https://github.com/anomalyco/opencode/issues/26684), [#26612](https://github.com/anomalyco/opencode/issues/26612), [#26710](https://github.com/anomalyco/opencode/issues/26710), [#26761](https://github.com/anomalyco/opencode/issues/26761) — multiple issues with 14, 2, 6, 2 👍 respectively.
   A cluster of reports that `/exit` either prints "Exiting." without exiting or doesn't exist. Regressed in v1.14.45‑v1.14.46. High frustration—users forced to use Ctrl+C.

## Key PR Progress

1. **feat(opencode): add per‑agent thinking toggle**
   [#27856](https://github.com/anomalyco/opencode/pull/27856) — Adds `thinking` field to agent configuration (true/false). Allows overriding default reasoning mode per agent.

2. **feat(opencode): add `/yolo` toggle for auto‑approving permissions**
   [#27855](https://github.com/anomalyco/opencode/pull/27855) — New slash command to auto‑approve all permission requests without prompts. Targets power users.

3. **fix(tui): disable sticky scroll when user has scrolled up**
   [#19540](https://github.com/anomalyco/opencode/pull/19540) — Fixes #7648 (scrolling annoyance). When user scrolls up, new streamed messages no longer auto‑scroll down.

4. **fix: sort app sessions by updated time**
   [#27954](https://github.com/anomalyco/opencode/pull/27954) — Fixes inconsistency between API (created time) and sidebar (updated time). "Load more" now shows genuinely recent sessions.

5. **fix(desktop): install the latest available update**
   [#27953](https://github.com/anomalyco/opencode/pull/27953) — Desktop updater could install a stale version if newer releases appeared between download and install. Now re‑checks before installing.

6. **fix(task): preserve subagent self permissions**
   [#27201](https://github.com/anomalyco/opencode/pull/27201) — Prevents Plan Mode’s edit restrictions from leaking to subagents, and stops inheriting unrelated self‑denies.

7. **feat(tui): show subagent cost rollup in sidebar and task history**
   [#25712](https://github.com/anomalyco/opencode/pull/25712) — Uses BFS to sum LLM costs across child sessions, making subagent spend visible in parent sidebar.

8. **fix: treat "other" as a continue stop reason**
   [#20467](https://github.com/anomalyco/opencode/pull/20467) — Fixes #20465 (blank assistant text with MCP). Closes the regression introduced by AI SDK v5→v6.

9. **fix(tui): aggregate subagent costs into sidebar spent total**
   [#27952](https://github.com/anomalyco/opencode/pull/27952) — Alternative approach to #25712, sums existing cost values for children into the parent display. Tagged `needs:compliance`.

10. **fix: use static plugin spinner outside TTY**
    [#27951](https://github.com/anomalyco/opencode/pull/27951) — Fixes #27908. Non‑TTY runs (piped, CI) now get one‑line‑per‑step output instead of animated spinner garbage.

## Feature Request Clusters

- **Skills discoverability and management**
  #7846 (`/skills` command), #22129 (skills not in TUI autocomplete), #25117 (custom skills not in autocomplete). Users want seamless listing and invocation of skills from within the TUI. The fact that skills appear in the web app but not the TUI suggests a rendering gap.

- **Exit command reliability**
  Multiple issues (#26684, #26612, #26710, #26761) report `/exit` broken since v1.14.45. The command prints "Exiting." but doesn't close the TUI. Workaround is Ctrl+C, which some find unintuitive. No official response yet in these threads.

- **Session storage expansion**
  #14212 (Postgres/other DBMS) and #11819 (search message history) both extend session storage capabilities. The Drizzle migration has opened doors, and community interest in persistence/team use cases is growing.

- **Context management improvements**
  #11829 (RLM paradigm – treat context as external environment) and #14212 show interest in smarter context handling. #11829 is a substantial proposal based on an academic paper, though it has only 4 comments.

## Developer Pain Points

1. **Missing `/exit` command** — Most mentioned pain point today. Users upgrading to v1.14.45+ lose the ability to type `/exit` to quit TUI. Multiple dupes imply widespread impact.

2. **TUI scrolling during streaming** — #7648 and PR #19540 highlight that auto‑scrolling frustrates users who want to review earlier output while the model continues.

3. **Skills hidden from TUI autocomplete** — #22129 and #25117: skills work when typed manually but don’t appear in the slash command popover, reducing discoverability.

4. **Compatibility regressions in recent releases**
   - Alpine/musl: `getcontext` symbol missing (#27589)
   - GLIBC ≥2.29 required (#27419)
   - Bun install broken: v1.15.1+ requires postinstall scripts, which Bun blocks (#27906)

5. **MCP‑related blank assistant text** — #20465 shows that enabling MCP servers can cause assistant responses to disappear in TUI. Fixed in PR #20467 but still a pain point for MCP users.

6. **Sidecar crash on cancelled stream** — #27944: `ERR_INVALID_STATE` when a stream producer enqueues after consumer cancellation. Rare but crashes the sidecar process.

7. **LSP detection in monorepos** — #7690: LSP for frontend/backend not enabled when starting from git root. Only discovered when entering subfolder.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-17

## Today's Update Brief

Activity remains high with 24 issues and 50 pull requests updated in the last 24 hours. No new releases were published. The community is deeply engaged in the daemon mode (Mode B) rollout — multiple spike PRs landed for IDE, TUI, and channel adapter layers, alongside a typed event schema. Meanwhile, several user-reported bugs around tool execution, logging gaps, and platform-specific MCP connectivity continue to receive maintainer attention.

## Releases

No new releases in the last 24 hours.

## Hot Issues

**1. [#3803 Daemon mode (qwen serve): proposal & open decisions](https://github.com/QwenLM/qwen-code/issues/3803)**
*Author: @wenshao | Updated: 2026-05-16 | 12 comments | 👍 1*
A comprehensive 6-chapter design series for the daemon mode. This is the upstream tracking issue for implementation decisions. The series covers architecture, session lifecycle, and connectivity protocols — essential reading for anyone following the Mode B effort.

**2. [#4175 Mode B feature-priority roadmap toward v0.16 production-ready](https://github.com/QwenLM/qwen-code/issues/4175)**
*Author: @doudouOUC | Updated: 2026-05-17 | 4 comments*
Stage 1 daemon and the "1 daemon = 1 workspace" refactor are merged. Mode B (`qwen serve`) is functionally runnable with HTTP/SSE routes, auth, and session multiplexing. This issue tracks remaining work before v0.16 production readiness. Community input on priority gaps welcomed.

**3. [#4218 [Bug Report] MCP Server "filesystem" shows connected on UI, but tools are not available to the model](https://github.com/QwenLM/qwen-code/issues/4218)**
*Author: @carloseradn-sketch | Updated: 2026-05-16 | 2 comments*
A critical MCP integration bug on Windows: the UI reports successful server connection, but the model never receives tool definitions. Tried default MCP server config. No maintainer response yet. Affects all Windows MCP filesystem workflows.

**4. [#4148 User prompts sent during tool execution are not recorded to JSONL](https://github.com/QwenLM/qwen-code/issues/4148)**
*Author: @huww98 | Updated: 2026-05-16 | 2 comments*
When typing a prompt while the model is executing tool calls (without pressing ESC), the prompt is queued and sent after tool completion — but it is silently omitted from JSONL export. This means session replay and audit trails miss mid-turn user input. Maintainers have acknowledged the gap.

**5. [#4219 @image attachments fail in env-var-only mode — modalities never auto-detected](https://github.com/QwenLM/qwen-code/issues/4219)**
*Author: @filipmihal | Updated: 2026-05-16 | 1 comment*
When configuring qwen-code solely via `OPENAI_API_KEY`, `OPENAI_BASE_URL`, `OPENAI_MODEL` environment variables (no `modelProviders` in `settings.json`), image attachments are silently replaced with `[Unsupported <modality> file: ...]`. The root cause is that modality detection requires reading `settings.json`. Affects all users relying purely on env-var configuration.

**6. [#4210 /statusline opens 'statusline-setup' agent instead of StatusLineDialog when typed in TUI](https://github.com/QwenLM/qwen-code/issues/4210)**
*Author: @wenshao | Updated: 2026-05-16 | 1 comment*
Built-in slash command `/statusline` should open the `StatusLineDialog` but instead triggers an agent with the same name. The command routing logic appears to match the agent name before the built-in command handler.

**7. [#4094 Trim outdated background task results and improve new-task discoverability in the task dialog](https://github.com/QwenLM/qwen-code/issues/4094)**
*Author: @huww98 | Updated: 2026-05-17 | 2 comments | CLOSED*
Two UX improvements: (1) cap background task terminal entries at 32 to prevent memory bloat; (2) sort tasks so newest appear first. Already merged as PR #4125.

**8. [#4194 [API Error: Connection error. (cause: fetch failed)]](https://github.com/QwenLM/qwen-code/issues/4194)**
*Author: @alte0 | Updated: 2026-05-16 | 1 comment*
User reports connection errors in both non-interactive (`qwen -d -p "Hi"`) and interactive CLI modes on macOS. Debug logs were generated but no maintainer response yet. Could be network configuration, proxy, or API endpoint issue.

**9. [#3731 feat(telemetry): harden OpenTelemetry configuration, HTTP OTLP behavior, and runtime safety](https://github.com/QwenLM/qwen-code/issues/3731)**
*Author: @doudouOUC | Updated: 2026-05-17 | 0 comments*
A long-running feature request to make OpenTelemetry production-ready: configuration semantics, HTTP OTLP correctness, exporter safety, and shutdown reliability. No maintainer assignment yet despite being open since April 29.

**10. [#2562 fix(core): structuredClone OOM in long sessions](https://github.com/QwenLM/qwen-code/issues/2562)**
*Author: @netbrah | Updated: 2026-05-16 | 1 comment*
`GeminiChat.getHistory()` deep-copies the entire conversation on every turn via `structuredClone`. In multi-hour sessions with many tool calls, this causes OOM crashes. A long-standing performance issue (open since March 21) still awaiting resolution.

## Key PR Progress

**1. [#4222 Add daemon session load/resume](https://github.com/QwenLM/qwen-code/pull/4222)**
*Author: @doudouOUC | Updated: 2026-05-17 | OPEN*
Adds HTTP and TypeScript SDK support for loading/resuming persisted sessions in the daemon. Load replay frames buffered into SSE event ring; guard races for missing/corrupt sessions.

**2. [#4051 docs: user + design docs for --json-schema structured output](https://github.com/QwenLM/qwen-code/pull/4051)**
*Author: @wenshao | Updated: 2026-05-17 | OPEN*
Follow-up documentation for the `--json-schema` feature shipped earlier. Covers quick-start, schema input (inline + `@path`), output shapes per `--output-format`, retry/failure modes, and privacy redaction.

**3. [#4102 feat(core): PR-2.5 — post-promote stream redirect + natural-exit registry settle](https://github.com/QwenLM/qwen-code/pull/4102)**
*Author: @wenshao | Updated: 2026-05-17 | OPEN*
Closes two deferred limitations from the background task system: (1) post-promote stream redirect so background tasks can continue forwarding output after ownership transfer; (2) a settle mechanism for natural-exit registry.

**4. [#4199 feat(ide): add daemon connection spike](https://github.com/QwenLM/qwen-code/pull/4199)**
*Author: @chiga0 | Updated: 2026-05-17 | OPEN*
First spike of VS Code extension host daemon connectivity: daemon session creation, SSE consumption, prompt forwarding, permission responses, cancel, model switch, and session death handling. Verifiable locally.

**5. [#4203 feat(channel): add daemon bridge spike](https://github.com/QwenLM/qwen-code/pull/4203)**
*Author: @chiga0 | Updated: 2026-05-17 | OPEN*
Server-side `DaemonChannelBridge` for channel/web backends to bind daemon sessions and route operations. Part of the broader daemon adapter layer.

**6. [#4202 feat(tui): add daemon adapter spike](https://github.com/QwenLM/qwen-code/pull/4202)**
*Author: @chiga0 | Updated: 2026-05-17 | OPEN*
`DaemonTuiAdapter` reduces daemon SSE frames into TUI-consumable updates. TUI is one of the first Mode B clients.

**7. [#4217 feat(protocol): typed daemon event schema v1](https://github.com/QwenLM/qwen-code/pull/4217)**
*Author: @chiga0 | Updated: 2026-05-17 | OPEN*
SDK-layer v1 schema for daemon SSE events: known event unions, runtime narrowing helpers, and a reducer skeleton. Raw daemon envelope preserved for compatibility.

**8. [#4188 fix: add cache limits to prevent OOM during build/test](https://github.com/QwenLM/qwen-code/pull/4188)**
*Author: @xmillogx-cmd | Updated: 2026-05-17 | OPEN*
Implements bounded FIFO eviction for `crawlCache` and `fileReadCache`. Adds `--max-old-space-size=3072` to critical npm scripts. Addresses memory pressure under parallel Vitest workers.

**9. [#4176 fix(core,cli): close tool_use↔tool_result invariant across all failure paths](https://github.com/QwenLM/qwen-code/pull/4176)**
*Author: @wenshao | Updated: 2026-05-17 | OPEN*
Fixes an unrecoverable wedge on weak-network connections (e.g. trains) when using Anthropic-compatible backends. The same wedge reproduced under three additional failure modes; all closed in this PR.

**10. [#4193 Allow custom output directory for /export](https://github.com/QwenLM/qwen-code/pull/4193)**
*Author: @qqqys | Updated: 2026-05-17 | OPEN*
`/export` now accepts an optional output directory for session logs. Directory created if needed. Addresses clutter in project roots when exporting multiple sessions.

## Feature Request Clusters

**Session & Workflow Management**
Multiple requests around session lifecycle improvements: forking from existing sessions ([#4158]), file-history persistence and shell tracking ([#4204]), configurable Stop hook blocking caps for `/goal` loops ([#4206]), and `/rewind` file restoration tests ([#4187]). Community interest is high in branching workflows and safety boundaries.

**Daemon Mode (Mode B)**
The daemon subsystem is receiving coordinated spike PRs across IDE, TUI, and channel layers ([#4199], [#4203], [#4202], [#4217]). This follows the merged daemon design ([#3803]) and the Mode B production roadmap ([#4175]). Multiple developers are contributing adapter implementations simultaneously.

**UI/UX Polish**
Submissions include built-in status line presets ([#4087] — with a PR ready), argument suggestions for `/rename` ([#4047]), macOS/readline/emacs keyboard shortcuts ([#3821]), and custom export directories ([#4192]). These are lower-risk but high-QoL improvements.

**Memory & Performance**
Requests for `/doctor memory` diagnostics ([#4179]), cache limits for build/test ([#4188]), and the long-standing `structuredClone` OOM fix ([#2562]) indicate memory management is a recurring concern, especially for long sessions and CI environments.

## Developer Pain Points

- **MCP tool connectivity on Windows**: Issue [#4218] shows MCP server connects at the UI level but tools never reach the model. No platform-specific workaround documented.
- **Connection errors on macOS**: [#4194] reports `fetch failed` errors in both CLI modes; root cause unclear.
- **Image modality detection in env-var-only mode**: [#4219] reveals that modality detection depends on `settings.json`, breaking users who configure purely via environment variables.
- **JSONL logging gaps**: [#4148] highlights that mid-turn queued user prompts are silently dropped from session exports, affecting audit trails and debugging.
- **Long-session OOM crashes**: [#2562] remains unresolved since March 21; deep-copying entire conversation history via `structuredClone` is the root cause.

</details>