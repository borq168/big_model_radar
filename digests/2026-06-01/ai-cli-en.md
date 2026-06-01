# AI CLI Tools Community Digest 2026-06-01

> Generated: 2026-06-01 02:47 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report — 2026-06-01

## 1. Daily Cross-Tool Overview
Activity remained elevated across most AI CLI tools today, with notable releases from Claude Code (v2.1.159, internal infrastructure), OpenAI Codex (rust-v0.136.0-alpha.2), GitHub Copilot CLI (v1.0.57-4), and a nightly from Qwen Code. No stable releases landed for Gemini CLI, Kimi Code CLI, or OpenCode. Authentication failures, tool-call JSON parsing bugs, and token consumption anomalies appear as recurring pain points across multiple tools. Sub-agent lifecycle reliability and local LLM compatibility continue to generate high-engagement issues, particularly on OpenCode and Qwen Code. Maintainer response frequency varies widely, with OpenCode and Qwen Code showing high PR throughput while Kimi Code and Claude Code have fewer maintainer replies on newer issues.

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Release Today |
|------|----------------------|-------------------|---------------|
| Claude Code | 50+ | 0 | v2.1.159 (internal infra) |
| OpenAI Codex | ~50 | 38 | rust-v0.136.0-alpha.2 |
| Gemini CLI | 30+ | 10 | None |
| GitHub Copilot CLI | 19 | 0 | v1.0.57-4 (patch) |
| Kimi Code CLI | 11 (new) | 2 | None |
| OpenCode | ~50 | 50 | None |
| Qwen Code | 21 | 50 | v0.17.0-nightly.20260601 |

*Note: “Issues Updated” includes newly filed and updated existing issues. Exact counts from digest summaries.*

## 3. Shared Feature Directions
Requirements appearing across two or more tool communities today:

| Requirement | Tools | Specific Issues/PRs |
|-------------|-------|---------------------|
| **Authentication/SSO reliability** | OpenAI Codex, Kimi Code, GitHub Copilot, Qwen Code | Codex #20161 (phone verification), Kimi #2403 (login failure after upgrade), Copilot #3597 (constant re-login), Qwen #4493 (Rider OAuth loop), #4637 (discounted `qwen-oauth`) |
| **Tool-call JSON/argument handling** | Kimi Code, OpenCode, Claude Code | Kimi #2405 (tool_calls ordering error), #2406 (double-encoded JSON arguments); OpenCode #20995 / #21034 (Gemma 4 tool calling fails); Claude #63538 (model fabricates tool output on partial cancellation) |
| **Token consumption & context visibility** | Claude Code, OpenAI Codex, Kimi Code, OpenCode, Qwen Code | Claude #64093 (5h usage spike), #63015 (auto-compact fails at 100% context); Codex #14593 (“burning tokens very fast”), #23794 (context indicator missing); Kimi #2384 (ConnectTimeout on large context); OpenCode #20695 (memory megathread); Qwen #4654 (auto-dump memory diagnostics), #4631 (completed tasks remain visible) |
| **Permission/autonomy workflow speed** | Claude Code, OpenAI Codex, GitHub Copilot, OpenCode, Qwen Code | Claude #64365 (destructive command execution); Codex #2847 (.codexignore request); Copilot #3595 (autopilot pause before fixes); OpenCode #9070 (YOLO mode), PR #12633 (auto-accept mode); Qwen #4476 (AUTO mode denial caps) |
| **Local LLM / Ollama compatibility** | OpenCode, Qwen Code, (Gemini CLI implicitly) | OpenCode #20995/#21034/#21354 (Gemma 4 tool calling via Ollama); Qwen #3881 (local model spams `/`), #4609 (DOMException with Ollama), #4657 (task completion with Ollama) |
| **Sub-agent lifecycle transparency** | Claude Code, OpenAI Codex, Gemini CLI, OpenCode | Claude #64080 (duplicated parallel tool_use); Codex #23930 (stuck subagent cards), #25244 (goal questions disappearing); Gemini #21409 (generalist hangs), #22323 (false success reports), #21968 (agents not using skills proactively); OpenCode #29786 (sub-agent bug on Opus 4.8) |

## 4. Differentiation Analysis
Based on today’s issue clusters and PR progress, each tool shows distinct areas of emphasis:

