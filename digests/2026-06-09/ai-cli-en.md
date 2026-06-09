# AI CLI Tools Community Digest 2026-06-09

> Generated: 2026-06-09 02:12 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report – 2026-06-09

## 1. Daily Cross-Tool Overview

Today saw releases from Claude Code (v2.1.169), OpenAI Codex (v0.138.0), and Gemini CLI (v0.47.0-nightly), while Copilot CLI, Kimi Code, OpenCode, and Qwen Code had no new releases. Community activity was highest on OpenCode (50 issues, 50 PRs) and Qwen Code (31 issues, 50 PRs), though Claude Code and Gemini CLI each had 50 issues updated as well. Windows/WSL ecosystem instability, agent reliability problems, and session/memory management challenges dominated discussions across multiple tools, with several communities reporting similar pain points around multi-window support, declarative agent definitions, and model cost management.

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Release Today | Notes |
|------|---------------------|-------------------|---------------|-------|
| Claude Code | 50 | 5 | v2.1.169 | Patch release with safe-mode flag, /cd command |
| OpenAI Codex | 50+ (10 hot listed) | 10 | v0.138.0, v0.139.0-alpha.1 | /app handoff for macOS/Windows; image generation |
| Gemini CLI | 50 | 20 | v0.47.0-nightly | Banner limit update; experimental labels removed |
| GitHub Copilot CLI | 30 | 1 | None | Only merged PR was install script GITHUB_TOKEN fix |
| Kimi Code | 3 | 0 | None | Low activity; regressions in v0.11.0 |
| OpenCode | 50 | 50 | None | High PR throughput; no release in 24h |
| Qwen Code | 31 | 50 | Failed (v0.18.0-preview.0) | Release attempt failed; high PR activity |

## 3. Shared Feature Directions

