# OpenClaw 生态日报 2026-05-27

> Issues: 382 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-05-27 02:37 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

好的，这是根据您提供的 OpenClaw GitHub 数据生成的 2026-05-27 项目动态日报。

---

# OpenClaw 项目动态日报 — 2026-05-27

**日报周期：** 2026-05-26 至 2026-05-27
**数据来源：** OpenClaw (github.com/openclaw/openclaw) 公开数据

---

## 1. 今日活动概览

过去24小时，OpenClaw 项目保持高度活跃，共计有382条 Issue 和500条 PR 更新。其中，新开或活跃的 Issue 为171条，新提交的待合并 PR 达265条。项目发布了 `v2026.5.26-beta.1` 和 `v2026.5.25-beta.1` 两个新版本，主要聚焦于启动性能优化、回复速度提升以及通道兼容性修复。社区讨论热点集中在子代理任务丢失、事件循环饱和导致的稳定性问题，以及大量与配置和代理 (Proxy) 兼容性相关的 Bug 报告。

## 2. 版本发布

### v2026.5.26-beta.1
此版本主要亮点为性能优化，特别是在回复和启动速度方面。通过分离面向用户的发送操作与后台慢速工作，并在热路径上复用命令/模型/插件元数据来加速启动流程，避免了重复扫描插件、通道、会话、用量成本和文件系统等资源。
- **发布链接:** [v2026.5.26-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.5.26-beta.1)

### v2026.5.25-beta.1
此版本为 Beta 1 的后期修复版本，专门解决了 iMessage 通道的一个附件路径问题。现在，iMessage 通道在读取 `~/Library/Messages/Attachments` 路径下的附件时，会遵循现有的入站路径策略，而不是直接拒绝，从而修复了附件无法被正确读取的问题。
- **发布链接:** [v2026.5.25-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.5.25-beta.1)

## 3. 项目进展

尽管大量 PR 仍处于“待合并”状态，今日仍有多项关键修复和功能被推进。维护者积极处理了多个 P1 级别的 Bug，尤其是在会话状态（session-state）和消息丢失（message-loss）领域。主要进展包括：
- **修复事件循环饱和：** `#86509` 和 `#86948` 等 P1 级别的 Issue 报告了v2026.5.22版本中的事件循环回归问题。相应的修复PR `#86806` 通过锁文件检测回退机制恢复崩溃的主会话，`#87079` 通过武装完成空闲监视器来检测停滞的代码执行进程，均已提交并进入审查阶段。
- **修复子代理 (Subagent) 与认证问题：** `#85953`（父子会话转录锁持有）和 `#86354`（Codex本地代码模式禁用）等阻塞性问题已被关闭或有了对应的修复PR（`#86889` 修复聊天历史 hydration，`#85936` 保留插件 LLM 命令鉴权）。
- **架构重构推进：** 大型 PR `#81402`（将运行时状态迁移至SQLite）和 `#86157`/`#86156`（Channel Broker 第二阶段路由证明）仍处于开放状态，正在等待作者或维护者的进一步评审。

## 4. 社区热点

今日社区讨论的焦点是**子代理（Subagent）完成任务后结果丢失**的问题。这是一个系统性痛点，体现在多个活跃讨论中：

- **#44925** [Subagent completion silently lost](https://github.com/openclaw/openclaw/issues/44925)：该 Issue 已持续两个多月，今日仍有18条评论。用户详细描述了子代理在完成公告失败、超时等多种场景下结果被静默丢弃的问题，是社区关注的核心稳定 Bug。
- **#75** [Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)：作为评论数（109条）和点赞数（77个）最高的 Feature Request，社区对官方提供跨平台桌面应用（特别是Linux和Windows）的呼声极高。这表明用户不仅满足于CLI和Web界面，对原生桌面集成体验有强烈需求。
- **#75378** [Gateway event loop saturation during parallel subagent spawn](https://github.com/openclaw/openclaw/issues/75378)：讨论聚焦于并发生成子代理时引发的事件循环饱和，导致整个Gateway重启。这暗示用户正在尝试更具挑战性的多代理并行工作流，并对底层性能提出了更高要求。

**分析：** 社区对高并发和长时间运行场景下的稳定性问题非常敏感。子代理的生命周期管理、异步任务的可靠性以及Gateway的性能，是目前用户最关心的痛点。

## 5. Bug 与稳定性

过去24小时报告的 Bug 涵盖了从性能回归到数据丢失的多个方面，按严重程度排列如下：

- **关键 (P1/Beta Blocker)：**
  - **#86948** [Beta blocker: codex — app-server turns silently drop](https://github.com/openclaw/openclaw/issues/86948)：Codex 应用服务器在几次交互后出现事件循环饱和，导致对话静默丢弃。
  - **#86509** [Regression on v2026.5.22: event-loop starvation returns](https://github.com/openclaw/openclaw/issues/86509)：v2026.5.22版本事件循环饥饿问题回归，导致会话锁定阶段长达87秒。
  - **#86599** [Local model provider calls thread block gateway event loop on Windows beta](https://github.com/openclaw/openclaw/issues/86599)：在Windows beta版上，本地模型调用阻塞了Gateway事件循环，导致单次推理耗时约4分钟。
