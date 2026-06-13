# OpenClaw 生态日报 2026-06-13

> Issues: 500 | PRs: 486 | 覆盖项目: 4 个 | 生成时间: 2026-06-13 02:35 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

好的，遵照您的指示。以下是为 OpenClaw 项目生成的 2026-06-13 项目动态日报。

---

## OpenClaw 项目动态日报 — 2026-06-13

### 1. 今日活动概览

过去24小时内，OpenClaw 项目社区十分活跃，共产生 500 条 Issue 更新（其中 409 条为新开或活跃状态）和 486 条 PR 更新（其中 142 条已被合并或关闭）。项目发布了两个新版本，均专注于收紧多个核心功能模块的安全边界。社区讨论热情高涨，涌现出多个高热度 Issue，主要集中在代理消息泄漏、控制UI安全限制以及严重的内存泄漏等问题。

### 2. 版本发布

项目在今日发布了两个版本：正式版 `v2026.6.6` 和 Beta 测试版 `v2026.6.6-beta.2`。两个版本的亮点内容完全一致，表明维护者正在通过 Beta 版本对即将到来的稳定版本进行最终验证。

- **更新亮点**: 本次更新显著收紧了多个模块的安全边界，覆盖了 transcripts、sandbox binds、host environment inheritance、MCP stdio、Codex HTTP access、native search policy、elevated sender checks、deleted-agent ACP bypasses、loopback tools、Discord moderation 以及 Teams group actions 等领域。`exec` 命令的执行安全策略也得到了强化。
- **破坏性变更**: 发布说明中未明确提及破坏性变更，但由于安全边界的大幅收紧，依赖于旧有行为或配置的用户（特别是涉及上述领域）可能需要关注配置变化。
- **迁移注意事项**: 暂无明确的迁移指南，但建议用户检查与上述安全边界相关的自定义配置，确保在新版本下正常运行。

### 3. 项目进展

今日成功合并/关闭了 142 个 PR，涉及功能修复、测试增强和文档更新等多个方面。以下为部分关键 PR：

