# OpenClaw 生态日报 2026-05-13

> Issues: 500 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-05-13 02:15 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，这是为您生成的 **OpenClaw 项目日报 (2026-05-13)**。

---

## OpenClaw 项目动态日报 — 2026-05-13

### 1. 今日活动概览

过去 24 小时内，OpenClaw 项目保持了极高的活跃度，共新增和更新了 500 条 Issue 与 500 条 PR。项目发布了 3 个新的 Beta 版本（v2026.5.12-beta.1 至 beta.3），主要聚焦于 Codex 运行时工具可用性、WhatsApp 安装依赖及构建流程的修复。值得注意的是，PR 积压仍然严重，待合并 PR 数量达 460 条，但合并/关闭速度（40条）有所加快。

### 2. 版本发布

今日共发布 3 个版本，均为 `v2026.5.12` 系列的 Beta 版本。内容主要为 Bug 修复，无重大破坏性变更或迁移注意事项。

- **v2026.5.12-beta.1**: 重点修复了 AI 相关模块的权限问题，包括为 `memory-wiki` 的摄入（ingest）操作增加 admin 权限，为 Obsidian 搜索操作增加写入（write）权限。此外，还修复了构建过程中，当某些内置插件被排除在构建条目外时，可能导致的 `update/status` 错误。
- **v2026.5.12-beta.2**: 修复了 Codex 运行时中，当 OpenAI 的认证密钥存储在 agent 的 auth-profile 中而非环境变量时，`image_generate` 等媒体工具不可用的问题。同时，修复了 WhatsApp 安装在 pnpm 11 环境下，因 `libsignal` 子依赖被锁定而失败的问题。
- **v2026.5.12-beta.3**: 修复内容与 beta.2 相同。

### 3. 项目进展

虽然今日合并/关闭的 PR 总体数量不大，但其中包含了对稳定性有重要影响的修复。

