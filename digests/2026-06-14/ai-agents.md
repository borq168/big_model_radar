# OpenClaw 生态日报 2026-06-14

> Issues: 500 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-06-14 02:46 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

好的，这是为您生成的 OpenClaw 项目 2026-06-14 动态日报。

---

# OpenClaw 项目日报 — 2026-06-14

## 1. 今日活动概览

过去24小时内，OpenClaw 项目保持高度活跃。共处理 **500 条 Issue**（其中 400 条处于新开或活跃状态）和 **500 条 PR**（其中 198 条已合并或关闭），社区参与度和贡献者响应均十分密集。项目发布了 **2 个新版本**（`v2026.6.8-beta.1` 与 `v2026.6.7-beta.1`），重点增强了 Telegram 和 WhatsApp 等渠道的消息交付稳定性与富文本支持，并修复了多项用户反馈的稳定性问题。当前社区讨论热点集中在**会话状态管理**、**消息丢失**以及**多代理编排的可靠性**上。

## 2. 版本发布

*   **[Release] v2026.6.8-beta.1**
    发布说明:
    - **Telegram & WhatsApp 渠道增强**: Telegram 现在支持发送包含表格、列表、可展开引用块的结构化富文本。同时，引入了更稳健的 CLI 后端交付、淘汰了旧的本地草稿迁移逻辑，并加强了富媒体边界的安全性。
    - **其他改进**: WhatsApp 渠道交付也更为健壮。
    *链接: [https://github.com/openclaw/openclaw/releases/tag/v2026.6.8-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.6.8-beta.1)*

*   **[Release] v2026.6.7-beta.1**
    发布说明:
    - **渠道交付收紧**: 针对 Slack、Telegram、出站媒体、静默回复、进度草稿及分页操作结果等场景，消息交付逻辑得到统一优化。例如，同频道 Slack 的最终回复会持久化到对话记录中，新增了顶级的 `image` 消息工具用于发送附件，以及 Telegram 可展开引用块和假脱机改进。
    - **其他改进**: 修复了多个与渠道交付相关的问题，提升了消息的可靠性与一致性。
    *链接: [https://github.com/openclaw/openclaw/releases/tag/v2026.6.7-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.6.7-beta.1)*

## 3. 项目进展

今日合并/关闭了若干重要 PR，推进了多项关键修复：

*   **[#92840] fix(feishu): await HTTP server shutdown during monitor cleanup**
    该 PR 修复了 #48183 报告中提到的飞书（Feishu）插件监听器在清理时，HTTP 服务器未完全关闭即释放引用的“先释放，后关闭”竞态问题。这解决了潜在的内存泄漏和端口被占用（EADDRINUSE）问题。
    *链接: [https://github.com/openclaw/openclaw/pull/92840](https://github.com/openclaw/openclaw/pull/92840)*

*   **[#92555] ci: gate stable releases on Windows companion assets**
    此 PR 完善了 CI 发布流程，要求稳定版发布时必须通过 Windows 配套资产（如节点标签、安装器摘要）的审批，以确保 Windows 版本发布的完整性。
    *链接: [https://github.com/openclaw/openclaw/pull/92555](https://github.com/openclaw/openclaw/pull/92555)*

*   **[#92842] [Bug]: Telegram progress bubble remains above subsequent assistant messages in progress streaming mode**
    该 PR 修复了 Telegram 进度流模式下，进度气泡在某些情况下未能正确清除，导致覆盖后续助手消息的问题。
    *链接: [https://github.com/openclaw/openclaw/pull/92842](https://github.com/openclaw/openclaw/pull/92842)*

## 4. 社区热点

今日讨论最活跃的 Issue 集中反映了用户对**核心交互可靠性**的担忧：

1.  **子任务静默丢失问题** (`#44925`)：
    *   **评论数**: 19 (今日最多)
    *   **诉求**: 用户报告子代理（Subagent）在完成任务或超时后，其结果可能被“静默丢失”，无重试、无通知、无自动重启。用户描述了包括完成通知失败、重试后任务丢失在内的多种故障模式。
    *   **影响**: 此问题严重影响了工作流的可靠性，尤其在使用代理编排复杂任务时。这是用户当前最关心的稳定性问题。
    *链接: [https://github.com/openclaw/openclaw/issues/44925](https://github.com/openclaw/openclaw/issues/44925)*

2.  **飞书插件内存泄漏** (`#48183`)：
    *   **评论数**: 18
    *   **诉求**: 用户发现飞书插件的监控状态在停止时存在潜在的`httpServers`内存泄漏，并已提供 PR #48588 进行

---

## 横向生态对比

# 横向对比分析报告：2026-06-14 AI 智能体开源项目动态

## 1. 今日横向概览

四大项目今日活跃度分化明显：OpenClaw 以 500 条 Issue 和 500 条 PR 的规模保持最高位，并发布 2 个 beta 版本，重点强化 Telegram/WhatsApp 渠道交付；Zeroclaw 紧随其后（42 Issues / 50 PRs），社区聚焦于 WebSocket 会话中 `ask_user` 工具故障的紧急修复；NanoBot 活动量中等（5 Issues / 19 PRs），核心议题是 Anthropic 新模型兼容性和 WebUI 性能优化；PicoClaw 活跃度最低（2 Issues / 7 PRs），仅发布一个 Nightly 版本，主要修复模型幻觉问题。“消息/工具交付可靠性”成为今日多项目共同出现的用户痛点。

## 2. 各项目活跃度对比

| 项目      | Issues 更新数 | PR 提交数 | PR 合并/关闭数 | 版本发布 | 事实性备注 |
|-----------|--------------|-----------|---------------|---------|------------|
| OpenClaw  | 500（400 新开或活跃） | 500       | 198 合并/关闭 | 2 个 beta | 社区讨论最热 Issue 为子任务静默丢失（#44925） |
| Zeroclaw  | 42（25 新开或活跃）   | 50        | 9 合并/关闭   | 无       | 出现 4 个 S1 级 Blocking Bug，已有多修复 PR 提交 |
| NanoBot   | 5（2 新开，3 关闭）    | 19        | 5 合并/关闭   | 无       | 严重 Bug 为 Anthropic 新模型 API 请求失败（#4333） |
| PicoClaw  | 2（1 新开，1 关闭）    | 7         | 5 合并/关闭   | 1 个 Nightly | 唯一发布版本为自动构建，稳定性未保证 |

## 3. OpenClaw 与同类对照

- **活动量**：OpenClaw 今日 Issue/PR 数量是 Zeroclaw 的 10 倍以上，是 NanoBot 的百倍量级，社区参与度断层领先。但 OpenClaw 的 Issue/PR 统计口径可能包含更多自动化标签或机器人操作（500/500 可能为批量更新），需注意数据本身未区分人工 vs 自动化。
- **技术重点**：OpenClaw 今日聚焦渠道消息交付（Telegram/WhatsApp 富文本、飞书插件竞态修复）；Zeroclaw 核心问题是 WebSocket 网关中 `ask_user` 工具的通道关闭故障；NanoBot 主攻模型 API 兼容性（Anthropic 新模型参数）和 WebUI 功能对等；PicoClaw 解决模型幻觉（文本模型处理图像）和 TTS 配置增强。
- **社区讨论面**：OpenClaw 社区讨论发散（子任务丢失、内存泄漏、进度气泡），Zeroclaw 讨论高度集中于 WebSocket 会话和 `ask_user`（5 个关联 PR 同日提交），NanoBot 讨论围绕模型兼容性和启动崩溃，PicoClaw 仅 2 个 Topic 涉及 Token 持续消耗和图像幻觉。

## 4. 共同出现的技术方向

以下需求或问题在今日多个项目中均有体现：

| 技术方向 | 涉及项目 | 具体表现 |
|----------|----------|----------|
| **工具/消息交付可靠性** | OpenClaw、Zeroclaw、NanoBot | OpenClaw 子任务静默丢失（#44925）、Zeroclaw `ask_user` 在 WS 会话中 Channel closed（#7542）、NanoBot `idleCompact` 历史记录遗漏（#4264） |
| **模型兼容性** | NanoBot、PicoClaw | NanoBot 因 Anthropic 新模型废弃 `temperature` 参数导致请求失败（#4333）；PicoClaw 因文本模型无视觉能力产生幻觉（#3108） |
| **插件/工具配置标准化** | OpenClaw、NanoBot、Zeroclaw | OpenClaw 工具配置模式解耦（#4314）；NanoBot 请求为文件系统工具添加 `enable` 开关（#4138）；Zeroclaw 提议 OCI 容器镜像仓库作为插件存储（RFC #7497） |
| **会话状态管理** | OpenClaw、Zeroclaw | OpenClaw 社区讨论会话状态管理；Zeroclaw 推进多数据库会话后端 PR（#6893） |

## 5. 差异化定位分析

| 维度 | OpenClaw | NanoBot | Zeroclaw | PicoClaw |
|------|----------|---------|----------|----------|
| **功能侧重** | 多通道消息平台（Telegram/WhatsApp/Slack 等）+ 代理编排 | 轻量级 Agent，强调 WebUI 控制台和灵活模型配置 | 企业级多智能体平台，插件化和可扩展基础设施 | 边缘/嵌入式场景，资源敏感（Token 控制） |
| **目标用户** | 需要统一消息入口的个人用户、社区开发者 | 快速搭建个人助手的开发者，偏好本地模型 | 企业运维团队，需要多数据库、多代理协作 | Sipeed 硬件用户、低功耗设备部署者 |
| **技术架构** | 单体 + 插件式渠道适配，Rust/Go 后端（推测） | Python 重构，社区以 PR 推动快速迭代 | Rust 为主，强调 WASM 插件、OCI 仓库、多数据库 | 轻量 C/Rust，近期新增 WebSocket 远程模式 |
| **今日关键进展** | 飞书插件竞态修复、Telegram 富文本增强 | Anthropic 新模型兼容修复（PR #4334）、TUI 界面引入 | `ask_user` 故障多个修复 PR、多数据库后端 PR 推进 | 图像幻觉修复、夜间构建发布 |

## 6. 社区活跃度记录

基于今日数据（Issue 更新数、PR 提交数、版本发布数），将四个项目分为三个活跃等级：

- **极高活跃**：**OpenClaw**（500 Issues / 500 PRs / 2 版本）。注意该数据远超其他项目，可能包含自动化维护，但其社区讨论深度（如 #44925 19 条评论）亦为今日之最。
- **高活跃**：**Zeroclaw**（42 Issues / 50 PRs / 0 版本）。虽无版本发布，但 S1 级 Bug 的专业响应（5 个修复 PR 同日提交）表明社区协作效率高。
- **中低活跃**：
  - **NanoBot**（5 Issues / 19 PRs / 0 版本）。PR 提交活跃，但 Issue 数少，且部分功能 PR（如 PR #4138）持续未合并。
  - **PicoClaw**（2 Issues / 7 PRs / 1 Nightly 版本）。数据量最小，官方维护节奏偏慢（Nightly 自动构建为主）。

> 注：OpenClaw 的 500/500 数据与其他项目存在量级差异，可能因统计口径不同（如包含机器人自动创建/关闭的 Issue 与 PR）导致。建议结合后续数日趋势判断是否为异常峰值。

## 7. 有证据支撑的观察

1. **消息/工具交付可靠性是当前 AI Agent 项目的共有薄弱环节**。OpenClaw 的“子任务静默丢失”和 Zeroclaw 的“ask_user 在 WS 会话中通道关闭”均为 S1 级工作流阻塞 Bug，且社区贡献者均迅速提交修复 PR（Zeroclaw 同日 5 个 PR），说明该问题是用户高频痛点、维护者优先响应。

2. **模型 API 升级带来的兼容性冲击影响显著**。NanoBot 因 Anthropic 弃用 `temperature` 参数导致新模型全部请求失败（Issue #4333），PicoClaw 因文本模型无视觉能力导致图像处理产生幻觉（Issue #3108）。两项目均在 1 天内提交修复 PR，表明 LLM 侧 API 变更对开源工具链的连锁反应很快。

3. **插件/工具链的标准化配置需求在多项目中浮现**。Zeroclaw 提出 OCI 合规容器镜像仓库作为 WASM 插件存储（RFC #7497），NanoBot 请求为内置文件系统工具添加启用开关（PR #4138），OpenClaw 的工具配置模式解耦（PR #4314）。这些建议均指向“更细粒度的工具可控性和可插拔架构”。

4. **项目间活跃度差异巨大，但中小项目社区响应速度不弱**。OpenClaw 的规模是其他项目的数十倍，但 Zeroclaw 和 NanoBot 在遇到严重 Bug 时，社区贡献者均能在数小时内提交修复 PR（Zeroclaw 的 @xuwei-xy 连续 5 个 PR，NanoBot 的 PR #4334 紧随 Issue 之后）。这表明活跃度不仅取决于项目体量，还与维护者/核心贡献者的投入度相关。

5. **今日暂无明确跨项目信号表明某一技术方向成为生态趋势**。各项目今日活动仍以 Bug 修复和增量功能为主，未出现重大架构转向（如从单体向插件化的大幅迁移仅在 Zeroclaw 的 RFC 中讨论，尚未合并）。可继续观察后续数周是否有多个项目同时推进相同方向（如多数据库后端、OCI 插件仓库、流式卡片消息）的合并进展。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，这是根据您提供的 GitHub 数据生成的 NanoBot 项目日报。

---

### NanoBot 项目日报 (2026-06-14)

#### 1. 今日活动概览

过去24小时内，NanoBot项目保持了中等活跃度。Issues方面有5条更新，其中新开立2个问题，3个问题被关闭。Pull Requests活动较为频繁，共有19条更新，其中5个PR已被合并或关闭，目前仍有14个PR处于开放状态，等待审查或合并。社区焦点集中在修复Anthropic新模型（opus-4-8/Fable）的兼容性问题、WebUI的子路径部署支持，以及引入新的TUI界面。无新版本发布。

#### 2. 版本发布

无。

#### 3. 项目进展

今日有5个重要PR被合并或关闭，推进了多项功能修复与优化：

- **工作区安全性与路径修复**：PR [#4098](https://github.com/HKUDS/nanobot/pull/4098) 被合并，修复了 `ExecTool` 的工作区边界检查漏洞（#4072）和 `pathAppend` 的路径查找优先级问题（#4083）。
- **内存压缩（idleCompact）优化**：PR [#4326](https://github.com/HKUDS/nanobot/pull/4326) 被合并，修复了 `idleCompact` 机制在总结对话历史时遗漏最后几条关键消息的问题（#4264）。
- **WebUI启动性能**：PR [#4327](https://github.com/HKUDS/nanobot/pull/4327) 被合并，通过将慢速HTTP处理移出事件循环、优化侧边栏工作区作用域读取等方式，解决了WebUI启动时的阻塞问题。
- **工具配置模式解耦**：PR [#4314](https://github.com/HKUDS/nanobot/pull/4314) 被合并，重构了工具配置模式的导入逻辑，打破了模块间的循环依赖。
- **WebUI设置对等**：PR [#4313](https://github.com/HKUDS/nanobot/pull/4313) 被合并，实现了WebUI设置面板与 `config.json` 文件之间的功能对等，新增了对温度、工具限制、内存等字段的写入支持。

#### 4. 社区热点

- **Anthropic新模型兼容性（#4333, #4334）**：Issue [#4333](https://github.com/HKUDS/nanobot/issues/4333) 报告了一个严重问题：当前Anthropic提供商仅对 `opus-4-7` 模型禁止发送已弃用的 `temperature` 参数，导致所有针对 `opus-4-8` 和Fable模型的请求都被API拒绝（400错误）。此问题获得了社区的快速响应，开发者随即提交了修复PR [#4334](https://github.com/HKUDS/nanobot/pull/4334)，将豁免范围扩大到这两个新模型。这反映出社区对支持最新模型版本的强烈需求。

#### 5. Bug 与稳定性

- **严重：`session_key` 未定义导致启动崩溃**：Issue [#4322](https://github.com/HKUDS/nanobot/issues/4322) 报告了一个回归Bug，用户合并 `fix/prompt-caching` 分支后，在启动时遇到 `NameError: name 'session_key' is not defined` 错误，导致Agent崩溃。目前处于开放状态，有1条评论。
- **严重：Anthropic API请求失败**：Issue [#4333](https://github.com/HKUDS/nanobot/issues/4333) 指出，向 `opus-4-8` 及Fable模型发送请求时，因 `temperature` 参数被弃用而导致失败。目前已有修复PR [#4334](https://github.com/HKUDS/nanobot/pull/4334) 提交。
- **中等：`idleCompact` 历史记录丢失**：Issue [#4264](https://github.com/HKUDS/nanobot/issues/4264) 指出，`idleCompact` 机制会忽略对话末尾的8条消息进行总结，可能导致正确的纠正内容未被记录。已被PR [#4326](https://github.com/HKUDS/nanobot/pull/4326) 修复。
- **中等：`pathAppend` 路径优先级问题**：Issue [#4083](https://github.com/HKUDS/nanobot/issues/4083) 报告，`pathAppend` 配置的工具路径被追加到系统PATH之后，无法覆盖系统自带工具，导致查找优先级错误。已被PR [#4098](https://github.com/HKUDS/nanobot/pull/4098) 修复。

#### 6. 功能请求归类

- **WebUI功能增强**：
  - PR [#4330](https://github.com/HKUDS/nanobot/pull/4330) 新增自动化管理视图，支持在WebUI中对用户自动化进行列表、筛选、运行、暂停/恢复和删除操作。
  - PR [#4328](https://github.com/HKUDS/nanobot/pull/4328) 旨在支持WebUI在反向代理或子路径下正确运行，解决了根路径写死的限制。
- **用户体验优化**：
  - PR [#4335](https://github.com/HKUDS/nanobot/pull/4335) 优化了CLI交互界面，使启动横幅能正确显示用户配置的 `bot_icon`。
  - PR [#4329](https://github.com/HKUDS/nanobot/pull/4329) 引入了一个新的内联交互式TUI界面，提供更丰富的命令行交互体验。
- **模型与能力扩展**：
  - PR [#4291](https://github.com/HKUDS/nanobot/pull/4291) 提议允许子Agent使用父Agent之外的可配置模型预设，以支持更灵活的多模型协作。
  - PR [#4316](https://github.com/HKUDS/nanobot/pull/4316) 引入了对OpenAI、Groq、ElevenLabs等多提供商文本转语音（TTS）系统的配置支持。
- **工具配置**：
  - PR [#4138](https://github.com/HKUDS/nanobot/pull/4138) 请求为内置文件系统工具添加 `enable` 开关，以便在与MCP服务器部署时能完全禁用它们。
- **MCP稳定性**：
  - PR [#4303](https://github.com/HKUDS/nanobot/pull/4303) 尝试修复 `streamableHttp` MCP服务器会话结束时因任务上下文退出导致的崩溃。

#### 7. 用户反馈摘要

- **模型兼容性诉求**：用户 `@Ulef1005` 在 Issue [#4333](https://github.com/HKUDS/nanobot/issues/4333) 中报告了与最新Anthropic模型的兼容性问题，并明确指出“所有请求都失败”，体现了用户对新模型支持的迫切需求。
- **历史记录担忧**：用户 `@imkuang` 在 Issue [#4264](https://github.com/HKUDS/nanobot/issues/4264) 中详细描述了 `idleCompact` 机制导致的对话历史总结偏差问题，指出“错误的记录和结论”会保留下来，这会影响用户对Agent记忆准确性的信任。
- **Ollama支持询问**：用户 `@neil0306` 在早已关闭的 Issue [#193](https://github.com/HKUDS/nanobot/issues/193) 中询问对Ollama API的支持，表明社区中仍有用户希望使用本地模型。

#### 8. 待处理积压

- **长期开放的功能请求**：PR [#4138](https://github.com/HKUDS/nanobot/pull/4138)（为文件系统工具添加启用开关）自2026-06-01提交以来已开放近两周，目前仍处于开放状态，未获得合并。该请求对于需要严格限制模型行为的部署场景至关重要，建议维护者评估并处理。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，根据您提供的Zeroclaw项目2026年6月14日数据，现为您生成以下项目动态日报。

---

# Zeroclaw 项目动态日报 | 2026-06-14

## 1. 今日活动概览

过去24小时内，Zeroclaw项目社区活跃度极高。累计产生**42条**Issue更新，其中新开或活跃的讨论达**25条**，并有**17条**问题被关闭。在代码贡献方面，共有**50条**Pull Request（PR）被提交，其中**41条**仍在等待合并或审核中，有**9条**已被合并或关闭。此外，项目在过去24小时内**没有**发布新的版本。

- **关键变化**：
  - **社区热点**：与“网关WebSocket会话”相关的 `ask_user` 工具故障成为今日讨论最集中的Bug，已有多个修复PR被提出。
  - **关键特性推进**：涉及**多数据库会话后端**（#6893）、**per-agent委托名单**（#7590）等大型PR持续更新，标志着基础架构层面有重要进展。
  - **风险警示**：数个被标记为 **risk: high** 的严重Bug（如WS会话中的 `ask_user` 故障、`canvas-store` 回归问题）已有对应的PR修复，表明问题的紧迫性。

## 2. 版本发布

无（过去24小时内无新版本发布）。

## 3. 项目进展

今日合并/关闭的重要PR及项目推进情况：

- **基础设施与架构**：
  - **[PR #6893]** `[feat(infra): multi-database session backends (Postgres, Oracle, MySQL, Db2)]`：此大型PR正在推进，旨在为多智能体集群添加PostgreSQL、Oracle、MySQL、Db2等多种会话持久化后端支持，是提升项目企业级部署能力的关键步骤。
  - **[PR #7590]** `[feat(agents): per-agent delegate roster with cross-profile reach]`：这是对代理间委托机制的核心改进，允许不同风险配置文件的代理可以相互委托，增强了系统灵活性和职责分离能力。

- **开源治理与工具链**：
  - **[PR #7558]** `[feat(xtask): canonical install spec + cargo generate installers (drift elimination)]`：旨在建立一个统一的安装规范，消除因不同安装方式产生的漂移问题。
  - **[PR #7558]** 与 **[#7549]** `fix(plugins): align install/discovery paths`：这些PR正在解决插件安装路径与运行时发现路径不一致的问题，提升插件生态的健康度。

## 4. 社区热点

今日最受关注的议题主要集中在以下几个方面：

- **功能请求：Dream Mode（梦境模式）**
  - **Issue: [#5849]** [Dream Mode — Periodic Memory Consolidation & Reflective Learning](https://github.com/zeroclaw-labs/zeroclaw/issues/5849)
  - **热度**：评论18条，创建于4月18日，至今仍有活跃讨论。
  - **诉求**：社区对该功能表现出持续的兴趣。用户希望在空闲时段，ZeroClaw能进入一个“梦境模式”，用于记忆整合、反思近期交互并更新长期知识结构。这反映了社区对AI持久记忆和自主学习的更高期待。

- **Bug回归：`ask_user` 工具在WebSocket会话中失效**
  - **Issue: [#7542]** [`ask_user` fails instantly with "Channel closed" in WS sessions](https://github.com/zeroclaw-labs/zeroclaw/issues/7542)
  - **热度**：Bug严重性为 **S1（工作流阻塞）**，被标记为 **priority:p1**。创建于6月12日，迅速引发关注。
  - **连锁反应**：此Bug随即引发了关于 `free-form ask_user` 的另一个bug **[#7551]**。社区贡献者 **@xuwei-xy** 迅速响应，连续提交了5个修复PR（[#7584](https://github.com/zeroclaw-labs/zeroclaw/pull/7584), [#7585](https://github.com/zeroclaw-labs/zeroclaw/pull/7585), [#7586](https://github.com/zeroclaw-labs/zeroclaw/pull/7586), [#7587](https://github.com/zeroclaw-labs/zeroclaw/pull/7587), [#7588](https://github.com/zeroclaw-labs/zeroclaw/pull/7588)），展示了社区高度的响应能力和行动力。

## 5. Bug 与稳定性

今日报告的Bug按严重程度排列如下：

- **S1 - 工作流阻塞**
  - **[Bug #7563]** [canvas-store regression in WS chat/ACP sessions](https://github.com/zeroclaw-labs/zeroclaw/issues/7563)：WebUI的 `/canvas` 页面在WebSocket聊天后变空白。**状态**：已接受，**暂无关联修复PR**。
  - **[Bug #7542]** [`ask_user` fails in WS sessions](https://github.com/zeroclaw-labs/zeroclaw/issues/7542)：紧急Bug，已有 **多个修复PR (如 #7584, #7586, #7588)** 提交，社区响应迅速。
  - **[Bug #7527]** [macos app not work](https://github.com/zeroclaw-labs/zeroclaw/issues/7527)：macOS 15.7.7上应用无法检测权限、窗口消失。**状态**：已阻塞。
  - **[Bug #7551]** [free-form ask_user fails on WS approval channel](https://github.com/zeroclaw-labs/zeroclaw/issues/7551)：与#7542相关的另一个阻塞性问题，同样有 **多个修复PR**。

- **S2 - 降级行为**（已关闭）
  - **[Bug #7377]** [zerocode dark themes inherit unreadable terminal text](https://github.com/zeroclaw-labs/zeroclaw/issues/7377)：终端UI主题问题，已关闭。

- **S3 - 小问题**（已关闭）
  - **[Bug #7378]** [zerocode treats Cmd-C as quit chord on macOS](https://github.com/zeroclaw-labs/zeroclaw/issues/7378)：macOS快捷键冲突，已关闭。
  - **[Bug #7509]** [self-test fails on Windows hosts](https://github.com/zeroclaw-labs/zeroclaw/issues/7509)：自动化测试在Windows上的兼容性问题，已关闭。

## 6. 功能请求归类

今日用户提出的新功能需求和相关PR：

- **核心架构与安全**
  - **[RFC #7420]** `[Native Dynamic-Library Plugin System]`：提议采用原生动态链接库插件系统，解决单体架构问题。
  - **[RFC #7497]** `[OCI-Compliant Container Registries as Plugin Storage]`：提议使用OCI标准容器镜像仓库作为WASM插件的存储和分发机制，提升供应链安全。
  - **[Feature #7514]** `[change delegate tool semantics for cross-profile subagents]`：允许委托给不同风险配置的子代理，与今日合并的PR #7590 议题一致。
  - **[Feature #7521]** `[file_read — decode non-UTF-8 text]`：为 `file_read` 工具增加字符集检测功能，以支持非UTF-8编码的文件。

- **用户体验与渠道**
  - **[Feature #7531]** `[Support streaming card messages for Chinese IM apps]`：为QQ、钉钉、企业微信、飞书等国内IM渠道增加流式卡片消息，减少用户等待焦虑。
  - **[Feature #7543]** `[Multi-session support in gateway web chat UI]`：为Web聊天UI增加多会话管理功能。
  - **[Feature #7518]** `[whatsapp-web: support message reactions]`：让WhatsApp Web渠道支持消息表情反馈。

- **模型与配置**
  - **[Feature #7539]** `[llama.cpp model router]`：为llama.cpp提供模型路由功能，方便快速切换不同本地模型。

- **文档与维护**
  - **[Feature #6760]** `[Update Documentation for Docker - Tested v0.7.5-debian]`：更新Docker部署文档。**状态**: 进行中。

## 7. 用户反馈摘要

从今日的Issues评论中，可以提炼出以下真实用户痛点和使用场景：

- **开发者环境与体验**
  - 有用户在macOS上安装后遇到应用无法工作的问题 ([#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527))，这表明在特定系统版本上的安装体验仍有待优化。
  - 一位维护者在非TTY环境下运行 `quickstart` 初始化时发现了**无限重绘循环**，并生成了4.3GB的日志输出 ([#7507](https://github.com/zeroclaw-labs/zeroclaw/issues/7507))，这说明对非交互式、CI/CD场景的支持是当前的一个薄弱环节。

- **实际使用痛点**
  - **工具可用性**：`web_fetch` 工具在WhatsApp Web频道中失效，用户需要通过临时文件修改才能修复 ([#6223](https://github.com/zeroclaw-labs/zeroclaw/issues/6223))。这表明不同频道间的工具兼容性仍需打磨。
  - **配置失效**：有用户发现配置文件中设置的OpenAI `timeout_secs` 参数被本地提供者程序忽略，实际被硬编码的120秒超时覆盖 ([#6723](https://github.com/zeroclaw-labs/zeroclaw/issues/6723))。这是一个配置与运行时行为不一致的问题，影响用户体验。

## 8. 待处理积压

以下为今日观察到的、长时间未响应或需要维护者关注的重要问题：

- **高风险功能请求（待审核）**
  - **[RFC #7420]** `[Native Dynamic-Library Plugin System]`：创建于6月9日，标记为 `needs-maintainer-review`。这是一个影响深远的架构变更RFC，需要维护者给出明确方向。
  - **[Feature #5849]** `[Dream Mode]`：尽管已接受，但作为社区长期关注的功能，其实现计划的任何更新都值得期待。

- **关键Bug修复（待合并）**
  - **[PR #5797]** `[feat(providers): add tls_ca_cert_path support]`：创建于4月16日，至今已近两个月。对于需要连接私有证书自定义推理端点的用户至关重要，急需被审核和合并。
  - **[PR #6667]** `[feat(skills): background review fork]`：同样是大型功能PR，标记为 `needs-author-action`，可能因需要作者回应而被阻塞，建议维护者跟进。

- **维护问题**
  - **[Issue #6808]** (间接提及于PR #7571): 需要为 `status:no-stale` 标签建立明确的标准和证据要求。PR [#7571](https://github.com/zeroclaw-labs/zeroclaw/pull/7571) 尝试解决此问题，但其本身可能也需要维护者审核与合并。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，这是为您生成的 PicoClaw 项目 2026-06-14 动态日报。

---

# PicoClaw 项目日报 | 2026年6月14日

## 今日活动概览

截至 2026-06-14，过去24小时内，项目维护活动频繁。共有 2 个 Issue 获得更新（1 个新开，1 个关闭），7 个 PR 被处理（5 个已合并/关闭，2 个待合并）。一个新的 Nightly 版本发布。社区讨论焦点集中在模型幻觉问题修复及“Evolution”功能导致的 Token 持续消耗问题。此外，一项可能影响用户体验的图片输入压缩功能和新远程WebSocket模式正处于待合并状态。

## 版本发布

- **新版本**: `v0.2.9-nightly.20260614.cf67dd38`
  - **类型**: Nightly Build（自动构建，可能不稳定）
  - **变更日志**: https://github.com/sipeed/picoclaw/compare/v0.2.9...main
  - **说明**: 这是一个包含自 `v0.2.9` 以来所有主分支代码变更的自动构建版本。建议谨慎使用。

## 项目进展

今日共有 5 个 PR 被合并或关闭，主要涉及功能修复、代码清理和文档完善。

1.  **模型幻觉修复与图像路由优化 (PR #3117)**
    - **状态**: 已合并
    - **摘要**: 该 PR 修复了 Issue #3108，即在使用的模型缺乏视觉能力时，图像描述请求会产生与内容无关的“幻觉”回答。修改内容包含：当媒体轮次或 `load_image` 工具执行时，系统会强制路由至配置的图像模型，避免在纯文本模型上重试失败。
    - **链接**: https://github.com/sipeed/picoclaw/pull/3117

2.  **TTS 请求增强 (PR #3119)**
    - **状态**: 已合并
    - **摘要**: 引入了对OpenRouter语音模型的增强支持。允许通过新的 `extra_body` 配置字段，针对每个模型覆盖默认的 `voice` 和 `response_format` 参数。同时添加了自动重试机制，在首次请求因 `response_format` 失败时将忽略该参数。
    - **链接**: https://github.com/sipeed/picoclaw/pull/3119

3.  **代码质量与清理（PR #3065 & #3066）**
    - **状态**: 均已合并
    - **摘要**: 这两次提交都属于代码清理工作，主要针对数据库关闭和临时文件清理等操作中的错误处理进行显式忽略（`_ = ...`），以避免潜在的lint警告。
    - **链接**: https://github.com/sipeed/picoclaw/pull/3065 | https://github.com/sipeed/picoclaw/pull/3066

4.  **文档国际化 (PR #2935)**
    - **状态**: 已关闭（标记为stale）
    - **摘要**: 该PR旨在添加繁体中文（zh-TW）的支持。由于长时间未更新，该 PR 被标记并关闭。
    - **链接**: https://github.com/sipeed/picoclaw/pull/2935

## 社区热点

- **讨论最活跃的 Issue**:
  - **#3012**: `[BUG] Continuous consumption of tokens every minutes when evolution is enabled`
  - **摘要**: 用户报告当启用“Evolution”功能后，系统会持续消耗API Token。该问题获得3条评论，是近期社区关注的焦点。
  - **链接**: https://github.com/sipeed/picoclaw/issues/3012

## Bug 与稳定性

- **严重 Bug (活跃)**:
  - **Issue #3012**: 启用Evolution功能导致Token每分钟持续消耗。该问题已持续一周，目前尚未有关联的修复PR。用户环境为PicoClaw v0.2.9 + MiniMax模型 + FreeBSD系统。
  - **链接**: https://github.com/sipeed/picoclaw/issues/3012

- **已修复 Bug**:
  - **Issue #3108**: 当文本模型处理图像时产生“幻觉”描述（与图像内容无关）。该 Bug 已于今日由 PR #3117 合并修复。
  - **链接**: https://github.com/sipeed/picoclaw/issues/3108

## 功能请求归类

- **图片处理增强**:
  - **PR #2964**: 提出为 PicoClaw 的视觉管道添加可配置的入站图像压缩功能。当网络媒介传入大尺寸图片时，此功能有助于控制Token消耗和请求体积。目前仍处于待合并状态。
  - **链接**: https://github.com/sipeed/picoclaw/pull/2964

- **远程操作模式**:
  - **PR #3118**: 提议为`picoclaw agent`命令新增远程WebSocket模式，允许用户通过WebSocket连接远程操作PicoClaw，而不仅限于本地运行。目前处于待合并状态。
  - **链接**: https://github.com/sipeed/picoclaw/pull/3118

- **TTS配置灵活性**：
  - **PR #3119** (已合并): 实现了通过 `extra_body` 字段按模型覆盖TTS参数的功能，回应了用户对OpenRouter等非OpenAI服务商定制化语音需求的诉求。

## 用户反馈摘要

- **Token消耗问题**：用户在 Issue #3012 中表达了强烈的困扰，指出在启用Evolution后，即使没有新消息，Agent也会每分钟自动触发对话并消耗Token，这严重影响了使用成本。该问题未得到维护者回复，暂不清楚是预期行为还是Bug。
- **模型幻觉问题**：来自 Issue #3108 的用户反馈指出，使用 `deepseek/deepseek-v4-flash` 等纯文本模型处理图像时，会产生与图像内容完全无关的回复。该问题已快速定位并修复，表明项目组对模型间调用逻辑的差异非常关注。

## 待处理积压

- **长期未合并的功能 PR**:
  - **PR #2964 (Feat/image input compression)**: 此功能于5月28日提出，旨在控制图片输入的大小以优化Token消耗。尽管具有潜在价值，但已开放超过两周且未合并，提醒维护者关注。
  - **链接**: https://github.com/sipeed/picoclaw/pull/2964

</details>