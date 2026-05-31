# OpenClaw 生态日报 2026-05-31

> Issues: 500 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-05-31 02:38 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

好的，以下是基于您提供的 GitHub 数据生成的 OpenClaw 项目日报。

---

# OpenClaw 项目日报 — 2026-05-31

## 1. 今日活动概览

过去24小时内，OpenClaw 项目非常活跃，共更新了500个 Issues 和500个 PR。其中，新开了428个活跃 Issues，关闭了72个；待合并的 PR 有317个，已合并或关闭了183个。项目发布了 v2026.5.28 版本，重点修复了 Codex 运行时和子代理工作区隔离的稳定性问题。社区讨论的热点集中在飞书（Feishu）频道在升级后无法投递消息的严重Bug，以及 Codex 相关的一系列运行时和状态恢复问题。

## 2. 版本发布

- **新版本**: [v2026.5.28](https://github.com/openclaw/openclaw/releases/tag/v2026.5.28)
- **主要亮点**:
    - 优化了 Agent 和 Codex 运行时的恢复机制的稳定性。
    - 子代理（subagents）现在能更好地保持当前工作目录（cwd）和 workspace 的隔离。
    - Hook 上下文现在严格限制在 prompt 本地范围。
    - 修复了 session 锁释放的问题：超时中断时会释放锁，而存活的 OpenClaw 锁在清理过程中不会被意外释放。
    - 避免了重启时的陈旧（stale）延续。
    - 修复了 Codex 应用服务器/助手（app-server/helper）的故障处理。

## 3. 项目进展

以下为今日合并或有重要进展的 Pull Request：

- **[docs] fix(agents): guard vanished workspaces** ([#88485](https://github.com/openclaw/openclaw/pull/88485)): 该PR旨在修复当工作区目录意外消失或被清空时的问题，通过添加工作区最近状态标记来防止静默重建，增强了系统的健壮性。
- **[fix] [gateway] fix(gateway): load auto-enabled channel plugins at startup** ([#88497](https://github.com/openclaw/openclaw/pull/88497)): 修复了网关在启动时未能正确加载自动启用频道插件的问题。
- **[docs] fix(xiaomi): support MiMo voicedesign TTS** ([#88378](https://github.com/openclaw/openclaw/pull/88378)): 为小米 MiMo 语音设计（voicedesign）添加了 TTS 支持，扩展了小米平台的功能。
- **[fix] [commit] fix(secrets): stage all files then commit so apply never half-migrates** ([#88013](https://github.com/openclaw/openclaw/pull/88013)): 修复了密钥应用（apply）流程中的潜在问题，现改为先暂存所有文件再提交，以防止迁移中途失败导致的状态不一致。

## 4. 社区热点

- **飞书升级后无法投递消息，严重性最高** ([#87646](https://github.com/openclaw/openclaw/issues/87646)): 该 Issue 在短时间内获得12条评论和1个赞，已被关闭（CLOSED）。用户报告从 v2026.5.26 升级到 v2026.5.27 后，飞书（feishu）频道无法投递消息，报错 `TypeError: Cannot read properties of undefined (reading 'run')`。这是一个 P1 级别的严重Bug，直接影响消息投递。
- **Codex OAuth 回退失败** ([#86820](https://github.com/openclaw/openclaw/issues/86820)): 此问题获得6个赞和12条评论，表明许多用户受到影响。当 Codex OAuth 压缩失败并回退到直接调用 OpenAI API 时，如果没有配置 `OPENAI_API_KEY`，会话将失败。这直接影响了使用 Codex OAuth 认证的用户。
- **Codex 新 Bug：无上下文引擎启动丢弃历史会话** ([#88352](https://github.com/openclaw/openclaw/issues/88352)): 该问题在单日内获得4条评论和1个赞，是一个 P1 级别的新 Bug。报告指出，在最近的 PR [#88262](https://github.com/openclaw/openclaw/pull/88262) 合并后，Codex 应用服务器桥接在无法安全恢复现有原生线程时，会启动一个仅包含当前轮次的瞬态线程，导致长会话的上下文丢失。

## 5. Bug 与稳定性

以下是今日报告的严重 Bug 和回归问题（P1/P0 级别）：

- **[P1/CLOSED] 飞书无法投递消息** ([#87646](https://github.com/openclaw/openclaw/issues/87646)): 升级后的严重回归问题，导致飞书频道瘫痪。当前状态为已关闭。
- **[P1/OPEN] Codex 无上下文启动丢失会话历史** ([#88352](https://github.com/openclaw/openclaw/issues/88352)): 新的回归问题，在特定情况下导致长会话历史丢失。当前无关联的修复 PR。
- **[P1/OPEN] 签名无效导致 Anthropic 会话硬失败** ([#88020](https://github.com/openclaw/openclaw/issues/88020)): 修复了由于 `REPLAY_INVALID_RE` 未能捕获 Anthropic 的“签名无效”错误，导致会话硬失败而非重试恢复的问题。这是一个回归问题，无关联修复 PR。
- **[P1/OPEN] Codex Telegram 会话超时** ([#87744](https://github.com/openclaw/openclaw/issues/87744)): 在 v2026.5.27 上，由 Codex 支持的 Telegram 会话反复超时，导致消息发送失败。这是一个可靠性回归问题。
- **[P1/CLOSED] Codex 缺失终端回退泄露到 Discord** ([#87725](https://github.com/openclaw/openclaw/issues/87725)): 修复了 Codex 运行时未确认完成时将内部错误信息直接发送到 Discord 频道的bug。该 Issue 已关闭，修复 PR是与母 Issue #87079 关联的。
- **[P1/OPEN] 主动记忆导致响应延迟和崩溃** ([#86996](https://github.com/openclaw/openclaw/issues/86996)): 在配合 Codex 使用主动记忆（Active Memory）时，系统变得极其缓慢和不稳定，导致钩子超时、启动中止和网关事件循环停滞。
- **[P0/PR] 迁移时覆盖损坏的目标会话存储** ([#88018](https://github.com/openclaw/openclaw/pull/88018)): 已提交 P0 级别的修复 PR，防止在 session store 迁移过程中将内存中可能已损坏的数据写入并覆盖磁盘上的有效数据。

## 6. 功能请求归类

- **集成新平台/协议**:
    - [Add Xiaomi MiMo Token Plan provider support](https://github.com/openclaw/openclaw/issues/86169) (已关闭)
- **文档与用户体验优化**:
    - [Explain Realtime Talk voices, voice-agent role, and mobile/phone bridge options](https://github.com/openclaw/openclaw/issues/76952) (已关闭)
- **API与开发者体验**:
    - [`/v1/responses` drops every built-in tool call from `output`](https://github.com/openclaw/openclaw/issues/75074): 用户请求在 API 响应中包含内置工具调用的细节，以便于评估和调试。
    - [`sessions_spawn` model parameter silently ignored](https://github.com/openclaw/openclaw/issues/74837): 用户报告 `sessions_spawn()` 的参数被静默忽略，请求修复此 Bug。
- **功能扩展**:
    - [Bridge Discord voice channel I/O to text-channel agent session](https://github.com/openclaw/openclaw/issues/73699): 请求将 Discord 语音频道的输入输出桥接到文本频道，以便在统一会话中查看。

## 7. 用户反馈摘要

- **升级风险较高**: 多位用户反馈升级到 v2026.5.27 后遇到严重问题，尤其是飞书频道（[#87646](https://github.com/openclaw/openclaw/issues/87646)）和 Codex 运行时（[#87744](https://github.com/openclaw/openclaw/issues/87744)）的故障，这可能会影响用户的升级意愿。
- **降级困难**: 有用户在升级后遇到问题（消息处理缓慢），尝试降级时因 `plugins/installs.json` 中存在未包含的插件记录而失败（[#75502](https://github.com/openclaw/openclaw/issues/75502)），反映出版本回退机制的不完善。
- **对 Matrix 支持不满意**: 用户报告了 Matrix 频道回复功能退化（[#87307](https://github.com/openclaw/openclaw/issues/87307)），包括回复类型错误和指令不响应，表明该频道的稳定性有待提高。
- **Windows 性能持续下降**: 有用户反映，Windows 版 OpenClaw 在每次更新后性能明显变得更慢，并出现“绝对路径”相关的错误（[#76884](https://github.com/openclaw/openclaw/issues/76884)），这可能是一个持续被忽略的平台问题。

## 8. 待处理积压

- **长期未响应的稳定性问题（P1）：**
    - **[Bug] Gateway becomes unstable under subagent load on Linux** ([#76315](https://github.com/openclaw/openclaw/issues/76315)): 创建于2026年5月2日，报告在 Linux 上，子代理/嵌入式运行负载会导致网关不稳定、WhatsApp 断开连接和事件循环停滞。此问题至今未有分配或 PR。
    - **[Bug] Multi-tool turn replay produces orphan tool_use blocks** ([#74907](https://github.com/openclaw/openclaw/issues/74907)): 创建于2026年4月30日，该 Bug 导致包含多工具使用的长会话中出现 400 错误。已有一个多月未获实质性更新。
- **长期未响应的修复/增强 PR（P1/P2）：**
    - **[refactor] refactor: move runtime state to SQLite** ([#81402](https://github.com/openclaw/openclaw/pull/81402)): 这是一个大规模的运行时状态重构 PR，已打开近20天，目前状态仍为“等待作者”。此 PR 的成功合并对项目架构有重大影响，但目前进展缓慢。
    - **[feat] fix(boot): wrap BOOT.md in internal-runtime-context** ([#75128](https://github.com/openclaw/openclaw/pull/75128)): 旨在修复启动指令泄露到用户可见回复中的问题，该 PR 从4月30日至今已有一个月，仍处于“等待作者”状态。

---

## 横向生态对比

好的，作为资深技术分析师，我将基于您提供的各项目日报，生成一份横向对比分析报告。

---

### 开源 AI 智能体项目横向对比日报 — 2026-05-31

**报告目的：** 为技术决策者和开发者提供 OpenClaw、NanoBot、Zeroclaw、PicoClaw 四个项目在 2026-05-31 当日社区动态的横向对比与事实分析。

---

#### 1. 今日横向概览

今日，**OpenClaw** 项目体量最大，社区讨论集中在飞书集成严重回归和 Codex 运行时稳定性，其维护响应速度为高优先级 Bug 提供了快速修复。**NanoBot** 和 **Zeroclaw** 活跃度处于高位，前者重点推进并发安全和 Matrix 通道修复，后者则聚焦于 Tauri 桌面客户端的功能补全和双工语音对话的底层构建。**PicoClaw** 活跃度相对较低，主要进行 Web 前端和 Azure 集成的边际改进。一个值得注意的共性是，多个项目均存在“升级后出现回归问题”的反馈，这一问题对用户体验和项目信任度有直接影响。

#### 2. 各项目活跃度对比

| 项目 | Issues (新/关) | PR (待/合关) | 版本发布 | 关键事实性备注 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 428 / 72 | 317 / 183 | v2026.5.28 | 规模最大（500+ 项）；有 P1/P0 级严重 Bug 修复；飞书集成回归 |
| **NanoBot** | 2 / 4 | 9 / 6 | 无 | 并发锁、Matrix 安全、Anthropic 兼容性修复；多人会议及扩展功能 PR |
| **Zeroclaw** | - / 39 | - / 32 | 无 | 桌面端( Tauri )功能大幅更新；双工语音对话 PR 合并；RFC 讨论增多 |
| **PicoClaw** | - / 7 | - / 11 | v0.2.9-nightly | 主要合并 Web 粘贴上传、Azure 认证、孟加拉语支持 |

**数据说明:**
- “/” 分隔符前为当日新增或待处理数量，“/”后为关闭或合并数量。
- OpenClaw 的活跃度数字（500项）远高于其他项目，反映其社区规模和问题处理量的巨大差异。

#### 3. OpenClaw 与同类对照

基于今日数据，与 NanoBot、Zeroclaw 和 PicoClaw 相比，OpenClaw 的社区活动表现出显著差异：

- **活动量级**: OpenClaw 的 Issue 和 PR 处理量（500+)比第二活跃的项目（Zeroclaw，50项）超出**一个数量级**。其讨论深度和广度都远超同类。
- **技术重点**: OpenClaw 的核心动作是 **修复生产环境的高优先级 Bug 和回归问题**（飞书、Codex、主动记忆），而其他三个项目更多是在**推进新功能和基础设施**（NanoBot 的 Dream 系统、Zeroclaw 的桌面端/语音、PicoClaw 的 Web 上传）。
- **社区讨论面**: OpenClaw 社区讨论的焦点是**平台集成（飞书）的稳定性**和 **Codex 运行时**的健壮性，反映了其作为大型项目的复杂集成挑战。而 NanoBot 社区讨论包括 **Dream 系统开关**、**Matrix 设备验证**；Zeroclaw 则讨论了**任务调度**和**输出路由**等架构性问题。

**小结**: OpenClaw 处于 **“稳定与修复”** 阶段，而其他项目更多处于 **“功能与扩展”** 阶段。

#### 4. 共同出现的技术方向

今日，多个项目都关注了以下方向（有直接证据支撑的）：

1.  **平台通道集成与稳定性**:
    - **涉及项目**: **NanoBot**、**Zeroclaw**、**PicoClaw**
    - **具体诉求**: 三个项目都有明确涉及通道问题的 PR。NanoBot 修复了 Matrix 设备验证和 SSRF 绕过；Zeroclaw 修复了 WhatsApp 和 Telegram 的回复问题；PicoClaw 为 Telegram 增加了“回复即提及”功能。
    - **观察**: 通道的多方兼容性和交互体验优化是各项目的持续投入点。

2.  **桌面端/Web 前端体验增强**:
    - **涉及项目**: **Zeroclaw**、**PicoClaw**
    - **具体诉求**: Zeroclaw 今日有 17 个 Issue 关闭是关于桌面菜单栏聊天功能的补全（图片拖放、工具审批等）；PicoClaw 则合并了 Web 前端的图片粘贴/拖拽上传功能。
    - **观察**: 前端交互体验的精细化是提升项目用户感知的重要方向。

#### 5. 差异化定位分析

| 维度 | OpenClaw | NanoBot | Zeroclaw | PicoClaw |
| :--- | :--- | :--- | :--- | :--- |
| **功能侧重** | 企业级、多平台 AI Agent 框架，强调编排、稳定性和多通道集成 | 个人 AI 助手，侧重记忆管理 (Dream系统)、Agent 协作和互操作性 | 个人 AI 助手，侧重原生桌面体验、全双工语音对话 | 轻量级、边缘计算友好的 AI 框架，强调在多平台（Android/嵌入式）上的运行 |
| **目标用户** | 寻求全面、高性能、可扩展 Agent 系统的开发者和企业 | 希望拥有一个强大、安全、可自定义的个人 AI 助手的普通开发者和发烧友 | 追求原生桌面体验、语音交互和高度可控性的极客和开发者 | 嵌入式设备爱好者、对资源占用敏感的开发者、Android 用户 |
| **技术架构** | 高度模块化，核心在编排器和 Codex 运行时 | 模块化，强调 Agent 之间的互操作性和安全沙箱 | 核心用 Rust (Tauri) 构建桌面端，支持全链路语音处理 | 架构轻量，聚焦于适配不同硬件平台和协议，依赖 Go 语言开发 |

#### 6. 社区活跃度记录

基于今日数据的活跃度分层如下：

- **极高活跃度**: **OpenClaw**
    - **证据**: 单日处理 Issues 500+，PR 500+，发布版本。社区讨论围绕高严重性 Bug，用户反馈密集。
- **高位活跃度**: **Zeroclaw**
    - **证据**: 单日处理 50 项 Issue/PR，包含多个大型功能 PR 的合并和架构讨论 (RFC)。桌面客户端的集中开发表明社区的高投入度。
- **中等活跃度**: **NanoBot**
    - **证据**: 单日处理 21 项 Issue/PR，主要聚焦于特定问题修复和中等规模的功能 PR，进展稳定。
- **低位活跃度**: **PicoClaw**
    - **证据**: 单日处理 18 项 Issue/PR，主要进行边际功能改进和语言支持，无重大架构变更。

#### 7. 有证据支撑的观察

1.  **桌面客户端成为竞争焦点**: Zeroclaw 和 PicoClaw 今日都有明确动作改善桌面和移动端体验。Zeroclaw 一次性关闭 17 个桌面端 Issue，PicoClaw 也专注 Web 端图片上传，这反映出社区对“非浏览器环境”的交互需求正从可选变为刚需。
2.  **升级导致回归是所有项目的共性风险**: OpenClaw 的飞书回归 Bug、PicoClaw 的 Web 界面消息混乱 Bug，都是明确报告的升级后问题。这表明随着功能快速迭代，回归测试和版本回滚机制对所有项目都至关重要。
3.  **“多 Agent 协作与任务调度”成为探索方向**: Zeroclaw 提出了路由任务调度和统一输出路由的 RFC；NanoBot 的 “Agent 协作总线” PR 也长期未决。这说明社区开始从单一 Agent 的能力，向 Agent 集群的编排和协作方向进行思考和实验。
4.  **安全与合规是持续主题**: NanoBot 今日合并了 SSRF 地址绕过修复和 Matrix 媒体大小限制，以及 Azure 身份认证。这反映了在 Agent 接入外部网络和平台时，安全问题始终是开发者的核心关切。
5.  **差异化体现在平台功能深度而非广度**: 所有项目都支持 Telegram。但 OpenClaw 在飞书上出现了复杂 Bug，NanoBot 修复了 Matrix 设备验证，Zeroclaw 重点解决 WhatsApp 回复。OpenClaw 对飞书的深度支持远超同类，PicoClaw 对 QQ 频道的关注也体现其差异化定位。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot 项目动态日报 —— 2026-05-31**

---

## 1. 今日活动概览

过去 24 小时（截至 2026-05-31）项目活跃度较高：共更新 6 条 Issues（新开/活跃 2 条，关闭 4 条），15 条 Pull Requests（待合并 9 条，已合并/关闭 6 条）。无新版本发布。
- **关闭的关键 Issue**：Dream 系统作业全局开关（#3885）、Matrix 设备验证（#4042）、`process_direct` 并发锁绕过（#4080）、Anthropic 内容块类型缺失（#3993）均已通过对应 PR 修复。
- **合并的 PR** 集中在并发安全、Matrix 安全加固、WebUI 输出优化以及 Anthropic 兼容性修复。
- **开放 PR** 包括 Agent 协作总线、手动记忆模式、轻量 RAG、OpenRouter 语音识别等多项功能扩展。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

以下为今日合并/关闭的重要 PR，标注了所推进的功能或修复：

- **并发安全**
  - [#4104 fix(agent): acquire per-session lock in process_direct](https://github.com/HKUDS/nanobot/pull/4104) — 修复 `process_direct` 绕过会话锁导致历史数据并发损坏的问题（关闭 #4080）。
- **Dream 系统开关 & Anthropic 兼容性**
  - [#4054 fix: coerce typeless Anthropic content blocks + add Dream enable toggle](https://github.com/HKUDS/nanobot/pull/4054) — 同时关闭 #3993（Anthropic 内容块类型缺失）和 #3885（Dream 作业全局开关配置）。
- **Matrix 通道**
  - [#4110 fix(matrix): handle SAS device verification](https://github.com/HKUDS/nanobot/pull/4110) — 为 Element X 添加可选的 SAS 设备验证支持（关闭 #4042）。
  - [#4106 [security] fix(matrix): bound inbound media downloads](https://github.com/HKUDS/nanobot/pull/4106) — 强制 Matrix 入站媒体大小限制，防止绕过。
- **安全修复**
  - [#4086 fix(security): normalize IPv6-mapped IPv4 addresses in SSRF checks](https://github.com/HKUDS/nanobot/pull/4086) — 修复 SSRF 检查中 IPv6 映射 IPv4 地址的绕过问题。
- **WebUI 改进**
  - [#4108 feat(webui): refine output timeline and model controls](https://github.com/HKUDS/nanobot/pull/4108) — 重构 WebUI 输出时间线，增加编辑器引导流。

---

## 4. 社区热点

- **Heartbeat 定时任务误报**（#4111：[OPEN] Heartbeat 在无任务时错误发送 'All clear.' 到飞书）
  - [Issue #4111](https://github.com/HKUDS/nanobot/pull/4111) 获得 **2 个独立 PR 修复**（#4114、#4112），说明社区对该行为敏感。两个 PR 均处于开放状态，提交者不同，核心诉求是让 Heartbeat 在文件为空/无任务时彻底静默。
- **Bwrap 沙箱可配置额外挂载点**（#4107：[enhancement] Allow configuring additional bind mounts for bwrap sandbox）
  - [Issue #4107](https://github.com/HKUDS/nanobot/issues/4107) 提出当前 bwrap 沙箱仅挂载固定路径，用户无法添加自定义目录（如项目数据、模型文件）。目前无评论，但此需求影响需要沙箱访问外部资源的用户。

---

## 5. Bug 与稳定性

| 严重程度 | Issue / PR | 描述 | 状态 |
|----------|-----------|------|------|
| **高** | #4080 → #4104 | `process_direct` 绕过会话锁，可导致同会话历史损坏 | 已修复（PR 已合并） |
| **中** | #4111 → #4114 / #4112 | Heartbeat 定时任务在无任务时向飞书误报 "All clear." | 已提交修复（PR 待合并） |
| **中** | #4042 → #4110 | Matrix 连接 Element X 时每个加密消息均显示“未验证设备”警告 | 已修复（PR 已合并） |
| **中** | #4086 | SSRF 检查中 IPv6 映射 IPv4 地址可绕过黑名单 | 已修复（PR 已合并） |
| **低** | #4106 | Matrix 入站媒体未受大小配置限制 | 已修复（PR 已合并） |

---

## 6. 功能请求归类

| 功能需求 | 来源 Issue/PR | 要点 |
|---------|--------------|------|
| Dream 系统作业全局开关 | [#3885](https://github.com/HKUDS/nanobot/issues/3885) → [#4054](https://github.com/HKUDS/nanobot/pull/4054) | 添加 `dream.enabled` 配置项，允许用户完全禁用记忆整理 cron 作业 |
| Bwrap 沙箱可配置附加挂载点 | [#4107](https://github.com/HKUDS/nanobot/issues/4107) | 允许用户指定额外目录（如模型、数据）挂载到沙箱 |
| 手动记忆模式 | [#4050](https://github.com/HKUDS/nanobot/pull/4050) (PR) | 隔离自动/手动记忆流，关联 #3885 和 #3948 |
| 轻量 RAG 记忆检索 | [#4109](https://github.com/HKUDS/nanobot/pull/4109) (PR) | 使用本地嵌入实现轻量级 RAG 记忆检索 |
| 可配置 STT 模型 + OpenRouter 语音转录 | [#4113](https://github.com/HKUDS/nanobot/pull/4113) (PR) | 新增 `transcriptionModel` 设置和 OpenRouter 转录后端 |
| 跨代理消息总线 | [#3992](https://github.com/HKUDS/nanobot/pull/3992) (PR) | 允许多个 nanobot 代理实例通过共享消息总线通信 |
| GitAgent Protocol 支持 | [#4034](https://github.com/HKUDS/nanobot/pull/4034) (PR) | 增加 `agent.yaml` + `SOUL.md` 标准文件，使 nanobot 兼容 GitAgent 协议 |
| 注册表驱动 Provider 配置字段 | [#3994](https://github.com/HKUDS/nanobot/pull/3994) (PR) | 在 WebUI 中暴露 Bedrock 等 Provider 的特定配置字段 |
| Tokenizer 预热与构建时日志 | [#3997](https://github.com/HKUDS/nanobot/pull/3997) (PR) | 复用共享 tiktoken 实例并添加 AgentLoop 构建步骤耗时日志 |

---

## 7. 用户反馈摘要

- **Dream 系统无法禁用**（#3885）：用户 @codeLong1024 反馈即使禁用 memory 技能或设长间隔，Dream 作业仍被无条件注册到 cron，请求明确的 `enabled` 开关。该需求已被合并 PR #4054 满足。
- **Matrix 未验证设备警告**（#4042）：用户 @PaddyPatPat 报告 Element X 连接时所有加密消息都显示“未验证”，原因是 nanobot 未处理 SAS 验证。PR #4110 已添加可选支持。
- **Heartbeat 误报困扰**（#4111）：用户 @CashSoldier 描述每 30 分钟收到“All clear.”空通知，导致飞书通知泛滥。两个 PR 均针对此问题提交了不同的修复方案（严格匹配模板 vs. 失败关闭模式）。
- **Bwrap 挂载点受限**（#4107）：用户 @Kyakui 指出硬编码的挂载路径缺少常见目录（如 `/var`、`/tmp` 下自定义路径），希望可在配置中补充。

---

## 8. 待处理积压

以下为长期未响应或需维护者关注的重要 Issue/PR：

- **Agent 协作总线**（[#3992](https://github.com/HKUDS/nanobot/pull/3992)）：创建于 2026-05-24，至今 7 天无维护者评论，功能完整但需审查。
- **GitAgent Protocol 支持**（[#4034](https://github.com/HKUDS/nanobot/pull/4034)）：创建于 2026-05-28，3 天无回应。若被采纳将提升项目与其他 agent 工具的互操作性。
- **轻量 RAG 记忆检索**（[#4109](https://github.com/HKUDS/nanobot/pull/4109)）：昨日新开，暂无维护者反馈。
- **Bwrap 可配置挂载点**（[#4107](https://github.com/HKUDS/nanobot/issues/4107)）：昨日新开，无评论。建议尽早回复，因涉及沙箱安全与灵活性平衡。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我将根据您提供的 Zeroclaw GitHub 数据，生成 2026-05-31 的项目动态日报。

---

### Zeroclaw 项目动态日报 — 2026-05-31

**报告周期：** 2026-05-30 至 2026-05-31

---

#### 1. 今日活动概览

过去 24 小时内，项目活跃度极高，共处理了 50 条 Issues 和 50 条 Pull Requests。其中 Issues 的关闭率达 78%（39/50），PR 的合并/关闭率达 64%（32/50），显示项目维护工作高效。核心动态集中在 **macOS 桌面应用的 Tauri 客户端** 迎来大规模功能更新和问题修复，**语音对话功能**的相关 PR 被合并，以及社区发起了关于**任务调度**和**输出路由**的重要架构讨论。无新版本发布。

#### 2. 版本发布

无

#### 3. 项目进展

今日共有 32 个 PR 被合并或关闭，涉及多个核心模块的显著进展，主要包括：

- **桌面应用 (Tauri) 功能补全：** 开发人员 [@theonlyhennygod](https://github.com/theonlyhennygod) 合并了多个 PR，为 macOS 桌面版补齐了核心功能：
    - **系统权限处理**： [PR #6761](https://github.com/zeroclaw-labs/zeroclaw/pull/6761) 合并了点击、键盘、通知等五个 macOS UI 控制能力处理器。[PR #6762](https://github.com/zeroclaw-labs/zeroclaw/pull/6762) 至 [PR #6767](https://github.com/zeroclaw-labs/zeroclaw/pull/6767) 分别合入了“辅助功能”、“屏幕录制”、“麦克风”、“输入监测”、“完全磁盘访问”和“本地网络”权限的申请、恢复检查和撤销检测逻辑。

- **语音对话 (Voice) 功能推进：** [PR #5974](https://github.com/zeroclaw-labs/zeroclaw/pull/5974)、[PR #5976](https://github.com/zeroclaw-labs/zeroclaw/pull/5976) 和 [PR #5978](https://github.com/zeroclaw-labs/zeroclaw/pull/5978) 相继被合并，这三个大型 PR 实现了 WebSocket 二进制音频帧处理、基于能量的语音活动检测器 (VAD)，以及语音捕获缓冲和语音转文字 (STT) 调度，是支持全双工语音对话的关键基础。

- **构建与文档清理：** [PR #6956](https://github.com/zeroclaw-labs/zeroclaw/pull/6956) 移除了市场上的部署模板同步工作流。[PR #6963](https://github.com/zeroclaw-labs/zeroclaw/pull/6963) 补充了 `web_dist_dir` 设置的文档。

#### 4. 社区热点

- **桌面菜单栏聊天功能的全面适配：**
    `#6321` 至 `#6337` 等一系列由 [@theonlyhennygod](https://github.com/theonlyhennygod) 提出的 Issues 今日全部关闭，涉及桌面菜单栏聊天面板与网页版 Dashboard 的功能一致性（parity）。这包括工具审批、任务取消、图片拖放、设置编辑、会话历史、快捷键等。这反映出社区对桌面客户端体验的强烈期望，希望其能成为与网页版同等强大的入口。

- **基础架构 RFC 引发讨论：**
    - **RFC: 路由任务调度**：[Issue #6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) 提议将定时任务集成到编排器消息管线中，以解决多个相关 Bug。该提议被认为高风险且优先级高，显示了社区对当前任务调度系统稳定性和一致性缺陷的关注。
    - **RFC: 统一输出路由**：[Issue #6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969) 提出建立按用户偏好和指令路由输出的模型。该 RFC 来自一位从 Letta 迁移而来的用户，其痛点在于无法控制回复的“方式”和“位置”，反映了高级用户对 Agent 互动精细控制权的需求。

#### 5. Bug 与稳定性

- **高风险 Bug 已修复：**
    - **上下文压缩丢弃推理内容**：`#6269` [CLOSED] 报告 `reasoning_content` 在上下文压缩中被丢弃，这是一个严重影响依赖该字段的 Provider 的问题。该 Issue 已被关闭，但未发现明确的修复 PR 链接，需关注。
    - **桌面菜单栏显示内部工具调用**：`#6349` [CLOSED] 修复了桌面聊天面板错误地将 `file_read` 等工具调用显示为独立聊天气泡的问题。

- **待处理的 Bug 修复 PR：**
    - **WhatsApp 频道回复**：[PR #7008](https://github.com/zeroclaw-labs/zeroclaw/pull/7008) (OPEN) 旨在修复 WhatsApp 频道在特定 JID 类型下无法投递回复的问题。
    - **TTS 绑定问题**：[PR #7002](https://github.com/zeroclaw-labs/zeroclaw/pull/7002) (OPEN) 修复了 TTS 管理器错误绑定到默认 Agent 而非频道所属 Agent 的 Bug。
    - **电报频道语音转写**：[PR #7000](https://github.com/zeroclaw-labs/zeroclaw/pull/7000) (OPEN) 修复了 Telegram 频道中语音消息转录时，未能正确使用预配置转录别名的问题。

#### 6. 功能请求归类

根据今日关闭的 Issues，主要集中在**桌面端功能补完**上，以下是按功能模块归类的请求：

- **菜单栏聊天 (Menu-bar Chat) 完善：**
    - **工具审批 UI** (`#6321`)
    - **任务取消** (`#6322`)
    - **图片拖放** (`#6323`)
    - **Token/成本显示** (`#6324`)
    - **会话历史** (`#6325`)
    - **设置编辑器** (`#6326`)
    - **频道总览** (`#6327`)

- **系统托盘与基础体验优化：**
    - **系统托盘菜单** (`#6329`)：退出、重启、打开 Dashboard 等。
    - **全局快捷键** (`#6328`)
    - **开机自启** (`#6331`)
    - **自动更新** (`#6332`)
    - **崩溃报告** (`#6340`)

- **平台集成与认证：**
    - **macOS 权限处理** (`#6333`, `#6334`, `#6485`)
    - **无障碍与可访问性** (`#6336`, `#6337`)
    - **通用二进制构建** (`#6339`)

- **核心功能与架构：
    - **全双工语音对话** (`#5896`)：今日其相关的 PR 已完成合并。
    - **WebUI 图像粘贴/拖放** (`#5649`)：已关闭，功能可能已完成。

#### 7. 用户反馈摘要

- **对桌面客户端的强烈需求**：多个 Issues 和 PR 由同一开发者 [@theonlyhennygod](https://github.com/theonlyhennygod) 提交，旨在将桌面菜单栏聊天体验提升至与网页版同等水平。这表明用户（尤其是桌面重度用户）期望一个无需依赖浏览器的、原生集成于操作系统的 Agent 交互界面。

- **对控制力和透明度的要求**：
    - **来自迁移用户的反馈**：`#6969` 的作者明确表示从 Letta 迁移而来，对无法控制回复的“方式和位置”感到不适应。这表明高级用户期望 Agent 行为和输出是高度可定制的。
    - **对内部工具调用的可见性**：`#6349` 的报告者不希望看到内部的工具调用过程，而只希望看到最终结果。这反映了用户对 Agent 对话流的“清洁性”有更高要求。

- **对稳定性和配置易用性的诉求**：`#6074` 仍在追踪被误合并又回滚的 153 个提交，表明项目曾经历过破坏性变更，社区对恢复丢失的修复和特性有持续的关注。

#### 8. 待处理积压

- **长期未响应的关键 Issue：**
    - **追踪丢失提交**：[Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) (OPEN) 提议追踪一次大规模回滚中丢失的 153 个提交。此问题涉及项目历史的完整性，风险高，但状态停留在 `status:in-progress`。建议维护者评估并明确恢复策略或标记为取消。
    - **Webhook 重试逻辑**：[Issue #5761](https://github.com/zeroclaw-labs/zeroclaw/issues/5761) (CLOSED) 虽已久，但今日关闭，表明与之对应的修复或其他解决方式可能已经落地。需要确认是否已有相应 PR 被合并。
- **待审查的开放 PR：**
    - **移除 Tauri 桌面应用**：[PR #7026](https://github.com/zeroclaw-labs/zeroclaw/pull/7026) (OPEN) 提议彻底移除 Tauri 桌面端，这与近期大量桌面端特性更新形成了鲜明对比。这是一个需要社区和维护者紧急关注并做出决策的根本性问题。
    - **版本化文档部署**：[PR #7023](https://github.com/zeroclaw-labs/zeroclaw/pull/7023) (OPEN) 提议为文档增加版本化支持，这是提升项目成熟度的关键一步，但风险高，需经过评审才能合并。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，遵照您的指示。以下是基于 PicoClaw 项目 2026-05-31 的 GitHub 活动数据生成的日报。

---

## PicoClaw 项目动态日报

**日期:** 2026-05-31
**分析师:** AI 辅助生成

### 1. 今日活动概览

过去24小时内，PicoClaw项目保持活跃，共处理了7条Issue和11条Pull Request。项目发布了最新的Nightly Build版本(基于v0.2.9)。社区贡献者提交了多项功能改进，包括为Web前端增加图片粘贴/拖拽上传、为Telegram频道增加回复触发机制，以及为Azure OpenAI提供者增加Azure身份认证支持。同时，修复了Codex流式输出和Makefile编译环境问题。用户反馈集中在v0.2.9版本的Web UI消息混乱和上下文压缩显示异常两个Bug上。

### 2. 版本发布

项目发布了一个新的Nightly Build版本。

- **发布版本:** `v0.2.9-nightly.20260531.1ce353ba`
- **发布说明:** 这是一个自动化构建版本，可能存在不稳定性，请谨慎使用。
- **详细变更:** [v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)
- **解读:** 当前主分支的最新开发动态已被打包为夜版，包含了自v0.2.9以来的所有提交。用户可以通过此版本体验最新功能，但需注意稳定性风险。

### 3. 项目进展

今日有3个PR被合并或关闭，推进了以下功能或修复：

- **Web前端图片支持:** PR [#2969](https://github.com/sipeed/picoclaw/pull/2969) 已合并，新增了在Web聊天界面中通过粘贴或拖拽上传图片的功能，并处理了MIME类型识别和混合剪贴板内容的问题。
- **Azure身份认证:** PR [#2971](https://github.com/sipeed/picoclaw/pull/2971) 已合并，为Azure OpenAI提供者增加了可选的Azure Identity认证支持。该特性通过构建标签`azidentity`控制，可满足某些Azure订阅策略禁止使用密钥认证的需求。
- **国际化支持:** PR [#2974](https://github.com/sipeed/picoclaw/pull/2974) 已合并，为Web应用增加了孟加拉语(`bn-in`)支持。

### 4. 社区热点

今日讨论最活跃的Issues如下：

1. **[Bug #2972] v0.2.9升级后Web界面消息混乱**
   - [链接](https://github.com/sipeed/picoclaw/issues/2972)
   - **热度:** 1个用户参与讨论，2条评论。
   - **诉求:** 用户报告从v0.2.9升级后，每次开启新会话都会自动附加旧的聊天记录，导致消息混乱。用户希望确认这是一个Bug，期望在新会话中拥有干净的上下文。这可能是会话管理或上下文持久化逻辑出现回归问题。

2. **[Bug #2968] `/context`命令始终显示`Compress at: 76800 tokens`**
   - [链接](https://github.com/sipeed/picoclaw/issues/2968)
   - **热度:** 1个用户参与，获得1个赞。
   - **诉求:** 用户报告使用`/context`命令查看上下文时，始终显示固定的压缩点为76800 tokens，不会随实际上下文长度变化。用户期望能获得真实的上下文状态，以便于调试。

### 5. Bug 与稳定性

今日主要报告了以下Bug，按严重程度排列：

- **高严重性:**
  - **[BUG #2972] v0.2.9升级后Web界面消息混乱:** 影响核心聊天体验，目前无对应的修复PR。
    - [链接](https://github.com/sipeed/picoclaw/issues/2972)
  - **[BUG #2968] `/context` 命令显示异常:** 影响用户排查上下文管理问题的能力，目前无对应的修复PR。
    - [链接](https://github.com/sipeed/picoclaw/issues/2968)

- **低严重性:**
  - **[BUG #2880] 旧版本(v0.1.3) Android app无法创建目录:** 这是一个旧问题，已被标记为`stale`并关闭。原因可能是Android版本或权限模型变更导致。
    - [链接](https://github.com/sipeed/picoclaw/issues/2880)
  - **[BUG #2742] v0.2.8版本Gateway启动时无频道:** 这是一个旧问题，已被标记为`stale`并关闭。原因是旧版本的已知Bug。
    - [链接](https://github.com/sipeed/picoclaw/issues/2742)

### 6. 功能请求归类

今日用户提出了以下功能需求，并有对应的PR提交：

| 功能需求 (Issue) | 对应 PR (Pull Request) | 状态 | 描述 |
| :--- | :--- | :--- | :--- |
| [Azure Identity认证](https://github.com/sipeed/picoclaw/issues/2970) | [#2971](https://github.com/sipeed/picoclaw/pull/2971) | **已合并** | 为Azure OpenAI提供者增加Azure Identity认证支持。 |
| [孟加拉语i18n](https://github.com/sipeed/picoclaw/issues/2973) | [#2974](https://github.com/sipeed/picoclaw/pull/2974) | **已合并** | 添加了孟加拉语(bn-in)的翻译支持。 |
| [Telegram: 回复即提及](https://github.com/sipeed/picoclaw/issues/2975) **(PR)** | [#2975](https://github.com/sipeed/picoclaw/pull/2975) | **待合并** | 在Telegram群组中，用户回复Bot消息将等同于`@`提及Bot，方便用户交互。 |
| [exec命令/QQ重启/模型选择](https://github.com/sipeed/picoclaw/issues/2952) | 暂无 | **开放中** | 用户提出三个问题：1. `exec`命令`actions:run`首次默认不携带；2. QQ频道重启后接收消息会再次重启；3. 建议模型界面默认显示已保存的key对应的提供商，并支持下拉选择和API测试。 |

### 7. 用户反馈摘要

- **痛点:**
  - 用户 `@xpader` 反馈，从v0.2.9升级后，Web界面无法正常使用，每次新会话都会加载旧历史消息，影响使用体验。 ([#2972](https://github.com/sipeed/picoclaw/issues/2972))
  - 用户 `@xpader` 反馈 `/context` 功能可能失效，总是显示一个固定的token压缩值，无法反映真实情况。 ([#2968](https://github.com/sipeed/picoclaw/issues/2968))
- **使用场景 & 建议:**
  - 用户 `@xhynice` 提出了关于 `exec` 工具、QQ渠道稳定性以及模型提供商选择器UI的改进建议，反映出用户在使用多模型、多渠道时遇到的具体配置和稳定性难题。 ([#2952](https://github.com/sipeed/picoclaw/issues/2952))

### 8. 待处理积压

以下PR和Issue长期未更新或未得到核心维护者的响应，需关注：

- **PR [#2856](https://github.com/sipeed/picoclaw/pull/2856) feat(message): support media attachments and Telegram rich delivery**
  - **创建:** 2026-05-11
  - **状态:** 开放中，已标记为 `stale`。这是一个重要的功能改进，允许消息工具携带多媒体附件，但已超过三周未合并或关闭。
- **PR [#2838](https://github.com/sipeed/picoclaw/pull/2838) feat(agent): support frontmatter tool policy filters**
  - **创建:** 2026-05-09
  - **状态:** 开放中，已标记为 `stale`。这是一个增强Agent安全性的特性，允许对工具使用进行细粒度控制，但同样长时间没有进展。

</details>