- **修复内存搜索 CJK 文本问题**: `fix(memory-core): CJK textScore=0 and empty MATCH LIKE fallback` (#92341) 解决了中文、日文等CJK语言在混合搜索中因分词器问题导致 `textScore: 0` 的 Bug。
- **修复网关停止时未清除预热状态**: `fix(gateway): clear provider auth prewarm on stop` (#92493) 修复了网关停止时，提供商身份验证预热的清理问题。
- **修复工作板删除工具缺失**: `feat(workboard): add workboard_delete tool and CLI command for card removal` (#92319) 为插件 `workboard` 新增了删除卡片功能。
- **修复混合搜索中关键词结果丢失**: `fix(memory): preserve keyword-only results in hybrid search when chunk IDs don't overlap` (#92357) 解决了当关键词和向量搜索结果不重叠时，关键词结果被丢弃的问题。
- **修复飞书频道事件引发网关重启**: `fix(feishu): ignore bot_p2p_chat_entered_v1 events to prevent gateway restarts` (#92348) 解决了飞书频道收到特定事件时可能导致网关重启的问题。
- **修复 `exec-approvals` YOLO 模式**: `fix(exec-approvals): allow YOLO fast path when socket token exists` (#92335) 修复了在特定条件下，`exec-approvals` 的 YOLO 模式未能正确进入快速路径的问题。

### 4. 社区热点

- **#25592 [Text between tool calls leaks to messaging channels]**: 该 Issue 获得 **32 条评论**，是目前讨论最热烈的。用户反馈当代理在工具调用之间产生文本（如错误处理信息）时，这些文本会被错误地路由到消息频道（如 Slack）中，造成严重的用户体验问题。这揭示了代理工作流程与消息传递机制之间的一个关键设计缺陷。
  [Issue链接](https://github.com/openclaw/openclaw/issues/25592)
- **#9443 [Prebuilt Android APK releases]**: 拥有 **25 条评论**，用户持续要求官方提供预构建的 Android APK 文件，以便直接在移动设备上运行 OpenClaw 的 Android 配套应用。这反映了社区对移动端体验的强烈需求。
  [Issue链接](https://github.com/openclaw/openclaw/issues/9443)
- **#91588 [Critical: Gateway Memory Leak]**: 标题为 `[P0]` 级别，引发 **9 条评论**。用户报告网关进程存在严重的内存泄漏，RSS 占用在数天内从 350MB 增长至 15.5GB，最终导致进程被 OOM killer 杀死。该问题严重影响了系统的稳定性和可用性。
  [Issue链接](https://github.com/openclaw/openclaw/issues/91588)

### 5. Bug 与稳定性

今日提交的 Bug 数量众多，以下为按严重程度排列的关键问题：

- **P0 (Critical)**:
    - **#91588**: **网关内存泄漏**，RSS 持续增长至 15GB+，导致反复 OOM 崩溃，是当前最严重的稳定性问题。尚未看到关联的 fix PR。
      [Issue链接](https://github.com/openclaw/openclaw/issues/91588)
- **P1 (High)**:
    - **#25592**: **工具调用间文本泄漏**到消息频道，属于严重的信息披露和 UX 问题。尚未看到关联的 fix PR。
      [Issue链接](https://github.com/openclaw/openclaw/issues/25592)
    - **#22676**: **Signal 守护进程竞态条件**，在 `SIGUSR1` 重启时导致进程孤立和发送失败。尚未看到关联的 fix PR。
      [Issue链接](https://github.com/openclaw/openclaw/issues/22676)
    - **#32296**: **代理回复上一消息而非当前消息**，属于会话上下文混乱的回归性 Bug。相关修复 PR #92575 和 #92571 今日已提交。
      [Issue链接](https://github.com/openclaw/openclaw/issues/32296)
    - **#29387**: **代理专属目录下的引导文件被忽略**，系统仅加载工作区目录下的文件，导致代理个性配置失效。有补丁 PR 已关联。
      [Issue链接](https://github.com/openclaw/openclaw/issues/29387)
    - **#31583**: **`exec` 工具不继承 `skills.entries.*.env` 环境变量**，导致无法向子进程传递密钥。有修复 PR 已关联。
      [Issue链接](https://github.com/openclaw/openclaw/issues/31583)
    - **#32473**: **控制 UI 需要 HTTPS 或 localhost 安全上下文**，导致使用 VPS 的用户无法正常访问控制界面。有修复 PR 已关联。
      [Issue链接](https://github.com/openclaw/openclaw/issues/32473)

### 6. 功能请求归类

今日有以下主要的功能请求被提出或讨论：

- **代理执行与上下文控制**:
    - `#22438`: 提议实现**分层引导文件加载**，以节省小任务场景下的 LLM token 消耗。
    - `#22358`: 请求增加**子代理完成后的扩展钩子**，以便自动生成任务轨迹等结构化数据。
    - `#13583`: 请求增加**预响应强制挂钩**，从机制上确保代理执行关键任务（如安全检查），而非依赖于提示词。
- **消息路由与集成增强**:
    - `#12602`: 请求为 Slack 频道消息增加 **Block Kit 支持**，以发送更丰富的交互式消息。
    - `#20786`: 请求增加对 **Telegram Business Bot** 的支持，以处理商业版 Telegram 的消息。
- **安全与权限管理**:
    - `#6615`: 请求在 `exec-approvals` 中增加**黑名单支持**，实现“默认允许，特定禁止”的安全策略。
    - `#7707`: 提议引入**内存信任标签**，根据信息来源（用户、网页、第三方）评估其可信度，防止记忆投毒。

### 7. 用户反馈摘要

- **关于消息泄漏问题**: 在 Issue #25592 中，用户强调了“代理在工具调用过程中的内部处理文本被发送到公共聊天频道”带来的严重用户体验问题，认为这破坏了代理作为智能助手的形象。
- **关于子代理会话来话管理**: Issue #47975 的用户详细描述了“子代理完成后，主会话变得无响应”的困扰，这影响了复杂工作流的可靠性。用户明确指出了版本和环境信息，便于维护者复现。
- **关于网络聊天头像问题**: Issue #38439 的用户报告了“Webchat 头像返回 404”的回归问题，这虽然是视觉问题，但直接影响用户对 AI 代理身份的认知和体验。
- **关于内存搜索问题**: Issue #91778 的用户以法语清晰地报告了 `memory_search` 功能自版本 v2026.6.1 起失效，并定位到“索引元数据丢失”这一根本原因，体现了社区的深入参与和热情。

### 8. 待处理积压

以下为长期未获得充分响应或解决的议题，提醒维护者关注：

- **#9443**:  **“预构建 Android APK 发布”** 的需求自 2026-02-05 提出，虽有多条评论，但项目方至今未有明确的回复或计划。这阻碍了希望使用移动端应用的用户。
  [Issue链接](https://github.com/openclaw/openclaw/issues/9443)
- **#10687**:  **“完全动态模型发现”** 的需求自 2026-02-06 提出，旨在支持 OpenRouter 等拥有快速迭代模型目录的提供商。该需求对希望使用最新模型的用户至关重要，但状态长期为 `needs-product-decision`。
  [Issue链接](https://github.com/openclaw/openclaw/issues/10687)
- **#7707**:  **“内存信任标签”** 的功能请求，自 2026-02-03 提出，涉及到安全领域。虽然已有一些讨论，但仍缺少维护者的明确方向或设计评审。
  [Issue链接](https://github.com/openclaw/openclaw/issues/7707)

---

## 横向生态对比

好的，遵照您的指示。以下是为您生成的各项目横向对比分析报告。

---

## AI 智能体与个人 AI 助手开源生态横向对比报告 — 2026-06-13

### 1. 今日横向概览

今日，四个项目均表现出活跃的开发动态。**OpenClaw** 以发布两个安全收紧版本和近500条Issue更新领跑，社区高度关注内存泄漏与消息泄漏等稳定性问题。**Zeroclaw** 社区活动也非常密集，核心围绕一个统一对话引擎的高风险重构展开，但同时遭遇了多起新用户入门与客户端兼容性Bug。**NanoBot** 和 **PicoClaw** 则相对专注于内部稳定性修复与功能完善，分别集中在会话上下文管理和协议（WebSocket）完善与权限控制方面。整体来看，项目社区在追求新功能的同时，都面临着不同程度的内存、消息路由和兼容性等系统级稳定性挑战。

### 2. 各项目活跃度对比

| 项目 | 今日活跃 Issues * | 今日活跃 PRs * | 今日 Release | 事实性备注 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 409 新开/活跃 | 142 合并/关闭 | `v2026.6.6` (正式版) & `v2026.6.6-beta.2` | 版本发布集中于安全边界收紧；出现P0级网关内存泄漏。 |
| **NanoBot** | 3 新开/活跃（6 更新数） | 21 待合并，9 合并/关闭 | 无 | 活动和发布相对平稳；关注点集中于记忆丢失与工具结果处理。 |
| **Zeroclaw** | 13 更新数 | 33 更新数 | 无 | 社区活动非常活跃；围绕统一对话引擎重构产生大量讨论；多个S1级新用户Bug被报告。 |
| **PicoClaw** | 6 更新数 | 14 更新数 | `v0.2.9-nightly.20260613` | 发布一个Nightly版本；侧重WebSocket协议完善、权限控制和代码稳健性修复。 |

*注释：主动“活跃”定义为24小时内有新评论、状态变更或新创建的 Issues/PRs。OpenClaw的数据为总数，其余项目为具体更新条数，统计口径存在差异，但可反映大体活动规模。

### 3. OpenClaw 与同类对照

基于今日数据，OpenClaw 与同类项目的差异主要体现在以下三点：

- **活动规模与广度**：OpenClaw 是今日活动中体量最大的项目，其版本发布、Issue 和 PR 的绝对数量远超其他三个项目。其社区讨论的覆盖面也更广，从核心内存泄漏（#91588）到终端UI问题（#32473）均有涉及。
- **安全为当前重心**：OpenClaw 今日的双版本发布明确将“收紧核心功能的安全边界”作为唯一亮点，这在其他项目今日的更新中并不突出。其他项目虽有权限控制相关的讨论（如Zeroclaw的 #7545, PicoClaw的 #3109），但OpenClaw将安全作为了系统性的版本发布主题。
- **社区讨论的聚焦点**：OpenClaw 最热门的 Issue 集中在“工具调用间文本泄漏”（#25592），这是一个典型的跨组件交互（工作流 vs 消息传递）设计问题。相比之下，NanoBot 的讨论焦点在于会话上下文管理（短期记忆丢失 #4044），Zeroclaw 则聚焦于核心架构重构（统一对话引擎 #7415）。

### 4. 共同出现的技术方向

今日，多个项目都涌现出对以下技术方向的需求：

- **会话与消息路由控制**：这是最突出的共同方向。**OpenClaw** 的 Issue #25592 报告了工具调用间文本泄漏到消息频道；**NanoBot** 的 Issue #4203 和 #4307 分别描述了孤立工具结果导致消息丢失以及 consolidation 机制误删消息的问题。**Zeroclaw** 的 Issue #7542 则报告了 `ask_user` 工具在 Web 会话中因通道关闭而失败。这些数据共同表明，**如何在复杂的AI工作流（工具调用、子代理）与消息传递机制（频道、webchat）之间建立清晰、可靠的路由与上下文管理逻辑，是多个项目共同面临的挑战**。
- **权限与安全控制**：**OpenClaw** 的版本发布主旨即是收紧安全边界。**Zeroclaw** 的 PR #7545 修复了 MCP 工具在风险配置文件中的权限问题。**PicoClaw** 的 Issue #3114 请求为 Telegram 渠道增加按对话类型的权限控制。这表明随着功能复杂化，各项目都在强化对Agent行为的细粒度安全管控。
- **对多模型、多提供商支持的需求**：**OpenClaw** 的长期积压 Issue #10687 关注动态模型发现；**NanoBot** 的 PR #4316 增加了 TTS 多提供商支持；**PicoClaw** 的 PR #2917 请求增加对 NEAR AI Cloud 的支持；**Zeroclaw** 的 Issue #7539 请求为 llama.cpp 增加本地模型路由。这表明**社区对灵活性、可替换性模型生态的需求是持续且普遍的**。

### 5. 差异化定位分析

- **功能侧重**：
    - **OpenClaw** 今日更新聚焦于**核心安全**，其版本发布涉及transcripts, sandbox binds, host environment 等多个底层模块的安全壁垒，定位偏向于构建高安全性的AI基础设施。
    - **NanoBot** 今日着重于**会话与记忆管理**的修复（如孤立工具结果、记忆丢失），以及工具调用审计（PR #4318）功能的完善。其定位更偏向于优化AI Agent的交互体验和可追溯性。
    - **Zeroclaw** 今日的核心活动是**核心架构重构**（统一对话引擎），同时暴露了大量新用户入门和兼容性问题，显示出其处于一个功能演进与稳定性阵痛并存的阶段，更偏向于前沿功能探索。
    - **PicoClaw** 则展现了**多渠道、多协议接入**的明确特点，今日的更新涉及WebSocket协议完善、DeltaChat新渠道、Telegram论坛修复等，定位是连接AI与现实世界的桥梁。

- **目标用户**：
    - **OpenClaw** 和 **Zeroclaw** 由于其代码规模和架构复杂度，更可能吸引**专业开发者、企业团队或寻求深度定制的技术用户**。
    - **NanoBot** 和 **PicoClaw** 从其当前问题类型（如短记忆、新用户入门、安装失败）看，似乎拥有更广泛的用户基础，可能包括**个人开发者和小型团队**，对开箱即用和稳定体验要求更高。

- **技术架构**：
    - **OpenClaw** 今日修复涉及Gateway（#91333）、Memory Core（#92341）等多个独立模块，显示出其**微服务化或模块化**的架构特征。
    - **Zeroclaw** 的重构 PR #7540 旨在统一三种不同的`turn`引擎，暗示其早期可能存在**代码路径复用性不足**的问题，正努力将其整合为更统一的执行模型。
    - **PicoClaw** 使用**Go语言**，这在AI Agent框架中相对少见，其发布内容涉及`json.Marshal`、`Go` interface等，技术栈特色鲜明。

### 6. 社区活跃度记录

基于今日Issue、PR的更新数量和版本发布活动，对四个项目的社区活跃度进行分层：

- **高活跃**：**OpenClaw**、**Zeroclaw**
    - **OpenClaw**: 极高的Issue/PR数量，有双版本发布，核心功能讨论激烈（如P0级Bug）。
    - **Zeroclaw**: 社区讨论非常密集，围绕架构重构产生大量互动，但同时暴露了较多新用户问题。
- **中等活跃**：**PicoClaw**
    - **PicoClaw**: 有Nightly版本发布，多个功能PR和Bug修复均在推进，活动量稳定。
- **低活跃**：**NanoBot**
    - **NanoBot**: 今日无版本发布，活动量相对平稳，社区讨论集中在少数几个Bug问题上。

### 7. 有证据支撑的观察

以下是由多条独立数据支撑的观察结果：

1.  **安全与上下文边界问题是项目共同痛点**：**OpenClaw**（工具间文本泄漏 #25592）、**NanoBot**（孤立工具结果与消息丢失 #4203, #4307）、**Zeroclaw**（`ask_user`在Web会话失败 #7542）的多个Bug报告均指向AI Agent在处理多步骤任务时的消息路由和上下文管理缺陷。这不仅仅是个别项目的Bug，而是AI Agent框架设计中的核心复杂性体现。

2.  **新用户入门门槛是阻碍社区增长的重要因素**：**Zeroclaw** 在一天内出现了多个S1级的新用户无法正常使用的问题，包括Docker构建失败（#7533）、macOS应用无法运行（#7527）和Windows配置解析失败（#7537），而 **OpenClaw** 也有长期以来请求提供预构建Android APK的诉求（#9443）。这表明，项目在追求功能前沿性的同时，对新手安装和快速启动的流畅性关注不足，可能限制了用户基础的扩展。

3.  **移动端和轻量化访问需求持续存在**：**OpenClaw** 的 Issue #9443 （预构建Android APK）已积压超过4个月，而 **PicoClaw** 的 Issue #3110 （Telegram论坛回复错误）和 **Zeroclaw** 对多渠道流式卡片消息的支持（#7531）等，共同反映出社区对在移动终端或不同聊天客户端上无缝使用AI Agent的强烈意愿。

4.  **功能演进伴随架构重构的风险**：**Zeroclaw** 在尝试合并统一对话引擎（#7415）这一重大架构重构时，社区随即涌现了大量新Bug。这并非巧合，而是**高风险代码重构在短期内可能影响系统稳定性的典型表现**。项目在推动此类重大变化时，需要更加关注测试覆盖和过渡时期的兼容性。

5.  **今日暂无明确跨项目信号**：关于“低代码/无代码工具链”、“标准化Agent协议”或“垂直行业解决方案”等趋势，今日数据中未出现能被多个项目共同验证的信号。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 (2026-06-13)

---

## 1. 今日活动概览

过去 24 小时内，项目共处理 **6 个 Issues**（3 个新开/活跃，3 个已关闭）和 **30 个 Pull Requests**（21 个待合并，9 个已合并/关闭）。无新版本发布。社区讨论集中在短期记忆丢失、工具调用结果孤立以及会话上下文 consolidation 导致的消息丢失等稳定性问题上。PR 方面，多个修复和功能 PR 处于开放状态，其中审计（audit）模块和 TTS 配置系统是今日新增的主要功能。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展（今日已合并/关闭的重要 PR）

以下 PR 今日被合并或关闭，代表了具体的功能推进或修复：

- **#4319 / #4318 feat(audit): 添加 Agent 工具调用审计模块**
  两个 PR 标题相同，均为 `feat(audit): Add tools.audit for agent action observability`，今日均被关闭。该模块通过 `AuditTool` 记录工具调用，支持 loguru、HTTP webhook、JSONL 文件和回调四种传输方式，并集成到 `AgentLoop` 和 `AgentRunSpec` 中。
  [→ #4319](https://github.com/HKUDS/nanobot/pull/4319) / [→ #4318](https://github.com/HKUDS/nanobot/pull/4318)

- **#4304 fix(cron): 等待 spawned 子 agent 完成后再标记 cron 任务完成**
  修复了 cron 任务中通过 spawn tool 启动子 agent 时，主任务提前返回导致子任务仍在后台运行的问题。
  [→ #4304](https://github.com/HKUDS/nanobot/pull/4304)

- **#4303 fix(mcp): 关闭 tracked generators 防止 GC 崩溃**
  （该 PR 标签为 `[question]`，但属于修复类）修复了 `streamableHttp` MCP 服务器会话关闭时因异步任务跨取消作用域导致的崩溃。今日有更新，状态未明确合并，但属于活跃修复。
  [→ #4303](https://github.com/HKUDS/nanobot/pull/4303)

另外，今日有多项修复 PR 保持开放但持续更新，将在后续部分提及。

---

## 4. 社区热点

今日讨论最活跃的 Issues 集中在会话记忆和上下文管理方面：

- **#4044 [bug] short term memory loss**
  作者描述 Nanobot 提问后立即忘记自己问过什么，认为是系统提示（SOUL.md, USER.md, MEMORY.md）占用过多上下文窗口导致。该 Issue 有 **5 条评论**，是今日评论数最多的问题，社区关注度高。
  [→ #4044](https://github.com/HKUDS/nanobot/issues/4044)

- **#4203 / #4006 [bug] 孤立工具结果导致消息被丢弃**
  两个 Issue 共同指向 `find_legal_message_start` 函数在处理“孤立工具结果”时逻辑缺陷，导致对话历史被清空。其中 #4006 提到即使经过此前 PR #3984 修复，仍存在残留的孤立 tool result。两个 Issue 今日均被关闭，表明修复已合入。
  [→ #4203](https://github.com/HKUDS/nanobot/issues/4203) / [→ #4006](https://github.com/HKUDS/nanobot/issues/4006)

- **#4307 [bug] Post-turn consolidation 会清除 agent 自身的交付消息**
  报告指出当 `context_window_tokens` 设置较小（如 40k）时，长轮次累积超过 100k token，consolidation 在后轮次完成后执行，会归档掉 agent 自己的交付消息，导致用户后续引用丢失。仅1条评论但问题描述清晰。
  [→ #4307](https://github.com/HKUDS/nanobot/issues/4307)

---

## 5. Bug 与稳定性

今日报告的 Bug 按严重程度排列：

### 严重（可能导致功能不可用或数据丢失）

1. **#4044 短期记忆丢失** — 会话线程断裂，agent 无法记住上一轮的回答。病因推测为上下文窗口压力。尚无对应 fix PR。
   [→ #4044](https://github.com/HKUDS/nanobot/issues/4044)

2. **#4203 / #4006 孤立工具结果丢弃所有消息** — 该 Bug 已在今日关闭，对应的修复可能已合入（见#4203/#4006关闭）。但仍需关注是否完全解决。
   [→ #4203](https://github.com/HKUDS/nanobot/issues/4203) / [→ #4006](https://github.com/HKUDS/nanobot/issues/4006)

3. **#4307 Post-turn consolidation 清除 agent 自身消息** — 长轮次后用户消息丢失。暂无 fix PR。
   [→ #4307](https://github.com/HKUDS/nanobot/issues/4307)

### 中等（影响部分功能）

4. **#4309 `nanobot serve` 返回零 token usage** — `/v1/chat/completions` 始终返回 `prompt_tokens: 0` 等，而 agent 内部实际有追踪真实用量。无评论，无对应 PR。
   [→ #4309](https://github.com/HKUDS/nanobot/issues/4309)

### 已有关联修复 PR 的 Bug

- **MCP 服务器崩溃** → PR #4303 已修复
- **Dream cursor 不前进导致提示膨胀** → PR #4321 已提交
- **Memory 游标非单调导致历史错乱** → PR #4256 已提交
- **消息媒体附件格式校验缺失** → PR #4312 已提交
- **工具分页参数非正数** → PR #4311 已提交

---

## 6. 功能请求归类

今日用户提出或实现的功能请求（不含已关闭的审计模块）：

| 类型 | 内容 | 链接 |
|------|------|------|
| **新功能（已实现 PR）** | 添加 TTS 配置系统，支持 OpenAI、Groq (Orpheus)、ElevenLabs 多提供商 | [#4316](https://github.com/HKUDS/nanobot/pull/4316) |
| | WebUI 与 config.json 设置同步，新增温度、工具限制、Dream、渠道等写接口 | [#4313](https://github.com/HKUDS/nanobot/pull/4313) |
| | 扩展 Python SDK 运行时控制，增加 `RunResult` 元数据、会话/内存/运行时访问 | [#4296](https://github.com/HKUDS/nanobot/pull/4296) |
| | 打破配置 schema 对工具运行时的依赖（重构） | [#4314](https://github.com/HKUDS/nanobot/pull/4314) |
| **用户需求（Issue）** | `[enhancement]` 支持多个 custom provider，通过模板参数选择内置 provider | [#4305](https://github.com/HKUDS/nanobot/issues/4305) |

---

## 7. 用户反馈摘要

从今日 Issues 评论中提炼的真实用户痛点：

- **短期记忆彻底丢失**：用户回答一个问题后，agent 仿佛没有问过，会话断裂。用户怀疑是 system prompt 过长挤占上下文窗口，但未获得维护者回应。
- **工具调用结果被错误丢弃**：当用户消息后跟孤立 tool result 时，整个对话历史被清空，导致必须重新开始会话。虽然该 Bug 今日已关闭，但用户此前多次遇到。
- **Agent 交付消息消失**：在长轮次中，agent 的最终输出被 consolidation 机制归档，用户后续引用该消息时找不到内容，影响依赖 agent 生成的累计信息。
- **API 兼容接口返回零 token**：使用 OpenAI 兼容接口的开发者发现用量统计全部为 0，无法用于计费或监控。

这些反馈集中体现了 **会话上下文管理**（记忆、裁剪、工具结果配对）是当前用户最不满意的环节。

---

## 8. 待处理积压

以下 Issue 或 PR 处于长期开放状态，且近期未得到合并或关闭，建议维护者关注：

| 编号 | 类型 | 标题 | 最早更新 | 备注 |
|------|------|------|----------|------|
| #3982 | PR | test: add scripted agent runner harness | 2026-05-24 | 测试框架 PR，已存在 20 天 |
| #3983 | PR | test: cover runner blocked tool-call finish reasons | 2026-05-24 | 同上，测试覆盖 |
| #4053 | PR | fix(tools): keep read-only roots out of write paths | 2026-05-29 | 安全修复，限制只读根目录避免写逃逸 |
| #4119 | PR | fix(exec): block relative symlink workspace escapes | 2026-05-31 | 安全修复，阻止符号链接逃逸 |
| #4193 | PR | test: add memory lifecycle harness | 2026-06-04 | 内存生命周期测试，已 9 天 |
| #4256 | PR | fix(memory): keep history cursor monotonic | 2026-06-08 | 内存游标修复，已 5 天 |

这些 PR 多为修复和测试增强，长时间未合入可能影响后续开发或导致同类 Bug 重复出现。

[→ 所有开放 PR](https://github.com/HKUDS/nanobot/pulls?q=is%3Aopen+is%3Apr)

---

*本日报基于 GitHub 公开数据自动生成，仅供参考。更多详情请访问 [NanoBot 仓库](https://github.com/HKUDS/nanobot)。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，请查收根据您提供的 GitHub 数据生成的 Zeroclaw 项目动态日报。

---

## Zeroclaw 项目动态日报 — 2026-06-13

### 1. 今日活动概览

过去24小时内，Zeroclaw 项目没有新版本发布，但社区活动极为密集。共产生13条 Issue 更新和33条 PR 更新。其中，核心讨论围绕一个统一 Agent 对话引擎 (turn engine) 的高风险 RFC（#7415）及其对应的重构 PR（#7540）展开。此外，今日提交的 Bug 报告数量显著增加，涉及 Docker 构建、macOS 客户端兼容性和新用户快速启动等多个方面。

### 2. 版本发布

无。

### 3. 项目进展

今日有3个 PR 被合并或关闭，主要进展如下：

-   **MCP 工具风险配置修复**：PR [#7545](https://github.com/zeroclaw-labs/zeroclaw/pull/7545) 被关闭。该 PR 旨在修复当 agent 的 `risk_profile` 有显式 `allowed_tools` 列表时，自动发现的 MCP 工具无法被 agent 使用的问题。随后，作者提交了修改版 PR [#7547](https://github.com/zeroclaw-labs/zeroclaw/pull/7547)。
-   **大规模代码依赖清理**：PR [#7548](https://github.com/zeroclaw-labs/zeroclaw/pull/7548) 被合并。这是一个大规模的维护性 PR，对项目核心、渠道、网关、提供方、工具等多个组件的 Cargo 依赖进行了清理和优化，致力于提升项目构建效率和稳定性。（注：该 PR 作者和合并者信息未显示在数据中，无法确定具体维护者。）

### 4. 社区热点

-   **核心议题：统一 Agent 对话引擎**：Issue [#7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415) 是一个关于统一三种 Agent 对话引擎（`run_tool_call_loop`、`turn_streamed`、`Agent::turn`）的 RFC。此 RFC 已被维护者采纳并直接通过一个合并的 PR（#7540）执行，而非分阶段迁移。这标志着 ZeroClaw 内部一个关键架构层面的重构，旨在减少代码重复和逻辑歧义。对应的实现 PR [#7540](https://github.com/zeroclaw-labs/zeroclaw/pull/7540) 同样获得了社区高度关注。

-   **广泛的议题**：Issue [#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970) 作为 `v0.8.1` 版本的集成/渠道/提供方/工具 PR 队列跟踪器，虽无新评论，但其作为版本规划枢纽的角色使其始终保持高关注度。

### 5. Bug 与稳定性

今日 Bug 报告集中爆发，多个 S1（工作流阻塞）级别问题被提交：

-   **Dashboard 不可用 (S1)**：Issue [#7523](https://github.com/zeroclaw-labs/zeroclaw/issues/7523) 报告通过 Homebrew 安装的 v0.8.0 版本，其 Web Dashboard 无法访问。此问题已有修复 PR [#7529](https://github.com/zeroclaw-labs/zeroclaw/pull/7529) 被提交，该 PR 确保仅在 Dashboard 构建文件存在时才打印访问链接，以避免误导用户。
-   **`ask_user` 工具在 Web 会话中失败 (S1)**：Issue [#7542](https://github.com/zeroclaw-labs/zeroclaw/issues/7542) 报告在 Gateway Web 仪表盘会话中使用 `ask_user` 工具时，会立即报错“通道关闭”，导致工作流中断。
-   **macOS 应用无法运行 (S1)**：Issue [#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) 报告 macOS 15.7.7 上安装后，应用无法检测权限、响应迟缓，重启后窗口消失。
-   **Docker 构建失败 (S1)**：Issue [#7533](https://github.com/zeroclaw-labs/zeroclaw/issues/7533) 报告 Docker 构建时因缺少 C++ 编译器而失败。此问题已有修复 PR [#7534](https://github.com/zeroclaw-labs/zeroclaw/pull/7534) 被提交，该 PR 在 Dockerfile 中增加了 `g++` 依赖。
-   **Windows 安装失败 (S1)**：Issue [#7537](https://github.com/zeroclaw-labs/zeroclaw/issues/7537) 报告 Windows 10 新用户通过 `zeroclaw quickstart` 命令创建 agent 时因配置解析错误而失败。

此外，还有多个 S2 级别的问题被报告，例如 V3 遗留路径错误问题（[#7541](https://github.com/zeroclaw-labs/zeroclaw/issues/7541)），该问题导致 Agent 使用共享的数据目录作为其工作目录，可能引发文件冲突。

### 6. 功能请求归类

-   **多会话支持**：Issue [#7543](https://github.com/zeroclaw-labs/zeroclaw/issues/7543) 请求为 Gateway Web 聊天界面添加多会话支持，允许用户创建、切换、重命名和删除对话。
-   **本地模型路由**：Issue [#7539](https://github.com/zeroclaw-labs/zeroclaw/issues/7539) 请求为 llama.cpp 添加模型路由功能，以便在多个本地模型之间快速切换。
-   **流式富媒体消息**：Issue [#7531](https://github.com/zeroclaw-labs/zeroclaw/issues/7531) 请求为 QQ、钉钉、微信、飞书等渠道支持流式卡片消息，以减少用户的等待焦虑。
-   **Twitch 频道**：此前已关闭的 Issue [#6443](https://github.com/zeroclaw-labs/zeroclaw/issues/6443)，其功能（添加 Twitch 聊天频道）设计为对现有 IRC 频道的一个薄封装，已被标记为已接受（`status:accepted`）。

### 7. 用户反馈摘要

从今日的 Issue 和评论中可以提炼出一些明确的用户痛点：

-   **新用户入门障碍**：多位新用户反映安装和快速启动流程存在严重问题，例如 `quickstart` 命令在 Windows 上失败（[#7537](https://github.com/zeroclaw-labs/zeroclaw/issues/7537)），而在 macOS 上应用完全不可用（[#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527)）。这表明当前的安装与引导流程对新手不够友好。
-   **功能预期差距**：用户期待 Gateway 的 Web 聊天界面能提供完整的对话管理能力（如多会话），而当前仅支持单会话模式（[#7543](https://github.com/zeroclaw-labs/zeroclaw/issues/7543)）。这说明用户界面功能与用户期望之间存在差距。
-   **特定功能急切性**：用户明确要求为 llama.cpp 等本地模型提供模型路由功能（[#7539](https://github.com/zeroclaw-labs/zeroclaw/issues/7539)），反映出一部分用户正在深度使用本地模型，并希望获得更灵活的管理方式。

### 8. 待处理积压

以下为历史较长、优先级较高的待处理工作项，提醒维护者关注：

-   **`v0.8.1` 集成/渠道/提供方/工具 PR 队列**：Issue [#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970) 作为 `v0.8.1` 版本的集成队列，负责管理和路由相关 PR，至今无维护者回复。
-   **插件技能加载修复**：PR [#7245](https://github.com/zeroclaw-labs/zeroclaw/pull/7245) 旨在修复 `read_skill` 工具无法加载插件内技能的问题。该 PR 已被标记为 `needs-author-action`，可能需要作者根据反馈进行更新。
-   **wasmtime 依赖集成**：PR [#7429](https://github.com/zeroclaw-labs/zeroclaw/pull/7429) 计划引入 wasmtime 作为 WebAssembly 运行时的备选方案，以逐步替代 Extism。这是一个大规模、高风险的功能性 PR，已提交多日，需要维护者进行评估和推动。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，遵照您的指示。以下是为 PicoClaw 项目生成的 2026-06-13 项目动态日报。

---

## PicoClaw 项目日报 (2026-06-13)

### 1. 今日活动概览

本项目在过去24小时内活动频繁，共处理了6条Issues（新增5条，关闭1条）和14条PR（待合并11条，已合并/关闭3条）。此外，发布了Nightly版本v0.2.9-nightly.20260613。今日的更新主要集中在Bug修复、协议完善（如WebSocket信号）以及多平台适配（如Telegram论坛、DeltaChat）上。同时，多个针对错误处理稳健性的小修复被合并，体现了对代码质量的持续关注。

### 2. 版本发布

**Nightly Build: v0.2.9-nightly.20260613.c362114c**
- 这是一个自动化构建的测试版本，可能不稳定，仅供谨慎使用。
- **主要变更范围**: 该版本包含了截至当前 `main` 分支的所有代码。从Changelog看，主要包括对媒体路由逻辑的修复、Pico WebSocket `turn.done` 生命周期信号的完善，以及权限控制等功能的演进。
- **链接**: https://github.com/sipeed/picoclaw/compare/v0.2.9...main

### 3. 项目进展

今天有3个PR被成功合并或关闭，推动了以下功能的完善和问题的修复：

- **权限控制功能合并**: Issue [#3109](https://github.com/sipeed/picoclaw/issues/3109) 提出的“渠道级权限范围”功能已被实现并关闭。该功能允许在群聊/频道等场景下限制危险操作，提升了安全性。
- **JSON错误处理合并**: 两个专注于修复JSON序列化/反序列化错误被静默忽略的PR被合并：
    - PR [#3113](https://github.com/sipeed/picoclaw/pull/3113): 修复了渠道管理中 `json.Marshal/Unmarshal` 错误被丢弃的问题。
    - PR [#3112](https://github.com/sipeed/picoclaw/pull/3112): 修复了工具循环（toolloop）中 `json.Marshal` 错误被丢弃，可能导致对话历史数据丢失的问题。

### 4. 社区热点

今日社区讨论的焦点集中在**权限控制**和**协议完善**两个方面。

- **权限控制**:
    - 受已关闭的 Issue [#3109](https://github.com/sipeed/picoclaw/issues/3109) 启发，新用户 [@v2up-32mb](https://github.com/v2up-32mb) 提交了 Issue [#3114](https://github.com/sipeed/picoclaw/issues/3114)，专门请求为**Telegram渠道**增加按对话类型（私聊/群组/频道）进行精细权限控制的功能。这表明用户对安全边界的配置有更高层级的需求。
- **协议完善 (WebSocket)**:
    - Issue [#2984](https://github.com/sipeed/picoclaw/issues/2984) 关于为Pico WebSocket客户端增加明确的“轮次完成（turn completion）”信号的讨论仍在继续。此需求旨在让外部客户端能确定性地知道AI Agent何时处理完用户消息。对应的实现PR [#3116](https://github.com/sipeed/picoclaw/pull/3116) 已提交，修复了初始实现中的多个缺陷，表明维护者正在积极跟进此社区呼声。

### 5. Bug 与稳定性

今日报告了数个Bug，按潜在影响排列如下：

- **工具执行失败 (严重)**: Issue [#3111](https://github.com/sipeed/picoclaw/issues/3111) 报告，使用新模型 `gemini-3.5-flash` 执行工具时，因后端响应schema不兼容Google API新的推理要求，导致 `400 Bad Request` 错误。此问题直接阻塞了该模型下所有工具功能的使用，目前**尚无对应的修复PR**。
- **Telegram论坛回复错误 (中等)**: Issue [#3110](https://github.com/sipeed/picoclaw/issues/3110) 报告，在Telegram超级群组（论坛模式）中，机器人回复消息会被错误发送到默认的 `#General` 主题，而非用户所在的特定主题线程。这影响了在论坛场景下的正常使用体验，目前**尚无对应的修复PR**。
- **Evolution模式Token消耗 (中等)**: Issue [#3012](https://github.com/sipeed/picoclaw/issues/3012) 报告，开启Evolution功能后，AI Agent会持续消耗token。这个问题已持续一周，虽无新进展，但影响成本控制，值得关注。
- **代码稳健性修复 (低)**: 三个聚焦于未检查类型断言错误（unchecked type assertion）的PR [#3053](https://github.com/sipeed/picoclaw/pull/3053)、[#3091](https://github.com/sipeed/picoclaw/pull/3091) 和 [#3045](https://github.com/sipeed/picoclaw/pull/3045) 目前仍处于待合并状态。这类错误可能导致panic，修复它们能提升项目的健壮性。

### 6. 功能请求归类

用户今日提交了多项功能请求和相关PR，涵盖以下方面：

- **渠道权限细化**: 请求为Telegram渠道增加按对话类型（私聊、群组、频道）的权限控制 ([#3114](https://github.com/sipeed/picoclaw/pull/3114))。
- **媒体处理优化**: PR [#2964](https://github.com/sipeed/picoclaw/pull/2964) 提供了入站图片压缩功能的实现，以减少模型负载。
- **新渠道接入**: PR [#3063](https://github.com/sipeed/picoclaw/pull/3063) 为项目增加了一个新的DeltaChat渠道网关。
- **新AI供应商支持**: PR [#2917](https://github.com/sipeed/picoclaw/pull/2917) 增加了对NEAR AI Cloud作为OpenAI兼容供应商的支持。
- **Web端体验优化**: PR [#3097](https://github.com/sipeed/picoclaw/pull/3097) 在Web聊天输入框下方增加了Shift+Enter换行提示，以改善用户体验。

### 7. 用户反馈摘要

- **痛点明确**: 用户 [@xpader](https://github.com/xpader) 在 Issue [#3012](https://github.com/sipeed/picoclaw/issues/3012) 中详细描述了Evolution模式下token持续消耗的问题，并提供了完整的复现环境（PicoClaw v0.2.9, FreeBSD, MiniMax模型），这表明该问题不是个别现象，存在确切的使用场景和复现路径。
- **需求清晰**: 用户 [@v2up-32mb](https://github.com/v2up-32mb) 在 Issue [#3114](https://github.com/sipeed/picoclaw/issues/3114) 中清晰阐述了不同对话类型下（私聊、群组、频道）的权限分级控制需求，并举例说明当前机制在群聊中的安全隐患，反馈质量高。
- **即时反馈**: Issue [#3111](https://github.com/sipeed/picoclaw/issues/3111) 的作者在尝试新模型时立即发现了兼容性问题并提交了报告，属于对前沿特性（Gemini 3.5 Flash）的及时反馈。

### 8. 待处理积压

以下为长期未解决或关键待办项，提醒维护者关注：

- **[重要Bug] Evolution模式Token问题 (#3012)**: 该Issue自2026-06-05起已存在一周，涉及核心功能（Evolution）的可靠性，可能导致用户资源浪费。
- **[重要PR] NEAR AI Cloud供应商支持 (#2917)**: 该PR自2026-05-21起已积压超过三周，为扩展模型生态的重要贡献，若长时间未合并可能影响贡献者积极性。
- **[重要PR] DeltaChat渠道接入 (#3063)**: 新渠道的接入PR，自2026-06-08起，目前处于开放状态，需要维护者审阅。
- **[活跃PR] 图片压缩功能 (#2964)**: 一个重要的性能优化PR，自5月28日提交，需要审阅。

</details>