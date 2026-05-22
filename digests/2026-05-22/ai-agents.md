# OpenClaw 生态日报 2026-05-22

> Issues: 500 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-05-22 02:33 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

# 🐚 OpenClaw 项目动态日报 — 2026-05-22

## 1. 今日活动概览

过去 24 小时，OpenClaw 仓库收到了 **500 条 Issue 更新**（新开 / 活跃 465 条，已关闭 35 条）和 **500 条 PR 更新**（待合并 444 条，已合并 / 关闭 56 条）。发布了 **2 个新版本**：`v2026.5.20`（正式版）和 `v2026.5.20-beta.2`。两个版本的核心变更一致，均移除了旧的 exec approvals 兼容路径，并让 Discord 语音会话可以跟随配置的用户进入语音频道。社区讨论热度集中在对跨平台客户端、预构建 APK、以及安全与权限体系的持续呼吁上。

---

## 2. 版本发布

### v2026.5.20 & v2026.5.20-beta.2
**发布时间**：2026-05-20（相隔几小时）
**共同变更**：
- **Exec approvals**：旧版 `cat SKILL.md && printf ... && <skill-wrapper>` 允许列表兼容路径已被移除。之后技能文件必须通过 read 工具加载，且只有真实的技能可执行文件会被自动允许。
- **Discord**：让语音会话可以跟随配置的 Discord 用户进入语音频道。

**破坏性变更**：任何依赖旧版 `cat ...` 模式获取 exec 许可的流程将失效，需要迁移到 read 工具加载技能文件的方式。

---

## 3. 项目进展

今日有 **56 个 PR 被合并或关闭**（未在“最新 PR”列表中展示具体条目），同时 **3 个 P1 级别的严重 Bug Issue 被关闭**，表明维护者正在积极修复近期回归问题：

