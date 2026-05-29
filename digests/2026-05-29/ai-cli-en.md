# AI CLI Tools Community Digest 2026-05-29

> Generated: 2026-05-29 02:28 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# Cross-Tool AI CLI Comparison Report – 2026-05-29

## 1. Daily Cross-Tool Overview

Today saw a total of at least 129 issues and 101 PRs updated across the six tracked tools, with releases from five of them (Gemini CLI, GitHub Copilot CLI, Claude Code, OpenAI Codex, OpenCode, and Qwen Code). The most active tool by combined issue+PR updates was Qwen Code (73 total), followed by OpenAI Codex (50 issues) and GitHub Copilot CLI (48 issues). Context window and compaction errors emerged as the strongest cross-tool pain point, appearing in nearly every project’s top issues. Windows platform bugs and MCP/plugin ecosystem expansion were also recurring themes across multiple communities.

## 2. Activity Comparison

| Tool | Issues updated (24h) | PRs updated (24h) | Releases (today) |
|---|---|---|---|
| Claude Code | ~10 hot issues (total not specified) | 7 active PRs | 2 patches (v2.1.154, v2.1.156) |
| OpenAI Codex | 50 | 10 PRs (selected) | 2 (v0.135.0, v0.136.0-alpha.1) |
| Gemini CLI | ~10 hot issues (total not specified) | 10 PRs (selected) | 3 patches (v0.45.0-preview.1, nightly, v0.44.1) |
| GitHub Copilot CLI | 48 | 0 | 3 patches (v1.0.56-1, v1.0.56-0, v1.0.55) |
| Kimi Code CLI | 8 | 14 | 0 |
| OpenCode | ~10 hot issues (total not specified) | 10 PRs (selected) | 1 (v1.15.12) |
| Qwen Code | 23 | 50 | 1 nightly (v0.16.1-nightly.20260529) |

*Notes: “Hot issues” count is the number of featured issues in each digest; actual total updated issues may differ. PR counts from Qwen Code and Kimi Code are explicit totals; for others, counts are from the featured PR list.*

## 3. Shared Feature Directions

Requirements appearing across multiple tool communities today:

- **Context window and compaction management** – Claude Code (extended thinking corruption, 1M context opt-out), OpenAI Codex (stream disconnected on compact), GitHub Copilot CLI (tooling overhead consuming 73% of window, 200K cap vs 1M model), Kimi Code CLI (compaction crash with empty text parts), and Qwen Code (memory leak from unbounded history). Users across all these tools are hitting limits, getting permanent 400 errors, or losing session continuity.

- **Windows platform bugs** – Claude Code (segfault on startup, missing DACL), OpenAI Codex (sandbox fails on ARM64, Windows Store blocks network), Gemini CLI (WSL2 OAuth broken, PTY interop), OpenCode (node-pty sidecar crash on Windows), Kimi Code CLI (WSL2 connect timeout hardcoded). Windows remains the most problematic OS for CLI tooling.

- **ACP/server mode (daemon) development** – Qwen Code (daemon state layer, workspace refactoring, runtime MCP add/remove), OpenAI Codex (exec-server websocket token, durable session interface), Kimi Code CLI (ACP session history replay, token usage exposure), OpenCode (WebSocket transport for ACP integration). Multiple projects are investing in headless operation for IDE orchestration.

- **Plugin/MCP ecosystem maturity** – Claude Code (per-teammate MCP configs), OpenAI Codex (marketplace-based allowlist for plugin install), GitHub Copilot CLI (auto-enable github-mcp-server, toggle without delete), Qwen Code (runtime MCP server add/remove), OpenCode (master issue for plugin marketplace). The community wants live management and discoverability without restarts.

- **Authentication friction** – Gemini CLI (OAuth origin mismatch with MCP, WSL2 login broken), GitHub Copilot CLI (org-owned token permission visibility), Qwen Code (Rider OAuth redirect loop), Claude Code (Bedrock permission errors). Users are struggling with model access and provider login flows.

## 4. Differentiation Analysis

- **Claude Code** – Unique focus on agent orchestration (dynamic workflows, agent teams) and extended thinking (Opus 4.8). Differentiates with `/effort xhigh` and background agents for large tasks. The primary pain point is thinking block corruption, a problem specific to its extended reasoning mode.

- **OpenAI Codex** – Emphasizes diagnostic tooling (`codex doctor`), remote connectivity awareness (`/status` shows remote version), and cloud-managed configuration stack. Strong Chrome plugin integration and richer TUI with `/usage` command. Targets enterprise users with session durability and mobile/remote support.

- **Gemini CLI** – Focus on security hardening (SSRF prevention via redirect validation, sandbox bypass fixes) and performance optimizations (sub-second `/chat` loading). Vim mode improvements and WSL interop bugfixes indicate a developer-ergonomics-first approach. Quota management is the dominant community pain point.

- **GitHub Copilot CLI** – Tight Git/ecosystem integration (code review agent, github-mcp-server, PR template support). Simple permission model with org token visibility. The “duplicate item” websocket error is a fresh regression unique to its tool-calling workflow. Plans for `/security-review` and session name exposure show roadmap toward enhanced development lifecycle support.

- **Kimi Code CLI** – Smallest community but actively fixing stability bugs (terminal hang, MCP connection leak). Currently transitioning to `kimi-code` as the primary client, causing strategic uncertainty. ACP protocol completeness is the main integration focus, especially with Zed editor.

- **OpenCode** – Most multi-provider-friendly (OpenRouter, DeepSeek, Anthropic, Copilot). Desktop app and VS Code extension request signal desire for GUI integration. Unique feature: native scheduling (`opencode schedule`) and inline skill invocations (`$` in prompt). Strong community demand for a plugin marketplace and VS Code native experience.

- **Qwen Code** – Deepest server-mode architecture (daemon state bridge, workspace extraction, runtime MCP management). Emphasizes production readiness with atomic writes, installer hardening, and hot-reload systems. Telemetry and session analytics (enhanced `/stats`) differentiate for deployment monitoring. Local model timeout and SSL certificate issues are critical.

## 5. Community Activity Notes

- **Most active by issue+PR volume**: Qwen Code (73 total updates: 23 issues, 50 PRs), followed by OpenAI Codex (50 issues, 10 PRs) and GitHub Cop

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest – 2026-05-29

## Today's Update Brief

Two patch releases landed today: v2.1.154 introduced **Opus 4.8** and **dynamic workflows**, while v2.1.156 fixed a critical thinking-block modification error that affected the new model. The community’s attention is heavily focused on a wave of API 400 errors tied to extended thinking, with multiple duplicate reports piling up across different platforms and workflows.

## Releases

- **v2.1.156** (patch) – Fixed an issue where Opus 4.8 sessions could corrupt thinking blocks, causing API errors on every subsequent turn.
- **v2.1.154** (feature) – **Opus 4.8** now the default model; added `/effort xhigh` for hard tasks. Introduced **dynamic workflows** that let Claude orchestrate work across tens to hundreds of background agents for large, complex tasks.

## Hot Issues (10 noteworthy)

