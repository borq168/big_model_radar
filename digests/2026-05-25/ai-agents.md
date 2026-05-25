# OpenClaw 生态日报 2026-05-25

> Issues: 500 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-05-25 02:37 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目日报 — 2026-05-25

## 今日活动概览

过去24小时内，OpenClaw 仓库迎来密集更新：共处理 **500 条 Issue**（新开/活跃 463 条，关闭 37 条）和 **500 条 PR**（待合并 378 条，已合并/关闭 122 条）。发布两个 v2026.5.24 系列 beta 版本，其中 beta.2 新增 iMessage 表情反应审批支持，beta.1 优化 Gateway 性能并修复 CPU profile 文件积累问题。社区讨论集中在 Telegram 直接消息丢失、Control UI 配置编辑器 Raw 模式被禁用、以及一系列 Channel Broker 迁移 PR 的提交。

---

## 版本发布

### v2026.5.24-beta.2
- **iMessage 表情反应审批**：`👍`（Like tapback）解析为 `allow-once`，`👎` 解析为 `deny`，显式审批人白名单从 `channels.imessage.allowFrom` 读取；`allow-always` 仍通过手动 `/approve <id> allow-always` 操作。
- 无破坏性变更或迁移说明。

### v2026.5.24-beta.1
- **Gateway/性能**：复用进程稳定的频道目录读取，避免重复的 bundled-channel 边界检查；轮换 gateway watch CPU profile 文件，防止 benchmark 运行时积累无界工件。
- 缓存稳定安装记录、频道目录、bundled-channel 等。
- 无破坏性变更或迁移说明。

---

## 项目进展

今日关闭的 Issue/PR 主要集中在文档整理和小型修复：
- **Issue #81249**（Local Ollama 嵌入失败）：已关闭，未合并 PR，但问题根源已被识别（代理 SSRF 保护覆盖 NO_PROXY）。
- **Issue #86185**（将 ClawSweeper 审查策略移入 AGENTS.md）：已关闭，无代码变更。
- **PR #86089**（重启恢复回复投递）：OPEN 状态，但已获得 maintainer 关注，修复 gateway 重启后 Discord/聊天消息无声丢失的问题。
- **Channel Broker 系列 PR**（共 7 个）：由 @100yenadmin 提交的 Phase 1~4 及迁移证明 PR（#86096、#86153、#86154、#86156、#86157、#86164、#86165），今日集中创建，旨在将 Telegram/Discord/Slack/WhatsApp/iMessage 等渠道的共同语义合并到统一 Channel Broker 合约下。多个 PR 已标记 `👀 ready for maintainer look` 或 `⏳ waiting on author`。
- **PR #86281**（Warm provider auth off main thread）：将 provider 认证预暖从主线程移到 worker 线程，减少启动时对事件循环的占用，已标记 `👀 ready for maintainer look`。
- **PR #86270**（修复 Control UI 过期审批提示）：当审批在其他客户端（如 Discord）已解决时，控制 UI 不再显示过期弹窗。

---

## 社区热点

以下 Issue/PR 在过去24小时内收到最多评论与反应：

### 1. Issue #75 – Linux/Windows Clawdbot Apps
- **106 条评论**，👍 77
- **诉求**：请求为 Linux 和 Windows 提供与 macOS 类似功能的 Clawdbot 桌面应用。
- 自 2026-01-01 创建以来长期活跃，至今未关闭，无关联 PR。

### 2. Issue #86184 – Telegram 直接消息收到通用错误回退
- 7 条评论，👍 1
- **问题**：在 v2026.5.22 上，Telegram 直接会话完成工具调用后，用户收到通用错误消息而非助理回复。
- 该 Issue 今日刚创建（2026-05-24），已引起关注，暂无 fix PR。

### 3. Issue #59330 – Control UI Raw 模式永久禁用
- 7 条评论，👍 12（今日最多👍）
- **问题**：自 2026.3.31 起 Control UI 配置编辑器强制 Form 模式，无法使用 Raw 模式。根因是 `normalizeExecSafeBinProfilesInConfig()` 注入 undefined 键导致 round-trip 检查失败。
- 有维护者确认，暂无关联 PR。

### 4. Issue #86214 – Codex 客户端在图片/工具请求中中途关闭
- 6 条评论，👍 1
- **问题**：Discord 上的图片生成请求从未送达 `image_generate` 任务，用户未收到任何附件或完成消息。本地日志显示 Codex app-server 连接提前关闭。
- 暂未分配 PR。

### 5. PR #86292 – 修复 Codex 预压缩认证路由
- 由 @amknight 提交，标记 `👀 ready for maintainer look`，解决 Codex 预压缩时未保留会话运行时路由的问题。

---

## Bug 与稳定性

以下按严重程度排列，今日报告的 Bug 或回归问题：

| 严重程度 | Issue/PR | 描述 | 是否有 fix PR |
|----------|----------|------|---------------|
| P1 | #86214 | Codex app-server 在 mid-turn 关闭，导致图像/tool 请求丢失 | 无 |
| P1 | #86184 | Telegram 直接消息在工具调用后仅显示通用错误回退 | 无 |
| P1 | #83959 | Codex app-server 启动重试在替代服务器就绪前耗尽 | 无，有 `needs-live-repro` 标记 |
| P1 | #57326 | CLI-backed helper 路径仍绕过 CLI dispatch | 无（问题已在 main 部分修复，小残留） |
| P1 | #54531 | 渠道回复失败：Telegram/Discord 响应在 UI 可见但未发送回用户 | 无 |
| P2 | #75670 | Matrix 线程会话 key 大小写归一化导致重复卡住会话 | 无 |
| P2 | #58514 | Google Chat Space 消息被静默忽略（DM 正常） | 无，有 linked PR |
| P2 | #53628 | `${XDG_CONFIG_HOME}` 未解析导致 skill 安装失败 | 无 |
| P2 | #57901 | Safeguard 压缩忽略 `compaction.model` 配置，使用会话主模型 | 无 |
| P2 | #59330 | Control UI Raw 模式永久禁用 | 无，但根因已定位 |

