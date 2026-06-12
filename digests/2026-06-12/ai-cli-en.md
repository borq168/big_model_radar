# AI CLI Tools Community Digest 2026-06-12

> Generated: 2026-06-12 02:42 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report — 2026-06-12

## 1. Daily Cross-Tool Overview

Today saw widely varying activity across the tracked AI CLI tools. Claude Code shipped two patch releases (v2.1.173, v2.1.174) with minor fixes but faces a surge of issues around false-positive content policy flagging, MCP server instability, and sandbox/VM failures on ARM64 and macOS. OpenAI Codex published five alpha Rust crate releases with minimal documentation while the community remains highly engaged on phone verification friction and encrypted tool-use fragility. GitHub Copilot CLI had no release but saw 14 new issues documenting v1.0.61 regressions in terminal rendering and keyboard input — its most critical bugs in months. OpenCode shipped v1.17.4 with workspace-relative MCP and improved authentication, while Windows compatibility fixes dominated its PR pipeline. Qwen Code released v0.18.0-preview.2 and advanced background job persistence and concurrent agent execution. Kimi Code had negligible activity, with only a single closed PR.

## 2. Activity Comparison

| Tool | Issues (updated today) | PRs (updated today) | Release (last 24h) |
|---|---|---|---|
| **Claude Code** | ~30+ filed | ~10 active | v2.1.173, v2.1.174 |
| **OpenAI Codex** | ~50 updated | ~50 updated | rust-v0.140.0-alpha.8–.13 (5 releases) |
| **Gemini CLI** | — | — | — (summary unavailable) |
| **GitHub Copilot CLI** | 14 new | 1 (scaffold, minor) | None |
| **Kimi Code CLI** | 0 | 1 (closed) | None |
| **OpenCode** | ~50+ updated | ~10 active | v1.17.4 |
| **Qwen Code** | ~19 active | ~50 updated | v0.18.0-preview.2 |

Codex had the highest raw issue/PR churn (50+ each). Claude Code had the most new filings. Copilot CLI had the most concentrated spike in regressions. Kimi Code was near-dormant.

## 3. Shared Feature Directions

