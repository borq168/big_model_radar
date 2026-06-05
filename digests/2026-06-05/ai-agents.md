# OpenClaw 生态日报 2026-06-05

> Issues: 500 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-06-05 02:36 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

好的，作为一名 AI 智能体与个人 AI 助手领域开源项目分析师，我将根据您提供的 OpenClaw (github.com/openclaw/openclaw) GitHub 数据，生成 2026-06-05 的项目动态日报。

---

## OpenClaw 项目动态日报 2026-06-05

### 1. 今日活动概览

过去 24 小时内，OpenClaw 项目社区活动极为活跃。共处理了近 500 条 Issue 和 500 个 Pull Request (PR)，其中新开/活跃 Issue 349 个，关闭 151 个；待合并 PR 数量高达 391 个，合并/关闭了 109 个。尽管没有新版本发布，但大量待合并的 PR 表明社区贡献者提交了大量修复和功能更新，维护者正面临较大的审查压力。今日讨论的焦点集中在 v2026.6.1 版本引入的多个严重 Bug，特别是围绕新 `openai-chatgpt-responses` 运输层的功能失效问题。

### 2. 版本发布

*   今日无新版本发布。

### 3. 项目进展

过去 24 小时合并/关闭了 109 个 PR，以下为几个关键进展：

*   **CI 流程优化**：[PR #90287](https://github.com/openclaw/openclaw/pull/90287) 已被关闭并自动合并。该 PR 修复了 CI 在检查 PR 差异时可能混合旧基提交（stale base sha）的问题，通过将差异检查范围限制在合并后的第一个父提交，增强了自动化流程的可靠性。
*   **新功能安装通道**：[PR #90478](https://github.com/openclaw/openclaw/pull/90478) 处于待合并状态。该 PR 引入了从 GitHub 下载并安装“ClawHub skills”的功能，为社区技能生态提供了一个成熟的安装路径，是项目生态建设的重要一步。
*   **Web UI 配置向导优化**：[PR #90118](https://github.com/openclaw/openclaw/pull/90118) 增加了对 `openclaw wizard` 配置过程中的提供商（Provider）密钥更新提示，以帮助用户更清晰地发现和修改配置。

### 4. 社区热点

今日社区讨论热度非常高，主要围绕 v2026.6.1 版本的多项严重回退和新的 openai-Responses 运输层问题：

*   **OpenAI ChatGPT Responses 运输层大规模故障**：[Issue #90083](https://github.com/openclaw/openclaw/pull/90083) 获得了 11 条评论和 3 个 👍。用户报告在升级至 v2026.6.1 后，`openai/gpt-5.4` 及 `gpt-5.5` 等模型推理完全失效，返回 `invalid_provider_content_type` 错误。另一个相关 Issue [#90093](https://github.com/openclaw/openclaw/pull/90093) 指出，在同一运输层下，前一回合成功的会话在下一回合会因 `invalid_encrypted_content` 而失败。这表明新运输层在基础模型兼容性和会话状态管理上存在严重缺陷。
*   **Codex 运行时迁移引发的路由与认证问题**：[Issue #90036](https://github.com/openclaw/openclaw/pull/90036) 报告了在 Codex 原生运行时下，会话模型路由从 `openai/gpt-5.5` “漂移”到 `openai-codex/gpt-5.5` 的问题。[Issue #86215](https://github.com/openclaw/openclaw/pull/86215) 则揭示了 Codex OAuth 刷新失败后，系统缺乏明确的告警和激进的配置轮换策略，可能导致代理长时间停服。
*   **核心迁移与稳定性**：[Issue #88838](https://github.com/openclaw/openclaw/pull/88838) 作为一个 P2 跟踪议题，记录了通过“按抽象分支”模式逐步将核心会话/转录运行时状态迁移到 SQLite 的规划，这反映了维护者对降低大规模重构风险的审慎态度。同时，[Issue #90072](https://github.com/openclaw/openclaw/pull/90072) 报告了一个严重问题：升级至 v2026.6.1 时，SQLite 迁移过程默默清除了 45 个定时任务中的 44 个，引发了用户对迁移脚本安全性的担忧。

### 5. Bug 与稳定性

今日报告的 Bug 非常多，以下按严重程度列出关键问题，并标注关联修复 PR：

*   **P1 级（严重）**：
    *   **OpenAI Responses 模型失效**：[Issue #90083](https://github.com/openclaw/openclaw/pull/90083) 和 [#90093](https://github.com/openclaw/openclaw/pull/90093)。尚无直接 fix PR。
    *   **会话模型路由漂移**：[Issue #90036](https://github.com/openclaw/openclaw/pull/90036)。尚无直接 fix PR。
    *   **定时任务状态丢失**：[Issue #90072](https://github.com/openclaw/openclaw/pull/90072)。关联 PR [#89987](https://github.com/openclaw/openclaw/pull/89987) 并非直接修复此问题，而是修复了 cron 消息投递的诊断问题。
    *   **Active-memory 熔断器过于激进**：[Issue #90082](https://github.com/openclaw/openclaw/pull/90082) 报告了 `active-memory` 插件的熔断器频繁开启，并将回退提示注入主会话，导致用户体验和会话逻辑双重受损。尚无直接 fix PR。
    *   **QQBot 频道消息重复**：[Issue #87177](https://github.com/openclaw/openclaw/pull/87177) 已关闭，但涉及心跳会话泄露、认证失败等多个复杂原因。

*   **P2 级（重要）**：
    *   **Discord 多账号启动优先级**：[Issue #77429](https://github.com/openclaw/openclaw/pull/77429)。关联 PR [#89744](https://github.com/openclaw/openclaw/pull/89744) 已提交，预期将修复此问题。
    *   **WebChat 聊天卡顿及内容截断**：[Issue #88929](https://github.com/openclaw/openclaw/pull/88929) 描述了飞书流式卡片渲染在 WebChat 中出现打字机效果异常和内容截断（仅剩最后一个字符）的 Bug。
    *   **会话上下文膨胀与效率**：[Issue #67419](https://github.com/openclaw/openclaw/pull/67419) 分析指出，每次对话轮次都会重新注入 `MEMORY.md` 等引导文件，浪费 20-30% 的 Token。这是一个长期存在的性能问题。

### 6. 功能请求归类

*   **敏感数据处理**：[Issue #64046](https://github.com/openclaw/openclaw/pull/64046) 是一个 P1 级功能请求，要求对配置文件、日志及 UI 中的 API Key、Token 等敏感信息进行脱敏处理。该议题已标记为需要维护者及安全审查。
*   **向量检索增强**：[Issue #63990](https://github.com/openclaw/openclaw/pull/63990) 提议引入多索引嵌入内存支持，以实现在不同模型（如 OpenAI 和 Anthropic）之间优雅的故障转移，避免由于向量空间不同造成的语义损害。
*   **多平台适配**：[PR #89724](https://github.com/openclaw/openclaw/pull/89724) 提议为 `voice-call` 扩展增加 Microsoft Teams 语音提供商，将 OpenClaw 的语音通话能力扩展到 Teams 生态。

### 7. 用户反馈摘要

*   **对 v2026.6.1 版本的疑虑**：多位用户报告了升级后遇到的问题，例如“无法连接”、“配置被清空”。这可能导致社区对新版本的信任度下降，有用户表达了对升级稳定性的担忧。
*   **对复杂配置的困惑**：在 #90083 的回复中，用户对其报错信息感到困惑，显示出需要更清晰、用户友好的错误提示，而不是直接的“连接错误”。在 #90118 的 PR 中，开发者也通过增加配置向导的提示来回应类似痛点。
*   **对基础功能稳定性的高期待**：从 #68113（Mattermost 斜杠命令回归）、#87307（Matrix 线程回复回归）等活跃议题可以看出，用户希望基本的通信渠道功能能够稳定工作，回归问题容易引起社区的强烈反应（大量评论和 👍）。

### 8. 待处理积压

*   **长期未决的严重崩溃**：[Issue #63216](https://github.com/openclaw/openclaw/pull/63216)（创建于 2026-04-08），报告了即使在配置了较高 `reserveTokensFloor` 的情况下，会话仍反复触发硬重置，并导致重试循环注入引导上下文。这是一个 P1 级、影响会话状态和消息丢失的严重问题，至今尚未有明确的修复 PR，且需要产品决策，应提醒维护者优先关注。
*   **MacOS 兼容性**：[Issue #66977](https://github.com/openclaw/openclaw/pull/66977) 指出，在 macOS 上 `sqlite-vec` 扩展因 Node.js 编译问题无法加载，导致向量搜索功能不可用。该问题尽管是 P2 级，但会阻止大量 macOS 用户使用核心的记忆功能。

---

## 横向生态对比

好的，作为一名 AI 智能体与个人 AI 助手领域开源项目分析师，以下是根据您提供的四个项目（OpenClaw、NanoBot、Zeroclaw、PicoClaw）在 2026-06-05 的社区动态，生成的横向对比分析报告。

---

## 跨项目横向对比分析报告 (2026-06-05)

### 1. 今日横向概览

今日各项目社区活跃度差异显著。**OpenClaw** 活动量最高，但社区主要围绕 v2026.6.1 版本的多个严重 Bug 展开讨论，尤其是新的 OpenAI Responses 运输层功能失效问题，暴露了稳定性风险。**NanoBot** 和 **Zeroclaw** 保持高强度的开发迭代，前者核心进展在于 MCP 重连机制和 Azure AAD 认证的落地，后者则集中在修复 v0.8.x 系列的阻塞 Bug（如 TUI 冻结、Slack 命令循环），并推进计算机操作和 A2A 协议等长期需求。**PicoClaw** 今日发布了 Nightly 版本，并修复了多个影响单例检查和 OneBot 适配器的关键 Bug，社区活跃度相对温和。

### 2. 各项目活跃度对比

| 项目 | 今日新开/活跃 Issues | 今日 PR (待合并/已合并关闭) | 今日 Release | 事实性备注 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 349 (新开/活跃) / 151 (关闭) | 391 (待合并) / 109 (合并/关闭) | 无 | 活动量最高，但以 Bug 报告和修复 PR 为主，待合并 PR 积压严重。 |
| **NanoBot** | 2 (新开/活跃) / 5 (关闭) | 15 (待合并) / 61 (合并/关闭) | 无 | PR 合并率高，开发效率高，焦点集中在核心功能修复和稳定化。 |
| **Zeroclaw** | 27 (新开/活跃) / 5 (关闭) | 35 (待合并) / 15 (合并/关闭) | 无 | 开发活动活跃，修复与长期功能需求讨论并行。 |
| **PicoClaw** | 6 (新开/活跃) | 22 (PR 活动，合并数未明确) | 1 (Nightly) | 发布了 Nightly 版本，修复了 PID 文件和 OneBot 适配器等关键 Bug，活动量相对较低。 |

### 3. OpenClaw 与同类对照

基于今日数据，OpenClaw 与其他三个项目在活动量和社区焦点上存在明显差异：

- **活动量与焦点**：OpenClaw 今日活动量（近500条 Issue/PR 更新）远超其他项目，但其社区讨论高度集中于 **v2026.6.1 版本的严重回退问题**（如 OpenAI Responses 模型失效、定时任务状态丢失），呈现“修复驱动”的模式。相比之下，NanoBot、Zeroclaw 和 PicoClaw 的社区讨论更多元，涵盖了功能建议（任务特定模型、A2A协议）、新特性开发（Azure AAD认证）和平台兼容性（Windows、FreeBSD）等，状态更为健康。
- **技术重点差异**：OpenClaw 的 Bug 集中于**新运输层（openai-chatgpt-responses）** 和 **Codex 运行时**的迁移问题上，显示出其在核心架构演进（如切换到 SQLite 存储）中遇到了阵痛。而 NanoBot 和 Zeroclaw 的修复则更多集中在**连接管理（MCP 重连、RPC 会话回收）** 和**平台适配（OneBot 路由、Slack 命令）** 等外围稳定性上，核心引擎相对稳定。
- **社区讨论面**：OpenClaw 用户反馈体现出对**升级稳定性的强烈担忧**。而 NanoBot 和 Zeroclaw 的社区反馈则更集中于**功能需求的精细化**（如按任务配置模型、高危命令确认）和**平台适配的缺口**（如 Windows 兼容性、Twitter 频道支持）。

### 4. 共同出现的技术方向

今日有多个项目同时关注以下方向，显示出社区的共同需求：

- **多项目管理与状态同步**：**OpenClaw** 报告了 SQLite 迁移导致定时任务丢失的严重问题（Issue #90072）；**Zeroclaw** 报告了 Web UI “Clear all”按钮未同步删除后端持久化 session 数据的 Bug（Issue #7126）。这表明，随着项目功能复杂化，**前端 UI 状态与后台持久化数据的同步** 以及 **数据库迁移脚本的可靠性** 已成为各项目面临的共同挑战。
- **新模型/新提供商适配问题**：**OpenClaw** 因新的 `openai-chatgpt-responses` 运输层导致 GPT-5.4/5.5 模型推理失效（Issue #90083）；**PicoClaw** 依赖飞书 SDK 升级导致编译失败（PR #3008）；**Zeroclaw** 则因 Ollama Provider 工具调用错误导致工作流阻塞（Issue #5962）。这反映了**上游依赖（LLM API 变化、SDK 更新）变更** 对下游 Agent 框架稳定性的持续挑战。
- **安全性增强**：**Zeroclaw** 提出了为高危 Shell 命令增加“每次执行需手动确认”的安全层级（Issue #7155）；**OpenClaw** 有长期未决的功能请求，要求对 API Key 等敏感信息进行脱敏处理（Issue #64046）。表明多项目社区对 Agent **运行时安全** 和 **数据安全** 的需求在同步增长。

### 5. 差异化定位分析

基于今日数据，各项目的定位差异如下：

- **OpenClaw**：定位为高度可扩展的 AI 智能体生态平台。其社区讨论和 Bug 报告项涵盖极其广泛的第三方提供商（OpenAI, Codex）、插件（Active-memory）、通信渠道（QQBot, Discord, Matrix）和存储方案（SQLite 迁移）。当前开发重心在于 **重构核心运行时架构**，但因此带来的复杂性也导致其稳定性风险最高。
- **NanoBot**：定位为开发者友好的轻量级 Agent 框架。今日合并的 PR 聚焦于 MCP 连接重构、Azure 企业认证、WebUI 快捷键等，显示出其核心稳定、API 友好、注重开发者体验与集成便利性的特点。其社区需求（任务特定模型）也更偏向**精细化配置和功能拓展**。
- **Zeroclaw**：定位为高性能、多平台、资源高效的 Rust Agent 运行时。今日进展显示其对**多平台兼容性（Windows、macOS、WebUI/TUI双界面）** 和 **Agent 基础能力（计算机操作、A2A 协议）** 的持续投入。社区反馈高度集中在**与外部系统（Slack、WhatsApp、Twitter）的可靠集成** 和 **安全性/可观测性增强**。
- **PicoClaw**：定位为轻量级、易部署的个人 AI 助手网关。今日活动主要为 Bug 修复（PID 文件、OneBot、Codex OAuth），版本迭代快，社区规模最小，专注于解决特定场景（如 OneBot 接入）下的稳定性问题，更像是一个**稳定可靠的适配层**。

### 6. 社区活跃度记录

注：基于今日数据，仅做活跃度分层，不做成熟度评分。

- **高度活跃**：
    - **OpenClaw**（Issue/PR 数量最多，维护者与贡献者交互频繁，Bug 发现和修复报告密集）
- **活跃**：
    - **NanoBot**（PR 合并效率高，开发节奏快，社区讨论有深度）
    - **Zeroclaw**（Issue/PR 数量中等，开发与社区讨论并行，多点开花）
- **温和**：
    - **PicoClaw**（发布新版本，有明确 Bug 修复，社区讨论量有限）

### 7. 有证据支撑的观察

1. **稳定性风险是 OpenClaw 今日最主要的问题**：其社区反馈高度集中于 v2026.6.1 版本的多个严重 Bug（OpenAI Responses 失效、定时任务丢失、会话路由漂移），且存在大量待合并 PR（391个），表明维护者审查能力可能落后于贡献者提交速度，导致 Bug 积压。这与 NanoBot 和 Zeroclaw 的相对稳定形成鲜明对比。

2. **后端基础设施（MCP、A2A、SQLite）成为新的关注焦点**：NanoBot 修复了 MCP 重连问题，Zeroclaw 讨论了 A2A 协议支持，OpenClaw 则因迁移到 SQLite 遇到了重大回退。这显示，随着 Agent 框架从单机对话走向多 Agent 协作和持久化存储，**底层连接管理和数据存储架构的健壮性** 正在成为新的技术挑战和社区关注点。

3. **对边缘平台和自定义集成的支持需求存在缺口**：PicoClaw 用户报告了在 FreeBSD 上的 Bug，Zeroclaw 用户报告了 Windows 上的 TUI 冻结和 Slack 命令循环，OpenClaw 有用户在 macOS 上无法使用核心记忆功能（sqlite-vec 编译失败）。这些反馈表明，虽然项目主要面向主流平台，但用户对**非主流操作系统、特定通信渠道（如 OneBot, Slack）和自定义认证方案（Azure AAD, 企业 PKI）** 的稳定支持需求非常实际且迫切。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-06-05)

---

## 1. 今日活动概览

过去 24 小时（截至 2026-06-05），项目共更新 **7 条 Issue**（新开/活跃 2 条，关闭 5 条）和 **76 条 Pull Request**（待合并 15 条，已合并/关闭 61 条）。无新版本发布。
关键变化包括：MCP 会话重连机制修复（#4027）已合并，Azure AAD 认证支持（#4126）落地，CLI 在 `uv tool` 环境下 pip 不可用的问题（#4164）得到修复，WebUI 新增用户消息“Fork from here”功能（#4163）等。社区方面，关于“任务特定模型配置”的长期需求（#912）以及“fallback 模型未触发”的 Bug 报告（#1121）仍保持较高关注度。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

- **MCP 重连修复** ([#4027](https://github.com/HKUDS/nanobot/pull/4027))：修复 `_mcp_connected` 在会话断开后未重置，导致死连接无法重连的关键 Bug，并添加重连回调。
- **Azure AAD 认证** ([#4126](https://github.com/HKUDS/nanobot/pull/4126))：为 Azure OpenAI 提供商增加基于 Azure Identity 的身份认证（替代 API Key），关闭 [#4125](https://github.com/HKUDS/nanobot/issues/4125)。
- **Agent 运行级 Hook 生命周期** ([#4176](https://github.com/HKUDS/nanobot/pull/4176))：新增 `before_run`、`after_run`、`on_error`、`on_finally` 等回调，使外部扩展可以感知 Agent 完整执行周期。
- **CLI 在 uv tool 环境下的 pip 降级** ([#4164](https://github.com/HKUDS/nanobot/pull/4164))：当系统 Python 无 pip 模块时，回退使用 `uv pip`，修复 WebUI 安装 CLI App 失败的问题（#4158）。
- **工具调用 ID 兼容性** ([#3984](https://github.com/HKUDS/nanobot/pull/3984))：修复 OpenAI 兼容 API（如 GLM-4.7、Kimi 2.6）返回的工具调用 ID 被替换导致不匹配的问题。
- **WebUI 用户消息“Fork from here”** ([#4163](https://github.com/HKUDS/nanobot/pull/4163))：允许用户在历史用户消息上点击 Fork 图标，修改后发送，并记录分支来源元数据。
- **WebUI 渲染 CLI 生成图片** ([#3966](https://github.com/HKUDS/nanobot/pull/3966))：使 WebUI 能正确显示 CLI App 生成的图片（包括实时流）。
- **测试确定性改进** ([#4189](https://github.com/HKUDS/nanobot/pull/4189))：将单元测试中的定时等待替换为确定性时钟和事件，消除 flaky 测试。

---

## 4. 社区热点

- **`#912` – 任务特定模型配置** ([链接](https://github.com/HKUDS/nanobot/issues/912))
  创建于 2026-02-20，至今已获 **4 条评论** 和 **3 个 👍**。用户希望为对话、工具调用、浏览器使用分别配置不同模型，而非全局单一模型。该 Issue 已标记为 `stale`，但社区仍有讨论，反映用户对精细化模型路由的强烈需求。

- **`#1121` – Fallback 模型在 LLM 超时时未触发** ([链接](https://github.com/HKUDS/nanobot/issues/1121))
  报告当主模型返回 `Timeout` 或 `ServiceUnavailableError`（如 Gemini 503）时，配置的 fallback 模型未被调用，直接返回错误。共 3 条评论、3 个 👍。该 Issue 已于今日关闭，但关闭原因不明（关联 PR 未直接列出），社区可能仍关心具体修复方式。

---

## 5. Bug 与稳定性

| 严重程度 | Issue / PR | 描述 | 状态 |
|----------|------------|------|------|
| **严重** | [#1121](https://github.com/HKUDS/nanobot/issues/1121) | Fallback 模型在 LLM 超时/503 时未触发，导致功能不可用 | 已关闭（无关联 fix PR 说明） |
| **中等** | [#4168](https://github.com/HKUDS/nanobot/issues/4168) | 随机时间后 MCP 服务器不可达，日志报 `McpError: Session terminated`，重启可恢复 | 已关闭，同日合并的 [#4027](https://github.com/HKUDS/nanobot/pull/4027) 提供了修复 |
| **中等** | [#4158](https://github.com/HKUDS/nanobot/issues/4158) | 在 `uv tool` 环境下安装 CLI App 失败，因 `sys.executable` 对应的 Python 无 pip 模块 | 已关闭，由 [#4164](https://github.com/HKUDS/nanobot/pull/4164) 修复 |
| **低** | [#3984](https://github.com/HKUDS/nanobot/pull/3984) | OpenAI 兼容 API 的工具调用 ID 被替换，导致后续 `tool` 消息引用失败 | 已合并修复 |

此外，今日关闭的 [#4027](https://github.com/HKUDS/nanobot/pull/4027) 是对 MCP 重连稳定性的关键改进，能有效减少因网络波动导致的会话中断。

---

## 6. 功能请求归类

| 功能方向 | Issue / PR | 用户需求描述 | 当前进展 |
|----------|------------|-------------|----------|
| **模型配置** | [#912](https://github.com/HKUDS/nanobot/issues/912) | 支持按任务类型（对话/工具/浏览器）配置不同模型 | 仍未实现，标记为 `stale` |
| **提供商扩展** | [#4196](https://github.com/HKUDS/nanobot/issues/4196) | 支持火山引擎（Volcengine）的图片生成模型（Seedream 5.0 Lite） | 新开 Issue，无评论 |
| **认证方式** | [#4125](https://github.com/HKUDS/nanobot/issues/4125) | 为 Azure OpenAI 提供商增加 Azure AAD 认证（已完成） | 已通过 [#4126](https://github.com/HKUDS/nanobot/pull/4126) 实现并合并 |
| **WebUI 快捷键** | [#4178](https://github.com/HKUDS/nanobot/issues/4178) | 增加 `Cmd/Ctrl+Shift+O` 快捷键快速开始新聊天 | 已关闭，无关联 PR，可能已通过其他方式解决或等待后续 |
| **Slash 命令** | [#3968](https://github.com/HKUDS/nanobot/pull/3968) | 新增 `/skill` 命令列出所有已启用的技能 | 仍为 Open 状态，等待审查 |
| **桌面壳层** | [#4195](https://github.com/HKUDS/nanobot/pull/4195) | 准备首个桌面界面，共享现有 WebUI 的聊天/设置表面 | Open，新提交 |

---

## 7. 用户反馈摘要

- **Fallback 失效**（[#1121](https://github.com/HKUDS/nanobot/issues/1121)）：用户 `@AgentGaius21` 表示当主模型响应超时（Gemini 503）时，配置的 `agents.defaults.fallbacks` 完全没有被触发，直接返回错误。该问题影响高可用场景。
- **pip 模块缺失**（[#4158](https://github.com/HKUDS/nanobot/issues/4158)）：用户 `@chengyongru` 发现通过 `uv tool install` 安装的 NanoBot 中，`sys.executable` 指向的 Python 没有 pip 模块，导致 WebUI 安装 CLI App 时失败。该 Bug 已通过回退到 `uv pip` 修复。
- **火山引擎图片生成**（[#4196](https://github.com/HKUDS/nanobot/issues/4196)）：用户 `@JFPURE` 尝试使用 Volcengine 的 Seedream 5.0 Lite 进行图片生成，但 NanoBot 提示不支持该提供商，请求增加支持。
- **任务特定模型**（[#912](https://github.com/HKUDS/nanobot/issues/912)）：用户 `@mmhy2003` 提出对话、工具调用、浏览器使用三类任务应允许分别配置模型，以针对不同场景选择最佳模型。该需求已存在 4 个月，社区用户持续点赞（3 👍），表明有实际业务场景。

---

## 8. 待处理积压

- **`#912` – 任务特定模型配置** ([链接](https://github.com/HKUDS/nanobot/issues/912))
  创建于 2026-02-20，已存在 106 天，标记为 `stale` 但未被关闭。社区仍有 4 条评论和 3 个 👍。该项目请求涉及核心架构变化，可能需要维护者给出回应或路线图说明。

- **`#3968` – 新增 `/skill` 命令** ([链接](https://github.com/HKUDS/nanobot/pull/3968))
  创建于 2026-05-23，至今未合并，也未标记 `stale`。功能较小但可改善用户对技能的可发现性，建议尽快审查。

- **`#4123` – MCP URL 安全验证** ([链接](https://github.com/HKUDS/nanobot/pull/4123))
  该 PR 于 2026-05-31 创建，用于拒绝不安全的 HTTP URL 在 MCP 中使用。目前仍为 Open 状态，涉及安全加固，建议优先处理。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是根据您提供的 Zeroclaw 项目数据生成的日报。

---

# Zeroclaw 项目动态日报 — 2026-06-05

## 1. 今日活动概览

过去 24 小时，Zeroclaw 项目社区活动活跃，共产生 **32 条 Issue 更新**（其中新开/活跃 27 条，关闭 5 条）和 **50 条 PR 更新**（待合并 35 条，已合并/关闭 15 条）。今日无新版本发布。项目开发重心集中在 **v0.8.0 和 v0.8.1 版本**的阻塞问题修复和功能推进上，特别是**计算机操作能力、A2A 协议、安全性改进**等特性引发了社区高频讨论。多个涉及 **Windows 平台和 TUI/Web UI** 的 Bug 已被修复或正在修复中。

## 2. 版本发布
无

## 3. 项目进展

- **主构建修复：** [PR #7231](https://github.com/zeroclaw-labs/zeroclaw/pull/7231) **【已关闭】**，修复了因 `crates/zeroclaw-providers/src/ollama.rs` 中两处代码缺陷导致 `master` 分支无法编译的问题，属于紧急修复。
- **文档与基础架构：** [PR #7124](https://github.com/zeroclaw-labs/zeroclaw/pull/7124) **【已合并】**，修复了版本化文档部署时，旧版本标签覆盖全局 CSS/JS 导致新版样式失效的问题，并增加了版本选择器。
- **可观测性增强：** [PR #7233](https://github.com/zeroclaw-labs/zeroclaw/pull/7233) **【新开】**，响应 [Issue #7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232)，提出了一项结构化可观测性增强 RFC，旨在丰富事件上下文、关联 OTel Trace 并重构 Observer 桥接器。

## 4. 社区热点

- **计算机操作能力 (computer-use)：** [Issue #6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) 获得 **5 条评论**。社区对“Agent 操控桌面 GUI”功能呼声很高，认为这是实现自动化操作关键组件，类似于 OpenAI Codex 或 Peekaboo 方案。该功能风险等级被标记为 **high**，表明实现复杂度较高。
- **Agent-to-Agent (A2A) 协议支持：** [Issue #3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) 获得 **5 条评论及 7 个 👍**。社区希望 ZeroClaw 能原生支持开放的 A2A 协议，实现与外部代理（包括其他 ZeroClaw 实例、NanoClaw 等）的通信。这被视为多智能体协作的基础设施需求。
- **高危 Shell 命令确认策略：** [Issue #7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) 由活跃贡献者 `@NiuBlibing` 提出，建议引入类似 Claude Code 的策略模式（allow/ask/deny），为高危 shell 命令增加“每次执行需手动确认”的中间安全层级。这反映了社区对 Agent 安全性的日益关注。

## 5. Bug 与稳定性

以下为过去 24 小时内报告或活跃的 Bug，按严重程度排列：

- **S1 - 工作流阻塞：**
    - **Ollama 工具调用失败：** [Issue #5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) **【已关闭】**，Ollama Provider 在使用工具时出错，导致无法继续发送消息。
    - **空闲 RPC 会话回收：** [Issue #7179](https://github.com/zeroclaw-labs/zeroclaw/issues/7179) **【已关闭】**，ZeroClaw 在 10 分钟无操作后回收 RPC 会话，导致长时间未交互的聊天/编码会话中断。
    - **TUI 冻结：** [Issue #7125](https://github.com/zeroclaw-labs/zeroclaw/issues/7125) **【新开】**，当后台守护进程断开连接时，TUI 界面 (`zerocode`) 会完全冻结，用户必须强制退出。
    - **快速启动向导模型别名冲突：** [Issue #7227](https://github.com/zeroclaw-labs/zeroclaw/issues/7227) **【新开】**，`zerocode` 快速启动向导将新模型别名硬编码为 `default`，与已有配置冲突。
- **S2 - 功能降级：**
    - **“Clear all”不同步：** [Issue #7126](https://github.com/zeroclaw-labs/zeroclaw/issues/7126) **【新开】**，Web UI 的“Clear all”按钮仅清除前端显示，未删除后端持久化的 session 历史。已有修复 PR [#7222](https://github.com/zeroclaw-labs/zeroclaw/pull/7222)。
    - **Slack 频道重复执行命令：** [Issue #7143](https://github.com/zeroclaw-labs/zeroclaw/issues/7143) **【新开】**，Slack 连接的 Agent 会重复运行近似的 shell 发现命令，直到耗尽 `max_tool_iterations`。
    - **可观测性数据泄漏：** [Issue #7151](https://github.com/zeroclaw-labs/zeroclaw/issues/7151) **【新开】**，可观测性工具调用信息错误地通过聊天 WebSocket 发送，导致 UI 中出现永久“unknown”工具卡片。已有修复 PR [#7221](https://github.com/zeroclaw-labs/zeroclaw/pull/7221)。
- **S3 - 次要问题：**
    - **仓库体积过大：** [Issue #7211](https://github.com/zeroclaw-labs/zeroclaw/issues/7211) **【已关闭】**，社区用户反映仓库体积“巨大”。
    - **微信回复忽略：** [Issue #7225](https://github.com/zeroclaw-labs/zeroclaw/issues/7225) **【新开】**，WhatsApp Web 频道在 `mention_only` 模式下，机器人回复无法被用户直接回复触发，只能通过再次提及机器人触发。

## 6. 功能请求归类

- **安全性/合规性：**
    - [Issue #7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)：为高危 Shell 命令增加“每次执行确认”层级及策略模式。
    - [PR #5797](https://github.com/zeroclaw-labs/zeroclaw/pull/5797)：为自定义推理提供商添加 `tls_ca_cert_path` 支持，适配企业 PKI 环境。

- **核心能力扩展：**
    - [Issue #6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)：添加计算机操作能力（屏幕截图、鼠标键盘事件），控制本地桌面。
    - [Issue #3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566)：原生支持 A2A（Agent-to-Agent）协议，实现多智能体互操作。
    - [Issue #5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907)：支持 LSP，以提升编码能力，减少幻觉。

- **配置与可观测性：**
    - [Issue #7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100)：允许为每个模型配置 `vision` 和 `context_window`，用于能力检查和 UI 显示。
    - [Issue #7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232)：增强可观测性，为事件添加渠道、Agent 别名、LLM 调用费用等上下文。

- **用户体验提升：**
    - [Issue #7113](https://github.com/zeroclaw-labs/zeroclaw/issues/7113)：Slack 频道中增加 Agent 工作时可见进度提示。
    - [Issue #7137](https://github.com/zeroclaw-labs/zeroclaw/issues/7137)：为 Gateway Web 聊天增加 `/clear`、`/help` 等斜杠命令（已有对应 PR [#7223](https://github.com/zeroclaw-labs/zeroclaw/pull/7223)）。
    - [Issue #7138](https://github.com/zeroclaw-labs/zeroclaw/issues/7138)：为 Gateway Web 聊天增加文件上传/路径选择 UI。

## 7. 用户反馈摘要

- **积极性反馈：** 用户 `@sbenedetto` 在 [Issue #7143](https://github.com/zeroclaw-labs/zeroclaw/issues/7143) 中表达了对项目的感谢，称赞其是“在资源消耗上比许多其他 Agent 系统都要轻的 Rust 运行时”，体现了项目技术路线在节约资源方面的优势。
- **痛点与批评：** 用户 `@NiuBlibing` 在一系列 Issue 中集中反映了 **Web UI 和 TUI 的不完善**，包括“Clear all”不同步、时间戳显示错误、翻译缺失、界面冻结等问题，指向前端交互体验仍有不少提升空间。此外，[Issue #7069](https://github.com/zeroclaw-labs/zeroclaw/issues/7069) 指出 **Twitter/X 频道功能**虽然代码和文档存在，但在预编译二进制包中不可用，这是因为 `channel-twitter` feature 默认未开启，给用户造成了困惑。

## 8. 待处理积压

- **[Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)**：**【等待处理】**。关于丢失 **153 个提交**的审计追踪，创建于 2026-04-24，已被标记为 `help wanted`。此问题对代码库历史完整性有严重影响，目前尚未有明确的恢复方案。
- **[Issue #5797](https://github.com/zeroclaw-labs/zeroclaw/pull/5797)**：**【等待处理】**。为自定义 Provider 添加 `tls_ca_cert_path` 支持的 PR，自 2026-04-16 提出后，已将近两个月未获得维护者审核。该功能对企业级部署至关重要，可能成为相关用户的使用障碍。
- **[Issue #5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907)**：**【状态阻塞】**。关于 LSP 支持的功能请求，已阻塞近两个月（2026-04-19 提出）。该功能对提升本地模型编码准确性有潜在巨大价值，但可能因实现难度高而未被排入开发优先级。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，这是为您生成的 PicoClaw 项目动态日报。

---

### PicoClaw 项目动态日报 — 2026-06-05

**分析师：** AI 智能体与个人 AI 助手领域开源项目分析师
**数据来源：** github.com/sipeed/picoclaw

#### 1. 今日活动概览

今日项目整体活跃度较高，共处理了6个 Issue 和22个 PR，并发布了1个新的 Nightly 版本。核心活动集中在 Bug 修复和代码健壮性提升，包括对 PID 文件竞争条件、OneBot 群聊路由错误以及多种类型断言潜在 Panic 问题的修复。此外，依赖更新频繁，有多个 Dependabot 发起的版本升级 PR 被合并。

#### 2. 版本发布

- **版本号：** `v0.2.9-nightly.20260605.5224b9a4`
- **类型：** Nightly Build (自动构建，可能不稳定)
- **更新内容：** 这是一个自动化的夜间构建版本，包含自 `v0.2.9` 版本以来合并到 `main` 分支的所有变更。具体的变更日志可查阅：[`v0.2.9...main` 对比](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)。
- **注意事项：** 该版本为自动化构建，未经充分测试，请谨慎在生产环境中使用。

#### 3. 项目进展

今日合并或关闭了多个重要的修复性 PR，主要进展如下：

- **系统稳定性与安全性修复：**
    - **[CLOSED]** **PR #3000** `fix(pid): verify process identity in singleton PID check`：解决了 Issue #2720 中报告的因 PID 文件残留导致启动失败的高危问题。现在，单例 PID 检查不仅会验证 PID 是否存在，还会进一步确认该进程是否为当前 PicoClaw 网关实例，有效避免了因僵尸 PID 被其他进程（如 `systemd-resolved`）重用而导致的启动崩溃循环。
    - **[CLOSED]** **PR #2999 & #2976** `fix: handle space in go env GOVERSION`：修复了在某些 Go 工具链中，`go env GOVERSION` 返回值可能包含空格（如 `go1.25.10 X:nodwarf5`），导致构建失败的问题。
- **适配与兼容性修复：**
    - **[CLOSED]** **PR #3008** `fix: adapt to larksuite oapi-sdk-go v3.9.4 breaking changes`：紧随依赖更新 PR #3005，修复了因飞书 SDK 升级带来的破坏性变更，解决了编译失败的问题。
    - **[OPEN]** **PR #3009** `fix(onebot): use prefixed chatID for group reply routing`：直接回应了 Issue #3002 中的 Bug 报告，为 OneBot 群聊回复添加了 `group:` 前缀，以正确区分群聊和私聊，修复了群聊回复错用 `send_private_msg` 接口的问题。
- **功能与展示优化：**
    - **[OPEN]** **PR #2985** `fix(context): show both summarize and compress thresholds in /context`：针对 Issue #2968 中 `/context` 命令显示不准确的问题，增加了显示 soft 上限的 `SummarizeAtTokens` 字段，使压缩阈值展示更清晰。
- **代码健壮性增强：**
    - **[OPEN]** **PR #3011 & #3010**：由同一位贡献者 `@chengzhichao-xydt` 提交，为 `agent` 和 `channels` 包中的类型断言增加了 `ok` 检查，预防因类型不匹配导致服务 Panic 的问题。

#### 4. 社区热点

- **热点 Issue：** **[Issue #3002](https://github.com/sipeed/picoclaw/issues/3002) `[BUG]OneBot 群聊回复使用了 send_private_msg 而非 send_group_msg`**
    - **诉求：** 用户 `@Xuan-Xuann` 报告了 OneBot 适配器在处理群聊消息回复时，错误地调用了私聊接口，导致 NapCat 返回错误。
    - **项目响应：** 团队响应迅速，同一位贡献者 `@chengzhichao-xydt` 在数小时后提交了修复 PR [#3009](https://github.com/sipeed/picoclaw/pull/3009)，目前该 PR 处于待合并状态。

- **热点 Issue：** **[Issue #2968](https://github.com/sipeed/picoclaw/issues/2968) `[BUG] /context always show Compress at: 76800 tokens`**
    - **诉求：** 用户 `@xpader` 反馈 `/context` 命令始终只显示硬压缩阈值，无法反映用户配置的 `summarize_token_percent` 软压缩设置，造成使用困惑。
    - **项目响应：** 针对此问题，修复 PR [#2985](https://github.com/sipeed/picoclaw/pull/2985) 已处于开放状态，正在等待审查和合并。

#### 5. Bug 与稳定性

- **严重 Bug：** **PID 文件竞争条件** (已修复)
    - **[Issue #2720](https://github.com/sipeed/picoclaw/issues/2720) [CLOSED]**：因 `systemd-resolved` 等无关进程重用了残留的 PID 号，导致网关启动失败。已在 PR #3000 中修复。
- **功能 Bug：** **OneBot 群聊路由错误** (已修复)
    - **[Issue #3002](https://github.com/sipeed/picoclaw/issues/3002) [OPEN]**：群聊消息回复时使用了错误的 API。修复 PR #3009 已提交。
- **功能 Bug：** **context 命令显示异常** (修复中)
    - **[Issue #2968](https://github.com/sipeed/picoclaw/issues/2968) [OPEN]**：`/context` 指令未展示用户配置的软压缩阈值。修复 PR #2985 处于开放状态。
- **功能 Bug：** **Web UI 消息历史混乱** (已修复)
    - **[Issue #2972](https://github.com/sipeed/picoclaw/issues/2972) [CLOSED]**：用户升级到 `v0.2.9` 后，新会话总是附加旧的历史消息。该问题已被追踪并关闭。
- **功能 Bug：** **Codex OAuth 工具调用丢失** (已修复)
    - **[Issue #3006](https://github.com/sipeed/picoclaw/issues/3006) [CLOSED]**：使用 Codex OAuth 时，工具调用在某些情况下会丢失。已在 PR #3007 中修复。
- **功能 Bug：** **类型断言 Panic 风险** (修复中)
    - **[Issue #无]**：由贡献者 `@chengzhichao-xydt` 在 PR #3011 和 #3010 中主动发现并修复了两处因未检查类型断言可能导致的 Panic 问题。

#### 6. 功能请求归类

- **文档更新：**
    - **[Issue #2981](https://github.com/sipeed/picoclaw/issues/2981) [CLOSED]**：用户 `@axwfae` 提交任务单，指出 `v0.2.9` 版本包含大量变更，说明书需要跟进更新。

#### 7. 用户反馈摘要

- **用户 `@xpader` (来自 Issue #2968， #2972)：** 在 FreeBSD 系统上使用 MiniMax 模型，升级 `v0.2.9` 后遇到了 **Web UI 消息历史混乱** 和 **/context 显示不准确** 的问题，体验受到一定影响。前者已被关闭，后者仍在修复中。
- **用户 `@Xuan-Xuann` (来自 Issue #3002)：** 在使用 **OneBot 适配器与 NapCat** 接入时，因群聊回复接口调用错误导致功能完全不可用，这是一个影响特定用户群体的功能性 Bug，开发者已迅速响应。
- **用户 `@SebastianBoehler` (来自 Issue #3006)：** 报告了使用 **Codex OAuth 和 GPT-5.5** 时工具调用偶发失效的问题，表明高级模型与插件生态的兼容性仍在持续优化中。

#### 8. 待处理积压

- **待合并的修复 PR (重要)：** **[PR #3009](https://github.com/sipeed/picoclaw/pull/3009) `fix(onebot): use prefixed chatID for group reply routing`**
    - **摘要：** 修复 OneBot 群聊回复 Bug。由于直接影响用户功能，建议维护者优先审查。
- **待合并的功能优化 PR：** **[PR #2985](https://github.com/sipeed/picoclaw/pull/2985) `fix(context): show both summarize and compress thresholds in /context`**
    - **摘要：** 优化 `context` 命令的 UI 展示。已回应社区反馈，建议尽快合并。
- **长期未合并的旧 PR：** **[PR #2813](https://github.com/sipeed/picoclaw/pull/2813) `fix(pid): (updated) verify gateway identity before blocking startup on stale PID`**
    - **摘要：** 与今日刚合并的修复 PR #3000 解决相同的问题。该 PR 创建于2026-05-07，虽然关联问题已解决，但该 PR 本身仍为开放状态，建议维护者检查其状态并决定是否关闭。
- **长时间未更新的 PR：** **[PR #2947](https://github.com/sipeed/picoclaw/pull/2947) `fix: correct claude-sonnet-4.6 model ID to use hyphens`** [stale]
    - **摘要：** 修复 Claude 模型 ID 格式导致的 404 错误。自 2026-05-26 以来无新进展，建议维护者关注。
- **长时间未更新的 PR：** **[PR #2934](https://github.com/sipeed/picoclaw/pull/2934) `fix(channels): allow whatsapp native mode with use_native flag`** [stale]
    - **摘要：** 允许 WhatsApp 以原生模式运行。自 2026-05-24 以来无新进展，建议维护者关注。

</details>