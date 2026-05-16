# AI CLI 工具社区动态日报 2026-05-16

> 生成时间: 2026-05-16 02:07 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## 横向对比

好的，这是基于您提供的2026-05-16各主流AI CLI工具社区动态数据生成的横向对比分析报告。

---

# AI CLI 工具生态横向对比分析日报 | 2026-05-16

## 1. 今日横向概览

今日各AI CLI工具社区活动普遍集中在**稳定性修复**与**基础设施打磨**上，未出现重大功能发布或生态格局变化。**Claude Code** (v2.1.143) 和 **OpenCode** (v1.15.0) 发布了新版本，分别侧重插件依赖管理优化和基于Effect的新事件系统。**OpenAI Codex** 连续发布3个alpha版本，并在远程控制授权和Windows沙箱迁移上有显著进展。**Qwen Code** 发布了4个版本，修复了Markdown链接可点击性与流式响应问题，但其社区被高频的 **内存溢出（OOM）** 问题所主导。**GitHub Copilot CLI** 和 **Kimi Code CLI** 今日未发布正式版本，但社区活跃度在MCP集成和Hook回调机制上表现突出。

## 2. 各工具活跃度对比

| 工具名称 | 今日新增/更新 Issues (条) | 主要亮点 Issue | 今日活跃 PRs (条) | 今日版本发布 | 备注 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | ~50 | `rm -rf` 误删代码 (#58885)、Agent编造事实 (#59601) | 2 | v2.1.143 | 高关注度Bug报告多，社区对数据丢失高度警惕。 |
| **OpenAI Codex** | ~50 | 远程控制授权失败 (#22696)、插件加载回归 (#22752) | 10 | 3个alpha版本 | 连续迭代，修复/TUI同步与沙箱迁移工作量大。 |
| **Gemini CLI** | 10 (精选) | 通用代理卡死 (#21409)、子代理状态报告不准确 (#22323) | 10 | 1个夜间版 | 代理行为与可靠性问题是社区焦点。 |
| **GitHub Copilot CLI** | 12 (新提交) | 会话分叉需求 (#1697)、TLS证书加载慢 (#3330) | 0 | v1.0.49 (2个版本) | 社区功能需求明确，但PR活跃度低。 |
| **Kimi Code CLI** | 11 | K2.6模型过载 (#2077)、用户Prompt Hook空文本 (#2304) | 10 | 无 | 社区贡献者活跃，修复进度快（如Hook修复PR已提交）。 |
| **OpenCode** | 10 (精选) | 内存问题汇总 (#20695)、VS Code扩展需求 (#11176) | 10 | v1.15.0 | 功能发布+社区贡献PR，生态共建趋势明显。 |
| **Qwen Code** | 10+ (精选) | OOM 崩溃问题 (#4167, #4149)、OAuth免费策略调整 (#3203) | 10 | 4个版本 | 社区被内存问题主导，团队正集中投入诊断工具开发。 |

## 3. 共同出现的功能方向

多个工具社区在今日的反馈中，共同指向了以下功能方向：

- **内存与稳定性问题**：**Qwen Code** 今日社区被高频的“JavaScript堆内存不足”（OOM）问题主导，并已提交多个PR（如#4186）进行自动压缩安全网修复。**OpenCode** 也长期存在内存问题，并开设了专门的“内存问题汇总贴”(#20695)，要求用户提供堆快照数据。**Claude Code** 则报告了因Agent行为导致的数据丢失（`rm -rf`误删代码 #58885）。这表明**Agent模式下长期会话的资源管理和操作安全性是业界共同痛点**。

- **远程控制与跨设备协作**：**OpenAI Codex** 社区对“远程控制”功能的需求持续高涨，今日仍有授权失败(#22696)和相关功能请求(#9224)。**Claude Code** 社区也有用户反映远程控制会话流不显示的问题。这反映了开发者对**跨设备无缝接管会话**的强烈诉求。

- **Agent 自主性与感知力提升**：**Gemini CLI** 社区反馈代理不主动使用技能(#21968)和状态报告不准确(#22323)。**Claude Code** 社区则报告Agent编造代码库事实(#59601)和后台Agent无法协作(#59598)。这表明**提升Agent对环境的感知准确性、主动决策能力及Agent间的协作能力**是当前多工具面临的共同挑战。

- **API/模型连接稳定性**：**Kimi Code CLI** 报告了K2.6模型过载问题(#2077)。**GitHub Copilot CLI** 有企业策略导致模型访问被拒(#3101)的问题。**Qwen Code** 用户报告API连接成功但无法获取数据(#3914)。**OpenAI Codex** 用户遇到远程控制授权失败(#22696)。**模型服务端稳定性、认证机制的可靠性及网络连接管理**是多款工具共有的短板。

## 4. 差异化定位分析

| 工具名称 | 功能侧重 | 目标用户 | 技术路线/生态 |
| :--- | :--- | :--- | :--- |
| **Claude Code** | **多Agent协作与精细权限控制**。强调插件生态依赖管理、后台Agent协作与成本透明。 | 追求自动化工作流、关注Token成本和安全的专业开发者团队。 | 强依赖于Anthropic的Claude模型，注重Agent行为的可控制性与可审计性。 |
| **OpenAI Codex** | **远程控制与桌面集成**。深耕“Desktop App + TUI + Remote Control”一体化体验，积极建设MCP生态。 | 需要跨设备、跨平台（Windows特别是WSL）工作的开发者。 | 基于OpenAI GPT系列模型，技术演进聚焦于远程控制授权和沙箱（特别是Windows）重构。 |
| **Gemini CLI** | **代理行为深度优化**。专注于解决“通用代理”卡死、子代理状态报告不准确、主动决策能力等核心行为问题。 | 对Agent决策逻辑和可靠性有极高要求的技术用户。 | 依托Google的Gemini模型，并积极探索AST感知工具等提升代码理解深度。 |
| **GitHub Copilot CLI** | **开发者工作效率（Enterprise Ready）**。提供`/mcp search`、实验性工具延迟加载、模型推理努力度控制等功能。 | 广泛的企业级开发者，强调与GitHub生态的集成。 | 与Copilot模型和服务深度绑定，关注点在于降低开发者使用门槛和集成到日常工作流。 |
| **Kimi Code CLI** | **轻量敏捷、社区共建**。社区贡献者活跃（如Hook修复、Shift+Enter快捷键、`/usage`命令），修复速度快。 | 追求快速上手、社区驱动快速迭代的开发者。 | 技术栈相对轻盈，社区热情高，PR提交直接针对用户痛点，展现出不依赖官方也能快速修补的活力。 |
| **OpenCode** | **开源生态与系统架构创新**。引入基于Effect的核心事件系统，追求更健壮的跨会话交付。 | 深度参与开源社区、对底层技术架构感兴趣的开发者。 | 开放性高，社区讨论深入（如内存问题分析、设计提案）。目标是构建一个高度可扩展的开源平台。 |
| **Qwen Code** | **会话可靠性与生产环境就绪**。重点解决OOM、内存泄漏、守护进程(`qwen serve`)生产化、会话恢复等问题。 | 对会话稳定性、大规模任务处理、自托管有需求的用户。 | 技术栈围绕Node.js，当前重心在内存诊断与自动修复，以及对服务端模式的深度打磨。 |

## 5. 社区活跃度记录（基于今日数据）

- **开源社区参与度最高（PR数量）**：**OpenAI Codex**、**Gemini CLI**、**Kimi Code CLI**、**OpenCode** 和 **Qwen Code** 均展现了极高的贡献者活跃度，今日均有10个活跃PR，涉及功能实现、Bug修复和测试基础设施。
- **社区反馈最密集（Issue数量与讨论热度）**：**Claude Code** 和 **OpenAI Codex** 的Issue数量最多（均约50条），且Bug报告（如数据丢失、远程控制授权失败）和功能请求（如推理过程追踪）的关注度（👍数、评论数）极高，社区情绪较为焦灼。
- **维护者回应速度**：**Kimi Code CLI** 和 **Qwen Code** 对社区高频痛点（如Hook回调问题、OOM问题）的响应最快，已提交了对应的修复或诊断PR。**OpenCode** 对内存问题也保持了高关注度，并主动要求用户提供数据。
- **正式版本发布节奏**：**OpenAI Codex** (3个alpha) 和 **Qwen Code** (4个版本) 今日发布最为频繁，显示了快速迭代的节奏。**Claude Code** 和 **OpenCode** 分别发布了功能增强版本。

## 6. 有证据支撑的观察

1.  **内存与稳定性成为社区首要共同痛点**：**Qwen Code** 今日被多个OOM崩溃报告（#4167, #4149）淹没，团队紧急提交自动压缩安全网PR（#4186）。**OpenCode** 同样长期受此困扰，并开设汇总贴引导堆快照收集（#20695）。这不是偶然，反映了当前AI CLI工具在长时间、大上下文任务下的资源管理普遍不足。

2.  **远程控制功能需求从“尝鲜”变为“刚需”**：**OpenAI Codex** 社区持续报告远程控制授权失败（#22696）和连接稳定性问题，而**Claude Code** 也有用户反馈会话流不显示。这表明用户对跨设备无缝协作的期待正在快速转化为硬性需求，两个工具的用户都遇到了实际体验的落差。

3.  **Agent自主性与行为可预测性仍是最大挑战**：**Gemini CLI** 报告代理不主动使用技能（#21968），**Claude Code** 报告Agent编造事实（#59601）。这些并非孤例，而是反映了当前AI Agent在执行复杂任务时，其自主决策的准确性和鲁棒性远未达到开发者期望，是整个行业的普遍课题。

4.  **“开箱即用”的集成体验正在成为竞争焦点**：**GitHub Copilot CLI** 通过`/mcp search`命令降低MCP集成门槛。**OpenCode** 通过新的事件系统提升跨集成交付的可靠性。**Kimi Code CLI** 社区贡献者直接为`/usage`命令添加了`--json`输出，以方便CI/脚本集成。各工具都在努力降低外部工具和流程的集成复杂度。

5.  **对核心模型与服务质量的依赖度问题凸显**：**Kimi Code CLI** 的K2.6模型过载问题（#2077）和**GitHub Copilot CLI** 的企业策略限制（#3101）表明，AI CLI工具的用户体验高度依赖其背后模型服务的**容量与可用性**。当后端模型出现性能瓶颈或配置问题时，前端工具将直接“失能”，这是所有此类工具共有的风险点。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

好的，请看为您生成的 2026-05-16 Claude Code 社区动态日报。

---

# Claude Code 社区动态日报 | 2026-05-16

## 今日更新概览

今日 Claude Code 发布了新版本 **v2.1.143**，重点增强了插件依赖管理机制与成本透明度。社区活跃度较高，共产生近 **50 条** 更新 Issue 及 **2 个** 新 PR。其中，关于“使用量周期异常”和“数据丢失”的 Bug 报告持续发酵，开发者对 Agent 模式的稳定性和文档完整性提出了更高要求。

## 版本发布

### v2.1.143
- **主要更新内容：**
  - **插件依赖强制管理**：`claude plugin disable` 命令现在会检查目标插件是否被其他已启用的插件依赖，若存在依赖则拒绝禁用，并提供可复制的禁用链提示。同时，`claude plugin enable` 现在会强制启用传递性依赖。
  - **上下文成本预估**：新增了每次对话和每轮对话的预估上下文成本显示功能，帮助开发者更好地掌握使用成本。
- **社区反应**：社区对插件管理功能的改进普遍持正面态度，认为这解决了插件生态中常见的依赖冲突问题。

## 社区热点 Issues

以下是今日值得关注的 **10 个** 社区 Issue，涵盖了从严重 Bug 到功能需求的广泛议题。

**1. 问题：#36503: 频道插件状态误导与消息接收异常**
- **内容**：`--channels plugin:telegram` 插件启动时显示“Channels are not currently available”，但实际运行正常，且无法接收入站消息触发响应。
- **影响**：影响通过 Telegram 插件使用 Channels 功能的用户，造成状态误导和功能失效。
- **链接**: https://github.com/anthropics/claude-code/issues/36503

**2. 问题：#52472: 周使用量限制提前重置**
- **内容**：Pro 和 Max 用户反映，每周的用量限制会在约 24 小时后重置，而非文档所述的 7 天周期，导致用户非预期性地消耗完用量。
- **影响**：直接影响到 Pro/Max 付费用户的权益和合理使用规划，是社区反馈中的高频痛点。
- **链接**: https://github.com/anthropics/claude-code/issues/52472

**3. 问题：#39471: Cowork OTLP 监控未正常发射事件**
- **内容**：即便配置正确，Cowork 的 OTLP 监控也未向配置的端点发送任何事件，经用户多方验证，Cowork VM 的 OTel 导出器处于静默状态。
- **影响**：对于依赖可观测性的团队，该 Bug 导致监控和追踪功能完全失效。
- **链接**: https://github.com/anthropics/claude-code/issues/39471

**4. 问题：#39027: 后台任务通知触发未授权的 API 调用**
- **内容**：后台任务完成的通知会伪装成用户输入，触发模型在无用户明确授权的情况下进行 API 调用，可能引发意外操作。
- **影响**：这是一个涉及后台任务代理权限和自主性的高危 Bug，可能造成数据安全风险。
- **链接**: https://github.com/anthropics/claude-code/issues/39027

**5. 问题：#33539: OAuth 登录链接在 TUI 中无法使用**
- **内容**：TUI 界面将 OAuth 登录 URL 渲染在装饰性文本框内，导致链接无法点击、复制，对 Pro/Max 付费用户的主要认证方式构成了严重障碍。
- **影响**：影响所有需要重新认证的用户，是最影响核心体验的 UI Bug 之一。
- **链接**: https://github.com/anthropics/claude-code/issues/33539

**6. 问题：#58885: Agent 模式下 `rm -rf` 误删未跟踪代码**
- **内容**：由于残留工作树清理机制的缺陷，Claude Code 在不合适的时机使用 `rm -rf` 作为后备方案，误删了用户未跟踪的代码文件，导致数据丢失。
- **影响**：这是社区最关注的 Bug 之一，直接导致了代码丢失，风险极高。
- **链接**: https://github.com/anthropics/claude-code/issues/58885

**7. 问题：#59577: 权限建议 UI 生成格式错误的规则**
- **内容**：对于 Git 提交的 heredoc 模式，权限建议 UI 生成了包含未闭合引号的错误规则，导致规则不可用，甚至可能使对话框崩溃。
- **影响**：影响用户在配置 Git 自动化操作时的权限管理体验。
- **链接**: https://github.com/anthropics/claude-code/issues/59577

**8. 问题：#59601: Agent 编造代码库事实**
- **内容**：Claude Code Agent 在没有读取实际源码文件的情况下，虚构了代码库中的组件数量、功能实现等具体事实，并将其作为后续工作的依据。
- **影响**：该问题会从根本上误导开发者的理解和工作方向，属于模型准确性的严重缺陷。
- **链接**: https://github.com/anthropics/claude-code/issues/59601

**9. 问题：#59599: [功能请求] 推理过程追踪**
- **内容**：用户希望在 TUI 中实时看到模型的推理过程细节，而不是最终答案，以便更好地理解和控制模型的生成过程。
- **影响**：这是一个高频功能需求，反映了开发者对模型“黑箱”决策透明度的诉求。
- **链接**: https://github.com/anthropics/claude-code/issues/59599

**10. 问题：#59598: [功能请求] 后台 Agent 应感知同仓库的其他 Agent**
- **内容**：在同一个代码仓库中运行的后台 Agent 彼此之间互不知晓，也无法利用 Git 工具链实现更好的协作。
- **影响**：该需求反映了社区对 Agent 间协作和系统级工作模式编排的更高期望。
- **链接**: https://github.com/anthropics/claude-code/issues/59598

## 重要 PR 进展

今日活跃 PR 数量有限，以下是值得关注的两个 PR 进展。

**1. PR #59508: 修复 `bash_command_validator` 示例钩子的正则误报**
- **内容**：修复了 `examples/hooks/bash_command_validator_example.py` 中的两个正则表达式 Bug，解决了对 `grep` 前置管道和 `echo at` 命令的误判问题。
- **影响**：提高了官方示例的准确性，为使用该钩子的开发者提供了更可靠的参考。
- **链接**: https://github.com/anthropics/claude-code/pull/59508

**2. PR #59495: 修正 README 中的 GitHub 品牌命名**
- **内容**：将 README 文件中误写的 “Github” 修正为官方品牌名 “GitHub”。
- **影响**：属于文档规范性修复，虽然功能影响微小，但体现了对品牌规范的重视。
- **链接**: https://github.com/anthropics/claude-code/pull/59495

## 功能需求归类

从当日反馈的 Issue 中，可以归纳出以下几个社区反复提及的功能方向：

- **Agent 协作与感知**：多个 Issue 提及后台 Agent 之间的协作和感知能力，以及 Agent 与 Git 工作流的更好集成（如 `#59598`、`#59590`）。
- **推理过程可视化**：开发者对 TUI 中的“推理追踪”功能有强烈需求，希望模型能够展示其推理过程（`#59599`）。
- **文档覆盖与补全**：社区对 Agent View、后台会话持久化、权限模式等特性的文档缺失或不全提出了明确的补充需求（`#59589`、`#59590`、`#59593`、`#59596`）。
- **跨平台稳定性**：针对 Windows 和 Linux 平台，社区反馈了大量关于 TUI 冻结、进程无限启动、粘贴失效等问题（`#57242`、`#59602`、`#59010`）。
- **MCP 功能扩展**：用户希望在现有的 Slack MCP 连接器中支持组 DM 场景，以及对“预览”启动命令的稳定性有更高要求（`#54332`、`#59602`）。

## 开发者关注点

总结开发者反馈中的主要痛点和需求要点：

- **数据丢失是最高优先级**：围绕 `#58885` 的“rm -rf 误删代码”和 `#59601` 的“Agent 编造事实”的讨论最为激烈，开发者对 Agent 模式下可能导致数据和信息丢失的行为高度警惕。
- **权限管理与自主性**：`#39027` 揭示的后台任务未授权 API 调用问题，以及 `#44980` 提到的团队 MCP 凭证共享问题，反映出社区对精细权限控制和安全边界的迫切需求。
- **使用量周期与计费**：`#52472`、`#51222`、`#52921` 等多个 Issue 共同指向了“使用量周期显示和重置逻辑异常”的问题，这表明用户对计费透明度和可预测性非常敏感。
- **Windows 兼容性仍是挑战**：Windows 平台上出现的 TUI 冻结、进程泄漏等问题在今日的活跃 Issue 中多次出现，说明该平台的稳定性和兼容性仍然是 Anthropic 需要重点优化的领域。
- **对“远程控制”功能的急切需求**：`#59255` 报告的远程控制会话流不显示问题，反映了用户对跨设备协同工作方式的渴望和当前体验上的巨大落差。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 | 2026-05-16

## 今日更新概览
过去 24 小时，Codex 仓库发布了 3 个 Rust CLI alpha 版本（0.131.0-alpha.19/21/22），共更新 50 条 Issue 和 50 条 Pull Request。社区关注焦点集中在**远程控制授权/连接**、**权限配置迁移**、**长对话 TUI 稳定性**以及 **Windows 沙箱重构** 上。

---

## 版本发布

- **rust-v0.131.0-alpha.22** — [Release](https://github.com/openai/codex/releases/tag/rust-v0.131.0-alpha.22)
- **rust-v0.131.0-alpha.21** — [Release](https://github.com/openai/codex/releases/tag/rust-v0.131.0-alpha.21)
- **rust-v0.131.0-alpha.19** — [Release](https://github.com/openai/codex/releases/tag/rust-v0.131.0-alpha.19)

三个版本仅标注了版本号，未附带详细的变更说明。推测为 CLI 的连续迭代。

---

## 社区热点 Issues（10 条）

1. **#9224 Remote Control 功能请求**（关闭，401👍，54条评论）
   用户希望在手机 ChatGPT 应用中远程控制桌面 Codex CLI。该 Issue 已关闭，但引发了后续 50+ 条关于远程控制的讨论。
   [查看](https://github.com/openai/codex/issues/9224)

2. **#11626 原生 `/rewind` 检查点恢复**（开放，130👍，29条评论）
   希望 `Esc` 回退能同时恢复对话状态和代码编辑。当前只回退对话。
   [查看](https://github.com/openai/codex/issues/11626)

3. **#22696 远程控制授权失败**（开放，46👍，27条评论）
   Codex Desktop 更新后设置“Control from ChatGPT”时弹出授权错误，影响 Pro 用户。
   [查看](https://github.com/openai/codex/issues/22696)

4. **#22694 Computer Use 硬要求 macOS 26.0**（开放，7👍，12条评论）
   运行时提示缺少 `swift_task_addPriorityEscalationHandler`，实测需要 macOS 26.0+，但文档未说明。
   [查看](https://github.com/openai/codex/issues/22694)

5. **#21218 VS Code 扩展 DNS 解析失败**（开放，5👍，11条评论）
   企业用户反馈在 macOS 上 VS Code 扩展无法解析主机名，导致连接中断。
   [查看](https://github.com/openai/codex/issues/21218)

6. **#20741 桌面版项目聊天历史消失**（开放，5👍，8条评论）
   更新到 26.429.30905 后，已保存的聊天对话全部消失，用户使用 M5 Max 设备。
   [查看](https://github.com/openai/codex/issues/20741)

7. **#17193 长对话滚动时自动跳回顶部**（开放，1👍，3条评论）
   在 macOS 上滚动查看最新消息时，视图突然跳转到对话顶部，影响阅读。
   [查看](https://github.com/openai/codex/issues/17193)

8. **#22752 插件加载回归**（开放，4👍，3条评论）
   新版 App（26.513.20950）中输入 `@` 无法弹出插件列表，插件完全不可用。
   [查看](https://github.com/openai/codex/issues/22752)

9. **#22933 点击工具栏导致崩溃**（开放，0👍，2条评论）
   按“左键-右键-左键”顺序点击工具栏后 App 闪退，复现于 macOS 26.5。
   [查看](https://github.com/openai/codex/issues/22933)

10. **#22936 WSL 中 TUI 视图跳转**（开放，1条评论）
    在 WSL 下运行 CLI，长对话结束后视图自动跳回顶部，与 #17193 类似。
    [查看](https://github.com/openai/codex/issues/22936)

---

## 重要 PR 进展（10 条）

1. **#22879 修复 `/review` 按下 Esc 崩溃**
   阻止用户在 `/review` 模式下进行 steer 操作导致崩溃；steer 当前在该模式下不支持。
   [查看](https://github.com/openai/codex/pull/22879)

2. **#22510 / #22509 / #22508 三连 PR：TUI next-turn 状态同步**
   添加核心/服务端/UI 三层支持，使远程 TUI 客户端能同步 next-turn 设置（模型、计划模式等）。
   [查看](https://github.com/openai/codex/pull/22510) · [22509](https://github.com/openai/codex/pull/22509) · [22508](https://github.com/openai/codex/pull/22508)

3. **#22769 exec-server 使用标准认证注册远程执行器**
   将远程 exec-server 注册从 registry 凭据改为标准 Codex 认证路径，保持 biscuit-only 协议。
   [查看](https://github.com/openai/codex/pull/22769)

4. **#22896 / #22918 / #22923 Windows 沙箱权限迁移**
   将 Windows sandbox 从旧的 `SandboxPolicy` 迁移到 `PermissionProfile`，逐步替换路径规划、提升运行器 IPC 和写根路径。
   [查看](https://github.com/openai/codex/pull/22896) · [22918](https://github.com/openai/codex/pull/22918) · [22923](https://github.com/openai/codex/pull/22923)

5. **#22929 加固 CLI 速率限制窗口标签**
   根据实际返回的窗口时长格式化限制标签，不再硬编码为“5h”和“每周”，提高兼容性。
   [查看](https://github.com/openai/codex/pull/22929)

6. **#22782 添加 SubagentStart 钩子**
   在线程生成的子代理发送第一个模型请求之前执行，支持按 `agent_type` 匹配处理函数。
   [查看](https://github.com/openai/codex/pull/22782)

7. **#22878 改进 `codex remote-control` CLI 体验**
   默认以前台命令运行（显示机器名、等待 Ctrl-C），不再默认后台守护；仍提供 daemon 选项。
   [查看](https://github.com/openai/codex/pull/22878)

8. **#21559 TUI 命名权限配置文件选择器**
   当用户通过 `default_permissions` 或 `[permissions.*]` 配置了命名权限配置文件后，`/permissions` 选择器保留其身份，不再转为匿名预设。
   [查看](https://github.com/openai/codex/pull/21559)

9. **#22931 运行时刷新活跃权限配置文件**
   确保命名权限配置文件被选中后，会话刷新能正确重建网络代理状态，使配置切换生效。
   [查看](https://github.com/openai/codex/pull/22931)

10. **#22679 支持音频输入**
    新增 `InputModality::Audio`，允许模型接收音频内容（MCP 或 code 输出），目前受模型模态门控。
    [查看](https://github.com/openai/codex/pull/22679)

---

## 功能需求归类

从近期 Issues 中可归纳出以下集中反馈方向：

| 方向 | 代表 Issue | 用户诉求要点 |
|------|------------|--------------|
| **远程控制** | #9224, #22696, #22851, #22750, #22693 | 手机控制桌面、SSH 远程、授权易用性、连接稳定性 |
| **检查点回滚** | #11626 | 希望 `/rewind` 同时恢复对话和代码编辑 |
| **插件与工具链** | #22752, #21618 | 插件加载回归、Browser Use 不可用、JavaScript 执行工具缺失 |
| **权限与沙箱** | #21559, #22931, #22896 | 命名权限配置文件、运行时刷新、Windows 沙箱简化 |
| **模型行为** | #22932 | GPT-5.3 Codex 过度调用 web search，缺少抑制机制 |
| **TUI 稳定性** | #17193, #22936, #22694 | 长对话视图跳转、计算机使用硬版本要求 |
| **音频输入** | #22679 | 新增音频模态，用于语音交互 |

---

## 开发者关注点

- **远程控制授权普遍受阻**：多个用户报告在设置远程控制时出现授权失败、“Waiting for desktop”死循环等问题，集中在 26.513.20950 版本。
- **插件回归影响日常工作流**：App 更新后无法使用 `@` 唤起插件，开发者依赖的技能链（如浏览器、MCP）暂时失效。
- **Computer Use 硬依赖 macOS 26.0**：低版本系统用户无法使用该功能，且文档未告知，属于不预期的运行时阻断。
- **聊天历史丢失**：部分用户更新后项目级聊天记录消失，对持续开发造成影响。
- **长对话滚动异常**：CLI 和 Desktop App 均存在视图跳顶现象，影响输出审阅效率。
- **Windows 沙箱迁移进行中**：多个 PR 正在将权限模型从 `SandboxPolicy` 重构为 `PermissionProfile`，短期内可能影响 Windows 用户的沙箱行为一致性。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

好的，作为专注于 AI 开发工具的技术分析师，我将根据您提供的 GitHub 数据，为您呈现 2026 年 5 月 16 日的 Gemini CLI 社区动态日报。

---

### Gemini CLI 社区动态日报

**日期:** 2026-05-16

**数据来源:** github.com/google-gemini/gemini-cli

---

#### 1. 今日更新概览

今日社区活跃度较高，主要围绕稳定性和代理行为修复展开。核心看点包括：新版夜间版发布，暴露了 RAG 调试片段；同时，社区集中反馈了多个与“通用代理”相关的挂起和状态报告错误问题，开发者正在针对性地修复钩子上下文及终端兼容性问题。

#### 2. 版本发布

-   **`v0.44.0-nightly.20260515.g928a311fb`**
    -   **核心更新：**
        -   **新功能 (core):** 新增将 RAG（检索增强生成）片段暴露到本地日志文件的功能，便于开发者进行调试 (`#27016`)。
        -   **修复 (auth):** 修复了企业网关上可能出现的凭证冲突问题，并原生支持可选的 API 密钥 (`#27016`)。
    -   **链接:** [Release Page](https://github.com/google-gemini/gemini-cli/releases/tag/v0.44.0-nightly.20260515.g928a311fb)

#### 3. 社区热点 Issues (10条)

1.  **通用代理卡死 (#21409)**
    -   **影响场景:** 用户在使用 Gemini CLI 时，任何需要调用“通用代理”的操作（如创建文件夹）都会导致永久挂起，直至人工取消。避免让模型使用子代理可以绕开此问题。
    -   **社区反应:** 7个回复，7个👍，严重影响用户体验。
    -   **链接:** [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

2.  **子代理状态报告不准确 (#22323)**
    -   **影响场景:** 当子代理（如代码库调查员）达到最大对话轮次限制时，系统却错误地报告任务状态为“成功（实现目标）”，导致用户被误导，以为任务已完成。
    -   **社区反应:** 6个回复，2个👍，这是一个典型的错误状态传播问题。
    -   **链接:** [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

3.  **AST 感知工具评估 (EPIC) (#22745)**
    -   **影响场景:** 这是一个跟踪多个调研任务的大型 EPIC，核心是评估引入 AST（抽象语法树）感知的文件读取、搜索和代码映射工具的价值。旨在提高代码读取的精准度，减少 token 浪费。
    -   **社区反应:** 7个回复，1个👍，代表了项目对更深层代码理解能力的探索。
    -   **链接:** [Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)

4.  **组件级评估体系 (EPIC) (#24353)**
    -   **影响场景:** 该 EPIC 旨在建立更健壮的组件级评估框架，以衡量 Gemini CLI 各代理组件的性能。是项目质量保障体系演进的重要一步。
    -   **社区反应:** 6个回复，0个👍，属于幕后工程质量提升工作。
    -   **链接:** [Issue #24353](https://github.com/google-gemini/gemini-cli/issues/24353)

5.  **代理不主动使用技能和子代理 (#21968)**
    -   **影响场景:** 用户反馈，即使是高度相关的任务，主代理也几乎不会主动调用用户自定义的技能（如“git”技能）或子代理，除非被明确指令。
    -   **社区反应:** 6个回复，0个👍，揭示了代理自主决策能力的不足。
    -   **链接:** [Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)

6.  **内存系统缺陷与质量改进 (汇总) (#26522, #26523, #26525)**
    -   **影响场景:** 这是关于“自动内存”功能的一组连锁问题，包括：对低信号会话无限重试 (`#26522`)、默默跳过无效的内存补丁 (`#26523`)、以及在模型处理后才进行敏感信息脱敏的安全风险 (`#26525`)。
    -   **社区反应:** 每个 Issue 均有 2 个回复，揭示了内存系统在效率和安全性上的潜在隐患。
    -   **链接:** [Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522) | [Issue #26523](https://github.com/google-gemini/gemini-cli/issues/26523) | [Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525)

7.  **Shell 命令执行卡在“等待输入” (#25166)**
    -   **影响场景:** 在简单的 CLI 命令执行完成后，系统会错误地显示“等待用户输入”状态并卡死。这严重干扰自动化工作流。
    -   **社区反应:** 3个回复，3个👍，是一个高频复现的流程阻塞问题。
    -   **链接:** [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)

8.  **超过 128 个工具导致 400 错误 (#24246)**
    -   **影响场景:** 当启用的工具超过 128 个时，Gemini CLI 会报 400 错误，无法正常工作。这表明工具选择机制需要改进，以避免超出 API 限制。
    -   **社区反应:** 2个回复，0个👍，指向了代理工具规模的扩展瓶颈。
    -   **链接:** [Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246)

9.  **浏览器代理在 Wayland 下失败 (#21983)**
    -   **影响场景:** `browser_agent` 在 Wayland 显示服务器协议下无法正常工作，限制了 Linux 用户的使用。
    -   **社区反应:** 4个回复，1个👍。
    -   **链接:** [Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)

10. **代理应劝阻破坏性行为 (#22672)**
    -   **影响场景:** 在处理复杂 git 操作或维护数据库等任务时，模型有时会使用破坏性更强的命令（如 `git reset --force`），而忽视更安全的选项。
    -   **社区反应:** 2个回复，1个👍，反映了用户对代理安全性的普遍担忧。
    -   **链接:** [Issue #22672](https://github.com/google-gemini/gemini-cli/issues/22672)

#### 4. 重要 PR 进展 (10条)

1.  **修复钩子文本重复 (#27096)**
    -   **内容:** 修复了 `AfterAgent` 钩子返回的 `prompt_response` 中包含重复文本和多余空格的 bug。
    -   **状态:** OPEN
    -   **链接:** [PR #27096](https://github.com/google-gemini/gemini-cli/pull/27096)

2.  **优化 Alpine Shell 兼容性 (#26770)**
    -   **内容:** 改进了在轻量级 Linux 发行版 Alpine（使用 BusyBox）下的 Shell 兼容性。
    -   **状态:** OPEN
    -   **链接:** [PR #26770](https://github.com/google-gemini/gemini-cli/pull/26770)

3.  **路由 OAuth 用户到稳定模型 (#27131)**
    -   **内容:** 修复了使用个人 OAuth 时，因模型别名解析到不存在的模型版本而导致的 404/400 错误，确保路由到稳定模型。
    -   **状态:** OPEN
    -   **链接:** [PR #27131](https://github.com/google-gemini/gemini-cli/pull/27131)

4.  **工具持续调用时跳过钩子上下文 (#27134)**
    -   **内容:** 在纯工具调用的连续场景中，不再应用 `before-agent` 钩子上下文，以优化流程，避免不必要的上下文注入。
    -   **状态:** OPEN
    -   **链接:** [PR #27134](https://github.com/google-gemini/gemini-cli/pull/27134)

5.  **处理 WSL 下的 Windows 路径 (#27025)**
    -   **内容:** 修复了在 Windows Subsystem for Linux 环境下，无法正确处理 Windows 盘符路径（如 `C:\`）的问题。
    -   **状态:** OPEN
    -   **链接:** [PR #27025](https://github.com/google-gemini/gemini-cli/pull/27025)

6.  **添加 MCP 采样请求处理器 (#27130)**
    -   **内容:** 实现了 MCP 客户端采样支持的核心处理器，是分三步完成的该功能的第一部分。
    -   **状态:** OPEN
    -   **链接:** [PR #27130](https://github.com/google-gemini/gemini-cli/pull/27130)

7.  **为无效模型 ID 提供回退 (#27128)**
    -   **内容:** 当用户配置了已废弃或不存在的 Gemini 模型 ID 时，系统会自动回退到默认模型。
    -   **状态:** OPEN
    -   **链接:** [PR #27128](https://github.com/google-gemini/gemini-cli/pull/27128)

8.  **为 Vertex 认证启用自定义工具模型 (#27126)**
    -   **内容:** 修复了使用 Vertex AI 认证时，无法使用自定义工具模型的问题，使 Vertex 用户与 API Key 用户功能对齐。
    -   **状态:** OPEN
    -   **链接:** [PR #27126](https://github.com/google-gemini/gemini-cli/pull/27126)

9.  **避免沙箱模式下的 stdin 重复 (#27127)**
    -   **内容:** 修复了在沙箱模式下，通过 `--prompt` 传递的输入会被子进程再次读取，导致用户消息重复的问题。
    -   **状态:** OPEN
    -   **链接:** [PR #27127](https://github.com/google-gemini/gemini-cli/pull/27127)

10. **优化高频 Shell 输出下的 UI 性能 (#25643)**
    -   **内容:** 通过对文本输出进行节流处理，修复了在执行高输出量命令（如 `npm test`）时，UI 冻结无响应的问题。
    -   **状态:** OPEN
    -   **链接:** [PR #25643](https://github.com/google-gemini/gemini-cli/pull/25643)

#### 5. 功能需求归类

-   **代理能力与可靠性 (Agent Capabilities & Reliability):** 这是当前最核心的关注点。用户大量反馈集中在代理（尤其是通用代理）的卡死、任务状态报告不准确、不主动使用技能/子代理、以及子代理间协调不畅等问题。`#21409`, `#22323`, `#21968` 等问题均为有力佐证。
-   **代码感知与工具生态 (Code Awareness & Tooling):** 社区对引入 AST 感知工具表现出浓厚兴趣，期望以此提升代码搜索、读取和映射的精确度，从而减少 Token 开销和提高开发效率。`#22745` 及其子问题 `#22746`, `#22747` 是该方向的集中体现。
-   **安全性与权限控制 (Security & Control):** 用户多次提出代理可能会执行破坏性操作，并建议加入安全护栏。同时，关于自动内存功能中敏感信息处理的安全隐患也得到关注。`#22672`, `#26525` 是典型代表。
-   **用户体验与性能 (UX & Performance):** 高频问题包括：Shell 命令执行后挂起 (`#25166`)、高输出量命令导致 UI 卡顿 (`#25643`)、终端窗口缩放时的闪烁问题 (`#21924`) 等，这些直接影响用户日常工作流。
-   **评估与测试体系 (Evaluation & Testing):** 项目内部正在积极构建更健壮的组件级评估体系 (`#24353`) 和内部项目评估稳定性 (`#23166`)，表明开发团队正系统性地提升产品质量。

#### 6. 开发者关注点

-   **代理稳定性的首要地位:** 大量 Issue 指向了代理在复杂场景下的不稳定行为，如挂起、错误报告状态、不遵循配置等。这已构成最直接影响使用体验的痛点。
-   **子代理协调与自主性不足:** 开发者普遍反映，当前版本的代理智能度不够高，表现在不会主动调用合适的工具/子代理，以及在交互过程中（如达到轮次限制）的恢复逻辑存在缺陷。
-   **Shell 交互的可靠性问题:** Shell 命令执行后的状态管理存在严重 bug，导致简单的命令执行都可能卡死。这是开发者日常工作流中一个高复现率的障碍。
-   **对安全性的深切关注:** 开发者对代理可能无意识执行破坏性操作的担忧是真实存在的。缺乏预防机制和明确的“撤销”或“安全模式”功能，可能是采用的一个心理障碍。
-   **工具/技能规模的扩展性瓶颈:** 当可用工具数量增加时，模型会遇到 API 限制（400 错误）和性能开销问题。自动选择最合适工具的策略已成为一个亟待解决的技术难题。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

好的，以下是为您生成的 2026-05-16 GitHub Copilot CLI 社区动态日报。

---

# GitHub Copilot CLI 社区动态日报 | 2026-05-16

## 今日更新概览
Copilot CLI 今日发布两个小幅迭代版本（v1.0.49-0 与 v1.0.49-1），主要围绕 MCP（Model Context Protocol）服务器集成体验进行优化。社区活跃度稳定，24 小时内共产生 50 条议题更新，其中新提交议题 12 条。当前版本无待合并的 Pull Request。

## 版本发布

### v1.0.49-1 (Improved)
- **Prompt 模式优化**：当使用 `-p` 模式且当前文件夹已被信任时，CLI 将自动加载工作区中的 MCP 源文件。

### v1.0.49-0 (Added)
- **实验性功能：MCP 搜索**：新增 `/mcp search` 命令，支持从注册表中搜索和安装 MCP 服务器。
- **实验性功能：工具延迟加载**：为 MCP 及外部工具引入工具搜索与延迟加载机制。
- **模型推理努力度配置**：在推理努力度选择器中新增“无（None）”选项，允许用户完全禁用模型推理。
- **环境变量增强**：新增 `COPILOT_PLUGIN_DIR_ONLY` 环境变量。

## 社区热点 Issues (共 10 条)

1.  **企业策略导致模型访问被拒**
    -   **关联 Issue**: [#3101](https://github.com/github/copilot-cli/issues/3101) (已关闭)
    -   **影响场景**: 企业环境下的用户在使用 `/model` 命令时，因 Copilot 策略限制而无法加载任何模型。
    -   **社区反应**: 6 条评论，获得 3 个赞。该问题与旧版 1.0.40 中的问题 #2691 相同，表明企业策略配置问题可能反复出现。

2.  **高推理模型 `claude-opus-4.7-high` 无法使用**
    -   **关联 Issue**: [#3080](https://github.com/github/copilot-cli/issues/3080) (已关闭)
    -   **影响场景**: 用户选择 `claude-opus-4.7-high` 模型后，因 CLI 默认发送 `medium` 推理努力度，导致所有请求被 CAPI 以 400 错误拒绝。
    -   **社区反应**: 3 条评论，获得 2 个赞。这是一个明确的配置与模型能力不匹配的 Bug。

3.  **Copilot CLI 持续拒绝处理合法请求**
    -   **关联 Issue**: [#3318](https://github.com/github/copilot-cli/issues/3318) (开启中)
    -   **影响场景**: 用户在近期版本中，即便使用干净的上下文，Copilot CLI 开始频繁拒绝测试、修复 Bug 或查看目录等常规请求。
    -   **社区反应**: 2 条评论，获得 2 个赞。问题影响面广，可能涉及模型行为或安全策略的变更。

4.  **HTTP MCP 服务器因 TCP 连接复用过期而失败**
    -   **关联 Issue**: [#3257](https://github.com/github/copilot-cli/issues/3257) (开启中)
    -   **影响场景**: 当 CLI 进程空闲一段时间后，其与 HTTP MCP 服务器复用的 TCP 连接会被中间设备静默关闭，导致后续请求出现 `TypeError: fetch failed`。
    -   **社区反应**: 2 条评论。这是一个典型的网络连接管理问题，影响持续的 MCP 服务调用。

5.  **macOS 预发布版本模型选择器隐藏部分 Opus 模型**
    -   **关联 Issue**: [#3066](https://github.com/github/copilot-cli/issues/3066) (已关闭)
    -   **影响场景**: 在 macOS 的预发布版本中，`/model` 命令未列出 `claude-opus-4.7` 的高推理能力变体（如 `internal`、`high`、`xhigh`），即使账号可以路由到这些模型。
    -   **社区反应**: 2 条评论，获得 1 个赞。影响高级模型选择体验。

6.  **主代理无法接收子代理完成工作通知**
    -   **关联 Issue**: [#2923](https://github.com/github/copilot-cli/issues/2923) (开启中)
    -   **影响场景**: 多代理编排模式（Orchestration Pattern）在 CLI 中失效，因为主代理无法获知子代理的任务执行结果。
    -   **社区反应**: 2 条评论。这是多代理协作功能的核心缺陷，影响高级工作流。

7.  **功能请求：会话分叉**
    -   **关联 Issue**: [#1697](https://github.com/github/copilot-cli/issues/1697) (开启中)
    -   **影响场景**: 当处理多步骤任务遇到两个独立问题时，用户无法在不丢失上下文的条件下并行探索解决方案。
    -   **社区反应**: 2 条评论，获得高达 22 个赞。这是一个用户呼声极高的生产力功能。

8.  **macOS 启动时 TLS 证书加载耗时 5 秒以上**
    -   **关联 Issue**: [#3330](https://github.com/github/copilot-cli/issues/3330) (开启中)
    -   **影响场景**: CLI 每次启动时调用 `tls.getCACertificates(“system”)`，在 macOS 上会遍历所有 Keychain 证书并与 `trustd` 服务同步通信，导致每次启动延迟 5 秒以上。
    -   **社区反应**: 1 条评论。这是一个严重的性能问题，直接影响用户每次使用 CLI 的启动感受。

9.  **功能请求：支持机器级自定义斜杠命令**
    -   **关联 Issue**: [#3343](https://github.com/github/copilot-cli/issues/3343) (开启中)
    -   **影响场景**: 开发者在多个项目间工作时，希望有一套全局统一的个人斜杠命令，而无需在每个仓库中重复配置。
    -   **社区反应**: 0 条评论。这是一个聚焦于开发者工作效率和工作流标准化的需求。

10. **`/every` 和 `/after` 命令在帮助文档中列出但无法使用**
    -   **关联 Issue**: [#3342](https://github.com/github/copilot-cli/issues/3342) (开启中)
    -   **影响场景**: 用户通过 `copilot help commands` 看到 `/every` 和 `/after` 命令，但在交互式会话中输入时却收到“未知命令”的错误。
    -   **社区反应**: 0 条评论。这是一个可能因 `/chronicle tips` 的误导性或文档与实际代码不同步导致的问题。

## 重要 PR 进展
过去24小时内无新 Pull Request 更新或合并。

## 功能需求归类
从近期 Issues 中可以看出，社区对以下功能方向有持续的需求：
- **会话管理**: 会话分叉、上下文管理、会话恢复（如 Issue #1697, #3128）。
- **自动化与工作流**: 插件自动更新、机器级命令配置、非交互模式下的钩子支持（如 Issue #3331, #3343, #3345）。
- **性能优化**: 启动速度（TLS 加载）、网络连接复用（如 Issue #3330, #3098, #3257）。
- **模型选择与配置**: 更细致的推理努力度控制、模型选择器与账户权限对齐（如 Issue #3080, #3066）。
- **钩子机制增强**: 通知钩子支持取消默认行为（如 Issue #3341）。

## 开发者关注点
- **企业环境适配**: 企业策略导致模型无法使用的问题（#3101）表明，CLI 在企业级配置的兼容性上仍需加强与后端策略的同步。
- **性能痛点突出**: 启动时 TLS 证书加载耗时（#3330）严重影响用户体验，是开发者的高频性能抱怨。
- **多代理可靠性**: 主代理无法接收子代理通知（#2923）是一个核心功能的 Bug，对于依赖高级编排能力的用户影响巨大。
- **用户体验不一致**: 帮助文档中的命令无法使用（#3342）、模型列表与账号实际可用模型不匹配（#3066）等问题，暴露出 CLI 在信息同步上存在不足。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

## Kimi Code CLI 社区动态日报
**2026-05-16**
数据来源：https://github.com/MoonshotAI/kimi-cli

---

### 今日更新概览
过去 24 小时内，社区共更新 11 个 Issue 和 10 个 Pull Request。K2.6 模型过载问题（#2077）持续引发讨论并获维护者关注；多个 PR 聚焦于 Shell 工具交互增强、Hook 回调机制与自动更新安全性修复。无新版本发布。

---

### 社区热点 Issues
**1. K2.6 模型过载导致不可用（#2077）**
- **状态**：Open | **更新**：2026-05-16 | **评论**：14 | **👍**：1
- **描述**：macOS Apple Silicon 用户使用 Kimi Code (Allegretto 会员) 时，K2.6 模型在正常负载下持续返回超时/拒绝响应。此为长期存在的关键性能问题。
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2077

**2. 请求新增 /goal 命令并支持 Coding Plan 导入 Codex（#2252）**
- **状态**：Open | **更新**：2026-05-15 | **评论**：9 | **👍**：1
- **描述**：用户希望引入类似 Codex 的 `/goal` 命令（Claude Code 已跟进），并允许将 Kimi 的 coding plan 导出至 Codex 平台使用，以提升跨平台工作流体验。
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2252

**3. Shell 工具缺少交互式输入支持（#1117）**
- **状态**：Open | **更新**：2026-05-15 | **评论**：2 | **👍**：0
- **描述**：Shell 工具使用 PIPE 创建 stdin 但不写入数据，导致任何需要用户输入的脚本（如 `npm init`、`read`）都会阻塞超时。这是一项长期待解决的增强请求。
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/1117

**4. UserPromptSubmit Hook 无法捕获输入文本（#2304）**
- **状态**：Open | **更新**：2026-05-15 | **评论**：1 | **👍**：0
- **描述**：当输入通过 Shell UI 而非直接 stdin 提交时，UserPromptSubmit Hook 的 payload 中 prompt 字段为空，导致无法注入增强功能。
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2304

**5. 自动更新器缺少完整性校验（#2273）**
- **状态**：Open | **更新**：2026-05-15 | **评论**：1 | **👍**：0
- **描述**：自动更新器直接下载并解压 tarball，未校验 SHA256 签名，且使用未过滤的 `tarfile.extractall`，存在安全风险。社区已提交部分修复 PR（#2298）。
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2273

**6. Shell 工具超时未终止子进程（#2310）**
- **状态**：Open | **更新**：2026-05-16 | **评论**：0 | **👍**：0
- **描述**：Linux WSL2 环境下，Shell 工具超时后子进程未被终止，可能导致残留进程。
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2310

**7. 请求在 Stop Hook Payload 中包含 LLM 响应和停止原因（#2307）**
- **状态**：Open | **更新**：2026-05-15 | **评论**：0 | **👍**：0
- **描述**：当前 Stop Hook 仅返回 session_id、cwd 等元数据，缺少 LLM 响应内容和停止原因，限制高级 Hook 应用场景。
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2307

**8. APC 协议回放会话历史不显示（#2306）**
- **状态**：Open | **更新**：2026-05-15 | **评论**：0 | **👍**：0
- **描述**：Zed 集成模式下 `kimi acp` 重启后标签存在但内容为空；浏览器模式 `kimi web` 切换会话后内容也为空。可能涉及 APC 协议实现缺失。
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2306

**9. 请求支持 Shift+Enter 键入换行符（#2254）**
- **状态**：Open | **更新**：2026-05-15 | **评论**：1 | **👍**：1
- **描述**：希望新增 Shift+Enter 作为交互式提示符中插入换行符的快捷键（目前仅支持 Ctrl-J 和 Alt-Enter）。社区已提交 PR（#2302）。
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2254

**10. UserPromptSubmit Hook 在 Shell UI 模式下收到空 prompt（#2303）**
- **状态**：Open | **更新**：2026-05-15 | **评论**：0 | **👍**：0
- **描述**：与 #2304 类似，但更聚焦于 Shell UI 入口；用户提示 Hook 无法获取实际输入，影响自定义前处理逻辑。
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2303

---

### 重要 PR 进展
**1. 修复 UserPromptSubmit Hook 空 prompt 问题（#2305）**
- **作者**：@AkaCoder404 | **更新**：2026-05-15
- **内容**：修正 Hook 在提交时未捕获实际输入文本而返回空字符串的问题。
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2305

**2. Stop Hook 增加响应内容和停止原因（#2308）**
- **作者**：@AkaCoder404 | **更新**：2026-05-15
- **内容**：为 Stop Hook 添加 response 和 stop_reason 字段，对应 Issue #2307。
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2308

**3. 新增 Shift+Enter 快捷换行（#2302）**
- **作者**：@ktwu01 | **更新**：2026-05-15
- **内容**：在 Shell prompt 中绑定 s-enter 作为新行快捷键，并更新底部工具栏提示。
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2302

**4. 新增非交互式 `/usage` 命令（#2301）**
- **作者**：@binichallein | **更新**：2026-05-15
- **内容**：实现 `kimi usage` CLI 子命令，支持 Rich 面板输出和 `--json` 格式，便于脚本和 CI 中查询配额。
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2301

**5. 隐藏低阈值下的上下文用量指示（#2300）**
- **作者**：@binichallein | **更新**：2026-05-15
- **内容**：当上下文用量低于 80% 警告阈值时，不在底部工具栏显示百分比，避免干扰。
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2300

**6. 文档澄清配额估算说明（#2299）**
- **作者**：@binichallein | **更新**：2026-05-15
- **内容**：更新文档，说明会员请求数来自 Token 消耗估算而非固定次数，建议用户通过 `/usage` 获取准确实时数据。
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2299

**7. 修复安装脚本未正确加载 uv 环境变量（#2297）**
- **作者**：@ktwu01 | **更新**：2026-05-15
- **内容**：`install.sh` 在管道执行 `uv` 安装器后未重载 PATH，导致后续步骤找不到 uv。PR 添加了 source 逻辑。
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2297

**8. 自动更新器增加 tarfile 安全过滤（#2298）**
- **作者**：@ktwu01 | **更新**：2026-05-15
- **内容**：部分修复 #2273，为 `tarfile.extractall` 设置 `filter="data"` 以防止路径穿越（不包含 SHA256 验证，需服务端配合）。
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2298

**9. 开发文档补充前置依赖说明（#2296）**
- **作者**：@ktwu01 | **更新**：2026-05-15
- **内容**：在 README Development 章节添加 Prerequisites 子节，列出 `make`、`uv` 等必需工具，降低新贡献者入门门槛。
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2296

**10. README 快速入门增加安装命令（#2295）**
- **作者**：@ktwu01 | **更新**：2026-05-15
- **内容**：将一键安装命令直接放在 Getting Started 段落，避免用户需要额外点击跳转。
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2295

---

### 功能需求归类
- **Shell 交互增强**：请求 Shift+Enter 换行（#2254）、交互式输入支持（#1117）、超时正确终止子进程（#2310）。
- **Hook 机制完善**：UserPromptSubmit Hook 空文本 bug（#2304、#2303）、Stop Hook 内容扩充（#2307）。
- **跨平台与集成**：/goal 命令与 Codex 互操作（#2252）、APC 协议会话持久化（#2306）。
- **安全性**：自动更新完整性校验（#2273）、tarfile 提取安全（PR #2298）。
- **命令行工具易用性**：非交互式 `/usage` 命令（PR #2301）、上下文用量指示灯优化（PR #2300）。
- **文档改进**：配额说明澄清（#2278/PR #2299）、安装命令前置（PR #2295）、开发环境前提（PR #2296）。

---

### 开发者关注点
1. **K2.6 模型稳定性**：长期挂起的 #2077 至今仍有更新和讨论，macOS 用户反馈该模型在正常负载下不可用，影响日常开发。
2. **Shell 工具缺失交互输入**：从 2 月至今（#1117）未解决，部分用户需手动回避依赖交互的命令，影响 CI 和自动化脚本。
3. **Hook 回调机制脆弱**：两个独立 Issue（#2304、#2303）均指向 UserPromptSubmit Hook 获取不到真实输入，社区已提交修复 PR 但尚未合入。
4. **自动更新安全风险**：安全报告（#2273）揭示无签名验证与不安全解压问题，维护者尚未回应，社区贡献了部分缓解 PR。
5. **文档与安装体验**：多位贡献者集中更新 README，反映首次使用和贡献的痛点（找不到安装命令、缺少开发前置说明）。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

好的，以下是为您生成的 2026-05-16 OpenCode 社区动态日报。

---

# OpenCode 社区动态日报 | 2026-05-16

## 今日更新概览

OpenCode v1.15.0 版本正式发布，引入了基于 Effect 的核心事件系统，以改善跨会话和集成的交付完整性。社区讨论热度集中在 VS Code 扩展的持续需求、内存性能问题的集中排查以及新版本中 /exit 命令缺失和键盘绑定异常等回归问题。

## 版本发布

**v1.15.0** 于今日（2026-05-16）发布。

- **核心改进**：新增基于 Effect 的核心事件系统，用于更完整地跨会话和集成交付事件。
- **Bug 修复**：
    - 忽略自定义工具模块中的无效导出，避免工具加载失败。
    - 忽略项目指令查找错误，确保会话持续加载。
- **发布地址**：[v1.15.0 Release](https://github.com/anomalyco/opencode/releases/tag/v1.15.0)

## 社区热点 Issues

1.  **#20695 [Memory Megathread] 内存问题汇总贴**
    - **影响场景**：影响所有用户，特别是运行长时间会话或大型模型时。社区正在集中收集堆快照以定位问题。
    - **社区反应**：77条评论，54个赞。开发者明确表示不接受 LLM 猜测解决方案，希望用户提供具体的堆快照数据。
    - **链接**：[#20695](https://github.com/anomalyco/opencode/issues/20695)

2.  **#11176 [FEATURE] 官方 OpenCode VS Code 扩展**
    - **影响场景**：希望将 OpenCode 作为原生 VS Code 插件运行，以更深度集成编辑器工作流。
    - **社区反应**：81个赞，长期高频需求。用户期待官方集成，避免使用第三方包装。
    - **链接**：[#11176](https://github.com/anomalyco/opencode/issues/11176)

3.  **#7467 [FEATURE] 基于 GitHub 的 Agent 市场**
    - **影响场景**：用户和团队之间共享 Agent 需要进行手动文件复制，缺乏发现和分享的集中平台。
    - **社区反应**：9个赞，讨论活跃，设计思路清晰。
    - **链接**：[#7467](https://github.com/anomalyco/opencode/issues/7467)

4.  **#26198 [Bug] 终端被原始鼠标转义序列淹没**
    - **影响场景**：在 CLI 中运行命令后，终端无法退出鼠标跟踪模式，导致输出混入原始控制字符，严重阻塞终端使用。
    - **社区反应**：15条评论，问题影响明确，用户提供了详细的重现步骤和影响分析。
    - **链接**：[#26198](https://github.com/anomalyco/opencode/issues/26198)

5.  **#26549 [Bug] /exit 和 /quit 命令在自动补全中缺失**
    - **影响场景**：在提示符输入 `/` 时，自动补全下拉列表不会显示 /exit, /quit 等命令，虽然命令面板仍可用，但影响了用户预期的交互流程。
    - **社区反应**：14条评论，22个赞。该问题在 v1.14.42 中引入，被认为是一个回归。
    - **链接**：[#26549](https://github.com/anomalyco/opencode/issues/26549)

6.  **#27096 [CLOSED] 键盘绑定在 1.14.48 上出错**
    - **影响场景**：非 QWERTY 键盘布局用户（如 Dvorak）发现快捷键行为异常，如 Ctrl+K 从剪切变为粘贴。
    - **社区反应**：11条评论，用户定位到问题可能与扫描码读取有关，而非键代码。
    - **链接**：[#27096](https://github.com/anomalyco/opencode/issues/27096)

7.  **#7659 [FEATURE] 不要自动滚动聊天窗口**
    - **影响场景**：当 AI 持续生成内容时，窗口不断自动滚动到底部，导致用户无法稳定阅读上方的历史生成内容。
    - **社区反应**：8条评论，12个赞。这是一个影响阅读体验的长期诉求。
    - **链接**：[#7659](https://github.com/anomalyco/opencode/issues/7659)

8.  **#27589 [Bug] 在 Alpine Linux 上 TUI 启动失败 (musl)**
    - **影响场景**：在基于 musl libc 的 Linux 发行版（如 Alpine）上，从 v1.14.50 开始 TUI 无法启动，报错 `getcontext symbol not found`。
    - **社区反应**：13条评论，影响明确，是特定平台的回归问题。
    - **链接**：[#27589](https://github.com/anomalyco/opencode/issues/27589)

9.  **#15728 [Bug] Read 工具无法将图像数据传递给视觉模型**
    - **影响场景**：用户无法使用 `Read` 工具分析图像文件，工具链无法将图像转换为正确的视觉输入格式，限制了视觉模型的使用。
    - **社区反应**：9条评论，6个赞，影响模型多模态能力的使用。
    - **链接**：[#15728](https://github.com/anomalyco/opencode/issues/15728)

10. **#5899 [FEATURE] 当 LSP 过期时自动重启**
    - **影响场景**：如 rust-analyzer 等 LSP 在大量编辑后可能变得陈旧，建议自动重启以保持代码分析和补全的准确性。
    - **社区反应**：5条评论，11个赞，是影响开发者编码体验的切实痛点。
    - **链接**：[#5899](https://github.com/anomalyco/opencode/issues/5899)

## 重要 PR 进展

1.  **#27805 [Beta] 从 TUI 发现正在运行的 Serve 实例**
    - **内容**：添加了一个基于 Effect 的服务发现机制，允许 TUI 自动发现并重用同一台机器上运行的健康 `opencode serve` 实例。
    - **链接**：[#27805](https://github.com/anomalyco/opencode/pull/27805)

2.  **#27114 [Beta] 预览原生 LLM 运行时栈**
    - **内容**：为 OpenCode 会话引入了可选的本地 LLM 运行时预览，同时保留 AI SDK 作为默认运行时。该 PR 将两种流转换为统一的 `LLMEvent` 格式。
    - **链接**：[#27114](https://github.com/anomalyco/opencode/pull/27114)

3.  **#27810 升级 opentui 到 0.2.12**
    - **内容**：升级底层终端 UI 库 opentui 至最新版本，以修复潜在问题。
    - **链接**：[#27810](https://github.com/anomalyco/opencode/pull/27810)

4.  **#27802 [Feature] fff 搜索工具**
    - **内容**：为文件搜索、内容搜索和目录搜索操作实现了 `fff` 选择器，提升文件查找效率和交互体验。
    - **链接**：[#27802](https://github.com/anomalyco/opencode/pull/27802)

5.  **#27804 [Bugfix] 修复 replaceAll 编辑替换文字**
    - **内容**：修复了 `edit` 工具中 `replaceAll` 功能，确保替换文本被原样插入，而非被解释为 JavaScript 的正则替换模式。
    - **链接**：[#27804](https://github.com/anomalyco/opencode/pull/27804)

6.  **#27677 [Feature] 桌面端添加免费限制和 Go 使用超限对话框**
    - **内容**：为桌面应用添加了与 TUI 相同的免费限制和 Go 使用超限提示对话框，提升用户体验一致性。
    - **链接**：[#27677](https://github.com/anomalyco/opencode/pull/27677)

7.  **#26944 [Bugfix] 防止任务引用缺失子会话时崩溃**
    - **内容**：修复了 TUI 在渲染已完成任务时，如果引用的子会话元数据不存在会导致崩溃的问题，增强了稳定性。
    - **链接**：[#26944](https://github.com/anomalyco/opencode/pull/26944)

8.  **#27803 [Bugfix] TUI 启动时显示配置错误详情**
    - **内容**：改进了 TUI 启动时的配置错误报告，将验证错误通过 HTTP 中间层保留并格式化为客户端可见的 400 响应，帮助用户快速定位无效配置。
    - **链接**：[#27803](https://github.com/anomalyco/opencode/pull/27803)

9.  **#27800 [Refactor] 惰性加载顶级 CLI 命令**
    - **内容**：重构了 CLI 启动逻辑，对 `--help`、`--version` 和 shell 补全等热路径进行惰性加载，显著减少启动开销。
    - **链接**：[#27800](https://github.com/anomalyco/opencode/pull/27800)

10. **#27662 [Feature] VS Code 扩展通过锁定文件推送活动编辑器选择**
    - **内容**：VS Code 扩展现在会启动一个 WebSocket 服务器，实时将活动编辑器的文件和文本选择推送到 OpenCode 的 TUI 中，实现编辑器与 CLI 的更紧密协作。
    - **链接**：[#27662](https://github.com/anomalyco/opencode/pull/27662)

## 功能需求归类

从近期的社区讨论中，用户反复提到的功能方向包括：

- **IDE 集成**：将一个官方支持的 VS Code 扩展列为最高优先级需求之一。
- **性能与稳定性**：内存泄漏和无限循环是当前最突出的稳定性问题，社区正协同收集数据。
- **终端/TUI 体验**：自动滚动行为、终端状态恢复、鼠标转义序列处理是影响日常使用的高频痛点。
- **命令与快捷键**：/exit 命令在自动补全中消失、键盘绑定在非标准布局下异常等问题，影响了核心交互流程。
- **隐私与数据控制**：关于默认禁止数据共享的呼声持续存在，用户对隐私保护和知情同意有明确诉求。

## 开发者关注点

- **终端状态重置**：在非标准退出手动或运行命令后，终端无法正确恢复（如鼠标跟踪模式、文本模式），是开发者反映的严重问题。
- **模型响应渲染**：AI 响应中美元符号 `$` 在 macOS 桌面端被误解析为 LaTeX 数学公式，导致内容显示异常。
- **子会话管理**：子 Agent 执行完毕或权限授予后，会话焦点不能自动返回父会话，需要手动切换，影响了工作流的流畅性。
- **跨平台支持**：v1.15.0 在基于 musl libc 的 Linux 系统（如 Alpine）上存在兼容性问题，影响该用户群体的使用。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

好的，这是根据您提供的 GitHub 数据生成的 Qwen Code 社区动态日报。

---

# Qwen Code 社区动态日报 | 2026-05-16

## 今日更新概览

今日社区活跃度较高，共发布 4 个版本（包括 1 个夜间版和 3 个预览版），核心修复围绕 CLI 链接可点击性与 OpenAI 流式响应处理。社区讨论热点高度集中：超过 60% 的新增和活跃 Issue 与**内存溢出 (OOM)** 及**长会话稳定性**相关，同时维护者围绕 `qwen serve` 守护进程模式提出了多阶段规划。此外，多个旨在增强会话诊断与恢复能力的功能（如 `/doctor` 命令、文件回滚）正在合并推进。

## 版本发布

过去 24 小时内，项目发布了 4 个版本，包括 1 个夜间版和 3 个连续编号的预览版。这些版本共享相同的变更内容：
*   **v0.15.11-nightly.20260516.435f711e3**
*   **v0.15.12-preview.0, v0.15.12-preview.1, v0.15.12-preview.2**

**主要更新内容 (What's Changed):**
*   **feat(cli):** 终端中 Markdown 链接现支持 OSC 8 转义序列，使包裹的 URL 保持可点击性 (@BZ-D, [#4037](https://github.com/QwenLM/qwen-code/pull/4037))
*   **fix(core):** 修复了 OpenAI 流式响应中累积的 delta 数据未正确归一化为后缀的问题 (@chiga0, [#3896](https://github.com/QwenLM/qwen-code/pull/3896))
*   **fix(cli):** 修复了自动恢复功能（具体问题未在标题中展开）

## 社区热点 Issues

1.  **[#3203] Qwen OAuth 免费套餐策略调整** (`type/feature-request`)
    *   **影响场景：** API 使用量、免费用户。
    *   **摘要：** 提议将每日免费请求量从 1000 次大幅削减至 100 次，并计划完全关闭免费入口。该 Issue 引发了社区的广泛讨论（125 条评论），是目前最受关注的问题。
    *   [查看 Issue](https://github.com/QwenLM/qwen-code/issues/3203)

2.  **[#3803] 守护进程模式 (`qwen serve`)：提案与公开决策** (`type/feature-request`)
    *   **影响场景：** 开发者功能、后台服务、架构设计。
    *   **摘要：** 一份完整的守护进程设计提案（6章系列文章），详细规划了 `qwen serve` 的实现。该 Issue 作为跟踪入口，汇集了社区架构师和核心贡献者的讨论。
    *   [查看 Issue](https://github.com/QwenLM/qwen-code/issues/3803)

3.  **[#3926] 改进输入字段的文本编辑和选择能力** (`type/feature-request`)
    *   **影响场景：** 用户交互体验、CLI 使用。
    *   **摘要：** 用户反馈当前输入框不支持 `Ctrl+Backspace` 删除单词和文本选择功能，导致无法进行剪切粘贴等编辑操作。该需求被标记为欢迎 PR。
    *   [查看 Issue](https://github.com/QwenLM/qwen-code/issues/3926)

4.  **[#4156] 提案: `qwen --serve` (模式 A) — TUI + 进程内 HTTP 守护进程** (`type/feature-request`)
    *   **影响场景：** `qwen serve` 功能、终端用户界面 (TUI)。
    *   **摘要：** 提出一个“模式B”(`qwen serve`)之外的新方案，允许用户在运行 CLI 的同时启动一个守护进程，实现本地用户与远程客户端共用同一个会话。
    *   [查看 Issue](https://github.com/QwenLM/qwen-code/issues/4156)

5.  **[#3914] API 连接成功但无法获取数据** (`type/bug`)
    *   **影响场景：** API 集成、跨平台使用。
    *   **摘要：** 用户在配置 API Key（例如 OpenRouter）后，能够成功连接但随后立即遇到 `fetch failed` 错误，导致无法完成初始化。
    *   [查看 Issue](https://github.com/QwenLM/qwen-code/issues/3914)

6.  **[#4167] CLI 崩溃 (JavaScript 堆内存不足)** (`type/bug`)
    *   **影响场景：** 内存管理、长会话、大模型使用。
    *   **摘要：** V8 引擎在执行 Mark-Compact 垃圾回收时失败，内存占用接近 4GB 上限，导致 CLI 进程直接崩溃。这是内存问题频发的典型案例。
    *   [查看 Issue](https://github.com/QwenLM/qwen-code/issues/4167)

7.  **[#4149] 致命错误：无效的标记压缩导致内存分配失败** (`type/bug`)
    *   **影响场景：** 内存管理、长时间运行。
    *   **摘要：** 另一个典型的 JavaScript 堆内存溢出 (OOM) 报告。进程在运行约 6818 秒后，堆内存达到 4GB 限制，垃圾回收无法腾出空间。
    *   [查看 Issue](https://github.com/QwenLM/qwen-code/issues/4149)

8.  **[#4116] 程序关键错误 (疑似内存问题)** (`type/bug`)
    *   **影响场景：** 会话管理、系统稳定性。
    *   **摘要：** 用户提供了一个包含大量乱码和日志的崩溃报告，现象表现为 CLI 无法正常显示交互界面。社区初步猜测与内存压力有关。
    *   [查看 Issue](https://github.com/QwenLM/qwen-code/issues/4116)

9.  **[#3000] 内存诊断工具需求** (`P3`)
    *   **影响场景：** 问题排查、开发者工具。
    *   **摘要：** 一项长期存在的功能需求，指出当前项目缺少内存诊断工具，无法分析 V8 堆、检测内存泄漏或检查内存压力。该 Issue 已成为一系列内存相关 Issue 的“母”问题。
    *   [查看 Issue](https://github.com/QwenLM/qwen-code/issues/3000)

10. **[#4175] 提案(serve): 模式B 面向 v0.15 生产就绪的功能路线图** (`type/feature-request`)
    *   **影响场景：** `qwen serve` 功能、生产部署。
    *   **摘要：** 继基础守护进程功能合并后，该 Issue 规划了 `qwen serve` 剩余的待办工作，旨在将其从“可用”打磨至“生产就绪”，并明确了优先级路线图。
    *   [查看 Issue](https://github.com/QwenLM/qwen-code/issues/4175)

## 重要 PR 进展

1.  **[#4124] feat(cli): 添加会话路径状态命令**
    *   **功能/修复：** 新增 `/status paths` 命令，用于打印当前会话的各种日志路径，方便用户定位和排查问题。
    *   [查看 PR](https://github.com/QwenLM/qwen-code/pull/4124)

2.  **[#4186] fix(core): 添加堆压力自动压缩安全网**
    *   **功能/修复：** 针对高频 OOM 问题，在 `tryCompress()` 中添加了安全网机制：当 V8 堆使用率达到 70% 时，即使未达到 token 阈值，也会自动触发上下文压缩。
    *   [查看 PR](https://github.com/QwenLM/qwen-code/pull/4186)

3.  **[#4102] feat(core): PR-2.5 — 流重定向与自然退出注册表结算**
    *   **功能/修复：** 作为守护进程架构的一部分，此 PR 解决了后台任务流在提升（promote）后无法重定向，以及“自然退出”流程的注册表结算问题。
    *   [查看 PR](https://github.com/QwenLM/qwen-code/pull/4102)

4.  **[#4097] feat(telemetry): 添加交互跨度与详细敏感属性**
    *   **功能/修复：** 为每个用户驱动的交互回合创建顶层追踪跨度，并支持（在配置下）附加详细的上下文属性（用户提示、系统提示、工具 I/O等），对齐 Claude Code 的追踪能力。
    *   [查看 PR](https://github.com/QwenLM/qwen-code/pull/4097)

5.  **[#4064] feat(rewind): 为 /rewind 命令添加文件恢复支持**
    *   **功能/修复：** 扩展了 `/rewind` 命令的功能，使其不仅能回退对话历史，还能通过文件备份系统，将助手修改的文件恢复到之前的状态。
    *   [查看 PR](https://github.com/QwenLM/qwen-code/pull/4064)

6.  **[#4180] feat(cli): 添加基线 `/doctor memory` 内存诊断**
    *   **功能/修复：** 作为 #3000 的一部分，初版 `/doctor memory` 命令已提交，可收集进程内存、V8 堆空间、句柄数等基本信息，用户可以将其粘贴到报告中。
    *   [查看 PR](https://github.com/QwenLM/qwen-code/pull/4180)

7.  **[#4126] feat(telemetry): 统一跨层级的追踪树创建路径**
    *   **功能/修复：** 重构了追踪链路的创建方式，修复了“LLM 调用”和“工具调用”跨度无法正确成为“交互”跨度子元素的问题，使追踪树更符合层次结构。
    *   [查看 PR](https://github.com/QwenLM/qwen-code/pull/4126)

8.  **[#4133] feat(skills): 为冻结会话添加 `/stuck` 诊断技能**
    *   **功能/修复：** 新增一个内置诊断命令 `/stuck`，可扫描系统进程、检查高 CPU、异常状态、内存占用等，用于诊断卡住或运行缓慢的会话。
    *   [查看 PR](https://github.com/QwenLM/qwen-code/pull/4133)

9.  **[#4132] feat(serve): 为 `qwen serve` 守护进程添加 `/demo` 调试页面**
    *   **功能/修复：** 为 `qwen serve` 模式添加了一个内置的演示页面，提供基于浏览器的 UI，用于测试所有守护进程路由，无需依赖外部工具。
    *   [查看 PR](https://github.com/QwenLM/qwen-code/pull/4132)

10. **[#4176] fix(core,cli): 修复所有失败路径上的工具调用不变量**
    *   **功能/修复：** 修复了在弱网络连接下调用某些模型（如 DeepSeek-V4-Pro）时遇到的问题——因 SSE 流中断导致 `tool_use` 丢失，造成随后的 `tool_result` 无法匹配而引发 400 错误。
    *   [查看 PR](https://github.com/QwenLM/qwen-code/pull/4176)

## 功能需求归类

*   **内存与性能诊断：** 用户反复提及需要内置的内存诊断工具。近期至少有 10 个以上的 Issue 和 PR 聚焦于内存泄漏、OOM 崩溃、长会话压力分析和 `/doctor memory` 命令的开发（[#3000](https://github.com/QwenLM/qwen-code/issues/3000), [#4179](https://github.com/QwenLM/qwen-code/issues/4179), [#4182](https://github.com/QwenLM/qwen-code/issues/4182), [#4183](https://github.com/QwenLM/qwen-code/issues/4183), [#4184](https://github.com/QwenLM/qwen-code/issues/4184) 等）。
*   **守护进程与服务器模式 (`qwen serve`):** 社区和核心团队正在积极推动 `qwen serve` 从“可用”到“生产就绪”。相关讨论包括模式 A（TUI+守护进程）、模式 B（无头守护进程）的路线图规划（[#3803](https://github.com/QwenLM/qwen-code/issues/3803), [#4156](https://github.com/QwenLM/qwen-code/issues/4156), [#4175](https://github.com/QwenLM/qwen-code/issues/4175)）。
*   **会话管理与恢复：** 用户关注如何提升会话的健壮性。这包括文件回滚（`/rewind`, [#4064](https://github.com/QwenLM/qwen-code/pull/4064)）、卡住/冻结会话的诊断（`/stuck`, [#4133](https://github.com/QwenLM/qwen-code/pull/4133)）以及 Hook 系统输出的正确注入（[#4111](https://github.com/QwenLM/qwen-code/issues/4111)）。
*   **AI 自动化和智能辅助：**用户期望更智能化的操作模式。典型需求包括基于 LLM 分类器的自动审批

</details>