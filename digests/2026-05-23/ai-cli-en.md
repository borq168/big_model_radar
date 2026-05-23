# AI CLI Tools Community Digest 2026-05-23

> Generated: 2026-05-23 02:10 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report — 2026-05-23

## 1. Daily Cross-Tool Overview

All seven tracked AI CLI tools saw measurable community activity today, with a combined total of over 300 issues and 85 PRs updated in the past 24 hours. Claude Code, OpenAI Codex, and Gemini CLI each maintained high issue volumes (50 items each), while OpenCode led in PR activity with 10 meaningful updates. Token consumption, context management, and authentication stability were recurring themes across multiple tools. Four tools shipped releases: Claude Code (v2.1.149), GitHub Copilot CLI (v1.0.52-2 and v1.0.52-4), OpenCode (v1.15.9 and v1.15.10), and Qwen Code (nightly build). No tool had a major feature release; most updates were patch-level or incremental.

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Releases Today | Key Release Type |
|---|---|---|---|---|
| Claude Code | 50 | 5 | v2.1.149 | Minor (usage breakdowns, scrollable diffs) |
| OpenAI Codex | 50 | 10 | 3x rust-v0.134.0-alpha | Iterative alpha (no release notes) |
| Gemini CLI | 50 | 10 | 0 | — |
| GitHub Copilot CLI | 39 | 1 (spam) | v1.0.52-2, v1.0.52-4 | Patch (context window, scrollbar) |
| Kimi Code CLI | ~10 | 4 | 0 | — |
| OpenCode | 50 | 10 | v1.15.9, v1.15.10 | Patch (diff viewer restore, regression fix) |
| Qwen Code | ~20 | 10 | v0.16.0-nightly | Nightly (tool_use fix) |

*Note: Issue counts for Kimi Code and Qwen Code are estimated based on digest mentions; "50 items updated in 24h" was explicitly stated for Claude Code, OpenAI Codex, Gemini CLI, and OpenCode.*

## 3. Shared Feature Directions

- **Context/Token Visibility and Control** — Claude Code added per-category usage breakdown (`/usage`) and scrollable diffs. OpenAI Codex's top issue (#14593, 590 comments) demands unsustainable token burn rate fixes. GitHub Copilot CLI enforced context-window tier selection (~200K vs 1M) and improved reasoning token display. Qwen Code users reported token-doubling UI bugs (#4420). Users across tools demand both visibility and control over token consumption.

