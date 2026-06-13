# AI CLI Tools Community Digest 2026-06-13

> Generated: 2026-06-13 02:35 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report — 2026-06-13

## 1. Daily Cross-Tool Overview

Today saw sustained high activity across most tracked AI CLI tools, with three tools shipping releases (Claude Code, OpenAI Codex, GitHub Copilot CLI, Gemini CLI, Qwen Code) while OpenCode and Kimi Code had no new versions. The most intense community hubs were OpenCode and Qwen Code, each reporting ~50 issues and ~50 PRs updated in the past 24 hours. Windows compatibility problems dominated two tool trackers (OpenAI Codex and GitHub Copilot CLI), while agent reliability and orchestration concerns cut across Claude Code, Gemini CLI, and OpenCode. A notable spike in pricing/billing discussions appeared in both Claude Code (Team plan request – 37👍) and Qwen Code (free tier reduction proposal – 127 comments). Kimi Code remained nearly silent, with only three hot issues and one PR touched.

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Releases (Today) |
|---|---|---|---|
| Claude Code | High (10 key issues listed; multiple reports) | 2 | 3 patches (v2.1.175→v2.1.177) |
| OpenAI Codex | 50 | 20 | 4 alpha (v0.140.0-alpha.14–.17) |
| Gemini CLI | 50 | 10 | 1 nightly (v0.48.0-nightly.20260613) |
| GitHub Copilot CLI | 33 | 1 | 2 releases (v1.0.62-1) |
| Kimi Code CLI | 3 (hot issues; low overall) | 1 | 0 |
| OpenCode | 50 | 50 | 0 |
| Qwen Code | 49 | 50 | 1 (v0.18.0) |

*Note: Claude Code and Kimi Code did not provide explicit total issue/PR counts; figures are derived from listed items and maintainer summaries.*

## 3. Shared Feature Directions

