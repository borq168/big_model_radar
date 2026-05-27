# AI CLI Tools Community Digest 2026-05-27

> Generated: 2026-05-27 02:37 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Tool Comparison Report — 2026-05-27

## 1. Daily Cross-Tool Overview

Today saw mixed release activity: Claude Code shipped v2.1.152 with `/code-review --fix` enhancements, OpenAI Codex released rust-v0.134.0 adding local conversation search, GitHub Copilot CLI pushed v1.0.55-1 fixing TUI artifacts, and Qwen Code delivered v0.16.1-preview.0 with a TypeScript build fix. Gemini CLI, Kimi Code CLI, and OpenCode had no new releases. Community attention concentrated on authentication failures (Codex, Qwen, Gemini), memory/performance regressions (Qwen OOM crashes, OpenCode streaming freezes), and extensibility gaps (MCP tooling, skill/hook boundaries). Maintainer response was uneven: Claude Code and Codex actively triaged high-comment issues, while some Gemini and OpenCode issues remain unaddressed.

## 2. Activity Comparison

| Tool                 | Issues Updated (24h) | PRs Updated (24h) | New Release Today? |
|----------------------|----------------------|-------------------|---------------------|
| Claude Code          | 50                   | 9 (7 open, 2 closed) | v2.1.152 |
| OpenAI Codex         | Not explicitly stated (10 highlighted) | 10 (8 open, 2 closed) | rust-v0.134.0 |
| Gemini CLI           | 50 open/updated      | 27 open/updated   | None |
| GitHub Copilot CLI   | 42                   | 0                 | v1.0.55-1 |
| Kimi Code CLI        | 7                    | 6                 | None |
| OpenCode             | 50                   | 50                | None |
| Qwen Code            | Not explicitly stated (10+ OOM, several daemon issues) | 10+ (multiple merged) | v0.16.1-preview.0 + nightly + SDK previews |

*Note: OpenCode and Gemini CLI report the highest combined issue+PR activity today. Claude Code and Codex released new versions.*

## 3. Shared Feature Directions

