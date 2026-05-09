# AI CLI Tools Community Digest 2026-05-09

> Generated: 2026-05-09 02:04 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Tool Comparison — 2026-05-09

## 1. Daily Cross-Tool Overview

Today's activity across the seven tracked AI CLI tools shows two distinct camps: Claude Code and Qwen Code shipped stable releases (the former an emergency Windows hotfix), while Kimi Code and Codex advanced substantive structural changes through open PRs. Windows compatibility remains the dominant cross-cutting friction, with Claude Code's extension saga producing 10+ duplicate bug reports, Kimi Code filing 7 Windows-specific issues in a single day, and Copilot, Gemini, and OpenCode each logging multiple platform-specific regressions. On the positive side, memory/context compaction reliability improvements and MCP tool connectivity fixes are under active development across at least four tools simultaneously.

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Active | Release Status |
|---|---|---|---|
| **Claude Code** | 50 | 8 | v2.1.137 (emergency hotfix) + v2.1.136 |
| **OpenAI Codex** | ~20 (top 10 notable) | 10 | v0.130.0 (stable) + 6 alpha builds |
| **Gemini CLI** | 50 | 10 | No release (50 PRs active) |
| **Copilot CLI** | 35 | 2 | v1.0.44 (stable) |
| **Kimi Code** | 13 (new) | 10 | No release |
| **OpenCode** | 50 | 10 | No release (50 PRs active) |
| **Qwen Code** | ~12 (top 10 notable) | 10 | v0.15.9 (stable) + nightly build |

All seven tools had active issue and PR development today. Claude Code, Gemini CLI, and OpenCode show the highest raw issue/PR counts. Claude Code and Qwen Code shipped stable releases; Codex shipped a stable plus multiple alphas; Copilot shipped a stable patch release.

## 3. Shared Feature Directions