**Multi-window / detachable sessions** — Claude Code (#30154, 165 👍; #27725, 54 👍) and OpenAI Codex (pet display flicker, session view requests) both have communities asking for OS-level window separation and split-screen monitoring of parallel agents. These are structurally similar requests despite different UI surfaces (CLI desktop app vs. Desktop app).

**Declarative agent definitions** — Qwen Code (#4821, PR #4842) and Claude Code (implied via skills/plugins structure) both see demand for frontmatter-defined agents with configurable `permissionMode`, `maxTurns`, and model settings. Qwen Code explicitly cites Claude Code parity as motivation.

**Session lifecycle management** — Copilot CLI (pause sessions #1928), OpenCode (session goals /goal #27167, 65 👍), and Qwen Code (hook continuations #4838, `/goal` loops) all have requests for persistent session state, mid-stream context injection, and long-running task lifecycle control. These share a core need for users to maintain and redirect work streams without losing state.

**Clickable file references** — OpenCode (#13430) requests clickable `file:line` links in web UI; Qwen Code's web-shell PR (#4874) adds mouse-selectable mode indicators. Both indicate growing interest in interactive, linkable output in web-based UIs.

**Agent memory and context compaction** — Claude Code (compaction preserving CLAUDE.md #16960), Gemini CLI (Auto Memory low-signal retries #26522, secret redaction #26525), and Qwen Code (hook continuations memory growth #4838) all report issues with session compaction or memory systems losing or mishandling critical context.

## 4. Differentiation Analysis

**Claude Code** continues to focus on extensibility (plugins, skills, hooks, MCP) and configuration flexibility (safe-mode flag, per-session config, user-level skill discovery #66352). Its community is the most vocal about multi-window separation and high token consumption costs. Maintainers released a patch but did not address the highest-upvoted feature (multi-window) today.

**OpenAI Codex** differentiates through Desktop integration and hybrid CLI-desktop workflows (/app handoff, image generation). Its Rust codebase supports agent-style tools and compaction analytics, but the most acute pain points cluster around Windows/WSL ecosystem instability (#25715, #22185) and model availability confusion (#26892). The release cadence is steady with multiple alpha builds alongside stable releases.

**Gemini CLI** positions around subagent delegation and memory systems, but faces credibility issues with agent hangs (#21409) and false success reporting (#22323). Its nightly release cycle is the fastest, but the experimental nature is visible in many unresolved P1 bugs. Security fixes (SSRF prevention #27744, #27739) received large PRs, indicating attention to safety.

**GitHub Copilot CLI** is the most narrowly focused on GitHub ecosystem integration and enterprise use. Activity is lower, with only one PR merged today. The community is small but vocal about input ergonomics (vim mode #13, 63 👍, open since Sep 2025), suggesting a power-user audience that feels underserved on basic UX.

**OpenCode** and **Qwen Code** are the most active in terms of PR throughput (50 each). OpenCode shows broad provider support (OpenAI, Bedrock, OpenRouter) and fixes provider-specific regressions. Qwen Code is deliberately chasing Claude Code feature parity with declarative agents and daemon transport, while also addressing core stability issues (OOM, hook memory). Both communities are contributor-heavy, with maintainer responses visible on multiple PRs.

## 5. Community Activity Notes

**Highest total activity**: OpenCode (50 issues, 50 PRs) and Qwen Code (31 issues, 50 PRs) had the most combined issue+PR updates, though Qwen Code's release failure tempers this. Claude Code and Gemini CLI each had 50 issues updated but fewer PRs.

**Most releases**: OpenAI Codex (stable v0.138.0 + alpha builds) and Claude Code (v2.1.169) shipped functional releases. Gemini CLI shipped a nightly. Qwen Code's release attempt failed.

**Best maintainer responsiveness**: OpenCode and Qwen Code show direct maintainer engagement on multiple PRs and issues (e.g., Qwen Code #4840 fixing OOM root cause, OpenCode #31434 fixing JSON streaming). Claude Code's recent patch release indicates active maintenance but the highest-upvoted issues remain unaddressed. Copilot CLI and Kimi Code show minimal maintainer response.

**Most fragmented community**: Copilot CLI's activity is low but with very specific clusters (input mode request 9 months old). Kimi Code is essentially dormant in comparison, with only 3 issues and zero PRs.

## 6. Evidence-Backed Observations

**Windows/WSL instability is a cross-tool pain point affecting all major CLI tools.** Claude Code has EXDEV rename bug on Windows 11 Insider (#27897). OpenAI Codex has unusably slow WSL (#25715), broken shell execution (#22185), and OAuth failures (#25203). Copilot CLI reports 40-80s WSL startup delays (#3652) and runaway MCP server spawning (#3701). This is not a single-tool regression but an ecosystem-wide challenge for desktop AI CLI tools on Windows with WSL-based development workflows.

**Multi-window/detachable session support is the highest-consensus unmet feature request.** Across Claude Code (165 👍 + 54 👍 = 219 combined) and Codex (related requests), users want simultaneous session views for monitoring long-running agents. No tool currently supports this, and no maintainer has committed to it in today's updates.

**Agent reliability issues undermine trust in autonomous task execution.** Claude Code's image processing costs (#60334), Gemini CLI's generalist agent hangs (#21409, P1) and subagent false success (#22323, P1), Copilot CLI's background agent hangs at total_turns=0 (#3547), and Qwen Code's OOM on resume (#4815) all describe scenarios where agents fail silently or misleadingly. The false success pattern (agent reports GOAL despite no useful work) appears in both Gemini CLI and Qwen Code, indicating a model behavior issue that automated tooling cannot easily detect.

**Session compaction and memory management remain fragile across tools.** Claude Code (#16960), OpenAI Codex (#21671, fixed today), and Qwen Code (#4838, #4840 fix) all have compaction bugs that lose context, corrupt state, or fail silently. The repeated nature of these issues suggests compaction is a technically difficult problem that each tool solves independently, with no shared best practice yet.

**Model cost and configuration confusion is a growing concern.** Claude Code's image processing token waste (#60334), Pro plan forced 1M context (#64349), and excessive agent spawning (#65920) join OpenAI Codex's gpt-5.5 availability confusion (#26892) and Copilot CLI's quota handling confusion (#2867). Users across tools report that they cannot predict or control model costs, and that CLI advice (e.g., "wait for quota") does not always lead to resolution. No clear cross-tool signal on a unified solution exists.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest – 2026-06-09

## Today’s Update Brief

A new patch release (v2.1.169) went out with troubleshooting and workflow improvements. Issue activity remains high: 50 items updated in the last 24 hours, including a closed bug with 60 comments about image processing costs, and a long‑running feature request for multi‑window desktop support reaching 165 👍. Only 5 pull requests were updated, with one fixing a devcontainer script bug and another adding a missing plugin manifest.

## Releases

**v2.1.169**
Two changes landed:

- Added `--safe-mode` flag (and `CLAUDE_CODE_SAFE_MODE` environment variable) to start Claude Code with all customizations (CLAUDE.md, plugins, skills, hooks, MCP servers) disabled – useful for isolating configuration problems.
- Added `/cd` command to move a session to a new working directory without breaking the prompt cache.

https://github.com/anthropics/claude-code/releases/tag/v2.1.169

## Hot Issues

*(Picked 10 noteworthy issues from the top‑30 list, focusing on high comment count, community reaction, and diverse impact.)*

1. **[Bug] Image processing failures causing conversation token waste** – #60334 (60 comments, 14 👍)
   *Closed.* User reports that repeated “image in the conversation could not be processed” errors burned ~70% of a 5‑hour session. The API silently removes images, but the wasted context leads to high token consumption.
   https://github.com/anthropics/claude-code/issues/60334

2. **[Enhancement] Multi-window support in Claude Code Desktop** – #30154 (55 comments, 165 👍)
   The most‑upvoted open feature request. Users want separate OS‑level windows for different sessions, not just a sidebar‑based switcher.
   https://github.com/anthropics/claude-code/issues/30154

3. **[Bug] Persistent ECONNRESET errors on macOS** – #5674 (41 comments, 36 👍)
   Long‑standing network issue affecting only macOS machines on the same network as working Windows/Linux machines. Causes connection drops and task interruptions.
   https://github.com/anthropics/claude-code/issues/5674

4. **[Bug] Windows 11 Insider (MSIX) – EXDEV rename bug in Cowork VM** – #27897 (35 comments, 14 👍)
   Full desktop app broken on Windows 11 Insider builds due to an unresolved cross‑device rename error. Has been open since February.
   https://github.com/anthropics/claude-code/issues/27897

5. **[Enhancement] Allow Claude to write/update project files** – #16550 (32 comments, 59 👍)
   Users want the model to be able to save changes directly to files (not just propose edits) – a recurring request that implies a permission model for file writes.
   https://github.com/anthropics/claude-code/issues/16550

6. **[Bug] Chrome MCP tools: “Navigation to this domain is not allowed” on all domains** – #43255 (13 comments, 7 👍)
   Regression in claude‑in‑chrome extension v1.0.66 where every MCP tool call is blocked. Only affects some users; workaround unknown.
   https://github.com/anthropics/claude-code/issues/43255

7. **[Enhancement] Detachable OS-level windows in desktop app for split screen** – #27725 (13 comments, 54 👍)
   Similar to #30154 but focused on detaching individual sessions into standalone windows to enable split‑screen monitoring of long‑running agents.
   https://github.com/anthropics/claude-code/issues/27725

8. **[Bug] VS Code extension forces 1M context on Pro plan** – #64349 (9 comments, 4 👍)
   The VS Code extension always uses a 1M‑context model even when the user is on the Pro plan (which includes a 200K limit). Causes unexpected cost and slower responses.
   https://github.com/anthropics/claude-code/issues/64349

9. **[Bug] MCP tool calls in CCR Routines fail with “requires approval” – no approval UI shown** – #61044 (6 comments, 3 👍)
   When MCP tools are used inside Routines, the approval prompt never appears, blocking execution. Reconnect does not resolve it.
   https://github.com/anthropics/claude-code/issues/61044

10. **[Enhancement] Support user-level `.agents/skills/` discovery for cross-agent single-source-of-truth workflows** – #66352 (4 comments, 0 👍)
    New request to allow skills defined in the user’s home directory to be automatically available to all agents, avoiding per‑project duplication.
    https://github.com/anthropics/claude-code/issues/66352

## Key PR Progress

*(Only 5 PRs were updated in the last 24 hours; all are listed below.)*

1. **fix(plugins): add missing plugin.json manifest for plugin-dev** – #65286 (OPEN)
   Adds the `.claude-plugin/plugin.json` manifest to the `plugin-dev` plugin, enabling proper discovery and installation.
   https://github.com/anthropics/claude-code/pull/65286

2. **fix(plugins): align frontend-design author with marketplace entry** – #65619 (CLOSED)
   Fixes malformed `author.name` and `author.email` fields in the frontend-design plugin manifest (was packing two authors into single fields).
   https://github.com/anthropics/claude-code/pull/65619

3. **fix(devcontainer): detect Docker daemon failures via $LASTEXITCODE** – #66372 (OPEN)
   The Docker prerequisite check used a try/catch that never fires in PowerShell because native command failures don’t throw exceptions. Now checks `$LASTEXITCODE` after `docker info`.
   https://github.com/anthropics/claude-code/pull/66372

4. **docs: add rules frontmatter paths: syntax examples and validation hook** – #26914 (CLOSED)
   Adds example files and a validation hook for the `paths:` frontmatter in rule files, which previously failed silently when malformed.
   https://github.com/anthropics/claude-code/pull/26914

5. **[#64582] fix: extensibility.py follows symlinks in project-controlled gui** – #66171 (OPEN)
   Addresses a security issue where `extensibility.py` follows symlinks that could be controlled by a project’s GUI directory. Implementation includes analysis and test strategy documents.
   https://github.com/anthropics/claude-code/pull/66171

## Feature Request Clusters

Several themes recur across today’s issues. Grouping them without predicting roadmap:

- **Multi‑window and detachable sessions** – #30154, #27725, and related comments ask for the ability to view multiple sessions simultaneously, either as multiple windows or as detachable panes. High community support (219 combined 👍).
- **Agent/fleet configuration per‑session** – #66402, #64402 (implied) request that `/model` and `/effort` commands stop mutating the global settings file, and instead allow per‑agent model and effort settings in the agents/fleet view.
- **Extensibility and user‑level customisation** – #66352 (user‑level skills), #61857 (custom commands shadowing built‑ins), and #66399 (custom keybindings for file opening) all point to a need for more flexible, user‑owned configuration without conflicts.
- **Documentation gaps** – #66384 (agent JSON output docs), #66380 (MCP policy enforcement windows), #66395 (`claude -p` hang on Windows) all highlight that recent features or behaviour changes are not yet documented.
- **Telemetry / diagnostics** – #66401 (OTLP telemetry silently not emitted) and #63443 (feedback command includes private session data) show desire for better observability and control over data sent to Anthropic.

## Developer Pain Points

From today’s issue data, the most frequently voiced frustrations are:

- **API‑related cost bloat** – Several bugs describe unexpectedly high token consumption: image processing errors burning context (#60334), excessive agent spawning for simple tasks (#65920, #66353), and Pro‑plan users being forced into 1M‑context models (#64349).
- **Network / connectivity failures** – Persistent ECONNRESET errors on macOS (#5674) and blocked Chrome MCP navigation (#43255) disrupt sessions with no clear workaround.
- **Windows‑specific regressions** – The Cowork VM EXDEV bug (#27897) and `claude -p` startup hangs due to slash‑command scanning (#66395) remain unresolved; the v2.1.169 release notes mention a fix for the latter, but no corresponding issue closure is visible yet.
- **MCP permission and approval UX** – Tools inside Routines fail with no approval UI (#61044), and CLI ignores approval settings from claude.ai connector UI (#64521).
- **Model behaviour inconsistency** – The model repeatedly acknowledges a problem and then immediately repeats the same mistake (#66404), tool calls are intermittently malformed (#66400), and a critical safety report describes the model fabricating a user message (ephemeral, #66397).
- **VS Code extension quality** – Copying code blocks injects unwanted newlines (#66371), and the model picker shows the wrong default model (#66403).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-09

## Today's Update Brief

Two Rust releases shipped today, including `v0.138.0` with a `/app` handoff feature for macOS and Windows. The community remains highly active around Windows/WSL performance bugs and the unresolved `gpt-5.5` model availability issue (76 comments), while maintainers are landing several internal infrastructure PRs focused on plugin analytics, compaction, and Guardian review reliability.

## Releases

- **rust-v0.138.0** ([release](https://github.com/openai/codex/releases/tag/rust-v0.138.0)): The `/app` command can now hand off the current CLI thread into Codex Desktop on macOS and native Windows. Windows workspace launches can open directly into Desktop instead of stopping at a manual prompt. Also includes local image attachment and standalone image generation support.
- **rust-v0.139.0-alpha.1** ([release](https://github.com/openai/codex/releases/tag/rust-v0.139.0-alpha.1)): Pre-release alpha build.
- **rust-v0.138.0-alpha.7** / **rust-v0.138.0-alpha.8**: Additional alpha builds for the 0.138 track.

## Hot Issues

1. **[#26892 — gpt-5.5 listed as available locally but real requests fail with 404](https://github.com/openai/codex/issues/26892)**
   - 76 comments, 28 👍. Model metadata shows `gpt-5.5` as available, but actual `/responses` endpoint calls fail with `Model not found` on both Desktop and CLI. Affects Windows users primarily. No maintainer resolution yet. High urgency for anyone relying on the latest model.

2. **[#25144 — Option to disable automatic conversion of long pasted prompts into .txt attachments](https://github.com/openai/codex/issues/25144)**
   - 52 comments, 65 👍. When pasting long structured prompts into the Codex Desktop app on macOS, they are silently converted to `.txt` file attachments, which breaks formatting-sensitive workflows. Users want a toggle or opt-out setting.

3. **[#25203 — GitHub OAuth callback fails with "Unable to find Electron app" on Windows](https://github.com/openai/codex/issues/25203)**
   - 37 comments, 21 👍. Windows users cannot connect GitHub from within the Codex desktop application. The OAuth flow fails during callback registration, blocking integration with GitHub-based workflows.

4. **[#25715 — Codex App is unusably slow with WSL as agent environment](https://github.com/openai/codex/issues/25715)**
   - 36 comments, 36 👍. Routine turns in Codex Desktop with WSL2 take minutes per step. `strace` shows excessive filesystem scanning of `/mnt/c`. Reproducible on multiple Windows 11 machines. Blocking for all Windows users with WSL-based projects.

5. **[#21671 — /compact fails with unknown service_tier parameter (0.129.0 regression)](https://github.com/openai/codex/issues/21671)**
   - 25 comments, 5 👍. Closed today. Upgrading from 0.128.0 to 0.129.0 broke `/compact` because the client sends `service_tier` parameter that the API rejects. Affected all users relying on session compaction.

6. **[#8758 — Image generation from Codex](https://github.com/openai/codex/issues/8758)**
   - 23 comments, 55 👍. Closed today. A long-running feature request for built-in image generation. The new `v0.138.0` release includes standalone image generation support, resolving this request.

7. **[#24675 — Stale app connector link after reauth-required 401 until cache cleared](https://github.com/openai/codex/issues/24675)**
   - 21 comments, 16 👍. macOS Desktop keeps using stale app connector links after a plugin (Linear) returns `401 Reauthentication required`. Restarting and re-adding the plugin does not fix it; only manual cache deletion works.

8. **[#25719 — syspolicyd / trustd CPU and memory runaway on macOS](https://github.com/openai/codex/issues/25719)**
   - 20 comments, 20 👍. Codex Desktop on macOS repeatedly triggers macOS security subsystem processes (`syspolicyd`, `trustd`) to consume high CPU and memory. Appears related to code signing or notarization checks during plugin loading.

9. **[#25249 — Semi-transparent sidebar causes transparent/undrawn regions when maximized on Windows](https://github.com/openai/codex/issues/25249)**
   - 15 comments. Enabling "Semi-transparent sidebar" appearance causes the left sidebar and top title bar area to become transparent/undrawn when the window is maximized. Rendering bug affecting the visual polish of the Windows Desktop app.

10. **[#22185 — Windows Desktop + WSL: unified_exec tries CreateProcess /bin/bash and fails ENOENT](https://github.com/openai/codex/issues/22185)**
    - 11 comments, 7 👍. On Windows 11 with WSL2 Ubuntu workspace, the unified exec runtime attempts to call `CreateProcess("/bin/bash")` directly on the Windows host instead of routing through WSL. Breaks all shell command execution for hybrid setups.

## Key PR Progress

1. **[#27101 — Load user instructions through an injected provider](https://github.com/openai/codex/pull/27101)**
   - Removes implicit `$CODEX_HOME` dependency from `codex-core`. Embedders will supply user-level instructions via a `UserInstructionsProvider` trait. Ensures instructions load even when no primary environment is selected. Architectural cleanup for CI/CD and embedded contexts.

2. **[#26953 — Add dedicated Python SDK goal operations](https://github.com/openai/codex/pull/26953)**
   - New goal API for the Python SDK that mirrors how the TUI drives persisted goals. Callers see one logical turn even when the runtime creates continuations. Avoids duplicating app-server goal logic in the SDK.

3. **[#27107 — Add spans to run_turn](https://github.com/openai/codex/pull/27107)**
   - Adds `run_turn.*` spans around turn orchestration, setup, pending-input handling, and tool-loading. Improves observability for app-server latency tracing, helping distinguish setup costs from prompt preparation.

4. **[#27105 — Refresh account plan from usage](https://github.com/openai/codex/pull/27105)**
   - Treats the plan returned by `/usage` as the authoritative in-memory account plan, with the auth-token claim as fallback. Scopes the observation to the rate-limit fetch boundary. Reduces stale plan data in the Desktop client.

5. **[#27106 — Remove remote compaction failure log](https://github.com/openai/codex/pull/27106)**
   - Removes `log_remote_compact_failure`, the only consumer of the compact-request logging payload and token-usage breakdown fields. Cleans up dead plumbing in the compaction path and context manager.

6. **[#27103 — Report cached input tokens for v2 compaction](https://github.com/openai/codex/pull/27103)**
   - Adds nullable `cached_input_tokens` field to compaction analytics events. Populated from response usage for compaction v2, left null for other implementations. Provides visibility into prompt-cache efficiency.

7. **[#25704 — Normalize Codex images for Responses strict mode](https://github.com/openai/codex/pull/25704)**
   - Feature-flagged Responses API strict-mode image path. When `responses_api_codex_strict_mode` is enabled, Codex converts supported local/data URL images into prepared data URLs before recording them into history and sending to `/responses`.

8. **[#27062 — Retry transient Guardian review failures](https://github.com/openai/codex/pull/27062)**
   - Adds retry logic for transient failures in Guardian (the locked-down reviewer session for permission requests). Guardian is itself a Codex session, so its model responses can fail transiently. Retries improve reliability of auto-review flows.

9. **[#27039 — Add detached async command hooks](https://github.com/openai/codex/pull/27039)**
   - Allows command hooks configured with `async: true` to run outside the blocking hook lane. Async hooks cannot block, rewrite, or reject; they deliver informational results on a later user turn. Expands the hook surface for non-blocking automation.

10. **[#27017 — Fix Windows deny-read across exec runtimes](https://github.com/openai/codex/pull/27017)**
    - Windows `deny_read` entries were present in the effective permission profile, but `shell_command` and unified `exec_command` built requests without resolving the Windows filesystem overrides. Fix ensures denied paths are enforced consistently across all exec runtimes.

## Feature Request Clusters

**Customization and UI Control** — Multiple requests for user-facing toggles and preferences:
- Disable automatic paste-to-attachment conversion ([#25144](https://github.com/openai/codex/issues/25144), 65 👍)
- Pet display flicker fix in Windows Terminal + WSL2 ([#25004](https://github.com/openai/codex/issues/25004))
- Agent View for managing multiple sessions from TUI ([#22321](https://github.com/openai/codex/issues/22321), 9 👍)

**Workspace and Session Management** — Users want more control over sessions, worktrees, and multi-account support:
- Allow externally-created Git worktrees ([#12863](https://github.com/openai/codex/issues/12863), 8 👍)
- Clear context between tasks while preserving session ID ([#23218](https://github.com/openai/codex/issues/23218))
- Multi-account authentication across all Codex surfaces ([#12029](https://github.com/openai/codex/issues/12029), 43 👍)

**Infrastructure and Integration** — Enterprise and power-user needs:
- Environment variable support for OTLP headers in config ([#14465](https://github.com/openai/codex/issues/14465))
- Full Claude Code hook parity for automation surface ([#21753](https://github.com/openai/codex/issues/21753), 15 👍)

## Developer Pain Points

**Windows/WSL Ecosystem Instability** — The dominant theme in today's bug reports. Multiple high-engagement tickets ([#25715](https://github.com/openai/codex/issues/25715), [#22185](https://github.com/openai/codex/issues/22185), [#26149](https://github.com/openai/codex/issues/26149), [#25203](https://github.com/openai/codex/issues/25203), [#25271](https://github.com/openai/codex/issues/25271)) describe fundamental breakdowns when using WSL2 workspaces: extreme per-command latency from `/mnt/c` file scanning, broken shell execution due to `CreateProcess` calling Windows paths instead of WSL paths, and GitHub OAuth failures specific to the Windows Electron shell.

**Session and State Persistence** — Users report losing all projects and conversations after restart ([#19615](https://github.com/openai/codex/issues/19615)), windows not restoring after updates ([#27104](https://github.com/openai/codex/issues/27104)), and stale app connector caches persisting through reauthentication failures ([#24675](https://github.com/openai/codex/issues/24675)). These undermine trust in the Desktop app for long-running development work.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest – 2026-06-09

## Today's Update Brief
A busy day with 50 issues and 20 pull requests updated. The nightly `v0.47.0` release lands a banner display limit and drops “experimental” labels from browser agent docs. The community continues to report agent hang/crash bugs, while maintainers are merging SSRF security fixes and memory-system improvements.

## Releases
- **[v0.47.0-nightly.20260609.g0567b25a2](https://github.com/google-gemini/gemini-cli/releases/tag/v0.47.0-nightly.20260609.g0567b25a2)**
  - Updated the max display count for the Antigravity transition banner ([#27676](https://github.com/google-gemini/gemini-cli/pull/27676)).
  - Removed “experimental” label from browser agent documentation ([`chore` PR](https://github.com/google-gemini/gemini-cli/pull/27746)).

## Hot Issues (10 noteworthy)

- [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) **Generalist agent hangs forever** – When Gemini CLI defers to the generalist agent, it hangs indefinitely. Users report waiting up to an hour for simple tasks. Workaround: disable subagent delegation. (👍8, P1)

- [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) **Subagent recovery after MAX_TURNS reports false success** – `codebase_investigator` subagent returns `status: "success"` with `Termination Reason: "GOAL"` despite hitting the turn limit before doing any analysis. (👍2, P1)

- [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) **AST-aware file reads, search, and mapping** – Epic investigating whether AST-aware tools improve agent quality and reduce token waste. Requests tracked in linked sub-issues. (👍1, P2 feature)

- [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) **Shell command hangs after completion (“Waiting input”)** – After executing a simple CLI command, the shell remains active and shows “Awaiting user input” even though the command has finished. Reproducible with trivial commands. (👍3, P1 bug)

- [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) **Add deterministic redaction and reduce Auto Memory logging** – Auto Memory reads local transcripts before redacting secrets; content is already in model context. Also, skill content may be logged. (P2 security)

- [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) **Stop Auto Memory from retrying low-signal sessions indefinitely** – Sessions judged “low-signal” remain unprocessed and are surfaced repeatedly, wasting extraction agent cycles. (P2 bug)

- [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) **Browser subagent fails on Wayland** – Browser agent exits with `Termination Reason: GOAL` without actually completing tasks. Affects Linux Wayland users. (👍1, P1)

- [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) **400 error with >128 tools** – When more than 128 tools are available (e.g., MCP + built-in), the CLI returns a 400 error. Users expect smarter tool-scoping. (P2)

- [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) **Symlinks in `~/.gemini/agents/` are not recognized** – Agent definitions stored as symlinks are silently ignored. Users expect symlink support for flexibility. (P2 bug)

- [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) **Agent should stop/discourage destructive behavior** – The model occasionally uses `git reset` or `--force` when safer alternatives exist. Users request built-in safeguards. (👍1, P2)

## Key PR Progress (10 important)

- [#27749](https://github.com/google-gemini/gemini-cli/pull/27749) **Vertex AI model mapping fix** – Refactors non-API-key auth paths to use `gemini-3.5-flash` correctly, fixing CCPA routing issues. (size/m)

- [#27729](https://github.com/google-gemini/gemini-cli/pull/27729) **Truncate telemetry metric attributes to 1024 chars** – Fixes terminal flood of stack traces when exporting metrics to Google Cloud Monitoring. (P2, size/m)

- [#27505](https://github.com/google-gemini/gemini-cli/pull/27505) **Prevent extra spaces on width-0 CJK continuation cells** – Stops spurious whitespace between wide characters, improving terminal rendering for international users. (P2, size/s)

- [#27698](https://github.com/google-gemini/gemini-cli/pull/27698) **Zero-quota limits fail fast** – Prevents 10-attempt retry loop when hitting a hard `0` quota (e.g., unbilled free-tier accounts). (size/s)

- [#27619](https://github.com/google-gemini/gemini-cli/pull/27619) **Atomic update for MCP tool discovery** – Implements atomic `refreshTools` to retain MCP tools during transient network drops, eliminating “tool not found” errors. (size/s)

- [#27747](https://github.com/google-gemini/gemini-cli/pull/27747) **Fix infinite loop in ghost text wrapping** – Resolves a freeze when `@filename:line` completion is active in a very narrow terminal (emoji triggers infinite `while`). (P2, size/s, help wanted)

- [#27744](https://github.com/google-gemini/gemini-cli/pull/27744) **DNS resolution before SSRF guard** – Blocks hostname-to-private-IP bypasses like `127.0.0.1.nip.io` by resolving DNS before the `isPrivateIp` check. (size/l)

- [#27739](https://github.com/google-gemini/gemini-cli/pull/27739) **SSRF prevention via DNS and redirects** – Fixes two gaps in `web_fetch` that allowed requests to internal targets through DNS hostnames or redirects. (size/l)

- [#27428](https://github.com/google-gemini/gemini-cli/pull/27428) **Fix Docker image detection** – Switches from parsing `docker images -q` stdout to using `docker inspect` exit code, fixing false negatives with DOCKER_BUILDKIT. (P1, size/m)

- [#27412](https://github.com/google-gemini/gemini-cli/pull/27412) **Prevent model fabrication when reading binary files** – When `read_file` returns binary content (e.g., PDF), the model no longer fabricates a “thought” or invents analysis. (P2, size/m)

## Feature Request Clusters

- **AST-aware tooling** – Multiple issues ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747)) request AST-aware file reads, search, and codebase mapping to improve precision and reduce token waste.

- **Agent self-awareness & safety** – Requests for the agent to know its own CLI flags, hotkeys, and execution modes ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)), and to avoid destructive commands like `git reset --force` ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)).

- **Browser agent resilience** – Users want automatic session takeover and lock recovery ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)) and for the browser agent to respect `settings.json` overrides ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)).

- **Memory system improvements** – Several feature-level requests (tracked under [#26516](https://github.com/google-gemini/gemini-cli/issues/26516)) ask for deterministic redaction, quarantine of invalid patches, and stopping retries on low-signal sessions.

## Developer Pain Points

- **Agent hangs and false success** – The generalist agent hanging forever ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)) and subagents reporting success despite hitting turn limits ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)) are two of the most-upvoted bugs, undermining trust in long-running tasks.

- **Shell execution stuck** – Commands that finish remain in “Waiting input” state ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), forcing users to cancel sessions manually. This is a common frustration with a simple reproduction.

- **Memory system overhead** – Auto Memory retries low-signal sessions indefinitely ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)) and logs secrets before redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), raising both performance and security concerns.

- **Configuration inconsistencies** – Symlinks for agents are ignored ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)), browser agent ignores `settings.json` overrides ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), and subagents run without permission after update ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-09

**Today’s Update Brief**
No new releases were published in the last 24 hours. Community activity remained high, with **30 issues** updated and **1 pull request** merged. The conversation focused heavily on input/keyboard ergonomics, model interoperability (BYOK, quota errors), and persistent plugin hook bugs. Windows-specific issues also saw a notable uptick.

---

## Releases
None today.

---

## Hot Issues (10 selected)

1. **[#13 – CLI input should have a vi/vim input mode](https://github.com/github/copilot-cli/issues/13)**
   *Impact: heavy* – 63 👍, 7 comments, open since Sep 2025. Still the most-requested input feature. No maintainer response yet.
   *Workflow affected:* Interactive prompt navigation for vim users.

2. **[#1928 – [area:sessions] Allow to pause copilot work](https://github.com/github/copilot-cli/issues/1928)**
   9 comments, 2 👍. Request to “pause” a session mid-stream to inject context. Maintainers have not commented.
   *Workflow:* Users want to correct direction without losing session state.

3. **[#3547 – [agents, models] Background sub-agent hangs at total_turns=0 with gpt-5.5](https://github.com/github/copilot-cli/issues/3547)**
   6 comments. Agent is dispatched but never progresses. Model-specific regression likely.
   *Impact:* Blocks background task chaining with newer models.

4. **[#3436 – [enterprise, MCP] /mcp search constructs wrong URL for custom MCP registries](https://github.com/github/copilot-cli/issues/3436)**
   5 comments. Missing `/v0.1/` path segment causes 404 for self-hosted registries.
   *Impact:* Breaks enterprise MCP discovery entirely.

5. **[#2867 – [models] Claude Opus 4.6 (high) returns "model not supported" after quota wait](https://github.com/github/copilot-cli/issues/2867)**
   5 comments. User followed CLI’s quota advice, then got a permanent error.
   *Impact:* Trust in quota handling / retry logic.

6. **[#2540 – [sessions, agents, plugins] Plugin-defined preToolUse hooks do not fire](https://github.com/github/copilot-cli/issues/2540)**
   4 comments, 3 👍. Hooks defined in `hooks.json` are silently ignored in both main session and subagents.
   *Impact:* Plugin extensibility broken for pre-tool lifecycle.

7. **[#3652 – [sessions, Windows/WSL] Copilot Chat in WSL has 40-80s startup delays](https://github.com/github/copilot-cli/issues/3652)**
   3 comments. Caused by `CopilotCLIChatSessionContentProvider.listSessions`.
   *Impact:* Terrible UX for WSL users (educational accounts too)

8. **[#3701 – [Windows, MCP] Runaway MCP server spawning (IDE lock-file watcher re-init loop)](https://github.com/github/copilot-cli/issues/3701) – CLOSED**
   Closed as “fixed” but commenters noted the fix is not yet in a release.
   *Impact:* High CPU / memory on Windows with VS Code integration.

9. **[#3688 – [agents, configuration] Repository-level agents resolved relative to git root, but skills/MCP relative to CWD](https://github.com/github/copilot-cli/issues/3688)**
   1 comment, 1 👍. Inconsistency between resolution bases for custom agents vs skills/MCP servers.
   *Impact:* Confusing project configuration for multi-root workspaces.

10. **[#3716 – [models, tools] [Regression] Function call fails in v1.0.60](https://github.com/github/copilot-cli/issues/3716)**
    New regression – `tools.function.parameters` schema validation error with `$ref`.
    *Impact:* Breaks any tool definition using `$ref` in JSON Schema.

---

## Key PR Progress

Only **1 PR** was active in the last 24 hours:

- **[#1960 – install: use GITHUB_TOKEN for authenticated GitHub requests](https://github.com/github/copilot-cli/pull/1960)**
  *Status:* Closed (merged).
  *Summary:* The install script now respects `GITHUB_TOKEN` to avoid rate limits and enable installation from private repos.
  *Impact:* Smoother CI/CD and enterprise rollout scenarios.

*(No other open PRs received updates today.)*

---

## Feature Request Clusters

| Cluster | Issue examples | Community support |
|---------|----------------|-------------------|
| **Input & keyboard customization** | vi/vim mode (#13), ESC ESC save to history (#3720), /model picker inconsistency (#3715), Windows copy-on-select circumvented (#3724) | Very high – >60 👍 on #13 |
| **Session lifecycle improvements** | Pause session (#1928), concurrent session management (#2966), visual delimiters for agentic loop iterations (#3718) | Moderate – 2-9 comments each |
| **Model flexibility & cost** | /model switch to BYOK/local models (#3709), lower-cost open-weight options (#3707), disable streaming (#3717), quota/recovery improvements (#2867) | Growing – multiple unique requests this week |
| **Plugin hook parity** | preToolUse not firing (#2540), sessionStart hook not printing (#2201), ability to modify prompts via hook (#3713) | Moderate – 3-4 comments each, 2-3 👍 |
| **Enterprise/OTel & networking** | MCP registry URL fix (#3436), OTel mTLS auth (#3477), MCP server runaway (#3701 closed) | Low but critical for self-hosted users |

---

## Developer Pain Points

1. **Plugin hooks are unreliable** – preToolUse never fires, sessionStart doesn’t print, and hooks are observational-only (can’t modify prompts). This undermines the extension ecosystem.
2. **Model reliability & quota confusion** – Users follow CLI advice (wait for quota) and then get permanent “model not supported” errors. No clear retry path.
3. **Windows-specific friction** – WSL startup delays, uninstall fails, MCP server loops, `/add-dir` path handling with `~`, and clipboard interaction issues all reported in a single day.
4. **Inconsistent configuration resolution** – Custom agents vs skills vs MCP servers use different base directories (git root vs CWD).
5. **Input / keyboard ergonomics lagging** – The most-upvoted issue (#13, vim mode) is 9 months old. Even basic enhancements like ESC ESC save to history or consistent `/model` picker behavior remain missing.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-09

## Today's Update Brief
Activity was low with no new releases or pull requests. Three open bugs surfaced, highlighting regressions in API key authentication and the removal of the `@filename` feature in version 0.11.0. A closed documentation issue signals the ongoing deprecation of the Python-based CLI in favor of the TypeScript rewrite, `kimi-code`.

## Releases
*None in the last 24 hours.*

## Hot Issues

### 1. [Bug] Installation failed — ambiguous prompt
**#2436** — Reported by @pleabargain on 2026-06-07 (updated 2026-06-08).
User running `kimi-cli` version 1.47.0 with model `kimi-k2.6` encounters an installation failure. The title notes that Kimi "can't seem to make up her mind," suggesting the installation dialog is inconsistent or stuck.
🔗 [Issue #2436](https://github.com/MoonshotAI/kimi-cli/issues/2436)

### 2. [Bug] Broken Workflow — API key authentication silently removed
**#2442** — Reported by @andrew-sz on 2026-06-08.
Regressed in version 0.11.0 on macOS with model 2.6. The summary (truncated) indicates that API key authentication has been silently removed from the "Kimi..." workflow—a critical regression for users relying on API-based access.
🔗 [Issue #2442](https://github.com/MoonshotAI/kimi-cli/issues/2442)

### 3. [Enhancement – Closed] Docs deprecation banner to redirect to kimi-code (TypeScript rewrite)
**#2376** — Proposed by @MengyangGao on 2026-05-27 (closed 2026-06-08).
Suggests adding a deprecation banner on GitHub Pages documentation to inform users that the Python-based `kimi-cli` is superseded by the TypeScript rewrite `kimi-code`. The issue is now closed, implying the banner has been implemented or rejected.
🔗 [Issue #2376](https://github.com/MoonshotAI/kimi-cli/issues/2376)

### 4. [Bug] `@filename` support removed in new version
**#2441** — Reported by @Liufangyu on 2026-06-08.
User reports that version 0.11.0 no longer supports the `@filename` syntax for referencing files. This feature was previously available and its removal breaks existing workflows. Posted in both Chinese and English.
🔗 [Issue #2441](https://github.com/MoonshotAI/kimi-cli/issues/2441)

## Key PR Progress
*No pull requests were updated in the last 24 hours.*

## Feature Request Clusters
Only one feature request appeared in the past 24 hours (the deprecation banner in #2376), which was already closed. No clustering of multiple similar requests is possible today.

## Developer Pain Points
- **Authentication regression**: Issue #2442 reports that API key authentication has been silently removed in version 0.11.0, breaking a core workflow for non‑logged‑in users.
- **Feature removal**: Issue #2441 documents the loss of `@filename` support in 0.11.0, a basic file‑referencing capability that disrupts command‑line usage.
- **Installation ambiguity**: Issue #2436 points to an unclear installation prompt that may confuse users during setup.
- **Version confusion**: The coexistence of version numbers 1.47.0 (mentioned in #2436) and 0.11.0 (in #2442 and #2441) suggests two different codebases or release tracks, adding to user uncertainty—especially given the announced migration from Python to TypeScript.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-09

## 1. Today’s Update Brief
Activity is high with 50 issues and 50 PRs updated in the last 24 hours. No new releases were published. The community is focused on provider‑related regressions (OpenAI header timeout, Bedrock Mantle empty responses, duplicated issues around `session_message.seq` constraint failures), while several PRs land fixes for JSON streaming, config directory handling, and MCP catalog pagination. A major feature request around native session goals (#27167) continues to attract strong support.

## 2. Releases
None in the last 24 hours.

## 3. Hot Issues (10 noteworthy)

1. **#27167 [Feature]: Add native session goals with /goal**
   *Comments: 37 · 👍 65*
   Proposes a persistent session lifecycle feature (e.g., `/goal`) to replace ad‑hoc slash commands. High community interest.
   https://github.com/anomalyco/opencode/issues/27167

2. **#5474 `/undo` command only rolls back AI conversation message, not file changes**
   *Comments: 28 · 👍 12*
   After `/undo`, file changes remain on disk, causing mismatch between chat state and workspace. Long‑standing issue (opened Dec 2025).
   https://github.com/anomalyco/opencode/issues/5474

3. **#29548 OpenAI provider headers timeout after 10000ms on 1.15.11**
   *Comments: 11*
   Regression after upgrade; increasing `headerTimeout` resolves it. Affects users of OpenAI provider.
   https://github.com/anomalyco/opencode/issues/29548

4. **#30948 [Closed] amazon-bedrock provider returns empty output against Bedrock‑compatible gateway in 1.16.0**
   *Comments: 8 · 👍 4*
   Works with direct Bedrock but fails through a compatible gateway. Closed (likely fixed or duplicate).
   https://github.com/anomalyco/opencode/issues/30948

5. **#23153 [Feature]: Pay‑Go with crypto**
   *Comments: 7 · 👍 15*
   Request to support cryptocurrency payments for OpenCode Go.
   https://github.com/anomalyco/opencode/issues/23153

6. **#31247 Opus 4.8 via GitHub Copilot leaks repeated literal tool‑call text**
   *Comments: 6*
   Long tool‑heavy sessions cause assistant to emit raw `call read` etc. text, leading to 400 errors.
   https://github.com/anomalyco/opencode/issues/31247

7. **#15535 [Feature]: Support MCP Resources (resources/read) in addition to MCP Tools**
   *Comments: 6 · 👍 16*
   OpenCode currently exposes only MCP tools; users want `resources/read` to access server‑side data directly.
   https://github.com/anomalyco/opencode/issues/15535

8. **#13430 [Feature]: Clickable file:line references in web UI**
   *Comments: 5*
   File paths like `src/foo.ts:123` in chat are not hyperlinks; cannot jump to editor.
   https://github.com/anomalyco/opencode/issues/13430

9. **#31349 [Closed] API requests to Bedrock Mantle’s OpenAI Responses API endpoint fail due to signature mismatch**
   *Comments: 5*
   AWS SigV4 auth misconfiguration when using Bedrock Mantle for GPT‑5.5/5.4. Closed.
   https://github.com/anomalyco/opencode/issues/31349

10. **#16960 [Feature]: Compaction loses AGENTS.md/CLAUDE.md instruction context**
    *Comments: 5 · 👍 2*
    Compaction call receives empty system prompt, causing agent to lose behavioral instructions.
    https://github.com/anomalyco/opencode/issues/16960

## 4. Key PR Progress (10 important)

1. **#31434 [Closed] fix: drain pending events before breaking on session idle in JSON format mode**
   Fixes `opencode run --format json` missing text events when idle fires early. Merged quickly.
   https://github.com/anomalyco/opencode/pull/31434

2. **#31447 [Open] fix(config): ensure config directory exists before writing .gitignore**
   Prevents startup crash when `OPENCODE_CONFIG_DIR` points to non‑existent path.
   https://github.com/anomalyco/opencode/pull/31447

3. **#31448 [Open] fix(ui): add overflow-hidden to v2 layout chat panel for rounded bottom corners**
   Visual fix for square corners in new layout.
   https://github.com/anomalyco/opencode/pull/31448

4. **#31446 [Open] fix: drain pending events before breaking on session idle in JSON format mode**
   Duplicate/refined version of #31434 for CI environments.
   https://github.com/anomalyco/opencode/pull/31446

5. **#31329 [Open] fix(opencode): graceful error handling for PDF/image file read failures**
   Instead of crashing, gracefully handles corrupted/permission‑denied files.
   https://github.com/anomalyco/opencode/pull/31329

6. **#31444 [Open] fix(plug): skip spinner animation in non‑TTY environments**
   Prevents garbage ANSI output during `opencode plugin install` in CI.
   https://github.com/anomalyco/opencode/pull/31444

7. **#31442 [Open] fix(opencode): paginate MCP catalogs**
   Follows MCP cursors for listing tools/prompts/resources, caps at 1000 pages.
   https://github.com/anomalyco/opencode/pull/31442

8. **#30332 [Closed] fix(opencode): generate reasoning variants for all OpenRouter models**
   Previously only models with `gpt` in ID got variants; now all OpenRouter models supported.
   https://github.com/anomalyco/opencode/pull/30332

9. **#30190 [Open] fix(opencode): make OpenRouter prompt cache 1h TTL opt‑in via env**
   Default cache TTL remains 5min; users can opt into longer cache via environment variable.
   https://github.com/anomalyco/opencode/pull/30190

10. **#31440 [Open] fix(opencode): retry transient network errors instead of surfacing as terminal**
    Retries on ECONNRESET, fetch failures, etc., preventing raw error surfacing.
    https://github.com/anomalyco/opencode/pull/31440

## 5. Feature Request Clusters
- **Persistent session goals / lifecycle**: Issue #27167 proposes a `/goal` command for long‑running sessions. High upvotes.
- **MCP resource support**: Issue #15535 and PR #31442 indicate growing demand for reading server resources (not just tools).
- **Web UI improvements**: Clickable file references (#13430) and built‑in editor file opening (#31406) are requested.
- **Payment methods**: Crypto support (#23153) and Chinese mainland tax invoices (#30716) show global user base needs.
- **Thinking/reasoning variants**: Issue #31180 asks for MiniMax M3 thinking modes; PR #30477 adds `reasoning` as interleaved field for vLLM. Repeated interest in model‑specific reasoning UIs.

## 6. Developer Pain Points
- **Undo not reverting file changes** (#5474) – a fundamental workflow break that forces manual cleanup.
- **Provider‑specific regressions**: OpenAI header timeout (#29548), Bedrock Mantle empty responses (#31349, #31430), and Amazon Bedrock gateway incompatibility (#30948) suggest recent releases introduced provider‑side instability.
- **Compaction losing context** (#16960) – session compaction ignores `AGENTS.md`/`CLAUDE.md` instructions.
- **Plugin cache staleness** (#25293) – `@latest` plugins can pin to old npm versions until manual cache clear.
- **Multiple “NOT NULL constraint failed: session_message.seq” reports** (#31204, #31413, #31412) – a database migration issue in 1.15.13+ that prevents new messages from being saved. Quickly flagged by the community.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

## Qwen Code Community Digest — 2026-06-09

### Today’s Update Brief
No new releases in the last 24 hours; the scheduled **v0.18.0-preview.0** release failed (#4875). Activity remains high with **31 issues** and **50 pull requests** updated. Major themes include daemon/serve transport upgrades, session memory and OOM bugs, and a growing push for feature parity with Claude Code (declarative agents, web search, import config). The community is actively discussing and contributing to fixes for the severe OOM crash (#4815) and its root cause in hook continuations (#4838).

---

### Releases
None (release v0.18.0-preview.0 attempted but failed — see #4875).

---

### Hot Issues (10 selected by impact and comment count)

1. **#4514** — [OPEN] *Tracking: daemon capability gaps & prioritized backlog (post v0.16-alpha)*
   **13 comments** — Comprehensive issue tracking remaining gaps in the `qwen serve` HTTP/SSE surface, including slash-command passthrough and ACP compliance. Community maintainers are coordinating a phased backlog.
   🔗 https://github.com/QwenLM/qwen-code/issues/4514

2. **#4815** — [CLOSED] *Severe OOM with `qwen --resume` and Escape key broken*
   **9 comments** — Critical memory leak: OOM reappears within ~10 minutes after resuming a session, and the Escape key becomes non-functional. Crash output shows GC failures. Closed after fix in #4840.
   🔗 https://github.com/QwenLM/qwen-code/issues/4815

3. **#4821** — [OPEN] *Feat: support declarative agent definitions via frontmatter files*
   **6 comments** — Users want to define agents via Markdown + YAML frontmatter (like Claude Code’s `.claude/agent`). The request includes `permissionMode`, `maxTurns`, and model configuration.
   🔗 https://github.com/QwenLM/qwen-code/issues/4821

4. **#4095** — [OPEN] *Feat: atomic file write & transaction rollback*
   **4 comments** — Phase 1 shipped but introduced a Docker/shared-workspace ownership reset due to POSIX `rename`. Mitigation PR #4431 added. Phase 2 discussion includes rollback of failed write transactions.
   🔗 https://github.com/QwenLM/qwen-code/issues/4095

5. **#4801** — [CLOSED] *Add a dedicated web_search tool*
   **4 comments** — Request for a real web search tool (like Google Search) instead of relying on the model to fetch specific URLs via `web_fetch`. Multiple users upvoted. Closed with reference to existing PR #3841.
   🔗 https://github.com/QwenLM/qwen-code/issues/4801

6. **#4782** — [OPEN] *Tracking: ACP Streamable HTTP transport — implementation status, RFD alignment & upgrade plan*
   **3 comments** — Documents current state of ACP Streamable HTTP transport at `/acp`. Enables native connections from Zed, Goose, JetBrains. Community wants WebSocket transport as next step (PR #4773).
   🔗 https://github.com/QwenLM/qwen-code/issues/4782

7. **#4794** — [CLOSED] *Compact mode tool merge causes full-screen flash on every tool batch*
   **3 comments** — When compact mode is on, tool groups are merged, shrinking the history array and causing Ink to re-render the full screen. Users report visual flickering.
   🔗 https://github.com/QwenLM/qwen-code/issues/4794

8. **#4675** — [CLOSED] *Vim INSERT mode Esc key leak, Enter not sending in NORMAL mode, and mode indicator render lag*
   **3 comments** — Vim mode issues: pressing Esc in INSERT also triggers AppContainer’s escape handler; Enter key doesn’t send in NORMAL mode; mode indicator lags. Multiple related keybinding bugs.
   🔗 https://github.com/QwenLM/qwen-code/issues/4675

9. **#4864** — [OPEN] *CI: enable required status checks on main branch protection*
   **2 comments** — PR #4798 was merged with all CI failing, breaking `tsc --build` on main. The root cause was a missing syntax token caught by CI but bypassed because no required checks were enforced. High priority for project stability.
   🔗 https://github.com/QwenLM/qwen-code/issues/4864

10. **#4838** — [OPEN] *BUG: Hook continuations skip tool-result microcompaction in long /goal loops*
    **2 comments** — During investigation of #4815, found that `microcompactHistory()` only runs in UserQuery/Cron branches, not in Hook continuations (used by `/goal`). This causes unbounded memory growth in long autonomous loops.
    🔗 https://github.com/QwenLM/qwen-code/issues/4838

---

### Key PR Progress (10 important PRs updated in last 24h)

1. **#4833** — *feat(daemon): session idle reaper for automatic cleanup*
   Adds a periodic reaper that closes sessions with no SSE subscribers, no registered clients, no active prompt, and exceeding a configurable idle TTL (default 30 min). Helps prevent resource leaks.
   🔗 https://github.com/QwenLM/qwen-code/pull/4833

2. **#4874** — *feat(web-shell): make bottom-left mode indicator mouse-selectable*
   Renders the approval-mode indicator as a real `<button>`; clicking it opens the inline approval-mode picker. Improves web shell UX without keyboard.
   🔗 https://github.com/QwenLM/qwen-code/pull/4874

3. **#4852** — *fix(cli): fix cursor left-move stalling at hard-wrapped line boundary*
   Fixes a text buffer bug where pressing left-arrow at the start of a hard-wrapped visual row causes the cursor to appear stuck. Affects long input dialogs.
   🔗 https://github.com/QwenLM/qwen-code/pull/4852

4. **#4764** — *feat(memory): add user-level auto-memory at ~/.qwen/memories/*
   Adds a cross-project auto-memory directory for user preferences, working style, and background (mirrors Claude Code’s private/team scope). Reuses existing 4-type taxonomy.
   🔗 https://github.com/QwenLM/qwen-code/pull/4764

5. **#4871** — *refactor(core): remove GitService, migrate /restore to FileHistoryService*
   Removes the shadow-git-based `GitService` and rewires `/restore` to use `FileHistoryService`. Unifies two parallel file recovery systems and reduces complexity.
   🔗 https://github.com/QwenLM/qwen-code/pull/4871

6. **#4840** — *fix(core): microcompact hook continuations*
   Fixes #4838 by allowing Hook continuations to periodically microcompact old tool results during long-running autonomous loops like `/goal`. Keeps existing user/cron idle cleanup intact.
   🔗 https://github.com/QwenLM/qwen-code/pull/4840

7. **#4842** — *feat(core): declarative agent frontmatter v1 — permissionMode bridge + maxTurns wiring + color allowlist*
   First vertical slice of Claude Code 2.1.168 parity: maps CC’s `permissionMode` to qwen’s `approvalMode`, wires `maxTurns`, and adds color allowlist for agent icons.
   🔗 https://github.com/QwenLM/qwen-code/pull/4842

8. **#4490** — *feat(daemon): merge daemon-mode feature batch into main*
   Large integration merge (46 commits, 386 files, +115k LOC) bringing core daemon-mode features for v0.16-alpha. Includes ACP transport, session management, and event bus improvements.
   🔗 https://github.com/QwenLM/qwen-code/pull/4490

9. **#4855** — *fix(daemon): stamp serverTimestamp at EventBus and fix streaming state finalization*
   Fixes two daemon replay correctness issues: events now get server-side timestamps at the event bus; replayed transcript blocks finalize correctly.
   🔗 https://github.com/QwenLM/qwen-code/pull/4855

10. **#4857** — *feat(extension): add description field to ExtensionConfig*
    Adds an optional `description` field for extensions, displayed in `qwen extensions list` and install consent prompts. Improves discoverability.
    🔗 https://github.com/QwenLM/qwen-code/pull/4857

---

### Feature Request Clusters

**Daemon / ACP Transport**
Multiple issues target the daemon serve surface: ACP Streamable HTTP transport (#4782), next-phase WebSocket transport (PR #4773), and a comprehensive tracking issue for remaining gaps (#4514). Community interest is high for native integration with editors like Zed and JetBrains.

**Declarative Agents (Claude Code Parity)**
Issues #4821 and PR #4842 push for support of agent definitions via Markdown frontmatter, including `permissionMode`, `maxTurns`, and icon color config. This mirrors Claude Code’s 2.1.168 feature and is tied to the `/swarm` multi-agent roadmap.

**Web Search Tool**
A recurring request (e.g., #4801, #3841) for a dedicated `web_search` tool that performs real web searches (e.g., Google Search) rather than relying on `web_fetch`. The underlying DashScope platform already provides such a tool, and the community argues Qwen Code is the only major code agent CLI lacking it.

**Claude Config Migration**
Issue #4845 proposes a `/import-config` command to migrate MCP servers, instructions, permissions, and custom commands from Claude Code (CLI) and Claude Desktop into Qwen Code, reducing switching friction.

**CI / Workflow Improvements**
Several requests target project infrastructure: automated CHANGELOG generation (#4872), immediate queued status for `@qwen-code /review` PR review requests (#4846), and required status checks on main branch protection (#4864) to prevent broken merges.

---

### Developer Pain Points

- **Memory / OOM issues** — Severe OOM on session resume (#4815) and unbounded memory growth in `/goal` loops (#4838) are top frustrations. The community has contributed a fix (#4840) and investigations are ongoing.
- **Shell / sleep interception** — Foreground sleep interception blocks legitimate rate-limit backoff (#4707), causing sandboxed sessions to abort when tools need to wait.
- **File ownership in Docker** — Atomic file write (Phase 1, #4095) resets file ownership in Docker/shared workspaces due to POSIX `rename` creating new inodes.
- **UI rendering glitches** — Compact mode causes full-screen flash on every tool batch (#4794). Vim mode has multiple keybinding bugs (Esc leak, Enter not sending, mode indicator lag) (#4675). Web shell cursor stalling at wrapped lines (#4852) also reported.
- **Omitted extension examples** — Published npm package omits extension example templates required by `qwen extensions new` (#4718), breaking extension development.
- **Release pipeline failures** — The v0.18.0-preview.0 release failed (#4875), and CI checks were bypassed on a recent merge (#4864), highlighting process gaps.

</details>