- **处理积压PR**: 今日关闭/合并的 40 条 PR 中，包含了多个早期提交的 PR (如 #73659, #81246等)。
- **关键修复合并**:
    - **网关 SSH 连接修复 (PR #73659)**: 修复了网关在使用 SSH 作为远程传输方式时，WebSocket 安全检查无法正确识别本地回环端点的安全漏洞。现在 SSH 连接不再被错误地视为不安全的明文 WebSocket。
    - **WhatsApp 连接稳定性 (PR #81246)**: 修复了 WhatsApp 频道在关闭过程中，可能丢失处于防抖窗口期内的消息的问题。现在关闭进程会等待批次消息处理完毕后再执行，避免用户代码丢失回复。
    - **清理失效会话 (PR #81247)**: 修复了当复用的 `claude-cli` 会话因超时或非“会话过期”错误失败时，OpenClaw 会持续卡在已损坏的会话中。现在系统会主动清理这些失效的会话凭证，下次尝试时将创建新会话。

### 4. 社区热点

过去 24 小时，社区围绕几个核心问题展开了激烈讨论，主要集中在运行时代理（Codex vs Pi）的迁移、连接稳定性以及新功能提案上。

- **Codex 与 Pi 运行时的 QA 与迁移**:
    - **Issue #80319**: “QA tool-defaults suite conflates Codex-native tools...”。这是关于测试套件设计的深度讨论，用户指出现有测试将 Codex 原生工具与 OpenClaw 的动态工具混为一谈，导致测试结果无法真实反映 Codex 运行时的工具可用性。该讨论有 14 条评论，说明社区对运行时迁移的质量保证非常关注。
    - **Issue #80171**: “Codex-vs-Pi runtime parity QA harness (RFC + tracking)”。作为 Codex 迁移的后续，该 RFC 跟踪了建立运行时一致性测试工具（QA Harness）的进展。社区成员正在就如何验证两个运行时在工具、性能和行为上的完全对齐进行深入讨论。
- **连接稳定性问题**:
    - **Issue #72808**: “[Bug]: Silently lost connection to Slack”。用户报告使用数天正常的 Slack 连接会在没有任何通知的情况下静默丢失，导致机器人无法响应消息。该问题获得了 16 条评论和 2个👍，是今日讨论最热门的 Issue，反映了用户对渠道连接可靠性的极高需求。
- **新功能讨论**:
    - **Issue #79902**: “[Feature]: Add companion-friendly SQLite transcript/session seams”。用户提议在现有的数据库优先（database-first）运行时之上，增加一个对第三方“companion”应用更友好的 SQLite 接口。该提议针对的是当前需要解析不透明的运行时状态二进制块（blob）的痛点，获得了 12 条评论，表明高级用户有构建上层应用的需求。

### 5. Bug 与稳定性

今日报告的 Bug 涵盖了从连接问题到配置异常等多个方面，其中一些高关注度的回归问题值得警惕。

- **严重/高影响**:
    - **Slack 连接静默丢失 (Issue #72808)**: 如前所述，该问题影响用户正常使用，目前仍在讨论中，暂无关联的 Fix PR。
    - **会话卡死，需外部重启 (Issue #71127)**: 系统检测到会话卡住（stuck session）并发出警告，但没有自动恢复机制，导致会话永久冻结，只能通过手动重启网关恢复。
    - **`thought_signature` 400 错误回归 (Issue #72879)**: Google AI API 的 `thought_signature` 错误在 `v2026.4.25` 版本回归。该问题曾在 `v2026.4.24` 被修复，现在再次出现，对使用 Google Gemini 模型的用户影响较大。
- **Bug修复/有新进展**:
    - **Windows 平台问题 (Issue #78435)**: 用户报告在 Windows 上，Slack 频道启动阶段会阻塞事件循环长达 5 分钟，导致网关无法处理其他任务。目前已有 5 条评论，持续跟踪中。
    - **WhatsApp 自动回复被静默抑制 (Issue #80669)**: Agent 已生成回复，但在 WhatsApp 群组中不会发送出去。这是一个长期存在的问题，用户再次提出并提供了更详细的分析，希望得到解决。
    - **预 `#75095` 版本明文令牌未被清除 (Issue #80777)**: 一个安全敏感问题。在旧版本中写入 `config-audit.jsonl` 的明文密钥，在升级到新版本后不会被自动清理，存在安全风险。该问题已在 beta.1 版本的发布说明中被提及，但 Issue 仍在讨论解决方案。

### 6. 功能请求归类

用户社区提出了多项新功能需求，主要集中在可扩展性、易用性和平台兼容性方面。

- **可扩展性与开发者体验**
    - **SQLite 会话接口 (Issue #79902)**: 为高级用户构建第三方应用提供标准接口。
    - **技能（Skill）安装脚本钩子 (Issue #80213)**: 允许开发者在安装/更新技能后，运行自定义的配置脚本，超越现有的预定义安装类型。
    - **运行时一致性测试框架 (Issue #80171)**: 提议建立一个自动化测试框架来验证 Codex 和 Pi 运行时的行为一致性。
- **平台与渠道兼容性**
    - **多 Teams 机器人支持 (Issue #71058)**: 允许单个 OpenClaw 网关连接和管理多个 Azure Teams 机器人。
    - **Mac 版 Talk 模式的 Realtime API 支持 (Issue #71195)**: 让 Mac Talk 模式使用 OpenAI 的实时语音 API，以获得更低的对话延迟，与电话体验看齐。
    - **跨机器浏览器扩展支持 (Issue #53599)**: 用户反映用于浏览器操作的Chrome扩展被移除，但缺乏跨机器的替代方案，对于托管服务提供商是回归问题。
- **性能与资源控制**
    - **控制 UI 上传大小限制可配置 (Issue #71142)**: 希望将当前 5MB 的硬编码上传限制改为可配置项。
    - **沙箱工作区权限增强 (Issue #37634)**: 当 `workspaceAccess` 设置为 `none` 时，隔离的沙箱工作区应该是可写的，而不是当前的只读状态，以支持富工具操作。
- ****注意**：以上功能请求目前多数处于讨论阶段，尚未有关联的 PR 提交 **。

### 7. 用户反馈摘要

从今日的 Issues 和评论中，可以提炼出用户的真实声音：

- **“静默失败”让用户头疼**: 用户报告 Slack 连接丢失 (`#72808`)、WhatsApp 回复被丢弃 (`#80669`) 等问题时，最不满的是系统**没有任何通知或告警**，导致他们需要花费大量时间排查问题，这严重影响了使用体验和信任度。
- **迁移过程中的阻力**: 关于 Codex vs Pi 运行时的讨论（`#80319`, `#80171`）显示出部分社区成员对核心架构变动感到**困惑和不安**。他们希望看到明确的测试和兼容性保障，以应对出现的工具行为差异，这影响了他们升级的意愿。
- **对“数据库优先”架构的期待与困惑**: 高级用户对新的 database-first 运行时（`#79902`）既期待又感到困惑。他们希望利用新架构的能力，但发现当前的设计使得访问原生数据困难，从而催生了对更友好接口的诉求。
- **平台特定问题影响范围广**: 来自 Windows 用户（`#78435` 事件循环阻塞, `#80857`*未在前50条展示但有提及*）和 Docker 用户（`#73874` 死锁）的反馈持续存在，表明跨平台兼容性，特别是 Windows 和容器环境下的稳定性，是用户持续关注的痛点。

### 8. 待处理积压

以下问题和 PR 持续开放时间长，或对项目健康至关重要，建议维护者重点关注。

- **高优先级的开放 Issue (待处理)**
    - **`#37634` (沙箱工作区权限问题)**: 自 3月6日起开放至今，已获得 4个👍，是用户长期呼吁的改进点。
    - **`#54488` (会话通道饿死问题)**: 自 3月25日起开放，影响多通道、高并发场景下的消息处理公平性。
    - **`#57901` (安全卫士忽略模型配置)**: 自 3月30日起开放，一个配置不符合预期的行为 Bug，可能导致用户成本飙升或决策模型错误。
- **大量等待合并的 PR (PR 积压)**
    - 今日共有 **460 条 PR 处于待合并状态**，虽然合并/关闭速度提升至40条，但整体积压依然庞大。这可能导致新功能延迟、Bug 修复周期拉长，从而影响社区贡献者的积极性。例如，一些标注了 `size: S` 或 `size: XS` 的小型修复和文档 PR（如 `#70002`, `#70918`）长期未得到处理，会降低社区贡献的意愿。
- **长期未获得维护者回应的关键 Issue**
    - **`#53599` (浏览器扩展跨机器替代方案)**: 作为一个回归问题，该 Issue 自 3月24日提交后，至今未得到维护者的明确回应，很可能导致依赖此功能的托管服务提供商持续受阻。

---

## 横向生态对比

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是为您生成的基于 2026-05-13 各项目动态的横向对比分析报告。

---

## 横向对比分析报告：AI 智能体与个人助手开源生态 (2026-05-13)

### 1. 今日横向概览

今日，四个项目均保持了活跃的社区动态。**OpenClaw** 以极高的 Issue 和 PR 数量（各500条）及三次 Beta 版本发布领跑，核心是修复 Codex 运行时兼容性与渠道连接（Slack、WhatsApp）稳定性。**Zeroclaw** 通过大量 PR（49条）积极为 v0.8.0 大版本做准备，重点在代码重构和 Bug 修复。**PicoClaw** 发布了新的 Nightly 版本，并围绕新模型（小米MiMo）兼容性和沙箱安全漏洞产生了高质量讨论。**NanoBot** 活跃度适中，焦点集中在模型故障自动切换和飞书等渠道的体验优化上。

### 2. 各项目活跃度对比

| 项目 | 今日活跃 Issues | 今日活跃 PRs | 版本发布情况 | 事实性备注 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500条 (新增/活跃) | 500条 (新增/活跃) | 3个 (v2026.5.12-beta.1~3) | 活动量巨大，但积压也严重；版本聚焦 Bug 修复。 |
| **Zeroclaw** | 10条 | 49条 | 无 | PR 数量多，但无正式版本；`integration/v0.8.0` 分支准备密集合并。 |
| **PicoClaw** | 17条 | 16条 | 1个 (Nightly v0.2.8) | 发布了 Nightly 构建；社区讨论质量高。 |
| **NanoBot** | 8条 | 19条 | 无 | 活跃度较低，但达成了多项具体的功能合并。 |

### 3. OpenClaw 与同类对照

- **活动量差异**：**OpenClaw** 的活动量（Issue 与 PR 各500条）远超其他三个项目，反映出其庞大的用户基数和极高的社区参与度，但也伴随着严重的 PR 积压（460条待合并）。
- **技术重点差异**：**OpenClaw** 当前聚焦于运行时（Codex vs Pi）的迁移、调试及版本修复，如保障运行时代理工具可用性。**Zeroclaw** 正进行大规模内部重构（速率限制、路径防护的装饰器化）。**PicoClaw** 和 **NanoBot** 则更侧重于处理新模型集成（小米MiMo、DeepSeek）和特定渠道（WhatsApp、飞书）的兼容性 Bug。
- **社区讨论面差异**：**OpenClaw** 的社区讨论更宏观，关注运行时架构演进（#80171）和测试套件设计（#80319）。**Zeroclaw** 的讨论焦点在具体的工作流阻塞 Bug（#6120）和功能请求（SearXNG、ComfyUI）。**PicoClaw** 和 **NanoBot** 的社区讨论则更偏向于具体功能的缺失（流式输出、多用户记忆隔离）和新集成带来的 Bug。

### 4. 共同出现的技术方向

- **渠道连接稳定性**：多个项目都报告了实时通信渠道的连接与消息处理问题。
    - **OpenClaw**：Slack 连接静默丢失 (Issue #72808)、WhatsApp 关闭时消息丢失 (PR #81246)。
    - **Zeroclaw**：Discord 媒体收发完全失效 (Issue #6556)。
    - **PicoClaw**：Telegram 频道在 v0.2.8 版本启动后无法使用 (Issue #2742)。
- **运行时代理/模型的兼容性**：随着新模型和运行时架构引入，兼容性问题频发。
    - **OpenClaw**：Codex 与 Pi 运行时的测试和迁移 (Issue #80319, #80171)、Google AI `thought_signature` 错误回归 (Issue #72879)。
    - **NanoBot**：DeepSeek V4 Flash 模型因 `reasoning_content` 字段报错 (Issue #3760)。
    - **PicoClaw**：小米 MiMo 模型多轮对话 API 参数错误 (Issue #2859)。
- **沙箱安全与资源隔离**：Agent 的文件系统访问权限和会话隔离是共同关注点。
    - **PicoClaw**：`find /` 命令可绕过沙箱，存在路径泄露风险 (Issue #2688)。
    - **NanoBot**：用户询问多用户会话 (`USER.md`/`MEMORY.md`) 的隔离机制不透明 (Issue #3744)。
- **可观测性**：多个项目均在改进运行时的状态监控和故障排查手段。
    - **Zeroclaw**：修复了 SSE 日志流，为 Docker 部署添加构建版本信息 (PR #6553)。
    - **PicoClaw**：用户持续要求 Web Chat 实现流式输出 (Issue #1950)。

### 5. 差异化定位分析

- **功能侧重**:
    - **OpenClaw**: 全能型平台，强调极致的可扩展性（技术栈、渠道、运行时），当前处于架构大规模演进（Codex 迁移）阶段。
    - **NanoBot**: 侧重端侧聊天体验的优化，如在模型故障切换 (`fallback_models`) 和多用户上下文隔离 (`session/`) 上投入较多。
    - **Zeroclaw**: 面向开发者社区的组件化平台，通过 `v0.8.0` 大版本重建内部架构，并积极吸纳社区贡献的特定工具（如 Home Assistant 集成）。
    - **PicoClaw**: 面向轻量化与低成本硬件（如 LicheeRV）部署，强调特定模型（小米MiMo）和本地推理（OpenVINO）的支持。
- **目标用户**:
    - **OpenClaw**: 希望构建复杂、多 Agent、高可用个人 AI 助手的技术极客和开发者。
    - **NanoBot**: 希望快速部署适用于团队协作和特定渠道（飞书、WhatsApp）的聊天机器人用户。
    - **Zeroclaw**: 需要高度可定制、强调组件化和代码质量的企业级集成开发者。
    - **PicoClaw**: 寻求在低功耗边缘设备上运行个人 AI 助手的硬件爱好者、嵌入式开发者。
- **技术架构**:
    - **OpenClaw**: 多运行时（Codex, Pi）并存，采用联邦架构，核心复杂，耦合度高。
    - **NanoBot**: 架构相对轻量，围绕 Agent 和渠道抽象层构建。
    - **Zeroclaw**: 采用插件化、装饰器驱动架构，强调代码洁净度和组件复用性，正进行模块化重构。
    - **PicoClaw**: 高度集成，针对特定硬件进行性能优化，跟随 OpenClaw 核心，但集成了更多边缘计算能力。

### 6. 社区活跃度记录

基于今日的数据，可将活跃度分为三个层级：
- **第一梯队 (极高活跃)**：**OpenClaw**。凭借庞大的 Issue/PR 数量和高频版本发布，毫无疑问地主导了今日的讨论。
- **第二梯队 (中等活跃)**：**Zeroclaw** 和 **PicoClaw**。尽管无新版本发布，但 Zeroclaw 有密集的 PR 活动，PicoClaw 则产生了高质量的 Bug 报告和社区讨论。
- **第三梯队 (稳定活跃)**：**NanoBot**。活动量相对较低，但功能合并和 Bug 修复流程清晰，运营状态稳定。

### 7. 有证据支撑的观察

1.  **“运行时/模型兼容性”是当前个人 AI 智能体生态的核心痛点**。无论是 OpenClaw 的架构迁移，还是 NanoBot 与 PicoClaw 的新模型集成，都触发了大量影响使用的 Bug 和用户困惑。这表明行业正快速向低成本、多样化的 AI 模型切换，但随之而来的兼容性挑战正成为技术负债。

2.  **“渠道静默故障”是影响用户信任度的首要问题**。OpenClaw 的 Slack 连接丢失、Zeroclaw 的 Discord 收发失效、NanoBot 的 WhatsApp 回复丢失，均被用户反复提出。用户对无告警的静默故障忍耐度极低，这成为影响产品成熟度的关键短板，提示项目需要加强连接自愈和异常通知机制。

3.  **高级用户对“数据库优先”的新架构既期待又困惑**。OpenClaw 社区（Issue #79902）和 NanoBot 社区（Issue #3689, #3744）的多条反馈，均指向用户希望更透明、更可控地访问 Agent 的核心数据（会话上下文、记忆）。这暗示，随着 Agent 从“玩具”走向“工具”，用户对运行时数据的可审计性、可管理性和可扩展性提出了更高要求。

4.  **模型供应链的安全和身份验证问题值得关注**。Zeroclaw 用户反馈的 Onboarding 流程混淆（#6120），以及 PicoClaw 报告的沙箱安全漏洞（#2688），都指向了围绕模型接入的流程安全性。这不是孤立的 Bug，而是随着支持模型增多，身份凭证管理、用户引导和沙箱隔离等流程设计不完善的表现。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 NanoBot GitHub 数据，现为您生成本期项目动态日报。

---

### NanoBot 项目动态日报 | 2026-05-13

---

#### 1. 今日活动概览

过去24小时内，NanoBot 项目活跃度较高，共处理了8条 Issue 和19条 Pull Request。其中，Issues 中新增或活跃4条，已关闭4条；PR方面，有9条处于待合并状态，另有10条已被合并或关闭。项目无新版本发布。今日核心进展聚焦于模型故障转移（fallback）、多用户环境下的上下文隔离以及渠道集成（如飞书、WhatsApp）的体验优化。

#### 2. 版本发布

无。

#### 3. 项目进展

今日合并/关闭了多项重要 PR，推动了功能和架构的优化：

- **PR #3756 [OPEN]**：新增 `fallback_models` 功能，允许在 `ModelPresetConfig` 中配置备用模型链，当主模型返回非瞬时错误时可自动切换。([链接](https://github.com/HKUDS/nanobot/pull/3756))
- **PR #3757 [CLOSED]**：重构了 Agent 交互逻辑，移除了 `ask_user` 工具及其异常控制流。模型现在可以自然地在回复文本中提问，用户的下一条消息将作为新回合并与会话历史保持连贯。([链接](https://github.com/HKUDS/nanobot/pull/3757))
- **PR #3729 [CLOSED]**：完成了工具系统的插件化架构重构，让每个工具可以通过元数据自描述，简化了工具注册流程。([链接](https://github.com/HKUDS/nanobot/pull/3729))
- **PR #3747 [CLOSED]**：为飞书渠道添加了 `topic_isolation` 可配置开关，解决了群组内按话题隔离会话后无法批量处理文件的问题。([链接](https://github.com/HKUDS/nanobot/pull/3747))
- **PR #3755 [CLOSED]**：移除了通过静态分析和覆盖率验证确认的5处无效代码（共103行），提升了代码库整洁度。([链接](https://github.com/HKUDS/nanobot/pull/3755))

#### 4. 社区热点

今日社区讨论热度较高的议题集中在**会话记忆与上下文连续性**上。

- **Issue #3689**：用户报告在执行中断会话后，模型丢失了上一轮的上下文，导致无法理解“测试”任务。此 Issue 获得了 4 条评论，反映出用户对于在多轮、打断式交互中保持会话连续性的强烈需求。([链接](https://github.com/HKUDS/nanobot/pull/3689))
- **Issue #3744**：用户询问在多用户共用同一个 Agent 时，`USER.md` 和 `MEMORY.md` 机制如何处理，以及对 `session/` 目录作用的疑惑。这暴露了当前在**团队协作场景**下，会话上下文隔离机制的模糊性。([链接](https://github.com/HKUDS/nanobot/issues/3744))

#### 5. Bug 与稳定性

今日报告了数个 Bug，主要涉及模型兼容性和文件处理：

- **【严重】【模型】DeepSeek V4 Flash 报错 (Issue #3760)**：用户使用 `deepseek-v4-flash` 模型时，因 `reasoning_content` 字段处理不当，导致 API 返回400错误。该问题在 `v0.1.5.post3` 版本中复现。([链接](https://github.com/HKUDS/nanobot/issues/3760))
    - **相关进展**：类似问题在 #3753 中已有讨论，当前已在该 issue 中关闭。
- **【中等】【模型】模型忽略外部文件内容 (Issue #3754)**：用户反馈，当 `AGENTS.md` 指定读取小文件时，模型会跳过 `read_file` 工具调用，转而依赖自身知识库编造内容，影响任务准确性。([链接](https://github.com/HKUDS/nanobot/issues/3754))
- **【低】【渠道】企业微信文件名识别问题 (Issue #3737, Closed)**：企业微信发送的文件名无法正确识别，已通过 PR #3751 合并修复。([链接](https://github.com/HKUDS/nanobot/issues/3737))
- **【低】【修复】WhatsApp 语音转录后残留文件路径 (PR #3752, Open)**：语音消息转录成功后，原始音频文件路径仍被附加到对话中，导致 LLM 误以为无法处理。当前已有修复 PR。([链接](https://github.com/HKUDS/nanobot/pull/3752))

#### 6. 功能请求归类

以下是今日用户提出的功能请求及相关 PR：

| 功能需求 | 相关 Issue / PR | 当前状态 |
| :--- | :--- | :--- |
| **模型故障自动切换** / 动态切换模型 | PR #3756 (`fallback_models`); Issue #3742 (`/model` 命令) |  `#3756` 已实现备用链，`#3742` 待实现 |
| **飞书群组话题隔离** 可配置开关 | Issue #3692; PR #3747 | 已通过 PR `#3747` 合并解决 |
| **多用户环境下的会话隔离** | Issue #3744 (session级别MEMORY) | 讨论中，尚无对应 PR |
| **中断后恢复会话上下文** | Issue #3689 (中断丢失记录) | 讨论中，尚无对应 PR |
| **CLI 显示模型推理内容** | PR #3655 (`show_reasoning` 配置) | 开放中 |
| **支持 Qiniu AI 提供商** | PR #3643 | 开放中 |
| **Atomic Chat 作为本地 LLM 提供商** | PR #3750 | 开放中 |
| **API 流式输出工具进度事件** | PR #3745 (SSE events) | 开放中 |
| **WhatsApp 交互反馈** | PR #3761 (打字指示器和表情反应) | 开放中 |

#### 7. 用户反馈摘要

- **痛点**：用户普遍对**会话中断后丢失上下文**感到困扰（Issue #3689），特别是在执行复杂任务时，打断后模型无法理解当前进度。此外，**飞书群组的话题隔离**导致无法同时处理多个文件，影响批量操作体验（Issue #3692）。
- **诉求**：用户期望 Agent 能更好地理解“**团队协作**”场景，对多用户共享 Agent 时的记忆机制 (`USER.md` / `MEMORY.md`) 有更高的透明度和隔离能力（Issue #3744）。
- **兼容性问题**：有多位用户反馈了与 **DeepSeek V4 Flash** 模型的兼容性问题，涉及请求报错（Issue #3760）和工具调用失败（Issue #3754），表明该模型集成尚不稳定。

#### 8. 待处理积压

- **长期任务**：PR #3460 (`LongTaskTool`)，旨在支持多步骤的 Agent 长任务，创建于 2026-04-26，但最近一次更新是 2026-05-12，期间进展缓慢，建议维护者评估整合优先级。([链接](https://github.com/HKUDS/nanobot/pull/3460))
- **提供商支持**：关于“/model” slash命令（Issue #3742）的请求自5月11日提出后无人响应，该功能与 PR #3756 的 `fallback_models` 有较强关联性，可考虑将其作为体验层实现整合。([链接](https://github.com/HKUDS/nanobot/issues/3742))

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的数据，以下是为您生成的 Zeroclaw 项目动态日报（2026-05-13）。

---

## Zeroclaw 项目动态日报 | 2026-05-13

### 1. 今日活动概览
过去 24 小时内，Zeroclaw 项目社区活跃度上升，共产生 10 条 Issue 更新和 49 条 Pull Request (PR) 更新。在 Issue 方面，新开了 5 个需求与 Bug 议题，同时有 5 个问题被解决并关闭。PR 方面尤其繁忙，有待合并的 PR 多达 31 个，另有 18 个 PR 已被合并或关闭。项目未发布新版本，但 `integration/v0.8.0` 分支正在接收密集的合并准备，预示着一个重大版本更新即将到来。

### 2. 版本发布
无

### 3. 项目进展
今日合并或关闭了多个关键 PR，主要集中在代码重构、Bug 修复和跨版本合并准备上。
- **合并/关闭情况**：今日共有 18 个 PR 被合并或关闭。其中，一系列由 [@yijunyu](https://github.com/yijunyu) 发起的，旨在将速率限制（`RateLimitedTool`）和路径防护（`PathGuardedTool`）逻辑，从多个独立工具（如 `GlobSearchTool`、`BrowserTool`、`ClaudeCodeRunnerTool` 等）内部迁移至装饰器模式的 PR（[#5772](https://github.com/zeroclaw-labs/zeroclaw/pull/5772)、[#4947](https://github.com/zeroclaw-labs/zeroclaw/pull/4947)、[#4954](https://github.com/zeroclaw-labs/zeroclaw/pull/4954)、[#4953](https://github.com/zeroclaw-labs/zeroclaw/pull/4953)）已全部关闭，表明这项持续多日的代码优化工作已完成合入。
- **重大特性推进**：一个体量极大的 PR [**#6398**](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) (`integration/v0.8.0`) 正在积极开发中，它试图将大量新特性、Schema v3 迁移（[#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947)）和 Bug 修复合并回主分支。该 PR 状态为 Draft，其负责人 [@singlerider](https://github.com/singlerider) 今日也同时关闭了重要的 Discord 媒体处理 Bug ([#6556](https://github.com/zeroclaw-labs/zeroclaw/issues/6556))，显示维护者正在积极为 v0.8.0 的发布扫清障碍。

### 4. 社区热点
- **热点议题：Onboarding 流程受阻**
  议题 [**#6120**](https://github.com/zeroclaw-labs/zeroclaw/issues/6120) 报告了一个严重（S1 - 工作流阻塞）的 Bug：当用户选择 `OpenAI Codex` 作为 Provider 时，Onboarding 工具却错误地要求用户输入 `OpenAI API Key`。这直接阻挡了用户连接 Codex 订阅的意图。该议题被标记为 `priority:p1`，社区对此高度关注，有 2 条评论讨论该问题。

- **热点 PR：可观测性与日志流修复**
  PR [**#6553**](https://github.com/zeroclaw-labs/zeroclaw/pull/6553) 旨在修复已损坏的 SSE `/logs` 流，并为远程/Docker 部署添加构建版本信息。它合并了此前另一个 PR [#5986](https://github.com/zeroclaw-labs/zeroclaw/pull/5986) 的部分成果（`LlmResponse` SSE 序列化）。由于涉及到核心的运行时可观测性，这个 PR 被标记为 `risk: high`，且仍在开放讨论中。

### 5. Bug 与稳定性
今日报告的 Bug 涵盖了从工作流阻塞到跨 Provider 兼容性问题等多个方面：
- **严重性 S1 - 工作流阻塞**：
  - [#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120)：Onboarding 时 OpenAI Codex 选择被错误引导到 OpenAI API Key 输入。尚无修复 PR。
- **严重性 S2 - 功能降级**：
  - [#6097](https://github.com/zeroclaw-labs/zeroclaw/issues/6097)（已关闭）：技能（skill）生成的本地图片路径无法被 API 模型读取。该问题已被修复，状态为 `CLOSED`。
  - [#6415](https://github.com/zeroclaw-labs/zeroclaw/issues/6415)（已关闭）：Telegram 频道中，当 `stream_mode = "partial"` 时，TTS 语音回复被静默禁用。该问题已被解决。
  - [#5453](https://github.com/zeroclaw-labs/zeroclaw/issues/5453)（已关闭）：WebSocket 端点无法处理 `[IMAGE:]` 多模态标记，导致图片以纯文本形式传递。已修复并关闭。
  - [#6556](https://github.com/zeroclaw-labs/zeroclaw/issues/6556)（已关闭）：Discord 频道媒体收发完全失效，包括入站图片无法处理、出站标记泄露等问题。该严重 Bug 今日被关闭，表明已得到修复。

### 6. 功能请求归类
用户提出了多项新的功能需求：
- **频道集成**：
  - [#3090](https://github.com/zeroclaw-labs/zeroclaw/issues/3090)：请求支持企业微信（Wecom）频道，包括 WebSocket 和 Webhook 两种模式。该需求已存在 2 个月并得到维护者响应，被标记为 `status:accepted`。
- **搜索工具增强**：
  - [#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316)：建议增加对隐私搜索聚合器 SearXNG 的支持，并改进 DuckDuckGo 搜索的 CAPTCHA 检测，以提升 Web 搜索在自主 Agent 场景下的可靠性。
- **媒体生成**：
  - [#6563](https://github.com/zeroclaw-labs/zeroclaw/issues/6563)：请求将 ComfyUI（包括官方 Comfy Cloud）作为一等媒体生成提供商集成，不仅用于生成 LinkedIn 帖子图片，还为未来的 `gen_video` 工具搭建基础。
- **智驾集成**：
  - PR [#6464](https://github.com/zeroclaw-labs/zeroclaw/pull/6464) 为一个全新的 `home_assistant` 工具提交了代码，旨在通过 REST API 驱动自托管的 Home Assistant 实例，填补此前该功能被标记为 `ComingSoon` 的空白。

### 7. 用户反馈摘要
- **用户痛点**：从 Issue 评论中可以提炼出两个主要痛点。一是集成复杂性：用户[@tidux](https://github.com/tidux) 在尝试连接 Codex 订阅时遭遇 Onboarding 流程错误（[#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120)），这直接导致其工作流受阻。二是功能缺失：对 SearXNG的支持（[#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316)）和 ComfyUI 作为媒体提供商（[#6563](https://github.com/zeroclaw-labs/zeroclaw/issues/6563)）的呼声，表明用户对隐私保护和高级图像生成/视频生成有强烈需求。
- **开放性问题**：关于丢失的 153 次提交的审计追踪议题 [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) 仍为开放状态，社区成员 [@Audacity88](https://github.com/Audacity88) 持续跟进，以评估这些丢失代码对当前版本的影响。

### 8. 待处理积压
- **长期未响应的重要 Issue**：
  - Issue [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)（审计：追踪批量还原中丢失的153次提交）已开放近三周，被标记为 `priority:p2` 且 `status:in-progress`，但尚无明确的修复 PR 与之关联。这是一个纯粹的技术债务与代码审计问题，值得维护者关注，以确保没有关键修复被遗漏。
- **等待维护者审核**：
  - PR [#6464](https://github.com/zeroclaw-labs/zeroclaw/pull/6464)（`feat(tools): home_assistant tool`）已开放一周，待维护者审查。该功能是社区贡献的新集成，但被标记为 `risk: high`。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，这是 2026-05-13 的 PicoClaw 项目动态日报。

---

### **PicoClaw 项目动态日报 (2026-05-13)**

#### 1. 今日活动概览

过去24小时内，PicoClaw 项目社区活跃度较高。共产生 17 条 Issue 更新（包含 11 条新开/活跃及 6 条已关闭）和 16 条 PR 更新（12 条待合并，4 条已合并/关闭）。发布了 1 个最新的 Nightly 版本。社区讨论重点围绕新模型集成（小米MiMo）的兼容性问题、关键 Bug 修复的进展以及多项功能增强的提案。

#### 2. 版本发布

- **Nightly Build (v0.2.8-nightly.20260513.223ebdf0)**
  - 发布了最新的自动化 Nightly 构建版本。该版本基于当前 main 分支代码，可能包含最新的实验性功能，但也可能存在不稳定性。
  - **变更日志**: [查看完整变更](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

#### 3. 项目进展

今日有 4 个 PR 被合并或关闭，主要涉及文档和 CLI 功能改进。

- **文档更新**: PR #2852 合并，为 Agent 自进化功能（`evolution` 配置块）增加了文档和 Web UI 配置支持。PR #2854 合并，添加了关于 LicheeRV-Claw 在 AliExpress 上架的消息。
- **CLI 功能改进**: PR #2505 和 PR #2490 被关闭，分别改进了工作区文件的嵌入流程和修正了关于配置文件的首次使用引导说明。

#### 4. 社区热点

- **Issue #2859 - 小米MiMo模型多轮对话Bug**
  - **链接**: https://github.com/sipeed/picoclaw/issues/2859
  - **分析**: 这是今日最新提出的 Issue，热度较高（刚创建即获得 1 个👍）。用户报告集成小米 MiMo-2.5 模型（通过微信渠道）时，在 2-3 轮对话后出现 LLM 调用失败，返回 400 错误（参数错误）。这表明在新模型接入与多轮对话交互方面可能存在兼容性问题，是社区关注的焦点。

- **Issue #2513 - Gateway 启动异常**
  - **链接**: https://github.com/sipeed/picoclaw/issues/2513
  - **分析**: 该 Issue 虽然已关闭，但评论数高达 9 条，是今日讨论最活跃的。描述了一个在 Debian 系统上的严重启动问题，社区曾对此进行了深入讨论。其关闭状态可视为针对此问题的解决方案已落地或已被认定为特定环境下的边缘情况。

- **Feature Request: Web Chat 流式输出 (Issue #1950)**
  - **链接**: https://github.com/sipeed/picoclaw/issues/1950
  - **分析**: 关于 Web Chat 流式输出的功能请求，尽管是 3 月提出的，但在今日仍有评论，说明这是一个持续被社区期待的基础功能。用户期望在 Web 界面上获得如 ChatGPT 般的实时文字输出体验。

#### 5. Bug 与稳定性

**高优先级 Bug:**
- **Issue #2720 - PID 文件校验缺陷导致异常重启** [OPEN]
  - **链接**: https://github.com/sipeed/picoclaw/issues/2720
  - **概要**: Gateway 因 PID 文件包含被系统进程（如 `systemd-resolved`）复用的 PID 而无法启动。这是一个关键的可靠性 Bug。
  - **修复进展**: 已有待合并的修复 PR #2813，它改进了启动时的身份验证逻辑。

- **Issue #2688 - `find /` 命令可绕过工作区沙箱，存在安全风险** [OPEN]
  - **链接**: https://github.com/sipeed/picoclaw/issues/2688
  - **概要**: Agent 的沙箱机制存在漏洞，可通过 `find /` 命令枚举整个文件系统路径。
  - **修复进展**: 已有待合并的修复 PR #2693，该 PR 意图通过增加对 `find /` 和 `ls /` 的拦截来修复此问题。

**中优先级 Bug / 新报告 Bug:**
- **Issue #2859 - 小米 MiMo 模型多轮对话错误** [OPEN]
  - **链接**: https://github.com/sipeed/picoclaw/issues/2859
  - **概要**: 新报告 Bug，接入小米 MiMo 模型后，多轮对话会因参数错误失败。

**低优先级 / 回归 Bug:**
- **Issue #2742 - v0.2.8 版本 Gateway 启动后无频道** [OPEN]
  - **链接**: https://github.com/sipeed/picoclaw/issues/2742
  - **概要**: 用户报告在升级到 v0.2.8 后，Telegram 频道无法正常启用。
- **Issue #1757 - 创建定时任务时出现频道错误** [OPEN]
  - **链接**: https://github.com/sipeed/picoclaw/issues/1757
  - **概要**: 一个关于 cron 任务频道错误的长期未解决问题。

#### 6. 功能请求归类

以下是过去24小时内活跃的功能请求和相关 PR：

- **LMM / 多模态支持增强 (PR #2755)**: 添加对 OpenAI 兼容层的流式推理内容 (`reasoning_content`) 和视频媒体支持。
- **本地推理支持 (PR #2703)**: 添加对 Intel OpenVINO Model Server 的支持，用于在本地 CPU/GPU/NPU 上进行推理。
- **配置可靠性提升 (Issue #2771)**: 提出改进配置系统，包括更新示例配置、自动备份以及为 Web UI 添加配置验证。
- **Agent 上下文与记忆管理 (Issue #2774)**: 提议借鉴开源插件，增强 Agent 的上下文感知能力、跨会话记忆和后台历史压缩。
- **构建与渠道支持 (Issue #2625)**: 请求为官方编译版本默认开启 WhatsApp 频道支持。
- **流式 HTTP 请求 (Issue #2404)**: 请求在配置中添加选项，以支持向 LLM 后端发送流式 HTTP 请求。

#### 7. 用户反馈摘要

- **关于 Gateway 启动问题**: 在 Issue #2513 和 #2720 的讨论中，用户反馈了在 Debian 和 Ubuntu 系统下 Gateway 启动失败的问题，主要涉及 PID 文件校验和频道加载，对系统可用性造成了较大影响。
- **关于流式输出**: 社区对 Web Chat 实现流式输出呼声较高（Issue #1950），认为这是提升用户体验的关键功能。
- **关于配置体验**: 用户在 Issue #2771 中详细描述了配置迁移存在的多个问题，如示例配置过期、缺少自动备份和 Web UI 验证，表明配置管理流程的成熟度是当前用户的一个痛点。
- **关于平台构建**: 在 Issue #2625 中，Raspberry Pi 用户反馈默认 ARM64 构建未包含 WhatsApp 支持，导致更新不便。

#### 8. 待处理积压

以下 Issue 和 PR 已开放一段时间且较为重要，提醒项目维护者关注：

- **长期未关闭的功能请求**:
  - **Web Chat 流式输出** (Issue #1950): 已开放近 2 个月，评论较多，属于用户核心诉求。
  - **流式 HTTP 请求配置** (Issue #2404): 已开放 1 个多月，与 Web Chat 流式输出功能需求相关。
- **高优先级 Bug 修复 PR**:
  - **PID 文件校验修复** (PR #2813): 针对 Issue #2720，修复已准备就绪，等待合并。
  - **沙箱安全漏洞修复** (PR #2693): 针对 Issue #2688，涉及安全问题，值得优先审阅。
- **关键功能增强 PR**:
  - **会话管理命令** (PR #2491): 添加 `/status`, `/compact`, `/new` 等命令，已开放 1 个月且被标记为 `go`，是增强 Agent 可用性的重要功能。

</details>