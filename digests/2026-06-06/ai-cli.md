# AI CLI 工具社区动态日报 2026-06-06

> 生成时间: 2026-06-06 02:15 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## 横向对比

好的，作为一名专注于 AI 开发工具生态的资深技术分析师，以下是根据您提供的 2026-06-06 各工具数据生成的横向对比分析报告。

---

# AI CLI 工具横向对比分析日报 | 2026-06-06

## 1. 今日横向概览

今日各 AI CLI 工具社区均保持高活跃度，但焦点各异。**Claude Code** 发布了重要的 `fallbackModel` 降级策略功能，并修复了多个插件与构建问题。**OpenAI Codex** 的社区讨论主要集中在 WSL 性能崩溃和 MCP 资源配置泄漏上，同时官方通过 PR 引入了 `direnv` 支持和独立网页搜索。**Gemini CLI** 的重点在代理死锁和挂起问题，以及 Auto Memory 功能的稳定性和安全性改进。**GitHub Copilot CLI** 的 v1.0.60 版本在修复 Tab 补全和睡眠唤醒问题的同时，引入了新的 WSL2 CPU 占满和 MCP 无限派生的严重回归 Bug。**Kimi Code CLI** 发布了 v1.47.0，并引导用户迁移至新的单二进制架构，同时一个早期的 WebSocket 连接问题被报告。**OpenCode** 修复了 Bedrock 会话挂起等关键 Bug，社区对子代理可见性和动态工作流的需求强烈。**Qwen Code** 的 Daemon/Web-Shell 功能补全进入攻坚期，同时 OOM 和模型配置的易用性问题成为开发者主要痛点。

## 2. 各工具活跃度对比

| 工具名称 | 版本发布数 | Issue 更新数 | PR 更新数 | 关键动向 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 3 (v2.1.165-167) | 50 | 4 | 推出 `fallbackModel` 降级策略 |
| **OpenAI Codex** | 2 (rusty-v8, rust-alpha) | 50 | 50 | 远程开发与 MCP 泄漏是热点 |
| **Gemini CLI** | 3 (nightly, preview, patch) | 50 | 39 | 代理死锁、Auto Memory 优化 |
| **GitHub Copilot CLI** | 1 (v1.0.60) | 27 | 无数据 | WSL2 与 MCP 严重回归 Bug |
| **Kimi Code CLI** | 1 (v1.47.0) | 2 | 5 | 项目更名与用户迁移引导 |
| **OpenCode** | 2 (v1.16.0, v1.16.2) | 10* | 10* | Bedrock 修复，子代理需求强烈 |
| **Qwen Code** | 1 (nightly) | 25 | 50 | Daemon 功能补全，OOM 与模型配置 |

*注：OpenCode 的 Issue 和 PR 数量为精选，非全部。

## 3. 共同出现的功能方向

基于今日多个工具的社区动态，以下功能方向成为跨工具的共性问题：

- **MCP 稳定性与资源管理**：**OpenAI Codex**、**GitHub Copilot CLI**、**Kimi Code CLI** 和 **Qwen Code** 均报告了 MCP 进程泄漏、无限派生、连接断开或被误杀导致死锁等稳定性问题。这表明 MCP 生态的健壮性仍是普遍挑战，尤其是在重负载或异常场景下。
- **子代理（Subagent）生命周期管理**：**Claude Code**、**OpenAI Codex**、**Gemini CLI**、**GitHub Copilot CLI** 和 **OpenCode** 的社区均讨论了子代理挂起、状态同步失败（如 `total_turns=0` 但显示运行中）、错误报告成功等信息不透明问题。多个工具的用户都希望获得对子代理运行状态的更高可见性。
- **多设备/跨协作工作流**：**Claude Code** 和 **OpenAI Codex** 的用户持续呼吁跨机器同步配置、会话和认证信息，并支持多代理协作（Agent-to-Agent）。这反映了从单机单会话到复杂工作流环境演进的需求。
- **模型可用性与切换**：**Claude Code** 用户报告新版模型（Opus 4.8）在 CLI 中不可选，**OpenAI Codex** 用户遇到配额计算异常，**Qwen Code** 用户需手动配置模型。模型版本管理、切换灵活性以及计费透明性是开发者持续关注的痛点。
- **终端兼容性**：**GitHub Copilot CLI** 报告了 WSL2 和 Windows ARM64 的崩溃与性能回退，**Gemini CLI** 和 **OpenCode** 也报告了在 WSL 环境下的渲染或执行异常。跨操作系统的稳定性和性能优化仍是普遍挑战。

## 4. 差异化定位分析

| 工具名称 | 核心优势与定位 | 目标用户 | 今日呈现的技术路线侧重 |
| :--- | :--- | :--- | :--- |
| **Claude Code** | **企业级项目工程**：强调可靠性（`fallbackModel`）、细粒度权限控制（Deny Rule glob）、与 IDE 的深度集成（VSCode 扩展）和高级工作流（Project、Cowork）。 | 专业开发者、团队协作、复杂项目管理场景。 | 提升系统韧性（模型降级、权限增强），聚焦高级功能的打磨与修复。 |
| **OpenAI Codex** | **Agent 生态与远程开发**：拥抱 MCP 扩展，积极构建 Agent-to-Agent 和远程/沙盒开发能力，社区 PR 提交异常活跃（50条），社区驱动的创新速度快。 | 追求前沿 Agent 能力、需要远程/隔离开发环境、渴望丰富第三方扩展的开发者。 | 强化 Agent 工作流（子代理修复）、扩展环境兼容性（direnv、远程插件），社区驱动的 PR 潮。 |
| **Gemini CLI** | **确定性 Agent 与模型评估**：强调 Agent 行为可控（最大轮次、技能调用）、行为评估机制和内存系统（Auto Memory），今日发布多个补丁版本，稳定性修复为主。 | 注重 Agent 行为可预测性、系统质量和数据安全的开发者。 | 修复代理死锁/误判、优化 Auto Memory 安全性与效率，推进 lint 规范化。 |
| **GitHub Copilot CLI** | **原生终端体验**：紧密集成 GitHub 和原生 IDE，强调终端快捷键、Tab 补全、权限审批等原生交互。今日修复了终端睡眠空白等长期问题。 | 重度使用 GitHub、VSCode 和终端环境的开发者。 | 平台兼容性（修复快捷键、Tab 补全）和 MCP 稳定性是当前最大挑战，更新后出现了严重的 WSL2 性能回归。 |
| **Kimi Code CLI** | **架构重构与用户迁移**：当前处于项目更名和架构重组的关键期，核心任务是平稳地将用户引导至新的单二进制 `Kimi Code`。 | 现有 kimi-cli 用户，以及追求简洁部署的新用户。 | 完成项目更名文档和迁移引导工具，聚焦平台兼容性（WebSocket、自动登出）和 MCP 基础稳定性。 |
| **OpenCode** | **自定义工作流与社区化**：强调社区驱动的技能（Skill）和动态工作流（Dynamic Workflows）、丰富的 Provider 支持（LiteLLM），新功能引入和 Bug 修复并行。 | 喜欢高度定制、自建工作流和使用多种后端的开发者。 | 增强子代理可见性、修复 Doom Loop 检测、增加内联技能调用和非交互式 MCP 添加。 |
| **Qwen Code** | **函数调用与多模态**：深度绑定 Qwen 模型，强调工具调用（Tool Call）的可靠性和多模态支持。今天在函数调用参数类型转换和多模态模型兼容性上有明确修复。 | 使用 Qwen 系列模型、看重函数调用质量和多模态能力的开发者。 | 快速补全 Daemon/Web-Shell 功能（分支/回溯/设置），修复 OOM 和 MCP 缓存问题，用户对模型配置的易用性诉求强烈。 |

## 5. 社区活跃度记录

- **PR 提交最活跃**：**OpenAI Codex**（50个）和 **Qwen Code**（50个），显示出极高的开发推进速度和社区贡献热情。
- **Issue 讨论最活跃**：**Claude Code**、**OpenAI Codex**、**Gemini CLI**（均为50条更新），表明其用户群体最大，且问题反馈和功能讨论非常密集。
- **维护者回应与修复速度**：**Qwen Code** 表现突出，多个 Issue 被标记后快速有 PR 修复（如 #4802 模态支持）。**Gemini CLI** 针对特定问题快速发布了 `preview` 和 `patch` 版本。**Kimi Code CLI** 发布了 v1.47.0，主要聚焦在文档和迁移引导上。
- **高严重性问题涌现**：**GitHub Copilot CLI** 的 v1.0.60 版本引发了 WSL2 CPU 占满的新严重回归，引发了高优先级讨论。

## 6. 有证据支撑的观察

1.  **MCP 稳定性成为跨工具的公敌**：从 **Codex**、**Copilot CLI**、**Kimi** 到 **Qwen**，昨日的更新中均明确报告了 MCP 进程泄漏、无限派生、连接断开等具体 Bug。这不再是单一工具的问题，而是整个 AI CLI 工具在拥抱开放生态（MCP）时必须共同面对的稳定性挑战。

2.  **子代理（Subagent）的透明性和稳定性是普遍痛点**：**Claude Code**、**Codex**、**Gemini**、**Copilot CLI** 和 **OpenCode** 的用户均反馈子代理挂起、状态信息不透明（如 `total_turns=0` 但显示运行）、生命周期控制混乱（孤儿进程、错误报告成功）等问题。改善子代理的可观测性和执行确定性是所有工具的当务之急。

