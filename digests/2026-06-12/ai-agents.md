# OpenClaw 生态日报 2026-06-12

> Issues: 500 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-06-12 02:42 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 OpenClaw 项目 GitHub 数据，我为您生成了 2026-06-12 的项目动态日报。

---

# OpenClaw 项目日报 — 2026-06-12

## 1. 今日活动概览

过去 24 小时内，OpenClaw 项目保持了高度活跃的社区参与度。共产生 500 条 Issue 更新，其中新开/活跃的 Issue 有 476 条，关闭 24 条。Pull Request 方面有 500 条更新，其中待合并 384 条，已合并/关闭 116 条。本周无新版本发布。社区讨论集中在跨平台支持、安全强化、会话状态一致性以及多代理编排稳定性等核心议题上。

## 2. 版本发布

无

## 3. 项目进展

今日有多项重要 PR 被推进或合并，重点关注了安全性、会话一致性与跨平台兼容性。

- **安全与策略修复**:
    - **#92172** [fix(feishu): bilingual no-visible-reply fallback with reason code](https://github.com/openclaw/openclaw/pull/92172): 修复了飞书渠道中无可见回复时的错误信息，使其双语化并包含原因代码。
    - **#92307** [Warn when host approvals clamp exec security at startup](https://github.com/openclaw/openclaw/pull/92307): 在网关启动时，当本地主机审批文件限制了 `tools.exec` 安全策略时，会发出警告。
    - **#92086** [security: add Security Matrix runtime-fact audit model](https://github.com/openclaw/openclaw/pull/92086): 新增安全矩阵运行时审计模型，可基于多种输入评估安全状态。

- **会话与消息传递修复**:
    - **#92300** [fix(openai-responses): collapse cumulative message snapshots](https://github.com/openclaw/openclaw/pull/92300): 修复了 OpenAI Responses 模式下，累积消息快照导致的冗余问题。
    - **#92113** [fix(auth): resolve custom provider secretref-managed apiKey from runtime snapshot](https://github.com/openclaw/openclaw/pull/92113): 修复了自定义提供商使用 `secretref-managed` API 密钥时导致的 `auth_unavailable` 错误。 (**注意**: 这是一个需要关注的回归修复)
    - **#90579** [fix: allow trusted host-read html after outbound staging](https://github.com/openclaw/openclaw/pull/90579): 修复了在出站暂存后，无法发送受信任的 `text/html` 报告的问题。

- **其他关键修复与功能**:
    - **#92318** [fix(cron): require explicit message target proof](https://github.com/openclaw/openclaw/pull/92318): 要求 cron 任务在发送消息时必须提供明确的目标元数据，以修复隔离 cron 的交付确认问题。
    - **#92312** [Fix dashboard history projection and approval followups](https://github.com/openclaw/openclaw/pull/92312): 修复了仪表盘历史记录投影和审批后续处理的问题。
    - **#92178** [fix(gateway): guard formatAuditList against non-string items...](https://github.com/openclaw/openclaw/pull/92178): 修复了因包含非字符串项导致的 WebSocket 握手崩溃问题。

## 4. 社区热点

以下 Issue/PR 在近 24 小时内获得了最高关注度和讨论热度，反映了社区的迫切需求。

