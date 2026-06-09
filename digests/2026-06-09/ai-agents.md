# OpenClaw 生态日报 2026-06-09

> Issues: 500 | PRs: 470 | 覆盖项目: 4 个 | 生成时间: 2026-06-09 02:12 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 — 2026-06-09

## 1. 今日活动概览

过去 24 小时（截至 2026-06-09），OpenClaw 仓库收到 **500 条 Issue 更新**（新开/活跃 441，关闭 59）和 **470 条 PR 更新**（待合并 331，已合并/关闭 139）。发布 **2 个新版本**（v2026.6.5-beta.5 和 v2026.6.5-beta.3），主要修复 QQBot 推理/思考框架泄漏、MCP 工具结果格式强制转换，以及部分平台包依赖问题。社区讨论集中于 ChatGPT 5.x 传输失败、Feishu 流式卡片截断、会话上下文混淆等回归 Bug，同时多项长期存留的功能请求和安全性 Issue 仍在等待维护者决策。

## 2. 版本发布

### v2026.6.5-beta.5 · v2026.6.5-beta.3
**发布时间**：2026-06-05
**变更亮点**：
- **QQBot**：模型推理/思考框架（`<thinking>`）在原生发送前被剥离，避免原始内容泄漏到频道回复。
- **MCP 工具结果**：自动强制转换 `resource_link`、`resource`、`audio`、格式错误的图片以及未来其他新类型，提高兼容性。
- **Docker 构建**（beta.3 中隐含）：修复 `store seed` 只包含当前架构的包，避免跨平台包被错误打包。

两个版本内容基本一致，beta.5 可能包含更细的 bug 修复。**破坏性变更**：无明确说明；**迁移注意事项**：如果使用了 QQBot 并且依赖 `<thinking>` 标签的原始输出，需注意接收到的消息已被清理。

