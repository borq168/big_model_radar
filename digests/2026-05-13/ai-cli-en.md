# AI CLI Tools Community Digest 2026-05-13

> Generated: 2026-05-13 02:15 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report — 2026-05-13

## 1. Daily Cross-Tool Overview

All seven tracked AI CLI tools saw active community engagement today, with Claude Code, OpenAI Codex, OpenCode, and Qwen Code each reporting 50+ issues or PRs updated in the last 24 hours. Four tools shipped at least one release (Claude Code v2.1.140, Codex rust-v0.131.0-alpha.8, Gemini CLI three releases, GitHub Copilot CLI v1.0.46, Kimi Code CLI v1.43.0, Qwen Code five prelease builds). OpenCode was the only tool with no new release. Shared pain points include subagent reliability, MCP connectivity, and platform-specific bugs, while several tools independently shipped or discussed session management features (branching, goal commands, daemon mode).

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Releases Today |
|------|----------------------|-------------------|----------------|
| Claude Code | 50 | 3 (open) | v2.1.140 |
| OpenAI Codex | 50 | 50 | rust-v0.131.0-alpha.8 |
| Gemini CLI | High (10 highlighted) | 10 (highlighted) | v0.43.0-preview.0, v0.42.0, nightly |
| GitHub Copilot CLI | 33 | 1 | v1.0.46 |
| Kimi Code CLI | Moderate (10 highlighted) | 10 (highlighted) | v1.43.0 |
| OpenCode | 50 | 50 | None |
| Qwen Code | 36 | 50 | 5 (preview/nightly) |

*Source: Digest community updates. “Issues updated” includes new, closed, and commented items. “PRs updated” includes open, merged, and closed PRs.*

## 3. Shared Feature Directions

