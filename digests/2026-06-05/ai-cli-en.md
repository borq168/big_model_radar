# AI CLI Tools Community Digest 2026-06-05

> Generated: 2026-06-05 02:36 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# Cross-Tool AI CLI Ecosystem Report — 2026-06-05

## 1. Daily Cross-Tool Overview

Today's activity spans six major AI CLI tools with mixed release velocity: Anthropic shipped a patch with managed settings, OpenAI released four Rust alpha builds, Google pushed a hotfix, and GitHub issued a minor UX release — while Kimi and OpenCode published no new versions. Community reports concentrate on authentication failures (Codex, Kimi, OpenCode), context window management bugs (Claude, Copilot, OpenCode), and session reliability issues across nearly every tool. PR activity is strongest in Qwen Code (50 PRs updated) and OpenCode (20 PRs), with Copilot CLI seeing almost zero substantive code contributions.

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Releases Today | Notable Release |
|---|---|---|---|---|
| Claude Code | ~50 | 6 | v2.1.163 (patch) | Managed version-range settings, `/plugin list` |
| OpenAI Codex | ~30 (est.) | ~10 | 4 alpha builds (v0.138.0-a.1–4) | Rust runtime alpha updates |
| Gemini CLI | 50 | 34 | v0.45.1 (patch), nightly | SSRF fix, CJK rendering, PTY leak |
| Copilot CLI | 35 | 2 (non-substantive) | v1.0.60-0 (minor) | Vim-style diff navigation, billing help |
| Kimi Code | 7 (new) | 6 | None | — |
| OpenCode | 50 | 20 | None | — |
| Qwen Code | 30 | 50 | nightly | `/copy` thought-block fix, daemon-mode merge |

## 3. Shared Feature Directions