1.  **跨平台支持：Linux/Windows Clawdbot Apps**
    -   **问题**: [#75](https://github.com/openclaw/openclaw/issues/75) (109 条评论, 79 👍)
    -   **诉求**: 该项目目前拥有 macOS、iOS 和 Android 的 Clawdbot 应用，但缺乏对主流桌面平台 **Linux 和 Windows** 的支持。该 Issue 自 2026 年初提出，至今仍是社区最核心的未满足需求。用户期望能像在 macOS 上一样，在 Linux/Windows 上获得完整的客户端体验。

2.  **访问控制与安全性：`tools.web.fetch.allowPrivateNetwork`**
    -   **问题**: [#39604](https://github.com/openclaw/openclaw/issues/39604) (13 条评论, 9 👍)
    -   **诉求**: 当一个强大的工具（`web_fetch`）默认阻止访问私有网络时，部分高级用户需要一种 **安全、可选的方式** 来突破限制。社区希望引入一个明确的配置项（如 `tools.web.fetch.allowPrivateNetwork`），让管理员在了解风险后，手动启用对内网资源的访问能力。

3.  **功能增强：Telegram Business Bot 支持**
    -   **问题**: [#20786](https://github.com/openclaw/openclaw/issues/20786) (8 条评论, 6 👍)
    -   **诉求**: 用户希望 OpenClaw 的 Telegram Bot 能够支持 **Telegram Business 模式**，从而能够接收来自个人聊天（通过 Business Connections）的消息。这是一个典型的用户对特定平台高级功能的集成需求。

## 5. Bug 与稳定性

今日社区报告了大量影响用户体验的 Bug，主要集中在会话状态不一致、安全策略失效和特定环境下的崩溃。

- **严重回归/崩溃**:
    - **#38327** [Bug: "Cannot convert undefined or null to object" in 2026.3.2 with google-vertex/gemini-3.1-pro-preview](https://github.com/openclaw/openclaw/issues/38327): 升级到 `2026.3.2` 后，使用特定模型（`google-vertex/gemini-3.1-pro-preview`）的代理会完全失效。 (P1)
    - **#40540** [Bug: `openclaw update` command fails with EBUSY error on Windows](https://github.com/openclaw/openclaw/issues/40540): Windows 用户无法通过 `openclaw update` 命令进行更新，程序崩溃。 (P1)
    - **#22676** [Bug: Signal daemon stop() race condition on SIGUSR1 restart](https://github.com/openclaw/openclaw/pull/22676): 服务重启时存在竞争条件，导致进程僵尸和消息发送失败。 (P1)

- **会话/消息状态问题**:
    - **#32296** [Bug: Agent replies to previous message instead of current message](https://github.com/openclaw/openclaw/issues/32296): 代理回复历史消息而非当前消息，导致对话错乱。 (P1)
    - **#69118** [Claude CLI sessions reset on every turn in group channels...](https://github.com/openclaw/openclaw/issues/69118): 在群组频道中，Claude CLI 会话每次交互都会重置。 (P1)
    - **#91363** [Isolated cron consistently fails with "LLM request failed"...](https://github.com/openclaw/openclaw/issues/91363): 隔离的 Cron 任务在执行时持续因“LLM 请求失败”而报错，模型请求从未到达提供商。 (P1)

- **安全与权限问题**:
    - **#29387** [Bug: Bootstrap files in agentDir are silently ignored...](https://github.com/openclaw/openclaw/issues/29387): 在代理目录中配置的引导文件被静默忽略，导致代理无法加载预期配置。 (P1)
    - **#29736** [Exec approvals path ignores active state root...](https://github.com/openclaw/openclaw/issues/29736): 批准文件路径错误，不遵循配置的状态目录，写入到用户家目录，造成安全隐患。 (P1)

- **有相关修复的 Bug**:
    - **#92113** (修复中): 自定义 Provider 的 `secretref-managed` API Key 认证失败问题。
    - **#90579** (修复中): 受信任 HTML 报告无法发送问题。

## 6. 功能请求归类

用户提出的新功能需求涵盖安全、会话管理、跨平台及生态集成等方面。

- **安全性增强**
    - **#10659** [Feature Request: Masked Secrets - Prevent Agent from Accessing Raw API Keys](https://github.com/openclaw/openclaw/issues/10659): 提议建立一个“蒙版密钥”系统，让代理能使用密钥但无法查看明文，防止信息泄露。(P1)
    - **#6615** [Feature: Add denylist support for exec-approvals](https://github.com/openclaw/openclaw/issues/6615): 希望为命令执行审批添加“拒绝列表”支持，仅阻止特定的危险命令。 (P2)
    - **#39979** [Feature: Path-scoped RWX permissions for exec and file tools](https://github.com/openclaw/openclaw/issues/39979): 提议用基于路径的读/写/执行权限模型替代现有的二进制级执行允许列表。 (P2)

- **会话与记忆管理**
    - **#22438** [feat: Tiered bootstrap file loading for progressive context control](https://github.com/openclaw/openclaw/issues/22438): 提出“分层引导文件加载”机制，允许根据会话类型（如主代理、子代理、Cron）加载不同的引导文件，以优化 Token 消耗。 (P2, 有相关 PR)
    - **#40418** [Feature Request: Automated Session Memory Preservation & Synthesis](https://github.com/openclaw/openclaw/issues/40418): 希望在执行 `/new`（重置会话）时，自动保存并合成当前会话内容作为新会话的记忆。 (P2)
    - **#7707** [Feature Request: Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707): 提议为记忆条目按来源（用户输入、网页抓取等）添加信任标签，防止记忆投毒。 (P2)

- **跨平台与集成**
    - **#75** [Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75): 社区长期的核心诉求，期望支持 Linux 和 Windows 桌面客户端。
    - **#20786** [Feature: Telegram Business Bot support](https://github.com/openclaw/openclaw/issues/20786): 支持 Telegram 的企业模式功能。 (P2)
    - **#35203** [RFC: Multi-Agent Collaboration Enhancement...](https://github.com/openclaw/openclaw/issues/35203): 一个全面的多代理协作增强 RFC，涉及能力画像、共享黑板和 Token 治理。

- **配置与部署**
    - **#9443** [Request: Prebuilt Android APK releases](https://github.com/openclaw/openclaw/issues/9443): 请求在 GitHub Releases 中提供预构建的 Android APK 文件。 (P2)
    - **#13616** [Add backup/restore utility for config, cron jobs, and session history](https://github.com/openclaw/openclaw/issues/13616): 提议增加配置、Cron 任务和会话历史的备份/恢复工具。 (P2)
    - **#40786** [Feature Request: Add .gitignore-like exclude patterns to backup CLI](https://github.com/openclaw/openclaw/issues/40786): 希望在 `openclaw backup create` 命令中添加类似 `.gitignore` 的排除模式。 (P2)

## 7. 用户反馈摘要

从本周的 Issue 讨论中，可以提炼出以下用户痛点和反馈：

- **升级体验不佳**: 用户 `@wrx861` 反馈升级后模型完全失效 (`#38327`)，`@matthewpoe` 反馈心跳调度导致 Telegram 通信阻塞 (`#40611`)。这表明回归测试的覆盖范围可能不足。
- **Windows 支持薄弱**: 用户 `@rainar-sun` 报告 `openclaw update` 在 Windows 上因 `EBUSY` 错误失败 (`#40540`)，暴露了 Windows 平台上的兼容性问题。
- **安全配置复杂**: 用户 `@jiesou` 和 `@humun` 分别在 Docker (`#31331`) 和文件审批路径 (`#29736`) 上遇到安全问题，说明配置的复杂性和默认行为可能导致非预期的安全风险。
- **多代理场景不稳定**: 用户 `@waliddafif` 在尝试并行编码时，遇到了并发配置覆盖、会话锁定失败和任务 “断连” 等多重问题 (`#43367`)，这表明多代理编排功能在生产环境中尚不可靠。
- **核心功能细节缺失**: 用户 `@altsoulkiller` 指出 `write` 工具缺乏追加模式 (`#40001`)，导致多个 Cron 会话共写一个文件时造成数据丢失。用户 `@survivor998` 报告代理回复了错误的（旧）消息 (`#32296`)，破坏了基本的对话体验。

## 8. 待处理积压

以下为长期处于开放状态且标记了 `stale` 等待回应的关键 Issue，提醒维护者关注：

- **[Feature]: safe/unsafe ClawdBot** (#6731, 更新: 2026-06-11): 提议基于 Rust 重写以实现安全/非安全模式，涉及底层架构变更。
- **[Bug]: CLI-backed helper paths still bypass CLI dispatch on latest main** (#57326, 更新: 2026-06-11): 报告即使是最新 `main` 版本，仍有部分路径绕过 CLI 调度，可能导致行为不一致。
- **[Bug]: Safeguard compaction ignores compaction.model config** (#57901, 更新: 2026-06-11): “安全压缩”功能忽略用户配置的独立模型，而是使用会话主模型，导致设计意图失效。
- **[Bug]: cacheRetention ignored for LiteLLM-proxied Anthropic models** (#37966, 更新: 2026-06-11): 通过 LiteLLM 代理的 Anthropic 模型，其 `cacheRetention`（缓存保留）配置被忽略。
- **[Feature]: Add Swedish control UI locale** (#62063, 更新: 2026-06-12): 为控制 UI 添加瑞典语翻译的 PR，等待最终审核合并。

---

## 横向生态对比

好的，这是基于您提供的四份开源项目日报生成的横向对比分析报告。

---

# 开源 AI 智能体项目横向对比分析日报 — 2026-06-12

## 1. 今日横向概览

今日各项目均保持活跃，但活动重心和社区焦点差异明显。**OpenClaw** 和 **NanoBot** 均维持了极高的 Issue/PR 处理量，社区讨论集中在跨平台支持和会话稳定性上。**ZeroClaw** 因发布里程碑式 v0.8.0 版本（单守护进程多代理架构）而备受关注，其安全问题与多代理协作是讨论核心。**PicoClaw** 则专注于底层稳定性与通道修复，发布了 Nightly 版本，并解决了工具调用丢失等关键 Bug。

## 2. 各项目活跃度对比

| 项目名称 | 今日新开/活跃 Issues | 今日 PR 总量 (新增/合并) | 版本发布 | 事实性备注 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 476 | 500 (384 待合并 / 116 关闭) | 无 | 讨论最热烈；跨平台(#75)和安全策略(#39604)是社区最高热度议题。 |
| **NanoBot** | 2 | 19 (13 待合并 / 6 合并) | 无 | 活动量相对较小，集中于特定功能增强（多提供商、MCP稳定性）的修复与合并。 |
| **ZeroClaw** | 50 | 50 (多数待处理) | **v0.8.0** | 发布重大版本，社区讨论集中在版本新特性（多代理）与由之引发的安全、工具过滤等问题。 |
| **PicoClaw** | 3 | 31 (13 待合并 / 18 合并) | **Nightly v0.2.9-nightly** | 活动量较高，以代码合并和修复为主，重点关注通道兼容性和消息一致性。 |

## 3. OpenClaw 与同类对照

今日数据中，OpenClaw 的社区活动规模远超其他项目，其 Issue 和 PR 数量级是 NanoBot 的数十倍，是 ZeroClaw 和 PicoClaw 的近 10 倍。

- **活动量与聚焦点**: OpenClaw 的讨论覆盖范围最广，从用户急切需要的**跨平台客户端**（#75），到高级安全配置（#39604），再到多代理编排稳定性（#43367），反映了其作为成熟项目所面临的多样化和深层次社区诉求。相比之下，NanoBot 更聚焦于 **提供商集成** 和 **连接稳定性**；ZeroClaw 因版本发布，社区热议点围绕 **多代理安全与配置**；PicoClaw 则在 **通道兼容性** 和 **消息流一致性** 上投入了大量修复精力。

- **技术重点差异**: OpenClaw 今日合并的 PR 涉及安全审计模型、会话压缩、Cron 交付确认等复杂系统模块。NanoBot 的合并则集中于工具边界（代码块分割）、具体提供商支持（SiliconFlow）。PicoClaw 的合并明确指向工具调用消息丢失、配置持久化等用户体验 Bug 修复。ZeroClaw 的合并围绕新版本发布后的子代理工作目录、配置持久化和构建兼容性问题。

## 4. 共同出现的技术方向

多个项目在今日动态中均出现以下共同技术诉求，显示其为当前开源 AI 智能体 Agent 领域的普遍关注点：

1.  **跨平台与兼容性支持**：
    - 涉及项目：**OpenClaw**、**PicoClaw**
    - 具体诉求：
        - **OpenClaw** (#75) 社区强烈呼吁为 **Linux 和 Windows** 提供桌面客户端支持。
        - **PicoClaw** (#2472) 社区报告在 **Windows** 上因路径分隔符兼容性导致 `list_dir` 工具功能失效。

2.  **会话状态与消息一致性**：
    - 涉及项目：**OpenClaw**、**PicoClaw**
    - 具体诉求：
        - **OpenClaw** (#32296) 报告 Agent 回复历史消息，导致对话错乱。
        - **OpenClaw** (#69118) 群组频道中，Claude 会话每次交互后重置。
        - **PicoClaw** (#3094) 报告异步子代理产生重复消息。
        - **PicoClaw** (#2958) 工具调用消息在流式传输中丢失（已修复）。

3.  **多代理协作与稳定性**：
    - 涉及项目：**OpenClaw**、**ZeroClaw**、**PicoClaw**
    - 具体诉求：
        - **OpenClaw** 用户在生产环境中遇到并发配置覆盖、会话锁定失败等多代理编排问题 (#43367)。
        - **ZeroClaw** 因发布 v0.8.0 版本，多代理架构下的安全策略冲突 (#7470) 和工作目录继承 (#7263) 成为社区焦点。
        - **PicoClaw** 社区贡献者提交了引入“Agent 协作总线”的 PR (#2937)，旨在增强持久化代理间通信。

## 5. 差异化定位分析

| 特征维度 | OpenClaw | NanoBot | ZeroClaw | PicoClaw |
| :--- | :--- | :--- | :--- | :--- |
| **功能侧重** | 功能全面、生态广泛（多渠道、多模型），注重安全策略和治理。 | 功能轻量、集成便捷，侧重多提供商接入和工具接口扩展。 | **多代理架构创新**，强调单守护进程管理多个独立代理，并在协作中实现安全策略隔离。 | **通道稳定性与底层修复**，专注于解决具体交互场景下的消息流、配置持久化等问题。 |
| **目标用户** | 从个人开发者到大型团队，需要精细控制和安全审计的高级用户。 | 开发者个人或小型团队，追求快速部署和灵活集成，尤其是多API端点管理。 | 探索复杂、多代理工作流程的开发者和团队，对底层架构和自动化有较高要求。 | PicoClaw 的用户社区，关注特定平台（如飞书、Telegram、Windows）的稳定体验。 |
| **技术架构** | 服务端为主，提供官方客户端。架构庞大，模块化。 | 采用路由+网关模式，工具和提供商可插拔。 | **单一守护进程+多代理**设计，每个代理拥有隔离的配置、工作区和安全策略。 | 单网关架构，集成了丰富的通道适配器。 |

## 6. 社区活跃度记录

- **高度活跃**: **OpenClaw** （极高的 Issue/PR 数量，讨论广泛深入，涉及多个高层次议题）
- **高度活跃**: **ZeroClaw** （发布重大版本，社区围绕多代理、安全等问题展开密集讨论）
- **中等活跃**: **PicoClaw** （维持较高的代码合并与修复节奏，社区反馈以具体Bug和兼容性为主）
- **中等活跃**: **NanoBot** （活动量相对较小，但修复和功能合并效率高，社区需求明确）

## 7. 有证据支撑的观察

- **观察一：跨平台支持成为制约用户规模扩展的普遍瓶颈。** 无论是拥有庞大社区、功能全面的 **OpenClaw**，还是规模较小的 **PicoClaw**，今日都有明确证据表明用户对 **Linux 和 Windows** 桌面端或核心工具链的支持有强烈且未满足的需求。

- **观察二：随着多代理协作实践增多，其稳定性和安全性问题日益凸显。** **OpenClaw** 用户在生产中遇到的复杂编排崩溃，与 **ZeroClaw** v0.8.0 发布后社区立即反馈的安全策略冲突和工作目录问题，共同指向了多代理场景是当前技术实现最不成熟的领域之一。

- **观察三：消息传递的语义一致性是影响 Agent 基础体验的核心关键。** **OpenClaw** 的“回复历史消息”问题和 **PicoClaw** 的“工具调用丢失”与“消息重复”问题，均直接破坏了对话的连续性基础，表明在流式传输、异步通信等复杂场景下，维护消息状态一致性仍是所有项目面临的核心技术挑战。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，我将根据您提供的NanoBot GitHub数据，为您生成一份客观、专业的项目动态日报。

---

### NanoBot 项目动态日报 | 2026-06-12

**数据覆盖时段：** 2026-06-11 至 2026-06-12

---

#### 1. 今日活动概览

过去24小时内，NanoBot项目在代码维护与功能开发上保持活跃。核心仓库共处理了4个Issue更新和19个Pull Requests（PR）。其中，有2个Issue已关闭，6个PR被合并或关闭，新增了2个待解决的Bug/功能请求。当前有13个PR处于待合并状态，项目未发布新版本，主要精力集中于现有问题的修复与功能增强。

#### 2. 版本发布

无

#### 3. 项目进展

今日有6个PR被合并或关闭，标志着一些关键修复和功能改进已进入主分支：

- **#4289 [已合并] Slack：增加 @提及 白名单范围控制**：在Slack渠道的`allowlist`策略下新增`groupRequireMention`选项。允许管理员指定机器人仅在白名单频道中且被@提及时才响应，实现了更精细化的权限控制。
- **#4281 [已合并] 转录：添加 SiliconFlow 作为转录服务提供商**：将SiliconFlow注册为新的转录提供商，默认使用`FunAudioLLM/SenseVoiceSmall`模型，扩展了项目的语音转录能力。
- **#4257 [已合并] 工具：使 split_message 识别代码块边界**：修复了长消息分割时可能破坏Markdown代码块的Bug，避免了因分割导致的渲染错误。
- **#4020 [已关闭] 提供商：使流式空闲超时可配置**：将原本固定的`NANOBOT_STREAM_IDLE_TIMEOUT_S`超时时间变为可按提供商独立配置，解决了本地模型（如LM Studio、Ollama）在生成较长内容时容易被超时中断的问题。

#### 4. 社区热点

- **#4305 [新开][增强] 多个自定义提供商**：用户`@smurfix`提出需要支持配置多个“自定义”或“OpenAI兼容”的提供商。当前系统仅支持一个名为`custom`的提供商，该需求反映了用户在对接多个不同API端点（如不同内部API、多个云服务商）时的实际痛点。目前尚无评论，但这是一个非常明确的社区功能诉求。
    - 链接: https://github.com/HKUDS/nanobot/issues/4305
- **#4302 [新开][Bug] MCP重连后网关崩溃**：用户`@tjc0726`报告了一个严重Bug，当MCP（Model Context Protocol）连接断开后尝试重连时，会导致NanoBot网关崩溃。该问题被认为与已修复的#4211类似，但是发生在网关层面。这显示出MCP连接的稳定性是当前社区用户关注的一个热点。
    - 链接: https://github.com/HKUDS/nanobot/issues/4302

#### 5. Bug 与稳定性

今日报告的Bug主要集中在连接层面，严重程度较高：

- **[严重] #4302 MCP重连导致网关崩溃**：核心问题为`streamableHttp` MCP服务器重连时进程崩溃。开发者`@michaelxer`已提交了对应的修复PR `#4303`，并引用此Issue。
    - Issue: https://github.com/HKUDS/nanobot/issues/4302
    - Fix PR: https://github.com/HKUDS/nanobot/pull/4303
- **[中等] #4306 孤立工具调用结果被持久化到历史记录**：修复了会话历史中可能出现与任何助理调用无关的`role: "tool"`消息的问题，此类问题会破坏与OpenAI/Anthropic等严格API的兼容性，并导致轨迹渲染器报告“Orphaned Tool Results”。该PR `#4306`已提交。
    - Fix PR: https://github.com/HKUDS/nanobot/pull/4306 (关联Issues: #4006)
- **[低] #4236 [已关闭] Ubuntu 24.04沙箱兼容性**：报告了Bubblewrap沙箱在受限用户命名空间的系统上运行失败的问题。该问题已被关闭，推测已通过其他方式解决或提供临时方案。

#### 6. 功能请求归类

社区提出的新功能需求与对应的开发进展如下：

| 功能领域 | 用户需求 / 问题描述 | 相关 Issue / PR | 当前状态 |
| :--- | :--- | :--- | :--- |
| **提供商** | 支持配置**多个**自定义OpenAI兼容提供商。 | #4305 (Issue) | 新开 |
| **提供商** | （同上）实现多个自定义OpenAI兼容提供商。 | #3239 (PR) | 待合并 (已有提交) |
| **用户界面** | 在WebUI中显示当前运行的NanoBot版本号。 | #4233 (Issue) | 已关闭 |
| **技能管理** | 缓存技能加载器中的条目和元数据，避免重复扫描。 | #4301 (PR) | 待合并 |
| **定时任务** | 将定时自动化任务绑定到特定会话中执行。 | #4299 (PR) | 待合并 |
| **技能系统** | 在执行前检查技能的“类型要求”，确保可用性。 | #4300 (PR) | 待合并 |
| **Python SDK** | 扩展Python SDK功能，提供更丰富的运行时控制API。 | #4296 (PR) | 待合并 |

#### 7. 用户反馈摘要

- **痛点：多提供商配置** (#4305)：用户明确表达了“需要不止一个‘自定义’（和‘openai’）提供商”的诉求，表明单一自定义提供商已成为多API集成场景下的限制。
- **痛点：版本信息可发现性** (#4233)：用户提出希望在WebUI中直接看到版本号，以替代当前需要输入`/status`命令的方式。这表明用户追求更直观、低门槛的版本信息获取体验。
- **稳定性担忧** (#4302)：用户报告了MCP重连导致的网关级崩溃，并指出“这与#4211类似，但发生在网关层面”，暗示了MCP当前实现的健壮性有待加强。

#### 8. 待处理积压

以下为长期开放但尚未获得明确推进或合并的、可能值得关注的事项：

- **#3538 [#3538] 添加 gateway 启停命令**：一个从4月底就开始的PR，为NanoBot网关增加了`start`、`stop`、`restart`等管理命令，包含CLI文档更新。该功能对于生产环境下的部署管理较为实用，但已搁置一个多月。
    - 链接: https://github.com/HKUDS/nanobot/pull/3538
- **#4021 [#4021] 修复 Codex 中的重复推理条目**：针对OpenAI Codex提供商在长对话中可能因重复发送`reasoning`条目而返回400错误的问题，提交了修复方案。该PR为AI辅助生成，已有一个月历史，但尚未被合并。
    - 链接: https://github.com/HKUDS/nanobot/pull/4021

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，我已根据您提供的Zeroclaw项目GitHub数据，为您生成了2026年6月12日的项目动态日报。

---

### Zeroclaw 项目日报 (2026-06-12)

#### 1. 今日活动概览
今日ZeroClaw项目发布了里程碑式的v0.8.0版本，实现了单守护进程多代理架构。社区活动依旧活跃，共产生50条Issues和50条PRs，其中绝大多数处于待处理状态。来自社区的关键Bug修复如子代理工作目录继承和配置持久化问题已成功合并，另有多个高风险问题如工具过滤、安全策略和死锁隐患仍在积极讨论中。

#### 2. 版本发布
- **v0.8.0 发布**
  - **概述**：这是一个重大版本更新。核心变化为：**单个守护进程（daemon）现在可以运行多个命名的代理（agent）**。
  - **详细变更**：每个代理现在拥有独立的工作区、内存、模型提供商、安全策略、通讯渠道和个性化配置。这些变化由一个**重写的配置模式**进行协调，并支持从旧版本自动迁移现有设置。
  - **链接**：https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.0

#### 3. 项目进展
今日共有 **3 个 PR 被合并/关闭**，修复了以下重要问题：
- **[#7517] 修复：子代理工作目录继承**：解决了在ACP会话中，子代理和委托代理未正确继承客户端提供的`cwd`（当前工作目录），导致子代理被限制在默认工作区的问题。**已合并**。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/pull/7517
- **[#7519] 修复：MCP配置持久化**：修复了通过配置文件编辑器修改`[[mcp.servers]]`下的字段后，变更无法持久化到磁盘的Bug。涉及`natural-key dirty-path walker`机制。**已合并**。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/pull/7519
- **[#7520] 修复：ARM CI构建**：修复了v0.8.0稳定版发布流程中，针对ARM架构（如`aarch64`）的glibc版本因缺少交叉编译器而构建失败的问题。**已合并**。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/pull/7520

#### 4. 社区热点
今日讨论最活跃、评论最多的议题主要集中在以下三个方面，反映了社区对**底层机制、安全策略和自动学习能力**的持续关注：
- **Dream Mode —— 周期性记忆整合与反思学习**：此功能请求获得了 **17条评论**，是今日讨论热度最高的议题。用户希望ZeroClaw在空闲时能自动整理日常记忆并反思交互，以更新其长期知识结构。这表明社区对代理的持续学习和自我进化能力有强烈期待。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/5849
- **代理委托安全性问题**：关于**代理委托（delegate）模式**的安全性议题获得7条评论，讨论激烈。该Bug指出，委托代理与目标代理之间的安全策略逻辑存在冲突，导致一些实用的多代理协作场景（如审核、研究）被阻塞。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/7470
- **工具过滤（tool_filter）功能失效**：社区报告的核心功能Bug，指出文档中说明的`tool_filter_groups`配置对真正的MCP工具不起作用，导致用户无法有效管理代理可用工具列表。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/6699

#### 5. Bug 与稳定性
今日报告和涉及的Bug数量众多，其中风险等级为“高”的占绝大多数。按影响程度排列如下：

- **S0 - 数据丢失/安全风险**：
  - **[#5542] WSL2环境中出现连续OOM**：`zeroclaw` daemon进程在WSL2上因内存耗尽被内核杀死，官方标注为`S0`严重级别。截至目前，该问题仍处于需复现状态（`r:needs-repro`），尚无修复PR。
    - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/5542
- **S1 - 工作流阻塞**：
  - **[#7470] 代理委托模式拒绝空工具列表**：严重影响了多代理协作流程。涉及安全策略与运行时的交互问题。
    - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/7470
  - **[#5808] 默认32k上下文预算被系统提示和工具定义耗尽**：导致每轮对话都触发“预压缩”，使首次对话效率极低。
    - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/5808
  - **[#6434] Shell工具在高自治级别下被拒绝**：即使用户配置允许，`shell`工具调用也无法到达运行时，导致全自动工作流阻塞。
    - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/6434
  - **[#6361] 上下文压缩导致历史记录异常**：对于OpenAI兼容的提供商（如MiniMax），上下文压缩功能会丢弃`assistant(tool_calls)`角色消息，导致工具循环错误。
    - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/6361
  - **[#7263] 子代理不继承ACP会话的“cwd”**：此Bug已于今日通过PR #7517修复（**已关闭**）。
    - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/7263
- **S2 - 功能降级**：
  - **[#6350] WhatsApp频道号码过滤失效**：基于LID的联系人消息可绕过`allowed-numbers`白名单，造成消息静默丢失。当前状态为`in-progress`。
    - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/6350
  - **[#6173] model_switch工具无法跨轮次**：由`model_switch`工具切换后的模型在当前对话中无法持久，且网关/UI路径完全忽略此切换。
    - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/6173

#### 6. 功能请求归类
今日用户提出的新功能请求主要集中在**基础设施改进**和**用户体验增强**方面，记录如下：

- **基础设施与运维**：
  - **Dream Mode**: 请求增加后台记忆整合与反思学习机制。 (#5849)
  - **守护进程节点健康追踪**: 请求基于WebSocket消息实现真实的在线/离线状态检测，替代当前的静态渲染。 (#6391)
  - **CLI命令注册远程守护进程**: 请求增加`zeroclaw node add <url>`命令，用于构建多机集群。 (#6390)
- **通道与集成**：
  - **Webhook路径路由**: 请求为Webhook实现基于别名的路径路由，以支持单网关下的多实例通道。 (#6312)
- **工具与技能**：
  - **增强工具过滤**: 请求在代理主循环中强制执行`allowed_tools` / `denied_tools`，而不仅仅是工具列表展示阶段。 (#6914)
  - **技能注册表支持**: 请求增加通用技能注册表支持，以对接第三方技能市场。 (PR #6143)
- **用户体验与监控**：
  - **”更新ZeroClaw”按钮**: 请求在Web仪表盘中增加“更新”按钮，通过网关触发后台更新流程。 (#6365)
  - **捕获LLM调用全量数据**: 通过OpenTelemetry的`gen_ai`指标捕获完整的prompt和completion记录，用于调试和监控。 (#6642)

#### 7. 用户反馈摘要
从今日的Issues和PR讨论中，可以提炼出以下用户反馈：

- **工具集成的挫败感**：多位用户反馈工具相关的配置（如`tool_filter_groups` (#6699)、`allowed_tools` (#6914)）实际效果与文档不符，严重影响了他们控制代理行为的预期。
- **多代理场景的配置痛点**：在尝试构建多代理协作流程时，用户遇到了一系列与安全策略 (#7470)、工作目录继承 (#7263) 相关的阻塞性问题，表明当前版本的委托机制在复杂场景下尚不成熟。
- **平台兼容性问题**：WSL2环境下的OOM问题 (#5542) 和Windows下Claude Code执行问题 (PR #7214) 提示，跨平台稳定性仍是需要持续关注的领域。
- **上下文管理的普遍困扰**：大量用户反馈默认的32k上下文预算被系统提示迅速耗尽 (#5808)，以及上下文压缩功能与特定提供商的兼容性 (#6361)，显示了智能上下文管理的迫切需求。

#### 8. 待处理积压
以下是一些长期未响应或已停滞、但影响重大的Issue和PR，提醒维护者关注：

- **高风险Bug积压（需要作者确认或已停滞）**：
  - **[#5542] WSL2 OOM问题**：严重级别S0，自4月被报告以来，标记为“需要复现”已超过两个月，尚未有进展。
    - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/5542
  - **[#5903] MCP子进程泄漏**：每个心跳周期泄漏一个子进程，对长期运行的服务是重大隐患。虽已被接受但尚无明确修复方案。
    - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/5903
- **重要功能请求PR停滞**：
  - **技能注册表支持 (PR #6143)**、**OTel追踪增强 (PR #6190)** 等多个重要功能PR均标记为`needs-author-action`且超过一个月未更新。这些PR直接关系到项目的可扩展性和可观测性能力。
  - **Cron重复执行修复 (PR #6038)**：与一个严重Bug（#6037）直接相关，但标记为`needs-author-action`，导致修复一直无法合并。
    - 链接：https://github.com/zeroclaw-labs/zeroclaw/pull/6038

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，作为一名 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 PicoClaw 项目 GitHub 数据，我为您生成 2026 年 6 月 12 日的项目动态日报。

---

### PicoClaw 项目动态日报 — 2026-06-12

**分析师:** AI 智能体与个人 AI 助手领域开源项目分析师
**数据来源:** github.com/sipeed/picoclaw

---

#### 1. 今日活动概览

过去 24 小时内，PicoClaw 项目更新活跃，共处理了 6 个 Issues 与 31 个 Pull Requests，并发布了 1 个 Nightly 版本。其中，3 个新开 Issues 主要关注 Windows 平台兼容性、子代理消息重复以及模型视觉能力缺失问题，另有 3 个旧 Issue 因长期未活动被标记为已关闭。PR 方面，今日合并/关闭了 18 个请求，包含核心功能修复（如工具调用丢失）、代码健壮性改进及大量依赖更新，显示了维护者正积极清理积压并与社区协作。开发与维护节奏保持稳定，重点关注通道稳定性与代理协作能力的优化。

#### 2. 版本发布

项目今日发布了 **Nightly Build v0.2.9-nightly.20260612.413d3749** 版本。

- **发布内容:** 这是一个自动构建的 Nightly 版本，尚未稳定，用于测试最新主分支的改动。
- **变更范围:** 该版本包含了从 `v0.2.9` 标签到当前主分支 `main` 的所有未发布更改。具体变更内容需参考 [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)。
- **注意事项:** 此版本为自动化构建，可能包含不稳定或未完全测试的功能，请谨慎在生产环境中使用。

#### 3. 项目进展

今日有多项重要功能修复和对项目稳定性的提升被合并到主分支，反映了维护者正着力解决近期社区反馈的关键问题。

- **修复工具调用消息在流式传输中丢失:** PR [#2957](https://github.com/sipeed/picoclaw/pull/2957) 由社区贡献者 [@loafoe](https://github.com/loafoe) 提交并已合并。该 PR 修复了在连续请求中，`tool_calls` 消息被错误地当作辅助消息过滤而无法送达用户界面的严重 Bug。通过在 `preSend()` 函数中添加 `outboundMessageIsToolCalls()` 辅助函数，确保工具调用消息不受过滤逻辑影响。
- **改进 MCP 参数解析:** PR [#3048](https://github.com/sipeed/picoclaw/pull/3048) 修复了 `mcp add` 子命令无法正确处理根级全局标志（如 `--no-color`）的问题，该问题由 [@afjcjsbx](https://github.com/afjcjsbx) 提交，目前仍为 **OPEN** 状态，等待进一步审查。
- **增强代码健壮性:** PR [#3060](https://github.com/sipeed/picoclaw/pull/3060) 修复了 `helpers.go` 中的错误包装格式（`%v` 改为 `%w`），以保持 `errors.Is`/`errors.As` 链的完整性；同时解决了 `web.go` 中 `json.MarshalIndent` 错误被静默忽略的问题。
- **修复配置持久化问题:** PR [#3067](https://github.com/sipeed/picoclaw/pull/3067) 修复了用户无法在 UI 中修改并保存“运行时会话隔离范围”（`dm_scope`）设置的 Bug。该 PR 在后端的 `SessionConfig` 结构体中添加了 `DmScope` 字段，使得该设置可以正确持久化。

#### 4. 社区热点

过去 24 小时，社区讨论主要围绕以下 4 个议题展开：

1.  **Windows 路径分隔符兼容性 (#2472):** 这是今日**讨论最热烈**的 Issue，拥有 5 条评论。用户 [@ut2or1](https://github.com/ut2or1) 报告了 Windows 平台上 `list_dir` 命令因路径分隔符（反斜杠 `\`）不兼容 Go 的 `fs.FS`/`os.Root` 而失败的问题。这反映出 Windows 用户群在使用过程中的核心痛点，且该 Issue 已存在近两个月，社区对其解决方案有较高期待。
2.  **异步子代理消息重复 (#3094):** 用户 [@v2up-32mb](https://github.com/v2up-32mb) 报告了一个影响用户体验的 Bug：在飞书、Telegram 等通道使用异步子代理（spawn）时，主代理会产生重复消息。该问题包含 1 条评论，揭示了 `ForUser` 字段被同时用于直接推送和主代理汇总是导致重复的根源。
3.  **工具调用消息丢失 (#2958, #2957):** 虽然对应的 PR 已合并，但原始 Issue [#2958](https://github.com/sipeed/picoclaw/issues/2958) 在昨天被标记为已关闭，标志着社区关注的这个影响 Pico 通道核心交互的 Bug 已得到解决。这是近期社区反馈最集中的稳定性问题之一。
4.  **模型视觉能力问题 (#3108):** 今日新开的 Issue，用户 [@afjcjsbx](https://github.com/afjcjsbx) 指出，当使用不具备视觉能力的模型（如 `deepseek/deepseek-v4-flash`）时，图像描述请求会“产生幻觉”（hallucinate）。此问题尚无评论，但揭示了模型能力与请求任务不匹配时产品应如何优雅降级的重要性。

#### 5. Bug 与稳定性

今日共报告 4 个新 Bug，无严重退出或数据损坏类崩溃问题。

- **【中等】Windows 路径分隔符不兼容 (#2472):** `list_dir` 功能在 Windows 上完全失效。目前无关联 fix PR，标记为 `[OPEN]`。
- **【中等】异步子代理消息重复 (#3094):** 用户在特定通道（飞书/Telegram）会收到重复消息，体验较差。目前无关联 fix PR，标记为 `[OPEN]`。
- **【低】图像描述幻觉 (#3108):** 当模型不支持视觉时，返回的结果与图像内容无关，可能导致用户困惑。今日新报告，无评论与关联 PR，标记为 `[OPEN]`。
- **【已修复】工具调用消息丢失:** 问题 (#2958) 及其修复 PR (#2957) 已于今日关闭/合并，该稳定性问题得到解决。
- **【已修复】安全配置绕过:** 安全漏洞 (#3080) `allowed_cidrs` 可通过本地回环代理绕过的 Issue 已于今日关闭。相关修复已就绪，提升了首次运行设置的安全性。

#### 6. 功能请求归类

今日数据中，社区提出的功能需求与实现紧密相关，主要聚焦于 Agent 协作与通道交互：

- **Agent 协作能力:** PR [#2937](https://github.com/sipeed/picoclaw/pull/2937) 提出引入第一方“Agent 协作总线”，为 PicoClaw 增加持久化的代理间通信能力，包括每个代理的独立邮箱、协作线程、结构化消息信封及权限感知路由。该 PR 由 [@afjcjsbx](https://github.com/afjcjsbx) 提交，目前仍为 **OPEN** 状态，是社区对复杂多智能体交互场景的明确需求。
- **通道与 MCP 集成:** 已合并的 PR [#2696](https://github.com/sipeed/picoclaw/pull/2696) 实现了通道**向 MCP 服务器**按请求动态传递 HTTP 头部的功能，增强了通道与外部工具集成的灵活性和安全性。
- **通道模式支持:** 已合并的 PR [#2934](https://github.com/sipeed/picoclaw/pull/2934) 修正了 WhatsApp 通道的检测逻辑，使其能够支持使用 `use_native: true` 标志的原生模式（whatsmeow），满足用户对非桥接连接方式的需求。

#### 7. 用户反馈摘要

- **Windows 用户痛点明确:** 从 Issue #2472 的长期存在和 5 条评论中可以看出，PicoClaw 在 Windows 平台的体验是社区关注的焦点，尤其是核心工具函数对平台特性的兼容性需要改进。
- **复杂场景下的消息稳定性和一致性是核心诉求:** Bug #2958 (工具调用丢失) 和 #3094 (消息重复) 分别发生在连续请求和异步子代理场景，说明了用户在构建复杂、自动化工作流时，对消息传递的稳定性和一致性有极高的要求。
- **对模型能力与任务匹配的隐式期待:** Bug #3108 报告的问题表明，用户期望 PicoClaw 能够智能地感知当前模型的限制（如无视觉能力），并提供明确、友好的提示，而不是返回一个无关的、可能具误导性的结果。

#### 8. 待处理积压

- **重要功能 PR 等待审查:**
    - **Agent 协作总线 (PR #2937):** 由 [@afjcjsbx](https://github.com/afjcjsbx) 提交的 `Feat/agent collaboration`，创建于 2026-05-24，已开放近 20 天。这是一个核心功能增强，社区关注度高，建议维护者尽快安排审查。
    - **MCP 参数解析修复 (PR #3048):** 由 [@afjcjsbx](https://github.com/afjcjsbx) 提交的 `fix(mcp): reject unknown pre-positional flags in add`，创建于 2026-06-07，同样是核心工具的易用性改进，对命令行用户影响较大。

- **长期未响应的重要 Issue:**
    - **Windows 路径分隔符兼容性 (Issue #2472):** 创建于 2026-04-10，至今已超过两个月，虽然讨论活跃但无官方解决方案。这可能导致部分 Windows 用户无法使用核心功能，建议优先处理。

- **依赖更新 PR 持续堆积:** 今日有 8 个来自 `dependabot[bot]` 的依赖更新 PR 处于 **OPEN** 状态，涉及 Go（AWS SDK、copilot-sdk）和前端（eslint, vite, shadcn）等核心依赖。长期堆积可能导致依赖红利消失，建议定期批量合并。

</details>