- **Authentication & SSO integration pain points** – Codex (#20161 phone verification), Qwen (#4317 Google OAuth 504 timeout), and Gemini (#24665 Hermes OAuth) all have unresolved login issues. Users across tools report blocking failures during initial auth or token refresh.
- **Memory/OOM management** – Qwen Code has 10+ open OOM crash reports (heap limit, mark-compact failures). OpenCode also reports streaming freezes with high CPU (#29129). Both communities request better memory handling for long sessions.
- **MCP tool interoperability** – Copilot CLI has a registry URL bug (#3436), Qwen Code is actively building MCP server add/remove routes and a bridge for external clients (PR #4552, #4555), and Gemini CLI has a PR to prevent tool wipe on MCP timeouts (#27383). All three are working on making MCP connections more reliable.
- **Session and memory management** – Claude Code has issues with hook persistence (#29716) and skill description warnings (#56448). Gemini CLI has PRs harmonizing empty session lifecycle (#27287). OpenCode features a `/goal` plugin for session goals (#27167). Kimi Code reports tool call dedup improvements (#2372). Multiple tools are investing in session state reliability.
- **Terminal & platform compatibility** – Qwen Code Windows shell detection (#4562), OpenCode TUI notifications under tmux (#29099), Copilot CLI tmux rendering lag (#3439), Claude Code Termux regression (#50270). Cross-platform terminal behavior remains a recurring pain.

## 4. Differentiation Analysis

- **Claude Code** focuses on code quality workflows (new `/code-review --fix` and `/simplify` integration) and extensibility via skill disallowed-tools frontmatter. Its payment upgrade bug (#55982) is the most commented issue today (69 comments).
- **OpenAI Codex** emphasizes user experience improvements: local conversation search, profile selector consolidation, and preserving draft text during slash commands. Its highest-engagement issue is phone verification (#20161, 169 comments).
- **Gemini CLI** targets deep code understanding: AST-aware reads, component-level evaluations, and subagent reliability. Its PR activity centers on shell parsing, session lifecycle, and MCP security (RCE fix merged). No release today signals a stabilization phase.
- **GitHub Copilot CLI** maintains enterprise focus with MCP registry fixes, extension lifecycle hooks, and auto-update rate-limit errors. Its release today (v1.0.55-1) is a small bugfix. Copy/paste regressions on Linux (Wayland) are the top reported pain.
- **Kimi Code CLI** prioritizes multi-model compatibility (DeepSeek V4 reasoning_content fix) and parallel execution (API key pool PR). Its community is small but actively contributing fixes for rate-limit bottlenecks.
- **OpenCode** has the highest PR throughput today (50). Key themes: streaming reliability (WebSocket transport, header timeout), session goals (`/goal` plugin), and sandboxing requests. OpenAI provider latency is the most discussed issue (#29079).
- **Qwen Code** is in an aggressive feature expansion for daemon mode (`qwen serve`): MCP bridge, Streamable HTTP transport, runtime server add/remove, telemetry tracing. OOM crashes are the dominant user complaint, with no platform-wide fix yet.

## 5. Community Activity Notes

- **Highest issue/PR volumes**: OpenCode (50 issues, 50 PRs) and Gemini CLI (50 issues, 27 PRs) lead in raw activity. Qwen Code has heavy PR merge activity around daemon mode.
- **New releases**: Claude Code and Codex shipped minor versions with targeted improvements. Copilot CLI released a small bugfix. Kimi, Gemini, and OpenCode had no releases today.
- **Maintainer response**: Claude Code maintainers are actively engaging on the payment upgrade bug (69 comments). Codex closed several issues but left others open. Gemini maintainers responded to the security RCE fix but have pending issues on Wayland and Windows. OpenCode maintainers merged several PRs for streaming and plugins. Qwen Code maintainers merged daemon-related PRs but have not yet addressed the OOM crisis with a fix.
- **Community frustration indicators**: Qwen Code OOM reports are repetitive (10+ duplicates) and closed without resolution. Codex phone verification issue has 169 comments and was closed without a clear solution. Claude Code Termux regression remains open with 45 👍.

## 6. Evidence-Backed Observations

1. **OOM and streaming reliability are the most acute cross-tool user pain points today.** Qwen Code has 10+ separate OOM crash reports all showing the same GC failure pattern; OpenCode's stream freeze (#29129) is the second most-upvoted issue in its queue. Both tools lack published fixes. No other tool reports similar memory problems at this severity.

2. **Authentication flows are a recurring failure mode across multiple tools.** Codex phone verification, Qwen Google OAuth 504, Gemini Hermes OAuth, and Claude Code remote control permission issues all block user onboarding or session continuity. These tend to be service-side problems that tool maintainers cannot always fix rapidly.

3. **MCP integration is a growing shared investment area.** Copilot CLI, Qwen Code, and Gemini CLI all have bugs, PRs, or features related to MCP tool handling today. Qwen Code is building an MCP bridge for external clients; Copilot fixes a URL construction bug; Gemini prevents tool wipe on timeouts and fixed an RCE bypass. This suggests the ecosystem is converging on MCP as a standard extensibility protocol but still facing stability and security gaps.

4. **Terminal/platform compatibility remains fragmented.** Reports span Wayland (Copilot, Gemini), tmux (Copilot, OpenCode), WSL (Copilot), Windows shell (Qwen), and Termux/Android (Claude). Each tool has a distinct set of platform-specific issues, with no unified cross-tool approach to terminal environment testing.

5. **Session and state management improvements are being actively added across tools.** Claude Code introduced skills disallowed-tools and code-review fix; Gemini PRs handle session lifecycle and subagent scheduler state; OpenCode adds a `/goal` plugin for persistent goals; Qwen Code daemon mode includes cross-client sync. This indicates a maturation of UX beyond simple chat interfaces toward structured, resumable sessions.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-05-27

## Today's Update Brief

A new release (v2.1.152) landed with a notable `/code-review --fix` workflow improvement and support for disallowed-tools in skills/slash commands. Community activity remains high: 50 issues updated in the last 24 hours, the topmost payment-upgrade bug now has 69 comments, and a persistent Termux/Android regression continues to draw attention (45 👍). Three new issues filed today highlight MCP account-level corruption, a Chrome extension connectivity problem, and a stale Monitor task list bug.

## Releases

**v2.1.152** ([link](https://github.com/anthropics/claude-code/releases/tag/v2.1.152))

- `/code-review --fix` now applies review findings directly to your working tree, surfacing reuse, simplification, and efficiency suggestions. `/simplify` now invokes `/code-review --fix`.
- Skills and slash commands can now set `disallowed-tools` in their frontmatter to remove specific tools from the model's available set.

## Hot Issues (10 selected)

1. **#55982 – Plan upgrade payment voided immediately**
   `[BUG]` Payment upgrades fail with `void_invoice` before confirm completes. **69 comments**, 24 👍. Still open.
   *Affects:* Pro→Max plan upgrades.
   [Link](https://github.com/anthropics/claude-code/issues/55982)

2. **#50270 – Native binary broken on Termux/Android (glibc required)**
   `[BUG]` Since v2.1.113 the CLI switched to a native glibc binary; Android (Termux) has no glibc and the JS fallback was removed. **45 👍**, 21 comments. Open since April.
   [Link](https://github.com/anthropics/claude-code/issues/50270)

3. **#37323 – `/btw` not available in VS Code extension**
   `[ENHANCEMENT]` The popular side-question command works in the terminal CLI but is missing from the VS Code extension. **67 👍**, 21 comments.
   [Link](https://github.com/anthropics/claude-code/issues/37323)

4. **#61028 – Cowork turn limit breaks browser automation**
   `[BUG]` Cowork sessions hit a “Reached maximum number of turns (100)” error, stopping long-running automation projects. **19 comments**.
   [Link](https://github.com/anthropics/claude-code/issues/61028)

5. **#29716 – WorktreeCreate/Remove hooks not called in Claude Desktop**
   `[BUG]` Hooks for worktree management don’t fire inside the desktop app. **21 👍**, 17 comments.
   [Link](https://github.com/anthropics/claude-code/issues/29716)

6. **#26954 – Bash output truncated; ctrl+o/ctrl+e doesn’t expand fully**
   `[BUG]` Long command output remains collapsed even after using expand shortcuts. **22 👍**, 12 comments.
   [Link](https://github.com/anthropics/claude-code/issues/26954)

7. **#45942 – Remote Control “Always allow” permission breaks tool calls**
   `[BUG]` Approving a tool call with “always allow” from Android app fails with internal error; “allow once” works. **10 comments**, 9 👍.
   [Link](https://github.com/anthropics/claude-code/issues/45942)

8. **#56448 – “47 skill descriptions dropped” false positive in 2.1.129+**
   `[BUG]` Warning appears on startup even though all skills function normally. Same config loads clean on 2.1.128. **9 comments**.
   [Link](https://github.com/anthropics/claude-code/issues/56448)

9. **#43575 – Cowork input field intermittently loses focus**
   `[BUG]` Voice input workaround restores it. **4 comments**, 3 👍.
   [Link](https://github.com/anthropics/claude-code/issues/43575)

10. **#62646 – Persistent MCP error: tools.77.FrontendRemoteMcpToolDefinition.name**
    `[BUG]` Account-level corruption causing repeated error. Filed today (2026-05-27). **2 comments**.
    [Link](https://github.com/anthropics/claude-code/issues/62646)

## Key PR Progress (all 9 items)

1. **#62622** (CLOSED) – Fix 10 bugs across scripts and workflows, including fork-friendly env var fallbacks and error handling.
   [Link](https://github.com/anthropics/claude-code/pull/62622)

2. **#62597** (OPEN) – Same fix set as #62622 but still open (duplicate?).
   [Link](https://github.com/anthropics/claude-code/pull/62597)

3. **#62592** (CLOSED) – Update security-guidance plugin README.
   [Link](https://github.com/anthropics/claude-code/pull/62592)

4. **#62586** (CLOSED) – Ship latest security-guidance plugin that turns Claude into an automatic security reviewer, catching vulnerabilities at code-generation time.
   [Link](https://github.com/anthropics/claude-code/pull/62586)

5. **#60427** (OPEN) – Docs: use standard GitHub capitalization in README.
   [Link](https://github.com/anthropics/claude-code/pull/60427)

6. **#60732** (OPEN) – Polish plugins README wording for clarity.
   [Link](https://github.com/anthropics/claude-code/pull/60732)

7. **#58673** (OPEN) – Placeholder PR (“s”), no substantive changes.
   [Link](https://github.com/anthropics/claude-code/pull/58673)

8. **#4943** (OPEN) – Add shell completions for bash, zsh, fish (static completion scripts). Dormant but still open.
   [Link](https://github.com/anthropics/claude-code/pull/4943)

9. **#62264** (OPEN) – Add `block-build-commands` hook example for hard execution guardrails (PreToolUse hook exits with code 2 to block build tools).
   [Link](https://github.com/anthropics/claude-code/pull/62264)

## Feature Request Clusters

- **`/btw` in VS Code** (#37323) — Recurring request for feature parity between terminal and extension.
- **Mid-session settings reload** (#62656) — Ability to reload skills/permissions/hooks without restarting the session.
- **Session-scoped diff view** (#62655) — A diff pane independent of git state, showing only changes made during the current session.
- **Plugin `userConfig` defaults** (#46477, CLOSED) — Allow plugin authors to specify default values for user-configurable fields.
- **Disable microphone activation sound** (#59970) — A simple setting toggle for the dictation chime.

## Developer Pain Points

- **Payment upgrade failures** continue to dominate issue activity, with two separate bug reports (#55982, #57122) accumulating 97 total comments. The core problem appears to be race conditions or edge cases in the payment intent workflow.
- **Android (Termux) support regression** (#50270) remains a high-impact unresolved issue — the binary switch to glibc-native effectively broke the entire Android user base with no JS fallback.
- **Permission/baseline mode instability** (#60724, #37029) affects users relying on `--dangerously-skip-permissions` or toggling permission modes, creating friction for automated workflows.
- **Bash output truncation** (#26954) is a long-standing UX annoyance — the expand shortcuts don’t work reliably, hampering debugging.
- **Cowork session limits** (#61028) and input focus loss (#43575) point to rough edges in the collaborative experience, especially for extended automation tasks.
- **MCP and hook boundary issues** persist: remote MCP OAuth consent handling (#49722), hook output size limits (#44086), and worktree/desktop hook gaps (#29716) indicate that extensibility mechanisms still have edge cases.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-27

## Today's Update Brief
Codex shipped **rust-v0.134.0** with local conversation history search and a unified `--profile` selector. The community is actively reporting authentication failures, regression in `/compact`, and high CPU usage. Maintainers are pushing fixes for SQLite corruption, Windows sandbox cancellation, and ChatGPT token refresh serialization.

## Releases
- **[rust-v0.134.0](https://github.com/openai/codex/releases/tag/rust-v0.134.0)**
  - **Search across local conversation history** – case‑insensitive content matching with result previews. (#23519, #23921)
  - **Profile selector consolidation** – `--profile` becomes the primary selector for CLI, TUI permissions, and sandbox flows; legacy profile configs are rejected through a migration guard.

## Hot Issues (10 selected)
1. **[#20161](https://github.com/openai/codex/issues/20161) — Phone number verification doesn’t work** (CLOSED)
   *Auth*: Logging in via SSO on a different device triggers a phone‑number prompt even when no phone is on the account. 169 comments, 104 👍 – the most active issue.
2. **[#13993](https://github.com/openai/codex/issues/13993) — Support standalone Windows installer** (OPEN)
   *Enhancement*: Many Windows users cannot use the Microsoft Store due to corporate policies or offline environments. 119 👍, 50 comments – high demand.
3. **[#21671](https://github.com/openai/codex/issues/21671) — 0.129.0: `/compact` fails with unknown service_tier parameter** (CLOSED)
   *Regression*: After upgrading from 0.128.0, `/compact` throws an OpenAI API parameter error, breaking context compression workflows.
4. **[#10500](https://github.com/openai/codex/issues/10500) — VS Code: Text prompts rejected after uploading SVG file** (OPEN)
   *Bug*: Uploading an SVG leads to “Invalid image in your last message”, blocking further chat. Affects VS Code extension users.
5. **[#24665](https://github.com/openai/codex/issues/24665) — Hermes Agent OAuth broken – “NoneType is not iterable”** (OPEN)
   *Auth*: Multi‑team OAuth failures (ChatGPT/Codex OAuth) showing `TypeError`. Not using API keys. 9 comments, recent.
6. **[#18553](https://github.com/openai/codex/issues/18553) — Desktop terminal font rendering still broken** (OPEN)
   *UI*: Terminal output renders with extreme letter spacing / pseudo‑italic. 24 👍 – a long‑standing visual annoyance.
7. **[#24510](https://github.com/openai/codex/issues/24510) — Desktop high CPU from unbounded thread metadata** (OPEN)
   *Performance*: Large numbers of active threads with heavy metadata cause sustained high CPU/GPU usage. 8 comments.
8. **[#24031](https://github.com/openai/codex/issues/24031) — When will GPT‑5.5 support 1M context?** (CLOSED)
   *Enhancement*: Users ask for the promised 1M‑token option after a previous issue (#19464) was abruptly closed. 13 👍.
9. **[#24086](https://github.com/openai/codex/issues/24086) – Locked Computer Use fails with cgWindowNotFound** (OPEN)
   *Bug*: Computer Use fails only when the Mac is locked (Mac mini M4 + Studio Display). Normal CU works while unlocked.
10. **[#20153](https://github.com/openai/codex/issues/20153) — Quotas draining like crazy: burnt 100% of 5h limit in 10 min** (OPEN)
    *Rate limits*: Business tier users report unexpectedly fast quota consumption. 4 comments, 4 👍.

## Key PR Progress (10 selected)
1. **[#23950](https://github.com/openai/codex/pull/23950) – Preserve draft text when completing slash commands**
   Keeps typed arguments after `/goal` or `/review` instead of discarding them. Improves slash‑command UX.
2. **[#21567](https://github.com/openai/codex/pull/21567) – Add non‑interactive install script mode**
   Introduces `CODEX_NON_INTERACTIVE` for unattended bootstrap/update flows on macOS, Linux, and Windows.
3. **[#24650](https://github.com/openai/codex/pull/24650) – Add CODEX_ENV_FILE hook persistence**
   Mirrors Claude’s `CLAUDE_ENV_FILE`: exports from `SessionStart` hooks persist across commands (PATH, virtualenv, conda).
4. **[#24673](https://github.com/openai/codex/pull/24673) – Start idle turns without reservations**
   Eliminates a partial‑active state for goal continuation, unifying the turn‑start path.
5. **[#24684](https://github.com/openai/codex/pull/24684) – Uprev Rust toolchain to 1.95.0**
   Bumps workspace from 1.93.0 across Cargo, Bazel, CI, and devcontainers.
6. **[#24667](https://github.com/openai/codex/pull/24667) – Instrument stalled tool‑listing handoff**
   Adds tracing to diagnose when Codex appears stuck in “Thinking” after tool output is recorded.
7. **[#24368](https://github.com/openai/codex/pull/24368) – Add compaction metadata to turn headers**
   Attaches `request_kind` values (foreground turn, compaction, etc.) and context‑window identifier for better diagnostics.
8. **[#24616](https://github.com/openai/codex/pull/24616) – Wrap SQLite migrations in a transaction**
   Prevents partial migrations by wrapping batches in `BEGIN IMMEDIATE`. Includes regression test.
9. **[#24670](https://github.com/openai/codex/pull/24670) – Ship fixed SQLite via SQLx 0.9**
   Patches a rare WAL‑reset corruption bug (affecting SQLite ≤3.51.2) by upgrading the bundled SQLite to a fixed version.
10. **[#19880](https://github.com/openai/codex/pull/19880) – Cancel Windows sandbox on network denial**
    Adds cancellation hook so Guardian/proxy network denials terminate sandbox execution without waiting for timeout. Includes Windows regression tests.

## Feature Request Clusters
- **Windows standalone installer** – #13993 continues to gather support; many users blocked by store restrictions.
- **GPT‑5.5 1M context window** – #24031 was closed abruptly, but users still want the promised 1M option.
- **TUI/CLI enhancements** – custom statusline widget API (#14043), image paste via Cmd‑V (#24322), easier copy‑pasting from CLI output (#24685).
- **VS Code extension polish** – adjustable line‑height in chat (#15716).
- **Automation schedule flexibility** – support for `BYHOUR` in RRULE (#24674).

## Developer Pain Points
- **Authentication & connectivity** – Phone verification blocking SSO (#20161), Hermes OAuth breaking (#24665), and remote control stalls (#23482, #23865) are top user frustrations.
- **Performance regressions** – `/compact` failure after upgrade (#21671), high CPU from thread metadata (#24510), and unexplained slowdowns (#24649).
- **UI/rendering bugs** – Terminal font spacing (#18553), sidebar closes on conversation switch (#24688), `~/Documents/Codex` folder created on every launch (#20880).
- **Rate limit surprises** – Quotas draining faster than expected (#20153).
- **Windows‑specific issues** – Elevated sandbox fails after update (#24098), Git diff readers causing write failures (#24681).
- **Data loss concerns** – Conversation history missing after desktop app update (#23979).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-27

## 1. Today's Update Brief

No new releases were published in the last 24 hours. Issue and PR activity remains high, with 50 open/updated issues and 27 open/updated pull requests tracked today. The community continues to focus on agent reliability, shell execution stability, and AST-aware codebase understanding, while maintainers are actively triaging a backlog of bugs related to subagent behavior and terminal compatibility.

## 2. Releases

*No new releases in the last 24 hours.*

---

## 3. Hot Issues

### 1. Robust component-level evaluations
**#24353** — [OPEN] — An EPIC tracking the expansion of behavioral eval tests from the initial concept in #15300. 76 tests have been generated across 6 supported Gemini models. The community has raised concerns about test consistency and bleed between runs.
🔗 *https://github.com/google-gemini/gemini-cli/issues/24353*

### 2. Assessing AST-aware file reads, search, and mapping
**#22745** — [OPEN] — An EPIC investigating whether AST-aware tooling (e.g., method-bound reads, structured codebase mapping) reduces token waste and turn count. Community sentiment is positive, with one 👍 and requests for concrete benchmarks.
🔗 *https://github.com/google-gemini/gemini-cli/issues/22745*

### 3. Subagent recovery after MAX_TURNS falsely reports GOAL success
**#22323** — [OPEN] — The `codebase_investigator` subagent reports `status: "success"` and `Termination Reason: "GOAL"` even when it hit the maximum turn limit before doing any analysis. This misleads users into thinking work was completed. Two 👍 indicate community frustration with this reliability gap.
🔗 *https://github.com/google-gemini/gemini-cli/issues/22323*

### 4. Gemini does not use custom skills and sub-agents enough
**#21968** — [OPEN] — Anecdotal report that the model avoids using custom skills and sub-agents autonomously, even when the task is closely related. Requires explicit user instruction to activate. No consensus yet on root cause—could be prompt design or tool selection logic.
🔗 *https://github.com/google-gemini/gemini-cli/issues/21968*

### 5. Shell command execution gets stuck with "Waiting input" after completion
**#25166** — [OPEN] — Simple CLI commands (that do not prompt for input) occasionally hang, showing "Awaiting user input" after the command finishes. Three 👍 suggest this is a widespread user-facing stability issue, especially problematic for headless/automation workflows.
🔗 *https://github.com/google-gemini/gemini-cli/issues/25166*

### 6. Browser subagent fails on Wayland
**#21983** — [OPEN] — The browser agent fails on Wayland-based Linux systems, terminating with `Termination Reason: GOAL` but producing no useful output. Users on Wayland are effectively blocked from using the browser subagent feature.
🔗 *https://github.com/google-gemini/gemini-cli/issues/21983*

### 7. Align Gemini CLI Telemetry with Vertex AI Cloud Monitoring
**#24637** — [CLOSED] — Caching stats surfaced locally via `/stats` are not reflected in Cloud Monitoring dashboards. Users on Vertex AI auth cannot see caching telemetry. The issue was closed after maintainers requested additional information but did not receive a follow-up.
🔗 *https://github.com/google-gemini/gemini-cli/issues/24637*

### 8. `-p/--print` mode outputs nothing on Windows
**#27466** — [OPEN] — A fresh bug report (filed yesterday) indicating that non-interactive print mode produces no stdout on Windows 11, even when the API call succeeds. This affects automation and CI/CD pipelines on Windows. No maintainer response yet.
🔗 *https://github.com/google-gemini/gemini-cli/issues/27466*

### 9. Add deterministic redaction and reduce Auto Memory logging
**#26525** — [OPEN] — Auto Memory sends transcript content to the extraction model before redacting secrets, and the service can log skill definitions. The community is requesting deterministic redaction *before* content enters model context. Maintainers have flagged this as a security concern (area/security).
🔗 *https://github.com/google-gemini/gemini-cli/issues/26525*

### 10. Surface or quarantine invalid Auto Memory inbox patches
**#26523** — [OPEN] — The memory inbox silently skips invalid patches (malformed, no hunks, escaped root), but the background extractor's pending summary still reads every `.patch` file, creating an infinite retry loop for invalid patches. Maintainers are investigating improved validation.
🔗 *https://github.com/google-gemini/gemini-cli/issues/26523*

---

## 4. Key PR Progress

### 1. Fix multi-line escaped quotes in `stripShellWrapper`
**#27467** — [OPEN] — Replaces manual parsing with `shell-quote` to correctly handle wrapped commands containing escaped quotes (e.g., `bash -c "hg commit -m \"title\n\nbody\""`). This is a targeted fix for a shell parsing edge case that could cause command failures.
🔗 *https://github.com/google-gemini/gemini-cli/pull/27467*

### 2. Restore non-interactive stdin raw mode on exit
**#27292** — [OPEN] — Ensures raw mode is restored during Ctrl+C cancellation in headless mode, preventing terminal corruption after a force-exit. Important for users running Gemini CLI in automated scripts.
🔗 *https://github.com/google-gemini/gemini-cli/pull/27292*

### 3. Harmonize empty session lifecycle
**#27287** — [OPEN] — Fixes bugs where empty (metadata-only) sessions were falsely advertised for resumption or prematurely deleted. Ensures consistent session persistence behavior across the CLI.
🔗 *https://github.com/google-gemini/gemini-cli/pull/27287*

### 4. Implement Open Plugins hooks support
**#23697** — [OPEN, Stale] — Adds support for intercepting core events (tool calls, prompts, model interactions) via the Open Plugin protocol. A significant extensibility feature, though the PR is marked stale and awaiting issue creation.
🔗 *https://github.com/google-gemini/gemini-cli/pull/23697*

### 5. Pass all Executing subagent tool calls in `useToolScheduler`
**#22590** — [OPEN] — Fixes a filter that was only passing `AwaitingApproval` or previously-seen tool calls, causing subagent tool calls that go directly to `Executing` to be missed in the scheduler state. Improves reliability of multi-agent workflows.
🔗 *https://github.com/google-gemini/gemini-cli/pull/22590*

### 6. Prevent eager tool wipe on MCP network timeout
**#27383** — [OPEN] — Implements atomic update for MCP tools so that if `discoverTools` fails due to a transient network drop, existing tools are retained rather than wiped. Fixes the "tool not found" error after network blips.
🔗 *https://github.com/google-gemini/gemini-cli/pull/27383*

### 7. Prevent blacklist bypass in MCP list
**#27377** — [CLOSED] — Patched an RCE vulnerability where `mcp.excluded` blacklists and `mcp.allowed` allowlists could be bypassed, allowing malicious MCP servers to start local processes. Closed after merge.
🔗 *https://github.com/google-gemini/gemini-cli/pull/27377*

### 8. Re-seed metadata when chat session file is recreated mid-session
**#27453** — [OPEN] — `ChatRecordingService.appendRecord()` only checked that the conversation file pointer was non-null, not that the file still existed on disk. Fixes a crash when the session file is deleted by external cleanup mid-session.
🔗 *https://github.com/google-gemini/gemini-cli/pull/27453*

### 9. Suppress PTY resize EBADF errors
**#27461** — [CLOSED] — Matches upstream node-pty fix to suppress crashes when resizing a PTY that is exiting. Exacerbated by recent UI layout changes that increased resize frequency. Merged.
🔗 *https://github.com/google-gemini/gemini-cli/pull/27461*

### 10. Support nested directories in Plan Mode
**#27464** — [OPEN] — Enables organizing implementation plans into subdirectories (e.g., `plans/tracks/feature-x/spec.md`). Tools like `write_file`, `edit`, and `exit_plan_mode` will now correctly handle nested plan structures.
🔗 *https://github.com/google-gemini/gemini-cli/pull/27464*

---

## 5. Feature Request Clusters

### Codebase Understanding & AST Integration
Multiple issues (#22745, #22746, #22747) request AST-aware tooling for file reads, searches, and codebase mapping. The goal is to reduce token waste from misaligned reads and improve the model's structural awareness of code. Community members have proposed specific CLI tools like `tilth`, `glyph`, and `ast-grep` as starting points.

### Evaluation & Testing Infrastructure
Several threads (#24353, #23166, #23313) focus on stabilizing internal evaluation tests. Requests include making tests deterministic, reducing "bleed" between runs, and ensuring a steering eval test always passes. This reflects a broader effort to make project evaluations reliable enough for CI gating.

### Agent Self-Knowledge & Configuration
Issue #21432 requests that the Gemini CLI understand its own CLI flags, hotkeys, and capabilities well enough to act as its own expert guide. This is tied to requests for better agent awareness of its own mechanics, including accurate flag documentation and self-execution hints.

### Memory & Session Management
Recent issues from @SandyTao520 (#26516, #26522, #26523, #26935) cluster around Auto Memory improvements: stop retrying low-signal sessions, quarantine invalid patch files, add deterministic redaction, and reduce session file bloat. These stability and safety concerns are being tracked as a workstream.

---

## 6. Developer Pain Points

- **Terminal and platform compatibility issues** recur across multiple bugs: Wayland browser agent failure (#21983), Windows print mode output (#27466), terminal resize flicker (#21924), and external editor corruption (#24935). Windows and Linux (Wayland) users face consistent friction.
- **Shell execution instability** is a high-frequency complaint: commands hang after completion (#25166), unnecessary tmp scripts litter the workspace (#23571), and PTY file descriptors go stale on resume (#27371). These affect both interactive and headless workflows.
- **Agent ignores configuration** — users report that settings.json overrides for browser agent maxTurns (#22267) and subagent permission controls (#22093) are silently ignored. This undermines user trust in configuration management.
- **MCP tool management fragility** — network timeouts cause tools to disappear (#27383), and a security bypass allowed blacklists to be circumvented (#27377). Developers relying on MCP servers for extended tool sets are particularly affected.
- **Session and memory management overhead** — append-only JSONL files grow unbounded (#26935), invalid patches are silently skipped but retried (#26523), and the extraction agent retries low-signal sessions indefinitely (#26522). These create maintenance burden for power users.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-27

## Today’s Update Brief

The team shipped **v1.0.55-1** with improvements to selection contrast and `/env` extension display, plus fixes for terminal bell and `/resume` picker. Community activity remains high — 42 issues updated in the last 24 hours, several centered on copy/paste regressions on Linux and Windows, and MCP registry URL construction bugs. No pull requests were opened or updated today.

## Releases

**[v1.0.55-1](https://github.com/github/copilot-cli/releases/tag/v1.0.55-1)** – released 2026-05-27

- **Improved**
  - Increased selection background contrast across all color themes for better visibility.
  - `/env` now shows loaded extensions with their status and source.
- **Fixed**
  - Terminal bell no longer sounds on turn completion unless explicitly enabled via config.
  - `/resume` picker no longer shows stale entries (`"bla"`).

## Hot Issues (10 selected from top 30 by comment count)

1. **[[Bug] Can't running copilot cli 1.0.49 on wsl after upgrade copilot](https://github.com/github/copilot-cli/issues/3385)**
   *area: platform-windows, installation* – User reports CLI 1.0.49 hangs/stuck on WSL2. 13 comments, 9 👍. Workflow: using CLI via WSL. Impact: blocker for WSL users after upgrade.

2. **[Usability issue - scroll in terminal (Terminator)](https://github.com/github/copilot-cli/issues/2205)**
   *area: terminal-rendering* – Mouse scroll history broken after recent version; scroll navigates through past inputs instead of agent output. 10 comments, 12 👍. Longstanding pain point for Terminator users.

3. **[[Bug] 1.0.49 regression: TUI rendering lag inside tmux on mintty/Cygwin](https://github.com/github/copilot-cli/issues/3439)**
   *area: platform-windows, terminal-rendering* – Severe TUI lag, spinner stutter, “stuck until keypress” when running inside tmux on Cygwin. 7 comments. Regression confirmed against 1.0.43/1.0.48.

4. **[/mcp search constructs wrong URL for custom MCP registries — /v0.1/ segment is missing](https://github.com/github/copilot-cli/issues/3436)**
   *area: enterprise, mcp* – `/mcp search` (experimental, 1.0.49) sends requests to `{registryUrl}/servers` instead of `{registryUrl}/v0.1/servers`, causing 404 for self-hosted registries. 5 comments, 1 👍. Workflow: enterprise MCP registry usage.

5. **[v1.0.51 Remote sessions are not enabled. Contact your organization administrator to enable remote sessions.](https://github.com/github/copilot-cli/issues/3442)**
   *area: sessions, enterprise* – After upgrade to 1.0.51, `/remote on` fails with policy warning even when remote sessions are enabled. 5 comments, 10 👍. CLOSED (likely resolved in newer release).

6. **[Copy stopped working on Ubuntu](https://github.com/github/copilot-cli/issues/3483)**
   *area: platform-linux, input-keyboard* – Mouse right-click and Ctrl+C fail to copy text; clipboard is not populated. 3 comments, 5 👍. CLOSED (fix expected in next release). Similar reports for GNOME Wayland ([#3414](https://github.com/github/copilot-cli/issues/3414), [#3395](https://github.com/github/copilot-cli/issues/3395)).

7. **[Allow users to configure submit key (e.g., Ctrl+Enter) to prevent accidental submission with IME input](https://github.com/github/copilot-cli/issues/1972)**
   *area: input-keyboard, configuration* – CJK IME users accidentally submit prompts when Enter is used for conversion confirmation. 3 comments, 46 👍. Highly upvoted feature request.

8. **[Failure to write to file](https://github.com/github/copilot-cli/issues/3049)**
   *area: permissions, tools* – Creating a plan without code changes fails with write error. 3 comments. Workflow: planning mode.

9. **[/research can't write its research report](https://github.com/github/copilot-cli/issues/3123)**
   *area: agents, tools* – `/research` fails because “create” tool is not available. 3 comments, 2 👍. Workflow: agent research tasks.

10. **[statusLine.command is not executed or rendered when footer.showCustom=true](https://github.com/github/copilot-cli/issues/3192)**
    *area: configuration, terminal-rendering* – Custom status line command not executed when footer custom display is enabled. 2 comments. Affects users who customize the TUI footer.

## Key PR Progress

No pull requests were created or updated in the last 24 hours.

## Feature Request Clusters

- **Clipboard customization & keyboard configuration** – Multiple requests to make copy/paste behavior configurable (e.g., [#1972](https://github.com/github/copilot-cli/issues/1972) submit key, [#2507](https://github.com/github/copilot-cli/issues/2507) cursor style). Users want IME-safe submission and control over keybindings.
- **Session persistence & audit logging** – Requests for persistent cross-session history ([#1791](https://github.com/github/copilot-cli/issues/1791)), ability to query session metadata without starting the agent.
- **Agent profile extensibility** – Proposal to let custom agent profiles declare `skills:` frontmatter to preload skill bodies into context ([#3532](https://github.com/github/copilot-cli/issues/3532)).
- **Programmatic session control** – Demand for CLI flags or SDK methods to set context window, reasoning effort, and start subagents non-interactively ([#3525](https://github.com/github/copilot-cli/issues/3525)).

## Developer Pain Points

- **Copy/paste regressions on Linux (Wayland) and WSL** – Multiple reports (e.g., [#3483](https://github.com/github/copilot-cli/issues/3483), [#3534](https://github.com/github/copilot-cli/issues/3534), [#3467](https://github.com/github/copilot-cli/issues/3467)) indicate that clipboard operations broke in v1.0.49–v1.0.55 on GNOME Wayland and WSL2 ARM64. Users are blocked from basic copy operations.
- **MCP registry URL construction bug** – Enterprise users relying on custom MCP registries cannot use `/mcp search` due to missing `/v0.1/` path segment ([#3436](https://github.com/github/copilot-cli/issues/3436)).
- **TUI rendering lag on tmux/Cygwin** – Regression introduced in v1.0.49 makes the CLI unusable in tmux environments on Windows ([#3439](https://github.com/github/copilot-cli/issues/3439)).
- **Extension lifecycle hooks receive empty `workingDirectory`** – Plugins relying on current working directory for hooks broke in v1.0.51 ([#3508](https://github.com/github/copilot-cli/issues/3508)).
- **Auto-update causes unauthenticated rate limit errors** – In shared-NAT environments, the upgrade check makes API requests without auth, hitting rate limits ([#3459](https://github.com/github/copilot-cli/issues/3459)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-27

## Today's Update Brief
No new releases were cut today, but activity remains steady with 7 issues and 6 pull requests updated in the last 24 hours. The community is actively contributing to parallel execution improvements and multi-model compatibility, while maintainers merged a 1.45.0 release PR and a significant tool call deduplication enhancement. A fresh API key pool feature PR directly addresses a recently reported rate-limit pain point.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **#[2208](https://github.com/MoonshotAI/kimi-cli/issues/2208) — OpenAI-compatible API for Cursor integration**
   *Opened 2026-05-09 | Updated 2026-05-26*
   A user requests that Kimi Code expose an OpenAI-compatible API endpoint so they can use the K2.6 model directly in Cursor. No maintainer response yet. This is a recurring request from users seeking IDE integration flexibility.

2. **#[2317](https://github.com/MoonshotAI/kimi-cli/issues/2317) — [VSCode Extension] Plan mode file paths not clickable**
   *Opened 2026-05-17 | Updated 2026-05-26*
   In the chat webview of the VSCode extension, file paths rendered in Plan mode are plain text, not clickable links. This affects workflow efficiency for users who frequently navigate referenced files.

3. **#[2141](https://github.com/MoonshotAI/kimi-cli/issues/2141) — DeepSeek V4 reasoning_content must be passed back on all assistant messages**
   *Opened 2026-05-01 | Updated 2026-05-26 | 👍: 1*
   Multi-turn conversations with tool calls and DeepSeek V4 Pro fail with a 400 error because `reasoning_content` is not preserved on every assistant message. A PR has been submitted to fix this `openai_legacy` compatibility layer issue.

4. **#[1774](https://github.com/MoonshotAI/kimi-cli/issues/1774) — @mention file path error**
   *CLOSED | Opened 2026-04-07 | Updated 2026-05-27*
   An older bug where `@mention` references to files under `~` (home directory) resolved incorrectly. Closed today, likely resolved in a recent release. 3 comments.

5. **#[2370](https://github.com/MoonshotAI/kimi-cli/issues/2370) — Add Steer (⚡) button to Web UI queue panel**
   *Opened 2026-05-26*
   When multiple messages are queued in the web UI, there is no way to prioritize a specific message. The user requests a "steer" button to interrupt the current AI run and jump a queued message to the front. Zero comments so far.

6. **#[2368](https://github.com/MoonshotAI/kimi-cli/issues/2368) — Foreground subagents exhaust single API key rate limit**
   *Opened 2026-05-26*
   Running 3–4 concurrent `coder` or `explore` subagents causes all to share the same API key, leading to 429 rate-limit errors and execution hangs. The user requests separate keys or key pooling for parallel subagents.

7. **#[2367](https://github.com/MoonshotAI/kimi-cli/issues/2367) — LLM provider error 400**
   *Opened 2026-05-26 | 👍: 1*
   After using `ReadMediaFile` on `public/favicon.ico`, the LLM provider returns a 400 error. No model specified. Likely a file handling or provider compatibility issue.

## Key PR Progress

1. **#[2369](https://github.com/MoonshotAI/kimi-cli/pull/2369) — [OPEN] API key pool for parallel subagent execution**
   *Created 2026-05-26 | Updated 2026-05-27*
   Introduces `APIKeyPool`, a round-robin key allocator that distributes requests across multiple API keys, directly solving issue #2368. Early-stage PR with targeted scope.

2. **#[2373](https://github.com/MoonshotAI/kimi-cli/pull/2373) — [CLOSED] Bump kimi-cli to 1.45.0**
   *Merged 2026-05-26*
   Version bump to 1.45.0 with release notes moved to the new version section. Validation passed. Likely deployed shortly.

3. **#[2372](https://github.com/MoonshotAI/kimi-cli/pull/2372) — [CLOSED] Tool call dedup with sparse reminders and canonical args**
   *Merged 2026-05-26*
   Improves deduplication with smarter repeat detection and sparse reminders. Also makes `/clear` a true alias for `/new` and updates the welcome tip. Addresses a long-standing UX friction point.

4. **#[2260](https://github.com/MoonshotAI/kimi-cli/pull/2260) — [CLOSED] Add kill_ring_system_clipboard config option**
   *Merged 2026-05-26*
   Adds a configuration toggle (default: `true`) to control whether kill ring operations interact with the system clipboard. Small, user-configurable UX improvement.

5. **#[2342](https://github.com/MoonshotAI/kimi-cli/pull/2342) — [CLOSED] Fix misleading "Quota exceeded" prefix on all 403 errors**
   *Merged 2026-05-26*
   Previously every 403 error was prefixed with "Quota exceeded", even for non-quota issues like auth failures. This fix ensures accurate error messaging.

6. **#[1852](https://github.com/MoonshotAI/kimi-cli/pull/1852) — [CLOSED] Log hook task exceptions instead of silent discard**
   *Merged 2026-05-26*
   Replaces `lambda t: t.exception() if not t.cancelled() else None` patterns with proper `logger.error` logging across 4 files (PreToolUse, PostToolUse, PreLLM, PostCompact, SubagentStop, wire hooks). Improves debuggability.

## Feature Request Clusters

- **OpenAI-Compatible API Endpoint** (#2208): Multiple users want to use Kimi models via OpenAI-compatible base URLs in third-party IDEs like Cursor. No maintainer response yet; this feature would likely require a new API layer.

- **Parallel Execution & Rate Limit Management** (#2368, #2369): A newly reported pain point about shared API keys causing 429 errors during parallel subagent runs. The community responded with a PR within hours, suggesting strong interest in scalable concurrent execution.

- **Web UI UX Enhancements** (#2370): Users want message queue prioritization with a "steer" button, allowing interruption of ongoing AI runs to handle urgent follow-ups.

- **Error Handling & Compatibility** (#2141, #2367): Issues with third-party providers (DeepSeek, file-based LLM errors) show users are actively trying different model backends and encountering edge cases in the legacy compatibility layer.

## Developer Pain Points

- **API compatibility lock-in** (#2208): Users who prefer working in Cursor or other OpenAI-compatible tools cannot easily use Kimi models, forcing workflow fragmentation.

- **Parallel execution bottlenecks** (#2368): Power users running multiple subagents hit hard rate limits because all subagents share one API key. A fast-follow PR (#2369) suggests this is a high-impact issue.

- **Multi-model integration friction** (#2141): DeepSeek V4 Pro requires `reasoning_content` on every assistant message, but the legacy compatibility layer drops it after tool calls. Users must wait for fixes to switch between models seamlessly.

- **UI interaction gaps** (#2370, #2317): Non-clickable file paths in the VSCode extension and lack of message queue control in web UI degrade efficiency for daily workflows.

- **Error message clarity** (#2342): Previously misleading "Quota exceeded" messages on all 403 errors caused confusion; now fixed, but users are still recovering from the mental model damage.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-27

## Today's Update Brief

A high-activity day with 50 issues and 50 PRs updated in the last 24 hours, though no new releases were published. Community attention is concentrated on OpenAI provider performance regressions, streaming reliability, and a growing demand for session goal management and sandboxing. Several contributors submitted targeted fixes for streaming stalls, desktop crashes, and client-specific compatibility issues.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#29079 — GPT Models takes too long to respond](https://github.com/anomalyco/opencode/issues/29079)**
   *Affected workflow:* Any GPT-based interaction using the xhigh variant. Response times vary wildly from seconds to several minutes on trivial commands (e.g., `update graphify`).
   *Impact:* Blocks productive use of GPT models in the IDE/TUI.
   *Community:* 56 comments, 40 👍 — high frustration, multiple users reporting similar variability.

2. **[#29129 — OpenAI stream intermittently freezes in working state with high CPU and idle HTTPS socket](https://github.com/anomalyco/opencode/issues/29129)** *(CLOSED)*
   *Affected workflow:* Streaming responses from OpenAI. The UI shows "working" but no output appears; process burns CPU until manual restart.
   *Impact:* Hard to reproduce but severely disruptive when hit.
   *Community:* 47 comments, 45 👍 — closed likely with a fix merged via PR #29446.

3. **[#15585 — Free usage exceed error on free models](https://github.com/anomalyco/opencode/issues/15585)** *(CLOSED)*
   *Affected workflow:* Using any of the three bundled free models (e.g., Big Pickle) after long sessions.
   *Impact:* Confusing for new users; no documentation of free-tier limits.
   *Community:* 43 comments — user reported six hours of usage in two sessions before hitting the limit.

4. **[#2242 — Is there a way to sandbox the agent?](https://github.com/anomalyco/opencode/issues/2242)**
   *Affected workflow:* Terminal commands executed by the agent can access/edit files outside the project directory.
   *Impact:* Security / safety concern for multi-project setups.
   *Community:* 37 comments, 47 👍 — recurring demand for sandboxing analogous to `seatbelt` on macOS.

5. **[#27167 — [FEATURE]: Add native session goals with /goal](https://github.com/anomalyco/opencode/issues/27167)**
   *Affected workflow:* Long sessions lack a persistent, shareable goal definition visible across turns.
   *Impact:* Reduces coherence in multi-step tasks.
   *Community:* 26 comments, 36 👍 — strong support; a related PR (#28610) is already open.

6. **[#28846 — [FEATURE]: Adjust Go usage limits after DeepSeek V4 Pro permanent 75% price reduction](https://github.com/anomalyco/opencode/issues/28846)**
   *Affected workflow:* OpenCode Go subscription usage limits not updated to reflect new DeepSeek pricing.
   *Impact:* Users on Go plans cannot take full advantage of the price cut.
   *Community:* 19 comments, 32 👍 — straightforward economic request.

7. **[#4279 — Failure to call a tool due to an extra space in the tool name](https://github.com/anomalyco/opencode/issues/4279)**
   *Affected workflow:* Models (e.g., Kimi K2 Thinking) call tools with leading spaces: `" bash"` instead of `"bash"`.
   *Impact:* Falls into infinite retry loops, consuming quota.
   *Community:* 11 comments — long-standing issue (since Nov 2025) with no resolution.

8. **[#29462 — Skills tool enumerates all discovered skills into system prompt with no upper bound](https://github.com/anomalyco/opencode/issues/29462)**
   *Affected workflow:* Large skill libraries (e.g., 100k skills) bloat the system prompt on every turn.
   *Impact:* Wastes tokens and may degrade model focus.
   *Community:* 5 comments — reported today, moderate concern for power users.

9. **[#28362 — task() subagents unexpectedly require workspace billing even with fully external model providers](https://github.com/anomalyco/opencode/issues/28362)**
   *Affected workflow:* `task()` delegated subagents fail when using purely local/third-party model providers.
   *Impact:* Blocks use of subagents in offline or self-hosted setups.
   *Community:* 4 comments — user expectation mismatch with current architecture.

10. **[#29099 — TUI system notifications do not fire under zellij/tmux](https://github.com/anomalyco/opencode/issues/29099)**
    *Affected workflow:* Users inside terminal multiplexers miss desktop notifications (e.g., on completion/long tasks).
    *Impact:* Reduced workflow awareness.
    *Community:* 4 comments — specific to multiplexer environments.

## Key PR Progress

1. **[#28610 — feat: add /goal plugin for autonomous task completion](https://github.com/anomalyco/opencode/pull/28610)** *(OPEN)*
   Introduces a built-in `/goal` plugin with `create_goal`, `update_goal`, `get_goal` tools. Zero core schema changes; state in `.opencode/goals.json`. Addresses growing community demand (#27167).

2. **[#27802 — feat(opencode): fff search tools](https://github.com/anomalyco/opencode/pull/27802)** *(OPEN)*
   Implements fff (fuzzy-find) pickers for file search, content search, and directory search. Expect improvements to agent efficiency in large codebases.

3. **[#29180 — fix(tui): handle non-git project paths when opening editor](https://github.com/anomalyco/opencode/pull/29180)** *(OPEN)*
   Resolves #16071: cwd resolution now falls back gracefully when the project isn't a git repository.

4. **[#28937 — fix(app): start MCP servers only for open directories](https://github.com/anomalyco/opencode/pull/28937)** *(OPEN, beta)*
   Desktop app now lazily starts MCP servers only for actively open directories; closing the last tab stops reads. Reduces background resource usage.

5. **[#29484 — feat: add headerTimeout cfg option, default on only for openai w/ default of 10s](https://github.com/anomalyco/opencode/pull/29484)** *(CLOSED)*
   Directly addresses the #29079 slow-responses issue for OpenAI. Adds a configurable header timeout, defaulting to 10s for OpenAI provider only.

6. **[#29493 — feat(plugin): add dispose hook](https://github.com/anomalyco/opencode/pull/29493)** *(CLOSED)*
   Adds an optional `dispose()` lifecycle hook to plugins, called from the scoped plugin service finalizer. Enables clean teardown for stateful plugins.

7. **[#29492 — fix(acp): flush updated text chunks](https://github.com/anomalyco/opencode/pull/29492)** *(OPEN)*
   Fixes #29488: ACP streaming now forwards `message.part.updated` text, not just deltas. Resolves DeepSeek V4 truncated responses in JetBrains.

8. **[#29477 — openai websocket support](https://github.com/anomalyco/opencode/pull/29477)** *(OPEN)*
   Another attempt to mitigate #29079 latency issues by adding WebSocket transport for the OpenAI provider.

9. **[#29193 — feat(skill): add `hidden` frontmatter field to skills](https://github.com/anomalyco/opencode/pull/29193)** *(OPEN)*
   Mirrors `AgentConfig.hidden` for skills. Allows users to hide internal/debug skills from the agent's available tools list.

10. **[#29446 — fix(opencode): bound codex stream stalls](https://github.com/anomalyco/opencode/pull/29446)** *(OPEN)*
    Fixes #29129: adds timeout handling for ChatGPT/Codex OAuth streams that stall before producing a response. Prevents permanent hanging with high CPU.

## Feature Request Clusters

- **Session & Navigation Features**
  Multiple requests for persistent session context: `/goal` command (#27167) for explicit multi-turn goals, `/tree` command (#22067, 22 👍) for visual session tree navigation after forking, and better session lifecycle management.

- **Sandboxing & Security**
  Consistent calls for agent sandboxing (#2242, 47 👍), including terminal command restrictions to the project directory and toggleable editor context auto-attachment for multi-window isolation (#24270, 6 👍).

- **Output & Display Configuration**
  Users request configurable display of reasoning blocks (always expanded) (#29456), seconds-precision timestamps (#20406), and removal of the silent 32k `maxOutputTokens` cap (#29363).

- **Provider & Billing Requests**
  Requests to adjust Go subscription limits after DeepSeek V4 Pro price cut (#28846), support for non-workspace-billed subagents (#28362), and model-specific config overrides.

## Developer Pain Points

- **Performance & Reliability** — The top-voted issues concern OpenAI provider latency (#29079: 40 👍) and streaming freezes (#29129: 45 👍). Multiple reports of requests hanging indefinitely without triggering timeouts or fallback mechanisms (#29470, #29054). The community is actively testing WebSocket transport and header-timeout configs as mitigations.

- **Tool Calling Bugs** — Long-standing issue with extra spaces in tool names (#4279, since Nov 2025) causing infinite retry loops. Empty subagent results also break the tool fallback system (#24447, #29054). These erode user trust in agent reliability.

- **Configuration & Setup Friction** — The silent 32k-token output cap (#29363) forces users to discover an undocumented env var as workaround. Workspace billing requirements for external providers (#28362) create unexpected blockers. Client-server clock skew causing infinite continuation loops (#28618) adds complexity for distributed setups.

- **Terminal Multiplexer & Platform Gaps** — Lack of desktop notifications under tmux/zellij (#29099) and broken shifted keys in WezTerm with Kitty protocol (#29196) show ongoing polish gaps in TUI environment support.

- **Provider-Specific Inconsistencies** — DeepSeek V4 responses truncate in JetBrains ACP (#29488), Xiaomi Token Plan includes nonexistent models (#27695), and the free usage limit is opaque (#15585). These erode the "one config works everywhere" promise.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-27

## 1. Today's Update Brief

Activity remains high following the v0.16.1-preview.0 release, with heavy momentum on the **daemon mode (`qwen serve`) feature track**. A significant batch of daemon-related PRs landed in the last 24 hours, including MCP bridge support, ACP Streamable HTTP transport, and telemetry tracing. Memory-related crashes remain the #1 user-reported pain point (10+ OOM reports updated in the last 24h), though no platform-wide memory fix has been released yet.

## 2. Releases

Two releases in the last 24 hours, plus two SDK preview releases:

- **[v0.16.1-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.16.1-preview.0)**: Bug-fix pre-release. Contains a single fix that cleans stale outputs before TypeScript project builds to prevent error TS5055 (duplicate identifier errors in incremental builds). Submitted by @doudouOUC.
- **[v0.16.1-nightly.20260527.641a1a739](https://github.com/QwenLM/qwen-code/releases/tag/v0.16.1-nightly.20260527.641a1a739)**: Nightly build with the same TS5055 fix. Based on commit `641a1a739`.
- **[sdk-typescript-v0.1.8-preview.1](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.8-preview.1)** and **[v0.1.8-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.8-preview.0)**: SDK releases bundling CLI version 0.16.1. Release notes appear duplicated/truncated.

## 3. Hot Issues

Selected 10 of the most significant issues (by comment count, maintainer engagement, or severity):

1. **[#4175 — proposal(serve): Mode B feature-priority roadmap toward v0.16 production-ready](https://github.com/QwenLM/qwen-code/issues/4175)** (40 comments, OPEN)
   *Author: @doudouOUC*
   **Workflow affected**: Daemon mode (`qwen serve`) development roadmap.
   **What's happening**: The core design document for the daemon mode production-readiness. Stage 1 (HTTP/SSE routes) and workspace refactor are merged; this issue tracks remaining work for v0.16. High community engagement indicating strong interest in server-mode capabilities.

2. **[#3803 — Daemon mode (qwen serve): proposal & open decisions](https://github.com/QwenLM/qwen-code/issues/3803)** (25 comments, OPEN)
   *Author: @wenshao*
   **Workflow affected**: Core architecture for daemon mode.
   **What's happening**: A 6-chapter design series proposing the complete daemon implementation. Has 1 👍 — low upvote count but high comment activity suggests deep design discussion among a small group of core contributors.

3. **[#4116 — problem critical error](https://github.com/QwenLM/qwen-code/issues/4116)** (14 comments, CLOSED)
   *Author: @maxinteresa-ops*
   **Workflow affected**: General stability.
   **What's happening**: Critical error during session operation, likely non-English locale (Russian character shown). Closed without resolution visible in the snippet.

4. **[#4149 — FATAL ERROR: Ineffective mark-compacts near heap limit — JavaScript heap out of memory](https://github.com/QwenLM/qwen-code/issues/4149)** (12 comments, CLOSED)
   *Author: @Aleks-0*
   **Workflow affected**: Long-running sessions with large context.
   **What's happening**: V8 heap reaches 4GB limit, showing mark-compact GC cycles failing to reclaim memory. This is one of 10+ OOM reports all showing the same GC pattern. Community clearly frustrated — multiple "FATAL ERROR" reports across users with different configurations.

5. **[#4514 — tracking(serve): daemon capability gaps & prioritized backlog](https://github.com/QwenLM/qwen-code/issues/4514)** (10 comments, OPEN)
   *Author: @doudouOUC*
   **Workflow affected**: Daemon HTTP/SSE feature completeness.
   **What's happening**: Systematic gap analysis of `qwen serve` surface after accounting for slash-command passthrough. Remote clients can invoke ACP commands, but other capabilities need direct HTTP endpoints.

6. **[#4276 — oom-crash](https://github.com/QwenLM/qwen-code/issues/4276)** (9 comments, CLOSED)
   *Author: @htstcsn*
   **Workflow affected**: Memory management.
   **What's happening**: Another OOM crash with 4GB heap limit. Includes screenshot of the crash UI. Closed — likely a duplicate of #4149 or similar.

7. **[#4351 — Out of memory when working with Qwen Code in a session with a local Qwen 3.6 model](https://github.com/QwenLM/qwen-code/issues/4351)** (7 comments, CLOSED)
   *Author: @sergehuber*
   **Workflow affected**: Local model usage (llama.cpp + Qwen 3.6).
   **What's happening**: OOM crash even with a local model on Linux. User resumed session and hit OOM again immediately. 1 👍 — note: the user specifically mentions using the local model, suggesting the problem isn't API-based context limits but V8 heap in the client.

8. **[#4361 — Qwen ignore global hooks](https://github.com/QwenLM/qwen-code/issues/4361)** (3 comments, OPEN)
   *Author: @MKKurbandibirov*
   **Workflow affected**: Custom hooks/automation.
   **What's happening**: User created `.sh` files in `~/.qwen/hooks/` but hooks don't execute. Status is `need-information` — maintainers are requesting more details.

9. **[#4317 — Error polling for token: Device token poll failed: 504 Gateway Time-out](https://github.com/QwenLM/qwen-code/issues/4317)** (2 comments, OPEN)
   *Author: @Petomai*
   **Workflow affected**: Google OAuth authentication.
   **What's happening**: Login via Google fails with 504 Gateway Timeout during token polling. Affecting ability to even start the tool. Updated today (2026-05-27) — likely a service-side issue.

10. **[#4562 — qwen-code，在windows系统下，是cmd执行的吗？](https://github.com/QwenLM/qwen-code/issues/4562)** (1 comment, OPEN)
    *Author: @YANGSROOT*
    **Workflow affected**: Windows shell compatibility.
    **What's happening**: User reports Qwen Code launches with `cmd.exe` title instead of PowerShell. `!ls` doesn't work on Windows native environment (not WSL). Asks how to switch to pwsh. New issue — maintainers haven't responded yet.

## 4. Key PR Progress

Selected 10 significant PRs from the last 24 hours:

1. **[#4472 — feat(daemon): ACP Streamable HTTP transport at /acp](https://github.com/QwenLM/qwen-code/pull/4472)**
   *Author: @chiga0*
   **What it does**: Implements the official Agent Client Protocol (ACP) Streamable HTTP transport ([RFD #721](https://github.com/agentclientprotocol/agent-client-protocol/pull/721)) as a second northbound transport on `qwen serve`, mounted at `/acp`. Supports both streaming and non-streaming modes. **Implication**: Third-party ACP-compatible clients (like Claude Desktop) can now integrate with Qwen Code daemon.

2. **[#4552 — feat(serve): runtime MCP server add/remove](https://github.com/QwenLM/qwen-code/pull/4552)**
   *Author: @doudouOUC*
   **What it does**: Adds HTTP routes `POST /workspace/mcp/servers` (add/replace) and `DELETE /workspace/mcp/servers/:name` (remove) for runtime MCP server registry mutation without daemon restart. Closes issue #4514 task T2.8.

3. **[#4555 — feat(sdk): add serve-bridge MCP server & rename mcp → daemon-mcp](https://github.com/QwenLM/qwen-code/pull/4555)**
   *Author: @jifeng*
   **What it does**: Adds `qwen-serve-bridge` allowing MCP-compatible clients (Claude Desktop, Cursor, Qoder) to interact with the Qwen Code agent via stdio protocol. **Implication**: Any IDE that supports MCP can now use Qwen Code as a coding agent.

4. **[#4556 — feat(telemetry): trace daemon prompt lifecycle](https://github.com/QwenLM/qwen-code/pull/4556)**
   *Author: @doudouOUC*
   **What it does**: Adds OpenTelemetry propagation across daemon HTTP routes, ACP bridge, and prompt execution. Injects `qwen.telemetry` metadata internally and restores OTel context after prompt queueing. **Implication**: Diagnostic observability for daemon mode.

5. **[#4559 — feat(serve): add daemon file logger](https://github.com/QwenLM/qwen-code/pull/4559)**
   *Author: @doudouOUC*
   **What it does**: Adds per-process file logging at `~/.qwen/debug/daemon/serve-<pid>-<workspaceHash>.log`. Configurable via `QWEN_RUNTIME_DIR` and opt-out via `QWEN_DAEMON_LOG_FILE=0`. Routes lifecycle messages, errors, and debug breadcrumbs.

6. **[#4510 — fix(daemon): cross-client sync follow-up cleanup](https://github.com/QwenLM/qwen-code/pull/4510)**
   *Author: @chiga0*
   **What it does**: Three independent fixes: epoch-reset resync handling, approval-mode serialization, and catch-up indicator. Addresses edge cases in the recently merged cross-client real-time sync.

7. **[#4499 — fix(telemetry): attach interaction span to session root context](https://github.com/QwenLM/qwen-code/pull/4499)**
   *Author: @doudouOUC*
   **What it does**: Fixes a bug where `startInteractionSpan` was missing the parent context argument, causing OpenTelemetry to split interaction spans off from their sessionId-derived trace tree. Fixes #4486.

8. **[#4558 — fix(cli): suppress completion menu for history-restored text until edited](https://github.com/QwenLM/qwen-code/pull/4558)**
   *Author: @DragonnZhang*
   **What it does**: Prevents the autocomplete menu from appearing when navigating command history, only showing it after the user edits the text. Improves CLI UX when replaying previous commands.

9. **[#4544 — fix(cli): auto-prepend @ when pasting or dropping multiple file paths](https://github.com/QwenLM/qwen-code/pull/4544)**
   *Author: @MikeWang0316tw*
   **What it does**: Fixes inconsistency where drag-and-drop or pasting multiple files didn't auto-prepend `@` (the file reference prefix), while single-file paste worked correctly. **Implication**: Better multi-file context injection UX.

10. **[#4381 — feat(worktree): Phase D — startup --worktree flag + symlinkDirectories + PR refs](https://github.com/QwenLM/qwen-code/pull/4381)**
    *Author: @LaZzyMan*
    **What it does**: Phase D of worktree capability: `--worktree [name]` flag for creating/attaching session worktrees, symlink directories, and Git PR reference integration. Allows entire session to work inside a temporary branch-like context.

## 5. Feature Request Clusters

### A. Daemon Mode Feature Expansion
Recurring requests centered on making `qwen serve` production-ready:
- **File I/O and auth via daemon** (#4542): Proposal to extract a `DaemonWorkspaceService` that handles file operations, device auth, agents CRUD, and memory CRUD — making REST/SSE a full ACP equivalent.
- **Runtime MCP server management** (#4552, already in PR): Adding/removing MCP servers without daemon restart.
- **Server-pushed follow-up suggestions** (#4507, already in PR): Ghost-text suggestions after assistant turns.

### B. Notification & Hooks System
- **Task completion/approval notifications** (#2922): Request for sound playback or callback hooks when tasks complete, errors occur, or user approval is needed.
- **Global hooks configuration** (#4361): User reports `.sh` scripts in `~/.qwen/hooks/` don't execute. Related to the broader hooks/callback feature.

### C. MCP/Integration Compatibility
- **MCP Streamable HTTP transport** (#4326): Compatibility issue with Spring AI-based MCP servers (GET method not supported).
- **GitHub Actions integration** (#385, historical but re-activated): Running Qwen Code agent from CI/CD pipelines.

## 6. Developer Pain Points

### Critical: V8 Heap Out-of-Memory Crashes (Repeated Daily)
This is the single most reported issue, with 10+ separate reports updated in the last 24 hours alone. Key characteristics:
- **Symptoms**: `FATAL ERROR: Ineffective mark-compacts near heap limit`, `JavaScript heap out of memory`, `Allocation failed — JavaScript heap out of memory`
- **Crash pattern**: All show V8 heap reaching 3.5–4.1 GB, with Mark-Compact GC cycles failing to reclaim memory.
- **Trigger scenarios**: Long sessions, large contexts, tool output/diff accumulation, `/compress` command usage, YOLO mode.
- **Frequency**: Reports span from #2868 (April 3) to #4399 (May 21), with daily updates still coming in. **Users are filing duplicates** — the maintainers closed most as duplicates without a published fix.
- **Impact**: Process crash destroys all session state. Users report losing work mid-task.

### Moderate: Authentication & Integration Issues
- **Google OAuth 504 timeout** (#4317): Login flow broken, possibly service-side.
- **MCP Spring AI incompatibility** (#4326): Qwen Code's MCP client fails with servers using Spring AI Streamable HTTP transport.

### Minor: CLI & Platform Issues
- **Windows shell detection** (#4562): Not recognizing PowerShell vs cmd.
- **Global hooks not firing** (#4361): Hooks directory exists but scripts don't execute.
- **CI test flakiness** (#4429): UI tests intermittently fail across all platforms due to AppComponent re-measurement timing.

</details>