3.  **企业级功能需求开始分化**：**Claude Code** 的 `fallbackModel` 和 **GitHub Copilot CLI** 的全局权限配置文件请求，代表了两个不同的企业需求方向。前者侧重于模型的可靠性和容错，后者侧重于配置管理和自动化。**OpenCode** 和 **Codex** 的用户也开始强调多用户认证和权限管理，表明团队协作需求在多个生态中浮现。

4.  **移植兼容性是持续的成本**：**GitHub Copilot CLI** 和 **OpenCode** 昨日在 WSL2 环境下均报告了严重的性能或渲染问题，而 **Qwen Code** 也修复了 Linux 粘贴问题。这证明，支持跨平台（特别是 WSL2）需要持续投入，且任何一次更新都可能引入平台特有的回归。

5.  **今日暂无明确跨工具信号**：各工具在模型可用性（Claude Code vs.Codex vs.Qwen Code）、架构迁移（Kimi Code）或特色功能（Gemini 的 Auto Memory 评估、Qwen 的多模态修复）上呈现出差异化的发展路径，并未观察到所有工具共同趋同的明显信号。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code 社区动态日报 | 2026-06-06

## 今日更新概览

过去 24 小时内，Anthropic 发布了 3 个版本（v2.1.165–v2.1.167），主要包含 Bug 修复和可靠性改进，其中 v2.1.166 引入了重要的 `fallbackModel` 配置支持和多层级模型降级策略。社区 Issue 活跃度保持高位，共 50 条更新，认证流程、多机器协作和模型可用性仍是讨论焦点；PR 方面有 4 个新提交，包含 Dev Container 修复和插件作者字段对齐修复。

---

## 版本发布

### v2.1.166（2026-06-06）
- **新增 `fallbackModel` 配置项**：支持设置最多三个降级模型，当主模型过载或不可用时按顺序尝试。`--fallback-model` 参数现在也适用于交互式会话。
- **Deny 规则通配符支持**：在 deny rule 的 tool-name 位置支持 glob 模式（如 `"*"` 可拒绝所有工具）。

### v2.1.165 / v2.1.167
- 均为 Bug 修复和可靠性改进。

---

## 社区热点 Issues（精选 10 条）

### 1. #27302 – 支持同一 Connector 的多个账户（261👍，195条评论）
- **场景**：用户在 Claude Code（Web 版）中需要使用同一 Connector（如 GitHub、GitLab）的不同账户，但当前只能绑定一个。
- **社区反应**：诉求强烈，评论区持续讨论产品设计细节。
- 🔗 https://github.com/anthropics/claude-code/issues/27302

### 2. #8327 – API Key 覆盖订阅导致“组织已禁用”错误（15👍，118条评论）
- **场景**：拥有 Pro/Max 订阅的用户在设置 `ANTHROPIC_API_KEY` 后，Claude Code CLI 报错 `Organization has been disabled`，覆盖了订阅权限。
- **影响范围**：涉及认证逻辑与订阅优先级问题，已持续数月。
- 🔗 https://github.com/anthropics/claude-code/issues/8327

### 3. #28300 – 跨机器多代理协作（Agent-to-Agent 协议）
- **场景**：用户希望在多台机器上部署多个 Claude Code 实例，实现代理间通信与协作。
- **影响**：与 MCP 和 Agent 功能相关，代表高级工作流需求。
- 🔗 https://github.com/anthropics/claude-code/issues/28300

### 4. #22648 – 账户级设置跨设备同步（37👍）
- **场景**：`~/.claude/` 配置仅存储在本地，多台设备（Linux + MacBook）无法同步。
- **社区反应**：用户已反复提出（提及 #6037 等多条重复 Issue）。
- 🔗 https://github.com/anthropics/claude-code/issues/22648

### 5. #61889 – CVP 用户在新会话中被错误拦截（23条评论）
- **场景**：CVP（Closed Vulnerable Program）批准的用户在 claude.ai（非 Claude Code）上遇到被拒绝服务的异常。
- **影响**：涉及信任与安全策略的误报。
- 🔗 https://github.com/anthropics/claude-code/issues/61889

### 6. #12433 – macOS 活动监视器显示版本号而非进程名（22👍）
- **场景**：在 macOS Activity Monitor 中，Claude Code 进程显示为 `2.0.53` 等版本号，难以识别。
- **影响**：影响系统资源排查体验，已持续数月。
- 🔗 https://github.com/anthropics/claude-code/issues/12433

### 7. #63456 – Opus 4.8 在 CLI `/model` 中不可选（11👍）
- **场景**：用户账户在网页端可用 Opus 4.8，但 CLI 的 `/model` 选择器仅显示到 Opus 4.5。
- **影响**：模型可用性不一致，阻塞高级用户使用。
- 🔗 https://github.com/anthropics/claude-code/issues/63456

### 8. #49649 – 在 Projects 中为现有 Cowork 任务切换模型（20👍）
- **场景**：用户希望在正在进行的 Cowork 会话中动态更换模型（如从 Sonnet 切换到 Opus），而不重启任务。
- **需求**：提升长任务灵活性。
- 🔗 https://github.com/anthropics/claude-code/issues/49649

### 9. #64651 – VSCode 扩展：后台 agent 输出污染前台聊天（4条评论）
- **场景**：在 VSCode 扩展中，`run_in_background: true` 的子代理的输出会混入主动对话窗口。
- **影响**：影响 VSCode 用户的使用体验，近期反馈。
- 🔗 https://github.com/anthropics/claude-code/issues/64651

### 10. #65699 – Opus 4.8 对合法生物医学研究误报 AUP（3条评论）
- **场景**：用户在 Claude Code 中使用 Opus 4.8 进行学术研究，被错误触发使用策略（AUP）拦截；Opus 4.7 无此问题。
- **影响**：表明模型行为不一致，可能影响科研用户。
- 🔗 https://github.com/anthropics/claude-code/issues/65699

---

## 重要 PR 进展（共 4 条）

### 1. #58673 – 标题仅“s”（已开放）
- 作者 @sjbrenchley89，未附带详细描述，疑似测试或未完成 PR。
- 🔗 https://github.com/anthropics/claude-code/pull/58673

### 2. #65723 – Claude/subscription debate chat rx ewi
- 作者 @nowordsformylove，标题与描述不完整，状态未合并。
- 🔗 https://github.com/anthropics/claude-code/pull/65723

### 3. #65666 – 修复 Dev Container 构建问题
- 作者 @sgt101，修复因防火墙内无 DNS 解析导致 Dev Container 构建失败的问题，并加入环境密钥传递机制。
- **重要性**：解决了开发者本地构建环境的阻塞点。
- 🔗 https://github.com/anthropics/claude-code/pull/65666

### 4. #65619 – 修复插件作者字段对齐问题（关联 #61785）
- 作者 @systemblueio，修正 `plugins/frontend-design/plugin.json` 中 `author.name` 包含两个作者、`author.email` 包含两个地址的格式错误。
- **重要性**：确保插件市场 UI 正确显示作者信息。
- 🔗 https://github.com/anthropics/claude-code/pull/65619

---

## 功能需求归类

基于过去 24 小时更新的 Issue，用户反复提及的功能方向包括：

| 功能方向 | 代表 Issue | 说明 |
|----------|------------|------|
| **多账户/多身份支持** | #27302、#8327 | 同一 Connector 多账户绑定、API Key 与订阅共存问题 |
| **跨设备设置同步** | #22648 | 配置、凭据文件的云同步 |
| **多代理协作** | #28300、#65590、#65456 | Agent-to-Agent 协议、跨项目会话、会话间通信 |
| **模型可用性与切换** | #63456、#49649 | CLI 模型选择器缺失 Opus 4.8、动态切换模型 |
| **认证与 OAuth 稳定性** | #8327、#65761、#61912 | OAuth 刷新导致 401、凭证状态损坏 |
| **IDE 集成（VSCode）** | #64651、#65776、#65774 | 后台输出污染、会话标题截断、连接问题 |
| **移动端/Web UI** | #55500、#60493 | iOS 分支选择器缺失、GitHub 仓库 picker 问题 |
| **Diff/文件视图** | #65311、#65767 | 折叠未改动行、UI 不跟随工作树切换 |
| **插件与子代理** | #65768 | 子代理无法解析插件路径变量 |
| **转录日志可靠性** | #65620 | 思维链导致的文本块丢失 |

---

## 开发者关注点

1. **认证与 OAuth 问题集中爆发**：多条 Issue 指向 OAuth 令牌刷新、组织禁用、API Key 与订阅冲突等场景。特别是 #8327（118 条评论）和 #65761（需手动删除凭据文件才恢复）表明当前认证流程对异常处理不够健壮。
2. **Opus 4.8 模型可用性不一致**：CLI 无法选择（#63456）、对特定领域误报 AUP（#65699），阻碍高级用户采用最新模型。
3. **多会话/多机器工作流缺失**：开发者希望能在不同目录、不同设备上独立协作或连接，现有能力仅支持单会话单目录。
4. **VSCode 扩展体验待打磨**：后台 agent 输出混入前台、会话标题显示不全、连接失败等问题在 VSCode 平台被报告。
5. **转录日志丢失数据**：#65620 揭示思考块可能导致文本块未持久化到 JSONL，影响会话回放和审计。

---

*数据来源：github.com/anthropics/claude-code 于 2026-06-06 10:00 UTC 采集。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

好的，作为专注于 AI 开发工具的技术分析师，以下是 2026-06-06 的 OpenAI Codex 社区动态日报。

---

# OpenAI Codex 社区动态日报 | 2026-06-06

## 今日更新概览

