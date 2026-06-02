# AI CLI Tools Community Digest 2026-06-02

> Generated: 2026-06-02 02:45 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report — 2026-06-02

## 1. Daily Cross-Tool Overview

Today saw releases from four of six tracked tools (Claude Code v2.1.160, OpenAI Codex rust-v0.136.0, Gemini CLI nightly, Copilot CLI v1.0.57/v1.0.57-5), with Qwen Code also delivering a nightly build. Issue activity remained very high across all repos, with Claude Code, OpenAI Codex, Gemini CLI, and OpenCode each recording 50+ updates. A clear cross-tool pattern emerged around **context management fragility** (auto-compaction failures, session resume crashes, context volatility) and **Windows platform stability** (OAuth crashes, installation failures, rendering bugs). Permission systems and MCP infrastructure reliability were recurring pain points, with multiple tools seeing security-related fixes or feature requests.

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Release Today | Key Release Type |
|---|---|---|---|---|
| **Claude Code** | 50 | 9 | v2.1.160 | Safety prompt before shell/config writes |
| **OpenAI Codex** | 50 | 50 | rust-v0.136.0 | TUI markdown links, session archiving |
| **Gemini CLI** | 50+ | 10 | v0.45.0-nightly | Flash GA model transition (feature flag) |
| **Copilot CLI** | 32 | 1 | v1.0.57 / v1.0.57-5 | API rate-limit handling, plugin progress feedback |
| **Kimi Code CLI** | 2 highlighted | 5 notable | None | — |
| **OpenCode** | 50 | 50 | None | — |
| **Qwen Code** | 22 | 50 | v0.17.0-nightly | Compressed turn error fix |

## 3. Shared Feature Directions

