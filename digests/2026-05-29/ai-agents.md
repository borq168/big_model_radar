# OpenClaw 生态日报 2026-05-29

> Issues: 374 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-05-29 02:28 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我将根据提供的 OpenClaw 项目数据，为您生成 **2026年5月29日** 的项目动态日报。

---

# OpenClaw 项目日报 - 2026-05-29

## 1. 今日活动概览

过去24小时，OpenClaw 项目异常活跃，共处理了 374 条 Issue 和 500 条 PR。其中，Issue 关闭率超 50%（197/374），显示了高效的响应和修复速度。项目发布了两个版本（`v2026.5.27` 及 Beta），主要加强了安全边界和内容过滤。社区讨论高度集中在 **v2026.5.26 版本引入的“Native hook relay unavailable”回归问题**，该问题已成为当前最影响用户使用的稳定性焦点。此外，多个涉及会话状态、消息丢失和认证提供商的严重 Bug 仍在持续修复中。

## 2. 版本发布

项目发布了一个新版本及一个 Beta 版本：

- **v2026.5.27 (稳定版)**
  - **链接**: [Release v2026.5.27](https://github.com/openclaw/openclaw/releases/tag/v2026.5.27)
  - **摘要**: 本次发布着重加强了安全与内容边界。主要变更包括：将群组提示文本排除在系统提示之外；标准化重复点的 Hostname；阻止副作用命令包装和不安全的 Node 运行时环境覆盖；拒绝无认证的 Tailscale 暴露；以及强化节点/设备角色的审批流程。

- **v2026.5.27-beta.1 (测试版)**
  - **链接**: [Release v2026.5.27-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.5.27-beta.1)
  - **摘要**: 此 Beta 版本包含了与稳定版相同的高优先级安全加固和内容边界改进，便于用户提前验证。

**注意**: 本次发布未提及公开数据中记录的破坏性变更（Breaking Changes），但鉴于其增强了安全限制，用户在升级后若遇到意外行为，应优先检查配置权限和网络策略。

## 3. 项目进展

过去24小时有大量 PR 处于活跃状态，以下为今日取得关键进展（被合并或关闭）的项目：

- **Bug 修复与稳定性**:
  - **#87736**: [**已关闭**] 修复了在 #86602 后，预压缩（preflight compaction）仍然会触发 Codex 线程丢失的回归问题。这是一个对 v2026.5.27 版本的重要修复。
    - [链接](https://github.com/openclaw/openclaw/issues/87736)
  - **#87331**: [**已关闭**] 修复了 v2026.5.26 版本中，Relay 重新注册后因生成 UUID 过期导致“Native hook relay unavailable”的问题。该修复直接回应了社区最关心的稳定性 bug。
    - [链接](https://github.com/openclaw/openclaw/issues/87331)
  - **#86239**: [**已关闭**] 修复了在事件循环饥饿（event-loop starvation）条件下，即使 Harness 已注册仍报 `MissingAgentHarnessError` 的问题，根因与 #86227 不同。维护者已定位并关闭。
    - [链接](https://github.com/openclaw/openclaw/issues/86239)

- **功能与改进**:
  - **#87849 (PR)**: [**开启中**] 提议新增一个 `codex-supervisor` 插件，提供对 Codex 应用服务器的端点探测、会话管理、中断控制等能力，是 Codex 生态的重要扩展。目前需要补充证明（needs proof）。
    - [链接](https://github.com/openclaw/openclaw/pull/87849)

## 4. 社区热点

过去24小时，社区讨论热度高度集中在 `v2026.5.26` 版本引入的 **“Native hook relay unavailable”** 问题上。

- **#87331**: 该 Issue 获得了 17 条评论和 10 个 👍，是今日互动量最高的话题。报告者详细描述了在升级到 v2026.5.26 后，Codex 工具调用间歇性失败的问题，重启网关只能短暂恢复。该 Issue **已在今日被关闭**，表明维护者已经定位并通过某个 PR 修复。
    - [链接](https://github.com/openclaw/openclaw/issues/87331)

- **#87395**: 症状与 #87331 高度相似，报告了 “Native hook relay” 会间歇性不可用，导致内存/文件系统工具被阻塞。该 Issue 共获得 14 条评论和 8 个 👍。该 Issue **已在今日被关闭**，进一步证实了该问题已被解决。
    - [链接](https://github.com/openclaw/openclaw/issues/87395)

- **#87536**: 一个更新、更严重的报告，描述在 v2026.5.26 中，Native hook relay 网桥甚至无法启动，导致所有本地工具调用都返回“不可用”错误。该问题获得了 6 条评论，目前仍处于 **开启 (OPEN)** 状态，说明可能还存在更深的未解决问题，或在 #87331 的修复方案中未被完全覆盖。
    - [链接](https://github.com/openclaw/openclaw/issues/87536)

**分析**: `v2026.5.26` 版本在 Native hook relay 机制上存在严重且普遍的回归问题，严重阻塞了依赖 Codex 框架的用户工作流。虽然主要 Issue 已关闭，但仍有残留报告 (#87536)，需持续关注。

## 5. Bug 与稳定性

以下为今天最为活跃、严重的 Bug 报告，按严重程度排序：

- **P1 级（最高优先级）**:
  - **#87536 (OPEN)**: **Native hook relay 网桥无法启动** (v2026.5.26)。此问题比间歇性失败更严重，导致所有本地工具调用完全失效。**无 fix PR**。
    - [链接](https://github.com/openclaw/openclaw/issues/87536)
  - **#87331 (CLOSED) & #87395 (CLOSED)**: **Native hook relay 间歇性不可用** (v2026.5.26)。主要问题已被修复。
  - **#86201 (CLOSED)**: **v2026.5.22 WSL2 升级后响应慢/高CPU**。经调试，根因涉及 Gateway 事件循环延迟和超时问题。Issue 已被关闭，可能通过其他修补或配置调整解决。
    - [链接](https://github.com/openclaw/openclaw/issues/86201)

- **P2 级（次要优先级）**:
  - **#84376 (OPEN)**: **Secrets audit 错误报告 Codex API 密钥为明文**。`isNonSecretApiKeyMarker` 函数未识别 `codex-app-server` 标记，导致误报，影响安全审计的准确性。**有 fix PR**。
    - [链接](https://github.com/openclaw/openclaw/issues/84376)
  - **#87609 (OPEN)**: **WhatsApp 群组后续 `@` 提及被忽略** (v2026.5.26 回归)。群组中只有第一条 `@` 提及能被响应，后续全部丢失。**无 fix PR**。
    - [链接](https://github.com/openclaw/openclaw/issues/87609)

- **长期存在的重要 Bug**:
  - **#54155 (OPEN)**: **Gateway 内存泄露 (389MB→14.7GB)**。持续存在，需维护者高度关注。
    - [链接](https://github.com/openclaw/openclaw/issues/54155)

## 6. 功能请求归类

以下为今日用户提出的新功能需求，有相应的 PR 或 Issue 跟进：

- **Codex 生态**:
  - **#87849 (PR)**: 提议新增 `codex-supervisor` 插件，用于管理和监控 Codex 应用服务器。目前需要补充实现证明。
    - [链接](https://github.com/openclaw/openclaw/pull/87849)
- **会话管理**:
  - **#87643 (PR)**: 提议通过 AI 总结自动生成会话标题，以提升用户体验。目前需等待作者处理因 review 发现的安全和迁移风险问题。
    - [链接](https://github.com/openclaw/openclaw/pull/87643)
- **执行策略**:
  - **#70543 (PR)**: 提议增加 `normalized auto mode` 命令执行模式，将 `auto` 模式映射到经 Guardian 审核的 Codex 执行，平衡安全性与便捷性。目前需等待作者处理。
    - [链接](https://github.com/openclaw/openclaw/pull/70543)

## 7. 用户反馈摘要

- **满意度**:
  - **修复效率获认可**: `#83935` 中，用户在更新后遇到 `openai-codex` 密钥缺失问题，但执行 `openclaw doctor` 后问题得到修复，并给出了成功日志，表明自动诊断和修复功能有效。([#83935](https://github.com/openclaw/openclaw/issues/83935))

- **痛点与不满**:
  - **版本回归问题突出**: `#86519`、`#87609` 等多位用户报告不同渠道（Telegram, WhatsApp）在 v2026.5.20 或 v2026.5.26 版本后出现消息重复或丢失的回归问题，对日常使用造成严重困扰。([#86519](https://github.com/openclaw/openclaw/issues/86519), [#87609](https://github.com/openclaw/openclaw/issues/87609))
  - **Matric 渠道退步**: `#87307` 用户报告在升级后，Matrix 线程回复功能出现退步，回复无法正确关联到线程，且 `/status` 等命令无响应。([#87307](https://github.com/openclaw/openclaw/issues/87307))
  - **Mattermost 流式编辑体验差**: `#87322` 用户指出，启用块流式传输后，Mattermost 插件不会为每个文本块创建新消息，而是持续编辑同一个帖子，导致后发消息先到，阅读体验混乱。([#87322](https://github.com/openclaw/openclaw/issues/87322))

## 8. 待处理积压

以下 Issue/PR 长期未获维护者响应或处于停滞状态，需提醒关注：

- **#54155 (Issue, OPEN)**: **Gateway 内存泄漏 (389MB → 14.7GB)**。创建于 2026-03-25，严重性为 P1，虽标记有 `fix-shape-clear` 和 `linked-pr-open`，但近两月无突破性进展，影响长期运行的用户。
    - [链接](https://github.com/openclaw/openclaw/issues/54155)
- **#72015 (Issue, OPEN)**: **active-memory 插件在多智能体网关下导致回复阻塞**。该问题为 P1 级别，讨论了近一个月，关联 PR 仍处于开启状态，是影响网关可靠性的关键问题。
    - [链接](https://github.com/openclaw/openclaw/issues/72015)
- **#70543 (PR, OPEN)**: 实现 `exec` 命令的 `auto` 模式，状态长期为 `waiting on author`。该 PR 涉及代码执行安全性的核心改进，停滞超过一个月，建议维护者主动跟进。
    - [链接](https://github.com/openclaw/openclaw/pull/70543)

---

## 横向生态对比

好的，作为专注于 AI 智能体与个人 AI 助手开源生态的资深技术分析师，我将基于您提供的各项目 2026-05-29 动态摘要，生成一份横向对比分析报告。

---

## AI 智能体项目横向对比日报：2026-05-29

### 1. 今日横向概览

今日四大开源项目社区活动均十分活跃，但焦点各异。**OpenClaw** 发布了安全增强版本，并成功修复了社区高度关注的 “Native hook relay” 回归问题，项目维护节奏紧凑。**NanoBot** 社区贡献突出，一份 PR 批量修复了 5 个核心稳定性 Bug，显示了高效的 Bug 追踪和修复能力。**Zeroclaw** 在提供商兼容性（DeepSeek-V4）和运行时安全（工具序列化）方面遇到挑战，同时社区对成本优化和高级沙箱策略提出了明确需求。**PicoClaw** 发布了夜间构建版本，但 RISC-V 平台的兼容性 Bug 仍未解决，多项 PR 陷入停滞。

### 2. 各项目活跃度对比

| 项目 | Issues (更新/新开) | PRs (更新/合并) | Release | 事实性备注 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 374 (新开+更新) | 500 (更新) | 2 个 (v2026.5.27 及 beta) | 活跃度最高；核心关注点在于修复 v2026.5.26 的回归问题。 |
| **NanoBot** | 10 (3 新开) | 21 (8 合并) | 0 | 社区贡献者 `@hamb1y` 以 1 个 PR 修复了 5 个关联 Bug，修复效率极高。 |
| **Zeroclaw** | 19 (18 活跃) | 40 (6 合并) | 0 | 大量活跃的 Issue 和 PR，涉及安全、兼容性和新功能，讨论深度较高。 |
| **PicoClaw** | 6 (2 活跃) | 32 (8 合并) | 1 个 (Nightly) | 依赖自动更新占 PR 主导；多项功能 PR 标记为 `[stale]`，进度缓慢。 |

### 3. OpenClaw 与同类对照

- **活动量**：**OpenClaw** 今日活动量远超其他三个项目，其 374 条 Issue 和 500 条 PR 的处理量级是其他项目的 10 倍以上，反映出其拥有更大的用户基础和更密集的维护节奏。NanoBot 和 Zeroclaw 处于第二梯队，PicoClaw 相对较小。
- **技术重点**：
    - **OpenClaw** 的核心焦点是**稳定性回归修复和安全加固**，特别是 “Native hook relay” 问题及 v2026.5.27 版本的安全边界强化。
    - **NanoBot** 的重点是**核心运行时机制修复**，如并发上下文、流式重试、上下文预算计算等，显示其在打磨基础体验。
    - **Zeroclaw** 面临更多**提供商兼容性** (如 DeepSeek-V4) 和**安全策略** (如工具序列化、沙箱策略) 的讨论，其社区对架构灵活性要求更高。
- **社区讨论面**：
    - OpenClaw 社区讨论高度集中于**单个回归问题** (#87331)，体现了大版本更新后的普遍痛点。
    - NanoBot 和 Zeroclaw 的社区讨论则更为分散，涵盖 Bug 反馈、功能请求和生态构建（如 Web 管理面板、GitAgent 协议）。

### 4. 共同出现的技术方向

基于今日数据，以下方向在多项目中被提及，显示出行业共性需求：

- **内存/状态管理问题**：
    - **OpenClaw**：长期存在的 Gateway 内存泄露问题 (#54155)。
    - **NanoBot**：并发会话上下文覆盖导致的记忆丢失问题 (#4044, #4037)。
    - **Zeroclaw**：上下文压缩丢弃工具调用结果的问题 (#6361)。
- **安全边界与策略**：
    - **OpenClaw**：在 v2026.5.27 版本中强化了多项安全边界，如拒绝无认证的 Tailscale 暴露、强化审批流程。
    - **Zeroclaw**：报告了原生工具序列化忽略风险画像的 Bug (#6991)，并提出了细粒度沙箱策略的 RFC (#6996)。
    - **PicoClaw**：有 PR 修复了 `exec` 工具中 `restrict_to_workspace` 的路径解析 Bug (#2965)。
- **渠道与网络兼容性**：
    - **NanoBot**：修复了 Microsoft Teams 渠道的 `serviceUrl` 安全漏洞 (#4047)。
    - **Zeroclaw**：报告了 Slack Socket Mode 完全不可用的 Bug (#6992)，以及 Web UI WebSocket 连接失败的 Bug (#6976)。
    - **PicoClaw**：报告了 RISC-V 平台 .deb 包在 Debian 上与 OpenAI 模型不兼容的问题 (#2887)。

### 5. 差异化定位分析

- **功能侧重**：
    - **OpenClaw**: 侧重**企业级安全、高级管理与扩展**。今日发布的 v2026.5.27 版本包含大量安全加固和审批流程。社区讨论的 `codex-supervisor` 插件也体现了对复杂应用服务器的管理需求。
    - **NanoBot**: 侧重**易用性、核心稳定性和社区生态**。用户积极地提出并贡献第三方 Web 管理面板 (#1922)，同时社区贡献者能批量修复核心运行时 Bug。
    - **Zeroclaw**: 侧重**高度可配置性、提供商兼容性和安全沙箱**。社区讨论包含为每个 Agent 独立配置分类模型以降低成本 (#6945)，以及提出细粒度沙箱策略 (#6996)，显示出对运行成本和高级安全合规的重视。
    - **PicoClaw**: 侧重新兴**硬件平台（如 RISC-V）的适配和轻量化**。但其兼容性问题仍未解决，且多项功能 PR 停滞，显示出维护精力方面的局限性。

- **目标用户**：
    - **OpenClaw**: 适合对安全、审计和复杂工作流有严格要求的企业级用户。
    - **NanoBot**: 适合希望快速搭建、社区活跃度高、依赖丰富插件生态的个人开发者和小团队。
    - **Zeroclaw**: 适合需要精细控制每个 Agent 行为、关注运行成本、有高级安全合规需求的技术用户。
    - **PicoClaw**: 主要面向特定硬件平台（如 RISC-V）的用户和嵌入式场景开发者。

### 6. 社区活跃度记录

基于今日数据，将四个项目的社区活跃度分为三个层级：

- **重度活跃（高关注度、高维护密集度）**：
    - **OpenClaw**: 374 Issues, 500 PRs, 2 Releases。社区反馈量巨大，维护者响应迅速（Issue 关闭率>50%）。
- **中度活跃（讨论深入、修复专业）**：
    - **NanoBot**: 10 Issues, 21 PRs。社区质量较高，有专家级贡献者提交综合性修复 PR。
    - **Zeroclaw**: 19 Issues, 40 PRs。社区讨论深度高，涉及架构和安全策略的 RFC。
- **轻度活跃（维护节奏较慢）**：
    - **PicoClaw**: 6 Issues, 32 PRs。大量 PR 为自动依赖更新，核心功能 PR 和 Bug 修复进度缓慢，多项工作陷入停滞 (`[stale]`)。

### 7. 有证据支撑的观察

1.  **版本回归是当前用户体验的最大痛点**：OpenClaw 的 “Native hook relay unavailable” 问题( #87331, #87536)、NanoBot 的流式输出重复( #4038) 以及 Zeroclaw 的 Slack 用户认证失败( #6992)，均指向新版本引入的回归 Bug 是影响用户日常使用的最主要因素。
2.  **社区贡献模式正在从单一 Bug 报告向批量修复和生态构建演进**：NanoBot 的 `@hamb1y` 用户合并了一个修复 5 个 Bug 的综合性 PR (#4041)。Zeroclaw 有用户提出 RFC (#6996) 来推动未来功能方向。这标志着社区正在从单纯的用户转变为深度参与项目发展的共建者。
3.  **安全配置与策略的内建化是共同趋势**：OpenClaw 发布版本强化安全边界，Zeroclaw 报告工具序列化忽略安全策略并提议高级沙箱，NanoBot 修复 Teams 渠道安全漏洞。项目方正在将安全从外部配置下沉为核心功能的一部分。
4.  **PicoClaw 面临社区维护的“冷启动”挑战**：多项功能 PR 和 Bug 修复 PR 被长期搁置（`[stale]`），且 RISC-V 平台的兼容性问题迟迟未解决，显示出维护者精力可能不足，需要吸引更多活跃贡献者或项目维护者。
5.  **成本优化成为高级用户的明确诉求**：Zeroclaw 社区提出的“为每个 Agent 独立配置低成本分类模型” (#6945) 以及 NanoBot 社区讨论的“上下文预算计算错误” (#4039)，表明用户对 AI Agent 的运行成本有越来越精细的控制需求。

**今日暂无明确跨项目信号**：今日数据中，未发现四个项目存在直接的代码、协议或生态层面的协作信号。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，这是为您生成的 NanoBot 项目动态日报。

---

## NanoBot 项目动态日报 — 2026-05-29

### 1. 今日活动概览

过去 24 小时内，NanoBot 项目保持了密集的社区活动和代码维护节奏。共收到 **10 条 Issues** 更新（3 条新开，7 条已关闭）和 **21 条 PR** 更新（13 条待合并，8 条已合并/关闭），无新版本发布。从内容上看，社区提交了大量高质量的 Bug 报告和修复 PR，尤其是在**并发处理、上下文预算和流式重试**等核心稳定性方面；同时，围绕**扩展生态**（如 Web 管理面板、GitAgent 协议）和**新功能**（如 WebUI 模型设置、多Agent协作）的讨论也颇为活跃。

### 2. 版本发布

无。

### 3. 项目进展

今日有多项重要 PR 被合并或关闭，推进了稳定性修复和功能增强：

- **核心稳定性修复**：PR [#4041](https://github.com/HKUDS/nanobot/pull/4041) 由社区贡献者 `@hamb1y` 合并，该 PR 一次性修复了 5 个已被详细报告的问题，包括并发会话的上下文覆盖、流式输出重复、上下文预算计算错误等（关联 Issues #4036, #4037, #4038, #4039, #4040）。
- **Agent 循环增强**：PR [#4015](https://github.com/HKUDS/nanobot/pull/4015) 被合并，新增了 “观察-反思” 提示功能，旨在以最小代价增强 Agent 在执行工具后的自我检查与迭代能力。
- **行为权威与管理**：PR [#4032](https://github.com/HKUDS/nanobot/pull/4032) 被合并，引入了可选的 `AUTHORITY.md` 模板文件，允许用户为 Agent 设定高优先级的道德或行为准则。PR [#4031](https://github.com/HKUDS/nanobot/pull/4031) 为 Discord 渠道添加了 `/model` 命令，用于快速切换运行中的模型预设。
- **实验性功能重构**：PR [#4023](https://github.com/HKUDS/nanobot/pull/4023) 合并，将后台心跳服务重构为基于 cron 的自动注册机制，减少了专用基础设施。PR [#3937](https://github.com/HKUDS/nanobot/pull/3937) 合并，为执行危险命令增加了用户确认机制。

### 4. 社区热点

今日社区讨论热度呈现两极分化：一边是积极的生态建设，另一边是核心功能 Bug 的深度探讨。

- **最活跃 Issue：社区 Web 管理面板**
  Issue [#1922](https://github.com/HKUDS/nanobot/issues/1922)（已关闭）虽非今日新开，但因其描述了一个功能丰富的第三方 Web 管理面板 `nanobot-webui`，获得了 **12 条评论和 10 个 👍**。该面板支持仪表盘、可视化配置、多用户等功能，表明社区对更友好、可自托管的图形化管理界面有强烈兴趣。

- **最受关注 Bug 讨论：短期记忆丢失**
  Issue [#4044](https://github.com/HKUDS/nanobot/issues/4044)（开放中）详细描述了 Agent 在对话中表现出的“短期记忆丢失”问题，即 Agent 在询问问题后无法记住用户刚刚给出的回答。报告者深入分析了可能的原因，包括**上下文窗口压力**和**系统提示词占用**。该问题引发了 3 条评论，但尚未有明确的解决方案 PR，是社区关注的稳定性焦点。

### 5. Bug 与稳定性

今日报告的 Bug 主要集中在运行时机制和特定渠道兼容性方面，且大部分已有对应的修复 PR。

| 严重程度 | Issue | 描述 | 状态 & 关联 PR |
| :--- | :--- | :--- | :--- |
| **高** | [#4044](https://github.com/HKUDS/nanobot/issues/4044) | Agent 在对话中出现“短期记忆丢失”，上下文无法正确衔接。 | **未修复**，社区正在讨论根因。 |
| **高** | [#4038](https://github.com/HKUDS/nanobot/issues/4038) | 流式重试逻辑缺陷，导致部分内容被重复输出给用户。 | **已关闭**，由 PR [#4041](https://github.com/HKUDS/nanobot/pull/4041) 修复。 |
| **高** | [#4037](https://github.com/HKUDS/nanobot/issues/4037) | 长任务和完成目标功能中存在并发 session 共享的可变上下文，导致数据错乱。 | **已关闭**，由 PR [#4041](https://github.com/HKUDS/nanobot/pull/4041) 修复。 |
| **中** | [#4040](https://github.com/HKUDS/nanobot/issues/4040) | 启用`unified_session`后，`/stop`命令无法取消当前活跃任务。 | **已关闭**，由 PR [#4041](https://github.com/HKUDS/nanobot/pull/4041) 修复。 |
| **中** | [#4039](https://github.com/HKUDS/nanobot/issues/4039) | 上下文截断逻辑忽略了工具描述(token)的占用，导致历史保留预算计算错误。 | **已关闭**，由 PR [#4041](https://github.com/HKUDS/nanobot/pull/4041) 修复。 |
| **中** | [#4036](https://github.com/HKUDS/nanobot/issues/4036) | 待处理队列在特定条件下会覆盖正在执行的任务消息，导致消息路由错误。 | **已关闭**，由 PR [#4041](https://github.com/HKUDS/nanobot/pull/4041) 修复。 |
| **低** | [#4042](https://github.com/HKUDS/nanobot/pull/4042) | Matrix 渠道因未处理设备密钥验证请求，导致客户端（如 Element X）持续提示“设备未验证”。 | **正在讨论**，无关联 PR。 |

### 6. 功能请求归类

今日用户提出的新功能请求主要围绕**可配置性**和**第三方集成**。

- **增强可配置性**：
    - **文档提取开关**：Issue [#4043](https://github.com/HKUDS/nanobot/issues/4043) 提议增加配置选项，允许用户关闭自动文档提取功能，以保持工作流程的灵活性。该 Issue 被标记为 `enhancement` 和 `good first issue`。
    - **上下文窗口选择**：PR [#4045](https://github.com/HKUDS/nanobot/pull/4045)（开放中）为 WebUI 添加了模型上下文窗口（64K/256K）的设置选项。

- **第三方集成与协议**：
    - **GitAgent 协议**：PR [#4034](https://github.com/HKUDS/nanobot/pull/4034)（开放中）建议为 NanoBot 添加轻量级开源标准 `GitAgent Protocol`（`agent.yaml` + `SOUL.md`）支持，以提升可移植性。此前有一个同主题的 PR [#4030](https://github.com/HKUDS/nanobot/pull/4030) 已被关闭。
    - **安全隐患修复**：PR [#4047](https://github.com/HKUDS/nanobot/pull/4047)（开放中）修复了 Microsoft Teams 渠道中可能信任恶意 `serviceUrl` 的安全漏洞。
    - **扩展注册中心**：PR [#4046](https://github.com/HKUDS/nanobot/pull/4046)（开放中）提议为 NanoBot 的应用商店添加外部扩展注册中心支持。

### 7. 用户反馈摘要

从今日的 Issues 和 PR 评论中，可以提炼出以下用户核心诉求：

- **稳定性是首要关注点**：多个 Bug 报告（如 [#4044](https://github.com/HKUDS/nanobot/issues/4044) 的记忆丢失、[#4040](https://github.com/HKUDS/nanobot/issues/4040) 的停止命令失效）均指向 Agent 运行时的状态管理混乱问题，用户希望获得更可靠、一致的交互体验。
- **对开源生态的积极贡献**：用户 `@Good0007` 发布了自己构建的第三方 Web 管理面板，并获得了社区的积极反响。此外，有多位用户提交了针对特定 Bug 群（如 `@hamb1y`）的批量修复 PR，体现了社区的高度参与感。
- **特定场景下的功能限制**：用户 `@dancing-monkey` 在 Issue [#2772](https://github.com/HKUDS/nanobot/issues/2772) 中反馈微信渠道单次最多返回 10 条消息的限制，希望获得解决方案。
- **对配置灵活性的渴望**：用户 `@tjc0726` 在 Issue [#4043](https://github.com/HKUDS/nanobot/issues/4043) 中明确表示不希望自动化文档提取干扰其定制的文档处理流程（如 Docling + OCR），请求增加开关选项。

### 8. 待处理积压

- **高优先级 Bug**：Issue [#4044](https://github.com/HKUDS/nanobot/issues/4044)（Agent短期记忆丢失）是目前最核心的未解决稳定性问题。此问题直接影响用户体验，且报告者提供了详细的原因分析，值得项目维护者优先关注和回应。
- **长期社区请求**：Issue [#1922](https://github.com/HKUDS/nanobot/issues/1922) 虽然已关闭，但它代表了一类对“Web 管理面板”的强烈需求。社区贡献者已提供了实现方案，维护者可以考虑是否将其纳入官方路线图或作为推荐工具。
- **悬而未决的优化提议**：PR [#3992](https://github.com/HKUDS/nanobot/pull/3992)（跨Agent协作消息总线）和 PR [#3994](https://github.com/HKUDS/nanobot/pull/3994)（Provider配置字段注册中心化）均已开放超过 4 天，且涉及重要的架构扩展，可能需要维护者进行代码审查和决策。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域的开源项目分析师，我根据您提供的 Zeroclaw 项目数据，生成了以下项目动态日报。

---

### Zeroclaw 项目动态日报 — 2026-05-29

**报告周期：** 2026-05-28 ~ 2026-05-29

**数据来源：** GitHub (`github.com/zeroclaw-labs/zeroclaw`)

---

#### 1. 今日活动概览

过去 24 小时，Zeroclaw 项目社区活动频繁。共更新了 **19 条** Issues（其中新开或活跃 18 条，关闭 1 条），以及 **40 条** Pull Requests（其中 34 条待合并，6 条已合并/关闭）。主要集中在 **Bug 修复**（特别是提供商兼容性与运行时行为）和 **功能增强**（如 TUI、沙箱策略、频道消息处理）。今日无新版本发布。

#### 2. 版本发布

- **无新版本发布。**

#### 3. 项目进展

今日有 **6 条 PR** 被合并或关闭，主要涉及配置修复与 TUI 优化：

- **[#6994] fix(slack): default strict_mention_in_thread to true**：已合并。将 Slack 频道配置中 `strict_mention_in_thread` 的默认值从 `false` 改为 `true`，确保线程回复必须 @-提及 agent 才会被处理。
  ([链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6994))

- **[#6908] fix(onboard): add Codex subscription auth for OpenAI provider**：已关闭。修复了初始化流程 (`zeroclaw onboard`) 中，无法为 OpenAI 提供商配置 `Codex` 订阅认证的问题，此前流程强制要求使用 API Key。
  ([链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6908))

- **[#5650] feat(provider): add native extended thinking for Anthropic provider**：已合并。为 Anthropic 提供商增加了原生扩展思考 API 支持，允许通过 `budget_tokens` 启用专用推理链。
  ([链接](https://github.com/zeroclaw-labs/zeroclaw/pull/5650))

#### 4. 社区热点

- **[#6059] [Bug]: Incompatible with DeepSeek-V4 API format**：讨论最热烈（14 条评论，4 个👍）。用户报告在使用 DeepSeek-V4 API 时遇到与“思考模式”相关的错误，影响高优先级 (`p1`) 的“DeepSeek 提供程序兼容性”。
  ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6059))

- **[#6945] feat(agents): add per-agent `classifier_provider` to route reply-intent precheck**：开放至今评论较多。该 PR 提出允许为每个 agent 单独配置一个更便宜的模型用于“是否回复”的判断，从而避免在使用昂贵模型时产生不必要的开销。反映了社区对降低运行成本的明确诉求。
  ([链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6945))

#### 5. Bug 与稳定性

今日报告了多个 Bug，按严重程度排列如下：

- **S1 - 工作流阻塞**:
  - **[#6991] bug(runtime): Native tool serialization ignores Risk Profile and Tool Filter restrictions**：运行时原生工具序列化忽略了风险画像和工具过滤器的限制，可能导致安全策略失效。
    ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6991))
  - **[#6992] [Bug]: Slack Socket Mode rejects all messages as "unauthorized user"**：Slack Socket Mode 频道拒绝所有传入消息，导致 Slack 集成完全无法使用。
    ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6992))
  - **[#6361] [Bug]: context_compression drops assistant(tool_calls)...**：上下文压缩功能在处理 OpenAI 兼容提供商（如 MiniMax）时，会错误地丢弃 `tool_calls` 和 `tool` 结果，导致工具循环错误。
    ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6361))

- **S2 - 功能降级**:
  - **[#6995] [Bug]: Backspace in `zeroclaw agent` CLI deletes byte-by-byte instead of character-by-character**：`zeroclaw agent` CLI 模式下的退格键按字节删除，导致 CJK 等多字节字符需要多次按键才能删除。
    ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6995))
  - **[#6976] [Bug]: Web UI WebSocket chat fails with 1006**：Web UI 由于缺少 `?agent=` 查询参数导致 WebSocket 连接失败。
    ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6976))

目前针对 **[#6992]** 和 **[#6991]** 等新 Bug，尚未看到关联的修复 PR。**[#6361]** 已有讨论和评论，但仍在进展中。

#### 6. 功能请求归类

今日出现的新功能请求主要围绕安全与配置能力的扩展：

- **安全策略**：
  - **[#6996] RFC: Granular sandbox policy — filesystem and network restrictions**：提议为沙箱添加细粒度的文件系统和网络访问控制策略。
    ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6996))

- **配置与本地化**：
  - **[#6989] config: extend #[secret] (or add a header-token field) so headers maps redact bearer tokens**：请求扩展 `#[secret]` 宏或新增字段以支持在配置的 `headers` 映射中隐藏 Bearer Token。
    ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6989))
  - **[#6990] i18n: bring new file_download tool strings under the fl!() / Fluent contract**：要求将新添加的 `file_download` 工具中的用户面向字符串移入 Fluent 国际化系统中。
    ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6990))

- **运行时与频道**：
  - **[#6818] [Feature]: --ephemeral daemon mode**：为守护进程添加 `--ephemeral` 模式，使其在最后一个客户端断开后自动终止，以节省资源。
    ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6818))
  - **[#6817] [Feature]: Session-scoped runtime overrides without daemon reload**：允许在会话级别临时覆盖运行时参数（如模型、温度），而无需修改配置文件或重启进程。
    ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6817))

#### 7. 用户反馈摘要

- **使用体验问题**：有用户反映 `zeroclaw agent` CLI 模式下，退格键对 CJK 字符的删除行为不符合预期，影响输入效率。
- **设置流程问题**：用户报告 `zeroclaw onboard` 初始化流程标记部分步骤为完成，但实际上并未写入相应的配置文件，导致后续工作流被阻塞 (#6975)。
- **能力缺失**：社区成员正在通过 RFC (#6996) 的方式推动更高级的沙箱安全策略，表明部分用户的部署环境有严格的安全合规要求。

#### 8. 待处理积压

以下重要 Issues 或 PR 长期处于等待作者回应或阻塞状态，建议维护者关注：

- **[#5570] [Enchancement]: Faster SQLite memory vector search works in O(n)**：关于提升 SQLite 内存向量搜索速度的功能请求，处于 `needs-author-action` 状态，自 4 月 9 日以来无实质性进展。
  ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5570))

- **[#5470] [Bug]: Multiple issues when running safely**：一个聚合性 Bug 报告，涉及运行时、内存、频道等多个组件，状态为 `r:needs-repro` 和 `blocked`，等待作者提供可复现步骤，自 4 月 7 日以来无更新。
  ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5470))

- **[#5187] feat(ci): add arm64 docker target**：一个添加 arm64 Docker 构建目标的功能 PR，处于 `needs-author-action` 状态，自 4 月 2 日以来无新进展。
  ([链接](https://github.com/zeroclaw-labs/zeroclaw/pull/5187))

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-05-29

## 今日活动概览

过去 24 小时内，PicoClaw 仓库新增/更新 **6 条 Issues**（2 条活跃、4 条已关闭）和 **32 条 Pull Requests**（24 条待合并、8 条已合并/关闭），并发布了 **v0.2.9‑nightly.20260529.85751492** 夜间构建版本。主要变化包括：RISC‑V 平台上的 OpenAI 模型兼容性 Bug 报告、社区建议的 FUNDING.yml 被接受并关闭、图像压缩功能 PR 提交、多项 Go 前端依赖自动更新以及两组 JSONL 内存存储的稳定性修复 PR 持续等待评审。

## 版本发布

- **nightly: Nightly Build**
  `v0.2.9‑nightly.20260529.85751492`

  自动化构建，可能出现不稳定行为，建议谨慎使用。完整变更日志可查看 [v0.2.9...main 对比](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)。

## 项目进展

**已合并/关闭的 Pull Requests（共 8 条）**
今日关闭的 PR 主要为依赖版本更新（dependabot 自动提交），包括：
- [#2918] `build(deps): bump github.com/larksuite/oapi-sdk-go/v3 from 3.7.5 to 3.9.2`
- [#2920] `build(deps): bump github.com/anthropics/anthropic-sdk-go from 1.26.0 to 1.45.0`

其余 6 条已关闭 PR 未在今日榜单中列出，推测亦为依赖更新或小范围修复。

**已关闭的 Issues（共 4 条）**
- [#1738] `[Feature] 添加OpenAI API 格式的channel支持` — 该功能请求被关闭，可能已被实现或并入其他方案。
- [#2855] `[Feature] Extend message tool to support media attachments and channel-aware rich outbound delivery` — 关闭，可能已通过其他 PR 完成。
- [#2912] `Suggestion: add FUNDING.yml to support the project` — 社区建议添加捐赠支持文件，现已关闭，表明已采纳。
- [#2944] `Termux / termux-chroot: X509 certificate error fixed by explicitly setting SSL_CERT_FILE` — 用户报告的问题已被解决并关闭。

## 社区热点

**讨论最活跃的 Issue**
- [#2887] `[BUG] .deb version on RISC-V is not functional with OpenAI model`
  链接：https://github.com/sipeed/picoclaw/issues/2887
  评论数：7 条 | 创建于 2026-05-17，最后更新 2026-05-28

  **用户诉求分析**：
  用户在 RISC‑V 架构的 Debian 系统上安装 PicoClaw 的 .deb 包后，无法正常使用 OpenAI 模型（gpt-5.4-2026-03-05）。系统报告 Go 版本为 1.25.9，但 .deb 包可能未针对该平台正确构建或存在依赖缺失。该 Issue 已获 7 条回复，说明社区对该平台兼容性有较高关注度，目前仍为开放状态。

**其他活跃讨论**
- [#2916] `CPU, Memory and IO optimizations` — 获 3 条评论，用户提出整体性能优化建议，但目前状态为 `[stale]`，尚无明显进展。

## Bug 与稳定性

| Bug 描述 | 严重程度 | 状态 | 相关修复 PR |
|---------|---------|------|-------------|
| RISC‑V .deb 无法使用 OpenAI 模型 | 中（特定平台不可用） | 开放 Issue #2887 | 暂无对应 PR |
| Termux / termux-chroot 环境 X509 证书错误 | 低（已有手动 workaround） | 已关闭 Issue #2944 | 已通过显式设置 `SSL_CERT_FILE` 解决，无需额外 PR |
| JSONL 会话索引热路径克隆与 TTL 刷新语义问题 | 中（影响内存性能与正确性） | 待合并 PR #2913（`[stale]`） | #2913 已提交但未合并 |
| JSONL 存储崩溃一致性 gap（崩溃后元数据漂移） | 中（数据一致性风险） | 待合并 PR #2907（`[stale]`） | #2907 已提交但未合并 |

此外，PR #2965 修复了 `exec` 工具中 `restrict_to_workspace` 误将无 scheme URL 当作绝对路径的 Bug，目前为 OPEN 状态。

## 功能请求归类

以下为今日记录的新功能/增强请求（包括已关闭和仍开放的）：

| 功能 | 类型 | 状态 | 链接 |
|------|------|------|------|
| 添加 OpenAI API 格式的 channel 支持 | 新 channel 类型 | 已关闭 #1738 | https://github.com/sipeed/picoclaw/issues/1738 |
| 扩展消息工具支持媒体附件和渠道感知富文本投递 | 功能增强 | 已关闭 #2855 | https://github.com/sipeed/picoclaw/issues/2855 |
| CPU、内存和 IO 优化 | 性能优化 | 开放 #2916 | https://github.com/sipeed/picoclaw/issues/2916 |
| 添加入站图像压缩功能 | 新功能 | PR #2964（OPEN） | https://github.com/sipeed/picoclaw/pull/2964 |
| 添加 NEAR AI Cloud 作为 LLM 提供商 | 新 provider | PR #2917（`[stale]`） | https://github.com/sipeed/picoclaw/pull/2917 |
| 为 MiMo provider 添加 CommonModels（包括多模态模型） | 功能增强 | PR #2915（`[stale]`） | https://github.com/sipeed/picoclaw/pull/2915 |

## 用户反馈摘要

- **跨平台兼容性痛点**：用户报告在 RISC‑V 架构 Debian 上 .deb 无法正常调用 OpenAI 模型 (#2887)，反映出对非 x86_64 平台的构建和测试覆盖不足。
- **Termux 环境配置经验**：用户发现需要通过手动设置 `SSL_CERT_FILE` 环境变量解决 HTTPS 证书错误，并已提交 Issue (#2944) 后关闭，表明该问题已有临时解决方案。
- **社区希望经济支持**：用户建议添加 `FUNDING.yml` 文件以实现 GitHub 赞助入口 (#2912)，该请求已被采纳关闭，显示出社区对项目可持续发展的关注。
- **功能诉求**：多位用户希望 PicoClaw 能直接兼容 OpenAI API 格式（#1738）以及支持消息中的媒体附件（#2855），这两项请求均已关闭，推测已在其他途径实现或规划中。

## 待处理积压

以下为长期未响应的 **重要 Issue 或 PR**，建议维护团队优先关注：

| 项目 | 类型 | 创建时间 | 最后更新 | 当前状态 | 重要性说明 |
|------|------|---------|---------|---------|------------|
| #2887 RISC‑V .deb 无法使用 OpenAI | Bug | 2026-05-17 | 2026-05-28 | 开放 | 影响特定硬件平台用户，已有 7 条评论 |
| #2916 CPU/Memory/IO 优化 | 功能建议 | 2026-05-21 | 2026-05-28 | 开放（stale） | 涉及整体性能，但缺乏维护者回应 |
| #2917 添加 NEAR AI Cloud provider | PR | 2026-05-21 | 2026-05-28 | 开放（stale） | 新 LLM 提供商集成，待 review |
| #2915 MiMo provider CommonModels | PR | 2026-05-21 | 2026-05-28 | 开放（stale） | 增强多模态模型推荐，待 review |
| #2913 JSONL 索引热路径修复 | PR | 2026-05-21 | 2026-05-28 | 开放（stale） | 性能与正确性 bug 修复 |
| #2907 JSONL 存储崩溃一致性修复 | PR | 2026-05-20 | 2026-05-28 | 开放（stale） | 数据安全性关键修复 |
| #2908 Web 提供商 logo 回退修复 | PR | 2026-05-20 | 2026-05-28 | 开放（stale） | 前端 UI 回归修复，影响模型配置页 |

**注**：以上 PR 均带有 `[stale]` 标签，表明已超期未获合并或评审，可能需人工确认是否仍应推进。

</details>