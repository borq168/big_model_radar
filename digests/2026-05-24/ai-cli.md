# AI CLI 工具社区动态日报 2026-05-24

> 生成时间: 2026-05-24 02:29 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## 横向对比

好的，作为一名专注于 AI 开发工具生态的资深技术分析师，现根据您提供的 2026-05-24 各主流 AI CLI 工具的社区动态摘要，为您生成一份横向对比分析报告。

---

### AI CLI 工具社区动态横向对比报告 | 2026-05-24

#### 1. 今日横向概览

今日，六款主流 AI CLI 工具的社区活动呈现显著分化。以 **Claude Code**、**Gemini CLI**、**OpenCode** 和 **Qwen Code** 为代表的工具社区活跃度极高，各自涌现了大量 Issues 和 PRs，呈现出“大社区大噪音”的特点。相比之下，**GitHub Copilot CLI** 和 **Kimi Code CLI** 的社区动态则相对平静，Issues 和 PRs 数量较少，版本发布也以常规修复为主。整体来看，社区焦点高度集中在**平台兼容性（尤其是Windows）**、**工具稳定性（挂起、冻结、内存泄漏）** 以及**外部工具集成（如MCP）的体验优化**上。

#### 2. 各工具活跃度对比

| 工具名称 | 今日新增/更新 Issue 数 | 今日新增/更新 PR 数 | 版本发布 | 社区指标亮点 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 约 10 个高热度 | 约 10 个重要 PRs | v2.1.150 (内部改进) | 社区对定价、稳定性Bug（挂起/冻结）、Cowork性能抱怨强烈，Issues有近400个点赞。 |
| **Gemini CLI** | 约 10 个高热度 | 约 10 个重要 PRs | 无 | Agent行为可靠性（状态误报、上下文溢出）和高严重性Bug修复是焦点。 |
| **OpenCode** | 约 10 个高热度 | 约 10 个重要 PRs | 无 | 社区讨论深度高（沙箱、语音输入），PR围绕性能与细节修复，开发活动密集。 |
| **Qwen Code** | 约 10 个热点 | 约 10 个重要 PRs | v0.16.1 & nightly | 版本迭代快，围绕 `qwen serve` 和内存泄漏问题的开发与讨论活跃。 |
| **GitHub Copilot CLI**| 17 条有更新，3 条新 Issue | 1 条更新 | v1.0.52 (常规修复) | 社区规模相对较小，关注点在计费提示和MCP交互体验上，问题较为具体。 |
| **Kimi Code CLI** | 5 条新 Issue | 8 个 PRs | 无 | 社区规模较小，活跃度较低，主要聚焦Windows兼容性和配置管理。 |

#### 3. 共同出现的功能方向

- **跨平台兼容性（尤其是Windows）：**
    - **Claude Code**: 报告了 Windows 桌面版更新后无法启动、Windows Terminal 粘贴图片失效。
    - **Gemini CLI**: 有 PR 专门添加 Windows Shell 回退支持，修复 PTY 泄漏。
    - **OpenCode**: 报告了 Windows CJK 路径崩溃。
    - **Kimi Code CLI**: 今日报告了 Windows 多进程日志轮转失败、非 UTF-8 编码输出问题。
- **MCP (Model Context Protocol) 集成体验：**
    - **Claude Code**: 文档记录了 Cowork 移除 Office 加载项的问题。
    - **Gemini CLI**: 报告了 MCP 工具过多导致 API 调用失败的扩展性问题。
    - **GitHub Copilot CLI**: 社区反馈 MCP 菜单无法滚动、自定义注册中心路径错误、希望增加“禁用 MCP”选项。
    - **Kimi Code CLI**: 有 PR 实现了项目级 MCP 配置与合并策略。
- **长会话与稳定性：**
    - **Claude Code**: 核心痛点，报告了工具挂起/冻结 5-20 分钟。
    - **Gemini CLI**: 修复了可能导致 Token 指数级泄漏的状态快照 Bug。
    - **OpenCode**: 讨论了长命令输出截断导致 Agent 死循环的问题。
    - **Qwen Code**: 报告了长会话中内存溢出 (OOM) 的严重 Bug。
- **计费与配额透明：**
    - **Claude Code**: 社区强烈要求印度区定价，并对无头会话的扣费规则提出疑问。
    - **GitHub Copilot CLI**: 用户对“3 premium requests”提示感到困惑和焦虑。

#### 4. 差异化定位分析

- **Claude Code (Anthropic):** 定位为 **“高级开发者”的深度协作伙伴**。其核心差异点是 **Cowork** 功能，试图创造一个全能的开发环境。社区讨论的痛点（性能开销、集成兼容性）也正是其功能“重量级”的体现。用户对定价敏感，反映了其目标用户群体对成本控制的考量。
- **Gemini CLI (Google):** 定位为 **“多模型”与“Agent生态”的探索者**。其差异化在于对 **Agent** 的深度依赖和 **ACP (Agent Communication Protocol)** 协议的推行。社区反馈的核心问题是 Agent 行为的可靠性和状态报告的准确性，表明其 Agent 驱动的愿景尚在成熟过程中。
- **OpenCode (Anomaly):** 定位更偏向 **“开源社区的宠儿”**。其社区讨论最为活跃和发散，从沙箱安全到语言输入，展示了极高的用户参与度和期待。其差异化在于对 **安全（沙箱）** 和 **用户控制（如禁用工具截断）** 的重视，社区贡献者也异常活跃。
- **Qwen Code (阿里通义):** 定位为 **“快速迭代的集成者”**。发布频繁，功能跟进迅速。差异化在于明确发布了 **`qwen serve` (Mode B)** 的路线图，并快速实现了 **ACP协议** 和 **飞书平台集成**，显示出瞄准企业级和生态连接的战略意图。
- **GitHub Copilot CLI (GitHub/Microsoft):** 定位为 **“GitHub生态的轻量级扩展”**。其功能聚焦于与 GitHub 工作流的无缝对接。今日动态较少，反映了其功能的相对稳定性。社区反馈集中在 MCP 和计费，表明其正试图在原有能力基础上增加扩展性。
- **Kimi Code CLI (月之暗面):** 定位为 **“成长中的中国新秀”**。今日动态少，但在 Windows 兼容性和基础功能修复上有所动作。其社区规模较小，正处于功能完善和平台适配的早期阶段。

#### 5. 社区活跃度记录

- **第一梯队（高度活跃）**: **Claude Code**、**Gemini CLI**、**OpenCode**、**Qwen Code**。这四个工具的 Issue 和 PR 更新数量均超过 50 条，社区讨论深度、用户反馈的热度（如高点赞和高评论数）以及开发者的快速响应（PR 跟进）都非常显著。其中 **OpenCode** 社区的讨论最具发散性，而 **Claude Code** 社区的反馈最聚焦于稳定性与成本。
- **第二梯队（温和活跃）**: **GitHub Copilot CLI**、**Kimi Code CLI**。这两个工具的社区动态数量较少，Issues 和 PRs 更新规模在个位数到十几条之间。社区讨论更偏向具体功能点的 Bug 修复或请求，缺乏大规模、高关注度的议题。

#### 6. 有证据支撑的观察

1.  **Windows 平台是各工具社区的“众矢之的”**：无论是巨头产品（Claude Code、Copilot CLI）还是新秀（Kimi Code CLI），都收到了大量关于 Windows 平台兼容性的严重 Bug 报告，从无法启动、日志冲突到复制粘贴失效。这强烈表明，**跨平台体验的一致性仍是所有AI CLI工具亟待解决的核心短板**。

2.  **Agent 的“可靠性”而非“能力”是当前最大瓶颈**：Gemini CLI 的子代理状态误报、OpenCode 的 Agent 重试死循环、Claude Code 的 Cowork 性能下降，共同指向了一个问题：**用户对 Agent 自主完成任务的需求已从“能否做到”转向了“能否稳定、不出错、透明地做到”**。Agent 状态的准确性和结果的幂等性是社区普遍关注的焦点。

3.  **社区驱动的“文档自救”现象显著**：Claude Code 的社区贡献者 `@giruuuuj` 一次性提交了大量文档修复 PR，这并非孤立事件。它反映了当官方文档的深度和全面性跟不上社区实践时，**用户会自发组织起来补充知识库**。这对强调开发者体验的工具来说，是一个值得警惕的信号。

4.  **MCP 生态正面临“成长的烦恼”**：多个工具（Copilot CLI, Gemini CLI, Kimi Code CLI）都收到了关于 MCP 集成体验的优化请求，如交互菜单设计、自定义注册中心兼容性、工具数量限制等。这表明 **MCP 协议虽被广泛接受，但其在不同工具中的实现细节和成熟度仍有很大差距**，正从概念验证进入实用打磨阶段。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

好的，这是为您生成的 2026-05-24 Claude Code 社区动态日报。

---

# Claude Code 社区动态日报 | 2026-05-24

## 今日更新概览

今日发布了一个仅包含内部基础设施改进的版本 (v2.1.150)。社区讨论热度集中在印度区定价诉求、工具挂起/冻结的严重Bug、以及Cowork功能的性能与稳定性问题上。此外，社区贡献者集中提交了**大量**针对已知问题的文档修复 PR，试图完善官方“排错指南”。

## 版本发布

- **v2.1.150**：此版本主要包含内部基础设施的改进，没有面向用户的改动。

## 社区热点 Issues

*本部分筛选了评论数或点赞数较高、具有代表性的10个Issues。*

