# AI CLI Tools Community Digest 2026-06-04

> Generated: 2026-06-04 02:49 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report — 2026-06-04

## Daily Cross-Tool Overview

Today’s community activity was highest across Claude Code, OpenAI Codex, Gemini CLI, and Qwen Code, each with 30–50 issues updated. Claude Code shipped a minor patch (v2.1.162), Codex released rust-v0.137.0 with enterprise admin controls, Gemini CLI issued a cherry-pick patch (v0.46.0-preview.1), and Qwen Code published v0.17.1 stable and a nightly build. GitHub Copilot CLI and Kimi Code CLI had no new releases, while OpenCode merged several fixes but also no release. Billing and authentication failures remain the most commented issues across Claude Code and Codex, while keyboard input bugs (CJK, German layout) are a recurring pain point for Copilot CLI and Gemini CLI. Agent reliability and session management problems appear across all tools, with subagent false success and auto-scroll regression reported in multiple projects.

## Activity Comparison

| Tool               | Issues Updated (24h) | PRs Touched (24h) | Release Today          |
|--------------------|----------------------|-------------------|------------------------|
| Claude Code        | 50                   | 4                 | v2.1.162               |
| OpenAI Codex       | 50                   | 10                | rust-v0.137.0          |
| Gemini CLI         | 50                   | 50                | v0.46.0-preview.1      |
| GitHub Copilot CLI | 30                   | 1 (test/spam)     | None                   |
| Kimi Code CLI      | 8                    | 1                 | None                   |
| OpenCode           | Not explicitly counted but ~10 hot issues + 10 PRs | Yes (multiple merged) | None |
| Qwen Code          | 33                   | ~50               | v0.17.1 + nightly      |

*Note: “Issues Updated” includes any changes (comments, label updates, etc.) in the last 24h. PR counts cover status changes and new PRs.*

## Shared Feature Directions

