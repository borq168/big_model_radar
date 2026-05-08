# AI CLI Tools Community Digest 2026-05-08

> Generated: 2026-05-08 02:10 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# Cross-Tool AI CLI Comparison Report — 2026-05-08

## 1. Daily Cross-Tool Overview

All six tracked tools showed sustained activity today, with 238 combined issues and 212 combined PRs updated in the last 24 hours. Claude Code shipped a single patch release addressing worktree branching behavior, while Codex published five pre-release Rust versions and Copilot CLI pushed three patch releases fixing shell-alias handling and quota display. Terminal display corruption remains the single most-reported cross-tool pain point, appearing in active issues across Claude Code, Gemini CLI, and OpenCode. Windows platform parity continues to lag across multiple tools, manifesting in file-lock bugs, missing standalone installers, and UI rendering regressions. Agent tool availability and sub-agent observability surfaced as emerging concerns across Claude Code, Gemini CLI, and Qwen Code, as the sub-agent feature set expands faster than its reliability guarantees.

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Releases Today | Key Release |
|---|---|---|---|---|
| **Claude Code** | 50 issues | 3 PRs | 1 (v2.1.133) | `worktree.baseRef` setting (fresh/head) |
| **Codex CLI** | 50 issues | 50 PRs | 5 (1 stable, 4 alpha) | rust-v0.129.0 (Vim editing, resume picker, raw scrollback) |
| **Gemini CLI** | 50 issues | 50 PRs | 1 nightly (v0.42.0) | JSON output for AgentExecutionStopped, shell safety evals |
| **Copilot CLI** | 47 open issues | 0 PRs | 3 (v1.0.44-0/1/2) | `--prerelease` flag, shell alias fix, quota display fix |
| **Kimi Code CLI** | 7 issues | 9 PRs | 0 | None |
| **Qwen Code CLI** | 34 issues | 50 PRs | 1 stable (v0.15.8) + 1 nightly | Tool-control E2E alignment, symlink scoping fix |
| **OpenCode CLI** | 50 issues | 50 PRs | 1 (v1.14.41) | Formatter output fix, workspace warp improvements |

**Note:** "Issues updated" and "PRs updated" are reported per tool's own digest; methodologies may vary (e.g., all open vs. newly updated). Codex and Gemini CLI explicitly reported "50 issues and 50 PRs" which may be an API-imposed ceiling rather than exact counts.

## 3. Shared Feature Directions