1.  **【定价】印度区定价计划请求**
    - **Issue**: #17432
    - **要点**: 用户请求 Anthropic 为印度用户提供以印度卢比 (INR) 计价的专属订阅方案，类似 OpenAI 和 Google 的做法。当前仅支持美元支付造成了较大困扰。
    - **社区反应**: 该请求获得了极高的社区共鸣，拥有 392 个点赞和 169 条评论，是当前社区最关注的话题之一。

2.  **【稳定性】Claude Code 挂起/冻结**
    - **Issue**: #26224
    - **要点**: 用户报告 Claude Code 在处理大量提示时，会出现长达 5-20 分钟甚至更久的挂起或冻结现象，严重阻塞工作流。
    - **社区反应**: 问题被标记为 `URGENT!!!`，收到 102 条评论和 130 个点赞，表明这是一个影响广泛的稳定性问题。

3.  **【性能】Cowork 功能创建 10GB VM 包导致性能严重下降**
    - **Issue**: #22543
    - **要点**: Cowork 功能在使用后会在本地创建一个约 10GB 的 VM 包，导致 Claude Desktop 启动缓慢、UI 卡顿，且性能会随使用时间推移而下降。
    - **社区反应**: 高优先级 Bug，获得 175 个点赞和 69 条评论，反映出用户对 Cowork 功能性能影响的担忧。

4.  **【桌面端】Windows 桌面版更新后无法启动**
    - **Issue**: #42776
    - **要点**: Windows 上的 Claude Desktop 应用在更新后，由于存在孤立的进程文件锁，导致应用无法重新启动。
    - **社区反应**: 78 条评论，26 个点赞，是 Windows 用户遇到的典型安装/更新问题。

5.  **【CLI】Windows Terminal 中图片粘贴 (Ctrl+V) 失效**
    - **Issue**: #32791
    - **要点**: 用户反馈在 Windows Terminal 中使用 Claude Code CLI 时，之前能正常工作的 `Ctrl+V` 粘贴图片功能现已停止工作。
    - **社区反应**: 24 条评论，有 `has repro` (有复现步骤) 标签，说明该问题已被确认和记录。

