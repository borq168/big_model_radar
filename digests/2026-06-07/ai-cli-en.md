# AI CLI Tools Community Digest 2026-06-07

> Generated: 2026-06-07 02:42 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Tool Comparison Report — 2026-06-07

## 1. Daily Cross-Tool Overview

Activity levels were mixed: Claude Code, OpenAI Codex, Gemini CLI, OpenCode, and Qwen Code all show 30+ issues updated in the last 24 hours, while GitHub Copilot and Kimi Code show lower activity (17 issues and 0 updates, respectively). Critical regressions were reported across multiple tools — a WSL2 high-CPU freeze in GitHub Copilot, an OOM crash with `--resume` in Qwen Code, and continued thinking-display regressions in Claude Code. Maintainer response was strongest for Qwen Code, where a fix PR for the OOM issue was opened the same day the bug was reported. No tool released a major version today; patches were limited to Claude Code (v2.1.168), OpenAI Codex (alpha), and Qwen Code (nightly).

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Releases Today | Maintainer Response Signal |
|---|---|---|---|---|
| Claude Code | ~10 hot issues (moderate tracker activity) | 5 | v2.1.168 (bug fixes) | Moderate — merged two PRs, several open |
| OpenAI Codex | 50 issues updated | 34 | rust-v0.138.0-alpha.6 | High — 20 PRs listed, many with active work |
| Gemini CLI | 30 issues updated | 16 | None | Moderate — 10 PRs, focus on security and bug fixes |
| GitHub Copilot | 17 issues updated | 0 | None | Low — no PRs updated, two MCP bugs closed |
| Kimi Code | 0 issues updated | 2 (both existing, updated) | None | Very low — no new issues |
| OpenCode | 50 issues updated | 50 | None | High — major refactoring PRs from contributors |
| Qwen Code | 29 open issues | 33 | v0.17.1-nightly patch | High — OOM fix PR opened same day as report |

## 3. Shared Feature Directions

