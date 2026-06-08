# OpenClaw 生态日报 2026-06-08

> Issues: 293 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-06-08 02:45 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目日报 — 2026-06-08

## 1. 今日活动概览

过去 24 小时（2026-06-07 → 2026-06-08）内，OpenClaw 仓库活动高度活跃：共产生 **293 条 Issue 更新**（新开/活跃 178，已关闭 115）和 **500 条 PR 更新**（待合并 336，已合并/关闭 164）。本日无新版本发布。社区讨论集中在安全回归（`minSecurity` 反转）、恢复机制缺陷以及 Feishu 通道的分页与限流问题。多件高优先级 Bug 已附带修复 PR 进入等待合并状态。

## 2. 版本发布

本日无新版本发布。

## 3. 项目进展（今日合并/关闭的重要 PR）

本日有多项修复与功能 PR 被合并或标记为已关闭，以下为重要条目：

- **`fix(codex): preserve native subagent completion results`** (#91235, 已关闭)
  修复 Codex 原生子代理通知中 `completed: null` 被错误折叠为“(no output)”的问题，确保子代理完成结果正确传递。
  https://github.com/openclaw/openclaw/pull/91235

- **`fix(cron): preserve isolated agent turn payload message`** (#91230, 已关闭)
  修复孤立 cron 代理提示中消息字段被错误重复导致显示 `[object Object]` 的回归问题。
  https://github.com/openclaw/openclaw/pull/91230

- **`fix(inbound-meta): head+tail truncation for reply context body preserves actionable tail content`** (#87909, 已关闭)
  修复长回复消息正文截断策略，保留尾部可操作内容而非仅保留头部。
  https://github.com/openclaw/openclaw/pull/87909

- **`fix(agents): do not misclassify client-disconnect abort as run timeout`** (#90936, 状态: 🚀 automerge armed)
  修复嵌入式运行中客户端断开被错误标记为“请求超时”的误分类问题。
  https://github.com/openclaw/openclaw/pull/90936

- **`fix #90452: Regression: Heartbeat exec completion still shows generic fallback text instead of actual output`** (#90897, 状态: 🚀 automerge armed)
  修复心跳触发的 `exec` 任务失败后仍显示通用 fallback 文本而非实际输出的回归。
  https://github.com/openclaw/openclaw/pull/90897

## 4. 社区热点

本日讨论最活跃的 Issue 与 PR 如下：

| 编号 | 标题 | 评论数 | 链接 |
|------|------|--------|------|
| #25592 | Text between tool calls leaks to messaging channels | 27 | [链接](https://github.com/openclaw/openclaw/issues/25592) |
| #88838 | Track core session/transcript SQLite migration via accessor seam | 18 | [链接](https://github.com/openclaw/openclaw/issues/88838) |
| #88312 | [Regression] Codex app-server turn-completion stall returns | 14 | [链接](https://github.com/openclaw/openclaw/issues/88312) |
| #29387 | Bootstrap files in agentDir silently ignored | 14 | [链接](https://github.com/openclaw/openclaw/issues/29387) |
| #90991 | Cron scheduled trigger contaminates global runtime state | 13 | [链接](https://github.com/openclaw/openclaw/issues/90991) |

**焦点分析**：
- **#25592** 是长期存在的“工具间文本泄露到消息通道”问题，被标记为钻石龙虾级（最高严重性）且涉及安全与消息丢失。社区持续关注，仍无修复 PR 出现。
- **#88312** 是近期的回归问题——Codex 应用服务器在 2026.5.27 版本后出现“turn-completion stall”，已确认为 #84076 的再回归。虽无新评论但受到较多 👍 投票（3 个），用户诉求强烈。
- **#90991** 是昨日新开的 Issue，描述 cron 调度污染全局运行状态导致系统级过载，已引发 13 条讨论，表明 cron 模块稳定性仍是焦点。

## 5. Bug 与稳定性

本日记录的 Bug、崩溃及功能回归（按严重性排序）：

| 严重性 | Issue | 概述 | 是否已有 fix PR |
|--------|-------|------|----------------|
| P1 | #91283 | **minSecurity 反转**：安全等级顺序反向，导致 `security="full"` 被错误解释为最严格而非最宽松（新开，2026-06-08） | 否 |
| P1 | #91212 | **delivery-recovery 失败**：网关重启后恢复在通道传输就绪前执行，导致消息永久丢失（新开） | 否 |
| P1 | #90639 | **compaction safeguard 模式下会话涨到 200K+ 令牌仍触发 "Something went wrong"** | 否 |
| P1 | #88312 | **Codex 应用服务器 turn-completion stall 回归**（#84076 复发） | 否（关联 PR #85107 已合，但未完全解决） |
| P1 | #90428 | **WSL2 + Node 24 下 exec 工具触发网关 SIGTERM 重启** | 否 |
| P1 | #38091 | **WebSocket 重连导致正在进行会话被 terminated** | 否 |
| P1 | #29387 | **agentDir 中的 bootstrap 文件被忽略** | 否 |
| P2 | #91212 补充 | **Feishu 发送限流错误未重试** | 是（PR #89659 已开） |
| P2 | #90283 | **minSecurity 反转** 已在 exec-approvals.js 中定位 | 否 |
| P2 | #87326 | **Telegram 流式输出中工具间文本被最终块覆盖丢失** | 否 |
| P2 | #39572 | **Feishu 打字指示器误用 MessageReaction API** | 否 |

**值得注意**：今日新发现的 **#91283（minSecurity 反转）** 是重要的安全回归，影响所有使用 `security` 配置的部署。代码中排序函数将 `full` 视为最高（最严格）而非最低（最宽松），导致安全覆盖完全颠倒。当前暂未发现对应修复 PR。

## 6. 功能请求归类

本日用户提出的主要功能需求及关联 PR（仅记录证据，不预测路线图）：

| 需求 | Issue/PR | 核心诉求 |
|------|----------|----------|
| Topic-session 家庭模型 | #90916 | 允许一个助手拥有多个命名话题通道，隔离近期上下文但共享持久内存 |
| Gateway 无 AI 轻量模式 | #86881 | 提供仅运行网关、cron、webhook 的部署包，不加载 AI 框架 |
| 可配置的 session 启动消息 | #45501 | 允许用户自定义 `/new` 后的初始提示文本 |
| 会话上下文用量展示 | #40215 | 在 `/usage` 中添加累计上下文令牌数 / 窗口大小 |
| 轻量级 slug 生成器 | #33962 | 使用小型模型替换主模型用于会话文件名生成，避免大模型拥堵 |
| 邮件/IM 的 isSilentReply 防护 | #38603 | Telegram 发消息缺少静默回复检查，导致文本闪烁 |
| 分页参数不生效 | #37626 | Feishu wiki 工具 `nodes` 仅返回前 20 条记录 |
| 广播式梦（Dreaming）摘要 | #70005 | 梦生成过于基于词频而非语义，建议改进材料选择逻辑 |
| Crash loop 恢复 | #74822 | 网关多次出现 '⚠️ Something went wrong' 需手动重启 |
| Slack 工具级进度显示 | #33413 | 在 Slack 线程状态中动态显示当前运行的工具名 |
| pre-compaction 内存写入护栏 | #90354 | 在紧凑前内存写入操作中加入大小限制与验证 |

**关联 PR**：
- PR #89659：为 Feishu 发送限流添加重试逻辑（解决部分 #37626 相关场景）。
- PR #90433：修复 Dreaming 未排除归档会话导致噪声污染（回应 #70005）。
- PR #89712：支持 cron 直接执行命令（command jobs），减少纯 AI 运行开销。
- PR #90101：添加运行时自上下文配置与工具，为后续运行时感知能力做铺垫。

## 7. 用户反馈摘要

从 Issue 评论区提取的真实用户声音（不包含主观推测）：

- **#91283（minSecurity 反转）**：作者 `@korewaChino` 明确指出代码中排序函数将安全等级顺序定义反了，导致配置 `security="full"` 的会话被限制为 "allowlist" 级别。这是一个逻辑错误，而非模糊行为。
- **#91212（delivery-recovery 过早重试）**：`@Enominera` 报告说 Feishu 消息在网关重启后永久丢失，因为恢复在 WebSocket 重新连接之前就开始尝试投递，且 `retryCount` 不再重置，使消息陷入死循环。
- **#88312（Codex 回归）**：`@yair` 详细复现了 2026.5.27 版本后多工具代理回合可靠失败的场景，并指出 2026.5.26 工作正常。属于明显的代码变更导致。
- **#25592（工具间文本泄露）**：这是持续半年的旧 Issue，但社区依然活跃。用户报告在 Slack/iMessage 上看到模型内部错误处理文本直接作为消息输出，严重影响体验。
- **#31283 等关于 Dreaming 的反馈**：用户 `@bbj375767338-arch` 抱怨梦境总结"与真正讨论的实质内容脱节"，听起来像"空无的存在主义练习"。

## 8. 待处理积压

以下为长期未响应或缺失维护者关注的重要 Issue 与 PR，需提醒团队重点关注：

| 类别 | 编号 | 标题 | 创建/最后更新 | 原因 |
|------|------|------|---------------|------|
| Issue | #25592 | Text between tool calls leaks to messaging channels | 2026-02-24 / 2026-06-07 | 钻石龙虾级安全+消息丢失，无任何修复 PR |
| Issue | #29387 | Bootstrap files in agentDir are silently ignored | 2026-02-28 / 2026-06-07 | P1 且影响所有多 agent 部署，至今无 fix PR |
| Issue | #31583 | `exec` tool does not inherit `skills.entries.*.env` | 2026-03-02 / 2026-06-07 | 安全相关（密钥无法注入），PR 已关联但未合 |
| Issue | #40001 | Write tool lacks append mode — cron sessions destroy shared files | 2026-03-08 / 2026-06-07 | 导致数据丢失，无可用 PR |
| Issue | #88312 | [Regression] Codex app-server turn-completion stall returns | 2026-05-30 / 2026-06-07 | 复现后维护者尚未分配，无新 PR |
| PR | #88212 | feat(agents): auto-trim lean local model tools | 2026-05-30 / 2026-06-08 | 等待作者更新（status: ⏳） |
| PR | #87380 | fix(gateway): persist configured extra CA certs | 2026-05-27 / 2026-06-08 | 等待作者更新 |
| PR | #89712 | feat(cron): support command jobs | 2026-06-03 / 2026-06-08 | 等待作者更新 |
| PR | #90101 | feat: add runtime self context config and tool | 2026-06-04 / 2026-06-08 | 等待作者更新 |

---

## 横向生态对比

# 横向对比分析报告：2026-06-08 开源 AI 智能体项目动态

---

## 1. 今日横向概览

- **OpenClaw** 以 293 条 Issue 与 500 条 PR 的更新量遥遥领先，社区焦点集中在安全回归（`minSecurity` 反转）与恢复机制缺陷，高优先级 Bug 多件已有修复 PR 等待合并。
- **Zeroclaw** 活动量次之（50 Issue / 50 PR），核心矛盾是 Web Dashboard 长期不可用问题（28 条评论持续发酵），同时多项 CLI 增强 PR 已合并。
- **PicoClaw** 发布了一个夜间版本（v0.2.9-nightly），关闭了 17 条 Issue，主要围绕 `allow_from` Matrix 用户 ID 解析错误和代码质量提升，社区对 Telegram 位置消息无响应的新 Bug 关注较高。
- **NanoBot** 活动量最小（8 Issue / 19 PR），但合并了飞书话题群修复等关键 PR，同时新开 Bug（Dream 禁用不彻底）和近期会话历史丢弃 Bug（已有 Fix PR）引起了社区讨论。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新总数 | PR 更新总数 | 今日版本发布 | 事实性备注 |
|------|--------------|-------------|-------------|------------|
| OpenClaw | 293（新开/活跃178, 关闭115） | 500（待合并336, 合并/关闭164） | 无 | 安全回归与消息恢复为高优先级焦点 |
| NanoBot | 8（新开6, 关闭2） | 19（合并4, 其余待处理） | 无 | 飞书通道修复是关键进展，Dream 配置 Bug 新开 |
| Zeroclaw | 50（新开/活跃32, 关闭18） | 50（待合并38, 合并/关闭12） | 无 | Web Dashboard 不可用问题最活跃（28条评论） |
| PicoClaw | 21（新开4, 关闭17） | 21（合并/关闭12, 其余待处理） | 1 个夜间版本 (v0.2.9-nightly) | `allow_from` Matrix ID 修复已合并；Telegram 位置消息 Bug 新开 |

---

## 3. OpenClaw 与同类对照

- **活动量**：OpenClaw 的 Issue/PR 更新量是其余项目的 6–35 倍，说明其社区贡献者基数、维护者响应速度以及问题密度均显著更高。
- **技术重点**：
  - OpenClaw 当日重点解决的是 **安全配置反转（`minSecurity`）**、**Codex 回归**、**cron 全局状态污染** 等核心运行时稳定性问题，涉及子代理、心跳、回复截断等复杂交互。
  - 其余项目侧重 **通道适配**（飞书、WhatsApp、Telegram、Matrix）和 **单点功能增强**（CLI 模型切换、WebUI ANSI 渲染、技能自适应加载）。
- **社区讨论面**：
  - OpenClaw 社区在讨论“工具间文本泄露”（最高严重性，持续半年无 Fix）这类深层次架构问题，以及 long-running 的数据库迁移计划。
  - 其他项目的社区讨论更贴近使用门槛（“Web Dashboard 打不开”“配置了 Dream 不生效”“MCP 连接失败”），表明用户群体处于不同成熟度阶段。

---

## 4. 共同出现的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|----------|----------|----------|
| **飞书/Feishu 通道优化** | OpenClaw、NanoBot | OpenClaw 修复 Feishu 发送限流缺少重试（PR #89659）；NanoBot 合并飞书话题群回复功能（PR #2885） |
| **MCP 连接稳定性** | NanoBot、Zeroclaw、PicoClaw | NanoBot 提出 MCP SSRF 防护 PR（#4123）；Zeroclaw 关闭了 “MCP's not working” Bug（#4848）；PicoClaw 修复了 `mcp add` 命令全局标志解析错误（PR #3048） |
| **上下文/内存管理** | OpenClaw、NanoBot、Zeroclaw | OpenClaw 有 compaction safeguard 问题（#90639）；NanoBot 用户请求按压力动态微压缩（#4238）；Zeroclaw 报告 `context_compression` 在守护进程下不触发（#4880） |
| **子代理 / 模型切换灵活性** | OpenClaw、NanoBot、Zeroclaw | OpenClaw 修复子代理完成结果传递（#91235）；NanoBot 请求 `spawn` 工具支持模型参数（#4231）；Zeroclaw 合并了 `/model` 和 `/model-provider` 动态切换 CLI 功能（PR #7209） |

> **注意**：上述方向均出自今日数据中至少两个项目的独立动态，构成跨项目信号。

---

## 5. 差异化定位分析（基于今日数据）

| 维度 | OpenClaw | NanoBot | Zeroclaw | PicoClaw |
|------|----------|---------|----------|----------|
| **目标用户** | 企业级部署 / 多 Agent 复杂场景 | 个人开发者 / 轻量级个人助手 | 技术用户 / 桌面与 CLI 深度交互 | 特定社区（Matrix、交易所连接）、嵌入式/低资源环境 |
| **核心功能侧重** | 安全与运行时稳定性、Codex 支持、多通道（Feishu/Telegram） | 通道集成（飞书/WhatsApp）、沙箱（bwrap）、WebUI 体验 | 桌面端 (Tauri/Web Dashboard)、CLI 交互增强（队列、模型切换）、技能系统 | 身份验证（Matrix）、交易连接器、代码质量修补、夜间发布 |
| **技术架构** | 模块化 Codex/Agent 运行时，大量微服务级 PR | 相对单体，但支持 MCP、自定义提供商 | 强调多实例、Agent 路由、回退链，正在迁移内存策略 | 轻量级，Golang 实现（？），关注二进制大小与兼容性 |
| **今日社区情绪** | 关注高严重性回归，维护者响应积极（automerge 武装） | 功能 Bug 反馈较多，但新功能合并节奏快 | 用户对 Web Dashboard 长期不可用感到失望，但对 CLI 增强认可 | 用户对文档不足和通道功能缺失有抱怨，维护者快速修复 Matrix 问题 |

---

## 6. 社区活跃度记录

| 活跃度分层 | 项目 | 今日量化依据 |
|------------|------|-------------|
| **高度活跃** | OpenClaw | 293 Issue / 500 PR，无版本发布但修复 PR 密集，社区评论最活跃（#25592 有 27 评论） |
| **中度活跃** | Zeroclaw | 50 Issue / 50 PR，单个热点 Issue 达 28 评论，合并了 4 个功能 PR |
| **低度活跃** | PicoClaw | 21 Issue / 21 PR，发布了夜间版，但社区讨论量较小（最多 8 评论） |
| **低度活跃** | NanoBot | 8 Issue / 19 PR，无版本发布，但合并了关键飞书修复，新开 Bug 仅 1-2 评论 |

> **说明**：活跃度分层仅基于今日数据量，不代表项目长期健康度或成熟度。NanoBot 虽然 Issue 数少，但 PR 合并效率较高。

---

## 7. 有证据支撑的观察

1. **安全与稳定性回归是 OpenClaw 的短期痛点**：今日新开的 P1 Bug（`minSecurity` 反转、delivery-recovery 永久丢消息）加上 Codex 回归复发（#88312），表明 2026.5 月末的版本升级引入了多处质量回退，团队正在密集修复（已有多个 PR 进入 automerge 状态）。

2. **飞书/Feishu 通道成为多项目共同关注点**：OpenClaw 有限流重试 PR，NanoBot 有话题群回复合并，说明国内企业用户对飞书集成的需求正在驱动开发资源倾斜。这是今日唯一同时出现在两个项目中的明确通道主题。

3. **MCP 连接稳定性仍为技术债务**：三个项目（NanoBot、Zeroclaw、PicoClaw）今日均有 MCP 相关的修复或功能请求，且部分 Issue 已存在较长时间（如 PicoClaw #3041 的 `mcp add` Bug 持续数天）。表明 MCP 协议作为扩展点虽受社区欢迎，但实现质量尚需打磨。

4. **用户对会话上下文与内存管理的需求普遍存在**：OpenClaw、NanoBot、Zeroclaw 各有关于压缩、丢弃、动态压力的讨论，但实现路径不同（OpenClaw 聚焦 compaction safeguard，NanoBot 提议按压力微压缩，Zeroclaw 迁移内存策略）。这反映出长对话场景下，各项目尚未形成统一的最佳实践。

5. **今日暂无明确的跨项目架构融合信号**：四个项目在技术栈、发布频率和社区关注点上的差异大于相似性。OpenClaw 偏重大型平台，其余三者更倾向于插件式或轻量级实现，未观察到诸如统一标准或相互依赖的迹象。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为 NanoBot 项目的 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 2026-06-08 数据，我将为您生成一份结构清晰、数据驱动的项目动态日报。

---

## NanoBot 项目动态日报 (2026-06-08)

### 1. 今日活动概览

过去 24 小时内，NanoBot 项目共更新 8 条 Issue 和 19 条 Pull Request (PR)。其中，**6 个新 Issue 处于开放状态**，反映了社区对 **Bubblewrap (bwrap) 沙箱兼容性**、**Dream功能禁用不彻底**以及 **WebUI 版本信息显示**等问题的关注。在代码贡献方面，**19 个 PR 中有 4 个已合并**，主要涵盖了 Feishu 飞书和 WhatsApp 通道的修复，以及 ANSI 输出渲染和自定义提供商逻辑的改进。此外，一个关于修复**会话历史丢弃**关键 Bug 的 PR 已被提出。本次无新版本发布。

### 2. 版本发布

无。

### 3. 项目进展 (已合并/关闭的 PR)

- **[关键修复] 飞书话题群 Bot 回复功能修复** ([#2256](https://github.com/HKUDS/nanobot/issues/2256), [#2885](https://github.com/HKUDS/nanobot/pull/2885))
  - 先有 Issue #2256 提出飞书话题群中 Bot 应在本话题内回复的问题。随后 PR #2885 被合并，该 PR 通过 `_resolve_mentions()` 函数解析了消息中的 `@_user_n` 占位符，并改进了对 Bot 是否被提及的判断逻辑。这表示飞书通道的话题群支持得到了增强。

- **[修复] 修复自定义提供商将空字符串推理内容转换为 None 的问题** ([#4105](https://github.com/HKUDS/nanobot/issues/4105), [#4227](https://github.com/HKUDS/nanobot/pull/4227))
  - 针对 Issue #4105 报告的 Bug，PR #4227 已被合并。该修复确保了当模型（如 DeepSeek）返回空字符串 `""` 作为 `reasoning_content` 以表示“无推理”时，系统能保留其空字符串状态，而非错误地将其转换为 `None`，从而避免丢失必要信息。

- **[新功能] WebUI 现在支持渲染 ANSI 输出** ([#4240](https://github.com/HKUDS/nanobot/pull/4240))
  - 合并的 PR #4240 为 WebUI 代码块内的控制台输出增加了 **ANSI 颜色渲染**支持。该功能包含一个紧凑的 ANSI SGR 解析器，支持标准色、256色、RGB 色及多种样式，输出为纯文本时可自动剥离控制序列，提升了在 WebUI 中查看终端输出结果的体验。

- **[修复] WhatsApp 通道 LID 群组提及处理** ([#2663](https://github.com/HKUDS/nanobot/pull/2663))
  - PR #2663 被合并，修复了 WhatsApp 通道中为 LID 和带设备后缀的 Bot JID 识别群组提及的问题，并优化了滑动回复的 Bot 地址判断逻辑。

### 4. 社区热点

- **长期遗留 PR 终获解决：飞书通道功能增强** ([#2885](https://github.com/HKUDS/nanobot/pull/2885))
  - 该 PR 创建于 2026-04-07，经过两个月的讨论和打磨，于今日被合并。它解决了社区中关于飞书通道功能的多个痛点，包括话题群回复和 AT 解析，是今日社区沟通中的一项重大成果。

- **严肃 Bug 的快速响应：会话历史丢弃问题** ([#4203](https://github.com/HKUDS/nanobot/issues/4203))
  - 报告于 6 月 5 日的 `find_legal_message_start` 函数 Bug（导致所有消息被丢弃）受到高度关注，已有 2 条评论。社区成员 `@yu-xin-c` 作为主要贡献者，迅速提出修复 PR ([#4219](https://github.com/HKUDS/nanobot/pull/4219))，体现了项目对核心稳定性问题的高效响应。

- **新 Bug 与用户痛点：Dream 功能禁用不彻底** ([#4242](https://github.com/HKUDS/nanobot/issues/4242))
  - 今日新开的 Issue #4242 指出，当 `dream.enabled` 设为 `false` 时，虽然定时任务未注册，但历史聊天记录仍会通过“Recent History”注入到系统提示中。该问题直接暴露了用户配置与预期行为不符的痛点，讨论热度较高。

### 5. Bug 与稳定性

- **[严重] `find_legal_message_start` 函数会丢弃所有消息** ([#4203](https://github.com/HKUDS/nanobot/issues/4203))
  - **状态**：**已有 Fix PR** ([#4219](https://github.com/HKUDS/nanobot/pull/4219))。当用户消息后跟着孤立工具结果时，会话历史会被清空。
  - **严重程度**：高。该 Bug 会直接导致对话“失忆”，破坏核心功能。贡献者 `@yu-xin-c` 已提交修复，要求删除孤立工具结果并保留最新用户消息。

- **[中] Bubblewrap 沙箱环境变量不重置** ([#4237](https://github.com/HKUDS/nanobot/issues/4237))
  - **状态**：**已有 Fix PR** ([#4239](https://github.com/HKUDS/nanobot/pull/4239))。bwrap 沙箱未覆盖 `$HOME` 变量，导致工具写入路径错误或失败。
  - **严重程度**：中。该问题影响工具在沙箱内的读写功能，但仅限于使用 bwrap 沙箱的场景。

- **[中] Bubblewrap 沙箱在 Ubuntu 24.04 上运行失败** ([#4236](https://github.com/HKUDS/nanobot/issues/4236))
  - **状态**：**开放**。Ubuntu 24.04 默认限制了非特权用户命名空间，导致 bwrap 沙箱初始化失败。
  - **严重程度**：中。这会阻止部分 Linux 用户（特别是新版 Ubuntu 用户）启用基于 bwrap 的安全沙箱功能。

- **[低] Dream 功能禁用不彻底** ([#4242](https://github.com/HKUDS/nanobot/issues/4242))
  - **状态**：**开放**。`dream.enabled: false` 配置无法阻止聊天历史注入到系统提示。
  - **严重程度**：低（功能层面）。这虽不影响核心聊天，但会导致用户隐私和 Token 消耗不符合预期。

### 6. 功能请求归类

- **用户界面 & 体验**
  - **显示版本号**: ([#4233](https://github.com/HKUDS/nanobot/issues/4233)) 希望在 WebUI 的某个位置显示当前运行版本，并建议增加检查更新提示。已有相应 PR [#4235](https://github.com/HKUDS/nanobot/pull/4235) 实现此功能。
  - **飞书话题群回复**: (已通过 PR [#2885](https://github.com/HKUDS/nanobot/pull/2885) 实现) 请求 Bot 在话题群中在本话题内回复。

- **工具 & 集成**
  - **子代理模型参数覆盖**: ([#4231](https://github.com/HKUDS/nanobot/issues/4231)) 请求为 `spawn` 工具增加一个 `model` 参数，允许子代理使用与主代理不同的模型。
  - **钉钉群聊白名单**: ([#4206](https://github.com/HKUDS/nanobot/pull/4206)) 提出为钉钉通道增加 `group_allow_from` 字段，实现群组级别的白名单控制。
  - **共享语音输入支持**: ([#4232](https://github.com/HKUDS/nanobot/pull/4232)) 提议将语音转录能力从通道级提升为全局功能，使其能被 WebUI 等多个前端共享。

- **安全**
  - **MCP SSRF 防护**: ([#4123](https://github.com/HKUDS/nanobot/pull/4123)) 提议在 MCP 协议探测阶段就拒绝不安全的 HTTP URL，增强防 SSRF 攻击能力。

- **性能与稳定性**
  - **按上下文压力执行微压缩**: ([#4238](https://github.com/HKUDS/nanobot/pull/4238)) 提议将微压缩策略从固定的工具结果数量改为更具上下文压力动态触发，以优化长对话管理。

### 7. 用户反馈摘要

- **“配置与行为不匹配”**：用户 `@skyline75489` 在 Issue #4242 中反馈，将 `dream.enabled` 设置为 `false` 后，期望完全禁用 Dream 功能及其相关信息注入，但聊天历史仍被注入系统提示。这是一个典型的配置预期与实际行为间的落差。
- **“安全沙箱在主流 Linux 发行版上失效”**：用户 `@primit1v0` 连续提交了两个关于 bwrap 沙箱的 Bug (#4237, #4236)，指出该功能在 Ubuntu 24.04 等现代 Linux 系统上因系统限制而直接报错或功能异常，影响其安全使用。
- **“希望获得更直观的项目状态反馈”**：用户 `@viblo` 在 Issue #4233 中提出，虽然可通过 `/status` 查询版本，但希望在 WebUI 界面直接看到项目版本号和更新提示，让运维和问题定位更便捷。
- **“子代理灵活性需求”**：用户 `@jsapede` 在 Issue #4231 中描述了其使用场景，希望 `spawn` 工具能用于调用不同模型执行特定任务（如使用更小/更快的模型进行简单任务），当前功能限制了他对多模型工作流的探索。

### 8. 待处理积压

- **[长期未响应] Chat history still injected into system prompt when dream.enabled is false** ([#4242](https://github.com/HKUDS/nanobot/issues/4242))
  - 这是今日新开 Issue，但因其直接反映了功能逻辑 Bug，且开发团队尚未明确回应，值得立即跟进。虽然刚创建，但优先级应较高。

- **[长期未合并] 若干测试增强 PR** ([#3982](https://github.com/HKUDS/nanobot/pull/3982), [#3983](https://github.com/HKUDS/nanobot/pull/3983), [#4193](https://github.com/HKUDS/nanobot/pull/4193))
  - 来自贡献者 `@yu-xin-c` 的一系列关于添加测试框架和覆盖率的 PR 已持续开放超过一周。这些 PR 对于提升项目质量和长期稳定性至关重要，建议尽快审查合并。

- **[待审查] MCP SSRF 防护 PR** ([#4123](https://github.com/HKUDS/nanobot/pull/4123))
  - 这是一个重要的安全增强 PR，已开放超过一周。SSRF 漏洞是常见的安全威胁，且该 PR 设计较为全面，建议项目维护者优先安排审查。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，这是为您生成的 Zeroclaw 项目 2026-06-08 动态日报。

---

### Zeroclaw 项目动态日报 (2026-06-08)

**1. 今日活动概览**

过去24小时内，项目活跃度较高，共有50条Issues和50条PR被更新。其中，新开或活跃的Issues有32条，另有18条被关闭；待合并的PR有38条，被合并或关闭的有12条。社区讨论集中在Tauri桌面端Web Dashboard无法使用、Logo设计以及Token消耗优化等议题上，同时多项关于Web UI、配置管理和安全修复的PR正在推进中。今日无新版本发布。

**2. 版本发布**

无。 （最新数据时间范围内无新版本发布）

**3. 项目进展**

今日有多项重要PR被合并或关闭，推动了功能完善和问题修复。

- **核心运行时与命令行体验：**
    - 合并了 **`[Feature]: 出站消息队列` (#7190)**：在`zerocode` TUI中引入了出站消息队列，允许用户在一次对话响应进行中时，提前输入下一条消息，提升了交互流畅度。
    - 合并了 **`[Feature]: /model 和 /model-provider 选择器` (#7209)**：为`zerocode` TUI添加了对话内动态切换模型和提供者的功能，用户无需退出并重新配置即可更换模型。
    - 合并了 **`[Feature]: 按别名配置模型提供者回退` (#7178)**：重新引入了按供应商别名配置回退链的机制，让模型负载均衡和容错策略更明确。

- **文档与构建：**
    - 合并了 **`[Enhancement]: 主题增强` (#7249)**：为`zerocode` TUI修复了终端颜色支持问题，增加了注册表生成的主题预设和按Agent覆盖主题的功能。

- **配置与修复：**
    - 关闭了 **`[Bug]: MCP's not working` (#4848)**。
    - 关闭了 **`[Bug]: Fallback provider chain ignores [providers.X] config` (#5803)**。

**4. 社区热点**

- **Web Dashboard 不可用问题（#4866）**：该问题以28条评论成为今日讨论最激烈的Issue。用户`loveholly`报告称，无论是通过Web UI还是Tauri桌面应用访问，都会提示“Web dashboard not available”，且该问题已跨越多版本未能解决。大量用户的跟进评论显示了此问题对体验的严重阻碍。

- **新Logo设计讨论（#4710）**：该Feature请求引发了社区对项目视觉标识的广泛兴趣，有11条评论和2个点赞。用户`mastwet`给出了具体的设计建议，社区对此类非功能性贡献表现出积极态度。

- **Token消耗优化讨论（#5146）**：用户`jonsmirl`提出的通过技能编译最小化Token消耗的Feature，获得了9条评论。该提案深入分析了当前系统每次调用都发送完整`SKILL.md`的技术细节，并提出“技能编译”的解决方案，反映了社区对降低运行成本的关注。

**5. Bug 与稳定性**

今日报告的Bug严重程度多样，部分已有对应的修复PR。

- **严重 (S0/S1 - 工作流阻塞)**
    - **Web Dashboard不可用 (#4866)**：严重性为S1，是社区反馈最强烈的问题。目前尚无直接修复PR，但即将发布的`v0.8.0`可能会包含相关修复。
    - **`context_compression`在守护进程模式下未触发 (#4880)**：严重性为S2。Agent的上下文压缩机制在通过频道（如QQ、Telegram）使用时不生效，导致内存浪费。PR `#7234`旨在迁移内存策略，或能解决此问题。
    - **`web_fetch`工具的`allowed_private_hosts`白名单失效 (#5122)**：严重性为S1。当域名解析为私有IP时，即使被列入白名单也会被拦截，存在安全配置隐患。

- **高 (S2 - 体验降级)**
    - **`file_write`工具静默失败 (#4627)**：严重性为S0。工具报告“成功”，但实际文件未写入宿主机文件系统，可能导致数据丢失。该Issue目前状态为`status:in-progress`。
    - **Gemini CLI OAuth认证问题 (#4879)**：严重性为S1。用户在成功认证后依然遇到“rate_limited”等错误，导致无法使用Gemini模型。该问题状态为`status:in-progress`。
    - **委托Agent忽略`prompt_injection_mode`配置 (#5155)**：严重性为S1。委托Agent始终以“Full”模式注入技能提示，无视全局设置，增加了Token消耗。

**6. 功能请求归类**

社区提出的新功能需求涉及多个方面，部分已有对应的PR在推进。

- **架构与基础设施**
    - **i18n 翻译文件移至子模块 (#7184)**：`singlerider`提出RFC，建议将`.ftl`和`.po`翻译文件移入Git子模块，以减少主仓库的变更噪音。

- **安全与合规**
    - **Air-gapped 执行模式 (#6293)**：`singlerider`提出RFC，建议将Agent拆分为离线和在线两部分，通过Unix Socket通信，以支持机密计算和离线运行场景。

- **工具与集成**
    - **多实例频道的Webhook路由 (#6312)**：支持对同一频道类型（如WhatsApp）下的多个别名实例，通过不同Webhook路径进行路由。已有对应的修复PR **#7367**。
    - **禁用`LeakDetector`高熵Token隐藏 (#4832)**：用户请求添加开关，以解决`LeakDetector`将MD5文件名等非密钥内容误判为Token并进行隐藏的问题。
    - **`send_channel_message`工具 (#5145)**：请求添加一个专用工具，允许Agent在运行时直接向特定用户/频道发送消息，而无需依赖定时任务。

- **运行时与性能**
    - **使用Tool Calling进行记忆整合 (#4760)**：建议使用`save_memory`等工具调用代替当前基于JSON文本解析的记忆整合方式，以获得更稳定的结构化输出。

**7. 用户反馈摘要**

- **Web Dashboard**：用户`loveholly`及其跟进者反复强调，跨多版本的Web Dashboard构建失败问题已严重影响了他们的使用。这表明项目的构建流程或版本兼容性存在持续性问题。
- **Gemini OAuth**：用户`nrpx`反馈，按官方文档完成OAuth认证后，Gemini模型仍旧报错，信任流程存在断层。
- **文件写入**：用户`hiant`报告`file_write`工具静默失败，这造成了严重的数据安全与可靠性担忧。
- **日志输出**：用户`mikeyhew`指出，`zeroclaw`命令默认将日志输出到标准输出（stdout），而非标准错误（stderr），这破坏了命令标准输出（如`zeroclaw config schema`）的可解析性。项目已在相关PR `#7346` 和 `#7366` 中着手修复此问题。

**8. 待处理积压**

- **NapCat / OneBot 频道支持 (#2503)**：自2026年3月2日提出至今，用户`irunmyway`请求添加OneBot协议的频道接入支持。该Issue虽已被接受，但尚未有实质性进展，可能会阻碍部分国内用户的集成。
- **提供“完整” Docker 镜像 (#3642)**：自2026年3月15日提出，社区希望有一个包含所有功能（如WhatsApp）的“全功能”Docker镜像，以降低非技术用户的使用门槛。该Issue因依赖CI变更，目前仍处于阻塞状态。
- **多Agent路由 (#2767)**：自2026年3月4日提出，社区（9个👍）期望能实现类似OpenClaw的多Agent路由功能，以支持在同一网关内运行多个独立的工作空间和频道账户。这是一个需求广泛但实现复杂的长期诉求。
- **通过 `.well-known` URI 安装技能 (#4853)**：该特性请求关于制定一个通用的技能发现与安装标准，等待着Agent Skills社区推进标准化工作。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是基于 PicoClaw GitHub 数据生成的 2026-06-08 项目动态日报。

---

# PicoClaw 项目动态日报 | 2026-06-08

## 今日活动概览

过去 24 小时内，PicoClaw 项目处理了 21 条 Issue（其中 17 条已关闭）和 21 条 PR（其中 12 条已合并/关闭），并发布了一个新的夜间版本。社区活动主要集中在修复 `allow_from` 功能在 Matrix 用户 ID 上的错误、优化代码质量（如错误处理和日志记录），以及关闭一批关于交易所（Exchange）连接器开发的功能性 Issue。一名贡献者（`@chengzhichao-xydt`）提交了多个聚焦于代码健壮性的修复 PR。

## 版本发布

-   **nightly: Nightly Build (v0.2.9-nightly.20260608.875cf4a2)**
    -   这是一个自动构建的夜间版本，可能不稳定，需谨慎使用。
    -   **链接**: [Release v0.2.9-nightly.20260608.875cf4a2](https://github.com/sipeed/picoclaw/releases/tag/v0.2.9-nightly.20260608.875cf4a2)
    -   **变更日志**: [Compare v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

## 项目进展

今日合并/关闭的 PR 主要集中在修复错误、增强健壮性以及清理长期未处理的问题。

-   **身份验证（Identity）修复**: PR [#3045](https://github.com/sipeed/picoclaw/pull/3045) 修复了 `allow_from` 功能因解析标准 Matrix 用户 ID (`@user:domain`) 出错而静默拒绝消息的 bug。该 PR 直接解决了 Issue [#3044](https://github.com/sipeed/picoclaw/issues/3044) 和 [#3039](https://github.com/sipeed/picoclaw/issues/3039)。
-   **默认配置修正**: PR [#3036](https://github.com/sipeed/picoclaw/pull/3036) 修复了默认配置中 Anthropic 模型 ID 的格式问题（`claude-sonnet-4.6` -> `claude-sonnet-4-6`），解决了 Issue [#2941](https://github.com/sipeed/picoclaw/issues/2941)。
-   **代码质量提升**: 贡献者 `@chengzhichao-xydt` 提交了多个修复 PR，涵盖了未检查的类型断言、`strconv.Atoi` 和 `json.Unmarshal` 的错误处理、文件关闭（`Close()`）后未检查错误等，例如 PR [#3040](https://github.com/sipeed/picoclaw/pull/3040), [#3042](https://github.com/sipeed/picoclaw/pull/3042), [#3046](https://github.com/sipeed/picoclaw/pull/3046), [#3034](https://github.com/sipeed/picoclaw/pull/3034), [#3035](https://github.com/sipeed/picoclaw/pull/3035), [#3033](https://github.com/sipeed/picoclaw/pull/3033) 等。
-   **文档更新**: PR [#2902](https://github.com/sipeed/picoclaw/pull/2902) 合并，新增了关于如何在 Android Termux 上运行 PicoClaw 的指南。
-   **技能系统**: PR [#2936](https://github.com/sipeed/picoclaw/pull/2936) 合并，实现了技能的自适应加载：如果某个技能所需的二进制文件在 PATH 上找不到，则会自动跳过该技能，避免向 LLM 提供无法执行的指令。
-   **其他合并**: 关于 `EXM-00X`, `RG-001`, `EX-00X` 系列交易所连接器的功能性 Issue 已被关闭，这可能是内部开发任务已完成或标记为废弃。

## 社区热点

-   **Matrix 用户 ID 冒号问题 (Bug)**:
    -   **Issue**: [#3044](https://github.com/sipeed/picoclaw/issues/3044) - `allow_from` fails for Matrix user IDs containing colon
    -   **PR**: [#3045](https://github.com/sipeed/picoclaw/pull/3045)
    -   **分析**: 用户 `@weissfl` 报告了 Matrix 频道配置中 `allow_from` 功能的一个严重 bug，该 bug 导致所有含有冒号的标准 Matrix 用户 ID (`@localpart:domain`) 被静默拒绝。此问题由不正确的 ID 解析逻辑引起。该问题已由贡献者 `@chengzhichao-xydt` 快速修复，体现了项目组对核心功能的快速响应。

-   **Codex OAuth 空响应问题 (Bug)**:
    -   **Issue**: [#2674](https://github.com/sipeed/picoclaw/issues/2674) - Codex OAuth: empty assistant response when ChatGPT backend streams items via `response.output_item.done`
    -   **分析**: 此问题讨论活跃（8 条评论），用户 `@geekgonecrazy` 报告使用 Codex OAuth 提供程序连接 ChatGPT 后端时，助手响应为空。该问题近期被标记并可能在今日关闭。这反映出社区对 OpenAI/Codex 提供程序连接稳定性的持续关注。

-   **Telegram 位置消息无响应 (Bug)**:
    -   **Issue**: [#3049](https://github.com/sipeed/picoclaw/issues/3049) - [Bug] Telegram channel ignores location messages (message.location)
    -   **分析**: 用户 `@terurium` 报告了一个新的问题，即 PicoClaw 的 Telegram 渠道完全忽略用户发送的位置消息，无任何反应和日志。这指出了当前 Telegram 渠道对非文本消息（如位置、图片、文件等）处理能力的局限。

## Bug 与稳定性

| Bug 描述 | 严重程度 | 状态 | 对应 Fix PR | Issue 链接 |
| :--- | :--- | :--- | :--- | :--- |
| Telegram 渠道忽略位置消息 | 中 | 待确认 | 无 | [#3049](https://github.com/sipeed/picoclaw/issues/3049) |
| `allow_from` 解析标准 Matrix 用户 ID 失败 | 高 | 已修复 | [#3045](https://github.com/sipeed/picoclaw/pull/3045) | [#3044](https://github.com/sipeed/picoclaw/issues/3044) |
| `mcp add` 命令因全局标志解析错误导致添加失败 | 中 | 待修复 | [#3048](https://github.com/sipeed/picoclaw/pull/3048) (Open) | [#3041](https://github.com/sipeed/picoclaw/issues/3041) |
| 默认配置使用无效的 Anthropic 模型 ID | 中 | 已修复 | [#3036](https://github.com/sipeed/picoclaw/pull/3036) | [#2941](https://github.com/sipeed/picoclaw/issues/2941) |

## 功能请求归类

-   **新提供商支持**:
    -   用户 `@urtaevS` 提出希望添加 **OmniRoute** 作为新的 AI 提供商，这是个集成了多种 API 的服务，或用于增强提供商的灵活性和可用性。([#2978](https://github.com/sipeed/picoclaw/issues/2978))
-   **渠道功能增强**:
    -   PR [#2975](https://github.com/sipeed/picoclaw/pull/2975) (Open) 建议扩展 Telegram 渠道功能，使机器人能在群组中通过“回复”机器人的方式触发，与“@提及”效果等同。
-   **Web 界面**:
    -   PR [#3047](https://github.com/sipeed/picoclaw/pull/3047) (Open) 希望改进 Web 界面的会话详情查看功能，使其能展示完整的 JSONL 历史记录，包括已归档的消息。

## 用户反馈摘要

-   **问题与痛点**:
    -   **Codex 连接不稳定**：用户 `@geekgonecrazy` 反复遇到通过 Codex OAuth 连接 ChatGPT 后端时，AI 助手无响应的 bug，导致无法正常使用。([#2674](https://github.com/sipeed/picoclaw/issues/2674))
    -   **Telegram 功能受限**：用户 `@terurium` 发现 Telegram 渠道无法处理位置消息，这是一个明显缺失的功能。([#3049](https://github.com/sipeed/picoclaw/issues/3049))
    -   **配置和使用困惑**：用户 `@Jlan45` 对群聊中的机器人交互方式有更高的期待（回复触发）。用户 `@LegandAlessandro-Liguori` 发现默认配置的模型 ID 导致 Anthropic API 报错。用户 `@Damian-o2` 寻求清晰的新版本升级教程。([#2834](https://github.com/sipeed/picoclaw/issues/2834))
    -   **功能请求未得到明确回应**：关于新增提供商 (`#2978`)、修复长期问题 (`#2674`) 或添加新功能 (`#2834`, `#2952`) 的请求，部分处于开放状态，等待维护者的进一步回复或实现。

## 待处理积压

-   **`feat(telegram)`**: PR [#2975](https://github.com/sipeed/picoclaw/pull/2975) (`[stale]`，2026-05-30 创建) 提议在 Telegram 群组中和机器人关联回复等同于@提及。若合并，将改善群聊中的用户体验，但已开放一周多未合并。
-   **`Fix agent loop`**: PR [#2904](https://github.com/sipeed/picoclaw/pull/2904) (`[stale]`，2026-05-20 创建) 针对代理循环重载和恐慌清理稳定性进行的修复，已开放超过两周，影响核心稳定性，值得维护者关注。
-   **`Add omniroute`**: Issue [#2978](https://github.com/sipeed/picoclaw/issues/2978) (`[stale]`，2026-05-31 创建) 请求添加新提供商。用户有明确需求，但尚未有维护者回应或指派。

</details>