**Context and session management improvements** appear across **Claude Code**, **Copilot CLI**, and **Gemini CLI**:
- Claude Code: auto-compact not triggering (#63015), agent teams lost after compaction (#23620), default 1M context causing billing errors (#62063)
- Copilot CLI: infinite auto-compaction loops with large instruction files (#3621), context loss with Claude Sonnet 4.6 (#3623)
- Gemini CLI: session resume crashes (PRs #27371, #27372), session context leaking into TUI metadata (PR #27391), EBADF on resume

**MCP reliability and security** crosses **Claude Code**, **Copilot CLI**, **OpenCode**, and **Qwen Code**:
- Claude Code: Telegram MCP inbound notifications never delivered (#36411), `.mcp.json` vs `plugin.json` documentation confusion (PR #64607)
- Copilot CLI: MCP permissions request (#3028), per-server enable/disable (#768)
- OpenCode: MCP broken on v1.15.13 (#30265), subagents not inheriting MCP permissions (PRs #30085, #30288)
- Qwen Code: project-level `.mcp.json` support with pending approval state (#4615), Windows MCP connection instability (#4641)
- Gemini CLI: blacklist bypass vulnerability in MCP server config (PR #27377), eager tool wipe on network timeout (PR #27383)

**Windows platform support** identified as a pain point in **OpenAI Codex**, **Claude Code**, **Gemini CLI**, **Copilot CLI**, and **Qwen Code**:
- OpenAI Codex: OAuth callback crashes (#25203, #25157, #25734), notification opens invalid path (#25197), Computer Use cannot bootstrap (#25391)
- Claude Code: Cowork VM fails on ARM64 (#40198), Computer Use support requested (#64381), Auto mode in VS Code (#44941)
- Gemini CLI: symlink test failures on Windows (PR #27385)
- Copilot CLI: copy-to-clipboard regression on Windows (#3609)
- Qwen Code: TUI rendering garbled on Windows (#4420)

**Permission and safety systems** being enhanced across **Claude Code**, **Copilot CLI**, **OpenCode**, **Gemini CLI**, and **Qwen Code**:
- Claude Code: new safety prompts for shell startup and build config writes (v2.1.160)
- Copilot CLI: permission prompt incorrectly associates non-git directory (#3616)
- OpenCode: permissions ignored (#16331), permission dialog unresponsive (#27436), new location-based permission service (PR #30287)
- Gemini CLI: subagents running without permission (#22093), RCE via MCP blacklist bypass (PR #27377)
- Qwen Code: Auto mode classification hardening (PR #4572), MCP pending approval state (#4615)

## 4. Differentiation Analysis

**Claude Code** is investing in **safety guardrails** (v2.1.160 adds prompts before shell/config writes), while the community's strongest pain is **tool-calling reliability** — Opus 4.7 produces unparseable calls (#62123), mixes XML/JSON (#49747), and cascades sibling failures (#22264). The 1M-context default on Pro plans (#62063) is a unique billing friction.

**OpenAI Codex** shipped **polished TUI features** (clickable web links, table-to-key-value layout switching, session archiving) and is advancing **permission profiles** (PR #25739) and **MCP telemetry** (PR #25746). Its most distinctive community pain is **authentication friction** — OTP loops (#20320), Electron crashes on OAuth callback (#25203), SMS step-up on security-key accounts (#25737).

**Gemini CLI's** focus is on **agent architecture reliability**: sub-agent lifecycle bugs (hangs #21409, false success signals #22323), Wayland browser agent failure (#21983), and session resume crashes (PRs #27371/27272). The memory system (#26516) and AST-aware codebase tools are active development areas. A security vulnerability fix (MCP blacklist bypass, PR #27377) shows security awareness.

**Copilot CLI** is the most **conservative in scope** among tracked tools — only 1 PR (spam), 2 patch releases, minimal new features. Community frustration centers on **tool parity with VS Code Copilot** (missing models #1703) and **shell compatibility** (bash tool drops non-ASCII #3601, fish shell exit-code parsing #3619). The clipboard regression (#3609) and context volatility (#3621, #3623) are the most impactful bugs.

**Kimi Code CLI** shows **lowest visible activity** — no release today, only 2 highlighted issues. The main discussion is about **API whitelist policy** for third-party coding agents (Zoo Code successor to Roo Code, #2416). Session state consistency (PR #2386) and OAuth token validation (PR #2414) show maintenance focus.

**OpenCode** has the **most permission-system activity** — a new location-based permission service (PR #30287), subagent MCP permission fixes (PRs #30085, #30288), and ongoing reports of ignored permissions (#16331). The community is actively requesting **pricing adjustments** (#28846, 61 👍) after DeepSeek V4 Pro's price cut. TUI stability issues (Alpine musl #27589, auto-scroll #29992) are notable.

**Qwen Code** differentiates with **local LLM support** focus — the top issue (#3384) is about adding OpenAI-compatible local models, and PR #4667 adds configurable body timeout for streaming. The community requests SDK-level resume APIs (#4679) and AST-aware tools. Multi-platform UI issues (Windows) and performance (memory/CPU) are active pain points.

## 5. Community Activity Notes

| Activity Dimension | Highest | Notable |
|---|---|---|
| **Issue throughput** | Claude Code, OpenAI Codex, Gemini CLI, OpenCode (50+ each) | Qwen Code lower at 22 |
| **PR throughput** | OpenAI Codex, OpenCode, Qwen Code (50 each) | Copilot CLI only 1 (spam) |
| **Release cadence** | Copilot CLI (2 patches) | Kimi Code: no release |
| **Maintainer responsiveness** | Gemini CLI (10 PRs, many fixes), OpenCode (10 PRs, several merged) | Copilot CLI: minimal |
| **Community upvoting** | Claude Code (thinking summaries #49268: 67 👍, parallel calls #22264: 61 👍) | OpenCode (usage limits #28846: 61 👍) |
| **High-severity bugs** | Claude Code (tool parsing #62123, context defaults #62063), OpenAI Codex (OAuth crash #25203) | Copilot CLI (clipboard regression #3609) |

**Claude Code** has the most **emotionally charged** community issues: image processing burning tokens (#60334), thinking summaries missing (#49268, 67 👍), and context pricing errors (#62063). The stale-issue timeout PR (14→90 days, #63686) reflects community frustration with aggressive issue closure.

**OpenAI Codex** has the most **Windows-specific complaints** — 4 of the top 10 issues are Windows OAuth or notification related. The PAT authentication support (PR #25731) is a significant UX improvement in progress.

**Gemini CLI** maintainers are **highly responsive** — 7 critical PRs merged or open today, addressing session resume crashes, security vulnerabilities, and tool wipe problems. The ephemeral session mode (PR #27365) is notable for headless use cases.

## 6. Evidence-Backed Observations

**1. Context management is the most pervasive cross-tool pain point.** Claude Code (#63015, #23620, #62063), Copilot CLI (#3621, #3623), Gemini CLI (#27391, #27371), and Qwen Code (#4242) all have active issues or PRs addressing auto-compaction failures, context loss on resume, session context leaking into UI, or conversation state corruption. This suggests that as sessions grow longer and agent architectures become more complex, context management is the scaling bottleneck across implementations.

**2. Windows platform support is consistently incomplete.** Every tool except Kimi Code has at least one critical Windows bug in today's data. OpenAI Codex has the most (4 top-10 issues), but Claude Code (ARM64 Cowork), Copilot CLI (clipboard), Gemini CLI (symlink tests), Qwen Code (rendering), and OpenCode (Alpine Linux as a platform-specific issue) all show gaps. No tool appears to have achieved feature parity across operating systems.

**3. Tool-calling reliability and agent lifecycle bugs erode user trust in autonomous operation.** Claude Code (unparseable tool calls #62123, XML/JSON mixing #49747, sibling cascade failure #22264), Gemini CLI (agent hangs #21409, false success #22323, sub-agent activation without permission #22093), and Copilot CLI (context loss #3623) all describe workflows where the agent fails silently, reports success while failing, or requires manual intervention. These are not just annoyances — they undermine the core value proposition of autonomous coding tools.

**4. MCP infrastructure is fragile across tools, with security implications.** Multiple tools report MCP connection failures (OpenCode #30265, Qwen Code #4641), permission inheritance bugs (OpenCode PRs #30085/#30288), and security vulnerabilities (Gemini CLI PR #27377). The patchwork nature of MCP implementations — each tool has its own loading, permission, and telemetry approach — suggests the protocol itself is still maturing, and tool-specific bugs are the norm.

**5. Permission system reliability varies widely, with OpenCode showing the most friction.** While Claude Code is adding safety prompts and Gemini CLI fixes a vulnerability, OpenCode has three active issues reporting permissions not enforced (#16331, #8832, #27436) spanning months. The permission dialog UI (unresponsive buttons, #27436) is a critical UX failure that blocks all workflow progress. Other tools' permission pain points are more about granularity or confusion (Copilot CLI #3616, Qwen Code #4615) rather than outright functional failure.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-06-02

## Today's Update Brief

Anthropic shipped **v2.1.160** with safety prompts before modifying shell startup files and build-tool configs. The issue tracker remains very active (50 issues updated in 24h), with community frustration concentrated on **context‑management bugs** (default 1M context, missing compaction, thinking summaries) and **reliability problems** in tool calling (parse failures, sibling‑call cascades, image‑processing errors). A notable open PR proposes extending the stale‑issue timeout from 14 to 90 days.

## Releases

### [v2.1.160](https://github.com/anthropics/claude-code/releases/tag/v2.1.160)
- **New safety prompt** before writing to shell startup files (`.zshenv`, `.zlogin`, `.bash_login`) and `~/.config/git/` — addresses risk of unintended command execution.
- `acceptEdits` mode now prompts before writing build‑tool config files that grant code execution (e.g., `.npmrc`).

## Hot Issues (10 most active)

1. **[#40198](https://github.com/anthropics/claude-code/issues/40198) — Cowork VM fails on Windows ARM64 (Snapdragon)**
   **Workflow:** Starting a Cowork session on a Samsung Galaxy Book4 Edge.
   **Impact:** Complete failure to launch — affects all Windows ARM64 users of Cowork.
   **Reaction:** 53 comments, 7 👍; still open after 2 months.

2. **[#60334](https://github.com/anthropics/claude-code/issues/60334) — Image processing failures burn conversation tokens** (Closed)
   **Workflow:** Sessions where images are silently removed with `API Error: an image could not be processed`.
   **Impact:** 70% of a 5‑hour usage window wasted — free users hit cost limits.
   **Reaction:** 41 comments, 13 👍. Marked closed, but high engagement suggests lingering frustration.

3. **[#49268](https://github.com/anthropics/claude-code/issues/49268) — Thinking summaries missing on Opus 4.7**
   **Workflow:** Using Opus 4.7; the `display: "summarized"` flag is not sent by the harness.
   **Impact:** Users lose the ability to see condensed thinking traces.
   **Reaction:** 40 comments, 67 👍 — highest upvote count in this batch. Open since April.

4. **[#62063](https://github.com/anthropics/claude-code/issues/62063) — Fresh sessions default to 1M context on Pro plan**
   **Workflow:** Starting a new session on the Pro plan (which does not include 1M context credits).
   **Impact:** Users immediately hit usage‑credit errors (“Usage credits required for 1M context”).
   **Reaction:** 37 comments, 21 👍. Duplicates reported in #63060.

5. **[#62123](https://github.com/anthropics/claude-code/issues/62123) — Tool call parsing failures on Opus 4.7**
   **Workflow:** Claude stops processing with “Model’s tool call could not be parsed (retry also failed)”.
   **Impact:** Frequent interruptions — user reports multiple daily occurrences.
   **Reaction:** 36 comments, 56 👍. High severity open bug.

6. **[#22264](https://github.com/anthropics/claude-code/issues/22264) — Parallel tool call cascades fail when one call errors**
   **Workflow:** When Claude makes multiple tool calls in one message and one fails, all sibling calls are cancelled with “Sibling tool call errored”.
   **Impact:** Lost work, forced retries.
   **Reaction:** 31 comments, 61 👍. Long‑standing issue (since January).

7. **[#49747](https://github.com/anthropics/claude-code/issues/49747) — Opus 4.7 mixes legacy XML tool format into JSON calls**
   **Workflow:** Longer payloads cause the model to emit old‑style XML tool‑use inside expected JSON.
   **Impact:** Tool call parsing fails intermittently.
   **Reaction:** 19 comments, 13 👍. Regression from Opus 4.7 switch.

8. **[#36411](https://github.com/anthropics/claude-code/issues/36411) — Telegram MCP plugin inbound notifications never delivered**
   **Workflow:** Using Community‑run Telegram MCP server; outbound messages work, but inbound messages (claude/channel) are lost.
   **Impact:** Unusable for notification workflows.
   **Reaction:** 17 comments, 16 👍. No maintainer resolution visible.

9. **[#23620](https://github.com/anthropics/claude-code/issues/23620) — Agent team lost when lead’s context gets compacted**
   **Workflow:** Long session with multiple sub‑agents; context compaction removes agent team definitions.
   **Impact:** Entire agent team disappears mid‑session.
   **Reaction:** 16 comments, 10 👍. Open since February.

10. **[#63015](https://github.com/anthropics/claude-code/issues/63015) — Auto‑compact never triggers despite 100% context used**
    **Workflow:** Statusline shows “100% context used” but compaction never fires; session keeps growing.
    **Impact:** Users on Max subscription hit usage costs without automatic mitigation.
    **Reaction:** 13 comments, 12 👍. Regression in v2.1.153.

## Key PR Progress

All PRs updated in the last 24h (9 total). Below are the notable ones; the remainder are trivial or spam.

- **[#64607](https://github.com/anthropics/claude-code/pull/64607) — Fix `.mcp.json` docs example**
  Corrects plugin documentation that incorrectly wrapped server entries in `mcpServers` (a `plugin.json` concept) instead of using a flat format. Open, no comments.

- **[#63686](https://github.com/anthropics/claude-code/pull/63686) — Increase stale/autoclose timeout from 14→90 days**
  Addresses community complaints that issues are too aggressively closed. Changes the lifecycle script. Open, 1 day old.

- **[#63467](https://github.com/anthropics/claude-code/pull/63467) — Add Windows `gh` CLI install instructions**
  Documents `winget install --id GitHub.cli` in the `/commit-push-pr` troubleshooting section. Open.

- **[#63872](https://github.com/anthropics/claude-code/pull/63872) — Fix README capitalization and wording**
  Standardizes `macOS` and improves intro punctuation. Open.

Other PRs (#58673, #61478, #64489, #64603, #64602) appear to be test or spam submissions with minimal content.

## Feature Request Clusters

- **Rewind UX safety** — Multiple issues ([#27387](https://github.com/anthropics/claude-code/issues/27387), [#50897](https://github.com/anthropics/claude-code/issues/50897), [#64615](https://github.com/anthropics/claude-code/issues/64615)) request that `/rewind` (Esc Esc) not silently revert code+conversation without confirmation. Users want separate code/conversation rewind or an opt‑in destructive default.

- **Windows parity** — Requests for **Computer Use support on Windows** ([#64381](https://github.com/anthropics/claude-code/issues/64381)), **Auto mode in VS Code** ([#44941](https://github.com/anthropics/claude-code/issues/44941) — bug), and **Cowork VM fixes for ARM64** ([#40198](https://github.com/anthropics/claude-code/issues/40198)). Windows users feel feature‑incomplete compared to macOS/Linux.

- **Context size and cost management** — Several requests to **default to a smaller context** on Pro plans ([#62063](https://github.com/anthropics/claude-code/issues/62063)), to **fix missing auto‑compact** ([#63015](https://github.com/anthropics/claude-code/issues/63015)), and to **align context reporting between CLI and web UI** ([#64034](https://github.com/anthropics/claude-code/issues/64034)).

- **Better documentation for permissions and MCP** — Requests for **documenting built‑in allowlist bypasses** in WebFetch ([#64610](https://github.com/anthropics/claude-code/issues/64610)) and **clarifying `.mcp.json` vs `plugin.json` structure** (implicit in PR #64607).

## Developer Pain Points

- **Tool‑call unreliability** — Opus 4.7 produces unparseable tool calls ([#62123](https://github.com/anthropics/claude-code/issues/62123)) and mixes XML/JSON formats ([#49747](https://github.com/anthropics/claude-code/issues/49747)). Parallel calls cascade‑fail unnecessarily ([#22264](https://github.com/anthropics/claude-code/issues/22264)), wasting tokens and disrupting workflows.

- **Unexpected billing/usage** — Default 1M context on non‑Max plans ([#62063](https://github.com/anthropics/claude-code/issues/62063)), silent image‑processing failures that consume the usage window ([#60334](https://github.com/anthropics/claude-code/issues/60334)), and billing discrepancies between CLI and web UI ([#64034](https://github.com/anthropics/claude-code/issues/64034)) cause lost credits and user distrust.

- **Context and session management fragility** — Auto‑compaction doesn’t fire ([#63015](https://github.com/anthropics/claude-code/issues/63015)), agent teams are lost after compaction ([#23620](https://github.com/anthropics/claude-code/issues/23620)), and multiple sessions in the same repo can silently switch branches ([#60295](https://github.com/anthropics/claude-code/issues/60295)).

- **Destructive rewind by default** — Three separate issues highlight that the default rewind (Esc Esc) reverts both code and conversation without confirmation, leading to accidental data loss.

- **MCP/API edge cases** — OAuth consent loops with Entra ID ([#49722](https://github.com/anthropics/claude-code/issues/49722)), inbound Telegram notifications never delivered ([#36411](https://github.com/anthropics/claude-code/issues/36411)), false‑positive AUP blocks on legitimate research ([#50892](https://github.com/anthropics/claude-code/issues/50892)), and rate‑limiting spikes after usage‑window resets ([#53922](https://github.com/anthropics/claude-code/issues/53922)).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-02

## Today’s Update Brief
Activity remains high with one new TUI/CLI release (rust-v0.136.0), 50 open/updated issues and 50 pull requests in the last 24 hours. The community is reporting a cluster of Windows‑specific bugs (OAuth, notifications, sandbox failures) and persistent authentication friction across platforms. Maintainers are progressing on credential routing, permission profile improvements, and new MCP telemetry.

## Releases
**rust-v0.136.0** ([changelog](https://github.com/openai/codex/releases/tag/rust-v0.136.0))
- TUI markdown now preserves clickable web links via OSC 8 metadata.
- Cramped tables automatically switch to readable key/value records without losing hyperlinks.
- Sessions can be archived from the TUI (`/archive`) or CLI (`codex archive` / `codex u` – likely `codex unarchive`).

## Hot Issues
1. **#18341** – Mac app persistent blurred/translucent overlay below composer
   *Workflow:* Desktop usage; the overlay obscures content.
   *Impact:* 18 👍, 35 comments; affects Plus users on Darwin.
   [Issue](https://github.com/openai/codex/issues/18341)

2. **#20320** – ChatGPT phone OTP verification loops without sending code
   *Workflow:* Login / subscription upgrade.
   *Impact:* 7 👍, 28 comments; users are blocked from upgrading to Pro.
   [Issue](https://github.com/openai/codex/issues/20320)

3. **#18993** – VS Code extension cannot open past conversation history (regression)
   *Workflow:* IDE extension; accessing session history.
   *Impact:* 48 👍, 28 comments; widespread regression in 1.117.0.
   [Issue](https://github.com/openai/codex/issues/18993)

4. **#25203** – GitHub OAuth callback fails with “Unable to find Electron app” on Windows
   *Workflow:* Connecting GitHub from Codex Desktop.
   *Impact:* 14 👍, 28 comments; blocks integration setup.
   [Issue](https://github.com/openai/codex/issues/25203)

5. **#11014** – TUI scrolling broken over SSH with iOS client apps since 0.98.0
   *Workflow:* Remote TUI usage from mobile.
   *Impact:* 4 👍, 19 comments; long‑standing issue.
   [Issue](https://github.com/openai/codex/issues/11014)

6. **#25157** – Windows Desktop OAuth “Open in Codex” opens Electron error instead of completing callback
   *Workflow:* Connector OAuth flow.
   *Impact:* 15 👍, 17 comments; affects Pro users.
   [Issue](https://github.com/openai/codex/issues/25157)

7. **#15648** – GPT-5.3-Codex-Spark model not supported with ChatGPT account (closed, but still discussed)
   *Workflow:* CLI usage with specific model.
   *Impact:* 2 👍, 16 comments; model access restriction.
   [Issue](https://github.com/openai/codex/issues/15648)

8. **#25197** – Windows notification click opens invalid WindowsApps path
   *Workflow:* Clicking a turn‑complete notification.
   *Impact:* 8 👍, 9 comments; triggers Electron launch error.
   [Issue](https://github.com/openai/codex/issues/25197)

9. **#24638** – app-server local command execution lacks cwd‑scoped environment contract
   *Workflow:* TUI vs CLI session launches.
   *Impact:* 1 👍, 8 comments; silent environment differences.
   [Issue](https://github.com/openai/codex/issues/24638)

10. **#25391** – Windows Computer Use plugin cannot bootstrap (native pipe path unavailable)
    *Workflow:* Computer Use on Windows.
    *Impact:* 1 👍, 8 comments; blocks advanced automation.
    [Issue](https://github.com/openai/codex/issues/25391)

## Key PR Progress
1. **#25731** – Support v2 personal access tokens (`codex login --with-access-token`, `CODEX_ACCESS_TOKEN`)
   Adds PAT classification and metadata hydration via AuthAPI.
   [PR](https://github.com/openai/codex/pull/25731)

2. **#25156** – Route Bazel CI through shared BuildBuddy remote config wrapper
   Improves auditability and fork PR safety.
   [PR](https://github.com/openai/codex/pull/25156)

3. **#25746** – Add streamable HTTP MCP failure metric (`codex.mcp.streamable_http.post_message.failure`)
   Bounded labels for server_name and method.
   [PR](https://github.com/openai/codex/pull/25746)

4. **#25739** – Derive built‑in permission profiles from raw policies
   Fixes `:workspace` inheritance to behave like TOML parent/child merging.
   [PR](https://github.com/openai/codex/pull/25739)

5. **#25738** – Move code review rules into AGENTS.md
   Repository‑specific review guidance now lives next to the code.
   [PR](https://github.com/openai/codex/pull/25738)

6. **#25232** – Add regression test for rollback WebSocket continuation behavior
   Verifies connection reuse and request structure.
   [PR](https://github.com/openai/codex/pull/25232)

7. **#21609** – Bump `taiki-e/install-action` dependency (2.62.49 → 2.75.28)
   Routine dependency update.
   [PR](https://github.com/openai/codex/pull/21609)

8. **#25683** – Add comprehensive root formatting check (Justfile and Python)
   Ensures `just fmt` output matches CI check.
   [PR](https://github.com/openai/codex/pull/25683)

9. **#25732** – Dependency inject code mode session provider
   Replaces global provider with per‑thread selection, including Custom and Disabled.
   [PR](https://github.com/openai/codex/pull/25732)

10. **#15730** – Harden symlinked output and project config writes
    Rejects symlinked `--output-last-message` paths and protects `.codex/config.toml` as read‑only leaf.
    [PR](https://github.com/openai/codex/pull/15730)

## Feature Request Clusters
- **Broader model access across subscription tiers** – Several users request that models like GPT‑5.3‑Codex‑Spark be available with ChatGPT Plus (e.g., #14735, #15648).
- **Improved TUI rendering flexibility** – Requests for better handling of link metadata and table layouts were partially addressed in the latest release, but follow‑ups on scrolling (e.g., #11014) remain open.

## Developer Pain Points
- **Windows platform stability** – The highest concentration of issues today involves Windows: OAuth callbacks crashing Electron (#25203, #25157, #25734), notification clicks opening invalid paths (#25197), app failing to launch after clean install (#25489), and the Computer Use plugin failing to bootstrap (#25391). These block core workflows for Windows users.
- **Authentication friction** – Phone OTP loops (#20320), forced SMS step‑up on security‑key accounts (#25737), and model access restrictions tied to subscription level create persistent login and upgrade barriers.
- **Session history and state bugs** – VS Code extension cannot load past conversations (#18993), TUI session archiving is only now being added, and goal auto‑continuations can silently downgrade permissions (#24300).
- **MCP/hook infrastructure issues** – First‑turn delays waiting for MCP tools/list timeouts (#19556), duplicate MCP processes on Windows (#20867), and unreaped zombie children on macOS (#25744) degrade reliability in agent‑based workflows.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-02

## Today's Update Brief

Activity remains elevated with 50+ updated issues and PRs in the last 24 hours, primarily focused on agent reliability, session resume crashes, and memory system bugs. A single nightly release landed today, transitioning to the flash GA model behind a feature flag. Multiple long-standing agent hang and recovery issues continue to draw community attention.

## Releases

**v0.45.0-nightly.20260602.g665228e98** — [Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.45.0-nightly.20260602.g665228e98)

- Transition to flash GA model when experiment flag is present (PR [#27570](https://github.com/google-gemini/gemini-cli/pull/27570) by @DavidAPierce)

## Hot Issues

1. **#21409 — Generalist agent hangs** [priority/p1, kind/bug]
   - Agent hangs indefinitely when deferring to sub-agents; instructing the model not to delegate works around it. 8 👍 from the community. Likely related to sub-agent lifecycle bugs.
   - [Issue](https://github.com/google-gemini/gemini-cli/issues/21409)

2. **#25166 — Shell command gets stuck "Waiting input" after completion** [priority/p1, area/core]
   - Simple CLI commands appear to finish but remain shown as active, blocking further interaction. 3 👍. Affects core interactive workflow.
   - [Issue](https://github.com/google-gemini/gemini-cli/issues/25166)

3. **#22323 — Subagent recovery after MAX_TURNS falsely reports GOAL success** [priority/p1, kind/bug]
   - `codebase_investigator` reports `status: "success"` after hitting turn limits before any analysis. Masks real interruptions.
   - [Issue](https://github.com/google-gemini/gemini-cli/issues/22323)

4. **#21983 — Browser subagent fails on Wayland** [priority/p1, kind/bug]
   - Browser agent terminates with GOAL but does not produce useful output on Wayland displays.
   - [Issue](https://github.com/google-gemini/gemini-cli/issues/21983)

5. **#21968 — Gemini does not use skills and sub-agents enough** [priority/p2, kind/bug]
   - Model rarely invokes custom skills or sub-agents autonomously despite relevant descriptions; explicit instruction required.
   - [Issue](https://github.com/google-gemini/gemini-cli/issues/21968)

6. **#26405 — 403 PERMISSION_DENIED with OAuth Google One AI Pro** [status/need-triage]
   - OAuth login succeeds but all prompts fail with 403 on `cloudcode-pa.googleapis.com`. Affects Code Assist subscribers.
   - [Issue](https://github.com/google-gemini/gemini-cli/issues/26405)

7. **#26516 — Memory system bugs and quality improvements** [priority/p2, kind/bug]
   - Meta-tracking issue for multiple Auto Memory bugs: invalid patches, indefinite retries, and logging of secrets before redaction.
   - [Issue](https://github.com/google-gemini/gemini-cli/issues/26516)

8. **#22093 — Subagents running without permission since v0.33.0** [priority/p2, kind/bug]
   - Users with agents disabled report sub-agents (generalist) activating automatically after update. Raises trust/control concerns.
   - [Issue](https://github.com/google-gemini/gemini-cli/issues/22093)

9. **#22672 — Agent should stop/discourage destructive behavior** [priority/p2, kind/customer-issue]
   - Model uses `git reset`, `--force` commands when safer alternatives exist. Community wants guardrails for destructive operations.
   - [Issue](https://github.com/google-gemini/gemini-cli/issues/22672)

10. **#24246 — 400 error with >128 tools** [priority/p2, kind/bug]
    - Enabling many tools triggers API errors; model should prioritize relevant tools rather than sending all.
    - [Issue](https://github.com/google-gemini/gemini-cli/issues/24246)

## Key PR Progress

1. **#27365 — Add ephemeral session mode (`--ephemeral`)** [size/m, status/pr-nudge-sent]
   - New flag for headless/annotation use cases to avoid flooding session logs. Human-written description confirms real user need.
   - [PR](https://github.com/google-gemini/gemini-cli/pull/27365)

2. **#27369 — Fix `--resume` injecting session context into metadata** [priority/p1, area/agent]
   - Resolves chat sessions disappearing from Session Browser after resume. Addresses a critical UI regression.
   - [PR](https://github.com/google-gemini/gemini-cli/pull/27369)

3. **#27371 — Handle EBADF crash on session resume** [priority/p1, size/xs]
   - Catches stale PTY file descriptor error (`ioctl(2) failed, EBADF`) when resuming sessions.
   - [PR](https://github.com/google-gemini/gemini-cli/pull/27371)

4. **#27372 — Catch EBADF when resizing exited PTY** [priority/p1, area/core]
   - Companion fix to #27371: prevents crash when terminal resize fires after shell process exits but before cleanup.
   - [PR](https://github.com/google-gemini/gemini-cli/pull/27372)

5. **#27375 — Correctly identify Gemini 3 models with Vertex AI resource IDs** [priority/p1, area/agent]
   - Fixes tool access loss for Vertex AI users on Gemini 3.1 models due to regex anchor mismatch on resource path IDs.
   - [PR](https://github.com/google-gemini/gemini-cli/pull/27375)

6. **#27377 — Prevent blacklist bypass in MCP list** [size/l, status/need-issue]
   - Fixes RCE vulnerability where excluded/allowed MCP server blacklists could be bypassed by malicious workspace configs.
   - [PR](https://github.com/google-gemini/gemini-cli/pull/27377)

7. **#27383 — Prevent eager tool wipe on MCP network timeout** [size/s]
   - Atomic update for MCP tools: retains existing tools when `discoverTools` fails due to transient network drops.
   - [PR](https://github.com/google-gemini/gemini-cli/pull/27383)

8. **#27389 — Fix orphaned function response errors from routing pruning** [size/m]
   - Fixes 400 Bad Request when history pruning removes function call turns but leaves orphaned `functionResponse` turns.
   - [PR](https://github.com/google-gemini/gemini-cli/pull/27389)

9. **#27391 — Filter internal session context from history during resumption** [size/l]
   - Prevents `<session_context>` XML blocks from appearing as user messages in the TUI when resuming sessions.
   - [PR](https://github.com/google-gemini/gemini-cli/pull/27391)

10. **#27385 — Fix Node 20 compatibility and Windows symlink test failures** [size/s]
    - Fixes production crash under Node 20.x (`URL.parse` compatibility) and platform-specific test issues on Windows.
    - [PR](https://github.com/google-gemini/gemini-cli/issues/27385)

## Feature Request Clusters

- **AST-aware tools for codebase navigation**: Multiple issues (#22745, #22746, #22747) propose using AST-aware file reads, search, and codebase mapping to improve agent precision and reduce token waste. Maintainers are actively investigating using tools like AST grep.
- **Memory system reliability**: A series of issues from @SandyTao520 (#26522, #26523, #26525) request deterministic secret redaction, quarantine of invalid memory patches, and stopping indefinite retries on low-signal sessions. The memory system is under active refinement.
- **Agent self-awareness and configuration**: #21432 asks for the agent to accurately understand its own CLI flags, hotkeys, and capabilities so it can serve as its own expert guide. #22267 highlights that the Browser Agent ignores `settings.json` overrides for `maxTurns`.

## Developer Pain Points

1. **Agent hangs and false success signals**: Multiple high-priority bugs (#21409, #25166, #22323) where agents either hang indefinitely or report success while failing silently. This undermines trust in autonomous operation.
2. **Tool overloading and API errors**: #24246 shows that enabling 128+ tools triggers 400 errors. Developers need smarter tool selection rather than all-tools-at-once behavior.
3. **Unwanted sub-agent activation**: #22093 documents sub-agents activating even when disabled in config, eroding user control expectations.
4. **Destructive operation risk**: #22672 highlights concern that the model uses aggressive git/flags without understanding consequences, requesting safety guardrails.
5. **OAuth/permission friction**: #26405 shows login succeeding but all requests failing with 403, creating a confusing "successful login but broken" experience for Google One AI Pro subscribers.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-02

## Today’s Update Brief
Two patch releases landed in the last 24 hours (v1.0.57 and v1.0.57-5), addressing a rate‑limit error during `copilot update` and adding immediate feedback for plugin slash commands. Issue activity remains high (32 items updated), with a cluster of clipboard‑regression reports and several open bugs around context‑loss, bash‑tool shell compatibility, and model‑list parity with VS Code Copilot. PR activity is minimal: the only open pull request is a spam submission.

## Releases
- **[v1.0.57](https://github.com/github/copilot-cli/releases/tag/v1.0.57)** (2026-06-01)
  - Actionable error message when GitHub API rate limit is hit during `copilot update`.
  - Plugin slash commands (`/plugin install`, `uninstall`, `update`, `marketplace add/remove/browse`) now show immediate progress feedback.
  - Canceling a running shell command (Ctrl+C) handling improved.
- **[v1.0.57-5](https://github.com/github/copilot-cli/releases/tag/v1.0.57-5)** – “Fixes and changes” (no further details).

## Hot Issues
1. **[#1703](https://github.com/github/copilot-cli/issues/1703) – [OPEN] Copilot CLI does not list all org‑enabled models** (e.g., Gemini 3.1 Pro) while VS Code Copilot shows them. High community engagement (27 comments, 53 👍). Authors note models are enabled in org settings and available in VS Code.
2. **[#1632](https://github.com/github/copilot-cli/issues/1632) – [OPEN] Support subfolders for skills** – Users with many skills cannot organize them into subdirectories; flat folder structure is insufficient (7 comments, 14 👍).
3. **[#3028](https://github.com/github/copilot-cli/issues/3028) – [OPEN] MCP permissions** – Request for granular allow‑list of MCP tools (similar to VS Code’s trusted folders).
4. **[#3609](https://github.com/github/copilot-cli/issues/3609) – [OPEN] Cannot copy from console since v1.0.56** – “Copied to clipboard” message appears but clipboard is not updated. Regression introduced in the previous release.
5. **[#3601](https://github.com/github/copilot-cli/issues/3601) – [OPEN] Bash tool drops non‑ASCII characters** due to `LC_CTYPE="C"` env. Affects CJK paths and emoji.
6. **[#3623](https://github.com/github/copilot-cli/issues/3623) – [OPEN] Copilot CLI loses conversation context quickly when using Claude Sonnet 4.6** – After a few exchanges the model forgets earlier instructions.
7. **[#3621](https://github.com/github/copilot-cli/issues/3621) – [OPEN] Auto‑compaction loops infinitely when instruction files are large** – Large `copilot-instructions.md` files cause continuous memory wipe, breaking multi‑step tasks.
8. **[#3620](https://github.com/github/copilot-cli/issues/3620) – [OPEN] Ctrl‑c has too many overloads** – Users report unexpected actions (copy vs. cancel vs. empty prompt).
9. **[#3619](https://github.com/github/copilot-cli/issues/3619) – [OPEN] Bash tool exit‑code sentinel uses `$?` syntax, breaking fish shell** – fish uses `$status`; workaround needed.
10. **[#3616](https://github.com/github/copilot-cli/issues/3616) – [OPEN] Permission prompt incorrectly associates non‑git directory with CLI session’s git repo** – When editing files outside the current git repo, the “don’t ask again” prompt references the wrong repository.

## Key PR Progress
Only one open pull request was updated in the last 24 hours:
- **[#3473](https://github.com/github/copilot-cli/pull/3473) – [OPEN] Update project name in README** – Appears to be spam (contains a phishing link). No maintainer activity.

## Feature Request Clusters
- **MCP server management** – Multiple requests for better control: per‑server enable/disable ([#768](https://github.com/github/copilot-cli/issues/768)), granular tool permissions ([#3028](https://github.com/github/copilot-cli/issues/3028)), and consistent timeout handling ([#1378](https://github.com/github/copilot-cli/issues/1378)).
- **Session & resume improvements** – Users want natural‑language session lookup (`--resume "<query>"`, [#3615](https://github.com/github/copilot-cli/issues/3615)) and short‑hand `-r` for `--resume` ([#1914](https://github.com/github/copilot-cli/issues/1914) – closed but still requested).
- **Keyboard / UI customization** – Requests to reduce Ctrl‑C overload ([#3620](https://github.com/github/copilot-cli/issues/3620)), hide intermediate tool‑call output ([#3614](https://github.com/github/copilot-cli/issues/3614)), and round percentage displays accurately ([#1556](https://github.com/github/copilot-cli/issues/1556) – closed).
- **Bash tool compatibility** – Non‑ASCII character stripping ([#3601](https://github.com/github/copilot-cli/issues/3601)) and fish‑shell exit‑code parsing ([#3619](https://github.com/github/copilot-cli/issues/3619)).
- **Platform support** – `aarch64 Linux` binary installs but fails with “Exec format error” ([#2060](https://github.com/github/copilot-cli/issues/2060)).

## Developer Pain Points
- **Post‑update regressions** – Copy‑to‑clipboard (Windows + macOS) broke in v1.0.56, and users report being unable to reliably paste agent output.
- **Context volatility** – Large instruction files trigger infinite auto‑compaction loops, and Claude Sonnet 4.6 sessions lose memory prematurely.
- **Authentication resumption bugs** – Resuming a session sometimes results in “Not authenticated” when listing models, forcing a new session.
- **Model‑list inconsistency** – The CLI omits models that VS Code Copilot shows on the same account/org.
- **Cross‑platform shell friction** – Non‑bash shells (fish) and non‑UTF‑8 locales cause silent tool failures, making Copilot CLI unreliable for international users.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-02

## Today's Update Brief

Activity on the Kimi Code CLI repo was moderate today. No new releases were published, but a new enhancement issue surfaced requesting whitelist access for Zoo Code (the successor to Roo Code), and several long-standing pull requests received fresh updates. The community's attention remained on third-party API access policies, installation reliability, and session management fixes.

## Releases

No new releases in the last 24 hours.

## Hot Issues

**#2416 [OPEN] Add Zoo Code to the third-party coding agent API whitelist**
- **Author:** [@zimmshane](https://github.com/zimmshane) · **Created:** 2026-06-02 · **👍:** 0 · **Comments:** 0
- **Link:** https://github.com/MoonshotAI/kimi-cli/issues/2416
- **Summary:** Zoo Code, the active community successor to Roo Code, is currently rejected by the Kimi Code API with a `403` error. Roo Code itself has been whitelisted for some time and works correctly. This request asks for Zoo Code to be added to the API whitelist.
- **Impact:** Affects users migrating from Roo Code to its maintained fork, Zoo Code. Currently they cannot use their preferred coding agent with Kimi Code CLI.
- **Community reaction:** New issue with no engagement yet. Potentially contentious: if the whitelist approach continues, maintainers will need a policy for handling community forks and successor projects.

**#1914 [CLOSED] Installation fails in regions where GitHub is unreachable**
- **Author:** [@warku123](https://github.com/warku123) · **Created:** 2026-04-17 · **Updated:** 2026-06-01 · **Status:** Closed
- **Link:** https://github.com/MoonshotAI/kimi-cli/issues/1914
- **Summary:** The `uv` installer downloads release assets from GitHub Releases, which is unreachable in certain regions. This blocks installation entirely before the CLI can even run. Affected platforms include Windows, Linux, and macOS.
- **Impact:** High for users in network-restricted environments. Complete installation block.
- **Community reaction:** No additional comments on the issue thread, but the closure status suggests a fix or workaround has been merged.

## Key PR Progress

**#1741 [OPEN] feat: add /copy command for latest assistant response**
- **Author:** [@kyzhang-melo](https://github.com/kyzhang-melo) · **Created:** 2026-04-03 · **Updated:** 2026-06-01
- **Link:** https://github.com/MoonshotAI/kimi-cli/pull/1741
- **Summary:** Adds a shell-level `/copy` command that copies the latest assistant response from the active session to the system clipboard. Changes include a new `copy_text_to_clipboard()` utility in `src/kimi_cli/utils/clipboard.py`. Resolves #1725.
- **Status:** Open for 60 days; last updated yesterday.

**#2414 [OPEN] fix(auth): avoid persisting OAuth token before config validation**
- **Author:** [@SylvainM98](https://github.com/SylvainM98) · **Created:** 2026-06-01 · **Updated:** 2026-06-01
- **Link:** https://github.com/MoonshotAI/kimi-cli/pull/2414
- **Summary:** Validates the returned model list and default-model selection before writing OAuth credentials. Rolls back saved credentials if saving the updated config fails. Adds regression tests for `list_models` failures, empty model lists, config-save rollback, and the happy path.
- **Status:** Open, new PR. No comments yet.

**#2386 [OPEN] fix(session): map undo wire turns to context turns**
- **Author:** [@Pluviobyte](https://github.com/Pluviobyte) · **Created:** 2026-05-28 · **Updated:** 2026-06-01
- **Link:** https://github.com/MoonshotAI/kimi-cli/pull/2386
- **Summary:** Fixes a bug where `/undo` and fork operations relied on a `wire.jsonl` `TurnBegin` index, which only works when every wire turn also writes a real user message to `context.jsonl`. Local slash-command turns were not handled correctly. Resolves #1974, related to #2049.
- **Status:** Open, no comments yet.

**#2389 [CLOSED] fix(tools): include trailing output in error briefs and render brief as plain text**
- **Author:** [@liruifengv](https://github.com/liruifengv) · **Created:** 2026-05-28 · **Updated:** 2026-06-01 · **Status:** Merged
- **Link:** https://github.com/MoonshotAI/kimi-cli/pull/2389
- **Summary:** Improves error display when shell commands fail. Trailing output is now included in tool error briefs, and the brief is rendered as plain text rather than markup. Includes a Devin review badge.
- **Status:** Closed/merged.

## Feature Request Clusters

**Third-party API whitelist additions**: Issue #2416 requests adding Zoo Code (successor to Roo Code) to the allowed API whitelist. This is an isolated request today, but it raises a recurring pattern: as the ecosystem of coding agents forks and evolves, the whitelist model requires ongoing maintenance. No clear trend is established from a single issue, but maintainers may need to define a policy for handling community forks.

## Developer Pain Points

- **Network-restricted installation**: Issue #1914 (now closed) highlights that users in regions where GitHub is unreachable cannot install the CLI at all, due to the `uv` installer pulling assets from GitHub Releases. Although closed, this is a structural pain point that may resurface if alternative distribution channels are not established.
- **API access gates for third-party tools**: Issue #2416 shows that community tools relying on API whitelists face sudden breakage when forks or successors emerge. This creates operational friction for users who depend on specific coding agents.
- **Session state consistency**: PR #2386 addresses a subtle bug where `/undo` and fork operations relied on an incorrect turn-index mapping. This suggests that session/context state management remains a complex area where edge cases (like local slash commands not writing to `context.jsonl`) can cause silent data corruption.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-02

## Today's Update Brief
No new releases were published in the last 24 hours. Community activity was high with 50 issues and 50 PRs updated, reflecting ongoing focus on permission handling, MCP reliability, and provider compatibility. A major discussion around adjusting Go subscription usage limits after DeepSeek V4 Pro’s permanent price cut gained strong community support.

## Releases
No new releases in the last 24 hours.

## Hot Issues
*(10 noteworthy issues, ordered by comment count)*

1. **[#28846 – Adjust Go usage limits after DeepSeek V4 Pro permanent 75% price reduction](https://github.com/anomalyco/opencode/issues/28846)**
   *43 comments, 61 👍*
   Requests that OpenCode Go subscription tiers be rebalanced to reflect the new lower API pricing. Community strongly supports passing cost savings to users. Affects billing and plan configuration.

2. **[#16331 – Permissions ignored](https://github.com/anomalyco/opencode/issues/16331)**
   *40 comments*
   User reports that defined permission rules (e.g., deny `*.env`) are not enforced. This long-running issue continues to attract reports of security misconfigurations, especially in corporate environments.

3. **[#27589 – TUI fails on Alpine Linux (musl): `getcontext` symbol not found](https://github.com/anomalyco/opencode/issues/27589)**
   *24 comments, 12 👍*
   Regression in v1.14.50 breaks the TUI on musl-based Linux. Users on Alpine cannot start OpenCode. Reported working in v1.14.48.

4. **[#29786 – Opus 4.8 bug in dev branch](https://github.com/anomalyco/opencode/issues/29786)**
   *19 comments*
   Error message from sub-agent Opus 4.8 appears after building the dev branch. Indicates a regression or compatibility issue in the latest development code.

5. **[#17519 – Vertex AI Gemini – “must include at least one parts field” error](https://github.com/anomalyco/opencode/issues/17519)**
   *10 comments*
   Session crashes after extended use with Gemini Flash preview models via Vertex AI. Forking or creating new sessions also fails. Blocks users relying on Google’s Vertex offering.

6. **[#27436 – Permission required: cannot select Allow/Reject](https://github.com/anomalyco/opencode/issues/27436)**
   *9 comments, 5 👍*
   Permission dialog buttons become unresponsive. “Allow once” not clickable, “Allow always” loops, and “Reject” does not submit feedback. Session gets stuck – a critical UX bug.

7. **[#29992 – Auto-scroll stops working after manual scroll and return to bottom](https://github.com/anomalyco/opencode/issues/29992)**
   *8 comments, 12 👍*
   While assistant generates, manual scrolling up then back to bottom disables auto-scroll permanently. New content loads but viewport stays fixed. Affects all TUI users who review previous messages mid-generation.

8. **[#30265 – MCP Broken on v1.15.13](https://github.com/anomalyco/opencode/issues/30265)**
   *6 comments, 3 👍*
   MCP server list appears empty after updating to v1.15.13. Configuration unchanged – suggests a regression in the MCP loading pipeline. Multiple users confirming.

9. **[#22813 – Thinking block signature lost when model differs, breaking multi-turn with extended thinking](https://github.com/anomalyco/opencode/issues/22813)**
   *5 comments, 10 👍*
   Anthropic extended thinking sessions fail mid-conversation because the `thinking` or `redacted_thinking` blocks cannot be modified. Root cause in message parsing. Affects users of Claude with extended thinking.

10. **[#21020 – OpenAI Responses `store:false` can replay stale reasoning from older turns](https://github.com/anomalyco/opencode/issues/21020)**
    *5 comments, 1 👍*
    Multi-turn GPT-5 sessions with `store:false` may jump back to an older task instead of replying to the latest user message. Intermittent and hard to debug.

## Key PR Progress
*(10 significant PRs updated in the last 24h)*

1. **[#30312 – fix: export v2 stylesheets and declare core node types](https://github.com/anomalyco/opencode/pull/30312)** *(closed)*
   Fixes build resolution for v2 CSS imports and adds Node 24 SQLite type declarations. Enables the embedded web UI build.

2. **[#5020 – feat: add layout system for TUI](https://github.com/anomalyco/opencode/pull/5020)** *(closed)*
   Long-standing PR implementing a customizable layout system for the TUI, addressing accessibility and vertical space usage. Finally merged.

3. **[#29977 – fix(core): include git store hash in project ID to distinguish independent clones](https://github.com/anomalyco/opencode/pull/29977)** *(open)*
   Previously, clones of the same repo shared a project ID, causing merge into one project. Now includes a hash of the local store path so each clone is separate.

4. **[#30220 – fix(app): restore deferred MCP status updates](https://github.com/anomalyco/opencode/pull/30220)** *(closed)*
   MCP status popover was not updating when MCP was lazily enabled. Fix ensures deferred `useQueries()` results are read correctly.

5. **[#30309 – refactor(core): migrate accounts and load file agents](https://github.com/anomalyco/opencode/pull/30309)** *(open)*
   Moves account service, OAuth flow, and token refresh into `@opencode-ai/core/account`. Also loads Markdown-based agents from configured directories. Architectural cleanup.

6. **[#30287 – feat(core): add location-based permission service](https://github.com/anomalyco/opencode/pull/30287)** *(closed)*
   Implements `PermissionV2` with location-scoped actions, resources, and decisions. Replaces legacy permission storage with normalized project grants. Foundation for better permission management.

7. **[#30085 – fix(opencode): grant MCP tool permissions in subagent sessions](https://github.com/anomalyco/opencode/pull/30085)** *(closed)*
   Subagents spawned by the Task tool can now execute MCP tools. Previously permission checks failed despite tools being registered.

8. **[#30288 – fix(opencode): inherit MCP tool allow permissions in subagent sessions](https://github.com/anomalyco/opencode/pull/30288)** *(open)*
   Complementary fix to ensure subagents inherit parent session’s MCP allow permissions, not just registration. Closes #16491 and #3808.

9. **[#30300 – fix(tui): preserve live parts during session hydration](https://github.com/anomalyco/opencode/pull/30300)** *(closed)*
   Prevents live assistant messages from being overwritten by stale HTTP snapshot data during TUI session load. Includes regression test.

10. **[#30201 – feat(minimax): add MiniMax-M3 model](https://github.com/anomalyco/opencode/pull/30201)** *(closed)*
    Adds the new MiniMax-M3 model to the Minimax provider, with updated configurations. Tested and ready for use.

## Feature Request Clusters
*Grouped recurring feature requests from issues, without predicting roadmap.*

- **Usage limit and pricing adjustments**
  Multiple requests to adjust OpenCode Go subscription tiers in response to provider price drops (e.g., DeepSeek V4 Pro, #28846). Users want dynamic limits or cost-pass-through.

- **Git submodule support in desktop/TUI**
  #7769 and related requests ask for proper handling of Git submodules in session management and file tree.

- **Provider model access and customization**
  Requests for new model support (Minimax M2.5 via coding plan, #13362), exposing `prompt_cache_ttl` for OpenRouter (#16848), and loading approved models from Requesty (#16344).

- **Permissions and security configuration**
  Ongoing requests for more granular permission control, such as location-based permissions (already addressed by PR #30287) and better UI for permission dialogs.

- **Session management improvements**
  Requests to resume sessions from their stored working directory (#28581) and to aggregate status across child project directories (#30094, PR #30155).

## Developer Pain Points
*Recurring frustrations and high-frequency requests observed in today’s data.*

- **Permission system unreliability** – Issues #16331, #8832, #27436 all describe permissions not being respected or dialogs stuck. This is the most frequently reported functional bug, affecting both security and usability.

- **MCP loading and configuration issues** – After v1.15.13, multiple users report MCP servers disappearing in the desktop app (#30265, #30299, #30130). The same config works in CLI, pointing to a race condition or UI rendering bug.

- **TUI crashes and visual regressions** – Alpine compatibility (#27589), terminal crash (#25940), auto-scroll breakage (#29992), and model selection overwrite (#13456) indicate ongoing TUI stability issues.

- **Billing sync and subscription activation** – Paid Go subscriptions not activating in workspace (#29677) and significant lag in billing updates (#14848) frustrate paying users.

- **High resource usage** – Report of 100% CPU and 2.5GB memory on macOS ARM64 (#30126) suggests a performance regression or memory leak in recent versions.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

好的，作为专注于AI开发者工具的技术分析师，以下是根据提供的GitHub数据生成的《Qwen Code社区摘要》（2026年6月2日）。

---

# Qwen Code社区摘要 - 2026年6月2日

## 今日更新概要

今日Qwen Code项目发布了`v0.17.0-nightly`版本，社区围绕本地LLM集成、性能稳定性以及沙箱/SDK新功能展开了密集讨论。Issue和PR活动均处于高位，共有22个Issue更新、50个PR更新，体现了社区在版本更新前后的活跃反馈和开发贡献。

## 版本发布

*   **`v0.17.0-nightly.20260602.cea15a118`**: 今日发布的最新nightly版本。该版本基于`release/v0.17.0-nightly`分支构建，解决了某些情况下出现的“compressed turn”错误。此版本主要面向测试者，V0.17.0的正式稳定版预计将在近期发布。

## 热门议题(hot Issues)

1.  **无法添加OpenAI兼容的本地LLM** ([#3384](https://github.com/QwenLM/qwen-code/issues/3384))
    *   **影响流程**: 用户配置本地模型（如Qwen3.6-35B-A3B通过VLLM运行）时的初始设置流程。
    *   **影响**: 尽管按照官方文档配置`settings.json`，用户仍无法成功连接本地模型。这是一个长期存在的配置障碍，自4月17日起已收到11条评论。
    *   **社区反应**: 1个👍，表明该问题影响了部分寻求本地化部署的用户。

2.  **请求: MiniMax-M3模型选择与UI改进** ([#4663](https://github.com/QwenLM/qwen-code/issues/4663))
    *   **影响流程**: 用户设置MiniMax API密钥的引导流程（Step 3/3）。
    *   **影响**: 建议将MiniMax-M3模型ID添加为可选选项，并将当前“逗号分隔的自由文本输入”替换为“复选框/多选UI”。
    *   **社区反应**: 8条评论，0个👍，是一个具体的UI/UX增强请求。

3.  **v0.17.0版本配合Ollama/Qwen 3.6模型无法完成任务** ([#4657](https://github.com/QwenLM/qwen-code/issues/4657))
    *   **影响流程**: 通过“创建任务”功能生成长内容（如HTML电子书）的代理工作流。
    *   **影响**: 用户报告在新版本中，原先能完成的任务（如生成电子书并放置到桌面）现在无法完成。这可能是新版本引入的回归问题。
    *   **社区反应**: 6条评论，0个👍。

4.  **状态栏ANSI颜色丢失与重复上下文指示器** ([#4669](https://github.com/QwenLM/qwen-code/issues/4669))
    *   **影响流程**: CLI的状态行显示，特别是自定义命令输出。
    *   **影响**: 请求添加`respectUserColors`和`hideContextIndicator`配置选项，以解决个性化设置和显示冗余问题。
    *   **社区反应**: 已关闭，5条评论，欢迎PR。表明问题已被识别并有明确解决方向。

5.  **API错误: Body Timeout** ([#4604](https://github.com/QwenLM/qwen-code/issues/4604))
    *   **影响流程**: 处理网页等长流程任务时的API调用。
    *   **影响**: 处理网页时出现`terminated (cause: Body Timeout Error)`错误，导致任务中断。这是一个关键的性能阻塞问题。
    *   **社区反应**: 5条评论，0个👍。

6.  **UI Bug导致Token消耗翻倍** ([#4420](https://github.com/QwenLM/qwen-code/issues/4420))
    *   **影响流程**: 在Windows 11 + Git Bash环境下使用CLI的UI。
    *   **影响**: 从v0.15.11升级到v0.16.0后，CLI界面渲染出现乱码。用户报告这导致Token消耗翻倍，影响成本。
    *   **社区反应**: 5条评论，0个👍。这是一个严重的跨平台UI回归问题。

7.  **SDK功能请求: 支持无需合成提示词的恢复(Resume)功能** ([#4679](https://github.com/QwenLM/qwen-code/issues/4679))
    *   **影响流程**: 通过SDK进行程序化会话管理。
    *   **影响**: 请求SDK提供“一等公民”的API，允许开发者在会话未正常结束时恢复上一轮对话，而无需手动发送“继续”等合成提示词。
    *   **社区反应**: 2条评论，0个👍。体现了对更精细SDK控制的需求。

8.  **请求: 项目级.mcp.json支持与待审批语义** ([#4615](https://github.com/QwenLM/qwen-code/issues/4615))
    *   **影响流程**: MCP服务器的安全配置与启动流程。
    *   **影响**: 建议添加项目级`.mcp.json`支持，并在服务器启动/连接前引入明确的“待审批”状态，以增强安全性。
    *   **社区反应**: 2条评论，0个👍。

9.  **Auto模式分类器超时** ([#4676](https://github.com/QwenLM/qwen-code/issues/4676))
    *   **影响流程**: AUTO审批模式下的两阶段LLM分类器。
    *   **影响**: 分类器在超时时会“关闭失败”（fail closed），阻止所有操作，导致用户工作流中断。请求放宽阶段超时并在所有阶段禁用“thinking”模式。
    *   **社区反应**: 1条评论，1个👍。直接影响AI自动化工作流的可靠性。

10. **Vim模式Esc按键泄露/模式指示器渲染延迟** ([#4675](https://github.com/QwenLM/qwen-code/issues/4675))
    *   **影响流程**: CLI的Vim模式交互。
    *   **影响**: 多个Vim模式问题：Esc键错误地触发了全局处理程序（导致“再次按下Esc清除”提示）；普通模式下按Enter键无法正常提交；模式指示器存在渲染延迟。
    *   **社区反应**: 1条评论，0个👍。对使用Vim模式的核心用户影响较大。

## 关键PR进展

1.  **[WIP] 修复重做(rewind)在压缩后的映射问题** ([#4242](https://github.com/QwenLM/qwen-code/pull/4242))
    *   **描述**: 修复对话压缩后，`rewind`目标无法正确映射的问题，包括ACP模型轮次、历史快照等。这是对核心对话管理的重要修复。

2.  **[OPEN] 独立安装程序的自动更新支持** ([#4629](https://github.com/QwenLM/qwen-code/pull/4629))
    *   **描述**: 为非npm的独立安装用户添加自更新能力，包括下载、校验SHA256和原子替换。这将显著改善Windows等其他平台用户的升级体验。

3.  **[OPEN] 添加CPU性能分析(Profiling)支持** ([#4620](https://github.com/QwenLM/qwen-code/pull/4620))
    *   **描述**: 添加`cpuProfiler`模块，支持通过环境变量或信号触发，生成可在Chrome DevTools中加载的`.cpuprofile`文件。便于开发者进行性能调优。

4.  **[OPEN] 修复Vim模式Esc泄露、Enter提交和渲染延迟** ([#4677](https://github.com/QwenLM/qwen-code/pull/4677))
    *   **描述**: 专门解决Issue #4675中报告的三个Vim模式问题，并实现了缺失的普通模式命令。这是对Vim用户痛点的直接响应。

5.  **[OPEN] 修复ask_user_question工具的模式验证** ([#4681](https://github.com/QwenLM/qwen-code/pull/4681))
    *   **描述**: 为`ask_user_question`工具的JSON Schema中的`header`属性添加`minLength`和`maxLength`限制，防止LLM生成超长header后再调用工具，减少Token浪费。

6.  **[OPEN] 为本地模型添加可配置的bodyTimeout** ([#4667](https://github.com/QwenLM/qwen-code/pull/4667))
    *   **描述**: 新增`generationConfig.bodyTimeout`字段（默认0=禁用），用于控制SSE流式响应的空闲超时。直接解决#4604中报告的本地模型流式传输超时问题。

7.  **[OPEN] 修复Daemon模式下并行子代理(subAgent)文本交错** ([#4687](https://github.com/QwenLM/qwen-code/pull/4687))
    *   **描述**: 修复Daemon模式下，/review等技能派发多个并行子代理时，不同子代理的文本块会交错合并到同一个转录(transcript)块中的“串台”问题。

8.  **[CLOSED] 扩展Daemon遥测路由覆盖** ([#4682](https://github.com/QwenLM/qwen-code/pull/4682))
    *   **描述**: 扩展所有Daemon写路由的遥测跨度(span)覆盖，并修复尾部斜杠不匹配的问题。此PR已经合并。

9.  **[OPEN] 收紧Auto模式自修改检查** ([#4572](https://github.com/QwenLM/qwen-code/pull/4572))
    *   **描述**: 强化Auto模式，确保对Qwen Code配置、指令、钩子、命令、技能等持久化内容的写入无法绕过分类器的安全审查。这是一个重要的安全增强PR。

10. **[OPEN] 修复GVFS (Git虚拟文件系统)支持** ([#4519](https://github.com/QwenLM/qwen-code/pull/4519))
    *   **描述**: 修复在GVFS等场景下，侧查询未能正确遵循用户配置的输出语言的问题，同时避免指令重复。这改善了大型仓库的使用体验。

## 功能请求集群

*   **MCP稳定性与安全**：多个Issue关注MCP服务器的可靠性。用户报告MCP连接在会话间不稳定，每次可用的服务器数量不一（#4641）。同时，社区请求增加项目级`.mcp.json`配置和待审批安全机制（#4615），表明对MCP功能有强烈需求，但亟需提升稳定性和安全性。

*   **UI/显示优化**：TUI界面的改进呼声很高，包括状态栏ANSI颜色支持（#4669）、Windows平台渲染乱码（#4420）、Vim模式按键冲突（#4675），以及一个全面的“TUI显示优化Epic”（#4588）。这些问题共同指向CLI的用户体验需要系统性打磨。

*   **会话管理与恢复机制**：用户对会话的健壮性提出更高要求。除了常规的断点续传（#4624），社区还请求SDK提供更强大的“恢复上轮对话”API（#4679），以及解决对话压缩后`rewind`功能错误的问题（#4242）。

## 开发者痛点总结

*   **与本地/非官方模型的兼容性与稳定性**：这是最突出的痛点。从“无法添加OpenAI兼容LLM”（#3384）到“新版本无法完成任务”（#4657），再到“API Body Timeout”（#4604）和“Auto模式分类器超时”（#4676），开发者在使用Qwen Code驱动本地或第三方模型时，频繁遭遇配置障碍和运行时错误。
*   **性能与资源消耗**：高内存占用（#4624）和Token浪费（#4420）是核心性能问题。这导致开发者担心成本和资源稳定性，尤其是在长时间或复杂的任务场景下。
*   **MCP（模型上下文协议）连接不可靠**：在Windows环境中，MCP连接高度不稳定（#4641），这会严重破坏依赖于外部工具链的复杂工作流，是影响开发效率的关键瓶颈。
*   **自动编辑与YOLO模式下的文件更新问题**：有报告指出，在自动接受编辑和YOLO模式下，由于读取错误，文件未能及时更新，必须再次下达指令才能生效（#4672）。这直接影响了代码生成工具的“信任度”和编辑效率。
*   **定价模型反馈**：用户反馈官方Qwen3.7-Max API套餐消耗过快，价格过高（#4614），虽然不直接是产品技术问题，但间接影响了用户的使用意愿和付费模式选择。
*   **跨平台UI问题**：特别是在Windows平台，CLI的UI渲染乱码是一个长期存在且影响广泛的痛点（#4420），对于非Linux/macOS用户构成了主要的使用障碍。

</details>