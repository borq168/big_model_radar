# AI CLI Tools Community Digest 2026-06-08

> Generated: 2026-06-08 02:45 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report — 2026-06-08

## 1. Daily Cross-Tool Overview

Today’s activity was characterized by high issue and PR volume across most tools but no major releases (except one Qwen Code nightly). OpenCode and Qwen Code led in pull request activity (50 and 44 respectively), while Claude Code and OpenAI Codex faced the most contentious bugs—usage limit confusion on Max subscriptions and false rate-limit alerts. Several tools share recurring pain points: opaque billing, fragile model compatibility (especially with new model versions), and the absence of native Linux desktop clients. Agent reliability—hangs, compaction failures, and misreported task completion—remains a cross-cutting concern.

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Releases |
|------|----------------------|-------------------|----------|
| Claude Code | 50 | 2 | 0 |
| OpenAI Codex | 30 | 20 | 0 |
| Gemini CLI | ~10 (hot issues only) | 13 | 0 |
| GitHub Copilot CLI | 10 | 1 | 0 |
| Kimi Code CLI | 7 | 1 | 0 |
| OpenCode | 50 | 50 | 0 |
| Qwen Code | 9 | 44 | 1 (nightly) |

*Note: Gemini CLI did not report total issue update count; only hot issues were listed.*
*OpenCode and Qwen Code tallies include all updates (open/closed) across issues and PRs.*

## 3. Shared Feature Directions

Several requirements appeared across two or more tool communities today:

- **Linux desktop client** – **Claude Code** (#65697, 313 👍) and **OpenAI Codex** (#11023, 510 👍) both have highly upvoted requests for native Linux desktop builds. **GitHub Copilot CLI** has a related license-packaging question (#2294). No tool ships an official Linux desktop app.

- **Remote control / session handoff** – **Claude Code** has a long-running bug with idle disconnects (#32982). **Kimi Code** requests multi-device session handoff (#2269). **Qwen Code** introduced a `/fork background-agent` PR (#4780). **Gemini CLI** merged a `/teleport` command for moving sessions between machines (PR #22585).

- **In-session model switching** – **GitHub Copilot CLI** (#3709) and **Qwen Code** (#1206) both want the ability to switch between hosted and BYOK/local models without restarting a session. **Claude Code** (#46416) asks for third-party provider support. **OpenCode** reports failures with Gemma 4 models (#20995, #21034).

- **Memory/persistence improvements** – **Claude Code** users report memory directives are not consistently honored (#66143). **Gemini CLI** has multiple auto-memory bugs (indefinite retries #26522, malformed patches #26523). **Qwen Code** added user-level auto-memory (PR #4764).

- **Agent safety / sandboxing** – **OpenCode** (#2242, 51 👍) is the highest-upvoted request for agent sandboxing. **Gemini CLI** asks for built-in safeguards against destructive git operations (#22672). **Qwen Code** hardened AUTO mode against self-modification (PR #4572).

## 4. Differentiation Analysis

- **Claude Code** remains the most community-driven with a large user base, but its issue tracking is dominated by billing and regression bugs. The tool emphasises remote control and multi-device collaboration, yet reliability is suffering (auto-compact, image handling, content policy false positives). Maintainer responses on the top usage-limit bug (#16157) are absent.

- **OpenAI Codex** has a strong enterprise and macOS focus but struggles with Windows performance and MCP OAuth token lifecycle. Its PR activity is balanced between security fixes and feature additions (SDK goal turns, thread filtering). The lack of a Linux desktop client is the single highest upvoted request. It also has a distinct “non-programmer mode” request (#26556).

- **Gemini CLI** is the most infrastructure-focused: PRs target telemetry truncation, binary MIME sniffing, MCP compliance, and evaluation reliability. It has the highest count of P1 bugs (agent hangs, subagent misreporting) and shows active maintainer triage. The `auto` model alias and `/teleport` command indicate a focus on session portability and preview access.

- **GitHub Copilot CLI** has the smallest community but addresses niche enterprise networking (SSL inspection, OTel mTLS) and platform fringe cases (FreeBSD, ReFS). Its feature set is lean; model flexibility and rate-limit transparency are top community asks.

- **Kimi Code CLI** is in a painful rebranding transition from `kimi-cli` to `kimi-code`. Activity is very low, and community sentiment is negative (issue #2381 closed but expresses frustration). No new features; all reports are migration failures or core agent bugs.

- **OpenCode** stands out for breadth of model provider support (Gemma, Ollama, Bedrock, Azure) and high community engagement (50 issues + 50 PRs). It has strong demand for sandboxing and TUI improvements. PRs are actively reviewed and merged.

- **Qwen Code** is the most feature-forward today: 44 PRs, including large efforts on ACP transport, workflow tool, background agents, and memory. It is the only tool with a nightly release. Focus is on building a plugin/daemon ecosystem rather than fixing regressions.

## 5. Community Activity Notes

- **Highest overall activity**: **OpenCode** (100 issues+PRs updated) and **Qwen Code** (53 updates) lead. **OpenCode** also had the most comments on a single issue (#2242 sandbox, 63 comments).

- **Highest user engagement on a single issue**: **Claude Code** #16157 (1,476 comments, 691 👍) dwarfs all others, but with no maintainer resolution.

- **Most responsive maintainers**: **Qwen Code** and **Gemini CLI** show active triage (merged PRs, closed issues with fixes). **OpenCode** has many open PRs but also several merged today. **Claude Code** and **Copilot

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-06-08

## Today’s Update Brief
No new releases were published in the past 24 hours. Community activity remains high, with 50 open or updated issues and only 2 PRs (one trivial). The most discussed topic – a usage-limit bug on Max subscriptions (#16157) – continues to dominate, now at 1,476 comments and 691 reactions. A handful of regressions and content-policy false positives are drawing attention across macOS, Windows, and Linux platforms.

## Releases
*None in the last 24 hours.*

---

## Hot Issues (10 selected by activity and impact)

### 1. [#16157 – Instantly hitting usage limits with Max subscription](https://github.com/anthropics/claude-code/issues/16157)
- **Affected workflow:** Max subscribers see their usage drained within minutes, often without completing meaningful work.
- **Impact:** Blocks normal use; users report being charged for unused service.
- **Community reaction:** 1,476 comments, 691 👍 – the highest-traffic issue in the repository. No maintainer resolution recorded yet.

### 2. [#60366 – Saying “hi” returns “API Error: … violates our Usage Policy”](https://github.com/anthropics/claude-code/issues/60366)
- **Affected workflow:** Even trivial prompts (e.g., “hi”) are rejected with a content-policy error.
- **Impact:** Makes the tool unusable until the user switches models or API keys; suggests an aggressive safety classifier.
- **Community reaction:** 81 comments, 20 👍. Several users confirm the bug is intermittent and model-dependent.

### 3. [#63896 – Compaction error: “Usage credits required for 1M context”](https://github.com/anthropics/claude-code/issues/63896)
- **Affected workflow:** When a session reaches 1M context, auto-compaction fails because the user’s Max subscription credits are not recognised.
- **Impact:** Sessions stall mid-work; the error message is confusing (suggests turning on credits at claude.ai/settings).
- **Community reaction:** 36 comments, 21 👍. Windows users are particularly affected.

### 4. [#45937 – Dispatch main conversation permanently offline despite working Cowork tasks](https://github.com/anthropics/claude-code/issues/45937)
- **Affected workflow:** The main Dispatch conversation shows “offline” on mobile/desktop clients, yet individual Cowork tasks function correctly.
- **Impact:** Breaks the primary chat interface for remote control sessions.
- **Community reaction:** 33 comments, 12 👍. The bug has been open since April 2026 with no fix.

### 5. [#63015 – Auto-compact never triggers despite statusline reporting “100% context used”](https://github.com/anthropics/claude-code/issues/63015)
- **Affected workflow:** On v2.1.153 with Max subscription and 200K mode, the statusline shows full context but no compaction event fires.
- **Impact:** Sessions grow unbounded, eventually failing or consuming excessive tokens.
- **Community reaction:** 25 comments, 17 👍. A regression that makes the “auto-compact” feature non-functional.

### 6. [#65697 – Feature request: Official Claude Desktop build for Linux (Ubuntu/Debian)](https://github.com/anthropics/claude-code/issues/65697)
- **Affected workflow:** Linux users must use the CLI or third-party wrappers; no native desktop client exists.
- **Impact:** Impedes adoption on Linux, especially in enterprise and dev environments.
- **Community reaction:** 23 comments, **313 👍** – the highest-reacted feature request. Strong demand.

### 7. [#25128 – Drag and drop not working in VS Code extension chat panel](https://github.com/anthropics/claude-code/issues/25128)
- **Affected workflow:** Dragging files into the VS Code chat panel does nothing; works fine in the terminal CLI.
- **Impact:** Regression from v2.1.6; blocks a common UX pattern for providing context.
- **Community reaction:** 19 comments, 39 👍. Users have consolidated multiple reports here.

### 8. [#62466 – Repeated “Image couldn’t be processed” API errors consuming usage limit](https://github.com/anthropics/claude-code/issues/62466)
- **Affected workflow:** When an image fails to process, Claude Code retries repeatedly, each attempt burning usage quota.
- **Impact:** Wastes subscription credits on non-functional requests.
- **Community reaction:** 18 comments, 16 👍. Users report being charged for failed operations.

### 9. [#32982 – Remote Control sessions die after ~20 min idle — server TTL ignores keepalives](https://github.com/anthropics/claude-code/issues/32982)
- **Affected workflow:** Remote Control sessions silently disconnect after 5–30 minutes of inactivity, even with keepalive mechanisms enabled.
- **Impact:** Forces users to restart sessions frequently; unreliable for long-running agent tasks.
- **Community reaction:** 12 comments, 59 👍. Affects interactive CLI, auto-RC, and agent modes.

### 10. [#63604 – Opus 4.8 repeatedly emits malformed tool_use blocks, entire response discarded](https://github.com/anthropics/claude-code/issues/63604)
- **Affected workflow:** When using Opus 4.8, the model sometimes generates broken tool_use XML, causing the entire response to be thrown away. Opus 4.7 works fine.
- **Impact:** Lost work; requires retrying prompts.
- **Community reaction:** 4 comments, 8 👍. A clear regression between model versions.

---

## Key PR Progress
Only two pull requests were updated in the last 24 hours:

- [#58673](https://github.com/anthropics/claude-code/pull/58673) – Trivial PR titled “s” (likely a test or accidental creation); no meaningful changes.
- [#39370](https://github.com/anthropics/claude-code/pull/39370) – **Closed.** Adds a `frontend-design-system` plugin that generates a design spec (wireframes, OKLCH color theory, tokens) before writing code. The PR is closed, so it was either merged (no merge label) or abandoned. No maintainer comments visible.

Overall PR activity is very low today.

---

## Feature Request Clusters
Recurring feature requests visible in today’s issue set:

- **Linux Desktop client** (#65697, 313 👍): Strong demand for an official `.deb`/`.rpm` build of the Claude Desktop app.
- **Higher pricing tiers / “100x Plan”** (#51141, closed): Users requesting a plan beyond Max (e.g., $600/month for ultra-high usage). The request was closed shortly after opening.
- **Accessibility & voice mode** (#42700): TTS readback of responses and voice support for Remote Control sessions.
- **Third-party provider support** (#46416): Context window detection fails for Anthropic-compatible endpoints (e.g., MiniMax). Users want provider-agnostic configuration.
- **Memory system improvements** (#59529, #66143): Memory directives are loaded but not consistently honoured; facts are forgotten across sessions despite memory entries.

---

## Developer Pain Points
Recurring frustrations observed across today’s data:

1. **Subscription & billing confusion** – Both #16157 (Max usage limits) and #63896 (compaction credit errors) indicate that the Max plan’s behaviour around context and caps is opaque and buggy. Users feel they are overcharged or blocked unexpectedly.

2. **Overly aggressive content policy** – #60366 (“hi” triggers policy violation) suggests false positives are a significant UX blocker, especially for new users.

3. **Regression density** – Multiple issues point to regressions introduced in recent versions (v2.1.150 scroll wheel, v2.1.153 auto-compact, v2.1.6 VS Code drag-and-drop). Quality control appears to be lagging behind release velocity.

4. **Cross-platform gaps** – Linux users lack a desktop app (#65697). Windows users face unique bugs (image paste #66119, MCP npx spawn #58510, compaction #63896). macOS users report Remote Control offline (#45937) and idle disconnects (#32982).

5. **MCP and plugin ecosystem friction** – Windows MCP servers using bare `npx` fail (#58510), bubblewrap sandbox breaks on merged-usr systems (#64799), and deferred-tool refresh is broken (#66084). The plugin/MCP experience feels fragile.

6. **Image handling is unreliable** – Failed images consume quota via retries (#62466), oversized images poison all subsequent processing (#66141), and Windows lacks clipboard image paste (#66119).

7. **Memory is forgetful** – Users report that Claude Code repeatedly forgets facts (server IPs, deploy steps) across sessions even after explicitly saving memory entries (#66143, #59529). This undermines trust in long-term context.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest – 2026-06-08

## Today's Update Brief
No new releases were published in the last 24 hours. Activity remains high with 30 open issues and 20 pull requests updated today, covering a wide range of bugs in the desktop app, CLI, and extensions – especially on Windows and Mac. Five new issues were filed today (including #26929, #26936), and six PRs were opened, focusing on plugin caching, SDK improvements, and security advisories.

## Releases
*No new releases in the last 24 hours.*

## Hot Issues

1. **[#11023 – Codex desktop app for Linux](https://github.com/openai/codex/issues/11023)**
   *Enhancement* – 510 👍, 100 comments. Users strongly request a native Linux desktop app. Many are blocked by Mac performance issues and see Linux as a viable alternative.
   *Impact:* High interest; community eager for official Linux support.

2. **[#25715 – Codex App unusably slow with WSL as agent environment](https://github.com/openai/codex/issues/25715)**
   *Bug / Windows / Performance* – 34 👍, 36 comments. Routine turns take minutes on Windows with WSL2. Users report the app becomes unresponsive during agent operations.
   *Impact:* Blocks Windows developers relying on WSL.

3. **[#4003 – Patched files have mixed line endings on Windows](https://github.com/openai/codex/issues/4003)**
   *Bug / Windows / Tool-calls* – 48 👍, 20 comments. Codex does not preserve original line endings when editing files, causing diff noise and broken builds.
   *Impact:* Affects all Windows users; longstanding issue (since Sep 2025).

4. **[#12299 – “You’ve hit your usage limit” despite 10% rate limit remaining](https://github.com/openai/codex/issues/12299)**
   *Bug / Extension / Rate-limits* – 1 👍, 19 comments. False positive on usage limit prevents legitimate work. Users forced to wait.
   *Impact:* Erodes trust in quota reporting; disrupts workflow.

5. **[#25719 – macOS syspolicyd / trustd CPU and memory runaway](https://github.com/openai/codex/issues/25719)**
   *Bug / macOS / Performance* – 18 👍, 19 comments. Codex Desktop triggers persistent high CPU/memory from macOS security daemons, making system sluggish.
   *Impact:* Severe performance degradation on macOS.

6. **[#26892 – gpt-5.5 listed as available but requests fail with 404 “Model not found”](https://github.com/openai/codex/issues/26892)**
   *Bug / Windows / CLI* – 9 👍, 17 comments. Model metadata shows gpt-5.5 as available, but actual API calls return 404. gpt-5.4 works fine.
   *Impact:* Breaks model selection for affected users (possibly region-based).

7. **[#11881 – GitHub PR review: “To use Codex here, create a Codex account…” despite connector enabled](https://github.com/openai/codex/issues/11881)**
   *Bug / Auth / GitHub Action* – 28 👍, 16 comments. Authentication failure even after linking GitHub account. PR review integration unusable.
   *Impact:* Blocks automated code review workflows.

8. **[#25500 – Codex Desktop Projects sidebar shows “No chats” for projects with older conversations](https://github.com/openai/codex/issues/25500)**
   *Bug / App / Session* – 0 👍, 14 comments. Existing project conversations disappear from UI but remain on disk. Users cannot resume projects.
   *Impact:* Data visibility loss; frustrating for project organisation.

9. **[#17265 – MCP OAuth tokens not auto-refreshed even with stored refresh token](https://github.com/openai/codex/issues/17265)**
   *Bug / Auth / MCP* – 20 👍, 13 comments. Access tokens expire silently; tool calls fail with auth errors until manual re-authentication.
   *Impact:* Breaks MCP-based toolchains; requires constant intervention.

10. **[#23131 – TypeScript SDK JSONL parser fails on multiline MCP tool results](https://github.com/openai/codex/issues/23131)**
    *Bug / SDK / CLI* – 0 👍, 11 comments (with patch available). Multiline outputs from MCP tools cause parse failures. A community patch is ready.
    *Impact:* Blocks SDK usage for tools that return multi-line content.

## Key PR Progress

1. **[#26918 – Address newly reported Rust advisories (RUSTSEC-2026-0173, -0097)](https://github.com/openai/codex/pull/26918)**
   Security fix: allows one known advisory pending upstream release, updates `rand` to fix RUSTSEC-2026-0097.

2. **[#26934 – Prune stale curated plugin caches](https://github.com/openai/codex/pull/26934)**
   Fix: removes cached plugins no longer in the curated marketplace, preventing users from loading outdated or removed plugins.

3. **[#26920 – Add Python SDK goal turns](https://github.com/openai/codex/pull/26920)**
   Feature: exposes `goal=True` on `run` and `turn` in synchronous and async Python SDK, with atomic goal persistence and aggregated results.

4. **[#26662 – Filter threads by parent in app-server](https://github.com/openai/codex/pull/26662)**
   Feature: adds `thread/list` query by parent thread ID, enabling subagent orchestration and reliable child thread recovery.

5. **[#25232 – Derive window generation from effective rollout lineage](https://github.com/openai/codex/pull/25232)**
   Fix: improves `x-codex-window-id` to correctly identify compaction-window lineage after rollbacks, resumes, and forks.

6. **[#25976 – Use stable item IDs for Responses API calls](https://github.com/openai/codex/pull/25976)**
   Feature: introduces stable IDs for items round-tripping between Codex and Responses API, improving state tracking and debugging.

7. **[#26287 – Refine Guardian prompt for indirect exfiltration](https://github.com/openai/codex/pull/26287)**
   Security: updates policy wording to better guard against indirect data exfiltration while preserving trusted-user approvals for sensitive data.

8. **[#24982 – Honor parent approvals for intercepted execs](https://github.com/openai/codex/pull/24982)**
   Fix: prevents repeated approval prompts for child processes when the parent exec session already has an approved sandbox override.

9. **[#26852 – Avoid blocking connection cleanup in app-server](https://github.com/openai/codex/pull/26852)**
   Fix: unblocks remote-control session reconnection by not awaiting stuck RPCs during connection cleanup.

10. **[#26831 – Add global instructions contributor API](https://github.com/openai/codex/pull/26831)**
    Feature: provides a small extension point for hosts to supply global instructions without coupling to core config loading.

## Feature Request Clusters

- **Linux Desktop App** – Issue #11023 (510 👍) is the single most upvoted request, with strong community demand for a native Linux build of the Codex desktop app.
- **Non‑programmer / General User Mode** – Issue #26556 proposes a simplified UI and workflow for domain experts who cannot inspect diffs, logs, or test output. No official response yet.

## Developer Pain Points

- **Windows performance and stability** – Multiple bugs (WSL slowness #25715, memory crashes #17083, mixed line endings #4003, plugin cache path issues #24268, Computer Use plugin unavailability #25962) make the Windows experience fragile.
- **Rate limit and quota confusion** – False “usage limit reached” alerts (#12299) and unexplained quota drains (#26512, #26936) undermine trust in billing and usage tracking.
- **MCP OAuth token lifecycle** – Tokens are not automatically refreshed (#17265) and do not persist across restarts (#15122), breaking MCP toolchains.
- **Model availability inconsistency** – gpt-5.5 appears locally but fails with 404 (#26892, #26916), affecting users in specific regions or after updates.
- **Plugin/connector reliability** – Bundled plugins (Chrome, Computer Use) frequently disappear after restart (#25809, #26929); connectors like Notion expose non-functional tools (#19924).
- **Context window fatality** – Running out of room in the Codex context window kills the entire chat thread with no recovery path (#7808).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-08

## Today's Update Brief

Maintainer activity remains focused on bug fixes and infrastructure hardening, with 13 PRs updated and no new releases in the last 24 hours. A high-profile 429 capacity error on `gemini-3.1-pro-preview` remains under investigation, while several long-standing agent hang and binary handling issues saw merged fixes. The community flagged a documentation issue on the changelog page, and multiple memory-system bugs are being actively tracked.

## Releases

No new releases in the last 24 hours.

## Hot Issues

**1. [#25179 — Frequent 429 "No capacity available for model gemini-3.1-pro-preview" from simple gemini -p command](https://github.com/google-gemini/gemini-cli/issues/25179)**
*Priority P2 | Bug | Status: Need Information*
A user reports repeated 429 errors on trivial prompts targeting `gemini-3.1-pro-preview` via `cloudcode-pa.googleapis.com`. The issue is closed as potential duplicate with need-information status. Community reaction: 9 comments, 2 👍. Affects any developer relying on `-p` for quick queries.

**2. [#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)**
*Priority P1 | Bug | Status: Need Retesting*
The generalist agent hangs indefinitely on simple tasks (e.g., folder creation) when invoked via subagent delegation. The workaround is to instruct the model not to defer. 8 👍 from the community indicates widespread frustration. The maintainer label suggests active triage.

**3. [#22323 — Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption](https://github.com/google-gemini/gemini-cli/issues/22323)**
*Priority P1 | Bug*
`codebase_investigator` subagent incorrectly reports `status: "success"` and `Termination Reason: "GOAL"` when it actually hit its max turn limit before performing any analysis. This defeats observability of agent workflow health. 6 comments, 2 👍.

**4. [#26522 — Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)**
*Priority P2 | Bug*
Auto Memory leaves low-signal sessions unprocessed because the extraction agent skips them, causing infinite retries. The fix requires marking sessions as processed even when skipped. 5 comments, part of a memory-system bug cluster.

**5. [#26523 — Surface or quarantine invalid Auto Memory inbox patches](https://github.com/google-gemini/gemini-cli/issues/26523)**
*Priority P2 | Bug*
Malformed `.patch` files (invalid hunks, escaped targets) are silently skipped by the memory inbox, while aggregate dismiss only removes valid patches. Pending patches accumulate, degrading background extraction performance. 3 comments.

**6. [#21983 — Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)**
*Priority P1 | Bug | Agent: Browser*
The browser subagent fails on Wayland display servers, reporting "GOAL" termination but producing no useful output. Blocks users on Linux with modern desktop environments. 4 comments, 1 👍.

**7. [#24246 — Gemini CLI encounters 400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)**
*Priority P2 | Bug*
When more than 128 tools are available (e.g., MCP integrations), the API returns a 400 error. The agent lacks tool-scoping logic to limit the enabled set. 3 comments, no workaround documented.

**8. [#22267 — Browser Agent ignores settings.json overrides (e.g., maxTurns)](https://github.com/google-gemini/gemini-cli/issues/22267)**
*Priority P2 | Bug*
The Browser Agent correctly reads `settings.json` during initialization but then ignores merged overrides for parameters like `maxTurns`. Forces users to edit agent-specific configs directly. 3 comments.

**9. [#22672 — Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)**
*Priority P2 | Customer Issue*
The agent occasionally executes destructive git operations (`git reset`, `--force`) when safer alternatives exist. Users request built-in safeguards for DB and version-controlled resources. 2 comments, 1 👍.

**10. [#27736 — GeminiCLI.com Feedback: changelog page issue](https://github.com/google-gemini/gemini-cli/issues/27736)**
*Priority P3 | Documentation Bug*
A filed issue on the geminicli.com changelog page with unclear description. Author references memory-system issue #26516 in additional context. 1 comment, created today.

## Key PR Progress

**1. [#27418 — Non-interactive shell respects `enableInteractiveShell: false` and improves native bridge stability](https://github.com/google-gemini/gemini-cli/pull/27418)**
*Priority P1 | Size L | CLOSED*
Fixes #27419 by ensuring `shellExecutionService.ts` honors the disable flag and handles non-UTF-8 bytes exceeding heap limits. Merged after nudge. Critical for users requiring strict non-interactive mode.

**2. [#27412 — Prevent model fabrication when read_file returns binary content](https://github.com/google-gemini/gemini-cli/pull/27412)**
*Priority P2 | Size M | CLOSED*
Fixes #27408: when `read_file` processes PDFs or other binaries, the function response now returns a bare descriptive string instead of letting the model hallucinate content. Merged.

**3. [#27733 — Sniff MCP image MIME types](https://github.com/google-gemini/gemini-cli/pull/27733)**
*Size M | CLOSED*
Corrects misreported WebP/PNG/JPEG/GIF MIME types by sniffing magic bytes before sending to the model. Adds regression coverage for image blocks. Merged today.

**4. [#27409 — Fix performance test timeout](https://github.com/google-gemini/gemini-cli/pull/27409)**
*Priority P1 | Size L | CLOSED*
Addresses CI flakiness in performance test suite. Merged. No further details in summary.

**5. [#27730 — Keep array tool results out of structuredContent](https://github.com/google-gemini/gemini-cli/pull/27730)**
*Priority P1 | Size S | OPEN*
Fixes #27725 by preventing `McpComplianceTransport` from copying JSON arrays into `structuredContent`, preserving original text content for array-valued tool results. Includes regression test.

**6. [#27729 — Truncate telemetry metric attributes to 1024 chars to prevent GCP export errors](https://github.com/google-gemini/gemini-cli/pull/27729)**
*Priority P2 | Size M | OPEN*
Fixes #27728: GCP Monitoring exporter enforces a 1024-character limit on attribute values. Without truncation, `gemini-cli` floods the terminal with stack traces on JSON output. Practical fix for enterprise telemetry users.

**7. [#27718 — Keep auto visible without preview access](https://github.com/google-gemini/gemini-cli/pull/27718)**
*Priority P2 | Size S | OPEN*
Fixes #27715: ensures the top-level `auto` model alias remains visible in `/model` when dynamic configuration is enabled, while still filtering preview-only aliases for non-preview users. Adds regression coverage.

**8. [#23647 — Implement Open Plugins agents support](https://github.com/google-gemini/gemini-cli/pull/23647)**
*Size M | CLOSED*
Implements automatic discovery, namespacing, and variable expansion for sub-agents defined in an Open Plugin's `agents/` directory. Merged; foundational for plugin ecosystem.

**9. [#22586 — Add programmatic search command for extensions](https://github.com/google-gemini/gemini-cli/pull/22586)**
*Size L | CLOSED*
Introduces `/extensions search <query>` to both ACP and interactive UI, enabling terminal-based extension discovery without the browser gallery. Merged.

**10. [#22585 — Add /teleport command for portable session management](https://github.com/google-gemini/gemini-cli/pull/22585)**
*Size XL | CLOSED*
Enables moving active agent sessions between machines (laptop → server, etc.), distinct from `/resume share` which exports only state. Merged; significant for multi-device workflows.

## Feature Request Clusters

**AST-Aware Tooling**
Three issues ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747)) propose integrating AST-aware file reads, search, and codebase mapping. The goal is to reduce token waste from misaligned reads and improve agent precision. Tools like AST grep and glyph are mentioned as starting points. This cluster has 7 total comments and is tracked in an epic.

**Agent Self-Awareness & Safety**
Multiple requests ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432), [#22672](https://github.com/google-gemini/gemini-cli/issues/22672), [#23571](https://github.com/google-gemini/gemini-cli/issues/23571)) ask for the agent to understand its own CLI flags, hotkeys, and destructive command risks. The community wants built-in guardrails against `git reset --force` or indiscriminate temp script generation. A combined 7 comments support this direction.

**Evaluation Infrastructure Stabilization**
Issues [#24353](https://github.com/google-gemini/gemini-cli/issues/24353), [#23166](https://github.com/google-gemini/gemini-cli/issues/23166), and [#23313](https://github.com/google-gemini/gemini-cli/issues/23313) call for more robust component-level evals, reducing test "bleed," and making steering tests always-pass. The team has generated 76 behavioral eval tests across 6 Gemini models and needs better visibility and reliability.

## Developer Pain Points

- **429 Capacity Errors**: Users hitting rate limits on `gemini-3.1-pro-preview` from trivial prompts (issue #25179) disrupt basic CLI usage. No resolution yet.
- **Agent Hangs & Misreporting**: The generalist agent hangs on simple tasks (#21409), and subagents falsely report success after hitting turn limits (#22323). Breaks trust in autonomous workflows.
- **Auto Memory Inefficiency**: Low-signal sessions are retried indefinitely (#26522), while malformed patches silently accumulate (#26523). Background extraction becomes unreliable.
- **Shell Command Stuck**: Shell execution hangs on "Waiting input" after commands complete (#25166), blocking automation scripts. 3 👍.
- **Terminal Corruption**: Exiting external editors in terminalBuffer mode causes screen corruption (#24935). Forces full restart.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-08

## Today’s Update Brief
No new releases were published in the last 24 hours. Community activity remains steady: 10 issues were updated (2 closed, 8 open) and 1 pull request was submitted. Enterprise networking and model flexibility continue to drive user discussions, with several new triage-level bug reports surfacing for Windows and FreeBSD platforms.

## Releases
No new releases in the last 24 hours.

## Hot Issues (10 items)

1. **[#333 – SSL inspection failure in corporate environments](https://github.com/github/copilot-cli/issues/333)** (OPEN)
   *Areas: authentication, non-interactive, enterprise, networking*
   Intermittent `fetch failed` errors when using Copilot CLI behind MITM proxies. Persists even after installing corporate certificates. 5 comments, 4 👍.

2. **[#2828 – Weekly rate limiting: include actionable suggestions](https://github.com/github/copilot-cli/issues/2828)** (CLOSED)
   *Area: models*
   Request that the “weekly rate limit” message also tells users how to remit, e.g. waiting or upgrading. 4 comments, 2 👍.

3. **[#3216 – Infinite compaction/directory-listing loop on long sessions](https://github.com/github/copilot-cli/issues/3216)** (OPEN)
   *Areas: sessions, context-memory*
   Agent enters a loop of compacting context and listing directories after ~136 turns with a PDF attachment. 2 comments.

4. **[#3477 – Enterprise OTel auth: mTLS env vars + dynamic-headers helper](https://github.com/github/copilot-cli/issues/3477)** (OPEN)
   *Areas: enterprise, networking, configuration*
   Copilot CLI’s OTLP exporter only supports static headers; request for mutual TLS and token refresh parity with Claude Code. 1 comment.

5. **[#2294 – License clarification for Linux distro packaging](https://github.com/github/copilot-cli/issues/2294)** (OPEN)
   *Area: platform-linux*
   Arch Linux asks whether the license allows packaging in community repos; uncertain wording in Section 2. 1 comment, 2 👍.

6. **[#3709 – Ability to switch models in-session including BYOK/local providers](https://github.com/github/copilot-cli/issues/3709)** (OPEN, triage)
   Current `/model` picker only lists GitHub-hosted models; ‘COPILOT_MODEL’ pins to one BYOK provider per session. 1 comment.

7. **[#3712 – ReFS / Dev Drive sandbox limitation on Windows](https://github.com/github/copilot-cli/issues/3712)** (OPEN, triage)
   Question: local sandbox may not work on ReFS volumes (Dev Drive). Requests documentation of known limitations. 0 comments.

8. **[#3711 – Copilot CLI version not updated in Windows Registry](https://github.com/github/copilot-cli/issues/3711)** (OPEN, triage)
   After performing `/update`, the version shown in the Windows Registry remains the old value. 0 comments.

9. **[#3710 – Install script misidentifies FreeBSD as Windows](https://github.com/github/copilot-cli/issues/3710)** (OPEN, triage)
   The `gh.io/copilot-install` script checks for macOS and Linux, then assumes any other OS is Windows, causing a spurious “winget not found” error on FreeBSD. 0 comments.

10. **[#3396 – Confusing error when `GITHUB_TOKEN` is set in Actions](https://github.com/github/copilot-cli/issues/3396)** (CLOSED)
    *Areas: authentication, non-interactive*
    Installation token silently forwarded to Copilot backend returns a 400 error. A clear error message is needed.

## Key PR Progress (1 item)

- **[#3708 – Add files via upload](https://github.com/github/copilot-cli/pull/3708)** (OPEN)
  Submitter: @panchofrancisco1987-ui. No description; appears to be an errant commit. No maintainer activity.

## Feature Request Clusters

- **Enterprise telemetry & networking**
  Several requests for richer OpenTelemetry configuration (#3477) and resolution of SSL inspection failures (#333). Users seek parity with Claude Code’s mTLS and token-refresh support.

- **Model flexibility in-session**
  Users want the ability to switch between GitHub-hosted and BYOK/local providers without restarting the session (#3709). The current `/model` picker is limited to hosted models.

- **Rate limiting/usage transparency**
  The “weekly rate limit” message should include recovery guidance (#2828). This aligns with broader desire for better user feedback on quota status.

## Developer Pain Points

- **Proxy/SSL certificate handling** – #333 highlights ongoing difficulties for enterprise users behind MITM proxies, even when CA certificates are installed.
- **Long-session instability** – #3216 reports a degenerate loop after many turns, forcing session restarts. No workaround available.
- **Linux distro licensing friction** – #2294 shows confusion around whether Copilot CLI can be redistributed in package managers like Arch Linux’s.
- **Windows and FreeBSD compatibility** – #3711 (version not reflected in Registry), #3712 (ReFS sandbox unknown), and #3710 (install script broken on FreeBSD) point to gaps in platform coverage.
- **Authentication pitfalls** – #3396 (closed) illustrates that `GITHUB_TOKEN` from Actions is silently forwarded, causing obscure errors; users need explicit warnings.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

Here is the Kimi Code CLI community digest for 2026-06-08.

---

### Kimi Code CLI Community Digest
**Date:** 2026-06-08

#### 1. Today’s Update Brief
Activity was low today with no new releases. The community discussion continues to focus on the transition from `kimi-cli` to `kimi-code`, with two detailed feedback reports highlighting migration friction, quota confusion, and feature regressions. Several bug reports related to the new `kimi-code` agent and installation process were also filed.

#### 2. Releases
No new versions were released in the last 24 hours. The current version is `kimi-code v0.11.0`.

#### 3. Hot Issues
*(Note: The dataset contains 7 issues and 1 PR. The 10 most noteworthy items are listed below.)*

1. **[#2269 - [Feature Request] Remote Control / Multi-Device Session Handoff](https://github.com/MoonshotAI/kimi-cli/issues/2269)**
   - **Author:** [@lucianalima777](https://github.com/lucianalima777)
   - **Impact:** Users want to start a session on one device and continue it on another (e.g., laptop, mobile). This is a workflow blocker for users working across multiple environments.
   - **Community Activity:** Open since May 13, 5 comments, 0 reactions.

2. **[#2381 - [CLOSED] Why abandon kimi-cli and redo kimi code?](https://github.com/MoonshotAI/kimi-cli/issues/2381)**
   - **Author:** [@QuantumLiu](https://github.com/QuantumLiu)
   - **Impact:** This is a meta-comment about the project’s direction. The author expresses frustration that the team is building a new tool (`kimi-code`) instead of improving the existing `kimi-cli`, accusing this of splitting the community.
   - **Community Activity:** Open for 10 days, closed by maintainer? (status is CLOSED). 4 comments, 0 reactions. The issue is a proxy for community sentiment about the rebranding.

3. **[#2437 - Migration Feedback: unclear state, quota attribution, agent regression](https://github.com/MoonshotAI/kimi-cli/issues/2437)**
   - **Author:** [@865x44](https://github.com/865x44)
   - **Impact:** A detailed user report on the migration from `kimi-cli` v1.47.0 to `kimi-code` v0.11.0. The user reports confusion over the migration messages, unclear attribution of quota usage to the wrong subscription plan, and a perceived quality regression in agent mode.
   - **Community Activity:** Filed 2026-06-07, 1 comment.

4. **[#2440 - Clickable symbol/line references in chat panel](https://github.com/MoonshotAI/kimi-cli/issues/2440)**
   - **Author:** [@ElPrg](https://github.com/ElPrg)
   - **Impact:** The chat panel renders file paths as clickable links, but function/method names are not. The user wants clickable jumps to definition, which is a standard expectation for an AI coding CLI.
   - **Community Activity:** Filed 2026-06-07, no comments.

5. **[#2439 - [bug] compaction.unable error with local Ollama model](https://github.com/MoonshotAI/kimi-cli/issues/2439)**
   - **Author:** [@regul8or](https://github.com/regul8or)
   - **Impact:** A user trying to review a project with a local Ollama model gets a `compaction.unable` error. This blocks users who rely on local open-source models (e.g., for offline work or privacy).
   - **Community Activity:** Filed 2026-06-07, no comments.

6. **[#2438 - [bug] Agent status unknown; cannot dive into agentic session](https://github.com/MoonshotAI/kimi-cli/issues/2438)**
   - **Author:** [@dmorsin](https://github.com/dmorsin)
   - **Impact:** The user reports that after starting a dialogue, the agent status becomes "unknown" and they cannot inspect or continue the session. This is a critical bug for the core agent functionality.
   - **Community Activity:** Filed 2026-06-07, no comments.

7. **[#2436 - [bug] Installation conflict: new Kimi Code installed but Kimi can't make up her mind](https://github.com/MoonshotAI/kimi-cli/issues/2436)**
   - **Author:** [@pleabargain](https://github.com/pleabargain)
   - **Impact:** A user reports that installation produced conflicting messages. The old `kimi-cli` version is still reported, but the new `kimi-code` is also claimed to be installed. This indicates a broken or partial migration path.
   - **Community Activity:** Filed 2026-06-07, no comments.

#### 4. Key PR Progress
*(Note: Only 1 PR was updated in the last 24h.)*

1. **[#774 - [CLOSED] fix: correct module-name type in pyproject.toml](https://github.com/MoonshotAI/kimi-cli/pull/774)**
   - **Author:** [@sherlockGH-coder](https://github.com/sherlockGH-coder)
   - **Summary:** A TOML parse error was causing `make prepare` to fail. The PR fixes the `module-name` field type from an array to a string in `pyproject.toml`.
   - **Status:** Merged/Closed. A small but useful fix for developer onboarding.

#### 5. Feature Request Clusters
Based on open issues, several recurring themes are visible, though not confirmed as trends from today alone:
- **Multi-Device / Session Management:** Issue #2269 requests remote session handoff, a recurring request for users with multi-environment workflows.
- **Editor Integration / IDE-like UX:** Issue #2440 asks for clickable symbol references in the chat panel, reflecting a desire for a more IDE-aware experience.

#### 6. Developer Pain Points
Several issues from today expose clear developer frustrations:
- **Migration Instability:** Multiple issues (#2436, #2437) document confusion and outright breakage during the `kimi-cli` to `kimi-code` migration process. The installation messages are contradictory and the state is unclear.
- **Core Agent Unreliability:** The `Status of agent unknown` bug (#2438) directly blocks the primary use case of the tool.
- **Local Model Incompatibility:** The `compaction.unable` error with Ollama (#2439) suggests a regression or lack of testing with local model execution.
- **Branding & Community Division:** Issue #2381 (though closed) is a clear signal that a segment of the user base is unhappy with the rebranding/rewrite strategy. They perceive it as a waste of trust and community effort. This is a top-of-mind concern for long-term users.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

## OpenCode Community Digest — 2026-06-08

### 1. Today’s Update Brief

No new releases were published in the last 24 hours. The community remains highly active with 50 updated issues and 50 pull requests; the most discussed topics revolve around model provider compatibility (Gemma 4, Ollama, AWS Bedrock), sandboxing for agent safety, and recurring “free usage exceeded” errors with free-tier models. Several bug-fix PRs targeting MCP discovery, WSL desktop behavior, and snapshot lifecycle are in review.

### 2. Releases

No new releases in the last 24 hours.

---

### 3. Hot Issues

1. **#2242 – Sandbox for agent terminal commands**
   *Author: @edmBernard | Comments: 63 👍: 51*
   User asks how to restrict terminal commands to a specific directory. Compares with seatbelt on macOS. Highly upvoted, reflecting strong demand for security boundaries.
   [Link](https://github.com/anomalyco/opencode/issues/2242)

2. **#15585 – “Free usage exceed” error on free models**
   *Author: @Howard-Zhou-77 | Comments: 47 👍: 12*
   All three free models fail with a usage limit error. User spent six hours in two sessions. Closed, but still a frequent pain point.
   [Link](https://github.com/anomalyco/opencode/issues/15585)

3. **#3472 – Context awareness not working in VS Code**
   *Author: @ravshansbox | Comments: 37 👍: 25*
   Agent does not recognise selected lines. Questions documentation and actual support. Closed, but reveals confusion around the feature.
   [Link](https://github.com/anomalyco/opencode/issues/3472)

4. **#14273 – “Free usage exceeded. Add credits” when using Zen free models**
   *Author: @joaomj | Comments: 27 👍: 1*
   Error appears even with a positive balance. Closed, but symptom of free-tier friction.
   [Link](https://github.com/anomalyco/opencode/issues/14273)

5. **#20995 – Gemma 4 (e4b) tool calling fails via Ollama – streaming tool_calls not recognised**
   *Author: @noxgle | Comments: 26 👍: 47*
   Model returns valid tool_calls but OpenCode ignores them. High community interest (47 👍). No maintainer response yet.
   [Link](https://github.com/anomalyco/opencode/issues/20995)

6. **#3099 – Agent stops following rules after session compaction**
   *Author: @0x524c | Comments: 25 👍: 1*
   User sets “no commit+push” rules but agent ignores them after a compact. Closed, but highlights compaction logic risks.
   [Link](https://github.com/anomalyco/opencode/issues/3099)

7. **#21034 – Gemma 4 models (26b/31b) cause tool loops and failures**
   *Author: @pchuck | Comments: 18 👍: 19*
   Even with latest tokenizer and engine patches, models are unusable. Multiple platform workarounds tried.
   [Link](https://github.com/anomalyco/opencode/issues/21034)

8. **#31239 – Clear instructions for Azure Foundry OpenAI connection**
   *Author: @rickywck | Comments: 11 👍: 0*
   User tried many combinations without success; basic connectivity works but OpenCode fails. Closed, but indicates onboarding friction.
   [Link](https://github.com/anomalyco/opencode/issues/31239)

9. **#22132 – OpenCode 1.4.3 hangs with local Ollama on simple prompts**
   *Author: @Luporosso76 | Comments: 9 👍: 4*
   Simple prompts cause hang while direct API works. Suggests a client-side issue.
   [Link](https://github.com/anomalyco/opencode/issues/22132)

10. **#31147 – AWS Bedrock SSO login regression in OpenCode 1.16**
    *Author: @intentionally-left-nil | Comments: 6 👍: 0*
    Error: “E is not a function (E is a Symbol)”. Regression from recent version.
    [Link](https://github.com/anomalyco/opencode/issues/31147)

---

### 4. Key PR Progress

1. **#31294 – feat(tui): add web-style transcript filtering**
   *Author: @antfu*
   Filters out internal steps, synthetic text, pending/running states from TUI transcript. Open, needs compliance review.
   [Link](https://github.com/anomalyco/opencode/pull/31294)

2. **#25649 – fix: increase LSP initialize timeout for JDTLS and KotlinLS**
   *Author: @norbu35*
   JVM-based language servers need 60-180s for Gradle sync; merges increased timeout. Closes #23982.
   [Link](https://github.com/anomalyco/opencode/pull/25649)

3. **#31271 – fix: respect MCP server capabilities**
   *Author: @rekram1-node*
   Keeps prompt-only/resource-only servers connected without requiring tools/list. Improves compatibility.
   [Link](https://github.com/anomalyco/opencode/pull/31271)

4. **#31183 – docs: add OpenCode Connector to ecosystem page**
   *Author: @l3aro*
   Adds VSCode extension entry across all 17 locale translations.
   [Link](https://github.com/anomalyco/opencode/pull/31183)

5. **#31095 – fix(desktop): few WSL bugs**
   *Author: @neriousy*
   Fixes “can't access distroReady before initialization”, server removal, stale version reporting. Closes #31097.
   [Link](https://github.com/anomalyco/opencode/pull/31095)

6. **#31283 – fix(desktop): stabilize snapshot sidecar lifecycle**
   *Author: @Hona*
   Prevents snapshot capture from stalling behind stale Git index lock; handles early Git failures; removes stale server marking.
   [Link](https://github.com/anomalyco/opencode/pull/31283)

7. **#31211 – fix(tui): replace @solid-primitives/scheduled with manual debounce**
   *Author: @malventano*
   Fixes Node.js compatibility breakage introduced earlier. Closes #31182.
   [Link](https://github.com/anomalyco/opencode/pull/31211)

8. **#28301 – fix(mcp): cache unsupported prompt lists**
   *Author: @JGoP-L*
   Stops repeated errors when MCP server doesn’t implement prompts/list. Closes #27477.
   [Link](https://github.com/anomalyco/opencode/pull/28301)

9. **#28308 – fix(console): strip reasoning from oa-compatible history**
   *Author: @JGoP-L*
   Removes non-standard fields from chat history to avoid provider rejection. Closes #27852.
   [Link](https://github.com/anomalyco/opencode/pull/28308)

10. **#26239 – feat: add /menu slash command**
    *Author: @altendky*
    Opens the TUI command menu via slash command. Merged.
    [Link](https://github.com/anomalyco/opencode/pull/26239)

---

### 5. Feature Request Clusters

- **Session management**
  #25848: manual session renaming
  #30308: dynamic workflows similar to Claude Code – multiple separate issues asking for workflow-like orchestration.

- **UI/UX improvements**
  #24426: LaTeX rendering in web UI
  #3091 (closed): double-click to copy paragraph
  #3090 (closed): Ctrl+Left/Right word navigation in TUI.

- **Provider and model support**
  #31180: thinking mode variants for MiniMax M3
  #31203: MCP toggle not working in Desktop.

- **Sandboxing & security**
  #2242 (top issue): agent sandboxing – currently the highest upvoted request.

---

### 6. Developer Pain Points

- **Free-tier limitations**: Multiple reports of “free usage exceeded” errors even with accounts in good standing (#15585, #14273). Users confused about actual limits.
- **Model provider incompatibility**: Gemma 4 models (via Ollama and LM Studio) produce tool-call failures and loops (#20995, #21034). Ollama hangs on simple prompts (#22132). AWS Bedrock SSO regression (#31147).
- **Context compaction bugs**: Agent loses rules (#3099), pruning clears read results causing re-attachment (#30807).
- **MCP integration friction**: MCP not shown in Desktop (#31203), prompts/list errors when unsupported (#26048), toggle unresponsive.
- **Windows-specific issues**: Write tool produces LF-only line endings on `.bat`/`.cmd` files (#31224), TUI code blocks blank on CentOS (#28656).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-08

## 1. Today’s Update Brief
One nightly release was published (v0.17.1-nightly.20260608). Nine issues saw updates in the last 24 hours, reflecting active triage and community engagement around server capabilities, CLI UX, and file operations. Forty-four pull requests were updated, with several large feature PRs landing or being opened in the serve/daemon, memory, and workflow areas.

## 2. Releases
**v0.17.1-nightly.20260608.aea34fa2c**
Changes:
- chore(release): v0.17.1 by @qwen-code-ci-bot
- fix(cli): skip thought parts in copy output by @he‑yufeng — prevents internal reasoning tokens from being included in clipboard content.

## 3. Hot Issues (9 items)
All issues updated in the last 24 hours are listed below.

### #4514 [OPEN] tracking(serve): daemon capability gaps & prioritized backlog (post v0.16-alpha)
- **Author**: @doudouOUC, **Comments**: 12, **👍**: 0
- **Summary**: Tracks remaining gaps in `qwen serve` HTTP/SSE surface after slash-command passthrough. Remote clients can invoke ACP-compatible commands via `/session/:id/prompt`.
- **Impact**: Core roadmap issue for daemon feature parity; high community interest (12 comments).
- **Link**: https://github.com/QwenLM/qwen-code/issues/4514

### #1388 [CLOSED] Read-only mode copies line numbers with code, making copy-paste unusable
- **Author**: @SunMendi, **Comments**: 3, **👍**: 0
- **Summary**: In read-only mode, code blocks render with line numbers and `│` separators that are copied along with the code.
- **Impact**: Workaround now provided via `/copy code` command (PR #2480).
- **Link**: https://github.com/QwenLM/qwen-code/issues/1388

### #4782 [OPEN] tracking(serve): ACP Streamable HTTP transport — implementation status, RFD alignment & upgrade plan
- **Author**: @chiga0, **Comments**: 2, **👍**: 0
- **Summary**: Daemon now implements the ACP Streamable HTTP transport at `/acp`, enabling native connections from Zed, Goose, JetBrains without adapters.
- **Impact**: Major interop improvement; tracking PR #4827 and #4773.
- **Link**: https://github.com/QwenLM/qwen-code/issues/4782

### #4830 [CLOSED] discussion: fallback model support for resilient long-running sessions
- **Author**: @qqqys, **Comments**: 2, **👍**: 0
- **Summary**: Proposes fallback to a compatible model when primary provider is unavailable or rate-limited.
- **Impact**: Adds resilience but flagged as duplicate / needs discussion.
- **Link**: https://github.com/QwenLM/qwen-code/issues/4830

### #4550 [OPEN] 局域网使用会一直卡在初始化步骤
- **Author**: @sotex, **Comments**: 2, **👍**: 0
- **Summary**: In LAN without internet, initialization hangs indefinitely; no configuration to skip check.
- **Impact**: Blocks offline/air-gapped usage; no clear resolution yet.
- **Link**: https://github.com/QwenLM/qwen-code/issues/4550

### #1206 [OPEN] feat: Add dynamic multi-model support for OpenAI-compatible APIs
- **Author**: @benzntech, **Comments**: 2, **👍**: 1
- **Summary**: Request to allow dynamic fetching and switching of models from OpenAI-compatible endpoints via `/auth`.
- **Impact**: High relevance for users who manage multiple models; still open.
- **Link**: https://github.com/QwenLM/qwen-code/issues/1206

### #4538 [CLOSED] Harden AUTO mode against self-modification and denial bypass
- **Author**: @qqqys, **Comments**: 1, **👍**: 1
- **Summary**: Proposes stronger policy boundaries around agent self-modification and bypass attempts.
- **Impact**: Addressed by PR #4572 (Harden auto mode self-modification checks).
- **Link**: https://github.com/QwenLM/qwen-code/issues/4538

### #4568 [CLOSED] Bug: `@` file completion shows submodule folder but no files inside it
- **Author**: @undici77, **Comments**: 1, **👍**: 0
- **Summary**: Autocomplete lists submodule directories but no files within them.
- **Impact**: Fixed by PR #4596 (`fix(core): recurse into submodule files`).
- **Link**: https://github.com/QwenLM/qwen-code/issues/4568

### #4744 [CLOSED] Support /copy N to copy the Nth-last message
- **Author**: @huww98, **Comments**: 1, **👍**: 0
- **Summary**: Request for `/copy N` to copy Nth-last AI message, similar to Claude Code.
- **Impact**: Implemented in PR #4761 (`feat(cli): support /copy N`).
- **Link**: https://github.com/QwenLM/qwen-code/issues/4744

## 4. Key PR Progress (10 selected)

### #4827 [OPEN] feat(serve): ACP/REST parity — 29 new `_qwen/*` methods + production hardening
- **Author**: @chiga0
- **Summary**: Adds 29 new dispatch methods achieving full ACP/REST parity, rebased on `daemon_mode_b_main`. +935 lines.
- **Importance**: Core to daemon API completeness.
- **Link**: https://github.com/QwenLM/qwen-code/pull/4827

### #4833 [OPEN] feat(daemon): session idle reaper for automatic cleanup
- **Author**: @chiga0
- **Summary**: Periodically closes sessions with no activity after a configurable TTL (default 30 min). Uses existing `closeSession` path.
- **Importance**: Prevents resource leaks in long-running daemon processes.
- **Link**: https://github.com/QwenLM/qwen-code/pull/4833

### #4780 [OPEN] feat(cli): add /fork background-agent command
- **Author**: @qqqys
- **Summary**: Spawns a background agent inheriting full conversation context, works without blocking main conversation.
- **Importance**: Enables parallel agent tasks from the CLI.
- **Link**: https://github.com/QwenLM/qwen-code/pull/4780

### #4732 [OPEN] feat(core): Workflow tool P1 — minimal node:vm sandbox + sequential agent()
- **Author**: @LaZzyMan
- **Summary**: Implements first phase of Dynamic Workflows — a `Workflow` tool that runs model-authored JS in a sandbox with `args`, `phase`, `log`, and sequential `agent()` globals.
- **Importance**: Foundation for extensible agent workflows.
- **Link**: https://github.com/QwenLM/qwen-code/pull/4732

### #4704 [OPEN] feat(core): honor skill allowedTools by auto-approving declared tools
- **Author**: @tanzhenxin
- **Summary**: Previously `allowedTools` in skill frontmatter was ignored; now declared tools are auto-approved for the session.
- **Importance**: Makes skill tool permissions actually work.
- **Link**: https://github.com/QwenLM/qwen-code/pull/4704

### #4764 [OPEN] feat(memory): add user-level auto-memory at ~/.qwen/memories/
- **Author**: @LaZzyMan
- **Summary**: Second auto-memory directory for cross-project user facts (preferences, working style), mirroring Claude Code’s private/team scope.
- **Importance**: Improves persistent personalization across projects.
- **Link**: https://github.com/QwenLM/qwen-code/pull/4764

### #4613 [OPEN] feat(daemon): keep model & approval-mode state consistent across clients sharing a session
- **Author**: @chiga0
- **Summary**: Fixes duplicated/dropped broadcasts and ensures model and approval-mode state is reliably synced across chat, terminal, and IDE clients.
- **Importance**: Solves a persistent multi-client consistency bug.
- **Link**: https://github.com/QwenLM/qwen-code/pull/4613

### #4773 [OPEN] feat(serve): ACP WebSocket transport (RFD Streamable HTTP phase 2)
- **Author**: @chiga0
- **Summary**: Complete WebSocket transport coexisting with SSE. Depends on #4827.
- **Importance**: Expands transport options for real-time ACP communication.
- **Link**: https://github.com/QwenLM/qwen-code/pull/4773

### #4596 [CLOSED] fix(core): recurse into submodule files when crawling git repos
- **Author**: @he-yufeng
- **Summary**: Fixes #4568 by passing `--recurse-submodules` to `git ls-files` so submodule contents are crawled.
- **Importance**: Unblocks `@` file completion in projects with submodules.
- **Link**: https://github.com/QwenLM/qwen-code/pull/4596

### #4761 [CLOSED] feat(cli): support /copy N to copy Nth-last AI message
- **Author**: @LaZzyMan
- **Summary**: Extends `/copy` with a numeric argument to copy an earlier AI message; mirrors Claude Code behavior.
- **Importance**: Addresses community request #4744.
- **Link**: https://github.com/QwenLM/qwen-code/pull/4761

## 5. Feature Request Clusters

### ACP Transport & Server Capabilities
Multiple tracking issues and PRs target the ACP protocol:
- #4514 tracks daemon capability gaps after v0.16-alpha.
- #4782 provides implementation status of ACP Streamable HTTP transport.
- PR #4827 adds 29 new `_qwen/*` methods for full parity.
- PR #4773 adds WebSocket transport.

### Model Flexibility & Fallback
Users request more dynamic model handling:
- #1206 asks for dynamic multi-model support via OpenAI-compatible APIs.
- #4830 proposes fallback model support for session resilience.
- Related: PR #4705 adds runtime language switching via HTTP endpoint.

### CLI Copy UX
The `/copy` command sees iterative improvements:
- #1388 (line numbers in copy) closed with `/copy code` (PR #2480).
- #4744 (copy Nth-last message) implemented via PR #4761.
- Fix in nightly release: skip thought parts in copy output.

### Security & Hardening
AUTO mode self-modification and denial bypass concerns:
- #4538 lead to PR #4572 (Harden auto mode self-modification checks).
- PR #4827 includes production hardening for the daemon.

### File Operations
Submodule handling and file crawling:
- #4568 (no files inside submodule) fixed by PR #4596.

### Offline / Air-Gapped Usage
- #4550 reports that initialization hangs in LAN without internet; no resolution yet, but request for configurable offline mode.

## 6. Developer Pain Points

- **Line numbers copied with code** (#1388) – solved by `/copy code` command, but users may not know about it.
- **Submodule file completion broken** (#4568) – fixed in PR #4596, now available in upcoming release.
- **Initialization blocked in offline environments** (#4550) – no workaround documented; users in air-gapped networks are blocked.
- **Missing `/copy N`** (#4744) – now implemented in PR #4761, expected in next nightly.
- **Multi-model switching cumbersome** (#1206) – still open; users with multiple OpenAI-compatible endpoints lack a built-in way.
- **AUTO mode self-modification risk** (#4538) – addressed by PR #4572, but may require careful policy tuning.
- **Screen flash in TUI compact mode** – PR #4795 fixes a cross-group tool merge issue in `<Static>` mode that caused full-screen flashes.
- **Submodule file completion now works** but the fix only landed recently; users on older builds still affected.

</details>