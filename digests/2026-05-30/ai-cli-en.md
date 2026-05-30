# AI CLI Tools Community Digest 2026-05-30

> Generated: 2026-05-30 02:13 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report — 2026-05-30

## 1. Daily Cross-Tool Overview

Today saw a flurry of releases across four tools (Claude Code v2.1.157, Copilot CLI five patch versions, Kimi Code v1.46.0, Qwen Code v0.17.0 + nightly) while Codex and OpenCode shipped no new versions. Issue activity remained high across the board, with Claude Code, Codex, Gemini CLI, and OpenCode each reporting ~50 updated issues. Community attention converged on agent reliability failures, context window management, platform-specific regressions (Windows, Android, Wayland), and the growing pains of MCP/server runtime control. Maintainer response was mixed: Gemini merged several community PRs, Codex closed multiple high-traffic issues, while Claude Code’s critical extended-thinking resume bug (#63147) and Kimi’s quota transparency complaints saw no resolution today.

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Release Today |
|---|---|---|---|
| **Claude Code** | 50 | 3 | v2.1.157 |
| **OpenAI Codex** | 50 | 10 | None |
| **Gemini CLI** | 50 | 10 | v0.45.0-nightly |
| **GitHub Copilot CLI** | 40 | 0 | v1.0.57-1, v1.0.57-0, v1.0.56, v1.0.56-2, v1.0.56-1 |
| **Kimi Code CLI** | 7 | 4 | v1.46.0 |
| **OpenCode** | 50 | 10 | None (screenshots only) |
| **Qwen Code** | 22 | 10 | v0.17.0 + nightly |

*Note: Issue counts are as reported; some digests use “open/updated” interchangeably. PR counts reflect items touched in the last 24 hours.*

## 3. Shared Feature Directions

Requirements appearing in **two or more** tool communities today:

- **Context / token usage visibility** – Claude Code (#7111: per-task time & token indicators), Codex (#24272, #23591: reimplement context‑usage display), Copilot CLI (#3539: 73% of context consumed by system/tools), and Kimi Code (#1994: quota usage calculation) all request more transparent resource indicators.
- **Agent reliability & cancellation** – Gemini (#21409: generalist hangs, #22323: subagent false success), Claude Code (#34476: no way to cancel spawned agents, #62193: uncontrolled bash processes), OpenCode (#29952: sub‑agent blocks parent), and Qwen (#4624: `--resume` memory leak) report agents that hang, mask failures, or cannot be stopped mid-flight.
- **Platform-specific breakage** – Windows: Codex (#23672: websocket crash), Copilot (#3439: tmux lag), Kimi (#778: API errors on PowerShell). Android/Termux: Claude Code (#50270: native binary broken), Gemini PR (#27563: exec path fallback). Wayland: Gemini (#21983: browser subagent fails). CJK IME: Qwen (#3456: composition position).
- **MCP / tool runtime management** – Copilot (#3582: disabled flag ignored, #3583: OAuth token refresh concurrency), OpenCode (#29939: duplicate MCP processes per session), Qwen (#4615: project‑scoped `.mcp.json` with approval semantics, PR #4552: runtime add/remove).
- **IDE integration gaps** – Claude Code (#47166: JetBrains plugin request), Codex (VS Code extension context indicator missing), Gemini (PR #27198: IDE detection hangs in bare terminals), Qwen (#4586: `Ctrl+C` exits in PyCharm terminal).

## 4. Differentiation Analysis

- **Claude Code** leans into local plugin extensibility (auto‑loading `.claude/skills`, `plugin init` scaffolding) and advanced session features (extended thinking, subagents). Today’s most active community pain is session recovery after extended thinking.
- **OpenAI Codex** focuses on cross‑device remote control (iOS pairing, app‑server connectivity) and Vim‑style editing in the composer. Windows startup crashes and remote compact failures dominate.
- **Gemini CLI** prioritises agent orchestration (subagent delegation, evaluation infrastructure, AST‑aware tools) and Auto Memory extraction. The community’s top complaints are agent hangs and subagents falsely reporting success.
- **GitHub Copilot CLI** differentiates with model selection visibility (free/student tiers now see models), `/diff` improvements, and MCP server integration with OAuth. Rendering regressions on Windows/ tmux and context‑window overhead are key friction points.
- **Kimi Code** is in a transition phase (announcing successor “Kimi Code”) and struggles with quota transparency and API error handling. Its community is small but vocal about rate‑limiting discrepancies.
- **OpenCode** is community‑driven with a heavy focus on performance regressions (GPT latency, v1.14.48 “unusable”), a long‑standing clipboard bug (#4283, 89 👍), and MCP duplication cascading into sidecar crashes. Security compliance issues surfaced today.
- **Qwen Code** emphasises local model integration (Ollama, Qwen‑Max) and MCP runtime management without daemon restarts. Architecture debt (#4063: 12 structural issues) and memory diagnostics are internal priorities.

## 5. Community Activity Notes

- **Highest issue volume**: Claude Code, Codex, Gemini CLI, and OpenCode each updated ~50 issues — indicating active user bases with many overlapping concerns.
- **Most releases**: Copilot CLI (5 patches today) and Qwen Code (stable + nightly). Copilot’s multiple patches suggest rapid iteration on urgent bugs; Qwen’s stable release addressed startup warnings and telemetry.
- **Strongest community PR flow**: Gemini CLI (3 community fixes merged: UI throttling, ghost text wrapping, IDE detection), followed by OpenCode (multiple open PRs, 10 updated). Codex and Qwen also had 10 PRs each, but fewer were community‑authored.
- **Quick maintainer response**: Codex closed several high‑reaction issues (#12564, #14297, #23591). Qwen resolved an SSL outage (#4612/#4611) same‑day. Gemini merged multiple community fixes. Claude Code’s most‑upvoted issue (#63147, 36 👍) received no maintainer comment today.

## 6. Evidence-Backed Observations

1. **Context management is the most pervasive unaddressed need.** Four tools (Claude Code, Codex, Copilot, Kimi) have active issues asking for better token/usage visibility, and Copilot reports that system overhead alone saturates the context window. No tool currently provides a satisfactory solution.

2. **Agent reliability failures are creating trust gaps.** Gemini’s generalist agent hangs on trivial tasks, Claude Code’s extended-thinking sessions unrecoverable, OpenCode’s sub‑agent blocks parent — these issues erode confidence in autonomous workflows. The subagent false‑success problem in Gemini (#22323) is particularly insidious because it masks failures.

3. **Platform support is fragmenting.** Windows, Android/Termux, Wayland, and CJK input each have blockers in at least two tools. The Android regression in Claude Code (#50270, open >1 month) and Codex’s Windows crash (#23672) suggest uneven resource allocation across platforms.

4. **MCP/tool runtime control is an emerging pain point.** Three tools (Copilot, OpenCode, Qwen) have issues around duplicate processes, disabled flags being ignored, token refresh concurrency, and missing approval gates. This is early‑stage — standards and best practices have not yet formed.

5. **Community contribution velocity varies widely.** Gemini and OpenCode saw community‑authored fixes merged today; Copilot and Claude Code had minimal PR activity. This may reflect differences in contribution infrastructure (Gemini’s evaluation tests) or maintainer bandwidth.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-05-30

## Today's Update Brief

Anthropic shipped **v2.1.157** with local plugin auto-loading and a new `claude plugin init` scaffolding command. The issue tracker saw heavy activity (50 open issues updated), driven by a critical extended-thinking session resume bug (#63147) and a long-standing Termux/Android regression (#50270). Only three pull requests were touched in the last 24 hours, reflecting a quiet period on the contribution side.

## Releases

**v2.1.157** was released within the last 24 hours. Changes:

- Plugins stored in `.claude/skills` directories are now **automatically loaded** — no marketplace required.
- Added `claude plugin init <name>` to scaffold a new plugin skeleton in `.claude/skills`.
- Added autocomplete for `/plugin` arguments, including subcommands, installed plugin names, and known plugins.

[View release](https://github.com/anthropics/claude-code/releases/tag/v2.1.157)

## Hot Issues (10 of 50 active)

1. **#63147 — Extended-thinking session resume permanently broken**
   `[bug, platform:macos, area:core, area:api]` Resuming a session that used extended thinking with tool calls fails with `400 "thinking blocks cannot be modified"`. The transcript stores thinking text as empty but retains the signature, making the session unrecoverable.
   💬 40 comments | 👍 36
   [🔗 Issue](https://github.com/anthropics/claude-code/issues/63147)

2. **#6275 — Up arrow key unexpectedly clears prompt input**
   `[bug, platform:macos, area:tui]` Accidental up-arrow press loses all typed text with no undo. Users request draft history or confirmation before clearing.
   💬 25 comments | 👍 41
   [🔗 Issue](https://github.com/anthropics/claude-code/issues/6275)

3. **#50270 — v2.1.113+ native binary breaks Termux/Android**
   `[bug, regression, platform:android, area:packaging]` The switch from a JS entry point to a glibc Linux binary kills all functionality on Android/Termux. No fallback or alternative build is provided.
   💬 24 comments | 👍 46
   [🔗 Issue](https://github.com/anthropics/claude-code/issues/50270)

4. **#47166 — JetBrains IDE plugin request**
   `[enhancement, area:ide, platform:intellij]` Community seeks a dedicated Claude AI Assist plugin for JetBrains IDEs, citing heavy daily use of other AI tools in that ecosystem.
   💬 20 comments | 👍 0
   [🔗 Issue](https://github.com/anthropics/claude-code/issues/47166)

5. **#63469 — API 400: got 'system' role instead of 'user' or 'assistant'**
   `[bug, platform:windows, area:core, api:anthropic]` Session history is corrupted so a `system`-role message appears in the message array, causing the API to reject the request. Reproduced on v2.1.156.
   💬 15 comments | 👍 5
   [🔗 Issue](https://github.com/anthropics/claude-code/issues/63469)

6. **#7111 — Restore time/token indicators and add context usage display**
   `[enhancement, area:tui, area:core]` Users want a per-task time elapsed indicator and token counter in the TUI, plus live context usage (e.g., visible percentage).
   💬 12 comments | 👍 22
   [🔗 Issue](https://github.com/anthropics/claude-code/issues/7111)

7. **#62193 — Claude Code spawned ~3,000 parallel bash processes in 17 seconds**
   `[bug]` A single session launched thousands of concurrent `bash` tool calls, causing OOM and a hard reboot. No concurrency limiter or safety throttle appears to be in effect.
   💬 9 comments | 👍 3
   [🔗 Issue](https://github.com/anthropics/claude-code/issues/62193)

8. **#34476 — No way to cancel spawned agents without killing session**
   `[bug, platform:macos, area:agents]` When parallel agents are launched, there is no UI to stop them individually. The only escape is to kill the entire session.
   💬 9 comments | 👍 2
   [🔗 Issue](https://github.com/anthropics/claude-code/issues/34476)

9. **#43083 — Configurable reasoning effort for subagents**
   `[enhancement, area:agents]` Users can choose a model for subagents but cannot set reasoning effort (low/medium/high/xhigh). Request to expose `reasoning_effort` parameter when dispatching subagents.
   💬 8 comments | 👍 16
   [🔗 Issue](https://github.com/anthropics/claude-code/issues/43083)

10. **#63015 — Auto-compact never triggers on Max subscription with 200K context**
    `[bug, regression, platform:macos, area:core]` Statusline reports "100% context used" but no compaction event occurs. Session continues growing until token limit is hit.
    💬 6 comments | 👍 3
    [🔗 Issue](https://github.com/anthropics/claude-code/issues/63015)

## Key PR Progress (3 active PRs in last 24h)

1. **#63467 — Add Windows gh CLI install instruction in commit-commands README**
   Adds `winget install --id GitHub.cli` alongside the existing macOS `brew` command, plus a link to the official installation page. Documentation-only.
   [🔗 PR](https://github.com/anthropics/claude-code/pull/63467)

2. **#63686 — Bump stale and autoclose timeouts from 14 to 90 days**
   Increases the inactivity timeouts for issue lifecycle automation from 14 days to 90 days, reducing the risk of legitimate bugs being closed prematurely.
   [🔗 PR](https://github.com/anthropics/claude-code/pull/63686)

3. **#62099 — Add credential-guard plugin for hardcoded secret detection**
   New plugin that scans file writes, edits, and bash commands for 20+ credential patterns (API keys, tokens, passwords) and blocks them before they reach disk. Addresses #62095.
   [🔗 PR](https://github.com/anthropics/claude-code/pull/62099)

## Feature Request Clusters

- **IDE integrations** — #47166 (JetBrains) is the most visible, but there are also subsidiary requests for improved VS Code extension parity (e.g., agent view, extended thinking controls).
- **Agent UI improvements** — Several requests ask for manual session completion (#58215), fork capabilities in agent view (#60272), and the ability to cancel agents mid-flight (#34476).
- **Usage/cost visibility** — #7111 (time and token indicators), #56926 (make `/fast` available without extra-usage), and #43083 (reasoning effort for subagents) all point to a desire for finer-grained control and transparency over resource consumption.
- **Plugin ecosystem** — The new local plugin loading (#63467 related) and the credential-guard PR (#62099) show early community interest in extending Claude Code through skills; further requests for a plugin marketplace are likely.

## Developer Pain Points

- **Extended thinking recovery** (#63147, #63418, #44344): Resuming sessions after extended thinking is fragile — empty thinking blocks, signature mismatches, and API 400s make sessions unrecoverable. This is the most commented and reacted issue today.
- **Context management failures** (#63015, #7111): Auto-compact is not firing even at 100% usage, and the statusline is the only indicator. Users feel blind about where they stand in the context window.
- **Terminal input regressions** (#6275, #62736): Arrow keys being hijacked or causing text loss have a direct impact on daily editing workflows, especially for long prompts.
- **Platform-specific breakage** (#50270 for Android/Termux, #46745 for Windows streaming stalls, #33619 for Windows memory folder): Each release introduces new platform gaps, and the Android regression has been open for over a month.
- **Uncontrolled tool execution** (#62193, #34476): The tool execution system lacks concurrency limits or cancellation controls, leading to OOM crashes and user frustration.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest – 2026-05-30

## Today’s Update Brief

Activity remained high with 50 open/updated issues and 50 PRs in the last 24 hours. No new releases were published. Community focus centered on Windows‑specific bugs, context‑usage visibility, and cross‑device connectivity, while several infrastructure PRs moved forward.

## Releases

- **None**

## Hot Issues

1. **[#12564 – Allow renaming task/thread titles](https://github.com/openai/codex/issues/12564)** (Closed, 68 comments, 110 👍)
   Feature request to rename conversation threads for better history navigation. Strong community support.

2. **[#14297 – Codex App reconnects 5 times before replying](https://github.com/openai/codex/issues/14297)** (Closed, 42 comments)
   Chinese user report: the app loses connection multiple times before a response begins. Closed but no fix details visible.

3. **[#22715 – iOS remote: “Waiting for desktop” despite authorization](https://github.com/openai/codex/issues/22715)** (Open, 25 comments, 27 👍)
   After pairing, the iOS app shows a perpetual “Waiting for desktop” state. Affects remote control workflow for mobile users.

4. **[#23672 – Windows App fails to start: websocket closed](https://github.com/openai/codex/issues/23672)** (Open, 15 comments)
   App‑server websocket closes with error code `3221225501` on Windows 11 25H2. Blocks app launch entirely.

5. **[#24272 – Context window usage indicator missing](https://github.com/openai/codex/issues/24272)** (Closed, 15 comments, 5 👍)
   Users noticed the context‑token indicator disappeared in the VS Code extension. Closed in favour of #23591.

6. **[#20873 – Chat flagged for possible cybersecurity risk](https://github.com/openai/codex/issues/20873)** (Closed, 11 comments, 4 👍)
   Codex CLI incorrectly flagged a normal chat as a cybersecurity risk. Highlights false‑positive safety filter issues.

7. **[#23979 – Local conversation history missing after update](https://github.com/openai/codex/issues/23979)** (Open, 8 comments, 2 👍)
   macOS update caused project conversations to vanish from UI, though data remains in `state_5.sqlite`. Data‑loss concern.

8. **[#24969 – Windows Store browser use blocked by enterprise policy](https://github.com/openai/codex/issues/24969)** (Open, 8 comments)
   Browser‑use feature in Microsoft Store version only works with the in‑app browser; all network URLs are blocked. Chrome extension also fails.

9. **[#23591 – Reimplement visible context/token usage indicator in App](https://github.com/openai/codex/issues/23591)** (Closed, 7 comments, 34 👍)
   High‑demand feature: desktop app lost its context‑usage display. Closed after implementation merged.

10. **[#25191 – Remote compact fails with unknown variant “auto”](https://github.com/openai/codex/issues/25191)** (Open, 2 comments)
    Today’s report: using `codex remote compact` errors with `unknown variant auto, expected high or original`. Affects context compaction on Windows.

## Key PR Progress

1. **[#25193 – Track app server startup analytics by transport](https://github.com/openai/codex/pull/25193)**
   Adds a `codex_app_server_started` analytics event with `rpc_transport` field to detect latency regressions.

2. **[#24987 – Hide background MCP startup status in TUI](https://github.com/openai/codex/pull/24987)**
   Suppresses MCP initialization status messages so the TUI opens cleanly when no MCP is used.

3. **[#25158 – Support more Vim normal commands](https://github.com/openai/codex/pull/25158)**
   Adds `gg`/`G`, `d{motion}`, `c{motion}` and characterwise visual operators for large composer buffers.

4. **[#25155 – Add model multi-agent system overlay](https://github.com/openai/codex/pull/25155)**
   Introduces a constrained catalog selector for multi-agent system within root threads, linked to session‑scoped locks.

5. **[#25151 – Extract prompts from codex-core](https://github.com/openai/codex/pull/25151)**
   Moves prompt text (review, compaction, AGENTS.md) into a new `codex-prompts` crate to decouple prompt ownership from core logic.

6. **[#25192 – Add exec-server sandbox launch intent](https://github.com/openai/codex/pull/25192)**
   Enables remote direct‑unified execution to send a `process/start` launch intent with sandbox capability, backward‑compatible.

7. **[#25171 – Fix: Bedrock API key region fallback](https://github.com/openai/codex/pull/25171)** (Closed)
   Accepts `AWS_REGION` env var when the Bearer‑token auth path is used, fixing a setup regression for Amazon Bedrock users.

8. **[#24989 – Add remote control pairing start](https://github.com/openai/codex/pull/24989)**
   Adds experimental app‑server v2 method `remoteControl/pairing/start` so desktops can initiate host‑side pairing.

9. **[#24696 – Support Library uploads for Codex Apps](https://github.com/openai/codex/pull/24696)**
   Opts host‑uploaded local files into OpenAI Library storage when tool schema includes `save_to_openai_library: true`.

10. **[#22668 – Wire managed MITM CA trust into child env](https://github.com/openai/codex/pull/22668)**
    Exports Codex’s MITM CA certificate into spawned child processes so HTTPS clients in the sandbox trust it.

## Feature Request Clusters

- **Context & Quota Visibility**
  Multiple issues (#24272, #23591, #25025) ask for visible token/context‑usage indicators in the desktop app and TUI. #23591 has been implemented.

- **Thread & Conversation Management**
  Requests to rename threads (#12564) and concerns about lost history after updates (#23979) point to a need for better UI and migration handling.

- **Cross‑Device & Remote Reliability**
  Issues with iOS remote pairing (#22715), mobile connection (#25164), and remote compact failures (#25191) reflect growing pains in the remote control feature.

- **Authentication Hurdles**
  Phone‑number verification failures (#20884, #25185) and OAuth deep‑link crashes (#25188) indicate friction in account setup for multiple subscription levels.

## Developer Pain Points

- **Windows‑specific instability** remains the top frustration – startup crashes (#23672), UI bugs (maximization #25160, full‑screen #25154, flickering #24904), and enterprise policy blocks (#249

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-30

## Today's Update Brief

Activity is moderate, with one nightly release and 50 recently-updated issues alongside 47 pull requests. The community is focused on agent reliability—particularly subagent hang/loop bugs, terminal UI regressions, and improvements to the Auto Memory system. Several community-contributed fixes for shell output jank, ghost text wrapping, and IDE detection hangs were merged today.

## Releases

**v0.45.0-nightly.20260529.gc82e2b597** (published 2026-05-29)
- **fix(core):** hardened PTY resize against native crashes (@scidomino)
- Changelog for v0.45.0-preview.0

[Full changelog](https://github.com/google-gemini/gemini-cli/compare/v0.45.0-preview.0...v0.45.0-nightly.20260529.gc82e2b597)

## Hot Issues

1. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** (P1, bug, 8 👍)
   - *Impact:* The generalist agent hangs indefinitely on simple tasks like folder creation. Users can work around it by instructing the model not to defer to subagents.
   - *Community reaction:* High interest (8 upvotes, 7 comments). This is a top frustration for users relying on subagent delegation.

2. **[#24353 — Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)** (P1, customer issue, 7 comments)
   - *Summary:* Epic tracking expansion of behavioral eval tests (currently 76 tests, 6 supported Gemini variants) to improve component-level quality measurement.
   - *Impact:* Foundational for systematic agent quality assurance.

3. **[#22745 — AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** (P2, customer issue, 7 comments, 1 👍)
   - *Summary:* Epic investigating whether AST-aware tools (e.g., precise method-bound reads) can reduce token usage and improve agent quality.
   - *Impact:* Could significantly reduce turns from misaligned file reads.

4. **[#22323 — Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** (P1, bug, 6 comments, 2 👍)
   - *Impact:* `codebase_investigator` subagent reports `status: "success"` even though it hit `MAX_TURNS` without doing real analysis. This masks failures and misleads the orchestrator.

5. **[#21968 — Gemini doesn't use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** (P2, bug, 6 comments)
   - *Impact:* Custom skills (e.g., gradle, git) and subagents are rarely invoked autonomously by the model even when relevant. Users must explicitly instruct the model to use them.

6. **[#25166 — Shell command execution stuck with "Waiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166)** (P1, bug, 4 comments, 3 👍)
   - *Impact:* After executing simple shell commands, the CLI shows "Awaiting user input" permanently even though the command has finished. Affects core shell workflow reliability.

7. **[#21983 — Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** (P1, bug, 4 comments, 1 👍)
   - *Impact:* Browser-based automation fails on Wayland display servers; agent reports `GOAL` but produces no useful output.

8. **[#26525 — Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** (P2, bug, 3 comments)
   - *Impact:* Auto Memory sends transcript content to the model before redacting secrets. Existing skill logs may also contain sensitive data. Security-conscious users are affected.

9. **[#26522 — Auto Memory retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** (P2, bug, 3 comments)
   - *Impact:* Sessions with low signal are never marked as processed, so they reappear to the extraction agent repeatedly, wasting compute and causing noise.

10. **[#24246 — Gemini CLI encounters 400 error with >128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)** (P2, bug, 3 comments)
    - *Impact:* When tool count exceeds 128, the API returns a 400 error. Users with many MCP or custom tools are blocked; the agent should intelligently scope the tool list.

## Key PR Progress

1. **[#27570 — Transition to flash GA model with experiment flag](https://github.com/google-gemini/gemini-cli/pull/27570)** (Open)
   - Replaces legacy Gemini Flash models with `gemini-3.5-flash`, gated by an experiment flag and user access logic. Ensures backward compatibility for non-GA users.

2. **[#27572 — Fix tmux false positive background detection](https://github.com/google-gemini/gemini-cli/pull/27572)** (Open)
   - Fixes a regression where Gemini CLI detected a light terminal background (#ffffff) inside tmux/mosh, causing incorrect theme switching. [Bug reference](https://b.corp.google.com/issues/490058141)

3. **[#25643 — Throttle text output updates to prevent UI jank](https://github.com/google-gemini/gemini-cli/pull/25643)** (Merged)
   - Community-contributed fix for UI freezes during high-volume shell output (e.g., `npm test`). Every `data` event was triggering a React re-render; now throttled.

4. **[#26324 — Prevent ghost text wrapping infinite loop](https://github.com/google-gemini/gemini-cli/pull/26324)** (Merged)
   - Community-contributed fix preventing the CLI from hanging when wrapping long prompt-completion ghost text, especially with inputs like `@getskill.sh:3`.

5. **[#27198 — Avoid blocking IDE detection in bare terminals](https://github.com/google-gemini/gemini-cli/pull/27198)** (Merged)
   - Community-contributed fix: `IdeClient.getInstance()` now skips process traversal in unsupported environments and adds timeouts, preventing "Initializing..." hangs in bare terminals.

6. **[#27175 — Fix /tasks/metadata double response](https://github.com/google-gemini/gemini-cli/pull/27175)** (Merged)
   - Fixes `ERR_HTTP_HEADERS_SENT` when the task store is not `InMemoryTaskStore`.

7. **[#27383 — Prevent eager MCP tool wipe on network timeout](https://github.com/google-gemini/gemini-cli/pull/27383)** (Open)
   - Implements atomic update in `refreshTools` to retain existing MCP tools when `discoverTools` fails due to network drops, fixing "tool not found" errors during transient outages.

8. **[#27568 — Fall back when ripgrep execution fails](https://github.com/google-gemini/gemini-cli/pull/27568)** (Open)
   - Falls back to legacy `GrepTool` when ripgrep hits execution-environment failures (missing `rg`, exit 64).

9. **[#27563 — Fallback to TERMUX_ORIGINAL_EXE_PATH for Termux](https://github.com/google-gemini/gemini-cli/pull/27563)** (Open)
   - Fixes Node.js spawn failure in Termux where termux-exec replaces `process.execPath` with `linker64` when arguments start with a dash.

10. **[#27348 — Wrap Ajv validate() in try/catch to prevent crash on malformed schemas](https://github.com/google-gemini/gemini-cli/pull/27348)** (Open)
    - Prevents `Cannot read properties of undefined (reading 'type')` crash when the LLM sends unexpected parameter shapes to `write_file`/`replace` tools.

## Feature Request Clusters

**AST-Aware Codebase Interaction**
Multiple issues ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747)) propose using AST-aware tools (AST grep, AST read) to improve file read precision, search accuracy, and codebase mapping quality. The goal is to reduce turns from misaligned reads and lower token consumption.

**Auto Memory Quality & Security**
Three issues from @SandyTao520 ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522)) request deterministic redaction of secrets, quarantine of invalid memory patches, and termination of infinite retry loops for low-signal sessions. Users want more robust and secure memory extraction.

**Agent Self-Awareness & Safety**
Requests ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672), [#21432](https://github.com/google-gemini/gemini-cli/issues/21432)) ask the agent to understand its own capabilities (CLI flags, hotkeys) and to avoid destructive behaviors (e.g., `git reset --force`, risky DB commands) when safer alternatives exist.

**Subagent Reliability & Autonomy**
Multiple issues ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968), [#22323](https://github.com/google-gemini/gemini-cli/issues/22323), [#22093](https://github.com/google-gemini/gemini-cli/issues/22093)) request that subagents be invoked more intelligently, report failures accurately instead of masking them as GOAL success, and never run without explicit user permission.

**Evaluation Infrastructure**
Epics ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353), [#23166](https://github.com/google-gemini/gemini-cli/issues/23166)) call for more robust and consistent component-level evaluations, with better reliability, visibility, and actionability of test results.

## Developer Pain Points

1. **Agent hangs and false success reports** — The generalist agent hangs indefinitely on simple tasks ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), and subagents report "GOAL" success even when hitting MAX_TURNS without real analysis ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)). This undermines trust in autonomous workflows.

2. **Shell execution unreliability** — Commands get stuck in "Waiting input" state after completion ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), and high-volume shell output causes UI unresponsiveness ([#25643](https://github.com/google-gemini/gemini-cli/issues/25643)).

3. **Terminal/UI regressions** — Ghost text wrapping causes infinite loops ([#26324](https://github.com/google-gemini/gemini-cli/issues/26324)), PTY resize can crash ([nightly fix](https://github.com/google-gemini/gemini-cli/pull/27496)), and tmux background detection is broken ([#27572](https://github.com/google-gemini/gemini-cli/pull/27572)). Flicker and corruption on resize remain unresolved ([#21924](https://github.com/google-gemini/gemini-cli/issues/21924)).

4. **Model doesn't use skills/tools as instructed** — Custom skills ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)) and MCP tools ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)) are not reliably invoked by the model; users must explicitly request them.

5. **Destructive model behavior** — The agent occasionally uses `git reset --force` or dangerous modifications without considering safer alternatives ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-30

## Today’s Update Brief
Five releases landed over the past 24 hours, bringing usability improvements to `/diff`, model picker visibility for free/student tiers, a new `showTipsOnStartup` setting, and better error surfacing for SDK auth failures. The issue tracker remains active with 40 updated items; no PRs were updated. Notable friction points include MCP token-refresh concurrency, context‑window hogging by system tools, and a Windows/tmux rendering regression.

## Releases
| Version | Date | Key Changes |
|---|---|---|
| **v1.0.57-1** | 2026-05-30 | Added `showTipsOnStartup` setting to control startup tips. |
| **v1.0.57-0** | 2026-05-30 | `/diff` now defaults to branch diff when no unstaged changes; fixed SDK auth-token validation to surface the real underlying error (e.g., GitHub API rate limit) instead of a misleading message. |
| **v1.0.56** | 2026-05-29 | Free and Student users can now select models other than `Auto`; ThemePicker side-by-side layout fits within 120‑column terminals; model picker shows accurate total context window per pricing tier; added `builtInAgents.rubberDuck` setting. |
| **v1.0.56-2** | 2026-05-29 | Diff view uses continuous scroll with sticky headers; `web_fetch` tool prefers markdown content via HTTP content negotiation; fixed BYOK provider configuration (truncated field). |
| **v1.0.56-1** | 2026-05-29 | Code review agent now uses the same model as the current session; GitHub MCP server omits redundant `gh`‑replaceable tools to reduce token usage; fixed cursor position after pasting. |

## Hot Issues (10 noteworthy)
1. **#223 — “Copilot Requests” permission missing for org-owned tokens**
   *Workflow:* Creating a fine-grained PAT owned by an organization.
   *Impact:* Orgs cannot enforce organisational PATs for automations.
   *Reaction:* 28 comments, 74 👍.
   [Link](https://github.com/github/copilot-cli/issues/223)

2. **#700 — Feature request: list all supported models via CLI**
   *Workflow:* Users want `copilot --list-models` to see available models and their multiplier info.
   *Impact:* Relieves guesswork when selecting models.
   *Reaction:* 13 comments, 4 👍.
   [Link](https://github.com/github/copilot-cli/issues/700)

3. **#172 — MCP timeouts not respected** *(CLOSED)*
   *Workflow:* Custom MCP servers with long operations.
   *Impact:* `mcp-config.json` timeout field ignored, causing “Request timed out” errors.
   *Reaction:* 10 comments, 2 👍. Closed, but the underlying fix pattern may benefit others.
   [Link](https://github.com/github/copilot-cli/issues/172)

4. **#3439 — TUI rendering lag inside tmux on mintty/Cygwin**
   *Workflow:* Using Copilot CLI inside tmux on Windows via Cygwin.
   *Impact:* Severe UI stutter, spinner freezing – regression from v1.0.49.
   *Reaction:* 8 comments, 0 👍.
   [Link](https://github.com/github/copilot-cli/issues/3439)

5. **#98 — Integrate with `prompts/*.md`**
   *Workflow:* Reusing custom prompt files (similar to GitHub’s customization tutorials).
   *Impact:* Would allow prompt sharing and versioning.
   *Reaction:* 6 comments, 28 👍. High community interest.
   [Link](https://github.com/github/copilot-cli/issues/98)

6. **#3162 — 1.0.42 falsely reports registry-listed custom MCP servers as blocked by policy**
   *Workflow:* Using a custom MCP server that is already in the MCP registry.
   *Impact:* False‑positive policy blocks break workflows.
   *Reaction:* 6 comments, 1 👍.
   [Link](https://github.com/github/copilot-cli/issues/3162)

7. **#1869 — Model selection not persisted across sessions**
   *Workflow:* Choosing `/model gpt-5-mini` – reverts to default on restart.
   *Impact:* Breaks expectation of persistent model preference.
   *Reaction:* 5 comments, 1 👍.
   [Link](https://github.com/github/copilot-cli/issues/1869)

8. **#3539 — System/Tools consume 73% of context window (146k/200k)**
   *Workflow:* Launching new sessions with many MCP servers and plugins.
   *Impact:* Immediate auto‑compaction before any user message, reducing quality.
   *Reaction:* 4 comments, 2 👍.
   [Link](https://github.com/github/copilot-cli/issues/3539)

9. **#3545 — Update at startup could be improved** *(CLOSED)*
   *Workflow:* Every launch prompts to update, requiring manual exit + restart.
   *Impact:* Friction for users who always update.
   *Reaction:* 3 comments, 0 👍.
   [Link](https://github.com/github/copilot-cli/issues/3545)

10. **#3048 — Support custom providers via ACP** *(CLOSED)*
    *Workflow:* Using `COPILOT_PROVIDER_*` env vars in `--acp` mode.
    *Impact:* Custom providers ignored in non‑interactive mode.
    *Reaction:* 3 comments, 4👍.
    [Link](https://github.com/github/copilot-cli/issues/3048)

## Key PR Progress
No pull requests were updated in the last 24 hours.

## Feature Request Clusters
Several new or recurring feature requests appeared in today’s issue data:

- **Model discovery and selection**
  `#700` (list models via CLI), `#1869` (persist model selection), `#3048` (custom providers in `--acp` mode) – users want more control and transparency over which models are used and how they persist.

- **Session metadata and statusline**
  `#3566` (expose session name/ID in statusline payload) – helpful when running multiple parallel sessions.

- **Local session logging**
  `#3581` (request for machine‑readable session logs like Claude Code) – for debugging and audit trails.

- **Prompt reuse and sub‑agent orchestration**
  `#98` (integrate prompts/*.md), `#3574` (mandatory sub‑agent prompts), `#3568` (parallel sub‑agent execution in plugins) – demand for more flexible agent scripting.

- **MCP server configuration improvements**
  `#3582` (disabled flag ignored), `#3583` (silent token refresh uses wrong OAuth scope) – operational reliability concerns.

## Developer Pain Points
- **MCP OAuth token refresh concurrency** (`#3456`, `#3583`) – parallel refresh‑token requests can break OAuth chains; silent refresh may use incorrect `resource` instead of `scope` parameter.
- **Authentication error messages** (`#3311`, `#223`) – cryptic “Session was not created with authentication info” when the real cause is rate limiting or missing permissions.
- **Context window saturation** (`#3539`) – system/tools overhead leaves little room for user prompts, forcing auto‑compaction in brand‑new sessions.
- **Rendering regressions** (`#3439` – tmux lag, `#3172` – “Somebody else owns the clipboard” spam, `#3573` – bell character stopped working).
- **Session metadata loss** (`#2655` – `cwd` and `branch` no longer stored in session‑store.db since v1.0.13).
- **Hooks not firing on resume** (`#3575`) – agent lifecycle hooks (`agentStop`, `notification`) only work on new sessions, not on `/restart` or `--resume`.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest – 2026-05-30

## Today’s Update Brief
The project released **v1.46.0** which focuses on documentation announcing the evolution to a successor project (“Kimi Code”) and minor UI polish. Activity remains moderate: 3 new issues and 2 new PRs landed in the last 24 hours, with ongoing discussions around rate‑limiting transparency and API error handling drawing community attention.

## Releases
### [v1.46.0](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.46.0)
- **docs:** Announce evolution to **Kimi Code** successor project ([#2377](https://github.com/MoonshotAI/kimi-cli/pull/2377))
- **docs:** Fix router auto language redirect ([#2378](https://github.com/MoonshotAI/kimi-cli/pull/2378))
- **feat(shell):** Update welcome tip link to `kimi.com`

This release is primarily a milestone marker for the migration to the new Kimi Code project.

## Hot Issues
*All 7 issues updated in the last 24h are listed below (fewer than 10 available).*

1. **[#778 – API Error: 400 Invalid request error](https://github.com/MoonshotAI/kimi-cli/issues/778)** (OPEN, 👍 0, 💬 18)
   *Affected workflow:* Running `kimi` on Windows PowerShell with model `claude-sonnet-4-5-20250929` fails on every request.
   *Impact:* Unusable for the reporter since January 2026; 18 comments suggest no resolution yet.
   *Community:* High engagement, seeking root cause.

2. **[#247 – Cannot start kimi-cli after entering key](https://github.com/MoonshotAI/kimi-cli/issues/247)** (CLOSED, 👍 0, 💬 12)
   *Old issue, but received an update on 2026-05-29* – likely a follow‑up comment. Closed, but the recent activity indicates possible re‑evaluation.

3. **[#1994 – KimiCode usage calculation problem](https://github.com/MoonshotAI/kimi-cli/issues/1994)** (OPEN, 👍 6, 💬 3)
   *Affected workflow:* Paid subscribers on the “Code Plan” see 2 hours of quota consumed after only 2 complex requests (K2.6 model).
   *Impact:* Users feel misled by the advertised “300–1200 requests per 5 hours”.
   *Community:* Moderate traction (6 thumbs up).

4. **[#2123 – Severe rate limiting / quota transparency](https://github.com/MoonshotAI/kimi-cli/issues/2123)** (OPEN, 👍 0, 💬 1)
   *Affected workflow:* Actual requests per 5h are ~60 instead of claimed 300–1200.
   *Impact:* User demands refund, citing consumer protection law.
   *Community:* Single reporter but echoes complaints from #1994.

5. **[#2399 – Agent ignores available skills, falls back to raw shell commands](https://github.com/MoonshotAI/kimi-cli/issues/2399)** (OPEN, 👍 0, 💬 0)
   *Affected workflow:* The agent does not auto‑trigger registered skills, reverting to direct shell execution.
   *Impact:* Reduces the value of skill‑based workflows.
   *Community:* Very new (created 2026-05-29).

6. **[#2397 – How to execute shell command?](https://github.com/MoonshotAI/kimi-cli/issues/2397)** (OPEN, 👍 0, 💬 0)
   *Affected workflow:* User is confused about the proper way to run shell commands inside `kimi code`.
   *Impact:* Documentation gap or UX confusion.
   *Community:* Single report.

7. **[#2396 – `kimi export` crashes during context compaction (API 400 – empty text)](https://github.com/MoonshotAI/kimi-cli/issues/2396)** (OPEN, 👍 0, 💬 0)
   *Affected workflow:* Running `kimi export` triggers compaction that produces empty `TextPart`s, rejected by the Moonshot API.
   *Impact:* Export function broken for sessions with long context.
   *Community:* New, already a fix PR (#2395) submitted.

## Key PR Progress
*All 4 PRs updated in the last 24h are listed.*

1. **[#2398 – chore: relax OpenAI and FastMCP dependency pins](https://github.com/MoonshotAI/kimi-cli/pull/2398)** (OPEN)
   *Changes:* Widens Kosong’s OpenAI SDK constraint from `2.14.x` to `2.x` and bumps FastMCP to `3.3.1`.
   *Value:* Reduces dependency conflicts for downstream users.

2. **[#2391 – chore(release): bump kimi-cli to 1.46.0](https://github.com/MoonshotAI/kimi-cli/pull/2391)** (CLOSED)
   *Changes:* Version bump, release notes moved, kimi-code wrapper synced.
   *Outcome:* Delivered the v1.46.0 release.

3. **[#2245 – fix: improve provider error UX across 429 surfaces](https://github.com/MoonshotAI/kimi-cli/pull/2245)** (OPEN)
   *Changes:* Centralizes provider error formatting, distinguishes period quota exhaustion from transient rate limits, removes raw tracebacks.
   *Value:* Friendlier error messages for rate‑limited users (addresses frustration from #2123).

4. **[#2395 – fix(compaction): filter empty text parts to avoid API 400](https://github.com/MoonshotAI/kimi-cli/pull/2395)** (OPEN)
   *Changes:* Extends the empty‑text‑part filter (already fixed for tool messages in #1663) to the context compaction path.
   *Value:* Fixes `kimi export` crash reported in #2396.

## Feature Request Clusters
The following recurring requests emerged from today’s issues:

- **Quota transparency & rate‑limiting disclosure**
  Multiple users (#1994, #2123) report large discrepancies between advertised and actual request counts. They ask for per‑model quota tables, real‑time usage meters, and clearer documentation of how “tokens” translate to “requests”.

- **API error resilience**
  Issues #778 and #2396 both stem from the CLI sending malformed requests (wrong model, empty text parts). Community feedback suggests better validation before sending and more informative error messages when the API rejects a request.

## Developer Pain Points
- **Unreliable quota experience** – Paid subscribers feel misled by vague or inflated promises. The gap between “300–1200 requests” and actual usage (~60–120) is a top complaint.
- **API 400 errors without actionable context** – Generic “Invalid request Error” makes debugging impossible; users want the actual field causing the rejection.
- **Agent skill auto‑trigger missing** – Skills are not automatically invoked, forcing developers to manually handle shell execution.
- **Context compaction crash** – A regression for a core feature (`kimi export`) that breaks workflows for users with long sessions.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-30

## Today's Update Brief
Today saw elevated activity with 50 issues and 50 PRs updated in the last 24 hours. The community is grappling with persistent performance regressions (GPT response latency, general slowness on v1.14.48), a critical clipboard bug that has accumulated 89 reactions over six months, and a fresh wave of MCP server duplication problems causing cascading failures. A security researcher also filed a batch of compliance-focused issues covering supply chain and ReDoS vulnerabilities.

## Releases
- **[pr-29948-screenshots](https://github.com/anomalyco/opencode/releases)** — Image assets for PR #29948 (command palette TUI fix). No versioned release today.

## Hot Issues

1. **[#29079: GPT Models takes too long to respond](https://github.com/anomalyco/opencode/issues/29079)** — 109 comments, 48 👍. Users report GPT-5.4 (xhigh variant) responding within seconds sometimes, but taking *several minutes* for simple commands like updating graphify. Community is sharing timing logs; maintainers have not yet labeled.
2. **[#4283: Copy To Clipboard is not working](https://github.com/anomalyco/opencode/issues/4283)** — 101 comments, 89 👍. Open since Nov 2025. Selecting response text fails to copy on multiple OSes. High community frustration; one of the oldest open bugs by reaction count.
3. **[#20695: Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)** — 82 comments, 60 👍. Central tracking issue for memory problems. Maintainer @thdxr explicitly asks users to collect heap snapshots rather than suggest LLM-based solutions. Still open.
4. **[#27530: Error: 4 of 5 requests failed — config.providers: Unexpected server error](https://github.com/anomalyco/opencode/issues/27530)** — 21 comments, 10 👍. Startup crash affecting multiple users. Server logs needed; appears to be a sidecar initialization issue.
5. **[#29786: Opus 4.8 bug in dev branch](https://github.com/anomalyco/opencode/issues/29786)** — 10 comments, 3 👍. Sub-agent opus 4.8 emits a cryptic error message on dev branch. Screenshot attached. Likely a regression from recent provider changes.
6. **[#27106: The latest version is terribly slow](https://github.com/anomalyco/opencode/issues/27106)** — 7 comments, 3 👍. User reports v1.14.48 is "practically unusable" for agent creation. No maintainer response yet.
7. **[#17765: Windows Desktop loses all session history after restart](https://github.com/anomalyco/opencode/issues/17765)** — 6 comments, 1 👍. Sessions persist in `opencode.db` but UI shows empty list after reopen. Data not lost but UI fails to load it.
8. **[#29939: MCP servers spawn duplicate processes per session](https://github.com/anomalyco/opencode/issues/29939)** — 3 comments. Opened yesterday. With 5 MCP servers configured, each new session spawns independent processes → 8+ instances for one project, crashes with 2+ projects. Linked to #29941.
9. **[#29952: Task tool blocks parent session indefinitely when sub-agent LLM call fails](https://github.com/anomalyco/opencode/issues/29952)** — 2 comments. Free tier API failure causes sub-agent session to never clean up, blocking parent. Affects delegator agent workflows.
10. **[#29941: ReadableStreamDefaultController crash — 'Controller is already closed'](https://github.com/anomalyco/opencode/issues/29941)** — 2 comments. Under memory pressure from MCP duplication (#29939), sidecar's ReadableStream crashes, cascading to PTY failure and server disconnect.

## Key PR Progress

1. **[#28943: fix(provider): expose reasoning effort variants for Kimi K2.6 and Qwen 3.6](https://github.com/anomalyco/opencode/pull/28943)** — Fixes a blanket exclusion in `transform.ts` that blocked variant injection for Kimi and Qwen models. Still open.
2. **[#29217: feat(TUI): Add inline $skill invocations with prepend + pasteText support](https://github.com/anomalyco/opencode/pull/29217)** — Closes 5 issues. Adds `$` autocomplete for skills in the prompt composer, with pasteText support. Open.
3. **[#29928: fix(desktop): collapse full-context git diffs](https://github.com/anomalyco/opencode/pull/29928)** — Fixes #29768 and #21068. Desktop Git Changes now renders diffs without showing entire files. Open.
4. **[#29858: feat(ui): add collapsible reasoning summaries](https://github.com/anomalyco/opencode/pull/29858)** — Closes #15257, #14405. Adds collapsible "Reasoning" sections matching the existing "Explored" pattern. Open.
5. **[#12633: feat(tui): add auto-accept mode for permission requests](https://github.com/anomalyco/opencode/pull/12633)** — Long-running PR (since Feb). Adds `shift+tab` toggle for auto-accepting edit permissions. Still open.
6. **[#29948: fix(tui): keep command palette available in questions](https://github.com/anomalyco/opencode/pull/29948)** — Makes command palette shortcut mode-independent so it works during question prompts. Screenshots released as assets today.
7. **[#28412: fix(llm): coerce all non-string enum types to string for Gemini](https://github.com/anomalyco/opencode/pull/28412)** — Fixes Gemini API's `.enum` type restriction by coercing non-string enums. Merged/closed.
8. **[#29625: feat(core): add location-scoped config loading](https://github.com/anomalyco/opencode/pull/29625)** — Adds ordered config discovery (global → project → `.opencode`), with provider/model overrides through core catalog. Still open.
9. **[#29949: fix(session): move env block to tail of system prompt for cache stability](https://github.com/anomalyco/opencode/pull/29949)** — Reorders system prompt to keep prefix cacheable across sessions. Closes #20110 and #5224. Opened today.
10. **[#29938: workspace v2](https://github.com/anomalyco/opencode/pull/29938)** — Major refactor by @jlongster. No issue attached yet; likely a core workspace rearchitecture. Opened today.

## Feature Request Clusters

- **Platform & Environment Support** — Multiple requests for FreeBSD support ([#28642](https://github.com/anomalyco/opencode/issues/28642)), noting `bun` is now available. Also, ongoing frustration with WSL2 integration ([#29766](https://github.com/anomalyco/opencode/issues/29766)).
- **Config & UI Usability** — Requests for an interactive config editor ([#29947](https://github.com/anomalyco/opencode/pull/29947)), RTL language support (merged in [#25010](https://github.com/anomalyco/opencode/pull/25010)), and image attachment display from tool results ([#21227](https://github.com/anomalyco/opencode/issues/21227)).
- **Agent/Sub-agent Control** — Users want task model override ([#29447](https://github.com/anomalyco/opencode/pull/29447)), inline `$skill` invocations ([#29217](https://github.com/anomalyco/opencode/pull/29217)), and Linear agent integration ([#3787](https://github.com/anomalyco/opencode/issues/3787)).
- **New Provider Integrations** — LiteLLM provider ([#29937](https://github.com/anomalyco/opencode/pull/29937)) and a community opencode-balancer plugin for multi-account rate limiting ([#29945](https://github.com/anomalyco/opencode/pull/29945)).

## Developer Pain Points

- **Performance Regressions**: GPT models timing out sporadically ([#29079](https://github.com/anomalyco/opencode/issues/29079)), v1.14.48 reported as "unusable" ([#27106](https://github.com/anomalyco/opencode/issues/27106)), and general memory issues ([#20695](https://github.com/anomalyco/opencode/issues/20695)) are the most upvoted pain points.
- **Clipboard & UI Bugs**: The clipboard bug ([#4283](https://github.com/anomalyco/opencode/issues/4283)) has been open for 6 months with 89 👍 — highest-reaction open issue. Session auto-naming regression ([#4040](https://github.com/anomalyco/opencode/issues/4040)) was fixed in a past release but remains a frustration.
- **MCP & Sidecar Reliability**: Duplicate MCP processes crash projects with multiple servers ([#29939](https://github.com/anomalyco/opencode/issues/29939)), and the cascading ReadableStream crash ([#29941](https://github.com/anomalyco/opencode/issues/29941)) creates a hard-to-debug failure mode.
- **Sub-agent Workflow Fragility**: When a sub-agent's LLM call fails, the parent session blocks indefinitely ([#29952](https://github.com/anomalyco/opencode/issues/29952)). No cleanup mechanism exists.
- **Session & Project Identity**: Windows Desktop loses session history on restart despite data persistence ([#17765](https://github.com/anomalyco/opencode/issues/17765)). Multiple local clones of the same repo share one identity, breaking file change tracking ([#17940](https://github.com/anomalyco/opencode/issues/17940)).
- **ACP/Zed Integration**: Repeated "server shut down unexpectedly" errors ([#24481](https://github.com/anomalyco/opencode/issues/24481), [#6002](https://github.com/anomalyco/opencode/issues/6002)), and `ask` permission blocking bash commands in Zed ([#25836](https://github.com/anomalyco/opencode/issues/25836)).
- **Supply Chain & Security**: A security audit filed today flags `curl | sh` without hash verification ([#29923](https://github.com/anomalyco/opencode/issues/29923)), ReDoS in wildcard pattern matching ([#29921](https://github.com/anomalyco/opencode/issues/29921)), and uncaught exception handler issues ([#29919](https://github.com/anomalyco/opencode/issues/29919)). All three were closed with the `needs:compliance` label, suggesting they were triaged as non-blocking but requiring process fixes.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-30

## Today's Update Brief

Active day with the **v0.17.0 stable release** shipping alongside a nightly build, and **22 issues updated** in the last 24 hours. Community attention is split between a resolved SSL outage on `coder.qwen.ai`, emerging memory-leak reports under `--resume`, and continued work on telemetry and MCP runtime management. 10 PRs are in flight across core, CLI, and daemon subsystems.

---

## Releases

- **[v0.17.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.17.0)** — stable release
  - `fix(cli): surface startup warnings on stderr before TUI render (#4448)`
  - `fix(telemetry): improve LogToSpan bridge error handling`
- **[v0.17.0-nightly.20260530.c699738f9](https://github.com/QwenLM/qwen-code/releases/tag/v0.17.0-nightly.20260530.c699738f9)** — nightly
  - `fix(rewind): false "compressed turn" error when mid-turn messages exist`

---

## Hot Issues

1. **#4609 — `[API Error: Value of "this" must be of DOMException]` with local Ollama models**
   *Workflow:* Running Qwen Code v0.16.2 connected to a local Qwen model via Ollama. Any prompt triggers a `DOMException` error.
   *Impact:* Blocks all local-model usage. 4 comments, no maintainer acknowledgement yet.
   *Link:* https://github.com/QwenLM/qwen-code/issues/4609

2. **#4624 — `qwen --resume` sub-process memory grows continuously, eventually OOM**
   *Workflow:* Resuming a session with `--resume`, performing routine code-gen or script interpretation. Memory increases by hundreds of MB per operation and never releases.
   *Impact:* Long-running sessions crash. 1 comment (user report), 1 👍.
   *Link:* https://github.com/QwenLM/qwen-code/issues/4624

3. **#4612 / #4611 — SSL certificate invalid on `coder.qwen.ai`** *(both closed)*
   *Workflow:* Any interaction reaching `coder.qwen.ai` (authentication, model serving). `ERR_CERT_AUTHORITY_INVALID` across PC, phone, multiple networks.
   *Impact:* Complete development block for affected users. Resolved quickly — both closed same day. 2 comments each, 1 👍 on #4611.
   *Link:* https://github.com/QwenLM/qwen-code/issues/4612

4. **#4627 — Auto-update fails with EACCES when npm global prefix requires root**
   *Workflow:* Installed via `sudo npm install -g`, auto-update spawns a child that cannot write to `/usr/local`.
   *Impact:* Users on macOS with system Node.js or `n`-managed Node cannot auto-update. 1 comment identifying root cause in `handleAutoUpdate.ts`.
   *Link:* https://github.com/QwenLM/qwen-code/issues/4627

5. **#4616 — Model `qwen3.7-max` not in model list, `/model` override also fails**
   *Workflow:* Windows 11 cmd, `qwen` CLI shows model list without `qwen3.7-max`. Forcing via `/model` returns "Model not available for auth type 'openai'".
   *Impact:* Users cannot access the latest Qwen model through the CLI. 2 comments, user frustrated.
   *Link:* https://github.com/QwenLM/qwen-code/issues/4616

6. **#4615 — Feature request: project-scoped `.mcp.json` with pending-approval semantics**
   *Workflow:* MCP server config in workspace; request is to require explicit approval before any MCP server starts, with `Pending` state visible in `qwen mcp list`.
   *Impact:* Security gap — currently no approval gate for workspace MCP configs. 1 comment.
   *Link:* https://github.com/QwenLM/qwen-code/issues/4615

7. **#4361 — Global hooks ignored** *(closed)*
   *Workflow:* User placed `.sh` files in `~/.qwen/hooks/` — hooks never execute.
   *Impact:* Breaks custom automation workflows. 3 comments, closed without resolution visible in title.
   *Link:* https://github.com/QwenLM/qwen-code/issues/4361

8. **#3456 — CJK IME composition text appears at wrong position (extra line at bottom of terminal)**
   *Workflow:* Typing Chinese/Japanese/Korean characters — pinyin/candidate text renders on an extra terminal line instead of at the cursor. Characters snap to correct position only after composition ends.
   *Impact:* Severely degrades CJK user experience. 2 comments, open since April.
   *Link:* https://github.com/QwenLM/qwen-code/issues/3456

9. **#4586 — `Ctrl+C` in PyCharm terminal causes unexpected agent exit**
   *Workflow:* Using Qwen CLI inside PyCharm's built-in terminal, pressing `Ctrl+C` (intended for copy) exits the agent immediately. Previously required 2 presses.
   *Impact:* Frequent accidental session termination. 1 comment, no maintainer reply.
   *Link:* https://github.com/QwenLM/qwen-code/issues/4586

10. **#4063 — Architecture review: 12 structural issues in core + CLI**
    *Workflow:* Maintainer-authored deep review. Highlights: core type system coupled to `@google/genai` (136 files import it), poor separation of concerns, duplication.
    *Impact:* Technical debt that slows all feature work. 2 comments, 1 👍.
    *Link:* https://github.com/QwenLM/qwen-code/issues/4063

---

## Key PR Progress

1. **[#4632 — `fix(core): harden context error text collection`](https://github.com/QwenLM/qwen-code/pull/4632)**
   Fixes #4609 — the `DOMException` crash when reading provider error objects. Makes the context-length classifier resilient to accessor-throwing errors.

2. **[#4622 — `fix(core): enforce adjacent tool results`](https://github.com/QwenLM/qwen-code/pull/4622)**
   Fixes #4619 — `cleanOrphanedToolCalls()` now only keeps tool results contiguous after the declaring assistant message. Prevents Anthropic API rejection errors.

3. **[#4552 — `feat(serve): runtime MCP server add/remove`](https://github.com/QwenLM/qwen-code/pull/4552)**
   Implements T2.8 from #4514. Adds `POST /workspace/mcp/servers` and `DELETE /workspace/mcp/servers/:name` without daemon restart. Reuses existing validation/approval pipeline.

4. **[#4613 — `feat(daemon): keep model & approval-mode state consistent across clients sharing a session`](https://github.com/QwenLM/qwen-code/pull/4613)**
   Fixes duplicate/dropped broadcasts of model and approval-mode changes across multiple clients (chat, terminal, IDE) sharing one daemon session.

5. **[#4620 — `feat(cli): add CPU profiling support for Chrome DevTools analysis`](https://github.com/QwenLM/qwen-code/pull/4620)**
   Closes #4617. Adds `cpuProfiler` module with env-var (`QWEN_CODE_CPU_PROFILE=1`) and `SIGUSR1` trigger modes. Outputs `.cpuprofile` files.

6. **[#4629 — `feat(cli): add standalone auto-update support`](https://github.com/QwenLM/qwen-code/pull/4629)**
   Self-update for standalone (non-npm) installations. Downloads archive, verifies SHA256, atomically replaces binary. Addresses the EACCES pain point from #4627.

7. **[#4563 — `refactor(serve): extract DaemonWorkspaceService from AcpSessionBridge`](https://github.com/QwenLM/qwen-code/pull/4563)**
   Splits workspace-scoped capabilities (File/Auth/Agents/Memory) into a new facade. Renames `HttpAcpBridge` → `AcpSessionBridge`. Reduces bridge complexity.

8. **[#4587 — `fix(core): remove proactive subagent system-reminder injection`](https://github.com/QwenLM/qwen-code/pull/4587)**
   Removes per-turn system reminder instructing the model to "PROACTIVELY use the Agent tool". Reduces aggressive subagent spawning while keeping agent info available.

9. **[#4560 — `feat(cli): Add settings JSON corrupted warning dialog`](https://github.com/QwenLM/qwen-code/pull/4560)**
   Adds automatic settings recovery + UI warning when user-level `settings.json` contains invalid JSON. Fixes #4448.

10. **[#4618 — `fix(core): scope boolean coercion to boolean-typed schema fields`](https://github.com/QwenLM/qwen-code/pull/4618)**
    Prevents the validator from coercing string `"true"`/`"false"` into booleans on non-boolean fields, which previously broke tools with string parameters containing those words.

---

## Feature Request Clusters

**MCP Server Security & Runtime Management**
- Project-scoped `.mcp.json` with pending-approval flow (#4615)
- Runtime MCP server add/remove without restart (PR #4552, already in progress)

**Observability & Diagnostics**
- CPU profiling for Chrome DevTools (#4617, PR #4620 in progress)
- Heap snapshot + bounded memory timeline diagnostics (#4183)
- OpenTelemetry coverage for `qwen serve` daemon end-to-end (#4554)

**Memory / Performance**
- Opt-in heap snapshot diagnostics (#4183)
- Replace tail-preservation compaction with summary+restoration model (#4592, referencing claude-code approach)

**Desktop & IDE Integration**
- Desktop app package with ACP SDK integration (PR #3778, open since April)

**Session & History Controls**
- Persistent history collapse on resume with `/history collapse-on-resume` (PR #4085)

---

## Developer Pain Points

- **Local model integration:** `DOMException` errors with Ollama (#4609) and `qwen3.7-max` not appearing in model lists (#4616) block users from running with their own Qwen models.
- **Memory and performance:** `--resume` sub-process OOM (#4624) and general lack of memory diagnostics (#4183, #4624) make long sessions unreliable.
- **macOS permission issues:** Auto-update fails with `EACCES` when npm prefix is `/usr/local` (#4627); global hooks ignored (#4361).
- **Anthropic API compatibility:** Tool message adjacency errors (#4619) and overall Anthropic proxy compatibility remain friction points.
- **Pricing frustration:** Users report Qwen3.7-Max consumption is too fast on the ¥59 plan, requesting larger or slower-consuming plans (#4614).

</details>