**Session management and context visibility** appears across three tools:
- **Claude Code** – Multi-window desktop support (#30154, most-upvoted open request), usage-limit hooks (#67754)
- **OpenAI Codex** – Dynamic `AGENTS.md` loading (#12115, 67👍), multi-repo workspace (#11956, 30👍), archived chat visibility (#27207)
- **OpenCode** – Native `/goal` command (#27167, 71👍), context breakdown TUI (#6152, 108👍 — most-upvoted feature)

**Content policy and authentication friction** is a shared pain point:
- **Claude Code** – 8+ issues today on false-positive blocking (3D graphics, security auditing, procedural animation) forcing model downgrades
- **OpenAI Codex** – Phone verification on SSO (#20161, 196 comments, most active issue)
- **GitHub Copilot CLI** – Session token expiry mid-session (#3763), model switching auth errors (#3758)

**Agentic reliability concerns** appear across tools:
- **Claude Code** – Hallucinated subagent results with zero tool calls (#67730)
- **OpenAI Codex** – Encrypted tool-use pipeline failures (#26753, #27205)
- **GitHub Copilot CLI** – Duplicated/truncated output in reasoning display (#3755), output thread corruption (#3769)

**Windows compatibility** is a persistent cross-tool struggle today:
- **Claude Code** – Scroll regression on WSL (#65833), case-sensitive config drops (#67749), ARM64 Cowork failure (#39636)
- **OpenAI Codex** – Excessive Git processes after update (#22085), startup hangs (#23207)
- **GitHub Copilot CLI** – WSL2 ARM64 clipboard broken (#3534)
- **OpenCode** – Multiple PRs active (#29281, #31946, #31980, #31925) targeting terminal encoding, process exit crashes, and PowerShell output
- **Qwen Code** – `/copy` fails on headless Linux (#4926)

## 4. Differentiation Analysis

**Claude Code** remains the most enterprise-oriented tool, with MCP server support, sandboxed execution (Cowork), and sophisticated model routing — but today's data shows these features introduce significant brittleness (SIGTERM kills, DNS failures, false-positive policy triggers). Its content filtering is the most aggressive and most complained-about today.

**OpenAI Codex** is undergoing substantial internal refactoring: code-mode decoupling into a separate IPC process (PR #27727, 4-phase stack), Guardrail latency reduction, and encrypted tool pipeline hardening. Its community is more focused on authentication UX and OS-level compatibility than Claude Code's feature-ceiling issues.

**GitHub Copilot CLI** has the narrowest feature surface and the smallest maintainer response rate (one minimal PR today). The v1.0.61 regressions are severe — terminal rendering corruption and keyboard input breakage — and without a hotfix release. The tool appears to be in a maintenance phase with low engineering velocity.

**OpenCode** is investing heavily in Windows compatibility (5 PRs focused on terminal, encoding, and process issues) and connector-based authentication. Its feature requests lean toward session lifecycle and context transparency rather than multi-agent orchestration.

**Qwen Code** is pushing hardest on background/persistent workflows: durable cron jobs (`/loop` surviving restarts, PR #5004), concurrent agent execution (parallel/pipeline, PR #4947), and MCP/hooks parity with Claude Code (PR #4996). Its preview releases and nightly build cadence suggest rapid iteration.

**Kimi Code CLI** is effectively idle today — no issues, no releases, minimal community engagement.

## 5. Community Activity Notes

**Highest issue churn:** OpenAI Codex and OpenCode tied (~50 issues updated each), driven by broad topic coverage and active community discussion (e.g., phone verification at 196 comments).

**Most new issues filed:** Claude Code (~30+), with a sharp spike in content-policy complaints. Copilot CLI filed 14 — high for a tool with lower overall volume.

**Most release activity:** OpenAI Codex (5 alpha releases) and Claude Code (2 patch releases). OpenCode and Qwen Code each had one release.

**Lowest activity:** Kimi Code (zero issues, one closed PR). Gemini CLI data was unavailable.

**Maintainer responsiveness:** Claude Code merged two fixes and several community PRs (ralph-wiggum, flappy-claude game). OpenCode accepted multiple Windows-focused PRs. Copilot CLI had no maintainer activity on open issues or PRs. Qwen Code's PR review cadence appears moderate; Codex's is high but many PRs remain in review.

## 6. Evidence-Backed Observations

1. **Session and workspace management is the most consistently requested feature across tools.** Claude Code's #30154 (multi-window, 168👍), Codex's #11956 (multi-repo, 30👍) and #12115 (dynamic AGENTS.md, 67👍), and OpenCode's #27167 (/goal, 71👍) and #6152 (context breakdown, 108👍) all address users wanting better control over session state, objectives, and visibility. This cuts across both CLI and desktop use cases.

2. **Windows stability remains a systemic weakness for every tool.** No tool today ships without Windows-specific reports of encoding corruption, terminal breakage, clipboard failures, process crashes, or sandbox incompatibility. OpenCode is the only tool with multiple active PRs targeting these issues (#29281, #31946, #31980, #31925), suggesting others treat Windows as lower priority.

3. **Content policy enforcement is causing user trust erosion for Claude Code in particular.** With 8+ identical complaints filed in a single day about false-positive flagging on legitimate development topics (3D modeling, security, animation), and a PR claiming automated fix via REAPR tool (#67599), this is the most acute single pain point in today's data. No other tool reports content-blocking issues at this scale.

4. **Agent hallucination and reliability are now being reported with specific diagnostics across multiple tools.** Claude Code's #67730 (subagents returning confident false results with zero tool calls, leaked XML evidence), Copilot CLI's rendering corruptions (#3755, #3749, #3769), and Codex's encrypted tool pipeline failures (#26753, #27205) each provide reproducible symptoms rather than vague complaints. This indicates the community is moving from questioning "does it work" to diagnosing "how it fails."

5. **MCP/server integration is maturing but introducing new failure modes.** Claude Code has SIGTERM kills (#40207), DNS failures (#67739), case-sensitive config drops (#67749). Codex has MCP handshake failures (#6020). Copilot CLI has blocked MCP under enterprise policies (#2282). Qwen Code is actively adding MCP parity with Claude Code (#4996). The ecosystem is converging on MCP as a standard, but the implementations are still fragile.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-06-12

## Today's Update Brief

Two patch releases landed today (v2.1.173, v2.1.174) fixing mouse-wheel scroll acceleration in fullscreen mode, a model picker UI bug, Fable 5 name normalization, and a spurious sandbox warning on Windows. The issue tracker saw a surge of new reports — 30+ filed in the last 24 hours — dominated by false-positive model-switch triggers, DNS failures in Cowork sandboxes, and a continued flood of complaints about benign content being flagged by the usage policy.

## Releases

**v2.1.174** — [Changelog](https://github.com/anthropics/claude-code/releases/tag/v2.1.174)
- Added `wheelScrollAccelerationEnabled` setting to disable mouse-wheel scroll acceleration in fullscreen mode.
- Fixed the `/model` picker hiding the model family that Default resolves to — Opus now appears as its own row on Max/Team Premium/Enterprise plans, Sonnet on Pro/Team.

**v2.1.173** — [Changelog](https://github.com/anthropics/claude-code/releases/tag/v2.1.173)
- Fixed Fable 5 model names with a `[1m]` suffix not being normalized — the suffix is now stripped automatically.
- Fixed a spurious "sandbox dependencies missing" startup warning on Windows when sandbox was enabled in settings.

## Hot Issues (Top 10)

1. **Multi-window support in Claude Code Desktop** — [#30154](https://github.com/anthropics/claude-code/issues/30154)
   *Opened Mar 2, updated today, 57 comments, 168 👍*
   The most upvoted open feature request. Desktop remains single-window; users want to view multiple sessions side-by-side. No maintainer response yet.

2. **Cowork VM fails to boot on Snapdragon X Plus (ARM64)** — [#39636](https://github.com/anthropics/claude-code/issues/39636)
   *Opened Mar 27, updated today, 27 comments*
   Windows ARM64 users cannot use Cowork — the guest kernel never boots. Connection timeout on every attempt. Has reproduction steps.

3. **Scroll wheel no longer scrolls conversation (v2.1.150 regression on WSL)** — [#65833](https://github.com/anthropics/claude-code/issues/65833)
   *Opened Jun 6, updated today, 14 comments, 16 👍*
   Mouse scroll now sends arrow keys instead of scrolling. Affected after upgrade. User frustration is mounting.

4. **Claude Code sends SIGTERM to all healthy stdio MCP servers after 10-60s** — [#40207](https://github.com/anthropics/claude-code/issues/40207)
   *Opened Mar 28, updated today, 10 comments*
   Well-documented root cause analysis with strace evidence. Servers are killed mid-session. High impact for MCP-heavy workflows.

5. **False-positive model-switch trigger on 3D graphics discussion** — [#67727](https://github.com/anthropics/claude-code/issues/67727)
   *Filed today*
   Benign discussion about MakeHuman/Blender/glTF export flagged as violating policy, forced downgrade from Fable 5 to Opus. Duplicate of several other reports today.

6. **Subagents return fully hallucinated results with zero tool calls** — [#67730](https://github.com/anthropics/claude-code/issues/67730)
   *Filed today, 2 comments*
   Parallel subagent execution produced complete, confident reports without any tool calls. Includes leaked tool-call XML in text. Serious reliability concern for agentic workflows.

7. **"Pull request status couldn't be checked" banner persistently appears** — [#61927](https://github.com/anthropics/claude-code/issues/61927)
   *Opened May 24, updated today, 5 comments, 7 👍*
   Red warning banner shown on every session in worktree branches without an associated PR. Cosmetic but distracting.

8. **Cowork sandbox VM fails on macOS 26 — missing entitlement** — [#66870](https://github.com/anthropics/claude-code/issues/66870)
   *Opened Jun 10, updated today, 1 comment*
   Code-signing entitlement missing, causing Cowork's Linux bash VM to not start. Cowork chat incorrectly blames remote server.

9. **Windows: case-sensitive `.claude.json` project-key lookup silently drops MCP servers** — [#67749](https://github.com/anthropics/claude-code/issues/67749)
   *Filed today*
   MCP configuration is lost across CLI/VS Code on Windows because of case-sensitive key matching. User notes this is a recurring bug that has been auto-closed before without fix.

10. **WebSearch tool broken: internal model `claude-haiku-4-5@20251001` not found** — [#67756](https://github.com/anthropics/claude-code/issues/67756)
    *Filed today, 0 comments*
    WebSearch fails on Windows with model not found error. Affects Opus 4.8 session; reports a hardcoded model reference that likely changed.

## Key PR Progress (Top 10)

1. **fix(ralph-wiggum): case-insensitive completion promise matching** [#67753](https://github.com/anthropics/claude-code/pull/67753)
   *Opened today*
   Normalizes whitespace and case when matching completion promises. Uses portable `tr` instead of bash-specific `,,`. Improves reliability for promise-based workflows.

2. **fix(#67557): false positive cybersecurity flag on legitimate content-moderation discussion** [#67599](https://github.com/anthropics/claude-code/pull/67599)
   *Opened Jun 11*
   Automated fix (via REAPR tool) addressing the false-positive policy flagging. Unclear if maintainers will merge.

3. **fix: correct state file path in ralph-wiggum help.md** [#61956](https://github.com/anthropics/claude-code/pull/61956)
   *Merged today (closed)*
   Fixes path mismatch between documentation and actual setup scripts. Small but important for plugin users.

4. **feat(plugins): add flappy-claude terminal game** [#50301](https://github.com/anthropics/claude-code/pull/50301)
   *Closed (merged) today*
   Adds a `/flappy-claude` slash command — pure Python terminal game. Community plugin contribution.

5. **Proposal: inline image rendering in the terminal UI** [#54551](https://github.com/anthropics/claude-code/pull/54551)
   *Closed today*
   Feature proposal only (README), but discussion may influence future TUI support.

6. **examples: add PermissionDenied hook example with retry and audit logging** [#41695](https://github.com/anthropics/claude-code/pull/41695)
   *Closed today*
   Documentation example for the `PermissionDenied` hook, previously undocumented. Helpful for MCP/hooks developers.

7. **\[baobao\] Fixes for billing error and autonomous script execution** [#67409](https://github.com/anthropics/claude-code/pull/67409), [#67699](https://github.com/anthropics/claude-code/pull/67699), [#67697](https://github.com/anthropics/claude-code/pull/67697)
   *All opened Jun 11–12*
   Multiple PRs from the same author claiming automated fixes via NVIDIA AI, each with a bounty. Seem spammy; likely not maintainer-reviewed.

8. **updated example file** [#64489](https://github.com/anthropics/claude-code/pull/64489)
   *Opened Jun 1, updated Jun 11*
   Minimal PR with vague summary. Low signal.

9. **\[BUG\] Claude autonomously ran background scripts calling a paid external** [#67722](https://github.com/anthropics/claude-code/pull/67722)
   *Opened today*
   Describes an alleged security incident where Claude executed scripts that called a paid API. PR content appears to be a workflow file rather than a fix. Needs investigation.

10. **\[baobao\] Account downgraded due to billing error** [#67409](https://github.com/anthropics/claude-code/pull/67409)
    *Opened Jun 11*
    Bounty $200, NVIDIA AI automated fix. Appears illegitimate.

## Feature Request Clusters

- **Multi-window / multi-session improvements**
  #30154 (multi-window desktop), #67755 (session title not propagating), #67754 (usage-limit hooks). Users want better session management, especially in the desktop app.

- **Sandbox/status visibility in statusline**
  #56843 asks for a sandbox mode field in statusline JSON. #67754 also requests usage-limit telemetry hooks. Developers want programmatic access to session state.

- **Hook system expansion**
  #67754 and #67748 both request usage-limit reporting hooks and graceful shutdown/resume hooks. Users want to integrate Claude Code into automated pipelines with better lifecycle control.

- **Content policy false-positive mitigation**
  About 8 issues filed today alone (e.g., #67732, #67738, #67727, #67751, #67757) report legitimate discussions being blocked or downgraded. Community is frustrated and asking for a review mechanism or opt-out for certain domains.

## Developer Pain Points

- **False-positive content blocking** is the single biggest pain point today. Multiple reports of benign software development topics (3D modeling, security auditing, procedural animation) triggering policy violations and model downgrades. Severity: high.
- **MCP server instability** — SIGTERM kills (#40207), case-sensitive config drops on Windows (#67749), and missing model for WebSearch (#67756). MCP ecosystem reliability is a major concern.
- **Cowork/sandbox VM issues** — ARM64 failure (#39636), macOS entitlement missing (#66870), DNS resolution failure (#67739). Cowork is nearly unusable on some platforms.
- **Scroll wheel regression** (#65833) persists without a hotfix. Affects WSL users significantly.
- **Agentic reliability** — hallucinated subagent results (#67730) and autonomous script execution (#67722) raise trust issues for multi-step tasks.
- **Billing / usage credits confusion** — #67578 (blocked on Pro plan), #67750 (gift subscription not applied), #67752 (rate limiting). Users report opaque credit consumption.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-12

## Today’s Update Brief
Five new alpha releases for the Rust crate were published (v0.140.0-alpha.8 through .13) with no detailed changelogs. The community remained highly active: 50 issues and 50 pull requests were updated in the last 24 hours, with the most heated discussion (196 comments) focusing on mandatory phone verification. Major engineering efforts are underway to refactor code‑mode into a standalone IPC process and to improve observability, caching, and cross‑environment context loading.

## Releases
Five **rust‑v0.140.0‑alpha** releases were tagged in the last 24 hours:
- `rust‑v0.140.0‑alpha.8` … `.13`
  Each release note simply states “Release 0.140.0‑alpha.X.” No changelog or summary is provided. These are likely incremental build/test iterations for the Codex Rust crate.

## Hot Issues (10 noteworthy)

1. **[#20161 – Phone number verification on SSO login [CLOSED]**](https://github.com/openai/codex/issues/20161)
   *196 comments, 121 👍*
   A user who logged in via SSO on a second device was forced to add a phone number. The issue was closed, but the high engagement signals strong user frustration with the auth flow.

2. **[#3567 – Undo does not work on Windows [CLOSED]**](https://github.com/openai/codex/issues/3567)
   *58 comments, 29 👍*
   In full agent mode, Codex makes changes to files that cannot be undone. This long‑running bug (filed Sep 2025) was only closed today.

3. **[#6020 – MCP client handshake failure [OPEN]**](https://github.com/openai/codex/issues/6020)
   *42 comments, 27 👍*
   All MCP servers fail to initialize with “connection closed: initialize response.” Affects CLI + GPT‑5. No maintainer resolution yet.

4. **[#20741 – Project chat histories disappeared after update [OPEN]**](https://github.com/openai/codex/issues/20741)
   *38 comments, 14 👍*
   Desktop app update wiped out all project chat histories. User on macOS Tahoe with M5 Max reports threads still on disk but invisible in UI.

5. **[#12115 – Dynamically loading nested AGENTS.md [OPEN, enhancement]**](https://github.com/openai/codex/issues/12115)
   *20 comments, 67 👍*
   Users want Codex CLI to load `AGENTS.md` files on demand (like Claude Code’s `CLAUDE.md`) instead of all at start. High upvote count.

6. **[#11956 – Multi‑repo support [OPEN, enhancement]**](https://github.com/openai/codex/issues/11956)
   *16 comments, 30 👍*
   A major reason teams stay on CLI – the desktop app cannot point at multiple directories, blocking cross‑service changes.

7. **[#26753 – MultiAgentV2 encrypted spawn_agent returns 400 [CLOSED]**](https://github.com/openai/codex/issues/26753)
   *15 comments, 4 👍*
   Enabling `features.multi_agent_v2` caused every turn to fail because the model’s tool schema was rejected. Closed after fix, but highlights fragility of the encrypted tool pipeline.

8. **[#22085 – Windows: Codex spawns many Git processes, high CPU [CLOSED]**](https://github.com/openai/codex/issues/22085)
   *12 comments, 17 👍*
   After a Windows update, Codex launched hundreds of `Git for Windows` processes, consuming CPU even when Git isn’t used. Closed but recurrence noted in #20567.

9. **[#27358 – macOS 15.7.7: Code Mode crashes with SIGTRAP [OPEN]**](https://github.com/openai/codex/issues/27358)
   *8 comments, 0 👍*
   After the latest macOS update, Code Mode crashes on V8 JIT executable‑memory permissions due to hardened runtime. Impacts users who can’t re‑sign the binary.

10. **[#27205 – Encrypted tool use: `followup_task` declares encrypted params but not configured [OPEN]**](https://github.com/openai/codex/issues/27205)
    *8 comments, 5 👍*
    CLI 0.138.0 on WSL2 fails when using `gpt‑5.4` because the model is not configured for encrypted tool use. Similar to #26753, indicating a systemic encryption‑tooling issue.

## Key PR Progress (10 important)

1. **[#27727 – code‑mode standalone: Cutover to new process [OPEN]**](https://github.com/openai/codex/pull/27727)
   Phase 3 of a 4‑phase stack. Moves code‑mode execution into a separate IPC process, decoupling V8 from the core. (See sibling PRs #27724, #27725, #27726.)

2. **[#27721 – Prewarm guardian review trunks [OPEN, code‑reviewed]**](https://github.com/openai/codex/pull/27721)
   Creates the auto‑review guardian thread asynchronously at thread start to reduce first‑review latency.

3. **[#25866 – fix(apply-patch): handle CRLF gracefully [OPEN, code‑reviewed]**](https://github.com/openai/codex/pull/25866)
   Adds an opt‑in feature flag `apply_patch_crlf` to preserve carriage returns in patch payloads, preventing unwanted conversion of CRLF files.

4. **[#27258 – core: cache the tool search handler per session [OPEN, code‑reviewed]**](https://github.com/openai/codex/pull/27258)
   Caches the BM25 index used for tool routing, avoiding ~113 ms rebuild per continuation when searchable tool metadata is unchanged.

5. **[#27710 – add latency tracing spans [OPEN]**](https://github.com/openai/codex/pull/27710)
   Adds coarse tracing spans around thread start, resume, turn context construction, skill/plugin loading, and tool preparation to help diagnose latency gaps.

6. **[#16974 – Preserve zsh PATH in shell snapshots [OPEN, code‑reviewed]**](https://github.com/openai/codex/pull/16974)
   Fixes a bug where zsh’s tied `PATH`/`path` variables were dropped during shell snapshot export, breaking PATH in subshells.

7. **[#27732 – Reject remote image URLs from output helpers [OPEN]**](https://github.com/openai/codex/pull/27732)
   Prevents HTTP(S) image URLs from being emitted in code‑mode structured tool outputs, returning a model‑visible error instead.

8. **[#27723 – Preserve user goal evidence in approval review [OPEN]**](https://github.com/openai/codex/pull/27723)
   Deduplicates and preserves user‑provided goal objectives as separate evidence in Guardian approval review, excluding unrelated metadata.

9. **[#27508 – Support long raw TUI goal objectives (1 of 3) [OPEN]**](https://github.com/openai/codex/pull/27508)
   Raises the `thread/goal/set` character limit from 4000 to allow longer objectives in the TUI. Part of a 3‑PR stack also adding pasted text and image support.

10. **[#27696 – Load AGENTS.md from all bound environments [OPEN]**](https://github.com/openai/codex/pull/27696)
    Extends context loading to show AGENTS.md files from every bound environment (not just the primary one), fulfilling part of #12115’s request.

## Feature Request Clusters

- **Context & workspace management**
  - Dynamic loading of `AGENTS.md` per directory (#12115, 67 👍)
  - Multi‑repo support in the desktop app (#11956, 30 👍)
  - Remote thread orchestration across SSH hosts (#25482)

- **Chat archive & history access**
  - Restore ability to view archived chats from the main UI (regression from ~2 weeks ago) (#27207, #27717)
  - Thread panel hiding existing workspace threads after restructuring (#16901)

- **Authentication & usability improvements**
  - Exempt long‑time / paying users from mandatory phone verification (#27742, also related to #20161)

## Developer Pain Points

- **Phone verification blocking SSO:** The most commented issue today (#20161, 196 comments) reflects deep frustration with mandatory phone verification interrupting workflows, especially for enterprise/SAML users.
- **Windows performance and stability:** Multiple reports of Codex spawning excessive Git processes (#22085, #20567), ~40 s startup hangs (#23207), sandbox installation failures (#26477), and immediate exit after update (#27367) – Windows remains a high‑pain platform.
- **macOS crashes after OS updates:** V8‑related `SIGTRAP` (#27358) after macOS 15.7.7 and “Keep this Mac awake” failing (#23294) show sensitivity to OS changes.
- **Encrypted tool use friction:** Two open/closed issues (#26753, #27205) highlight that the encrypted tool/call pipeline is brittle, failing with misleading “not configured” errors.
- **Data loss after updates:** Chat history disappearance (#20741) and archived chats becoming inaccessible (#27207) erode user trust in updates.
- **Keyboard shortcut interference:** The Fn dictation hotkey stops working system‑wide after a Codex update (#27296, 14 👍), indicating aggressive key capture.
- **MCP server startup flakiness:** Handshake errors (#6020) continue unresolved, blocking users who rely on MCP integrations.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-12

## Today's Update Brief
No new releases were published in the last 24 hours. Activity on the issue tracker surged, with 14 new issues filed and many existing ones updated, primarily around v1.0.61 regressions (terminal rendering corruption, keyboard input breakage, authentication problems). A long‑standing community workaround for the missing CLI commands (#53) continues to accumulate reactions. The solitary pull request is an initial project setup from a first-time contributor.

## Releases
None in the last 24 hours. The latest stable version remains 1.0.61.

## Hot Issues
10 noteworthy issues selected for community impact, recency, and severity.

1. **[#53 – Bring back the GitHub Copilot in the CLI commands to not break workflows](https://github.com/github/copilot-cli/issues/53)**
   *Open since Sep 2025, 75 👍, 37 comments*
   The most‑reacted issue. Users report that removing the old `github-copilot-cli` or renaming it broke existing scripts. The community has created alternatives like `shell-ai` and this issue serves as a coordination hub. No official update from GitHub.

2. **[#223 – "Copilot Requests" permission for fine-grained tokens should be visible for org-owned tokens](https://github.com/github/copilot-cli/issues/223)**
   *76 👍, 30 comments*
   Enterprise admins cannot see the “Copilot Requests” permission when creating org‑owned fine‑grained tokens. Forces organisations to use personal PATs, violating security policies.

3. **[#892 – Add sandbox mode to restrict Copilot CLI file access to a specified working directory](https://github.com/github/copilot-cli/issues/892)**
   *49 👍, 12 comments*
   Feature request for a filesystem sandbox that constrains reads/writes to a workspace root. High demand from users who want to run agentic workflows on sensitive repositories.

4. **[#3755 – Reasoning/thinking display garbles streamed text with duplicated overlapping chunks](https://github.com/github/copilot-cli/issues/3755)**
   *Filed 2026-06-10, 3 comments*
   When `showReasoning: true` is enabled, the live “thinking” display produces duplicated and overlapping fragments (e.g., “numbnumber” instead of “number”). Confirmed in v1.0.61.

5. **[#3749 – Terminal streaming renderer corrupts output – characters doubled/truncated during streaming](https://github.com/github/copilot-cli/issues/3749)**
   *5 👍, 3 comments*
   Streamed output (including final responses) shows doubled characters, truncated tokens, and repeated lines. Affects the core agent experience.

6. **[#3534 – `/copy` fails with `clip.exe exited with code 1` on WSL2 ARM64](https://github.com/github/copilot-cli/issues/3534)**
   *2 👍, 3 comments*
   Clipboard copy broken on WSL2 (ARM64) due to `cmd.exe` quoting bug introduced in v1.0.55. Workaround requires manual re‑quoting.

7. **[#3602 – @github/copilot SDK mutates host `process.env` with `safe.bareRepository=explicit`](https://github.com/github/copilot-cli/issues/3602)**
   *4 👍, 1 comment*
   SDK unconditionally injects Git hardening settings into `process.env`, affecting all spawned processes. Users see unexpected Git behaviour in pipelines.

8. **[#3763 – Session token expiry stops work flows, resuming fixes issue](https://github.com/github/copilot-cli/issues/3763)**
   *Filed 2026-06-11, 1 comment*
   Session tokens do not auto‑refresh mid‑session, causing CLI failures. Manual resume (e.g., “resume task”) restores function. Interrupts long‑running agent tasks.

9. **[#3772 – Support authenticated (OAuth/token) reads of the MCP registry for enterprises](https://github.com/github/copilot-cli/issues/3772)**
   *Filed 2026-06-12*
   Enterprise MCP registries (e.g., Azure API Center) are read anonymously. Requesting OAuth/token support so organisations can avoid exposing their registry publicly.

10. **[#3769 – Copilot CLI output has thread problems](https://github.com/github/copilot-cli/issues/3769)**
    *Filed 2026-06-11, 1 👍*
    Output in Agency mode is mangled until response completion, affecting both thinking and final output. Likely related to the rendering regressions.

## Key PR Progress

Only one pull request was updated in the last 24 hours:

- **[#3771 – Initial project setup](https://github.com/github/copilot-cli/pull/3771)**
  Created by @limenpchuolto112-creator. This is a first‑time contributor's project scaffold. No description, no review activity. Appears to be an unrelated or test PR.

No active PRs for feature work or bug fixes were merged or updated.

## Feature Request Clusters

The following recurring themes emerged from today’s issue activity:

- **Agent scheduling / loop commands** – Issues [#2056](https://github.com/github/copilot-cli/issues/2056) and [#2129](https://github.com/github/copilot-cli/issues/2129) ask for the ability to run agents on a recurring schedule (e.g., hourly checks, overnight monitoring). Both are open with moderate support.

- **Sandbox / filesystem isolation** – Issue [#892](https://github.com/github/copilot-cli/issues/892) is the primary request. No other issues today duplicate this, but the high reaction count indicates strong demand.

- **Enterprise MCP & authentication** – Issue [#3772](https://github.com/github/copilot-cli/issues/3772) and the older [#223](https://github.com/github/copilot-cli/issues/223) highlight enterprise needs: token-backed MCP registry reads and org‑visible permissions.

- **Plugin control** – Issue [#3761](https://github.com/github/copilot-cli/issues/3761) requests finer‑grained plugin enable/disable beyond repo‑level `settings.json`, e.g., global disable for all repos.

- **Git worktree handling** – Issue [#2243](https://github.com/github/copilot-cli/issues/2243) argues that worktrees should be opt‑in by default, as agent‑created worktrees can be difficult to merge back. Moderate community support (8 👍).

## Developer Pain Points

- **Terminal rendering corruption** – Multiple issues ([#3755](https://github.com/github/copilot-cli/issues/3755), [#3749](https://github.com/github/copilot-cli/issues/3749), [#3769](https://github.com/github/copilot-cli/issues/3769)) report garbled output during streaming. This is the most crippling set of bugs in v1.0.61, affecting both thinking and final responses.

- **Input keyboard regressions** – New issues document multiple input breakages in v1.0.61: `Shift+Enter` does not insert newline ([#3768](https://github.com/github/copilot-cli/issues/3768)), `Ctrl+Enter` shows “enqueue” hint but actually adds line break ([#3760](https://github.com/github/copilot-cli/issues/3760)), `Win+H` voice typing no longer works ([#3770](https://github.com/github/copilot-cli/issues/3770)).

- **Session authentication & refresh** – Issue [#3763](https://github.com/github/copilot-cli/issues/3763) and [#3758](https://github.com/github/copilot-cli/issues/3758) (model change on resume fails with auth error) indicate that token lifecycle management is fragile in long sessions.

- **Permissions UX** – Issue [#3764](https://github.com/github/copilot-cli/issues/3764) points out that the same directory approval is requested multiple times without clear explanation. Combined with [#3757](https://github.com/github/copilot-cli/issues/3757) (content exclusion service fails closed after token refresh), permission handling feels inconsistent.

- **MCP server connectivity** – Older issues like [#2282](https://github.com/github/copilot-cli/issues/2282) and [#2486](https://github.com/github/copilot-cli/issues/2486) remain open, describing blocked MCP servers under enterprise policies and Windows connection failures. No new resolution.

- **WSL2 clipboard** – Issue [#3534](https://github.com/github/copilot-cli/issues/3534) persists for ARM64 WSL2 users; the quoting bug in `clip.exe` wrapper remains unfixed.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-12

## Today’s Update Brief
Activity on the `kimi-cli` repository was minimal over the past 24 hours. No new releases or issues were created or updated. A single pull request (#2170) adding user-customizable color skins via YAML was closed, but no community discussion or merge status is reflected in today’s data.

## Releases
*None in the last 24 hours.*

## Hot Issues
*No issues were updated or created in the last 24 hours. Community discussion was absent from the tracker.*

## Key PR Progress
Only one pull request was active (updated) in the last 24 hours:

- **#2170 [CLOSED] feat: add user-customizable color skins via YAML**
  Author: [@VrtxOmega](https://github.com/VrtxOmega) | Created: 2026-05-06 | Updated: 2026-06-11 | [Link](https://github.com/MoonshotAI/kimi-cli/pull/2170)
  Summary: Introduces a `/skin` slash command for runtime switching between named skins, plus a YAML-based skin loader (`~/.kimi/skins/<name>.yaml`). The PR claims to close #2171 (not visible in today’s data). No merge status or maintainer comments available.

## Feature Request Clusters
No new feature requests were filed or discussed in the last 24 hours. The only feature hinted at (customizable color skins) comes from the closed PR, not from a standalone issue.

## Developer Pain Points
No new developer frustrations or recurring pain points were recorded in the last 24 hours. The repository appears to be in a low-activity period.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-12

## Today's Update Brief

OpenCode v1.17.4 shipped with workspace-relative MCP server startup, connector-based authentication flows, and new v2 API endpoints for session management. Issue and PR activity remains high (50+ items each updated in the last 24h), with a strong focus on Windows terminal compatibility fixes, clipboard encoding bugs for CJK/Korean users, and a cluster of feature requests around native session goals and context visibility.

## Releases

**v1.17.4** was published in the last 24 hours. Core improvements include:
- Added `cwd` support for local MCP servers, enabling them to start from a workspace-relative directory (@Grantmartin2002)
- Added connector-based authentication flows and support for stored provider credentials
- Added v2 API endpoints to create and fetch sessions, list sessions

[View release](https://github.com/anomalyco/opencode/releases/tag/v1.17.4)

## Hot Issues

1. **#13984 — Cannot copy and paste in OpenCode CLI**
   *Author: @hongyesuifeng | Comments: 47 | 👍: 20*
   Users report that "copied to clipboard" displays but Ctrl+V produces nothing. Affects basic copy-paste workflow in CLI mode. Open since February, still unconfirmed.
   [Issue](https://github.com/anomalyco/opencode/issues/13984)

2. **#27167 — [FEATURE]: Add native session goals with /goal**
   *Author: @jorgitin02 | Comments: 45 | 👍: 71*
   Proposes a `/goal` slash command to set persistent session objectives with lifecycle management. Highly upvoted, actively discussed with 45 comments.
   [Issue](https://github.com/anomalyco/opencode/issues/27167)

3. **#6152 — [FEATURE]: Session context usage (similar to /context in Claude)**
   *Author: @mtymek | Comments: 18 | 👍: 108*
   Requests a TUI dialog showing context window breakdown (token count by file, tool usage). The most upvoted open feature request (108 👍). Last updated today.
   [Issue](https://github.com/anomalyco/opencode/issues/6152)

4. **#16017 — [FEATURE]: Add Go plan usage/balance API endpoint**
   *Author: @StephanMeijer | Comments: 17 | 👍: 52*
   Wants public API exposure of plan usage data (rolling/weekly/monthly windows). Currently only visible in dashboard.
   [Issue](https://github.com/anomalyco/opencode/issues/16017)

5. **#2047 — LM Studio failure to refresh models**
   *Author: @blankenshipz | Comments: 16 | 👍: 3*
   Adding/removing models in LM Studio doesn't update OpenCode's model list even after auth logout/login cycle. Open since August 2025.
   [Issue](https://github.com/anomalyco/opencode/issues/2047)

6. **#25758 — thinking is enabled but reasoning_content is missing**
   *Author: @jc01rho | Comments: 13 | 👍: 0*
   Using kimi-2.6 and deepseek-v4-pro with thinking enabled returns "thinking is enabled but reasoning_content is missing" errors. Blocks reasoning workflows.
   [Issue](https://github.com/anomalyco/opencode/issues/25758)

7. **#28957 — "Upstream idle timeout exceeded"**
   *Author: @VENAXIS | Comments: 9 | 👍: 0*
   Session times out when using "writing-plans" skill with "The upstream connection between the client and the model service idled out" error. macOS Tahoe, M4.
   [Issue](https://github.com/anomalyco/opencode/issues/28957)

8. **#30158 — Terminal button in web UI disappears since v1.15.12**
   *Author: @peterwwillis | Comments: 8 | 👍: 7*
   Regression: top-right terminal button (and several others) vanish in web UI after v1.15.12. Downgrading to v1.15.11 restores them.
   [Issue](https://github.com/anomalyco/opencode/issues/30158)

9. **#30068 — Copying Japanese text results in mojibake**
   *Author: @flanny7 | Comments: 7 | 👍: 3*
   Japanese text displays correctly on screen but becomes corrupted when copied to clipboard. UTF-8 misinterpreted as Latin1.
   [Issue](https://github.com/anomalyco/opencode/issues/30068)

10. **#31978 — Korean text encoding broken when copying to clipboard in v1.17.3**
    *Author: @dmsthd | Comments: 2 | 👍: 0*
    Similar encoding issue for Korean localized to v1.17.3. English responses unaffected. Already closed — likely addressed in v1.17.4.
    [Issue](https://github.com/anomalyco/opencode/issues/31978)

## Key PR Progress

1. **#29773 — Eliminate dual InstanceStore.Service materialization per directory**
   *Author: @johnnymo87*
   Fixes `Question` tool prompt hanging on submit caused by double instantiation of `InstanceStore.Service` for the same directory.
   [PR](https://github.com/anomalyco/opencode/pull/29773)

2. **#31465 — Scope gpt-5 reasoningEffort to native providers only**
   *Author: @liloi*
   Prevents `reasoningEffort = "medium"` from being set unconditionally for all gpt-5 models, fixing errors on non-native provider connections.
   [PR](https://github.com/anomalyco/opencode/pull/31465)

3. **#7756 — Subagent-to-subagent delegation with budgets and persistent sessions**
   *Author: @NamedIdentity*
   Large feature PR adding hierarchical delegation, budget management, and session navigation between subagents. Closed after 5 months of development.
   [PR](https://github.com/anomalyco/opencode/pull/7756)

4. **#31940 — Avoid downloading MCP resource URIs**
   *Author: @rekram1-node*
   Keeps MCP resource references in session history without forwarding custom URIs as provider-downloadable files. Preserves existing `resources/read` behavior.
   [PR](https://github.com/anomalyco/opencode/pull/31940)

5. **#29281 — Prevent process.exit() from killing parent terminal on Windows**
   *Author: @LifeJiggy*
   Fixes Windows-specific crash where OpenCode exit sends CTRL_CLOSE_EVENT to the console group, killing pwsh/cmd alongside the subprocess.
   [PR](https://github.com/anomalyco/opencode/pull/29281)

6. **#31946 — Windows session path, shell env, error message, and autocomplete fixes**
   *Author: @Nigmat-future*
   Consolidates fixes for 5 Windows-specific issues: desktop subprocess working directory, shell environment propagation, error message encoding, and autocomplete.
   [PR](https://github.com/anomalyco/opencode/pull/31946)

7. **#31980 — Lazy Windows code page detection with periodic refresh**
   *Author: @szzhoujiarui-sketch*
   Fixes garbled bash tool output on non-UTF-8 Windows systems (Chinese GBK, Japanese Shift-JIS, Korean EUC-KR) by detecting and refreshing code page dynamically.
   [PR](https://github.com/anomalyco/opencode/pull/31980)

8. **#31867 — Improve DeepSeek prompt cache reuse**
   *Author: @ChangedenCZD*
   Removes current date injection from system prompt to avoid cache misses. Aims to improve cache hit rates for DeepSeek models.
   [PR](https://github.com/anomalyco/opencode/pull/31867)

9. **#31925 — Use PowerShell EncodedCommand for reliable UTF-8 output**
   *Author: @senguangd*
   Switches `-Command` flag to `-EncodedCommand` on Windows, fixing multiple long-standing PowerShell encoding issues. Closes 5 related bugs.
   [PR](https://github.com/anomalyco/opencode/pull/31925)

10. **#31783 — Include diff content block in ACP edit permission requests**
    *Author: @ReeSilva*
    Adds missing `content: [{ type: "diff" }]` block to `edit` permission requests via ACP. ACP clients use this block to display diffs in approval UIs.
    [PR](https://github.com/anomalyco/opencode/pull/31783)

## Feature Request Clusters

**Session Management & Context Visibility**
Multiple high-engagement issues request better session lifecycle control and context awareness:
- Native `/goal` commands for persistent session objectives (#27167, 71 👍)
- Context window breakdown TUI showing token usage per file/tool (#6152, 108 👍 — most upvoted open feature)
- Resume last session on Desktop app launch (#31959)

**Plan Usage & Billing APIs**
Several requests for programmatic access to usage data:
- Public API endpoint for Go plan consumption (#16017, 52 👍)
- Rolling/weekly/monthly usage windows via API

**Model Selector & Provider Ergonomics**
Users want more control and transparency in model selection:
- Expose GitHub Copilot "Auto" model option (#25239)
- Prevent silent model ID switching during sessions (#28842)
- Add progress indicator to `opencode upgrade` command (#31623)

**TUI Customization**
- Configurable cursor style (block vs bar/line) (#11738)
- Config placeholder support for credential helpers (`{cmd:}` syntax) (#12710)

## Developer Pain Points

**Persistent Windows Terminal Issues**
A recurring theme: Windows users face garbled text after TUI exit (#11748, #20458), PowerShell encoding corruption (#31925, #31946), and terminal freezes (#31720). Multiple PRs this week target these problems (#29281, #31946, #31980, #31925), suggesting the maintainer team is actively addressing the Windows experience.

**Clipboard Encoding for Non-Latin Scripts**
Two distinct issues (#30068 for Japanese, #31978 for Korean) report correct on-screen display but corrupted output when copying to clipboard. The Korean issue was filed and closed within hours, suggesting a v1.17.3-specific regression that may be fixed in v1.17.4.

**Model Hallucination & Infinite Loops**
The `edit` tool hallucinating `oldString` values causing infinite failure loops (#21850) and "all messages must have non-empty content" errors when approaching context limits (#31971) indicate model-tool interaction edge cases remain problematic.

**UI Regressions**
The web UI terminal button disappearing since v1.15.12 (#30158) and Plan/Build mode switching breaking under "New Layout and Designs" flag (#31972) point to feature flag integration issues in the ongoing UI redesign.

**MCP & Skill Discovery**
False "duplicate skill name" warnings when `.claude/skills` is a symlink (#31977) and outdated `customize-opencode` skill schema (#31982) show friction in the skills ecosystem, particularly for multi-agent setups.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest – 2026-06-12

## Today’s Update Brief
A steady 24‑hour activity with one preview release (v0.18.0‑preview.2), 19 active issues, and 50 pull requests. The community is focusing on local provider integration, CLI usability bugs, and a growing interest in durable background jobs and cross‑session workflow persistence. A release workflow failure for the nightly build was also reported.

## Releases
- **v0.18.0‑preview.2** – A minor preview release containing only a chore bump and a single fix: `fix(cli): skip thought parts in copy output` by @he-yufeng.
  [Release notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.18.0-preview.2) | [PR #4742](https://github.com/QwenLM/qwen-code/pull/4742)

## Hot Issues (10 selected)

1. **#3384 – Unable to add OpenAI‑compatible local LLM**
   *Author: @jerkstorecaller*
   User cannot connect a local VLLM endpoint despite following the documentation. 14 comments, 1 👍.
   [Issue](https://github.com/QwenLM/qwen-code/issues/3384)

2. **#4987 – PR #4779 silently reverted #4652**
   *Author: @zzhenyao*
   A merged feature was undone without explanation in a later PR. 5 comments, priority P2, `welcome‑pr`.
   [Issue](https://github.com/QwenLM/qwen-code/issues/4987)

3. **#4888 – IDEA plugin: ask_user_question not showing text**
   *Author: @byx1728*
   In the JetBrains IDE plugin, question prompts and user input fields are invisible. 4 comments, priority P2.
   [Issue](https://github.com/QwenLM/qwen-code/issues/4888)

4. **#4898 – Feature request: more flexible user profile and auto skill extraction**
   *Author: @wunan067830-west*
   Wants finer control over user context generation to avoid context pollution. 4 comments, priority P3.
   [Issue](https://github.com/QwenLM/qwen-code/issues/4898)

5. **#4814 – UI should make it easier to add new models for custom providers**
   *Author: @jerkstorecaller*
   First‑run wizard is not extensible; adding new models requires manual config edits. 3 comments, priority P3.
   [Issue](https://github.com/QwenLM/qwen-code/issues/4814)

6. **#4854 – Allow qwen‑code process to start from a different location**
   *Author: @fantasyz*
   When the agent kills a dev server, it may kill itself because it runs in the project directory. 3 comments, priority P3.
   [Issue](https://github.com/QwenLM/qwen-code/issues/4854)

7. **#4921 – Virtualized History causes viewport height bug**
   *Author: @xibaisike*
   Enabling “Virtualized History” in settings makes the CLI viewport taller than expected and shows an unwanted scrollbar. 3 comments.
   [Issue](https://github.com/QwenLM/qwen-code/issues/4921)

8. **#4964 – Recover from max_tokens truncation**
   *Author: @HeKeHenryZhang*
   When a response is truncated due to token limits, the tool output is wasted; requests a recovery mechanism. 3 comments, priority P2.
   [Issue](https://github.com/QwenLM/qwen-code/issues/4964)

9. **#4951 – Token counting accuracy in statusline**
   *Author: @stevenxhyl2026*
   Questions whether the displayed in/out token counts are correct, reporting hundreds of thousands after a few exchanges. 3 comments.
   [Issue](https://github.com/QwenLM/qwen-code/issues/4951)

10. **#4994 – /stats double‑counts session on first use**
    *Author: @BenGuanRan*
    A bug introduced by PR #4779: the first `/stats` call persists the current session twice, inflating usage records permanently. 2 comments, priority P1.
    [Issue](https://github.com/QwenLM/qwen-code/issues/4994)

## Key PR Progress (10 selected)

1. **#4996 – Port declarative‑agent mcpServers + hooks (CC 2.1.168 parity)**
   Adds `mcpServers` and `hooks` frontmatter parsing and runtime firing for subagents.
   [PR](https://github.com/QwenLM/qwen-code/pull/4996)

2. **#4947 – Workflow P2: parallel() + pipeline() concurrent fan‑out**
   Implements concurrent agent execution with a sliding window of ≤16 agents.
   [PR](https://github.com/QwenLM/qwen-code/pull/4947)

3. **#5006 – Sanitize daemon logs and MCP restarts**
   Cleans up logging noise and stabilizes MCP server restart behavior.
   [PR](https://github.com/QwenLM/qwen-code/pull/5006)

4. **#4909 – Support archive install sources for extensions**
   Allows installing extensions from local `.zip` / `.tar.gz` files and remote archive URLs.
   [PR](https://github.com/QwenLM/qwen-code/pull/4909)

5. **#4897 – Persist file history snapshots for cross‑session /rewind**
   Enables `/rewind` to work after session resume by saving snapshots to JSONL.
   [PR](https://github.com/QwenLM/qwen-code/pull/4897)

6. **#4971 – Reduce retained interactive tool output memory**
   Compacts large tool output display data in scheduler state and UI history to lower memory usage.
   [PR](https://github.com/QwenLM/qwen-code/pull/4971)

7. **#5009 – Fix `extensions new` when bundled examples missing**
   Makes `qwen extensions new` work even if example directories are absent, with a starter boilerplate.
   [PR](https://github.com/QwenLM/qwen-code/pull/5009)

8. **#4868 – Add runtime memory/CPU sampling with OTel reporting**
   Introduces a 60‑entry ring buffer for RSS, heap, external memory, and CPU usage, accessible in crash dumps.
   [PR](https://github.com/QwenLM/qwen-code/pull/4868)

9. **#5004 – Durable cron jobs: /loop tasks that survive restarts**
   `/loop` tasks can now be persisted to `.qwen/scheduled_tasks.json` and resume automatically on next launch.
   [PR](https://github.com/QwenLM/qwen-code/pull/5004)

10. **#4955 – Bubble background subagent permission prompts to parent session**
    Subagents with `approvalMode: bubble` will surface interactive permission requests in the parent session’s Background panel.
    [PR](https://github.com/QwenLM/qwen-code/pull/4955)

## Feature Request Clusters

- **Custom provider / local model onboarding** – Multiple users (e.g., #3384, #4814) request a UI flow to add and manage OpenAI‑compatible local models without editing JSON config files.
- **Memory and context control** – Requests for user profile customization (#4898), bounded token accumulation (#4964), and avoiding context pollution are recurring.
- **CLI usability improvements** – Proposals include a `/cd` command to change workspace without restarting (#4890), better `/copy` support on headless Linux (#4926), and multi‑line input shortcuts (#5005).
- **Background / persistent workflows** – Users want `/loop` tasks that survive restarts (#5004) and the ability to run agents without killing the host process (#4854).
- **Extension and skill discoverability** – Several issues (e.g., #5007) note that skills are not exposed in ACP mode, and extension installation from archives is now being addressed (#4909).

## Developer Pain Points

- **Unintended regressions** – PR #4779 silently reverted a previously merged feature (#4987), and another #4779 change caused `/stats` double‑counting (#4994). These frustrate contributors and erode trust.
- **IDE plugin gaps** – The IDEA plugin’s `ask_user_question` shows no text or input fields (#4888), and the VS Code extension fails to launch after VS Code 1.124.0 (#4991).
- **Environment‑specific breakage** – `/copy` fails on SSH‑connected Linux servers due to missing `xclip`/`xsel` (#4926); the CLI `/stats` token display appears inaccurate (#4951).
- **Automated skill/MCP churn** – Memory auto‑generation interferes with CLI workflows (#4976), and the prompt‑cache stability against MCP/skills changes is being stabilized (#4896).
- **Release reliability** – A nightly release workflow failed (#5008), indicating potential CI instability.

</details>