此外，两个今日新开的 PR 直接修复了以下 Bug：
- **PR #86132**：`openclaw doctor` 在 cron store 不可读时不再崩溃，改为警告并继续。
- **PR #86135**：Docker slim 镜像中 `/home/node/.config` 所有权修复为 `node:node`。
- **PR #86224**：修复 CLI 运行时在预压缩和 memory-flush 中的 resolve 问题。
- **PR #86286**：Ollama 的 Kimi cloud 推理前缀泄漏修复。
- **PR #86287**：修复 Codex 中 source reply mode 在活跃运行时丢失的问题（关联 #86232）。

---

## 功能请求归类

以下为用户提出的新功能需求（根据今日活跃的 Issues 整理）：

| 功能 | Issue/PR | 作者 | 关注点 |
|------|----------|------|--------|
| Linux/Windows Clawdbot 桌面应用 | #75 | @steipete | 多平台支持 |
| 预构建 Android APK 发布 | #9443 | @AstridQing-AI | 简化 Android 用户部署 |
| 可配置流式看门狗超时阈值 | #68596 | @Yaemikoreal | 支持长推理模型如 DeepSeek-R1 |
| Slack Block Kit 消息支持 | #12602 | @JonasBoury | 富交互 agent 消息 |
| 掩码 Secrets（防止 agent 访问 API Key） | #10659 | @jmkritt | 安全防护 |
| 响应前强制钩子（硬门控） | #13583 | @JamieMolty | 关键任务场景的强制工具调用约束 |
| 文件系统沙箱配置 | #7722 | @LumenLantern | 文件访问白名单/黑名单 |
| Exec-approval 黑名单支持 | #6615 | @aaroneden | “允许一切除 X”策略 |
| 原生 Secrets 管理（AWS Secrets Manager 等） | #13610 | @trevorgordon981 | 避免明文存储 |
| 基于能力的技能/工具权限模型 | #12678 | @ramtinz | 默认拒绝高风险操作 |
| 持久化任务状态表面（Discord 等渠道） | #52640 | @anyech | 长运行任务的可视化 |
| 自动更新（可配置计划、确认、通知） | #12855 | @jarvislanou | 简化更新流程 |
| Channel Broker 统一协议（多 PR） | #86096 等 | @100yenadmin | 合并渠道维护 |

相关 PR：除 Channel Broker 外，暂无与上述功能请求直接关联的 fix/feature PR。

---

## 用户反馈摘要

从今日活跃的 Issues 评论中提取的真实用户痛点：

- **Telegram 用户**（#86184）：执行工具密集的只读查询后，仅收到“Something went wrong”通用消息，实际回答在 UI 中可见但未送达手机。用户认为这是回归。
- **Codex 用户**（#86214）：在 Discord 中请求图片生成，agent 中途停止，无任何错误提示。用户必须手动检查日志才发现 `codex app-server client is closed`。
- **小米 MiMo Token Plan 用户**（#86169）：无法通过 OpenClaw 连接到 tp- API，需要添加官方 provider 支持和明确的验证流程。
- **Control UI 用户**（#59330）：自 2026.3.31 升级后，Raw 模式被永久禁用，被迫使用 Form 模式修改配置，无法处理复杂 JSON 结构。用户希望尽快修复。
- **WhatsApp 用户**（#50093）：连接断开后重连期间的消息静默丢失，即使群组内有监控配置，也无任何日志记录。用户希望支持掉线期间的消息回填。

---

## 待处理积压

以下为长期未响应或未分配的重要 Issue 和 PR，提醒维护者关注：

| 项目 | 类型 | 创建日期 | 最后更新 | 评论数 | 备注 |
|------|------|----------|----------|--------|------|
| #75 Linux/Windows Clawdbot | Issue | 2026-01-01 | 2026-05-24 | 106 | 长期最热门功能请求，无 assignee |
| #9443 预构建 Android APK | Issue | 2026-02-05 | 2026-05-24 | 25 | 持续有用户 +1，无进展 |
| #10659 掩码 Secrets | Issue | 2026-02-06 | 2026-05-24 | 13 | 安全关键，P1 但无 PR |
| #12602 Slack Block Kit | Issue | 2026-02-09 | 2026-05-24 | 13 | 企业用户高频需求，无 assignee |
| #68596 流式看门狗超时配置 | Issue | 2026-04-18 | 2026-05-25 | 13 | 影响长推理模型用户，无 PR |
| #86281 Warm provider auth off main thread | PR | 2026-05-25 | 2026-05-25 | - | 新开，标记 ready for maintainer，未合并 |
| #84581 剥离 model provider keys | PR | 2026-05-20 | 2026-05-25 | - | 安全关键 P1，尚需 proof |
| #85341 内部化 agent runtime | PR | 2026-05-22 | 2026-05-25 | - | 大型重构，P1，尚需 proof |

---

*生成时间：2026-05-25 21:00 UTC | 数据源：github.com/openclaw/openclaw*

---

## 横向生态对比

### 1. 今日横向概览

截至2026-05-25 UTC，四个AI智能体/个人AI助手开源项目均保持活跃，但活动规模差异显著。OpenClaw以近千条Issue/PR更新居首，并发布两个beta版本，集中修复Gateway性能与iMessage审批机制。NanoBot规模较小，但关键修复（工具调用ID不一致）和特性（子Agent温度、MCP预设）已合并。Zeroclaw完成频道选择性构建等5个PR合并，同时暴露多项高风险配置失效Bug。PicoClaw合并cron静默失败回归修复，并提交Agent协作总线等突破性PR。

