# AI CLI Tools Community Digest 2026-05-26

> Generated: 2026-05-26 02:28 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

Here is the cross-tool comparison report based on today's community digest data.

---

## Cross-Tool AI CLI Report – 2026-05-26

### 1. Daily Cross-Tool Overview

Today’s activity across the major AI CLI tools shows a community actively engaged in debugging and feature requests, with no new stable releases for any tool. The dominant recurring themes are **cost/billing unpredictability**, **session and context compaction reliability**, and **sub-agent nesting limitations** – issues that directly impact production workflows. Tool communities are also showing increasing demand for **multi-provider model support** and **improved enterprise configuration** (proxies, installers, authentication). While no single tool released a major update today, pull request activity across repositories indicates ongoing work on core UX (Vim modes, TUI rendering) and agent orchestration capabilities.

### 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | New Release (24h) | Hot Issues: High-Impact |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 50 | 8 | No | Billing bugs (#38029, #62338), sub-agent limits, language drift |
| **OpenAI Codex** | 50 | 10 | No | Auth (#20161), GPU drain (#16857), Vim mode overhaul (PRs) |
| **Gemini CLI** | 50 | 10 | No | Sub-agent design (#3132), MCP connections, plan mode not honored |
| **GitHub Copilot CLI**| 21 | 0 | No | Regression in v1.0.51 (#3442), Gemini request (#2854), sub-agent cost guard (#2758) |
| **Kimi Code CLI** | 3 | 2 | No | Background task timeout (#2232), WebSocket hang (#2365), TypeScript rewrite PR (#1707) |
| **OpenCode** | ~40* | 10 | No | Infinite compress loop (#27924), GPT response time (#29079), Kimi k2.5 tool failures (#20650) |
| **Qwen Code** | 25 | 10 | Yes (nightly) v0.16.1-nightly | Daemon API gaps (#4514), VS Code/IDE compatibility (#4488), UI freezes (#4442) |
*Note: OpenCode had 7 hot issues, but total issue activity was not explicitly stated; estimated from context.

### 3. Shared Feature Directions

Several requirements appeared across multiple tool communities today:

- **Multi-Model / BYO Provider Support**: Strong demand for model diversity. Copilot CLI (#2854) explicitly requests Google Gemini. OpenCode (#20650, #29079) reports quality issues with Kimi k2.5 and slow GPT. Gemini CLI (#26845) is adding Flash-lite to its fallback chain. The trend is toward tools being model-agnostic brokers rather than single-model interfaces.

- **Sub-Agent / Agent Nesting Control**: A major pain point. Claude Code (#61993, #46424) reports sub-agents cannot spawn further sub-agents. Gemini CLI (#3132) is actively designing a reusable "SubAgent" class. Copilot CLI (#2758) reports sub-agent model selection is silently blocked by cost guards. All three communities want finer-grained control over child agent behavior and lifecycle.

- **Session Management & Persistence**: Multiple tools face similar session UX issues. Claude Code (#62351, #62349) requests manual task completion and queue cancellation. Copilot CLI (#3518) requests unarchive for projects. OpenCode (#27167) requests persistent `/goal` targets. Qwen Code (#4479) requests daily token stats. The need for structured, long-lived, and inspectable sessions is a clear cross-tool requirement.

- **Context Compaction Reliability**: Failures here are workflow-blocking. Claude Code (#57636) reports data loss on compaction failure. OpenCode (#27924) reports infinite loops on compress failure. Copilot CLI has a general "remote compact task" failure pattern. Qwen Code (#4526) is limiting hard-rescue retries to avoid loops. Compaction is a fragile choke point for all long-session tools.

- **MCP / Plugin Integration Friction**: Claude Code (#14061) has stale cache after plugin updates. Copilot CLI (#3030) reports sub-agent MCP calls fail on array responses. Gemini CLI (#27431) reports connection failures with no error messages. Kimi Code CLI had a closed issue about API key flexibility. All tools face a similar challenge: making the pluggable ecosystem robust.

- **Windows Parity**: All major tools have Windows-specific issues. Claude Code (sub-agent nesting), Codex (standalone installer #13993, ANSI rendering #23740), Gemini CLI (subprocess env vars, F10 key fallback), Copilot CLI (native crash #3250), Qwen Code (IDE compatibility). Windows remains a secondary platform that frequently breaks or lacks features.

### 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | OpenCode | Qwen Code |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Core Focus** | Agent-driven coding, plugin/hook ecosystem | TUI/IDE integration, premium UX | Agent orchestration, Auto Memory | Enterprise GitHub integration, MCP plugins | Multi-model broker, community extensibility | Daemon mode, multi-IDE, Qwen model integration |
| **Target User** | Power developers, plugin authors | Professional developers, creative workflows | Developers using Gemini models, free-tier users | Enterprise/GitHub ecosystem users | Open-source community, multi-model users | Asian market, Qwen ecosystem, JetBrains users |
| **Key Technical Approach** | Native agent with task/spawn, hooks system | Vim-composer TUI, story review cockpit | Sub-agent classes, headless mode, telemetry | GitHub Copilot integration, .agent.md files | JSONC config, MCP/ACP support | Serve daemon, Web-shell, ACP protocol |
| **Today's Major Pain** | **Cost/Billing** – session resume charges, silent API billing | **Performance** – GPU drain, slow thread navigation, IDE hangs | **Plan Mode** – not honored; **MCP** – failed connections | **Regression** – v1.0.51 broke remote sessions and hooks | **Model Reliability** – Kimi/GPT issues; **Session Loops** | **IDE Compatibility** – VS Code/Rider issues; **Daemon API gaps** |
| **Differentiating Feature** | Hook examples (block-build, sandbox filesystem) | Vim mode overhaul (9-PR series), subagent lineage metadata | Built-in image generation, telemetry improvements | Remote sessions, enterprise proxy support | Built-in skills (simplify, hidden metadata) | Daemon mode, IDE plugins, CORS support |

### 5. Community Activity Notes

- **Highest Issue Volume**: Claude Code, OpenAI Codex, and Gemini CLI each had 50 issues updated in the last 24 hours, indicating very high engagement. **OpenCode** also had significant activity with a critical loop bug and pricing discussion. **Qwen Code** had 25 new issues.
- **Most PR Activity**: **OpenAI Codex** leads with 10 PRs updated (including a major Vim mode series), followed by **Qwen Code** (10 PRs) and **Gemini CLI** (10 PRs). **GitHub Copilot CLI** had no active PRs, suggesting a stable (or slower) development cycle.
- **Release Activity**: Only **Qwen Code** published a new nightly build (v0.16.1-nightly). No other tool had a release.
- **Maintainer Responsiveness**: **Qwen Code** maintainers have been responsive, assigning `need-information` labels and merging multiple fixes (container, Unicode, config errors). **Gemini CLI** maintainers are actively merging PRs (model fallback, CORS, plan mode fixes). **Claude Code** closed two older issues but did not comment on the most critical billing bugs (#38029, #62338), which is notable given the severity. **Codex** closed the high-comment auth bug (#20161) but left many performance issues open.
- **Cross-Tool Interest**: The unsolicited TypeScript rewrite PR for **Kimi Code CLI** (#1707) indicates community frustration with Python performance for CLI-based AI agents, a sentiment that may influence future tooling choices.

### 6. Evidence-Backed Observations

1.  **Cost and billing transparency is the most urgent cross-tool pain point for paying users.** Claude Code has two high-severity billing issues (#38029, #62338) with strong community reaction. OpenCode faces a similar backlash over DeepSeek V4 Pro pricing adjustments (#28846). Qwen Code has a feature request for daily token stats (#4479). The gap between expected spend (subscription, budget) and actual consumption (API charges, token surges) is a trust-breaking issue that tools must address with clearer metering and audit logs.

2.  **Sub-agent orchestration is a primary design challenge across all major agent-based tools.** Claude Code, Gemini CLI, and Copilot CLI all have open issues about sub-agent spawning limits, model control, and lifecycle management. The common pattern is that tools are moving from simple linear agents to hierarchical agent systems, but the APIs and guardrails (cost controls, model assignment, task isolation) are not yet mature. This is a key area for future differentiation.

3.  **Session compaction is a fragile and error-prone process that acts as a single point of failure for long-running sessions.** Loops (#OpenCode, #QwenCode), data loss (#Claude Code), and silent failures (#Codex) are reported across tools. While all tools recognize the need to manage context windows, the current compaction mechanisms are not robust enough for production use. The solution likely involves better error handling, user visibility into the process, and disposable checkpoints before compaction.

4.  **Multi-model support is shifting from a "nice-to-have" to a core requirement for community adoption.** Copilot CLI and OpenCode have explicit requests for Gemini/other models. Qwen Code has multiple issues with its own model's API compatibility (#4513, #29154). Gemini CLI is building fallback chains (#26845). The market is signaling that no single model is sufficient for all tasks, and tools that offer flexible, well-integrated multi-model backends will have a competitive advantage. However, this also introduces new quality and compatibility testing burdens.

5.  **Windows parity remains a persistent and unresolved gap for all major AI CLI tools.** From standalone installers (#Codex) to sub-process crashes (#Copilot CLI) to ANSI rendering (#Codex) to agent nesting (#Claude Code), every tool has Windows-specific bugs that are often lower priority than their macOS/Linux counterparts. This observation is supported by multiple tool-specific issues and no evidence of a coordinated cross-tool improvement effort.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-05-26

## Today’s Update Brief

No new releases were published in the last 24 hours. Community activity remained high with 50 issues updated, led by a long-running billing bug (abnormal consumption on session resume) and fresh reports of silent API overcharges and business-critical memory violations. Three new pull requests landed on triage and hook examples, while two older issues were closed (TUI character corruption, desktop rewind regression) as resolved or stale.

---

## Hot Issues

1. **[#38029 – Abnormal Usage Consumption on Claude Code Session Resume](https://github.com/anthropics/claude-code/issues/38029)**
   *Opened Mar 24, 23 comments, 32 👍*
   User reports that resuming a session causes unexpectedly high token usage, possibly a billing bug. The community has engaged heavily, with many confirming similar cost spikes. Area: core, cost.

2. **[#14061 – `/plugin update` does not invalidate plugin cache](https://github.com/anthropics/claude-code/issues/14061)**
   *Opened Dec 15, 23 comments, 28 👍*
   After updating a plugin, the old cached version continues to be used until manual cache clear. Marked duplicate but remains open; Linux users are most affected.

3. **[#12705 – Unable to generate AGPLv3 license due to content filtering policy](https://github.com/anthropics/claude-code/issues/12705)**
   *Opened Nov 29, 22 comments, 9 👍*
   Claude Code refuses to generate an AGPLv3 license text, citing content filtering. Raises questions about license generation guardrails and open-source compliance.

4. **[#59163 – TUI character corruption after long sessions in VS Code integrated terminal (macOS) – CLOSED](https://github.com/anthropics/claude-code/issues/59163)**
   *Opened May 14, 22 comments, 15 👍*
   After extended use, the TUI renders garbled glyphs while preserving layout. Closed as likely resolved in v2.1.141+, but the community flagged it as a critical usability issue.

5. **[#3513 – Edit and MultiEdit tools fail with 'File has been modified since read' errors](https://github.com/anthropics/claude-code/issues/3513)**
   *Opened Jul 15, 21 comments, 25 👍*
   Persistent error when multiple Edit tool calls target the same file. Affects Linux users heavily. The bug has been open for nearly a year with no fix.

6. **[#51686 – CLAUDE.md language/dialect instructions drift during long sessions](https://github.com/anthropics/claude-code/issues/51686)**
   *Opened Apr 21, 14 comments, 2 👍*
   Spanish *voseo* instruction leaks into neutral-Spanish output after extended conversations. Illustrates model instruction drift over time.

7. **[#61993 – Sub-agents cannot spawn other sub-agents on Windows](https://github.com/anthropics/claude-code/issues/61993)**
   *Opened May 24, 12 comments*
   The `Task`/`Agent` primitive is not exposed in nested contexts, preventing orchestrator patterns on Windows. Related to #46424 (macOS) – cross-platform limitation.

8. **[#49619 – Stream idle timeout / partial response during long tool-use turns on Claude Code Web](https://github.com/anthropics/claude-code/issues/49619)**
   *Opened Apr 17, 12 comments, 10 👍*
   Long-running agent tool calls on Claude Code Web (Opus 4.7) get interrupted by stream idle timeout, returning partial results. Impact: unreliable for complex multi-step tasks.

9. **[#58192 – `/goal` stop hook fails with "Prompt is too long" when goal text is large](https://github.com/anthropics/claude-code/issues/58192)**
   *Opened May 12, 9 comments, 9 👍*
   The `/goal` command combined with hooks throws a prompt-length error if the goal text is large, preventing its use in long-running automated workflows.

10. **[#62338 – Claude Code silently billed $447 to API instead of Max subscription](https://github.com/anthropics/claude-code/issues/62338)**
    *Opened May 26, 4 comments*
    A freshly filed, high-severity billing bug: despite having a Max subscription, a user was charged $447 via API usage without warning, and received incorrect auth confirmation. Highlights auth/billing logic gaps.

---

## Key PR Progress

1. **[#62346 – docs: Document CLAUDE_CODE_ATTRIBUTION_HEADER for custom base URL setups](https://github.com/anthropics/claude-code/pull/62346)**
   *Opened May 26*
   Adds documentation for the previously undocumented env var that injects a dynamic attribution header. Helps third‑party provider users avoid cache misses.

2. **[#62315 – Fix hookify event filtering in pre/post hooks](https://github.com/anthropics/claude-code/pull/62315)**
   *Opened May 25*
   Corrects event type filtering logic that could cause hooks to fire on wrong events.

3. **[#62262 – fix: prevent dedupe from suggesting or auto-closing as duplicate of closed/duplicate issues](https://github.com/anthropics/claude-code/pull/62262)**
   *Opened May 25*
   Addresses a meta‑bug where the dedupe bot would suggest already‑closed issues as duplicates, creating dead‑end references.

4. **[#62264 – feat: add block-build-commands hook example for hard execution guardrails](https://github.com/anthropics/claude-code/pull/62264)**
   *Opened May 25*
   Provides a PreToolUse hook example that blocks build/compile commands (cmake, make, gcc, etc.) – a practical safety guardrail.

5. **[#62261 – feat: add sandbox filesystem example settings with allowSkillsWrites](https://github.com/anthropics/claude-code/pull/62261)**
   *Opened May 25*
   Adds example config for controlling write access to the `/skills/` directory inside the sandbox.

6. **[#62260 – fix: handle empty bug report bodies in triage and improve needs-info nudge](https://github.com/anthropics/claude-code/pull/62260)**
   *Opened May 25*
   Updates triage instructions to detect empty bug bodies and automatically apply a `needs-info` label.

7. **[#62023 – fix(workflow): word-boundary @claude trigger to avoid @claude-* false positives](https://github.com/anthropics/claude-code/pull/62023)**
   *Closed May 25*
   Fixes the GitHub Actions trigger so that mentions of `@claude-*` plugins don’t accidentally trigger Claude Code workflows.

8. **[#62252 – Pr test (closed)](https://github.com/anthropics/claude-code/pull/62252)**
   *Opened May 25, closed*
   A test PR, no functional changes.

---

## Feature Request Clusters

- **Agent-view task management** – Issue #62351 requests a command to manually mark a task as finished in the agents view, improving visibility for parallel agent workflows.
- **Queue management** – Issue #62349 asks for a `/cancel` command to remove queued messages without interrupting the current task, addressing a common UX friction where users accidentally queue follow-ups.
- **Memory file handling** – Several comments in #62325 and #62336 implicitly request better deduplication and mid-turn write prevention for MEMORY.md and CLAUDE.md to reduce token waste and edit conflicts.

---

## Developer Pain Points

- **Cost unpredictability** – Two high‑profile issues (#38029 and #62338) highlight continued confusion over billing: session-resume token surges and silent API charges despite active subscriptions. Community reaction is strong.
- **Agent nesting limitations** – Multiple reports (#61993, #46424, #61547) confirm that sub‑agents cannot spawn further sub‑agents or go idle without executing prompts, breaking orchestration patterns on all platforms.
- **Context compaction data loss** – Issues #57636 and #62316 reveal that compaction (both automatic and manual) can destroy terminal scroll history or irreversibly discard context when the summary API call fails.
- **Plugin / MCP friction** – Stale cache after plugin updates (#14061) and incorrect `claude mcp add` syntax (#62332, reopened) remain unresolved, frustrating plugin developers.
- **Language instruction drift** – #51686 and similar reports show that CLAUDE.md language/dialect settings degrade over long sessions, a reliability concern for multilingual teams.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-26

## 1. Today's Update Brief

No new releases were published in the last 24 hours. The community was active with 50 issues and 47 pull requests updated overnight, including a high‑profile closed authentication bug (1,162 comments) and a steady stream of performance, Windows compatibility, and feature request reports. Pull request activity centered on an extensive Vim mode overhaul and new code‑review story tooling.

## 2. Releases

None in the last 24 hours.

## 3. Hot Issues

Selected 10 noteworthy issues (by comment count, reactions, or criticality):

1. **[#20161 – Phone number verification doesn't work](https://github.com/openai/codex/issues/20161)** (CLOSED)
   *162 comments, 103 👍*
   SSO login prompts for a phone number even when none is set. Breaks basic authentication for users switching devices. Maintainers closed the issue, but the volume of discussion highlights widespread frustration.

2. **[#12564 – Allow renaming task/thread titles](https://github.com/openai/codex/issues/12564)** (OPEN)
   *60 comments, 107 👍*
   Users cannot rename automatically‑generated thread titles, making history navigation difficult in long sessions. One of the most upvoted open feature requests.

3. **[#6465 – MCP servers not detected in VS Code extension (but working in CLI)](https://github.com/openai/codex/issues/6465)** (OPEN)
   *52 comments, 28 👍*
   Model Context Protocol (MCP) servers configured for the CLI do not appear in the VS Code extension, forcing users to switch tools. High priority for teams relying on MCP.

4. **[#13993 – Support standalone Windows installer (`codex-setup.exe`)](https://github.com/openai/codex/issues/13993)** (OPEN)
   *49 comments, 119 👍*
   Many Windows users cannot use the Microsoft Store due to corporate or offline restrictions. This feature request for a traditional `.exe` installer is the most‑liked open enhancement.

5. **[#16857 – High GPU usage while the app is "thinking" due to tiny useless animation](https://github.com/openai/codex/issues/16857)** (OPEN)
   *35 comments, 34 👍*
   A low‑value animation during model reasoning drives constant GPU load on Apple Silicon and other platforms. Users report measurable battery drain.

6. **[#10823 – Unable to compact the context in a VERY long running session](https://github.com/openai/codex/issues/10823)** (OPEN)
   *23 comments, 5 👍*
   Long‑running sessions that survive resumption hit a “remote compact task” failure with no clear recovery. A core workflow blocker for power users.

7. **[#23740 – Latest npm Codex CLI renders raw ANSI/control sequences in Windows Terminal](https://github.com/openai/codex/issues/23740)** (OPEN)
   *8 comments, 7 👍*
   Regression since `0.130.0` – Windows Terminal users see escape codes instead of formatted output. Breaks CLI usability on the platform.

8. **[#24414 – Codex IDE extension stays on "Thinking" for a long time even for simple prompts](https://github.com/openai/codex/issues/24414)** (OPEN)
   *5 comments, 4 👍*
   Recent VS Code extension version (`26.513.21555`) appears to hang on trivial requests. No clear reproduction yet, but several Windows users are affected.

9. **[#24501 – Severe Codex Safety Failure: Docker Container / Host Filesystem Boundary Confusion](https://github.com/openai/codex/issues/24501)** (OPEN)
   *3 comments, 0 👍*
   A user reports that Codex recommended destructive deletion inside a Docker container after mistaking the host filesystem for the container. Safety‑critical with 31 years of client data at risk.

10. **[#6060 – Support configuring outbound HTTP proxy via `http_proxy` in `config.toml`](https://github.com/openai/codex/issues/6060)** (OPEN)
    *9 comments, 53 👍*
    Enterprise users behind corporate proxies (Zscaler, PAC) cannot route Codex traffic without manual system‑level fixes. A long‑standing request with strong community support.

## 4. Key PR Progress

Selected 10 pull requests updated in the last 24 hours that represent meaningful changes or ongoing initiatives:

1. **[#24104 – TUI: keep inaccessible apps out of the mention picker](https://github.com/openai/codex/pull/24104)**
   Fixes the `$` autocomplete showing apps the user doesn’t have access to. Improves the TUI experience by respecting server‑side accessibility decisions.

2. **[#24503 – TUI: include exec sessions in resume list](https://github.com/openai/codex/pull/24503)**
   Fixes `codex resume --include-non-interactive` by ensuring exec sessions are listed. Addresses issue #24502.

3. **[#24161 – Add subagent lineage turn metadata](https://github.com/openai/codex/pull/24161)**
   Stacked on #24160. Captures the immediate parent of a subagent (distinct from copied‑history lineage). Improves traceability in agentic workflows.

4. **[#24160 – Add `forked_from_thread_id` turn metadata](https://github.com/openai/codex/pull/24160)**
   Attaches the source thread ID to forked conversations, enabling downstream tools to distinguish forks from new threads.

5. **[#24496 – feat(tui): add vim visual modes [8/9]](https://github.com/openai/codex/pull/24496)**
   Part of a multi‑PR Vim mode overhaul. Adds characterwise and linewise visual selections with motion/find/text‑object support.

6. **[#24487 – feat(tui): add vim command counts [6/9]](https://github.com/openai/codex/pull/24487)**
   Introduces numeric prefix state (`2d3w`), applying counts to motions and operators. Foundation for later named registers and visual mode.

7. **[#24486 – feat(tui): add vim tag text objects [5/9]](https://github.com/openai/codex/pull/24486)**
   Adds `it` and `at` text objects for HTML/XML‑like tags, with nested tag and quoted‑attribute support.

8. **[#24483 – feat(tui): add vim prose text objects [4/9]](https://github.com/openai/codex/pull/24483)**
   Adds `is` and `as` sentence objects for delete/yank/change operations. Continues the Vim composer layer.

9. **[#24477 – feat(tui): complete vim change operations [2/9]](https://github.com/openai/codex/pull/24477)**
   Generalises `c` changes to the supported motion set, including `cc`, `S`, and characterwise `C`. Homogenises line‑end behaviour.

10. **[#24358 – feat(review-story): add interactive story cockpit](https://github.com/openai/codex/pull/24358)**
    New TUI layer that turns automated review story artifacts into a guided, step‑by‑step review surface. Aims to help reviewers understand AI‑generated changes conceptually before viewing raw diffs.

## 5. Feature Request Clusters

Grouping recurring requests from today’s issue data:

- **Windows platform improvements** – Multiple requests for a standalone `.exe` installer (#13993), fixes for ANSI rendering in Windows Terminal (#23740), viewport jumping in WSL (#22936), and missing Browser Use support on Windows WSL (#21575). Windows remains a pain point.

- **Context compaction reliability** – Several open issues report that context compaction fails intermittently with “remote compact task” errors or stream disconnects (#10823, #22107, #21269, #24449). This directly impacts long‑session workflows.

- **Performance under load** – Users increasingly report sluggishness: high GPU usage from a trivial animation (#16857), slow thread navigation due to unbounded metadata (#21211), app‑server loading all sessions on every list call (#22411), and the IDE extension hanging on simple prompts (#24414).

- **Enterprise & proxy configuration** – The ability to set outbound HTTP

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

好的，这是根据您提供的GitHub数据生成的Gemini CLI社区摘要。

---

**Gemini CLI 社区摘要 — 2026-05-26**

**1. 今日更新简报**
今日无新版本发布，但社区活动活跃，共有50个议题和42个拉取请求在过去24小时内被更新。核心开发团队正专注于基础设施的稳健性（如多架构Docker镜像、终端渲染）和Agent核心功能（如子代理、模型回退链）的完善。值得注意的是一系列围绕“Auto Memory”和“Hooks”系统的问题正在被积极讨论和修复。

**2. 版本发布**
无。

**3. 热点议题**
1. **[Agents] Post V1.0 Work** ([#3132](https://github.com/google-gemini/gemini-cli/issues/3132))
   - **工作流影响：** 核心功能演进。请求引入可复用的“子代理”类，以管理由LLM驱动的工具编排，例如让某个工具调用子代理来迭代解决复杂问题。
   - **影响与反馈：** 该议题获得50个👍和45条评论，是社区最关注的功能之一，讨论热度极高。

2. **Consumer: Build and publish multi-arch Docker images** ([#3717](https://github.com/google-gemini/gemini-cli/issues/3717))
   - **工作流影响：** 基础设施/部署。目标是重新设计Docker镜像构建流程，以支持多平台（如ARM64），确保不同CPU架构下的原生性能。
   - **影响与反馈：** 14条评论，是团队内部一个重要的工程卓越项。

3. **Flicker free robust terminal rendering** ([#10673](https://github.com/google-gemini/gemini-cli/issues/10673))
   - **工作流影响：** 用户体验。核心渲染功能仍不完善，需要解决UI闪烁、缓冲区切换和渲染卡顿等问题。
   - **影响与反馈：** 该问题的持续时间为9个月且有9条评论，反映出终端UI渲染是一个长期难以根除的技术债。

4. **Robust component level evaluations** ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353))
   - **工作流影响：** 质量保障。提议建立组件级别的评估体系，作为现有“行为评估”的补充，以更精细地验证各个模块。
   - **影响与反馈：** 这是一个涉及76个测试用例的史诗级任务，显示团队正在构建更系统化的测试基础设施。

5. **Plan mode not honored** ([#27434](https://github.com/google-gemini/gemini-cli/issues/27434))
   - **工作流影响：** 用户控制。用户明确指出即使开启计划模式，AI仍可能自动跳过审批流程直接执行，导致“计划模式”形同虚设。
   - **影响与反馈：** 用户情绪强烈（“WTF”），批评该模式未按预期工作，这是一个严重的功能失效问题。

6. **Shell command execution gets stuck with "Waiting input" after command completes** ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166))
   - **工作流影响：** 核心执行。在执行简单的Shell命令后，CLI会卡住并显示“等待输入”，即使命令已经执行完毕。
   - **影响与反馈：** 获得3个👍，用户报告这是一个高频率复现的问题，严重影响自动化工作流。

7. **Cannot connect to different MCP servers** ([#27431](https://github.com/google-gemini/gemini-cli/issues/27431))
   - **工作流影响：** 可扩展性。用户无法连接到各种MCP服务器，且系统在失败时未提供错误信息，导致排错困难。
   - **影响与反馈：** 这是一个新增的Bug报告，影响第三方工具集成。

8. **Ladrones!!!** ([#27445](https://github.com/google-gemini/gemini-cli/issues/27445))
   - **工作流影响：** 数据安全/信任。用户投诉AI Agent破坏其项目文件。
   - **影响与反馈：** 虽然评论不多，但情绪极端（使用西班牙语粗口），是一个需要优先关注的客户伤害事件，可能涉及数据丢失或意外修改。

9. **Model frequently creates tmp scripts in random spots** ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571))
   - **工作流影响：** 工作区管理。模型倾向于在项目各处生成临时编辑脚本，增加了清理成本，影响提交的整洁度。
   - **影响与反馈：** 反映了AI在文件系统操作上的不精确性。

10. **Raw XML tags from function calls are leaking into standard output** ([#22441](https://github.com/google-gemini/gemini-cli/issues/22441))
    - **工作流影响：** 用户界面/可视化。工具调用的原始XML标签（如 `<function_calls>`）被直接打印到终端，破坏了解析和视觉体验。
    - **影响与反馈：** 这是一个持续数月的Bug，影响了CLI输出内容的可用性。

**4. 关键PR进展**
1. **fix(core): add gemini-2.5-flash-lite to default fallback policy chain** ([#26845](https://github.com/google-gemini/gemini-cli/pull/26845))
   - 特性/修复：在默认模型回退链中新增 `gemini-2.5-flash-lite`，使免费用户在使用超过350次Pro或Flash模型后，能继续使用Flash-lite配额而不会因配额耗尽而失败。

2. **fix(core): trigger silent fallback in headless mode on quota exhaustion** ([#26846](https://github.com/google-gemini/gemini-cli/pull/26846))
   - 特性/修复：修复了在非交互模式（`-p`）下，遇到配额耗尽错误时不会自动回退到备用模型的问题，对自动化Pipeline至关重要。

3. **fix(core): allow plan mode writes to custom plans directory** ([#26851](https://github.com/google-gemini/gemini-cli/pull/26851))
   - 特性/修复：允许计划模式能够写入用户自定义的 `plans` 目录，之前仅限于默认路径。

4. **fix(core): accept null MCP resource lists** ([#26873](https://github.com/google-gemini/gemini-cli/pull/26873))
   - 特性/修复：修复了当MCP服务器返回空值（`null`）而不是空数组时，导致资源发现失败的问题，增强了与各种MCP服务器的兼容性。

5. **fix(security): add IPv6 loopback to host header validation** ([#26881](https://github.com/google-gemini/gemini-cli/pull/26881))
   - 特性/修复：安全修复。在IDE服务器的Host头验证中增加了对IPv6回环地址（`[::1]`）的支持，修复了一个潜在的DNS重绑定安全漏洞。

6. **fix(core): prevent project .env vars from leaking into subprocess environments** ([#27203](https://github.com/google-gemini/gemini-cli/pull/27203))
   - 特性/修复：修复了项目`.env`文件中的环境变量（如数据库密码）泄露到子进程的问题，解决了例如破坏Laravel `phpunit`测试环境的安全隐患。

7. **fix(cli): add F10 fallback for approval mode cycling** ([#26088](https://github.com/google-gemini/gemini-cli/pull/26088))
   - 特性/修复：为循环切换审批模式的功能增加了F10键作为备选快捷键，解决了Windows/WezTerm下`Shift+Tab`按键序列被错误解析的问题。

8. **fix(cli): display session ID without shell escaping in resume message** ([#26892](https://github.com/google-gemini/gemini-cli/pull/26892))
   - 特性/修复：修复了在Windows PowerShell下，恢复会话命令因不必要的Shell转义而失败的问题。

9. **Improve Gemini retry visibility and timeout handling** ([#26876](https://github.com/google-gemini/gemini-cli/pull/26876))
   - 特性/修复：修复了由于模型容量限制、超时等原因导致的CLI卡在“思考中...”状态的问题，提高了重试状态的可见性。

10. **feat: built-in image generation tool and slash command** ([#20848](https://github.com/google-gemini/gemini-cli/pull/20848))
    - 特性：引入了内置的图片生成工具和`/image`命令，允许用户直接在CLI中生成和编辑图片。

**5. 功能请求集群**
- **子代理（SubAgent）系统：** 多个请求关注子代理的生命周期管理。除了在[#3132](https://github.com/google-gemini/gemini-cli/issues/3132)中要求其作为管理工具编排的组件外，[#15269](https://github.com/google-gemini/gemini-cli/issues/15269)要求为其添加Hook事件（如 `BeforeSubAgent`, `AfterSubAgent`），[#15179](https://github.com/google-gemini/gemini-cli/issues/15179)则调查递归子代理委托的可能。
- **Hooks系统改进：** 用户和开发者关注Hook系统的一致性和安全性。[#15272](https://github.com/google-gemini/gemini-cli/issues/15272)要求默认对Hook进行沙箱化以缓解代码执行风险。[#14724](https://github.com/google-gemini/gemini-cli/issues/14724)指出与Claude Code Hook的 `SessionStart` 事件中 `source: "compress"` 与 `source: "compact"` 不兼容。[#14722](https://github.com/google-gemini/gemini-cli/issues/14722)则指出 `SessionEndReason.Logout` 的枚举值从未被触发。
- **Auto Memory 相关：** 一系列议题（[#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522)）针对Auto Memory功能提出问题，包括敏感数据的上下文泄露、无效补丁的静默跳过以及低效会话的无限重试。
- **评估与可观测性：** 社区和团队正在推动更好的质量保证和运维能力。[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)请求组件级评估。[#12244](https://github.com/google-gemini/gemini-cli/issues/12244)则要求通过OpenTelemetry实现更稳健的可观测性。[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)正在调研AST感知的文件读取和搜索是否能提升Agent效能。

**6. 开发者痛点**
- **Shell命令执行与Quota管理：** “[Shell 命令卡住]((https://github.com/google-gemini/gemini-cli/issues/25166))”是高频问题，而Quota管理的不一致（如[#27221](https://github.com/google-gemini/gemini-cli/pull/27221)所述）也在用户中导致困惑和“配额用尽”的错误提示。
- **非交互（Headless）模式支持薄弱：** 开发者在使用Pipeline集成时，遇到模型回退不工作（[#26846](https://github.com/google-gemini/gemini-cli/pull/26846)）等体验退化问题。
- **MCP与第三方连接：** 连接MCP服务器失败且无错误提示（[#27431](https://github.com/google-gemini/gemini-cli/issues/27431)），以及Hook系统与Claude Code不兼容（[#14724](https://github.com/google-gemini/gemini-cli/issues/14724)），是用户集成过程中的常见障碍。
- **计划模式被忽略：** 用户反馈“计划模式”功能未按承诺工作（[#27434](https://github.com/google-gemini/gemini-cli/issues/27434)），破坏了用户审批流程的信任基础。
- **终端渲染与UI缺陷：** 持续的UI闪烁问题（[#10673](https://github.com/google-gemini/gemini-cli/issues/10673)）和XML标签泄露到输出（[#22441](https://github.com/google-gemini/gemini-cli/issues/22441)）是影响日常使用体验的长期痛点。
- **Auto Memory低效：** 低效会话的无限重试（[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)）和无效补丁的静默跳过（[#26523](https://github.com/google-gemini/gemini-cli/issues/26523)），让开发者对其数据处理的准确性和效率存疑。
- **性能和安装体验：** 从[#10168](https://github.com/google-gemini/gemini-cl

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-26

## 1. Today's Update Brief

No new releases were published in the last 24 hours. Community activity centered on issue tracking: 21 issues were updated, with a mix of fresh bug reports (e.g., empty `workingDirectory` in hooks, Windows crash with parallel sub‑agents) and long‑standing feature requests (e.g., Google Gemini support, sub‑agent model control). Two issues were closed (one a regression fix, one a duplicate/spam). No pull requests were active.

## 2. Releases

None.

## 3. Hot Issues

1. **[#3442] Remote sessions not enabled after v1.0.51**
   `[area:sessions, area:enterprise]`
   Users updating to v1.0.51 report that `/remote on` fails with a “contact your admin” message, even though remote sessions were previously working. 10 👍 indicate strong community impact.
   [Link](https://github.com/github/copilot-cli/issues/3442)

2. **[#2854] Google Gemini not available in Copilot CLI**
   `[area:models]`
   Request to add Google models (Gemini) to the CLI model pool. 15 👍 — the highest‑liked issue today — reflecting clear demand for multi‑provider support.
   [Link](https://github.com/github/copilot-cli/issues/2854)

3. **[#2643] Pre‑tool‑use hook silent rewrite still shows confirmation dialog**
   `[area:plugins]`
   Even when a `preToolUse` hook sets `permissionDecision: allow` with `updatedInput`, the CLI shows an interactive confirmation on every rewritten command. Plugin authors cannot achieve silent rewrites.
   [Link](https://github.com/github/copilot-cli/issues/2643)

4. **[#2758] Sub‑agent model selection blocked by cost‑multiplier guard**
   `[area:agents, area:models]`
   Sub‑agents are silently downgraded to the cheapest model regardless of the model specified in `.agent.md` frontmatter. Users request an opt‑out flag.
   [Link](https://github.com/github/copilot-cli/issues/2758)

5. **[#2776] Shift+Enter submits prompt instead of inserting newline**
   `[area:input-keyboard]`
   While composing a prompt, pressing Shift+Enter immediately starts processing, making multi‑line input difficult. A UX regression or design gap.
   [Link](https://github.com/github/copilot-cli/issues/2776)

6. **[#3508] Extension lifecycle hooks receive empty `workingDirectory` (CLOSED)**
   `[area:plugins]`
   Starting in v1.0.51, hooks like `onSessionStart` get an empty string instead of the actual directory. The issue was closed as a confirmed regression; fix likely in progress.
   [Link](https://github.com/github/copilot-cli/issues/3508)

7. **[#3030] Sub‑agent MCP tool calls fail on JSON array response**
   `[area:agents, area:mcp]`
   Zod validation error `expected record, received array` when a sub‑agent calls an MCP tool that returns an array. The same tool works from the orchestrator.
   [Link](https://github.com/github/copilot-cli/issues/3030)

8. **[#3250] Windows native crash (BEX64) with parallel sub‑agents + BYOK provider**
   `[area:agents, area:platform-windows, area:models]`
   Launching multiple `general-purpose` sub‑agents while using a local OpenAI‑compatible provider triggers a hardware‑exception crash in `copilot.exe`.
   [Link](https://github.com/github/copilot-cli/issues/3250)

9. **[#3315] Research result tries to use non‑existent tool “create” for file save**
   `[area:agents, area:tools]`
   After a research query, the agent attempts to save a report using a tool called `create` that does not exist, blocking the save.
   [Link](https://github.com/github/copilot-cli/issues/3315)

10. **[#3518] Add ability to unarchive / restore an archived project session**
    `[area:sessions]`
    A user accidentally archived a long‑running session with accumulated context and child sessions. No `unarchive` command exists, making the session effectively lost.
    [Link](https://github.com/github/copilot-cli/issues/3518)

## 4. Key PR Progress

No pull requests were updated in the last 24 hours.

## 5. Feature Request Clusters

- **Model diversity**
  Multiple issues ask for additional model providers (Gemini, #2854) and finer control over sub‑agent model selection (#2758), including an opt‑out for the cost‑multiplier guard.

- **Plugin / extension lifecycle**
  Plugin authors request silent command rewrites (#2643), session ID in hook data (#2458), proper `workingDirectory` in hooks (fixed in #3508), and the ability for the AI to discover loaded extensions via `/env` (#3479).

- **Session management**
  Requests cover restoring archived sessions (#3518), fixing `resume-auto-cd` to honour original CWD (#3515), showing only truly active agents in `list_agents` (#3514), and mobile notifications when the agent is blocked (#3512).

- **Remote sessions**
  Enterprise users want reliable remote session enablement (#3442) and removal of the Android app’s read‑only limitation after premium‑request limits are hit (#2979).

- **Input / UX**
  Shift+Enter to insert newline (#2776) and proper ordering of queued user messages and `system_notification`s (#3517) are recurring ergonomic pain points.

## 6. Developer Pain Points

- **Regression‑prone releases** – Three distinct bugs in the last 24 hours are explicitly tied to v1.0.51/v1.0.55: remote sessions broken, empty `workingDirectory` in hooks, and `resume-auto-cd` resetting CWD to root.
- **Plugin tooling gaps** – Hooks lack essential context (session ID, working directory, extension visibility) and silent rewrites are blocked by mandatory dialogs, hampering automation.
- **Windows stability** – A native crash (BEX64) when using BYOK providers with parallel sub‑agents is unresolved and blocks Windows users of local‑model workflows.
- **Tool predictability** – Agents occasionally call non‑existent tools (e.g., `create`), and MCP sub‑agent calls fail on valid array responses, reducing trust in agent routing.
- **Model cost opacity** – Sub‑agent model downgrades happen silently without user control, frustrating power users who want to assign specific models to child agents.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-26

## Today’s Update Brief
No new releases were cut in the last 24 hours. Community activity is moderate: two open Issues received updates, one new bug report was filed, and a pair of long-running pull requests continue to evolve. The core conversation centres on background-task timeout configurability, WebSocket Shell-tool hangs, and a controversial TypeScript rewrite proposal.

## Releases
_No new releases in the last 24 hours._
[View all releases →](https://github.com/MoonshotAI/kimi-cli/releases)

## Hot Issues
Selected from 3 items updated in the last 24 hours (all included).

1. **[#2232] Enhancement: Background tasks need adjustable timeout**
   *Author: @jin0612787 | Comments: 2*
   The reporter points out that Kimi frequently overestimates its timeout, killing a running background task mid-execution. The workaround – restart with a longer timeout – wastes time. The request is to make the timeout runtime-adjustable so long-running tasks aren’t lost.
   **Impact:** Developers running multi-step coding or build tasks.
   **Link:** https://github.com/MoonshotAI/kimi-cli/issues/2232

2. **[#2173] [CLOSED] Add crow-cli support to Kimi Coding Plan**
   *Author: @odellus | Comments: 0*
   The creator of crow-cli purchased a Kimi Coding Plan expecting to swap in a custom API key and base URL, as was possible months ago. The issue implies a policy or auth change that now restricts that flexibility.
   **Impact:** Third-party agent users who rely on BYO-key integration.
   **Link:** https://github.com/MoonshotAI/kimi-cli/issues/2173

3. **[#2365] Bug: kimi-code-worker hangs on Shell tool via WebSocket API**
   *Author: @edkim9696-ctrl | Comments: 0*
   Using `kimi web --host 127.0.0.1 --port 5494` on Linux (Python 3.12/3.13, kimi-cli 1.44.0), the Shell tool hangs indefinitely when invoked over WebSocket. No error is returned; the worker process becomes unresponsive.
   **Impact:** Any workflow relying on the WebSocket API for Shell commands – likely CI/CD or IDE integrations.
   **Link:** https://github.com/MoonshotAI/kimi-cli/issues/2365

## Key PR Progress
Both pull requests updated within 24h are included.

1. **[#1689] [OPEN] fix(acp): return invalid params for unsupported session mode**
   *Author: @kyzhang-melo | Updated: 2026-05-26*
   Ensures the Agent Communication Protocol handler returns a proper error (invalid params) when it receives a session mode it cannot serve, rather than silently failing or hanging.
   **Link:** https://github.com/MoonshotAI/kimi-cli/pull/1689

2. **[#1707] [OPEN] refactor: rewrite from Python to Bun + TypeScript + React Ink**
   *Author: @Yuandiaodiaodiao | Updated: 2026-05-25*
   A complete, unsolicited rewrite of the entire CLI. 166 TS/TSX source files (~32k lines), 37 test files covering core, tools, UI, and utilities. The PR’s description argues that “kimi-cli in Python is a complete failure” and demands an immediate rewrite. No maintainer approval or discussion link is attached.
   **Link:** https://github.com/MoonshotAI/kimi-cli/pull/1707

## Feature Request Clusters
- **Configurable timeout & retry for background tasks** (#2232): Users want runtime control over task timeout instead of hard-coded limits that kill legitimate long-running jobs.
- **Open ecosystem & third-party integration** (#2173, #2232): A pattern of requests for API-key-level compatibility with third-party CLI agents (crow-cli, custom backends) highlights a desire for Kimi to remain an interoperable building block.

## Developer Pain Points
- **WebSocket Shell-tool hang** (#2365): A specific blocker for anyone tapping into the WebSocket API – the Shell tool can seize up with no visible error, making the API unreliable for automated pipelines.
- **Inflexible timeout policy** (#2232): Background task killing due to a single, non-adjustable timeout is a recurring frustration that forces manual restarts and careful timing estimation.
- **Language choice controversy** (#1707): While not a bug, the unsolicited rewrite PR signals that at least part of the community finds Python limiting for a terminal-native AI agent; performance and ecosystem fit are ongoing undercurrents.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

好的，作为专注AI开发者工具的技术分析师，以下是根据今日GitHub数据生成的OpenCode社区摘要。

---

## OpenCode 社区日报 | 2026-05-26

### 1. 今日动态概要
今日社区活跃度较高，虽无新版本发布，但出现了一个严重的会话无限循环Bug（#27924）和多个关于模型兼容性及性能的热门Issue。**Kimi k2.5**和**GPT模型**的响应/工具调用问题成为用户关注焦点，同时大量关于**DeepSeek V4 Pro价格调整**的反馈开始涌现。维护者对会话冻结（#29129）、Bun安装（#27906）等问题进行了积极回应，并合并了多个修复PR。

### 2. 版本发布
无新版本发布。

### 3. 热点问题 (Top 10)

1.  **[*] Kimi k2.5 Tool Calling 问题 (#20650)**
    - **作者**: @kjj9 | **评论**: 69 | **点赞**: 4
    - **摘要**: 模型在调用`bash`工具时出现JSON解析失败，并尝试调用不存在的`invalid`工具。这严重影响了依赖工具执行的核心工作流。
    - **链接**: [查看Issue](https://github.com/anomalyco/opencode/issues/20650)

2.  **[*] GPT 模型响应时间过长 (#29079)**
    - **作者**: @MarcoLouisNarca | **评论**: 44 | **点赞**: 25
    - **摘要**: 用户反馈在使用GPT-5.4等模型时，即使是简单的指令，响应时间从几秒到几分钟不等，不可预测。高赞意味着这是普遍痛点。
    - **链接**: [查看Issue](https://github.com/anomalyco/opencode/issues/29079)

3.  **[*] 提案：添加原生 `/goal` 会话目标 (#27167)**
    - **作者**: @jorgitin02 | **评论**: 24 | **点赞**: 32
    - **摘要**: 建议引入持久的会话目标/lifecycle特性，类似`.cursorrules`但全局生效。说明用户对更结构化的项目管理有强需求。
    - **链接**: [查看Issue](https://github.com/anomalyco/opencode/issues/27167)

4.  **[x] 会话无限压缩循环 (#27924)**
    - **作者**: @ranxianglei | **评论**: 4 | **点赞**: 0
    - **摘要**: 当压缩失败无法将上下文减少到token限制以下时，会话循环会进入无限循环，导致资源耗尽。这是一个严重的会话稳定性Bug。
    - **链接**: [查看Issue](https://github.com/anomalyco/opencode/issues/27924)

5.  **[*] OpenAI 流式响应间歇性冻结 (#29129)**
    - **作者**: @riccardo-algorime | **评论**: 13 | **点赞**: 14
    - **摘要**: 使用OpenAI流式API时，UI显示“working”但无任何输出，进程不崩溃但高CPU占用，只能手动重启。影响持续开发体验。
    - **链接**: [查看Issue](https://github.com/anomalyco/opencode/issues/29129)

6.  **[*] 提案：DeepSeek V4 Pro降价后调整Go用量限制 (#28846)**
    - **作者**: @icocoon | **评论**: 12 | **点赞**: 15
    - **摘要**: 鉴于DeepSeek V4 Pro API永久降价75%，用户强烈呼吁OpenCode Go订阅相应地提升用量额度或降低价格。这是今日最热的“定价”讨论。
    - **链接**: [查看Issue](https://github.com/anomalyco/opencode/issues/28846)

7.  **[*] v1.15.1+ 破坏 Bun 安装 (#27906)**
    - **作者**: @Silvenga | **评论**: 11 | **点赞**: 7
    - **摘要**: 新版要求运行postinstall脚本，但Bun默认禁止全局包的此类操作。影响了使用Bun作为包管理器的用户群体。
    - **链接**: [查看Issue](https://github.com/anomalyco/opencode/issues/27906)

8.  **[*] OpenCode Go Kimi k2.6 模型报错 (#29154)**
    - **作者**: @DaveW001 | **评论**: 7 | **点赞**: 0
    - **摘要**: 刚发布的Kimi k2.6在OpenCode Go服务上无法使用，报字段校验错误。可能是API的请求格式发生了变动。
    - **链接**: [查看Issue](https://github.com/anomalyco/opencode/issues/29154)

9.  **[*] 归档的对话找不到了 (#12888)**
    - **作者**: @RogerYe | **评论**: 11 | **点赞**: 0
    - **摘要**: 用户将对话归档后无法找回，这表明归档功能的可见性或UI设计存在问题。
    - **链接**: [查看Issue](https://github.com/anomalyco/opencode/issues/12888)

10. **[*] 上下文 Token 计数严重低估 (#24143)**
    - **作者**: @G-Guillard | **评论**: 2 | **点赞**: 1
    - **摘要**: TUI显示的token数远低于实际消耗，导致用户对上下文窗口的预期管理出现偏差，可能引发意外的上下文超限。
    - **链接**: [查看Issue](https://github.com/anomalyco/opencode/issues/24143)

### 4. 关键PR进展 (Top 10)

1.  **修复启动时配置解析错误 (#29208)**
    - **作者**: @HaleTom
    - **摘要**: 优雅地处理`opencode.jsonc`中的无效JSON/JSONC，避免“Unexpected server error”报错。
    - **链接**: [查看PR](https://github.com/anomalyco/opencode/pull/29208)

2.  **新增技能 `hidden` 元数据字段 (#29193)**
    - **作者**: @phalla-doll
    - **摘要**: 允许技能文件在用户界面中隐藏，与Agent的`hidden`字段对齐，帮助用户管理大量自定义技能。
    - **链接**: [查看PR](https://github.com/anomalyco/opencode/pull/29193)

3.  **已关闭] TUI 项目文件浏览器/编辑器 (#7021)**
    - **作者**: @ryanwyler
    - **摘要**: 一个长期运行的PR，为TUI增加了文件树浏览和语法高亮编辑器功能，今日已关闭，可能已合并或废弃。
    - **链接**: [查看PR](https://github.com/anomalyco/opencode/pull/7021)

4.  **修复 Shell 工具元数据预览 Unicode 截断 (#29297)**
    - **作者**: @YOMXXX
    - **摘要**: 将字符长度检查改为字节长度检查，修复了多字节字符输出被错误截断的问题。
    - **链接**: [查看PR](https://github.com/anomalyco/opencode/pull/29297)

5.  **修复定制 OpenAI 兼容 Provider 的 MCP 工具引用 (#29295)**
    - **作者**: @YOMXXX
    - **摘要**: 解决了自定义Provider中，MCP工具schema包含本地`$ref`时可能导致的解析失败问题。
    - **链接**: [查看PR](https://github.com/anomalyco/opencode/pull/29295)

6.  **修复`--continue --fork`时TUI显示dummy session (#29293)**
    - **作者**: @YOMXXX
    - **摘要**: 解决了`opencode --continue --fork`命令启动时，TUI错误地显示占位路由“dummy”的问题。
    - **链接**: [查看PR](https://github.com/anomalyco/opencode/pull/29293)

7.  **修复容器/沙箱环境中用户信息获取失败 (#29289, #29296)**
    - **作者**: @LifeJiggy, @YOMXXX
    - **摘要**: 两个PR解决了在无`os.userInfo()`的容器环境中启动崩溃的问题，改为使用默认值。增强了在多环境下的健壮性。
    - **链接**: [PR1](https://github.com/anomalyco/opencode/pull/29289) | [PR2](https://github.com/anomalyco/opencode/pull/29296)

8.  **修复非Windows环境下pwsh的env变量查找 (#29287)**
    - **作者**: @LifeJiggy
    - **摘要**: 修复了Shell工具中，在非Windows平台使用pwsh时，环境变量查找区分大小写导致的兼容性问题。
    - **链接**: [查看PR](https://github.com/anomalyco/opencode/pull/29287)

9.  **新增内置 `simplify` 技能 (#29280)**
    - **作者**: @AbdoKnbGit
    - **摘要**: 通过读取git diff，新增一个用于审查和简化代码变更的内置技能。
    - **链接**: [查看PR](https://github.com/anomalyco/opencode/pull/29280)

10. **重构核心数据库 Schema 所有权 (#29068)**
    - **作者**: @thdxr
    - **摘要**: 将Drizzle schema和迁移逻辑从`packages/opencode`移至`packages/core`，是重要的架构层面重构。
    - **链接**: [查看PR](https://github.com/anomalyco/opencode/pull/29068)

### 5. 功能请求聚类

*   **OpenCode Go 用量与定价调整**: 围绕DeepSeek V4 Pro大幅降价，多个Issue（#28846, #28962, #29115）一致请求OpenCode Go提升用量额度或降低价格。这是社区对上游成本变化的最直接反应。
*   **会话持久化与管理增强**: 用户持续要求改进会话管理，包括：持久化的`/goal`会话目标（#27167）、会话固定（Pin）功能的桌面/Web支持（#28872）、以及清晰的归档恢复路径（#12888）。
*   **MCP工具与Agent模型兼容性**: 随着MCP生态发展，用户开始遇到工具数量超出模型限制（#28662）和复杂的工具Schema解析（#29295）问题，需求转向更精细化的工具过滤和更鲁棒的兼容层。

### 6. 开发者痛点总结

*   **AI模型兼容性与性能不匹配**: **Kimi k2.5/2.6**的工具调用和API兼容性问题，以及**GPT模型**响应时间的不可预测，暴露出多模型支持中的质量起伏问题，开发者需为不同任务挑选稳定模型。
*   **会话稳定性与生命周期管理**: 无限压缩循环（#27924）、流式冻结（#29129）和fork时会话ID错误（#29262）等问题，表明核心会话引擎在复杂场景下的稳定性仍需加强，这直接中断了开发者的工作流。
*   **配置与启动错误处理薄弱**: 无效的JSON配置（#29208）、容器环境信息缺失（#29289）、和Bun的postinstall兼容性（#27906）导致用户在新环境或配置错误时直接启动失败，降低了开箱即用体验。
*   **残影与状态感知问题**: 尽管较老Issue，但“Stale LSP errors”（#2156）和“Context token count underestimated”（#24143）等问题的持续关注度表明，开发者对UI状态与实际模型状态的同步（如错误、token计数）有较高要求。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区日报 | 2026-05-26

## 1. 今日更新概要

今日 `qwen-code` 围绕 `qwen serve` daemon 模式的能力扩展和大量核心/CLI Bug 修复发布了一个夜间构建版本，并收到 25 个新 Issue 和 50 个活跃 PR。社区讨论焦点集中在扩展服务端 API 端点、改善长对话和批量编辑下的 UI 稳定性，以及修复 IDE 插件兼容性问题。

## 2. 版本发布

- **[v0.16.1-nightly.20260526.e8b79d772](https://github.com/QwenLM/qwen-code/releases/tag/v0.16.1-nightly.20260526.e8b79d772)**
  修复构建阶段未清理过期输出文件导致的 TypeScript TS5055 错误，提升跨团队构建可靠性。

## 3. 热点议题

1. **[#4175：提案(serve)：面向 v0.16 生产就绪的模式 B 功能优先级路线图](https://github.com/QwenLM/qwen-code/issues/4175)**
   作者 doudouOUC 在 Stage 1 daemon 合并后，详细规划了剩余 40 条评论的优先级路线，涵盖路由、认证、会话复用等遗留差距。

2. **[#3803：Daemon 模式（qwen serve）设计提案与开放决策](https://github.com/QwenLM/qwen-code/issues/3803)**
   社区核心成员 wenshao 发布的 6 章设计方案，已获 1 个 👍 和 24 条讨论，是当前 daemon 功能实现的基础约束文档。

3. **[#4514：追踪(serve)：Daemon 能力差距与优先级待办列表（v0.16-alpha 后）](https://github.com/QwenLM/qwen-code/issues/4514)**
   doudouOUC 在 2026-05-25 创建，系统梳理了下游客户端（TypeScript/Python/Java SDK、IDE 插件）当前无法使用的 HTTP/SSE 端点缺口，已收到 7 条补充反馈。

4. **[#4488：qwen code v0.16.0 在 VS Code 侧边栏不显示](https://github.com/QwenLM/qwen-code/issues/4488)**
   timilan123 报告新版 VS Code 1.120.0 下插件闪退，仅旧版 1.95.3 正常工作。社区 6 条评论暂无明确根因，已标记 `need-information`。

5. **[#4493：Rider IDE 无法登录 qwen code](https://github.com/QwenLM/qwen-code/issues/4493)**
   youxi777 报告 Rider 浏览器 OAuth 重定向循环，无法调用阿里云 Token Plan 模型。影响 JetBrains 生态用户。

6. **[#4513：qwen3.7-max OpenAI 兼容接口拒绝包含 PNG inlineData 的多模态请求](https://github.com/QwenLM/qwen-code/issues/4513)**
   用户 wunan067830-west 反馈 Qwen Code 0.16.1 发送的上下文含 PNG 的 inlineData 被 DashScope 接口返回 400 Bad Request。影响图片上传场景。

7. **[#4506：Agent 卡在重复任务上不执行](https://github.com/QwenLM/qwen-code/issues/4506)**
   arnolandes 描述 Agent 反复要求读取文件但从不执行任何操作，陷入死循环。法语原文，表明国际用户同样受此问题影响。

8. **[#4494：侧查询忽略用户配置的输出语言](https://github.com/QwenLM/qwen-code/issues/4494)**
   pomelo-nwu 指出 `recap`、`title`、`tool-use summary`、建议等系统侧查询始终以英文输出，即使 `output-language.md` 设为中文。影响国际化用户体验。

9. **[#4442：批量编辑文件时 UI 冻结](https://github.com/QwenLM/qwen-code/issues/4442)**
   philau2512 描述 AI 批量修改文件时终端 UI 卡死，`Ctrl+C` 无效，必须强制删除会话。同时反馈长对话时内容断续展示。

10. **[#4479：需要每日 Token 消耗统计功能](https://github.com/QwenLM/qwen-code/issues/4479)**
    xiaopang927423 发现单次使用消耗了 3 千万 Token，强烈要求增加每日用量统计视图。收到 3 条评论，获 `welcome-pr` 标签，社区愿意贡献实现。

## 4. 重点 PR 进展

1. **[#4380：Feat/daemon react cli](https://github.com/QwenLM/qwen-code/pull/4380)**
   作者 ytahdn 在 `packages/web-shell` 下新增基于 React 的 Web-shell，支持 daemon 会话、SSE 事件、权限请求、slash 命令补全、模型切换、会话恢复、MCP、技能和 agents 视图。这一客户端将对非 CLI 用户友好。

2. **[#4477：feat(cli)：密集内联面板 + 键盘导航，支持并行代理分发](https://github.com/QwenLM/qwen-code/pull/4477)**
   wenshao 改进 `/review` 等命令在多 Agent 并行时的终端显示，集中呈现进度而非仅显示“Agent × 9”。

3. **[#4146：feat(cli)：基于 ink 7 的长对话虚拟视口](https://github.com/QwenLM/qwen-code/pull/4146)**
   chiga0 针对长会话终端渲染开销大的问题实现虚拟视口，是 #3941 的继承 PR。

4. **[#4526：fix(core)：限制 hard rescue 压缩重试](https://github.com/QwenLM/qwen-code/pull/4526)**
   Jerry2003826 为每个聊天新增 `hardRescueFailureCount`，限制压缩失败时的无限重试，避免死循环。

5. **[#4375：feat(core)：增强系统提示——读代码后编辑、专用工具优先级、逐步沟通](https://github.com/QwenLM/qwen-code/pull/4375)**
   DennisYu07 新增三段系统提示强化 Agent 的行为：先读取代码再编辑、优先使用专用工具、逐步沟通。

6. **[#4472：feat(daemon)：在 /acp 端点实现 ACP Streamable HTTP 传输（RFD #721）](https://github.com/QwenLM/qwen-code/pull/4472)**
   chiga0 为 `qwen serve` 增加 ACP 流式传输作为次优北向传输通道，与现有 REST+SSE 共存。

7. **[#4527：feat(serve)：--allow-origin CORS 白名单（T2.4 #4514）](https://github.com/QwenLM/qwen-code/pull/4527)**
   doudouOUC 将无条件的 403 限制改为可配置的域名白名单，打通浏览器 WebUI 客户端接入。

8. **[#4519：fix(core)：在侧查询中遵循输出语言配置](https://github.com/QwenLM/qwen-code/pull/4519)**
   Jerry2003826 为 session recap、自动标题、工具使用摘要等用户可读的侧查询追加 `output-language.md` 规则，直接回应该热点 Issue #4494。

9. **[#4524：fix(core)：限制前台 Shell 输出捕获](https://github.com/QwenLM/qwen-code/pull/4524)**
   Jerry2003826 设置前台 Shell 执行输出的捕获预算，超出部分丢弃以避免超大字符串导致内存/UI 问题。与 #4442 冻结问题有关。

10. **[#4520：fix(core)：截断模型侧的工具输出](https://github.com/QwenLM/qwen-code/pull/4520)**
    Jerry2003826 对大工具输出进行截断，保存完整内容到临时文件并在模型中留下 `read_file` 指针，既保留信息又避免上下文膨胀。

## 5. 功能请求聚类

- **扩展 `qwen serve` HTTP/SSE API 覆盖**
  多篇 Issue（#4175、#3803、#4514）持续要求完善 daemon 模式下的端点能力，包括手动压缩、会话元数据管理、CORS 支持、ACP 传输等。PR #4516、#4527 正在响应这些需求。

- **增强 Telemetry 与 Token 消耗可观测性**
  #4479（每日消耗统计）、#4384（W3C traceparent 传播）、#4501（侧查询 thinking 禁用未生效）显示用户对用量和追踪可视化的需求上升，且已有社区成员愿参与提交。

- **安全性和扩展隔离**
  #4370（AUTO 模式应额外裁剪危险解释器规则）、#4425（扩展源诊断中凭证隐藏）和 #4444（Token Plan 缓存未启用）表明核心开发者和贡献者对安全边界、缓存透传的关注。

## 6. 开发者痛点

- **IDE 兼容性问题频发**
  #4488（VS Code 新版侧栏消失）、#4493（Rider 登录失败）代表多 IDE 集成稳定性问题，用户跨越多个编辑器生态。

- **任务卡顿与 UI 冻结**
  #4442（批量编辑时 UI 完全卡死）、#4506（Agent 陷入无限循环）说明当前并发任务管理和终端渲染在重负载场景下存在瓶颈。

- **国际化与配置一致性**
  #4494（侧查询语言忽略输出语言配置）、#4448（无效 `settings.json` 无错误提示）体现配置刚性不足，用户配置与实际行为偏差时有发生。

- **旧协议兼容性限制**
  #4513（qwen3.7-max 无法处理 inlineData）暴露了对 DashScope 多模态接口兼容性的依赖问题，影响图片输入工作流。

</details>