### Session Management & Long-Running Tasks
- **Copilot CLI** users request a `/fork` command to branch sessions for side quests (#2058).
- **Kimi Code CLI** shipped a `/loop` recurring prompt scheduler (#2248) and users request a `/goal` command for long tasks (#2218).
- **Qwen Code** merged a `/goal` command with judge-driven turn continuation (PR #4088) and proposed daemon mode (`qwen serve`, #3803, PR #3889).
- **OpenCode** merged a PR for native session goals (PR #27163).

**Observation**: A clear cluster of interest around managing multi-step objectives beyond simple single-turn interactions.

### MCP / Plugin Connectivity & Compatibility
- **Claude Code** subagents fail when many MCP servers cause prompt-length overflow (#37793).
- **Codex** made MCP startup status thread-scoped to prevent review stalls (PR #21624) and fixed delegated MCP elicitations (#22399).
- **Gemini CLI** fixed MCP OAuth token refresh without restart (PR #26312).
- **Copilot CLI** reports HTTP MCP servers failing with `TypeError: fetch failed` after idle periods (#3257).
- **Kimi Code CLI** fixed `AuthlibDeprecationWarning` by upgrading FastMCP OAuth storage (PR #2241).

**Observation**: MCP integration is a cross-tool challenge, with connectivity drops, token handling, and prompt bloat appearing across five tools.

### Subagent / Agent Reliability & Permission Management
- **Claude Code** users report subagent failures from prompt-too-long (#37793).
- **Gemini CLI** subagents report success after hitting turn limits, masking failures (#22323); skills and subagents are under-utilised (#21968).
- **OpenCode** sees a regression where parent deny rules over-constrain subagents, breaking the commander-worker pattern (#26700).
- **Qwen Code** users experience agent self-looping thinking for 15+ minutes (#4055).

**Observation**: Trust in subagents is eroding due to false success reports, permission inheritance bugs, and infinite loops.

### Platform & Environment Issues
- **Claude Code**: Windows file truncation (#53940), UTF-8 BOM missing for PowerShell scripts (#58545).
- **Codex**: VS Code extension stuck on “Thinking” on Windows (#12161); git process CPU spikes on Windows (#20933).
- **Copilot CLI**: GLIBC mismatch on Rocky Linux 8.10 (#3276); PowerShell .NET global tool shim problems (#3259).
- **Qwen Code**: Terminal infinite scroll/refresh loop (#3838); DashScope-intl endpoint failure (#4035).

**Observation**: Platform compatibility remains a persistent pain point, especially for Windows and older enterprise Linux distributions, affecting nearly every tool.

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Qwen Code |
|-----------|-------------|--------------|------------|-------------|-----------|----------|-----------|
| **Primary focus this week** | Cost visibility, subagent robustness, memory leaks | UI/UX polish, model availability, hooks cleanup | Memory system, fallback chains, eval stability | Session branching, MCP networking, platform support | Model switching, approval modes, automated workflows | Subagent permissions, test infra migration, provider bugs | Daemon mode, terminal rendering, /goal command |
| **Target user** | Power users with many MCP servers, Max subscription users | IDE extension users, multi-provider setups | Google Cloud ecosystem, free-tier quota-sensitive | GitHub integration, enterprise Linux users | Users wanting Kimi model flexibility, Cursor integration | Advanced permissions customisation, multi-provider | Qwen model users, self-hosting, daemon integration |
| **Key technical differentiators** | Agent color palette, `/goal` hook restrictions, Cowork tools | `codex doctor` diagnostics, tabbed chat (requested), ask_user_question tool | MCP OAuth auto-refresh, `gemini-2.5-flash-lite` fallback chain | `/fork` branching, `.copilot` custom instructions, `gh-aw` issue triage | `/loop` cron scheduler, tool call deduplication, unified approval modes | Native LLM runtime stack, Effect test runner, permission inheritance fixes | `qwen serve` daemon, worktree support, OSC 8 hyperlinks |
| **Release cadence** | Frequent patches (v2.1.140) | Alpha releases | Preview + nightly | Minor patch | Regular minor (v1.43.0) | No release today | Multiple prelease/nightly |

## 5. Community Activity Notes

- **Highest raw activity**: Codex, OpenCode, and Qwen Code each saw 50+ PRs updated, indicating heavy maintainer work (Codex: test infrastructure, hook fixes; OpenCode: test migrations, native goals; Qwen: daemon, /goal, worktree).
- **Most releases**: Qwen Code (five versions today), Gemini CLI (three). Claude Code, Codex, Copilot, Kimi each had one.
- **Strongest maintainer response signals**: Gemini CLI merged several critical fixes (OAuth, fallback chain, config spread-safe). Kimi merged a large batch of fixes (memory leaks, aiohttp pooling, CVE fix, /loop, approval modes). Qwen merged multiple performance and feature PRs (OSC 8 links, /goal, daemon stage 1, worktree support).
- **Stalled / slow-moving issues**: Claude Code’s file truncation (#53940) and macOS memory leak (#58272) remain open with few comments despite severity. Codex’s “Thinking” hang (#12161) is a long-standing pain point (since Feb 2026) with 30 comments but no fix yet.
- **Community frustration hotspots**: OpenCode’s subagent permission regression (#26700) and Opus 4.6 prefill error (#13768) are high-engagement. Kimi’s model version lock-in (#1925) is heated. Qwen’s auto-stop bug (#3730) and self-looping (#4055) draw strong user reactions.

## 6. Evidence-Backed Observations

1. **Session lifecycle features are a clear cross-tool demand.** Four tools (Copilot, Kimi, Qwen, OpenCode) have either shipped or are actively designing branching, goal, or daemon features. This goes beyond simple chat history and suggests a need for structured, multi-step task management in CLI agents.

2. **MCP integration quality is a widespread pain point.** Five tools (Claude Code, Codex, Gemini, Copilot, Kimi) reported or fixed MCP-related bugs today, ranging from prompt bloat to idle connection drops to OAuth token management. This remains an area of active investment and user frustration.

3. **Subagent trustworthiness is degrading across multiple platforms.** False success reports (Gemini), permission inheritance regressions (OpenCode), prompt-length failures (Claude Code), and self-looping (Qwen) indicate that current subagent implementations struggle with edge cases, eroding user confidence in delegation.

4. **Platform compatibility gaps, especially on Windows and older Linux, persist.** Specific bugs around file truncation, PowerShell encoding, GLIBC mismatches, and terminal rendering loops were reported for Claude Code, Copilot, and Qwen Code. These are not new problems but remain unresolved for significant portions of the user base.

5. **Performance and memory leaks are being actively addressed.** Claude Code (738 GB/h native leak on macOS, #58272), Kimi Code (broadcast queue and aiohttp connection pool fixes), and Qwen Code (session-list metadata I/O optimisation) all shipped or discussed memory/performance fixes today. This suggests infrastructure scaling is a shared priority.

6. **No single tool is dominating in all areas; differentiation remains strong.** Claude Code focuses on Anthropic ecosystem cost and agent robustness; Codex on IDE integration and diagnostics; Gemini on Google Cloud and fallback chains; Copilot on GitHub workflow and enterprise platforms; Kimi on model flexibility and automation; OpenCode on permission granularity and provider diversity; Qwen on self-hosting and daemon capabilities. Each tool serves overlapping but distinct user needs.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-05-13

## Today’s Update Brief
A single patch release (v2.1.140) landed today, fixing a `/goal` hang with hook restrictions and improving Agent subagent‑type matching. The issue tracker saw heavy activity: 50 items updated in the last 24 hours, with several high‑impact bugs involving file truncation, memory leaks, and silent auth/usage regressions. Three open pull requests focus on documentation and a new plugin.

## Releases
**v2.1.140** – [changelog](https://github.com/anthropics/claude-code/releases/tag/v2.1.140)
- Improved Agent tool `subagent_type` matching: now accepts case‑ and separator‑insensitive values (e.g. `"Code Reviewer"` → `code-reviewer`).
- Updated agent color palette.
- Fixed `/goal` silently hanging when `disableAllHooks` or `allowManagedHooksOnly` is set—now displays an error.

## Hot Issues (10 selected)

1. **#23347** – *[CLOSED] spinnerVerbs setting in ~/.claude/settings.json is ignored*
   User‑level `spinnerVerbs` config not applied; default verbs always used.
   👍 31 · [link](https://github.com/anthropics/claude-code/issues/23347)

2. **#37793** – *[OPEN] Subagents fail with ‘prompt is too long’ when user has many MCP servers*
   Tool definitions from many MCP servers exceed 200k tokens, causing immediate subagent failure with no visible error in TUI.
   👍 18 · [link](https://github.com/anthropics/claude-code/issues/37793)

3. **#50020** – *[CLOSED] Custom keybindings in Chat context silently ignored since v2.1.105–107*
   Regression: keybindings defined in `~/.claude/keybindings.json` stop working for Chat context.
   👍 2 · [link](https://github.com/anthropics/claude-code/issues/50020)

4. **#53940** – *[OPEN] Cowork Edit/Write tools silently truncate files via byte‑conservation buffer cap*
   Deterministic truncation at all file sizes; affected on Windows.
   👍 3 · [link](https://github.com/anthropics/claude-code/issues/53940)

5. **#37796** – *[OPEN] Copied text includes 2‑space leading indentation from TUI rendering*
   Every copy from terminal output introduces unwanted padding.
   👍 21 · [link](https://github.com/anthropics/claude-code/issues/37796)

6. **#58272** – *[OPEN] Severe native memory leak (~738 GB/h) on macOS*
   CLI becomes unresponsive; slash commands frozen.
   👍 1 · [link](https://github.com/anthropics/claude-code/issues/58272)

7. **#58557** – *[OPEN] Claude Code in VS Code consumes ~2x more weekly limit after May 6 changes*
   Cost spike reported; unclear if backend or client side.
   👍 0 · [link](https://github.com/anthropics/claude-code/issues/58557)

8. **#58550** – *[OPEN] /goal evaluator has no circuit breaker – unsatisfiable conditions burn unlimited tokens*
   No iteration limit; only manual `/goal clear` can stop it.
   👍 0 · [link](https://github.com/anthropics/claude-code/issues/58550)

9. **#58546** – *[OPEN] Worktrees spawned by Claude Code are missing untracked files from main branch*
   `EnterWorktree` only includes tracked files, leading to incorrect decisions.
   👍 0 · [link](https://github.com/anthropics/claude-code/issues/58546)

10. **#58545** – *[OPEN] Write tool on Windows produces UTF‑8 without BOM for .ps1 files, causing PowerShell 5.1 errors*
    Lack of BOM breaks scripts with non‑ASCII characters.
    👍 0 · [link](https://github.com/anthropics/claude-code/issues/58545)

## Key PR Progress (3 open)

- **#58323** – *[OPEN] docs: add PostToolUse continueOnBlock option to hooks documentation*
  Documents the `continueOnBlock` config for `PostToolUse` hooks; fixes #58120.
  [link](https://github.com/anthropics/claude-code/pull/58323)

- **#58314** – *[OPEN] docs: add CLAUDE_PROJECT_DIR to MCP and plugin environment variable docs*
  Documents that MCP stdio servers receive `CLAUDE_PROJECT_DIR` (matching hooks); fixes #58121.
  [link](https://github.com/anthropics/claude-code/pull/58314)

- **#58126** – *[OPEN] Add neonpanel plugin v1.0.0*
  New plugin: AI workforce for Amazon‑seller operations with eight domain agents.
  [link](https://github.com/anthropics/claude-code/pull/58126)

## Feature Request Clusters

- **Session metadata & cost visibility**
  Multiple requests for exposing rate limits, token usage, and status to a local source (#51382). Users also want warnings when `ANTHROPIC_API_KEY` silently overrides Max subscription (#53728) and when background token consumption occurs (#58355, #58557).

- **On‑the‑fly agent creation & environment configuration**
  Requests to create/write agents at runtime (#58544) and to set per‑repository default cloud environments for Claude Code Web (#58543).

- **MCP & plugin parity**
  Desktop version lacks `/plugin` command and plugin marketplace support (#42142). Users also request better integration with browser‑based MCP servers (#58553).

## Developer Pain Points

- **Subagent robustness** – Prompt‑length failures when many MCP servers are configured (#37793) and sub‑agents inheriting context tier but not usage entitlement (#57249).
- **File truncation** – Cowork’s Write/Edit tools truncate files on Windows (#53940) and on virtiofs mounts (#58551). Worktrees miss untracked files (#58546).
- **Memory & performance** – Severe native memory leak on macOS (#58272) and doubled token consumption in VS Code (#58557).
- **Silent regressions** – Keybindings ignored (#50020), TUI paste‑image broken on Windows/WSL (#58518), session resume loses context (#58554).
- **Cost and auth surprises** – `ANTHROPIC_API_KEY` silently shadows Max auth (#53728), `/goal` burns tokens with no circuit breaker (#58550), and `/ultrareview` consumes free reviews without delivering results (#58552).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-13

## Today's Update Brief
Activity remains high with 50 open issues and 50 pull requests updated in the last 24 hours. One new alpha release (rust-v0.131.0-alpha.8) was published. Two long-standing bugs—the “Thinking” hang on Windows and the “Model not found” error—saw fresh user reports, while the team merged several infrastructure PRs improving test stability, hook semantics, and auth guard restoration.

## Releases
- **rust-v0.131.0-alpha.8** ([Release](https://github.com/openai/codex/releases/tag/rust-v0.131.0-alpha.8))
  No detailed changelog; only the version bump note.

## Hot Issues
Picked 10 issues based on comment count, severity, and community engagement.

1. **#20552 – File Tree toggle unreliable on macOS** ([Issue](https://github.com/openai/codex/issues/20552))
   `View > Toggle File Tree` doesn’t always reveal the sidebar. 31 comments, 9 👍. Affects basic navigation for desktop app users.

2. **#12161 – IDE extension stuck on “Thinking” on Windows** ([Issue](https://github.com/openai/codex/issues/12161))
   Repeated reports of the extension hanging, affecting VS Code, Cursor, Windsurf. 30 comments, 16 👍. Long-standing pain point (opened Feb 2026).

3. **#9926 – Interactive `ask_user_question` tool** ([Issue](https://github.com/openai/codex/issues/9926))
   Enhancement proposal for structured Q&A in CLI to replace free-form chat. 24 comments, 24 👍. High demand for agent‑side questionnaires.

4. **#12098 – Tabbed interface for parallel chat sessions** ([Issue](https://github.com/openai/codex/issues/12098))
   Users want tabbed chat in VS Code/Cursor extension; current switching is cumbersome. 11 comments, 26 👍.

5. **#21343 – “Context compact error” in Codex App** ([Issue](https://github.com/openai/codex/issues/21343))
   Error message without clear cause; affects Pro users on macOS. 10 comments, 11 👍.

6. **#11086 – Message editing in conversations** ([Issue](https://github.com/openai/codex/issues/11086))
   Request for undo‑able message editing (like Cursor). 10 comments, 43 👍 – the most upvoted open feature request.

7. **#20933 – Multiple `git.exe add -A` processes on Windows** ([Issue](https://github.com/openai/codex/issues/20933))
   Desktop app triggers heavy git activity when opening a project, causing high CPU/disk. 6 comments, 5 👍.

8. **#22135 – macOS malware warning for extension binary** ([Issue](https://github.com/openai/codex/issues/22135))
   “codex-aarch64-apple-darwin” blocked by Gatekeeper. 4 comments, 11 👍. Blocks Android Studio users.

9. **#22368 – 404 “Model not found gpt-5.2” causes WebSocket reconnect loop** ([Issue](https://github.com/openai/codex/issues/22368))
   CLI stuck in fallback loop when model is unavailable. 1 comment, but highlights a critical failure mode.

10. **#22393 – VS Code extension unresponsive on Windows (backpressure, 403s, WSL probing)** ([Issue](https://github.com/openai/codex/issues/22393))
    Extension host cycles between responsive/unresponsive; logs show event storm and sync probing. 1 comment; potentially widespread.

## Key PR Progress
Selected 10 pull requests reflecting infrastructure improvements, feature work, and bug fixes.

1. **#20559 – Strict config parsing** ([PR](https://github.com/openai/codex/pull/20559))
   Opt‑in mode that rejects unknown `config.toml` fields, helping users catch misspellings without breaking backward compatibility.

2. **#22408 – Shard Bazel Windows tests across jobs** ([PR](https://github.com/openai/codex/pull/22408))
   Splits the single Windows CI leg into four shards to reduce PR‑blocking test time.

3. **#22268 – Hooks: use session IDs instead of thread IDs** ([PR](https://github.com/openai/codex/pull/22268))
   Fixes subagent hook correlation by propagating the parent session ID to spawned agents.

4. **#22246 – Remove unused legacy shell tools** ([PR](https://github.com/openai/codex/pull/22246))
   Deletes stale `shell`, `local_shell`, `container.exec` handlers; all usage now goes through `shell_command` and unified exec.

5. **#22258 – Route guardian review model selection through providers** ([PR](https://github.com/openai/codex/pull/22258))
   Allows provider implementations (e.g. Amazon Bedrock) to pick backend‑specific reviewer models instead of hard‑coding in core.

6. **#21624 – Make MCP startup status thread‑scoped** ([PR](https://github.com/openai/codex/pull/21624))
   Prevents review/delegate threads from blocking on global MCP startup; keeps `/review` UI from stalling.

7. **#22404 – Restore app‑server websocket listener with auth guard** ([PR](https://github.com/openai/codex/pull/22404))
   Re‑adds the TCP websocket listener removed in #21843, but restricts remote connections to authenticated ones.

8. **#22407 – Refactor chatwidget input flow into modules** ([PR](https://github.com/openai/codex/pull/22407))
   Phase 2 of the `chatwidget.rs` decomposition; extracts input and submission logic into dedicated files.

9. **#22336 – `codex doctor` diagnostics CLI** ([PR](https://github.com/openai/codex/pull/22336))
   New diagnostic command runs fast network reachability checks; intended as a first‑response support snapshot.

10. **#22399 – Route delegated MCP elicitations back to child session** ([PR](https://github.com/openai/codex/pull/22399))
    Fixes “elicitation request not found” errors when users respond to MCP prompts triggered by `/review` threads.

## Feature Request Clusters
- **UI/UX Improvements**
  - Tabbed chat interface (#12098, 26 👍)
  - Message editing with undo (#11086, 43 👍)
  - Reliable file tree toggle (#20552)
  - Editable / resizable layout elements (#22292, #21064)
- **Agent Interaction Enhancements**
  - Structured Q&A (`ask_user_question` tool, #9926, 24 👍)
  - Clearer `/goal` semantics regarding approval policies (#22362)
  - Automatic retry with backoff for transient capacity errors (#22390)
- **Platform & Environment Support**
  - OpenBSD sandbox (#21977)
  - Better WSL/Windows support across App and extension (#20933, #22393)
  - Workspace folder relocation without losing thread history (#15347)

## Developer Pain Points
- **Windows‑specific crashes and hangs** recur across multiple issues: extension unresponsiveness (#22393), git‑induced CPU spikes (#20933), and the persistent “Thinking” stall (#12161).
- **Model availability errors** (#22368) cause unrecoverable loops; users request clearer error messages and fallback logic.
- **macOS Gatekeeper / malware warnings** (#22135) block extension installation on the most recent macOS versions.
- **Configuration silences** – unknown config keys are ignored silently (#20559’s motivation) – frustrate users trying to debug settings.
- **Thread history loss** after moving workspaces (#15347) and archived deep‑link failures (#18216) remain unresolved.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-13

## Today’s Update Brief

Three releases landed in the last 24 hours, including the v0.43.0-preview.0 with surgical edit tool improvements and a stable v0.42.0 release that prevents automatic channel downgrades. Community issue activity remains high around agent reliability, memory system bugs, and browser subagent failures; maintainers merged several patches for fallback model chains and MCP OAuth token refresh.

## Releases

- **[v0.43.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.43.0-preview.0)** — Steers the model to use the edit tool for surgical edits; clarifies that Auto Memory proposes memory updates and skills (docs).
- **[v0.42.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.42.0)** — Prevents automatic updates from switching to less stable channels; version bump for nightly builds.
- **[v0.42.0-nightly.20260512](https://github.com/google-gemini/gemini-cli/releases/tag/v0.42.0-nightly.20260512.gc987b9939)** — Fixes snapshotter model configuration, allows installing extensions from SSH repos, and prevents duplicate session errors.

## Hot Issues (10 noteworthy)

1. **#24353** – [Component level evaluations EPIC](https://github.com/google-gemini/gemini-cli/issues/24353)
   *10 comments, 0 👍* — Follow-up to a previous EPIC for behavioral evals. Currently 76 tests for 6 Gemini variants. Maintainer-only discussion on scaling eval infra.

2. **#21740** – [Investigate impact of tracker on multiagent workflows](https://github.com/google-gemini/gemini-cli/issues/21740)
   *8 comments, 0 👍* — Tracks how the session tracker affects performance and correctness in multi-agent setups. Status: need-information.

3. **#22745** – [Assess the impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)
   *7 comments, 1 👍* — EPIC exploring AST tools for precise method reads, reducing turns and token noise. Community interest.

4. **#22323** – [Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)
   *6 comments, 2 👍* — Critical bug: `codebase_investigator` reports success even after hitting the turn limit. Hides real failures. High priority (p1/p2).

5. **#21968** – [Gemini does not use skills and sub‑agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)
   *6 comments, 0 👍* — Anecdotal but repeated: custom skills and sub‑agents are rarely invoked unless explicitly requested. Affects workflow automation.

6. **#26563** – [Tool "save_memory" not found](https://github.com/google-gemini/gemini-cli/issues/26563)
   *5 comments, 0 👍* – `/memory add` fails with `Tool "save_memory" not found` on v0.41.1. Bug in memory command routing.

7. **#21983** – [Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)
   *4 comments, 1 👍* – Browser agent terminates with “GOAL” instead of actionable error on Wayland. Affects Linux users.

8. **#25166** – [Shell command execution gets stuck with "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)
   *3 comments, 3 👍* – Frequent hang after simple shell commands. No user interaction required. Highly upvoted pain point.

9. **#23571** – [Model frequently creates tmp scripts in random spots](https://github.com/google-gemini/gemini-cli/issues/23571)
   *3 comments, 0 👍* – When shell execution is restricted, the model scatters edit scripts across directories, creating cleanup overhead.

10. **#22267** – [Browser Agent ignores settings.json overrides (e.g., maxTurns)](https://github.com/google-gemini/gemini-cli/issues/22267)
    *3 comments, 0 👍* – Configuration overrides for the browser agent are not applied. Affects customisation of agent behaviour.

## Key PR Progress (10 important)

1. **[#26652](https://github.com/google-gemini/gemini-cli/pull/26652)** – Fixes `400 INVALID_ARGUMENT` on Vertex AI by switching `thoughtSignature` to snake_case (`thought_signature`). Critical for Vertex users.

2. **[#23176](https://github.com/google-gemini/gemini-cli/pull/23176)** – Refactors `Config` class to be spread-safe when used as `AgentLoopContext`, preventing property loss during context cloning.

3. **[#26953](https://github.com/google-gemini/gemini-cli/pull/26953) (closed)** – Changes agent registration to “first-wins” and prioritises project-level agents over user-level. Closed without merge – likely superseded.

4. **[#26312](https://github.com/google-gemini/gemini-cli/pull/26312)** – Fixes MCP OAuth token reuse after re‑auth; transports now refresh tokens without requiring CLI restart. Closes #18895.

5. **[#26420](https://github.com/google-gemini/gemini-cli/pull/26420)** – Ignores `GOOGLE_CLOUD_PROJECT` env var during `LOGIN_WITH_GOOGLE` flow, fixing 403 Permission Denied for users with that variable set.

6. **[#26845](https://github.com/google-gemini/gemini-cli/pull/26845)** – Adds `gemini-2.5-flash-lite` to the default fallback chain (pro → flash → flash‑lite). Helps free‑tier users avoid quota exhaustion after 350 requests.

7. **[#26950](https://github.com/google-gemini/gemini-cli/pull/26950)** – Changes context file behaviour from overwrite to append when `settings.context.fileName` is set. Reduces accidental context loss.

8. **[#26939](https://github.com/google-gemini/gemini-cli/pull/26939)** – Fixes snapshot recovery across sessions (closes #26927). Prevents context corruption after restart.

9. **[#25980](https://github.com/google-gemini/gemini-cli/pull/25980)** – Prevents crash when an `@-mention` captures a non‑path blob (e.g., pasted JSON). Fixes `ENAMETOOLONG` error.

10. **[#26361](https://github.com/google-gemini/gemini-cli/pull/26361)** – Externalises `https-proxy-agent` from esbuild bundle, fixing `HttpsProxyAgent is not a constructor` error for users behind proxies.

## Feature Request Clusters

- **AST‑aware code tools** – Multiple issues (#22745, #22746, #22747) request integrating AST grep, tree‑sitter, or similar tools for more precise file reads, search, and codebase mapping. Community upvotes show strong interest (1–2 👍 each).
- **Sub‑agent activation improvements** – Users want sub‑agents to be used automatically based on context (#21968), ability to background local subagents (#22741), and better permission controls (#22093).
- **Browser agent resilience** – Requests for automatic session takeover and lock recovery (#22232), Wayland support (#21983), and respecting `settings.json` overrides (#22267) indicate the browser agent is a pain point.
- **Memory system quality** – Issues filed by maintainer @SandyTao520 (#26516, #26522, #26523, #26525) collectively ask for deterministic redaction, quarantine of invalid patches, stopping retries on low‑signal sessions, and reduced logging. These are likely being addressed internally.
- **Shell/CLI integration** – Users ask for shell alias support (#21461), prevention of destructive git/reset commands (#22672), and cleaner handling of temporary scripts (#23571).

## Developer Pain Points

- **Sub‑agent and skill under‑utilisation** – The model often ignores custom skills and sub‑agents unless explicitly told (#21968, #22093). Workarounds disrupt conversational flow.
- **Intermittent hangs and false successes** – Shell commands hang after completion (#25166) and sub‑agents report success when actually hitting turn limits (#22323). Both erode trust in the agent’s state reporting.
- **Tool discovery failures** – `/memory add` fails with `Tool "save_memory" not found` (#26563) and browser agent fails silently on Wayland (#21983). New users face confusing error messages.
- **Workspace pollution** – Model scatters temporary scripts (#23571) and context files are overwritten by default (#26950), causing cleanup overhead. The new “append” PR addresses part of this.
- **Evaluation instability** – Issues #23313 and #23166 discuss flaky internal evals that “bleed” and make it difficult to track regressions. Maintainers are actively working on test stability.
- **Quota exhaustion for free‑tier users** – Without `flash-lite` in the fallback chain, free users hit rate limits after ~350 requests. Two PRs (#26845, #26914) address this, but the issue (#26841) remains open.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-13

## 1. Today’s Update Brief
A minor patch release (v1.0.46) shipped yesterday fixing PowerShell startup for .NET global tool shims and improving diff‑view wrapping. Issue activity remains high (33 items in 24h), with several new bug reports around MCP connectivity, platform compatibility, and session reliability, alongside a long‑standing feature request for a `/fork` command gaining community traction.

## 2. Releases
**v1.0.46** (2026-05-12) — [View on GitHub](https://github.com/github/copilot-cli/releases/tag/v1.0.46)
- Displays a warning when the CLI version is deprecated (premium model access may be lost).
- PowerShell starts correctly when `pwsh` is installed as a .NET global tool shim.
- Long lines in diff view now wrap at terminal width instead of being truncated.
- Read‑only `gh` CLI commands (`list`, `view`) now work properly (release notes cut off, likely finishing “work without authentication” or similar).

## 3. Hot Issues (10 noteworthy)

### #2058 – [OPEN] `Add /fork command to branch a session`
- **What:** When a user asks a side question during a multi‑step objective, Copilot currently shifts context and derails the main task. Request for a `/fork` command to branch the session for side quests.
- **Impact:** Core workflow improvement for long‑running sessions; highest‑commented open issue (8 comments, 7 👍).
- **Link:** [github.com/github/copilot-cli/issues/2058](https://github.com/github/copilot-cli/issues/2058)

### #1433 – [OPEN] `Problem with COPILOT_CUSTOM_INSTRUCTIONS_DIRS on NFS`
- **What:** Custom AGENTS.md files stored on NFS or outside the project hierarchy are not picked up despite setting the environment variable.
- **Impact:** Blocks users who manage instructions centrally across teams. 7 comments, 6 👍.
- **Link:** [github.com/github/copilot-cli/issues/1433](https://github.com/github/copilot-cli/issues/1433)

### #3181 – [CLOSED] `Remove automatic co-author to Copilot CLI commits`
- **What:** User objects to AI being listed as a co‑author on commits, requests an option to disable it. Closed without resolution visible in data.
- **Impact:** Highlights ongoing tension around AI attribution policies. 4 comments.
- **Link:** [github.com/github/copilot-cli/issues/3181](https://github.com/github/copilot-cli/issues/3181)

### #2818 – [CLOSED] `Session token expired. Please resend your message`
- **What:** Long‑running tasks are aborted mid‑session with a token expiry error, disrupting autopilot workflows. 3 comments, 5 👍.
- **Impact:** Affects reliability for automated/background tasks.
- **Link:** [github.com/github/copilot-cli/issues/2818](https://github.com/github/copilot-cli/issues/2818)

### #3259 – [OPEN] `PowerShell process cannot be started (v1.0.45)`
- **What:** Copilot CLI fails to find/start PowerShell when installed via `dotnet tool install`. v1.0.46 claims to fix this, but the issue remains open after v1.0.45. 2 comments, 1 👍.
- **Impact:** Windows users relying on .NET global tools are blocked.
- **Link:** [github.com/github/copilot-cli/issues/3259](https://github.com/github/copilot-cli/issues/3259)

### #3123 – [OPEN] `Research tool can’t write its research report`
- **What:** `/research TOPIC` fails because the `create` tool is not available when trying to save the markdown file. Agent reports completion but cannot persist output. 2 comments, 1 👍.
- **Impact:** Core `/research` functionality broken in some environments.
- **Link:** [github.com/github/copilot-cli/issues/3123](https://github.com/github/copilot-cli/issues/3123)

### #3242 – [OPEN] `GPT sessions getting transient API error with PLAN features`
- **What:** GPT‑based sessions fail with “Transient API error” when using `/plan` or related features, while Claude models work fine. Started last week. 2 comments.
- **Impact:** Model‑specific regression affecting planning workflows.
- **Link:** [github.com/github/copilot-cli/issues/3242](https://github.com/github/copilot-cli/issues/3242)

### #3261 – [OPEN] `Add "shell" as a dedicated slash command`
- **What:** Users must remember the `!` prefix for shell commands; request for a discoverable `/shell` command with autocomplete. 1 comment.
- **Impact:** Usability enhancement for new users.
- **Link:** [github.com/github/copilot-cli/issues/3261](https://github.com/github/copilot-cli/issues/3261)

### #3257 – [OPEN] `HTTP MCP servers fail with TypeError: fetch failed after idle period`
- **What:** TCP connections to MCP servers are silently dropped during idle time (NAT/firewall timeouts) and the CLI reuses the dead pooled connection, causing errors. 1 comment.
- **Impact:** Critical for users running long‑lived Copilot sessions with remote MCP extensions.
- **Link:** [github.com/github/copilot-cli/issues/3257](https://github.com/github/copilot-cli/issues/3257)

### #3276 – [OPEN] `Copilot CLI fails on Rocky Linux 8.10 due to GLIBC version mismatch`
- **What:** Startup crashes because the distributed native module requires GLIBC versions not present on the older RHEL 8 base. 0 comments (new today).
- **Impact:** Blocks deployment on enterprise Linux distributions.
- **Link:** [github.com/github/copilot-cli/issues/3276](https://github.com/github/copilot-cli/issues/3276)

## 4. Key PR Progress

### #2587 – [CLOSED] `Add automated issue classification with GitHub Agentic Workflows`
- **What:** Introduces an AI‑powered workflow (`gh-aw`) that automatically applies `area:` labels and the `triage` label when issues are opened or reopened. Merged.
- **Impact:** Improves triage efficiency by surfacing relevant labels for maintainers.
- **Link:** [github.com/github/copilot-cli/pull/2587](https://github.com/github/copilot-cli/pull/2587)

*(Only one PR was updated in the last 24h.)*

## 5. Feature Request Clusters

- **Session Branching / Interruption:** Multiple requests for `/fork` (#2058), `/pause` or `/stop` (#3265), and better handling of side queries without losing main context.
- **Usability – Slash Commands:** Requests to make existing hidden functionality (e.g., `!` shell) discoverable via `/shell` (#3261) and to surface error‑skill names in startup banners (#3263).
- **MCP Improvements:** Demand for robust connection handling (#3257), proper structured‑content forwarding (#3258), and clearer authorization success/failure messages (#3269).
- **Configuration & Environment:** Ability to use symlinks for `.copilot` files (#3264), better documentation of custom instructions directories (#1433), and clean removal of marketplace plugins from settings.json (#3268).
- **Model & Agent Transparency:** Users want warnings when a requested model is silently substituted (#3266) and support for interrupting agents mid‑reasoning (#3265).

## 6. Developer Pain Points

- **Platform Compatibility:** Rocky Linux / older GLIBC (#3276), Windows PowerShell .NET global tool shims (#3259, partially fixed in v1.0.46), and copy/paste broken inside tmux → Windows SSH (#3260) highlight fragmentation.
- **Session Reliability:** Stale lock files on crashes (#3255), session token expiry during long tasks (#2818), and “stuck on cancelling” (#3267) erode trust for automated workflows.
- **MCP Networking:** Reused dead TCP connections (#3257) and dropped unstructured content (#3258) are breaking MCP extension integration.
- **Model‑Specific Regressions:** GPT models failing on PLAN features while Claude works (#3242) forces users to switch models unpredictably.
- **Co-author Controversy:** The closed #3181 discussion shows ongoing frustration with AI being listed as a commit co‑author, though no resolution was provided in this patch.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

Here is the Kimi Code CLI community digest for 2026-05-13.

---

## Kimi Code CLI Community Digest – 2026-05-13

### 1. Today's Update Brief

The project is highly active today with the release of **v1.43.0**, bringing UI/UX polish and telemetry schema improvements. The community is vocal about model version flexibility and API compatibility, while maintainers are shipping significant fixes for memory leaks, connection pools, deprecation warnings, and a major new `/loop` command.

### 2. Releases

**v1.43.0** was released today.
- **Highlights:**
  - **UI Polish:** Improved shell spacing, link highlighting, and notification duration ([#2230](https://github.com/MoonshotAI/kimi-cli/pull/2230)).
  - **Telemetry:** Enhanced event schema with outcome enums, lifecycle tracking, and error enrichment ([#2230](https://github.com/MoonshotAI/kimi-cli/pull/2230)).
- **Key Fixes in this cycle:**
  - Fixed CVE-2026-25990 by bumping `pillow` to 12.2.0 ([#2187](https://github.com/MoonshotAI/kimi-cli/pull/2187)).
  - Fixed memory leaks in broadcast queues and web store cache ([#2236](https://github.com/MoonshotAI/kimi-cli/pull/2236)).
  - Fixed connection leaks in `aiohttp` via connection pooling ([#2231](https://github.com/MoonshotAI/kimi-cli/pull/2231)).
  - Fixed `AuthlibDeprecationWarning` by upgrading FastMCP OAuth storage ([#2241](https://github.com/MoonshotAI/kimi-cli/pull/2241)).
  - Introduced tool call deduplication to prevent redundant executions ([#2242](https://github.com/MoonshotAI/kimi-cli/pull/2242)).
  - Implemented the `/loop` recurring prompt scheduler ([#2248](https://github.com/MoonshotAI/kimi-cli/pull/2248)).
  - Unified approval modes (`--yolo`, `--afk`, and slash commands) into a coherent system ([#2249](https://github.com/MoonshotAI/kimi-cli/pull/2249)).

### 3. Hot Issues

- **#1925 – [Request] Kimi K2.5 vs K2.6 Model Switching** – A heated user request to allow switching back to the K2.5 model, claiming K2.6 has degraded personality and reasoning quality. **10 comments**, mixed community sentiment. [View](https://github.com/MoonshotAI/kimi-cli/issues/1925)
- **#1947 – [Bug] OAI-Compatibility with `kimi code`** – User reports failures when trying to use Kimi Code with an OpenAI-compatible copilot endpoint, getting a "request failed" error. **4 comments**. [View](https://github.com/MoonshotAI/kimi-cli/issues/1947)
- **#1585 – [Request] Customizable Keybinding for Newlines** – A long-standing feature request for `Shift+Enter` to insert newlines instead of the current `Ctrl+J`, described as a "terrible newline mode". **3 comments, 2 upvotes**. [View](https://github.com/MoonshotAI/kimi-cli/issues/1585)
- **#2208 – [Request] OpenAI-Compatible API for Cursor** – User loves K2.6 and asks for a direct OpenAI-compatible endpoint to use with Cursor. **2 comments**. [View](https://github.com/MoonshotAI/kimi-cli/issues/2208)
- **#2204 – [Bug] `/clear` Rotates Context But Lacks Restore Command** – The `/clear` command rotates context files but provides no CLI command to restore them, creating a confusing UX for users who need to recover history. **1 comment**. [View](https://github.com/MoonshotAI/kimi-cli/issues/2204)
- **#2218 – [Request] `/goal` Command for Long Tasks** – Similar to Cursor's Codex feature, user wants a `/goal` command for managing long-running, multi-step tasks. **1 comment**. [View](https://github.com/MoonshotAI/kimi-cli/issues/2218)
- **#2247 – [Bug] Theme Mode Diff Render Error** – User reports a rendering error in diff views after updating to v1.43.0, affecting the visual display of changes. **0 comments**, newly opened. [View](https://github.com/MoonshotAI/kimi-cli/issues/2247)
- **#2153 – [Closed] CVE Fix: Pillow 12.1.0 -> 12.2.0** – User requested upgrading Pillow to fix an out-of-bounds write vulnerability (CVE-2026-25990) that blocks installs in security-tight environments. **Resolved via PR #2187**. [View](https://github.com/MoonshotAI/kimi-cli/issues/2153)
- **#2203 – [Closed] Deprecation Warning from FastMCP** – User reported an `AuthlibDeprecationWarning` printed on every startup when MCP servers are configured. **Resolved via PR #2241**. [View](https://github.com/MoonshotAI/kimi-cli/issues/2203)
- **#2240 – [Request] `--prompt-interactive` for Initial Prompt + Interactive Mode** – User requests an option to pass an initial prompt while keeping the shell interactive, contrasting with the current `--prompt` flag which exits after execution. **0 comments**. [View](https://github.com/MoonshotAI/kimi-cli/issues/2240)

### 4. Key PR Progress

- **#2249 – Unified Approval Modes** – Refactors the four existing auto-approval modes (`--yolo`, `--afk`, `/yolo`, `/afk`) into a single unified system with toolbar badges and temporary toasts, simplifying the UX. [View](https://github.com/MoonshotAI/kimi-cli/pull/2249)
- **#2246 – `--prompt-interactive` Option** – Implements the feature requested in #2240, allowing users to start with an initial prompt and remain in the interactive shell. [View](https://github.com/MoonshotAI/kimi-cli/pull/2246)
- **#2236 – Fix Memory Leaks in Broadcast & Web Store** – Bounds broadcast queues and caps the web store session cache to prevent OOM errors from slow consumers and unbounded caching. [View](https://github.com/MoonshotAI/kimi-cli/pull/2236)
- **#2231 – Fix aiohttp Connection Leaks** – Introduces a global `_ConnectionPool` to reuse TCP connectors, reducing file-descriptor exhaustion and TCP handshake overhead. [View](https://github.com/MoonshotAI/kimi-cli/pull/2231)
- **#2245 – Improve Provider Error UX (429 Rate Limits)** – Centralizes error formatting for provider errors (especially 429s) to present friendly messages across shell, print, and API surfaces without logging full tracebacks. [View](https://github.com/MoonshotAI/kimi-cli/pull/2245)
- **#2248 – Implement `/loop` Command** – Adds a slash command for scheduling prompts on a recurring interval using cron expressions, enabling automated workflows. [View](https://github.com/MoonshotAI/kimi-cli/pull/2248)
- **#2242 – Tool Call Deduplication** – Prevents redundant executions when the model issues identical tool calls within the same step or across consecutive steps. [View](https://github.com/MoonshotAI/kimi-cli/pull/2242)
- **#2244 – Release v1.43.0** – Bumps the package versions and moves release notes. [View](https://github.com/MoonshotAI/kimi-cli/pull/2244)
- **#2241 – Upgrade FastMCP OAuth Storage** – Resolves the `AuthlibDeprecationWarning` by upgrading FastMCP from 2.12.5 to 3.2.4 and updating its OAuth handling. [View](https://github.com/MoonshotAI/kimi-cli/pull/2241)
- **#2243 – CI: macOS x64 Build Artifact** – Adds a CI workflow to build a macOS x64 CLI release artifact. [View](https://github.com/MoonshotAI/kimi-cli/pull/2243)

### 5. Feature Request Clusters

- **Model Flexibility:** Users are vocal about wanting control over which Kimi model version they use (e.g., K2.5 vs K2.6), citing regression in personality and reasoning in newer models (#1925).
- **API Compatibility:** A recurring request for exposing an OpenAI-compatible API endpoint, driven by users wanting to use Kimi K2.6 with third-party IDEs like Cursor (#2208, #1947).
- **Workflow & UX Enhancements:**
  - **Long Task Management:** Users want a dedicated `/goal` command for long, multi-step tasks, inspired by Cursor's Codex workflow (#2218).
  - **Context Control:** The inability to restore rotated context files after using `/clear` is a clear UX gap (#2204).
  - **Interactive Prompting:** Users want the ability to pass a prompt and still stay in the interactive shell, which PR #2246 now addresses (#2240).
- **Quality of Life:** Users continue to request customizable keybindings (`Shift+Enter` for newlines) and improvements to the CLI display, like diff rendering (#2247).

### 6. Developer Pain Points

- **Model Firmware & Version Lock-in:** Frustration is high regarding the inability to choose or revert to a specific model (K2.5), suggesting recent updates introduced unwanted changes in behavior and output style.
- **API Integration Barriers:** The lack of an OpenAI-compatible API is a significant friction point for users who want to integrate Kimi's capabilities into their existing IDE pipelines (Cursor, etc.), forcing workarounds or abandonment of the tool.
- **Missing Core Workflow Features:** The absence of a robust "long-running task" command (like `/goal`) and the inability to recover rotated context files indicates a gap in power-user workflows.
- **CLI Quality-of-Life:** The long-standing complaint about the newline keybinding (`Ctrl+J` vs `Shift+Enter`) and today’s diff rendering bug suggest that some basic shell ergonomics and UI consistency are still being polished.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest – 2026-05-13

## Today’s Update Brief
No new releases were published in the past 24 hours. Community activity remained high with 50 issues and 50 PRs updated; the busiest threads revolve around subagent permission regressions, model-specific bugs (Opus 4.6 prefill, double compaction), and the deprecation of the CLI TUI in the Debian package. Maintainers merged a large batch of test infrastructure migrations (Effect runner) and committed performance fixes for the desktop review panel.

## Releases
*None in the last 24 hours.*

## Hot Issues
1. **#13768 – [OPEN] “This model does not support assistant message prefill” with GitHub Copilot + Opus 4.6**
   *[64 comments, 27 👍]*
   OpenCode sessions using Opus 4.6 via Copilot consistently fail with a prefill error. The conversation export shows the assistant message ending without a user message. This blocks a core workflow for many Copilot + Opus users.
   [GitHub](https://github.com/anomalyco/opencode/issues/13768)

2. **#16100 – [OPEN] Numpad keys not working in VS Code 1.110 integrated terminal**
   *[21 comments, 18 👍]*
   Numpad 0-9, Enter, and operators are ignored inside OpenCode’s TUI when launched from VS Code’s terminal. The numpad works fine in the host shell and in external terminals, suggesting a terminal emulation compatibility issue.
   [GitHub](https://github.com/anomalyco/opencode/issues/16100)

3. **#25879 – [OPEN] `opencode-cli` TUI missing after Debian package upgrade**
   *[18 comments, 3 👍]*
   Upgrading the Debian package from 1.14.30 to 1.14.39 removes `/usr/bin/opencode-cli`. The author could not find any release notes mentioning the removal. Several users impacted rely on the CLI mode.
   [GitHub](https://github.com/anomalyco/opencode/issues/25879)

4. **#6217 – [OPEN] Ability to have multiple instances of the same provider**
   *[15 comments, 19 👍]*
   Users managing multiple OpenRouter accounts (or personal + work accounts) want to configure separate instances of the same provider with different API keys. Currently only one instance per provider is allowed.
   [GitHub](https://github.com/anomalyco/opencode/issues/6217)

5. **#10557 – [OPEN] Provider pinning does not work for OpenRouter models**
   *[13 comments, 2 👍]*
   Pinning a specific provider (e.g., MiniMax-M2.1 to Minimax) via `provider.order` with `allow_fallbacks: false` is ignored – OpenCode still falls back to other providers. This undermines cost control and reliability.
   [GitHub](https://github.com/anomalyco/opencode/issues/10557)

6. **#22528 – [CLOSED] How to turn off sound effects and animations in v1.4.4**
   *[12 comments, 41 👍]*
   The v1.4.4 TUI introduced a startup animation and sound effect with no documented toggle. The issue was closed with a resolution (likely a config flag), but the high 👍 count indicates strong user desire for opt-out.
   [GitHub](https://github.com/anomalyco/opencode/issues/22528)

7. **#26700 – [CLOSED] Subagent parent deny inheritance over-constrains delegated agents with explicit permissions**
   *[11 comments, 2 👍]*
   A regression from #26597 (Plan Mode security fix) now copies **all** parent deny rules into subagents. This means a read-only parent agent can still spawn a subagent that cannot use its explicitly granted write/edit tools, breaking the commander-worker pattern.
   [GitHub](https://github.com/anomalyco/opencode/issues/26700)

8. **#8463 – [OPEN] Feature: `--dangerously-skip-permissions` (YOLO mode)**
   *[11 comments, 47 👍]*
   Highly voted request to add a CLI flag that suppresses all permission prompts for automated/trusted environments. Users want to skip read/write/command approvals when they know the pipeline is safe.
   [GitHub](https://github.com/anomalyco/opencode/issues/8463)

9. **#26697 – [OPEN] SSE event stream closes immediately after `server.connected`**
   *[8 comments, 11 👍]*
   The `/event` SSE endpoint terminates after the initial `server.connected` event. Clients never receive `message.part.delta` or other bus events, even though the server logs show them being emitted. Affects all SSE-based integrations.
   [GitHub](https://github.com/anomalyco/opencode/issues/26697)

10. **#26230 – [OPEN] Double compaction for Copilot Opus 4.7**
    *[8 comments, 1 👍]*
    When using Opus 4.7 via Copilot, OpenCode triggers token compaction twice. Token usage jumps from 100K to >200K before the second compaction. Not observed with GPT 5.5 or other vendors.
    [GitHub](https://github.com/anomalyco/opencode/issues/26230)

## Key PR Progress
1. **#27221 – [CLOSED] perf(app): unmount closed review panel**
   Merged. The desktop review/file-tree side panel content is now unmounted when closed, and the review tab body mounts only when the panel is open. Chrome traces show reduced memory/rendering overhead.
   [GitHub](https://github.com/anomalyco/opencode/pull/27221)

2. **#27114 – [OPEN] [contributor] Preview native LLM runtime stack**
   Adds an opt-in native LLM runtime for sessions while keeping the AI SDK as the default. Converts both streams into a shared `LLMEvent` shape. Includes OpenAI Responses native request cache. Enables stepping away from the SDK dependency.
   [GitHub](https://github.com/anomalyco/opencode/pull/27114)

3. **#27218 – [CLOSED] [contributor] test(server): migrate project init git test to Effect runner**
   Part of the ongoing test infrastructure rewrite – moves `project-init-git.test.ts` to Effect-native `it.instance` tests with scoped bus listeners and filesystem services.
   [GitHub](https://github.com/anomalyco/opencode/pull/27218)

4. **#27217 – [CLOSED] [contributor] test(permission): migrate next tests to Effect runner**
   Converts permission ask/reply tests to Effect-native style, replacing Promise wrappers with `InstanceStore` and `Deferred`.
   [GitHub](https://github.com/anomalyco/opencode/pull/27217)

5. **#27215 – [CLOSED] [contributor] test(project): migrate instance tests to Effect runner**
   Migrates cleanup and bootstrap overrides in `test/project/instance.test.ts` to scoped Effect resources with Queue-based release handoff.
   [GitHub](https://github.com/anomalyco/opencode/pull/27215)

6. **#27216 – [CLOSED] [contributor] test(server): migrate provider httpapi test to Effect runner**
   Moves `httpapi-provider.test.ts` to `it.instance` tests, replacing manual instance cleanup with scoped test-state cleanup.
   [GitHub](https://github.com/anomalyco/opencode/pull/27216)

7. **#27222 – [OPEN] [contributor] test(pty): migrate session tests to Effect runner**
   Migrates PTY session tests, replacing Promise polling with Queue-based event collection and `timeoutOrElse`. Uses scoped PTY cleanup via `acquireRelease`.
   [GitHub](https://github.com/anomalyco/opencode/pull/27222)

8. **#27163 – [OPEN] [contributor] feat: add native session goals**
   Implements per-session goals persisted server-side, exposed via HTTP APIs and generated reports. Closes #27167. Aims to replace manual slash command workflows with a native lifecycle feature.
   [GitHub](https://github.com/anomalyco/opencode/pull/27163)

9. **#18306 – [OPEN] feat(opencode): add Open WebUI provider**
   New provider for [Open WebUI](https://openwebui.com). Builds on earlier work (#14341) and includes bug fixes, documentation, and the provider integration. Allows users to self-host models through Open WebUI.
   [GitHub](https://github.com/anomalyco/opencode/pull/18306)

10. **#26895 – [OPEN] [contributor] fix(opencode): fail closed on snapshot git failures**
    Ensures snapshot tracking fails closed when required git commands error, instead of allowing stale snapshot state to persist. Closes #26893.
    [GitHub](https://github.com/anomalyco/opencode/pull/26895)

## Feature Request Clusters
- **Permission & Automation**
  High interest in skipping permission prompts for trusted pipelines (`--dangerously-skip-permissions` / YOLO mode, #8463), the ability to guide subagents without killing them (#2378), and restoring independent agent permissions that were lost in the subagent inheritance fix (#27123).

- **Model & Provider Management**
  Requests for multiple instances of the same provider (#6217), automatic model selection based on task type (#8456), and native Anthropic Advisor Strategy support (#21789). Provider pinning bug (#10557) also falls into this cluster.

- **UI/UX Customization**
  Users want toggles for sound effects and animations (#22528), native session goals (#27162), and re-introduction of the CLI TUI (#25879). The numpad issue (#16100) and keybind regressions (#27096) also relate to UI polish.

- **Plugin/Image Support**
  Plugin tools cannot return image attachments despite internal support (#21383). All image attachments stripped on Linux x86_64 (#27109). These limit visual debugging and documentation workflows.

## Developer Pain Points
- **Subagent Permission Regressions**
  Multiple issues (#26700, #26758, #26747) report that subagents spawned by a restricted parent (e.g., read-only) lose their explicitly granted permissions. The fix for a security bypass broke the commander-worker pattern, leaving developers unable to delegate tasks requiring edit/terminal access.

- **Model-Specific Bugs**
  Copilot + Opus 4.6 prefill error (#13768) and double compaction with Opus 4.7 (#26230) indicate ongoing incompatibilities with Anthropic’s latest models. Websearch and codesearch tools missing for Copilot models (#7414) further frustrate users.

- **Terminal / TUI Issues**
  Numpad silent in VS Code integrated terminal (#16100), static spinner animation (#20978), and keybind breakage after Dvorak keycode change (#27096) degrade the terminal experience. The removal of `opencode-cli` from the Debian package (#25879) leaves TUI-dependent users without a known migration path.

- **Packaging & Updater Problems**
  Fedora RPM’s “Install and Restart” does not actually upgrade the app (#23538). The in-app updater appears to relaunch the old version. Combined with the missing CLI binary, this makes distribution reliability a concern.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-13

## Today’s Update Brief
A busy day with five releases (preview/nightly) bundling a performance fix for session-list metadata reads and a test stabilization. Community activity remains high: 36 issues and 50 PRs updated in the last 24 hours. Key discussion points include a critical auto-stop bug, a daemon mode design proposal, and multiple UI/terminal rendering fixes.

---

## Releases
Five versions published in the last 24 hours — all share the same changelog:

- **v0.15.11-preview.2**, **v0.15.10-preview.1**, **v0.15.10-nightly.20260513.14512080e**, **v0.15.11-preview.1**, **v0.15.11-preview.0**
  **What’s Changed:**
  - `chore(release): v0.15.10` by @qwen-code-ci-bot
  - `perf(core): bound session-list metadata reads to head/tail 64KB; pool buffer; lazy message count` by @qqqys — improves performance when listing sessions by reducing I/O.
  - `test: stabilize main e2e` — flakiness fix for end-to-end tests.

No other release notes were present.

---

## Hot Issues (10 picked)

1. **[#3730] [BUG] Auto-stop task after update**
   *Affected workflow*: Long-running tasks now unexpectedly stop without user input.
   *Impact*: Users running heavy tasks for days are forced to restart.
   *Reaction*: 6 comments, author asked for investigation.
   *Link*: https://github.com/QwenLM/qwen-code/issues/3730

2. **[#3803] [FEATURE] Daemon mode (qwen serve) proposal**
   *Workflow*: Running Qwen Code as a persistent HTTP daemon for integration with other tools.
   *Impact*: High interest – 4 comments, maintainer @wenshao authored.
   *Status*: Updated with architecture revision on 2026-05-13.
   *Link*: https://github.com/QwenLM/qwen-code/issues/3803

3. **[#3838] [BUG] Terminal infinite scroll/refresh loop**
   *Workflow*: When model outputs source code, the terminal enters a rendering loop.
   *Impact*: Completely breaks readable display until output ends.
   *Reaction*: 4 comments, user suspects a UI rendering-layer issue.
   *Link*: https://github.com/QwenLM/qwen-code/issues/3838

4. **[#4055] [BUG] Agent self-looping thinking for 15+ minutes**
   *Workflow*: Simple request to modify a skill doc caused the model to think in circles without replying.
   *Impact*: User extremely frustrated – “望解决这个 bug”.
   *Reaction*: 3 comments, screenshots of endless thinking.
   *Link*: https://github.com/QwenLM/qwen-code/issues/4055

5. **[#4089] [BUG] Context window config not respected**
   *Workflow*: User sets model context to 262K but `/context detail` shows 1M tokens.
   *Impact*: Cannot reliably manage context usage.
   *Reaction*: 2 comments, awaiting triage.
   *Link*: https://github.com/QwenLM/qwen-code/issues/4089

6. **[#4025] [BUG] Statusline context percentage inaccurate**
   *Workflow*: The `cxt` percentage does not match real context usage, leading to premature compacting or unexpected errors.
   *Impact*: Users cannot trust the metric.
   *Reaction*: 2 comments, labeled as `welcome-pr`.
   *Link*: https://github.com/QwenLM/qwen-code/issues/4025

7. **[#4035] [BUG] Fetch failed on DashScope-intl endpoint**
   *Workflow*: Using OpenAI-compatible endpoint for international DashScope fails due to undici dispatcher incompatibility.
   *Impact*: Blocks all requests for users in Singapore/International region.
   *Reaction*: 2 comments, user provided detailed environment.
   *Link*: https://github.com/QwenLM/qwen-code/issues/4035

8. **[#4094] [FEATURE] Trim outdated background task results**
   *Workflow*: Background task results pile up; new-task discoverability is poor in the task dialog.
   *Impact*: Adds UX friction for users managing multiple tasks.
   *Reaction*: 2 comments, author @huww98 proposed concrete improvements.
   *Link*: https://github.com/QwenLM/qwen-code/issues/4094

9. **[#4076] [BUG] Tool calls return no actual content**
   *Workflow*: After a conversation start, all tool invocations return empty results.
   *Impact*: Agent cannot function – core workflow broken.
   *Reaction*: 2 comments, awaiting information.
   *Link*: https://github.com/QwenLM/qwen-code/issues/4076

10. **[#4029] [FEATURE] TAB completion for /model command**
    *Workflow*: Users want `Tab` to cycle through available model names when typing `/model`.
    *Impact*: Minor usability improvement for frequent model switchers.
    *Reaction*: Closed as resolved? Actually still open, 3 comments.
    *Link*: https://github.com/QwenLM/qwen-code/issues/4029

---

## Key PR Progress (10 picked)

1. **[#3896] fix(core): normalize cumulative OpenAI stream deltas to suffixes**
   Some providers send accumulated full text instead of incremental deltas. Fix prevents duplicated content in Gemini stream.
   *Link*: https://github.com/QwenLM/qwen-code/pull/3896

2. **[#4037] feat(cli): wrap markdown links in OSC 8 for clickable wrapped URLs**
   Long URLs line-wrapped by the terminal are now enclosed in OSC 8 hyperlink sequences, keeping them clickable. Closes #3954.
   *Link*: https://github.com/QwenLM/qwen-code/pull/4037

3. **[#3966] fix(core): deduplicate geminiChat recovery continuation text**
   When a provider resumes after `MAX_TOKENS`, the recovery loop may re-send trailing characters. This PR deduplicates to avoid duplicate output.
   *Link*: https://github.com/QwenLM/qwen-code/pull/3966

4. **[#4023] fix(cli): auto-restore prompt and preserve queue on cancel**
   Pressing ESC immediately after submit now restores the prompt in the input line and does not drop queued follow-up inputs.
   *Link*: https://github.com/QwenLM/qwen-code/pull/4023

5. **[#3997] fix(core): improve runtime fetch options error handling and documentation**
   Follow-up refactor: clarifies proxy dispatcher creation and prevents accidental no-proxy calls.
   *Link*: https://github.com/QwenLM/qwen-code/pull/3997

6. **[#4086] feat(subagents): use fastModel for Explore subagent**
   The built-in `Explore` subagent now uses the configured `fastModel` (e.g., `qwen3-coder-flash`) for read-only search workloads, reducing latency for file discovery.
   *Link*: https://github.com/QwenLM/qwen-code/pull/4086

7. **[#3889] feat(cli,sdk): qwen serve daemon (Stage 1)**
   Implements the first stage of the daemon mode proposal (#3803): `qwen serve` HTTP server with ACP NDJSON/SSE protocol, health, capabilities, session create/list, prompt, cancel routes.
   *Link*: https://github.com/QwenLM/qwen-code/pull/3889

8. **[#4088] feat(cli): add session-scoped /goal command with judge-driven turn continuation**
   New built-in command `/goal <condition>` pins a session objective. An LLM-as-judge runs at each Stop boundary to decide whether to continue the turn until the goal is met.
   *Link*: https://github.com/QwenLM/qwen-code/pull/4088

9. **[#4070] perf(cli): code-split lowlight to cut startup V8 parse cost**
   Splits the `lowlight` syntax-highlighter (~1.5 MB) out of the CLI entry, reducing initial V8 parse cost by ~36–60 ms. Loaded on-demand when the first code block is rendered.
   *Link*: https://github.com/QwenLM/qwen-code/pull/4070

10. **[#4073] feat(tools): add generic worktree support — EnterWorktree/ExitWorktree + Agent isolation**
    Adds two new tools to let agents create and use isolated git worktrees, plus a cleanup utility for stale ephemeral worktrees.
   *Link*: https://github.com/QwenLM/qwen-code/pull/4073

---

## Feature Request Clusters

Several recurring themes emerged across today’s issues:

- **Terminal UI & Rendering**
  - OSC 8 hyperlinks (PR #4037), TAB completion for `/model` (#4029), quiet-restore flag (#4079), emacs shortcuts (#3821), infinite scroll loop fix (#3838), statusline context accuracy (#4025).

- **Provider Compatibility & Authentication**
  - DashScope-intl endpoint failure (#4035), image input not recognized with local llama.cpp (#3674), API error 401 (#3704), automatic agent rejection after update (#4042).

- **Session & Context Management**
  - `/compress` not working (#4098), `/rewind` file restoration (PR #4064), `/goal` command (PR #4088), daemon mode (issue #3803, PR #3889), context window config bug (#4089).

- **Security & Configuration**
  - Encrypted storage for API keys/tokens (#4016), multi-tool config mapping (#4017), command substitution denial inconsistency (#4093), outdated background tasks trimming (#4094).

- **Tool Integrity & MCP**
  - Browser-use integration request (#4034), tool calls returning empty content (#4076), `read_file` rendering issue (#4077), progressive MCP availability (PR #3994).

---

## Developer Pain Points

- **Unpredictable task cancellation** – #3730 (auto-stop), #4042 (auto-reject) indicate agents stopping without user intent.
- **Self-looping / endless thinking** – #4055, also echoed in #4098 (compress not working). Core workflow reliability concern.
- **Context window inaccuracies** – #4089 (config not respected), #4025 (percentage wrong) create confusion and wasted time.
- **Terminal rendering glitches** – #3838 (infinite scroll), #4052 (table highlight lost) degrade the reading experience.
- **Provider-specific failures** – #4035 (DashScope-intl), #3674 (llama.cpp vision) highlight fragility in multi-provider support.
- **Performance while waiting** – #4033 reports high power draw when agents wait on slow external processes.
- **Data integrity fears** – #4095 (atomic file write), #4093 (command substitution inconsistency) point to safety concerns.

All items include links to the relevant GitHub issues/PRs for further details.

</details>