# AI CLI 工具社区动态日报 2026-05-29

> 生成时间: 2026-05-29 02:28 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## 横向对比

好的，作为一名专注于 AI 开发工具生态的资深技术分析师，我已详细审阅了 2026-05-29 各主流 AI CLI 工具的社区动态摘要。现为您生成一份基于今日数据的横向对比分析报告。

---

## 2026-05-29 AI CLI 工具横向对比分析

**报告日期:** 2026-05-29
**分析师:** 资深技术分析师

### 1. 今日横向概览

今日社区活动高度活跃且具有明确的聚焦点。**Claude Code** 因发布 Opus 4.8 和动态工作流，成为社区讨论的绝对焦点，但其引入的“思考块 (Thinking Block)”相关 API 400 错误也导致了严重的会话崩溃问题，团队已紧急发布修复版本。与此同时，**Kimi Code** 也因产品重构引发社区分裂争议，而 **Copilot CLI** 则报告了类似的“重复项目 ID” Bug，暗示了会话状态管理是多个工具的共同薄弱环节。在安全与企业级兼容性方面，**Gemini CLI** 报告了数据泄露和严重的 WSL2 OAuth 问题，**Copilot CLI** 则持续面临组织级 Token 权限问题。整体来看，今日社区动态呈现出“重大更新伴随严重 Bug”的风险循环。

### 2. 各工具活跃度对比

| 工具 | Issue 热点数¹ | PR 活跃数² | 版本发布 (今日/昨日) | 社区最热议题 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 6 | **3个** (v2.1.154, v2.1.156, 以及多个PR关闭/合并) | 思考块(Thinking Block) 400 错误导致会话崩溃 |
| **OpenAI Codex** | 10 | 10 | **2个** (v0.135.0, v0.136.0-alpha.1) | Windows 桌面端 Chrome 插件在新地区不可用 |
| **Gemini CLI** | 10 | 10 | **3个** (v0.45.0-preview.1, v0.45.0-nightly, v0.44.1) | WSL2 下 OAuth 登录中断，影响付费用户 |
| **GitHub Copilot CLI** | 10 | 0 | **3个** (v1.0.56-1, v1.0.56-0, v1.0.55) | 重复项目 ID 错误 (`fc_call_*`) 集中爆发 |
| **Kimi Code CLI** | 7 | 10 | 1个 (准备发布) | 社区分裂争议 (旧版 CLI vs 新版 Kimi Code) |
| **OpenCode** | 10 | 10 | **1个** (v1.15.12) | GPT 系列模型响应时间过长 |
| **Qwen Code** | 10 | 10 | **1个** (v0.16.1-nightly) | SSL 证书失效，阻断开发认证流程 |
| **备注** | ¹ 指日报中热点议题列表中的条目数 | ² 指日报中重要 PR 列表中的条目数 | 版本发布日期可能跨前一天 | - |

**小结：** 从版本迭代速度和数量看，**Claude Code**、**GitHub Copilot CLI** 和 **Gemini CLI** 迭代最为频繁，反映了对紧急问题的响应。从 Issue 和 PR 的绝对数量看，**OpenCode**、**Qwen Code** 和 **Gemini CLI** 的社区讨论和技术贡献非常活跃。

### 3. 共同出现的功能方向

以下需求在多个工具社区中 “同时” 出现，表明是当前行业普遍关注的痛点：

1.  **会话持久化与状态管理 (Claude Code, Copilot CLI)**
    - **现象**: Claude Code 出现“思考块”被修改导致的会话永久性崩溃；Copilot CLI 出现“重复项目 ID”错误，同样导致执行失败。
    - **分析**: 这两个问题都指向了 **会话状态（尤其是中间产物如思考块、工具调用结果）在序列化、反序列化和重放时的稳定性**。这是AI CLI工具从“简单问答”迈向“长任务代理”时必须跨越的核心技术门槛。

2.  **模型/API 变更导致的兼容性问题 (Claude Code, Copilot CLI, Kimi Code, Qwen Code)**
    - **现象**: Claude Code 因 Opus 4.8 的API 变更（思考块格式）导致崩溃；Copilot CLI 出现因无效请求 body 而导致的 400 错误；Kimi Code 因 API 返回空消息导致崩溃；Qwen Code 因本地模型超时导致失败。
    - **分析**: 无论是服务端模型更新（Claude、Copilot），还是客户端对 API 响应（Kimi、Qwen）的边界情况处理不足，都表明 **客户端与模型/API 之间的契约稳定性** 是当前生态脆弱的环节。一次微小的格式变化就可能大面积影响用户体验。

3.  **上下文窗口与成本管理 (Copilot CLI, Kimi Code, OpenCode)**
    - **现象**: Copilot CLI 用户抱怨系统工具占用 73% 上下文窗口；Kimi Code 用户遭遇 120k tokens 后请求超时；OpenCode 用户要求根据 DeepSeek 降价调整订阅计划。
    - **分析**: 用户对 **“有限的上下文窗口”** 和 **“模型使用成本”** 的感知非常强烈。这催生了对更精细上下文控制（如手动选择上下文大小、自动压缩策略）和更透明、响应上游变化的计费模型的需求。

4.  **跨 IDE 与终端的兼容性 (Gemini CLI, Qwen Code, Copilot CLI)**
    - **现象**: Gemini CLI 在 WSL2 和 RHEL 上出现 OAuth 和运行问题；Qwen Code 在 PyCharm 中 `Ctrl+C` 意外退出 Agent；Copilot CLI 在 Zed 中无法使用斜杠命令。
    - **分析**: 开发者使用的开发环境高度异构。**终端（如 WezTerm）、IDE（如 PyCharm、Rider）、操作系统（如 Windows、WSL2）的差异** 是导致用户体验割裂的持续顽疾。这些工具的适配工作需要长期投入。

### 4. 差异化定位分析

| 维度 | Claude Code | Copilot CLI | Gemini CLI | OpenCode | Qwen Code |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **模型策略** | 自研模型 (Opus) + 复杂工作流 | 多模型 (Auto, Claude Opus 4.8) + 会话模型持久化 | 自研模型 (Gemini 3.1 Pro) | 多提供商聚合 (GPT, DeepSeek, Qwen等) | 自研模型 (Qwen 系列) + 本地模型支持 |
| **工具定位** | **深度代理 (Deep Agent)** | **GitHub 生态核心** | **企业级 & 安全** | **开放平台 & 模型网关** | **模型验证 & 服务化** |
| **核心能力** | 动态工作流，后台子代理， `effort xhigh` | 代码审核 agent，GitHub MCP 服务器 | BYOID 认证，`codex doctor` 诊断 | 多提供商支持，ACP 协议，技能系统 | `qwen serve` daemon 模式，Web Shell |
| **任务场景** | 大型、复杂、需协同的编程任务 | 围绕 GitHub 的日常开发流 (Issue, PR, 审核) | 对安全合规性要求高的企业级开发 | 追求灵活性和模型选择多样性的开发者 | 模型集成和部署验证，云/Web 开发 |
| **主要痛点** | 新功能的稳定性（思考块错误） | 与 GitHub 的权限和状态同步问题 | 多平台兼容性，配额消耗 | 模型间性能不一致，UI 功能缺失 | SSL 证书，本地模型超时，IDE 集成 |
| **社区生态** | 核心代理功能强大，但功能更新带来的回退风险高 | 与 GitHub 深度绑定，对依赖 GitHub 生态的用户吸引力大 | 安全/合规特性突出，但对平台兼容性优化不足 | 插件/技能生态扩展性强，但平台本身复杂度高 | 服务化和本地部署是优势，但核心基础功能（如证书）待完善 |

### 5. 社区活跃度记录

- **最活跃（事件驱动）: Claude Code 与 Gemini CLI**
  - **原因**: 均因重大 Bug 或安全事件导致社区讨论爆发。Claude Code 的思考块 Bug 和新发布版本带来了大量 Issue 和 PR；Gemini CLI 的多个 P1 严重 Bug（数据泄露、WSL2 登录失败）驱动了社区高关注度。
- **最活跃（日常贡献）: OpenCode 与 Qwen Code**
  - **原因**: 它们在 Issue 和 PR 数量上均表现突出，但更多是围绕功能改进、兼容性修复和常规开发，而非单一重大事故。这种活跃度体现了健康、持续的社区贡献。
- **维护者响应最积极: Claude Code**
  - **原因**: 在 24 小时内连续发布两个版本直接应对社区报告的紧急 Bug，体现了非常主动和快速的维护者响应姿态。
- **社区氛围最复杂: Kimi Code**
  - **原因**: 社区争议不仅是关于技术问题，更是关于产品方向和版本策略（旧版 CLI vs 新 Kimi Code），这在所有工具中是唯一一例，反映了重大的社区信任挑战。

### 6. 有证据支撑的观察