过去24小时内，Codex 社区活跃，共产生 50 条新或更新 Issues 及 50 个 Pull Requests。**远程开发支持**与 **Windows WSL 性能**是社区讨论的焦点，同时官方团队针对 **MCP 管理器** 与 **子代理生命周期** 提交了关键修复。两个新版本（`rusty-v8-v149.2.0` 和 `rust-v0.138.0-alpha.5`）已发布。

## 版本发布

- **rusty-v8-v149.2.0**: 针对 `rusty-v8` 库的补丁版本发布。
- **rust-v0.138.0-alpha.5**: Codex Rust 生态的 Alpha 版本发布。

## 社区热点 Issues（Top 10）

1. **#10450: 远程开发支持** `[enhancement, app]`
   - **摘要**: 用户请求为 Codex Desktop App 添加远程开发功能，使开发者能连接到远程服务器进行编码。该 Issue 获得 674 个 👍 和 177 条评论，是目前社区呼声最高的功能请求之一。 `[Closed]`
   - **链接**: `https://github.com/openai/codex/issues/10450`

2. **#18258: macOS 应用提示 “Computer Use plugin unavailable”** `[bug, app, computer-use]`
   - **摘要**: 用户在 macOS 上报告“Computer Use”插件不可用的问题。社区提供了手动修复缓存路径的临时方案，但官方修复仍在进行中。
   - **链接**: `https://github.com/openai/codex/issues/18258`

3. **#25715: Codex 应用在 WSL 环境中严重卡顿** `[bug, windows-os, app, performance]`
   - **摘要**: 有用户反馈，当 Codex App 的 Agent 环境设置为 WSL 时，响应速度极慢，几乎无法使用。这引起了许多 Windows + WSL 开发者的共鸣。
   - **链接**: `https://github.com/openai/codex/issues/25715`

4. **#24391: Windows 沙盒 `spawn setup refresh` 失败** `[bug, windows-os, sandbox, CLI]`
   - **摘要**: Codex CLI 0.133.0 版本在 Windows 上更新后，沙盒环境初始化失败。此问题影响 Windows 用户的 Docker 或虚拟环境下的开发流程。
   - **链接**: `https://github.com/openai/codex/issues/24391`

5. **#25719: macOS 应用引发 `syspolicyd` / `trustd` CPU 和内存飙升** `[bug, app, computer-use, performance]`
   - **摘要**: 用户发现 Codex Desktop 在 macOS 上运行时，会反复触发 `syspolicyd` 和 `trustd` 系统进程，导致 CPU 和内存异常占用，严重影响系统性能。
   - **链接**: `https://github.com/openai/codex/issues/25719`

6. **#20883: MCP 进程应项目级共享而非会话级** `[enhancement, mcp, app]`
   - **摘要**: 用户指出 Codex Desktop 每打开一个会话/聊天，都会重新启动 MCP 服务器进程，导致资源浪费。建议改为项目/工作区级别的进程池管理。
   - **链接**: `https://github.com/openai/codex/issues/20883`

7. **#16900: 子代理状态检查与父-子等待机制缺陷** `[bug, subagent]`
   - **摘要**: 用户遇到子代理还在正常执行任务，但其父线程却错误地认为任务失败并重新执行。这暴露出子代理生命周期管理和状态同步机制的缺陷。
   - **链接**: `https://github.com/openai/codex/issues/16900`

8. **#11324: MCP 服务在多任务时内存占用过高** `[bug, mcp, app]`
   - **摘要**: 用户反馈，在 Codex App 中同时处理多个任务时，MCP 服务的总内存消耗会持续增长，影响长期运行的稳定性。
   - **链接**: `https://github.com/openai/codex/issues/11324`

9. **#19891: 应用“For coding”视图隐藏了具体文件编辑信息** `[bug, app]`
   - **摘要**: 最新版本的 Codex App 在显示代码编辑摘要时，以聚合摘要代替了显示编辑的具体文件名和命令，破坏了原有的透明性和可追踪性。
   - **链接**: `https://github.com/openai/codex/issues/19891`

10. **#23188: 使用配额在重置边界异常下降** `[bug, rate-limits, app]`
    - **摘要**: 用户发现其每周使用额度在 5 小时重置边界附近从 70% 异常下降到 7%。这可能是配额计算或后台消费的 Bug，引发用户对计费准确性的担忧。
    - **链接**: `https://github.com/openai/codex/issues/23188`

## 重要 PR 进展（Top 10）

1. **#26715: 加载 `direnv` 环境到 Shell 快照** `[codex]`
   - **内容**: 主要解决了 `direnv` 等工具在进入工作目录后设置的环境变量无法被 Codex Shell 快照捕获的问题，提升了与本地开发环境的兼容性。
   - **链接**: `https://github.com/openai/codex/pull/26715`

2. **#26432: 释放 MCP 管理器锁以避免死锁** `[MCP]`
   - **内容**: 修复了一个潜在的死锁问题：当工具列表请求等待 MCP 服务器初始化时，若此时会话关闭，MCP 管理器写锁无法获取，导致系统阻塞。此 PR 优化了锁的持有时机。
   - **链接**: `https://github.com/openai/codex/pull/26432`

3. **#26687: 配对线程环境设置** `[internal]`
   - **内容**: 将线程的工作目录（cwd）和环境变量视为一个逻辑设置，防止在内部流程中更新一个而不同步另一个，导致执行上下文错乱。
   - **链接**: `https://github.com/openai/codex/pull/26687`

4. **#26711: 减少 TUI 对遗留核心库的依赖** `[TUI]`
   - **内容**: 重构了 TUI 客户端，移除对 `legacy_core` 的依赖。此举对于区分本地和远程应用服务端会话至关重要，能防止在远程会话中错误地访问本地文件系统。
   - **链接**: `https://github.com/openai/codex/pull/26711`

5. **#26678: 权限配置文件对客户端暴露可用性** `[permission]`
   - **内容**: 优化权限配置文件 API，使其能向客户端反馈哪些配置文件因企业策略而实际不可用，取代了客户端自行推断的复杂方式。
   - **链接**: `https://github.com/openai/codex/pull/26678`

6. **#26719: 启用代码模式下的独立网页搜索** `[codex]`
   - **内容**: 为 Codex 的“代码模式”带来了独立的网页搜索能力，使 AI Agent 能在编写代码时直接搜索并利用网络信息，无需额外切换模式。
   - **链接**: `https://github.com/openai/codex/pull/26719`

7. **#26701 - #26704: 远程插件目录支持（TUI）** `[plugin, TUI]`
   - **内容**: 一系列 PR 构建了 Codex TUI 对远程/共享插件的支持，从基础的身份识别、目录呈现到测试覆盖，为后续的插件生态系统扩展打下基础。
   - **链接**: `https://github.com/openai/codex/pull/26701`
   - **链接**: `https://github.com/openai/codex/pull/26702`
   - **链接**: `https://github.com/openai/codex/pull/26703`
   - **链接**: `https://github.com/openai/codex/pull/26704`

8. **#26717: 父线程中断时停止守护程序审查** `[codex]`
   - **内容**: 修复了守护程序审查在父线程被中断后仍在运行的问题，确保生命周期管理的一致性，避免后台产生“孤儿”审查进程。
   - **链接**: `https://github.com/openai/codex/pull/26717`

9. **#26542: 发送 Responses Lite 传输头** `[codex]`
   - **内容**: 为启用“Responses Lite”模式的模型请求添加特定的 HTTP 头信息，用于在服务端进行流量标记或优化，是底层性能优化的一环。
   - **链接**: `https://github.com/openai/codex/pull/26542`

10. **#26713: 报告不可用的 MCP OAuth 凭据为已登出** `[OAuth, MCP]`
    - **内容**: 修复了当 MCP OAuth 凭据过期且无法刷新时，UI 仍错误显示“已登录”状态的问题。现在将正确显示为“已登出”，避免用户混淆。
    - **链接**: `https://github.com/openai/codex/pull/26713`

## 功能需求归类

- **远程开发与沙盒**: 用户持续要求直接在 Codex App 中支持远程服务器开发（#10450）。
- **性能与稳定性**: 大量问题集中在 Windows WSL、macOS 系统进程以及多任务场景下的性能瓶颈和资源泄漏（#25715, #25719, #11324）。
- **MCP 管理体系**: 用户期望更高效的 MCP 进程管理（项目级共享），以及更可靠的 MCP 服务器生命周期控制和诊断工具（#20883, #21984, #24439）。
- **子代理（Subagent）**: 子代理的生命周期控制（状态同步、孤儿进程、等待机制）仍是社区最关注的功能缺陷之一（#16900, #19197, #22099）。
- **Windows 平台优化**: 多个 Issue 报告了 Windows 环境下独占的沙盒配置失败、网络优化不佳和 UI 卡顿等问题（#24391, #25715, #25362）。

## 开发者关注点

- **WSL 体验是重灾区**: 使用 WSL 的开发者反馈尤为强烈，指出 Codex App 在 WSL 环境下的性能与 CLI 版本相比存在巨大差距，严重影响日常使用流程（#25715, #20967）。
- **沙盒初始化问题频发**: Windows 用户频繁遇到沙盒环境初始化失败（“spawn setup refresh”）的问题，这直接阻塞了依赖于隔离环境的安全编码任务（#24391, #25362, #25012）。
- **后台进程管理混乱**: 无论是 macOS 的系统进程（`syspolicyd`）还是 Codex 内部的子代理（`subagent`）或 MCP 服务，开发者普遍反映后台进程管理混乱，容易导致资源耗尽、性能下降甚至死锁（#25719, #19197, #11324, #26432）。
- **配额扣除不透明**: 用户对于使用配额的异常下降表示困惑和担忧，尤其是在非活跃状态下或重置边界附近，这影响了用户对服务计费模型的信任（#23188, #26600）。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

