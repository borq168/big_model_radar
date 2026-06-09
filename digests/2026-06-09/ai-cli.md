# AI CLI 工具社区动态日报 2026-06-09

> 生成时间: 2026-06-09 02:12 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## 横向对比

好的，以下是基于今日各 AI CLI 工具社区动态的横向对比分析报告。

---

# AI CLI 工具社区横向对比分析 | 2026-06-09

## 1. 今日横向概览

- **Claude Code** 发布 v2.1.169，新增安全模式与 `/cd` 命令，同时社区在 macOS 网络错误、多窗口支持、VSCode 扩展行为不一致等问题上持续发声。
- **OpenAI Codex** 密集发布 4 个预发布版本，重点修复桌面端集成与认证流程，但 `gpt-5.5` 模型在所有环境下返回 404 成为当日最严重的中断。
- **Gemini CLI** 发布 v0.47.0-nightly，代理挂起与子代理误报成功仍是社区最尖锐的痛点，自动内存系统的安全与效率问题也被集中暴露。
- **GitHub Copilot CLI** 无新版本发布，社区讨论聚焦于会话管理（暂停/多会话）、Vi 输入模式、以及模型兼容性（gpt-5.5/Claude Opus 4.6）中断。
- **Kimi Code CLI** 仅有 4 条 Issue 更新，其中两条指向 v0.11.0 版本破坏了 API Key 认证和 `@filename` 语法，社区活跃度最低。
- **OpenCode** 无新版本，但以 50 条 Issue 更新、10 条 PR 贡献保持高活跃，`undo` 不撤销文件、数据库迁移引发的约束错误、JSON 流式输出不完整是重点。
- **Qwen Code** 无新版本，Daemon 模式（ACP 协议）、OOM 回归修复、声明式 Agent（Claude Code 兼容）是社区核心关注，PR 数量领先（10 条）。

## 2. 各工具活跃度对比

| 工具               | 收录热点 Issues | 重要 PR 进展 | 新版本发布 | 主要动态 |
|-------------------|----------------|-------------|-----------|---------|
| Claude Code       | 10             | 5           | v2.1.169  | 安全模式、/cd 命令、macOS 网络问题 |
| OpenAI Codex      | 10             | 10          | 4 个预发布 | gpt-5.5 404、WSL 性能、认证修复 |
| Gemini CLI        | 10             | 10          | 1 个夜间版 | 代理挂起、子代理状态错误、自动内存 |
| GitHub Copilot CLI| 10             | 1           | 无         | 会话管理、Vi 模式、模型兼容性 |
| Kimi Code CLI     | 4              | 0           | 无         | v0.11.0 破坏性变更（API Key、@filename） |
| OpenCode          | 10（总约50）    | 10          | 无         | undo、JSON 输出、数据库约束、MCP 分页 |
| Qwen Code         | 10（总约31）    | 10          | 无（发布失败）| Daemon/ACP、OOM、声明式 Agent |

**说明**：Issues 和 PR 数为日报中精选的条目，不代表仓库全部，但反映了社区讨论的优先级。OpenCode 和 Qwen Code 的议题更新总数更高，表明社区更活跃。

## 3. 共同出现的功能方向

- **模型兼容性与服务中断**
  - OpenAI Codex：`gpt-5.5` 返回 404（#26892）
  - GitHub Copilot CLI：`gpt-5.5` 子代理挂起（#3547），Claude Opus 4.6 “模型不支持”（#2867）
  - Claude Code：VSCode 扩展模型选择器显示错误（#66403）
  - 观察：多个工具依赖的模型（尤其是最新 GPT/Claude 版本）在不同 CLI 中均出现可用性问题，影响开发者对模型版本的信任。

- **Agent 可靠性与状态透明**
  - Gemini CLI：通用代理无限挂起（#21409）、子代理误报成功（#22323）
  - GitHub Copilot CLI：子代理指定模型后永久挂起（#3547）
  - Claude Code：Agent 配置冲突导致无法独立设置模型/Effort（#66402）
  - OpenCode：Opus 4.8 泄漏工具调用文本导致下游 400 错误（#31247）
  - 观察：代理的“假成功”或静默失败是跨工具的普遍问题，用户急需更精确的运行状态反馈。

- **Windows + WSL 体验短板**
  - OpenAI Codex：WSL 环境运行缓慢（#25715）、反复扫描插件目录（#26149）、GitHub OAuth 失败（#25203）
  - GitHub Copilot CLI：WSL 下 Chat 启动延迟 40-80 秒（#3652）、MCP 服务器失控循环（#3701）
  - Claude Code：Windows 11 Cowork VM 崩溃（#27897）
  - Gemini CLI：Wayland 下浏览器代理失败（#21983，Linux 但不限于 Windows）
  - 观察：Windows 及其 WSL 子系统的性能与稳定性仍是所有工具的薄弱环节，企业或跨平台开发者受影响最大。

- **MCP 工具生态与企业整合**
  - Claude Code：Routines 中 MCP 工具调用缺少审批 UI（#61044）
  - Gemini CLI：MCP 工具原子性更新防止丢失（#27619）
  - GitHub Copilot CLI：MCP 搜索 URL 构建错误（#3436）、资源配置路径不一致（#3688）
  - OpenCode：MCP 目录分页支持（#31442）、MCP Resources 读取需求（#15535）
  - 观察：MCP 正成为 AI CLI 的标准扩展协议，但权限管理、企业注册表兼容性和资源支持仍需标准化。

- **会话管理与持久化上下文**
  - Claude Code：多窗口/可分离窗口（#30154, #27725）、`/cd` 命令保留缓存（v2.1.169）
  - GitHub Copilot CLI：暂停会话（#1928）、多会话管理（#2966）
  - OpenCode：`/goal` 持久化会话目标（#27167）、`/undo` 不撤销文件（#5474）
  - Qwen Code：Daemon 空闲会话回收（#4833）
  - 观察：用户希望像 IDE 一样管理多个 AI 会话，并保留上下文与文件状态的原子性。

## 4. 差异化定位分析

| 工具               | 功能侧重与目标用户 | 技术路线特点 |
|-------------------|------------------|-------------|
| **Claude Code**   | 桌面应用 + VSCode 集成，面向专业开发者；强调多窗口、安全模式、插件生态 | 基于 Anthropic 模型，注重 prompt 缓存与配置隔离 |
| **OpenAI Codex**  | VS Code / WSL 紧密集成，面向微软生态的 Python / .NET 开发者；重视认证与企业场景 | 深度绑定 OpenAI 模型，预发布频繁，快速修复 Windows 问题 |
| **Gemini CLI**    | 自主 Agent 与子代理编排，面向 Google Cloud / Vertex AI 用户；强调自动内存和工具多样性 | 基于 Gemini 模型，侧重 Agent 自治性与安全控制（SSRF 防护） |
| **GitHub Copilot CLI** | GitHub 生态深度绑定，面向 GitHub Actions / Codespaces 用户；注重输入体验和插件钩子 | 在 Copilot 统一平台下，通过 CLI 提供会话管理和 MCP 扩展 |
| **Kimi Code CLI** | 面向中文开发者，作为 Moonshot AI 的 CLI 前端；版本早期，稳定性问题突出 | 基于 Kimi 模型，当前处于重写过渡期（Python → TypeScript） |
| **OpenCode**      | 开源社区驱动，支持多提供商（OpenAI/Claude/Bedrock/OpenRouter），面向自部署和定制 | 强调 TUI 与 Web UI 双模式，活跃参与 ACP 协议，有加密货币支付 |
| **Qwen Code**     | Daemon 模式 + ACP 协议，面向 Zed/JetBrains 等编辑器集成用户；明确对标 Claude Code，吸引迁移人群 | 基于 Qwen 模型，积极实现声明式 Agent、用户记忆、服务端会话管理 |

## 5. 社区活跃度记录

- **最活跃**：OpenCode 和 Qwen Code 在 Issue 更新数量和 PR 贡献上领先（均超过 30 条议题更新，各 10 条 PR），且维护者回应/合并频繁。Gemini CLI 和 OpenAI Codex 紧随其后，均有 10 条 PR 且包含预发布版本。
- **中等活跃**：Claude Code 发布新版本，但 PR 数量（5）相对于议题热度（10 个热点）略少，部分老问题（macOS 网络错误、多窗口）长期未修复。
- **低活跃**：GitHub Copilot CLI 今日仅 1 条 PR 合并，无新版本，但议题讨论仍在持续。Kimi Code CLI 最低，仅 4 条 Issue，无 PR 或版本发布，项目可能处于维护低谷期。

## 6. 有证据支撑的观察

1. **模型服务中断是今日最严重的一致性问题**：OpenAI Codex 的 `gpt-5.5` 404、GitHub Copilot 的 `gpt-5.5` 和 `Claude Opus 4.6` 错误表明，新模型上线前后的兼容性测试不足，直接阻碍用户升级。跨工具出现类似错误，提示 CLI 团队应与模型 API 部门建立更紧密的回归测试。

2. **Agent 的“静默失败”正在侵蚀用户信任**：Gemini CLI 的子代理误报成功（#22323）、GitHub Copilot 的子代理挂起（#3547）、Claude Code 的 Agent 配置冲突（#66402）都指向同一问题：用户无法可靠地判断 Agent 任务是否真正完成。缺乏明确的失败信号比无声失败更容易被容忍，但当前状态是无声失败居多。

