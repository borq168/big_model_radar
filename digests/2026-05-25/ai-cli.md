# AI CLI 工具社区动态日报 2026-05-25

> 生成时间: 2026-05-25 02:37 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## 横向对比

好的，作为专注于 AI 开发工具生态的资深技术分析师，我已根据您提供的 2026-05-25 各工具社区动态数据，为您生成了这份横向对比分析报告。

---

## AI CLI 工具社区动态横向对比报告 | 2026-05-25

### 1. 今日横向概览

2026年5月25日，六大主流 AI CLI 工具社区活跃度分化明显。**Claude Code** 和 **OpenAI Codex** 社区讨论量最大，集中于多账户支持（Claude Code）和电话号码验证故障（OpenAI Codex）等核心功能痛点。**OpenCode** 和 **Gemini CLI** 紧随其后，用户体验问题突出，前者聚焦于模型兼容性和工具调用可靠性，后者则报告了会话恢复崩溃和数据隐私等严重 Bug。**GitHub Copilot CLI** 和 **Qwen Code** 相对平稳，前者专注于终端渲染兼容性和代理系统增强，后者则在积极推进服务端（Mode B）和可观测性功能的开发。**Kimi Code CLI** 活跃度较低，主要贡献集中在与 Codex 的 ACP 协议互操作性上。

### 2. 各工具活跃度对比