**Agent orchestration and sub-agent reliability**
Multiple tools are grappling with how to delegate tasks safely and reliably.
- **Claude Code**: Proposal for tiered Opus “brains” + Sonnet workers (#56913, 26 comments); sub-agent extended thinking not forwarded (#14321, 25👍).
- **Gemini CLI**: Generalist agent hangs on trivial tasks (#21409, P1); sub-agent reports false success after max turns (#22323, P1); skills/sub-agents ignored unless explicitly instructed (#21968, P2).
- **OpenCode**: Doom loops undetected during reasoning (#12716); truncated tool calls misclassified as invalid (#18108).
*Observation: All three communities are asking for better parent-son agent control, state persistence, and cost governance.*

**Pricing and billing transparency**
- **Claude Code**: Request for a Max-equivalent team tier (#47509, 37👍, highest this week).
- **Qwen Code**: Proposed reducing daily free quota from 1,000 to 100 requests (#3203, 127 comments).
- **Kimi Code CLI**: Billing confusion – advertised per-request billing but actual token-based consumption drains 2-hour allowance in 2 tasks (#1994, 7👍).
*Observation: Users across tools are questioning whether advertised pricing matches reality, especially for long-chain-of-thought models.*

**Session state persistence and management**
- **Claude Code**: `CronCreate durable:true` silently ignored (#50911) – scheduled tasks die with session.
- **OpenAI Codex**: Request to rename thread titles for history navigation (#12564, 111👍, closed).
- **Gemini CLI**: Auto Memory retries low-signal sessions indefinitely (#26522, P2); history corruption through backslash merging (PR #27555).
- **Copilot CLI**: Hangs after compaction (#1614); infinite compaction loops (#3621); `/chronicle reindex` ignoring local settings (#3777).
- **OpenCode**: JSON→SQLite migration re-runs on every launch (#16885, 8👍).
- **Qwen Code**: Request for `qwen sessions list` with JSON/tag/date filters (#4825, 4 comments).
*Observation: Nearly every tool has at least one open issue about session durability, migration, or navigation.*

**Windows and non-Linux platform friction**
- **Claude Code**: Windows installer leave-behind corruption (#49917, 6👍).
- **OpenAI Codex**: At least 8 issues link to `spawn setup refresh` after CLI update, blocking all operations on Windows.
- **Copilot CLI**: Scroll bar misalignment on Windows (#3501, 8👍); MCP server failures on Windows (#3455).
- **Qwen Code**: `printf` causing errors on Windows (#5010); missing native Windows shell checks.
*Observation: Windows remains the weakest platform across the ecosystem, with recurring installer, sandbox, and input-handling bugs.*

## 4. Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Approach |
|---|---|---|---|
| **Claude Code** | Autonomous agent orchestration, model governance, pricing tiers | Professional developers using Anthropic models | Heavy emphasis on model access control (availableModels, enforceAvailableModels); sub-agent lifecycle; session locale awareness |
| **OpenAI Codex** | Cross-platform sandbox execution, plugin ecosystem | Developers needing secure execution environments (Windows sandbox) | Rust-based alpha; MCP plugin routing; PathUri cross-OS handling; frequent alpha releases |
| **Gemini CLI** | Agent reliability, evaluation infrastructure, memory system | Google Cloud/Vertex AI users | Large agent evaluation framework (76 behavioral tests); Auto Memory; sub-agent recovery logic; commits focused on shell history and prompt injection |
| **GitHub Copilot CLI** | GitHub integration, session-scoped extensions, MCP lifecycle | GitHub users and enterprise orgs | YOLO mode indicator; server-side search; session-scoped canvases; minimal PR activity — community-driven feature requests |
| **Kimi Code CLI** | (Low activity) | Users of MoonshotAI models on Arch/Wayland | Very limited visibility; billing logic and WebSocket init problems; maintainer response appears slow |
| **OpenCode** | Permission system, database maintenance, open-source extensibility | Self-hosted power users | High PR velocity (50 in 24h); permission wildcard behavior; `db doctor`/`db repair` commands; TrustedRouter provider integration |
| **Qwen Code** | Free-tier policy, model provider configuration, daemon web-shell | Developers evaluating Qwen models, Chinese market | Active discussion on quota and pricing; focus on provider identity disambiguation; UI polish (statusline, thinking blocks) |

*Key differentiators*:
- Claude Code is the most aggressive on model governance and pricing tier design.
- OpenAI Codex is the only tool with a Rust-based CLI and cross-OS sandbox as a core feature.
- Gemini CLI invests heavily in evaluation infrastructure and agent behavioral testing.
- Copilot CLI leverages GitHub’s existing ecosystem (server-side search, `.github/prompts` parity).
- OpenCode stands out for its permission system and database maintenance CLI, with the highest PR/issue velocity.
- Qwen Code is uniquely engaging its community on free-tier policy changes, a topic not currently active elsewhere.

## 5. Community Activity Notes

**Highest raw activity** (issues + PRs updated):
- OpenCode (50 issues, 50 PRs) –

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-06-13

## Today's Update Brief

Three patches shipped today (v2.1.175→v2.1.177), tightening model governance and adding session-locale awareness. A widespread `claude-fable-5` model-access outage dominated the issue tracker — eight+ reports filed in the last 24h from users on Max plans who lost access mid-session. Community discussion continues around autonomous agent orchestration, pricing tiers, and sub-agent recursion safeguards.

## Releases

**v2.1.177** — version bump, no documented changes.

**v2.1.176** — Session titles now generated in the language of the conversation (configurable via `language` setting). Added `footerLinksRegexes` setting for regex-matched link badges in the terminal footer row, configurable via user or managed settings. Improved Bedrock credential handling.

**v2.1.175** — Added `enforceAvailableModels` managed setting: when enabled, the `availableModels` allowlist also constrains the Default model. If Default would resolve to a disallowed model, it falls back to the first allowed model. User/project settings can no longer widen a managed configuration.

[View releases](https://github.com/anthropics/claude-code/releases)

## Hot Issues

**1. Autonomous Claude Code agent orchestration** — [#56913](https://github.com/anthropics/claude-code/issues/56913) (26 comments)
User proposes a tiered architecture: Opus "brains" orchestrating Sonnet workers with persistent state for long-running pipelines, ML training, build automation, monitoring. Discussion explores state management, worker lifecycle, and cost control. 0 👍 suggests niche but engaged audience.

**2. Windows installer leave-behind corruption** — [#49917](https://github.com/anthropics/claude-code/issues/49917) (26 comments, 👍6)
`AddPackage HRESULT 0x80073CF6` when re-installing after a prior incomplete install. Package remains in inconsistent state, blocking clean reinstall. Workarounds include manual AppX removal. Reproduced across multiple Windows versions.

**3. Bash output invalid Unicode → API 400** — [#16294](https://github.com/anthropics/claude-code/issues/16294) (16 comments)
`"no low surrogate in string"` error when bash output contains malformed UTF-16 (e.g., truncated multi-byte sequences from partial reads). Blocks any tool call returning such output. Community suggests output sanitization before API submission.

**4. `claude-fable-5` unavailable / access revoked mid-session** — [#68129](https://github.com/anthropics/claude-code/issues/68129) (9 comments), [#68126](https://github.com/anthropics/claude-code/issues/68126) (8 comments), [#68131](https://github.com/anthropics/claude-code/issues/68131) (5 comments, closed), [#68121](https://github.com/anthropics/claude-code/issues/68121) (5 comments), [#67298](https://github.com/anthropics/claude-code/issues/67298) (4 comments), [#68120](https://github.com/anthropics/claude-code/issues/68120) (3 comments), [#68122](https://github.com/anthropics/claude-code/issues/68122) (2 comments)
Multiple Max-plan users report losing access to `claude-fable-5` without configuration changes, receiving "Invalid or Inaccessible Model" errors. Some users downgraded to Opus mid-task. Reports span macOS, Linux, and multiple terminals. One user confirmed downgrade triggered by "content policy violation" on legitimate infrastructure scripting.

**5. Sub-agent extended thinking block** — [#14321](https://github.com/anthropics/claude-code/issues/14321) (9 comments, 👍25)
`extendedThinking` config is not forwarded to sub-agents spawned via `Agent` tool. Users want deep reasoning cascades for complex multi-step delegation. 25 upvotes suggests strong demand.

**6. Team plan lacks high-usage tier** — [#47509](https://github.com/anthropics/claude-code/issues/47509) (8 comments, 👍37)
Standard (1.25x) and Premium (6.25x) Pro usage don't suffice for power users (CTOs, tech leads). Current workaround: individual Max 20x plans, but no team-level equivalent. Highest 👍 count this week.

**7. `CronCreate durable:true` silently ignored** — [#50911](https://github.com/anthropics/claude-code/issues/50911) (7 comments)
`durable: true` parameter accepted but never persisted — scheduled tasks die with the session. No `.claude/scheduled_tasks.json` written. Session-only path always returned. Affects expectation for persistent background automation.

**8. Fable classifier completely broken on Linux** — [#67688](https://github.com/anthropics/claude-code/issues/67688) (6 comments)
Classifier tool fails with unrecoverable errors on `claude-fable-5` on Linux. Users report it worked previously. Suggests server-side regression specific to Fable model.

**9. `claude --worktree` breaks multi-session conventions** — [#62309](https://github.com/anthropics/claude-code/issues/62309) (5 comments)
`--worktree` branches from `origin/<default>` instead of parent HEAD, and prepends `worktree-` to branch name. Breaks teams relying on verbatim worktree names for parallel session coordination.

**10. Advisor tool returns "unavailable" on long Fable-5 transcripts** — [#67609](https://github.com/anthropics/claude-code/issues/67609) (2 comments, 👍6)
Server-side advisor tool fails with `error_code: "unavailable"` when transcript exceeds ~100K tokens on Fable-5. Works below threshold. Affects long-running sessions that rely on advisor for guidance.

## Key PR Progress

(Only 2 PRs updated in the last 24h.)

**1. Fix issues auto-closed despite human activity** — [#26360](https://github.com/anthropics/claude-code/pull/26360) (closed)
Triage bot lacked awareness of `stale`/`autoclose` labels — when humans commented on stale issues, labels weren't removed. Also `closeExpired()` ran independently of activity labels. Fix teaches bot to remove stale labels on human interaction. Merged after 4 months.

**2. Case-insensitive completion promise matching** — [#67753](https://github.com/anthropics/claude-code/pull/67753) (open)
`ralph-wiggum` completion promise matching now uses case-insensitive comparison with whitespace normalization, preventing false negatives when Claude's output casing differs from configured promise (e.g., `Complete` vs `COMPLETE`). Uses `tr` for portability.

## Feature Request Clusters

**Autonomous agent orchestration** — Multiple requests for persistent, long-running agent hierarchies: [#56913](https://github.com/anthropics/claude-code/issues/56913) (tiered brains+workers), [#14321](https://github.com/anthropics/claude-code/issues/14321) (extended thinking for sub-agents), [#68110](https://github.com/anthropics/claude-code/issues/68110) (recursive spawn safeguards). Community wants controlled delegation with depth limits, state persistence, and cost accounting.

**Pricing & plan flexibility** — [#47509](https://github.com/anthropics/claude-code/issues/47509) requests a Max-equivalent team tier (37 👍). No other pricing issues in today's data, but the high upvote count indicates significant user interest.

**Worktree & multi-session workflows** — [#62309](https://github.com/anthropics/claude-code/issues/62309) documents divergence from team conventions. [#44908](https://github.com/anthropics/claude-code/issues/44908) (closed) flagged doc conflicts on cross-worktree session resumption. Suggests workflow coordination is an active pain point.

**Documentation completeness** — User @coygeek continues filing precise doc gaps: missing `ExitWorktree` tool reference ([#32682](https://github.com/anthropics/claude-code/issues/32682)), incomplete remote `defaultMode` docs ([#31353](https://github.com/anthropics/claude-code/issues/31353)), plugin discovery trigger docs ([#36386](https://github.com/anthropics/claude-code/issues/36386)), session archiving behavior ([#36856](https://github.com/anthropics/claude-code/issues/36856)), Claude-initiated bash mode ([#36858](https://github.com/anthropics/claude-code/issues/36858)), plugin re-clone behavior ([#36859](https://github.com/anthropics/claude-code/issues/36859)), `UserPromptSubmit` hook output ([#44902](https://github.com/anthropics/claude-code/issues/44902)), and interrupted partial response persistence ([#44907](https://github.com/anthropics/claude-code/issues/44907)).

## Developer Pain Points

1. **Fable-5 access instability** — Dominates today's tracker. Multiple users on Max plans lost access mid-session, sometimes with downgrade to Opus and content-policy flags on legitimate work. The outage appears server-side, not client-configurable.

2. **Windows installer fragility** — [#49917](https://github.com/anthropics/claude-code/issues/49917) and [#67865](https://github.com/anthropics/claude-code/issues/67865) (MCP install hang on archives >16KB) represent Windows-specific friction points with no resolution timeline visible.

3. **Sub-agent cost explosion** — [#68110](https://github.com/anthropics/claude-code/issues/68110) documents exponential token burn from recursive sub-agent spawning with no depth or count limits. Community concerned about unexpected costs.

4. **Durable scheduled tasks unworkable** — [#50911](https://github.com/anthropics/claude-code/issues/50911) confirms `CronCreate durable:true` is silently non-functional, breaking automation workflows that rely on persistent background tasks.

5. **Advisor unavailable on long Fable-5 sessions** — [#67609](https://github.com/anthropics/claude-code/issues/67609) hitting users with transcripts over ~100K tokens, causing the advisor tool to error out without fallback.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-13

## Today's Update Brief
The Codex repository saw four Rust CLI alpha releases (v0.140.0-alpha.14 through .17) and 50 issues updated in the past 24h, with Windows sandbox failures continuing as the dominant bug theme. The pull request queue is active on cross-OS path handling (PathUri) and plugin authentication routing, with 20 PRs updated.

## Releases
- [rust-v0.140.0-alpha.14](https://github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.14) – Release 0.140.0-alpha.14
- [rust-v0.140.0-alpha.15](https://github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.15) – Release 0.140.0-alpha.15
- [rust-v0.140.0-alpha.16](https://github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.16) – Release 0.140.0-alpha.16
- [rust-v0.140.0-alpha.17](https://github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.17) – Release 0.140.0-alpha.17

No changelog details are provided; all are labeled as “Release 0.140.0-alpha.*”.

## Hot Issues
1. **[#12564 – Allow renaming task/thread titles](https://github.com/openai/codex/issues/12564)**
   *Closed enhancement* – User requests ability to rename thread titles for better history navigation. 111 👍, 79 comments.
   *Affected workflow*: Reviewing long chat histories.
   *Impact*: No maintainer response visible; thread was closed after creation date in February.

2. **[#24391 – Windows sandbox: spawn setup refresh fails on CLI 0.133.0](https://github.com/openai/codex/issues/24391)**
   *Closed bug* – After updating to 0.133.0, shell commands fail with “spawn setup refresh”. 46 comments, 26 👍.
   *Impact*: Blocks all CLI operations on Windows. Reproduced across multiple Windows 11 builds.

3. **[#9046 – Codex ran out of room in context window](https://github.com/openai/codex/issues/9046)**
   *Open bug* – Even in a fresh thread, model context becomes full quickly. 25 comments.
   *Impact*: Interrupts long sessions; users must frequently start new threads.

4. **[#22423 – Unable to locate Codex CLI binary](https://github.com/openai/codex/issues/22423)**
   *Open bug* – Electron app fails to find `codex` binary; `CODEX_CLI_PATH` workaround advised. 20 comments.
   *Impact*: App startup failure on some configurations, especially after WSL setup.

5. **[#25243 – macOS Codex relaunch loop exhausts syspolicyd FDs](https://github.com/openai/codex/issues/25243)**
   *Open bug* – App relaunch loop causes system policy daemon file descriptor exhaustion, blocking other app launches. 20 comments.
   *Impact*: macOS systems become unresponsive; affects Pro users.

6. **[#24098 – Windows elevated sandbox fails with “spawn setup refresh”](https://github.com/openai/codex/issues/24098)**
   *Closed bug* – Elevating sandbox breaks after CLI 0.133.0 update; unelevated sandbox works. 18 comments, 6 👍.
   *Impact*: Users requiring administrator privileges for code execution are blocked.

7. **[#25220 – Bundled plugins unavailable on Windows (EFS-encrypted files)](https://github.com/openai/codex/issues/25220)**
   *Open bug* – Computer Use, Browser, Chrome, LaTeX plugins fail to copy because of WindowsApps EFS encryption. 16 comments.
   *Impact*: Plugin marketplace shows “unavailable”; affects Windows Store installations.

8. **[#27175 – Codex Desktop Windows 26.602.71036 crashes after update](https://github.com/openai/codex/issues/27175)**
   *Open bug* – App becomes inaccessible even with empty sessions. 15 comments, 3 👍.
   *Impact*: Users forced to roll back; Pro subscribers affected.

9. **[#27817 – False positive cybersecurity flag on tax filing work](https://github.com/openai/codex/issues/27817)**
   *Open bug* – Chat flagged as possible cybersecurity risk during legitimate finance/tax preparation. 12 comments.
   *Impact*: Blocks authorized work; users advised to join “Trusted Access for Cyber” program.

10. **[#26458 – Codex desktop repeatedly crashes when using Computer Use](https://github.com/openai/codex/issues/26458)**
    *Open bug* – Crashes while using Computer Use feature on macOS. 8 comments.
    *Impact*: Unusable Computer Use on recent Codex versions.

## Key PR Progress
1. **[#28012 – Add fail-closed plugin script resolver](https://github.com/openai/codex/pull/28012)**
   New PR adding a resolver that parses candidate script commands, canonicalizes trusted plugin paths, and attributes matching skills. Private FOO-574 precursor.

2. **[#27996 – Send request-scoped turn state over WebSocket](https://github.com/openai/codex/pull/27996)**
   Exchanges turn state via WebSocket messages instead of upgrade headers, fixing reuse across turns.

3. **[#28002 – Send turn state through compact requests](https://github.com/openai/codex/pull/28002)**
   Passes current `ModelClientSession` state to inline v1 compact requests, keeping compaction in-sync with active turn.

4. **[#28006 – core: retain executor environment identity](https://github.com/openai/codex/pull/28006)**
   Stores canonical `PathUri` environment state in turn context and restores across resume/fork. Enables correct cross-OS path handling.

5. **[#27819 – path-uri: render native paths across platforms](https://github.com/openai/codex/pull/27819)**
   Translates `PathUri` to OS-native paths at the app-server API boundary, hiding URI encoding from public APIs.

6. **[#28011 – unified-exec: resolve shell and workdir for target](https://github.com/openai/codex/pull/28011)**
   Resolves command paths using selected environment metadata instead of host syntax, preserving exact argv.

7. **[#28001 – package Windows ARM64 on x64](https://github.com/openai/codex/pull/28001)**
   Parallelizes Windows packaging; moves critical path from ARM64 job (waiting for runner) to x64, reducing release time.

8. **[#27607 – Dedupe plugin MCPs by app declaration name](https://github.com/openai/codex/pull/27607)**
   Hides plugin MCP servers when they conflict with an App declaration of the same name, part of plugin auth-routing stack.

9. **[#27459 – Gate plugin MCP servers by auth route](https://github.com/openai/codex/pull/27459)**
   Moves auth-aware surface projection into `core-plugins::PluginsManager` for consistent plugin view across callers.

10. **[#27937 – Add hermetic Wine exec-server test](https://github.com/openai/codex/pull/27937)**
    Enables cross-OS exec-server testing by running Windows executables under Wine, validating path conversion and environment.

## Feature Request Clusters
- **Thread history management** – The most upvoted request (111 👍) in the top issues asks for **renaming task/thread titles** ([#12564](https://github.com/openai/codex/issues/12564)). No other feature request clusters of similar scale appeared in today’s data.

## Developer Pain Points
- **Windows sandbox failures** dominate the bug reports: at least 8 linked issues (e.g., #24391, #24098, #26158, #25488, #25012) all describe `spawn setup refresh` errors after CLI updates, affecting elevated sandboxes, plugin sandboxes, and node_repl. Users report rollback to earlier versions as the only workaround.
- **Context window exhaustion** (#9046) remains an open pain point, forcing thread restarts even in fresh conversations.
- **Post-update crashes** on both Windows (#27175, #27979) and macOS (#25243) are frequent, often requiring manual reinstallation.
- **CLI binary discovery** (#22423) continues to cause startup failures, especially in WSL-like configurations.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest – 2026-06-13

## Today’s Update Brief

Activity remains high: a nightly release landed today with a critical MCP atomic update fix and a Vertex AI mapping correction. The issue tracker shows 50 open/updated items, with agent reliability problems (hangs, false success reporting, ignored sub‑agent usage) dominating community feedback. The PR queue is active, with 20 notable merges focused on shell history corruption, prompt injection fixes, and A2A server compliance.

---

## Releases

**v0.48.0-nightly.20260613.g9e5599c32** – *Released 2026-06-13*

- **fix(core):** implement atomic update in MCP tool discovery (#27619) – prevents race conditions when MCP tools are refreshed.
- **fix:** Vertex AI model mapping correction (#27749) – ensures correct model assignment for Vertex AI deployments.
- **docs:** added documentation and migration command.

---

## Hot Issues

*10 noteworthy issues from the past 24 hours, ranked by comment count and community impact.*

1. **#24353 – Robust component level evaluations**
   *Area: agent, eval infrastructure*
   Epic tracking the creation of 76 behavioral eval tests, expanding the evaluation framework from issue #15300. Maintainers are building a structured evaluation pipeline; community interest is high (7 comments).
   [GitHub](https://github.com/google-gemini/gemini-cli/issues/24353)

2. **#21409 – Generalist agent hangs**
   *P1, area: agent, 8 👍*
   User reports that `gemini-cli` hangs when deferring to the generalist agent for simple tasks (e.g., folder creation). Workaround: instructing the model not to use sub‑agents. Still needs retesting after multiple fix attempts.
   [GitHub](https://github.com/google-gemini/gemini-cli/issues/21409)

3. **#22323 – Subagent recovery after MAX_TURNS reported as GOAL success**
   *P1, area: agent, 2 👍*
   `codebase_investigator` subagent reports `status: "success"` even though it hit the max turn limit without performing any analysis. This false success masks real failures in multi‑step workflows.
   [GitHub](https://github.com/google-gemini/gemini-cli/issues/22323)

4. **#21968 – Gemini does not use skills and sub‑agents enough**
   *P2, area: agent*
   Anecdotal reports that Gemini ignores custom skills (e.g., Gradle, Git) unless explicitly instructed by the user. The model fails to invoke relevant sub‑agents even when the task is clearly related.
   [GitHub](https://github.com/google-gemini/gemini-cli/issues/21968)

5. **#27538 – ERROR ioctl(2) failed, EBADF (closed)**
   *P2, area: core, bug*
   Crash in `node-pty` under certain terminal environments (Node v22, nvm). The issue was closed as possible duplicate; community shared 5 comments.
   [GitHub](https://github.com/google-gemini/gemini-cli/issues/27538)

6. **#20003 – “Gemini CLI Companion” not working in Theia IDE (closed)**
   *P2, area: extensions*
   IDE integration fails when running inside Theia; the `/ide` status returns “integration is not supported”. Closed after maintainer requested more info. Affects users on custom IDEs.
   [GitHub](https://github.com/google-gemini/gemini-cli/issues/20003)

7. **#25166 – Shell command execution gets stuck with “Waiting input” after completion**
   *P1, area: core, 3 👍*
   After Gemini runs a simple CLI command, the shell hangs while still showing “Awaiting user input”. The command has already finished. Happens with trivial commands that never ask for input.
   [GitHub](https://github.com/google-gemini/gemini-cli/issues/25166)

8. **#21983 – Browser subagent fails in Wayland**
   *P1, area: agent*
   The browser subagent crashes when running under Wayland, even though it reports `Termination Reason: GOAL`. A known incompatibility that blocks users on modern Linux desktops.
   [GitHub](https://github.com/google-gemini/gemini-cli/issues/21983)

9. **#26525 / #26522 – Auto Memory: redaction & infinite retries**
   *P2, area: security & agent*
   Two related issues: (a) deterministic redaction of secrets is missing – extraction prompt relies on model‑side redaction after content is already in context; (b) Auto Memory retries low‑signal sessions indefinitely, never marking them as processed. Both affect users relying on memory features.
   [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) · [#26522](https://github.com/google-gemini/gemini-cli/issues/26522)

10. **#24246 – 400 error with > 128 tools**
    *P2, area: agent*
    When more than 128 tools are available, Gemini CLI throws a 400 error. Users expect the agent to limit the tool set dynamically.
    [GitHub](https://github.com/google-gemini/gemini-cli/issues/24246)

---

## Key PR Progress

*10 significant pull requests merged or opened in the last 24 hours.*

1. **#27572 – Handle tmux false positive background detection**
   Fixes a regression where Gemini CLI incorrectly detects a light background (`#ffffff`) when running inside tmux (especially via mosh), causing unwanted theme switching. Merged.
   [GitHub](https://github.com/google-gemini/gemini-cli/pull/27572)

2. **#27555 – Stop merging shell history commands that end in a backslash**
   Shell history corruption: commands ending in `\` (e.g., Windows paths like `dir C:\`) are merged with the next command. Fix normalises backslash handling in `readHistoryFile`. Merged.
   [GitHub](https://github.com/google-gemini/gemini-cli/pull/27555)

3. **#27552 – Insert content literally into LLM prompts to avoid `$` substitution**
   `String.prototype.replace` was interpreting `$` in user/file content as a replacement pattern. Fix uses literal insertion to prevent silent corruption of prompts. Merged.
   [GitHub](https://github.com/google-gemini/gemini-cli/pull/27552)

4. **#27568 – Fall back when ripgrep execution fails**
   If `rg` is missing or exits with code 64, the grep tool now falls back to the legacy `GrepTool` instead of failing immediately. Keeps ripgrep‑only options unchanged. Merged.
   [GitHub](https://github.com/google-gemini/gemini-cli/pull/27568)

5. **#27553 – Add GATEWAY auth type to validateAuthMethod**
   `AuthType.GATEWAY` was added for custom base URL routing but not validated. When `GOOGLE_GEMINI_BASE_URL` is set, authentication now works correctly. Merged.
   [GitHub](https://github.com/google-gemini/gemini-cli/pull/27553)

6. **#27558 – Fix Gateway authentication regression (duplicate of #27553)**
   Another fix for the same issue, ensuring `validateAuthMethod()` handles `AuthType.GATEWAY`. Merged.
   [GitHub](https://github.com/google-gemini/gemini-cli/pull/27558)

7. **#27694 – Deduplicate home agent directories**
   When project‑level and user‑level agent directories both resolve to `~/.gemini/agents`, duplicate loading caused errors. Now deduplicated while preserving precedence. Open.
   [GitHub](https://github.com/google-gemini/gemini-cli/pull/27694)

8. **#27873 – Improve SKILL.md frontmatter parsing robustness**
   Handles UTF‑8 BOM, trailing tabs/spaces on frontmatter markers, and non‑string YAML values. Fixes issue #25693 where skills with unusual formatting were not loaded. Merged.
   [GitHub](https://github.com/google-gemini/gemini-cli/pull/27873)

9. **#27872 – Strip line/range suffix from at‑command paths**
   At‑commands like `@file:12` or `@file:L12` caused the CLI to hang or crash. Now the suffix is stripped before filesystem operations. Merged.
   [GitHub](https://github.com/google-gemini/gemini-cli/pull/27872)

10. **#27870 – Cap pending tool responses**
    A very large tool result could remain as a pending `functionResponse` indefinitely. This PR limits the size to prevent memory exhaustion and hangs. Open.
    [GitHub](https://github.com/google-gemini/gemini-cli/pull/27870)

---

## Feature Request Clusters

*Recurring themes from open issues, grouped without roadmap speculation.*

- **Evaluation & Testing Infrastructure**
  Multiple epics (#24353, #22745, #23166) focus on component‑level evaluations, AST‑aware file reads, and stabilising internal eval tests. The community expects a robust, repeatable evaluation framework for agent behaviour.

- **Agent Autonomy & Tool Use**
  Users want Gemini to automatically invoke skills and sub‑agents without explicit instruction (#21968, #21432). Requests also include better agent self‑awareness (knowledge of its own flags, hotkeys, and capabilities).

- **Memory System Reliability**
  Auto Memory is under active scrutiny: deterministic redaction before model exposure (#26525), avoiding infinite retries (#26522), and quarantining invalid patches (#26523) are all recurring requests.

- **Shell & Tool Execution Stability**
  Problems with shell hangs after command completion (#25166), subagent false success (#22323), and terminal resize flicker (#21924) point to fundamental execution‑loop improvements needed.

- **IDE & Terminal Integration**
  Issues with Theia (#20003), Wayland (#21983), and tmux background detection (#27572) show demand for broader platform support, especially outside VS Code.

---

## Developer Pain Points

*Summarised frustrations from today’s issues and PR discussions.*

- **Agent hangs on trivial tasks** – The generalist agent can freeze for up to an hour on simple commands like folder creation (#21409). No workaround exists besides disabling sub‑agents.
- **False success masking failures** – Sub‑agents that hit `MAX_TURNS` report `GOAL` success, hiding real interruptions from users (#22323).
- **Skills/sub‑agents ignored** – Even when relevant skills are defined (Gradle, Git), the model rarely uses them autonomously (#21968).
- **Shell command deadlock** – After executing a command, the CLI stays stuck in “Waiting input” despite the command finishing (#25166). Common with simple commands.
- **Browser agent broken on Wayland** – Linux users on Wayland cannot use the browser sub‑agent at all (#21983).
- **400 error with many tools** – Workspaces with >128 tools cause unrecoverable errors (#24246), forcing manual tool reduction.
- **Prompt corruption via `$` substitution** – User‑supplied content containing `$` was silently mangled before reaching the LLM (#27552).
- **Auto Memory indefinite retries** – Low‑value sessions are retried endlessly, cluttering memory storage (#26522).
- **Vim `cc` command fails on non‑last lines** – The Vim editor integration does not support `cc` on any line except the last in a multi‑line buffer (#27554).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-13

## Today’s Update Brief

Two minor releases landed today (v1.0.62-1), adding session-scoped extensions, a YOLO/allow-all indicator, and server-side GitHub search. However, the community’s attention is dominated by a wave of terminal rendering corruption bugs and unresolved keyboard input issues. Issue activity remains high (33 updated issues), while pull request activity was minimal.

## Releases

- **v1.0.62-1**
  [Release link](https://github.com/github/copilot-cli/releases/tag/v1.0.62-1)
  - Added “YOLO” (allow all) indicator in footer and allow-all state to custom `statusLine.command`.
  - Press `/` on Issues or Pull Requests tab to search GitHub with server-side filtering.
  - Introduced session-scoped extensions and canvases.
  - Enabled SDK clients to configure session memory threshold.

## Hot Issues

1. **#53 — Bring back Copilot CLI commands to not break workflows**
   [Open](https://github.com/github/copilot-cli/issues/53) | 37 comments | 75 👍
   *Workflow affected*: Users who relied on `gh copilot` commands after a breaking change. Community has been building workarounds (e.g., [shell-ai](https://github.com/Deltik/shell-ai)) due to months of maintainer silence.
   *Reaction*: Highest-reacted open issue; highlights frustration with communication gap.

2. **#618 — Custom slash commands from `.github/prompts` directory**
   [Closed](https://github.com/github/copilot-cli/issues/618) | 31 comments | 99 👍
   *Workflow affected*: CLI lacks parity with VS Code extension’s custom prompt files.
   *Reaction*: Very popular feature request; closed without implementation visible in today’s release.

3. **#1481 — SHIFT+ENTER should insert line break, not execute**
   [Closed](https://github.com/github/copilot-cli/issues/1481) | 26 comments | 15 👍
   *Workflow affected*: Keyboard shortcut expectation clash; `CTRL+ENTER` is non‑standard.
   *Reaction*: Modest support; closed – likely fixed in an earlier release.

4. **#3749 — Terminal streaming renderer corrupts output**
   [Open](https://github.com/github/copilot-cli/issues/3749) | 5 comments | 7 👍
   *Workflow affected*: All streaming responses (thinking phase + final answer) show doubled/truncated characters.
   *Reaction*: Rapid upvote growth; multiple related reports (see #3755, #3769, #3780, #982).

5. **#3755 — Reasoning display garbles streamed text**
   [Open](https://github.com/github/copilot-cli/issues/3755) | 5 comments | 2 👍
   *Workflow affected*: With `showReasoning: true`, reasoning fragments are overlapped and duplicated.
   *Reaction*: Confirms rendering is a systemic issue, not just a single terminal configuration.

6. **#1999 — Cannot type `@` on German keyboard (AltGr+q)**
   [Open](https://github.com/github/copilot-cli/issues/1999) | 9 comments | 1 👍
   *Workflow affected*: Non‑US keyboard users cannot type `@` or `#` in CLI input, making the tool unusable.
   *Reaction*: Long‑standing; similar reports for Polish characters (#2920).

7. **#2661 — Model error: “The requested model is not supported” for Opus 4.5**
   [Closed](https://github.com/github/copilot-cli/issues/2661) | 9 comments | 0 👍
   *Workflow affected*: Model selection that works in VS Code fails in CLI despite same plan.
   *Reaction*: Closed, but no fix visible – likely a transient backend issue.

8. **#2306 — Intermittent enterprise authorization error**
   [Open](https://github.com/github/copilot-cli/issues/2306) | 6 comments | 3 👍
   *Workflow affected*: Enterprise users see “not authorized” errors 2–3 times per week without policy change.
   *Reaction*: Intermittent, high‑visibility for enterprise adopters.

9. **#3501 — Scroll bar misaligns text on Windows**
   [Open](https://github.com/github/copilot-cli/issues/3501) | 3 comments | 8 👍
   *Workflow affected*: Vertical scroll bar introduced around v0.50? causes text rendering to break in Windows Console Host/Terminal.
   *Reaction*: Growing votes; Windows‑specific.

10. **#3784 — Linux ARM64 crash with Tokio reactor panic**
    [Open](https://github.com/github/copilot-cli/issues/3784) | 0 comments
    *Workflow affected*: CLI v1.0.62-1 crashes after sending first message on ARM64.
    *Reaction*: Critical for ARM64 users; submitted today, no discussion yet.

## Key PR Progress

Only one pull request was updated in the last 24 hours:

- **#3771 — Initial project setup**
  [Open](https://github.com/github/copilot-cli/pull/3771) | 0 comments
  *Description*: No meaningful summary; appears to be a stale or test PR. Not relevant to feature work or fixes.

No significant PR activity to report today.

## Feature Request Clusters

- **Custom prompts & system instructions**
  *Issues*: #618 (`.github/prompts` slash commands), #2627 (configurable system prompt to reduce token overhead)
  *Common ask*: Ability to define reusable prompts and slim down the fixed 20k+ token system preamble.

- **Session management & persistence**
  *Issues*: #3364 (long‑running goals via `.copilot/goals.md`), #3779 (keyboard shortcut to switch sessions), #3777 (`/chronicle reindex` ignoring local‑only settings)
  *Common ask*: Better cross‑session continuity and simpler session navigation.

- **Plugin / MCP server lifecycle**
  *Issues*: #3331 (auto‑update plugins on CLI startup), #3564 (enable/disable MCP servers from show menu)
  *Common ask*: User‑friendly management of plugins and MCP servers without manual commands.

- **Metrics & observability**
  *Issues*: #3778 (emit cost/premium‑request metric via OpenTelemetry)
  *Common ask*: Parity with Claude Code’s cost tracking; currently only token counts are exported.

## Developer Pain Points

- **Terminal rendering corruption** (7+ open issues)
  Streaming output is regularly mangled – doubled characters, truncated tokens, overlapping fragments. Affects both thinking phase and final responses. No fix or acknowledgment yet for 1.0.62-x.
  *Examples*: #3749, #3755, #3769, #3780, #982.

- **Keyboard input breakage for non‑US layouts**
  AltGr combinations (`@`, `#`, Polish characters) cannot be typed. Makes the tool unusable for a significant portion of developers.
  *Examples*: #1999, #2920.

- **Enterprise authorization flakiness**
  Sporadic “not authorized” errors in large organizations, sometimes lasting days.
  *Example*: #2306.

- **MCP server instability**
  Tight respawn loops (#3782), built‑in server failures on Windows (#3455), and inability to use third‑party MCP servers due to policy (#3756).
  *Examples*: #3782, #3455, #3756.

- **Session reliability**
  Hangs after compaction (#1614), infinite compaction loops with large instruction files (#3621), and unrecoverable 400 errors after pasting images (#3781).
  *Examples*: #1614, #3621, #3781.

- **Platform‑specific crashes**
  Linux ARM64 panic (#3784) and Windows scroll bar misalignment (#3501).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest – 2026-06-13

## Today's Update Brief
The repository saw low activity with no new releases and only one new PR update in the last 24 hours. Two long-standing issues received updates, both involving non-trivial user frustration around billing logic and WebSocket initialization. No maintainer responses were recorded on any item.

## Releases
No new versions released in the last 24 hours.

## Hot Issues (3 items – all listed)

**#640 – Kimi CLI stuck in reading one file repeatedly and stuck in a loop**
[Link](https://github.com/MoonshotAI/kimi-cli/issues/640)
- **Created:** 2026-01-19 | **Updated:** 2026-06-12 | **Comments: 8**
- **Author:** @isbafatima90-arch
- **Affected workflow:** Custom Anthropic endpoint via config.toml (model: mimo-v2-flash) on Arch Linux (kernel 6.18.3). The CLI enters an infinite loop reading a single file repeatedly.
- **Impact:** Blocks any file-based context workflow, makes the tool effectively unusable under the reported configuration.
- **Community reaction:** Low engagement (1 like), but the issue has remained open for 5 months before being touched today. The length of the open cycle without resolution suggests maintainers may not be actively reproducing or have limited access to the reported model endpoint.

**#1994 – kimiCode usage calculation incorrect (用戶反映用量計算有問題)**
[Link](https://github.com/MoonshotAI/kimi-cli/issues/1994)
- **Created:** 2026-04-22 | **Updated:** 2026-06-12 | **Comments: 6**
- **Author:** @wanghonghust
- **Affected workflow:** Users on kimiCode subscription plans who expect per-API-request billing, but find their 2-hour token allowance exhausted in 2 tasks. The K2.6 model's extended chain-of-thought consumes tokens far faster than expected.
- **Impact:** Directly breaks the value proposition of kimiCode plans for users who rely on long-think models. Community confusion over whether billing is per-request or per-token.
- **Community reaction:** 7 likes – the most engagement of any open issue today. Users express frustration ("2 hours only gets 2 questions, quite ridiculous") and point to a discrepancy between marketing promises ("300–1200 requests per 5 hours") and actual experience.

**#2435 – [Bug] Work tab: "Daimon control WS not ready" + infinite reload at 99%**
[Link](https://github.com/MoonshotAI/kimi-cli/issues/2435)
- **Created:** 2026-06-06 | **Updated:** 2026-06-12 | **Comments: 1
- **Author:** @JoseLuisMartinezMeza
- **Affected workflow:** `kimi web` Work tab on Windows 10/11 (CLI v1.41.0). WebSocket daemon fails to initialize, causing the UI to show a persistent error and restart loading at 99%.
- **Impact:** Makes the entire Work tab unusable for the reporter.
- **Community reaction:** Only 1 comment (no likes yet), but the issue was opened less than a week ago. No maintainer confirmation or workaround mentioned.

## Key PR Progress (1 item – listed)

**#1597 – fix: guard trafilatura import to prevent cascading tool load failure on Python 3.13**
[Link](https://github.com/MoonshotAI/kimi-cli/pull/1597)
- **Created:** 2026-03-27 | **Updated:** 2026-06-12
- **Author:** @he-yufeng
- **Summary:** On Python 3.13, `charset-normalizer` ships mypyc-compiled `.so` binaries incompatible with the interpreter. This causes `trafilatura` to fail at import time. Since `web/__init__.py` unconditionally imports `FetchURL` (which contains a bare `import trafilatura`), the failure cascades, preventing all tools from loading. The fix guards the import.
- **Significance:** Resolves a blocking compatibility issue for Python 3.13 users who need the `web` fetch tool module. No comments or merge activity yet. The PR is 77 days old – may indicate maintainers are not prioritizing this or are waiting for upstream dependency fixes.

## Feature Request Clusters
No new feature requests were raised or updated in today's data. The three issues active today are all bug reports or billing complaints, not feature proposals.

## Developer Pain Points
- **Billing logic opacity:** Issue #1994 highlights a mismatch between advertised "per request" billing and the actual token-based consumption that penalizes long-chain-of-thought models. This is a recurring high-frustration point (7 likes, strong wording in comments).
- **WebSocket / daemon reliability:** Issue #2435 and the long-standing #640 both involve non-responding or looping initialization processes (file reading loop, WebSocket "not ready"). These are distinct from compile/runtime errors and suggest systemic fragility in the architecture's state management.
- **Python 3.13 compatibility lag:** PR #1597 has been open for 2.5 months with no merge, despite being a straightforward guard fix. This may indicate maintainers are not actively supporting the latest CPython release stream.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest — 2026-06-13**

---

## 1. Today’s Update Brief

Activity remains high with 50 issues and 50 PRs updated in the last 24 hours. No new releases were published. The community is reporting several critical bugs: a permission dialog that cannot be dismissed (#27436), an invalid JSON schema blocking GPT 5.5 connectivity (#31996), and a database constraint error after recent migrations (#31204). On the PR side, maintainers are merging fixes for MCP token refresh, spinner output in non‑TTY environments, and a long‑standing database migration duplication bug.

---

## 2. Releases

None in the last 24 hours.

---

## 3. Hot Issues

**1. Permission dialog stuck — cannot select “Allow once” or “Reject”**
[#27436](https://github.com/anomalyco/opencode/issues/27436)
The session is blocked because the permission prompt’s buttons are unresponsive. User also reports the “Tell Opencode what to do differently” input cannot be submitted.
*Comments: 16 · 👍 11*

**2. Invalid JSON schema due to unsupported regex lookaround — breaks GPT 5.5**
[#31996](https://github.com/anomalyco/opencode/issues/31996)
Requests to OpenAI‑compatible providers fail with `regex lookaround is not supported`. Affected pattern is in `fileKey` property.
*Comments: 11 · 👍 5*

**3. Doom loop not detected during reasoning or output**
[#12716](https://github.com/anomalyco/opencode/issues/12716)
The agent gets stuck repeating a thought process (e.g., “think about a word 100 times”) without being interrupted.
*Comments: 9 · 👍 3*

**4. Markdown preview toggle requested for file viewer sidebar**
[#14187](https://github.com/anomalyco/opencode/issues/14187)
Users want a rendered view for `.md` / `.mdx` files instead of raw syntax‑highlighted markdown.
*Comments: 8 · 👍 22*

**5. JSON→SQLite migration re‑runs on every launch on non‑latest channels**
[#16885](https://github.com/anomalyco/opencode/issues/16885)
Startup migration runs repeatedly for local/dev builds, causing unnecessary overhead.
*Comments: 8 · 👍 8*

**6. Opencode hangs at startup if inotify user instances are exhausted**
[#16610](https://github.com/anomalyco/opencode/issues/16610)
A Git repository triggers inotify watches; when the system limit is low (e.g., 16), the app hangs without a clear error.
*Comments: 8 · 👍 7*

**7. Permission wildcard `*` overwrites lower‑priority rules**
[#24335](https://github.com/anomalyco/opencode/issues/24335)
According to docs, later rules should win, but a catch‑all `*` rule still overrides more specific paths.
*Comments: 7 · 👍 4*

**8. `session_message.seq NOT NULL constraint` after latest migration**
[#31204](https://github.com/anomalyco/opencode/issues/31204)
Any session that triggers an agent switch crashes with a SQLite constraint error.
*Comments: 6 · 👍 2*

**9. Truncated tool calls misclassified as “invalid tool call” — leads to silent exit or doom loop**
[#18108](https://github.com/anomalyco/opencode/issues/18108)
When LLM output exceeds `maxOutputTokens`, truncated JSON is not flagged as truncation, causing unrecoverable loops.
*Comments: 6 · 👍 2*

**10. Warp mode + interactive Q&A captures all input — user must force‑close terminal**
[#27302](https://github.com/anomalyco/opencode/issues/27302)
In warp mode, the `question` tool grabs mouse clicks, Enter, and Ctrl+C, leaving no way to respond.
*Comments: 3 · 👍 6*

---

## 4. Key PR Progress

**1. fix(mcp): refresh expired OAuth tokens**
[#32135](https://github.com/anomalyco/opencode/pull/32135)
Prevents MCP sessions from failing after token expiry.

**2. fix(plugin): prevent spinner garbage output in non‑TTY environments**
[#31529](https://github.com/anomalyco/opencode/pull/31529)
Spinner frames (◓, ◑, ◒, ◐) no longer appear on separate lines in CI/CD logs.

**3. docs: add comprehensive security audit report (17 findings)**
[#32134](https://github.com/anomalyco/opencode/pull/32134)
New `SECURITY_AUDIT.md` covering 2,561 TypeScript files.

**4. fix(app): reconcile session_status in bootstrap to clear stale “busy”**
[#32128](https://github.com/anomalyco/opencode/pull/32128)
Addresses the root cause of a session forever showing “working” (related to [#32127](https://github.com/anomalyco/opencode/issues/32127)).

**5. fix(opencode): DB migration only once for non‑latest channels**
[#21056](https://github.com/anomalyco/opencode/pull/21056)
Fixes the repeated JSON→SQLite migration from [#16885](https://github.com/anomalyco/opencode/issues/16885).

**6. Add TrustedRouter provider**
[#32115](https://github.com/anomalyco/opencode/pull/32115)
New provider backed by OpenAI‑compatible profile, with base URL `https://api.trustedrouter.com/v1`.

**7. fix(opencode): optimize snapshots & add loading UI**
[#30837](https://github.com/anomalyco/opencode/pull/30837)
Reduces snapshot directory bloat via `alternates` deduplication and improves clarity when snapshots are being computed.

**8. fix(app): restore desktop “Open in” menu**
[#31993](https://github.com/anomalyco/opencode/pull/31993)
Fixes two regressions that removed the session header control in both titlebar layouts.

**9. feat(opencode): add `db doctor` and `db repair` commands**
[#32093](https://github.com/anomalyco/opencode/pull/32093)
Native CLI diagnostics and conservative repairs for SQLite database issues (references many related bugs).

**10. fix(opencode): classify fetch timeouts as retryable**
[#32117](https://github.com/anomalyco/opencode/pull/32117)
Provider `timeout` now results in a retry instead of a permanent failure.

---

## 5. Feature Request Clusters

- **Markdown preview in file sidebar** ([#14187](https://github.com/anomalyco/opencode/issues/14187)) – high popularity (22 👍).
- **Database maintenance tooling** – multiple requests for `db doctor` / `db repair` CLI commands ([#32097](https://github.com/anomalyco/opencode/issues/32097)) already landed in a PR.
- **Window title customization** – show active session/project in browser title ([#31423](https://github.com/anomalyco/opencode/issues/31423)).
- **Ecosystem documentation** – add community projects like `opencode-rotator-plugin` ([#32112](https://github.com/anomalyco/opencode/issues/32112)).
- **Pricing transparency** – display markup column in Go pricing table ([#32116](https://github.com/anomalyco/opencode/issues/32116)).
- **Ads integration** – suggested as a way for brands to sponsor OpenCode ([#32106](https://github.com/anomalyco/opencode/issues/32106), low seriousness).

---

## 6. Developer Pain Points

- **Permission system instability** – dialogs that cannot be dismissed ([#27436](https://github.com/anomalyco/opencode/issues/27436)), wildcard override behavior ([#24335](https://github.com/anomalyco/opencode/issues/24335)), `edit` rules ignored when `external_directory` is `"allow"` ([#18441](https://github.com/anomalyco/opencode/issues/18441)), and user frustration that the system “is intentionally broken” ([#24429](https://github.com/anomalyco/opencode/issues/24429)).
- **Infinite / unrecoverable loops** – doom loops go undetected ([#12716](https://github

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest – 2026-06-13

## Today's Update Brief
A new patch release (v0.18.0) shipped today, alongside a high-engagement discussion on the OAuth free tier policy adjustment (127 comments). The repository saw 49 issues updated and 50 pull requests updated in the last 24 hours, with active work concentrated on the daemon web-shell, CLI tool-handoff races, and model provider identity disambiguation.

## Releases

**v0.18.0** – [Release notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.18.0)
- Chore: v0.17.1 release notes.
- Fix: CLI now skips thought parts when copying output.

Small maintenance release with no breaking changes.

## Hot Issues

1. **#3203 – [OPEN] Qwen OAuth Free Tier Policy Adjustment**
   *Proposes reducing daily free quota from 1,000 to 100 requests and phasing out the free entry point.*
   **127 comments** – highest community engagement today. Mostly discussion about the impact on free-tier users and alternative pricing.
   [Issue](https://github.com/QwenLM/qwen-code/issues/3203)

2. **#4514 – [OPEN] tracking(serve): daemon capability gaps & prioritized backlog (post v0.16-alpha)**
   *Tracks remaining HTTP/SSE surface gaps in `qwen serve`.*
   **15 comments** – maintainers are reviewing a detailed gap list.
   [Issue](https://github.com/QwenLM/qwen-code/issues/4514)

3. **#4488 – [OPEN] qwen code plugin not showing in VS Code sidebar (v0.16.0 vs VS Code 1.120.0)**
   *Plugin flashes then disappears on newer VS Code versions.*
   **7 comments** – several users confirm the regression. Needs triage on VS Code API compatibility.
   [Issue](https://github.com/QwenLM/qwen-code/issues/4488)

4. **#4877 – [OPEN] OpenWork can't distinguish same model from different providers**
   *UI shows duplicate model names when same model ID appears from multiple providers.*
   **4 comments** – user reports the clash in `modelProviders` settings, requesting per-provider display names.
   [Issue](https://github.com/QwenLM/qwen-code/issues/4877)

5. **#4825 – [OPEN] `qwen sessions list` subcommand with --json, --tag, and date filters**
   *Request for a script-friendly way to list stored sessions.*
   **4 comments** – community agrees on the need; tagged `welcome-pr`.
   [Issue](https://github.com/QwenLM/qwen-code/issues/4825)

6. **#4845 – [OPEN] feat: add /import-config for Claude user config migration (CLI + Desktop)**
   *One-click import of MCP servers, instructions, permissions from Claude Code/Desktop.*
   **3 comments** – users migrating from Claude would benefit; scoped for CLI and Desktop modes.
   [Issue](https://github.com/QwenLM/qwen-code/issues/4845)

7. **#5018 – [OPEN] Long-task attention drifting, frequent forgetting**
   *During long-running tasks the model forgets context and repeats steps.*
   **3 comments** – user on Qwen Code 0.17.1 with `qwen3.7-max` reports degraded concentration.
   [Issue](https://github.com/QwenLM/qwen-code/issues/5018)

8. **#5067 – [OPEN] Focus-jump gates count retained terminal agents, not the panel's rendered roster**
   *Keyboard focus can land on a stale, invisible agent panel.*
   **2 comments** – follow-up to #4911; a fix PR #5070 is already open.
   [Issue](https://github.com/QwenLM/qwen-code/issues/5067)

9. **#5064 – [OPEN] Statusline wrapping when content overflows**
   *Long statusline text gets hidden or overlapped – requests line wrapping.*
   **2 comments** – minor UI irritation, tagged `welcome-pr`.
   [Issue](https://github.com/QwenLM/qwen-code/issues/5064)

10. **#5016 – [OPEN] Qwen Code executes a tool after cancellation (SIGINT)**
    *Tool work continues from an interrupted response.*
    **2 comments** – serious correctness bug; reproduction with local provider provided.
    [Issue](https://github.com/QwenLM/qwen-code/issues/5016)

## Key PR Progress

1. **#5066 – [OPEN] feat(web-shell): daemon web-shell improvements**
   *Adds token usage tracking, settings panel, i18n, retry, and hidden commands.*
   [PR](https://github.com/QwenLM/qwen-code/pull/5066)

2. **#5003 – [OPEN] feat(tui): remove tool group borders and collapse completed tool results**
   *UI simplification: removes round borders and collapses completed tool blocks in compact mode.*
   [PR](https://github.com/QwenLM/qwen-code/pull/5003)

3. **#5040 – [OPEN] feat(sdk): DaemonTransport abstraction**
   *Makes `DaemonClient` transport-agnostic (REST, ACP HTTP, ACP WebSocket). Architectural change.*
   [PR](https://github.com/QwenLM/qwen-code/pull/5040)

4. **#5069 – [OPEN] feat(web-shell): revamp floating todo panel interactions**
   *Replaces static task list above composer with interactive, space-efficient component.*
   [PR](https://github.com/QwenLM/qwen-code/pull/5069)

5. **#4894 – [OPEN] fix(dual-output): prevent FIFO blocking on startup when no reader connected**
   *Uses `O_NONBLOCK` + buffer to avoid blocking on empty FIFO pipes.*
   [PR](https://github.com/QwenLM/qwen-code/pull/4894)

6. **#4598 – [OPEN] feat(tui): collapsible thinking blocks with duration timer**
   *Long-running feature PR: streaming reasoning block that collapses on completion with timing.*
   [PR](https://github.com/QwenLM/qwen-code/pull/4598)

7. **#5071 – [OPEN] fix(cli): submit fast tool results after stream end**
   *Fixes race condition where fast tools could be dropped after model stream ends.*
   [PR](https://github.com/QwenLM/qwen-code/pull/5071)

8. **#5002 – [OPEN] refactor(serve): unify session title/displayName into single displayName field**
   *Cleans up daemon internal API by removing redundant `title` field, persisting `displayName` via JSONL.*
   [PR](https://github.com/QwenLM/qwen-code/pull/5002)

9. **#5039 – [OPEN] fix(cli): use id+baseUrl for precise model identity instead of id alone**
   *Stores `model.id`, `model.baseUrl`, `model.provider` to avoid model ambiguity across providers.*
   [PR](https://github.com/QwenLM/qwen-code/pull/5039)

10. **#5070 – [OPEN] fix(cli): ignore expired live agents in focus navigation**
    *Fixes #5067 by aligning focus gates with rendered agent roster.*
    [PR](https://github.com/QwenLM/qwen-code/pull/5070)

## Feature Request Clusters

- **Free Tier & Quota Policy** – #3203, #3267. Multiple users are requesting clearer quota limits, change notifications, and even a reduction in free tier. Discussion is ongoing with high engagement.
- **Model Provider Configuration** – #4877, #4813, #1206. Users want to reuse shared `baseUrl` across models, distinguish identical model IDs from different providers, and dynamically enumerate available models from OpenAI-compatible endpoints.
- **Session Management & History** – #4825 (list command), #4999 (goal iteration persistence), #4264 (`/compress-fast`), #4204 (file-history follow-ups). Requests for better session querying, durable goal counters, and non-AI context compression.
- **CLI/UI Polish** – #5064 (statusline wrapping), #4942 (VP mode scroll conflict), #4921 (virtualized history viewport), #4891 (terminal resize fragmentation), #4488 (VS Code plugin visibility). Several small but irritating UI/UX defects.
- **Long-Context & Tool Reliability** – #5018, #5019, #5029. Users report degrading performance over long sessions: attention drift, repetitive tool calls, and a perceived “intelligence drop”.
- **Background Subagents & Focus** – #4928 (auto-deny of permission-required tools), #5067 (focus navigation stale agents). Community wants parent-session approval queues for background agents.

## Developer Pain Points

1. **Free tier anxiety** – The proposed quota reduction (#3203) and confusion over current limits (#3267) are top concerns.
2. **Model configuration friction** – Having to duplicate `baseUrl` for every model (#4813) and inability to distinguish same model from different providers (#4877) wastes time.
3. **VS Code compatibility** – The plugin breaking on newer VS Code versions (#4488) and a false positive antivirus detection (#5055) create onboarding hurdles.
4. **Long-context degradation** – Multiple reports of attention failure, tool call loops, and general “smartness” decay in long sessions (#5018, #5019, #5029).
5. **Cancellation & race conditions** – Tool execution after SIGINT (#5016) and fast tool handoff drops (#5071) erode user trust.
6. **Command and session management gaps** – No `list` subcommand (#4825), `/goal` counter reset on resume (#4999), `/stats` double-counting (#4994).
7. **Windows compatibility** – Use of `printf` causing errors (#5010) and missing native Windows shell checks.

</details>