6.  **【模型】Sonnet 4.6 上下文窗口显示不正确**
    - **Issue**: #61734
    - **要点**: 在 v2.1.150 版本中，使用 Claude Sonnet 4.6 模型时，状态栏显示的上下文窗口为 200K，但该模型 API 实际支持 1M Token。用户怀疑存在回归Bug。
    - **社区反应**: 属于当日新提交的Bug，有PR (#61738) 明确指出此为 v2.1.150 的内部重构导致的回归。

7.  **【桌面端】更新后桌面端 Session 历史丢失**
    - **Issue**: #48334
    - **要点**: 多个用户报告在更新桌面应用后，之前的会话历史（Session History）被部分或全部删除。
    - **社区反应**: 6条评论，涉及数据丢失，对用户影响较大。被标记为 `data-loss`。

8.  **【IDE/集成】JetBrains 集成需求**
    - **Issue**: #47166
    - **要点**: 用户请求为 JetBrains IDE 开发一个原生、功能完善的 AI Assist 插件，认为当前的集成体验不如 VS Code 等。
    - **社区反应**: 19条评论，虽然没有点赞，但反映了用户对特定 IDE 集成的强烈需求。

9.  **【CLI】Remote Control：手机端选择无法同步回CLI**
    - **Issue**: #28508
    - **要点**: 使用 Remote Control 功能时，在移动设备上对 `AskUserQuestion` 做出的选择无法被 CLI 接收，导致进程无限等待。
    - **社区反应**: 15条评论，15个点赞，这是一个影响跨设备工作流的缺陷。

10. **【认证】OAuth 刷新在临时 5xx 错误后陷入 401 循环**
    - **Issue**: #61912
    - **要点**: 当 Anthropic API 出现临时 5xx 错误时，OAuth 令牌刷新流程处理不当，导致用户的认证状态被破坏，所有后续请求都返回 401 错误，需要重新登录。
    - **社区反应**: 当日新提交的 Bug，有复现步骤，揭示了认证机制的健壮性问题。

## 重要 PR 进展

*本部分筛选了当日更新、且涉及特定功能修复或文档完善的重要PRs。*

1.  **【文档】为多个已知 Bug 添加排错指南**
    - **PR**: #61738, #61750, #61744, #61739, #61722, #61729, 等多个
    - **要点**: 社区贡献者 `@giruuuuj` 提交了大量文档更新，为 Sonnet 4.6 上下文窗口显示错误、桌面端内存泄漏、Agent 技能无法在首轮生效、FleetView 残留条目、上下文总结器捏造用户同意、终端无限滚动等多个已知问题补充了排错说明。
    - **社区反应**: 这些 PR 是对社区反馈的系统性回应，反映出用户对官方文档完善度的期待。

2.  **【文档】添加 Cowork 移除 Office 加载项的排错方法**
    - **PR**: #61757
    - **要点**: 文档指出，Cowork 会话中的 COM/OLE 自动化会修改 M365 加载项信任上下文，导致 PowerPoint 插件消失、Excel 插件无法执行。
    - **社区反应**: 为遇到此类问题的用户提供了明确的根因分析和临时解决方案。

3.  **【文档】明确 `claude -p` 模式下的计费规则**
    - **PR**: #61705
    - **要点**: 建议在文档中增加免责声明，说明使用 `claude -p` 进行的无头会话可能会从 spending limit 而非订阅配额中扣费。
    - **社区反应**: 解决了用户在计费方面的疑惑，提高了透明度。

4.  **【文档】记录 Agent 视图工作目录限制**
    - **PR**: #61742
    - **要点**: 官方文档中明确，Claude Agent 在分发新会话时不支持指定工作目录，Session 总是继承 TUI 自身的工作目录。
    - **社区反应**: 这是对 Agent 功能的一个已知限制的正式记录，避免了用户的困惑。

5.  **【文档】添加 Worktree 删除后残留 bg-spare 进程的清理脚本**
    - **PR**: #61741
    - **要点**: 记录并提供了清理脚本，用于解决 `git worktree` 删除后，bg-spare 守护进程僵持、导致 `/clear` 错误和残留目录的问题。
    - **社区反应**: 提供了一个实用的解决方案，属于社区互助的积极案例。

6.  **【文档】添加 Cursor 扩展 Web 会话无法打开的排错**
    - **PR**: #61727
    - **要点**: 解释了 Cursor 扩展中 Web 层级会话无法打开的原因是扩展将恢复请求全部路由到了本地 CLI，而本地 CLI 无法加载云端会话。
    - **社区反应**: 明确了问题域，便于用户理解并规避。

7.  **【文档】添加 Hook 创作中的陷阱说明**
    - **PR**: #61918 (Issue)
    - **要点**: 用户报告了两个 Hook 的未文档化行为：Auto Mode 会吞掉 `permissionDecision: "ask"` 指令；`SessionStart` 钩子的重新触发语义不清晰。
    - **社区反应**: 作为一个 Issue 被提交，指出了官方文档的不足，对高级用户和自动化场景有重要参考价值。

8.  **【文档】更新模型行为 Issue 模板**
    - **PR**: #61749
    - **要点**: 在模型行为的 Issue 模板中添加了两个新选项：“模型将模棱两可的玩笑回答视为授权”和“模型擅自增加或扩大范围”。
    - **社区反应**: 改进了社区提交Bug时的分类精度，便于开发者定位问题。

9.  **【代码优化】优化重复评论查找逻辑**
    - **PR**: #46450
    - **要点**: 使用单个反向循环优化了查找重复评论和 `commentsAfterDupe` 的判断，以减少过多的迭代。
    - **社区反应**: 一个社区贡献的代码性能优化PR，虽然本周未更新，但被列在更新列表中。

10. **【体验】移除“设计思维”部分的 tone 选项**
    - **PR**: #42197
    - **要点**: 移除了“Design Thinking”部分中 `maximalist chaos` 这个语气选项。
    - **社区反应**: 一个小的UI/UX调整，已合并。

## 功能需求归类

- **区域化与定价**: 用户对非美元区域的定价方案有刚性需求，以印度市场为代表 (#17432)，其高点赞数表明这不是个案。
- **IDE 集成**: 增强对 JetBrains (#47166) 和 VS Code (#37323, `/btw`命令支持) 等主要 IDE 的集成深度是持续存在的诉求。
- **性能与稳定性**: 工具挂起/冻结 (#26224) 和 Cowork 功能带来的性能开销 (#22543) 是当前最影响使用体验的两大问题。
- **平台兼容性**: Windows 平台的安装、更新 (#42776) 和特定功能失效 (#32791) 问题报告集中，是当前兼容性矛盾的重灾区。
- **会话持久化**: 桌面端更新导致 Session 丢失 (#48334) 和 Session 无法恢复 (#59736) 等问题，表明数据持久化和恢复机制仍有待加强。
- **自动化与工具链**: 对原生 GitHub Issues 集成 (#10998) 的呼声，以及对Hook脚本行为的模糊性 (#61918)，反映了社区对更深度的自动化工作流的追求。

## 开发者关注点

1.  **稳定性是核心痛点**: 工具在工作负载高时挂起或长时间无响应 (#26224) 是开发者最难以接受的，这会直接打断开发流程并可能导致工作丢失。
2.  **Cowork 功能“好用但沉重”**: 开发者对 Cowork 的期望很高，但其带来的巨大性能开销 (#22543) 和与其他软件（如 Office 插件）的兼容性问题，使其在实际应用中面临挑战。
3.  **“文档化”需求旺盛**: 大量社区成员 `@giruuuuj` 主动提交文档PR来补充排错指南，这表明官方文档在详细程度和覆盖面方面与社区需求存在差距。
4.  **回归Bug令人担忧**: v2.1.150 版本因内部重构导致 Sonnet 4.6 上下文窗口显示异常 (#61734)，这是一个典型的回归问题，降低了用户对新版本的信任。
5.  **数据安全意识增强**: 应用更新导致 Session 历史丢失 (#48334)、Session 数据残留等问题，使开发者对数据安全变得敏感，期望更健壮的本地数据管理和恢复机制。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

好的，这是根据您提供的 GitHub 数据生成的 2026-05-24 OpenAI Codex 社区动态日报。

---

# 2026-05-24 OpenAI Codex 社区动态日报

**专注 AI 开发工具，记录每日社区脉动。**

---

## 1. 今日更新概览

过去 24 小时内，Codex 社区动态活跃，主要集中在解决 Windows 平台的兼容性问题、完善 TUI（终端用户界面）配置管理以及推进新功能（如 Next-Prompt 建议和 Usage 报告）的开发。共新增/更新了 50 条 Issues 和 34 条 Pull Requests，其中关于 Windows 沙箱、安全误报和桌面应用状态同步的问题成为了社区的关注焦点。

## 2. 版本发布

无新版本发布。

## 3. 社区热点 Issues

以下挑选了今日更新中值得关注的 10 个 Issue，涵盖影响面、严重程度及社区反应。

1. **#20161 [Closed] 手机号验证无法工作**
    - **影响场景**: 用户通过 SSO 登录后，系统要求未绑定手机号的账户进行手机验证，导致登录流程卡死。
    - **社区反应**: 共 147 条评论，收到 98 个 👍，是过去一段时间最受关注的 Issue之一。已于今日被关闭，但未明确说明解决方案。
    - **链接**: [Issue #20161](https://github.com/openai/codex/issues/20161)

2. **#23381 [Open] 严重：政府/GSM 开发工作因误报网络风险警告受阻**
    - **影响场景**: Codex CLI 的安全检测系统将政府/国防项目的正常开发代码误判为网络攻击，并强制阻断，导致开发者无法正常工作。
    - **社区反应**: 问题严重，已被标记为 `critical`。用户提供了详细的截图和 Thread ID，但尚未获得官方有效回应。
    - **链接**: [Issue #23381](https://github.com/openai/codex/issues/23381)

3. **#24259 [Open] Windows 11 ARM64 沙箱间歇性失败**
    - **影响场景**: 在 Windows 11 ARM64 设备上，即使 `codex doctor` 报告一切正常，沙箱功能仍会随机性地因 `spawn setup refresh` 错误而启动失败。
    - **社区反应**: 此为昨日新建的 Issue，已获 6 条评论，开发者正积极与维护者沟通以提供更多诊断信息。
    - **链接**: [Issue #24259](https://github.com/openai/codex/issues/24259)

4. **#24263 [Open] Windows Desktop 渲染器重载导致状态不同步**
    - **影响场景**: Codex Desktop 在渲染器崩溃或重载后，会话的“Turn State”会与视觉状态不同步，控制台会持续报错 `Item not found in turn state`，导致对话流程混乱。
    - **社区反应**: 昨日新建，用户提供了详细的重现步骤和日志分析，开发团队已跟进。
    - **链接**: [Issue #24263](https://github.com/openai/codex/issues/24263)

5. **#24050 [Open] Windows 沙箱 UAC 检测机制错误触发**
    - **影响场景**: 在非管理员权限下运行 Codex CLI，沙箱安装器会被 Windows 错误地识别为需要管理员权限，导致 `os error 740` 并阻断所有沙箱命令执行。
    - **社区反应**: 用户提供了详细的错误日志，指出了 Windows 沙箱设计中的一个关键冲突点。
    - **链接**: [Issue #24050](https://github.com/openai/codex/issues/24050)

6. **#23195 [Open] macOS 将 Codex App 报告为恶意软件**
    - **影响场景**: 部分 macOS 用户在 Codex 会话中，系统突然弹出安全警告，阻止应用运行，将其识别为恶意软件。
    - **社区反应**: 共 9 条评论，收到 8 个 👍。用户猜测可能与应用签名或授权问题有关，但目前无官方确认。
    - **链接**: [Issue #23195](https://github.com/openai/codex/issues/23195)

7. **#24260 [Open] Windows Desktop：GPT-5.5 xhigh 模型思考阶段停滞 30 分钟**
    - **影响场景**: 使用 `gpt-5.5` 模型的 `xhigh` 推理模式时，用户界面停留在“思考中”超过 30 分钟才产生第一个输出结果，严重影响体验。
    - **社区反应**: 作为性能问题被提出，用户怀疑是模型推理或客户端处理超时机制存在问题。
    - **链接**: [Issue #24260](https://github.com/openai/codex/issues/24260)

8. **#13852 [Open] Supabase MCP 需要反复重新认证**
    - **影响场景**: Supabase MCP 工具的 OAuth Token 刷新机制存在缺陷，导致用户在进行初始化或操作时需要频繁重新登录。
    - **社区反应**: 问题存在已久，更新于今日，共 9 条评论。用户和开发者正在讨论根因是 Supabase SDK 侧问题还是 Codex 集成问题。
    - **链接**: [Issue #13852](https://github.com/openai/codex/issues/13852)

9. **#24031 [Closed] 关于 GPT-5.5 何时支持 1M 上下文**
    - **影响场景**: 用户期望在 GPT-5.5 模型上使用 1M tokens 的上下文功能，但此前相关 Issue 被突然关闭，且未有明确承诺或时间表。
    - **社区反应**: 此 Issue 被作为“增强”重新提出，但很快又被关闭。尽管已关闭，仍获得 11 个 👍，反映了用户对更高上下文窗口的强烈需求。
    - **链接**: [Issue #24031](https://github.com/openai/codex/issues/24031)

10. **#24282 [Open] Windows Desktop 设置目标（Goal）功能失败**
    - **影响场景**: 在 Windows 桌面端的 `/Goal` 命令创建会话目标时，UI 提示失败。本地调试发现是用户行为记录表中未能正确地插入目标数据行。
    - **社区反应**: 今日新 Issue，开发者在尝试复现，可能是一个新的引入的 Bug。
    - **链接**: [Issue #24282](https://github.com/openai/codex/issues/24282)

## 4. 重要 PR 进展

以下挑选了 10 个重要的 Pull Requests，它们集中在架构优化和新功能开发上。

1. **#24154 [Open] 添加实验性的 Turn 附加上下文**
    - **简介**: 为 `turn/start` 和 `turn/steer` API 增加 `additionalContext` 支持。允许客户端向模型提供浏览器状态等临时外部上下文，而无需将其混入用户提示词中。
    - **链接**: [PR #24154](https://github.com/openai/codex/pull/24154)

2. **#24257 #24266 #24255 #24254 [Open] TUI 配置清理系列（插件市场、插件提及、MCP 列表、信任项目、OSS 提供商）**
    - **简介**: 一个由 @etraut-openai 提交的系列 PR，旨在将 TUI 中的各种配置读写操作统一迁移到 App Server 的配置管理路径下，解决因配置状态分散（TUI 本地 `config.toml` vs 远程 App Server）导致的 UI 展示或功能异常问题。
    - **链接**: [PR #24257](https://github.com/openai/codex/pull/24257), [PR #24266](https://github.com/openai/codex/pull/24266), [PR #24255](https://github.com/openai/codex/pull/24255), [PR #24254](https://github.com/openai/codex/pull/24254)

3. **#23563 [Closed] 使被撤销的 ChatGPT 认证在 Codex 中过期**
    - **简介**: 当 ChatGPT Token 被 `token_invalidated` 或 `token_revoked` 时，引导 Codex 进行登出或重新认证，而不是尝试刷新一个已知无效的 Token，从而改善认证状态的错误处理。
    - **链接**: [PR #23563](https://github.com/openai/codex/pull/23563)

4. **#24261 [Open] 为 `codex doctor` 命令添加环境诊断信息**
    - **简介**: 扩展 `codex doctor` 命令的输出，增加操作系统语言、Git 路径解析、控制台代码页等诊断信号，以辅助排查 TUI 启动问题（如 Issue #23031）。
    - **链接**: [PR #24261](https://github.com/openai/codex/pull/24261)

5. **#23976 [Open] feat(tui): 渲染下一步提示建议 [3/3]**
    - **简介**: TUI 三件套的收尾工作，在对话完成后，TUI 会请求并在输入框中显示“下一步建议”的幽灵文本，提升用户交互引导性。
    - **链接**: [PR #23976](https://github.com/openai/codex/pull/23976)

6. **#24127 [Open] feat(app-server): 添加下一步提示建议 RPC [2/3]**
    - **简介**: 在 App Server 层新增 `thread/suggestNextPrompt` API，为 TUI 客户端提供获取下一步文本建议的能力。
    - **链接**: [PR #24127](https://github.com/openai/codex/pull/24127)

7. **#24124 [Open] feat(tui): 添加使用量报告命令 [4/4]**
    - **简介**: 为用户提供 `/usage` 命令，允许在 TUI 中查看本地 Token 消耗情况，支持按日或按周统计，并展示各功能模块的消耗占比。
    - **链接**: [PR #24124](https://github.com/openai/codex/pull/24124)

8. **#24121 #24122 #24123 [Open] feat(usage): 基础使用量存储、属性归因与 API 暴露 [1/4, 2/4, 3/4]**
    - **简介**: 使用量报告功能的底层支撑 PR。包括基于 SQLite 的本地持久化存储、记录“哪个功能（如 MCP、Skills、Apps）消耗了多少 Token”的标签归因逻辑，以及 App Server 端的读取 API。
    - **链接**: [PR #24121](https://github.com/openai/codex/pull/24121), [PR #24122](https://github.com/openai/codex/pull/24122), [PR #24123](https://github.com/openai/codex/pull/24123)

9. **#24126 [Open] feat(next-prompt): 建议引擎 [1/3]**
    - **简介**: Next-Prompt 功能的核心：一个通用的建议生成引擎。它负责构建 prompt、应用抑制规则、提取上下文，为上层 API 和 UI 提供独立且可测试的模块。
    - **链接**: [PR #24126](https://github.com/openai/codex/pull/24126)

10. **#23618 [Open] feat: 添加持久的排队会话（Turn）存储**
    - **简介**: 引入 SQLite 支持的队列存储，用于持久化“排队跟进”的用户输入。当用户在当前会话忙碌时发送消息，这些消息会被安全地存储起来，待会话空闲时自动处理，避免丢失。
    - **链接**: [PR #23618](https://github.com/openai/codex/pull/23618)

## 5. 功能需求归类

从 Issues 中可以归类出以下用户反复提及的功能方向：

- **Windows 平台兼容性**: 这是目前最突出的问题类别。大量 Issue 涉及 Windows 沙箱（Sandbox）的各种 Bug、UAC 权限问题、路径问题以及应用崩溃。这表明 Windows 版本的用户体验仍需显著提升。
- **沙箱与安全机制优化**: 除了平台相关，沙箱的通用问题也很受关注。包括 `.git` 目录只读导致无法 commit，以及安全检测的误报（如 #23381）阻碍正常开发流程。
- **认证与授权流程**: 包括 SSO 登录后的手机验证、MCP 工具的 OAuth Token 刷新、以及 macOS 端的恶意软件误报，均显示了在认证流程中用户遇到的问题。
- **连接稳定性与性能**: 如 WebSocket 的频繁重连、模型推理超时（30分钟停滞）等问题，影响了用户的使用体验和开发效率。
- **新功能支持**: 用户对 `GPT-5.5` 模型的 `1M` 上下文窗口功能表现出强烈需求，同时也对即将推出的 `Next-Prompt` 建议、`Usage` 报告和 `Goal` 功能抱有期待。

## 6. 开发者关注点

- **Windows 平台体验的“落差感”**: 开发者普遍反映 Codex 在 macOS 上的体验更流畅，而 Windows 平台（特别是 ARM 架构和沙箱）存在大量兼容性和稳定性问题。这是当前社区反馈中最集中的痛点。
- **沙箱的“双刃剑”效应**: 沙箱安全机制是必要的，但当其规则过于严格（如阻止 Git 操作、误报安全风险）时，反而严重阻碍了正常的开发工作流。开发者希望沙箱能提供更精细、更智能的规则配置，以及更清晰的错误信息。
- **核心功能可靠性**: 诸如基础对话、模型响应、会话状态同步等核心功能的稳定性是开发者最关心的。频繁的断开重连、会话状态丢失、长时间无响应等 Bug 会直接降低开发者的信任度。
- **功能承诺的兑现**: 对于像“1M 上下文”这类被宣传或暗示过的功能，社区关注度很高。如果相关 Issue 被关闭而缺乏明确沟通，会引发开发者的不满和信任危机。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

好的，这是为您生成的2026年5月24日Gemini CLI社区动态日报。

---

# Gemini CLI 社区动态日报 | 2026-05-24

## 今日更新概览

今日社区活跃度较高，共更新了50条Issue和34条PR。核心开发团队持续关注Agent的稳定性问题，多个高优先级（P1/P2）的Bug修复PR正在审查中。用户反馈主要集中在文件索引异常、Agent状态报告不准确以及模型选择逻辑混淆等问题上。

## 版本发布

今日无新版本发布。

## 社区热点 Issues

以下挑选10个值得关注的 Issue，涵盖核心功能、Agent行为及性能问题。

1.  **文件索引与可见性异常**
    用户反映项目中的部分文件（即使未被 `.gitignore` 或 `.geminiignore` 忽略）对 Gemini CLI 不可见，无法通过 tag 操作关联。开发者怀疑是索引机制存在硬性限制，影响深度代码库的使用。
    场景：代码库开发 | Issue: [#20730](https://github.com/google-gemini/gemini-cli/issues/20730)

2.  **Auto Mode 模型选择与实际不符**
    用户反馈在 CLI 中选择 “Gemini 3 Auto Mode” 后，实际回复仍由 Gemini 2.5 Flash 和 Flash-Lite 生成，导致预期性能与体验不一致，影响高需求任务的模型选择。
    场景：模型选择、自动化工作流 | Issue: [#22381](https://github.com/google-gemini/gemini-cli/issues/22381)

3.  **子代理故障恢复报告错误**
    当子代理（如 `codebase_investigator`）因达到最大轮次限制（MAX_TURNS）而中断时，系统却将其状态报告为 “GOAL”（目标达成）的“成功”，掩盖了实际的中断和未完成的工作，误导用户对任务状态的判断。
    场景：多步骤代理任务 | Issue: [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)

4.  **PDF 摘要出现严重幻觉**
    用户报告之前能正常概括的 PDF 文件，现在会出现完全编造的信息（幻觉），严重影响了核心的文档摘要功能。
    场景：文档处理、内容分析 | Issue: [#27408](https://github.com/google-gemini/gemini-cli/issues/27408)

5.  **Shell 命令执行后卡死**
    在执行简单的 Shell 命令后，CLI 频繁卡住，显示“等待输入”（Waiting input），即使命令已完成。此问题严重影响自动化脚本和工作流的顺畅执行。
    场景：Shell 执行、自动化 | Issue: [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)

6.  **MCP 工具过多导致 API 调用失败**
    当启用大量 MCP（Model Context Protocol）连接时，系统会因工具声明超过 512 个函数声明的 API 上限而报错，限制了用户同时使用多种外部工具的能力。
    场景：MCP 集成、扩展性 | Issue: [#19083](https://github.com/google-gemini/gemini-cli/issues/19083)

7.  **JSON Agent 上下文窗口溢出**
    用户反馈 Agent 在处理任务时，会一次性读取大量文件（上下文窗口高达 120 万 tokens），导致超出模型内存限制并引发错误，暴露出上下文管理策略的不足。
    场景：大型代码库处理、上下文管理 | Issue: [#18318](https://github.com/google-gemini/gemini-cli/issues/18318)

8.  **浏览器 Agent 忽略用户配置**
    用户通过 `settings.json` 设置的参数（如 `maxTurns`）对浏览器 Agent 无效，表明其配置加载逻辑存在 Bug，导致用户无法自定义 Agent 行为。
    场景：浏览器自动化、用户配置 | Issue: [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)

9.  **韩语提示词推理质量严重下降**
    用户发现使用韩语编写详细提示时，Gemini CLI 的推理能力显著弱于其他 AI 编程助手（如 Cursor），存在语言支持不均衡的问题。
    场景：多语言支持 | Issue: [#21867](https://github.com/google-gemini/gemini-cli/issues/21867)

10. **Auto Memory 功能多项问题**
    维护者跟进了一系列关于 Auto Memory 功能的问题，包括潜在的秘密泄露风险（先推理后脱敏）、无效内存补丁被静默跳过、以及对低价值对话的无限重试，这些均影响了功能的可靠性和安全性。
    场景：长期记忆、用户隐私 | Issue: [#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522)

## 重要 PR 进展

以下挑选 10 个重要的 PR，聚焦于 Bug 修复和功能增强。

1.  **修复并发编辑同一文件时的竞态条件**
    高优先级PR，通过为文件操作引入序列化锁，解决 `EditTool` 和 `WriteFileTool` 在并发执行时因读写顺序错误导致的数据丢失或损坏问题。
    类型：Bug 修复 | PR: [#27153](https://github.com/google-gemini/gemini-cli/pull/27153)

2.  **修复 PTY 内存与文件描述符泄漏**
    修复了 `ShellExecutionService` 中的内存泄漏，该问题导致进程退出后，终端（PTY）资源未被及时回收，长期运行会耗尽系统资源。
    类型：Bug 修复 | PR: [#27154](https://github.com/google-gemini/gemini-cli/pull/27154)

3.  **修复路由分类器导致函数响应报错**
    修复了历史会话修剪逻辑导致 `functionResponse` 与 `functionCall` 不匹配，从而引发 400 错误的根本问题。
    类型：Bug 修复 | PR: [#27389](https://github.com/google-gemini/gemini-cli/pull/27389)

4.  **改进音频 WAV 文件处理**
    修复了 API 不支持的音频嵌套格式问题，并优化了上下文大小估算，减少了因音频处理不当导致的 API 错误。
    类型：Bug 修复 | PR: [#26734](https://github.com/google-gemini/gemini-cli/pull/26734)

5.  **修复状态快照处理器的指数级 Token 泄漏**
    修复了 `StateSnapshotAsyncProcessor` 中的 Bug，该问题导致历史摘要不能被正确过滤，造成 Token 消耗呈指数级增长，严重消耗上下文窗口。
    类型：Bug 修复 | PR: [#26758](https://github.com/google-gemini/gemini-cli/pull/26758)

6.  **为 ACP 协议添加 `/compress` 命令**
    新增 slash 命令，允许通过 Agent Communication Protocol (ACP) 进行会话历史压缩，避免长会话因超出上下文限制而中断。解决了 ACP 模式下该命令无效的问题。
    类型：功能增强 | PR: [#27151](https://github.com/google-gemini/gemini-cli/pull/27151)

7.  **升级 PTY 依赖，修复 macOS 问题**
    升级了 PTY 库，以引入上游的 macOS `/dev/ptmx` 泄漏修复，解决特定系统下的稳定性问题。
    类型：依赖升级 | PR: [#27147](https://github.com/google-gemini/gemini-cli/pull/27147)

8.  **添加可配置的数值路由规则**
    允许用户在 `settings.json` 中自定义复杂分数到模型的映射关系，取代了原有的硬编码单一阈值，使任务分配更灵活。
    类型：功能增强 | PR: [#27406](https://github.com/google-gemini/gemini-cli/pull/27406)

9.  **修复 `--skip-trust` 标志未生效问题**
    修复了一个长期存在的 Bug，使 `--skip-trust` 标志现在能真正加载工作区特定设置（如 Hooks、MCP servers），解决了文档行为与实际不符的问题。
    类型：Bug 修复 | PR: [#27137](https://github.com/google-gemini/gemini-cli/pull/27137)

10. **添加 Windows Shell 回退支持**
    为 Windows 环境添加 Shell 回退支持，提升在 `powershell.exe` 或 `cmd.exe` 不可用的受限环境（如 Git Bash、MSYS）中的兼容性。
    类型：功能增强 | PR: [#26752](https://github.com/google-gemini/gemini-cli/pull/26752)

## 功能需求归类

从今日更新的 Issues 中，可以归类出如下几个用户持续呼吁的功能方向：

- **Agent 智能与可靠性**：用户需求集中在如何让 Agent（包括子Agent和浏览器Agent）更可靠，更准确地报告任务状态（如 [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)），以及更好地管理上下文窗口和 Token 消耗（如 [#18318](https://github.com/google-gemini/gemini-cli/issues/18318), [#26758](https://github.com/google-gemini/gemini-cli/pull/26758)）。
- **错误处理与诊断**：用户期望在遇到 API 错误（函数响应不匹配、工具数量超限等）和文件操作异常时，能得到更清晰、可操作的错误提示，而非静默失败或模棱两可的信息（如 [#22351](https://github.com/google-gemini/gemini-cli/issues/22351), [#22830](https://github.com/google-gemini/gemini-cli/issues/22830)）。
- **文件索引与上下文管理**：围绕 `#20730` 等 Issue 的讨论表明，用户对文件系统的索引范围和可见性（特别是大型项目）有更高的透明度和控制需求，期望能够精确控制哪些文件进入上下文。
- **模型与工具支持**：用户持续关注模型选择的自控权（如 `#22381`）以及对更多外部工具（MCP）的支持力度（如 `#19083`）。同时，对特定语言（如韩语）的推理质量也提出了要求（`#21867`）。
- **配置与扩展性**：用户希望 `settings.json` 的配置能够被一致、完整地应用（如 `#22267`, `#27137`），并且希望有更多可自定义的规则（如路由规则 `#27406`）。

## 开发者关注点

- **Agent 状态报告可靠性**：`#22323` 中反映的子代理任务中断却被报告为成功的问题，是开发者反馈的核心痛点之一，直接影响了用户对 Agent 自主完成任务的信任度。
- **上下文窗口管理**：用户对 Token 消耗失控（`#18318`），以及修复 `#26758` 这样导致指数级 Token 泄漏的 Bug 表示高度关注。合理的上下文修剪和成本控制是高频需求。
- **与云模型的体验一致性**：用户期望 CLI 端的行为（如模型选择、能力表现）与 Gemini 在其他平台（如Web）的表现一致，任何差异都会导致困惑和质疑。`#22381` 和 `#27408`（幻觉突然出现）都反映了这一点。
- **跨语言/平台支持不平衡**：韩语提示词的质量下降（`#21867`）以及 Windows 下的兼容性问题（`#27154`, `#26752`）表明，在全球化支持和多平台兼容性方面仍有提升空间。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-05-24

---

## 今日更新概览

- 昨日（2026-05-23）发布 **v1.0.52**，主要修复了非交互子命令的 stdin 占用问题、对话视图增加垂直滚动条、切换 Autopilot 模式不再触发意外权限弹窗等。
- 社区共 17 条 Issue 有更新，其中 3 条为今日新建（#3496、#3494、#3483 等），集中在复制粘贴异常、MCP 显示滚动、以及长文本描述被静默丢弃等问题。
- 仅 1 条 PR（#2381）有更新，为 Fish shell 用户添加 PATH 配置支持，已关闭。

---

## 版本发布

### v1.0.52（2026-05-23）

**Release 链接**：https://github.com/github/copilot-cli/releases/tag/v1.0.52

**主要更新内容**：
- 非交互式子命令（`plugin list`、`mcp list`、`help`、`version`）不再消耗标准输入（stdin），避免管道模式下的意外阻塞。
- 主对话视图（conversation view）新增 **垂直滚动条** 并支持鼠标拖拽，长对话场景下操作更便捷。
- 解决切换至 Autopilot 模式时，工具、路径或 URL 访问权限弹窗被意外触发的问题。
- 其他稳定性与性能优化（`copil` 相关修正，版本号与描述完备）。

---

## 社区热点 Issues（选取 10 条）

### 1. #1477 请求计费提示：Autopilot 完成后显示 "Continuing autonomously (3 premium requests)"
- **影响场景**：免费用户在 Autopilot 任务完成后，持续收到“3 premium requests”提示，疑似计费逻辑错误或展示异常。
- **社区反应**：评论 10，👍 18，创建于 2026-02-15，昨天仍有活跃讨论。
- **链接**：https://github.com/github/copilot-cli/issues/1477

### 2. #3333 Android/Termux 平台在 v1.0.48+ 无法运行（缺少 glibc 兼容）
- **影响场景**：Android 用户通过 Termux 运行 Copilot CLI 时，因原生 Rust addon 编译目标为 glibc，与 Bionic libc 不兼容。
- **社区反应**：评论 4，👍 1，标记 [area:platform-linux, area:installation]。
- **链接**：https://github.com/github/copilot-cli/issues/3333

### 3. #2956 为 `/mcp show` 交互菜单增加 "Disable MCP" 选项
- **影响场景**：目前只能通过 `/mcp disable <server-name>` 命令禁用，而交互菜单仅有“add”“delete”，缺少“disable”入口，降低可发现性。
- **社区反应**：评论 3，👍 3，标记 [area:mcp]。
- **链接**：https://github.com/github/copilot-cli/issues/2956

### 4. #2284 请求持久化 `/add-dir` 允许的目录（跨会话生效）
- **影响场景**：用户每次新会话需要重新添加允许目录，对于长期项目开发流程影响较大。
- **社区反应**：评论 3，👍 12。
- **链接**：https://github.com/github/copilot-cli/issues/2284

### 5. #3442 v1.0.51 远程会话被组织管理员禁用提示（实际未配置）
- **影响场景**：升级后执行 `/remote on` 收到“Remote sessions are not enabled”错误，但管理员确认并未限制。
- **社区反应**：评论 3，👍 9，标记 [area:sessions, area:enterprise]。
- **链接**：https://github.com/github/copilot-cli/issues/3442

### 6. #3436 `/mcp search` 针对自定义 MCP 注册中心构造错误路径（缺少 `/v0.1/`）
- **影响场景**：自托管 MCP 注册中心如 `https://my-registry.example.com` 时，请求路径为 `/servers` 而非 `/v0.1/servers`，导致 404。
- **社区反应**：评论 2，👍 1，标记 [area:enterprise, area:mcp]。
- **链接**：https://github.com/github/copilot-cli/issues/3436

### 7. #3496 时间线（Timeline）中单行文本复制粘贴失效（v1.50 起）
- **影响场景**：用户从对话时间线选择单行文本后，复制（Ctrl+C / 右键）无法正常粘贴；跨行选择正常。
- **社区反应**：今日新建，暂无评论。
- **链接**：https://github.com/github/copilot-cli/issues/3496

### 8. #3494 SKILL.md 文件 description 超过 1024 字符被静默丢弃，无警告或错误
- **影响场景**：Agent Skills 开发者提供的描述超限，Copilot SDK 调用 `skills.list()` 时不返回该技能，且无日志提示。
- **社区反应**：今日新建，标记 [triage]。
- **链接**：https://github.com/github/copilot-cli/issues/3494

### 9. #3486 `/mcp show` 无法滚动查看某 MCP 服务器下的所有工具
- **影响场景**：当 MCP 服务器注册大量工具时，交互菜单无法滚动显示完整列表。
- **社区反应**：昨天创建，暂无评论，标记 [triage]。
- **链接**：https://github.com/github/copilot-cli/issues/3486

### 10. #3483 Ubuntu 上复制粘贴完全失效（鼠标右键 / Ctrl+C 均无效）
- **影响场景**：Linux (Ubuntu) 用户，标记文本后右键菜单显示“copied to clipboard”但实际未复制，且鼠标右键被 CLI 捕获无法进行终端原生复制。
- **社区反应**：昨天创建，标记 [area:platform-linux, area:input-keyboard]。
- **链接**：https://github.com/github/copilot-cli/issues/3483

---

## 重要 PR 进展（选取 1 条）

### #2381 安装脚本增加 Fish shell 支持（PATH 配置）
- **作者**：@marcelsafin
- **状态**：已合并关闭（2026-05-23 最后更新）
- **内容**：此前 Fish shell 用户被归入 `*)` 默认 case，写入 POSIX `export` 语法到 `~/.profile`，而 Fish 不加载该文件且不支持 `export PATH="...:$PATH"` 的数组语法。该 PR 为 Fish 添加专用分支，正确写入 `set -gx PATH ...` 到 Fish 的配置文件（`~/.config/fish/config.fish` 等）。
- **链接**：https://github.com/github/copilot-cli/pull/2381

---

## 功能需求归类

从近期 Issues 中可归纳出以下用户反复提及的功能方向：

| 方向 | 相关 Issues | 说明 |
|------|------------|------|
| **MCP 体验优化** | #2956, #3436, #3486 | 交互菜单缺少禁用入口、自定义注册中心 URL 路径错误、工具列表无法滚动 |
| **会话持久化与配置** | #2284, #3488, #3481 | 允许目录跨会话保留、`config.json` 路径转义导致信任文件夹配置损坏、非交互模式下 `long_context` 不生效 |
| **平台兼容性修复** | #3333 (Android), #3483 (Ubuntu 复制) | 原生模块 glibc 依赖使 Termux 不可用、Linux 下复制粘贴功能异常 |
| **企业 / 计费相关** | #1477, #3442 | Autopilot 后“premium requests”提示疑似 bug、远程会话被错误禁用 |
| **Agent Skills 开发** | #3494 | 描述超限无反馈，影响技能发布与发现 |
| **模型选择** | #1477, #3480（Rubber Duck 指定模型）| 用户希望对特定模式（如 Rubber Duck）能选择模型，避免误用高价模型 |

> 注意：以上归类仅为用户诉求汇总，不代表官方路线图或已确认的优先级。

---

## 开发者关注点

- **免费模式下的计费提示焦虑**：`#1477` 表明用户对“premium requests”的频繁出现感到困惑，担心被无意中收费或消耗配额，建议官方明确计费策略展示或修复误触逻辑。
- **Linux/Android 兼容性瓶颈持续**：近期多个平台相关 Issue（#3333、#3483）反映了 CLI 对非标准 Linux 环境（如 Termux、较新 Ubuntu 版本）的适配仍不完善，尤其是终端输入/输出控制（复制粘贴、原生终端互操作）问题突出。
- **MCP 功能成熟度不足**：MCP 作为 Copilot CLI 的新扩展机制，在交互体验（菜单滚动、禁用入口）和注册中心路径处理（#3436）上存在多个低级缺陷，表明该功能仍处于早期阶段。
- **配置持久化与路径安全问题**：`#2284`（会话间持久化）和 `#3488`（路径转义损坏）揭示了 CLI 对本地配置文件的读写处理较脆弱，尤其是 Windows 路径转义易被静默破坏，可能导致信任目录反复丢失。
- **非交互模式/头模式下的上下文缺失**：`#3481` 指出 `long_context` 在非交互启动时未生效，影响批量脚本或 CI/CD 场景下的大上下文需求。

---

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

好的，作为一名专注于AI开发工具的技术分析师，根据2026年5月23日提供的GitHub数据，我将为您生成2026年5月24日的Kimi Code CLI社区动态日报。

---

### Kimi Code CLI 社区动态日报 | 2026-05-24

#### 今日更新概览

今日，Kimi CLI仓库提交了8个Pull Request，同时有5个新Issue被提出，社区活跃度较高。本次更新主要集中在**Windows平台兼容性修复**（日志轮转、编码问题）、**会话加载性能优化**以及**新功能体验改进**（Thinking模式切换、项目级MCP配置）。值得注意的是，多个Pull Request来自外部贡献者，社区参与度持续提升。

#### 社区热点 Issues

1.  **Web端会话加载性能优化** (#2357)
    *   **作者**: @QYongHao
    *   **摘要**: 用户反馈切换会话时需要等待所有历史消息加载完毕，体验不佳。建议Web界面应**优先加载最新消息**，并允许按需加载更早的历史记录。
    *   **链接**: https://github.com/MoonshotAI/kimi-cli/issues/2357

2.  **新增/thinking命令与快捷切换思考模式** (#2352)
    *   **作者**: @yahiasalamanca
    *   **摘要**: 提出增加 `/thinking`（别名 `/t`）命令和 `Ctrl+T` 快捷键，以便在不退出交互会话的情况下，快速切换当前模型的“思考模式”。当前切换流程较为繁琐，需要通过 `/model` 命令多次选择确认。
    *   **链接**: https://github.com/MoonshotAI/kimi-cli/issues/2352

3.  **Shell模式命令历史对Agent模式不可见** (#2351)
    *   **作者**: @strcpy-s
    *   **摘要**: 指出`Shell模式`（Ctrl+X）与`Agent模式`存在隔离，Shell模式下执行的命令及其输出对Agent不可见。用户在无头服务器上诊断问题时，需手动复制粘贴，效率低下。
    *   **链接**: https://github.com/MoonshotAI/kimi-cli/issues/2351

4.  **Windows平台多进程日志轮转失败** (#2348)
    *   **作者**: @SunYunP
    *   **摘要**: 报告了一个Bug，当多个Kimi CLI进程（如CLI、Web、Worker）在Windows上共存时，日志库`loguru`因试图轮转同一日志文件而触发`PermissionError`（WinError 32）。
    *   **链接**: https://github.com/MoonshotAI/kimi-cli/issues/2348

5.  **SessionStart Hook的stdout对用户可见** (#2347)
    *   **作者**: @oucaijun
    *   **摘要**: 建议将`SessionStart` Hook执行后的stdout输出展示给用户。当前Hook功能被用于读取欢迎语或运行诊断，但输出内容被静默捕获，用户不可见，限制了其应用场景。
    *   **链接**: https://github.com/MoonshotAI/kimi-cli/issues/2347

#### 重要 PR 进展

1.  **PR #2356: 重构工具集，后台加载MCP工具** [OPEN]
    *   **作者**: @jiang1997
    *   **内容**: 重构了MCP（Model Context Protocol）工具的加载逻辑，使其在后台异步加载，减少启动时对用户交互的阻塞。
    *   **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2356

2.  **PR #2355: 修复MCP启动失败后进程中止的问题** [OPEN]
    *   **作者**: @he-yufeng
    *   **内容**: 修复了后台MCP服务启动失败会导致整个交互回合中止的问题。现在会记录失败日志并继续使用其他可用MCP服务器。
    *   **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2355

3.  **PR #2354: 修复Windows上日志文件冲突问题** [OPEN]
    *   **作者**: @he-yufeng
    *   **内容**: 针对Windows平台的日志轮转Bug（#2348），将日志文件改为进程级隔离（如`kimi.<pid>.log`），避免多进程争抢同一日志文件。
    *   **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2354

4.  **PR #2158: 新增Ctrl+T切换思考内容可见性** [OPEN]
    *   **作者**: @MCMike0399
    *   **内容**: 实现了一个运行时快捷键 `Ctrl+T`，用于在交互界面中切换显示/隐藏模型的完整“思考内容”。该功能默认隐藏思考过程。
    *   **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2158

5.  **PR #2353: 修复Web端布局间距** [OPEN]
    *   **作者**: @anxndsgn
    *   **内容**: 优化了Web界面的布局，移除了应用级别的外层空白间距，同时保留了安全区域（Safe Area）的适配，并调整了侧边栏列表的间距和搜索框显示。
    *   **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2353

6.  **PR #2350: 容错处理非UTF-8编码的Worker输出** [OPEN]
    *   **作者**: @he-yefeng
    *   **内容**: 修复了Windows上子进程输出非UTF-8（如cp1252）字符时，导致Web会话运行器解码失败并隐藏真实错误的问题。
    *   **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2350

7.  **PR #2349: 支持项目级MCP配置与合并策略** [OPEN]
    *   **作者**: @asanisimov
    *   **内容**: 引入项目级别的MCP配置文件，并定义了与用户全局配置的合并/覆盖策略，增强了配置的灵活性和可复用性。
    *   **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2349

8.  **PR #2344: 为RTK工具新增默认Hook** [已关闭]
    *   **作者**: @BigOrangeQWQ
    *   **内容**: 为`RTK`（Rapid Tool Kit）工具集添加了默认的Hook配置文件示例。
    *   **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2344

#### 功能需求归类

从今日的Issue中，可以归纳出以下社区反复提及的功能需求方向：

*   **会话加载与历史共享**：用户希望Web端能实现增量加载以提升切换速度（#2357），并要求打破Shell模式与Agent模式间的隔离，实现命令历史共享（#2351）。
*   **Thinking模式交互优化**：社区对“思考模式”的便捷切换（#2352）和内容显示控制（#2158）有明确需求，希望通过快捷键或斜杠命令简化操作。
*   **Hook扩展性**：用户期望`SessionStart`等Hook功能能提供更强的反馈机制，例如将执行结果直接展示给用户（#2347）。
*   **稳定性与兼容性**：Windows平台的多进程日志冲突（#2348）和非UTF-8输出解码（#2350）问题正在被积极修复。

#### 开发者关注点

*   **Windows平台体验**：多个Issue和PR（#2348, #2350, #2354）都指向了Windows环境下的稳定性问题，显示出保持平台一致性的高优先级。两个有关Windows日志及编码的修复（#2354, #2350）均由外部贡献者提交，表明该问题是开发者的共同痛点。
*   **交互模式隔离**：Shell模式与Agent模式间的命令历史不互通（#2351），导致了工作效率的降低，开发者正在寻找更流畅的工作流，减少手动操作。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-05-24

## 今日更新概览

过去 24 小时内 OpenCode 仓库活跃度较高，无新版本发布，但社区围绕 **安全沙箱、语音输入、会话目标** 等方向展开了热烈讨论（共 50 条 Issue 更新，50 条 PR 更新）。最受关注的是沙箱 agent 限制（#2242，34 条评论）和语音输入功能请求（#4695，31 条评论），后者获得了 152 个 👍。PR 方面以 **LSP 超时修复、推理流式输出、工具输出截断控制** 等务实改进为主。

## 社区热点 Issues

（按评论数降序，选取 10 条值得关注的 Issue）

### 1. [#2242 如何对 agent 进行沙箱保护](https://github.com/anomalyco/opencode/issues/2242)
- **场景**：用户希望限制 agent 在终端中只能访问当前目录，防止越界操作文件。
- **反响**：34 条评论，46 👍。社区讨论了 macOS 上的 seatbelt 方案，但 OpenCode 缺乏等效机制。

### 2. [#4695 语音转文字输入功能请求](https://github.com/anomalyco/opencode/issues/4695)
- **场景**：用户要求内置 STT 语音输入，适合懒人或移动场景。
- **反响**：31 条评论，152 👍，是近 24 小时内热度最高的功能请求。

### 3. [#27167 原生会话目标（/goal）功能](https://github.com/anomalyco/opencode/issues/27167)
- **场景**：用户希望添加持久化的会话目标/生命周期管理，类似 /goal 的命令。
- **反响**：20 条评论，25 👍。与现有自定义斜杠命令互补。

### 4. [#3176 OpenCode 为何大量滥用 git？](https://github.com/anomalyco/opencode/issues/3176)
- **场景**：用户在 45GB/54K 文件目录下发现 OpenCode 不断执行 `git add .`，导致性能崩溃。
- **反响**：16 条评论，引用 Claude 的分析，指出会话快照机制存在设计缺陷。

### 5. [#11313 长命令输出截断导致 agent 重试死循环](https://github.com/anomalyco/opencode/issues/11313)
- **场景**：长时间运行的 bash 命令因为输出被截断/超时，agent 反复重试，破坏幂等性。
- **反响**：15 条评论，6 👍。用户请求轮询已保存的工具输出而非重试。

### 6. [#28732 Gemini 3.5 Flash 缺失 thought_signature 警告（已关闭）](https://github.com/anomalyco/opencode/issues/28732)
- **场景**：使用 google-vertex 提供者时，多次工具调用后出现缺失 thought_signature 警告。
- **反响**：15 条评论，1 👍。已关闭，但反映了 Vertex 兼容性问题。

### 7. [#12393 桌面版如何取消归档会话](https://github.com/anomalyco/opencode/issues/12393)
- **场景**：用户误操作将会话归档，找不到恢复入口。
- **反响**：11 条评论，16 👍。UI 易用性痛点，版本 v1.1.53。

### 8. [#14612 编辑工具篡改缩进（diff 中不显示）](https://github.com/anomalyco/opencode/issues/14612)
- **场景**：agent 使用编辑工具后，将所有 Tab 替换为两个 Tab，但 diff 仅显示预期修改。
- **反响**：10 条评论，1 👍。影响代码格式，与 oh-my-opencode 无关。

### 9. [#29051 V2 输入框隐藏模型推理选择器](https://github.com/anomalyco/opencode/issues/29051)
- **场景**：桌面 beta/dev 版 V2 prompt 无法切换模型的推理等级（如 GPT-5.5 变体）。
- **反响**：3 条评论（新发），对应 PR #29050 已提交修复。

### 10. [#29036 安全审查发现两个 HIGH 严重性漏洞](https://github.com/anomalyco/opencode/issues/29036)
- **场景**：自动化审查发现疑似硬编码凭据和 XSS 漏洞。
- **反响**：2 条评论（新发），涉及潜在安全风险。

## 重要 PR 进展

（选取 10 个关注度较高或影响用户实际使用的 PR）

### 1. [fix: 增加 JDTLS/KotlinLS 的 LSP 初始化超时](https://github.com/anomalyco/opencode/pull/25649)
- **内容**：将硬编码的 30 秒超时提高至 120 秒以上，避免 JVM 语言服务器在 Gradle 同步时中断。
- **价值**：解决 Issue #23982，提升 Java/Kotlin 项目开发体验。

### 2. [fix(llm): openaiCompatible reasoning_content 类型安全访问](https://github.com/anomalyco/opencode/pull/28950)
- **内容**：重构 `openAICompatibleReasoningContent` 函数，使用 `isRecord` 类型守卫避免运行时错误。
- **价值**：修复 Issue #28716，增强与兼容 OpenAI 推理内容模型的稳定性。

### 3. [feat(core): 允许禁用工具输出截断](https://github.com/anomalyco/opencode/pull/28907)
- **内容**：新增 `tool_output` 配置项，支持 `{ truncate: false }` 完全禁用截断，或自定义 `max_lines`/`max_bytes`。
- **价值**：直接解决 #11313 等长输出问题，提升 agent 可靠性。

### 4. [fix(tui): 分离思考头部与 Markdown 正文](https://github.com/anomalyco/opencode/pull/29028)
- **内容**：在 TUI 中将推理/思考的标题与展开后的 Markdown 内容分开渲染，保持样式一致性。
- **价值**：改善对话流可读性。

### 5. [chore: 升级 Amazon Bedrock provider](https://github.com/anomalyco/opencode/pull/29052)
- **内容**：将 `@ai-sdk/amazon-bedrock` 从 4.0.96 升级到 4.0.107，刷新锁文件。
- **价值**：保持依赖最新，修复底层问题。

### 6. [fix: 工作区创建失败时正确回滚](https://github.com/anomalyco/opencode/pull/29056)
- **内容**：当 `Workspace.create()` 在数据库记录插入后出错时，回滚记录及 git worktree，避免泄漏。
- **价值**：修复 Issue #29057，提升健壮性。

### 7. [fix: 限制重试次数为 5 次，防止无限循环](https://github.com/anomalyco/opencode/pull/29047)
- **内容**：当提供者持续失败时，重试次数上限为 5 次，之后触发后备模型。
- **价值**：防止 agent 卡住。

### 8. [fix: 空任务输出时触发后备](https://github.com/anomalyco/opencode/pull/29048)
- **内容**：当任务完成但无文本输出（如限流拒绝），返回描述性错误，触发后备模型。
- **价值**：提高多模型切换的稳定性。

### 9. [fix(app): 在 V2 prompt 中显示推理选择器](https://github.com/anomalyco/opencode/pull/29050)
- **内容**：修复桌面 beta 版中模型推理变体（如 GPT-5.5）无法切换的问题。
- **价值**：对应 Issue #29051，快速修复 UI 缺陷。

### 10. [fix(llm): 保留原生 provider 选项](https://github.com/anomalyco/opencode/pull/29025)
- **内容**：在请求降级过程中保留 OpenAI 兼容的 assistant 推理延续字段，覆盖 DeepSeek 等模型。
- **价值**：确保推理内容正确传递。

## 功能需求归类

从近 24 小时的 Issue 中可以归纳出以下持续涌现的用户诉求方向（非预测路线图）：

- **安全与沙箱**：如 #2242 请求限制 agent 文件访问，终端隔离成为高频需求。
- **语音输入**： #4695 获得极高热度，表明对非键盘交互方式的期待。
- **会话管理增强**： #27167（/goal）、#25582（fork 到新会话）、#29030（/effort 命令），用户希望更灵活地控制对话上下文。
- **模型控制 UI**： #29051（推理选择器不可见）、#24610（DeepSeek 禁用思考）、#29013（UI 切换推理模式），用户需要可见、可触达的模型变体切换界面。
- **编辑工具可靠性**： #14612（缩进破坏）、#18031（某些模型编辑工具乱码）、#21911（泛型被剥离），影响代码编辑质量。
- **性能与稳定性**： #11313（长命令截断）、#27924（无限压缩循环）、#29037（缓存管理设置）、#29033（Windows CJK 路径崩溃）。

## 开发者关注点

- **安全控制不足**：多个开发者反映 agent 在文件系统上的权限过高，缺乏细粒度沙箱。
- **语言服务器兼容性**：JDTLS / KotlinLS 超时问题长期存在，PR #25649 虽已提交但尚未合并，影响 Java/Kotlin 用户。
- **编辑工具“暗伤”**：缩进、泛型被静默篡改，且 diff 不暴露，开发者难以察觉。
- **模型调用行为不一致**：部分模型（如 minimax m2.5）调用编辑工具时插入乱码或错误行号前缀，开发者需要更多调试信息。
- **缓存管理不透明**：`~/.local/share/opencode/` 下的缓存文件缺少清理入口，占用磁盘且不易管理。
- **测试基础设施迁移**：多个 PR 贡献者（如 @kitlangton）正在将测试从 Promise 风格迁移到 Effect 框架的轻量级 DSL，表明项目内部测试质量持续改进。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

好的，这是为您生成的 2026-05-24 Qwen Code 社区动态日报。

---

# Qwen Code 社区动态日报 | 2026-05-24

## 今日更新概览
今日项目发布两个新版本，修复了构建系统和核心逻辑的多个问题。社区在 `qwen serve` 功能推进、内存泄漏/会话管理、扩展安装以及构建系统方面讨论活跃。共有 14 条更新中的 Issue 和 50 条更新中的 PR，开发活动密集。

## 版本发布

**v0.16.1 (正式版) & v0.16.1-nightly**
- **修复 (build):** 修复了旧构建产物导致 TypeScript 编译错误 (TS5055) 的问题，解决了 `npm run build` 可能失败的场景。（[PR #4453](https://github.com/QwenLM/qwen-code/pull/4453)）
- **修复 (core, cli):** 修复了在所有失败路径中，`tool_use` 与 `tool_result` 不匹配的问题，提高了工具调用的稳定性。（[PR 相关](https://github.com/QwenLM/qwen-code/pull/4404)）

## 社区热点 Issues

1.  **#4175 [Feature Request] Mode B `qwen serve` 功能优先级路线图**
    - **摘要:** 核心开发者定义了 `qwen serve`（Mode B）向 v0.16 生产就绪版本的目标与功能优先级，这是当前最受关注的功能方向，已获得 37 条评论。
    - **链接:** [https://github.com/QwenLM/qwen-code/issues/4175](https://github.com/QwenLM/qwen-code/issues/4175)

2.  **#4116 [Bug] 严重错误问题**
    - **摘要:** 用户报告了一个无法正常启动或使用 Qwen Code 的“严重错误”，语言环境疑似非英文，影响新用户开箱即用体验。
    - **链接:** [https://github.com/QwenLM/qwen-code/issues/4116](https://github.com/QwenLM/qwen-code/issues/4116)

3.  **#4185 [Bug] 长会话中内存溢出 (OOM)**
    - **摘要:** 多个用户报告在长会话、大上下文模型或大量文件读写后，V8 堆内存耗尽 (OOM)。这是一个影响深度使用场景的性能关键问题。
    - **链接:** [https://github.com/QwenLM/qwen-code/issues/4185](https://github.com/QwenLM/qwen-code/issues/4185)

4.  **#4452 [Bug] 无法安装 Microsoft Claude Code 插件**
    - **摘要:** 用户在尝试安装来自微软仓库的插件（如 deep-wiki）时失败，问题可能出在扩展的安装流程或处理上。
    - **链接:** [https://github.com/QwenLM/qwen-code/issues/4452](https://github.com/QwenLM/qwen-code/issues/4452)

5.  **#4421 [Feature Request] 本地问题诊断框架**
    - **摘要:** 为解决用户遇到 API 异常、响应为空等问题时难以提供有效排查信息的痛点，提议建立一个基于环形缓冲区、`/bug collect` 命令的本地诊断方案。
    - **链接:** [https://github.com/QwenLM/qwen-code/issues/4421](https://github.com/QwenLM/qwen-code/issues/4421)

6.  **#4447 [Bug] 构建失败 (TS5055)**
    - **摘要:** 由于旧构建产物 (`dist/`) 未被清理，导致 TypeScript 编译报错。该问题已在今日的 v0.16.1 版本中修复。
    - **链接:** [https://github.com/QwenLM/qwen-code/issues/4447](https://github.com/QwenLM/qwen-code/issues/4447)

7.  **#4471 [Bug] 任务卡住**
    - **摘要:** 用户在 TUI 中创建并行的修复任务后，任务列表显示工作正在进行中，但实际停止了更新。
    - **链接:** [https://github.com/QwenLM/qwen-code/issues/4471](https://github.com/QwenLM/qwen-code/issues/4471)

8.  **#4466 [Bug] `${VAR}` 环境变量在 `settings.json` 中未正确解析**
    - **摘要:** 用户在 MCP 服务器的配置中引用环境变量（如 `${GITHUB_TOKEN}`），但变量替换在加载 `.env` 文件之前执行，导致空值。
    - **链接:** [https://github.com/QwenLM/qwen-code/issues/4466](https://github.com/QwenLM/qwen-code/issues/4466)

9.  **#4448 [Feature Request] 优化对无效 `settings.json` 的处理**
    - **摘要:** 用户反馈当 `settings.json` 格式错误时，Qwen Code 会静默启动并跳过配置，用户无法直观感知到错误。
    - **链接:** [https://github.com/QwenLM/qwen-code/issues/4448](https://github.com/QwenLM/qwen-code/issues/4448)

10. **#4450 [Bug] `qwen --list-extensions` 命令无效**
    - **摘要:** 用户尝试在 CLI 模式下列出已安装的扩展，但 `--list-extensions` 参数似乎被忽略， CLI 照常启动 TUI。
    - **链接:** [https://github.com/QwenLM/qwen-code/issues/4450](https://github.com/QwenLM/qwen-code/issues/4450)

## 重要 PR 进展

1.  **#4461 [fix] 启动前在 stderr 输出警告信息**
    - **摘要:** 当 `settings.json` 无效时，会在 TUI 完全渲染前，将警告信息输出到标准错误流，解决了警告被新手指引流程覆盖的问题。
    - **链接:** [https://github.com/QwenLM/qwen-code/pull/4461](https://github.com/QwenLM/qwen-code/pull/4461)

2.  **#4377 [feat] 用户提示扩展钩子**
    - **摘要:** 新增一个钩子生命周期点，允许斜杠命令在被提交前进行“提示扩展”，提供了更灵活的命令处理方式。
    - **链接:** [https://github.com/QwenLM/qwen-code/pull/4377](https://github.com/QwenLM/qwen-code/pull/4377)

3.  **#4379 [feat] 添加飞书 (Lark) 渠道适配器**
    - **摘要:** 新增了对飞书消息平台的支持，包括 WebSocket/Webhook 通信、交互式卡片推送和消息上下文检索等功能。
    - **链接:** [https://github.com/QwenLM/qwen-code/pull/4379](https://github.com/QwenLM/qwen-code/pull/4379)

4.  **#4473 [docs] 记录 v0.16-alpha 的已知限制与环境变量回退**
    - **摘要:** 为 `qwen serve` 添加了 v0.16-alpha 版本的已知限制文档，并实现了 `QWEN_SERVER_TOKEN` 环境变量作为配置的备用方案。
    - **链接:** [https://github.com/QwenLM/qwen-code/pull/4473](https://github.com/QwenLM/qwen-code/pull/4473)

5.  **#4472 [feat] 实现 ACP Streamable HTTP 传输协议**
    - **摘要:** 在 `qwen serve` 上添加了基于 Agent Client Protocol 的 /acp 端点，与现有 REST/SSE API 并存，是通往标准协议集成的关键步骤。
    - **链接:** [https://github.com/QwenLM/qwen-code/pull/4472](https://github.com/QwenLM/qwen-code/pull/4472)

6.  **#4422 [feat] TUI 显示优化 — 紧凑模式与 Ctrl+O 历史记录**
    - **摘要:** 对 TUI 布局进行了大幅调整，默认采用紧凑、无边框的布局，并能通过 `Ctrl+O` 覆盖层查看历史记录，旨在提供更沉浸的交互体验。
    - **链接:** [https://github.com/QwenLM/qwen-code/pull/4422](https://github.com/QwenLM/qwen-code/pull/4422)

7.  **#4402 [feat] 流式工具调度 — 第一阶段和第二阶段**
    - **摘要:** 实施“流式驱动工具调度”的 RFC 提议，在 OpenAI 流中提前暴露“工具调用完成”信号，以实现更及时的调度（如快速取消）。
    - **链接:** [https://github.com/QwenLM/qwen-code/pull/4402](https://github.com/QwenLM/qwen-code/pull/4402)

8.  **#4394 [feat] 加载项目本地上下文文件**
    - **摘要:** 新增支持在项目根目录的 `.qwen/QWEN.local.md` 文件中存储开发者私有的、项目范围的上下文指令，允许在团队共享的 `QWEN.md` 之外进行个性化补充。
    - **链接:** [https://github.com/QwenLM/qwen-code/pull/4394](https://github.com/QwenLM/qwen-code/pull/4394)

9.  **#4470 [fix] 修复 TUI 文本缓冲区中的竞态条件**
    - **摘要:** 修复了当输入（如从 `tmux` 粘贴）速度过快时，字符丢失或顺序错乱的问题，提升了输入稳定性。
    - **链接:** [https://github.com/QwenLM/qwen-code/pull/4470](https://github.com/QwenLM/qwen-code/pull/4470)

10. **#4468 [feat] 添加 `memory-leak-debug` 调试技能**
    - **摘要:** 社区贡献了一个新的调试技能，提供了一套使用 Node.js 堆快照诊断内存泄漏的工作流程，直接回应了 Issue #4185 等内存问题。
    - **链接:** [https://github.com/QwenLM/qwen-code/pull/4468](https://github.com/QwenLM/qwen-code/pull/4468)

## 功能需求归类
- **内存与性能优化:** 多个 Issue (#4185) 和 PR (#4468) 关注长会话场景下的内存溢出问题，社区也开始贡献诊断工具。这是影响深度用户的普遍痛点。
- **`qwen serve` (Mode B) 生产就绪:** Issue #4175 定义了明确的路线图，PR #4472 (ACP协议) 和 #4473 (文档/配置) 正在推进，表明这是当前项目最重要的开发方向。
- **配置与扩展管理:** 关于 `settings.json` 处理 (#4448, #4466)、插件安装 (#4452) 和 CLI 扩展管理 (#4450) 的多个 Issue 表明，配置系统的健壮性和扩展管理功能是用户关注的焦点。
- **本地诊断与用户体验:** 用户难以有效报告问题 (#4421)，以及无效配置的静默启动 (#4448) 等问题，指向了对更友好、健壮的本地用户体验的需求。
- **第三方平台集成:** PR #4379 对飞书渠道的支持，以及 Issue #4452 对微软插件安装的需求，表明社区对更广泛的平台和生态集成抱有期望。

## 开发者关注点
- **构建问题修复:** 由于旧构建产物导致的构建失败是近期的痛点，v0.16.1 的发布对该问题进行了直接修复。
- **长会话稳定性:** 长会话、大上下文下的内存溢出 (OOM) 是开发者反馈中的高频性能瓶颈，社区已贡献诊断技能，但根本解决仍需后续优化。
- **CLI 与 TUI 的一致性:** 部分 CLI 参数（如 `--list-extensions`）无效、TUI 文本缓冲区的竞态等细节问题，影响了非交互式脚本操作和输入体验。
- **配置与安全:** `.env` 文件加载顺序导致的变量解析失败、无效配置文件静默处理等问题，影响了配置的可靠性和安全性，开发者对此要求明确和可预见的行为。

</details>