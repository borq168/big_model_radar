# AI CLI 工具社区动态日报 2026-05-13

> 生成时间: 2026-05-13 02:15 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## 横向对比

好的，各位技术决策者与开发者，以下是基于今日六大 AI CLI 工具社区动态生成的横向对比分析报告。

---

## AI CLI 工具横向对比分析报告 | 2026-05-13

### 1. 今日横向概览

今日，六大主流 AI CLI 工具均保持了高强度的社区迭代与反馈频率。**Claude Code** 与 **OpenCode** 社区最为活跃，分别聚焦于子代理系统的稳定性回归和权限继承缺陷等核心架构问题。**Gemini CLI** 和 **OpenAI Codex** 则处于功能迭代与大规模 Bug 修复并行阶段，前者推进了记忆系统 (Memory) 统一，后者重点解决了 IDE 扩展与平台兼容性痛点。**Kimi Code** 与 **Qwen Code** 启动了更多前瞻性功能的探索雏形，如 `/goal` 命令、守护进程 (Daemon) 模式和协作 (Cowork) 模式。一个强烈的跨工具信号是：**成本失控、MCP 生态稳定性、Agent 行为不可预测**已成为开发者社区共同的突出痛点。

### 2. 各工具活跃度对比

| 工具 | 今日活跃 Issue 数 (新/更) | 今日 PR 数 (新/更) | 今日 Release 数 | 核心关注点 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 约 10 个 (含 6 个新) | 约 3 个 | 1 个 (v2.1.140) | 子代理崩溃、文件截断、内存泄漏、额度消耗异常 |
| **OpenAI Codex** | 约 50 个 (31 个新) | 约 20 个 | 1 个 (alpha) | IDE 扩展卡顿、macOS 文件树问题、支付流程失败 |
| **Gemini CLI** | 约 15 个 (含 6 个高热度) | 约 10 个 | 2 个 (稳定+预览) | Agent 自主性、评估体系、子代理中断、自动记忆隐私 |
| **GitHub Copilot CLI** | 约 15 个 (新) | 至少 1 个 | 1 个 (v1.0.46) | `/fork` 缺失、MCP 连接池失效、模型静默替换、平台兼容性 |
| **Kimi Code** | 约 10 个 (含 5 个新) | 约 10 个 | 1 个 (v1.43.0) | 模型版本争议、API 兼容性、UI 交互细节 |
| **OpenCode** | 约 10 个 (高热度) | 约 10 个 (含 4 个合并) | 多个预览版 | 子代理权限回归、Opus 4.6/4.7 兼容性、SSE 事件流中断 |
| **Qwen Code** | 约 10 个 (新) | 约 10 个 | 多个预览版 | 任务自动中断、守护进程模式、终端 UI 渲染 Bug |

### 3. 共同出现的功能方向

- **成本控制与透明化（Claude Code, Gemini CLI, Copilot CLI）**：多个工具社区反馈了费用失控问题，包括无限 Token 消耗（Claude #58550）、配额异常消耗（Claude #58557, #58355）、模型静默替换导致意外计费（Copilot CLI #3266）。要求引入显式的计费警告、Token 用量仪表盘和自动降级策略。

- **MCP 生态稳定性（Claude Code, Copilot CLI, Kimi Code, Qwen Code）**：MCP 服务器的稳定性成为普遍瓶颈。问题涵盖：工具定义过多导致 Token 超限崩溃（Claude #37793）、TCP 连接池失效（Copilot CLI #3257）、启动时弃用警告（Kimi Code #2203）、以及 MCP 启动阻塞首次交互（Qwen Code #3994）。

- **子代理 / 权限系统复杂性（Claude Code, Gemini CLI, OpenCode）**：子代理的自主性、权限继承与交互逻辑成为核心设计挑战。Claude 子代理无法使用 `Agent` 工具，Gemini 子代理误报“目标达成”，OpenCode 子代理权限继承出现严重回归。这显示多智能体协作的容错与配置设计尚未成熟。

- **会话管理与上下文完整性（Claude Code, Codex, Copilot CLI, Kimi Code）**：多个工具面临会话恢复丢失上下文（Claude #58554）、工作区文件树切换失效（Codex #20552）、锁文件残留（Copilot CLI #3255）、以及 `/clear` 命令无法恢复上下文（Kimi Code #2204）等问题。会话的健壮性是影响长时开发任务的核心痛点。

### 4. 差异化定位分析

- **Claude Code**：定位为**重度研发者的深度 Agent 编排工具**。其社区讨论围绕子代理、MCP 集成和成本管理展开，工程复杂度高，用户对系统稳定性和数据安全有极高要求。
- **OpenAI Codex**：定位为**面向广泛开发者的 IDE 插件化 AI 助手**。其社区反馈集中于桌面端 UI/UX 问题（文件树、消息编辑）和平台兼容性（Windows、macOS 安全拦截），反映了其更偏向终端用户而非底层开发者的产品属性。
- **Gemini CLI**：定位为**Google 云生态下的高级 Agent 与评估框架**。社区高度关注评估体系（Component-level Eval）、Agent 行为评估（AST 代码映射）和隐私安全（自动记忆脱敏），表明其核心用户是追求质量与可控性的技术团队。
- **GitHub Copilot CLI**：定位为**GitHub 生态原生的会话式编码助手**。其社区痛点集中在 `/fork`、`/research` 等核心命令的缺失与异常，以及模型替换的不透明性。用户对功能承诺的兑现度（更新日志与实际不符）反应强烈。
- **Kimi Code** 与 **Qwen Code**：均处于**快速迭代与功能探索阶段**。两者都在引入 `/goal`、`/loop` 等高级命令，并探索 Daemon/Cowork 等新交互模式，旨在突破传统 CLI 边界，向更智能的桌面 AI Agent 演进。Kimi Code 更关注模型选择争议与 API 兼容性，Qwen Code 则更聚焦于本地化部署与终端渲染性能。

### 5. 社区活跃度记录

- **总量最活跃：OpenAI Codex**。过去 24 小时产生超过 50 个 Issue 和 20 个 PR 更新，遥遥领先。但其 Issue 多为 BUG 报告和 UI/UX 抱怨，而非深度架构讨论。
- **深度讨论质量最高：Claude Code**。尽管 Issue 数量不多，但其内容涉及子代理崩溃、内存泄漏、数据安全等核心架构问题，讨论深入，维护者回应积极，体现了高技能用户的聚集。
- **维护者响应最迅速：Gemini CLI 与 Qwen Code**。两者均有多个 PR 针对社区反馈（如免费套餐配额、MCP 启动性能）迅速落地，显示出主动且高效的开发节奏。
- **社区反馈最尖锐：GitHub Copilot CLI**。用户对版本发布不一致、功能缺失的直接质疑（如 `/fork` 缺失）在新 Issue 中频繁出现。
- **高频版本迭代：Kimi Code**。今日发布 v1.43.0 版本，修复 UI 与遥测，但其新功能（如 `/loop`）在实际场景中尚未获得广泛验证。

### 6. 有证据支撑的观察

- **观察一：所有工具都面临“成本失控”的普遍考验。** Claude Code 的评估器无限烧 Token、Copilot CLI 的模型静默替换、Gemini CLI 的免费套餐配额耗尽，共同指向一个现状：当前 AI CLI 工具缺乏对用户使用成本的明确、可预期的保护机制。这已成为阻碍其从实验工具向生产力工具跃迁的关键因素。

- **观察二：MCP 生态的稳定性是当前所有工具的“阿喀琉斯之踵”。** 无论是 Claude Code 的子代理因 MCP 过多而崩溃，还是 GitHub Copilot CLI 的 MCP 连接池失效，都表明 MCP 作为开放连接协议，在健壮性、资源管理和错误处理方面仍有巨大改进空间。这是制约复杂工作流集成的核心瓶颈。

- **观察三：子代理/权限系统的复杂性导致常见的回归与认知问题。** Claude Code 的子代理无法使用 Agent 工具，Gemini CLI 的子代理误报“目标达成”，OpenCode 的子代理权限继承错误——这些并非孤立 Bug，而是反映了多智能体架构中“任务委派”、“权限委派”和“结果状态同步”是三个待解的工程难题。

- **观察四：平台兼容性问题集中爆发，跨平台一致性远未达成。** 从 Windows 的 Git 进程暴增（GitHub Copilot CLI），到 Linux Wayland 下的图片粘贴失败（Qwen Code）、粘贴崩溃（Gemini CLI），再到 macOS 的安全拦截（OpenAI Codex），跨平台兼容性仍是所有工具需要持续投入的基础设施级挑战。

- **观察五：“会话即项目”的管理机制失效率高。** 多个工具（Claude Code、OpenAI Codex、Copilot CLI、Kimi Code）均报告了会话恢复、切换、管理工作区路径时的数据丢失或关联失效问题。这说明，当前工具对“会话”作为核心工作单元的管理能力，尚未达到与代码仓库或 IDE 项目同等水平的健壮性。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

好的，作为专注于 AI 开发工具的技术分析师，以下是基于 2026-05-13 数据生成的 Claude Code 社区动态日报。

---

# Claude Code 社区动态日报 | 2026-05-13

