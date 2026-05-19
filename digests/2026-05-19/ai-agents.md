# OpenClaw 生态日报 2026-05-19

> Issues: 500 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-05-19 02:31 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目日报 — 2026-05-19

---

## 1. 今日活动概览

过去 24 小时内，OpenClaw 项目共计更新 500 条 Issue（新开/活跃 445 条，关闭 55 条）和 500 条 Pull Request（待合并 428 条，已合并/关闭 72 条）。发布了 4 个新版本，其中正式版 `v2026.5.18` 和对应 beta 版 `v2026.5.19-beta.1` 均包含 Agent 修复策略澄清、依赖更新（`@openclaw/proxyline` 0.3.3、Pi 包 0.75.1）以及 Node.js 22 最低版本提升。社区活跃集中在会话状态泄漏、消息丢失、安全回归和跨通道适配器问题上，多个 P1 级 Bug 和功能请求仍在等待维护者决策。

---

## 2. 版本发布

今日发布了 4 个版本，包含相同的依赖升级和 Agent 策略调整：

- **v2026.5.16-beta.7** — 更新依赖并提升最低 Node.js 版本至 22.19；Docker/Podman 新增 `OPENCLAW_IMAGE_APT_PACKAGES` 构建参数。
- **v2026.5.18-beta.1** — 与 v2026.5.18 内容相同，包含 Agent 修复默认策略（clean bounded refactors、lean internals、显式插件 SDK/API 弃用路径）、依赖升级。
- **v2026.5.18** — 正式版本（同上）。
- **v2026.5.19-beta.1** — 与 v2026.5.18 内容完全一致（可能为重新发布），更新日期为 2026-05-19。

**注意**：`v2026.5.18` 要求 Node.js ≥ 22.19，旧版本 Node 用户需升级。

---

## 3. 项目进展

今日合并/关闭的重要 PR：

- **#79083** [`fix(whatsapp): periodic delivery-queue drain`] — 为 WhatsApp 添加定期交付队列排空机制，避免消息等待下次重连才能发送。关闭状态。（[链接](https://github.com/openclaw/openclaw/pull/79083)）
- **#50777** [`fix(ui): prevent copy button showing CopyCopied!`] — 修复代码块复制按钮在 CSS 未加载时显示“CopyCopied!”的问题，改用隐藏属性控制。已合并。（[链接](https://github.com/openclaw/openclaw/pull/50777)）
- **#83850** [`docker: support optional pip packages in local builds`] — 通过 ClawSweeper 自动合并实现 Docker 本地构建可选 pip 包支持。（[链接](https://github.com/openclaw/openclaw/pull/83850)）
- 此外，多个 Issue 如 **#83752**（Telegram 内存增长）、**#52421**（tool_use_id 错误）、**#82858**（Discord 分片消息静默丢弃）、**#49692**（优雅关停消息重试）、**#51767**（子代理会话保留不生效）已被关闭，表明这些回归或功能问题已得到修复。

---

## 4. 社区热点

今日讨论最活跃的 Issue（评论数前十）均围绕会话状态和消息传递问题，反映出用户对 A2A 通信可靠性、会话管理正确性的高度关注：

- **#52875**（20 条评论）— **Regression**: `session_send` 在升级后返回“No session found”，导致主代理无法联系其他代理。用户强烈要求回退或修复。（[链接](https://github.com/openclaw/openclaw/issues/52875)）
- **#48788**（17 条评论）— **Feature**: 集中式文件名编码工具，用于多编码 `Content-Disposition` 处理。社区讨论了实现方案和边界情况。（[链接](https://github.com/openclaw/openclaw/issues/48788)）
- **#50090**（14 条评论）— **Feature/Drift**: 社区技能开发与 ClawHub 生态，用户反馈“承诺与现实差距很大”，期望更完善的发布和管理流程。（[链接](https://github.com/openclaw/openclaw/issues/50090)）
- **#53628**（12 条评论）— **Bug**: 安装技能时 `${XDG_CONFIG_HOME}` 未正确解析，影响 Docker 环境用户。（[链接](https://github.com/openclaw/openclaw/issues/53628)）
- **#51429**（11 条评论）— **Bug**: 工作路径被硬编码为 `/Users/wangtao` 并合入发布，用户表示“难以置信”，要求立即撤回。（[链接](https://github.com/openclaw/openclaw/issues/51429)）
- **#42475**（11 条评论）— **Feature**: 在网关层实现按代理成本预算（每日/月上限），控制器无需外部监控。（[链接](https://github.com/openclaw/openclaw/issues/42475)）
- **#54253**（10 条评论，3 👍）— **Bug**: OpenClaw 在 RISC-V64 系统上返回“LLM Request Failed”，用户期待架构支持。（[链接](https://github.com/openclaw/openclaw/issues/54253)）
- **#51871**（10 条评论，1 👍）— **Regression**: Control UI 中 Cron 作业不显示，影响 Raspberry Pi 用户。（[链接](https://github.com/openclaw/openclaw/issues/51871)）
- **#48573**（10 条评论）— **Bug**: 嵌入式运行子代理会话状态泄漏（zombie agents），父代理结束后残留上下文。（[链接](https://github.com/openclaw/openclaw/issues/48573)）
- **#39476**（10 条评论）— **P1 Bug**: A2A `sessions_send` 双向调用导致重复消息，属较老的会话状态问题。（[链接](https://github.com/openclaw/openclaw/issues/39476)）

---

## 5. Bug 与稳定性

以下为今日报告的或仍活跃的严重 Bug，按影响程度排列：

