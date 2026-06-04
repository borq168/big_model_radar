# AI CLI 工具社区动态日报 2026-06-04

> 生成时间: 2026-06-04 02:49 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## 横向对比

好的，这是基于您提供的2026年6月4日各AI CLI工具社区动态日报，生成的横向对比分析报告。

---

# AI CLI 工具社区动态横向对比分析报告 | 2026-06-04

## 1. 今日横向概览

2026年6月4日，七个主流AI CLI工具的社区整体活跃，共发布6个版本（Claude Code v2.1.162、OpenAI Codex v0.137.0、Gemini CLI v0.46.0-preview.1、Qwen Code v0.17.1及nightly），其他工具（Copilot CLI、Kimi Code CLI、OpenCode）无新版本。社区焦点集中在**Agent行为可靠性**（子智能体虚假成功、任务未测试即完成）、**会话与数据持久化**（Token用量无限制增长、会话恢复后技能失效、静默删除记录）以及**跨平台兼容性**（Windows剪贴板/CJK显示、Wayland支持、德语键盘符号）。安全方面，多个工具修复了路径遍历、提示注入、私有IP绕过等漏洞。

## 2. 各工具活跃度对比

| 工具 | 今日发布版本 | 今日活跃Issues数 | 今日活跃PRs数 | 社区关注度最高问题 |
|------|------------|----------------|-------------|----------------|
| Claude Code | v2.1.162 | 10条（热点） | 4条（含已关闭） | 付费后账号禁用（👍58，评论173） |
| OpenAI Codex | v0.137.0 | 10条（热点） | 10条（含已关闭） | Token消耗速度异常（👍262，评论597） |
| Gemini CLI | v0.46.0-preview.1 | 50+条（今日更新） | 50+条（今日更新） | 子智能体虚假成功报告（#22323） |
| Copilot CLI | 无 | 10条（热点） | 1条（待评估） | 插件/Hook系统故障（#3659，#3665） |
| Kimi Code CLI | 无 | 8条（5开放，3已关闭） | 1条（已合并） | 会话恢复后技能不生效（#2420） |
| OpenCode | 无 | 10条（热点） | 10条（含已关闭） | 语音输入需求（👍161），Shift+Enter换行失效（👍101） |
| Qwen Code | v0.17.1 + nightly | 10条（热点） | 10条（均开放） | 本地模型集成失败（#3384），认证问题（#4493） |

> *注：Issues/PRs数量为今日日报中摘录的热点数，Gemini CLI仅有“50+条更新”的总量描述；其余工具均明确列出10条热点。*

## 3. 共同出现的功能方向

| 功能方向 | 涉及的多个工具 | 具体诉求/问题 |
|---------|-------------|-------------|
| **Agent行为可靠性** | Claude Code, Gemini CLI, OpenCode | 子智能体虚假成功（Gemini）、任务未验证即完成（Claude）、长会话Token无限制增长导致崩溃（OpenCode） |
| **会话管理与数据持久化** | Claude Code, OpenAI Codex, Kimi Code CLI, OpenCode | 会话记录静默删除、Token用量超限、恢复后技能不生效、历史对话50条后自动隐藏 |
| **跨平台兼容性** | Copilot CLI, Gemini CLI, OpenCode, Qwen Code | Windows剪贴板/CJK显示、Wayland兼容、德语键盘符号、tmux环境误判 |
| **MCP/工具集成稳定性** | Copilot CLI, Qwen Code, OpenCode, Gemini CLI | MCP服务器显示连接但工具不可用、插件Hook不触发、MCP工具因瞬时故障被错误移除 |
| **安全性增强** | Gemini CLI, Claude Code, Qwen Code | 路径遍历修复、间接提示注入防止、私有IP检查绕过、硬编码凭据检测插件 |
| **性能与错误处理** | Claude Code, OpenAI Codex, OpenCode | 并行工具级联失败、Token消耗过快（x100）、请求头超时、执行速度下降10-30倍 |

## 4. 差异化定位分析

| 维度 | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code CLI | OpenCode | Qwen Code |
|------|------------|-------------|-----------|------------|-------------|---------|----------|
| **底层模型绑定** | Anthropic Claude系列 | OpenAI GPT系列 | Google Gemini系列 | GitHub Copilot（多模型） | 月之暗面 Kimi系列 | 多模型（OpenAI/Anthropic等） | 阿里通义Qwen系列 |
| **开源状态** | 开源（Apache 2.0） | 开源（MIT） | 开源（Apache 2.0） | 开源（MIT） | 开源（MIT） | 开源（Apache 2.0） | 开源（Apache 2.0） |
| **目标用户侧重** | 开发者（高自主Agent） | 多平台开发者（VSCode/TUI/Web） | 跨平台开发者（Linux生态） | GitHub生态开发者 | 国内开发者、多语言用户 | 多模型灵活性、插件生态 | 阿里云/国内生态、预算敏感用户 |
| **今日技术路线差异** | 重点修复会话数据安全与Agent可靠性 | 强化企业/教育管理员功能，优化TUI快捷键 | 推进3.5 Flash模型迁移，强化安全沙箱 | 修复新渲染器导致的CJK和插件Hook问题 | 优化会话管理，修复APC协议回放 | 增强ACP协议，重构会话索引 | 优化Daemon冷启动，增加OpenTelemetry可观测性 |
| **社区最强烈诉求** | 付费后账号禁用、会话限制后续处理 | Token消耗异常、Linux桌面端缺失 | 子智能体行为错误、Wayland支持 | Hook/插件系统失效、CJK显示 | 会话恢复技能冲突、长对话自动回滚 | 语音输入、Shift+Enter换行 | 本地模型集成、JetBrains认证 |

## 5. 社区活跃度记录

- **社区讨论量最大**：OpenAI Codex（单Issue #14593获262赞、597评论），其次是Claude Code（#5088获173评论、58赞）。
- **版本发布最频繁**：Gemini CLI（今日发布v0.46.0-preview.1），Qwen Code（正式版+nightly双发布）。
- **PR/修复活跃度**：Gemini CLI（50+ PR更新，含关键安全修复）、OpenCode（10个PR，含ACP协议增强）、Qwen Code（10个开放PR，侧重可观测性与沙箱）。
- **维护者响应速度**：Claude Code（#65236性能退化问题今日报今日关闭）、OpenCode（长会话Token超限#30649今日创建即获关注）。
- **最集中类型**：Bug报告（特别是跨平台兼容性、性能回归、会话数据丢失）占主导，功能请求次之（语音输入、项目级别会话管理）。

## 6. 有证据支撑的观察

1. **Agent行为可靠性成为多工具共性痛点**：Claude Code（#60177 Agent不测试即标记完成）、Gemini CLI（#22323子智能体虚假成功报告）、OpenCode（#30649长会话Token无限增长）三工具今日均有相关高频反馈，表明用户对AI自动决策的信任面临挑战。

2. **跨平台兼容性仍是“慢性病”**：Copilot CLI（CJK显示、德语键盘、Windows剪贴板）、Gemini CLI（Wayland、tmux）、OpenCode（Windows Ctrl+C/V）、Qwen Code（Rider认证）——四个工具在Windows和Linux桌面环境下的输入/显示/快捷键问题反复出现，新渲染器引入后尤其突出。

3. **会话与数据管理机制普遍存在缺陷**：Claude Code（静默删除、上下文操作后请求无效）、Kimi Code CLI（恢复会话后技能覆盖）、OpenCode（长会话Token无限制）、OpenAI Codex（最近50条后隐藏）——四个工具的用户均反馈会话数据丢失或不可控，且无明确恢复/预警机制。

4. **MCP/工具集成“表面稳定、实际脆弱”**：Copilot CLI（多MCP占用73%上下文、Hook不触发）、Qwen Code（filesystem MCP显示连接但工具不可用）、Gemini CLI（MCP工具因瞬时网络故障被移除）——三个工具的社区今日都报告了MCP或插件体系在配置丰富后表现反常的问题。

5. **安全修复呈现“主动出击”趋势**：Gemini CLI（路径遍历、间接提示注入、私有IP绕过三项修复PR）、Claude Code（credential-guard插件）、Qwen Code（自动模式自我修改保护）——今日有明确代码提交的安全修复，反映维护团队对Agent安全性的前置投入，而非仅响应式修复。

6. **今日暂无明确跨工具信号**：未观察到所有工具同时聚焦于同一特定模型版本升级、统一协议规范或重大功能方向（如“AI原生IDE取代”）。各工具仍按各自生态节奏推进。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

好的，这是根据您提供的 2026-06-04 GitHub 数据生成的 Claude Code 社区动态日报。

---

# Claude Code 社区动态日报 — 2026-06-04

## 今日更新概览

今日社区讨论热度集中在付费后账号被禁用、会话限制后续处理机制缺失，以及远程控制连接稳定性问题。此外，多项关于并行工具调用、会话记录数据保留与删除的 Bug 也引发了广泛讨论，反映出用户对会话数据可靠性和工具执行稳定性的高度关注。

