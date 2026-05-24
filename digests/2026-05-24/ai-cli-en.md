# AI CLI Tools Community Digest 2026-05-24

> Generated: 2026-05-24 02:29 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# AI CLI Developer Tools — Cross-Tool Comparison Report
**Date: 2026-05-24**

---

## 1. Daily Cross-Tool Overview

Six major AI CLI tools saw active community engagement today, with approximately 186 issues and 187 pull requests updated across all repositories. **Claude Code** and **OpenCode** lead in raw activity volume, while **Qwen Code** shipped the most releases (stable + nightly). **GitHub Copilot CLI** was the only other tool with a new release (v1.0.52). **Gemini CLI** and **Kimi Code** saw moderate activity with no releases. Shared pain points across tools include **Windows platform instability**, **MCP integration friction**, and **context window management gaps**, while individual tools differentiate on architectural maturity, sandboxing approaches, and localization support. Notably, **Claude Code** is grappling with a regressed context window (200K instead of 1M for Sonnet 4.6), while **OpenCode** and **Qwen Code** are pushing major infrastructure changes (Effect-native refactoring and daemon mode, respectively).

---

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Active (24h) | Releases (24h) | Notable Activity |
|---|---|---|---|---|
| Claude Code | 50 | 10 (by @giruuuuj) | 1 (internal, v2.1.150) | Documentation burst + freezing bug (#26224, 102 comments) |
| OpenAI Codex | 50 | 34 | 0 | TUI config cleanup (5 PRs), usage report pipeline (4 PRs) |
| Gemini CLI | 50 | 10 (total open) | 0 | Token leak fix (#26758), PTY memory leak (#27154) |
| GitHub Copilot CLI | 17 | 1 | 1 (v1.0.52) | Stdin fix, scrollbar, Autopilot permissions fix |
| Kimi Code | 5 | 8 | 0 | Windows log conflict, MCP background loading, Ctrl+T toggle |
| OpenCode | 50 | 50 | 0 | LSP timeout fix, reasoning selector fix, tool truncation config |
| Qwen Code | 14 | 50 | 2 (v0.16.1 + nightly) | Daemon mode (Mode B) planning, memory leak diagnostics |
| **Total** | **~186** | **~187** | **4** | |

---

## 3. Shared Feature Directions

**A. MCP (Model Context Protocol) Ecosystem Improvements** — Observed across **4 tools**
- **Claude Code**: PR #61754 documents missing session ID in plugin MCP servers; community reports MCP server rejection on cold start (#55788).
- **OpenAI Codex**: PRs #24166 (turn-scoped MCP metadata), #13852 (Supabase MCP reauthentication), #18056 (surface MCP notifications).
- **Gemini CLI**: PR #27139 (validate MCP OAuth resources from metadata URL); also hitting API limits with >128 tools (#24246) and >512 declarations (#19083).
- **Qwen Code**: PR #2349 (project-level MCP configuration with merge/override).
- *Shared need*: Better auth token lifecycle management, tool-scoping logic, and error-tolerant initialization across MCP integrations.

**B. Windows Platform Stability** — Observed across **4 tools**
- **Claude Code**: File lock preventing relaunch (#42776), installer 0x80073CF6, mid-session freezes (#61641).
- **OpenAI Codex**: ARM64 sandbox fails despite passing diagnostics (#24259), orphan SIDs, ACL grant issues.
- **GitHub Copilot CLI**: Windows config corruption on paths with `\.` or `\L` (#3487, #3488).
- **Kimi Code**: Multi-process log rotation PermissionError on Windows (#2348) — fixed via per-PID logs (PR #2354).
- *Shared pattern*: Windows-specific edge cases in file locking, path handling, and process management remain a cross-tool pain point.

**C. Session History & Context Window Management** — Observed across **3 tools**
- **Claude Code**: Context capped at 200K instead of 1M after v2.1.150 regression (#61734); silent downgrade after agent panel navigation (#61731).
- **Gemini CLI**: Exponential token leak in state snapshot processor (PR #26758, closed); Auto Memory indefinite retries (#26522).
- **OpenCode**: Command truncation causing agent retry loops (#11313); infinite compaction loops (#27924).
- *Shared concern*: Token waste, context limits, and session fragility are recurring across tools with large-context model support.

**D. Agent & Subagent Reliability** — Observed across **3 tools**
- **Gemini CLI**: Subagent falsely reports GOAL success after hitting MAX_TURNS (#22323 — P1, 6 comments).
- **Claude Code**: Cowork feature 10GB VM bundle causing performance degradation (#22543); context summarizer fabricates user consent (#61722).
- **OpenCode**: Agent retry loops from truncated outputs (#11313); infinite compaction loops (#27924).
- *Key finding*: Subagents and multi-agent workflows are introducing subtle failure modes where errors are masked or reported as successes.

**E. Authentication & OAuth Reliability** — Observed across **3 tools**
- **Claude Code**: OAuth refresh corrupts credentials during transient 5xx (#61912); subscription not recognized after web auth (#61920).
- **OpenAI Codex**: Phone verification blocks SSO (#20161, closed); Supabase MCP reauthentication (#13852); revoked token handling fixed (#23563).
- **Gemini CLI**: MCP OAuth resource validation mismatch (PR #27139).
- *Observation*: Token lifecycle management is a recurring source of support tickets, with edge cases around revocation, refresh, and multi-device flows.

---

## 4. Differentiation Analysis

**Claude Code** distinguishes itself with the broadest documentation-driven community response (15+ PRs from one contributor in one day) and the most vocal pricing localization demand (India INR, 392 👍). However, it is currently the most **regression-heavy** tool today, with the v2.1.150 release introducing a major context window cap and several Windows process issues. Its "cowork" remote VM feature remains a high-friction area with performance and reliability complaints.

**OpenAI Codex** is the most **infrastructure-focused** today, with systematic refactoring of TUI config persistence (5 PRs) and usage reporting (4 PRs). This suggests an engineering pivot toward remote workspace parity and token transparency. Its Windows ARM64 sandbox regression and Websocket reconnect loops indicate streaming infrastructure is still maturing.

**Gemini CLI** is the most **agent-centric** tool, with deeper issues around subagent false success reporting, auto-memory bookkeeping, and AST-aware codebase understanding. It is also the only tool reporting **multilingual quality degradation** (Korean prompts) — a potential differentiator for international teams but currently a pain point.

**GitHub Copilot CLI** shipped the most **user-experience-focused** release (v1.0.52) fixing stdin consumption, scrollbar support, and spurious permission prompts. Its issues remain narrower in scope (Termux breakage, config corruption, copy/paste) compared to peers.

**Kimi Code** is the smallest tool by community activity but shows focused **practical fixes**: Windows log isolation, MCP background loading, Ctrl+T thinking toggle. Its distinct feature set (Shell ↔ Agent data isolation, Web UI pagination) suggests a niche focus on multimodal server-side workflows.

**OpenCode** is the most **feature-diverse** tool with the widest range of requests: sandboxing, speech-to-text, session goals, forking, and reasoning model toggles. Its high PR count (50) indicates active maintainer contribution, but the breadth of requests (152 👍 for voice input) suggests it is still defining its core identity.

**Qwen Code** is the most **architecturally aggressive**, pushing a daemon mode (Mode B) with ACP transport and stream-driven tool dispatch. Its memory leak crisis (OOM in long sessions) and fast response (same-day fix for settings corruption) show a tool in rapid iteration with strong maintainer velocity.

---

## 5. Community Activity Notes

- **Highest issue activity**: **Claude Code**, **OpenAI Codex**, **Gemini CLI**, and **OpenCode** each saw 50 issues updated — indicating broad community engagement across all major tools.
- **Highest PR throughput**: **OpenCode** and **Qwen Code** both had 50 active PRs, suggesting the most active development cadence. **OpenAI Codex** (34 PRs) and **Gemini CLI** (34 PRs) also show substantial engineering work.
- **Most releases**: **Qwen Code** (2 releases: v0.16.1 stable + nightly) leads, followed by **Claude Code** (1 internal) and **Copilot CLI** (1 public).
- **Fastest maintainer response**: **Qwen Code** fixed invalid settings.json handling (#4448) within hours via PR #4461. **OpenCode** fixed the reasoning selector bug (#29051) the same day it was filed (#29050).
- **Highest-engagement issue**: **Claude Code** #17432 (India pricing, 169 comments, 392 👍) is the most upvoted issue across all tools today.
- **Most urgent bug cluster**: **Claude Code**'s 200K context cap regression (#61734) and **Gemini CLI**'s subagent false success (#22323) represent the highest-severity unresolved issues by impact scope.
- **Quietest tool**: **Kimi Code** (5 issues, 8 PRs) and **GitHub Copilot CLI** (17 issues, 1 PR) showed the lowest activity, but both had meaningful content (Windows fix, release improvement).

---

## 6. Evidence-Backed Observations

**1. Windows platform issues are the most consistent cross-tool pain point.** Every tool except Gemini CLI had at least one Windows-specific bug reported or fixed today. The types vary (file locking, sandbox setup, path corruption, log rotation), but the pattern is clear: Windows remains a second-class platform for most AI CLI tools despite significant user presence.

**2. Context window management is a recurring failure mode for large-context models.** Claude Code's regression (200K→1M) and Gemini CLI's exponential token leak both occurred in the same 24-hour window. This suggests that as tools support larger models (1M+ tokens), the infrastructure for context tracking, serialization, and billing is not keeping pace.

**3. Agent and subagent reliability issues are diverging from simple "bug fixes" into architectural concerns.** Gemini CLI's false success reporting (#22323) and Claude Code's context summarizer fabrication (#61722) represent emergent failures in agent orchestration where the system misrepresents its own state or user intent. These are harder to diagnose and fix than most bugs.

**4. MCP ecosystem integration is progressing actively but remains fragmented across tools.** Each tool is building MCP support in different ways (turn-scoped metadata, OAuth validation, project-level config, background loading), suggesting a lack of shared best practices or reference implementations. The cross-tool compatibility issues (e.g., Claude Code plugin → Qwen Code installation failure) underscore this fragmentation.

**5. Documentation and troubleshooting is becoming a community-driven activity in the most mature tools.** Claude Code's 15+ PR burst from a single contributor (@giruuuuj) is the strongest signal: as tools mature, the community shifts from reporting bugs to documenting workarounds. This pattern may predict the next phase of tool evolution (from feature development to operational maturity).

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-05-24

## Today’s Update Brief
One internal-only release (v2.1.150) landed with no user-facing changes. Issue activity remains high: 50 total issues updated in the last 24 hours, led by an India pricing feature request (169 comments, 392 👍) and an urgent freezing bug (102 comments). Meanwhile, a documentation burst from contributor @giruuuuj added 15+ troubleshooting PRs for known bugs, reflecting the community's need for clearer workarounds.

## Releases
- **[v2.1.150](https://github.com/anthropics/claude-code/releases/tag/v2.1.150)** — Internal infrastructure improvements only; no user-facing changes.

## Hot Issues (10 selected)

1. **[#17432 – India-Specific Pricing Plans (INR)](https://github.com/anthropics/claude-code/issues/17432)** — Feature request with 169 comments and 392 👍. Users ask for INR pricing like OpenAI and Google already offer. Affected workflow: purchase/subscription for Indian developers. Community reaction: very strong demand, no official response yet.

2. **[#26224 – Claude Code hanging/freezing for 5–20 minutes](https://github.com/anthropics/claude-code/issues/26224)** — 102 comments, 130 👍. Urgent bug where prompts cause the tool to freeze mid-session. Impact: severe productivity loss. Multiple users confirm reproduction, maintainers have added `oncall` label but no fix shipped.

3. **[#42776 – Windows Desktop fails to relaunch due to orphaned file lock](https://github.com/anthropics/claude-code/issues/42776)** — 78 comments. After closing, the process leaves a lock on the app package, preventing relaunch. Workaround: taskkill or reboot. No maintainer resolution yet.

4. **[#22543 – Cowork feature creates 10GB VM bundle, degrades performance](https://github.com/anthropics/claude-code/issues/22543)** — 69 comments, 175 👍. The cowork (remote VM) feature silently creates a large VM bundle (~10GB) that slows the entire desktop. Affects all users of the cowork feature. Labeled `high-priority, oncall, performance`.

5. **[#32791 – Image paste (Ctrl+V) stopped working in Windows Terminal](https://github.com/anthropics/claude-code/issues/32791)** — 24 comments. Regression: pasting images via clipboard stopped working about a month ago. Affects Windows Terminal users heavily.

6. **[#60334 – Image processing failures burning conversation tokens](https://github.com/anthropics/claude-code/issues/60334)** — 15 comments, 10 👍. API errors about unprocessable images cost 70% of a user’s 5-hour window. The model still deducts tokens even when images are silently removed. Urgent cost concern.

7. **[#61734 – Context window meter shows 200K for Sonnet 4.6, but model supports 1M](https://github.com/anthropics/claude-code/issues/61734)** — 14 comments. Regression in v2.1.150: status bar and actual context limit capped at 200K instead of 1M. Root cause identified (PR #61738 documents it). Affects all Sonnet 4.6 users.

8. **[#37323 – Support `/btw` command in VS Code extension](https://github.com/anthropics/claude-code/issues/37323)** — 13 comments, 60 👍. Parity request: the `/btw` side-conversation command works in CLI but not in VS Code. Simple feature gap with strong community interest.

9. **[#28508 – Remote Control: mobile choices not received by CLI (infinite wait)](https://github.com/anthropics/claude-code/issues/28508)** — 15 comments. When using Remote Control from a mobile device, selections made in AskUserQuestion prompts never reach the CLI session, causing an indefinite hang. Affects Linux/WSL users.

10. **[#10998 – Native GitHub Issues integration](https://github.com/anthropics/claude-code/issues/10998)** — 11 comments, 23 👍. Long-standing request to let Claude Code read, create, and implement GitHub issues natively. Users want to reduce context-switching. No maintainer update.

## Key PR Progress (10 selected)

All PRs below were opened by [@giruuuuj](https://github.com/giruuuuj) on 2026-05-23 and are part of a documentation expansion drive. They are opened against the docs/troubleshooting section. None have comments yet but each addresses a distinct bug or limitation.

1. **[#61757 – Troubleshoot Cowork removing Office add-ins](https://github.com/anthropics/claude-code/pull/61757)** — Cowork’s COM/OLE automation alters the M365 add-in trust context, causing PowerPoint/Excel add-ins to disappear. Workaround: re-deploy from Admin Center.

2. **[#61737 – Troubleshoot ScheduleWakeup non-persistence / stuck sessions](https://github.com/anthropics/claude-code/pull/61737)** — Pending wakeups are stored in memory only; after a crash or terminal hang they vanish with no recovery.

3. **[#61754 – Document missing CLAUDE_CODE_SESSION_ID in plugin MCP servers](https://github.com/anthropics/claude-code/pull/61754)** — Plugin stdio MCP servers don’t receive the session ID env variable (unlike Bash tool since v2.1.132). No workaround.

4. **[#61750 – Troubleshoot desktop app process accumulation / memory leak](https://github.com/anthropics/claude-code/pull/61750)** — Dispatched CLI subprocesses accumulate (observed 156 processes, ~31 GB RAM) with no cleanup on completion. Workaround: restart app.

5. **[#61749 – Add ambiguity authorization and scope creep options to bug template](https://github.com/anthropics/claude-code/pull/61749)** — New issue template categories: “Claude interpreted ambiguous/joking reply as authorization” and “Claude added features beyond what I asked”.

6. **[#61745 – Troubleshoot terminal scroll yank during streaming](https://github.com/anthropics/claude-code/pull/61745)** — Scroll position jumps to top due to an xterm.js bug (ED2 inside DEC 2026). Workaround: use a native terminal.

7. **[#61744 – Document project skills not loading on first agent turn](https://github.com/anthropics/claude-code/pull/61744)** — Skills are only available starting from the second turn. Workaround: use `-p` mode to run the skill directly.

8. **[#61738 – Troubleshoot Sonnet 4.6 context window showing 200K instead of 1M](https://github.com/anthropics/claude-code/pull/61738)** — Root cause identified as a regression in v2.1.150: internal infrastructure changes broke the model configuration. (See also issue #61734.)

9. **[#61742 – Document Agent View TUI working directory limitation](https://github.com/anthropics/claude-code/pull/61742)** — `claude agents` do not support specifying a working directory; sessions inherit the TUI’s cwd. Workaround: separate terminals/tmux.

10. **[#61731 – Troubleshoot 1M context silently downgraded after agents panel navigation](https://github.com/anthropics/claude-code/pull/61731)** — Visiting the agents/sessions side panel strips the `[1m]` suffix during save/restore, silently capping context to 200K.

## Feature Request Clusters

- **Pricing localization** – #17432 (India INR pricing, 392 👍) is the dominant request. No other regional pricing requests appear in today’s top issues.
- **IDE integration parity** – #37323 (`/btw` in VS Code, 60 👍), #47166 (JetBrains plugin, 19 comments, 0 👍). Combined community desire for consistent features across editors.
- **GitHub integration** – #10998 (native GitHub Issues read/implement, 23 👍). Users want tighter coupling with issue tracking and PR workflows.
- **Worktree improvements** – #28958 (sync from remote default branch instead of local, 9 👍). Small ask affecting Git worktree-based workflows.

## Developer Pain Points

- **Freezing / hanging** – Issue #26224 (102 comments, 130 👍) remains the most impactful bug, affecting all users with long-running sessions. No fix yet.
- **Cowork performance and reliability** – #22543 (10GB VM bundle), #61028 (100-turn max breaks long-running automation), #55788 (MCP server rejection on cold start). Cowork remains a high-friction area.
- **Windows instability** – Multiple reports: orphaned file lock preventing relaunch (#42776), installer 0x80073CF6 (#49917, #49655), session history loss after restart (#59736, #60341), mid-session freezes (#61641).
- **Context window misconfiguration** – #61734 (Sonnet 4.6 capped at 200K) and #61731 (silent downgrade after panel navigation) are regressions introduced in v2.1.150, affecting users of the larger model.
- **Cost and token waste** – #60334 (image processing errors burning tokens) highlights that API errors still consume quota. No billing protections mentioned.
- **Session history fragility** – Multiple reports of sessions disappearing after updates (#48334) or not appearing in the Desktop sidebar (#58670). Data loss concern.
- **OAuth / auth reliability** – #61912 (OAuth refresh corrupts credentials during transient 5xx), #61920 (subscription not recognized after web auth). Authentication path seems fragile in some edge cases.
- **Context summarizer fabrications** – #61722 (summarizer invents user consent, causing unauthorized code execution). Security/privacy concern raised and now documented in a PR.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-24

## Today's Update Brief

No new releases were published in the last 24 hours. Community activity remains high with 50 open/updated issues and 34 pull requests, dominated by Windows sandbox regressions, authentication friction, and a burst of TUI config infrastructure work from OpenAI engineers on the "config cleanup" and "usage report" tracks.

## Releases

No releases in the last 24 hours.

## Hot Issues

1. **[#20161 — Phone number verification doesn't work](https://github.com/openai/codex/issues/20161)** [CLOSED]
   - **Workflow affected:** SSO login across devices triggers unrequested phone verification; user cannot bypass.
   - **Impact:** High — blocked access for users without a phone number on their account. 147 comments, 98 👍 suggest widespread frustration.
   - **Community reaction:** Strong engagement; issue is now closed (resolution not visible in data).

2. **[#23381 — False-positive cyber-risk warnings block Gov/GSM dev work](https://github.com/openai/codex/issues/23381)** [OPEN]
   - **Workflow affected:** CLI sessions flagged as "cybersecurity risk" for normal government/military development tasks.
   - **Impact:** Critical for regulated-sector users — safety checks blocking legitimate code operations with no override.
   - **Community reaction:** Low upvotes (0) but high-severity flag; author provided screenshots and thread IDs.

3. **[#18960 — Frequent reconnect loop: websocket closed before response.completed](https://github.com/openai/codex/issues/18960)** [OPEN]
   - **Workflow affected:** Codex App streaming responses drop mid-session, triggering auto-reconnect that often fails.
   - **Impact:** Moderate — disrupts long interactive coding sessions. 30 comments, 24 👍.
   - **Community reaction:** Users reporting recurrence over "past few hours"; no maintainer resolution visible.

4. **[#9508 — Make Weekly Limit Reset Deterministic](https://github.com/openai/codex/issues/9508)** [OPEN]
   - **Workflow affected:** Pro users on gpt-5.2-codex cannot predict when their weekly rate limit resets.
   - **Impact:** Planning/throughput unpredictability for heavy users. 36 comments, 28 👍.
   - **Community reaction:** Long-running request (since January 2026); sustained interest.

5. **[#23195 — macOS marks Codex as malware](https://github.com/openai/codex/issues/23195)** [OPEN]
   - **Workflow affected:** macOS Gatekeeper suddenly flags Codex App as malware mid-session.
   - **Impact:** High — users forcibly ejected from active workflows. 9 comments, 8 👍.
   - **Community reaction:** Surprise and frustration; notarization or signing issue suspected.

6. **[#13852 — Supabase MCP repeatedly requires reauthentication](https://github.com/openai/codex/issues/13852)** [OPEN]
   - **Workflow affected:** OAuth token refresh for Supabase MCP server fails during initialization, forcing repeated login.
   - **Impact:** Moderate — disrupts MCP-integrated database workflows. 9 comments, aged since March.
   - **Community reaction:** Isolated but persistent issue; user on Darwin arm64.

7. **[#24259 — Windows sandbox `spawn setup refresh` fails on ARM64 despite healthy doctor](https://github.com/openai/codex/issues/24259)** [OPEN]
   - **Workflow affected:** Windows 11 ARM64 sandbox fails to start even after `codex doctor` passes.
   - **Impact:** High for Windows ARM users — sandbox-dependent CLI features unavailable. Filed yesterday.
   - **Community reaction:** New issue; 6 comments suggest early investigation.

8. **[#24031 — GPT-5.5 1M context support timeline unclear](https://github.com/openai/codex/issues/24031)** [CLOSED]
   - **Workflow affected:** Users on GPT-5.5 expecting promised 1M context window that was abruptly removed.
   - **Impact:** Moderate — feature regression after prior commitment. 5 comments, 11 👍 despite short life.
   - **Community reaction:** Frustration at lack of communication; issue closed without clear resolution.

9. **[#23245 — Desktop conversation output vertically jitters while reading results](https://github.com/openai/codex/issues/23245)** [OPEN]
   - **Workflow affected:** Streaming output in Codex Desktop causes visual layout oscillation.
   - **Impact:** Low functional, high UX annoyance. 4 comments, 2 👍.
   - **Community reaction:** User notes differences between bundled CLI and global CLI versions.

10. **[#22705 — iOS thread opens but message hydration fails with error 11](https://github.com/openai/codex/issues/22705)** [OPEN]
    - **Workflow affected:** iOS mobile thread loads metadata but messages never appear.
    - **Impact:** High for mobile users — threads are unreadable. 3 comments, 8 👍.
    - **Community reaction:** Cross-platform sync concern noted.

## Key PR Progress

1. **[#24154 — Add experimental turn additional context](https://github.com/openai/codex/pull/24154)** [OPEN]
   - **What:** Adds `additionalContext` to `turn/start` and `turn/steer` for ephemeral external state (browser, automation).
   - **Why it matters:** Enables clients to inject context without polluting user prompts. Fresh (yesterday).

2. **[#23618 — Add durable queued turn store](https://github.com/openai/codex/pull/23618)** [OPEN]
   - **What:** SQLite-backed queue for follow-up inputs that wait for thread idle state.
   - **Why it matters:** Prevents missed user inputs during concurrent turn processing. Foundation for async workflows.

3. **[#24166 — Turn-scoped MCP metadata by server](https://github.com/openai/codex/pull/24166)** [OPEN]
   - **What:** Passes per-server metadata to model-initiated MCP tool calls (e.g., location for search).
   - **Why it matters:** Isolates metadata exposure to specific MCP servers rather than global `responsesapiClientMetadata`.

4. **[#24257 / #24266 / #24265 / #24255 / #24254 — TUI config cleanup series (5 PRs)](https://github.com/openai/codex/pull/24257)**
   - **What:** Routes TUI config writes (plugin marketplace, plugin mentions, MCP inventory, trusted projects, OSS provider) through app-server instead of local `config.toml`.
   - **Why it matters:** Eliminates stale client/server config divergence in remote workspace mode. Significant infrastructure alignment.

5. **[#23563 — Expire revoked ChatGPT auth in Codex](https://github.com/openai/codex/pull/23563)** [CLOSED]
   - **What:** Treats `token_invalidated`/`token_revoked` as terminal sessions; avoids infinite refresh loops.
   - **Why it matters:** Prevents perpetual auth failure for revoked tokens. Merged.

6. **[#24261 — Add environment diagnostics to `codex doctor`](https://github.com/openai/codex/pull/24261)** [OPEN]
   - **What:** Reports OS language, Git install/repo metadata, Windows console mode, terminal-title inputs.
   - **Why it matters:** Addresses #23031 — diagnostics gaps that hindered support debugging.

7. **[#23976 / #24127 / #24126 — Next-prompt suggestion pipeline (3 PRs)](https://github.com/openai/codex/pull/23976)**
   - **What:** Suggestion engine + app-server RPC + TUI ghost-text rendering for composer hints.
   - **Why it matters:** Proactive UX improvement; moves toward predictive prompting.

8. **[#24121 / #24122 / #24123 / #24124 — Usage report pipeline (4 PRs)](https://github.com/openai/codex/pull/24121)**
   - **What:** Local SQLite storage for token attribution → app-server report API → TUI `/usage` command.
   - **Why it matters:** Gives users visibility into per-feature token consumption (daily/weekly).

9. **[#24105 — Make active turn task singular](https://github.com/openai/codex/pull/24105)** [OPEN]
   - **What:** Replaces `IndexMap` with singular task in `ActiveTurn` to enforce one-task invariant.
   - **Why it matters:** Correctness fix — eliminates dead code paths from multi-task shape.

10. **[#21818 — Update models.json](https://github.com/openai/codex/pull/21818)** [OPEN]
    - **What:** Automated model registry update.
    - **Why it matters:** Ongoing — signals new model availability but details not visible.

## Feature Request Clusters

- **Rate Limits & Usage Transparency:** #9508 (deterministic weekly reset) and the new `/usage` PRs (#24121-#24124) show persistent demand for predictable quota and token consumption insight.
- **Hook/Event System Extensions:** #20374 (SessionEnd hook) requests symmetric lifecycle events for analytics/cleanup. Received positive engagement before closure.
- **Context Window & Model Support:** #24031 (1M context for GPT-5.5) and implicit demand for larger context windows. Users frustrated by uncommunicated feature removal.
- **MCP Integration Improvements:** #18056 (surface MCP notifications/message to model conversation) and #13852 (reauthentication) both request better MCP data flow and auth stability.
- **Sandbox Git & Filesystem Write Permissions:** #7071, #14338, #19315 all request writable `.git` directories in sandboxed modes across Linux, macOS, and Windows.

## Developer Pain Points

- **Windows sandbox instability:** Multiple new bugs (#24050, #24256, #24259) with sandbox setup failures, ACL grants on `C:\` root, and orphan SIDs. Windows ARM64 specifically broken despite passing diagnostics.
- **WebSocket / Reconnect reliability:** #18960 (reconnect loops) and #24260 (30-minute stalls on `gpt-5.5 xhigh`) indicate persistent streaming infrastructure issues affecting long-running sessions.
- **False-positive safety checks:** #23381 blocking legitimate Gov/GSM work; #24223 related false-positive banner. Community requests override mechanisms or better classification.
- **Cross-platform config drift:** TUI config cleanup PRs address a real pain point where remote workspace mode leaves client config out of sync with server state — specifically plugins, MCP servers, and trust decisions.
- **Authentication friction:** #20161 (phone verification on SSO), #13852 (MCP reauth), and #23563 (revoked tokens) suggest auth token lifecycle management is a recurring source of support tickets.
- **Mac security flagging:** #23195 (macOS malware warning) indicates notarization or code signing issues that can abruptly terminate active sessions.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-24

## Today's Update Brief

A quiet Sunday with no new releases, but 50 issues and 34 pull requests saw updates. The maintainer team continued triaging and retesting several open bugs, while four new PRs landed overnight addressing routing config, PTY leaks, and ACP protocol handling. Community activity remains focused on agent reliability, context management, and MCP tooling edge cases.

## Releases

No new releases in the last 24 hours.

## Hot Issues

### 1. Files invisible to Gemini CLI despite existing on disk
**#20730** – *[OPEN]* `gemini is not able to view files that exist, and I am not able to tag them`

The user reports that a random subset of project files (well under 500k total) are invisible to `gemini` for tagging or reading. Suspects a hard indexing limit per project. The bug has been open since March with 11 comments and carries the `help wanted` label. No maintainer resolution noted yet.
[https://github.com/google-gemini/gemini-cli/issues/20730](https://github.com/google-gemini/gemini-cli/issues/20730)

### 2. Gemini 3 Auto Mode silently falls back to 2.5 Flash/Flash-Lite
**#22381** – *[CLOSED]* `Gemini 3 Auto Mode uses 2.5 Flash and Flash-Lite responses`

User selected "Gemini 3 Auto Mode" but observed responses from Gemini 2.5 Flash and Flash-Lite. Marked as a possible duplicate; closed after maintainer triage. Impacts users expecting consistent model routing.
[https://github.com/google-gemini/gemini-cli/issues/22381](https://github.com/google-gemini/gemini-cli/issues/22381)

### 3. Subagent falsely reports GOAL success after hitting MAX_TURNS
**#22323** – *[OPEN]* `Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption`

The `codebase_investigator` subagent reports `status: "success"` with `Termination Reason: "GOAL"` despite hitting its maximum turn limit before doing any analysis. This masks real failures in multi-agent workflows. Priority P1, 6 comments, 2 upvotes.
[https://github.com/google-gemini/gemini-cli/issues/22323](https://github.com/google-gemini/gemini-cli/issues/22323)

### 4. Shell command execution hangs with "Waiting input" after completion
**#25166** – *[OPEN]* `Shell command execution gets stuck with "Waiting input" after command completes`

User reports Gemini CLI repeatedly hangs after executing simple shell commands, showing the command as active and awaiting input even after the shell process has finished. Priority P1, 4 comments, 3 upvotes.
[https://github.com/google-gemini/gemini-cli/issues/25166](https://github.com/google-gemini/gemini-cli/issues/25166)

### 5. Total hallucinations when summarizing PDFs
**#27408** – *[OPEN]* `Total hallucinations in summarizing pdf!`

Filed today: the user states Gemini CLI correctly summarized a PDF last week but now fabricates information entirely. No maintainer response yet. Points to possible regression in document processing.
[https://github.com/google-gemini/gemini-cli/issues/27408](https://github.com/google-gemini/gemini-cli/issues/27408)

### 6. 400 error when >128 tools enabled
**#24246** – *[OPEN]* `Gemini CLI encounters 400 error with > 128 tools`

When more than 400 tools are available, Gemini CLI hits a 400 error. The agent should be smarter about limiting tools to those in scope. Part of the maintainer-only agent workstream.
[https://github.com/google-gemini/gemini-cli/issues/24246](https://github.com/google-gemini/gemini-cli/issues/24246)

### 7. Auto Memory indefinite retries on low-signal sessions
**#26522** – *[OPEN]* `Stop Auto Memory from retrying low-signal sessions indefinitely`

Auto Memory only marks a session as processed when the extraction agent reads the transcript. If the agent decides not to read a low-signal session, it remains in the index and gets repeatedly re-surfaced. Maintainer-filed bug under the security workstream.
[https://github.com/google-gemini/gemini-cli/issues/26522](https://github.com/google-gemini/gemini-cli/issues/26522)

### 8. Browser Agent ignores settings.json overrides for maxTurns
**#22267** – *[OPEN]* `[BUG] Browser Agent ignores settings.json overrides (e.g., maxTurns)`

The `AgentRegistry` correctly reads and merges settings, but the Browser Agent ignores the overrides during initialization. Impacts users relying on project-level configuration.
[https://github.com/google-gemini/gemini-cli/issues/22267](https://github.com/google-gemini/gemini-cli/issues/22267)

### 9. Korean prompt reasoning quality severely degraded
**#21867** – *[CLOSED]* `Severely degraded reasoning quality for Korean prompts in Gemini CLI`

User reports reasoning quality with Korean prompts drops significantly compared to other CLI agents (Cursor/Codex). Even detailed prompts fail to be understood correctly. Closed as stale. Raises multilingual quality concerns.
[https://github.com/google-gemini/gemini-cli/issues/21867](https://github.com/google-gemini/gemini-cli/issues/21867)

### 10. "Too many function declarations" error with many MCP tools
**#19083** – *[CLOSED]* `Gemini CLI hits Gemini API limit: At most 512 function declarations`

When many MCP connections are enabled, requests fail with a 400 error: "At most 512 function declarations can be specified." Closed as stale after previous fix attempts.
[https://github.com/google-gemini/gemini-cli/issues/19083](https://github.com/google-gemini/gemini-cli/issues/19083)

---

## Key PR Progress

### 1. Fix exponential token leak in StateSnapshotAsyncProcessor
**#26758** – *[CLOSED]* `fix(core): prevent exponential token leak in StateSnapshotAsyncProcessor`

Fixes a critical bug where the episodic context graph caused exponential token scaling by failing to filter previously summarized nodes from targets. Priority P1.
[https://github.com/google-gemini/gemini-cli/pull/26758](https://github.com/google-gemini/gemini-cli/pull/26758)

### 2. Serialize concurrent edits to the same file
**#27153** – *[OPEN]* `fix(core): serialize concurrent edits to the same file`

`EditTool` and `WriteFileTool` follow a read→compute→write pattern with no per-file locking, causing race conditions when two operations write to the same path concurrently. Implements per-file locking. Priority P1.
[https://github.com/google-gemini/gemini-cli/pull/27153](https://github.com/google-gemini/gemini-cli/pull/27153)

### 3. Fix PTY memory leak by synchronously deleting active entries
**#27154** – *[OPEN]* `fix(core): prevent PTY memory leak by synchronously deleting active entries`

PTY entries and headless terminals were never garbage collected because `activePtys.delete()` was wrapped inside a Promise `.then()`. If the log stream promise was rejected, the entry leaked.
[https://github.com/google-gemini/gemini-cli/pull/27154](https://github.com/google-gemini/gemini-cli/pull/27154)

### 4. Make `--skip-trust` actually load workspace settings
**#27137** – *[OPEN]* `fix(cli): make --skip-trust actually load workspace settings`

The `--skip-trust` flag is documented to trust the workspace but silently drops hooks, extensions, and MCP servers from `.gemini/settings.json`. Fixes the loading path.
[https://github.com/google-gemini/gemini-cli/pull/27137](https://github.com/google-gemini/gemini-cli/pull/27137)

### 5. Validate MCP OAuth resources from metadata URL
**#27139** – *[OPEN]* `fix(core): validate MCP OAuth resources from metadata URL`

Derives the expected protected resource from the metadata URL that returned OAuth metadata, fixing validation mismatches. Addresses an open community issue.
[https://github.com/google-gemini/gemini-cli/pull/27139](https://github.com/google-gemini/gemini-cli/pull/27139)

### 6. Add /compress slash command for ACP sessions
**#27151** – *[OPEN]* `feat(acp): add /compress slash command`

Adds `/compress` as a first-class ACP command to compact session history before hitting context-window limits. Previously, the ACP agent silently processed `/compress` as plain text.
[https://github.com/google-gemini/gemini-cli/pull/27151](https://github.com/google-gemini/gemini-cli/pull/27151)

### 7. Upgrade PTY dependencies for macOS leak fix
**#27147** – *[OPEN]* `fix(core): upgrade pty dependencies`

Upgrades `@lydell/node-pty` and related packages to pick up an upstream macOS `/dev/ptmx` leak fix from microsoft/node-pty#882.
[https://github.com/google-gemini/gemini-cli/pull/27147](https://github.com/google-gemini/gemini-cli/pull/27147)

### 8. Add configurable numeric routing rules
**#27406** – *[OPEN]* `feat(routing): Add configurable numeric routing rules (fixes #21805)`

Allows users to define custom complexity-score-to-model mappings in `settings.json`, replacing the hardcoded binary threshold with multiple routing tiers.
[https://github.com/google-gemini/gemini-cli/pull/27406](https://github.com/google-gemini/gemini-cli/pull/27406)

### 9. Parse tools.callCommand before discovered tool execution
**#27405** – *[OPEN]* `fix(core): parse tools.callCommand before discovered tool execution`

Fixes a bug where raw command strings were passed through sandbox preparation instead of parsed program+argv, causing execution failures.
[https://github.com/google-gemini/gemini-cli/pull/27405](https://github.com/google-gemini/gemini-cli/pull/27405)

### 10. Filter internal session context from history during resumption
**#27391** – *[OPEN]* `fix(cli): filter internal session context from history during resumption`

Fixes internal `<session_context>` XML blocks being incorrectly displayed in the TUI when resuming a session, caused by the environment context being recorded as a standard user message.
[https://github.com/google-gemini/gemini-cli/pull/27391](https://github.com/google-gemini/gemini-cli/pull/27391)

---

## Feature Request Clusters

### AST-aware codebase understanding
Two related issues (#22745 and #15324's child tasks) propose AST-aware file reads, search, and codebase mapping to reduce token noise and improve navigation precision. Both carry `workstream-rollup` labels.
[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)

### Browser agent resilience
Two issues (#22232, #22267) request improved browser agent robustness — automatic session takeover and lock recovery, plus honoring `settings.json` overrides for `maxTurns`.
[#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)

### Configurable routing and model selection
PR #27406 and issue #21805 advocate for configurable numeric routing rules, allowing users to define custom complexity-to-model mappings rather than a binary threshold.
[#27406](https://github.com/google-gemini/gemini-cli/pull/27406)

---

## Developer Pain Points

1. **Context window saturation and token leaks** – Multiple bugs (#25166, #26758, #18318) highlight recurring issues with token overconsumption, exponential context growth, and PTY memory leaks wasting context space.

2. **Subagent reliability and false success reporting** – Issue #22323 shows subagents reporting GOAL success despite hitting turn limits, masking real failures in multi-agent workflows.

3. **Model routing unpredictability** – Issue #22381 demonstrates that selecting a specific model (Gemini 3 Auto Mode) can silently fall back to older models without user visibility.

4. **MCP tooling limits and validation** – Two issues (#19083, #24246) document hard limits on tool count (512 declarations, 128+ tools) causing 400 errors, with no automatic tool-scoping logic.

5. **Auto Memory bookkeeping issues** – Three issues (#26525, #26523, #26522) filed this month collectively describe problems with secret redaction timing, silent inbox patch skipping, and indefinite retries on low-signal sessions.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

## GitHub Copilot CLI Community Digest — 2026-05-24

### 1. Today's Update Brief

- **Release v1.0.52** landed on 2026-05-23, fixing stdin consumption for non‑interactive subcommands, adding a vertical scrollbar to the conversation view, and preventing spurious permission prompts in Autopilot mode.
- The issue tracker saw heavy activity: **17 issues updated** in the last 24 hours (8 new, 5 closed/clarified) and **1 pull request** merged.
- Key themes: configuration corruption on Windows, copy/paste regressions on Linux, Android/Termux breakage since v1.0.48, and persistent feature requests around MCP management and model selection.

---

### 2. Releases

**v1.0.52** (2026-05-23)
[Full release](https://github.com/github/copilot-cli/releases/tag/v1.0.52)

- Non‑interactive subcommands (`plugin list`, `mcp list`, `help`, `version`) no longer consume stdin.
- Vertical scrollbar with mouse drag support added to the main conversation view.
- Switching to Autopilot mode no longer triggers unexpected permission prompts for tool, path, or URL access.
- (Release notes truncated at “copil” – likely a typo.)

---

### 3. Hot Issues (10 noteworthy)

1. **[#1477 – “Continuing autonomously (3 premium requests)” after model completion](https://github.com/github/copilot-cli/issues/1477)**
   *Area: models* | 👍18 | 10 comments
   **Workflow:** User reports that after an Autopilot task finishes, the CLI incorrectly deducts premium requests (3) as if the model continued autonomously.
   **Impact:** Potential over‑consumption of premium quotas. Community reaction: high upvotes, acknowledged as a bug.

2. **[#3333 – Android/Termux support broken in v1.0.48+ (runtime.node requires glibc)](https://github.com/github/copilot-cli/issues/3333)**
   *Area: platform-linux, installation* | 👍1 | 4 comments
   **Workflow:** Native Rust addon `runtime.node` is compiled against glibc; Android’s Bionic libc cannot load it.
   **Impact:** Termux users cannot run the CLI at all. Regression introduced in v1.0.48.

3. **[#2956 – “Disable MCP” option missing from `/mcp show` interactive menu](https://github.com/github/copilot-cli/issues/2956)**
   *Area: mcp* | 👍3 | 3 comments
   **Workflow:** `/mcp disable <name>` works via CLI, but the interactive menu only offers add/delete.
   **Impact:** Reduces discoverability of the disable action; users must remember the command.

4. **[#2284 – Feature Request: Persist `/add-dir` allowed directories across sessions](https://github.com/github/copilot-cli/issues/2284)**
   *Area: permissions* | 👍12 | 3 comments
   **Workflow:** `/add-dir` permissions are session‑scoped; lost on restart.
   **Impact:** Users must re‑grant directory access each session. High demand (12 👍).

5. **[#3442 – v1.0.51 “Remote sessions are not enabled” warning](https://github.com/github/copilot-cli/issues/3442)**
   *Area: sessions, enterprise* | 👍9 | 3 comments
   **Workflow:** `/remote on` fails with a warning asking to contact admin, even when remote sessions are apparently enabled.
   **Impact:** Enterprise users blocked from using remote sessions after update.

6. **[#3436 – `/mcp search` constructs wrong URL for custom MCP registries – missing `/v0.1/`](https://github.com/github/copilot-cli/issues/3436)**
   *Area: enterprise, mcp* | 👍1 | 2 comments
   **Workflow:** Hits `{registryUrl}/servers` instead of `{registryUrl}/v0.1/servers`, causing 404 on self‑hosted registries.
   **Impact:** Breaks org‑level MCP registry setting.

7. **[#3488 – config.json `trustedFolders` corruption: `\\.` and `\\L` path segments squashed (closed)](https://github.com/github/copilot-cli/issues/3488)**
   *Area: (none)* | 👍0 | 1 comment
   **Workflow:** Paths like `C:\Users\me\.copilot` get corrupted on write‑back (backslash‑dot or backslash‑L).
   **Impact:** Trusted folders silently broken on Windows. Quickly closed after duplicate (#3487).

8. **[#3496 – Copy/Paste not working when selecting single‑line text from Timeline](https://github.com/github/copilot-cli/issues/3496)**
   *Triage* | 👍0 | 0 comments
   **Workflow:** Single‑line selections fail to copy; multi‑line works. Regression introduced around v1.0.50.
   **Impact:** Basic text interaction broken on all platforms.

9. **[#3494 – SKILL.md files with description > 1024 chars silently dropped](https://github.com/github/copilot-cli/issues/3494)**
   *Triage* | 👍0 | 0 comments
   **Workflow:** The Python SDK silently omits skills whose `description` exceeds 1024 characters, no warning.
   **Impact:** Developers unaware their skill is invisible to the agent.

10. **[#3481 – `contextTier=long_context` not applied on startup / no CLI flag](https://github.com/github/copilot-cli/issues/3481)**
    *Area: non-interactive, models, configuration* | 👍0 | 0 comments
    **Workflow:** Setting `contextTier` in `settings.json` does not reliably activate long context for non‑interactive sessions.
    **Impact:** Users expecting large context tokens must manually configure per‑session.

---

### 4. Key PR Progress

Only **1 pull request** was active in the last 24 hours:

- **[#2381 – install: add fish shell support for PATH configuration](https://github.com/github/copilot-cli/pull/2381)**
  *Author: @marcelsafin* | *Closed* | 0 comments
  **What it does:** Detects Fish shell and writes proper array syntax (`fish_add_path`) instead of `export PATH=...` into `~/.profile`, which Fish ignores.
  **Impact:** Fish users can now have their PATH correctly configured after install.

---

### 5. Feature Request Clusters

- **Persistent permissions & directory trust**
  Issues: [#2284](https://github.com/github/copilot-cli/issues/2284) (persist `/add-dir`), [#3488/3487](https://github.com/github/copilot-cli/issues/3488) (corruption).
  Users want file‑system permissions to survive session restarts and to be stored reliably on Windows.

- **MCP management enhancements**
  Issues: [#2956](https://github.com/github/copilot-cli/issues/2956) (disable in menu), [#3436](https://github.com/github/copilot-cli/issues/3436) (search URL fix), [#3486](https://github.com/github/copilot-cli/issues/3486) (scrolling tools list).
  The MCP interface is expanding but suffers from discoverability and UI gaps.

- **Model selection & context tier control**
  Issues: [#1477](https://github.com/github/copilot-cli/issues/1477) (autonomous premium requests), [#3480](https://github.com/github/copilot-cli/issues/3480) (Rubber Duck model), [#3481](https://github.com/github/copilot-cli/issues/3481) (long_context flag).
  Users want explicit control over which LLM is used in different modes and reliable application of configuration settings.

- **Non-interactive & scripting improvements**
  Issue [#3481](https://github.com/github/copilot-cli/issues/3481) (long context flag) and [#1477](https://github.com/github/copilot-cli/issues/1477) (premium request deduction) hint at growing use of CLI in automated pipelines.

---

### 6. Developer Pain Points

- **Android/Termux completely broken** since v1.0.48 due to glibc dependency ([#3333](https://github.com/github/copilot-cli/issues/3333)).
- **Windows config corruption** on paths containing `\.` or `\L` ([#3487](https://github.com/github/copilot-cli/issues/3487), [#3488](https://github.com/github/copilot-cli/issues/3488)).
- **Copy/paste regressions** on both Windows (Timeline single‑line [#3496](https://github.com/github/copilot-cli/issues/3496)) and Ubuntu (mouse/CTRL+C [#3483](https://github.com/github/copilot-cli/issues/3483), transcript clipping [#3482](https://github.com/github/copilot-cli/issues/3482)).
- **SKILL.md silent failure** – skills exceeding 1024‑char description are dropped without warning ([#3494](https://github.com/github/copilot-cli/issues/3494)).
- **Inconsistent configuration behavior** – settings like `contextTier` and remote sessions fail to apply or produce false warnings ([#3442](https://github.com/github/copilot-cli/issues/3442), [#3481](https://github.com/github/copilot-cli/issues/3481)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区日报 — 2026-05-24

## 今日更新摘要

今日社区活跃度中等，共产生 **5 个新 Issue** 和 **8 个新 PR**，无新版本发布。Windows 平台日志冲突、Shell 与 Agent 模式数据隔离、MCP 工具加载可靠性成为今日三大焦点。多个 PR 针对 Windows 兼容性、MCP 后台启动机制以及 Web UI 布局进行了修复与优化。

---

## 版本发布

今日无新版本发布。

---

## 热点议题

从今日更新的 5 个 Issue 中选取全部议题如下：

### 1. Web 端会话加载优化
- **Issue**: [#2357](https://github.com/MoonshotAI/kimi-cli/issues/2357) — Web 端应只加载最近消息，而非全部历史
- **影响工作流**: Web UI 会话切换体验
- **影响说明**: 切换会话时需等待全部历史消息加载完成，影响用户查看断点效率。请求优先加载最新消息并提供查看更早消息的入口。
- **社区反响**: 暂无讨论或点赞。

### 2. 思考模式快速切换
- **Issue**: [#2352](https://github.com/MoonshotAI/kimi-cli/issues/2352) — 增加 `/thinking` 斜杠命令和 `Ctrl+T` 快捷键切换思考模式
- **影响工作流**: 模型交互模式切换流程
- **影响说明**: 当前切换思考模式需通过 `/model` 命令 → 选择模型 → 选择思考开关 → 确认，步骤繁琐。请求直接在当前会话中快速切换。
- **社区反响**: 暂无讨论或点赞。注意：PR #2158 已实现 `Ctrl+T` 切换思考内容可见性，与本请求部分相关但侧重不同。

### 3. Shell 与 Agent 模式数据隔离
- **Issue**: [#2351](https://github.com/MoonshotAI/kimi-cli/issues/2351) — Shell 模式命令历史应对 Agent 模式可见
- **影响工作流**: 多模态协同工作流
- **影响说明**: 在无头服务器上使用 Shell 模式 (`Ctrl+X`) 执行诊断后，切换到 Agent 模式时无法访问前序命令和执行结果，需手动复制粘贴输出。请求打通两个模式的命令历史。
- **社区反响**: 暂无讨论或点赞。

### 4. Windows 多进程日志轮转权限错误
- **Issue**: [#2348](https://github.com/MoonshotAI/kimi-cli/issues/2348) — 多进程并发时 Loguru 日志轮转抛出 PermissionError
- **影响工作流**: 多进程并发场景的日志系统
- **影响说明**: 同时运行多个 `kimi` 进程（CLI + Web + Worker）时，日志轮转因进程竞争同一 `kimi.log` 文件而失败，抛出 WinError 32（文件共享冲突）。
- **社区反响**: 暂无讨论或点赞。PR #2354 已针对该问题提交修复。

### 5. SessionStart Hook stdout 展示
- **Issue**: [#2347](https://github.com/MoonshotAI/kimi-cli/issues/2347) — 将 `SessionStart` Hook 的 stdout 展示给用户
- **影响工作流**: Hooks 系统的用户体验
- **影响说明**: 当前 `SessionStart` Hook 的 stdout/stderr 被捕获但不展示给用户，限制了其在显示欢迎语、项目仪表盘或快速诊断结果等场景的实用性。
- **社区反响**: 暂无讨论或点赞。

---

## 主要 PR 进度

从今日更新的 8 个 PR 中选取全部 PR：

### 1. MCP 工具后台加载重构
- **PR**: [#2356](https://github.com/MoonshotAI/kimi-cli/pull/2356) — `refactor(toolset): always load MCP tools in background`
- **内容**: 将 MCP 工具加载改为始终在后台执行，提升启动速度和交互响应。
- **状态**: OPEN

### 2. MCP 启动失败后继续运行
- **PR**: [#2355](https://github.com/MoonshotAI/kimi-cli/pull/2355) — `fix: continue after deferred MCP startup failures`
- **内容**: 延迟启动的 MCP 服务器失败时，不再终止整个交互轮次，而是记录失败并继续运行。包含回归测试。修复 #2343。
- **状态**: OPEN

### 3. Windows 平台独立日志文件
- **PR**: [#2354](https://github.com/MoonshotAI/kimi-cli/pull/2354) — `fix: avoid shared rotating logs on Windows`
- **内容**: Windows 上改用进程级日志文件 (`kimi.<pid>.log`)，避免多进程共享 `kimi.log` 导致的轮转冲突。非 Windows 平台保持原有共享日志路径。
- **状态**: OPEN

### 4. Ctrl+T 切换思考内容可见性
- **PR**: [#2158](https://github.com/MoonshotAI/kimi-cli/pull/2158) — `feat(ui): add Ctrl+T toggle for thinking content visibility`
- **内容**: 在交互界面中通过 `Ctrl+T` 快捷键切换是否展示模型的完整思考内容（如 `kimi-k2-thinking-turbo`）。思考内容默认隐藏。关闭 #1632。
- **状态**: OPEN，最后更新于今日

### 5. Web 端布局间距优化
- **PR**: [#2353](https://github.com/MoonshotAI/kimi-cli/pull/2353) — `fix(web): tighten app layout spacing`
- **内容**: 移除应用层外缘间距，保留安全区域边距；优化侧边栏列表间距和搜索输入框显示。
- **状态**: OPEN

### 6. 非 UTF-8 工作进程输出处理
- **PR**: [#2350](https://github.com/MoonshotAI/kimi-cli/pull/2350) — `fix: tolerate non-utf8 worker output`
- **内容**: Web 会话运行器对子进程 stdout/stderr 使用严格 UTF-8 解码，导致非 UTF-8 输出（如 Windows 的 cp1252）引发 `UnicodeDecodeError`。改为宽松解码，不因单个无效字节隐藏真实错误。修复 #2313。
- **状态**: OPEN

### 7. 项目级 MCP 配置合并策略
- **PR**: [#2349](https://github.com/MoonshotAI/kimi-cli/pull/2349) — `feat (mcp-conf): Project-level MCP configuration with merge/override strategy`
- **内容**: 支持项目级 MCP 配置，提供合并与覆盖策略，增强配置灵活性。
- **状态**: OPEN

### 8. RTK 工具默认 Hook（已关闭）
- **PR**: [#2344](https://github.com/MoonshotAI/kimi-cli/pull/2344) — `feat: 为 KimiCLI 新增 RTK 工具的默认 Hook`
- **内容**: 为 Kimi CLI 添加 RTK 工具的默认 Hook 配置。已关闭，未合并。
- **状态**: CLOSED

---

## 功能请求聚类

今日的 Issue 中功能需求较为分散，无明显的重复请求聚类。需求主要围绕以下独立方向：
- **会话加载策略**：Web 端分页加载历史消息（#2357）
- **交互快捷键**：思考模式切换快捷键和斜杠命令（#2352）
- **模式间数据互通**：Shell 模式与 Agent 模式的命令历史共享（#2351）
- **Hook 输出显示**：`SessionStart` Hook 的 stdout 对用户可见（#2347）

---

## 开发者痛点

- **Windows 平台稳定性**：多进程共享日志文件导致的权限错误（#2348），是 Windows 开发者在高并发场景下的主要障碍。PR #2354 已提供修复方案（进程级日志文件）。
- **多模态工作流效率**：Shell 模式与 Agent 模式无法共享命令历史（#2351），导致无头服务器场景下用户需要在模式间手动复制粘贴输出，降低了诊断和自动化效率。
- **MCP 工具启动健壮性**：MCP 服务器启动失败可能导致整个交互轮次中断。PR #2355 的修复表明这是一个已知的可靠性问题，社区正向“失败容忍”方向改进。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-24

## 1. Today’s Update Brief
Activity remains high with 50 issues and 50 PRs updated in the last 24 hours. No new releases were published. The community is actively discussing sandboxing, speech-to-text input, session goals, tool output truncation, and reasoning model toggles, while maintainers are merging PRs that fix LSP timeouts, improve thinking/reasoning rendering, and refactor test infrastructure toward Effect-native patterns.

## 2. Releases
None in the last 24 hours.

## 3. Hot Issues (10 selected)

1. **[#2242 – Is there a way to sandbox the agent?](https://github.com/anomalyco/opencode/issues/2242)**
   *34 comments, 46 👍*
   A long-standing request to restrict terminal commands to the current directory, similar to macOS seatbelt features in other CLI tools. No maintainer response yet.

2. **[#4695 – [FEATURE]: Speech-to-Text Voice Input for Lazy People in OpenCode](https://github.com/anomalyco/opencode/issues/4695)**
   *31 comments, 152 👍*
   Very high community support for built-in voice input. Author has a working implementation but seeks integration guidance.

3. **[#27167 – [FEATURE]: Add native session goals with /goal](https://github.com/anomalyco/opencode/issues/27167)**
   *20 comments, 25 👍*
   Proposes a persistent session goal/lifecycle feature with a `/goal` slash command. Discussion includes interaction with existing custom commands.

4. **[#3176 – Why is OpenCode massively abusing git?](https://github.com/anomalyco/opencode/issues/3176)**
   *16 comments, 7 👍*
   Frustration about OpenCode running `git add .` on massive directories (45GB, 54K files) for session snapshots. Concerns about performance and unnecessary git operations.

5. **[#11313 – Long-running bash commands with large outputs cause truncation and agent retry loops](https://github.com/anomalyco/opencode/issues/11313)**
   *15 comments, 6 👍*
   Truncation of verbose command outputs leads to agents retrying commands, causing idempotency and wasted tokens. Updated today.

6. **[#28732 – [CLOSED] Gemini 3.5 Flash on Vertex keeps warning about missing thought_signature](https://github.com/anomalyco/opencode/issues/28732)**
   *15 comments, 1 👍*
   Vertex AI warnings about missing `thought_signature` after multiple tool calls. Closed, likely resolved or diagnosed.

7. **[#12393 – [CLOSED] How to unarchive in opencode-desktop](https://github.com/anomalyco/opencode/issues/12393)**
   *11 comments, 16 👍*
   UX issue: accidentally archived sessions cannot be recovered. Closed, but high reaction suggests need for clearer UI affordance.

8. **[#14612 – Edit tool messes with indentation (but this is not shown in the diff)](https://github.com/anomalyco/opencode/issues/14612)**
   *10 comments, 1 👍*
   Edit tool replaces tabs with two tabs silently, not reflected in the diff. Reproducible with a simple edit.

9. **[#25582 – [FEATURE]: Add "Fork to new session" action from message timeline](https://github.com/anomalyco/opencode/issues/25582)**
   *8 comments, 0 👍*
   Requests the ability to fork from a specific user message, matching functionality in other AI chat tools (e.g., Cursor).

10. **[#29051 – V2 prompt input hides model reasoning selector](https://github.com/anomalyco/opencode/issues/29051)**
    *3 comments, 0 👍* (but opened today)
    In desktop dev/beta builds using the v2 prompt, the reasoning variant selector (e.g., for GPT-5.5) is not rendered. Filed today and quickly got a PR (#29050).

## 4. Key PR Progress (10 selected)

1. **[#25649 – fix: increase LSP initialize timeout for JDTLS and KotlinLS](https://github.com/anomalyco/opencode/pull/25649)**
   Raises the hardcoded LSP initialize timeout to accommodate JVM-based language servers that need 60–180 seconds for Gradle sync.

2. **[#28950 – fix(llm): type-safe access to openaiCompatible reasoning_content](https://github.com/anomalyco/opencode/pull/28950)**
   Refactors reasoning content extraction to use type guards, fixing #28716.

3. **[#28907 – feat(core): allow disabling tool output truncation](https://github.com/anomalyco/opencode/pull/28907)**
   Adds a `tool_output.truncate` config option to disable truncation entirely, addressing issues like #11313.

4. **[#29028 – [beta] fix(tui): separate thinking header from markdown body](https://github.com/anomalyco/opencode/pull/29028)**
   Improves rendering of reasoning/thinking sections in the TUI by separating the summary header from the expanded markdown body.

5. **[#29052 – chore: bump amazon bedrock provider (closed)](https://github.com/anomalyco/opencode/pull/29052)**
   Updates `@ai-sdk/amazon-bedrock` from 4.0.96 to 4.0.107 and refreshes the lockfile.

6. **[#29056 – fix(opencode): roll back workspace on create failure](https://github.com/anomalyco/opencode/pull/29056)**
   Prevents leaked database records or git worktrees when `Workspace.create()` fails after DB insertion.

7. **[#29047 – fix(opencode): cap retry attempts at 5 to prevent infinite loops](https://github.com/anomalyco/opencode/pull/29047)**
   Caps provider retries at 5 to avoid spinning forever on a failing model.

8. **[#29048 – fix(tool): trigger fallback on empty task output](https://github.com/anomalyco/opencode/pull/29048)**
   Detects empty responses and triggers fallback to the next configured model.

9. **[#29050 – fix(app): show reasoning selector in v2 prompt](https://github.com/anomalyco/opencode/pull/29050)**
   Quick fix for #29051: restores the model variant (reasoning) selector in the v2 prompt input.

10. **[#22258 – feat(tool): Add media attachments to read tool (closed)](https://github.com/anomalyco/opencode/pull/22258)**
    Extends the read tool to support audio/video file attachments, not just images and PDFs. Closed after automated cleanup, but may be revived.

## 5. Feature Request Clusters

- **Session and Workflow Management**
  Multiple requests for persistent session goals (#27167), forking from message timeline (#25582), and improved archive/unarchive UX (#12393).

- **Reasoning / Thinking Mode Controls**
  A clear cluster of requests for UI toggles to disable thinking for DeepSeek (#24610, #29013) and general model variant selectors (#29051). PRs are addressing the rendering side (#29028, #29050).

- **Sandboxing and Security**
  Sandbox agent terminal commands (#2242), and a security review (#29036) flagging potential hardcoded credentials and XSS.

- **Tool Improvements**
  A new `cp` tool (#29017), ability to disable tool output truncation (#11313, #28907), and expose message bodies to plugin hooks (#22831). The edit tool’s indentation bug (#14612) and generic stripping (#21911) are also hot.

- **Local / Offline LLM Support**
  Connecting local Ollama instances to the desktop app (#7078) and F# syntax highlighting (#28965).

## 6. Developer Pain Points

- **Edit tool reliability**
   Indentation corruption (#14612), generic stripping in TypeScript (#21911), and models like MiniMax calling the edit tool with extraneous line markers (#18031) are recurring frustrations.

- **Git abuse and large repo performance**
   Issue #3176 remains a sore point — OpenCode’s session snapshot mechanism does `git add .` even on massive directories, causing slow performance and unnecessary disk I/O.

- **Session context and truncation loops**
   Infinite compaction loops when compression fails to reduce context (#27924) and command output truncation leading to retry loops (#11313) waste tokens and time.

- **LSP and external tool integration**
   LSP errors mislead AI assistants into trying to fix false positives (#7405), and JVM-based LSP servers time out (#25649). Debugger setup is confusing (#5443).

- **Windows and CJK path issues**
   Sidecar crash with `STATUS_STACK_BUFFER_OVERRUN` on Windows when paths contain CJK characters (#29033) indicates platform-specific encoding or buffer handling problems.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-24

## Today's Update Brief

Today sees two releases (v0.16.1 stable and a nightly build), with 14 issues and 50 pull requests active in the last 24 hours. Activity is concentrated around the v0.16-alpha scope freeze for the daemon mode ("Mode B"), memory leak debugging, and build system reliability fixes. The community is actively testing the new `qwen serve` daemon and reporting real-world issues around OOM crashes, settings handling, and extension management.

---

## Releases

### v0.16.1 (stable)
- **URL**: https://github.com/QwenLM/qwen-code/releases/tag/v0.16.1
- **Changes**: Bug fix release. Key fix: `fix(core,cli): close tool_use↔tool_result invariant across all failure paths` by @wenshao. Ensures tool results are properly delivered even when tool calls fail, preventing hangs in non-interactive workflows.

### v0.16.1-nightly.20260524.84f408017
- **URL**: https://github.com/QwenLM/qwen-code/releases/tag/v0.16.1-nightly.20260524.84f408017
- **Changes**: `fix(build): clean stale outputs before tsc --build to prevent TS5055` by @doudouOUC. Addresses the stale dist artifact issue that broke `npm run build` for developers.

---

## Hot Issues (10 selected)

### #4175 — proposal(serve): Mode B feature-priority roadmap toward v0.16 production-ready
- **URL**: https://github.com/QwenLM/qwen-code/issues/4175
- **Author**: @doudouOUC | **Comments**: 37
- **Workflow affected**: `qwen serve` daemon mode development roadmap
- **Impact**: This is the central planning issue for v0.16-alpha. It defines the F5 release chain (PR 27→28→30a→31) with a scope freeze date of 2026-05-24. The thread tracks what's included (text-only chat, local-only deployment) and what's deferred. High community engagement with 37 comments.
- **Community reaction**: Active discussion on scope trade-offs; maintainers are enforcing the freeze to ship v0.16-alpha on time.

### #4185 — OOM in long sessions: V8 heap pressure can exceed limit before token-based compaction runs
- **URL**: https://github.com/QwenLM/qwen-code/issues/4185
- **Author**: @yiliang114 | **Comments**: 3
- **Workflow affected**: Long-running interactive sessions with large context windows
- **Impact**: Node/V8 crash with `FATAL ERROR: Ineffective mark-compacts near heap limit` in long sessions with large context, tool outputs, and `/compress` usage. Heap approaching 4GB limit. A critical stability issue for power users running complex tasks.
- **Community reaction**: The memory-leak-debug skill (#4468) is a direct response to this class of issue.

### #4421 — feat(diagnostics): local diagnostic framework — ring buffer + diagnostic ID + /bug collect bundle
- **URL**: https://github.com/QwenLM/qwen-code/issues/4421
- **Author**: @yiliang114 | **Comments**: 2
- **Workflow affected**: Troubleshooting API/SSE failures, model streaming issues
- **Impact**: Proposes a local-first diagnostic system with a ring buffer for recent API failures, diagnostic IDs for referencing issues, and a `/bug` command to collect a sanitized bundle. Addresses the pain point where users can't reproduce issues after they happen.
- **Community reaction**: Positive — addresses a clear user pain point without automatic data collection concerns.

### #4452 — Qwen Code doesn't install Microsoft Claude Code plugin properly
- **URL**: https://github.com/QwenLM/qwen-code/issues/4452
- **Author**: @jerkstorecaller | **Comments**: 2
- **Workflow affected**: Extension installation via `qwen extensions install`
- **Impact**: User attempted to install `microsoft/skills` (deep-wiki plugin) but got "No tools found" with --multi-select. The installation succeeds silently but plugins don't register. Blocks access to the broader ecosystem of community skill packs.
- **Community reaction**: Reported by a new user; suggests extension/plugin marketplace compatibility is still rough.

### #4448 — [Request] Improve what happens if settings.json is invalid
- **URL**: https://github.com/QwenLM/qwen-code/issues/4448
- **Author**: @jerkstorecaller | **Comments**: 1
- **Workflow affected**: Startup when `~/.qwen/settings.json` has invalid JSON
- **Impact**: Invalid JSON in settings silently causes the file to be renamed to `.corrupted.<timestamp>` and QC to show first-time setup dialog, effectively wiping the user's configuration without clear error messaging. The user provided detailed reproduction steps.
- **Community reaction**: Directly addressed by PR #4461 (see below) within hours — fast maintainer response.

### #4466 — `${VAR}` in settings.json headers not resolved from `.env` files
- **URL**: https://github.com/QwenLM/qwen-code/issues/4466
- **Author**: @R-omk | **Comments**: 1
- **Workflow affected**: MCP server configuration with environment variable substitution
- **Impact**: User tries to pass a GitHub PAT via `${GITHUB_PERSONAL_ACCESS_TOKEN}` in MCP server headers, but env var substitution runs before `.env` is loaded. This breaks Docker-based sandbox setups where tokens must be injected at runtime.
- **Community reaction**: One report; affects a specific but important use case (sandbox + MCP).

### #4116 — problem critical error (non-English locale crash)
- **URL**: https://github.com/QwenLM/qwen-code/issues/4116
- **Author**: @maxinteresa-ops | **Comments**: 13
- **Workflow affected**: CLI startup with non-English locale ("Введите сообщение" — Russian)
- **Impact**: Critical startup crash for non-English users. Terminal shows garbled Unicode rendering issues. 13 comments suggest active troubleshooting.
- **Community reaction**: Maintainers are working on localization robustness.

### #4419 — Standardize file naming to kebab-case with ESLint enforcement
- **URL**: https://github.com/QwenLM/qwen-code/issues/4419
- **Author**: @pomelo-nwu | **Comments**: 1
- **Workflow affected**: Codebase contributor experience
- **Impact**: Proposes enforcing kebab-case for all `.ts` files across `packages/core` and `packages/cli` with ESLint rules and AGENTS.md documentation. Currently file naming is inconsistent.
- **Community reaction**: Low engagement; more of a code quality initiative from a contributor.

### #4471 — 任务会卡住 (Tasks get stuck)
- **URL**: https://github.com/QwenLM/qwen-code/issues/4471
- **Author**: @rayzzl | **Comments**: 1
- **Workflow affected**: Multi-task execution in TUI
- **Impact**: User reports tasks getting stuck in "active" state. The TUI shows status indicators (●, ◐, ○) frozen. Specifically tasks like "启动20个前端工程师+20个测试排查修复bug" (launch 20 frontend engineers + 20 testers to fix bugs) hang indefinitely.
- **Community reaction**: Single report; likely related to subagent management or concurrency issues.

### #4450 — `qwen --list-extensions` does nothing
- **URL**: https://github.com/QwenLM/qwen-code/issues/4450
- **Author**: @jerkstorecaller | **Comments**: 1
- **Workflow affected**: CLI flag for listing installed extensions
- **Impact**: `qwen --list-extensions` launches normal TUI instead of listing extensions. Silence on `-l` flag. The `/extensions manage` slash command works inside TUI, but there's no non-interactive way to list extensions.
- **Community reaction**: Reported alongside other extension-related issues; suggests CLI parity gaps.

---

## Key PR Progress (10 selected)

### #4461 — fix(cli): surface startup warnings on stderr before TUI render
- **URL**: https://github.com/QwenLM/qwen-code/pull/4461
- **Author**: @kagura-agent
- **Summary**: Direct fix for #4448 (invalid settings.json). When JSON parse fails, warnings are now emitted to stderr before the TUI starts, instead of being lost in the Notifications component. This makes startup issues visible even when onboarding UI overlays the notification area.
- **Significance**: Fast turnaround on a user-reported UX bug (reported and fixed same day).

### #4472 — feat(daemon): ACP Streamable HTTP transport at /acp [RFD #721] (draft)
- **URL**: https://github.com/QwenLM/qwen-code/pull/4472
- **Author**: @chiga0
- **Summary**: Draft PR adding the official ACP (Agent Client Protocol) Streamable HTTP transport at a single `/acp` endpoint alongside the existing REST+SSE API. This enables `qwen serve` to act as an ACP-compatible server, potentially interoperable with other ACP clients.
- **Significance**: Major architectural expansion — opens the door for cross-agent interoperability.

### #4473 — docs(serve): v0.16-alpha known limits + SDK QWEN_SERVER_TOKEN env fallback
- **URL**: https://github.com/QwenLM/qwen-code/pull/4473
- **Author**: @doudouOUC
- **Summary**: First PR in the F5 release chain for v0.16-alpha (per #4175 scope freeze). Bundles two changes: (1) SDK DaemonClient falls back to `QWEN_SERVER_TOKEN` env var if no explicit token is passed, (2) documents known v0.16-alpha limits (text-only chat, local-only deployment).
- **Significance**: The start of the v0.16-alpha shipping process.

### #4422 — feat(cli): TUI display optimization — compact-first, Ctrl+O transcript, subagent rework
- **URL**: https://github.com/QwenLM/qwen-code/pull/4422
- **Author**: @chiga0
- **Summary**: Reshapes the conversation TUI with compact border-less layout, Ctrl+O overlay for frozen transcript (like Claude Code), and subagent UI rework. Branched off `feat/daemon-react-cli` branch.
- **Significance**: Major UX refresh aligning Qwen Code's TUI with modern coding agent interfaces.

### #4436 — feat(prompt): enhance system prompts with global reasoning discipline and iterative planning
- **URL**: https://github.com/QwenLM/qwen-code/pull/4436
- **Author**: @DennisYu07
- **Summary**: Enhances system prompts across the codebase to improve model reasoning and planning. Adds global reasoning discipline tags and iterative planning instructions.
- **Significance**: Directly impacts model behavior quality for all users.

### #4402 — feat(core): stream-driven tool dispatch — Phase 1 + Phase 2
- **URL**: https://github.com/QwenLM/qwen-code/pull/4402
- **Author**: @BZ-D
- **Summary**: Bundles two phases of the stream-driven tool dispatch RFC (#4387). Phase 1 surfaces a "completed tool-call" timing signal during OpenAI streaming; Phase 2 uses this signal for faster tool dispatch. No observable behavior change without both phases.
- **Significance**: Performance optimization for tool-heavy workflows — reduces latency between tool completion and next model turn.

### #4377 — feat(core): add user prompt expansion hooks
- **URL**: https://github.com/QwenLM/qwen-code/pull/4377
- **Author**: @qqqys
- **Summary**: Adds a new hook lifecycle for slash commands that expand into prompts. Includes settings schema, UI metadata, command-name matching, and blocking behavior before the expanded prompt is submitted.
- **Significance**: Enables more sophisticated slash command behavior (e.g., confirm-before-expand patterns).

### #4454 — feat(core): add post tool batch hooks
- **URL**: https://github.com/QwenLM/qwen-code/pull/4454
- **Author**: @qqqys
- **Summary**: Adds a PostToolBatch hook that fires once after all tool calls in a batch complete, before the next model request. Receives resolved tool calls, can add context notes, or request a stop.
- **Significance**: Enables post-processing, logging, and conditional continuation after tool execution — useful for agents that need to analyze tool results before the next model turn.

### #4468 — feat(skills): add memory-leak-debug skill for heap snapshot diagnosis (CLOSED)
- **URL**: https://github.com/QwenLM/qwen-code/pull/4468
- **Author**: @huww98
- **Summary**: Adds a `.qwen/skills/memory-leak-debug/` skill providing a step-by-step workflow for diagnosing memory leaks using Node.js heap snapshots and chrome-devtools CLI tools. Direct response to the OOM issues in #4185.
- **Significance**: Practical tooling for debugging V8 heap pressure — helps both developers and advanced users.

### #4394 — feat(memory): load `.qwen/QWEN.local.md` as project-local context
- **URL**: https://github.com/QwenLM/qwen-code/pull/4394
- **Author**: @LaZzyMan
- **Summary**: Adds a per-developer, project-scoped context file at `<projectRoot>/.qwen/QWEN.local.md`, loaded after shared `QWEN.md`/`AGENTS.md`. Resolves #4091, filling the gap for local (gitignored) instructions that supplement shared team context.
- **Significance**: Enables personal workflow customizations without polluting shared project config.

---

## Feature Request Clusters

1. **Daemon/Server Mode Maturation** (#4175, #4472, #4473)
   - Multiple issues and PRs converge on the `qwen serve` daemon mode (Mode B). Requests include ACP transport support, token auth via env vars, and a tracked roadmap with scope freeze. This is clearly the highest-priority active development area.

2. **Local Diagnostics & Bug Reporting** (#4421, #4448, #4461)
   - Users and maintainers both seek better ways to handle and report errors. Proposals include ring buffers for API failures, diagnostic IDs, and a `/bug` command to bundle sanitized debug data — all local-first and opt-in.

3. **Extension & Plugin Ecosystem** (#4452, #4450)
   - Requests for proper extension installation from GitHub repositories, CLI parity with slash commands for extension management, and better error handling when plugins don't register. Suggests the extension system is in early stages.

4. **Memory & Long-Session Stability** (#4185, #4468)
   - Following real OOM crashes, users request better memory management, heap pressure monitoring, and diagnostic tooling. The memory-leak-debug skill is a practical response.

5. **Configuration & Environment Handling** (#4448, #4466)
   - Requests for robust settings parsing with clear error messages, and proper `.env` resolution order for variable substitution in MCP configurations.

---

## Developer Pain Points

- **Build System Fragility**: Multiple issues (#4447, #4415, #4457) report `npm run build` failures from stale `dist` artifacts causing TS5055 errors, flaky tests on CI (macOS), and unresolved stale dependency versions (`express@4.21.2`). This directly impacts contributor onboarding velocity.

- **Memory Leaks in Long Sessions**: Real production crashes from V8 heap exhaustion (#4185) in long-running sessions. Users report 4GB heap limits being hit during tool-heavy, large-context workflows. The memory-leak-debug skill (#4468) is a band-aid; deeper fixes are still needed.

- **Settings File Silent Failure**: Invalid JSON in `settings.json` silently loses user configuration (#4448) with no visible error. While fixed by #4461, this represents a class of UX failures where errors are swallowed by the TUI rendering pipeline.

- **CLI vs TUI Feature Gaps**: Several CLI flags (`--list-extensions`, `-l`) silently fall through to the TUI (#4450). Users expect these to work in non-interactive mode, especially for scripting and CI integration.

- **Non-English Locale Crashes**: Russian locale causes critical startup failure (#4116). Unicode/encoding handling needs hardening for the international user base.

- **Extension Installation Brittleness**: Installing community plugins fails silently (#4452) — "No tools found" with no further diagnostics. The extension marketplace integration is still rough, blocking ecosystem growth.

</details>