好的，这是为您生成的 2026-06-06 Gemini CLI 社区动态日报。

---

## Gemini CLI 社区动态日报 — 2026-06-06

### 今日更新概览

今日社区活跃度较高，发布了三个版本（包括一个 nightly 和两个补丁版本）。Issue 与 PR 讨论主要聚焦于代理（Agent）稳定性、内存系统（Auto Memory）质量以及终端兼容性问题。此外，多个 PR 正在推进代码库的 lint 规范化工作。

### 版本发布

今天共发布了 3 个版本，主要涉及针对特定问题的修复回滚和日常构建：

- **[v0.47.0-nightly.20260605.g4196596f7]**: 最新的 nightly 版本，包含日常功能更新。
  - [查看详情](https://github.com/google-gemini/gemini-cli/compare/v0.47.0-nightly.20260604.g4196596f7...v0.47.0-nightly.20260605.g4196596f7)

- **[v0.46.0-preview.2]**: 从预览分支 v0.46.0-preview.1 中挑选修复，生成了新的补丁版本。
  - [查看详情](https://github.com/google-gemini/gemini-cli/pull/27699)

- **[v0.45.2]**: 从稳定分支 v0.45.1 中挑选了相同的修复，生成了稳定版的补丁版本。
  - [查看详情](https://github.com/google-gemini/gemini-cli/pull/27700)

### 社区热点 Issues

过去24小时内共有50个Issue被更新，以下为10个值得关注的动态：

1.  **#24353 - Robust component level evaluations [P1]**
    - **问题**：讨论如何构建更健壮的组件级评估体系，作为“行为评估”测试的后续改进。
    - **影响**：影响内部开发和测试流程的质量与可靠性。
    - **链接**：https://github.com/google-gemini/gemini-cli/issues/24353

2.  **#22745 - Assess the impact of AST-aware file reads... [P2]**
    - **问题**：探索是否值得引入基于抽象语法树（AST）感知的文件读取、搜索和代码映射工具，以提升代码理解能力。
    - **影响**：若实现，可能大幅提升代理在处理大型代码库时的效率和准确性。
    - **链接**：https://github.com/google-gemini/gemini-cli/issues/22745

3.  **#21409 - Generalist agent hangs [P1]**
    - **问题**：用户报告当 Gemini CLI 调用通用代理（Generalist agent）时，会永久挂起，导致简单任务（如创建文件夹）无法完成。
    - **社区反应**：有 8 个赞，表明该问题影响面较广。用户可通过指令阻止代理使用子代理来规避此问题。
    - **链接**：https://github.com/google-gemini/gemini-cli/issues/21409

4.  **#22323 - Subagent recovery after MAX_TURNS is reported as GOAL success [P1]**
    - **问题**：子代理在达到最大执行轮次（MAX_TURNS）后，本应报告失败，但系统错误地报告为“成功”（GOAL），导致问题被隐藏。
    - **影响**：用户难以发现代理未能完成任务的根本原因，可能收到错误的正向反馈。
    - **链接**：https://github.com/google-gemini/gemini-cli/issues/22323

5.  **#21968 - Gemini does not use skills and sub-agents enough [P2]**
    - **问题**：用户反馈 Gemini CLI 很少主动使用用户自定义的技能和子代理，即使当前任务与其高度相关。
    - **影响**：降低了技能的实用性和代理的智能程度，用户需要频繁手动指定。
    - **链接**：https://github.com/google-gemini/gemini-cli/issues/21968

6.  **#26525 - Add deterministic redaction and reduce Auto Memory logging [P2]**
    - **问题**：Auto Memory 系统在读取本地转录内容时，存在敏感信息（如密钥）在被提交到模型上下文后才进行编辑的安全隐患，且日志记录可能泄露技能清单。
    - **影响**：影响使用 Auto Memory 功能时的用户数据安全与隐私。
    - **链接**：https://github.com/google-gemini/gemini-cli/issues/26525

7.  **#26522 - Stop Auto Memory from retrying low-signal sessions... [P2]**
    - **问题**：Auto Memory 只有当智能体成功读取文件后才记录会话。若智能体认为某会话价值低而跳过，该会话将无限期地被重新尝试处理。
    - **影响**：可能导致后台进程重复处理无效任务，消耗资源。
    - **链接**：https://github.com/google-gemini/gemini-cli/issues/26522

8.  **#25166 - Shell command execution gets stuck with "Waiting input"... [P1]**
    - **问题**：在许多简单的 Shell 命令执行完毕后，Gemini CLI 仍然显示“等待输入”并卡住。
    - **影响**：严重阻塞工作流程，用户需要频繁手动终止或等待。
    - **链接**：https://github.com/google-gemini/gemini-cli/issues/25166

9.  **#24246 - Gemini CLI encounters 400 error with > 128 tools [P2]**
    - **问题**：当可用的工具数量超过 128 个（上限）时，Gemini CLI 会触发 400 错误。
    - **影响**：对于集成大量工具和技能的用户，功能将完全失效。
    - **链接**：https://github.com/google-gemini/gemini-cli/issues/24246

10. **#22093 - (Sub)agents running without permission since v0.33.0 [P2]**
    - **问题**：用户报告自从更新到 v0.33.0 后，即使在配置中禁用了代理，子代理（如 generalist）仍然会被调用。
    - **影响**：违反用户配置预期，可能导致意外行为或安全问题。
    - **链接**：https://github.com/google-gemini/gemini-cli/issues/22093

### 重要 PR 进展

过去24小时内共有39个PR被更新，以下为10个关键进展：

1.  **#27708 - fix(ci): harden AI prompt around untrusted data**
    - **内容**：修复 CI 工作流中的安全性问题，避免将不安全的用户数据直接传入 AI 提示词中。
    - **状态**：OPEN
    - **链接**：https://github.com/google-gemini/gemini-cli/pull/27708

2.  **#27705 - [Internal Testing] Promote Gemini 3.1 Flash Lite to GA...**
    - **内容**：一个大型 PR，计划将 Gemini 3.1 Flash Lite 模型正式上线（GA），并支持新的 Gemini 3.5 Flash 模型。
    - **状态**：OPEN
    - **链接**：https://github.com/google-gemini/gemini-cli/pull/27705

3.  **#27701 - fix(core): treat configured includeDirectories as optional...**
    - **内容**：修复了一个启动崩溃问题。当 `settings.json` 中配置的 `includeDirectories` 目录不存在时，CLI 不再崩溃，而是继续运行。
    - **状态**：CLOSED
    - **链接**：https://github.com/google-gemini/gemini-cli/pull/27701

4.  **#27698 - fix(core): Ensure zero-quota limits fail fast...**
    - **内容**：修复了当免费用户达到配额限制（0次）时，CLI陷入无限重试循环的问题，改为快速失败并给出明确提示。
    - **状态**：OPEN
    - **链接**：https://github.com/google-gemini/gemini-cli/pull/27698

5.  **#27695 - fix(agents): prevent duplicate agent loading from home directory**
    - **内容**：修复了当用户在 `$HOME` 目录下启动 CLI 时，由于项目级和用户级代理路径相同，导致重复加载代理并发出警告的问题。
    - **状态**：CLOSED
    - **链接**：https://github.com/google-gemini/gemini-cli/pull/27695

6.  **#27678 - fix(core): hide ignored folders from session context**
    - **内容**：优化初始会话上下文，不再列出 `.gitignore` 等规则中忽略的文件夹，以减少给模型的无关信息，专注核心代码。
    - **状态**：OPEN
    - **链接**：https://github.com/google-gemini/gemini-cli/pull/27678

7.  **#27684 - chore(lint): eliminate no-unsafe-return suppressions**
    - **内容**：代码质量清理工作，移除代码库中所有关于不安全返回的 `eslint` 规则禁用注释，提升类型安全性。
    - **状态**：OPEN
    - **链接**：https://github.com/google-gemini/gemini-cli/pull/27684

8.  **#27685 - chore(lint): type JSON-parsed task data in a2a-server**
    - **内容**：代码质量清理工作，为 a2a-server 中从 JSON 反序列化的任务数据添加了严格类型，消除不安全的类型断言。
    - **状态**：OPEN
    - **链接**：https://github.com/google-gemini/gemini-cli/pull/27685

9.  **#27591 - fix(cli): fall back for oversized bug report URLs**
    - **内容**：修复 `/bug` 命令，当生成的 Issue 报告 URL 过长时，提供备用方案，防止在 Android/Termux 等环境中因 URL 超限而崩溃。
    - **状态**：OPEN
    - **链接**：https://github.com/google-gemini/gemini-cli/pull/27591

10. **#27505 - Prevent extra spaces on width-0 CJK continuation cells**
    - **内容**：修复了中文、日文等宽字符在 Shell 输出时，被错误地插入空格导致渲染异常的问题，改善国际化用户体验。
    - **状态**：OPEN
    - **链接**：https://github.com/google-gemini/gemini-cli/pull/27505

### 功能需求归类

从近期活跃的 Issues 中，可以归纳出以下几类反复出现的社区需求：

- **代理（Agent）行为可控性**：用户期望更细致地控制代理何时以及如何使用子代理、技能和工具（如 #21968, #22093），并希望在出现死锁或错误时能获得清晰反馈（#22323）。
- **内存系统（Auto Memory）优化**：用户关注 Auto Memory 功能的安全性（#26525）、效率（#26522）和数据完整性（#26523），要求其处理过程更透明、更稳健。
- **AST 感知工具集成**：多个 Issue（#22745, #22746, #22747）探讨利用 AST 感知工具来提升文件读取、搜索和代码映射的准确性，以减少不必要的 token 消耗和操作轮次。
- **终端兼容性与体验**：持续存在关于终端卡死（#25166）、渲染错误（#21924, #27505）以及与其他工具（如 tmux, Wayland）兼容性（#21983, #27572）的改进需求。

### 开发者关注点

- **稳定性是首要诉求**：代理挂起（#21409）、命令执行后卡死（#25166）等问题是高优先级痛点，严重影响了开发者的正常使用体验。
- **配置生效性与默认行为**：多个 Issue 指出配置项（如禁用代理、`maxTurns`）不生效或预测外的默认行为，导致开发者对工具的行为失去信任。
- **资源消耗与效率**：开发者关注过多的工具（#24246）、无效的会话重试（#26522）以及不必要的临时文件生成（#23571）带来的资源浪费和执行效率低下。
- **持续演进的新模型支持**：PR #27705 表明，社区和开发者对支持 Google 新发布的模型（如 Gemini 3.1 Flash Lite GA 和 Gemini 3.5 Flash）保持高度关注，期待 CLI 能快速跟进。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

好的，作为一名专注于 AI 开发工具的技术分析师，以下是根据您提供的数据生成的 2026-06-06 GitHub Copilot CLI 社区动态日报。

---

# GitHub Copilot CLI 社区动态日报 — 2026-06-06

## 今日更新概览

昨日，GitHub Copilot CLI 发布了 v1.0.60 版本，修复了 Tab 补全和终端休眠后屏幕空白等问题。社区活跃度极高，过去 24 小时内涌现了 27 条 Issue 更新，主要集中在**平台稳定性**（特别是 WSL2 和 Windows ARM64 的崩溃与性能回退）以及 **MCP 服务器**的连接泄漏问题，引发了众多开发者的关注和反馈。

## 版本发布

**v1.0.60 (发布于 2026-06-05)**
[查看发布详情](https://github.com/github/copilot-cli/releases/tag/v1.0.60)

- **新功能与改进:**
    - 在斜杠命令路径参数中，Tab 键现在可以自动补全 `..` 父目录遍历。
    - 为 Anthropic 模型添加了最大推理努力等级（max reasoning effort level），并开放了所有计划可用的努力等级。
- **Bug 修复:**
    - 修复了在终端复用器（terminal multiplexer）中从睡眠状态唤醒后，屏幕保持空白的长期问题。

## 社区热点 Issues

1.  **[[High severity] 1.0.60 WSL2回归：主线程在闲置时CPU占用~215%，TUI输出冻结 (#3700)](https://github.com/github/copilot-cli/issues/3700)**
    - **影响范围:** WSL2 用户，使用场景覆盖所有常规会话。
    - **问题阐述:** 升级至 v1.0.60 后，在 WSL2 中 CLI 的主线程在无任何操作时 CPU 占用飙升至 215%，TUI 界面停止更新，必须重启进程才能恢复。
    - **社区反应:** 收到 1 个 👍，用户认为此为高严重性回归问题。

2.  **[[Bug] MCP server connect leak: stuck stdio servers spawn unbounded child processes (CPU/lag) (#3698)](https://github.com/github/copilot-cli/issues/3698)**
    - **影响范围:** 所有使用了标准 I/O 模式 MCP 服务器的用户，如自定义工具或开发环境。
    - **问题阐述:** 当配置的 MCP 服务器连接缓慢时，CLI 会无限制地反复生成子进程，这些进程不会被回收，导致 CPU 飙升、系统响应变慢。
    - **社区反应:** 初始报告，暂无评论。

3.  **[[Bug] Copilot CLI bug: runaway MCP server spawning (IDE lock-file watcher re-init loop) (#3701)](https://github.com/github/copilot-cli/issues/3701)**
    - **影响范围:** 在 Windows 上与 VS Code 等 IDE 集成并启用 MCP 的用户。
    - **问题阐述:** 一个与 MCP 服务器和 IDE 锁文件监视器相关的 Bug，导致服务器在初始化循环中无限次派生，占用系统资源。
    - **社区反应:** 有 1 条评论，等待进一步调查。

4.  **[[Bug] Background sub-agent silently hangs at total_turns=0 when model="gpt-5.5" (#3547)](https://github.com/github/copilot-cli/issues/3547)**
    - **影响范围:** 使用子代理功能并指定特定模型（如 gpt-5.5）的用户。
    - **问题阐述:** 当一个父代理派生子代理（background mode）并指定模型为 `gpt-5.5` 时，子代理显示“运行中”，但 `total_turns` 始终为 0，处于挂起状态，无法输出任何结果。
    - **社区反应:** 有 2 条评论，仍在讨论中。

5.  **[[Bug] copilot.exe fatal-aborts under load (BEX64 / 0xc0000409) on Windows ARM64 (#3687)](https://github.com/github/copilot-cli/issues/3687)**
    - **影响范围:** Windows ARM64 用户，特别是同时打开多个终端标签页或在高内存压力下。
    - **问题阐述:** `copilot.exe` 进程在高负载下会因内存访问异常而硬崩溃（fatal-abort），而不是优雅退出，替换进度丢失。
    - **社区反应:** 有 3 条评论，开发者正在要求提供更多转储文件信息。

6.  **[[Bug] Tool approvals sometimes silently lost when copilot CLI is used in parallel sessions (#3563)](https://github.com/github/copilot-cli/issues/3563)**
    - **影响范围:** 同时运行多个 `copilot` CLI 会话并配置工具权限的用户。
    - **问题阐述:** 当一个会话中批准了某个工具（如“始终允许”），另一个并行会话的权限操作会静默覆盖前者，导致已批准的权限丢失。
    - **社区反应:** 有 1 条评论，开发者承认这是一个竞态条件，需要处理。

7.  **[[Feature] Support a default config file for permissions (#2398)](https://github.com/github/copilot-cli/issues/2398)**
    - **影响范围:** 所有需要频繁设置 CLI 权限的用户。
    - **问题阐述:** 用户请求支持一个默认的、全局的权限配置文件，以避免每次启动新会话都重复设置繁琐的权限。
    - **社区反应:** 已有 10 个 👍，需求持续存在，说明社区对该功能的呼声很高。

8.  **[[Bug] Copying from CLI pastes PREVIOUS clipboard item. (#2998)](https://github.com/github/copilot-cli/issues/2998)**
    - **影响范围:** 所有使用 CLI 进行复制/粘贴操作的用户。
    - **问题阐述:** 当在 CLI 内选中并复制文本时，粘贴的却是复制操作**之前**剪贴板里的内容。这个 Bug 已存在较长时间。
    - **社区反应:** 有 1 条评论，更新时间为 2026-06-05，意味着开发者近期可能开始关注此问题。

9.  **[[Bug] Most hated keyboard shortcut: CTRL + Z - Copilot CLI says: Goodbye! (green) (#3693)](https://github.com/github/copilot-cli/issues/3693)**
    - **影响范围:** 习惯于使用 `Ctrl+Z` 进行撤销操作的开发者。
    - **问题阐述:** 在 Copilot CLI 中按下 `Ctrl+Z` 会导致程序退出（显示 “Goodbye!”），而非执行撤销功能，这与多数终端的行为不同，令用户困扰。

10. **[[Bug] subagent permission approval lacks context and is confusing (#3684)](https://github.com/github/copilot-cli/issues/3684)**
    - **影响范围:** 使用子代理功能的用户，特别是 Linux 环境。
    - **问题阐述:** 当子代理请求权限执行命令时，系统仅显示 `"/"` 作为目录，而不会向主代理那样提供将要执行的具体命令和上下文，用户认为这非常危险。
    - **社区反应:** 有 0 条评论，是新提交的 Bug。

## 功能需求归类

从过去 24 小时的动态中，社区反馈的功能需求主要集中以下几个方面：

- **平台兼容性与稳定性：** 高优先级需求集中在解决 **Windows (ARM64)** 和 **WSL2** 上的崩溃、CPU 占用过高和 TUI 渲染错误等问题。此外，**Linux ARM64** 用户请求增加语音模式支持。
- **MCP 服务器管理：** 社区强烈呼吁解决 MCP 服务器的**进程泄漏**和**无限派生**问题，这直接影响系统稳定性和用户体验。
- **交互与输入优化：** 持续的讨论集中在 **键盘快捷键冲突**（如 `Ctrl+Z`）、**复制/粘贴行为异常**、`Esc` **键任务取消逻辑**等，表明终端原生交互习惯与 CLI 现有实现存在不一致。
- **权限与配置管理：** 用户对**默认权限配置文件**、**并行会话权限覆盖**以及**子代理权限上下文缺失**等问题表现出持续的不满，希望获得更可预测和安全的权限管理体验。
- **非交互式与自动化：** 对 Agent Skill 的 `allowed-tools` 在**非交互模式**下失效的反馈，以及希望将**成本数据**通过 Hook 暴露给外部系统（如 Jira），显示出用户有更强的自动化和集成需求。

## 开发者关注点

- **稳定性是首要痛点：** v1.0.60 的 WSL2 CPU 占满和 Windows 下的进程崩溃是当前最大的痛点，直接导致工具不可用。开发者期望 GitHub 能快速排查并发布修复版本。
- **MCP 服务器生态的成熟度挑战：** MCP 作为扩展工具能力的关键特性，其“进程泄漏”和“无限派生”等基础稳定性问题，成为阻碍社区采用的关键障碍。
- **终端原生交互体验的回归：** 开发者对“复制粘贴”、“撤销（Ctrl+Z）”、“鼠标滚轮滚动”等基础、标准的终端行为被改变或破坏表达了强烈的不满，他们期望 Copilot CLI 能更好地遵循终端操作系统的通用约定。
- **并行会话下的数据竞争：** 权限配置在并行会话中静默丢失的问题，暴露了 CLI 后端状态管理的不足，对需要多窗口或终端复用器的重度用户影响很大。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 2026-06-06

## 今日更新概览

仓库今日发布 v1.47.0，同时完成项目更名文档和升级引导功能。新上报一个 WebSocket 初始化失败的严重 Bug（#2435），影响 Windows 用户使用 Work 标签页。有一个长期 PR（RalphFlow 架构）在关闭后于今日被合并，另有一个 MCP 连接错误修复（#2434）和 Linux 终端滚动修复（#2429）处于开放审查状态。

## 版本发布

### v1.47.0

- 修复：工具调用错误摘要中包含尾部输出，并将摘要以纯文本渲染（[#2389](https://github.com/MoonshotAI/kimi-cli/pull/2389)）
- 文档：项目更名为 Kimi CLI，并链接到后继者 Kimi Code CLI（[#2431](https://github.com/MoonshotAI/kimi-cli/pull/2431)）
- 功能：在 Shell 中引导用户升级至新的单二进制 Kimi Code，新增 `/upgrade` 命令，自动迁移配置与会话（[#2432](https://github.com/MoonshotAI/kimi-cli/pull/2432)）
- 发版：正式将 kimi-cli 及 kimi-code 封装同步至 1.47.0（[#2433](https://github.com/MoonshotAI/kimi-cli/pull/2433)）

## 社区热点 Issues

### #2435 [Bug] Kimi Work tab: "Daimon control WS not ready" + infinite reload at 99%

- **作者**：[@JoseLuisMartinezMeza](https://github.com/JoseLuisMartinezMeza)
- **状态**：Open（创建/更新于 2026-06-06）
- **影响场景**：`kimi web` 的 Work 标签页完全不可用，WebSocket 守护（daemon）初始化失败，UI 显示“Daimon control WS not ready”错误并持续在 99% 处无限重载加载。
- **环境**：Windows 10/11，Kimi CLI v1.41.0
- **社区反应**：暂无评论，无 👍
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2435

### #2430 [Bug] auto logged out in the middle of a task

- **作者**：[@TheKevinWang](https://github.com/TheKevinWang)
- **状态**：Closed（创建于 2026-06-04，更新于 2026-06-05）
- **影响场景**：用户在执行长时间任务时（如后台离开一段时间），Kimi Code CLI 自动登出，导致任务中断。
- **环境**：Windows 10 x64，kimi v1.36.0，open platform / kimi-k2.6 模型
- **社区反应**：已关闭，可能已修复或需后续跟踪。评论数为 0。
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2430

## 重要 PR 进展

### #1960 [CLOSED] feat(soul): RalphFlow architecture with ephemeral context and convergence detection

- **作者**：[@ORDL-AMF](https://github.com/ORDL-AMF)
- **创建**：2026-04-20 | **更新**：2026-06-06（今日关闭合并）
- **内容**：引入 RalphFlow 自动化迭代框架，防止 Agent 无限循环。使用临时上下文文件（ephemeral context）运行流程迭代，主上下文保持轻量，并添加收敛检测逻辑。
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/1960

### #2434 [OPEN] fix: suppress MCP connection errors and handle LLM double-serialization

- **作者**：[@wintrover](https://github.com/wintrover)
- **创建**：2026-06-05 | **更新**：2026-06-05
- **内容**：修复三个在重度 MCP 工具使用中发现的问题：1) 抑制 MCP 服务器连接断开时事件循环中的报错；2) 处理 LLM 返回内容的二次序列化问题（double-serialization）；3) 其他 MCP 相关稳定性修复。
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2434

### #2429 [OPEN] fix: prevent idle cursor blink from forcing scroll to bottom in Linux terminals

- **作者**：[@GH-ytym](https://github.com/GH-ytym)
- **创建**：2026-06-04 | **更新**：2026-06-05
- **内容**：修复 Linux 终端中对话结束后，用户滚动查看历史时，终端每约 1 秒自动跳回底部的问题。原因是空闲光标闪烁触发了滚动事件。
- **关联 Issue**：[#2422](https://github.com/MoonshotAI/kimi-cli/issues/2422)
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2429

### #2433 [CLOSED] chore(release): bump kimi-cli to 1.47.0

- **作者**：[@RealKai42](https://github.com/RealKai42)
- **创建**：2026-06-05 | **更新**：2026-06-05（已合并）
- **内容**：版本冲刺，将 kimi-cli 及 kimi-code 封装从 1.46.0 提升至 1.47.0。
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2433

### #2432 [CLOSED] feat(shell): guide users to upgrade to the new Kimi Code

- **作者**：[@RealKai42](https://github.com/RealKai42)
- **创建**：2026-06-05 | **更新**：2026-06-05（已合并）
- **内容**：在 CLI 中添加升级引导，不强制、不创建倒计时。新增 `/upgrade` 命令，一键安装新 Kimi Code 并迁移配置/会话；软件启动时显示友好提示（welcome-screen nudge）。
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2432

### #2431 [CLOSED] docs: rename project to Kimi CLI and link to Kimi Code CLI successor

- **作者**：[@RealKai42](https://github.com/RealKai42)
- **创建**：2026-06-05 | **更新**：2026-06-05（已合并）
- **内容**：为避免与后继仓库 `MoonshotAI/kimi-code` 名称冲突，将 README 中项目自引用从“Kimi Code CLI”改回“Kimi CLI”，并添加指向后继项目的链接。
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2431

## 功能需求归类

今日数据中 Issues 数量较少（仅 2 条），暂无明显的多用户重复需求趋势。但从单一 Issue 可观察到：
- **WebSocket 连接可靠性**（#2435）：Work 标签页的 WebSocket 守护初始化失败，导致 UI 无法使用，可能涉及容器或 Windows 平台兼容性。
- **会话自动登出**（#2430）：后台任务被中断，与登录 token 刷新或超时机制有关。

## 开发者关注点

- **平台兼容性**：Windows 用户报告了 Work 标签页和自动登出的问题，且均为 Windows 10/11（#2435、#2430）。Linux 终端光标闪烁导致的滚动问题也有独立修复（#2429）。
- **MCP 工具稳定性**：PR #2434 专门修复 MCP 连接断开时的异常处理，说明 MCP 工具在重负载场景下的可靠性是当前优化重点。
- **项目更名与迁移**：多个 PR 和版本发布涉及将项目从“Kimi Code CLI”重命名为“Kimi CLI”，并引导用户迁移至新的单二进制版本。这一变化对现有用户的升级路径有一定影响。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

好的，这是为你生成的 2026-06-06 OpenCode 社区动态日报。

---

# OpenCode 社区动态日报 ｜ 2026-06-06

## 今日更新概览

今日社区发布了 **v1.16.2** 和 **v1.16.0** 两个版本，修复了推理摘要、编辑操作和 Bedrock 会话挂起等关键 Bug。在社区讨论中， **子代理的可见性（Subagent Status Visibility）** 和 **工作流自动化（Dynamic Workflows）** 成为最受关注的功能需求。

## 版本发布

### v1.16.2 与 v1.16.0 发布

**v1.16.2** 是一个 Bug 修复版本，主要解决了以下核心问题：
- **推理摘要**：仅在与支持该功能的提供商协作时运行，避免在不兼容的后端（如 GPT-5）上引发请求失败。
- **编辑操作**：拒绝可能导致误覆盖代码或替换已有文件的“宽松匹配”。
- **Bedrock 会话**：修复了 Bedrock 会话挂起的问题。

**v1.16.0** 则引入了多项新特性和改进：
- **工作区管理**：支持克隆工作区时保留脏文件和未跟踪文件；支持在多个工作区和目录之间移动会话。
- **模型支持**：通过 AWS Bedrock 增加了对 OpenAI 模型的原生支持。
- **Agent 加载**：新增技能发现（Skill Discovery）和基于文件的 Agent 加载机制。
- **GitHub Copilot**：更新了相关使用逻辑。

## 社区热点 Issues

1.  **#5359 部分模型无法读取图片 (15条评论)**
    - **影响场景**：用户在使用 LiteLLM + Vertex AI 后端时，从 v1.0.137 版本开始，粘贴图片后 OpenCode 无法识别。
    - **社区反应**：这是一个回归性 Bug，影响特定后端配置下的多模态能力。
    - **链接**：https://github.com/anomalyco/opencode/issues/5359

2.  **#2047 LM Studio 模型列表无法刷新 (15条评论)**
    - **影响场景**：用户使用 LM Studio 本地模型时，在 LM Studio 中添加或删除模型后，OpenCode 内的模型列表无法同步更新。
    - **社区反应**：这是一个长期存在的问题，影响本地开发者的模型切换体验。
    - **链接**：https://github.com/anomalyco/opencode/issues/2047

3.  **#29992 自动滚动失效 (13条评论)**
    - **影响场景**：当助手生成回复时，用户手动向上滚动再回到底部，自动滚动功能会失效，导致新内容被隐藏。
    - **社区反应**：这是 UI 交互的常见痛点，影响阅读长回复的体验。
    - **链接**：https://github.com/anomalyco/opencode/issues/29992

4.  **#29808 桌面版 UI 显示问题 (11条评论)**
    - **影响场景**：使用新布局后，文件树等切换按钮消失，即使禁用新布局也无法恢复。
    - **社区反应**：UI 设置的“高级选项”可能导致界面元素丢失，用户需要依赖快捷键。
    - **链接**：https://github.com/anomalyco/opencode/issues/29808

5.  **#20234 WSL 下文字显示异常 (9条评论)**
    - **影响场景**：在 WSL 环境下使用 OpenCode，思考过程中的内容会一字一行输出，影响阅读。
    - **社区反应**：特定于 WSL 的终端兼容性问题。
    - **链接**：https://github.com/anomalyco/opencode/issues/20234

6.  **#12716 无法捕捉“Doom Loop” (8条评论)**
    - **影响场景**：当 Agent 陷入无限循环（如重复思考同一个词100次）时，OpenCode 无法检测并停止该循环。
    - **社区反应**：这是一个严重的逻辑 Bug，会导致资源浪费和会话卡死。
    - **链接**：https://github.com/anomalyco/opencode/issues/12716

7.  **#29059 [FEATURE] 增加动态工作流 (7条评论)**
    - **影响场景**：受 Claude Code 的类似功能启发，用户希望在 OpenCode 中创建项目本地的、可复用的多步骤自动化流程。
    - **社区反应**：该需求获得了 12 个点赞，是社区中呼声很高的功能。
    - **链接**：https://github.com/anomalyco/opencode/issues/29059

8.  **#22233 [FEATURE] 提升子代理运行时可见性 (6条评论)**
    - **影响场景**：当子代理执行任务时，用户无法从 UI 上看到哪个子代理在运行、在做什么、运行了多久。
    - **社区反应**：这是一个高频需求，直接关系到 Agent 工作流的透明度和可控性。
    - **链接**：https://github.com/anomalyco/opencode/issues/22233

9.  **#20067 [FEATURE] 多用户认证与权限管理 (5条评论)**
    - **影响场景**：在企业环境中多人共享一个 OpenCode Web 实例时，需要为每个用户提供独立的 API Key 和权限。
    - **社区反应**：有 12 个点赞，表明企业级部署有此明确需求。
    - **链接**：https://github.com/anomalyco/opencode/issues/20067

10. **#25254 Bug: Doom Loop 检测逻辑缺陷 (3条评论)**
    - **影响场景**：Bug 分析发现，当前的循环检测仅局限于单条消息内，且过滤顺序有误，导致跨消息的无限工具调用循环无法被检测。
    - **社区反应**：是对 #12716 问题的深入技术分析。
    - **链接**：https://github.com/anomalyco/opencode/issues/25254

## 重要 PR 进展

1.  **#31054 支持非交互式 MCP 添加**
    - **功能**：允许通过命令行直接添加 MCP 服务器，支持传递环境变量和 HTTP 头，方便脚本化配置。
    - **链接**：https://github.com/anomalyco/opencode/pull/31054

2.  **#31052 修复 Anthropic 工具历史压缩后的边界问题**
    - **修复**：确保压缩后的对话历史以用户消息开始，避免因结构错误被 Anthropic 拒绝。
    - **链接**：https://github.com/anomalyco/opencode/pull/31052

3.  **#31043 修复子进程输出控制**
    - **修复**：确保 OpenCode 能够正确等待并处理由其启动的子进程的最终输出，避免因进程管理不当导致的问题。
    - **链接**：https://github.com/anomalyco/opencode/pull/31043

4.  **#30091 修复 Schema 错误时的工具调用状态**
    - **修复**：当模型返回 schema 验证错误时，能够正确地将挂起的工具调用标记为错误，避免会话状态混乱。
    - **链接**：https://github.com/anomalyco/opencode/pull/30091

5.  **#29217 增加内联技能调用支持**
    - **功能**：在输入框中通过 `$` 触发技能（Skill）的自动补全，并支持其输入/输出。
    - **链接**：https://github.com/anomalyco/opencode/pull/29217

6.  **#30242 允许选择 Windows 安装目录**
    - **修复**：将 Windows 安装程序改为非静默模式，允许用户自定义安装路径。
    - **链接**：https://github.com/anomalyco/opencode/pull/30242

7.  **#31033 修复 MCP OAuth 重定向 URI 问题**
    - **修复**：将回调地址从 `127.0.0.1` 改为 `localhost`，以解决 AWS WAF 等安全服务引发的认证失败问题。
    - **链接**：https://github.com/anomalyco/opencode/pull/31033

8.  **#31045 修复空文本片段的回放问题**
    - **修复**：当模型仅返回工具调用时，避免在回放会话时插入空的文本片段，导致处理错误。
    - **链接**：https://github.com/anomalyco/opencode/pull/31045

9.  **#29126 在提交时而非流式传输时清除消息**
    - **修复**：优化消息剪裁（Prune）的时机，避免在流式传输过程中因裁剪导致滚动等问题。
    - **链接**：https://github.com/anomalyco/opencode/pull/29126

10. **#31038 V2 读取功能支持媒体文件和二进制安全**
    - **功能**：改进了 V2 版本的 `read` 工具，支持图片等媒体文件的分类读取，并确保正确处理二进制数据。
    - **链接**：https://github.com/anomalyco/opencode/pull/31038

## 功能需求归类

- **子代理可见性**：社区高频需求。用户希望在 TUI 界面底部、输入框或弹窗中看到子代理的运行状态、进度和数量（关联 Issues: #22233, #23784, #22153）。
- **工作流与自动化**：用户希望引入类似 Claude Code 的动态工作流功能，以实现多步骤的自动化任务（关联 Issues: #29059）。
- **图像与多模态支持**：用户反馈在特定模型和自定义提供商（Provider）下，图像读取功能出现回归问题或配置缺乏文档（关联 Issues: #5359, #8875, #9897）。
- **会话与项目管理**：用户希望在 WSL 和 Windows 之间迁移会话、控制会话数量上限、以及能够区分项目内外的会话（关联 Issues: #29799, #31035）。
- **企业级功能**：需求集中在多用户支持、独立的权限管控和 API 凭据管理，以支持团队协作（关联 Issues: #20067）。

## 开发者关注点

- **Doom Loop 检测**：开发者对于 Agent 陷入无限循环的现象表示担忧。虽然已有检测机制，但最新的 Bug 报告（#25254）揭示了其逻辑缺陷，即无法跨消息检测循环。这被认为是需要优先修复的严重问题。
- **UI/UX 交互一致性与稳定性**：从多个 UI 问题（#29992, #29808, #20234）可以看到，用户在 UI 交互、布局和特定环境（WSL）下遇到了各种显示和功能异常，这些高频 Bug 阻碍了流畅使用。
- **进程管理与资源占用**：关于 `opencode` 进程成为孤儿进程（#13001）的讨论，揭示了进程管理和内存占用问题，这在长期运行或通过 Neovim 插件使用时尤为突出，开发者希望得到根本解决。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-06-06

---

## 今日更新概览

- 发布 **v0.17.1-nightly** 版本，主要包含 CLI 复制输出时跳过思维链片段的修复。
- 过去 24 小时内有 **25 个 Issue** 和 **50 个 Pull Request** 获得更新，社区活跃度极高。
- 焦点集中在 **Web-Shell / Daemon 功能补全**（rewind、branch、memory 命令）、**多模态模型支持**（qwen3.7-plus）、**OOM 和内存泄漏问题**，以及 **UI 与配置易用性改进**。

---

## 版本发布

### v0.17.1-nightly.20260606.16c1d9a5a
- **更新内容**：
  - `chore(release): v0.17.1` — 版本号更新及常规发布准备。
  - `fix(cli): skip thought parts in copy output` — 修复 CLI 复制输出时会将模型的思维链（thought）部分也一并复制的问题，确保只复制最终回复内容。
- 链接：https://github.com/QwenLM/qwen-code/releases/tag/v0.17.1-nightly.20260606.16c1d9a5a

---

## 社区热点 Issues

挑选 10 个值得关注的 Issue，覆盖 Bug、Feature Request、性能与配置等维度。

### 1. #4815 — 严重 OOM + Escape 键失效（Bug）
- **摘要**：使用 `qwen --resume` 恢复会话后约 10 分钟内出现 OOM，且 Escape 键 100% 不可用。详细 GC 日志显示内存持续增长。
- **影响**：影响长期会话恢复场景，阻塞正常使用。
- **社区反应**：创建于 2026-06-05，已有 3 条评论，标记为 `priority/P1`。
- 链接：https://github.com/QwenLM/qwen-code/issues/4815

### 2. #4801 — 新增专用 `web_search` 工具（Feature Request）
- **摘要**：当前模型只能通过 `web_fetch` 获取指定 URL 内容，缺少独立的网络搜索工具。用户希望添加类似 Google Search 的搜索能力，使模型能主动搜索。
- **影响**：提升 Agent 场景下信息获取的灵活性。
- **社区反应**：标记 `status/in-review`，3 条评论。
- 链接：https://github.com/QwenLM/qwen-code/issues/4801

### 3. #4802 — qwen3.7-plus 应支持多模态输入（Bug/Feature）
- **摘要**：`qwen3.7-plus` 实际支持图片和视频输入，但模态检测逻辑将其视为纯文本。`defaultModalities()` 中缺少对该模型的显式匹配。
- **影响**：用户无法在 CLI / Daemon 中向该模型传入图片或视频。
- **社区反应**：标记 `welcome-pr`，已有 PR #4803 修复。
- 链接：https://github.com/QwenLM/qwen-code/issues/4802

### 4. #4794 — Compact 模式下工具合并导致全屏闪烁（Bug）
- **摘要**：`Ctrl+O` 开启紧凑模式后，连续工具组被 `mergeCompactToolGroups` 合并，数组长度减少，Ink 重新渲染时触发全屏闪烁。
- **影响**：影响频繁使用工具调用的用户，视觉体验差。
- **社区反应**：创建于 2026-06-05，1 条评论。
- 链接：https://github.com/QwenLM/qwen-code/issues/4794

### 5. #4777 — 延迟工具列表导致每次 MCP 发现都破坏提示缓存（Bug/Performance）
- **摘要**：MCP 工具的“延迟工具”列表被写入缓存的系统提示中。每当 MCP 渐进发现完成或模型通过 `ToolSearch` 揭示工具时，系统提示变化导致缓存失效，增加延迟和 token 消耗。
- **影响**：影响使用 MCP 工具的长会话性能。
- **社区反应**：2 条评论，标记 `performance` 和 `scope/caching`。
- 链接：https://github.com/QwenLM/qwen-code/issues/4777

### 6. #4514 — 跟踪 Daemon HTTP/SSE 功能差距（Tracking Issue）
- **摘要**：系统性地梳理 `qwen serve` 在 Web-Shell 场景下尚未覆盖的 ACP 命令和 HTTP 端点，作为 v0.16-alpha 后的优先级待办清单。
- **影响**：指导后续 Daemon 功能开发方向。
- **社区反应**：12 条评论，贡献者 @doudouOUC 持续更新。
- 链接：https://github.com/QwenLM/qwen-code/issues/4514

### 7. #4814 — UI 应让自定义 Provider 用户更方便地添加新模型（Feature Request）
- **摘要**：首次启动向导对“第三方 Provider”有较好支持（如 OpenRouter），但“自定义 Provider”需手动编辑 JSON 配置，流程不够友好。建议在 UI 内增加模型管理界面。
- **影响**：影响大量自建本地模型（vLLM、Ollama）的用户。
- **社区反应**：1 条评论，`priority/P3`。
- 链接：https://github.com/QwenLM/qwen-code/issues/4814

### 8. #4813 — 多个模型无法共享同一个 `baseUrl`（Bug/Configuration）
- **摘要**：使用 `modelProviders` 配置时，每个模型需单独设置 `baseUrl`，即使指向同一本地 vLLM 端点也无法复用，造成重复配置。
- **影响**：增加用户配置复杂度，容易出错。
- **社区反应**：1 条评论，标记 `scope/settings`。
- 链接：https://github.com/QwenLM/qwen-code/issues/4813

### 9. #4807 — 增加桌面宠物技能（Feature Request）
- **摘要**：建议内置一个 `desktop-pet` 技能，允许用户根据任意角色（F1 车手、动漫角色等）生成像素风桌面宠物，增强趣味性。
- **影响**：社区反响积极，显示 Qwen Code 在“技能”生态上的扩展潜力。
- **社区反应**：1 条评论，`priority/P3`。
- 链接：https://github.com/QwenLM/qwen-code/issues/4807

### 10. #4748 — 优化 Daemon 冷启动延迟（Enhancement）
- **摘要**：基准测试显示 daemon 冷启动（启动 + 首次会话）需 ~2.5s，而 CLI 全初始化仅 ~0.7s。虽然后续会话可复用，但首次体验差距明显。请求优化至 ~1.5s。
- **影响**：改善 Daemon 模式首次响应体验。
- **社区反应**：1 条评论，`category/performance`。
- 链接：https://github.com/QwenLM/qwen-code/issues/4748

---

## 重要 PR 进展

挑选 10 个有代表性的 PR，涵盖 Daemon API、CLI 修复、性能优化、新功能等。

### 1. #4820 — 为 Daemon / Web-Shell 添加 HTTP Rewind 端点
- **功能**：新增 `GET /session/:id/rewind/snapshots` 和 `POST /session/:id/rewind` 端点，允许远程客户端回退会话对话和文件到之前的回合，替代仅限 TUI 的交互式对话框。
- **链接**：https://github.com/QwenLM/qwen-code/pull/4820

### 2. #4812 — 添加会话分支 HTTP 端点
- **功能**：新增 `POST /session/:id/branch` 路由，可将直播会话的 JSONL 转录复制并恢复为新的独立会话，支持远程客户端（Web Shell、IDE 扩展）编程式分支。
- **链接**：https://github.com/QwenLM/qwen-code/pull/4812

### 3. #4819 — 在 ACP 模式下启用 `/remember`、`/forget`、`/dream` 命令
- **功能**：为这三个内存相关命令添加 `supportedModes: ['interactive', 'acp']`，使 Web-Shell 用户可通过 ACP 协议调用记忆管理功能。
- **链接**：https://github.com/QwenLM/qwen-code/pull/4819

### 4. #4798 — 每次用户查询时注入当前日期，防止模型拿到过时时间
- **修复**：在每次 `UserQuery` 中注入当前日期/时间的系统提示，避免长时间会话中模型基于会话开始时间作答，提升时序准确性。
- **链接**：https://github.com/QwenLM/qwen-code/pull/4798

### 5. #4799 — 增加 Web-Shell 开发启动器
- **功能**：新增一条根级开发命令，同时启动本地 Daemon 和 Web-Shell 开发服务器，自动在 URL 中附带 Bearer Token，默认工作区为当前目录。
- **链接**：https://github.com/QwenLM/qwen-code/pull/4799

### 6. #4816 — 为 Web-Shell 添加 `/settings` 命令支持
- **功能**：全栈实现 `/settings` 命令：Daemon API 路由（GET/POST）、SDK 客户端方法、React hooks（useSettings）、事件系统，以及键盘可导航的设置面板。
- **链接**：https://github.com/QwenLM/qwen-code/pull/4816

### 7. #4755 — 修复选择对话框闪烁
- **修复**：约束交互式选择和确认对话框在终端高度受限时保持在可视区域内，避免因内容过长导致选项不可见或闪烁。
- **链接**：https://github.com/QwenLM/qwen-code/pull/4755

### 8. #4793 — 强制转换非字符串工具参数（针对自托管 LLM）
- **修复**：自托管 LLM（LMStudio、sglang、vllm）有时返回数字或布尔值作为工具参数（如 `old_string`），导致 SchemaValidator 拒绝。此 PR 将非字符串参数强制转为字符串。
- **链接**：https://github.com/QwenLM/qwen-code/pull/4793

### 9. #4647 — Linux 下使用平台原生工具修复图片粘贴
- **修复**：替换 `@teddyzhu/clipboard` 原生模块，在 Linux 上使用 `wl-paste` / `xclip` 实现图片粘贴，解决 WSL2+Wayland 环境下的剪贴板问题（关闭 #3517、#2885）。
- **链接**：https://github.com/QwenLM/qwen-code/pull/4647

### 10. #4803 — 为 qwen3.7-plus 增加多模态支持
- **修复**：在 `defaultModalities()` 中添加对 `qwen3.7-plus` 的显式模式匹配，使其正确支持图片和视频输入（配合 issue #4802）。
- **链接**：https://github.com/QwenLM/qwen-code/pull/4803

---

## 功能需求归类

从今日更新的 Issue 中可提取出以下用户反复提及的功能方向：

| 功能方向 | 代表性 Issue | 需求描述 |
|----------|--------------|----------|
| **多模态模型兼容性** | #4802、#4803 | 希望 CLI/Daemon 正确识别并支持 qwen3.7-plus 等模型的图片/视频输入能力 |
| **Daemon / Web-Shell 功能补全** | #4514、#4809、#4819 | 未支持的 slash 命令（如 `/remember`、`/forget`、`/arena` 等）需加入 ACP 或 HTTP 接口 |
| **网络搜索能力** | #4801 | 增加独立 `web_search` 工具，使模型能主动搜索而非仅抓取 URL |
| **UI / UX 易用性** | #4814、#4813 | 自定义 Provider 的模型管理界面、baseUrl 共享、启动引导优化 |
| **性能与内存** | #4815、#4777、#4748 | OOM 修复、MCP 缓存失效、Daemon 冷启动延迟 |
| **技能生态** | #4807 | 增加趣味技能（如 desktop-pet），增强社区定制化体验 |
| **CI / 开发流程** | #4805 | 引入 merge queue 防止过期 CI 检查导致合并错误 |

---

## 开发者关注点

从 Issue 和 PR 的讨论中，社区开发者高频提及以下痛点：

1. **OOM 问题反复出现**：多个 Issue（#4815、#3326、#4167 等）均报告会话长时间运行后因 `structuredClone` 或 `Mark-Compact` 导致内存溢出，且 Escape 键在 OOM 后失效。开发者期待更持久的会话管理机制。
2. **配置模型过于繁琐**：自定义 Provider 用户需手动编辑 JSON，且 baseUrl 无法共享（#4813）；模态检测不够智能（#4802）。社区希望 CLI 或 UI 能提供更便捷的模型管理界面。
3. **工具参数类型冲突**：自托管 LLM 对 JSON 参数的处理不一致（#4791、#4793），导致 `write_file` 和 `edit` 工具 validation 失败，影响日常使用。
4. **UI 闪烁与渲染异常**：Compact 模式工具合并导致全屏闪烁（#4794），选择对话框越界（#4755），影响沉浸式体验。
5. **MCP 与缓存失效**：延迟工具列表写入系统提示导致每次 MCP 发现都破坏 prompt cache（#4777），增加不必要的 token 开销。

---

**说明**：以上内容基于 GitHub 仓库 QwenLM/qwen-code 于 2026-06-06 公开数据整理，仅供社区参考。

</details>