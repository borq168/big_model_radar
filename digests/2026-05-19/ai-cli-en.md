# AI CLI Tools Community Digest 2026-05-19

> Generated: 2026-05-19 02:31 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# Cross-Tool AI CLI Comparison Report — 2026-05-19

## 1. Daily Cross-Tool Overview

Today saw moderate-to-high activity across all six tracked tools, with **Claude Code** (v2.1.144), **OpenAI Codex** (rust-v0.131.0 + alpha), **GitHub Copilot CLI** (v1.0.49 + pre-release), and **OpenCode** (v1.15.5) all shipping updates. **Gemini CLI** and **Qwen Code** published only nightly/zero releases but maintained heavy PR and issue volume. Common pain points across tools included terminal rendering corruption, session data loss, permission bypass friction, and MCP integration gaps. The most emotionally charged issue today was a data-loss report on Gemini CLI (#26856, "$300 worth of work deleted") and the long-running Claude Code phone verification bug (#34229, now at 740+ comments). Developer attention is concentrated on background session workflows, model fallback chains, and hook/plugin reliability.

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Release Today |
|---|---|---|---|
| **Claude Code** | ~20+ hot issues (10 selected) | 2 | v2.1.144 (patch) |
| **OpenAI Codex** | 50+ | 50+ | rust-v0.131.0 + rust-v0.132.0-alpha.1 |
| **Gemini CLI** | 10 selected (high engagement) | 10 selected (3 closed) | v0.44.0-nightly.20260518 |
| **Copilot CLI** | 33 open/updated | 3 | v1.0.49 + v1.0.49-6 pre-release |
| **Kimi Code** | 6 open | 2 | None |
| **OpenCode** | ~30 (10 selected) | ~10 selected | v1.15.5 (patch) |
| **Qwen Code** | 33 | 50 | None |

**Note:** Issue/PR counts are based on selected highlights in each digest; actual totals may be higher.

## 3. Shared Feature Directions

**Session Branching & Forking** – Appearing in **Claude Code** (#59818, `/fork` command proposal) and **OpenAI Codex** (PR #23352 preserves context baselines for agent forks). Both communities want parallel session exploration that preserves parent context instead of rebuilding.

**Memory/Context Continuity** – **Claude Code** (#14228, sync claude.ai memory to CLI) and **Copilot CLI** (#3364, persistent goals via `.copilot/goals.md`) both request cross-session user preferences. The specific mechanism differs (cloud sync vs. local file) but the need is shared.

**Permission Bypass / YOLO Mode** – **Claude Code** (#60410 batch approval, #51798 hook regression), **Gemini CLI** (destructive action guardrails #22672), and **OpenCode** (#8463 `--dangerously-skip-permissions`) all have active discussions about suppressing per-command approval dialogs for trusted/automated workflows. **OpenCode's** issue has the most upvotes (55).

**MCP Tool Integration Gaps** – **Claude Code** (no `nextCursor` pagination support, closed), **Gemini CLI** (PR #26873 accepts `null` resource lists), **Copilot CLI** (#3379 naming conflicts, #3380 `--disable-repo-mcps` flag), and **OpenCode** (provider-level bugs) all demonstrate that MCP protocol handling remains uneven across tools.

**Terminal Rendering Corruption** – **Claude Code** (#59539, #59401, garbled text on macOS/Electron) and **Copilot CLI** (#3369, CJK paste garbling) both report terminal display degradation in long-running or CJK-heavy sessions.

**Data Loss After Updates** – **OpenAI Codex** (#20741, desktop chat histories disappeared after macOS app update) and **Claude Code** (#60407, `claude plugin install` silently drops fields from `.claude.json`) both show users losing configuration or history after version upgrades.

## 4. Differentiation Analysis

**Claude Code** is prioritizing **agent workflow parity** — the `/resume` command for background sessions, subagent duration notifications, and the `/fork` proposal all aim to make background/parallel work first-class. Its hook regression (#51798) is notable because it breaks a pattern that previously worked.

**OpenAI Codex** is investing heavily in **TUI and server infrastructure** — the two releases today included blended token display, responsive Markdown tables, thread settings API, exec-server WebSocket reconnect, and plugin reload commands. The volume of PRs (50+) and the multi-PR thread-settings series suggest Codex has the most active core engineering velocity this week.

**Gemini CLI** is focused on **authentication resilience and model fallback** — three closed PRs today improved auth error messages, Google Cloud env-var handling, and OAuth path. The open PRs adding `gemini-2.5-flash-lite` to the fallback chain and pinning `gemini-3.1-pro-preview` explicitly aim to reduce 429 errors.

**Copilot CLI** shipped the most targeted bugfix release: the `postToolUse` hook context injection fix (#2980) and CJK/emoji cursor positioning were both specific community-reported regressions. Its relatively low PR volume (3) suggests a stabilization phase.

**Kimi Code** is at a different maturity stage — no releases today, a persistent 3-month-old 400 error (#778), and the first explicit request for Cline integration (#2322). The two memory-leak fixes from @ekhodzitsky (TCP connector reuse, bounded broadcast queues) are the only substantial engineering activity.

**OpenCode** is advancing **experimental native runtime support** (PR #28271 adds Anthropic to the native LLM path) and **test infrastructure** (@kitlangton's migration to `it.instance` fixtures across 7 PRs). The YOLO mode request (#8463, 55 upvotes) has the most community traction of any permission-related request across all tools.

**Qwen Code** is singularly focused on the `qwen serve` daemon mode — the two top-tracking issues (#4175 roadmap, #3803 design) and multiple post-merge fix PRs (#4305, #4302, #4297) indicate a tool in active infrastructure buildout. Its OOM crash reports (3 in 3 days) suggest production-readiness gaps.

## 5. Community Activity Notes

**Most active by issue volume:** **OpenAI Codex** and **Qwen Code** each reported 50+ updated issues and 50+ PRs in 24 hours. Codex had the most diverse range (chat history loss, safety-check false positives, mobile pairing, token waste). Qwen Code's activity is concentrated on serve-mode development and memory bugs.

**Most active by release cadence:** **OpenAI Codex** (two releases, including an alpha) and **Copilot CLI** (stable + pre-release) had the fastest shipping today. Claude Code and OpenCode each shipped one patch.

**Highest community engagement on a single issue:** **Claude Code** #34229 (phone verification, 737 comments, 813 👍) continues as the most-engaged open bug across all tools. **Gemini CLI** #26856 (data loss, 43 comments, highly emotional) and **OpenCode** #4283 (clipboard not working, 94 comments, 84 👍) are the next most active.

**Maintainer responsiveness:** **Gemini CLI** maintainers engaged on data-loss issue #26856 (requested exported chat history) and closed 3 PRs today. **Qwen Code** maintainer @doudouOUC is heavily engaged on serve-mode design discussions. **Claude Code** maintainers closed several terminal corruption issues as duplicates/ fixed. **Kimi Code** has no evidence of maintainer response to its top issues (#778 unresolved since January).

**Notable community contribution patterns:** @kitlangton (OpenCode) filed 7 test-infrastructure PRs in one day, an unusually high individual contributor velocity. @ekhodzitsky (Kimi Code) provided both memory-leak fixes today, the only substantive engineering work on that tool.

## 6. Evidence-Backed Observations

**Terminal rendering corruption is a cross-tool pain point** – Claude Code (#59539, #59401, #59509) and Copilot CLI (#3369) both report garbled text or CJK paste issues in long-running sessions. Claude Code's issues were closed as duplicate/fixed, suggesting resolution may be emerging. Copilot CLI's CJK issue remains open after the v1.0.49 cursor fix, indicating incomplete coverage.

**Data loss from configuration rewrites is a recurring pattern** – Claude Code (#60407, plugin install drops `.claude.json` fields) and OpenAI Codex (#20741, desktop chat histories lost after update) both show users losing data through tool-initiated state mutations. Neither tool provides a data migration or backup strategy.

**Permission bypass (YOLO mode) demand is consistent but unshipped** – OpenCode (#8463, 55 👍), Claude Code (#60410 batch approval, #51798 hook regression), and Gemini CLI (#22672 destructive guardrails) all have active requests for reducing per-command prompts in trusted contexts. No tool has shipped a comprehensive solution; Claude Code's regression (#51798) actually made the problem worse.

**MCP pagination and null-handling remain inconsistent** – Claude Code closed #39586 (no `nextCursor` support) as stale. Gemini CLI open PR #26873 fixes `null` resource list acceptance. Copilot CLI has naming conflicts between user and repo MCP configs (#3379). The protocol is widely used but implementation quality varies per tool.

**Model fallback chains are gaining attention for capacity management** – Gemini CLI (PR #26845 adds flash-lite to fallback, PR #26853 pins 3.1-pro) and Copilot CLI (#3242 GPT sessions failing on PLAN) both show users hitting model-specific failures that fallback could mitigate. This is a response to the persistent 429/rate-limit issues across the ecosystem.

**No clear cross-tool signal on mobile support** – OpenAI Codex has macOS-only mobile remote pairing and 4 concurrent issues about instability (#23078, #23112, #23290, #22950). No other tool has mobile feature discussion in today's data, suggesting Codex is the only tool actively attempting mobile integration.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-05-19

## Today's Update Brief

Today saw one patch release (v2.1.144) adding `/resume` support for background sessions and elapsed-time notifications for subagents. Issue activity remained high, with the long-running phone-verification bug (#34229) approaching 740 comments and a cluster of terminal-rendering corruption reports (#59539, #59509, #59401) all closed as duplicates or fixed. Two new data‑loss bugs in settings and plugin management were reported, and documentation gaps for Agent View and custom MCP tools drew multiple new issues.

## Releases

**v2.1.144** — [Full changelog](https://github.com/anthropics/claude-code/releases/tag/v2.1.144)
- Added `/resume` command for background sessions — sessions started with `claude --bg` or via Agent view now appear alongside interactive ones, marked with `bg`.
- Background subagent completion notifications now show elapsed duration (e.g. “Agent completed · 3h 2m 5s”).
- `/plugin` support (description truncated in release notes).

The release appears to focus on improving the background/agent workflow parity.

## Hot Issues (10 selected)

1. **#34229 – Phone verification [BUG]**
   *737 comments, 813 👍*
   Users unable to complete phone verification during sign-up. The sheer volume makes this the most-engaged open issue.
   [Link](https://github.com/anthropics/claude-code/issues/34229)

2. **#36151 – Multi-account switching in Claude Mobile app [FEATURE]**
   *62 comments, 235 👍*
   Request to allow switching between accounts without shared email. High community demand for mobile account management.
   [Link](https://github.com/anthropics/claude-code/issues/36151)

3. **#51798 – PreToolUse `allow` no longer suppresses Bash unsandboxed prompt (regression since 2.1.116)**
   *22 comments*
   Hooks returning `permissionDecision: "allow"` for `dangerouslyDisableSandbox: true` now still show a confirmation dialog. Affects automated workflows relying on hooks for silent approval.
   [Link](https://github.com/anthropics/claude-code/issues/51798)

4. **#33045 – Agent tool isolation: `worktree` has no effect for team agents**
   *18 comments*
   When using team agents with worktree isolation, the agent still runs in the main repository, defeating isolation.
   [Link](https://github.com/anthropics/claude-code/issues/33045)

5. **#14228 – Claude Code should access user’s claude.ai memory [Feature Request]**
   *14 comments, 25 👍*
   Users want personal context (name, preferences) carried from claude.ai into the CLI. A long-standing request (since Dec 2025).
   [Link](https://github.com/anthropics/claude-code/issues/14228)

6. **#39586 – MCP tools/list pagination ignored (no `nextCursor` support) [CLOSED]**
   *9 comments*
   Claude Code does not follow MCP protocol pagination, potentially limiting discovery for servers with many tools. Marked stale and closed.
   [Link](https://github.com/anthropics/claude-code/issues/39586)

7. **#59539 – Terminal display corrupted with garbled characters [CLOSED]**
   *8 comments*
   User reports complete visual corruption in every session. Closed as duplicate; related to #59401 and #59509.
   [Link](https://github.com/anthropics/claude-code/issues/59539)

8. **#47976 – Read on mislabeled .png causes unrecoverable session corruption [CLOSED]**
   *7 comments*
   Reading a non-image file with a .png extension crashes the session with a permanent “Could not process image” error.
   [Link](https://github.com/anthropics/claude-code/issues/47976)

9. **#59401 – Progressive text rendering corruption in long-running terminal sessions (macOS/Electron) [CLOSED]**
   *6 comments*
   Text degrades over time; root cause appears to be in the terminal rendering layer. Closed as duplicate/fixed.
   [Link](https://github.com/anthropics/claude-code/issues/59401)

10. **#59818 – Add `/fork` command to create parallel session branches [Feature Request]**
    *4 comments*
    User proposes a `/fork` command to duplicate session context for parallel exploration. Aligns with existing `/branch` and recent background-session work.
    [Link](https://github.com/anthropics/claude-code/issues/59818)

## Key PR Progress

1. **#60280 – chore(ci): SHA-pin remaining actions/checkout and actions/github-script**
   *Open, 0 comments*
   Follow-up to #56784, pinning third-party GitHub Actions to specific SHAs across six workflows. Improves supply-chain security.
   [Link](https://github.com/anthropics/claude-code/pull/60280)

2. **#58673 – s**
   *Open, 0 comments*
   Minimal PR with title and description “s”. Likely a test or accidental opening. Noteworthy only for its lack of substance.
   [Link](https://github.com/anthropics/claude-code/pull/58673)

*(No other PRs were updated in the last 24h according to the provided data.)*

## Feature Request Clusters

- **Session branching & forking** (#59818, #59889, #39484 / “Fork Conversation from here”) – Multiple users want to duplicate session context for parallel debugging or exploration, complementing the new `/resume` and background-session features.
- **Memory/context continuity with claude.ai** (#14228) – A persistent ask to synchronize user preferences, interactions, and “memory” between the web app and CLI.
- **Model adherence to CLAUDE.md** (#60339, #60323, #59566) – Users report the model intermittently ignores explicit instructions in configuration files, even when loaded into context. Some suggest the system‑reminder for `TaskCreate` overrides user rules.
- **Permission batch/session approval** (#60410, #51798) – Automated QA and script-driven workflows are hindered by per-command approval dialogs. Requests include a “trust this session” mode or batch approval.
- **Documentation gaps for Agent View** (#60414, #60411, #60408) – Users found missing or incorrect docs about background session behavior, model fallback for gateways, and MCP image MIME handling.

## Developer Pain Points

- **Terminal rendering corruption** – Three separate issues (#59539, #59509, #59401) all reported garbled or “matrix” text in long-running sessions on macOS and VS Code integration. Likely a single underlying cause that has been addressed in recent releases.
- **Data loss from settings rewrites** – Two reports today (#60407 and #59870) show that `claude plugin install` and permission grants silently drop fields from `.claude.json` and `settings.json`. Any custom keys (e.g. top-level `hooks`) are lost, causing hard-to-debug configuration breakage.
- **Session corruption from bad tool parameters** – #47976 and #40201 describe unrecoverable “Could not process image” errors when the Read tool receives a mislabeled file. Only a restart resolves it.
- **Regression in hook‑based permission suppression** – #51798 shows that a once-working pattern (hook returning `allow`) now prompts users, breaking automated workflows that depend on silent approval for safe commands.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-19

## Today's Update Brief

Two releases landed today (rust-v0.131.0 and rust-v0.132.0-alpha.1) with substantial TUI enhancements and session control improvements. The community filed 50+ updated issues and 50+ PRs in the last 24 hours, with elevated attention on chat history loss after desktop app updates, false-positive safety-check blocks in CLI, and mobile remote pairing failures.

## Releases

**rust-v0.131.0** — Full release with new features including: data-driven service-tier commands, blended token usage display, permissions/approval mode, effective workspace roots, responsive Markdown tables in TUI, and expanded `@` mentions search. ([Release](https://github.com/openai/codex/releases/tag/rust-v0.131.0))

**rust-v0.132.0-alpha.1** — Pre-release build; no changelog published yet. ([Release](https://github.com/openai/codex/releases/tag/rust-v0.132.0-alpha.1))

## Hot Issues

1. **#11023 — Codex desktop app for Linux** (57 comments, 233 👍)
   Request for a native Linux desktop build. User reports macOS app unusable due to a power-consumption bug and wants to migrate to Linux. Highly upvoted, no maintainer resolution yet.
   [Link](https://github.com/openai/codex/issues/11023)

2. **#12564 — Allow renaming task/thread titles** (54 comments, 97 👍)
   VS Code extension user asks for thread title editing to improve history navigation. Multiple workarounds proposed, no official feature shipped.
   [Link](https://github.com/openai/codex/issues/12564)

3. **#4867 — Allow PRs with binary files** (26 comments, 42 👍)
   Codex Web blocks PR creation when binary files are accidentally included, forcing a full 40-minute task re-run. Users want opt-in or auto-detection.
   [Link](https://github.com/openai/codex/issues/4867)

4. **#13733 — Background process polling wastes tokens** (23 comments, 17 👍)
   Each `cargo build` poll sends full conversation history, burning credits proportional to history size × poll count. Affects long-running builds significantly.
   [Link](https://github.com/openai/codex/issues/13733)

5. **#20741 — Desktop project chat histories disappeared after update** (16 comments, 7 👍)
   macOS app update v26.429.30905 caused all project chat histories to vanish. User reports local SQLite files still contain data but app won't display them.
   [Link](https://github.com/openai/codex/issues/20741)

6. **#4218 — Regression: Shift+Enter sends prompt instead of inserting line break (macOS)** (15 comments, 13 👍)
   TUI regression re-introduces a previously fixed bug. Blocks multiline input workflow on macOS.
   [Link](https://github.com/openai/codex/issues/4218)

7. **#13891 — `codex mcp login` omits OAuth resource indicator** (11 comments, 9 👍)
   CLI login request missing the `resource` parameter causes wrong token audience, breaking MCP authentication with downstream services.
   [Link](https://github.com/openai/codex/issues/13891)

8. **#23078 — Mobile remote connection cannot be paired again after removing device on Mac** (10 comments)
   Users who remove a mobile device from the Mac desktop app cannot re-pair it. Stale registration persists server-side.
   [Link](https://github.com/openai/codex/issues/23078)

9. **#16672 — Global search across thread titles and conversation content** (7 comments, 7 👍)
   App users cannot find past tasks by content. Currently limited to exact thread-name recall.
   [Link](https://github.com/openai/codex/issues/16672)

10. **#23271 — Android root module development flagged as cybersecurity risk** (6 comments)
    CLI false-positive safety check errors when developing Android root modules. User's account flagged despite legitimate development use.
    [Link](https://github.com/openai/codex/issues/23271)

## Key PR Progress

1. **#23396 — Extract turn skill and plugin injections**
   Refactors `run_turn` by extracting inline skill/plugin/app/MCP injection logic into dedicated functions, cleaning orchestration code.
   [Link](https://github.com/openai/codex/pull/23396)

2. **#22509 — [6 of 7] Add app-server thread settings API**
   Adds a remote API for clients to update thread settings between turns, plus broadcast notifications for multi-client sync.
   [Link](https://github.com/openai/codex/pull/22509)

3. **#23210 — Clear stale plan progress after terminal turns**
   Prevents stranded "in progress" spinner states when a turn ends without an active long-running goal.
   [Link](https://github.com/openai/codex/pull/23210)

4. **#22508 — [5 of 7] Replace OverrideTurnContext with ThreadSettings**
   Introduces `Op::ThreadSettings` as a queued settings-only update, removing legacy `OverrideTurnContext`.
   [Link](https://github.com/openai/codex/pull/22508)

5. **#23385 — Make remote app-server proxy acquisition idempotent**
   Prevents duplicate startup work when remote SSH clients reconnect while an older detached server process is still alive.
   [Link](https://github.com/openai/codex/pull/23385)

6. **#23395 — Add exec-server websocket reconnect foundation**
   Adds same-host WebSocket reconnect logic for remote exec-server clients, maintaining session state across connection resets.
   [Link](https://github.com/openai/codex/pull/23395)

7. **#23363 — TUI: Default to unified mentions, deprecate gate**
   Makes unified `@mentions` the default behavior, merges file-only search into the unified flow, retains old config flag as no-op.
   [Link](https://github.com/openai/codex/pull/23363)

8. **#23369 — Make local environment optional in EnvironmentManager**
   Refactors `EnvironmentManager` to allow optional local environment paths, simplifying snapshot materialization and constructor surface.
   [Link](https://github.com/openai/codex/pull/23369)

9. **#23352 — Preserve context baselines for full-history agent forks**
   Ensures agent forks retain the parent's prompt prefix and cache continuity instead of rebuilding startup context.
   [Link](https://github.com/openai/codex/pull/23352)

10. **#23299 — Add plugin reload command**
    Adds `codex plugin reload` CLI command, `/reload-plugins` TUI command, and a model-callable `reload_plugins` core tool.
    [Link](https://github.com/openai/codex/pull/23299)

## Feature Request Clusters

**History management and search** — Multiple requests for cross-session search (titles + content), thread renaming, and global search (#12564, #16672, #12963, #17553, #18884). Users consistently report difficulty revisiting past work.

**Linux desktop support** — Issue #11023 remains the top-voted open feature request (233 👍). Combined with #10432 (macOS power bug), Linux-native users are eager for an alternative.

**Cross-platform remote control parity** — Windows and Linux users request mobile remote control support (#23082, #23078, #22950). Currently macOS-only for mobile pairing.

**Session and resource management** — Users want `/recap` and `/btw` commands for better session awareness (#18884), plus OAuth resource indicators for MCP tools (#13891).

## Developer Pain Points

**Token waste from background polling** (#13733, 23 comments) — Each status check on long-running processes burns tokens proportional to full conversation history, making `cargo build`/`cargo test` cycles expensive. No official fix yet.

**False-positive safety checks blocking legitimate workflows** (#23271, #23220, #22988, #23381 — 4 separate issues from same user) — CLI safety-check flags GSM/DevOps and root module work as cybersecurity risks, and the "Trusted Access" unblocking flow itself is blocked. Persistent frustration across multiple days.

**Data loss after updates** (#20741, #23193 — desktop chat histories disappearing; #22719 — in-app browser comments auto-submitting) — Recent app updates cause irrecoverable history loss or behavioral regressions, with no data migration path provided.

**Mobile remote pairing instability** (#23078, #23112, #23290, #22950 — 4 issues in 3 days) — Stale device registrations, 403 errors on reconnection, and single-host-only display make mobile remote control unreliable.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-19

## Today’s Update Brief

Activity remains high: one nightly release landed with a sub‑agent feature flag, while the issue tracker saw continued discussion on capacity‑related 429 errors (111 comments) and a high‑severity data‑loss report (43 comments, 14 👍). Several open PRs targeting authentication resilience, model fallback chains, and memory‑leak fixes were updated or merged.

## Releases

**v0.44.0-nightly.20260518**
- [`feat(core): add adk.agentSessionSubagentEnabled flag`](https://github.com/google-gemini/gemini-cli/pull/26947) — introduces a flag to control sub‑agent session behaviour in the ADK layer.

[Full changelog](https://github.com/google-gemini/gemini-cli/compare/v0.44.0-nightly.20260517.g77e65c0db...v0.44.0-nightly.20260518.g5611ff40e)

## Hot Issues (10 noteworthy)

1. **[#24937 – Tracking: 429 / Capacity Issues](https://github.com/google-gemini/gemini-cli/issues/24937)**
   **Workflow:** All API‑based flows. **Impact:** Users repeatedly hit rate limits with no graceful handling. **Signal:** 111 comments, labelled `priority/p1`, now the central dedup point.

2. **[#26856 – Data loss after agent actions](https://github.com/google-gemini/gemini-cli/issues/26856)**
   **Workflow:** Agent‑driven file modification. **Impact:** User reports “$300 worth of work” deleted; highly emotional report. **Signal:** 43 comments, 14 👍; maintainers request exported chat history.

3. **[#22745 – AST‑aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)**
   **Workflow:** Codebase understanding and tool‑call precision. **Impact:** Could reduce turns and token waste. **Signal:** 7 comments, epic with child issues (#22746, #22747).

4. **[#22323 – Subagent recovery after MAX_TURNS reports false success](https://github.com/google-gemini/gemini-cli/issues/22323)**
   **Workflow:** Sub‑agent orchestration. **Impact:** `codebase_investigator` returns success even when it hit max turns without doing any work. **Signal:** 6 comments, `status/need-retesting`.

5. **[#21968 – Gemini does not use skills and sub‑agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)**
   **Workflow:** Custom skill invocation. **Impact:** Skills only used when explicitly instructed, reducing automation value. **Signal:** 6 comments, anecdotal but widely observed.

6. **[#18292 – Infinite self‑referential loop with `-p "hy" --output-format stream-json`](https://github.com/google-gemini/gemini-cli/issues/18292)**
   **Workflow:** Non‑interactive piped output. **Impact:** Endless loop outputting internal reasoning; breaks automation pipelines. **Signal:** 4 comments, `priority/p1`.

7. **[#21983 – Browser sub‑agent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)**
   **Workflow:** Browser‑based agent tasks. **Impact:** Termination reason “GOAL” but fails silently on Wayland. **Signal:** 4 comments, 1 👍.

8. **[#25166 – Shell command execution stuck on “Waiting input” after completion](https://github.com/google-gemini/gemini-cli/issues/25166)**
   **Workflow:** Shell tool execution. **Impact:** Hang after simple commands, impeding multi‑step workflows. **Signal:** 3 comments, 3 👍.

9. **[#23571 – Model creates tmp scripts in random directories](https://github.com/google-gemini/gemini-cli/issues/23571)**
   **Workflow:** Shell‑only execution mode. **Impact:** Workspace pollution; cleanup overhead for version control. **Signal:** 3 comments.

10. **[#26993 – Unhandled Promise Rejection on OAuth Callback Timeout](https://github.com/google-gemini/gemini-cli/issues/26993)**
    **Workflow:** Authentication. **Impact:** CLI crashes during slow OAuth flows. **Signal:** 1 comment but labelled `area/security`.

## Key PR Progress (10 important)

1. **[#26428 – IDE paste bindings for terminal setup (closed)](https://github.com/google-gemini/gemini-cli/pull/26428)**
   Adds `ctrl+v`, `cmd+v`, `alt+v` send‑sequence bindings for VS Code‑style terminals. Fixes #22185.

2. **[#26420 – Ignore GOOGLE_CLOUD_PROJECT for LOGIN_WITH_GOOGLE (closed)](https://github.com/google-gemini/gemini-cli/pull/26420)**
   Prevents `403 Permission Denied` when the env var is set. Fixes a user‑confusion bug.

3. **[#26432 – Improved authentication error messages (closed)](https://github.com/google-gemini/gemini-cli/pull/26432)**
   Replaces vague stack traces with actionable error text. Addresses #3074.

4. **[#26439 – Recognise structured ENOENT codes in ACP (closed)](https://github.com/google-gemini/gemini-cli/pull/26439)**
   Extends file‑not‑found detection beyond simple substring matching.

5. **[#26873 – Accept null MCP resource lists (open)](https://github.com/google-gemini/gemini-cli/pull/26873)**
   Fixes MCP discovery when servers return `resources: null` instead of `[]`.

6. **[#26853 – Keep explicit Gemini 3.1 Pro selection pinned (open)](https://github.com/google-gemini/gemini-cli/pull/26853)**
   Prevents `gemini-3.1-pro-preview` from silently falling back to flash.

7. **[#26845 – Add gemini-2.5-flash-lite to fallback chain (open)](https://github.com/google-gemini/gemini-cli/pull/26845)**
   Lets free‑tier users exhaust flash‑lite quota before hitting 429s.

8. **[#26881 / #26848 – IPv6 loopback host validation (both open)](https://github.com/google-gemini/gemini-cli/pull/26881)**
   Adds `[::1]` to allowed Host headers in the IDE companion server. Security fix.

9. **[#27154 – Synchronous PTY entry deletion to fix memory leak (open)](https://github.com/google-gemini/gemini-cli/pull/27154)**
   Moves `activePtys.delete()` outside a Promise `.then()` to prevent file‑descriptor leaks.

10. **[#27115 – Restore extension after failed update (open)](https://github.com/google-gemini/gemini-cli/pull/27115)**
    Backs up the current extension before update; restores if replacement fails to load.

## Feature Request Clusters

**AST‑Aware Code Understanding**
Multiple issues (#22745, #22746, #22747) propose replacing line‑based reads/searches with AST‑aware tools (e.g., AST grep, Glyph) to reduce token waste and improve method‑boundary precision. No implementation is yet committed.

**Agent Self‑Awareness and Configuration**
Users want the agent to know its own capabilities — CLI flags, hotkeys, MCP tools — and answer questions about itself accurately (#21432). Also requested: ability to background local sub‑agents with Ctrl+B (#22741).

**Memory System Quality**
A cluster of issues filed by @SandyTao520 (#26525, #26523, #26522, #26516) calls for deterministic secret redaction in Auto Memory, quarantine of invalid patches, and a stop‑retry mechanism for low‑signal sessions.

**Safety and Destructive Action Guardrails**
Issue #22672 asks the agent to discourage dangerous commands (`git reset`, `--force`) and to understand the risk of modifying production resources. No formal PR addresses this yet.

## Developer Pain Points

**Authentication and Capacity**
Recurring themes: 429 errors (#24937), OAuth timeout crashes (#26993), and environment‑variable conflicts with `LOGIN_WITH_GOOGLE` (#26420). Multiple PRs aim to surface retry visibility and fall back through cheaper models (#26845, #26876).

**Agent Reliability and Predictability**
Users report sub‑agent false‑success termination (#22323), failure to invoke custom skills (#21968), and runaway infinite loops (#18292). The data‑loss report (#26856) underscores high stakes when agent decisions are irreversible.

**Shell and Terminal Integration**
Stuck “Waiting input” states (#25166), terminal corruption after external editors (#24935), and PTY memory leaks (PR #27154) degrade the core shell‑execution workflow. Resize flickering (#21924) and sandbox stdin duplication (PR #27127) are still open.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# Copilot CLI Community Digest — 2026-05-19

## Today’s Update Brief
The team shipped **v1.0.49** (stable) and a **v1.0.49‑6** pre-release, fixing the `postToolUse` hook context injection and improving CJK/emoji cursor positioning. Activity remained high with **33 open/updated issues** (many filed today) and **3 pull requests**. Notable bugs surfaced around session wedging, HTTPS stalls, and a PTY regression in the Ctrl+G editor.

## Releases
- **[v1.0.49](https://github.com/github/copilot-cli/releases/tag/v1.0.49)** (2026-05-18)
  - `postToolUse` hook `additionalContext` is now correctly injected as a system message instead of being silently discarded.
  - Mouse clicks in the prompt now position the cursor correctly when the input contains wide characters (CJK, emoji).
  - Added `/chronicle search` subcommand to search all session content.
- **[v1.0.49‑6](https://github.com/github/copilot-cli/releases/tag/v1.0.49-6)** – pre-release with no changelog visible.

## Hot Issues (10 noteworthy)

1. **[#1044 – Slash commands in `copilot --acp`](https://github.com/github/copilot-cli/issues/1044) (OPEN, 14 comments)**
   Users of the ACP (Agent Chat Protocol) frontend can’t use slash commands because the CLI doesn’t emit `available_commands_update`. Affects integration with editors like Zed. Community is waiting for protocol‑level support.

2. **[#2204 – Document C# LSP installation](https://github.com/github/copilot-cli/issues/2204) (OPEN, 6 comments, 👍 7)**
   High‑demand request for official steps to set up a C# language server for tool use. The author suggests a dedicated doc section.

3. **[#3340 – Input box too tall in latest update](https://github.com/github/copilot-cli/issues/3340) (CLOSED, 4 comments)**
   After v1.0.48/49 the input box grew vertically, wasting screen space. Closed as resolved in the latest release? (No explicit resolution note in data.)

4. **[#2695 – Cloud Agent model selection 400 error](https://github.com/github/copilot-cli/issues/2695) (OPEN, 3 comments)**
   Assigning a Copilot Cloud custom agent to an issue fails with `CAPIError: 400` unless the model field matches exactly. Blocks workflows that mix `auto` selection with fixed‑model agents.

5. **[#3242 – GPT sessions transient API error on PLAN features](https://github.com/github/copilot-cli/issues/3242) (CLOSED, 3 comments)**
   GPT‑based sessions fail on any `/plan` action with “Transient API error”. Other models (Claude) unaffected. Likely a server‑side issue – closed but not explained.

6. **[#3381 – Request Claude Opus 4.6 in `/model` selection](https://github.com/github/copilot-cli/issues/3381) (CLOSED, 2 comments)**
   Feature request to add Claude Opus 4.6. Currently only Sonnet‑tier Claude models are listed. Quickly closed – possibly a duplicate or already tracked.

7. **[#2980 – `postToolUse` hook `additionalContext` not injected](https://github.com/github/copilot-cli/issues/2980) (OPEN, 2 comments, 👍 2)**
   The hook output with `additionalContext` is captured but never forwarded to the agent. This appears to be the same root cause fixed in v1.0.49 (see release notes). May be resolved now.

8. **[#3367 – Resume after `/new` shows previous session as in‑use](https://github.com/github/copilot-cli/issues/3367) (CLOSED, 2 comments)**
   Starting a new session with `/new` then trying to `/resume` the old one from another instance shows it as still in‑use. Closed – likely a state‑management fix.

9. **[#3380 – Add `--disable-repo-mcps` flag](https://github.com/github/copilot-cli/issues/3380) (OPEN, 1 comment)**
   Users want a clean way to skip MCP definitions shipped in `.mcp.json` or `.github/mcp-config.json` without having to disable each server by name.

10. **[#3379 – MCP naming conflict between user‑level and repo‑level config](https://github.com/github/copilot-cli/issues/3379) (OPEN, 1 comment)**
    When the same MCP server name exists in both `$HOME/.copilot/mcp-config.json` and a project config, the UI shows metadata from one source while the runtime uses the other, causing confusion.

## Key PR Progress (3 total)

- **[#3373 – Create summary.yml](https://github.com/github/copilot-cli/pull/3373) (OPEN)**
  A new workflow file – likely a GitHub Actions summary. No description provided.

- **[#3353 – Copilot subscription no longer required](https://github.com/github/copilot-cli/pull/3353) (OPEN)**
  Proposes removing the Copilot subscription check. A significant change – would allow use without a paid Copilot plan (possibly for local‑only features).

- **[#2970 – Create devcontainer.json](https://github.com/github/copilot-cli/pull/2970) (CLOSED)**
  Adds a dev container configuration for contributors. Merged or closed with no further detail.

## Feature Request Clusters

- **Model Selection Expansion** – Several issues request adding Claude Opus 4.6 (#3381, #3099) and other missing models. Users want parity with Copilot Chat.
- **MCP Improvements** – Multiple requests for better MCP controls: `--disable-repo-mcps` flag (#3380), fixing naming conflicts (#3379), and addressing timeout resets (#1378).
- **Slash Command Parity** – Slash commands are missing in ACP mode (#1044) and some commands like `/every`/`/after` are listed in help but unavailable interactively (#3342).
- **Cross‑Session Goals/Memory** – Feature requests for persistent goals via `.copilot/goals.md` (#3364) and better `/memory` link handling for non‑GitHub repos (#3378).
- **Input/Editor Enhancements** – Requests for image paste support (#3370), colon‑based line ranges (#3317), and improvements to the Ctrl+G editor (PTY issues, backspace on Windows).

## Developer Pain Points

- **Session Wedging** – Orphan `tool_use` blocks in `events.jsonl` can permanently block session resumption (#3366). A critical stability issue for long‑running sessions.
- **Silent Hangs** – The CLI can silently stall on stalled HTTPS sockets to `api.github.com` with no timeout or log output (#3371). Frustrating for users on unstable networks.
- **Platform Regressions** – FreeBSD support broken since v1.0.43 (#3382). Windows backspace in `vim` via Ctrl+G sends `0x7F` instead of deleting (#3374). Dumb terminal (TERM=dumb) support is missing (#3372).
- **Rate Limit Errors** – `copilot update` fails with raw GitHub API rate‑limit errors when run behind a shared corporate IP (#3383).
- **CJK/Emoji Input Glitches** – Despite a release fix for cursor positioning, pasting CJK/Korean text can still produce garbled characters (#3369). Also a question‑mark trigger for help notifications (#3368).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-19

## 1. Today's Update Brief

Today's activity is moderate. No new releases were published in the last 24 hours. We tracked 6 open Issues and 2 open Pull Requests updated within the period, with a notable batch of feature requests filed on 2026-05-18. A long-running API 400 error issue (#778, opened January 29) received an update, while two memory/connection leak fixes from @ekhodzitsky continue to progress.

## 2. Releases

No new versions were published in the last 24 hours.

## 3. Hot Issues

**#778 — [bug] API Error: 400 {"error":{"type":"invalid_request_error","message":"Invalid request Error"}}**
- **Author:** @DayDreammy | **Updated:** 2026-05-18 | **Comments:** 17
- **Affected workflow:** Any API call from Kimi Code CLI on Windows 11 (PowerShell) using the default model `claude-sonnet-4-5-20250929`.
- **Impact:** Severe – the user cannot make any valid request; the error has persisted for over 3 months.
- **Community reaction:** High engagement (17 comments) but zero upvotes. Likely a long-standing, low-visibility bug.
- **Link:** https://github.com/MoonshotAI/kimi-cli/issues/778

**#2077 — [Critical] K2.6 model overloaded – unusable under normal load**
- **Author:** @Shtef-Inta | **Updated:** 2026-05-18 | **Comments:** 15 | **👍:** 2
- **Affected workflow:** Using the K2.6 model on Apple Silicon macOS under the Kimi Code Allegretto membership plan.
- **Impact:** The model constantly returns retry/timeout errors, making it functionally unusable for normal workloads.
- **Community reaction:** Upvoted by 2 users, indicating broader frustration.
- **Link:** https://github.com/MoonshotAI/kimi-cli/issues/2077

**#2322 — [Feature Request] Add Cline to the Kimi Code whitelist of supported coding agents**
- **Author:** @jingmengzhiyue | **Created:** 2026-05-18 | **Comments:** 0
- **Affected workflow:** Users of the Cline VS Code extension (`saoudrizwan.claude-dev`) receive a `403 access_terminated_error` from `kimi-for-coding`.
- **Impact:** Blocks an entire third-party integration category.
- **Link:** https://github.com/MoonshotAI/kimi-cli/issues/2322

**#2321 — Feature Request: Configurable git status/branch polling intervals for monorepo users**
- **Author:** @shuizhongyueming | **Created:** 2026-05-18 | **Comments:** 0
- **Affected workflow:** All users, but especially monorepo users, where hardcoded polling intervals (`_GIT_BRANCH_TTL`, `_GIT_STATUS_TTL`) cause unnecessary overhead.
- **Impact:** Performance degradation in large repositories.
- **Link:** https://github.com/MoonshotAI/kimi-cli/issues/2321

**#2320 — [bug] An error seems caused by the ✨ emoji**
- **Author:** @EllisLambda | **Created:** 2026-05-18 | **Comments:** 0
- **Affected workflow:** Submitting any request containing the ✨ emoji via CLI version 1.44.0 on Linux.
- **Impact:** A parsing/encoding error when the emoji is present in prompts or file names.
- **Link:** https://github.com/MoonshotAI/kimi-cli/issues/2320

**#2319 — [enhancement] macos zsh request to discard cyan highlighting**
- **Author:** @SoilSoi1 | **Created:** 2026-05-18 | **Comments:** 0
- **Affected workflow:** Users on macOS with light terminal themes or specific visual preferences.
- **Impact:** The hardcoded `cyan`/`bright_cyan` code highlighting cannot be changed via config (`theme = "dark" / "light"`), forcing users to modify source code.
- **Link:** https://github.com/MoonshotAI/kimi-cli/issues/2319

## 4. Key PR Progress

**#2231 — fix(aiohttp): reuse TCPConnector to prevent connection leaks**
- **Author:** @ekhodzitsky | **Updated:** 2026-05-18
- **What it does:** Every call to `new_client_session()` previously created a new `TCPConnector`. This PR reuses the connector, reducing TCP handshake overhead, latency, and file-descriptor pressure under heavy parallel operations.
- **Impact:** Lower latency, reduced resource usage, and better scalability.
- **Link:** https://github.com/MoonshotAI/kimi-cli/pull/2231

**#2236 — fix(utils): bound broadcast queues and cap web store cache to prevent memory leaks**
- **Author:** @ekhodzitsky | **Updated:** 2026-05-18
- **What it does:** (1) Bounds the unbounded `asyncio.Queue()` per subscriber in BroadcastQueue to prevent OOM from slow consumers. (2) Caps the web store session cache (`_sessions_cache: list[JointSession]`) to avoid memory exhaustion with thousands of sessions.
- **Impact:** Two concrete fixes for memory leak issues, improving stability for long-running or high-load sessions.
- **Link:** https://github.com/MoonshotAI/kimi-cli/pull/2236

## 5. Feature Request Clusters

**Integration & Whitelisting**
- **#2322:** Request to add Cline (VS Code extension) to the supported coding agents whitelist, as it currently receives a `403` error.
- **Observation:** This is the first explicit request for Cline integration, suggesting growing adoption of third-party agents beyond the official Kimi ecosystem.

**Configuration & Customization**
- **#2321:** Request to make Git polling intervals (`_GIT_BRANCH_TTL`, `_GIT_STATUS_TTL`) configurable via environment variables or `config.toml`.
- **#2319:** Request to decouple code highlighting colors from the theme setting, particularly to remove hardcoded cyan highlighting.
- **Observation:** Users are asking for more granular control over CLI behavior and UI, beyond the current binary theme toggle.

## 6. Developer Pain Points

**API Reliability (Persistent)**
- **#778** and **#2077** both point to API-level failures—invalid request errors and model overload—that have gone unresolved for months. These are the highest-comment and highest-upvote issues on today's board.

**Integration Blockers**
- **#2322** highlights that third-party tools (Cline) are actively blocked by a 403 response. This is a direct barrier to ecosystem growth.

**Local Configuration Inflexibility**
- **#2321** and **#2319** show frustration with hardcoded settings (polling intervals, theme colors) that cannot be adjusted without source code modification. This is a recurring theme in developer tooling.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Here is the OpenCode community digest for 2026-05-19.

---

## OpenCode Community Digest – 2026-05-19

### Today’s Update Brief
A relatively calm day with one patch release (v1.15.5) focused on experimental native runtime support and bugfixes. The community is most engaged around a long-standing clipboard bug and a highly requested "YOLO mode" for skipping permissions. A significant volume of PR activity from contributor @kitlangton indicates an ongoing migration of the test suite to a new `it.instance` fixture pattern, alongside several new CLI subprocess integration tests.

### Releases
**v1.15.5** – [Full Changelog](https://github.com/anomalyco/opencode/releases/tag/v1.15.5)

- **Core Improvements**:
  - Preview of native OpenAI runtime behind an experimental flag (`OPENCODE_EXPERIMENTAL`, or `OPENCODE_EXPERIMENTAL_NATIVE_LLM`).
  - New `--replay` and `--replay-limit` flags to show recent history when resuming interactive runs.
- **Bugfixes**:
  - Fixed plugin tools using `ask` so tool calls complete correctly.
  - Reduced missed `/event` updates.

### Hot Issues
*Top issues selected from the top 30 by comment count.*

1.  **#4283 – Copy To Clipboard is not working**
    The most active issue (94 comments, 84 👍). User [@maheshmuttintidev] reports that selecting text from responses does not copy to clipboard. The issue is labeled OPEN and spans multiple OS environments.
    [Link](https://github.com/anomalyco/opencode/issues/4283)

2.  **#8463 – `--dangerously-skip-permissions` (YOLO mode)**
    Feature request from [@surma] with 55 👍. The idea is to allow OpenCode to bypass permission prompts in trusted environments/automated workflows. Has 14 comments of discussion around safety vs. utility.
    [Link](https://github.com/anomalyco/opencode/issues/8463)

3.  **#13838 – Compaction replay injects fake user message**
    User [@jdocker8] reports that session compaction injects "What did we do so far?" as a synthetic user message, leading to unwanted model summaries. 14 comments, 3 👍.
    [Link](https://github.com/anomalyco/opencode/issues/13838)

4.  **#27897 – TUI flickers when rendering fenced code blocks**
    [@smithyyang] reports a consistent screen flicker during streaming of code blocks. Has 9 comments and has already spurred a fix PR (#27961).
    [Link](https://github.com/anomalyco/opencode/issues/27897)

5.  **#28257 – `/Undo` command broken when last message is out of visible history**
    [@remixer-dec] notes that if the agent is in a loop and the last user message has scrolled off-screen, `/Undo` stops working. 3 comments.
    [Link](https://github.com/anomalyco/opencode/issues/28257)

6.  **#28015 – Worker terminated when running multiple subagents**
    [@qwowboyp] describes a crash where parallel subagent runs cause "Worker has been terminated", forcing session loss and inability to create new sessions. 6 comments.
    [Link](https://github.com/anomalyco/opencode/issues/28015)

7.  **#27902 – kimi-for-coding provider gets 429 engine overloaded**
    [@bzqzheng] identifies missing `User-Agent` header as cause of HTTP 429 from Kimi's API. Fix proposal has 8 comments and 9 👍.
    [Link](https://github.com/anomalyco/opencode/issues/27902)

8.  **#28168 – GLM-5 reasoning support on AWS Bedrock**
    [@lopince] explains that GLM-5 reasoning controls (`reasoning_config`) are not exposed in OpenCode. Also notes streaming issues with tool-call args. 4 comments.
    [Link](https://github.com/anomalyco/opencode/issues/28168)

9.  **#28238 – Legacy `pgup`/`pgdown` keybinds swallow "p" in TUI prompt**
    [@EnocFlores] reports that old keybind values are parsed as multi-key sequences, swallowing the lowercase "p" character in prompt input. 2 comments.
    [Link](https://github.com/anomalyco/opencode/issues/28238)

10. **#26817 – DialogPrompt Enter stops submitting when `return` is rebound**
    [@CasualDeveloper] notes that if `return` is mapped to `input_newline`, dialog forms (e.g., session rename) no longer submit on Enter. 3 comments.
    [Link](https://github.com/anomalyco/opencode/issues/26817)

### Key PR Progress
*Top 10 important PRs from the last 24 hours.*

1.  **#28271 – feat(native-llm): route Anthropic API-key models through native runtime**
    [@kitlangton] extends the experimental native LLM runtime to also support Anthropic providers (behind `OPENCODE_EXPERIMENTAL` flag).
    [Link](https://github.com/anomalyco/opencode/pull/28271)

2.  **#28248 – fix: add cross-process file locking for parallel session isolation**
    [@AdityaNarayan05] adds file locking to prevent parallel `opencode` sessions from corrupting shared project state. Fixes issue #28249.
    [Link](https://github.com/anomalyco/opencode/pull/28248)

3.  **#27961 – fix: reduce TUI fenced code streaming flicker**
    [@smithyyang] addresses #27897 by stopping re-renders on every response chunk, reducing flicker when code blocks stream.
    [Link](https://github.com/anomalyco/opencode/pull/27961)

4.  **#28275 – Fix legacy pgup/pgdown TUI keybind aliases**
    [@kommander] adds aliases for legacy `pgup`/`pgdown` values to prevent them from swallowing the "p" key. Fixes #28238.
    [Link](https://github.com/anomalyco/opencode/pull/28275)

5.  **#28264 – feat(bedrock): add GLM-5 reasoning support on AWS Bedrock**
    [@lopince] wires up `additionalModelRequestFields.reasoning_config` for GLM-5 models, closing #28168.
    [Link](https://github.com/anomalyco/opencode/pull/28264)

6.  **#28272 – refactor(session): extract prompt parts**
    [@rekram1-node] extracts prompt part resolution and message building into a dedicated module to reduce complexity in `SessionPrompt`.
    [Link](https://github.com/anomalyco/opencode/pull/28272)

7.  **#28274 – test(cli): tier-A read-only command smoke tests**
    [@kitlangton] adds smoke tests for 7 read-only commands (mcp list, providers list, session list, etc.) to ensure CLI correctness.
    [Link](https://github.com/anomalyco/opencode/pull/28274)

8.  **#28267 – test(cli): help-text snapshots for every CLI command**
    [@kitlangton] adds a single test file that snapshots `--help` output for all 35 commands/subcommands, preventing accidental flag removals.
    [Link](https://github.com/anomalyco/opencode/pull/28267)

9.  **#27231 – feat: add edit button for connected providers**
    [@solidblu] adds an edit UI button for configured providers. Closes #20598.
    [Link](https://github.com/anomalyco/opencode/pull/27231)

10. **#26090 – feat(session): expose LLM response headers on assistant messages**
    [@jtbnz] surfaces HTTP response headers (e.g., `x-litellm-model`) on assistant messages, enabling users to see the actual model used via a proxy.
    [Link](https://github.com/anomalyco/opencode/pull/26090)

### Feature Request Clusters
*Recurring themes from today's issue data.*

- **UI/UX Improvements**: Multiple requests focus on the web/desktop UI experience. These include multiple chat tabs per session (#8550, 4 comments, 6 👍), plugin API for custom sidebar panels (#5971, 9 comments, 32 👍), and making dialog/sidebar overlay backgrounds themeable (#25102, 3 comments).
- **Provider & Model Support**: Users are actively requesting support for new or updated providers: Open WebUI (#13537, 13 comments, 16 👍), GLM-5 reasoning on AWS Bedrock (#28168, 4 comments), explicit context caching for Alibaba Cloud DashScope (#27692, 3 comments), and a bump to GitLab Duo provider for GPT-5.5 (#28221, 2 comments).
- **Session Management**: Several requests revolve around managing sessions across projects and instances. A session migration dialog (#23249, 3 comments) and the ability to switch between multiple chat tabs within a single session (#8550) indicate a desire for more flexible session workflows.

### Developer Pain Points
*Recurring frustrations highlighted today.*

- **Test Infrastructure Friction**: The sheer volume of PRs from [@kitlangton] migrating tests to `it.instance` fixtures (7 PRs today) suggests that the existing test setup is costly in terms of setup time and boilerplate. The explicit mention of "~15s of JIT" for subprocess spawns in #28278 underscores this pain.
- **Session Parallelism and Stability**: Issues like "Worker has been terminated" (#28015) and the cross-process file locking PR (#28248) point to a broken or fragile experience when running multiple subagents or concurrent OpenCode instances. This is a high-impact bug for power users.
- **TUI Responsiveness and Keybinding Conflicts**: Low-level TUI issues are a recurring theme: flickering during code streaming (#27897), blank flashes on session switch (#27910), the Enter key not working in permission dialogs (#27875), and keybind sequences consuming keystrokes (#28238). These disrupt the core interactive flow.
- **Provider-Specific Bugs**: Several issues today are caused by provider-level quirks: missing User-Agent headers causing 429s (#27902), incorrect streaming of tool-call args (#28168), and the system prompt hallucinating provider names (#28244). This suggests a need for more robust provider abstraction layers or per-provider workaround documentation.
- **Configuration and Resource Leaks**: The creation of persistent temporary files (#6523, 9 comments), the installer being flagged by SmartScreen (#26587, 3 comments), and the unclear "Free Model limit" message (#28166) suggest ongoing friction in deployment and resource management.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-19

## Today's Update Brief

No new releases were cut in the last 24 hours, but community activity remained high with 33 issues and 50 pull requests updated. The development focus continues to center on the `qwen serve` daemon mode, with a batch of post-merge fixes and refactoring PRs landed today, alongside continued reports of OOM crashes, model compatibility issues (especially `reasoning_content` vs. `reasoning` field handling), and feature requests around context management.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#4175 — proposal(serve): Mode B feature-priority roadmap toward v0.16 production-ready](https://github.com/QwenLM/qwen-code/issues/4175)** (16 comments)
   A comprehensive roadmap for the `qwen serve` daemon mode following the Stage 1 daemon merge (#3889) and workspace refactor (#4113). The author outlines remaining work categorized by priority (P0–P2) including ACP bridge extraction, telemetry hardening, and E2E test coverage. This is the primary tracking issue for the serve mode production push.

2. **[#3803 — Daemon mode (qwen serve): proposal & open decisions](https://github.com/QwenLM/qwen-code/issues/3803)** (16 comments)
   The original daemon design proposal organized as a 6-chapter series. Tracks implementation decisions that affect the serve roadmap. Both this and #4175 are receiving active discussion, with maintainer @doudouOUC heavily engaged.

3. **[#4167 — cli crashed](https://github.com/QwenLM/qwen-code/issues/4167)** (6 comments)
   A CLI crash triggered by heap exhaustion (Mark-Compact GC at 2GB). The user reports the CLI dies during long sessions, with the last GC log showing 2017 MB. This is one of several memory-related crashes reported this week.

4. **[#4276 — oom-crash](https://github.com/QwenLM/qwen-code/issues/4276)** (4 comments)
   Another OOM crash with a screenshot showing ~4GB heap usage. The user reports the process consumes memory until killed by the OS. No maintainer response yet. Given the multiple OOM reports (#4167, #4254, #4276), memory management is a growing concern.

5. **[#4223 — mimo-v2.5-pro API Error: 400 Param Incorrect](https://github.com/QwenLM/qwen-code/issues/4223)** (4 comments, 1 👍)
   The `reasoning_content` field from the first tool call is being sent back incorrectly on subsequent calls, causing a 400 error. The user notes this worked a week ago and has started failing recently, suggesting a regression similar to DeepSeek V4 Pro issues.

6. **[#4278 — 任务中断了，自己不继续执行](https://github.com/QwenLM/qwen-code/issues/4278)** (3 comments)
   A session interruption bug: the agent stops executing mid-task without resuming. The user reports that `qwen-code 0.15.11` stops executing tasks that are still in progress. Likely related to session management or memory pressure.

7. **[#4094 — Trim outdated background task results and improve new-task discoverability in the task dialog](https://github.com/QwenLM/qwen-code/issues/4094)** (3 comments, closed)
   Two UI improvements: trimming old terminal task results from the task dialog, and making the "x tasks done" pill more discoverable for new tasks. Closed as resolved, likely via a merged PR. Tagged `welcome-pr`, meaning community contributions are encouraged.

8. **[#4098 — "Long conversation? /compress summarizes history" is not working](https://github.com/QwenLM/qwen-code/issues/4098)** (3 comments)
   The `/compress` slash command fails silently. The user provides a transcript where the compress prompt appears but typing `/compress` does nothing. This affects users with long sessions who rely on context window compression.

9. **[#4212 — follow-up(telemetry): Phase 1.5 polish — fallback order, exec span on abort-as-result, mock + log/span consistency](https://github.com/QwenLM/qwen-code/issues/4212)** (2 comments, closed)
   Non-blocking polish items from the telemetry Phase 1 merge (#4126). The three items—fallback order, abort-as-result handling, and mock consistency—are small but important for production telemetry correctness.

10. **[#3108 — ACP / VS Code IDE Companion hook support is incomplete](https://github.com/QwenLM/qwen-code/issues/3108)** (2 comments, closed)
    Hook support in the ACP/VS Code path is not aligned with the main core execution path. Only the `PermissionRequest` hook is partially wired; `UserPromptSubmit`, `Stop`, `PreToolUse`, and `PostToolUse` hooks are missing. This was closed, likely with a related PR.

## Key PR Progress

1. **[#4305 — fix(serve): post-merge fixes for #4291 review (7 threads)](https://github.com/QwenLM/qwen-code/pull/4305)** (Open)
   Seven post-merge fixes on PR #4291 (which itself was a fix for #4255). Covers memory safety, error handling, observability gaps, and DRY violations in the serve auth device-flow code.

2. **[#4153 — feat(core): extend cross-auth fast models to agents](https://github.com/QwenLM/qwen-code/pull/4153)** (Open)
   Expands the cross-auth fast model feature (#4117) from side queries into agent runtime paths: subagent declarations, `runFileSession`, and the remote ACP path. Important for users who run different models for fast vs. full generation.

3. **[#4067 — Use bundled Qwen Code for PR review automation](https://github.com/QwenLM/qwen-code/pull/4067)** (Open)
   Replaces the previous PR review workflow with a pinned `QwenLM/qwen-code-action` that invokes the bundled `/review` skill. Maintains workflow-level routing including automatic reviews, `@qwen /review` triggers, and size gating.

4. **[#4288 — feat(cli): do not append trailing space for directory completions](https://github.com/QwenLM/qwen-code/pull/4288)** (Open)
   Fixes a UX annoyance (#4092) where Tab-completing a directory path (e.g., `@src/components/`) added a trailing space, requiring manual deletion before continuing.

5. **[#4287 — refactor(auth): unify provider config in core, simplify /auth](https://github.com/QwenLM/qwen-code/pull/4287)** (Open)
   Major auth refactoring: removes duplicate flows between `/auth` and `/manage-models`, replaces the 1.2k-line `ManageModelsDialog` with a simpler "Connect a Provider" surface. Follows from dropping OpenRouter OAuth (#4108).

6. **[#4297 — fix(serve): post-merge P2 corrections from Codex review on #4282](https://github.com/QwenLM/qwen-code/pull/4297)** (Open)
   Fixes four P2-severity bugs in the serve mode approval/tools/MCP routes landed via #4282. All four are real correctness issues that cannot be reproduced in unit tests but are triggered in real-world flows.

7. **[#4302 — fix(telemetry): Phase 1.5 polish — fallback order, abort-as-result, log/span consistency](https://github.com/QwenLM/qwen-code/pull/4302)** (Closed)
   Implements the three polish items from #4212. Fixes the `resolveParentContext()` fallback order, treats `abort-as-result` as a span result, and ensures log/span consistency. Merged quickly.

8. **[#4301 — docs: document Node 26 fetch failed workaround](https://github.com/QwenLM/qwen-code/pull/4301)** (Open)
   Documents a Node.js 26-specific bug where `qwen-code` fails with "Connection error" unless `fetchOptions.dispatcher` is removed. Recommends Node.js v22.22.3 LTS as the immediate workaround.

9. **[#4265 — fix(cli): /status preserves prior error history items](https://github.com/QwenLM/qwen-code/pull/4265)** (Closed)
   Fixes a bug (#4169) where typing `/status` during an error state would clear the error history. The guard at `submitQuery` was clearing `pendingRetryErrorItem` without committing it to history first. Merged.

10. **[#4273 — Support active goal stream events and non-interactive goals](https://github.com/QwenLM/qwen-code/pull/4273)** (Closed)
    Adds a first-class `active_goal` stream event carrying the current active goal snapshot. The CLI consumes it to keep `activeGoalStore` synchronized. Also makes `/goal` available in non-interactive modes.

## Feature Request Clusters

- **Context Management Improvements**: Two related requests: a faster `/compress-fast` command (#4264) that trims data without AI assistance (offering user choice of what to remove), and a fix for the existing `/compress` command that is reported as non-functional (#4098).

- **Performance Monitoring**: Request to expose generation timing metrics (TPS, TTFT) in the `/stats` command (#4252) so users can monitor model performance without external tooling.

- **Security & Sandbox Guardrails**: Requests for consistency in command substitution denial (#4093, noting inconsistent application) and for runaway protection guardrails in headless/non-interactive mode (#4103), especially for CI/`--yolo` scenarios.

- **System Integration**: A request for `qwen-code` to prevent system suspension while a task is running (#4257), so long-running tasks complete overnight without interruption.

- **Background Task UI**: Two improvement suggestions for the task dialog (#4094): trimming outdated terminal task results and improving the "x tasks done" pill to make new tasks more discoverable.

## Developer Pain Points

- **Memory Leaks & OOM Crashes**: Three separate OOM reports in the last 3 days (#4167, #4276, #4254) with heap sizes reaching 2-4GB before crashing. Multiple users report that memory consumption grows without bound until the OS kills the process. This is the most frequently reported crash category this week.

- **Model Compatibility Issues**: Several reports of API errors related to the `reasoning_content` vs. `reasoning` field. Users of vLLM ≥ 0.20 (#4285), mimo-v2.5-pro (#4223), and DeepSeek V4 Pro variants are affected when the tool call response includes the legacy field. This creates a frustrating "works one call, fails the next" pattern.

- **Authentication & Connection Failures**: Reports of 401 errors (#3858, often due to token expiration or misconfiguration) and Node.js 26-specific fetch failures (#4274). Users struggle to distinguish between real auth issues and environment-specific bugs.

- **Session Interruptions**: Multiple reports of tasks stopping mid-execution without resuming (#4278), along with the `/compress` command not working for context recovery (#4098). These combine to create a poor experience for long-running sessions.

</details>