| Issue | 标题 | 状态 |
|-------|------|------|
| [#84059](https://github.com/openclaw/openclaw/issues/84059) | EmbeddedAttemptSessionTakeoverError（会话文件被篡改） | 已关闭 |
| [#84076](https://github.com/openclaw/openclaw/issues/84076) | Codex app-server 在 `item/completed` 后卡住 | 已关闭 |
| [#83796](https://github.com/openclaw/openclaw/issues/83796) | 安全：codex runtime + sandbox 导致 agent 逃逸隔离 | 已关闭 |
| [#84957](https://github.com/openclaw/openclaw/issues/84957) | 隔离 cron 任务使用 `payload.model` 时 exec 工具未加载 | 已关闭 |

此外，多个与 session 状态、消息丢失相关的 Bug 有对应的修复 PR 处于等待合并状态（详见第 5 节）。

---

## 4. 社区热点

今日评论数最多的 Issue：

- **[#75 – Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)**
  **105 条评论** | 👍 75
  请求为 Linux 和 Windows 提供与 macOS 同等功能的原生桌面应用。这是目前社区呼声最高的功能需求之一，已经持续讨论近 5 个月，仍未有明确实现。

- **[#9443 – 预构建 Android APK 发布](https://github.com/openclaw/openclaw/issues/9443)**
  **24 条评论** | 由 AI 助理代用户提交
  用户希望 GitHub Releases 提供预编译的 Android APK，而不是仅提供源码。当前 Android 应用需要用户自行编译，门槛较高。

- **[#22438 – 分层 bootstrap 文件加载](https://github.com/openclaw/openclaw/issues/22438)**
  **16 条评论**
  大型工作区中，每次会话加载所有 bootstrap 文件消耗大量 LLM token。提议引入分层加载，让子代理和 cron 任务只加载必要的文件。

- **[#39604 – 允许私有网络访问（web_fetch）](https://github.com/openclaw/openclaw/issues/39604)**
  **12 条评论** | 👍 8
  当前 `web_fetch` 工具默认阻止私有网络地址，用户希望添加一个 opt-in 配置项来允许访问 localhost、10.x 等地址，用于内部服务集成。

- **[#12602 – Slack Block Kit 支持](https://github.com/openclaw/openclaw/issues/12602)**
  **13 条评论**
  希望 agent 能发送富交互的 Slack Block Kit 消息，替代纯文本回复。

---

## 5. Bug 与稳定性

今日报告的 Bug 按严重程度排列如下（P1 为最高优先级）：

### P1（严重）
| Issue | 标题 | 状态 | 是否有修复 PR |
|-------|------|------|---------------|
| [#40540](https://github.com/openclaw/openclaw/issues/40540) | `openclaw update` 在 Windows 上 EBUSY 错误 | OPEN | 无明确 PR |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | google-vertex/gemini-3.1 报 `Cannot convert undefined or null to object` | OPEN | 无明确 PR |
| [#40611](https://github.com/openclaw/openclaw/issues/40611) | 心跳漂移修复后导致 Telegram 在活跃会话中被阻塞 | OPEN | 关联 PR [#39182] |
| [#84880](https://github.com/openclaw/openclaw/issues/84880) | v2026.5.19 仍拒绝子 agent spawn 时的非关闭 thinking | OPEN | 关联 PR [#84626] 但未完全解决 |
| [#85126](https://github.com/openclaw/openclaw/issues/85126) | Control UI 会话创建时自动选择错误的 authProfileOverride | OPEN | 无明确 PR |

### P2（中等）
| Issue | 标题 | 状态 |
|-------|------|------|
| [#85048](https://github.com/openclaw/openclaw/issues/85048) | 启动时约 30+ 内置插件触发 manifest-id 不匹配警告 | OPEN |
| [#63905](https://github.com/openclaw/openclaw/issues/63905) | Slack 附件在容器沙箱中仅生成占位符回合 | OPEN |
| [#40440](https://github.com/openclaw/openclaw/issues/40440) | Telegram 群聊历史记录丢失媒体数据 | OPEN |
| [#14785](https://github.com/openclaw/openclaw/issues/14785) | 工具 schema 每次会话消耗约 3500 token 开销 | OPEN |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | write 工具缺少追加模式，隔离 cron 会覆盖共享文件 | OPEN（有 PR 链接） |
| [#39476](https://github.com/openclaw/openclaw/issues/39476) | A2A 中 target agent 调用 `sessions_send` 返回导致消息重复 | OPEN（有 PR 链接） |

### 已关闭的 P1
- [#84059](https://github.com/openclaw/openclaw/issues/84059) – EmbeddedAttemptSessionTakeoverError ✅ 已关闭
- [#84076](https://github.com/openclaw/openclaw/issues/84076) – Codex app-server stalls ✅ 已关闭
- [#83796](https://github.com/openclaw/openclaw/issues/83796) – 沙箱逃逸 ✅ 已关闭
- [#84957](https://github.com/openclaw/openclaw/issues/84957) – 隔离 cron 丢失 exec 工具 ✅ 已关闭

---

## 6. 功能请求归类

今日收集到的用户功能请求主要集中在以下几个方向：

### 跨平台与分发
- [#75](https://github.com/openclaw/openclaw/issues/75)：Linux/Windows 原生桌面应用
- [#9443](https://github.com/openclaw/openclaw/issues/9443)：预构建 Android APK 发布

### 安全与权限
- [#6731](https://github.com/openclaw/openclaw/issues/6731)：safe/unsafe ClawdBot（提议 Rust 重写）
- [#10659](https://github.com/openclaw/openclaw/issues/10659)：Masked Secrets – 阻止 agent 直接访问 API Keys
- [#13583](https://github.com/openclaw/openclaw/issues/13583)：Pre-response enforcement hooks（硬性强制策略）
- [#13610](https://github.com/openclaw/openclaw/issues/13610)：原生密钥管理集成（AWS Secrets Manager、Vault 等）
- [#39979](https://github.com/openclaw/openclaw/issues/39979)：Path-scoped RWX 权限
- [#12678](https://github.com/openclaw/openclaw/issues/12678)：Capability-based permissions for skills/tools
- [#12219](https://github.com/openclaw/openclaw/issues/12219)：Skill Permission Manifest Standard（skill.yaml）
- [#6615](https://github.com/openclaw/openclaw/issues/6615)：exec-approvals 添加 deny list
- [#7722](https://github.com/openclaw/openclaw/issues/7722)：Filesystem Sandboxing 配置文件访问

### 会话与上下文管理
- [#22438](https://github.com/openclaw/openclaw/issues/22438)：Tiered bootstrap 分层加载
- [#13616](https://github.com/openclaw/openclaw/issues/13616)：备份/恢复工具（配置、cron、会话历史）
- [#13700](https://github.com/openclaw/openclaw/issues/13700)：Session snapshots 保存和加载上下文检查点
- [#40418](https://github.com/openclaw/openclaw/issues/40418)：会话记忆自动保留与合成
- [#11665](https://github.com/openclaw/openclaw/issues/11665)：Webhook hook 会话复用支持多轮对话

### 消息传递增强
- [#12602](https://github.com/openclaw/openclaw/issues/12602)：Slack Block Kit 支持
- [#27445](https://github.com/openclaw/openclaw/issues/27445)：子 agent 完成通知可路由到父 session 作为用户消息
- [#17840](https://github.com/openclaw/openclaw/issues/17840)：opt-in reaction 触发 agent 回合
- [#33413](https://github.com/openclaw/openclaw/issues/33413)：Slack 线程状态显示正在运行的工具
- [#40678](https://github.com/openclaw/openclaw/issues/40678)：TUI 中可选跨频道可见性
- [#8299](https://github.com/openclaw/openclaw/issues/8299)：配置选项抑制子 agent 广播
- [#13751](https://github.com/openclaw/openclaw/issues/13751)：飞书插件移除过多权限依赖

### 工具与执行增强
- [#39604](https://github.com/openclaw/openclaw/issues/39604)：`web_fetch` opt-in 允许私有网络
- [#18160](https://github.com/openclaw/openclaw/issues/18160)：cron jobs 直接执行模式（跳过 agentTurn）
- [#40001](https://github.com/openclaw/openclaw/issues/40001)：write 工具追加模式
- [#13364](https://github.com/openclaw/openclaw/issues/13364)：暴露 `before_tool_call` / `after_tool_call` 钩子
- [#22358](https://github.com/openclaw/openclaw/issues/22358)：子 agent 完成后的扩展钩子
- [#14785](https://github.com/openclaw/openclaw/issues/14785)：降低工具 schema token 开销

### 部署与运维
- [#13597](https://github.com/openclaw/openclaw/issues/13597)：AWS 部署指南（EC2、ECS

---

## 横向生态对比

好的，作为专注于 AI 智能体与个人 AI 助手开源生态的资深技术分析师，以下是基于您提供的 2026-05-22 各项目动态所生成的横向对比分析报告。

---

## 开源 AI 智能体生态日报：横向对比分析（2026-05-22）

### 1. 今日横向概览

过去 24 小时内，生态中四个主要项目均保持了活跃的动态。**OpenClaw** 作为体量最大的项目，其社区讨论活跃度遥遥领先，维护者正集中修复多个 P1 级别的严重 Bug。**NanoBot** 的修复节奏加快，在 WebUI 稳定性和 LLM 提供商兼容性方面取得显著进展，但用户对默认启用的 Dream 记忆系统抵触情绪较高。**Zeroclaw** 在架构层面有重大推进，其多智能体运行时和 RPC 调度层被合并，同时社区对新模型兼容性问题反馈激烈。**PicoClaw** 则专注于 Telegram 通道的稳定性修复和会话控制功能的增强，整体活动量最低，但修复目标明确。

### 2. 各项目活跃度对比

| 项目 | Issue 更新数 | PR 更新数 | 版本发布 | 事实性备注 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 条 | 500 条 | `v2026.5.20` & `v2026.5.20-beta.2` | 拥有最高的绝对活动量；发布包含破坏性变更的新版本；社区对跨平台客户端的呼声持续高涨（Issue #75 高达 105 条评论）。 |
| **NanoBot** | 12 条 | 22 条 | 无 | 修复节奏加快，WebUI 交互和 LLM 提供商集成问题集中修复；用户对**Dream 记忆系统**的负面反馈成为当日社区热点。 |
| **Zeroclaw** | 22 条 | 50 条 | 无 | 架构层面有重大进展（多智能体运行时合并）；社区对新模型兼容性和工具过滤 Bug 有强烈反馈。 |
| **PicoClaw** | 9 条 | 27 条 | `v0.2.8-nightly` | 活动量相对最低，但集中于 Telegram 稳定性和会话管理修复，社区讨论围绕 LLM 重试与子 Agent 继承问题。 |

### 3. OpenClaw 与同类对照

基于今日数据，OpenClaw 在 **活动规模** 上显著高于其他项目。其单日 Issue 和 PR 更新数量（各 500 条）远超 NanoBot（12/22）、Zeroclaw（22/50）和 PicoClaw（9/27）。

- **活动量方面**：OpenClaw 的社区参与度和活跃度远高于其他项目，体现出其作为核心参照项目的庞大用户与贡献者基础。
- **技术重点方面**：OpenClaw 今日重点在于 **安全与权限体系的演进**（移除旧版 exec approvals、修复沙箱逃逸）以及 **核心协议兼容性**（Discord 语音跟随）。相比之下，NanoBot 和 Zeroclaw 更侧重于 **LLM 提供商的扩展与兼容**（NanoBot 新增 Novita AI/Skywork，Zeroclaw 报告 DeepSeek-V4 兼容性问题）。
- **社区讨论面方面**：OpenClaw 社区最大的声量集中在 **跨平台客户端**（#75）和 **分发形式**（#9443）上，这是一个未在今日其他项目中看到同等量级的诉求。NanoBot 的社区热点是围绕具体功能的抵触（Dream 记忆），而 Zeroclaw 则更关注紧急的模型兼容性 Bug。

### 4. 共同出现的技术方向

今日多个项目均出现了以下需求或关注点，形成了一定趋势：

- **LLM 提供商扩展与兼容性**：这是今日最普遍的趋势。
  - **NanoBot**：新增了对 Novita AI 和天工（Skywork）的内置支持。
  - **Zeroclaw**：社区报告了 DeepSeek-V4 新模型的 API 兼容性问题（#6059），并合并了 NEAR AI Cloud 提供商支持（#6842）。
  - **PicoClaw**：社区请求原生支持 GPT4Free（#2901），同时有 NEAR AI Cloud 的添加 PR（#2917）。
  - **共同诉求**：各项目均需快速适配新发布或小众的 LLM 模型及提供商，以保持工具的可用性。

- **消息通道稳定性与功能增强**：多项目均报告并修复了消息通道类问题。
  - **NanoBot**：修复了微信渠道的静默丢消息问题（#3684），并讨论了 Telegram 和飞书的群消息缓冲需求（#3949）。
  - **Zeroclaw**：报告了 WhatsApp 通道 QR 码显示问题（#6847）。
  - **PicoClaw**：合并了一系列 Telegram 通道的修复，包括消息路由、Cron 干扰和状态显示问题（#2772, #2776, #2777）。
  - **共同诉求**：消息通道的稳定性和功能性是个人 AI 助手落地于实际通讯工具的关键，相关 Bug 修复和功能请求频繁出现。

### 5. 差异化定位分析

基于今日数据，各项目的技术取向和目标用户差异明显：

- **OpenClaw**：定位为 **全能型个人 AI 智能体平台**。其功能触及面最广，从核心运行时、安全权限、多模态（图像生成 PR #3954）、到各平台客户端和部署运维，社区需求最为综合复杂。目标用户可能是有深度定制需求的开发者或希望构建多功能 Agent 的高级用户。

- **NanoBot**：更侧重于 **轻量级、易于集成的个人助手**。其活跃点集中在 WebUI 交互改进、LLM 提供商快速扩展和代码工作流优化。它对记忆系统（Dream）的激进默认启用并引发用户反感，反映出项目在功能便利性与用户控制权之间寻求平衡。目标用户可能更看重开箱即用和多样化的 LLM 选择。

- **Zeroclaw**：展现出更强的 **协议与架构探索性**。今日合并的多智能体运行时（Schema V3）与 RPC 调度层，表明其可能在构建一个标准化的、支持异构 Agent 通信的底层框架。TUI 功能的系统性规划（由核心贡献者主导）也指向其服务端/高级用户群体的需求。目标用户可能是对 Agent 架构有更深研究需求的技术人员。

- **PicoClaw**：整体技术栈和社区讨论更偏向 **实用主义和渐进式演进**。其核心活动集中在修复已知 bug（Telegram、PDF）和增加可配置性（turn_profile）。项目体量、发布节奏和社区讨论热度表明，它可能更聚焦于满足特定硬件（如 Sipeed）或嵌入式场景下的稳定运行，目标用户可能更关注在低资源环境下的稳定性。

### 6. 社区活跃度记录

基于今日 Issue/PR 的数量和新版本发布记录，对各项目社区活跃度进行分层：

- **高活跃度**：
  - **OpenClaw**（500 Issues, 500 PRs, 有版本发布）：绝对数据断层领先，社区讨论规模最大。
- **中高活跃度**：
  - **NanoBot**（12 Issues, 22 PRs, 无版本发布，但有大量修复合并）：修复和合并节奏快，社区反馈直接。
  - **Zeroclaw**（22 Issues, 50 PRs, 无版本发布，但有重大架构合并）：架构层面的重大进展是核心驱动力。
- **中等活跃度**：
  - **PicoClaw**（9 Issues, 27 PRs, 有夜间构建）：活动量相对较低，但社区互动和问题修复反馈明确。

**结论**：今日数据显示，OpenClaw 的社区生态最为庞大且活跃。NanoBot 和 Zeroclaw 项目内部的贡献者与维护者互动密切，呈现出以目标和问题驱动的快速迭代模式。PicoClaw 则保持平稳而务实的维护节奏。

### 7. 有证据支撑的观察

以下是基于今日数据得出的、有多条独立证据支撑的观察：

1.  **“安全与权限”是生态共性痛点**：多个项目今日都涉及安全与权限的讨论或修复。
    - **OpenClaw**：移除了旧版的 exec approvals 兼容路径，修复了一个沙箱逃逸漏洞（#83796），此外有多项关于权限体系（#6731, #39979）和密钥管理（#10659）的功能请求。
    - **NanoBot**：修复了 Shell 安全守卫误拦截网络请求的问题（#3931），并向代码工作流引入了 `apply_patch` 工具，以一种更安全的方式修改文件。
    - **PicoClaw**：正在推进前端的 `allow`/`deny` 工具策略过滤器 PR（#2838）。
    - **观察**：安全与权限的管理机制（从核心的 exec 执行到外围的网络访问和 API 密钥）是当前 AI Agent 工具链中最活跃的改进方向之一。

2.  **“跨平台与客户端分发”的强烈诉求集中在 OpenClaw**：
    - **OpenClaw** 社区的热点 Issue #75（原生桌面应用）和 #9443（预构建 APK）持续获得大量关注。**今日数据中，NanoBot、Zeroclaw、PicoClaw 均未出现同等级别的跨平台客户端诉求。** 这表明 OpenClaw 的用户群体对脱离终端、拥有独立桌面应用有极高期望，而其他项目的用户可能相对习惯于现有的命令行或 WebUI 交互模式。

3.  **“Token 消耗优化”成为重要议题**：
    - **OpenClaw**：有 Issue #22438 提案对 bootstrap 文件进行分层加载，以节省 Token 消耗。Issue #14785 指出工具 schema 每次会话会消耗约 3500 token 开销。
    - **NanoBot**：有 PR #3865 提案通过 BM25-lite 技能路由，将 system prompt 缩减约 60%，间接减少 Token 消耗。
    - **观察**：随着 Agent 上下文窗口的增大和任务的复杂化，token 成本（无论是计费还是延迟）正成为社区共同关注的核心优化点，尤其是在大型工作区和技能丰富的场景下。

4.  **“消息通道稳定性”是贯穿多项目的共性问题**：
    - **NanoBot** 修复了微信的消息丢失问题；**Zeroclaw** 的用户在 WhatsApp 通道配置中受阻；**PicoClaw** 修复了 Telegram 在论坛主题、PDF 传输和定时任务上的多个 Bug。
    - **观察**：作为连接用户与 Agent 的“最后一公里”，消息通道的健壮性直接决定了用户的日常使用体验。即使在架构和核心功能不断演进的同时，通道层面的稳定性和 Bug 修复依然是各项目维护者的日常工作重点。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-05-22)

---

## 1. 今日活动概览

过去 24 小时，NanoBot 仓库共有 **12 条 Issue 更新**（新开/活跃 3 条，关闭 9 条）和 **22 条 PR 更新**（待合并 7 条，已合并/关闭 15 条），**无新版本发布**。社区修复节奏加快：多个长期存在的 WebUI 显示异常、API 兼容性错误得到关闭，同时有 3 个新增功能 PR 被合并（Novita AI 支持、Skywork 支持、代码工作流优化），另外仍有 7 个待合并 PR 推进中。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日合并/关闭了 **15 个 PR**，以下为关键进展：

- **webui 交互改进**
  - `#3953` – 改进侧边栏性能：聊天列表分片渲染 + Cmd/Ctrl+K 搜索快捷键，已合并。
  - `#3951` – 可折叠侧边栏：保留图标锚定、主题切换固定，已合并。
  - `#3944` – 修复会话刷新时新聊天丢失问题（关联 Issue #3884），已合并。

- **Provider 新增与修复**
  - `#3927` – 新增 Novita AI 作为内置 LLM 提供商，已合并。
  - `#3916` – 新增 Skywork 天工作为一级提供商，自动出现在 WebUI 设置列表，已合并。
  - `#3940` – 修复 Moonshot Kimi 模型同时发送 `reasoning_effort` 和 `thinking` 导致 400 错误（关联 Issue #3939），已合并。
  - `#3867` – 修复 OpenRouter 上 MiMo 模型仍启用 reasoning 的问题（跟进 #3851），已合并。

- **执行器与安全修复**
  - `#3922` – 修复 `ExecTool` 子进程继承 stdin 导致异常行为，已合并。
  - `#3947` – 稳定 Windows 环境下的 Shell 测试（大小写、路径兼容），已合并。
  - `#3923` – 优化代码工作流：新增 `apply_patch` 结构化工具、改进 diff 处理、支持文件回滚，已合并。
  - `#3933` – 修复 Shell 安全守卫误将 URL 当作工作目录路径的回归问题，已合并。

- **其他修复**
  - `#3619` – 文档补充小米 MiMo Token 计划配置说明（关联 Issue #3617），已合并。
  - `#3684` – 修复微信渠道因轮询异常、token 过期、`ret=-2` 导致的静默丢消息，已合并。

---

## 4. 社区热点

今日热讨论集中在以下 Issue：

1. **#3790 – WebUI 会话内容打印错乱**（评论 14 条，已关闭）
   [链接](https://github.com/HKUDS/nanobot/issues/3790)
   用户更新 5.13 源码后，WebUI 打印内容显示错乱，需刷新页面恢复。虽然已在今日关闭，但该 Issue 持续了一周（创建于 5/14），社区反馈较为集中，维护者未明确说明修复方式（可能通过某次前端批处理或合并间接修复）。

2. **#3884 – WebUI 对话在第一次回复后自动关闭**（评论 6 条，已关闭）
   [链接](https://github.com/HKUDS/nanobot/issues/3884)
   用户描述在 Linux Debian 上通过 WebSocket 启动后，浏览器打开 8765 端口，第一条消息回复后会话被关闭。今日由 PR #3944 修复，并添加了回归测试。该问题反映 WebUI 会话管理的乐观更新机制不够稳健。

**分析**：这两个 Issue 均与 WebUI 交互稳定性有关，用户对前端体验的期望值较高。虽已关闭，但提示维护者需持续关注会话状态同步逻辑。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重程度 | Issue / PR | 描述 | 状态 | 关联修复 |
|----------|------------|------|------|----------|
| **严重** | #3884 | WebUI 对话首次回复后关闭 | 已关闭 | #3944 已合并 |
| **严重** | #3956 | `read_file` 读取图片后 tool result 为 list，导致 Anthropic API 400 | 已关闭 | 当日快速关闭 |
| **严重** | #3939 | Moonshot 拒绝 Kimi 模型同时发送 `reasoning_effort` 和 `thinking` | 已关闭 | #3940 已合并 |
| **中等** | #3931 | `restrictToWorkspace=true` 误拦截 curl/wget 等网络请求 | 已关闭 | #3933 已合并 |
| **中等** | #3790 | WebUI 打印内容显示错乱（需刷新） | 已关闭 | 未明确关联 PR，可能跟随某次合并修复 |
| **中等** | #3945 | WebUI 对话中 `tool_call_id` 重复错误 | 已关闭 | 当日关闭 |
| **低** | #3028 | 心跳触发时重复创建定时任务（4/11 创建，仍打开） | **开放** | 暂无 PR |

此外，今日还关闭了 #3876（Docker 内 WebUI bootstrap 仅限 localhost），该问题影响容器化部署场景。

---

## 6. 功能请求归类

以下为用户提出的新功能需求及相关 PR，按主题分组：

**系统配置/开关**
- **#3885** – 为 Dream 系统作业添加全局 `enabled` 开关（打开）
  [链接](https://github.com/HKUDS/nanobot/issues/3885)
  用户希望启动时不注册 Dream cron 作业，避免即使禁用 memory 技能仍被注册。
- **#3948** – 请求提供梦境生成技能的开关或清除功能（已关闭）
  [链接](https://github.com/HKUDS/nanobot/issues/3948)
  用户明确表示该功能不可控、费 token，已在 USER.md 中禁止仍被触发。维护者关闭未合并。

**记忆系统优化**
- **#3952** (PR，开放) – 增强 Dream + Consolidator 提示，实现 MECE 长期记忆（减少重复）
  [链接](https://github.com/HKUDS/nanobot/pull/3952)

**图像生成**
- **#3954** (PR，开放) – 新增 OpenAI 和 Codex 图像生成 provider 支持
  [链接](https://github.com/HKUDS/nanobot/pull/3954)
- **#3946** (PR，开放) – 新增 Ollama 原生图像生成支持
  [链接](https://github.com/HKUDS/nanobot/pull/3946)

**消息通道**
- **#3949** (PR，开放) – 为 Telegram 和飞书添加防抖群消息缓冲，避免每句触发 AI 轮次
  [链接](https://github.com/HKUDS/nanobot/pull/3949)

**认证/Provider**
- **#3936** (PR，开放) – 添加 xAI Grok OAuth 支持（PKCE 流程）
  [链接](https://github.com/HKUDS/nanobot/pull/3936)

**Agent 架构**
- **#3865** (PR，开放) – BM25-lite 技能路由：将 system prompt 缩减约 60%
  [链接](https://github.com/HKUDS/nanobot/pull/3865)

**文档**
- **#3950** (PR，开放) – 添加常见问题 FAQ 章节
  [链接](https://github.com/HKUDS/nanobot/pull/3950)

**其他**
- **#3955** – NEXUS 预测市场数据 API（Kalshi/Polymarket 套利接口）
  [链接](https://github.com/HKUDS/nanobot/issues/3955)
  更像外部服务接入提议，并非核心功能请求，评论数为 0。

---

## 7. 用户反馈摘要

从今日 Issues 评论中提炼的真实用户痛点与使用场景：

- **“更新 5.13 源码后，打印内容显示错乱，每次都要刷新网页。”** (#3790)
- **“WebUI 第一次回复后直接关闭会话，无法继续对话。”** (#3884)
- **“Dream 功能太不可控了，我在 USER.md 里写了禁止还是给我生成，重复性高，费 token，建议直接清除。”** (#3948)
- **“心跳机制重复创建定时任务，导致问候语发很多次，根本没有分析上下文。”** (#3028)
- **“设置了 restrictToWorkspace=true，结果 curl https://www.google.com 也被拦截，提示路径安全问题。”** (#3931)
- **“WebUI 对话中报 ‘Duplicate value for tool_call_id’ 错误，很影响体验。”** (#3945)
- **“Docker 容器中无法访问 WebUI bootstrap 端点，提示 remote_address 不在 localhost 范围内。”** (#3876)
- **“希望有个开关能完全不注册 Dream 系统作业，不想用记忆整理功能。”** (#3885)

感受：用户对默认启用的 Dream 记忆系统抵触情绪较高（#3948、#3885），认为其不够智能且浪费 token；WebUI 的会话状态管理（#3790、#3884）以及 shell guard 的误报（#3931）是影响日常使用的常见问题。

---

## 8. 待处理积压

以下为长期未响应或持续开放的重要 Issue / PR，建议维护者关注：

- **#3028 – 心跳触发时重复创建定时任务**
  [链接](https://github.com/HKUDS/nanobot/issues/3028)
  创建于 4/11，至今 41 天未关闭。用户已提供复现步骤和预期行为，涉及核心的心跳 + 定时任务设计，需要维护者介入。

- **#3865 – BM25-lite skill router PR**
  [链接](https://github.com/HKUDS/nanobot/pull/3865)
  创建于 5/16，已开放 6 天未合并。该 PR 直接冲击 agent 的 system prompt 结构，变更较大，可能需要更细致的 review。

- **#3936 – xAI Grok OAuth 支持 PR**
  [链接](https://github.com/HKUDS/nanobot/pull/3936)
  创建于 5/20，开放 2 天，尚无 maintainer 明确反馈。

- **#3949 – 群消息缓冲 PR**
  [链接](https://github.com/HKUDS/nanobot/pull/3949)
  创建于 5/21，开放 1 天，需要渠道维护者测试。

上述积压项若不及时处理，可能造成社群用户重复提问或贡献者等待过久。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，这是为您生成的 Zeroclaw 项目动态日报。

---

# Zeroclaw 项目动态日报 | 2026-05-22

## 1. 今日活动概览

过去 24 小时，Zeroclaw 项目保持高度活跃。共处理 22 条 Issue（新开 20 条，关闭 2 条）和 50 个 PR（新提交/待合并 46 个，合入/关闭 4 个）。核心贡献者 **[@singlerider]** 主导了一系列与 TUI（终端用户界面）相关的功能和协议提案，社区对于新版本 DeepSeek 模型的兼容性问题及工具过滤逻辑的 Bug 反馈集中。今日暂无新版本发布。

## 2. 版本发布

过去 24 小时无新版本发布。

## 3. 项目进展

今日合并的重要 PR 标志着项目在远端过程调用（RPC）架构和核心运行时方面取得关键进展：
- **多智能体运行时合并**：大型 PR #6398 [feat!: multi-agent runtime and schema V3] 已被合并。该 PR 引入了多智能体运行时和 Schema V3，将为项目未来的架构奠定基础。此 PR 涉及范围极广，涵盖几乎所有核心组件。
  - 链接: https://github.com/zeroclaw-labs/zeroclaw/pull/6398
- **RPC 调度层合并**：PR #6839 [feat(runtime): RPC dispatch layer and Unix socket transport] 已被合并。此功能提取并实现了运行时的 JSON-RPC 2.0 调度层和 Unix Socket 传输层，为 TUI 客户端等提供独立于 HTTP 网关的连接方式。
  - 链接: https://github.com/zeroclaw-labs/zeroclaw/pull/6839
- **默认会话配置**：PR [feat: add default_target config and daemon/CLI delivery injection] (#6665) 被合并，修复了 #6647 问题，增加了默认目标配置。

## 4. 社区热点

- **深度求索V4 API 兼容性问题**：Issue #6059 是今日讨论最热烈的议题，获得了 12 条评论和 4 个 👍。
  - **诉求分析**：用户 **[@SSDGADsss]** 报告，Zeroclaw 在使用 DeepSeek-V4-Pro 和 Flash 版本 API 时出现错误，怀疑与“思考模式”有关。该问题被标记为高风险（risk: high）和一级优先级（priority:p1），社区对此高度关注，反映出用户对适配最新大模型 API 版本的急切需求。
  - 链接: https://github.com/zeroclaw-labs/zeroclaw/issues/6059
- **工具过滤器 (tool_filter_groups) 失效**：Issue #6699 同样获得 5 条评论，被标记为高风险和一级优先级。
  - **诉求分析**：用户 **[@nick-pape]** 发现 `[agent] tool_filter_groups` 配置项对于真实的 MCP 工具无效，并指出存在前缀检查错误和与惰性加载集成不足两个独立 Bug。这暴露了当前 MCP 工具集成的一个核心缺陷，对代理安全性和工具管理影响较大。
  - 链接: https://github.com/zeroclaw-labs/zeroclaw/issues/6699

## 5. Bug 与稳定性

过去 24 小时上报了多个影响用户工作流的严重 Bug：
- **WhatsApp 通道 QR 码无法显示**：Issue #6847，严重等级 S1（工作流受阻）。用户在配置 WhatsApp 通道时，完成服务端配置后无法显示 QR 码以完成配对。
  - 链接: https://github.com/zeroclaw-labs/zeroclaw/issues/6847
- **图像路由错误**：Issue #6841，严重等级 S1。当配置了多模态视觉提供商后，传入的图片消息被错误地路由到了保底提供商（fallback），而非指定的视觉提供商。
  - 链接: https://github.com/zeroclaw-labs/zeroclaw/issues/6841
- **Slack Bot Token 环境变量失效**：Issue #6844，严重等级 S1。配置文件中未设置的 Slack Bot Token 无法通过环境变量读取，导致用户无法正常使用。
  - 链接: https://github.com/zeroclaw-labs/zeroclaw/issues/6844
- **Windows 最小化构建体积异常**：Issue #6836，严重等级 S2（行为降级）。Windows 下 `setup.bat --minimal` 生成的构建产物约 26MB，而非文档所述的 6MB。
  - 链接: https://github.com/zeroclaw-labs/zeroclaw/issues/6836

**补丁路径**：针对 WhatsApp 通道问题，已有 PR #6845 [fix(channels/whatsapp-web): convert LID to phone reply target for all…] 提出修复。

## 6. 功能请求归类

今日新增的功能请求主要集中在 **TUI** 用户体验提升和 **协议扩展** 上：
- **TUI 相关 (作者 [@singlerider])**：
  - **跟踪器**：创建了 TUI Agent Chat (#6824)、TUI UX (#6825)、TUI ACP Bridge (#6823)、ZeroClaw TUI (#6826) 等多个跟踪 Issue，系统性地规划 TUI 客户端的功能。
  - **代码重组**：提议将 `crates/zeroclaw-tui` 移动到 `apps/tui` (#6821)。
  - **发布流程**：提议将 `zeroclaw-tui` 纳入发布构建矩阵和包管理器 (#6822)。
- **协议与核心**：
  - **ACP 协议扩展**：提议为差异展示和文件提议消息类型扩展 ACP 协议 (#6820)。
  - **文件上传协议**：提议为 RPC 传输层增加文件/附件上传协议 (#6819)。
  - **临时守护进程模式**：提议增加 `--ephemeral` 守护进程模式，使其在最后一个客户端断开后自动退出 (#6818)。
  - **会话级运行时重载**：提议无需重载守护进程即可实现每会话的模型、温度等运行时参数重载 (#6817)。
- **新提供商**：
  - 提议增加 **jina.ai** 作为 `web_search` 供应商 (#6827)。
  - PR #6842 提议增加 **NEAR AI Cloud** 作为 OpenAI 兼容的模型提供商。

## 7. 用户反馈摘要

- **WhatsApp 通道问题 (Issue #6847)**: 用户 **[@MushiTheMoshi]** 在表达了对项目高度赞赏的同时，也急切地反映了配置 WhatsApp 通道时遇到的 QR 码显示问题，属于典型的“喜爱产品但无法正常使用”的反馈。
- **NEXUS 预测市场数据 API (Issue #6846)**: 用户 **[@RileyCraig14]** 并非提出问题，而是展示了自己构建的、基于 `x402` 协议且已通过验证的价格仲裁（Arb）API。这反映了社区开发者正积极利用 Zeroclaw 生态进行开发创新。
- **Slack Token 问题 (Issue #6844)**: 用户 **[@mgstoyanov]** 明确指出这是一个“重复的” Issue（#6237），并指出修复该问题的提交并未完全解决问题。这表明修复方案未能覆盖所有使用场景，用户反馈了回归或未完全修复的情况。

## 8. 待处理积压

以下 Issue 或 PR 长期未响应（`needs-author-action`），可能阻碍项目进展：
- **PR #5779**: `feat(security): add gated_commands TOTP gate for shell tool` - 一项重要的安全功能增强，标记为 `needs-author-action` 超过一个月。
  - 链接: https://github.com/zeroclaw-labs/zeroclaw/pull/5779
- **PR #6700**: `feat(gateway): Add skills management API with enable/disable toggle` - 实现了技能管理 API，同样标记为 `needs-author-action`。
  - 链接: https://github.com/zeroclaw-labs/zeroclaw/pull/6700
- **PR #5187**: `Feat/add arm64 docker target` - 添加 ARM64 Docker 构建支持的请求已开放近两个月，标记为 `needs-author-action`。
  - 链接: https://github.com/zeroclaw-labs/zeroclaw/pull/5187

---

*建议维护者关注 #6847、#6841、#6844 三个 S1 级 Bug，并跟进积压 PR 的状态。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，我将根据您提供的PicoClaw项目GitHub数据，为您生成2026年5月22日的项目动态日报。

---

## PicoClaw 项目日报 | 2026-05-22

### 1. 今日活动概览

过去24小时内，PicoClaw项目保持了较高活跃度，共产生9条Issue更新和27条PR更新。其中，2个新Issue被提出，7个历史Issue被关闭；16个PR处于待合并状态，11个PR已被合并或关闭。此外，项目发布了v0.2.8的夜间构建版本。社区讨论主要集中在**LLM调用失败重试**、**子Agent角色继承**以及**对话历史显示**等稳定性与易用性问题上，项目维护者已针对这些问题提交了修复PR。

### 2. 版本发布

- **nightly 构建发布: `v0.2.8-nightly.20260522.5bbebb5f`**
  - **详情**：这是一个从主分支（main）自动构建的夜间版本，可能包含不稳定因素，使用时需谨慎。
  - **变更日志**：[查看完整更新](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)
  - **无破坏性变更或迁移注意事项的报告。**

### 3. 项目进展

今日有多项关键修复和新功能PR被合并或关闭，主要进展如下：

- **新增请求上下文策略**：PR [#2914](https://github.com/sipeed/picoclaw/pull/2914) 被合并，新增了全局的 `agents.defaults.turn_profile` 配置。此功能允许为每一次新的交互回合（turn）配置是否包含历史记录、系统上下文、技能提示和工具调用，为高级会话控制提供了机制。
- **Telegram通道稳定性修复**：合并了来自贡献者 [@bogdanovich](https://github.com/bogdanovich) 的系列修复PR，包括：
  - 修复Telegram论坛主题（Forum Topic）中消息发送时丢失路由信息的问题。[#2772](https://github.com/sipeed/picoclaw/pull/2772)
  - 修复定时任务（cron）发出干扰性反馈的问题。[#2777](https://github.com/sipeed/picoclaw/pull/2777)
  - 修复Telegram论坛主题回复时“typing...”状态不停止的问题。[#2776](https://github.com/sipeed/picoclaw/pull/2776)
- **代理功能增强**：新增了 `working_summary` 工具反馈模式，可在聊天中显示简洁的任务进度信息。[#2778](https://github.com/sipeed/picoclaw/pull/2778)

### 4. 社区热点

- **最热议题: LLM调用失败重试机制** (Issue [#629](https://github.com/sipeed/picoclaw/issues/629))
  - **讨论焦点**：该议题由用户 [@manhnt9](https://github.com/manhnt9) 于数月前提出，讨论持续至今，共有15条评论。用户描述在执行长期任务时，LLM提供商会返回HTTP 500错误，但程序没有进行重试，导致任务挂起。尽管该Issue今日被标记为关闭，但其反映了社区对**高可用性和弹性**的强烈需求，尤其是在使用外部LLM提供商的场景下。

- **代理结构问题: 子Agent继承父Agent角色** (Issue [#2775](https://github.com/sipeed/picoclaw/issues/2775))
  - **讨论背景**：用户 [@sdjeny](https://github.com/sdjeny) 报告了一个多Agent架构中的核心问题：通过spawn生成的子Agent会继承根工作区的AGENT.md，导致Planner、Builder等不同角色的子Agent都认为自己是“根Agent”，引发角色混淆。该议题引发了4条评论，并已于今日关闭，表明该问题已通过其他方式或版本得到解决。

### 5. Bug 与稳定性

今日报告并修复了多项影响用户体验的Bug：

- **严重: PDF流数据传输错误 (Telegram Bot)** (Issue [#2798](https://github.com/sipeed/picoclaw/issues/2798))
  - **描述**：用户在Docker Compose环境下，通过Telegram发送PDF文件后，会话流/连接中断。该问题被确认仅在PicoClaw中出现。
  - **状态**: 已关闭。

- **中等: 对话历史仅显示最后一条用户消息** (Issue [#2795](https://github.com/sipeed/picoclaw/issues/2795))
  - **描述**：用户切换回历史对话时，只能看到最后发送的一条用户消息，导致上下文丢失，严重影响对话连贯性。
  - **状态**: 已关闭。

- **中等: 会话消息缺少独立时间戳** (Issue [#2787](https://github.com/sipeed/picoclaw/issues/2787))
  - **描述**：Session API返回的消息列表不包含每条消息自身的时间戳，前端只能使用会话级别的`updated`时间，导致消息时间显示不准确。
  - **状态**: 已关闭。

- **低: 多用户群组会话缺少发送者归属** (Issue [#2702](https://github.com/sipeed/picoclaw/issues/2702))
  - **描述**：在Discord等群组频道中，历史会话记录无法区分消息发送者，对上下文理解造成困扰。
  - **状态**: 已关闭。

### 6. 功能请求归类

- **性能优化需求**：用户 [@corporatepiyush](https://github.com/corporatepiyush) 提出了针对CPU、内存和IO的总体优化需求（Issue [#2916](https://github.com/sipeed/picoclaw/issues/2916)），并附上了初步的代码分析。此议题为开放状态。
- **扩展LLM提供商支持**：用户提出希望原生支持 **GPT4Free (g4f)** 作为提供商，并包含自动模型回退和代理路由功能（Issue [#2901](https://github.com/sipeed/picoclaw/issues/2901)）。同时，已有社区成员提交了 **NEAR AI Cloud** 提供商的添加PR（[#2917](https://github.com/sipeed/picoclaw/pull/2917)）。
- **项目可持续性支持**：用户 [@nikolasdehor](https://github.com/nikolasdehor) 建议仓库添加 `FUNDING.yml` 文件，以便社区用户能够通过GitHub的“Sponsor”功能直接提供财务支持（Issue [#2912](https://github.com/sipeed/picoclaw/issues/2912)）。

### 7. 用户反馈摘要

- **批评点**：用户对LLM调用失败时的无响应、群组聊天中消息归属不清、聊天记录显示不全等问题表达了负面体验。例如，Gerroon在Issue #2798中描述了PDF导致整个Bot中断的情况，强调了该问题的严重性。
- **贡献者行为**：用户 [@bogdanovich](https://github.com/bogdanovich) 今日贡献了多条高质量的修复PR，内容集中在Telegram集成和代理功能增强上，显示其在项目特定领域的持续关注和贡献。
- **社区期望**：从多个Bug报告和功能请求（如重试机制、性能优化）来看，社区对PicoClaw在**生产环境下的稳定性和性能**抱有较高期望。

### 8. 待处理积压

以下是一些长期未合并或有待进一步关注的PR和Issue：

- **文档统一PR**：PR [#2662](https://github.com/sipeed/picoclaw/pull/2662) 旨在统一供应商（vendor）文档中的表格格式，以减少冗余信息。该PR自4月24日提出以来尚未被合并，可能值得维护者审阅。
- **工具策略过滤器PR**：PR [#2838](https://github.com/sipeed/picoclaw/pull/2838) 扩展了`AGENT.md`的frontmatter功能，允许对工具和MCP服务器设置`allow`/`deny`策略。该功能对精细控制Agent能力至关重要，自5月9日提出后处于待合并状态。

</details>