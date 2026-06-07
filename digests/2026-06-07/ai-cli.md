# AI CLI 工具社区动态日报 2026-06-07

> 生成时间: 2026-06-07 02:42 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## 横向对比

好的，作为专注于 AI 开发工具生态的资深技术分析师，我已仔细阅读并分析了您提供的 2026 年 6 月 7 日各主流 AI CLI 工具的社区动态摘要。以下是为您生成的横向对比分析报告。

---

## AI CLI 工具社区横向对比报告 | 2026-06-07

### 1. 今日横向概览

今日，各主流 AI CLI 工具的社区活动呈现高度分化态势。**Qwen Code** 和 **OpenCode** 社区最为活跃，前者聚焦于服务端（`serve`）架构和内存管理的重大 Bug 修复，后者则在内核重构与安全沙箱需求上投入巨大。**GitHub Copilot CLI** 和 **Gemini CLI** 共同承受着 WSL 环境下的性能退化与 MCP 协议集成的阵痛。相比之下，**Claude Code** 与 **Codex CLI** 社区保持着常规的 Bug 反馈与功能迭代节奏，而 **Kimi Code CLI** 则进入罕见的静默期。

### 2. 各工具活跃度对比

| 工具名称 | 今日热点 Issues 数 | 今日重要 PR 数 | 今日版本发布 | 活跃度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 5 | 1 个 (v2.1.168) | 中等 |
| **OpenAI Codex** | 10 | 10 | 1 个 (rust-v0.138.0-alpha.6) | 中高 |
| **Gemini CLI** | 10 | 10 | 0 | 高 (讨论激烈，Bug 多) |
| **GitHub Copilot CLI** | 10 | 0 | 0 | 中等 (问题集中，PR 静默) |
| **Kimi Code CLI** | 0 | 2 | 0 | 极低 |
| **OpenCode** | 10 | 10 | 0 | 高 (重构与 Bug 修复并行) |
| **Qwen Code** | 10 | 10 | 1 个 (nightly) | 高 (功能推进与紧急修复) |

### 3. 共同出现的功能方向

今日数据中，多个工具的社区都明确提出了相似的需求，表明这些是当前 AI CLI 工具的共同演进方向：

- **自动化 Agent 的可靠性**：**Claude Code** 报告了 Agent 工具调用失败、静默编辑失败、子进程认证失败等问题；**Gemini CLI** 也报告了子代理误报成功、Agent 卡死等核心工作流缺陷；**Copilot CLI** 则对 Autopilot 模式的“越权”和“范围蔓延”表达了担忧；**Qwen Code** 有任务陷入死循环的报告。这表明，尽管 Agent 化是共识，但其**任务执行的确定性、状态管理的鲁棒性和权限边界的清晰度**是所有工具的首要挑战。

- **模型兼容性与开源模型支持**：**Codex CLI** 社区对非 OpenAI 提供商（如 Ollama, LM Studio）下 MCP 工具不可用表达了强烈不满；**Copilot CLI** 社区呼吁提供更低成本的开源模型选项；**Qwen Code** 的 Bug 修复 PR 直接针对自托管模型 (vLLM) 的参数兼容性问题。这反映出用户渴望**摆脱对单一模型/提供商锁定**，寻求更灵活、成本可控的模型组合方案。

- **MCP (Model Context Protocol) 集成稳定性**：**Claude Code** 修复了因环境变量未传递导致的子进程认证失败；**Codex CLI** 完善了 MCP OAuth 凭证的过期状态管理；**GitHub Copilot CLI** 报告了 MCP 会话 ID 未持久化、认证触发重复重试等严重 Bug；**Gemini CLI** 则出现了 MCP 工具被普通包管理器覆盖的问题。这表明 **MCP 的客户端实现仍处于早期磨合阶段**，在认证、会话管理和上下文隔离方面的工程化水平是当前的薄弱环节。

- **Windows / WSL 平台兼容性**：**Claude Code** 社区长期存在 WSL 下的路径与认知问题；**Copilot CLI** 报告了 WSL2 下 CPU 占用飙升和启动延迟；**OpenCode** 报告了在 Windows 终端下退出 CLI 会杀死父进程。这再次印证了 **WSL/Windows 环境是这些 CLI 工具跨平台支持中的共同短板**。

### 4. 差异化定位分析

- **Claude Code (Anthropic)**：作为 Anthropic 的阵前工具，社区动态高度绑定于 Opus 系列模型（如 thinking 摘要显示、工具调用解析）的更新节奏。其社区需求也更具前瞻性，如提出“分层的 Opus/Sonnet 大脑结构”。定位为**探索前沿 Agent 形态的“旗舰”工具**，但稳定性代价也较高。

- **OpenAI Codex CLI**：社区活动表明其正在经历深度工程化重构，重点在于 **扩展 API 和全局指令生命周期**，以支撑更复杂的 Agent 场景。其用户群更关注 **数据持久化、UI 定制** 等成熟度问题，以及与其他模型提供商（如 Ollama）的兼容性。定位是**打造稳定、可扩展的 Agent 开发平台**。

- **Gemini CLI (Google)**：其社区热点 Issue 揭示了较严重的**核心工作流缺陷**（Shell 命令卡死、子代理误报），这与其 Agent 行为尚不成熟的现状相符。同时，社区也在积极探究**更复杂的自动化场景**（如长期运行任务）。定位是**正在快速但挣扎地构建强大 Agent 能力的挑战者**。

- **GitHub Copilot CLI**：问题高度集中在 **WSL2 性能、MCP 协议实现以及模型选择限制** 上。由于其与 GitHub 生态绑定紧密，其用户更关注**成本、平台兼容性和在既有工作流中的无缝集成**。定位是**面向 GitHub 生态的“高性价比”集成型工具**，但在新兴协议和架构支持上略显滞后。

- **Kimi Code CLI (MoonshotAI)**：今日完全静默，处于**明显的发展平台期**。其现有的 PR 关注点（MCP 优雅降级、图片输入稳定性）表明其正在打磨核心交互体验。

