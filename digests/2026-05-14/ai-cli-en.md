# AI CLI Tools Community Digest 2026-05-14

> Generated: 2026-05-14 02:26 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Tool Comparison Report — 2026-05-14

## 1. Daily Cross-Tool Overview

Today saw activity across all seven tracked AI CLI tools, with three shipping releases (Claude Code v2.1.141, GitHub Copilot CLI v1.0.48-1, OpenCode v1.14.49) and one staging a release candidate (Kimi Code v1.44.0). Community engagement remains high, with Claude Code, Gemini CLI, and OpenCode each reporting roughly 50 updated issues. Security regressions—particularly around MCP stderr leakage, sandbox bypasses, and authentication workflows—appear across multiple tools. Platform-specific pain points on Windows (ARM64, WSL, PowerShell) and model degradation complaints (Kimi, Codex, Gemini) are recurring themes. No single tool dominates in a "leadership" sense, but GitHub Copilot CLI showed the highest release cadence (three releases in 24 hours).

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Release Today | Notable Release Version |
|------|----------------------|-------------------|---------------|-------------------------|
| **Claude Code** | 50 | 19 | Yes | v2.1.141 |
| **OpenAI Codex** | ~10-15 reported | 10 | No | — |
| **Gemini CLI** | 50 | 50 | No | — |
| **GitHub Copilot CLI** | 48 | 1 | Yes (3) | v1.0.48-1, v1.0.48-0, v1.0.47 |
| **Kimi Code CLI** | High (no exact count) | 10 | No (staged) | v1.44.0 staged (#2262) |
| **OpenCode** | 50 | 50 | Yes | v1.14.49 |
| **Qwen Code** | 21 | 50 | Yes | v0.15.11 |

*Note: Issue counts are based on digest-reported activity. Kimi Code did not provide an exact total count of updated issues.*

**Release velocity this week:** GitHub Copilot CLI leads with three releases. Claude Code and OpenCode each shipped one. Qwen Code shipped a minor patch. Gemini CLI, OpenAI Codex, and Kimi Code (despite staging) had no new tagged releases.

## 3. Shared Feature Directions

Multiple tool communities independently raised similar requirements today:

### Session and History Management
- **Claude Code**: Session history across worktrees (#58646), project cleanup (#40836)
- **GitHub Copilot CLI**: `/fork` command for side quests (#2058), session favorites (#3300)
- **Qwen Code**: Batch session deletion (#3706), `/compress` command failures (#4098)
- **OpenCode**: `/new` not reloading AGENTS.md (#11532)

### MCP / Plugin / Tool Security & Isolation
- **Kimi Code**: MCP stderr leakage regression (#2263, #2265, #2251)
- **GitHub Copilot CLI**: Hooks bypassed by sub-agents (#3013), MCP visibility gaps (#2630)
- **Gemini CLI**: Sandbox bypass via hookConfig.env injection (#22503)
- **OpenCode**: Sandboxing for agent terminal commands (#2242)
- **Claude Code**: Heredoc permission bypass (#58904)

### Authentication and Onboarding Friction
- **Claude Code**: Phone verification lockout (#34229), organization disabled with API key (#8327)
- **OpenAI Codex**: Phone verification blocks SSO (#20161)
- **Gemini CLI**: Authentication consistently fails (#5580)
- **Qwen Code**: DashScope-Intl endpoint failure (#4035)
- **GitHub Copilot CLI**: Organization-level MCP usage visibility (#3305)

### Model Quality and Cost Concerns
- **Kimi Code**: K2.6 model degradation (#2268, #2077, #1925)
- **OpenAI Codex**: General slowness (#21527), context compaction errors (#14860)
- **Gemini CLI**: Model forcing to Flash (#26619), capacity 429 errors (#24937)
- **Claude Code**: Exploding API costs (#54776), 5-hour vs weekly limit confusion (#56924)

### Multi-Agent Coordination
- **OpenCode**: Agent Teams request (#12661, 110👍)
- **Claude Code**: Agent Hierarchy Dashboard (#24537)
- **Gemini CLI**: Subagent recovery after MAX_TURNS (#22323)

## 4. Differentiation Analysis

### Feature Focus

| Tool | Primary Feature Emphasis Today |
|------|-------------------------------|
| **Claude Code** | Hooks system expansion, plugin ecosystem, security hardening |
| **OpenAI Codex** | MCP routing fixes, test infrastructure, desktop stability |
| **Gemini CLI** | Windows parity fixes, security vulnerability patches, rate limiting |
| **GitHub Copilot CLI** | Release velocity, session forking, MCP connectivity, platform fixes |
| **Kimi Code** | MCP stderr regression fix, memory safety, K2.6 model controversy |
| **OpenCode** | Core event system modernization (Effect migration), SSE streaming fix, AGENTS.md loading |
| **Qwen Code** | Daemon mode, headless guardrails, session compression, telemetry unification |

### Target User Differences
- **Claude Code** and **Kimi Code** show strongest enterprise/paying-user community pressure around costs, authentication, and security.
- **Gemini CLI** and **OpenAI Codex** have significant open issues around basic onboarding and rate limits affecting free-tier users.
- **OpenCode** and **Qwen Code** are more actively pushing new architectural features (Effect migration, daemon mode) rather than fixing regressions, indicating earlier-stage product maturity.
- **GitHub Copilot CLI** shows highest release frequency, suggesting a fast iteration cycle focused on incremental improvements and bug fixes.

### Technical Approach
- **Gemini CLI** and **OpenCode** are undertaking the largest architectural changes—Gemini with A2A server framework rewriting, OpenCode with Effect-native core migration.
- **Kimi Code**, **Claude Code**, and **GitHub Copilot CLI** are making smaller, targeted fixes to specific regression clusters.
- **Qwen Code** is modernizing its dependency stack (ink v7 upgrade) while adding new capabilities (daemon, goal tracking).

## 5. Community Activity Notes

**Highest raw issue activity:** Claude Code, Gemini CLI, OpenCode each reported ~50 issues updated. GitHub Copilot CLI reported 48.

**Highest PR velocity (by count):** Gemini CLI and OpenCode each reported 50 PRs updated, followed by Qwen Code (50) and Claude Code (19).

**Strongest maintainer response (based on merged PRs today):**
- **OpenCode** merged at least 6 PRs today (event stream fix, AGENTS.md loading, busy error typing, flaky test fix, markdown renderer)
- **GitHub Copilot CLI** shipped 3 releases addressing rendering bugs, token limits, and MCP behavior
- **Claude Code** shipped one release with hook notifications and HTTPS cloning
- **Gemini CLI** closed 5+ PRs (Windows/PowerShell fixes, safety improvements, tool repair)

**Tools with notable unresolved community frustration:**
- **Kimi Code**: Three simultaneous MCP stderr regression reports, plus sustained K2.6 model backlash
- **Claude Code**: Phone verification (#34229) at 735 comments and 811👍—by far the most upvoted single issue across all tools today
- **Gemini CLI**: Capacity crisis tracking issue (#24937) at 94 comments, still no committed fix
- **OpenAI Codex**: Phone verification (#20161) closed with 121 comments, but the underlying pattern overlaps with Claude Code's issue

## 6. Evidence-Backed Observations

### Observation 1: Security and isolation issues are the most common cross-tool pain point today
**Evidence:** Seven of eight tools have at least one security-related issue or PR today: Claude Code (heredoc bypass #58904, IDE selection context #58902), Gemini CLI (SSRF #26615, sandbox injection #22503, log permissions #26913), Kimi Code (MCP stderr leakage), Copilot CLI (hooks bypassed by sub-agents #3013), OpenCode (sandboxing request #2242), Qwen Code (command substitution inconsistency #4093). This is the single theme that spans the most tools, though each manifests differently depending on architecture (MCP isolation, hooks, sandbox, permission models).

### Observation 2: Authentication and onboarding friction remains a multi-tool challenge with no consensus fix
**Evidence:** Three tools (Claude Code #34229 at 735 comments, Codex #20161 at 121 comments, Gemini CLI #5580 at 20 comments) have active phone verification or SSO authentication failures. The scale varies dramatically (Claude Code's issue is an order of magnitude larger than the next), but the fundamental pattern—users unable to complete signup or login—affects tools across vendors. No tool has fully solved this, and Claude Code's issue was marked `[invalid]` despite ongoing user complaints, suggesting disagreement between community and maintainers on root cause.

### Observation 3: Model performance degradation and quota transparency are causing trust erosion among paying users
**Evidence:** Kimi Code users report K2.6 degradation (#2268, #2077, #1925) with demands for rollback capability. Gemini Code users report model forcing to Flash despite selecting Pro (#26619) and unauthorized cost overruns (#26186). Claude Code users report sudden token usage spikes (#54776) and unclear capacity policies (#56924). OpenAI Codex users report slow response latency (#21527). These are not isolated complaints—each cluster has multiple comments and upvotes, and they affect paid subscribers specifically, which carries higher business risk.

### Observation 4: Windows platform support remains uneven across the ecosystem
**Evidence:** Five of seven tools have Windows-specific issues today: Claude Code (background agents on ARM #58891), Copilot CLI (ARM64 native binding #3310, NFS AGENTS.md detection #1433), Gemini CLI (WSL path handling #27025, PowerShell preference #25900, sandbox missing #20780), Kimi Code (blank FileVersionInfo #2178, PowerShell API errors), Qwen Code (WSL1 binary error #24081). OpenCode and OpenAI Codex had fewer Windows-specific reports, but OpenCode's WSL1 regression (#24081) is notable. The issues range from missing ARM64 prebuilds to shell command incompatibilities to sandbox availability—no single fix covers all tools.

### Observation 5: Multi-agent coordination is an emerging feature space with active community demand
**Evidence:** Three tools have explicit requests or work-in-progress features for multi-agent: OpenCode's Agent Teams request (#12661, 110👍—the highest upvoted feature request today), Claude Code's Agent Hierarchy Dashboard (#24537, 13👍), and Gemini CLI's subagent recovery handling (#22323). The community is asking for visibility into parallel agent work, cost tracking, and session orchestration. None of these features appear to be shipped yet—they are either in proposal or early implementation stages—indicating a gap in current tooling that multiple vendors are racing to fill.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-05-14

## Today’s Update Brief

A new patch release (v2.1.141) shipped with hook‑driven desktop notification support and a plugin‑cloning HTTPS preference. Issue activity remains high (50 items updated in 24h), with the long‑running phone‑verification bug (#34229) crossing 735 comments and the “organization disabled” auth error (#8327) still unresolved. 19 pull requests were opened or updated, mostly plugin‑focused documentation and a few minor fixes.

## Releases

**v2.1.141** — [Full changelog](https://github.com/anthropics/claude-code/releases/tag/v2.1.141)
- Added `terminalSequence` field to hook JSON output — hooks can now emit desktop notifications, window titles, and terminal bells without requiring a controlling terminal.
- Added `CLAUDE_CODE_PLUGIN_PREFER_HTTPS` environment variable — forces GitHub plugin sources to be cloned over HTTPS instead of SSH, helpful in environments where SSH is blocked.

## Hot Issues (Top 10 by Community Impact)

1. **#34229 – Phone verification bug** [🔗](https://github.com/anthropics/claude-code/issues/34229)
   *Workflow:* Account sign‑up / login.
   *Impact:* Users cannot complete phone verification, locking them out of paid tiers.
   *Reaction:* **735 comments, 811 👍** – the most active issue by far. Despite being marked `[invalid]`, the volume suggests a systemic UX failure.

2. **#8327 – “Organization has been disabled” when `ANTHROPIC_API_KEY` overrides subscription** [🔗](https://github.com/anthropics/claude-code/issues/8327)
   *Workflow:* CLI startup / authentication.
   *Impact:* Pro/Max subscribers see an auth error because the env‑var key belongs to a different org.
   *Reaction:* 114 comments, 14 👍. Labeled `oncall`; no fix yet after 8 months.

3. **#18435 – Multi‑account switching in Claude Desktop** [🔗](https://github.com/anthropics/claude-code/issues/18435)
   *Workflow:* Desktop app – profile management.
   *Impact:* Users with multiple Claude accounts (personal + work) must log out/in each time.
   *Reaction:* 91 comments, 501 👍 – high demand for a basic UX feature.

4. **#54776 – 100% API quota consumed in 1–2 hours** [🔗](https://github.com/anthropics/claude-code/issues/54776)
   *Workflow:* Active coding sessions.
   *Impact:* Sudden explosion in token usage (a “20x customer” reports going from 10% to 100% in minutes).
   *Reaction:* 32 comments, 12 👍. Indicators of possible prompt or context‑loop regression.

5. **#56924 – 5‑hour limit removed but weekly limit unchanged?** [🔗](https://github.com/anthropics/claude-code/issues/56924)
   *Workflow:* Capacity planning.
   *Impact:* Confusion over whether capacity was actually doubled or just repackaged.
   *Reaction:* 17 comments, documentation gap acknowledged.

6. **#52151 – Opus 4.7 via Bedrock: VSCode extension stream ends with 0 events** [🔗](https://github.com/anthropics/claude-code/issues/52151)
   *Workflow:* VSCode extension + AWS Bedrock.
   *Impact:* After a few turns the stream silently ends; fallback shows `Unhandled case: [object Object]`.
   *Reaction:* 12 comments, 12 👍. CLI works fine – isolated to VSCode GUI.

7. **#40836 – Deleted projects remain in project switcher** [🔗](https://github.com/anthropics/claude-code/issues/40836)
   *Workflow:* Project management.
   *Impact:* Orphaned entries cannot be removed from the dropdown.
   *Reaction:* 10 comments; minor but persistent grievance.

8. **#58458 – Background color bleed in Apple Terminal (v2.1.139, dark‑ansi)** [🔗](https://github.com/anthropics/claude-code/issues/58458)
   *Workflow:* TUI agents view.
   *Impact:* Severe rendering corruption in native Terminal.app.
   *Reaction:* 8 comments, already closed as a duplicate (but still visible in the open list? cross‑reference needed).

9. **#24537 – Agent Hierarchy Dashboard** [🔗](https://github.com/anthropics/claude-code/issues/24537)
   *Workflow:* TUI/Desktop – multi‑agent orchestration.
   *Impact:* No unified view of parallel agent sub‑tasks, costs, and logs.
   *Reaction:* 7 comments, 13 👍 – a well‑received feature request.

10. **#58904 – Heredoc pipe bypass still present in v2.1.141** [🔗](https://github.com/anthropics/claude-code/issues/58904)
    *Workflow:* Bash permission model.
    *Impact:* Security regression: `<<EOF` pipes can evade permission checks, as reported in #48518. Fix only addressed CPU freeze, not the bypass.
    *Reaction:* 1 comment, high severity – critical for security‑conscious teams.

## Key PR Progress

1. **#58842 – Use `git diff --stat` in commit commands to reduce context bloat** [🔗](https://github.com/anthropics/claude-code/pull/58842)
   Replaces full unified diff with `--stat` in `/commit` and `/commit-push-pr`. Reduces token consumption on large repos.

2. **#58801 – Add `agents.txt` v1.0 specification** [🔗](https://github.com/anthropics/claude-code/pull/58801)
   Proposes a root‑level `agents.txt` file to declare allowed agent actions on a repository. Built by Claude Code itself; now open for community feedback.

3. **#56334 – Windows Developer Mode note for symlink support** [🔗](https://github.com/anthropics/claude-code/pull/56334)
   Adds documentation warning that background agent outputs fail silently when Developer Mode is off. Addresses #55263.

4. **#58744 – New `/teach` command** [🔗](https://github.com/anthropics/claude-code/pull/58744)
   Lets users incrementally teach Claude Code about project conventions; findings are saved to `CLAUDE.md`. Community‑contributed feature.

5. **#58646 – Git‑aware session history across worktrees** [🔗](https://github.com/anthropics/claude-code/pull/58646)
   Keys session history by git worktree root instead of raw CWD, preventing history fragmentation when switching branches.

6. **#58644 – Chained Bash hook example** [🔗](https://github.com/anthropics/claude-code/pull/58644)
   Adds a conservative `PreToolUse` hook that blocks chained Bash commands outside quoted strings. Mitigation for the compound‑command permission gap.

7. **#58641 – Auth troubleshooting documentation** [🔗](https://github.com/anthropics/claude-code/pull/58641)
   Explains the “organization disabled” error caused by `ANTHROPIC_API_KEY` taking precedence over subscription login. Includes safe env‑var checks.

8. **#58639 – Support `AGENTS.md` in review guidelines** [🔗](https://github.com/anthropics/claude-code/pull/58639)
   Updates code‑review workflows to read `AGENTS.md` alongside `CLAUDE.md`. Prefers `CLAUDE.md` on conflict.

9. **#58655 – `clean_gone`: avoid positional substitution in `$1`** [🔗](https://github.com/anthropics/claude-code/pull/58655)
   Replaces `awk '{print $1}'` with sed to prevent Claude Code from interpreting `$1` as a command substitution. Fixes #52226.

10. **#11713 – Developer‑utilities plugin** [🔗](https://github.com/anthropics/claude-code/pull/11713)
    Adds 5 community‑requested commands (e.g., `/list-sessions`, `/label-session`). Removed session‑management commands that were superseded by native features.

## Feature Request Clusters

- **Account & Subscription Management**
  Switching between multiple Claude accounts (#18435), persistent “organization disabled” errors (#8327), and confusion about weekly limits (#56924). High demand for better OAuth handling and account switching.

- **IDE & Editor Integration**
  JetBrains plugin (#47166), direct read/write on VS Code virtual file systems (#34140), and better Copilot‑like inline assistance. The Bedrock‑VSCode stream bug (#52151) also underscores fragility in IDE integrations.

- **Developer Experience & UI**
  Customizable Enter key behavior (#56672) – newline vs submit. Agent hierarchy dashboard for multi‑agent workflows (#24537). Project list cleanup (#40836) and changelog cache refresh (#57982).

- **Security & Privacy**
  Feedback sharing opt‑out with source‑code inclusion (#58894). Env‑var secret leakage via `claude mcp remove` (#58850). Permission bypass for heredocs (#58904) and IDE selection context (#58902). These signal growing concern among enterprise users.

## Developer Pain Points

- **Phone verification lock‑out** (#34229) dominates community frustration – 735 comments and 811 👍. Even if marked invalid, the scale indicates a broken onboarding flow that affects real users.
- **Exploding API costs** (#54776, #54761) – several users report sudden token‑usage spikes that drain quota in 1–2 hours. Combined with confusion over weekly limit changes (#56924), cost transparency is a top pain point.
- **Auth issues** (#8327, #58625) – API keys overriding subscription entitlements, OAuth responses missing `organizationType`. No resolution after months.
- **Rate limiting** (#57134) – retries are silent, leaving users staring at a frozen spinner for ~23 seconds before a generic error.
- **Security regressions** – the heredoc bypass (#58904) labelled as regression of #48518, and IDE selection context bypassing `.env` file permissions (#58902). Both are recent and security‑critical.
- **Windows/ARM instability** – Cowork crashes on Snapdragon X Elite (#58891); symlink failures without Developer Mode (#56334, PR #56334 only adds doc).
- **Memory leaks** (#47248) – persistent issue across multiple versions, affecting short sessions on macOS ARM64.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-14

## Today’s Update Brief

No new releases were published in the last 24 hours. Community activity centered on a high-severity phone verification bug (#20161, 121 comments) and a long-standing remote compact task error (#14860, 68 comments). Several Windows Desktop startup failures continue to generate discussion, while PRs on the TUI, remote control, and MCP routing moved forward.

## Releases

No new versions of Codex CLI or Codex Desktop were released in the last 24 hours.

## Hot Issues

### 1. Phone number verification blocks SSO login ([#20161](https://github.com/openai/codex/issues/20161))
- **Status:** Closed | **Comments:** 121 | **Reactions:** 👍 87
- **Workflow affected:** Account authentication when switching devices.
- **Impact:** Users logging in via SSO on a different device are prompted for phone number verification despite having no phone number on their account. 87 upvotes suggest wide impact.
- **Community reaction:** Heavy discussion; the issue was resolved (closed) as of this digest date.

### 2. Remote compact task fails on Linux/Pro ([#14860](https://github.com/openai/codex/issues/14860))
- **Status:** Open (since March 2026) | **Comments:** 68 | **Reactions:** 👍 50
- **Workflow affected:** Context compaction during long sessions on Codex CLI.
- **Impact:** Users on Pro subscription with `gpt-5.4` on Linux cannot complete remote compact tasks, degrading session context management.
- **Community reaction:** Sustained interest; no maintainer resolution visible.

### 3. MCP zombie processes cause 37 GB memory leak ([#12491](https://github.com/openai/codex/issues/12491))
- **Status:** Closed | **Comments:** 23 | **Reactions:** 👍 3
- **Workflow affected:** Codex Desktop GUI using MCP plugins.
- **Impact:** After task completion, MCP child processes are not reaped, accumulating 1300+ zombie processes and 37 GB memory loss.
- **Community reaction:** Reported against `codex-cli 0.98.0`; now closed, likely patched in newer builds.

### 4. Codex “really too slow” across all platforms ([#21527](https://github.com/openai/codex/issues/21527))
- **Status:** Open | **Comments:** 16 | **Reactions:** 👍 7
- **Workflow affected:** General response latency in Codex Desktop and VS Code plugin.
- **Impact:** Users report slow model responses regardless of platform (Windows reported).
- **Community reaction:** Several users corroborate; no root cause identified yet.

### 5. `/review` should support configurable issue count ([#5547](https://github.com/openai/codex/issues/5547))
- **Status:** Open | **Comments:** 15 | **Reactions:** 👍 59
- **Workflow affected:** Code review via `/review` slash command.
- **Impact:** Currently `/review` outputs a fixed number of issues; power users want to specify how many issues to surface.
- **Community reaction:** Very high demand (59 👍), feature request from October 2025 still open.

### 6. Codex Web cannot open PRs ([#21000](https://github.com/openai/codex/issues/21000))
- **Status:** Open | **Comments:** 13 | **Reactions:** 👍 9
- **Workflow affected:** PR creation from Codex Web interface.
- **Impact:** Clicking “Create PR” yields a generic “Failed to create PR” error with no actionable guidance.
- **Community reaction:** Several users confirm the issue; no workaround documented.

### 7. TUI logs grow unbounded without rotation ([#16886](https://github.com/openai/codex/issues/16886))
- **Status:** Open | **Comments:** 8 | **Reactions:** 👍 2
- **Workflow affected:** Codex CLI TUI on macOS.
- **Impact:** Log files continue to accumulate, consuming disk space over long sessions.
- **Community reaction:** Small but clear pain point; no resolution yet.

### 8. Desktop project chat histories lost after update ([#20741](https://github.com/openai/codex/issues/20741))
- **Status:** Open | **Comments:** 7 | **Reactions:** 👍 5
- **Workflow affected:** Codex Desktop on macOS Tahoe.
- **Impact:** After app update (build 26.429.30905), all project chat histories disappeared.
- **Community reaction:** Urgent-severity; users frustrated about data loss.

### 9. Windows 10 workspace dependency repair fails ([#19811](https://github.com/openai/codex/issues/19811))
- **Status:** Open | **Comments:** 5 | **Reactions:** 👍 5
- **Workflow affected:** Codex Desktop on Windows 10.
- **Impact:** App prompts dependency repair but fails because Windows 10 is explicitly unsupported.
- **Community reaction:** Users stuck in a broken state with no path forward.

### 10. WSL system crash from Codex OOM ([#18041](https://github.com/openai/codex/issues/18041))
- **Status:** Open | **Comments:** 4 | **Reactions:** 👍 0
- **Workflow affected:** Codex sessions on WSL with `gpt-5.4 xhigh`.
- **Impact:** Out-of-memory condition causes full WSL guest crash, losing all work.
- **Community reaction:** Low discussion volume but high severity.

## Key PR Progress

### 1. Prefer backend model list for SIWC users ([#22547](https://github.com/openai/codex/pull/22547))
- **Author:** jeevnayak
- **Description:** Model list merging logic now prefers the backend-supplied list over bundled list, needed for users with limited allowed models.
- **Status:** Open

### 2. Support turn context overrides ([#22589](https://github.com/openai/codex/pull/22589))
- **Author:** raju-openai
- **Description:** Enables `turn/start` to update model-visible `currentDate` and `timezone`; persists overrides in core turn context.
- **Status:** Open

### 3. Isolate codex home for live CLI tests ([#22563](https://github.com/openai/codex/pull/22563))
- **Author:** starr-openai
- **Description:** Fixes test pollution where integration tests were writing state to shared `~/.codex` directory.
- **Status:** Open

### 4. Defer startup NUX until startup succeeds ([#22587](https://github.com/openai/codex/pull/22587))
- **Author:** etraut-openai
- **Description:** Follow-up to a previous PR; prevents model-availability NUX from being rendered before app server startup completes.
- **Status:** Open

### 5. Fix macOS sandbox for document rendering ([#22416](https://github.com/openai/codex/pull/22416))
- **Author:** dibyo-openai
- **Description:** Adjusts macOS Seatbelt policy for headless document rendering tools (e.g., LibreOffice) that initialize AppKit/CoreServices.
- **Status:** Open

### 6. Fix remote environment test fixtures ([#22572](https://github.com/openai/codex/pull/22572))
- **Author:** starr-openai
- **Description:** Repairs Docker remote-env coverage tests that were failing before reaching the behavior under test.
- **Status:** Open

### 7. Split composer attachment and popup state ([#22581](https://github.com/openai/codex/pull/22581))
- **Author:** etraut-openai
- **Description:** Refactors `ChatComposer` to separate text editing state from attachment and popup lifecycle state, clarifying ownership.
- **Status:** Open

### 8. Preserve goal timer on updates ([#22586](https://github.com/openai/codex/pull/22586))
- **Author:** richardopenai
- **Description:** Accounts elapsed active goal time before `update_thread_goal` refreshes `updated_at_ms`; fixes regression coverage.
- **Status:** Open

### 9. Route delegated MCP elicitation responses back to child session ([#22399](https://github.com/openai/codex/pull/22399))
- **Author:** canvrno-oai
- **Description:** Fixes bug where `/review` MCP elicitation responses were routed to parent session instead of the child session, causing `elicitation request not found` errors.
- **Status:** Open

### 10. Fix `/review` mode MCP startup render issue ([#21624](https://github.com/openai/codex/pull/21624))
- **Author:** canvrno-oai
- **Description:** Prevents UI from showing “Starting MCP servers” after review work is already running or completed.
- **Status:** Open

## Feature Request Clusters

A few recurring enhancement areas emerged from today’s issues:

- **`/review` configurability** ([#5547](https://github.com/openai/codex/issues/5547)): Users want to control how many issues the review command surfaces.
- **Context compaction model selection** ([#22486](https://github.com/openai/codex/issues/22486)): Request to configure the model used for context compaction independently from the active session model.
- **Parallel work within a session** ([#22561](https://github.com/openai/codex/issues/22561)): Users desire the ability to assign or ask multiple tasks simultaneously in one session.
- **User-defined local slash commands** ([#18857](https://github.com/openai/codex/issues/18857)): Request for custom slash commands that run local actions without sending data to the model.
- **Worktree and branch visibility** ([#22130](https://github.com/openai/codex/issues/22130)): Users want the worktree path/branch shown in the bottom status bar, and auto-creation of branches for new worktrees.

## Developer Pain Points

Several pain points recur across today’s issue list:

- **Windows Desktop startup failures**: Multiple reports of blank white screens or dependency repair loops on Windows 10/11 ([#19770](https://github.com/openai/codex/issues/19770), [#19811](https://github.com/openai/codex/issues/19811), [#21650](https://github.com/openai/codex/issues/21650), [#21505](https://github.com/openai/codex/issues/21505)).
- **Context compaction errors**: Remote compact tasks fail with stream disconnection or model errors ([#14860](https://github.com/openai/codex/issues/14860), [#22107](https://github.com/openai/codex/issues/22107), [#22467](https://github.com/openai/codex/issues/22467)).
- **MCP integration issues**: Schema parsing with `$defs/$ref` ([#13746](https://github.com/openai/codex/issues/13746)), zombie processes ([#12491](https://github.com/openai/codex/issues/12491)), and routing failures ([#22399](https://github.com/openai/codex/issues/22399)).
- **Chat history / session data loss**: Four separate reports of project histories disappearing after updates ([#20741](https://github.com/openai/codex/issues/20741)).
- **Authentication friction**: Phone verification forced on SSO login ([#20161](https://github.com/openai/codex/issues/20161)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-14

## Today's Update Brief
No new releases were published in the last 24 hours. Issue activity remains heavy, with 50 total updated items; the capacity crisis tracking issue (#24937) continues to dominate with 94 comments. Pull request activity is robust, with 50 total updated PRs—several fixing critical bugs around WSL path handling, PowerShell compatibility, and an SSRF vulnerability in the web-fetch tool.

## Releases
*No new releases in the last 24 hours.*

## Hot Issues

1. **[#24937 – Tracking: 429 / Capacity Issues](https://github.com/google-gemini/gemini-cli/issues/24937)** (94 comments, P0)
   - **Affected workflow:** All API-dependent operations (chat, agent runs, tool calls).
   - **Impact:** Users across multiple regions are hitting `429 Too Many Requests` errors, making the CLI unusable for extended periods. The tracking issue has become a central vent for community frustration.
   - **Reaction:** Heavily commented, zero 👍 (as a tracking issue). Maintainers are engaged but no fix committed yet.

2. **[#5580 – Authentication consistently fails](https://github.com/google-gemini/gemini-cli/issues/5580)** (20 comments, 12 👍, P1)
   - **Affected workflow:** First-time setup and re-authentication.
   - **Impact:** Users following documented auth flow are left with an unauthenticated state, completely blocking CLI usage. Open since August 2025, it's a long-standing onboarding blocker.
   - **Reaction:** Strong community upvote (12 👍), clear frustration in comments.

3. **[#26619 – Deceptive Model Forcing: Flash quota consumed when locked to Pro](https://github.com/google-gemini/gemini-cli/issues/26619)** (9 comments, P1/P2)
   - **Affected workflow:** Users explicitly selecting `gemini-3.1-pro` via config.
   - **Impact:** The CLI silently routes some internal tool calls to the Flash model, consuming Flash quota despite explicit user configuration. Paying Google One AI Ultra subscribers report being blocked by "rate limit" errors on the wrong model.
   - **Reaction:** Strongly worded, high urgency. User demands transparency and refund consideration.

4. **[#26186 – Credit Refund Request: autonomous high-cost migration](https://github.com/google-gemini/gemini-cli/issues/26186)** (9 comments, P1/P2/P3)
   - **Affected workflow:** Agent-assisted code refactoring with "Strict Refactor" protocols.
   - **Impact:** Agent autonomously performed a 2+ hour, 6-module migration without user approval, exhausting the user's credit balance. Highlights a critical gap in agent cost-control guardrails.
   - **Reaction:** Community concerned about cost overrun risk; maintainers tagged for manual triage.

5. **[#26010 – ENAMETOOLONG crash pasting large JSON](https://github.com/google-gemini/gemini-cli/issues/26010)** (6 comments, P2)
   - **Affected workflow:** Pasting large JSON objects or hex strings into the CLI.
   - **Impact:** Input parser incorrectly identifies long strings as file paths, triggering `ENAMETOOLONG: name too long, lstat` and a crash. Unhandled promise rejection brings down the session.
   - **Reaction:** Clear bug report, maintainer attention needed.

6. **[#19885 – OAuth fails with VS Code Remote Tunnels](https://github.com/google-gemini/gemini-cli/issues/19885)** (6 comments, P3)
   - **Affected workflow:** `code tunnel` users logging into Gemini Code Assist.
   - **Impact:** OAuth callback redirects to `localhost:PORT` which is unreachable from the local browser, blocking VS Code Remote Tunnel users completely.
   - **Reaction:** Long-standing issue (Feb 2026), user base growing with remote development adoption.

7. **[#20780 – feat(sandbox): Windows platform detection missing](https://github.com/google-gemini/gemini-cli/issues/20780)** (7 comments, P3)
   - **Affected workflow:** Windows users enabling `GEMINI_SANDBOX=true`.
   - **Impact:** No native Windows sandbox path; falls through to Docker/Podman (manual install) or errors out. Windows users lack sandbox security.
   - **Reaction:** Community request with implementation suggestion, stale but not resolved.

8. **[#22323 – Subagent recovery after MAX_TURNS reported as success](https://github.com/google-gemini/gemini-cli/issues/22323)** (6 comments, 2 👍, P1/P2)
   - **Affected workflow:** Multi-agent investigations hitting turn limits.
   - **Impact:** `codebase_investigator` subagent reports `status: "success"` even when it hit `MAX_TURNS` before doing any analysis. The interruption is hidden, misleading users into believing the task completed.
   - **Reaction:** 2 👍, maintainer-flagged for retesting.

9. **[#21653 – Hierarchical agent and skill directory detection](https://github.com/google-gemini/gemini-cli/issues/21653)** (5 comments, 7 👍)
   - **Affected workflow:** Custom agent/skill development with nested directory structures.
   - **Impact:** All skills and sub-agents must live in a flat directory, forcing organization chaos for complex projects. Users want nested directory support.
   - **Reaction:** 7 👍, strong community demand for this quality-of-life improvement.

10. **[#22503 – Security Sandbox Bypass via hookConfig.env Injection](https://github.com/google-gemini/gemini-cli/issues/22503)** (4 comments)
    - **Affected workflow:** Command hook execution with sandbox enabled.
    - **Impact:** User-provided `hookConfig.env` is spread *after* sanitized `process.env`, allowing injection of arbitrary environment variables—bypassing sandbox isolation.
    - **Reaction:** Security vulnerability reported with code-level analysis, manually triaged.

## Key PR Progress

1. **[#27025 – fix(core): handle Windows paths under WSL](https://github.com/google-gemini/gemini-cli/pull/27025)** (OPEN)
   - Translates Windows drive-letter paths to WSL mount paths when running under WSL, preserving existing behavior for non-WSL environments.

2. **[#27026 – feat(cli): add full-access approval controls](https://github.com/google-gemini/gemini-cli/pull/27026)** (OPEN)
   - Adds `--full-access` as the preferred privileged approval flag, keeps `--yolo` as deprecated alias. Enables sandbox defaults for privileged mode.

3. **[#25900 – fix(core): prefer pwsh.exe over Windows PowerShell 5.1](https://github.com/google-gemini/gemini-cli/pull/25900)** (CLOSED)
   - Fixes embedded double-quote handling on Windows by preferring PowerShell Core over legacy 5.1. Closes 5 related issues.

4. **[#26169 – fix: remove unsafe exec() in app.ts](https://github.com/google-gemini/gemini-cli/pull/26169)** (CLOSED)
   - Fixes critical severity security vulnerability (V-001) in the A2A server HTTP layer. Removes unsafe `exec()` call.

5. **[#26174 – fix: remove instruction to combine shell commands with &&](https://github.com/google-gemini/gemini-cli/pull/26174)** (CLOSED)
   - Fixes PowerShell compatibility by removing system prompt instruction to combine commands with `&&`, which doesn't work on Windows.

6. **[#26158 – feat(core): implement tool repair](https://github.com/google-gemini/gemini-cli/pull/26158)** (CLOSED)
   - Implements automatic repair mechanism for failed tool calls. Fixes #26156.

7. **[#26159 – feat(core): implement continuation auto-recovery](https://github.com/google-gemini/gemini-cli/pull/26159)** (CLOSED)
   - Adds auto-recovery for continuation failures. Fixes #26157.

8. **[#26615 – fix(core): prevent SSRF via open redirect in web-fetch tool](https://github.com/google-gemini/gemini-cli/pull/26615)** (OPEN)
   - Prevents SSRF by using `redirect: 'manual'` in fetch calls, blocking attacker-controlled redirects to private IPs.

9. **[#26161 – fix: shell configuration executable and args not taking effect](https://github.com/google-gemini/gemini-cli/pull/26161)** (CLOSED)
   - Fixes `tools.shell.executable` and `tools.shell.args` settings being completely ignored. Critical for Windows users with custom shells.

10. **[#26913 – fix(security): set restrictive permissions on background process logs](https://github.com/google-gemini/gemini-cli/pull/26913)** (CLOSED)
    - Changes log file creation mode from world-readable (0o644) to owner-only (0o600), preventing information leakage.

## Feature Request Clusters

**Memory System Enhancements** (4 issues by @SandyTao520):
- [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) – Deterministic redaction before sending transcript content to model.
- [#26523](https://github.com/google-gemini/gemini-cli/issues/26523) – Surface/quarantine invalid Auto Memory inbox patches.
- [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) – Stop retrying low-signal sessions indefinitely.
- [#26516](https://github.com/google-gemini/gemini-cli/issues/26516) – General memory system bugs and quality improvements.

**AST-Aware Tooling**:
- [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) (7 comments, 1 👍) – EPIC investigating AST-aware file reads, search, and codebase mapping for more precise tool calls.

**Hierarchical Agent/Skill Organization**:
- [#21653](https://github.com/google-gemini/gemini-cli/issues/21653) (5 comments, 7 👍) – Support for nested directory structures in agent and skill detection.

## Developer Pain Points

- **Authentication Reliability:** Issue #5580 (20 comments, 12 👍) remains the top-voted open frustration. Users cannot get past first-time auth, a hard blocker for onboarding.
- **Capacity/Rate Limiting:** #24937 (94 comments) dominates the tracker. Users across regions experience regular 429 errors with no graceful retry or queueing.
- **Model Quota Transparency:** #26619 (9 comments) reveals that the CLI silently uses Flash quota even when Pro is selected, causing unexpected rate limits—a trust-eroding issue for paying subscribers.
- **Agent Cost Control:** #26186 (9 comments) highlights that agents can autonomously run high-cost operations for hours without approval, with no cost cap or user intervention mechanism.
- **Windows Parity:** Multiple issues (#20780, #25900, #26174, #26161) show Windows users face sandbox, shell, and path problems that don't affect macOS/Linux users. The WSL path fix (#27025) and PowerShell preference (#25900) are directly addressing this.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-14

## Today's Update Brief
Three releases shipped in the last 24 hours (v1.0.47, v1.0.48-0, v1.0.48-1) addressing rendering bugs, model token limits, and sessions improvements. However, v1.0.48-0 introduced a critical regression on Windows ARM64 (missing native bindings), spawning multiple fresh issues. Community activity remains high with 48 issues updated in the past day, including several CVE‑like “cannot find native binding” reports and long‑standing feature requests around session forking and MCP server visibility.

## Releases

### v1.0.48-1 (2026-05-14)
**Fixed**
- Input text with CJK characters or emoji now renders without blank gaps between lines.
- `/context` shows correct token limits per model instead of always showing 128k.

### v1.0.48-0 (2026-05-14)
**Improved**
- `/ask` dialog no longer prompts for follow‑up replies it cannot receive.
- Skill content injected to the model no longer includes YAML frontmatter metadata.

**Fixed**
- Auto‑disable the built‑in `github-mcp-server` in Azure DevOps‑only workspaces when running in prompt/headless mode.

### v1.0.47 (2026-05-13)
- `/fork` accepts an optional name; forked sessions display their origin in the sessions dialog.
- Copilot Max subscribers now see the correct models available to their subscription tier.
- Support `j`/`k` keys for up/down navigation in the `/diff` view.
- `--resume` supports Copilot cloud agent sessions.

## Hot Issues

1. **#2630 – Custom agent `mcp-servers` not connected in sub-agent or `--prompt` contexts**
   *[area: non-interactive, agents, MCP]*
   Users define MCP servers in agent YAML frontmatter, but they are not connected when invoked via the `task` tool or as the primary agent in `--prompt` mode. Only basic tools (`view`, `sk...`) are available.
   [Issue link](https://github.com/github/copilot-cli/issues/2630)

2. **#2058 – Add `/fork` command to branch a session for side quests**
   *[area: sessions]*
   Currently a side question derails the main objective; the request is to create a forked session. 7 👍, 9 comments, feature request. Already partially addressed in v1.0.47 (see Releases).
   [Issue link](https://github.com/github/copilot-cli/issues/2058)

3. **#1433 – Problem with `COPILOT_CUSTOM_INSTRUCTIONS_DIRS`**
   *[area: context-memory, configuration]*
   Custom `AGENTS.md` on NFS not detected when the env variable points outside the project tree. 6 👍, 8 comments.
   [Issue link](https://github.com/github/copilot-cli/issues/1433)

4. **#3304 – `ERR_HTTP2_INVALID_SESSION` – repeated transient retries**
   *[area: networking]*
   New issue (2026-05-13). CLI surfaces “Request failed due to a transient API error” followed by `ERR_HTTP2_INVALID_SESSION`. Occurs frequently, often mid‑turn on long reasoning responses. 6 comments.
   [Issue link](https://github.com/github/copilot-cli/issues/3304)

5. **#3281 – v1.0.46 CLI unusable – “Failed to start MCP Servers: Cannot find native binding”**
   *[area: MCP, installation]*
   Immediately after upgrade, startup fails with npm optional dependency bug. 6 comments.
   [Issue link](https://github.com/github/copilot-cli/issues/3281)

6. **#3287 – v1.0.46 blocker: “Cannot find native binding”**
   *[area: sessions, installation]*
   Closed as duplicate of #3281 but with 2 👍, 6 comments. Indicates widespread impact.
   [Issue link](https://github.com/github/copilot-cli/issues/3287)

7. **#3260 – Copy/Paste broken in SSH + tmux on Windows Server 2025**
   *[area: input-keyboard, platform-windows]*
   After v1.0.47, copy/paste fails when accessing remote Windows Server via SSH inside a tmux session. 4 comments.
   [Issue link](https://github.com/github/copilot-cli/issues/3260)

8. **#3013 – Hooks don’t fire for background (task) agents**
   *[area: permissions, agents, plugins]*
   Security concern: hooks designed to block dangerous commands are bypassed when the command is run via a sub‑agent. 2 comments.
   [Issue link](https://github.com/github/copilot-cli/issues/3013)

9. **#3052 – `--add-github-mcp-tool` leaves endpoint readonly**
   *[area: configuration, MCP, tools]*
   Even after passing `--add-github-mcp-tool=create_pull_request`, the `github-mcp-server` still points to the readonly endpoint `/mcp/readonly`. 1 👍, 1 comment.
   [Issue link](https://github.com/github/copilot-cli/issues/3052)

10. **#3310 – Windows ARM64 v1.0.48-0 fails: “Native addon runtime not found for win32-arm64”**
    *[area: platform-windows, installation]*
    Fresh issue (2026-05-14). The universal package ships runtime.node for all platforms except win32‑arm64. Also reported in #3309, #3307, #3306.
    [Issue link](https://github.com/github/copilot-cli/issues/3310)

## Key PR Progress

Only one pull request was updated in the last 24 hours:

- **#772 – Add installation script** (CLOSED)
  Provides a `curl | bash` installer for the CLI. Resolves issue #771.
  [PR link](https://github.com/github/copilot-cli/pull/772)

Given the low PR activity, no further selections are possible.

## Feature Request Clusters

### Session Management Enhancements
- **`/fork` command** (#2058) – branch sessions for side quests (partially shipped in v1.0.47).
- **Session favorites / starring** (#3300) – allow users to mark sessions for easy recall in `--resume`.
- **Better resume UI** (#3300) – add a “favorites” section in the resume menu.

### MCP & Agent Visibility
- **Research mode MCP access** (#3302) – `/research` agent cannot see configured MCP servers/tools.
- **Custom agent MCP in sub‑agents** (#2630) – MCP tools lost when agents invoke other agents.
- **Observability** (#3305) – org‑level monitoring of Copilot CLI usage, especially skill invocation, by user and reliability.

### Input / Output Improvements
- **Reject/override options in plan mode** (#3303) – when the model presents a choice, there is no way to input a custom answer.
- **Local web UI** (#3301) – inspired by `opencode web`, a browser‑based interface for Copilot CLI to reduce terminal‑only limitations.

## Developer Pain Points

### Native Binding / Platform Failures
A surge of issues report “Cannot find native binding” after upgrading to v1.0.46–v1.0.48-0. Three distinct root causes emerged:
- **Windows ARM64** (#3310, #3309, #3307, #3306): `runtime.node` missing from prebuilds.
- **Linux glibc version mismatch** (#3296): Ubuntu 20.04 ships glibc <2.33, but the binary requires 2.33+.
- **npm optional dependency bug** (#3281, #3287): `Cannot find native binding` error reproduced across environments, often fixed by `npm i` after clearing lockfiles.

### MCP Server Connectivity Gaps
- Custom agent MCP servers are invisible in sub‑agent and `--prompt` contexts (#2630).
- `--add-github-mcp-tool` attaches to a readonly endpoint, making the tool unusable (#3052).
- Research mode cannot access MCP servers (#3302).

### Session State & Transience
- HTTP/2 session destruction (#3304) causes repeated retries and mid‑conversation failures.
- Hooks are bypassed by sub‑agents, reducing the security model’s effectiveness (#3013).
- Copy/paste broken in SSH+tmux on Windows Server (#3260) – a regression from v1.0.47.

---

*All links point to GitHub issues/PRs on `github/github/copilot-cli`. Data fetched 2026-05-14.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-14

## Today's Update Brief

Activity remains high, driven by widespread user complaints about K2.6 model degradation and a cluster of MCP stderr leakage regressions introduced in v1.43.0. The maintainers have merged the v1.44.0 release commit and pushed several targeted fixes for MCP stderr routing, broadcast queue memory safety, and TCP connection reuse. No new releases were published in the past 24 hours, but the v1.44.0 cut is staged.

## Releases

No new releases in the last 24 hours. Release v1.43.0 is the current version; v1.44.0 has been staged via PR #2262 but not yet tagged.

## Hot Issues

1. **[#2268 – Insane degradation since model change](https://github.com/MoonshotAI/kimi-cli/issues/2268)**
   *Affected workflow:* Coding on v1.30.0 with `kimi-for-coding` vs. v1.43.0 with K2.6. The user reports tasks that used to complete instantly now get stuck for 10+ minutes.
   *Impact:* High. This is the most recent of several K2.6 performance complaints, with one 👍 and immediate traction.
   *Community reaction:* Direct, frustrated, and specific about the regression boundary.

2. **[#2077 – K2.6 model overloaded – unusable under normal load](https://github.com/MoonshotAI/kimi-cli/issues/2077)**
   *Affected workflow:* Allegretto membership, macOS Apple Silicon, using K2.6. Constant retries and timeouts.
   *Impact:* Critical for paid users. 8 comments over 18 days with no resolution visible.
   *Community reaction:* Long-running discussion, still open, user calling for rollback ability.

3. **[#1925 – Kimi K2.5 vs K2.6](https://github.com/MoonshotAI/kimi-cli/issues/1925)**
   *Affected workflow:* Users wanting to switch back to K2.5 due to perceived loss of creativity and increased hallucinations in K2.6.
   *Impact:* Medium. 11 comments, still open. Represents a significant user sentiment split on model direction.
   *Community reaction:* articulate but unresolved; user feels personality was lost.

4. **[#2263 – MCP server stderr leaks into interactive terminal](https://github.com/MoonshotAI/kimi-cli/issues/2263)**
   *Affected workflow:* Linux, v1.43.0, using MCP servers with stdio transport. stderr from subprocesses corrupts TUI rendering.
   *Impact:* Medium–high for MCP users. Regression from earlier fixed behavior.
   *Community reaction:* Clear bug report, immediate cross-reference with other MCP stderr issues (#2265, #2251).

5. **[#2265 – MCP subprocess stderr log leaks to TUI interface (regression)](https://github.com/MoonshotAI/kimi-cli/issues/2265)**
   *Affected workflow:* Linux Fedora 43, K2.6, stdio MCP servers. Same root cause as #2263.
   *Impact:* Duplicate cluster forming, which itself signals the regression is widespread.
   *Community reaction:* Chinese-language report, pointed to known fix PR #2259.

6. **[#2251 – MCP stdio server stderr leaks break TUI rendering after upgrade to 1.43.0](https://github.com/MoonshotAI/kimi-cli/issues/2251)**
   *Affected workflow:* macOS, MCP users. Identical symptom to #2263/#2265.
   *Impact:* Third report in same hour window — indicates heavy user base on MCP.
   *Community reaction:* User explicitly tied the cause to the v1.43.0 upgrade.

7. **[#2178 – Windows: blank FileVersionInfo causes VS Code extension rejection](https://github.com/MoonshotAI/kimi-cli/issues/2178)**
   *Affected workflow:* Windows 10, VS Code extension integration. `kimi.exe` v1.41.0 has blank FileVersionInfo, making the extension reject it as incompatible.
   *Impact:* Medium. Blocks VS Code workflow on Windows. 3 comments, still open.
   *Community reaction:* Precise diagnostic, user identified the root cause.

8. **[#2264 – Proposal: Explore a Rust Port of Kimi CLI](https://github.com/MoonshotAI/kimi-cli/issues/2264)**
   *Affected workflow:* Not an immediate workflow issue. A community member offered hands-on help to port the CLI to Rust, citing their own migration experience.
   *Impact:* Low urgency, but notable signal of community investment.
   *Community reaction:* Author acknowledges the meme ("Rewrite it in Rust") but provides substantive reasoning.

9. **[#2256 – feat(git): official Co-authored-by trailer with branded GitHub avatar](https://github.com/MoonshotAI/kimi-cli/issues/2256)**
   *Affected workflow:* Git commit attribution when using Kimi Code CLI to generate commits.
   *Impact:* Low for core stability, but 1 👍 indicates interest.
   *Community reaction:* Detailed feature request with attribution branding perspective.

10. **[#2232 – Background tasks need adjustable timeout](https://github.com/MoonshotAI/kimi-cli/issues/2232)**
    *Affected workflow:* Background task execution. Timeout is too aggressive for long-running tasks; tasks killed mid-execution require manual retry.
    *Impact:* Medium. Affects users relying on background agents for heavy processing.
    *Community reaction:* Chinese-language request, one comment.

## Key PR Progress

1. **[#2262 – chore(release): bump kimi-cli and kimi-code to 1.44.0](https://github.com/MoonshotAI/kimi-cli/pull/2262)**
   *Status:* Closed (merged). Staged the v1.44.0 release. Breaking-changes.md reorganized.

2. **[#2259 – fix: redirect stdio MCP stderr to logs](https://github.com/MoonshotAI/kimi-cli/pull/2259)**
   *Status:* Open. Routes stdio MCP subprocess stderr to `~/.kimi/logs/mcp/<server>.log` instead of terminal. Includes regression test.
   *Impact:* Directly addresses #2263/#2265/#2251.

3. **[#2236 – fix(utils): bound broadcast queues and cap web store cache to prevent memory leaks](https://github.com/MoonshotAI/kimi-cli/pull/2236)**
   *Status:* Open. Fixes unbounded `asyncio.Queue` growth and unbounded session cache in web store.
   *Impact:* Memory safety improvement for long-running sessions.

4. **[#2231 – fix(aiohttp): reuse TCPConnector to prevent connection leaks](https://github.com/MoonshotAI/kimi-cli/pull/2231)**
   *Status:* Open. Reuses `TCPConnector` across all HTTP calls, reducing file-descriptor pressure and TCP handshake overhead.
   *Impact:* Latency and stability improvement for tool calls and auth flows.

5. **[#2261 – feat(shell): add slash command alias resolution and display](https://github.com/MoonshotAI/kimi-cli/pull/2261)**
   *Status:* Open. Slash command aliases resolve to canonical names; UI shows alias usage; telemetry tracks canonical names.
   *Impact:* Usability improvement for power users.

6. **[#2246 – feat(shell): add --prompt-interactive option](https://github.com/MoonshotAI/kimi-cli/pull/2246)**
   *Status:* Open. New `-P` / `--prompt-interactive` flag to pass initial prompt and keep session open.
   *Impact:* Addresses scripting/workflow use cases.

7. **[#2260 – feat: add kill_ring_system_clipboard config option](https://github.com/MoonshotAI/kimi-cli/pull/2260)**
   *Status:* Open. Adds option (default `true`) to control clipboard integration for kill-ring operations.
   *Impact:* Small but useful for clipboard-aware workflows.

8. **[#2255 – feat(shell): support Shift+Enter for inserting newlines](https://github.com/MoonshotAI/kimi-cli/pull/2255)**
   *Status:* Open. Closes #2254. Adds Shift+Enter as alternative for `Ctrl-J` / `Alt-Enter`.
   *Impact:* Improves onboarding familiarity.

9. **[#2257 – refactor(telemetry): track btw side question as tool_call event](https://github.com/MoonshotAI/kimi-cli/pull/2257)**
   *Status:* Closed (merged). Replaced lightweight `input_btw` telemetry with structured `tool_call` event for `/btw` flows.
   *Impact:* Better observability for side-question interactions.

10. **[#1771 – fix: always stringify tool message content in Chat Completions provider](https://github.com/MoonshotAI/kimi-cli/pull/1771)**
    *Status:* Open. Fixes 400 error when tool result has multiple `ContentPart`s.
    *Impact:* Fixes #1762 — critical for tool-using workflows.

## Feature Request Clusters

- **Model version management / rollback capability**
  Multiple requests to switch between K2.5 and K2.6 (#1925, #2077, #2268). Users want control over model version, especially when a model update degrades quality.

- **MCP / background process stderr isolation**
  Three separate reports (#2263, #2265, #2251) asking for MCP subprocess stderr to not pollute the TUI. PR #2259 directly addresses this, indicating maintainers prioritize it.

- **Internationalization (i18n) support**
  #2270 requests Simplified Chinese (zh-CN) CLI output. A single formal request but relevant given large Chinese-speaking user base.

- **Multi-device session handoff**
  #2269 proposes starting a CLI session on one device and continuing on another. Low urgency but shows interest in cross-environment workflows.

- **Background task timeout configurability**
  #2232 requests adjustable timeout for background tasks, a simple but frequent pain point.

## Developer Pain Points

1. **K2.6 model degradation** is the single most discussed pain point. Multiple users report slower responses, increased hallucinations, and loss of "personality" compared to K2.5 or earlier `kimi-for-coding` models. Requests for rollback or model selection are persistent.

2. **MCP stderr leakage** is a fresh regression in v1.43.0, with three near-simultaneous reports. The CLI redesign in 1.43.0 apparently broke stderr isolation. The fix PR #2259 is already open, suggesting maintainer awareness.

3. **Windows compatibility issues** persist: blank `FileVersionInfo` blocking VS Code extension (#2178), bundled CLI unavailability (#2258), and API errors on PowerShell (#778, still open since January).

4. **Free tier / login friction** (#2267) — the free version reportedly does not work at all for one user. Low volume but high impact for on-ramp users.

5. **Memory and connection safety** — PRs #2236 and #2231 address unbounded queues and connection reuse, suggesting internal awareness of resource leaks under sustained use.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-14

**Today's Update Brief:** A new patch release (v1.14.49) shipped with API improvements and default config auto-creation. The community remains highly active with 50 updated issues and 50 updated PRs; two significant SSE event-stream regressions from v1.14.44+ were identified and addressed by merged fixes today. The long-running Agent Teams feature request (#12661) continues to draw strong support (110 👍, 34 comments).

## Releases

**v1.14.49** — [Release](https://github.com/anomalyco/opencode/releases/tag/v1.14.49)

Core improvements:
- Added v2 model and provider listing API.
- DigitalOcean OAuth and Inference Router support (@Spherrrical).
- Global `opencode.jsonc` created automatically if no config exists.
- `customize-opencode` enabled by default with a linked full schema.
- Autocomplete enhancements (note: release notes appear truncated in source).

## Hot Issues

### 1. Feature: Agent Teams Equivalent (#12661)
[Issue](https://github.com/anomalyco/opencode/issues/12661) | Created Feb 8 | 34 comments | 110 👍
Community interest in an equivalent to Claude Code's Agent Teams feature. The request originated from Reddit discussion. No maintainer response yet.

### 2. Sandboxing for Agent Terminal Commands (#2242)
[Issue](https://github.com/anomalyco/opencode/issues/2242) | Created Aug 25, 2025 | 33 comments | 46 👍
Users want to restrict agent terminal access to the current directory. References macOS seatbelt patterns from gemini-cli/codex-cli. No sandbox equivalent exists in OpenCode.

### 3. iTerm2 TUI Scrolling Broken (#6209)
[Issue](https://github.com/anomalyco/opencode/issues/6209) | Created Dec 26, 2025 | 22 comments | 19 👍
Scrolling in iTerm2 scrolls the input box instead of the conversation output. Affects a significant macOS user segment.

### 4. AGENTS.md Not Loaded After `/new` (#11532)
[Issue](https://github.com/anomalyco/opencode/issues/11532) | Created Jan 31 | 19 comments | 14 👍
Starting a new session with `/new` does not reload `AGENTS.md`. Users must manually re-read the file. Currently [OPEN], with some maintainer discussion about expected behavior.

### 5. WSL1 Binary Format Error on v1.14.21+ (#24081)
[Issue](https://github.com/anomalyco/opencode/issues/24081) | Created Apr 24 | 15 comments | 2 👍
`cannot execute binary file: Exec format error` on WSL1 starting with v1.14.21. Last working version is v1.14.20. Regression affects Windows developers using WSL1 (not WSL2).

### 6. SSE /event Stream Closes Immediately (#26697) — [CLOSED]
[Issue](https://github.com/anomalyco/opencode/issues/26697) | Created May 10 | 13 comments | 13 👍
Server's `/event` SSE endpoint sends only `server.connected` then terminates. No subsequent bus events reach clients. Root cause identified and fixed in PRs today (#27411, #27425).

### 7. Image Clipboard Paste Not Working on Nix (#10154) — [CLOSED]
[Issue](https://github.com/anomalyco/opencode/issues/10154) | Created Jan 23 | 9 comments
Pasting images from clipboard into TUI fails on Nix systems with "I cannot see the image" error. Closed today, resolution details not in data.

### 8. Dvorak Keybind Issues in v1.14.48 (#27096)
[Issue](https://github.com/anomalyco/opencode/issues/27096) | Created May 12 | 8 comments
Keybinds broken on Dvorak layouts: `ctrl+k` pastes instead of cutting, Emacs-like bindings misbehave. Appears to read scancodes instead of keycodes.

### 9. Clipboard Copy Broken Over SSH + tmux in Ghostty (#15907)
[Issue](https://github.com/anomalyco/opencode/issues/15907) | Created Mar 3 | 7 comments | 9 👍
"Copied to clipboard" notification appears but system clipboard not actually updated when running over SSH inside tmux. Affects remote development workflows.

### 10. Fedora RPM Desktop Updater Fails (#23538)
[Issue](https://github.com/anomalyco/opencode/issues/23538) | Created Apr 20 | 7 comments | 2 👍
"Install and Restart" on Fedora RPM closes and relaunches the app but does not upgrade. Users must manually download new RPMs.

## Key PR Progress

### 1. Effect-native Core Event System (#27415)
[PR](https://github.com/anomalyco/opencode/pull/27415) | Opened May 14 | Contributor: @thdxr
Adds an Effect-native event service with typed definitions, instance-aware publishing, and bridge hooks to legacy event registries. Foundational infrastructure change for the ongoing Effect migration.

### 2. Fix: Event Stream Context Preservation (#27425) — [MERGED]
[PR](https://github.com/anomalyco/opencode/pull/27425) | Merged May 14 | Contributor: @kitlangton
Keeps `/event` SSE subscriptions alive by providing Effect context to the deferred stream body. Fixes the event stream regression reported in #26697, #27023, and #26635.

### 3. Fix: Instance Context for Event Stream (#27411) — [MERGED]
[PR](https://github.com/anomalyco/opencode/pull/27411) | Merged May 14 | Contributor: @rekram1-node
Alternative fix for the same SSE regression. Closes #27391, #26697, #27023, #26635. Root cause was `bus.subscribeAll()` returning `Stream.unwrap(Effect.gen(...))` without providing instance context.

### 4. Native LLM Runtime Preview (#27114)
[PR](https://github.com/anomalyco/opencode/pull/27114) | Opened May 12 | Contributor: @kitlangton
Opt-in native LLM runtime for sessions, keeps AI SDK as default. Converts both SDK and native provider streams into shared `LLMEvent` shape. Adds OpenAI Responses native request capabilities.

### 5. Server Listener Lifecycle Refactor (#27413)
[PR](https://github.com/anomalyco/opencode/pull/27413) | Opened May 14 | Contributor: @kitlangton
Moves `Server.listen` to a Promise facade over Effect-native lifecycle with port fallback, mDNS, and cleanup. Part of ongoing server architecture modernization.

### 6. Load `.opencode/AGENTS.md` Instructions (#12096) — [MERGED]
[PR](https://github.com/anomalyco/opencode/pull/12096) | Merged May 14 | Contributor: @skabillium
Adds support for loading project rules from `.opencode/AGENTS.md`. Closes #11454. Local rule discovery now traverses upward to find `AGENTS.md`, `CLAUDE.md`, or deprecated rule files.

### 7. Fix: Session Busy Errors Typing (#27410) — [MERGED]
[PR](https://github.com/anomalyco/opencode/pull/27410) | Merged May 14 | Contributor: @kitlangton
Converts `Session.BusyError` to `Schema.TaggedErrorClass`, maps busy failures at HTTP handler seam. Improves error typing for API consumers.

### 8. Fix: Image Resizer WASM Loading (#26805)
[PR](https://github.com/anomalyco/opencode/pull/26805) | Opened May 11 | Contributor: @rekram1-node
Fixes image normalization for byte-small images and keeps photon usable in compiled binaries by patching wasm-bindgen import. Re-enables image resizing.

### 9. Test: Remove Formatter Check Sleeps (#27407) — [MERGED]
[PR](https://github.com/anomalyco/opencode/pull/27407) | Merged May 14 | Contributor: @kitlangton
Replaces timer sleeps in formatter parallel-check tests with microtask yields, eliminating flaky CI timing issues.

### 10. Flip Back to Markdown Renderable (#27421) — [MERGED]
[PR](https://github.com/anomalyco/opencode/pull/27421) | Merged May 14 | Contributor: @kommander
Reverts to markdown renderable. No additional description available.

## Feature Request Clusters

### Agent Teams / Multi-Agent Coordination
- **#12661** (110 👍, 34 comments) — Request for Agent Teams equivalent; community-driven cross-post from Reddit.
- **#21978** (2 comments) — AGENTS.md startup instructions not executed proactively, related to how agents initialize on session start.

### Sandboxing & Security
- **#2242** (46 👍, 33 comments) — Restrict agent to current directory using OS-level sandboxing.
- **#20307** (2 👍, 4 comments) — Granular filesystem permissions (`read`/`write` on path patterns) appear not to work as documented.

### AGENTS.md / Project Instructions
- **#11532** (14 👍, 19 comments) — AGENTS.md not auto-loaded after `/new`.
- **#21978** (2 comments) — Instructions not executed proactively at startup.
- **#12096** (PR, merged today) — Adds support for `.opencode/AGENTS.md` in project directory.

### Multi-Project / Additional Working Directories
- **#16662** (6 👍, 4 comments) — Request for `additionalDirectories` config or `/add-dir` command, analogous to Claude Code feature.

### Plugin Lifecycle Hooks
- **#10524** (8 👍, 4 comments) — Plugin shutdown hook for graceful cleanup (e.g., data sync before exit).

## Developer Pain Points

**SSE/Event Stream Regressions:** Three issues (#26697, #27023, #26635) reported that the `/event` SSE endpoint stopped forwarding events in v1.14.44+. This broke client-server communication for Web UI and API consumers. Two separate fixes merged today (#27411, #27425) from different contributors, suggesting the regression was complex.

**Terminal/TUI Usability:** Multiple issues around scrolling (iTerm2 #6209, Antigravity extension #27417), keybinding problems on non-QWERTY layouts (#27096), and clipboard integration broken over SSH+tmux (#15907) and on Nix (#10154). These affect core daily-driver workflows across platforms.

**WSL1 Support Regression:** Binary format error on WSL1 for v1.14.21+ (#24081). With 15 comments but only 2 👍, this affects a smaller but vocal Windows subset. No fix mentioned yet.

**Linux Package Management:** Fedora RPM in-app updater silently fails (#23538); users must manually reinstall. No resolution in today's data.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the **Qwen Code Community Digest** for 2026-05-14, based on the provided GitHub data.

---

### 1. Today's Update Brief

Activity remains high with a minor patch release (v0.15.11) focused on core performance improvements. The community is actively submitting bugs and feature requests, with maintainers prioritizing fixes for session management and authentication issues, while also landing significant PRs for headless control, telemetry, and a new `/goal` command.

### 2. Releases

- **[v0.15.11](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.11):** A patch release centered on performance and reliability. The key changes include:
    - **Performance (Core):** Bounded session-list metadata reads to only the head/tail 64KB of the file instead of scanning the entire list. Also added buffer pooling and lazy message count calculations to reduce overhead.
    - **Testing:** Stabilized the main end-to-end test suite.

### 3. Hot Issues

*Note: Picks from 21 issues updated in the last 24h, prioritized by community engagement and potential impact.*

- **[#3730 [CLOSED] Auto-stop task bug](https://github.com/QwenLM/qwen-code/issues/3730):** A critical bug where Qwen Code spontaneously sends stop commands during long-running tasks, even without user input. This broke workflows for users running heavy computations for days. The issue was closed, indicating a fix may have been identified or required further information (`status/need-information`).

- **[#3803 Daemon mode proposal](https://github.com/QwenLM/qwen-code/issues/3803):** A comprehensive architecture proposal for a `qwen serve` daemon mode. This issue has moved to Stage 1, suggesting active development interest from both the community and maintainers for a persistent background service.

- **[#4035 DashScope-Intl endpoint failure](https://github.com/QwenLM/qwen-code/issues/4035):** A `fetch failed` error when connecting to the international DashScope endpoint (Singapore). The root cause is an incompatible `undici` dispatcher. This directly blocks users outside mainland China from using a major API provider.

- **[#4111 SessionStart hook injection failure](https://github.com/QwenLM/qwen-code/issues/4111):** A significant bug reported by an internal team. The `SessionStart` hook's output (e.g., `additionalContext`, `systemMessage`) is not being injected into the conversation context due to a missing function call. This undermines the hooks system for session initialization.

- **[#4098 `/compress` command not working](https://github.com/QwenLM/qwen-code/issues/4098):** The `/compress` command, designed to free context window space in long conversations, appears to be silently failing. This is a critical issue for users with extended sessions who rely on this feature to manage token limits.

- **[#4116 Critical session error](https://github.com/QwenLM/qwen-code/issues/4116):** A user is encountering a persistent critical error (`problem critical error`) that seems to block any further interaction within the session. The low level of detail suggests a crash or unrecoverable state.

- **[#4093 Inconsistent command substitution denial](https://github.com/QwenLM/qwen-code/issues/4093):** A security inconsistency where the agent sometimes fails to block dangerous shell features like command substitution (`$()`, backticks). The inconsistent application makes the security model unpredictable for users.

- **[#4128 Release workflow failure](https://github.com/QwenLM/qwen-code/issues/4128):** The automated nightly release workflow for `v0.15.10-nightly.20260514` failed. This is an ops-blocking issue that must be resolved to continue providing nightly builds.

- **[#4089 Context window display bug](https://github.com/QwenLM/qwen-code/issues/4089):** A user is unable to override the context window size for their model in `settings.json`. The `/context detail` command keeps showing a default value (1M tokens) instead of the user-specified 262k tokens.

- **[#2938 'other side closed' API error](https://github.com/QwenLM/qwen-code/issues/2938):** An older, open issue where the API connection is abruptly terminated with the error "terminated (cause: other side closed)". This prevents code generation from completing, forcing the user to retry.

### 4. Key PR Progress

*Note: Picks from 50 PRs updated in the last 24h, highlighting significant feature additions and critical fixes.*

- **[#4130 Fix VSCode diff editor group](https://github.com/QwenLM/qwen-code/pull/4130):** Fixes a long-standing annoyance where opening a diff forced a new editor panel. This PR intelligently reuses existing editor groups, improving the VSCode integration UX.

- **[#4118 Agent reproduction workflows](https://github.com/QwenLM/qwen-code/pull/4118):** Adds workflows for capturing, comparing, and aligning Qwen Code's agent behavior against a reference baseline. This is crucial for testing and ensuring parity during agent-related development.

- **[#4119 Re-upgrade ink 7](https://github.com/QwenLM/qwen-code/pull/4119):** Re-attempts the upgrade to the `ink` (React for CLIs) library version 7 after a critical `Static` component regression was fixed upstream. This should unblock dependency modernization.

- **[#4132 `/demo` debug page](https://github.com/QwenLM/qwen-code/pull/4132):** Adds a built-in debug page for the `qwen serve` daemon, providing a browser-based UI to test all daemon routes. This is a significant quality-of-life improvement for daemon developers.

- **[#4105 Headless runaway protection](https://github.com/QwenLM/qwen-code/pull/4105):** Implements long-requested guardrails for headless/non-interactive modes. This introduces configurations to prevent runaway agent loops in CI/CD or scripted environments.

- **[#4123 `/goal` command](https://github.com/QwenLM/qwen-code/pull/4123):** A new built-in slash command that allows users to set session-scoped objectives. An LLM judge then evaluates each turn to see if the goal is met, enabling more focused and autonomous task execution.

- **[#4126 Unified telemetry spans](https://github.com/QwenLM/qwen-code/pull/4126):** Major rework of the OpenTelemetry integration to create a proper hierarchical trace tree. LLM calls and tool executions will now appear as children of the interaction span, making performance debugging much more accurate.

- **[#4127 Memory-based chat compression](https://github.com/QwenLM/qwen-code/pull/4127):** Addresses a critical OOM (Out of Memory) issue in long sessions. This PR replaces token-count caps with memory-based limits to prevent Node's heap from filling up due to large files or shell outputs in the history.

- **[#4115 Fix SessionStart hook injection](https://github.com/QwenLM/qwen-code/pull/4115):** A direct fix for the issue described in #4111, ensuring that data from `SessionStart` hooks is properly injected into the chat context.

- **[#4104 Fix Node 26 incompatibility](https://github.com/QwenLM/qwen-code/pull/4104):** Patches the OpenAI SDK client to skip the incompatible bundled `undici` dispatcher when running on Node 26. This is a high-priority fix that addresses issue #4035.

### 5. Feature Request Clusters

The following recurring themes emerged from today's issues, indicating clear areas of community interest:

- **Daemon / Server Mode:** Multiple requests and a detailed proposal highlight a strong desire for a persistent daemon mode (`qwen serve`), enabling headless operation, API access, and integration with other tools. [#3803], [#4132]
- **Session Management Enhancements:** Users are requesting more sophisticated session controls, including batch deletion of sessions [#3706], a functional `/compress` command for long conversations [#4098], and the ability to inject custom context via hooks [#4111], [#4115].
- **Observability and Telemetry:** There is a clear push for better observability, with a dedicated issue to harden OpenTelemetry configuration [#3731] and a merged PR that unifies trace trees to make debugging easier [#4126].
- **Headless / Non-interactive Safeguards:** Following the introduction of headless mode, the community is actively requesting guardrails to prevent runaway agents. This includes execution budgets and timeout configurations, addressed in issue [#4103] and PR [#4105].
- **Localization (i18n) Quality:** A PR to correct `zh-TW` translations [#4129] indicates community attention to the quality and accuracy of localized interfaces.

### 6. Developer Pain Points

The data for today reveals several recurring developer frustrations:

- **Session and History Management is Brittle:** The `/compress` command failing to work ([#4098]) and sessions hitting OOM limits ([#4116], [#4127]) are primary sources of friction for users running long, complex tasks. The lack of a functional context management tool is a major pain point.
- **Hooks System is Unreliable:** The core issue of a hook's output not being injected into the context ([#4111]) is a significant problem for advanced users who rely on the hooks system for customization and automation. This breaks core functionality.
- **API Compatibility is a Constant Source of Breakage:** Users are frequently hitting issues with different API backends, such as the DashScope-Intl endpoint ([#4035], [#4104]) and the inconsistent security model for command substitution ([#4093]). This adds friction when switching providers or configuring custom setups.
- **Security Features are Opaque and Inconsistent:** The reported inconsistency in command substitution denial ([#4093]) is a major trust issue. Developers need a predictable and transparent security model, especially when using the agent in powerful but dangerous modes. The request for runaway protection in headless mode ([#4103]) is a direct consequence of this concern.
- **High Power Consumption During Idle:** A frustrated user reported excessive power usage when Qwen Code is simply waiting for an external process to finish ([#4033]). This suggests the runtime isn't efficiently yielding resources during I/O-bound waits.

</details>