- **Multi-Account / Profile Switching** — Claude Code has two high-engagement issues (#27302, #18435; combined 404 comments, 763 👍) for multiple account support on web and desktop. Kimi Code's #2269 asks for cross-device session handoff (laptop → web → mobile). No other tool explicitly raised this today, but the demand appears in two distinct communities.

- **Sandbox / File System Isolation** — GitHub Copilot CLI's #892 (sandbox mode, 44 👍) and #2243 (disable worktrees) request filesystem restriction. Claude Code's #44180 asks for `allowUnixSockets` equivalent on Linux. Gemini CLI's #22672 requests built-in safeguards against destructive commands (e.g., `git reset --force`). Three tools show interest in constraining agent filesystem or command execution scope.

- **MCP / Plugin Ecosystem Reliability** — Claude Code reports widespread MCP channel notification silent failure (#59240, regression). Gemini CLI fixed MCP tool wipe on network timeout (#27383). Kimi Code reports MCP connection timeout blocking entire CLI (#2343). OpenCode's PR #28788 adds non-blocking MCP startup serialization. MCP-related issues span four tools, focusing on resilience and error handling.

- **Session Resume / Conversation History Stability** — OpenAI Codex's #18993 (past conversations broken in VS Code), GitHub Copilot CLI's #2012 (JSON parse failure on `/resume`), and Gemini CLI's #27371 (EBADF crash on resume) all highlight session persistence bugs. Kimi Code's #2269 requests session handoff between devices. Session resume reliability remains a cross-cutting pain point.

## 4. Differentiation Analysis

- **Claude Code** continues to emphasize usage transparency and MCP ecosystem features. The `/usage` breakdown by skills, subagents, plugins, and per-MCP-server cost is unique among tools today. Its authentication instability (multiple OAuth failures) and headless invisibility (`-p` sessions not indexed) are notably enterprise-facing gaps.

- **OpenAI Codex** is the most activity-dense tool by community engagement (590 comments on token burning issue). Its alpha release stream (three builds in 24h) suggests rapid iteration, though lack of release notes reduces transparency. Codex is the only tool with a major token metering controversy actively unresolved.

- **Gemini CLI** shows the strongest focus on agent behavior reliability (hangs, subagent misreporting, shell stalls) and memory system quality. Its PRs lean toward safety (PTY leak fix, non-interactive env injection, AI validation crash prevention). The AST-aware code understanding feature cluster (#22745-#22747) is a distinctive technical direction not seen in other digests.

- **GitHub Copilot CLI** has the quietest PR activity (single spam PR) but shipped two meaningful patches. Its community is focused on sandboxing (#892), per-project plugins (#1665), and terminal compatibility (German keyboard, tmux lag). The tool's enterprise authentication issues (remote sessions blocked after v1.0.51) are the most disruptive today.

- **Kimi Code CLI** has lower overall activity but shows clear pain points: MCP timeout blocking the entire CLI, agent loop on shell commands, and misleading error messages. The cross-device session handoff request (#2269) is a differentiating feature ask not seen elsewhere except Claude Code's multi-account issues.

- **OpenCode** had the most dramatic day: a release (v1.15.9) that introduced a redesigned diff viewer but triggered widespread Desktop regressions (missing agent selector, broken file tree, blank panels), followed by a quick hotfix (v1.15.10) that only partially restored legacy flows. Its community is most vocal about UI/UX stability and provider compatibility (Gemini, DeepSeek, Grok). The PR activity is the most diverse: remote-backed project identity, Desktop v2 refinements, WSL onboarding, CORS wildcard support.

- **Qwen Code** is the most telemetry-forward tool today, with three PRs adding subagent spans, LLM retry visibility, and a local diagnostic framework (#4421). Its memory leak and OOM cluster (#4276, #4435, #4423, #4399) is the most severe stability pattern across any tool today. The Daemon mode roadmap (#4175) signals a shift toward server-mode deployment not seen in other CLI tools.

## 5. Community Activity Notes

- **Highest issue volume**: Claude Code, OpenAI Codex, Gemini CLI, and OpenCode each reported 50 items updated. All four maintain high community engagement.

- **Most releases**: OpenAI Codex (3 alpha builds) and GitHub Copilot CLI (2 patches). OpenCode had 2 releases (one causing regressions). Claude Code had 1 minor release. Gemini CLI and Kimi Code had none.

- **Most PR activity**: Gemini CLI and OpenCode each had 10 meaningful PRs. OpenAI Codex and Qwen Code also had 10 PRs (including alpha stream merges). Claude Code had 5 (including spam/non-functional PRs). GitHub Copilot CLI had 1 spam PR. Kimi Code had 4.

- **Strongest maintainer response**: OpenCode shipped a hotfix within the same day to address Desktop regressions. Qwen Code's maintainers actively engaged on memory leak fixes and CI test failures. GitHub Copilot CLI shipped patches addressing UI and context window enforcement. Claude Code's regression (#59240) remains without resolution.

- **Community frustration spiking**: OpenAI Codex's #14593 (token burning) and GitHub Copilot CLI's #3442 (remote sessions blocked) are generating sustained negative feedback with no clear resolution. Claude Code's MCP channel notification regression also has 12+ duplicate reports.

- **No tool had a "big launch" today**: All releases were incremental patches, alpha builds, or hotfixes. Activity is driven by bug reports and incremental improvements rather than new major capabilities.

## 6. Evidence-Backed Observations

1. **Token consumption visibility is the most shared cross-tool demand, but tools address it differently.** Claude Code added granular `/usage` breakdowns; Copilot CLI enforced tier selection; Codex faces a burning token crisis (#14593); Qwen Code had a UI bug doubling tokens. The community is starved for transparency, but no single approach dominates.

2. **MCP/plugin reliability is a consistent pain point across four tools.** Claude Code (channel notifications dropped), Gemini CLI (tool wipe on network timeout, fixed), Kimi Code (MCP timeout blocks CLI), OpenCode (non-blocking startup serialization). The MCP ecosystem is maturing but introduces new failure modes that each tool handles differently.

3. **Session resume and conversation history remain fragile across the board.** Copilot CLI (#2012), Codex (#18993), Gemini CLI (#27371), and Kimi Code (#2269 handoff) all touched session persistence issues. No tool appears to have a fully reliable resume mechanism; the problem is structural across CLI architectures.

4. **OpenCode's v1.15.9 release demonstrates the risk of pushing UI redesigns without sufficient testing.** The diff viewer redesign triggered at least five distinct regressions (agent selector, file tree, panel buttons, etc.), forcing a same-day hotfix that only partially addressed them. This is the clearest example today of release velocity vs. stability tradeoff.

5. **Enterprise and power-user authentication issues are concentrated but not universal.** Claude Code (OAuth multiple failures, login loops), OpenAI Codex (OAuth behind corporate proxies, #6849), and GitHub Copilot CLI (remote sessions blocked, #3442) show that enterprise deployment scenarios remain underserved. Meanwhile, Gemini CLI, Kimi Code, and OpenCode had no notable enterprise auth issues reported today, suggesting differing enterprise maturity levels.

6. **No single tool today shows a clear trajectory toward solving memory or context management at scale.** While multiple tools mention token limits, session compaction, and OOM errors, today's data shows incremental fixes (Qwen Code's listener leak, Copilot's context window enforcement) but no systemic solution. The token consumption crisis at OpenAI Codex (#14593) is the most extreme example of this unmet need.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-05-23

## Today’s Update Brief
A single point release (v2.1.149) shipped with usage breakdowns and keyboard-scrollable diffs. Issue activity remains high: 50 items updated in the last 24 hours, dominated by a persistent MCP channel notification bug, authentication failures, and growing multi-account demands. Five pull requests were updated, one of which introduces workload identity federation for CI authentication.

## Releases
**v2.1.149**
- `/usage` now shows a per-category breakdown: skills, subagents, plugins, and per-MCP-server cost.
- `/diff` detail view can be scrolled with keyboard arrows, `j`/`k`, `PgUp`/`PgDn`, `Space`, `Home`/`End`.
- Markdown output now renders.
[https://github.com/anthropics/claude-code/releases](https://github.com/anthropics/claude-code/releases)

## Hot Issues
10 noteworthy issues from today’s top-30 list:

| # | Title & Impact | Community Signal |
|---|----------------|-----------------|
| [#27302](https://github.com/anthropics/claude-code/issues/27302) | **Support multiple Connector accounts** – same connector, different accounts on claude.ai/code. Affects teams sharing one machine. | 177 comments, 236 👍 |
| [#18435](https://github.com/anthropics/claude-code/issues/18435) | **Multiple Claude accounts in Desktop app** – profile switching. Directly affects power users with multiple workspaces. | 100 comments, 527 👍 |
| [#22685](https://github.com/anthropics/claude-code/issues/22685) | **Login loop “Invalid authorization”** on macOS – app becomes completely unusable. | 25 comments, 20 👍 |
| [#47185](https://github.com/anthropics/claude-code/issues/47185) | **Linear MCP OAuth fails “Invalid client”** – metadata-URL clientId mismatch, no refresh token ever obtained. | 16 comments, 11 👍 |
| [#54443](https://github.com/anthropics/claude-code/issues/54443) | **OAuth refresh returns 400** – early 401 triggers refresh, which fails, forcing repeated `/login`. | 9 comments, 3 👍 |
| [#49270](https://github.com/anthropics/claude-code/issues/49270) | **Nerd Font Unicode not rendered** – blank spaces in statusline, chat, file views. Reopen of stale #9907. | 8 comments, 5 👍 |
| [#58996](https://github.com/anthropics/claude-code/issues/58996) | **`/compact` hangs at 95% forever** – core compaction never completes. | 5 comments |
| [#59240](https://github.com/anthropics/claude-code/issues/59240) | **Inbound channel notifications dropped (regression 2.1.119–2.1.142)** – `<channel>` blocks never injected. | 4 comments, 1 👍 |
| [#39889](https://github.com/anthropics/claude-code/issues/39889) | **Dispatch-spawned sessions ignore user model & permission-mode settings** – no way to change from mobile. | 7 comments, 12 👍 |
| [#44180](https://github.com/anthropics/claude-code/issues/44180) | **Linux sandbox: add `allowUnixSockets` equivalent** – seccomp BPF blocks all `AF_UNIX` unconditionally. | 3 comments, 6 👍 |

## Key PR Progress
Five pull requests were updated in the last 24 hours:

- **[#61584](https://github.com/anthropics/claude-code/pull/61584)** – *Use workload identity federation for Claude auth in CI workflows*. Switches from static `ANTHROPIC_API_KEY` to OIDC token exchange for short-lived credentials. (Closed)
- **[#61478](https://github.com/anthropics/claude-code/pull/61478)** – *Claude/marketing management system t97e l*. No description; appears non-functional. (Open)
- **[#58673](https://github.com/anthropics/claude-code/pull/58673)** – Title `s`, no description. Likely spam. (Open)
- **[#60813](https://github.com/anthropics/claude-code/pull/60813)** – *Bug: Excessive token consumption on initial prompt*. Claims fix for #56136; includes visual design claims. (Open)
- **[#61373](https://github.com/anthropics/claude-code/pull/61373)** – *Fix security-guidance false positives*. Adds `exclude_substrings` to avoid matching `ast.literal_eval(` etc. (Open)

## Feature Request Clusters
- **Multiple Account / Profile Switching**
  Users consistently ask to manage several Claude accounts (personal, work, team) within a single device – both on the web (`#27302`) and in the Desktop app (`#18435`). These two issues together have collected 404 comments and 763 👍.
- **Sandbox & Permissions Granularity**
  Linux users want `allowUnixSockets` equivalent (`#44180`). Separately, `#56058` asks for user-selectable permission scopes in command prompts rather than monolithic approve/reject.

## Developer Pain Points
- **MCP Channel Notifications Silent Failure** – By far the most common bug this period: at least 12 distinct reports (Telegram, Discord, Slack, generic) all describe `notifications/claude/channel` being received by the runtime but never surfaced as `<channel>` blocks. Duplicates are being closed without resolution; the open regression `#59240` is the only active tracker.
- **Authentication Instability** – Multiple OAuth flows fail (Linear, Indeed) or enter login loops (`#22685`, `#54443`). Users report being forced to re-authenticate mid-session.
- **UI/UX Regressions** – Nerd Font rendering remains broken (`#49270`), `/compact` hangs (`#58996`), and Dispatch sessions ignore user-configured settings (`#39889`).
- **Headless / CI Invisibility** – `-p` mode sessions are written to disk but not indexed, making them invisible to `--resume` (`#61058`).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-23

## Today’s Update Brief

The repository saw moderate activity on May 23, with three Rust CLI alpha releases published, 50 issues and 50 pull requests updated in the past 24 hours. A major token consumption issue (#14593) continues to dominate community discussion with 590 comments, while the team pushed several infrastructure-focused PRs around telemetry, prompt hooks, and packaging fixes. Multiple Windows and macOS startup/update regressions were reported after recent app updates.

## Releases

Three **rust-v0.134.0-alpha** releases were published in the past 24 hours:

- [rust-v0.134.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.134.0-alpha.1)
- [rust-v0.134.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.134.0-alpha.2)
- [rust-v0.134.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.134.0-alpha.3)

No release notes beyond version bumps were provided. These appear to be iterative CLI alpha builds; notable PRs merged into this release stream include `package: include zsh fork in Codex package` (#23756) and `fix(remote-control): cap reconnect backoff` (#24164).

## Hot Issues

1. **[#14593 – Burning tokens very fast](https://github.com/openai/codex/issues/14593)** (590 comments, 260 👍)
   - **Workflow:** IDE extension usage for Business subscribers on VS Code (Windows).
   - **Impact:** Users report token consumption running at extreme rates, suggesting potential metering bugs or inefficient context handling. The issue has been open since March and remains unclosed, with heavy community engagement suggesting no resolution yet.

2. **[#23794 – Codex Desktop no longer shows visible context/token usage indicator](https://github.com/openai/codex/issues/23794)** (93 comments, 98 👍)
   - **Workflow:** Codex Desktop on Windows, ChatGPT Business subscription.
   - **Impact:** A regression in the latest desktop app update (26.519.2081.0) removed the context/token usage indicator, stripping users of visibility into their consumption.

3. **[#20161 – Phone number verification doesn’t work](https://github.com/openai/codex/issues/20161)** (145 comments, 97 👍)
   - **Workflow:** SSO login prompts mandatory phone verification that fails.
   - **Impact:** Users who never added a phone number are blocked from accessing Codex on secondary devices. Closed today, suggesting a fix may have shipped.

4. **[#18993 – Unable to open past conversation history in VS Code extension](https://github.com/openai/codex/issues/18993)** (26 comments, 47 👍)
   - **Workflow:** VS Code extension 1.117.0, Plus subscription.
   - **Impact:** Users cannot access any past conversations, likely a session-storage regression.

5. **[#12862 – CLI: add --worktree and --tmux flags for one-command isolated sessions](https://github.com/openai/codex/issues/12862)** (14 comments, 61 👍)
   - **Workflow:** TUI/CLI power users scripting isolated development environments.
   - **Impact:** Strong community demand (61 👍) for first-class git worktree and tmux integration, suggesting many users already hack custom workflows.

6. **[#10823 – Unable to compact context in a VERY long running session](https://github.com/openai/codex/issues/10823)** (20 comments, 4 👍)
   - **Workflow:** Long-running resumed sessions hitting compaction failures.
   - **Impact:** Sessions that survive multiple resumes eventually fail to compact context, with errors citing high demand.

7. **[#24006 – Codex cannot access its local database on macOS after update](https://github.com/openai/codex/issues/24006)** (4 comments, 1 👍)
   - **Workflow:** macOS (Apple Silicon) app update breaks local database access, preventing app launch.
   - **Impact:** Users are locked out of the application entirely post-update.

8. **[#24172 – Memories are forgotten](https://github.com/openai/codex/issues/24172)** (2 comments, 0 👍)
   - **Workflow:** Codex Desktop 26.519.31651 on Windows 11, Pro subscription.
   - **Impact:** Created memories (e.g., remote machine login details) are lost hours later, undermining the memory persistence feature.

9. **[#24031 – Codex on GPT-5.5: when will it support 1M context?](https://github.com/openai/codex/issues/24031)** (3 comments, 6 👍)
   - **Workflow:** App and CLI users of GPT-5.5.
   - **Impact:** A promised 1M context window for GPT-5.5 has not materialized; the original tracking issue was closed without explanation, generating user frustration.

10. **[#6849 – OAuth Login Fails Behind Corporate Proxy with Custom CA Certificates](https://github.com/openai/codex/issues/6849)** (4 comments, 5 👍)
    - **Workflow:** Enterprise CLI users behind corporate proxies.
    - **Impact:** Long-standing authentication failure (since Nov 2025) for Business users in enterprise environments with custom certificate authorities.

## Key PR Progress

1. **[#24159 – code-mode: merge stored values by key](https://github.com/openai/codex/pull/24159) (CLOSED)**
   - Fixes a data race in code-mode where concurrent cells could overwrite each other’s stored values. Now merges per-key instead of replacing the complete map.

2. **[#24126 – feat(next-prompt): add suggestion engine (1 of 3)](https://github.com/openai/codex/pull/24126) (OPEN)**
   - First PR in a series adding a core suggestion engine for “next-prompt” functionality. Kept separate from app-server API and TUI wiring for independent review.

3. **[#24154 – Add experimental turn additional context](https://github.com/openai/codex/pull/24154) (OPEN)**
   - Adds `additionalContext` support to `turn/start` and `turn/steer`, allowing clients to inject ephemeral external context (e.g., browser/automation state) without polluting the user prompt.

4. **[#24171 – package: add x64 macOS codex-zsh artifact](https://github.com/openai/codex/pull/24171) (CLOSED)**
   - Fixes a packaging gap where Intel macOS releases were missing the bundled zsh fork, causing failures on x86_64 Macs.

5. **[#24174 – Add prompt hooks](https://github.com/openai/codex/pull/24174) (OPEN)**
   - Implements Claude-style prompt-based hooks where review criteria are expressed as model-evaluated prompts, defaulting to the active thread model.

6. **[#23768 – runtime: prepend zsh fork bin dir to PATH](https://github.com/openai/codex/pull/23768) (OPEN)**
   - Ensures `#!/usr/bin/env zsh` resolves to the packaged zsh fork instead of the system zsh, following the inclusion of zsh in the Codex package (#23756).

7. **[#24164 – fix(remote-control): cap reconnect backoff](https://github.com/openai/codex/pull/24164) (CLOSED)**
   - Caps websocket reconnect delay at a fixed ceiling to prevent indefinite backoff after extended failure streaks.

8. **[#23757 – Default function tools into tool hooks](https://github.com/openai/codex/pull/23757) (CLOSED)**
   - Automatically wires `PreToolUse`, `PostToolUse`, and `updatedInput` hooks for all local function tools, preventing coverage gaps when new function tools are added.

9. **[#24169 – reject empty base64 image inputs](https://github.com/openai/codex/pull/24169) (OPEN)**
   - Handles Responses API `invalid_value` errors for empty base64 images by converting to model-visible text, and maps the error into the existing `InvalidImageRequest` recovery path.

10. **[#24138 – Harden Git workspace integration paths](https://github.com/openai/codex/pull/24138) (OPEN)**
    - Applies consistent Git configuration isolation across workspace state collection, diff paths, and TUI diff collection. Stops auto-approving `git status` and `git diff` commands.

## Feature Request Clusters

- **Context Management Improvements:** Multiple issues request better visibility and control over token/context usage (#23794), the ability to compact long sessions (#10823), and support for GPT-5.5’s 1M context window (#24031).
- **CLI/TUI Enhancements for Power Users:** Strong demand for first-class git worktree and tmux integration (#12862, 61 👍), and explicit workspace directory control for `spawn_agent` (#23095).
- **Subagent/Workspace Control:** Requests for setting explicit workspace or worktree directories when spawning subagents, indicating growing multi-agent workflow adoption.

## Developer Pain Points

- **Token Consumption Crisis:** Issue #14593 (590 comments, 260 👍) is the most active item by far—Business users report unsustainable token burn rates, suggesting a systemic billing or context accounting issue.
- **Post-Update Breakage on Windows and macOS:** Multiple reports of apps becoming non-functional after updates, including local database access errors (#24006), missing DLLs (#23972), and silent launch failures (#22423).
- **Missing Feature Communication:** The abrupt closure of the GPT-5.5 1M context tracking issue (#24031) without explanation has frustrated users who were promised the capability.
- **Enterprise Authentication Gaps:** Long-standing OAuth failures behind corporate proxies with custom CA certificates (#6849, since Nov 2025) remain unaddressed, blocking enterprise adoption.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-23

## 1. Today's Update Brief

Activity remains high with 50 open issues and 50 pull requests updated in the last 24 hours. No new releases or version tags were published today. The community dialog focuses on agent reliability (hangs, subagent misreporting, shell command stalls), memory system quality improvements, and several incremental PRs addressing PTY leaks, MCP client robustness, and approval-mode UX enhancements.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues (10 noteworthy)

1. **Generalist agent hangs indefinitely**
   `#21409` — User reports `gemini-cli` hangs forever when deferring to the generalist agent; simple folder creation never completes. Workaround: instruct model not to use sub-agents. High community engagement (8 👍).
   [Issue](https://github.com/google-gemini/gemini-cli/issues/21409)

2. **Subagent success reported after MAX_TURNS**
   `#22323` — `codebase_investigator` subagent returns `status: "success"` and `"GOAL"` even when it hit its turn limit before doing any analysis. Misleading termination reason hides real interruption.
   [Issue](https://github.com/google-gemini/gemini-cli/issues/22323)

3. **Shell command execution stuck on “Waiting input”**
   `#25166` — After simple CLI commands finish, the shell stays marked as active and awaiting input. User reports repeated occurrence with trivial commands.
   [Issue](https://github.com/google-gemini/gemini-cli/issues/25166)

4. **Browser subagent fails under Wayland**
   `#21983` — Browser agent errors out on Wayland sessions; termination reason shows `GOAL` but actual failure.
   [Issue](https://github.com/google-gemini/gemini-cli/issues/21983)

5. **Gemini does not use skills/sub-agents autonomously**
   `#21968` — User observes custom skills and sub-agents are rarely invoked unless explicitly prompted, even for related tasks. Anecdotal but raised by multiple users.
   [Issue](https://github.com/google-gemini/gemini-cli/issues/21968)

6. **400 error with >128 tools**
   `#24246` — When more than 128 tools are available, Gemini CLI returns a 400 error. Expectation: smarter tool scoping rather than hard limit.
   [Issue](https://github.com/google-gemini/gemini-cli/issues/24246)

7. **Auto Memory: retries low-signal sessions indefinitely**
   `#26522` — Auto Memory only marks sessions as processed after successful `read_file`. Low-signal sessions ignored by the extraction agent remain unprocessed and reappear repeatedly.
   [Issue](https://github.com/google-gemini/gemini-cli/issues/26522)

8. **Auto Memory: silent skip of invalid inbox patches**
   `#26523` — Malformed patches, patches without hunks, or those escaping allowed root are silently skipped. Aggregate dismiss also skips valid patches. Pending summary reads all `.patch` files indiscriminately.
   [Issue](https://github.com/google-gemini/gemini-cli/issues/26523)

9. **Auto Memory: deterministic redaction and reduced logging**
   `#26525` — Secrets are redacted after content is already in model context; logging also captures existing skill transcripts. Need to move redaction earlier and reduce log exposure.
   [Issue](https://github.com/google-gemini/gemini-cli/issues/26525)

10. **Agent should stop/discourage destructive behavior**
    `#22672` — Model occasionally uses risky commands (`git reset`, `--force`) when safer alternatives exist. Request for built-in safeguards around destructive operations.
    [Issue](https://github.com/google-gemini/gemini-cli/issues/22672)

---

## 4. Key PR Progress (10 important)

1. **Non-interactive env injection for Full Access mode**
   `#27157` — Injects `NONINTERACTIVE=1`, `CI=true`, etc., so `npm`, `apt`, `git` auto-confirm instead of hanging on prompts. Prevents shell command stalls in `--full-access`.
   [PR](https://github.com/google-gemini/gemini-cli/pull/27157)

2. **Shift+Tab cycle includes Full Access with auto mode label**
   `#27158` — Adds `Full Access` (`--yolo`) to the in-session approval cycle and renders `⏵⏵ auto mode on` indicator in footer. Closes UX gap.
   [PR](https://github.com/google-gemini/gemini-cli/pull/27158)

3. **MCP `readOnlyHint` trust opt-in for Plan Mode**
   `#27156` — New setting `general.plan.trustReadOnlyHint` (default `false`) allows MCP tools marked `readOnlyHint = true` to run silently in Plan Mode.
   [PR](https://github.com/google-gemini/gemini-cli/pull/27156)

4. **Fix PTY memory leak (active entries not deleted)**
   `#27154` — `activePtys.delete(ptyPid)` was wrapped inside a Promise `.then()` that never resolved if background log stream had pending operations. Now deletion is synchronous.
   [PR](https://github.com/google-gemini/gemini-cli/pull/27154)

5. **Windows paths under WSL translated correctly**
   `#27025` — Drive-letter paths (e.g., `C:\`) are mapped to `/mnt/c/` when running under WSL, preserving existing behavior for native Windows and non-WSL environments.
   [PR](https://github.com/google-gemini/gemini-cli/pull/27025)

6. **MCP tool wipe on network timeout fixed (atomic update)**
   `#27383` — `refreshTools` now retains existing tools when `discoverTools` fails due to transient network drops, preventing “tool not found” errors mid-session.
   [PR](https://github.com/google-gemini/gemini-cli/pull/27383)

7. **CJK character stripping from model thought output**
   `#27349` — Filters out extraneous CJK characters that appear in thought text even when user locale is English. Prevents non-English text leaking into responses.
   [PR](https://github.com/google-gemini/gemini-cli/pull/27349)

8. **`update_topic` forced sequential execution**
   `#27357` — Forces `update_topic` to always execute in order, ignoring `wait_for_previous` argument, so topic updates display chronologically.
   [PR](https://github.com/google-gemini/gemini-cli/pull/27357)

9. **Wrap Ajv validation in try/catch to prevent crash**
   `#27348` — Prevents `Cannot read properties of undefined` crash when LLM sends malformed parameter shapes to `write_file`/`replace` tools.
   [PR](https://github.com/google-gemini/gemini-cli/pull/27348)

10. **Fix session resume crash (EBADF due to stale PTY fd)**
    `#27371` — Ignores `EBADF` errors when resizing PTY during `gemini --resume`, preventing crash on stale file descriptors after session restart.
    [PR](https://github.com/google-gemini/gemini-cli/issues/27371)

---

## 5. Feature Request Clusters

- **AST-aware tools for code understanding** — Three related issues (`#22745`, `#22746`, `#22747`) explore using AST-based file reading, search, and codebase mapping to improve tool call precision and reduce token noise. Users and maintainers show interest in AST grep and method-bound reads.

- **Auto Memory reliability and safety** — Three issues (`#26522`, `#26523`, `#26525`) target indefinite retries, silent patch skips, and pre-context redaction. All authored by same maintainer, suggesting focused internal cleanup.

- **Agent self-awareness and documentation** — `#21432` requests the CLI know its own flags, hotkeys, and self-execution capabilities to act as its own guide.

- **Remote agents with advanced auth and background ops** — Epic `#20303` (Sprint 2) continues with task-level auth and 1P agent support.

- **Server-driven model management** — Epic `#20878` proposes fetching available models from a `LoadCodeAssist` endpoint to centralize routing.

- **Ability to background local subagents** — `#22741` requests `Ctrl+B` support for sending local agents to background (2 👍).

---

## 6. Developer Pain Points

- **Agent hanging / subagent misreporting** — Multiple reports (`#21409`, `#22323`, `#25166`) of agents stalling indefinitely or reporting success after hitting turn limits. Workarounds exist (disable sub-agents) but degrade experience.

- **Browser agent instability** — Wayland failures (`#21983`) and ignored `settings.json` overrides (`#22267`) frustrate users relying on browser automation.

- **Shell execution UX** — Commands stuck on “Waiting input” (`#25166`) and random temp script creation (`#23571`) clutter workspaces and break workflows.

- **Memory system bugs** — Auto Memory silently skips patches (`#26523`), retries low-signal sessions forever (`#26522`), and logs secrets before redaction (`#26525`). These are actively being patched.

- **Destructive behavior risk** — `#22672` highlights lack of guardrails around dangerous git/database commands; users want built-in safety prompts.

- **Tool overload (400 errors)** — `#24246` shows CLI breaks when >128 tools are registered; users expect better scoping instead of a hard limit.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest – 2026-05-23

**Today's Update Brief**
Two patch releases (v1.0.52-2 and v1.0.52-4) shipped with UI improvements, a context-window tier enforcement fix, and a scrollbar for the conversation view. Community activity remains high: 39 open/closed issues were updated, with several long-standing feature requests and bugs still dominating discussion. One spam pull request was submitted and is pending review.

---

## Releases

- **[v1.0.52-4](https://github.com/github/copilot-cli/releases/tag/v1.0.52-4)**
  **Added** – Vertical scrollbar with mouse drag support in the main conversation view.
  **Fixed** – Switching to Autopilot mode no longer triggers unexpected permission prompts for tool, path, or URL access; `copilot --continue` from a saved directory now correctly refreshes the saved branch and Git state.

- **[v1.0.52-2](https://github.com/github/copilot-cli/releases/tag/v1.0.52-2)**
  **Added** – Context window tier selection (~200K vs 1M tokens) is now enforced end-to-end (compaction, truncation, token display).
  **Improved** – Reasoning tokens now appear as a parenthetical alongside the output token count in the token usage summary.
  **Fixed** – (no fixes listed).

---

## Hot Issues (10 noteworthy)

1. **#892 – Add sandbox mode to restrict file access to a working directory**
   [Open] [Feature Request] | 👍 44, Comments 9
   User asks for a sandbox that constrains the code agent’s filesystem permissions to a workspace root. High community demand.
   [https://github.com/github/copilot-cli/issues/892](https://github.com/github/copilot-cli/issues/892)

2. **#700 – Provide a way to list all currently supported models**
   [Open] [Feature Request] | 👍 3, Comments 13
   Proposes `copilot --list-models` to show available models and their multiplier info. Long-running discussion since Dec 2025.
   [https://github.com/github/copilot-cli/issues/700](https://github.com/github/copilot-cli/issues/700)

3. **#1665 – Support per-project/repository plugins (instead of per-user)**
   [Open] [Feature Request] | 👍 14, Comments 7
   Users want plugin scope tied to a project/repo rather than globally installed per user. Affects team workflows.
   [https://github.com/github/copilot-cli/issues/1665](https://github.com/github/copilot-cli/issues/1665)

4. **#1999 – Cannot enter `@` on German keyboard (Alt-Gr + q)**
   [Open] [Bug] | 👍 1, Comments 6
   Keyboard input regression makes CLI unusable for German-layout users. `@` and `#` are swallowed.
   [https://github.com/github/copilot-cli/issues/1999](https://github.com/github/copilot-cli/issues/1999)

5. **#2216 – Text selection highlight has very low contrast on dark terminals**
   [Open] [Bug] | 👍 1, Comments 5
   Dark purple selection background is nearly invisible on dark backgrounds, impeding readability.
   [https://github.com/github/copilot-cli/issues/2216](https://github.com/github/copilot-cli/issues/2216)

6. **#3439 – TUI rendering lag inside tmux on mintty/Cygwin (regression in 1.0.49)**
   [Open] [Bug] | Comments 4
   Version 1.0.49 introduced severe lag/spinner stutter when used inside tmux on Cygwin. 1.0.43/1.0.48 were fine.
   [https://github.com/github/copilot-cli/issues/3439](https://github.com/github/copilot-cli/issues/3439)

7. **#3304 – ERR_HTTP2_INVALID_SESSION causes repeated transient retries**
   [Open] [Bug] | Comments 4
   Frequent session destruction mid-response leads to failed API calls and degraded experience.
   [https://github.com/github/copilot-cli/issues/3304](https://github.com/github/copilot-cli/issues/3304)

8. **#3442 – v1.0.51 blocks remote sessions for non-admin users**
   [Open] [Bug] | 👍 9, Comments 2
   After updating to v1.0.51, many users see “Remote sessions are not enabled. Contact your organization administrator.” Likely a policy misconfiguration or regression.
   [https://github.com/github/copilot-cli/issues/3442](https://github.com/github/copilot-cli/issues/3442)

9. **#2012 – JSON parse failure on /resume due to raw U+2028/U+2029 in events.jsonl**
   [Open] [Bug] | 👍 2, Comments 2
   Session resume breaks when user messages contain Unicode line/paragraph separators. Previously claimed fixed but still reported.
   [https://github.com/github/copilot-cli/issues/2012](https://github.com/github/copilot-cli/issues/2012)

10. **#3355 – Allow configurable context window for Claude Opus 4.6 (currently capped at 200K vs model’s 1M)**
    [Open] [Feature Request] | 👍 2, Comments 1
    Users want the ability to use the full 1M token context of the model instead of the forced 200K limit.
    [https://github.com/github/copilot-cli/issues/3355](https://github.com/github/copilot-cli/issues/3355)

---

## Key PR Progress

Only one pull request was updated in the last 24 hours:

- **#3473 – “Update project name in READMEGODADDY-CPU IMEI357649321337001”**
  [Open] by @CPU-UMS9230E-T7250 | Comments 0
  Spam (promotes a GCash/Temu referral link). No maintainer response yet. Likely to be closed.
  [https://github.com/github/copilot-cli/pull/3473](https://github.com/github/copilot-cli/pull/3473)

No meaningful PRs were otherwise active today.

---

## Feature Request Clusters

- **Sandbox / filesystem isolation** – #892 (sandbox mode), #2243 (disable worktrees by default). Multiple users want Copilot CLI to restrict file access to a designated workspace, especially to avoid accidental mass edits or permission leaks.
- **Per-project plugin scope** – #1665, #3000 (config-dir bug). Users need plugins to be installable per repository rather than globally loaded, enabling team-specific toolchains.
- **Model and context management** – #700 (list models), #3355 (configurable context window), #3474 (track dollar spending per session). Growing demand for transparency in model availability, token usage, and cost tracking as pricing moves to API-based.
- **Input and terminal improvements** – #1999 (German keyboard), #2216 (selection contrast), #3475 (iTerm2 support), #3470 (keyboard scroll-back). Keyboard layout and terminal compatibility issues persist across platforms.

---

## Developer Pain Points

- **Session corruption and resume failures** – Multiple open issues (e.g., #2012, #2209, #2490, #2607) describe session files corrupted by Unicode line separators (U+2028/U+2029), causing `JSON.parse` failures on `/resume`. Despite repeated fixes, the problem reappears.
- **Unpredictable permission and sandbox violations** – Issues #892 and #2243 highlight that the code agent can write outside expected directories, and worktrees can create huge amounts of unrecoverable code. Users demand opt-in sandboxing.
- **Plugin and configuration isolation bugs** – #3000 shows that `--config-dir` does not fully isolate plugin loading, leading to confusion in multi-project setups. #1665 asks for project-scoped plugins as a solution.
- **Network and authentication reliability** – #3304 (HTTP2 session destruction), #3442 (remote sessions blocked after v1.0.51), #3459 (auto-update rate limits in shared NAT), and #3462 (OAuth port conflict) all point to ongoing networking stability issues.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-23

## Today’s Update Brief
Today’s activity is moderate, with no new releases but fresh issue and PR updates concentrated around bug fixes and UI enhancements. Key themes include MCP connection reliability, misleading error messages, and deeper community interest in remote session handoff and CLI-to-Web workspace navigation improvements.

## Releases
None.

## Hot Issues

1. **#2269 [Feature Request] Remote Control / Multi-Device Session Handoff**
   *Author: @lucianalima777 | Updated: 2026-05-22 | Comments: 4*
   Requests seamless session transfer between devices (laptop, web, mobile). Workflow impact: high for multi-environment users. Community shows moderate interest but a clear need.
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2269)

2. **#2142 [bug] Agent loops on same shell command; output truncated**
   *Author: @yangliping | Updated: 2026-05-22 | Comments: 1*
   Running v1.40.0 on Darwin arm64. Agent repeatedly executes a single shell command and truncates output. Workflow severely disrupted for automation-heavy users.
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2142)

3. **#2346 [bug] kimi code web issue - input textbox queued text disappeared**
   *Author: @yeal911 | Created: 2026-05-22 | Comments: 0*
   User on Windows 11 reports that queued input text randomly disappears in the web UI. Affects typing reliability and user trust in web-based sessions.
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2346)

4. **#2345 [enhancement] kimi code web optimization**
   *Author: @yeal911 | Created: 2026-05-22 | Comments: 0*
   Requests full file/folder path display in GUI processing steps instead of “…” truncation, especially for deep directories. Reduces debugging visibility.
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2345)

5. **#2343 [bug] MCP 连接超时导致整个 CLI 不可用 / MCP connection timeout makes CLI unavailable**
   *Author: @llyjj5464 | Created: 2026-05-22 | Comments: 0*
   Critical issue: when an MCP server (e.g., context7) times out, the entire CLI becomes unresponsive. Running v1.44.0 on Darwin arm64, using k2.6 model. Workflow-blocking for MCP-dependent users.
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2343)

## Key PR Progress

1. **#2215 [OPEN] feat(webui): editable path bar with autocomplete in Workspace files sidebar**
   *Author: @morphishk | Updated: 2026-05-22*
   Adds an editable path bar with smart autocomplete, enabling direct typing to jump to directories. Improves deep navigation efficiency significantly.
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2215)

2. **#2344 [OPEN] feat: 为 KimiCLI 新增 RTK 工具的默认 Hook**
   *Author: @BigOrangeQWQ | Created: 2026-05-22*
   Adds default hooks for RTK tools. Likely for Redux Toolkit integration, though not yet confirmed by maintainers.
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2344)

3. **#1707 [OPEN] refactor: rewrite from Python to Bun + TypeScript + React Ink**
   *Author: @Yuandiaodiaodiao | Updated: 2026-05-22*
   Large-scale refactor effort: 166 TS/TSX files (~32k LOC), 37 test files, 211 function entry points. Proposal argues Python is a failed choice for CLI agent. Still open with no maintainer verdict.
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/1707)

4. **#2342 [OPEN] fix(shell): Fix misleading “Quota exceeded” prefix shown on every 403 error**
   *Author: @liruifengv | Created: 2026-05-22*
   Fixes a UX bug where all 403 errors are prefixed with “Quota exceeded,” which may confuse users about the real cause of rejection.
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2342)

## Feature Request Clusters

- **Cross-Device Session Handoff** (Issue #2269): Multiple users request starting a CLI session on one device and resuming on another. Implies demand for state sync and cloud-mediated session persistence.
- **File Navigation in Web UI** (Issue #2345, PR #2215): Users want full path visibility in processing logs and an editable path bar with autocomplete. Cluster points to frustration with deep directory workflows.
- **Workflow Transparency** (Issue #2345): Requests more detailed, untruncated processing step logs in the GUI. Suggests users want better debugging insight during long-running agent tasks.
- **Long-Term Code Maintainability** (PR #1707): The rewrite-to-TypeScript proposal, though not merged, reflects a community-driven desire for a more modern, sandboxable codebase.

## Developer Pain Points

- **MCP Connection Timeout Blocks Entire CLI** (Issue #2343): One MCP server failure causes complete CLI unavailability. No graceful degradation or timeout isolation exists.
- **Misleading Error Messages** (PR #2342): “Quota exceeded” displayed on all 403 errors misleads users about the root cause (e.g., auth, permissions, rate limits).
- **Agent Stuck on Shell Loops** (Issue #2142): Agent repeatedly executes the same shell command, with output truncated. Blocks automation and wastes computation.
- **Web UI Text Loss** (Issue #2346): Queued input disappears randomly in web mode, causing potential loss of work and reduced trust in the web interface.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-23

## Today’s Update Brief
Two patch releases landed today (v1.15.9 and v1.15.10), with v1.15.9 introducing a redesigned diff viewer and several bugfixes, while v1.15.10 restores legacy desktop flows for project opening and session startup. However, the v1.15.9 release also triggered a wave of regressions reported across the Desktop app—agent selector disappearance, broken file tree, and missing panel buttons—making this a day of both progress and friction. Community issue activity remains high (50 items updated in 24 h), with a notable cluster of reports around provider compatibility and error handling.

## Releases

### v1.15.10 — Desktop
- **Bugfix**: Restored legacy production desktop flows for opening projects and starting sessions.

### v1.15.9 — Core (with Desktop regressions)
- **Improvement**: Redesigned diff viewer with a file tree and refreshed layout.
- **Bugfix**: Return to previous screen when closing the diff viewer.
- **Bugfix**: Clearer errors when a default model is invalid or unavailable.
- **Bugfix**: Surface missing PTY session errors instead of falling silently.

## Hot Issues (10 noteworthy)

1. **#16100 – Numpad keys not working inside VS Code 1.110 integrated terminal**
   [Link](https://github.com/anomalyco/opencode/issues/16100)
   *27 comments, 18 👍*
   Numpad keys (0-9, Enter, operators) are completely ignored in the TUI when running inside VS Code’s integrated terminal, though they work in the shell outside OpenCode. Affects users who rely on keyboard-driven workflows. Community suspects a terminal emulation mismatch.

2. **#28908 – Plan/Build agent selector disappeared after v1.15.9 update**
   [Link](https://github.com/anomalyco/opencode/issues/28908)
   *12 comments, 3 👍*
   After updating Desktop to v1.15.9, the agent selector next to the model dropdown vanished. The UI repeatedly shows a “Select an agent and model” toast, blocking interaction. This appears to be a Desktop-specific regression tied to the v1.15.9 release.

3. **#28732 – Gemini 3.5 Flash on Vertex warns about missing `thought_signature`**
   [Link](https://github.com/anomalyco/opencode/issues/28732)
   *12 comments, 1 👍*
   When using `gemini-3.5-flash` via the `google-vertex` provider, Vertex returns a warning after more than one tool call: *“Function call is missing a thought_signature.”* The community reports this may break tool-using workflows after the first turn.

4. **#27530 – `Error: 4 of 5 requests failed: config.providers: Unexpected server error`**
   [Link](https://github.com/anomalyco/opencode/issues/27530)
   *10 comments, 8 👍*
   Launching OpenCode yields multiple server errors from provider list and agent endpoints. Users are unable to start any session until the server logs are inspected. High upvote count suggests a common pain point.

5. **#8836 – Session list shows all sessions, not scoped to current directory**
   [Link](https://github.com/anomalyco/opencode/issues/8836)
   *10 comments, 8 👍*
   The `/sessions` command lists every session globally instead of only those from the current working directory. Long-standing issue (since v1.1.23) with persistent demand.

6. **#18131 – Write tool called with invalid parameters**
   [Link](https://github.com/anomalyco/opencode/issues/18131)
   *9 comments, 2 👍*
   Using Qwen 3.5 35B-A3B via LM Studio, the Write tool receives invalid parameters mid-conversation, halting progress. Likely a LLM output formatting issue.

7. **#28905 – Brew tries to install nonexistent v1.15.8**
   [Link](https://github.com/anomalyco/opencode/issues/28905)
   *6 comments, 4 👍*
   Homebrew formula points to a missing `1.15.8` tarball, preventing upgrades. Closed after maintainer correction, but caused confusion for macOS users.

8. **#28912 – Agent selection bug in Desktop v1.15.9 Windows 11**
   [Link](https://github.com/anomalyco/opencode/issues/28912)
   *5 comments, 2 👍*
   Agent is selected in the prompt chat but does not proceed. A screenshot confirms the UI state is stuck. Likely related to the same agent selector regression in #28908.

9. **#28918 – File tree not showing after v1.15.9**
   [Link](https://github.com/anomalyco/opencode/issues/28918)
   *5 comments*
   The file tree component remains blank after the update. Users report the tree from v1.15.8 is still present, indicating the redesign may not have rendered correctly.

10. **#17648 – Session processor retries indefinitely with unbounded exponential backoff**
    [Link](https://github.com/anomalyco/opencode/issues/17648)
    *4 comments, 2 👍*
    When the upstream LLM returns transient errors, the session processor enters an infinite retry loop with no max retries or circuit breaker. This can exhaust API quotas and block the UI.

## Key PR Progress (10 important)

1. **#28914 – feat(project): resolve remote-backed project identity**
   [Link](https://github.com/anomalyco/opencode/pull/28914)
   Introduces a core Git service and ProjectV2 resolution that prefers normalized origin remote IDs, falls back to root commits, and caches previous IDs. Bridges old project service to new project identity for multi-remote support.

2. **#28919 – fix(app): restore desktop prod legacy flows** *(CLOSED)*
   [Link](https://github.com/anomalyco/opencode/pull/28919)
   Fixes Desktop prod regressions introduced while landing Desktop v2. The legacy Home and project opening flows are restored, while Desktop v2 remains gated to non-prod. This PR directly addresses the regressions reported in issues like #28908 and #28916.

3. **#28788 – feat(app): improve desktop v2 startup and controls**
   [Link](https://github.com/anomalyco/opencode/pull/28788)
   Adds Desktop v2 refinements from Figma designs: Home/composer/titlebar/status control improvements, branch-aware worktree creation, and non-blocking MCP startup serialization. Builds the v2 experience without affecting current prod.

4. **#28247 – fix(desktop): avoid white flash when restoring window**
   [Link](https://github.com/anomalyco/opencode/pull/28247)
   Sets a native BrowserWindow background before renderer content paints and keeps Electron windows in sync with the active theme, eliminating the white flash on window restore.

5. **#28422 – fix(app): stabilize virtual session timeline interactions**
   [Link](https://github.com/anomalyco/opencode/pull/28422)
   Preserves manual tool expand/collapse state during streaming and adds a Solid patch for `virtua` to enable synchronous measured item remeasurement. Improves UX in long sessions with dynamic content.

6. **#28743 – feat(server): add wildcard CORS origin support**
   [Link](https://github.com/anomalyco/opencode/pull/28743)
   Adds `*` origin support to `isAllowedCorsOrigin` in the server’s CORS config, enabling easier self‑hosted or development setups.

7. **#28921 – fix(acp): include shell command and file path in permission prompts**
   [Link](https://github.com/anomalyco/opencode/pull/28921)
   Improves permission prompt clarity by showing the exact shell command or file path being executed. Closes #4240.

8. **#23407 – feat: desktop WSL onboarding + happy experience** *(beta)*
   [Link](https://github.com/anomalyco/opencode/pull/23407)
   Adds WSL onboarding flow for Desktop users on Windows, covering detection, configuration, and first-run guidance. Still tagged `beta`.

9. **#16513 – feat(console): add go usage endpoint**
   [Link](https://github.com/anomalyco/opencode/pull/16513)
   Adds a new API endpoint `/zen/go/v1/usage` that returns OpenCode Go usage data matching the Zen dashboard. Closes #16017.

10. **#13224 – feat(docs): add copy page markdown action to docs title**
    [Link](https://github.com/anomalyco/opencode/pull/13224)
    Adds a “Copy page as Markdown” button to documentation pages, enabling easy sharing and offline reference. Closes #6453.

## Feature Request Clusters

- **Advanced TUI / Desktop UI extensibility**
  Requests like #28902 (plugin-registered TUI surfaces – sidebar, status bar, panel) and #14511 (keyboard shortcut to toggle expanded tool output) show a desire for deeper UI customization without editing core code. A related request #28891 (run commands after every chat with changed files) also touches on post-processing automation.

- **Integrated browser workspace** (#26772)
  Users request a built-in browser within OpenCode Desktop for inspecting and interacting with web applications during development, similar to dev tools or browser-based agents.

- **Session and project management improvements**
  #8836 (scope session list to current directory) and #28891 (post-chat hooks) reflect a desire for better control over context and automation.

## Developer Pain Points

- **v1.15.9 Desktop regressions** dominate today’s feedback: missing agent selector (#28908, #28912), broken file tree (#28918, #28906, #28916), and unresponsive panel buttons. The immediate hotfix v1.15.10 addresses legacy flows, but the agent selector and file tree remain broken for many users.

- **Provider and model compatibility issues** continue to frustrate: missing `thought_signature` for Gemini (#28732), DeepSeek reasoning content failures (#28716), tool limit errors with Grok Build (#28911), and OAuth re-authentication loops (#15562). These indicate that as new model providers emerge, OpenCode’s integration layers need more rigorous testing.

- **Unbounded retries and session processor hangs** (#17648) point to resilience gaps when upstream LLM services return transient errors. Users on copilot and other providers experience indefinite blocking.

- **Windows-specific installation and runtime issues** (#28920 – wrong path in `opencode.ps1`, #28886 – LocalServer stops unexpectedly on Windows) highlight platform-specific friction that continues to affect a portion of the user base.

- **Legacy long-standing bugs** like the global session list (#8836, v1.1.23) and write tool parameter failures (#18131) remain unresolved, suggesting that some core workflows have not received attention relative to the pace of new feature development.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

好的，作为专注于AI开发者工具的技术分析师，根据您提供的GitHub数据，以下是2026年5月23日的Qwen Code社区日报。

---

# Qwen Code 社区日报 | 2026-05-23

## 1. 今日快讯

今日项目活动频繁，主要围绕 `v0.16.0` 版本的稳定性和新功能迭代。社区焦点集中在 Daemon 模式（`qwen serve`）的最终冲刺路线图、由 `v0.16.0` 引入的 Windows 终端 UI 渲染 bug 以及多个内存泄漏和 OOM 崩溃报告上。同时，开发者团队在代码审查工作流自动化、原子化文件写入和遥测数据增强方面提交了多项关键 PR。

## 2. 版本发布

-   **`v0.16.0-nightly.20260522.48b0a8bfc`**
    -   这是一个针对 `v0.16.0` 的每日构建版本，主要修复了一个关键的跨所有失败路径的 `tool_use` ↔ `tool_result` 不变性问题。

## 3. 热点议题

1.  **[[#4175] Daemon 模式 (qwen serve) 功能优先级路线图](https://github.com/QwenLM/qwen-code/issues/4175)**
    -   **影响工作流**: Daemon 模式的部署和功能完善。
    -   **影响**: 这是 `v0.16.0` 生产就绪前的关键规划，讨论了 Mode B（服务模式）剩余的工作项，影响所有希望通过 HTTP/SSE 方式使用 Qwen Code 的团队。
    -   **社区反应**: 31条评论，讨论热度高，是当前最重要的社区讨论议题。

2.  **[[#3803] Daemon 模式 (qwen serve) 设计提案](https://github.com/QwenLM/qwen-code/issues/3803)**
    -   **影响工作流**: Daemon 模式的核心架构设计。
    -   **影响**: 作为 Daemon 功能的源头设计文档，持续跟踪实现状态，是理解整个 Daemon 功能的基础。
    -   **社区反应**: 23条评论，1个赞，持续更新中。

3.  **[[#4276] OOM 崩溃](https://github.com/QwenLM/qwen-code/issues/4276)**
    -   **影响工作流**: 长时间运行或处理大型代码库时。
    -   **影响**: 用户报告了进程因内存耗尽而被操作系统杀死（OOM Killer）的问题，严重影响高负载场景下的可用性。
    -   **社区反应**: 6条评论，问题复现路径明确。

4.  **[[#4420] UI bug 导致 token 翻倍](https://github.com/QwenLM/qwen-code/issues/4420)**
    -   **影响工作流**: Windows 11 + Git Bash 环境下的 CLI 使用体验。
    -   **影响**: 从 `v0.15.11` 升级到 `v0.16.0` 后，CLI 界面渲染出现乱码，严重影响正常使用。
    -   **社区反应**: 4条评论，被标记为 `priority/P1` 和 `0.16.0` 版本问题，已由开发者提交修复 PR。

5.  **[[#4435] 内存溢出报错](https://github.com/QwenLM/qwen-code/issues/4435)**
    -   **影响工作流**: 所有使用场景。
    -   **影响**: 用户报告了 V8 引擎抛出的致命 OOM 错误，与 [#4276] 问题类似，表明内存泄漏是当前版本的一个普遍问题。
    -   **社区反应**: 3条评论，新报告，问题紧急。

6.  **[[#4429] CI 测试不稳定：CLI UI 测试在多个平台间歇性失败](https://github.com/QwenLM/qwen-code/issues/4429)**
    -   **影响工作流**: 开发者的 CI/CD 流程。
    -   **影响**: CLI 的 UI 测试在 macOS、Windows、Ubuntu 上间歇性失败，影响 PR 合并效率和质量保证。
    -   **社区反应**: 3条评论，问题已被明确识别为非功能变更导致的偶发失败。

7.  **[[#4452] Qwen Code 无法正确安装 Microsoft Claude Code 插件](https://github.com/QwenLM/qwen-code/issues/4452)**
    -   **影响工作流**: 扩展（Extensions）生态系统。
    -   **影响**: 用户尝试从 Microsoft 仓库安装深度维基（deep-wiki）插件时失败，表明与外部插件源的兼容性存在问题。
    -   **社区反应**: 1条评论，新问题，对扩展生态的完善至关重要。

8.  **[[#4433] 发送任何消息都报错：工具 ID 不匹配](https://github.com/QwenLM/qwen-code/issues/4433)**
    -   **影响工作流**: 所有使用 LLM 的对话流程。
    -   **影响**: `tool_use` 块与 `tool_result` 块不匹配，导致 API 调用失败，这直接导致用户无法使用任何功能。
    -   **社区反应**: 1条评论，问题根源与今日发布的修复版本直接相关。

9.  **[[#4423] 事件监听器泄漏警告](https://github.com/QwenLM/qwen-code/issues/4423)**
    -   **影响工作流**: 长时间运行的交互式会话。
    -   **影响**: 用户报告 `MaxListenersExceededWarning`，表明存在 EventTarget 内存泄漏，可能导致应用行为异常或最终崩溃。
    -   **社区反应**: 2条评论，开发者已提交相关 PR 进行修复。

10. **[[#4448] 请求：改进 settings.json 无效时的处理](https://github.com/QwenLM/qwen-code/issues/4448)**
    -   **影响工作流**: 配置管理。
    -   **影响**: 用户错误地编辑了 `settings.json` 导致文件无效，但 Qwen Code 没有给出任何错误提示，反而进入了首次设置流程，用户体验不佳。
    -   **社区反应**: 0条评论，新请求，指出了配置管理中的一个用户体验盲点。

## 4. 关键 PR 进展

1.  **[[#4438] feat(review): 使 worktree + --comment 规则对弱模型确定性生效](https://github.com/QwenLM/qwen-code/pull/4438)**
    -   **核心功能**: 将代码审查（`/review`）的关键规则从文本文件移植到硬编码的前置条件中，确保即使是指令遵循能力较弱的模型也无法绕过，提升了审查流程的可靠性。

2.  **[[#4333] feat(core): 原子化写入推广至凭证、内存、配置等关键路径](https://github.com/QwenLM/qwen-code/pull/4333)**
    -   **核心功能**: 将原子化文件写入（atomic write）方法应用到所有关键数据写入路径，防止进程意外终止导致的数据损坏或不一致。

3.  **[[#4366] fix(core): 修复长时间会话中的 AbortSignal 监听器泄漏](https://github.com/QwenLM/qwen-code/pull/4366)**
    -   **核心功能**: 修复了长期交互会话中 `MaxListenersExceededWarning` 的根本原因，直接解决 [#4423] 等内存泄漏问题。

4.  **[[#4451] fix(cli): 修复 Windows Git Bash 上的 UI 乱码问题](https://github.com/QwenLM/qwen-code/pull/4451)**
    -   **核心功能**: 通过检查 `TERM_PROGRAM_VERSION`，准确检测 Windows 终端对超链接的支持，从而修复了 [#4420] 报告的 CLI 界面渲染 bug。

5.  **[[#4359] feat(ci): 预审 AI 审查 + PR 合规门禁](https://github.com/QwenLM/qwen-code/pull/4359)**
    -   **核心功能**: 新增两层 PR 自动化：合并阻塞的模板和代码量检查，以及基于 AI 的代码审查路由，旨在提升代码库质量和 PR 审查效率。

6.  **[[#4431] fix(core): 在 atomicWriteFile 中保留 uid/gid 以避免破坏共享文件](https://github.com/QwenLM/qwen-code/pull/4431)**
    -   **核心功能**: 修复了原子化写入导致 Docker 或共享工作区中文件所有者被更改的问题，这是一个重要的生产环境兼容性修复。

7.  **[[#4445] refactor(acp-bridge): 拆分 F1 测试到 acp-bridge 包](https://github.com/QwenLM/qwen-code/pull/4445)**
    -   **核心功能**: 将巨大的测试文件拆分到对应的 `acp-bridge` 包中，以便于维护和测试，这是大型重构后的常见优化策略。

8.  **[[#4410] feat(telemetry): Phase 3 — 添加 qwen-code.subagent 跨度与并发隔离](https://github.com/QwenLM/qwen-code/pull/4410)**
    -   **核心功能**: 在遥测系统中引入子 Agent（subagent）的概念，使其发出的跨度（span）成为独立的子树，解决了并发子 Agent 间追踪数据交错的问题。

9.  **[[#4432] feat(telemetry): Phase 4b — LLM 请求重试可见性](https://github.com/QwenLM/qwen-code/pull/4432)**
    -   **核心功能**: 在 LLM 请求的遥测数据中增加重试细节（如每次重试的 HTTP 状态码），使得运维人员可以在追踪中看到完整的重试行为，而非黑盒。

10. **[[#4406] feat: 支持 fortune 加载短语](https://github.com/QwenLM/qwen-code/pull/4406)**
    -   **核心功能**: 添加了一个有趣的功能，允许用户在设置中启用后，在应用加载时显示来自 `fortune` 命令的引用，这主要是为了提升用户体验的趣味性。

## 5. 功能请求聚类

-   **本地诊断与可观测性增强**: [#4421] 提出了一个本地诊断框架，包含环形缓冲区、诊断ID和 `/bug collect bundle` 命令，旨在帮助用户在没有开启调试模式的情况下，也能轻松收集并提供关键诊断信息，从而提升问题反馈和修复效率。这与此前 [#4413]（LLM请求耗时分解）等遥测增强请求一脉相承。
-   **智能 Agent 与上下文管理**: [#4437] 请求修复自动技能创建时可能覆盖同名现有技能的 bug，并默认保留现有技能。这反映了用户对 Agent 行为可预测性和数据安全的更高要求。
-   **配置与生命周期管理**: [#4448] 请求改进当 `settings.json` 文件无效时的用户体验。此外，[#2915]（`/clear --all` 功能）仍在进行中，旨在提供更细粒度的会话重置控制，这些都表明用户对配置工具和会话管理的灵活性与健壮性有持续需求。

## 6. 开发者痛点总结

-   **内存泄漏问题集中爆发**: 多个议题（[#4276], [#4435], [#4399], [#4423]）报告了内存相关错误，包括 OOM 崩溃和事件监听器泄漏。这是一个高优先级且普遍存在的稳定性问题，开发者已通过 PR [#4366] 和 [#4333] 进行修复和预防。
-   **Windows 平台用户体验问题**: 新版 `v0.16.0` 在 Windows + Git Bash 环境下引发了 UI 渲染崩溃（[#4420]），并且文件搜索时中文显示异常（[#4430]）。这表明 Windows 平台的测试和兼容性验证需要加强。
-   **扩展生态集成质量**: 用户报告无法正常安装外部插件（[#4452]），并且查看已安装扩展的 CLI 命令不工作（[#4450]），显示出扩展系统在稳定性和易用性上仍有待打磨。
-   **构建与发布流程稳定性**: 存在构建失败（[#4447]）和发布流程失败（[#4443], [#4449]）的问题，这会直接影响开发者的贡献效率和用户获取最新版本的体验。
-   **配置鲁棒性**: `settings.json` 文件格式错误时无声失败（[#4448]）以及 Token plan API Key 显示和处理问题（[#4424]），显示出配置管理的用户体验和错误处理逻辑需要改进。

</details>