# AI CLI Tools Community Digest 2026-06-14

> Generated: 2026-06-14 02:46 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report — 2026-06-14

## 1. Daily Cross-Tool Overview

Today saw patch releases from GitHub Copilot CLI (v1.0.62, v1.0.62-2) and OpenCode (v1.17.5, v1.17.6), plus alpha releases from OpenAI Codex (rust-v0.140.0-alpha.18 and .19). Claude Code and Gemini CLI had no new releases but maintained high issue/PR activity. Kimi Code CLI and Qwen Code also had no releases, with Qwen's nightly build failing. Community discussions centered on MCP client improvements, session state management, cross-platform compatibility, and permission consistency. OpenCode and Qwen Code saw the highest PR volumes (50 each), while Claude Code and OpenCode each reported 50 open/updated issues.

## 2. Activity Comparison

| Tool | Open/Updated Issues | PRs Updated | Releases Today |
|------|---------------------|-------------|----------------|
| **Claude Code** | 50 (top 30 shown) | 3 | None |
| **OpenAI Codex** | 10 hot issues listed (total not provided) | 10 | 2 alpha |
| **Gemini CLI** | 30 | 11 | None |
| **GitHub Copilot CLI** | 5 | 0 | 2 patch |
| **Kimi Code CLI** | 2 | 5 (3 merged) | None |
| **OpenCode** | 50 | 50 | 2 patch |
| **Qwen Code** | 27 | 50 | None (nightly build failed) |

## 3. Shared Feature Directions

Requirements appearing across multiple tool communities today:

- **MCP client evolution & protocol compliance**: OpenCode (roots, streaming, capabilities negotiation – #28567, #32230), Gemini CLI (OAuth refresh, schema normalization – #27889, #27888), GitHub Copilot CLI (preload MCP tools – #3787), Kimi Code CLI (connection disconnect handling – PR #2434). All point to a broad push toward richer, more reliable MCP support.

- **Session persistence & state management**: Claude Code (persistent memory across compactions #34556, lifecycle hooks #47023), OpenAI Codex (persist side chats as child threads #26227), OpenCode (auto-save session records #1865, `/goal` persistence PR #32239), Gemini CLI (auto memory quality control – low-signal session retries #26522, patch quarantining), Qwen Code (file history follow-ups #4204, session sidebar #5074). The cluster suggests users across tools want durable, recoverable session state.

- **Cross-platform and OS-specific compatibility issues**: OpenAI Codex (Windows sandbox regression #24391/#26158, macOS malware alert #24246), Claude Code (CJK text rendering #66269, Windows Cowork bugs), Gemini CLI (Wayland browser agent failure #21983), OpenCode (UNC path issues on Windows/WSL #19473, Nix ARM build failure #32221), Qwen Code (Windows antivirus false positive #5055, zombie process TUI freeze on Linux #5083). Platform heterogeneity remains a pain point.

- **IDE integration depth & consistency**: Claude Code (VS Code auto-attach toggle #24726, JetBrains plugin request #47166), OpenAI Codex (CLion detection #19002), OpenCode (Zed review-changes unsupported #4240), Qwen Code (Feishu setup documentation PR #4983). Users increasingly demand parity between CLI and IDE experiences.

## 4. Differentiation Analysis

- **Claude Code** emphasizes persistent memory via lifecycle hooks and community-built memory solutions (e.g., #34556, #47023). The high count of permission bypass issues (#26479, #37253) and remote-control parity requests (#28379, #60385) indicate a power-user base pushing the boundaries of the agent's autonomy model.

- **OpenAI Codex** focuses on cross-platform execution infrastructure (exec-server, WSL, Windows sandbox) and rate-limit management (PRs #28118, #28143). The presence of false-positive safety checks (#28015, #27817) suggests a more restrictive security posture than other tools.

- **Gemini CLI** shows the strongest emphasis on agent evaluation and security hardening: robust component-level evaluations (#24353), deterministic secret redaction (#26525), command injection fix (PR #27575), and subagent false-success reporting (#22323). The tool context limit with many MCP tools (#24246) is a unique scaling concern.

- **GitHub Copilot CLI** differentiates through its plugin marketplace extension support (v1.0.62-2) and bring-your-own-model (BYOM) customization (#3789). Its current activity is low compared to others, but the MCP preload request (#3787) and `.copilotignore` clarification (#3785) suggest the community wants more control over tool discovery and ignore semantics.

- **Kimi Code CLI** activity is narrowly focused on stability: MCP disconnect handling, API serialization fixes, timeout adjustments. No new feature requests were observed. This suggests a tool in a maintenance/stabilization phase.

- **OpenCode** has the most intense MCP protocol compliance activity today, with 10+ PRs on roots, error handling, OAuth, and version alignment. It also stands out for the highest PR count (50) and a major new feature: `/goal` with persisted per-session goals (PR #32239). The community is heavily invested in making OpenCode MCP-spec-compliant.

- **Qwen Code** differentiates with strong community demand for migration tools (Claude Code config import #4845, Dynamic Workflows port #4721) and multi-agent orchestration (Swarm, Workflows). The OAuth free tier policy debate (#3203, 129 comments) is unique and reflects tension between free access and sustainability. Model degradation complaints (#5018, #5029) are a distinctive quality concern.

## 5. Community Activity Notes

- **Highest issue and PR volume**: OpenCode (50 issues, 50 PRs) and Qwen Code (27 issues, 50 PRs) show the most raw activity today. Both have large backlogs and active maintainer response.
- **Moderate activity**: Claude Code (50 issues, 3 PRs) has high issue volume but low PR throughput; maintenance may be bottlenecking. Gemini CLI (30 issues, 11 PRs) shows balanced triage. OpenAI Codex (10 hot issues, 10 PRs) activity is substantial but concentrated.
- **Low activity**: GitHub Copilot CLI (5 issues, 0 PRs) and Kimi Code CLI (2 issues, 5 PRs) had minimal community engagement.
- **Release cadence**: OpenCode and GitHub Copilot CLI each shipped two patches today. OpenAI Codex released two alpha builds (version bumps only). Claude Code, Gemini CLI, Kimi Code CLI, and Qwen Code had no new releases; Qwen’s nightly failed.
- **Maintainer responsiveness**: Gemini CLI closed several PRs (stack overflow fix, command injection fix). OpenCode merged many MCP-focused PRs. Kimi Code merged 3 of 5 PRs. Claude Code had no PR merges reported. Copilot CLI had no PR activity. Qwen Code had 1 PR merged (Computer Use migration) and others open.

## 6. Evidence-Backed Observations

1. **MCP client capabilities are a priority across multiple tools** – Today’s data shows OpenCode (roots, streaming, error handling PRs), Gemini CLI (OAuth refresh, schema normalization), Copilot CLI (preloading request), and Kimi Code CLI (disconnect fixes) all addressing MCP protocol gaps. This is not a single tool trend; at least four independent project communities are pushing for better MCP support.

2. **Session persistence and state recovery are recurring user needs** – Claude Code (lifecycle hooks, persistent memory), OpenAI Codex (side chat persistence), OpenCode (auto-save, goals), Gemini CLI (memory extraction fixes), and Qwen Code (file history) all feature related demands. Users want durable, inspectable, and recoverable session state.

3. **Cross-platform stability remains a widespread pain point** – Reports of Windows sandbox failures (Codex), Linux terminal corruption/tmux (Claude), Wayland browser agent failure (Gemini), Windows antivirus false positives (Qwen), and UNC path issues on Windows/WSL (OpenCode) indicate that none of the tools deliver fully consistent experiences across operating systems.

4. **Permission and safety-check inconsistency undermines trust** – Claude Code’s `bypassPermissions` issues (#26479, #37253) and OpenAI Codex’s false-positive cybersecurity flags (#28015, #27817) both describe scenarios where safety or permission systems block legitimate work or fail to apply as configured. This erodes confidence in the agent autonomy model.

5. **Agent performance degradation in long sessions is a concern across at least two tools** – Claude Code (model hallucination/confabulation #67847, #64048) and Qwen Code (model forgetfulness #5018, subjective “dumbing down” #5029) both report deteriorating agent quality over extended interactions. No clear cross-tool signal from Codex, Gemini, Copilot, Kimi, or OpenCode today.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Community Digest — 2026-06-14

### Today's Update Brief
No new releases were published in the last 24 hours. Activity remains high: 50 open/updated issues (top 30 shown) and 3 pull requests were touched. Community discussion continues to focus on persistent memory across compactions, permission bypass inconsistencies, TUI rendering bugs, and multiplatform IDE support.

### Releases
No new versions released in the last 24 hours.

### Hot Issues
1. **[#24726 – VS Code extension: setting to disable auto-attach of open file/selection](https://github.com/anthropics/claude-code/issues/24726)**
   *Enhancement, 52 comments, 159 👍*
   Users want the ability to turn off automatic context injection from active editor tabs or selections. The high upvote count indicates strong demand for finer-grained IDE integration control.

2. **[#34556 – Persistent memory across context compactions](https://github.com/anthropics/claude-code/issues/34556)**
   *Enhancement, 43 comments, 3 👍*
   After 59 documented compactions over 26 days, the reporter built a custom memory persistence system. The request for native, persistent memory between compactions is recurring across multiple issues.

3. **[#36179 – "Unsupported content type: redacted_thinking" in VS Code plugin](https://github.com/anthropics/claude-code/issues/36179)**
   *Bug, 27 comments, 18 👍*
   Windows + VS Code users encounter frequent errors with custom (non-Anthropic) API providers that use extended thinking. Blocks workflow for proxy gateway setups.

4. **[#47166 – JetBrains plugin request](https://github.com/anthropics/claude-code/issues/47166)**
   *Enhancement, 23 comments, 1 👍*
   Community voices need for a dedicated JetBrains plugin with inline chat and code actions, not just a generic AI assistant integration.

5. **[#47023 – Expose compact/session lifecycle hooks for external memory](https://github.com/anthropics/claude-code/issues/47023)**
   *Enhancement, 22 comments, 4 👍*
   Proposes official hooks so that community-built memory solutions (markdown archives, knowledge graphs) can intercept compactions instead of re-inventing the wheel.

6. **[#60385 – MCP permission prompts never surface in claude.ai/code web UI](https://github.com/anthropics/claude-code/issues/60385)**
   *Bug, 19 comments*
   When using `--remote-control`, non-read MCP tool permission prompts block the session in the local TUI but are invisible in the web UI, making the tool unusable until someone acknowledges the prompt on the host.

7. **[#29937 – Terminal rendering corruption in tmux](https://github.com/anthropics/claude-code/issues/29937)**
   *Bug, 17 comments, 38 👍*
   Text overlapping and output corruption when running under tmux on Linux. Resizing the terminal temporarily fixes it; community seeks a permanent fix.

8. **[#26479 – Agent Teams teammates ignore bypassPermissions for Bash](https://github.com/anthropics/claude-code/issues/26479)**
   *Bug, 12 comments, 14 👍*
   Agent sub-agents continue to prompt for permission even when `bypassPermissions` is set. Suggests settings inheritance gap for team members.

9. **[#37253 – bypassPermissions still prompts for edits to ~/.claude/ files](https://github.com/anthropics/claude-code/issues/37253)**
   *Bug (closed), 11 comments, 8 👍*
   Despite being in bypass mode, edits to `.claude/commands/*.md` and `.claude/rules/*.md` still trigger confirmation dialogs. Marked closed but user frustration persists (see #53888, #36497 for similar).

10. **[#28379 – Slash commands not supported in /remote-control UI](https://github.com/anthropics/claude-code/issues/28379)**
    *Enhancement, 8 comments, 44 👍*
    When using remote control from claude.ai/code or mobile, `/clear`, `/compact`, etc. are sent as plain messages. High upvote count reflects heavy remote workflow demand.

### Key PR Progress
Only three PRs were updated in the last 24 hours:

- **[#1 – Create SECURITY.md](https://github.com/anthropics/claude-code/pull/1)** (CLOSED) – Repository-level security policy file added long ago; no recent activity beyond metadata update.
- **[#68239 – feat: add project-theme plugin for per-project theme settings](https://github.com/anthropics/claude-code/pull/68239)** (OPEN) – Implements a plugin that reads `theme`/`color` from `.claude/settings.json` and applies it on session start. Closes #43216.
- **[#58673 – "s"](https://github.com/anthropics/claude-code/pull/58673)** (OPEN) – Minimal summary; unlikely to be a substantive change.

### Feature Request Clusters

- **Persistent Memory / Lifecycle Hooks**
  Multiple requests (#34556, #47023, #14227, #32627, #34192, #46138) ask for built-in persistent memory across context compactions or official hooks to enable community solutions without re-inventing transcript interception.

- **IDE Plugin Expansion**
  VS Code auto-attach disabling (#24726), dedicated JetBrains plugin (#47166), and general requests for more IDE integration features. The community wants tighter editor co-pilot experiences.

- **Permission Bypass Consistency**
  Users expect `bypassPermissions` to exempt all `.claude/` directory edits and agent team operations. Several issues (#26479, #37253, #36497, #53888) report exceptions, indicating incomplete coverage.

- **Remote Control / Web UI Parity**
  Slash commands (#28379) and MCP permission prompts (#60385) don't work in the remote/web UI. Users driving Claude Code from claude.ai or mobile need full TUI command parity.

- **Cowork on Windows**
  Multiple Windows-specific Cowork bugs (#64592 – VM service not running, #45178 – cross-device rename with OneDrive, #67780 – EventEmitter memory leak) suggest Cowork’s Windows support is maturing but still rough.

### Developer Pain Points

- **Terminal Rendering Corruption**
  tmux users (#29937) and CJK text users (#66269) experience output garbling; resizing or switching renderer required. Some reports suggest the no-flicker fullscreen renderer is the culprit.

- **Model Hallucination / Confabulation**
  Two separate reports (#67847, #64048) describe scenarios where Claude fabricates tool execution results or file contents before receiving actual tool returns. This undermines trust in tool-use chains.

- **Data Loss Risks**
  File checkpointing can silently destroy uncommitted edits (#68315 via `git stash` + `git reset --hard`). The Write tool’s full-file-replacement default (#67917) risks overwriting governed state files with no append-only option.

- **Cost Surprises**
  Workflow fan-out defaulting to premium model tier (#68285) caused ~$1k in auto-purchased charges. Lack of per-agent cost ceiling in agent teams is a concern for production use.

- **Onboarding Friction**
  Several Windows users face permission prompts even in bypass mode, OneDrive integration conflicts, and VM service failures for Cowork. These hurt initial setup experience for new users on Windows.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-14

## Today’s Update Brief
Two Rust alpha releases (0.140.0-alpha.18 and .19) landed with no public changelog. The issue tracker saw continued heat around Windows sandbox regressions, false-positive cybersecurity flags, and macOS permission failures. Pull request activity was concentrated on cross-platform exec-server improvements, plugin MCP deduplication, and the new rate-limit reset feature.

## Releases
- **[rust-v0.140.0-alpha.18](https://github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.18)** – Version bump only.
- **[rust-v0.140.0-alpha.19](https://github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.19)** – Version bump only.

## Hot Issues (10 noteworthy)

1. **#24391 – Windows sandbox: spawn setup refresh fails on Codex CLI 0.133.0**
   *Author: @Lyellr88 | Status: CLOSED | Comments: 52 | 👍 26*
   Shell commands failed after update. The issue attracted heavy community attention and was closed, likely with a fix.
   [Issue link](https://github.com/openai/codex/issues/24391)

2. **#28015 – False positive cybersecurity safety check blocks normal local repo maintenance**
   *Author: @jyongchul | Status: OPEN | Comments: 15 | 👍 0*
   A mundane `git` housekeeping task triggered the safety-check prompt, interrupting a paid session.
   [Issue link](https://github.com/openai/codex/issues/28015)

3. **#27817 – False positive cybersecurity flag on authorized finance/tax filing work**
   *Author: @jyongchul | Status: OPEN | Comments: 15 | 👍 0*
   Same user, similar scenario; legitimate tax preparation was flagged. Suggests the safety-check heuristics need refinement.
   [Issue link](https://github.com/openai/codex/issues/27817)

4. **#24428 – Codex responds too slowly**
   *Author: @ty91 | Status: OPEN | Comments: 14 | 👍 25*
   Users report latency spikes, especially when falling back from WebSocket to SSE.
   [Issue link](https://github.com/openai/codex/issues/24428)

5. **#24246 – macOS shows “Malware Blocked” alert for Codex helper**
   *Author: @GGBondBlueWhale | Status: OPEN | Comments: 11 | 👍 9*
   Codex Desktop triggers macOS malware alerts multiple times per day. No clear trigger path identified.
   [Issue link](https://github.com/openai/codex/issues/24246)

6. **#26158 – Windows sandbox regression in Codex CLI 0.138.0**
   *Author: @BaseBlank | Status: CLOSED | Comments: 10 | 👍 5*
   `CreateProcessAsUserW` failure; rollback to 0.132.0 restored functionality. Closed, likely fixed.
   [Issue link](https://github.com/openai/codex/issues/26158)

7. **#20204 – Inconsistent PreToolUse hook coverage across tool handlers**
   *Author: @Harihara04sudhan | Status: OPEN | Comments: 10 | 👍 1*
   Only `shell`, `unified_exec`, `apply_patch`, and `mcp` emit hook events; other tools are invisible to hooks.
   [Issue link](https://github.com/openai/codex/issues/20204)

8. **#18896 – Computer Use approval denied on macOS even after permissions granted**
   *Author: @james-beep-boop | Status: OPEN | Comments: 8 | 👍 1*
   `list_apps` works but Computer Use cannot control any app; reinstall and reboot did not help.
   [Issue link](https://github.com/openai/codex/issues/18896)

9. **#21134 – Codex Desktop unusable on long active threads due to memory and log churn**
   *Author: @markmdev | Status: OPEN | Comments: 5 | 👍 0*
   Long-running conversations degrade performance because the app-server logs large websocket/SSE fragments repeatedly.
   [Issue link](https://github.com/openai/codex/issues/21134)

10. **#28086 – Windows app WSL agent mode fails to find bundled CLI**
    *Author: @kangmingxuan | Status: OPEN | Comments: 5 | 👍 0*
    WSL agent mode may launch the Windows `codex.exe` instead of the native Linux CLI when `CODEX_CLI_PATH` is set incorrectly.
    [Issue link](https://github.com/openai/codex/issues/28086)

## Key PR Progress (10 important)

1. **#28148 – Add managed Amazon Bedrock login and logout** (OPEN)
   *Author: @celia-oai*
   Adds the account RPC flow for managing Amazon Bedrock credentials via Codex’s provider-scoped auth stack.
   [PR link](https://github.com/openai/codex/pull/28148)

2. **#28146 – app-server: preserve remote environment cwd** (OPEN)
   *Author: @anp-oai*
   Fixes path rewriting that broke Windows cwd when targeting a remote exec-server.
   [PR link](https://github.com/openai/codex/pull/28146)

3. **#28122 – exec-server honors remote environment cwd and shell** (OPEN)
   *Author: @anp-oai*
   Passes Windows cwd and uses native shell for remote environments, enabling real Windows process testing.
   [PR link](https://github.com/openai/codex/pull/28122)

4. **#27607 – Dedupe plugin MCPs by app declaration name** (CLOSED)
   *Author: @felixxia-oai*
   Hides plugin MCP servers when they conflict with an App declaration, part of the plugin auth-routing stack.
   [PR link](https://github.com/openai/codex/pull/27607)

5. **#27602 – Preserve plugin apps in connector listings** (OPEN)
   *Author: @felixxia-oai*
   Ensures ChatGPT/SIWC users still see plugin apps in connector listings after deduplication.
   [PR link](https://github.com/openai/codex/pull/27602)

6. **#28118 – feat(tui): add rate-limit reset redemption to `/usage`** (OPEN)
   *Author: @jayp-oai*
   Lets CLI users view and redeem personal rate-limit reset credits from the `/usage` command.
   [PR link](https://github.com/openai/codex/pull/28118)

7. **#28120 – bazel: add PowerShell to Wine test harness** (OPEN)
   *Author: @anp-oai*
   Adds x86_64 PowerShell binary to the Wine CI environment for cross-OS testing.
   [PR link](https://github.com/openai/codex/pull/28120)

8. **#28143 – feat(app-server): expose rate-limit reset credits** (OPEN)
   *Author: @jayp-oai*
   Backend API to read and redeem reset credits, foundation for the TUI flow in #28118.
   [PR link](https://github.com/openai/codex/pull/28143)

9. **#27953 – Load app-bundled internal hooks from Codex Desktop** (OPEN, code-reviewed)
   *Author: @abhinav-oai*
   Loads hooks for `openai-bundled` plugins from Desktop resources, making them forced/trusted and hiding them from review UI.
   [PR link](https://github.com/openai/codex/pull/27953)

10. **#28131 – Refresh SSH agent for app-server proxy** (OPEN)
    *Author: @abhinav-oai*
    Adds `--forward-ssh-agent` flag to refresh `SSH_AUTH_SOCK` when the launching session’s socket is stale.
    [PR link](https://github.com/openai/codex/pull/28131)

## Feature Request Clusters

- **Session persistence**
  #26227 asks to persist side chats as child threads attached to the main thread so that useful context survives app restarts and updates. (3 comments, 5 👍)

- **UI customization**
  #25431 (Windows Desktop) requests an on/off toggle for spellchecking in settings. (4 comments, 13 👍)
  #27736 reports that the “worktree” button has moved; users want to know its new location or have it restored.

- **IDE integration**
  #19002 asks for CLion detection in the macOS app, as other JetBrains IDEs are already recognized. (4 comments, 1 👍)

- **Rate-limit management**
  #26370 reports that Desktop usage-limit meters start at 99% instead of 100%, causing confusion. The new rate-limit reset feature (PRs #28118, #28143) addresses the broader need for visibility and redemption of reset credits.

## Developer Pain Points

- **Windows sandbox instability** – Multiple issues (#24391, #26158, #28086) report sandbox setup and execution failures across CLI and Desktop, forcing users to roll back to older versions.
- **False-positive safety checks** – Two issues (#28015, #27817) from the same user describe legitimate DevOps and tax work being blocked, interrupting paid sessions.
- **macOS permission problems** – Malware alerts (#24246), Computer Use denial (#18896), and EventKit TCC failures (#21228) continue to frustrate macOS users. Reinstalls and granting permissions often do not resolve.
- **Performance degradation** – Slow responses (#24428, 25 👍), long-thread memory churn (#21134), and a 15-second per-round delay in Windows CLI (#27603) make the tool feel unresponsive during extended use.
- **Hook and tool coverage gaps** – Only a handful of tool handlers emit hook events (#20204), limiting the ability to build custom observability or guardrails.
- **WSL integration fragility** – Windows Desktop users report broken WSL agent mode (#28086, #28094, #28074) with path rewriting and missing CLI resolution, especially after updates.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the Gemini CLI community digest for 2026-06-14.

---

## Gemini CLI Community Digest – 2026-06-14

### 1. Today's Update Brief
No new releases or pre-releases were published in the last 24 hours. However, the project saw high activity on issue triage and PR merging, with 30 open issues and 11 pull requests receiving updates. The focus remains on stabilizing the agent and core subsystems, addressing critical bugs (e.g., shell hangs, MCP OAuth, command injection), and closing out older items from the `workstream-rollup` queue.

### 2. Releases
*None. No new versions were released in the last 24 hours.*

### 3. Hot Issues
The following 10 issues are particularly noteworthy based on community engagement, impact, or maintainer priority.

1.  **Robust Component-Level Evaluations** ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353)) – `priority/p1`, `area/agent`. This EPIC tracks the evolution of behavioral eval tests from pilot to production. It highlights the need for a more structured evaluation framework for agent components. *Impact: Internal quality infrastructure; low community reaction (0 👍).*

2.  **AST-Aware File Reads, Search, and Mapping** ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745)) – `priority/p2`, `area/agent`. An EPIC investigating whether AST-aware tool calls reduce token consumption and turn misalignment when reading code methods. *Impact: Could significantly improve context efficiency for code tasks. Community interest: 1 👍.*

3.  **Subagent Recovery After MAX_TURNS Reported as GOAL Success** ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)) – `priority/p1`, `kind/bug`. The `codebase_investigator` subagent falsely reports "GOAL" success after hitting the maximum turn limit. This misleading status hides actual failures. *Impact: Untrustworthy agent logging. Community frustration: 2 👍.*

4.  **Gemini Does Not Use Skills and Sub-Agents Enough** ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)) – `priority/p2`, `kind/bug`. The model often ignores user-defined skills and sub-agents (e.g., for Gradle, Git) unless explicitly commanded, limiting the value of custom extensions. *Impact: Reduces the utility of the skill system. Community reaction: 6 comments.*

5.  **Add Deterministic Redaction and Reduce Auto Memory Logging** ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)) – `priority/p2`, `area/security`. Currently, secrets are sent to the model before being redacted by the extraction prompt. This asks for pre-context redaction to improve data security. *Impact: Security-critical, especially for enterprise users.*

6.  **Stop Auto Memory from Retrying Low-Signal Sessions Indefinitely** ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)) – `priority/p2`, `kind/bug`. A session that the extraction agent skips (deeming it low-signal) remains unprocessed and is repeatedly surfaced, causing infinite retries. *Impact: Wasted compute and noisy memory system.*

7.  **Shell Command Execution Gets Stuck with "Waiting input"** ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)) – `priority/p1`, `kind/bug`. Gemini CLI hangs after executing simple shell commands, falsely awaiting user input. This is a high-impact UX regression. *Impact: Blocks workflows until manual intervention. Community frustration: 3 👍.*

8.  **Browser Subagent Fails in Wayland** ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)) – `priority/p1`, `kind/bug`. The browser agent fails to start or operate correctly under Wayland display servers. *Impact: Linux/Wayland users cannot use the browser agent. Community interest: 1 👍.*

9.  **Security: Command Injection in findCommand via Shell-Interpolated execSync** ([#27576](https://github.com/google-gemini/gemini-cli/issues/27576)) – `priority/p2`, `area/security`. `findCommand()` uses string interpolation with `execSync`, allowing command injection if an attacker controls the command string. *Impact: Critical vulnerability; high priority for fix. (Fixed in PR #27575).*

10. **Gemini CLI Encounters 400 Error with > 128 Tools** ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)) – `priority/p2`, `kind/bug`. The tool context window is exceeded when MCP servers provide more than ~128 tools, resulting in a hard 400 error from the API. *Impact: Blocks users with large MCP server setups.*

### 4. Key PR Progress
10 pull requests saw activity today, primarily focused on security, stability, and MCP integration.

1.  **fix(at-command): prevent stack overflow from regex backtracking** ([#27580](https://github.com/google-gemini/gemini-cli/pull/27580)) – *Closed.* Replaces a complex regex parser for `@`-commands with an iterative scanner to prevent catastrophic backtracking on large pasted inputs. (Fixes #27539).

2.  **fix(security): prevent command injection in findCommand** ([#27575](https://github.com/google-gemini/gemini-cli/pull/27575)) – *Closed.* Replaces unsafe `execSync` calls with `spawnSync` to prevent shell metacharacter injection. (Fixes #27576).

3.  **fix(core): refresh MCP OAuth with stored client ID** ([#27889](https://github.com/google-gemini/gemini-cli/pull/27889)) – *Open.* Fixes OAuth refresh for auto-discovered MCP servers by using the persisted client ID from token metadata instead of the server config.

4.  **fix(core): normalize MCP tool schemas to root type object** ([#27888](https://github.com/google-gemini/gemini-cli/pull/27888)) – *Open.* Adds a root `type: "object"` to MCP tool input schemas that lack it, fixing compatibility with strict JSON Schema validators (e.g., Vertex AI).

5.  **fix(vscode-ide-companion): register all activate() disposables** ([#27885](https://github.com/google-gemini/gemini-cli/pull/27885)) – *Open.* Fixes a resource leak where two activation disposables were not added to the VS Code subscription context. (Fixes #27790).

6.  **fix(core): respect .gitignore and .geminiignore in session_context directory tree** ([#27886](https://github.com/google-gemini/gemini-cli/pull/27886)) – *Open.* Ensures the `<session_context>` directory tree honors ignore rules, preventing sensitive or irrelevant files from being added to the context. (Fixes #27787).

7.  **fix(cli): honor custom theme border.default when terminal reports OSC 11 background** ([#27887](https://github.com/google-gemini/gemini-cli/pull/27887)) – *Open.* Fixes two code paths where custom border colors were ignored, especially on terminals that report background color via OSC 11. (Fixes #27786).

8.  **fix(core): cap pending tool responses** ([#27870](https://github.com/google-gemini/gemini-cli/pull/27870)) – *Open.* Prevents a single massive tool result from saturating the pending `functionResponse` payload, avoiding context window overflow and API errors. (Fixes #27738).

9.  **fix(core): sniff MCP image MIME types** ([#27878](https://github.com/google-gemini/gemini-cli/pull/27878)) – *Open.* Implements local binary signature sniffing for base64 data to correct mismatched MIME types (e.g., WebP labeled as PNG) from MCP servers like Figma. (Fixes #27731).

10. **fix(core): sniff MCP image MIME types** ([#27850](https://github.com/google-gemini/gemini-cli/pull/27850)) – *Open.* An alternative implementation of the MIME sniffing fix with a slightly different approach to binary inspection. (Also fixes #27731).

### 5. Feature Request Clusters
Several recurring feature requests were visible in today's data, grouped by theme:

- **AST-Aware Code Tools:** Multiple EPICs ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) investigate using AST-aware parsing for better file reads, code search, and codebase mapping. Users seek more precise tool calls that reduce token waste.
- **Improved MCP Client Support:** A long-standing request for MCP resource and prompt support ([#3816](https://github.com/google-gemini/gemini-cli/issues/3816)) and new requests for OAuth refresh and schema normalization. The current client is largely tool-only.
- **Browser Agent Resilience:** Users are asking for automatic session takeover and lock recovery ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)) in addition to the existing Wayland bug. The agent's "fail-fast" strategy on locked browser profiles is a pain point.
- **Auto Memory Quality Control:** Requests to stop retrying low-signal sessions ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)), quarantine invalid patches ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)), and add deterministic redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)) all point to a need for a more robust memory extraction pipeline.
- **Destructive Behavior Guardrails:** Issue [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) requests that the agent stop or discourage destructive commands (e.g., `git reset`, `--force`) in favor of safer alternatives.

### 6. Developer Pain Points
Recurring frustrations and high-frequency requests from today's data:

- **Subagent & Skill Adoption:** The model frequently fails to use user-configured skills and sub-agents autonomously ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)), forcing users into explicit prompting.
- **Hidden Failures & False Positives:** Subagents report "success" after hitting limits or crashing ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), making debugging unreliable.
- **Security & Injection Risks:** The exposure of command injection vectors ([#27576](https://github.com/google-gemini/gemini-cli/issues/27576)) and un-redacted secrets in model context ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)) are high-priority concerns for enterprise and security-conscious developers.
- **CLI Shell Hangs:** A top-priority bug ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)) where the CLI hangs after shell command completion is a major workflow blocker.
- **Tool Context Limits:** Hitting the 128-tool limit ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)) prevents users from integrating complex MCP server ecosystems.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-14

## Today’s Update Brief
Two patch releases landed today (v1.0.62 and v1.0.62-2), bringing UI improvements, plugin marketplace extension support, and new slash commands. Community activity focused on feature requests around bring-your-own-model (BYOM) and MCP tool loading, with one closed bug about missing supported models and one invalid report. No pull requests were updated in the past 24 hours.

## Releases

**v1.0.62** (2026-06-13)
- Ask and elicitation dialogs now scroll together with the timeline instead of taking over the screen — a tall dialog no longer hides agent output; users can scroll up to read earlier output then back down to the dialog.
- Blank lines between reasoning summary sections are now preserved.
- Minor “Show user-ty” change (truncated in notes).

[Release link](https://github.com/github/copilot-cli/releases/tag/v1.0.62)

**v1.0.62-2** (2026-06-13)
- **Plugins** can now ship extensions, making them installable via the plugin marketplace.
- **Diff view** gains content search, match highlighting, and `n`/`N` navigation.
- New `/app` slash command to open the GitHub app (or browser fallback).
- Added ability to configure subagent model, reasoning effort, and context timeouts.

[Release link](https://github.com/github/copilot-cli/releases/tag/v1.0.62-2)

## Hot Issues

*5 issues updated in the last 24h; all listed below.*

| # | Title | Status | Summary | Reaction |
|---|-------|--------|---------|----------|
| [#2550](https://github.com/github/copilot-cli/issues/2550) | Not all models available from Copilot | **CLOSED** | User reports that Gemini, Raptor mini, and Goldeneye models listed in docs are not visible via `/model` in CLI. No resolution comment provided. | 6 👍, 4 comments |
| [#3788](https://github.com/github/copilot-cli/issues/3788) | “1” | **CLOSED** (invalid) | Empty bug report with no description – likely spam. | 0 👍, 1 comment |
| [#3789](https://github.com/github/copilot-cli/issues/3789) | Request: Ollama API Key return to Bring Your Own Model | **OPEN** (triage) | User wants to add an `apiKeyEnv` option for Ollama in the BYOM menu to support remote Ollama servers that require a host header API key. | 0 👍, 0 comments |
| [#3787](https://github.com/github/copilot-cli/issues/3787) | Preload MCP server tools into initial function list | **OPEN** (triage) | MCP tools registered via `.mcp.json` or `--additional-mcp-config` are currently lazy-loaded. Agents that don’t probe for them may never see the tools, breaking sessions. Proposal: preload all MCP tools into the initial `<available_tools>` list. | 0 👍, 0 comments |
| [#3785](https://github.com/github/copilot-cli/issues/3785) | Clarify/support `.copilotignore` semantics in Copilot CLI | **OPEN** (triage) | User asks for proper handling of `.copilotignore` (nested ignore files) in CLI, linking to broader SDK issue. The CLI behavior is currently undefined. | 0 👍, 0 comments |

## Key PR Progress

No pull requests were updated or created in the last 24 hours.

## Feature Request Clusters

Two distinct feature request themes emerge from today’s issues:

1. **Bring Your Own Model (BYOM) expansion**
   - [#3789](https://github.com/github/copilot-cli/issues/3789) asks for an Ollama `apiKeyEnv` setting, enabling remote Ollama servers behind API key authentication. This extends the existing BYOM menu to support local models that require host-header keys, beyond the current local-only configuration.

2. **MCP tool readiness and lifecycle**
   - [#3787](https://github.com/github/copilot-cli/issues/3787) requests that MCP server tools be preloaded (eagerly advertised) in the agent’s initial tool list, rather than discovered lazily. This would reduce friction for agents that don’t custom-probe for MCP tools. The current lazy-loading can cause silent failures when agents rely on `tool_search_tool_regex` or similar mechanisms.

Additionally, [#3785](https://github.com/github/copilot-cli/issues/3785) requests better specification and support for `.copilotignore` semantics in the CLI, particularly nested ignore files – a cross-cutting configuration concern.

## Developer Pain Points

- **Model availability confusion** – Issue [#2550](https://github.com/github/copilot-cli/issues/2550) (closed without resolution) highlights that documented supported models (Gemini, Raptor mini, Goldeneye) are missing from the CLI’s model list. This mismatch between docs and product causes trust issues.
- **Incomplete ignore-file support** – The CLI’s behavior with `.copilotignore` files (especially nested ones) is undefined, making it harder for users to control which files are visible to Copilot during CLI sessions. The linked SDK issue (#963) suggests this is a broader gap.
- **Spam/low-quality reports** – One issue ([#3788](https://github.com/github/copilot-cli/issues/3788)) was a blank report, indicating that maintainers may need to tighten submission validation or that the community needs clearer guidelines.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区摘要 — 2026-06-14

## 今日更新简报
今日无新版本发布。社区活动集中在 2 个开放式 Bug 讨论和 5 个 Pull Request 的更新上，其中 3 个针对 MCP 工具链与 Moonshot API 的序列化/超时问题已被合并关闭。修复方向以提升稳定性、兼容性和错误处理能力为主。

## 版本发布
当日无新版本发布。

## 热门 Issues（共 2 个）

### 1. 文件读取循环导致 CLI 卡死
- **Issue #640**：Kimi CLI 在读取一个文件后反复循环读取，无法终止。用户使用自定义 Anthropic 端点（`mimo-v2-flash` 模型），CLI 版本 0.76，系统 Arch Linux。
- **受影响工作流**：所有依赖文件调用（`kimi --file` 等）的交互。
- **社区反应**：13 条评论，1 个 👍。用户报告需手动 `kill` 进程；维护者尚未公开回复。
- **链接**：[#640](https://github.com/MoonshotAI/kimi-cli/issues/640)

### 2. Pi TUI 因终端宽度过窄未捕获异常
- **Issue #2450**：Kimi Code v0.12.0 在 `k2.6` 模型下，终端宽度不足时触发未捕获的 TUI 异常并崩溃。
- **受影响工作流**：任何在窄终端窗口中的交互式 TUI 会话。
- **社区反应**：0 条评论，当日新创建。
- **链接**：[#2450](https://github.com/MoonshotAI/kimi-cli/issues/2450)

## 关键 PR 进展（共 5 个）

### 1. 修复 Web 模式下子进程写入 `BrokenPipeError`
- **PR #2324**：`SessionProcess.send_message` 在子进程早已退出后仍向 `stdin` 写入并等待 `drain()`，导致未捕获异常。添加防护逻辑。
- **状态**：开放中，等待审核。
- **链接**：[#2324](https://github.com/MoonshotAI/kimi-cli/pull/2324)

### 2. 抑制 MCP 连接断开时的事件循环错误 + 处理 LLM 双重序列化
- **PR #2434**：当 Notion、code-index 等 MCP 服务器连接断开时，事件循环清理代码尝试关闭已关闭的连接导致错误。同时修复 LLM 返回消息中 `role` 字段被重复序列化的问题。
- **状态**：已合并关闭。
- **链接**：[#2434](https://github.com/MoonshotAI/kimi-cli/pull/2434)

### 3. 处理 Moonshot API 工具调用参数双重编码问题
- **PR #2407**：Moonshot API 返回的 `function.arguments` 中嵌套的数组/对象值被编码为 JSON 字符串。`json.loads` 解析外层后，内层仍为字符串，导致 Pydantic 校验失败。修复影响 `SetTodoList`、`ExitPlanner` 等工具调用。
- **状态**：已合并关闭。
- **链接**：[#2407](https://github.com/MoonshotAI/kimi-cli/pull/2407)

### 4. 为 `create_openai_client` 添加 120 秒默认超时
- **PR #2409**：SDK 默认超时 600 秒，上游代理（如 MiMo API）超时约 300 秒，客户端会等待 5 分钟以上。添加 120 秒超时，减少用户无响应等待时间。
- **状态**：已合并关闭。
- **链接**：[#2409](https://github.com/MoonshotAI/kimi-cli/pull/2409)

### 5. 修复 `shorten_middle` 在长度检查前未去空行的问题
- **PR #2449**：`extract_key_argument` 使用 `shorten_middle` 生成单行摘要，但函数在短输入时提前返回，未去除换行符，导致显示异常。修复后在长度判断前先处理换行。
- **状态**：开放中，等待审核。
- **链接**：[#2449](https://github.com/MoonshotAI/kimi-cli/pull/2449)

## 特性请求聚类
当日无新增特性请求。历史 Issue 中未识别出新的聚类模式。

## 开发者痛点
- **工具链稳定性**：MCP 连接断开后的崩溃（PR #2434）、子进程状态竞争导致的 `BrokenPipeError`（PR #2324）反映出工具链在多进程/网络异常时的脆弱性。
- **API 兼容性**：Moonshot API 工具参数双重编码（PR #2407）和超时策略不匹配（PR #2409）说明上游 API 行为差异需要显式适配。
- **交互可靠性**：文件循环读取卡死（Issue #640）和 TUI 屏幕宽度异常（Issue #2450）表明基础 I/O 与 TUI 状态管理仍存在边界条件缺陷。
- **字符串与显示处理**：`shorten_middle` 未正确去除换行导致工具摘要显示错误（PR #2449），反映文本渲染工具在格式化细节上需加强。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-14

## 1. Today's Update Brief

Two patch releases landed today (v1.17.5, v1.17.6) with MCP improvements, OAuth fixes, and session recovery work. Community activity is high: 50 open/updated issues and 50 PRs in the last 24 hours, with notable clustering around MCP client capabilities, session token exhaustion, and Zed editor integration gaps. A flurry of MCP-focused PRs from `@rekram1-node` suggests focused upstream attention on protocol compliance.

## 2. Releases

**v1.17.6** — [Release](https://github.com/anomalyco/opencode/releases/tag/v1.17.6)
- Bugfix: Improved MCP server compatibility by declaring OpenCode's supported client capabilities.

**v1.17.5** — [Release](https://github.com/anomalyco/opencode/releases/tag/v1.17.5)
- Improvement: Added external browser OAuth for the Snowflake Cortex provider (`@santigc6`)
- Improvement: Improved project copy management and move-session flows in v2 layout
- Bugfix: Recovered expired MCP sessions instead of leaving MCP tools disconnected
- Bugfix: Cleared closed MCP clients to prevent stale connections

## 3. Hot Issues

1. **#4240 — Zed native changes review unsupported** — [Issue](https://github.com/anomalyco/opencode/issues/4240)
   *Closed.* Users report OpenCode applies edits but lacks the review-changes UI that Gemini CLI provides inside Zed. Affects workflow: no visual diff review before accepting model changes. 19 👍, 16 comments.

2. **#1865 — Auto-save session records to disk** — [Issue](https://github.com/anomalyco/opencode/issues/1865)
   *Closed.* Long-standing request for automatic session logging (prompts + model output) similar to Claude Code's `autosave` setting. 12 comments, resolved after ~10 months.

3. **#28957 — "Upstream idle timeout exceeded" when using writing-plans skill** — [Issue](https://github.com/anomalyco/opencode/issues/28957)
   *Open.* Session times out during plan generation with the "writing-plans" skill. User on macOS Tahoe, Apple M4. Infrastructure-level error suggests model service disconnect. 12 comments, 0 👍.

4. **#28567 — Full MCP client capabilities requested** — [Issue](https://github.com/anomalyco/opencode/issues/28567)
   *Open.* OpenCode's MCP client lags behind latest protocol spec (roots, streaming, capabilities negotiation). 20 👍 — highest today. 6 comments. PRs from `@rekram1-node` today directly address this (roots, error handling, debug version).

5. **#22129 — Skills missing from TUI autocomplete (present in web app)** — [Issue](https://github.com/anomalyco/opencode/issues/22129)
   *Closed.* Skills visible in web slash-commands but absent in TUI. Tracked to `autocomplete.tsx`. 11 👍, 9 comments. Fix likely landed in a prior release.

6. **#30649 — Session token usage grows unbounded via cache.read** — [Issue](https://github.com/anomalyco/opencode/issues/30649)
   *Open.* Long-running sessions accumulate `tokens.cache.read` usage without bound, hitting context-window limits and rendering sessions unrecoverable. User reports ~1M tokens in a real session. Critical for heavy users.

7. **#23595 — `<system-reminder>` moving breaks llama.cpp cache** — [Issue](https://github.com/anomalyco/opencode/issues/23595)
   *Open.* OpenCode shifts the system reminder position between turns, invalidating prompt caches in llama.cpp and causing wasteful reprocessing. 8 👍 — strong interest from local-model users.

8. **#32172 — Add GLM-5.2 model support for Z.AI provider** — [Issue](https://github.com/anomalyco/opencode/issues/32172)
   *Open.* Z.AI released GLM-5.2 reasoning model; user requests provider integration. 5 comments, filed yesterday.

9. **#32231 — Terminal option removed from UI** — [Issue](https://github.com/anomalyco/opencode/issues/32231)
   *Closed.* User reports CLI/Terminal entry point disappeared. Closed quickly (4 comments), likely a regression from v2 layout changes.

10. **#32238 — Search state retained on file reads** — [Issue](https://github.com/anomalyco/opencode/issues/32238)
    *Open (linked to PR).* Repeated file reads initialize and retain unnecessary search state. PR #32238 submitted same day to fix.

## 4. Key PR Progress

1. **#29132 — Fix event loop in non-interactive `opencode run`** — [PR](https://github.com/anomalyco/opencode/pull/29132)
   *Closed.* Ensures `opencode run --format json` completes before process exits. Closes #26855. Critical for CI/automation workflows.

2. **#27231 — Add edit button for connected providers** — [PR](https://github.com/anomalyco/opencode/pull/27231)
   *Open.* UI enhancement allowing users to modify provider settings after initial setup. Closes #20598.

3. **#32238 — Avoid search retention for file reads** — [PR](https://github.com/anomalyco/opencode/pull/32238)
   *Open.* Prevents file-read operations from initializing and holding search state. Fixes #32237.

4. **#32193 — Fix mentions for files in hidden folders** — [PR](https://github.com/anomalyco/opencode/pull/32193)
   *Open.* Users could not `@mention` files inside `.`-prefixed directories. Adds hidden-folder support to mention resolver. Fixes #32126.

5. **#32239 — Add native `/goal` with persisted per-session goals** — [PR](https://github.com/anomalyco/opencode/pull/32239)
   *Closed.* Implements `/goal` slash command: one goal per session with status (active/paused/completed), optional token budget, and usage tracking. Closes #27167.

6. **#32255/#32254 — Unify PostgreSQL/SQLite schemas via dialect shim** — [PR](https://github.com/anomalyco/opencode/pull/32255) · [PR](https://github.com/anomalyco/opencode/pull/32254)
   *Both Open.* Duplicate PRs (likely branch mismatch). Introduces dialect abstraction to eliminate duplicated `.pg.ts` schema files. Supports Postgres adoption path.

7. **#30019 — Add TUI notifications for MCP plugins** — [PR](https://github.com/anomalyco/opencode/pull/30019)
   *Open.* Bridges MCP server notifications into the TUI session. Closes #30020. Important for real-time plugin feedback.

8. **#32230 — Support MCP client roots** — [PR](https://github.com/anomalyco/opencode/pull/32230)
   *Closed.* Advertises and handles `roots/list` capability, exposing the current instance directory. Required for spec compliance (#28567).

9. **#30977 — TUI attaches to configured server by default** — [PR](https://github.com/anomalyco/opencode/pull/30977)
   *Open.* Adds `server.attach` config so TUI automatically connects to a configured remote server. Closes #17322. 40% of diff is test coverage.

10. **#32241 — Render move errors inline in TUI** — [PR](https://github.com/anomalyco/opencode/pull/32241)
    *Open.* Replaces toast-based move-dialog errors with inline error boundaries, preventing full TUI crashes on resource failures.

## 5. Feature Request Clusters

**MCP Capabilities & Protocol Compliance** — Multiple issues and PRs today center on bringing OpenCode's MCP client up to spec: full `roots` support (#28567, #32230), `CallToolResult.isError` handling (#32244), OAuth callback robustness (#32242, #32245), SDK protocol version alignment (#32243), and binary content handling (#30251). This is the most active theme in today's data.

**Custom Agent / Skill Visibility** — Users want skills and agent pickers to work consistently across all surfaces: TUI autocomplete (#22129, now closed), v2 layout agent picker (#30360), and custom agent execution (#26911). The `customize-opencode` skill not resolvable (#32252) also fits here.

**Session & State Management** — Requests for auto-save session logs (#1865, closed), persistent goals (#32239, PR merged), and concern about unbounded token growth (#30649) indicate a need for better session lifecycle controls. The `opencode uninstall` not clearing desktop cache (#32248) is a related friction point.

## 6. Developer Pain Points

- **MCP compatibility and deployment issues** persist despite today's patches: certificate errors with MiniMax in desktop (#32250), authentication failures with Open Designer (#32232), and "model tried to call unavailable tool" errors (#21090). The MCP patch cluster in today's PRs suggests the team is actively addressing these.

- **Context window and token limits** are a recurring frustration: unbounded cache.read growth (#30649), upstream timeouts during plan generation (#28957), and system-reminder position shifts breaking llama.cpp caching (#23595). These affect both cloud and local-model users.

- **Local provider / self-hosting friction** remains: Ollama not appearing (#19326), llama.cpp cache invalidation (#23595), `xdg-open` errors in containers (#31815), and Nix build failures on ARM (#32221). Local deployment continues to have rough edges.

- **Cross-platform and editor integration** gaps: Zed review changes unsupported (#4240), UNC path issues on Windows/WSL (#19473), keybind overrides broken (#32198), and agent picker missing in v2 layout (#30360). Desktop-vs-TUI inconsistency appears in multiple reports (certificate errors, skill visibility).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-14

## Today's Update Brief

The project saw high activity with 27 Issues and 50 PRs updated in the last 24 hours, though no new releases were published. Key developments include ongoing community debate around OAuth free tier policy changes, progress on a multi-phase Dynamic Workflows port, and multiple bug reports about model degradation in long-context tasks. A nightly build release failed today, which may affect testers relying on cutting-edge builds.

## Releases

No new releases in the last 24 hours. A nightly build (`v0.18.0-nightly.20260614.8472c6fce`) attempted to publish but failed during the release workflow ([#5092](https://github.com/QwenLM/qwen-code/issues/5092)).

## Hot Issues

1. **[#3203](https://github.com/QwenLM/qwen-code/issues/3203) — Qwen OAuth Free Tier Policy Adjustment**
   - **Summary:** Proposes reducing daily free quota from 1,000 to 100 requests/day and closing the free entry point by June 20.
   - **Impact:** Directly affects all users relying on the free OAuth tier for development or testing. Could push users toward paid plans or alternative providers.
   - **Community:** 129 comments, indicating intense debate. The issue has been open since April and was updated yesterday.

2. **[#4845](https://github.com/QwenLM/qwen-code/issues/4845) — feat: add /import-config for Claude user config migration (CLI + Desktop)**
   - **Summary:** Request for a one-click tool to import MCP servers, instructions, permissions, and custom commands from Claude Code/Claude Desktop configurations.
   - **Impact:** Reduces migration friction for developers switching from Claude Code to Qwen Code. Targets both CLI and Desktop flows.
   - **Community:** 4 comments. Tagged with `welcome-pr`, suggesting maintainers are open to community contributions.

3. **[#5083](https://github.com/QwenLM/qwen-code/issues/5083) — TUI 卡死，疑似僵尸子进程未被回收导致界面冻结**
   - **Summary:** TUI becomes completely unresponsive mid-session due to zombie bash child processes (status Z) not being reaped. Process stays at ~560MB RSS.
   - **Impact:** Blocks all interactive usage mid-workflow. Users lose work and must force-kill the process.
   - **Community:** 4 comments. Affects Linux users running MCP remote tools.

4. **[#5018](https://github.com/QwenLM/qwen-code/issues/5018) — 长程任务注意力不集中，出现大量的遗忘等**
   - **Summary:** Model fails to maintain focus in long-running tasks, exhibiting "forgetfulness" and reduced attention over extended sessions.
   - **Impact:** Directly impacts productivity for complex, multi-step coding workflows. User is running qwen3.7-max on both regular and fast models.
   - **Community:** 4 comments. Linked to related issue [#5019](https://github.com/QwenLM/qwen-code/issues/5019) about repetitive tool calls.

5. **[#5055](https://github.com/QwenLM/qwen-code/issues/5055) — Trojan:JS/ShaiWorm.DBA!MTB**
   - **Summary:** Windows Defender flags the VSIX package `qwenlm.qwen-code-vscode-ide-companion-0.18.0-win32-x64.vsix` as a trojan.
   - **Impact:** Blocks installation on Windows systems with active antivirus, creating trust concerns and deployment friction.
   - **Community:** 4 comments. Likely a false positive, but requires maintainer attention to verify and potentially adjust packaging.

6. **[#5080](https://github.com/QwenLM/qwen-code/issues/5080) — 阿里云 Standard API Key (sk-xxx) 与 Token Plan 接入点混用导致 401**
   - **Summary:** Cross-contamination between Standard API Key (`sk-xxx`) and Token Plan providers when switching models—selecting a Token Plan model yields 401 errors.
   - **Impact:** Breaks model switching for users with multiple Alibaba Cloud billing plans, forcing manual reconfiguration.
   - **Community:** 4 comments. Affects Chinese cloud users specifically.

7. **[#4721](https://github.com/QwenLM/qwen-code/issues/4721) — Feature Request: Port Dynamic Workflows / Ultracode from Claude Code 2.1.160**
   - **Summary:** Request to port the Dynamic Workflows feature as a third tier of multi-agent execution, complementing `/swarm`.
   - **Impact:** Would add structured multi-agent execution with sub-tasks, conditional branching, and worktree isolation.
   - **Community:** 1 comment but significant activity via linked PRs—P1/P2/P3 already merged, P4a just opened.

8. **[#5064](https://github.com/QwenLM/qwen-code/issues/5064) — 希望statusline显示不下的时候能换行**
   - **Summary:** Status lines get truncated or overlap when content exceeds available width. Request to enable word wrapping.
   - **Impact:** UX annoyance for users with long status messages, especially on narrower terminal windows.
   - **Community:** 3 comments. Tagged `welcome-pr` and already has a fix PR open.

9. **[#5029](https://github.com/QwenLM/qwen-code/issues/5029) — 不知道为啥，就是感觉降智了**
   - **Summary:** Developer reports a subjective "dumbing down" of model responses compared to one week ago. Running Qwen Code 0.17.1 with qwen3.7-max via DashScope API.
   - **Impact:** Difficult to reproduce or fix without specific repro steps, but echoes concerns in [#5018] about model degradation.
   - **Community:** 3 comments. Maintenance asks for more details.

10. **[#5092](https://github.com/QwenLM/qwen-code/issues/5092) — Release Failed for v0.18.0-nightly.20260614.8472c6fce**
    - **Summary:** The automated nightly release workflow failed on 2026-06-14. No details on failure cause are provided in the issue body.
    - **Impact:** Prevents testers and early adopters from accessing the latest nightly build.
    - **Community:** No comments yet.

## Key PR Progress

1. **[#5089](https://github.com/QwenLM/qwen-code/pull/5089) — refactor(core): extract Protocol enum and decouple model identity from auth type**
   - **Status:** Open (Draft)
   - **Summary:** Extracts a standalone `Protocol` enum to decouple provider identity (free-form string) from SDK routing (`OPENAI | GEMINI | ANTHROPIC | QWEN_OAUTH`). Addresses [#5090].
   - **Significance:** Architectural improvement that enables custom providers beyond the current enum-based system.

2. **[#5093](https://github.com/QwenLM/qwen-code/pull/5093) — fix(cli): wrap long status lines**
   - **Status:** Open
   - **Summary:** Wraps long status line output instead of truncating. Caps rendered lines at `MAX_STATUS_LINES` to keep footer height bounded.
   - **Significance:** Direct fix for [#5064], improving CLI UX for users with long status messages.

3. **[#5094](https://github.com/QwenLM/qwen-code/pull/5094) — feat(core): Workflow P4a — extractAndStripMeta + meta on RunOutcome (#4721)**
   - **Status:** Open
   - **Summary:** Implements the first half of phase P4 of the Dynamic Workflows port, building on merged P1–P3. Adds `extractAndStripMeta` and meta fields on `RunOutcome`.
   - **Significance:** Continued progress on a major feature (Dynamic Workflows) that could enable structured multi-agent execution.

4. **[#5051](https://github.com/QwenLM/qwen-code/pull/5051) — feat(core): migrate Computer Use to cua-driver (cross-platform)**
   - **Status:** Closed (merged)
   - **Summary:** Migrates Computer Use tool from open-computer-use (ocu) to cua-driver-rs, a Rust-based background native automation driver speaking MCP over stdio.
   - **Significance:** Replaces a JavaScript backend with a Rust implementation, potentially improving performance and reliability for the experimental Computer Use feature.

5. **[#5085](https://github.com/QwenLM/qwen-code/pull/5085) — fix(acp): add internal Kind.Agent, keep ACP wire on 'other' (no-regression)**
   - **Status:** Open
   - **Summary:** Adds `Kind.Agent` to core tool Kind enum, maps it to `'other'` on the ACP wire for backward compatibility. Fixes ACP skills exposure issue [#5007].
   - **Significance:** Enables skill detection in ACP mode without breaking existing integrations.

6. **[#4933](https://github.com/QwenLM/qwen-code/pull/4933) — feat(config): add settings file change detection via chokidar watcher**
   - **Status:** Open
   - **Summary:** Adds file system change detection for settings files using chokidar, addressing [#3696].
   - **Significance:** Enables hot-reload of configuration changes without restarting the tool—improves developer workflow.

7. **[#5036](https://github.com/QwenLM/qwen-code/pull/5036) — fix(core): hard-stop repeated identical tool calls**
   - **Status:** Open
   - **Summary:** Moves repeated-identical-tool-call hard stop into the core stream loop instead of TUI hook. Adds `LoopDetectionService` exposure.
   - **Significance:** Addresses [#5019], preventing session termination from repetitive tool calls in long-running tasks.

8. **[#4983](https://github.com/QwenLM/qwen-code/pull/4983) — docs(channels): add screenshots to Feishu setup guide**
   - **Status:** Open
   - **Summary:** Adds visual screenshots to the Feishu/Lark channel setup documentation, covering 6 configuration steps including app creation, bot enablement, and event subscription.
   - **Significance:** Improves onboarding for Chinese enterprise users who use Feishu for team collaboration.

9. **[#5070](https://github.com/QwenLM/qwen-code/pull/5070) — fix(cli): ignore expired live agents in focus navigation**
   - **Status:** Closed (merged)
   - **Summary:** Shares live-agent panel visibility predicate between rendering and keyboard focus gates. Prevents focus jumping to stale/hidden terminal agents.
   - **Significance:** Fixes [#5067], improving keyboard navigation reliability when terminal sub-agents expire.

10. **[#5001](https://github.com/QwenLM/qwen-code/pull/5001) — feat(cli): add optional [HH:MM:SS] timestamp before each assistant turn**
    - **Status:** Open
    - **Summary:** Adds `output.showTimestamps` setting to display timestamps before each assistant response. Uses `commitItem` wrapper for immediate rendering.
    - **Significance:** Provides users with time tracking per response—useful for monitoring session duration and identifying slow responses.

## Feature Request Clusters

- **Environment Migration Tools** — Multiple requests for migration paths from competing tools: Claude Code config import ([#4845](https://github.com/QwenLM/qwen-code/issues/4845)) and Dynamic Workflows port from Claude Code ([#4721](https://github.com/QwenLM/qwen-code/issues/4721)). Suggests the community heavily overlaps with former Claude Code users.

- **Multi-Agent & Workflow Enhancement** — Requests for structured multi-agent execution continue: Dynamic Workflows ([#4721](https://github.com/QwenLM/qwen-code/issues/4721)) and persistent session sidebar for web-shell ([#5074](https://github.com/QwenLM/qwen-code/issues/5074)). These indicate demand for production-grade agent orchestration.

- **Session Management & State Persistence** — File history follow-ups ([#4204](https://github.com/QwenLM/qwen-code/issues/4204)) and git branch display in Desktop UI ([#4769](https://github.com/QwenLM/qwen-code/issues/4769)) show ongoing interest in better session context and recovery.

- **UI/UX Polish** — Status line wrapping ([#5064](https://github.com/QwenLM/qwen-code/issues/5064)), git branch display ([#4769](https://github.com/QwenLM/qwen-code/issues/4769)), and timestamps in CLI ([#5001](https://github.com/QwenLM/qwen-code/pull/5001)) represent lower-effort but high-frequency UX improvements.

- **Model & Performance Improvements** — Requests for better long-task attention ([#5018](https://github.com/QwenLM/qwen-code/issues/5018)) and concern about degradation ([#5029](https://github.com/QwenLM/qwen-code/issues/5029)) indicate the model's consistency under extended workloads is a growing concern.

## Developer Pain Points

- **Platform Compatibility Issues** — Multiple reports highlight platform-specific problems: false positive antivirus detection on Windows ([#5055](https://github.com/QwenLM/qwen-code/issues/5055)), SSH clipboard failures ([#4926](https://github.com/QwenLM/qwen-code/issues/4926), fixed by [#4929](https://github.com/QwenLM/qwen-code/pull/4929)), and zombie processes causing TUI freezes on Linux ([#5083](https://github.com/QwenLM/qwen-code/issues/5083)). The heterogeneous user base is encountering growing pains as tool usage expands.

- **Experience Degradation in Long Sessions** — Multiple reports about model forgetfulness ([#5018](https://github.com/QwenLM/qwen-code/issues/5018)), repetitive tool calls ([#5019](https://github.com/QwenLM/qwen-code/issues/5019)), and subjective "dumbing down" ([#5029](https://github.com/QwenLM/qwen-code/issues/5029)) suggest the context management or model steering degrades over extended interactions. This is a critical UX blocker for complex tasks.

- **Configuration & Authentication Complexity** — The mix of Alibaba Cloud billing plans confusing API keys ([#5080](https://github.com/QwenLM/qwen-code/issues/5080)) and the OAuth tier policy debate ([#3203](https://github.com/QwenLM/qwen-code/issues/3203)) suggest authentication and configuration management is becoming unwieldy, especially for users with multiple provider setups.

- **Build & Release Stability** — The nightly build failure ([#5092](https://github.com/QwenLM/qwen-code/issues/5092)) with no explanation in the issue body, combined with VS Code compatibility breakage ([#4991](https://github.com/QwenLM/qwen-code/issues/4991)), points to gaps in CI/CD robustness and release communication.

</details>