- **重要 (P1)：**
  - **#85953** [sessions_yield leaves parent session transcript lock held](https://github.com/openclaw/openclaw/issues/85953)：会话释放导致父会话转录锁被持有，子代理无法回写结果。目前该Issue已被关闭。
  - **#86354** [Codex native code mode disabled on Node.js-hosted gateways](https://github.com/openclaw/openclaw/issues/86354)：Node.js上运行的Gateway，其Codex原生代码模式被错误禁用，导致所有隔离会话（如cron任务）丢失执行、读写等工具。
  - **#86827** [Group chat session stuck in 'failed' state silently drops messages](https://github.com/openclaw/openclaw/issues/86827)：群聊会话进入“失败”状态后，静默丢弃所有后续消息。
- **一般 (P2)：**
  - **#86613** [memory_search call leaks ~N FDs](https://github.com/openclaw/openclaw/issues/86613)：`memory_search` 每次调用都会泄露文件描述符，长期运行会导致Gateway资源耗尽。
  - **#83086** [max_tokens not subtracting used input tokens](https://github.com/openclaw/openclaw/issues/83086)：`max_tokens` 未减去已使用的输入Token数，导致API返回“too large”错误。该Issue已被关闭，表明已有修复。

## 6. 功能请求归类

- **子代理 / 异步任务增强：**
  - **#38626** [Subagent lifecycle observability + async supervision controls](https://github.com/openclaw/openclaw/issues/38626)：用户期望获得子代理的生命周期事件、运行摘要和监控控制能力。
  - **#50093** [WhatsApp: Backfill missed messages after reconnection](https://github.com/openclaw/openclaw/issues/50093)：要求WhatsApp在断线重连后能补齐错过消息，属于消息可靠性的功能请求。
- **配置与代理兼容性：**
  - **#68596** [Configurable streaming watchdog timeout threshold](https://github.com/openclaw/openclaw/issues/68596)：用户要求能将流式传输的看门狗超时时间设置为可配置，以适应长思考模型。
  - **#81249** [Local Ollama embeddings fail when proxy is enabled](https://github.com/openclaw/openclaw/issues/81249)：当启用代理时，本地Ollama嵌入服务因SSRF保护而失败。该Issue已被关闭。
- **UI 与显示：**
  - **#86939** [fix(ui): webchat run-status-label stuck on "In progress"](https://github.com/openclaw/openclaw/issues/86939)：Webchat 运行状态标签在模型调用结束后仍错误显示为“In progress”。该Issue已被关闭，表明有对应修复。
- **平台扩展：**
  - **#85731** [Proposed iOS app direction](https://github.com/openclaw/openclaw/issues/85731)：提出了iOS应用的界面设计方向，包含命令、聊天、状态等多个导航模块。

## 7. 用户反馈摘要

- **#76562** [High CPU, extreme control-plane RPC latency](https://github.com/openclaw/openclaw/issues/76562)：用户 [@Nsch11] 报告从v2026.4.24升级到v2026.4.29后，Gateway性能严重退化，CPU 100%占用，控制平面RPC延迟极高，并伴有不稳定轮询。点击“Rollbacked to `2026.4.24`”表达了用户的失望和无奈。
- **#86613** [memory_search call leaks ~N FDs on macOS](https://github.com/openclaw/openclaw/issues/86613)：用户 [@lukeboyett] 提供了一个确定性的复现方法，证明每次 `memory_search` 调用都会泄漏文件描述符，严重影响长期运行服务的稳定性。该报告专业且细节充实，对项目修复有极大帮助。
- **#82968** [Agent lacks reliable wall-clock time source](https://github.com/openclaw/openclaw/issues/82968)：用户 [@AS76] 指出Agent缺乏可靠的系统时钟信息来源，依赖运行时长（uptime）导致任何基于时间的调度行为都无法正常工作。这被认为是一个严重的架构限制。

## 8. 待处理积压

以下是在过去24小时内有更新但尚未得到有效解决的长期或重要 Issue，提醒维护者关注：

- **#44925** [Subagent completion silently lost](https://github.com/openclaw/openclaw/issues/44925) (P1)：创建于2026-03-13，长期悬而未决。子代理静默丢失问题是社区反映最强烈的稳定性缺陷之一，需要从根本上解决。
- **#50093** [WhatsApp: Backfill missed messages after reconnection](https://github.com/openclaw/openclaw/issues/50093) (P2)：创建于2026-03-19，WhatsApp消息丢失问题长期存在，影响用户体验和消息可靠性。
- **#65564** [heartbeat isolatedSession rotates sessionId but reuses old transcript file](https://github.com/openclaw/openclaw/issues/65564) (P2)：创建于2026-04-12，心跳隔离会话存在ID轮换但转录文件未跟新的问题，导致会话状态混乱。
- **#4627**（未出现在最新数据中，但依据上下文推测，类似的长期待处理问题可能存在。此处替换为数据中存在的另一项积压。）
- **#86342** [MissingAgentHarnessError race](https://github.com/openclaw/openclaw/issues/86342) (未标注优先级)：创建于昨日（2026-05-25），一个由非原子操作引起的竞态问题，导致Agent Harness丢失。该问题发生频率较高（72小时内28次），需要及时定位。

---

## 横向生态对比

好的，这是基于您提供的各项目社区动态摘要生成的横向对比分析报告。

---