3. **WSL 环境是所有工具的“阿喀琉斯之踵”**：OpenAI Codex（3 条 WSL 相关热点）、GitHub Copilot CLI（2 条）、Claude Code（Windows 崩溃）共同指向 WSL 文件系统延迟、进程间通信效率低、认证流程不兼容等根源性问题。考虑到大量企业开发者使用 Windows，这一短板直接影响了工具的采纳率。

4. **MCP 权限与审批 UI 缺失成为自动化工作流的阻碍**：Claude Code 的 Routines 中 MCP 调用无审批 UI（#61044）、Gemini CLI 的 MCP 工具原子性更新（#27619）、GitHub Copilot CLI 的 MCP 搜索 URL 错误（#3436）都体现了 MCP 在企业级集成中缺乏一致的安全模型和错误反馈机制。如果 MCP 想成为通用标准，权限审批的明确化是必经之路。

5. **开源工具正主动对标 Claude Code 以吸引用户迁移**：Qwen Code 明确引入了声明式 Agent（兼容 Claude Code 格式）、用户级自动记忆、Daemon 模式；OpenCode 也在讨论 `/goal` 持久化目标和撤销回滚改进。这表明 Claude Code 在功能设计上存在一定的“先行者优势”，开源社区通过快速复现来降低迁移成本。

---

**今日暂无明确跨工具信号**：关于“加密货币支付”“Vi 模式大规模普及”“多提供商统一 API”等，目前仅在单个工具中出现（OpenCode 的 #23153、GitHub Copilot 的 #13），证据不足以支撑趋势判断。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

好的，这是 2026 年 6 月 9 日的 Claude Code 社区动态日报。

---

# 2026-06-09 Claude Code 社区动态日报

## 今日更新概览

Claude Code 发布 v2.1.169 版本，新增安全模式 (`--safe-mode`) 用于排除自定义配置故障，以及 `/cd` 命令实现在不破坏提示缓存的情况下切换工作目录。社区方面，关于多窗口支持、网络连接错误及桌面应用跨平台兼容性的讨论持续升温；同时，今日涌现大量关于 VSCode 扩展、Agent 行为、MCP 权限以及文档缺失的 Bug 报告和功能请求。

## 版本发布

### v2.1.169
*   **新增 `--safe-mode` 标志**：新增 `--safe-mode`（及环境变量 `CLAUDE_CODE_SAFE_MODE`），启动时禁用所有自定义配置（CLAUDE.md、插件、技能、钩子、MCP 服务器），方便用户排查问题。
*   **新增 `/cd` 命令**：新增 `/cd` 命令，可在不破坏提示缓存的情况下将会话迁移至新的工作目录，提升开发体验。

## 社区热点 Issues (Top 10)