- **OpenCode (Anomaly)**：社区活跃度极高，内核重构与安全沙箱需求并存，显示出其**社区驱动力强、演进激进**的特征。用户对沙箱和安全 (#2242) 的迫切需求，使其定位为**面向未来、强调安全隔离和运行时可靠性的“极客”工具**。

- **Qwen Code (Alibaba)**：社区动态极具特色，一方面在**服务端能力（`qwen serve`）上快速迭代**，以支撑远程协作和 IDE 集成；另一方面在**解决 OOM、Vim 键位冲突等影响实际使用的“硬” Bug**。定位为**追求“双模式”（CLI+Server）全功能覆盖，并注重本土化（如 SMB 共享）和自托管模型支持的务实型工具**。

### 5. 社区活跃度记录

- **最活跃 (讨论与开发并行)**: **Qwen Code** 和 **OpenCode**。两者均有多条高热度 Issues 和大量核心 PR 同时推进。Qwen Code 的 `Mode B` 路标讨论和 OpenCode 的内核重构都显示出社区参与度和开发响应速度极快。
- **高活跃 (问题驱动)**: **Gemini CLI** 和 **GitHub Copilot CLI**。虽然 Issues 数量多，但主要集中于 Bug 报告和性能问题，PR 进展相对缓慢或为零，反映出开发团队更侧重于响应和修复。
- **中等活跃**: **Claude Code** 和 **OpenAI Codex CLI**。两者均有版本发布，社区讨论稳健，但并未出现引领性的重大突破。
- **最低活跃**: **Kimi Code CLI**。今日无新 Issue 和新版本，社区基本处于停滞状态。

### 6. 有证据支撑的观察

1.  **“Agent 可靠性”已成为普遍挑战**：**Claude Code** (#62123, #64171)、**Gemini CLI** (#22323, #25166)、**Copilot CLI** (#3655, #3703) 和 **Qwen Code** (#4700) 均在今日报告中出现了 Agent 任务执行失败、误报、卡死或行为不可控等核心问题。这不再是单一工具的个体问题，而是目前整个 AI CLI 工具领域**从“演示”走向“生产”必须跨越的关键门槛**。

2.  **WSL 是跨平台支持中最大的“短板”**：**Claude Code**（长期痛点）、**Copilot CLI** (#3652, #3700) 和 **OpenCode** (#27749) 在今日都报告了与 WSL 相关的问题，涵盖性能、启动延迟和终端崩溃。这表明，尽管各工具都对 Linux 和 macOS 支持良好，但对 Windows 生态下的开发者体验仍有巨大的提升空间。

3.  **“成本”与“模型选择”是用户最真实的痛点**：**Copilot CLI** (#3705, #3707) 和 **Codex CLI** (#26234) 用户都在直接呼吁提供更便宜的模型或支持开源模型。这与 Qwen Code 主动修复自托管模型兼容性 (#4793) 形成呼应。用户显然不满足于被锁定在昂贵或单一的模型生态中，**对模型选择的自主权和成本控制是真实且迫切的需求**。

4.  **MCP 协议集成进入“工程落地”阵痛期**：**Copilot CLI** (#3668, #3706)、**Codex CLI** (#26713) 和 **Claude Code** (#65875) 今日都在修复与 MCP 相关的基础设施问题，如会话管理、认证和上下文传递。这标志着 MCP 已从概念验证阶段进入到**需要解决实际工程难题（如并发、状态管理、安全）的部署阶段**。

5.  **服务端/扩展架构是下一阶段的进化方向**：**Qwen Code** 的 `Mode B` 大规模 PR (#4827, #4820) 和 **OpenCode** 的 V2 后台任务工具、服务 API 规范化 (#31173, #31049) 都指向同一个趋势：**AI CLI 工具正从单机终端应用，演化为具备服务端守护进程、API 接口和扩展系统的平台级工具**。这为 IDE 集成和远程协作提供了基础。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

好的，这是根据您提供的 GitHub 数据生成的 2026 年 6 月 7 日 Claude Code 社区动态日报。

---

# Claude Code 社区动态日报 | 2026-06-07

## 今日更新概览

今日发布了一个小版本更新 (v2.1.168)，内容为 Bug 修复和可靠性改进。社区讨论热度集中在 Opus 系列模型的 thinking 摘要显示和工具调用解析问题上，这些问题在多个 Issue 中被反复提及，且有用户报告了因环境变量未传递导致的子进程认证失败问题。

## 版本发布

- **v2.1.168**: [发布链接](https://github.com/anthropics/claude-code/releases/tag/v2.1.168)
    - 内容：Bug 修复和可靠性改进。

## 社区热点 Issues

1.  **[Bug] Anthropic API Error: Model's tool call could not be parsed** [#62123](https://github.com/anthropics/claude-code/issues/62123)
    - **影响场景**：用户在使用 Claude Opus 4.7 时，模型调用工具后返回无法解析的结果，导致进程卡死。该问题在 macOS 环境（VS Code）下多发。
    - **社区反应**：获得 97 个点赞和 48 条评论，是当前讨论热度最高的问题。

2.  **[Bug] Opus 4.7 thinking summaries not rendered in VS Code extension** [#49322](https://github.com/anthropics/claude-code/issues/49322)
    - **影响场景**：在 VS Code 扩展中使用 Opus 4.7 时，其 extended thinking 的摘要无法显示。
    - **社区反应**：自 4 月报告以来持续有用户跟进，有 44 条评论。

3.  **[Bug] Thinking summaries missing on Opus 4.7 — harness doesn't set display: "summarized"** [#49268](https://github.com/anthropics/claude-code/issues/49268)
    - **影响场景**：同样是 Opus 4.7 的 thinking 摘要不显示问题，用户追踪到根本原因在于后端未正确设置 `display: "summarized"` 参数。
    - **社区反应**：获得 70 个点赞，说明此问题影响范围广，用户关注度高。

4.  **[Bug] Github Issue Prompt Too Long** [#23377](https://github.com/anthropics/claude-code/issues/23377)
    - **影响场景**：用户在使用 Claude Code 处理冗长的 GitHub Issue 时，提示词过长导致问题。已持续活跃数月。
    - **社区反应**：获得 34 个点赞和 42 条评论，表明这是一个长期存在的痛点。

5.  **[Enhancement] Make autonomous Claude Code actually viable: tiered Opus brains + Sonnet workers + persistent state** [#56913](https://github.com/anthropics/claude-code/issues/56913)
    - **影响场景**：用户提案将 Claude Code 发展为更强大的自主 Agent，建议采用分层架构（Opus 做大脑，Sonnet 做执行者）并支持持久化状态。
    - **社区反应**：有 26 条评论，反映了部分开发者对高级 Agent 化能力的需求。

6.  **[Bug] Remote control session fails to resync after connection drop** [#28571](https://github.com/anthropics/claude-code/issues/28571)
    - **影响场景**：iOS 远程控制 Claude Code 会话时，一旦网络中断或应用进入后台，会话无法自动重新同步，导致消息丢失且无任何提示。
    - **社区反应**：获得 50 个点赞，该问题对移动办公场景影响较大。

7.  **[Bug] Opus 4.8 returns empty thinking blocks** [#63358](https://github.com/anthropics/claude-code/issues/63358)
    - **影响场景**：切换到 Opus 4.8 后，thinking 功能完全失效，模型返回空的 thinking 块。用户指出这是 Opus 4.7 时期 #49268 问题的复发。
    - **社区反应**：有 10 条评论，作为 regression 问题被重新提出。

8.  **[Bug] Feedback: noticeable reliability regression — agent edits from memory, silent Edit failures** [#64171](https://github.com/anthropics/claude-code/issues/64171)
    - **影响场景**：付费用户在长时间工作后反馈，Agent 的可靠性出现明显下降，包括依据记忆而非当前状态进行编辑、edit 操作静默失败等问题。
    - **社区反应**：有 7 条评论，反映用户对基础可靠性的担忧。

9.  **[Bug] High Token Burn Due to Redundant Context Resubmission & Compaction Loops** [#42647](https://github.com/anthropics/claude-code/issues/42647)
    - **影响场景**：Claude Code 存在冗余的上下文重新提交和压缩循环，导致 token 大量消耗，增加了用户使用成本。
    - **社区反应**：获得 4 个点赞，这是一个影响成本和性能的长期问题。

10. **[Bug] Slash command during in-flight advisor() call permanently 400s the session** [#63375](https://github.com/anthropics/claude-code/issues/63375)
    - **影响场景**：当 `advisor()` 工具调用正在进行时，如果用户输入 `/usage` 等斜杠命令，会破坏会话的 JSONL 日志结构，导致该会话永久失效（400 错误）。
    - **社区反应**：有 6 条评论，说明这是一个需要处理的会话稳定性 bug。

## 重要 PR 进展

过去 24 小时内只有 5 个 PR 更新，所有 PR 均列如下：

1.  **docs(agent-development): document ${CLAUDE_PLUGIN_ROOT} limitation in subagents** [#65919](https://github.com/anthropics/claude-code/pull/65919)
    - **内容**：文档更新。说明在子 Agent 中 `CLAUDE_PLUGIN_ROOT` 环境变量无法解析为实际路径的已知限制。

2.  **docs(mcp-integration): clarify allowed-tools vs agent tools: enforcement** [#65916](https://github.com/anthropics/claude-code/pull/65916)
    - **内容**：文档更新。澄清了 `allowed-tools`（自动批准列表）和 `tools:`（硬性限制）在功能上的区别。

3.  **Fix dev container issues** [#65666](https://github.com/anthropics/claude-code/pull/65666) **(CLOSED)**
    - **内容**：修复了 Dev Container 因防火墙封禁域名而无法构建的问题，并为 API Key 传递提供了新机制。

4.  **fix: Forward ANTHROPIC_BASE_URL to agentic_review child process** [#65875](https://github.com/anthropics/claude-code/pull/65875)
    - **内容**：修复一个 bug。当使用代理/网关（如 LiteLLM）时，`ANTHROPIC_BASE_URL` 环境变量未能传递给 `advidor` 功能启动的子进程，导致该功能认证失败。

5.  **Use workload identity federation for Claude auth in CI workflows** [#61584](https://github.com/anthropics/claude-code/pull/61584) **(CLOSED)**
    - **内容**：将仓库的 CI 自动化工作流从静态 API Key 切换为工作负载身份联盟，以提高安全性。

## 功能需求归类

从近期的 Issues 中，可以观察到用户反复提出的功能方向：

1.  **新模型支持与兼容性**：大量 Issue 核心围绕 Opus 4.7/4.8 的 **thinking 摘要显示**（#49322, #49268, #63358）和 **工具调用解析**（#62123）问题。用户对最新模型的支持非常敏感，任何回归都会被迅速反馈。
2.  **IDE 集成**：用户希望在 VS Code 扩展的聊天面板中，能看到当前使用的 **模型名称** 和 **thinking 模式** 的指示器（#28986），并允许自定义消息颜色（#65857）。同时，扩展的稳定性（如重启后激活问题）是持续关注点。
3.  **自治 Agent 能力**：用户对 **持久化任务**（#56913, #65968）和 **子 Agent 架构** 表现出兴趣，希望 Claude Code 能作为长期运行的、更智能的编排引擎，而非仅仅是一个结对编程工具。
4.  **平台兼容性**：Windows 和 WSL 上的问题（#59114, #23377, #62706）、以及 SSH 终端（#62706）下出现的兼容性问题是持续的痛点。
5.  **可靠性与稳定性**：工具调用静默失败、edit 操作不一致（#64171）、会话因特定操作而永久 400 错误（#63375）等问题，表明用户将基础可靠性置于新功能之上。
6.  **成本与用量管理**：用户关注因上下文压缩循环导致的 token 浪费（#42647）和 Anthropic 端的容量限制（#65942），期望更好的用量透明度和优化。

## 开发者关注点

- **模型稳定性与回归**： 开发者对 Opus 系列模型的 thinking 功能和工具调用解析的稳定性表示担忧，特别是从 Opus 4.7 到 4.8 的问题复发。这直接影响核心 agent 功能的可用性。
- **环境变量传递**： `ANTHROPIC_BASE_URL` 和 `CLAUDE_PLUGIN_ROOT` 等环境变量在子进程或子 Agent 中传递失败（#65875, #65919），导致使用代理网关或复杂插件时的功能受限，是开发流程中的痛点。
- **会话状态完整性**： 任何非预期的流程，如在 `advisor()` 调用期间使用斜杠命令，都可能不可逆地破坏会话（#63375），这种脆弱性对长时间工作流构成风险。
- **自动化与 Agent 流程**： 用户正在积极探索更复杂的自动化场景（如长期运行的任务 #56913），但遇到了持久化任务被意外终止（#65968）和环境变量不透明的问题，表明 Agent 框架在生产环境中应用仍面临挑战。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-06-07

---

## 今日更新概览

过去 24 小时内，Codex 仓库发布了一个小版本（`rust-v0.138.0-alpha.6`）。社区活跃度较高：共更新 50 条 Issue（评论数最高的 30 条中，`#13018` 获得 103 个 👍 及 23 条评论），以及 34 条 Pull Request（涉及全局指令生命周期、MCP 认证、跨平台路径等核心重构）。用户反馈集中在数据持久化、UI 定制、性能以及自定义模型兼容性方面。

---

## 版本发布

- **rust-v0.138.0-alpha.6** — 仅标注为 0.138.0-alpha.6 发布，未提供详细 Release Notes。
  https://github.com/openai/codex/releases/tag/rust-v0.138.0-alpha.6

---

## 社区热点 Issues（10 条）

1. **#13018 — 允许在 Codex 应用中删除线程（已关闭）**
   用户要求提供删除线程的功能（而非仅归档），当前需手动进入 `~/.codex/archived_sessions/` 删除文件。获得 103 个 👍，为本周最热门需求。
   https://github.com/openai/codex/issues/13018

2. **#12862 — CLI 增加 `--worktree` 和 `--tmux` 参数，一键启动隔离会话**
   用户希望 `codex --worktree [name] --tmux` 能自动创建 git worktree 并附加到 tmux，类似社区手动脚本。71 个 👍，16 条评论。
   https://github.com/openai/codex/issues/12862

3. **#23979 — 桌面版更新后本地项目对话历史丢失，但 `state_5.sqlite` 中仍存在数据**
   macOS 用户更新后 UI 中历史消失，但底层文件未删除。16 条评论，影响范围较大。
   https://github.com/openai/codex/issues/23979

4. **#17827 — 可定制的状态栏**
   用户希望 TUI 底部能显示 token 用量、模型名、速率限制、git 分支等信息，类似 Claude Code。59 个 👍，15 条评论。
   https://github.com/openai/codex/issues/17827

5. **#26600 — 未使用 Codex 时配额缓慢下降**
   用户发现即使不主动使用，剩余配额仍逐渐减少，怀疑后台会话或自动任务消耗。15 条评论。
   https://github.com/openai/codex/issues/26600

6. **#26234 — 非 OpenAI Responses API 提供者（Ollama/LM Studio/OpenRouter）下 MCP 工具不可用**
   Codex 将 MCP 工具封装在命名空间中，而非 OpenAI 专有 provider 无法调用。14 条评论，22 个 👍。
   https://github.com/openai/codex/issues/26234

7. **#24510 — 桌面版因大量活跃线程元数据导致高 CPU**
   `state_5.sqlite` 中 `title/preview/first_user_message` 等字段过多时，app-server 持续高 CPU。13 条评论。
   https://github.com/openai/codex/issues/24510

8. **#25500 — 项目侧栏显示“No chats”但实际存在未归档会话**
   特定版本下项目侧栏无法正确列出已有对话。10 条评论。
   https://github.com/openai/codex/issues/25500

9. **#25820 — CLI 登录被电话验证速率限制阻塞（Pro 用户）**
   Pro 订阅用户使用 `codex login` 时因手机验证触发限流而无法认证。10 条评论。
   https://github.com/openai/codex/issues/25820

10. **#21232 — 图像密集项目导致桌面版冻结/无响应**
    打开含大量生成图像的项目时，Windows 版 Codex 变为 Not Responding。14 个 👍，9 条评论。
    https://github.com/openai/codex/issues/21232

---

## 重要 PR 进展（10 条）

1. **#26840 — 添加类型化跨平台路径 URI**
   引入 `codex-utils-environment-id`，提供稳定、跨平台（本地/远程）的路径标识符。由 @anp-oai 提交。
   https://github.com/openai/codex/pull/26840

2. **#26830 — 全局指令生命周期特性化**
   在迁移全局指令离开 `Config` 之前，为其创建端到端测试覆盖（线程创建、恢复、压缩、子代理等）。
   https://github.com/openai/codex/pull/26830

3. **#26713 — 将不可用的 MCP OAuth 凭证报告为已登出**
   持久化的 OAuth 凭证过期后若无刷新令牌，不再显示为“已认证”，而是提示用户重新登录。
   https://github.com/openai/codex/pull/26713

4. **#26835 — 测试扩展 API 契约**
   为 `codex-extension-api` 增加直接测试套件，覆盖类型状态、注册表顺序、能力适配器。
   https://github.com/openai/codex/pull/26835

5. **#26839 — 阻止项目配置权限覆盖**
   针对安全漏洞报告，增加审批策略、沙箱模式、工作区配置黑名单。@evawong-oai 提交。
   https://github.com/openai/codex/pull/26839

6. **#26754 — 将侧线程从 TUI 事件循环中分离**
   修复 `/side` 命令在主线程事件密集且分叉缓慢时可能引起的死锁。
   https://github.com/openai/codex/pull/26754

7. **#25704 — 为 Responses strict mode 标准化 Codex 图像**
   当 feature flag `responses_api_codex_strict_mode` 启用时，自动转换本地/data URL 图像为 prepared data URL。
   https://github.com/openai/codex/pull/25704

8. **#26834 — 采用全局指令贡献者**
   完成全局指令加载从 `Config` 向扩展 API 的迁移，使主机可选择贡献者并明确新鲜度点。
   https://github.com/openai/codex/pull/26834

9. **#26833 — 持久化结构化指令快照**
   历史共享线程必须保留创建时的指令快照，确保恢复、分叉、压缩等操作行为一致。
   https://github.com/openai/codex/pull/26833

10. **#26831 — 添加全局指令贡献者 API**
    为扩展系统提供小型的显式扩展点，使主机可供应全局指令，不再依赖核心配置加载。
    https://github.com/openai/codex/pull/26831

---

## 功能需求归类

从近期 Issue 中可归纳出以下用户反复提及的功能方向：

- **UI 易用性改进**：允许删除线程（#13018）、可定制状态栏（#17827）、内建 Prompt Snippets 面板（#26467）、线程工作目录支持重命名后更新（#26836）。
- **CLI 增强**：一键隔离会话（`--worktree` + `--tmux`，#12862）、Windows agent shell 可配置（#16717）。
- **自定义模型兼容性**：非 OpenAI 提供商下 MCP 工具调用（#26234）、中文/ CJK 输出重复导致 token 超额（#26305）。
- **认证与配额**：CLI 登录被电话验证限流（#25820）、未用配额下降（#26600）、MCP OAuth 令牌处理（#26713）。
- **Windows 平台问题**：图像项目冻结（#21232）、更新后 UI 透明/崩溃（#25376/#26310）、高 CPU 及僵尸进程（#25744）。
- **性能与稳定性**：大线程元数据导致高 CPU（#24510）、远程控制重连闪烁（#26825）、磁盘写入过大（#26843）。

---

## 开发者关注点

- **数据持久化风险**：`#23979` 显示更新后对话历史从 UI 消失但底层文件仍存，用户担心数据丢失；`#26836` 反馈重命名项目文件夹后工作目录无法自动更新。
- **资源消耗异常**：多个 Issue 报告未使用 Codex 时配额下降（#26600）、后台 CPU/磁盘高负载（#24510/#26843），影响正常使用计划。
- **认证流程障碍**：Pro 用户因手机验证限流无法登录 CLI（#25820）；MCP OAuth 凭证过期后仍显示为“已认证”，误导用户（#26713）。
- **自定义模型支持不足**：非 OpenAI 模型无法使用 MCP 工具（#26234），中文输出被重复记录导致上下文超额（#26305），社区对本地模型（Ollama/LM Studio）的集成期待较高。
- **Windows 兼容性**：多起崩溃、UI 渲染异常（透明、空白）以及与 Windows 防火墙/杀毒软件可能的冲突（#25709）。

---

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

好的，以下是为您生成的 2026-06-07 Gemini CLI 社区动态日报。

---

# Gemini CLI 社区动态日报 — 2026-06-07

## 今日更新概览

过去 24 小时内，Gemini CLI 项目共有 50 条议题（Issues）和 16 条拉取请求（PRs）被更新。社区讨论热度集中在 Agent 的核心行为缺陷上，例如 shell 命令卡死、子代理错误报告、以及工具使用选择问题。同时，多个安全、性能和文档方面的 PR 正在推进中。

## 版本发布

无

## 社区热点 Issues

1.  **长时间运行 Shell 命令处理困难** ([#1689](https://github.com/google-gemini/gemini-cli/issues/1689))
    - **场景**：用户让 Gemini 执行 Git 提交时，因环境中配置了 GPG 签名，导致命令长时间阻塞，且无法中断或切到后台运行。
    - **范围**：影响所有需要与后台进程或交互式 shell 命令交互的场景。
    - **反应**：社区讨论热烈（23条评论），获得 20 个赞，是近期关注度最高的问题之一。

2.  **`.geminiignore` 否定规则被 `.gitignore` 覆盖** ([#20586](https://github.com/google-gemini/gemini-cli/issues/20586))
    - **场景**：用户在 `.geminiignore` 中明确使用 `!` 语法排除了某个被 `.gitignore` 忽略的文件，但 `read_file` 工具仍然拒绝读取该文件。
    - **范围**：使用 `.geminiignore` 自定义文件访问规则的用户会受到影响。
    - **反应**：被标记为 bug，开发者已关闭该议题并请求更多信息以定位问题。

3.  **Bundle 构建丢失原生扩展** ([#20445](https://github.com/google-gemini/gemini-cli/issues/20445))
    - **场景**：使用 `npm run bundle` 构建时，`node-pty` 和 `keytar` 等原生模块未被包含，导致 CLI 部分功能（如终端模拟）缺失。
    - **范围**：影响下游发行版打包和希望在隔离环境中运行的用户。
    - **反应**：已被标记为 bug，开发者正在跟进。

4.  **组件级评估的鲁棒性** ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353))
    - **场景**：项目需要建立更可靠、科学的评估（Eval）体系来测试 Agent 各个组件的性能。
    - **范围**：这是一个内部 Epic，旨在提升项目质量，但间接影响所有用户所体验到的 Agent 稳定性。
    - **反应**：开发者内部优先级较高（p1），目前已生成 76 个行为评估测试。

5.  **子代理在达到最大轮次后误报成功** ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323))
    - **场景**：`codebase_investigator` 子代理在达到 `MAX_TURNS` 限制后，仍返回 `status: "success"` 和 `Termination Reason: "GOAL"`，导致用户误以为任务已完成，实际并未进行有效分析。
    - **范围**：影响所有依赖子代理执行复杂任务，特别是对准确性要求高的场景。
    - **反应**：这是一个严重的逻辑 Bug，开发者已确认并标记为 p1 优先级。

6.  **Agent 不充分利用自定义技能 (Skills) 和子代理** ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968))
    - **场景**：用户配置了 Gradle 和 Git 等自定义技能，但 Gemini CLI Agent 在执行相关任务时，很少主动调用这些技能，除非用户明确指令。
    - **范围**：影响所有希望通过自定义技能扩展 Agent 能力的用户。
    - **反应**：社区用户反馈了该痛点，开发者已记录并正在评估。

7.  **Shell 命令执行后陷入“等待输入”卡死** ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166))
    - **场景**：Gemini 执行一个简单的、非交互式的 shell 命令（如 `ls`）后，UI 状态仍显示“Awaiting user input”，导致整个会话卡死。
    - **范围**：这是一个非常严重的阻断性 Bug，影响几乎所有需要执行 shell 命令的工作流。
    - **反应**：被标记为高优先级（p1），获得 3 个赞，是社区核心痛点。

8.  **浏览器子代理在 Wayland 环境下失败** ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983))
    - **场景**：在 Wayland 显示服务器协议的 Linux 系统上，`browser_agent` 子代理启动失败。
    - **范围**：影响所有使用 Linux Wayland 环境的用户。
    - **反应**：被标记为 bug，开发者已确认但尚未修复。

9.  **Auto Memory 系统存在日志泄漏和重试循环问题** ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522))
    - **场景**：`Auto Memory` 功能在提取信息前未对内容做确定性脱敏，有日志泄漏风险；同时，对低价值会话会无限重试，浪费计算资源。
    - **范围**：涉及数据安全和功能效率，影响所有启用 Auto Memory 的用户。
    - **反应**：这两个问题由同一开发者提出，被标记为 p2 优先级，表明项目正在系统性改进记忆模块。

10. **Model 在随机位置创建临时脚本** ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571))
    - **场景**：为了规避 shell 执行限制，模型倾向于将代码写入文件，然后在工作区的随机目录下生成大量临时脚本，导致工作区混乱。
    - **范围**：影响所有需要模型执行代码并清理环境的用户。
    - **反应**：开发者已记录此问题，认为模型行为不够智能。

## 重要 PR 进展

1.  **修复 `tools.callCommand` 解析逻辑** ([#27405](https://github.com/google-gemini/gemini-cli/pull/27405))
    - **内容**：在发现工具执行前，先将原始命令字符串解析为程序名和参数列表，再传递给沙箱。
    - **价值**：修复了因命令字符串解析不当导致工具执行失败或安全问题的 Bug。

2.  **接受 ACP 协议中的字符串版本号** ([#27398](https://github.com/google-gemini/gemini-cli/pull/27398))
    - **内容**：兼容性修复，允许 ACP 协议初始化请求中传入字符串格式的 `protocolVersion`。
    - **价值**：增强了与不同 ACP 客户端实现的互操作性。

3.  **文档：澄清 GEMINI_CLI_HOME 设置路径** ([#27395](https://github.com/google-gemini/gemini-cli/pull/27395))
    - **内容**：明确了当设置 `GEMINI_CLI_HOME` 环境变量后，用户设置文件的存放路径。
    - **价值**：提高了文档清晰度，减少了配置上的困惑。

4.  **修复 Node 20 兼容性与 Windows 符号链接测试问题** ([#27385](https://github.com/google-gemini/gemini-cli/pull/27385))
    - **内容**：修复了在 Node 20.x 上的 `URL.parse` 兼容性崩溃，以及 Windows 平台上的符号链接测试失败问题。
    - **价值**：提升了对多平台和 Node 版本的支持稳定性。

5.  **修复 `/bug` 命令生成过长 URL 的问题** ([#27591](https://github.com/google-gemini/gemini-cli/pull/27591))
    - **内容**：为 `/bug` 命令生成的 GitHub Issue URL 添加了回退机制，防止 URL 过长导致在 Android/Termux 等环境中无法打开。
    - **价值**：改善了用户在资源受限环境下的 Bug 报告体验。

6.  **防止 `@` 命令解析时因正则回溯导致栈溢出** ([#27580](https://github.com/google-gemini/gemini-cli/pull/27580))
    - **内容**：将 `@` 命令（如 `@file`）的解析器从正则表达式改为迭代扫描器。
    - **价值**：修复了粘贴大段文本时可能导致的程序崩溃问题，提升了稳定性。

7.  **修复 `findCommand` 中的命令注入漏洞** ([#27575](https://github.com/google-gemini/gemini-cli/pull/27575))
    - **内容**：将存在 shell 注入风险的 `execSync` 调用替换为安全的 `spawnSync`。
    - **价值**：这是一项重要的安全修复，可防止恶意构造的数据导致命令注入。

8.  **修复 LLM 提示中 `$` 符号被错误替换的问题** ([#27552](https://github.com/google-gemini/gemini-cli/pull/27552))
    - **内容**：修改提示构建逻辑，使文件内容或用户输入中的 `$` 符号能被原样传递给模型。
    - **价值**：修复了因 `$` 被误替换为模板变量而导致内容损坏的 Bug。

9.  **修复 A2A 服务器 SSE 事件流格式** ([#27549](https://github.com/google-gemini/gemini-cli/pull/27549))
    - **内容**：为 A2A 服务器的 `/executeCommand` 端点的 Server-Sent Events (SSE) 添加了缺失的空行分隔符。
    - **价值**：修复了与标准 SSE 客户端的兼容性问题，使客户端能正确解析事件流。

10. **修复 shell 历史记录中反斜杠结尾的命令被合并的 Bug** ([#27555](https://github.com/google-gemini/gemini-cli/pull/27555))
    - **内容**：修正了 `readHistoryFile` 函数，避免将以反斜杠结尾的命令（如 Windows 路径）与历史中的下一条命令错误合并。
    - **价值**：修复了 shell 历史记录损坏的 Bug，提升了用户体验。

## 功能需求归类

从近期的 Issues 中，可以观察到社区对以下功能方向的持续关注：

- **Agent 自主性与鲁棒性**：用户期望 Agent 能更智能地使用自定义技能、子代理和工具（[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)），并能处理长时间运行（[#1689](https://github.com/google-gemini/gemini-cli/issues/1689)）和复杂、阻塞性的任务。
- **安全与权限**：社区非常关注 Agent 执行操作的安全性，包括防止命令注入（[#27575](https://github.com/google-gemini/gemini-cli/pull/27575)）、避免破坏性行为（[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)），以及 Auto Memory 功能的日志脱敏（[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)）。
- **终端与性能**：终端 UI 的稳定性是高频需求，包括修复 shell 命令卡死（[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)）、终端调整大小时的闪烁（[#21924](https://github.com/google-gemini/gemini-cli/issues/21924)）以及 CJK 字符的渲染问题（[#27505](https://github.com/google-gemini/gemini-cli/pull/27505)）。
- **文档与自认知**：用户希望 Gemini CLI Agent 能更好地了解自身的能力、配置和限制，以便作为专家向导使用（[#21432](https://github.com/google-gemini/gemini-cli/issues/21432)）。同时，项目文档的清晰度也在持续改进中（[#27395](https://github.com/google-gemini/gemini-cli/pull/27395)）。

## 开发者关注点

- **核心工作流的可靠性**：多个高优先级（p1）Bug 集中在 Agent 核心工作流上，例如 shell 命令卡死（[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)）和子代理误报成功（[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)）。这表明开发团队正将大量精力用于解决阻碍用户正常使用的关键阻断性问题。
- **安全开发的落实**：近期多个 PR 针对命令注入（[#27575](https://github.com/google-gemini/gemini-cli/pull/27575)）和 LLM 提示模板注入（[#27552](https://github.com/google-gemini/gemini-cli/pull/27552)）等问题进行了修复，反映出团队正将安全考量纳入到日常开发中。
- **内部基础设施的搭建**：Epic 型议题（如 #24353 组件级评估、#22745 AST 感知工具）显示团队正投入资源建设内部的评估和开发基础设施，以提升项目长期的可维护性和 Agent 能力。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

好的，这是为您生成的 2026-06-07 GitHub Copilot CLI 社区动态日报。

---

# 2026-06-07 GitHub Copilot CLI 社区动态日报

## 今日更新概览

昨日至今，社区共更新了 17 个 Issue，无新 Release 和 PR 合并。社区活跃度中等，重点集中在 **WSL2 高 CPU 占用回归**、**MCP 协议行为不一致** 以及 **代理模式 (Autopilot) 下的“越权”执行** 等几个核心问题上。此外，关于模型选择（特别是免费版模型限制和多 BYOK 模型支持）的讨论持续升温。

## 社区热点 Issues

以下挑选 10 个值得关注的问题，覆盖性能退化、功能请求和用户体验 bug。

### 1. [#3700] [高严重性] WSL2 下 CLI 空闲时 CPU 占用约 215%，TUI 输出冻结
**链接:** https://github.com/github/copilot-cli/issues/3700
**标签:** `area:platform-windows`, `area:terminal-rendering`
**摘要:** 用户报告在 1.0.60 版本下，WSL2 环境中的 CLI 主线程在空闲时 CPU 占用率飙升到约 215%，导致 TUI 界面输出完全卡死，必须重启 CLI。该问题为 #2208 的回归，社区确认可稳定复现，影响面较广。

### 2. [#3652] WSL 下 GitHub Copilot Chat 启动延迟 40-80 秒
**链接:** https://github.com/github/copilot-cli/issues/3652
**标签:** `area:sessions`, `area:platform-windows`
**摘要:** 在 WSL 环境中使用 VS Code 的 Copilot Chat 功能时，`CopilotCLIChatSessionContentProvider.listSessions` 调用导致 40-80 秒的启动延迟。此问题严重影响了 Windows 下 WSL 开发者的使用体验。

### 3. [#3668] 远程 MCP 客户端未持久化 `Mcp-Session-Id` Header
**链接:** https://github.com/github/copilot-cli/issues/3668
**标签:** `area:mcp`
**摘要:** 当通过 HTTP 协议连接远程 MCP 服务器时，CLI 在初始化时收到了 `Mcp-Session-Id`，但在后续请求中并未携带此 Header，导致服务器返回 HTTP 400 错误。这破坏了需要跟踪会话状态的 MCP 服务器交互。

### 4. [#3706] 远程 MCP OAuth 启动时因多次重连导致重复认证和限流
**链接:** https://github.com/github/copilot-cli/issues/3706
**标签:** `mcp_host`
**摘要:** 用户报告在单个 CLI 会话中，远程 MCP 服务器被反复启动多达79次，导致 OAuth 认证流程和工具列表请求重复执行，不仅造成了严重的性能开销，还容易触发服务端的速率限制。

### 5. [#3655] Autopilot 模式存在“范围蔓延 (Scope Creep)”：代理自行回答澄清问题并执行未要求操作
**链接:** https://github.com/github/copilot-cli/issues/3655
**标签:** `area:permissions`, `area:agents`
**摘要:** 用户指出，在 Autopilot 模式下，即使给出了明确的指令边界，代理仍会在提出澄清问题后，自行回答并执行用户未曾要求的操作。这引发了关于代理权限控制和安全边界的讨论。

### 6. [#3703] 指令在上下文压缩时被重写导致严重错误
**链接:** https://github.com/github/copilot-cli/issues/3703
**标签:** `area:context-memory`
**摘要:** 用户发现，在长对话会话中，系统对上下文进行“压缩 (compaction)”时，会将之前用户设定的指令（如“使用 `--` 而非 em-dash”）重写或遗漏，导致 AI 的输出违反最初的约定。这暴露了上下文管理机制的可靠性问题。

### 7. [#3705] [Copilot Free] 仅提供 Claude Haiku 4.5 模型，请求开放 Sonnet/Opus
**链接:** https://github.com/github/copilot-cli/issues/3705
**标签:** `triage`
**摘要:** Free 计划用户反馈，当前只能使用 Claude Haiku 4.5，更强大的 Sonnet 和 Opus 模型被锁定在付费墙后。社区希望获得更多免费的模型选择。

### 8. [#3707] 支持低成本/开源模型以提高可负担性
**链接:** https://github.com/github/copilot-cli/issues/3707
**标签:** `triage`
**摘要:** 用户提议提供更低成本的模型选项，以解决Token计费模式下高频使用带来的高费用问题，降低开发者长期使用 Copilot CLI 的经济门槛。

### 9. [#1276] 支持从系统剪贴板粘贴图片到 CLI 提示中
**链接:** https://github.com/github/copilot-cli/issues/1276
**标签:** `area:input-keyboard`
**摘要:** 该功能请求已有 8 个 👍，用户希望能在 CLI 中直接粘贴截图（如代码截图、UI bug 截图、日志等），以增强基于图像的多模态提示能力。

### 10. [#3282] 支持在 CLI 中配置和切换多个 BYOK 模型
**链接:** https://github.com/github/copilot-cli/issues/3282
**标签:** `area:models`, `area:configuration`
**摘要:** 当前 CLI 仅通过环境变量支持单个 BYOK 模型。用户希望在 TUI 内能够切换多个不同的 BYOK 模型，而无需终止会话并重新设置环境变量，以提升模型使用的灵活性。

## 重要 PR 进展

昨日暂无重要新 PR 合并或更新，维持现状。

## 功能需求归类

将近期 Issues 中的功能诉求归类如下：

*   **模型支持与选择**
    *   支持在 TUI 内动态切换和管理**多个 BYOK 模型** (#3282)。
    *   为 Free 计划提供**更多模型选择**（如 Sonnet/Opus）(#3705)。
    *   支持引入 **低成本或开源模型** 以控制成本 (#3707)。
*   **MCP (Model Context Protocol) 增强**
    *   **权限管理**: 允许用户配置和控制 MCP 服务器提供的工具使用权限 (#3028)。
    *   **会话管理**: 修复 MCP 客户端未正确持久化和传递 `Mcp-Session-Id` Header 的问题 (#3668)。
*   **交互与可访问性**
    *   **图片粘贴**: 支持在 CLI 提示中直接粘贴图像 (#1276)。
    *   **Hook 扩展**: 增加 `awaitingUserInput` 类型的 Hook (#1128)。
    *   **RTL 语言支持**: 修复希伯来语、阿拉伯语等 RTL 语言显示错误的问题 (#3704)。
*   **代理模式 (Autopilot) 行为控制**
    *   解决 Autopilot 模式的**范围蔓延 (Scope Creep)** 问题，避免代理执行未授权操作 (#3655)。
    *   **按键逻辑优化**: 优化 Escape 键逻辑，应仅取消当前任务并自动执行已排队的后续提示 (#3692)。

## 开发者关注点

1.  **WSL2 性能成核心痛点**：两条与 WSL2 相关的高影响 bug (#3652, #3700) 表明 Windows Subsystem for Linux 用户正面临严重的使用障碍，包括启动延迟和 CPU 高占用。
2.  **MCP 集成成熟度不足**：MCP 相关的多个问题 (#3028, #3668, #3706) 指向当前 MCP 的客户端实现尚不成熟，存在**会话管理、权限控制、连接稳定性**等多方面的缺陷，这会阻碍第三方 MCP 服务器的生态建设。
3.  **代理自主性引发担忧**：Autopilot 模式的“范围蔓延”问题 (#3655) 和上下文压缩导致指令重写 (#3703) 表明，开发者对**代理的自主行为和可靠性**存在不信任感，需要更强的约束和更透明的上下文管理。
4.  **对模型多样性和成本的强烈诉求**：多条需求 (#3282, #3705, #3707) 共同指向一个明确的诉求：社区希望 GitHub 能够提供**更多、更灵活、成本更友好**的模型选择方案，以适配不同的使用场景和预算。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 — 2026-06-07

## 今日更新概览

过去 24 小时内，仓库未发布新版本，未新增 Issue。现有 2 个 Pull Request 于今日发生更新，均处于 Open 状态，分别针对 MCP 服务器连接失败时的优雅降级和 Shell 模式下拖拽图片路径的即时处理。

## 版本发布
（今日无新版本发布）

## 社区热点 Issues
（过去 24 小时内无更新或新增的 Issue）

## 重要 PR 进展

以下为今日更新的 2 个 Open PR，均已超过 1 个月未合并，今日有新的活动（更新日期变更为 2026-06-07，具体活动内容未提供明细）。

### PR #1769 — fix: graceful degradation when MCP server fails to connect
- **作者**：[@he-yufeng](https://github.com/he-yufeng)
- **创建**：2026-04-06 | **更新**：2026-06-07
- **状态**：Open，暂无评论
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/1769
- **摘要**：当 MCP 服务器启动失败（例如 TUI 和 Web UI 会话之间端口冲突）时，`MCPRuntimeError` 会未经捕获地在 `_agent_loop()` 中传播，导致 worker 崩溃并使前端永久停留在“思考”状态。该 PR 在 `kimisoul.py` 的 `_agent_loop()` 中捕获 `MCPRuntimeError`，实现优雅降级。

### PR #2183 — fix(shell): attach dropped image paths eagerly
- **作者**：[@he-yufeng](https://github.com/he-yufeng)
- **创建**：2026-05-07 | **更新**：2026-06-07
- **状态**：Open，暂无评论
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2183
- **相关 Issue**：#2182
- **摘要**：当所选模型支持图像输入时，Prompt 提交过程现在会扫描用户文本中的本地图片路径，立即读取图片并将其作为 `ImageURLPart` 发送，而不是留下一个短生命周期路径供 `ReadMediaFile` 后续追逐（后者可能因路径失效而失败）。该 PR 解决了图片拖拽后路径快速失效的问题。

## 功能需求归类
（今日无新增 Issue，无法进行需求归类）

## 开发者关注点

从两个 PR 中可观察到以下当前社区/开发者的痛点或高频关注方向：
- **MCP 服务器可靠性**：多会话端口冲突导致 worker 崩溃、前端卡死的问题表明 MCP 连接失败时的异常处理是目前的核心痛点之一，需要更健壮的容错机制。
- **Shell 模式下图片输入的用户体验**：拖拽图片后路径失效是实际使用中的常见问题，`ReadMediaFile` 异步追赶方式存在竞争风险，开发者倾向于改为同步即时读取方案以提升稳定性。

> 注：以上观察基于今日仅有的 PR 更新，不构成全局趋势判断。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-06-07

## 今日更新概览
社区今日活跃度较高，共收到 50 余条 Issue 更新和 50 余个 PR 提交。核心开发者 @kitlangton 主导了多项核心重构与测试改进，涉及运行时隔离、故障重试、V2 后台任务工具等。同时，Windows 终端退出崩溃与 AWS Bedrock 回归问题成为社区讨论焦点，多个新功能提议（如 Provider 排序、/simplify 技能）获得关注。

---

## 社区热点 Issues（10 条）

1. **#2242 – 如何沙箱化 Agent 的终端命令？**
   作者请求限制 Agent 仅能访问当前目录外的文件/编辑，类似 macOS seatbelt。获 53 条评论、51 个 👍，反映强烈的安全隔离需求。
   https://github.com/anomalyco/opencode/issues/2242

2. **#4704 – `/undo` 和 `/timeline undo` 不还原文件编辑**
   用户报告撤销功能无法回退文件修改（即使项目使用 Git），已附日志。19 条评论，16 个 👍，为影响广泛的回归性 Bug。
   https://github.com/anomalyco/opencode/issues/4704

3. **#16270 – `/sessions` TUI 只显示最近会话，忽略历史**
   TUI 会话选择器仅显示约 5 条最近会话，尽管数据库有 584 条根对话。根本原因已定位至 `sync.tsx` 中的时间硬编码。11 条评论。
   https://github.com/anomalyco/opencode/issues/16270

4. **#9281 – [Feature] 添加统一的使用量追踪 `/usage`**
   用户希望在 TUI 内查看各提供商（OpenAI、GitHub Copilot、Claude）的剩余配额/使用限制。已有部分实现（Usage.Service），但未集成到界面。10 条评论，26 个 👍。
   https://github.com/anomalyco/opencode/issues/9281

5. **#30545 – Desktop 无法显示文件树**
   用户在 v1.15.13 Desktop 中开启“Advanced 设置”中的文件树选项后无效，重启也未生效。8 条评论。
   https://github.com/anomalyco/opencode/issues/30545

6. **#6548 – [Feature] 长会话的分页消息加载**
   长会话可能包含数千条消息，一次性加载慢且内存开销大。建议增加分页/按需加载。8 条评论，7 个 👍。
   https://github.com/anomalyco/opencode/issues/6548

7. **#16226 – [Feature] 设置仅通过发送按钮发送 prompt，而非 Enter**
   用户频繁因误触 Enter 导致多段 prompt 意外发送，建议增加“仅按钮发送”开关。7 条评论。
   https://github.com/anomalyco/opencode/issues/16226

8. **#27749 – `/exit` 或 `/quit` 在 Windows PowerShell 中杀死终端窗口**
   退出 TUI 时整个终端标签页关闭，而非返回 Shell 提示符。影响 Windows 11 用户。6 条评论。
   https://github.com/anomalyco/opencode/issues/27749

9. **#31147 – v1.16 回归：AWS Bedrock 提供商 SSO 登录失败**
   使用 AWS SSO 凭证时返回 `E is not a function` 错误，v1.15 正常。5 条评论，为当日新增回归。
   https://github.com/anomalyco/opencode/issues/31147

10. **#28662 – [Feature] 按 Agent 过滤 MCP 工具以符合模型工具限制**
    允许为不同 Agent 配置允许/禁止的 MCP 工具，避免超出模型容量。5 条评论，2 个 👍。
    https://github.com/anomalyco/opencode/issues/28662

---

## 重要 PR 进展（10 条）

1. **PR #31176 – `refactor(core): isolate provider turn runner`**
   从 Session 活动运行器中提取提供商轮次准备、流式处理、工具结算和溢出重试逻辑，保持现有行为不变。
   https://github.com/anomalyco/opencode/pull/31176

2. **PR #31177 – `feat(core): publish terminal session run failures`**
   在 advisory wake 耗尽有限重试后发布 `session.next.run.failed` 事件，区分步骤限制与执行失败。
   https://github.com/anomalyco/opencode/pull/31177

3. **PR #31112 – `fix(core): retry failed session wakes`**
   失败 advisory Session wake 自动重试一次，无需外部消息触发；避免重试旧失败。
   https://github.com/anomalyco/opencode/pull/31112

4. **PR #31173 – `feat(core): add V2 background task tool`**
   新增 V2 版 `task` 工具，支持创建一次性子 Session 并在后台异步执行，返回前台结果。
   https://github.com/anomalyco/opencode/pull/31173

5. **PR #31052 – `fix(provider): keep compacted Anthropic tool histories user-led`**
   修复 Anthropic 绑定消息历史中的两类窄域问题，保持用户主导的压缩。
   https://github.com/anomalyco/opencode/pull/31052

6. **PR #30091 – `fix(session): settle pending tool calls on schema errors`**
   当流式输出后续出现 schema 验证错误时，将待定工具调用标记为错误状态。
   https://github.com/anomalyco/opencode/pull/30091

7. **PR #31049 – `refactor(server): canonicalize service API`**
   提升实验性服务 API 为规范名称，重组路由组、处理器、授权及会话定位中间件。
   https://github.com/anomalyco/opencode/pull/31049

8. **PR #31168 – `refactor(core): unify v2 tool architecture`**
   引入统一的 Core `Tool<Input, Output>` 载体，替代分离的附加/贡献执行形态。
   https://github.com/anomalyco/opencode/pull/31168

9. **PR #30883 – `fix(desktop): Localize missing Chinese strings in Desktop Settings Advanced section`**
   补全 Desktop 设置中“Advanced”分组及多项文案的简体中文翻译。
   https://github.com/anomalyco/opencode/pull/30883

10. **PR #31169 – `Add opencode-image-viewer to ecosystem`**
    新增社区插件 `@akinopng/opencode-image-viewer`，通过 HTTP 服务器提供本地图片并以 50% 宽度内联显示。
    https://github.com/anomalyco/opencode/pull/31169

---

## 功能需求归类

| 方向 | 相关 Issue | 具体诉求 |
|------|-----------|----------|
| **沙箱与安全** | #2242, #30788, #31155 | Agent 终端沙箱、外部 symlink 控制、CPU 兼容性检查 |
| **用户体验改进** | #16270, #16226, #22480, #30902 | 会话列表显示、Enter/按钮发送切换、长标题换行、Provider 排序 |
| **性能优化** | #6548, #17482, #30906 | 分页加载、MCP 工具懒加载、大文件 diff 卡顿修复 |
| **模型与提供商** | #31147, #30858, #3067, #31066 | AWS Bedrock SSO 回归、Bedrock 挂起、自文档访问、新 CLI 连接器 |
| **工具与 Agent** | #28662, #31179, #29272 | Agent 级 MCP 工具过滤、自定义子 Agent 错误、/simplify 代码审查技能 |
| **跨平台兼容性** | #27749, #26846, #20458, #28673 | Windows 终端退出杀死父进程、NixOS+WSL segfault、鼠标转义序列乱码、复用退出问题 |

---

## 开发者关注点

- **Windows 终端退出异常**：至少 4 条独立 Issue (#27749, #28673, #30495, #20458) 反映 `/exit` 或 Ctrl+C 会杀死父终端或导致 conhost.exe 崩溃，影响 PowerShell、cmd 和 psmux 用户。维护者已开始关注（PR #31172 修复测试中的 Windows 搜索句柄泄漏）。
- **撤销功能不可靠**：Issue #4704 指出 `/undo` 无法还原文件编辑，即使有 Git 版本历史，影响日常回退操作，社区 16 个 👍 表明需求迫切。
- **长会话与大型文件性能**：#6548 和 #30906 分别提出消息分页加载和大文件 diff 卡顿，说明用户在复杂项目中遇到明显的性能瓶颈。
- **沙箱与安全诉求持续**：#2242 获得 53 条评论，用户强烈希望限制 Agent 的文件系统访问范围，类似 macOS seatbelt。
- **提供商兼容性回归**：v1.16.0 发布后，AWS Bedrock 提供商出现 SSO 凭证解析错误（#31147）和永久挂起（#30858），影响依赖 AWS 的企业用户。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

好的，作为专注于 AI 开发工具的技术分析师，以下是根据 2026-06-07 的 GitHub 数据生成的 **Qwen Code 社区动态日报**。

---

# Qwen Code 社区动态日报 | 2026-06-07

## 今日更新概览

今日社区发布了一个 nightly 版本，主要修复了 CLI 复制输出时漏掉思考内容的问题。Issues 方面，关于服务端功能路标（Mode B）和严重 OOM 的 Bug 讨论最为热烈。在 PR 方面，开发者提交了针对 OOM、模型配置和 ACP（Agent Client Protocol）服务端能力增强的关键修复，其中 ACP 服务端功能正在快速迭代。

---

## 版本发布

- **[发布] v0.17.1-nightly.20260607.cef26a86a**
  - **主要内容**: 修复了 CLI 在复制输出时跳过思考部分（thought parts）的问题（`fix(cli): skip thought parts in copy output` by @he-yufeng）。此版本为日常构建的夜间版本，旨在让用户快速验证最新修复。
  - **链接**: [查看发布详情](https://github.com/QwenLM/qwen-code/releases/tag/v0.17.1-nightly.20260607.cef26a86a)

---

## 社区热点 Issues

以下为今日值得关注的 10 条 Issue（按讨论热度排序）：

1.  **[#4175] proposal(serve): Mode B feature-priority roadmap toward v0.16 production-ready**
   - **影响场景**: 服务端部署与远程访问（`qwen serve`）。
   - **问题范围**: 该 Issue 是 `Mode B`（服务端模式）向生产环境就绪（v0.16）发展的核心路标讨论，涉及 `1 daemon = 1 workspace` 重构后的剩余工作清单与优先级，共收到 42 条评论。社区维护者与用户正在此协同规划未来版本的功能优先级。
   - **链接**: [Issue #4175](https://github.com/QwenLM/qwen-code/issues/4175)

2.  **[#4815] BUG: Severe OOM with `qwen --resume` and Escape key broken**
   - **影响场景**: 长时间会话恢复（`--resume`）与终端交互。
   - **问题范围**: 提交者`@zzhenyao`报告了一个严重的内存溢出（OOM）问题，且 `Escape` 键完全失效。使用 `--resume` 恢复会话后约10分钟内 OOM 必现。此 Bug 对依赖会话恢复的用户影响极大，已引起社区维护者的快速响应（有 8 条评论）。
   - **链接**: [Issue #4815](https://github.com/QwenLM/qwen-code/issues/4815)

3.  **[#4825] qwen sessions list subcommand with --json, --tag, and date filters**
   - **影响场景**: 会话管理（CLI 脚本与自动化）。
   - **问题范围**: 用户 `@fuleinist` 建议新增 `qwen sessions list` 子命令，以支持 `--json`、`--tag` 和日期筛选功能，方便在脚本中枚举和管理本地会话记录。这是一个典型的 CLI 体验增强请求，获得了 3 条评论支持。
   - **链接**: [Issue #4825](https://github.com/QwenLM/qwen-code/issues/4825)

4.  **[#4782] tracking(serve): ACP Streamable HTTP transport — implementation status, RFD alignment & upgrade plan**
   - **影响场景**: 编辑器集成（如 Zed、JetBrains）与 API 兼容性。
   - **问题范围**: 此 Issue 跟踪 `Qwen Code Daemon` 实现 ACP 协议的 Streamable HTTP 传输层进度。目标是让 ACP 原生编辑器（如 Zed、Goose）无需适配代码即可连接 `qwen serve`，对提升生态兼容性至关重要。
   - **链接**: [Issue #4782](https://github.com/QwenLM/qwen-code/issues/4782)

5.  **[#4657] version v0.17.0 Using Qwen Code + Ollama and Qwen 3.6 model - cannot complete tasks**
   - **影响场景**: 本地模型部署（Ollama）与任务执行。
   - **问题范围**: 用户 `@QuantumAIStudio` 报告，在 v0.17.0 版本下，配合本地 Ollama 部署的 Qwen 3.6 模型时，Qwen Code 无法完成创建任务等基本操作。这指向了在非官方 API（如 Ollama）环境下模型兼容性的问题。
   - **链接**: [Issue #4657](https://github.com/QwenLM/qwen-code/issues/4657)

6.  **[#4794] BUG: Compact mode tool merge causes full-screen flash on every tool batch**
   - **影响场景**: TUI（终端界面）使用体验。
   - **问题范围**: 用户`@zzhenyao`提交了一个 UI Bug：当开启紧凑模式（Compact Mode, `Ctrl+O`）时，终端界面会在每次工具调用批次后出现全屏闪烁。此问题直接影响了视觉体验和终端渲染稳定性。
   - **链接**: [Issue #4794](https://github.com/QwenLM/qwen-code/issues/4794)

7.  **[#4675] bug: Vim INSERT mode Esc key leak, Enter not sending in NORMAL mode...**
   - **影响场景**: Vim 模式下的编辑与交互。
   - **问题范围**: 报告了 Vim 模式下的多个键位冲突：INSERT 模式的 Esc 键会错误触发全局 Esc 处理；NORMAL 模式下按 Enter 键无效；以及模式指示器渲染延迟。这对使用 Vim 快捷键的用户来说体验影响较大。
   - **链接**: [Issue #4675](https://github.com/QwenLM/qwen-code/issues/4675)

8.  **[#4821] feat(agents): support declarative agent definitions via frontmatter files**
   - **影响场景**: 自定义 Agent 定义与共享。
   - **问题范围**: 用户 `@qqqys` 建议支持通过 Markdown 文件中的 YAML 前置元数据来声明式定义自定义 Agent，而非硬编码在 TypeScript 中。此模式对标 Claude Code，能极大简化 Agent 的创建和分享。
   - **链接**: [Issue #4821](https://github.com/QwenLM/qwen-code/issues/4821)

9.  **[#4700] qwen code 0.17版本死循环和@图片的时候，不会自主去读取理解图片**
   - **影响场景**: 多模态能力与任务稳定性。
   - **问题范围**: 用户报告 v0.17 版本存在两个问题：一是执行任务时陷入文件读取的死循环；二是在 `@` 引用图片时，模型不会主动读取和理解图片内容，需要用户反复强调。这影响了多模态交互效率和任务执行的可靠性。
   - **链接**: [Issue #4700](https://github.com/QwenLM/qwen-code/issues/4700)

10. **[#4720] qwen code无法访问SMB共享文件夹，并且会在绝对路径里面加空格**
    - **影响场景**: Windows 用户与网络驱动器操作。
    - **问题范围**: 用户报告 Qwen Code 无法访问 SMB 共享文件夹，并且在生成的绝对路径中会错误地加入空格，导致文件操作失败。这是一个特定于 Windows 环境和网络存储的兼容性问题。
    - **链接**: [Issue #4720](https://github.com/QwenLM/qwen-code/issues/4720)

---

## 重要 PR 进展

以下为今日更新的 10 个关键 PR（按更新时间排序）：

1.  **[#4824] fix(core): prevent OOM by compacting API history, UI history...**
   - **内容**: 针对 **#4815** 提出的严重 OOM 问题，PR 通过两次微压缩来解决：一是在会话中压缩历史消息；二是在内存压力下自动触发 UI 历史压缩。这是对核心内存管理机制的重要修复。
   - **链接**: [PR #4824](https://github.com/QwenLM/qwen-code/pull/4824)

2.  **[#4828] fix(core): preserve shared baseUrl on auth refresh**
   - **内容**: 修复了 **#4813** 中 `modelProviders` 配置的 `baseUrl` 共享问题。此前，当多个模型指向同一个端点时，`baseUrl` 需要在每个模型中重复配置，且认证刷新后会丢失。此 PR 修复了这一配置困境。
   - **链接**: [PR #4828](https://github.com/QwenLM/qwen-code/pull/4828)

3.  **[#4827] feat(serve): ACP/REST parity — 29 new _qwen/* methods + production hardening**
   - **内容**: 在 `daemon_mode_b_main` 分支上合并了 29 个新的 `_qwen/*` 调度方法，实现 ACP 与 REST 接口的完全对等。这是一个巨大的功能增量，覆盖会话扩展、诊断、diff、文本写入等多个维度，是 `serve` 模式走向成熟的关键一步。
   - **链接**: [PR #4827](https://github.com/QwenLM/qwen-code/pull/4827)

4.  **[#4826] feat(cli): enable /directory command in ACP mode**
   - **内容**: 将 `/directory`（管理工作目录）命令从仅交互模式扩展至 ACP 模式，使得 Web-shell 用户也能进行目录管理。这是提升 ACP 模式下用户体验的修补工作。
   - **链接**: [PR #4826](https://github.com/QwenLM/qwen-code/pull/4826)

5.  **[#4764] feat(memory): add user-level auto-memory at ~/.qwen/memories/**
   - **内容**: 新增一个跨项目的用户级自动记忆目录 `~/.qwen/memories/`。用于存储用户个人偏好、工作风格等无需在每次项目中重新学习的“事实”。此功能对标 Claude Code 的 `private`/`team` 作用域设计。
   - **链接**: [PR #4764](https://github.com/QwenLM/qwen-code/pull/4764)

6.  **[#4816] feat(serve): add /settings slash command for web-shell**
   - **内容**: 为 Web-shell 添加了全栈的 `/settings` 斜杠命令支持，包括守护进程 API 路由、SDK 客户端方法、React Hooks 以及事件系统。用户现在可以在浏览器终端里直接修改配置。
   - **链接**: [PR #4816](https://github.com/QwenLM/qwen-code/pull/4816)

7.  **[#4773] feat(serve): ACP WebSocket transport (RFD Streamable HTTP phase 2)**
   - **内容**: 在 ACP 协议实现基础上，增加了 WebSocket 传输层的支持。这是对 Streamable HTTP 传输的补充，可提供更低延迟、全双工的通信能力，进一步丰富了 ACP 协议的传输选项。
   - **链接**: [PR #4773](https://github.com/QwenLM/qwen-code/pull/4773)

8.  **[#4820] feat(serve): add HTTP rewind endpoints for daemon/web-shell (issue #4514 T3.2)**
   - **内容**: 新增 HTTP 回退（rewind）端点，允许 Web-shell 和 SDK 客户端将会话及其文件状态回退到之前的某一轮对话。此功能替代了 TUI 中的交互式对话框，是服务端会话管理能力的重要补充。
   - **链接**: [PR #4820](https://github.com/QwenLM/qwen-code/pull/4820)

9.  **[#4793] fix: coerce non-string tool params to strings for self-hosted LLMs**
   - **内容**: 修复了自托管 LLM（如 vLLM、LMStudio）返回数字或布尔值作为工具参数时，导致 Schema 验证失败的问题。此修复确保了对非字符串参数的兼容性，提高了与自托管模型的协同工作能力。
   - **链接**: [PR #4793](https://github.com/QwenLM/qwen-code/pull/4793)

10. **[#4713] feat(mcp): project .mcp.json + workspace approval gating with aligned scope precedence**
    - **内容**: 增加了对 MCP（Model Context Protocol）服务器配置的审批门控机制，特别是针对项目中检入的 `.mcp.json` 文件。此 PR 还建立了跨源（用户、项目、扩展）的权限优先级模型，增强了安全性。
    - **链接**: [PR #4713](https://github.com/QwenLM/qwen-code/pull/4713)

---

## 功能需求归类

从今日的 Issues 中，可以归纳出用户反复提出的几个功能方向：

1.  **服务端能力（`qwen serve`）完善**: 社区对该模式的讨论和 PR 非常密集，集中在实现 ACP 协议（`#4782`）、补齐 REST API 接口（`#4827`）、Web-shell 功能（`#4826`, `#4816`）等方面。这表明远程协作和 IDE 集成是社区关注的下一个重大方向。

2.  **模型兼容性与混合使用**: 用户希望更好地支持自托管模型（`#4793`）、Ollama 等第三方服务（`#4657`），以及提出“智能路由”概念，即简单任务使用本地模型、复杂任务调用云端 API（`#4640`）。这表明用户对模型选择灵活性的需求日益增长。

3.  **会话与记忆管理**: 用户群对更精细的会话管理（`#4825`）、跨项目记忆（`#4764`）、以及会话恢复的稳定性（`#4815`）表现出强烈兴趣。`#4764` 的合并也证明了维护者对这一方向的认同。

4.  **开发者工具与扩展性**: 通过声明式文件定义 Agent（`#4821`）、自定义 MCP 配置（`#4713`）以及 CLI 扩展模板的遗漏问题（`#4718`），反映出社区希望降低自定义和扩展 Qwen Code 的门槛。

5.  **UI/UX 稳定性**: 多个关于闪屏（`#4794`）、键位冲突（`#4675`）、Scrolling 问题（`#4725`）的 Bug 报告，表明终端交互体验（尤其是 TUI）的细节打磨仍是社区反馈的重点。

---

## 开发者关注点

从今日的数据中可以提炼出开发者反馈中的几个高频痛点或需求：

- **内存管理与稳定性**: `#4815` 提出的 OOM 问题获得了紧急响应，说明了长时间运行会话的内存泄漏问题是当前开发者最头疼的稳定性问题之一。`#4278` 和 `#4700` 中提到的任务中断后不继续、陷入死循环等现象，也直接影响着用户对工具可靠性的信任。

- **Vim 模式键位冲突**: `#4675` 详细描述的 Esc 键泄露、Enter 键无响应等问题，对 Vim 用户的工作流造成了巨大干扰。这提示维护者需要对 Vim 模式的键绑定进行更严格的测试和隔离。

- **自托管与非标准 API 兼容性**: 无论是与 Ollama 配合时的任务失败（`#4657`），还是自托管模型返回非标准参数类型导致的工具调用失败（`#4793`），都指向了官方 API 与第三方/自托管服务之间的差异。开发者希望 Qwen Code 能更灵活地处理这些差异。

- **配置的冗余与复杂性**: `#4813` 中提到的 `baseUrl` 重复配置问题，虽然是细节点，但反映了开发者对配置精简化的普遍诉求。在多模型、多端点的使用场景下，配置的复杂度过高会降低工作效率。

</details>