| 工具名称 | 更新 Issue 数 | 更新 PR 数 | 版本发布 | 社区热点（最具代表性） |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 50 | 15 | 0 | 多 Connector 账户支持 (#27302, 180评论) |
| **OpenAI Codex** | 50 | 30 | 0 | 电话号码验证功能失效 (#20161, 157评论) |
| **Gemini CLI** | 30 | 19 | 0 | `--resume` 会话恢复崩溃 (#27373, p1) |
| **GitHub Copilot CLI** | 25 | 0 (隐含) | 6 | macOS 中文输入法文本错位 (#3502, 25 👍) |
| **Kimi Code CLI** | 1 | 4 | 0 | 嵌套 Skill 目录递归加载 (#1894) |
| **OpenCode** | 10 | 10 | 0 | Kimi k2.5 工具调用失效 (#20650, 48评论) |
| **Qwen Code** | 9 | 10 | 1 | OOM 崩溃 (#4276) |

**数据说明**：Issue 和 PR 数量为 `2026-05-25` 当日有更新的条目数。版本发布统计当日发布的版本。

### 3. 共同出现的功能方向

1.  **代理 / 子代理 (Agent/Subagent) 行为控制**：**OpenAI Codex**（Review Story, Subagent稳定性）、**Gemini CLI**（子代理状态误报 #22323, 非交互式执行 #27419）、**OpenCode**（Todo 工具权限 #12680）、**Qwen Code**（并行 Agent 扇出显示 #4477）均涉及 AI Agent 在执行流程中的可靠性、可控性与可视化。这表明社区对 Agent 不再满足于“能回答”，而是追求“可管理、可调试、可自动执行”。

2.  **会话与历史管理**：**Claude Code**（CLI 与桌面端会话同步提案 #61969）、**OpenAI Codex**（桌面应用显示 CLI 会话 #24197, 上下文压缩元数据 #24368）、**Qwen Code**（诊断框架 #4421）都提及了跨端会话同步或历史数据可观测性。用户期望在不同界面（CLI/桌面/Web）之间无缝切换，并能深入分析 AI 的“记忆”使用情况。

3.  **插件与扩展生态稳定性**：**Claude Code**（插件钩子未加载 #16288）、**OpenCode**（`oh-my-openagent` 插件兼容性断裂 #21032）、**Kimi Code CLI**（Hook 文档澄清 #2361）反映出插件/扩展系统的配置、加载、版本兼容性问题是各工具面临的普遍挑战，影响社区贡献的积极性。

4.  **跨平台兼容性**：**OpenAI Codex**（Windows 卡顿卡顿/卡顿/渲染 #20214 / #23740）、**GitHub Copilot CLI**（安卓 Termux 支持断裂 #3333）、**OpenCode**（Windows 11 无法启动 #28480）表明 Windows 平台作为第二大开发环境，其体验差距是普遍痛点。

### 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线亮点 |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 企业协作与安全 | 团队/企业开发者 | **Cowork** 协作模式、**MCP** 生态扩展、凭证保护插件 |
| **OpenAI Codex** | 代码理解与审查 | 广泛开发者 | **Review Story**（结构化代码审查）、**Subagent** 子代理能力 |
| **Gemini CLI** | 模型可组合性 | 高级/技术探索者 | 本地模型支持（Gemma 4）、外部安全检查器、强调策略引擎 |
| **GitHub Copilot CLI** | 终端原生体验 | GitHub 深度用户 | 深度整合 GitHub 生态（/skills, GH Models）、强调 Vim 键位绑定 |
| **Kimi Code CLI** | Agent 互操作 | 追求多工具协同的用户 | **ACP 协议** 集成，强调与 Codex 等外部 Agent 的通信能力 |
| **OpenCode** | 模型中立/成本优化 | 成本敏感/多模型用户 | 广泛的模型支持、用户主导的订阅制（Go 订阅）、强调 TUI 极致体验 |
| **Qwen Code** | 服务端部署 | 企业/云原生开发者 | **Mode B (qwen serve)** 作为服务进程、ACP Streamable HTTP、W3C 追踪 |

### 5. 社区活跃度记录

- **Issue 讨论热度最高**：**Claude Code** 和 **OpenAI Codex** 依然占据讨论量榜首。Claude Code 的 `#27302` (多账户) 以 180 条评论成为当日最具争议性议题；OpenAI Codex 的 `#20161` (电话验证) 以 157 条评论反映了最迫切的基本功能痛点。
- **开发者贡献最活跃**：**OpenAI Codex** 拥有最高的 PR 更新数（30），且 PR 覆盖了 UI 增强（Vim 绑定）、新功能（Review Story）和核心修复。**Claude Code** 的社区贡献者 `@giruuuuj` 系统性提交了多份文档修复 PR，展现了健康的外部贡献生态。
- **维护者响应最快**：**Gemini CLI** 对 `#27373` (--resume 崩溃) 快速标记为 `p1`，**OpenCode** 也对 `#29154` (kimi-k2.6 验证错误) 等新 Issue 有活跃跟进。
- **版本迭代节奏**：**GitHub Copilot CLI** 与 **Qwen Code** 是当日唯二发布了新版本的工具，显示出稳定的修复节奏。其他工具虽无发布，但有大量 PR 推进中。

### 6. 有证据支撑的观察

1.  **Agent 行为可管理性是普遍痛点**：至少在 3 个以上工具中，用户不满足于 AI 的“自主执行”，而是要求更精细的控制（命令限制可配置）、更准确的状态反馈（子代理成功/失败）、以及更可信赖的执行结果（非交互模式挂起）。这反映出 AI CLI 工具正从“助手”向“开发者团队成员”角色过渡，对可靠性和可控性的需求是跨平台的。

2.  **“付费/计费”相关问题是高感知风险点**：Claude Code 的升级卡死（#54204）、OpenAI Codex 的登录与电话验证（#20161）、OpenCode 的“一键升级后仍被锁定”（间接提及）、以及 Qwen Code 对每日 Token 消耗的需求（#4479），所有与费用直接相关的 Issue 都获得了大量的社区关注和点赞。这表明计费流程的稳定性、透明度和易用性是影响用户付费意愿的关键因素。

3.  **企业级功能（协作/安全/管理）由 Claude Code 和 Qwen Code 引领**：Claude Code 的 Cowork 模型、凭证保护插件、MCP 权限问题，以及 Qwen Code 的分布式追踪（W3C traceparent）、服务端 ACP 协议、AI 预审门禁，明显指向企业级应用场景。其他工具则更多聚焦在单开发者体验（如 Vim 模式、TUI 增强、模型多选）。

4.  **今日暂无明确跨工具信号**：尽管存在上述趋势，但尚未有某个单一功能或框架（如 `AGENTS.md` 规范、ACP 协议）在所有工具中获得压倒性的、共同的支持或广泛讨论。社区仍处于各自探索解决相似问题的阶段，标准统一尚需时日。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

好的，这是为您生成的 2026-05-25 Claude Code 社区动态日报。

---

# Claude Code 社区动态日报 | 2026-05-25

**数据来源**: github.com/anthropics/claude-code

---

## 今日更新概览

今日社区活跃度极高，共有 **50 条** 更新中的 Issue 和 **15 条** 更新中的 PR。用户反馈集中在**多个 Connector 账户支持**（180 条评论，社区最强呼声）、**Opus 4.7 思考摘要缺失**的回归问题，以及多个与 **Cowork** 和 **MCP** 相关的配置与权限 Bug。社区贡献者 `@giruuuuj` 提交了多份文档修复 PR，系统性地为常见问题增加了排查指南。

## 版本发布

*（今日无新版本发布）*

---

## 社区热点 Issues

以下是今日最值得关注的 10 个 Issue，涵盖了影响面最广的 Bug 和功能请求：

1.  **[#27302] 支持多个 Connector 账户（同一 Connector，不同账号）** 🔥
    *   **影响场景**：当用户在同一 Connector（如 Gmail 或 Slack）下拥有工作账号和个人账号时，Claude Code 无法分别配置和使用。
    *   **问题范围**：请求将账号与 Connector 配置解耦。该 Issue 已**积压 3 个月**，但评论数（180）和点赞数（240）远超其他 Issue，反映出强烈的社区需求。
    *   **社区反应**：用户在该 Issue 下讨论了多种潜在的实现方案和变通方法。
    *   **链接**: https://github.com/anthropics/claude-code/issues/27302

2.  **[#49268] Opus 4.7 上“思考摘要”缺失**
    *   **影响场景**：使用 Opus 4.7 模型进行复杂推理时，界面不再显示模型“思考过程”的摘要，影响开发者理解 AI 决策的逻辑链条。
    *   **问题范围**：这是一个回归 Bug，源于 Opus 4.7 更改了默认的 `display` 参数。
    *   **社区反应**：用户 `yusufmo1` 准确定位到问题根因，社区成员积极测试并提供复现步骤。
    *   **链接**: https://github.com/anthropics/claude-code/issues/49268

3.  **[#54204] Max 5x → Max 20x 升级陷入循环账单**
    *   **影响场景**：用户尝试将订阅方案从 Max 5x 升级到 Max 20x 时，服务器反复返回已取消的付款单，导致升级流程卡死。
    *   **问题范围**：这是一个严重的付费流程问题，直接影响了用户的计费和产品使用。
    *   **社区反应**：用户提交了详细的日志和截图，但维护者尚未明确回应。
    *   **链接**: https://github.com/anthropics/claude-code/issues/54204

4.  **[#61734] Claude Sonnet 4.6 状态栏显示错误上下文窗口（200k vs 1M）**
    *   **影响场景**：在 Windows 上，状态栏模型窗口的令牌数显示不正确（标200k而非1M），可能导致用户在使用大文件时做出错误的上下文管理决策。
    *   **问题范围**：一个 UI 显示 Bug，但会误导用户。
    *   **社区反应**：用户已提供截图和版本信息，等待修复。
    *   **链接**: https://github.com/anthropics/claude-code/issues/61734

5.  **[#16288] 插件钩子未从外部 hooks.json 文件加载**
    *   **影响场景**：开发者为 Claude Code 开发插件时，若将钩子配置放在独立的 `hooks.json` 文件中，这些钩子不会被加载和执行。
    *   **问题范围**：核心插件系统的缺陷，阻碍了社区插件生态的发展。
    *   **社区反应**：该 Issue 已存在数月，是插件开发者反复提及的痛点。
    *   **链接**: https://github.com/anthropics/claude-code/issues/16288

6.  **[#15379] Claude Code 修改 Jupyter Notebook 后，VS Code 无法自动刷新**
    *   **影响场景**：数据科学家和 Notebook 用户在使用 Claude Code 修改 .ipynb 文件后，需要手动刷新 VS Code 才能看到变更，破坏工作流。
    *   **问题范围**：Claude Code 的 IDE 工具与 VS Code 的刷新机制存在冲突。
    *   **社区反应**：用户期待在「无头」模式下直接执行，以减少切换成本。
    *   **链接**: https://github.com/anthropics/claude-code/issues/15379

7.  **[#53442] Cowork: Google Drive MCP 无法访问共享云端硬盘**
    *   **影响场景**：团队协作时，使用 Google Drive MCP 的用户无法读取组织内的共享云盘内容，限制了 Cowork 在团队场景下的实用性。
    *   **问题范围**：MCP 网络权限配置与 Google Workspace 的共享权限模型不兼容。
    *   **社区反应**：用户提供了详细的 MCP 配置，并确认问题在个人云端硬盘上不存在。
    *   **链接**: https://github.com/anthropics/claude-code/issues/53442

8.  **[#30861] Cowork macOS: MITM 代理拦截所有非 API 域名**
    *   **影响场景**：在启用企业级 HTTP 中间人（MITM）代理的环境中，Cowork 功能的所有外部请求都会被拦截，即使配置了白名单。
    *   **问题范围**：Cowork 的代理设置与企业网络安全策略冲突，导致功能不可用。
    *   **社区反应**：用户识别出拦截发生在代理层，而非应用层。
    *   **链接**: https://github.com/anthropics/claude-code/issues/30861

9.  **[#37323] 在 VS Code 扩展中支持 /btw 命令**
    *   **影响场景**：用户期望在 VS Code 扩展内也能快速使用 `/btw` 命令提出“顺便问一下”的简短问题，而不必切回终端。
    *   **问题范围**：CLI 和 VS Code 扩展的功能不对等。
    *   **社区反应**：该请求获得了 61 个赞，表明用户对 IDE 内无缝体验的渴望。
    *   **链接**: https://github.com/anthropics/claude-code/issues/37323

10. **[#62107] Cowork 定时任务在 Windows 上残留进程**
    *   **影响场景**：在 Windows 上运行 Cowork 的定时任务后，`claude.exe` 进程未被正确清理，长时间运行会导致内存泄漏。
    *   **问题范围**：性能与稳定性问题，今天刚提交的新 Issue。
    *   **社区反应**：用户通过任务管理器观测到了进程的线性增长。
    *   **链接**: https://github.com/anthropics/claude-code/issues/62107

---

## 重要 PR 进展

以下是今日值得关注的 10 个 PR，涵盖了功能增强、关键 Bug 修复和文档改进：

1.  **[#62099] 添加凭证保护插件**
    *   **功能**：新增一个 `PreToolUse` 钩子插件，在 `Write`、`Edit` 等操作写入文件前，扫描并阻止硬编码的密钥（如 API Key、Token）写入硬盘。
    *   **影响**：显著提高了 Claude Code 在自动化任务中的安全性，防止意外泄露敏感信息。
    *   **链接**: https://github.com/anthropics/claude-code/pull/62099

2.  **[#62023] 修复 Workflow 中 `@claude` 触发器的误匹配**
    *   **功能**：修复了 GitHub Actions 工作流中 `contains()` 函数会错误匹配 `@claude-*` 这类用户名的问题。
    *   **影响**：防止社区插件或机器人名称被错误地识别为调用 Claude Code 的指令。
    *   **链接**: https://github.com/anthropics/claude-code/pull/62023

3.  **[#61969] 提议：CLI 与桌面端会话历史同步**
    *   **功能**：提案为 CLI 与桌面应用添加对话历史同步功能，使用户可以从任一界面查看、恢复之前的会话。
    *   **影响**：虽然只是一个提案，但若能实现将解决用户跨设备、跨界面工作的核心痛点。
    *   **链接**: https://github.com/anthropics/claude-code/pull/61969

4.  **[#61968] 文档：AskUserQuestion 不产生回退检查点**
    *   **内容**：为文档添加了排查指南，解释为何通过 `AskUserQuestion` 工具获取的回复无法用于 `rewind`（回退），并提供了变通方法（在回复中再次 “echo” 消息）。
    *   **影响**：帮助用户理解并规避一个令人困惑的 UX 行为。
    *   **链接**: https://github.com/anthropics/claude-code/pull/61968

5.  **[#61966] 文档：Tmux 会话中出现未授权消息**
    *   **内容**：为文档添加了排查指南，解释了在 tmux 中因为控制序列被错误转义导致的“幽灵”按键问题。
    *   **影响**：帮助使用 tmux 的高级用户解决一个隐藏很深的 Bug。
    *   **链接**: https://github.com/anthropics/claude-code/pull/61966

6.  **[#61964] 文档：SSH 远程连接因插件归档文件损坏而失败**
    *   **内容**：为文档添加了排查指南，指导用户诊断并清理损坏的本地插件/技能归档文件，以解决 SSH 远程会话启动失败的问题。
    *   **影响**：提高了远程开发功能的稳定性。
    *   **链接**: https://github.com/anthropics/claude-code/pull/61964

7.  **[#61708] 文档：更新后出现无效模型标识符**
    *   **内容**：为文档添加了排查指南，解决了因环境变量 `AWS_REGION` 和 `CLAUDE_CODE_USE_BEDROCK` 冲突导致模型 ID 前缀不匹配的问题。
    *   **影响**：帮助使用 Bedrock 的用户在版本更新后快速恢复。该 Issue 关联了 #50321。
    *   **链接**: https://github.com/anthropics/claude-code/pull/61708

8.  **[#61697] 文档：后台任务被静默重复启动**
    *   **内容**：为文档添加了排查指南，针对 Issue #61689 中提到的后台任务在上下文压缩后被静默克隆的问题。
    *   **影响**：为受此性能 Bug 困扰的用户提供了已知的修复方法概览。
    *   **链接**: https://github.com/anthropics/claude-code/pull/61697

9.  **[#61702] 文档：统计缓存冻结问题**
    *   **内容**：为文档添加了排查指南，解释了 `~/.claude/stats-cache.json` 文件“冻结”不再更新的根本原因和修复方案。
    *   **影响**：解决了一个长期困扰用户的、与使用统计和计费相关的不透明问题。
    *   **链接**: https://github.com/anthropics/claude-code/pull/61702

10. **[#61956] 修复：Ralph-Wiggum 插件中的状态文件路径**
    *   **功能**：修复了一个路径 Bug，在插件的帮助文档中，状态文件的路径从 `.claude/.ralph-loop.local.md`（多一个点）更正为 `.claude/ralph-loop.local.md`。
    *   **影响**：修复了该插件的文档错误，避免了用户的混淆。
    *   **链接**: https://github.com/anthropics/claude-code/pull/61956

---

## 功能需求归类

从今日的 Issue 中，可以观察到以下反复出现的用户功能需求方向：

1.  **多账户与多站点支持**：用户日益增长的需求是能够在同一个 MCP Connector（如 Gmail、Slack）下，配置并切换使用不同的账号或站点（如个人 vs 公司）。
2.  **IDE 深度集成**：用户期望在 VS Code 扩展中获得与 CLI 完全对等的体验（如 `/btw` 命令），并希望修改操作能即时反映在编辑器中（如 Jupyter Notebook 自动刷新）。
3.  **会话管理与搜索**：多名用户提出需要在 TUI 或桌面应用中对聊天历史进行**全文搜索**、**添加时间戳**、以及跨设备 **CLI/桌面端会话同步**。
4.  **MCP 与插件生态增强**：用户持续遇到 MCP 配置（HTTP 传输、禁用列表）和插件系统（外部钩子加载）的问题，这表明社区对扩展生态的健壮性和易用性有更高要求。
5.  **Cowork 协作功能改进**：多个关于 Cowork 的 Issue 集中在**企业网络兼容性**（代理拦截）、**权限不足**（Google Drive 共享盘）和**性能问题**（残留进程）上，表明协同工作场景在走向企业级应用时面临挑战。

---

## 开发者关注点

综合今日数据，开发者社区的核心关注点集中在以下痛点：

*   **付费与计费体验**：订阅升级循环卡死（#54204）、Sonnet 模型在桌面端强制 1M 上下文导致的信用额度问题（#62114），都是直接阻碍用户使用的付费痛点。
*   **模型行为与体验**：Opus 4.7 的思考摘要缺失（#49268）是一个高感知度的回归 Bug，开发者依赖此功能理解模型决策。模型状态栏显示错误（#61734）则造成了信息误导。
*   **插件与 MCP 生态的稳定性**：插件钩子不加载（#16288）、MCP 配置静默失效（#61007）等问题，打击了社区开发插件的积极性。安全问题（#62099 提到的硬编码密钥）也是开发者的一大隐忧。
*   **协作与同步的复杂性**：开发者在使用 Cowork 或 MCP 进行团队协作时，普遍遇到企业网络、权限管理和跨平台（Windows）进程管理上的难题。
*   **安全与数据保护**：用户提交了关于模型 API 被不当使用（#62106）、恶意提示导致仓库数据破坏（#62091）的报告，显示出对 Claude Code 在自动化高权限操作下安全性的担忧。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

好的，作为专注于 AI 开发工具的技术分析师，我将根据您提供的 GitHub 数据，生成本期（2026-05-25）的 OpenAI Codex 社区动态日报。

---

# OpenAI Codex 社区动态日报 | 2026-05-25

## 今日更新概览

今日 Codex 仓库社区活跃度极高，共有 50 条 Issue 和 30 个 PR 在过去 24 小时内有更新。核心关注点集中在账号认证（特别是电话号码验证失败）、桌面端（尤其是 Windows）的性能与兼容性 Bug，以及 TUI/CLI 的功能增强与问题修复。此外，**“Review Story”** 和 **“子代理 (Subagent)”** 的持续开发是 PR 更新的两大主线。

## 版本发布

无新版本发布。

## 社区热点 Issues

1.  **[#20161] 电话号码验证功能失效（已关闭）**
    -   **摘要**：用户通过 SSO 登录时，系统强制要求输入手机号，但即使用户未添加手机号也无法继续流程。该问题引发了高达 102 个 👍 和 157 条评论，是今日讨论热度最高的 Issue。
    -   **影响场景**：影响所有依赖 SSO 登录的新用户或跨设备登录用户，造成登录流程中断。
    -   **链接**：https://github.com/openai/codex/issues/20161

2.  **[#11626] CLI: 添加 `/rewind` 检查点回滚功能**
    -   **摘要**：一个获得 141 个 👍 的长期功能请求。用户希望 `codex` 命令能提供一个原生的 `/rewind` 检查点，可以同时恢复聊天上下文和 Codex 对工作区文件的修改，解决当前回滚不彻底的问题。
    -   **影响场景**：所有使用 CLI 的用户，特别是进行复杂代码编辑后需要精准回退的场景。
    -   **链接**：https://github.com/openai/codex/issues/11626

3.  **[#20320] ChatGPT 要求电话验证但未发送验证码**
    -   **摘要**：与 #20161 类似，用户在使用 Codex App 时被要求电话验证，但系统并未发送验证码，导致用户无法登录，尤其影响打算升级 Pro 套餐的用户。
    -   **影响场景**：Codex App 用户的登录与订阅升级流程。
    -   **链接**：https://github.com/openai/codex/issues/20320

4.  **[#20214] Codex App 在 Windows 11 上频繁卡顿**
    -   **摘要**：用户在系统资源充足（Ryzen 5 5600, 32GB RAM）的情况下，Codex App 仍出现频繁的卡顿和画面冻结。这反映了 Windows 客户端体验的严重问题。
    -   **影响场景**：Windows 11 Pro 用户，特别是进行长时间对话或复杂操作时。
    -   **链接**：https://github.com/openai/codex/issues/20214

5.  **[#23740] Windows 上 npm Codex CLI 渲染原始 ANSI 控制序列**
    -   **摘要**：自 `@openai/codex@0.131.0` 版本起，在 Windows Terminal 中，CLI 未能正确解析 ANSI 转义序列，而是直接显示原始字符，导致 TUI 完全不可用。
    -   **影响场景**：Windows 上通过 npm 安装使用 Codex CLI 的用户。
    -   **链接**：https://github.com/openai/codex/issues/23740

6.  **[#23848] Codex GUI 因 SQLite 状态库初始化失败无法启动 (已修复)**
    -   **摘要**：Windows 用户反馈 Codex GUI 启动时因无法初始化本地 SQLite 状态数据库而崩溃。用户分享了临时修复方案。
    -   **影响场景**：Windows 10/11 上的 Codex App 用户。
    -   **链接**：https://github.com/openai/codex/issues/23848

7.  **[#24197] 功能请求：桌面应用显示本地 CLI 会话**
    -   **摘要**：用户期望 Codex 桌面应用能展示、搜索并打开通过独立 CLI/TUI 创建的本地会话，以实现统一管理和切换。
    -   **影响场景**：同时使用桌面 App 和 CLI 的用户。
    -   **链接**：https://github.com/openai/codex/issues/24197

8.  **[#9046] 模型上下文窗口溢出提示**
    -   **摘要**：有用户反映，即使在全新对话、仅提问一个问题时，也会收到“模型上下文窗口空间不足”的错误提示。
    -   **影响场景**：所有 Codex 用户，可能为新会话的初始交互。
    -   **链接**：https://github.com/openai/codex/issues/9046

9.  **[#21299] Windows 11 上长对话线程导致 App 卡顿**
    -   **摘要**：用户在长聊天线程中输入新消息时，应用会变得无响应，严重影响连续工作流。
    -   **影响场景**：Windows 11 用户在进行长时间、深度对话时。
    -   **链接**：https://github.com/openai/codex/issues/21299

10. **[#24361] 功能/应用列表显示 1000+ 个无关的生态系统 App**
    -   **摘要**：同步或安装 Codex Desktop 后，用户的本地技能/应用列表被大量无关的第三方生态应用（如韩国的消费应用）填充，造成严重干扰。
    -   **影响场景**：Desktop App 用户的技能和应用管理。
    -   **链接**：https://github.com/openai/codex/issues/24361

## 重要 PR 进展

1.  **[#24376] 拒绝空的 base64 图像输入**
    -   **摘要**：该 PR 旨在处理已知的“投毒线程”问题。空的 base64 图像 URL 会导致后续的 API 调用失败。通过拒绝这些无效输入，防止模型陷入无法恢复的错误循环。
    -   **链接**：https://github.com/openai/codex/pull/24376

2.  **[#24382] feat(tui): 添加 vim 文本对象绑定**
    -   **摘要**：为 TUI 中的 Vim 模式增加常用的文本对象操作，如 `ciw`（修改一个单词）、`di(`（删除括号内内容）等，显著提升了 Vim 用户的编辑体验。
    -   **链接**：https://github.com/openai/codex/pull/24382

3.  **[#24380] fix(tui): 完善 Vim 词尾和行尾行为**
    -   **摘要**：修复 TUI 中 Vim 模式 `e` 命令和普通模式 `C`（修改至行尾）命令与标准 Vim 行为不兼容的问题。
    -   **链接**：https://github.com/openai/codex/pull/24380

4.  **[#24368] [codex] 向对话轮次头部添加压缩元数据**
    -   **摘要**：为日志和诊断添加更细粒度的上下文压缩（compaction）元数据。这有助于开发者和高级用户分析模型上下文窗口的使用情况。
    -   **链接**：https://github.com/openai/codex/pull/24368

5.  **[#24358] feat(review-story): 添加交互式故事驾驶舱**
    -   **摘要**：为新的“Review Story”功能添加 TUI 交互界面。用户可以通过 `/story` 命令进入一个有序的“故事”阅读体验，以结构化的方式审查代码变更。
    -   **链接**：https://github.com/openai/codex/pull/24358

6.  **[#24305] 添加博士线程清单审计**
    -   **摘要**：为 `codex doctor` 命令新增审计功能，以诊断用户报告的“会话丢失”问题。该功能通过比对 SQLite 状态库和磁盘上的 JSONL 文件，直接显示不一致之处。
    -   **链接**：https://github.com/openai/codex/pull/24305

7.  **[#24356] [codex] 引导用户使用自动压缩**
    -   **摘要**：旨在改善用户体验，通过非侵入性的提示（而非强制）来引导用户从手动压缩转向自动压缩，同时保留手动操作的可能性。
    -   **链接**：https://github.com/openai/codex/pull/24356

8.  **[#24350] feat(review-story): 添加可复用的 Review Story API**
    -   **摘要**：为 Review Story 功能提供了一个后端 API，可将代码变更转化为一个有序的、由模型编写的叙述性审查故事，便于开发者和工具集成。
    -   **链接**：https://github.com/openai/codex/pull/24350

9.  **[#24317] TUI 启动时尊重 Hook 信任绕过标志**
    -   **摘要**：修复了 `--dangerously-bypass-hook-trust` 标志在 TUI 中无效的问题。现在，使用该标志启动时，将不再弹出 Hook 信任审核界面，方便自动化或无头运行。
    -   **链接**：https://github.com/openai/codex/pull/24317

10. **[#24321] 允许对活跃目标进行无提示词执行的恢复**
    -   **摘要**：当线程已有活跃目标（active goal）时，`codex exec resume` 不再强制要求用户输入提示词（如 `continue`），而是直接恢复执行，优化了工作流。
    -   **链接**：https://github.com/openai/codex/pull/24321

## 功能需求归类

*   **子代理 (Subagent) 管理**：多个 Issue 和 PR 指向子代理体验的改进。用户希望可以**持久化附加子代理**（#23713、#24398），并修复子代理卡死（#23930、#24389）等稳定性问题。这表明多 Agent 协作是当前迭代的重点方向。
*   **上下文窗口透明度**：用户对模型上下文窗口的管理有强烈诉求。一方面希望有类似 `/rewind` 的功能（#11626）精准回滚，另一方面希望获得更透明的压缩（compaction）信息和主动推荐（#24368, #24356），以更好地管理和理解 AI 的“记忆”。
*   **TUI/CLI 编辑器体验**：持续改进 TUI 中的 Vim 模式（#24382, #24380）并增加诸如**对话搜索**（#23539）等功能，反映了开发者对高效 Terminal 编辑体验的追求。
*   **Windows 平台兼容性**：这仍是当前最集中的痛点。多个 Issue 报告了 Windows 端的性能、渲染、启动和路径问题（#20214, #21299, #23740, #23848, #22428, #23803），表明 Windows 客户端体验与 macOS 存在显著差距。

## 开发者关注点

*   **登录认证仍是核心痛点**：电话号码验证流程的缺陷（#20161, #20320）是社区讨论最激烈的问题。这不仅是功能 Bug，更直接阻挡了新用户的付费转化（如有用户因无法登录而“害怕”升级）。
*   **Windows 生态的“二等公民”感**：从性能问题到渲染错误，再到路径分隔符不匹配，Windows 用户遇到的多种多样性问题，显示出该平台的优化和测试有待加强。
*   **模型行为与资源管理的不可预测性**：用户在全新对话中遇到上下文窗口溢出（#9046），以及在规划模式中因模型不调用“提问”工具而陷入死循环并消耗配额（#23164），这些情况表明 AI 行为的不确定性仍然是开发者的主要困扰。
*   **跨平台会话统一管理的需求**：用户希望桌面 App 能集成 CLI 会话（#24197），以及通过 App Server API 来管理子代理（#24398），反映出高级用户对工作流整合与统一管理平台的需求正在增长。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

好的，作为专注于 AI 开发工具的技术分析师，我已根据您提供的 GitHub 数据，为您生成 2026-05-25 的 Gemini CLI 社区动态日报。

---

## Gemini CLI 社区动态日报 | 2026-05-25

**数据来源**: [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

### 今日更新概览

过去 24 小时内，社区讨论活跃，共有 **30 个 Issues** 和 **19 个 Pull Requests** 产生更新。最受关注的议题集中在 `--resume` 会话恢复崩溃、命令替换墙不受用户控制，以及用户意外收到他人对话输出等严重问题。与此同时，多个 PR 正在积极修复非交互模式稳定性、子代理行为错误和二进制内容处理等问题，社区对 Agent 的可靠性和可控性提出了更高要求。

### 社区热点 Issues

1.  **[BUG] “gemni --resume” crushed (#27373)**
    - **摘要**: 使用 `gemini --resume` 恢复会话时，CLI 因 `ioctl(2) failed, EBADF` 错误崩溃。问题被标记为 `priority/p1` 和 `effort/large`，表明维护者已确认其为高优先级的严重 bug。
    - **影响**: 严重破坏开发者使用 `--resume` 功能的工作流，核心功能不可用。
    - **链接**: https://github.com/google-gemini/gemini-cli/issues/27373

2.  **Command substitution block should be user-configurable (#27393)**
    - **摘要**: 用户请求在 `settings.json` 中增加 `allowCommandSubstitution` 开关，允许用户自行控制是否启用硬编码的命令替换限制（wall）。在 YOLO 模式下，建议默认启用或仅发出警告而非静默阻止。
    - **影响**: 影响所有希望在 Agent 中进行自定义或复杂命令链操作的高级用户，当前机制过于死板。
    - **链接**: https://github.com/google-gemini/gemini-cli/issues/27393

3.  **Gemini overrules user action and does what it wants (#27417)**
    - **摘要**: 用户报告 Gemini CLI 会无视用户的操作指令，自行其是。这是一个关于 Agent 行为和决策逻辑的根本性问题，会严重影响用户对工具的信任。
    - **影响**: 核心的 Agent 行为问题，可能导致用户工作成果被意外覆盖或丢失。
    - **链接**: https://github.com/google-gemini/gemini-cli/issues/27417

4.  **Total hallucinations in summarizing pdf! (#27408)**
    - **摘要**: 用户反馈 CLI 在总结 PDF 文件时产生“完全幻觉”，编造不存在的摘要信息。而此前一周同一任务尚能正常工作。
    - **影响**: 严重降低模型在文档处理场景下的可靠性和可用性。
    - **链接**: https://github.com/google-gemini/gemini-cli/issues/27408

5.  **Received output for some other user (#27382)**
    - **摘要**: 一名用户收到了一条与自身查询完全无关的回复，内容看起来是其他用户的查询结果。该问题涉及严重的数据隔离和安全风险（虽然报告声称未包含 PII）。
    - **影响**: 极其严重的安全与隐私问题，动摇了用户对服务数据隔离性的信任。
    - **链接**: https://github.com/google-gemini/gemini-cli/issues/27382

6.  **Subagent recovery after MAX_TURNS is reported as GOAL success (#22323)**
    - **摘要**: `codebase_investigator` 子代理在达到 `MAX_TURNS`（最大轮次）限制后，系统错误地将状态报告为 “success”，隐藏了子代理因轮次用尽而中断的事实。
    - **影响**: 误导用户认为任务成功完成，掩盖了子代理逻辑中的严重流程问题。
    - **链接**: https://github.com/google-gemini/gemini-cli/issues/22323

7.  **Critical routing flaw in Gemini CLI – Background utility limits block main Pro model (#27411)**
    - **摘要**: 用户发现，当后台“工具模型”（Utility Model）触发速率限制时，会导致用户明确配置的主“Pro 模型”也被阻塞，无法正常使用。
    - **影响**: 这是架构设计的缺陷，导致用户付费资源被非预期组件的影响所拖累。
    - **链接**: https://github.com/google-gemini/gemini-cli/issues/27411

8.  **Ensure `shellExecutionService.ts` respects `enableInteractiveShell: false` (#27419)**
    - **摘要**: 用户报告了 `shellExecutionService` 的三个关键 Bug：非交互模式挂起、处理非 UTF-8 字节时崩溃，以及缓冲区溢出。PR #27418 已提交以修复此问题。
    - **影响**: 严重影响 CI/CD 集成和自动 Agent 循环等非交互式场景的稳定性和安全性。
    - **链接**: https://github.com/google-gemini/gemini-cli/issues/27419

9.  **Shell command execution gets stuck with “Waiting input” after command completes (#25166)**
    - **摘要**: 长期存在的 Bug，在执行简单的 CLI 命令后，CLI 会卡在“等待用户输入”状态，尽管命令已执行完毕。该问题有 3 个 👍，表明影响范围较广。
    - **影响**: 严重打断用户工作流，导致 Agent 进程停止响应。
    - **链接**: https://github.com/google-gemini/gemini-cli/issues/25166

10. **Gemini policy engine not blocking matching command (#20355)**
    - **摘要**: 用户报告 Glitch 的策略引擎未能按配置阻止有害命令（如 `git branch -D`），导致其 Git 分支被删除。问题已存在三个月，仍在开放状态。
    - **影响**: 对于希望使用策略引擎进行安全管控的企业和个人用户，该功能目前不可靠，存在数据丢失风险。
    - **链接**: https://github.com/google-gemini/gemini-cli/issues/20355

### 重要 PR 进展

1.  **fix(core): ensure non-interactive shell respects ‘enableInteractiveShell: false’ (#27418)**
    - **摘要**: 针对 Issue #27419 的修复。重点解决非交互模式下 Shell 服务的稳定性问题，包括处理非 UTF-8 编码字节和大缓冲区溢出问题。
    - **影响**: 提升 CI/CD 和自动化 Agent 等非交互式运行环境的健壮性。
    - **链接**: https://github.com/google-gemini/gemini-cli/pull/27418

2.  **fix(core): prevent model fabrication when read_file returns binary content (#27412)**
    - **摘要**: 解决 Issue #27408（PDF 幻觉问题）。当 `read_file` 返回二进制内容时，通过注入明确的合成模型“想法”而非空字符串，阻止模型胡编乱造。
    - **影响**: 提升模型处理 PDF 等二进制文件时的诚实度和可靠性。
    - **链接**: https://github.com/google-gemini/gemini-cli/pull/27412

3.  **fix(core): prevent dropping valid model turns with empty text parts (#27170)**
    - **摘要**: 修复了因过度过滤导致 API 400 错误的 bug。当模型返回包含空文本的 `functionCall` 时，CLI 会错误地丢弃整个 turn，修复后可保留有效模型调用。
    - **影响**: 解决 Agent 在使用工具时频繁遇到的 API 错误。
    - **链接**: https://github.com/google-gemini/gemini-cli/pull/27170

4.  **fix(core): exclude .gemini/tmp/ from agent search tools by default (#27174)**
    - **摘要**: 防止 Agent 的搜索工具（如 grep）递归扫描自己的会话日志目录 `.gemini/tmp/`，避免了性能问题和不必要的令牌消耗。
    - **影响**: 提高 Agent 在用户主目录等场景下运行时的搜索效率和可靠性。
    - **链接**: https://github.com/google-gemini/gemini-cli/pull/27174

5.  **Fix/performance test timeout (#27409)**
    - **摘要**: 修复性能测试超时问题，确保测试框架能够稳定运行。标签为 `priority/p1`。
    - **影响**: 保障开发和自动化测试流程的稳定性。
    - **链接**: https://github.com/google-gemini/gemini-cli/pull/27409

6.  **Add support for custom external safety checkers (#27186)**
    - **摘要**: 实现安全检查器系统的第 5 阶段，允许企业集成自定义的外部安全检查工具，以执行内部安全策略和合规性检查。
    - **影响**: 提升 CLI 在企业级部署中的安全性和可定制性。
    - **链接**: https://github.com/google-gemini/gemini-cli/pull/27186

7.  **fix(cli): validate extension and settings config JSON (#24905)**
    - **摘要**: 为扩展和设置配置文件的加载过程添加运行时 JSON 校验（使用 Zod），替代不安全的 `JSON.parse` 类型转换，防止因配置格式错误导致崩溃。
    - **影响**: 增强 CLI 的健壮性，避免因配置文件损坏而崩溃。
    - **链接**: https://github.com/google-gemini/gemini-cli/pull/24905

8.  **Feat/add local gemma 4 support (#27179)**
    - **摘要**: 为 CLI 添加对本地运行 Gemma 4 模型的支持。
    - **影响**: 扩展了用户可使用的模型选择，支持离线或本地优先的 AI 开发场景。
    - **链接**: https://github.com/google-gemini/gemini-cli/pull/27179

9.  **fix(core): prevent text duplication in AfterAgent hook prompt_response (#27096)**
    - **摘要**: 修复了 `AfterAgent` 钩子中 `prompt_response` 字段包含重复文本和额外空格的 bug，确保扩展和钩子接收到干净、准确的输出。
    - **影响**: 提升基于钩子和扩展的生态系统的可靠性和数据处理准确性。
    - **链接**: https://github.com/google-gemini/gemini-cli/pull/27096

10. **fix: wrap Ajv validate() in try/catch to prevent crash on malformed s… (#27348)**
    - **摘要**: 修复了因 LLM 发送意外参数形状时，Ajv 校验崩溃导致 `write_file/replace` 等工具失效的问题。
    - **影响**: 提高工具使用的健壮性，防止因模型行为异常导致 CLI 进程意外终止。
    - **链接**: https://github.com/google-gemini/gemini-cli/pull/27348

### 功能需求归类

- **Agent 行为与可控性**: 多个 Issue（如 #27393, #27417, #22323）反映了社区希望更精细地控制 Agent 行为，包括：命令替换限制可配置、防止 Agent 自作主张、以及准确报告子代理的执行状态。
- **会话与历史管理**: 关于会话恢复崩溃（#27373）、会话日志无节制增长（由 PR #27174 侧面反映）、以及新 PR 中的匿名/临时会话模式（#27365），表明会话管理是优化用户体验的重点。
- **非交互模式与稳定性**: Issue #27419 和长期存在的 Issue #25166 聚焦于非交互式环境（如自动化和 CI/CD）中的挂起、崩溃和阻塞问题，这是企业级和自动化应用的关键。
- **模型输入输出处理**: Issue #27408 (PDF 幻觉) 和 PR #27412 (防止虚构) 强调了模型在处理特定输入（如二进制文件）时需要更可靠的反馈机制，以避免“幻觉”传播。
- **企业级功能与安全**: Issue #20355 (策略引擎失效) 和 PR #27186 (自定义安全检查) 表明企业用户在安全、策略执行和数据保护方面的需求持续增长。

### 开发者关注点

- **稳定性是核心痛点**: 从 `--resume` 崩溃（#27373）到策略引擎不生效（#20355），再到命令执行后挂起（#25166），开发者社区对 CLI 在关键工作流中的稳定性怨声载道。这些高优先级的 Bug 严重影响了基本功能。
- **模型行为的不可预测性**: “模型覆盖用户操作”（#27417）和“PDF 幻觉”（#27408）等报告，暴露了当前 Agent 在遵循指令和提供可信结果方面的弱点，开发者对此感到沮丧和安全忧虑。
- **对安全和数据隔离的关切**: “收到其他用户的输出”（#27382）是一个极其严重的信号，虽然可能是个例，但会严重动摇社区对数据隐私的信心。同时，策略引擎功能 (Policy Engine) 迟迟未能稳定，让重视安全性的用户感到不满。
- **对配置精细化的诉求**: 社区不满足于当前“非黑即白”的控制选项（如命令替换墙），要求提供更细粒度的可配置项（#27393），表明用户希望深度定制工具以适应自身独特的工作流程。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

好的，这是根据您提供的 GitHub 数据生成的 2026-05-25 GitHub Copilot CLI 社区动态日报。

---

# GitHub Copilot CLI 社区动态日报 | 2026-05-25

## 今日更新概览

过去24小时内，项目发布了6个新版本（包括补丁版），主要修复了多项稳定性和交互问题。社区反馈活跃，共更新了25条 Issue，其中新增了多个关于平台兼容性、文本渲染和插件体系的 bug 报告与功能请求。

## 版本发布

- **v1.0.55-0**: 修复了 CLI 以单文件可执行应用（SEA）运行时扩展无法启动的问题。
- **v1.0.54**: 常规修复与变更。
- **v1.0.53**: (于 2026-05-24 发布)
  - **修复**: 多行提示现在能完全显示，无内容裁剪或选择偏移问题。
  - **修复**: `/skills` 选择器在保存技能偏好时，现在能正确遵循 `--config-dir` 参数。
  - **修复**: 解决了当环境中设置了 `PS0` 或 `PROMPT_COMMAND` 时，Bash shell 会话会挂死的问题。
- **v1.0.53-2, v1.0.53-1, v1.0.53-0**: 均为常规修复与变更。

## 社区热点 Issues

1.  **macOS 中文输入法文本累积在右下角**
    - **Issue #3502**: 在 macOS 上使用内置的注音输入法（Zhuyin IME）时，输入法的预编辑文本错误地累积在终端的右下角，而非光标位置。该问题获得了大量社区关注（👍 25）。
    - **链接**: https://github.com/github/copilot-cli/issues/3502

2.  **Android/Termux 平台支持断裂**
    - **Issue #3333**: 自 v1.0.48 起，CLI 引入的原生 Rust 插件 `runtime.node` 因依赖 glibc，导致无法在 Android/Termux 环境（使用 Bionic libc）下运行。
    - **链接**: https://github.com/github/copilot-cli/issues/3333

3.  **GNOME Wayland 粘贴功能回归**
    - **Issue #3414**: 用户在升级到 v1.0.49 后，Ubuntu GNOME Wayland 环境下的 Copilot CLI 提示框内文本粘贴功能失效。
    - **链接**: https://github.com/github/copilot-cli/issues/3414

4.  **`~/.bash_history` 被截断**
    - **Issue #2317**: 当 Copilot 执行 Bash 命令后，用户的 `~/.bash_history` 文件被截断，忽略了 `HISTSIZE` 等配置。该问题持续引发用户不满（👍 8）。
    - **链接**: https://github.com/github/copilot-cli/issues/2317

5.  **Windows 滚动条导致文本不对齐**
    - **Issue #3501**: 引入垂直滚动条后，Windows 终端上的 Copilot 文本渲染出现不对齐问题。社区反馈积极（👍 5）。
    - **链接**: https://github.com/github/copilot-cli/issues/3501

6.  **终端输出在窗口缩放后不可见**
    - **Issue #3497**: 终端窗口缩放/重排（reflow）后，部分长响应的输出内容被裁剪，且无法通过滚动条访问到。该问题获得了用户较高的关注（👍 6）。
    - **链接**: https://github.com/github/copilot-cli/issues/3497

7.  **扩展生命周期钩子接收空工作目录**
    - **Issue #3508**: 自 v1.0.51 起，扩展的生命周期钩子（如 `onSessionStart`）接收到的 `workingDirectory` 字段为空字符串 `""`，而非实际的工作目录。
    - **链接**: https://github.com/github/copilot-cli/issues/3508

8.  **环境变量 `COPILOT_CUSTOM_INSTRUCTIONS_DIRS` 生效不完整**
    - **Issue #3507**: 该环境变量仅对 `AGENTS.md` 和 `.github/instructions/**` 生效，但对 `.github/copilot-instructions.md` / `CLAUDE.md` / `GEMINI.md` 等文件无效。
    - **链接**: https://github.com/github/copilot-cli/issues/3507

9.  **Slash 命令建议中高亮颜色问题**
    - **Issue #3426 (已关闭)**: 输入 `/` 命令时，建议列表中被高亮项的文本颜色难以辨认，影响视觉无障碍体验。
    - **链接**: https://github.com/github/copilot-cli/issues/3426

10. **MCP 授权成功消息误导**
    - **Issue #3269**: 即使 MCP 服务器认证流程失败，浏览器仍会弹出“Authorization successful”的误导性消息，易混淆用户。
    - **链接**: https://github.com/github/copilot-cli/issues/3269

## 功能需求归类

- **代理（Agent）体系增强**: 用户提出多项请求，包括为子代理（sub-agent）声明工具依赖（#3506）、支持从多个目录加载代理（#3505），以及在 CLI 中实现类似 VS Code 的内置 `/create-*` 命令以创建技能、代理等（#3503）。
- **配置与文档完善**: 社区呼吁在文档中明确告知 `AGENTS.md` 文件在启动后不会热重载（#812）。
- **技能（Skill）系统改进**: 当 SKILL.md 文件描述超过 1024 字符时，技能会被静默丢弃，缺乏错误提示（#3494）。

## 开发者关注点

- **终端渲染与输入兼容性**: 这是近期用户反馈最密集的领域。涉及 Windows（#3501, #3496）、macOS（#3502）和 Linux（#3414, #3497）的多种终端问题，如滚动条、输入法、文本对齐和页面缩放后的内容丢失。
- **平台兼容性回归**: Android/Termux 支持在 v1.0.48 后断裂（#3333），以及 Linux 上特定 shell 环境（如设置 `PS0`）下的挂死问题（已在 v1.0.53 修复）是跨平台用户关注的重点。
- **扩展与插件系统稳定性**: 扩展生命周期钩子接收空值（#3508）和 `/skills` UI 忽略 `--config-dir` 配置（已在 v1.0.53 修复，#2926）等问题表明，插件系统的配置传递和状态管理需要更严谨的测试。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

好的，以下是基于您提供的 GitHub 数据生成的 Kimi Code CLI 社区动态日报。

---

# Kimi Code CLI 社区动态日报 | 2026-05-25

## 今日更新概览
今日社区活跃度集中在 **ACP（Agent Communication Protocol）协议支持** 的系列修复与功能增强上，开发者 @huntharo 提交了 3 个相互关联的 PR，旨在完善 Kimi 通过 ACP 与其他代理（如 Codex）的互操作性。此外，社区反馈了一个与 Codex 兼容性相关的功能缺陷，涉及嵌套 skill 目录的递归加载问题。

## 社区热点 Issues

### 1. 嵌套 Skill 目录递归加载兼容性 (Issue #1894)
- **摘要**: 用户反馈 Kimi CLI 无法像 Codex 那样递归加载嵌套的 skill 目录（例如 `.agents/skills/{name}/skills/xxx` 结构）。这导致在同一个仓库中，Codex 能识别并使用的复杂 skill 结构，Kimi CLI 却无法发现。
- **影响场景**: 使用复杂、多层级 skill 定义的项目，特别是那些为 Codex 设计的 `.agents` 目录结构。这影响了工具的跨平台兼容性和用户迁移体验。
- **社区反应**: 该 Issue 于 4 月创建，今日仍有更新，评论数 4，但目前无官方回复。
- **链接**: https://github.com/MoonshotAI/kimi-cli/issues/1894

## 重要 PR 进展

### 1. ACP 核心修复与支持 (PR #2359, #2363, #2364)
- **概况**: 开发者 @huntharo 提交了一个由 3 个 PR 组成的系列，旨在系统性地增强 Kimi 的 ACP 支持，以更好地兼容 Codex App Server。
- **PR #2359**: `fix(acp): assign message ids to streamed content`
    - **内容**: 修复流式内容响应中缺少消息ID的问题，这是实现ACP SDK 0.10.0支持的必要步骤。
    - **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2359
- **PR #2363**: `fix(acp): replay loaded session history`
    - **内容**: 基于 #2359，当通过 ACP 加载（`session/load`）历史会话时，能够正确回放历史消息，确保会话状态一致性。
    - **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2363
- **PR #2364**: `feat(acp): support permission mode switching`
    - **内容**: 新增协议层面的 ACP 权限模式切换功能（如默认/严格模式），解决 Issue #1414 中提出的权限控制需求。此 PR 依赖于 #2363。
    - **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2364

### 2. 跨平台文件编辑修复 (PR #2362)
- **内容**: 修复 `StrReplaceFile` 和 `WriteFile` 工具在编辑文件时会破坏原始换行符风格（CRLF/LF）的问题。根因在于 `readtext()` 函数默认使用通用换行模式，导致 `\r\n` 被静默转换为 `\n`。
- **影响**: 解决了 Windows 与 Unix/macOS 系统间协作编辑文件时，因换行符不一致导致的潜在问题。
- **关联 Issue**: #1952, #2191
- **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2362

### 3. Hook 文档澄清 (PR #2361, #2335)
- **概况**: 两位贡献者分别提交 PR，旨在纠正和澄清关于 `Notification` Hook 的文档示例。
- **PR #2335**: `docs: fix Notification hook matcher example` (更新: 2026-05-24)
    - **内容**: 替换了文档中不生效的 `permission_prompt` Hook 示例，更正了中英文文档中关于 `Notification` 匹配器的措辞。
- **PR #2361**: `[codex] docs: clarify hooks notification example`
    - **内容**: 进一步澄清 `Notification` 匹配器使用通知类型而非 sink 名称，并说明审批请求目前不会作为 `Notification` Hook 事件触发。
- **链接**:
    - https://github.com/MoonshotAI/kimi-cli/pull/2335
    - https://github.com/MoonshotAI/kimi-cli/pull/2361

### 4. 构建系统修复 (PR #2358)
- **内容**: 修复 `pyproject.toml` 文件中 `module-name` 字段的类型错误，对于单一模块的包应使用字符串语法。
- **影响**: 这是一个回归性修复（自 2025-11-17 起），修正了根包配置，可避免潜在的构建问题。
- **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2358

## 功能需求归类
- **工具兼容性与互操作性**: 主要体现在 **嵌套 Skill 目录的递归加载**（Issue #1894）和 **ACP 协议的深度支持**（PR #2359, #2363, #2364）两个方向。前者是社区直接提出的与 Codex 功能对等的需求，后者则是开发者主动为提升与生态工具（如 PwrAgent）的互操作性而进行的贡献。

## 开发者关注点
- **对 Codex 兼容性有明确需求**: 从 Issue #1894 可以看出，部分社区用户希望 Kimi CLI 能无缝兼容 Codex 的 Agent/Skill 目录规范，降低迁移和使用成本。
- **跨平台文件处理是高频痛点**: PR #2362 针对跨平台换行符问题的修复，表明跨平台协作场景下的文件处理是一个持续受到关注的痛点。
- **文档准确性影响开发者体验**: 两条独立的文档修复 PR (#2335, #2361) 出现，说明 Hook 相关的配置文档存在不准确或易混淆之处，影响了开发者的配置和使用效率。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

好的，这是为您生成的 2026-05-25 OpenCode 社区动态日报。

---

# 2026-05-25 OpenCode 社区动态日报

## 今日更新概览

今日社区活跃度较高，主要围绕模型兼容性、性能优化和功能请求展开。Kimi k2.5 工具调用失效和 GPT 模型响应延迟是讨论最激烈的问题。DeepSeek V4 Pro 降价后，社区对调整 “OpenCode Go” 订阅限额的呼声强烈，但同时有用户反馈 “一键升级” 后仍被锁定在免费层，可能指向计费系统同步延迟。此外，核心 Todo 工具（`todowrite`/`todoread`）的注册与权限问题在多个版本中依然存在，是影响子代理工作流的关键痛点。

## 社区热点 Issues

1.  **[#20650] Kimi k2.5 工具调用存在问题，社区广泛讨论**
    -   **影响场景**：用户使用 Kimi k2.5 模型时，工具调用（如 bash）频繁因 JSON 解析错误失败。
    -   **问题范围**：模型似乎尝试调用不存在的工具，或生成的 JSON 格式不正确，导致核心功能不可用。该 issue 已存在近两个月，累计 48 条评论，说明此问题影响面较广，但尚未解决。
    -   **链接**: https://github.com/anomalyco/opencode/issues/20650

2.  **[#29079] GPT 模型响应时间波动巨大，用户体验受挫**
    -   **影响场景**：用户反映 GPT 模型（如 GPT-5.4）在简单指令下，有时秒回，有时却需要数分钟才能响应。
    -   **问题范围**：该问题发生在 “graphify” 等插件使用场景中，表明响应延迟可能与流式输出或后端请求调度有关，而非简单的模型负载问题。28 条评论表明这是一个普遍痛点。
    -   **链接**: https://github.com/anomalyco/opencode/issues/29079

3.  **[#15585] 免费模型遭遇 “免费使用超限”，真实性存疑**
    -   **影响场景**：用户使用 “Big Pickle” 等所有三个免费模型时，均收到 “free usage exceed” 错误。
    -   **社区反应**：用户质疑 OpenCode 是否真的对免费模型设置了额度限制。36 条评论显示了社区对免费服务的公平性和透明度的关注。
    -   **链接**: https://github.com/anomalyco/opencode/issues/15585

4.  **[#21032] 插件兼容性断裂：`oh-my-openagent` 在 1.3.14 版本失效**
    -   **影响场景**：从 1.3.13 升级到 1.3.14 后，插件 `oh-my-openagent` 无法使用。日志显示插件进入加载流程但最终不注册任何内容。
    -   **问题范围**：此问题影响了特定插件的用户，且版本升级后突然失效，表明可能存在非兼容性的 API 变更。25 条评论反映了用户对升级风险的担忧。
    -   **链接**: https://github.com/anomalyco/opencode/issues/21032

5.  **[#28846] DeepSeek V4 Pro 永久降价 75%，社区提议调整 Go 订阅限额**
    -   **影响场景**：上游 API 大幅降价后，用户认为 “OpenCode Go” 订阅的月度使用限额应当相应上调。
    -   **社区反应**：该 issue 获得 10 个 👍，表明这是一个受到广泛支持的成本优化提议。社区用户积极推动定价策略与 API 成本挂钩。
    -   **链接**: https://github.com/anomalyco/opencode/issues/28846

6.  **[#29154] `opencode-go/kimi-k2.6` 模型出现验证错误，近期失效**
    -   **影响场景**：用户在使用 OpenCode Go 订阅的 `kimi-k2.6` 模型时，遇到 “Extra inputs are not permitted; field: permissions” 的 provider 验证错误。此模型之前工作正常。
    -   **问题范围**：问题指向模型提供方的接口或 OpenCode 的请求格式可能发生了非兼容性变更，影响了特定付费模型。这是一个新问题，需快速跟进。
    -   **链接**: https://github.com/anomalyco/opencode/issues/29154

7.  **[#28480] Windows 11 新版无法启动，无任何错误提示**
    -   **影响场景**：用户安装最新版 OpenCode 后，在 Windows 11 上点击无任何反应，无错误日志、无崩溃报告。
    -   **问题范围**：此 issue 严重影响了 Windows 用户的基础使用体验，由于缺乏错误信息，排查难度极大。需要开发团队主动复现。
    -   **链接**: https://github.com/anomalyco/opencode/issues/28480

8.  **[#26195] MCP OAuth 认证流程失败：浏览器未被打开**
    -   **影响场景**：用户为 Google Drive MCP 服务器进行 `opencode mcp auth` 时，控制台提示 “Authentication successful!”，但浏览器从未被唤起，OAuth 流程实际上并未完成。
    -   **问题范围**：该 bug 使得 MCP 服务器的远程 OAuth 认证功能彻底失效，影响了需要认证才能访问的 MCP 工具集成。
    -   **链接**: https://github.com/anomalyco/opencode/issues/26195

9.  **[#29129] OpenAI 流式响应间歇性僵死，CPU 高占用但无输出**
    -   **影响场景**：OpenCode 在接收 OpenAI 流式响应时，UI 显示 “working”，但模型既不输出文字也不调用工具，进程保持存活并持续占用高 CPU，必须手动重启。
    -   **问题范围**：该问题严重破坏了交互的可靠性，可能和 HTTPS socket 状态死锁有关，影响所有使用 OpenAI 兼容 API 的用户。
    -   **链接**: https://github.com/anomalyco/opencode/issues/29129

10. **[#12680 / #12938 / #29118] `TodoRead`/`TodoWrite` 工具持续存在问题**
    -   **影响场景**：多个 issue 报告了 `todowrite` 和 `todoread` 工具无法被子代理（Subagents）使用，或在特定版本中未被注册。用户配置了权限，但工具依然不可用。
    -   **社区反应**：这组问题从 2 月份持续至今（#12680 从 2 月 8 日活跃至今），相关 PR 也长时间未合并，反映了社区对任务管理核心功能的稳定性有较高期待但未能满足。
    -   链接: https://github.com/anomalyco/opencode/issues/12680 , https://github.com/anomalyco/opencode/issues/12938 , https://github.com/anomalyco/opencode/issues/29118

## 重要 PR 进展

1.  **[#29150] 修复自动压缩循环：当压缩无进展时及时退出**
    -   **功能/修复**：修复了一个影响自动上下文压缩（Auto-Compact）的 bug。当模型的实际上下文限制大于 provider 报告的限制时，每轮对话都会触发压缩但无实际效果，导致无限循环。该 PR 在压缩无法取得进展时终止循环。
    -   **链接**: https://github.com/anomalyco/opencode/pull/29150

2.  **[#28342] 修复 ESM 兼容性问题：重命名二进制入口文件**
    -   **功能/修复**：修复了 `bin/opencode` 启动器因项目使用 `"type": "module"` 但自身使用 `require()` 语法而导致的启动失败问题。通过将入口文件重命名为 `.cjs` 以强制 Node.js 使用 CommonJS 模块解析。
    -   **链接**: https://github.com/anomalyco/opencode/pull/28342

3.  **[#29156] 修复工具调用竞争条件：清理损坏的工具名称**
    -   **功能/修复**：修复了工具调用摄入（ingestion）过程中的竞争条件。当 `tool-input-start` 事件写入状态为 “pending” 的 `part` 后，`experimental_repairToolCall` 可能会生成一个损坏的工具名。此 PR 添加了对这种损坏工具名称的后处理 sanitization。
    -   **链接**: https://github.com/anomalyco/opencode/pull/29156

4.  **[#12594] 重新启用 TodoRead 工具并共享渲染逻辑**
    -   **功能/修复**：重新启用在 CLI 重构中被禁用的 `TodoReadTool`。该 PR 旨在解决 #12680 中关于 `TodoRead` 工具不可用的问题，并引入了共享渲染逻辑以避免代码重复。
    -   **链接**: https://github.com/anomalyco/opencode/pull/12594

5.  **[#29025] 修复 LLM 请求：保留原生提供商选项**
    -   **功能/修复**：在将请求下发给原生 provider 时，保留 OpenAI 兼容的辅助推理连续（reasoning continuation）字段。该 PR 确保与 AI SDK 的行为一致，并特别处理了 DeepSeek 的工具连续请求、Responses API 加密推理选项等。
    -   **链接**: https://github.com/anomalyco/opencode/pull/29025

6.  **[#29086] 原型实现：TUI 中的粘性提示（Sticky Prompt）头部**
    -   **功能/功能**：实现了 #28035 中提出的新功能原型。当用户滚动查看对话历史时，最后一条用户输入提示将保持在屏幕顶部（粘性头部），便于用户随时参照。
    -   **链接**: https://github.com/anomalyco/opencode/pull/29086

7.  **[#29109] 修复会话迁移 bug：`project_id` 迁移时保留更新时间**
    -   **功能/修复**：修复了一个数据迁移 bug。两个批量 `UPDATE` 语句在修改 `session.project_id` 时，错误地将 `time_updated` 字段重置为当前时间。此 PR 确保迁移操作不会覆盖会话的实际最后更新时间。
    -   **链接**: https://github.com/anomalyco/opencode/pull/29109

8.  **[#29110] 修复桌面端：恢复排队跟进（queued follow-up）设置**
    -   **功能/修复**：在桌面应用中重新启用了 “排队跟进” 功能。该功能的核心流程其实未损坏，但在某个版本中被错误关闭。此 PR 使其恢复正常工作。
    -   **链接**: https://github.com/anomalyco/opencode/pull/29110

9.  **[#28788] 优化桌面 v2 启动与交互体验**
    -   **功能/功能**：根据设计稿（Figma）优化了桌面 v2 的启动流程、会话创建（Home/Session Composer）、标题栏和状态控制。新增了创建新会话时的项目和分支选择功能，并提供了分支感知的 API 支持。
    -   **链接**: https://github.com/anomalyco/opencode/pull/28788

10. **[#29028] 修复 TUI：分离推理思考（Thinking）头部与正文**
    -   **功能/修复**：修复了 TUI 中模型 “思考” 过程的渲染。将推理（reasoning）部分的标题和展开后的 Markdown 正文分离渲染，并应用了统一的样式，提升了思维链（Chain-of-Thought）的可读性。
    -   **链接**: https://github.com/anomalyco/opencode/pull/29028

## 功能需求归类

-   **模型兼容性与提供商**：用户持续反馈新模型（如 Kimi k2.5/k2.6, DeepSeek V4）和特定提供商（如 Nvidia NIM, GitLab Duo）的集成问题，核心诉求是确保新模型能稳定、完整地支持工具调用和推理功能。
-   **核心工具与代理**：`TodoRead` / `TodoWrite` 工具在子代理（Subagents）中的可用性是一个强烈且长期的需求。用户希望任务管理功能能够被灵活地授权给不同的 AI 代理。
-   **UI/UX 与主操作**：用户希望在主操作区域（如 TUI/桌面端）进行更多定制，如更改 “换行/发送” 快捷键（#11898）、在滚动时固定最后一条提示（#28035）、以及在桌面和 Web 端实现 TUI 已有的会话固定功能（#28872）。
-   **平台与集成**：用户提出了更广阔的集成需求，例如在 Android 手机上远程控制开发、通过 SSH 编辑远程文件（#29152）、以及稳定化 MCP 服务器的 OAuth 认证流程（#26195）。
-   **性能与可靠性**：针对 GPT 模型的响应延迟（#29079）和流式响应僵死（#29129）是影响核心体验的性能瓶颈。用户要求可靠、稳定且响应迅速的交互体验。

## 开发者关注点

-   **版本升级的兼容性问题**：插件 `oh-my-openagent` 在版本间的失效（#21032）和新启动器在 Windows 11 上的完全无声失败（#28480），凸显了版本升级时的风险。开发者需要更加关注 API 的向后兼容性，并为重大变更提供清晰的迁移指南。
-   **特定模型集成的高维护成本**：Kimi k2.5 的工具调用问题（#20650）和新版 k2.6 的验证错误（#29154）表明，与快速迭代的第三方模型保持同步是持续性的挑战。`opencode-go/kimi-k2.6` 模型“之前能用现在不能用”的情况，可能是 provider 接口变更所致。
-   **计费与订阅系统的透明度与可靠性**：@KoRTxca 和 @waleedwaley2 报告在付费升级 “OpenCode Go” 后，系统仍显示免费限制

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

好的，作为一名专注于 AI 开发工具的技术分析师，根据您提供的 GitHub 数据，我为您生成了 2026-05-25 的 Qwen Code 社区动态日报。

---

# Qwen Code 社区动态日报 — 2026-05-25

**今日更新概览**

Qwen Code v0.16 系列开发活跃，今日发布了 `v0.16.1-nightly` 版本，主要修复了构建过程中的文件清理问题。社区中，“Mode B” (qwen serve) 服务模式进入 v0.16-alpha 阶段，相关功能完善和文档工作成为 PR 重点。Issues 方面，用户反馈了内存溢出（OOM）、VSCode 兼容性、Token 消耗统计等多个痛点，同时开发团队也提出了本地诊断框架等改进方案。

## 版本发布

**v0.16.1-nightly.20260525.84f408017**
- **链接**: [Releases Page](https://github.com/QwenLM/qwen-code/releases/tag/v0.16.1-nightly.20260525.84f408017)
- **更新内容**:
    - **修复**: 修复了 `tsc --build` 编译时因残留临时文件导致的 `TS5055` 错误。
    - **杂项**: 版本发布相关的常规更新。

## 社区热点 Issues

1.  **#4175: Mode B 功能优先级路线图**
    - **摘要**: 核心开发者提出的关于 `qwen serve` (Mode B) 迈向 v0.16 生产就绪版本的详细路线图。当前 Stage 1 的 HTTP/SSE 路由、认证和会话复用等功能已基本就绪。
    - **影响**: 影响所有使用 `qwen serve` 进行部署的用户。此 Issue 定义了后续开发优先级，是当前整合工作的核心参考。
    - **链接**: [Issue #4175](https://github.com/QwenLM/qwen-code/issues/4175)
    - *更新于 2026-05-24*

2.  **#4276: OOM 崩溃**
    - **摘要**: 用户报告了内存溢出（OOM）导致的崩溃问题，并附带了内存回收的日志截图。
    - **影响**: 影响在资源受限环境下（如低内存服务器或普通开发机）运行 Qwen Code 的用户。这是性能相关的关键 Bug。
    - **链接**: [Issue #4276](https://github.com/QwenLM/qwen-code/issues/4276)
    - *更新于 2026-05-24*

3.  **#4421: 本地问题诊断框架（Ring Buffer + Diagnostic ID）**
    - **摘要**: 开发成员提出的特性请求。为解决用户遇到 API 异常、断流等问题时难以提供有效排查信息的情况，建议构建一个本地优先、用户主导的诊断框架，包括环形缓冲区和诊断 ID 生成机制。
    - **影响**: 显著提升最终用户（尤其是非深度开发者）的故障反馈质量，降低维护者的沟通成本。
    - **链接**: [Issue #4421](https://github.com/QwenLM/qwen-code/issues/4421)
    - *更新于 2026-05-24*

4.  **#4479: 需要功能统计每日 Token 消耗数量**
    - **摘要**: 用户反馈希望增加一个功能，用于查看每日使用的 Token 数量，以便更好地控制成本和使用量。用户提到一次使用就消耗了 3 千万 Token。
    - **影响**: 反映了用户对计费透明度和用量监控的强烈需求，特别是使用付费模型时的关键功能。
    - **链接**: [Issue #4479](https://github.com/QwenLM/qwen-code/issues/4479)
    - *更新于 2026-05-24*

5.  **#4257: 工作时阻止系统休眠**
    - **摘要**: 用户反映在 Qwen Code 执行长时间任务时，电脑进入休眠状态导致任务中断。期望 Qwen Code 能阻止系统进入休眠。
    - **影响**: 影响所有需要执行长时间、不可中断任务（如大型代码审查、批量处理）的用户，是交互体验和稳定性的重要需求。
    - **链接**: [Issue #4257](https://github.com/QwenLM/qwen-code/issues/4257)
    - *更新于 2026-05-25*

6.  **#4481: 模型回复语言不受控制**
    - **摘要**: 用户要求仅用英文回复，但模型仍然输出非英文内容。即使反复要求改写，回复内容也无变化。
    - **影响**: 这是一个典型的模型输出控制问题，影响了用户的预期使用体验，尤其是在需要特定语言输出的场景下。
    - **链接**: [Issue #4481](https://github.com/QwenLM/qwen-code/issues/4481)
    - *更新于 2026-05-24*

7.  **#4475: 追踪 AUTO 模式的遥测和分类器一致性**
    - **摘要**: 跟进 AUTO 模式的安全性对齐工作，指出当前虽然实现了核心行为（原因分离、权限拒绝钩子等），但缺乏用于调试和集群级监控的丰富遥测和分类器元数据。
    - **影响**: 这是服务端部署和运维的关键需求，能帮助开发者和运维团队监控 AUTO 模式的安全性和行为。
    - **链接**: [Issue #4475](https://github.com/QwenLM/qwen-code/issues/4475)
    - *更新于 2026-05-24*

8.  **#4488: Qwen Code 插件在最新版 VSCode 左侧栏不显示**
    - **摘要**: 用户报告 Qwen Code v0.16.0 插件在 VSCode 1.120.0 上无法正常显示在侧边栏，界面闪一下即消失。而在 VSCode 1.95.3 上可以正常工作。
    - **影响**: 这是一个版本兼容性问题，直接影响大量升级到最新 VSCode 的用户使用插件。
    - **链接**: [Issue #4488](https://github.com/QwenLM/qwen-code/issues/4488)
    - *更新于 2026-05-25*

9.  **#4486: 遥测 bug: interaction 跨度 trace id 错误**
    - **摘要**: 核心开发者发现，`startInteractionSpan` 创建的 `qwen-code.interaction` 跨度没有正确传递父级 session 根上下文，导致其独立于 session 的 trace 链，影响了分布式追踪的连贯性。
    - **影响**: 影响服务端的可观测性和追踪能力，使得排查具体一次交互的完整链路变得更加困难。
    - **链接**: [Issue #4486](https://github.com/QwenLM/qwen-code/issues/4486)
    - *更新于 2026-05-25*

## 重要 PR 进展

1.  **#4484: `feat(acp-bridge)`：跨客户端实时同步完整性修复（5 项）**
    - **内容**: 修复了在 `qwen serve` (daemon mode) 模式下，多个客户端连接同一会话时，部分客户端操作（如 `user_message_chunk`）未同步到其他 SSE 订阅客户端的问题。
    - **重要性**: 改善了多人协作或跨端使用场景下的实时性体验，是完善服务端能力的关键修复。
    - **链接**: [PR #4484](https://github.com/QwenLM/qwen-code/pull/4484)

2.  **#4402: `feat(core)`：流式工具调度 — Phase 1 + Phase 2**
    - **内容**: 实现了流式工具调度的前两个阶段，提供了“已完成工具调用”的信号，并为后续的流式工具进展事件打下基础。
    - **重要性**: 这是对工具调用机制的深度改造，为更动态、更高效的 Agent 交互方式铺平了道路。
    - **链接**: [PR #4402](https://github.com/QwenLM/qwen-code/pull/4402)

3.  **#4487: `fix(cli)`：要求 @ 前有空格才能触发文件补全**
    - **内容**: 修复了 CLI 中输入 `cici@192.168.0.160` 时，`@` 被错误地识别为文件补全的触发词，导致 Enter 键无法提交命令的问题。
    - **重要性**: 显著提升了 CLI 日常输入（如 IP 地址、邮箱）的流畅度和可用性，是一个重要的体验修复。
    - **链接**: [PR #4487](https://github.com/QwenLM/qwen-code/pull/4487)

4.  **#4478: `fix(auth)`：对齐 Token Plan 模型默认值与 ModelStudio**
    - **内容**: 更新了 Bailian Token Plan 的默认聊天模型，并保持 VS Code 插件与 CLI 的目录一致。
    - **重要性**: 确保用户在使用 Token Plan 时能够看到并选择最新的可用模型，避免因默认值不同导致的混淆。
    - **链接**: [PR #4478](https://github.com/QwenLM/qwen-code/pull/4478)

5.  **#4477: `feat(cli)`：密集型内联面板，用于并行 Agent 扇出显示**
    - **内容**: 为 `/review` 等并行启动多个 Agent 的命令，引入了一种更密集的内联面板显示方式，以提供更多信息并提升视觉效果。
    - **重要性**: 改善了用户在面对多 Agent 并行执行时的可视化和调试体验。
    - **链接**: [PR #4477](https://github.com/QwenLM/qwen-code/pull/4477)

6.  **#4485: `chore(deps)`：更新 `@google/genai` 依赖**
    - **内容**: 将 `@google/genai` 依赖从 1.30.0 升级到 2.6.0。
    - **重要性**: 保持对 Google AI 模型的最新支持，可能包含安全更新、新功能或性能改进。
    - **链接**: [PR #4485](https://github.com/QwenLM/qwen-code/pull/4485)

7.  **#4390: `feat(telemetry)`：传播 W3C traceparent 和会话 ID 头部**
    - **内容**: 在 HTTP 请求中传播 W3C 标准的 `traceparent` 头部和 `first-party-scoped` 的会话 ID 头部，以提升分布式追踪的关联性。
    - **重要性**: 增强了服务端可观测性基础设施，使得通过 trace 链来端到端地定位问题成为可能。
    - **链接**: [PR #4390](https://github.com/QwenLM/qwen-code/pull/4390)

8.  **#4359: `feat(ci)`：AI 预审 + PR 合规门禁**
    - **内容**: 新增了 PR 合规性检查（如模板完整性、PR 大小）以及基于 AI 的 PR 审查机器人 `qwen-code-pr-review`，自动化代码审查流程。
    - **重要性**: 提升了项目维护效率，确保了 PR 质量，是大型开源项目走向规范化的标志。
    - **链接**: [PR #4359](https://github.com/QwenLM/qwen-code/pull/4359)

9.  **#4482: `fix(telemetry)`：改进 LogToSpan 桥接错误信息和 TUI 处理**
    - **内容**: 修复了 `LogToSpanProcessor` 桥接，当 OTLP 后端不支持日志时（如阿里云 ARMS），提供更有价值的错误信息，并优化了 TUI 处理逻辑。
    - **重要性**: 提升了可观测性模块的易用性和鲁棒性，帮助运维人员更容易地诊断遥测配置问题。
    - **链接**: [PR #4482](https://github.com/QwenLM/qwen-code/pull/4482)

10. **#4472: `feat(daemon)`：在 /acp 端点提供 ACP Streamable HTTP 传输**
    - **内容**: 在 `qwen serve` 上新增了一个 `Streamable HTTP` 传输协议（基于 ACP RFD #721）的 `/acp` 端点，作为现有 REST+SSE 接口之外的第二个北向接口。
    - **重要性**: 迈出了支持标准化 Agent 通信协议（ACP）的重要一步，增强了与其他 ACP 兼容客户端或系统的互操作性。
    - **链接**: [PR #4472](https://github.com/QwenLM/qwen-code/pull/4472)

## 功能需求归类

从近期的 Issues 中，可以看到用户反复提及以下几个功能方向：
- **本地可观测性与诊断**: 许多用户反馈的问题难以复现或描述清楚。`#4421` (本地诊断框架) 和 `#4486` (Trace ID 错误) 都指向了需要更强的本地诊断和可观测性工具。
- **用户可见的统计与行为控制**: `#4479` (Token 消耗统计) 和 `#4257` (阻止系统休眠) 反映了用户对工具行为的控制权和透明度的需求，尤其是在资源使用和后台行为上。
- **兼容性与稳定性**: `#4488` (VSCode 版本兼容性) 和 `#4276` (OOM 崩溃) 表明，随着版本迭代，保持与主流 IDE 和运行环境的兼容性，以及解决运行时稳定性问题，是用户的核心期待。

## 开发者关注点

从 Issues 和 PR 的讨论中可以总结出开发者反馈中的一些痛点和高频需求：
1.  **可观测性与排查困难**: 当出现遥测数据链条断裂（如 `#4486`）或缺乏本地诊断能力（如 `#4421`）时，开发者难以进行有效的错误排查和数据追踪。
2.  **Token 消耗不透明**: 大量 Token 的消耗（如 `#4479` 中提到的单次 3 千万）让开发者感到成本压力和不确定性，希望获得更精细的统计数据以优化使用。
3.  **核心功能的用户体验**: 包括 CLI 输入不流畅（`#4487`）、插件界面兼容性问题（`#4488`）以及模型输出行为不可控（`#4481`）等问题，都直接影响了日常开发效率和满意度。
4.  **环境与系统集成**: `#4257` 中提到的阻止系统休眠，是一个典型的、需要与操作系统深度集成的功能，表明用户希望 Qwen Code 能更智能地与环境交互，以保障长任务的顺利执行。

</details>