| Feature Need | Affected Tools | Specific Requirements |
|---|---|---|
| **Memory/Context Compaction Reliability** | Claude Code, Codex, Gemini, Qwen Code | Claude Code: memory not consulted after compaction (#57486). Codex: goals continuation prompt lost mid-compaction (#19910). Gemini: infinite compression loop PR (#23946). Qwen Code: reactive compression on overflow PR (#3879). |
| **Windows Compatibility & Shell Parity** | Claude Code, Kimi Code, Copilot, Gemini | Claude Code: extension activation fails from Linux CI paths. Kimi Code: 7 Win-specific bugs; PR to switch from PowerShell to git-bash (#2186). Copilot: PowerShell security alerts (#1412), `$home` footgun (#3098). Gemini: zombie process fixes, path handling. |
| **MCP Tool Connectivity in Sub-Agent Contexts** | Claude Code, Codex, Copilot, OpenCode | Copilot: custom agents lack MCP tools in sub-agent mode (#2630). Codex: OAuth resource indicator missing (#13891). OpenCode: MCP auto-reconnect PR (#25670). Claude Code: MCP blocked on HTTPS (#51599). |
| **Agent Lifecycle & Session State** | Claude Code, Codex, Gemini, Copilot | Codex: conversation history loss (#18993). Gemini: subagent false success on MAX_TURNS (#22323). Copilot: concurrent sub-agent corruption (#2543). Claude Code: memory leak 108GB+ on macOS (#56960). |
| **Terminal UI Rendering Quality** | Copilot, Gemini, Qwen Code | Copilot: emoji table misalignment (#3205), markdown link breaks (#3204). Gemini: Apple Terminal block chars (#23918), ghost text wrap infinite loop (#26324). Qwen Code: broken Russian text (#3936), infinite render loop (#3838). |

The **memory/context compaction** cluster is the strongest shared signal: four different tools have active issues or PRs addressing the same fundamental problem — automatic context compression dropping active instructions, leading to repeated mistakes or derailed workflows.

## 4. Differentiation Analysis

**Release Cadence**: Claude Code and Qwen Code ship stable releases frequently (Claude Code: two releases today, one an emergency hotfix within hours). Codex ships alpha builds alongside stable. Copilot ships patch releases. Gemini and OpenCode have no releases today despite high PR activity, suggesting longer development cycles.

**Target Focus**:
- **Claude Code** — Enterprise reliability and model behavior: Opus regression tracking (#57485), hardcoded CI paths, enterprise telemetry (OTEL survey flag). Heaviest emphasis on Windows stability among all tools.
- **Codex** — Desktop application parity: Remote development (#10450, 644 👍), Computer Use on Windows (#19305), Chrome plugin availability (#21598). Strongest community demand signals (high upvote counts).
- **Gemini CLI** — Agent architecture innovation: `/fork` session branching (PR #26618), scheduled agent delegation model (PR #26717), AST-aware codebase navigation (#22745). Most experimental among the group.
- **Copilot CLI** — BYOK/external model ecosystem: Custom provider support (#3195), agent loop behavior (#3209). Strongest emphasis on third-party model integration.
- **Kimi Code** — Windows structural overhaul: Actively refactoring Shell backend from PowerShell to git-bash (#2186), suppressing console windows (#2199). Most aggressive Windows-first fixes.
- **OpenCode** — Server architecture modernization: Effect HttpApi backend refactoring (multiple PRs from @kitlangton), MCP auto-reconnect, workspace sync fence protocol. Heaviest server-side infrastructure work.
- **Qwen Code** — Infrastructure optimization: CI matrix test reduction (#3943), tool schema on-demand loading (PR #3589, ~15K token savings), daemon mode (PR #3889). Strongest internal development productivity focus.

**Technical Approach Differences**:
- Claude Code uses a tightly coupled extension.js bundling strategy (root cause of Windows bugs).
- Kimi Code is structurally replacing PowerShell with git-bash — a fundamental shell architecture change.
- OpenCode is moving from Hono to Effect HttpApi for its server.
- Qwen Code introduces `ToolSearch` for on-demand schema loading to reduce prompt size.
- Gemini adds `/fork` for session branching — unique among the tools.

## 5. Community Activity Notes

**Highest raw activity**: Claude Code, Gemini CLI, and OpenCode each show 50 issues updated in the last 24 hours. Claude Code also had 8 PRs, Gemini had 10, OpenCode had 10. Qwen Code and Codex had approximately 12-20 notable issues each.

**Most responsive maintainer response**: Claude Code shipped an emergency hotfix (v2.1.137) within hours of a critical Windows regression. Qwen Code and Codex resolved multiple issues today (closed high-profile bugs). Copilot shipped a stable patch. Gemini and OpenCode have active PRs but no releases today.

**Highest community engagement**:
- Qwen Code's OAuth free tier policy change (#3203, 122 comments) — the single most active thread today across all tools, indicating strong user sensitivity to pricing changes.
- Claude Code's Windows extension saga produced 10+ duplicate bug reports, suggesting users were actively testing and reporting — high engagement but frustrating for all parties.
- Codex's Remote Development request (#10450, 644 👍, 174 comments) continues as the highest-upvoted cross-tool feature request.

**Most notable absence**: No Copilot hot issues show maintainer responses or closures today, despite real bugs like silent exit in non-interactive mode (#3189) and rendering regressions (#3205, #3204).

## 6. Evidence-Backed Observations

**1. Windows compatibility is the single largest cross-tool pain point, but approaches diverge.**
Seven Windows-specific issues from Kimi Code, 10+ from Claude Code, plus reports from Copilot, Gemini, and OpenCode. Kimi Code is structurally switching from PowerShell to git-bash (#2186). Claude Code's Windows problems stem from a CI build path bug in bundling. This suggests the Windows experience lags significantly behind macOS across every tool in the ecosystem, but the root causes (shell choice, bundling process, environment variable handling) vary by tool architecture.

**2. Memory and context compaction reliability is a shared unsolved problem.**
Four tools (Claude Code #57486, Codex #19910, Gemini PR #23946, Qwen Code PR #3879) have active work addressing compaction dropping active context. Two distinct failure modes appear: (a) compaction removes instructions/goals that the agent should preserve, and (b) compaction triggers infinite loops when it fires during active processing. Neither has a widely adopted solution, though proposals range from reactive retry (Qwen Code) to explicit memory consultation after compaction (Claude Code) to preventing simultaneous compaction calls (Gemini).

**3. Terminal rendering quality regressions are recurring and platform-specific.**
Copilot, Gemini, and Qwen Code each report rendering bugs today (emoji alignment, ghost text loops, broken Unicode, infinite scroll). These are not novel issues — many reference earlier regressions that were "fixed" but returned (#2764 on Copilot, #20136 replaced by #23956 on Gemini). Terminal UI quality appears to be a losing battle as features like streaming, markdown tables, and emoji interact in complex ways across terminal emulators.

**4. The demand for custom/third-party model support is growing but implementation is fragmented.**
Codex, Copilot, and Qwen Code all have issues about non-standard model providers (OpenRouter, vLLM, LM Studio, Bedrock Mantle). The specific friction points differ: Qwen Code overwrites user config (#3740), Codex has MCP OAuth issues (#13891), Copilot has reasoning field name mismatches (#3195). Users clearly want to bring their own models, but each tool's authentication, tool calling, and schema handling creates unique compatibility barriers.

**5. No clear cross-tool signal on agent marketplace or sharing features.**
Only OpenCode explicitly mentions an agent marketplace request (#7467). Other tools have implicit sharing (plugin hooks in Codex, custom skills in Gemini) but no community-driven marketplace demand appears across multiple tools today. This may be an early-stage need that hasn't diffused yet.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-05-09

## Today's Update Brief

A critical Windows VS Code extension activation bug introduced in v2.1.136 was patched hours later in v2.1.137, generating a flurry of duplicate bug reports and rapid maintainer response. The community also surfaced ongoing concerns around memory leaks in long-running CLI sessions, Cowork mode reliability, and gaps in the memory/compaction workflow. Activity remains high with 50 issues updated in the last 24 hours and 8 pull requests.

## Releases

Two versions shipped in the last 24 hours:

- **[v2.1.137](https://github.com/anthropics/claude-code/releases/tag/v2.1.137)** — Emergency fix for the Windows VS Code extension activation failure introduced in v2.1.136. The extension was unable to activate on Windows due to a hardcoded Linux CI build path (`/home/runner/work/...`) in the bundled `extension.js`.
- **[v2.1.136](https://github.com/anthropics/claude-code/releases/tag/v2.1.136)** — Added `CLAUDE_CODE_ENABLE_FEEDBACK_SURVEY_FOR_OTEL` environment variable for enterprise OpenTelemetry feedback capture. Introduced `settings.autoMode.hard_deny` for unconditional auto-mode classifier blocking rules.

## Hot Issues

1. **[#56555 — VS Code extension command 'openLast' not found on Windows](https://github.com/anthropics/claude-code/issues/56555)** *(CLOSED)* — Clicking the Claude Code button in the VS Code sidebar produced `command 'claude-vscode.editor.openLast' not found`. Affected Windows users after v2.1.129. 19 comments, 6 👍. Resolved in v2.1.137.

2. **[#48806 — Claude in Chrome + Control Chrome Failures in Cowork Mode](https://github.com/anthropics/claude-code/issues/48806)** *(OPEN)* — Cowork mode integration with the Chrome browser extension fails, breaking cross-application agent workflows. 22 comments, 3 👍. Active discussion, no resolution yet.

3. **[#45390 — 1M context incorrectly requires extra usage on Max plan](https://github.com/anthropics/claude-code/issues/45390)** *(OPEN)* — Max plan users report being prompted for "Extra usage" when selecting Opus 4.6 with 1M context, despite the feature being included in the plan. 16 comments, 18 👍. High community interest.

4. **[#49917 — Windows Desktop installer fails with 0x80073CF6 after partial install](https://github.com/anthropics/claude-code/issues/49917)** *(OPEN)* — The MSIX package leaves the app in an inconsistent state after a failed install, blocking reinstallation. Requires manual cleanup. 13 comments, 1 👍.

5. **[#17312 — LSP Tool Returns Empty Results on Windows](https://github.com/anthropics/claude-code/issues/17312)** *(OPEN)* — LSP queries return empty despite the LSP server responding correctly. Windows-specific, affects language-aware code analysis in the CLI. 10 comments, 8 👍. Long-standing issue since January.

6. **[#51599 — Claude in Chrome MCP blocked on all HTTPS sites](https://github.com/anthropics/claude-code/issues/51599)** *(OPEN)* — `org_policy: "block"` prevents the Claude browser extension from functioning on any HTTPS site. Blocks web automation via MCP. 4 comments, 1 👍.

7. **[#56960 — Severe memory leak: 108GB on M5 Max macOS](https://github.com/anthropics/claude-code/issues/56960)** *(OPEN)* — The `claude` Node.js process exhibits unbounded memory growth during sessions, reaching 108GB+ and triggering macOS crash dialogs. 3 comments. Related to #56693 (113GB observed on 24GB MacBook).

8. **[#57485 — Opus 4.7 regression: agents ignore CLAUDE.md directives](https://github.com/anthropics/claude-code/issues/57485)** *(OPEN)* — Model behavior regression where Opus 4.7 agents spawn in wrong worktrees, ignore project configuration, and write code against stale assumptions. 2 comments.

9. **[#57486 — Memory system not consulted after context compaction](https://github.com/anthropics/claude-code/issues/57486)** *(OPEN)* — After context compaction, Claude Code fails to consult its own memory system before acting, leading to repeated mistakes (e.g., VPS connection info dropped). 2 comments.

10. **[#56423 — Tool outputs expanded by default, no collapse setting](https://github.com/anthropics/claude-code/issues/56423)** *(OPEN)* — Recent update forced all tool outputs (Read, Edit, Bash, etc.) to render fully expanded, making long sessions with many file reads very hard to navigate. Users request a collapsible setting. 2 comments, 1 👍.

## Key PR Progress

1. **[#56784 — Pin GitHub Actions to commit SHAs](https://github.com/anthropics/claude-code/pull/56784)** *(CLOSED)* — Security hardening: pins all third-party GitHub Actions to immutable commit SHAs instead of version tags, preventing supply-chain attacks.

2. **[#57267 — Fix pagination in stale issue auto-close sweep](https://github.com/anthropics/claude-code/pull/57267)** *(OPEN)* — Adds a paginated GitHub API helper to the stale issue auto-close workflow, ensuring all qualified issues are considered for closure rather than just the first page.

3. **[#57199 — Use --body-file to preserve newlines in code-review summary](https://github.com/anthropics/claude-code/pull/57199)** *(OPEN)* — Fixes a `gh pr comment` shell quoting issue in the code-review skill where multi-line summaries were being truncated or corrupted.

4. **[#57223 — Add Superpowers Process Gate to frontend-design skill](https://github.com/anthropics/claude-code/pull/57223)** *(CLOSED)* — Introduces a Process Gate enforcing the Superpowers methodology (brainstorm → plan → visual TDD → review) before implementation begins.

5. **[#57190 — Remove 'statsig.anthropic.com' from firewall script](https://github.com/anthropics/claude-code/pull/57190)** *(OPEN)* — Cleans up the enterprise firewall configuration script by removing a stale, unresolvable statsig endpoint (`statsig.anthropic.com`).

6. **[#14842 — Update documentation links to new Claude Code site](https://github.com/anthropics/claude-code/pull/14842)** *(OPEN)* — Redirects all legacy documentation URLs to the new `code.claude.com` site. Long-running PR, still open.

7. **[#34735 — CI: update actions](https://github.com/anthropics/claude-code/pull/34735)** *(OPEN)* — General CI dependency updates for GitHub Actions.

8. **[#57333 — Update README.md](https://github.com/anthropics/claude-code/pull/57333)** *(OPEN)* — General README maintenance update.

## Feature Request Clusters

**Memory system improvements** — Multiple requests center on memory consistency: [#57486](https://github.com/anthropics/claude-code/issues/57486) asks for automatic memory consultation after compaction, [#44098](https://github.com/anthropics/claude-code/issues/44098) requests configurable memory/CLAUDE.md paths in Cowork mode. Users want memory to survive compaction and be shared across sessions.

**Cowork mode configurability** — [#44098](https://github.com/anthropics/claude-code/issues/44098) requests exposing memory and config paths in Cowork mode. Users need granular control over how Cowork sessions inherit settings from their parent project, rather than using defaults.

**Documentation gaps** — [#57447](https://github.com/anthropics/claude-code/issues/57447) reports that slash command docs omit mid-input autocomplete behavior. Users rely on tab-completing `/` commands mid-typing, but this is undocumented.

## Developer Pain Points

**Windows VS Code extension saga** — The v2.1.129 → v2.1.136 releases repeatedly broke Windows VS Code extension activation through hardcoded Linux CI paths in the bundled `extension.js`. At least **10 distinct issues** were filed in the last 24 hours alone ([#57495](https://github.com/anthropics/claude-code/issues/57495), [#57479](https://github.com/anthropics/claude-code/issues/57479), [#57488](https://github.com/anthropics/claude-code/issues/57488), [#57500](https://github.com/anthropics/claude-code/issues/57500), [#57503](https://github.com/anthropics/claude-code/issues/57503), [#57499](https://github.com/anthropics/claude-code/issues/57499), [#57476](https://github.com/anthropics/claude-code/issues/57476), [#57475](https://github.com/anthropics/claude-code/issues/57475), [#57474](https://github.com/anthropics/claude-code/issues/57474), [#56555](https://github.com/anthropics/claude-code/issues/56555)). Each regression was identical: the build pipeline emitted a Linux `file:///home/runner/...` path into the Windows extension bundle. The v2.1.137 hotfix resolved this.

**Memory leaks on macOS** — Two reports ([#56960](https://github.com/anthropics/claude-code/issues/56960), [#56693](https://github.com/anthropics/claude-code/issues/56693)) independently observed Claude Code CLI Node.js processes consuming 108–113 GB on machines with 24 GB RAM, causing macOS crash dialogs. Long-running sessions appear to leak memory unboundedly.

**MCP reliability issues** — [#38762](https://github.com/anthropics/claude-code/issues/38762) reports the `/mcp` dialog renders empty despite properly configured servers. [#51599](https://github.com/anthropics/claude-code/issues/51599) blocks MCP entirely on HTTPS sites. Both suggest MCP as a surface area with persistent UX and permission bugs.

**Authentication churn** — [#57009](https://github.com/anthropics/claude-code/issues/57009) reports web sessions losing GitHub push access mid-project, requiring re-authentication during active work.

**UI/UX regressions** — [#56423](https://github.com/anthropics/claude-code/issues/56423) reports forced expansion of tool outputs making session navigation painful. [#57510](https://github.com/anthropics/claude-code/issues/57510) reports a dead viewport space bug in the TUI after closing detail panels. [#47987](https://github.com/anthropics/claude-code/issues/47987) reports the Rewind/Summarize workflow dropping messages instead of preserving them.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-09

## Today’s Update Brief

A new `rust-v0.130.0` release shipped with plugin sharing enhancements and a dedicated `codex remote-control` entrypoint, while the team continues to iterate on transient alpha builds. Community attention remains high around remote development support (issue #10450, 174 comments, 644 👍) and a phone verification bug (#20161, 101 comments). On the codebase side, several structural PRs refactor core state management and sandbox test coverage.

## Releases

- **[rust-v0.130.0](https://github.com/openai/codex/releases/tag/v0.130.0)** — New features:
  - Plugin details now show bundled hooks; plugin sharing exposes link metadata and discoverability controls (PRs [#21447](https://github.com/openai/codex/pull/21447), [#21495](https://github.com/openai/codex/pull/21495), [#21637](https://github.com/openai/codex/pull/21637)).
  - Added `codex remote-control` as a simpler entrypoint for starting a headless, remotely controllable app-server ([#21424](https://github.com/openai/codex/pull/21424)).
  - App-server clients can … (truncated in source).
- Several alpha releases (0.130.0-alpha.3, .4, .5, .7, .10 and 0.131.0-alpha.1) are listed but contain no changelog details.

## Hot Issues (Top 10 Noteworthy)

1. **[#10450 – Remote Development in Codex Desktop App](https://github.com/openai/codex/issues/10450)** — *[OPEN, enhancement, app]*
   Massive demand: 644 👍, 174 comments. User requests native remote workspace support (SSH, dev containers) in the desktop app, citing the limitation compared to VS Code Remote. The maintainer team has acknowledged but no roadmap commitment.

2. **[#20161 – Phone number verification doesn’t work](https://github.com/openai/codex/issues/20161)** — *[CLOSED, bug, auth]*
   101 comments. SSO login triggers an unexpected phone prompt that blocks access. High frustration. Closed today (2026-05-09), likely resolved.

3. **[#8259 – Format Markdown tables for human readability](https://github.com/openai/codex/issues/8259)** — *[OPEN, enhancement, TUI]*
   31 comments, 115 👍. Codex-generated Markdown tables lack proper whitespace alignment. Minor but persistent quality-of-life ask.

4. **[#20552 – Toggle File Tree unreliable in Codex App](https://github.com/openai/codex/issues/20552)** — *[OPEN, bug, app]*
   27 comments. macOS desktop: `View > Toggle File Tree` doesn’t reliably show the file tree. Frustrates users navigating projects.

5. **[#18993 – Unable to open past conversation history in VS Code extension](https://github.com/openai/codex/issues/18993)** — *[OPEN, bug, extension, regression, session]*
   24 comments. Regression affecting Plus users on Windows; conversation list fails to load. Duplicate reports in [#19478](https://github.com/openai/codex/issues/19478) (12 comments).

6. **[#19910 – Goals continuation prompt lost after mid-turn compaction](https://github.com/openai/codex/issues/19910)** — *[OPEN, bug, context]*
   12 comments. Active goal context can be dropped when compact triggers mid-task. Affects the newer Goals feature praised as “life changing.”

7. **[#16889 – Usage limit consumed ~10x faster (bug)](https://github.com/openai/codex/issues/16889)** — *[CLOSED, bug, rate-limits, app]*
   10 comments. Desktop/CLI: one message consumes ~6% of a 5h window. Likely a counting bug; closed after fix.

8. **[#19305 – Full Computer Use support for Windows Desktop](https://github.com/openai/codex/issues/19305)** — *[OPEN, enhancement, windows-os, app, computer-use]*
   10 comments, 14 👍. Request to extend Computer Use (already on macOS) to native Windows desktop workflows.

9. **[#13891 – codex mcp login omits OAuth resource indicator](https://github.com/openai/codex/issues/13891)** — *[OPEN, bug, auth, mcp]*
   9 comments. MCP login request missing `resource` parameter, causing wrong token audience. Blocks some MCP integrations.

10. **[#21671 – /compact fails with unknown service_tier parameter in 0.129.0](https://github.com/openai/codex/issues/21671)** — *[CLOSED, bug, regression]*
    6 comments. Regression introduced in 0.129.0; `/compact` crashes. Closed today.

Also notable: [#21598](https://github.com/openai/codex/issues/21598) (Chrome plugin unavailable in Norway/EU on Windows), [#21746](https://github.com/openai/codex/issues/21746) (token usage spike from extra LLM calls).

## Key PR Progress (Top 10 Important)

1. **[#21866 – Split ChatWidget state into focused modules](https://github.com/openai/codex/pull/21866)** — *[OPEN]*
   Major refactor of the monolithic `ChatWidget` state into separate domains (transcript, turn lifecycle, input, status, etc.). Improves reasoning and modularity for future changes.

2. **[#21844 – Ignore stale /tmp git markers in project discovery](https://github.com/openai/codex/pull/21844)** — *[OPEN]*
   Prevents world-writable sticky directories (e.g. `/tmp`) from being misidentified as git repos. Includes regression test for `get_git_repo_root`.

3. **[#21845 – tests: characterize macOS sandbox link writes](https://github.com/openai/codex/pull/21845)** — *[OPEN]*
   Follow-up to #21819: directly tests the macOS workspace-write sandbox for hard link behavior.

4. **[#21819 – tests: cover sandbox link write behavior](https://github.com/openai/codex/pull/21819)** — *[OPEN]*
   Adds integration coverage for `apply_patch` and `fs/writeFile` inside a sandbox when file paths involve link aliases.

5. **[#21854 – fix: preserve empty JSON schemas for tool parameters](https://github.com/openai/codex/pull/21854)** — *[OPEN]*
   MCP and dynamic tools rely on `{}` to mean unconstrained values; the schema sanitizer was incorrectly narrowing it to `string`. Fix restores flexibility.

6. **[#21290 – Move file watcher out of core](https://github.com/openai/codex/pull/21290)** — *[CLOSED]*
   Moves the generic filesystem watcher from `codex-core` into a separate crate, keeping core focused on thread execution. Merged.

7. **[#21860 – Persist /goal commands in history](https://github.com/openai/codex/pull/21860)** — *[OPEN]*
   `/goal` slash commands were not saved to TUI command history. Now appended on successful invocation.

8. **[#21856 – Tighten goal continuation prompt](https://github.com/openai/codex/pull/21856)** — *[OPEN]*
   Updates the goal continuation prompt to address early adopter feedback: explicit persistence, evidence grounding, multi-step progress visibility, stronger completion audits.

9. **[#21861 – Apply sandbox context to local view_image reads](https://github.com/openai/codex/pull/21861)** — *[OPEN]*
   Creates a selected-cwd filesystem sandbox for `view_image` metadata and reads, closing a sandbox gap. Includes regression test.

10. **[#21857 – Defer fresh TUI startup hydration](https://github.com/openai/codex/pull/21857)** — *[OPEN]*
    Splits synchronous bootstrap from interactive thread start, deferring primary thread creation to reduce startup latency and remove provisional state.

Also closed today: [#21847](https://github.com/openai/codex/pull/21847) (no more destructive SQLite version bumps), [#21652](https://github.com/openai/codex/pull/21652) (move skills watcher to app-server), [#21840](https://github.com/openai/codex/pull/21840) (add Bedrock Mantle client agent header).

## Feature Request Clusters

- **Remote / SSH Development** – Multiple high-upvoted issues ask for first-class remote workspace support in the Desktop app (#10450, #21509) and full Computer Use on Windows (#19305). Community clearly wants Codex to match VS Code Remote capabilities.
- **MCP / Auth Improvements** – OAuth resource indicator missing (#13891), Bedrock Mantle endpoint incorrect (#21352). Developers integrating custom MCP providers face token and path hurdles.
- **Conversation History Reliability** – Two separate reports (#18993, #19478) about VS Code extension failing to load past conversations. Recurring issue across platforms.
- **Goals Feature Refinement** – Continuation prompts lost after compaction (#19910) and new PRs improving prompt wording (#21856) show the feature is still maturing.
- **Windows Desktop Parity** – Chrome plugin gating (#21598), duplicate paste (#21638), excessive git commands (#20567), and missing Computer Use (#19305) highlight Windows as a secondary citizen.

## Developer Pain Points

- **Conversation history loss** in VS Code extension remains unresolved (issues #18993, #19478). Users report seeing blank history panels after updates or session restarts.
- **Rate limit / token accounting** bugs (#16889, #21746) cause confusion. Users see disproportionate consumption without clear cause.
- **Compaction / context loss** (#19910, #18720, #21671) – `/compact` or auto-compact can drop active goal instructions or critical task details, derailing multi-step workflows.
- **Windows-specific regressions** – Frequent reports of desktop app problems (file tree, paste, git spawning, Chrome plugin unavailability) indicate the Windows build lags in stability.
- **Sandbox and hook gaps** – Inconsistent `PreToolUse` hook coverage (#20204) and unsandboxed `view_image` reads (#21861) suggest security boundaries still have rough edges.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-09

## Today's Update Brief
Active day with 50 open issues and 50 PRs updated in the last 24 hours, though no new releases were published. The maintainer team is heavily active on Auto Memory bugs, agent configuration issues, and Windows process stability. Several high-priority PRs targeting infinite loops, tool limit errors, and permission regressions are nearing readiness.

## Releases
No new releases in the last 24 hours.

---

## Hot Issues (10 noteworthy)

[#21925](https://github.com/google-gemini/gemini-cli/issues/21925) — **Hand icon falsely signals required action** (16 comments)
*Workflow:* Long-running shell scripts trigger the "Action required" UI indicator even when no user input is needed.
*Impact:* Misleading UX; users may interrupt legitimate automation.
*Community:* Author `@jacob314` suspects timeout heuristics in shell execution, not user input detection. No maintainer triage label indicates high priority.

[#20005](https://github.com/google-gemini/gemini-cli/issues/20005) — **Silent .env omission in untrusted workspaces causes misleading auth error** (8 comments)
*Workflow:* Users with `GEMINI_API_KEY` in `.env` get a confusing auth failure if their workspace is untrusted.
*Impact:* Hidden failure mode — the CLI silently skips loading the environment file, producing a non-obvious error.
*Community:* Tagged `status/need-information`. Several users have reproduced on fresh projects.

[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — **Subagent reports GOAL success after hitting MAX_TURNS** (6 comments)
*Workflow:* `codebase_investigator` subagent reports `status: "success"` with `Termination Reason: "GOAL"` even when it hit the turn limit and did no actual analysis.
*Impact:* Users are misled into thinking analysis completed successfully.
*Community:* `@matei-anghel` provided detailed reproduction with two repos. High-urgency (`priority/p1`).

[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — **Gemini does not use custom skills and sub-agents unless explicitly told** (6 comments)
*Workflow:* User-defined "gradle" and "git" skills are ignored during autonomous execution.
*Impact:* Sub-agent/Skill feature underutilized; users must manually trigger capabilities.
*Community:* Anecdotal but multiple users corroborate. Tagged `kind/bug` with `status/need-retesting`.

[#26563](https://github.com/google-gemini/gemini-cli/issues/26563) — **`save_memory` tool not found when using `/memory add`** (5 comments)
*Workflow:* On v0.41.1, `/memory add some text` yields `Tool "save_memory" not found`.
*Impact:* Core memory feature broken for some configurations.
*Community:` `@mafischer` reported. Tagged `priority/p2`. Likely a tool registration regression.

[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — **Shell command stuck "Waiting input" after completion** (3 comments, 3 👍)
*Workflow:* Simple shell commands (e.g., `ls`) leave the terminal stuck in "Awaiting user input" state after the command finishes.
*Impact:* Frequent workflow interruptions; user must manually cancel.
*Community:* `@rnett` reports reproducibility. High community engagement (3 upvotes).

[#24916](https://github.com/google-gemini/gemini-cli/issues/24916) — **Permission prompts reappear for the same file despite "allow"** (4 comments)
*Workflow:* Granting permission to a file does not persist; CLI re-asks on subsequent interactions.
*Impact:* Security friction; users lose trust in permission persistence.
*Community:* Enterprise/security tagged. Possible state management regression.

[#22203](https://github.com/google-gemini/gemini-cli/issues/22203) — **Rename "ToDo" to "Tasks" in list tray** (5 comments)
*Workflow:* UI nomenclature inconsistency — "ToDo" used in list tray while other parts say "Tasks".
*Impact:* Minor UX confusion, but maintainer-tracked as part of the `workstream-rollup`.

[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — **Assess AST-aware file reads, search, and mapping** (7 comments, 1 👍)
*Workflow:* EPIC investigating use of Abstract Syntax Trees for more precise codebase navigation.
*Impact:* Could reduce token usage and turn count by reading only method bounds.
*Community:* Multi-subtask EPIC (`#22746`, `#22747`). Under active investigation.

[#24353](https://github.com/google-gemini/gemini-cli/issues/24353) — **Robust component-level evaluations** (6 comments)
*Workflow:* Follow-up to issue #15300 — behavioral evals currently run 76 tests across 6 Gemini models.
*Impact:* Scalability challenge; need automated eval infrastructure.
*Community:* Tagged `aiq/eval_infra`. Part of ongoing quality initiative.

---

## Key PR Progress (10 important)

[#23918](https://github.com/google-gemini/gemini-cli/pull/23918) — **fix(cli): improve HalfLinePaddedBox rendering for Apple Terminal**
*Change:* Adds `isAppleTerminal()` detection to render block characters (▀/▄) correctly.
*Status:* Open, third-party contribution. Low priority but addresses visual regression on macOS.

[#23946](https://github.com/google-gemini/gemini-cli/pull/23946) — **fix: prevent compression endless loop in agentic sessions**
*Change:* Prevents infinite auto-compression loop ("Ralph loop") when `tryCompressChat` fires on multiple `processTurn` calls within one user turn.
*Status:* Open, high priority (p0/p1). Critical for long agentic sessions.

[#23956](https://github.com/google-gemini/gemini-cli/pull/23956) — **fix(ui): ensure autocomplete allows immediate execution and subcommand disclosure**
*Change:* Fixes regression where users got "stuck" on a command suggestion, replacing PR #20136.
*Status:* Open. Addresses core CLI interaction flow.

[#26720](https://github.com/google-gemini/gemini-cli/pull/26720) — **Copilot/update command line options**
*Change:* Small update to command line options; references commit `5798523` for deterministic debug ordering.
*Status:* Open, created today. Minor scope.

[#26618](https://github.com/google-gemini/gemini-cli/pull/26618) — **feat(cli): add /fork session branching command** (closed)
*Change:* Implements `/fork` (issue #22563) — snapshots session so two terminals can resume independently.
*Status:* Closed. Likely merged or superseded.

[#24179](https://github.com/google-gemini/gemini-cli/pull/24179) — **fix: handle 'forever' as valid session retention period**
*Change:* Gracefully handles `maxAge: "forever"` in settings instead of throwing "Invalid retention period format".
*Status:* Open. Third-party contribution fixing issue #24178.

[#25109](https://github.com/google-gemini/gemini-cli/pull/25109) — **fix(cli): remove hardcoded padding from terminal titles to fix trailing spaces in tmux**
*Change:* Replaces 80-character space padding with proper Unicode-safe truncation.
*Status:* Open. Improves tmux compatibility.

[#26084](https://github.com/google-gemini/gemini-cli/pull/26084) — **Fix 400 error when more than 128 tools are enabled**
*Change:* Implements `smartLimitTools` in `ToolRegistry` — prioritizes built-in tools, then user-enabled, then disabled when exceeding Gemini API's 128-tool limit.
*Status:* Open. High priority (p2). Directly addresses issue #24246.

[#26717](https://github.com/google-gemini/gemini-cli/pull/26717) — **feat(bot): implement scheduled agent and worker delegation model**
*Change:* Introduces `WORKER` agent type; refactors `interactive` and `scheduled` brains to mandate delegation of research/triage tasks. Zero-trust model.
*Status:* Open, created yesterday. Major architecture change for the bot.

[#26324](https://github.com/google-gemini/gemini-cli/pull/26324) — **fix(cli): prevent ghost text wrapping infinite loop**
*Change:* Prevents CLI hang when wrapping long ghost-text words (e.g., `@getskill.sh:3`) with zero or narrow terminal width.
*Status:* Open. Third-party fix for a hard freeze scenario.

---

## Feature Request Clusters

### Auto Memory Quality & Safety (3+ issues)
- [#26516](https://github.com/google-gemini/gemini-cli/issues/26516): Memory system bug tracking — umbrella for several sub-issues.
- [#26522](https://github.com/google-gemini/gemini-cli/issues/26522): Stop Auto Memory from retrying low-signal sessions indefinitely.
- [#26523](https://github.com/google-gemini/gemini-cli/issues/26523): Surface or quarantine invalid Auto Memory inbox patches (malformed patches, path escapes).
- [#26525](https://github.com/google-gemini/gemini-cli/issues/26525): Add deterministic redaction before sending transcript content to model; reduce logging.
*Observation:* Auto Memory is undergoing a significant reliability and security hardening push. Issues focus on retry loops, data leakage, and patch validation.

### Agent Execution Reliability (5+ issues)
- [#22323](https://github.com/google-gemini/gemini-cli/issues/22323): Subagent falsely reports success after MAX_TURNS.
- [#25166](https://github.com/google-gemini/gemini-cli/issues/25166): Shell commands stuck "Waiting input".
- [#21983](https://github.com/google-gemini/gemini-cli/issues/21983): Browser subagent fails on Wayland.
- [#22267](https://github.com/google-gemini/gemini-cli/issues/22267): Browser Agent ignores `settings.json` overrides.
- [#21925](https://github.com/google-gemini/gemini-cli/issues/21925): False "Action required" indicator.
*Observation:* A cluster of issues around agent lifecycle — premature termination, stalled execution, and configuration disregard — suggests systematic gaps in agent state management.

### User Interface & Prompt UX (4+ issues)
- [#22203](https://github.com/google-gemini/gemini-cli/issues/22203): Rename "ToDo" to "Tasks".
- [#22816](https://github.com/google-gemini/gemini-cli/issues/22816): Missing indentation for second-level dependencies in tree view.
- [#24943](https://github.com/google-gemini/gemini-cli/issues/24943): Parallel tool call layout — auto-approved calls not separated from pending.
- [#25218](https://github.com/google-gemini/gemini-cli/issues/25218): Tables render incrementally during streaming, breaking screen reader layout.
*Observation:* Incremental rendering, tree visualization, and label consistency are recurring UI pain points, especially for accessibility and complex workflows.

### Tool & Skill Discovery
- [#21968](https://github.com/google-gemini/gemini-cli/issues/21968): CLI doesn't autonomously use custom skills/sub-agents — must be explicitly invoked.
- [#24246](https://github.com/google-gemini/gemini-cli/issues/24246): 400 error when >128 tools are enabled (now fixed by PR #26084).
*Observation:* Users expect the CLI to discover and leverage their custom configurations autonomously; current behavior requires manual prompting.

---

## Developer Pain Points

1. **Shell command lifecycle confusion** — Repeated issues where commands appear waiting for input after completion (`#25166`, `#21925`) or generate false "Action required" indicators. This breaks automation workflows and erodes trust.

2. **Silent failures and misleading state** — `#20005` (.env omission) and `#22323` (false GOAL success) both hide real failures behind plausible-looking states. Developers lose debugging time.

3. **Permission persistence broken** — `#24916` shows that "allow for all future sessions" doesn't stick. For security-sensitive workflows, this is a blocker.

4. **Sub-agent and tool configuration ignored** — `#21968` (skills not used) and `#22267` (settings.json ignored) indicate that distributed configuration is not respected — developers must babysit the agent.

5. **Windows-specific hangs and zombie processes** — Multiple PRs (`#26392`, `#26361`) address Windows-only issues like zombie processes, proxy support, and path handling (`#25216` on `A:\`). Cross-platform parity remains a pain point.

6. **Memory system instability** — The Auto Memory cluster (`#26516` et al.) reveals indefinite retries, silent patch skipping, and potential data leakage. For teams relying on long-lived memory, this is high-risk.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-09

## Today’s Update Brief
A new stable release `v1.0.44` landed yesterday, fixing terminal flicker and enabling slash commands mid-input. Activity is moderate: 35 issues were updated (mostly with fresh comments), and 2 pull requests are open. Several terminal-rendering regressions have been reported, and MCP agent connectivity bugs continue to attract attention.

## Releases
**v1.0.44** (2026-05-08)
- Path completion in `/add-dir` no longer flickers or gets intercepted by `@`/`#` pickers.
- Slash commands can now appear mid-input, and multiple skills can be invoked in a single message.
- `userPromptSubmitted` hooks can bypass the LLM and return a response directly.

**v1.0.44-3** (pre-release)
- *Added:* `userPromptSubmitted` hooks can handle requests without a model call.
- *Improved:* Faster `/user list` and `/user switch` for multi-account users.

GitHub: [Releases](https://github.com/github/copilot-cli/releases)

## Hot Issues (10 noteworthy)

1. **#2630** [OPEN] — Custom agents with `mcp-servers` in their YAML frontmatter do not receive MCP tool connections when invoked as sub‑agents or via `--prompt` mode. Only basic tools (`view`, `sk…`) are available. Impact is high for advanced agent workflows. (6 comments)
   [GitHub](https://github.com/github/copilot-cli/issues/2630)

2. **#2543** [OPEN] — Concurrent sub‑agent events corrupt session state, causing permanent `"tool_use ids were found without tool_result blocks"` errors. Every subsequent message fails. (4 comments, 2 👍)
   [GitHub](https://github.com/github/copilot-cli/issues/2543)

3. **#1412** [OPEN] — PowerShell tools trigger Elastic security alerts (defense evasion rule). Security Operations get notified on every Copilot CLI use. (3 comments, 3 👍)
   [GitHub](https://github.com/github/copilot-cli/issues/1412)

4. **#1433** [OPEN] — `COPILOT_CUSTOM_INSTRUCTIONS_DIRS` env var pointing to NFS directory outside project hierarchy fails to load AGENTS.md on Linux. (3 comments, 6 👍)
   [GitHub](https://github.com/github/copilot-cli/issues/1433)

5. **#3189** [OPEN] — `copilot -p` (non‑interactive) exits with code 1 silently, producing zero output and no log file on macOS. Interactive mode works fine. (3 comments)
   [GitHub](https://github.com/github/copilot-cli/issues/3189)

6. **#3200** [OPEN] — Feature request: `/delegate` should support a sub‑command to delegate tasks without committing and pushing local changes. (3 comments)
   [GitHub](https://github.com/github/copilot-cli/issues/3200)

7. **#3195** [OPEN] — When using BYOK with vLLM, `AssistantMessageDeltaEvent` and `AssistantReasoningEvent` are not fired because the CLI only checks `reasoning_content` while vLLM returns `reasoning`. (2 comments, 1 👍)
   [GitHub](https://github.com/github/copilot-cli/issues/3195)

8. **#3098** [OPEN] — PowerShell’s case‑insensitive `$home` variable can lead to catastrophic user profile deletion when a generated script uses `$home` as a scratch path. Footgun with high severity. (1 comment)
   [GitHub](https://github.com/github/copilot-cli/issues/3098)

9. **#3205** [OPEN] — Emoji table column misalignment regression in v1.0.43; #2764 was not fully fixed. Emojis cause column borders to shift and extra pipes appear. (0 comments)
   [GitHub](https://github.com/github/copilot-cli/issues/3205)

10. **#3204** [OPEN] — Markdown links inside table cells break due to line wrapping (`[text](` on one line, `url)` on the next). (0 comments)
    [GitHub](https://github.com/github/copilot-cli/issues/3204)

## Key PR Progress

- **#2800** [OPEN] — Adds initial devcontainer configuration. Created 2026-04-17, last updated 2026-05-08. Likely a convenience for contributors.
  [GitHub](https://github.com/github/copilot-cli/pull/2800)

- **#3199** [OPEN] — Updates Homebrew installation commands. The CLI tools appear to have moved to new cask locations: `copilot-cli` and `copilot-cli@prerelease`.
  [GitHub](https://github.com/github/copilot-cli/pull/3199)

## Feature Request Clusters

- **MCP / Agent connectivity**: Multiple issues request that custom agents with `mcp-servers` work in sub‑agent and `--prompt` contexts (#2630, #3207). Users want consistent MCP tool access regardless of invocation mode.
- **Terminal rendering quality**: Emoji table misalignment (#2764, #3205), markdown link line‑breaks (#3204), and truncated skill names (#3179) indicate ongoing polish needs in the TUI.
- **BYOK / external model configuration**: Users want granular control over provider model selection, reasoning fields, and API‑version handling (#3195, #3208, #2710). A unified configuration surface is desired.
- **Session and state management**: Concurrent sub‑agent corruption (#2543), ability to delegate without committing (#3200), and searching the timeline (#2170) point to needs for more robust session tooling.
- **Platform parity**: Windows‑specific issues (PowerShell `$home` footgun #3098, batch editor support #1882, security alerts #1412) show that non‑macOS platforms face unique pain points.

## Developer Pain Points

- **Silent failures**: Non‑interactive mode (`copilot -p`) exits silently with no output or logs (#3189). Debugging such failures is time‑consuming.
- **BYOK compatibility gaps**: Non‑standard reasoning field names (#3195) and hardcoded API versions (#3208) frustrate teams using custom providers.
- **Terminal rendering regressions**: Emoji and link rendering in tables has regressed after a fix in v1.0.32 (#3205, #3204), eroding confidence in TUI quality.
- **Agent loop behavior**: In hosted (non‑BYOK) mode, the agent does not autonomously call write/edit tools even with permissions auto‑allowed (#3209), limiting practical code generation.
- **Security / safety alerts**: PowerShell tooling triggers organizational security rules (#1412), and the `$home` variable footgun (#3098) poses a real risk of data loss.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-09

## Today’s Update Brief

The community saw moderate activity with 13 new Issues and 13 pull requests updated in the last 24 hours. Windows compatibility and session reliability dominate the conversation, with multiple bug reports around PowerShell syntax mismatches, file-encoding corruption, and shell timeout rigidity. The maintainers responded with several targeted fixes, including a PR to switch the Windows Shell backend from PowerShell to git-bash, and patches for malformed tool calls and flaky subprocess execution.

## Releases

No new releases were published in the last 24 hours.

## Hot Issues

**#2202 – `kimi term` crashes on Windows due to missing `fcntl`, then secondary `rich.pretty` rendering error**
A crash that prevents the terminal mode from launching on Windows entirely. The stack trace shows two successive failures: `fcntl` is not available on Windows, and then the fallback error handler itself fails. No comments yet.
[GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2202)

**#2201 – Web UI `afk` option and `--no-restrict-sensitive-apis` are mutually exclusive**
Users who want to leave the Web UI idle while freely accessing sensitive APIs cannot set both flags without conflict. The two options logically conflict, and the CLI silently accepts both without warning.
[GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2201)

**#2197 – Windows console TrueType font reset when running subprocess via `kaos.exec()`**
Every time the agent spawns a subprocess on Windows, the console font resets from the user’s custom TrueType face back to the raster default, disrupting the terminal experience. Reported on Windows 10 with self-hosted vLLM.
[GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2197)

**#2195 – Shell command timeout is rigid (60s) and not configurable or adaptive**
The Shell tool has a hard-coded 60-second timeout. Long-running operations like `git fetch`, `npm install`, or `build` commands frequently get killed prematurely. The user requests either an explicit config or automatic adaptation based on command pattern.
[GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2195)

**#2194 – Agent generates PowerShell 7.x syntax incompatible with default PowerShell 5.x**
On Windows 64-bit, the agent frequently emits PowerShell commands that rely on v7 features (e.g., `Select-String -Raw`, `-AsHashtable`), which fail silently or with cryptic errors on the default Windows PowerShell 5.x engine. The same user also filed #2192 for Unix pipeline commands (`head`, `tail`) appearing in generated PowerShell.
[GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2194)

**#2193 – Background auto-trigger permanently stops after 3 consecutive LLM timeouts**
When a long-running background Bash task completes, the agent auto-triggers a foreground LLM call. If that call fails with `APITimeoutError` three times in a row, a hard-coded counter (`_MAX_BG_AUTO_TRIGGER_RETRIES = 3`) disables the feature permanently for the session. No configurable retry limit exists.
[GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2193)

**#2192 – Agent repeatedly generates Unix pipeline commands (`head`/`tail`) incompatible with PowerShell**
A companion to #2194: the Shell tool on Windows keeps generating pipe patterns like `command | head -n5` or `tail -f file.log` that have no native PowerShell equivalent, forcing manual intervention.
[GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2192)

**#2191 – `StrReplaceFile` silently converts entire file from CRLF to LF on Windows**
When the agent edits a file on Windows, the `StrReplaceFile` tool writes the entire file with LF line endings, destroying the repository’s CRLF convention. A fix PR (#1953) remains open and unmerged, so the workaround is to force the agent to use Python-based file editing instead of the native tool.
[GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2191)

**#2189 – Plan mode garbled output on next interaction (Windows)**
After enabling Plan mode in the VS Code extension, the very next user interaction produces garbled/encoded characters. The user reports this on Windows with Kimi 2.6. No root cause identified yet.
[GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2189)

**#2178 – Windows `kimi.exe v1.41.0` has blank `FileVersionInfo`, causing VS Code extension rejection**
The Windows binary ships with an empty version resource block. The VS Code extension checks `FileVersionInfo` to determine compatibility, and if it’s blank, the extension rejects the CLI as “incompatible” and refuses to launch. Two comments discuss a workaround of manually patching the PE header, but no maintainer response yet.
[GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2178)

## Key PR Progress

**#2200 – `fix(shell): adapt timeouts for long commands`**
Addresses #2195 by automatically extending Shell timeout for known-slow patterns (git submodule operations, clone/fetch, package installs, builds). Normal commands keep the 60s default. Explicit caller-supplied timeouts are preserved.
[GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2200)

**#2199 – `fix(kaos): avoid console windows on Windows exec`**
Fixes #2197 by passing `CREATE_NO_WINDOW` flag when spawning subprocesses on Windows via Kaos local exec. Non-Windows paths unchanged. Includes targeted unit tests.
[GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2199)

**#2198 – `fix(acp): defer available commands update to prevent race condition`**
In v1.41.0, the ACP server sends `available_commands_update` during `new_session()` before the client finishes creating the session, causing slash commands to disappear. This PR defers the update until the client’s session creation callback completes.
[GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2198)

**#2196 – `fix(kosong): sanitize malformed history tool calls`**
Fixes #2165. History tool calls can contain malformed `function.arguments` after a model emits invalid JSON. OpenAI-compatible backends reject the next request while replaying history, causing persistent conversation failures. This fix sanitizes tool calls at the provider layer before replay.
[GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2196)

**#2190 – `feat(telemetry): add app_name and build_sha with remote provenance to context`**
Improves telemetry observability by distinguishing manual vs manual-with-prompt compaction triggers, and adding `app_name` and `build_sha` to the telemetry context for build provenance tracking.
[GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2190)

**#2187 – `fix(deps): bump pillow to 12.2.0 for CVE-2026-25990`**
Bumps Pillow from 12.1.0 to 12.2.0 to fix a critical out-of-bounds write vulnerability when loading PSD images (CVE-2026-25990), which blocks installs in security-tight environments. Closes #2153.
[GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2187)

**#2186 – `refactor(windows): switch Shell backend from PowerShell to git-bash`**
A substantial refactor that replaces PowerShell with Git Bash as the default Shell tool backend on Windows, aiming to resolve the entire class of PowerShell-vs-POSIX incompatibility bugs (#2192, #2194). The Shell tool would then run through `bash.exe` with POSIX semantics. Resolves #1618, refs #1855.
[GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2186)

**#2185 – `fix(acp): allow API-key based auth to bypass forced OAuth login`**
When using Kimi Code CLI via ACP (e.g., JetBrains IDE), the server forces OAuth even when the user already configured a provider with an API key. This PR checks for existing API key configuration and bypasses the OAuth redirect when credentials are available.
[GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2185)

**#2177 – `fix(soul): clear partial UI output when LLM step is retried`**
When a streamed LLM call fails after emitting partial content, tenacity’s retry appends new output to the already-shown partial text/think/tool-call content instead of clearing it. This PR clears the partial output before retrying.
[GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2177)

**#1972 – `feat(shell): visual context progress bar with color coding`**
Replaces the plain-text `context: 0.0%` indicator with a Unicode block progress bar (e.g., `Context █░░░░░░░░░ 4%`) with green/yellow/red color thresholds. Implemented in `soul/__init__.py`.
[GitHub](https://github.com/MoonshotAI/kimi-cli/pull/1972)

## Feature Request Clusters

**Global agent configuration** – Issue #2152 asks for a `~/.kimi/AGENTS.md` file that can be shared across projects, avoiding the need to duplicate per-project `AGENTS.md` for rules that are universal (e.g., code style, commit message format). The request has 2 upvotes and 3 comments.
[GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2152)

**Shell timeout flexibility** – Two related items: Issue #2195 requests configurable or adaptive shell timeouts, and PR #2200 proposes automatic extension based on command patterns. No explicit config flag has been proposed yet; the PR takes an adaptive approach.

**Visual progress bar for context** – Issue #2188 and PR #1972 both propose replacing the plain-text `context: 0.0%` with a Unicode block progress bar with color coding (green/yellow/red). The PR has been open since April 21; the issue was filed May 8 as a separate feature request.
[GitHub (Issue)](https://github.com/MoonshotAI/kimi-cli/issues/2188) · [GitHub (PR)](https://github.com/MoonshotAI/kimi-cli/pull/1972)

## Developer Pain Points

**Windows ecosystem friction remains the top pain point.** Seven of today’s 13 new Issues are Windows-specific: blank `FileVersionInfo` (#2178), missing `fcntl` on `kimi term` (#2202), console font reset (#2197), CRLF-to-LF file conversion (#2191), PowerShell 5.x vs 7.x syntax mismatch (#2194), Unix pipeline incompatibility (#2192), and Plan mode garbled output (#2189). The maintainers are actively working on a structural fix: PR #2186 (replacing PowerShell with git-bash) and PR #2199 (suppressing the console window) directly address the root causes.

**Session recovery and reliability issues persist.** Two bugs involve the system silently giving up: the auto-trigger permanently stops after 3 timeouts (#2193), and malformed tool calls in history can lock a conversation (#2165, fixed in #2196). Users express frustration that these mechanisms lack configurability or graceful degradation.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-09

## Today's Update Brief
No new releases dropped in the last 24 hours, but development activity remains high with 50 issues and 50 PRs updated. The community is actively discussing agent marketplace features, MCP server configuration improvements, and several persistent bugs around session management, cost tracking, and permission handling. A cluster of PRs from @kitlangton signals ongoing server-side refactoring toward the Effect HttpApi backend.

---

## Releases
*None in the last 24 hours.*

---

## Hot Issues
*10 noteworthy issues, ordered by community engagement or impact.*

1. **[#15585 – "free usage exceed" error on free models](https://github.com/anomalyco/opencode/issues/15585)**
   *Comments: 20 | 👍: 7*
   User reports all three free models fail with the same “free usage exceed” message after two long sessions. Questions whether OpenCode imposes hidden usage limits. No maintainer response yet.

2. **[#7467 – Feature: GitHub-based Agent Marketplace](https://github.com/anomalyco/opencode/issues/7467)**
   *Comments: 14 | 👍: 8*
   Request for a discoverable marketplace to share agents between users/teams without manual file copying. High community engagement.

3. **[#22100 – Bug: OpenCode runs pip3 with read-only config](https://github.com/anomalyco/opencode/issues/22100)**
   *Comments: 10 | 👍: 0*
   User flags security concern: OpenCode v1.4.3 is using `pip` install despite a read-only permission configuration. Questions why the tool feels entitled to modify the system.

4. **[#20045 – Edit permission uses relative paths, external_directory uses absolute](https://github.com/anomalyco/opencode/issues/20045)**
   *Comments: 9 | 👍: 0*
   Agent-level permission paths work inconsistently: `edit` field silently fails on absolute paths while `external_directory` works correctly. Breaks expected file access control.

5. **[#25270 – Model generates identical response twice](https://github.com/anomalyco/opencode/issues/25270)**
   *Comments: 7 | 👍: 0*
   The model outputs the exact same response twice in a row. Likely a provider-side or retry logic issue; screenshots attached.

6. **[#14292 – Save conversations and session data to project folder (CLOSED)](https://github.com/anomalyco/opencode/issues/14292)**
   *Comments: 6 | 👍: 9*
   Feature request to store session data in the project folder instead of `~/.opencode`. High thumbs-up count indicates strong demand, though issue is closed without resolution details.

7. **[#16270 – TUI session picker only shows recent sessions](https://github.com/anomalyco/opencode/issues/16270)**
   *Comments: 6 | 👍: 0*
   The `/sessions` picker filters to only ~5 recent sessions despite having 584 root conversations. Root cause identified as a 30-day time filter hardcoded in the bootstrap query.

8. **[#17223 – Cost tracking ($ Spent) does not work for custom provider models](https://github.com/anomalyco/opencode/issues/17223)**
   *Comments: 3 | 👍: 15*
   Custom providers using `@ai-sdk/openai-compatible` show `$0.00` cost regardless of token usage. High demand for fix; duplicates reported in #24113.

9. **[#10741 – Changing files in plan mode](https://github.com/anomalyco/opencode/issues/10741)**
   *Comments: 4 | 👍: 6*
   Plan mode does not enforce file change prevention; model compliance depends on instruction following. Suggests dedicated user accounts for plan vs build modes.

10. **[#26429 – Feature: Panel to quickly configure MCP server in desktop](https://github.com/anomalyco/opencode/issues/26429)**
    *Comments: 2 | 👍: 0*
    Fresh request to add a settings panel for MCP server configuration within the desktop UI, avoiding manual JSON edits.

---

## Key PR Progress
*10 important pull requests updated in the last 24 hours.*

1. **[#26439 – test(server): lock fixed workspace routing context](https://github.com/anomalyco/opencode/pull/26439)**
   Adds regression test ensuring `OPENCODE_WORKSPACE_ID` takes precedence over requested workspace routing. Core server reliability.

2. **[#26442 – test(server): guard PTY websocket early frames](https://github.com/anomalyco/opencode/pull/26442)**
   Regression coverage for early-frame delivery during PTY websocket connection setup. Precedes deletion of Hono PTY route.

3. **[#26438 – fix(server): serve HttpApi OpenAPI document](https://github.com/anomalyco/opencode/pull/26438)**
   Serves the Effect HttpApi OpenAPI doc from `GET /doc` before the UI fallback. Improves developer experience for API consumers.

4. **[#26443 – fix(server): emit fixed workspace fence headers](https://github.com/anomalyco/opencode/pull/26443)**
   Adds fence middleware for fixed workspace child servers, emitting `x-opencode-sync` on mutating requests. Key for multi-instance sync.

5. **[#26441 – test(server): cover workspace sync fence protocol](https://github.com/anomalyco/opencode/pull/26441)**
   Adds coverage for read/no-op requests that should not emit sync headers, and proxy-side handling of remote sync headers.

6. **[#26440 – feat(server): add HTTP API response compression](https://github.com/anomalyco/opencode/pull/26440)**
   Enables gzip/deflate compression for Effect HttpApi responses, excluding SSE and streaming POST routes. Performance improvement.

7. **[#26437 – fix(opencode): use canonical GitHub action share links](https://github.com/anomalyco/opencode/pull/26437)**
   Fixes bot comments constructing stale `opencode.ai/s/<id>` links; now uses canonical share URL. Relates to #26417.

8. **[#26433 – fix: allow null function.name in streaming tool calls for OpenAI-compatible providers](https://github.com/anomalyco/opencode/pull/26433)**
   Resolves `Expected 'function.name' to be a string` error when using vLLM, LM Studio, llama.cpp, etc. that send `null` in streaming chunks.

9. **[#25670 – fix(mcp): auto-reconnect on transport errors](https://github.com/anomalyco/opencode/pull/25670)**
   Long-running MCP sessions now automatically reconnect when remote server restarts or StreamableHTTP session hot-swaps. Fixes silent breakage.

10. **[#26432 – fix(tui): request root sessions in session dialog](https://github.com/anomalyco/opencode/pull/26432)**
    Addresses #16270 (and related #13877, #25897, #23276) by adding `roots: true` parameter to the session bootstrap query, fixing the TUI picker that hid older root sessions.

---

## Feature Request Clusters
*Recurring themes from recent issues, without predicting roadmap priority.*

- **Agent and MCP Ecosystem**
  - GitHub-based Agent Marketplace for sharing agents ([#7467](https://github.com/anomalyco/opencode/issues/7467))
  - MCP server configuration panel in desktop UI ([#26429](https://github.com/anomalyco/opencode/issues/26429))
  - MCP with delete/update capabilities ([#4570](https://github.com/anomalyco/opencode/issues/4570))
  - Playwright CLI + SKILLS as lighter browser automation alternative ([#26423](https://github.com/anomalyco/opencode/issues/26423))

- **Session and Data Persistence**
  - Save conversations and session data to project folder ([#14292](https://github.com/anomalyco/opencode/issues/14292), closed but popular)
  - Improve TUI session picker to show all root sessions, not just recent ones ([#16270](https://github.com/anomalyco/opencode/issues/16270), [#25897](https://github.com/anomalyco/opencode/issues/25897))

- **Cost Tracking for Custom Providers**
  - Multiple reports that `$ Spent` stays at $0 for custom OpenAI-compatible providers even with configured cost fields ([#17223](https://github.com/anomalyco/opencode/issues/17223), [#24113](https://github.com/anomalyco/opencode/issues/24113))

- **Security and Permission Controls**
  - Plan mode enforcement to prevent file changes ([#10741](https://github.com/anomalyco/opencode/issues/10741))
  - Configure minimum LSP diagnostic severity level ([#17869](https://github.com/anomalyco/opencode/issues/17869))
  - Permission path consistency between `edit` and `external_directory` ([#20045](https://github.com/anomalyco/opencode/issues/20045))

---

## Developer Pain Points
*Recurring frustrations and high-frequency support requests observed in today's data.*

- **Cost tracking broken for custom providers** – Users investing in custom model integrations cannot see spend data, with two separate issues and high upvote counts.
- **Session picker hides historical root sessions** – The TUI's 30-day time filter and client-side root filtering cause frustration for projects with many subagent sessions.
- **Permission and security inconsistencies** – Confusion around when OpenCode runs `pip3`, path format mismatches in agent-level permissions, and plan mode not actually blocking edits.
- **Duplicate model responses** – Models occasionally repeat the exact same output, indicating a retry or streaming logic bug.
- **OAuth callback server not stopped** – Port 19876 remains bound after auth, causing cross-instance CSRF errors when running multiple TUI instances.
- **Subagent permission hangs** – A filter introduced before subagents existed now blocks subagent permission events from being processed, leaving subagents stuck.

---

*Data sourced from [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode). Compiled for 2026-05-09.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for 2026-05-09.

---

## 1. Today's Update Brief

The Qwen Code community remains highly active, with two new releases (including a stable `v0.15.9` and a nightly) and a high volume of issue and PR activity. The conversation is dominated by authentication issues, CLI workflow improvements, a major controversy over OAuth free tier policy changes, and a focus on internal infrastructure optimization, particularly around CI/CD pipelines and tooling.

## 2. Releases

Two releases were published in the last 24 hours:

- **`v0.15.9-nightly`**: A nightly build incorporating two changes: a chore release automation update by `@qwen-code-ci-bot` and a bug fix (`fix(cli): validate /model command arguments`) by `@yiliang114`. This fix addresses a user-reported issue where the `/model` command was not behaving as expected.
    - **Changelog**: https://github.com/QwenLM/qwen-code/compare/v0.15.9...
- **`v0.15.9`**: The latest stable release. Key changes include:
    - `feat(telemetry): add sensitive span attribute opt-in` by `@doudouOUC`: Enhancements to the telemetry system, allowing users to opt-in to sensitive span attributes.
    - `feat: add commit attribution with per-file AI contribution`: A new feature for tracking and attributing AI code contributions at the file level.
    - **Full Changelog**: https://github.com/QwenLM/qwen-code/compare/v0.15.8...

## 3. Hot Issues (Top 10 by Engagement)

1.  **#3203 [OAuth Free Tier Policy Adjustment]** (122 Comments): This is the most active issue by far. The community is reacting strongly to a proposal (presented as a request) to drastically cut the OAuth free tier from 1,000 requests/day down to 100 and then phase it out entirely. The impact is significant for individual developers and small teams relying on the free tier.
    - **Workflow**: User Authentication & API Access.
    - **Community Reaction**: Heated debate regarding pricing and accessibility.
    - **Link**: https://github.com/QwenLM/qwen-code/issues/3203

2.  **#3740 [Settings.json Override for Non-Plan Models]** (8 Comments): A user reports that after v0.15.5, the CLI ignores manually configured OpenAI-compatible models in `settings.json`, overwriting them with its own plan-based list on startup.
    - **Workflow**: Model Configuration.
    - **Impact**: Blocks users who prefer to use custom or non-standard model endpoints.
    - **Community Reaction**: User frustration over loss of a previously working feature.
    - **Link**: https://github.com/QwenLM/qwen-code/issues/3740

3.  **#3877 [Missing API Key Error with .env File]** (4 Comments): The CLI fails to read the `OPENCODE_GO_API_KEY` environment variable from a `.env` file, forcing users to re-authenticate.
    - **Workflow**: Application Startup & Authentication.
    - **Impact**: Disrupts automated or scripted workflows.
    - **Community Reaction**: Typical bug report with clear reproduction steps.
    - **Link**: https://github.com/QwenLM/qwen-code/issues/3877

4.  **#3914 [API Connection Succeeds but Fetch Fails]** (3 Comments): A user reports a scenario where the API key connects successfully but the actual request fails with a "fetch failed" error when using OpenRouter as a provider.
    - **Workflow**: API Integration.
    - **Impact**: Creates a confusing "false positive" authentication state.
    - **Link**: https://github.com/QwenLM/qwen-code/issues/3914

5.  **#3936 [Broken Russian Text in CLI]** (3 Comments): The CLI display renders Russian text as garbled characters (likely an encoding issue).
    - **Workflow**: Internationalization & UI.
    - **Impact**: Affects a non-trivial user base and degrades UX.
    - **Link**: https://github.com/QwenLM/qwen-code/issues/3936

6.  **#3548 [Configurable plansDirectory for Plan Mode]** (3 Comments): A feature request for a `plansDirectory` setting similar to Gemini CLI, allowing users to define custom storage locations and policies for plans.
    - **Workflow**: Plan Mode Configuration.
    - **Impact**: Provides flexibility for users with complex project structures.
    - **Community Reaction**: Positive, with users sharing use cases.
    - **Link**: https://github.com/QwenLM/qwen-code/issues/3548

7.  **#3954 [OSC 8 Hyperlinks in Markdown Output]** (3 Comments): A request to wrap URLs in the CLI's markdown output with OSC 8 escape sequences, making them clickable in supported terminals.
    - **Workflow**: CLI Output & Interactivity.
    - **Impact**: A significant quality-of-life improvement for developers.
    - **Link**: https://github.com/QwenLM/qwen-code/issues/3954

8.  **#3838 [Terminal Infinite Scroll/Render Loop]** (3 Comments): A UI bug where the terminal enters an infinite refresh cycle when the model is generating code/analysis, making it impossible to read.
    - **Workflow**: Terminal Rendering.
    - **Impact**: Severely impacts usability of the core feature.
    - **Link**: https://github.com/QwenLM/qwen-code/issues/3838

9.  **#3926 [Improved Text Editing in Input Field]** (2 Comments): A request for standard text editing capabilities (e.g., `Ctrl+Backspace`, text selection, cut/paste) in the CLI's input field.
    - **Workflow**: Interactive CLI Input.
    - **Impact**: Common developer expectation; lack of features slows down prompt editing.
    - **Link**: https://github.com/QwenLM/qwen-code/issues/3926

10. **#3945 [Edit Tool Unusable for Large Files]** (2 Comments): A bug report where the `edit` tool fails on large files because the `read_file` precondition truncates the content before it can be edited.
    - **Workflow**: File Editing.
    - **Impact**: Creates a functional deadlock for developers working on large codebases.
    - **Link**: https://github.com/QwenLM/qwen-code/issues/3945

## 4. Key PR Progress (Top 10 by Impact)

1.  **#3849 [Cross-AuthType Model Resolution]** (OPEN): Refactors model resolution logic from a client-level helper to the data layer (`ModelRegistry`), improving the architecture's clarity and maintainability.
    - **Link**: https://github.com/QwenLM/qwen-code/pull/3849

2.  **#3847 [Trace/Span Injection into Debug Logs]** (OPEN): Injects OTel trace and span IDs into debug logs, enabling correlation between CLI logs and telemetry backends, critical for debugging.
    - **Link**: https://github.com/QwenLM/qwen-code/pull/3847

3.  **#3900 [NotebookEdit Tool for Jupyter]** (OPEN): Adds a structured `NotebookEdit` tool for editing `.ipynb` files cell-by-cell, complementing the existing `read_file` support.
    - **Link**: https://github.com/QwenLM/qwen-code/pull/3900

4.  **#3778 [Desktop App Package with ACP SDK]** (OPEN): Adds a new `packages/desktop/` package integrating the Qwen ACP SDK, a major step towards a native desktop client.
    - **Link**: https://github.com/QwenLM/qwen-code/pull/3778

5.  **#3589 [ToolSearch for On-Demand Tool Schemas]** (OPEN): Introduces `ToolSearch` to load tool schemas on-demand, significantly reducing the default prompt size (e.g., tool list from 39 to 24) and saving ~15K tokens.
    - **Link**: https://github.com/QwenLM/qwen-code/pull/3589

6.  **#3889 [Qwen Serve Daemon - Stage 1]** (OPEN): Implements the first stage of an HTTP daemon (`qwen serve`), bridging the Agent Communication Protocol (ACP) for integration with other tools and services.
    - **Link**: https://github.com/QwenLM/qwen-code/pull/3889

7.  **#3879 [Reactive Context Compression on Overflow]** (OPEN): Adds a recovery mechanism that automatically compresses conversation history and retries when a provider returns a context-window overflow error, greatly improving robustness.
    - **Link**: https://github.com/QwenLM/qwen-code/pull/3879

8.  **#3905 [Fix Ctrl+O Freeze on Long Conversations]** (DDAR): Fixes a critical UI bug where pressing `Ctrl+O` would freeze the terminal for seconds on long conversations.
    - **Link**: https://github.com/QwenLM/qwen-code/pull/3905

9.  **#3214 [Replace fdir with git ls-files / ripgrep]** (OPEN): Proposes a major performance improvement for the `@` file mention autocomplete, replacing the filesystem crawler with a `git ls-files` + `ripgrep` fallback strategy, respecting `.gitignore`.
    - **Link**: https://github.com/QwenLM/qwen-code/pull/3214

10. **#3969 [Ctrl+B Promote Keybind for Subagent Backgrounding]** (OPEN): Final piece of the feature for promoting a background task back to the foreground, adding a new `Ctrl+B` keybind for this workflow.
    - **Link**: https://github.com/QwenLM/qwen-code/pull/3969

## 5. Feature Request Clusters

- **External & Custom Model Integration**: There is a strong push for better support for non-Qwen, OpenAI-compatible models. Issues #3740 (settings.json override) and #3914 (OpenRouter fetch failure) highlight friction in this area.
- **CLI Input & Workflow Ergonomics**: Requests for improved terminal interactivity are frequent. This includes better text editing (#3926), clickable links (#3954), and a configurable plan directory (#3548).
- **Infrastructure & Automation**: Several feature requests from maintainers focus on improving the project's own CI/CD and development workflows, such as reducing matrix test times (#3943) and consolidating issue triage workflows (#3958).

## 6. Developer Pain Points

- **Authentication & API Key Frustration**: This is the most common pain point. Issues #3877, #3940, and #3939 all report problems with API keys, access tokens, and `.env` file handling, indicating a fragile authentication system.
- **Model Selection & Configuration**: The conflict between user-configured models in `settings.json` and the tool's built-in plan list (#3740) is a persistent source of friction.
- **File Operations on Scale/Edge Cases**: Developers working with large files (#3945) or encrypted file systems (#3964) are hitting dead ends, suggesting the file processing logic is not robust enough for diverse real-world environments.
- **Terminal Rendering Bugs**: Reports of display corruption (#3838, #3213, #3936) on various platforms (Windows, Russian locale) suggest ongoing stability issues with the terminal UI layer.

</details>