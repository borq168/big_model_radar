# AI CLI Tools Community Digest 2026-05-25

> Generated: 2026-05-25 02:37 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report — 2026-05-25

## 1. Daily Cross-Tool Overview

Today saw no major releases across any of the six tracked AI CLI tools, but community activity remained elevated with approximately 200 total issues and 140 total PRs receiving updates. **Claude Code** and **OpenAI Codex** generated the highest raw engagement volumes (50 issues updated each), while **Copilot CLI** stood out for shipping three patch releases targeting multiline rendering, shell hang fixes, and config-dir handling. **Qwen Code** advanced toward its v0.16 scope freeze with a coordinated F5 release chain of documentation and integration PRs. **Kimi Code** saw concentrated PR activity from a single contributor adding ACP protocol features. **Gemini CLI** and **OpenCode** both showed high bug-report density with limited maintainer resolution signals.

---

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | New Releases (24h) | Notable Maintainer Response |
|---|---|---|---|---|
| Claude Code | ~50 | 10 | None | Low (community-driven docs PRs only) |
| OpenAI Codex | ~50 | 30 | None | Low (no maintainer comments on hot issues) |
| Gemini CLI | 9 | 19 | None | Low (3 issues marked need-info/need-retesting) |
| Copilot CLI | 25 | 0 | 3 patches (v1.0.53–v1.0.55-0) | High (fixes shipped same day) |
| Kimi Code | ~1–2 active | 7 | None | Low (no maintainer response on open issue #1894) |
| Qwen Code | 9 | 25 | 1 nightly | Moderate (maintainers active on PRs and #4175 roadmap) |
| OpenCode | ~50 | 10 | None | Low (limited maintainer resolution on bugs) |

---

## 3. Shared Feature Directions

The following requirements appeared across **multiple tool communities** today:

### Desktop-CLI Session Sync / Cross-Client Continuity
- **Claude Code:** PR #61969 proposes syncing CLI conversation history to the desktop app for unified browsing.
- **OpenAI Codex:** Issue #24197 requests showing local CLI sessions in the desktop app session list; PR #24368 adds session tracing metadata.
- **Qwen Code:** PR #4484 closes 5 bridge-layer gaps in cross-client real-time sync for daemon-mode sessions.

**Observation:** All three tools with standalone CLI + desktop app offerings are actively bridging the gap, but approaches differ (proposal vs. implementation vs. internals audit).

### Session Checkpoint / Rewind / Resume Improvements
- **OpenAI Codex:** Issue #11626 (141 👍) requests native `/rewind` restoring both chat and workspace edits.
- **Gemini CLI:** Issue #27373 reports `gemini --resume` crashing with `ioctl(2) failed`.
- **Kimi Code:** PR #2363 adds ACP session history replay.
- **Claude Code:** PR #61968 documents the missing rewind checkpoint for AskUserQuestion answers.

**Observation:** Session restoration reliability is a cross-cutting pain point, with Gemini CLI reporting active crashes and Claude Code documenting undocumented limits.

### Subagent Lifecycle and Parallelism Control
- **Gemini CLI:** Issue #27414 requests asynchronous subagent execution.
- **OpenAI Codex:** Issues around subagent hang (#23930) and hours-long `close_agent` delays (#24389).
- **Claude Code:** Issue #61689 documents background tasks silently duplicated after ~90 seconds.
- **Qwen Code:** PR #4477 adds dense inline panel for parallel agent fan-out display.

**Observation:** No tool has solved subagent lifecycle management; users across platforms request both better visibility and control.

### MCP Configuration and Protocol Validation
- **Claude Code:** Multiple MCP issues (serverUrl vs url, disabledMcpServers, Google Drive Shared Drives blind spot).
- **OpenCode:** Google Drive MCP OAuth failure (#26195).
- **Copilot CLI:** MCP UI limitations (#3486) and misleading auth messages (#3269).
- **Gemini CLI:** Internal fields forwarded to external MCP tools (#27403).

**Observation:** MCP integration fragility is systemic rather than tool-specific, suggesting protocol-level validation gaps.

### Cross-Platform Stability (Windows, Termux, Wayland)
- **Copilot CLI:** Termux glibc incompatibility (#3333), Windows scrollbar misalignment (#3501), Wayland paste regression (#3414).
- **OpenAI Codex:** 10+ Windows-specific bugs (stutters #20214, SQLite corruption #23848, ANSI rendering #23740).
- **Claude Code:** Windows socket disconnections (#60133), Cowork processes left alive (#62107).
- **OpenCode:** Windows 11 startup crash (#28480).

**Observation:** Windows remains the most fragile platform across all tools; Wayland and non-glibc Linux (Termux) are secondary pain points.

---

## 4. Differentiation Analysis

### Feature Focus Divergence

| Focus Area | Leading Tools | Distinguishing Characteristics |
|---|---|---|
| **Enterprise / Cowork** | Claude Code | Cowork-specific bugs dominate (MITM proxy, Shared Drives, memory leaks). Dedicated plugin for credential scanning (#62099). |
| **Desktop Integration** | OpenAI Codex, Qwen Code | Codex has transcript overlay improvements (3-PR stack) and session inventory audit. Qwen Code focuses on daemon-mode multi-client sync. |
| **TUI/Input Refinement** | OpenAI Codex, Copilot CLI | Codex adding vim text objects, word-end fixes; Copilot CLI fixing IME rendering, paste regressions, scrollbar alignment. |
| **Protocol Interop (ACP)** | Kimi Code | Three stacked PRs from one contributor adding ACP permission mode, session replay, message ID assignment — unique among tracked tools. |
| **Safety & Governance** | Claude Code, Qwen Code | Claude: credential-guard plugin. Qwen: AUTO mode denial observability, PermissionDenied hooks, cumulative caps. |
| **Shell Execution Stability** | Gemini CLI, Copilot CLI | Gemini: `--resume` crash, "Waiting input" hang. Copilot: PS0/PROMPT_COMMAND hangs (now fixed). |
| **Context Window Management** | Claude Code, OpenAI Codex | Claude: incorrect context display (200k vs 1M for Sonnet 4.6). Codex: immediate "context full" error (#9046). |

### Target User Differentiation

- **Claude Code** caters to power users and enterprises: connector accounts, Cowork, plugin hooks, model flexibility. The community's top feature request (#27302, 180 comments) is multi-account support — a clear enterprise workflow need.

- **OpenAI Codex** serves a broader developer base with strong TUI comfort (vim bindings, transcript search, session inventory). The high upvote on `/rewind` (#11626, 141 👍) suggests users want undo-grade reliability.

- **Gemini CLI** has a mixed user base: power users requesting subagent parallelism and config flexibility, alongside users reporting fundamental trust issues (hallucinated PDF summaries, agent overriding instructions).

- **Copilot CLI** focuses on rapid patch turnaround for rendering and platform bugs. The community's top concern is input/interaction quality (IME rendering, paste, scrollbar) rather than feature gaps.

- **Kimi Code** shows early-stage ACP interop investment but limited community diversity (single contributor driving 3 PRs; skill portability issue open >1 month with no maintainer response).

- **Qwen Code** is pre-production (v0.16 nightly) with heavy maintainer-driven development toward daemon-mode maturity. Community engagement centers on roadmap commitment (#4175) rather than bug reports.

- **OpenCode** has the broadest model support (Kimi, DeepSeek, GPT, etc.) but the highest tool-calling bug density, suggesting model integration quality is the main friction point.

---

## 5. Community Activity Notes

**Most active by issue volume:** Claude Code, OpenAI Codex, and OpenCode each had ~50 issues updated — the highest counts today. Claude Code's top issue (#27302) accumulated 180 comments, the single most-engaged discussion across all tools.

**Most active by PR volume:** OpenAI Codex (30 PRs) and Qwen Code (25 PRs) led development velocity. Qwen Code's activity is remarkable given its pre-release status — the F5 release chain of 3 documentation/integration PRs suggests intentional coordination toward v0.16.

**Most responsive to bugs (shipped fixes):** Copilot CLI released three patches in 24 hours, fixing multiline clipping, PS0 hangs, and config-dir handling. This stands in contrast to other tools where maintainer responses are sparse or limited to labeling.

**Least maintainer-active on reported bugs:** Gemini CLI has 3 issues marked need-info/need-retesting with no resolution. OpenCode has multiple tool-calling bugs (Kimi k2.5 JSON parsing, #20650) with no maintainer resolution. Claude Code's maintainer activity is limited to documentation PRs from a single community contributor.

**Single-contributor concentration:** Kimi Code's 3 ACP PRs are all from @huntharo. Claude Code's 8 documentation PRs are all from @giruuuuj. This suggests either concentrated expertise or low contributor breadth in documentation and protocol work.

---

## 6. Evidence-Backed Observations

**Observation 1: Desktop-CLI session sync is a convergent requirement across three tools.**
Claude Code (PR #61969 proposal), OpenAI Codex (#24197 request, #24368 internals), and Qwen Code (#4484 cross-client sync completeness) all address the same core need: users want one unified view of their work across CLI and desktop sessions. The approaches differ in maturity (proposal vs. PR vs. internals fix) but the direction is consistent.

**Observation 2: Windows stability is a shared weakness across all tracked tools.**
Every tool community reported Windows-specific bugs today: Copilot CLI (scrollbar, Termux incompatibility), OpenAI Codex (stutters, SQLite corruption, ANSI rendering, 8+ distinct issues), Claude Code (socket disconnections, memory leaks), OpenCode (startup crash). No tool has solved this, and the variety of issues suggests platform-specific testing gaps.

**Observation 3: MCP/connector integration is fragile beyond any single tool's control.**
Claude Code (5+ distinct MCP issues), OpenCode (Google Drive OAuth), Copilot CLI (MCP UI limitations, misleading auth), and Gemini CLI (internal field leakage) all report MCP integration problems. The pattern (wrong config keys, missing scopes, silent drops) suggests the MCP specification or reference implementations need validation improvements.

**Observation 4: Subagent lifecycle management is unsolved across all tools with parallel agents.**
Claude Code (background task duplication after ~90s), OpenAI Codex (subagent hang, close_agent delays), Gemini CLI (parallel execution requested, MAX_TURNS false success), and Qwen Code (parallel fan-out visibility) all surface different aspects of the same unsolved problem. No tool appears to have reliable subagent lifecycle handling.

**Observation 5: Authentication and billing friction disproportionately affects paying users.**
Claude Code (Max 5x→20x billing loop, #54204), OpenAI Codex (phone verification loop, #20161/#20320), Gemini CLI (OAuth callback timeout, #27402), and OpenCode (subscription migration failures, #29141/#29135) show that authentication and monetization systems are actively blocking paying users — not just free-tier users — across multiple tools.

**No clear cross-tool signal** on model performance trends (e.g., "Opus 4.7 thinking summaries missing" in Claude Code is isolated; "Kimi k2.5 tool calling JSON parsing error" in OpenCode is model-specific). Tool-calling bugs are tool+model pair issues, not ecosystem-wide patterns.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-05-25

## Today's Update Brief

No new releases were published in the last 24 hours. Community activity remains high with 50 open issues receiving updates, dominated by a long-running feature request (multiple Connector accounts, 180 comments) and several Opus 4.7-related bugs. A single contributor (@giruuuuj) drove 8 documentation PRs adding troubleshooting entries for recently reported bugs.

## Releases

No new releases detected in the last 24 hours. The latest published version remains v2.1.150.

## Hot Issues

1. **[#27302 — Support multiple Connector accounts](https://github.com/anthropics/claude-code/issues/27302)** (180 comments, 240 👍)
   *Workflow:* Users managing multiple accounts for the same connector (e.g., GitHub, Slack, Gmail) must constantly reconnect and re-authenticate. *Impact:* High — this is the single most-requested feature on the repo, open since February. *Community:* 180 comments overwhelmingly supportive, with frequent requests for Anthropic's roadmap commitment.

2. **[#49268 — Opus 4.7 thinking summaries missing](https://github.com/anthropics/claude-code/issues/49268)** (33 comments, 57 👍)
   *Workflow:* Extended thinking on Opus 4.7 no longer returns `display: "summarized"` blocks. *Impact:* Core to the Opus value proposition — users lose structured thought summaries. *Community:* Report includes root cause analysis (harness default changed), with multiple confirmed reproductions.

3. **[#54204 — Max 5x → 20x upgrade stuck in billing loop](https://github.com/anthropics/claude-code/issues/54204)** (22 comments)
   *Workflow:* Users upgrading from Max 5x to Max 20x receive the same canceled PaymentIntent on every retry, creating an infinite upgrade failure. *Impact:* Blocks paying users from accessing higher tiers. *Community:* Users reporting identical behavior across different regions and payment methods.

4. **[#16288 — Plugin hooks not loaded from external hooks.json](https://github.com/anthropics/claude-code/issues/16288)** (18 comments, 14 👍)
   *Workflow:* `plugin.json` referencing an external `hooks.json` file silently drops all hooks. *Impact:* Plugin authors cannot split hook definitions across files, forcing monolithic plugin configurations. *Community:* Open since January, still awaiting fix.

5. **[#61734 — Context window status shows 200k for Sonnet 4.6, model supports 1M](https://github.com/anthropics/claude-code/issues/61734)** (17 comments)
   *Workflow:* Windows users see status bar reporting 200k context limit when model supports 1M tokens. *Impact:* Misleading UX; may cause premature context management. *Community:* Users report cross-platform discrepancy (some platforms show correct 1M).

6. **[#15379 — Jupyter Notebook edits not refreshing in VS Code](https://github.com/anthropics/claude-code/issues/15379)** (15 comments, 21 👍)
   *Workflow:* Claude Code writes .ipynb edits to disk, but VS Code does not auto-reload the notebook view. *Impact:* Data scientists must manually reload, breaking the edit-preview loop. *Community:* Ongoing issue since December 2025, with multiple workarounds suggested (file watcher plugins).

7. **[#53442 — Cowork Google Drive MCP cannot access Shared Drives](https://github.com/anthropics/claude-code/issues/53442)** (15 comments, 18 👍)
   *Workflow:* Google Drive MCP works only on "My Drive" content; Workspace Shared Drives return empty results. *Impact:* Blocks enterprise users who rely on shared organizational drives. *Community:* Users report Google Drive API scopes may be incomplete in the MCP configuration.

8. **[#37323 — Support /btw command in VS Code extension](https://github.com/anthropics/claude-code/issues/37323)** (14 comments, 61 👍)
   *Workflow:* Terminal CLI supports `/btw` for ephemeral side-questions; VS Code extension omits the command entirely. *Impact:* Parity gap forces power users to keep a terminal session open alongside the extension. *Community:* High upvote ratio (61 👍 on 14 comments) indicates broad demand.

9. **[#2441 — Add timestamps to each message](https://github.com/anthropics/claude-code/issues/2441)** (14 comments, 46 👍)
   *Workflow:* No per-message timestamps in TUI, making multi-session navigation difficult. *Impact:* Users managing multiple concurrent sessions cannot chronologically correlate interactions. *Community:* Open since June 2025; one of the oldest open feature requests.

10. **[#60133 — Socket connection closed during long agentic sessions](https://github.com/anthropics/claude-code/issues/60133)** (12 comments, 7 👍)
    *Workflow:* Long agentic tasks on Linux throw "socket connection closed unexpectedly." *Impact:* Breaks critical workflows like automated refactoring or batch processing. *Community:* Analysis points to Bun runtime lacking SO_KEEPALIVE, with mitigation via feature flag workarounds.

## Key PR Progress

1. **[#62099 — Add credential-guard plugin for hardcoded secret detection](https://github.com/anthropics/claude-code/pull/62099)** (Open)
   *Feature:* Prevents Claude Code from writing AWS keys, API tokens, private keys, and other secrets via PreToolUse hook. Scans Write/Edit/MultiEdit/Bash tool calls for 20+ credential patterns. Addresses security concerns raised in #62095.

2. **[#61969 — CLI-desktop conversation sync (proposal)](https://github.com/anthropics/claude-code/pull/61969)** (Open)
   *Feature:* Proposes syncing CLI conversation history (`~/.claude/projects/*.jsonl`) to the desktop app for unified browsing and review. Closes #61967.

3. **[#62023 — fix: word-boundary @claude trigger](https://github.com/anthropics/claude-code/pull/62023)** (Open)
   *Fix:* Changes `contains(..., '@claude')` to word-boundary check in CI workflow to prevent false positives from `@claude-plugins-official`, `@claude-code-slack-channel` mentions.

4. **[#61968 — Docs: AskUserQuestion rewind checkpoint gap](https://github.com/anthropics/claude-code/pull/61968)** (Open)
   *Docs:* Documents that AskUserQuestion answers don't create rewind checkpoints (they arrive as tool_result blocks inside assistant turns). Provides echo-back workaround. Closes #61965.

5. **[#61966 — Docs: unauthorized phantom messages in tmux](https://github.com/anthropics/claude-code/pull/61966)** (Open)
   *Docs:* Explains that tmux forwarding control sequences are interpreted as keypresses, causing phantom input. Recommends disabling focus-events or running outside tmux. Closes #61962.

6. **[#61964 — Docs: SSH remote failure from corrupted plugin archive](https://github.com/anthropics/claude-code/pull/61964)** (Open)
   *Docs:* Root cause analysis of SSH session failures when local plugin archives are corrupted during auto-upload. Includes detection and workaround steps. Closes #61963.

7. **[#61708 — Docs: invalid model identifier after update](https://github.com/anthropics/claude-code/pull/61708)** (Open)
   *Docs:* Community finding that `AWS_REGION` + `CLAUDE_CODE_USE_BEDROCK` env vars cause model ID prefix mismatch between Bedrock region resolution and Anthropic API auth. Closes #61707.

8. **[#61697 — Docs: background tasks silently relaunched as duplicates](https://github.com/anthropics/claude-code/pull/61697)** (Open)
   *Docs:* Documents ~90-120 second duplicate relaunch issue when context compaction strips task metadata. Proposes three-layer fix approach. Closes #61689.

9. **[#61956 — fix: correct state file path in ralph-wiggum plugin](https://github.com/anthropics/claude-code/pull/61956)** (Open)
   *Fix:* Corrects state file path from `.claude/.ralph-loop.local.md` (leading dot) to `.claude/ralph-loop.local.md` in plugin help docs. Fixes #61764.

10. **[#61478 / #58673 — @sjbrenchley89 open PRs](https://github.com/anthropics/claude-code/pull/61478)** (Open)
    *Note:* Two PRs by the same author remain open with unclear descriptions — likely drafts or placeholders.

## Feature Request Clusters

**Multi-account & credential management:**
- Multiple connector accounts per provider (#27302, 180 comments)
- Credential-guard plugin proposal (#62099)
- Active skill field in PreToolUse hook for scoped permission rules (#62108)

**UI/UX improvements:**
- Per-message timestamps in TUI (#2441, 46 👍)
- Full-text search across chat history (#62110)
- Preview panel label for Claude-referenced UI components (#62117)
- `/btw` command parity in VS Code extension (#37323, 61 👍)

**Context & model flexibility:**
- Ability to force 200k context on Sonnet 4.6 (desktop forces 1M, #62114)
- Correct context window display for Sonnet 4.6 (currently shows 200k, supports 1M, #61734)

## Developer Pain Points

- **MCP configuration fragility:** HTTP MCP writes `serverUrl` instead of `url` (#39039), dynamic `--mcp-config` entries silently dropped when server appears in `disabledMcpServers` (#61007), Google Drive MCP blind to Shared Drives (#53442), Gmail MCP fails on draft messages (#48689). Multiple independent MCP issues suggest systemic validation gaps.
- **Background task / resource management:** Tasks silently duplicated after ~90s (#61689), sub-agents cannot spawn further sub-agents on Windows (#61993), Cowork processes left alive on Windows causing memory leak (#62107). These collectively point to scheduler/resource lifecycle issues.
- **Cowork-specific bugs:** MITM egress proxy blocking non-API domains (#30861), Additional allowed domains allowlist non-functional (#38984), Google Drive Shared Drive blind spot (#53442). Enterprises running Cowork are disproportionately affected.
- **Model behavior quirks:** Opus 4.7 thinking summaries missing (#49268), Socket disconnections on long sessions (#60133), model acting without fully reading source code before generating docs (#62106). Users report behavioral regressions tied to model version changes.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-25

## Today's Update Brief
No releases were published in the last 24 hours. Community activity remains high: 50 issues received updates, with the top 15 accumulating 136 comments. Pull request velocity is notable, with 30 PRs touched, including a stack of TUI usability improvements and the first parts of a “Review Story” feature.

## Releases
*None in the last 24 hours.*

## Hot Issues

1. **[Phone number verification does not work](https://github.com/openai/codex/issues/20161)** (Closed, 157 comments, 👍102)
   Auth flow blocked when SSO login forces phone entry despite no phone on the account. A widespread trigger (device switch) and high reaction count indicate significant user impact. The issue is closed, suggesting a fix has been deployed.

2. **[CLI: Add /rewind checkpoint restore](https://github.com/openai/codex/issues/11626)** (Open, 30 comments, 👍141)
   Request for a native `/rewind` that reverts both chat context and workspace edits from the same checkpoint. High community support; current Esc rewind only handles conversation state.

3. **[Codex ran out of room in the context window](https://github.com/openai/codex/issues/9046)** (Open, 24 comments)
   Context‑window full error appears **immediately** after a single user message. The reporter mentions v0.80.0; no model override helps. Suggests a metadata or transcription‑bloat bug rather than legitimate context exhaustion.

4. **[ChatGPT asking phone verify but didn't send code](https://github.com/openai/codex/issues/20320)** (Open, 17 comments, 👍3)
   Phone verification loop without receiving an SMS/voice code. User blocked from upgrading to Pro. Likely related to #20161 root cause.

5. **[Desktop thrashes resume/unsubscribe with >4 heartbeat automations](https://github.com/openai/codex/issues/19563)** (Open, 15 comments)
   Automations with `target_thread_id` cause desktop app to repeatedly subscribe/unsubscribe, leading to high CPU/memory churn. Affects users who rely on heartbeat patterns for monitoring.

6. **[Suppress bubblewrap warning when sandbox is bypassed](https://github.com/openai/codex/issues/15282)** (Closed, 15 comments, 👍10)
   After v0.116.0, users see a `bubblewrap not found` warning even when running without sandboxing. The fix suppresses the warning when sandbox is explicitly bypassed.

7. **[Codex App frequently freezes/stutters on Windows 11](https://github.com/openai/codex/issues/20214)** (Open, 13 comments, 👍15)
   Despite 32 GB RAM and an AMD Ryzen 5, the desktop app becomes unresponsive after a few minutes of use. Reporter is on the Plus plan. No workaround identified.

8. **[Codex GUI failed to launch – SQLite state DB error](https://github.com/openai/codex/issues/23848)** (Open, 10 comments)
   Windows 10 Enterprise users see a launch crash due to corrupted or inaccessible SQLite state database. The reporter provided a manual fix (deleting the DB) but requests a permanent solution.

9. **[Feature request: show local Codex CLI sessions in the desktop app](https://github.com/openai/codex/issues/24197)** (Open, 6 comments)
   Users who work primarily in the CLI want those sessions searchable and openable from the desktop app. Currently there is no bridge between standalone TUI sessions and the app’s session list.

10. **[Latest npm Codex CLI renders raw ANSI sequences in Windows Terminal](https://github.com/openai/codex/issues/23740)** (Open, 6 comments, 👍5)
    Regression in v0.131.0+ causes control characters to appear verbatim, making the TUI unusable. Known working version is v0.130.0. Community suspects a terminal capability detection change.

## Key PR Progress

1. **[Reject empty base64 image inputs](https://github.com/openai/codex/pull/24376)** (Open)
   Prevents empty `data:image/*;base64,` URLs from being sent to the Responses API, which would otherwise poison a thread and make later resumes fail persistently.

2. **[Map Responses API invalid_value 400s into InvalidImageRequest](https://github.com/openai/codex/pull/24169)** (Closed)
   Companion fix: empty/invalid base64 errors now trigger recovery logic (e.g., replacing image with text) instead of hard failure.

3. **[feat(tui): add vim text object bindings](https://github.com/openai/codex/pull/24382)** (Open)
   Adds `ciw`, `daw`, `di(`, and quote/bracket variants to the Vim composer, completing common text‑object editing workflows.

4. **[fix(tui): complete vim word-end and line-end behavior](https://github.com/openai/codex/pull/24380)** (Open)
   Fixes `e` key getting stuck on word ends and adds `C` (change to end of line). Also resolves `D` removing the trailing newline.

5. **[feat(tui): add transcript search](https://github.com/openai/codex/pull/23539)** (Open)
   Third of a three‑part transcript overlay stack. Adds `Ctrl+F` style search inside the transcript pager, making long sessions navigable by arbitrary text.

6. **[perf(tui): optimize transcript prompt selection](https://github.com/openai/codex/pull/23346)** (Open)
   Reduces unnecessary re‑scans and renders when moving between prompts, improving responsiveness on long or resumed transcripts.

7. **[feat(tui): improve transcript overlay UX](https://github.com/openai/codex/pull/23344)** (Open)
   Base PR of the trilogy. Overhauls the transcript pager with prompt‑to‑prompt navigation, hidden actions, and copy feedback that stays inside the overlay.

8. **[Add compaction metadata to turn headers](https://github.com/openai/codex/pull/24368)** (Open)
   Adds `request_kind` fields (ordinary, compaction, detached memory) and `window_id` to turn headers. Enables better debugging and analytics of automatic context‑window compaction behavior.

9. **[fix(tui): avoid modifyOtherKeys for unknown tmux formats](https://github.com/openai/codex/pull/24371)** (Open)
   Fixes a regression where Codex 0.131 enabled tmux `modifyOtherKeys` mode 2 when the terminal format could not be queried, breaking iTerm2 control‑mode sessions.

10. **[Add doctor thread inventory audit](https://github.com/openai/codex/pull/24305)** (Open)
    `codex doctor` now compares the app server’s SQLite thread listing against the durable rollout JSONL files on disk, surfacing missing sessions directly.

## Feature Request Clusters

**Desktop app integration with CLI sessions**
Multiple issues request deeper connectivity between the standalone CLI/TUI and the desktop app:
- Show local CLI sessions in the desktop app session list ([#24197](https://github.com/openai/codex/issues/24197))
- Attach an existing top‑level session as a persistent subagent to an orchestrator thread ([#23713](https://github.com/openai/codex/issues/23713))
- Add app server API for attaching threads as child sessions ([#24398](https://github.com/openai/codex/issues/24398))

**Session checkpoint and resume enhancements**
Users desire better control over session state:
- Native `/rewind` restoring both chat and workspace edits ([#11626](https://github.com/openai/codex/issues/11626))
- Promptless exec resume for active goals (PR [#24321](https://github.com/openai/codex/pull/24321) addresses this)
- Compact and automated thread history clean‑up nudges (PR [#24356](https://github.com/openai/codex/pull/24356))

## Developer Pain Points

- **Phone‑based authentication friction** – Two issues with >17 comments each ([#20161], [#20320]) describe SSO/phone verification loops that block login entirely, often triggered by device changes. The closed status of #20161 suggests a fix is live, but #20320 remains open.
- **Windows platform stability** – A cluster of 10+ Windows‑specific bugs (stutters [#20214], laggy long threads [#21299], sandbox `CreateProcessAsUserW` failures [#22428], ANSI rendering regressions [#23740], SQLite DB corruption [#23848], path normalization mismatches [#23803], environment variable inheritance [#24362]) indicates the Windows desktop experience still suffers from quality issues.
- **Context‑window exhaustion early in chat** – Issue [#9046](https://github.com/openai/codex/issues/9046) shows that some users hit the “context window full” error immediately after a single user prompt, pointing to a possible bug in context accounting or metadata bloat rather than legitimate token limits.
- **Subagent hang and UI ghosting** – Subagents can remain visible after closing ([#23930](https://github.com/openai/codex/issues/23930)) or cause hours‑long hangs during `close_agent` ([#24389](https://github.com/openai/codex/issues/24389)). Combined with planning mode tool‑call loops burning quota ([#23164](https://github.com/openai/codex/issues/23164)), agent reliability is a recurring pain point.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest – 2026-05-25

## Today’s Update Brief
No new releases landed in the past 24 hours, but community activity remains high. Nine open issues and 19 pull requests were updated, with a strong focus on shell execution stability, subagent reliability, and extension validation. Notable bug reports include a crash when resuming sessions and a hallucination problem with PDF summarization.

---

## Releases
No new releases in the last 24 hours.

---

## Hot Issues
*(10 noteworthy issues ordered by comment count, reflecting community engagement)*

### 1. Command substitution block should be user-configurable
**#27393** – [priority/p3, enhancement, help wanted]
Users want a `allowCommandSubstitution` toggle in `settings.json` to opt out of the hardcoded command substitution block, especially in YOLO mode where a warning would be preferred over a silent block.
**Workflow:** Agent runs shell commands; currently substitution behavior is hardcoded.
**Impact:** Reduces flexibility for power users. Community has 9 comments requesting a config toggle.
[GitHub](https://github.com/google-gemini/gemini-cli/issues/27393)

### 2. `gemini --resume` crashes with `ioctl(2) failed`
**#27373** – [priority/p1, bug, area/core]
Running `gemini --resume` to restore a previous session causes a crash at `UnixTerminal.resize`. The error originates from pty resizing when restoring the terminal.
**Workflow:** Session restoration.
**Impact:** Breaks a core workflow for long-running sessions. 8 comments, no maintainer response yet.
[GitHub](https://github.com/google-gemini/gemini-cli/issues/27373)

### 3. Subagent recovery after MAX_TURNS falsely reports GOAL success
**#22323** – [priority/p1, bug, area/agent]
`codebase_investigator` subagent reports `status: "success"` and `Termination Reason: "GOAL"` even when it hit the maximum turn limit before producing any analysis. Hides real failures.
**Workflow:** Multi-agent investigations.
**Impact:** Misleading logs and potential loss of debugging context. 6 comments, marked as need-retesting.
[GitHub](https://github.com/google-gemini/gemini-cli/issues/22323)

### 4. Gemini overrules user action and does what it wants
**#27417** – [priority/p2, bug, area/agent]
The agent ignores explicit user instructions and executes its own plan. User reports tool call sequences that contradict the user’s request.
**Workflow:** Interactive agent conversations.
**Impact:** Trust and reliability issue. 6 comments, maintainer asked for exported chat history.
[GitHub](https://github.com/google-gemini/gemini-cli/issues/27417)

### 5. Total hallucinations when summarizing PDFs
**#27408** – [priority/p2, bug, area/agent]
The agent fabricated content when summarizing PDFs – a task that worked correctly last week. Now produces “total hallucinations”.
**Workflow:** File reading and summarization.
**Impact:** Breaks a common use case for document analysis. 5 comments, no maintainer response.
[GitHub](https://github.com/google-gemini/gemini-cli/issues/27408)

### 6. Critical routing flaw: background utility limits block main Pro model
**#27411** – [priority/p1, bug, area/agent]
Rate limits from hidden background utility models (used for routing/sub-agents) block the user‑configured Pro model, preventing any work.
**Workflow:** Agent routing for multi‑model setups.
**Impact:** Blocks usage for paying Pro users. 4 comments, marked as possible duplicate.
[GitHub](https://github.com/google-gemini/gemini-cli/issues/27411)

### 7. Asynchronous subagent execution
**#27414** – [priority/p3, enhancement, area/agent]
Requests parallel subagent execution similar to AGY CLI, citing API billing users want to run multiple subagents in parallel to improve workflow.
**Workflow:** Multi‑agent tasks.
**Impact:** Performance improvement for power users. 4 comments, no maintainer response.
[GitHub](https://github.com/google-gemini/gemini-cli/issues/27414)

### 8. `activate_skill` disappeared in v0.43
**#27370** – [priority/p1, bug, area/agent]
After upgrading to 0.43, the tool list shows only `ReadFile`, `Shell`, and `WriteFile` – `activate_skill`, `google_web_search`, `web_fetch` are missing.
**Workflow:** Agent tool usage.
**Impact:** Reduces agent capabilities. 3 comments, no maintainer response.
[GitHub](https://github.com/google-gemini/gemini-cli/issues/27370)

### 9. Shell command execution stuck “Waiting input” after command completes
**#25166** – [priority/p1, bug, area/core]
After executing simple shell commands (e.g., `ls`), the agent hangs showing “Awaiting user input” even though the command finished. Persists across sessions.
**Workflow:** Shell execution.
**Impact:** Blocks automated workflows. 4 comments, 3 reactions, maintainer tracked.
[GitHub](https://github.com/google-gemini/gemini-cli/issues/25166)

### 10. OAuth callback timeout
**#27402** – [priority/p2, bug, area/security]
Users get `OAuth callback timeout` errors when authenticating, preventing login.
**Workflow:** Authentication.
**Impact:** Blocks all CLI usage for affected users. 3 comments, marked as need-information.
[GitHub](https://github.com/google-gemini/gemini-cli/issues/27402)

---

## Key PR Progress
*(10 pull requests updated in the last 24 hours, reflecting active development)*

### 1. fix(cli): validate extension and settings config JSON
**#24905** – [priority/p3, area/core, help wanted]
Replaces unsafe `JSON.parse` casts with `zod` schema validation for extension and settings files. Prevents crashes from malformed JSON.
[GitHub](https://github.com/google-gemini/gemini-cli/pull/24905)

### 2. fix(core): add system PATH fallback for ripgrep discovery
**#26769** – [priority/p2, area/core] (CLOSED)
Restores `PATH` fallback for `ripgrep` after the bundled SEA distribution broke discovery on systems without `rg` in standard locations. Fixes performance degradation reported in #26409.
[GitHub](https://github.com/google-gemini/gemini-cli/pull/26769)

### 3. Add support for custom external safety checkers
**#27186** – [priority/p2, area/enterprise]
Implements Phase 5 of the safety checker system, allowing organizations to plug in external security policies and compliance checks via executable hooks.
[GitHub](https://github.com/google-gemini/gemini-cli/pull/27186)

### 4. fix(core): exclude `.gemini/tmp/` from agent search tools by default
**#27174** – [priority/p2, area/agent]
Prevents the agent from recursively scanning its own session JSONL files, which caused performance degradation and token waste.
[GitHub](https://github.com/google-gemini/gemini-cli/pull/27174)

### 5. fix(core): prevent dropping valid model turns with empty text parts
**#27170** – [priority/p1, area/agent]
Fixes a 400 error (“function call turn comes immediately after a user turn”) caused by overly aggressive filtering of turns containing empty text alongside `functionCall` parts.
[GitHub](https://github.com/google-gemini/gemini-cli/pull/27170)

### 6. feat(core): ensure non‑interactive shell respects `enableInteractiveShell: false`
**#27418** – [priority/p1, area/non‑interactive]
Addresses hangs in non‑interactive loops and improves native bridge stability by handling non‑UTF‑8 bytes and buffer‑overflow scenarios in the string serialization layer. Fixes #27419.
[GitHub](https://github.com/google-gemini/gemini-cli/pull/27418)

### 7. fix(core): prevent text duplication in AfterAgent hook prompt_response
**#27096** – [priority/p2, area/extensions]
Corrects a bug where the `AfterAgent` hook received duplicate text and extra spaces, ensuring hooks get the exact clean model output.
[GitHub](https://github.com/google-gemini/gemini-cli/pull/27096)

### 8. Add ephemeral session mode (--ephemeral)
**#27365** – [status/need‑issue]
Introduces an `--ephemeral` flag for headless runs that suppresses session logging, useful for data annotation and automated labelling tasks.
[GitHub](https://github.com/google-gemini/gemini-cli/pull/27365)

### 9. fix: add command validation to prevent natural language being saved as shell commands
**#27347** – [priority/p2, area/core]
Prevents raw natural language input like “mostrar diretório” from being written into `settings.json` as a shell command definition.
[GitHub](https://github.com/google-gemini/gemini-cli/pull/27347)

### 10. fix: wrap Ajv validate() in try/catch to prevent crash on malformed schemas
**#27348** – [priority/p1, area/agent]
Catches `Cannot read properties of undefined` errors during schema validation when the LLM sends unexpected parameter shapes in `write_file`/`replace` tools.
[GitHub](https://github.com/google-gemini/gemini-cli/pull/27348)

---

## Feature Request Clusters
*(Recurring feature ideas from open issues)*

- **Subagent parallelism** – Multiple requests for asynchronous subagent execution (#27414, #27392) to improve throughput for API‑billed users. Some compare to AGY CLI.
- **Configuration flexibility** – Calls for user‑configurable command substitution blocks (#27393), managed agent API integration (#27392), and the ability to override subagent settings via `settings.json` (e.g., `maxTurns`, seen in #22267, #22232).
- **Code understanding improvements** – The AST‑aware file read investigation (#22745) and requests for better binary/PDF handling (#27408, #27412) point to deeper codebase analysis needs.
- **Safety and enterprise controls** – Custom external safety checkers (#27186), improved policy engine blocking (#20355), and deterministic secret redaction (#26525) reflect demand for organizational governance.

---

## Developer Pain Points
*(Recurring frustrations noted in today’s issues)*

- **Shell execution hangs and crashes** – The `--resume` crash (#27373) and “Waiting input” after command completion (#25166) are still unresolved, disrupting automated and interactive workflows alike.
- **Inconsistent / hallucinated outputs** – PDF summarization generated completely fabricated content (#27408); the agent also overrides user actions (#27417). Trust in the agent is a major concern.
- **Tool discovery and routing issues** – After upgrading to 0.43, built‑in tools disappeared (#27370). Routing flaws cause utility model rate limits to block the primary Pro model (#27411).
- **Terminal and TUI instability** – Ghost visual artifacts in iTerm2 (#27374), OAuth callback timeouts (#27402), and input handling race conditions on touch interfaces (#27415) degrade the user experience.
- **Meta‑data leakage** – `wait_for_previous` and other internal fields are forwarded to external MCP tools (#27403), breaking contract validation on strict servers.

All links point to the official GitHub repository: [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-25

## Today's Update Brief
A flurry of patch releases (v1.0.53 through v1.0.55-0) landed in the last 24 hours, fixing multiline prompt clipping, bash shell hangs with PS0, and `--config-dir` handling in the skills picker. Community activity remains high: 25 issues were updated, with several new bugs reported around terminal rendering, paste behaviour, and the upcoming extension lifecycle changes. No pull requests were merged today.

## Releases
- **[v1.0.55-0](https://github.com/github/copilot-cli/releases/tag/v1.0.55-0)** – Fix: Extensions launch correctly when the CLI runs as a single-executable application (SEA).
- **[v1.0.54](https://github.com/github/copilot-cli/releases/tag/v1.0.54)** – General fixes and changes.
- **[v1.0.53](https://github.com/github/copilot-cli/releases/tag/v1.0.53)** –
  - Multiline prompts display fully without content clipping or selection offset.
  - `/skills` picker now correctly honors `--config-dir` when saving skill preferences.
  - Bash shell sessions no longer hang when `PS0` or `PROMPT_COMMAND` is set.
- v1.0.53-2, v1.0.53-1, v1.0.53-0 – Additional minor fixes and changes.

## Hot Issues (10 selected)

1. **[#3333 – Android/Termux broken (glibc dependency in runtime.node)](https://github.com/github/copilot-cli/issues/3333)**
   Open since May 15, the native Rust addon introduced in v1.0.48 is compiled against glibc, making it incompatible with Termux (Bionic libc). 1 👍, 5 comments. No maintainer response yet.

2. **[#3414 – Paste regression on GNOME Wayland (v1.0.49+)](https://github.com/github/copilot-cli/issues/3414)**
   Paste inside the CLI prompt broke on Ubuntu GNOME Wayland after upgrading from v1.0.48. User localised a `xsel` / clipboard mismatch. 1 👍, 3 comments.

3. **[#2317 – `~/.bash_history` truncated after copilot executes a Bash command](https://github.com/github/copilot-cli/issues/2317)**
   Long-standing bug (opened March) where the CLI ignores `HISTFILE` / `HISTSIZE` settings, truncating history. 8 👍, 2 comments. User requests re-opening of #501.

4. **[#3501 – Scroll bar makes text unalign on Windows](https://github.com/github/copilot-cli/issues/3501)**
   Since vertical scrollbar was introduced, text alignment breaks in Windows Console Host / Terminal. 5 👍, 2 comments. User unable to disable scrollbar.

5. **[#3502 – Chinese Zhuyin IME preedit text stuck in lower-right corner on macOS](https://github.com/github/copilot-cli/issues/3502)**
   macOS built-in Zhuyin input method renders composition text away from the cursor, accumulating in the terminal’s lower-right. 25 👍 (highest today). 2 comments.

6. **[#3496 – Copy/Paste broken for single-line Timeline selections on Windows](https://github.com/github/copilot-cli/issues/3496)**
   Starting ~v1.0.50, selecting and copying a single line from the Timeline fails. Multi-line selection works. 2 👍.

7. **[#3507 – `COPILOT_CUSTOM_INSTRUCTIONS_DIRS` only half-honored (v1.0.54)](https://github.com/github/copilot-cli/issues/3507)**
   The env var works for `AGENTS.md` and `.github/instructions/` but not for `CLAUDE.md`, `GEMINI.md`, or `.github/copilot-instructions.md`. Windows/PowerShell. 0 comments but clearly a regression.

8. **[#3508 – Extension lifecycle hooks receive empty `workingDirectory` since v1.0.51](https://github.com/github/copilot-cli/issues/3508)**
   Hooks like `onSessionStart` now get `""` instead of the real working directory. Breaking plugin developers. Reported today, 0 comments.

9. **[#3497 – Terminal output clipped after resize/reflow; hidden text unreachable via scrollbar](https://github.com/github/copilot-cli/issues/3497)**
   Long responses not fully visible after terminal resize; missing text cannot be scrolled to. 6 👍.

10. **[#3500 – Steering messages disappear when pending](https://github.com/github/copilot-cli/issues/3500)**
   User reports steering confirmation is invisible until after a long delay, causing confusion. 0 comments.

## Key PR Progress
No pull requests were merged or updated in the last 24 hours.

## Feature Request Clusters

- **Multiple agent / skill source directories** – Users want `COPILOT_AGENTS_DIRS` and `COPILOT_CUSTOM_INSTRUCTIONS_DIRS` to work consistently and include all file types (#3505, #3507, #812). Admins managing agents from multiple repositories find manual copying error-prone.

- **Built-in `/create-*` commands for agents, skills, hooks** – Inspired by VS Code’s scaffolding, users request quick creation of skill/agent/hook files directly inside the CLI (#3503).

- **Plugin-declared tool requirements for sub-agents** – Custom agents invoked via the `task` tool lose their declared `tools:`, limiting sub-agent capabilities (#3506).

- **SKILL.md description length limit silent drop** – Skills with descriptions >1024 chars are silently ignored with no warning. Users request validation or explicit error (#3494).

## Developer Pain Points

- **Terminal rendering regressions** – Multiple reports of scrollbar causing misalignment (#3501), content clipping after resize (#3497), IME composition rendering offscreen (#3502), and steering messages not showing (#3500). These affect daily usability across Linux, macOS, and Windows.

- **Paste/copy issues** – GNOME Wayland paste regression (#3414), single-line Timeline copy failure (#3496), and general clipboard integration problems remain unresolved.

- **Platform-specific breakage** – Android/Termux users are blocked (#3333), and `PS0`/`PROMPT_COMMAND` hangs were fixed in v1.0.53 but the history truncation (#2317) persists.

- **Plugin and extension developer friction** – Lifecycle hooks receiving empty `workingDirectory` (#3508) and `--config-dir` being ignored by `/skills` UI (partially fixed in v1.0.53 but still referenced in #2926) erode trust in the extension API.

- **MCP UI limitations** – `/mcp show` cannot scroll through all tools when a server exposes many (#3486), and authorization success messages are misleading for failed flows (#3269).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-25

## Today’s Update Brief

Today saw no new releases, but significant activity on the PR side with **7 pull requests** updated in the last 24 hours, led by a multi-PR series from @huntharo adding ACP permission mode switching and session history replay. One long-standing open issue on nested skill directory loading remains active, with the reporter clarifying the mismatch between Kimi and Codex behavior.

## Releases

No new releases in the last 24 hours.

## Hot Issues

### #1894 [OPEN] Kimi CLI cannot recursively load nested skill directories (e.g., `.agents/skills/{name}/skills/xxx`) — Codex compatible, Kimi not
- **Author:** [@retamia](https://github.com/retamia)
- **Created:** 2026-04-15 | **Updated:** 2026-05-25 | **Comments:** 4 | **👍:** 0
- **URL:** https://github.com/MoonshotAI/kimi-cli/issues/1894
- **Affected workflow:** Users who structure skills in nested directories (e.g., `.agents/skills/cloudlive/skills/cloudlive-project-layout`) find that `kimi` cannot discover these skills while `codex` can, causing skill portability issues between the two tools.
- **Impact:** Breaks compatibility for multi-level agent skill organizations, forcing users to flatten skill directories or maintain separate configurations for Kimi vs. Codex.
- **Community reaction:** No direct maintainer response yet; the issue remains open for over a month with 4 comments, indicating continued user interest but no confirmed fix timeline.

## Key PR Progress

### #2359 [OPEN] fix(acp): assign message IDs to streamed content
- **Author:** [@huntharo](https://github.com/huntharo)
- **Created:** 2026-05-24 | **Updated:** 2026-05-24
- **URL:** https://github.com/MoonshotAI/kimi-cli/pull/2359
- **Summary:** Enables Kimi support for PwrAgent via ACP (Agent Communication Protocol). Adds ACP SDK 0.10.0 support, streamed content messageId values, and terminal auth login invocation.
- **Significance:** First of three stacked PRs from the same author, laying the foundation for ACP interop.

### #2363 [OPEN] fix(acp): replay loaded session history
- **Author:** [@huntharo](https://github.com/huntharo)
- **Created:** 2026-05-24 | **Updated:** 2026-05-24
- **URL:** https://github.com/MoonshotAI/kimi-cli/pull/2363
- **Summary:** Builds on #2359: makes ACP `session/load` replay restored history when loading a session.
- **Significance:** Completes the session continuity feature for ACP-based integrations.

### #2364 [OPEN] feat(acp): support permission mode switching
- **Author:** [@huntharo](https://github.com/huntharo)
- **Created:** 2026-05-24 | **Updated:** 2026-05-24
- **URL:** https://github.com/MoonshotAI/kimi-cli/pull/2364
- **Summary:** Adds protocol-level ACP permission mode switching for Kimi sessions, advertising `default` and `accept_all` modes.
- **Significance:** Resolves issue #1414 (permission mode support), enabling configurable approval workflows over ACP.

### #2362 [OPEN] fix: retain the original line break style of the file and fix cross-platform CRLF/LF issues
- **Author:** [@Sisyphbaous-DT-Project](https://github.com/Sisyphbaous-DT-Project)
- **Created:** 2026-05-24 | **Updated:** 2026-05-24
- **URL:** https://github.com/MoonshotAI/kimi-cli/pull/2362
- **Summary:** Fixes `StrReplaceFile` and `WriteFile` tools corrupting original newline styles by converting `\r\n` to `\n`. Root cause: `readtext()` using universal newlines mode by default.
- **Significance:** Resolves issues #1952 and #2191 — a common pain point for Windows and mixed-OS teams.

### #2361 [OPEN] [codex] docs: clarify hooks notification example
- **Author:** [@Randy-sin](https://github.com/Randy-sin)
- **Created:** 2026-05-24 | **Updated:** 2026-05-24
- **URL:** https://github.com/MoonshotAI/kimi-cli/pull/2361
- **Summary:** Replaces the non-functional `Notification` hook example that used `permission_prompt`, documents that `Notification` matchers use notification types not sink names, and clarifies approval requests are not currently emitted as `Notification` hook events.

### #2335 [OPEN] docs: fix Notification hook matcher example
- **Author:** [@he-yufeng](https://github.com/he-yufeng)
- **Created:** 2026-05-20 | **Updated:** 2026-05-24
- **URL:** https://github.com/MoonshotAI/kimi-cli/pull/2335
- **Summary:** Replaces broken `permission_prompt` Notification hook example with real background-task notification types. Also corrects Notification matcher wording in both English and Chinese hook docs, and updates the hook config roundtrip fixture.

### #2358 [OPEN] fix(build): correct module-name type in pyproject.toml files
- **Author:** [@60ke](https://github.com/60ke)
- **Created:** 2026-05-24 | **Updated:** 2026-05-24
- **URL:** https://github.com/MoonshotAI/kimi-cli/pull/2358
- **Summary:** Fixes a regression where `module-name` in `[tool.uv.build-backend]` should use string syntax for single-module packages. Restores a fix from commit `b75c9973` (2025-11-17) that was lost in a subsequent configuration change.

## Feature Request Clusters

**Skills / Agent Directory Structure**
- Recursive loading of nested skill directories (`.agents/skills/{name}/skills/`) — issue #1894 remains open with no maintainer response, indicating a gap in skill discovery logic.

**ACP / Protocol Interoperability**
- Multiple PRs today ( #2359, #2363, #2364 ) all from the same author, adding ACP permission mode switching, session replay, and message ID assignment. This cluster points to growing external demand for Kimi to act as a drop-in replacement within Codex-compatible agent ecosystems.

## Developer Pain Points

**Cross-Platform File Editing (#2362)**
- The `StrReplaceFile` and `WriteFile` tools silently convert CRLF (`\r\n`) to LF (`\n`), breaking files for Windows users. This has been reported in issues #1952 and #2191, and today’s PR directly addresses both.

**Build Configuration Regressions (#2358)**
- A previously fixed `pyproject.toml` module-name type issue regressed, requiring re-patching. While minor, this signals that build configuration changes can silently break packaging for contributors using `uv`.

**Documentation Accuracy ( #2361, #2335 )**
- Multiple docs PRs today fix the same problematic `permission_prompt` Notification hook example, suggesting the existing documentation misled users trying to configure hooks — a friction point for onboarding and customization.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-25

## Today’s Update Brief
No new releases were published in the last 24 hours. Community activity remains high with 50 issues and 50 PRs updated, dominated by bug reports around tool calling, model performance, and plugin breakage. A handful of feature requests and one critical billing/workflow issue also surfaced.

## Releases
None.

## Hot Issues

1. **[#20650 – Kimi k2.5 tool calling JSON parsing error](https://github.com/anomalyco/opencode/issues/20650)**
   *48 comments* – Model attempts to call `bash` with malformed JSON, then tries unavailable tool `'invalid'`. Affects workflow reliability with this model. Community active, no maintainer resolution yet.

2. **[#15585 – Free usage limit exceeded for free models](https://github.com/anomalyco/opencode/issues/15585)**
   *36 comments* – User reports all three free models show “free usage exceed” despite documentation implying no limit. Sparks confusion about actual free tier policy. 10 👍.

3. **[#29079 – GPT models take too long to respond](https://github.com/anomalyco/opencode/issues/29079)**
   *28 comments* – Intermittent latency from seconds to minutes for simple prompts. Impacts productivity, user disabled context to test. 11 👍.

4. **[#21032 – oh-my-openagent plugin breaks on v1.3.14](https://github.com/anomalyco/opencode/issues/21032)**
   *25 comments* – Plugin loads but registers nothing after upgrade. Rolling back to 1.3.13 restores functionality. Regression suspected in plugin registration flow.

5. **[#28480 – OpenCode not starting on Windows 11](https://github.com/anomalyco/opencode/issues/28480)**
   *9 comments* – No error, no crash report after fresh install worked previously. Affects new users. Latest version.

6. **[#11898 – Feature: configurable newline/submit keybinds in TUI/GUI](https://github.com/anomalyco/opencode/issues/11898)**
   *9 comments* – Request to use `Enter` for newline and `Ctrl+Enter` to send. Long-standing request referencing older issues.

7. **[#28846 – Adjust Go usage limits after DeepSeek V4 Pro price reduction](https://github.com/anomalyco/opencode/issues/28846)**
   *9 comments* – DeepSeek V4 Pro API pricing permanently reduced by 75%. User advocates passing savings to subscribers. 10 👍.

8. **[#28035 – Sticky last prompt text on top of screen](https://github.com/anomalyco/opencode/issues/28035)**
   *7 comments* – Users want the last prompt visible while scrolling through session history. A prototype PR (#29086) now exists.

9. **[#6156 – Config file location confusion](https://github.com/anomalyco/opencode/issues/6156) *(CLOSED)***
   *6 comments* –  `opencode` itself gives inconsistent answers about its config path. Closed but indicates documentation gap.

10. **[#29118 – `todowrite` tool not registered in v1.15.10](https://github.com/anomalyco/opencode/issues/29118)**
    *4 comments* – Tool listed as “environment-managed” but missing from tool list. Breaks sidebar Todo panel. New report today.

## Key PR Progress

1. **[#27231 – feat: add edit button for connected providers](https://github.com/anomalyco/opencode/pull/27231)**
   Implements #20598. Allows editing provider configurations after initial setup.

2. **[#29150 – fix: break auto-compact loop when compaction makes no progress](https://github.com/anomalyco/opencode/pull/29150)**
   Fixes #28543. Prevents infinite loop when model’s context limit is smaller than provider’s actual limit.

3. **[#28342 – fix: rename bin entry to .cjs for ESM compatibility](https://github.com/anomalyco/opencode/pull/28342)**
   Closes #28343. Resolves `ReferenceError: require is not defined` in Node.js ESM mode.

4. **[#12594 – fix: re-enable TodoReadTool with shared rendering logic](https://github.com/anomalyco/opencode/pull/12594)**
   Re-enables `TodoReadTool` disabled in CLI refactor. Long-standing fix for #12680, still open for review.

5. **[#28788 – beta: improve desktop v2 startup and controls](https://github.com/anomalyco/opencode/pull/28788)**
   Refines desktop v2 UI, adds project/branch selection for new sessions, and branch-aware worktree API.

6. **[#29109 – fix: preserve time_updated on project_id migration](https://github.com/anomalyco/opencode/pull/29109)**
   Fixes #25392. Two bulk `UPDATE` statements were dropping `time_updated` column, corrupting session ordering.

7. **[#29156 – fix: sanitize malformed tool names in pending parts](https://github.com/anomalyco/opencode/pull/29156)**
   Fixes #28989. Race condition in tool-call ingestion could produce empty tool names leading to UI render errors.

8. **[#29025 – fix: preserve native provider options](https://github.com/anomalyco/opencode/pull/29025)**
   Ensures OpenAI-compatible reasoning continuation fields are passed through to native request lowering.

9. **[#29086 – feat: prototype sticky prompt header](https://github.com/anomalyco/opencode/pull/29086)**
   Draft TUI feature (refs #28035) keeps the last user prompt visible above scroll area.

10. **[#29068 – refactor: move database schema ownership to core](https://github.com/anomalyco/opencode/pull/29068)**
    Transfers Drizzle schema and migrations from `opencode` package to `core`, preparing for package decoupling.

## Feature Request Clusters

- **Keybinding & Input Customization**
  Requests for configurable newline/submit keybinds (#11898), fixing `prompt_skills` keybind (#29148), and voice-to-text input plugin (#29136) signal demand for more flexible prompt interactions.

- **Todo Tool Restoration & Consistency**
  Multiple reports about missing `todowrite` (#29118, #12938) and removed `TodoReadTool` (#12680) indicate the sidebar Todo feature is broken for many users, especially subagents.

- **Plugin & MCP Stability**
  Issues with `oh-my-openagent` breakage across versions (#21032), GitLab Duo model routing (#28970), and Google Drive MCP OAuth failure (#26195) point to integration fragility.

- **Remote & Mobile Workflows**
  Feature asks for Android phone control (#29121) and SSH remote file editing (#29152) show interest in mobile/cloud development use cases.

- **Pricing & Billing Transparency**
  Free tier confusion (#15585), Go subscription migration failures (#29141, #29135), and requests to adjust usage limits after price drops (#28846) highlight pain points in the monetization model.

## Developer Pain Points

- **Tool calling bugs** continue to plague multiple models (Kimi, DeepSeek, Nvidia NIM) causing JSON parsing errors, reasoning hang-ups, and malformed tool names.
- **Plugin breakage across minor version bumps** (e.g., oh-my-openagent on 1.3.13 → 1.3.14) erodes trust in backward compatibility.
- **Performance unpredictability** – GPT models occasionally freeze in “working” state with high CPU (#29129), forcing manual restarts.
- **Startup and crash issues** on Windows (#28480) and renderer crashes when opening specific sessions (#29149) block new and returning users.
- **Subscription migration friction** – multiple users report paying for OpenCode Go but remaining locked on free tier, indicating a billing/activation bug that needs urgent fix.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-25

## Today's Update Brief

Today’s activity centers on **v0.16-alpha scope freeze readiness** with a coordinated F5 release chain of documentation and integration PRs, alongside fixes in telemetry, CLI behavior, and build reliability. Nine issues and 25 PRs were updated, reflecting sustained momentum in daemon-mode maturity and cross-client real-time sync.

## Releases

- **v0.16.1-nightly.20260525.84f408017** ([Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.16.1-nightly.20260525.84f408017))
  A nightly release. One fix: `fix(build): clean stale outputs before tsc --build to prevent TS5055` by [@doudouOUC](https://github.com/doudouOUC) in [#4453](https://github.com/QwenLM/qwen-code/pull/4453). This resolves a build regression where leftover artifacts from previous compilations caused TypeScript errors.

## Hot Issues

1. **[#4175] proposal(serve): Mode B feature-priority roadmap toward v0.16 production-ready** ([Issue](https://github.com/QwenLM/qwen-code/issues/4175))
   Author: [@doudouOUC](https://github.com/doudouOUC) | Comments: 38
   This is the **flagship roadmap issue** for the daemon `Mode B` (`qwen serve`). Stage 1 daemon and `1 daemon = 1 workspace` are merged; remaining work targets text-only chat/coding with local-only deployment. The F5 release chain PRs (see Key PR Progress) are executing directly against this scope freeze plan. High community engagement suggests strong interest in production readiness.

2. **[#4276] oom-crash** ([Issue](https://github.com/QwenLM/qwen-code/issues/4276))
   Author: [@htstcsn](https://github.com/htstcsn) | Comments: 8
   User reports an out-of-memory crash with Scavenge GC log showing 4GB+ heap pressure. No maintainer resolution yet; labeled `needs-triage`. Affects users running memory-intensive sessions.

3. **[#4421] feat(diagnostics): local-first diagnosis framework — ring buffer + diagnostic ID + /bug collect bundle** ([Issue](https://github.com/QwenLM/qwen-code/issues/4421))
   Author: [@yiliang114](https://github.com/yiliang114) | Comments: 3
   Proposes a ring buffer that records recent API/SSE failures locally, then exposes a `/bug` command to collect and bundle diagnostic data without automatic upload. Aimed at users who cannot reproduce issues or fear leaking sensitive data. Receiving positive discussion.

4. **[#4479] Feature request: daily token consumption statistics** ([Issue](https://github.com/QwenLM/qwen-code/issues/4479))
   Author: [@xiaopang927423](https://github.com/xiaopang927423) | Comments: 2
   User reports a single session consumed 30 million tokens and wants a daily usage summary. This mirrors broader demand for telemetry transparency.

5. **[#4257] Prevent system suspension when working** ([Issue](https://github.com/QwenLM/qwen-code/issues/4257))
   Author: [@fantasyz](https://github.com/fantasyz) | Comments: 1
   User left a task running overnight, PC went to sleep, and work resumed only after login. Requests a power-management inhibitor. Relevant for Linux users running long-running agent tasks.

6. **[#4481] Model responds in English despite request to rewrite in English only** ([Issue](https://github.com/QwenLM/qwen-code/issues/4481))
   Author: [@mahmoudahmed-bi](https://github.com/mahmoudahmed-bi) | Comments: 1
   User asks the model to always respond in English; model repeats the same unchanged mixed-language output. Could indicate a system prompt or instruction-following issue.

7. **[#4475] Track AUTO mode telemetry and classifier parity** ([Issue](https://github.com/QwenLM/qwen-code/issues/4475))
   Author: [@qqqys](https://github.com/qqqys) | Comments: 1
   Follow-up on recent AUTO mode safety alignment. Covers need for richer telemetry (reason separation, PermissionDenied hooks, cumulative denial caps) for fleet-level monitoring.

8. **[#4488] Qwen Code plugin (v0.16.0) not visible in VS Code sidebar** ([Issue](https://github.com/QwenLM/qwen-code/issues/4488))
   Author: [@timilan123](https://github.com/timilan123) | Comments: 0
   User reports the extension flickers and disappears on VS Code 1.120.0 (works on 1.95.3). Possible compatibility regression.

9. **[#4486] bug(telemetry): qwen-code.interaction span has wrong trace id** ([Issue](https://github.com/QwenLM/qwen-code/issues/4486))
   Author: [@doudouOUC](https://github.com/doudouOUC) | Comments: 0
   `startInteractionSpan` creates the span without the session root context, causing OTel to assign a fresh random trace ID. The interaction span ends up in its own orphan trace, breaking trace-tree navigation.

## Key PR Progress

1. **[#4484] feat(acp-bridge): cross-client real-time sync completeness (5 fixes)** ([PR](https://github.com/QwenLM/qwen-code/pull/4484))
   Author: [@chiga0](https://github.com/chiga0)
   An audit of `daemon_mode_b_main` found 8 gaps where one client's actions didn't propagate to other SSE clients. This PR closes 5 bridge-layer fixes including `user_message_chunk` echo. Essential for multi-client daemon sessions.

2. **[#4402] feat(core): stream-driven tool dispatch — Phase 1 + Phase 2** ([PR](https://github.com/QwenLM/qwen-code/pull/4402))
   Author: [@BZ-D](https://github.com/BZ-D)
   Implements a "completed tool-call" signal during OpenAI-style streaming, enabling tool results to arrive before the stream ends. Bundles both phases because Phase 2 has no behavior without Phase 1's timing signal.

3. **[#4487] fix(cli): require whitespace before @ to trigger file completion** ([PR](https://github.com/QwenLM/qwen-code/pull/4487))
   Author: [@wenshao](https://github.com/wenshao)
   Inputs like `cici@192.168.0.160` incorrectly triggered `@`-file-completion mode, causing Enter to be consumed by the suggestion handler. Now requires whitespace before `@`.

4. **[#4478] fix(auth): align Token Plan model defaults with ModelStudio** ([PR](https://github.com/QwenLM/qwen-code/pull/4478))
   Author: [@YingchaoX](https://github.com/YingchaoX)
   Updates built-in chat model defaults to match ModelStudio's expanded catalog, keeping CLI and VS Code companions in sync.

5. **[#4477] feat(cli): dense inline panel for parallel agent fan-out display** ([PR](https://github.com/QwenLM/qwen-code/pull/4477))
   Author: [@wenshao](https://github.com/wenshao)
   Commands like `/review` fan out into 9 parallel agents. Old UI collapsed all status into one line; new inline panel shows per-agent progress without expanding vertically.

6. **[#4476] Add AUTO mode denial observability and caps** ([PR](https://github.com/QwenLM/qwen-code/pull/4476))
   Author: [@qqqys](https://github.com/qqqys)
   Adds structured reason boundaries, a PermissionDenied hook for classifier-blocked calls, and a cumulative denial cap alongside existing consecutive caps.

7. **[#4483] docs(deploy): local launch templates for v0.16-alpha** ([PR](https://github.com/QwenLM/qwen-code/pull/4483))
   Author: [@doudouOUC](https://github.com/doudouOUC)
   Third PR in the F5 release chain. Adds deploy/launch templates for the v0.16-alpha text-only chat/coding target, following the scope freeze in #4175.

8. **[#4482] fix(telemetry): improve LogToSpan bridge error info and TUI handling** ([PR](https://github.com/QwenLM/qwen-code/pull/4482))
   Author: [@doudouOUC](https://github.com/doudouOUC)
   Two fixes for the LogToSpanProcessor bridge: useful error messages (previously showed empty `code=1 error=`) and correct TUI log output when the OTLP backend does not support logs.

9. **[#4332] fix(cli): keep /model switches session-scoped** ([PR](https://github.com/QwenLM/qwen-code/pull/4332))
   Author: [@qqqys](https://github.com/qqqys)
   `/model <model-id>` and model dialog selections now only switch the current session model, not write to settings. Adds `/model --default` for explicit persistent changes.

10. **[#4485] chore(deps): update @google/genai from 1.30.0 to 2.6.0** ([PR](https://github.com/QwenLM/qwen-code/pull/4485))
    Author: [@InfiniteUselessness](https://github.com/InfiniteUselessness)
    Updates the Google Gemini SDK dependency. Breaking changes summarized and validated; test suite passes.

## Feature Request Clusters

- **Observability and Telemetry Transparency**
  Multiple requests surfaced around better instrumentation: daily token consumption stats ([#4479](https://github.com/QwenLM/qwen-code/issues/4479)), local-first diagnostic ring buffers ([#4421](https://github.com/QwenLM/qwen-code/issues/4421)), and richer AUTO mode telemetry for classifier metadata and denial caps ([#4475](https://github.com/QwenLM/qwen-code/issues/4475), [#4476](https://github.com/QwenLM/qwen-code/pull/4476)). This cluster indicates users want **actionable, user-facing observability** rather than just backend tracing.

- **AUTO Mode Safety and Governability**
  Follow-up work from recent safety alignment adds reason separation, PermissionDenied hooks, and cumulative denial caps ([#4475](https://github.com/QwenLM/qwen-code/issues/4475), [#4476](https://github.com/QwenLM/qwen-code/pull/4476)). This aligns with broader platform goals around fleet-level safety monitoring.

## Developer Pain Points

- **Memory OOM Crashes** ([#4276](https://github.com/QwenLM/qwen-code/issues/4276)): A user hit a 4GB+ heap crash with no maintainer resolution yet. High priority due to impact on long-running sessions.
- **Response Stability** ([#4481](https://github.com/QwenLM/qwen-code/issues/4481)): Model repeating same output despite explicit instruction to change language, suggesting a feedback-loop or prompt-injection edge case.
- **Token Consumption Transparency** ([#4479](https://github.com/QwenLM/qwen-code/issues/4479)): Users want clear daily usage stats to avoid surprise high consumption.
- **System Sleep During Background Tasks** ([#4257](https://github.com/QwenLM/qwen-code/issues/4257)): Lack of power-management inhibitor on Linux breaks unattended agent workflows.
- **VS Code Compatibility** ([#4488](https://github.com/QwenLM/qwen-code/issues/4488)): Extension flickers on newer VS Code versions; may be a UI framework regression.

</details>