### 2. 各项目活跃度对比

| 项目 | 活跃Issue数 | 开放/待合并PR数 | 版本发布 | 备注 |
|------|-------------|------------------|----------|------|
| OpenClaw | 463 | 378 | v2026.5.24-beta.1/2 | 社区热点 #75（106评论）、#59330（12👍） |
| NanoBot | 5（新开） | 11 | 无 | 2个Issue/7个PR已关闭/合并 |
| Zeroclaw | 47 | 45 | 无 | 合并PR涉及频道构建/推理兼容性/Codex流清理 |
| PicoClaw | 4（更新） | 8（估计） | nightly | 合并cron修复；Agent协作总线PR待审 |

*注：活跃Issue数取自日报中“新开/活跃”口径；开放PR数基于日报中“待合并”或“开放”数据估算。*

### 3. OpenClaw与同类对照（仅基于今日数据）

- **活动量**：OpenClaw当日处理近500条Issue和500条PR，远超其他项目（Zeroclaw各50条、NanoBot各十余条、PicoClaw各个位数），其维护者响应频率和社区参与规模为今日之最。
- **技术重点**：OpenClaw聚焦Gateway性能优化（复用频道目录读取）、统一Channel Broker协议（7个相关PR同时提交）、iMessage审批与UI配置Raw模式问题。相比之下，NanoBot更侧重Agent内部机制（Dream系统重构、工具循环检测），Zeroclaw主攻模块化构建（频道feature flag）与MCP集成，PicoClaw则关注渠道联通（微信多账号、WhatsApp原生）和轻量化部署。
- **社区讨论面**：OpenClaw涉猎范围最广——从顶层桌面应用（#75, 106条评论）到具体回归（Telegram通用错误回退），再到长期配置Bug（Raw模式禁用）。PicoClaw的长期议题（LM Studio连接、exec守卫误报）虽评论少但持续性强；Zeroclaw的讨论集中在配置失效与安全风险；NanoBot用户更主动提出Agent行为控制的技术设计方案。

### 4. 共同出现的技术方向

- **渠道/平台多路集成**：OpenClaw的Channel Broker系列PR、Zeroclaw的频道选择性构建（PR #6866）、PicoClaw的微信多账号（PR #2883）和WhatsApp原生模式修复（#2934），均指向扩展Agent可触达的通信渠道。PicoClaw还新增了Mastodon/Twilio等渠道的功能请求。
- **工具调用稳定性与安全管控**：NanoBot修复了工具调用ID不一致（#3984），并收到通用循环检测方案（#3986）；Zeroclaw报告MCP工具过滤失效（#6699）、web_fetch白名单无效（#5122）；PicoClaw的exec守卫误报（#1042）影响核心工具使用。不同项目均暴露出工具调度中的可预测性和安全约束不足。
- **Agent自主行为控制**：NanoBot的子Agent温度参数（#3969）、通用循环检测（#3985）；PicoClaw的技能依赖环境感知（#2936）；OpenClaw的审批自动化和白名单机制（iMessage表情反应审批）——社区对Agent的“越权”或“失控”行为提出更细粒度的约束需求。
- **长期积压的基础设施需求**：OpenClaw的Linux/Windows桌面应用（#75）与PicoClaw的LM Studio简易连接（#28）均从2月起至今无实质进展，表明跨桌面平台支持和本地模型集成仍是各项目共同的服务盲区。

### 5. 差异化定位分析

| 维度 | OpenClaw | NanoBot | Zeroclaw | PicoClaw |
|------|----------|---------|----------|----------|
| **功能侧重** | 全渠道中枢+审批安全+企业级部署 | 自我改进Agent（Dream）+工具循环护栏 | 高度模块化（feature flag）+MCP原生集成 | 轻量化+边缘设备+中文渠道（微信） |
| **目标用户** | 多平台重度用户、运维/安全团队 | 追求Agent自主性调优的开发者 | 需定制构建、重视MCP生态的团队 | Android/Termux用户、本地LLM爱好者 |
| **技术架构** | Rust重写核心，Gateway/Control UI分离 | Python，基于asyncio，社群驱动插件 | Rust，编译期选择频道，Gateway+WASM | Go？(PicoClaw repo未明确，但编译目标多为ARM) |
| **今日动态** | 修复回归、推动统一协议 | 完善测试、修复兼容性 | 模块化落地、暴露大量配置Bug | 修复cron、引入Agent协作总线 |
| **社区活跃深度** | 巨量Issue/PR，但响应速度分化（高频Bug无人认领） | 小规模但高产出（5个Issue带动3个合并PR） | 中等规模，但高危Bug积压严重 | 人数少，但长期议题坚持度高 |

### 6. 社区活跃度分层

- **第一梯队（极高活跃）**: OpenClaw — 日均近千条互动，版本发布频繁，但部分P1 Bug（如#86184 Telegram消息丢失）尚无修复PR，显露出维护带宽与问题数量不匹配。
- **第二梯队（中等活跃）**: Zeroclaw — 日均50条Issue/PR，合并节奏稳定，但大量配置失效和安全类Bug（#5122, #5903）从3月起未解决。
- **第三梯队（低活跃但高质量）**: NanoBot — 日均5-10条Issue/PR，但每个议题往往伴随对应PR，产出效率高；PicoClaw — 日均少量更新，但关键修复与重大特性（Agent协作总线）正在评审。

### 7. 有证据支撑的观察