1.  **“思考块”与“重复ID”问题：会话状态序列化是通用短板。**
    - **证据**: Claude Code (#10199, #63147, #63258) 和 Copilot CLI (#3558, #3559, #3560) 均报告了由状态重放或修改引发的不可恢复错误。这并非孤立事件，而是表明当前 AI CLI 在处理包含 Agent 思考和工具调用结果的复杂会话序列化时，普遍缺乏健壮性。

2.  **产品迭代速度与稳定性之间的张力加剧。**
    - **证据**: Claude Code 发布 Opus 4.8 的 v2.1.154 在 24 小时内就因严重 Bug 被 v2.1.156 紧急替代。Gemini CLI 同时解决多个 P1 严重 Bug (数据泄露: #22525, 安全: #27335)。这种现象表明，为快速推出创新功能（如动态工作流），各工具在测试和发布流程上可能存在压力，导致“上线即修”的风险常态化。

3.  **“模型中立”平台正面临更大的兼容性挑战。**
    - **证据**: OpenCode 用户报告 GPT 模型性能不稳定、DeepSeek 思考字段缺失、Qwen 系列模型 401 错误等多个模型兼容性问题。相比之下，使用自研模型的工具（如 Claude、Gemini）则在跟随模型更新时面临自身客户端逻辑的适配挑战。这表明，多模型支持虽能带来灵活性，但维护成本和出错概率也显著高于封闭生态。

4.  **IDE 与终端环境的适配成为准入门槛。**
    - **证据**: Qwen Code 同时面临 Rider 登录 (#4493)、PyCharm Ctrl+C 冲突 (#4586) 和 VSCode fetch 函数 (#4589) 三个不同 IDE 的独特问题。Gemini CLI 则受困于 WSL2 (#23865) 和 Windows (#27054) 等终端兼容性。对于开发者而言，一个问题如果能顺畅地集成到其“主战场”（即 IDE 和终端），其采用率会远高于功能强大但兼容性堪忧的工具。

5.  **对“付费即得”的权益和配额透明度要求更高。**
    - **证据**: Copilot CLI 用户抱怨组织级 Token 权限不可见 (#223)；Gemini CLI 用户反馈配额消耗过快 (#22634) 且订阅层级识别错误 (#19970)；OpenCode 用户要求根据上游降价调整订阅计划 (#28846)。这表明付费用户不再满足于“能用”，而是开始精准审计工具的 token 消耗逻辑、配额计算方式以及价格/权益对应关系，要求更高的透明度和公平性。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

好的，以下是为您生成的 2026-05-29 Claude Code 社区动态日报。

---

# 2026-05-29 Claude Code 社区动态日报

**今日焦点：** Anthropic 发布 Opus 4.8 及动态工作流重大更新，但“思考块（Thinking Block）”相关的 API 错误成为社区讨论的绝对热点，多个用户报告会话因此永久性中断。同时，v2.1.156 紧急发布以修复部分 Opus 4.8 问题。

---

## 1. 今日更新概览

Anthropic 在昨日发布 `v2.1.154` 版本，带来了期待已久的 **Opus 4.8** 模型与**动态工作流**（Dynamic Workflows）功能。然而，新版本上线后即出现严重问题：大量用户报告“Thinking blocks cannot be modified”的 **400 API 错误**，导致使用扩展思考（Extended Thinking）的会话永久性崩溃。团队已于今日快速迭代至 `v2.1.156`，专门修复了 Opus 4.8 中的此问题。社区服务中，**多行输入键位冲突**和**Windows 平台兼容性**是持续被提及的痛点。

## 2. 版本发布

两个版本在今日（或昨日）密集发布：

- **[v2.1.156](https://github.com/anthropics/claude-code/releases/tag/v2.1.156) (2026-05-29)**
    - **修复内容**：修复了使用 Opus 4.8 时，思考块（thinking blocks）被修改并导致 API 错误的问题。
    - **意义**：这是针对 `v2.1.154` 引入的 Opus 4.8 重大 bug 的紧急修复补丁，旨在解决社区最头疼的会话崩溃问题。

- **[v2.1.154](https://github.com/anthropics/claude-code/releases/tag/v2.1.154) (2026-05-28)**
    - **新功能**：
        - **Opus 4.8 模型**：现已作为默认模型，并支持 `/effort xhigh` 参数以应对最困难的任务。
        - **动态工作流（Dynamic Workflows）**：允许 Claude 自主创建工作流，并协调数十到数百个后台代理（agents）协同处理大型复杂任务。

## 3. 社区热点 Issues

过去24小时内，问题追踪器非常活跃。以下是最值得关注的10个议题：

1.  **[#10199] [BUG] API Error 400 - 思考块修改错误** (~92条评论)
    - **场景**：用户在使用 Opus 4.7/4.8 及扩展思考功能时，复现了 `thinking blocks cannot be modified` 的 400 错误。
    - **范围与影响**：这是目前社区最严重、讨论最热烈的问题。它导致任何涉及思考块的会话在特定操作（如恢复会话、工具调用）后永久性崩溃。
    - **链接**: https://github.com/anthropics/claude-code/issues/10199

2.  **[#63147] 恢复扩展思考会话永久失败** (~25条评论)
    - **场景**：使用扩展思考和工具调用后保存并恢复会话，会导致每次后续交互都返回 400 错误。
    - **范围与影响**：用户反馈该问题在 `v2.1.153` 时已存在，并提供了一个清晰的复现步骤（会话转录本将思考文本存为空字符串，但保留了签名）。
    - **链接**: https://github.com/anthropics/claude-code/issues/63147

3.  **[#49268] Opus 4.7 思考摘要缺失** (~37条评论)
    - **场景**：用户在切换到 Opus 4.7 后，发现扩展思考的摘要（summarized thinking）不再显示。
    - **范围与影响**：用户分析认为是客户端代码未正确设置 `display: "summarized"` 参数。这影响了思考过程的可读性，类似问题似乎也在 Opus 4.8 上重现。
    - **链接**: https://github.com/anthropics/claude-code/issues/49268

4.  **[#63463] v2.1.154 上思考块错误导致会话不可恢复** (~3条评论)
    - **场景**：在最新版 `v2.1.154` 上，用户报告 `thinking/redacted_thinking blocks cannot be modified` 错误会永久阻塞会话。
    - **范围与影响**：该 Issue 确认了 `v2.1.154` 并未修复此问题。尽管 `v2.1.156` 已发布，但此问题在当日报告时仍为开放状态。
    - **链接**: https://github.com/anthropics/claude-code/issues/63463

5.  **[#63258] Opus 4.8 后台任务崩溃** (~2条评论)
    - **场景**：在使用 Opus 4.8 的动态工作流时，后台子代理（subagents）在首次对话中立即崩溃。
    - **范围与影响**：报告指出，无论是后台代理还是 Bash 工具调用，在完成时都会触发“thinking blocks cannot be modified”的 400 错误，严重影响了动态工作流功能的可用性。
    - **链接**: https://github.com/anthropics/claude-code/issues/63258

6.  **[#62063] Pro 计划默认使用 1M 上下文导致问题** (~10条评论)
    - **场景**：Pro 计划用户启动新会话时，默认消耗 1M 上下文窗口，导致资源快速耗尽。
    - **范围与影响**：用户反馈虽有 Pro 计划，但缺乏手动控制上下文窗口大小的选项，导致成本控制和会话管理困难。
    - **链接**: https://github.com/anthropics/claude-code/issues/62063

7.  **[#50640] Windows 11 启动时段错误崩溃** (~6条评论)
    - **场景**：Windows 11 用户从 `v2.1.112` 开始，Claude Code 在启动时立即崩溃。
    - **范围与影响**：报告称 `v2.1.111` 可正常工作，后续版本出现 `Segmentation Fault`。这严重影响 Windows 生态下的开发者体验。
    - **链接**: https://github.com/anthropics/claude-code/issues/50640

8.  **[#63423] CLI 2.1.154 报错 422 "Invalid message role system"** (~5条评论)
    - **场景**：用户在更新到 `v2.1.154` 后，所有交互都返回 422 API 错误。
    - **范围与影响**：报告指出这是一个回归性错误，可能与新版本的消息格式变更有关，导致会话历史中的系统角色消息未被正确识别。
    - **链接**: https://github.com/anthropics/claude-code/issues/63423

9.  **[#62922] [增强] 多行输入应支持行内上下导航** (~4条评论)
    - **场景**：在编辑多行消息时，按上下箭头键会跳转到命令历史，而不是在行内移动光标。
    - **范围与影响**：这是对 TUI 体验的持续反馈。用户认为，能否在输入框内导航文本行是“代码质量基线”级别的功能缺失。
    - **链接**: https://github.com/anthropics/claude-code/issues/62922

10. **[#62970] Windows 11 上 Bash 命令无输出** (~3条评论)
    - **场景**：在 Windows 11 上使用 Bedrock API 的 Claude Code 执行 Bash 命令时，终端无任何输出。
    - **范围与影响**：该问题导致 Windows 用户完全无法使用基础的 Bash 工具功能。
    - **链接**: https://github.com/anthropics/claude-code/issues/62970

## 4. 重要 PR 进展

1.  **[#63467] [OPEN] 文档：增加 Windows 版 gh CLI 安装指南**
    - **内容**：为 `/commit-push-pr` 命令的故障排除部分添加了 Windows 下的 `winget` 安装命令。
    - **链接**: https://github.com/anthropics/claude-code/pull/63467

2.  **[#63460] [OPEN] 文档：更新 plugins/README.md 中已弃用的 npm 安装说明**
    - **内容**：将插件安装文档中旧的 `npm install -g` 指令更新为推荐的 `curl`/`irm` 方式，并添加弃用说明。
    - **链接**: https://github.com/anthropics/claude-code/pull/63460

3.  **[#63382] [OPEN] 修复 Hookify 测试示例的语义**
    - **内容**：修复了 Hookify 示例文档中关于测试命令 `not_contains` 的描述，使其与实际引擎的基于子字符串的行为一致。
    - **链接**: https://github.com/anthropics/claude-code/pull/63382

4.  **[#63262 / #63252] [CLOSED] 功能：添加侧边线程插件 (/thread 和 /back)**
    - **内容**：社区贡献者提交了一个新插件，允许用户在对话中创建类似 Slack 的侧边线程进行多轮讨论，并通过 `/back` 命令返回主对话。
    - **状态**：这两个 PR 已被关闭，可能已被合并或需要进一步讨论。
    - **链接**: https://github.com/anthropics/claude-code/pull/63262

5.  **[#63189] [OPEN] 让 /commit-push-pr 命令使用 PR 模板**
    - **内容**：改进了 `/commit-push-pr` 命令，使其能自动读取项目中的 `.github/PULL_REQUEST_TEMPLATE.md` 文件，从而根据模板生成 PR 正文。
    - **链接**: https://github.com/anthropics/claude-code/pull/63189

6.  **[#62941] [OPEN] 修复 ralph-wiggum 插件从转录本读取最后助手文本的问题**
    - **内容**：修复了 Ralph Wiggum（一种用于自动化测试的钩子工具）的一个 bug，该 bug 导致它无法正确解析会话转录本中多行助手消息。
    - **链接**: https://github.com/anthropics/claude-code/pull/62941

## 5. 功能需求归类

从今日的 Issues 中，可以观察到社区用户反复强调以下功能方向：

- **扩展思考（Extended Thinking）稳定性**：这是目前社区最核心的痛点。用户强烈需要 Anthropic 确保思考块的元数据（特别是签名）在会话保存、恢复和压缩后保持一致，避免因修改“思考”内容导致 API 错误。
- **TUI 交互体验优化**：多行输入框的键位冲突问题（如 `#62922`）被多次提及，用户希望上下方向键能用于行内导航，而非跳转到历史记录。这表明用户对终端 UI 的精细操作有较高期待。
- **Windows 平台支持**：`#50640`（启动崩溃）和 `#62970`（Bash 无输出）等 Issue 表明，Windows 平台上的兼容性问题依然突出，是阻碍 Windows 开发者使用的主要障碍。
- **MCP 协议兼容性**：关于 `tools/list_changed` 通知在特定模式下被忽略的反馈（`#62844`），表明社区希望 Claude Code 在各种运行模式下都能完整实现 MCP 规范。

## 6. 开发者关注点

- **痛之最深：会话持久性与恢复**：Opus 4.8 的发布本应是重大利好，但“思考块”相关的 400 错误（`#10199`、`#63147`、`#63258`）已严重动摇了用户对长时间运行任务和会话管理的信任。多位开发者表示，问题一旦出现，会话即“永久不可恢复”，必须重开。
- **对快速迭代的担忧**：虽然团队在24小时内发布了两次更新（`v2.1.156` 修复了部分问题），但社区仍有声音质疑新功能（如动态工作流）的发布测试不够充分，导致“上线即破”的情况。`#63423` 中的 422 错误也被认为是新版本的回归性错误。
- **平台偏见**：macOS 用户和 Linux 用户在核心功能上相对稳定，但 Windows 用户持续面临基础安装、运行和工具调用的问题，这种体验上的落差长期未得到解决。
- **上下文窗口管理需求**：`#62063` 和 `#63464` 显示，用户希望获得更精细的上下文控制权，例如在 Pro 计划下能选择不使用 1M 上下文，或当上下文超过100%时能正常触发自动压缩，而非直接报错。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

好的，以下是为您生成的 2026-05-29 OpenAI Codex 社区动态日报。

---

# OpenAI Codex 社区动态日报 — 2026-05-29

## 今日更新概览

昨日，Codex 发布了 0.135.0 稳定版及 0.136.0-alpha.1 测试版，新增了 `codex doctor` 诊断命令及远程连接状态显示。社区方面，50 个活跃 Issue 和 20 余个 Pull Request 更新显示，Windows 平台的插件兼容性与远程连接稳定性是目前反馈的热点。

## 版本发布

- **rust-v0.135.0 (稳定版)**
  - 发布链接: https://github.com/openai/codex/releases/tag/rust-v0.135.0
  - 主要更新:
    - `codex doctor` 命令现在可以输出更丰富的环境、Git、终端、App 服务器及线程清单诊断信息，用于支持案例排查。
    - 远程连接时，`/status` 命令可显示远程连接的详细信息及服务端版本。
    - Vim 模式相关更新（描述不完整，原数据截断）。

- **rust-v0.136.0-alpha.1 (内部测试版)**
  - 发布链接: https://github.com/openai/codex/releases/tag/rust-v0.136.0-alpha.1
  - 简要描述：发布 0.136.0 首个 Alpha 版本。

## 社区热点 Issues

1.  **#21598: Windows 桌面端 Chrome 插件在挪威/欧盟地区不可用**
    - 链接: https://github.com/openai/codex/issues/21598
    - 场景：Windows 用户已安装并连接 Chrome 扩展，但无法在 Codex Desktop 中使用 `@Chrome` 路由。
    - 社区反应：25 条评论，11 个赞。被标记为 bug，推测与区域灰度限制有关。

2.  **#22107: 上下文压缩因远程流断开而失败**
    - 链接: https://github.com/openai/codex/issues/22107
    - 场景：本地编码会话中，上下文压缩任务因“流在完成前断开连接”失败。
    - 社区反应：13 条评论，9 个赞。错误指向 `chatgpt.com/backend-api/codex/response` 请求失败。

3.  **#19909: 请求允许配置“Chats”项目目录**
    - 链接: https://github.com/openai/codex/issues/19909
    - 场景：`~/Documents/Codex` 默认目录与 iCloud Drive 同步，导致大量代码文件产生存储与同步问题。
    - 社区反应：12 条评论，16 个赞。用户强烈要求将 Chats 目录从 iCloud 同步路径移除或允许自定义。

4.  **#24373: Google Drive 表格插件可读取但无法写入**
    - 链接: https://github.com/openai/codex/issues/24373
    - 场景：Windows 桌面端，Google Drive 插件连接成功，但新增行操作 (`_batch_update_spreadsheet`) 因权限不足失败。重装插件无法解决。
    - 社区反应：12 条评论，社区反馈复现率高。

5.  **#24259: Windows 11 ARM64 沙箱间歇性启动失败**
    - 链接: https://github.com/openai/codex/issues/24259
    - 场景：使用 Codex CLI 和沙箱时，`spawn setup refresh` 命令间歇性失败，尽管 `codex doctor` 报告健康。
    - 社区反应：9 条评论，影响 ARM 架构的 Windows 用户。

6.  **#24006: macOS 更新后无法访问本地数据库导致启动失败**
    - 链接: https://github.com/openai/codex/issues/24006
    - 场景：macOS 用户更新 Codex App 后，应用无法启动，提示“无法访问其本地数据库”。
    - 社区反应：7 条评论，6 个赞，为严重阻断性问题。

7.  **#21791: Chrome 插件工具暴露不一致**
    - 链接: https://github.com/openai/codex/issues/21791
    - 场景：App 中可选中 `@chrome` 插件，但运行时模型报告该工具不可用，UI 与运行时状态不一致。
    - 社区反应：8 条评论，指出是 UI 与运行时状态不同步的 bug。

8.  **#20538: 桌面端偏好设置因并发写入冲突而无法保存**
    - 链接: https://github.com/openai/codex/issues/20538
    - 场景：用户连续修改设置时，由于 `configVersionConflict` 错误，偏好设置页面卡在“无法保存”状态。
    - 社区反应：6 条评论，17 个赞。影响广泛，尤其是在快速配置场景下。

9.  **#13165: 允许为 Codex CLI 指定 Shell (Windows)**
    - 链接: https://github.com/openai/codex/issues/13165
    - 场景：Windows 用户希望使用 MinGW Bash 而非默认的 PowerShell 运行沙箱命令。
    - 社区反应：5 条评论，21 个赞。为长期存在的功能请求，表明 Windows 用户对 Shell 配置有强烈刚需。

10. **#24969: Windows Store 版浏览器仅能访问内部 IAB**
    - 链接: https://github.com/openai/codex/issues/24969
    - 场景：Windows Store 版本的 Codex，浏览器功能只能访问内部 IAB，所有外部 URL 被企业网络策略拦截。
    - 社区反应：7 条评论，指出 Chrome 扩展后端的网络访问受限。

## 重要 PR 进展

1.  **#24992: 将技能路径引用迁移至执行服务器**
    - 链接: https://github.com/openai/codex/pull/24992
    - 内容：将环境/文件系统路径原始类型移到 exec-server 中，并通过 `EnvironmentPathRef` 统一技能加载和插件读取逻辑。

2.  **#24996: 使用市场白名单推荐插件**
    - 链接: https://github.com/openai/codex/pull/24996
    - 内容：用市场白名单替换硬编码的插件推荐列表，允许 `openai-curated` 和 `openai-bundled` 中的未安装、未禁用的插件进入推荐。

3.  **#24958: 为 exec-server 添加直接 WebSocket 连接令牌**
    - 链接: https://github.com/openai/codex/pull/24958
    - 内容：为 exec-server 添加可选的 `--connection-token` 参数，用于保护 WebSocket 直连，增强安全性。

4.  **#24972: 扩展图像生成路由至原生管线**
    - 链接: https://github.com/openai/codex/pull/24972
    - 内容：让 `image_gen` 扩展工具使用原生图像生成管线，实现制品持久化和 UI 完成，并将保存路径作为工具结果返回。

5.  **#24622: 将运行时配置切换到云配置包**
    - 链接: https://github.com/openai/codex/pull/24622
    - 内容：云管理配置客户端栈的第 5 个 PR，切换运行时配置加载为统一云配置包，并移除旧的 `codex-cloud-requirements` 运行时路径。

6.  **#16974: 修复 zsh Shell 快照中 PATH 变量的保存**
    - 链接: https://github.com/openai/codex/pull/16974
    - 内容：修复了 zsh `export -p` 输出解析问题，防止 `PATH`/`path` 同步变量在快照中被丢弃。已通过代码审查。

7.  **#24180: code-mode: 引入持久会话接口**
    - 链接: https://github.com/openai/codex/pull/24180
    - 内容：引入 `CodeModeSession` 接口，将代码模式单元格的生命周期、回调、终止等逻辑抽象化，为后续实现远程或持久化会话做准备。

8.  **#22668: 将托管的 MITM CA 证书信任注入子进程**
    - 链接: https://github.com/openai/codex/pull/22668
    - 内容：确保 Codex 作为 MITM 代理时，其生成的自签名 CA 证书能被子进程（如 HTTPS 客户端）信任。

9.  **#24994: 追踪已使用的 Codex 应用连接器**
    - 链接: https://github.com/openai/codex/pull/24994
    - 内容：为 Codex 应用的连接器使用情况增加追踪支持，记录在会话元数据中，以改进使用洞察。

10. **#24987: 隐藏后台 MCP 启动状态**
    - 链接: https://github.com/openai/codex/pull/24987
    - 内容：优化 TUI 体验，在 MCP 服务器初始化时不再在启动画面中展示繁琐状态，避免用户未主动调用 MCP 功能时遭遇视觉干扰。

## 功能需求归类

- **配置与个性化**：用户持续要求可配置性，包括指定 Chats 存储目录 (#19909)、自定义 Shell (#13165)、以及修复偏好设置并发写入的 bug (#20538)。
- **可靠性与稳定性**：上下文压缩、会话历史、进程快照是核心痛点。大量 Issue 指向远程连接断连、本地数据库损坏、以及并发写入冲突等问题。
- **自定义工作流与插件**：对 Google Drive、Chrome 等插件的权限与可用性问题反馈集中。同时，社区提出了 Rust SDK 支持 (#24824) 和结构化上下文持久化 (#24810) 的预研性需求。

## 开发者关注点

- **Windows 平台兼容性**：针对 Windows 的 Bug 报告占比最高，包括 Chrome 插件不可用、ARM64 沙箱失败、Shell 冲突等问题，已成为影响 Windows 用户体验的首要因素。
- **远程模式可靠性**：远程连接、远程压缩、远程任务等场景下的断连与错误是高频痛点，尤其是在切换网络或设备时。
- **安全检查与审计**：`codex doctor` 的更新表明官方正在加强问题诊断能力。另一方面，社区也反馈了 seccomp 沙箱规则 (`sendto` deny) 与 Python asyncio 冲突 (#24933)、自动审核使用硬编码模型名 (#24879) 等安全和兼容性问题。
- **插件生态**：Google Drive 的读写权限、Chrome 的可用性不一致是当前插件相关的两大核心问题，影响了生产力工作流。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

好的，这是为您生成的 2026-05-29 Gemini CLI 社区动态日报。

---

# Gemini CLI 社区动态日报 — 2026-05-29

## 今日更新概览
今日社区活跃度较高，共发布 3 个版本（包括 1 个补丁版本和 1 个夜间构建版本），处理了超过 50 条 Issues 和 PR。安全修复与性能优化是今日更迭的主基调，针对 WSL2、RHEL 等特定环境的兼容性问题得到了集中修复。

## 版本发布
- **v0.45.0-preview.1**: 针对预览版 v0.45.0-preview.0 的补丁版本。
    - 修复内容: 从 `release/v0.45.0-preview.0-pr-27496` 分支 cherry-pick 了一个补丁。
    - [查看完整更新日志](https://github.com/google-gemini/gemini-cli/compare/v0.45.0-preview.0...v0.45.0-preview.1)
- **v0.45.0-nightly.20260528.g5cac7c10f**: 最新的夜间构建版本。
    - **新贡献者**: @MukundaKatta 首次贡献。
    - 修复内容: 修复了 CLI 忽略未映射的 Vim 普通模式按键的问题。
    - [查看完整更新日志](https://github.com/google-gemini/gemini-cli/compare/v0.44.0...v0.44.1)
- **v0.44.1**: 针对 v0.44.0 的补丁版本。
    - 修复内容: 从 `release/v0.44.0-pr-27496` 分支 cherry-pick 了补丁（但存在合并冲突）。
    - [查看完整更新日志](https://github.com/google-gemini/gemini-cli/compare/v0.44.0...v0.44.1)

## 社区热点 Issues
1.  **#20017: [OAuth认证失败] 自定义MCP OAuth服务器路径不匹配**
    - 问题场景: 用户尝试使用自定义 MCP 服务器的 OAuth 进行认证时，CLI 因保护资源标识符与 URL 路径不匹配而阻止认证通过。
    - 社区反应: 已关闭，待获取更多信息。
    - [链接](https://github.com/google-gemini/gemini-cli/issues/20017)

2.  **#23865: [严重] WSL2 下 OAuth 登录中断，Paid Pro 用户无法使用**
    - 问题场景: 用户在 WSL2 (Ubuntu) 环境下使用 CLI 时遇到 OAuth 登录完全失效的问题，严重影响付费 Pro 用户的正常使用。
    - 社区反应: 官方标签为 P1 优先级和“严重”标签，说明这是一个高优问题。
    - [链接](https://github.com/google-gemini/gemini-cli/issues/23865)

3.  **#22634: [企业版] v3 Flash 模型配额消耗过快**
    - 问题场景: 付费用户反馈 Gemini 在执行单一任务时会消耗大量请求次数，导致每日配额（1500次/天）耗尽速度远超预期。
    - 社区反应: 多位用户对此表示认同（4个👍），这表明配额计算机制可能存在争议。
    - [链接](https://github.com/google-gemini/gemini-cli/issues/22634)

4.  **#24222: [企业版] AI Pro 计划用户无法使用 Gemini 3.1 Pro 预览版**
    - 问题场景: 用户虽拥有AI Pro计划，但在尝试使用 `gemini-3.1-pro-preview` 模型时被拒绝，疑似遭遇“影子封禁”。
    - 社区反应: 关注度较高（7个👍），官方 P1 优先级处理。
    - [链接](https://github.com/google-gemini/gemini-cli/issues/24222)

5.  **#23762: [Agent] Gemini 3.1 Pro 模型持续重试，无法使用**
    - 问题场景: 用户尝试使用Gemini 3.1 Pro模型时，CLI陷入无限重试循环，导致无法正常完成任务。
    - 社区反应: 已标记为可能存在重复问题。
    - [链接](https://github.com/google-gemini/gemini-cli/issues/23762)

6.  **#22525: [安全] CLI 输出其他用户的中文对话内容**
    - 问题场景: 用户反馈在使用过程中，CLI突然输出了一段显然来自其他用户、语言为波兰语的对话内容。
    - 社区反应: 此问题涉及数据泄露，被标记为 P1 优先级的严重安全 Bug。
    - [链接](https://github.com/google-gemini/gemini-cli/issues/22525)

7.  **#23627: [Agent] Agent 思考超 30 分钟，无任何进展**
    - 问题场景: Agent 模式在处理任务时，仅读取一个 README.md 文件就耗费了超过 30 分钟，且无任何输出。
    - 社区反应: P1 优先级，表明CLI在复杂任务场景下的响应和稳定性有待提升。
    - [链接](https://github.com/google-gemini/gemini-cli/issues/23627)

8.  **#23738: [核心] CLI 无视 API 配额重置时间，导致无限重试和进程崩溃**
    - 问题场景: 在 Windows 上运行时，CLI 在触发速率限制后，完全忽略 API 返回的“重置时间”指令，导致无限循环请求，最终因 `node-pty` 终端分配失败而崩溃。
    - 社区反应: 这是一个严重的核心错误，同时触发了速率限制处理和终端兼容性两个问题。
    - [链接](https://github.com/google-gemini/gemini-cli/issues/23738)

9.  **#23643: [核心] CLI 在 YOLO 模式下频繁崩溃，文件 I/O 工具不可靠**
    - 问题场景: 用户在 Windows 11 上使用 YOLO 模式处理 .js 文件时，CLI 频繁崩溃，文件读写工具不稳定。
    - 社区反应: 多个 P1 Bug 指向了CLI在处理文件操作和特定模式下的稳定性问题。
    - [链接](https://github.com/google-gemini/gemini-cli/issues/23643)

10. **#19970: [企业版] OAuth 流程强制使用消费者订阅，覆盖企业订阅 IP 保障**
    - 问题场景: 当用户拥有个人 Google One AI Pro 和企业 Gemini Code Assist 双重订阅时，CLI 的 OAuth 流程会错误地使用个人订阅，导致用户失去企业订阅的知识产权保护。
    - 社区反应: 这是一个影响企业客户订阅权益的关键问题。
    - [链接](https://github.com/google-gemini/gemini-cli/issues/19970)

## 重要 PR 进展
- **#27545: [实验性功能] 添加 BYOID 认证框架**
    - 内容: 新增“BYOID (Bring Your Own IDentifier)”认证功能的实验性标志和相关基础代码。该功能尚处于早期探索阶段。
    - [链接](https://github.com/google-gemini/gemini-cli/pull/27545)

- **#27354: [修复] WSL 上绕过 node-pty 运行 Windows 可执行文件**
    - 内容: 修复了在WSL中运行 `.exe` 文件时，因与 `node-pty` 的互操作问题导致的故障。实现自动降级到 Node `child_process` 的机制。
    - [链接](https://github.com/google-gemini/gemini-cli/pull/27354)

- **#27348: [修复] 阻止因畸形 Schema 导致的 CLI 崩溃**
    - 内容: 在 `write_file` 和 `replace` 工具中，当大模型返回不符合预期的参数形状时，会导致 `undefined` 类型错误而崩溃。此 PR 通过包装校验函数来防止此类崩溃。
    - [链接](https://github.com/google-gemini/gemini-cli/pull/27348)

- **#27349: [修复] 剔除模型思考过程中的非英语（CJK）字符**
    - 内容: 修复了模型在英语场景下，思考过程中可能混入中文、日文或韩文（CJK）字符的问题。
    - [链接](https://github.com/google-gemini/gemini-cli/pull/27349)

- **#27335: [修复] 阻止 web-fetch 工具中的 SSRF 攻击**
    - 内容: 修复了 `web-fetch` 工具在处理 HTTP 重定向时可能发生 SSRF（服务端请求伪造）攻击的安全漏洞。初始URL的SSRF检查不会应用于重定向后的目标URL。
    - [链接](https://github.com/google-gemini/gemini-cli/pull/27335)

- **#27341: [修复] 剥离 tool call 中的 `id` 字段，修复 400 错误**
    - 内容: 修复了工具调用后，因内部 `id` 字段被发送至 Gemini API 而导致的 “Unknown name 'id'” 400 错误。该字段仅用于 IDE 渲染，不应包含在 API 请求中。
    - [链接](https://github.com/google-gemini/gemini-cli/pull/27341)

- **#26088: [增强] 为审批模式增加 F10 快捷键**
    - 内容: 为解决 Windows/WezTerm 终端下 `Shift+Tab` 按键序列解析错误的问题，增加 F10 作为切换审批模式的备用快捷键。
    - [链接](https://github.com/google-gemini/gemini-cli/pull/26088)

- **#27028: [性能] 将 `/chat` 命令加载时间从 25 秒降至 634 毫秒**
    - 内容: 通过优化 `chatRecordingService` 和减少数据加载瓶颈，使 `/chat` 命令在大会话历史（59个会话，2.3GB数据）下的加载速度提升了数十倍。
    - [链接](https://github.com/google-gemini/gemini-cli/pull/27028)

- **#27054: [增强] 支持 Windows 终端图片粘贴**
    - 内容: 实现了在 Windows Terminal 下从剪贴板粘贴图片的功能，并引入了清晰的粘贴图片 UI。
    - [链接](https://github.com/google-gemini/gemini-cli/pull/27054)

- **#27047: [修复] 修复 AfterAgent Hook 中 prompt_response 内容不一致**
    - 内容: 修复了 `AfterAgent` 钩子中，`prompt_response` 字段可能包含重复或损坏文本的问题。现在它将正确匹配实际流式输出给用户的文本内容。
    - [链接](https://github.com/google-gemini/gemini-cli/pull/27047)

## 功能需求归类
- **新模型与配额管理**: 大量 Issue (#24222, #20032, #23762, #20102) 围绕新模型（Gemini 3.1 Pro Preview）的访问权限、配额消耗过快和稳定性展开。用户对模型访问的透明度和配额的公平性有很强的诉求。
- **安全与合规**: 存在多个严重安全相关的反馈，包括数据泄露（#22525）、OAuth 订阅优先级混乱（#19970）、以及 SSRF 漏洞修复（#27335）。这表明安全审计和权限校验是当前的薄弱环节。
- **企业环境兼容性**: WSL2 (#23865) 和 RHEL (#27056) 等企业级开发环境的兼容性问题依然突出。这些环境下的 OAuth 登录、终端模拟器交互和工具执行都需要针对性优化。
- **认证与授权**: 关于 OAuth 流程的多个 Bug（#20017, #23865, #19970）表明，无论是与第三方 MCP 服务器集成，还是在企业环境中处理订阅优先级，认证机制都亟待完善。

## 开发者关注点
- **稳定性与崩溃**: CLI 在处理 Agent 模式（#23627）、YOLO 模式（#23643）以及大规模数据（#23738）时存在高频崩溃和无响应问题。开发者对工具在长时间任务和复杂项目中的可靠性有很高的要求。
- **终端兼容性**: 开发者对在非标准终端（如 WSL、Windows Terminal、WezTerm）下的使用体验和快捷键支持（#26088, #27054）非常关注。社区为此贡献了多项针对特定终端的补丁。
- **透明性与控制权**: 用户希望获得更多控制权，例如自定义快捷键、动态切换 Agent 人格（#23657）、以及更清晰的事件日志。明确的状态反馈和对CLI内部行为的控制是提升开发者信任的关键。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-05-29

## 今日更新概览

今日发布三个补丁版本，重点改进了模型选择持久化、代码审核 agent 模型同步、以及 MCP 服务器的工具冗余问题。社区问题活跃度较高，共产生 48 条更新，其中“重复项目 ID”错误（`fc_call_*`）成为今日集中反馈的新 bug，影响多个工作流的正常运行。此外，权限、上下文窗口、MCP 服务器管理等长期议题持续收到用户关注。

## 版本发布

### v1.0.56-1
- **改进**：代码审核 agent 现在使用当前会话的模型，而非固定默认模型；当 `gh` CLI 在 PATH 中时，GitHub MCP 服务器默认省略可被 `gh` 替代的工具，减少 token 消耗。
- **修复**：粘贴文本后光标位置保持正确。

### v1.0.56-0
- **改进**：信任文件夹确认消息现在明确提示权限可能在会话期间被记住。
- **修复**：上下文窗口层级选择现在能在会话事件中持久保存，并支持 SDK-only 恢复路径，确保层级相关的限制重新应用于请求、压缩和截断。

### v1.0.55（2026-05-28 发布，今日仍被引用）
- **限制**：免费和学生计划用户（基于 token 计费）只能使用 Auto 模型选择，模型选择器中会显示说明。
- **新增**：在会话使用摘要中报告 Claude 思考（推理）token；支持 Claude Opus 4.8。
- **修复**：加载 spinner 不再无限挂起。

## 社区热点 Issues（10 条）

1. **#223 [OPEN] “Copilot Requests” 权限对组织级 token 不可见**
   企业环境要求使用组织级 token，但“Copilot Requests”权限在创建组织 token 时不显示，导致无法使用。社区呼声高（👍 73）。
   https://github.com/github/copilot-cli/issues/223

2. **#1274 [OPEN] CLI 持续收到 400 错误（invalid request body）**
   过去几小时中约 95% 的代码审核 diff 请求返回 400 错误，怀疑是服务端验证问题或 CLI 构造了无效请求。影响广泛。
   https://github.com/github/copilot-cli/issues/1274

3. **#1044 [OPEN] 在 `copilot --acp` 中支持斜杠命令**
   非交互式模式（ACP）缺少 `available_commands_update` 事件，导致 Zed 等编辑器无法使用斜杠命令。
   https://github.com/github/copilot-cli/issues/1044

4. **#3558 [OPEN] 重复项目 ID（Duplicate item）错误**
   多个用户报告在处理过程中出现 `fc_call_*` 重复 ID 错误，会话状态重放可能导致该问题。今日集中爆发。
   https://github.com/github/copilot-cli/issues/3558

5. **#3559 [OPEN] 频繁 websocket_error: 重复项目 ID（会话状态重放）**
   详细描述类似 #3558 的错误，怀疑是 session-state 重放导致。
   https://github.com/github/copilot-cli/issues/3559

6. **#3560 [OPEN] 执行失败：CAPIError 400 重复项目 ID**
   用户反馈白天正常，傍晚突然出现错误，普通聊天正常，仅在工具调用后失败。
   https://github.com/github/copilot-cli/issues/3560

7. **#3042 [OPEN] “ask” 权限决策不抑制原生信任提示，导致双重确认**
   PreToolUse 钩子返回 `permissionDecision: "ask"` 时，会先显示钩子自定义对话框，然后弹出原生信任提示，需要两次确认。
   https://github.com/github/copilot-cli/issues/3042

8. **#3539 [OPEN] 系统/工具占用 73% 上下文窗口（146k/200k），首次消息即触发自动压缩**
   配置多个 MCP 服务器和插件后，System/Tools 部分消耗 146k token，留给用户空间极小，新会话立即触发压缩。
   https://github.com/github/copilot-cli/issues/3539

9. **#3339 [OPEN] 以 / 开头的引号字符串被误判为路径**
   CLI 的路径访问扫描器将 shell 参数中碰巧以 `/` 开头的字符串（如 `/some/flag`）视为读写路径，导致误报。
   https://github.com/github/copilot-cli/issues/3339

10. **#3566 [OPEN] 在 /statusline 中暴露会话名称和 ID**
     用户同时运行多个 `copilot` 会话时，无法从状态栏区分各会话，请求增加会话标识。
     https://github.com/github/copilot-cli/issues/3566

## 重要 PR 进展

今日无新 PR 合并或更新。

## 功能需求归类

从近期 Issues 中提炼出以下高频功能方向（非路线图预测）：

- **MCP 服务器管理增强**：支持通过命令行或配置自动启用 `/mcp enable github-mcp-server`（#3548），以及从 `show` 菜单中临时启用/禁用 MCP 服务器（#3564）。
- **会话可见性提升**：在状态栏显示会话名称和 ID（#3566），方便多终端管理。
- **上下文窗口灵活配置**：用户要求允许为 Claude Opus 4.6 等模型开放更大的上下文（如 1M tokens），而不是固定 200K（#3355）；同时抱怨系统工具占用过多 token（#3539）。
- **安全与权限优化**：组织级 token 支持“Copilot Requests”权限（#223）；企业要求限制 VS Code 扩展绕过私有 MCP 注册中心安装 MCP 服务器（#3207）。
- **非交互式模式（ACP）增强**：支持斜杠命令（#1044），使其与交互式模式功能对齐。
- **自动化安全审查**：请求新增 `/security-review` 命令，对标 Claude Code 等竞品（#1133）。

## 开发者关注点

- **“重复项目 ID”错误成为今日最大痛点**：至少三个独立 Issue（#3558、#3559、#3560）报告同类问题，发生在工具调用后或会话状态重放时，严重影响正常使用。用户期望团队尽快定位并修复。
- **上下文窗口消耗过高**：配置多个 MCP/插件后，系统工具占用 >70% 上下文，导致会话一开始就被压缩，影响对话质量和模型表现。
- **权限提示双重确认**：钩子权限与原生信任提示重叠，增加用户操作成本，降低自动化流程效率。
- **路径误判问题**：对 shell 参数中的 `/` 字符串误判为文件路径，在需要传递路径参数的脚本中产生频繁的误报拦截。
- **启动延迟**：自 v1.0.52 起，`COPILOT_CUSTOM_INSTRUCTIONS_DIRS` 如果指向大目录（如 `$HOME`），会因递归 glob 导致 15–30 秒的 TUI 冻结（#3543）。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

好的，这是为您准备的 2026-05-29 Kimi Code CLI 社区动态日报。

---

# Kimi Code CLI 社区动态日报 | 2026-05-29

## 今日更新概览

今日社区活跃度较高，共产生 8 条议题更新和 14 条拉取请求更新。核心焦点集中在两个层面：一是用户对旧版 `kimi-cli` 被重构为新版 `Kimi Code` 表达了强烈不满和困惑（#2381）；二是多个关于上下文压缩崩溃（#2396）、ACP 协议兼容性（#2394, #2127）、文件搜索死循环（#2385）等严重 Bug 的修复进展迅速，相关PR已被提交。此外，修复终端退出挂起（#1985）和历史对话回放（#2132）的两个重要PR也已合并，项目稳定性得到提升。

## 社区热点 Issues

1.  **Kimi CLI 分裂社区争议**
    - **议题**: #2381
    - **摘要**: 用户对 MoonshotAI 放弃 `kimi-cli` 转而开发 `Kimi Code` 表示强烈不满，认为此举分裂了社区，且新工具功能与旧版不一致，动摇了对产品长期性的信任。
    - **链接**: https://github.com/MoonshotAI/kimi-cli/issues/2381

2.  **`kimi export` 上下文压缩导致崩溃**
    - **议题**: #2396
    - **摘要**: 执行 `kimi export` 命令时，如果会话触发上下文压缩（context compaction），压缩消息中包含空内容，会导致 Moonshot API 返回 400 错误，进程崩溃。该问题影响所有使用 `export` 功能的用户。
    - **链接**: https://github.com/MoonshotAI/kimi-cli/issues/2396

3.  **ACP 服务未暴露 Token 用量给客户端**
    - **议题**: #2394
    - **摘要**: 当以 ACP 服务器模式（`kimi acp`）运行时，尽管内部已计算 Token 用量，但未通过 ACP 协议标准字段透传给连接的客户端（如自定义编辑器或编排工具），阻碍了高级用量监控场景。
    - **链接**: https://github.com/MoonshotAI/kimi-cli/issues/2394

4.  **无法递归加载嵌套 Skill 目录**
    - **议题**: #1894
    - **摘要**: Kimi CLI 不支持递归加载如 `.agents/skills/{name}/skills/xxx` 的嵌套 skill 结构，而 Codex 兼容此结构。这导致复用现有 skill 仓库时功能失效，限制了 skill 的组织能力。
    - **链接**: https://github.com/MoonshotAI/kimi-cli/issues/1894

5.  **在 Zed 中搜索文件陷入死循环**
    - **议题**: #2385
    - **摘要**: 用户报告在 Zed 编辑器中使用 Kimi ACP 服务进行文件搜索时，进程会陷入无限循环，导致编辑器无响应，严重影响日常开发工作流。
    - **链接**: https://github.com/MoonshotAI/kimi-cli/issues/2385

6.  **大上下文请求频繁 ConnectTimeout**
    - **议题**: #2384
    - **摘要**: 当对话上下文达到约 120k tokens 后，每次请求频繁出现连接超时。根本原因是 `httpx` 库的连接超时时间不可配置，而大上下文请求的初始响应时间较长，导致请求失败。
    - **链接**: https://github.com/MoonshotAI/kimi-cli/issues/2384

7.  **ACP 协议会话管理方法未实现**
    - **议题**: #2127 (已关闭)
    - **摘要**: ACP 协议中的 `session/list`、`session/get` 等方法未实现，导致 Zed 等编辑器无法查询和恢复历史会话，用户每次关闭重新打开后都需从头开始对话。
    - **链接**: https://github.com/MoonshotAI/kimi-cli/issues/2127

8.  **终端退出时挂起与 MCP 连接泄漏**
    - **议题**: #1984 (已关闭)
    - **摘要**: 长时间会话后执行 `/exit` 命令，终端会挂起且无响应，同时系统防火墙会报告来自已终止进程的孤立 MCP 连接。该问题影响日常退出流程的顺畅性。
    - **链接**: https://github.com/MoonshotAI/kimi-cli/issues/1984

## 重要 PR 进展

1.  **修复上下文压缩崩溃 (PR #2395)**
    - **内容**: 修复了 `kimi export` 时由于上下文压缩路径未过滤空文本内容而触发的 API 400 错误。这是对 #1663 PR 同类问题的补充修复。
    - **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2395

2.  **准备发布 v1.46.0 (PR #2391)**
    - **内容**: 提交了将 `kimi-cli` 版本号提升至 1.46.0 的变更，并同步更新了 kimi-code 包装器版本和依赖项。
    - **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2391

3.  **修复 ACP 服务 MCP 配置加载 (PR #2047)**
    - **内容**: 修复了 `kimi acp` 模式下未加载 `~/.kimi/mcp.json` 中用户自定义 MCP 服务器的问题，确保 Zed 等编辑器使用 ACP 模式时也能访问自定义 MCP 工具。
    - **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2047

4.  **修复 ACP 历史会话回放 (PR #2132)**
    - **内容**: 之前未实现的 `session/list` 和 `session/load` 功能通过此 PR 修复。它确保了 `kimi acp` 运行时能持久化、加载和回放历史会话，解决了 Zed 等客户端无法恢复对话历史的长期问题。
    - **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2132

5.  **修复终端退出挂起 (PR #1985)**
    - **内容**: 通过将读取操作改为非阻塞模式，解决了终端退出时因竞争条件导致的挂起问题，并在关闭过程中正确清理了所有 MCP 连接。
    - **链接**: https://github.com/MoonshotAI/kimi-cli/pull/1985

6.  **修复历史回放中的孤立 Tool Calls (PR #2383)**
    - **内容**: 修复了会话在中间轮次被意外杀死后，重新加载历史时会因 `context.jsonl` 中存在无对应 `tool_call` 的 `assistant` 消息而崩溃的问题。
    - **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2383

7.  **支持将非标准图片格式转为 PNG (PR #2382)**
    - **内容**: 修复了 `ReadMediaFile` 工具无法处理 `.ico` 等非标准图片格式的问题。现在这些格式会被自动转换为 API 支持的 `image/png` 格式。
    - **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2382

8.  **修正 `/undo` 时上下文截断逻辑 (PR #2386)**
    - **内容**: 修复了使用本地斜杠命令（如 `/undo`）的轮次，其上下文截断索引与 wire 日志索引不匹配的问题，确保撤销操作能正确工作。
    - **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2386

9.  **保留 Shell 命令头部详情 (PR #2387)**
    - **内容**: 修复了长时间 Shell 命令在头部被截断的问题，确保终端能显示完整命令，提升调试和回顾体验。
    - **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2387

10. **粘贴文本占位符持久化修复 (PR #2388)**
    - **内容**: 修复了粘贴的长文本被折叠成占位符后，在对话历史回顾中丢失原始文本内容的问题，确保跨会话的粘贴内容可读。
    - **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2388

## 功能需求归类

- **IDE 集成与 ACP 协议完善**: 社区持续要求完善 ACP 协议实现，包括暴露 Token 用量（#2394）、支持会话管理（#2127, #2132）等，以提升与 Zed 等编辑器的协作体验。
- **性能与稳定性**: 大上下文下的连接超时问题（#2384）和 `export` 操作的崩溃（#2396）是当前最突出的稳定性痛点，用户希望增加超时配置和修复边界情况。
- **平台兼容性与功能缺失**: 对嵌套 Skill 目录的支持（#1894）和对非标准图片格式的支持（#2382）反映出用户对工具灵活性和广泛兼容性的需求。
- **社区沟通与产品策略**: #2381 议题揭示用户对产品方向变更（从 `kimi-cli` 到 `Kimi Code`）的强烈困惑，这属于产品策略层面的沟通需求，而非技术功能。

## 开发者关注点

1.  **社区分裂与信任危机**: 开发者最强烈的情绪并非某个具体 Bug，而是对项目被“另起炉灶”的困惑和不满。这表明产品维护者需要更好的社区沟通机制来解释 `Kimi Code` 与 `kimi-cli` 的关系和未来规划。
2.  **稳定性是关键**: 上下文压缩崩溃（#2396）和连接超时（#2384）等 Bug 直接导致工作流中断，是开发者最优先希望被解决的痛点。即使新功能持续增加，核心稳定性的优先级不容忽视。
3.  **ACP 功能缺失是核心阻碍**: ACP 协议 `session/list`、`session/get` 等方法的持久缺失（终于通过 #2132 修复），以及在客户端无法看到 Token 用量，是 Zed 用户的核心痛点和功能短板。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

好的，这是 2026-05-29 的 OpenCode 社区动态日报。

---

# OpenCode 社区动态日报 | 2026-05-29

## 今日更新概览

今日 OpenCode 发布了 v1.15.12 版本，主要改进了 ACP 集成和实验性 WebSocket 支持。社区讨论热度集中在 GPT 模型响应时长异常、DeepSeek V4 系列模型集成问题以及 V2 UI 交互控件的功能缺失上。此外，多项针对工具权限、快照和粘贴行为的修复 PR 已进入审核阶段。

## 版本发布

### v1.15.12

**核心改进**
- **ACP 集成增强：** ACP 集成现在可以通过 `acp-next` 发送 prompts、slash commands 和 usage updates。
- **实验性 WebSocket：** 在支持的渠道上，为 OpenAI responses 新增了 WebSocket 传输支持（需设置 `OPENCODE_EXPERIMENTAL_WEBSOCKETS=true`）。

**Bugfixes**
- 修复了 Anthropic 模型的自适应推理控制（adaptive reasoning controls）问题。

## 社区热点 Issues

1.  **GPT Models takes too long to respond** ([#29079](https://github.com/anomalyco/opencode/issues/29079))
    - **影响场景：** 用户在使用 GPT 系列模型（如 GPT-5.4）时，简单的指令（如更新 graphify）响应时间从几秒到几分钟不等，波动极大。
    - **社区反应：** 该问题是当前社区讨论热度最高的问题，获得104条评论和48个赞，说明大量用户深受其困扰。

2.  **[FEATURE]: Adjust Go usage limits after DeepSeek V4 Pro permanent 75% price reduction** ([#28846](https://github.com/anomalyco/opencode/issues/28846))
    - **用户诉求：** 用户要求 OpenCode 根据 DeepSeek V4 Pro API 的永久性降价，相应调整 Go 订阅计划的用量限制。
    - **问题范围：** 旨在推动订阅计划与上游模型定价保持同步，惠及 Go 订阅用户。

3.  **Error: 4 of 5 requests failed: config.providers: Unexpected server error.** ([#27530](https://github.com/anomalyco/opencode/issues/27530))
    - **影响场景：** 用户启动 OpenCode 可执行文件时，因服务器端错误导致配置获取失败，应用无法启动。
    - **社区反应：** 该问题持续半个月，19条评论表明该阻塞性问题影响范围较广。

4.  **[FEATURE]: Official - OpenCode VS Code extension** ([#11176](https://github.com/anomalyco/opencode/issues/11176))
    - **功能需求：** 用户呼吁推出官方的 VS Code 扩展，以便原生集成到开发环境中。
    - **社区反应：** 作为长期置顶的功能请求，获得91个赞，是社区中呼声最高的需求之一。

5.  **reasoning_content is missing when using DeepSeek V4 Flash in thinking** ([#29618](https://github.com/anomalyco/opencode/issues/29618))
    - **影响场景：** 通过 OpenRouter 使用 DeepSeek V4 Flash/Pro 的“思考”模式时，Agent 因缺少 `reasoning_content` 字段而运行失败。
    - **问题范围：** 特定于 OpenRouter 提供商与 DeepSeek V4 模型“思考”功能的兼容性问题。

6.  **Conversation permanently stuck after 'vision is not enabled' error from GitHub Copilot provider** ([#29571](https://github.com/anomalyco/opencode/issues/29571))
    - **影响场景：** 当组织禁用 GitHub Copilot 的视觉功能后，任何包含图片的对话都会永久卡死，无法继续。
    - **问题范围：** 针对 GitHub Copilot 提供商的企业级配置兼容性 bug。

7.  **Qwen 3.5 Plus quota problem on Go subscription** ([#23722](https://github.com/anomalyco/opencode/issues/23722))
    - **影响场景：** Go 订阅用户在调用 Qwen 3.5 Plus 模型时频繁遇到“超出配额”错误，但模型实际可以工作。
    - **问题范围：** 连续重试导致的体验问题，可能涉及 OpenCode 的 quota 检查逻辑或与阿里云 API 的交互。

8.  **qwen3.7-max returns 401 unsupported_value for response_format.type via oa-compat** ([#29754](https://github.com/anomalyco/opencode/issues/29754))
    - **影响场景：** 通过 OpenCode Go 的 `oa-compat` 端点使用 qwen3.7-max 模型时，返回 `response_format.type` 的 401 错误，导致模型不可用。
    - **问题范围：** 与特定模型（qwen3.7-max）通过兼容层 API 调用的兼容性问题。

9.  **Azure AI Foundry partner deployments (DeepSeek/Kimi/Llama) capped at 4096 output tokens** ([#29776](https://github.com/anomalyco/opencode/issues/29776))
    - **影响场景：** Azure 提供商将第三方模型（如 DeepSeek-V4-Pro）的部署路由到 OpenAI Responses API，导致输出 token 被限制在 4096。
    - **问题范围：** Azure AI Foundry 上非 OpenAI 原生模型的集成限制。

10. **Desktop V2 UI hides prompt controls and status popover** ([#28686](https://github.com/anomalyco/opencode/issues/28686))
    - **影响场景：** 在 Desktop V2 UI 中，Agent 选择器、模型变体/思考强度选择器等控件消失，状态弹窗也只能通过旧路径访问。
    - **社区反应：** 获得4个赞，显示部分用户期待 V2 UI 能保留必要的交互功能。

## 重要 PR 进展

1.  **fix(session): skip persisting empty text parts** ([#29815](https://github.com/anomalyco/opencode/pull/29815))
    - **功能/修复：** 修复了当模型直接发出工具调用（无文本内容）时，数据库中会写入空文本部分，导致 UI 显示空白消息的问题。

2.  **feat(TUI): Add inline $skill invocations** ([#29217](https://github.com/anomalyco/opencode/pull/29217))
    - **功能/修复：** 在 TUI 的提示输入器中新增内联 `$skill` 调用支持，用户可输入 `$` 自动补全并执行技能。

3.  **feat(tui): sort skills alphabetically when all are shown** ([#29814](https://github.com/anomalyco/opencode/pull/29814))
    - **功能/修复：** 改进了 `/skills` 命令的输出，将所有技能列表改为按字母顺序排序，方便查找。

4.  **feat(desktop-app): add menu item to open config file** ([#29812](https://github.com/anomalyco/opencode/pull/29812))
    - **功能/修复：** 为桌面应用添加了“打开配置文件”的菜单项和可配置快捷键，方便用户快速修改配置。

5.  **fix(opencode): enforce read deny rules in glob and grep results** ([#29755](https://github.com/anomalyco/opencode/pull/29755))
    - **功能/修复：** 修复了 `opencode.jsonc` 中 `**/.env*` 等全局读取拒绝规则失效的问题，涉及通配符匹配、路径转换等三个 bug。

6.  **fix(tui): prevent prompt corruption when pasting near wide characters** ([#29710](https://github.com/anomalyco/opencode/pull/29710))
    - **功能/修复：** 修复了在宽字符附近粘贴文本时，提示符内容会损坏的问题。

7.  **fix(opencode): resolve snapshots from git subdirectories** ([#29705](https://github.com/anomalyco/opencode/pull/29705) - 已关闭)
    - **功能/修复：** 修复了在一个 Git 子目录中启动 OpenCode 时，快照功能无法正确解析路径的问题。

8.  **fix(task): subagent explicit edit:allow overrides parent edit:deny** ([#27654](https://github.com/anomalyco/opencode/pull/27654))
    - **功能/修复：** 修复了子 Agent 无法通过显式的 `edit: allow` 权限覆盖父 Agent 的 `edit: deny` 规则，导致编辑权限管理失效的问题。

9.  **[contributor] fix(tui): animate pending inline tools** ([#29805](https://github.com/anomalyco/opencode/pull/29805))
    - **功能/修复：** 为正在等待的内联工具添加了动画加载指示器（spinner），以改善等待过程中的用户体验。

10. **fix(desktop): bump @lydell/node-pty to 1.2.0-beta.12** ([#29803](https://github.com/anomalyco/opencode/pull/29803) - 已关闭)
    - **功能/修复：** 升级了 `node-pty` 依赖包，以修复 Windows 桌面版终端侧滑反复崩溃和 stderr 刷屏的问题。

## 功能需求归类

从今日的 Issues 中可以归类出以下用户反复提及的功能方向：

- **IDE 集成与桌面体验：**
    - **VS Code 扩展：** 请求推出官方 VS Code 扩展的用户呼声极高（#11176）。
    - **V2 UI 交互优化：** 桌面版 V2 UI 隐藏了模型选择、状态查看等关键控件，影响核心使用流程（#29051, #28686）。
    - **内置浏览器功能：** 用户希望在桌面版中集成浏览器，以方便检查前端页面（#26772）。

- **性能与兼容性：**
    - **模型响应性能：** GPT 模型响应时间过长是当前首要性能痛点（#29079）。
    - **模型兼容性：** 集成 DeepSeek V4 (#29618, #29776) 和 Qwen (#29754, #23722) 等新模型时，存在各种 API 和配置层面的兼容性问题。

- **新模型与 API 支持：**
    - **定价调整：** 用户期望 OpenCode 的订阅计划能及时反映上游模型（如 DeepSeek V4 Pro）的价格变化（#28846）。
    - **Azure 深度集成：** Azure 上的第三方模型（如 DeepSeek）存在输出 token 限制，影响了大模型复杂任务的执行（#29776）。

- **本地与云服务集成：**
    - **原生调度能力：** 用户希望无需依赖系统 crontab，直接在 OpenCode 内实现任务的定时执行（#11232）。
    - **插件/技能/Agent 市场：** 用户呼吁建立统一的扩展市场，以便于发现和分享社区贡献的技能、插件和 Agent（#28696）。

## 开发者关注点

- **模型响应不稳定是首要痛点：** GPT 模型响应时长波动巨大（#29079）获得最多讨论和点赞，是当前影响用户工作效率的核心问题。
- **权限模型配置复杂：** 用户反馈技能的显示权限（#29727）和继承权限（#27654）未能按预期工作，表明当前的权限规则理解和配置存在难度。
- **文件安全担忧：** 用户报告 LLM 偶尔会意外删除或覆盖整个文件（#29764），表明对 Agent 安全性和自主权限制的需求依然强烈。
- **登录和计费问题：** 部分用户遇到登录失败（#29787）和付费后计费页面显示异常（#29790）的问题，影响了基础的付费用户体验。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

好的，作为专注于 AI 开发工具的技术分析师，以下是根据您提供的 GitHub 数据生成的 2026-05-29 Qwen Code 社区动态日报。

---

# Qwen Code 社区动态日报 | 2026-05-29

## 今日更新概览

今日社区活跃度较高，共更新 23 条 Issue 和 50 条 PR。最值得关注的是，社区报告了 **coder.qwen.ai 网站 SSL 证书失效** 的紧急 Bug，以及 **本地模型调用 5 分钟后超时** 的共性问题。同时，项目发布了最新的 Nightly 版本，开发者正集中精力推进 Daemon 模式的路由记录、遥测追踪和 MCP 热加载等功能的开发。

## 版本发布

### v0.16.1-nightly.20260529.7bed56b9b

该版本为最新的 Nightly 版本，主要修复了以下问题：
- **CLI 启动警告修复**：修复了在 TUI 渲染前，启动警告未能正确输出到标准错误流 (`stderr`) 的问题。
- **遥测修复**：修复了遥测相关的一个问题。

此外，还提交了一份 **TUI 间距密度 PR (tui-spacing-density-pr1-evidence)** 的终端效果证据，展示了界面优化成果。

链接: https://github.com/QwenLM/qwen-code/releases/tag/v0.16.1-nightly.20260529.7bed56b9b

## 社区热点 Issues

### 1. `coder.qwen.ai` SSL 证书失效，严重阻碍开发
- **现象**：用户报告访问 `https://coder.qwen.ai` 时，浏览器提示 `ERR_CERT_AUTHORITY_INVALID`，且通过网页登录后陷入无限重定向，无法调用阿里云 Token 计划。
- **影响**：影响通过网页进行认证和模型调用的所有用户，被标记为 `[URGENT]`。
- **链接**：
  - [#4612: [URGENT] SSL Cert Invalid on coder.qwen.ai - Blocking Active Development](https://github.com/QwenLM/qwen-code/issues/4612)
  - [#4611: [SSL] ERR_CERT_AUTHORITY_INVALID on coder.qwen.ai](https://github.com/QwenLM/qwen-code/issues/4611)

### 2. Rider IDE 用户无法登录 Qwen Code
- **现象**：在 JetBrains Rider 中使用 Qwen Code 时，点击登录后会跳转到已登录的网页，但网页会持续重定向，无法完成 OAuth 验证和 Token 绑定。
- **影响**：影响了 Rider IDE 用户群体的正常使用和模型调用。
- **链接**: [#4493: rider无法登录qwen code](https://github.com/QwenLM/qwen-code/issues/4493)

### 3. 本地模型调用 5 分钟后出现 Body Timeout Error
- **现象**：通过 Qwen Code 调用本地部署的 LLM（如 Ollama、LM Studio）时，请求总在 300 秒（5分钟）后失败，报错 `terminated (cause: Body Timeout Error)`。
- **影响**：影响所有使用本地大模型的开发者和长任务场景。
- **链接**: [#4604: API Error: terminated (cause: Body Timeout Error)](https://github.com/QwenLM/qwen-code/issues/4604)

### 4. 内存泄漏问题：长时间会话内存持续增长
- **问题**：开发者报告，在长达数十小时的会话后，UI History 数据无限增长且缺乏边界，导致进程内存占用持续攀升且无法释放，被标记为 P1 优先级。
- **链接**: [#2128: Memory grows unboundedly during long sessions](https://github.com/QwenLM/qwen-code/issues/2128)

### 5. `/clear` 命令设计问题：切换会话 ID 导致日志丢失
- **问题**：当前的 `/clear` 命令在实现上创建了一个新会话而非清空当前会话，导致用户无法通过会话 ID 回溯调试日志，破坏了会话管理的基础功能。
- **链接**: [#4593: `/clear` should not switch to a new session ID](https://github.com/QwenLM/qwen-code/issues/4593)

### 6. PyCharm 终端中使用 Ctrl+C 意外退出 Agent
- **问题**：在 PyCharm 终端中使用 Qwen CLI 时，按下 `Ctrl+C` 复制文本容易意外退出 Agent 模式，这与此前需要按两次才退出的行为不同，同时 `ESC` 键也无法中断当前对话。
- **链接**: [#4586: qwen cli 升级后，在pycharm 终端中使用qwen cli 容易因为按ctrl +c导致意外退出agent](https://github.com/QwenLM/qwen-code/issues/4586)

### 7. TUI 界面启动文字冗余
- **问题**：用户反馈 Auto Mode 启动时显示的文本中包含 emoji 图标和冗余描述，建议删除 emoji 并简化文案，让界面更简洁。
- **链接**: [#4584: Auto mode startup text: remove emoji and simplify copy](https://github.com/QwenLM/qwen-code/issues/4584)

### 8. VSCode IDE 中 fetch 函数未定义的问题
- **问题**：用户在 VSCode 中安装 Qwen Code 后，由于依赖包 `undici` 的路径或版本问题，导致 `fetchFn` 变量解析错误，出现 `fetchFN issue`。
- **链接**: [#4589: vscode ide fetchFN issue](https://github.com/QwenLM/qwen-code/issues/4589)

### 9. 增强 `/stats` 命令以支持跨会话统计
- **需求**：开发者期望能像 Claude Code 一样，通过增强的 `/stats` 命令支持持久化的跨会话用量统计和全屏仪表盘，目前仅支持单会话统计且退出后数据丢失。
- **链接**: [#4597: feat(stats): 增强stats能力，支持跨session的全局用量统计](https://github.com/QwenLM/qwen-code/issues/4597)

### 10. Daemon/ACP 路径遥测不完善
- **问题**：在 `qwen serve` 的 Daemon/ACP 模式下，会话追踪（如交互、工具调用）存在缺失，没有完整记录 `interaction`, `tool`, `session.id` 等关键 Span，导致链路追踪能力在服务端路径下不完整。
- **链接**: [#4602: feat(telemetry): align daemon/ACP session tracing with CLI path](https://github.com/QwenLM/qwen-code/issues/4602)

## 重要 PR 进展

### 1. 修复本地模型 Body Timeout Error
- **内容**：此 PR 修复了调用无代理 (no-proxy) 的本地 LLM 时，`undici` 库默认 300 秒 body timeout 的问题。
- **链接**: [#4605: fix(core): disable undici 300s bodyTimeout for no-proxy Node.js path](https://github.com/QwenLM/qwen-code/pull/4605)

### 2. `/model` 命令改为会话级作用域
- **内容**：修复了 `/model` 命令切换模型时会全局修改配置的 Bug。现在 `/model` 命令仅影响当前会话，如需持久化设置需使用 `/model --default`。
- **链接**: [#4332: fix(cli): keep /model switches session-scoped](https://github.com/QwenLM/qwen-code/pull/4332)

### 3. 为 Daemon 模式添加请求级日志
- **内容**：为 `qwen serve` 模式添加了 Access Log 中间件和业务上下文日志，方便排查服务端的请求问题。
- **链接**: [#4606: feat(daemon): add request-level logging for serve routes](https://github.com/QwenLM/qwen-code/pull/4606)

### 4. 修复设置 JSON 文件损坏问题
- **内容**：当用户 `settings.json` 文件损坏时，CLI 会静默加载备份设置。此 PR 增加了自动恢复和警告对话框，提升健壮性。
- **链接**: [#4560: feat(cli): Add settings JSON corrupted warning dialog](https://github.com/QwenLM/qwen-code/pull/4560)

### 5. 为 Daemon/ACP 路径补充遥测数据
- **内容**：为 Daemon/ACP 的 Tool 调用和 Session 管理增加了必要的遥测 Span（如 `session.id`、`tool.execution`），完善了服务端的可观测性。
- **链接**: [#4608: feat(telemetry): add tool spans and session.id to daemon/ACP path](https://github.com/QwenLM/qwen-code/pull/4608)

### 6. 添加运行中 MCP 服务热插拔能力
- **内容**：为 Daemon 模式添加了 HTTP 接口，支持在运行时动态添加或替换 MCP 服务器，无需重启 Daemon 进程。
- **链接**: [#4552: feat(serve): runtime MCP server add/remove (T2.8 #4514)](https://github.com/QwenLM/qwen-code/pull/4552)

### 7. 支持 Web Shell 中的 `/delete` 命令
- **内容**：为 Web Shell 增加了 `/delete` 命令，支持批量删除会话数据，并新增了后端对应的批量删除 API。
- **链接**: [#4603: feat(web-shell): add /delete command with batch delete support](https://github.com/QwenLM/qwen-code/pull/4603)

### 8. 提交 TUI 间距密度优化证据
- **内容**：通过 VHS 和 tmux 录制的终端证据，展示了针对 TUI 界面排版的优化效果，旨在让界面显示更紧凑、易读。
- **链接**: [tui-spacing-density-pr1-evidence](https://github.com/QwenLM/qwen-code/releases/tag/v0.16.1-nightly.20260529.7bed56b9b)

### 9. 区分自动审批模式的 UI 指示
- **内容**：为 CLI 中的自动审批模式增加了视觉区分，将“Auto-accept edits”和“Classifier auto mode”用不同颜色（黄色 vs 蓝色）区分，防止用户混淆。
- **链接**: [#4600: fix(ui): distinguish auto approval mode indicators](https://github.com/QwenLM/qwen-code/pull/4600)

### 10. 优化大模型工具输出截断
- **内容**：当工具输出过长时，现在会进行合理截断，并将完整输出保存至临时文件，避免撑爆会话上下文。同时避免重复截断已处理过的输出。
- **链接**: [#4520: [type/bug] fix(core): truncate model-facing tool output](https://github.com/QwenLM/qwen-code/pull/4520)

## 功能需求归类

### 生产化与稳定性 (Daemon/Serve)
- **服务端模式功能优先路线图**：一个开启已久的 Issue (#4175) 仍在讨论 `qwen serve`（Mode B）到 v0.16 生产就绪的详细路线图，显示了社区对服务化部署的强烈需求。
- **API 指数退避与降级重试**：社区对 API 调用的可靠性提出更高要求，希望实现指数退避、模型降级等策略，而非简单的重试计数。
- **热重载系统**：用户希望技能、扩展、MCP 和配置变更能在不重启会话的情况下生效。

### IDE 与终端使用体验
- **JetBrains IDE 兼容性**：Rider 登录问题 (#4493) 再次暴露了 JetBrains 全家桶的兼容性挑战。
- **终端交互改进**：Ctrl+C 意外退出 (#4586) 和 ESC 无法中断对话，是终端用户提出的关键交互痛点。
- **TUI 优化**：用户明确提出了让 TUI 更紧凑、更易读、更有品牌特色的需求，例如删减启动文本、优化间距等。

### 会话管理与持久化
- **跨会话统计**：用户希望 `/stats` 命令能用于跨会话的全局用量追踪，对标 Claude Code。
- **历史管理与压缩**：用户希望将当前的“保留尾部”压缩方式，替换为类似 Claude Code 的“总结+恢复附件”模式，以更好地管理长上下文。

## 开发者关注点

1. **SSL 证书问题阻断开发**：`coder.qwen.ai` 的 SSL 证书失效是今日最紧急的事件，直接导致了用户无法登录和使用核心功能。
2. **本地模型兼容性痛点**：“Body Timeout Error” 是一个本地模型用户的高发问题，需要官方调整默认超时配置或提供更好的指导。
3. **IDE 集成不完善**：JetBrains 和 VSCode 的集成问题（如登录、通信）仍是社区反馈的高频区域，开发者期望在主流 IDE 中获得无缝体验。
4. **生产化路径的成熟度**：关于 `qwen serve` 的路线图讨论和遥测补充 PR，表明有用户正在尝试将其用于生产环境，并对服务的可观测性和稳定性有更高期待。

</details>