# 开源AI智能体项目横向对比日报 — 2026-05-27

**报告周期：** 2026-05-26 至 2026-05-27
**数据来源：** OpenClaw、NanoBot、ZeroClaw、PicoClaw 公开数据

---

## 1. 今日横向概览

今日，OpenClaw 项目高度活跃，发布了两个新版本并处理大量 Issue/PR，核心焦点在于修复事件循环饱和、子代理任务丢失等关键稳定性问题。NanoBot 和 ZeroClaw 则处于活跃的功能开发与问题修复并行阶段，前者重点推进 MCP 协议和 Dream 系统重构，后者则解决了 Email 频道的稳定性问题并着手应对 DeepSeek-V4 兼容性挑战。PicoClaw 活跃度相对较低，主要活动集中在合并多项渠道增强和工具修复 PR，但其社区已对版本更新缓慢表达了不满。

## 2. 各项目活跃度对比

| 项目 | 新开/活跃 Issue | 新提交/待合并 PR | 今日版本发布 | 事实性备注 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 171 条 | 265 条 | `v2026.5.26-beta.1` `v2026.5.25-beta.1` | 数据包含更新总数，Issue/PR 量级远超其他项目。新版本聚焦启动性能和回复速度。 |
| **NanoBot** | 4 条 | 19 条 (13待合并) | 无 | 社区热点（LLM流中断）与核心功能重构（Dream系统）并行。 |
| **ZeroClaw** | 6 条 | 35 条 (29待合并) | 无 | 社区关注点明确，集中在DeepSeek-V4兼容性一个高热度Issue上。 |
| **PicoClaw** | 5 条新，2条关闭 | 21条 (8待合并) | `v0.2.9-nightly.20260527` | 活跃度最低，合并的PR多为渠道和工具修复，社区存在未满足的版本发布期待。 |

## 3. OpenClaw 与同类对照

- **活动量与关注度**：OpenClaw 今日的 Issue 和 PR 活动总量（超过 380 条更新）显著高于其他三个项目，占据绝对主导地位。其社区讨论的子代理结果丢失（`#44925`）和事件循环饱和（`#75378`）等问题，是其他项目未见的系统性痛点，反映出其用户正在更高并发和更复杂的工作流中运行项目。

- **技术重点**：OpenClaw 的重点在于解决高负载下的**底层稳定性**（如事件循环、文件描述符泄漏、会话状态管理）以及**子代理（Subagent）的生命周期管理**。相比之下，NanoBot 的重心在 **MCP 协议集成** 和内部 **Dream 系统重构**；ZeroClaw 则在应对具体 **API 兼容性**（DeepSeek-V4）和渠道修复；PicoClaw 的侧重更偏向于**多渠道接入和平台扩展**。

- **社区讨论面**：OpenClaw 的社区讨论深度和广度远超同类。不仅有大量关于功能请求和Bug报告的细节讨论，还出现了用户对性能退化（`#76562`）的失望情绪。而其他项目的新Issue讨论深度相对较浅，主要集中在具体的功能实现和单个Bug报告上。

## 4. 共同出现的技术方向

今日有多个项目都出现了以下需求：

- **子代理/异步任务管理**：
    - **OpenClaw**：多个Issue（如`#44925`、`#75378`）用户关注子代理结果丢失、并行子代理导致事件循环饱和。
    - **PicoClaw**：PR `#2830` 合并，实现了 `spawn` 子代理异步结果的显式交付策略。
    - **观察**：这表明个人助手在处理复杂、长期运行的并行任务时，其可靠性和可观测性是社区的共同核心痛点。

- **配置与代理(Proxy)兼容性**：
    - **OpenClaw**：`#81249` 报告启用代理时本地Ollama嵌入失败（已关闭）。
    - **ZeroClaw**：`#6901` 合并，修复了 Provider 传输诊断错误链保留问题，有助于排查代理问题。
    - **观察**：企业级用户在使用后端代理访问外部API时，项目与代理配置的兼容性和诊断能力是普遍关注的运营需求。

- **适配新模型API**：
    - **ZeroClaw**：`#6059` DeepSeek-V4新API格式不兼容，引发社区广泛讨论。
    - **PicoClaw**：`#2674` OpenAI Codex OAuth返回空响应，`#2948`/`#2947` Claude新模型参数和ID兼容性问题。
    - **观察**：随着大模型厂商频繁迭代API，开源项目快速适配新模型格式成为一个持续性的挑战，直接影响用户体验。

- **跨平台与桌面应用**：
    - **OpenClaw**：`#75` 是点赞数最高的功能请求，要求官方提供跨平台桌面应用。
    - **PicoClaw**：`#2851` 合并，添加 Yocto/OpenEmbedded 层以支持专业嵌入式Linux。
    - **观察**：用户不满足于CLI和Web界面，对原生桌面集成和更广泛的平台覆盖有明确需求。

## 5. 差异化定位分析