1. **多渠道统一协议成为跨项目共识**：OpenClaw集中提交7个Channel Broker迁移PR，Zeroclaw合并了频道选择性构建，PicoClaw推动微信/WhatsApp原生支持。各项目不约而同地将“一个Agent对接多个外部平台”作为基础设施升级方向。

2. **工具调用的可靠性与安全边界依然薄弱**：NanoBot修复了工具调用ID不一致，Zeroclaw报告MCP工具过滤失效，PicoClaw的exec守卫误报——三个独立项目在同一天都面临工具执行中的匹配/约束问题，说明该领域仍是成熟度短板。

3. **Agent自我调控能力需求从“功能可选”转向“必备护栏”**：NanoBot通用循环检测（#3985）、PicoClaw技能依赖检查（#2936）、OpenClaw审批白名单细化，均反映社区不再满足于“能调用”，而要求“安全地、可预期地调用”。

4. **长期用户诉求（桌面端、本地模型）缺乏项目方资源投入**：OpenClaw #75（106评论）与PicoClaw #28（20评论）均持续3个多月无实质进展，暗示项目维护者优先处理架构性重构和Bug，而非新平台/新API集成。

5. **今日暂无明确跨项目信号**：未发现任何项目间代码合并、协议兼容或交叉贡献的证据。各项目仍处于独立演进阶段。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，以下是为您生成的 NanoBot 项目 2026-05-25 项目动态日报。

---

# NanoBot 项目动态日报 | 2026-05-25

## 今日活动概览

过去 24 小时内，NanoBot 项目继续保持活跃的开发节奏。共收到 5 个新 Issue 和 18 个 Pull Request，其中 2 个 Issue 和 7 个 PR 已被关闭/合并。社区贡献显著，主要集中在核心功能的优化（Dream 系统重构）、新提供者支持（Step Plan）、以及 Agent 协作机制的扩展。在 Bug 修复方面，一项关于 OpenAI 兼容工具调用 ID 不一致的关键问题得到了解决。

## 版本发布
无

## 项目进展

过去 24 小时内，项目在功能完善和问题修复方面取得了重要进展，以下是为核心的已合并/关闭 PR：

