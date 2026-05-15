# AI CLI Tools Community Digest 2026-05-15

> Generated: 2026-05-15 02:15 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Tool Comparison Report — 2026-05-15

## 1. Daily Cross-Tool Overview

All six tracked tools showed elevated community activity today, with releases shipping for Claude Code (v2.1.142), Copilot CLI (v1.0.48), Kimi Code (v1.44.0), OpenCode (v1.14.50/v1.14.51), and Gemini CLI (v0.44.0-nightly). Two dominant cross-cutting concerns emerged: **model performance/reliability degradation** (reported for Kimi's K2.6, OpenCode's Opus 4.5 quota handling, and broader token-waste complaints) and **session management gaps** (missing `/undo` in Codex, `\new` command proposed for Claude Code, and `/rewind` improvements in Qwen Code). MCP infrastructure issues—OAuth re-auth, token refresh, and tool namespace collisions—appeared across four of the six projects. No single tool had a clearly dominant release or community response pattern.

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Release Today | Key Release Version |
|---|---|---|---|---|
| Claude Code | 50 | 5 | Yes | v2.1.142 |
| OpenAI Codex | 50 | 10 | Yes (2 alphas) | v0.131.0-alpha.16/.18 |
| Gemini CLI | 50+ | 10 | Yes (nightly) | v0.44.0-nightly |
| Copilot CLI | 37 | 0 | Yesterday | v1.0.48 |
| Kimi Code CLI | ~10 (selected) | 10 | Yes | v1.44.0 |
| OpenCode | 50 | 50 | Yes (2 patches) | v1.14.50/.51 |
| Qwen Code | 23 | 50 | No | — |

**Notes:** OpenCode reported exactly 50 issues and 50 PRs updated in 24h—the highest PR volume. Claude Code and Codex each reported 50 issues updated. Copilot CLI had no PR activity today. Gemini CLI and Qwen Code reported "50+" and "50" PRs respectively, indicating broad surface area of active development.

## 3. Shared Feature Directions

The following requirements appeared across multiple tool communities today:

**Session lifecycle management (Claude Code, Codex, Kimi Code, Qwen Code)**
- Claude Code: PR #59275 adding `/new` command for fresh sessions; feature requests for git branch display and consistent session naming
- Codex: Issue #9203 (227 👍) requests restoration of `/undo` command; missing file-level revert capability
- Kimi Code: PR #2276 implements `/goal` command with stateful goal management (parallel to Claude Code's `/goal`)
- Qwen Code: PR #4064 adds file restoration support to `/rewind` command; requests for session forking (#4158)

**MCP/OAuth reliability improvements (Claude Code, Copilot CLI, Kimi Code, Qwen Code)**
- Claude Code: #43000 — MCP OAuth re-auth with multiple terminals; #2790/2024 — MCP server token refresh/environment variable expansion
- Copilot CLI: #2779 — automatic MCP server token refresh; #3329 — MCP servers not connecting before first prompt execution
- Kimi Code: PR #2282 — prefix MCP tool names with server name to prevent collisions; PR #2259 — redirect stdio MCP stderr to logs
- Qwen Code: #4163 — MCP tools silently unavailable in headless `--prompt` mode after progressive-MCP rollout

**Daemon/headless/server operation mode (Qwen Code, OpenCode)**
- Qwen Code: #3803 (daemon mode proposal) and #4156 (Mode A: TUI + in-process HTTP daemon) with active PR series (#4113, #4160)
- OpenCode: v1.14.51 ships experimental background subagents; long-standing request for persistent sessions

