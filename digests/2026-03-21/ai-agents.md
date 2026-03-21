# OpenClaw 生态日报 2026-03-21

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-03-21 00:56 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报（2026-03-21）

---

## 1. 今日速览

OpenClaw 社区活跃度持续高位运行，过去24小时内共处理 **500条 Issues** 和 **500条 Pull Requests**，其中新开/活跃 Issue 达 391 条，PR 合并/关闭率达 48.4%（242/500），显示出高强度开发与问题响应节奏。尽管无新版本发布，但核心功能迭代密集，尤其在多通道支持、模型兼容性与安全加固方面取得显著进展。社区对国际化、内存管理与认证机制的讨论热度居高不下，反映出项目正从“可用”向“易用”和“可扩展”阶段演进。

---

## 2. 版本发布

**无新版本发布**。最近一次稳定版本仍为 `v2026.3.13`，多个高优先级 Bug 修复已通过 PR 合并进入主干，预计将在下个热修复版本中集中发布。

---

## 3. 项目进展

今日共 **242个 PR 被合并或关闭**，重点进展包括：

- **模型与代理系统增强**：
  - ✅ 修复 Ollama 模型配置中 `options` 字段被丢弃的问题，支持 `num_ctx` 等参数传递（#51356）
  - ✅ 修复 Azure OpenAI 多轮对话中 reasoning block 残留导致的 400 错误（#51358）
  - ✅ 新增 GitHub Copilot 动态模型解析能力，支持任意未注册模型 ID 自动适配（#51325）

- **通道与集成优化**：
  - ✅ WhatsApp 支持 quote-reply 与 @mention 功能（#51059）
  - ✅ Feishu 通道现可正确读取 `blockStreamingDefault` 配置（#51127）
  - ✅ Telegram 支持自定义 `apiRoot` 以应对 DNS 封锁或自托管 Bot API 场景（#48842）

- **安全性与稳定性加固**：
  - ✅ 阻止 `auth.mode=none` 与 Tailscale 远程暴露组合带来的未授权访问风险（#51339）
  - ✅ 修复媒体抓取错误中 PII 信息泄露问题（#51344）
  - ✅ 防止孤立会话篡改自身 cron 配置（#51313）

- **用户体验改进**：
  - ✅ Web UI 中持久化保存 webchat 发送的图片（#51324）
  - ✅ 启用智能记忆默认配置，缓解“双会话”割裂感（#51341）

> 整体项目在**多模态交互、企业级部署安全、本地化模型支持**三大方向上迈出关键步伐。

---

## 4. 社区热点