| 维度 | OpenClaw | NanoBot | ZeroClaw | PicoClaw |
| :--- | :--- | :--- | :--- | :--- |
| **功能侧重** | 全功能框架，**核心引擎稳定性**与**架构重构**并重 | **个人助手**，强调**自我改进（Dream）** 与**多Agent协作** | **开发者工具**，强调**TUI交互**、**协议扩展（GitAgent）** 与**安全沙箱** | **嵌入式/边缘场景**，专注**资源受限平台**支持与**多渠道适配** |
| **目标用户** | 高级用户、寻求构建复杂生产级系统的开发者 | 关注智能体和长期记忆优化的个人用户与研究者 | 追求灵活配置和沉浸式开发体验的技术人员 | 在特定嵌入式或移动平台上部署的个人用户与IoT开发者 |
| **技术架构** | 基于`main-repo`，组件解耦，存在大量关于事件循环和状态管理的演进 | 模块化设计，重点在于Skill和Dream系统这类内部机制 | 强调RPC和`zerocode TUI`，注重信道与工具的分离 | 侧重渠道抽象和平台兼容性（如ARM、RISC-V） |

## 6. 社区活跃度记录

基于今日的Issue/PR数量、版本发布频率和社区讨论深度，各项目活跃度可分层如下：

- **Tier 1 (高活跃)**：**OpenClaw**。其Issue和PR更新总量远超其他项目，并发布了两个正式Beta版本，社区讨论焦点深入，用户反馈活跃。
- **Tier 2 (中等活跃)**：**NanoBot** 和 **ZeroClaw**。两者均有稳定的Issue和PR提交，且有正在进行的核心功能开发和新问题响应。社区讨论集中在少数几个高热度Issue上。
- **Tier 3 (一般活跃)**：**PicoClaw**。活动量相对较低，多为维护性合并和Bug修复，社区已出现对版本发布节奏的批评。

## 7. 有证据支撑的观察

1. **个人AI助手的可靠性瓶颈已从“模型能力”转向“代理运行时稳定性”**：OpenClaw 的多个P1级Bug（如事件循环饱和、子代理静默丢失）和 NanoBot 的LLM流中断问题，共同指向了一个事实：当代理需要处理复杂、多步骤、长时间的任务时，其底层运行时框架的稳定性成为了最突出的挑战。
2. **开源项目面临“新模型API兼容性”的持续压力**：ZeroClaw 的 DeepSeek-V4 问题和 PicoClaw 的 Claude 系列模型兼容性问题表明，大模型厂商的API迭代（特别是Thinking模式、新参数）给下游开源项目带来了显著且频繁的维护负担。
3. **用户对“桌面原生”和“跨平台”体验的渴望日益强烈**：OpenClaw 社区中关于跨平台桌面应用的高票请求，与 PicoClaw 为嵌入式平台进行专业架构扩展形成了鲜明对比，共同指向了用户不满足于当前工具链，对更完整、更便携的集成体验有更高期待。
4. **“异步任务”和“子代理”成为下一代智能体架构的核心命题**：OpenClaw 和 PicoClaw 今日的工作都直接涉及子代理的生命周期管理和结果交付，这反映出社区正在从单次对话、单任务执行，向复杂的、并行的代理间协作演进，而现有系统的支持尚不成熟。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，这是根据您提供的 NanoBot 项目 GitHub 数据生成的 2026 年 5 月 27 日项目动态日报。

---

# NanoBot 项目日报 - 2026-05-27

## 今日活动概览

过去 24 小时内，NanoBot 项目活跃度较高，共提交 4 个新 Issue 和 19 个 Pull Request。其中，13 个 PR 仍处于待合并状态，6 个已成功合并或关闭。项目未发布新版本。社区反馈主要集中在 **LLM 流中断** 和 **对话历史数据不完整** 两个 Bug 上，同时有多个 PR 正在推进 **MCP 协议支持**、**Dream 系统重写** 和 **多 Agent 协作** 等核心功能。

## 项目进展

今日有 6 个 PR 被合并或关闭，推进了多项功能与修复：

- **WebUI 稳定性修复**：`#3944` 已合并，修复了 WebUI 聊天会话刷新时可能丢失新创建的聊天内容的问题。
- **Codex 提供者错误处理**：`#4009` 已关闭，改进了 Codex 提供商调用失败时的错误提示信息。
- **Docker 集成优化**：`#4008` 已关闭，在 Docker 部署中挂载了 `agentmail` CLI，并添加了与之对应的 skill。
- **Telegram Webhook 模式**：`#3996` 已关闭，为 Telegram 适配器添加了可选的 Webhook 模式，长轮询仍为默认配置。
- **代码质量提升**：`#3981` 已关闭，为 WebUI 启用了 ESLint 代码检查，提升了前端代码规范性。
- **搜索 API 适配**：`#4004` 已关闭，更新了 Kagi 网络搜索 API 集成，以适配其最新的 v1 API 接口。

## 社区热点

今日社区讨论的核心集中在两个关键问题上：

1. **LLM 流中断问题（`#4013`）**：用户 `@mxnbf` 报告从 0.1.5post2 版本升级到 0.2.0 后，LLM 调用经常因“stream stalled for more than 90 seconds”而中断，严重影响了正常使用。该问题截至发稿时尚未收到维护者回应，建议项目组优先关注。

2. **Dream 系统自我改进机制讨论（`#3973` 与 `#3990`）**：用户 `@chxuan` 在 `#3973` 中详细阐述了 Dream 系统存在的“饥饿问题”和“缺乏实时学习能力”两大局限，认为其只依赖 `history.jsonl` 文件导致自我改进效果受限。同日，`@chengyongru` 提交了 `#3990` 的 PR，力求将两阶段内存合并为单阶段，并用 AgentLoop 驱动 Dream，直接回应了上述问题。这表明社区对 Dream 系统的演进方向有高度共识。