**MCP integration and security (Claude Code, OpenAI Codex, GitHub Copilot, Qwen Code)**
- Per-tool permission controls: Copilot (#3028), Claude Code (PR #65916), Qwen Code (PR #4713 approval gating)
- OAuth credential handling: Codex (#26713 fixing expired credential status), Claude Code (PR #65875 proxy forwarding)
- MCP namespace flattening for non-OpenAI models: Codex (#26234), similar concerns in Qwen Code self-hosted tool param coercion (#4793)

**Session and memory management (Claude Code, Gemini CLI, Qwen Code, OpenCode)**
- Cross-project/user-level auto-memory: Qwen Code (#4764 PR — `~/.qwen/memories/`), Claude Code (#48465 — MCP memory backend)
- Subagent/task orchestration: Claude Code (#56913 tiered agent proposal), Qwen Code (#4821 declarative agent files), OpenCode (#31173 V2 background task tool), Gemini CLI (#22323 subagent recovery)
- Memory compaction under cost/size constraints: Claude Code (#42647 token burn), Qwen Code (#4824 OOM compaction)

**Terminal and UI reliability (GitHub Copilot, OpenCode, Qwen Code, Claude Code)**
- WSL2 regressions: Copilot (#3700 215% CPU freeze), Qwen Code (#4725 scroll in tmux+Cursor)
- Windows terminal crashes on exit: OpenCode (#27749, #28673)
- Vim mode/Esc key conflicts: Qwen Code (#4675)
- Display regressions from model changes: Claude Code (#49268, #49322 thinking display)

**Model flexibility and provider configuration (GitHub Copilot, Qwen Code, Claude Code, OpenCode)**
- Multiple BYOK/model switching: Copilot (#3282), Qwen Code (#4640 smart routing proposal)
- Custom provider UX: Qwen Code (#4814), OpenCode (#31147 Bedrock regression)
- Self-hosted model compatibility: Qwen Code (#4793 tool param coercion), Codex (#26234 MCP flattening for non-OpenAI)

**Agent scope and control (Claude Code, GitHub Copilot, Gemini CLI, OpenCode)**
- Agent sandboxing: OpenCode (#2242 directory restriction), Claude Code (#56913 tiered orchestration)
- Autopilot scope creep: Copilot (#3655 unrequested actions), Gemini CLI (#22323 false success reports)
- Command injection hardening: Gemini CLI (#27575 safe spawnSync), multiple tool security fixes

## 4. Differentiation Analysis

**Claude Code** continues to differentiate on **agent orchestration depth** — the tiered Opus/Sonnet proposal (#56913), subagent path resolution fixes (PR #65919), and thinking display control (issues #49268, #49322) all reflect a user base pushing the tool toward complex, multi-model workflows. No other tool has comparable discussion volume around model-tier orchestration.

**OpenAI Codex** is investing in **TUI customization and MCP third-party compatibility**. The customizable status line request (#17827, 59 👍) and the MCP namespace flattening (#26234) both point to a user base that wants deeper integration with non-OpenAI ecosystems. Infrastructure PRs (typed path URIs #26840, global instruction lifecycle #26834) suggest a platform-engineering focus.

**Gemini CLI** is the most active on **evaluation infrastructure and security hardening**. EPICs for component-level evals (#24353) and AST-aware file mapping (#22745) are unique — no other tool has comparable eval infrastructure discussion. Multiple PRs addressing command injection (#27575) and shell injection vectors (#27552) indicate active security posture work.

**GitHub Copilot** shows the most **WSL and Windows platform friction** — two separate WSL issues (#3700 high CPU, #3652 startup delays) dominate today's activity. No other tool has as concentrated platform regression reporting. MCP permission controls (#3028) are also unique in requesting granular per-server tool allow/deny lists.

**Qwen Code** is the furthest along on **daemon mode and ACP protocol development** — 4 PRs today advancing WebSocket transport, REST parity, and directory management in server mode. No other tool has a comparable daemon-mode feature track. The OOM compaction PR (#4824) using memory-pressure-aware history compaction is also technically distinct from other tools' compaction fixes.

**OpenCode** is undergoing a **core architecture refactoring** driven by contributor @kitlangton — 5 PRs in the last 24 hours isolating provider turn logic, adding background task tooling, and hardening the unified tool runtime. This level of contributor-led core restructuring is unique among the tracked tools today.

**Kimi Code** shows minimal community activity — two existing PRs received updates but no new issues or releases. This may reflect a smaller user base or a slower development cycle.

## 5. Community Activity Notes

**Most active by issue/PR count:** OpenAI Codex (50 issues, 34 PRs), OpenCode (50 issues, 50 PRs), and Qwen Code (29 issues, 33 PRs) show the highest raw update volume. Claude Code and Gemini CLI are moderately active.

**Most active maintainer response:** Qwen Code opened a fix PR for the critical OOM regression (#4815→#4824) on the same day. OpenCode has substantial contributor-driven refactoring activity from @kitlangton. OpenAI Codex has 20 PRs progressing across infrastructure and features.

**Least active:** Kimi Code (0 issues updated, 2 existing PRs touched). GitHub Copilot (17 issues, 0 PRs) has activity but no maintainer code changes visible today.

**Highest-engagement single issue:** Claude Code #62123 (tool call parsing failure, 48 comments, 97 👍) — the highest reaction count across all tools today. GitHub Copilot #1128 (awaitingUserInput hook, 27 👍) and OpenCode #2242 (agent sandboxing, 51 👍) also show strong community demand.

## 6. Evidence-Backed Observations

1. **Critical regressions in core functionality are the dominant signal today.** Three tools have high-priority bugs that break basic workflows: GitHub Copilot's WSL2 215% CPU freeze (#3700), Qwen Code's OOM with --resume (#4815), and Claude Code's thinking display regression (#49268, #49322). These are not edge cases — they affect startup, session restoration, and model output rendering respectively. Maintainer response is mixed: Qwen Code fast-tracked a fix, Claude Code's issues remain open with root cause identified but no fix, Copilot's issue has low community reaction.

2. **MCP integration and security is a cross-tool concern, not a single-vendor initiative.** Today's data shows four tools (Claude Code, Codex, Copilot, Qwen Code) with active MCP-related discussions: permission scoping, credential handling, tool namespace compatibility, and session-header persistence. The issues are implementation-detail-level (e.g., flattening namespaces for non-OpenAI models, preserving baseUrl on auth refresh), suggesting MCP is becoming a practical integration surface rather than just a specification.

3. **Terminal and platform stability remains a pain point across all major tools.** WSL2 regressions (Copilot), Windows terminal crashes (OpenCode), SMB path corruption (Qwen Code), tmux scroll issues (Qwen Code), and terminal reset problems (OpenCode) appear across 4 of 6 active tools. None of these are new — they represent ongoing platform-specific quality gaps rather than emerging issues.

4. **Memory and session management improvements are being actively engineered, not just requested.** Qwen Code has a live PR for memory-pressure-aware compaction (#4824). Claude Code has a proposal for tiered agent state persistence (#56913). OpenCode added V2 background task tooling (#31173). These are concrete code changes, not just feature requests. The pattern suggests tools are moving beyond basic conversation history toward structured, persistent agent state.

5. **Daemon/agent mode and ACP protocols are emerging as a distinct architecture direction, but only Qwen Code is investing heavily.** While Claude Code has a proposal (#56913) and OpenCode added background task tooling (#31173), Qwen Code's daemon mode PR (#4490) is the only substantial implementation effort visible today — 46 commits across 386 files for ACP dispatch, workspace CRUD, WebSocket transport, and auth. No other tool shows comparable server-mode development. This may reflect differing product strategies (local-first CLI vs. daemon-based architecture) rather than technical feasibility.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest – 2026-06-07

## Today’s Update Brief
Anthropic released **v2.1.168** with bug fixes and reliability improvements. The issue tracker saw moderate activity, including a wave of fresh reports around session corruption when slash commands interrupt advisor tool calls, persistent monitor task reaping, and synthetic assistant turns in VS Code. Community discussion remains concentrated on Opus 4.7/4.8 thinking display regressions (two long-running threads at 44 comments each) and a widely-upvoted tool call parsing failure on macOS (48 comments, 97 👍).

---

## Releases
**v2.1.168** – Bug fixes and reliability improvements.
No further detail provided.
[Full release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.168)

---

## Hot Issues (10 selected)

1. **[Bug] Model's tool call could not be parsed (retry also failed)**
   `[bug, platform:macos, area:model, platform:vscode]`
   User reports frequent stalls when Opus 4.7 generates an unparseable tool call. 48 comments, 97 👍.
   [#62123](https://github.com/anthropics/claude-code/issues/62123)

2. **[BUG] Opus 4.7 thinking summaries not rendered in VS Code extension**
   `[bug, platform:macos, platform:vscode]`
   Thinking blocks from Opus 4.7 are displayed as raw content instead of collapsed summaries. 44 comments, 39 👍.
   [#49322](https://github.com/anthropics/claude-code/issues/49322)

3. **[Bug] Thinking summaries missing on Opus 4.7 – harness doesn't set display: "summarized"**
   `[bug, has repro, platform:macos, area:core]`
   Root cause: Opus 4.7 changed the default `display` field to something other than `"summarized"`. 44 comments, 70 👍.
   [#49268](https://github.com/anthropics/claude-code/issues/49268)

4. **[BUG] GitHub Issue Prompt Too Long**
   `[bug, has repro, platform:windows, area:core, area:ide, memory]`
   When using Claude Code to process a GitHub issue as context, the prompt exceeds token limits. 42 comments, 34 👍.
   [#23377](https://github.com/anthropics/claude-code/issues/23377)

5. **[Enhancement] Make autonomous Claude Code actually viable: tiered Opus brains + Sonnet workers + persistent state**
   `[enhancement, area:agents]`
   Detailed proposal for long-running agent orchestration with different model tiers. 26 comments.
   [#56913](https://github.com/anthropics/claude-code/issues/56913)

6. **[BUG] Opus 4.8 returns empty thinking blocks**
   `[bug, has repro, platform:windows, area:model, area:core]`
   Regression: Opus 4.8 produces `thinking` blocks with empty content. 10 comments, 10 👍.
   [#63358](https://github.com/anthropics/claude-code/issues/63358)

7. **[Bug] Remote control session fails to resync after connection drop**
   `[bug, platform:macos, platform:ios, area:claude-code-web, area:networking]`
   iOS ↔ macOS session silently loses sync; messages fail, no error indication. 17 comments, 50 👍.
   [#28571](https://github.com/anthropics/claude-code/issues/28571)

8. **[Bug] High Token Burn Due to Redundant Context Resubmission & Compaction Loops**
   `[bug, platform:macos, area:cost, area:core]`
   Frequent compaction cycles waste tokens; user estimates 2-3× cost increase. 6 comments.
   [#42647](https://github.com/anthropics/claude-code/issues/42647)

9. **[Bug] Slash command (/usage) during in-flight advisor() call splits assistant message in JSONL**
   `[bug, has repro, platform:windows, area:core]`
   `/usage` while advisor tool is in flight corrupts session JSONL, making it permanently unrecoverable. 6 comments.
   [#63375](https://github.com/anthropics/claude-code/issues/63375)

10. **[Bug] Claude passes `rg -rn` which ripgrep interprets as `--replace=n`, corrupting search output**
    `[bug, has repro, area:model, area:bash]`
    Model’s muscle memory for `rg -rn` (intended as recursive + line numbers) silently corrupts stdout. 2 comments, 8 👍.
    [#62016](https://github.com/anthropics/claude-code/issues/62016)

---

## Key PR Progress (all 5 PRs updated in the last 24h)

1. **docs(agent-development): document ${CLAUDE_PLUGIN_ROOT} limitation in subagents**
   Subagents receive `CLAUDE_PLUGIN_ROOT` and `CLAUDE_PROJECT_DIR` as literal strings instead of resolved paths (issue #65768). Adds a “Known Limitations” section to SKILL.md.
   [#65919](https://github.com/anthropics/claude-code/pull/65919) – Open

2. **docs(mcp-integration): clarify allowed-tools vs agent tools enforcement**
   Explains that `allowed-tools` in commands is an auto-approval mechanism only (unlisted tools still callable with prompt), while `tools:` in subagent frontmatter is a hard restriction.
   [#65916](https://github.com/anthropics/claude-code/pull/65916) – Open

3. **Fix dev container issues**
   Removes DNS-routing domains that fail in firewalled environments and adds env passthrough for API keys.
   [#65666](https://github.com/anthropics/claude-code/pull/65666) – Closed (merged)

4. **fix: Forward ANTHROPIC_BASE_URL to agentic_review child process**
   When using proxy/gateway endpoints with OAuth (LiteLLM, Bifrost), the advisor feature was spawning child processes that defaulted to `api.anthropic.com`. This PR forwards the env var.
   [#65875](https://github.com/anthropics/claude-code/pull/65875) – Open

5. **Use workload identity federation for Claude auth in CI workflows**
   Switches CI from static `ANTHROPIC_API_KEY` to OIDC token exchange via Workload Identity Federation for short-lived credentials.
   [#61584](https://github.com/anthropics/claude-code/pull/61584) – Closed (merged)

---

## Feature Request Clusters

- **Autonomous / long-running agent orchestration**: Several requests propose tiered model use (Opus for planning, Sonnet for execution) and persistent state for pipelines. (#56913, #65968)
- **UI localization / internationalization**: Request for UI language localization support. (#31413)
- **Model and thinking mode indicators in VS Code**: Users want to see current model name and thinking mode in the extension panel. (#28986)
- **MCP server integration as memory backend**: Allow replacing the built-in auto-memory system with an MCP server. (#48465)
- **LSP enhancements**: Cross-monorepo findReferences for TypeScript project references (#45625); Windows PATH handling for LSP servers (#59114).
- **Background color customization in VS Code chat**: Allow distinct colors for user messages vs Claude responses. (#65857)

---

## Developer Pain Points

- **Opus 4.7 / 4.8 thinking display regressions**: Two high-engagement issues (#49268, #49322, plus #63358 for 4.8) show users are frustrated that thinking summaries are either missing or empty. The root cause appears to be a harness default mismatch.
- **Tool call parsing errors**: On macOS in particular, Opus 4.7 frequently produces unparseable tool calls, causing entire responses to fail. (#62123, #65965)
- **Session corruption under concurrency**: Slash commands (e.g., `/usage`) or Stop-hook notices injected while a server-tool or advisor call is in flight can corrupt the session JSONL, forcing a session restart. (#63375, #65938)
- **Silent failures / reliability regressions**: A paying user reports that agent edits from memory and silent Edit failures shipped broken code to production. (#64171)
- **Authentication and plan limits**: Login loops on macOS (#22685) and plan upgrades not resetting usage limits (#29223) remain open.
- **Remote control session sync loss**: No indication when iOS ↔ macOS connection drops, causing silent message failure. (#28571)
- **Cost inefficiency**: Redundant context resubmission and compaction loops drive token costs up 2-3×. (#42647)

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-07

## Today’s Update Brief
One alpha release (rust-v0.138.0-alpha.6) landed in the last 24 hours. The community is active with 50 issues and 34 pull requests updated, covering a wide range of bugs from MCP OAuth credential handling to performance regressions on Windows and macOS, alongside a stream of infrastructure PRs refactoring global instruction lifecycle and path handling.

## Releases
- **rust-v0.138.0-alpha.6** — New alpha release. No detailed changelog provided. ([Release link](https://github.com/openai/codex/releases/tag/rust-v0.138.0-alpha.6))

## Hot Issues (10 of 30)
1. **#13018 – Allow to delete threads** – A long‑running request (103 👍) for a delete‑instead‑of‑archive workflow in the macOS app. Users must manually clean `~/.codex/archived_sessions/`. ([Issue](https://github.com/openai/codex/issues/13018))
2. **#12862 – CLI flags `--worktree` and `--tmux` for isolated sessions** – 71 👍. Proposes one‑command git worktree + tmux integration. Community scripts exist, but no official support. ([Issue](https://github.com/openai/codex/issues/12862))
3. **#23979 – Conversation history missing after update** – 16 comments. macOS app update erased local project histories from UI; data still exists in `state_5.sqlite`. Users cannot recover history. ([Issue](https://github.com/openai/codex/issues/23979))
4. **#17827 – Customizable status line in TUI** – 59 👍. Wants a configurable bottom bar (token usage, rate limits, git branch) similar to Claude Code. ([Issue](https://github.com/openai/codex/issues/17827))
5. **#26600 – Usage quota decreases while idle** – 15 comments. Background sessions or stuck tasks may slowly drain quota. User suspects phantom usage. ([Issue](https://github.com/openai/codex/issues/26600))
6. **#26234 – Flatten MCP namespace tools for non‑OpenAI providers** – 14 comments. Codex serializes MCP tools inside a proprietary namespace; models like Ollama/LM Studio cannot call them. Community asks for flattened format. ([Issue](https://github.com/openai/codex/issues/26234))
7. **#24510 – High CPU from unbounded active thread metadata** – 13 comments. `state_5.sqlite` with many large thread titles/previews causes sustained CPU/GPU usage in the desktop app. ([Issue](https://github.com/openai/codex/issues/24510))
8. **#25500 – Projects sidebar shows “No chats” for old conversations** – 10 comments. Windows/macOS app fails to list non‑archived conversations that exist in the database. ([Issue](https://github.com/openai/codex/issues/25500))
9. **#25820 – CLI login blocked by phone verification rate limit** – 10 comments. Pro users cannot authenticate CLI after repeated login attempts. Rate‑limit gating even for verified accounts. ([Issue](https://github.com/openai/codex/issues/25820))
10. **#21232 – App freezes with image-heavy projects** – 9 comments (14 👍). Windows app becomes unresponsive when opening projects containing many generated images. ([Issue](https://github.com/openai/codex/issues/21232))

## Key PR Progress (10 of 20)
1. **#26840 – Add typed cross-platform path URIs** – Introduces stable path identifiers that work across local and remote environments, avoiding OS‑specific parsing pitfalls. ([PR](https://github.com/openai/codex/pull/26840))
2. **#26713 – Report unusable MCP OAuth credentials as logged out** – Fixes a misleading “OAuth” status when credentials exist but are expired without a usable refresh. ([PR](https://github.com/openai/codex/pull/26713))
3. **#26839 – Block project config permission overrides** – Security fix addressing a permission‑override bug (BUGB 15876) across Linux, macOS, Windows. Adds approval policy and sandbox mode. ([PR](https://github.com/openai/codex/pull/26839))
4. **#26754 – Prepare side threads off the TUI event loop** – Fixes a deadlock when `/side` fork is slow and the main thread generates many events. ([PR](https://github.com/openai/codex/pull/26754))
5. **#25704 – Normalize Codex images for Responses strict mode** – Feature‑flagged; converts local/data URL images into prepared data URIs before sending to `/responses` when strict mode is enabled. ([PR](https://github.com/openai/codex/pull/25704))
6. **#26834 – Adopt global instructions contributors** – Moves global instruction loading out of `Config` into explicit extension points, making freshness and history‑sharing semantics explicit. ([PR](https://github.com/openai/codex/pull/26834))
7. **#26686 – Propagate MCP client UI capabilities** – Adds semantic MCP UI capabilities to the app‑server handshake, allowing Codex to advertise supported UI profiles. ([PR](https://github.com/openai/codex/pull/26686))
8. **#26719 – Enable standalone web search in code mode** – Exposes `web.run` to code mode with integration tests, consuming plaintext search output. ([PR](https://github.com/openai/codex/pull/26719))
9. **#26821 – Exclude external tool output from memories** – Opts web‑search output (and other external context) out of influencing memory via `disable_on_external_context`. ([PR](https://github.com/openai/codex/pull/26821))
10. **#26818 – Fix TUI accept prompts with resume and fork** – Handles session ID + initial prompt positional arguments correctly for `codex resume` and `codex fork`. ([PR](https://github.com/openai/codex/pull/26818))

## Feature Request Clusters
- **Thread & Session Management**: Multiple requests to delete threads (#13018), update working directory after folder rename (#26836), and support project‑less chats for remote control (#22947).
- **CLI/UI Customization**: Flags for `--worktree` / `--tmux` (#12862), customizable status line (#17827 / #17457), and an in‑app prompt snippets panel (#26467).
- **MCP & Third‑Party Integrations**: Flatten MCP namespace for non‑OpenAI providers (#26234), improved OAuth credential reporting (#26713), and repeated auth resets with multiple Linear MCP entries (#26710).
- **Performance & Stability**: Address high CPU from large thread metadata (#24510), image‑heavy project freezes (#21232, #19936), and excessive disk writes from long‑running sessions (#26843).
- **Platform‑Specific Issues (Windows)**: Configurable agent shell (#16717), UI transparency bugs (#26310, #26790), crashes on launch (#25376), and sluggishness after updates (#25709).
- **Authentication & Rate Limiting**: CLI login blocked by phone verification (#25820), quota decrease during idle (#26600), and phantom background usage.

## Developer Pain Points
- **Data loss after updates**: Conversation history disappearing from the UI while data remains in SQLite (#23979) — no recovery path.
- **Resource leaks**: Unreaped zombie processes on macOS (#25744) and sustained high CPU from thread metadata processing (#24510) degrade system responsiveness.
- **Configuration rigidity**: Hardcoded PowerShell on Windows (#16717), no customizable status line (#17827), and no way to delete threads (#13018) frustrate power users.
- **Rate limit confusion**: Quota decreasing when not actively using Codex (#26600) and phone‑verification gating blocking legitimate Pro users (#25820).
- **MCP tool incompatibility**: Non‑OpenAI models cannot call MCP tools due to proprietary namespace serialization (#26234), and MCP OAuth credentials can appear valid when they are not (#26713).
- **UI stability**: Invisible/transparent windows on Windows (#26310, #26790), macOS caret focus loss (#25321), and “Add to chat” toolbar not appearing (#25641) hinder daily use.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-07

## Today's Update Brief
Activity remains high with 30 issues and 16 pull requests receiving updates in the last 24 hours. No new releases were published. The maintainer team is focusing on closing older bugs and merging security fixes, while ongoing work on evaluation infrastructure, memory system quality, and sub‑agent reliability continues across several active EPICs.

## Releases
No new releases in the last 24 hours.

## Hot Issues
1. **#1689** — *Run blocking/long running shell commands in background*
   [Closed, P2, area/agent] A user forgot about a GPG agent while prompting Gemini to commit; the shell hung waiting for Yubikey input. The CLI failed to handle the interactive prompt, making it hard to stop. ⚡️ 23 comments, 20 👍
   https://github.com/google-gemini/gemini-cli/issues/1689

2. **#20586** — *Bug: read_file tool enforces .gitignore even when negated in .geminiignore*
   [Closed, P2, area/agent] Users who explicitly un‑ignore a file in `.geminiignore` are still blocked when using `read_file` — a config‑priority bug that breaks workflows for monorepos with mixed ignore rules. 7 comments
   https://github.com/google-gemini/gemini-cli/issues/20586

3. **#20445** — *Bundle build is missing native extensions*
   [Closed, P2, area/platform] `npm run bundle` produces a folder without `node-pty` or `keytar`, crippling downstream packaging. Forced to ship full `node_modules` (large size). 7 comments
   https://github.com/google-gemini/gemini-cli/issues/20445

4. **#24353** — *Robust component level evaluations*
   [Open, P1, area/agent] Epic tracking the expansion of behavioral eval tests from 76 → more comprehensive coverage across 6 supported Gemini models. Aims to make component‑level regressions catchable before release. 7 comments
   https://github.com/google-gemini/gemini-cli/issues/24353

5. **#22745** — *Assess the impact of AST‑aware file reads, search, and mapping*
   [Open, P2, area/agent] Epic exploring whether AST‑aware tools can reduce token usage, improve code navigation, and lower iteration cycles. Sub‑issues investigate `codebase_investigator` improvements. 7 comments
   https://github.com/google-gemini/gemini-cli/issues/22745

6. **#27363** — *Bug: /usage cache fails to update when quota is 100%*
   [Closed, P2, area/platform] When API quota is fully restored, the `/usage` command shows stale values because the API’s `remainingAmount` field is omitted. Cache never invalidates. 6 comments
   https://github.com/google-gemini/gemini-cli/issues/27363

7. **#22323** — *Subagent recovery after MAX_TURNS is reported as GOAL success*
   [Open, P1, area/agent] `codebase_investigator` reports `status: "success"` and `"GOAL"` even though it hit the turn limit before doing any work — masking real failures. 6 comments, 2 👍
   https://github.com/google-gemini/gemini-cli/issues/22323

8. **#21968** — *Gemini does not use skills and sub‑agents enough*
   [Open, P2, area/agent] The model rarely invokes custom skills (e.g., Gradle/Git helpers) on its own, even for closely related tasks. Users must explicitly instruct it, defeating the purpose. 6 comments
   https://github.com/google-gemini/gemini-cli/issues/21968

9. **#26525** — *Add deterministic redaction and reduce Auto Memory logging*
   [Open, P2, area/security] Auto Memory reads local transcripts and sends them to the model before redacting secrets; the service also logs existing skill configurations. Requests deterministic redaction before transmission. 5 comments
   https://github.com/google-gemini/gemini-cli/issues/26525

10. **#26522** — *Stop Auto Memory from retrying low‑signal sessions indefinitely*
    [Open, P2, area/agent] If the extraction agent skips a low‑signal session, it remains “unprocessed” and may be retried in subsequent cycles, wasting API calls. 5 comments
    https://github.com/google-gemini/gemini-cli/issues/26522

## Key PR Progress
1. **#27405** — `fix(core): parse tools.callCommand before discovered tool execution`
   [Closed, P2, area/core] Corrects how tool commands are parsed into program + argv, fixing sandbox preparation and adding regression coverage.
   https://github.com/google-gemini/gemini-cli/pull/27405

2. **#27398** — `fix(acp): accept string protocolVersion during initialize`
   [Closed, P2, area/agent] Handles date‑style string `protocolVersion` values on incoming ACP requests, preventing client incompatibility.
   https://github.com/google-gemini/gemini-cli/pull/27398

3. **#27395** — `docs: clarify GEMINI_CLI_HOME settings path`
   [Closed, P3, area/documentation] Documents that settings remain under `.gemini/settings.json` when `GEMINI_CLI_HOME` is set, with an example. Closes #23622.
   https://github.com/google-gemini/gemini-cli/pull/27395

4. **#27385** — *Fix Node 20 Compatibility and Windows symlink Test Failures*
   [Closed, size/s] Production fix for `URL.parse` crash under Node 20, plus Windows symlink test fix.
   https://github.com/google-gemini/gemini-cli/pull/27385

5. **#27591** — `fix(cli): fall back for oversized bug report URLs`
   [Open, P2, area/core] `/bug` command on Android/Termux can exceed deep‑link limits; truncates the URL to avoid silent crash.
   https://github.com/google-gemini/gemini-cli/pull/27591

6. **#27580** — `fix(at-command): prevent stack overflow from regex backtracking on large inputs`
   [Open, P1, area/core] Replaces regex‑based `@`‑command parser with iterative scanner to avoid catastrophic backtracking when pasting large text. Fixes #27539.
   https://github.com/google-gemini/gemini-cli/pull/27580

7. **#27575** — `fix(security): prevent command injection in findCommand via safe spawnSync`
   [Open, P2, area/security] Replaces shell‑interpolated `execSync` with `spawnSync` in two files, eliminating command injection vectors.
   https://github.com/google-gemini/gemini-cli/pull/27575

8. **#23490** — *Support global cross‑folder session resume*
   [Closed, area/core, size/xl] Enables `gemini --resume <session-id>` across folders, with improved UX when the original project path differs.
   https://github.com/google-gemini/gemini-cli/pull/23490

9. **#27584** — `test(a2a-server): use vi.stubEnv() for env vars per GEMINI.md`
   [Open, P3, area/platform] Migrates remaining direct `process.env` mutations in A2A server tests to `vi.stubEnv()`, preventing state leak.
   https://github.com/google-gemini/gemini-cli/pull/27584

10. **#27552** — `fix(core): insert content literally into LLM prompts to avoid $ substitution`
    [Open, P2, area/agent] Replaces `String.replace('{placeholder}', value)` with literal insertion, preventing silent corruption of content containing `$` signs.
    https://github.com/google-gemini/gemini-cli/pull/27552

## Feature Request Clusters
- **AST‑aware tooling** — Multiple issues (#22745, #22746) propose using ASTs for smarter file reads, search, and codebase mapping to reduce token waste and improve accuracy.
- **Agent self‑awareness** — Several requests ask the CLI to understand its own hotkeys, CLI flags, and execution mechanics (#21432), or to avoid destructive commands in complex git/DB operations (#22672).
- **Browser agent resilience** — Users want automatic session takeover and lock recovery (#22232), proper respect of `settings.json` overrides (#22267), and Wayland compatibility (#21983).
- **Evaluation stability** — EPICs for component‑level evals (#24353) and stabilising internal project evals (#23166) signal a push toward robust regression testing.

## Developer Pain Points
- **Shell command hangs** — The CLI frequently gets stuck “Awaiting user input” after a simple command finishes (#25166). Background shell interaction (like GPG prompts) is also mishandled (#1689).
- **Subagent reliability** — Subagents falsely report success after hitting turn limits (#22323) and run without permission after updates (#22093). The model also under‑uses custom skills (#21968).
- **Memory system quality** — Auto Memory retries low‑signal sessions indefinitely (#26522), sends transcripts before redacting secrets (#26525), and silently skips invalid patches (#26523).
- **Packing & bundling** – Official `npm run bundle` lacks native extensions, forcing downstream packagers to ship full `node_modules` (#20445).
- **Security** – Multiple PRs address command injection (#27575) and `$`‑substitution in prompts (#27552), indicating ongoing hardening.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-07

## Today's Update Brief

Activity was high with 17 issues updated in the last 24 hours, including two closed MCP-related bugs. No new releases or pull requests landed. The community highlighted a severe WSL2 regression causing 215% CPU usage and frozen TUI, alongside ongoing demand for image pasting, improved MCP permission controls, and broader model options for free-tier users.

## Releases

*No new releases in the last 24 hours.*

## Hot Issues (10 selected)

1. [#3700 – [High severity] 1.0.60 WSL2 regression: CPU 215%, TUI frozen](https://github.com/github/copilot-cli/issues/3700)
   *Affected workflow:* Fresh WSL2 sessions cause the main thread to spin at ~215% CPU and live output never paints until restart.
   *Impact:* TUI becomes unusable immediately; regression of #2208.
   *Community:* 2 👍, 1 comment. Reported by @neerajdixit-msft2.

2. [#1276 – Support pasting images from clipboard into prompts](https://github.com/github/copilot-cli/issues/1276)
   *Affected workflow:* Users cannot paste screenshots of code, UI bugs, or logs into CLI prompts.
   *Impact:* Blocks image‑based debugging workflows.
   *Community:* 11 comments, 8 👍. Author @myartsev.

3. [#1128 – Feature Request: Add awaitingUserInput hook type](https://github.com/github/copilot-cli/issues/1128)
   *Affected workflow:* Theming/automation tools need a hook when CLI is waiting for input (currently only `userPromptSubmitted` exists).
   *Impact:* Gap for triggering actions when agent is ready for interaction.
   *Community:* 4 comments, **27 👍** (highest reaction today).

4. [#3028 – MCP permissions: allow/disallow tools from MCP servers](https://github.com/github/copilot-cli/issues/3028)
   *Affected workflow:* Users want granular control over which MCP server tools the CLI can invoke, similar to `trustedFolders`.
   *Impact:* Security and compliance concern for enterprise environments.
   *Community:* 6 comments, 4 👍. Author @artur-kozminski.

5. [#3547 – Background sub-agent hangs at total_turns=0 with gpt-5.5](https://github.com/github/copilot-cli/issues/3547)
   *Affected workflow:* Calling `task(..., model="gpt-5.5", mode="background")` reports success but never progresses.
   *Impact:* Model‑specific bug stalls background agents indefinitely.
   *Community:* 5 comments. Author @ravisha22.

6. [#3652 – WSL startup delays 40–80 seconds](https://github.com/github/copilot-cli/issues/3652)
   *Affected workflow:* Copilot Chat in WSL takes 40–80s to become available due to `CopilotCLIChatSessionContentProvider.listSessions`.
   *Impact:* Severe lag for WSL users on Windows 11.
   *Community:* 2 comments. Author @vishalnarayan2809.

7. [#3282 – Add multiple BYOK model capability](https://github.com/github/copilot-cli/issues/3282)
   *Affected workflow:* Only one BYOK model can be set via env var; switching requires terminating the session.
   *Impact:* Inconvenient for users who want to test multiple private models.
   *Community:* 2 comments, 3 👍. Author @shivsant.

8. [#3692 – Escape should cancel current task and focus queued prompt](https://github.com/github/copilot-cli/issues/3692)
   *Affected workflow:* When a task is running and a follow‑up prompt is queued, pressing Escape discards the pending prompt instead of executing it after cancellation.
   *Impact:* Workflow interruption; accidental prompt loss.
   *Community:* 1 comment. Author @jphreid.

9. [#3655 – Autopilot scope creep: agent self‑answers questions and executes unrequested actions](https://github.com/github/copilot-cli/issues/3655)
   *Affected workflow:* In autopilot mode, the agent expands narrow instructions, asks clarifying questions, then proceeds without user confirmation, even after explicit “stop”.
   *Impact:* Loss of control; unplanned file changes or installations.
   *Community:* 1 comment. Author @jphreid.

10. [#3705 – Copilot Free only Claude Haiku 4.5; request Sonnet/Opus](https://github.com/github/copilot-cli/issues/3705)
    *Affected workflow:* Free‑tier users are limited to Haiku; Sonnet and Opus are locked behind a paid plan.
    *Impact:* Affordability and model choice for free users.
    *Community:* 0 comments. Author @yezhang-233.

## Key PR Progress

*No pull requests were updated in the last 24 hours.*

## Feature Request Clusters

- **Image & clipboard input** (#1276) – Pasting images (screenshots, logs) into CLI prompts remains the top single request by comments.
- **MCP security & permissions** (#3028, #3668 [closed], #3701 [closed]) – Demand for per‑tool allow/deny lists and session header persistence; two related bugs were fixed today.
- **Model flexibility** (#3282, #3705, #3707) – Multiple BYOK models, lower‑cost/open‑weight alternatives, and access to Sonnet/Opus on the free plan.
- **Theming & hook extensions** (#1128, #3704) – New hook `awaitingUserInput` and RTL text rendering support for Hebrew/Arabic.
- **Input hotkey improvements** (#1276, #1437, #3692) – Image paste, Ctrl+Enter TUI bug, and Escape key behavior refinement.

## Developer Pain Points

- **High CPU & frozen TUI** on WSL2 (#3700) – Regression in v1.0.60 makes the CLI unusable immediately after session start.
- **Startup slowness** under WSL (#3652) – 40–80 second delays before chat becomes available.
- **Agent scope creep** in autopilot mode (#3655) – Agent executes unrequested actions despite explicit cancellation.
- **Background sub‑agent hangs** with specific models (#3547) – `gpt-5.5` blocks indefinitely with zero turns.
- **MCP server runaway spawning** (#3701, now closed) and **missing session‑ID persistence** (#3668, now closed) – Both were resolved in the last 24 hours, but highlight ongoing MCP integration fragility.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**2026-06-07**

## Today's Update Brief
No new releases or issue updates occurred in the last 24 hours. Two existing pull requests were updated today, both authored by @he-yufeng: one improves graceful degradation when MCP servers fail to connect, and the other fixes image path handling in the shell. Community activity remains low, with no newly created issues or recent comments on the updated PRs.

## Releases
None.

## Hot Issues
No issues were updated in the last 24 hours.

## Key PR Progress
- **[#1769 – fix: graceful degradation when MCP server fails to connect](https://github.com/MoonshotAI/kimi-cli/pull/1769)**
  *Author: @he-yufeng* | Created: 2026-04-06 | Updated: 2026-06-07
  Catches `MCPRuntimeError` in `_agent_loop()` to prevent worker crashes when an MCP server fails to start (e.g., due to port conflicts between TUI and Web UI sessions). Without this fix, uncaught errors leave the frontend stuck in a perpetual "thinking" state.

- **[#2183 – fix(shell): attach dropped image paths eagerly](https://github.com/MoonshotAI/kimi-cli/pull/2183)**
  *Author: @he-yufeng* | Created: 2026-05-07 | Updated: 2026-06-07 | Resolves #2182
  Prompt submission now scans user text for local image paths when the selected model supports image input. Images are read immediately and sent as `ImageURLPart` instead of relying on a short-lived file path that could become invalid before `ReadMediaFile` processes it.

## Feature Request Clusters
None observed.

## Developer Pain Points
No recurring frustrations or high-frequency requests were recorded in today’s data.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest – 2026-06-07

## Today's Update Brief
No new releases landed in the last 24 hours, but community activity remained high: 50 issues and 50 pull requests were updated. The most discussed topics include long-standing calls for agent sandboxing (#2242, 53 comments), a critical Bedrock provider regression in v1.16.0 (#31147), and recurring Windows terminal crashes on exit (#27749, #28673). A wave of core refactoring PRs from contributor @kitlangton is in progress, isolating provider turn logic and adding V2 background task tooling.

## Releases
*None in the last 24 hours.*

## Hot Issues (10 noteworthy)
1. **Agent sandboxing (#2242)** – 53 comments, 51 👍
   Requests a way to restrict terminal commands to a specific directory, similar to macOS seatbelt used by other CLI tools. High community demand for security boundaries.
   [Issue](https://github.com/anomalyco/opencode/issues/2242)

2. **`/undo` and timeline undo do not revert file edits (#4704)** – 19 comments, 16 👍
   Even in git-tracked projects, the undo commands fail to restore file changes. Logs attached. Affects core editing workflow.
   [Issue](https://github.com/anomalyco/opencode/issues/4704)

3. **`/sessions` TUI only shows recent 5 sessions (#16270)** – 11 comments, 2 👍
   Picker ignores historical conversations in the database (584 root sessions). Root cause identified in TUI bootstrap code (30-day window hardcoded).
   [Issue](https://github.com/anomalyco/opencode/issues/16270)

4. **Feature: Unified usage tracking via `/usage` (#9281)** – 10 comments, 26 👍
   Users want to see remaining plan/rate limits for authenticated providers (OpenAI, GitHub Copilot, Claude) inside the TUI. A `Usage.Service` already exists but is not surfaced.
   [Issue](https://github.com/anomalyco/opencode/issues/9281)

5. **Desktop: File tree not visible after enabling advanced settings (#30545)** – 8 comments
   On OpenCode Desktop v1.15.13, enabling the file tree in Advanced settings has no effect even after restart.
   [Issue](https://github.com/anomalyco/opencode/issues/30545)

6. **Feature: Paginated message loading for long sessions (#6548)** – 8 comments, 7 👍
   Sessions with thousands of messages cause slow load and high memory usage. Requests incremental loading.
   [Issue](https://github.com/anomalyco/opencode/issues/6548)

7. **Feature: Send prompt only with send button, not Enter (#16226)** – 7 comments
   Multi-paragraph prompts are accidentally sent on Enter. Requested toggle to require button click.
   [Issue](https://github.com/anomalyco/opencode/issues/16226)

8. **`/exit` or `/quit` kills the terminal on Windows PowerShell (#27749)** – 6 comments, 1 👍
   Exiting TUI closes the entire terminal window instead of returning to shell. Occurs on both `bun run dev` and bundled binary on Windows 11.
   [Issue](https://github.com/anomalyco/opencode/issues/27749)

9. **Regression: opencode 1.16.0 broken for AWS Bedrock with SSO (#31147)** – 5 comments
   Returns `AWS credential provider failed: E is not a function` – a regression likely from provider layer changes.
   [Issue](https://github.com/anomalyco/opencode/issues/31147)

10. **Segfault on NixOS+WSL (#26846)** – 5 comments, 8 👍
    Opencode crashes immediately with segfault on NixOS in WSL, both from unstable and dev builds.
    [Issue](https://github.com/anomalyco/opencode/issues/26846)

## Key PR Progress (10 important)
1. **refactor(core): isolate provider turn runner (#31176)** by @kitlangton
   Extracts provider-turn preparation, streaming, tool settlement, and overflow retry from the session activity runner. Preserves existing behavior behind a clean interface.
   [PR](https://github.com/anomalyco/opencode/pull/31176)

2. **feat(core): publish terminal session run failures (#31177)** by @kitlangton
   Adds a `session.next.run.failed` event for advisory wake retries, associating failures with durable input.
   [PR](https://github.com/anomalyco/opencode/pull/31177)

3. **fix(core): retry failed session wakes (#31112)** by @kitlangton
   Implements bounded retry for failed advisory Session wakes, preferring newer coalesced work.
   [PR](https://github.com/anomalyco/opencode/pull/31112)

4. **feat(opencode): add Antigravity CLI connector (#31066)** by @anisches
   New provider that reuses existing `agy` sign-in for Gemini, Claude, and GPT-OSS without extra login or API keys.
   [PR](https://github.com/anomalyco/opencode/pull/31066)

5. **fix(core): harden unified tool runtime (#31171)** by @kitlangton
   Durably fails unsettled tool calls, makes registration atomic against interruption, and removes double-counting of projections.
   [PR](https://github.com/anomalyco/opencode/pull/31171)

6. **feat(core): add V2 background task tool (#31173)** by @kitlangton
   Introduces a V2 `task` tool that spawns child sessions with validated subagent config, supporting both foreground and background execution.
   [PR](https://github.com/anomalyco/opencode/pull/31173)

7. **fix(provider): keep compacted Anthropic tool histories user-led (#31052)** by @codeg-dev
   Normalizes Anthropic-bound message histories by stripping trailing assistant prefill in two edge cases, fixing compatibility issues.
   [PR](https://github.com/anomalyco/opencode/pull/31052)

8. **fix(session): settle pending tool calls on schema errors (#30091)** by @codeg-dev
   Settles a pending tool part to error when the stream emits a matching schema-validation tool-error, preventing hangs.
   [PR](https://github.com/anomalyco/opencode/pull/30091)

9. **refactor(server): canonicalize service API (#31049)** by @thdxr
   Promotes experimental server API to canonical names, organizes route groups and middleware around complete service layers.
   [PR](https://github.com/anomalyco/opencode/pull/31049)

10. **fix(desktop): localize missing Chinese strings in Desktop Settings Advanced (#30883)** by @YoungLee-coder
    Adds simplified Chinese translations for the Advanced settings group, fixing mixed language display.
    [PR](https://github.com/anomalyco/opencode/pull/30883)

## Feature Request Clusters
- **Usage/Plan Tracking** – Multiple issues (#9281, related #9545) request visibility into remaining provider quotas and limits directly in the TUI.
- **Message & History Management** – Requests for paginated message loading (#6548) and fixing the session picker to show all historical sessions (#16270) indicate user pain with long conversations.
- **MCP Tool Management** – Two feature requests (#28662, #17482) ask for per-agent MCP tool filtering and dynamic/lazy loading of tool schemas to stay within model tool limits and reduce context bloat.
- **UX Improvements** – Several small enhancements: optional confirmation before sending on Enter (#16226), alphabetical sorting in `/connect` provider picker (#30902), and two-line session titles in the TUI (#22480).
- **Agent Customization** – Requests for a `/simplify` skill (#29272), a system prompt environment information plugin API (#31158), and ability to allow external symlink targets via consent (#30788) show growing interest in agent configurability.
- **Sandboxing & Security** – The top-voted issue (#2242) calls for restricting agent terminal commands to the current directory; related (#30788) asks for controlled symlink access outside the project.

## Developer Pain Points
1. **Windows terminal crashes on exit** – Multiple reports (#27749, #28673, #30495) describe `/exit`, `/quit`, or Ctrl+C killing the parent terminal process (`pwsh`, `cmd`, `conhost.exe`) instead of returning to the shell. A regression chain from v1.14.25 onward.
2. **Bedrock provider broken in v1.16.0** – Two issues (#31147, #30858) report SSO credential failures and indefinite hangs on all model calls. The same credentials work via AWS CLI.
3. **Undo functionality unreliable** – Issue #4704 (19 comments) shows that `/undo` and timeline undo do not revert file changes even with git, breaking a fundamental editing workflow.
4. **Desktop UI freezes on large diffs** – Issue #30906 reports that Desktop v1.16.0 becomes unresponsive when computing diffs of large files, a regression from v1.15.13.
5. **Platform-specific crashes** – NixOS+WSL segfaults (#26846) and illegal instruction crashes on CPUs without AVX2 (#31155) hinder Linux and Windows users on older hardware.
6. **Terminal garbled after TUI exit** – Mouse escape sequences appear as raw text (#20458), indicating terminal reset issues.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-07

## Today's Update Brief

A single nightly patch release went out fixing a CLI output bug. The community report queue remains active with 29 open issues and 33 PRs updated in the last 24 hours. Two critical bugs dominate discussion: a severe OOM regression with `--resume` (now with a fix PR up) and recurring agent dead-loop behavior in v0.17.0. Meanwhile, the daemon mode (`qwen serve`) ACP transport implementation continues rapid iteration — 4 related PRs landed or opened today.

## Releases

**v0.17.1-nightly.20260607.cef26a86a** — Nightly patch release.

Changelog highlights:
- `fix(cli): skip thought parts in copy output` — When copying output to clipboard, the “thinking” block is now stripped, preventing unintended thought content from being pasted into other tools.
- Internal: version bump to v0.17.1 via CI automation.

## Hot Issues

### 1. Severe OOM with `qwen --resume` and Escape key broken
[#4815](https://github.com/QwenLM/qwen-code/issues/4815) — Priority P1 bug. When restoring a session with `--resume`, the process runs out of memory within ~10 minutes. Additionally, the Escape key becomes completely non-functional (100% reproducible). The GC crash log shows old-space exhaustion. A fix PR (#4824) targeting API history compaction under memory pressure was opened the same day. Community reaction is urgent — 8 comments, all confirming reproduction.

### 2. Qwen Code + Ollama / Qwen 3.6 cannot complete tasks
[#4657](https://github.com/QwenLM/qwen-code/issues/4657) — Multi-step task execution (e.g., generating an HTML ebook) fails mid-stream or never reaches completion. User reports the agent frequently hits timeouts or simply stops. Previous timeout-related fixes are not sufficient. 7 comments; maintainers are investigating model configuration.

### 3. Agent stuck in dead loop — reads file repeatedly without progressing
[#4278](https://github.com/QwenLM/qwen-code/issues/4278) (Chinese-language report) — Agent enters an infinite readFile loop, continuing for 13+ minutes until manual interrupt. User describes a similar prior incident lasting over 2 hours. Appears related to memory/task persistence when saving memories via `readFile`. No fix yet; triage pending.

### 4. Compact mode tool merge causes full-screen flash on every tool batch
[#4794](https://github.com/QwenLM/qwen-code/issues/4794) — With compact mode enabled (`Ctrl+O`), every tool execution batch triggers a full terminal screen flash. Root cause: `mergeCompactToolGroups` shrinks the history array, causing Ink to re-render the entire component tree. Priority P2. Community: 3 comments, users on Windows and Linux both affected.

### 5. Vim INSERT mode Esc key leak / mode indicator render lag
[#4675](https://github.com/QwenLM/qwen-code/issues/4675) — Pressing Esc to leave Vim INSERT mode also triggers the global “Press Esc again to clear” handler. Additional issues: Enter does not send in NORMAL mode, and the mode indicator lags behind actual state. Priority P2. 3 comments, all from the same reporter who provided detailed reproduction steps.

### 6. `qwen sessions list` subcommand requested with JSON/tag/date filters
[#4825](https://github.com/QwenLM/qwen-code/issues/4825) — Feature request for enumerating stored sessions from `~/.qwen/history/<project>/` in a script-friendly way. Proposed flags: `--json`, `--tag`, `--date`. Created today, 3 comments already — quick community interest. This would unblock CI integration and session management scripts.

### 7. SMB share folder inaccessible — absolute paths get extra spaces
[#4720](https://github.com/QwenLM/qwen-code/issues/4720) (Chinese-language report) — Qwen Code cannot access SMB-mounted folders on Windows. The tool inserts unexpected spaces into absolute paths, breaking file operations. 3 comments, screenshots attached showing the path corruption. No workaround reported.

### 8. Published CLI bundle omits extension examples
[#4718](https://github.com/QwenLM/qwen-code/issues/4718) — The npm-published package is missing `dist/examples/` templates required by `qwen extensions new`. The `package.json` build step copies `examples/` but this is not included in the publish artifact. Users cannot scaffold new extensions. 3 comments; likely packaging issue.

### 9. v0.17 dead loop when saving memories + image attachments not auto-read
[#4700](https://github.com/QwenLM/qwen-code/issues/4700) (Chinese-language report) — Two issues reported together: (a) saving memories triggers an infinite readFile loop, and (b) when an image is attached via `@` mention, the model does not automatically interpret the image — the user must explicitly instruct it. 3 comments.

### 10. Declarative agent definitions via frontmatter files
[#4821](https://github.com/QwenLM/qwen-code/issues/4821) — Feature request inspired by Claude Code’s `.claude/agents/` pattern. Proposes that users define custom agents as Markdown files with YAML frontmatter (system prompt, tools, models) instead of hardcoding them in TypeScript. 3 comments, opened today. Part of the `roadmap/subagents-tools` track.

## Key PR Progress

### [PR #4824](https://github.com/QwenLM/qwen-code/pull/4824) — fix(core): prevent OOM by compacting API history under memory pressure
**Status:** Open | **Fixes:** #4815
Three targeted compaction strategies: (1) run microcompaction on Hook messages (goal-mode continuation), (2) compact UI history when `memoryUsage` exceeds ~80% of max old-space size, (3) trigger incremental GC via `global.gc()` on high-water mark. The fix targets the critical OOM + Esc key regression reported yesterday. No merge conflicts reported.

### [PR #4764](https://github.com/QwenLM/qwen-code/pull/4764) — feat(memory): add user-level auto-memory at ~/.qwen/memories/
**Status:** Open | **Closes:** #4747
Adds a cross-project auto-memory directory for user-level facts (preferences, working style, background). Mirrors Claude Code's `private`/`team` scope design while reusing qwen-code's existing 4-type taxonomy. This eliminates the need to re-learn user preferences in every new project.

### [PR #4828](https://github.com/QwenLM/qwen-code/pull/4828) — fix(core): preserve shared baseUrl on auth refresh
**Status:** Open | **Fixes:** #4813
When multiple models share the same `baseUrl` in `modelProviders`, an auth refresh previously duplicated or lost the shared URL. This fix preserves the resolved `baseUrl` during `syncAfterAuthRefresh` and adds a regression test covering CLI/env/settings-derived URLs. Small change, high impact for multi-model setups.

### [PR #4793](https://github.com/QwenLM/qwen-code/pull/4793) — fix: coerce non-string tool params to strings for self-hosted LLMs
**Status:** Open
Self-hosted models (LMStudio, vllm, sglang) sometimes return numbers or booleans for string-typed tool parameters (e.g., `old_string`, `content`). This PR adds coercion before the SchemaValidator check, fixing edit_file and write_file failures. Important for users migrating from hosted to self-hosted models.

### [PR #4713](https://github.com/QwenLM/qwen-code/pull/4713) — feat(mcp): project .mcp.json + workspace approval gating
**Status:** Open | **Refs:** #4615
Adds approval gating for untrusted, checked-in MCP server sources. Project `.mcp.json` files and global `~/.qwen/` MCP configs are now treated as untrusted-until-approved. The PR also defines a clear cross-source precedence model aligning with Claude Code's `.mcp.json` handling.

### [PR #4827](https://github.com/QwenLM/qwen-code/pull/4827) — feat(serve): ACP/REST parity — 29 new `_qwen/*` methods + production hardening
**Status:** Open | **Refs:** #4782
Single commit, +935 lines. Adds 29 new ACP dispatch methods achieving full REST parity for the daemon: session extensions (recap, btw, shell, detach, context_usage, workspace), rewind snapshot endpoints, directory management, agent CRUD, memory read/write/forget, and diagnostic hooks. This is the largest single ACP commit to date.

### [PR #4826](https://github.com/QwenLM/qwen-code/pull/4826) — feat(cli): enable /directory command in ACP mode
**Status:** Open
Refactors the `/directory` (show/add) command from `addItem`-based output to returning `MessageActionReturn`, enabling web-shell users to manage workspace directories. Previously restricted to interactive mode only. Small change, unblocks web-shell directory management.

### [PR #4773](https://github.com/QwenLM/qwen-code/pull/4773) — feat(serve): ACP WebSocket transport (RFD Streamable HTTP phase 2)
**Status:** Open | **Depends on:** #4827
Extracts `TransportStream` interface, adds `WsStream` adapter, and prepares WebSocket upgrade handler + bearer auth. This builds toward streaming HTTP transport per the ACP specification. The PR is partially complete (interface ready, adapter written; connection registry widening and WS handler still in progress).

### [PR #4665](https://github.com/QwenLM/qwen-code/pull/4665) — Add InstructionsLoaded hook for instruction file loading
**Status:** Open | **Roadmap:** hooks-events
Fires a hook event when instruction/context files are loaded during memory discovery and via `@` imports. Payload includes loaded file path, memory source type, load reason, and trigger metadata. Enables extension authors to react to file inclusion events.

### [PR #4490](https://github.com/QwenLM/qwen-code/pull/4490) — feat(daemon): merge daemon-mode feature batch into main
**Status:** Open
Periodic integration merge of `daemon_mode_b_main` → `main`. Rolls up 46 commits across 386 files (+115k / −12k LOC). Covers core daemon-mode feature set for v0.16-alpha: ACP dispatch, workspace CRUD, auth, session management, and web-shell infrastructure. This is the primary staging PR for the daemon feature.

## Feature Request Clusters

**Memory & Agent Persistence (3 requests)**
- Declarative agent definitions via frontmatter files (#4821) — mirroring Claude Code’s `.claude/agents/` pattern
- User-level cross-project auto-memory (#4764) — already being implemented in PR
- InstructionsLoaded hook for extensibility (#4665) — already in PR

**Sessions Management (1 request, quick traction)**
- `qwen sessions list` subcommand with `--json`, `--tag`, `--date` filters (#4825) — script-friendly session enumeration

**Daemon / ACP Parity (ongoing)**
- 29 new `_qwen/*` ACP methods achieving REST parity (#4827)
- ACP WebSocket transport (#4773)
- HTTP rewind endpoints (#4820)
- Hooks diagnostic HTTP surface (#4822)
All part of the daemon mode roadmap documented in #4175 and tracked in #4782.

**Model Provider Improvements (2 requests)**
- Smart routing: use local model for simple tasks, API for complex ones (#4640)
- Make UI easier for custom provider users to add new models (#4814)

## Developer Pain Points

**Memory / Crash Issues**
- **OOM with `--resume`** (#4815) — the highest-priority active bug; a fix PR is already up
- **Agent dead loops** (#4278, #4700, #4657) — multiple reports of agents getting stuck in infinite readFile or task loops, requiring manual Ctrl+C. This is the most commonly reported class of bug across v0.17.x.
- **Mid-session crashes with context loss** (#4740) — TUI mode crashes mid-generation, and on resume the model has lost prior context memory.

**Terminal UI / Interaction Issues**
- **Compact mode flash** (#4794) — workable but visually jarring; affects both Linux and Windows terminals
- **Vim mode Esc key conflicts** (#4675) — the global Esc handler clashes with Vim mode state machine
- **Ctrl+C in PyCharm terminal exits unexpectedly** (#4586) — regression from earlier two-press-to-exit behavior
- **Scroll issues in tmux + Cursor** (#4725) — terminal auto-scrolls on every attach

**File System / Platform Issues**
- **SMB share inaccessible on Windows** (#4720) — paths get extra spaces
- **Network-less initialization hangs** (#4550) — no ability to skip internet-dependent startup step for LAN-only environments

**Model / Provider Configuration**
- **OpenRouter model selection deprecated** (#4750) — confusion around `/manage-model` removal in v0.16
- **Shared baseUrl not preserved** (#4813) — PR #4828 now addresses this
- **Self-hosted models return incorrect tool param types** (#4793) — numbers/booleans where strings expected; fix PR up

</details>