### 🔥 最活跃 Issue：国际化支持呼声高涨
[#3460 Internationalization (i18n) & Localization Support](https://github.com/openclaw/openclaw/issues/3460)  
- **评论数：106** | **👍：4**  
- 社区强烈请求添加多语言支持，但维护团队明确表示“当前无带宽实现”。该 Issue 已成为功能路线图风向标，暗示未来可能通过插件机制或社区驱动方式推进。

### 🔧 高关注度技术债
[#49233 External Memory Provider API for Zero-Downtime Context Compaction](https://github.com/openclaw/openclaw/issues/49233)  
- **评论数：10**  
- 用户提出将内存管理外移至独立系统的 API 设计，以消除当前 30–60 秒上下文压缩导致的代理“黑屏期”。此提案直指架构瓶颈，已有开发者开始探讨实现路径。

### 📢 新模型支持需求激增
[#50265 Add GPT‑5.4 mini/nano models](https://github.com/openclaw/openclaw/issues/50265)  
- 用户要求及时同步 OpenAI 最新发布的轻量模型。结合 #51325 的 Copilot 动态解析 PR，表明项目正转向更灵活的模型发现机制，减少硬编码依赖。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 |
|--------|------|------|------|
| 🔴 **高危** | [#49191 Google Vertex ADC auth broken](https://github.com/openclaw/openclaw/issues/49191) | ADC 认证误传字面量 `<authenticated>` 导致 401 | 🟡 调查中 |
| 🔴 **高危** | [#45772 Gateway Heartbeat timer stops after 1–2 triggers](https://github.com/openclaw/openclaw/issues/45772) | v2026.3.8 引入的心跳定时器失效，影响连接保活 | 🟡 复现中 |
| 🟠 **中危** | [#44906 UI Bug: Context limit warning icon blocks chat view](https://github.com/openclaw/openclaw/issues/44906) | macOS 上警告图标异常缩放，遮挡对话 | ✅ 已有修复 PR（未列） |
| 🟠 **中危** | [#49088 web_fetch fails silently on nvm-installed Node.js](https://github.com/openclaw/openclaw/issues/49088) | 缺少 TLS 根证书导致 HTTPS 请求失败 | 🟡 需环境适配 |
| 🟢 **低危** | [#51085 STT mic button blocked by Permissions-Policy](https://github.com/openclaw/openclaw/issues/51085) | 麦克风权限被网关安全头阻止 | ✅ 文档/配置修复中 |

> 注：多个回归类 Bug（如 Slack 事件丢失、WebSocket 握手超时）已在近期版本中修复并验证。

---

## 6. 功能请求与路线图信号

| 功能方向 | 代表 Issue | 进展信号 |
|--------|-----------|--------|
| **国际化 (i18n)** | #3460 | 社区强烈需求，但官方暂无计划；可能转向插件化实现 |
| **外部记忆系统** | #49233 | 架构级提案，若实现将极大提升可用性；尚无 PR |
| **Tavily 搜索集成** | #12034（已关闭） | 用户曾提议替代 Brave Search；结合 #11399（插件化搜索），未来可能通过扩展支持 |
| **ClawHub 技能市场** | #50090 | 社区呼吁完善技能发布流程；当前缺乏标准化工具链 |
| **轻量化部署** | #51181（PR） | 新增 `--lightweight` 标志跳过未用通道插件，响应资源受限场景需求 |

> 下一版本 likely 聚焦：**安全加固 + 模型兼容性 + 通道稳定性**，i18n 可能仍以社区 RFC 形式推进。

---

## 7. 用户反馈摘要

- **痛点**：
  - “升级后 cron 任务全部超时，回滚才正常”（#40868）→ 反映版本兼容性测试不足。
  - “图片发出去就消失， compaction 后没了”（#47930）→ 媒体持久化逻辑不一致。
  - “两个渠道的 agent 像陌生人，记忆不共享”（#51341 讨论）→ 默认记忆策略需优化。

- **满意点**：
  - “WhatsApp 终于支持回复和@了！”（#51059 评论）
  - “Ollama 终于能传 num_ctx 了，长上下文不再崩”（#51356 相关反馈）

- **典型场景**：
  - 企业用户关注 **Tailscale + 无认证模式的安全性**（#51339）；
  - 开发者依赖 **本地模型（Ollama/Qwen）+ 工具调用** 组合；
  - 普通用户希望 **语音输入、跨设备记忆同步** 更无缝。

---

## 8. 待处理积压

| 类型 | Issue/PR | 积压时长 | 提醒 |
|------|--------|--------|------|
| 🐢 **长期未响应 Issue** | [#21001 Telegram reactionNotifications=own not working](https://github.com/openclaw/openclaw/issues/21001) | >50天 | 标记为 `stale`，需确认是否仍复现 |
| 🐢 **长期未响应 Issue** | [#22362 Google Chat ‘ambiguous webhook target’](https://github.com/openclaw/openclaw/issues/22362) | >50天 | 通道维护者需介入排查 |
| ⚠️ **高价值未合并 PR** | [#43366 Discord autoThreadName ‘generated’ strategy](https://github.com/openclaw/openclaw/pull/43366) | 10天 | 功能完整，等待 review |
| ⚠️ **安全相关未闭环** | [#45876 Recognize GOOGLE_CLOUD_API_KEY](https://github.com/openclaw/openclaw/pull/45876) | 7天 | 需 `@openclaw/secops` 审核 |

> 建议维护团队优先处理 **安全类 PR** 和 **标记为 regression 的 Issue**，以保障生产环境稳定性。

--- 

**报告生成时间：2026-03-21**  
**数据来源：OpenClaw GitHub Repository**

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告（2026-03-21）

---

## 1. 生态全景

当前个人 AI 助手与自主智能体开源生态呈现**高活跃度、多架构并行、企业级集成深化**的态势。主流项目普遍聚焦于**多通道通信稳定性、本地模型兼容性、安全策略精细化**三大核心方向，同时向**可观测性增强、记忆系统外化、部署轻量化**演进。社区驱动特征显著，但安全默认策略与用户可控性之间的张力日益凸显，反映出从“可用”向“易用+可信”的转型压力。

---

## 2. 各项目活跃度对比

| 项目 | Issues（新开/活跃） | PR（待合并/已合并） | 新版本发布 | 健康度评估 |
|------|---------------------|----------------------|-------------|------------|
| **OpenClaw** | 391 / 500 | 258 / 242 | ❌（v2026.3.13） | ⭐⭐⭐⭐☆（高强度开发，安全响应快） |
| **NanoBot** | 20 / 38 | 37 / 32 | ❌（v0.1.4.post5） | ⭐⭐⭐⭐（社区高效协作，通道适配集中） |
| **Zeroclaw** | 23 / 50 | 24 / 26 | ✅（v0.5.4 + beta） | ⭐⭐⭐☆☆（功能激进，安全争议大） |
| **PicoClaw** | 20 / 23 | 33 / 29 | ✅（nightly） | ⭐⭐⭐⭐（稳定迭代，文档完善） |
| **NanoClaw** | 4 / 7 | 23 / 2 | ❌ | ⭐⭐⭐☆☆（功能扩展快，积压需关注） |
| **IronClaw** | 29 / 40 | 35 / 15 | ✅（v0.21.0） | ⭐⭐⭐⭐☆（企业级特性强，迁移风险存） |
| **LobsterAI** | 35 / 36 | 15 / 11 | ✅（2026.3.20） | ⭐⭐⭐☆☆（高反馈密度，稳定性待提升） |
| **TinyClaw** | 0 / 0 | 1 / 4 | ✅（v0.0.16） | ⭐⭐⭐⭐☆（极简体验，架构清晰） |
| **Moltis** | 3 / 3 | 5 / 1 | ❌ | ⭐⭐⭐（低活跃，依赖维护良好） |
| **CoPaw** | 20 / 50 | 27 / 23 | ✅（v0.1.0.post1） | ⭐⭐⭐⭐（高协作，企业通道痛点突出） |
| **ZeptoClaw** | 2 / 2 | 0 / 0 | ❌ | ⭐⭐⭐（设计驱动，无代码变更） |
| **EasyClaw** | 1 / 1 | 0 / 0 | ✅（v1.7.3） | ⭐⭐☆☆（维护模式，跨平台 Bug 待修） |

> 注：健康度综合考量开发节奏、Issue 响应、安全修复、文档完整性。

---

## 3. OpenClaw 在生态中的定位

**优势**：  
- **规模最大、响应最快**：单日处理 500 Issues + 500 PRs，合并率 48.4%，体现工业化协作能力；  
- **企业级集成最成熟**：支持 WhatsApp、Feishu、Telegram、Slack 等主流通道的高级功能（如 quote-reply、E2EE、cron 安全隔离）；  
- **安全架构领先**：主动阻断 `auth.mode=none + Tailscale` 组合风险，修复 PII 泄露，展现纵深防御意识。

**技术路线差异**：  
- 采用**中心化网关 + 插件化通道**架构，强调配置统一性与运维可控性，区别于 NanoBot/Zeroclaw 的轻量级 agent-first 设计；  
- 推动**外部记忆 API**（#49233）与**动态模型发现**（#51325），向解耦架构演进，而 TinyClaw/IronClaw 仍以内聚为主。

**社区规模**：  
- GitHub 互动量（Issues+PRs）约为第二名 CoPaw 的 2.5 倍，用户覆盖从开发者到企业运维，生态辐射力最强。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|--------|--------|--------|
| **多通道稳定性** | OpenClaw, NanoBot, CoPaw, PicoClaw | 飞书话题群回复、Telegram 消息重复、WhatsApp 媒体上传等企业 IM 场景适配 |
| **本地模型兼容性** | OpenClaw (#51356), NanoBot (#2293), CoPaw (#1076) | Ollama/Qwen 工具调用中断、num_ctx 参数传递、llama.cpp 加载失败 |
| **安全策略可控性** | Zeroclaw (#1478), OpenClaw (#51339), LobsterAI (#543) | 反对“零信任默认”，要求开放 `unsafe_mode` 或分级安全配置 |
| **可观测性与调试** | NanoBot (#2154), IronClaw (LRU 缓存), CoPaw (#1751) | LLM 调用轨迹追踪、token 消耗统计、错误上下文可视化 |
| **记忆系统外化** | OpenClaw (#49233), Zeroclaw (Mem0), NanoClaw (#1256) | 消除上下文压缩“黑屏期”，支持 pgvector/图数据库后端 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|------|--------|--------|----------------|
| **OpenClaw** | 企业级多通道网关 | 中大型组织、运维团队 | 中心化配置管理，强安全默认，插件化通道 |
| **NanoBot** | 轻量 agent + 工具调用 | 开发者、自动化爱好者 | Python 优先，强调快速 onboarding 与本地模型集成 |
| **Zeroclaw** | 安全优先的自主代理 | 安全敏感型用户、研究者 | Rust 实现，默认拒绝策略，MCP 深度集成 |
| **TinyClaw** | 零配置个人助手 | 非技术用户、极简主义者 | 单命令启动，自动依赖检测，CLI-first |
| **IronClaw** | 工作流自动化平台 | 企业流程工程师 | PostgreSQL 存储，webhook 触发，结构化回退机制 |
| **CoPaw** | 多代理协作框架 | 研究团队、复杂任务场景 | Agent 编排、沙箱执行、Discord/钉钉社区驱动 |

---

## 6. 社区热度与成熟度

- **快速迭代层**（日更 PR >20）：  
  **OpenClaw、CoPaw、IronClaw、PicoClaw** 处于功能爆发期，日均合并 PR 超 15 个，侧重通道增强与稳定性修复。

- **质量巩固层**（周更 PR <10，Issue 响应慢）：  
  **EasyClaw、Moltis、ZeptoClaw** 进入维护模式，重点解决跨平台兼容性与架构债务，适合生产环境但创新放缓。

- **新兴探索层**（高概念讨论，低代码产出）：  
  **ZeptoClaw** 聚焦 Firecracker VM 模板化部署，**NanoClaw** 推进 A2A 代理通信，代表下一代架构方向。

---

## 7. 值得关注的趋势信号

1. **安全策略需分级**：Zeroclaw 用户强烈抗议“默认拒绝”，OpenClaw 已引入智能记忆默认配置，预示**“安全分级 + 用户可控”**将成为主流设计范式。

2. **记忆系统走向外化**：OpenClaw、Zeroclaw、NanoClaw 同时推进外部记忆 API 或 Mem0 集成，**上下文管理将从内置转向可插拔服务**，利好长期对话与知识沉淀。

3. **企业 IM 集成成刚需**：飞书、钉钉、企业微信相关 Issue 在 NanoBot、CoPaw、LobsterAI 中占比超 40%，**私有化部署 + 国内 IM 通道支持**是商业化关键。

4. **可观测性即竞争力**：从 NanoBot 的 LLM Trace 请求到 IronClaw 的 token 统计，**调试能力直接影响开发者留存**，未来可能成为核心卖点。

5. **轻量化与模块化并行**：TinyClaw 的“零配置”与 OpenClaw 的“插件化”看似对立，实则共同指向**降低使用门槛**，开发者应平衡“开箱即用”与“灵活扩展”。

> **对开发者的建议**：优先选择具备活跃安全响应机制（如 OpenClaw 的 secops 标签）和清晰通道兼容性矩阵的项目；若面向企业用户，需重点验证飞书/钉钉等国内 IM 的稳定性；探索记忆外化与可观测性模块可构建长期技术壁垒。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-03-21）

---

## 1. 今日速览

NanoBot 社区活跃度持续高涨，过去24小时内共产生 **38条 Issues 更新** 和 **69条 PR 更新**，其中 Issues 新开/活跃20条、关闭18条，PR 待合并37条、已合并/关闭32条，体现出高效的协作节奏与问题响应能力。尽管无新版本发布，但多个关键功能增强与稳定性修复被合并，项目整体向更健壮、可扩展的方向推进。社区对飞书、Telegram、WhatsApp 等通道的集成问题反馈集中，反映出多平台适配仍是核心挑战。

---

## 2. 版本发布

**无新版本发布**。当前主线仍为 `v0.1.4.post5`，但多个重要 PR 已合并至 nightly 分支，预计将在下个版本中体现。

---

## 3. 项目进展

今日多个关键 PR 被合并，显著提升系统功能与稳定性：

- **[#2313 feat: add Rust nanobot MVP](https://github.com/HKUDS/nanobot/pull/2313)**：引入基于 Rust 的轻量级 MVP 实现，涵盖 CLI、Agent 循环、工具调用与 Telegram 通道支持，为未来性能优化和多语言架构探索奠定基础。
- **[#2306 feat(channels): add base64 media upload for QQ and WeCom](https://github.com/HKUDS/nanobot/pull/2306)**：解决 QQ 与 WeCom 通道依赖公网 URL 上传文件的限制，支持 base64 直传，提升私有化部署场景下的可用性。
- **[#2310 docs: add github copilot oauth setup and exclude from generated config](https://github.com/HKUDS/nanobot/pull/2310)**：优化 onboarding 流程，明确 GitHub Copilot OAuth 配置指引，减少用户配置困惑。
- **[#2308 [bug] Fix Flask port reuse error on wecom_app restart](https://github.com/HKUDS/nanobot/pull/2308)**：修复 WeCom 通道重启时因端口占用导致的启动失败问题，提升服务稳定性。
- **[#2299 Add files via upload](https://github.com/HKUDS/nanobot/pull/2299)**：社区贡献者提交未指明内容，需维护者进一步审查其价值与合规性。

此外，飞书话题群回复支持（[#2307](https://github.com/HKUDS/nanobot/pull/2307)）、Telegram 网络错误日志降噪（[#2272](https://github.com/HKUDS/nanobot/pull/2272)）、Agent 评估框架（[#2283](https://github.com/HKUDS/nanobot/pull/2283)）等增强功能已提交至 nightly 分支，预示下一版本将强化可观测性与测试能力。

---

## 4. 社区热点

以下 Issues 引发高度关注，反映用户核心诉求：

- **[#2235 [bug] Telegram responses show twice](https://github.com/HKUDS/nanobot/issues/2235)**（👍6）：用户反馈 Telegram 消息重复显示，疑似流式响应机制缺陷，影响体验。已有开发者推测与“伪流式”实现相关，亟待定位修复。
- **[#1922 I've created [nanobot-webui], A self-hosted web management panel for nanobot](https://github.com/HKUDS/nanobot/issues/1922)**（👍6）：社区成员发布自研 Web 管理面板，支持多用户、UI 配置技能与通道，获积极反响，体现对可视化运维工具的强烈需求。
- **[#2154 建议支持LLM TRACE （轨迹可观测）](https://github.com/HKUDS/nanobot/issues/2154)**：用户呼吁内置 LLM 调用轨迹追踪接口，便于调试与问题溯源，避免自行侵入式修改代码，指向可观测性架构短板。
- **[#2256 [good first issue] 飞书话题群bot回复问题](https://github.com/HKUDS/nanobot/issues/2256)**：指出飞书话题群中 Bot 应在原话题线程内回复，而非新开对话，已有对应 PR [#2307] 正在实现，显示社区协作效率。

---

## 5. Bug 与稳定性

按严重程度排序：

| 问题 | 严重性 | 状态 | 相关链接 |
|------|--------|------|---------|
| Telegram 消息重复显示 | 高（影响核心交互） | 未修复 | [#2235](https://github.com/HKUDS/nanobot/issues/2235) |
| Ollama 本地模型执行工具时对话静默中断 | 高（功能阻断） | 未修复 | [#2293](https://github.com/HKUDS/nanobot/issues/2293) |
| DashScope 不支持 `tool_choice="required"` 导致内存归档失败 | 中（特定模型兼容性问题） | 已关闭（疑似配置或文档问题） | [#1927](https://github.com/HKUDS/nanobot/issues/1927) |
| WeCom 通道 Flask 端口重用错误 | 中（服务重启失败） | **已修复**（PR [#2308] 合并） | [#2308](https://github.com/HKUDS/nanobot/pull/2308) |
| OpenRouter API 间歇性 JSON 解析异常 | 中（偶发性故障） | 未修复 | [#2288](https://github.com/HKUDS/nanobot/issues/2288) |

> 注：部分“已关闭”Issue 可能因信息不足或复现困难被关闭，但问题仍可能存在。

---

## 6. 功能请求与路线图信号

用户提出的新需求中，以下具备较高采纳可能性：

- **LLM 轨迹可观测性（Trace）**：[#2154](https://github.com/HKUDS/nanobot/issues/2154) 获得关注，结合 PR [#2283] 引入的评估框架，未来可能扩展为统一可观测平台。
- **飞书话题群线程回复**：已由社区开发者主动实现（[#2307]），预计将快速合入 nightly。
- **多搜索 provider 自动降级**：PR [#2113] 已实现 WebSearchTool 多 provider 回退机制，提升工具鲁棒性。
- **Rust 版本 MVP**：[#2313] 的合并标志着项目开始探索高性能替代实现，可能影响长期架构演进。
- **上下文变量（ContextVar）用于工具路由**：[#2220] 提出异步安全加固方案，适合纳入 nightly 测试。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实声音：

- **痛点**：
  - 多通道配置复杂，尤其飞书长连接、WeCom Docker 部署易出错（[#215], [#60]）。
  - 本地模型（如 Ollama/qwen）在工具调用时行为异常或中断（[#2293]）。
  - 缺乏官方 Web UI，依赖手动编辑 JSON 配置（[#1922] 间接反映）。
- **满意点**：
  - 交互式配置向导 `nanobot onboard` 获正面评价（[#2018], [#2019]）。
  - 社区响应迅速，如飞书话题回复功能从 Issue 到 PR 仅数小时。
- **使用场景**：
  - 企业内私有化部署（飞书/钉钉/企业微信）。
  - 本地小模型 + 工具调用构建轻量自动化助手。
  - 多平台消息桥接（WhatsApp ↔ Telegram ↔ Feishu）。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，建议维护者优先关注：

- **[#1418 DingTalk channel: Agent cannot see sender name, only staffId](https://github.com/HKUDS/nanobot/issues/1418)**（2026-03-02 创建）：影响钉钉通道用户体验，需补充用户信息映射逻辑。
- **[#1864 DingTalk用户侧不支持上传文件](https://github.com/HKUDS/nanobot/issues/1864)**（2026-03-11 创建）：文件交互能力缺失，限制工作流自动化。
- **[#2220 Proposal: use ContextVar for task-local tool routing context](https://github.com/HKUDS/nanobot/issues/2220)**（2026-03-18 创建）：涉及异步安全架构改进，适合在 nightly 验证。
- **[#2129 Add Microsoft Teams channel](https://github.com/HKUDS/nanobot/pull/2129)**（2026-03-17 创建）：重要通道扩展，但尚未进入 review 流程。

> 建议：对超过 7 天未响应的 PR 主动 ping 作者或分配 reviewer，避免贡献流失。

--- 

**总结**：NanoBot 正处于快速迭代期，社区驱动特征明显。尽管存在多通道稳定性与可观测性短板，但高活跃度与高效协作机制保障了项目健康度。建议加强 nightly 分支的测试覆盖，并考虑将社区优秀插件（如 nanobot-webui）纳入生态推荐。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报（2026-03-21）

---

## 1. 今日速览

Zeroclaw 在 2026-03-21 继续保持高活跃度，过去24小时内处理了 **50条 Issues**（新开/活跃23条，关闭27条）和 **50条 PRs**（待合并24条，已合并/关闭26条），并发布了 **10个新版本**，涵盖稳定版与 beta 版迭代。社区对安全策略、工具链兼容性及多通道支持存在显著争议，同时开发团队正积极推进 MCP 集成、内存架构升级与 Slack/QQ 等通道增强功能。整体项目处于快速演进阶段，但部分核心功能（如 Web Search、MCP 工具注册）仍存在阻塞性缺陷。

---

## 2. 版本发布

### 最新稳定版：v0.5.4（[Release](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.5.4)）
**核心更新：**
- 🚀 **QQ 通道增强**：支持富媒体消息与定时任务（cron）投递
- 🔌 **新增 Avian 提供商**：作为 OpenAI 兼容接口，扩展模型接入能力
- 🛠️ **Jira 工具增强**：新增 `myself` 与 `list_projects` 动作，提升项目管理自动化水平

**贡献者**：Anatolii Fesiuk, Argenis, avianion, Claude Opus 4.6, Ed

> ✅ 无破坏性变更，建议用户升级以获取最新通道与工具支持。

### 最新 Beta 版：v0.5.4-beta.487（[Release](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.5.4-beta.487)）
**实验性功能：**
- 🧠 **Mem0 (OpenMemory) 后端集成**：支持结构化记忆存储与检索
- 💬 **Slack 反应支持**：实现对消息的 emoji 反应交互
- 🔄 **Web Search 别名回退路由**：提升配置容错性
- ✅ **可验证意图生命周期模块**：原生支持意图验证流程

> ⚠️ 此为测试版本，部分功能可能不稳定，建议用于开发环境验证。

---

## 3. 项目进展

今日合并/关闭的重要 PR 显示项目在多个方向取得实质性推进：

- **#3965**（已合并）：完成 Mem0 内存后端集成，为长期记忆与知识图谱打下基础 → [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/3965)
- **#4038**（已合并）：实现 `web_search` 提供商标识符别名路由与安全回退机制，解决配置 typo 导致工具失效问题 → [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/4038)
- **#4041**（已合并）：修复 QQ 通道 WebSocket Ping/Pong 机制，防止连接超时断开 → [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/4041)
- **#3866**（已合并）：为飞书（Feishu）通道添加 Markdown 卡片支持，恢复富文本渲染能力 → [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/3866)
- **#4037**（已合并）：修正网关 WebSocket 路径下 autonomy 级别未被 SafetySection 正确识别的问题 → [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/4037)

> 📌 整体来看，项目在**通道稳定性**、**工具可靠性**与**权限控制精细化**方面迈出关键步伐。

---

## 4. 社区热点

### 🔥 #1478：[“除了安全，什么功能也没有”](https://github.com/zeroclaw-labs/zeroclaw/issues/1478)（43 评论，6 👍）
用户 @lenson-git 强烈质疑默认安全策略过于严格，即使手动开启所有安全选项，仍无法执行 `ffmpeg` 等基础命令，导致 bot “只能当聊天机器人”。该 Issue 引发大量共鸣，反映**个人开发者对“零信任默认”设计哲学的不满**，呼吁提供“完全开放模式”。

### 🔥 #3540：[Lark/Feishu 通道编译后无法启动](https://github.com/zeroclaw-labs/zeroclaw/issues/3540)（8 评论）
尽管使用 `--features channel-lark` 编译，飞书通道仍无法启动，提示配置未识别。此问题持续数周未解，影响企业用户部署，**暴露构建系统与运行时特征检测不一致**。

### 🔥 #4093：[Provider streaming 功能 stranded on deleted dev branch](https://github.com/zeroclaw-labs/zeroclaw/issues/4093)（1 评论，1 👍）
开发者 @joehoyle 指出，早在 2026 年 3 月实现的 provider streaming 功能（PR #2868/#2873/#2875）因 `dev` 分支被删除而从未进入 `master`，造成**功能丢失与代码漂移**，需重新评估分支策略。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| **S0** | #3537：[daemon crashes silently on ARM64](https://github.com/zeroclaw-labs/zeroclaw/issues/3537) | Raspberry Pi 4 上自 v0.2.1-beta.186 起无输出退出 | ❌ 无 |
| **S0** | #4044：[DeepSeek API error (400 Bad Request)](https://github.com/zeroclaw-labs/zeroclaw/issues/4044) | 模型上下文超限导致请求失败，可能引发数据丢失 | ❌ 无 |
| **S1** | #4083：[Web search tool not working on channels](https://github.com/zeroclaw-labs/zeroclaw/issues/4083) | Telegram 通道中无法使用 web_search，CLI 正常 | ✅ #4038 已部分修复 |
| **S1** | #4042：[Agent can't find MCP server/tools](https://github.com/zeroclaw-labs/zeroclaw/issues/4042) | MCP 工具未注册至 agent 工具列表 | ✅ #4096 正在修复 |
| **S1** | #3982：[Severe hallucination](https://github.com/zeroclaw-labs/zeroclaw/issues/3982) | LLM 虚构系统命令输出，误导用户 | ❌ 无 |
| **S2** | #4086：[Docker bridge connectivity 503 error](https://github.com/zeroclaw-labs/zeroclaw/issues/4086) | Windows 宿主机与 Docker 容器间 WebSocket 连接失败 | ✅ #4095 提供错误提示优化 |
| **S3** | #4062：[UTF-8 truncation panic in tool args](https://github.com/zeroclaw-labs/zeroclaw/issues/4062) | 中文等多字节字符导致 JSON 截断 panic | ❌ 无 |

> ⚠️ ARM64 崩溃与 DeepSeek 集成问题为高危项，需优先处理。

---

## 6. 功能请求与路线图信号

以下功能请求已获得社区关注，并有对应 PR 推进，**极可能纳入 v0.6.0 路线图**：

- **MCP Server 配置支持**（#2856）：用户强烈希望迁移 OpenClaw 的 MCP 配置 → 已有 #4096 尝试接入
- **本地语音识别（STT）**：#4102 提出 `LocalWhisperProvider`，满足离线部署需求 → [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/4102)
- **Slack 状态指示器**：#4105 利用 Assistants API 显示“正在输入”状态 → [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/4105)
- **天气工具集成**：#4104 实现 wttr.in 后端，补全“Coming Soon”功能 → [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/4104)
- **数据库优先记忆架构**：#4028 提议基于 pgvector 构建图记忆系统，响应长期记忆需求

> 📌 团队明显在向**企业级通道支持**、**本地化部署能力**与**记忆基础设施**倾斜资源。

---

## 7. 用户反馈摘要

- **痛点**：
  - 安全策略“一刀切”，个人用户无法关闭防护（#1478）
  - 工具在 CLI 可用但在通道中失效（#4083、#848）
  - Windows 安装流程复杂，缺乏一键脚本（#3693）
  - 文档与配置路径不透明，AI 代理难以自助查询（#4072）

- **满意点**：
  - QQ 与飞书通道持续增强，企业集成体验改善
  - ARM 交叉编译支持（v0.5.3）获 SBC 用户好评
  - 多提供商（Bailian、Avian、DeepMyst）扩展提升灵活性

- **典型场景**：
  - 个人开发者用于本地自动化（需放宽权限）
  - 企业通过飞书/钉钉/Slack 部署内部助手
  - 研究者测试 MCP 与记忆模块原型

---

## 8. 待处理积压

| Issue/PR | 标题 | 状态 | 建议行动 |
|--------|------|------|--------|
| #3540 | Lark/Feishu channel 编译后无法启动 | OPEN（8 天） | 需验证 feature flag 与运行时加载逻辑 |
| #3753 | 旧 main 分支工具缺失于 master | OPEN（4 天） | 审计工具集差异，恢复关键工具 |
| #3818 | 恢复 legacy main 分支的安全与核心功能 | OPEN（4 天） | 合并关键安全参数与 task_plan 工具 |
| #2856 | MCP Server 配置支持 | OPEN（16 天） | 加速 #4096 合并，明确 MCP 路线图 |
| #4093 | Provider streaming 代码丢失 | OPEN（1 天） | 恢复 dev 分支或 cherry-pick 相关提交 |

> 🔔 维护者应优先处理 #3540 与 #3753，二者均涉及**功能完整性缺失**，影响用户信任。

---

**报告生成时间**：2026-03-21  
**数据来源**：[Zeroclaw GitHub Repository](https://github.com/zeroclaw-labs/zeroclaw)  
**分析师备注**：项目活跃度极高，但需平衡“安全默认”与“用户可控性”，避免个人用户流失。建议发布《安全策略分级指南》并开放 `unsafe_mode` 配置项。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-03-21）

---

## 1. 今日速览

PicoClaw 在 2026-03-21 继续保持高活跃度，社区贡献与核心开发并行推进。过去24小时内共产生 **23 条 Issue 更新**（新开/活跃 20 条，关闭 3 条）和 **62 条 PR 更新**（待合并 33 条，已合并/关闭 29 条），显示出强劲的开发节奏。项目发布了一个 nightly 版本（`v0.2.3-nightly.20260321.100720bb`），聚焦于稳定性与多通道能力增强。整体项目健康度良好，功能迭代与 Bug 修复并重，社区对 WebUI、TTS/ASR 和加密通信等方向表现出强烈兴趣。

---

## 2. 版本发布

### 🔹 Nightly Build: `v0.2.3-nightly.20260321.100720bb`
- **类型**：自动化 nightly 构建（非稳定版）
- **更新内容**：集成自 `v0.2.3` 以来 main 分支的最新提交，包含多项 provider 稳定性修复、agent 逻辑优化及通道增强（如 Matrix E2EE 支持、QQ 连接稳定性配置等）。
- **注意事项**：此为开发预览版，可能存在未验证行为，建议仅用于测试环境。生产环境请等待正式版本。
- **完整变更日志**：[GitHub Compare v0.2.3...main](https://github.com/sipeed/picoclaw/compare/v0.2.3...main)

---

## 3. 项目进展

今日共 **29 个 PR 被合并或关闭**，关键进展包括：

- ✅ **Agent 响应逻辑优化**：[#1818](https://github.com/sipeed/picoclaw/pull/1818) 修复空响应与工具迭代耗尽的混淆提示，提升调试体验。
- ✅ **Cron 任务可靠性增强**：[#1842](https://github.com/sipeed/picoclaw/pull/1842) 和 [#1839](https://github.com/sipeed/picoclaw/pull/1839) 解决 CLI 添加任务丢失及响应无法送达通道的问题。
- ✅ **Matrix 端到端加密支持**：[#1841](https://github.com/sipeed/picoclaw/pull/1841) 实现 E2EE 消息解密能力，扩展安全通信场景。
- ✅ **CLI Provider 超时控制**：[#1847](https://github.com/sipeed/picoclaw/pull/1847) 为 `claude-cli`/`codex-cli`/`gemini-cli` 添加请求超时机制，防止子进程无限挂起。
- ✅ **文档全面更新**：[#1837](https://github.com/sipeed/picoclaw/pull/1837) 修复 25+ 处文档错误，补充 5 种语言翻译及 60 个通道说明。

> 项目在 **稳定性、安全性与用户体验** 三方面均有实质性推进。

---

## 4. 社区热点

### 🔥 最活跃讨论议题

| Issue/PR | 热度 | 核心诉求 |
|--------|------|--------|
| [#1648](https://github.com/sipeed/picoclaw/issues/1648) TTS/ASR 支持 | 16 评论 | 用户强烈呼吁将语音交互（文本转语音、语音识别）集成至网关层，已有相关 PR 但未整合。 |
| [#806](https://github.com/sipeed/picoclaw/issues/806) WebUI 支持 | 6 评论，7 👍 | 非技术用户亟需浏览器界面降低使用门槛，当前 TUI 对新手不友好。 |
| [#1058](https://github.com/sipeed/picoclaw/issues/1058) Cron 任务静默丢弃响应 | 1 评论，1 👍 | `deliver=false` 导致 LLM 响应无法送达用户，影响自动化工作流。 |

> 社区明显向 **降低使用门槛**（WebUI）、**扩展交互模态**（语音）、**提升任务可靠性**（Cron）三大方向集中。

---

## 5. Bug 与稳定性

### ⚠️ 高优先级问题

| Issue | 严重性 | 状态 | 修复进展 |
|------|--------|------|--------|
| [#1790](https://github.com/sipeed/picoclaw/issues/1790) OpenRouter free 模型失效 | 高 | 未修复 | OpenRouter 返回 `minimax-m2.5:free is not a valid model ID`，影响免费用户。 |
| [#1763](https://github.com/sipeed/picoclaw/issues/1763) aarch64 .deb 安装失败 | 中 | 未修复 | 依赖包冲突导致安装中断，影响 ARM64 用户部署。 |
| [#1825](https://github.com/sipeed/picoclaw/issues/1825) 容器信号处理异常 | 中 | 未修复 | 接收 SIGINT/SIGTERM 后容器不退，与 `restart: on-failure` 策略冲突。 |
| [#1491](https://github.com/sipeed/picoclaw/issues/1491) 配置加载失败（glm-4.7 API key） | 中 | 未修复 | 配置解析逻辑可能未正确处理模型别名或默认 key。 |

> 建议优先处理 **OpenRouter 兼容性** 和 **ARM64 安装包** 问题，二者直接影响用户可用性。

---

## 6. 功能请求与路线图信号

### 📌 高潜力新功能（已有 PR 或强社区支持）

| 功能 | 关联 Issue/PR | 纳入可能性 |
|------|---------------|-----------|
| **Matrix E2EE 支持** | [#1840](https://github.com/sipeed/picoclaw/issues/1840) + [#1841](https://github.com/sipeed/picoclaw/pull/1841) | ✅ 高（PR 已提交） |
| **OpenAI API 格式 Channel** | [#1738](https://github.com/sipeed/picoclaw/issues/1738) | ✅ 高（嵌入现有系统刚需） |
| **TTS/ASR 语音交互** | [#1648](https://github.com/sipeed/picoclaw/issues/1648) + [#1642](https://github.com/sipeed/picoclaw/pull/1642) | ⚠️ 中（需网关集成） |
| **WebUI 重构** | [#806](https://github.com/sipeed/picoclaw/issues/806) | ⚠️ 中（roadmap 标注，但无近期 PR） |
| **事件驱动 Hooks 系统** | [#1796](https://github.com/sipeed/picoclaw/issues/1796) | 🔮 长期（对标 OpenClaw 能力） |

> **Matrix E2EE** 和 **OpenAI API Channel** 极可能进入下一正式版本。

---

## 7. 用户反馈摘要

- **痛点**：
  - “Cron 任务跑完没回复，查日志才发现被静默丢弃了” —— 反映自动化流程断裂（[#1058](https://github.com/sipeed/picoclaw/issues/1058)）
  - “Android 上 DNS 解析失败，得手动 patch” —— 移动端兼容性待加强（[#1835](https://github.com/sipeed/picoclaw/pull/1835)）
  - “文档链接全挂了，中文翻译也不全” —— 多语言支持滞后（[#1830](https://github.com/sipeed/picoclaw/issues/1830)）

- **满意点**：
  - “QQ 通道现在能传本地 PDF 了，工作流打通了！” —— 附件上传功能获赞（[#1687](https://github.com/sipeed/picoclaw/pull/1687)）
  - “终于支持 Matrix 加密房间了，安全合规达标” —— E2EE 需求被响应（[#1841](https://github.com/sipeed/picoclaw/pull/1841)）

---

## 8. 待处理积压

### ⏳ 长期未响应重要事项

| Issue/PR | 创建时间 | 状态 | 提醒 |
|----------|----------|------|------|
| [#28](https://github.com/sipeed/picoclaw/issues/28) LM Studio 易连接支持 | 2026-02-11 | Open，9 评论 | 用户多次请求简化本地 LLM 接入，无维护者回应 |
| [#629](https://github.com/sipeed/picoclaw/issues/629) LLM 调用失败无重试 | 2026-02-22 | Open，4 评论 | 影响生产环境稳定性，需设计重试策略 |
| [#1261](https://github.com/sipeed/picoclaw/pull/1261) Exec 工具环境变量净化 | 2026-03-09 | Open，未合并 | 安全关键 PR，防止密钥泄露，应优先 review |

> 建议维护团队本周内回应 **LM Studio 集成** 与 **Exec 安全加固** 两项高价值积压。

--- 

**报告生成时间**：2026-03-21  
**数据来源**：PicoClaw GitHub Repository (github.com/sipeed/picoclaw)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-03-21）

---

## 1. 今日速览

NanoClaw 在过去24小时内表现出**高活跃度**，共产生 **25 条 PR 更新**（其中 23 条待合并）和 **7 条 Issues 更新**（4 新开，3 已关闭），显示出社区贡献者正密集推进功能开发与问题修复。尽管无新版本发布，但多个关键功能（如 Signal、Twilio WhatsApp、A2A 代理通信等）进入代码审查阶段，项目在多通道集成与架构健壮性方面持续演进。Issue 处理效率较高，3 个 Bug/功能请求当日即被关闭，反映出维护团队响应积极。

---

## 2. 版本发布

**无新版本发布**。当前主干分支仍处于功能迭代与稳定性优化阶段，未触发正式版本发布流程。

---

## 3. 项目进展

今日有 **2 个 PR 被合并/关闭**，标志着关键问题得到解决：

- **#1203 [CLOSED] fix: honour ANTHROPIC_BASE_URL path for third-party API endpoints**  
  🔗 https://github.com/qwibitai/nanoclaw/pull/1203  
  修复了第三方 Anthropic 兼容 API（如部署在子路径下的服务）无法正确路由请求的问题，提升了模型提供商兼容性。

- **#1298 [CLOSED] feat: Add web channel, dashboard, and multi-tenant support**  
  🔗 https://github.com/qwibptai/nanoclaw/pull/1298  
  引入 Web 通道（WebClaw）、管理仪表盘及多租户基础设施，为 NanoClaw 提供中心化控制与隔离能力，是迈向企业级部署的重要一步。

此外，**#1290**（预检凭证验证）和 **#1292**（WhatsApp 群组 persona）等 PR 虽未合并，但已针对当日 Issue 提出直接修复方案，预计将快速推进。

---

## 4. 社区热点

以下 PR 和 Issue 引发高度关注，反映社区核心诉求：

- **#1111 [OPEN] feat: add API usage tracking**（评论数最多，持续更新）  
  🔗 https://github.com/qwibitai/nanoclaw/pull/1111  
  社区对**成本透明度与用量审计**需求强烈。该 PR 引入细粒度 API 调用追踪（含 token 计数、成本 USD、分类标签），满足开发/研究/自动化等场景的计费与分析需求，被视为商业化与自托管部署的关键基础设施。

- **#1289 [OPEN] feat: add pre-flight credential validation on startup**  
  🔗 https://github.com/qwibitai/nanoclaw/issues/1289  
  用户普遍遭遇“静默启动失败”问题：缺少凭证时容器仍初始化数据库并留下脏状态。此 Issue 获得即时响应，配套 PR #1290 已提交，凸显社区对**启动健壮性与错误快速反馈**的迫切需求。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重性 | Issue | 描述 | 修复状态 |
|--------|-------|------|----------|
| ⚠️ 高 | #1272 [OPEN] Bug: DB migration incorrectly marks Telegram direct chats as is_group=1 | Telegram 私聊被错误标记为群组，导致消息路由与权限逻辑异常 | ❌ 无 fix PR，需紧急处理 |
| ⚠️ 高 | #1284 [CLOSED] BUG: IC01 relay processes commands from IC00 rooms via shared operator account | 共享 Matrix 账户导致跨房间命令误执行，存在安全风险 | ✅ 已关闭（疑似内部修复） |
| 🟡 中 | #1289 [OPEN] 启动时无凭证不报错 | 容器启动后留下部分初始化状态，干扰后续配置 | ✅ PR #1290 已提交待合并 |

> 注：#1272 涉及核心数据模型错误，可能影响 Telegram 用户正常使用，建议优先分配资源修复。

---

## 6. 功能请求与路线图信号

用户明确提出且已有实现 PR 的功能需求包括：

- **多通道扩展**：Signal (#1057)、Twilio WhatsApp (#1294)、White Noise (#1059)、OpenMail (#1251)、Proton Mail (#1117) 等 PR 显示项目正积极拓展通信协议覆盖，向“全平台 AI 代理”演进。
- **代理间协作**：#1295 提出的 A2A（Agent-to-Agent）通道允许 NanoClaw 被其他 AI 工具（如 Claude Code）调用，是构建**AI 工作流生态**的关键一步。
- **个性化与记忆**：#1292（WhatsApp 群组 persona）与 #1256（Mem0 图记忆）结合，推动 agent 实现**上下文感知的个性化响应**，符合用户对“自适应代理”的期待。
- **运维可观测性**：#1111（API 用量追踪）与 #1297（ESLint 规范化）反映项目向**生产就绪**迈进，注重可维护性与成本控制。

这些功能极有可能纳入下一版本（v0.5 或 v1.0 RC）。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实用户声音：

- **痛点**：
  - “Linux 支持文档矛盾让人困惑”（#1075）→ 官网与 README 不一致，影响新用户上手信心。
  - “加群后 bot 沉默，不知道要注册”（#1275）→ 缺乏引导机制，导致用户体验断裂。
  - “启动时不报错，后来才发现没配 token”（#1289）→ 静默失败是常见运维陷阱。

- **满意点**：
  - 对 Baileys 已获取 WhatsApp 群组描述但未利用表示赞赏（#1291），认为“这是天然的系统提示来源”。
  - 对 Twilio WhatsApp 官方 API 支持表示欢迎（#1294），认为“比逆向工程更稳定合规”。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，需维护者关注：

- **#586 [OPEN] feat: allow agents to send cross-group messages via send_message**（创建于 2026-02-28，超3周未审）  
  🔗 https://github.com/qwibitai/nanoclaw/pull/586  
  跨群组通知是高频使用场景（如家庭→工作群组同步任务），但 PR 长期处于“Needs Review”状态，可能阻塞用户工作流自动化。

- **#565 [OPEN] feat: add PID lockfile guard to prevent duplicate instances**（创建于 2026-02-27）  
  🔗 https://github.com/qwibitai/nanoclaw/pull/565  
  防止多实例数据损坏是基础稳定性需求，但迟迟未合并，存在潜在数据风险。

> 建议维护团队优先 review 上述 PR，并考虑设立定期积压清理机制。

---  
*数据截止：2026-03-21 00:00 UTC | 来源：NanoClaw GitHub Repository*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-03-21）

---

## 1. 今日速览

IronClaw 项目在 2026-03-20 继续保持高活跃度，24 小时内产生 **40 条 Issues 更新**（29 新开/活跃，11 已关闭）和 **50 条 PR 更新**（35 待合并，15 已合并/关闭），并发布 **v0.21.0 新版本**。社区贡献者积极参与功能开发与 Bug 修复，核心团队聚焦于系统稳定性、安全加固与用户体验优化。Staging CI 自动化审查机制持续发现关键风险问题，推动代码质量提升。

---

## 2. 版本发布

### 🚀 v0.21.0 正式发布（2026-03-20）

**核心新增功能：**
- ✅ **结构化回退交付物机制**：为失败或卡住的任务提供可追踪的回退输出（[#236](https://github.com/nearai/ironclaw/pull/236)）
- ✅ **LRU 嵌入缓存**：显著提升工作区搜索性能，减少重复计算开销（[#1423](https://github.com/nearai/ironclaw/pull/1423)）
- ✅ **Webhook 回调支持**：允许通过外部 webhook 触发 relay 事件，增强集成能力（[#1254](https://github.com/nearai/ironclaw/pull/1254)）

> ⚠️ **无破坏性变更**，但建议升级前备份 PostgreSQL 数据库，因近期存在迁移校验和冲突报告（见下文 Issue #1328）。

---

## 3. 项目进展

今日共 **15 个 PR 被合并或关闭**，重点推进方向包括：

- **安全加固**：修复 OAuth 回调状态处理漏洞（[#1484](https://github.com/nearai/ironclaw/pull/1484)）、防止跨通道审批劫持（[#1495](https://github.com/nearai/ironclaw/pull/1495)）、缓解锁竞争（[#1497](https://github.com/nearai/ironclaw/pull/1497)）
- **配置简化**：移除 `.env` 中冗余 LLM 配置项，降低用户配置复杂度（[#1448](https://github.com/nearai/ironclaw/pull/1448)）
- **工具链优化**：PDF 文本提取库从 `pdf-extract` 迁移至更高效的 `pdf_oxide`（[#1435](https://github.com/nearai/ironclaw/pull/1435)）
- **CLI 改进**：日志系统 v2 完成最终修复并合并（[#527](https://github.com/nearai/ironclaw/pull/527)）

整体项目在 **安全性、可维护性与用户体验** 方面迈出关键步伐。

---

## 4. 社区热点

### 🔥 高关注度 Issues

| Issue | 主题 | 评论数 | 链接 |
|------|------|--------|------|
| #902 | Google OAuth 被 Google Suite 工具屏蔽，请求可选 GWS 回退提供者 | 3 | [查看](https://github.com/nearai/ironclaw/issues/902) |
| #1328 | 升级至 v0.19.0 失败：PostgreSQL 迁移校验和不匹配 | 3 | [查看](https://github.com/nearai/ironclaw/issues/1328) |
| #761 | 请求为 Web Gateway 添加浅色主题 | 2 | [查看](https://github.com/nearai/ironclaw/issues/761) |

**分析**：  
用户强烈关注 **Google 生态集成稳定性**（#902）和 **数据库迁移可靠性**（#1328），反映出生产环境部署痛点。同时，UI/UX 定制化需求（如浅色主题）表明用户群体正从开发者向普通用户扩展。

---

## 5. Bug 与稳定性

### ⚠️ 严重 Bug（按风险等级排序）

| Issue | 描述 | 严重性 | 是否有 Fix PR |
|------|------|--------|----------------|
| #1485 | 跨通道审批线程劫持 — 授权绕过 | CRITICAL | ✅ [#1495](https://github.com/nearai/ironclaw/pull/1495) |
| #1486 | TOCTOU 竞争条件在审批线程解析中 | CRITICAL | 🔄 待修复 |
| #1429 | 嵌入缓存每次命中都克隆嵌入向量 | CRITICAL | ✅ 已合并于 v0.21.0 |
| #1328 | V6__routines 迁移校验和不匹配导致升级失败 | HIGH | 🔄 社区讨论中，暂无官方修复 |
| #1103 | 可配置嵌入 base URL 无验证导致 SSRF 风险 | HIGH | ✅ 已合并安全补丁 |

> 💡 建议用户暂缓从 v0.18.x 升级至 v0.19+，直至 #1328 提供官方迁移指南。

---

## 6. 功能请求与路线图信号

### 📌 高潜力新功能（结合 PR 判断）

| 功能 | 关联 Issue | 状态 | 可能版本 |
|------|-----------|------|----------|
| 工作区作为技能存储唯一真相源 | #1504 | 已提出，P2 优先级 | v0.22+ |
| 添加 ACP（Agent Client Protocol）作业模式 | #1506 | 新提案 | 长期路线图 |
| AWS Bedrock 嵌入支持 | #1501 | 新提案 | v0.22 候选 |
| 会话级临时上下文目录 | #1477 | P2，已有设计 | v0.22 |
| 结构化每日会话摘要 | #1476 | P1，高价值 | v0.22 |

> 🔍 核心团队正推动 **工作区中心化架构**（#1504）和 **多 LLM 后端支持**（#1501），预示下一版本将强化可扩展性与云原生集成。

---

## 7. 用户反馈摘要

- **痛点**：
  - Google 工具链 OAuth 频繁被阻断，影响办公场景使用（#902, #1500）
  - 数据库迁移缺乏向前兼容保障，导致升级中断（#1328）
  - Web Gateway 缺乏调试信息，难以排查工具调用问题（#1492, #1493）

- **满意点**：
  - LRU 嵌入缓存显著提升搜索响应速度（v0.21.0 用户反馈）
  - Webhook 触发机制简化了自动化流程集成（#736 后续讨论）

- **使用场景**：
  - 企业用户尝试将 IronClaw 接入 Google Workspace 实现文档自动化
  - 开发者利用 webhook + routine 构建 CI/CD 辅助机器人

---

## 8. 待处理积压

### ⏳ 长期未响应重要事项

| Issue/PR | 主题 | 创建时间 | 状态 | 建议 |
|---------|------|----------|------|------|
| #1174 | 缺乏完整文档 | 2026-03-14 | OPEN | 需官方响应，影响新用户入门 |
| #1278 | 工作区 .md 文件自动导出以防 DB 丢失 | 2026-03-17 | OPEN | 高价值数据持久化需求，建议纳入 v0.22 |
| #1480 | 核心自更新机制 | 2026-03-20 | OPEN | 用户运维刚需，建议优先评估 |

> 📢 **维护者提醒**：#1174（文档缺失）已引发多次社区询问，建议尽快发布基础使用指南或路线图文档。

---

**项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
活跃度高，安全响应迅速，但需加强文档建设与迁移兼容性保障。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报（2026-03-21）

---

## 1. 今日速览

LobsterAI 在 2026 年 3 月 20 日表现出**高活跃度**，社区与开发团队互动频繁。过去 24 小时内共产生 **36 条 Issues 更新**（新开/活跃 35 条，仅 1 条关闭）和 **26 条 PR 更新**（15 条待合并，11 条已合并/关闭），反映出用户反馈密集、开发响应迅速。项目发布了一个新版本（`2026.3.20`），主要修复 OpenClaw 运行时依赖问题。整体来看，项目处于**快速迭代与问题暴露并存**的状态，需重点关注稳定性与用户体验类问题。

---

## 2. 版本发布

### 🔖 [Release 2026.3.20](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.3.20)（2026-03-20）

**更新内容**：
- 修复 OpenClaw 运行时对 `playwright-core` 和 `pdfjs-dist` 的错误 stub 行为，避免因依赖隔离导致的功能异常。

**影响范围**：
- 主要影响使用 PDF 解析或浏览器自动化技能（Skill）的用户。
- 无破坏性变更，无需用户手动迁移。

> ✅ 建议所有用户升级至该版本以获取稳定性提升。

---

## 3. 项目进展

今日共 **11 个 PR 被合并或关闭**，涵盖安全、性能、IM 集成与工程化建设，显著推进项目成熟度：

| 类别 | 关键 PR | 说明 |
|------|--------|------|
| **安全加固** | [#591](https://github.com/netease-youdao/LobsterAI/pull/591)（已合并） | 移除 `openclaw.json` 中明文存储的 13 项敏感凭证，改用环境变量注入，大幅降低凭据泄露风险。 |
| **IM 体验优化** | [#558](https://github.com/netease-youdao/LobsterAI/pull/558)（已合并） | 飞书 IM 新增“扫码创建机器人”功能，简化企业部署流程，对齐企业微信体验。 |
| | [#556](https://github.com/netease-youdao/LobsterAI/pull/556)（已合并） | POPO 支持 WebSocket 长连接模式，减少对 Webhook 配置的依赖，提升连接稳定性。 |
| **工程化基建** | [#589](https://github.com/netease-youdao/LobsterAI/pull/589)（进行中） | 搭建完整 GitHub CI/CD 流水线，集成安全扫描、自动标签、Issue/PR 模板等，为长期维护打下基础。 |
| **性能优化** | [#573](https://github.com/netease-youdao/LobsterAI/pull/573)（进行中） | 将 SQLite 存储改为异步写入 + 防抖机制，解决主线程阻塞问题（#562）。 |

> 📌 项目正向**企业级稳定性与可维护性**迈出关键步伐。

---

## 4. 社区热点

以下 Issues 引发最多讨论，反映核心用户痛点：

### 🔥 [#563 对话标题显示乱码](https://github.com/netease-youdao/LobsterAI/issues/563)（7 条评论）
- **现象**：中文对话标题渲染为乱码。
- **诉求**：国际化（i18n）处理不完善，影响基础可用性。
- **关联 PR**：[#566](https://github.com/netease-youdao/LobsterAI/pull/566) 正在修复 IM 设置页 i18n 缺失，可能部分缓解。

### 🔥 [#579 Workspace 目录误配置导致文件污染](https://github.com/netease-youdao/LobsterAI/issues/579)（2 条评论）
- **现象**：用户误将项目目录设为 workspace 后，系统持续生成 `.openclaw` 和 `SOUL.md` 文件且无法恢复默认。
- **诉求**：需提供更清晰的 workspace 说明与“重置为默认”按钮。

### 🔥 [#561 出现他人飞书对话记录](https://github.com/netease-youdao/LobsterAI/issues/561)
- **严重性**：高（涉及数据隔离与隐私安全）
- **可能原因**：多租户环境下会话 ID 冲突或缓存污染。
- **状态**：尚无 fix，需紧急排查。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重等级 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| 🔴 **高危** | [#543 路径遍历风险](https://github.com/netease-youdao/LobsterAI/issues/543) | `resolveMemoryFilePath` 未校验 `../`，可导致任意文件读取 | ❌ 无 |
| 🔴 **高危** | [#561 他人对话出现在本地](https://github.com/netease-youdao/LobsterAI/issues/561) | 数据隔离失效，隐私泄露 | ❌ 无 |
| 🟠 **中危** | [#540 OpenClaw 频繁重启](https://github.com/netease-youdao/LobsterAI/issues/540) | 每几十秒重启，中断任务 | ✅ [#590](https://github.com/netease-youdao/LobsterAI/pull/590) 已提交修复 |
| 🟠 **中危** | [#571 stoppedSessions 内存泄漏](https://github.com/netease-youdao/LobsterAI/issues/571) | 删除会话后 sessionId 未清理，长期运行内存增长 | ❌ 无 |
| 🟡 **低危** | [#560 交互时闪退](https://github.com/netease-youdao/LobsterAI/issues/560) | 特定操作下应用崩溃 | ❌ 无 |

> ⚠️ 建议优先处理 **#543（安全漏洞）** 和 **#561（数据隔离）**。

---

## 6. 功能请求与路线图信号

用户强烈需求的功能中，部分已有对应 PR，预示下一版本方向：

| 功能请求 | Issue | 状态 | 关联 PR |
|--------|------|------|--------|
| Token 用量统计 | [#582](https://github.com/netease-youdao/LobsterAI/issues/582) | 高需求 | ❌ 无（可纳入 v3.2） |
| 多智能体协作 | [#541](https://github.com/netease-youdao/LobsterAI/issues/541) | 创新提案 | ❌ 无（需架构评估） |
| 技能快捷选择（输入 `/` 触发） | [#567](https://github.com/netease-youdao/LobsterAI/issues/567) | UX 优化 | ❌ 无 |
| 离线部署支持 | [#587](https://github.com/netease-youdao/LobsterAI/issues/587) | 企业场景刚需 | ❌ 无 |
| 附件 @mention 引用 | [#557](https://github.com/netease-youdao/LobsterAI/pull/557) | **已有 PR** | ✅ 进行中 |

> 💡 **Token 统计** 和 **离线模式** 是企业用户核心诉求，建议优先排期。

---

## 7. 用户反馈摘要

从 Issues 中提炼真实声音：

- **满意点**：
  - 飞书/企微集成体验良好（#511 对比反馈）。
  - 技能（Skill）系统灵活，支持自定义开发（#577）。
  - 扫码配置机器人极大简化部署（#558 用户隐含认可）。

- **痛点**：
  - **配置复杂且不直观**：图片输入配置路径深（#588）、workspace 概念不清（#579）。
  - **稳定性不足**：OpenClaw 重启、闪退、任务中断后状态残留（#570）。
  - **缺乏运维支持**：Windows 开机自启失败无日志（#595）、升级机制缺失（#578）。
  - **模型切换不热更新**：IM 通道仍用旧模型（#585）。

---

## 8. 待处理积压

以下重要 Issue 长期未响应，需维护者关注：

| Issue | 标题 | 创建时间 | 状态 |
|------|------|--------|------|
| [#511](https://github.com/netease-youdao/LobsterAI/issues/511) | 飞书配置后机器人不回复（仅企微正常） | 2026-03-19 | 🔄 超 48 小时未回复 |
| [#543](https://github.com/netease-youdao/LobsterAI/issues/543) | 路径遍历安全风险（高危） | 2026-03-20 | ⚠️ 安全漏洞，需紧急处理 |
| [#561](https://github.com/netease-youdao/LobsterAI/issues/561) | 出现他人对话记录 | 2026-03-20 | 🔒 隐私问题，需立即排查 |

> 📢 **建议**：建立安全漏洞响应 SLA，对高危 Issue 在 24 小时内初步回应。

---

**报告生成时间**：2026-03-21  
**数据来源**：[LobsterAI GitHub Repository](https://github.com/netease-youdao/LobsterAI)

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

**TinyAGI 项目动态日报**  
📅 日期：2026-03-21  
🔗 项目仓库：[github.com/TinyAGI/tinyclaw](https://github.com/TinyAGI/tinyclaw)

---

### 1. **今日速览**

TinyAGI 在今日继续保持高活跃度，虽无新 Issue 提交，但开发节奏紧凑：共处理 5 条 Pull Request（4 条已合并/关闭，1 条待合并），并发布了一个重要新版本 v0.0.16。核心改进聚焦于用户体验优化与架构解耦，包括“零配置启动”和 CLI 逻辑重构。项目整体处于快速迭代阶段，技术债务持续清理，社区贡献者参与积极。

---

### 2. **版本发布**

✅ **v0.0.16 正式发布**  
🔗 [Release v0.0.16](https://github.com/TinyAGI/tinyagi/releases/tag/v0.0.16)

**核心亮点：**
- **Zero-Config Onboarding**：用户首次运行 `tinyagi` 命令即可自动完成初始化流程，包括创建默认工作目录（`~/tinyagi-workspace`）、检查依赖（tmux、jq 等）、启动守护进程，彻底移除传统设置向导，实现“开箱即用”。
- 默认代理命名为 `tinyagi`，初始无频道配置，降低认知负担。
- 后端自动引导机制增强，提升新手上手效率。

**迁移注意事项：**  
此为体验优化更新，无破坏性变更。现有用户升级后原有配置不受影响，但建议清理旧版残留的临时配置目录以适配新路径规范。

---

### 3. **项目进展**

今日共合并/关闭 4 条 PR，推动架构与用户体验双重升级：

- **#244（已关闭）**：实现“单命令启动”流程，将原本多步设置合并为 `tinyagi` 一键执行，显著降低入门门槛。  
  🔗 [PR #244](https://github.com/TinyAGI/tinyagi/pull/244)

- **#245（已关闭）**：重构 Office 模块的 SSE 事件系统，弃用 `chain_*` 命名，统一为语义更清晰的 `message:*` 和 `agent:*` 事件流（如 `agent:invoke`, `message:done`），并提取页面组件为可复用 Hook，提升前端可维护性。  
  🔗 [PR #245](https://github.com/TinyAGI/tinyagi/pull/245)

- **#212（已关闭）**：完成 `/office` 实时工作空间的视觉与交互重设计，优化多代理协作视图的信息密度与响应速度。  
  🔗 [PR #212](https://github.com/TinyAGI/tinyagi/pull/212)

- **#242（已关闭）**：将 CLI 调用逻辑从 `invoke.ts` 中抽离，引入 `AgentAdapter` 接口与提供者注册机制，使 Claude、Codex、OpenCode 等后端实现标准化接入，为未来扩展 LLM 提供商奠定架构基础。  
  🔗 [PR #242](https://github.com/TinyAGI/tinyagi/pull/242)

> 📌 综合评估：项目在“易用性”与“可扩展性”两个关键维度取得实质性进展，技术架构向模块化、标准化迈进。

---

### 4. **社区热点**

⚠️ **无活跃讨论 Issue**  
过去 24 小时内无新 Issue 创建或更新，社区反馈通道暂时平静。但值得注意的是，**#243（待合并）** 虽无评论，却代表重要生态扩展方向：

🔸 **#243 feat: add Novita AI as a built-in LLM provider**  
🔗 [PR #243](https://github.com/TinyAGI/tinyagi/pull/243)  
由社区成员 @Alex-wuhu 提交，集成 Novita AI（兼容 OpenAI API）作为内置 LLM 提供商，复用现有 Codex  harness，仅需配置 `OPENAI_BASE_URL`。该 PR 尚未合并，可能反映维护团队正在评估第三方服务稳定性或 API 兼容性风险。

> 💡 分析：尽管缺乏显性讨论，此类 PR 暗示用户对**低成本、高性能替代 LLM 服务**的需求上升，Novita AI 的加入有望降低运行门槛，尤其对预算敏感型用户。

---

### 5. **Bug 与稳定性**

✅ **无新报告 Bug 或崩溃问题**  
过去 24 小时未收到任何 Issue 报告，结合近期 PR 均属重构与功能增强（非热修复），表明当前版本（v0.0.16）运行稳定，未引入明显回归。

---

### 6. **功能请求与路线图信号**

从待处理 PR 与近期合并趋势看，下一版本可能聚焦以下方向：

- **多 LLM 提供商支持**：#243（Novita AI）若合并，将强化 TinyAGI 对多样化推理后端的兼容能力，符合“开放生态”战略。
- **Office 工作空间持续优化**：#245 与 #212 的连续投入表明团队重视实时协作体验，未来可能引入更多可视化调试工具或代理状态监控面板。
- **CLI 架构扩展性**：#242 的适配器模式为后续支持本地模型（如 Ollama）、私有部署 API 等场景铺平道路。

> 📌 预测：v0.0.17 或将优先合并 #243，并进一步优化 Office 的实时事件延迟问题。

---

### 7. **用户反馈摘要**

📌 **无直接用户评论数据**（今日无 Issue 更新）  
但结合 v0.0.16 发布内容可推断：  
- **满意点**：零配置启动极大简化部署流程，尤其利好非技术背景用户。  
- **潜在痛点**：依赖自动检查（如 tmux、jq）若失败未提供清晰指引，可能导致部分用户卡在初始化阶段（需后续观察 Issue 反馈）。

---

### 8. **待处理积压**

🔸 **#243 feat: add Novita AI as a built-in LLM provider**（OPEN，创建于 2026-03-20）  
🔗 [PR #243](https://github.com/TinyAGI/tinyagi/pull/243)  

- **状态**：待合并，无评论，无冲突  
- **建议**：该 PR 实现简洁、风险低（复用现有 harness），且满足社区对更多 LLM 选项的需求。建议维护者 @jlia0 尽快 review 并合并，以丰富内置提供商矩阵。

> ✅ 当前无长期积压 Issue，项目响应效率良好。

---

**总结**：TinyAGI 今日以 v0.0.16 发布为核心，完成了从“配置复杂”到“开箱即用”的关键跃迁，同时通过架构重构提升长期可维护性。社区虽静默，但功能扩展信号明确。项目健康度：⭐⭐⭐⭐☆（4.5/5）—— 开发活跃、方向清晰、用户门槛持续降低。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目动态日报**  
**日期：2026年3月21日**

---

### 1. 今日速览  
过去24小时内，Moltis 项目保持中等活跃度，共产生 **3条新 Issue** 与 **6条 PR 更新**，其中 **5个 PR 待合并**，仅 **1个 PR 被合并/关闭**。社区对功能扩展（如 Matrix 支持）和 Windows 平台稳定性问题关注度上升。无新版本发布，但核心功能（如 Gemini 集成、配置安全、会话文件处理）持续推进。整体开发节奏稳健，依赖项维护自动化程度较高。

---

### 2. 版本发布  
*（无新版本发布）*

---

### 3. 项目进展  
今日 **1个 PR 被合并/关闭**，为依赖项更新：  
- **#390** [`chore(deps): bump quinn-proto from 0.11.13 to 0.11.14`](https://github.com/moltis-org/moltis/pull/390)（由 @dependabot[bot] 提交）  
  该 PR 更新了 QUIC 协议栈底层依赖 `quinn-proto`，修复了潜在的网络连接稳定性问题，属于常规安全与维护性升级。

此外，多个重要功能 PR 持续活跃更新，虽未合并但进展显著：  
- **#33** [`feat(agents): add Google Gemini provider with API key and OAuth support`](https://github.com/moltis-org/moltis/pull/33)：已完成 Gemini 双认证模式（API Key + OAuth）与流式响应支持，文档齐全，预计为下一版本核心功能。  
- **#449** [`feat(gateway): sanitize channel config access and masked secrets`](https://github.com/moltis-org/moltis/pull/449)：增强配置安全性，防止敏感信息泄露，提升网关服务健壮性。  
- **#436** [`fix(sessions): replace append(true) with write(true)+seek to fix Windows file lock`](https://github.com/moltis-org/moltis/pull/436)：解决 Windows 平台因文件锁机制导致的会话写入失败问题（#434），已进入验证阶段。

---

### 4. 社区热点  
**最活跃 Issue：#233 [`Matrix Support`](https://github.com/moltis-org/moltis/issues/233)**  
- 作者：@lee-b | 最后更新：2026-03-20 | 评论数：2 | 👍：1  
- 该 Issue 提出对 Matrix 协议的原生支持需求，作为去中心化通信通道的补充。尽管创建时间较早（2026-02-25），但在过去24小时内被重新激活讨论，反映出用户对多协议接入能力的强烈兴趣。  
- 分析：Matrix 支持可能成为 Moltis 向企业级协作场景拓展的关键一步，建议评估其与现有 Slack/Discord 通道架构的集成成本。

---

### 5. Bug 与稳定性  
今日报告 **2个新 Bug**，均标记为 `[bug]` 标签，按严重程度排序如下：

1. **#457 [`windows installer handler.sh not found`](https://github.com/moltis-org/moltis/issues/457)**  
   - 作者：@jmikedupont2 | 创建：2026-03-20  
   - 描述：Windows 安装程序在运行时提示 `handler.sh` 文件缺失，疑似跨平台构建脚本路径处理错误。  
   - 严重性：**高**（影响 Windows 用户安装体验）  
   - 状态：**无对应 fix PR**，需维护者介入排查构建流程。

2. **#458 [`Onboarding - Config examples in the moltis.toml are not present when importing from openclaw`](https://github.com/moltis-org/moltis/issues/458)**  
   - 作者：@Tylast | 创建：2026-03-20  
   - 描述：从 OpenCLAW 导入配置时，`moltis.toml` 中的示例配置项丢失，导致新用户上手困难。  
   - 严重性：**中**（影响 onboarding 体验，但功能仍可手动配置）  
   - 状态：**无对应 fix PR**，建议检查配置迁移逻辑。

> 注：#436 PR 已针对类似 Windows 文件操作问题提供修复，可能为 #457 提供参考方案。

---

### 6. 功能请求与路线图信号  
- **Matrix 协议支持（#233）**：虽无直接 PR，但社区讨论升温，结合 Moltis 多通道架构设计，具备快速集成潜力，**极可能纳入 v0.5 或 v0.6 路线图**。  
- **Gemini 提供商支持（#33）**：功能完整、文档齐全，且 Google AI 生态热度高，**预计为下一版本重点发布功能**。  
- **配置安全增强（#449）**：符合当前对敏感数据保护的行业趋势，**高概率随安全审计周期合并**。

---

### 7. 用户反馈摘要  
从 Issues 评论与描述中提炼关键用户声音：  
- **痛点**：  
  - Windows 平台兼容性问题频发（文件锁、安装脚本缺失），影响非 Linux/macOS 用户 adoption。  
  - 配置迁移过程缺乏引导，新手易因 `moltis.toml` 示例缺失而困惑。  
- **满意点**：  
  - 对 Gemini 双认证模式（API Key + OAuth）设计表示认可，认为“兼顾灵活性与安全性”（隐含于 #33 描述）。  
  - 依赖项自动更新机制（Dependabot）运行良好，减少维护负担。

---

### 8. 待处理积压  
以下 Issue/PR 长期未响应，建议维护者优先关注：  
- **#233 [`Matrix Support`](https://github.com/moltis-org/moltis/issues/233)**（创建于 2026-02-25，超30天未官方回应）  
  → 需明确是否纳入路线图，避免社区期待落空。  
- **#33 [`feat(agents): add Google Gemini provider`](https://github.com/moltis-org/moltis/pull/33)**（创建于 2026-02-05，超40天未合并）  
  → 功能成熟度高，建议安排代码审查与合并排期。  

> 建议：设立“社区提案响应 SLA”（如7天内初步反馈），提升项目可信度。

---  
**报告生成时间：2026-03-21 UTC**  
**数据来源：GitHub moltis-org/moltis 公开仓库**

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-03-21）

---

## 1. 今日速览

CoPaw 社区活跃度持续高涨，过去24小时内共产生 **50条 Issues 更新**（新开/活跃20条，关闭30条）和 **50条 PR 更新**（待合并27条，已合并/关闭23条），显示出强劲的开发与反馈节奏。项目发布新版本 **v0.1.0.post1**，聚焦于稳定性修复与依赖兼容性优化。核心问题如任务取消异常、自定义通道启动失败、音频处理错误等正被快速响应，社区贡献者积极参与文档完善与功能增强。整体项目处于高迭代、高协作的健康发展状态。

---

## 2. 版本发布

### 🔖 v0.1.0.post1（最新发布）
- **发布时间**：2026-03-20
- **主要变更**：
  - ✅ 版本号升级至 `0.1.1b1`（[#1882](https://github.com/agentscope-ai/CoPaw/pull/1882)）
  - ✅ 修复 Anthropic API 在 HTTP 529（服务过载）时未自动重试的问题（[#1891](https://github.com/agentscope-ai/CoPaw/pull/1891)）
  - ✅ 修复 token 使用统计相关逻辑（摘要截断，见 release notes）
- **影响范围**：主要面向使用 Anthropic 模型的用户，提升服务容错能力。
- **迁移建议**：无破坏性变更，建议所有用户升级以获得更稳定的 LLM 调用体验。

> 📌 [Release v0.1.0.post1](https://github.com/agentscope-ai/CoPaw/releases/tag/v0.1.0.post1)

---

## 3. 项目进展

今日多个关键 PR 被合并或推进，显著提升系统稳定性与用户体验：

- **🔧 运行时健壮性增强**  
  [#1977](https://github.com/agentscope-ai/CoPaw/pull/1977) 强化 MCP 组件关闭时的异常处理，抑制已知竞态导致的噪音日志，并优化 cron 任务与通道调度的错误恢复机制。

- **🛠️ 自定义通道支持修复**  
  [#1991](https://github.com/agentscope-ai/CoPaw/pull/1991) 修复 `ChannelManager` 中对字典类型配置调用 `getattr()` 导致的崩溃问题，使自定义通道可正常启用（关联 Issue #1987）。

- **📚 文档与 FAQ 完善**  
  多个 first-time contributor 提交文档 PR：
  - [#1995](https://github.com/agentscope-ai/CoPaw/pull/1995) / [#1994](https://github.com/agentscope-ai/CoPaw/pull/1994)：添加 Windows 下 8088 端口冲突排查指南（Hyper-V/WSL2 占用问题）
  - [#1973](https://github.com/agentscope-ai/CoPaw/pull/1973)：补充 Windows 桌面版升级说明（解决 #1683）

- **🌐 社区互动增强**  
  [#1993](https://github.com/agentscope-ai/CoPaw/pull/1993) 在官网首页添加 Discord 与钉钉群组二维码，降低用户加入社区门槛。

- **🧪 新功能探索**  
  [#1972](https://github.com/agentscope-ai/CoPaw/pull/1972) 集成 OpenSandbox 作为云端沙箱后端，为未来远程执行能力铺路。

> 项目在错误处理、文档可访问性、扩展性三方面取得实质性进展。

---

## 4. 社区热点

### 🔥 高讨论度 Issues

| Issue | 主题 | 评论数 | 核心诉求 |
|------|------|--------|--------|
| [#1976](https://github.com/agentscope-ai/CoPaw/issues/1976) | `Task has been cancelled!` 运行时错误 | 11 | 用户遭遇任务意外取消，虽标注“已在 #1956 修复”，但仍需确认修复是否覆盖所有场景 |
| [#1835](https://github.com/agentscope-ai/CoPaw/issues/1835) | 飞书语音消息后所有输入报错 | 4 | 音频文件路径解析失败（`file:///` schema 不被支持），影响飞书通道可用性 |
| [#1774](https://github.com/agentscope-ai/CoPaw/issues/1774) | CPU 占用 100% 死循环 | 4 | 内存压缩钩子陷入无限循环（`ToolResultCompactor` ↔ `ContextChecker`），需紧急修复 |

> 💡 分析：用户高度关注 **稳定性与通道兼容性**，尤其是飞书、QQ 等国内主流 IM 通道的异常直接影响生产环境使用。

---

## 5. Bug 与稳定性

按严重程度排序：

1. **🚨 严重：内存压缩死循环导致 CPU 100%**  
   - Issue: [#1774](https://github.com/agentscope-ai/CoPaw/issues/1774)（Open）  
   - 表现：后台任务持续触发 `MemoryCompactionHook`，形成递归调用循环  
   - 状态：**尚无 fix PR**，需核心团队介入排查钩子注册逻辑

2. **⚠️ 高：飞书语音消息引发全局通信故障**  
   - Issue: [#1835](https://github.com/agentscope-ai/CoPaw/issues/1835)（Open）  
   - 根因：本地 Whisper 处理后的音频文件使用 `file://` URI，但消息处理器未支持该 schema  
   - 相关 PR: [#1896](https://github.com/agentscope-ai/CoPaw/pull/1896)（Open）尝试修复音频内容解析逻辑

3. **⚠️ 高：自定义通道无法启动**  
   - Issue: [#1987](https://github.com/agentscope-ai/CoPaw/issues/1987)（Open）  
   - 状态：**已有 fix PR [#1991](https://github.com/agentscope-ai/CoPaw/pull/1991)**，待合并

4. **🟡 中：Google GenAI SDK 兼容性问题**  
   - Issue: [#1985](https://github.com/agentscope-ai/CoPaw/issues/1985)（Open）  
   - 表现：`BaseApiClient` 缺少 `_async_httpx_client` 属性，疑似 SDK 版本不匹配

---

## 6. 功能请求与路线图信号

用户强烈期待以下功能，部分已有对应 PR 推进：

| 功能需求 | 相关 Issue | 进展 |
|--------|-----------|------|
| **多 Agent 自动调度** | [#1990](https://github.com/agentscope-ai/CoPaw/issues/1990) | 尚无 PR，但 [#1883](https://github.com/agentscope-ai/CoPaw/pull/1883) 的“Agents Square”可能为此铺垫 |
| **会话级 Token 消耗统计** | [#1751](https://github.com/agentscope-ai/CoPaw/issues/1751) | 未开始实现，属高频需求 |
| **历史对话搜索** | [#1578](https://github.com/agentscope-ai/CoPaw/issues/1578) | 长期开放，反映用户对知识管理的需求 |
| **中文文档与本地化** | [#1586](https://github.com/agentscope-ai/CoPaw/issues/1586) | 文档类 PR 增多（如 FAQ），显示团队正响应此诉求 |
| **Linux 桌面版** | [#1573](https://github.com/agentscope-ai/CoPaw/issues/1573) | 尚无技术方案，但用户需求明确 |

> 📌 判断：**多 Agent 编排** 和 **细粒度资源监控** 极可能成为 v0.2.0 的核心方向。

---

## 7. 用户反馈摘要

- **痛点**：
  - 升级过程混乱（pip 升级失败、Docker 内版本管理困难）→ 多见于 [#1555](https://github.com/agentscope-ai/CoPaw/issues/1555)、[#1694](https://github.com/agentscope-ai/CoPaw/issues/1694)
  - 飞书/钉钉等企业通道稳定性差，影响工作流集成
  - Windows 安装体验不佳（端口冲突、启动慢）

- **满意点**：
  - 社区响应迅速，文档持续完善（如新增 FAQ）
  - 支持本地模型（llama.cpp）和多种 LLM 提供商
  - 控制台 UI 功能丰富（如即将支持的头像上传 [#1791](https://github.com/agentscope-ai/CoPaw/pull/1791)）

- **典型场景**：
  > “用飞书发了个语音，后面说啥都出错” —— 反映用户将 CoPaw 作为日常办公助手的真实使用场景，对稳定性要求极高。

---

## 8. 待处理积压

以下重要 Issue 长期未获官方响应，建议维护者优先关注：

- [#1076](https://github.com/agentscope-ai/CoPaw/issues/1076)（Open, 2026-03-09）：llama.cpp 本地模型加载失败，影响离线用户
- [#1551](https://github.com/agentscope-ai/CoPaw/issues/1551)（Closed, 但诉求未解）：飞书云文档/多维表格不支持，用户质疑产品完整性
- [#1587](https://github.com/agentscope-ai/CoPaw/issues/1587)（Closed）：多 Agent 支持需求被标记为“enhancement”但无后续 roadmap

> 🔔 **提醒**：尽管部分 Issue 被关闭，但用户核心诉求（如多 Agent、企业集成）仍未解决，需制定公开路线图以管理预期。

--- 

**报告生成时间**：2026-03-21  
**数据来源**：CoPaw GitHub Repository (agentscope-ai/CoPaw)

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

**ZeptoClaw 项目动态日报**  
📅 日期：2026-03-21  
🔗 项目主页：[github.com/qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)

---

### 1. **今日速览**  
过去24小时内，ZeptoClaw 社区活跃度维持在低水平但具战略意义的状态：共新增/更新 2 个 Issues，无 Pull Request 提交或版本发布。两个开放 Issue 均聚焦于架构演进与工具链增强，反映出项目正从基础功能开发向可组合性、测试可维护性方向深化。尽管无代码合并，但技术讨论体现出对长期可维护性和安全边界的关注，整体项目处于“设计驱动”阶段。

---

### 2. **版本发布**  
❌ 无新版本发布。

---

### 3. **项目进展**  
🔧 过去24小时无 PR 合并或关闭，无直接代码变更。项目整体未发生功能性推进，但技术路线讨论为后续开发奠定基础。

---

### 4. **社区热点**  
🔥 **#387 [feat] Core templates based on Containerfiles mapped-to/launched-in orchestrated Firecracker VM's**  
- 链接：https://github.com/qhkm/zeptoclaw/issues/387  
- 评论数：6（过去24小时活跃）  
- 作者：@taqtiqa-mark  
- 分析：该 Issue 提出将 Coding Agent Frameworks（如 pi-coding-agent、claude-code 等）视为普通应用节点，通过 Containerfile 模板在 Firecracker 微虚拟机中统一编排运行。此举旨在控制“功能蔓延”（feature creep）和“安全面扩张”（security surface expansion），提升系统隔离性与可复用性。评论中隐含对当前架构耦合度的担忧，社区正探讨是否将 agent 运行时抽象为标准化节点模型。该议题可能影响未来架构设计方向，属高影响力讨论。

---

### 5. **Bug 与稳定性**  
⚠️ 过去24小时无新 Bug 报告、崩溃或回归问题提交。当前无已知高严重性缺陷待修复。

---

### 6. **功能请求与路线图信号**  
📌 两项新功能请求值得关注，均具备较高纳入路线图潜力：

- **#387：基于 Containerfile 的 Firecracker VM 模板化部署**  
  → 信号强度：⭐⭐⭐⭐☆  
  该提案直击当前 agent 框架集成带来的架构复杂性问题，提出“一切皆节点”的统一抽象，符合 ZeptoClaw 轻量化、高隔离的设计哲学。若采纳，将显著提升安全边界与部署一致性，可能成为 v0.5+ 的核心特性。

- **#391：工具链增强 —— 合规性测试夹具、模糊匹配编辑与输出截断**  
  → 信号强度：⭐⭐⭐☆☆  
  链接：https://github.com/qhkm/zeptoclaw/issues/391  
  作者：@qhkm（维护者本人）  
  该 Issue 提出引入 JSON 格式的 conformance fixture 测试机制，支持无代码添加回归测试用例，提升工具链的可测试性与可维护性。虽非用户-facing 功能，但对长期项目健康度至关重要，且由核心维护者发起，落地可能性较高，预计将作为内部工具链优化在近期版本中实现。

---

### 7. **用户反馈摘要**  
💬 从 Issues 评论中提炼关键反馈：

- **痛点**：当前 Coding Agent 集成方式导致“安全面扩张”与“功能蔓延”，缺乏统一运行时抽象，增加维护成本与攻击面（#387）。
- **使用场景**：用户期望将各类 AI agent（如 claude-code、gemini-cli）作为标准化组件部署，而非特殊处理，以提升可组合性与隔离性。
- **满意度**：无直接负面情绪表达，但隐含对架构演进缓慢的期待；社区对“去特殊化”设计方向持开放态度。

---

### 8. **待处理积压**  
📌 以下为长期未响应的重要 Issue，建议维护者关注：

- **#387**（创建于 2026-03-17，已持续 4 天）  
  虽近期有评论互动，但尚无维护者正式回应或 milestone 标记。该 Issue 涉及核心架构变更，需明确是否纳入路线图或提供设计反馈，避免社区期待落空。

> ✅ 建议：为 #387 添加 `needs-design-review` 或 `roadmap-candidate` 标签，并指派技术负责人进行初步评估。

---

**总结**：ZeptoClaw 今日虽无代码提交，但技术讨论质量高，聚焦架构演进与测试可维护性，体现项目向成熟阶段过渡的特征。建议加强核心 Issue 的响应节奏，以维持社区信心与参与度。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

**EasyClaw 项目动态日报**  
📅 日期：2026-03-21  
🔗 项目主页：[github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

### 1. **今日速览**  
过去24小时内，EasyClaw 项目整体活跃度较低，仅新增1个 Issue，无 Pull Request 提交或合并。社区互动趋于平稳，但值得注意的是，项目发布了一个新版本 v1.7.3，表明开发团队仍在持续推进产品迭代。当前项目处于“维护+小步更新”阶段，用户反馈集中于特定平台兼容性问题，尚未出现大规模功能诉求或紧急缺陷。

---

### 2. **版本发布**  
✅ **RivonClaw v1.7.3 已发布**  
本次更新主要聚焦于 **macOS 平台安装体验优化**，针对用户普遍反馈的 Gatekeeper 安全拦截问题提供了明确解决方案说明。

- **更新内容**：  
  在 Release 说明中补充了 macOS 用户遇到“'RivonClaw' is damaged and can't be opened”错误时的详细排查与绕过指引（通过 Terminal 执行 `xattr -cr` 命令解除隔离属性）。
- **破坏性变更**：无  
- **迁移注意事项**：无需代码迁移，属文档与用户体验优化；建议 macOS 用户参考新版安装说明重新尝试启动应用。  
🔗 [v1.7.3 Release 页面](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.3)

> 💡 分析：该版本虽无功能变更，但显著降低了 macOS 用户的使用门槛，体现了对跨平台兼容性的重视，有助于提升用户留存率。

---

### 3. **项目进展**  
❌ 今日无 Pull Request 合并或关闭，核心功能开发暂缓。结合近期发布节奏判断，团队可能正处于版本稳定期，重点转向问题修复与用户体验优化，而非大规模功能扩展。

---

### 4. **社区热点**  
🔥 **Issue #25：Windows 11 下 v1.7.2 出现 “400 [] is too short - 'tools'” 错误**  
- 作者：@slowayear  
- 状态：Open（0 评论，0 点赞）  
- 描述：用户在 Windows 11 系统运行 v1.7.2 版本时，界面提示异常错误信息 “⚠ 400 [] is too short - 'tools'”，并附截图显示对话回复区域仅展示该错误文本，无法正常交互。  
🔗 [Issue #25](https://github.com/gaoyangz77/rivonclaw/issues/25)

> 📌 分析：该问题虽暂无社区响应，但涉及核心交互流程中断，可能源于 API 请求参数校验逻辑缺陷或本地配置解析异常。鉴于错误信息指向 `'tools'` 字段长度不足，推测与工具调用（tool calling）模块相关，需优先排查 Windows 平台下的输入处理逻辑。

---

### 5. **Bug 与稳定性**  
⚠️ **高优先级 Bug（待修复）**  
- **Issue #25**：Windows 11 环境下工具调用接口返回 400 错误，导致用户无法正常使用对话功能。  
  - 严重程度：**高**（影响核心功能可用性）  
  - 平台特异性：Windows 11 + v1.7.2  
  - 当前状态：**无关联 Fix PR**，需维护者介入复现与修复  

> 建议：尽快在 Windows 测试环境中复现该问题，并检查 `tools` 参数序列化或默认值处理逻辑是否存在平台差异。

---

### 6. **功能请求与路线图信号**  
📭 今日无新功能请求提出。结合近期动态，用户需求集中于**稳定性提升**与**跨平台兼容性优化**，而非新增能力。预计下一版本（v1.7.4 或 v1.8.0）将优先解决 Windows 平台工具调用异常问题，并可能进一步优化安装引导流程。

---

### 7. **用户反馈摘要**  
从现有 Issue 可提炼以下关键信息：  
- **痛点**：  
  - macOS 用户因 Gatekeeper 拦截误判应用“损坏”，导致安装失败（已通过 v1.7.3 文档缓解）；  
  - Windows 用户遭遇工具调用接口报错，直接影响核心对话功能（亟待修复）。  
- **使用场景**：个人 AI 助手日常交互，依赖工具调用实现复杂任务处理。  
- **满意度**：用户对跨平台支持有明确期待，但对未签名应用和接口稳定性存在顾虑。

---

### 8. **待处理积压**  
📌 **需关注长期未响应 Issue**：  
目前仅 Issue #25 处于开放状态且无维护者回应，虽为新提交，但因涉及核心功能故障，**建议 48 小时内给予初步响应**，避免用户流失。若该问题在 v1.7.3 中仍未修复，应考虑 hotfix 发布。

> 🔔 维护者提醒：请优先验证 Windows 平台下 `tools` 参数处理逻辑，并评估是否需在 v1.7.4 中紧急修复。

---  
📊 **项目健康度评估**：★★★☆☆（3/5）  
- 优势：持续发布更新，重视用户体验  
- 风险：跨平台 Bug 响应滞后，可能影响口碑  
- 建议：建立跨平台测试矩阵，加强 Issue 响应 SLA

</details>

---
*本日报由 [Big Model Radar](https://github.com/gsscsd/big_model_radar) 自动生成。*