- **基准测试与 Prompt 优化 (#3920)**: 合并了 `chengyongru` 的 PR，该 PR 基于系统基准测试结果，对上下文压缩 Prompt (`consolidator_archive.md`) 进行了优化，提升了决策合理性。
- **新增 Step Plan 提供者 (#3988)**: 由 `morandot` 提交，为 StepFun 的 `step_plan` 订阅服务添加了专用 Provider，遵循现有模式集成。
- **修复工具调用 ID 不一致 (#3984)**: `Yuxin-Lou` 修复了 Issue #3980，确保在通过 `antchat` 代理的 OpenAI 兼容 API（如 GLM-4.7、Kimi 2.6）中，工具调用 ID 与结果 ID 保持一致。
- **完整的 MCP 预设设置与能力展示 (#3979)**: `Re-bin` 完成的 PR，将 MCP 设置升级为 WebUI 的一等公民功能，包括预设目录、连接测试、热重载和聊天中的活动行展示。
- **支持子 Agent 采样温度 (#3975)**: 社区成员 `04cb` 贡献的 PR，为 `spawn` 工具增加了可选的 `temperature` 参数，允许用户为不同子 Agent 设置不同的采样温度，实现更灵活的任务分配。

## 社区热点

今日社区讨论主要围绕两个核心功能请求展开，尽管评论数不多，但其提出的问题具有共性，反映了用户对 Agent 稳定性和可控性的深层需求：

1.  **通用工具循环检测与速率限制 (#3986, #3985)**
    - **链接**: [Issue #3986](https://github.com/HKUDS/nanobot/issues/3986)，[PR #3985](https://github.com/HKUDS/nanobot/pull/3985)
    - **诉求**: 用户 `@codeLong1024` 详细列举了 LLM 在调用工具时常见的“死循环”行为（如同参数重复调用、短时间疯狂调用等），指出现有循环检测仅覆盖了 `web_search` 等特定工具，呼吁建立一个通用的护栏机制。作者同时提交了对应的 PR #3985 来实现此功能。
    - **分析**: 这是一个典型的生产环境痛点。随着 Agent 自主性增强，缺乏通用的循环与速率限制会严重影响用户体验、浪费计算资源，并可能导致意外行为。这表明社区对 Agent 行为的鲁棒性和可预期性有很高期待。

2.  **Dream 系统的“饥饿”与实时学习问题 (#3973, #3990)**
    - **链接**: [Issue #3973](https://github.com/HKUDS/nanobot/issues/3973)，[PR #3990](https://github.com/HKUDS/nanobot/pull/3990)
    - **诉求**: 用户 `@chxuan` 指出了 Dream 系统作为自我改进机制的两大局限：一是过度依赖单一的 `history.jsonl` 文件，缺乏对外部知识库的利用；二是无法实现实时学习。这与开发者的 PR #3990 高度相关，该 PR 正试图重构 Dream 系统的合并流程。
    - **分析**: 该项目动态显示了社区反馈与开发行动的同频共振。用户对 Dream 系统“健忘”的批评，促使开发者立即着手优化其内部架构，将分析与执行合并为单阶段，寻求效率提升。这表明项目对社区核心反馈的响应是迅速的。

## Bug 与稳定性

- **[严重] 工具调用 ID 不一致 (已修复)**: Issue #3980 报告了在使用 OpenAI 兼容 API 时，Assitant 消息中的 `tool_call_id` 与对应 Tool 结果消息中的 `tool_call_id` 不一致，导致追踪链断裂。此问题已通过 PR #3984 修复，对依赖工具调用溯源的用户至关重要。
    - **链接**: [Issue #3980](https://github.com/HKUDS/nanobot/issues/3980), [PR #3984](https://github.com/HKUDS/nanobot/pull/3984)

- **[回归] Windows 下 Shell 输出问题 (已修复)**: 长期存在的 Issue #1678 报告了在 Windows 系统上，使用 `asyncio.create_subprocess_shell()` 处理长时间运行的子进程时会导致 `communicate()` 永久挂起。该问题已通过 PR #1678 使用临时文件替代管道的方式解决。
    - **链接**: [Issue #1678](https://github.com/HKUDS/nanobot/issues/1678), [PR #1678](https://github.com/HKUDS/nanobot/pull/1678)

- **[测试] 新增 Runner 层测试覆盖**: 社区成员 `yu-xin-c` 提交了两个测试相关的 PR，增加对 Agent Runner 的模块化测试覆盖。PR #3983 测试了被阻断工具调用的场景，PR #3982 则创建了一个可复用的脚本化 Agent 测试框架，这将有助于提升项目稳定性，防止未来回归。
    - **链接**: [PR #3983](https://github.com/HKUDS/nanobot/pull/3983), [PR #3982](https://github.com/HKUDS/nanobot/pull/3982)

## 功能请求归类

- **提供者兼容性**:
    - **Anthropic 内容块类型 ( #3993)**: 用户 `@mraad` 报告，当工具返回裸字典时，Anthropic Provider 会因缺失 `type` 字段而报错，建议自动强制转换为文本块。
        - **链接**: [Issue #3993](https://github.com/HKUDS/nanobot/issues/3993)

- **Agent 行为控制**:
    - **通用循环检测与速率限制 ( #3986)**: 用户 `@codeLong1024` 提出为所有工具增加循环检测和速率限制护栏。该功能已有对应 PR #3985 处于开放状态。
        - **链接**: [Issue #3986](https://github.com/HKUDS/nanobot/issues/3986), [PR #3985](https://github.com/HKUDS/nanobot/pull/3985)
    - **子代理采样温度 ( #3969)**: 用户 `@codeLong1024` 提出的支持 `spawn` 工具温度参数的功能，已通过 PR #3975 实现并合并。
        - **链接**: [Issue #3969](https://github.com/HKUDS/nanobot/issues/3969), [PR #3975](https://github.com/HKUDS/nanobot/pull/3975)

- **系统自改进**:
    - **Dream 系统增强 ( #3973)**: 用户 `@chxuan` 提出 Dream 系统应利用外部知识并支持实时学习，以解决当前“饥饿”问题。与此同时，开发者 PR #3990 正在对其进行底层重构。
        - **链接**: [Issue #3973](https://github.com/HKUDS/nanobot/issues/3973), [PR #3990](https://github.com/HKUDS/nanobot/pull/3990)

## 用户反馈摘要

- **兼容性痛点**: 用户在 Issue #3993 中反馈的 `Anthropic` 内容块类型问题，是实际使用中遇到的兼容性障碍。这表明在支持多样化的 LLM 提供商时，需要更精细地处理不同 API 的差异。
- **行为可控性需求**: Issue #3986 和 #3969 的提出者 `@codeLong1024` 提供了非常具体的场景描述（如 `grep` 重复调用、`spawn` 子 Agent 温度需求），清晰表达了用户对 Agent 行为进行精细化控制和约束的强烈需求。
- **功能可实现性的验证**: Issue #3973 的提出者 `@chxuan` 对 Dream 系统的局限性进行了有理有据的分析，其批评与开发者的改进方向一致，从一个侧面印证了项目维护者对用户反馈的重视以及修复方向的有效性。

## 待处理积压

- **自 2026-05-24 以来保持开放的关键 PR**:
    - **PR #3992**: “feat(agent-collab) - enable cross agent messaging” - 跨实例 Agent 协作功能，功能复杂，影响面大，可能还需要更多评审。
    - **PR #3991**: “feat(cli): add HyperFrames CLI app” - 新增 CLI 插件系统，涉及项目架构调整。
    - **PR #3985**: “feat: loop guard v2.0” - 回应社区普遍关切的通用循环检测功能，建议关注其评审进度。
    - **PR #3978**: “fix(agent): propagate maxConcurrentSubagents config” - 修复一个配置未能正确传递的 Bug，虽小但影响并发控制。
    - **PR #3977**: “feat(webui): switch model preset from composer model chip” - WebUI 易用性功能改进。
    - **PR #3968**: “feat(command): add /skill slash command” - 方便用户发现可用技能的命令，直接回应了用户的诉求。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 Zeroclaw (github.com/zeroclaw-labs/zeroclaw) 项目数据，以下是为您生成的 2026-05-25 项目动态日报。

---

# Zeroclaw 项目日报 - 2026-05-25

## 1. 今日活动概览

过去24小时内，Zeroclaw 项目保持高度活跃。共产生50条 Issue 更新，其中新开/活跃47条，关闭3条；产生50条 PR 更新，其中待合并45条，已合并/关闭5条。项目未发布新版本，但合并和提交活动频繁，显示社区正积极贡献代码并修复问题。值得注意的是，多个高优先级（P1）Bug 在讨论中取得进展，部分已有关联的修复 PR。

## 2. 版本发布

无。

## 3. 项目进展

本日有5个PR被合并或关闭，推进了以下工作：

- **频道选择性构建**：PR [#6866](https://github.com/zeroclaw-labs/zeroclaw/pull/6866) 已合并。此增强功能允许用户通过编译特性（feature flags）有选择性地构建频道，减少不必要的依赖和编译时间。这是对平台模块化建设的重要一步。
- **推理字段兼容性修复**：PR [#6606](https://github.com/zeroclaw-labs/zeroclaw/pull/6606) 已合并。此修复旨在解决不同兼容提供商（如 OpenAI、Anthropic 等）在存储和重放助手工具调用时，推理（reasoning）字段名不一致的问题，提升了多提供商支持的健壮性。
- **Codex流清理异常处理**：PR [#6712](https://github.com/zeroclaw-labs/zeroclaw/pull/6712) 已合并。修复了 OpenAI Codex 流清理时的一个潜在 panic（恐慌）问题，改为传播可恢复的错误，增强了稳定性。
- **音频生成功能**：PR [#6842](https://github.com/zeroclaw-labs/zeroclaw/pull/6842) (状态：已关闭) 推测为对音频生成功能的实现或讨论的终结，但具体细节需查看链接确认。
- **其他合并的PR**：还包含了一些文档修复（如 [#6590](https://github.com/zeroclaw-labs/zeroclaw/pull/6590)）和小型 Bug 修复。

## 4. 社区热点

本日讨论最活跃的议题集中在重构治理和关键功能缺陷上：

- **工作流程治理RFC**：Issue [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) 讨论了“工作车道（Work Lanes）、看板自动化和标签清理”的 RFC（请求评议）。此议题旨在优化项目自身的工作流，减少维护者负担，获得6条评论，是社区对项目内部治理和开发流程改进的体现。
- **MCP工具过滤与加载Bug**：Issue [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) 是一个高风险 Bug，指出 `tool_filter_groups` 配置对 MCP 工具无效，并且与延迟加载（deferred_loading）功能没有集成。该问题获得6条评论，社区成员 `nick-pape` 详细分析了两个独立 Bug 的根源，对代理（Agent）工具系统有重大影响。
- **频道工具调用显示缺失**：Issue [#6856](https://github.com/zeroclaw-labs/zeroclaw/issues/6856) 报告了在 schema v3 中，频道（Channel）响应中缺失了 `show_tool_calls` 选项，导致无法查看工具调用详情。这是一个普遍影响用户体验的问题，获得了5条评论。

## 5. Bug 与稳定性

本日报告了多个严重级别的 Bug，按严重程度排列如下：

- **高风险 (Risk: High)**:
    - `[Bug]: web_fetch allowed_private_hosts list is essentially useless` ([#5122](https://github.com/zeroclaw-labs/zeroclaw/issues/5122)): 安全相关的Bug，`allowed_private_hosts` 白名单功能实效。
    - `[Bug]: Gemini 400 — assistant tool_call emitted as first non-system turn` ([#6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302)): 导致Gemini提供商调用失败的历史序列化问题。
    - `[Bug]: gateway can not use postgres` ([#6472](https://github.com/zeroclaw-labs/zeroclaw/issues/6472)): Gateway无法使用Postgres存储会话。
    - `tool_search not in default_auto_approve → deferred_loading+webhook silently hangs` ([#6721](https://github.com/zeroclaw-labs/zeroclaw/issues/6721)): MCP工具在非交互模式下因审批机制导致挂起和自动拒绝。
    - `MCP stdio child processes accumulate on daemon` ([#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903)): 长期存在的 MCP 子进程内存泄漏问题。
- **中风险 (Risk: Medium)**:
    - `[Bug]: show_tool_calls is missing from [channel]` ([#6856](https://github.com/zeroclaw-labs/zeroclaw/issues/6856)): 频道工具调用显示功能缺失。
    - `WASM plugin install path and runtime scan path diverge` ([#6254](https://github.com/zeroclaw-labs/zeroclaw/issues/6254)): WASM 插件安装与扫描路径不一致，导致插件不可见。
    - `slack bot_token needs to be in the configuration` ([#6844](https://github.com/zeroclaw-labs/zeroclaw/issues/6844)): Slack Bot Token必须写在配置文件中，不能使用环境变量。
    - `vision_provider silently ignored` ([#6841](https://github.com/zeroclaw-labs/zeroclaw/issues/6841)): 多模态配置中的视觉提供商被忽略。

**已有关联修复 PR 的 Bug**:
- 关于 `MCP stdio child processes accumulate` ([#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903)) 和 `tool_search not in default_auto_approve` ([#6721](https://github.com/zeroclaw-labs/zeroclaw/issues/6721))，目前尚未出现明确关联的修复 PR。
- Issue [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) 已被标记为 `status:accepted`，但暂无关联的修复 PR。

## 6. 功能请求归类

本日用户提出的新功能请求主要集中在连接性和自动化改进上：

- **新通道/渠道集成**:
    - 添加 **Mastodon (ActivityPub)** 频道 ([#6423](https://github.com/zeroclaw-labs/zeroclaw/issues/6423))：使代理能接入联邦宇宙。
    - 添加 **Twilio SMS** 频道 ([#6427](https://github.com/zeroclaw-labs/zeroclaw/issues/6427))：支持通过普通短信与代理交互。
    - 添加 **Rocket.Chat** 频道 ([#6435](https://github.com/zeroclaw-labs/zeroclaw/issues/6435))：支持与自托管的Rocket.Chat服务器集成。
    - 添加 **Zulip** 频道 ([#6437](https://github.com/zeroclaw-labs/zeroclaw/issues/6437))：支持Zulip协作平台集成。
- **功能增强**:
    - **Webhook重试机制** ([#5761](https://github.com/zeroclaw-labs/zeroclaw/issues/5761))：为Webhook频道添加指数退避重试逻辑，防止消息在瞬时故障时丢失。
    - **Shell命令钩子** ([#3696](https://github.com/zeroclaw-labs/zeroclaw/issues/3696))：为Shell命令工具添加前置/后置消息钩子，用于集成记忆、日志等功能。

## 7. 用户反馈摘要

从本日的 Issue 评论和报告中，可以提炼出以下真实用户痛点：

- **配置项失效**：用户反映 `tool_filter_groups` ([#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699))、`timeout_secs` ([#6723](https://github.com/zeroclaw-labs/zeroclaw/issues/6723))、`vision_provider` ([#6841](https://github.com/zeroclaw-labs/zeroclaw/issues/6841)) 等配置项被忽略或无效，导致期望行为与实际不符，需要反复调试，用户体验较差。
- **渠道集成体验不佳**：用户在启用 Slack 频道时，发现敏感的 `bot_token` 不能通过更安全的环境变量提供，必须硬编码在配置文件中 ([#6844](https://github.com/zeroclaw-labs/zeroclaw/issues/6844))。同时，Cron 任务的输出无法路由到已配置的频道 ([#6647](https://github.com/zeroclaw-labs/zeroclaw/issues/6647))，这限制了自动化工作流的实用性。
- **插件/工具管理困惑**：用户安装 WASM 插件后，由于路径扫描问题导致代理无法发现该插件 ([#6254](https://github.com/zeroclaw-labs/zeroclaw/issues/6254))。这表明插件的安装和加载流程存在设计或文档上的缺陷。

## 8. 待处理积压

以下为长期未响应或进展缓慢的重要 Issue，建议维护者关注：

- **高风险积压**:
    - `[Bug]: web_fetch allowed_private_hosts list is essentially useless` ([#5122](https://github.com/zeroclaw-labs/zeroclaw/issues/5122)): 老生常谈的安全漏洞，可能导致 SSRF 风险。
    - `[Bug]: MCP stdio child processes accumulate on daemon` ([#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903)): 长期存在的内存泄漏问题，影响守护进程稳定性。
    - `[Feature]: Pre/post message hooks for shell commands` ([#3696](https://github.com/zeroclaw-labs/zeroclaw/issues/3696)): 一个长期未解决但社区呼声较高的功能请求，从3月持续至今。
- **中等风险积压**:
    - `MemoryConfig.rerank_enabled / rerank_threshold scaffolded but no consumer` ([#6722](https://github.com/zeroclaw-labs/zeroclaw/issues/6722)): 定义了配置但未实现功能的“空壳”问题，容易误导用户。
    - `zeroclaw should log to stderr instead of stdout` ([#4721](https://github.com/zeroclaw-labs/zeroclaw/issues/4721)): 一个基础但影响广泛的 CLI 行为改进请求，长期处于开放状态。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，这是 2026 年 5 月 25 日的 PicoClaw 项目动态日报。

---

## PicoClaw 项目动态日报 — 2026-05-25

### 1. 今日活动概览

过去 24 小时内，PicoClaw 项目活动频繁，共产生 4 条 Issue 更新和 10 条 PR 更新。项目发布了 `v0.2.9-nightly.20260525` 版本。贡献者提交了多个重要的功能性 PR，包括一个旨在建立内部 Agent 协作总线的重大 PR（#2937），以及对技能加载（#2936）、微信多账号（#2883）和消息总线健康度（#2906）等核心功能的修复与增强。社区对长期存在的功能请求和 Bug 报告（如 #28、#1042）讨论持续。

### 2. 版本发布

- **Nightly 构建（v0.2.9-nightly.20260525.ab6d3946）**
  - **变更说明**: 该版本为自动化 nightly 构建，未提供具体的破坏性变更或迁移注意事项。
  - **注意事项**: 官方提示此版本可能不稳定，请谨慎使用。
  - **链接**: https://github.com/sipeed/picoclaw/compare/v0.2.9...main

### 3. 项目进展

今日已合并/关闭了 2 个 PR，同时有多个重要 PR 保持开放并取得进展。

- **已合并/关闭**
  - **修复 cron 定时任务静默失败问题（#2938）**: PR `fix(cron): add missing action arg for command job execution` 已被合并。该修复解决了 `CronTool.ExecuteJob()` 因缺少 `"action": "run"` 参数而导致所有 cron 定时任务静默失败的问题。这是一个从 commit 3f1ac2... 引入的回归问题，直接影响所有使用该定时器功能的用户。
  - **修复 seahorse 检索工具作用域问题（#2759）**: 该 PR 已关闭（stale），其旨在限制 `short_grep` 和 `short_expand` 等检索工具默认作用于当前对话会话，防止越权访问其他会话数据。
  - **链接**: https://github.com/sipeed/picoclaw/pull/2938 | https://github.com/sipeed/picoclaw/pull/2759

- **开放中重要 PR**
  - **Agent 协作功能（#2937）**: 这是一个重量级 PR，引入了“Agent 协作总线”，提供持久化跨 Agent 通信能力，包括消息信箱、协作线程和结构化的消息协议。该特性将显著增强多 Agent 场景下的协同能力。
  - **技能依赖检查（#2936）**: PR `feat(skills): skip skills whose required binaries are missing on PATH` 解决了当系统缺失某些技能所需依赖（如 `agent-browser`）时，AI 模型仍会尝试调用并失败的问题。它会自动从 Agent 的提示词中过滤掉这些不可用的技能。
  - **链接**: https://github.com/sipeed/picoclaw/pull/2937 | https://github.com/sipeed/picoclaw/pull/2936

### 4. 社区热点

今日社区讨论最活跃的议题集中在长期未决的功能请求和工具使用体验上。

- **Issue #28 - LM Studio 简易连接请求**: 该 Issue 自 2026 年 2 月提出，累计已有 20 条评论。用户 `@Franzferdinan51` 希望有能力更强的开发者提供一种简单方式，使 PicoClaw 能够连接 LM Studio 本地模型。这反映了社区中部分用户希望通过图形化、更简便的方式集成本地大语言模型（LLM）提供商的诉求。
  - **链接**: https://github.com/sipeed/picoclaw/issues/28

- **Issue #1042 - exec 工具 `guardCommand` 方法问题**: 该 Bug 报告获得 13 条评论，已持续近三个月。用户 `@icyfire` 报告了当 `restrict_to_workspace` 启用时，`exec` 工具错误地拦截了像 `curl wttr.in/Beijing` 这类不涉及文件路径的命令。这表明现有的安全守卫机制（正则匹配）在判断用户意图时存在局限性，影响了工具的正常使用。
  - **链接**: https://github.com/sipeed/picoclaw/issues/1042

### 5. Bug 与稳定性

今日除修复外，无新增严重 Bug 报告。主要关注点在于对已有问题的修复。

- **紧急/严重**
  - **cron 定时任务静默失败回归（#2938）**: 这是今日最重要的 Bug 修复。PicoClaw 的定时任务功能因参数缺失而完全失效，且表现为静默失败，对依赖定时任务自动化流程的用户影响较大。**已有修复 PR 被合并。**
  - **WhatsApp 本地模式配置失败（#2934）**: 当用户配置 `type: "whatsapp"` 并设置 `use_native: true` 时，通道配置检测失败，阻碍了本地 WhatsApp 功能（基于 whatsmeow 库）的使用。**已有修复 PR (#2934) 正在等待合并。**
  - **链接**: https://github.com/sipeed/picoclaw/pull/2934

- **一般性**
  - **steering-chain 最终回复消息编辑错误（#2839）**: 描述表明，当用户在执行过程中进行“转向”操作（steering/follow-up）后，最终的用户回复可能会错误地编辑之前的“正在工作...”占位符消息，而不是发送新消息。该问题已被关闭（stale），标记为 Bug。
  - **链接**: https://github.com/sipeed/picoclaw/issues/2839

### 6. 功能请求归类

- **Provider 集成优化**
  - **LM Studio 简易连接（#28）**: 社区成员请求更简便地连接 LM Studio，以方便用户使用本地模型。
  - **链接**: https://github.com/sipeed/picoclaw/issues/28

- **工具与技能管理**
  - **技能依赖环境感知（#2936）**: 新 PR 旨在让 PicoClaw 在执行前自动识别并跳过那些系统环境中缺少必要依赖命令（二进制文件）的技能，提升 Agent 调用的准确性。
  - **链接**: https://github.com/sipeed/picoclaw/pull/2936

- **渠道与连接配置**
  - **微信多账号支持（#2883）**: 贡献者提交了支持配置多个微信账号的功能，满足不同使用场景（如个人与工作号分离）。
  - **WhatsApp 原生模式配置（#2934）**: 修复了配置检测的逻辑，以允许用户完全使用 `whatsmeow` 库的本地 WhatsApp 模式，而不必依赖第三方 bridge 服务。
  - **国际化文档支持（#2935）**: 新增繁体中文（台湾）的文档和前端国际化资源，以服务更广泛的华语用户群体。
  - **App 与 Runtime 稳定性**
  - **Agent 协作总线（#2937）**: 请求建立标准化的跨 Agent 通信机制，以支持更复杂的多 Agent 工作流。
  - **消息总线背压处理（#2906）**: 改进消息在队列满时的处理策略，从无限制阻塞改为有限等待，并增加每流丢弃统计和健康检查可见性。
  - **Agent 循环重载与 Panic 清理（#2904）**: 修复了 Agent 重载时的 goroutine 泄漏和 Panic 清理问题，提升系统稳定性。
  - **文件格式**: https://github.com/sipeed/picoclaw/issues/2837 请求在 AGENT.md 中通过 `frontmatter` 支持 `allow / deny / glob` 工具策略，以实现细粒度的权限控制。该 Issue 已被关闭（stale），但其所反映的多 Agent 权限管理需求是明确的。

### 7. 用户反馈摘要

- **痛点**: 用户 `@Franzferdinan51` 在 #28 中表达了因自身技能不足而无法实现与 LM Studio 集成的挫败感，希望获得更“简易”的解决方案。用户 `@icyfire` 在 #1042 中明确指出安全守卫机制的误报问题影响日常命令行工具（如 `curl`）的使用，带来了困扰。
- **使用场景**: PR #2902 的提交者 `@puneetdixit200` 通过贡献 Android Termux 指南，展示了 PicoClaw 在 ARM64 架构 Android 设备上作为终端应用的使用场景；PR #2883 的提交者 `@jiegehere` 提出了微信多账号的个人隐私与工作管理场景。

### 8. 待处理积压

- **Issue #28**: “Feat Request: LM Studio Easy Connect”。该问题自 2026 年 2 月提出，至今已有 3 个多月，尽管讨论活跃（20 条评论），但未被官方或社区成员认领解决。是社区期待但迟迟未落地的功能之一。
  - **链接**: https://github.com/sipeed/picoclaw/issues/28

- **Issue #1042**: “exec工具的guardCommand方法问题”。同样是一个历史悠久的 Bug（创建于 2026-03-04），可能导致用户安全地使用非文件路径的命令时频繁误报，影响核心工具的用户体验。已有 13 条评论，但尚未有对应的修复 PR。
  - **链接**: https://github.com/sipeed/picoclaw/issues/1042

- **PR #2883**: “支持微信多账号配置”（feat）。自 5 月 16 日提交以来已超过一周，且已有 2 次更新，目前仍处于开放/待合并状态。
  - **链接**: https://github.com/sipeed/picoclaw/pull/2883

</details>