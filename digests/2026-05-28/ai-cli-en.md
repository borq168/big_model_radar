# AI CLI Tools Community Digest 2026-05-28

> Generated: 2026-05-28 02:13 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report — 2026-05-28

## 1. Daily Cross-Tool Overview

Six major AI CLI tools released updates today, with GitHub Copilot CLI delivering the most patches (six) in a single cycle. Context window management emerged as a shared pain point across Claude Code, Codex, and Copilot CLI, each with distinct manifestations (payload bloat, indicator removal, tool schema overhead). Agent reliability issues—hangs, false successes, freezes without diagnostics—appear in reports from Gemini CLI, Copilot CLI, OpenCode, and Qwen Code. Enterprise authentication friction persists as a cross-tool adoption barrier, most visibly in GitHub Copilot CLI (#223) and Qwen Code (#656, #4317). Kimi Code saw rising community tension around its project split into the TypeScript rewrite, while Qwen Code advanced toward headless operation with significant daemon and MCP bridging PRs.

---

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Releases (24h) |
|---|---|---|---|
| Claude Code | ~50 issues | 5 | 1 (v2.1.153) |
| OpenAI Codex | 10+ hot issues, high engagement | 10 (notable: 6 permission system PRs) | 2 (alpha patches) |
| Gemini CLI | 50 issues updated | 50 PRs updated | 2 (preview + nightly) |
| GitHub Copilot CLI | 28 items updated | 0 | 6 (v1.0.55-2 through -7) |
| Kimi Code | ~6 issues | 7 | 1 (v1.45.0) |
| Qwen Code | 27 issues | 50 PRs updated | 2 (v0.16.2 + nightly) |

**Notable:** Gemini CLI and Qwen Code show the highest PR throughput today (50 each). Copilot CLI’s zero PR activity contrasts with six releases, suggesting a consolidation phase post-deployment. Kimi Code shows the lowest issue/PR volume but carries significant community sentiment weight.

---

## 3. Shared Feature Directions

**Context Window Management (Claude Code, Codex, Copilot CLI, Qwen Code)**
- Claude Code: Request size warnings before hitting 32MB limit (#56691); accumulated base64 blocking all messages (#43056).
- Codex: Missing context fullness indicator (#23794, 132 👍); long-session compaction failures (#10823).
- Copilot CLI: System/tools consuming 73% of context window before first user message (#3539, new).
- Qwen Code: Tool output truncation PR (#4520) to prevent overflow; compression without metadata PR (#4528).

**Agent Reliability (Gemini CLI, Claude Code, Copilot CLI, OpenCode, Qwen Code)**
- Gemini CLI: Generalist agent hangs (#21409), subagent false success reporting (#22323).
- Claude Code: Cowork 10GB VM bundle degrading performance (#22543, 185 👍), 100-turn limit breaks automation (#61028).
- Copilot CLI: Agent regression on skill hard-gates (#3540), silent sub-agent hangs (#3547).
- OpenCode: Main & sub-agents randomly freezing without diagnostics (#24342).
- Qwen Code: OOM crashes (#4276, closed), command substitution bypass (#4093, security).

**Enterprise Authentication & Proxy Friction (Copilot CLI, Qwen Code, Claude Code)**
- Copilot CLI: Org-owned token permissions not visible (#223, 72 👍); SSL inspection block (#333, 4 👍).
- Qwen Code: 400 API errors mid-session (#656, P1, long-running); Google OAuth 504 timeouts (#4317).
- Claude Code: Payment intent voided before confirmation (#55982, 74 comments).

**MCP Integration Gaps (Claude Code, Gemini CLI, Qwen Code)**
- Claude Code: MCP tools not exposed (#12164, open since Nov 2025); server instructions silently truncated (#43474).
- Gemini CLI: >128 tools causes 400 error (#24246, P1).
- Qwen Code: MCP bridge PR (#4555) enabling cross-client compatibility—a different approach.

**Windows & Terminal Compatibility (Copilot CLI, Qwen Code, Gemini CLI)**
- Copilot CLI: Four Windows/WSL-specific bugs in 24h (#3188, #3534, #3535, #3536).
- Qwen Code: cmd.exe vs pwsh detection (#4562), screen flickering in compact mode (#4561), `taskkill` self-destruction (#4537).
- Gemini CLI: PTY resize race condition (#27502, #27496) causing native crashes.

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Kimi Code | Qwen Code |
|---|---|---|---|---|---|---|
| **Primary focus today** | Cowork/remote stability; plugin hooks extensibility | Permission system refactor; Python SDK separation | Agent reliability; memory system; safety checkers | Enterprise auth; Windows parity; rapid patches | Migration to TypeScript rewrite | Daemon mode; MCP bridge; brand customization |
| **Target user emphasis** | Professional devs with complex multi-agent workflows | Cloud/API-centric users; SDK developers | Power users with custom tooling and MCP | Enterprise orgs on GitHub ecosystem | Chinese-speaking dev community | Cross-platform & cross-client integration |
| **Technical approach differentiator** | Plugin marketplace + hooks for extensibility (BeforeModel/AfterModel) | Coordinated permission refactor across 6 PRs with unified effective permissions | External safety checkers (Phase 5), LITE fallback chain for free tier | `/autopilot` command for focused sessions; cell-based terminal renderer | Python → TypeScript rebuild in progress | Daemon as headless service + serve-bridge MCP for interoperability |
| **Key release highlights** | Git LFS skip, npm auto-update notice | Rust alpha patches; Python SDK beta independent lifecycle | Termux infinite loop fix; devtools bundling | 6 patches incl. native crash fallback, `/autopilot`, hook progress streaming | Quota-error prefix fix; tool deduplication with sparse reminders | Build stability fixes; CLI startup warnings on stderr |
| **Community engagement pattern** | High engagement on Cowork issues (185 👍 on #22543); 50 items updated | Strongest upvote concentration on single issue (#23794, 132 👍) | 50 issues + 50 PRs; highest PR throughput | 28 items, zero PRs—consolidation mode | Low volume but high sentiment (trust erosion from split) | 27 issues, 50 PRs—strong contributor activity |

---

## 5. Community Activity Notes

- **Highest issue engagement:** Codex (#23794, 132 👍) and Claude Code (#22543, 185 👍) show the strongest upvote concentrations, indicating focused user pain.
- **Highest PR throughput:** Gemini CLI and Qwen Code both updated 50 PRs in 24h, with Gemini’s spanning PTY fixes, quota handling, and safety checker infrastructure, and Qwen’s concentrating on daemon, MCP, and desktop features.
- **Most releases:** GitHub Copilot CLI (6 patches), indicating rapid iteration on a problematic release cycle.
- **Maintainer responsiveness:** Qwen Code shows the strongest signal with maintainer @RealKai42 merging documentation PRs (#2377, #2378). Codex’s coordinated 6-PR permission refactor suggests deliberate maintainer-driven engineering. Copilot CLI’s zero PRs but 6 releases implies fixes shipped via internal branches without public PR tracking.
- **Community sentiment event:** Kimi Code’s issue #2381 directly questions the project split rationale, representing a trust concern that other tools (notably Claude Code’s long-running open-source PR #41447) may be attempting to address.

---

## 6. Evidence-Backed Observations

1. **Context window management is today’s most widely shared pain point**, appearing across four of six tools (Claude Code, Codex, Copilot CLI, Qwen Code). Each manifestation differs—payload size, missing indicators, tool schema overhead, output overflow—but the common factor is that current tool-specific approaches are not keeping up with user workflows involving multiple MCP servers, inline images, or long sessions.

2. **Agent reliability regressions cluster in the orchestration layer.** Hangs, false success reports, silent freezes, and recovery failures appear in Gemini CLI (#21409, #22323), Copilot CLI (#3540, #3547), OpenCode (#24342), and Qwen Code (#4579). These issues share a pattern: the system reaches a state where the LLM has completed but the CLI wrapper does not reflect that state, suggesting bugs in session management or subagent lifecycle tracking rather than in model behavior.

3. **Windows and WSL parity remains an unresolved cross-tool weakness.** Copilot CLI surfaced four Windows-specific bugs in 24h, Qwen Code has three, and Gemini CLI’s PTY crashes affect cross-platform terminal handling. This is not a new observation but today’s data reinforces it as a persistent gap with no tool showing comprehensive improvement.

4. **Enterprise authentication friction is structural, not incidental.** Copilot CLI’s #223 (72 👍) and #333 (4 👍) have been open for extended periods without visible fixes. Qwen Code’s #656 (P1, open since September 2025) and #4317 indicate server-side reliability issues. Claude Code’s #55982 (payment voiding) adds a billing-layer authentication failure. No tool demonstrated a security/auth improvement in today’s releases.

5. **Two tools are making architectural bets on headless/API-first operation.** Qwen Code’s daemon mode (#4576, #4582, #4555) and Claude Code’s Cowork feature both enable remote or background operation, but Qwen’s approach—exposing a daemon HTTP API and an MCP bridge—is more focused on programmatic integration. This is not yet a trend (only two tools show evidence) but represents a divergence from the purely interactive-TUI model that Copilot CLI and Kimi Code maintain.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-05-28

**Data source:** [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)

---

## Today's Update Brief

One new release (v2.1.153) landed with minor quality-of-life improvements: Git LFS skip option, npm auto-update notice, and `COLUMNS` pass-through for status line commands. Issue activity remains high (50 items updated in 24h), with the standout being a long-running payment failure bug (#55982, 74 comments) and a persistent Cowork performance degradation (#22543, 72 comments, 185 👍). Five pull requests were submitted, mostly documentation and bug fixes for the `ralph-wiggum` stop hook plugin.

---

## Releases

**v2.1.153** — [View release](https://github.com/anthropics/claude-code/releases/tag/v2.1.153)

- Added `skipLfs` option for `github`/`git` plugin marketplace sources to skip Git LFS downloads during clone/update.
- Claude Code now shows a one-time notice when your npm global install cannot auto-update; `/doctor` lists the fixes.
- Status line commands now receive `COLUMNS` environment variable (addresses #22115).

---

## Hot Issues (10 of 30 updated in last 24h)

**1. Plan upgrade payment fails — PaymentIntent voided immediately**
[#55982](https://github.com/anthropics/claude-code/issues/55982)
*Workflow:* Attempting to upgrade a plan. Payment is voided before confirmation completes.
*Impact:* Users cannot upgrade, possibly stuck in paywall loops.
*Community:* 74 comments, 25 👍. Active discussion from May 4 to today.

**2. Cowork creates 10GB VM bundle that severely degrades performance**
[#22543](https://github.com/anthropics/claude-code/issues/22543)
*Workflow:* Using the Cowork feature (remote pair-programming).
*Impact:* VM bundle grows to ~10GB, causing UI lag, slow startup, degraded response times.
*Community:* 72 comments, 185 👍 — highest 👍 count in today’s data. Long-running issue since February.

**3. Desktop: Bypass Permissions mode can't be enabled on macOS**
[#61415](https://github.com/anthropics/claude-code/issues/61415)
*Workflow:* Attempting to enable "Bypass Permissions" on macOS Desktop app (v2.1.148+). Option reverts to "Accept Edits" with error message.
*Impact:* Blocks users who need unrestricted file access.
*Community:* 47 comments, 14 👍.

**4. Remote Control: automatic reconnection doesn't work — connection drops silently**
[#34255](https://github.com/anthropics/claude-code/issues/34255)
*Workflow:* Remote Control sessions on macOS/iOS.
*Impact:* Connection drops with no recovery; user must manually reconnect.
*Community:* 41 comments, 83 👍. Unresolved since March.

**5. Cowork: "Reached maximum number of turns (100)" breaks long-running browser automation**
[#61028](https://github.com/anthropics/claude-code/issues/61028)
*Workflow:* Browser automation projects using Cowork.
*Impact:* Hard turn limit (100) stops automation mid-task with no override or config.
*Community:* 30 comments, 0 👍 (newer issue from May 21).

**6. PreToolUse permissionDecision "allow" no longer suppresses prompt for Bash with dangerouslyDisableSandbox**
[#51798](https://github.com/anthropics/claude-code/issues/51798)
*Workflow:* Using hooks to auto-approve unsandboxed Bash commands with `dangerouslyDisableSandbox: true`.
*Impact:* Regression in v2.1.116+; hooks are ignored, forcing manual approval every time.
*Community:* 26 comments, 3 👍. Has reproduction steps.

**7. statusLine: pass terminal columns to command via stdin or env (closed, fixed)**
[#22115](https://github.com/anthropics/claude-code/issues/22115)
*Workflow:* Custom status line commands that need terminal width (e.g., `tput`).
*Impact:* Previously impossible; now resolved in v2.1.153 via `COLUMNS` env variable.
*Community:* 19 comments, 23 👍. Closed today.

**8. Accumulated inline image base64 causes "Request too large (max 20MB)" — blocks all messages including /feedback**
[#43056](https://github.com/anthropics/claude-code/issues/43056)
*Workflow:* Adding multiple inline screenshots in a session.
*Impact:* Request body grows beyond 20MB, blocking all further messages even `/feedback`. No way to recover.
*Community:* 14 comments, 6 👍.

**9. Background subagent state sync — zombie 'running' agents cause stop hook infinite loop (closed)**
[#58637](https://github.com/anthropics/claude-code/issues/58637)
*Workflow:* Spawning ≥6 background subagents in one turn.
*Impact:* Session registry fails to mark agents as "completed"; stop hook loops indefinitely.
*Community:* 14 comments, 0 👍. Closed today (likely patched).

**10. MCP servers connect successfully but tools are not exposed to assistant**
[#12164](https://github.com/anthropics/claude-code/issues/12164)
*Workflow:* Configuring MCP servers (e.g., context servers).
*Impact:* Tools never appear in the assistant's tool list, making the server useless.
*Community:* 13 comments, 4 👍. Long-standing issue since November 2025.

---

## Key PR Progress (all 5 updated in last 24h)

**1. fix(ralph-wiggum): correctly read last assistant text from transcript**
[#62941](https://github.com/anthropics/claude-code/pull/62941)
*Author:* @kvaps
*What:* Fixes `ralph-wiggum` stop hook that only read the last line of transcript, missing multi-line assistant blocks. Now reads the full last assistant message.
*Status:* Open.

**2. fix(ralph-wiggum): prefix Stop hook command with bash for Windows spaced-path safety**
[#62906](https://github.com/anthropics/claude-code/pull/62906)
*Author:* @martinduncanson
*What:* Adds interpreter prefix (`bash`) to the stop-hook script path, fixing execution on Windows where spaced paths break.
*Status:* Open.

**3. docs: Document Agent View TUI working directory limitation**
[#61742](https://github.com/anthropics/claude-code/pull/61742)
*Author:* @giruuuuj
*What:* Documents that dispatched agent sessions inherit the TUI's working directory (no per-session override). Workaround: separate terminals/tmux. Closes #61546.
*Status:* Open.

**4. docs: env-bridge workaround pattern for plugin-MCP session-id**
[#62821](https://github.com/anthropics/claude-code/pull/62821)
*Author:* @i2pacg
*What:* Documents a workaround for plugin-based MCP servers that lack `CLAUDE_CODE_SESSION_ID` in their environment. New file `plugins/env-bridge-pattern.md`.
*Status:* Open.

**5. feat: open source claude code ✨**
[#41447](https://github.com/anthropics/claude-code/pull/41447)
*Author:* @gameroman
*What:* Aims to open-source the entire claude-code repository. Closes multiple issues (#59, #456, #2846, #22002, #41434).
*Status:* Open (since March 31).

---

## Feature Request Clusters

- **Hooks extensibility (BeforeModel / AfterModel)**
  [#21531](https://github.com/anthropics/claude-code/issues/21531) — Requests hooks to intercept LLM requests/responses, enabling custom logging, cost tracking, or prompt modification. 7 comments, 3 👍.

- **UI/UX improvements: request size warnings and status line flexibility**
  [#56691](https://github.com/anthropics/claude-code/issues/56691) — Show request body byte usage and preflight image size warnings before hitting the 32MB limit (8 comments).
  [#22115](https://github.com/anthropics/claude-code/issues/22115) — Status line column detection (now fixed in v2.1.153).

- **Ask Mode (like Cursor)**
  [#47342](https://github.com/anthropics/claude-code/issues/47342) — An "Ask mode" that suggests changes without automatically applying them. Closed today with 2 comments.

---

## Developer Pain Points

- **Cowork feature stability** — Multiple high-engagement issues: 10GB VM bundle (#22543, 185 👍), turn limit (#61028), and Windows Desktop unavailability (#62755). Cowork is clearly a major feature with significant performance/reliability concerns.
- **Remote Control connectivity** — Silent connection drops (#34255, 83 👍) and account provisioning failures (#61890) frustrate mobile/off-site workflows.
- **MCP integration gaps** — Tools not exposed (#12164, open since November), server instructions silently truncated (#43474), and missing session ID env var (addressed in PR #62821 workaround).
- **Korean language input/output regressions** — Opus 4.7 Korean lexical fixation (#54339) and IME syllable dropping (#62969) impact non-English users. Multiple reports.
- **Permission and sandbox regressions** — PreToolUse "allow" ignored (#51798) and macOS Desktop bypass permissions broken (#61415) disrupt

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Codex Community Digest — 2026-05-28

## Today’s Update Brief
Two Rust alpha releases (v0.135.0-alpha.1 and .2) landed without changelog detail. Issue activity was high, led by a major complaint about the missing context/token usage indicator (145 comments, 132 👍) and a long‑standing compaction failure. A coordinated permission‑system refactor landed across six PRs, and the first steps toward a standalone Python SDK beta were merged.

---

## Releases
- **rust‑v0.135.0‑alpha.1** – 2026‑05‑28
- **rust‑v0.135.0‑alpha.2** – 2026‑05‑28

Both are patch releases in the Rust crate; no further details provided.

---

## Hot Issues

### 1. #23794 – Context/token usage indicator missing from Codex Desktop
**Workflow:** Monitoring context window usage during a session.
**Impact:** After updating, the visible “circle” that showed context fullness disappeared, forcing users to guess when compaction is needed.
**Community reaction:** 145 comments, 132 👍 – the most active issue today.
[GitHub](https://github.com/openai/codex/issues/23794)

### 2. #10823 – Unable to compact context in very long running session
**Workflow:** Resuming a long‑lived session multiple times.
**Impact:** Remote compact task fails with “high demand” errors, making the session unusable.
**Community reaction:** 24 comments, 7 👍. Open since February.
[GitHub](https://github.com/openai/codex/issues/10823)

### 3. #24260 – gpt‑5.5 xhigh turn stalled 30 minutes before first output
**Workflow:** Using the highest reasoning effort with gpt‑5.5.
**Impact:** User‑visible “Thinking” state for >30 minutes before any assistant response appeared.
**Community reaction:** 12 comments, 8 👍.
[GitHub](https://github.com/openai/codex/issues/24260)

### 4. #20500 – Support multiple named accounts per app/connector
**Workflow:** Working with multiple services (e.g., multiple GitHub identities) in a single Codex session.
**Impact:** No way to bind separate OAuth authorisations for the same connector type.
**Community reaction:** 7 comments, 35 👍 – strong upvote signal.
[GitHub](https://github.com/openai/codex/issues/20500)

### 5. #8317 – Add time‑based scheduling for commands/tasks
**Workflow:** Running tasks on a delay, interval, or conditional polling.
**Impact:** No first‑class way to schedule “check logs every 10 minutes” or “run tests nightly” in Codex CLI.
**Community reaction:** 3 comments, 28 👍. Open since December 2025.
[GitHub](https://github.com/openai/codex/issues/8317)

### 6. #14076 – Feature request: `/archive` command for Codex CLI
**Workflow:** Managing conversation history without deleting sessions.
**Impact:** No documented slash command to archive a session, forcing workarounds.
**Community reaction:** 9 comments, 7 👍.
[GitHub](https://github.com/openai/codex/issues/14076)

### 7. #24027 – White blocks / clipped UI on Intel MacBook Pro Retina
**Workflow:** Using Codex Desktop on a 2019 Intel Mac.
**Impact:** Rendering glitches make the app partially unusable.
**Community reaction:** 5 comments, 0 👍 – but affects a specific hardware class.
[GitHub](https://github.com/openai/codex/issues/24027)

### 8. #23803 – Windows: Cannot resume thread due to `C:\` vs `\\?\C:\` path mismatch
**Workflow:** Resuming a previously running thread on Windows.
**Impact:** Stale‑path error prevents resumption until Codex is killed.
**Community reaction:** 4 comments. Duplicate of #22854 (closed).
[GitHub](https://github.com/openai/codex/issues/23803)

### 9. #24675 – Stale app connector link after reauth‑required 401
**Workflow:** Reconnecting a third‑party connector (Linear) after token expiry.
**Impact:** Removing and re‑adding the plugin doesn’t clear the stale cache; only deleting the local cache file works.
**Community reaction:** 2 comments, 2 👍.
[GitHub](https://github.com/openai/codex/issues/24675)

### 10. #24818 – Usage drain when not using the app or CLI
**Workflow:** Leaving Codex Desktop idle.
**Impact:** Token/credit usage continues while no active conversation is running.
**Community reaction:** 1 comment, 0 👍 – but potentially serious.
[GitHub](https://github.com/openai/codex/issues/24818)

---

## Key PR Progress

### 1. #24828 / #24836 – Independent Python SDK beta release
**What:** Established a separate beta release lifecycle for `openai-codex` (version 0.1.0b1) and rewrote documentation/package metadata so the SDK can stage without pinning to a runtime beta.
[#24828](https://github.com/openai/codex/pull/24828) · [#24836](https://github.com/openai/codex/pull/24836)

### 2. #24762, #24773, #24776, #24769, #24791, #24768 – Permission system refactor (6 PRs)
**What:** Introduced `EffectiveFilesystemPermissions` as a single source of truth, then lowered it consistently into Linux bwrap/Landlock, Windows ACL, macOS Seatbelt, and host‑side enforcement. The last PR removes duplicate resolution paths.
[#24762](https://github.com/openai/codex/pull/24762) · [#24773](https://github.com/openai/codex/pull/24773) · [#24776](https://github.com/openai/codex/pull/24776) · [#24769](https://github.com/openai/codex/pull/24769) · [#24791](https://github.com/openai/codex/pull/24791) · [#24768](https://github.com/openai/codex/pull/24768)

### 3. #24839, #24840, #24841 – Remote sandbox config migration (3 PRs)
**What:** Added keyed TOML format for `remote_sandbox_config`, added deprecation warnings for legacy array‑of‑tables, then dropped support for it.
[#24839](https://github.com/openai/codex/pull/24839) · [#24840](https://github.com/openai/codex/pull/24840) · [#24841](https://github.com/openai/codex/pull/24841)

### 4. #24830 – Treat `refresh_token_reused` as permanent relogin
**What:** Classifies a specific 400 error from `/oauth/token` as terminal, showing a relogin message instead of retrying.
[GitHub](https://github.com/openai/codex/pull/24830)

### 5. #23546 – Refresh near‑expiry ChatGPT access tokens before requests
**What:** Proactively refreshes managed ChatGPT auth tokens when they are inside the five‑minute expiry window, reducing mid‑session auth failures.
[GitHub](https://github.com/openai/codex/pull/23546)

### 6. #23534 – Include turns page on thread resume
**What:** `thread/resume` now returns the most recent turns directly, eliminating a separate `thread/turns/list` round trip and improving ordering/deduplication.
[GitHub](https://github.com/openai/codex/pull/23534)

### 7. #24837 – Fix budget‑limited goal edits
**What:** Corrects handling of changed objectives on budget‑limited threads: replaces the goal, resets consumed counters, and preserves token budget when omitted by client.
[GitHub](https://github.com/openai/codex/pull/24837)

### 8. #24701 – Add GPT‑5.5 to Amazon Bedrock catalog
**What:** Exposes GPT‑5.5 in Bedrock alongside GPT‑5.4, aligned with bundled model metadata.
[GitHub](https://github.com/openai/codex/pull/24701)

### 9. #24651 – app‑server startup benchmark crate
**What:** New dedicated crate to measure app‑server startup performance, wired into Bazel build.
[GitHub](https://github.com/openai/codex/pull/24651)

### 10. #24108 – Windows sandbox: pass workspace roots to runner
**What:** Resolves symbolic `:workspace_roots` entries inside the Windows sandbox runner, enabling multiple effective workspace roots per turn.
[GitHub](https://github.com/openai/codex/pull/24108)

---

## Feature Request Clusters

1. **Multi‑account / multi‑identity per connector** – #20500 (35 👍) requests support for multiple named, separately authorised accounts for the same third‑party service (GitHub, Drive, etc.), with hard privacy boundaries.

2. **Scheduling and automation** – #8317 (28 👍) asks for first‑class task scheduling (delay, interval, polling). Also #14076 (7 👍) for `/archive` to manage session history without deletion.

3. **Skill and context improvements** – #16479 (1 👍) recommends that the skill prompt instruct models to fully read `SKILL.md` before loading resources. #22275 reports recursive skill discovery inside symlinked directories.

---

## Developer Pain Points

- **Context window management:** Two high‑impact bugs (#23794, #10823) show users struggling to see context usage or compact long sessions. Both cause lost work or stalled progress.
- **Windows path normalisation:** Multiple issues (#23803, #22854, #24697) report thread‑resume failures due to `C:\` vs `\\?\C:\` prefix mismatch, requiring process kill or cache clearing.
- **Stale authentication & permissions:** Connector tokens failing with 401 that persist across re‑add (#24675, #24848) and stale app connector caches force manual cleanup.
- **Unexpected resource drain:** #24818 reports usage being consumed even when the app is idle, causing frustration among Plus subscribers.
- **Sandbox errors:** #24388 (compaction deadlock with `input_image` payloads), #24806 (`bwrap` loopback failure when applying patches), and #24341 (tool execution failure when launched from `~/.local/bin`) add friction for Linux CLI users.
- **UI rendering on Intel Macs:** #24027 reports white blocks/clipping on 2019 MacBook Pro Retina displays.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest – 2026-05-28

## 1. Today's Update Brief
Activity remained high with two new releases, 50 open issues and 50 pull requests updated in the last 24 hours. The team shipped a preview fix for Termux terminal loops and a nightly with devtools packaging improvements, while community reports continue to highlight agent reliability and PTY handling issues.

---

## 2. Releases

### v0.45.0-preview.0
- **What’s New:** Fixes a bug where the CLI would enter an infinite loop during terminal relaunch and resize on Termux.
  [Release v0.45.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.45.0-preview.0)

### v0.45.0-nightly.20260527.g41c9260ca
- **What’s New:** The `devtools` package is now bundled to prevent module resolution errors. Includes a fix for integrating the “Po” feature (details truncated in changelog).
  [Release v0.45.0-nightly.20260527.g41c9260ca](https://github.com/google-gemini/gemini-cli/releases/tag/v0.45.0-nightly.20260527.g41c9260ca)

### v0.44.0 (older, included for completeness)
- **What’s New:** Refactored to eliminate `no-unsafe`‑related lint issues.
  [Release v0.44.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.44.0)

---

## 3. Hot Issues (10 selected)

**#21409 – Generalist agent hangs**
Workflow: Agent hangs indefinitely when deferring to the generalist agent for simple tasks (e.g., folder creation).
Impact: Blocks many automation workflows. Community reaction: 8 👍, multiple confirmations.
[Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

**#25166 – Shell command execution gets stuck after completion**
Workflow: After running a simple shell command, the CLI still shows “Awaiting user input” even though the command finished.
Impact: Requires manual cancellation, disrupts long sessions. 3 👍.
[Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)

**#22323 – Subagent recovery after MAX_TURNS falsely reports success**
Workflow: The `codebase_investigator` subagent reports `status: "success"` even when it hit the max turn limit, hiding the interruption.
Impact: Misleading feedback to the main agent and user. 2 👍.
[Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

**#21968 – Gemini does not use skills and sub‑agents enough**
Workflow: Custom skills and sub‑agents are rarely invoked automatically, even when they match the task.
Impact: Users manually instruct the agent to use them, reducing automation value. 6 comments.
[Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)

**#21983 – Browser subagent fails on Wayland**
Workflow: The browser agent terminates immediately with `TERMINATION: GOAL` without producing any result.
Impact: Browser automation broken for Wayland users. 1 👍.
[Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)

**#24246 – 400 error with >128 tools**
Workflow: When more than 128 tools are enabled, the agent throws a 400 error.
Impact: Blocks usage for power users with many MCP servers. 0 👍 but high priority (P1).
[Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246)

**#26522 – Auto Memory retries low-signal sessions indefinitely**
Workflow: Auto Memory re‑reads the same low‑signal transcripts because the extraction agent skipped them.
Impact: Wasted tokens and redundant processing. 0 👍.
[Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522)

**#26525 – Auto Memory sends transcripts to model before redacting secrets**
Workflow: Secrets are redacted in the extraction prompt, but the transcript content is already in model context.
Impact: Security risk, especially for enterprise users. 0 👍.
[Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525)

**#26523 – Invalid memory inbox patches silently skipped**
Workflow: Malformed memory patches are silently ignored, making debugging difficult.
Impact: Users don’t know why patches are not applied. 0 👍.
[Issue #26523](https://github.com/google-gemini/gemini-cli/issues/26523)

**#22093 – Subagents running without permission since v0.33.0**
Workflow: After update, subagents are activated even when disabled in settings.
Impact: Unexpected behavior for users expecting only MCP functionality. 0 👍.
[Issue #22093](https://github.com/google-gemini/gemini-cli/issues/22093)

---

## 4. Key PR Progress (10 selected)

**#27502 – fix(core): resolve P1 crash during terminal resize (ioctl EBADF)**
Fixes a race condition where resizing a PTY that has just been torn down causes a `libc++` crash.
[PR #27502](https://github.com/google-gemini/gemini-cli/pull/27502)

**#27496 – fix(core): harden PTY resize against native crashes**
Implements defense‑in‑depth to prevent crashes from `node-pty` during process exit combined with UI‑triggered resize.
[PR #27496](https://github.com/google-gemini/gemini-cli/pull/27496)

**#27467 – fix(core): handle multi-line escaped quotes in stripShellWrapper**
Fixes incorrect unescaping of shell‑wrapped commands containing escaped quotes (e.g., `bash -c "hg commit -m \"title\n\nbody\""`).
[PR #27467](https://github.com/google-gemini/gemini-cli/pull/27467)

**#27186 – Add support for custom external safety checkers**
Implements Phase 5 of the safety checker system, allowing organisations to integrate custom executables for security policies.
[PR #27186](https://github.com/google-gemini/gemini-cli/pull/27186)

**#27221 – fix(core): prevent zero-quota buckets from overwriting valid ones**
Fixes false “Quota limit reached” when the server returns multiple quota buckets (e.g., Free tier bucket after Pro).
[PR #27221](https://github.com/google-gemini/gemini-cli/pull/27221)

**#27124 – fix(core): buffer chat compression telemetry**
Buffers OTEL log events for compression metrics to reduce overhead, while keeping Clearcut logs immediate.
[PR #27124](https://github.com/google-gemini/gemini-cli/pull/27124)

**#27238 – fix(core): add gemini-2.5-flash-lite to default fallback policy chain**
Adds the lite model as the final fallback for free‑tier users after Pro/Flash quotas are exhausted.
[PR #27238](https://github.com/google-gemini/gemini-cli/pull/27238)

**#27215 – fix: allow configured MCP servers in non-interactive mode**
Enforces a default‑DENY posture for MCP tools in headless mode and introduces an explicit opt‑in for auto‑approval of configured tools.
[PR #27215](https://github.com/google-gemini/gemini-cli/pull/27215)

**#24758 – Core: make `modes` field mandatory in policy TOML rules**
Breaking change: policies without a `modes` field will now fail to load, ensuring safe defaults per mode.
[PR #24758](https://github.com/google-gemini/gemini-cli/pull/24758)

**#22590 – fix(cli): include all Executing subagent tool calls in useToolScheduler state**
Ensures that subagent tool calls that go directly to “Executing” (bypassing approval) are visible in the UI state.
[PR #22590](https://github.com/google-gemini/gemini-cli/pull/22590)

---

## 5. Feature Request Clusters

- **AST‑aware code intelligence** – Multiple issues (#22745, #22746, #22747) request replacing plain text file reads/searches with AST‑aware tools to reduce token usage and improve precision.
- **Server‑driven model management** – Issue #20878 proposes fetching available models from a remote endpoint instead of hardcoding them.
- **Remote agents & advanced auth** – Issue #20303 tracks Sprint 2 of remote agents, adding task‑level authentication and background processing.
- **Browser agent resilience** – Issues #22267, #22232, #21983 request session takeover, lock recovery, and better Wayland support.
- **Memory system improvements** – Multiple issues (#26516, #26522, #26523, #26525) request deterministic redaction, better patch validation, and avoidance of infinite retries in Auto Memory.

---

## 6. Developer Pain Points

- **Agent hangs and false successes** – The generalist agent (#21409) and subagent recovery (#22323) produce unreliable outcomes, forcing users to avoid delegation.
- **Shell command stuck** – After command completion, the CLI remains in a “waiting input” state (#25166), requiring manual intervention.
- **Quota and tool‑count errors** – Issues with zero‑quota buckets (#27221) and the 128‑tool limit (#24246) frustrate power users.
- **PTY crashes on resize** – Race conditions in terminal resizing (#27502, #27496) cause native crashes, affecting stability in long sessions.
- **Auto Memory secret exposure** – Security‑critical: transcript content is sent to the model before redaction (#26525), a blocker for enterprise adoption.
- **Configuration ignored** – Browser agent (#22267) and subagent permissions (#22093) are not respected from `settings.json`, leading to unexpected behavior.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-28

## 1. Today’s Update Brief

A heavy release day with six patches in the last 24 hours (v1.0.55-2 through v1.0.55-7), including a critical native binary crash fix and the new `/autopilot` command. The issue tracker saw 28 updated items, with a surge of triage-level reports around startup hangs, context-window exhaustion, and Windows/WSL clipboard regressions. No pull requests were merged or updated today.

## 2. Releases

**v1.0.55-7** (latest)
- Fixed: `exit_plan_mode` tool is only offered to the model while the session is in plan mode
- Fixed: Native binary crash (e.g. SIGSEGV) now falls through to the JavaScript fallback instead of silently exiting

**v1.0.55-6**
- Added: `/autopilot <objective>` command to keep autopilot focused; `/goal` as alias
- Improved: Cell-based terminal renderer enabled for all users by default
- Improved: Shows warning when remote controlled sessions are disabled by organization policy
- Improved: Extension log files are now captured

**v1.0.55-5**
- Improved: MCP configuration opens in its own dedicated screen; scrollable server and tool lists when content exceeds visible area

**v1.0.55-4** — Fixes and changes

**v1.0.55-3**
- Added: Hook progress streaming shows real-time status messages from long-running hooks in the timeline
- Added: `pluginDirectories` on `session.create` and `session.resume` RPC — SDK clients can mount Open Plugins-format directories per session
- Added: Delete remote sessions directly from the session picker

**v1.0.55-2** — Fixes and changes

## 3. Hot Issues

**Issue #223** — "Copilot Requests" permission for fine-grained tokens should be visible for org-owned tokens
*Affected workflow:* Enterprise token creation for automations. Organizations cannot restrict token permissions to Copilot Requests, forcing use of personal PATs.
*Impact:* High (72 👍, 23 comments). Blocking corporate compliance.
[Link](https://github.com/github/copilot-cli/issues/223)

**Issue #2205** — Scroll in terminal (Terminator) broken after recent update
*Affected workflow:* Mouse scroll navigates through input history instead of output history. `--no-mouse` flag does not help.
*Impact:* Moderate (12 👍, 11 comments). Usability regression for power users.
[Link](https://github.com/github/copilot-cli/issues/2205)

**Issue #333** — CLI fails with "fetch failed" in corporate SSL inspection environments
*Affected workflow:* All network operations behind MITM proxies on macOS.
*Impact:* Moderate (4 👍, 4 comments). Enterprise adoption blocker.
[Link](https://github.com/github/copilot-cli/issues/333)

**Issue #2717 (CLOSED)** — `oauth.clientId` in mcp-config.json ignored; always uses Dynamic Client Registration
*Affected workflow:* MCP servers requiring static OAuth client IDs. DCR overrides configured value silently.
*Impact:* Moderate (3 👍, 2 comments). Now closed, assumed fixed.
[Link](https://github.com/github/copilot-cli/issues/2717)

**Issue #3543** — Startup input lag (15–30 s freeze) since 1.0.52: unbounded recursive glob over `$COPILOT_CUSTOM_INSTRUCTIONS_DIRS`
*Affected workflow:* Users with large home-directory trees or monorepos. TUI is unresponsive during freeze.
*Impact:* Critical for affected users (new, 1 comment). Performance regression.
[Link](https://github.com/github/copilot-cli/issues/3543)

**Issue #3544 (CLOSED)** — Response text missing from stdout in `-p` (non-interactive) mode
*Affected workflow:* Programmatic/scripted use of Copilot CLI. Response rendered to alt-screen instead of stdout.
*Impact:* High for automation users (1 comment). Now closed, assumed fixed.
[Link](https://github.com/github/copilot-cli/issues/3544)

**Issue #3188** — Windows: `copilot.exe` exits 1 with empty streams when stdout is a pipe/regular file
*Affected workflow:* All non-PowerShell automation on Windows (cmd, CI, child processes).
*Impact:* High (3 👍, 1 comment). Blocks Windows CI integration entirely.
[Link](https://github.com/github/copilot-cli/issues/3188)

**Issue #3527** — `contextTier` setting persisted but not applied on session start (defaults to 200k)
*Affected workflow:* Users who have opted into long-context (350k) tier via `/model`. Fresh sessions ignore the persisted setting.
*Impact:* Moderate (new, 1 comment). Workflow friction.
[Link](https://github.com/github/copilot-cli/issues/3527)

**Issue #3539** — System/Tools consume 73% of context window (146k/200k), triggering auto-compaction on first message
*Affected workflow:* Users with multiple MCP servers and plugins configured. Fresh sessions immediately compact before any user input.
*Impact:* High (1 👍, 1 comment). Core usability degradation for MCP-heavy setups.
[Link](https://github.com/github/copilot-cli/issues/3539)

**Issue #3534** — WSL2 (ARM64): `/copy` fails with `clip.exe exited with code 1` due to cmd.exe quoting bug in 1.0.55
*Affected workflow:* Clipboard operations on WSL2 ARM64. Bug introduced in 1.0.55-1.
*Impact:* High for WSL users (new, 1 comment). Regression.
[Link](https://github.com/github/copilot-cli/issues/3534)

## 4. Key PR Progress

No pull requests were merged or updated in the last 24 hours. The project appears to be in a consolidation phase following the rapid release cycle. Several closed issues (e.g. #2717, #3544, #3531, #3486) likely corresponded to fixes shipped in the v1.0.55 series, but the PRs themselves are not captured in today’s data.

## 5. Feature Request Clusters

**Shareable sessions across machines and teams**
- Issue #3537 proposes sharing session context, history, and failures across developers and machines for collaborative debugging.

**Auto-update plugins**
- Issue #2734 requests automatic updates for marketplace plugins (all or per-plugin), citing friction in manual update workflows.

**Multi-root workspace support**
- Issue #1826 asks Copilot CLI to read `.code-workspace` files when connected to VS Code, discovering additional folder contexts and instruction files.

**Context tier persistence**
- Issue #3527 (partially a bug report) highlights a desire for `contextTier` setting to be honored at session start without requiring manual `/model` invocation each time.

**Locale-aware `/usage` output**
- Issue #3538 requests that `/usage` honor the system’s first-day-of-week setting instead of hardcoding Sunday.

## 6. Developer Pain Points

**Enterprise authentication and network friction** persists as the top long-running pain point (#223, #333), with no visible fix in recent releases. Org-owned token permissions and SSL-inspection proxies remain blockers for corporate adoption.

**Windows and WSL2 parity** continues to lag. Issues #3188 (pipe/stdout exit 1), #3534 (clipboard quoting), #3535 (ramdisk directory access), #3536 (CJK rendering) — four separate Windows-specific bugs surfaced in just the last 24 hours, indicating insufficient cross-platform testing in the current release cycle.

**Context window bloat** from MCP/plugin tool schemas (#3539) is a new and concerning pain point. With System/Tools consuming 146k of 200k tokens before any user input, the tool-rich setup that Copilot CLI encourages is directly undermining session quality.

**Startup performance regression** (#3543) from unbounded globbing over custom instruction directories is a classic iatrogenic bug that will frustrate users who followed the previous recommendation to set `COPILOT_CUSTOM_INSTRUCTIONS_DIRS`.

**Agent regression on skill hard-gates** (#3540) and silent sub-agent hangs (#3547) suggest the behavior model changes in the 1.0.55 series may have introduced reliability regressions in agent orchestration. These are high-severity for users building multi-step agent workflows.

---

*Data sourced from github.com/github/copilot-cli. Digest generated 2026-05-28.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-28

## Today's Update Brief

Today’s activity centers on a minor patch release (v1.45.0) and rising community tension around the project’s transition to the TypeScript rewrite “Kimi Code.” A new issue directly questions the rationale for the split, while several PRs address long-standing TUI rendering bugs and parallel execution rate-limiting. The team is actively merging docs-related PRs to announce the migration.

## Releases

**v1.45.0** — [Release](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.45.0)

- **fix(shell):** Corrected a misleading “Quota exceeded” prefix that appeared on every 403 error ([PR #2342](https://github.com/MoonshotAI/kimi-cli/pull/2342)). This improves error clarity when API authentication fails.
- **feat(toolset):** Improved deduplication with sparse reminders and canonical args ([PR #23](https://github.com/MoonshotAI/kimi-cli/pull/23)). Reduces redundant tool calls in agent workflows.

## Hot Issues

1. **[#1623](https://github.com/MoonshotAI/kimi-cli/issues/1623) — [bug] Kimi Web会时不时刷新网页**
   *Affected workflow:* Kimi Web interface (Windows, kimi v1.26.0).
   *Impact:* Intermittent page refreshes disrupt ongoing coding sessions. Five comments, low engagement. Still open since March.

2. **[#2368](https://github.com/MoonshotAI/kimi-cli/issues/2368) — [enhancement] Foreground subagents exhaust single API key rate limit**
   *Affected workflow:* Running 3–4 concurrent coder/explore subagents.
   *Impact:* All subagents share one API key → 429 errors + hangs. One comment; the submitter has since opened a matching PR.

3. **[#2381](https://github.com/MoonshotAI/kimi-cli/issues/2381) — 为什么抛弃kimi-cli重做kimi code?**
   *Affected workflow:* Core community trust.
   *Impact:* User @QuantumLiu expresses strong frustration about the fragmentation, calling the CLI a “productivity tool” that requires long-term trust. Zero comments yet, but the sentiment reflects a growing concern visible across this and issue #2376.

4. **[#2379](https://github.com/MoonshotAI/kimi-cli/issues/2379) — [bug] Markdown list items in TUI drop characters and split words when wrapped**
   *Affected workflow:* TUI rendering of markdown lists (v1.45.0, Linux, Kimi-k2.6).
   *Impact:* Characters are silently dropped on line wrap, making code blocks or instructions unreadable. Reporter also submitted a fix PR.

5. **[#2376](https://github.com/MoonshotAI/kimi-cli/issues/2376) — [enhancement] Add deprecation banner on GitHub Pages**
   *Affected workflow:* Docs discovery.
   *Impact:* Users landing on kimi-cli docs get no indication that the Python project is superseded by the TypeScript rewrite. Zero comments; the team merged a similar PR today.

6. **[#2375](https://github.com/MoonshotAI/kimi-cli/issues/2375) — [enhancement] Propagate abort signal to HTTP fetch layer for instant stream cancellation**
   *Affected workflow:* Cancel/stop button during streaming responses.
   *Impact:* Current cancellation is cooperative-only (checks an asyncio.Event at await boundaries), causing noticeable delay. Zero comments.

## Key PR Progress

1. **[#2380](https://github.com/MoonshotAI/kimi-cli/pull/2380) — fix(tui): preserve characters when wrapping markdown lists**
   Direct fix for issue #2379. Modifies TUI line-wrapping logic to avoid character dropping. Open, no maintainer response yet.

2. **[#2369](https://github.com/MoonshotAI/kimi-cli/pull/2369) — feat(subagent): add API key pool for parallel subagent execution**
   Closes #2368. Introduces `APIKeyPool` (round-robin allocator) so parallel subagents can use multiple keys. Still open; this would directly resolve a common concurrency pain point.

3. **[#2378](https://github.com/MoonshotAI/kimi-cli/pull/2378) — docs: fix router auto language redirect**
   *Merged.* Fixes landing page auto-redirect for language detection on GitHub Pages subpaths. Maintainer @RealKai42.

4. **[#2377](https://github.com/MoonshotAI/kimi-cli/pull/2377) — docs: announce evolution to Kimi Code successor project**
   *Merged.* Adds a migration notice across README, docs home, and getting-started guides. Includes a dismissible site-top banner. Maintainer @RealKai42.

5. **[#1637](https://github.com/MoonshotAI/kimi-cli/pull/1637) — fix: route MCP server log notifications to loguru instead of TUI**
   Stale PR (March 30). Routes `fastmcp` log messages away from the TUI to prevent screen clutter. No progress in two months.

6. **[#2350](https://github.com/MoonshotAI/kimi-cli/pull/2350) — fix: tolerate non-utf8 worker output**
   Fixes #2313. Decodes worker stdout/stderr with replacement instead of strict UTF-8, preventing UnicodeDecodeError on Windows with locale encoding. Open.

7. **[#2335](https://github.com/MoonshotAI/kimi-cli/pull/2335) — docs: fix Notification hook matcher example**
   Replaces a non-functional example in hook documentation with real types. Updates both English and Chinese docs. Open.

## Feature Request Clusters

- **Deprecation & Migration** (#2376, #2381): Multiple requests for clearer communication about the kimi-cli → kimi-code transition. Users want deprecation banners on docs and a unified path forward, not a fork.
- **Instant Cancellation** (#2375): Requests for true abort signal propagation to the HTTP layer, replacing the current cooperative-only stop mechanism.
- **API Key Management** (#2368): A clear request for multi-key pools or per-subagent key assignment to avoid rate-limit contention in parallel agent workflows.

## Developer Pain Points

- **Trust erosion from project split** (Issue #2381): The most emotionally charged item today — a core user questions the decision to rebuild as a separate TypeScript project, calling it a “community division” that undermines the tool’s credibility as long-term productivity infrastructure.
- **Rate-limit contention in parallel workflows** (#2368, #2369): Running multiple foreground subagents remains brittle without multi-key support, forcing users to either serialize agents or accept 429 errors.
- **TUI rendering defects** (#2379, #2380): Markdown list wrapping dropping characters is a basic usability issue in a terminal UI tool. The fix exists but hasn’t been reviewed.
- **Error message quality** (fixed in v1.45.0): The misleading “Quota exceeded” on 403 errors was a long-standing friction point for debugging authentication issues.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-28

## Today's Update Brief
v1.15.11 shipped with configurable provider request timeouts and improved background agent push behavior. Community activity remains high with 50 open/updated issues and 50 PRs touched in the past 24 hours. The most active discussion continues around `shift+enter` keybinding (125 comments) and GPT model latency (97 comments).

## Releases

**v1.15.11** — [Release](https://github.com/anomalyco/opencode/releases/tag/v1.15.11)
- Added `headerTimeout` config for provider requests (10s default for default OpenAI setups).
- Experimental background agents now push updates without polling.
- Modalities config now supports setting only `modalities.input` or `modalities.output` individually (thanks @robposch).
- Remote-backed sessions received internal improvements.

## Hot Issues

1. **[#1505] shift+enter keybinding not working** — [Issue](https://github.com/anomalyco/opencode/issues/1505)
   *Community: 125 comments, 100 👍 | Status: CLOSED*
   The `shift+enter` newline insertion keybinding stopped working; `ctrl+j` works as fallback. After months of discussion, this was resolved in today's cycle. Affected all TUI users who rely on the standard insert-newline shortcut.

2. **[#29079] GPT models take too long to respond** — [Issue](https://github.com/anomalyco/opencode/issues/29079)
   *Community: 97 comments, 47 👍 | Status: OPEN*
   Intermittent multi-minute response delays on simple prompts (e.g., GPT-5.4 xhigh). Users report inconsistent timing—sometimes seconds, sometimes several minutes. Impacts everyday coding workflow reliability.

3. **[#28846] Adjust Go usage limits after DeepSeek V4 Pro 75% price reduction** — [Issue](https://github.com/anomalyco/opencode/issues/28846)
   *Community: 25 comments, 41 👍 | Status: OPEN*
   Requests that OpenCode Go subscription usage limits be updated to reflect DeepSeek V4 Pro's permanent API price cut. Widespread agreement that users should benefit from the cost reduction.

4. **[#24569] DeepSeek V4 Pro reasoning_content error** — [Issue](https://github.com/anomalyco/opencode/issues/24569)
   *Community: 28 comments, 12 👍 | Status: CLOSED*
   `reasoning_content` not passed back correctly causes API failures in thinking mode. Closed, but spawned related issues (see #28945, #29618 below).

5. **[#27530] Error: 4 of 5 requests failed: Unexpected server error** — [Issue](https://github.com/anomalyco/opencode/issues/27530)
   *Community: 17 comments, 10 👍 | Status: OPEN*
   Startup crash when provider requests fail en masse. `config.providers` and `app.agents` endpoints return "Unexpected server error." Blocks all usage for affected users; requires digging into server logs.

6. **[#27906] v1.15.1+ Breaks Bun Installs** — [Issue](https://github.com/anomalyco/opencode/issues/27906)
   *Community: 17 comments, 9 👍 | Status: OPEN*
   Postinstall lifecycle scripts now required, but Bun blocks them by default for global packages. Caused installation failures on Bun for all users since v1.15.1.

7. **[#17796] TUI: Copy via Selection no longer works** — [Issue](https://github.com/anomalyco/opencode/issues/17796)
   *Community: 15 comments, 1 👍 | Status: OPEN*
   Text selection visibly triggers "copied" notification but clipboard actually empty. Regression from ~1-2 weeks ago affecting TUI copy-paste workflow.

8. **[#24342] Main & Sub-agents Randomly Freeze Indefinitely** — [Issue](https://github.com/anomalyco/opencode/issues/24342)
   *Community: 10 comments, 3 👍 | Status: OPEN*
   Workflows that previously ran 100% successfully begin freezing randomly mid-execution. Frontend stuck on "thinking" while LLM inference already terminated. No error logs produced. Critical for agent-heavy usage.

9. **[#15774] Streaming response truncates at backticks with Qwen3.5** — [Issue](https://github.com/anomalyco/opencode/issues/15774)
   *Community: 5 comments, 4 👍 | Status: OPEN*
   When LM Studio serves models with separated `reasoning_content`, any backtick in either field causes premature display truncation. Breaks output visibility for code-heavy responses.

10. **[#28945] DeepSeek reasoning_content not preserved across tool calls** — [Issue](https://github.com/anomalyco/opencode/issues/28945)
    *Community: 5 comments, 7 👍 | Status: OPEN*
    After tool calls (e.g., LSP), `reasoning_content` is lost, causing HTTP 400 from DeepSeek API. Specific to reasoning/thinking mode workflows that require multi-turn tool interactions.

## Key PR Progress

1. **[#29645] fix(openai): improve websocket retry handling** — [PR](https://github.com/anomalyco/opencode/pull/29645)
   Handles transient OpenAI Responses websocket failures before `response.completed`. Falls back to HTTP when websocket pool fails. Closes #29646.

2. **[#29641] fix(opencode): canonicalize sqlite path identity** — [PR](https://github.com/anomalyco/opencode/pull/29641)
   Normalizes SQLite path fields to forward slashes on Windows, fixes session/project/workspace queries with filesystem-correct casing, and adds migration for existing mixed-case rows.

3. **[#29625] feat(core): add location-scoped config loading** — [PR](https://github.com/anomalyco/opencode/pull/29625)
   Ordered config discovery: global → project → `.opencode` directory. Applies provider/model overrides through the core catalog plugin path. Deleted the agent service hook surface.

4. **[#13409] feat(experimental): endpoint to reload config programmatically** — [PR](https://github.com/anomalyco/opencode/pull/13409)
   Hot reload capability for skills, agents, `opencode.json`, and commands via an API endpoint. Still open; shared walkthrough available.

5. **[#29447] feat(opencode): add task model override** — [PR](https://github.com/anomalyco/opencode/pull/29447)
   Adds optional `model` parameter to the Task tool so primary agents can select subagent models at runtime using `provider/model` format. Closes #17595.

6. **[#29615] fix(opencode): replay remote next session events** — [PR](https://github.com/anomalyco/opencode/pull/29615)
   Stacks on #29458 (remote workspace request-body forwarding). Fixes replay of serialized `session.next.*` events for remote workspace sync.

7. **[#25112] feat(cli): add TUI custom provider setup** — [PR](https://github.com/anomalyco/opencode/pull/25112)
   Adds interactive custom provider configuration to the TUI provider picker. Users can configure any OpenAI-compatible endpoint interactively rather than editing config files.

8. **[#29068] refactor(core): move database schema ownership** — [PR](https://github.com/anomalyco/opencode/pull/29068)
   Moves Drizzle schema and migrations from `packages/opencode` into `packages/core`. Establishes core-owned TypeScript migration pipeline. Large refactor affecting database layer ownership.

9. **[#29635] fix(opencode): report invalid agent/mode configs gracefully** — [PR](https://github.com/anomalyco/opencode/pull/29635)
   Previously, one invalid config file aborted all agent loading (crash) or dropped bad entries silently. Now reports invalid files without crashing and without dropping valid configs. Fixes #27133.

10. **[#29576] fix(core): allow colons inside passwords** — [PR](https://github.com/anomalyco/opencode/pull/29576)
    Simple fix: colons in passwords are now allowed by changing the split logic. Fixes #29575.

## Feature Request Clusters

**DeepSeek reasoning convergence** — Multiple issues (#24569 closed, #28945 open, #29618 open) request proper `reasoning_content` round-tripping through tool calls and thinking mode. The root fix shipped but several edge cases remain unresolved. Community clearly wants seamless DeepSeek reasoning support.

**OpenAI WebSocket / Realtime API** — PR #15038 (merged) adds WebSocket transport for Responses API, closing feature request #14891. The infrastructure for real-time streaming is now experimental. Related PR #29636 adds custom base URL support for WebSocket paths. A second PR #13409 remains open for config hot-reload capability.

**Custom mode & sub-agent improvements** — Issues #29616 and #29638 request better control for custom "subagent" agents (invocability via `@name`, parallel execution). Users building multi-agent workflows find the current model is sequential-only with limited routing.

**Usage limits & pricing transparency** — #28846 (DeepSeek price reduction) and #29642 (mimo-v2.5-pro price increase in opencode-go) reflect growing community interest in dynamic pricing/usage limit adjustments that track upstream API cost changes.

## Developer Pain Points

- **DeepSeek reasoning fragmentation**: At minimum three open/closed issues with overlapping symptoms. The `reasoning_content` must be passed back to the API after tool calls—this continues causing HTTP 400 errors for users in thinking mode. Each fix seems to introduce new corner cases.

- **Header timeout regression**: The new `headerTimeout` default (10s) in v1.15.11 immediately caused failures (#29548) for users with slower provider responses. The config is documented as fixable, but the default is too aggressive for many real-world setups.

- **TUI keybinding regressions**: #29620 reports that v1.15.9+ question/select dialogs swallow all `messages_page_*` keybinds, breaking pagination during prompts. Combined with the still-open #17796 copy-selection bug, TUI users face multiple UX degradations.

- **Agent freezes without diagnostics**: #24342 describes a frustrating random freeze with zero error output—the system just shows "thinking" forever while the LLM has already stopped. For agent-first workflows, this is a critical reliability gap.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for 2026-05-28, based on the provided GitHub data.

---

## Qwen Code Community Digest – 2026-05-28

### 1. Today's Update Brief
Activity remains high with **two new releases** (v0.16.1-nightly and v0.16.2) focusing on build stability and CLI startup reliability. The community raised **27 issues** and submitted **50 PRs** in the last 24 hours, with a strong cluster of work around the Daemon mode, MCP server integration, and new skills like `/triage`.

### 2. Releases
Two releases were published in the last 24 hours:
- **v0.16.1-nightly.20260528.34b7d472e**: Fixes CLI startup warnings not being surfaced on stderr before TUI render (PR [#4461](https://github.com/QwenLM/qwen-code/pull/4461)) and a telemetry fix.
- **v0.16.2**: Fixes a build issue where stale outputs before `tsc --build` caused TS5055 errors (PR [#4453](https://github.com/QwenLM/qwen-code/pull/4453)). Preparatory chore for the v0.16.1 stable release.

### 3. Hot Issues
*(10 noteworthy issues from the last 24h, ordered roughly by impact)*

1. **[#4276 – OOM Crash](https://github.com/QwenLM/qwen-code/issues/4276)** (CLOSED)
   - **Workflow**: Running the CLI on memory-constrained systems.
   - **Impact**: CLI crashes with an out-of-memory error during garbage collection, losing the session.
   - **Reaction**: 10 comments, closed quickly. Likely patched or workaround found.

2. **[#656 – API Error 400 for Every Message](https://github.com/QwenLM/qwen-code/issues/656)** (OPEN, P1)
   - **Workflow**: All API calls to the provider.
   - **Impact**: Complete service block—every single prompt fails with `[API Error: 400 <400> ...]`. User reports it started mid-session.
   - **Reaction**: Long-running issue (since Sep 2025) with 10 comments, now re-opened. This is a high-severity blocker for affected users.

3. **[#4493 – Rider Login Failure](https://github.com/QwenLM/qwen-code/issues/4493)** (OPEN)
   - **Workflow**: Using Qwen Code in JetBrains Rider IDE.
   - **Impact**: OAuth login redirect loops infinitely when already logged in via browser, preventing token plan usage.
   - **Reaction**: 4 comments, Chinese-speaking user. Highlights cross-platform auth friction.

4. **[#4317 – Google OAuth 504 Gateway Timeout](https://github.com/QwenLM/qwen-code/issues/4317)** (OPEN)
   - **Workflow**: Google OAuth-based login.
   - **Impact**: Token polling fails with a 504 Gateway Time-out after browser authentication, leaving the user unable to log in.
   - **Reaction**: 4 comments. Indicates server-side transient or throttling issue.

5. **[#4537 – CLI Crash via `taskkill`](https://github.com/QwenLM/qwen-code/issues/4537)** (CLOSED)
   - **Workflow**: AI agent executing shell commands.
   - **Impact**: Agent ran `taskkill /F /IM node.exe` to kill a Vite process, which also killed the Qwen CLI itself (both are `node.exe` on Windows).
   - **Reaction**: 2 comments. A dangerous edge case where the tool can terminate itself.

6. **[#4448 – Invalid `settings.json` Causes Silent Backup Load](https://github.com/QwenLM/qwen-code/issues/4448)** (CLOSED, feature-request)
   - **Workflow**: User configuration.
   - **Impact**: A typo in `~/.qwen/settings.json` (no quotes around a key) causes the CLI to silently load backup settings or show a first-time setup dialog, confusing the user.
   - **Reaction**: 2 comments. Interesting UX failure—silent recovery is worse than a clear error. A fix PR ([#4560](https://github.com/QwenLM/qwen-code/pull/4560)) is already in progress.

7. **[#4093 – Command Substitution Denial Bypass](https://github.com/QwenLM/qwen-code/issues/4093)** (CLOSED, security)
   - **Workflow**: AI agent executing shell commands.
   - **Impact**: The security block on `$()`, backticks, etc. is inconsistently applied, potentially allowing malicious command injection.
   - **Reaction**: 2 comments. Repeated issue from May 12; a fix seems to have been accepted.

8. **[#4579 – False "Compressed Turn" Error on Rewind](https://github.com/QwenLM/qwen-code/issues/4579)** (OPEN)
   - **Workflow**: Typing messages during tool execution (mid-turn) and then using `/rewind`.
   - **Impact**: User gets a false error `Cannot rewind to a turn that was compressed`, even when no compression occurred. Blocks session recovery.
   - **Reaction**: 1 comment. A matching fix PR ([#4580](https://github.com/QwenLM/qwen-code/pull/4580)) has been opened.

9. **[#4575 – Indistinct UI Indicators for Modes](https://github.com/QwenLM/qwen-code/issues/4575)** (OPEN)
   - **Workflow**: Using visual TUI.
   - **Impact**: `auto-mode` and `auto-accept edits` modes both use the same yellow color (`theme.status.warning`), causing confusion.
   - **Reaction**: 1 comment. A clear UI polish request.

10. **[#4568 – `@` File Completion Ignores Submodule Files](https://github.com/QwenLM/qwen-code/issues/4568)** (OPEN, P2)
    - **Workflow**: Using `@` to reference files in the prompt.
    - **Impact**: Git submodule directories appear in the autocomplete list, but no files inside them are shown. User can only reference root-repo files.
    - **Reaction**: 1 comment. Marks a bug in the file-finding logic for complex repository structures.

### 4. Key PR Progress
*(10 important PRs from the last 24h)*

1. **[#4576 – feat(daemon): server-side shell command execution](https://github.com/QwenLM/qwen-code/pull/4576)** (OPEN)
   - **What**: Adds `POST /session/:id/shell` route for direct (non-LLM) shell execution in daemon mode, with streaming output.
   - **Why**: Enables a more responsive daemon UX.

2. **[#4583 – chore: sync main into dragon/feat-unstable-desktop-app](https://github.com/QwenLM/qwen-code/pull/4583)** (OPEN)
   - **What**: Syncs latest `main` into the experimental desktop app branch (`dragon/feat-unstable-desktop-app`).
   - **Why**: Keeps the desktop feature branch current.

3. **[#4581 – feat(desktop): multi-brand support](https://github.com/QwenLM/qwen-code/pull/4581)** (OPEN)
   - **What**: Config-driven multi-brand system for the desktop app ("Qwen Code" vs "ModelStudio Desktop") via `CRAFT_BRAND` env var. Includes a build guide.
   - **Why**: Infrastructure for white-label or branded desktop distribution.

4. **[#4555 – feat(sdk): serve-bridge MCP server](https://github.com/QwenLM/qwen-code/pull/4555)** (OPEN)
   - **What**: Adds a `qwen-serve-bridge` MCP server, allowing any MCP client (Qoder, Claude Desktop, Cursor) to interact with qwen-code agent via stdio.
   - **Why**: Major integration play—makes Qwen Code a drop-in backend for other AI coding tools.

5. **[#4560 – feat(cli): invalid settings.json warning dialog](https://github.com/QwenLM/qwen-code/pull/4560)** (OPEN)
   - **What**: Detects corrupted user `settings.json` and shows a UI warning dialog instead of silently loading backup defaults.
   - **Why**: Solves the UX confusion of issue [#4448](https://github.com/QwenLM/qwen-code/issues/4448).

6. **[#4520 – fix(core): truncate model-facing tool output](https://github.com/QwenLM/qwen-code/pull/4520)** (OPEN)
   - **What**: Truncates oversized tool output before it enters conversation history; saves full output to temp file. Prevents double-truncation.
   - **Why**: Prevents context window overflow from large tool results.

7. **[#4528 – fix(core): compress when usage metadata is missing](https://github.com/QwenLM/qwen-code/pull/4528)** (OPEN)
   - **What**: Allows chat compression to proceed safely when provider usage metadata is absent.
   - **Why**: Handles a real-world edge case where some models omit token counts.

8. **[#4580 – fix(rewind): false "compressed turn" error](https://github.com/QwenLM/qwen-code/pull/4580)** (OPEN)
   - **What**: Changes mid-turn user messages from `type: 'user'` to `type: 'notification'` in UI history to fix the rewind turn-counting bug.
   - **Why**: Directly fixes issue [#4579](https://github.com/QwenLM/qwen-code/issues/4579).

9. **[#4379 – feat(channels): Feishu (Lark) adapter](https://github.com/QwenLM/qwen-code/pull/4379)** (OPEN)
   - **What**: Adds a channel adapter for Feishu/Lark with WebSocket/Webhook support, interactive streaming cards, and reply quoting.
   - **Why**: Expands Qwen Code's reach into the Chinese enterprise IM ecosystem.

10. **[#4564 – feat(stats): token usage for cost visibility](https://github.com/QwenLM/qwen-code/pull/4564)** (OPEN)
    - **What**: Persists token-usage accounting and extends `/stats` with daily/monthly usage, breakdowns by model/auth-type, and CSV/JSON export.
    - **Why**: Provides essential cost tracking for users and teams.

### 5. Feature Request Clusters
*(Recurring themes from Issue/PR data, no roadmap predictions)*

- **Daemon Mode & Remote API**: Multiple independent requests and PRs for daemon features are converging. Issues like [#2271](https://github.com/QwenLM/qwen-code/issues/2271) (original daemon request), [#4582](https://github.com/QwenLM/qwen-code/issues/4582) (non-blocking `POST /prompt`), and PRs [#4576](https://github.com/QwenLM/qwen-code/pull/4576) (shell execution) and [#4555](https://github.com/QwenLM/qwen-code/pull/4555) (MCP bridge) indicate a strong push toward making Qwen Code a headless, programmable service.
- **Remote Terminal / SSH Integration**: Issues such as [#4566](https://github.com/QwenLM/qwen-code/issues/4566) (WinkTerm integration) and [#4562](https://github.com/QwenLM/qwen-code/issues/4562) (Windows shell compatibility) point to a desire for better remote session handling and shell environment support.
- **Built-in Skills (Simplify, Triage)**: The request for a `/simplify` command ([#3565](https://github.com/QwenLM/qwen-code/issues/3565)) and the new `/triage` skill PR ([#4577](https://github.com/QwenLM/qwen-code/pull/4577)) show community interest in more sophisticated, packaged agent workflows for code review and issue management.
- **Non-Blocking / Async API for Daemon**: Issue [#4582](https://github.com/QwenLM/qwen-code/issues/4582) explicitly calls for decoupling the prompt trigger from its completion in the daemon API, citing infrastructure timeout constraints. This is a specific architectural pain point for users integrating Qwen Code into pipelines.
- **Low-Resource / Lite Mode**: Issue [#1277](https://github.com/QwenLM/qwen-code/issues/1277) requests a "lite mode" for running on low-resource machines with small models (e.g., Qwen3-4b) and context windows <20k, suggesting an underserved use case for simpler batch tasks.

### 6. Developer Pain Points
*(Recurring frustrations and high-frequency requests seen today)*

1. **Authentication & API Instability**: The persistence of issues like [#656](https://github.com/QwenLM/qwen-code/issues/656) (API Error 400), [#4317](https://github.com/QwenLM/qwen-code/issues/4317) (OAuth 504 timeout), and [#4493](https://github.com/QwenLM/qwen-code/issues/4493) (Rider login loop) suggests a significant pain point in the reliability of the authentication and API gateway layer.

2. **Windows & Terminal Compatibility**: Issues [#4562](https://github.com/QwenLM/qwen-code/issues/4562) (cmd.exe vs pwsh), [#4561](https://github.com/QwenLM/qwen-code/issues/4561) (screen flickering in "compact mode"), and [#4537](https://github.com/QwenLM/qwen-code/issues/4537) (self-kill via `taskkill`) highlight ongoing friction for Windows users, particularly around shell environment detection and TUI stability.

3. **Configuration & CLI UX Anti-patterns**: Issue [#4448](https://github.com/QwenLM/qwen-code/issues/4448) (silent invalid config error) and the resulting PR [#4560](https://github.com/QwenLM/qwen-code/pull/4560) show that the CLI's silent error recovery is unintuitive. Developers expect explicit error dialogs or clear messages when configuration is corrupt.

4. **Session Safety & Control**: Several issues point to a lack of session guardrails. The `taskkill` self-destruction ([#4537](https://github.com/QwenLM/qwen-code/issues/4537)) and the false "compressed turn" error blocking `/rewind` ([#4579](https://github.com/QwenLM/qwen-code/issues/4579)) erode trust in session management. The security bypass for command substitution ([#4093](https://github.com/QwenLM/qwen-code/issues/4093)) remains a concern, even if closed.

5. **Tool Output & Context Limits**: PR [#4520](https://github.com/QwenLM/qwen-code/pull/4520) (truncate tool output) directly addresses a common developer experience: large tool results crashing the session by consuming too many tokens. The parallel PR [#4528](https://github.com/QwenLM/qwen-code/pull/4528) (compress without metadata) shows this is an area of active, iterative bug fixing.

</details>