| 严重性 | Issue | 描述 | 是否有 Fix PR |
|-------|-------|------|--------------|
| P1 | #83018 | Codex 内部沙箱在外部 Docker 沙箱内强制启动，导致容器嵌套失败 | 无关联 PR |
| P1 | #39476 | A2A 双向 sessions_send 导致重复消息 | 有 PR #?（未在列表中找到直接修复） |
| P1 | #54531 | 基于通道（Telegram/Discord/WhatsApp）的强制回复失败，用户收不到回复 | 无 |
| P1 | #51396 | `clearUnboundScopes` 无条件清除操作者作用域，导致 `chat.send` 对后端客户端不可用（Regression） | 无 |
| P1 | #49876 | Cron 会话在工具失败时输出幻觉内容而非失败提示（安全/信任问题） | 无 |
| P1 | #43661 | 会话压缩超时导致静默重复发送消息（crash-loop） | 无 |
| P1 | #83744 | Discord 进度失败状态跨运行持久化，抑制最终回复 | 无 |
| P1 | #51593 | Moonshot/Kimi 模型在 WhatsApp 群聊中产生重复 tool call id 导致 400 错误 | 无 |
| P1 | #52130 | Telegram 重试 jitter 类型不匹配导致重启风暴 + SecretRef 误导诊断 | 无 |
| P1 | #53540 | 嵌入式运行器因大参数 tool call 生成超时误报“连接丢失” | 无 |
| P1 | #51363 | Docker 沙箱在同一宿主机多实例下容器名冲突 | 无 |
| P2 | #52875 | `session_send` 找不到会话（Regression） | 无 |
| P2 | #51429 | 工作路径硬编码（wangtao），立即修复需求高 | 无 |
| P2 | #51871 | Control UI 中 Cron 作业不显示（Regression） | 无 |
| P2 | #48573 | 子代理会话泄漏（zombie agents） | 无 |
| P2 | #43747 | 内存管理紊乱（不同实例行为不一致） | 无 |
| P2 | #50248 | sessions cleanup 误删新鲜 cron 会话 | 无 |
| P2 | #50165 | 子代理在底层任务完成前显示为已完成 | 无 |

其中 **#82858**（Discord 分片消息丢失）已于今日关闭，修复在 2026.5.12 后的版本中。**#83752**（Telegram 内存增长）也已关闭。

---

## 6. 功能请求归类

以下为今日收集的用户新功能需求及对应 PR（如已存在）：

| 需求 | Issue/PR | 简述 |
|------|----------|------|
| 集中式文件名编码工具 | #48788 | 为多编码（Shift-JIS, EUC-KR 等）创建统一工具，避免各适配器单独处理 |
| 社区技能开发与 ClawHub 生态 | #50090 | 完善 SKILL.md 发布到 ClawHub 的流程，缩小承诺与现状差距 |
| 按代理成本预算（网关级） | #42475 | 在网关层实施每日/月费用上限，阻止无监控下的费用失控 |
| 强制回复原始通道 | #54531 | 确保消息经过 Telegram/Discord/WhatsApp 等通道后成功返回用户 |
| ACP 会话跟踪与线程绑定 | #54342 | Webhook 触发的 ACP 会话缺少 session tracking 和 thread binding |
| SKILL.md 支持 `model` 字段 | #43260 | 允许技能级别指定模型路由，替代全局代理模型配置 |
| WhatsApp 断线后回填消息 | #50093 | 连接恢复后自动获取并投递掉线期间的消息 |
| 持久化任务状态面板 | #52640 | 针对长时间运行的通道消息增加一个可参考的进度状态界面 |
| 系统事件优先级/绕过队列 | #50739 | 在会话队列拥塞时允许系统事件直接注入，确保告警可靠性 |
| 多会话架构 RFC | #48874 | 共享 LLM + 隔离会话 + 公共知识库的三层架构提议 |
| 上下文来源元数据 | #54373 | 为注入的上下文段添加来源和变动性标记，帮助代理区分内容新旧 |
| 技能优先级配置 | #50199 | 允许设置技能优先级以解决多个技能可执行同一任务时的选择冲突 |
| 子代理完成回调 | #50165 | 确保子代理状态真实反映底层工作完成情况（可能通过 PR %#?） |
| 插件钩子追踪上下文 | #50291 | 为分布式追踪提供 messageId, runId, parentSpanId 等字段 |
| 网关优雅关停消息重试 | #49692 | 改进关停时的错误提示，自动重试未处理消息（已关闭，功能可能已实现） |
| Agent 身份名称注入运行时提示 | #81308 | 将 `agents.list[].identity.name` 传入运行时提示（有 PR） |
| 持续能力订阅 thinking 事件 | #54821 | 推送思考令牌给 WebSocket 客户端，提升实时交互体验（有 PR） |

---

## 7. 用户反馈摘要

从今日 Issue 评论中提炼的真实用户痛点：

- **升级恐惧**：多个用户反映升级到 2026.3.22 及以上版本后出现关键功能回归（#52875: session_send 故障；#51871: Cron 面板空白；#43747: 内存管理紊乱），部分用户选择回退。
- **硬编码路径事件**：Issue #51429 中用户发现 `/Users/wangtao` 被硬编码到工作路径，质疑代码审查流程，要求“立即回滚涉及 PR”。该问题引起社区广泛共鸣（11 条评论）。
- **RISC-V 架构受阻**：用户 #iravikiran 尝试在 RISC-V64 系统上运行 OpenClaw，通过 Docker 和直接安装均遭遇“LLM Request Failed”，初步判断与 `node-llama-cpp` 的 ARM 适配有关，期待官方支持（3 👍）。
- **Docker 环境变量不生效**：用户 #Devattom 报告 `$XDG_CONFIG_HOME` 在安装技能时未被展开，导致技能安装到错误位置，影响 Docker 部署用户（#53628）。
- **Telegram 用户收不到回复**：用户 #downwind7clawd-ctrl 提出“强制回复原始通道”的需求，指出有时回复仅在控制 UI 可见，而用户设备上无响应（#54531，1 👍）。
- **Cron 会话输出幻觉内容**