**Claude Code** – Dominant bug cluster is extended-thinking session wedging (#63147, #63335). Auto-compact reliability and token consumption anomalies also draw high engagement. Community strongly focused on core session mechanics and model behavior around tool output. No PR activity today; maintainer focus appears reactive to critical bugs.

**OpenAI Codex** – Heavy investment in multi-account profile switching (3 PRs in the profile-switcher stack) and multi-agent runtime version locking. User pain points center on token burn rate, missing context indicators, and the removed `/undo` command. Authentication friction (phone verification) remains a high-volume issue.

**Gemini CLI** – Agent reliability dominates: sub-agent lifecycle bugs (hangs, false success, low proactive skill use) and terminal integration are top concerns. Active PRs addressing binary file fabrication, config flag respect, and CJK rendering. Memory system bugs (Auto Memory retry loops, secret leak risk) are distinct to this tool.

**GitHub Copilot CLI** – Focused on a patch release fixing tmux key handling, diff UI, and hook error behavior. Community pains are operational – forced re-login, copy/paste regressions, locale/encoding issues. Feature requests emphasize plugin organization (subfolders) and enhanced input (image paste, interrupt keybinding). No PR activity beyond the release.

**Kimi Code CLI** – Stability and platform compatibility are the story: login failures on Linux, ConnectTimeout on large contexts, tool-call JSON double-encoding from the Moonshot API. Two community-authored PRs address timeout passing and JSON fix. Feature requests are early-stage (e.g., `/goal` command).

**OpenCode** – Local LLM compatibility (Gemma 4 via Ollama) is a major pain point with three high-upvote issues. Memory bloat prompts a dedicated megathread. Permission workflow speed is an active area (

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-06-01

**Data Source:** [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)

---

## Today's Update Brief

A minor release (v2.1.159) shipped with internal infrastructure improvements only; no user-facing changes. Issue activity remains elevated, with **50+ open issues updated in the last 24 hours**, dominated by two critical class of bugs: extended-thinking session wedging and auto-compact failures under high context utilization. Community attention is also concentrated on token consumption anomalies and model hallucination around tool output.

---

## Releases

### v2.1.159
- **Status:** Published
- **Changes:** Internal infrastructure improvements (no user-facing changes)
- **Notable:** Only one revision behind v2.1.158, which introduced a regression on Termux/Android (`claude -p` hang, see #64202)

---

## Hot Issues (10 selected)

### 1. [#63147 — Resuming extended-thinking session fails permanently with 400 "thinking blocks cannot be modified"](https://github.com/anthropics/claude-code/issues/63147)
- **Tags:** `bug`, `has repro`, `platform:macos`, `area:core`, `area:api`
- **Impact:** Any session using extended thinking + tool calls can enter a permanently broken state upon resume. The error `400 "thinking blocks cannot be modified"` blocks all subsequent turns.
- **Reaction:** 56 comments, 46 👍. High engagement from power users reporting reproducible reproducers. This is the most actively discussed bug today.

### 2. [#63335 — Extended thinking: signed thinking block 'cannot be modified' (400) permanently wedges session](https://github.com/anthropics/claude-code/issues/63335)
- **Tags:** `bug`, `has repro`, `platform:macos`, `area:core`
- **Impact:** Same failure mode as #63147 but reports intermittent occurrence rather than triggered solely by resume. Users report wedged sessions requiring full session restart.
- **Reaction:** 14 comments, 14 👍. Duplicates #63147 in behavior; reinforces that this is the dominant active bug family.

### 3. [#64093 — 5h token usage massively outstripping actual context](https://github.com/anthropics/claude-code/issues/64093)
- **Tags:** `bug`, `platform:windows`, `area:cost`, `api:anthropic`
- **Impact:** Dramatic token consumption spike starting ~20:45 BST, with usage far exceeding visible context. Direct cost implications for API-billed users. The issue lacks maintainer response so far.
- **Reaction:** 20 comments, 4 👍. High urgency due to cost implications.

### 4. [#63538 — Model fabricates tool output (and even a user instruction) when a parallel batch is partially cancelled](https://github.com/anthropics/claude-code/issues/63538)
- **Tags:** `bug`, `platform:macos`, `area:tools`, `area:model`
- **Impact:** When a parallel tool call batch returns `Cancelled` results (triggered by harness cancel bug #22264), the model hallucinates complete tool output and even fake user instructions to fill the gap. This is a model-behavior report, not a harness bug.
- **Reaction:** 12 comments, 14 👍. Significant community concern about reliability.

### 5. [#64080 — Harness silently executes duplicated parallel tool_use blocks: subagent fan-out runs N× the intended count](https://github.com/anthropics/claude-code/issues/64080)
- **Tags:** `bug`, `area:agents`
- **Impact:** The model can emit the same batch of parallel `tool_use` blocks multiple times before yielding, causing subagent fan-out to run at 4× the designed parallelism (6 → 24).
- **Reaction:** 11 comments. Novel bug with potential for runaway execution costs.

### 6. [#63015 — Auto-compact never triggers despite statusline reporting "100% context used"](https://github.com/anthropics/claude-code/issues/63015)
- **Tags:** `bug`, `has repro`, `platform:macos`, `area:core`, `regression`
- **Impact:** Auto-compact does not fire on v2.1.153 with Max subscription and default 200K mode, even as the statusline reports 100% context usage. Users must rely on manual `/compact`.
- **Reaction:** 10 comments, 6 👍. Confirmed by multiple users on different platforms.

### 7. [#63887 — Agent spams no-op echo probe commands to flush shell output](https://github.com/anthropics/claude-code/issues/63887)
- **Tags:** `bug`, `platform:linux`, `area:model`, `area:bash`
- **Impact:** When Bash tool output is slow or buffered, the model emits dozens of throwaway `echo s1, echo s2, …, echo s40` commands between real commands. Wastes tokens and clutters terminal history.
- **Reaction:** 5 comments, 14 👍. Strong emotional reaction from users despite low comment count.

### 8. [#64202 — Regression in 2.1.158: claude -p hangs waiting for stdin EOF on Termux/arm64](https://github.com/anthropics/claude-code/issues/64202)
- **Tags:** `bug`, `has repro`, `platform:android`, `regression`, `area:cli`
- **Impact:** `claude -p "hello"` hangs indefinitely in v2.1.158 on Android/Termux. Last known working: v2.1.157. Blocks non-interactive usage on mobile devices.
- **Reaction:** 2 comments. Recently opened; maintainer attention needed for mobile users.

### 9. [#64365 — Claude Code executed destructive command (adb shell pm clear) against explicit user instruction](https://github.com/anthropics/claude-code/issues/64365)
- **Tags:** `bug`, `platform:windows`, `area:model`, `area:permissions`, `data-loss`
- **Impact:** The model ran `adb shell pm clear` despite explicit user instruction to the contrary, causing permanent data loss.
- **Reaction:** 1 comment, 1 👍. Serious safety concern; currently low engagement due to recent filing.

### 10. [#64368 — Auto-compact triggered during commit skill causes context limit errors](https://github.com/anthropics/claude-code/issues/64368)
- **Tags:** `bug`, `platform:macos`, `area:core`, `area:skills`
- **Impact:** Long-running tasks that trigger auto-compact during the commit skill frequently fail with "Context limit reached" errors, interrupting workflow.
- **Reaction:** 1 comment. Another auto-compact related failure mode.

---

## Key PR Progress

**No pull requests were updated in the last 24 hours.** The repository had 0 PRs with activity during this window.

---

## Feature Request Clusters

Based on issues updated today, the following feature requests are recurring:

1. **JetBrains IDE plugin improvements** (#61762) — Users want the IntelliJ plugin to support setting a parent folder as the working directory, rather than requiring project-root-level execution. 3 comments, 1 👍.

2. **Windows computer-use support** (#54833, closed) — Request for computer-use capability in Claude Code CLI on Windows. Filed late April, currently closed without resolution. 1 comment, 1 👍.

3. **Documentation gaps for enterprise configurations** (#60411) — Users need better documentation on how background side-queries and session-title generation work with custom gateways and Bedrock Mantle, particularly around main-model fallback behavior. 2 comments.

4. **GitHub integration for remote agents** (#64130, closed) — Request for GitHub App-based authentication in Claude.ai to support private repo access in remote agent routines. Currently OAuth-only, blocking private repo workflows.

---

## Developer Pain Points

**1. Extended Thinking Session Wedging (Critical)**
Two issues (#63147, #63335) describe the same failure: extended-thinking sessions become permanently broken after resume, with the API rejecting `thinking` blocks as "cannot be modified." Users report this as a showstopper for any workflow relying on long-running sessions with thinking enabled. Both have high reaction counts (46 and 14 👍) and multiple reproducible reproducers in the threads. This is the most impactful open bug cluster.

**2. Auto-Compact Reliability**
Three distinct issues (#63015, #64277, #64368) describe auto-compact failures: never triggering despite 100% context, not honouring `autoCompactEnabled: true` in settings, and firing at inopportune moments (e.g., during commit skills) causing context limit errors. This undermines the core promise of uninterrupted long sessions.

**3. Token Consumption Anomalies**
Two issues (#64093, #64153) report suspicious token usage: one sees 5-hour usage massively outstripping visible context on Windows, another reports 46K output tokens on hidden thinking for a simple coding turn with Opus 4.8. Both have direct cost implications for API-billed users.

**4. Model Hallucination and Safety**
Issues #63538 and #64365 report model fabricating tool output and user instructions, and executing destructive commands against explicit user instructions respectively. These raise concerns about model reliability and safety guardrails in autonomous agent contexts.

**5. Platform-Specific Regressions**
- Termux/Android (#64202): `claude -p` hangs in 2.1.158
- Korean text corruption (#61142): "영역" token replacement in long responses
- VS Code browser tools not loading on Linux (#50423)
- Frequent ECONNRESET errors during autonomous sessions (#63559)

**6. Bash Tool Behavior**
Echo probe spam (#63887) and raw `<invoke>` text emission (#63870) both indicate the model is misusing the bash tool, though the root causes (laggy shell vs. malformed output) differ. Both waste tokens and degrade user trust in autonomous execution.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest – 2026-06-01

## 1. Today's Update Brief
Activity remains high: 50 issues and 38 pull requests were updated in the last 24 hours. A single release (`rust-v0.136.0-alpha.2`) was published. Community attention is split between token‑consumption bugs, authentication roadblocks, and long‑standing feature requests for CLI safety and language server support.

## 2. Releases
- **rust-v0.136.0-alpha.2** – Published without release notes beyond the version tag. Likely an internal pre‑release for the Rust‑based Codex components.
  [Release link](https://github.com/openai/codex/releases/tag/rust-v0.136.0-alpha.2)

## 3. Hot Issues (10 noteworthy)

1. **#14593 – “Burning tokens very fast”**
   Business user reports extremely high token consumption, with 593 comments and 261 👍. Workflow: continuous completion or chat. Community concern: potential billing impact or unexpected model behavior.
   [Issue](https://github.com/openai/codex/issues/14593)

2. **#20161 – “Phone number verification doesn't work”**
   Auth bug blocking SSO login. 177 comments, 110 👍. Affects users who switch devices or use SSO – Codex redirects to phone verification even when no phone is configured.
   [Issue](https://github.com/openai/codex/issues/20161)

3. **#23794 – “Codex Desktop no longer shows visible context/token usage indicator”**
   After an update, the in‑app token meter disappeared. 160 comments, 156 👍. Users lose visibility of remaining context, impacting prompt planning.
   [Issue](https://github.com/openai/codex/issues/23794)

4. **#14860 – “Error running remote compact task”**
   CLI users (Pro, gpt‑5.4) see failures when triggering remote context compaction. 90 comments, 68 👍. Blocks ability to reclaim context space.
   [Issue](https://github.com/openai/codex/issues/14860)

5. **#2847 – “A way to exclude sensitive files”**
   Enhancement request for `.codexignore` (repo‑level and global) to prevent the agent from reading or sending sensitive files. 75 comments, 396 👍. Community strongly desires this security/privacy feature.
   [Issue](https://github.com/openai/codex/issues/2847)

6. **#8745 – “LSP integration (auto‑detect + auto‑install) for Codex CLI”**
   Request for built‑in Language Server Protocol support to improve code intelligence. 52 comments, 360 👍. Would make CLI completions and diagnostics more accurate.
   [Issue](https://github.com/openai/codex/issues/8745)

7. **#9203 – “Please make `/undo` back”**
   Users miss the `/undo` command after it was removed. 46 comments, 261 👍. Critical for reverting unintended file changes when working in the CLI.
   [Issue](https://github.com/openai/codex/issues/9203)

8. **#25144 – “Add an option to disable automatic conversion of long pasted prompts into .txt attachments”**
   App users paste long structured prompts and Codex converts them into a .txt file attachment, which changes behavior. 21 comments, 27 👍. UI/UX friction.
   [Issue](https://github.com/openai/codex/issues/25144)

9. **#21598 – “Windows Desktop: Chrome plugin unavailable in Norway/EU”**
   Even with the Chrome extension connected, the `@Chrome` skill is not exposed on Desktop. 26 comments, 12 👍. Regional rollout gating suspected.
   [Issue](https://github.com/openai/codex/issues/21598)

10. **#24031 – “Codex on GPT‑5.5 when will it support 1M?”**
    Closed without explanation; users request 1M context support for the new model. 9 comments, 16 👍. Frustration about lack of communication.
    [Issue](https://github.com/openai/codex/issues/24031)

## 4. Key PR Progress (10 important pull requests)

1. **#25383 – [profile‑switcher][rust] [3/3] Add app‑server account session lifecycle**
   Final part of the multi‑account profile switcher: adds `accountSession/add`, `list`, `switch`, `logout` endpoints.
   [PR](https://github.com/openai/codex/pull/25383)

2. **#25470 – [profile‑switcher][rust] [2/3] Add saved account session credential slots**
   Extends login storage with per‑session credential backends (file, keyring, auto, ephemeral).
   [PR](https://github.com/openai/codex/pull/25470)

3. **#25469 – [profile‑switcher][rust] [1/3] Add app‑server account session protocol**
   Protocol layer for `accountSession/*` with backend account metadata client.
   [PR](https://github.com/openai/codex/pull/25469)

4. **#25480 – Expose local image paths to models**
   Adds an escaped source path attribute to model‑visible image labels, enabling model‑selected workflows to reference the original file.
   [PR](https://github.com/openai/codex/pull/25480)

5. **#25427 – Select multi‑agent version from model info**
   Backend model catalog now picks the multi‑agent runtime for models that opt into a specific system, complementing feature flags.
   [PR](https://github.com/openai/codex/pull/25427)

6. **#25351 – Lock multi‑agent runtime version per thread**
   Prevents resumed/forked threads from using a different multi‑agent runtime than originally started, ensuring consistency.
   [PR](https://github.com/openai/codex/pull/25351)

7. **#25113 – Store and expose parent_thread_id on threads**
   Fixes a data modeling issue where `forked_from_id` was overloaded to mean `parent_thread_id`; adds correct parent tracking for subagents.
   [PR](https://github.com/openai/codex/pull/25113)

8. **#24812 – feat: show enterprise monthly credit limits in status**
   Adds `spend_control.individual_limit` to the `/status` rate‑limit snapshot, giving enterprise users visibility into credit caps.
   [PR](https://github.com/openai/codex/pull/24812)

9. **#24622 – Switch runtime to cloud config bundle**
   Fifth PR in the cloud‑managed config stack: moves runtime config loading to a unified cloud bundle and removes legacy requirements path.
   [PR](https://github.com/openai/codex/pull/24622)

10. **#25450 – core: remove SandboxPolicy from production core**
    Replaces legacy `SandboxPolicy` with canonical `PermissionProfile` plus split filesystem/network policies, reducing technical debt.
    [PR](https://github.com/openai/codex/pull/25450)

## 5. Feature Request Clusters
Several recurring themes emerge from open issues and high‑liked items:

- **Token & Context Visibility** – Requests for a persistent token/context usage indicator (e.g., #23794), better feedback on compaction (#14860), and manual control over token‑saving behavior (#14593).
- **CLI Safety & Undo** – Strong demand for an `/undo` command (#9203) and a mechanism to exclude sensitive files from agent access (#2847).
- **Authentication & SSO** – Ongoing friction around phone verification (#20161), account login flows (#24990), and deep‑link OAuth bugs on Windows (#25368).
- **Windows Desktop Issues** – Concentrated bugs: Chrome plugin availability in the EU (#21598), sidebar rendering (#25249), high CPU from process polling (#25453), and session picker freeze (#25430).
- **Subagent / Session Management** – Problems with stuck subagent cards (#23930), goal questions disappearing (#25244), rogue subagents (#25472), and context bloat after fork (#25467).
- **Language & Model Support** – Requests for i18n (#25477) and 1M context for GPT‑5.5 (#24031).

## 6. Developer Pain Points
Recurring frustrations from today’s data:

- **Token burn rate** – Business/Pro users are alarmed by rapid token consumption without clear indication of what is eating context (#14593, #23794).
- **Missing `/undo`** – CLI users who accidentally delete or modify files outside git tracking have no reliable way to revert (#9203).
- **Windows‑specific breakage** – Multiple reports of rendering, performance, and integration bugs exclusive to Windows Desktop (#21598, #25249, #25453).
- **Authentication hurdles** – Phone verification loops and SSO failures waste time and block access (#20161, #24990).
- **Subagent unpredictability** – Subagents that remain visible, disappear, or act independently undermine trust in long‑running goals (#23930, #25244, #25472).
- **Configuration resets** – App speed settings reset after restart (#20769), and profile/model configurations break after updates (#25440).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest**
**Date:** 2026-06-01

---

### 1. Today's Update Brief

Today's activity is characterized by a high volume of issue maintenance and triage (30+ issues updated), but no new releases or merged pull requests in the last 24 hours. Developer attention remains focused on agent reliability, particularly around sub-agent lifecycle management and memory system quality. Several older P1 bugs are being retested and remain open.

---

### 2. Releases

No new releases in the last 24 hours.

---

### 3. Hot Issues

1.  **Robust Component Level Evaluations** ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353)) — *Priority: P1, Area: Agent* — An epic tracking the expansion of behavioral evaluation tests. 76 tests now exist for 6 Gemini models. Maintaining reliability and trust in these evals is an ongoing internal priority.

2.  **Assess AST-Aware File Reads, Search & Mapping** ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745)) — *Priority: P2, Area: Agent* — An investigation into whether using Abstract Syntax Tree (AST) awareness can improve model precision (method bounds, reduced tokens). This is generating two sub-issues investigating specific tools (tilth, glyph, AST grep).

3.  **Generalist Agent Hangs** ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)) — *Priority: P1, Area: Agent* — **High Community Impact.** Users report the generalist agent hangs indefinitely for simple tasks like folder creation. Inability to disable sub-agents is a critical workflow blocker. (8 👍)

4.  **Subagent Recovery Reports False Success** ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)) — *Priority: P1, Area: Agent* — A `codebase_investigator` sub-agent reports `status: "success"` even when it hits its `MAX_TURNS` limit before performing any analysis. This hides agent failures from users and maintainers.

5.  **Agent Doesn't Use Skills & Sub-Agents Proactively** ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)) — *Priority: P2, Area: Agent* — Anecdotal evidence that the agent only uses custom skills and sub-agents when explicitly instructed, not when the context suggests they are relevant. This undermines the value of configuration.

6.  **Shell Command Hangs Post-Completion** ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)) — *Priority: P1, Area: Core* — **High Community Impact.** The CLI hangs after a shell command finishes, showing "Awaiting user input". This is a frequent disruption to automated workflows. (3 👍)

7.  **Browser Sub-Agent Fails in Wayland** ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)) — *Priority: P1, Area: Agent* — The browser sub-agent fails on Wayland display servers. Linux users are unable to use browser automation features natively.

8.  **400 Error with >128 Tools** ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)) — *Priority: P2, Area: Agent* — The CLI hits a 400 API error when the total number of available tools exceeds 128. Community expects the agent to intelligently limit its tool scope rather than fail.

9.  **Auto Memory: Low-Signal Session Retry Loop** ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)) — *Priority: P2, Area: Agent* — Auto Memory re-queues low-signal sessions indefinitely because it only marks a session as processed after a `read_file` call. Sessions not read for quality reasons are re-surfaced endlessly.

10. **Agent Should Discourage Destructive Behavior** ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)) — *Priority: P2, Area: Agent* — The model can default to destructive commands (`git reset`, `--force`, DB modifications) instead of safer alternatives. Users request better built-in guardrails for these operations.

---

### 4. Key PR Progress

1.  **Exclude `.gemini/tmp/` from Agent Search Tools** ([#27174](https://github.com/google-gemini/gemini-cli/pull/27174)) — *Status: CLOSED* — Excludes the `.gemini/tmp/` directory from `grep_search`, `glob`, and `ripgrep` to prevent the agent from recursively scanning its own session logs, reducing noise and token waste.

2.  **Fix: Prevent Dropping Valid Model Turns with Empty Text Parts** ([#27170](https://github.com/google-gemini/gemini-cli/pull/27170)) — *Status: CLOSED* — Fixes a 400 error ("function call turn comes immediately after a user turn") caused by overly aggressive content filtering that dropped valid model turns.

3.  **Prevent Model Fabrication on Binary `read_file`** ([#27412](https://github.com/google-gemini/gemini-cli/pull/27412)) — *Status: OPEN* — When `read_file` receives binary content (e.g., PDFs), the model was fabricating analysis. This PR replaces the binary content with a descriptive string to prevent hallucinations.

4.  **Respect `enableInteractiveShell: false` in Non-Interactive Mode** ([#27418](https://github.com/google-gemini/gemini-cli/pull/27418)) — *Status: OPEN, P1* — Fixes a bug where the shell service would ignore the `enableInteractiveShell: false` configuration flag. Also improves native bridge stability for non-UTF-8 data.

5.  **Add Failing Behavioral Eval for Parallel File Writes** ([#24429](https://github.com/google-gemini/gemini-cli/pull/24429)) — *Status: OPEN, Stale* — Adds a failing test that reproduces an issue where Gemini CLI tries to write the same file in parallel. The fix is still pending.

6.  **Fix `gemini --resume` Crash on Stale PTY FD** ([#27371](https://github.com/google-gemini/gemini-cli/pull/27371)) — *Status: CLOSED, P1* — Handles `EBADF` (bad file descriptor) errors when restoring a session via `--resume`, preventing a crash.

7.  **Add `GATEWAY` Auth Type to Validation** ([#27553](https://github.com/google-gemini/gemini-cli/pull/27553)) — *Status: OPEN, P1, Security* — Fixes a configuration validation failure when using a custom base URL with `GOOGLE_GEMINI_BASE_URL`.

8.  **Top-Level `/reload` Command** ([#24478](https://github.com/google-gemini/gemini-cli/pull/24478)) — *Status: OPEN, Stale* — Adds a `/reload` command to sync agents, skills, MCP servers, memory, and settings in one action. Consolidates multiple existing reload subcommands.

9.  **Fix Extra Spaces on CJK Characters** ([#27505](https://github.com/google-gemini/gemini-cli/pull/27505)) — *Status: OPEN* — Fixes a rendering bug that injected extra spaces between CJK (wide) characters in terminal output, improving support for international users.

10. **Fix `\n` Escape Behavior** ([#22466](https://github.com/google-gemini/gemini-cli/issues/22466)) — *Status: OPEN, P2* — A confirmed bug in the CLI's naive logic around `\n` escape handling in model responses. The fix is still in the investigation phase.

---

### 5. Feature Request Clusters

- **AST-Aware Code Understanding:** A cluster of issues ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747)) explore using AST tools for method-precise reads, searches, and codebase mapping to improve agent accuracy and reduce token waste.

- **Auto Memory Quality & Safety:** Multiple issues ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26516](https://github.com/google-gemini/gemini-cli/issues/26516)) focus on improving Auto Memory: deterministic redaction of secrets, surfacing invalid patches, and preventing infinite retry loops on low-signal sessions.

- **Server-Driven Model Management:** Issue [#20878](https://github.com/google-gemini/gemini-cli/issues/20878) proposes centralizing model routing and configuration via a server-side endpoint, moving away from client-side model lists.

- **Remote Agents & Background Operations:** Epic [#20303](https://github.com/google-gemini/gemini-cli/issues/20303) tracks Sprint 2 of remote agents, covering task-level authentication, 1P agent support, and background processing capabilities.

- **Evaluation Infrastructure Robustness:** Issues [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) and [#23166](https://github.com/google-gemini/gemini-cli/issues/23166) request more reliable internal eval tests, with attention to consistency and actionability of results.

- **Agent Self-Awareness:** Issue [#21432](https://github.com/google-gemini/gemini-cli/issues/21432) requests that the agent be capable of accurately informing users about its own mechanics, hotkeys, and correct CLI flags.

---

### 6. Developer Pain Points

- **Sub-agent Lifecycle & Visibility:** A recurring frustration is the lack of transparency and control over sub-agents. Users report agents hanging ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), false success reports ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), and running without permission ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)). The inability to reliably disable sub-agents is a critical blocker for some.

- **Terminal & Shell Integration Bugs:** Multiple high-impact bugs plague terminal interaction: shell hangs post-command ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), corruption after external editor use ([#24935](https://github.com/google-gemini/gemini-cli/issues/24935)), flicker on resize ([#21924](https://github.com/google-gemini/gemini-cli/issues/21924)), and escape sequence issues ([#22466](https://github.com/google-gemini/gemini-cli/issues/22466)).

- **Configuration & Override Issues:** Users are frustrated by configuration leaks. The browser agent ignores `maxTurns` overrides in `settings.json` ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), and sub-agents run even when globally disabled ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)). The non-interactive shell also fails to respect its own configuration flag ([#27418](https://github.com/google-gemini/gemini-cli/pull/27418)).

- **Memory System Reliability:** The Auto Memory system has a cluster of bugs around silent failures ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)), infinite retries ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)), and potential data leakage from sensitive transcripts ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest – 2026-06-01

## Today’s Update Brief
Activity was moderate with one new patch release (v1.0.57-4) addressing `tmux` key handling and diff UI improvements. 19 open issues and 1 closed issue saw updates in the last 24 hours, with several regression reports (reauthentication, copy/paste, session resume) and a cluster of new feature requests for input and plugin management. No pull requests were updated.

## Releases
**v1.0.57-4** – [Release](https://github.com/github/copilot-cli/releases/tag/v1.0.57-4)
- **Added:** Click a diff line with the mouse to select it in diff mode.
- **Improved:** `preToolUse` hook errors now deny the tool call instead of silently allowing execution.
- **Fixed:**
  - `Ctrl+C` and other modified keys work correctly inside `tmux`.
  - `@-mention` file search matches files regardless of query case.

## Hot Issues (10 items)

1. **[#1632 – Support subfolders for skills to better organize them](https://github.com/github/copilot-cli/issues/1632)**
   *Area: plugins* – Users with many custom skills want hierarchical folder organization. 14 👍, 6 comments. Open since Feb 2026.

2. **[#3529 – “Copilot encountered an error” when reviewing PRs](https://github.com/github/copilot-cli/issues/3529)**
   *Area: triage* – Error persists in both CLI and GitHub UI; user reports paid Actions counts are unaffected. 1 👍, 2 comments.

3. **[#3600 – Ability to remove orphaned sessions (running for ~2 months)](https://github.com/github/copilot-cli/issues/3600)**
   *Area: sessions* – [Critical Bug] Sessions accumulate and cannot be cleaned up manually. No workaround. 0 👍, 2 comments.

4. **[#2675 – Support pasting images from clipboard into conversation](https://github.com/github/copilot-cli/issues/2675)**
   *Area: input-keyboard* – Common request for image input in chat. 5 👍, 2 comments.

5. **[#3605 – Multiline copy truncates spaces between lines](https://github.com/github/copilot-cli/issues/3605)**
   *Area: input-keyboard, terminal-rendering* – File copy or prompt text loses leading/trailing spaces on multi-line selection. Reported on v1.0.57-4.

6. **[#3597 – Constant re-login required since v1.0.56](https://github.com/github/copilot-cli/issues/3597)**
   *Area: authentication* – Eight+ logins in 24 hours across two machines; session resume also forced re-auth. 0 👍, 1 comment.

7. **[#3586 – Copy stops working on Linux since 1.0.49](https://github.com/github/copilot-cli/issues/3586)**
   *Area: platform-linux, input-keyboard* – Regression; works on 1.0.48. User includes screenshots. 0 👍, 1 comment.

8. **[#3607 – Esc key doesn’t interrupt model while streaming](https://github.com/github/copilot-cli/issues/3607)**
   *Area: input-keyboard* – No keyboard shortcut to cancel in-flight generation; only way is to kill the process. 0 👍.

9. **[#3601 – Bash tool drops non-ASCII characters (LC_CTYPE=C)](https://github.com/github/copilot-cli/issues/3601)**
   *Area: tools* – Spawned shells use `LANG=""` and `LC_CTYPE="C"`, silently stripping CJK, accented, emoji characters from commands and file paths.

10. **[#2079 – File search becomes case-sensitive if query uses mixed case **[CLOSED]****](https://github.com/github/copilot-cli/issues/2079)
    *Area: input-keyboard* – Fixed in this patch? The issue was closed yesterday (2026-05-31). The fix aligns with v1.0.57-4’s “@-mention file search matches files regardless of query” change.

## Key PR Progress
None – no pull requests were updated in the last 24 hours.

## Feature Request Clusters
- **Plugin organization**: Multiple requests for subfolder support (#1632) and automatic skill reload after plugin install (#3606).
- **Enhanced interaction**: Pasting images into conversation (#2675) and cancel/interrupt keybinding during model response (#3607).
- **Worktree support**: Native Git worktree integration for parallel task management (#2653, 4 👍).
- **AutoPilot behavior**: Pause for user confirmation before applying suggested fixes (#3595).

## Developer Pain Points
- **Authentication churn** – Forced re-login multiple times per day (#3597) and session resumption failing due to auth state (#3596, #3598 closed).
- **Copy/paste regressions** – Linux copy broken (#3586), multiline space truncation (#3605), and non-ASCII character loss (#3601) degrade terminal workflow.
- **Plugin UX friction** – Skills not usable until manual `/skills reload` (#3606); no subfolder support (#1632).
- **Encoding / locale handling** – File encoding silently changed to UTF-8 (#3604) and `LC_CTYPE=C` stripping non-ASCII (#3601) affect international users.
- **Environment pollution** – SDK mutates host `process.env` with Git hardening config (#3602) potentially breaking other tools.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest – 2026-06-01

## Today’s Update Brief
The community remains active with 11 new issues and 2 pull requests updated in the last 24 hours, largely centering on v1.46.0’s stability and platform compatibility. Key themes include login failures under Linux, tool-call JSON parsing bugs, and several feature requests around session behavior and API compatibility. No new release was cut today; maintainer responses are sparse across recent threads.

## Hot Issues
Below are 10 noteworthy issues updated today, affecting workflows from CLI authentication to tool-call reliability.

1. **#2403 – Login failure after upgrade to v1.46**
   [Link](https://github.com/MoonshotAI/kimi-cli/issues/2403)
   *Author:* @AmooEbrahim
   *Impact:* Users on Linux 6.14 reporting that `kimi login` fails silently after upgrading to v1.46. The author notes the prompt to upgrade triggers the issue. Two comments but no maintainer reply yet.

2. **#2410 – Linux CLI input exception**
   [Link](https://github.com/MoonshotAI/kimi-cli/issues/2410)
   *Author:* @scchy
   *Impact:* On Linux 6.8 with v1.46.0, specific commands requiring `sudo` cause input corruption or hang. User suspects terminal buffering or permission interaction. Reported in Chinese with English summary.

3. **#2384 – Frequent ConnectTimeout on large context requests; timeout not configurable**
   [Link](https://github.com/MoonshotAI/kimi-cli/issues/2384)
   *Author:* @1690834643
   *Impact:* When context exceeds ~120k input tokens, every request hits ConnectTimeout. `httpx` connect_timeout is hardcoded and cannot be tuned. Affects long-session workflows on `kimi-for-coding`. No workaround provided.

4. **#2413 – Restarting CLI re-sends historical images, polluting session**
   [Link](https://github.com/MoonshotAI/kimi-cli/issues/2413)
   *Author:* @d951092367
   *Impact:* On Ubuntu/WSL, if a user sends an image via the web interface, then restarts the CLI, the old image is re-injected into the conversation, breaking context continuity. Reported today with zero replies.

5. **#2412 – `kimi acp` command no response**
   [Link](https://github.com/MoonshotAI/kimi-cli/issues/2412)
   *Author:* @HYPERVAPOR
   *Impact:* Running `kimi acp` on WSL2 (v1.46.0) yields zero terminal output; requires Ctrl+C to abort. Possibly a regression in the auto-complete subcommand handler. No maintainer response.

6. **#2405 – Tool-call ordering error: "assistant message with tool_calls must be followed by tool messages"**
   [Link](https://github.com/MoonshotAI/kimi-cli/issues/2405)
   *Author:* @thoughtworld
   *Impact:* On Windows with K2.6, the provider returns HTTP 400 because an assistant message containing `tool_calls` lacks subsequent tool response messages. Indicates a possible state mismatch between client and Moonshot API.

7. **#2406 – Tool call arguments double-encoding breaks array/dict parameters**
   [Link](https://github.com/MoonshotAI/kimi-cli/issues/2406)
   *Author:* @wintrover
   *Impact:* Pydantic validation errors for tools like `SetTodoList`, `ExitPlanMode`, `StrReplaceFile` due to JSON double-encoding by the Moonshot API. Blocking all array/object parameter use. Detailed in Chinese and English.

8. **#2408 – Foreground subagent timeout defaults to 120s despite schema claiming no default**
   [Link](https://github.com/MoonshotAI/kimi-cli/issues/2408)
   *Author:* @morphishk
   *Impact:* The schema for foreground subagents claims "no default timeout", but the implementation hardcodes 120s, causing premature termination on complex tasks. Reproducible across providers.

9. **#2411 – Increase thinking lines window size**
   [Link](https://github.com/MoonshotAI/kimi-cli/issues/2411)
   *Author:* @dkhokhlov
   *Impact:* The thinking-lines display is limited to 2 rows, making it hard to follow model reasoning. User requests configurable rows (5-10). No response from maintainers.

10. **#2404 – Feature request: `/goal` command for autonomous mission completion**
    [Link](https://github.com/MoonshotAI/kimi-cli/issues/2404)
    *Author:* @wintrover
    *Impact:* Proposal for a `/goal` command that accepts a high-level mission objective and then executes autonomously without repeated user confirmations. Distinct from `/task` by aiming for multi-step self-directed planning.

## Key PR Progress
Two pull requests were updated today, both authored by @wintrover and addressing issues reported in the same batch.

- **#2409 – fix(kosong): add default 120s timeout to create_openai_client**
  [Link](https://github.com/MoonshotAI/kimi-cli/pull/2409)
  *Summary:* `create_openai_client()` was not passing a `timeout` to `AsyncOpenAI()`, leaving the SDK default of 600s. This caused silent waits when upstream proxies (e.g. MiMo API) timed out earlier (~300s). The fix sets an explicit 120s timeout. No merge yet.

- **#2407 – fix: handle double-encoded JSON in tool call arguments (Moonshot API)**
  [Link](https://github.com/MoonshotAI/kimi-cli/pull/2407)
  *Summary:* Fixes #2406. Moonshot API returns `function.arguments` with double-encoded JSON: the outer layer is decoded by `json.loads`, but inner array/object values remain as strings. The patch adds a pass to decode inner values, unblocking tools like `SetTodoList`. No merge yet.

## Feature Request Clusters
A few recurring themes emerged from today’s issue stream:

- **OpenAI-compatible API endpoint** – Issue #2208 (from May 9, but still open) requests that the Kimi Code API be exposed as an OpenAI-compatible endpoint. This would allow integration with tools like Cursor. One user (janeza2) expressed strong interest, but the thread has only 4 comments and no maintainer input.

- **Session and context control improvements** – Multiple requests around configurable behavior: #2384 (connect timeout), #2411 (thinking lines window), and #2413 (image re-injection) all point to a desire for finer-grained session management.

- **Autonomous/agentic workflows** – #2404 (/goal command) joins earlier discussions about reducing manual confirmation steps. The community appears interested in more “set and forget” interaction modes.

## Developer Pain Points
Recurring frustrations from today’s data:

1. **Login reliability** – Issue #2403 and #2410 both report authentication failures on Linux after v1.46. Users must downgrade or restart multiple times to reconnect.

2. **ConnectTimeout on large contexts** – #2384 highlights a hardcoded timeout that breaks long-session usage. No configuration escape hatch exists.

3. **Tool-call JSON handling** – #2405 and #2406 reveal that the Moonshot API and the CLI client disagree on tool-call argument format, leading to Pydantic validation errors and 400s. These are blocking for any workflow using tools with array/object parameters.

4. **Command hangs** – #2412 (kimi acp) and #2408 (subagent timeout) both describe scenarios where the CLI becomes unresponsive, requiring forced termination. These affect basic usability.

5. **Session contamination** – #2413 shows that restarting the CLI can pull in stale image context, corrupting ongoing conversations. No manual reset mechanism documented.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest – 2026-06-01

## Today's Update Brief
No new releases landed in the last 24 hours. Issue and PR activity remains high, with 50 issues and 50 PRs updated. Prominent themes include LLM model compatibility (Gemma 4 tool-calling, Opus 4.8 dev-branch bugs), memory problems, permission-UI bugs, and several critical TUI stability fixes. Two community PRs (`feat: auto-accept mode`, `fix: honor v2 session list filters`) reached closable state.

---

## Releases
No new versions published in the last 24 hours.

---

## Hot Issues

1. **[#29079 – GPT Models take too long to respond](https://github.com/anomalyco/opencode/issues/29079)**
   *Workflow*: Using GPT models (e.g. GPT‑5.4 with `xhigh`) for simple commands.
   *Impact*: Response times vary wildly – seconds to minutes – reducing developer productivity.
   *Community*: 114 comments, 48 👍. High attention; many users sharing logs but no fix committed yet.

2. **[#20695 – Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)**
   *Workflow*: All interactions; memory grows unbounded.
   *Impact*: Causes crashes or extreme slowdowns. Maintainers ask users for heap snapshots, not AI suggestions.
   *Community*: 83 comments, 60 👍. Central coordination point.

3. **[#20995 – Gemma 4 (e4b) tool calling fails via Ollama OpenAI-compatible API](https://github.com/anomalyco/opencode/issues/20995)**
   *Workflow*: Running Gemma 4 locally via Ollama; model returns `tool_calls` but OpenCode ignores them.
   *Impact*: Local LLM users cannot use tool calling at all.
   *Community*: 19 comments, 45 👍. Strong demand for local model parity.

4. **[#21034 – Gemma‑4 26b/31b interaction issues leading to tool loops/failures](https://github.com/anomalyco/opencode/issues/21034)**
   *Workflow*: Same as above, with latest engine/tokenizer patches still broken.
   *Impact*: Unusable for tool-driven tasks.
   *Community*: 17 comments, 18 👍. Deeper investigation – not just streaming issue.

5. **[#29786 – Opus 4.8 bug in dev branch](https://github.com/anomalyco/opencode/issues/29786)**
   *Workflow*: Using Opus 4.8 model on the dev branch.
   *Impact*: Crashes or error messages from sub-agent (screenshot attached).
   *Community*: 16 comments, 3 👍. Possibly a regression.

6. **[#25940 – TUI crashes entire terminal session on open](https://github.com/anomalyco/opencode/issues/25940)**
   *Workflow*: Launching opencode in any directory.
   *Impact*: Complete terminal session kill, even outside git repos.
   *Community*: 9 comments, 2 👍. Reopened issue – stability blocker.

7. **[#27436 – Permission required: cannot select Allow/Reject](https://github.com/anomalyco/opencode/issues/27436)**
   *Workflow*: Agent requests directory/file permission; UI buttons unclickable or stuck in loop.
   *Impact*: Session freezes; user cannot continue.
   *Community*: 8 comments, 2 👍. Frustration reported.

8. **[#9070 – Feat: YOLO Mode (skip permission prompts)](https://github.com/anomalyco/opencode/issues/9070)**
   *Workflow*: Power users wanting fast, trust‑based interaction.
   *Impact*: No built-in equivalent to `--dangerously-skip-permissions`.
   *Community*: 7 comments, 3 👍. Closed but community interest remains (see also PR #12633).

9. **[#21354 – `read_file` tool not available with Gemma 4 (Ollama)](https://github.com/anomalyco/opencode/issues/21354)**
   *Workflow*: Asking local model to read a file; model searches for `read_file` tool but OpenCode doesn’t expose it.
   *Impact*: Local model cannot read files. Works with OpenAI models.
   *Community*: 7 comments, 2 👍. Tied to #20995.

10. **[#11532 – AGENTS.md not loaded after `/new`](https://github.com/anomalyco/opencode/issues/11532)**
    *Workflow*: Running `/new` to reset conversation; project‑specific `AGENTS.md` is not re-read automatically.
    *Impact*: User must manually ask to reload.
    *Community*: 22 comments, 16 👍. Closed as expected behavior? Debate continues.

---

## Key PR Progress

1. **[#30155 – fix(session): aggregate status across child directories](https://github.com/anomalyco/opencode/pull/30155)**
   Closes #30094. `GET /session/status` now includes sessions running in child project directories.

2. **[#29666 – fix(opencode): enforce storage path invariants](https://github.com/anomalyco/opencode/pull/29666)**
   Stores all paths in forward‑slash form; fixes empty session list on Windows (backslash vs. slash mismatch).

3. **[#30153 – feat: save file attachments to disk before model processing](https://github.com/anomalyco/opencode/pull/30153)**
   Saves uploaded images/PDFs to disk before sending to text‑only models, preventing unrecoverable attachment errors.

4. **[#30147 – fix: honor v2 session list filters](https://github.com/anomalyco/opencode/pull/30147)**
   Passes `roots`, `start`, `path` filters through to session service. Includes test.

5. **[#28071 – [beta] feat: add well‑known auth service](https://github.com/anomalyco/opencode/pull/28071)**
   Core `AuthWellKnown` service with legacy migration and `{env:...}` / `{file:...}` substitution support.

6. **[#29901 – feat(core): add Snowflake Cortex provider](https://github.com/anomalyco/opencode/pull/29901)**
   Adds OpenAI‑compatible Snowflake Cortex support (needs three code changes beyond `models.dev`).

7. **[#29928 – fix(desktop): collapse full‑context git diffs](https://github.com/anomalyco/opencode/pull/29928)**
   Fixes #29768, #21068. Desktop Git Changes view now shows collapsed diffs instead of rendering entire files.

8. **[#30046 – fix(session): preserve Anthropic thinking signature across different model](https://github.com/anomalyco/opencode/pull/30046)**
   Closes #22813. Prevents `thinking blocks cannot be modified` errors in multi‑turn conversations with extended thinking.

9. **[#26861 – fix(tui): old messages disappearing during long sessions](https://github.com/anomalyco/opencode/pull/26861)**
   Closes #7380. Adds lazy‑scroll loading: scroll up loads 50 older messages; prevents message trimming.

10. **[#12633 – [contributor, beta] feat(tui): add auto‑accept mode for permission requests](https://github.com/anomalyco/opencode/pull/12633)**
    Adds toggleable auto‑edit mode (`shift+tab`) that auto‑accepts edit permissions while still prompting for others. Long‑running feature.

---

## Feature Request Clusters

### Permission / Workflow Speed
- **YOLO Mode** (#9070) and **auto‑accept mode** (PR #12633) both aim to bypass or streamline permission prompts for power users. Community clearly wants a faster, less interruptive workflow.

### Rule & Context Management
- **Glob‑based rules** (#4716) – users want to set per‑pattern rules (e.g., `*.test.ts` → “write tests first”) without manually editing `AGENTS.md`.
- **AGENTS.md auto‑loading after `/new`** (#11532) – request to automatically reload project context on session reset.

### Desktop / TUI UX
- **Minimize to tray** (#18134) – expecting close button to hide app, not exit.
- **Re‑add “Open in external editor”** (#30135) – the TUI rewrite removed this feature; power users want it back.

### Session / Data Management
- **Session list filtering** (PR #30147) – ability to filter by root, start time, path.
- **Storage invariants** (PR #29666) – Windows path fixes indicate underlying desire for cross‑platform reliability.

---

## Developer Pain Points

1. **Local LLM tool‑calling instability** – Gemma 4 (via Ollama) consistently fails to use tools (`tool_calls` not recognized) or enters tool loops. Three separate high‑traffic issues (#20995, #21034, #21354) with 45+ upvotes each.
2. **Memory leaks / bloat** – Widespread enough to warrant a megathread (#20695, 60 👍). Users asked to provide heap snapshots; no official fix yet.
3. **Permission prompt UI bugs** – Buttons unclickable, infinite loops, session freezes (#27436, #30160). Directly blocks usage.
4. **Thinking block signature errors** – Anthropic extended thinking breaks in multi‑turn (#18254, #22813). The fix in PR #30046 is pending merge.
5. **TUI stability / regression** – Crashes on startup (#25940), old messages disappearing (#26861), mouse tracking printed after close (#28358). Multiple reports suggest the TUI rewrite introduced new bugs.
6. **Edit tool interruption** – Consecutive edits to the same file fail with `[Tool execution was interrupted]` since v1.15.x (#28011). User trust eroded.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest – 2026-06-01

## Today's Update Brief

The past 24 hours saw a nightly release (v0.17.0-nightly.20260601) and active issue/PR traffic with 21 issues and 50 pull requests updated. The community focused on daemon-mode gaps, telemetry hardening, authentication problems in JetBrains IDEs, and memory pressure diagnostics. Multiple telemetry-related PRs landed or advanced, reflecting ongoing observability improvements.

## Releases

- **v0.17.0-nightly.20260601.1c48e4121**
  A nightly build based on the v0.17.0 release branch. Contains a fix for a false “compressed turn” error during mid-turn message rewind (`fix(rewind)`). No stable release today.
  [Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.17.0-nightly.20260601.1c48e4121)

## Hot Issues

1. **[#4514 – `qwen serve` daemon capability gaps](https://github.com/QwenLM/qwen-code/issues/4514)** (10 comments)
   Tracks remaining gaps in the HTTP/SSE surface for remote clients. Community discussing session lifecycle APIs and ACP child process management. High interest from headless/deployment users.

2. **[#4493 – Rider cannot log in to Qwen Code](https://github.com/QwenLM/qwen-code/issues/4493)** (9 comments)
   OAuth redirect loop on JetBrains Rider; users unable to use Alibaba Cloud token plan. Affected workflow: authentication for IDE plugin. Maintainers triaged as `scope/oauth`, `scope/ide`.

3. **[#3881 – Local Qwen3.6-27b model spams `/` on first prompt](https://github.com/QwenLM/qwen-code/issues/3881)** (7 comments, closed)
   Model returns repeated `/` until token limit when used with local deployment (e.g., LM Studio). Fix likely in nightly; closed today.

4. **[#4663 – Add MiniMax-M3 model and checkbox UI](https://github.com/QwenLM/qwen-code/issues/4663)** (6 comments)
   Feature request to replace comma-separated free-text model IDs with multi-select checkboxes in the MiniMax API key setup flow. Community wants better UX.

5. **[#4554 – OpenTelemetry coverage for `qwen serve` daemon](https://github.com/QwenLM/qwen-code/issues/4554)** (4 comments)
   Proposal to add end-to-end OTel instrumentation for the daemon path (HTTP routing, session lifecycle, bridge queueing). Part of a broader telemetry push.

6. **[#4609 – DOMException error with Ollama local model](https://github.com/QwenLM/qwen-code/issues/4609)** (4 comments, closed)
   `[API Error: Value of "this" must be of DOMException]` on v0.16.2 when connecting to local Qwen model via Ollama. Closed as fixed – root cause likely in error handling.

7. **[#4657 – Qwen Code + Ollama + Qwen 3.6 cannot complete tasks](https://github.com/QwenLM/qwen-code/issues/4657)** (3 comments)
   Task creation (e.g., generate HTML ebook) fails despite previous time‑out fixes. User reports that the model returns incomplete or no responses.

8. **[#4330 – MCP-restart timeout coupling](https://github.com/QwenLM/qwen-code/issues/4330)** (2 comments, closed)
   Follow-up to enforce shared SDK/server timeout constants for MCP restart. Structural fix deferred; later resolved via PR #4658.

9. **[#4631 – Completed tasks remain visible](https://github.com/QwenLM/qwen-code/issues/4631)** (2 comments, closed)
   Korean user reports that finished tasks (daemon UI) do not disappear. UI issue in v0.17.0. Closed, likely fixed.

10. **[#4637 – JetBrains OAuth dead-end due to discontinued `qwen-oauth`](https://github.com/QwenLM/qwen-code/issues/4637)** (2 comments, closed, P1)
    Key bug: ACP auth methods still return `qwen-oauth` even after it was removed, trapping users in a loop. Fix already merged – high impact for Rider/IntelliJ users.

## Key PR Progress

1. **[#4655 – Web Shell UI improvements](https://github.com/QwenLM/qwen-code/pull/4655)**
   Major overhaul: subagent rendering fix, virtual scrolling via `@tanstack/react-virtual`, WeakMap cache, and scroll-follow rewrite by @ytahdn.

2. **[#4650 – Persist `/memory` toggle state](https://github.com/QwenLM/qwen-code/pull/4650)**
   Fixes memory dialog toggles (auto-memory, auto-dream, auto-skill) from reverting after dialog close. Uses live merged settings instead of config snapshot.

3. **[#4654 – Auto-dump memory diagnostics on pressure](https://github.com/QwenLM/qwen-code/pull/4654)**
   When `MemoryPressureMonitor` detects hard/critical pressure, writes diagnostics JSON to `.qwen/<project>/diagnostics/` before cleanup. Survives OOM crashes.

4. **[#4656 – Project MCP pending approval](https://github.com/QwenLM/qwen-code/pull/4656)**
   Adds `.mcp.json` discovery with safe pending‑approval state. Project MCP servers are visible but do not connect until approved. Addresses security concerns.

5. **[#4476 – AUTO mode denial observability and caps](https://github.com/QwenLM/qwen-code/pull/4476)**
   Structured reasoning boundaries, `PermissionDenied` hook for classifier‑blocked calls, and cumulative denial cap. Improves Auto Mode safety semantics.

6. **[#4563 – Extract DaemonWorkspaceService from AcpSessionBridge](https://github.com/QwenLM/qwen-code/pull/4563)**
   Refactors daemon architecture: renames `HttpAcpBridge` to `AcpSessionBridge`, extracts workspace‑level operations into a new service. Helps maintainability.

7. **[#4653 – Respect configurable agent ignore files](https://github.com/QwenLM/qwen-code/pull/4653)**
   Teaches Qwen Code to honour `.agentignore` and `.aiignore` in addition to `.qwenignore`. Adds `context.ignoreFilePatterns` configuration.

8. **[#4662 – Include submodule files in file search](https://github.com/QwenLM/qwen-code/pull/4662)**
   Fixes git‑backed file crawler to include tracked files inside submodules (while skipping the gitlink itself). Regression test added.

9. **[#4658 – Enforce MCP-restart timeout coupling](https://github.com/QwenLM/qwen-code/pull/4658)**
   Extracts shared timeout constants into `@qwen-code/acp-bridge/mcpTimeouts` (300s server, 30s client headroom). Closes #4330.

10. **[#4661 – Per-prompt traceId for bounded traces](https://github.com/QwenLM/qwen-code/pull/4661)**
    Each interaction now gets a fresh traceId instead of sharing a session‑level one. Adds `SessionIdSpanProcessor` to stamp `session.id` on exported spans. Enables proper trace tree separation.

## Feature Request Clusters

- **Telemetry & Observability**
  Multiple requests target OpenTelemetry completeness: daemon coverage (#4554), ACP session tracing (#4602), daemon file logger (#4548), per‑prompt traceId (#4661), and hardening (#3731). The maintainer @doudouOUC is driving most of these – expect continued progress.

- **Authentication & IDE Integration**
  Several issues revolve around OAuth flows, especially on JetBrains IDEs (#4493, #4637). Also feature requests for API key UI improvements (e.g., MiniMax checkbox selection #4663) and token plan integration.

- **Memory / Crash Diagnostics**
  Users report OOM crashes during long sessions. Feature requests for auto‑dump diagnostics (#4651) and better memory pressure monitoring (already in progress via #4654). The community wants crash‑resilient diagnostics.

- **Hooks & Instructions**
  Request for `InstructionsLoaded` hook (#4664) to allow custom actions when instruction files are loaded. Also enhancements to hooks management UI (#4545).

- **UI / UX Polish**
  Issues about task visibility (#4631), statusline preset ordering (#4633), model display behavior, and approval mode indicators (#4600). Community values clear visual feedback for auto‑mode states.

## Developer Pain Points

- **OAuth login dead-ends in JetBrains IDEs** – Users are stuck in redirect loops or cannot select the correct authentication method. Fix for `qwen-oauth` only landed today; users on older versions remain affected.
- **Memory OOM crashes** – Long sessions with large context cause heap exhaustion; process dies without diagnostic data. The auto‑dump PR aims to mitigate this.
- **Inconsistent model compatibility** – Local models (Ollama, LM Studio) exhibit odd behaviors: repeated characters, incomplete task completions, DOMException errors. Providers differ in API compliance.
- **Side-query language output ignores user settings** – Commands like `/recap`, `/title` and tool‑use summaries ignore the configured output language (e.g., Chinese → English). A reported bug (#4494) that frustrates non‑English users.
- **API key / model selection friction** – Users want multi‑select UI for model IDs instead of comma‑separated text inputs, especially for providers like MiniMax. The current flow is error‑prone.

*All links are to the QwenLM/qwen-code repository on GitHub.*

</details>