### Session & Context Reliability
Multiple communities are demanding more resilient session management:
- **Claude Code** – “Continue through session limits” (#13354, 116👍) and progressive context warnings (implied by #64850, #63396).
- **Gemini CLI** – Subagent false success after MAX_TURNS (#22323) and infinite retries on low-signal sessions (#26522).
- **OpenCode** – Sessions fail on transient network errors without retry (#30611) and context-window failures due to unbounded token usage (#30649).
- **Qwen Code** – Runtime snapshot prefix corrupts model.name across restarts (#4729), shell commands hang indefinitely (#4743).
- **Kimi Code** – Session resume overrides newly generated system prompt (#2420), session history not displayed after switch (#2306).

**Common need:** Robust session state persistence, graceful error recovery, and transparent context management.

### Keyboard Input & Clipboard (Internationalization)
- **GitHub Copilot CLI** – German keyboard `@` broken (#1999), CJK characters overlapped on Windows (#3536), multiple rendering regressions (#3648/3650/3654).
- **Gemini CLI** – Extra spaces on width-0 CJK continuation cells (#27505).
- **OpenCode** – Windows clipboard not working (#12595), macOS clipboard fallback missing (#12800), Ctrl+Z suspends on Linux (#24817).
- **Kimi Code** – Cannot copy content inside code boxes on web (#2419).

**Common need:** Platform-native keyboard and clipboard support for non-US layouts and East Asian languages.

### Billing & Authentication
- **Claude Code** – Account disabled after payment (#5088, 173 comments), weekly usage limit resets early (#52472).
- **OpenAI Codex** – Token consumption spikes (#14593, 600+ comments), phone number lockout (#25749).
- **OpenCode** – Request for Go plan usage API (#16017), provider timeout regression (#29548).
- **Qwen Code** – Rider IDE login redirect loop (#4493).

**Common need:** Transparent token/usage tracking, reliable payment flow, and account recovery paths.

### Agent Behavior Quality
- **Claude Code** – Model marks tasks done without testing (#60177).
- **Gemini CLI** – Subagent claims success despite hitting turn limit (#22323), model ignores custom skills (#21968).
- **OpenCode** – Sessions killed on transient errors instead of retrying (#30611).
- **Qwen Code** – Slow self-hosted models hit body timeout (#4711).

**Common need:** Better agent honesty and error handling, explicit failure reporting, and configurable timeouts.

## Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Kimi Code CLI | OpenCode | Qwen Code |
|-----------|-------------|--------------|------------|-------------------|----------------|----------|-----------|
| **Primary focus** | Agent orchestration & session management | Enterprise billing & platform stability | Memory quality & security hardening | Keyboard/input & plugin infrastructure | Session state & web UI consistency | Voice input & cross-platform clipboard | Local model setup & daemon observability |
| **Target user** | Power developers, scientists (LaTeX) | Enterprise teams, Pro subscribers | Ultra/enterprise, security-conscious | Plugin developers, non-US locales | Web-first users, Chinese-language | Lazy/voice-driven users, Go plan users | Self-hosted model users, Chinese-language |
| **Key technical move** | JSON status improvements, parallel tool call isolation request | TUI enhancements, admin credit limits, CI signing | AST-aware tools investigation, atomic MCP updates | Hook execution fixes, sandbox mode request | Session resume bug fixing, project model request | Embedded V2 session runtime, provider timeout workaround | Daemon OTel coverage, workflow sandbox |
| **Pain point cluster** | Data loss, billing auth, model degradation | Token waste, Linux desktop demand, phone auth | Subagent false success, Wayland, memory retries | CJK input, Windows clipboard, hook failures | Auto-scroll override, stale system prompt | Clipboard unreliability, plugin extensibility gaps | Local LLM setup, snapshot prefix, shell hang |
| **Release cadence** | Active (patch today) | Active (stable + alpha) | Active (preview patch) | None | None | None (but merged fixes) | Active (stable + nightly) |

**Observations:**
- **Claude Code** and **Gemini CLI** both invest heavily in agent orchestration but from different angles: Claude Code focuses on session continuity and parallel tool reliability, while Gemini CLI emphasizes memory system robustness and safety guardrails.
- **OpenCode** stands out for voice input demand (#4695, 161👍) – the only tool with a top-requested speech-to-text feature today.
- **Copilot CLI** is the most affected by keyboard input bugs across languages (6 distinct CJK/German issues) – no other tool has this concentration.
- **Kimi Code** and **Qwen Code** both address web/IDE login and session state, but Qwen Code is more focused on daemon/server observability and local model compatibility.
- **Codex** has the most commented issue (#14593 at 600+ comments) – significantly higher than any other tool’s top issue.

## Community Activity Notes

- **Highest total issue updates:** Claude Code, OpenAI Codex, and Gemini CLI tied at 50 issues each – indicating sustained community engagement.
- **Highest PR activity:** Gemini CLI (50) and Qwen Code (~50) – both showing active development work on security, UI, and architectural changes.
- **Releases today:** Claude Code (v2.1.162), Codex (rust-v0.137.0), Gemini CLI (v0.46.0-preview.1), Qwen Code (v0.17.1 + nightly). Copilot CLI, Kimi Code CLI, and OpenCode had no releases.
- **Maintainer responsiveness:** Gemini CLI shows clear PR-to-issue linkage (e.g., #4722 fixed by #4741, #4729 fixed by #4734). Codex also has active PR progress (10 notable PRs). Copilot CLI had only one PR (likely spam) – minimal maintainer activity visible. Kimi Code CLI had low activity overall.
- **Emotional intensity:** The most hotly debated topics are billing/auth failures (Claude Code #5088, Codex #14593) and keyboard input (Copilot CLI #1999, #3536). Voice input (#4695 on OpenCode) is the most upvoted feature request across all tools today (161👍), but is from a smaller community.

## Evidence-Backed Observations

1. **Session reliability is a cross-cutting concern, but no unified pattern emerges.** While Claude Code, Gemini CLI, OpenCode, and Qwen Code all report session state issues, their root causes differ: subagent false success (Gemini), stale system prompt override (Kimi), runtime snapshot corruption (Qwen), and network error kill (OpenCode). This suggests that session management is still immature across the ecosystem, but each tool implements it differently, making shared solutions unlikely.

2. **Keyboard input bugs are concentrated in Copilot CLI and Gemini CLI, with no cross-tool overlap.** Copilot CLI has six distinct CJK/German issues today, while Gemini CLI has one CJK rendering bug. Other tools report no such problems. This may reflect differing terminal library choices (e.g., custom input handling vs. TUI frameworks).

3. **Billing/auth integration failures are present in Claude Code and Codex, but absent from other tools.** Both involve plan payments and account access. The high comment counts (#5088 with 173 comments, #14593 with 600+ comments) indicate systemic issues that may be unique to Anthropic and OpenAI’s auth systems.

4. **Agent quality degradation reports appear in both Claude Code and Gemini CLI, but with distinct manifestations.** Claude Code reports the model marking tasks complete without verification (#60177); Gemini CLI reports subagents masking failure as success (#22323). Both indicate that current models over-report success, eroding user trust – but the underlying cause could be model architecture, evaluation prompts, or task complexity.

5. **Voice input demand is high on OpenCode but absent from other tools today.** Only OpenCode has a top-10 feature request for speech-to-text (#4695, 161👍). No other digest mentions voice input, suggesting this is either a niche request or an unmet opportunity elsewhere.

6. **Plugin/hook infrastructure is under active development in Copilot CLI, Gemini CLI, and OpenCode, but with different maturity levels.** Copilot CLI has execution bugs (#3659, #3664) and missing events; Gemini CLI is adding security hardening (path traversal, prompt injection mitigation); OpenCode is identifying extensibility gaps (#17425). The ecosystem is still converging on plugin standards.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-06-04

## Today's Update Brief

Activity remains high with 50 open issues updated in the last 24 hours and a steady stream of new bug reports emerging (10+ filed today alone). A minor CLI patch (v2.1.162) shipped with JSON status improvements and better tool-name resolution for native builds, while the community continues to escalate billing/account-disabling issues and session data-loss concerns. Pull request activity was quiet with only 4 PRs touched today.

## Releases

**v2.1.162** (latest)
- `claude agents --json` now includes a `waitingFor` field, exposing what a waiting session is blocked on (e.g., a permission prompt)
- `--tools` now correctly provides dedicated Grep/Glob search tools when explicitly listed on native builds with embedded search (previously these names were silently ignored)

View release: https://github.com/anthropics/claude-code/releases/tag/v2.1.162

## Hot Issues

1. **[#5088 – Account Disabled After Payment for Claude Code Max 5x Plan](https://github.com/anthropics/claude-code/issues/5088)** (173 comments, 58 👍)
   *Impact: Critical.* User paid for renewal of a Max 5x plan and immediately lost access to both Claude Code and claude.ai. Reached 173 comments, suggesting a widespread billing/auth integration failure.
   *Tags: bug, area:cost, area:auth, oncall*

2. **[#13354 – Continue When Session Limit Reached](https://github.com/anthropics/claude-code/issues/13354)** (56 comments, 116 👍)
   *Impact: Workflow.* Highly upvoted feature request asking Claude Code to offer a "continue" path when hitting session limits rather than hard-stopping mid-task.
   *Tags: enhancement, area:tui*

3. **[#34255 – Remote Control Automatic Reconnection Fails](https://github.com/anthropics/claude-code/issues/34255)** (48 comments, 86 👍)
   *Impact: Reliability.* Connection drops silently with no recovery on macOS/iOS. Mobile-to-desktop session handoff effectively broken for extended sessions.
   *Tags: bug, platform:macos, platform:ios*

4. **[#16446 – LaTeX Rendering in VS Code Plugin](https://github.com/anthropics/claude-code/issues/16446)** (33 comments, 93 👍)
   *Impact: Usability.* Scientists and academics want rendered LaTeX (equations, formulas) inside the VS Code extension chat output, similar to how it renders on claude.ai.
   *Tags: enhancement, area:ide*

5. **[#22264 – Parallel Tool Calls Cascade-Fail When One Fails](https://github.com/anthropics/claude-code/issues/22264)** (33 comments, 61 👍)
   *Impact: Workflow disruptor.* When Claude issues parallel tool calls and one errors, all siblings are cancelled, forcing a full retry. Wastes context and time.
   *Tags: bug, has repro, area:tools, area:core*

6. **[#17149 – LSP workspaceSymbol Sends Empty Query Parameter](https://github.com/anthropics/claude-code/issues/17149)** (30 comments, 20 👍)
   *Impact: Windows DX.* LSP integration sends empty query for workspace symbol lookups, reducing code navigation reliability. Reproducible on Windows.
   *Tags: bug, has repro, platform:windows, area:tools*

7. **[#52472 – Weekly Usage Limit Reset Occurs Early](https://github.com/anthropics/claude-code/issues/52472)** (19 comments, 3 👍)
   *Impact: Billing/planning.* Week resets before the scheduled time; remaining quota effectively lost. Affects both macOS and VS Code.
   *Tags: bug, platform:macos, area:cost, platform:vscode*

8. **[#59248 – Silent Retention Cleanup Deletes Session Transcripts](https://github.com/anthropics/claude-code/issues/59248)** (12 comments, 4 👍)
   *Impact: Data loss.* All conversation transcripts in a workspace older than the current session were silently deleted — no warning, no opt-in, no recovery path.
   *Tags: bug, has repro, platform:macos, area:core, data-loss*

9. **[#63396 – CLI Builds Invalid Request After Context Ops](https://github.com/anthropics/claude-code/issues/63396)** (7 comments, 4 👍)
   *Impact: Session termination.* After compact, `/clear`, or model switch, the CLI constructs a malformed API request (400 error), rendering the session unwedgeable.
   *Tags: bug, has repro, platform:macos, area:core*

10. **[#60177 – Model Marks Tasks Done Without Testing](https://github.com/anthropics/claude-code/issues/60177)** (7 comments, 1 👍)
    *Impact: Quality.* Opus 4.x reportedly marks tasks complete without verifying the implementation works. User reports 12 days and 51 commits on a still-broken task.
    *Tags: bug, area:model, model, area:agent, api:anthropic*

## Key PR Progress

*(Only 4 PRs updated in the last 24 hours; all described below.)*

1. **[#61691 – Diagnostic Script for GitHub Connector "Connected" but No Tools](https://github.com/anthropics/claude-code/pull/61691)**
   *Status: Open.* Adds a PowerShell diagnostic/repair script for Windows users affected by the GitHub MCP connector showing "Connected" but exposing zero tools in Cowork. Closes #61682. Root cause analysis references several related issues.
   *Tags: scripts*

2. **[#65223 – Spelling Fix in Security Guidance Plugin](https://github.com/anthropics/claude-code/pull/65223)**
   *Status: Open.* Fixes a typo ("reqwest" → "request") in the security guidance plugin.
   *Tags: minor*

3. **[#62099 – credential-guard Plugin for Hardcoded Secret Detection](https://github.com/anthropics/claude-code/pull/62099)**
   *Status: Open.* New plugin intercepting Write/Edit/MultiEdit/Bash tool calls to prevent hardcoded credentials from being written. Scans for 20+ credential patterns. Addresses #62095.
   *Tags: plugin, security*

4. **[#22919 – collab Plugin: Socratic Mentoring Mode](https://github.com/anthropics/claude-code/pull/22919)**
   *Status: CLOSED.* Added a plugin that transforms Claude into a mentor who guides via questions rather than writing code. Updated 2026-06-03 (closed).
   *Tags: plugin, education*

## Feature Request Clusters

**Session/Usage Management**
- *Continue through session limits* (#13354, 116 👍): Allow resuming work when the session context cap is reached rather than forcing a hard stop.
- *Progressive context warnings* (implied by #64850, #63396): Users want progressive warnings before hitting context limits, not just a sudden failure.

**IDE Integration**
- *LaTeX rendering in VS Code* (#16446, 93 👍): Display rendered equations inline in chat output.
- *Notification system for VS Code* (#65242, 1 👍): Toast/sound notifications for limit resets, task completion, and session events.

**Agent Orchestration**
- *Structured orchestration as first-class agent behavior* (#64767): Request for formal orchestration patterns (supervisor/worker) rather than ad-hoc tool calls.
- *Agent design guidance in docs* (#42873): Community asking for official guidance on designing agent teams with `/claude-api`.

**Reliability & Resilience**
- *Parallel tool call isolation* (#22264): Prevent one failing parallel call from cancelling all siblings.
- *Background agent retry on rate limits* (#65222): Transient server-side rate limits should trigger backoff, not kill the subagent.

## Developer Pain Points

**Data Loss & Silent Failures** – Multiple high-severity reports describe unrecoverable data loss: session transcripts deleted without warning (#59248, #62476), context operations producing unwedgeable sessions (#63396), and subagents dying silently on transient errors (#65222). The silent cleanup policy (30-day auto-delete) is drawing increasing backlash.

**Billing/Auth Integration Failures** – Issue #5088 (account disabled after payment) remains the most commented issue in the tracker at 173 comments. Combined with early usage-limit resets (#52472) and duplicate authorization token bugs (#64933), the billing system appears fragile.

**Model Behavior Degradation** – Reports of Claude marking tasks complete without testing (#60177), ignoring instructions (#57200), and exhibiting premature shutdown on `-p` sessions (#55297) suggest inconsistent model behavior under certain agent configurations.

**Remote Control Unreliability** – Connection drops with no reconnection (#34255) and read-only sessions when mobile sends messages (#62284) point to an unfinished state for the Remote Control feature.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-04

## Today’s Update Brief
A new stable release (rust-v0.137.0) landed with TUI enhancements and enterprise admin controls, while community attention remained focused on authentication lockouts, token consumption complaints, and recurring platform stability issues. The issue tracker saw 50 items updated in the last 24h, with the top hot issue (#14593) passing 600 comments.

## Releases
- **rust-v0.137.0** – New TUI features: F13–F24 keybindings, paste in searchable menus, compact reasoning-only status/title item. Enterprise/admin flows now show monthly credit limits and support cloud-managed config bundles (including EDU workspaces). ([Release](https://github.com/openai/codex/releases))
- **rust-v0.137.0-alpha.5** – Experimental pre-release; no detailed changelog provided.

## Hot Issues (Top 10 by community activity)

### 1. #14593 – Burning tokens very fast
**Workflow:** Business subscription, VS Code on Windows. User reports token consumption spikes even with minimal use.
**Impact:** 597 comments, 262 👍 – widespread frustration with perceived billing waste.
[GitHub](https://github.com/openai/codex/issues/14593)

### 2. #11023 – Codex desktop app for Linux
**Workflow:** Users unable to run the app on Linux due to missing native support; workarounds via Wine or containers are unreliable.
**Impact:** 82 comments, 455 👍 – highest-voted feature request by far.
[GitHub](https://github.com/openai/codex/issues/11023)

### 3. #25144 – Option to disable automatic conversion of long pasted prompts to .txt attachments
**Workflow:** Pasting long structured prompts into the macOS desktop app forces them into file attachments, breaking formatting.
**Impact:** 49 comments, 56 👍 – clear demand for opt-out control.
[GitHub](https://github.com/openai/codex/issues/25144)

### 4. #25749 – Inaccessible legacy phone number blocks login
**Workflow:** Users with valid Google OAuth and MFA cannot log into Codex because phone verification requires a number they no longer have access to. No recovery path exists.
**Impact:** 34 comments, 17 👍 – critical authentication barrier.
[GitHub](https://github.com/openai/codex/issues/25749)

### 5. #21128 – Project conversations silently hidden after 50
**Workflow:** Codex Desktop only shows the 50 most recent chats per project; older conversations disappear from the UI even though data is present.
**Impact:** 19 comments, 16 👍 – breaks long-term project memory.
[GitHub](https://github.com/openai/codex/issues/21128)

### 6. #24260 – gpt-5.5 xhigh turn stalled 30 minutes before first output
**Workflow:** A turn with high reasoning remained “Thinking” for >30 min before producing any visible response.
**Impact:** 16 comments, 9 👍 – severe responsiveness bug affecting Pro users.
[GitHub](https://github.com/openai/codex/issues/24260)

### 7. #23979 – Local conversation history missing after app update
**Workflow:** After updating Codex Desktop, history for multiple local projects vanished from UI, though data still exists in SQLite files.
**Impact:** 15 comments, 3 👍 – data visibility regression.
[GitHub](https://github.com/openai/codex/issues/23979)

### 8. #24259 – Windows sandbox fails with `spawn setup refresh` on ARM64 despite healthy doctor
**Workflow:** CLI sandbox on Windows 11 ARM64 reports clean doctor check but fails at runtime.
**Impact:** 12 comments, 9 👍 – blocks sandbox use on ARM Windows devices.
[GitHub](https://github.com/openai/codex/issues/24259)

### 9. #25249 – Semi-transparent sidebar causes undrawn regions when maximized
**Workflow:** Enabling “Semi-transparent sidebar” on Windows Desktop makes left and top areas transparent/unpainted after maximizing.
**Impact:** 12 comments, 0 👍 – visual regression for a cosmetic feature.
[GitHub](https://github.com/openai/codex/issues/25249)

### 10. #9648 – Multi-account ChatGPT OAuth rotation and management
**Workflow:** Users want to store multiple OAuth tokens so requests can fail over when one account hits limits.
**Impact:** 11 comments, 12 👍 – practical need for teams with shared quotas.
[GitHub](https://github.com/openai/codex/issues/9648)

## Key PR Progress (10 notable changes)

### 1. #26041 – Add app-server background terminal process APIs
Experimental v2 endpoints to list/terminate background terminals per thread, using app-server process ID instead of local process tree guessing.
[GitHub](https://github.com/openai/codex/pull/26041)

### 2. #26013 – Gate terminal visualization instructions in TUI
Adds `Feature::TerminalVisualizationInstructions` as under-development, gated off by default. Keeps instructions inside TUI package.
[GitHub](https://github.com/openai/codex/pull/26013)

### 3. #25946 – Report compaction request token counts
Improves compaction analytics by including token counts that match the actual remote request after output rewriting, and fall back to server-side Responses usage when available.
[GitHub](https://github.com/openai/codex/pull/25946)

### 4. #26252 – CI sign macOS release artifacts with Azure Key Vault
Moves Developer ID private key to Azure Key Vault, using GitHub OIDC + PKCS#11 to sign and notarize macOS binaries/DMGs without storing keys in GitHub.
[GitHub](https://github.com/openai/codex/pull/26252)

### 5. #26276 – Propagate auth session logging ID in ChatGPT login
Adds `authSessionLoggingId` to login protocol params, enabling join between Codex-side failure buckets and authapi outcomes.
[GitHub](https://github.com/openai/codex/pull/26276)

### 6. #26189 – Add package path from install context
Makes `codex-path` (including bundled helpers like `rg`) available to standalone launches, not just npm-based installs.
[GitHub](https://github.com/openai/codex/pull/26189)

### 7. #26291 – Optimize external agent session detection
Performance improvement for detecting external agent sessions. (No further details in summary.)
[GitHub](https://github.com/openai/codex/pull/26291)

### 8. #24634 – Add prompt hooks
Introduces `prompt` hook configuration for events where prompt-hook inference is a side request, without replacing main conversation WebSocket state.
[GitHub](https://github.com/openai/codex/pull/24634)

### 9. #26009 – Add metadata-only thread catalog subscriptions
Allows sidebar clients to subscribe to thread catalog updates without resuming threads, reducing overhead for chat list visibility.
[GitHub](https://github.com/openai/codex/pull/26009)

### 10. #26272 – Load plugin hooks without other plugin capabilities
Optimizes `hooks/list` endpoint by loading only hook declarations, skipping skills, MCP config, and apps. Reduced latency by ~100ms in benchmarks.
[GitHub](https://github.com/openai/codex/pull/26272)

## Feature Request Clusters
- **Phone number recovery and authentication flexibility**
  Multiple issues (#25749, #25820, #25828, #25765) describe users locked out because phone verification cannot be bypassed or the number changed. No alternative recovery path exists for Google OAuth users.
- **Linux desktop app native support**
  The single most upvoted feature (#11023, 455 👍) is a native Linux Codex app, with users citing poor performance or battery drain on macOS as secondary motivators.
- **Conversation history and archiving**
  Several requests demand showing archived chats alongside active ones (#20732), preventing automatic purging of old conversations (#21128), and recovering history after updates (#23979).
- **Windows platform stability**
  Reports include sandbox initialization failures (#24259), UI rendering bugs (#25249), and overall sluggish performance (#23198). The Windows user base is vocal about quality gaps.
- **Token usage transparency and limits**
  Beyond #14593 (fast token burn), #24818 reports usage draining while idle, and #24449 shows “remote compact task” errors. Users want clear breakdowns and controls.

## Developer Pain Points
- **Authentication lockouts** – No way to update a phone number or skip SMS verification when the original number is lost. This affects both Desktop and CLI users.
- **Token consumption without user action** – Several reports of plan limits being drained during idle periods or after closing the app, causing unexpected billing.
- **Conversation data loss/disappearance** – After app updates or once a project exceeds 50 conversations, history becomes invisible or inaccessible in the UI, despite existing locally.
- **Windows-specific regressions** – Sandbox failures on ARM64, slow UI, and rendering bugs on maximized windows are ongoing frustrations.
- **Mac performance issues** – The top Linux request (#11023) is partly driven by “almost unusable” performance on Mac laptops (referencing a separate issue #10432).
- **TUI copy limitations** – Multiline and soft-wrapped output copies incorrectly, breaking commands and HEREDOCs (#12200).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest – 2026-06-04

## Today's Update Brief
A single patch release (`v0.46.0-preview.1`) was published, cherry-picking a fix from a development branch. Community activity remains high: 50 issues and 50 PRs were updated in the last 24 hours, with heavy focus on agent reliability, memory system quality, and security hardening. Several P1 bugs and two security-related PRs are under active review.

## Releases
- **[v0.46.0-preview.1](https://github.com/google-gemini/gemini-cli/releases/tag/v0.46.0-preview.1)** – Cherry-pick of commit `e4315b3` to patch the `v0.46.0-preview.0` release line. No detailed changelog beyond the PR link.

## Hot Issues
_Picked from open issues (updated in last 24h) with highest priority and community impact._

1. **[#24353] Robust component level evaluations**
   _[OPEN, priority/p1, area/agent, epic]_
   Follow-up to the behavioral eval framework. 76 eval tests generated so far, covering 6 supported Gemini models.
   [Link](https://github.com/google-gemini/gemini-cli/issues/24353)

2. **[#22745] Assess impact of AST-aware file reads, search, and mapping**
   _[OPEN, priority/p2, area/agent, investigation]_
   Exploring whether AST-based tools (e.g., tilth, glyph) can reduce token usage and improve code navigation.
   [Link](https://github.com/google-gemini/gemini-cli/issues/22745)

3. **[#22323] Subagent recovery after MAX_TURNS reported as GOAL success**
   _[OPEN, priority/p1, kind/bug]_
   `codebase_investigator` subagent claims success despite hitting its turn limit, hiding actual failures. Users report misleading status reports.
   [Link](https://github.com/google-gemini/gemini-cli/issues/22323)

4. **[#21968] Gemini does not use skills and sub-agents enough**
   _[OPEN, priority/p2, kind/customer-issue]_
   Custom skills and sub-agents are ignored by default; users must explicitly instruct the model to use them, even for related tasks.
   [Link](https://github.com/google-gemini/gemini-cli/issues/21968)

5. **[#25166] Shell command execution gets stuck with "Waiting input" after command completes**
   _[OPEN, priority/p1, area/core, bug]_
   Simple shell commands (e.g., `ls`) hang, showing "Awaiting user input" even after the child process exits. Affects all platforms.
   [Link](https://github.com/google-gemini/gemini-cli/issues/25166)

6. **[#21983] Browser subagent fails in Wayland**
   _[OPEN, priority/p1, agent/browser, bug]_
   The `browser_agent` crashes or fails to initialize under Wayland display servers. Affects Linux users.
   [Link](https://github.com/google-gemini/gemini-cli/issues/21983)

7. **[#26525] Add deterministic redaction and reduce Auto Memory logging**
   _[OPEN, priority/p2, area/security]_
   Auto Memory sends transcript content to the model before redaction; sensitive data may be logged. Requires pre-moderation redaction.
   [Link](https://github.com/google-gemini/gemini-cli/issues/26525)

8. **[#26523] Surface or quarantine invalid Auto Memory inbox patches**
   _[OPEN, priority/p2, area/agent]_
   Silently skipped malformed patches remain in the pending inbox, causing repeated background extraction attempts.
   [Link](https://github.com/google-gemini/gemini-cli/issues/26523)

9. **[#26522] Stop Auto Memory from retrying low-signal sessions indefinitely**
   _[OPEN, priority/p2, area/agent]_
   Sessions the extraction agent chooses to skip are never marked processed, leading to infinite retries.
   [Link](https://github.com/google-gemini/gemini-cli/issues/26522)

10. **[#22672] Agent should stop/discourage destructive behavior**
    _[OPEN, priority/p2, kind/customer-issue]_
    Model occasionally uses `git reset --force` or unsafe commands when safer alternatives exist. Users request built-in safety guards.
    [Link](https://github.com/google-gemini/gemini-cli/issues/22672)

## Key PR Progress
_Selected for importance (security, P1 fixes, architectural changes)._

1. **[#27301] fix(core): avoid duplicate home workspace commands**
   _[CLOSED, priority/p2]_ – Compares canonical path spellings (including Windows short names) to prevent duplicate command loading.
   [Link](https://github.com/google-gemini/gemini-cli/pull/27301)

2. **[#27502] fix(core): resolve P1 crash during terminal resize (ioctl EBADF)**
   _[OPEN, priority/p1]_ – Fixes race condition between PTY teardown and React resize callback causing `EBADF` crash.
   [Link](https://github.com/google-gemini/gemini-cli/pull/27502)

3. **[#27473] fix(security): resolve hostnames before private-IP check in isBlockedHost**
   _[OPEN]_ – Hostnames resolving to private IPs bypassed the block check; now resolves via DNS before comparison.
   [Link](https://github.com/google-gemini/gemini-cli/pull/27473)

4. **[#27474] fix(core): guard isFunctionCall/isFunctionResponse against empty parts**
   _[OPEN, priority/p2]_ – `Array.prototype.every([])` returns `true`, causing false positives when `parts` is empty.
   [Link](https://github.com/google-gemini/gemini-cli/pull/27474)

5. **[#27472] fix(ui): enforce truncation lockout for tool confirmations to prevent IPI**
   _[OPEN, priority/p1, security]_ – Mitigates indirect prompt injection by requiring users to expand truncated content before approving tool calls.
   [Link](https://github.com/google-gemini/gemini-cli/pull/27472)

6. **[#23307] refactor(core): prompt snippets into layered architecture**
   _[CLOSED, priority/p1]_ – Modular, type-safe prompt architecture using the `promptTemplating` DSL.
   [Link](https://github.com/google-gemini/gemini-cli/pull/23307)

7. **[#27505] Prevent extra spaces on width-0 CJK continuation cells**
   _[OPEN, priority/p2]_ – Fixes terminal rendering bug where extra whitespace is injected between wide characters, affecting CJK users.
   [Link](https://github.com/google-gemini/gemini-cli/pull/27505)

8. **[#27659] fix(cli): prevent path traversal during skill install, link, and uninstall**
   _[OPEN, size/m]_ – Closes three path traversal vulnerabilities in the skill management subsystem.
   [Link](https://github.com/google-gemini/gemini-cli/pull/27659)

9. **[#27619] fix(core): implement atomic update in MCP tool discovery**
   _[OPEN]_ – Prevents "tool not found" errors during transient network drops by retaining the last known tool list.
   [Link](https://github.com/google-gemini/gemini-cli/pull/27619)

10. **[#25786] feat(cli): enhance /copy command with index support and tool result text**
    _[OPEN, help wanted]_ – Allows ` /copy N` to copy the Nth most recent AI response and includes MCP tool output.
    [Link](https://github.com/google-gemini/gemini-cli/pull/25786)

## Feature Request Clusters
- **Auto Memory Quality**: Multiple open issues (#26525, #26523, #26522) seek deterministic redaction, quarantining invalid patches, and preventing infinite retries on low-signal sessions.
- **Agent Safety & Guardrails**: Requests for the model to avoid destructive commands (#22672), and to respect configuration overrides (e.g., `maxTurns` for the browser agent, #22267).
- **AST-Aware Tooling**: Investigation into AST-based file reads, search, and codebase mapping (#22745, #22746) to reduce token waste and improve navigation.
- **Sandbox & Security Configuration**: Proposals for an interactive sandbox setup wizard (#22406) and a `LocalSandboxManager` implementation (#22394) to simplify security policy configuration.
- **Git Integration & Sub-agent Usage**: Users want the model to automatically leverage custom skills (#21968) and to handle complex git operations with safer defaults (#22672).

## Developer Pain Points
- **Shell execution hangs** – P1 bug (#25166) where trivial commands hang indefinitely, blocking the UI.
- **Subagent false success** – Subagents report `GOAL` even after hitting MAX_TURNS (#22323), making debugging difficult.
- **Browser agent compatibility** – Fails on Wayland (#21983) and ignores `settings.json` overrides (#22267).
- **Agent unwilling to use tools** – Custom skills and sub-agents are rarely invoked autonomously (#21968).
- **Quota disparity** – Ultra subscribers report significantly lower CLI quota vs. Antigravity IDE (#22492, closed but unresolved).
- **Memory system issues** – Auto Memory shows a cluster of bugs (infinite retries, silent skips, pre-moderation data exposure) (#26516 tracking).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-04

## Today’s Update Brief
No new releases were published in the last 24 hours. Issue activity remained high, with 30 items updated — many centered on keyboard input (CJK, German layout, paste), hook/plugin configuration, and terminal rendering bugs on Windows and Linux. One pull request was opened, but it appears to be a test/spam submission.

## Releases
*None today.*

## Hot Issues (10 selected)
1. **#1481 – Shift+Enter executes instead of inserting line break** (Closed, 24 comments)
   [Link](https://github.com/github/copilot-cli/issues/1481)
   *Workflow:* Prompt editing. Standard chat convention (Shift+Enter = newline) broken; Ctrl+Enter used instead.
   *Impact:* Mild but persistent annoyance for power users. 14 👍.

2. **#892 – Sandbox mode to restrict file access** (Open, 10 comments, 49 👍)
   [Link](https://github.com/github/copilot-cli/issues/892)
   *Workflow:* Security-sensitive environments. Request to constrain Copilot CLI’s filesystem to a specific working directory.
   *Impact:* High interest from enterprise users; currently no built-in sandbox.

3. **#1733 – Paste not working in PowerShell/CMD** (Closed, 9 comments)
   [Link](https://github.com/github/copilot-cli/issues/1733)
   *Workflow:* Windows terminal usage. Right-click paste inserts garbage; standard paste broken after reboot.
   *Impact:* Blocks basic input on Windows.

4. **#1999 – Cannot type `@` on German keyboard (AltGr+Q)** (Open, 8 comments)
   [Link](https://github.com/github/copilot-cli/issues/1999)
   *Workflow:* Non-US keyboard layouts. `@` is essential for commands, making CLI “unusable” for affected users.
   *Impact:* Critical for German-speaking developers.

5. **#3539 – System/Tools consume 73% of context window (146k/200k) on first message** (Open, 5 comments)
   [Link](https://github.com/github/copilot-cli/issues/3539)
   *Workflow:* Multi-MCP-server / plugin setups. Auto-compaction triggered immediately, reducing usable context.
   *Impact:* Degraded model performance for advanced plugin users.

6. **#3594 – 400 WebSocket error during iOS streaming** (Open, 1 comment)
   [Link](https://github.com/github/copilot-cli/issues/3594)
   *Workflow:* Mobile Copilot CLI (iOS). Short commands like `go` fail with `ApiIdParam id exceeds 64 chars`.
   *Impact:* Blocks basic use on iOS.

7. **#3659 – CLI cannot execute hooks shipped with plugins (Windows)** (Open, 2 comments)
   [Link](https://github.com/github/copilot-cli/issues/3659)
   *Workflow:* Plugin developers. PreToolUse hooks fail due to script path issues in v1.0.57.
   *Impact:* Breaks all prompts for users with governance hooks.

8. **#3664 – Hook `cwd` field does not expand `~` (Windows)** (Open, 0 comments)
   [Link](https://github.com/github/copilot-cli/issues/3664)
   *Workflow:* Plugin configuration. Literal `~` in `cwd` causes script-not-found errors.
   *Impact:* Silent blocker for hooks relying on home directory.

9. **#3536 – CJK characters visually overlapped in input box on Windows** (Open, 1 comment, 2 👍)
   [Link](https://github.com/github/copilot-cli/issues/3536)
   *Workflow:* Mixed CJK/English prompts. Submitted text appears garbled even though buffer is correct.
   *Impact:* Display bug affecting Asian-language users.

10. **#3648 / #3650 / #3654 – Multiple CJK rendering regression reports** (All closed, 1 comment each)
   [Links](https://github.com/github/copilot-cli/issues/3648), [3650](https://github.com/github/copilot-cli/issues/3650), [3654](https://github.com/github/copilot-cli/issues/3654)
   *Workflow:* Input after space, Chinese text invisible, layout corruption.
   *Impact:* Widespread input display issues for CJK users since v1.0.55.

## Key PR Progress
Only one pull request was updated in the last 24 hours:
- **#3651 – Create xcopilotcli** (Open, 0 comments, 0 👍)
  [Link](https://github.com/github/copilot-cli/pull/3651)
  *Note:* This appears to be a test/placeholder PR (empty description, no code changes). No substantive PR activity today.

## Feature Request Clusters
- **Sandbox / Security Isolation** (#892, #3664) – Requests to restrict CLI file access to a project directory and expand tilde in hook paths.
- **Session Management** (#3645, #2303) – Auto-naming terminal sessions from conversation context and reliable session resume by ID.
- **Keyboard Interrupts** (#3607, #3587) – Binding Esc or Ctrl+C to cancel streaming responses.
- **Token Usage Transparency** (#3612) – Request to show input vs. output token breakdown alongside total tokens.
- **Voice Input** (#3663) – Support for voice dictation on linux-arm64 (e.g., Windows ARM running WSL).

## Developer Pain Points
- **CJK / Non-US Keyboard Input** – Six distinct issues today (1999, 3536, 3648, 3650, 3654, 3663) highlight persistent problems with German layout `@` key, Chinese character rendering, and missing input display. This is the most frequent complaint cluster.
- **Windows Clipboard & Paste** – #3172 (“Somebody else is owning the clipboard”) and #3622 (silent copy failure) show clipboard handling remains fragile.
- **Plugin/Hook Execution** – #3659, #3664, #3665 (postToolUse not dispatched for `web_fetch`) indicate hook infrastructure is still maturing, with script resolution and event dispatch gaps.
- **Context Window Management** – #3539 and #3542 (enterprise MCP allowlist exceeding limit) reveal that tool/plugin schemas can consume too much context, triggering compaction loops and reducing effective session length.
- **Fish Shell Compatibility** – #3619 (Bash exit-code sentinel breaks in fish) shows non-bash shells are not fully supported in tool execution.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-04

## Today's Update Brief
Activity is moderate today with 8 issues and 1 pull request receiving updates in the last 24 hours. No new releases were published. Key discussions center on UX regressions in scroll behavior, session state management bugs, and feature requests around project-level organization and input block editing.

## Releases
No new releases in the last 24 hours. Latest available version remains 1.46.0.

## Hot Issues

1. **[Bug] Auto-scroll to bottom on scrolling through completed conversations**
   `#2422` — [View](https://github.com/MoonshotAI/kimi-cli/issues/2422)
   **Affected workflow:** After a conversation finishes, any attempt to manually scroll upward to review earlier output is immediately overridden by a forced scroll-to-bottom.
   **Impact:** High — breaks review of long code outputs.
   **Community reaction:** New issue, no comments yet.

2. **[Bug] Session resume overrides newly generated system prompt**
   `#2420` — [View](https://github.com/MoonshotAI/kimi-cli/issues/2420)
   **Affected workflow:** Resuming an old session loads a stale `_system_prompt` from `context.jsonl`, overriding the freshly generated prompt from `load_agent()`. This prevents newly added skills or config changes from taking effect.
   **Impact:** High — degrades reliability of skill-based customizations.
   **Community reaction:** No comments; detailed debugging steps provided by author.

3. **[Bug] Kimi Web: cannot copy content inside code/output boxes**
   `#2419` — [View](https://github.com/MoonshotAI/kimi-cli/issues/2419)
   **Affected workflow:** In the browser-based web UI, users cannot select and copy text from rendered output boxes; paste also fails.
   **Impact:** Medium — hampers basic text interaction.
   **Community reaction:** New, no comments.

4. **[Enhancement] Need project model for session grouping**
   `#2421` — [View](https://github.com/MoonshotAI/kimi-cli/issues/2421)
   **Request:** Allow sessions to be grouped into projects with shared memory and a database index to reduce token usage.
   **Impact:** Medium — addresses power-user organization needs.
   **Community reaction:** New; author references Kimi web experience.

5. **[Enhancement] Replay mode disliked for web session switching**
   `#2418` — [View](https://github.com/MoonshotAI/kimi-cli/issues/2418)
   **Request:** Disable automatic replay when switching sessions in web mode; users want to avoid re-scrolling through history.
   **Impact:** Medium — UX friction for frequent session switchers.
   **Community reaction:** New, no comments.

6. **[Closed Enhancement] Slash commands should execute immediately on selection**
   `#751` — [View](https://github.com/MoonshotAI/kimi-cli/issues/751)
   **Affected workflow:** Currently, pressing Enter to select a slash command requires a second Enter press to execute.
   **Impact:** Low (UX polish).
   **Community reaction:** 5 comments; closed after discussion.

7. **[Closed Enhancement] Treat pasted image + text placeholders as a single block**
   `#1847` — [View](https://github.com/MoonshotAI/kimi-cli/issues/1847)
   **Request:** In prompt input, images and pasted-text placeholders should be treated as atomic blocks for cursor navigation and deletion.
   **Impact:** Medium — reduces accidental partial deletion.
   **Community reaction:** No comments; closed with linked PR #1848.

8. **[Closed Bug] ACP protocol playback: session history not displayed**
   `#2306` — [View](https://github.com/MoonshotAI/kimi-cli/issues/2306)
   **Issue:** In both `kimi acp` (Zed integration) and `kimi web` modes, session history is empty after restart or session switch.
   **Impact:** High — makes long-running sessions unreviewable.
   **Community reaction:** No comments; closed after analysis.

## Key PR Progress

1. **[Closed] PR #1848: Edit image and pasted-text placeholders as blocks**
   [View](https://github.com/MoonshotAI/kimi-cli/pull/1848)
   **What it does:** Implements the feature requested in #1847 — makes image and pasted-text placeholders behave as atomic blocks in the prompt input field.
   **Status:** Closed. Resolves a long-standing UX pain point for multimodal inputs.

## Feature Request Clusters

- **Project-level session management** — Multiple users (e.g., #2421) want to group related sessions into projects with shared memory and indexing to optimize token usage. This echoes earlier requests for better session organization.
- **Input block atomicity** — Requests from #751 and #1847 (now resolved via PR #1848) show users want fewer keystrokes and more predictable selection/deletion behavior for complex prompt inputs containing images and commands.
- **Web UI improvements** — Issues #2418 and #2419 indicate friction in the browser-based interface around replay behavior and content copying.

## Developer Pain Points

- **Session state management bugs** — Issues #2420 and #2422 highlight that session resume and output scrolling behaviors are not reliably preserving user intent. The stale system prompt override (#2420) in particular undermines confidence in skill/config updates.
- **Cross-mode inconsistency** — The web UI (kimi web) introduces unique bugs (copy failure #2419, replay annoyance #2418) that are not present in the terminal version, pointing to incomplete parity between UIs.
- **Lack of project-level memory sharing** — Without a project model (#2421), power users working on complex multi-session tasks face higher token costs and fragmented context.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-04

## Today’s Update Brief

No new releases were published in the last 24 hours. Community discussion remains active around voice input, clipboard support on Linux/Windows, and provider configuration issues. The maintainers merged several fixes, including a workaround for the `shift+enter` keybinding (closed after 126 comments). A handful of new PRs target session reliability, MCP notification bridging, and command registry improvements.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

### 1. [#1505 – shift+enter keybinding not working (CLOSED)](https://github.com/anomalyco/opencode/issues/1505)
**Affected workflow:** TUI input field – users expecting a newline insert with `Shift+Enter` saw no response. The alternative `Ctrl+J` worked.
**Community reaction:** 126 comments and 101 👍; the issue was closed, implying a fix or workaround has been merged.

### 2. [#4695 – Speech-to-Text Voice Input for Lazy People](https://github.com/anomalyco/opencode/issues/4695)
**Request:** Voice input via microphone in OpenCode, including streaming transcription, punctuation, and command-mode integration.
**Community reaction:** 33 comments, 161 👍 – one of the most upvoted feature requests. Has spawned related plugin extensibility discussions (#17425).

### 3. [#16017 – Go plan usage/balance API endpoint](https://github.com/anomalyco/opencode/issues/16017)
**Request:** Public API endpoint to expose Go plan subscription usage data (rolling, weekly, monthly windows), as currently only shown in the dashboard.
**Community reaction:** 13 comments, 40 👍. Author suggests it would help with automation and monitoring.

### 4. [#29992 – Auto-scroll stops working after manual scroll](https://github.com/anomalyco/opencode/issues/29992)
**Affected workflow:** When the assistant streams a response, scrolling up to read earlier content then returning to the bottom breaks auto-scroll; new content loads but viewport stays.
**Community reaction:** 11 comments, 14 👍. Recent bug (created 2026-05-30), no fix yet.

### 5. [#29548 – OpenAI provider headers timeout after 10000ms on v1.15.11](https://github.com/anomalyco/opencode/issues/29548)
**Affected workflow:** Upgrading OpenCode via Homebrew caused all OpenAI API requests to fail with `Provider response headers timed out after 10000ms`. Increasing `headerTimeout` locally resolved it.
**Community reaction:** 10 comments, 0 👍. Identified as a regression.

### 6. [#12595 – Windows: Ctrl+C/Ctrl+V clipboard not working](https://github.com/anomalyco/opencode/issues/12595)
**Affected workflow:** On Windows 10 CMD, standard clipboard shortcuts do not work inside OpenCode, while other apps (Notepad) work fine.
**Community reaction:** 7 comments, 0 👍. Persistent issue since v1.1.53.

### 7. [#26338 – Add CommandCode as a Provider](https://github.com/anomalyco/opencode/issues/26338)
**Request:** Support for [commandcode.ai](https://commandcode.ai/) as an authentication provider in OpenCode.
**Community reaction:** 7 comments, 10 👍. Author notes it could lower costs for some users.

### 8. [#12800 – macOS clipboard fallback (pbcopy)](https://github.com/anomalyco/opencode/issues/12800)
**Affected workflow:** The CLI clipboard helper only checks for `xclip`, which is not available on macOS without X11. Suggests adding a `pbcopy` fallback.
**Community reaction:** 7 comments, 7 👍.

### 9. [#17425 – Plugin extensibility gaps blocking dictation/voice input plugins](https://github.com/anomalyco/opencode/issues/17425)
**Request:** Implementing voice input as a plugin is currently blocked because the plugin system lacks hooks for microphone access or streaming transcription. Directly relates to #4695.
**Community reaction:** 6 comments, 0 👍, but high relevance to the most popular feature request.

### 10. [#30611 – Sessions fail on transient network errors instead of retrying](https://github.com/anomalyco/opencode/issues/30611)
**Affected workflow:** Only `ECONNRESET` is treated as retryable; other transient transport failures cause a hard error, killing the assistant turn.
**Community reaction:** 3 comments, 0 👍. Identified as a reliability gap.

---

## Key PR Progress

### 1. [#30660 – fix(app,ui): session review reactivity and VCS query cache](https://github.com/anomalyco/opencode/pull/30660)
Refactors session review diff iteration to use a file-keyed map for reliable reactivity, removes stale time on VCS queries, and adds debug logging.

### 2. [#30658 – feat(acp): emit plan session updates from todowrite tool calls](https://github.com/anomalyco/opencode/pull/30658)
Ensures that plans modified via `todowrite` tool calls are rendered in OpenCode, fixing a sync gap with the ACP protocol.

### 3. [#30632 – feat(core): add embedded v2 session runtime and tool foundation](https://github.com/anomalyco/opencode/pull/30632)
Draft PR building the Effect-native embedded OpenCode V2 runtime for local-first consumers like OpenCord, with durable session event model and location-scoped graphs.

### 4. [#23407 – [beta] feat: desktop WSL onboarding + happy experience](https://github.com/anomalyco/opencode/pull/23407)
Still open – aims to improve the desktop app experience for Windows Subsystem for Linux users.

### 5. [#30589 – fix(provider): normalize cloudflare-workers-ai mixed message content](https://github.com/anomalyco/opencode/pull/30589)
Fixes #30381: Cloudflare Workers AI rejects requests when message content mixes string and array formats; normalizes to array.

### 6. [#30591 – fix(app): inject OPENCODE_VERSION into web UI bundle at build time](https://github.com/anomalyco/opencode/pull/30591)
Fixes #24286: After CLI upgrade, the web UI showed a stale version. This injects the version during build so the UI reflects the actual binary.

### 7. [#30654 – docs(tui): document command palette toggle options](https://github.com/anomalyco/opencode/pull/30654)
Adds documentation for TUI command palette toggles (scrollbar, username, etc.), closing #30651.

### 8. [#30644 – fix(app): improve desktop session tabs](https://github.com/anomalyco/opencode/pull/30644)
Reserves close-button width, keeps subagent routes attached to root tab, and makes session tab metadata reactive for renamed sessions.

### 9. [#30650 – fix(session): inherit parent directory + workspaceID in subagent sessions](https://github.com/anomalyco/opencode/pull/30650)
Fixes #30355: In HTTP server mode, subagent sessions now inherit the parent’s directory and workspace ID instead of defaulting to the daemon’s working directory.

### 10. [#29977 – fix(core): include git store hash in project ID to distinguish independent clones](https://github.com/anomalyco/opencode/pull/29977)
Previously, independent clones of the same repo shared the same project ID and merged sandboxes. Now the ID includes a short hash of the git store path.

---

## Feature Request Clusters

### Voice Input & Dictation
- **#4695** (Speech-to-Text) and **#17425** (plugin extensibility gaps) dominate. Users want microphone-based input with streaming transcription and punctuation. The plugin system currently lacks hooks for audio capture, so a core integration may be needed before plugins can implement it.

### Provider & Plan API Extensions
- **#26338** (CommandCode as provider), **#16017** (Go plan usage API endpoint), and **#24313** (Azure missing `xhigh` variation) show demand for broader provider support and more granular API access for billing/monitoring.

### Platform Input/Output Consistency
- **#12595** (Windows clipboard), **#12800** (macOS clipboard fallback), and **#24817** (Ctrl+Z suspends on Linux) reflect ongoing friction across operating systems. Users expect standard keyboard shortcuts to work natively without configuration.

### Agent & Command Configuration
- **#14240** (configurable search paths for commands/agents) and **#29626** (agent presets) request more flexible setup for subagents and command definitions, similar to existing skill configuration.

---

## Developer Pain Points

- **Clipboard unreliability:** Windows and macOS users cannot rely on standard copy/paste shortcuts. The CLI clipboard helper only supports xclip, leaving macOS users without a native fallback.
- **Auto-scroll fragility:** The streaming auto-scroll breaks after manual intervention, a common UX complaint in chat-based tools.
- **Provider timeout regression:** The OpenAI provider timeout change in v1.15.11 broke setups for multiple users, forcing manual headerTimeout increases.
- **MCP configuration mismatch:** MCP servers configured globally work in CLI but fail to load in the desktop app (#30655), and the UI sometimes shows “No MCPs configured” despite valid global config (#30125).
- **Session reliability:** Transient network errors can kill an entire assistant turn (#30611), and token usage can grow unbounded, causing context-window failures (#30649). Both erode trust in long-running sessions.
- **Scam/confusion around plans:** Two reports (#28226, #30619) indicate users were frustrated after purchasing the “Go” plan but receiving keys that only worked with other products (Zen) or failing to work at all. This suggests a need for clearer onboarding and key validation.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-04

## Today's Update Brief
Today marks the release of **v0.17.1** stable and a corresponding nightly build, alongside ~33 active Issues and ~50 Pull Requests in the last 24 hours. Community discussion is concentrated on model provider configuration pain points, daemon-mode observability improvements, and several UI/UX bugs in the terminal and web-shell interfaces.

## Releases
- **[v0.17.1-nightly.20260604.16dd99fa3](https://github.com/QwenLM/qwen-code/releases/tag/v0.17.1-nightly.20260604.16dd99fa3)** — Nightly release from the v0.17.1 branch. Contains only a CI chore commit (PR [#4742](https://github.com/QwenLM/qwen-code/pull/4742)).
- **[v0.17.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.17.1)** — Stable release. Includes the v0.17.0 changelog and a fix from [@doudouOUC](https://github.com/doudouOUC): “fix(rewind): false ‘compressed turn’ error when mid-turn messages exist” ([PR#4626](https://github.com/QwenLM/qwen-code/pull/4626)).

## Hot Issues

1. **[#3384 — Unable to add OpenAI-compatible local LLM](https://github.com/QwenLM/qwen-code/issues/3384)** (12 comments)
   *Workflow affected:* Setting up a local Qwen3.6-35B-A3B with VLLM at `localhost:8000/v1`. The user followed official docs for `~/.qwen/settings.json` but cannot connect.
   *Impact:* Blocks users running self-hosted models; this is the most-commented open issue today.
   *Community:* Multiple users seeking guidance; maintainer responses needed.

2. **[#4493 — Rider IDE login failure (rider无法登录qwen code)](https://github.com/QwenLM/qwen-code/issues/4493)** (10 comments)
   *Workflow affected:* JetBrains Rider IDE integration — OAuth redirect loop when trying to authenticate.
   *Impact:* Blocks IDE plugin usage for Chinese-language users on Rider.
   *Community:* User reports redirect loop; maintainers have not yet resolved.

3. **[#4722 — Statusline shows model id instead of name; model id used as unique key blocks multi-key setups](https://github.com/QwenLM/qwen-code/issues/4722)** (5 comments)
   *Workflow affected:* Status bar display — raw model ID (e.g. `qwen3-coder-plus`) shown instead of human-readable name (`Qwen3 Coder Plus`).
   *Impact:* Degraded UX for users with multiple model configurations.
   *Community:* Moderately discussed; a fix PR ([#4741](https://github.com/QwenLM/qwen-code/pull/4741)) is already open.

4. **[#4554 — feat(telemetry): cover qwen serve daemon end-to-end with OpenTelemetry](https://github.com/QwenLM/qwen-code/issues/4554)** (4 comments)
   *Workflow affected:* `qwen serve` daemon — lacks OpenTelemetry coverage for HTTP routing, session lifecycle, bridge queueing, and ACP child process management.
   *Impact:* Production observability gap for daemon mode users.
   *Community:* Originated from [@doudouOUC](https://github.com/doudouOUC); linked to PR [#4749](https://github.com/QwenLM/qwen-code/pull/4749).

5. **[#4743 — Shell command not working (shell command not work.)](https://github.com/QwenLM/qwen-code/issues/4743)** (4 comments)
   *Workflow affected:* Shell command execution — commands suddenly return signal 1, then “Command produced no output”, then hang indefinitely for 1+ hour.
   *Impact:* Critical for interactive coding workflows.
   *Community:* User reports regression; no maintainer response yet.

6. **[#4218 — MCP Server “filesystem” shows connected but tools not available to model](https://github.com/QwenLM/qwen-code/issues/4218)** (4 comments)
   *Workflow affected:* MCP filesystem server on Windows — UI shows connected but model cannot invoke file operations.
   *Impact:* Windows users cannot leverage MCP filesystem tools.
   *Community:* User tested multiple settings files without success.

7. **[#4727 — Dual Output mode TUI unresponsive (Dual Output模式运行TUI无响应)](https://github.com/QwenLM/qwen-code/issues/4727)** (3 comments)
   *Workflow affected:* `qwen --json-file ... --input-file ...` mode — terminal entirely unresponsive after writing input to FIFO.
   *Impact:* Blocks advanced scripting and pipeline usage.
   *Community:* User reports 0.17.0 regression.

8. **[#4747 — Feature: Support global user-level auto-memory at ~/.qwen/memories/](https://github.com/QwenLM/qwen-code/issues/4747)** (3 comments)
   *Workflow affected:* Auto-memory is per-project only; user preferences (working style, background) must be re-learned per project.
   *Impact:* Pain point for multi-project power users who want Claude-like persistent user memory.
   *Community:* Request well-received; 3 comments in its first day.

9. **[#4729 — Runtime snapshot prefix leaks into settings.model.name, stacks on restart, causes 404](https://github.com/QwenLM/qwen-code/issues/4729)** (3 comments)
   *Workflow affected:* OpenAI-compatible provider configuration — internal runtime snapshot ID corrupts `model.name` in `settings.json`, appending a new prefix on each restart.
   *Impact:* Leads to “model does not exist” (404) errors that worsen after each restart.
   *Community:* Details root cause clearly; a fix PR ([#4734](https://github.com/QwenLM/qwen-code/pull/4734)) is already open.

10. **[#4711 — Body Timeout Error for slow self-hosted model](https://github.com/QwenLM/qwen-code/issues/4711)** (3 comments)
    *Workflow affected:* Using a slow local model (e.g. self-hosted Qwen3) — crashes at 85% with 5-minute body timeout.
    *Impact:* Timeout too short for low-end hardware or large context windows.
    *Community:* User asks for configurable timeout; no maintainer response.

## Key PR Progress

1. **[#4753 — Improve approval mode display text](https://github.com/QwenLM/qwen-code/pull/4753)**
   *Author:* [@BZ-D](https://github.com/BZ-D)
   *Status:* Open | *Comments:* 0
   *What:* Uppercases “YOLO” in UI, adds specific description for classifier-based auto mode. Minor UX polish.

2. **[#4751 — Optimize ACP child lifecycle: skip relaunch, preheat, idle keep-alive](https://github.com/QwenLM/qwen-code/pull/4751)**
   *Author:* [@doudouOUC](https://github.com/doudouOUC)
   *Status:* Open | *Comments:* 0
   *What:* Skips unnecessary grandchild process spawn, passes `--max-old-space-size` with cgroup detection, pre-spawns ACP child at daemon boot via `bridge.preheat()`. Reduces daemon cold start latency.

3. **[#4572 — Harden auto mode self-modification checks](https://github.com/QwenLM/qwen-code/pull/4572)**
   *Author:* [@qqqys](https://github.com/qqqys)
   *Status:* Open | *Comments:* 0
   *What:* Prevents auto mode from modifying Qwen Code configuration, instructions, hooks, commands, skills, and MCP config via workspace edit fast-paths. Splits classifier permissions.

4. **[#4746 — Preserve trustedFolders comments on save](https://github.com/QwenLM/qwen-code/pull/4746)**
   *Author:* [@Zoean-z](https://github.com/Zoean-z)
   *Status:* Open | *Comments:* 0
   *What:* `trustedFolders.json` now preserves existing comments and formatting when trust rules are updated, instead of rewriting with plain `JSON.stringify`.

5. **[#4533 — /skills picker dialog: browse, search, toggle, pick](https://github.com/QwenLM/qwen-code/pull/4533)**
   *Author:* [@callmeYe](https://github.com/callmeYe)
   *Status:* Open | *Comments:* 0
   *What:* Bare `/skills` opens a picker dialog for browsing, searching, toggling, and picking skills. Adds workspace-scoped `skills.disabled` setting.

6. **[#4752 — Fix multiple UI issues and ring-eviction reconnect logic](https://github.com/QwenLM/qwen-code/pull/4752)**
   *Author:* [@ytahdn](https://github.com/ytahdn)
   *Status:* Open | *Comments:* 0
   *What:* Fixes JSON-RPC error message extraction (`[object Object]` → readable), floating panel auto-scroll interruption, and ring-eviction reconnection logic.

7. **[#4677 — Fix vim mode Esc leak, Enter submit, render lag; implement missing VIM commands](https://github.com/QwenLM/qwen-code/pull/4677)**
   *Author:* [@zzhenyao](https://github.com/zzhenyao)
   *Status:* Open | *Comments:* 0
   *What:* Prevents Esc from clearing input buffer during model response, fixes Enter submit behavior, reduces render lag. Adds missing NORMAL mode commands.

8. **[#4741 — Display model name instead of id in statusline and startup banner](https://github.com/QwenLM/qwen-code/pull/4741)**
   *Author:* [@zzhenyao](https://github.com/zzhenyao)
   *Status:* Open | *Comments:* 0
   *What:* Adds `getModelDisplayName()` that resolves model ID to human-readable name from registry. Fixes Issue [#4722](https://github.com/QwenLM/qwen-code/issues/4722).

9. **[#4734 — Strip runtime snapshot prefix before persisting model.name](https://github.com/QwenLM/qwen-code/pull/4734)**
   *Author:* [@Rakson0209](https://github.com/Rakson0209)
   *Status:* Open | *Comments:* 0
   *What:* Fixes bug where runtime model selection corrupts `settings.json` `model.name`, causing 404 errors. Fixes Issue [#4729](https://github.com/QwenLM/qwen-code/issues/4729).

10. **[#4732 — Workflow tool P1: minimal node:vm sandbox + sequential agent()](https://github.com/QwenLM/qwen-code/pull/4732)**
    *Author:* [@LaZzyMan](https://github.com/LaZzyMan)
    *Status:* Open | *Comments:* 0
    *What:* Implements P1 of Dynamic Workflows port — runs model-authored JavaScript in a `node:vm` sandbox with `args`, `phase`, `log`, and sequential `agent()` globals. Addresses Issue [#4721](https://github.com/QwenLM/qwen-code/issues/4721).

## Feature Request Clusters

1. **Observability & Performance Analysis Infrastructure**
   Multiple issues request hardening of OpenTelemetry integration:
   - [#4554](https://github.com/QwenLM/qwen-code/issues/4554): End-to-end OTel coverage for `qwen serve` daemon
   - [#3731](https://github.com/QwenLM/qwen-code/issues/3731): Harden OTel configuration, HTTP OTLP behavior, and runtime safety
   - [#4617](https://github.com/QwenLM/qwen-code/issues/4617): Add CPU profiling support for Chrome DevTools analysis
   These are driven by [@doudouOUC](https://github.com/doudouOUC) and are being addressed incrementally in PRs [#4410](https://github.com/QwenLM/qwen-code/pull/4410) and [#4749](https://github.com/QwenLM/qwen-code/pull/4749).

2. **User Experience & Prompt Engineering Enhancements**
   - [#4723](https://github.com/QwenLM/qwen-code/issues/4723): Request for a rule system similar to Claude Code’s rules or Copilot’s instructions
   - [#4747](https://github.com/QwenLM/qwen-code/issues/4747): Global user-level auto-memory at `~/.qwen/memories/` (cross-project)
   - [#4714](https://github.com/QwenLM/qwen-code/issues/4714): Request to disable auto-created skills (users find them hallucinated and conflicting)
   - [#4744](https://github.com/Q

</details>