---

## 横向生态对比

好的，作为专注AI智能体与个人AI助手开源生态的资深技术分析师，现根据您提供的2026-05-19各项目动态摘要，生成以下横向对比分析报告。

---

### **AI智能体与个人AI助手开源项目横向对比日报 (2026-05-19)**

#### 1. 今日横向概览

今日，四个核心项目均保持高强度的社区活动，但焦点各有侧重。**OpenClaw** 作为体量最大的参照项目，社区活跃度极高，发布了4个版本，但围绕会话状态泄漏、消息丢失和硬编码路径等严重Bug的讨论空前激烈。**NanoBot** 和 **Zeroclaw** 则在核心架构重构上取得显著进展，前者专注于图片生成基础设施和代理核心代码拆分，后者全力推进v0.8.0多智能体运行时大合并。**PicoClaw** 活动相对温和，主要聚焦于Seahorse记忆系统Bug的快速修复和Web UI体验的增强。整体来看，项目均处于主动演进与应对社区反馈的高频互动周期。

#### 2. 各项目活跃度对比

| 项目 | Issues (新开/活跃) | PRs (待/合并/关闭) | Releases | 事实性备注 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 445 新开/活跃，55 关闭 | 428 待，72 合并/关闭 | **4 个** (b3, b1, r1) | 核心参照项目；发布4个版本，要求 `Node.js >=22.19`；社区反馈激烈，存在20+条评论的热点Issue |
| **NanoBot** | 5 新开/活跃，2 关闭 | 12 待，10 合并/关闭 | **无** | 社区讨论集中于Docker部署兼容性和持久化记忆；有3个与图片生成相关的PR被合并 |
| **Zeroclaw** | 15 新开/活跃，11 关闭 | 42 待，8 合并/关闭 | **无** | 大型PR (v0.8.0) 正在寻求社区审批；修复了优先级S1的技能安装崩溃Bug；CI/CD流程持续改进 |
| **PicoClaw** | 5 新开/活跃，1 关闭 | 17 待，1 合并/关闭 | **1 个** (Nightly) | 聚焦于Seahorse内存系统Bug的快速响应与修复；社区探讨了“海马体”记忆系统的功能提议并关闭；发布一个日常nightly版本 |

#### 3. OpenClaw 与同类对照

基于今日数据，各项目与参照项目 **OpenClaw** 的差异体现在：

- **活动量级**：**OpenClaw** 的Issues和PRs规模远超其他项目（超500条），反映出其作为生态核心的巨大用户基础和问题挑战。**Zeroclaw** 和 **NanoBot** 的活动量相当（数十条），而 **PicoClaw** 最为精简（个位数）。
- **技术重点**：**OpenClaw** 当前重心是 **会话管理、A2A通信可靠性与通道适配器** 的稳定性和回归修复，相关问题占据了今日热点Issue的前列。**NanoBot** 则处于 **功能扩展期**（图片生成、新提供商支持）和 **核心重构期**（代理代码拆分）的双线推进。**Zeroclaw** 正经历 **架构大版本演进**（v0.8.0多智能体运行时）。**PicoClaw** 则在 **修复特定子系统Bug**（Seahorse记忆预算）与 **增强边缘渠道能力**（飞书、Telegram）上并行。
- **社区讨论面**：**OpenClaw** 社区表现出强烈的 **“升级恐惧”和“回归焦虑”**，多个用户要求回退或紧急修复。**NanoBot** 和 **Zeroclaw** 社区聚焦于 **具体功能的可用性与体验**（如Docker部署、技能安装、任务规划循环）。**PicoClaw** 社区则体现出 **对特定技术特性（如类海马体记忆）的前瞻性探讨**。

#### 4. 共同出现的技术方向

以下技术方向在今日的多个项目动态中均有体现：