**AST-aware or smarter code reading (Gemini CLI, Claude Code)**
- Gemini CLI: #22745 epic investigates AST-aware file reads, search, and mapping using tilth/glyph to reduce token waste
- Claude Code: Implicit in skill/hierarchical resolution requests (#18192, #38981) for more efficient codebase understanding

**Multi-repository / multi-workspace support (Codex, Copilot CLI, Claude Code)**
- Codex: #11956 — multi-repo support (19 👍)
- Copilot CLI: #1826 — support multi-root workspaces via `.code-workspace` file (11 👍)
- Claude Code: Implicit in hierarchical skill resolution and workspace-roots refactors

## 4. Differentiation Analysis

**Feature focus divergence:**

- **Claude Code** leans heavily into **skills/plugins ecosystem** and **enterprise MCP infrastructure** (recursive skill discovery, hierarchical resolution, MCP config flags for agents). The `claude agents` flags in v2.1.142 indicate investment in background/dispatched session orchestration.
- **OpenAI Codex** is focused on **remote control / cross-device workflows** (401 👍 on original remote control request, now shipping with bugs). The permissions/workspace-roots refactor (PRs #22610, #22611, #22612) suggests architectural cleanup toward isolation models.
- **Gemini CLI** emphasizes **sub-agent architecture** and **evaluation infrastructure** (EPIC #24353 with 76 eval tests across 6 models). The AST-aware tooling exploration (#22745) is unique among the tools today.
- **GitHub Copilot CLI** is the most **stable/mature** release pattern (patch release fixing CJK rendering, glob patterns, token price display). Community engagement lower, with platform compatibility (ARM64, older Linux) as top pain points.
- **Kimi Code CLI** shows the strongest **community-driven contribution pattern**—a single contributor (ktwu01) filed multiple documentation, security, and installer issues with corresponding PRs. The model regression complaints (K2.6 vs old `kimi-for-coding`) are the most vocal performance criticism across any tool today.
- **OpenCode** has the **broadest provider support** among tools reviewed (Copilot, NVIDIA, MiniMax, DeepSeek, GLM) and the highest PR throughput. The supply-chain security question (#27646 referencing "Mini Shai-Hulud" worm) is unique in today's data.
- **Qwen Code** is pursuing **daemon mode** and **self-improvement tooling** (`/improve` command) more aggressively than other tools. The fix for atomic file writes (#4096) suggests focus on data integrity during tool execution.

**Target user divergence:**
- Claude Code, Copilot CLI, and Codex appear enterprise-oriented (Bedrock auth, org monitoring, workspace permissions)
- OpenCode and Qwen Code position for provider-agnostic/multi-model users
- Gemini CLI targets Google Cloud/Vertex AI ecosystem users
- Kimi Code serves a primarily Chinese-language user base with English-language community contributions growing

## 5. Community Activity Notes

**Most active by total engagement count:** Claude Code and OpenCode both reported 50+ issues and high comment volumes (>50 comments on multiple hot issues). OpenCode's 50 PRs updated in 24h is the highest raw count.

**Most active release schedule:** OpenCode shipped two patches (v1.14.50, v1.14.51) today. Claude Code shipped v2.1.142. Codex shipped two alpha releases. Gemini CLI shipped a nightly.

**Strongest maintainer response:** Gemini CLI had multiple maintainer-driven issues (EPICs #22745, #24353) and PRs with code reviews (#22611, #22610, #22237). OpenCode had maintainers closing issues and merging PRs. Claude Code maintainers were visible on PRs (#59151, #59275) but absent from many hot issue threads.

**Weakest maintainer response:** Copilot CLI had no PR activity and several open issues with 0-1 comments and no maintainer response. Kimi Code had no maintainer responses visible on model degradation complaints (#2077, #2268, #2209).

**High community frustration clusters:**
- Kimi Code: model regression (K2.6 overloaded, degraded behavior vs previous model) — 3 separate issues, no maintainer comment
- Claude Code: "Unhandled Case" error (#59033, 70 👍, 50 comments) with no maintainer response; Ultrareview crash consuming credits (#52819)
- Codex: missing `/undo` (#9203, 227 👍) left unresolved; reconnect loops affecting basic usability
- OpenCode: TUI renderer crash affecting Windows and Linux (6+ reports); clipboard paste failures

## 6. Evidence-Backed Observations

**1. Model performance complaints are the most emotionally charged cross-tool issue today.**
Kimi Code's K2.6 model degradation (#2077, #2268, #2209) generated the strongest negative sentiment. OpenCode's #8030 (225 comments, 79 👍) documents Copilot Opus 4.5 consuming half a monthly quota due to misattributed agent requests. Claude Code has token waste complaints (#53065 advisor() inflation, #59288 high consumption). Qwen Code reports OOM/heap exhaustion (#4149, #4116). This is a broader pattern: users believe model quality or cost efficiency has regressed, and they are vocal about it.

**2. Session lifecycle management is a recognized gap across at least 4 tools.**
The common pattern: users want to undo/revert/resume/fork sessions. Codex's #9203 (227 👍) is the most upvoted single issue today specifically calling for `/undo`. Claude Code PR #59275 adds `/new`. Kimi Code PR #2276 adds `/goal`. Qwen Code PR #4064 improves `/rewind`. No tool has a complete session management story.

**3. MCP integration pain points are widespread and non-trivial.**
Four of six tools (Claude Code, Copilot CLI, Kimi Code, Qwen Code) have open issues about MCP OAuth, token refresh, tool namespace collisions, or connection reliability. These are not minor UX complaints—they block multi-session workflows, cause silent failures, and require architectural changes (e.g., Kimi Code PR #2282 prefixing tool names to avoid collisions). The MCP ecosystem appears to be scaling faster than tool implementations can stabilize.

**4. Platform compatibility gaps remain a persistent "boring but blocking" issue.**
Copilot CLI fails on Windows ARM64 (#3306) and Rocky Linux 8.10 (GLIBC mismatch, #3276). Claude Code has Windows file stat errors (#55107). Gemini CLI has Wayland browser failures (#21983) and Windows PowerShell loops (#25615). OpenCode broke on Alpine Linux (musl) in v1.14.50 (#27589). Kimi Code fixes Windows console font reset (PR #2289). None of these are intellectually interesting, but each blocks an entire platform's user base.

**5. Security and supply-chain awareness is emerging as a community concern.**
OpenCode issue #27646 explicitly asks whether updating is safe during an ongoing supply-chain worm attack. Kimi Code issue #2273 documents the auto-updater downloading unsigned binaries with unsafe tarfile extraction. These suggest users are becoming more security-conscious about AI CLI tools' update mechanisms—an area where most tools have historically prioritized convenience over verification.

**No clear cross-tool signal on:** which model provider is winning, which architectural approach (monolithic vs plugin-based) is preferred, or whether any tool is gaining or losing market share. The data supports observations about current pain points and feature gaps, not competitive dynamics.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest – 2026-05-15

## Today’s Update Brief
Anthropic shipped v2.1.142 with a new suite of `claude agents` flags and a default model upgrade for Fast mode (Opus 4.7). The community was highly active: 50 issues updated in the last 24 hours, with three hot topics drawing >50 comments each (MCP OAuth re-auth, recursive skill discovery, unhandled case error). Five pull requests were opened or updated, including a new `/new` session plugin and a hookify regression fix.

## Releases
**[v2.1.142](https://github.com/anthropics/claude-code/releases/tag/v2.1.142)** (latest, published today)
- Added flags for `claude agents`: `--add-dir`, `--settings`, `--mcp-config`, `--plugin-dir`, `--permission-mode`, `--model`, `--effort`, `--dangerously-skip-permissions` – enabling detailed configuration of dispatched background sessions.
- Fast mode now defaults to Opus 4.7 (up from Opus 4.6).

## Hot Issues (10 selected)

1. **[#59033 – BUG: Unhandled Case [object Object]](https://github.com/anthropics/claude-code/issues/59033)**
   *Platform: Windows, VS Code* – A generic error thrown without meaningful context. 50 comments, 70 👍. High community engagement, likely a serialization defect in the TUI or VS Code extension. No maintainer response noted.

2. **[#18192 – FEATURE: Recursive skill discovery](https://github.com/anthropics/claude-code/issues/18192)**
   Long-standing request (opened Jan 2026) to scan subdirectories in `~/.claude/skills/`. 34 comments, 50 👍. Workflow: users organizing skills in hierarchies are forced to symlink or flatten. No official update.

3. **[#16128 – FEATURE: AWS Bedrock auth for Chrome extension](https://github.com/anthropics/claude-code/issues/16128)**
   24 comments, 100 👍 – highest reaction count today. Enterprise teams using Bedrock need the Chrome extension to support the same auth mechanisms as the CLI. No maintainer response.

4. **[#52819 – BUG: Ultrareview crashed before findings – free credit consumed](https://github.com/anthropics/claude-code/issues/52819)**
   Running `/ultrareview` crashes before producing any output but deducts a free slot. 15 comments, 6 👍. Echoed in #53252 (same pattern). Billing+UX concern.

5. **[#56281 – BUG: Can't upgrade Max 5x → 20x; payment fails](https://github.com/anthropics/claude-code/issues/56281)**
   Payment flow broken; support unresponsive. 8 comments, 5 👍. Affects upgrade path for paying users.

6. **[#43000 – BUG: MCP OAuth with multiple terminals causes re-auth](https://github.com/anthropics/claude-code/issues/43000)**
   Opening multiple terminals triggers repeated OAuth flows. 8 comments, 3 👍. Workflow: multi-session development. Has reproduction steps.

7. **[#39826 – FEATURE: BEDROCK_AWS_PROFILE env var](https://github.com/anthropics/claude-code/issues/39826)**
   Need to decouple Bedrock auth from the current shell profile. 7 comments, 5 👍.

8. **[#37796 – BUG: Copied text includes 2-space leading indentation](https://github.com/anthropics/claude-code/issues/37796)**
   Terminal rendering padding leaks into clipboard. 6 comments, 23 👍. Annoyance for developers copy-pasting code from TUI.

9. **[#53065 – BUG: advisor() tool inflates input tokens via full transcript](https://github.com/anthropics/claude-code/issues/53065)**
   When `advisor()` calls a sub-model, the full conversation is forwarded; token sums are merged, triggering premature auto-compaction. 5 comments, 3 👍. Medium impact on extended context workflows.

10. **[#38981 – FEATURE: Hierarchical skill resolution via directory traversal](https://github.com/anthropics/claude-code/issues/38981)**
    Skills resolve up the directory tree (like `.git/`). 4 comments, 3 👍. Complements #18192; would enable global + project-level composability.

## Key PR Progress (5 total)

1. **[#59275 – Add new-session plugin with /new command](https://github.com/anthropics/claude-code/pull/59275)** (OPEN)
   Introduces `/new` to start a fresh session (contrast with `/clear` and `/branch`). Fills a gap in session lifecycle. Author: @ajaycj.

2. **[#59222 – First WSL-originated dockerized claude-code iteration](https://github.com/anthropics/claude-code/pull/59222)** (CLOSED)
   Adds Dockerfile, docker-compose, and bootstrap templates for WSL-based containerized Claude Code. Likely an internal or experimental PR.

3. **[#59151 – fix(hookify): map prompt patterns to user_prompt](https://github.com/anthropics/claude-code/pull/59151)** (OPEN)
   Fixes legacy `event: prompt` + `pattern:` rules not being matched against the `UserPromptSubmit` payload. Includes regression tests.

4. **[#23660 – feat(plugin): add timestamp-context plugin](https://github.com/anthropics/claude-code/pull/23660)** (CLOSED)
   Injects current local time (ISO 8601 + timezone) into conversation context via a `UserPromptSubmit` hook. Addresses the lack of time/zone in system prompts.

5. **[#16228 – chore: Update Node.js from 20 to 24 in devcontainer](https://github.com/anthropics/claude-code/pull/16228)** (OPEN)
   Updates the devcontainer to Node 24, as Node 20 entered maintenance. No observed breakage.

## Feature Request Clusters

- **Skill organization & loading** – Recursive discovery (#18192), hierarchical resolution (#38981), and lazy loading for plugins with many skills (#49532). All aim to reduce manual configuration and token burn.
- **AWS Bedrock authentication** – Chrome extension support (#16128), independent `BEDROCK_AWS_PROFILE` env var (#39826). Clear enterprise demand.
- **Session management** – Git branch display in UI (#59289), consistent session naming across clients (#59268), and the `/new` command (PR #59275) reflect a desire for better workspace orientation.
- **MCP & plugin infrastructure** – OAuth re-auth fix (#43000), MIME type handling for image tools (#58330), plugin terminal access (#58419), and skill path escaping (#57570) show growing pain in the MCP/plugin ecosystem.

## Developer Pain Points

- **Cost and quota surprises** – Ultrareview crashes consuming free credits (#52819, #53252), API outages burning tokens (#59286), and unexpectedly high token consumption (#59288) are top frustrations. Users feel billing is not aligned with actual value delivered.
- **Upgrade and payment friction** – Max plan upgrade fails (#56281) with no support response, blocking power users.
- **Platform-specific regressions** – Windows file stat errors (#55107), Cowork VM support (#50348), and broken Warp plugin integration after v2.1.142 (#58419) indicate CI/test gaps.
- **Data integrity** – Cowork edit silently clamping files (#59285, reproducing #52581) and persistent session corruption from unsupported MIME types (#58330) erode trust in the tool’s file-handling reliability.
- **Permission/trust dialog quirks** – `--dangerously-skip-permissions` not persisting trust (#58013) silently disables hooks and status line; enterprise managed settings `sandbox:true` not honored (#55343).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-15

## Today's Update Brief
Two incremental alpha releases were pushed for the Rust CLI (v0.131.0-alpha.16 and .18), alongside a burst of PR activity focused on remote session infrastructure, test stability, and a significant refactor of the permissions/workspace-roots system. Issue volume remains high (50 updated in 24h), with remote control onboarding bugs and reconnect loops generating the most community engagement.

## Releases
- **rust-v0.131.0-alpha.18** (`0.131.0-alpha.18`) — Iterative alpha release with no changelog detail provided.
  [View Release](https://github.com/openai/codex/releases/tag/rust-v0.131.0-alpha.18)

- **rust-v0.131.0-alpha.16** (`0.131.0-alpha.16`) — Preceding alpha on the same day, similarly unannotated.
  [View Release](https://github.com/openai/codex/releases/tag/rust-v0.131.0-alpha.16)

## Hot Issues (10 selected)

1. **Phone verification breaks SSO login**
  `#20161` — CLOSED. 123 comments, 89 👍. User reports that SSO login on a second device triggers an unskippable phone verification prompt despite having no phone on the account. Blocks cross-device session recovery entirely.
  [Issue](https://github.com/openai/codex/issues/20161)

2. **Codex Remote Control** (feature request)
  `#9224` — CLOSED. 52 comments, 401 👍. The most upvoted request in today’s data: ability to control a desktop Codex CLI from a phone via the ChatGPT app. Since closed, the feature appears to be shipping — but downstream bugs suggest rollout is rough.
  [Issue](https://github.com/openai/codex/issues/9224)

3. **Missing `/undo` command**
  `#9203` — OPEN. 43 comments, 227 👍. Users report data loss when Codex deletes/modifies files not tracked by git. The requested `/undo` was removed and has not been restored. High frustration — “bites me several times in recent days.”
  [Issue](https://github.com/openai/codex/issues/9203)

4. **Repeated "Reconnecting..." before responses**
  `#14297` — CLOSED. 35 comments. Chinese-language report of the app performing 5 reconnection cycles before every answer. Affected workflow: basic chat/editing in the app.
  [Issue](https://github.com/openai/codex/issues/14297)

5. **High GPU usage from "thinking" animation**
  `#16857` — OPEN. 29 comments, 29 👍. The tiny animated indicator while Codex is processing drives GPU load on macOS ARM. Affects battery life and fan noise for prolonged sessions.
  [Issue](https://github.com/openai/codex/issues/16857)

6. **WebSocket reconnect loop**
  `#18960` — OPEN. 25 comments, 20 👍. Pro user reports persistent streaming failures: “websocket closed by server before response.completed.” Blocks all assistant responses in the app.
  [Issue](https://github.com/openai/codex/issues/18960)

7. **Local conversations hidden after update**
  `#18364` — OPEN. 11 comments. Bogus root-level `status` sessions flood recent history in the Mac app, pushing older local conversations out of view after an update.
  [Issue](https://github.com/openai/codex/issues/18364)

8. **Multi-repo support**
  `#11956` — OPEN. 10 comments, 19 👍. Users want the ability to point Codex at multiple repositories (like Claude Code). Currently a CLI-only gap that keeps some teams on terminal workflows.
  [Issue](https://github.com/openai/codex/issues/11956)

9. **Configurable chat directory**
  `#19909` — OPEN. 9 comments, 8 👍. Hardcoded `~/Documents/Codex` folder conflicts with iCloud sync. Users request a setting to move chats to a non-synced location.
  [Issue](https://github.com/openai/codex/issues/19909)

10. **Remote control auth failures**
  `#22696` — OPEN. 7 comments, 12 👍. Setup of the new "Control from ChatGPT" remote feature fails with authorization errors on the desktop app, just after the update that enabled it.
  [Issue](https://github.com/openai/codex/issues/22696)

## Key PR Progress (10 selected)

1. **Reset stale in-progress plan steps on terminal turns**
  `#22753` (OPEN) — Caches latest plan state across forks/resumes, resets `InProgress` steps to `Pending` when no active thread goal exists. Aims to fix phantom stuck steps in resumed sessions.
  [PR](https://github.com/openai/codex/pull/22753)

2. **Show effective workspace roots in TUI summaries**
  `#22612` (OPEN) — Builds on the workspace-roots refactor to make `/status` and exec startup summaries consistently display all active roots.
  [PR](https://github.com/openai/codex/pull/22612)

3. **Permissions: use permission IDs and runtime workspace roots**
  `#22611` (OPEN, code-reviewed) — App-server migration toward a cleaner permission model tracking which workspaces each permission applies to, decoupling workspace-write from file-level permissions.
  [PR](https://github.com/openai/codex/pull/22611)

4. **Hide deferred tools from code mode prompt**
  `#22740` (OPEN) — Keeps deferred tools available at runtime but removes them from the prompt-visible exec description, fixing a full-CI failure.
  [PR](https://github.com/openai/codex/pull/22740)

5. **Graceful interruption for shell commands**
  `#22729` (OPEN) — Sends SIGTERM before SIGKILL when a running shell command is cancelled mid-turn, giving processes time to clean up (e.g. flush logs, close DB handles).
  [PR](https://github.com/openai/codex/pull/22729)

6. **Permissions: workspace roots in profiles**
  `#22610` (CLOSED, code-reviewed) — Core config/model half of the permissions rewrite: adds `workspace_roots` to permission profiles, separating workspace-write from blanket write access.
  [PR](https://github.com/openai/codex/pull/22610)

7. **Subagent start/stop hooks**
  `#22720` (OPEN) — Adds `SubagentStart` and `SubagentStop` lifecycle hooks, enabling plugins to run logic when a subagent is spawned or completes.
  [PR](https://github.com/openai/codex/pull/22720)

8. **Remove deprecated `experimental_instructions_file`**
  `#22724` (CLOSED) — Cleans up the config surface: the old setting is removed; `model_instructions_file` is now the only supported path.
  [PR](https://github.com/openai/codex/pull/22724)

9. **CI: signed macOS release promotion**
  `#22737` (CLOSED) — Enables a resume path for previously-unsigned macOS artifacts to be re-signed and promoted, unblocking notarized releases.
  [PR](https://github.com/openai/codex/pull/22737)

10. **Add `user_input_requested_during_turn` to MCP metadata**
  `#22237` (CLOSED, code-reviewed) — Surfaces whether the model requested user input during a turn in MCP turn metadata, so MCP servers can react appropriately.
  [PR](https://github.com/openai/codex/pull/22237)

## Feature Request Clusters

**Remote/cross-device workflow** (5+ issues today alone)
A strong cluster around controlling a desktop Codex session from a phone or tablet:
- `#9224` (original request, now closed — 401 👍)
- `#22696` (auth failure on setup)
- `#22700` (revoked device cannot be unpaired from iOS)
- `#19681` (iOS Codex app controlling Mac, 7 👍)
- `#21849` (dispatch-like task sending to desktop)
- `#22701`, `#22714`, `#22733` (pairing/deletion bugs on iOS and Windows)

**Session / state management**
- `#9203` — bring back `/undo` (227 👍)
- `#11956` — multi-repo support (19 👍)
- `#19909` — configurable chat directory (8 👍)

## Developer Pain Points

- **Reconnect / streaming failures**: Multiple reports (`#18960`, `#14297`) of the app entering a reconnect loop before or during responses, rendering the app unusable for minutes at a time.
- **High GPU usage from trivial animations** (`#16857`): The "thinking" indicator wastes battery on laptops; no toggle is available.
- **Local history loss after updates** (`#18364`): Bogus `status` sessions push real conversations out of the sidebar, forcing users to rediscover them manually.
- **Desktop pet overlay not always-on-top on Windows** (`#21313`, `#21366`): The cute pet feature breaks on Windows 11 after opening other windows — minor but consistently reported.
- **Environment variable pollution in VS Code** (`#13694`): The extension sets `DEBUG="release"` globally, breaking other tools that read that variable.
- **Updater stuck after clicking Update** (`#17413`): Sparkle-based auto-update leaves Codex idle without restarting, requiring a manual kill.
- **Remote control pairing is sticky/broken** (`#22700`, `#22701`, `#22714`): Once a device is paired, there is no UI to remove it; stale connections block re-pairing.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-15

## Today’s Update Brief
A nightly release (v0.44.0-nightly) landed with a CI fix and ongoing agent refactoring toward skills-based composition. Activity remains high across the repo with 50+ issues and PRs updated in the last 24 hours, and maintainers are heavily engaged on subagent reliability, memory system bugs, and infrastructure evaluaions.

## Releases
- **[v0.44.0-nightly.20260514.g77078b3e8](https://github.com/google-gemini/gemini-cli/releases/tag/v0.44.0-nightly.20260514.g77078b3e8)**
  - `fix(ci)`: replaced brittle `--no-tag` with explicit staging-tmp tag
  - `Incremental refactor repo agent towards skills-based composition`

## Hot Issues
Selected 10 noteworthy issues reflecting active discussion and maintainer attention:

1. **[#1957 — [CLOSED] Utilize Gemma](https://github.com/google-gemini/gemini-cli/issues/1957)** (32 comments, 19 👍)
   Long-running feature request to integrate Gemma models. Maintainer-only discussion closed without resolution. Signal of interest from users comparing to Claude/Codex.

2. **[#22634 — v3 flash quota consumed super fast (P2, enterprise)](https://github.com/google-gemini/gemini-cli/issues/22634)** (10 comments, 4 👍)
   User reports requests burning through rate limits faster than before. Impact: blocking coding tasks. No maintainer resolution yet; status `need-information`.

3. **[#22745 — AST-aware file reads, search, and mapping (EPIC, P2)](https://github.com/google-gemini/gemini-cli/issues/22745)** (7 comments, 1 👍)
   Maintainer-driven investigation into whether AST-aware tools (e.g., tilth, glyph) can reduce wasted tokens and turns in codebase reading. Sub-issues at [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) and [#22747](https://github.com/google-gemini/gemini-cli/issues/22747).

4. **[#24353 — Robust component-level evaluations (EPIC, P1)](https://github.com/google-gemini/gemini-cli/issues/24353)** (6 comments)
   Follow-up to behavioral eval infra (#15300). Currently 76 eval tests across 6 models. Maintainer-led effort to improve test reliability.

5. **[#22323 — Subagent recovery after MAX_TURNS reports false success (P1, bug)](https://github.com/google-gemini/gemini-cli/issues/22323)** (6 comments, 2 👍)
   `codebase_investigator` subagent reports `GOAL` success even when hitting turn limits before doing any analysis. Misleads users and downstream agents.

6. **[#21968 — Gemini doesn’t use custom skills/sub-agents autonomously (P2, bug)](https://github.com/google-gemini/gemini-cli/issues/21968)** (6 comments)
   Anecdotal report: skills defined by users (e.g., gradle, git) are ignored unless explicitly invoked. Suggests poor skill selection heuristics.

7. **[#25615 — Windows: `run_shell_command` infinite UI loop consumes 99% tokens (P1, bug, closed)](https://github.com/google-gemini/gemini-cli/issues/25615)** (5 comments)
   Recursive ANSI/UI refresh loop in PowerShell 5.1 when agent calls `gemini "/stats model"`. Identified and closed; likely fix is in the nightly.

8. **[#21983 — browser subagent fails in Wayland (P1, bug)](https://github.com/google-gemini/gemini-cli/issues/21983)** (4 comments, 1 👍)
   Browser subagent terminates with `GOAL` but provides no output. Wayland-specific; status `need-retesting`.

9. **[#23721 — Annoying Gemini 3 preview access (P2, enterprise)](https://github.com/google-gemini/gemini-cli/issues/23721)** (3 comments)
   User with Code Assist plan does not want preview models forced; CLI auto-routes to gemini-3-preview. No way to pin stable channel.

10. **[#25166 — Shell command stuck "Waiting input" after completion (P1, bug)](https://github.com/google-gemini/gemini-cli/issues/25166)** (3 comments, 3 👍)
    After simple commands, CLI hangs showing "Awaiting user input". Recurring and high user frustration.

## Key PR Progress
Selected 10 significant PRs updated in the last 24 hours:

1. **[#27070 — Optimize VirtualizedList and scrolling (P1)](https://github.com/google-gemini/gemini-cli/pull/27070)**
   Large optimization for `VirtualizedList` with fix for flaky plan-mode tests and checkpoint scrolling. Maintainer @jacob314 driving.

2. **[#26873 — Fix MCP resource discovery with null lists (P2)](https://github.com/google-gemini/gemini-cli/pull/26873)**
   Some MCP servers return `resources: null` instead of `[]`; this PR treats both cases as no-resources, fixing crashes for servers like `mcp-server-sqlite`.

3. **[#27077 — Security dependency updates (critical/high vulns)](https://github.com/google-gemini/gemini-cli/pull/27077)**
   Upgrades `@grpc/grpc-js` and OpenTelemetry packages to patch critical vulnerabilities.

4. **[#26361 — Externalize `https-proxy-agent` for proxy support (P1, merged)](https://github.com/google-gemini/gemini-cli/pull/26361)**
   Fixes `HttpsProxyAgent is not a constructor` for users behind HTTP/HTTPS proxies on Vertex AI. Long-standing P1 blocker now resolved.

5. **[#27073 — A2A server default policy loading (P1, security)](https://github.com/google-gemini/gemini-cli/pull/27073)**
   A2A server now inherits CLI’s default policies (including read-only), keeping security posture synchronized.

6. **[#27059 — Clear entrypoint when spawning sandbox container (P1, merged)](https://github.com/google-gemini/gemini-cli/pull/27059)**
   Adds `--entrypoint ""` to Docker/Podman commands to prevent image entrypoint from interfering with sandbox execution.

7. **[#26522 — Stop Auto Memory retrying low-signal sessions (P2)](https://github.com/google-gemini/gemini-cli/pull/26522)**
   Fixes infinite retry loop when extraction agent skips a session as low-signal; now marks as processed.

8. **[#26951 — Implement issue-fixer bot skill (P2)](https://github.com/google-gemini/gemini-cli/pull/26951)**
   New `issue-fixer` skill for the CLI bot, with manual mandate selection via `workflow_dispatch`. Enables autonomous bug fixing.

9. **[#27015 — Triage label lifecycle overhaul](https://github.com/google-gemini/gemini-cli/pull/27015)**
   Comprehensive rework of stale issue handling and label consistency to stop bot comment spam and triage loops.

10. **[#27054 — Windows image pasting and clipboard styling (P2)](https://github.com/google-gemini/gemini-cli/pull/27054)**
    Enables seamless image paste in Windows Terminal with proper bracketed-paste handling. Fixes #27052.

## Feature Request Clusters

**AST-aware tooling** — Multiple issues from @gundermanc (EPIC #22745, sub-issues #22746, #22747) propose using AST-aware CLIs for file reads, searches, and codebase mapping. Goal: reduce token waste and imprecise reads. Community interest is moderate (1-2 👍 each).

**Auto Memory / Memory system improvements** — A cluster of bugs (#26516, #26522, #26523, #26525) filed by @SandyTao520 target: infinite retry loops, silent patch invalidation, secret redaction before model exposure, and noisy logging. Indicates active internal QA push on the memory subsystem.

**Sub-agent & skill utilization** — Several issues (#21968, #22323, #21983) report that the agent does not autonomously invoke custom skills or handle subagent failures gracefully. Feature requests hint at better skill selection, recovery, and configuration inheritance.

**Security and policy hardening** — Requests for deterministic redaction (#26525), default policy loading (#27073), and destructive command guardrails (#22672) reflect growing enterprise demand for safety controls.

## Developer Pain Points
- **Agent behavior inconsistencies**: Custom skills ignored, subagents lying about success (MAX_TURNS), browser agent ignoring `settings.json` overrides, and destructive git commands used unnecessarily.
- **Quota and token overhead**: V3 flash quota consumed unexpectedly fast; `run_shell_command` causing infinite loops on Windows; model creating temp scripts in random spots.
- **Platform-specific bugs**: Windows PowerShell terminal corruption, Wayland browser failures, shell alias support missing, pnpm global path not detected.
- **Configuration and model routing**: Inability to pin stable models (Gemini 3 preview forced), auto-routing preferences ignored.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-15

## Today's Update Brief

A patch release (v1.0.48) shipped yesterday addressing three user-facing issues: token price display for billing users, glob pattern handling in instruction files, and CJK/emoji rendering. Issue activity remains high with 37 items updated in the last 24 hours, including several newly filed triage reports around session startup behavior and terminal UX. No pull requests were merged or updated today.

## Releases

**v1.0.48** (2026-05-14)
- Model picker now shows actual token prices instead of dot indicators for token-based billing users
- Instruction files with unquoted glob patterns in `applyTo` frontmatter (e.g. `applyTo: **/*.ts`) are now applied correctly
- Input text with CJK characters or emoji no longer renders with blank gaps

*A duplicate patch (v1.0.48-2) was cut shortly after, fixing the same glob pattern issue.*

https://github.com/github/copilot-cli/releases/tag/v1.0.48

## Hot Issues

1. **#3181: Remove automatic co-author to Copilot CLI commits** (CLOSED)
   - *Author:* @christianhelle | *Comments:* 6 | *Issue:* https://github.com/github/copilot-cli/issues/3181
   - User objects to AI being listed as a co-author in git commits. The proposal is to either remove the behavior entirely or add a toggle. The issue is now closed but the resolution is not documented in the data.

2. **#3288: Linux crash on editing large diffs** (CLOSED)
   - *Author:* @pscabot | *Comments:* 6 | *Issue:* https://github.com/github/copilot-cli/issues/3288
   - CLI crashes in `src/runtime/diff/src/lib.rs:69:44` when editing a file with ~15,000 lines and 8 hunks. Affects versions 1.0.43–1.0.46. Now closed, suggesting a fix was applied in a recent release.

3. **#3304: ERR_HTTP2_INVALID_SESSION — repeated transient retries** (OPEN)
   - *Author:* @sriadd | *Comments:* 2 | *Issue:* https://github.com/github/copilot-cli/issues/3304
   - Frequent HTTP/2 session destruction errors during long reasoning responses. Workflow is interrupted mid-turn with no recovery path.

4. **#3306: Native addon "runtime" not found for win32-arm64** (OPEN)
   - *Author:* @AugP | *Comments:* 2 | *Issue:* https://github.com/github/copilot-cli/issues/3306
   - CLI fails completely on Windows ARM64 after update. Uninstall/reinstall via winget does not resolve. Blocks all usage on that platform.

5. **#2779: Automatic MCP Server Token Refresh** (OPEN)
   - *Author:* @liujacky2001 | *Comments:* 2 | *Issue:* https://github.com/github/copilot-cli/issues/2779
   - OAuth tokens for MCP servers expire during long-running autopilot workflows, causing silent failures with `AADSTS9010010` errors. Community upvoted (2 👍).

6. **#1826: Support multi-root workspaces via .code-workspace file** (OPEN)
   - *Author:* @boazwasserman | *Comments:* 2 | *Issue:* https://github.com/github/copilot-cli/issues/1826
   - CLI does not discover instruction files (e.g., `AGENTS.md`) in additional workspace folders referenced by `.code-workspace`. 11 👍 indicate strong community interest.

7. **#3314: Significant reduction in context windows** (CLOSED)
   - *Author:* @Stono | *Comments:* 2 | *Issue:* https://github.com/github/copilot-cli/issues/3314
   - Context window dropped from 304k to 128k between v1.0.46 and v1.0.47. Now closed, likely resolved in v1.0.48.

8. **#3330: macOS CA certificate call adds 5+ seconds to every invocation** (OPEN)
   - *Author:* @Joi | *Comments:* 1 | *Issue:* https://github.com/github/copilot-cli/issues/3330
   - On macOS, `tls.getCACertificates("system")` iterates every keychain cert and invokes `SecTrustEvaluateWithError` synchronously, adding significant latency to every CLI start.

9. **#3276: GLIBC version mismatch on Rocky Linux 8.10** (OPEN)
   - *Author:* @zapdos26 | *Comments:* 1 | *Issue:* https://github.com/github/copilot-cli/issues/3276
   - Native modules require `GLIBC_2.29` through `GLIBC_2.34`, which are not available on Rocky Linux 8.10 (GLIBC 2.28). Blocks all CLI usage on that platform.

10. **#3322: Post-plan-approval system message contradicts itself** (OPEN)
    - *Author:* @grantborthwick | *Comments:* 0 | *Issue:* https://github.com/github/copilot-cli/issues/3322
    - After plan approval, the tool result says both "edits require manual approval" and "Proceed with implementing," causing models to stop instead of starting work.

## Key PR Progress

No pull requests were merged or updated in the last 24 hours.

## Feature Request Clusters

**Terminal Rendering & UX Improvements**
Multiple requests around terminal behavior: disabling auto-scroll during streaming (#2372, #3324), adding a keyboard shortcut for model selection mid-prompt (#3320), and distinguishing "working" vs "awaiting input" status in the title bar (#3327). Non-English text wrapping is also broken (#3325).

**MCP Server Lifecycle & Reliability**
OAuth token refresh during long sessions (#2779), MCP servers not finishing connection before first prompt execution (#3329), and repeated authorization prompts for Atlassian MCP (#2536) indicate broader instability in the MCP integration flow.

**Enterprise & Org Monitoring**
Admins request visibility into CLI usage across organizations — skill invocation counts, reliability metrics, and per-user activity (#3305). Also: ability to select which org's Copilot seat to use (#2940).

## Developer Pain Points

**Performance Degradation**
Users report sudden context window reductions (#3314) and macOS startup latency spikes (#3330). The latter is caused by a synchronous system certificate enumeration on every invocation.

**Platform Compatibility Gaps**
Linux users on older distributions (Rocky Linux 8.10) and Windows ARM64 users face complete startup failures due to native module linking issues (#3276, #3306). No workaround is documented.

**Plugin & Agent Management Frustrations**
Auto-update silently prevents custom agents from loading (#3328), plugin updates require manual steps with no auto-update mechanism (#3331), and Windows users cannot install plugins from repositories using git symlinks (#2286).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-15

## Today's Update Brief

Today marks a moderately active day for the Kimi Code CLI project, with a minor version release (1.44.0) shipped and a surge of community-driven issues and pull requests — many filed by a single contributor (ktwu01) covering documentation, security, and installer bugs. The most significant community tension centers around perceived K2.6 model performance degradation and persistent `429 engine_overloaded` errors, alongside active PR development on `/goal` command parity, MCP tool collision fixes, and Windows stability improvements.

## Releases

**Version 1.44.0** was released in the last 24 hours. This is a minor release containing:
- Telemetry refactoring: side questions in BTW mode are now tracked as `tool_call` events
- Version bump across kimi-cli and kimi-code packages

Full changelog: [https://github.com/MoonshotAI/kimi-cli/compare/1.43.0...1.44.0](https://github.com/MoonshotAI/kimi-cli/compare/1.43.0...1.44.0)

## Hot Issues

### 1. [#2077: K2.6 model overloaded – unusable under normal load](https://github.com/MoonshotAI/kimi-cli/issues/2077)
- **Status:** Open | **Updated:** 2026-05-14 | **Comments:** 10 | **👍:** 1
- **Impact:** Allegretto-tier users report the K2.6 model is constantly returning retry/overloaded errors under what they consider normal usage.
- **Community reaction:** Ongoing frustration — the issue has been open since late April with no resolution comment from maintainers.

### 2. [#2268: Insane degradation since model change](https://github.com/MoonshotAI/kimi-cli/issues/2268)
- **Status:** Open | **Updated:** 2026-05-14 | **Comments:** 2 | **👍:** 2
- **Impact:** A user reports a stark contrast: v1.30.0 with the old `kimi-for-coding` model completed tasks reliably, but after updating to v1.43.0 with `k2.6`, the same tasks fail or behave "insanely" degraded.
- **Community reaction:** This is the strongest signal of model regression in today's data — the most-liked active issue.

### 3. [#2209: Persistent 429 engine_overloaded for 48+ hours on cloud server](https://github.com/MoonshotAI/kimi-cli/issues/2209)
- **Status:** Open | **Updated:** 2026-05-14 | **Comments:** 2 | **👍:** 3
- **Impact:** A remote Linux server user has been unable to get any CLI response for over 48 hours due to `429 engine_overloaded` errors. The user upgraded from v1.24.0 to v1.41.0 — no change. Diagnostic files have been exported.
- **Community reaction:** Three thumbs-up suggests this is affecting multiple users in headless/server deployments.

### 4. [#1623: Kimi Web refreshes pages intermittently](https://github.com/MoonshotAI/kimi-cli/issues/1623)
- **Status:** Open | **Updated:** 2026-05-15 | **Comments:** 6 | **👍:** 1
- **Impact:** A long-standing bug (since March) where the Kimi Web interface auto-refreshes during use, disrupting workflows. Windows x64 user.
- **Community reaction:** While activity is low, the duration (48+ days open) is notable.

### 5. [#1927: Subagent infinite loop reading same file](https://github.com/MoonshotAI/kimi-cli/issues/1927)
- **Status:** Open | **Updated:** 2026-05-14 | **Comments:** 5 | **👍:** 0
- **Impact:** The subagent repeatedly reads the same file hundreds of times, creating an infinite loop. This blocks multi-agent workflows.
- **Community reaction:** No strong upvotes, but the detailed description and 5 comments suggest a real, reproducible bug.

### 6. [#2279: Web mode re-sends images to LLM after session restore](https://github.com/MoonshotAI/kimi-cli/issues/2279)
- **Status:** Open | **Updated:** 2026-05-14 | **Comments:** 1 | **👍:** 0
- **Impact:** When restoring a web session, previously uploaded images are re-sent to the LLM, wasting context and potentially corrupting the conversation state.
- **Community reaction:** Freshly filed; a PR (#2288) is already open to fix this.

### 7. [#2273: Auto-updater downloads + executes binary with no integrity verification](https://github.com/MoonshotAI/kimi-cli/issues/2273)
- **Status:** Open | **Updated:** 2026-05-14 | **Comments:** 0 | **👍:** 0
- **Impact:** The auto-updater (1) downloads binaries via HTTP without SHA256/signature verification, (2) uses unfiltered `tarfile.extractall`, creating a supply-chain attack vector.
- **Community reaction:** Filed by ktwu01; a corresponding PR (#2285) is already open to address the tarfile component.

### 8. [#2272: install.sh doesn't source uv's env after installation](https://github.com/MoonshotAI/kimi-cli/issues/2272)
- **Status:** Open | **Updated:** 2026-05-14 | **Comments:** 0 | **👍:** 0
- **Impact:** First-time bash installer users get `uv: command not found` or `kimi: command not found` because `~/.local/bin` isn't on PATH. The Windows installer handles this correctly.
- **Community reaction:** Filed by ktwu01; two PRs (#2283, #2286) are already open to fix this.

### 9. [#2271: README "Getting Started" is a double redirect](https://github.com/MoonshotAI/kimi-cli/issues/2271)
- **Status:** Open | **Updated:** 2026-05-14 | **Comments:** 0 | **👍:** 0
- **Impact:** The install command is not in the README — users must follow a link to docs, then scroll past introductory content to find it. New user friction.

### 10. [#2277: "kimi code unable to process" after typing debug prompt](https://github.com/MoonshotAI/kimi-cli/issues/2277)
- **Status:** CLOSED | **Updated:** 2026-05-14
- **Impact:** User on macOS ARM typed a debug prompt and the CLI became unresponsive. Closed without resolution comment visible in the data.

## Key PR Progress

### 1. [#2276: feat(soul): add /goal slash command with stateful goal management](https://github.com/MoonshotAI/kimi-cli/pull/2276)
- **Author:** CommanderCrowCode | **Status:** Open
- **Summary:** Implements feature parity with Claude Code's `/goal` command. Includes goal state persistence (objective, status, token budget, elapsed time), subcommands for create/pause/resume/status, and token budget tracking. Closes #2218.
- **Significance:** A major UX feature requested by the community — mirrors Codex/Claude Code workflows.

### 2. [#2288: fix: avoid resending web uploads after restart](https://github.com/MoonshotAI/kimi-cli/pull/2288)
- **Author:** he-yufeng | **Status:** Open
- **Summary:** Persists a `.sent` marker on web uploads so that after session restart, already-sent images are not re-attached to prompts. Includes regression test. Fixes #2279.

### 3. [#2289: fix: avoid Windows console font reset](https://github.com/MoonshotAI/kimi-cli/pull/2289)
- **Author:** he-yufeng | **Status:** Open
- **Summary:** Passes `CREATE_NO_WINDOW` flag when spawning subprocesses on Windows to prevent the console font from resetting. Includes focused regression test. Fixes #2197.

### 4. [#2285: fix(update): use filter='data' on tarfile.extractall](https://github.com/MoonshotAI/kimi-cli/pull/2285)
- **Author:** ktwu01 | **Status:** Open
- **Summary:** One-line fix adding `filter="data"` to the auto-updater's `tarfile.extractall` call. Addresses part of #2273 (PEP 706 / CVE-2007-4559 defense).

### 5. [#2284: fix: fire notification hooks for approvals](https://github.com/MoonshotAI/kimi-cli/pull/2284)
- **Author:** he-yufeng | **Status:** Open
- **Summary:** Ensures the `Notification` hook fires when an approval request is created, including approval details in the payload. Fixes #2281.

### 6. [#2280: feat(toolset): trigger cross-step dedup reminder only after 7 consecutive repeats](https://github.com/MoonshotAI/kimi-cli/pull/2280)
- **Author:** jackfish212 | **Status:** Open
- **Summary:** Raises the threshold for cross-step deduplication reminders from "any repeat" to "7 consecutive identical calls" to reduce noise from legitimate repeated tool usage.

### 7. [#2282: fix(mcp): prefix mcp tool names with server name to avoid collisions](https://github.com/MoonshotAI/kimi-cli/pull/2282)
- **Author:** salmandeniz | **Status:** Open
- **Summary:** Fixes a bug where multiple MCP servers exposing tools with the same name would overwrite each other. Now prefixes tool names with the server name.

### 8. [#2259: fix: redirect stdio MCP stderr to logs](https://github.com/MoonshotAI/kimi-cli/pull/2259)
- **Author:** he-yufeng | **Status:** Open
- **Summary:** Routes stdio MCP subprocess stderr to `~/.kimi/logs/mcp/<server>.log` instead of the interactive terminal.

### 9. [#2287: docs(readme): add prerequisites list to Development section](https://github.com/MoonshotAI/kimi-cli/pull/2287)
- **Author:** ktwu01 | **Status:** Open
- **Summary:** Adds a prerequisite subsection listing what contributors need installed before `make prepare`. Resolves #2274.

### 10. [#2246: feat(shell): add --prompt-interactive option](https://github.com/MoonshotAI/kimi-cli/pull/2246)
- **Author:** shuizhongyueming | **Status:** Open
- **Summary:** Adds a `-P` / `--prompt-interactive` flag that passes an initial prompt and keeps the interactive session open. Resolves #2240.

## Feature Request Clusters

**1. Claude Code / Codex Feature Parity**
Three issues today directly request features that exist in competing tools (Claude Code, Codex):
- `/goal` command (#2252, already implemented in PR #2276)
- `Shift+Tab` YOLO mode toggle (#2292)
- "rewind" option to step back in session history (#2290)

**2. Multi-Device / Session Mobility**
Issue #2269 requests the ability to start a session on one device and seamlessly continue or remotely control it from another (laptop, web, mobile). No existing PR addresses this.

**3. Multi-Agent Workflow Enhancements**
- Configurable background task limits with queued subagents (#2157) — currently hard-capped at 4.
- Cross-step dedup threshold tuning (PR #2280 addresses this indirectly).

**4. CLI Usability Improvements**
- Removal of the constantly-updating context usage indicator (#2291) — cited as visually distracting
- One-step "export + send to support" command (#2293) — to replace the current two-step manual flow
- Better error messages for `429` / rate-limit errors (implied by multiple issues)

## Developer Pain Points

**1. K2.6 Model Instability (Highest Severity)**
Multiple reports (#2077, #2268, #2209) describe the K2.6 model as unreliable — either constantly returning `429 engine_overloaded`, or exhibiting degraded behavior compared to the previous `kimi-for-coding` model. This appears to be the single largest source of community frustration today.

**2. Installer & Onboarding Friction**
Issue #2272 (bash installer doesn't source uv's env) and issue #2271 (README "Getting Started" is a link not a command) create immediate friction for first-time users. Two PRs are already open to address the installer bug.

**3. Security & Supply Chain Concerns**
Issue #2273 documents that the auto-updater downloads unsigned binaries and uses unsafe tarfile extraction. This affects all users who use the auto-update feature.

**4. Subagent & Background Task Reliability**
Issue #1927 (subagent infinite loop) and issue #2157 (hard cap of 4 subagents with no graceful queuing) highlight ongoing pain points for users running multi-agent workflows.

**5. Windows-Specific Bugs**
Issue #1623 (Web page auto-refresh) and the Windows console font reset bug (addressed in PR #2289) indicate platform-specific stability issues that affect a subset of users.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-15

## Today's Update Brief
Two patches shipped (v1.14.50 and v1.14.51) addressing worktree creation, HTTP streaming, and busy‑error handling. Community activity remains high: 50 issues and 50 pull requests updated in the last 24 hours, with a notable spike in reports of a TUI renderer crash on Windows/Linux and a supply‑chain security question.

## Releases

### v1.14.51
- **Experimental background subagents** – tasks can now continue running while you work.
- NVIDIA endpoint now sends the required billing origin header (thanks @nv‑kasikritc).
- **Bugfixes**: fixed worktree creation requests that omitted the POST body; fixed session grouping (truncated in description).

### v1.14.50
- **Bugfixes**: kept HTTP event streams open after initial connect so subscribers receive instance updates; returned proper busy errors when a session is already running prompt/shell work; invalid `small_model` config values now fall back cleanly.

## Hot Issues

1. **[#8030] Copilot auth marking agent requests as “user” – premium quota drain**
   *Closed* – 225 comments, 79 👍
   Copilot’s Opus 4.5 consumed half a monthly quota in one morning because ~60 agent‑initiated requests were not tagged with `X-Initiator: agent`.
   [Link](https://github.com/anomalyco/opencode/issues/8030)

2. **[#13984] Cannot copy & paste in OpenCode CLI**
   *Open* – 36 comments, 15 👍
   “Copied to clipboard” shows, but Ctrl+V pastes nothing. Affects many modes.
   [Link](https://github.com/anomalyco/opencode/issues/13984)

3. **[#16100] Numpad keys ignored inside VS Code 1.110 integrated terminal**
   *Open* – 23 comments, 18 👍
   TUI does not register numpad keys (0‑9, Enter, decimal, operators) when running inside VS Code’s terminal, though they work in external terminals.
   [Link](https://github.com/anomalyco/opencode/issues/16100)

4. **[#27589] TUI fails on Alpine Linux (musl) after v1.14.50**
   *Open* – 8 comments
   `getcontext` symbol not found regression. Works in v1.14.48, broken in v1.14.50.
   [Link](https://github.com/anomalyco/opencode/issues/27589)

5. **[#26198] Terminal flooded with raw mouse escape sequences (SGR)**
   *Open* – 9 comments, 2 👍
   Mouse tracking is not disabled when a process exits, leaving the terminal in raw mode.
   [Link](https://github.com/anomalyco/opencode/issues/26198)

6. **[#7555] Session Changes diff shows origin/main instead of base branch**
   *Open* – 8 comments, 3 👍
   Modified files panel in Desktop/TUI diffs against `origin/main` rather than the actual branch.
   [Link](https://github.com/anomalyco/opencode/issues/7555)

7. **[#23442] SSE JSON parse failure with GLM‑5.1 (Z.AI)**
   *Open* – 6 comments
   Model hallucinates SSE‑formatted text; unescaped quotes kill the stream.
   [Link](https://github.com/anomalyco/opencode/issues/23442)

8. **[#26665] MiniMax provider cannot read local images**
   *Closed* – 5 comments
   VLM tool fails to send screenshots to MiniMax vision endpoint, though Claude Code + MiniMax works.
   [Link](https://github.com/anomalyco/opencode/issues/26665)

9. **[#24870] DeepSeek V4 `content[].thinking` error**
   *Open* – 4 comments, 1 👍
   API rejects thinking‑mode payload unless the exact `content[].thinking` is echoed back.
   [Link](https://github.com/anomalyco/opencode/issues/24870)

10. **[#27646] Safety of updating during ongoing supply‑chain attack**
    *Open* – 1 comment
    References the “Mini Shai‑Hulud” worm spreading through package registries; asks whether updating OpenCode is safe.
    [Link](https://github.com/anomalyco/opencode/issues/27646)

## Key PR Progress

1. **[#27651] fix TUI `@` autocomplete with CJK prefixes**
   *Closed* – CJK text before the `@` now correctly triggers file/mention completion.
   [Link](https://github.com/anomalyco/opencode/pull/27651)

2. **[#27643] Implement `/find/symbol` LSP endpoint**
   *Open* – Connects the undefined API route to `LSP.Service.workspaceSymbols`.
   [Link](https://github.com/anomalyco/opencode/pull/27643)

3. **[#26949] Virtualize session timeline rows (beta)**
   *Open* – Upgrades virtua and renders timeline at row‑granularity instead of full turns, improving performance for long sessions.
   [Link](https://github.com/anomalyco/opencode/pull/26949)

4. **[#27649] Fix multiline mentions in TUI prompt**
   *Open* – `@file` autocomplete now works after newlines; adds wide‑character/newline offset tests.
   [Link](https://github.com/anomalyco/opencode/pull/27649)

5. **[#27635] Handle undefined tips in TUI**
   *Open* – Prevents `matchAll` crash when tips data is pending. Falls back to `/connect` tip.
   [Link](https://github.com/anomalyco/opencode/pull/27635)

6. **[#27641] Sanitize Gemini schema `$ref` references**
   *Open* – Gemini rejects schemas with a `$ref` alongside other properties; this strips incompatible constructs.
   [Link](https://github.com/anomalyco/opencode/pull/27641)

7. **[#27504] Pass empty body to worktree creation API**
   *Closed* – Fixes “Expected WorktreeCreateInput | null, got undefined” (also closed by #27466).
   [Link](https://github.com/anomalyco/opencode/pull/27504)

8. **[#27639] Pre‑scan circular symlinks to prevent ENAMETOOLONG crash**
   *Open* – Skill scanning on Bun now avoids infinite symlink chains.
   [Link](https://github.com/anomalyco/opencode/pull/27639)

9. **[#27114] Preview native LLM runtime stack**
   *Open* – Opt‑in native runtime alongside AI SDK; uses shared `LLMEvent` shape. Adds OpenAI Responses native request.
   [Link](https://github.com/anomalyco/opencode/pull/27114)

10. **[#27632] Insert skill name without wiping existing prompt text**
    *Open* – Skill picker now inserts the skill name instead of replacing the whole prompt. Closes four related issues.
    [Link](https://github.com/anomalyco/opencode/pull/27632)

## Feature Request Clusters

- **TUI polish** – Multiple requests for better autocomplete (skills, CJK), paste reliability, and numpad support (issues #13984, #16100, #22129, #27647).
- **Provider compatibility improvements** – Gemini schema refs, MiniMax vision, DeepSeek thinking mode, GLM‑5.1 streaming (issues #26665, #24870, #23442, #12295).
- **External context / output schema** – MCP `outputSchema` exposure to LLMs (#27577) and the RLM (Recursive Language Model) paradigm for external context storage (#11829).
- **Security awareness** – Users asking about supply‑chain safety during package‑level worm outbreaks (#27646).

## Developer Pain Points

- **“No renderer found” crash** – At least six reports (issues #27452, #27522, #27617, #27591, #27465, #27552) of a fatal TUI error on both Windows and Linux after update, all pointing to `opencode-sdd-engram-manage`.
- **Clipboard and paste failures** – Two concurrent issues (#13984, #27647) describing “copied to clipboard” false‑positive and pasting breaking on special characters.
- **Terminal state pollution** – Mouse escape sequences left enabled after command execution (#26198).
- **Alpine Linux (musl) regression** – v1.14.50 broke TUI with a missing `getcontext` symbol (#27589).
- **Worktree creation body handling** – Multiple PRs (#27504, #27466) resolved a missing‑body bug that prevented workspace creation; the issue had 5 👍 in a day.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest – 2026-05-15

## Today's Update Brief
No new releases were published in the last 24 hours, but the project saw high activity with 23 updated issues and 50 PRs updated. The community is actively discussing memory exhaustion problems (OOM/heap issues), a major proposal for a daemon mode with TUI+HTTP, and several integration bugs with local model servers and MCP tool availability.

## Releases
*No new releases in the last 24 hours.*

## Hot Issues
*Picking 10 noteworthy issues covering the most active topics.*

1. **[#4149 – FATAL ERROR: Ineffective mark-compacts near heap limit — JavaScript heap out of memory](https://github.com/QwenLM/qwen-code/issues/4149)**
   User reports repeated heap OOM during normal operation. GC logs show memory climbing toward 4 GB limit. Opened 2026-05-14, 4 comments.

2. **[#4116 – Problem critical error (OOM in Russian locale)](https://github.com/QwenLM/qwen-code/issues/4116)**
   Similar heap out-of-memory crash, user provides full Node.js stack. Opened 2026-05-13, 4 comments.

3. **[#3803 – Daemon mode (qwen serve): proposal & open decisions](https://github.com/QwenLM/qwen-code/issues/3803)**
   Comprehensive 14-chapter design series for a daemon architecture. Stage 1 already merged; further stages under discussion. 5 comments, 1 👍.

4. **[#4156 – proposal(serve): qwen --serve (Mode A) — TUI + in-process HTTP daemon, 3-phase plan](https://github.com/QwenLM/qwen-code/issues/4156)**
   Follow-up to #3803, proposes combining TUI with an embedded HTTP daemon (Mode A) so local users and remote clients share the same process. 3 comments.

5. **[#4152 – "Unable to connect to the local ollama server"](https://github.com/QwenLM/qwen-code/issues/4152)**
   `qwen-code` fails to connect to Ollama despite `curl` working. User suspects a regression. Opened 2026-05-14, 3 comments.

6. **[#4163 – MCP tools silently unavailable in headless --prompt mode](https://github.com/QwenLM/qwen-code/issues/4163)**
   After progressive-MCP rollout (#3994), running `qwen --prompt` against an MCP server no longer exposes tools to the model. Opened 2026-05-15, 0 comments (new).

7. **[#4139 – 400 error "tool result's tool id not found" with minimax model](https://github.com/QwenLM/qwen-code/issues/4139)**
   Using minimax codeplan model triggers a tool ID mismatch error, breaking all subsequent conversations. 2 comments.

8. **[#4091 – Feature Request: Add project-level local context file (QWEN.local.md)](https://github.com/QwenLM/qwen-code/issues/4091)**
   Request for a `.qwen/QWEN.local.md` that is gitignored and auto-loaded alongside `QWEN.md`. 2 👍, 1 comment.

9. **[#4148 – User prompts sent during tool execution not recorded to JSONL](https://github.com/QwenLM/qwen-code/issues/4148)**
   When typing while tools run, the queued prompt is not written to the JSONL log, breaking session replay. 1 comment.

10. **[#4137 – Revert dynamic slash command LLM-translation feature](https://github.com/QwenLM/qwen-code/issues/4137)**
    Author requests removal of the recently added dynamic translation for slash commands, citing complexity and unreliable translations. 1 comment.

## Key PR Progress
*Picking 10 important PRs representing active work.*

1. **[#4160 – refactor(serve): extract createInMemoryChannel helper](https://github.com/QwenLM/qwen-code/pull/4160)**
   Pure refactor for #4156 (Mode A daemon), extracts duplicated NDJSON channel construction into a shared helper. Zero behavior change.

2. **[#4164 – test(integration): pin simple-mcp-server to legacy MCP path until #4163 is fixed](https://github.com/QwenLM/qwen-code/pull/4164)**
   Temporary test fix to bypass the MCP unavailability regression (#4163) by enabling legacy discovery.

3. **[#4096 – feat(core,cli): add generic atomicWriteFile, wire into Write/Edit tools](https://github.com/QwenLM/qwen-code/pull/4096)**
   Introduces crash-safe file writes (with fsync, symlink resolution, cross-device fallback) and integrates them into the Write and Edit tools.

4. **[#3974 – fix(core): retry API request on model-unloaded errors for local model servers](https://github.com/QwenLM/qwen-code/pull/3974)**
   Automatically retries requests when LM Studio (or similar) unloads a model due to inactivity, giving the server time to reload.

5. **[#4064 – feat(rewind): add file restoration support to /rewind command](https://github.com/QwenLM/qwen-code/pull/4064)**
   Closes #3697: `/rewind` now optionally restores files modified by the assistant, using a file-copy backup system.

6. **[#4102 – feat(core): PR-2.5 — post-promote stream redirect + natural-exit registry settle](https://github.com/QwenLM/qwen-code/pull/4102)**
   Follow-up for #3831, adds stream redirection after promotion and better handling of background task registration.

7. **[#4113 – refactor(serve): 1 daemon = 1 workspace](https://github.com/QwenLM/qwen-code/pull/4113)**
   Stage 2 of the daemon redesign: switches from multi-workspace routing to a single-workspace-per-daemon model for simpler state management.

8. **[#4145 – refactor(cli): revert dynamic slash command LLM translation](https://github.com/QwenLM/qwen-code/pull/4145)**
   Implements the revert requested in #4137, removing the LLM-translation feature while preserving built-in i18n.

9. **[#4161 – feat(cli): add self-improve command](https://github.com/QwenLM/qwen-code/pull/4161)**
   New `/improve` slash command that lets Qwen Code iteratively improve its own codebase inside isolated git worktrees.

10. **[#4129 – fix(i18n): Correct zh-TW translations to match Traditional Chinese conventions](https://github.com/QwenLM/qwen-code/pull/4129)**
    Fixes ~131 lines of Traditional Chinese translations that incorrectly used Simplified Chinese character forms.

## Feature Request Clusters
*Recurring themes without predicting roadmap priority.*

- **Daemon mode and headless operation**
  Multiple issues and PRs (#3803, #4156, #4113, #4160) focus on extending the serve architecture, merging TUI with HTTP daemon, and enabling remote access while keeping interactive sessions.

- **Session management improvements**
  Requests include session forking (#4158), JSONL logging of in-flight prompts (#4148), persistence of sessions across restarts (PR #3865), and better resume UX (#4158).

- **Configuration & context enhancements**
  Proposals for project-level local context file (QWEN.local.md, #4091), explicit provider type for DashScope-compatible endpoints (#4138), and SKILL.md priority ordering (#4136).

- **Multimodal and plugin capabilities**
  Feature request for integrating bailian-cli as a preinstalled multimodal plugin (#4009) with image/video/voice generation and understanding.

## Developer Pain Points
- **Memory exhaustion (OOM/heap)**
  At least 4 open issues (#4149, #4116, #4134, #2868) report JavaScript heap out-of-memory errors during normal or extended use, suggesting a memory leak or high baseline consumption.

- **MCP tool unavailability in non-interactive mode**
  Recent progressive-MCP changes (#3994) broke tool access in `--prompt` mode (#4163), requiring temporary test fixes (#4164).

- **Integration failures with local servers**
  Users report connection errors with Ollama (#4152), broken tool ID handling with minimax (#4139), and incompatibility with Node.js 26 (#4140).

- **Configuration changes requiring restarts**
  The `/language output` command writes settings but does not apply them until a restart (#4142), which was closed but highlights a UX gap in runtime settings propagation.

</details>