1.  **图像处理失败导致 Token 浪费** (#60334)
    *   **问题**：用户频繁遭遇“图像处理失败”的 API 错误，导致大量 Token 和 5小时对话窗口的 70% 被浪费，尽管用户并未实际使用图像。
    *   **影响**：核心成本与 API 稳定性问题，影响所有依赖图像交互的流程。
    *   [查看详情](https://github.com/anthropics/claude-code/issues/60334)

2.  **多窗口/可分离窗口支持需求** (#30154, #27725)
    *   **问题**：用户强烈需求在桌面应用中支持多窗口（#30154，165 👍）或可分离的 OS 级别窗口（#27725，54 👍），以便进行分屏协作和监控多个会话。
    *   **影响**：桌面应用的核心工作流效率问题，社区反应热烈。
    *   [#30154](https://github.com/anthropics/claude-code/issues/30154) | [#27725](https://github.com/anthropics/claude-code/issues/27725)

3.  **macOS 网络连接错误** (#5674)
    *   **问题**：macOS 用户持续遇到 `ECONNRESET` 网络错误，导致连接中断和任务失败，此问题在 Windows 和 Linux 上未重现。
    *   **影响**：macOS 平台用户的严重稳定性问题，追溯期长达数月。
    *   [查看详情](https://github.com/anthropics/claude-code/issues/5674)

4.  **Windows 11 桌面版 Cowork VM 崩溃** (#27897)
    *   **问题**：在 Windows 11 Insider 版本上使用 MSIX 安装包时，Cowork 功能因未解决的 `EXDEV rename` 错误而完全崩溃。
    *   **影响**：Windows 平台特定功能完全不可用，影响 Insider 用户。
    *   [查看详情](https://github.com/anthropics/claude-code/issues/27897)

5.  **允许 Claude 写入/更新项目文件** (#16550)
    *   **问题**：请求扩展 Claude Code 的功能，使其能够直接通过 API 写入和更新项目文件，以增强自动化能力。
    *   **影响**：核心自动化能力限制，影响 CI/CD 和工作流集成。
    *   [查看详情](https://github.com/anthropics/claude-code/issues/16550)

6.  **Chrome 扩展导航策略被拦截** (#43255)
    *   **问题**：Chrome 版 MCP 工具在所有域名上报告“Navigation to this domain is not allowed”，这是一个回归问题。
    *   **影响**：Chrome 浏览器扩展核心功能瘫痪，影响大量 Web 开发者。
    *   [查看详情](https://github.com/anthropics/claude-code/issues/43255)

7.  **VS Code 扩展强制 Pro 计划使用 1M Context** (#64349)
    *   **问题**：VS Code 扩展强制 Pro 计划用户使用 1M 上下文窗口，可能超出 Pro 计划限额或导致非预期计费。
    *   **影响**：平台体验不一致，VS Code 扩展的行为与 CLI 不同。
    *   [查看详情](https://github.com/anthropics/claude-code/issues/64349)

8.  **Routines 中 MCP 工具调用失败** (#61044)
    *   **问题**：在 Routines 中调用 MCP 工具时，始终失败并提示“requires approval”，但未显示审批 UI，重连也无法解决。
    *   **影响**：自动化工作流（Routines）的核心功能故障，阻碍自动化流程。
    *   [查看详情](https://github.com/anthropics/claude-code/issues/61044)

9.  **Agent 视图 / 模型配置冲突** (#66402)
    *   **问题**：`/model` 和 `/effort` 命令会全局修改 `settings.json`，导致无法在 Agent/Fleet 视图中为不同 Agent 独立配置模型和 Effort。
    *   **影响**：Agent 模式下的集群任务管理灵活性受限。
    *   [查看详情](https://github.com/anthropics/claude-code/issues/66402)

10. **VSCode 扩展模型选择器显示错误** (#66403)
    *   **问题**：VS Code 扩展的模型选择器将“Opus 4.6”显示为默认推荐，而同一账号下的 CLI 则正确显示“Opus 4.8 (1M context)”。
    *   **影响**：VS Code 扩展和 CLI 间存在行为与信息不一致，可能导致用户选错模型。
    *   [查看详情](https://github.com/anthropics/claude-code/issues/66403)

## 重要 PR 进展 (Top 5)

1.  **修复插件发现机制** (#65286)
    *   **内容**：为 `plugin-dev` 插件添加了缺失的 `plugin.json` 清单文件，以修复通过标准插件机制的发现和安装问题。
    *   [查看详情](https://github.com/anthropics/claude-code/pull/65286)

2.  **修复插件作者信息格式** (#65619) [已合并]
    *   **内容**：修复了 `frontend-design` 插件清单中作者字段格式错误的问题，将两个作者信息分隔以兼容插件 UI 的渲染。
    *   [查看详情](https://github.com/anthropics/claude-code/pull/65619)

3.  **修复 Devcontainer Docker 守护进程检测** (#66372)
    *   **内容**：修复了 Devcontainer 脚本中检测 Docker 守护进程的逻辑，使用 `$LASTEXITCODE` 检查 `docker info` 命令的退出码，避免了当 Docker Desktop 未运行时检测失败的问题。
    *   [查看详情](https://github.com/anthropics/claude-code/pull/66372)

4.  **更新 Rules 前端语法文档与验证** (#26914) [已合并]
    *   **内容**：新增示例目录，包含正确和错误的 rules 前端语法示例，并添加了一个用于检测错误 `paths:` 语法的 PostToolUse 钩子，帮助用户理解 silent failure 的原因。
    *   [查看详情](https://github.com/anthropics/claude-code/pull/26914)

5.  **修复扩展性 Symlink 问题** (#66171)
    *   **内容**：提出了一个修复方案，解决 `extensibility.py` 在项目控制的 GUI 目录中跟踪符号链接可能引发的安全或行为问题。
    *   [查看详情](https://github.com/anthropics/claude-code/pull/66171)

## 功能需求归类

*   **工作流与 UI 增强**：用户反复提及对多窗口/可分离窗口（#30154, #27725）、自定义键盘快捷键（如打开特定文件，#66399）以及 CLI 命令增强（如本地会话语向云端转移 `--teleport` 的反向操作，`/feedback` 不包含私有数据，#66373, #63443）的迫切需求。
*   **平台与集成一致性**：多个 Bug 报告指出 VSCode 扩展与 CLI 在模型选择、上下文窗口限制和权限管理方面存在行为不一致（#64349, #66403, #64521），反映用户对跨平台统一体验的诉求。
*   **Agent 与自动化控制**：用户希望更精细地控制 Agent 行为，包括能为不同 Agent 独立配置模型和 Effort（#66402），并新增用户级别的 Agent 技能发现路径以支持跨平台工作流（#66352）。
*   **MCP 权限管理优化**：存在多个关于 MCP 权限的模糊或失效问题，包括 Routines 中无审批 UI（#61044）以及 CLI 不继承 Web 端的 MCP 连接器审批设置（#64521），用户需要一个清晰且一致的权限体系。

## 开发者关注点

*   **平台稳定性与 Bug 修复**：开发者对 macOS 上的网络连接问题（#5674）、Windows 上的功能崩溃（#27897）以及 Chrome 扩展的回归问题（#59974, #43255）表现出高度关注。这些是影响日常开发流程的严重阻碍。
*   **Token 消耗与成本控制**：开发者对 Claude Code（尤其是 Agent 模式）在简单任务中过度消耗 Token 表示担忧（#65920, #66353），这直接关联到使用成本。同时，图像处理失败的 Token 浪费问题（#60334）也引发了广泛讨论。
*   **文档与透明度**：开发者指出多项功能文档缺失或不准确，例如 Agent JSON 输出格式（#66384）、MCP 策略执行窗口（#66380）以及 Windows 平台 CLI 启动缓慢的排查指南（#66395）。完善的文档是有效使用工具的基础。
*   **安全与模型行为**：开发者报告了模型的行为错误，如确认错误后立即重复同一错误模式（#66404）、工具调用解析失败（#66400）以及关键的安全事件（模型生成虚假用户指令并执行，#66397），这些涉及模型可靠性和安全性，是核心关注点。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

好的，作为专注于 AI 开发工具的技术分析师，以下是根据您提供的 GitHub 数据生成的 2026-06-09 OpenAI Codex 社区动态日报。

---

# OpenAI Codex 社区动态日报 | 2026-06-09

## 今日更新概览

今日 Codex 项目发布了多个预发布版本，主要修复了 Windows/macOS 桌面端的集成与启动体验。社区讨论集中在 `gpt-5.5` 模型在特定环境下出现 “404 Not Found” 的严重问题，以及开发者对于优化 WSL 环境下使用体验的持续反馈。此外，项目内部正在推进多项架构改进，包括将用户指令加载、插件遥测等功能进行集中化与解耦。

## 版本发布

今日发布了 `rust-v0.138.0`、`rust-v0.139.0-alpha.1`、`rust-v0.138.0-alpha.8` 和 `rust-v0.138.0-alpha.7` 四个版本。其中主要版本 `rust-v0.138.0` 的更新亮点包括：
- **桌面端集成增强**：`/app` 命令现在支持将 CLI 线程直接交接给 macOS 和原生 Windows 上的 Codex Desktop。Windows 工作区的启动也可以直接打开 Desktop，而无需停留在手动提示界面。
- **图像支持**：支持本地图像附件和独立的图像生成功能。

相关链接：
- [rust-v0.138.0 发布说明](https://github.com/openai/codex/releases/tag/rust-v0.138.0)
- [rust-v0.139.0-alpha.1 发布说明](https://github.com/openai/codex/releases/tag/rust-v0.139.0-alpha.1)
- [rust-v0.138.0-alpha.8 发布说明](https://github.com/openai/codex/releases/tag/rust-v0.138.0-alpha.8)
- [rust-v0.138.0-alpha.7 发布说明](https://github.com/openai/codex/releases/tag/rust-v0.138.0-alpha.7)

## 社区热点 Issues

1.  **[#26892] `gpt-5.5` 模型在 Desktop 和 CLI 上普遍报错 “404 Not Found”**
    - **影响场景**: 所有使用 `gpt-5.5` 模型的用户，在 Desktop 和 CLI 环境下均无法发起实际请求。
    - **问题范围**: 本地模型元数据显示可用，但实际调用 Codex 响应端点时失败，返回 404。`gpt-5.4` 模型工作正常。
    - **社区反应**: 目前最热门的 Issue，共 76 条评论，28 个👍，表明此问题影响广泛，用户迫切希望修复。
    - **链接**: [Issue #26892](https://github.com/openai/codex/issues/26892)

2.  **[#25144] 建议增加选项以禁用长提示自动转为 .txt 附件**
    - **影响场景**: 习惯粘贴长结构提示的用户。
    - **问题范围**: 在 Codex App (macOS) 中，粘贴长文本会被自动转为 `.txt` 附件，而不是直接作为提示输入，改变了用户的交互习惯。
    - **社区反应**: 52 条评论，65 个👍，说明有大量用户希望保留对其输入方式的控制权。
    - **链接**: [Issue #25144](https://github.com/openai/codex/issues/25144)

3.  **[#25203] Windows 上 GitHub OAuth 认证因 “找不到 Electron 应用” 失败**
    - **影响场景**: Windows 用户首次或重新连接 GitHub 账户时。
    - **问题范围**: OAuth 回调流程在 Windows Codex Desktop 应用中失败，无法完成认证。
    - **社区反应**: 37 条评论，21 个👍，是 Windows 用户的一个基础功能阻塞点。
    - **链接**: [Issue #25203](https://github.com/openai/codex/issues/25203)

4.  **[#25715] WSL 作为 Agent 环境时 Codex App 运行极其缓慢**
    - **影响场景**: 在 Windows 上使用 WSL 作为 Codex Agent 运行环境的用户。
    - **问题范围**: 日常操作（如工具调用）延迟极高，几乎无法使用。用户通过对比测试排除了 WSL 自身或仓库等因素。
    - **社区反应**: 36 条评论，36 个👍，表明 WSL 性能问题是开发者社区的强烈痛点。
    - **链接**: [Issue #25715](https://github.com/openai/codex/issues/25715)

5.  **[#21671] 版本 0.129.0 中 `/compact` 命令因未知的 `service_tier` 参数失败**
    - **影响场景**: 从 0.128.0 升级到 0.129.0 的用户。
    - **问题范围**: `/compact` 命令会向 OpenAI API 发送一个不支持的 `service_tier` 参数，导致请求失败。
    - **社区反应**: 25 条评论，5 个👍。虽然已被关闭，但说明 API 参数兼容性问题需要关注。
    - **链接**: [Issue #21671](https://github.com/openai/codex/issues/21671)

6.  **[#24675] Codex Desktop 在重认证后仍使用过期的连接器链接，需手动清除缓存**
    - **影响场景**: 使用 Linear 等外部服务连接器的用户。
    - **问题范围**: 服务端返回 401 要求重认证后，Desktop 应用仍缓存了旧链接，导致连接失效，重启或重装插件均无效。
    - **社区反应**: 21 条评论，16 个👍，涉及第三方服务集成的健壮性问题。
    - **链接**: [Issue #24675](https://github.com/openai/codex/issues/24675)

7.  **[#25719] macOS 上 Codex Desktop 反复触发 `syspolicyd`/`trustd` 进程导致 CPU 和内存飙升**
    - **影响场景**: macOS 用户。
    - **问题范围**: Codex Desktop 应用导致系统安全相关的`syspolicyd` 和 `trustd` 进程占用大量 CPU 和内存，影响系统整体性能。
    - **社区反应**: 20 条评论，20 个👍，指出了桌面应用与 macOS 系统层的潜在兼容性问题。
    - **链接**: [Issue #25719](https://github.com/openai/codex/issues/25719)

8.  **[#12029] 支持同时使用多个账户**
    - **影响场景**: 需要在一台机器上同时使用个人和公司 Codex 账户的用户。
    - **问题范围**: 当前设计中，所有 Codex 交互面（VS Code、CLI、Desktop）共享同一份认证信息，无法分区管理多个账户和策略。
    - **社区反应**: 9 条评论，43 个👍，表明多账户支持是一项呼声很高的功能需求。
    - **链接**: [Issue #12029](https://github.com/openai/codex/issues/12029)

9.  **[#26149] Windows + WSL 上反复扫描 `.codex/.tmp/plugins` 目录导致严重延迟**
    - **影响场景**: Windows Desktop 与 WSL 项目协作开发。
    - **问题范围**: 每次命令或工具调用，Codex 都会通过 `/mnt/c` 路径扫描 `.codex/.tmp/plugins`，造成严重延迟。在 WSL 内部直接使用 CLI 则没有问题。
    - **社区反应**: 10 条评论，16 个👍，进一步揭示了 WSL 环境下的性能瓶颈细节。
    - **链接**: [Issue #26149](https://github.com/openai/codex/issues/26149)

10. **[#25249] Windows 下半透明侧边栏导致窗口最大化时渲染异常**
    - **影响场景**: Windows 上启用了半透明侧边栏外观的用户。
    - **问题范围**: 窗口最大化后，左侧和顶部区域渲染失败，出现透明/未绘制区域。
    - **社区反应**: 15 条评论。这是一个特定的桌面渲染 Bug。
    - **链接**: [Issue #25249](https://github.com/openai/codex/issues/25249)

## 重要 PR 进展

1.  **[#27101] 通过注入的 Provider 加载用户指令**
    - **内容**: 将用户指令的加载职责从 `codex-core` 中解耦，通过注入的 `UserInstructionsProvider` 实现。这有助于模块化和在没有主环境时也能加载用户指令。
    - **链接**: [PR #27101](https://github.com/openai/codex/pull/27101)

2.  **[#26953] 为 Python SDK 添加专用的目标操作**
    - **内容**: 为 Python SDK 提供一套与 TUI 对齐的持久化目标 API，使外部调用者能以更简洁的方式驱动和管理 Agent 的目标。
    - **链接**: [PR #26953](https://github.com/openai/codex/pull/26953)

3.  **[#27107] 为 `run_turn` 添加跟踪跨度**
    - **内容**: 在 app-server 的 `run_turn` 流程中添加更细粒度的 `run_turn.*` 跟踪跨度，以分离和分析编排、请求准备、提示预处理和工具加载的开销，便于性能优化。
    - **链接**: [PR #27107](https://github.com/openai/codex/pull/27107)

4.  **[#27105] 从使用数据刷新账户计划**
    - **内容**: 将 `/usage` 接口返回的账户计划视为权威数据，用于更新内存中的账户计划，同时保留认证令牌中的计划信息作为后备。
    - **链接**: [PR #27105](https://github.com/openai/codex/pull/27105)

5.  **[#27106] 移除远程压缩失败日志**
    - **内容**: 移除了 `log_remote_compact_failure` 日志记录，并清理了相关的、不再使用的数据结构，简化了压缩路径。
    - **链接**: [PR #27106](https://github.com/openai/codex/pull/27106)

6.  **[#27103] 为 v2 压缩报告缓存的输入令牌数**
    - **内容**: 在压缩分析事件中添加了 `cached_input_tokens` 字段，仅从 v2 压缩的响应使用情况中填充，以增加对提示缓存使用的可见性。
    - **链接**: [PR #27103](https://github.com/openai/codex/pull/27103)

7.  **[#27017] 修复 Windows 中 exec 运行时的 `deny_read` 问题**
    - **内容**: 针对 Windows 平台，修复了 `shell_command` 和 `exec_command` 在执行时未正确处理 `deny_read` 文件系统覆盖规则的问题，以确保安全策略生效。
    - **链接**: [PR #27017](https://github.com/openai/codex/pull/27017)

8.  **[#27062] 重试临时性的 Guardian 审查失败**
    - **内容**: 当使用“自动审查”功能时，如果内部“Guardian”审查会话因临时性报错失败，将自动重试，以提升自动权限审批的健壮性。
    - **链接**: [PR #27062](https://github.com/openai/codex/pull/27062)

9.  **[#27039] 添加分离的异步命令钩子**
    - **内容**: 允许配置为 `async: true` 的命令钩子以非阻塞方式运行，不会影响主命令执行流程，并限制其不能修改用户文件或状态。
    - **链接**: [PR #27039](https://github.com/openai/codex/pull/27039)

10. **[#26880] 为 worktree Git 读取保留 fsmonitor**
    - **内容**: 修复了 Codex 在内部执行 Git 命令时强制禁用 `core.fsmonitor` 的问题，该操作导致在大型仓库中读取工作树（worktree）时速度变慢。
    - **链接**: [PR #26880](https://github.com/openai/codex/pull/26880)

## 功能需求归类

从今日的 Issues 和 PRs 中，可以观察到以下用户反复提及的功能方向：

- **Windows 与 WSL 兼容性**：用户频繁报告 Windows 平台（特别是与 WSL 结合时）的性能问题、认证问题、渲染问题以及文件系统扫描问题。这反映出 Windows + WSL 是 Codex 用户的一个重要场景，但其体验远未达到优化状态。
- **用户界面与交互控制**：用户希望获得更精细的控制权，例如禁用长提示自动转换为附件（#25144）、管理多个账户（#12029）、以及控制窗口/会话的恢复行为（#27104）。
- **模型管理与使用体验**：`gpt-5.5` 模型的 “404” 错误（#26892）是当前最严重的问题，直接阻碍了用户使用最新模型。此外，关于 `/compact` 命令的 API 参数兼容性问题（#21671）也表明用户对上下文管理稳定性的高要求。
- **开发者体验与扩展性**：对钩子系统（Hooks）的补全（#21753）、子代理（Subagent）的更好管理（#22321）以及 Python SDK 功能的丰富（#26953），表明开发者社区正在推动 Codex 作为一个可编程平台的能力。

## 开发者关注点

- **WSL 性能瓶颈是首要痛点**：多个高热度 Issue（#25715, #26149）集中反映了在 Windows 上使用 WSL 作为开发环境时的性能和稳定性问题，核心在于文件系统和进程间通信的效率。
- **认证与账户管理体验不佳**：GitHub OAuth 失败（#25203）和第三方连接器缓存问题（#24675）导致用户频繁遇到登录和连接障碍。同时，多账户切换的需求（#12029）呼声很高。
- **模型服务的可靠性与透明度**：`gpt-5.5` 的问题表明，即使模型在本地被标记为可用，后端服务的不一致也会导致严重的中断。用户需要更可靠的模型可用性状态反馈。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

好的，这是为您生成的 2026-06-09 Gemini CLI 社区动态日报。

---

## 2026-06-09 Gemini CLI 社区动态日报

**日报摘要**: 今日发布了 `v0.47.0-nightly` 版本，主要调整了反重力过渡横幅的显示频率。社区讨论热度集中在 Agent 的稳定性与自主决策能力上，其中“通用代理挂起”和“子代理误报成功”是用户反馈最为强烈的问题。同时，多项针对自动内存（Auto Memory）和远程代理的安全性与质量控制议题也在持续跟进中。

---

### 版本发布

**v0.47.0-nightly.20260609.g0567b25a2 发布**
- 新版本主要调整了 `Antigravity` 过渡横幅的最大显示次数，以减少对用户的干扰。
- 同时移除了浏览器代理文档中的“实验性”标签，暗示其功能正逐步成熟。
- [查看发布详情](https://github.com/google-gemini/gemini-cli/releases/tag/v0.47.0-nightly.20260609.g0567b25a2)

---

### 社区热点 Issues

1. **[Bug] 通用代理挂起 (#21409)**
   - **影响场景**: 当 `gemini-cli` 将任务委托给“通用代理”时，代理会无限期挂起，即使是创建文件夹这类简单操作也无法完成。用户反馈等待时间长达一小时。
   - **社区反应**: 该问题获得 8 个👍，表明影响范围较广。用户发现的临时解决方案是手动指示模型不要使用子代理。
   - [查看详情](https://github.com/google-gemini/gemini-cli/issues/21409)

2. **[Bug] 子代理错误报告“成功”状态 (#22323)**
   - **影响场景**: 当子代理（如 `codebase_investigator`）达到最大轮次限制时，主系统会错误地报告其因“达成目标”而成功终止，但实际上并未完成任何分析工作。
   - **问题范围**: 这是一个严重的状态报告错误，导致用户误以为任务已完成，从而隐藏了潜在的中断或失败。
   - [查看详情](https://github.com/google-gemini/gemini-cli/issues/22323)

3. **[Bug] 代理不主动使用自定义技能和子代理 (#21968)**
   - **影响场景**: 用户反馈，即使已经配置了自定义技能（如 `gradle`、`git`），模型在日常工作中也几乎从不主动调用它们，需要明确指令才会执行。
   - **问题范围**: 削弱了自定义技能和子代理的功能价值，导致用户配置后无法获得自动化的效率提升。
   - [查看详情](https://github.com/google-gemini/gemini-cli/issues/21968)

4. **[Bug & Feature] 自动内存（Auto Memory）系统的多项问题**
   - **影响场景**: 自动内存系统在安全性和效率上暴露多个问题：
     - **#26525** 秘密泄露风险：内容在被发送给模型处理之前未进行确定性脱敏，日志也可能记录敏感内容。
     - **#26522** 无限重试：自动内存会无限重试处理低价值的对话会话，造成资源浪费。
     - **#26523** 无效补丁文件：系统会忽略无效的内存补丁文件，导致后台代理可能反复处理这些“垃圾”文件，增加不必要的开销。
   - [查看 #26525](https://github.com/google-gemini/gemini-cli/issues/26525) | [查看 #26522](https://github.com/google-gemini/gemini-cli/issues/26522) | [查看 #26523](https://github.com/google-gemini/gemini-cli/issues/26523)

5. **[Bug] Shell 命令执行后卡死 (#25166)**
   - **影响场景**: 模型执行完一个简单的 Shell 命令后，终端仍显示该命令处于活动状态并等待输入，导致整个交互流程卡住，无法进行下一步。
   - **问题范围**: 这是一个核心交互流程的阻断性 Bug，严重影响了使用体验。
   - [查看详情](https://github.com/google-gemini/gemini-cli/issues/25166)

6. **[Bug] 浏览器代理在 Wayland 环境下失败 (#21983)**
   - **影响场景**: 在 Wayland 显示协议下运行，浏览器子代理会直接失败并退出，影响基于 Linux 的开发者使用该功能。
   - **问题范围**: 平台兼容性问题，限制了浏览器代理在特定系统环境下的可用性。
   - [查看详情](https://github.com/google-gemini/gemini-cli/issues/21983)

7. **[Bug] 代理工具数量超过128个时报错 (#24246)**
   - **影响场景**: 当启用大量技能或代理时，Gemini CLI 会遇到 400 错误，无法正常运行。用户期望代理能智能地限制可选工具的范围。
   - **问题范围**: 随着功能扩展，工具集增大，系统遇到了可扩展性瓶颈。
   - [查看详情](https://github.com/google-gemini/gemini-cli/issues/24246)

8. **[Bug & Feature] 浏览器代理忽略设置覆盖 (#22267)**
   - **影响场景**: 用户在 `settings.json` 中配置的浏览器代理参数（如 `maxTurns`）被完全忽略。虽然程序能正确读取配置，但实际运行时并未生效。
   - **问题范围**: 配置系统与运行逻辑脱节，导致用户的自定义设置无效。
   - [查看详情](https://github.com/google-gemini/gemini-cli/issues/22267)

9. **[Bug] 子代理未经授权自动运行 (#22093)**
   - **影响场景**: 用户在所有配置中都将代理模式设为“禁用”，但更新到 `v0.33.0` 版本后，子代理（如 `generalist`）开始自动运行。
   - **社区反应**: 用户预期仅使用 MCP 功能，但子代理的异常激活打破了其安全预期和控制。
   - [查看详情](https://github.com/google-gemini/gemini-cli/issues/22093)

10. **[Bug] 模型在随机位置创建临时脚本 (#23571)**
    - **影响场景**: 为规避直接 Shell 执行的限制，模型倾向于在各种目录下创建大量临时编辑脚本，导致工作区混乱，难以清理并提交干净的工作。
    - **问题范围**: 模型的行为策略问题，增加了用户的后期清理成本。
    - [查看详情](https://github.com/google-gemini/gemini-cli/issues/23571)

---

### 重要 PR 进展

1. **修复 Vertex AI 模型映射 (#27749)**
   - **内容**: 修复了在非 API Key 或非 Vertex AI 认证方式下，`gemini-3.5-flash` 模型 ID 不被 CCPA 接受的问题。
   - [查看详情](https://github.com/google-gemini/gemini-cli/pull/27749)

2. **截断遥测属性以防止 GCP 导出错误 (#27729)**
   - **内容**: 修复了遥测指标因属性超过1024字符限制而导致终端刷新大量 Node.js 错误栈的问题。这是影响企业用户使用 JSON 格式输出的关键修复。
   - [查看详情](https://github.com/google-gemini/gemini-cli/pull/27729)

3. **修正 CJK 字符渲染空白问题 (#27505)**
   - **内容**: 修复了在 Shell 输出中，CJK（中日韩）宽字符之间被错误插入额外空格的渲染 Bug，提升了国际化用户的体验。
   - [查看详情](https://github.com/google-gemini/gemini-cli/pull/27505)

4. **零配额限额失败快速响应 (#27698)**
   - **内容**: 修复了当账户配额为零时，系统陷入10次无意义重试循环的 Bug，实现了快速失败，避免了无限等待。
   - [查看详情](https://github.com/google-gemini/gemini-cli/pull/27698)

5. **MCP 工具发现的原子性更新 (#27619)**
   - **内容**: 修复了因网络瞬断导致 MCP 工具丢失、报错“tool not found”的问题。通过原子性更新策略确保工具注册表在失败时保留最后一次成功的数据。
   - [查看详情](https://github.com/google-gemini/gemini-cli/pull/27619)

6. **修复无限循环的渲染问题 (#27747)**
   - **内容**: 修复了在终端窗口过窄时，输入提示中的路径补全功能（如 `@filename:line`）会导致 CLI 冻结的无限循环 Bug。
   - [查看详情](https://github.com/google-gemini/gemini-cli/pull/27747)

7. **防御 DNS 主机名绕过 SSRF 检测 (#27744 & #27739)**
   - **内容**: 这两个 PR 旨在增强 `web_fetch` 工具的安全性，阻止利用 DNS 解析（如 `nip.io`）或重定向绕过 SSRF 防护，访问内网 IP 的攻击行为。
   - [查看 #27744](https://github.com/google-gemini/gemini-cli/pull/27744) | [查看 #27739](https://github.com/google-gemini/gemini-cli/pull/27739)

8. **修复 Docker 镜像检测异常 (#27428)**
   - **内容**: 修复了当 Docker 启用构建工具包（DOCKER_BUILDKIT）输出信息到 stderr 时，`imageExists` 方法因错误解析标准输出而返回假阴性的问题。改用 `docker inspect` 的退出码判断，更加可靠。
   - [查看详情](https://github.com/google-gemini/gemini-cli/pull/27428)

9. **防止模型在处理二进制文件时产生幻觉 (#27412)**
   - **内容**: 修复了模型读取 PDF 等二进制文件后，基于文件返回的简短描述文本注入虚假“分析”内容的问题。优化了函数响应以逼制模型产生幻觉。
   - [查看详情](https://github.com/google-gemini/gemini-cli/pull/27412)

10. **实现程序化扩展搜索命令 (#22586)**
    - **内容**: 引入了 `/extensions search` 命令，允许用户通过文本指令在 CLI 内搜索和发现扩展插件，提供了一种不依赖浏览器的使用方式。
    - [查看详情](https://github.com/google-gemini/gemini-cli/pull/22586)

---

### 功能需求归类

从近期的 Issues 中，可以识别出以下几个用户反复提及的功能方向：

- **Agent 稳定性与可靠性**：大量反馈集中在 Agent（尤其是通用 Agent 和子 Agent）的挂起、状态报告不准确、行为不一致等问题。用户的核心诉求是 Agent 能按预期完成任务并给出准确反馈，而不是掩藏问题。
- **Agent 自主决策能力优化**：用户希望 Agent 能更智能地自主调用子代理和自定义技能（#21968），而不是依赖用户明确指令。这包括在工具数量众多时（#24246）能自动筛选。
- **自动内存（Auto Memory）系统质量控制**：用户不仅希望有记忆功能，更期望系统能安全、高效地运行。这涉及脱敏处理（#26525）、避免无效资源的消耗（#26522）以及正确处理异常数据（#26523）。
- **工具与服务管理**：涉及 MCP 工具的稳定性（#27619）、代理对 Docker 等外部依赖的准确判断（#27428）、以及配置系统（如 `settings.json`）的强制执行（#22267）。
- **Shell 执行与终端体验**：包括命令执行后卡死（#25166）、CJK 字符渲染（#27505）以及终端窗口调整时的闪烁和性能问题（#21924）。

---

### 开发者关注点

近期开发者反馈中的核心痛点和高频需求包括：

- **Agent 的“坏消息”隐藏**：子代理（#22323）在实际失败时报告为成功，以及无法主动使用已配好的技能，这些行为让开发者感觉难以信任 Agent 的执行结果，似乎在“作弊”或“偷懒”。
- **高频的挂起与卡死问题**：无论是通用代理（#21409）还是简单的 Shell 命令（#25166）都可能无限期挂起，这极大地破坏了编码的连续性和效率。
- **安全与权限控制的担忧**：子代理的自动启用（#22093）、内存系统潜在的秘密泄露风险（#26525）以及 SSRF 防御漏洞（#27744, #27739）都引发了开发者对 CLI 安全性的担忧，尤其是在企业环境中。
- **本地环境兼容性问题**：Wayland 下的浏览器代理失败（#21983）表明在不同系统环境下的稳定性和可用性仍是需要补齐的短板。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-06-09

## 今日更新概览

过去 24 小时内，Copilot CLI 仓库无新版本发布；共 34 条 Issue 有更新，其中 7 条为当日新建。社区讨论集中在**会话管理**（如暂停会话、多会话管理）、**模型兼容性**（GPT-5.5、Claude Opus 4.6 报错）以及**键盘输入体验**（Vi 模式、ESC 行为）上。此外，一项修复安装脚本的 PR 合并关闭。

---

## 版本发布

无。

---

## 社区热点 Issues（精选 10 条）

### 1. [#1928 – 允许暂停 Copilot 工作会话](https://github.com/github/copilot-cli/issues/1928)
- **标签**：`area:sessions`
- **动态**：创建于 3 月，更新于 6 月 8 日，评论 9 条，👍 2
- **摘要**：当任务方向错误时，用户希望能“暂停”当前会话并输入额外指令，而非终止或重开。目前只能通过提交文本来微调，但缺少临时挂起机制。社区建议增加 `--pause` 或类似指令。

### 2. [#13 – 要求支持 Vi/Vim 输入模式](https://github.com/github/copilot-cli/issues/13)
- **标签**：`area:input-keyboard`
- **动态**：创建于 2025 年 9 月，更新于 6 月 8 日，评论 7 条，👍 63（历史最高点赞）
- **摘要**：核心诉求是为 CLI 交互式输入提供 Vi 模式，方便键盘驱动导航和编辑。该 Issue 长期活跃，反映大量用户对模态编辑器的需求。

### 3. [#3547 – 后台子代理在模型为 gpt-5.5 时永久挂起](https://github.com/github/copilot-cli/issues/3547)
- **标签**：`area:agents`, `area:models`
- **动态**：创建于 5 月 28 日，更新于 6 月 8 日，评论 6 条
- **摘要**：父代理调用后台子代理（`task` 工具）并指定 `model="gpt-5.5"` 时，子代理状态显示 `running` 但 `total_turns: 0`，不再继续执行，也无超时或错误提示。涉及模型兼容性问题。

### 4. [#3436 – /mcp search 对自定义 MCP 注册表构建错误 URL](https://github.com/github/copilot-cli/issues/3436)
- **标签**：`area:enterprise`, `area:mcp`
- **动态**：创建于 5 月 20 日，更新于 6 月 8 日，评论 5 条
- **摘要**：1.0.49 引入的实验性 `/mcp search` 命令调用 `{registryUrl}/servers` 而非 `{registryUrl}/v0.1/servers`，导致自托管 MCP 注册表返回 404。影响企业用户自定义注册的搜索功能。

### 5. [#2867 – Claude Opus 4.6 (high) 在配额重置后返回“模型不支持”](https://github.com/github/copilot-cli/issues/2867)
- **标签**：`area:models`
- **动态**：创建于 4 月 21 日，更新于 6 月 8 日，评论 5 条
- **摘要**：用户收到 CLI 提示等待配额重置后，重试时仍返回 400 错误 “The requested model is not supported”。怀疑是服务端状态未同步或 CLI 缓存问题。

### 6. [#2540 – 插件定义的 preToolUse 钩子在主会话和子代理中均未触发](https://github.com/github/copilot-cli/issues/2540)
- **标签**：`area:sessions`, `area:agents`, `area:plugins`
- **动态**：创建于 4 月 6 日，更新于 6 月 8 日，评论 4 条，👍 3
- **摘要**：插件 `hooks.json` 中定义 `preToolUse` 钩子后，无论主会话还是子代理（通过 `task` 工具产生）都未执行。与已有 #2392 问题（配置钩子在子代理中失效）部分重叠。

### 7. [#3652 – WSL 下 Copilot Chat 启动延迟 40-80 秒](https://github.com/github/copilot-cli/issues/3652)
- **标签**：`area:sessions`, `area:platform-windows`
- **动态**：创建于 6 月 3 日，更新于 6 月 8 日，评论 3 条
- **摘要**：在 VS Code + WSL (Ubuntu) 环境中，Copilot Chat 因 `listSessions` 调用耗时导致启动长达 40–80 秒。Windows 11 主机，教育版 Quota。疑似 WSL 文件系统延迟。

### 8. [#3701 – Windows 上 MCP 服务器频繁重生成（IDE 锁文件监控循环）](https://github.com/github/copilot-cli/issues/3701)（已关闭）
- **标签**：`area:platform-windows`, `area:mcp`
- **动态**：创建于 6 月 5 日，关闭于 6 月 8 日，评论 2 条
- **摘要**：版本 1.0.60 下，当 VS Code 集成激活时，MCP 服务器（如 Playwright）被反复重启，导致 IDE 锁文件监控触发死循环。已关闭，可能已修复或需进一步确认。

### 9. [#2966 – 内置多会话管理工具需求](https://github.com/github/copilot-cli/issues/2966)
- **标签**：`area:sessions`
- **动态**：创建于 4 月 24 日，更新于 6 月 8 日，评论 2 条
- **摘要**：高级用户常同时运行多个会话（跨仓库/分支/任务），但 CLI 缺少原生管理能力（列出、切换、查看状态）。建议加入类似 `tmux` 的会话面板。

### 10. [#3688 – 资源路径解析不一致：自定义代理、技能与 .mcp.json 基目录不同](https://github.com/github/copilot-cli/issues/3688)
- **标签**：`area:agents`, `area:configuration`
- **动态**：创建于 6 月 5 日，更新于 6 月 8 日，评论 1 条，👍 1
- **摘要**：自定义代理的 `.agent.md` 以 git root 为基准，而技能和 `.mcp.json` 以当前工作目录（cwd）为基准，导致同一仓库内资源定位不一致。可能引发混淆和工具加载失败。

---

## 重要 PR 进展（共 1 条合并）

### [#1960 – install: 使用 GITHUB_TOKEN 进行认证请求](https://github.com/github/copilot-cli/pull/1960)
- **作者**：@devm33
- **状态**：合并（6 月 8 日）
- **摘要**：当环境变量 `GITHUB_TOKEN` 存在时，安装脚本会将其作为 `Authorization` 头传递给 curl/wget 下载，并在 `git ls-remote` 中嵌入 token，避免速率限制并支持从私有仓库安装。修复了企业用户或 CI 环境下的安装失败问题。

---

## 功能需求归类

根据近期 Issue 中的重复诉求，可将用户需求归纳为以下方向：

| 归类方向 | 代表性 Issue | 核心诉求 |
|----------|--------------|----------|
| **会话管理** | #1928, #2966 | 暂停/恢复会话、多会话可见性与切换 |
| **键盘输入体验** | #13, #3720, #3715 | Vi 模式、ESC 保存历史、模型选择交互一致 |
| **模型与 BYOK 兼容性** | #3547, #2867, #3709, #3707 | 新模型支持、自定义模型列表、成本优化 |
| **插件钩子系统** | #2540, #2201, #3713 | 钩子未触发、修改 prompt、输出增强 |
| **Windows/WSL 体验** | #3652, #3701, #3662, #3724 | 启动性能、MCP 循环、卸载困难、剪贴板冲突 |
| **MCP 与企业部署** | #3436, #3477, #3688 | 注册表 URL 错误、OTel mTLS、资源路径不一致 |

---

## 开发者关注点

- **模型行为异常**：指定模型（gpt-5.5、Claude Opus 4.6）后出现永久挂起或“不支持”错误，说明模型兼容性和配额同步逻辑仍需打磨。
- **输入交互割裂**：`/model` 选用箭头键，后续步骤却用数字输入，用户被迫切换操作模式；ESC 无法保存输入历史，造成反直觉体验。
- **插件钩子未生效**：`preToolUse` Hook 完全无声，开发者只能通过阅读源码或社区 issue 发现，缺乏反馈机制。
- **Windows 平台边缘情况**：WSL 启动延迟、安装/卸载困难、MCP 服务器失控等问题集中，建议维护团队增加 Win32 测试覆盖。
- **路径解析不一致**：`.agent.md` 与 `.mcp.json` 等配置文件基目录不同，可能导致团队项目中工具加载失败，影响标准化配置推广。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-06-09

## 今日更新概览

过去 24 小时内，Kimi Code CLI 仓库无新版本发布，无新 Pull Request 合并或创建。社区提交了 4 条有更新的 Issue，主要涉及**安装流程异常**、**API Key 认证退化**以及**新版本对 `@filename` 语法的兼容性回归**。官方暂未就这些 Issue 给出正式回复。

## 版本发布

无

## 社区热点 Issues

以下为过去 24 小时内更新或创建的所有 4 条 Issue，均已收录。

### 1. [Bug] 安装成功但 CLI 状态显示不一致
- **Issue #2436**（OPEN，6月8日更新）
  用户 `@pleabargain` 反馈：在 `kimi-cli` v1.47.0 版本安装过程中，终端显示 “The new Kimi Code is installed ✓” 后紧接着提示 “Kimi can't seem to make up her mind.”，怀疑安装逻辑存在竞态条件或状态机异常。该 Issue 有 1 条评论，无新增点赞。
  👉 [查看详情](https://github.com/MoonshotAI/kimi-cli/issues/2436)

### 2. [Bug] 新版本 0.11.0 删除了 API Key 认证途径
- **Issue #2442**（OPEN，6月8日创建）
  用户 `@andrew-sz` 在 macOS 上使用 0.11.0 版本（对应 Kimi Code 平台、模型 2.6）时发现：**API Key 认证方式被静默移除**，导致无法通过传统 API Key 方式登录工作流。用户定性为回归缺陷（Regression）。当前无评论。
  👉 [查看详情](https://github.com/MoonshotAI/kimi-cli/issues/2442)

### 3. [Bug] 新版本 0.11.0 不再支持 `@filename` 语法
- **Issue #2441**（OPEN，6月8日创建）
  用户 `@Liufangyu` 以中英文双语反馈：升级至 0.11.0 后，此前可用的 `@filename` 文件引用语法失效。该用户未指定平台与模型，但指出此改动破坏了已有工作流程，影响范围涉及所有依赖文件引用功能的脚本和自动化操作。
  👉 [查看详情](https://github.com/MoonshotAI/kimi-cli/issues/2441)

### 4. [Enhancement] 文档 Pages 应添加已弃用提示
- **Issue #2376**（CLOSED，6月8日更新）
  贡献者 `@MengyangGao` 提出：GitHub Pages 上的文档（`moonshotai.github.io/kimi-cli/`）未标明 Python 版 `kimi-cli` 已被 TypeScript 重写版 `kimi-code` 取代，用户可能混淆。该 Issue 已于 6 月 8 日关闭，但未注明处理结果。推测可能在文档仓库中已添加弃用横幅或后续跟进。
  👉 [查看详情](https://github.com/MoonshotAI/kimi-cli/issues/2376)

## 重要 PR 进展

无

## 功能需求归类

今日更新的 4 条 Issue 中，**Bug 类占 3 条**，**文档类占 1 条**。尚未出现明确的新功能需求或 Feature Request。从用户反馈可初步归类出以下方向：

| 方向 | 对应 Issue | 关键词 |
|------|-----------|--------|
| 安装稳定性 | #2436 | 安装流程、状态不一致 |
| 认证方式 | #2442 | API Key 被移除、回归 |
| 语法兼容性 | #2441 | `@filename` 文件引用 |
| 文档改版 | #2376 | TypeScript 重写、弃用提示 |

## 开发者关注点

- **升级 0.11.0 的迁移成本高**：两条 Issue（#2442、#2441）均指向 0.11.0 版本在认证方式和文件引用语法上的破坏性变更，开发者需评估是否推迟升级或等待补丁。
- **安装体验仍需打磨**：#2436 反映即便显示安装成功，也可能出现状态迷思，影响持续集成/自动化脚本的可靠判断。
- **项目迁移信息透明度不足**：#2376 虽然已关闭，但用户对 Python 版 vs TypeScript 版的区分仍有困惑，建议官方在显眼位置标注版本路线。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-06-09

## 今日更新概览

过去 24 小时，社区活跃度保持高位：共 50 条 Issue 更新、50 条 PR 更新。其中 `undo` 不撤销文件更改（#5474）依然是讨论热度最高的议题，新出现的 `session_message.seq` 约束错误（#31413、#31412、#31204）成为新的阻塞性回归 bug。修复方面，JSON 格式流输出不完整（#31434、#31446）、MCP 目录分页（#31442）、非 TTY 环境 spinner 乱码（#31444）等 PR 已提交或合并。

## 版本发布

无新版本发布。

## 社区热点 Issues

以下选取 10 条值得关注的 Issue，按讨论热度或近期影响排序。

1. **#5474 – `/undo` 命令不撤销文件更改，仅回滚对话消息**
   [链接](https://github.com/anomalyco/opencode/issues/5474)
   `status: OPEN` | 更新: 06-09 | 评论: 28
   核心问题：`/undo` 后 AI 对文件的增删改依然保留，导致用户体验割裂。该问题已持续超过 6 个月，社区多次呼吁修复。

2. **#27167 – 提议添加原生会话目标（`/goal`）功能**
   [链接](https://github.com/anomalyco/opencode/issues/27167)
   `status: OPEN` | 更新: 06-08 | 评论: 37
   用户希望像其他 AI IDE 一样支持持久化会话目标声明，便于 AI 在长会话中保持上下文一致性。获得 65 个 👍。

3. **#29548 – OpenAI provider 超时 regression（`headerTimeout` 需手动增加）**
   [链接](https://github.com/anomalyco/opencode/issues/29548)
   `status: OPEN` | 更新: 06-08 | 评论: 11
   从 1.14.28 升级到 1.15.11 后，OpenAI 请求在 10 秒内超时，用户尝试增加 `headerTimeout` 解决。疑似代码变更导致的回归。

4. **#30948 – 1.16.0 `amazon-bedrock` provider 对兼容网关返回空输出**
   [链接](https://github.com/anomalyco/opencode/issues/30948)
   `status: CLOSED` | 更新: 06-08 | 评论: 8
   使用 Bedrock 兼容网关时，provider 返回空内容；该配置在旧版本正常工作。已关闭，表明修复已合并或确认非 bug。

5. **#31247 – Opus 4.8（GitHub Copilot）泄露文字工具调用文本并触发 prefill 400 错误**
   [链接](https://github.com/anomalyco/opencode/issues/31247)
   `status: OPEN` | 更新: 06-09 | 评论: 6
   在长会话中，Claude Opus 4.8 模型会将工具调用代码（如 `call read`, `call edit`）泄露到正常回复中，进而导致后续请求因 `assistant prefill` 格式错误而失败。

6. **#15535 – 支持 MCP Resources（`resources/read`）**
   [链接](https://github.com/anomalyco/opencode/issues/15535)
   `status: OPEN` | 更新: 06-09 | 评论: 6
   用户希望 OpenCode 不仅利用 MCP Tools，还能读取 MCP 服务器暴露的资源（如文件、数据库表），以扩展 AI 的上下文访问范围。

7. **#13430 – [Web UI] 消息中的 `file:line` 引用应可点击跳转**
   [链接](https://github.com/anomalyco/opencode/issues/13430)
   `status: OPEN` | 更新: 06-09 | 评论: 5
   在 Web UI 中，AI 回复中的文件路径+行号不是超链接，无法直接点击打开编辑器跳转。降低开发效率。

8. **#31430 – Bedrock Mantle 下 GPT 5.5 偶发返回空成功响应，导致任务中断**
   [链接](https://github.com/anomalyco/opencode/issues/31430)
   `status: OPEN` | 更新: 06-09 | 评论: 3
   使用 `@ai-sdk/amazon-bedrock/mantle` 时，GPT 5.5 间歇返回空但状态为成功的响应，AI 任务在无错误提示下停止。

9. **#31441 – [UI] 顶部导航栏的文件夹等按钮消失（v1.16+）**
   [链接](https://github.com/anomalyco/opencode/issues/31441)
   `status: OPEN` | 创建: 06-09 | 评论: 2
   用户反馈升级到 1.14 后仍正常，但当前版本丢失了文件夹浏览等导航按钮。

10. **#31406 – [FEATURE] Web UI 应支持内置编辑器打开文件路径**
    [链接](https://github.com/anomalyco/opencode/issues/31406)
    `status: OPEN` | 更新: 06-08 | 评论: 2
    与 #13430 相关但更通用：期望所有文件路径（包括聊天历史中的）能在内置编辑器内直接打开，而非仅链接。

## 重要 PR 进展

以下 PR 在过去 24 小时内提交或更新，涉及 bug 修复与功能增强。

1. **#31434 / #31446 – 修复 `opencode run --format json` 流式输出不完整**
   [链接](https://github.com/anomalyco/opencode/pull/31434) | `status: CLOSED`
   [链接](https://github.com/anomalyco/opencode/pull/31446) | `status: OPEN`
   `session.status = idle` 过早触发导致 text、step-finish 等事件丢失。PR 跟踪待处理事件数，确保所有输出排放后再退出。

2. **#31442 – MCP 目录支持分页**
   [链接](https://github.com/anomalyco/opencode/pull/31442) | `status: OPEN`
   在列举 Tools、Prompts、Resources 时跟随 MCP 游标分页，提升大型 MCP 服务器的兼容性与稳定性。

3. **#31329 – 优雅处理 PDF/图片文件读取失败**
   [链接](https://github.com/anomalyco/opencode/pull/31329) | `status: OPEN`
   解决因文件损坏/权限不足导致的会话崩溃，返回错误信息而非抛出异常。

4. **#31444 – 非 TTY 环境下禁用 spinner 动画**
   [链接](https://github.com/anomalyco/opencode/pull/31444) | `status: OPEN`
   在 CI、重定向输出等场景下，防止 `@clack/prompts` 输出 ANSI 乱码行。

5. **#31447 – 修复 `OPENCODE_CONFIG_DIR` 指向不存在目录时的启动崩溃**
   [链接](https://github.com/anomalyco/opencode/pull/31447) | `status: OPEN`
   `ensureGitignore` 在目录缺失时抛出 `ENOENT`；PR 确保先创建目录。

6. **#31448 – 修复 v2 布局聊天面板底部圆角缺失**
   [链接](https://github.com/anomalyco/opencode/pull/31448) | `status: OPEN`
   给外层容器添加 `overflow-hidden`，使 `rounded-[10px]` 生效。

7. **#31440 – 重试网络瞬时错误（ECONNRESET 等）**
   [链接](https://github.com/anomalyco/opencode/pull/31440) | `status: OPEN`
   当请求因网络中断失败时，自动重试而非直接暴露原始错误内容给用户。

8. **#30332 – 为所有 OpenRouter 模型生成 reasoning 变体**
   [链接](https://github.com/anomalyco/opencode/pull/30332) | `status: CLOSED`
   原代码仅对包含 `gpt` 的模型名生成 reasoning variant，修复后所有模型均可获得。

9. **#30190 – OpenRouter 的 prompt cache TTL 改为 opt-in**
   [链接](https://github.com/anomalyco/opencode/pull/30190) | `status: OPEN`
   将 1 小时缓存（`ttl: "1h"`）通过环境变量控制，默认保持 5 分钟，避免部分用户缓存过期异常。

10. **#30658 – ACP 协议：从 `todowrite` 工具调用发射 plan session 更新**
    [链接](https://github.com/anomalyco/opencode/pull/30658) | `status: OPEN`
    增强 ACP 兼容性，使外部客户端能实时收到计划更新事件。

## 功能需求归类

从近期 Issue 中可归纳出以下高频需求方向（无优先级排序）：

| 方向 | 典型 Issue |
|------|-----------|
| **会话目标与持久化上下文** | #27167（`/goal`）、#16960（压缩丢失 AGENTS.md 指令） |
| **撤销与回滚机制改进** | #5474（`/undo` 不撤销文件）、#31247（工具调用泄漏导致回滚困难） |
| **MCP 资源支持** | #15535（除 tools 外还需 resources/read） |
| **Web UI 交互增强** | #13430（可点击文件引用）、#31406（内置编辑器）、#31441（导航按钮丢失） |
| **新模型/供应商兼容** | #31247（Opus 4.8）、#31430（GPT 5.5 / Bedrock Mantle）、#31180（MiniMax M3 thinking 模式） |
| **支付扩展** | #23153（加密货币支付） |
| **配置与稳定性** | #29548（headerTimeout）、#25293（插件缓存）、#21737（自定义 provider API key 丢失） |

## 开发者关注点

1. **数据库迁移导致的回归**：`session_message.seq NOT NULL` 约束（#31204、#31413、#31412）在 1.15.13 版本后出现，影响所有创建新消息的操作（TUI 交互、REST API、`opencode run`）。需尽快修复或回滚迁移。
2. **非交互模式流式输出不完整**：`--format json` 在静默/CI 环境下无法拿到完整 assistant 回复，正在通过跟踪待处理事件解决（#31434）。
3. **模型幻觉与工具调用泄漏**：Opus 4.8 将工具调用文本混入回复（#31247），导致下游请求报 400，说明需要更健壮的上下文清理或模型级别的检测。
4. **MCP 目录分页缺失**：之前未实现分页，导致拥有大量工具/资源的 MCP 服务器无法完整加载（#31442）。
5. **Linux/Web 输入问题**：Gboard 自动补全导致输入重复（#31427、PR#31428）；Wayland 下中键粘贴失效仍待彻底解决（PR#6370）。
6. **插件包缓存机制**：`@latest` 解析被固定在旧版本，需手动删除缓存（#25293），期望更智能的缓存失效策略。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

好的，以下是为您生成的 Qwen Code 社区动态日报。

---

# Qwen Code 社区动态日报 | 2026-06-09

## 今日更新概览

今日社区活跃度较高，共有 31 个 Issue 和 50 个 PR 在近 24 小时内有更新。开发者关注点集中在 **Daemon 模式下的 ACP 协议支持**、**内存与性能优化（特别是 OOM 问题）** 以及 **与 Claude Code 功能的兼容性**（如声明式 Agent 定义）。此外，一个关于 **v0.18.0-preview.0 版本发布失败** 的自动化 Issue 被创建，需要开发者关注。

## 版本发布

**无**。过去 24 小时内没有新的正式版本发布。但请注意有一个自动化发布的失败记录（见下方）。

- **Release 失败通知**：`v0.18.0-preview.0` 的发布工作流执行失败。详情请查看 [GitHub Actions 运行日志](https://github.com/QwenLM/qwen-code/actions/runs/27178705912)。([#4875](https://github.com/QwenLM/qwen-code/issues/4875))

## 社区热点 Issues

1.  **Daemon 能力差距跟踪**：Issue #4514 持续跟踪 `qwen serve` 功能在 v0.16-alpha 之后的剩余缺口，重点讨论了 ACP 协议的远程调用和服务器端会话管理。这是一个影响所有通过 Daemon 模式使用 Qwen Code 的用户的关键功能。([#4514](https://github.com/QwenLM/qwen-code/issues/4514))

2.  **严重 OOM 及 Escape 键问题**：`qwen --resume` 功能导致严重内存溢出 (OOM) 和 Escape 键完全失效的问题已被修复并关闭。社区在对 #4815 的 9 条评论中确认了该问题的严重性和可复现性，是近期最受关注的性能回归 Bug。([#4815](https://github.com/QwenLM/qwen-code/issues/4815))

3.  **声明式 Agent 定义**：用户 `@qqqys` 提出支持通过 Markdown 文件（YAML frontmatter）声明自定义 Agent 配置。该功能借鉴自 Claude Code，旨在降低自定义 Agent 的开发门槛。([#4821](https://github.com/QwenLM/qwen-code/issues/4821))

4.  **专用 Web Search 工具**：社区成员提议增加一个独立的 `web_search` 工具，以替代目前依赖模型自行构造 URL 进行抓取的模式，使 Qwen Code 能够像其他主流 Agent CLI 一样直接访问搜索引擎。([#4801](https://github.com/QwenLM/qwen-code/issues/4801))

5.  **ACP Streamable HTTP 传输跟踪**：Issue #4782 跟踪了 Daemon 模式下对 ACP 协议 `Streamable HTTP` 传输的支持状态。该功能使得 Zed、JetBrains 等 ACP 原生编辑器可以直接连接 Qwen Code。([#4782](https://github.com/QwenLM/qwen-code/issues/4782))

6.  **Compact 模式全屏闪烁**：在开启紧凑模式（Ctrl+O）后，工具调用批处理时会出现全屏闪烁。该 Bug 已在 #4794 中被关闭，修复方案涉及优化 `mergeCompactToolGroups` 逻辑。([#4794](https://github.com/QwenLM/qwen-code/issues/4794))

7.  **Hook 循环中的内存泄漏**：Issue #4838 报告了在 `/goal` 等长时间运行的循环中，Hook 的递归调用跳过了常规的工具结果微压缩，可能导致内存持续增长。该问题已被标记为 P1 优先级并欢迎贡献者参与修复（`welcome-pr`）。([#4838](https://github.com/QwenLM/qwen-code/issues/4838))

8.  **Vim 模式按键冲突与延迟**：Vim 模式下存在多个问题，包括 Esc 键在 INSERT 模式下的泄漏、NORMAL 模式下 Enter 键不发送以及模式指示器渲染滞后。该 Bug 已在 #4675 中被关闭。([#4675](https://github.com/QwenLM/qwen-code/issues/4675))

9.  **CI 分支保护缺失**：社区成员 `@yiliang114` 指出主分支缺少必要状态检查，导致包含失败 CI 的 PR 可以被合并，进而破坏了主分支的构建。该 Issue 建议启用强制状态检查。([#4864](https://github.com/QwenLM/qwen-code/issues/4864))

10. **Qwen Code 进程自启动路径问题**：用户 `@fantasyz` 请求让 `qwen-code` 能从其他路径启动，以避免在操作项目目录时误杀自己的进程。这反映了 Agent 在管理项目服务器时存在的进程管理痛点。([#4854](https://github.com/QwenLM/qwen-code/issues/4854))

## 重要 PR 进展

1.  **Daemon 会话空闲回收**：PR #4833 新增了一个会话空闲回收器，可以自动清理无订阅者的闲置 Daemon 会话，有助于释放服务端资源。([#4833](https://github.com/QwenLM/qwen-code/pull/4833))

2.  **Vim 模式下光标修复**：PR #4852 修复了在 CLI 文本缓冲区中，Vim 模式下的光标在遇到自动换行的行边界时无法向左移动的问题。([#4852](https://github.com/QwenLM/qwen-code/pull/4852))

3.  **新增用户级自动记忆**：PR #4764 实现了跨项目的用户偏好记忆功能，将用户个人习惯存储在 `~/.qwen/memories/` 目录，避免在每次进入新项目时都需要重新学习。([#4764](https://github.com/QwenLM/qwen-code/pull/4764))

4.  **核心重构：移除 GitService**：PR #4871 移除了基于“影子 git”的 `GitService`，并将 `/restore` 命令的功能合并到 `FileHistoryService` 中，统一了文件恢复后端。([#4871](https://github.com/QwenLM/qwen-code/pull/4871))

5.  **优化 Hook 循环内存**：PR #4840 解决了 #4838 中提到的问题，让 Hook 在长时间循环中也能定期进行微压缩，从而控制内存使用。([#4840](https://github.com/QwenLM/qwen-code/pull/4840))

6.  **声明式 Agent 前端功能**：PR #4842 实现了声明式 Agent v1 的部分功能，包括对 `permissionMode`、`maxTurns` 等属性的支持，旨在兼容 Claude Code 的 Agent 配置文件格式。([#4842](https://github.com/QwenLM/qwen-code/pull/4842))

7.  **Daemon 功能大合并**：PR #4490 是一个大型功能分支合并，将 Daemon 模式的核心功能集（涉及 46 次提交、386 个文件）合并到主分支，是向 v0.16-alpha 发布迈进的关键步骤。([#4490](https://github.com/QwenLM/qwen-code/pull/4490))

8.  **Daemon 时间戳与流式修复**：PR #4855 修复了 Daemon 模式下 SSE 事件重放的时间戳和流式状态终结问题，增强了事件回放的正确性。([#4855](https://github.com/QwenLM/qwen-code/pull/4855))

9.  **扩展描述字段**：PR #4857 为扩展配置 `ExtensionConfig` 增加了可选的 `description` 字段，并在 `qwen extensions list` 中展示，提升了扩展的可用性和信息透明度。([#4857](https://github.com/QwenLM/qwen-code/pull/4857))

10. **Web Shell UI 增强**：PR #4867 为 Web Shell 增加了类似于 CLI 的“双 Esc 清除输入”功能，并改进了思考块折叠、布局调整等交互体验。([#4867](https://github.com/QwenLM/qwen-code/pull/4867))

## 功能需求归类

从近期 Issues 中，社区反复提及的功能方向可归类如下：

- **服务端/Daemon 能力**：ACP 协议支持（包含 WebSocket 和 Streamable HTTP 传输）、会话管理与自动回收。
- **Agent 与工具编排**：支持声明式 Agent 定义（类似 Claude Code）、专用 Web 搜索工具、后台 Fork Agent、动态工作流。
- **性能与稳定性**：内存泄漏修复（特别是 OOM）、长时间运行 Hook 的微压缩优化、系统休眠抑制。
- **用户交互与编辑体验**：Vim 模式优化、紧凑模式下闪烁问题修复、Web Shell 界面增强、扩展描述支持。
- **配置与兼容性**：Claude 用户配置迁移工具（`/import-config`）、多模态模型输入检测、自定义 AI ignore 文件。

## 开发者关注点

- **性能与稳定性担忧**：官方或社区开发者报告了多个内存泄漏（#4815, #4838）和 UI 闪烁问题（#4794），表明近期代码变更可能引入了较严重的性能回归，社区对稳定性有较高期待。
- **对 Claude Code 兼容性的强烈需求**：多个 Issue 和 PR 直接提及“实现 Claude Code X.Y 的某某功能”，例如声明式 Agent（#4821, #4842）、动态工作流（#4721）、用户记忆（#4764）和配置迁移（#4845）。这表明 Qwen Code 社区中有大量从 Claude Code 迁移而来的用户，他们期望在 Qwen Code 中获得相似的体验。
- **服务端集成的推进**：围绕 Daemon 和 ACP 协议的讨论（#4514, #4782, #4833）非常活跃。这反映出社区不仅仅是使用 CLI，还期待将 Qwen Code 作为后端引擎与各种编辑器（如 Zed、JetBrains）进行深度集成。
- **用户体验的精细打磨**：从 Vim 按键冲突（#4675）、光标移动不灵敏（#4852）、全屏闪烁（#4794）到代码复制粘贴多余行号（#1388），可以看到社区对终端交互细节的挑剔，也反映出维护者在持续响应和修复这类“小”但关乎体验的 Bug。

</details>