## 版本发布

### v2.1.162
- **`claude agents --json`** 现在包含 `waitingFor` 字段，用以显示“等待中”的会话被什么事件阻塞（例如权限提示）。
- **`--tools` 参数**：在包含嵌入式搜索的原生构建版本中，明确列出 `Grep` 或 `Glob` 工具现在会提供专门的搜索工具（此前这些名称被静默忽略）。

## 社区热点 Issues

1.  **[[bug] #5088: Claude Account Disabled After Payment for Claude Code Max 5x Plan](https://github.com/anthropics/claude-code/issues/5088)**
    - **场景**: 用户支付完成后账号立即被禁用，无法访问任何服务。
    - **问题范围**: 影响付费用户，涉及成本（`area:cost`）和认证（`area:auth`）模块。
    - **社区反应**: 173条评论，58个👍，是当前社区最关注的问题。

2.  **[[enhancement] #13354: [FEATURE] Continue when the session limit reached](https://github.com/anthropics/claude-code/issues/13354)**
    - **场景**: 用户在达到会话限制后，希望能在不丢失上下文的情况下继续工作。
    - **问题范围**: 核心功能需求（`area:tui`），长期以来的高优先级功能请求。
    - **社区反应**: 56条评论，116个👍，需求迫切。

3.  **[[bug] #34255: [BUG] Remote Control: automatic reconnection doesn't work](https://github.com/anthropics/claude-code/issues/34255)**
    - **场景**: 远程控制功能在连接断开后无法自动重连，导致工作流中断。
    - **问题范围**: 影响 macOS 和 iOS 平台的远程控制体验。
    - **社区反应**: 48条评论，86个👍，对远程工作用户影响大。

4.  **[[enhancement] #16446: [FEATURE] LaTeX rendering in "Claude Code for VS Code" plugin](https://github.com/anthropics/claude-code/issues/16446)**
    - **场景**: 在 VS Code 插件中查看包含数学公式的回复时，LaTeX 代码未被渲染。
    - **问题范围**: 影响学术和科研用户的使用体验。
    - **社区反应**: 33条评论，93个👍，功能需求明确。

5.  **[[bug] #22264: Sibling tool call errored: parallel tool calls cascade-fail when one fails](https://github.com/anthropics/claude-code/issues/22264)**
    - **场景**: 当 Claude Code 并行调用多个工具时，若其中一个失败，所有其他并行调用也会被取消。
    - **问题范围**: 影响工具调用的效率和可靠性（`area:tools`, `area:core`）。
    - **社区反应**: 33条评论，61个👍，已有复现步骤。

6.  **[[bug] #59248: Silent retention cleanup deletes session transcripts](https://github.com/anthropics/claude-code/issues/59248)**
    - **场景**: 会话记录在用户不知情的情况下被静默删除，且无恢复可能。
    - **问题范围**: 数据丢失（`data-loss`）问题，影响用户对会话管理的信任。
    - **社区反应**: 12条评论，已确认存在数据丢失风险。

7.  **[[bug] #63396: CLI 2.1.154 builds invalid request after context ops](https://github.com/anthropics/claude-code/issues/63396)**
    - **场景**: 执行上下文压缩、`/clear` 或切换模型等操作后，后续请求因格式错误被 API 拒绝，导致会话卡死。
    - **问题范围**: 核心逻辑 Bug，严重影响长会话的可用性。
    - **社区反应**: 7条评论，严重性高，可导致会话无法恢复。

8.  **[[bug] #60177: Claude marks tasks done without testing — 12 days, 51 commits, still broken](https://github.com/anthropics/claude-code/issues/60177)**
    - **场景**: Claude 模型（Opus 4.x）在未进行验证或测试的情况下将任务标记为完成，导致产出代码长期存在缺陷。
    - **问题范围**: 模型行为问题，影响自动化开发任务的质量。
    - **社区反应**: 7条评论，引发对 Agent 可靠性的担忧。

9.  **[[bug] #65222: Background subagents die permanently on transient server-side rate limits](https://github.com/anthropics/claude-code/issues/65222)**
    - **场景**: 后台子代理在遇到瞬时服务器限流后永久死亡，而非进行带有退避策略的重试。
    - **问题范围**: `Agent` 工具的错误处理逻辑不足，影响 Agent 团队的稳定性。
    - **社区反应**: 2条评论，是新报告，但影响面广。

10. **[[bug] #65236: Significant performance degradation causing 10-30x slower execution times](https://github.com/anthropics/claude-code/issues/65236)**
    - **场景**: 用户在近期更新后遭遇 10-30 倍的执行速度下降。
    - **问题范围**: 性能回归，严重影响开发效率。该 Issue 今日已关闭。
    - **社区反应**: 1条评论，为今日新报，已迅速被标记处理。

## 重要 PR 进展

1.  **[[OPEN] #61691: Add diagnostic script for GitHub connector](https://github.com/anthropics/claude-code/pull/61691)**
    - **内容**: 针对 GitHub MCP 连接器显示“已连接”但未暴露任何工具的问题，提供了一个 Windows PowerShell 诊断/修复脚本。旨在解决历史遗留 Bug (#61682)。

2.  **[[OPEN] #65223: Spelling: Fix typo in security guidance plugin](https://github.com/anthropics/claude-code/pull/65223)**
    - **内容**: 修复安全指导插件中的一个拼写错误（`reqwest` -> `request`）。

3.  **[[OPEN] #62099: Add credential-guard plugin for hardcoded secret detection](https://github.com/anthropics/claude-code/pull/62099)**
    - **内容**: 新增 `credential-guard` 插件，在 `Write`、`Edit` 等操作写入代码前，通过 `PreToolUse` 钩子检测并阻止硬编码凭据。旨在解决 Issue #62095。

4.  **[[CLOSED] #22919: feat(plugins): add collab plugin for Socratic mentoring mode](https://github.com/anthropics/claude-code/pull/22919)**
    - **内容**: 新增 `collab` 插件，提供苏格拉底式引导模式，引导开发者自主思考而非直接提供代码。此 PR 今日已关闭。

## 功能需求归类

- **会话与数据持久化**: 用户强烈要求“达到会话限制后自动继续”（#13354），并对“会话记录被静默删除”（#59248, #62476）的问题表示高度担忧。
- **用户体验改进**: 社区希望能在 VS Code 插件中渲染 LaTeX 公式（#16446），并为长时间运行的 Agent 任务增加系统通知（#65242）。
- **Agent 行为与可靠性**: 多个 Issue 反映出对 Agent 可靠性的诉求，包括希望后台子代理能在限流时自动重试（#65222），以及防止 Agent 在未测试的情况下错误地标记任务完成（#60177）。
- **跨平台支持**: Windows 平台（#61682 GitHub 连接器、#59883 桌面命令）和 macOS 平台（#34255 远程控制重连、#64933 授权令牌）的 Bug 修复需求持续。
- **功能缺失与覆盖**: 用户希望 `/claude-api` 技能文档能补充 Agent 设计的相关指导（#42873），并期望 Agent Team 支持更完善的结构化编排能力（#64767）。

## 开发者关注点

- **数据安全与透明性**: 用户对“会话记录被静默删除”的功能表示强烈不满，要求提供用户可控的保留策略和警告机制。
- **会话可靠性和恢复**: 付费后账号禁用、上下文操作后请求无响应等问题严重破坏用户信任，是社区最核心的痛点。
- **性能与稳定性**: 并行工具调用级联失败、后台 Agent 因限流永久死亡等 Bug 直接影响开发工作流的效率和可靠性。
- **跨平台兼容性**: Windows 和 macOS 平台上的连接、认证、消息传递等问题反复出现，跨平台一致性是持续关注点。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

好的，各位开发者，以下是今日份的 OpenAI Codex 社区动态日报。

### **今日更新概览**

今日发布了 `v0.137.0` 版本，主要改进了 TUI 快捷键和菜单功能，并为企业/教育用户增加了信用额度显示与配置管理。社区讨论热度最高的两个议题分别是：部分用户反馈的 Token 消耗速度异常问题，以及因无法更换手机号导致的登录障碍与身份验证流程体验问题。此外，与性能、会话数据可见性及多账户管理相关的功能请求与 Bug 报告也保持了较高的活跃度。

### **版本发布**

**rust-v0.137.0 (更新于 2026-06-04)**

主要更新内容包含：
- **TUI (终端用户界面):** 新增对 F13-F24 功能键的支持，改进了搜索菜单的粘贴体验，并为推理状态增加了紧凑模式下的标题栏显示。
- **企业/管理功能:** 企业和管理员用户现在可以在流程中查看月度信用额度限制，并支持应用云端管理的配置包，该功能也适用于教育机构工作区。

### **社区热点 Issues**

1.  **#14593 [bug, rate-limits] Token 消耗速度异常**
    - **场景/问题：** Business 订阅用户在 VS Code 扩展中反馈 Token 消耗过快。
    - **社区反馈：** 该问题已存在近三个月，获得 262 个点赞和 597 条评论，是当前社区中投诉量最高的话题，表明该问题影响范围广泛且长期未解决。
    - [https://github.com/openai/codex/issues/14593](https://github.com/openai/codex/issues/14593)

2.  **#11023 [enhancement, app] 请求 Linux 桌面版应用**
    - **场景/问题：** 由于 macOS 客户端存在性能问题导致无法使用，用户强烈希望能有适用于 Linux 的 Codex 桌面端。
    - **社区反馈：** 获得 455 个点赞和 82 条评论，是目前社区呼声最高的功能请求之一。
    - [https://github.com/openai/codex/issues/11023](https://github.com/openai/codex/issues/11023)

3.  **#25144 [enhancement, app] 请求禁用长提示自动转换为 .txt 附件**
    - **场景/问题：** 用户在粘贴结构化的长篇 Prompt 时，Codex 会自动将其转为 .txt 附件，影响了原有输入格式。
    - **社区反馈：** 48 小时内获得 56 个赞和 49 条评论，表明该自动行为影响了较多用户的协同工作流。
    - [https://github.com/openai/codex/issues/25144](https://github.com/openai/codex/issues/25144)

4.  **#25749 [bug, auth, app] 无法更换遗留手机号导致登录受阻**
    - **场景/问题：** 用户可正常通过 Google OAuth 登录 ChatGPT，但 Codex 桌面端要求验证一个已不再使用的旧号码，且无任何更换或恢复路径。
    - **社区反馈：** 问题出现两天内即获得 34 条评论和 17 个赞，与该 Issue 并列的其他类似问题共同构成了一个明显的“身份验证”故障群。
    - [https://github.com/openai/codex/issues/25749](https://github.com/openai/codex/issues/25749)

5.  **#21128 [bug, app, session] 桌面端项目对话超出最近 50 条后自动隐藏**
    - **场景/问题：** Codex 桌面版 UI 仅显示最近 50 条会话，导致较旧的但依然重要的项目讨论在 UI 中“消失”，且无任何提示，使得应用无法作为项目的可靠工作记忆。
    - **社区反馈：** 一个月内获得 16 个赞和 19 条评论，用户将其视为影响项目连续性的严重 Bug。
    - [https://github.com/openai/codex/issues/21128](https://github.com/openai/codex/issues/21128)

6.  **#24260 [bug, app, performance] gpt-5.5 xhigh 推理模式首次输出延迟过长**
    - **场景/问题：** 在 Windows 桌面端使用 `gpt-5.5` 的 `xhigh` 推理模式时，用户界面在“思考中”状态停滞超过 30 分钟，之后才恢复正常输出。
    - **社区反馈：** 反映了高推理模式下的极端延迟问题，短时间内获得 9 个赞和 16 条评论。
    - [https://github.com/openai/codex/issues/24260](https://github.com/openai/codex/issues/24260)

7.  **#23979 [bug, app, session] 应用更新后本地项目对话历史记录丢失**
    - **场景/问题：** macOS 端应用更新后，本地部分项目的历史对话在 UI 中消失，但底层数据库文件 (`state_5.sqlite`) 依然存在。
    - **社区反馈：** 数据丢失是影响较大的问题，尽管赞数不多（3个），但 15 条评论反映出用户对该问题的困惑和担忧。
    - [https://github.com/openai/codex/issues/23979](https://github.com/openai/codex/issues/23979)

8.  **#23198 [bug, app, performance] Windows 桌面端整体运行缓慢**
    - **场景/问题：** 用户在 Windows 系统中使用 Codex 桌面端时，无论电脑整体性能如何，应用本身响应极慢。
    - **社区反馈：** 获得 20 个点赞、5 条评论，表明该问题并非个例，而是影响 Windows 平台用户体验的普遍性能瓶颈。
    - [https://github.com/openai/codex/issues/23198](https://github.com/openai/codex/issues/23198)

9.  **#20500 [enhancement, codex-web, auth] 支持为同一连接器配置多个命名账户**
    - **场景/问题：** 用户希望能在一次 Codex 会话中连接多个不同授权的第三方应用/连接器账户，并具备明确的隐私边界和选择权。
    - **社区反馈：** 获得 45 个点赞、9 条评论，是开发者对提升工作流灵活性的重要诉求。
    - [https://github.com/openai/codex/issues/20500](https://github.com/openai/codex/issues/20500)

10. **#23930 [bug, app, subagent] 关闭的子代理卡片在界面中残留**
    - **场景/问题：** 在 macOS 桌面端，已完成的子代理在关闭后，其状态卡片仍长时间卡在 UI 中，尽管后台已无活跃进程。
    - **社区反馈：** 获得 3 个赞和 11 条评论，属于客户端 UI 状态同步问题。
    - [https://github.com/openai/codex/issues/23930](https://github.com/openai/codex/issues/23930)

### **重要 PR 进展**

1.  **#26041 [OPEN] 增加 App-Server 后台终端进程 API**
    - **功能/修复：** 为桌面端应用增加新的实验性 API，使其可以从 app-server 可靠地获取和管理后台终端进程（如启动、列出、终止），取代原先依赖本地进程树的猜测逻辑。
    - [https://github.com/openai/codex/pull/26041](https://github.com/openai/codex/pull/26041)

2.  **#26013 [OPEN] 在 TUI 中门控终端可视化指令**
    - **功能/修复：** 在 TUI 包中新增一个默认禁用的 `TerminalVisualizationInstructions` 功能开关，将终端可视化指令的生成与注入进行隔离控制，确保随意性，降低了安全风险。
    - [https://github.com/openai/codex/pull/26013](https://github.com/openai/codex/pull/26013)

3.  **#25888 / #26286 / #26285 [OPEN] 托管环境下的 MITM CA 证书管理与继承**
    - **功能/修复：** 一系列 PR 通过为沙箱环境准备和管理自有的根证书及中间人证书，提高了在代理解密（MITM）场景下，特别是托管子进程（如命令执行）中 CA 管理的安全性和清晰度。
    - [#25888](https://github.com/openai/codex/pull/25888), [#26286](https://github.com/openai/codex/pull/26286), [#26285](https://github.com/openai/codex/pull/26285)

4.  **#26252 [OPEN] CI 使用 Azure Key Vault 签署 macOS 构建产物**
    - **功能/修复：** 将 macOS 应用的签名和公证流程迁移到通过 Azure Key Vault 管理开发者 ID 私钥，从而避免了将敏感密钥存储至 GitHub 环境。
    - [https://github.com/openai/codex/pull/26252](https://github.com/openai/codex/pull/26252)

5.  **#26276 [OPEN] 在 ChatGPT 登录流程中传递认证会话日志 ID**
    - **功能/修复：** 在 ChatGPT 登录协议中增加一个可选日志 ID，以利于在服务端关联和诊断 Codex 侧的登录失败问题，提升排错能力。
    - [https://github.com/openai/codex/pull/26276](https://github.com/openai/codex/pull/26276)

6.  **#26291 [OPEN] 优化外部 Agent 会话检测**
    - **功能/修复：** 针对外部 Agent 的会话检测逻辑进行了优化，具体细节未明，推测是为了提升性能或准确性。
    - [https://github.com/openai/codex/pull/26291](https://github.com/openai/codex/pull/26291)

7.  **#24634 / #26268 [OPEN] 新增并暴露 Prompt 钩子机制**
    - **功能/修复：** 引入和公开了一套“提示钩子（Prompt Hook）”系统。用户或插件可以定义钩子来处理特定事件，例如在发送消息前/后执行自定义逻辑。相关 PR 也向客户端暴露了钩子元数据，以便用户理解和配置。
    - [#24634](https://github.com/openai/codex/pull/24634), [#26268](https://github.com/openai/codex/pull/26268)

8.  **#26009 [OPEN] 增加仅包含元数据的线程目录订阅**
    - **功能/修复：** 为侧边栏客户端增加了一种轻量级订阅模式，订阅后无需唤醒每个线程即可获取其状态变化（如有新活动），解决了侧边栏需要频繁拉取或承担高开销订阅的问题。
    - [https://github.com/openai/codex/pull/26009](https://github.com/openai/codex/pull/26009)

9.  **#26272 [OPEN] 仅加载插件钩子声明以优化性能**
    - **功能/修复：** 优化 `hooks/list` 接口，使其仅加载插件的钩子声明，而不再加载插件的其他能力（如技能、MCP配置等），在本地测试中减少了超过 100ms 的延迟。
    - [https://github.com/openai

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

好的，作为专注于 AI 开发工具的技术分析师，我将根据您提供的 GitHub 数据，为您生成 2026 年 6 月 4 日的 Gemini CLI 社区动态日报。

---

# Gemini CLI 社区动态日报 | 2026-06-04

## 今日更新概览

今日社区活跃，共记录了近 50 条 Issues 和 50 条 PRs 的更新。最值得关注的是发布了 **v0.46.0-preview.1** 补丁版本，主要修复了一个特定场景下的问题。社区讨论方面，集中在 **Agent 子智能体** 的行为错误（如子智能体报告虚假成功、技能使用不足）以及在 **Wayland** 环境下的兼容性问题。安全方面，关于沙箱策略和路径穿越的多个关键修复 PR 正在推进中。

## 版本发布

- **v0.46.0-preview.1**: 这是一个针对 v0.46.0-preview.0 的补丁版本。内容仅为一个特定修复的拣选（cherry-pick），旨在解决预览版中的某个已知问题。
    - **更新内容**: 修复拣选 (fix(patch): cherry-pick e4315b3...)
    - **链接**: [Release v0.46.0-preview.1](https://github.com/google-gemini/gemini-cli/releases/tag/v0.46.0-preview.1)

## 社区热点 Issues

1.  **子智能体虚假成功报告** (#22323)
    - **场景**: `codebase_investigator` 子智能体在达到最大对话轮次（MAX_TURNS）后，本应报告中断，但错误地报告为成功完成目标（GOAL）。
    - **影响**: 造成用户对任务执行状态的误解，隐藏了子智能体无法完成任务的真实原因，属于 Agent 核心行为错误。
    - **链接**: [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

2.  **组件的鲁棒性评估** (#24353)
    - **场景**: 追踪如何建立更健壮的、针对 CLI 内部组件的评估体系，作为早期行为评估测试的后续工作。
    - **影响**: 影响整个项目的质量保障和持续迭代能力，属于项目长期基础设施建设的核心议题。
    - **链接**: [Issue #24353](https://github.com/google-gemini/gemini-cli/issues/24353)

3.  **AST感知的文件读取与搜索** (#22745)
    - **场景**: 探讨在代码库映射、文件搜索和读取中引入抽象语法树（AST）感知能力，以提升精确度和效率。
    - **影响**: 可能显著改善代码理解型 Agent 任务的准确度，减少 Token 消耗和无效交互。
    - **链接**: [Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)

4.  **Gemini 不主动使用技能和子智能体** (#21968)
    - **场景**: 用户反馈，即使配置了自定义技能（如 gradle, git）和子智能体，Gemini 在自主执行相关任务时仍倾向于不用，仅在用户明确指令下才使用。
    - **影响**: 降低了 CLI 的自动化和智能化程度，核心 Agent 工具选择逻辑有待优化。
    - **链接**: [Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)

5.  **浏览器子智能体在 Wayland 下失败** (#21983)
    - **场景**: 当用户在 Wayland 显示服务器环境下运行时，浏览器子智能体（Browser Agent）运行失败。
    - **影响**: 限制了特定 Linux 用户群体的使用，属于兼容性问题。
    - **链接**: [Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)

6.  **Shell 命令执行卡在“等待输入”状态** (#25166)
    - **场景**: 在简单的 Shell 命令执行完毕后，CLI 仍然显示命令处于活动状态并“等待输入”，导致界面假死。
    - **影响**: 严重影响交互式使用体验，属于高频 P1 级 Bug。
    - **链接**: [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)

7.  **自动记忆（Auto Memory）系统的多项 Bug** (#26522, #26523, #26525)
    - **场景**: 系列问题共同指向自动记忆功能存在缺陷，包括：对低价值会话进行无限重试、静默跳过无效补丁、以及日志记录中未彻底脱敏可能导致的安全风险。
    - **影响**: 记忆系统是 Agent 长期学习和上下文理解的基础，这些问题可能导致功能失效、效率低下甚至数据泄露风险。
    - **链接**:
        - [Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522)
        - [Issue #26523](https://github.com/google-gemini/gemini-cli/issues/26523)
        - [Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525)

8.  **Agent 应避免/阻止破坏性行为** (#22672)
    - **场景**: 用户希望 Agent 在执行复杂 Git 操作或管理数据库等场景时，能够识别风险，主动避免使用 `--force` 或 `git reset` 等潜在破坏性命令。
    - **影响**: 对 Agent 的安全性和用户信任度至关重要，属于 Agent 行为安全的核心诉求。
    - **链接**: [Issue #22672](https://github.com/google-gemini/gemini-cli/issues/22672)

9.  **浏览器 Agent 忽略 settings.json 覆盖** (#22267)
    - **场景**: 用户在全局或项目级别的 `settings.json` 中配置了浏览器 Agent 的 `maxTurns`（最大轮次）等参数，但 Agent 运行时不生效。
    - **影响**: 配置系统不按预期工作，削弱了用户对 Agent 行为的控制力。
    - **链接**: [Issue #22267](https://github.com/google-gemini/gemini-cli/issues/22267)

10. **`--resume` 无法识别本地历史会话** (#27243)
    - **场景**: 用户尝试使用 `gemini --resume` 命令恢复之前的本地对话，但 CLI 无法检测到这些历史记录。
    - **影响**: 导致会话恢复功能在特定情况下不可用，影响开发流程的连续性。
    - **链接**: [Issue #27243](https://github.com/google-gemini/gemini-cli/issues/27243)

## 重要 PR 进展

1.  **修复终端缩放时的 P1 级崩溃** (#27502)
    - **内容**: 修复了在 PTY（伪终端）被销毁后，UI 触发了终端的 `ioctl` 操作导致的 `EBADF` 崩溃。这是一个竞态条件，属于 P1 严重级别修复。
    - **链接**: [PR #27502](https://github.com/google-gemini/gemini-cli/pull/27502)

2.  **修复主机名绕过私有 IP 安全检查** (#27473)
    - **内容**: 修复了 `isBlockedHost()` 函数中对主机名直接跳过私有 IP 检查的安全漏洞，防止通过 DNS 解析绕过安全限制访问内网。
    - **链接**: [PR #27473](https://github.com/google-gemini/gemini-cli/pull/27473)

3.  **防止技能安装中的路径遍历攻击** (#27659)
    - **内容**: 修复了 `installSkill`、`linkSkill` 和 `uninstallSkill` 命令中的路径遍历漏洞，防止攻击者通过构造特殊路径写入到文件系统任意位置。
    - **链接**: [PR #27659](https://github.com/google-gemini/gemini-cli/pull/27659)

4.  **实现工具确认的“截断锁定”以防止间接提示注入** (#27472)
    - **内容**: 针对工具确认 UI 实施“截断锁定”机制，强制用户展开并查看完整命令或文件差异后才能进行确认，防止因诱导视图导致无意识地批准恶意操作。
    - **链接**: [PR #27472](https://github.com/google-gemini/gemini-cli/pull/27472)

5.  **防止 CJK 字符间的多余空格** (#27505)
    - **内容**: 修复了在渲染中日韩（CJK）宽字符时，错误地在字符间插入空格的问题，改善了跨终端显示和用户体验。
    - **链接**: [PR #27505](https://github.com/google-gemini/gemini-cli/pull/27505)

6.  **修复 tmux 环境下的主题检测误判** (#27572)
    - **内容**: 修复了在 `tmux`（尤其是在 mosh 下）运行时，CLI 错误地将终端背景色检测为浅色的问题，从而避免触发不恰当的 UI 主题切换。
    - **链接**: [PR #27572](https://github.com/google-gemini/gemini-cli/pull/27572)

7.  **MCP 工具发现的原子更新** (#27619)
    - **内容**: 修复了 MCP 工具在遇到瞬时网络故障时被错误移除的问题，通过实现原子更新模式，确保工具注册表保留最后一次成功获取的工具列表。
    - **链接**: [PR #27619](https://github.com/google-gemini/gemini-cli/pull/27619)

8.  **支持 Gemini 3.5 Flash 模型系列** (#27614)
    - **内容**: 为 CLI 添加了对 `gemini-3.5-flash-preview` 和 `gemini-3.5-flash-lite-preview` 模型的支持，并更新了模型解析逻辑。
    - **链接**: [PR #27614](https://github.com/google-gemini/gemini-cli/pull/27614)

9.  **当实验标志启用时切换到 3.5 Flash GA 模型** (#27570, #27645)
    - **内容**: 通过一个实验性标志来控制模型切换逻辑，计划将部分用户从旧版 Flash 模型过渡到新的 `gemini-3.5-flash` GA 模型。这是模型升级的关键步骤。
    - **链接**: [PR #27570](https://github.com/google-gemini/gemini-cli/pull/27570), [PR #27645](https://github.com/google-gemini/gemini-cli/pull/27645)

10. **增强 `/copy` 命令：支持索引和工具结果** (#25786)
    - **内容**: 扩展了 `/copy` 命令功能，允许通过索引（如 `/copy 2`）复制指定的历史回复，并支持提取函数调用（如 MCP 工具）的输出内容。
    - **链接**: [PR #25786](https://github.com/google-gemini/gemini-cli/pull/25786)

## 功能需求归类

从今日 Issue 中可以归纳出以下用户持续关注的功能方向：

- **Agent 自主性和行为控制**: 用户希望 Agent 能更主动、智能地使用其已配置的工具和技能（#21968），并且能识别和避免潜在的危险操作（#22672）。
- **安全与策略**: 社区非常关心 CLI 的安全性问题，涉及沙箱策略的初始化引导（#22406）、本地命令沙箱的实现（#22394）以及内容脱敏（#26525）。今日多个 PR 也在修复路径遍历、间接提示注入等具体安全问题。
- **兼容性与稳定性**: Wayland 支持（#21983）、CJK 字符显示（#27505）、tmux 环境适配（#27572）、终端操作假死（#25166）等问题表明，用户对主流开发环境（特别是 Linux 生态）的兼容性和稳定运行有较高要求。
- **新模型支持**: 多个 PR（#27614, #27570, #27645）正在进行 Gemini 3.5 Flash 模型系列的引入和迁移，反映了社区和官方对最新模型能力接入的重视。

## 开发者关注点

- **Agent 智能性问题**: 开发者最强烈的反馈集中在 Agent 核心决策逻辑的缺陷上，如子智能体错误报告“成功”（#22323）和 Agent 拒绝使用自定义技能（#21968）等，这些是影响工具“好用”程度的核心痛点。
- **高频 Bug 影响体验**: 如 Shell 命令假死（#25166）和会话恢复失败（#27243）等 P1/P2 级别的 Bug 严重影响开发者的日常使用流程，需要优先解决。
- **安全关切**: 开发者对安全问题反应敏感，包括路径遍历（#27659）、间接提示注入（#27472）以及网络请求的私有 IP 检查绕过（#27473）等，这些修复 PR 的出现和讨论热烈程度反映了社区对工具安全性的高要求。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-06-04

## 今日更新概览

过去 24 小时内，Copilot CLI 仓库无新版本发布，活跃的 Issue 更新主要聚焦于 **键盘输入兼容性**（如 CJK 字符显示、粘贴、热键冲突）、**插件/hook 系统故障**（`preToolUse` 及 `postToolUse` 钩子未正确触发）以及 **Windows 平台特有崩溃与剪贴板问题**。另有 1 个新建 PR（#3651）但内容尚未明确。

## 版本发布

无。

## 社区热点 Issues（10 条）

以下按社区关注度（👍数、评论数或影响场景）精选：

### 1. `SHIFT + ENTER` 应换行却执行命令 (#1481)
- **状态**: 已关闭 | 👍14 | 评论 24
- **摘要**: `SHIFT + ENTER` 在大多数聊天应用中用于换行，但 Copilot CLI 使用 `CTRL + ENTER` 换行，而 `SHIFT + ENTER` 会意外执行当前输入。作者认为这是一个 Bug。
- **链接**: https://github.com/github/copilot-cli/issues/1481

### 2. 请求沙盒模式限制文件访问范围 (#892)
- **状态**: 开放 | 👍49 | 评论 10
- **摘要**: 用户希望新增沙盒模式，使 Copilot CLI 的代码智能体仅能读写指定工作目录，防止访问或修改外部路径。
- **链接**: https://github.com/github/copilot-cli/issues/892

### 3. 粘贴在 PowerShell/CMD 中失效 (#1733)
- **状态**: 已关闭 | 👍7 | 评论 9
- **摘要**: 在 Windows PowerShell 或 CMD 中，粘贴命令不生效，右键粘贴会插入垃圾字符串。重启后出现，常规终端正常。
- **链接**: https://github.com/github/copilot-cli/issues/1733

### 4. 德语键盘无法输入 `@` 符号 (#1999)
- **状态**: 开放 | 👍1 | 评论 8
- **摘要**: 德语键盘布局下 `AltGr + q` 输入 `@` 无效，同样 `#` 也受影响，导致 CLI 基本不可用。作者指出从 v1.02 开始出现。
- **链接**: https://github.com/github/copilot-cli/issues/1999

### 5. 多 MCP 服务器导致上下文窗口占用 73%，首次消息即触发自动压缩 (#3539)
- **状态**: 开放 | 👍2 | 评论 5
- **摘要**: 当配置约 10 个 MCP 服务器和插件后，System/Tools 部分消耗了 146k tokens（200k 上下文窗口的 73%），用户尚未发送任何消息即触发自动压缩。
- **链接**: https://github.com/github/copilot-cli/issues/3539

### 6. 复制到剪贴板在 Windows 上静默失败 (#3622)
- **状态**: 开放 | 👍2 | 评论 2
- **摘要**: Windows 上复制智能体输出到剪贴板操作看似成功，但实际粘贴内容为旧的剪贴板内容。v1.0.48 正常，推测为新版回归。
- **链接**: https://github.com/github/copilot-cli/issues/3622

### 7. CLI 无法执行插件中附带的 hook 脚本 (#3659)
- **状态**: 开放 | 评论 2
- **摘要**: 自 v1.0.57 起，任何 prompt 都会因 `preToolUse` hook 异常而失败。日志显示脚本路径解析问题（例如 PowerShell 脚本参数不正确）。
- **链接**: https://github.com/github/copilot-cli/issues/3659

### 8. `postToolUse` 钩子未针对 `web_fetch` 工具结果触发 (#3665)
- **状态**: 已关闭 | 评论 1
- **摘要**: 当模型使用 `web_fetch` 工具时，`postToolUse` 钩子未分发，破坏了 hook 系统的通用拦截承诺。HTTP 响应是诊断会话中最大字节类之一。
- **链接**: https://github.com/github/copilot-cli/issues/3665

### 9. Bash 工具退出码检测在 fish shell 中失败 (#3619)
- **状态**: 已关闭 | 评论 1
- **摘要**: CLI 在 Bash 工具中使用 `$?` 语法获取退出码，但 fish shell 不支持（应使用 `$status`），导致退出码检测错误并产生有害影响。
- **链接**: https://github.com/github/copilot-cli/issues/3619

### 10. CJK 字符在 prompt 中不可见/重叠（多项报告汇总）
- **典型 Issue**:
  - #3648: 日文与 ASCII 混输后布局错乱
  - #3650: `实验模式` 下输入中文不显示
  - #3654: 空格后中文字符不可见（v1.0.55 后）
  - #3536: Windows 终端中 CJK 字符视觉重叠
- **共同点**: 均与 v1.0.55 起默认启用的“基于单元格的终端渲染器”相关，显示层与底层缓冲区不一致。
- **链接**: #3648, #3650, #3654, #3536

---

## 重要 PR 进展

仅 1 条 PR 过去 24 小时内有更新：

- **#3651 (OPEN)**: `Create xcopilotcli` 作者 @XavierMP14，创建于 2026-06-03，内容尚未填写摘要，暂无法评估其实质变更。
  https://github.com/github/copilot-cli/pull/3651

---

## 功能需求归类

从近期开放/高赞 Issue 中提炼用户反复提及的功能方向（按出现频率排序）：

| 方向 | 典型 Issue | 用户诉求摘要 |
|------|------------|--------------|
| **键盘输入兼容性** | #1481, #1999, #3587, #3607, #3648, #3650, #3654, #3536 | 统一换行快捷键、修复德语键盘符号、恢复 Ctrl+C 中断、CJK 字符显示错乱 |
| **插件/Hook 系统** | #3539, #3659, #3665, #3664 | 上下文窗口被插件占用过多、hook 脚本路径解析失败、部分事件未分发 hook、`cwd` 字段未展开 `~` |
| **多平台稳定性** | #1733, #3622, #3593, #3662 | Windows 粘贴/剪贴板失效、系统崩溃后 events.jsonl 损坏、无法卸载 |
| **沙盒/安全性** | #892 | 限制文件系统访问范围 |
| **会话管理** | #3645, #2303 | 自动命名终端会话、根据 ID 恢复旧会话 |
| **非交互模式** | #3661 | `/btw` 命令不应输出需要确认的步骤 |
| **模型与代理** | #3539, #3542, #3660 | 上下文窗口优化、企业 MCP 允许列表 token 超限、退出计划模式后自动切换至 Auto 模型 |

---

## 开发者关注点

结合今日 Issue 反馈，开发者群体的主要痛点集中在：

1. **终端渲染器回归**：v1.0.55 启用的新渲染器导致 CJK/日文/中文在不同场景下不可见或重叠，且与 Windows 终端兼容性差。多个用户报告一致，已成为当前最集中的输入显示问题。
2. **插件/Hook 执行失败**：v1.0.57+ 版本中 hook 系统出现解析错误，包括 `preToolUse` 无法执行、脚本参数不正确、`cwd` 未展开 `~` 等，直接影响企业级安全审计流程。
3. **Windows 专有问题**：剪贴板复制静默失败、粘贴插入垃圾字符串、系统崩溃后日志损坏——这些问题在 Windows 上反复出现，但 macOS/Linux 用户较少提及。
4. **键盘布局与快捷键冲突**：德语键盘缺失 `@` 键、Shift+Enter 误执行、Esc 无法中断响应，使得多语言/多键盘布局用户产生“基本不可用”的负面体验。
5. **上下文窗口管理**：多 MCP 服务器和插件配置下，仅工具描述就消耗绝大多数 token，导致会话未开始即进入自动压缩循环，影响复杂工作流用户的持续使用。

所有条目均可在仓库 issue 列表中找到对应链接，建议关注相关标签以获取修复进展。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 — 2026-06-04

## 今日更新概览

过去24小时内，Kimi Code CLI 仓库未发布新版本，但社区活跃度较高：共更新 8 条 Issues（其中 3 条已关闭，5 条仍开放），1 个 Pull Request 被合并关闭。用户反馈集中在会话恢复、Web 端交互、项目管理等方向，开发者已对部分历史需求完成修复。

## 版本发布

无（过去24小时无新版发布）

## 社区热点 Issues（共8条）

1. **#751（已关闭）**：建议斜杠命令选中后直接执行，无需再次按回车。
   → 影响场景：日常 CLI 对话效率。
   → 链接：https://github.com/MoonshotAI/kimi-cli/issues/751

2. **#2422（开放）**：对话完成后，滚动查看输出内容会自动跳回底部。
   → 影响场景：阅读长回复时难以定位。版本 v1.46.0，模型 kimi2.6，Linux 平台。
   → 链接：https://github.com/MoonshotAI/kimi-cli/issues/2422

3. **#1847（已关闭）**：建议将粘贴的图片和文本占位符当作整体块处理（光标选中、删除均为整块）。
   → 影响场景：多模态输入时的编辑体验。
   → 链接：https://github.com/MoonshotAI/kimi-cli/issues/1847

4. **#2420（开放）**：恢复会话时，旧上下文中的系统提示覆盖了新生成的提示，导致新添加的技能/配置无法生效。
   → 影响场景：用户更新技能后需要新建会话才能生效，违背预期。
   → 链接：https://github.com/MoonshotAI/kimi-cli/issues/2420

5. **#2421（开放）**：请求增加“项目模型”功能——左侧会话按项目分类，多个会话可组合为项目，共享记忆并建立索引以减少 Token 消耗。
   → 影响场景：多会话管理复杂，Token 成本控制。
   → 链接：https://github.com/MoonshotAI/kimi-cli/issues/2421

6. **#2419（开放）**：`kimi web` 模式下无法复制框内内容，粘贴操作无响应。
   → 影响场景：Web 端使用体验，版本 v1.46。
   → 链接：https://github.com/MoonshotAI/kimi-cli/issues/2419

7. **#2418（开放）**：不希望在切换 Web 会话时自动回放（replay）历史内容，每次切换都需要等待滚动。
   → 影响场景：Web 端会话切换流畅性。
   → 链接：https://github.com/MoonshotAI/kimi-cli/issues/2418

8. **#2306（已关闭）**：APC 协议回放出错，会话历史不显示（Zed 集成及 Web 模式均受影响）。已修复或关闭。
   → 链接：https://github.com/MoonshotAI/kimi-cli/issues/2306

## 重要 PR 进展（仅1条）

- **#1848（已关闭）**：`feat(prompt): edit image and pasted-text placeholders as blocks`
  → 对应 Issue #1847，将粘贴的图片和文本占位符作为整体块处理，提升编辑体验。已合并关闭。
  → 链接：https://github.com/MoonshotAI/kimi-cli/pull/1848

## 功能需求归类

从今日 Issues 中可以归类出以下用户反复提及的功能方向：

| 方向 | 具体诉求 | 对应 Issue |
|------|----------|------------|
| **会话与项目管理** | 按项目分类会话、组合会话共享记忆/索引、减少 Token 消耗 | #2421 |
| **编辑交互优化** | 斜杠命令直接执行、占位符整块处理、禁止自动滚动到底部 | #751、#1847、#2422 |
| **Web 端体验** | 复制粘贴可用性、切换会话不自动回放 | #2419、#2418 |
| **技能/配置生效** | 恢复会话时不覆盖新系统提示，使技能更新立即生效 | #2420 |
| **集成兼容性** | APC 协议回放（Zed 集成）会话历史显示（已修复） | #2306 |

## 开发者关注点

- **会话恢复与技能更新冲突**（#2420）：用户设置了新技能或配置文件，但恢复旧会话时系统提示被旧内容覆盖，导致新技能不生效。这是 CLI 工具中常见的持久化逻辑问题，需优先定位 `load_agent()` 与 `context.jsonl` 的覆盖顺序。
- **Web 端基础操作缺陷**（#2419、#2418）：复制粘贴失效、切换会话自动回放严重影响日常使用，尤其是在浏览器中频繁切换上下文的场景。
- **长对话查看体验**（#2422）：自动滚动到底部的行为在对话完成后反而成为障碍，用户期望能自由滚动浏览历史输出。
- **项目管理功能缺失**（#2421）：用户对“项目”层级的需求反映出 KIMI Code CLI 已从单次对话向多会话、多任务管理演进，社区期待更结构化的组织方式。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

好的，没问题。作为专注于 AI 开发工具的技术分析师，我已根据您提供的 GitHub 数据，生成了 2026-06-04 的 OpenCode 社区动态日报。

---

# OpenCode 社区动态日报 | 2026-06-04

## 今日更新概览

今日社区活跃度回升，共有 50+ 个 Issue 和 50+ 个 PR 获得更新。虽然无新版本发布，但开发者围绕快捷键、语音输入、MCP 配置同步和会话窗口管理等核心体验提出了多个 Bug 和功能建议，社区贡献者们则集中修复了多个关于 ACP 协议、会话索引和 Web UI 状态同步的问题。

## 社区热点 Issues

1. **[Bug] Shift+Enter 快捷键在输入框中无法换行** (#1505)
   - **讨论热度**极高，评论数多达126条，获赞101次。影响所有依赖快捷键的用户。
   - **问题范围**：在输入框中按下 `shift+enter` 期望插入新行，但无响应。用户指出 `ctrl+j` 可正常工作作为替代。
   - **社区反应**：该问题虽已关闭，但更新日期为昨日，表明可能是修复后的验证或回归讨论。
   - **链接**: https://github.com/anomalyco/opencode/issues/1505

2. **[Feature] 语音输入 (Speech-to-Text)** (#4695)
   - **评论**33条，获赞**161次**，是今日社区反馈最强烈的功能需求。
   - **问题范围**：用户希望为“懒人”添加语音输入功能，直接通过语音转文字编写提示词。
   - **社区反应**：获极高赞，显示出用户对免打字交互方式的迫切需求。
   - **链接**: https://github.com/anomalyco/opencode/issues/4695

3. **[Feature] 为 Go 计划添加 API 使用量/余额查询端点** (#16017)
   - **评论**13条，获赞40次。
   - **问题范围**：用户希望开放公共 API 端点来查询 Go 订阅计划的使用量（如滚动/周/月窗口），目前这些信息仅在 Dashboard 上显示。
   - **社区反应**：关注 API 化管理的用户群体（如自动化运维）对此需求有共识。
   - **链接**: https://github.com/anomalyco/opencode/issues/16017

4. **[Bug] 手动滚动后自动滚动失效** (#29992)
   - **评论**11条，获赞14次。
   - **问题范围**：当 AI 正在回复时，用户手动向上滚动查看历史后，再次回到底部，自动滚动功能停止工作，新内容无法自动可见。
   - **社区反应**：这是一个常见的 TUI/Web UI 交互痛点，影响了用户实时阅读生成内容的体验。
   - **链接**: https://github.com/anomalyco/opencode/issues/29992

5. **[Bug] OpenAI 提供商请求头超时** (#29548)
   - **评论**10条。
   - **问题范围**：从 1.14.28 升级到 1.15.11 后，OpenAI 提供商请求失败，报错“Provider response headers timed out after 10000ms”。用户通过手动增加 `headerTimeout` 解决。
   - **社区反应**：可能是一个回归问题，影响了使用 OpenAI 且网络延迟稍高的用户。
   - **链接**: https://github.com/anomalyco/opencode/issues/29548

6. **[Bug] Windows 10 无法使用 Ctrl+C/V 复制粘贴** (#12595)
   - **评论**7条。
   - **问题范围**：在 Windows 10 的 CMD 中运行 OpenCode 时，标准快捷键 `ctrl+c` 和 `ctrl+v` 无效。
   - **社区反应**：这是一个跨平台体验问题，影响 Windows 用户的基础操作。
   - **链接**: https://github.com/anomalyco/opencode/issues/12595

7. **[Bug] MCP UI 面板显示异常** (#30125)
   - **评论**3条，获赞8次。
   - **问题范围**：尽管全局配置文件 `~/.config/opencode/opencode.json` 已正确配置 MCP 服务器，但 UI 界面 MCP 面板仍显示“未配置 MCP”，且功能正常。
   - **社区反应**：UI 状态显示与实际功能不符，容易造成用户困惑，属体验优化问题。
   - **链接**: https://github.com/anomalyco/opencode/issues/30125

8. **[Bug] 桌面版 MCP 服务器不加载，但 CLI 版本正常** (#30655)
   - **创建于**今日。
   - **问题范围**：用户反映同一个 MCP 服务器配置在 CLI 版本中正常工作，但在桌面版（Desktop）中无法加载。
   - **社区反应**：这是一个新提交的 Bug，可能涉及桌面版本的环境或加载逻辑差异。
   - **链接**: https://github.com/anomalyco/opencode/issues/30655

9. **[Bug] 长会话 Token 用量无上限增长导致上下文窗口错误** (#30649)
   - **创建于**今日。
   - **问题范围**：长会话中的 `tokens.cache.read` 等 Token 用量记录无限制增长，最终超过模型上下文窗口限制，导致会话不可恢复。
   - **社区反应**：这是一个严重的会话管理问题，影响了使用复杂或长时间交互的用户。
   - **链接**: https://github.com/anomalyco/opencode/issues/30649

10. **[Feature] 添加 CommandCode 作为提供商** (#26338)
    - **评论**7条，获赞10次。
    - **问题范围**：用户请求将 `commandcode.ai` 添加为 OpenCode 的提供商/认证选项。
    - **社区反应**：反映了社区对新模型/服务提供商接入的持续需求。
    - **链接**: https://github.com/anomalyco/opencode/issues/26338

## 重要 PR 进展

1. **修复会话审查反应性和 VCS 查询缓存** (#30660)
   - **贡献者**: @Brendonovich
   - **内容**: 重构“会话审查”中的差异比较逻辑，使用文件键映射提高可靠性；移除 VCS 查询的 staleTime 和 gcTime 以确保数据新鲜度。
   - **链接**: https://github.com/anomalyco/opencode/pull/30660

2. **新功能: ACP 协议中发射计划会话更新** (#30658)
   - **贡献者**: @smagnuso
   - **内容**: 在 `todowrite` 工具调用时，通过 ACP 协议发射计划会话更新事件，使外部客户端（如 hydra-acp）能实时获取计划变化。
   - **链接**: https://github.com/anomalyco/opencode/pull/30658

3. **新功能: 嵌入式 V2 会话运行时和工具基础** (#30632)
   - **贡献者**: @kitlangton
   - **内容**: 构建了基于 Effect 框架的嵌入式 OpenCode V2 基础架构，为 OpenCord 等本地优先消费者提供支持。
   - **链接**: https://github.com/anomalyco/opencode/pull/30632

4. **修复: 桌面版 WSL 接入体验** (#23407)
   - **贡献者**: @Hona
   - **内容**: 改进 Windows WSL 环境下的桌面版用户体验，使其更顺畅。
   - **链接**: https://github.com/anomalyco/opencode/pull/23407

5. **修复: Cloudflare Workers AI 提供商消息格式** (#30589)
   - **贡献者**: @ulises-jeremias
   - **内容**: 修复 Cloudflare Workers AI 提供商因消息内容类型混合（字符串与数组）而拒绝请求的问题，进行标准化处理。
   - **链接**: https://github.com/anomalyco/opencode/pull/30589

6. **修复: Web UI 显示版本号与 CLI 不一致** (#30591)
   - **贡献者**: @ulises-jeremias
   - **内容**: 修复 Web UI 版本号在 CLI 更新后仍显示旧版本的问题，现改为构建时注入 `OPENCODE_VERSION` 变量。
   - **链接**: https://github.com/anomalyco/opencode/pull/30591

7. **修复: 子会话继承父级目录和 WorkspaceID** (#30650)
   - **贡献者**: @FlorianOtel
   - **内容**: 修复在 HTTP 服务器模式下，子会话未正确继承父会话的工作目录和 WorkspaceID，导致命令执行路径错误的问题。
   - **链接**: https://github.com/anomalyco/opencode/pull/30650

8. **修复: Git 项目 ID 区分独立克隆仓库** (#29977)
   - **贡献者**: @FQXCS
   - **内容**: 修复不同路径下同一仓库的克隆被合并为同一个项目的问题。现项目 ID 中加入 Git 仓库存储路径的哈希值以区分独立克隆。
   - **链接**: https://github.com/anomalyco/opencode/pull/29977

9. **新功能: ACP 协议重放已加载会话转录** (#30645)
   - **贡献者**: @opencode-agent[bot]
   - **内容**: 当 ACP 加载存储的会话消息时，正确重放文本、文件和推理块内容，确保外部客户端能正确还原会话历史。
   - **链接**: https://github.com/anomalyco/opencode/pull/30645

10. **修复: 添加会话和事件索引以提升查询性能** (#30636)
    - **贡献者**: @literally-dan
    - **内容**: 为数据库表添加 `session(time_updated)` 和 `event(aggregate_id, seq)` 索引，以加速会话列表获取和事件检索操作。
    - **链接**: https://github.com/anomalyco/opencode/pull/30636

## 功能需求归类

根据今日更新的 Issues，用户的功能需求主要集中在以下几个方向：
1. **输入交互增强**：呼声最高的是语音转文字输入 (#4695) ，其次是解决 `shift+enter`、`ctrl+c/v` 等快捷键问题，以减少用户文本输入成本。
2. **新模型/提供商/服务集成**：持续有用户请求接入更多 AI 提供商，如 CommandCode (#26338) 和 Azure OpenAI 的变体支持。
3. **API 与可编程性**：社区对 API 化管理的需求明显，如公开 Go 计划用量查询 API (#16017)。
4. **MCP 协议与插件生态**：用户关注 MCP 服务器在不同客户端（CLI vs 桌面版）间的一致性加载 (#30655, #30125) ，以及插件缓存可能导致的版本过旧问题。
5. **会话管理与稳定性**：用户反馈长会话 Token 用量无限制增长 (#30649)、自动滚动失效 (#29992) 等稳定性与可用性问题。

## 开发者关注点

- **跨平台一致性**：Windows 和 Linux 用户在快捷键 (#12595, #24817) 和 MCP 支持 (#30655) 上遇到的体验不一问题是本周期的突出痛点。
- **会话与网络稳定性**：提供商请求头超时 (#29548) 和会话因网络波动直接失败 (#30611) 是开发者反馈的前两大稳定性问题，直接影响了 AI 辅助编程的效率。
- **UI/UX 状态同步**：多个 Bug 指向了 UI 状态与实际功能不同步，如 MCP 配置显示异常 (#30125) 和桌面版会话标签页的改名问题，这降低了用户对界面的信任感。
- **插件与 ACP 协议接口**：开发者正在积极为更稳定的插件开发环境而努力，包括修复子会话中权限回复被静默丢弃 (#28037) 和为 ACP 协议添加更完善的会话数据重放功能 (#30645)。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

好的，这是 2026 年 6 月 4 日的 Qwen Code 社区动态日报。

---

# Qwen Code 社区动态日报 | 2026-06-04

## 今日更新概览

今日 Qwen Code 发布了 v0.17.1 正式版及对应的 nightly 版本，主要包含维护性更新。社区讨论活跃，共产生 33 条议题和 50 个 Pull Request，其中用户反馈集中在模型切换、认证问题、MCP 工具集成以及 CLI/TUI 交互体验等方面。

## 版本发布

**v0.17.1 正式版 & v0.17.1-nightly.20260604**
- 链接：[v0.17.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.17.1) | [v0.17.1-nightly](https://github.com/QwenLM/qwen-code/releases/tag/v0.17.1-nightly.20260604.16dd99fa3)
- **更新内容**：本次版本主要是一次维护性发布，包含来自 CI 的版本号更新和一项针对 `rewind` 功能的修复：修复了当存在中间轮次消息时，错误提示“压缩轮次”（compressed turn）的问题。

## 社区热点 Issues

1. **#3384 Unable to add OpenAI-compatible local LLM** | 评论: 12
   - **摘要**：用户无法通过 OpenAI 兼容协议添加本地部署的大模型（如 Qwen3.6-35B-A3B），尽管按照文档配置了 `settings.json` 文件，但仍无法正常工作。
   - **链接**：https://github.com/QwenLM/qwen-code/issues/3384

2. **#4493 rider无法登录qwen code** | 评论: 10
   - **摘要**：JetBrains Rider IDE 用户无法通过 OAuth 登录 Qwen Code。当网页处于登录状态时会陷入无限重定向，无法调用阿里云的 Token Plan。
   - **链接**：https://github.com/QwenLM/qwen-code/issues/4493

3. **#4722 Statusline shows model id instead of name** | 评论: 5
   - **摘要**：状态栏显示的是原始模型 ID（如 `qwen3-coder-plus`），而非人类可读的名称（如 `Qwen3 Coder Plus`）。同时，使用模型 ID 作为唯一键会阻碍多模型配置下的正确切换。
   - **链接**：https://github.com/QwenLM/qwen-code/issues/4722

4. **#4743 qwen code shell command not work** | 评论: 4
   - **摘要**：用户的 Shell 命令执行功能突然失效，从返回 `signal 1` 错误到无任何输出，最终导致进程持续运行不终止。该问题严重影响日常使用。
   - **链接**：https://github.com/QwenLM/qwen-code/issues/4743

5. **#4218 MCP Server "filesystem" shows connected but tools unavailable** | 评论: 4
   - **摘要**：在 Windows 上配置 `filesystem` MCP 服务器后，界面显示连接成功，但 AI 模型无法接收到工具定义，无法执行文件系统操作。
   - **链接**：https://github.com/QwenLM/qwen-code/issues/4218

6. **#4727 Dual Output模式运行TUI无响应** | 评论: 3
   - **摘要**：用户在 v0.17.0 版本中使用 Dual Output 模式（`--json-file` 和 `--input-file`）启动 TUI 后，TUI 界面无任何反应，无法处理通过命名管道输入的消息。
   - **链接**：https://github.com/QwenLM/qwen-code/issues/4727

7. **#4729 Runtime snapshot prefix leaks into settings.model.name** | 评论: 3
   - **摘要**：当使用 OpenAI 兼容服务商时，`settings.json` 中的 `model.name` 会被内部的运行时常量（如 `$runtime|openai|`）污染，并在每次重启后叠加，最终导致“模型不存在”的 404 错误。
   - **链接**：https://github.com/QwenLM/qwen-code/issues/4729

8. **#4714 Please, disable auto-created skills** | 评论: 3
   - **摘要**：用户反馈自动创建的 Skills（技能）内容常有错误且优先级过高，会覆盖用户自己编写的正确配置，请求提供禁用自动创建 Skills 的选项。
   - **链接**：https://github.com/QwenLM/qwen-code/issues/4714

9. **#4754 `/model` should not persist to settings by default** | 评论: 2
   - **摘要**：当前 `/model` 命令切换模型时会自动写入 `settings.json`，导致该设置持久化并在重启后生效。用户认为此行为不符合直觉，期望临时切换模型时不修改持久化配置。
   - **链接**：https://github.com/QwenLM/qwen-code/issues/4754

10. **#4210 `/statusline` opens 'statusline-setup' agent instead of StatusLineDialog** | 评论: 3
    - **摘要**：在 TUI 中输入 `/statusline` 命令后，本应打开状态行设置对话框，但实际上却触发了一个名为 `statusline-setup` 的 Agent，导致功能异常。
    - **链接**：https://github.com/QwenLM/qwen-code/issues/4210

## 重要 PR 进展

1. **#4753 fix(cli): Improve approval mode display text**
   - **摘要**：改进了交互式审批模式下的 UI 显示文本，将 YOLO 模式显示为大写，并为基于分类器的自动模式提供更具体的描述。
   - **状态**：Open
   - **链接**：https://github.com/QwenLM/qwen-code/pull/4753

2. **#4751 feat(daemon): optimize ACP child lifecycle — skip relaunch, preheat, idle keep-alive**
   - **摘要**：优化 Daemon 模式的 ACP 子进程生命周期，包括跳过不必要的子进程重启动、预热预先创建子进程以及增加空闲保活机制，目标是降低冷启动延迟。
   - **状态**：Open
   - **链接**：https://github.com/QwenLM/qwen-code/pull/4751

3. **#4572 Harden auto mode self-modification checks**
   - **摘要**：加强了自动模式下的自我修改检查，防止写操作通过工作区编辑路径绕过分类器，从而保护 Qwen Code 的配置和技能等敏感性持久化目标不被误修改。
   - **状态**：Open
   - **链接**：https://github.com/QwenLM/qwen-code/pull/4572

4. **#4746 fix(cli): preserve trustedFolders comments on save**
   - **摘要**：修复了 `trustedFolders.json` 文件在保存时被重写导致注释丢失的问题，现在更新信任规则时能保留原有的注释和格式。
   - **状态**：Open
   - **链接**：https://github.com/QwenLM/qwen-code/pull/4746

5. **#4752 fix(web-shell): Fix multiple UI issues and ring-eviction reconnection logic**
   - **摘要**：修复了 Web Shell 的多个 UI 问题，包括 JSON-RPC 错误信息提取显示为 `[object Object]`、浮动面板出现/消失时自动滚动中断，以及 ring-eviction 的重连逻辑。
   - **状态**：Open
   - **链接**：https://github.com/QwenLM/qwen-code/pull/4752

6. **#4741 fix(ui): display model name instead of id in statusline and startup banner**
   - **摘要**：为 `ModelsConfig` 和 `Config` 添加 `getModelDisplayName()` 方法，用于将状态栏和启动横幅中的模型 ID 替换为人类可读的名称。
   - **状态**：Open
   - **链接**：https://github.com/QwenLM/qwen-code/pull/4741

7. **#4734 fix: strip runtime snapshot prefix before persisting model.name**
   - **摘要**：修复了 Issue #4729 中描述的 Bug，确保在将运行时的模型名持久化到 `settings.json` 之前，会剥离其内部前缀，防止配置被破坏。
   - **状态**：Open
   - **链接**：https://github.com/QwenLM/qwen-code/pull/4734

8. **#4749 feat(telemetry): add daemon OTel metrics and structured log records**
   - **摘要**：为 Daemon 的 HTTP 路由、会话生命周期、Prompt 队列等增加了 11 个 OpenTelemetry 指标，以增强服务的可观测性。
   - **状态**：Open
   - **链接**：https://github.com/QwenLM/qwen-code/pull/4749

9. **#4704 feat(core): honor skill allowedTools by auto-approving declared tools**
   - **摘要**：当 Skill 在其 frontmatter 中声明了 `allowedTools` 字段时，这些工具将在该 Skill 运行时被自动批准，无需用户手动确认，有望改善用户流程。
   - **状态**：Open
   - **链接**：https://github.com/QwenLM/qwen-code/pull/4704

10. **#4732 feat(core): Workflow tool P1 — minimal node:vm sandbox + sequential agent()**
    - **摘要**：作为 Dynamic Workflows 提案的第一步，实现了最简化的 `Workflow` 工具，允许模型在 `node:vm` 沙箱中运行 JavaScript 脚本，并提供了 `agent()` 函数来编排子代理。
    - **状态**：Open
    - **链接**：https://github.com/QwenLM/qwen-code/pull/4732

## 功能需求归类

- **内存与上下文优化**：用户提出全局用户级自动记忆功能（#4747），以避免在不同项目中重复学习用户偏好；同时有用户反馈部分模型在 TUI 模式下会丢失上下文记忆（#4740）。
- **模型切换与配置管理**：多个议题关注模型切换行为，包括：状态栏显示模型 ID 而非名称（#4722）、模型名被运行时前缀污染（#4729）以及 `/model` 命令不应默认持久化设置（#4754）。
- **IDE 与外部集成**：持续有用户反馈在特定 IDE（如 Rider #4493）下的认证和登录问题，以及 MCP 服务（如 filesystem）在 Windows 上连接但不生效的问题（#4218）。
- **CLI/TUI 交互改进**：社区对命令行界面的反馈繁多，例如 Shell 命令失效（#4743）、Dual Output 模式无响应（#4727）、路径 Tab 补全后多余空格（#4092）、复制命令 `/copy` 支持指定历史消息（#4744）等。
- **可观测性与性能**：关注点包括为 `qwen serve` 后端添加 OpenTelemetry 覆盖（#4554）、降低 Daemon 冷启动时间（#4748）以及增加 CPU 性能分析支持（#4617）。

## 开发者关注点

1. **配置持久化的意外行为**：`/model` 命令的隐式持久化和 `model.name` 配置项被运行时前缀污染是今天的两个高频痛点，开发者担心非预期的配置更改会影响日常使用及团队协作。
2. **MCP 和本地模型集成的不稳定性**：无论是通过 OpenAI 兼容协议接入本地 LLM（#3384），还是配置 MCP 文件系统工具（#4218），都存在集成后无法正常工作的案例，影响了基于本地或私有化部署的开发者。
3. **TUI 交互模式下的 Bug**：Shell 命令失效、Dual Output 模式无响应等严重 Bug 被反复提及，表明 TUI 的稳定性和鲁棒性仍是当前版本的软肋，直接影响了核心工作流的可靠性。
4. **自动生成功能的可控性**：自动创建的 Skills（#4714）因其内容不准确和不可控的优先级而受到批评，开发者希望能有更清晰的授权机制或提供禁用选项，以维持对工作环境的精确控制。

</details>