- **会话状态与内存管理**：**OpenClaw** (#48573 子代理会话泄漏, #39476 重复消息), **Zeroclaw** (#6747 预算溢出修复), **PicoClaw** (#2894 Seahorse预算Bug) 均涉及会话或内存状态管理问题，此亦为当前Agent系统稳定性的核心挑战。
- **跨平台与架构兼容性**：**OpenClaw** (#54253 RISC-V支持请求), **PicoClaw** (#2887 RISC-V不工作), **Zeroclaw** (#1924 FreeBSD支持) 今日均有用户明确提出对特定架构或平台（RISC-V, FreeBSD）的支持需求，反映了社区对更开放硬件生态的期望。
- **Docker/环境部署体验**：**OpenClaw** (#53628 XDG_CONFIG_HOME解析失败), **NanoBot** (#3873 Docker部署文档不一致), **PicoClaw** (#2239 Docker特权模式) 均反映出Docker部署场景中存在的配置、文档或兼容性问题，是用户入门的主要障碍之一。
- **技能/插件生态**：**OpenClaw** (#50090 ClawHub生态反馈), **NanoBot** (#3846 技能上下文丢失), **Zeroclaw** (#6681 技能安装崩溃, #6253 技能UX跟踪), **PicoClaw** (新增Server酱³ Bot插件) 各社区均涉及对技能或插件功能的讨论、修复或新增，说明围绕Agent构建可扩展生态是各项目的共同目标。

#### 5. 差异化定位分析

基于今日数据，各项目的差异化定位如下：

| 维度 | OpenClaw (生态旗舰) | NanoBot (应用型轻量) | Zeroclaw (架构型专业) | PicoClaw (嵌入式边缘) |
| :--- | :--- | :--- | :--- | :--- |
| **功能侧重** | 全面的Agent平台：会话管理、多通道、网关队列、A2A通信 | 高效的助手交互：图片生成、WebUI增强、任务执行与计划 | 多智能体运行时：v0.8.0架构演进、跨平台构建矩阵 | 轻量级边缘AI：嵌入式Linux (Yocto)、RISC-V兼容、特定体积优化 |
| **目标用户** | 高级开发者、系统集成商、追求全面可控的团队 | 个人开发者、快速构建AI助手应用的用户 | 面向复杂多代理协同场景的开发者、运维工程师 | 嵌入式系统开发者、边缘AI硬件爱好者 |
| **技术架构** | 成熟的模块化架构，关注点在于通道适配、状态同步、安全与稳定性 | 相对轻量，快速迭代，注重用户交互体验（WebUI）和提供商接入的便利性 | 架构正经历重大演进（V3），强调多运行时、编排能力 | 专注于最小化依赖和资源占用，提供对特定硬件（如RISC-V）和构建系统（如Yocto）的支持 |

#### 6. 社区活跃度记录

基于今日的Issue/PR数量和版本发布记录，将各项目社区活跃度分为以下层级：

- **极其活跃 (Active+)**: **OpenClaw**
    - 佐证：Issues和PRs数量规模最大（均超500），发布4个版本，社区出现大量高评论数（10-20条）的热点讨论，且覆盖Bug、Feature等多个类别。
- **高度活跃 (Active)**: **NanoBot**, **Zeroclaw**
    - 佐证：Issues和PRs更新数量均在数十条级别，有明确的核心功能推进（NanoBot的图片生成重构，Zeroclaw的v0.8.0合并），且社区反馈（Docker、技能）具有集中性和实效性。
- **中等活跃 (Moderate)**: **PicoClaw**
    - 佐证：Issues和PRs数量在个位数至十位数级别，有明确的Bug修复和功能增强（Seahorse, Web UI），但整体社区讨论的广度和深度相对较小。

#### 7. 有证据支撑的观察

1. **会话状态管理是当前AI Agent系统的核心稳定性痛点**：**OpenClaw** 今日有多个高热度Issue（#52875, #48573, #39476）及上述多个项目相关Bug均指向此方向。这不仅仅是一个项目的问题，而是整个领域在Agent协作、长对话和状态持久化方面面临的结构性挑战。

2. **社区对“软错误”（如幻觉输出、静默丢弃）的容忍度正在降低**：**OpenClaw** 中用户报告Cron会话输出幻觉内容（#49876），**Zeroclaw** 中思想内容混入回答（#6643），**PicoClaw** 中消息显示不完整（#2796），**NanoBot** 中WebUI图片被静默丢弃（#3893）。这些“难以复现但破坏体验”的问题，成为新的社区关注焦点。

3. **底层跨平台支持与Docker部署体验已成为阻碍新用户采纳的关键因素**：**OpenClaw** 用户要求在RISC-V上运行，**PicoClaw** 用户报告RISC-V不工作，**Zeroclaw** 用户诉求FreeBSD预编译二进制，以及**NanoBot**和**OpenClaw**均遇到Docker环境变量或文档失效问题。这表明，不局限于主流平台和简化容器部署流程的项目，在吸引更广泛用户群方面将面临瓶颈。

4. **核心系统重构（如Zeroclaw的v0.8.0）前，解决积累的高频回归问题（如OpenClaw的session_send）是维持社区信心的关键**。**OpenClaw** 社区中明显的“升级恐惧”情绪与 **Zeroclaw** 推进大型版本迭代形成对比。数据表明，即使项目在积极演进，若同时存在严重且未被修复的回归Bug，社区反馈将转向负面和保守。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，现根据您提供的 NanoBot (github.com/HKUDS/nanobot) GitHub 数据，生成 2026-05-19 的项目动态日报。

---

### NanoBot 项目动态日报 (2026-05-19)

**数据日期：** 2026-05-18 至 2026-05-19 (部分数据延至 05-16)

---

#### 1. 今日活动概览

过去 24 小时内，NanoBot 项目社区活动高度活跃。项目共收到 **7 条** Issue 更新（其中 5 条仍为开启状态，2 条已关闭），以及 **22 条** Pull Request 更新（其中 12 条待合并，10 条已合并或关闭）。值得注意的是，虽然无新版本发布，但项目在 **图片生成功能的基础设施重构** 和 **代理核心逻辑优化** 上取得了显著进展。社区讨论焦点集中在 **Docker 部署兼容性** 和 **持久化记忆功能** 等方面。

#### 2. 版本发布 (今日无)

新版本：无

---

#### 3. 项目进展 (已合并/关闭 PR)

今天合并、关闭了多个重要 Pull Request，主要集中在问题修复和新特性推进：

- **图片生成功能重构**：PR [#3893](https://github.com/HKUDS/nanobot/pull/3893) 引入 `ImageGenerationProvider` 基类和模块级注册表，大幅简化了新增图片生成提供商的工作量，并修复了 WebSocket/WebUI 下图片被静默丢弃的 Bug。此 PR 目前仍为开启状态，但进展显著。
- **代理核心代码重构**：PR [#3892](https://github.com/HKUDS/nanobot/pull/3892) 已合并，将原先 330 行的 `AgentRunner.run()` 方法拆分为 9 个更专注的函数，并引入 `RunContext` 数据类管理状态，提升了代码可读性和可维护性。
- **新提供商支持**：PR [#3900](https://github.com/HKUDS/nanobot/pull/3900) 已合并，新增了对 **Ant Ling** 作为一等 OpenAI 兼容 LLM 提供商的支持。PR [#3886](https://github.com/HKUDS/nanobot/pull/3886) 为图片生成功能新增了 **Gemini (Imagen 4 / Gemini Flash)** 提供商支持。PR [#3879](https://github.com/HKUDS/nanobot/pull/3879) 则为图片生成功能新增了 **MiniMax** 提供商支持。
- **WebUI 体验优化**：PR [#3889](https://github.com/HKUDS/nanobot/pull/3889) 修复了 WebUI 中 Markdown 渲染单换行符的问题，使 `/help` 等命令的输出格式更符合预期。PR [#3899](https://github.com/HKUDS/nanobot/pull/3899) 为 WebUI 文件编辑活动（`write_file`, `edit_file` 等）添加了实时的活动事件，提升用户交互体验。
- **Docker 部署文档修正**：PR [#3875](https://github.com/HKUDS/nanobot/pull/3875) 已合并，修复了 Issue [#3873](https://github.com/HKUDS/nanobot/pull/3873) 中指出的 Docker 部署文档与配置的多项不一致问题，特别是关于 WebUI 访问和 `bwrap` 沙箱的配置要求。

---

#### 4. 社区热点

- **Docker 部署兼容性问题**：Issue [#3873](https://github.com/HKUDS/nanobot/issues/3873) 在昨天引发了广泛讨论。报告者详细列举了 Docker 部署文档、`docker-compose.yml`、`Dockerfile` 和 `README.md` 中存在的 5 处严重不一致，导致无法正确部署 v0.2.0。这反映了社区对于稳定、易用的 Docker 部署流程有迫切需求。该问题已被修复并关闭，今天还出现了两个相关的 PR ([#3904](https://github.com/HKUDS/nanobot/pull/3904), [#3891](https://github.com/HKUDS/nanobot/pull/3891)) 进一步优化 WebUI 在远程/Docker 部署下的访问配置。

- **持久化记忆功能需求**：Issue [#3888](https://github.com/HKUDS/nanobot/issues/3888) 提出了一个 **增强请求**，并已由提出者自荐其项目 **Mnemon** 作为解决方案。该 Issue 提出了智能体在跨会话中缺乏持久化记忆的问题，并展示了相应集成方案。虽然 Issue 已关闭，但其背后“为代理提供长期记忆”的社区诉求值得关注，也暗示了社区在该方向上存在探索和自建生态的意愿。

---

#### 5. Bug 与稳定性

- **登录问题：微信登录失败 (严重)**：Issue [#3863](https://github.com/HKUDS/nanobot/issues/3863) 报告了微信登录功能完全失效的问题。用户扫描二维码后，微信客户端提示“目前微信版本较低”，即使客户端已是最新版。此问题涉及核心通信渠道，属于高优先级 Bug。目前暂时没有关联的修复 PR。

- **功能循环：X 平台监控任务设置 (严重)**：Issue [#3901](https://github.com/HKUDS/nanobot/issues/3901) 报告了试图让 NanoBot 设置一个简单的 X 平台定时检查任务时，代理陷入了工具调用的死循环，达到最大迭代次数后失败。这表明代理在执行复杂任务规划时可能存在问题。目前暂无关联的修复 PR。

- **代码质量问题：图片生成 MIME 类型硬编码 (中等)**：Issue [#3903](https://github.com/HKUDS/nanobot/issues/3903) 指出了图片生成功能中存在代码硬编码问题：MiniMax 和 AIHubMix 提供商硬编码了图片的 MIME 类型为 `image/png`，并绕过统一的 `_http_post()` 方法。这可能引发与其他模型兼容性问题或维护困难。该问题关联 PR [#3893](https://github.com/HKUDS/nanobot/pull/3893)（仍处于开放状态）。

- **文档错误：Docker 部署文档 (已修复)**：Issue [#3873](https://github.com/HKUDS/nanobot/issues/3873) 描述的部署文档不一致问题，已通过 PR [#3875](https://github.com/HKUDS/nanobot/pull/3875) 和 [#3891](https://github.com/HKUDS/nanobot/pull/3891) 得到修复。

---

#### 6. 功能请求归类

- **增强请求-技能持久化**：
    - Issue [#3846](https://github.com/HKUDS/nanobot/issues/3846) (功能增强) 与 PR [#3847](https://github.com/HKUDS/nanobot/pull/3847) (功能、待合并) 相关联，旨在解决多轮对话中 `skill.md` 定义内容丢失的问题。提议引入 `skill_load` 工具来防止上下文丢失。

- **安全与授权**：
    - Issue [#3887](https://github.com/HKUDS/nanobot/issues/3887) (功能请求) 提出，用户希望为 `exec` 工具的危险命令检测机制增加**用户授权**功能。当前硬编码的 `deny_patterns` 机制不够灵活，用户无法在特定场景下授权执行相关命令。
    - PR [#3898](https://github.com/HKUDS/nanobot/pull/3898) (功能、待合并) 提出了 `Restricted Mode`（受限模式），通过引入 `sender_id` 和 `is_privileged` 上下文，实现对管理员工具和 MCP 工具的隔离过滤，以支持更严格的频道策略。

- **WebUI/Docker 部署优化**：
    - PR [#3904](https://github.com/HKUDS/nanobot/pull/3904) (待合并) 和 [#3891](https://github.com/HKUDS/nanobot/pull/3891) (待合并) 都旨在让 WebUI 的 `bootstrap` 端点（尤其在 Docker 部署下）的 localhost 限制变为可配置，提升远程部署的灵活性。
    - Issue [#3873](https://github.com/HKUDS/nanobot/issues/3873) 与上述 PR 有直接关联。

---

#### 7. 用户反馈摘要

- **满意/正面反馈**：暂无直接的正面评论，但来自 PR [#3888](https://github.com/HKUDS/nanobot/issues/3888) 的第三方项目集成提议，表明社区正在为 NanoBot 主动构建外围生态。
- **不满/痛点**：
    - **微信登录失败** ([#3863](https://github.com/HKUDS/nanobot/issues/3863))：用户 “@KennethYCK” 明确反馈微信扫码登录功能完全不可用，体验中断。
    - **任务执行陷入循环** ([#3901](https://github.com/HKUDS/nanobot/issues/3901))：用户 “@fablau” 尝试使用自然语言让代理设置 X 平台监控任务，但遭遇无限循环，工具调用机制存在缺陷。
    - **Docker 部署学习成本高** ([#3873](https://github.com/HKUDS/nanobot/issues/3873))：用户 “@URD0TH” 指出了官方文档存在的多个不一致和错误，导致首次 Docker 部署的用户遇到极大困难（如 403 错误、健康检查无法访问、沙箱执行失败等）。

---

#### 8. 待处理积压

- **高优先级**：
    - **微信登录问题 (Issue [#3863](https://github.com/HKUDS/nanobot/issues/3863))**：开放 3 天，已影响核心功能，但尚未有维护者回应或关联修复 PR。必须重点关注。
    - **任务规划循环问题 (Issue [#3901](https://github.com/HKUDS/nanobot/issues/3901))**：新提交的严重 Bug，直接影响用户使用核心功能（定时任务），应尽快由维护者进行复现和分析。

- **待推进特性**：
    - **计划任务分解工具 (PR [#3791](https://github.com/HKUDS/nanobot/pull/3791))**：提出于 5 天前，旨在增强代理的任务分解能力。此 PR 的推进可能有助于解决类似 [#3901](https://github.com/HKUDS/nanobot/issues/3901) 的循环问题。目前仍为开放状态。
    - **Manifest LLM 路由器支持 (PR [#3568](https://github.com/HKUDS/nanobot/pull/3568))**：这是一个较大的新提供商集成 PR，提出已有近 20 天，可能因改动范围大或需要维护者深入评审而积压。建议回复进展或给出下一步计划。
    - **多角色代理部署方案 (PR [#3621](https://github.com/HKUDS/nanobot/pull/3621))**：同样是一个提出时间较长（15天）的 PR，会为项目带来重要的多代理编排能力。建议进行评审。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我将根据您提供的 Zeroclaw 项目 GitHub 数据，为您生成 2026 年 5 月 19 日的项目动态日报。

---

### **Zeroclaw 项目动态日报 | 2026-05-19**

#### **1. 今日活动概览**

过去24小时内，Zeroclaw 项目社区活动高度活跃，主要集中在大型版本迭代的推进和持续性Bug修复上。共有 **26 条 Issues** 更新，其中新开和活跃的有 15 条，关闭 11 条；**50 条 PRs** 更新，其中待合并的有 42 条，已合并或关闭 8 条。虽然今日无新版本发布，但核心开发者在大型合并请求 **PR #6398（v0.8.0 多智能体运行时）** 上持续进行集成工作，同时社区对 `skills` 安装崩溃 (Issue #6681) 等严重 Bug 进行了修复并关闭，项目整体在向新里程碑推进的同时，维护了日常的稳定性和兼容性。

#### **2. 版本发布**

今日无新版本发布。

#### **3. 项目进展**

今日项目的主要进展体现在对历史问题的修复和 CI/CD 流程的改进上。

- **CI/CD 改进**: **PR #6749** `ci: expand manual cross-platform build matrix coverage` 已被合并。该 PR 更新了手动交叉平台构建的工作流，补全了 `x86_64-unknown-freebsd` 等目标平台，缩小了手动构建与自动发布的覆盖范围差距，为未来支持 FreeBSD 等平台（见 Issue #1924）提供了基础设施。
- **Bug 修复**: 严重程度为 **S1（工作流阻塞）** 的 **Issue #6681**（`zeroclaw skills install clawhub:*` 因 Tokio 运行时冲突而崩溃）已被关闭。修复方案已在关联 PR 中实现并合入，解决了用户安装技能时立即崩溃的关键问题。
- **功能合并**: 社区贡献的 **Issue #6769** `fix: fix link rendering in philosophy.md` 已被合并，这是一个纯粹的文档修复，改善了文档的体验。

#### **4. 社区热点**

- **最受关注：v0.8.0 多智能体运行时大合并**
    - **PR**: [#6398 v0.8.0: Multi-Agent Runtime and Schema V3](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) (作者: @singlerider)
    - **动态**: 这是项目当前最核心的事件。此PR关联了大量标签，涉及几乎所有模块，并且维护者正在寻求社区审批。它将在合并后作为 **Beta 版本** 的基础，这标志着 Zeroclaw 架构的重大演进。社区对此给予了高度关注。

- **活跃讨论：AGPL 许可证与 FreeBSD 支持**
    - **Issue**: [#1924 [CLOSED] [Feature]: Freebsd platform support](https://github.com/zeroclaw-labs/zeroclaw/issues/1924) (评论: 7, 👍: 1)
    - **动态**: 虽然该 Issue 已于今日关闭，但在关闭前获得了 7 条评论，是过去 24 小时内评论数最多的 Issue 之一。用户 @suselee 提出了在 FreeBSD 上使用需要每次从源码编译的痛点，并希望获得预编译二进制支持。这反映了开源社区对跨平台原生支持的强烈需求。

- **反馈热烈：技能相关功能请求**
    - **Issue**: [#6253 [Feature]: Track: zeroclaw skills support and UX (v0.7.6)](https://github.com/zeroclaw-labs/zeroclaw/issues/6253)
    - **动态**: 作为 v0.7.6 版本的主题跟踪器，该 Issue 虽然今日只有 1 条新评论，但社区被明确邀请参与其中，以改善 `zeroclaw skills` 子命令的用户体验。结合已关闭的 `skills` 安装崩溃 Bug（#6681），显示了社区对于核心技能生态的重视和反馈。

#### **5. Bug 与稳定性**

今日报告的 Bug 较多，但部分严重问题已得到快速响应。以下按严重程度排列：

- **S1 - 工作流阻塞**:
    - **Issue #6681**: `zeroclaw skills install clawhub:* panics`。**已关闭**。关键修复已合并。
    - **Issue #6558**: `providers erro`。用户报告使用自定义 Qwen 提供程序时出现 405 错误，导致所有提供程序失败，可能由 URL 或端点配置问题引起。

- **S2 - 降级行为**:
    - **Issue #6739**: `Cron timezone contract is inconsistent`。**已关闭**。Cron 的时间区处理在工具、CLI 和 API 间不一致，存在混淆。PR #6744 对此进行了修复。
    - **Issue #6643**: `Thoughts merge into final message using GLM-5.1`。使用特定模型时，模型的思考过程会错误地混入最终的回答中，用户要求重新开启此前已关闭的 Issue #5285。
    - **Issue #6632**: `manual cron_run still persists best-effort delivery failures as ok`。手动触发的 cron 任务在投递失败时，仍将状态记录为“ok”，与自动调度路径的行为不一致。

- **S0 - 数据丢失/安全风险**:
    - **Issue #6558** (如上所述) 也被标记为 S0，因为所有提供程序失败可能导致服务完全不可用。
    - **Issue #6747**: `amannn/action-semantic-pull-request fails to run`。**已关闭**（标记为重复），CI 中的一个 GitHub Action 因未在白名单中而无法运行，影响 PR 标题格式检查。

- **其他重要 Bug**:
    - **Issue #6751**: `fix(ci): pr-title workflow has never run`。一个新开的 CI Bug，指出前段时间合并的 PR 标题检查工作流实际上从未成功运行过。
    - **Issue #6724**: `Channels supervisor crashloops`。当所有配置的 channel 都设置为 `enabled = false` 时，channel 管理器会陷入崩溃重启的死循环。

#### **6. 功能请求归类**

- **技能与代理能力**:
    - **Issue #6253**: `Track: zeroclaw skills support and UX (v0.7.6)`，社区驱动的技能系统体验改进跟踪。
    - **Issue #6729**: `Agent capability flags`，为代理添加“逃逸工作区”等行为的权限控制。

- **配置与安全**:
    - **Issue #6760**: `Update Documentation for Docker`，社区用户提供了已在 Docker 上测试可用的 YAML 配置。
    - **Issue #6715**: `Delete unneeded branches`，来自社区的项目维护建议，旨在清理仓库中超过 200 个无用分支。

- **提供程序与集成**:
    - **多个已关闭的功能请求**：包括 `FreeBSD platform support` (#1924), `Add Morph as a model provider` (#6439), `Add GitHub Models as a model provider` (#6444)，这些请求在社区反馈后被接受或考虑。

- **核心功能**:
    - **Issue #6661**: `preserve committed streamed output`，确保在 WebSocket 转向（steering）时，已经推送给客户端的流式输出不被丢弃。

#### **7. 用户反馈摘要**

从今日的 Issue 和评论中，可以提炼出以下用户痛点和使用场景：

- **“原生安装，或至少是预编译二进制”**：@suselee 在 FreeBSD 支持请求中明确表示，希望有 Linux、macOS 和 Windows 级别的二进制发布支持，而不是每次从源码编译。
- **“配置失败，无法启动”**：@jonhoosh 报告提供程序完全失败，而 @nick-pape 报告 Channel 配置错误导致崩溃循环。这反映出用户在初次配置和调试阶段容易遇到严重问题。
- **“模型行为不符合预期”**：@lynnkeele 再次提出了 GLM 模型的“思考”内容泄露到对话中的问题，表明即使作为前沿模型，其输出格式的兼容性仍然是一个挑战。
- **“核心功能崩溃”**：@NiuBlibing 报告了 `skills install` 命令立即崩溃（#6681），用户尝试使用核心功能时被直接阻塞，极大地影响了信心。
- **“新工作流缺乏验证”**：@JordanTheJet 指出，虽然社区贡献了一个很好的 CI 检查工作流，但因为它从未成功运行过，实际上是个无效的防护。这说明了 CI 流程本身也需要严格的审查。

#### **8. 待处理积压**

- **长期未关闭的核心 Bug**:
    - **Issue #6074**: `audit: track 153 commits lost in bulk revert`。自 4 月 24 日提出至今近一个月，追踪大规模回滚中丢失的 153 个提交。这是一个高风险项目，可能影响代码库完整性，需维护者投入精力审查。

- **等待作者更新的 PR**:
    - **PR #6009**: `feat(obs): enrich OTel tool spans`，创建于 4 月 22 日，至今近一个月。
    - **PR #6481**: `feat(jira): add list_transitions`，创建于 5 月 6 日。
    - 在 50 个待合并 PR 中有很多 PR（如 #6471, #6521, #6578 等）都标记为 `needs-author-action`，作者未响应维护者的评论，导致这些有价值的功能增强和修复被卡住。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，这是根据您提供的 GitHub 数据生成的 PicoClaw 项目动态日报。

***

### PicoClaw 项目动态日报 | 2026-05-19

---

#### 1. 今日活动概览

过去24小时内，项目社区活跃度较高，共更新6个Issues（新开5个，关闭1个），提交18个Pull Requests（待合并17个，合并关闭1个），并发布1个新的nightly版本。社区讨论焦点集中在Seahorse记忆系统的预算溢出Bug、新版运行时环境的流式支持以及多项渠道功能增强上。其中，关于聊天记录显示不完整的Bug和RISC-V版本的兼容性问题也得到了社区的持续关注。

#### 2. 版本发布

- **Nightly Build (v0.2.8-nightly.20260519.941bac23)**
    - 这是一个自动构建的每日最新版，可能包含未稳定的特性。建议谨慎使用。
    - **Changelog**: https://github.com/sipeed/picoclaw/compare/v0.2.8...main

#### 3. 项目进展

今日有1个PR被成功合并，标志着Web UI体验的改进。

- **Web聊天详情可见性选择器 (PR #2886)**
    - **作者**: [@lc6464](https://github.com/lc6464)
    - **摘要**: 将Web聊天助手的详情切换按钮，升级为一个四状态选择器，允许用户独立控制“推理过程”、“工具调用”或两者的可见性。该PR已关闭，表示已合并至主分支。
    - **链接**: https://github.com/sipeed/picoclaw/pull/2886

#### 4. 社区热点

- **Seahorse内存系统预算Bug (Issue #2894)**
    - **作者**: [@dtapps](https://github.com/dtapps)
    - **摘要**: 报告了Seahorse内存系统中的`FreshTailCount`参数（保留最后32条消息）完全不受预算限制，导致上下文窗口溢出（`400 BadRequestError`）。此问题在提出后立刻引发了修复PR（#2895），显示出社区对Seahorse系统功能高度关注。
    - **链接**: https://github.com/sipeed/picoclaw/issues/2894

- **Seahorse记忆系统功能讨论 (Issue #1919)**
    - **作者**: [@liuy](https://github.com/liuy)
    - **摘要**: 尽管该Issue已于今日关闭，但其作为一项关于“类海马体”生物启发式记忆系统的功能提议，获得了11条评论的高讨论度。其“短期上下文压缩”与“长期记忆巩固”的目标是当前AI Agent领域的热点，关闭可能意味着项目已接纳该提议并进入开发阶段，或表明方向已明确。
    - **链接**: https://github.com/sipeed/picoclaw/issues/1919

#### 5. Bug 与稳定性

- **[严重] Seahorse内存系统预算溢出 (Issue #2894)**
    - **严重程度**: 高。直接导致请求失败，影响Agent对话流畅性。
    - **状态**: 已有 **修复 PR (#2895)**。
    - **链接**: https://github.com/sipeed/picoclaw/issues/2894

- **[中等] Codex OAuth 响应为空 (Issue #2674)**
    - **严重程度**: 中。影响通过特定OAuth方式使用ChatGPT后端的用户。
    - **状态**: 开放中，社区有4个👍，表明这是一个普遍痛点。
    - **链接**: https://github.com/sipeed/picoclaw/issues/2674

- **[中等] 历史记录中用户消息显示不全 (Issue #2796)**
    - **严重程度**: 中。严重影响用户体验，用户无法回顾完整对话历史。
    - **状态**: 开放中，标记为“stale”，暂无修复进展。
    - **链接**: https://github.com/sipeed/picoclaw/issues/2796

- **[中等] RISC-V平台OpenAI模型不工作 (Issue #2887)**
    - **严重程度**: 中。影响特定硬件平台的用户使用。
    - **状态**: 开放中，报告于昨日，社区正在分析。
    - **链接**: https://github.com/sipeed/picoclaw/issues/2887

#### 6. 功能请求归类

- **渠道/集成**:
    - **Telegram频道增强**：两个PR分别请求添加来宾模式 (`guest_mode`, PR #2849) 和商业模式支持 (`business_mode`, PR #2845)。
    - **Server酱³ Bot插件**：社区贡献者提交了增加SC3 Bot渠道支持的PR (#2893)。
    - **飞书多实例**：修复飞书频道初始化时硬编码名称，以支持多实例部署 (PR #2846)。
    - **MCP动态请求头**：增强MCP (Model Context Protocol) 功能，允许渠道在请求中传递动态HTTP头部 (PR #2696)。
- **性能/上下文**:
    - **流式传输支持**：新的PR (#2892) 为运行时环境增加了配置驱动的流式支持，提升响应体验。
    - **同Agent最终轮次渲染**：针对“转向密集型”对话，增加一个实验性的LLM最终渲染模式 (PR #2844)。
    - **聊天详情可见性选择器**：如上所述，已合并的UI功能 (PR #2886)。
- **系统/恢复**:
    - **恢复出厂设置**：增加“恢复出厂设置”功能，用于处理配置文件兼容性问题 (PR #2891)。
- **文档**:
    - **Yocto/OpenEmbedded集成**：社区贡献了用于嵌入式Linux构建的Yocto层文档链接 (PR #2851)。

#### 7. 用户反馈摘要

- **对话历史显示问题 (Issue #2796)**: 用户明确反馈，对话历史中多次发送用户消息后，只能查看到最后一条，之前的消息被“压缩”丢失。用户强烈期望“对用户显示的历史消息应该完整”，指出当前压缩逻辑不应影响用户侧的历史展示。
- **RISC-V兼容性 (Issue #2887)**: 用户报告在RISC-V架构的Device上使用`.deb`包安装的PicoClaw，无法与OpenAI模型正常交互，影响使用体验。
- **执行工具路径问题 (PR #2826, PR #2750)**: 多个PR针对`exec`工具的安全性守卫（Safety Guard）进行修复，表明社区非常关注工具执行的路径解析正确性，特别是相对路径与绝对路径的混淆易导致安全问题。

#### 8. 待处理积压

- **渠道识别标准化 (PR #2551)**: 该PR耗时已久（创建于2026-04-16），旨在重构渠道识别机制，允许多实例部署。目前仍处于开放状态，可能影响其他依赖于渠道识别的功能开发。建议维护者关注。
- **Docker Compose特权模式 (PR #2239)**: 该PR创建于2026-04-01，旨在修改Docker Compose文件以支持特权模式。状态为“stale”，需要维护者评估是否需要合并或关闭。
- **多个遗留Bug**: Issue #2674 (Codex OAuth问题)、#2796 (历史记录问题)、#2843 (转向渲染问题) 均已被标记为“stale”，表明长时间未有实质性进展，可能被社区或开发者遗忘，建议维护者评估优先级并给出进展回复。

</details>