- **热点链接**：
    - Issue `#4013`: [https://github.com/HKUDS/nanobot/issues/4013](https://github.com/HKUDS/nanobot/issues/4013)
    - Issue `#3973`: [https://github.com/HKUDS/nanobot/issues/3973](https://github.com/HKUDS/nanobot/issues/3973)
    - PR `#3990`: [https://github.com/HKUDS/nanobot/pull/3990](https://github.com/HKUDS/nanobot/pull/3990)

## Bug 与稳定性

今日报告的 Bug 按严重程度排列如下：

1.  **严重：LLM 流中断（`#4013`）**
    - **描述**：从 0.1.5post2 升级到 0.2.0 后，LLM 调用频繁中断，错误提示为“stream stalled for more than 90 seconds”。该问题使几乎无法完成任何实质性工作。
    - **状态**：未修复，暂无对应 PR。
    - **链接**：[https://github.com/HKUDS/nanobot/issues/4013](https://github.com/HKUDS/nanobot/issues/4013)

2.  **中高：对话历史数据不完整（`#4006`）**
    - **描述**：对话历史中存在孤立的 `tool result` 消息，其 `tool_call_id` 在前面的 `assistant` 消息中找不到对应项。这可能导致严格校验的 API 拒绝请求或轨迹渲染器报错。
    - **状态**：已由 PR `#4011` 提出修复方案，正在等待合并。
    - **链接**：[https://github.com/HKUDS/nanobot/issues/4006](https://github.com/HKUDS/nanobot/issues/4006)

3.  **高：MCP 重连失败（`#4012`）**
    - **描述**：当 MCP 服务器断开或会话 drop 时，客户端因 `_mcp_connected` 标志未被重置而无法重新连接。
    - **状态**：已由 PR `#4012` 提出修复方案（新增重连回调并重置连接状态），正在等待合并。
    - **链接**：[https://github.com/HKUDS/nanobot/pull/4012](https://github.com/HKUDS/nanobot/pull/4012)

## 功能请求归类

用户提出的新功能需求已有大量对应的 PR 在推进，主要集中在以下几个方面：

- **Agent 能力增强**：
    - **语音输出**：`#4010` 提议为 Agent 增加 TTS 语音输出功能，以形成完整的语音对话闭环。
    - **自循环与自我反思**：`#4015` 的 PR 提出在工具执行后增加观察-反思提示，以最小代价实现 Agent 的自我循环优化。
    - **多 Agent 协作**：`#3992` 的 PR 实现了跨 Agent 实例的消息总线，支持多个 Agent 实例间的通信与协作。

- **系统架构与集成**：
    - **Dream 系统重构**：`#3990` 的 PR 旨在解决长期存在的 Dream 系统“饥饿问题”，通过单阶段合并和 AgentLoop 驱动来提升自我改进能力。
    - **MCP 协议增强**：`#4014` 的 PR 增加了对 MCP 服务器 `tools/list_changed` 通知的支持，可以动态更新工具列表而无需断开连接。
    - **GitAgent 协议支持**：`#4005` 的 PR 提议引入 GitAgent 协议，使 NanoBot 创建的 Agent 更易于移植和被发现。

- **用户体验与安全**：
    - **工作区沙箱**：`#4007` 的 PR 计划开放工作区沙箱能力，为用户提供不同级别的安全执行环境选项。
    - **Skill 发现命令**：`#3968` 的 PR 提供了一个 `/skill` 斜杠命令，可以让用户方便地列出当前所有可用的技能。

## 用户反馈摘要

- **升级困扰**：用户 `@mxnbf` 在 `#4013` 中表示，从 0.1.5post2 升级到 0.2.0 后遇到流中断问题，导致工作无法进行。这反映出新版本可能在兼容性或稳定性上存在回归问题。
- **功能完善诉求**：用户 `@olgagaga` 在 `#4010` 中提到，NanoBot 已经支持语音输入，但无法语音输出，希望完善这一功能闭环。
- **核心机制反馈**：用户 `@chxuan` 在 `#3973` 中详细分析了 Dream 系统的不足，指出其依赖单一历史文件导致“饥饿”和无法实时学习，体现了社区对项目核心功能有深入思考和改进期待。

## 待处理积压

以下为长期未合并或未响应的 PR，建议维护者关注：

- **PR `#1443`**：关于解耦心跳推理与通知的功能，由 `@phelps-sg` 于 2026-03-02 提交，至今已近 3 个月。该 PR 为心跳 Agent 提供了更灵活的通知策略，看起来是稳定的功能增强。
    - **链接**：[https://github.com/HKUDS/nanobot/pull/1443](https://github.com/HKUDS/nanobot/pull/1443)

- **PR `#2515`**：一个大型的“Pluggable Memory Framework”，旨在集成 Mem0 / Graphiti 等多后端记忆支持，由 `@ALIZE126` 于 2026-03-26 提交，至今已 2 个月。
    - **链接**：[https://github.com/HKUDS/nanobot/pull/2515](https://github.com/HKUDS/nanobot/pull/2515)

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 — 2026-05-27

## 今日活动概览

过去 24 小时内，ZeroClaw 仓库新增 6 个 Issue（全部开放），提交 35 个 PR（其中 6 个被合并/关闭，29 个仍待合并）。无新版本发布。社区讨论集中在 DeepSeek-V4 API 不兼容问题（#6059，13 条评论）以及多项围绕 TUI 快捷键、定时任务路由、Agent 技能冷却等功能的修复与增强 PR。合并的 2 个 PR 主要修复了 Email 频道附件路径解析和 Provider 传输层诊断错误链保留问题。

## 版本发布

无（今日无新版本发布）。

## 项目进展（今日合并/关闭的重要 PR）

| PR | 标题 | 标签 | 说明 |
|---|---|---|---|
| [#6512](https://github.com/zeroclaw-labs/zeroclaw/pull/6512) | fix(channels/email): html body rendering, subject threading, attachment path resolution | bug, size:S, risk:medium, 涉及多个channel标签 | 修复 Email 频道三个问题：默认主题硬编码、Markdown 以纯文本发送、附件路径解析失败。 |
| [#6901](https://github.com/zeroclaw-labs/zeroclaw/pull/6901) | fix(providers): preserve full reqwest error chains in transport/log diagnostics | bug, size:XS, risk:medium, provider:openai/anthropic/compatible/openrouter | 保留 Provider 传输错误的完整 `reqwest::Error` 链，使日志诊断显示根因（超时/DNS/TLS 等）。 |

这两项合并解决了影响邮件通道可用性的稳定性和诊断问题。

## 社区热点

### 1. [Issue #6059 — [Bug]: Incompatible with DeepSeek-V4 API format](https://github.com/zeroclaw-labs/zeroclaw/issues/6059)
- **标签**: bug, risk:high, provider:deepseek, priority:p1, status:in-progress
- **活跃度**: 13 条评论，4 个 👍
- **诉求**: 用户使用 DeepSeek-V4-Pro 和 DeepSeek-V4-Flash 时遇到错误，疑似与 reasoning/thinking 模式相关。当前代码尚不支持 DeepSeek-V4 新 API 格式，导致 S2 级降级行为。
- **维护者回应**: Issue 已标记 `status:in-progress`，表明正在修复中。

### 2. [Issue #6909 — [Feature]: computer-use support](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)
- **标签**: enhancement, risk:high, tool:browser, type:rfc, status:accepted
- **诉求**: 希望 ZeroClaw 增加屏幕截图和鼠标/键盘事件控制能力，类似 OpenAI Codex / 开源项目 Peekaboo。维护者已接受该 RFC，但尚无对应 PR。

## Bug 与稳定性

### 严重 Bug（risk:high 或 severity S2）

| Issue/PR | 描述 | 状态 | 修复 PR |
|---|---|---|---|
| [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) | DeepSeek-V4 API 格式不兼容，Thinking 模式导致报错 | 开放，进行中 | 无对应 PR |
| [#6944](https://github.com/zeroclaw-labs/zeroclaw/issues/6944) | 交互模式中 `[system]` 日志行与对话输出混杂，影响可读性 | 开放 | 已有 [PR #6947](https://github.com/zeroclaw-labs/zeroclaw/pull/6947) 提议将交互模式默认日志级别改为 WARN |
| [#6908](https://github.com/zeroclaw-labs/zeroclaw/pull/6908) | OpenAI 初次配置时不能选择 Codex 订阅认证（只支持 API Key） | 开放 PR | 该 PR 正在等待审查 |
| [#6684](https://github.com/zeroclaw-labs/zeroclaw/pull/6684) | Skill 冷却机制 `is_on_disk_cooldown` 未在 `SkillManageTool` patch 路径中实际执行 | 开放 PR（需作者操作） | 该 PR 待作者回应 |

### 其他修复

- [#6934](https://github.com/zeroclaw-labs/zeroclaw/pull/6934) — Discord Gateway 预检 429 错误不再被标记为致命错误，允许重试退避。
- [#6953](https://github.com/zeroclaw-labs/zeroclaw/pull/6953) — SiliconFlow 默认 URL 从 `.cn` 改为国际端点 `.com`，解决 Key 不匹配问题。

## 功能请求归类

| Issue/PR | 标题 | 类别 | 状态 |
|---|---|---|---|
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | computer-use support（屏幕交互） | 新能力 | RFC 已接受，等待实现 |
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) | Route scheduled tasks through orchestrator message pipeline | 架构改进 | 开放 RFC |
| [#6937](https://github.com/zeroclaw-labs/zeroclaw/issues/6937) | Document attachment path validation boundary（API 文档） | 文档 | 开放，已有对应 PR #6949 |
| [#6950](https://github.com/zeroclaw-labs/zeroclaw/issues/6950) | TUI: 为无 F 键键盘添加 Alt+1~5 快捷键 | UI 改进 | 开放，已有对应 PR #6952 |
| [#6924](https://github.com/zeroclaw-labs/zeroclaw/pull/6924) | Skill 中新增 `builtin` 和 `composio` 工具类型 | 能力扩展 | 开放 PR |
| [#6920](https://github.com/zeroclaw-labs/zeroclaw/pull/6920) | 运行时执行时强制 `allowed_tools` / `denied_tools` 过滤 | 安全强化 | 开放 PR |

## 用户反馈摘要

- **DeepSeek-V4 兼容性问题**（#6059）：用户明确提到使用 DeepSeek-V4-Pro 和 V4-Flash 时遇到 Thinking 相关的报错，且未提供有效的 workaround。社区在该 Issue 下展开 13 条讨论（内容未获取），表明该问题影响了多位用户的实际使用。
- **交互模式日志干扰**（#6944）：用户反映在 `zeroclaw agent -a default` 交互模式下，`[system] INFO/WARN` 日志与模型回复交错显示，阅读困难。该问题已有对应 PR #6947 提供解决方案。
- **TUI 键盘兼容性**（#6950）：用户报告 Compact 键盘（如 Logitech MX Keys Mini）缺少 F1–F12 物理键，导致无法切换 TUI 模式。社区迅速提交 PR #6952 添加 Tab/Shift+Tab 替代方案，体现了良好的响应速度。

## 待处理积压

下列 Issue 或 PR 已存在较长时间但仍未有实质性进展，需要维护者关注：

| 编号 | 标题 | 创建时间 | 状态/障碍 |
|---|---|---|---|
| [#6684](https://github.com/zeroclaw-labs/zeroclaw/pull/6684) | fix(skills): enforce cooldown in skill_manage patch action | 2026-05-15 | 标记 `needs-author-action`，作者未回应 |
| [#6667](https://github.com/zeroclaw-labs/zeroclaw/pull/6667) | feat(skills): background review fork + skill_manage tool | 2026-05-14 | 标记 `needs-author-action`，XL 级 PR |
| [#6688](https://github.com/zeroclaw-labs/zeroclaw/pull/6688) | fix(agents): delegate agents respect skills.prompt_injection_mode config | 2026-05-15 | 标记 `needs-author-action` |
| [#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) | feat: introduce zerocode TUI, RPC socket transport, etc. | 2026-05-22 | 标注 `DO NOT MERGE`，已知问题较多（Delegates 缺失、fallback 行为需重接），需进一步验证 |

以上积压项均涉及 Skill 系统、Agent 子代理或大型架构变更，建议维护者优先跟进作者反馈或明确安排计划。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，这是为您生成的 PicoClaw 项目动态日报。

---

# PicoClaw 项目日报 | 2026-05-27

## 今日活动概览

过去24小时内，PicoClaw 项目社区活跃度较高，共有7条Issue更新和21条PR更新。其中，5个新Issue侧重于功能请求和Bug报告，2个旧Issue关闭。Pull Request方面，共有13个PR被合并或关闭，主要集中在Bug修复和功能优化，另有8个PR仍在待合并状态。此外，项目发布了新的Nightly构建版本 **v0.2.9-nightly.20260527**，为自动化构建，可能不稳定。

## 版本发布

### Nightly Build: v0.2.9-nightly.20260527.28ec5793
- **类型**: 自动化构建版本，可能不稳定。
- **变更日志**: [v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)
- **主要变化**: 此版本为每日自动构建，包含了截至 `main` 分支的最新代码。建议主要用于测试和尝鲜，生产环境请谨慎使用。
- **破坏性变更/迁移注意事项**: Nightly版本无明确说明，使用前建议备份配置。

## 项目进展

今日有多个重要的 Pull Request 被合并或关闭，推动项目在多个方面取得进展：

- **平台与架构支持**: PR [#2851](https://github.com/sipeed/picoclaw/pull/2851) 为 PicoClaw 添加了 Yocto/OpenEmbedded 层（meta-picoclaw），简化了在专业嵌入式Linux系统上的部署。
- **消息渠道增强**:
  - Telegram 渠道新增了[商务模式](https://github.com/sipeed/picoclaw/pull/2845)和[访客模式](https://github.com/sipeed/picoclaw/pull/2849)支持。
  - 飞书（Feishu）渠道[修复了硬编码频道名称的问题](https://github.com/sipeed/picoclaw/pull/2846)，多实例部署时能正确区分。
  - 微信渠道[支持了多账号配置](https://github.com/sipeed/picoclaw/pull/2883)。
- **核心机制优化**:
  - 合并了关于 **steering-heavy turns**（强导向性对话）的最终回复渲染优化（PR [#2844](https://github.com/sipeed/picoclaw/pull/2844)）和回复发送修复（PR [#2840](https://github.com/sipeed/picoclaw/pull/2840)）。
  - 引入了 **spawn** 子代理异步结果的显式交付策略（PR [#2830](https://github.com/sipeed/picoclaw/pull/2830)），增强了代理编排的可控性。
- **工具修复**:
  - 修复了 `exec` 工具中相对路径被错误解析为根绝对路径的安全检查问题（PR [#2826](https://github.com/sipeed/picoclaw/pull/2826), [#2750](https://github.com/sipeed/picoclaw/pull/2750)）。
  - 修复了 `web_search` 工具配置的YAML支持问题，并使 DuckDuckGo 成为默认搜索提供商（PR [#2647](https://github.com/sipeed/picoclaw/pull/2647)）。

## 社区热点

### 1. 核心功能需求：Streaming HTTP请求支持 (#2404)
- **链接**: [Issue #2404](https://github.com/sipeed/picoclaw/issues/2404)
- **热度**: 8条评论，1个点赞
- **诉求**: 用户 [@OuSatoru](https://github.com/OuSatoru) 提议在配置文件中增加 `"streaming": true` 选项，以支持向LLM后端发起流式HTTP请求，这类似于OpenAI Python客户端的 `stream=True` 功能。
- **分析**: 这是一个社区呼声较高的增强请求。流式响应对提升用户体验（减少等待时间，逐字显示）至关重要。该Issue处于开放状态且最近有更新，说明维护者和社区仍在关注此功能。

### 2. Bug讨论：Codex OAuth 返回空响应 (#2674)
- **链接**: [Issue #2674](https://github.com/sipeed/picoclaw/pull/2674?target=blank)
- **热度**: 6条评论，4个点赞
- **诉求**: 用户 [@geekgonecrazy](https://github.com/geekgonecrazy) 报告了在使用OpenAI Codex OAuth提供商时，助手会返回空响应。尽管模型已正常输出，但PicoClaw最终只显示“空响应”的退避提示。
- **分析**: 此问题影响了通过OAuth方式使用ChatGPT后端的用户，点赞数较高表明影响面可能不小。虽然标记为“stale”，但用户一直在跟进评论，值得维护者重点关注。

## Bug 与稳定性

以下为今日报告的Bug，按严重程度排列：

- **严重**:
  - [OpenAI Codex OAuth 返回空响应](https://github.com/sipeed/picoclaw/issues/2674)：用户通过ChatGPT后端使用时，助手响应为空。尚未有明确修复PR。
  - [RISC-V上.deb版本的OpenAI模型不可用](https://github.com/sipeed/picoclaw/issues/2887)：特定平台和模型组合的功能性问题，影响了在RISC-V架构上的用户。

- **中等**:
  - [微信渠道发送图片触发智谱API错误1210](https://github.com/sipeed/picoclaw/issues/2943)：在特定渠道（微信）使用特定视觉API（智谱GLM-5-Turbo）时，因参数错误导致失败。
  - [Termux环境下X509证书错误](https://github.com/sipeed/picoclaw/pull/2949)：在移动终端Termux中运行时，所有HTTPS请求失败。

- **低严重度/配置修复**:
  - [`claude-opus-4-7` 模型温度参数废弃](https://github.com/sipeed/picoclaw/pull/2948)：发送`temperature`参数给该模型会导致400错误。
  - [`claude-sonnet-4.6` 模型ID格式错误](https://github.com/sipeed/picoclaw/pull/2947)：默认配置中的模型ID使用了点而非连字符，导致API 404错误。

（注：上述Bug中，RISC-V问题、微信渠道问题目前无直接对应的修复PR，而Termux、Claude模型相关的问题已有对应的修复PR提出。）

## 功能请求归类

- **流式响应**: 用户 [@OuSatoru](https://github.com/OuSatoru) 在 Issue [#2404](https://github.com/sipeed/picoclaw/issues/2404) 中建议增加配置项以支持流式HTTP请求。
- **UI/UX改进**: 用户 [@xhynice](https://github.com/xhynice) 在 Issue [#2952](https://github.com/sipeed/picoclaw/issues/2952) 中提出多个前端改进需求，包括模型提供商下拉选择、Key复用、通过API测试连接自动获取模型列表并一键添加等。
- **异步结果交付**: 功能请求 PR [#2829](https://github.com/sipeed/picoclaw/issues/2829) 和已合并的 PR [#2830](https://github.com/sipeed/picoclaw/pull/2830) 涉及为`spawn`子代理的异步结果设定明确的交付策略，增强代理编排能力。

## 用户反馈摘要

- **对版本发布缓慢的抱怨**: 用户 [@xhynice](https://github.com/xhynice) 在 Issue [#2952](https://github.com/sipeed/picoclaw/issues/2952) 中直接反应“好久没发新版本了”，并列举了多个未解决的问题，包括`exec`命令的`actions:run`问题、QQ渠道重启Bug以及agent.md遵循问题。这反映了用户对稳定版本更新的期待。
- **对特定场景的优化需求**: 用户 [@bogdanovich](https://github.com/bogdanovich) 在 Issue [#2843](https://github.com/sipeed/picoclaw/issues/2843) 和相关PR [#2844](https://github.com/sipeed/picoclaw/pull/2844)中，深入讨论了在涉及多工具调用的强导向性对话中，PicoClaw最终回复可能过度关注最后一轮输入的问题。这显示了高级用户对对话交互质量的精细化追求。

## 待处理积压

- **待合并的重要PR**:
  - [PR #2551](https://github.com/sipeed/picoclaw/pull/2551) 提出标准化频道识别，使其与提供商类型解耦，以便支持同一提供商的多实例。此PR已打开超过40天，对架构影响较大，维护者可能需考虑其合并策略。
  - [PR #2239](https://github.com/sipeed/picoclaw/pull/2239) 提议修改Docker Compose以使用`privileged`权限，已打开近两个月，可能已被社区或维护者认为非最佳实践，但仍需明确回应。
- **长期未响应的严重Bug**:
  - [#2674](https://github.com/sipeed/picoclaw/issues/2674) Codex OAuth空响应问题尽管被标记为“stale”，但用户仍在评论，表明问题并未解决，需要维护者重新评估和响应。

</details>