# AI CLI Tools Community Digest 2026-05-12

> Generated: 2026-05-12 02:09 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report — 2026-05-12

## 1. Daily Cross-Tool Overview

Three of the seven tracked tools shipped releases today: **Claude Code** (v2.1.139 with Agent View preview), **OpenAI Codex** (three Rust alpha releases), and **GitHub Copilot CLI** (v1.0.45 with `/autopilot` command). **Kimi Code CLI** also released v1.42.0 yesterday, still fresh in today's window. Windows platform issues continue to dominate cross-tool bug reports, with all seven tools showing at least one Windows-specific failure mode. A notable common pattern emerged around **MCP lifecycle and connectivity** — three tools (Claude Code, Codex, Copilot CLI) have active issues or PRs addressing MCP startup delays, process leaks, or socket mismatches. Token consumption complaints remain the single most heated community topic, led by Codex issue #14593 (574 comments).

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases Today | Notable Activity |
|------|-------------|-----------|----------------|------------------|
| **Claude Code** | ~50 open/updated | 1 active | v2.1.139 | Agent View preview, `/goal` command |
| **OpenAI Codex** | 10+ active (high engagement) | 10 active | rust-v0.131.0-alpha.6/.7/.9 | #14593 at 574 comments (token burn) |
| **Gemini CLI** | ~50 updated | ~50 updated | Nightly v0.42.0 | Subagent recovery bug (#22323) |
| **GitHub Copilot CLI** | 10 active (high engagement) | 1 active | v1.0.45 | `/autopilot` toggle, Windows pwsh fallback |
| **Kimi Code CLI** | 8 updated | 14 updated | v1.42.0 (yesterday) | vLLM compat fixes, connection leak fix |
| **OpenCode** | 50 updated | 50 updated | None | Heavy Effect migration, native LLM runtime |
| **Qwen Code** | 32 active | 50 updated | None | OAuth free tier controversy (#3203, 124 comments) |

**Release velocity:** Copilot CLI and Claude Code lead with feature releases today. Codex shipped three alphas but no stable. Gemini CLI had a nightly-only release. Kimi Code is on a steady cadence (v1.42.0). OpenCode and Qwen Code had no releases.

**Community engagement intensity:** Codex's #14593 (574 comments) is the most active issue across all tools. Qwen Code's OAuth policy debate (#3203, 124 comments) is the most politically charged. Claude Code's #34255 (72 👍) on remote control drops has the highest consensus on severity.

## 3. Shared Feature Directions

### Memory & Session Management
- **Fork/rewind improvement**: Claude Code (#55347) and Copilot CLI (#2058) both face community pressure for reliable fork behavior. Qwen Code has a PR (#4064) adding file restoration to `/rewind`. OpenCode's ESC interrupt regression (#3699) shows session control remains fragile.
- **Background session support**: Claude Code's `--bg` is Windows-gated (#58204); Gemini CLI backgroundable subagents (#22741) requested; Kimi Code background timeouts non-adjustable (#2232); Qwen Code has no equivalent feature in this window.

### MCP Lifecycle & Connectivity
- **MCP startup latency**: Qwen Code PR #3994 decouples MCP discovery from startup; Claude Code #56860 involves MCP teardown hangs; Copilot CLI #2630 has sub-agents missing MCP servers; Codex PR #22237 adds MCP turn metadata. This is a **cross-tool infrastructure concern** — all tools with MCP support are actively patching lifecycle issues.
- **Connection reuse**: Kimi Code PR #2231 introduces `_ConnectionPool` for HTTP reuse. Codex #21719 has socket mismatches. A clear signal that MCP network handling needs hardening.

### Permissions & Sandboxing
- **Permission bypass incompleteness**: Claude Code's `--dangerously-skip-permissions` still prompts for config files (#37029). Copilot CLI ignores `.claude/settings.json` permissions (#2338). OpenCode has subagent permission over-constraint (#26700). Multiple tools' permission models have edge cases.
- **Sandboxing requests**: OpenCode (#2242) and Codex (#21861) both active on filesystem sandboxing for tool execution.

### Windows Platform Gaps
- All seven tools have Windows-specific issues this window. Common themes: CRLF corruption (Copilot CLI #1148), missing modules (Kimi Code #2202, `fcntl`), installation failures (Qwen Code #3845), broken auto-update (Claude Code #47104), MCP hangs (Claude Code #56860), git spam (Codex #22085).

### TUI/UI Polish
- Terminal rendering bugs appear across Claude Code (#48435, scrolling), Codex (#20569, scrollbar overlay), Gemini CLI (#24935, corruption after editors), OpenCode (#26198, mouse escape sequences), Qwen Code (#4052, inline-code highlight). This is a **pain point cluster** — TUI reliability is not yet table-stakes quality.

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Qwen Code |
|-----------|------------|-------------|------------|-------------|-----------|----------|-----------|
| **Primary release strategy** | Stable feature releases | Rust alpha churn | Nightly builds | Patch releases | Steady minor releases | PR-driven, no stable | PR-driven, no stable |
| **Focus area** | Multi-session orchestration (Agent View, /goal) | MCP hooks, sandboxing, test stability | Evaluation infrastructure, AST awareness | GitHub integration, slash commands | vLLM compat, connection optimization | Internal refactoring (Effect, Zod removal) | Daemon mode, MCP perf, architecture cleanup |
| **Notable differentiator** | First-class agent teams & subagents | Token burn is #1 community concern (574 comments) | Behavioral eval framework (#24353) | `/autopilot` toggle, prompt file integration (#98) | Fast iteration on reported bugs (7 PRs merged) | Effect-based architecture, WSL onboarding | OAuth policy debate (#3203), architecture audit (#4063) |
| **Target audience signal** | Power users needing autonomous multi-session workflows | Heavy users hitting rate limits | Users wanting structured, evaluatable workflows | Developer workflows tightly tied to GitHub | Self-hosted vLLM users | Effect ecosystem adopters, Copilot power users | Chinese developer ecosystem, OAuth-dependent users |
| **Community tension level** | Moderate — frustration with Windows gaps | High — token consumption anger | Low — maintainer-responsive | Moderate — model availability complaints | Low — issue volume small | Moderate — UI regressions disputed | High — OAuth free tier policy controversial |

**Key differentiator insight:** Claude Code is pushing **multi-agent orchestration** (Agent View, `/goal`, agent teams). Codex is investing in **MCP as an integration layer** (PreToolUse hooks, turn metadata, sandbox context). Gemini CLI is building **evaluation infrastructure** (#24353) as a competitive moat. Copilot CLI is optimizing **GitHub workflow velocity** (autopilot, powershell fallback). The other three (Kimi Code, OpenCode, Qwen Code) are in **stability and architecture cleanup** phases — catching up on bugs, refactoring core, and reducing technical debt.

## 5. Community Activity Notes

**Highest raw activity:** OpenCode and Qwen Code each had 50+ issues and 50+ PRs updated. However, much of this is PR churn from ongoing refactoring (OpenCode Effect migration, Qwen Code daemon and MCP work) rather than new community engagement.

**Most engaged community:** OpenAI Codex has the most passionate user base — #14593 at 574 comments is a rallying point. The token consumption issue is generating sustained outrage. Qwen Code's OAuth policy debate (#3203, 124 comments) shows a politically aware community pushing back on monetization plans.

**Best maintainer response:** Gemini CLI shows multiple maintainer tags (`maintainer`, `status/pr-nudge-sent`) and active PR review. Kimi Code merged 7 PRs in 24h — high throughput. Codex maintainers have 10 active PRs showing infrastructure investment.

**Weakest maintainer signal:** Copilot CLI has only 1 open PR and several high-engagement issues (#2101, #2597) with no maintainer replies. OpenCode's most active issues (#768, 70 👍; #2242, 45 👍) lack recent maintainer comments despite high community interest.

**Release cadence leaders:** Claude Code (stable), Copilot CLI (patch), Codex (alpha) all shipped today. Gemini, Kimi, OpenCode, Qwen did not ship stable releases in this window.

## 6. Evidence-Backed Observations

**1. Windows is the universal weak spot.** Every tool has at least one Windows-specific bug reported today — from broken auto-update (Claude Code) to missing modules (Kimi Code) to ACL corruption (Codex) to installation failures (Qwen Code) to CRLF corruption (Copilot CLI). Windows users face "disproportionate instability" (Claude Code digest language). No tool appears to have a fully mature Windows story.

**2. MCP is converging as the most actively developed cross-tool feature area.** Qwen Code is decoupling MCP discovery from startup (#3994). Codex is adding MCP turn metadata (#22237). Kimi Code is fixing MCP auth deprecation warnings (#2238). Claude Code has MCP-related hangs (#56860). Copilot CLI has MCP connectivity in sub-agents (#2630). This is the single infrastructure topic with active PRs across four tools simultaneously.

**3. Token/rate-limit exhaustion is the most emotionally charged community issue.** Codex's #14593 (574 comments, 251 reactions) is the highest-engagement issue across all tools. Copilot CLI's #2101 (25 comments, 17 👍) echoes the same frustration. Claude Code's billing session usage request (#58107) and Kimi Code's extra generation kwargs request (#2234) are milder versions. Users feel they aren't getting value for money.

**4. Multiple tools are investing in evaluation and testing infrastructure.** Gemini CLI has the most explicit effort (#24353, component-level evaluations; #23166, stabilize evals). Codex has four PRs stabilizing remote routing e2e tests (#22202 stack). OpenCode is migrating all tests to Effect runner. Qwen Code's architecture audit (#4063) identifies structural issues. This suggests maturing projects recognizing that quality engineering needs investment.

**5. Session management (rewind, fork, resume) remains inconsistent across tools.** Claude Code's `/rewind` doesn't actually fork (#55347). Qwen Code's rewind fails with IDE integration (#3644) and in high-context sessions (#4046). Copilot CLI users want a `/fork` command (#2058). OpenCode's `/exit` autocomplete is missing (#26549). No tool has a session management implementation that users find reliable.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-05-12

## Today's Update Brief
Anthropic shipped **v2.1.139** with a research preview of the Agent View and a new `/goal` command. Community issue activity remained high (50 open/updated in 24h), with the most-discussed bug being silent remote control disconnections (72 👍). Pull request activity was minimal — only one plugin submission landed.

## Releases
**v2.1.139** — [Full changelog](https://github.com/anthropics/claude-code/releases/tag/v2.1.139) (partial notes provided):
- **Agent View (Research Preview)** — A unified list of all Claude Code sessions (running, blocked, or finished). Invoke with `claude agents`.
- `/goal command` — Allows setting a completion condition; Claude continues working across sessions until the goal is met.

## Hot Issues
*10 noteworthy issues from the last 24h, ordered by community engagement.*

### 1. Remote Control: automatic reconnection doesn't work — connection drops silently
[#34255](https://github.com/anthropics/claude-code/issues/34255) — `[bug, platform:macos, platform:ios]`
**34 comments · 72 👍**
Silent drops in remote control sessions with no automatic recovery. Affects macOS and iOS. High community agreement on severity.

### 2. Tool result transform hook for content sanitization
[#18653](https://github.com/anthropics/claude-code/issues/18653) — `[enhancement, area:tools, area:security]`
**23 comments · 16 👍**
Requests a hook to transform tool results before they reach the LLM, enabling custom sanitization/redaction. Active discussion on architectural approach.

### 3. Windows 11 Pro: Cowork, Connectors, and Claude Code broken after auto-update
[#47104](https://github.com/anthropics/claude-code/issues/47104) — `[bug, platform:windows, area:auth, area:cowork, area:desktop]`
**10 comments · 3 👍**
`ERR_CONNECTION_RESET` and `OAuthError` after latest auto-update on Windows 11. Impacts Cowork and Connectors. Potential duplicate with #58172.

### 4. Bypass permissions mode still prompts for edits to `~/.claude/settings.json`
[#37029](https://github.com/anthropics/claude-code/issues/37029) — `[bug, has repro, platform:macos, area:permissions]` (CLOSED)
**9 comments · 15 👍**
`--dangerously-skip-permissions` fails to suppress permission prompts for the user’s own config file. Closed — likely fixed in a later release, but not yet verified.

### 5. Opus skill rewrites ignored own `/verify` skill, made unverified claims, regressed to prose summaries
[#57661](https://github.com/anthropics/claude-code/issues/57661) — `[bug, area:model, area:skills, api:anthropic]`
**9 comments · 1 👍**
Opus model disregards the user’s `/verify` skill during self-rewrite, producing unverified claims and losing structured output format. Represents a model behavior regression in skill adherence.

### 6. Session hangs indefinitely with spinning thinking indicator — 3 variants (+ MCP teardown issues)
[#56860](https://github.com/anthropics/claude-code/issues/56860) — `[bug, has repro, platform:windows, area:tui, area:mcp, area:agents]`
**6 comments · 1 👍**
Windows-only hanging bug with at least three distinct triggers, including MCP teardown failures. Multiple MCP servers active.

### 7. Agent Teams: inbox messages to team lead deferred until `stop_reason=end_turn`
[#50779](https://github.com/anthropics/claude-code/issues/50779) — `[bug, has repro, platform:windows, area:agents, regression]`
**4 comments · 2 👍**
Messages written to the team lead’s inbox file are not processed until the lead finishes its current tool-use chain, causing delays in multi-agent orchestration.

### 8. OpenRouter model names (dot notation) not recognized, causing `modelSupports1M=false`
[#47298](https://github.com/anthropics/claude-code/issues/47298) — `[bug, has repro, area:providers]`
**5 comments**
OpenRouter uses `anthropic/claude-opus-4.6` (dot notation), but Claude Code’s canonical name matcher expects dashes. Silent capability degradation for all OpenRouter users on large-context models.

### 9. `--bg` feature gate disabled on Windows, enabled on macOS with same account + version
[#58204](https://github.com/anthropics/claude-code/issues/58204) — `[bug, platform:windows, area:cli]`
**3 comments**
The `claude --bg` background session flag works on macOS but fails on Windows with identical credentials and version. Suggests platform-gated rollout or a flag-fetch bug.

### 10. `/rewind` says "conversation will be forked" but never creates a resumable fork
[#55347](https://github.com/anthropics/claude-code/issues/55347) — `[bug, has repro, platform:macos, area:core]`
**3 comments · 2 👍**
`/rewind` mutates the session in place instead of forking. Original session disappears from `/resume` — no fork is actually persisted.

## Key PR Progress
Only **one pull request** was updated in the last 24 hours:

### #58126 — Add `neonpanel` plugin v1.0.0
[PR #58126](https://github.com/anthropics/claude-code/pull/58126) — `OPEN`
Author: [@msoroch](https://github.com/msoroch)
A plugin that provides an AI workforce for Amazon-seller operations via MCP, with eight domain agents (replenishment, accounting, supply chain, etc.) grounded in live NeonPanel commerce data.

*(No other PRs were active in this window.)*

## Feature Request Clusters
*Recurring feature themes from issues; no roadmap implications intended.*

1. **Permissions and Autonomy Modes**
   Multiple requests for full autonomous operation, especially when running as root (`--dangerously-skip-permissions` hard-exits) or inside containers. (#58197, #50046, #37029)

2. **Statusline/Context Data in Hooks**
   Users want more granular data exposed in the statusline JSON — billing session usage (#58107) and per-item context breakdown (#58208).

3. **Skills System Enhancements**
   - **Hierarchical skill resolution** up the directory tree (like `.git/` or `node_modules`). (#38981)
   - **Tool result transform hooks** for custom sanitization before the LLM sees them. (#18653)

4. **UI Localization**
   Request for multi-language UI support in the TUI. (#31413)

5. **Git Attribution Control**
   The `attribution.commit` empty string to disable `Co-Authored-By` trailers is not respected. (#45137)

## Developer Pain Points
*Recurring frustrations and high-frequency bug clusters.*

- **Agent Teams orchestration fragility** — Inbox messages deferred (#50779), lead agent requiring manual stdin to process notifications (#51959). Unattended multi-agent workflows remain brittle.

- **Windows platform gaps** — Auto-update breaks Cowork/Connectors (#47104, #58172); session hangs with MCP (#56860); `--bg` flag gated (#58204); remote-control regression (#58113). Windows users experience disproportionate instability.

- **Permission bypass not fully reliable** — Even with `--dangerously-skip-permissions` or `dontAsk`, users still see prompts for config files (#37029) and skill directory creation (#50046). Root/sudo users have no path to full autonomy (#58197).

- **Provider/model compatibility issues** — OpenRouter dot notation not matched (#47298), Vertex AI `output_config` error (#52312), and Opus model skipping `/verify` skills (#57661). Third-party model users face silent degradations.

- **Session management quirks** — `/rewind` fork promised but not created (#55347), remote control reconnection silent failure (#34255), and keyboard scrolling broken in TUI (#48435). Core navigation and session recovery workflows have rough edges.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest – 2026-05-12

## Today's Update Brief
Three Rust alpha releases (0.131.0-alpha.6, .7, .9) landed in the last 24 hours. The community remains highly active: the top issue about excessively fast token consumption now has 574 comments and 251 reactions, and multiple critical bugs around compaction, sandboxing, and desktop performance are seeing sustained discussion. Several maintainer pull requests are in flight to address compaction warnings, MCP lifecycle, and test stability.

## Releases
- **[rust-v0.131.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.131.0-alpha.6)**, **[rust-v0.131.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.131.0-alpha.7)**, **[rust-v0.131.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.131.0-alpha.9)** – Three sequential alpha releases for the Rust component. No detailed changelog provided; likely contain infrastructure and stability improvements.

## Hot Issues

1. **[#14593 – Burning tokens very fast](https://github.com/openai/codex/issues/14593)** (🔥 574 comments, 251 👍)
   Open, Business subscription, VS Code on Windows. User reports token consumption far exceeding expected usage. The thread has become a rallying point for many users experiencing similar rate-limit exhaustion, making it the most active issue in the repo.

2. **[#20161 – Phone number verification doesn't work](https://github.com/openai/codex/issues/20161)** (Closed, 110 comments, 84 👍)
   Closed after 12 days. Users logging in via SSO on a different device are forced to add a phone number, which then fails. The high engagement suggests this auth flow confuses a significant number of users.

3. **[#14860 – Error running remote compact task](https://github.com/openai/codex/issues/14860)** (60 comments, 39 👍)
   Open, Pro subscription, gpt-5.4 on Linux. `/compact` fails with an API error. A related regression was filed later in [#21671](https://github.com/openai/codex/issues/21671) (closed), indicating this is an ongoing area of instability.

4. **[#13993 – Support standalone Windows installer (`codex-setup.exe`)](https://github.com/openai/codex/issues/13993)** (39 comments, 101 👍)
   Open feature request. Many Windows users cannot use the Microsoft Store due to corporate policies or offline environments. High reaction count shows strong demand for a traditional `.exe` installer.

5. **[#15777 – Codex sandbox installation corrupts ACL on AppData](https://github.com/openai/codex/issues/15777)** (25 comments)
   Open, Free subscription, Windows 10. After installation, NTFS ACLs on `%APPDATA%` become corrupted, causing permission errors for other applications. A serious platform-specific bug.

6. **[#18693 – Desktop performance collapses with large local conversation histories](https://github.com/openai/codex/issues/18693)** (17 comments, 5 👍)
   Open. Typing, scrolling, and thread list all become sluggish when a few conversations grow very large. Users report unexpected exits and delayed UI updates.

7. **[#20569 – Branch detail panel makes it impossible to use scrollbar](https://github.com/openai/codex/issues/20569)** (10 comments, 20 👍)
   Open, Windows and macOS. The branch detail panel overlays or intercepts scroll events, preventing normal scrolling. Simple but impactful UI regression.

8. **[#9184 – vi editing mode (like Claude Code / vim)](https://github.com/openai/codex/issues/9184)** (10 comments, 43 👍)
   Open feature request. Users want full vi-mode keybindings in the TUI to match tools like Claude Code. The existing partial support (#2387) is considered inadequate.

9. **[#21719 – Chrome plugin native host connects to wrong socket](https://github.com/openai/codex/issues/21719)** (9 comments)
   Open, macOS. The bundled Chrome plugin connects to a different socket than the Codex browser-use pipe, causing `@chrome` tasks to time out. A newly filed connectivity blocker.

10. **[#22040 – Codex CLI burns subscription tokens when only checking `/status`](https://github.com/openai/codex/issues/22040)** (5 comments)
    Open, Plus subscription, Linux. Simply polling the status endpoint appears to consume usage quota, draining tokens without doing any actual work. Related to the broader rate-limit concerns.

## Key PR Progress

1. **[#22243 – Filter legacy warning messages during compaction](https://github.com/openai/codex/pull/22243)**
   Prevents old model-warning records (like exec process-limit warnings) from being persisted as user messages during `/compact`. Directly addresses the root of #21671 / #14860.

2. **[#20527 – Support PreToolUse updatedInput rewrites](https://github.com/openai/codex/pull/20527)**
   Enables hook authors to modify tool call inputs before execution via the `PreToolUse` hook. Previously Codex ignored the `updatedInput` field; this PR applies the rewrite as documented.

3. **[#21250 – Keep thread PermissionProfile immutable](https://github.com/openai/codex/pull/21250)**
   Moves permission state away from legacy `SandboxPolicy` to a durable `PermissionProfile` for app-server threads. Prevents clients from replacing permissions after a conversation is created.

4. **[#22229 – Fix TUI network approval history rendering](https://github.com/openai/codex/pull/22229)**
   Corrects malformed lines in the TUI history cell after network approval, ensuring the command string is displayed properly.

5. **[#22202 (#22201, #22200, #22199) – Stabilize remote routing e2e tests](https://github.com/openai/codex/pull/22202)**
   A stack of four PRs isolating tmp-dependent tests from ambient git, using remote fs for turn diff, emitting unified exec end on startup failure, and generally hardening the test suite.

6. **[#22237 – Add `user_input_requested_during_turn` to MCP turn metadata](https://github.com/openai/codex/pull/22237)**
   Exposes a new metadata key so MCP servers can detect whether the model requested user confirmation during a turn. Enables more context-aware tool behavior.

7. **[#22244 – Speed up Windows x64 Rust tests with archive fanout](https://github.com/openai/codex/pull/22244)**
   Splits the monolithic Windows Rust test row into one archive producer plus six shards, cutting critical duration from over 12 minutes. A CI productivity improvement.

8. **[#21861 – Apply sandbox context to local `view_image` reads](https://github.com/openai/codex/pull/21861)** (Closed)
   Creates a selected-cwd filesystem sandbox for `view_image` metadata and file reads, closing a sandbox bypass vector in local mode.

9. **[#22228 – Expose plugin provenance for listed skills](https://github.com/openai/codex/pull/22228)**
   Adds `SkillProvenance` and optional plugin metadata (display name, logo) to `skills/list`, allowing clients to distinguish personal, project, system, and marketplace-backed skills.

10. **[#22231 – Add not-so-yolo CLI mode](https://github.com/openai/codex/pull/22231)**
    Introduces a `--not-so-yolo` flag that enables workspace-write sandboxing, on-request approvals, and auto-review as the approvals reviewer – a middle ground between full trust (`--yolo`) and strict mode.

## Feature Request Clusters

**Windows installation improvements**
Requests for a standalone `.exe` installer (#13993) and fixes for AppData ACL corruption (#15777) dominate Windows feedback. The existing Microsoft Store requirement is a common frustration.

**Editor and terminal experience**
Full vi mode (#9184) and a command to clear session context (#19829) are repeatedly requested. Users want parity with tools like Claude Code and more explicit control over session state.

**MCP lifecycle management**
Demand for project-scoped MCP pools (#20883) and avoidance of eager process spawning (#21984) indicates that current per-session MCP startup creates resource pressure, especially with headed browser tool servers.

**Plan Mode enhancements**
An open request (#19125) asks for a private live plan file – similar to Claude Code’s plan mode – where the plan file is not exposed in the repository after completion.

## Developer Pain Points

- **Token / rate-limit burn** – The most active issue (#14593) reports fast token consumption even during idle usage (#22040). This is the single biggest pain point, with 574 comments.
- **Remote compaction instability** – Multiple open and closed issues (#14860, #21671) show that `/compact` frequently fails with API errors, disrupting long-running sessions.
- **Desktop performance with large histories** – Users with many large conversations (#18693) experience UI lag, typing delays, and crashes.
- **Git spam on Windows** – Codex spawns repeated `git add -A` processes (#22085, #22151), causing high CPU and triggering Git LFS filter processes even when the app is in the background.
- **Chrome / browser-use connectivity** – The Chrome extension fails to connect due to socket mismatches (#21719) or missing plugin (#22077), blocking browser automation workflows.
- **ACL corruption on Windows sandbox installation** – (#15777) corrupts AppData permissions, breaking other Windows applications.
- **MCP servers leaking processes** – Eager session startup (#21984) and per-session pools (#20883) cause headed browser MCP processes to accumulate over time.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest – 2026-05-12

## Today's Update Brief

Activity remains high with 50 issues and 50 PRs updated in the last 24 hours. A single nightly release (v0.42.0-nightly.20260511) shipped two fixes addressing PATH preservation in Git environments and a routing argument mismatch. Community discussion continues to cluster around subagent reliability, evaluation infrastructure, and memory system quality, with maintainer attention visible across several open bugs and feature investigations.

---

## Releases

### v0.42.0-nightly.20260511.g1a894c18e

Two fixes in this nightly:
- **fix(core): preserve system PATH in Git environment to fix ENOENT** – Resolves an issue where shell commands executed in Git-initialized directories failed with `ENOENT` because the system `PATH` was not forwarded. (PR [#26587](https://github.com/google-gemini/gemini-cli/pull/26587))
- **fix(routing): fix resolveClassifierModel argument mismatch in ApprovalModeStrategy** – Corrects a parameter ordering bug in routing logic, by @danielweis.

---

## Hot Issues

### 1. #24353 – Robust component level evaluations
*Opened 2026-03-31 | 8 comments | 🔒 maintainer*
Tracks the expansion of "behavioral evals" from a pilot (76 tests) into a structured component-level evaluation framework. Community interest is moderate, but the EPIC nature suggests this is a foundation for future quality gates.
[View Issue](https://github.com/google-gemini/gemini-cli/issues/24353)

### 2. #21740 – Investigate impact of tracker on multiagent workflows
*Opened 2026-03-09 | 8 comments | 🔒 maintainer*
Explores whether the memory/tracker subsystem degrades performance or correctness in multi-agent scenarios. No resolution yet; remains in `status/need-information`.
[View Issue](https://github.com/google-gemini/gemini-cli/issues/21740)

### 3. #22745 – Assess the impact of AST-aware file reads, search, and mapping
*Opened 2026-03-16 | 7 comments | 👍 1*
A widely-upvoted EPIC proposing AST-aware tooling to reduce token noise and improve read precision. Has spawned two child issues (#22746, #22747). Indicates strong interest in semantic code understanding.
[View Issue](https://github.com/google-gemini/gemini-cli/issues/22745)

### 4. #22323 – Subagent recovery after MAX_TURNS is reported as GOAL success
*Opened 2026-03-13 | 6 comments | 👍 2*
A reliability bug: the `codebase_investigator` subagent reports `status: "success"` and `Termination Reason: "GOAL"` even when it hit the maximum turn limit without performing any analysis. This hides real failures and misleads orchestration logic. High community agreement (2 👍).
[View Issue](https://github.com/google-gemini/gemini-cli/issues/22323)

### 5. #21968 – Gemini does not use skills and sub-agents enough
*Opened 2026-03-11 | 6 comments | 🔒 maintainer*
Anecdotal but consistent complaint: custom skills and sub-agents are not invoked autonomously by the model, even for tasks matching their descriptions. Users must explicitly instruct the model to use them. Suggests a failure in tool-calling heuristics.
[View Issue](https://github.com/google-gemini/gemini-cli/issues/21968)

### 6. #26563 – Tool "save_memory" not found
*Opened 2026-05-06 | 5 comments*
A regression in v0.41.1: running `/memory add some text` fails with `Tool "save_memory" not found. Did you mean one of: "ask_user", "list..."`. Indicates a potential missing tool registration or naming conflict. Fresh issue with ongoing debugging.
[View Issue](https://github.com/google-gemini/gemini-cli/issues/26563)

### 7. #21983 – Browser subagent fails in Wayland
*Opened 2026-03-11 | 4 comments | 👍 1*
Browser agent fails on Wayland display servers with a generic `Termination Reason: GOAL` message. No clear root cause yet. Affects Linux users with modern display protocols.
[View Issue](https://github.com/google-gemini/gemini-cli/issues/21983)

### 8. #25166 – Shell command execution gets stuck with "Waiting input" after command completes
*Opened 2026-04-11 | 3 comments | 👍 3*
Highest 👍 count among today's issues. After executing simple CLI commands, Gemini hangs, showing the shell command as active and "Awaiting user input" even though the process finished. Frequent enough to appear "repeatedly" per the reporter. Significant workflow blocker.
[View Issue](https://github.com/google-gemini/gemini-cli/issues/25166)

### 9. #23571 – Model frequently creates tmp scripts in random spots
*Opened 2026-03-23 | 3 comments*
When restricted to shell execution, the model generates temporary scripts in arbitrary directories, creating workspace cleanup overhead. Affects users who want a clean commit history.
[View Issue](https://github.com/google-gemini/gemini-cli/issues/23571)

### 10. #22267 – Browser Agent ignores settings.json overrides (e.g., maxTurns)
*Opened 2026-03-13 | 3 comments*
Configuration overrides provided in `settings.json` are correctly parsed by `AgentRegistry` but then ignored by the Browser Agent at runtime. Blocks users from customizing agent behavior.
[View Issue](https://github.com/google-gemini/gemini-cli/issues/22267)

---

## Key PR Progress

### 1. #26888 – feat(context): Introduce adaptive token calculator
*Updated 2026-05-12 | By @joshualitt*
Introduces a more accurate content-size calculator, fixing a bug in the existing token calculation logic. Requires minor test adjustments. Addresses issue #26887.
[View PR](https://github.com/google-gemini/gemini-cli/pull/26888)

### 2. #26717 – feat(bot): implement scheduled agent and worker delegation model
*Updated 2026-05-12 | By @gundermanc*
Refactors the Gemini CLI bot away from tightly coupled orchestrated actions toward a Gemini CLI skills + subagents model. Incremental step toward decoupling the tool from its harness. Important architectural evolution.
[View PR](https://github.com/google-gemini/gemini-cli/pull/26717)

### 3. #26876 – Improve Gemini retry visibility and timeout handling
*Updated 2026-05-12 | By @Terrydaktal*
Addresses "hanging on *Thinking...*" after v0.35 by patching silent wait modes (model capacity retries, stream open timeouts, backend requests). Makes retries visible and adds timeout guardrails.
[View PR](https://github.com/google-gemini/gemini-cli/pull/26876)

### 4. #26899 – Codex/fix compact cockpit default behavior
*Opened 2026-05-12 | By @OpenClawdd*
Fixes the default behavior of the compact cockpit mode. Labeled `priority/p1`. Brief description suggests this is a fix addressing a regression in the new UI layout.
[View PR](https://github.com/google-gemini/gemini-cli/pull/26899)

### 5. #26577 – fix(cli): restore resume for legacy sessions (CLOSED)
*Merged 2026-05-12 | By @KurodaKayn*
Fixes session resume behavior: legacy chat JSON files missing from `/resume` and `--list-sessions` are now discoverable. Prevents `--resume` from silently creating a new session. Important for users upgrading from older versions.
[View PR](https://github.com/google-gemini/gemini-cli/pull/26577)

### 6. #26361 – fix(core): externalize https-proxy-agent to fix proxy support
*Updated 2026-05-12 | By @sotokisehiro*
Externalizes `https-proxy-agent` from the esbuild bundle to resolve `TypeError: HttpsProxyAgent is not a constructor`. Blocks users behind corporate proxies. Still open with `status/pr-nudge-sent`.
[View PR](https://github.com/google-gemini/gemini-cli/pull/26361)

### 7. #26714 – feat(cli): merge Auto modes into a single Auto mode
*Updated 2026-05-12 | By @DavidAPierce*
Unifies "Auto (Gemini 3)" and "Auto (Gemini 2.5)" into a single mode that dynamically routes based on task complexity and release channel. Simplifies the model selection UX for end users.
[View PR](https://github.com/google-gemini/gemini-cli/pull/26714)

### 8. #26529 – feat(agent): formalize first-class tool lifecycle states
*Updated 2026-05-11 | By @mbleigh*
Adds formal lifecycle states to `AgentProtocol` event types and refactors the terminal UI to consume these status properties directly, decoupling from legacy metadata objects. Architectural cleanup for the agent rendering pipeline.
[View PR](https://github.com/google-gemini/gemini-cli/pull/26529)

### 9. #26844 – fix(cli): add missing CustomTheme properties to validation schema
*Updated 2026-05-11 | By @R0SEWT*
Three runtime theme properties (`ui.active`, plus two others) were missing from the Zod validation schema, causing `"Unrecognized key"` errors at startup when `additionalProperties: false` is enforced. Fixes a common configuration pain point.
[View PR](https://github.com/google-gemini/gemini-cli/pull/26844)

### 10. #25444 – Fix EISDIR warnings and Max Stack Size errors
*Updated 2026-05-11 | By @ProthamD*
Addresses two critical failure modes: `EISDIR` errors in `isBinaryFile` when glob returns directory paths, and stack overflow on large inputs. Affects users with large projects or unusual directory structures. Fixes #21527.
[View PR](https://github.com/google-gemini/gemini-cli/pull/25444)

---

## Feature Request Clusters

### AST-Aware Code Understanding
Three interlinked EPICs (#22745, #22746, #22747) propose using AST-aware CLI tools for file reading, search, and codebase mapping. The goal is to reduce token waste from misaligned reads, improve search precision, and enable method-level navigation. An active area of infrastructure investigation with community upvotes.

### Agent Autonomy & Delegation
Multiple requests seek greater agent autonomy and background task handling: #22741 asks for backgroundable subagents (Ctrl+B), #21968 wants better autonomous use of custom skills, and #22672 proposes safeguards against destructive behavior. Implies users expect agents to safely multitask without blocking the terminal.

### Evaluation & Reliability Infrastructure
#24353 (component-level evaluations), #23166 (stabilize internal project evals), and #23313 (make steering eval always pass) show a push toward more robust, granular, and always-green test suites. Likely driven by maintainer need for regression detection before release.

### Memory System Improvements
A cluster of issues from @SandyTao520 (#26525, #26523, #26522, #26516) targets Auto Memory quality: deterministic redaction of secrets, quarantine of invalid patches, stopping indefinite retries on low-signal sessions, and general quality tracking. Security and reliability are both cited.

---

## Developer Pain Points

1. **False success reporting on subagent limits** – #22323 shows that hitting `MAX_TURNS` is reported as "GOAL" success, masking real failures. Erodes trust in agent orchestration.
2. **Unreliable tooling for common actions** – #26563 (`save_memory` not found), #25166 (shell commands stuck after completion), and #22267 (browser agent ignores config) all represent fundamental workflow blockers that appear to be regressions or under-tested edge cases.
3. **Model does not use configured tools autonomously** – #21968 and #21461 (aliases not supported) indicate a gap between what users configure (skills, shell aliases) and what the model actually invokes, forcing manual instruction overhead.
4. **Destructive action risk** – #22672 highlights that the model occasionally uses `git reset` or `--force` when safer alternatives exist. Users want guardrails, not just warnings.
5. **Terminal UI fragility** – #21924 (flicker on resize), #24935 (corruption after external editors), and #22186 (crash on GSD output) point to lingering rendering issues in the Ink-based terminal UI.
6. **Security concerns in memory pipeline** – #26525 flags that secrets are sent to the extraction model before redaction, and the service can log existing skills. Privacy-conscious users may find this unacceptable.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest – 2026-05-12

## Today’s Update Brief
A fairly active day with one new patch release (v1.0.45), a handful of new issues filed in the last 24 hours, and one open pull request. The community continues to report model availability errors (especially Claude Sonnet 4.5 and GPT transient failures) and Windows-specific bugs, while feature requests around session management and agent customization persist.

## Releases
- **v1.0.45** – Released 2026-05-11
  Changes:
  - Added `/autopilot` slash command to toggle between interactive and autopilot modes.
  - Fall back to Windows PowerShell (`powershell.exe`) when PowerShell 7+ (`pwsh`) is not available on Windows.
  - OpenTelemetry output now aligns with GenAI semantic conventions: MCP tool calls use standard `tool_ca` naming.

[View release](https://github.com/github/copilot-cli/releases/tag/v1.0.45)

## Hot Issues
*Top 10 issues by comment activity, updated in the last 24h.*

1. **[#2101] Request failed due to transient API error & rate limit**
   *Affected workflow:* Any model request – users hitting repeated transient errors that escalate to a “rate limit” message.
   *Community reaction:* 25 comments, 17 👍. Ongoing frustration with no fix confirmed.
   [Issue](https://github.com/github/copilot-cli/issues/2101)

2. **[#2597] Claude Sonnet 4.5 listed in `/models` but returns 400 error**
   *Affected workflow:* Switching to Claude Sonnet 4.5 after it worked earlier in the day; subsequent requests fail with `400`.
   *Community reaction:* 15 comments, no replies from maintainers yet.
   [Issue](https://github.com/github/copilot-cli/issues/2597)

3. **[#2630] Custom agent `mcp-servers` not connected in sub-agent or `--prompt` contexts**
   *Affected workflow:* Users defining custom agents with MCP servers in YAML frontmatter – those servers are missing when the agent runs as a sub-agent or via `--prompt`.
   *Community reaction:* 7 comments. Workaround is to use the agent only in interactive mode.
   [Issue](https://github.com/github/copilot-cli/issues/2630)

4. **[#1148] Copilot-cli changes line endings to CRLF on Windows**
   *Affected workflow:* Any file edit on Windows forces CRLF even when original file uses LF.
   *Community reaction:* 6 comments, 5 👍. Long-standing issue (since January) with no resolution.
   [Issue](https://github.com/github/copilot-cli/issues/1148)

5. **[#98] Integrate with `prompts/*.md` files**
   *Affected workflow:* Users want to reuse custom prompt files (like GitHub Copilot’s customization tutorials) directly in the CLI.
   *Community reaction:* 5 comments, 28 👍. High demand for prompt reuse.
   [Issue](https://github.com/github/copilot-cli/issues/98)

6. **[#891] Why is Copilot “stupider” than Claude Code with the same model (Opus 4.5)?**
   *Affected workflow:* Subjective quality gap when using Opus 4.5 in Copilot CLI vs. Claude Code – lack of plan mode, erratic behaviour.
   *Community reaction:* 4 comments, 1 👍. No maintainer response.
   [Issue](https://github.com/github/copilot-cli/issues/891)

7. **[#2058] Add `/fork` command to branch sessions**
   *Affected workflow:* During multi-step tasks, side questions derail the main objective – users want a way to fork the conversation.
   *Community reaction:* 4 comments, 7 👍. Popular feature request.
   [Issue](https://github.com/github/copilot-cli/issues/2058)

8. **[#2338] Permissions from `.claude/settings.json` not taken into account**
   *Affected workflow:* Even after v1.0.12 claimed support for `.claude/settings.json`, permission controls (allow lists) are ignored.
   *Community reaction:* 3 comments, 2 👍. Partial regression or incomplete implementation.
   [Issue](https://github.com/github/copilot-cli/issues/2338)

9. **[#3183] SDK: orphan `tool_use` after hard kill + resume causes 400**
   *Affected workflow:* Using the Copilot SDK – killing and resuming a session leaves orphan tool_use IDs, causing `400` errors on subsequent messages.
   *Community reaction:* 3 comments. SDK users affected.
   [Issue](https://github.com/github/copilot-cli/issues/3183)

10. **[#2736] `posix_spawnp failed` misdiagnoses missing command**
    *Affected workflow:* Shell command fails with spawn error, but Copilot incorrectly reports the command is missing from `PATH`.
    *Community reaction:* 3 comments, 4 👍. Potentially misleading debugging experience.
    [Issue](https://github.com/github/copilot-cli/issues/2736)

## Key PR Progress
Only one open PR updated in the last 24 hours:

- **[#3199] Update Homebrew installation commands for copilot-cli**
  The PR notes that CLI tools were moved to new Homebrew casks (`copilot-cli` and `copilot-cli@prerelease`).
  Author: @tto11y | Updated: 2026-05-11 | No comments yet.
  [PR](https://github.com/github/copilot-cli/pull/3199)

## Feature Request Clusters
Recurring themes from issues filed or active today:

- **Session management enhancements** – `/fork` command (#2058), rewind without git (#1381), `/plan` read/show flag (#3247).
- **Model & usage transparency** – Display remaining API usage (#3243), clarify Ctrl+G shortcut conflicts (#3245).
- **Cross-platform & terminal polish** – Respect system cursor style (#2507), Vietnamese input support (#3251), Windows CRLF (#1148).
- **Agent customization** – Reusable prompt files (#98), open source the CLI (#3241), `/wing` alias for `/fleet` (#1421).

## Developer Pain Points
- **Model availability & reliability** – Repeated transient API errors (#2101) and model-specific 400 errors (#2597, #3242) are the top blockers.
- **Windows-specific bugs** – CRLF corruption (#1148), wrong PowerShell detection on `winget` (#3240), native crash with BYOK (#3250), and posix_spawnp misdiagnosis (#2736).
- **MCP & custom agent friction** – MCP servers not connecting in sub-agents (#2630), OAuth token expiry mid-workflow (#2779), enterprise MCP server URL issues (#3248).
- **Permission & security gaps** – Hooks not firing for background agents (#3013), `.claude/settings.json` permissions ignored (#2338), misleading download prompts (#3213).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-12

## 1. Today's Update Brief

Kimi Code CLI v1.42.0 was released yesterday with several bug fixes. Community activity remains high: 8 issues and 14 PRs were updated in the last 24 hours, with maintainers merging fixes for Windows crashes, memory leaks, and vLLM compatibility. A new set of PRs addresses connection reuse, telemetry schema improvements, and skill documentation upgrades.

## 2. Releases

**v1.42.0** was released on 2026-05-11. Changes include:
- **Fix(soul):** Clear partial UI output when LLM step is retried
- **Fix(tests):** Unbreak main CI after the soul fix
- **Fix(shell):** Register `/btw` slash command

## 3. Hot Issues

8 issues were updated in the last 24h (7 open, 1 closed). Notable items:

1. **#778 — API Error 400: Invalid request** (open since Jan, 15 comments)
    - **Affected workflow:** Any prompt input fails with 400 error on Windows/PowerShell using `claude-sonnet-4-5-20250929`
    - **Impact:** Long-standing unresolved issue, no maintainer closure despite frequent comments
    - [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/778)

2. **#2121 — Shift+Enter for line breaks** (enhancement, 1 👍)
    - **Affected workflow:** CLI input; users want standard Shift+Enter behavior instead of Ctrl+J
    - **Impact:** UI polish request from a power user comparing to other CLI tools
    - [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2121)

3. **#1297 — LLM provider error 400 on any prompt** (closed, 2 comments)
    - **Affected workflow:** `kimi-for-coding` model failing to initialize
    - **Impact:** Resolved but similar pattern to #778
    - [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/1299)

4. **#2227 — Skill call does not perform well** (new, 1 comment)
    - **Affected workflow:** Custom `/skill: auto-g...` invocations not executing correctly
    - **Impact:** Blocks skill-based automation workflows
    - [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2227)

5. **#2202 — `kimi term` crashes on Windows (missing `fcntl`)**
    - **Affected workflow:** Terminal command on Windows; crashes with missing module, secondary rendering error
    - **Impact:** Blocks Windows users from using terminal features entirely
    - [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2202)

6. **#2234 — Extra generation kwargs for OpenAI legacy models** (new, 0 comments)
    - **Affected workflow:** Users wanting to pass `extra_body` (e.g., `preserve_thinking` for Qwen) via config.toml
    - **Impact:** Feature request for advanced model parameter configuration
    - [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2234)

7. **#2233 — Empty tools array sent to vLLM during `/compact`** (new)
    - **Affected workflow:** Any compaction/auto-trigger on vLLM local models; vLLM rejects empty `tools`
    - **Impact:** Breaks context compaction for all vLLM users
    - [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2233)

8. **#2232 — Background task timeout not adjustable** (new)
    - **Affected workflow:** Long-running background tasks killed prematurely by optimistic timeout estimation
    - **Impact:** Forces users to restart tasks with manual timeout overrides
    - [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2232)

## 4. Key PR Progress

14 PRs were updated in the last 24h (7 open, 7 closed/merged). Highlights:

1. **#2239 — Fix: continue latest persisted session** (open)
    - **Change:** `--continue` now falls back to newest non-empty session per working directory
    - [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2239)

2. **#2176 — Fix(hooks): extract text from ContentPart for UserPromptSubmit** (open)
    - **Change:** Regex matchers now work with `list[ContentPart]` inputs instead of always returning empty
    - [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2176)

3. **#2236 — Fix(utils): bound broadcast queues and cap web store cache** (open)
    - **Change:** Prevents OOM from unbounded `asyncio.Queue` and excessive session caching
    - [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2236)

4. **#2238 — Fix: suppress AuthlibDeprecationWarning on fastmcp import** (open)
    - **Change:** Silences startup noise when MCP servers are configured
    - [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2238)

5. **#2237 — Add extra generation kwargs config & fix vLLM empty tools error** (open)
    - **Change:** Omits empty tools field in OpenAI legacy requests; adds configurable `extra_generation_kwargs`
    - [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2237)

6. **#2235 — Fix: omit empty tools in OpenAI legacy requests** (open)
    - **Change:** Prevents vLLM "empty tools array" rejection during compaction
    - [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2235)

7. **#2231 — Fix(aiohttp): reuse TCPConnector to prevent connection leaks** (open)
    - **Change:** Introduces `_ConnectionPool` for HTTP connection reuse across tool calls and auth flows
    - [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2231)

8. **#2229 — Fix(soul): keep subagent plan-mode reminders safe** (merged)
    - **Change:** Prevents subagent crashes when root-only tools are unavailable in shared session state
    - [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2229)

9. **#2226 — Feat(telemetry): polish event schema with outcome enum and lifecycle tracking** (merged)
    - **Change:** Unified tool_call/tool_error events, added error enrichment and turn lifecycle tracking
    - [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2226)

10. **#2230 — Feat(ui): improve shell spacing, link highlighting and notification duration** (merged)
    - **Change:** Corrects shell spacing, adds link highlighting, task duration in background notifications
    - [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2230)

## 5. Feature Request Clusters

Several community requests this cycle focus on configuration flexibility:

- **Line break behavior** (#2121): Users request Shift+Enter as an alternative to Ctrl+J for multi-line input, citing conventions in other CLI tools.
- **Model-specific sampling parameters** (#2234): Advanced users want `config.toml` support for `extra_generation_kwargs` and `extra_body` (e.g., Qwen's `preserve_thinking`), especially for OpenAI-legacy providers.
- **Adjustable background task timeouts** (#2232): Multiple users report frustration with overly optimistic default timeouts killing long-running tasks mid-execution.
- **UI/notification improvements** (implicit in #2230): Merged PR addresses shell spacing and notification duration; community has shown prior interest in smoother UX.

## 6. Developer Pain Points

Recurring frustrations visible in today's data:

- **Windows stability issues** (#2202): `kimi term` crashes due to missing `fcntl` module, then fails again with a secondary `rich.pretty` error. This follows a pattern of ongoing Windows compatibility gaps.
- **vLLM compatibility** (#2233, #2235, #2237): Multiple issues and PRs address empty tools arrays being rejected by vLLM. This is a cross-cutting concern for self-hosted users.
- **Memory and resource management** (#2231, #2236): Unbounded broadcast queues and connection leaks under high usage are being actively patched, indicating users may face OOM under load.
- **Long-standing API errors** (#778): The 400 error on `claude-sonnet-4-5-20250929` remains unresolved after 4 months, suggesting either a provider-side issue or a lingering CLI bug.
- **Slow commands killed prematurely** (#2232, #2200): Long-running shell commands (git submodule, package installs) are frequently timed out, forcing manual retries with adjusted parameters.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-12

## 1. Today's Update Brief

No new releases landed in the last 24 hours, but the repository saw heavy issue and PR activity. 50 issues and 50 pull requests were updated on May 11–12, with a clear focus on migrating the test suite to Effect, removing Zod dependencies, and introducing a native OpenAI LLM runtime. Several long-running bugs (ESC interrupt, missing slash commands, terminal mouse flooding) remain under active discussion, while a number of high-priority fixes and refactors are moving through the PR pipeline.

## 2. Releases

None.

## 3. Hot Issues

### 1. GitHub Copilot Premium Request Tracking (#768)
**Workflow:** Users on Copilot models want to see their premium request quota, not just $0.00 cost.
**Impact:** Low visibility into quota consumption forces users to switch back to VS Code for tracking.
**Community:** 33 comments, 70 👍.
[Link](https://github.com/anomalyco/opencode/issues/768)

### 2. Sandboxing the Agent (#2242)
**Workflow:** Request to restrict terminal tools from accessing files outside the project directory, similar to seatbelt on macOS.
**Impact:** Security concern for users running untrusted or AI-generated commands.
**Community:** 32 comments, 45 👍.
[Link](https://github.com/anomalyco/opencode/issues/2242)

### 3. ESC Interrupt Does Not Work (v1.0.7, Closed) (#3699)
**Workflow:** Pressing ESC during a session should abort the running response, but does nothing in the new TUI.
**Impact:** Showstopper for users who need to stop a long or wrong generation.
**Community:** 18 comments, 1 👍 (closed as fixed? but status still closed).
[Link](https://github.com/anomalyco/opencode/issues/3699)

### 4. `/exit` and `/quit` Slash Commands Missing from Autocomplete (#26549)
**Workflow:** Typing `/` no longer shows `exit`, `quit`, or `q` in the dropdown, though they work in the command palette.
**Impact:** Frustrating for users who rely on autocomplete for quick exits.
**Community:** 13 comments, 21 👍.
[Link](https://github.com/anomalyco/opencode/issues/26549)

### 5. Sound Effects & Animation in Terminal (v1.4.4) (#22528)
**Workflow:** After updating to 1.4.4, the first terminal-mode page has an animation and sound; no disable option documented.
**Impact:** Distracting for terminal users who prefer minimal output.
**Community:** 11 comments, 41 👍.
[Link](https://github.com/anomalyco/opencode/issues/22528)

### 6. Subagent Permission Inheritance Over-Constrains (#26700)
**Workflow:** Parent `deny` rules are copied to child agents even when child has explicit permissions, regression from #26597.
**Impact:** Blocks legitimate subagent workflows where the child should have more permissive access.
**Community:** 10 comments, 2 👍.
[Link](https://github.com/anomalyco/opencode/issues/26700)

### 7. Terminal Flooded with Raw Mouse Escape Sequences (#26198)
**Workflow:** Running commands leaves mouse-reporting mode enabled, flooding stdout with SGR escape codes.
**Impact:** Makes terminal output unreadable; requires manual reset.
**Community:** 8 comments, 2 👍.
[Link](https://github.com/anomalyco/opencode/issues/26198)

### 8. Markdown Rendering Broken After opentui Upgrade (#21299, Closed)
**Workflow:** Headings, bold, code blocks display as raw text since upgrading opentui from 0.1.79 to 0.1.88+.
**Impact:** Core readability feature broken for all assistant responses.
**Community:** 8 comments, 1 👍.
[Link](https://github.com/anomalyco/opencode/issues/21299)

### 9. SSE Event Stream Closes Immediately (#26697)
**Workflow:** The `/event` SSE stream terminates after the `server.connected` event; no subsequent events reach the client.
**Impact:** Prevents real-time updates for custom clients or integrations.
**Community:** 4 comments, 7 👍.
[Link](https://github.com/anomalyco/opencode/issues/26697)

### 10. Kimi/Moonshot Provider Crashes with `undefined.annotations` (#26156)
**Workflow:** Since v1.14.23, any session using Kimi/Moonshot models crashes immediately with `undefined is not an object (evaluating '$.annotations')`.
**Impact:** Unusable for all Kimi/Moonshot users until fixed.
**Community:** 3 comments, 0 👍.
[Link](https://github.com/anomalyco/opencode/issues/26156)

## 4. Key PR Progress

### 1. Native OpenAI LLM Runtime Opt-In (#26947)
**Author:** @kitlangton
**Summary:** Adds `OPENCODE_LLM_RUNTIME=native` to route no-tool OpenAI requests through a new `@opencode-ai/llm` streamer, using OpenCode provider auth.
**Status:** Open
[Link](https://github.com/anomalyco/opencode/pull/26947)

### 2. Native LLM Request Adapter (#26941)
**Author:** @kitlangton
**Summary:** Offline adapter converting normalized session LLM inputs into native `@opencode-ai/llm` request shapes.
**Status:** Open
[Link](https://github.com/anomalyco/opencode/pull/26941)

### 3. Consume Native LLM Events in Session Processing (#26639)
**Author:** @kitlangton
**Summary:** Maps AI SDK `fullStream` events to `LLMEvent`s at the `LLM.Service.stream` boundary; updates `SessionProcessor` and usage accounting.
**Status:** Open
[Link](https://github.com/anomalyco/opencode/pull/26639)

### 4. Emit LLM Stream Lifecycle Events (#26971)
**Author:** @kitlangton
**Summary:** Adds lifecycle events (step, text, reasoning) to native LLM streams; teaches tool-stream helpers to emit start/end events.
**Status:** Closed (merged)
[Link](https://github.com/anomalyco/opencode/pull/26971)

### 5. Remove Internal Zod Schemas (#26974)
**Author:** @kitlangton
**Summary:** Replaces small patch and installation Zod schemas with Effect Schema; drops unused Zod imports from file watcher and provider schema transforms.
**Status:** Closed (merged)
[Link](https://github.com/anomalyco/opencode/pull/26974)

### 6. Migrate Runtime Validators to Effect Schema (#26975)
**Author:** @kitlangton
**Summary:** Replaces isolated Zod validators in MCP auth, TUI editor parsing, Zed selection, and Copilot model parsing.
**Status:** Closed (merged)
[Link](https://github.com/anomalyco/opencode/pull/26975)

### 7. Fix Double Submit in Prompt Input (#26972)
**Author:** @kitlangton
**Summary:** Guards prompt `submit()` against concurrent invocation (e.g., double-pressed Enter) to prevent duplicate session creation.
**Status:** Closed (merged)
[Link](https://github.com/anomalyco/opencode/pull/26972)

### 8. Migrate Edit & Shell & VCS & Snapshot Tests to Effect Runner (#26977, #26968, #26965, #26964)
**Author:** @kitlangton
**Summary:** Series of PRs converting existing Promise-based tests to `testEffect`/`it.live` helpers, using Effect fixtures and synthetic watcher events.
**Status:** All closed (merged)
[Link to edit tests](https://github.com/anomalyco/opencode/pull/26977) | [shell tests](https://github.com/anomalyco/opencode/pull/26968) | [VCS tests](https://github.com/anomalyco/opencode/pull/26965) | [snapshot tests](https://github.com/anomalyco/opencode/pull/26964)

### 9. Desktop WSL Onboarding (#23407)
**Author:** @Hona
**Summary:** Adds guided WSL onboarding for the desktop app to improve the Windows experience.
**Status:** Open
[Link](https://github.com/anomalyco/opencode/pull/23407)

### 10. TUI Notifications (WIP) (#26980)
**Author:** @kommander
**Summary:** Work-in-progress beta for in-terminal notification system.
**Status:** Open
[Link](https://github.com/anomalyco/opencode/pull/26980)

## 5. Feature Request Clusters

- **MCP Integration Improvements** – Multiple issues request better support for Google Stitch MCP: how to connect (#11391) and remote MCP failures despite working curl (#26382). Users want easier on-ramps for custom MCP servers.
- **Agent Sandboxing & Permission Control** – Requests for sandboxing terminal access (#2242) and fixing subagent permission inheritance regression (#26700) show growing demand for fine-grained security boundaries.
- **TUI Customization & Feedback** – Users want to disable sound effects and animations (#22528), add right-click context menus (#26918), and improve slash command autocomplete (#26549).
- **Keyboard Shortcuts & Productivity** – Double-ESC to cancel and submit draft (#26748) and a `/handoff` command to compact context (#26757) reflect desire for faster mid-session control.
- **Voice/Audio Support** – A feature request for speech-to-text and text-to-speech input/output (#26940) was briefly opened and closed, though it may indicate broader interest.

## 6. Developer Pain Points

- **Terminal Rendering Issues** – Mouse escape sequences flooding output (#26198), incorrect colors after editor mode (#20261), broken markdown rendering (#21299), and dollar signs triggering LaTeX math (#15892) all degrade the TUI experience.
- **Provider Incompatibilities** – Kimi/Moonshot crashes on `$.annotations` (#26156), thinking field missing (#25758), and non-Anthropic models failing due to unconditional `eager_input_streaming` (#24975) show ongoing friction with third-party providers.
- **MCP Server Initialization Failures** – MCP servers that omit optional `prompts/list` or `resources/list` cause initialization errors (#24985). Remote MCP for Google Stitch fails with “Failed to get tools” despite working via curl (#26382).
- **Windows-Specific Issues** – The bash tool crashes with `ERR_INVALID_ARG_TYPE` before execution (#17458). Desktop WSL onboarding is still an open PR (#23407).
- **Configuration & Environment** – `opencode serve` ignores configuration file (#19078); plugins are initialized twice on startup (#26812); SSE event stream closes prematurely (#26697).
- **Tool Schema Validation** – Read tool fails with `SchemaError` on offset argument (#26870) and agent model assignment not recognized (#25802) point to validation gaps in tool calling paths.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest – 2026-05-12

## 1. Today's Update Brief

Activity remains high with 32 active issues and 50 pull requests updated in the last 24 hours, though no new releases were published today. The community is intensely focused on two fronts: a controversial OAuth free tier policy change proposal (#3203) has drawn 124 comments, while the engineering team continues to advance major infrastructure PRs including the `qwen serve` daemon (#3889), MCP startup performance optimization (#3994), and a code-split for faster CLI startup (#4070). Several new bugs around rewind functionality, context overflow, and IDE integration conflicts were filed today.

**No new releases today.**

---

## 2. Hot Issues (10 Most Noteworthy)

### #3203 – [OPEN] Qwen OAuth Free Tier Policy Adjustment
- **Author:** [@pomelo-nwu](https://github.com/pomelo-nwu)
- **Comments:** 124 | **Created:** 2026-04-13 | **Updated:** 2026-05-11
- **Link:** https://github.com/QwenLM/qwen-code/issues/3203
- **Summary:** Proposes reducing the OAuth free daily quota from 1,000 to 100 requests/day immediately, and completely closing the free entry point by May 20. The proposal has generated 124 comments, making it the most active discussion in the repo. Community reaction appears strong, though the issue has received zero upvotes, suggesting potential pushback or controversy.
- **Impact:** If implemented, this would significantly affect free-tier users and OAuth-based workflows, potentially driving users to alternative authentication methods or models.

### #3548 – [OPEN] Add configurable plansDirectory setting for Plan Mode
- **Author:** [@PierW](https://github.com/PierW)
- **Comments:** 5 | **Created:** 2026-04-23 | **Updated:** 2026-05-12
- **Link:** https://github.com/QwenLM/qwen-code/issues/3548
- **Summary:** Requests a `plansDirectory` configuration option for Plan Mode, similar to Gemini CLI and Claude Code, along with custom plan policies. Tagged `welcome-pr`, indicating maintainer interest in accepting contributions.
- **Impact:** Would bring Qwen Code to parity with competing CLI tools for users who rely on structured planning workflows.

### #3926 – [OPEN] Improve input text editing and selection capability
- **Author:** [@fantasyz](https://github.com/fantasyz)
- **Comments:** 3 | **Created:** 2026-05-07 | **Updated:** 2026-05-11
- **Link:** https://github.com/QwenLM/qwen-code/issues/3926
- **Summary:** Reports that `Ctrl+Backspace` to delete a word is unsupported (while `Ctrl+Delete` works), and text selection is missing, making cut/paste and line reordering impossible.
- **Impact:** Affects all CLI users' daily interactive editing experience, a recurring quality-of-life concern.

### #4046 – [OPEN] Rewind unavailable in high-context sessions
- **Author:** [@alexjml](https://github.com/alexjml)
- **Comments:** 2 | **Created:** 2026-05-11 | **Updated:** 2026-05-11
- **Link:** https://github.com/QwenLM/qwen-code/issues/4046
- **Summary:** Reports that rewind becomes unavailable in sessions with high context usage, returning `"Cannot rewind to a turn that was compressed"` even for recent uncompressed turns. Tagged `model/long-context` and `scope/session-management`.
- **Impact:** Directly impacts users working on long-running, complex sessions where context naturally grows large.

### #4049 – [OPEN] Tool output not truncated causes Context Token overflow
- **Author:** [@cfh1113](https://github.com/cfh1113)
- **Comments:** 1 | **Created:** 2026-05-11 | **Updated:** 2026-05-11
- **Link:** https://github.com/QwenLM/qwen-code/issues/4049
- **Summary:** Reports that tool output (e.g., `run_shell_command`) is not truncated before being placed into conversation context, leading to token overflow beyond model limits (e.g., GLM-5's 202,745 limit) and rendering the session unusable. Includes a detailed reproduction scenario with batch order creation.
- **Impact:** Critical for users executing data-intensive tasks; session can become permanently stuck once overflow occurs.

### #4055 – [OPEN] CLI enters infinite thinking loop on simple request
- **Author:** [@live-alife](https://github.com/live-alife)
- **Comments:** 2 | **Created:** 2026-05-11 | **Updated:** 2026-05-11
- **Link:** https://github.com/QwenLM/qwen-code/issues/4055
- **Summary:** Reports that Qwen Code v0.15.8 falls into an endless thinking loop (15+ minutes) when asked to add two simple rules to a skill document. Includes screenshots of prolonged self-looping without any response.
- **Impact:** Severe UX regression—makes the tool unusable for simple procedural updates.

### #3644 – [OPEN] Rewind fails when IDE integration is enabled
- **Author:** [@brianler](https://github.com/brianler)
- **Comments:** 3 | **Created:** 2026-04-26 | **Updated:** 2026-05-11
- **Link:** https://github.com/QwenLM/qwen-code/issues/3644
- **Summary:** Reproduced by setting `"ide": {"enabled": true}` in `settings.json`, which prevents `/rewind` from functioning properly.
- **Impact:** Conflicts between IDE integration mode and core session management features; affects users who rely on both.

### #3845 – [OPEN] Failed to install Qwen Code (Cannot find module)
- **Author:** [@zakblacki](https://github.com/zakblacki)
- **Comments:** 1 | **Created:** 2026-05-05 | **Updated:** 2026-05-11
- **Link:** https://github.com/QwenLM/qwen-code/issues/3845
- **Summary:** Reports installation failure on Windows when using the PowerShell installer script: `Cannot find module 'C:\Users\...\AppData\Local\qwen\cli.js'`. Has received 2 👍, indicating multiple affected users.
- **Impact:** Blocks new Windows users from onboarding.

### #4052 – [OPEN] Table inline-code highlight lost after wrapping in narrow terminals
- **Author:** [@chiga0](https://github.com/chiga0)
- **Comments:** 1 | **Created:** 2026-05-11 | **Updated:** 2026-05-11
- **Link:** https://github.com/QwenLM/qwen-code/issues/4052
- **Summary:** Reports that in narrow terminals, markdown table cells with long inline-code values lose syntax highlighting on continuation lines after wrapping.
- **Impact:** Visual rendering regression that affects readability for users working in split panes or small terminals.

### #4063 – [OPEN] Architecture Review: 12 structural issues in core + CLI
- **Author:** [@pomelo-nwu](https://github.com/pomelo-nwu)
- **Comments:** 1 | **Created:** 2026-05-11 | **Updated:** 2026-05-11
- **Link:** https://github.com/QwenLM/qwen-code/issues/4063
- **Summary:** Comprehensive architecture audit of `packages/core` and `packages/cli` identifying 14 structural issues. Highlights include: (P0) core type system coupled to `@google/genai`, (P0) response streaming coupling to CLI rendering, (P1) `EventBus` as a singleton causing cascading lifecycle issues, (P1) 43 tool implementations in a single file, and (P2) cross-package tests depending on internal paths.
- **Impact:** While not an urgent bug, this indicates maintainers are considering major refactoring of the architecture to reduce technical debt.

---

## 3. Key PR Progress (10 Important PRs)

### #3889 – [OPEN] feat(cli,sdk): qwen serve daemon (Stage 1)
- **Author:** [@wenshao](https://github.com/wenshao)
- **Created:** 2026-05-07 | **Updated:** 2026-05-12
- **Link:** https://github.com/QwenLM/qwen-code/pull/3889
- **Summary:** Implements Stage 1 of the daemon design proposal (#3803). Adds `qwen serve` HTTP daemon bridging ACP NDJSON over HTTP + SSE, plus SDK-side `DaemonClient`. Covers health, capabilities, session create/list, prompt, cancel, and interrupt routes. References the comprehensive 24-chapter design series.
- **Significance:** Major infrastructure addition—this is the foundation for persistent background server mode.

### #3994 – [OPEN] feat(perf): progressive MCP availability
- **Author:** [@chiga0](https://github.com/chiga0)
- **Created:** 2026-05-09 | **Updated:** 2026-05-12
- **Link:** https://github.com/QwenLM/qwen-code/pull/3994
- **Summary:** Decouples MCP server discovery from CLI startup so the first user input is no longer blocked by slow or hung MCP handshakes. Measured TTI improvement reported.
- **Significance:** Directly addresses a major startup latency pain point for users with MCP configured.

### #4069 – [OPEN] feat(cli): add tools.toolSearch.enabled setting
- **Author:** [@wenshao](https://github.com/wenshao)
- **Created:** 2026-05-12 | **Updated:** 2026-05-12
- **Link:** https://github.com/QwenLM/qwen-code/pull/4069
- **Summary:** Adds `tools.toolSearch.enabled` setting, allowing users to disable ToolSearch for models with prefix-based KV caching (e.g., DeepSeek V4) to maintain prompt prefix stability. Auto-disables for `deepseek-v4-*` models unless explicitly overridden.
- **Significance:** Performance optimization for users of specific models that benefit from stable KV cache hit rates.

### #4070 – [OPEN] perf(cli): code-split lowlight to cut startup V8 parse cost
- **Author:** [@chiga0](https://github.com/chiga0)
- **Created:** 2026-05-12 | **Updated:** 2026-05-12
- **Link:** https://github.com/QwenLM/qwen-code/pull/4070
- **Summary:** Splits the `lowlight` syntax highlighter (~1.5 MB, 36–60 ms V8 parse cost) into a separate code chunk that is only loaded when the first code block needs highlighting. Public API of `CodeColorizer` unchanged.
- **Significance:** Another startup performance win, particularly impactful for users on slower machines or cold-start scenarios.

### #4064 – [OPEN] feat(rewind): add file restoration support to /rewind
- **Author:** [@doudouOUC](https://github.com/doudouOUC)
- **Created:** 2026-05-11 | **Updated:** 2026-05-11
- **Link:** https://github.com/QwenLM/qwen-code/pull/4064
- **Summary:** Adds file-copy-based backup system (ported from claude-code's `fileHistory`) so `/rewind` can optionally roll back files modified by the assistant, not just truncate conversation history. Closes #3697.
- **Significance:** Addresses a long-standing pain point where rewind left modified files on disk requiring manual git checkout.

### #3733 – [OPEN] feat(cli): support batch deletion of sessions in /delete
- **Author:** [@qqqys](https://github.com/qqqys)
- **Created:** 2026-04-29 | **Updated:** 2026-05-12
- **Link:** https://github.com/QwenLM/qwen-code/pull/3733
- **Summary:** `/delete` now supports multi-select: Space toggles checkboxes; Enter commits deletion. Falls back to single-delete UX when nothing is checked. Active session shown as disabled with a "cannot delete" indicator.
- **Significance:** Quality-of-life improvement for session management, reducing repetitive operations for users with many sessions.

### #3214 – [OPEN] feat(core): replace fdir crawler with git ls-files + ripgrep fallback
- **Author:** [@scrollDynasty](https://github.com/scrollDynasty)
- **Created:** 2026-04-13 | **Updated:** 2026-05-12
- **Link:** https://github.com/QwenLM/qwen-code/pull/3214
- **Summary:** Replaces fdir-based filesystem crawler with a two-tier strategy: `git ls-files` for repos (respecting `.gitignore`), with `ripgrep` as fallback. Closes #3137. Aims to improve `@` file mention autocomplete speed on large repos.
- **Significance:** Targeted performance fix for users working monorepos or large codebases.

### #3980 – [OPEN] fix(core): merge IDE context into user prompt
- **Author:** [@yiliang114](https://github.com/yiliang114)
- **Created:** 2026-05-09 | **Updated:** 2026-05-11
- **Link:** https://github.com/QwenLM/qwen-code/pull/3980
- **Summary:** IDE mode now wraps editor context in a `<system-reminder>` block and prepends it to the current user request instead of inserting a separate user history entry. Preserves the API history shape and prevents context drift.
- **Significance:** Fixes a subtle but impactful bug in IDE integration that could cause context inconsistency over long sessions.

### #3849 – [OPEN] feat(models): add cross-authType model resolution
- **Author:** [@B-A-M-N](https://github.com/B-A-M-N)
- **Created:** 2026-05-05 | **Updated:** 2026-05-12
- **Link:** https://github.com/QwenLM/qwen-code/pull/3849
- **Summary:** Follow-up to PR #3815, moving cross-authType model resolution logic from a private method in `GeminiClient` to the data layer (`ModelRegistry` + `ModelsConfig`). Improves architecture separation of concerns.
- **Significance:** Part of ongoing refactoring to decouple model resolution from specific client implementations.

### #3981 – [OPEN] fix(search): make empty-query exit synchronous and normalize Windows Backspace
- **Author:** [@B-A-M-N](https://github.com/B-A-M-N)
- **Created:** 2026-05-09 | **Updated:** 2026-05-11
- **Link:** https://github.com/QwenLM/qwen-code/pull/3981
- **Summary:** Fixes a CI test failure on Windows where 'Backspace edits the query; emptying it returns to list mode'

</details>