参考：[v2026.6.5-beta.5](https://github.com/openclaw/openclaw/releases/tag/v2026.6.5-beta.5) · [v2026.6.5-beta.3](https://github.com/openclaw/openclaw/releases/tag/v2026.6.5-beta.3)

## 3. 项目进展

今日关闭/合并的 PR 中，以下较为关键：

- `fix(openai): honor configured embedding model input limits` (#91430) – 修复第三方 OpenAI 兼容嵌入模型输入限制小于默认值时索引失败的问题。
- `fix: bound native hook relay lifetime` (#91550) – 为原生钩子中继添加超时机制，防止读取 stdin 时永久阻塞（fixes #90993）。
- `docs(exec): correct host=node auto-routing under an active sandbox` (#89439) – 更正文档中关于沙箱环境下 `host=node` 路由的描述（fixes #61009）。
- `fix(whatsapp): emit hooks for auto-replies` (#67477) – WhatsApp 自动回复现在会正确触发插件钩子，完善消息发送事件链路。
- `feat: canonicalize Codex protocol JSON asset ordering` (#91507) – 对 Codex 协议生成的 JSON 资产进行键/数组排序，减少无意义变更行数。
- `fix(telegram): restore /compact on generic message ingress` (#89588) – 修复 Telegram 原生 `/compact` 命令无法返回可见回复的问题。
- `fix(memory-core): write Deep Sleep summary to DREAMS.md` (#91188) – Deep Sleep 阶段正确写入 `## Deep Sleep` 摘要到 `DREAMS.md`。
- `refactor(sqlite): drop unused async Kysely driver from node:sqlite dialect` (#91526) – 清理死代码，移除未使用的异步 Kysely 驱动。
- `fix(ui): prevent false busy state in Control UI webchat after response completion` (#87474) – 修复 Control UI 在回复完成后仍显示“处理中”的伪忙状态。

这些 PR 解决了稳定性、文档、跨平台兼容和功能正确性问题。链接见原文列表。

## 4. 社区热点

评论数最多的 Issues 反映了当前用户最关心的问题：

- **#48788**（18 评论）：`feat: centralized filename encoding utility` – 讨论构建统一的文件名编码工具，处理多编码 Content-Disposition，以彻底解决 Feishu 中文文件名问题。
- **#32473**（17 评论）：`[Bug] control ui requires device identity` – 用户报告在 VPS（无安全上下文）下无法使用 Control UI，请求放宽 HTTPS/localhost 要求。
- **#90083**（15 评论）：`[Bug] OpenAI ChatGPT Responses transport fails` – 升级到 2026.6.1 后，gpt-5.4/5.5 推理失败，返回 `invalid_provider_content_type`，用户期待紧急修复。
- **#50090**（15 评论）：`Community Skill Development & ClawHub` – 讨论 ClawHub 技能生态建设，指出技能开发流程存在文档与实践脱节、“Driftnet”问题。
- **#32296**（14 评论）：`Agent replies to previous message instead of current` – 代理回复指向旧消息的会话上下文混乱问题，影响日常对话体验。
- **#88929**（12 评论，已关闭）：`Feishu streaming card: abnormal typewriter effect and truncated` – Feishu 流式卡片渲染异常，最终内容只留下一个字符，该 bug 今日被修复/关闭。

用户诉求集中于通道兼容性（Feishu、Discord、Telegram）、会话状态管理、安全/权限以及技能生态平台化。维护者在多个议题中推动“维护者评审”和“产品决策”标签，反映出部分功能需求长期等待方向确认。

## 5. Bug 与稳定性

| Bug Issue | 严重程度 | 描述 | 是否有 fix PR |
|-----------|---------|------|--------------|
| #90083 (P1) | 高 | OpenAI ChatGPT Responses 传输失败，gpt-5.4/5.5 报 `invalid_provider_content_type` | 无公开 PR |
| #32296 (P1) | 高 | 代理回复旧消息，会话上下文混淆 | 无公开 PR |
| #43367 (P1) | 高 | 多代理编排不稳定：并发添加导致配置覆盖、会话锁失败 | PR #91093 可能部分涉及，未直接关联 |
| #51396 (P1) | 高 | `clearUnboundScopes` 无条件剥离非本地客户端操作者作用域 | 无公开 PR |
| #49876 (P1) | 高 | Cron 会话在工具调用失败时输出幻觉内容 | 无公开 PR |
| #47975 (P1) | 中 | 子代理会话未正确终止，主会话无响应 | 无公开 PR |
| #88929 (P2) | 中 | Feishu 流式卡片截断（今日已关闭） | 有修复（未在 PR 列表中明确，Issue 已关闭） |
| #51429 (P2) | 中 | 工作路径被硬编码为 `/Users/wangtao` | 无公开 PR |
| #48573 (P2) | 中 | 嵌入式子代理会话泄露僵尸状态 | 无公开 PR |
| #41744 (P2) | 中 | Feishu 读取图片后媒体在发送前丢失 | 无公开 PR |
| #50442 (P2) | 中 | `backup create` 超时后残留大 .tmp 文件导致磁盘耗尽 | 无公开 PR |
| #51363 (P1) | 高 | Docker 沙箱容器名在同一主机多实例碰撞 | 无公开 PR |

多个高优先级 bug（P1）缺乏公开的修复 PR，尤其是 OpenAI 5.x 系列兼容性回归和会话逻辑错误，维护者需优先处理。

## 6. 功能请求归类

今日活跃 Issue 中涉及的功能请求及对应 PR：

| 功能 | Issue/PR | 当前状态 |
|------|----------|---------|
| 集中文件名编码工具（多编码 Content-Disposition） | #48788 | 开放，待产品决策 |
| 代理级成本预算（日/月 cap） | #42475 | 开放，待维护者审查 |
| 技能级模型路由（SKILL.md 中指定模型） | #43260 | 开放，待产品决策 |
| 技能优先级配置 | #50199 | 开放，待产品决策 |
| 预重置代理内存冲刷（/new 和每日重置时） | #45608 | 开放，讨论中 |
| 插件钩子缺失分布式追踪字段（messageId, runId, parentSpanId） | #50291 | 开放，待产品决策 |
| 系统事件优先级/绕过队列模式 | #50739 | 开放，讨论中 |
| 多会话架构：共享 LLM + 隔离会话 + 公共知识库 | #48874 | RFC，开放讨论 |
| 技能安装安全扫描集成 | #45031 | 开放，待产品决策 |
| 网关生命周期警告路由到专用通道 | #45565 | 开放，待产品决策 |
| 技能通过 crontab 推送后台消息 | #45778 | 开放，待安全评审 |
| Control UI 支持 MathJax/LaTeX 渲染 | #42840 | 开放，待产品决策 |
| 支持 YAML 配置文件 | #45758 | 开放，待产品决策 |
| 持久的自然语言规则学习 + 多提及回复语义 | #41366 | 开放，待产品决策 |
| 子代理 toolsAllow 前向传递 | PR #78441 | 开放，等待作者 |
| 频道回声/会话固定（多通道同步） | PR #88815 | 开放，等待作者 |
| Fast Talks 自动模式（快速/慢速切换） | PR #85104 | 开放，需行为证明 |

大多数功能请求处于“等待维护者评审/产品决策”阶段，表明社区需求活跃但治理流程存在延迟。

## 7. 用户反馈摘要

从 Issues 评论中提炼的典型用户痛点：

- **Feishu 流式卡片截断**（#88929）：用户抱怨开启 stream 后 typewriter 效果异常（一次只出1-2字符），最终内容只剩最后一个字符，所有文本丢失。
- **OpenAI gpt-5.x 回归**（#90083）：升级后无法使用，用户“升级到 2026.6.1 并运行配置迁移后直接报错”，希望尽快回滚或修复。
- **工作路径硬编码**（#51429）：中文用户报告 `openclaw` 新建 `/Users/wangtao` 文件夹并设工作区，质疑“这位 wangtao 是谁？”强烈不满。
- **Control UI 卡死**（#45698）：用户反映 Control UI 在打开一段时间后变得极其迟缓，最终完全卡死，影响日常操作。
- **内存管理混乱**（#43747）：三用户团队观察各自记忆管理行为不一致：一人做 chunking/embedding 存储，另一人直接存完整日志，第三人“无记忆”。
- **OPENCLAW_HOME 嵌套**（#45765）：设置 `export OPENCLAW_HOME=~/.openclaw` 后产生 `~/.openclaw/.openclaw` 目录，配置文件写入错误位置。
- **Docker 容器名冲突**（#51363）：同一宿主机运行 5+ 实例时 Sandbox 容器名碰撞，导致互相干扰。
- **备份残留大文件**（#50442）：`openclaw backup create` 超时退出后留下 `.tmp` 文件，磁盘空间被耗尽。

用户整体满意度中等，对新功能（如 MCP 结果强制类型转换）和持续的 bug 修复（Feishu 卡片、Telegram `/compact`）表示肯定，但对 P1/P2 回归问题（如 OpenAI 传输失败、会话混乱）感到不耐烦，希望提高响应速度。

## 8. 待处理积压

以下 Issue 或 PR 长时间未获得实质性回应或合并，且被标记为 `stale` + 高优先级，提醒维护团队关注：

| 编号 | 标题 | 创建时间 | 标签 | 当前状态 |
|------|------|---------|------|----------|
| #32473 | control ui requires device identity (HTTPS or localhost) | 2026-03-03 | P2, stale, regression | 已三周无新活动 |
| #50090 | Community Skill Development &

---

## 横向生态对比

好的，作为一名专注于 AI 智能体与个人 AI 助手开源生态的资深技术分析师，我将基于您提供的 2026-06-09 各项目动态，为您整理一份横向对比分析报告。

---

### 1. 今日横向概览

2026年6月9日，四个项目中 **OpenClaw** 以远超同侪的 Issue/PR 数量（470+ 及 500+）和版本更新（2个Beta版）领跑，社区讨论范围最广，但也面临大量 P1 级回归性 Bug 和待处理的功能请求积压。**NanoBot** 与 **Zeroclaw** 活跃度接近，前者集中于语音转录功能的系统性扩展，后者则在修复 Matrix 频道会话隔离等关键 Bug 上取得进展，同时社区发起了多项关于安全和架构的 RFC 讨论。**PicoClaw** 项目规模相对较小，今日主要侧重于代码质量加固（如类型断言安全检查）和小额渠道功能修复（如Telegram位置消息）。**

### 2. 各项目活跃度对比

| 项目 | 今日活跃 Issues | 今日活跃 PRs | Release 情况 | 事实性备注 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 441 新开/活跃 | 470 更新 (331 待合并) | v2026.6.5-beta.5 & beta.3 | 高活跃度；大量 P1 Bug（如 OpenAI 5.x 回归）无公开修复 PR，功能请求积压严重。 |
| **NanoBot** | 3 新开 | 37 更新 (21 待合并) | 无 | 中等活跃度；侧重语音转录功能扩展，并修复了核心安全漏洞（符号链接逃逸）和稳定问题。 |
| **Zeroclaw** | 48 新开/活跃 | 50 更新 (39 待合并) | 无 | 中等活跃度；成功合并了 Matrix 频道隔离等关键修复，社区关注 MCP 工具过滤和桌面交互等 RFC。 |
| **PicoClaw** | 2 活跃 | 19 更新 (10 待合并) | v0.2.9-nightly.20260609 | 活跃度较低；工作集中于代码质量改进（类型断言安全、错误链）、渠道功能修复（Telegram位置）和日志统一化。 |

### 3. OpenClaw 与同类对照

由于 **Zeroclaw** 与 **OpenClaw** 在功能定位上最为相似（均支持多通道、MCP 协议、Agent 编排），将二者进行对照：

- **活动量与规模**：**OpenClaw** 的活动规模（今日 500+ Issue / 470+ PR）远超 **Zeroclaw**（50 / 50），反映出其更庞大的用户基础和更高的社区关注度。
- **技术重点**：今日 **OpenClaw** 的技术重点在于修复大量回归性 Bug（如 OpenAI 5.x 传输失败、会话上下文混淆），并推动社区功能请求的决策。**Zeroclaw** 则侧重于解决具体的稳定性 Bug（如 Matrix 会话冲突、文件写入失败）和推进安全/架构类 RFC（如 OIDC 认证、命令行执行策略）。
- **社区讨论面**：**OpenClaw** 的社区讨论面更广，从通道兼容性（Feishu、Discord）、会话状态管理到技能生态（ClawHub）均有涉及。**Zeroclaw** 的讨论则更聚焦于技术架构和安全性，反映了其用户群体对底层控制力的需求。

### 4. 共同出现的技术方向

基于今日数据，发现以下跨项目的共同技术诉求：

- **会话与状态管理**：多个项目都在处理会话相关的稳定性问题。
    - **OpenClaw**: 代理回复旧消息 (#32296)，子代理会话泄露 (#48573)。
    - **Zeroclaw**: 成功修复了 Matrix 频道多实例会话冲突 (#6487)。
    - **NanoBot**: 修复了会话历史中孤立工具结果的异常 (#4219)。
- **渠道兼容性**：对特定消息渠道的适配和修复是各项目的共同工作。
    - **OpenClaw**: 修复了 Feishu 流式卡片截断 (#88929)、Telegram `/compact` 命令 (#89588)。
    - **Zeroclaw**: 修复了 Telegram 消息截断后 Markdown 格式混乱 (#6701)。
    - **PicoClaw**: 修复了 Telegram 位置消息被忽略 (#3052)。
- **工具/插件交互与安全**：Agent 与外部工具交互的稳定性和安全性在多个项目中被提及。
    - **NanoBot**: 修复了 `ExecTool` 符号链接逃逸漏洞 (#4221)。
    - **Zeroclaw**: 社区报告 `tool_filter_groups` 对 MCP 工具无效 (#6699)。
    - **OpenClaw**: 修复了 MCP 工具结果格式强制转换问题，并讨论了技能安装安全扫描 (#45031)。

### 5. 差异化定位分析

- **OpenClaw**: **功能全面，面向重度用户与企业级部署**。目标用户是希望构建复杂自动化工作流、多通道、多代理协作的个人或团队。技术架构最为复杂，拥有自己的技能生态（ClawHub）和编排引擎（多代理）。
- **NanoBot**: **注重易用性与快速迭代，面向个人助手场景**。今日显著的特点是“语音转录”功能的大幅扩展，显示出对多模态交互的重视。修复速度较快，社区反馈的 Bug 和功能请求能较快被 PR 响应，体现其敏捷开发文化。
- **Zeroclaw**: **强调安全性与架构可控，面向开发者和安全敏感场景**。社区讨论中，OIDC 认证、命令执行策略、安全执行层插拔等 RFC 占据了重要位置。其修复重点也常指向深层架构问题（如会话隔离）。**PicoClaw** 与 **Zeroclaw** 项目名相似，但定位不同。
- **PicoClaw**: **专注特定硬件平台（RISC-V）和轻量级部署**。今日工作集中在代码质量（类型安全）和基础功能修复，未参与主要功能竞赛。其对 RISC-V 平台的支持（#2887）是其独特的差异化亮点。

### 6. 社区活跃度记录

基于今日 Issue/PR 数量与发布记录，社区活跃度分层如下：

| 层级 | 项目 | 关键证据 |
| :--- | :--- | :--- |
| **第一梯队 (极高)** | **OpenClaw** | 日均 500+ Issue / 470+ PR 更新，且发布了 2 个 Beta 版本。 |
| **第二梯队 (中高)** | **NanoBot** & **Zeroclaw** | 日均 40-50 条 Issue/PR 更新，无版本发布但有稳定的核心功能合并。 |
| **第三梯队 (中低)** | **PicoClaw** | 日均 19 条 PR / 3 条 Issue 更新，发布了 1 个 nightly 构建。 |

### 7. 有证据支撑的观察

1.  **兼容性升级是普遍痛点**：多个项目都被兼容性问题困扰。**OpenClaw** 因升级导致 OpenAI 5.x 调用失败 (#90083)；**NanoBot** 和 **Zeroclaw** 都在修复特定第三方服务或模型的兼容性问题（如 Azure Gateway、Gemini 模型）。这表明快速迭代的 AI 底层模型和 API 对上游项目构成了持续的维护挑战。
2.  **会话状态管理是核心技术难题**：**OpenClaw**（#32296, #48573）、**NanoBot**（#4219）、**Zeroclaw**（#6487）不约而同地在处理会话相关问题。从简单的“回复错消息”到复杂的“会话泄露”和“级联删除”，表明如何管理长对话、多轮交互及其上下文，是 AI 智能体项目共同面临的核心技术瓶颈。
3.  **社区治理普遍存在“决策延迟”**：**OpenClaw** 今日报告中明确注明大量功能请求（如技能路由、安全扫描）处于“待产品决策”或“等待维护者评审”状态。**Zeroclaw** 的 #6699（MCP工具过滤）等关键问题也缺乏及时响应。这表明，当项目发展到一定规模后，如何高效地对社区较高的活跃度和功能请求做出决策，是所有项目面临的共同治理挑战。
4.  **平台差异化定位正在固化**：从今日动态看，**OpenClaw** 试图覆盖全部生态位，**NanoBot** 正通过强化“语音转录”等特色功能建立差异化优势，而 **Zeroclaw** 和 **PicoClaw** 则倾向于在“安全性”和“特定硬件支持”上深耕。这种分化有助于形成更健康、互补的开源生态。
5.  **用户迁移成本高**：从 **OpenClaw** 的 bug 报告（如 #51429 工作路径硬编码、#51363 Docker 容器名冲突）和 **Zeroclaw** 的破坏性变更（Matrix 会话隔离需手动迁移）可以看出，个人 AI 助手项目在快速迭代中，对用户已有配置和数据（尤其是会话和记忆）的兼容性处理不够完善，这构成了用户升级和迁移的隐性成本。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为 NanoBot 项目的 AI 智能体分析师，根据您提供的 2026-06-09 数据，我为您生成了以下项目动态日报。

---

# NanoBot 项目动态日报 | 2026-06-09

## 1. 今日活动概览
今日项目活跃度显著，共处理 37 条 Pull Request（其中 16 条已合并/关闭，21 条待合并），以及 7 条 Issue 更新（3 条打开，4 条关闭）。主要变化集中在语音转录（Transcription）功能的扩展、文件系统安全修复以及 WebUI 界面优化。社区对增强模型切换灵活性、上传文件分析等需求讨论热烈。无新版本发布。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日合并/关闭了多项重要 PR，标志着部分功能的完善与交付：

- **语音转录功能大幅扩展**：多个关于语音转录的 PR 被合并，统一纳入了新的 `transcription` 系统。具体包括：
    - **开放路由器支持**：[#4113](https://github.com/HKUDS/nanobot/pull/4113) 合并，新增 OpenRouter 作为转录提供商，用户可在统一凭证下路由 WebUI、桌面及聊天频道的语音转录。
    - **AssemblyAI支持**：[#4224](https://github.com/HKUDS/nanobot/pull/4224) 合并，将 AssemblyAI 作为仅用于转录的提供商集成。
    - **小米MiMo ASR支持**：[#4175](https://github.com/HKUDS/nanobot/pull/4175) 合并，增加了对国产小米 MiMo ASR 模型的支持，其接口基于 chat-completions 格式传输 base64 音频。
    - **全局语音输入共享**：[#4232](https://github.com/HKUDS/nanobot/pull/4232) 合并，将转录能力提升为全局功能，WebUI 和桌面端的语音输入均受益于此。
- **关键安全与稳定性修复**：
    - **修复恶意符号链接逃逸**：[#4221](https://github.com/HKUDS/nanobot/pull/4221) 合并，修复了 `ExecTool` 中通过相对路径的符号链接逃逸工作目录的安全漏洞。
    - **修复会话历史工具结果异常**：[#4219](https://github.com/HKUDS/nanobot/pull/4219) 合并，修复了在裁剪历史记录前，未能妥善处理孤立工具结果（orphan tool results）导致出错的问题。
    - **Azure网关兼容性**：[#4217](https://github.com/HKUDS/nanobot/pull/4217) 合并，为OpenAI兼容的提供商添加了 `extra_query` 配置，解决Azure样式网关需要 `?api-version=` 参数的问题。

## 4. 社区热点
今日社区讨论焦点集中在功能请求和国际化支持上：

- **讨论热点**：
    - **跨Agent消息协作**：[#3992](https://github.com/HKUDS/nanobot/pull/3992)
      虽然已关闭，但该 PR 实现了跨Agent实例的消息总线，允许Agent之间互相通信，是构建复杂自动化工作流的关键基础设施，得到了广泛关注。
    - **版本号显示**：由 Issue [#4233](https://github.com/HKUDS/nanobot/issues/4233) “在WebUI中显示版本号”引发的讨论。用户希望方便地查看当前版本，并获知是否有新版本可用。该Issue已被PR [#4235](https://github.com/HKUDS/nanobot/pull/4235) 和 [#4255](https://github.com/HKUDS/nanobot/pull/4255) 共同响应，后者计划在页头添加一个带实时PyPI更新通知的版本徽章。

## 5. Bug 与稳定性
今日报告的 Bug 主要围绕特定场景下的错误和稳定性问题，其中大部分已有对应的修复 PR：

- **[严重] 代码块分割导致渲染错误**：[#4250](https://github.com/HKUDS/nanobot/issues/4250)
  **描述**：Telegram频道中，`split_message`函数在分割长消息时，可能会在围栏代码块中间截断，导致两个消息块的HTML渲染都出错。
  **状态**：已存在修复 PR [#4257](https://github.com/HKUDS/nanobot/pull/4257)，该 PR 通过使分割函数感知围栏代码块边界来解决此问题。

- **[中等] 微信频道session过期后死循环**：[#4223](https://github.com/HKUDS/nanobot/pull/4223)
  **描述**：微信频道在Session token过期后，程序会设置暂停并等待，但醒来后未重新加载新状态，导致永久静默，无法自动恢复。
  **状态**：已有修复PR，通过在暂停结束后调用 `_load_state()` 来解决。

- **[中等] 历史游标非单调**：[#4256](https://github.com/HKUDS/nanobot/pull/4256)
  **描述**：修复了 `MemoryStore` 的游标分配在某些情况下（如被压缩或包含负值）可能不单调的问题，确保历史记录ID正确分配。
  **状态**：已有修复PR。

## 6. 功能请求归类
用户提出的功能需求涉及多个方面，对应 PR 也在跟进中：

- **对话模型切换**：
  - **Issue** [#4253](https://github.com/HKUDS/nanobot/issues/4253): 用户 `rombert` 希望能在单个对话中切换模型（如从OpenRouter切换到本地llamacpp），以适应不同任务对速度、隐私和成本的要求。
  - **相关驱动**：目前是需求阶段，暂无直接关联的PR。

- **文件与图片上传处理**：
  - **Issue** [#4251](https://github.com/HKUDS/nanobot/issues/4251): 用户 `JFPURE` 建议在输入框支持上传图片或文件（如PDF），以便进行图片解析或内容总结。
  - **动机**：方便对非文本内容进行理解和摘要。此需求尚未有直接对应的PR。

- **WebUI信息增强**：
  - **Issue** [#4233](https://github.com/HKUDS/nanobot/issues/4233) & PR [#4235](https://github.com/HKUDS/nanobot/pull/4235) & PR [#4255](https://github.com/HKUDS/nanobot/pull/4255): 将当前版本及PyPI新版本信息显示在WebUI中。

- **Azure网关兼容性**：
  - **Issue** [#4204](https://github.com/HKUDS/nanobot/issues/4204) & PR [#4217](https://github.com/HKUDS/nanobot/pull/4217): 通过配置文件为OpenAI兼容提供商增加自定义查询参数（如 `api-version`）。

## 7. 用户反馈摘要
从今日的 Issue 和 PR 讨论中，可以提炼出以下用户反馈：

- **真实需求**：用户 `rombert` 因同时使用公共API（OpenRouter）和私有本地模型（llamacpp），需要一种在对话中灵活切换的能力，以平衡任务的效率和隐私要求。
- **痛点**：用户 `agbocsardi` 报告了 Telegram 频道中代码块被截断导致HTML渲染错误的 Bug，这是一个影响用户体验的痛点。
- **功能期望**：用户 `JFPURE` 期望能通过上传图片或PDF来利用模型的理解和分析能力，表明用户正尝试将NanoBot用于更复杂的多媒体交互任务。
- **满意反馈**：用户 `mraad` 提出问题后，很快由 `axelray-dev` 通过 PR 实现，体现出项目对社区反馈的快速响应。

## 8. 待处理积压
以下是一些可能值得长期关注的议题，提醒维护团队注意：

- **[安全] 文件系统访问控制**：
  - **PR** [#4053](https://github.com/HKUDS/nanobot/pull/4053): 该PR旨在将额外的文件系统只读根目录与写入操作路径彻底分离，防止写入工具意外访问媒体目录等只读区域。该PR已经持续开放超过一周，建议关注其合并状态，确保文件系统安全策略的完善。

- **[邮件频道功能扩展]**：
  - **PR** [#4170](https://github.com/HKUDS/nanobot/pull/4170): 提议为邮件频道（IMAP）添加可配置的“处理后动作”，如标记已读、移动或删除邮件。这对于将NanoBot作为邮件主操作员的场景非常关键。该PR已开放数日，建议评估其设计并进行合并。

- **[稳定性优化]**：
  - **PR** [#4238](https://github.com/HKUDS/nanobot/pull/4238): 该PR引入 `ContextGovernor` 来根据上下文压力而非固定次数组件来触发“微观压缩”（microcompaction），优化对话管理。这是关于资源管理的改进，可提升长对话的稳定性。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，这是根据您提供的 GitHub 数据生成的 Zeroclaw 项目动态日报。

---

# Zeroclaw 项目动态日报 | 2026-06-09

## 今日活动概览

过去 24 小时内，项目保持高活跃度。共产生 50 条 Issue 更新（其中新开/活跃 48 条，关闭 2 条）和 50 条 PR 更新（其中待合并 39 条，已合并/关闭 11 条）。核心团队在修复多个关键 Bug 方面取得进展，特别是针对 Matrix 频道会话冲突、文件写入失败等问题的 PR 已被合并。社区讨论热度集中在 MCP 工具过滤 Bug、桌面交互支持和 shell 命令安全策略等 RFC 上。今日无新版本发布。

## 版本发布

无。

## 项目进展

今日合并或关闭了若干关键 PR，推动了重要问题的修复和功能改进：

- **Matrix 频道多实例会话隔离**：PR [#7388](https://github.com/zeroclaw-labs/zeroclaw/pull/7388) (fix(matrix): isolate session state per channel alias and repair key backup with the configured key) 已被合并/关闭。此 PR 解决了多个 Matrix 实例共享同一会话存储导致账号串扰的问题，将每个实例的会话隔离到独立的路径。此为破坏性变更，需要手动迁移会话。
- **Telegram 消息截断修复**：PR [#6701](https://github.com/zeroclaw-labs/zeroclaw/pull/6701) (fix(telegram): preserve markdown fences when splitting messages) 已被合并/关闭。此修复确保长消息在截断时能够正确保留 Markdown 代码块的格式，改善了用户体验。
- **对话历史保护**：PR [#7403](https://github.com/zeroclaw-labs/zeroclaw/pull/7403) (fix(runtime): guard trim_history against orphan-cascade emptying all messages) 已被合并/关闭。此修复在历史记录修剪逻辑中添加了安全保护，防止因级联删除导致所有非系统消息被清空。
- **ESP32 硬件演示项目**：PR [#6148](https://github.com/zeroclaw-labs/zeroclaw/pull/6148) (feat(hardware): smart-room ESP32 demo with Telegram + simulator) 已被合并/关闭。这是一个黑客松项目，实现了通过 Telegram 控制 ESP32 智能房间模拟器的端到端演示。

## 社区热点

过去 24 小时讨论最活跃的议题集中在几个核心问题上：

- **MCP 工具过滤失效**：Issue [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) (tool_filter_groups is a no-op for real MCP tools) 获得 7 条评论。该问题指出了 `tool_filter_groups` 配置对真实 MCP 工具完全无效，存在前缀检查错误，且未与延迟加载机制集成。这直接影响了用户对 MCP 工具的管理和控制能力。
- **桌面交互支持 RFC**：Issue [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) (RFC: Computer-use support for desktop screen interaction and input control) 获得 6 条评论。社区对让 Agent 能够捕获屏幕截图和发送鼠标/键盘事件的需求强烈，希望补齐与 OpenAI Codex 等竞品在桌面控制能力上的差距。
- **记忆权重过高**：Issue [#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) (Too much emphasis on memory) 获得 5 条评论。用户反馈 Agent 在运行时过度依赖历史记忆而忽略当前提示，导致行为偏差，特别是在定时任务中表现明显。
- **i18n 翻译文件管理建议**：Issue [#7184](https://github.com/zeroclaw-labs/zeroclaw/issues/7184) (Move translated .ftl and .po files into a git submodule) 获得 5 条评论。提出将非英文的翻译文件移入 Git 子模块，以隔离翻译更新的频繁变动，优化主仓库的提交历史和 CI 流程。

## Bug 与稳定性

今日报告的 Bug 涵盖多个严重级别，部分已有对应修复 PR：

- **严重级别 (S0)**：
  - [#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542)：WSL2 环境下持续出现 OOM 崩溃，导致进程被系统杀死。状态为“进行中”。
  - [#4627](https://github.com/zeroclaw-labs/zeroclaw/issues/4627)：`file_write` 工具报告成功但写入的文件在宿主机文件系统上不可见。**已有修复 PR [#7129](https://github.com/zeroclaw-labs/zeroclaw/pull/7129)**，旨在对写入临时工作区的操作进行失败处理。

- **严重级别 (S1)**：
  - [#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879)：Google Gemini CLI OAuth 认证完全无法工作，导致工作流受阻。
  - [#6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302)：Gemini 模型因历史序列化问题（助手工具调用出现在第一条用户消息之前）返回 400 错误。
  - [#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361)：上下文压缩机制错误地丢弃了 `assistant(tool_calls)` 和 `tool(result)` 消息，导致 MiniMax 等兼容提供商的工具调用循环。
  - [#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434)：在 `autonomy level = "full"` 配置下，shell 工具调用被拒绝。
  - [#6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037)：Cron 任务可以在运行时被重复启动，产生多个并发实例。
  - [#6487](https://github.com/zeroclaw-labs/zeroclaw/issues/6487)：多个 Matrix 频道实例共享一个会话存储，导致账号串扰。**该问题已被今日合并的 PR [#7388](https://github.com/zeroclaw-labs/zeroclaw/pull/7388) 锁定**。

- **其他高优先级 Bug**：
  - [#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350)：WhatsApp Web 中针对 LID 类型联系人，`allowed-numbers` 白名单被绕过，导致消息被静默丢弃。
  - [#6877](https://github.com/zeroclaw-labs/zeroclaw/issues/6877)：`runtime_profiles.*.max_tool_iterations` 配置项无效，实际生效的配置项在 `agents.*` 下。
  - [#7055](https://github.com/zeroclaw-labs/zeroclaw/pull/7402)：PR [#7402](https://github.com/zeroclaw-labs/zeroclaw/pull/7402) 旨在修复 Gateway 因网络错误（如文件描述符耗尽）直接崩溃的问题。

## 功能请求归类

社区今日提出了多项功能和改进请求，集中在安全与架构增强上：

- **安全与认证**：
  - [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)：RFC 提议为项目增加 OIDC 认证支持，作为可插拔的认证提供者。
  - [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142)：RFC 提议将现有的安全执行层暴露为可插拔的 Provider 接口，便于社区扩展和定制。
- **命令执行策略**：
  - [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)：RFC 提议为高危 shell 命令增加“每次执行都需手动确认”的中间层，并引入类似 Claude Code 的 `allow/ask/deny` 命令模式策略。
- **本地模型优化**：
  - [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287)：Feature Request 希望为本地小模型提供“本地优先模式”，通过精简提示、使用严格解析器、避免提示泄露来优化体验。
- **渠道功能增强**：
  - [#7367](https://github.com/zeroclaw-labs/zeroclaw/pull/7367)：PR 实现了根据频道别名路由入站 Webhook，解决了多实例配置下 Webhook 投递错误的问题。
  - [#7369](https://github.com/zeroclaw-labs/zeroclaw/pull/7369)：PR 新增了 AMQP 入站频道支持，用于连接消息队列并驱动 SOP（标准操作程序）运行。
- **文档与构建**：
  - [#7184](https://github.com/zeroclaw-labs/zeroclaw/issues/7184)：RFC 建议将翻译文件移入 Git 子模块，以管理翻译更新带来的代码变动。
  - [#7365](https://github.com/zeroclaw-labs/zeroclaw/pull/7365)：PR 对项目书籍进行了重写，实现了配置和 Provider 界面的自动化文档生成。

## 用户反馈摘要

从今日更新中可提炼出以下用户痛点与反馈：
- **MCP 工具难以精细控制**：用户报告 `tool_filter_groups` 功能对 MCP 工具完全失效（[#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699)），导致无法按预期过滤和选择 MCP 工具。
- **Agent 行为偏差**：用户反映 Agent 在处理任务时过度依赖记忆，导致忽略当前指令（[#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844)），影响了定时任务等场景的可靠性。
- **渠道体验问题**：
  - 有用户反馈飞书集成后默认调用 LLM 而非 Agent（[#4873](https://github.com/zeroclaw-labs/zeroclaw/issues/4873)）。
  - Telegram 频道的提示缓存功能失效（[#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360)），导致每次请求都需要完全重新处理。
  - 有用户反映 Telegram 消息截断后格式混乱（[#6225](https://github.com/zeroclaw-labs/zeroclaw/issues/6225)），该问题已被今日合并的 PR [#6701](https://github.com/zeroclaw-labs/zeroclaw/pull/6701) 修复。
- **安全与权限配置冲突**：用户指出，即使在完全授权的 `full` 模式下，shell 工具的调用也会被拒绝（[#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434)），这表明权限配置的某些逻辑可能存在冲突。

## 待处理积压

以下 Issue 或 PR 长期未得到响应或处于停滞状态，值得维护者关注：

- **核心审计问题**：Issue [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) 追踪了一次批量回滚中丢失的 153 个提交，需要社区协助审核并决定如何恢复。该 Issue 标记为 “help wanted” 且长期未关闭。
- **长期 Feature Request**：Issue [#4467](https://github.com/zeroclaw-labs/zeroclaw/issues/4467) 请求增加 MCP Resource 和 Prompt 支持，已开放超过两个月，获得多个 👍，但未见明确进展。
- **停滞的 PR**：PR [#6973](https://github.com/zeroclaw-labs/zeroclaw/pull/6973) 旨在修复 WhatsApp LID 联系人通信问题，但由于依赖的 `whatsapp-rust` 库版本变更，该 PR 标记为 “needs-author-action”，等待作者更新后继续。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 (2026-06-09)

## 1. 今日活动概览

过去24小时内，PicoClaw管理了19条Pull Request（9条已合并/关闭，10条待合并），3条Issues（2条活跃，1条关闭）。发布了一个nightly构建版本（v0.2.9-nightly.20260609）。代码库活跃度较高，主要集中在类型断言安全检查、错误链修复、日志统一化及渠道功能修复上。社区反馈的Telegram位置消息忽略问题已被修复关闭，但RISC-V平台的OpenAI兼容性Bug依然开放且标记为stale。

## 2. 版本发布

- **nightly (v0.2.9-nightly.20260609.46b29a0a)**
  由自动化流程构建，可能不稳定。变更日志对比 `v0.2.9...main`，具体改动需参考GitHub链接。
  https://github.com/sipeed/picoclaw/releases/tag/v0.2.9...main

## 3. 项目进展

今日合并/关闭的重要PR（按时间顺序）：

- **#3062 fix: health check always returning not ready**
  修复健康检查始终返回“未就绪”的Bug，由 @trufae 提交并关闭。
  https://github.com/sipeed/picoclaw/pull/3062

- **#3052 fix: handle Telegram location messages**
  将Telegram位置消息（`message.location`）转换为文本格式 `[User location: lat=..., lng=...]`，使其进入Agent管道，解决#3049。
  https://github.com/sipeed/picoclaw/pull/3052

- **#3058 / #3057 / #3056 / #3055** 四个PR由 @chengzhichao-xydt 系列提交，为 `webfetch`、`subagent`、`spawn` 及 `base.go` 中的类型断言增加 `ok` 检查，防止panic。
  https://github.com/sipeed/picoclaw/pull/3058
  https://github.com/sipeed/picoclaw/pull/3057
  https://github.com/sipeed/picoclaw/pull/3056
  https://github.com/sipeed/picoclaw/pull/3055

- **#3018 fix: add ok checks for type assertions and handle os.Getwd error**
  合并LINE渠道和Evolution store中的类型断言检查及路径错误处理。
  https://github.com/sipeed/picoclaw/pull/3018

- **#3051 fix: use %w instead of %v for error wrapping in channels and mcp**
  统一错误包装使用 `%w`，修复 `errors.Is`/`errors.As` 链。
  https://github.com/sipeed/picoclaw/pull/3051

- **#3050 refactor: replace log.Printf/fmt.Printf with structured logger**
  替换多处生产代码中的 `log.Printf`/`fmt.Printf`，转用结构化日志后端。
  https://github.com/sipeed/picoclaw/pull/3050

## 4. 社区热点

- **Issue #2887 – RISC-V .deb版与OpenAI模型兼容性问题**
  创建于5月17日，已有9条评论。用户报告在RISC-V架构上无法使用OpenAI模型，目前仍为OPEN状态，且被标记为 `stale`。讨论热度最高，可能是社区关注的重点。
  https://github.com/sipeed/picoclaw/issues/2887

- **Issue #3015 – Windows版QQ频道连接失败**
  创建于6月6日，有2条评论。用户反馈Windows构建版本中QQ频道Token获取超时，影响网关启动。尚无修复PR关联。
  https://github.com/sipeed/picoclaw/issues/3015

- **PR #3063 – 新增DeltaChat网关（feat）**
  @trufae 提交的新功能PR，为PicoClaw添加了DeltaChat支持。截至日报生成时仍为待合并状态，社区可关注其进展。
  https://github.com/sipeed/picoclaw/pull/3063

## 5. Bug 与稳定性

| 严重程度 | 摘要 | 状态 | 关联PR |
|----------|------|------|--------|
| 高 | RISC-V .deb包无法使用OpenAI模型（#2887） | OPEN / stale | 无 |
| 中 | Windows QQ频道Token超时导致网关启动失败（#3015） | OPEN | 无 |
| 中 | Telegram位置消息被静默忽略（#3049） | 已关闭 | #3052已修复 |
| 低 | 健康检查始终返回not ready（#3062） | 已关闭 | #3062已修复 |
| 低 | 多处未检查的类型断言可能引起panic（多PR） | 已合并/待合并 | #3058, #3057等 |

## 6. 功能请求归类

- **DeltaChat网关支持**
  PR #3063 新增 `deltachat` 网关，实现非破坏性新功能，并附带文档更新。该PR尚未合并。
  https://github.com/sipeed/picoclaw/pull/3063

- **Windows子进程控制台闪烁消除**
  PR #3061 作为#2654的后续，继续修复Windows GUI下子进程弹出控制台窗口的问题，待合并。
  https://github.com/sipeed/picoclaw/pull/3061

## 7. 用户反馈摘要

- **RISC-V用户**：在Issue #2887中反馈，PicoClaw v0.2.8的 `.deb` 包在 `Debian` RISC-V 上无法与 `gpt-5.4-2026-03-05` 模型交互，怀疑是编译或依赖问题。用户期望得到官方支持。
- **Windows网关用户**：在Issue #3015中描述 `picoclaw gateway` 命令因Token获取超时而失败，但Pico渠道工作正常。用户希望Windows版本与Linux版本的功能对齐。
- **Telegram用户**：在Issue #3049中报告发送位置信息时无任何响应，日志无输出。该问题已被#3052修复，用户可等待下一版本验证。

## 8. 待处理积压

- **Issue #2887（RISC-V .deb兼容性）**
  创建于2026-05-17，已超过三周且标记 `stale`，无修复PR。该问题影响特定架构用户，建议维护者加大关注。
  https://github.com/sipeed/picoclaw/issues/2887

- **Issue #3015（Windows QQ频道连接失败）**
  创建于2026-06-06，无响应或分配。Windows平台反馈较少，但影响网关基本功能。
  https://github.com/sipeed/picoclaw/issues/3015

- **PR #2904（Agent循环重载与panic清理稳定性）**
  创建于2026-05-20，至今仍在OPEN状态，未合并也未关闭。涉及`pkg/agent`核心逻辑的重构，积压时间较长。
  https://github.com/sipeed/picoclaw/pull/2904

- **PR #3063（DeltaChat网关）**
  虽然创建仅1天，但作为新功能PR，社区可关注其合并进度。
  https://github.com/sipeed/picoclaw/pull/3063

---

**总结**：今日PicoClaw项目在代码质量提升（类型安全检查、错误链修复）和渠道功能修复（Telegram位置、健康检查）上取得显著进展。社区反馈稳定性和平台兼容性问题仍需进一步跟进。

</details>