**Cross-tool session and context management** appears across four tools:
- **Claude Code** (#58588): Programmatic session naming, coloring, and automation flags
- **OpenCode** (#18569): Request for `--resume <session name>` CLI flag like Cursor/Codex
- **Qwen Code** (#4754, #4747): Session-local model switching (not persisted), cross-project user memory
- **Copilot CLI** (#2398, #3676): Default permission profiles, session naming, resumed authentication state

**Cross-platform parity gaps** are explicitly called out in:
- **OpenAI Codex** (#11023, 476 👍): Linux desktop app demand driven by macOS regression
- **Copilot CLI** (#3653, #2082): Linux sandbox non-functional, Linux keyboard shortcut broken
- **Qwen Code** (#4591): Request for built-in Computer Use on all three platforms

**Context window and compaction issues** span multiple tools with user-facing quality impact:
- **Claude Code** (#63060, #62063): 1M-context defaulting and API errors on Pro plans
- **Copilot CLI** (#3677): Premature compaction at 18% of real capacity for long-context models
- **OpenCode** (#30834, #30811): Failed compaction summaries, context loss in long sessions

**Authentication and credential management** problems recur:
- **OpenAI Codex**: OAuth token refresh fixes (#26482 closed today)
- **Copilot CLI** (#3596, #3682): Resumed sessions lose auth, BYOK token refresh gaps
- **Kimi Code** (#2425, #2427): Persistent 403 "Coding Agents only" errors
- **OpenCode** (#25765): ChatGPT OAuth refresh token preservation fix

**Memory and resource leak patching** active in multiple codebases:
- **Gemini CLI** (#27155): PTY memory/FD leak fix (merged)
- **OpenCode** (#20695): Active memory megathread with maintainer requests for heap snapshots
- **OpenAI Codex** (#25719): `syspolicyd` FD leaks on macOS

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Qwen Code |
|---|---|---|---|---|---|---|---|
| **Primary focus today** | Plugin ecosystem, version gating | Cross-platform desktop, sandbox | Security hardening, bug fixing | Keyboard input, session resume | Auth errors, terminal scroll | Memory, compaction, cost | Daemon mode, memory persistence |
| **Release velocity** | Steady patch cycles | Fast alpha iteration | Patch + nightly | Minor UX updates | Low | Low | Nightly + feature merges |
| **Community engagement** | AGENTS.md (4,060 👍) dominates | Linux desktop (476 👍) dominant | Symlink/Silent fallback (hot) | Keyboard regressions (high pain) | Auth errors (focused reports) | Memory (63 👍) & cost (74 👍) | `/stats`, auto-memory (active) |
| **Technical approach** | Plugin SDK, managed settings | Rust rewrite, MCP/RMCP | Node.js, A2A agent protocol | GitHub auth, multi-model | Terminal-based, VS Code ext | Effect-ts, native API | CLI + Desktop, daemon mode |
| **Target user friction** | Pro plan context limits | macOS `syspolicyd` leaks | HDD startup (77s cold) | Linux copy/paste broken | 403 errors block usage | Windows termination kills parent | Headless `xdg-open` crashes |

## 5. Community Activity Notes

**Highest issue volume**: Claude Code (~50 issues), OpenCode (50), and Gemini CLI (50) share top activity. These tools have broad user bases or ongoing regressions generating discussion.

**Highest PR velocity**: Qwen Code (50 PRs updated) leads, driven by the daemon-mode feature merge (46 commits, +115k LOC). OpenCode (20 PRs) and Gemini CLI (34 PRs) follow, the latter with a large batch of merged security and bug fixes.

**Most releases today**: OpenAI Codex (4 alpha builds) had the most release activity, though notes are minimal. Gemini CLI had two releases (patch + nightly). Copilot CLI and Claude Code each had one minor release. Kimi Code and OpenCode had none.

**Most responsive maintainers**: Gemini CLI shows the strongest maintainer response this batch — 9 PRs merged today including SSRF mitigation, CJK rendering, PTY leak fixes. OpenCode maintainers merged multiple automated-cleanup PRs and actively engaged on memory profiling. Claude Code has 5 open/closed PRs with triage scripts and tooling.

**Notable gaps**: Copilot CLI had zero substantive PR contributions in 24h — the two listed PRs are a placeholder and spam. This contrasts with high issue engagement (35 issues) and suggests community frustration without corresponding fix throughput.

## 6. Evidence-Backed Observations

**1. Context window management is a cross-cutting pain point affecting session quality and cost.**
Three tools have open issues about defaulting to wrong context sizes, premature compaction, or failed compaction: Claude Code (1M-context API errors on Pro), Copilot CLI (#3677: compaction at 18% of capacity), and OpenCode (#30834: compaction summaries never complete). These are distinct bugs but share a common pattern — users are losing session quality or incurring unexpected costs due to incorrect context window detection or handling.

**2. Cross-platform desktop parity remains incomplete, with Linux being the weakest target.**
OpenAI Codex has 476 👍 for a Linux desktop app, motivated by macOS regression (#11023). Copilot CLI's sandbox and keyboard shortcuts are broken on Linux (#3653, #2082). Qwen Code has headless environment crashes (#4712). No tool appears to have full, stable Linux desktop support — Windows and macOS receive more attention from maintainers.

**3. Session resume and authentication state loss is a recurring pattern across multiple tools.**
Copilot CLI (#3596, #3680) reports resumed sessions losing model picker access. Kimi Code (#2430) reports mid-task auto-logout without user action. OpenCode's ChatGPT OAuth token fix (#25765) addresses a specific session-disconnect issue. The gap is consistent: resuming a session does not reliably restore full authentication or capability state.

**4. Agent tool-call parsing failures remain unaddressed across model providers.**
Claude Code (#62123, #63875) reports intermittent "tool call could not be parsed" errors affecting Opus 4.7 on both macOS and Windows — two high-reaction bugs (91 👍, 45 👍) with no known fix. Kimi Code (#2383) has a PR repairing orphan tool_calls from mid-session crashes. These suggest that tool-call reliability is a model-side and client-side challenge that none of these tools have fully solved.

**5. Cross-session and cross-project memory persistence is an emerging feature cluster.**
Qwen Code has active work on global user-level auto-memory (#4747, PR #4764) and cross-session usage tracking (#4597, PR #4779). Claude Code's AGENTS.md request (#6235, 4,060 👍) is essentially about interoperable memory/configuration across tools. OpenCode has context epoch persistence (PR #30789) for session reproducibility. The direction is clear: users want agent knowledge and state to survive longer than a single session or project boundary.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-06-05

## Today's Update Brief

Anthropic shipped **v2.1.163** with version‑range managed settings and a new `/plugin list` command. Community activity remains high: 6 PRs and 50 updated issues in the last 24 hours. The top‑voted issue (AGENTS.md support, 4,060 👍) continues to dominate discussion, while a cluster of bugs around 1M‑context defaults and model tool‑call parsing persist across platforms.

## Releases

- **[v2.1.163](https://github.com/anthropics/claude-code/releases/tag/v2.1.163)** — Two changes:
  - Added `requiredMinimumVersion` and `requiredMaximumVersion` managed settings — Claude Code refuses to start if its version is outside the allowed range and directs the user to an approved version.
  - Added `/plugin list` command to list installed plugins, with `--enabled`/`--disabled` flags.

## Hot Issues

(The most impactful or community‑engaged issues updated in the last 24h.)

1. **[#6235 – Feature Request: Support AGENTS.md](https://github.com/anthropics/claude-code/issues/6235)**
   *Label: enhancement, area:core, memory* | 310 comments | 4,060 👍
   **What:** Advocates for adopting the emerging `AGENTS.md` standard so that Claude Code can share codebase‑understanding files with other AI coding agents (Codex, Cursor, Amp).
   **Impact:** CLAUDE.md is seen as too narrow; users want interoperability. The huge reaction count makes this the most requested enhancement.

2. **[#63060 – API Error: Usage credits required for 1M context](https://github.com/anthropics/claude-code/issues/63060)**
   *Label: bug, platform:macos, area:cost, api:anthropic* | 63 comments | 19 👍
   **What:** Users on Pro plans hit an “Usage credits required” error when a session tries to use the 1M context window.
   **Impact:** Blocks workflows for users who don’t have usage‑credits enabled and may not know how to switch models. Duplicate of #61869 (closed) and related to #62063.

3. **[#62063 – Defaults to 1M context on fresh session with no workaround on Pro plan](https://github.com/anthropics/claude-code/issues/62063)**
   *Label: bug, platform:macos, area:cost, area:model, api:anthropic, area:desktop* | 54 comments | 35 👍
   **What:** New sessions on the Pro plan automatically select 1M context, causing immediate API errors. No in‑app way to downgrade to standard context without `/model`.
   **Impact:** A persistent onboarding friction for Pro users.

4. **[#62123 – Model's tool call could not be parsed (retry also failed)](https://github.com/anthropics/claude-code/issues/62123)**
   *Label: bug, platform:macos, area:model, platform:vscode* | 45 comments | 91 👍
   **What:** Sessions intermittently stop with “The model’s tool call could not be parsed (retry also failed)”, aborting in‑progress actions. Reported predominantly with Opus 4.7.
   **Impact:** Work‑stopping; affects both CLI and VS Code extension on macOS.

5. **[#63875 – Recurring tool‑call parsing error on Windows](https://github.com/anthropics/claude-code/issues/63875)**
   *Label: bug, duplicate, platform:windows, area:model* | 32 comments | 45 👍
   **What:** Same error as #62123 but on Windows. Does not self‑correct; requires session restart.
   **Impact:** High‑frequency interruption for Windows users. Likely a model‑side issue affecting multiple platforms.

6. **[#53940 – Cowork Edit/Write tools silently truncate files](https://github.com/anthropics/claude-code/issues/53940)**
   *Label: bug, has repro, platform:windows, area:tools, area:cowork* | 22 comments | 11 👍
   **What:** The Cowork tools cap file writes at a byte‑conservation buffer limit, silently discarding content beyond that. Deterministic, reproduces at all file sizes.
   **Impact:** Data loss – users only discover truncation when re‑reading files.

7. **[#33932 – VS Code Extension: Diff review UI similar to GitHub Copilot Edits Review](https://github.com/anthropics/claude-code/issues/33932)**
   *Label: enhancement, area:ide, platform:vscode* | 18 comments | 81 👍
   **What:** Request for a dedicated diff‑review interface inside VS Code (like Copilot Edits Review) to approve/reject changes before they are applied.
   **Impact:** Would greatly improve the review workflow for Claude Code’s file edits.

8. **[#58588 – Allow /rename and /color to be set programmatically at session start](https://github.com/anthropics/claude-code/issues/58588)**
   *Label: enhancement, area:tui, platform:wsl, area:cli* | 9 comments | 8 👍
   **What:** Users want to configure session name (`/rename`) and color (`/color`) via CLI flags or config files instead of manually during each session.
   **Impact:** Useful for automated / scripted use cases and multi‑session management.

9. **[#61012 – Usage limit reached repeatedly without active use — Pro plan](https://github.com/anthropics/claude-code/issues/61012)**
   *Label: bug, platform:windows, area:cost* | 9 comments | 3 👍
   **What:** Pro plan users report hitting usage limits even when Claude Code is idle; background processes may be consuming credits.
   **Impact:** Unexpected billing and interrupted workflows.

10. **[#65527 – Remote sessions don't clearly indicate which machine commands execute on](https://github.com/anthropics/claude-code/issues/65527)**
    *Label: enhancement, platform:macos, area:tui, area:ui* | 3 comments (just opened today) | 0 👍
    **What:** When Claude Code drives a remote machine, there is no persistent indicator of local vs. remote execution. Sessions in the same project group look identical.
    **Impact:** Users can mistakenly run destructive commands on the wrong machine. A safety/UX gap.

## Key PR Progress

1. **[#65344 – fix(scripts): correct premature return in markStale and add --debug flag to auto-close-duplicates](https://github.com/anthropics/claude-code/pull/65344)**
   *Open* – Fixes a logic bug in the stale‑issue marking script (`scripts/sweep.ts`) and improves logging for duplicate auto‑closure. Maintainer‑facing tooling.

2. **[#44742 – fix: diagnostic tool + root cause analysis for session persistence data loss](https://github.com/anthropics/claude-code/pull/44742)**
   *Closed* – Adds `scripts/diagnose-session-persistence.ts` to help debug the VS Code extension’s failure to save conversation transcripts to disk, affecting 12+ duplicate issues. A user‑facing diagnostic script.

3. **[#65286 – fix(plugins): add missing plugin.json manifest for plugin-dev](https://github.com/anthropics/claude-code/pull/65286)**
   *Open* – Adds the required `plugin.json` manifest to the `plugin-dev` plugin so it can be discovered and installed normally. Required for plugin SDK development.

4. **[#65314 – scripts: add detect-theme-color-issues to cluster light‑theme color visibility bugs](https://github.com/anthropics/claude-code/pull/65314)**
   *Open* – A triage script that scans open issues for unreadable text on light themes (the `color7`/`color0` collision family) and posts a grouping comment. Helps maintainers deduplicate.

5. **[#65223 – Spelling: Fix typo in security guidance plugin](https://github.com/anthropics/claude-code/pull/65223)**
   *Closed* – Fixes a small typo (“reqwest” → “request”) in the security guidance plugin documentation.

6. **[#58673 – s](https://github.com/anthropics/claude-code/pull/58673)**
   *Open* – Title and description are just “s”; likely a placeholder or test PR. No meaningful changes.

## Feature Request Clusters

*Identified from enhancement‑labeled issues with multiple independent requests.*

- **Inter‑operable Agent Configuration (AGENTS.md)** – Issue [#6235](https://github.com/anthropics/claude-code/issues/6235) (4,060 👍) calls for adoption of the cross‑tool `AGENTS.md` standard. No counter‑requests; the CLAUDE.md approach is seen as too Claude‑specific. This is the single most‑upvoted request.

- **VS Code Diff Review** – Two issues ([#33932](https://github.com/anthropics/claude-code/issues/33932), 81 👍 and [#31888](https://github.com/anthropics/claude-code/issues/31888), 17 👍) ask for a batch‑diff review modal inside VS Code, similar to Cursor’s native agent or GitHub Copilot Edits Review. Both request approval before file changes are written.

- **Session Customisation & Automation** – Requests for programmatic session configuration ([#58588](https://github.com/anthropics/claude-code/issues/58588): `/rename`/`/color` via CLI flags), disabling automatic branch creation ([#64948](https://github.com/anthropics/claude-code/issues/64948)), and seamless parallel multi‑branching ([#52051](https://github.com/anthropics/claude-code/issues/52051)). Common theme: more control over session lifecycle and state isolation.

- **Remote Collaboration Visibility** – [#65527](https://github.com/anthropics/claude-code/issues/65527) (just opened) requests a persistent indicator of whether commands execute locally or on a remote machine. No duplicates yet, but the safety implications suggest this may gather support quickly.

## Developer Pain Points

*Recurring frustrations reported across multiple issues.*

- **1M‑Context API Errors on Pro Plans** – Three related issues ([#63060](https://github.com/anthropics/claude-code/issues/63060), [#61869](https://github.com/anthropics/claude-code/issues/61869), [#62063](https://github.com/anthropics/claude-code/issues/62063)) describe sessions defaulting to the 1M context window and immediately failing with “Usage credits required”. Pro users are stuck without an automatic fallback to standard context. Workaround: manual `/model` switch.

- **Model Tool‑Call Parsing Failures** – Two high‑reaction bugs ([#62123](https://github.com/anthropics/claude-code/issues/62123), macOS + VS Code, 91 👍 and [#63875](https://github.com/anthropics/claude-code/issues/63875), Windows, 45 👍) report that Claude occasionally fails to parse its own tool calls, aborting the task with no recovery. Affects multiple models (especially Opus 4.7). No known fix as of today.

- **Data Loss / Silent Truncation** – Cowork’s Edit/Write tools silently truncate files ([#53940](https://github.com/anthropics/claude-code/issues/53940)), and the VS Code extension fails to persist session transcripts on IDE restart ([#44742](https://github.com/anthropics/claude-code/pull/44742) – PR with diagnostic script, but no core fix merged). Both result in lost work.

- **Windows TUI Unresponsiveness** – Issue [#59750](https://github.com/anthropics/claude-code/issues/59750) reports the agents TUI fully unresponsive on Windows Terminal (broken rendering, dead input loop). Confined to Windows, but severe for affected users.

- **ENOSPC False Positives on Large Filesystems** – Bug [#63877](https://github.com/anthropics/claude-code/issues/63877) (fixed in a yet‑unnumbered release?) noted that `statfs` 32‑bit truncation causes false “no space left” errors on filesystems >17.6 TB. Affected versions 2.1.153–2.1.158. Now closed.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-05

## Today's Update Brief

Four Rust alpha releases landed today (v0.138.0-alpha.1 through .4) alongside active triage on a Linux desktop app request that has accumulated 476 reactions. The community is unusually vocal about macOS and Windows desktop performance regressions, with multiple reports of `syspolicyd` file descriptor leaks and WSL integration slowdowns drawing maintainer attention.

## Releases

**rust-v0.138.0-alpha.1 through .4** — Four consecutive alpha releases of the Rust-based CLI/runtime, each tagged within the last 24 hours. Release notes are minimal ("Release 0.138.0-alpha.x"); no changelog details were included in the commit messages.

## Hot Issues

1. **[#11023 — Codex desktop app for Linux](https://github.com/openai/codex/issues/11023)**
   The most-requested feature by a wide margin: 476 👍 and 97 comments. The author reports that a prior macOS issue (#10432) makes the desktop app nearly unusable on their Mac laptop, driving demand for a native Linux build. This has been open since February and remains the top community ask.

2. **[#20741 — Desktop project chat histories disappeared after update](https://github.com/openai/codex/issues/20741)**
   26 comments. A Pro user on macOS Tahoe reports that all project chat histories vanished after upgrading to build 2345. No workaround documented yet. Affects users with extensive session archives.

3. **[#25715 — Codex App unusably slow with WSL as agent environment](https://github.com/openai/codex/issues/25715)**
   21 comments, 22 👍. Routine turns take excessive wall-clock time when the agent is pointed at a WSL2 Linux environment on Windows. Performance bottleneck appears to be in the filesystem bridge or process spawning layer.

4. **[#25719 / #25882 / #26341 — macOS `syspolicyd` / `trustd` CPU and file descriptor leaks](https://github.com/openai/codex/issues/25719)**
   A cluster of reports (14, 12, and 2 comments respectively) describing Codex Desktop repeatedly opening its own binary, causing `syspolicyd` to exhaust file descriptors. Symptoms range from high CPU to DMG files being reported as "damaged" system-wide. Several Pro and Plus users affected on Darwin arm64.

5. **[#25249 — Windows semi-transparent sidebar renders incorrectly when maximized](https://github.com/openai/codex/issues/25249)**
   13 comments. Enabling the semi-transparent sidebar option causes the left sidebar and top titlebar area to become transparent/undrawn when the window is maximized. Visual regression on Windows.

6. **[#25220 — Windows bundled plugins unavailable due to EFS-encrypted WindowsApps](https://github.com/openai/codex/issues/25220)**
   12 comments. All bundled plugins (Computer Use, Browser, Chrome, LaTeX) show as unavailable when Codex is installed via the Microsoft Store and its files reside on an EFS-encrypted drive. The copyfile operation fails silently.

7. **[#20683 — Computer Use crashes when inspecting Outlook on macOS](https://github.com/openai/codex/issues/20683)**
   11 comments. `SkyComputerUseService` crashes during `get_app_state` calls targeting Outlook. Affects Pro users relying on Computer Use for email automation workflows.

8. **[#21073 — Auto-resume CLI session when usage limit resets](https://github.com/openai/codex/issues/21073)**
   6 comments, 9 👍. The CLI already reports exact quota reset time. Request: automatically resume the interrupted task when the reset occurs, rather than requiring manual intervention.

9. **[#26363 — Custom `.codex/agents` no longer selectable in CLI v0.137.0](https://github.com/openai/codex/issues/26363)**
   3 comments, 5 👍. Regression in the latest CLI: custom agent configurations defined in `.codex/agents` cannot be selected; subagents spawn as generic and inherit the parent model instead.

10. **[#26493 — Context compaction fails with `invalid_enum_value` on Windows](https://github.com/openai/codex/issues/26493)**
    Opened today, already 5 comments. Context compaction produces a serialization error for `context_compaction` variant, breaking session history management on Windows.

## Key PR Progress

1. **[#26482 — fix(rmcp): refresh expired OAuth tokens before startup](https://github.com/openai/codex/pull/26482)**
   Closed today. Fixes a gap where expired OAuth tokens reconstructed a missing `expires_in` for RMCP, triggering incorrect zero-expiry behavior. Affects RMCP 0.15 credential flows.

2. **[#26499 — core: derive exec policy filesystem policy from profile](https://github.com/openai/codex/pull/26499)**
   Open. Removes a separate `FileSystemSandboxPolicy` on exec-policy fallback contexts, unifying policy derivation under `PermissionProfile`. Reduces risk of split-state configuration bugs.

3. **[#26023 — Add managed macOS sandbox capabilities](https://github.com/openai/codex/pull/26023)**
   Open. Adds typed macOS Seatbelt capabilities to managed permission profiles, preserving them across transformations. Includes debug flags for `codex sandbox macos` diagnostics.

4. **[#25147 — Retry streamable HTTP initialize failures](https://github.com/openai/codex/pull/25147)**
   Open (29 days old). Implements retry logic for transient RMCP initialize failures and `tools/list` requests, covering both HTTP statuses and request-layer failures. Important for remote MCP plugin reliability.

5. **[#26307 — Respect Windows sandbox backend in exec policy](https://github.com/openai/codex/pull/26307)**
   Open. Fixes `exec-policy` treating Windows sandbox-backed filesystem permissions as if no sandbox existed, which caused PowerShell directory listings to be incorrectly blocked.

6. **[#26500 — Open Windows app workspaces via deep link](https://github.com/openai/codex/pull/26500)**
   Open. Fixes #26423: `codex app PATH` on Windows now opens the workspace directly via `codex://threads/new?path=...` instead of printing manual instructions.

7. **[#26496 — Make auto-review on-request prompt more proactive](https://github.com/openai/codex/pull/26496)**
   Open. Tunes approval policy text for auto-reviewed runs: likely sandbox blocks are escalated earlier so commands needing remote services don't silently hang first.

8. **[#26256 — Keep Bazel startup options stable across commands](https://github.com/openai/codex/pull/26256)**
   Open. Fixes a build performance issue where `just bazel-clippy` used different cache flags from builds, causing Bazel to kill and restart its server on each command transition.

9. **[#26487 / #26490 — Responses Lite support](https://github.com/openai/codex/pull/26487)**
   Two stacked PRs adding a `use_responses_lite` catalog field and routing web search/image generation through Codex-owned executors when the model is in Lite mode. Not yet enabled for any models.

10. **[#26479 — Speed up local nextest runs](https://github.com/openai/codex/pull/26479)**
    Open. Changes the local test profile from CI-oriented serialization to bounded parallel, making `just test` substantially faster on developer machines without altering CI behavior.

## Feature Request Clusters

**Cross-platform parity** remains the dominant theme. The Linux desktop app request (#11023) is the single most-voted item in the repository. Windows users are requesting better WSL integration, native sandbox support, and resolution of EFS/copyfile issues that block bundled plugins. macOS users are asking for stable memory and file descriptor management.

**Productivity and automation** requests include auto-resume on quota reset (#21073), improved copy-paste from CLI output (#24685), and multi-run summary views. Several users are asking for CLI subagent customization to be restored after the v0.137.0 regression (#26363).

## Developer Pain Points

**macOS `syspolicyd` resource exhaustion** is the most frequently reported systemic issue in today's data. Multiple independent reports across different macOS versions describe the same pattern: Codex Desktop repeatedly opens its own binary, `syspolicyd` leaks file descriptors, and unrelated apps (including DMG mounting) stop working. This affects both Plus and Pro subscribers.

**Windows sandbox and WSL performance** is a close second. Users report that WSL-backed agent environments introduce multi-second latency per tool call, and that the Windows sandbox backend rejects legitimate commands like directory listings. The bundled plugin installation failure on EFS-encrypted drives (#25220) blocks new Windows users from using key features entirely.

**Cross-platform consistency gaps** frustrate users who switch between operating systems. The desktop app behaves differently on each platform (macOS gets deep sandbox integration, Windows gets partial sandbox, Linux gets nothing), and core workflows like workspace path handling (#26500 fix) were inconsistent until today's PR.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-05

## Today's Update Brief
The repository saw moderate activity with two releases (a nightly and a patch), 50 issues and 34 PRs updated in the last 24 hours. A notable patch release (v0.45.1) addresses a hotfix cherry-picked from nightly, while several merged PRs landed from the past week’s batch, fixing SSRF vulnerabilities, PTY leaks, malformed schema crashes, and CJK rendering issues. Community-reported bugs around symlink handling, startup time on HDDs, and silent model fallback remain hot topics with ongoing triage.

**GitHub**: [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## Releases

- **v0.47.0-nightly.20260604.g4196596f7** — Nightly release with CI improvements (optimized PR size labeler, batch workflows, and fix for write access on fork PRs).
  [Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.46.0...v0.47.0-nightly.20260604.g4196596f7)

- **v0.45.1** — Patch release cherry-picking a fix (commit `665228e`) from the nightly branch into the v0.45.x stable line.
  [Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.45.0...v0.45.1)

---

## Hot Issues (top 10 by comment count / relevance)

1. **#22171 — [BUG] BFS file search and grep silently skip symbolic links**
   *Workflow*: File discovery in symlink-heavy projects (e.g., linked `GEMINI.md` files) fails silently.
   *Impact*: Incomplete context for agent operations.
   *Community*: 10 comments, closed after root cause identified in `bfsFileSearch`.
   [Issue](https://github.com/google-gemini/gemini-cli/issues/22171)

2. **#24098 — CLI input unresponsive after using `/copy` command**
   *Workflow*: After copying assistant’s last message, the text `/copy` remains in the input field and blocks further input.
   *Impact*: UX breakage requiring terminal restart.
   *Community*: 7 comments, 1 👍.
   [Issue](https://github.com/google-gemini/gemini-cli/issues/24098)

3. **#21597 — Workspace root detection fails in Mercurial repositories**
   *Workflow*: Enterprise projects using Hg instead of Git cannot anchor local policies (`.gemini/policies/`).
   *Impact*: Policy enforcement broken for Hg users.
   *Community*: 7 comments, need-retesting label added.
   [Issue](https://github.com/google-gemini/gemini-cli/issues/21597)

4. **#24264 — Requests stuck forever on any model**
   *Workflow*: All API calls hang indefinitely; no error shown.
   *Impact*: CLI completely unusable.
   *Community*: 6 comments, 5 👍 (high community pain).
   [Issue](https://github.com/google-gemini/gemini-cli/issues/24264)

5. **#21662 — Dreadful startup time on HDDs (77 seconds cold)**
   *Workflow*: CLI startup scans large dependency trees, causing multi-minute cold starts on HDDs.
   *Impact*: Terrible developer experience on older hardware.
   *Community*: 5 comments, 1 👍, closed as possible duplicate.
   [Issue](https://github.com/google-gemini/gemini-cli/issues/21662)

6. **#24039 — Silent model fallback on `MODEL_CAPACITY_EXHAUSTED` (429)**
   *Workflow*: When a pinned model is overloaded, the CLI silently switches to a different model without user notification.
   *Impact*: Loss of expected behavior and potential cost/quality surprises.
   *Community*: 5 comments, 3 👍, closed as duplicate.
   [Issue](https://github.com/google-gemini/gemini-cli/issues/24039)

7. **#27334 — Embedded terminal freezes after background process commands on Windows**
   *Workflow*: Running process management or build commands inside the embedded terminal freezes the UI.
   *Impact*: Lost work, forced restart.
   *Community*: 5 comments, closed as possible duplicate.
   [Issue](https://github.com/google-gemini/gemini-cli/issues/27334)

8. **#23527 — “Auto-Context” path resolution too aggressive with `@` symbol**
   *Workflow*: Emails or config strings like `admin@local` are incorrectly treated as file paths, causing resolution errors.
   *Impact*: False positive auto-context triggers.
   *Community*: 4 comments, closed as possible duplicate.
   [Issue](https://github.com/google-gemini/gemini-cli/issues/23527)

9. **#27155 — PTY memory and file descriptor leak in `ShellExecutionService`**
   *Workflow*: Long-running MCP servers or background processes never garbage-collect PTY resources, leading to resource exhaustion.
   *Impact*: System instability after extended use.
   *Community*: 4 comments, effort/large.
   [Issue](https://github.com/google-gemini/gemini-cli/issues/27155)

10. **#24954 — Critical data loss and unauthorized code deletion during file updates**
    *Workflow*: Agent removed functional code and replaced it with high-level summaries without user approval.
    *Impact*: Irreversible file corruption.
    *Community*: 3 comments, closed as possible duplicate.
    [Issue](https://github.com/google-gemini/gemini-cli/issues/24954)

---

## Key PR Progress (top 10 by relevance / area)

1. **#27505 — Prevent extra spaces on width-0 CJK continuation cells**
   *Fix*: Corrects terminal serialization for CJK (wide) characters, eliminating spurious whitespace in shell output.
   [PR](https://github.com/google-gemini/gemini-cli/pull/27505) (OPEN)

2. **#27341 — Strip `functionCall.id` and `functionResponse.id` before API call**
   *Fix*: Resolves 400 errors on tool calls by removing internal IDs that Gemini API rejects. Fixes #22774.
   [PR](https://github.com/google-gemini/gemini-cli/pull/27341) (MERGED)

3. **#27354 — Bypass node-pty on WSL for Windows executables**
   *Fix*: Falls back to Node `child_process` when running `.exe` inside WSL to avoid PTY interop issues.
   [PR](https://github.com/google-gemini/gemini-cli/pull/27354) (MERGED)

4. **#27348 — Wrap Ajv `validate()` in try/catch to prevent crash on malformed schemas**
   *Fix*: Prevents crash `Cannot read properties of undefined (reading 'type')` in write_file/replace tools.
   [PR](https://github.com/google-gemini/gemini-cli/pull/27348) (MERGED)

5. **#27349 — Strip CJK characters from model thought output**
   *Fix*: Removes non-English characters (e.g., Chinese/Japanese) accidentally emitted in thought text when user language is English.
   [PR](https://github.com/google-gemini/gemini-cli/pull/27349) (MERGED)

6. **#27347 — Add command validation to prevent natural language being saved as shell commands**
   *Fix*: Stops `/statusline` from saving raw natural language input (e.g., “mostrar diretório”) into settings files.
   [PR](https://github.com/google-gemini/gemini-cli/pull/27347) (MERGED)

7. **#27343 — Persist A2A task workspaces from settings**
   *Fix*: Ensures `GCSTaskStore.save` archives the workspace from persisted A2A agent settings rather than the process CWD.
   [PR](https://github.com/google-gemini/gemini-cli/pull/27343) (MERGED)

8. **#27337 — Derive A2A task trust server-side**
   *Fix*: Replaces client-supplied `isTrusted` with server folder trust check, preventing trust bypass.
   [PR](https://github.com/google-gemini/gemini-cli/pull/27337) (MERGED)

9. **#27335 — Prevent SSRF via open redirect in web-fetch tool**
   *Security*: Validates redirect destinations for blocked hosts (e.g., `169.254.169.254`). Mitigates SSRF attacks.
   [PR](https://github.com/google-gemini/gemini-cli/pull/27335) (MERGED)

10. **#27329 — Skip missing `includeDirectories` instead of crashing CLI startup**
    *Fix*: One missing directory in `settings.json` no longer aborts startup — gracefully continues.
    [PR](https://github.com/google-gemini/gemini-cli/pull/27329) (MERGED)

---

## Feature Request Clusters

- **Enterprise Managed Policies & Proxies** (Issues #15541, #15543): Requests for formal UI locking for managed settings, documentation for corporate proxies, and LLM gateway configuration. Multiple mentions of enterprise compliance needs.

- **Increased Token Limits & SubAgent Parallelism** (Issue #24856): Users request larger context windows and parallel sub-agent execution to handle complex projects more efficiently.

- **MCP Server Trust & Read-Only Hints** (Issue #27163): Opt-in to allow MCP tools annotated `readOnlyHint: true` to execute silently in Plan Mode without approval dialogs.

- **Behavioral Eval Framework** (Issues #21249, #20956): Interest in a built-in `gemini eval <path>` command for debugging benchmarks and instruction-following tests.

---

## Developer Pain Points

- **Symlink & Git-Only Assumptions** (#22171, #21597): Silent skipping of symlinks and lack of Mercurial support frustrate teams using non-standard project structures or VCS.

- **Startup Performance on HDDs** (#21662): 77-second cold starts discourage use on older machines; community seeks caching or lazy initialization.

- **Silent Model Fallback / Capacity Exhaustion** (#24039): Users lose trust when the CLI silently switches models after a 429 without clear notification or logs.

- **Unresponsive Terminal & Input Glitches** (#24098, #27334): `/copy` command leaves stale input; embedded terminal freezes after background commands on Windows — both severely impact daily workflow.

- **Resource Leaks** (#27155): PTY memory and FD leaks from long-running background processes threaten system stability over hours of use.

- **Data Loss / Unauthorized File Modification** (#24954): Agent overwriting functional code with summaries without confirmation is a critical trust and safety issue for agent-led workflows.

*End of digest. All links point to the respective GitHub pages.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-05

## Today's Update Brief

Activity was moderate with one minor release (v1.0.60-0) and 35 issues updated in the last 24 hours. The release focuses on UX improvements including vim-style navigation for `/diff` and a billing help topic, while the issue tracker shows ongoing friction around keyboard input handling, authentication state in resumed sessions, and Windows/plugin hook execution.

## Releases

**v1.0.60-0** (released within last 24h)
- Added `billing` help topic with overview of AI credit usage features
- Added vim-style navigation keys (g, G, Ctrl+D, Ctrl+U) to `/diff` view
- Mission Control sharing status now visible in `/session info` view
- `-r` shorthand added for `--resume`
- LSP server configuration updates (config a)

## Hot Issues

1. **[#2082 — ctrl+shift+c no longer copies to clipboard on Linux](https://github.com/github/copilot-cli/issues/2082)**
   *Affected workflow:* Standard terminal copy shortcut broken since v1.0.4 on Ubuntu 24.04. Users cannot copy selected text with the conventional Linux shortcut.
   *Impact:* High — 19 comments, 8 👍. Workaround requires using right-click or Ctrl+C (which conflicts with interrupt).
   *Community reaction:* Frustration that a basic terminal affordance was broken and has remained open since March 2026.

2. **[#3260 — Copy/Paste broken when using SSH → tmux → Windows Server 2025](https://github.com/github/copilot-cli/issues/3260)**
   *Affected workflow:* Copy/paste fails after v1.0.47 when accessing Copilot CLI on remote Windows Server 2025 via SSH from inside a macOS/Linux tmux session.
   *Impact:* Medium — 6 comments. Niche but severe for developers using tmux + remote Windows targets.

3. **[#3659 — CLI cannot execute hooks shipped with plugins on Windows](https://github.com/github/copilot-cli/issues/3659)**
   *Affected workflow:* Since v1.0.57, every prompt fails with `preToolUse` hook exceptions. Logs show PowerShell script paths not recognized.
   *Impact:* Critical for Windows users with plugin hooks — all CLI interaction blocked. 3 comments, opened 2 days ago.

4. **[#3596 — Resumed session cannot list models: "Not authenticated"](https://github.com/github/copilot-cli/issues/3596)**
   *Affected workflow:* Using `--resume` to restore a session then running `/model` yields authentication error, though conversation continues normally.
   *Impact:* Medium — 8 👍, 2 comments. Blocks model switching in resumed workflows.

5. **[#3677 — Claude Opus 4.7 context compaction triggers at 18% of real capacity](https://github.com/github/copilot-cli/issues/3677)**
   *Affected workflow:* CLI fetches model capabilities from two sources and uses the smaller (non-long-context) blob, triggering compaction/summarization prematurely at ~128K instead of ~936K.
   *Impact:* Potentially significant for users of long-context models — lost context, degraded quality. Opened today.

6. **[#3636 — Voice mode fails on corporate VPN: "Failed to fetch model catalog"](https://github.com/github/copilot-cli/issues/3636)**
   *Affected workflow:* `/voice` cannot be enabled because the STT model catalog is unreachable behind corporate proxies/VPNs. No offline fallback.
   *Impact:* Medium — blocks voice feature entirely for enterprise users.

7. **[#3676 — `/session` no longer lists other sessions](https://github.com/github/copilot-cli/issues/3676)**
   *Affected workflow:* `/session` command now shows only the active session instead of all sessions across workspaces, breaking session discovery and resumption.
   *Impact:* Medium — regression in v1.0.59, closed by maintainers but no fix visible yet.

8. **[#2398 — Support a default config file for permissions](https://github.com/github/copilot-cli/issues/2398)**
   *Affected workflow:* Users must grant permissions every session; no way to pre-configure approved directories/commands.
   *Impact:* High demand — 10 👍, 3 comments. Request open since March.

9. **[#3666 — Wrapped output copy removes spaces (e.g., `var c` becomes `varc`)](https://github.com/github/copilot-cli/issues/3666)**
   *Affected workflow:* Copying wrapped CLI output to clipboard loses whitespace, corrupting code.
   *Impact:* Medium — breaks copy-paste of generated code. Opened yesterday, already closed.

10. **[#3653 — Local sandbox mode doesn't work on Linux](https://github.com/github/copilot-cli/issues/3653)**
    *Affected workflow:* `/sandbox enable` is non-functional on Linux despite blog announcement of sandbox public preview.
    *Impact:* Medium — blocks security feature for Linux users.

## Key PR Progress

Only two PRs were updated in the last 24 hours, and neither represents substantive code contributions:

- **[#3651 — Create xcopilotcli](https://github.com/github/copilot-cli/pull/3651)** — Opened 2 days ago; appears to be a stub/placeholder PR. No description or meaningful diff.
- **[#3473 — Spam PR with referral link](https://github.com/github/copilot-cli/pull/3473)** — Contains promotional link (TEMU GCash referral). No legitimate contribution.

*Note: This is an unusually quiet period for PR activity. No substantive feature pull requests or bugfix PRs were updated in the last 24 hours.*

## Feature Request Clusters

**1. Permission/Security Configuration Simplification**
Issues [#2398](https://github.com/github/copilot-cli/issues/2398), [#1409](https://github.com/github/copilot-cli/issues/1409), [#3684](https://github.com/github/copilot-cli/issues/3684), [#3653](https://github.com/github/copilot-cli/issues/3653)
Users want default permission profiles, avoid repeated prompts per session, and fix path normalization bugs (dash-to-underscore conversion breaking OneDrive paths). Sub-agent permission approval lacks command context.

**2. Localization & Theming**
Issue [#3681](https://github.com/github/copilot-cli/issues/3681) requests Spanish localization for CLI command descriptions. No other localization asks in this batch.

**3. Session & Resume Improvements**
Issues [#3675](https://github.com/github/copilot-cli/issues/3675), [#3676](https://github.com/github/copilot-cli/issues/3676), [#3680](https://github.com/github/copilot-cli/issues/3680)
Users want configurable worktree paths/cleanup, consistent session naming, and resumed sessions that preserve full model/auth state.

**4. BYOK / Credential Management**
Issues [#3682](https://github.com/github/copilot-cli/issues/3682), [#2783](https://github.com/github/copilot-cli/issues/2783)
BYOK providers with short-lived tokens require CLI restart to refresh credentials. OAuth tokens for MCP servers stored as plaintext JSON — users want secure storage.

**5. Agent & Model Configuration Depth**
Issues [#3678](https://github.com/github/copilot-cli/issues/3678), [#3547](https://github.com/github/copilot-cli/issues/3547)
Users want to configure effort level and context length per agent, not just model selection. Sub-agent hangs with specific models (gpt-5.5) remain unresolved.

## Developer Pain Points

- **Keyboard input regressions** dominate the tracker: Linux `ctrl+shift+c` broken (5 months open), SSH/tmux copy/paste failures, wrapped output losing whitespace on copy. Three separate issues all affect basic text input/output.
- **Authentication state loss** on `--resume` (issues #3596, #3680) is a recurring problem — users can continue conversations but cannot switch models or access the model picker.
- **Windows plugin/hook execution** is fragile: hooks fail with path resolution errors, PowerShell processes lack console handles, `cwd: "~"` does not expand. Recent v1.0.57-v1.0.60 changes appear to have introduced multiple regressions.
- **Agent/sub-agent reliability** issues (silent hangs, missing completion notifications, confusing permission prompts) suggest the multi-agent orchestration path has low test coverage.
- **Context window mismanagement** (#3677) shows the CLI may not correctly detect model capabilities from configuration, leading to premature compaction and lost context for long-context models.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-05

## 1. Today's Update Brief

No new releases were published in the last 24 hours. The community reported **7 new issues** and submitted **6 pull requests**, with a strong focus on authentication errors (403), auto-scroll bugs, and performance regressions in recent 1.46.0 builds. Activity is concentrated around fixing terminal UX and session reliability.

## 2. Releases

No new releases.

## 3. Hot Issues

### #2425 — `403 Kimi For Coding is currently only available for Coding Agents`
- **Affected workflow**: Users running Kimi CLI 0.9.0 on macOS are blocked from using the `kimi-for-coding` model, receiving persistent 403 errors.
- **Impact**: Complete loss of functionality for these users; cannot execute any coding tasks.
- **Community reaction**: 3 👍, 10 comments — several users report the same issue across different versions.
- **Link**: https://github.com/MoonshotAI/kimi-cli/issues/2425

### #2427 — `Getting "Kimi For Coding is currently only available for Coding Agents"`
- **Affected workflow**: Similar 403 error on Debian (WSL2) using the `k2.6` model after `/login`.
- **Impact**: Prevents login and model access for Linux/WSL users.
- **Community reaction**: 2 comments, minimal upvotes.
- **Link**: https://github.com/MoonshotAI/kimi-cli/issues/2427

### #2422 — `Scroll auto-jumps to bottom when reading history`
- **Affected workflow**: After a conversation completes, scrolling up to review past output causes the terminal to snap back to the bottom every ~1 second.
- **Impact**: Severely hinders code review and debugging; users cannot read long outputs.
- **Community reaction**: 1 comment, no upvotes yet — reproducible across platforms.
- **Link**: https://github.com/MoonshotAI/kimi-cli/issues/2422

### #2430 — `Auto logged out in the middle of a task`
- **Affected workflow**: Users start a long-running task, step away, and return to find themselves logged out.
- **Impact**: Task is interrupted; no progress is preserved.
- **Community reaction**: No comments yet — single report on Windows 10.
- **Link**: https://github.com/MoonshotAI/kimi-cli/issues/2430

### #2428 — `'/title' not available in VS Code Kimi Code extension`
- **Affected workflow**: The `/title` slash command is missing from the VS Code extension UI.
- **Impact**: VS Code users cannot rename sessions from within the editor.
- **Community reaction**: No comments yet — single report on Linux.
- **Link**: https://github.com/MoonshotAI/kimi-cli/issues/2428

### #2424 — `Getting "engine overloaded" message with model 2.5`
- **Affected workflow**: Users on latest CLI (1.46.0) hitting server-side engine overload when using the older `k2.5` model.
- **Impact**: Frequent service unavailability, especially over the last 48 hours.
- **Community reaction**: No comments — single report on Debian 13.
- **Link**: https://github.com/MoonshotAI/kimi-cli/issues/2424

### #2423 — `Latest versions are far slower`
- **Affected workflow**: Moving from an earlier version to 1.46.0 results in significantly slower response and tool execution.
- **Impact**: Reduced developer productivity; regression in core UX.
- **Community reaction**: No comments — single report on ARM64 Linux.
- **Link**: https://github.com/MoonshotAI/kimi-cli/issues/2423

## 4. Key PR Progress

### #2429 — `fix: prevent idle cursor blink from forcing scroll to bottom in Linux terminals`
- **Description**: Resolves #2422 where cursor blink events trigger auto-scroll in terminals that lack proper idle detection.
- **Context**: Affects all Linux terminal emulators; fix wraps scroll-lock logic around cursor blink state.
- **Link**: https://github.com/MoonshotAI/kimi-cli/pull/2429

### #2388 — `fix(shell): persist pasted text placeholders`
- **Description**: Long pasted text is folded into `[Pasted text #1]` placeholders that currently don't survive session recall. This PR persists them in `context.jsonl`.
- **Context**: Fixes #1946 — long-standing issue with history review of pasted content.
- **Link**: https://github.com/MoonshotAI/kimi-cli/pull/2388

### #2387 — `fix(tools): preserve shell command headline details`
- **Description**: Shell commands in the "Used Shell" headlines are truncated with `shorten_middle` to 50 chars, losing context. This PR improves truncation to preserve command intent.
- **Context**: Fixes #2142 — improves readability of tool call logs.
- **Link**: https://github.com/MoonshotAI/kimi-cli/pull/2387

### #2386 — `fix(session): map undo wire turns to context turns`
- **Description**: `/undo` currently uses `wire.jsonl` turn indices for truncation, which breaks when local slash commands (e.g., `/help`) don't produce a real user message. This PR aligns wire and context turn mapping.
- **Context**: Fixes #1974 and addresses #2049 — makes undo behavior consistent.
- **Link**: https://github.com/MoonshotAI/kimi-cli/pull/2386

### #2383 — `fix(soul): repair orphan tool_calls when replaying history`
- **Description**: When a session is killed mid-turn (OOM, terminal close, kill -9), the persisted `context.jsonl` can contain orphan `tool_calls`. This PR detects and repairs those entries on session replay.
- **Context**: Fixes #2336 — prevents crashes on history load after abrupt termination.
- **Link**: https://github.com/MoonshotAI/kimi-cli/pull/2383

### #2382 — `fix(file): convert unsupported image formats to PNG in ReadMediaFile`
- **Description**: When the agent reads `.ico` or other unsupported image formats, this PR transparently converts them to PNG at read time.
- **Context**: Fixes #2017 — improves cross-provider image handling (Kimi, Anthropic, Google all accept PNG/JPEG/GIF/WebP).
- **Link**: https://github.com/MoonshotAI/kimi-cli/pull/2382

## 5. Feature Request Clusters

No explicit feature requests appeared in today's data. The issue queue is dominated by bug reports related to authentication, performance, and terminal UX.

## 6. Developer Pain Points

- **Authentication reliability**: Two separate reports (#2425, #2427) of persistent 403 "Coding Agents only" errors, affecting both macOS and Linux/WSL users across different model endpoints. This suggests a token validation or endpoint restriction bug that blocks legitimate CLI use.
- **Performance regression in 1.46.0**: At least one report (#2423) of significant slowdown since upgrading, corroborated indirectly by "engine overloaded" complaints (#2424). Multiple users on different platforms (Linux ARM64, Debian) are affected.
- **Session instability**: Auto-logout during long tasks (#2430) and orphan tool calls from mid-session crashes (#2336 / #2383) point to session management fragility, especially under memory pressure or network interruptions.
- **Terminal scroll behavior**: Auto-scrolling to bottom (#2422) makes reading history impractical — a basic UX defect that PR #2429 aims to fix.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-05

## Today’s Update Brief

Activity remains high with 50 open/updated issues and 20 updated PRs in the last 24 hours. No new releases were cut, but the community and maintainers are heavily focused on memory profiling, a permanent DeepSeek V4 Pro price reduction, and a cluster of compaction and session integrity bugs. Several automated PRs from earlier weeks were merged today, and multiple contributors submitted fixes for long-standing agent variant and context persistence issues.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)** — #20695, 90 comments, 63 👍
   The central discussion for ongoing memory issues. Maintainers explicitly ask users not to let their LLM suggest solutions and instead provide heap snapshots via manual or automated flows. High engagement signals this is the top ongoing stability concern.

2. **[Adjust Go usage limits after DeepSeek V4 Pro permanent 75% price reduction](https://github.com/anomalyco/opencode/issues/28846)** — #28846, 69 comments, 74 👍 (CLOSED)
   A highly upvoted feature request to update OpenCode Go subscription limits to reflect DeepSeek’s permanent price cut. The closure suggests the maintainers have accepted and actioned this, which will affect all Go plan users.

3. **[TUI fails on Alpine Linux (musl) in 1.14.50](https://github.com/anomalyco/opencode/issues/27589)** — #27589, 27 comments, 12 👍
   Regression introduced in v1.14.50 on musl-based systems. The TUI render library fails to find the `getcontext` symbol. Users on Alpine cannot launch the TUI at all, forcing a rollback to 1.14.48.

4. **[4 of 5 requests failed: config.providers: Unexpected server error](https://github.com/anomalyco/opencode/issues/27530)** — #27530, 26 comments, 16 👍
   A startup crash affecting provider configuration fetching. Users see this immediately on launch and cannot use the app. Root cause likely server-side or local config corruption.

5. **[not being able to write files when using local models](https://github.com/anomalyco/opencode/issues/590)** — #590, 18 comments (CLOSED)
   A long-standing issue where local models (Ollama, etc.) return valid tool JSON but files are not written. Now closed, presumably fixed. Affects local-model workflows.

6. **[The requested model is not supported](https://github.com/anomalyco/opencode/issues/12789)** — #12789, 16 comments, 10 👍
   Users see this error for Claude models via Copilot provider while Gemini works. Remains open, pointing to a provider-specific parsing or auth issue.

7. **[Failed to run the query 'PRAGMA journal_mode = WAL'](https://github.com/anomalyco/opencode/issues/20118)** — #20118, 10 comments, 10 👍
   A database migration error when downgrading versions. Users stuck on an older OpenCode after running a newer version. Suggests need for backward-compatible schema handling.

8. **[GitHub Copilot models are unusable despite active subscription](https://github.com/anomalyco/opencode/issues/20954)** — #20954, 8 comments
   Complements #12789. Users with paid Copilot subscriptions cannot use GPT, Claude, or Gemini correctly. The Copilot provider integration appears broken for multiple model families.

9. **[Subagent enters infinite retry loop on edit/write tool failure](https://github.com/anomalyco/opencode/issues/17169)** — #17169, 4 comments
   Subagents stuck in an infinite API-call loop when edit/write tools fail, costing users $15+ per invocation. A high-impact cost issue that remains open.

10. **[Prompt injection via <system-reminder> tags in file content](https://github.com/anomalyco/opencode/issues/30799)** — #30799, 3 comments (new today)
    A security issue: file content returned by the read tool is not sanitized, allowing prompt injection through repository files. The system prompt treats these tags as authoritative. Reported by @LifetimeVip who also filed several related enforcement bugs.

## Key PR Progress

1. **[fix(opencode): finish errored compaction summaries](https://github.com/anomalyco/opencode/pull/30836)** — #30836
   Fixes an issue where compaction leaves a summary with an error but no `finish` marker, causing the compaction task to never complete. Directly addresses session integrity for long conversations.

2. **[fix(opencode): optimize first-time snapshot.track & add ui for clarity](https://github.com/anomalyco/opencode/pull/30837)** — #30837
   Closes multiple snapshot-related issues (#3176, #18072, #30386) and reduces snapshot directory bloat. Includes UI improvements for clarity during initial tracking.

3. **[fix(opencode): apply agent variant when no explicit model is configured](https://github.com/anomalyco/opencode/pull/24962)** — #24962
   Fixes subagent variant parsing not being applied at runtime (closes #21632). A contributor fix from April that is still open — affects multi-agent workflows.

4. **[feat(core): persist v2 session context epochs](https://github.com/anomalyco/opencode/pull/30789)** — #30789
   Persists the exact system context seen by V2 sessions, so privileged context is not rebuilt differently after each turn or restart. Important for session reproducibility.

5. **[feat(core): attach global native tools](https://github.com/anomalyco/opencode/pull/30832)** — #30832
   Lets embedding applications define same-process tools via the public native API and attach them dynamically. Opens up the embedding use case.

6. **[feat(app): improve desktop multi-server support](https://github.com/anomalyco/opencode/pull/30678)** — #30678
   Desktop home screen now supports multi-server focus, project filtering, and server-isolated state. A significant UX improvement for power users managing multiple remote servers.

7. **[feat(core): add public native API](https://github.com/anomalyco/opencode/pull/30828)** — #30828 (CLOSED)
   Adds `@opencode-ai/core/public` as the intentional public Effect API entrypoint. Cleans up exposed names and curates a supported session surface.

8. **[feat(provider): support Bedrock OpenAI model URLs](https://github.com/anomalyco/opencode/pull/30820)** — #30820
   Adds variable substitution so Bedrock Mantle OpenAI model entries can use documented endpoint URLs. Closes #30819 requesting GPT-5.5 and GPT-5.4 support.

9. **[fix: prevent shell commands from killing all Node.js processes](https://github.com/anomalyco/opencode/pull/25762)** — #25762 (CLOSED)
   An automated-cleanup PR that prevents AI-run shell commands like `taskkill /F /IM node.exe` from killing the parent Node.js process. Important for Windows stability.

10. **[fix: preserve ChatGPT OAuth refresh token](https://github.com/anomalyco/opencode/pull/25765)** — #25765 (CLOSED)
    Prevents ChatGPT OAuth token from being lost when refreshing the access token. Fixes a session-disconnect issue for ChatGPT provider users.

## Feature Request Clusters

**Price/Cost Adjustments and New Model Support** — Multiple requests today and this week focus on model pricing and new model availability: adjusting Go usage limits for DeepSeek V4 Pro (#28846), adding GPT-5.5/5.4 on Bedrock (#30819), supporting Qwen3.7Plus 1M context (#30838). The community is cost-sensitive and actively tracking provider pricing changes.

**Session and Context Management** — Requests for a `--resume <session name>` CLI flag like Cursor and Codex CLI (#18569), and clickable links in the TUI (#1168). Users want better session organization and navigation without breaking out of the terminal.

**Security and Enforcement** — A cluster of bugs filed today by @LifetimeVip around prompt injection risk (#30799), false claims of read-before-edit enforcement (#30795), and missing code-level enforcement across write, bash, and MCP tools (#30791). This suggests a growing interest in security hardening.

**Compaction and Context Loss** — Issues #30811, #30834, and #30805 all describe compaction-related problems: loss of context in long conversations, infinite retry loops after failed compaction summaries, and overflow thresholds being too low when a model limit is set. Users want reliable long-session behavior.

## Developer Pain Points

- **Windows termination instability** — Both `/exit` and Ctrl+C have regressed on Windows: they kill the parent terminal process instead of returning to the shell (#27749, #28673). This is a recurring pain point with multiple user reports.
- **Subagent cost loops** — Infinite retries on tool failures cause unexpected API costs (#17169). Developers running complex multi-agent workflows are especially affected.
- **Copilot provider breakage** — Multiple open issues (#12789, #20954) describe GitHub Copilot models being completely unusable despite valid subscriptions. This blocks a significant user segment.
- **Compaction reliability** — Failed compaction can leave sessions in an unrecoverable state or cause repeated API calls (#30834, #30811). This undermines the core long-conversation experience.
- **Prompt injection risk** — The lack of sanitization for system-reminder tags in file content (#30799) is a security concern that could allow malicious repositories to hijack the agent.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-05

## Today’s Update Brief

Activity remains high with 1 nightly release, 30 issues updated in the last 24 hours, and 50 pull requests in motion. A significant fix shipped for the `/copy` command that was including internal thinking blocks in clipboard output. Meanwhile, the daemon-mode feature batch continues to mature with a 46-commit merge into main.

## Releases

**v0.17.1-nightly.20260605.715266537** ([Release page](https://github.com/QwenLM/qwen-code/releases/tag/v0.17.1-nightly.20260605.715266537))

- chore: v0.17.1 release by @qwen-code-ci-bot
- fix(cli): skip thought parts in copy output by @he-yufeng — addresses #4733 where `/copy` was capturing internal reasoning blocks instead of only visible user-facing output.

## Hot Issues

**#4722 — Statusline shows model id instead of name** ([Issue](https://github.com/QwenLM/qwen-code/issues/4722))
Statusline displays raw model id (e.g. `qwen3-coder-plus`) instead of human-readable name. The model id being used as a unique key in model-switching logic also blocks multi-key setups. *Closed after 5 comments.*

**#4754 — `/model` should not persist to settings by default** ([Issue](https://github.com/QwenLM/qwen-code/issues/4754))
Running `/model` during a session currently writes the selection to `settings.json`, meaning the switch survives restarts. User requests that model switches remain session-local unless explicitly saved. *Closed with 5 comments.*

**#4723 — Does Qwen Code support Rules or Instructions?** ([Issue](https://github.com/QwenLM/qwen-code/issues/4723))
User asks about a rule system similar to Claude Code’s rules or Copilot’s instructions (distinct from skills). Community interest in cross-session behavioral guidance. *Open, 5 comments.*

**#4597 — Enhance `/stats` with cross-session global usage tracking** ([Issue](https://github.com/QwenLM/qwen-code/issues/4597))
Current `/stats` only shows live session metrics. Request for persistent usage history, trending, and an interactive full-screen dashboard. A companion PR (#4779) is already open. *Open, 4 comments, 1 👍.*

**#4747 — Support global user-level auto-memory at `~/.qwen/memories/`** ([Issue](https://github.com/QwenLM/qwen-code/issues/4747))
Auto-memory is per-project only. User requests a cross-project directory for facts about the user (preferences, working style) that don’t need to be re-learned in every project. *Open, 4 comments. PR #4764 is open to address this.*

**#4783 — About aes-128-ecb** ([Issue](https://github.com/QwenLM/qwen-code/issues/4783))
User asks whether the AES-128-ECB algorithm used in the project is safe and whether it can be replaced. Security concern flagged. *Open, 3 comments.*

**#4421 — Local diagnostics framework: ring buffer + diagnostic ID + `/bug collect bundle`** ([Issue](https://github.com/QwenLM/qwen-code/issues/4421))
Proposes a local-first, user-controlled diagnostic system for API/SSE stream failures, model errors, and empty responses. Ring buffer records recent failures; `/bug collect bundle` packages diagnostics on demand. No automatic upload. *Open, 3 comments.*

**#4264 — `/compress-fast` non-AI assisted context reduction** ([Issue](https://github.com/QwenLM/qwen-code/issues/4264))
Requests a fast, non-LLM context compression workflow that trims unwanted data from chat (tool calls, thinking blocks, etc.) via user-selectable options. *Open, 3 comments, welcome-pr.*

**#3565 — Add `/simplify` skill** ([Issue](https://github.com/QwenLM/qwen-code/issues/3565))
Brings up a built-in `/simplify` command to review recent code changes and suggest simplifications, mirroring Claude Code’s workflow. *Open, 2 comments, 1 👍.*

**#4777 — Deferred-tools listing in system prompt busts prompt cache on every MCP discovery** ([Issue](https://github.com/QwenLM/qwen-code/issues/4777))
MCP tools (always deferred, reachable only via `ToolSearch`) are baked into the cached system prompt. Any change to the deferred set invalidates the prompt cache, forcing a full re-send. *Open, 1 comment. PR #4781 addresses this.*

## Key PR Progress

**#4719 — fix(cli): bundle extension examples** ([PR](https://github.com/QwenLM/qwen-code/pull/4719))
Copies built-in extension example templates into `dist/examples/` during bundling so they are available after npm install. Adds packaging tests.

**#4766 — fix(core): preserve non-ASCII git paths in file crawler** ([PR](https://github.com/QwenLM/qwen-code/pull/4766))
Disables Git path quoting in the file crawler so non-ASCII tracked filenames are returned as UTF-8 rather than octal-escaped. Adds regression tests.

**#4784 — test: cover rewind selector restore options** ([PR](https://github.com/QwenLM/qwen-code/pull/4784))
Adds focused regression coverage verifying that rewind restore-options flow shows diff summaries and allows Escape to return to the turn picker.

**#4490 — feat(daemon): merge daemon-mode feature batch into main** ([PR](https://github.com/QwenLM/qwen-code/pull/4490))
Periodic integration merge of `daemon_mode_b_main` into main. Rolls up 46 commits across 386 files (+115k / −12k LOC) covering core daemon-mode features for v0.16-alpha.

**#4781 — fix(core): keep deferred-tools listing out of the cached system prompt** ([PR](https://github.com/QwenLM/qwen-code/pull/4781))
Moves the deferred tools (MCP) listing from the system prompt into a per-turn `<system-reminder>` injection, preserving prompt cache validity across MCP discovery events. Directly addresses #4777.

**#4780 — feat(cli): add `/fork` background-agent command** ([PR](https://github.com/QwenLM/qwen-code/pull/4780))
Implements `/fork <directive>` to spawn a background agent inheriting the full conversation context (system prompt, history, tools) and working without blocking the main conversation. Escalates results through existing reporting infrastructure.

**#4677 — fix(cli): fix vim mode Esc leak, Enter submit, render lag and implement missing VIM commands** ([PR](https://github.com/QwenLM/qwen-code/pull/4677))
Fixes three vim mode issues: Esc key in INSERT mode leaking to AppContainer, Enter submitting prematurely, and render lag. Adds missing NORMAL mode commands.

**#4755 — fix(cli): prevent selection dialog flicker** ([PR](https://github.com/QwenLM/qwen-code/pull/4755))
Constrains interactive selection/confirmation dialogs to stay within the visible terminal frame when height constraints are active, keeping choices visible in small terminals.

**#4779 — feat(stats): add interactive `/stats` dashboard with cross-session tracking** ([PR](https://github.com/QwenLM/qwen-code/pull/4779))
Implements an interactive dashboard with three tabs: Session (live metrics), Activity (usage trends), and Efficiency (performance/tool analysis). Persists usage data across CLI sessions.

**#4764 — feat(memory): add user-level auto-memory at `~/.qwen/memories/`** ([PR](https://github.com/QwenLM/qwen-code/pull/4764))
Adds a second auto-memory directory for cross-project user facts (preferences, working style) so they persist across projects. Reuses existing 4-type taxonomy. Closes #4747.

## Feature Request Clusters

**Session and Memory Persistence** — Multiple requests target the gap between session-local state and cross-session persistence:
- Cross-session usage stats (#4597) with interactive dashboard (PR #4779)
- Global user-level auto-memory (#4747) addressed by PR #4764
- Background fork agents for concurrent work without session switching (#4757)

**Command and UX Refinements** — Community is actively shaping the command interface:
- `/simplify` skill for code review and simplification (#3565)
- `/compress-fast` non-AI compression for context trimming (#4264)
- Cleaner auto-mode startup text (remove emoji, simplify copy) (#4584)
- Prominent git branch display in Desktop UI (#4769)

**Tool Integration and Infrastructure** — Requests for deeper tool and protocol support:
- Built-in Computer Use support (macOS, Windows, Linux) with zero-config setup (#4591)
- Generic git worktree support with agent isolation (#4056)
- ACP Streamable HTTP transport tracking for editor integration (Zed, JetBrains, Goose) (#4782)

## Developer Pain Points

**Installation and Auto-Update Failures** — `sudo npm install -g` on macOS with system Node.js causes EACCES errors during auto-update (#4627, #4643). Workaround proposals include fallback to standalone when prefix is unwritable (#4643).

**Headless/Container Environments** — Commands `/bug`, `/docs`, `/insight` crash with `spawn xdg-open ENOENT` on headless Linux (#4712). PR #4716 replaces direct `open` calls with an existing secure launcher that honors `BROWSER` without shell invocation.

**Prompt Cache Invalidations** — Deferred-tools listing (MCP) baked into the cached system prompt causes full re-sends whenever the deferred set changes (#4777). PR #4781 moves that listing to per-turn injection.

**Context Accuracy** — `/copy` includes internal thinking/reasoning blocks instead of only visible output (#4733, fixed in nightly). Background auto-update replaces chunks mid-session, breaking cross-authType model switching (#4758). Desktop app cannot send message after pressing Escape and re-editing input (#4772).

</details>