# OpenClaw Ecosystem Digest 2026-06-05

> Issues: 500 | PRs: 500 | Projects covered: 4 | Generated: 2026-06-05 02:36 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

## OpenClaw Project Digest — 2026-06-05

### 1. Today's Activity Brief

In the last 24 hours, 500 issues and 500 pull requests were updated across the OpenClaw repository. Of the updated issues, 349 remain open and 151 were closed; on the PR side, 391 are open and 109 have been merged or closed. No new releases were published today. Activity is concentrated around session‑state and message‑delivery regressions, the ongoing migration to the Codex runtime, and fixes for platform‑specific issues (Discord, Matrix, Telegram, Feishu, Windows, macOS). Several long‑running P1 bugs (e.g., Slack silent disconnect, Mattermost 503, heartbeat stalls) saw renewed maintainer attention.

### 2. Releases

**None** — no new versions were tagged today.

### 3. Project Progress

**Merged/closed PRs today (from the top‑30 PR list):**

- [#90287](https://github.com/openclaw/openclaw/pull/90287) `fix(ci): scope PR merge diff checks to first parent` — Closed (automerge armed). Prevents false positives from stale base SHA in CI diff scans.
- [#90478](https://github.com/openclaw/openclaw/pull/90478) `feat: install GitHub‑backed ClawHub skills` — Closed (waiting on author). Adds support for resolving ClawHub skill installs via GitHub codeload.

**Notable open PRs that advanced** (updated today with proof or maintainer review):
- [#90514](https://github.com/openclaw/openclaw/pull/90514) `fix(session): clear stale fallback model state on reset` — P1, proof supplied, targets a regression where `/new` or `/reset` retained stale fallback model metadata.
- [#90507](https://github.com/openclaw/openclaw/pull/90507) `fix(doctor): preserve codex context metadata` — P2, preserves legacy `openai-codex` model context when canonical `openai` provider is present.
- [#90305](https://github.com/openclaw/openclaw/pull/90305) `[daemon] Preserve gateway drain during supervised restarts` — P1, changes systemd `KillMode` to prevent forced termination during restart.
- [#90259](https://github.com/openclaw/openclaw/pull/90259) `Add reset family carryover summaries` — P2, ensures compacted session summaries survive reset/rotation for embedded‑agent prompts.
- [#89040](https://github.com/openclaw/openclaw/pull/89040) `perf: avoid event‑loop stall during embedded_run bootstrap‑context` — P1, addresses 14–22 second event‑loop block that caused message loss.

### 4. Community Hot Topics

**Most active issues (by comment count):**

| Issue | Comments | 👍 | Summary |
|-------|----------|----|---------|
| [#72808](https://github.com/openclaw/openclaw/issues/72808) | 20 | 3 | Silent Slack connection loss after days of working; high user frustration. |
| [#88838](https://github.com/openclaw/openclaw/issues/88838) | 17 | 1 | Tracking issue for SQLite migration of session/transcript runtime state. |
| [#80171](https://github.com/openclaw/openclaw/issues/80171) | 15 (closed) | 1 | RFC for Codex‑vs‑Pi runtime parity QA harness. |
| [#65161](https://github.com/openclaw/openclaw/issues/65161) | 14 | 1 | Multiple heartbeat regressions in isolated mode: cadence stalls, mislabeled events, missing state writer. |
| [#87307](https://github.com/openclaw/openclaw/issues/87307) | 13 | 1 | Matrix thread replies sent as normal replies on 2026.5.22; `/status` and `/model` silent. |
| [#90083](https://github.com/openclaw/openclaw/issues/90083) | 11 | 3 | OpenAI ChatGPT Responses transport fails with `invalid_provider_content_type` for gpt‑5.4/5.5 after upgrade to 2026.6.1. |
| [#68113](https://github.com/openclaw/openclaw/issues/68113) | 11 | 3 | Mattermost slash commands return 503 "not yet initialized" in v2026.4.15. |
| [#63216](https://github.com/openclaw/openclaw/issues/63216) | 11 | 3 | Repeated hard context‑overflow resets on same session key despite high `reserveTokensFloor`. |
| [#90082](https://github.com/openclaw/openclaw/issues/90082) | 5 | 2 (opened today) | Active‑memory circuit breaker too aggressive; fallback prompt pollutes main session. |
| [#90072](https://github.com/openclaw/openclaw/issues/90072) | 5 | 3 (opened today) | Cron jobs silently wiped during SQLite migration to 2026.6.1. |

**Most active PRs (updated today, by maintainer attention):** All top‑30 PRs have no comment counts listed, but several have labels like `status: 👀 ready for maintainer look`. Notable examples: [#89987](https://github.com/openclaw/openclaw/pull/89987) (fix cron control diagnostics), [#89138](https://github.com/openclaw/openclaw/pull/89138) (batched memory embedding), [#90433](https://github.com/openclaw/openclaw/pull/90433) (exclude archived transcripts from Dreaming corpus), [#89744](https://github.com/openclaw/openclaw/pull/89744) (Discord default account startup priority).

**Underlying needs:** Users are struggling with session‑state integrity after upgrades, especially around heartbeat systems, message delivery (Matrix, Discord, Mattermost), and the transition to the Codex runtime. The high comment counts on `#72808` (Slack) and `#68113` (Mattermost) indicate core connectivity issues that directly impact daily use. The new issue `#90072` (cron wipe) and `#90083` (OpenAI transport failure) show migration‑induced regressions are a current pain point.

### 5. Bugs & Stability

**New or updated today (2026‑06‑04/05) — ranked by severity:**

| Severity | Issue | Description | Fix PR exists? |
|----------|-------|-------------|----------------|
| P1 | [#90083](https://github.com/openclaw/openclaw/issues/90083) | OpenAI ChatGPT Responses transport fails on gpt‑5.4/5.5 after upgrade to 2026.6.1. | No PR linked in data. |
| P1 | [#90082](https://github.com/openclaw/openclaw/issues/90082) | Active‑memory circuit breaker too aggressive; injects fallback prompt into main session. | No PR linked (not yet). |
| P1 | [#90036](https://github.com/openclaw/openclaw/issues/90036) | Session model route drifts from `openai/gpt‑5.5` to `openai-codex/gpt‑5.5` with native Codex runtime. | No PR linked. |
| P1 | [#87307](https://github.com/openclaw/openclaw/issues/87307) | Matrix thread replies regressed in 2026.5.22; `/status` and `/model` silent. | No PR linked (needs info). |
| P1 | [#71736](https://github.com/openclaw/openclaw/issues/71736) (RFC) | Control UI plugin contribution slots — not a bug but potential security risk if unaddressed. | No PR. |
| P2 | [#90072](https://github.com/openclaw/openclaw/issues/90072) | Cron state silently wiped during SQLite migration to 2026.6.1 (44/45 jobs lost). | No PR linked (new today). |
| P2 | [#88929](https://github.com/openclaw/openclaw/issues/88929) | Feishu streaming card: abnormal typewriter effect, final content truncated. | No PR linked. |
| P2 | [#90093](https://github.com/openclaw/openclaw/issues/90093) | OpenAI ChatGPT Responses native replay sends encrypted reasoning, breaks next turn. | No PR linked (opened today). |
| P1 | [#67777](https://github.com/openclaw/openclaw/issues/67777) | Subagent completion delivery can be lost on timeout/drain/orphan prune. | No PR linked. |
| P1 | [#63216](https://github.com/openclaw/openclaw/issues/63216) | Hard context‑overflow resets on high‑compaction sessions (4+ weeks old). | No PR linked. |

**Regressions highlighted in today’s data:**
- **Matrix threads** (`#87307`): behaviour changed between 2026.5.20 and 2026.5.22.
- **OpenAI Responses transport** (`#90083`): caused by config/plugin migration in 2026.6.1.
- **Cron wipe** (`#90072`): also linked to SQLite migration in 2026.6.1.
- **Session model drift** (`#90036`): introduced with native Codex runtime.

**PRs targeting stability today:**
- [#90514](https://github.com/openclaw/openclaw/pull/90514) – clears stale fallback model state on reset.
- [#90500](https://github.com/openclaw/openclaw/pull/90500) – prevents routing through removed providers.
- [#89040](https://github.com/openclaw/openclaw/pull/89040) – eliminates event‑loop stall during bootstrap.
- [#90490](https://github.com/openclaw/openclaw/pull/90490) – retries restart‐continuation recovery.
- [#90305](https://github.com/openclaw/openclaw/pull/90305) – preserve gateway drain during restart.

### 6. Feature Request Clusters

**User‑requested features with sustained discussion (updated today):**

- **Sensitive data masking** ([#64046](https://github.com/openclaw/openclaw/issues/64046), opened 2026-04-10, 8 comments, P1): Users want API keys and tokens masked in config files, logs, and the Control UI. No PR yet; labeled `needs‑maintainer‑review` and `needs‑product‑decision`.
- **Multi‑index embedding memory** ([#63990](https://github.com/openclaw/openclaw/issues/63990), opened 2026-04-10, 6 comments, P2): Add support for multiple embedding models with provider failover, avoiding mixed vector spaces. No PR yet.
- **Anthropic advisor tool** ([#63930](https://github.com/openclaw/openclaw/issues/63930), opened 2026-04-09, 6 comments, P2): Support the beta server‑side advisor tool for Claude, plus generic handling of server‑side tool blocks. No PR yet.
- **Separate internal service identity from user auth** ([#69066](https://github.com/openclaw/openclaw/issues/69066), opened 2026-04-19, 6 comments, P2): RFC for trusted‑proxy / service‑account model in the gateway. No PR yet.
- **Discord role‑based access lists** ([#69748](https://github.com/openclaw/openclaw/issues/69748), opened 2026-04-21, 5 comments, P2): Replace `requireMention`/`users` with bypass/mention/deny lists supporting roles and per‑channel overrides. No PR yet.
- **Control UI plugin contribution slots** ([#71736](https://github.com/openclaw/openclaw/issues/71736), opened 2026-04-25, 9 comments, P2): RFC for data‑driven UI extension points (plugin chat modes, approval cards, etc.). No PR yet.
- **Memory QMD rerank toggle** — PR [#90304](https://github.com/openclaw/openclaw/pull/90304) (opened 2026-06-04, `ready for maintainer look`): adds `memory.qmd.rerank: false` to allow QMD query without reranking. Awaiting review.
- **ClawHub skills** — PR [#90478](https://github.com/openclaw/openclaw/pull/90478) (closed today, waiting on author): infrastructure to install skills backed by GitHub repos. Not yet merged.

No new feature requests were opened today in the top‑50 list.

### 7. User Feedback Summary

**Real pain points expressed in today’s activity:**

- **Connectivity / message loss:**
  - “My slack connection … had been working fine for several days. Today at lunch, I tried to demo … and it never answered.” – [#72808](https://github.com/openclaw/openclaw/issues/72808) (20 comments, 3 👍)
  - “After upgrading … Matrix thread behavior regressed. Bot answers are sent as normal replies instead of being posted in

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-06-05

## 1. Daily Cross-Project Overview

Today saw high activity across all four tracked projects, with OpenClaw dominating raw volume (500 issues and 500 PRs updated) while the others focused on targeted merges and fixes. OpenClaw’s activity concentrated on regression hunting around the Codex runtime migration, session-state integrity, and platform-specific connectivity bugs. NanoBot merged 61 PRs, including foundational agent hook lifecycle and stricter tool-call validation. ZeroClaw addressed multiple S1 bugs with fix PRs and advanced feature RFCs (A2A, computer-use). PicoClaw shipped a nightly build and closed three critical bugs (stale PID check, Codex tool-drop, OneBot routing). Migration-induced regressions and connectivity reliability are recurring themes across projects.

## 2. Activity Comparison

| Project    | Issues Updated | PRs Updated | Release Today         | Activity Note                                                                 |
|------------|----------------|-------------|-----------------------|-------------------------------------------------------------------------------|
| OpenClaw   | 500            | 500         | None                  | High volume; focus on regression fixes for Codex migration and platform bugs. |
| NanoBot    | 7              | 76          | None                  | 61 PRs merged; major feature additions (agent hooks, tool validation, MCP).   |
| ZeroClaw   | 32             | 50          | None                  | 15 PRs merged; multiple S1 bugs with fix PRs; active RFC discussion.          |
| PicoClaw   | 6              | 22          | v0.2.9-nightly.20260605 | Nightly build; three critical bug fixes merged; responsive maintainers.      |

## 3. OpenClaw Compared With Peers

- **Volume and scale**: OpenClaw’s issue/PR update count (500 each) is an order of magnitude higher than any peer (next highest: ZeroClaw at 32 issues, 50 PRs). This reflects its role as the core reference implementation with a larger user base and more integration surface.
- **Technical focus**: OpenClaw is deep in a runtime migration (Codex vs. Pi) and dealing with multiple platform-specific regressions (Slack silent disconnect, Matrix thread replies, Mattermost 503). Peers are earlier in their lifecycle: NanoBot is actively adding core primitives (agent hooks), ZeroClaw is building out web UI and observability, PicoClaw fixes isolated bugs quickly.
- **Community surface area**: OpenClaw has long-running, high-comment issues (e.g., Slack #72808: 20 comments) indicating sustained user frustration. NanoBot and ZeroClaw have more feature-request-driven discussions (A2A, computer-use). PicoClaw sees fast turnaround from bug report to fix (<24h for #3006 and #3002).

## 4. Shared Technical Focus Areas

The following requirements appear in multiple projects today:

- **Migration / upgrade regressions**: OpenClaw’s SQLite migration wiped cron jobs (#90072); PicoClaw’s v0.2.9 introduced a context display regression (#2968); ZeroClaw’s v0.8.0/0.8.1 release queue (#7112, #6970) tracks migration blockers.
- **Agent-to-agent / MCP connectivity**: NanoBot fixed MCP session termination (#4027) and added subagent MCP tool inheritance (#4192); ZeroClaw’s most-liked feature request is A2A protocol support (#3566, 7 👍); OpenClaw deals with silent Slack disconnects (#72808) and heartbeat stalls (#65161).
- **Provider/model configuration**: OpenClaw has model route drift (#90036) and fallback state bugs (#90514); NanoBot has a request for task-specific model config (#912) and fixed fallback reliability (#1121); ZeroClaw wants per-model context/vision config (#7100); PicoClaw fixed Claude Sonnet 4.6 model ID hyphens (#2947).
- **Session state integrity**: OpenClaw tackles stale fallback model state (#90514) and context-overflow resets (#63216); NanoBot added run-level agent hook snapshots (#4194); ZeroClaw has a “Clear all” bug that only wipes UI, not backend (#7126); PicoClaw fixed singleton PID check (#2720) and Codex tool-call drops (#3006).
- **Web UI improvements**: NanoBot added fork-from-here (#4163) and new-chat shortcut request (#4178); ZeroClaw implemented slash commands in web chat (#7223) and a file upload UI request (#7138); PicoClaw improved `/context` display (#2985).

## 5. Differentiation Analysis

- **OpenClaw**: The core reference; broadest platform support (Discord, Matrix, Telegram, Feishu, Slack, Mattermost) but also the most regression-prone due to rapid evolution and legacy runtime migration.
- **NanoBot**: Python-based with fastest PR merge velocity; strongest on agent hooks and tool-call validation. Azure AAD authentication merged today indicates enterprise push.
- **ZeroClaw**: Rust-based, lightweight; unique ambitions for desktop computer-use and A2A protocol. Active RFC stage on many features. Larger focus on observability (structured telemetry PR #7233) and security (shell command confirmation #7155).
- **PicoClaw**: Go-based, nightly releases; simplest codebase with quick-fix culture. Niche channels (OneBot, LarkSuite, WhatsApp native) and specific stability fixes (stale PID, Codex OAuth). Smallest community but responsive maintainers.

## 6. Community Activity Notes

Based solely on today’s update counts and releases:

- **High activity**: OpenClaw (500 issues, 500 PRs) — volume driven by many open issue comments and PR reviews.
- **Medium activity**: NanoBot (7 issues, 76 PRs) — low issue count but high PR throughput; ZeroClaw (32 issues, 50 PRs) — balanced issue/PR volume with RFC discussions.
- **Low activity but noteworthy**: PicoClaw (6 issues, 22 PRs) — lowest counts but shipped a nightly build and fixed critical bugs same day.

No other projects published a release; only PicoClaw had a nightly tag.

## 7. Evidence-Backed Observations

1. **Migration-induced regressions are a common pain point.** OpenClaw’s SQLite migration wiped cron jobs (#90072) and broke OpenAI Responses transport (#90083); PicoClaw’s v0.2.9 introduced context display confusion (#2968); ZeroClaw’s v0.8.0/v0.8.1 release queue is actively tracking blockers (#7112, #6970). Users across projects experience destabilization after upgrades.

2. **Connectivity reliability is the most pressing cross-project concern.** OpenClaw’s top-commented issue is a Slack silent disconnect (#72808); NanoBot fixed MCP session termination (#4168) and fallback timeouts (#1121); ZeroClaw resolved idle RPC session reaping (#7179); PicoClaw fixed Codex OAuth tool-call drops (#3006). Losing agent connectivity during multi-day usage frustrates users and undermines trust.

3. **Feature requests for agent interoperation are gathering community momentum.** ZeroClaw’s A2A protocol issue (#3566) received 7 👍 today, the highest reaction across all projects. NanoBot’s subagent MCP tool inheritance (#4192) was merged. OpenClaw’s embedded-agent prompts (carryover summaries PR #90259) hint at similar use cases. No project has a production A2A implementation yet, but interest is clear.

4. **Web UI quality is a rising focus across multiple projects.** NanoBot added fork-from-here and new-chat shortcut requests; ZeroClaw implemented slash commands and file upload UI; OpenClaw has Control UI plugin contribution slots RFC (#71736). Users increasingly expect polished chat interfaces, not just API/scaffold.

5. **No clear cross-project signal on a specific technology trend** (e.g., language adoption, benchmarking, or security posture). Differences in codebase language (Go, Python, Rust) are long-standing and not new today. The lack of consensus suggests each project is evolving independently.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-05

## Today's Activity Brief
Today saw significant project activity with 76 pull requests updated (61 merged/closed, 15 open), alongside 7 issues updated (5 closed, 2 open). No new releases were tagged. The day’s major merged work included a foundational run-level agent hook lifecycle, improvements to CLI app installation under `uv tool`, stricter tool-call validation, and enhancements to desktop shell surfaces. Community discussion centered on task-specific model configuration, fallback model reliability, and new feature requests for Volcengine (火山引擎) image generation and keyboard shortcuts in the WebUI.

## Releases
No new releases today.

## Project Progress
61 pull requests were merged or closed today. Key merged work includes:

- **Agent Hooks & State**: [PR #4176](https://github.com/HKUDS/nanobot/pull/4176) added a run-level agent hook lifecycle (`before_run`, `after_run`, `on_error`, `on_finally`) with `CompositeHook` fan-out support. [PR #4194](https://github.com/HKUDS/nanobot/pull/4194) refactored capture state to use run-level hook snapshots, making `SDKCaptureHook` rely on authoritative `after_run` snapshots.

- **Tool Call & Validation**: [PR #3984](https://github.com/HKUDS/nanobot/pull/3984) fixed tool call/result ID mismatches for OpenAI-compatible APIs (e.g., GLM-4.7, Kimi 2.6). [PR #4190](https://github.com/HKUDS/nanobot/pull/4190) made tool-call preparation stricter, rejecting near-miss names and non-object arguments instead of guessing. [PR #4053](https://github.com/HKUDS/nanobot/pull/4053) kept filesystem read-only roots out of write paths.

- **CLI & WebUI**: [PR #4164](https://github.com/HKUDS/nanobot/pull/4164) fixed CLI app installation falling back to `uv pip` when `pip` is unavailable under `uv tool install`. [PR #4195](https://github.com/HKUDS/nanobot/pull/4195) polished the desktop shell and shared WebUI surfaces. [PR #3966](https://github.com/HKUDS/nanobot/pull/3966) rendered CLI-generated image artifacts in WebUI. [PR #4178](https://github.com/HKUDS/nanobot/pull/4178) was noted as a `good first issue` for adding a keyboard shortcut to start a new chat.

- **MCP & Subagents**: [PR #4027](https://github.com/HKUDS/nanobot/pull/4027) fixed MCP reconnection by resetting `_mcp_connected` on session drop. [PR #4192](https://github.com/HKUDS/nanobot/pull/4192) allowed subagents to inherit MCP tools (opt-in via `tools.subagentMcpAccess`). [PR #4123](https://github.com/HKUDS/nanobot/pull/4123) rejected unsafe HTTP URLs before MCP probe.

- **Testing & Infrastructure**: [PR #4189](https://github.com/HKUDS/nanobot/pull/4189) improved deterministic unit test coverage by replacing timing-based waits. [PR #4193](https://github.com/HKUDS/nanobot/pull/4193) added a memory lifecycle harness. [PR #3982](https://github.com/HKUDS/nanobot/pull/3982) added a scripted agent runner harness.

- **Provider Support**: [PR #4126](https://github.com/HKUDS/nanobot/pull/4126) added Azure AAD-based authentication for Azure OpenAI provider, fixing issue #4125.

## Community Hot Topics

- **Task-Specific Model Configuration** ([Issue #912](https://github.com/HKUDS/nanobot/issues/912)): Open since February 2026, with 4 comments and 3 👍. This issue proposes allowing separate model configuration for conversational, tool-use, and browser-use tasks. While no PR directly addresses it, it reflects a desire for finer-grained model control.

- **Fallback Model Not Triggered on LLM Timeout** ([Issue #1121](https://github.com/HKUDS/nanobot/issues/1121)): Closed today. Reported that fallback models configured in `agents.defaults.fallbacks` are not triggered on `ServiceUnavailableError` (e.g., Gemini 503). User experience is that the agent returns an error instead of retrying. Important for reliability.

- **MCP Session Termination** ([Issue #4168](https://github.com/HKUDS/nanobot/issues/4168)): Closed. User reported MCP server becoming unreachable after random time with `McpError: Session terminated`. A restart of nanobot fixed it. This was addressed by [PR #4027](https://github.com/HKUDS/nanobot/pull/4027).

- **WebUI CLI App Install Under uv tool** ([Issue #4158](https://github.com/HKUDS/nanobot/issues/4158)): Closed. `run pip` fails when nanobot is installed via `uv tool` because `sys.executable` points to a Python without pip. Addressed by [PR #4164](https://github.com/HKUDS/nanobot/pull/4164).

## Bugs & Stability

| Severity | Bug | Status | Fix PR |
|----------|-----|--------|--------|
| High | MCP server unreachable after random time (`McpError: Session terminated`) | Closed | [PR #4027](https://github.com/HKUDS/nanobot/pull/4027) |
| High | Fallback model not triggered on LLM timeout (ServiceUnavailableError) | Closed | Not linked, but issue closed |
| Medium | WebUI CLI app install fails under `uv tool` (missing pip module) | Closed | [PR #4164](https://github.com/HKUDS/nanobot/pull/4164) |
| Low | Tool call/result ID mismatches for OpenAI-compatible APIs | Closed | [PR #3984](https://github.com/HKUDS/nanobot/pull/3984) |
| Low | Read-only workspace roots leaking into write paths | Open | [PR #4053](https://github.com/HKUDS/nanobot/pull/4053) open |

All known bugs from today appear to have either fix PRs merged or are actively being addressed.

## Feature Request Clusters

- **Enterprise Authentication**: Multiple items address Azure AAD-based auth (Issue #4125, PR #4126), reflecting demand for enterprise-grade authentication to comply with strict API key policies.

- **Image Generation Provider Support**: Issue #4196 requests support for Volcengine (火山引擎) image generation (Seedream 5.0 Lite), currently unsupported. Related component: Channel (WeChat, Feishu, Telegram, etc.).

- **User Interface Enhancements**:
  - Issue #4178 asks for `Cmd/Ctrl+Shift+O` shortcut to start a new chat in WebUI.
  - Issue #4163 (closed) added fork-from-here for user messages in WebUI ([PR #4163](https://github.com/HKUDS/nanobot/pull/4163)).

- **Subagent MCP Tool Inheritance**: PR #4192 adds opt-in subagent MCP tool inheritance, fixing issue #4166.

## User Feedback Summary

- Users expressed a concrete need for **task-specific model configuration** (Issue #912, 3 👍) to separate models for conversation vs. tool/browser use.
- The **fallback model reliability** issue (Issue #1121, 3 👍) shows users expect graceful degradation when primary LLM providers timeout or return errors.
- A **user pain point** around MCP server connectivity (Issue #4168) was reported and resolved with a reconnection fix.
- The **Azure AAD auth** request (Issue #4125) indicates enterprise users face policy restrictions preventing API key usage.
- A **WebUI usability gap** was reported: the only global keyboard shortcut is for session search; users desire a shortcut for starting new chats (Issue #4178).

## Backlog Watch

- **Issue #912** (Feat: Support Task-Specific Model Configuration) – Open since February 2026, last updated June 4. Has 4 comments and 3 👍 but no linked PR. Waiting for volunteer or maintainer progress.

- **PR #4053** (fix(tools): keep read-only roots out of write paths) – Open since May 29, last updated June 4. Addresses a security-sensitive workspace isolation issue. Needs review and merge.

- **PR #3983** (test: cover runner blocked tool-call finish reasons) – Open since May 24, last updated June 4. Providing test coverage for non-executable finish reasons (refusal, content_filter, error). May derive from Issue #3980. Long-running open PR.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-05

## Today’s Activity Brief

- **32 issues** updated in the last 24 hours (27 open/active, 5 closed); **50 pull requests** updated (35 open, 15 merged/closed).
- No new releases were published.
- The majority of activity centers on the web UI, observability, provider fixes, and the ongoing v0.8.0/v0.8.1 release queue.
- A notable cluster of PRs from contributor @NiuBlibing addresses multiple gateway/chat bugs (telemetry leaks, “Clear all” backend cleanup, slash commands, and translation guards).
- The v0.8.0 release tracker (#7112) and v0.8.1 integration tracker (#6970) remain active — both are milestone coordination issues with no recent closure flags.

## Releases

*None.* No new versions were cut in the last 24 hours.

## Project Progress

### Merged / Closed PRs (within the last 24 hours, from the top‑20 list)

- **#7231** – `fix(ollama): restore compiling master build` (merged)
  Fixes two compile errors in `ollama.rs` that were missed by CI running against a stale base.
  [PR #7231](https://github.com/zeroclaw-labs/zeroclaw/pull/7231)

### Closed Issues (reflects finished work, fixes landed)

| Issue | Summary | Severity | Fix notes |
|-------|---------|----------|-----------|
| #5962 | Ollama Provider call failed when tools are needed | S1 | Closed; bug resolved |
| #7069 | Twitter/X channel not available in pre‑built binary | S3 | Closed; missing feature flag handling addressed |
| #7083 | Windows shell tool mangles commands containing double quotes | S1 | Closed; fix merged (likely in #7214) |
| #7179 | ZeroClaw Reaps Idle RPC Sessions at 10 Minutes | S1 | Closed; session keep‑alive/configuration updated |
| #7211 | The repo is huge as hell | S3 | Closed; likely a documentation/awareness issue |

These closures indicate active bug‑fixing, particularly for the Ollama provider, Windows shell tooling, and session management.

## Community Hot Topics

### Most Discussed Issues (by comment count)

1. **#5962** [CLOSED] – *Ollama Provider call failed when tools are needed*
   – 6 comments, 0 👍
   – User @ufukbakan reported a workflow‑blocking bug; the fix has been merged.
   [Issue #5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962)

2. **#6909** – *computer‑use support (screen interaction like Codex / Peekaboo)*
   – 5 comments, 0 👍
   – Proposes adding desktop GUI interaction (screenshots + mouse/keyboard). Currently accepted as RFC.
   [Issue #6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)

3. **#3566** – *A2A (Agent‑to‑Agent) Protocol Support*
   – 5 comments, **7 👍** (most reacted)
   – Seeks native A2A protocol support for inter‑agent communication. Blocked but accepted. High community interest.
   [Issue #3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566)

4. **#5907** – *LSP support*
   – 3 comments, 0 👍
   – Requests integration with Language Servers to reduce hallucinations. Blocked and needs maintainer review.
   [Issue #5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907)

5. **#7069** [CLOSED] – *Twitter/X channel not available in pre‑built binary*
   – 3 comments, 0 👍
   – Community member reported missing functionality; now closed.
   [Issue #7069](https://github.com/zeroclaw-labs/zeroclaw/issues/7069)

### Most Active PRs (by comment count, all shown with `undefined` comments)

No PRs in the top‑20 have explicit comment counts beyond the default (likely 0 or none). This suggests that discussion happens more on issues than on PRs.

**Reaction signals:** #3566 with 7 👍 indicates strong community desire for A2A interoperability.

**Underlying needs:** Users consistently ask for broader platform support — desktop control, cross‑agent communication, and coding assistant features (LSP). These are long‑standing feature requests that continue to gather attention.

## Bugs & Stability

### High‑Severity Bugs (S1 – workflow blocked) reported or updated today

| Issue | Summary | Status | Fix PR exists? |
|-------|---------|--------|----------------|
| #7227 | zerocode Quickstart hardcodes model‑provider alias to `default`, colliding with existing providers | Open | No (reported today) |
| #7125 | TUI (zerocode) freezes entirely when daemon disconnects | Open (in‑progress) | Not yet linked |
| #7143 | Agent repeatedly runs near‑duplicate shell discovery commands until `max_tool_iterations` exhausted | Open | No |
| #7151 | Observability `tool_call` telemetry leaks onto chat WebSocket → permanent “unknown” tool cards | Open | **PR #7221** (fix submitted) |
| #7156 | Reload banner shows persistent `gateway.paired_tokens (secret)` drift that never clears | Open | **PR #7220** (fix submitted) |
| #7157 | Chat message timestamp rendered inside message bubble instead of as separate metadata | Open | No |
| #7179 | ZeroClaw Reaps Idle RPC Sessions at 10 Minutes | **Closed** | Fixed |

### Medium‑Severity Bugs (S2 – degraded behavior)

- **#7225** – WhatsApp Web `mention_only` ignores replies to the bot in group chats (open)
- **#7126** – Web UI “Clear all” only wipes rendered messages, not backend session history (open; **PR #7222** submitted)
- **#7139** – i18n missing translation keys for chat toolbar buttons (open, in‑progress)
- **#7145** – OpenAI‑compatible provider omits `temperature` when unset (open, in‑progress)

### Low‑Severity / Minor

- **#7211** – Repo size (closed, acknowledged)
- **#7157** – Timestamp rendering (S3, open)

**Notable:** Several S1 bugs now have fix PRs (#7220, #7221, #7222), reducing the immediate risk for those items. The TUI freeze (#7125) and agent loop (#7143) remain unfixed and are critical for stability.

## Feature Request Clusters

### Desktop / Computer‑Use (Issue #6909)
- **Request:** Add screen capture and mouse/keyboard interaction (like OpenAI Codex).
- **Status:** RFC, accepted, no‑stale.
- **Related:** None in PRs yet.

### Agent‑to‑Agent Protocol (Issue #3566)
- **Request:** Native support for A2A protocol (Linux Foundation standard) to let ZeroClaw talk to other agents.
- **Status:** Blocked, accepted, 7 👍.
- **Extension:** Issue #7218 proposes A2A discovery via `/.well-known/agent-card.json` for multi‑agent installs.

### Coding Assistance Enhancements
- **LSP support (#5907):** Use language servers to reduce hallucinations. Blocked, needs maintainer review.
- **Per‑model context window & vision config (#7100):** Let users set `vision` and `context_window` per model. RFC, needs maintainer review.
- **Azure OpenAI reasoning_effort (#7228):** Add `reasoning_effort` parameter for parity with compatible provider.

### Security / Shell Policy
- **#7155:** Add per‑execution confirmation tier for high‑risk shell commands + allow/ask/deny patterns (similar to Claude Code). RFC, needs maintainer review.

### Observability Enhancement
- **#7232 + PR #7233:** Structured observability — richer events, OTel trace correlation, bridge refactoring. Draft RFC with a companion PR submitted today.

### Web UI / Gateway Features
- **Slash commands (#7137):** Support `/clear`, `/help`, `/new`, etc. in web chat — **PR #7223** implements this.
- **File upload UI (#7138):** Surface `file/attach` protocol in web chat input.
- **MCP / Skills / Plugins / Providers dashboard (#7229):** New management tabs for operators — PR submitted by @theonlyhennygod.
- **Kilo AI Gateway (#7136):** Add as a first‑class model provider with pricing capture (large PR).

### i18n / Packaging
- **#7184:** Move translated `.ftl` / `.po` files into a git submodule (low risk, open).

## User Feedback Summary

### Positive Expressions
- **#7143** includes a user comment: *“It is great to see a Rust‑based agent runtime that is much lighter on resources than many other agent systems we have tried.”* – indicates satisfaction with performance and resource usage.

### Pain Points / Dissatisfaction
- **Ollama provider failure (#5962):** Was workflow‑blocking for local model users; now fixed.
- **Twitter/X channel missing in binary (#7069):** Frustration that documented features are not usable in pre‑built releases; closed but suggests documentation/build gap.
- **Windows shell quoting (#7083):** Commands with double quotes fail on Windows; fixed.
- **TUI freeze on daemon disconnect (#7125):** Major UX blocker, no workaround.
- **Agent shell‑command loop (#7143):** Slack‑connected coding agent exhausted iterations on near‑duplicate commands — user reported the issue with detailed reproduction.
- **Timestamp inside message bubble (#7157):** Cosmetic but noted as confusing.
- **Quickstart alias collision (#7227):** New users hitting S1 immediately on setup.

## Backlog Watch

Items that are important but appear to lack recent maintainer attention or remain blocked:

| Issue / PR | Summary | Status / Last Update | Notes |
|------------|---------|----------------------|-------|
| #3566 | A2A Protocol Support | Blocked, accepted, no‑stale (7 👍) | No recent maintainer comment; RFC accepted but no implementation PR. |
| #5907 | LSP support | Blocked, needs‑maintainer‑review, no‑stale | Awaiting maintainer decision. |
| #6074 | Audit: track 153 commits lost in bulk revert | In‑progress, no‑stale | High risk recovery tracking; little recent activity. |
| #6970 | v0.8.1 integration PR queue tracker | No‑stale; no comments since creation | Operational tracker; updates may be happening outside the issue. |
| #7112 | v0.8.0 release queue and stable‑tier blockers | No‑stale; no comments since creation | Milestone coordination; open for maintainers. |
| #5797 | TLS CA cert path for custom inference providers | Open since April 16; no recent review | Medium‑risk provider enhancement; waiting for maintainer. |
| #7048 / #7047 | ESP32 simulator and hardware fixes | Open since May 31; no recent maintainer activity | Extracted from hackathon bundle; might need review. |

**Maintainer attention needed:** Issues marked `needs-maintainer-review` (#5907, #7155, #7100) and the long‑open PR #5797 (TLS cert) would benefit from a maintainer response. The A2A proposal (#3566) remains popular but stalled.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-05

## Today's Activity Brief
Today marks a high-activity day with 22 pull requests updated and 6 issues touched. A new `nightly` build (v0.2.9-nightly.20260605) was published. A major stability fix for a high-priority singleton PID bug (#2720) was merged via PR #3000, and a user-facing fix for `/context` display (#2968) advanced with a new PR (#2985). Several dependency bumps (LarkSuite SDK, AWS Bedrock Runtime, SQLite) were merged. The project also saw two quick-fix PRs for a Codex OAuth tool-call drop bug (#3006 → #3007) and a OneBot group-chat routing error (#3002 → #3009).

## Releases
- **nightly (v0.2.9-nightly.20260605.5224b9a4)**
  Automated nightly build. Marked as potentially unstable. Full changelog: https://github.com/sipeed/picoclaw/compare/v0.2.9...main

## Project Progress
**Merged/Closed PRs (key ones):**
- **#3000** (merged): Singleton PID check now verifies gateway process identity, fixing stale PID crash loop ([#2720](https://github.com/sipeed/picoclaw/issues/2720)). https://github.com/sipeed/picoclaw/pull/3000
- **#3007** (merged): Preserves streamed Codex tool calls when completed response `output` is empty, fixing GPT-5.5 tool-use drops. https://github.com/sipeed/picoclaw/pull/3007
- **#3008** (merged): Adapts to LarkSuite oapi-sdk-go v3.9.4 breaking rename (`ReceiveIdTypeChatId`). https://github.com/sipeed/picoclaw/pull/3008
- **#2999** (merged): Fixes Makefile handling of embedded spaces in `go env GOVERSION`. https://github.com/sipeed/picoclaw/pull/2999
- **#2996** (merged): Adds proper `json.Marshal` error handling in exec tool responses (7 sites). https://github.com/sipeed/picoclaw/pull/2996
- **Dependency bumps merged:** #3005 (LarkSuite SDK to 3.9.4), #3004 (AWS Bedrock Runtime to 1.53.3), #3003 (SQLite to 1.51.0), #2963 (LarkSuite SDK to 3.9.3).

**New open PRs advancing features/fixes:**
- **#2985** (open): `/context` now shows both summarize and compress thresholds (fixes #2968). https://github.com/sipeed/picoclaw/pull/2985
- **#3009** (open): Fixes OneBot group chat routing — adds `group:` prefix to ChatID. https://github.com/sipeed/picoclaw/pull/3009
- **#3001** (open): Allows scheme-less URLs (e.g., `curl wttr.in/Beijing`) when `restrict_to_workspace` is enabled. https://github.com/sipeed/picoclaw/pull/3001
- **#3010, #3011** (open): Adds safe type-assertion checks in channel hashing and agent event unsubscribe to prevent panics.

## Community Hot Topics
- **#2968** (open): `/context` always shows `Compress at: 76800 tokens` — user confused by missing summarization threshold. Received 1 👍 and 4 comments. Author uses MiniMax/FreeBSD. https://github.com/sipeed/picoclaw/issues/2968 — PR #2985 directly addresses this.
- **#2720** (closed): High-priority PID check bug causing gateway crash loops. 8 comments, heavy discussion. Fixed by PR #3000 today. https://github.com/sipeed/picoclaw/issues/2720
- **#3002** (open): OneBot group chat sends `send_private_msg` instead of `send_group_msg`, with misidentified `user_id`. 0 comments — filed hours ago. PR #3009 opened same day. https://github.com/sipeed/picoclaw/issues/3002
- **#3006** (closed, resolved quickly): Codex OAuth GPT-5.5 drops tool calls. 0 comments — filed and fixed same day. https://github.com/sipeed/picoclaw/issues/3006

## Bugs & Stability
**Critical:**
- `[BUG] Singleton PID check doesn't verify process identity` (#2720, closed/fixed) — stale PID cause crash loop. Fix merged today.
- `[BUG] Codex OAuth GPT-5.5 drops tool calls because completed response output is empty` (#3006, closed/fixed) — tool-use silent failure. Fix merged today.

**High:**
- `[BUG] /context always show Compress at: 76800 tokens` (#2968, open) — display bug, fix PR exists (#2985).
- `[BUG] OneBot group chat routing` (#3002, open) — misroutes to private message. Fix PR exists (#3009).

**Medium:**
- Unchecked type assertions in agent and channel code — two open PRs (#3010, #3011) fix potential panics on unexpected config data.

**Regression:**
- `[BUG] After upgrade to v0.2.9, Web UI message chaos` (#2972, closed) — old message history attached to new sessions. Already resolved.

## Feature Request Clusters
- **Restrict_to_workspace URL handling**: PR #3001 expands the workspace guard to allow scheme-less URLs (e.g., `curl wttr.in/Beijing`), addressing user friction with web-utility commands.
- **Context display improvements**: PR #2985 adds a separate `SummarizeAtTokens` field to `/context`, making both compression and summarization thresholds visible — aligns with request in #2968.
- **Native WhatsApp mode**: PR #2934 (still open, updated today) adds `use_native` flag support for WhatsApp channel, enabling direct whastmeow without bridge.

## User Feedback Summary
- **Pain point – on-boarding/configuration**: User `@axwfae` opened a task (#2981) requesting the instruction manual be updated to match v0.2.9 changes, indicating the docs are lagging behind fast-moving development.
- **Pain point – context / token budget**: User `@xpader` reported confusion with `/context` showing only `76800` tokens and not the expected summarization threshold. Combined with session-history attachment bug (#2972), this user had a rough upgrade experience on FreeBSD/MiniMax.
- **Pain point – group chat**: User `@Xuan-Xuann` filed a clear OneBot bug with NapCat error — immediate fix PR suggests maintainers are responsive.
- **Satisfaction indicator**: No explicit praise or thanks in today’s data, but the swift fix turnaround for #2720 (high-severity), #3006 (Codex tool call), and #3002 (OneBot group chat) shows active maintainer engagement.

## Backlog Watch
- **PR #2813** (stale, open, 29d without merge): Alternative PID-check fix from `@mrigangha`. Likely superseded by PR #3000 which was merged today. May need explicit closure comment. https://github.com/sipeed/picoclaw/pull/2813
- **PR #2947** (stale, open, 10d): Fix for Claude Sonnet 4.6 model ID hyphens. No maintainer activity. https://github.com/sipeed/picoclaw/pull/2947
- **PR #2962** (open, 8d): Dependabot bump for Anthropic SDK from v1.26.0 to v1.46.0 — a major jump. Requires review due to potential breaking changes. https://github.com/sipeed/picoclaw/pull/2962
- **Issue #2981** (closed, but to-do list incomplete): Documentation update task — acceptance criteria partially met. Worth tracking for doc completeness. https://github.com/sipeed/picoclaw/issues/2981

</details>