1. **[#10199 – API Error 400 – Thinking Block Modification Error](https://github.com/anthropics/claude-code/issues/10199)**
   *Author: @WamBamBoozle | Created 2025-10-23 | 92 comments | 👍55*
   **Workflow affected:** Sessions using extended thinking (Opus).
   **Impact:** The error bricks the session on every turn after a certain interaction pattern.
   **Community:** Long-standing issue with high engagement; still open and a frequent duplicate target.

2. **[#49268 – Thinking summaries missing on Opus 4.7](https://github.com/anthropics/claude-code/issues/49268)**
   *Author: @yusufmo1 | Created 2026-04-16 | 37 comments | 👍65*
   **Workflow affected:** Viewing thinking summaries in the UI.
   **Impact:** The harness does not set `display: "summarized"`, so thinking blocks appear empty.
   **Community:** High upvotes; a recurring regression pattern.

3. **[#51183 – Bedrock: Claude Opus 4.7 returns permission_error](https://github.com/anthropics/claude-code/issues/51183)**
   *Author: @monumental-smm | Created 2026-04-20 | 27 comments | 👍7*
   **Workflow affected:** Bedrock integration.
   **Impact:** Model access denied despite correct entitlement status.
   **Community:** Multiple users confirming, but still unresolved.

4. **[#63147 – Resuming extended-thinking session fails permanently (400)](https://github.com/anthropics/claude-code/issues/63147)**
   *Author: @jdrolls | Created 2026-05-28 | 25 comments | 👍32*
   **Workflow affected:** Session resume after using tool calls with extended thinking.
   **Impact:** Transcript stores thinking text as empty but retains signature, causing permanent 400.
   **Community:** New but fast-growing; many duplicates being merged into this.

5. **[#23669 – Agent Teams: support per-teammate configs](https://github.com/anthropics/claude-code/issues/23669)**
   *Author: @hugobarauna | Created 2026-02-06 | 23 comments | 👍26*
   **Workflow affected:** Multi-repo agent teams.
   **Impact:** Teammates inherit lead’s working directory, CLAUDE.md, and MCP configs, limiting parallel work.
   **Community:** Steady interest, feature request.

6. **[#39270 – Claude Code process exited with code 1](https://github.com/anthropics/claude-code/issues/39270)**
   *Author: @data357 | Created 2026-03-26 | 23 comments | 👍16*
   **Workflow affected:** Desktop (macOS) session startup.
   **Impact:** Crashes on launch with no clear error detail.
   **Community:** Multiple duplicates, no fix yet.

7. **[#62123 – Model's tool call could not be parsed](https://github.com/anthropics/claude-code/issues/62123)**
   *Author: @taira-s0422 | Created 2026-05-25 | 15 comments | 👍28*
   **Workflow affected:** Opus 4.7/4.8 tool-using sessions.
   **Impact:** Retries also fail, session stalls.
   **Community:** Reported in both VSCode and terminal; high frequency for the reporter.

8. **[#62063 – Claude Code defaults to 1M context on Pro plan](https://github.com/anthropics/claude-code/issues/62063)**
   *Author: @kev124-hub | Created 2026-05-24 | 10 comments | 👍6*
   **Workflow affected:** Fresh sessions for Pro subscribers.
   **Impact:** Users get API error “Usage credits required for 1M context” without option to reduce.
   **Community:** Duplicate; still open.

9. **[#50640 – Windows segfault on startup (v2.1.112+)](https://github.com/anthropics/claude-code/issues/50640)**
   *Author: @workhyw | Created 2026-04-19 | 6 comments | 👍4*
   **Workflow affected:** Windows 11 users.
   **Impact:** Immediate crash with 0xc0000005.
   **Community:** Still occurring; bisected to versions after 2.1.111.

10. **[#63423 – CLI 2.1.154 breaks with API Error 422 – Invalid message role "system"](https://github.com/anthropics/claude-code/issues/63423)**
    *Author: @xiaomingwinning | Created 2026-05-28 | 5 comments | 👍2*
    **Workflow affected:** Any session using the new release.
    **Impact:** Messages with role “system” trigger a 422 error, likely due to API version mismatch.
    **Community:** Fresh report; may affect many users upgrading.

## Key PR Progress (7 active PRs)

1. **[#63467 – docs: add Windows gh CLI install instruction](https://github.com/anthropics/claude-code/pull/63467)**
   *Author: @weslleyramon001-png | Created 2026-05-29*
   Adds `winget` instructions for installing GitHub CLI in the commit-commands plugin README.

2. **[#63460 – docs: update deprecated npm install instructions](https://github.com/anthropics/claude-code/pull/63460)**
   *Author: @weslleyramon001-png | Created 2026-05-29*
   Replaces `npm install -g` with recommended `curl`/`irm` methods in plugins README; adds deprecation note.

3. **[#63382 – Fix Hookify tests example semantics](https://github.com/anthropics/claude-code/pull/63382)**
   *Author: @Mephistopheles9631 | Created 2026-05-28*
   Splits the “tests-before-stop” example into literal `not_contains` checks to match the engine’s actual substring-based behaviour.

4. **[#63189 – Use PR template in /commit-push-pr command](https://github.com/anthropics/claude-code/pull/63189)**
   *Author: @luboszk | Created 2026-05-28*
   Reads `.github/PULL_REQUEST_TEMPLATE.md` during PR generation so the body follows the repo’s template structure.

5. **[#62941 – fix(ralph-wiggum): correctly read last assistant text from transcript](https://github.com/anthropics/claude-code/pull/62941)**
   *Author: @kvaps | Created 2026-05-27*
   Fixes a bug where the Ralph Wiggum stop hook only read the last line of the transcript, missing multi-line assistant responses.

6. **[#63262 – (closed) feat: add side-threads plugin](https://github.com/anthropics/claude-code/pull/63262)**
   *Author: @yihao-liang | Created 2026-05-28*
   Introduces Slack-style `/thread` and `/back` commands for side discussions. Closed in favour of a revised PR.

7. **[#63252 – (closed) feat: add side-threads plugin (initial)](https://github.com/anthropics/claude-code/pull/63252)**
   *Author: @yihao-liang | Created 2026-05-28*
   Initial version of the side-threads plugin; superseded by #63262.

## Feature Request Clusters

- **Agent team configurability** (#23669, #56164) – Users want per-teammate working directories, CLAUDE.md files, MCP configurations, and the ability to specify a model per scheduled task. The request is for more granular control in multi-agent and background task workflows.
- **TUI / editor UX improvements** (#62922, #63191, #63427) – Multiple issues report that up/down arrow keys now navigate command history instead of moving the cursor within multi-line input. The ask is to restore standard text-editing behaviour (line navigation in multi-line mode, history navigation only on empty input or single-line mode).
- **Platform packaging** (#61313, #59007) – Users request official FreeBSD binary packages and better resolution of previously locked issues around installation processes.
- **Context and cost management** (#62063, #63060, #63447) – Pro plan subscribers want a way to opt out of the 1M context window (or at least be warned) to avoid usage credit errors. Additionally, the status line for Opus 4.8 reports an incorrect `200000` window size, causing premature context clamp.

## Developer Pain Points

1. **Extended Thinking Block Corruption (recurring)** – A cluster of issues ( #10199, #63147, #63394, #63448, #63463, #63258, #63358 ) show that when extended thinking is combined with tool calls, session resume, context compaction, or background agents, the thinking block signature becomes invalid. The result is a permanent 400 error (“thinking blocks cannot be modified”), forcing users to abandon the session. The bug has persisted across multiple versions (Opus 4.7 and 4.8) and is the single most disruptive issue this week.

2. **Windows-specific crashes** – Users on Windows 11 experience a segmentation fault on startup (#50640), a missing DACL permissions issue with the Cowork service that blocks installer upgrades (#57035), and bash commands producing no output (#62970). These are blocking adoption on the platform.

3. **API 422 / role mismatches** – With v2.1.154/156, some users get API 422 “Invalid message role 'system'” (#63423, #63469). This suggests a conflict between the client’s handling of system messages and the API version, likely introduced by the new release.

4. **Cost surprises for Pro users** – Defaulting to 1M context without an opt-out path (#62063, #63060) leads to unexpected API usage errors. The context window size misreport (#63447) exacerbates the problem by showing a false 200K limit. Users feel trapped between paying for Pro and being billed overage for context they didn’t request.

5. **TUI regression in multiline input** – Arrow key behaviour changed in v2.1.149+ (#63191, #63427), breaking a familiar editing pattern. The regression has been confirmed via bisection and affects both macOS and Windows terminals. Community reaction is frustrated because it reduces productivity when composing longer prompts.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-29

## Today's Update Brief

Two releases landed today: `rust-v0.135.0` brings richer diagnostics for support cases and improved remote transport awareness, while `rust-v0.136.0-alpha.1` kicks off the next cycle. The repository saw high issue activity (50 updated in 24h) with a strong concentration of Windows sandbox, Chrome plugin connectivity, and remote session bugs. PRs continue to advance cloud config management, MCP startup UX, and session resilience.

## Releases

- **[rust-v0.135.0](https://github.com/openai/codex/releases/tag/rust-v0.135.0)** — New features:
  - `codex doctor` now reports richer environment, Git, terminal, app-server, and thread inventory diagnostics for support cases. (#24261, #24311, #24305)
  - `/status` shows remote connection details and server version when the TUI is connected over a remote transport. (#24420)
  - Vim mode improvements (details not fully listed).

- **[rust-v0.136.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.136.0-alpha.1)** — Alpha release of the next minor version; no changelog provided.

## Hot Issues (Top 10 by Activity)

1. **[#21598](https://github.com/openai/codex/issues/21598) — Chrome plugin unavailable in Norway/EU**
   Windows Desktop users in the EU cannot use the `@Chrome` route even after the extension shows as connected. Regional gating suspected. 25 comments, 11 👍.

2. **[#22107](https://github.com/openai/codex/issues/22107) — Context compaction fails with “stream disconnected”**
   Desktop users hit remote compact errors mid-session, breaking context management. 13 comments, 9 👍.

3. **[#19909](https://github.com/openai/codex/issues/19909) — Make “Chats” project directory configurable**
   The hardcoded `~/Documents/Codex` path conflicts with iCloud sync. Community strongly wants a setting. 12 comments, 16 👍.

4. **[#24373](https://github.com/openai/codex/issues/24373) — Google Drive Sheets connector cannot write after reinstall**
   Read works, but appending rows fails with permission errors; plugin reinstall does not help. Shared read quota also returns 429. 12 comments, 4 👍.

5. **[#24259](https://github.com/openai/codex/issues/24259) — Windows sandbox fails with `spawn setup refresh` on ARM64**
   `codex doctor` reports healthy, but sandbox initialization consistently fails on Windows 11 ARM64. 9 comments, 4 👍.

6. **[#20538](https://github.com/openai/codex/issues/20538) — Desktop Preferences stuck with “unable to save”**
   `configVersionConflict` errors after sequential writes; persists across restarts. 6 comments, 17 👍.

7. **[#21791](https://github.com/openai/codex/issues/21791) — Chrome plugin mention selectable but not exposed as active tool**
   UI allows tagging `@chrome` but the runtime does not recognize `chrome@openai-bundled` as a callable tool. 8 comments, 5 👍.

8. **[#24006](https://github.com/openai/codex/issues/24006) — Codex cannot access local database after Mac update**
   App fails to launch due to database access issues, preventing any use. 7 comments, 6 👍.

9. **[#24969](https://github.com/openai/codex/issues/24969) — Windows Store version blocks all network URLs with enterprise policy**
   Browser Use works in-app but network navigation is rejected; Chrome Extension backend not available. 7 comments, 0 👍.

10. **[#13165](https://github.com/openai/codex/issues/13165) — Feature request: specify shell used by Codex**
    Windows users want to use MinGW Bash instead of PowerShell/Sandbox shell. 5 comments, 21 👍 (strongest reaction this digest).

## Key PR Progress

1. **[#24992](https://github.com/openai/codex/pull/24992) — Move skills path refs into exec server**
   Centralizes environment path primitives for skills loading and plugin reads, keeping metadata pinned to local authority.

2. **[#24996](https://github.com/openai/codex/pull/24996) — Use marketplace allowlist for plugin install suggestions**
   Replaces hardcoded tool-suggest allowlist with a marketplace-based one, enabling openai-curated/bundled plugins.

3. **[#24958](https://github.com/openai/codex/pull/24958) — Add exec-server direct websocket connection token**
   Optional `--connection-token` secures direct websocket upgrades while keeping readiness endpoints unauthenticated.

4. **[#24180](https://github.com/openai/codex/pull/24180) — Introduce durable session interface for code-mode**
   Abstracts cell lifecycle behind `CodeModeSession`, enabling alternative implementations beyond in-process execution.

5. **[#22668](https://github.com/openai/codex/pull/22668) — Wire managed MITM CA trust into child environments**
   Ensures spawned processes trust Codex’s MITM CA when HTTPS termination is active.

6. **[#24972](https://github.com/openai/codex/pull/24972) — Route extension image generation through native pipeline**
   Makes standalone `image_gen` behave like native image generation for persistence and UI completion.

7. **[#24622](https://github.com/openai/codex/pull/24622) — Switch runtime to cloud config bundle**
   Final PR in the cloud-managed config stack; removes legacy `codex-cloud-requirements` path.

8. **[#24994](https://github.com/openai/codex/pull/24994) — Track used Codex app connectors**
   Adds connector usage tracking to durable thread metadata, enabling future analytics.

9. **[#24805](https://github.com/openai/codex/pull/24805) — Add `CODEX_ENV_FILE` for SessionStart hooks**
   Allows hooks to set persistent shell state (e.g., PATH, virtualenv) via an environment file.

10. **[#24124](https://github.com/openai/codex/pull/24124) — Add `/usage` command to TUI**
    Lets users inspect token consumption by feature over the day/week, with a status-like usage card.

## Feature Request Clusters

- **Customizable storage locations** — Users want to configure the Chats directory ([#19909](https://github.com/openai/codex/issues/19909)) and restore project-level config profiles ([#21580](https://github.com/openai/codex/issues/21580)).
- **Shell choice on Windows** — Multiple requests to use alternative shells (MinGW Bash, etc.) instead of PowerShell/sandbox ([#13165](https://github.com/openai/codex/issues/13165), related closed issue [#12496](https://github.com/openai/codex/issues/12496)).
- **Long-running session context preservation** — Structured context persistence beyond simple compaction, including “Session Bridge” proposals ([#24810](https://github.com/openai/codex/issues/24810)).
- **Rust SDK** — Following GitHub Copilot’s lead, a request for a native Rust SDK for Codex ([#24824](https://github.com/openai/codex/issues/24824)).
- **Remote heartbeat automations** — Users want same-machine remote connections to be allowed to create heartbeat automations ([#24640](https://github.com/openai/codex/issues/24640)).

## Developer Pain Points

- **Windows sandbox fragility** — Sandbox initialization fails on ARM64 ([#24259](https://github.com/openai/codex/issues/24259)), and node_repl sandbox breaks Chrome plugin usage ([#24963](https://github.com/openai/codex/issues/24963)). PowerShell compatibility issues persist ([#12496](https://github.com/openai/codex/issues/12496)).
- **Chrome plugin inconsistency** — Plugin shown as connected in settings but not usable in runtime ([#21598](https://github.com/openai/codex/issues/21598), [#21791](https://github.com/openai/codex/issues/21791), [#21851](https://github.com/openai/codex/issues/21851)). Windows Store version additionally blocks network navigation ([#24969](https://github.com/openai/codex/issues/24969)).
- **Context compaction and session loss** — Remote compact stream disconnects ([#22107](https://github.com/openai/codex/issues/22107), [#24920](https://github.com/openai/codex/issues/24920)) and conversation history truncation after session resume ([#15709](https://github.com/openai/codex/issues/15709), [#15349](https://github.com/openai/codex/issues/15349)).
- **Remote/mobile quota false positives** — Remote sessions incorrectly report quota exceeded while direct CLI works ([#23953](https://github.com/openai/codex/issues/23953)).
- **Configuration corruption** — Desktop preferences stuck due to configVersionConflict ([#20538](https://github.com/openai/codex/issues/20538)), and database access failure after updates ([#24006](https://github.com/openai/codex/issues/24006)).
- **Plugin permission issues** — Google Drive connector write failures ([#24373](https://github.com/openai/codex/issues/24373), [#24233](https://github.com/openai/codex/issues/24233)) and skill name length limits blocking curated plugins ([#24950](https://github.com/openai/codex/issues/24950)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-29

## Today's Update Brief

Activity remains high, with three patch releases shipped addressing cherry-picked fixes and a Vim keybinding correction from a new contributor. The issue tracker is dominated by authentication failures, quota management problems, and agent reliability concerns, while open PRs focus on security hardening (SSRF, sandbox bypass), WSL/Windows compatibility, and performance improvements for session history loading.

## Releases

Three versions released in the last 24 hours:

- **[v0.45.0-preview.1](https://github.com/google-gemini/gemini-cli/releases/tag/v0.45.0-preview.1)** — Cherry-pick of fix `bd53951` from preview branch into a new patch version.
- **[v0.45.0-nightly.20260528.g5cac7c10f](https://github.com/google-gemini/gemini-cli/releases/tag/v0.45.0-nightly.20260528.g5cac7c10f)** — Fix for ignoring unmapped Vim normal keys (first contribution from @MukundaKatta).
- **[v0.44.1](https://github.com/google-gemini/gemini-cli/releases/tag/v0.44.1)** — Cherry-pick of fix `bd53951` onto the stable v0.44.x branch.

All three are patch-level releases. No new feature updates were published today.

## Hot Issues (10 selected)

1. **[#20017](https://github.com/google-gemini/gemini-cli/issues/20017) — OAuth authentication fails: origin mismatch with MCP server URL** (15 comments, 10 👍)
   - Flow: Custom MCP servers using OAuth (e.g., Swifteq Zendesk) are blocked because the CLI compares the server's protected resource origin against the full SSE endpoint path, causing mismatch.
   - Impact: Blocks any third-party MCP server using OAuth authentication. Users cannot authenticate.
   - State: Closed; likely resolved or known limitation.

2. **[#22844](https://github.com/google-gemini/gemini-cli/issues/22844) — TypeScript execution fails in “CLI: Run Current File” debug config** (13 comments)
   - Flow: The debug configuration uses `"program": "${file}"` which attempts to run `.ts` files directly via Node.js without compilation.
   - Impact: Developers debugging CLI extensions in TypeScript cannot use the built-in run command.
   - State: Closed; fix applied or deemed duplicate.

3. **[#20032](https://github.com/google-gemini/gemini-cli/issues/20032) — Gemini 3 models not available on premium plan** (13 comments)
   - Flow: User on "Gemini Code Assist in Google Developer Program Premium" cannot see any Gemini 3 models in `/model` listing.
   - Impact: Paying users unable to access advertised newer models. Confusion about entitlement.
   - State: Closed; likely a model availability/rollout issue.

4. **[#22634](https://github.com/google-gemini/gemini-cli/issues/22634) — Gemini 3 Flash quota consumed extremely fast** (11 comments, 4 👍)
   - Flow: A single coding request consumes many more quota units than expected, causing daily request limits to be reached rapidly.
   - Impact: Heavy users hitting quota walls mid-task, disrupting workflow.
   - State: Closed; may be related to backend quota accounting changes.

5. **[#24222](https://github.com/google-gemini/gemini-cli/issues/24222) — Cannot access Gemini 3.1 Pro Preview with AI Pro Plan** (11 comments, 7 👍)
   - Flow: User receives "You don't have access to gemini-3.1-pro-preview" error despite having a paid AI Pro subscription.
   - Impact: Latest model preview inaccessible to paying customers; frustration and trust erosion.
   - State: Closed; possibly a temporary access control issue now resolved.

6. **[#23762](https://github.com/google-gemini/gemini-cli/issues/23762) — Gemini 3.1 Pro model keeps retrying and is unusable** (8 comments, 3 👍)
   - Flow: Agent enters infinite retry loop with no visible progress when using `gemini-3.1-pro-preview`.
   - Impact: Model effectively unusable for extended sessions. Users forced to switch models.
   - State: Closed; likely fixed or flagged as duplicate.

7. **[#23865](https://github.com/google-gemini/gemini-cli/issues/23865) — CRITICAL: WSL2 OAuth broken + Antigravity breaks CLI — Paid Pro User Blocked** (8 comments, 2 👍)
   - Flow: OAuth login flow fails entirely on WSL2 (Ubuntu 24.04). Additionally, the "antigravity" system conflicts with CLI operation.
   - Impact: Complete blocking of all paid Pro users on WSL2. User explicitly paying for inaccessible service.
   - State: Closed; severity HIGH, priority URGENT labels applied.

8. **[#25447](https://github.com/google-gemini/gemini-cli/issues/25447) — New auth login causes "Generator not initialized" error** (7 comments)
   - Flow: New user attempting first-time auth login receives API error `Generator not initialized`.
   - Impact: Complete onboarding failure for new users. First-impression barrier.
   - State: Closed; may have been a transient backend issue.

9. **[#23356](https://github.com/google-gemini/gemini-cli/issues/23356) — Agent mode in VS Code: "There was a problem getting a response"** (7 comments, 3 👍)
   - Flow: Free-tier user signed into VS Code extension; agent mode stopped working after reauthentication.
   - Impact: VS Code extension agent mode entirely broken for affected users.
   - State: Closed; token or session expiry suspected.

10. **[#22525](https://github.com/google-gemini/gemini-cli/issues/22525) — CLI spews unrelated Polish conversation from another user** (3 comments)
    - Flow: User's chat session suddenly receives output in Dutch/Polish that is clearly from another user's conversation.
    - Impact: Data leakage between sessions. Potential severe privacy/security incident.
    - State: Closed; labeled `aiq/agent`. Severity HIGH.

## Key PR Progress (10 selected)

1. **[#27054](https://github.com/google-gemini/gemini-cli/pull/27054) — Windows image pasting from clipboard** (area/core)
   - Enables seamless image paste in Windows Terminal and bracketed-paste environments, with clean UI for pasted images.
   - Fixes empty bracketed-paste sequence handling in KeypressContext.

2. **[#27028](https://github.com/google-gemini/gemini-cli/pull/27028) — Sub-second `/chat` loading for large session histories** (area/core)
   - Reduces `/chat` command load time from 25+ seconds to ~634ms on a 59-session / 2.3GB benchmark.
   - Three compounding bottlenecks eliminated, including a new ultra-fast preview model.

3. **[#27047](https://github.com/google-gemini/gemini-cli/pull/27047) — Fix AfterAgent hook prompt_response to match streamed answer** (area/core, area/extensions)
   - Ensures `prompt_response` in `AfterAgent` hooks mirrors the text actually streamed, not a rebuild from the debug buffer.
   - Fixes duplicated/corrupted text in hook output (issue #27030).

4. **[#27341](https://github.com/google-gemini/gemini-cli/pull/27341) — Strip `functionCall.id` and `functionResponse.id` before API call** (area/agent)
   - Fixes 400 "Unknown name 'id'" error after tool calls. Internal IDs added for ACP IDE rendering were forwarded in the API payload but the Gemini API does not accept them.
   - Fixes #22774.

5. **[#27349](https://github.com/google-gemini/gemini-cli/pull/27349) — Strip CJK characters from model thought output** (area/agent)
   - Model occasionally emits Chinese/Japanese/Korean characters in English sessions. PR strips CJK from thought text to prevent non-English pollution in output.

6. **[#27348](https://github.com/google-gemini/gemini-cli/pull/27348) — Wrap Ajv validate() in try/catch to prevent crash on malformed schemas** (area/agent, priority/p1)
   - Fixes crash `Cannot read properties of undefined (reading 'type')` in `write_file`/`replace` tools when the LLM sends unexpected parameter shapes.
   - Ajv internal validation now caught gracefully.

7. **[#27335](https://github.com/google-gemini/gemini-cli/pull/27335) — Prevent SSRF via open redirect in web-fetch tool** (area/core)
   - `fetchWithTimeout` follows HTTP redirects automatically but `isBlockedHost` SSRF check only applies to the first URL. A public server can redirect to internal metadata endpoints (e.g., `169.254.169.254`).
   - Adds redirect destination validation.

8. **[#27354](https://github.com/google-gemini/gemini-cli/pull/27354) — Bypass node-pty on WSL for Windows executables** (area/core)
   - Addresses PTY interop issues on WSL when running `.exe` files inside a Linux PTY. Falls back to standard Node `child_process` to avoid terminal allocation failures.

9. **[#27329](https://github.com/google-gemini/gemini-cli/pull/27329) — Skip missing includeDirectories instead of crashing CLI startup** (area/core)
   - One missing directory in `settings.json` (`context.includeDirectories`) aborted CLI startup entirely. PR adds graceful skip with a warning.

10. **[#26088](https://github.com/google-gemini/gemini-cli/pull/26088) — Add F10 fallback for approval mode cycling** (area/core, area/platform)
    - Adds F10 as a fallback keybinding where `Shift+Tab` sequences are incorrectly parsed by Windows/WezTerm. Fixes #22738.

## Feature Request Clusters

- **Agent persona/role hot-swapping** — [#23657](https://github.com/google-gemini/gemini-cli/issues/23657) proposes `/agents adopt <name>` to dynamically switch agent instructions, toolset, and persona mid-session without starting a new chat. Multiple related issues (e.g., #23683) request better agent context initialization.

- **Quota visibility and management** — Several users (#24094, #22643, #20102) ask for built-in commands to check remaining daily quotas, reset times, and usage breakdowns. Currently users must infer limits from error messages.

- **Enterprise entitlement routing** — Multiple closed issues (#19970, #20032, #24222) describe confusion when a single Google account holds both consumer AI Pro subscriptions and enterprise Gemini Code Assist licenses. Users request clearer model entitlement logic and error messages.

## Developer Pain Points

- **Quota and rate-limit unpredictability** — The single most common frustration across today's issues. Users report quotas consumed far faster than expected (#22634), quotas never resetting after hitting limits (#22643), and the CLI ignoring API "reset after" instructions causing infinite retry loops (#23738).

- **Authentication and model access friction** — Repeated reports of OAuth failures on WSL2 (#23865), OAuth origin mismatches with custom MCP servers (#20017), and model access denied despite valid subscriptions (#24222, #20032). New user onboarding is also blocked by "Generator not initialized" errors (#25447).

- **Agent reliability and silent failures** — Agents hanging for 30+ minutes (#23627), silent exits with 50 errors (#24118), user message duplication during model fallback (#23889), and outputs from other users appearing in chat (#22525) all point to agent stability and data isolation concerns.

- **Security sandbox bypass risks** — Issues around `hookConfig.env` injection (#22503), SSRF via open redirect in web-fetch (#27335), and static allowlists enabling cross-project memory pollution (#22560) indicate ongoing work to harden the sandbox.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-29

## Today's Update Brief
Three patch releases shipped today (v1.0.56-1, v1.0.56-0, v1.0.55) bringing Claude Opus 4.8 support, code review agent model alignment, and smarter MCP tool deduplication. Issue activity remains high with 48 items updated in the last 24 hours, including a surge of reports around a new “duplicate item” websocket error affecting tool-calling workflows.

## Releases

**v1.0.56-1** (2026-05-29)
- Code review agent now uses the same model as the current session instead of a fixed default
- GitHub MCP server omits redundant `gh-replaceable` tools when `gh` CLI is on PATH, reducing token usage
- Fixed cursor position after pasting text

**v1.0.56-0** (2026-05-29)
- Trusted folder confirmation message now clarifies that permissions may be remembered for the session
- Context window tier selection now persists durably in session events and survives SDK-only resume paths, ensuring tier-derived limits are reapplied to request, compaction, and truncation

**v1.0.55** (2026-05-28)
- Free and Student plan users on token-based billing are restricted to Auto model selection with explanation in the model picker
- Claude thinking (reasoning) tokens now reported in session usage summaries
- Added support for Claude Opus 4.8
- Loading spinner no longer hangs indefinitely

## Hot Issues

1. **#223 — “Copilot Requests” permission not visible for org-owned fine-grained tokens**
   *Author: @RyanHecht* | Comments: 27 | 👍: 73
   Organizations cannot see the “Copilot Requests” permission when creating tokens owned by an org, forcing admins to use individual PATs for automation — a security concern.
   https://github.com/github/copilot-cli/issues/223

2. **#1274 — CLI constantly getting 400 errors for invalid request body**
   *Author: @unusualbob* | Comments: 24 | 👍: 11
   ~95% of code review prompts on diffs return 400 errors. Unclear if server-side validation or CLI request crafting is at fault. Debug logs included.
   https://github.com/github/copilot-cli/issues/1274

3. **#1044 — Slash commands not available in `copilot --acp`**
   *Author: @cocoich* | Comments: 15 | 👍: 0
   ACP frontends (e.g., Zed editor) cannot use slash commands because the CLI doesn’t emit `available_commands_update` in ACP mode.
   https://github.com/github/copilot-cli/issues/1044

4. **#3560 — `Duplicate item found with id fc_call_*` websocket error**
   *Author: @lgphp* | Comments: 4 | 👍: 1
   Sudden 400 errors on tool-calling turns. Plain chat works; failure only occurs after a tool/function call returns.
   https://github.com/github/copilot-cli/issues/3560

5. **#3559 — Frequent `websocket_error: Duplicate item found` from session-state replay**
   *Author: @drapetomaniac* | Comments: 3 | 👍: 0
   Reports that the duplicate item error appears to be session-state replay of `fc_call_*` IDs, suggesting a serialization bug in resume paths.
   https://github.com/github/copilot-cli/issues/3559

6. **#3558 — Duplicate Item Errors during initial processing**
   *Author: @psulightning* | Comments: 3 | 👍: 7
   Duplicate item errors on the first tool call of a session. Multiple users hit the same pattern within hours — likely a regression.
   https://github.com/github/copilot-cli/issues/3558

7. **#3042 — “ask” permissionDecision shows two confirmation prompts per gated tool call**
   *Author: @Kacie2025* | Comments: 3 | 👍: 0
   When a PreToolUse hook returns `permissionDecision: "ask"`, the CLI shows both the hook’s custom dialog and the native trust prompt, creating a double-confirmation UX.
   https://github.com/github/copilot-cli/issues/3042

8. **#3539 — System/Tools consume 73% of 200k context window, triggering auto-compaction on first message**
   *Author: @MadEste* | Comments: 3 | 👍: 2
   With ~10 MCP servers and plugins configured, system+tools overhead hits 146k tokens, leaving no room for user input before forced compaction.
   https://github.com/github/copilot-cli/issues/3539

9. **#1654 — Plan mode consistently ignored**
   *Author: @DylanEHolland* | Comments: 2 | 👍: 2
   Despite setting plan mode and explicit instructions to never dump code, the agent frequently outputs code, wasting tokens and violating user intent.
   https://github.com/github/copilot-cli/issues/1654

10. **#3355 — Allow configurable context window for Claude Opus 4.6 (200K cap vs 1M model capability)**
    *Author: @aksingh* | Comments: 2 | 👍: 2
    CLI caps Opus 4.6 at 200K tokens despite native 1M support, causing frequent compaction during deep technical sessions.
    https://github.com/github/copilot-cli/issues/3355

## Key PR Progress
No pull requests were updated in the last 24 hours.

## Feature Request Clusters

**MCP Server Management**
- Multiple requests for enabling/disabling MCP servers from the `/mcp show` menu without deleting/re-adding (#3564)
- Request to auto-enable `github-mcp-server` via config or command-line argument so users don’t run `/mcp enable` manually every session (#3548)

**Granular Session Control**
- Expose session name and ID in `/statusline` payload for distinguishing parallel sessions in tmux/wezterm (#3566)
- Security review command (`/security-review`) for automated vulnerability detection before commit (#1133)

**Context Window Flexibility**
- Allow users to configure the context window cap per model (e.g., unlocking Opus 4.6’s full 1M capacity) (#3355)
- Reduce system/tools overhead from MCP plugin registrations to avoid forced compaction on session start (#3539)

## Developer Pain Points

- **“Duplicate item” websocket errors**: Three reports in 24 hours (issues #3560, #3559, #3558) describe 400 errors with `fc_call_*` IDs being replayed. This appears to be a fresh regression in session-state serialization or tool-call deduplication, and the volume of reports suggests a wide impact on tool-using workflows.

- **Context window starvation from tooling overhead**: With multiple MCP servers, 73% of the context window is consumed before any user input (#3539). Combined with the hard 200K cap on models that support 1M tokens (#3355), users hit compaction loops immediately.

- **Startup freeze from unbounded glob**: Setting `COPILOT_CUSTOM_INSTRUCTIONS_DIRS` to a large directory tree causes 15–30 second unresponsive freezes (#3543). Recursive globbing over the user’s home directory is the suspected cause.

- **Duplicate permission prompts for gated tools**: `permissionDecision: "ask"` hooks trigger two confirmations instead of one (#3042), creating friction in automated plugin workflows.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-29

## Today's Update Brief
Activity remains moderate with **8 open/updated issues** and **14 pull requests** in the last 24 hours. No new releases were published. The community is actively submitting fixes for ACP protocol compliance, context compaction crashes, and shell/terminal stability issues. A significant discussion about the project's strategic direction (kimi-cli vs. kimi-code split) is drawing attention. The maintainer team merged several PRs, including a terminal hang fix and an ACP session history replay fix.

## Releases
None in the last 24 hours.

## Hot Issues

1. **[#2396 — Bug: kimi export crashes during context compaction — API 400 text content is empty](https://github.com/MoonshotAI/kimi-cli/issues/2396)**
   *Author: @rastinder | Created: 2026-05-29*
   Typing `kimi export` fails with a Moonshot API 400 error when the session enters context compaction. The compaction message contains empty/whitespace-only `TextPart`s, which the API rejects. Already has a companion PR (#2395). Affects `kimi-cli 1.45.0` on Linux. High-urgency for users relying on long sessions.

2. **[#2381 — Why abandon kimi-cli and redo kimi code? The old one didn't do a good job and still divides the community?](https://github.com/MoonshotAI/kimi-cli/issues/2381)**
   *Author: @QuantumLiu | Created: 2026-05-28 | Comments: 3*
   A strongly worded community complaint about the strategic decision to build a new `kimi-code` CLI rather than continuing to maintain `kimi-cli`. The author expresses concern about trust and productivity tool longevity. This is a sensitive community sentiment signal.

3. **[#1894 — Kimi CLI cannot recursively load nested skill directories](https://github.com/MoonshotAI/kimi-cli/issues/1894)**
   *Author: @retamia | Created: 2026-04-15 | Updated: 2026-05-28 | Comments: 5*
   Kimi CLI does not support recursive loading of nested skill directories (e.g., `.agents/skills/{name}/skills/xxx`), while Codex does. Users managing complex skill repositories are blocked from porting their workflows.

4. **[#2394 — feat(acp): expose per-turn token usage to ACP clients](https://github.com/MoonshotAI/kimi-cli/issues/2394)**
   *Author: @javierbarroso22-dev | Created: 2026-05-28*
   When running as an ACP server (`kimi acp`), Kimi does not report token usage to connected clients, even though it computes per-step usage internally. ACP host applications like orchestrators cannot track cost.

5. **[#2384 — Large context requests frequent ConnectTimeout, httpx connect_timeout not configurable](https://github.com/MoonshotAI/kimi-cli/issues/2384)**
   *Author: @1690834643 | Created: 2026-05-28*
   Long sessions with ≥120k input tokens frequently hit `ConnectTimeout` errors. The `httpx` connect timeout is hardcoded and not configurable. Affects power users with large codebases on WSL2.

6. **[#2385 — When searching for files in Zed, it will fall into an infinite loop](https://github.com/MoonshotAI/kimi-cli/issues/2385)**
   *Author: @wangshuai67 | Created: 2026-05-28*
   File search integration with Zed editor causes an infinite loop. Likely related to ACP protocol issues. Reported on Windows.

7. **[#2127 — [CLOSED] ACP protocol `session/list`, `session/get` not implemented; Zed cannot query history](https://github.com/MoonshotAI/kimi-cli/issues/2127)**
   *Author: @zhaoxu-233 | Created: 2026-04-30 | Updated: 2026-05-28*
   After closing and reopening Zed, previously sent conversation history is unavailable because Kimi CLI's ACP server doesn't implement `session/list` and `session/get`. Closed without details visible; community may want confirmation of resolution.

8. **[#1984 — [CLOSED] fix: terminal hang on exit and MCP connection leak](https://github.com/MoonshotAI/kimi-cli/issues/1984)**
   *Author: @thecannabisapp | Created: 2026-04-21 | Updated: 2026-05-28 | Comments: 1*
   After extended sessions, executing `/exit` or typing `exit` causes terminal hang, requiring force close. Additionally, system firewall reports orphan MCP connections after exit. Closed — fix merged via #1985. Important for stability-minded users.

## Key PR Progress

1. **[#2395 — fix(compaction): filter empty text parts to avoid API 400](https://github.com/MoonshotAI/kimi-cli/pull/2395)**
   *Author: @rastinder | Created: 2026-05-29*
   Filters out whitespace-only `TextPart`s during context compaction to avoid Moonshot API "text content is empty" errors. Same class of bug as #1663 but compaction path was missed. Directly addresses #2396.

2. **[#2391 — chore(release): bump kimi-cli to 1.46.0](https://github.com/MoonshotAI/kimi-cli/pull/2391)**
   *Author: @jackfish212 | Created: 2026-05-28 | Updated: 2026-05-29*
   Bumps `kimi-cli` to 1.46.0 and syncs `kimi-code` wrapper version. Suggests a release is imminent. Includes validation scripts.

3. **[#2393 — [CLOSED] docs: update evolution banner to announce rebuilt CLI release](https://github.com/MoonshotAI/kimi-cli/pull/2393)**
   *Author: @RealKai42 | Created: 2026-05-28*
   Updates the documentation site banner from "Kimi Code CLI has been upgraded to Kimi Code" to announce the rebuilt CLI release. Maintainer merging this signals official positioning of the new `kimi-code` as the primary client.

4. **[#1985 — [CLOSED] fix(term, app): prevent TTY hang on exit and close MCP connections during shutdown](https://github.com/MoonshotAI/kimi-cli/pull/1985)**
   *Author: @thecannabisapp | Created: 2026-04-21 | Updated: 2026-05-28*
   Fixes terminal hang on exit by making `os.read()` non-blocking in `_cursor_position_unix()`, and ensures MCP connections are properly closed during shutdown. Closes #1984. Merged.

5. **[#2132 — [CLOSED] fix(acp): replay session history on load](https://github.com/MoonshotAI/kimi-cli/pull/2132)**
   *Author: @bugkeep | Created: 2026-04-30 | Updated: 2026-05-28*
   Persists wire history for ACP runs so loaded sessions have replayable events. Addresses the Zed history persistence issue from #2127. Merged.

6. **[#2390 — [CLOSED] feat(shell): update welcome tip link and support styled Text](https://github.com/MoonshotAI/kimi-cli/pull/2390)**
   *Author: @jackfish212 | Created: 2026-05-28*
   Updates the welcome tip URL to `kimi.com/code` and adds support for clickable hyperlinks in the shell UI via `rich.text.Text`. Cosmetic but signals brand migration.

7. **[#2389 — fix(tools): include trailing output in error briefs and render brief as plain text](https://github.com/MoonshotAI/kimi-cli/pull/2389)**
   *Author: @liruifengv | Created: 2026-05-28*
   Improves error display when shell commands fail by showing trailing output in tool error briefs and rendering as plain text. UX improvement for debugging.

8. **[#2388 — fix(shell): persist pasted text placeholders](https://github.com/MoonshotAI/kimi-cli/pull/2388)**
   *Author: @Pluviobyte | Created: 2026-05-28*
   Long pasted text is folded into a placeholder like `[Pasted text #1]`, but the placeholder was lost on session history recall. Now persists across sessions. Fixes #1946.

9. **[#2386 — fix(session): map undo wire turns to context turns](https://github.com/MoonshotAI/kimi-cli/pull/2386)**
   *Author: @Pluviobyte | Created: 2026-05-28*
   ` /undo` and fork incorrectly used wire-turn index for context truncation. Now maps correctly, fixing cases where local slash-command turns broke undo behavior. Fixes #1974.

10. **[#2387 — fix(tools): preserve shell command headline details](https://github.com/MoonshotAI/kimi-cli/pull/2387)**
    *Author: @Pluviobyte | Created: 2026-05-28*
    Long `Used Shell (...)` headlines were aggressively truncated via `shorten_middle(..., width=50)`, hiding important command details. Now preserves more useful information. Fixes #2142.

## Feature Request Clusters

Based on today's issue data, the following recurring requests are visible:

- **Nested skill directory loading**: Users migrating from Codex expect recursive skill directory traversal (#1894). Multiple comments indicate this blocks complex agent workflows.
- **ACP token usage exposure**: Multiple ACP integration users request per-turn token consumption reporting — important for cost tracking in orchestrated workflows (#2394).
- **Session history persistence in Zed**: The inability to reload past conversations after restarting Zed continues to surface (#2127). The merged #2132 PR may address this, but no confirmation from reporters yet.

## Developer Pain Points

The following pain points recur across today's data:

1. **Project direction uncertainty**: Issue #2381 captures real frustration about the `kimi-cli` vs. `kimi-code` split. Users invested in `kimi-cli` workflows are concerned about abandonment and community fragmentation. The #2393 banner update PR suggests maintainers are aware and actively communicating the transition.

2. **Configuration inflexibility**: Hardcoded timeouts (#2384: `httpx connect_timeout`), non-configurable context limits, and lack of user-visible settings continue to frustrate advanced users.

3. **ACP protocol incompleteness**: Despite progress (#2132 merged), ACP issues remain active — token usage not exposed (#2394), infinite loops in file search (#2385), and incomplete protocol method implementations. ACP is clearly a high-priority integration path (Zed, orchestrators) but not yet stable.

4. **Crash on context compaction**: The API 400 "text content is empty" error (#2396) is a high-severity bug for anyone running long sessions and using `kimi export`. The fix (#2395) is straightforward but not yet merged.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-29

## Today's Update Brief

OpenCode shipped v1.15.12 with experimental WebSocket support and ACP integration improvements, while the community continues to surface concerns around GPT model latency (104 comments on #29079) and DeepSeek V4 Flash reasoning compatibility. Several important bugfix PRs landed today targeting file permission enforcement, subagent edit overrides, and empty text part persistence.

## Releases

**v1.15.12** — https://github.com/anomalyco/opencode/releases/tag/v1.15.12

**Core improvements:**
- ACP integrations can now send prompts, slash commands, and usage updates through `acp-next`
- Added WebSocket transport for OpenAI responses on supported channels (behind `OPENCODE_EXPERIMENTAL_WEBSOCKETS=true`)

**Bugfixes:**
- Enabled adaptive reasoning controls for Anthropic models

## Hot Issues

1. **#29079 — GPT Models take too long to respond** — `[OPEN]`
   *Author: @MarcoLouisNarca | Comments: 104 | 👍: 48*
   Users report GPT-5.4 with xhigh variant taking several minutes for simple commands like updating graphify. Significant community engagement suggesting timing may be influenced by reasoning effort selection.
   https://github.com/anomalyco/opencode/issues/29079

2. **#28846 — [FEATURE]: Adjust Go usage limits after DeepSeek V4 Pro permanent 75% price reduction** — `[OPEN]`
   *Author: @icocoon | Comments: 28 | 👍: 46*
   Requests OpenCode Go subscription usage limits be recalculated to reflect DeepSeek V4 Pro's 75% API price drop, arguing current quota modeling is out of date.
   https://github.com/anomalyco/opencode/issues/28846

3. **#27530 — Error: 4 of 5 requests failed: config.providers: Unexpected server error.** — `[OPEN]`
   *Author: @chrissound | Comments: 19 | 👍: 10*
   Startup failure affecting provider configuration and agent listing. Users report blocking issue with no clear recovery path.
   https://github.com/anomalyco/opencode/issues/27530

4. **#11176 — [FEATURE]: Official OpenCode VS Code extension** — `[OPEN]`
   *Author: @c2b247 | Comments: 18 | 👍: 91*
   Long-standing request (since January) for native VS Code integration to replace the current terminal-based workflow. Remains one of the most upvoted open feature requests.
   https://github.com/anomalyco/opencode/issues/11176

5. **#29618 — reasoning_content is missing when using DeepSeek V4 Flash in thinking** — `[OPEN]`
   *Author: @beeckrumi0000 | Comments: 11 | 👍: 3*
   Agent fails with `reasoning_content must be passed back` error when using DeepSeek V4 Flash/Pro through OpenRouter. Affects thinking-mode workflows for DeepSeek models.
   https://github.com/anomalyco/opencode/issues/29618

6. **#11232 — Feature Request: Native Scheduling for OpenCode** — `[OPEN]`
   *Author: @dzianisv | Comments: 10 | 👍: 11*
   Request for `opencode schedule --cron` to avoid OS-level cron/systemd dependencies. Could unlock autonomous agent workflows.
   https://github.com/anomalyco/opencode/issues/11232

7. **#23464 — Opus 4.7 occasionally failing tool calls (ex: question tool)** — `[CLOSED]`
   *Author: @cjnoname | Comments: 8 | 👍: 1*
   Invalid arguments error on question tool with Opus 4.7. Closed, but indicates ongoing tool call validation issues.
   https://github.com/anomalyco/opencode/issues/23464

8. **#29571 — Conversation permanently stuck after 'vision is not enabled' error from GitHub Copilot provider** — `[OPEN]`
   *Author: @rhuanbarreto | Comments: 5 | 👍: 1*
   Organization-managed Copilot users hit irrecoverable conversation freeze when vision/image support is disabled.
   https://github.com/anomalyco/opencode/issues/29571

9. **#28686 — Desktop V2 UI hides prompt controls and status popover** — `[OPEN]`
   *Author: @9drbxz8jnt-hash | Comments: 2 | 👍: 4*
   V2 UI removes agent selector and model variant/thinking-effort selector from composer; status popover unreachable except via legacy path. Raises UX regression concerns.
   https://github.com/anomalyco/opencode/issues/28686

10. **#28696 — [FEATURE]: Plugin/Agent/Skills/etc marketplace** — `[OPEN]`
    *Author: @rekram1-node | Comments: 2 | 👍: 8*
    Master issue for a unified plugin/agent/skill registry to improve discoverability and distribution.
    https://github.com/anomalyco/opencode/issues/28696

## Key PR Progress

1. **#29815 — fix(session): skip persisting empty text parts when model goes straight to tool call**
   *Author: @lexlian | Closes #29650*
   Prevents empty `text: ""` parts from being written to SQLite when model emits `text-start` then immediately tool-calls. Fixes blank assistant messages in UI.
   https://github.com/anomalyco/opencode/pull/29815

2. **#29217 — feat(TUI): Add inline $skill invocations with prepend + pasteText support**
   *Author: @jjdubski | Closes 5 issues*
   Adds `$` autocomplete in prompt composer for inline skill invocation, including prepend/pasteText modes. Addresses multiple long-standing feature requests.
   https://github.com/anomalyco/opencode/pull/29217

3. **#29814 — feat(tui): sort skills alphabetically when all are shown**
   *Author: @jjdubski | Closes #17321*
   Skills list via `/skills` command now alphabetically sorted. Search results remain relevance-ordered.
   https://github.com/anomalyco/opencode/pull/29814

4. **#29812 — feat(desktop-app): add menu item and configurable shortcut to open the opencode config file**
   *Author: @ouroboros-audio*
   Adds "Open Config File" command to desktop app menu and command palette for quick access to user config.
   https://github.com/anomalyco/opencode/pull/29812

5. **#29755 — fix(opencode): enforce read deny rules in glob and grep results**
   *Author: @Qingzhou-Joshua | Closes #29674*
   Fixes three separate bugs where `**/.env*` deny rules were leaking results in glob and grep operations including `**/` wildcard mismatches and permission bypasses.
   https://github.com/anomalyco/opencode/pull/29755

6. **#29710 — fix(tui): prevent prompt corruption when pasting near wide characters**
   *Author: @dauphinYan | Fixes #29707*
   Fixes prompt submission bug when pasting summarized text adjacent to wide (CJK) characters.
   https://github.com/anomalyco/opencode/pull/29710

7. **#29705 — fix(opencode): resolve snapshots from git subdirectories**
   *Author: @MuoDoo | Closes #27688*
   Fixes snapshot candidate paths when opencode is launched from a git subdirectory, where worktree-relative paths could fail.
   https://github.com/anomalyco/opencode/pull/29705

8. **#27654 — fix(task): subagent explicit edit:allow overrides parent edit:deny**
   *Author: @OrShmuel22 | Closes #26758*
   Fixes `deriveSubagentSessionPermission` unconditionally inheriting parent `edit: deny` rules, preventing subagents from being granted explicit edit access.
   https://github.com/anomalyco/opencode/pull/27654

9. **#29805 — fix(tui): animate pending inline tools**
   *Author: @kitlangton*
   Renders spinner for pending inline tools while awaiting displayable content, removes momentary "~ Delegating..." flash, and keeps failed fallback static.
   https://github.com/anomalyco/opencode/pull/29805

10. **#29803 — fix(desktop): bump @lydell/node-pty to 1.2.0-beta.12**
    *Author: @Hona*
    Fixes repeated Windows desktop sidecar crash/stderr flood by upgrading node-pty from beta.10 to beta.12.
    https://github.com/anomalyco/opencode/pull/29803

## Feature Request Clusters

- **VS Code Native Extension** (#11176, 👍91): Persistent demand for an official VS Code extension to replace terminal-based usage within the editor.
- **Native Scheduling/Cron** (#11232, 👍11): Request for built-in `opencode schedule` to run skills/prompts on cron-like timers without OS tools.
- **Integrated Browser in Desktop** (#26772, 👍1): Feature request for an embedded browser in desktop app for inspecting/interacting with live web apps.
- **Plugin/Skill Marketplace** (#28696, 👍8): Master issue for a centralized registry for discovering and distributing plugins, agents, and skills.
- **Android/Termux Support** (#29763, 👍0): Request for official Android support via Termux for mobile use cases.

## Developer Pain Points

- **GPT model response latency** (#29079, 104 comments): Highly upvoted issue with inconsistent response times on simple commands, potentially tied to reasoning effort control visibility.
- **Model-specific reasoning incompatibilities** (#29618, #29754, #29776): Multiple reports of DeepSeek V4 Flash/Pro failing with `reasoning_content` errors, Qwen 3.7 Max 401 on `response_format.type`, and Azure partner deployment output token caps.
- **UI regressions in Desktop V2** (#28686, #29051, #29808): V2 UI hides model variant selectors, reasoning effort controls, and status popover. Users report disappearing toggle buttons after layout changes.
- **Data persistence bugs** (#29650, #29618): Empty text parts written to DB when models skip prose to tool calls, causing broken message records and blank UI messages.
- **Permission enforcement gaps** (#29727, #29755): Skill listing and read-deny rules not consistently applied, with `**/.env*` patterns leaking and skill permissions not filtering the available list.
- **Breaking startup errors and provider handling** (#27530, #29571): Provider/server startup failures ("Unexpected server error", "vision is not enabled") causing unrecoverable conversation states without clear user recovery paths.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest – 2026-05-29

## Today's Update Brief
Today’s activity is driven by infrastructure hardening and server‑mode (Mode B) refactoring. A new nightly release (`v0.16.1‑nightly.20260529`) ships a CLI startup fix and telemetry improvements. 23 issues and 50 pull requests were updated in the last 24 hours, including an urgent SSL certificate report and a major daemon state‑layer bridge PR. Community discussion remains concentrated on the production‑ready roadmap for `qwen serve` (41 comments on #4175) and on session‑memory / compaction redesign proposals.

## Releases
- **[v0.16.1-nightly.20260529.7bed56b9b](https://github.com/QwenLM/qwen-code/releases/tag/v0.16.1-nightly.20260529.7bed56b9b)**
  - Fix: CLI surfaces startup warnings on `stderr` before TUI render ([#4461](https://github.com/QwenLM/qwen-code/pull/4461)).
  - Fix: Telemetry alignment (details in changelog).
- **tui-spacing-density-pr1-evidence** – Terminal evidence capture (VHS/tmux) for a TUI spacing density pull request; no code change.

## Hot Issues (10 noteworthy)

1. **[#4175 – Mode B feature-priority roadmap toward v0.16 production-ready](https://github.com/QwenLM/qwen-code/issues/4175)**
   *Labels: needs-triage, feature-request, core, non-interactive*
   Community roadmap discussion (41 comments). Author outlines remaining work after Stage 1 daemon and workspace refactor. High signal for server‑mode users.

2. **[#4493 – Rider unable to log into Qwen Code](https://github.com/QwenLM/qwen-code/issues/4493)**
   *Labels: bug, authentication, oauth, IDE*
   OAuth redirect loop when trying to call Aliyun token plan from JetBrains Rider. 7 comments, indicates IDE‑specific auth friction.

3. **[#4604 – API Error: Body Timeout (local models)](https://github.com/QwenLM/qwen-code/issues/4604)**
   *Labels: bug, performance, model-switching*
   Requests to local backends time out after 300 seconds. 3 comments; will be addressed by PR #4605.

4. **[#3004 – API Exponential Backoff & Fallback Retry (P1)](https://github.com/QwenLM/qwen-code/issues/3004)**
   *Labels: feature-request, core, priority/P1*
   Only configurable retry count today; requests exponential backoff, model downgrade on error, token refresh. 2 comments.

5. **[#3696 – Comprehensive hot-reload system (P1)](https://github.com/QwenLM/qwen-code/issues/3696)**
   *Labels: feature-request, core*
   Tracking issue for runtime hot‑reload of skills, extensions, MCP servers, config. 2 comments; sub‑tasks ordered by dependency.

6. **[#2128 – Memory grows unboundedly during long sessions (P1)](https://github.com/QwenLM/qwen-code/issues/2128)**
   *Labels: enhancement, core, session-management, priority/P1*
   Root cause identified: `useHistoryManager.history` accumulates without bound. Affects users running sessions for dozens of hours. 2 comments.

7. **[#4597 – Enhanced `/stats` command with cross‑session tracking](https://github.com/QwenLM/qwen-code/issues/4597)**
   *Labels: feature-request, telemetry, session-management, analytics*
   Requests persistent usage history and interactive dashboard, similar to Claude Code’s stats. 1 👍, 2 comments.

8. **[#4612 – [URGENT] SSL certificate invalid on coder.qwen.ai](https://github.com/QwenLM/qwen-code/issues/4612)**
   *Labels: bug, security*
   `ERR_CERT_AUTHORITY_INVALID` across multiple devices/networks. Blocking active coding sessions. 1 comment, 0 👍 but severity high.

9. **[#4591 – Built‑in Computer Use support (zero‑config)](https://github.com/QwenLM/qwen-code/issues/4591)**
   *Labels: feature-request, tools, integration, MCP, macOS*
   Proposes nine `computer_use__*` tools for native desktop control without user setup. 1 comment.

10. **[#4588 – Epic: Optimize TUI display, spacing, tools, branding](https://github.com/QwenLM/qwen-code/issues/4588)**
    *Labels: feature-request, ui, themes, rendering*
    Tracks five recurring problems in terminal output: noisy answers, redundant emoji, excessive whitespace, tool call clutter, missed branding. 0 comments – early epic.

## Key PR Progress (10 noteworthy)

1. **[#4613 – feat(daemon): bridge side‑channel state layer (A1 follow‑up + A2 + A5)](https://github.com/QwenLM/qwen-code/pull/4613)**
   Adds state cache, post‑roundtrip reconciliation, and session‑suspend handling. Directly advances server‑mode reliability.

2. **[#4605 – fix(core): disable undici 300s bodyTimeout for no‑proxy Node.js path](https://github.com/QwenLM/qwen-code/pull/4605)**
   Resolves the 5‑minute timeout blocking local model users (issue #4604). Surgical fix for a common pain point.

3. **[#4608 – feat(telemetry): add tool spans and session.id to daemon/ACP path](https://github.com/QwenLM/qwen-code/pull/4608)**
   Adds missing tracing spans to daemon sessions, enabling querying by session ID in ARMS. Closes #4602.

4. **[#4563 – refactor(serve): extract DaemonWorkspaceService from AcpSessionBridge](https://github.com/QwenLM/qwen-code/pull/4563)**
   Decomposes the HTTP bridge into four sub‑services (File/Auth/Agents/Memory). Reduces coupling for workspace‑scoped operations.

5. **[#4552 – feat(serve): runtime MCP server add/remove (T2.8)](https://github.com/QwenLM/qwen-code/pull/4552)**
   Adds `POST /workspace/mcp/servers` endpoints with mutation gating. No restart required.

6. **[#4600 – fix(ui): distinguish auto approval mode indicators](https://github.com/QwenLM/qwen-code/pull/4600)**
   Differentiates yellow (auto‑accept edits) from blue (classifier auto mode) in CLI prompts. Includes regression tests.

7. **[#4603 – feat(web‑shell): add /delete command with batch delete support](https://github.com/QwenLM/qwen-code/pull/4603)**
   New slash command and `POST /sessions/delete` endpoint for batch deletion. Improves web‑shell session management.

8. **[#4520 – fix(core): truncate model‑facing tool output](https://github.com/QwenLM/qwen-code/pull/4520)**
   Prevents context overflow by truncating oversized tool results and saving full output to temp files. Improves long‑session stability.

9. **[#3855 – feat(installer): verify release assets + switch docs to standalone entrypoint](https://github.com/QwenLM/qwen-code/pull/3855)**
   Adds SSRF/symlink/archive guards; updates public installation docs to use the new standalone script. Closes #3728 partially.

10. **[#4333 – feat(core): atomic write rollout for credentials, memory, config, JSONL](https://github.com/QwenLM/qwen-code/pull/4333)**
    Replaces bare `fs.writeFile` with atomic helpers in security‑sensitive paths. Closes #4095 Phase 2 and #3681.

## Feature Request Clusters

- **Server Mode (Mode B) maturity** – #4175 (roadmap), #4563 (workspace extraction), #4613 (state layer), #4552 (MCP runtime), #4606 (request logging). Community expects production readiness.
- **Session & memory management** – #2128 (memory leak), #4592 (compaction replacement with summary+restoration), #4593 (`/clear` behaviour change), #4597 (cross‑session stats). Multiple proposals to fix unbounded growth and improve context handling.
- **TUI & CLI polish** – #4588 (spacing, branding, clutter), #4584 (simplify auto‑mode startup text), #4600 (approval mode indicators). Focus on reducing visual noise and improving readability.
- **Developer experience & onboarding** – #3728 (standalone installer), #3855 (installer hardening), #4493 (Rider login), #4586 (Ctrl+C exit in PyCharm terminal). Low barrier to entry and IDE integration are common themes.

## Developer Pain Points

- **SSL certificate block** – Two issues (#4611, #4612) report `ERR_CERT_AUTHORITY_INVALID` on `coder.qwen.ai`, affecting all network environments. Blocking active work for multiple users.
- **Local model timeouts** – Issue #4604 and PR #4605 highlight a hard 300‑second undici body timeout that breaks long‑running local model requests. Fix is in review.
- **Memory leaks in long sessions** – Issue #2128 (P1) remains open; session history accumulates without bound. Users running sessions for hours are affected.
- **IDE login friction** – JetBrains Rider users (#4493) face OAuth redirect loops. No workaround documented yet.
- **Accidental Ctrl+C exit** – Issue #4586 reports that after upgrade, a single Ctrl+C in PyCharm terminal exits the agent, whereas previously two presses were required. Also ESC no longer interrupts conversation.

</details>