**Terminal display stability** — Three tools have active complaints about rendering corruption:
- Claude Code: scrollback duplication on resize (#49086, #52924, #57133, #57145) — high frequency, all platforms
- Gemini CLI: screen flickering on Windows when scrolling long lists (#18896) — 12 comments, p2
- OpenCode: terminal flooded with raw mouse escape sequences after interrupt (#26198) — 4 comments

**Agent/sub-agent tool availability & observability** — Three tools report sub-agent tool failures that silently degrade workflows:
- Claude Code: `SendMessage` tool missing in agent mode (#38183), tool registration can drop tools mid-session
- Gemini CLI: sub-agent notification misrouting (#3925 on Qwen's list but same pattern appears), requests for sub-agent full reasoning output (#3758)
- Copilot CLI: concurrent sub-agent events corrupting session state (#2543), delegate branch ignoring (#2729)

**Windows platform gaps** — Four tools document Windows-specific issues:
- Claude Code: orphaned process file lock on relaunch (#42776), backspace key mapping inversion (#53595)
- Codex CLI: no standalone MSI/EXE installer (#13993, 93 👍), scrollbar overlap bugs, double-paste in terminal
- Gemini CLI: `isTTY` flickering causing false exits (#25920), screen flickering (#18896)
- Copilot CLI: `pwsh.exe` not found despite PATH (#2355), `--prompt` whitespace tokenization (#3186)
- Kimi Code CLI: blank FileVersionInfo blocking VS Code extension (#2178)

**MCP integration instability** — Appears across Copilot CLI, Qwen Code, and OpenCode:
- Copilot CLI: servers reported as "blocked by policy" (#3162), connection failures (#2282), missing `capabilities.tasks` negotiation (#2538)
- Qwen Code: health pill not refreshing after disable (#3895), add/remove not persisting (#3937), headers not saved (#3718)
- OpenCode: MCP server integration questions (#11391)

**Token/usage metrics visibility** — Two tools have active requests for better performance and cost display:
- OpenCode: show tokens/second (#5374, 66 👍, since Dec 2025)
- Kimi Code CLI: incremental token deltas in stream-json mode (#2179)

## 4. Differentiation Analysis

**Claude Code** (Anthropic) is the most focused on **worktree/git integration** — today's v2.1.133 release adds configurable worktree base branching, a feature unique among these tools. It also emphasizes **permissions and sandboxing**, with two new issues today about allow-rule runtime matching (#57132) and a severe macOS Tahoe sandbox regression blocking non-Anthropic apps from reading files (#57024). The terminal display corruption cluster is its most active area of community pain.

**Codex CLI** (OpenAI) is shipping the most **editor and IDE integration features** — modal Vim editing in the TUI composer, redesigned resume/fork picker, `/ide` context-injection, and `/upload` command for file staging. It also has the most advanced **multi-environment tool routing** (PR #21617) and **desktop attestation** (PR #20619). Its developer pain points center on **context compaction reliability** (GPT-5.5 hard compaction failures at ~220k tokens) rather than UI rendering issues.

**Gemini CLI** (Google) is pushing hardest on **agent composability and subagent architecture** — today's active issues explore subagent input/output schemas (#18280), orchestrator-only mode (#18286), shared memory between subagents (#18287), and async execution (#17754). Two p1 PRs directly target **ACP (Agent Communication Protocol) integration** for IDE support (tool call prefixing, `ask_user` for Xcode). The proxy regression (`HttpsProxyAgent` constructor error, #24471) is its most active bug.

**Copilot CLI** (GitHub) has the **smallest scope and lowest PR velocity** (0 PRs updated today) but maintains steady patch releases. Its feature requests skew toward **input editing** (Vi/Vim mode, #13 with 58 👍) and **session control** (pause/resume, background processes). The most active bugs are **platform-specific**: Linux clipboard (#2082), Windows PowerShell spawning (#2355), and MCP integration failures.

**Kimi Code CLI** (MoonshotAI) has the **smallest community** (7 issues updated) and focuses on **cross-platform polish** — today's PRs address Windows binary metadata (#2181), macOS screenshot attachment race (#2183), and model display name accuracy (#2174). The most requested feature is **full thinking traces display** (#1864, 10 👍).

**OpenCode CLI** (anomalyco) has the **highest upvote density for a single feature** (show tokens/second, 66 👍 on #5374) and the most severe **regression** (bash tool readonly property error, #25873 affecting all tool calls with experimental mode). Its PR activity is the broadest, spanning signal forwarding, session cloning, markdown preview with Mermaid, and custom provider setup in TUI.

**Qwen Code CLI** (QwenLM/Qwen) is investing heavily in **background task infrastructure** — today's work spans Phase C (event monitoring) and Phase D (foreground-to-background promotion) with 4+ PRs. The **remote control feature stack** (3 stacked PRs #3929-#3931) is unique among these tools, targeting headless and CI orchestration. Local model compatibility issues (#3881, #3888) are a differentiator reflecting its emphasis on self-hosted deployment.

## 5. Community Activity Notes

**Highest raw issue activity**: Claude Code, Codex CLI, Gemini CLI, and OpenCode each reported 50 issues updated in 24h (likely an API limit for some). Copilot CLI has 47 open issues but 0 PRs updated. Kimi Code CLI has the smallest count (7 issues) but proportional PR activity.

**Highest release velocity**: Codex CLI (5 versions), Copilot CLI (3 versions), Qwen Code CLI (2 versions). Claude Code and OpenCode shipped one patch each. Kimi Code CLI had no releases.

**Most maintainer-responsive**: **Qwen Code CLI** shows strong maintainer engagement — 50 PRs updated, explicit maintainer comments on tracking issue #3634 outlining phased roadmap, and direct PR submissions from @wenshao and @chiga0. **Codex CLI** continues high PR throughput (50 PRs updated). **Kimi Code CLI** has active PR submissions from maintainers @he-yufeng and @tears-mysthrala fixing reported bugs.

**Most backlogged communities**: **Copilot CLI** has 0 PR activity in 24h despite 47 open issues, suggesting a patch-release phase with no active feature work. **Claude Code** has only 3 PRs updated for 50 issues, a low PR-to-issue ratio that may indicate maintainer bottleneck or prioritization of internal fixes.

**Highest community engagement per issue**: OpenCode's tokens/second request (#5374, 66 👍), Copilot CLI's Vi/Vim mode (#13, 58 👍), and Codex CLI's standalone Windows installer (#13993, 93 👍) show the highest user consensus across tools.

## 6. Evidence-Backed Observations

**1. Terminal display corruption is the most consistent cross-tool pain point, but each tool manifests it differently.**
Claude Code has the most reports (4+ active issues) with scrollback duplication on resize and long sessions, spanning Windows, Linux, and macOS. Gemini CLI has screen flickering specifically on Windows (#18896). OpenCode has mouse escape sequence flooding (#26198). Qwen Code reports Ctrl+O freezes on long conversations (#3899). The symptoms differ — duplication vs. flicker vs. freeze — suggesting distinct root causes (SIGWINCH handling, repaint logic, terminal escape parsing) rather than a shared framework bug. No no clear cross-tool signal that a single fix would resolve all cases.

**2. Windows platform parity remains consistently behind macOS across multiple tools, with file-lock and installer gaps as recurring themes.**
Claude Code's orphaned process file lock on relaunch (#42776), Codex CLI's missing standalone installer (#13993, 93 👍), Copilot CLI's pwsh.exe PATH issue (#2355), Gemini CLI's TTY flickering (#25920), and Kimi Code's blank binary metadata (#2178) all affect Windows specifically. The pattern spans testing gaps, MSI packaging, and terminal rendering — no single upgrade path addresses all these issues, but they collectively signal that maintainers prioritize macOS during development.

**3. Sub-agent observability is emerging as a shared blocker as sub-agent features expand faster than debugging tooling.**
Claude Code's `SendMessage` tool silently missing (#38183), Qwen Code's monitor tool notifications routed to wrong agent (#3925), Gemini CLI's request for sub-agent full reasoning output (#3758), and Copilot CLI's concurrent event corruption (#2543) all describe the same class of problem: sub-agents become black boxes when they fail. The pattern is particularly notable because these four tools implement sub-agents quite differently, yet users experience the same opacity gap. This suggests the sub-agent abstraction itself needs better introspection APIs.

**4. MCP (Model Context Protocol) integration is gaining adoption but generating a consistent class of configuration-and-connection bugs across tools.**
Copilot CLI reports servers blocked by policy (#3162), connection failures (#2282), and missing capability negotiation (#2538). Qwen Code reports health pills not refreshing (#3895) and add/remove operations not persisting (#3937). OpenCode reports MCP server integration questions (#11391). These issues span authentication, schema negotiation, and UI feedback — suggesting the protocol's client-side configuration layer is stabilizing more slowly than server-side implementations.

**5. Proxy and network configuration errors are causing disproportionate user friction across tools reliant on API connectivity.**
Gemini CLI's `HttpsProxyAgent is not a constructor` regression (#24471, 5 👍, 11 comments) is its most active bug, blocking corporate users. Qwen Code reports `.env` variables ignored on startup (#3877, #3914). Codex CLI's phone verification after SSO (#20161, 73 👍) indicates auth flow fragility. While these are technically separate issues (proxy parsing, env file loading, SSO integration), their collective impact on users behind corporate firewalls or in headless setups is high, and none of the tools appear to have robust offline/fallback auth handling.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-05-08

## Today's Update Brief
One patch release shipped (v2.1.133) with a small but impactful change to worktree branching behavior. Issue activity remains high — 50 issues updated in 24h — with two recurring pain points dominating: terminal display corruption on resize and platform-specific bugs on Windows and macOS Tahoe. Three pull requests are open, including a fix for hook parsing logic and a docs clarification for hook exit codes.

## Releases
**v2.1.133** — [Release link](https://github.com/anthropics/claude-code/releases/tag/v2.1.133)
- Added `worktree.baseRef` setting (`fresh` | `head`) to control whether `--worktree`, `EnterWorktree`, and agent-isolation worktrees branch from `origin/<default>` or local `HEAD`.
- **Note:** The default `fresh` changes `EnterWorktree`'s base back to `origin/<default>` (reverting a previous behavior change). This is a subtle behavioral shift for users relying on local-HEAD-based worktree creation.

## Hot Issues

1. **[#18170] Copy/paste from terminal includes unwanted indentation and trailing spaces** — [Issue](https://github.com/anthropics/claude-code/issues/18170)
   - **Workflow:** Selecting and copying code or paragraphs from Claude Code output.
   - **Impact:** Copied text carries leading tabs (matching prompt indentation) and trailing whitespace, forcing manual cleanup. 229 👍 and 106 comments — the most actively discussed open issue.
   - **Status:** Open since January, no fix merged yet.

2. **[#42776] Claude Code Desktop fails to Relaunch on Windows due to orphaned process file lock** — [Issue](https://github.com/anthropics/claude-code/issues/42776)
   - **Workflow:** Updating Claude Code Desktop on Windows — after install, the app cannot restart because a stale process holds a lock on the binary.
   - **Impact:** Users must manually kill orphaned processes via Task Manager. 70 comments, moderate upvotes.
   - **Status:** Open, labeled `invalid` by maintainers (possibly a reproducer issue).

3. **[#49086] Terminal resize causes repeated banner/content duplication (per-frame redraw leak)** — [Issue](https://github.com/anthropics/claude-code/issues/49086)
   - **Workflow:** Resizing the terminal window horizontally generates a full redraw that pushes the previous frame into scrollback without clearing it.
   - **Impact:** Every resize adds a duplicate copy of the UI into the scrollback buffer; rapid resize creates dozens of copies. Closed, but related issues continue to appear.
   - **Status:** Closed (likely fixed or investigated).

4. **[#11334] Feature request: allow configuration to prevent auto-collapsing of long Bash outputs** — [Issue](https://github.com/anthropics/claude-code/issues/11334)
   - **Workflow:** When Claude Code runs a bash command with long output, the TUI collapses it; users want a setting to keep certain outputs expanded.
   - **Impact:** Hinders debugging and inspection of full command results. 22 👍, reopened discussion.
   - **Status:** Open enhancement request, labeled duplicate.

5. **[#38183] SendMessage tool referenced but not available — agent continuation broken since resume parameter removal** — [Issue](https://github.com/anthropics/claude-code/issues/38183)
   - **Workflow:** Using agents with continuation features — the model tries to call `SendMessage` but the tool is absent from the available list.
   - **Impact:** Agent workflows silently break mid-session. 11 👍, 9 comments.
   - **Status:** Open bug affecting agent-mode users.

6. **[#52924] TUI duplicates rendered text in scrollback on long sessions (Windows + Linux)** — [Issue](https://github.com/anthropics/claude-code/issues/52924)
   - **Workflow:** After ~300k+ tokens and many tool calls, the display layer starts duplicating rendered text into scrollback.
   - **Impact:** Scrollback becomes unusable with repeated content. 5 👍, 8 comments — likely related to #49086.
   - **Status:** Open, platforms: Windows and Linux.

7. **[#53416] /effort setting is global across sessions instead of per-session** — [Issue](https://github.com/anthropics/claude-code/issues/53416)
   - **Workflow:** Setting effort level in one session immediately affects another open session.
   - **Impact:** Unintended interference when running parallel sessions. 8 👍, 7 comments. Closed — likely acknowledged as a design limitation.
   - **Status:** Closed.

8. **[#47383] Gmail connector OAuth missing write/modify scopes for label operations** — [Issue](https://github.com/anthropics/claude-code/issues/47383)
   - **Workflow:** Using CoWork's Gmail connector to manage labels — the OAuth scope lacks write permissions.
   - **Impact:** Label creation/modification fails silently or errors out. 13 👍, 5 comments.
   - **Status:** Open, area:cowork.

9. **[#57024] macOS Tahoe: Claude Code writes block all non-Anthropic apps from reading files in ~/Documents** — [Issue](https://github.com/anthropics/claude-code/issues/57024)
   - **Workflow:** On macOS 2.1.132+, files written or directories touched by Claude Code become unreadable from iTerm2, Terminal.app, Finder, or other non-Anthropic apps.
   - **Impact:** Severe sandboxing regression — breaks normal file workflow on macOS. New as of yesterday (May 7), already 4 comments.
   - **Status:** Open, area:sandbox, regression.

10. **[#57132] Allow rules under ~/.claude/ show as loaded but don't match at runtime** — [Issue](https://github.com/anthropics/claude-code/issues/57132)
    - **Workflow:** Configuring allow rules in `~/.claude/settings.json` targeting paths under `~/.claude/` itself. Rules appear in `/permissions` as active but are silently ignored at runtime.
    - **Impact:** Users are prompted for permissions despite having matching allow rules. Filed today.
    - **Status:** Open, area:permissions.

## Key PR Progress
(Only 3 PRs updated in the last 24h.)

1. **[#57108] Fix hookify enabled boolean parsing** — [PR](https://github.com/anthropics/claude-code/pull/57108)
   - **What:** Parses Hookify `enabled` frontmatter as a strict boolean, accepting YAML spellings (`true/false`, `yes/no`, `on/off`, `1/0`). Invalid values are rejected instead of being treated as truthy.
   - **Why:** Prevents accidental activation of hook rules due to truthy-string coercion.
   - **Status:** Open, by @parasol-aser.

2. **[#57046] docs: clarify hook blocking exit code** — [PR](https://github.com/anthropics/claude-code/pull/57046)
   - **What:** Documents that only exit code `2` blocks Claude Code hook execution; exit code `1` and other non-zero codes are non-blocking.
   - **Why:** Fixes #44707 where users expected any non-zero exit to block execution.
   - **Status:** Open, by @MiladZarour.

3. **[#53949] Update HackerOne links in SECURITY.md** — [PR](https://github.com/anthropics/claude-code/pull/53949)
   - **What:** Updates the HackerOne submission form and program page links.
   - **Status:** Closed (merged). Routine maintenance.

## Feature Request Clusters

**1. Bash output display control** — Multiple requests for controlling when long bash tool outputs are collapsed or expanded. Issues [#11334](https://github.com/anthropics/claude-code/issues/11334) (auto-collapse toggle) and [#57127](https://github.com/anthropics/claude-code/issues/57127) (skill/tool frontmatter flag to auto-expand) both ask for per-command or per-skill control over the display behavior of large outputs. Users want a `@expand` annotation or a global setting to prevent truncation of important results.

**2. Rate limiting and retry transparency** — Requests for better visibility into API rate limit handling. Issue [#57134](https://github.com/anthropics/claude-code/issues/57134) asks for a progress indicator during `x-should-retry` backoff rather than a silent spinner freeze. Related: issue [#53922](https://github.com/anthropics/claude-code/issues/53922) reports that parallel sessions started after a 5-hour reset experience inconsistent rate limiting (first 3–4 work, rest fail).

**3. Per-session vs global settings** — Issue [#53416](https://github.com/anthropics/claude-code/issues/53416) highlights that `/effort` is global across sessions; users want session-scoped configuration. This pattern (global leakage) appears in other settings as well.

## Developer Pain Points

**TUI display corruption remains the highest-frequency complaint.** Multiple open and closed issues — [#49086](https://github.com/anthropics/claude-code/issues/49086), [#52924](https://github.com/anthropics/claude-code/issues/52924), [#57133](https://github.com/anthropics/claude-code/issues/57133), [#57145](https://github.com/anthropics/claude-code/issues/57145) — describe text duplication in scrollback on resize or in long sessions. The pattern spans all platforms (Windows, Linux, macOS), suggesting a systemic issue in the terminal rendering layer (likely related to SIGWINCH handling or repaint logic).

**Windows-specific bugs are accumulating.** The Windows relaunch file-lock issue ([#42776](https://github.com/anthropics/claude-code/issues/42776)), the backspace key mapping inversion after Ctrl+G ([#53595](https://github.com/anthropics/claude-code/issues/53595)), and scrollback duplication on Windows PowerShell ([#57133](https://github.com/anthropics/claude-code/issues/57133)) suggest testing gaps on the Windows platform.

**Agent tool availability is fragile.** Issue [#38183](https://github.com/anthropics/claude-code/issues/38183) (`SendMessage` tool missing) and [#52221](https://github.com/anthropics/claude-code/issues/52221) (Anthropic tool tier silently disappearing from advertised functions) indicate that the tool registration/injection system can drop tools at runtime, breaking agent workflows without clear error messaging.

**macOS sandbox changes are breaking adjacent tooling.** The Tahoe regression ([#57024](https://github.com/anthropics/claude-code/issues/57024)) — where Claude Code file writes block other macOS apps from reading them — is a recent and severe issue for macOS users, particularly those on Apple Silicon who rely on co-existing with iTerm2, VSCode, Finder, and other non-Anthropic tools.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the Codex community digest for 2026-05-08.

---

## Codex Community Digest — 2026-05-08

### 1. Today's Update Brief
Activity remains high across all surfaces, with five pre-release Rust versions published and a steady stream of 50 open issues and 50 pull requests updated in the last 24 hours. The development team is shipping multi-environment tool routing, desktop attestation, and durable queued turns, while the community continues to press hard on context compaction reliability, desktop sidebar regressions, and Windows-specific UI bugs.

### 2. Releases
Five pre-release versions were published in the last 24 hours: the stable **rust-v0.129.0** and four alpha releases.

- **rust-v0.129.0** introduces modal Vim editing in the TUI composer (`/vim`, default-mode config, Vim-specific keymaps), a redesigned resume/fork picker for easier workflow continuation, raw scrollback mode, and `/ide` context-injection for TUI workflows. ([#18595](https://github.com/openai/codex/issues/18595))
- **rust-v0.130.0-alpha.1** — Release.
- **rust-v0.129.0-alpha.13, .14, .15** — Sequential release bumps.

### 3. Hot Issues
*Picked from the top 30 issues by comment count.*

1. **#20161 – Phone number verification broken after SSO** (99 comments, 73 👍 — closed)
   Users who authenticate via SSO are forced to enter a phone number even when none was configured. High signal; marked as closed.
   [View Issue](https://github.com/openai/codex/issues/20161)

2. **#12564 – Rename task/thread titles** (41 comments, 82 👍)
   Long-standing request for manual thread renaming to improve history navigation. Community workaround: closing and reopening threads.
   [View Issue](https://github.com/openai/codex/issues/12564)

3. **#13993 – Standalone Windows installer (`codex-setup.exe`)** (37 comments, 93 👍)
   Corporate and offline users blocked by Microsoft Store dependency. High upvote count indicates strong demand for an MSI/EXE alternative.
   [View Issue](https://github.com/openai/codex/issues/13993)

4. **#3141 – GPU access inside sandbox** (36 comments, 43 👍)
   `nvidia-smi` fails inside the sandbox on Linux. Blocks any GPU-accelerated workflow (ML, rendering) inside the sandbox.
   [View Issue](https://github.com/openai/codex/issues/3141)

5. **#8259 – Markdown tables rendered unreadably** (30 comments, 112 👍)
   Codex-generated tables have misaligned whitespace. 112 upvotes make this a high-pain formatting issue for documentation-heavy users.
   [View Issue](https://github.com/openai/codex/issues/8259)

6. **#2952 – `@` search ignores .gitignore-excluded directories** (29 comments, 72 👍)
   VS Code extension context search only covers git-tracked files. Blocks quick file navigation in monorepos with generated assets.
   [View Issue](https://github.com/openai/codex/issues/2952)

7. **#16857 – High GPU usage from idle “thinking” animation** (22 comments, 25 👍)
   A tiny animation churns the GPU at high wattage while the model is running. Affects battery life on laptops.
   [View Issue](https://github.com/openai/codex/issues/16857)

8. **#20552 – Toggle File Tree menu item doesn’t reliably show file tree** (23 comments, 5 👍)
   Misleading menu toggle state; user has to re-click or use a workaround. Low upvotes but high comment count suggests active troubleshooting.
   [View Issue](https://github.com/openai/codex/issues/20552)

9. **#13891 – `codex mcp login` omits OAuth resource indicator** (8 comments, 9 👍)
   Missing `resource` parameter in authorize request causes the auth server to issue tokens with the wrong audience, breaking downstream MCP authorization.
   [View Issue](https://github.com/openai/codex/issues/13891)

10. **#20569 – Branch detail panel blocks scrollbar** (7 comments, 18 👍)
    On Windows and macOS, the branch detail hover popover overlaps the scrollbar, making it impossible to scroll long diffs.
    [View Issue](https://github.com/openai/codex/issues/20569)

### 4. Key PR Progress

1. **#21617 – Multi-environment `apply_patch` selection** — Adds environment-aware routing for patch operations, parsing and verifying an optional `environment_id` through both freeform and function-call tool flows.
   [View PR](https://github.com/openai/codex/pull/21617)

2. **#21623 – AWS Bedrock login credentials** — Enables SigV4 signing using AWS CLI console-login profiles (`aws login`) by enabling the SDK's `credentials-login` feature.
   [View PR](https://github.com/openai/codex/pull/21623)

3. **#21637 – Plugin share settings with discoverability** — Requires discoverability on plugin share/update endpoints so the server can manage workspace link access (UNLISTED, LISTED).
   [View PR](https://github.com/openai/codex/pull/21637)

4. **#21601 – Accepted line fingerprint analytics** — Emits a hash-only analytics event derived from the turn diff, enabling downstream code attribution without uploading raw code.
   [View PR](https://github.com/openai/codex/pull/21601)

5. **#21634 – Pause queue sends on exhaustion** — When a user hits usage limits, the system pauses outbound messages instead of immediately failing each one, giving the user time to manage their quota.
   [View PR](https://github.com/openai/codex/pull/21634)

6. **#21466 – Durable app-server queued turns** — Moves the follow-up turn queue from ephemeral client state to app-server storage, surviving renderer reloads and reconnections.
   [View PR](https://github.com/openai/codex/pull/21466)

7. **#21109 – TUI local file upload command (`/upload`)** — Provides a user-facing `/upload <local-path>` command that stages a local file over the websocket SFTP lane and returns a remote path for the model to use.
   [View PR](https://github.com/openai/codex/pull/21109) (merged)

8. **#20619 – Desktop attestation token** — Teaches the app-server to request a desktop-provided (DeviceCheck) attestation token and attach it to scoped request paths.
   [View PR](https://github.com/openai/codex/pull/20619)

9. **#21627 – Standalone `codex-exec-server` binary** — Splits the exec-server into its own standalone binary while retaining `codex exec-server` as an alias. Includes Linux sandbox validation.
   [View PR](https://github.com/openai/codex/pull/21627)

10. **#21559 – Named permission profile picker in TUI** — Prevents the `/permissions` picker from resetting users with `default_permissions` or `[permissions.*]` config back to anonymous presets.
    [View PR](https://github.com/openai/codex/pull/21559)

### 5. Feature Request Clusters

- **Thread / conversation management** — Multiple requests for thread renaming (#12564), making older local conversations discoverable after updates (#18364, #21581), and a mobile app to monitor ongoing desktop sessions (#10816).
- **Windows-specific experiences** — Standalone installer (#13993), scrollbar overlap bugs (#20886, #20569, #20552), and keyboard paste issues (#21638) all point to Windows UX lagging behind macOS.
- **Sandbox / environment flexibility** — GPU access (#3141), Windows installer, and multi-environment tool routing (PR #21617, #21627) indicate growing demand for configurable, non-default execution environments.

### 6. Developer Pain Points

- **Context compaction instability** — GPT-5.5 sessions hitting hard compaction failures around ~220k tokens (#19386), goals/audit prompts lost after mid-turn compaction (#19910), and Azure Foundry endpoints failing `compact_remote` under high demand (#21569). These remain the most serious reliability pain points for long-running sessions.
- **Desktop sidebar/search regressions** — After updates, older local sessions are hidden by bogus `status` session entries (#18364) or by search hiding threads that still exist on disk (#21581). Multiple reports suggest the sidebar indexing is fragile.
- **UI overlaps blocking core interactions** — Branch panels, hover popovers, and search buttons overlapping scrollbars or close buttons (#20569, #20886, #20552). These are low-complexity fixes with high daily frustration impact.
- **Lack of Windows parity** — No standalone installer, double-paste in terminal, and missing store alternatives continue to frustrate Windows users in restricted or offline environments.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-08

## Today’s Update Brief

Activity remains high with **50 issues and 50 PRs** updated in the last 24 hours, alongside one new nightly release. The community is converging around agent sandboxing, subagent configurability, and ACP integration, while a prominent proxy regression (`HttpsProxyAgent` constructor error) continues to draw attention. A new `/fork` session branching command and ADK agent session support entered review today.

---

## Releases

**v0.42.0-nightly.20260507.ga809bc7c5** (released today)
[View release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.42.0-nightly.20260507.ga809bc7c5)

- **fix(cli):** Provide JSON output for `AgentExecutionStopped` in non‑interactive mode ([#26504](https://github.com/google-gemini/gemini-cli/pull/26504))
- **feat(evals):** Add shell command safety evals ([#26528](https://github.com/google-gemini/gemini-cli/pull/26528))

---

## Hot Issues (10 selected)

1. **Screen Glitching/Flickering on Windows** ([#18896](https://github.com/google-gemini/gemini-cli/issues/18896))
   **Priority:** p2, area/core | **Comments:** 12 | **Updated:** today
   Terminal rendering corruption when scrolling long lists (settings, file listings). Affects Windows users with certain terminal emulators. No maintainer response visible yet.

2. **Proxy environment variable broken** ([#24471](https://github.com/google-gemini/gemini-cli/issues/24471))
   **Priority:** p1, area/platform | **Comments:** 11 | **👍:** 5 | **Updated:** today
   `HttpsProxyAgent is not a constructor` after upgrading to v0.36.0. Blocks users behind corporate proxies. High community interest (5 thumbs‑up).

3. **Git Submodules in Extensions** ([#18385](https://github.com/google-gemini/gemini-cli/issues/18385))
   **Status:** possible duplicate, help wanted | **Comments:** 5 | **Updated:** today
   Request for `gemini extensions install` to recursively clone and init submodules. Extension maintainers currently cannot share common logic via submodules.

4. **Zero‑Dependency OS Sandboxing** ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873))
   **Area:** agent, 🔒 maintainer only | **Comments:** 5 | **Updated:** today
   Proposes leveraging Gemini 3’s native bash affinity with `sandbox‑exec`/seccomp isolation and post‑execution intent routing. Large architectural discussion.

5. **Shell magic commands run 100× slower** ([#18953](https://github.com/google-gemini/gemini-cli/issues/18953))
   **Priority:** p2, area/core | **Comments:** 3 | **Updated:** today
   Agent execution of complex CLI pipelines (e.g., `dart run … --output $(mktemp -d)`) is dramatically slower than bare terminal. Spin/progress UI is cited as a contributor.

6. **A2A Machine‑to‑Machine Auth** ([#17602](https://github.com/google-gemini/gemini-cli/issues/17602))
   **Area:** agent, low priority | **Comments:** 3 | **Updated:** today
   Non‑interactive OAuth 2.0 Client Credentials flow for service‑to‑service remote agent calls. Explicitly noted as low priority by maintainers.

7. **Symlinks in `~/.gemini/agents/` ignored** ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079))
   **Priority:** p2 | **Comments:** 2 | **Updated:** today
   Agent definition files that are symbolic links are not discovered. Blocks users who manage agent configs via dotfile managers.

8. **Epic: Diagnostic Tooling Infrastructure** ([#18494](https://github.com/google-gemini/gemini-cli/issues/18494))
   **Priority:** p1, area/agent | **Comments:** 1 | **Updated:** today
   Tracks building a devtools suite for debugging agent behavior, reproducing issues, and profiling token usage. Growing need as agent complexity increases.

9. **Subagent Configurability (tools, hooks, schema)** ([#17760](https://github.com/google-gemini/gemini-cli/issues/17760))
   **Area:** agent | **Comments:** 1 | **👍:** 2 | **Updated:** today
   As plan mode, skills, and tasks evolve, this epic asks how subagents should inherit or exclude those capabilities. Two community upvotes.

10. **Parallel subagent collaboration / shared memory** ([#18287](https://github.com/google-gemini/gemini-cli/issues/18287))
    **Area:** agent | **Comments:** 0 | **👍:** 1 | **Updated:** today
    Exploration issue for allowing multiple subagents to share a memory space and coordinate. Blocked on async subagent support.

---

## Key PR Progress (10 selected)

1. **`/fork` session branching command** ([#26618](https://github.com/google-gemini/gemini-cli/pull/26618)) — **OPEN**
   Implements a `/fork` slash command that snapshots the current session under a new ID, preventing last‑write‑wins corruption when two terminals `--resume` the same session. Also makes branching available for experimentation.

2. **ADK Agent Session** ([#26680](https://github.com/google-gemini/gemini-cli/pull/26680)) — **OPEN** (priority p1)
   Fresh PR implementing ADK (Agent Development Kit) session support. No details yet, but given its p1 priority, this is a significant integration effort.

3. **Prefix tool call IDs with tool names for ACP** ([#26676](https://github.com/google-gemini/gemini-cli/pull/26676)) — **OPEN** (priority p1, ACP)
   Prefixes `toolCallId` with the active tool name (`${toolName}__${originalId}`) so ACP‑compliant IDEs can render tool‑specific UIs. Directly supports JetBrains/Zed/Xcode integrations.

4. **Allow `ask_user` tool in ACP mode for Xcode** ([#26675](https://github.com/google-gemini/gemini-cli/pull/26675)) — **OPEN** (priority p1, ACP)
   Re‑enables the `ask_user` tool specifically for Xcode‑based IDE integrations. Previously excluded because most IDEs block it.

5. **Expand template vars in MCP stdio config** ([#26247](https://github.com/google-gemini/gemini-cli/pull/26247)) — **OPEN** (priority p1)
   Expands `{{VAR}}` placeholders in MCP `command`, `args`, `cwd`, and `env` fields. Fixes a gap where only `$VAR`/`${VAR}` was supported, breaking some MCP server configurations.

6. **Explicit error on dropped tool responses** ([#26668](https://github.com/google-gemini/gemini-cli/pull/26668)) — **OPEN** (area/agent)
   Refactors `LocalAgentExecutor` to throw a fail‑fast `Error` when a tool response is dropped by the scheduler, preventing silent Gemini API `400 Bad Request` crashes.

7. **Debounce TTY loss check for Windows** ([#25920](https://github.com/google-gemini/gemini-cli/pull/25920)) — **OPEN** (priority p1)
   Fixes false‑positive exits on Windows terminals where `isTTY` flickers during resize or focus changes. Not yet merged after two weeks.

8. **Remove invalid workspace directories** ([#26179](https://github.com/google-gemini/gemini-cli/pull/26179)) — **OPEN**
   Allows removing directories from workspace context at runtime — a long‑standing gap where deleted/renamed directories could not be removed once added via `--include-directories`.

9. **Cache model routing in `LocalAgentExecutor`** ([#26548](https://github.com/google-gemini/gemini-cli/pull/26548)) — **CLOSED/MERGED**
   Caches `ModelRouterService.route()` decisions for the duration of a subagent session, avoiding redundant calls when model is set to `auto`. Fixes [#25156](https://github.com/google-gemini/gemini-cli/issues/25156).

10. **Install signal handlers in child‑process relaunch** ([#25605](https://github.com/google-gemini/gemini-cli/pull/25605)) — **OPEN**
    Forwards `SIGTERM`/`SIGHUP` from the bootstrap parent to the spawned child process, fixing hangs when the parent is terminated by a supervisor (systemd, ACP clients).

---

## Feature Request Clusters

### Subagent Architecture & Composability
Multiple issues request richer subagent capabilities:
- **Complex input/output schemas** beyond the current simplified `AgentDefinition` ([#18280](https://github.com/google-gemini/gemini-cli/issues/18280))
- **Orchestrator‑only mode** where the main agent only delegates to subagents ([#18286](https://github.com/google-gemini/gemini-cli/issues/18286))
- **Shared memory / parallel collaboration** between subagents ([#18287](https://github.com/google-gemini/gemini-cli/issues/18287))
- **Async/background execution** of local subagents without manual `&` ([#17754](https://github.com/google-gemini/gemini-cli/issues/17754), [#17757](https://github.com/google-gemini/gemini-cli/issues/17757))
- **Origin‑aware listing** of where agents come from (project, user, extension, remote) ([#18281](https://github.com/google-gemini/gemini-cli/issues/18281))

### Sandboxing & Security
- **Zero‑dependency OS sandboxing** using native macOS `sandbox‑exec` / Linux seccomp ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873))
- **V1 post‑intent execution on macOS** ([#20046](https://github.com/google-gemini/gemini-cli/issues/20046))
- **Incremental rollout scaffolding** for sandbox architecture ([#20043](https://github.com/google-gemini/gemini-cli/issues/20043))

### ACP / Remote Agent Connectivity
- **OAuth 2.0 Dynamic Client Registration** for A2A agents ([#17604](https://github.com/google-gemini/gemini-cli/issues/17604))
- **Backgrounding remote agent calls** to avoid blocking the main agent loop ([#18197](https://github.com/google-gemini/gemini-cli/issues/18197))
- Two active PRs today directly improve ACP tool rendering and `ask_user` support.

### Internationalization
- **Global Readiness & i18n epic** ([#17814](https://github.com/google-gemini/gemini-cli/issues/17814)) — one maintainer‑tracked issue covering translation architecture for commands, help systems, and inline text.

---

## Developer Pain Points

1. **Proxy configuration regression** — `HttpsProxyAgent` constructor error (5 upvotes, 11 comments) is the most‑reported active bug. Users behind corporate proxies are blocked on versions ≥0.36.0.

2. **Windows rendering issues** — Screen flickering during scrolling affects basic navigation and file listings. No fix visible yet on the 3‑month‑old issue.

3. **Agent performance with complex shell commands** — The agent’s “magic” UI elements slow down execution of pipelines by anecdotally 100×. Users report preferring to drop to a raw shell for such tasks.

4. **Missing workspace directory lifecycle management** — No UI or command to remove stale or unwanted directories from workspace context; PR [#26179](https://github.com/google-gemini/gemini-cli/pull/26179) directly addresses this gap.

5. **Symlinks not resolved in agent discovery** — Users managing dotfiles or using symlink‑based agent registries are silently ignored. Simple fix expected but not yet merged.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest – 2026-05-08

## Today’s Update Brief
Three patch releases (v1.0.44‑0, v1.0.44‑1, v1.0.44‑2) shipped in the last 24 hours, fixing shell‑alias handling, quota display for free users, and adding a `--prerelease` flag for `copilot update`. The community remains active with 47 open issues and a steady stream of bug reports, though no pull requests were merged or updated today.

## Releases
Three versions were published on 2026‑05‑07/08:

- **v1.0.44‑2** – Added `--prerelease` argument to `copilot update` and `/update` to fetch the latest prerelease build. Fixed shell commands via `!` prefix for all shell configurations.
- **v1.0.44‑1** – Improved `!` commands to respect shell aliases and rc file settings.
- **v1.0.44‑0** – Timeline now shows the resolved model for rubber‑duck sub‑agents (e.g., `Rubber-duck(claude-opus-4.7)`). Fixed quota display for free users (no longer shows 100% used). Fixed tool permissions persisting after `/clear` in autopilot mode.

## Hot Issues (10 noteworthy)

1. **Ctrl+Shift+C clipboard broken on Linux** ([#2082](https://github.com/github/copilot-cli/issues/2082))
   *Area: platform‑linux, input‑keyboard* – Since v1.0.4, the standard Linux terminal shortcut to copy selected text no longer works inside the CLI. 18 comments, 7 👍.

2. **MCP server connection failures on Windows** ([#2282](https://github.com/github/copilot-cli/issues/2282))
   *Area: mcp* – Users on Windows (WinGet install) get “Failed to connect to MCP server” errors. Posted 9 comments.

3. **“Allow to pause copilot work”** ([#1928](https://github.com/github/copilot-cli/issues/1928))
   *Area: sessions* – Request for a way to pause a running agent session mid‑task to provide additional instructions. 8 comments, 2 👍.

4. **Vi/Vim input mode** ([#13](https://github.com/github/copilot-cli/issues/13))
   *Area: input* – Long‑standing request (opened Sep 2025) for modal editing within the interactive CLI. 6 comments but **58 👍** – the most upvoted feature request today.

5. **pwsh.exe fails to spawn on Windows** ([#2355](https://github.com/github/copilot-cli/issues/2355))
   *Area: non‑interactive, platform‑windows* – Copilot CLI’s internal PowerShell tool fails to find `pwsh.exe` even though it’s on `PATH`. 4 comments, 4 👍.

6. **BYOK status line shows wrong effort level** ([#3135](https://github.com/github/copilot-cli/issues/3135))
   *Area: models, configuration* – After upgrading to v1.0.41, using `--effort high` with a custom provider still displays “medium” in the statusline. 2 comments.

7. **`/delegate` ignores specified branch name** ([#2729](https://github.com/github/copilot-cli/issues/2729))
   *Area: agents* – When delegating work to sub‑agents, the requested source branch or branch name is disregarded. 2 comments, 2 👍.

8. **`--prompt` tokenizes on whitespace (Windows)** ([#3186](https://github.com/github/copilot-cli/issues/3186)) – *CLOSED*
   *Area: platform‑windows* – `copilot -p "multi word prompt"` exits with “too many arguments”. Reported on v1.0.44‑0 and quickly closed, likely fixed in a later release.

9. **Concurrent sub‑agent events corrupt session state** ([#2543](https://github.com/github/copilot-cli/issues/2543))
   *Area: sessions, agents* – Produces permanent `tool_use id was found without tool_result` 400 errors. 2 comments, 2 👍.

10. **Research agent cannot write report** ([#3123](https://github.com/github/copilot-cli/issues/3123))
    *Area: agents, tools* – After `/research`, the `create` tool is reported as unavailable, preventing saving the output. 1 comment, 1 👍.

## Key PR Progress
No pull requests were updated or merged in the last 24 hours. The project appears to be in a bug‑fixing phase following the three releases today.

## Feature Request Clusters
- **Modal input editing** – Vi/Vim mode (#13, 6 comments, 58 👍) and `Ctrl+Shift+C` clipboard fix (#2082) both point to keyboard‑first workflow issues.
- **Configurable system prompt / token overhead** – Users want to slim down the ~20k fixed system prompt (#2627, 4 👍).
- **Image rendering** – Support for sixel/kitty image output (#1465, 1 👍).
- **Session control** – Pause/resume (#1928), detached “REM” background process (#3190).
- **Commit attribution** – Option to remove automatic co‑author tags (#3181, #3177 – conflicting views on whether to add or remove).
- **Custom providers in ACP mode** – Environment‑variable‑based providers don’t work in `--acp` mode (#3048).

## Developer Pain Points
- **Windows / Linux platform bugs** – Clipboard broken on Linux (#2082), pwsh.exe not found (#2355), `--prompt` whitespace tokenization (#3186), WinGet installation issues (#3160).
- **MCP integration** – Servers falsely reported as “blocked by policy” (#3162), connection failures (#2282), missing `capabilities.tasks` negotiation (#2538).
- **Agent state corruption** – Concurrent sub‑agent calls corrupt session state (#2543) and orphan tool_use blocks (#3183).
- **Effort/model display glitches** – BYOK under‑reports effort (#3135), effort ignored on model switch (#3159).
- **Non‑interactive mode fragility** – Silent exits with no logs (#3189), tokenization errors (#3186).
- **Tool limitations** – `grep` times out on large repos (#2985), `\!` progress updates with `\r` not supported (#3191), blockquote rendering breaks (#3193).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-08

## Today's Update Brief
No new releases were published today. The community was active with 7 issues and 9 pull requests updated in the last 24 hours, focusing on cross-platform fixes (Windows binary metadata, macOS screenshot handling), model display accuracy, and streaming output format enhancements.

## Releases
None in the last 24 hours.

## Hot Issues

1. **#1864 – [bug] Please display the full thinking traces in Kimi CLI**
   - Author: [@YunfanZhang42](https://github.com/YunfanZhang42)
   - Workflow affected: Users reasoning with Kimi CLI cannot see the model's chain-of-thought ("thinking traces") verbatim, which limits debugging and interpretability.
   - Impact: 10 upvotes, 12 comments; this has been open since April 13.
   - URL: https://github.com/MoonshotAI/kimi-cli/issues/1864

2. **#2182 – Bug: macOS screenshot thumbnails dropped into terminal fail to attach (TemporaryItems race)**
   - Author: [@abm9111](https://github.com/abm9111)
   - Workflow affected: Dragging a floating macOS screenshot thumbnail directly into the terminal for image input fails because the temporary file disappears before the CLI can read it.
   - Impact: Core macOS workflow broken. Fix PR #2183 has been submitted.
   - URL: https://github.com/MoonshotAI/kimi-cli/issues/2182

3. **#2010 – Feature Request: Shift+Enter to insert newline in prompt input**
   - Author: [@wowlegend](https://github.com/wowlegend)
   - Workflow affected: Multi-line input in interactive mode currently requires Ctrl+J or Alt+Enter. Shift+Enter is the expected standard across modern chat UIs.
   - Impact: 1 upvote, 1 comment. Community standard expectation.
   - URL: https://github.com/MoonshotAI/kimi-cli/issues/2010

4. **#2178 – [Bug] Windows: kimi.exe v1.41.0 has blank FileVersionInfo, causing VS Code extension to reject it**
   - Author: [@Kafshi3239sty](https://github.com/Kafshi3239sty)
   - Workflow affected: Windows users who install via `uv tool install kimi-cli` and then try to use the VS Code extension get a version mismatch error because the binary's version metadata is empty.
   - Impact: Blocks Windows users from VS Code integration. PR #2181 submitted to fix.
   - URL: https://github.com/MoonshotAI/kimi-cli/issues/2178

5. **#2180 – [enhancement] kimi cli web need /task command**
   - Author: [@scially](https://github.com/scially)
   - Workflow affected: Users running `kimi web` cannot switch to deep reasoning (task) mode from the CLI's web UI, limiting the browser-based interaction scope.
   - Impact: 0 comments, no upvotes yet.
   - URL: https://github.com/MoonshotAI/kimi-cli/issues/2180

6. **#2179 – Feature Request: incremental token deltas in --print --output-format stream-json mode**
   - Author: [@FlamingoPg](https://github.com/FlamingoPg)
   - Workflow affected: Downstream tooling consuming JSONL output from print mode cannot get token-level streaming deltas, only per-turn full messages.
   - Impact: Slows real-time processing pipelines.
   - URL: https://github.com/MoonshotAI/kimi-cli/issues/2179

7. **#2175 – fix: model_display_name ignores display_name for kimi-for-coding**
   - Author: [@tears-mysthrala](https://github.com/tears-mysthrala)
   - Workflow affected: The CLI hardcodes display names for coding models, so the backend-supplied name (e.g., "Kimi-k2.6") is never shown to the user, causing confusion.
   - Impact: Misleading model identification. Fix PR #2174 submitted today.
   - URL: https://github.com/MoonshotAI/kimi-cli/issues/2175

## Key PR Progress

1. **#2183 – fix(shell): attach dropped image paths eagerly**
   - Author: [@he-yufeng](https://github.com/he-yufeng)
   - Fixes: #2182. Reads short-lived macOS screenshot files immediately upon submission instead of deferring to `ReadMediaFile`.
   - URL: https://github.com/MoonshotAI/kimi-cli/pull/2183

2. **#2181 – fix: add Windows binary version info**
   - Author: [@he-yufeng](https://github.com/he-yufeng)
   - Fixes: #2178. Generates PyInstaller version-info from `pyproject.toml` and adds CI assertions for non-empty `FileVersionInfo`.
   - URL: https://github.com/MoonshotAI/kimi-cli/pull/2181

3. **#2177 – fix(soul): clear partial UI output when LLM step is retried**
   - Author: [@7Sageer](https://github.com/7Sageer)
   - Fixes: A UI glitch where partial output from a failed LLM call remains visible when Tenacity retries, concatenating with new output.
   - URL: https://github.com/MoonshotAI/kimi-cli/pull/2177

4. **#2176 – fix(hooks): extract text from ContentPart for UserPromptSubmit hook**
   - Author: [@tears-mysthrala](https://github.com/tears-mysthrala)
   - Fixes: #2148. The `UserPromptSubmit` hook received an empty `prompt` when user input was a list of `ContentPart`, making regex matchers fail.
   - URL: https://github.com/MoonshotAI/kimi-cli/pull/2176

5. **#2174 – fix: respect model display_name for kimi-for-coding**
   - Author: [@tears-mysthrala](https://github.com/tears-mysthrala)
   - Fixes: #2175. Removes the hardcoded override so the backend's returned `display_name` (e.g., "Kimi-k2.6") is actually shown.
   - URL: https://github.com/MoonshotAI/kimi-cli/pull/2174

6. **#2138 – fix(shell): respect default shell in shell mode**
   - Author: [@bugkeep](https://github.com/bugkeep)
   - Fixes: Shell mode now uses `$SHELL` instead of hardcoded bash for Ctrl-X subprocess execution.
   - URL: https://github.com/MoonshotAI/kimi-cli/pull/2138

7. **#2139 – fix(mcp): preserve structured content and sanitize refs**
   - Author: [@bugkeep](https://github.com/bugkeep)
   - Fixes: MCP tool results now include `structured_content` as JSON; schema `$ref` siblings are cleaned.
   - URL: https://github.com/MoonshotAI/kimi-cli/pull/2139

8. **#1715 – feat(plugin): add Claude-compatible local plugin support**
   - Author: [@GTC2080](https://github.com/GTC2080)
   - Status: Closed. Adds `--plugin-dir` and auto-discovery of local Claude Plugins. Closed today without merge note.
   - URL: https://github.com/MoonshotAI/kimi-cli/pull/1715

9. **#1127 – style(web): tweak some web ui details**
   - Author: [@anxndsgn](https://github.com/anxndsgn)
   - Status: Closed. UI styling changes closed today.
   - URL: https://github.com/MoonshotAI/kimi-cli/pull/1127

## Feature Request Clusters

- **Multi-line input improvements** (Issue #2010): Users request Shift+Enter for newline, matching ChatGPT, Claude, Discord, and Slack conventions.
- **Streaming output enhancements** (Issue #2179): Demand for token-level deltas in `--print --output-format stream-json` for tooling integration.
- **Web mode command parity** (Issue #2180): Request for `/task` deep-reasoning command in the `kimi web` interface.

## Developer Pain Points

- **Windows version metadata blank** (Issue #2178): Blocks VS Code extension integration, causing a hard rejection on Windows.
- **Model display name inconsistency** (Issue #2175): Hardcoded overrides override backend intelligence, confusing users about which model version they are using.
- **UI retry output corruption** (PR #2177): Partial output from failed LLM calls remains visible when Tenacity retries, degrading the user experience.
- **macOS screenshot attachment race condition** (Issue #2182): A platform-specific bug where temporary files disappear before the CLI reads them, breaking a common macOS workflow.
- **Hook system fragility** (Issue #2148/PR #2176): `UserPromptSubmit` hooks silently receive empty prompts when user input is list-based, breaking regex-based plugin matchers.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest – 2026-05-08

## Today’s Update Brief
One patch release (v1.14.41) landed with a formatter output fix and workspace warp improvements. Community activity remains high: 50 issues and 50 pull requests were updated in the last 24 hours. The most debated topics include a regression in the bash tool (readonly property error), multiple plugin-loading failures after upgrades, and a long-standing request to display tokens per second.

## Releases
### v1.14.41
- **Bugfixes**
  - Restored formatter output handling so formatting still works when formatters write to stdout or stderr. (@ferdinandyb)
- **Improvements**
  - Warping a session to another workspace now carries over uncommitted file changes.
- **TUI Bugfix**
  - Restored custom provider… (release notes truncated in data).

## Hot Issues (10)

1. **[Feature] show tokens / second** ([#5374](https://github.com/anomalyco/opencode/issues/5374))
   *16 comments, 66 👍*
   Request to display current and average tokens/s for LLM requests to compare provider performance. Open since Dec 2025, still highly upvoted.

2. **[Question] Easier scrolling in TUI** ([#6257](https://github.com/anomalyco/opencode/issues/6257))
   *11 comments, 10 👍*
   User wants `Ctrl+E`/`Ctrl+Y` for fine‑grain scrolling instead of relying on mouse wheel or `Ctrl+X g`.

3. **Multiple system prompts break Qwen3.5 models** ([#15059](https://github.com/anomalyco/opencode/issues/15059))
   *9 comments*
   Tool‑injected extra system prompts cause Qwen3.5 models to fail. Suggests at minimum warning users when multiple prompts are present.

4. **Bash tool fails with ‘Attempted to assign to readonly property’** ([#25873](https://github.com/anomalyco/opencode/issues/25873))
   *8 comments, 1 👍*
   Regression in v1.14.34+ when `OPENCODE_EXPERIMENTAL=true` and the v2 event system is enabled. Affects all tool calls. (Mitigated by PRs #26066 & #26067).

5. **Claude Opus 4.5 eventually fails: thinking block cannot be modified** ([#13286](https://github.com/anomalyco/opencode/issues/13286))
   *8 comments, 7 👍*
   Conversations with Opus 4.5 hit validation errors because previously returned `thinking`/`redacted_thinking` blocks are altered.

6. **Bash tool hangs when command spawns background child processes** ([#20902](https://github.com/anomalyco/opencode/issues/20902))
   *7 comments, 5 👍*
   `npm run build &` style commands cause indefinite hang until the 2‑minute timeout. Session becomes unresponsive.

7. **What happened to the opencode-cli TUI?** ([#25879](https://github.com/anomalyco/opencode/issues/25879))
   *7 comments, 2 👍*
   After upgrading from v1.14.30 to v1.14.39 Debian package, the `opencode-cli` binary disappeared. User could not find release notes about the removal.

8. **Streaming response truncates at backticks with LM Studio + Qwen3.5** ([#15774](https://github.com/anomalyco/opencode/issues/15774))
   *4 comments, 4 👍*
   When `reasoning_content` is separated from `content`, the UI parser prematurely stops displaying output at any backtick in either field.

9. **Terminal flooded with raw mouse escape sequences (SGR)** ([#26198](https://github.com/anomalyco/opencode/issues/26198))
   *4 comments*
   After interrupting a command, mouse tracking remains enabled, flooding the terminal with SGR sequences instead of disabling itself.

10. **Monthly token end in 15 days?** ([#26245](https://github.com/anomalyco/opencode/issues/26245))
    *5 comments*
    Subscription user sees monthly token quota exhausted despite having 17 days remaining. Reports no ability to continue using the product.

## Key PR Progress (10)

1. **fix(cli): forward signals from npm shim** ([#26259](https://github.com/anomalyco/opencode/pull/26259))
   Closes #20899 and #17978. Propagates `SIGTERM`/`SIGINT` through the npm wrapper, preventing orphaned child processes and fixing exit code 0 on signal termination.

2. **fix(session): clone tool input before passing to EventV2 to prevent Immer freeze** ([#25867](https://github.com/anomalyco/opencode/pull/25867))
   Direct fix for #25873 – the `readonly property` error on tool calls when `OPENCODE_EXPERIMENTAL=true`.

3. **fix(build): disable minify to prevent JSC readonly property errors** ([#26066](https://github.com/anomalyco/opencode/pull/26066))
   Alternative mitigation for #25873 by disabling minification that caused the readonly property crash.

4. **fix(deps): revert effect to 4.0.0-beta.57** ([#26067](https://github.com/anomalyco/opencode/pull/26067))
   Another angle on the #25873 regression – reverts the `effect` dependency from beta.59 back to beta.57 to avoid an Immer freeze change.

5. **feat(desktop): Add Export Logs** ([#26262](https://github.com/anomalyco/opencode/pull/26262))
   Adds a desktop export logs archive (last 24h) and per‑run scoped desktop logs. Includes VS Code‑style renderer failure dialogs.

6. **feat(cli): add TUI custom provider setup** ([#25112](https://github.com/anomalyco/opencode/pull/25112))
   Adds a guided flow to configure OpenAI‑compatible endpoints directly inside the TUI provider picker.

7. **fix(opencode): resolve config entry names from config directory** ([#25987](https://github.com/anomalyco/opencode/pull/25987))
   Fixes custom agent names being derived incorrectly from file paths (closes #25713).

8. **feat(app): add markdown preview with mermaid diagram support** ([#23688](https://github.com/anomalyco/opencode/pull/23688))
   Adds Mermaid v11.4.1 rendering when viewing .md files in preview mode. Closes multiple related issues.

9. **feat(tui): add session_list_limit for session picker** ([#6138](https://github.com/anomalyco/opencode/pull/6138))
   Introduces an optional `session_list_limit` setting in `tui.json` (default 150) to cap the non‑search session picker list.

10. **fix: prevent pkill hang when close event never fires** ([#25672](https://github.com/anomalyco/opencode/pull/25672))
    Resolves #25664: resolves exit‑signal deferred on `exit` event instead of `close` to stop `pkill -f` from hanging.

## Feature Request Clusters

- **Token & usage metrics**
  Multiple requests for visible tokens/s ([#5374](https://github.com/anomalyco/opencode/issues/5374)) and conversation cost in the web interface ([#20680](https://github.com/anomalyco/opencode/issues/20680)). These reflect a desire to compare provider performance and track spending.

- **Plugin & integration stability**
  Several reports of plugins breaking after upgrades: oh‑my‑openagent not showing on Windows Desktop ([#26123](https://github.com/anomalyco/opencode/issues/26123), [#26209](https://github.com/anomalyco/opencode/issues/26209)), custom plugins showing full Windows paths ([#22119](https://github.com/anomalyco/opencode/issues/22119)), and ACP Registry agent failing in Zed ([#24061](https://github.com/anomalyco/opencode/issues/24061)). MCP server integration questions also appear ([#11391](https://github.com/anomalyco/opencode/issues/11391)).

- **UI / navigation enhancements**
  Users repeatedly ask for easier scrolling in the TUI ([#6257](https://github.com/anomalyco/opencode/issues/6257), [#7380](https://github.com/anomalyco/opencode/issues/7380)), configurable session picker limits ([#20754](https://github.com/anomalyco/opencode/issues/20754), [#6138](https://github.com/anomalyco/opencode/pull/6138)), and better visibility of subagent output in CLI mode ([#19278](https://github.com/anomalyco/opencode/issues/19278)).

- **Model / provider compatibility**
  Issues with specific models stack up: Qwen3.5 multiple system prompts ([#15059](https://github.com/anomalyco/opencode/issues/15059

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-08

## Today's Update Brief

Today saw the release of **v0.15.8** (stable) and **v0.15.8-nightly**, along with rapid iteration on CLI UX, telemetry, and sub-agent tooling. The community contributed 34 issues and 50 PRs in the last 24 hours, with notable activity around multi-line paste handling, MCP server management bugs, and the new remote-control feature stack. A significant push on **event monitoring (Phase C)** and **foreground-to-background promotion (Phase D)** continued from maintainers.

## Releases

- **[v0.15.8-nightly.20260508.0491252b2](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.8-nightly.20260508.0491252b2)** — Adds `feat(telemetry): add sensitive span attribute opt-in` by @doudouOUC, enabling operators to mark certain OpenTelemetry span attributes as sensitive for redaction.
- **[v0.15.8](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.8)** — Stable release containing tool-control E2E alignment with prior-read enforcement (test fix), and a symlink scoping fix for skills (`fix(skills): allow symlinks pointing outside the skills dir`).
- **[v0.15.7](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.7)** / **v0.15.7-preview.2** / **v0.15.7-preview.1** — Introduces `feat(core): add FileReadCache and short-circuit unchanged Reads` (performance optimization for repeated file reads) and `fix(cli): honor proxy setting`.

## Hot Issues

1. **[#3901](https://github.com/QwenLM/qwen-code/issues/3901) — [CLOSED] TUI Input triggers multiple automatic submissions on multi-line paste** (5 comments)
   When pasting multi-line code or logs into the CLI prompt, every `\n` is treated as Enter, splitting content across multiple prompts and auto-submitting each line. This breaks copy-paste workflows for users who paste test cases or error logs. Community suggested the fix is still pending confirmation.

2. **[#3881](https://github.com/QwenLM/qwen-code/issues/3881) — [OPEN] Local Qwen3.6-27b returns single `/` repeatedly until token limit** (5 comments)
   On first prompt, a locally deployed Qwen3.6-27b model produces an infinite stream of `/` characters, consuming the entire token budget. The user suspects a model compatibility issue with Qwen Code's prompt formatting. No maintainer response yet.

3. **[#3877](https://github.com/QwenLM/qwen-code/issues/3877) — [OPEN] qwen code ignores `OPENCODE_GO_API_KEY` in `~/.qwen/.env`** (3 comments)
   Despite setting the env var in the `.env` file, the startup flow forces an interactive auth selection. Users expect `.env` to be respected automatically. This affects headless/scripted deployments.

4. **[#3758](https://github.com/QwenLM/qwen-code/issues/3758) — [OPEN] Request for sub-agent to show full reasoning/thinking output** (2 comments)
   Currently `Ctrl+E` only shows tool call history for sub-agents. The requester wants insight into the model's thought process (like the main session) to debug sub-agent mistakes. Sympathetic community upvotes.

5. **[#3634](https://github.com/QwenLM/qwen-code/issues/3634) — [OPEN] Background task management: roadmap and next steps** (2 comments)
   Maintainer @wenshao provides an architectural note: Phase A (background agent resume) merged; Phase B (background continuation) merged; Phase C (event monitoring, see PR #3684) landed; Phase D (foreground→background promote) in progress via PR #3894. This is the tracking issue.

6. **[#3829](https://github.com/QwenLM/qwen-code/issues/3829) — [OPEN] Can't paste images on Wayland** (2 comments)
   Regression of earlier issue #2885. User on Wayland with `xdg-utils` and `wl-clipboard` installed still cannot paste images. Affects Linux Wayland users heavily; no root cause confirmed yet.

7. **[#3936](https://github.com/QwenLM/qwen-code/issues/3936) — [OPEN] Russian text displays as broken characters** (1 comment)
   The TUI renders mojibake for Cyrillic text in chat responses. Likely a font/encoding issue in Ink components. One report but could signal broader i18n gaps.

8. **[#3925](https://github.com/QwenLM/qwen-code/issues/3925) — [OPEN] Monitor tool notifications misrouted when called by sub-agent** (1 comment)
   When a sub-agent uses the `Monitor` tool, stdout/stderr notifications go to the main agent instead of the sub-agent's session panel. This breaks sub-agent observability — a core use case for #3634 Phase C.

9. **[#3899](https://github.com/QwenLM/qwen-code/issues/3899) — [OPEN] Ctrl+O toggle freezes CLI in long conversations** (1 comment)
   Switching from compact to verbose mode (`Ctrl+O`) on sessions with many turns causes the terminal to hang for seconds. @chiga0 already submitted fix PR #3905 (see below).

10. **[#3895](https://github.com/QwenLM/qwen-code/issues/3895) — [OPEN] MCP health pill not refreshed after disabling MCP server via `/mcp` command** (1 comment)
    The footer pill still shows "1 MCP offline" even after intentional disable. Workaround exists via `mcp tool authenticate` / `clear authentication`, but the UI feedback is misleading.

## Key PR Progress

1. **[#3929](https://github.com/QwenLM/qwen-code/pull/3929) — [OPEN] feat(cli): add remote-control foundation**
   PR 1 of 3 stacked PRs. Adds design doc and fixes `stream-json` interrupt lifecycle so sessions survive interrupts. Enables future remote agent orchestration.

2. **[#3930](https://github.com/QwenLM/qwen-code/pull/3930) — [OPEN] feat(cli): add remote-control worker server**
   PR 2 of 3. Implements local HTTP/WebSocket server for remote control, with pairing/auth mechanics. Designed for headless and CI integration.

3. **[#3931](https://github.com/QwenLM/qwen-code/pull/3931) — [OPEN] feat(cli): attach remote-control to current TUI**
   PR 3 of 3. Wires the remote-control server into the interactive TUI session, allowing external clients to send commands.

4. **[#3894](https://github.com/QwenLM/qwen-code/pull/3894) — [OPEN] feat(core): foreground → background promote integration**
   Part of Phase D for background tasks (#3831). `Ctrl+B` during a running foreground shell promotes it to background, snapshotting output to `bg_xxx.output`. Builds on `signal.reason` infrastructure.

5. **[#3589](https://github.com/QwenLM/qwen-code/pull/3589) — [OPEN] feat(tools): add ToolSearch for on-demand loading of deferred tool schemas**
   Reduces default tool-declaration size by marking MCP and low-frequency built-ins as deferred. The model fetches schemas on demand via `ToolSearch`. Significant context window savings.

6. **[#3598](https://github.com/QwenLM/qwen-code/pull/3598) — [OPEN] feat(cli): add --json-schema for structured output in headless mode**
   New flag for `qwen -p` that enforces the model to call a synthetic `structured_output` tool matching the user-supplied JSON schema. Enables reliable structured data extraction.

7. **[#3905](https://github.com/QwenLM/qwen-code/pull/3905) — [OPEN] fix(cli): unfreeze Ctrl+O compact-mode toggle on long conversations**
   Fixes #3899. Root cause: `clearTerminal` + `<Static>` remount in the toggle handler was synchronous. Now uses incremental rendering to avoid freezes.

8. **[#3115](https://github.com/QwenLM/qwen-code/pull/3115) — [CLOSED] feat: add commit attribution with per-file AI contribution tracking**
   Merged. Adds `Co-authored-by: Qwen Code` trailers to git commits, with per-file percentage tracking in `Co-authored-by` footer. Enables compliance audits for AI-generated code.

9. **[#3864](https://github.com/QwenLM/qwen-code/pull/3864) — [OPEN] refactor(cli): provider-first auth registry with unified install pipeline**
   Unifies API key, OAuth, coding plan, and token plan auth into a single provider configuration pipeline. Improves consistency and reduces code duplication.

10. **[#3897](https://github.com/QwenLM/qwen-code/pull/3897) — [OPEN] perf(core): bound session-list metadata reads to head/tail 64KB; pool buffer; lazy message count**
    Fixes `/resume` open-time scaling with total disk bytes. Instead of full-file `readline`, reads only the first/last 64KB for metadata. Buffers pooled; message count computed lazily. Significant performance gain for large session databases.

## Feature Request Clusters

- **Sub-agent observability & debugging**
  Multiple requests (#3758, #3924, #3925) ask for sub-agent TODO list visibility, full reasoning output, and proper notification routing. The community finds sub-agents a black box during debugging.

- **Input editing & text selection in TUI**
  Issues #3901 and #3926 highlight gaps: no multi-line paste safety, no `Ctrl+Backspace` word delete, no text selection. Users want an editor-like input experience.

- **Local model compatibility & error handling**
  #3881 (infinite `/`), #3888 (stream ends without finish reason), and #3920 (model-unloaded retry) all point to fragility when using local/vllm servers. Users request better error recovery.

- **Internationalization (i18n) & RTL text support**
  #3936 (Russian mojibake) and the ongoing i18n effort (#3871) show demand for full Unicode rendering. The i18n PR adds coverage for built-in UI strings, but rendering fixes are separate.

## Developer Pain Points

- **MCP server management bugs** — #3895 (health pill not refreshing), #3937 (add/remove doesn't persist), and #3718 (headers not saved) suggest the MCP configuration layer has instability issues across multiple CLI operations.
- **API key / env config not respected on startup** — #3877 and #3914 show that the auth flow sometimes ignores `.env` files or reports connection errors even when keys are valid. This breaks automated and headless setups.
- **UI freeze on long sessions** — #3899 (Ctrl+O freeze) and #3901 (multi-line paste) degrade the interactive UX for power users who work with large codebases or long conversations.
- **Telemetry & debug correlation** — #3847 and #3917 request better OpenTelemetry integration, with trace/span IDs injected into debug logs for root cause analysis. Maintainers are responding with PRs (#3847) and issue responses.

</details>