## 今日更新概览

Claude Code 今日发布 v2.1.140，优化了子代理（subagent）类型匹配的灵活性和 `/goal` 命令的健壮性。社区讨论热度集中在成本激增、MCP 服务器过多导致子代理崩溃、以及多处文件写入工具的截断和数据安全问题。

## 版本发布

### v2.1.140
- **链接**: https://github.com/anthropics/claude-code/releases
- 主要更新内容:
  - **Agent 工具改进**: `subagent_type` 匹配现在接受大小写和分隔符不敏感的值（例如 `"Code Reviewer"` 现在能正确解析为 `code-reviewer`）。
  - **视觉更新**: 更新了 Agent 颜色调色板。
  - **Bug 修复**: 修复了当设置 `disableAllHooks` 或 `allowManagedHooksOnly` 时，`/goal` 命令静默挂起的问题。现在会显示错误提示。

## 社区热点 Issues

1.  **Subagent 因 MCP 工具定义过多而崩溃** [`#37793`](https://github.com/anthropics/claude-code/issues/37793)
    - **场景**: 用户配置了大量 MCP 服务器时，启动子代理（Explore, Plan 等）会立即失败并报 `prompt is too long: 209117 tokens > 200000 maximum`。
    - **影响**: 影响几乎所有需要 MCP 集成的复杂工作流，是当前社区最关注的核心 bug 之一。有 15 条评论和 18 个 👍。

2.  **文本复制带 2 空格前置缩进** [`#37796`](https://github.com/anthropics/claude-code/issues/37796)
    - **场景**: 从终端复制 Claude Code 输出时，每行前都会多出 2 个空格，导致粘贴代码时需要手动清理。
    - **影响**: 影响所有 Copy-Paste 场景，严重降低开发效率。有 21 个 👍，是过去一天社区呼声最高的问题。

3.  **Cowork 模式下文件写入工具静默截断** [`#53940`](https://github.com/anthropics/claude-code/issues/53940)
    - **场景**: `Cowork` 模式下的 `Edit` 和 `Write` 工具会通过字节保护缓冲区上限静默截断文件，且所有文件大小下都会触发。
    - **影响**: 这是一个严重的数据安全问题，可能导致代码或数据在被 Claude Code 修改后丢失。有 8 条评论。

4.  **内存泄漏导致 CLI 完全无响应** [`#58272`](https://github.com/anthropics/claude-code/issues/58272)
    - **场景**: 在 macOS 上运行 Claude Code CLI 时，原生内存以 ~738 GB/h 的速度泄漏，导致所有斜杠命令（如 `/goal`）冻结。
    - **影响**: 极端影响开发体验，属于严重 Bug。创建于昨日，已有 3 条评论。

5.  **VS Code 插件消耗双倍额度** [`#58557`](https://github.com/anthropics/claude-code/issues/58557)
    - **场景**: 用户反馈在 VS Code 中使用 Claude Code 后，每周用量限制消耗速度是之前的 2 倍。
    - **影响**: 直接影响 Pro/Max 用户的套餐使用时长。创建于今日，已有 2 条评论。

6.  **Windows WSL 粘贴图片功能失效** [`#58518`](https://github.com/anthropics/claude-code/issues/58518)
    - **场景**: 在 Windows WSL 环境下，向 Claude Code 粘贴图片时功能无效。
    - **影响**: 降低了 WSL 下图像输入能力的可用性。有 2 条评论。

7.  **会话恢复丢失大部分上下文** [`#58554`](https://github.com/anthropics/claude-code/issues/58554)
    - **场景**: 使用 `--resume` 或 `/resume` 恢复会话时，大部分交谈上下文静默丢失。原因是 `parentUuid` 链中存在未持久化的 UUID。
    - **影响**: 严重影响长会话的可用性。创建于今日。

8.  **`/ultrareview` 第二次审查直接崩溃** [`#58552`](https://github.com/anthropics/claude-code/issues/58552)
    - **场景**: 对同一个 PR 运行 `/ultrareview` 两次，两次均消耗了宝贵的免费审查额度，但未产出任何审查结果。
    - **影响**: 资源浪费，功能不可用。创建于今日。

9.  **`/goal` 评估器无中断机制** [`#58550`](https://github.com/anthropics/claude-code/issues/58550)
    - **场景**: `/goal` 评估器在每次助手轮次后运行且无迭代限制。如果生成的条件永远无法满足，评估器会无限烧毁 Tokens。
    - **影响**: 可能导致意外的大量费用消耗。创建于今日。

10. **Background Token Consumption** [`#58355`](https://github.com/anthropics/claude-code/issues/58355)
    - **场景**: 用户反馈 Claude Desktop 在没有进行任何操作的一夜之间，消耗了 5% 的每周用量。
    - **影响**: 对费用和安全性的潜在担忧。有 2 条评论。

## 重要 PR 进展

今日 PR 活跃度较低，过去 24 小时内仅有 3 个 PR 被更新，均为文档相关。

1.  **[#58323] docs: add PostToolUse continueOnBlock option to hooks documentation**
    - **内容**: 为 Hooks 文档添加了 `PostToolUse` 的 `continueOnBlock` 选项。
    - **链接**: https://github.com/anthropics/claude-code/pull/58323

2.  **[#58314] docs: add CLAUDE_PROJECT_DIR to MCP and plugin environment variable docs**
    - **内容**: 在 MCP 和插件环境变量文档中补充了 `CLAUDE_PROJECT_DIR` 的说明。
    - **链接**: https://github.com/anthropics/claude-code/pull/58314

3.  **[#58126] Add `neonpanel` plugin v1.0.0**
    - **内容**: 新增一个面向亚马逊卖家的业务操作代理插件（neonpanel）。
    - **链接**: https://github.com/anthropics/claude-code/pull/58126

## 功能需求归类

从今日的 Issues 中，可以观察到社区反复提到的功能方向：

- **成本控制与透明化**:
  - 用户要求暴露会话元数据（速率限制、令牌用量）到所有平台（`#51382`）。
  - 用户反馈 API Key 和 Max 订阅认证优先级不透明，导致意外扣费（`#53728`）。
  - 多处报告额度消耗异常（`#58557`, `#58355`）以及评估器无限烧 Token 的问题（`#58550`）。
- **代理（Agent）系统灵活性**:
  - 用户请求能够动态创建/编写代理（`#58544`）。
  - 反馈子代理无法使用 `Agent` 工具，限制了编排模式（`#46424`）。
  - 希望技能子代理能继承父代理的额外使用额度（`#57249`）。
- **IDE 与桌面端集成**:
  - 用户反馈 Claude Code Desktop 缺少 `/plugin` 命令（`#42142`）。
  - VS Code 插件的额度消耗问题（`#58557`）。
  - SSH 远程会话在 Desktop 中崩溃（`#37154`）。

## 开发者关注点

- **安全与数据完整性**：`Write`/`Edit` 工具在 Windows 和 Linux 下的文件截断问题（`#53940`, `#58551`）以及无 BOM 导致 PS1 脚本损坏的问题（`#58545`），是开发者反馈中最严重的痛点，直接威胁代码安全。
- **MCP 生态的稳定性**：MCP 服务器过多导致子代理崩溃（`#37793`）是社区最突出的问题。此外，`claude-in-chrome` MCP 连接失败（`#58553`）也表明集成稳定性有待提升。
- **Cost 保护机制**：社区普遍认为缺乏防止意外或无限消耗 Tokens 的保护机制（`#58550`，异常消耗）。
- **幻视与记忆**：部分用户反馈 Claude 会忽略既定的 `CLAUDE.md` 规则和反馈记忆文件，并开始编造数据（`#58532`），这反映出模型在实际编码任务中跟随系统指令的可靠性仍需改进。
- **文档缺口**：开发者社区正在积极弥补文档不足，如为 `PostToolUse` hook 和 `CLAUDE_PROJECT_DIR` 环境变量提交文档 PR，表明官方文档在某些细节上不够清晰。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 (2026-05-13)

## 今日更新概览
过去 24 小时内，Codex 仓库发布了 `rust-v0.131.0-alpha.8` 版本；社区提交了 50 条 Issue 更新（含 31 条新 Issue）和 20 条 PR 更新。讨论热点集中在 macOS App 文件树切换、Windows 扩展卡顿、自定义提示失效以及支付流程错误等问题，同时部分新功能（如 `codex doctor` 诊断工具、严格配置解析）进入审查阶段。

## 版本发布
- **[rust-v0.131.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.131.0-alpha.8)**：仅标记为 Alpha 版本，未提供详细变更日志。

## 社区热点 Issues
以下按评论/关注热度排序，选取 10 条值得关注的 Issue（截至 2026-05-13 更新）：

1. **#20552 – 文件树切换不可靠（macOS App）**
   `View > Toggle File Tree` 功能启用后不能可靠显示文件树。评论 31，👍 9。
   [链接](https://github.com/openai/codex/issues/20552)

2. **#12161 – IDE 扩展卡在“Thinking”状态（Windows）**
   VS Code / Cursor 扩展持续显示“Thinking”，无法正常响应。评论 30，👍 16。
   [链接](https://github.com/openai/codex/issues/12161)

3. **#9926 – 交互式 ask_user_question 工具（Agent）**
   提议为 CLI Agent 增加结构化问卷 UI，替代自由对话，减少歧义。评论 24，👍 24。
   [链接](https://github.com/openai/codex/issues/9926)

4. **#11086 – App 消息编辑功能**
   用户希望像 Cursor 一样支持历史消息编辑并撤销后续变更。评论 10，👍 43。
   [链接](https://github.com/openai/codex/issues/11086)

5. **#14459 – macOS App 不显示自定义提示（~/.codex/prompts）**
   自定义斜杠提示（slash prompts）在弹出菜单中消失，仅显示内置项。评论 9，👍 4。
   [链接](https://github.com/openai/codex/issues/14459)

6. **#20752 – 宠物/头像覆盖层在 macOS 屏幕共享中剪切**
   Codex 桌面宠物（pet）在屏幕共享时被裁剪，通知托盘亦受影响。评论 7，👍 6。
   [链接](https://github.com/openai/codex/issues/20752)

7. **#20933 – Windows 桌面 App 触发多个 git.exe 进程**
   打开项目/聊天时并行执行 `git add -A`，导致 CPU 和磁盘高负载。评论 6，👍 5。
   [链接](https://github.com/openai/codex/issues/20933)

8. **#15347 – 工作区移动/重映射后丢失线程历史**
   复制或移动项目文件夹后，原线程内容仍关联旧路径，无法继承。评论 6，👍 11。
   [链接](https://github.com/openai/codex/issues/15347)

9. **#22135 – macOS 扩展被系统报告“包含恶意软件”**
   Android Studio 扩展 `codex-aarch64-apple-darwin` 被 macOS 安全机制拦截。评论 4，👍 11。
   [链接](https://github.com/openai/codex/issues/22135)

10. **#22238 – 无法购买 Credits：Stripe 支付页未打开**
    支付流程在 Stripe 通信阶段报错，无法进入付款页面。评论 2，👍 1。
    [链接](https://github.com/openai/codex/issues/22238)

## 重要 PR 进展
选取 10 条有代表性的 PR（过去 24 小时内更新）：

1. **#20559 – `config: add strict config parsing`** (OPEN)
   引入可选严格解析模式，使拼写错误或未知字段不再被静默忽略，方便用户发现配置问题。
   [链接](https://github.com/openai/codex/pull/20559)

2. **#22408 – `Shard Bazel Windows tests across jobs`** (OPEN)
   将单个 Windows Bazel 测试任务拆分为 4 个并发分片，缩短 CI 等待时间。
   [链接](https://github.com/openai/codex/pull/22408)

3. **#20319 – `Add allow_managed_hooks_only hook requirement`** (CLOSED)
   新增 hook 需求，允许企业管理员强制只使用受控 hook，避免用户篡改生命周期钩子。
   [链接](https://github.com/openai/codex/pull/20319)

4. **#22268 – `hooks: use new session IDs instead of thread IDs for hooks`** (CLOSED)
   修复钩子系统中 session_id 与 thread_id 混用问题，使子代理的钩子能与父会话正确关联。
   [链接](https://github.com/openai/codex/pull/22268)

5. **#22246 – `[codex] Remove unused legacy shell tools`** (OPEN)
   清理不再使用的 `shell`、`local_shell`、`container.exec` 执行路径，统一至 `shell_command`。
   [链接](https://github.com/openai/codex/pull/22246)

6. **#22258 – `feat: route guardian review model selection through providers`** (CLOSED)
   将 guardian review 模型选择逻辑从核心硬编码移至 provider 实现，支持 Amazon Bedrock 等后端自定义。
   [链接](https://github.com/openai/codex/pull/22258)

7. **#21624 – `Make MCP startup status thread-scoped and unblock /review UI update`** (OPEN)
   将 MCP 启动状态改为线程级作用域，避免全局共享导致 review 界面卡在“Starting MCP servers”。
   [链接](https://github.com/openai/codex/pull/21624)

8. **#22404 – `Restore app-server websocket listener with auth guard`** (CLOSED)
   恢复被删除的 TCP WebSocket 监听器，同时增加认证保护，非本地访问需显式授权。
   [链接](https://github.com/openai/codex/pull/22404)

9. **#22407 – `Refactor chatwidget input flow into modules`** (OPEN)
   继续拆分 `chatwidget.rs`，将输入处理逻辑抽取到独立模块，为后续扩展奠定基础。
   [链接](https://github.com/openai/codex/pull/22407)

10. **#22336 – `feat(cli): add codex doctor diagnostics`** (OPEN)
    新增 `codex doctor` 命令，可快速收集连通性、配置等诊断数据，便于支持排查。
    [链接](https://github.com/openai/codex/pull/22336)

## 功能需求归类
根据今日 Issues 中的标签和内容，用户反复提出的功能方向包括：

- **IDE 集成与扩展稳定性**：VS Code、Cursor、Android Studio 扩展出现卡顿、恶意软件误报、UI 布局溢出等问题（#12161, #22135, #22292, #22393）。
- **性能与资源管理**：Windows 下 git 进程暴增、macOS 渲染器高 CPU、UI 延迟（#20933, #21326）。
- **会话与项目管理**：工作区移动/重映射后线程历史丢失、symlink 路径导致项目视图翻转、深链接到归档线程无反应（#15347, #18483, #18216）。
- **Agent/CLI 增强**：交互式 `ask_user_question` 工具、`/goal` 命令与审批策略的交互定义、瞬态容量错误重试（#9926, #22362, #22390）。
- **UI/UX 体验改进**：消息编辑、文件树切换可靠、宠物覆盖层适配屏幕共享、自定义提示恢复（#11086, #20552, #20752, #14459）。
- **平台支持**：OpenBSD 沙箱支持、Windows 桌面 App 改进（#21977, #20933）。
- **支付与账户**：Stripe 支付流程失败（#22238）。

## 开发者关注点
社区开发者反馈的痛点与高频需求集中在：

- **扩展响应性**：Windows 平台下 Codex 扩展频繁进入“Thinking”状态，甚至导致 VS Code 扩展主机无响应（#12161, #22393）。
- **macOS App 自定义配置丢失**：`~/.codex/prompts` 中的自定义提示在升级后不再显示，影响日常使用效率（#14459）。
- **工作区线程关联混乱**：当项目文件夹被移动或 symlink 时，已有线程与项目脱钩，用户无法找回历史记录（#15347, #18483）。
- **文件树与 UI 控件交互问题**：文件树切换不可靠、分支详情弹窗遮挡交互区域、宠物覆盖层在屏幕共享中被裁剪（#20552, #21064, #20752）。
- **Windows 性能异常**：打开项目时触发大量 git 子进程，导致高 CPU 和磁盘占用（#20933）。
- **支付流程阻塞**：Stripe 返回通信错误，用户无法正常购买 Credits，影响付费服务使用（#22238）。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

好的，作为专注于 AI 开发工具的技术分析师，我将根据您提供的 GitHub 数据，为您生成 2026 年 5 月 13 日的 Gemini CLI 社区动态日报。

---

## Gemini CLI 社区动态日报 | 2026-05-13

### 今日更新概览

今日，Gemini CLI 发布了两个新版本，包括一个预览版（v0.43.0-preview.0）和一个稳定版（v0.42.0），涉及模型编辑工具使用、更新策略优化等改进。社区讨论热度持续，主要集中在 Agent 行为、记忆系统（Memory）和多 Agent 工作流中的稳定性与可靠性问题上，核心维护者正在积极处理和回应相关议题。

### 版本发布

-   **[v0.43.0-preview.0]** 新版本发布。新版本引入了“**引导模型对代码进行外科手术式编辑**”的功能，旨在提升代码修改的精确度。同时，更新了关于自动记忆（Auto Memory）功能的文档，明确了其工作原理。([查看详情](https://github.com/google-gemini/gemini-cli/releases/tag/v0.43.0-preview.0))
-   **[v0.42.0]** 新稳定版本发布，主要修复了一个 CLI 问题，**防止了自动更新意外切换到不稳定的版本通道**。([查看详情](https://github.com/google-gemini/gemini-cli/releases/tag/v0.42.0))

### 社区热点 Issues

1.  **评估体系与质量保障**
    -   [#24353](https://github.com/google-gemini/gemini-cli/issues/24353)：关于建立**健壮的组件级评估**的史诗级议题。社区已生成 76 个行为评估测试，覆盖 6 个支持的 Gemini 模型，目标是提升各部分质量的可靠性和可观测性。这是社区持续关注的核心方向。
    -   [#23166](https://github.com/google-gemini/gemini-cli/issues/23166)：要求**稳定并增强内部项目评估**。社区反馈当前小项目评估结果不稳定，影响追踪质量趋势，需要提升可靠性、可见性和可操作性。

2.  **Agent 行为和模型工具使用**
    -   [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)：一个关于**评估基于抽象语法树（AST）的文件读取、搜索和代码映射的价值**的史诗议题。社区希望通过更智能的方式减少模型误读、降低 Token 开销并提高导航效率。
    -   [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)：一个 bug 报告，指出当**子 Agent 达到最大轮次限制后**，系统错误地将其报告为“目标达成”（GOAL success），掩盖了中断事实，影响了多 Agent 协作流程的透明度和可靠性。
    -   [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)：用户反馈**Gemini CLI 没有充分使用自定义的技能（skills）和子 Agent**，即便在高度相关的场景下也不会自主调用，影响了用户自定义自动化流程的预期效果。
    -   [#26563](https://github.com/google-gemini/gemini-cli/issues/26563)：一个关于 **“save_memory”** 工具未找到的错误。用户尝试通过命令添加记忆时失败，影响了基础记忆功能的可用性。

3.  **特定平台与执行问题**
    -   [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)：**浏览器子Agent**在 Wayland 显示协议下运行失败。这影响了 Linux 环境下 Wayland 用户的交叉体验。
    -   [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)：报告称Shell命令在完成执行后，**Gemini CLI 仍卡在“等待输入”状态**。此问题影响了许多基础命令操作，社区关注度较高（获得3个 👍）。
    -   [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)：**浏览器 Agent** 忽略 `settings.json` 中的配置覆盖（例如 `maxTurns` ），导致用户无法通过配置文件精细控制其行为。

4.  **安全与隐私**
    -   [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)：建议**对自动记忆（Auto Memory）功能进行确定性脱敏并减少日志**。用户担忧该功能在后台读取对话记录并将其发送给模型时，存在敏感信息泄露的风险，反映出社区对隐私和数据安全的关注。

### 重要 PR 进展

1.  **[#26652](https://github.com/google-gemini/gemini-cli/pull/26652)**：修复了 **Vertex AI** 后端兼容性问题。由于属性命名规范不一致（camelCase 与 snake_case），导致 API 返回 400 错误，本次修复确保了在不同云环境下的稳定运行。
2.  **[#26953](https://github.com/google-gemini/gemini-cli/pull/26953)**：修改**Agent注册策略**为“先到先得”，并优先加载项目级别的 Agent。这解决了用户自定义 Agent 可能被全局 Agent 覆盖的痛点。
3.  **[#26312](https://github.com/google-gemini/gemini-cli/pull/26312)**：修复了 **MCP OAuth 令牌**在重新认证后未被使用的问题，用户现在无需重启 CLI 即可使用刷新后的令牌。这对于依赖 MCP 扩展的组织用户至关重要。
4.  **[#26420](https://github.com/google-gemini/gemini-cli/pull/26420)**：修复了一个权限错误 bug。部分用户因 `.env` 文件中设置了 `GOOGLE_CLOUD_PROJECT` 而遇到 **403 权限拒绝**错误。此 PR 通过暂时忽略该环境变量来解决此问题。
5.  **[#26845](https://github.com/google-gemini/gemini-cli/pull/26845)** 与 **[#26914](https://github.com/google-gemini/gemini-cli/pull/26914)**：两个独立 PR 都旨在解决 **免费套餐用户的配额耗尽** 问题。它们建议将 `gemini-2.5-flash-lite` 模型加入默认的模型回退链，避免用户在耗尽 Pro 和 Flash 模型的每日请求后直接报错。
6.  **[#26950](https://github.com/google-gemini/gemini-cli/pull/26950)**：修复了一个UI问题，使**上下文文件**设置不覆盖原有文件，而是进行追加，改进了多文件引用时的体验。
7.  **[#26939](https://github.com/google-gemini/gemini-cli/pull/26939)**：修复了**快照恢复**在跨会话时可能出现的问题，增强了工作重启的可靠性。
8.  **[#25980](https://github.com/google-gemini/gemini-cli/pull/25980)**：修复了一个导致 CLI 崩溃的 bug，该 bug 发生在用户粘贴**非路径内容（如 JSON）** 到 `@-mention` 输入框时，增强了稳定性。
9.  **[#26941](https://github.com/google-gemini/gemini-cli/pull/26941)**：清理并默认启用了**记忆系统（Memory）** 相关的**JIT上下文**和行为，标志着记忆功能的成熟和正式推出。
10. **[#26714](https://github.com/google-gemini/gemini-cli/pull/26714)**：提议将多个“Auto”模型路由模式（如 “Auto (Gemini 3)” 和 “Auto (Gemini 2.5)”）**合并为一个“Auto”模式**，动态根据任务复杂度和通道选择模型，旨在简化模型管理。

### 功能需求归类

-   **模型能力与工具使用**：社区持续要求模型能更智能地使用可用工具（如技能、子Agent），并优化代码编辑（如 AST 感知工具）和文件操作行为。解决模型在何种场景下使用何种工具的能力是当前热点。
-   **交互体验与稳定性**：对高亮和直观的反馈有较高需求。例如，修复 Shell 命令执行后的“等待”状态、终端窗口调整时的闪烁问题，以及外部编辑器退出后的显示损坏问题，都是为了提升日常手感。
-   **安全与隐私**：自动记忆（Auto Memory）功能在带来便利性的同时，也引发了社区对数据脱敏、日志管理和安全性的讨论。用户希望在不牺牲隐私的前提下享受个性化服务。
-   **扩展与集成**：与 MCP 扩展的集成（如 OAuth 令牌刷新）、代理支持和 SSH 仓库扩展安装等，表明社区对 CLI 的生态扩展能力有明确需求。

### 开发者关注点

-   **Agent行为的可靠性**：开发者对于子Agent的恢复、工具调用的一致性（如保存记忆）以及Agent是否主动使用自定义技能等问题集中反馈，表明当前Agent的自主决策和容错能力是主要的体验瓶颈。
-   **速率限制与配额管理**：免费套餐用户在遭遇“Quota Exhausted”错误时，期望CLI能有更智能的自动降级策略，而非简单报错。这反映了开发者对成本控制和资源高效利用的关注。
-   **环境兼容性**：多平台（尤其是 Linux Wayland）下的导航 Agent 兼容性问题，以及特定系统路径（如 Windows A:\）下的启动失败问题，提示跨平台兼容性测试仍需加强。
-   **用户配置控制权**：多个 Issue 和 PR（如 `settings.json` 覆盖无效、Agent注册优先级）表明，开发者希望拥有比“黑盒”更细致的配置控制权，以便定制符合自身开发流程的 CLI 行为。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

好的，各位开发者，以下是 2026 年 5 月 13 日的 GitHub Copilot CLI 社区动态日报。

---

## 今日更新概览

今日社区活跃度极高，仅过去24小时内便有超过15个新Issue 被提交，主要围绕 v1.0.45/1.0.46 版本中的 bug 和功能缺失。尽管官方发布了 v1.0.46 快速修复了 PowerShell 启动问题并增加了版本弃用警告，但用户对 `/fork` 命令的缺失、MCP 连接稳定性以及模型自动替换等问题表达了强烈不满。

## 版本发布

- **v1.0.46** (2026-05-12)
    - **更新内容**:
        - 在 CLI 版本被标记为弃用时显示警告，提示用户可能失去高级模型访问权限。
        - 修复了当 `pwsh` 作为 .NET 全局工具安装时，PowerShell 无法正常启动的问题。
        - 修复了 diff 视图中的长行被截断的问题，现在会根据终端宽度自动换行。
        - 修复了只读 gh 命令（如 list, view）的执行逻辑。

## 社区热点 Issues

1.  **`/fork` 命令缺失引发困惑**：[#3252](https://github.com/github/copilot-cli/issues/3252)
    - **影响场景**: 用户期望使用 v1.0.45 更新日志中提到的 `/fork` 命令，实际上该版本并未包含此功能。
    - **社区反应**: 用户直接质疑版本发布的完整性，指出更新日志与实际情况不符。

2.  **会话分支功能需求迫切**：[#2058](https://github.com/github/copilot-cli/issues/2058)
    - **影响场景**: 用户在做多步骤任务时，不希望被临时问题打断主目标。
    - **社区反应**: 该 Issue 已有 8 条评论，获得了7个 👍，说明这是一个被广泛需求的用户流程优化。

3.  **自定义指令目录问题**：[#1433](https://github.com/github/copilot-cli/issues/1433)
    - **影响场景**: 在 Linux 上，通过 `COPILOT_CUSTOM_INSTRUCTIONS_DIRS` 环境变量指定 NFS 目录下的 AGENTS.md 文件无法生效。
    - **社区反应**: 这是一个长期存在的问题（创建于2月），持续获得关注，对使用 NAS/NFS 环境的团队影响较大。

4.  **MCP TCP连接池导致请求失败**：[#3257](https://github.com/github/copilot-cli/issues/3257)
    - **影响场景**: 长时间空闲后，CLI 复用已断开的 TCP 连接向 HTTP MCP 服务器发起请求，导致 `TypeError: fetch failed` 错误。
    - **社区反应**: 这是一个新报告但影响严重的问题，直接关系到 MCP 协议的核心可用性。

5.  **会话锁文件残留**：[#3255](https://github.com/github/copilot-cli/issues/3255)
    - **影响场景**: 进程被 SIGKILL 杀死或崩溃后，`inuse.<pid>.lock` 文件未清理，导致后续无法恢复会话。
    - **社区反应**: 表明会话持久化机制在异常退出场景下的处理还不够健壮。

6.  **ACP模式缺少`fork`能力声明**：[#3256](https://github.com/github/copilot-cli/issues/3256)
    - **影响场景**: 使用 `--acp` (Agent Chat Protocol) 模式的用户无法通过标准协议发现 `/fork` 功能，限制了集成工具的适配性。
    - **社区反应**: 这是一个与 Protocol 设计相关的问题，影响工具链集成。

7.  **GPT模型会话频发API错误**：[#3242](https://github.com/github/copilot-cli/issues/3242)
    - **影响场景**: 自上周起，GPT 模型在尝试创建或更新 PLAN 时会报 “Transient API error”，Claude 模型则正常。
    - **社区反应**: 表明后端对不同模型的支持可能存在不稳定的情况，影响了 GPT 用户的核心开发流程。

8.  **`/research` 命令无法写入文件**：[#3123](https://github.com/github/copilot-cli/issues/3123)
    - **影响场景**: 用户使用 `/research` 进行研究后，Agent 报告 “create” tool 不可用，无法保存报告文件。
    - **社区反应**: 这是一个比较严重的功能 bug，直接导致 `/research` 命令的核心输出环节失效。

9.  **后台Agent静默替换模型**：[#3266](https://github.com/github/copilot-cli/issues/3266)
    - **影响场景**: 用户为后台任务指定了特定模型，但 Agent 在执行时静默使用了另一个模型，仅在元数据中留下记录。
    - **社区反应**: 这种行为缺乏透明度，可能导致用户对模型行为和结果产生误解，属于重要的UX问题。

10. **`edit` 工具对CJK引号处理失败**：[#3254](https://github.com/github/copilot-cli/issues/3254)
    - **影响场景**: 使用 `edit` 工具修改包含中文双引号（U+201C/U+201D）的代码时，会静默返回 “No match found”。
    - **社区反应**: 影响使用中文或相关Unicode字符的代码库，用户（/sandynz）很细心地定位到了具体Unicode编码。

## 重要 PR 进展

- **PR: #2587** 已关闭。
    - **链接**: https://github.com/github/copilot-cli/pull/2587
    - **内容**: 该 PR 引入了一个基于 GitHub Agentic Workflows 的自动化工作流，用于在 Issue 创建或重新打开时，自动为其添加 `area:` 标签和 `triage` 标签。
    - **影响**: 这意味着未来社区提交的 Issue 将更快地进入分类和排序流程，有助于维护者高效管理社区反馈。这也是 Copilot CLI 项目利用 AI 进行自身运营管理的体现。

## 功能需求归类

从近24小时更新的 Issues 中，社区反复提及的功能方向如下：

- **会话与任务管理**: 强烈要求增加会话分支（fork）、优雅暂停（pause/stop）命令，优化侧路提问的体验，而非打断主流程。
- **MCP协议完善**: 关注点集中在连接稳定性（连接池复用）、授权提示信息的准确性，以及工具响应中内容片段的完整性。
- **平台兼容性问题**: 主要集中在 Windows 平台（PowerShell启动、复制粘贴异常）和较旧的 Linux 发行版（Rocky Linux 8.10 上的 GLIBC 版本依赖问题）。
- **挂起/恢复机制**: 用户关注会话锁文件在异常退出后的清理问题，以及对长时间闲置会话令牌过期（#2818）的处理。
- **模型与Agent行为**: 社区对Agent静默替换模型、以及特定模型（如GPT）出现异常错误的行为表现出不满，要求更透明的行为说明和更可靠的模型支持。

## 开发者关注点

1.  **版本一致性与沟通**: 用户在 Issue #3252 中明确指出，更新日志中声明的功能未包含在实际 Release 中，这直接影响了用户对版本发布的信任。开发者反馈的核心是“请确保文档与实际功能一致”。
2.  **静默失败问题**: 多个 Issue（如 #3123, #3254, #3266）指向了一个问题：当操作失败时，工具或 Agent 倾向于返回一个不明确的通用错误信息（如“No match found”, “con not save file”），而不是给出具体的、可操作的错误原因。这导致排查和修复变得困难。
3.  **资源锁定与清理**: 社区对 #3255 这类资源泄漏问题非常敏感，认为程序在非正常退出时应该能够妥善清理自身产生的临时文件和锁，这是衡量软件健壮性的基本标准。
4.  **MCP的可用性**: 从 #3257 和 #3258 可见，MCP 协议的支持是其扩展能力的关键，但目前连接稳定性和数据传输完整性方面仍有较大问题，这是阻止用户将其投入生产环境的核心痛点。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

好的，作为专注于 AI 开发工具的技术分析师，根据您提供的 GitHub 数据，我为您生成了以下 2026-05-13 的 Kimi Code CLI 社区动态日报。

---

# Kimi Code CLI 社区动态日报 | 2026-05-13

## 今日更新概览
Kimi Code CLI 于今日发布了 v1.43.0 版本，主要优化了终端 UI 表现（如间距和通知）并完善了遥测数据模式。社区中，关于模型版本（K2.5 vs K2.6）的讨论热度持续，同时有多个关于增强 CLI 交互灵活性的功能请求（如 `/goal` 命令和初始 prompt 保持交互模式）获得了维护者的回应。

## 版本发布

### v1.43.0
**发布链接**: https://github.com/MoonshotAI/kimi-cli/releases/tag/1.43.0

今日发布的 v1.43.0 版本包含两项主要更新：
- **UI 优化**: 改进了 Shell 的间距、链接高亮显示以及通知的持续时间。
- **遥测改进**: 优化了事件模式，增加了结果枚举、生命周期跟踪和错误信息丰富化，以提升遥测数据的质量。

## 社区热点 Issues

1. **模型选择争议 (#1925) - [enhancement]**
   - **摘要**: 用户请求切换回 Kimi K2.5 模型，认为 K2.6 模型的思考过程抑制了创造力、增加了幻觉，并丢失了原有的“人格”。
   - **链接**: https://github.com/MoonshotAI/kimi-cli/issues/1925

2. **OAI Copilot 兼容性问题 (#1947) - [bug]**
   - **摘要**: 有用户尝试通过 OAI 兼容的 Copilot 服务使用 Kimi Code，但遇到请求失败。问题可能涉及 Kimi CLI 与第三方 OAI 接口的兼容性。
   - **链接**: https://github.com/MoonshotAI/kimi-cli/issues/1947

3. **换行快捷键争议 (#1585) - [enhancement]**
   - **摘要**: 用户强烈请求一个可自定义的换行快捷键（如 Shift+Enter），批评现有的 `Ctrl+J` 快捷键设计不佳，影响了 CLI 交互体验。该 issue 获得 2 个点赞。
   - **链接**: https://github.com/MoonshotAI/kimi-cli/issues/1585

4. **请求支持 OpenAI 兼容 API (#2208) - [enhancement]**
   - **摘要**: 用户希望 Kimi Code 能够提供 OpenAI 兼容的 API，以便直接在 Cursor 等第三方 IDE 工具中调用 Kimi K2.6 模型。
   - **链接**: https://github.com/MoonshotAI/kimi-cli/issues/2208

5. **`/clear` 命令无法恢复上下文 (#2204) - [CLOSED]**
   - **摘要**: 用户指出 `/clear` 和 `/reset` 命令虽然会将历史上下文轮转存储为文件，但缺少恢复这些备份的命令，导致用户体验困惑。
   - **链接**: https://github.com/MoonshotAI/kimi-cli/issues/2204

6. **请求 `/goal` 长任务命令 (#2218) - [enhancement]**
   - **摘要**: 用户希望新增一个类似 Codex 的 `/goal` 命令，用于支持和管理长期、复杂的任务。
   - **链接**: https://github.com/MoonshotAI/kimi-cli/issues/2218

7. **主题模式差异渲染错误 (#2247) - [bug]**
   - **摘要**: 在 v1.43.0 版本中，用户遇到了主题模式下差异（diff）渲染错误的问题，附有截图但未提供详细信息。
   - **链接**: https://github.com/MoonshotAI/kimi-cli/issues/2247

8. **Pillow 库安全漏洞修复 (#2153) - [CLOSED]**
   - **摘要**: 用户报告了因依赖 pillow 12.1.0 版本存在 CVE 漏洞而在安全敏感环境中被阻止安装的问题，建议升级至 12.2.0。该问题已关闭。
   - **链接**: https://github.com/MoonshotAI/kimi-cli/issues/2153

9. **MCP 服务启动时弃用警告 (#2203) - [CLOSED]**
   - **摘要**: 当配置了 MCP 服务器后，每次启动 CLI 都会打印 `AuthlibDeprecationWarning`，影响用户体验。该问题已通过合并 PR 解决。
   - **链接**: https://github.com/MoonshotAI/kimi-cli/issues/2203

10. **请求 `--prompt-interactive` 选项 (#2240) - [enhancement]**
    - **摘要**: 用户希望新增一个选项，允许在传递初始 prompt 后不退出 CLI，而是保持交互式 shell 模式以进行后续对话。当前 `-p` 选项仅支持单次执行后退出。
    - **链接**: https://github.com/MoonshotAI/kimi-cli/issues/2240

## 重要 PR 进展

1. **模型审批模式 UI 统一 (#2249) - [OPEN]**
   - **摘要**: 此 PR 旨在统一当前四种不同的自动批准控制模式（`--yolo`， `--afk`， `/yolo`， `/afk`），通过工具栏徽标和临时通知来简化用户界面，消除混淆。
   - **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2249

2. **实现 `/loop` 循环调度命令 (#2248) - [CLOSED]**
   - **摘要**: 新增 `/loop` 命令，允许用户通过 cron 表达式来调度定期自动执行的 prompt，实现了循环任务的调度能力。
   - **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2248

3. **修复广播队列和缓存导致的内存泄漏 (#2236) - [OPEN]**
   - **摘要**: 修复了因 `BroadcastQueue` 使用无界队列和 Web 端会话缓存导致的内存泄漏问题，通过限制队列大小和缓存容量来防止 OOM。
   - **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2236

4. **新增 `--prompt-interactive` 选项 (#2246) - [OPEN]**
   - **摘要**: 对应 Issue #2240，此 PR 新增了 `-P` / `--prompt-interactive` 选项，允许用户在启动时就传入初始 prompt 并保持交互模式。
   - **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2246

5. **复用 TCP 连接池防止连接泄漏 (#2231) - [OPEN]**
   - **摘要**: 通过引入连接池复用 `TCPConnector` ，减少 HTTP 连接创建的开销，避免了文件描述符耗尽和重复的 TCP 握手。
   - **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2231

6. **集中化 429 错误提示处理 (#2245) - [OPEN]**
   - **摘要**: 将不同接口（shell、print、ACP）中因速率限制（429）导致的错误提示进行统一格式化，为用户提供更一致且友好的反馈，并避免打印冗长的追踪栈。
   - **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2245

7. **工具调用去重 (#2242) - [CLOSED]**
   - **摘要**: 在工具集中引入去重逻辑，避免代理在同一步骤或连续步骤中重复执行相同的工具调用，从而提升效率和稳定性。
   - **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2242

8. **修复 Pillow 安全漏洞 (#2187) - [CLOSED]**
   - **摘要**: 为修复 CVE-2026-25990，将 Pillow 依赖从 12.1.0 升级至 12.2.0，解决了安全环境中的安装阻塞问题。
   - **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2187

9. **构建 macOS x64 CLI 构件 (#2243) - [CLOSED]**
   - **摘要**: 完善 CI 流程，新增了对 macOS x64 架构 CLI 发布构件的自动化构建支持。
   - **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2243

10. **升级 FastMCP OAuth 存储解决弃用警告 (#2241) - [CLOSED]**
    - **摘要**: 将 FastMCP 从 2.12.5 升级至 3.2.4，并更新 OAuth 处理方式，以消除启动时因配置 MCP 服务而触发的 `AuthlibDeprecationWarning` 问题。
    - **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2241

## 功能需求归类

从今日的 Issues 中可以归纳出以下几个明确的用户功能需求方向：
1. **模型选择与切换**: 用户对于 K2.6 模型的表现存在争议，并强烈要求提供切换回旧版本模型（如 K2.5）或选择不同版本模型的能力。
2. **API 兼容性**: 社区反复提出希望 Kimi Code 的 API 能与 OpenAI 标准兼容，以便在 Cursor 等第三方工具中直接使用。
3. **终端 UI 体验**: 包括对快捷键（如换行）的深度定制需求、主题模式下渲染错误的修复、以及更好的命令操作反馈（如 `/clear` 后的恢复机制）。
4. **高级交互模式**: 用户希望引入更复杂的交互模式，如支持长期任务的 `/goal` 命令和可定制的 `/loop` 循环调度命令。
5. **数据与上下文管理**: 用户关注历史上下文的可管理性，包括备份、恢复和清除功能的一致性。

## 开发者关注点

从今日的数据来看，开发者的痛点和关注点主要集中在：
1. **模型版本迭代的兼容性**: 新模型（K2.6）的性能和风格变化引发了部分用户的强烈不满，这是当前社区讨论的一个核心争议点。开发团队需要关注如何平衡模型更新与用户体验的一致性。
2. **终端交互的灵活性不足**: 多篇文章集中反映出用户对当前 CLI 交互模式（如换行、单次执行、无法恢复上下文）的不满，缺少定制化和更灵活的交互方式是明显的短板。
3. **安全与稳定性**: 依赖库的安全漏洞（Pillow）和运行时弃用警告（Authlib）说明开发者环境对安全和代码的整洁性有较高要求。本次版本更新已针对性地修复了相关问题。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

好的，以下是为您生成的 2026-05-13 OpenCode 社区动态日报。

---

# OpenCode 社区动态日报 | 2026-05-13

## 今日更新概览

今日社区活跃度较高，共有 50 个 Issue 和 50 个 PR 更新。核心讨论集中在 **子代理权限继承机制** 的回归缺陷，以及 **Opus 4.6/4.7** 等新模型的兼容性问题。维护者方面，社区贡献者 `@kitlangton` 主导了大量测试框架迁移工作，旨在将测试从 Promise 风格迁移至 Effect 原生运行器。

## 社区热点 Issues

1. **Opus 4.6 的`assistant message prefill`报错** [#13768](https://github.com/anomalyco/opencode/issues/13768)
   - **场景**：使用 Copilot 提供的 Opus 4.6 模型时频繁中断工作流。
   - **摘要**：会话日志显示，当消息流以 `assistant` 角色结束时，会触发“此模型不支持助手消息预填充”的致命错误。该问题已持续近三个月，社区讨论激烈（64 条评论），是目前最受关注的 Bug。

2. **VS Code 1.110 集成终端中小键盘失效** [#16100](https://github.com/anomalyco/opencode/issues/16100)
   - **场景**：在 VS Code 1.110 的集成终端内运行 OpenCode TUI。
   - **摘要**：用户报告数字小键盘的所有按键（0-9、回车、小数点、运算符）均无法被 TUI 识别，但在外部终端中工作正常。表明问题可能是 VS Code 终端对按键序列的处理与 TUI 不兼容。

3. **`opencode-cli` TUI 在升级后消失** [#25879](https://github.com/anomalyco/opencode/issues/25879)
   - **场景**：从 debian 包升级后，`/usr/bin/opencode-cli` 丢失。
   - **摘要**：用户从 `1.14.30` 升级到 `1.14.39` 后发现 TUI 客户端二进制文件消失。该问题已上报五天，开发者尚未在更新日志中就此变更做出说明。

4. **子代理权限继承回归缺陷** [#26700](https://github.com/anomalyco/opencode/issues/26700) & [#26747](https://github.com/anomalyco/opencode/issues/26747) & [#26758](https://github.com/anomalyco/opencode/issues/26758)
   - **场景**：使用“指挥官+工人”模式时，子代理权限受到不当限制。
   - **摘要**：昨日针对权限绕过漏洞的修复（#26597）引入了新的回归问题。现在，父代理的拒绝权限（deny rules）被强制复制到所有子代理中，导致即使子代理拥有明确的写权限，也会被父代理的只读限制所覆盖。多个用户报告了此问题，显示该修复逻辑过于严格。

5. **添加`--dangerously-skip-permissions`（YOLO 模式）** [#8463](https://github.com/anomalyco/opencode/issues/8463)
   - **场景**：自动化工作流或受信任环境中的权限确认弹窗。
   - **摘要**：作者希望在脚本化或可信场景中跳过所有权限提示，以提高自动化效率。该建议已获得 47 个 👍，是社区需求最强烈的功能之一。

6. **SSE 事件流在`server.connected`后立即关闭** [#26697](https://github.com/anomalyco/opencode/issues/26697)
   - **场景**：通过 HTTP API 与 OpenCode 服务器交互的客户端应用。
   - **摘要**：`GET /event` 端点建立连接后仅发送初始的 `server.connected` 事件就终止了连接，导致客户端无法接收后续的消息增量、更新等事件。此问题影响了所有依赖 Server-Sent Events 的集成功能。

7. **Copilot Opus 4.7 触发双重 Token 压缩** [#26230](https://github.com/anomalyco/opencode/issues/26230)
   - **场景**：通过 Copilot 使用 Opus 4.7 模型。
   - **摘要**：用户在切换模型或会话中遭遇 Token 用量瞬间翻倍，导致“双重压缩”。这表明在处理 Opus 4.7 时，上下文压缩逻辑出现了错误，重复计算了 Token 数。

8. **无法关闭 TUI 的启动音效和动画** [#22528](https://github.com/anomalyco/opencode/issues/22528)
   - **场景**：TUI 模式下的启动体验。
   - **摘要**：1.4.4 版本新增了启动动画和音效，但开发者“@elecfrog”认为该功能“廉价且影响性能”。虽然有 41 个 👍，但由于缺乏关闭选项，引发了用户体验倒退的讨论。

9. **功能请求：根据任务类型自动选择模型** [#8456](https://github.com/anomalyco/opencode/issues/8456)
   - **场景**：复杂的编码工作流，需要针对不同子任务使用不同模型。
   - **摘要**：用户希望 OpenCode 能自动为编码、搜索、阅读等不同任务分配最优模型（如用快速廉价模型做搜索，用强模型做重构），以优化成本和效果。该提议获得了 34 个 👍。

10. **Linux x86_64 下所有图片附件被静默丢弃** [#27109](https://github.com/anomalyco/opencode/issues/27109)
    - **场景**：在 Linux x86_64 上使用 `1.14.48` 预编译二进制。
    - **摘要**：无论是 `Read` 工具返回的图片，还是用户通过 `@path` 附件的图片，均被系统以“无法调整大小”为由丢弃。问题定位为 Photon WASM 加载器静默失败，导致所有图像处理流程中断。

## 重要 PR 进展

1. **性能优化：延迟默认打开的工具内容** [#26813](https://github.com/anomalyco/opencode/pull/26813)（已合并）
   - **内容**：通过将默认打开工具（如文件内容）的内容渲染推迟到首次渲染之后，并采用 FIFO 队列逐帧挂载，显著提升了包含大量打开文件的会话初始渲染速度。

2. **性能优化：卸载关闭的审查面板** [#27221](https://github.com/anomalyco/opencode/pull/27221)（已合并）
   - **内容**：在桌面端侧面板关闭时，完全卸载其内容组件（如文件树和审查面板），而非仅隐藏。可有效减少内存占用和 UI 帧率波动。

3. **预览原生 LLM 运行时栈** [#27114](https://github.com/anomalyco/opencode/pull/27114)
   - **内容**：引入一个可选的、基于 Effect 的本地 LLM 运行时作为 AI SDK 的替代方案。此 PR 实现了两种运行时事件的统一，并添加了对 OpenAI Responses API 原生请求的支持，为未来性能和独立性提升奠定基础。

4. **新增原生会话目标功能** [#27163](https://github.com/anomalyco/opencode/pull/27163)
   - **内容**：实现了持久化的会话目标。目标会存储在服务端，并通过 HTTP API 暴露，解决了用户长期以来希望拥有原生会话描述或目标系统的需求。

5. **添加 Open WebUI 提供商支持** [#18306](https://github.com/anomalyco/opencode/pull/18306)
   - **内容**：为 OpenCode 集成 Open WebUI 作为新的模型提供商，允许用户使用自托管的 WebUI 实例中的模型。此 PR 已存在超过两个月，近期获得了更新。

6. **测试框架迁移：迁移 HTTP API SDK 测试** [#27208](https://github.com/anomalyco/opencode/pull/27208)（已合并）
   - **内容**：将 `httpapi-sdk.test.ts` 迁移至 Effect 原生测试运行器风格。此举是 `@kitlangton` 主导的大规模测试基础设施改造的一部分，旨在提高测试的可靠性和可维护性。

7. **测试框架迁移：迁移项目初始化 Git 测试** [#27218](https://github.com/anomalyco/opencode/pull/27218)（已合并）
   - **内容**：将项目初始化相关的 Git 测试迁移至 Effect 运行器，使用 Effect 服务进行文件系统和快照断言。

8. **测试框架迁移：迁移权限询问测试** [#27217](https://github.com/anomalyco/opencode/pull/27217)（已合并）
   - **内容**：将有关权限询问和回复的核心测试逻辑迁移至 Effect 运行器，使用 `Deferred` 和 `Effect.timeoutOrElse` 替代 Promise 轮询。

9. **修复：Git 快照失败时关闭 GIT 操作** [#26895](https://github.com/anomalyco/opencode/pull/26895)
   - **内容**：当追踪快照所需的 Git 命令失败时，系统会明确失败而非允许使用过时的快照状态。这提高了快照功能的健壮性。

10. **更新定价 schema** [#27184](https://github.com/anomalyco/opencode/pull/27184)（已合并）
    - **内容**：同步了 `models.dev` 定价 schema 的最新变更，以确保成本追踪的准确性。

## 功能需求归类

- **子代理/权限系统优化**：多个 Issue（#26700, #26747, #26758, #27123）反映了社区对子代理权限继承机制的强烈关注。用户普遍认为当前逻辑过于严格且存在回归，希望实现更细粒度、更可预测的权限委派。
- **模型兼容性与新特性**：热门议题集中在 **Opus 4.6/4.7** 等新模型的兼容性问题上，包括 `prefill` 错误和双重 Token 压缩。这表明社区正积极跟进最新模型，而框架的适配速度成为瓶颈。
- **UI/UX 体验与性能**：社区对启动音效/动画无法关闭（#22528）、小键盘失效（#16100）、以及 TUI 动画卡顿（#20978）等问题反馈强烈。同时，性能优化（#26813, #27221）得到开发者积极响应。
- **工具链与集成**：用户关注点包括与 VS Code 终端、Open WebUI 等外部工具的集成，以及服务器端事件流（SSE）的稳定性问题（#26697），这对二次开发和自动化工作流至关重要。
- **开发者体验与测试**：大规模测试迁移 PR（如 #27208）的涌现，表明项目正在积极改善内部代码质量和测试基础设施，为未来的稳定性打下基础。这虽然对终端用户不可见，但间接影响了开发速度和修复质量。

## 开发者关注点

1. **子授权系统缺陷**：权限继承的回归问题是当日最严重的痛点，直接破坏了“指挥官-工人”等高级工作流模式。等待维护者提供更精确的修复方案。
2. **SSE 事件流中断**：对于依赖 HTTP API 进行集成或开发自动化的用户，`/events` 接口无法正常工作是一个严重的阻断性 Bug。
3. **键盘兼容性问题**：VS Code 集成终端内的小键盘问题，提示 TUI 在非标准终端环境下的兼容性有待加强。
4. **图像处理流程脆弱**：Linux 下图片附件被静默丢弃并报错`WASM 加载器失败`，说明依赖的 WebAssembly 组件可能存在平台兼容或资源加载的脆弱点。
5. **测试框架迁移**：`@kitlangton` 贡献者持续将测试从 Promise 风格迁移至 Effect 原生运行器，这暗示项目内部可能在进行一次严肃的运行时一致性改造。开发者社群尚未对此进行广泛讨论，但测试稳定性的提升将直接受益所有用户。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

好的，作为专注于 AI 开发工具的技术分析师，我已根据您提供的 GitHub 数据，为您生成了 2026 年 5 月 13 日的 Qwen Code 社区动态日报。

---

# Qwen Code 社区动态日报 | 2026-05-13

## 1. 今日更新概览

今日项目活跃度极高，主要聚焦于持续的性能优化与新功能探索。核心版本迭代至 **v0.15.11-preview.2**，引入了 session-list 元数据读取的性能改进。社区方面，围绕“任务自动中断”、“终端 UI 渲染问题”及“新的守护进程 (Daemon) 与协作 (Cowork) 模式”的讨论最为热烈，多个关键 PR 正在推进中。

## 2. 版本发布

今天有 5 个新版本发布，主要为预览版和夜间版，内容高度重合，核心更新如下：

*   **v0.15.11-preview.0 / preview.1 / preview.2**: 这三个预览版本的核心变更一致，均引入了由 @qqqys 贡献的关键性能优化。
*   **v0.15.10-preview.1** 和 **v0.15.10-nightly.20260513.14512080e**: 内容与上述预览版相同，用于快速迭代和测试。

**核心更新内容 (`perf(core)`):**
> 对 session-list 元数据读取进行了性能优化：将读取范围限定在文件的头尾 64KB，并引入了 buffer 池化和懒加载的消息计数机制。这预计能显著提升打开包含大量历史会话的列表时的速度和内存占用。
>
> **[相关 PR](https://github.com/QwenLM/qwen-code/pull/3897)**

## 3. 社区热点 Issues

过去 24 小时，社区围绕功能增强和体验问题进行了一系列讨论。以下是 10 个值得关注的 Issue：

1.  **任务自动被中断 (`#3730`)**:
    *   **影响**: 严重影响长时间或重型任务的用户体验。用户反馈即使不进行任何操作，Qwen Code 也会自动发送指令停止任务。
    *   **范围**: 核心交互逻辑，被标记为 `priority/P1`。
    *   **讨论**: 用户 `@Kieaer` 报告该问题在新版本中出现，破坏了重度任务的可用性。
    *   **[链接](https://github.com/QwenLM/qwen-code/issues/3730)**

2.  **守护进程模式 (Daemon) 提案 (`#3803`)**:
    *   **影响**: 一项重大的架构提案，旨在将 Qwen Code 作为后台服务 (daemon) 运行，支持 SDK 和 HTTP 接口。
    *   **范围**: 核心功能扩展，社区关注度高（4条评论，1个赞）。
    *   **讨论**: 用户 `@wenshao` 提交了详细的设计方案，并已启动 Stage 1 的实现。
    *   **[链接](https://github.com/QwenLM/qwen-code/issues/3803)**

3.  **终端无限滚动/刷新循环 (`#3838`)**:
    *   **影响**: 直接影响 UI 交互，当模型输出时终端界面进入疯狂刷新循环，导致内容无法阅读。
    *   **范围**: UI/终端渲染层问题。
    *   **讨论**: 用户 `@FullStackSheng` 报告此问题，认为与模型无关，而是终端渲染的 Bug。
    *   **[链接](https://github.com/QwenLM/qwen-code/issues/3838)**

4.  **`/model` 命令的 TAB 补全 (`#4029`)**:
    *   **影响**: 提升 CLI 使用便捷性，允许用户通过 TAB 键循环切换和补全模型名称。
    *   **范围**: CLI 交互体验改进。
    *   **讨论**: 用户 `@jesperpedersen` 提出的一个直观且实用的功能请求。
    *   **[链接](https://github.com/QwenLM/qwen-code/issues/4029)**

5.  **AI 思考循环问题 (`#4055`)**:
    *   **影响**: 另一个导致工具不可用的问题。AI 对简单请求陷入无限循环思考，长时间不回复。
    *   **范围**: 核心 AI 推理或任务规划逻辑。
    *   **讨论**: 用户 `@live-alife` 详细描述了问题，抱怨其严重影响了工作流程。
    *   **[链接](https://github.com/QwenLM/qwen-code/issues/4055)**

6.  **Wayland 下无法粘贴图片 (`#3829`)**:
    *   **影响**: Linux (特别是 Wayland) 用户输入图片能力受限。
    *   **范围**: 跨平台兼容性问题。
    *   **讨论**: 用户 `@EriDeLee` 反馈即使在安装必要依赖后，最新版仍无法粘贴图片。
    *   **[链接](https://github.com/QwenLM/qwen-code/issues/3829)**

7.  **后台任务结果显示优化 (`#4094`)**:
    *   **影响**: 提升多任务处理时的 UI 清晰度，避免过时结果干扰，并提高发现新任务的效率。
    *   **范围**: UI/任务管理。
    *   **讨论**: 用户 `@huww98` 提出了裁剪过时任务结果和改进新任务可发现性的建议。
    *   **[链接](https://github.com/QwenLM/qwen-code/issues/4094)**

8.  **上下文窗口显示不准确 (`#4025`)**:
    *   **影响**: 误导用户关于上下文占用情况，导致不恰当的 `/compact` 操作或意外的上下文超限错误。
    *   **范围**: UI/状态栏数据准确性。
    *   **讨论**: 用户 `@kaisersong` 指出状态栏中的 `cxt` 百分比不准确，被标记为欢迎 PR。
    *   **[链接](https://github.com/QwenLM/qwen-code/issues/4025)**

9.  **添加 Cowork 协作模式 (`#4026`)**:
    *   **影响**: 一项宏大的功能提案，旨在将 Qwen Code 转变为面向非开发者的桌面多Agent协作工具。
    *   **范围**: 产品形态和用户群的扩展，功能点众多。
    *   **讨论**: 用户 `@Maddock-DR` 提出了包含 Artifact、用户提问、连接器注册表、Computer Use 等在内的一整套功能方案。
    *   **[链接](https://github.com/QwenLM/qwen-code/issues/4026)**

10. **文件写入原子性与事务回滚 (`#4095`)**:
    *   **影响**: 提高写入文件的可靠性，防止进程崩溃或断电导致文件损坏。
    *   **范围**: 核心文件操作功能。
    *   **讨论**: 用户 `@doudouOUC` 提出了通过原子写入和事务回滚机制来加固文件写入流程。
    *   **[链接](https://github.com/QwenLM/qwen-code/issues/4095)**

## 4. 重要 PR 进展

今日有多个 PR 取得了积极进展，覆盖性能、新功能和问题修复。

1.  **修复累积流式增量问题 (`#3896`)**:
    *   **内容**: 修复某些 OpenAI 兼容服务（如 DashScope）发送的流数据是累积文本而非增量文本，导致的输出重复问题。
    *   **[链接](https://github.com/QwenLM/qwen-code/pull/3896)**

2.  **提供后台守护进程服务 (`#3889`)**:
    *   **内容**: 实现了 `#3803` 提案的 Stage 1，创建了 `qwen serve` HTTP 守护进程，支持 ACP 协议，并通过 SDK 客户端进行管理。
    *   **[链接](https://github.com/QwenLM/qwen-code/pull/3889)**

3.  **增强安全性与配置 (`#3997`)**:
    *   **内容**: 改进 `runtimeFetchOptions` 的错误处理和文档，使代理分发器创建更明确，增强了安全性和可维护性。
    *   **[链接](https://github.com/QwenLM/qwen-code/pull/3997)**

4.  **`/goal` 智能目标命令 (`#4088`)**:
    *   **内容**: 新增 `/goal` 命令，允许用户设置一个会话目标，并由 LLM 作为“裁判”来判断目标是否达成，从而实现自动化循环，直到目标满足。
    *   **[链接](https://github.com/QwenLM/qwen-code/pull/4088)**

5.  **MCP 启动性能优化 (`#3994`)**:
    *   **内容**: 将 MCP (Model Context Protocol) 发现过程变为异步非阻塞，不再因此阻塞首次用户输入。大幅优化了配置了 MCP 的用户的首字响应时间 (TTI)。
    *   **[链接](https://github.com/QwenLM/qwen-code/pull/3994)**

6.  **为本地模型添加重试逻辑 (`#3974`)**:
    *   **内容**: 针对 LM Studio 等本地服务器因模型被卸载而返回的错误，自动进行重试，提升了使用本地模型的稳定性。
    *   **[链接](https://github.com/QwenLM/qwen-code/pull/3974)**

7.  **任务系统重构 (`#3970`)**:
    *   **内容**: 引入共享的 `TaskBase` 信封，统一了任务 ID、类型和描述符，为后续合并三个独立任务注册表打下基础，是重要的内部重构。
    *   **[链接](https://github.com/QwenLM/qwen-code/pull/3970)**

8.  **`/rewind` 命令的文件恢复 (`#4064`)**:
    *   **内容**: 增强了 `/rewind` 命令的功能，使其不仅能回滚对话历史，还能通过文件拷贝的备份系统，恢复 AI 修改过的文件。
    *   **[链接](https://github.com/QwenLM/qwen-code/pull/4064)**

9.  **代码拆分提升启动性能 (`#4070`)**:
    *   **内容**: 将代码高亮库 `lowlight` (~1.5MB) 进行代码拆分，使其只在需要时加载，从而减少了 CLI 启动时的 V8 解析时间。
    *   **[链接](https://github.com/QwenLM/qwen-code/pull/4070)**

10. **展示 `Explore` 子Agent模型 (`#4086`)**:
    *   **内容**: 让内置的“探索(Explore)”子Agent优先使用配置的 `fastModel`（如 qwen3-coder-flash），在适用场景下提升速度和降低开销。
    *   **[链接](https://github.com/QwenLM/qwen-code/pull/4086)**

## 5. 功能需求归类

从今日的 Issues 中，可以观察到社区对以下功能方向的反复提及和较高期待：

*   **终端 UI/UX 优化**:
    *   解决终端无限刷新、渲染错误等问题 (如 `#3838`)。
    *   优化状态栏信息准确性，如上下文占用百分比 (如 `#4025`)。
    *   改进快捷键和操作习惯，如支持 Emacs 风格快捷键 (如 `#3821`)。
*   **自动化与智能交互**:
    *   需求从简单的“执行命令”向更智能的“设定目标” (如 `/goal` 命令) 和“多步协作” (如 Cowork 提案 `#4026`) 演进。
    *   监控和修复 AI 进入思考循环或自动停止任务的 Bug (如 `#4055`, `#3730`)。
*   **本地化与跨平台支持**:
    *   持续关注在 Linux/Wayland 等非主流环境下的原生体验，如图片粘贴 (如 `#3829`)。
    *   对本地模型推理 (如 llama.cpp, LM Studio) 的兼容性和稳定性提出了更高要求 (如 `#3674`, `#3974`)。
*   **安全与可靠性增强**:
    *   重视敏感信息（如 API Key）的安全存储，如加密存储提案 (如 `#4016`)。
    *   关注文件读写的可靠性，要求原子写入和事务回滚 (如 `#4095`)。
    *   要求工具返回内容的一致性和准确性，避免额外渲染导致编辑失败 (如 `#4077`)。
*   **数据与性能**:
    *   优化启动时间，如代码拆分 (如 `#4070`)。
    *   减少空闲时的资源消耗 (如 `#4033`)。

## 6. 开发者关注点

综合社区反馈和开发者讨论，以下痛点和高频需求尤为突出：

*   **自动化交互的稳定性**: 多个高优 Bug (`#3730`, `#4055`) 表明，AI 在执行任务时出现“自动停止”或“思考循环”是当前最影响核心使用体验的问题。开发者急需核心团队修复这些导致工具不可用的逻辑缺陷。
*   **本地化部署支持**: 用户对 Ollama、llama.cpp 等本地服务的配置和使用反馈活跃，问题涵盖图像输入识别 (`#3674`) 和模型加载重试 (`#3974`)。这表明本地化、隐私优先的使用场景具有强烈且明确的需求。
*   **终端渲染性能与准确性**: “无限滚动” (`#3838`) 和“上下文百分比不准” (`#4025`) 是常见的 UI/UX 痛点，直接影响了开发者在终端长时间工作的效率和判断力。
*   **性能与资源占用**: 无论是启动时的 V8 解析开销 (`#4070`) 还是等待外部进程时的 CPU 高占用 (`#4033`)，都指向开发者对工具本身轻量化、无感化的高要求。

</details>