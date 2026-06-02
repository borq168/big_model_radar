# OpenClaw 生态日报 2026-04-30

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-30 02:06 UTC

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
- [NemoClaw](https://github.com/NVIDIA/NemoClaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报

**报告日期：** 2026-04-30
**数据来源：** github.com/openclaw/openclaw

---

## 1. 今日速览

过去 24 小时内，OpenClaw 项目保持极高活跃度，共处理 **500 条 Issues 更新**（481 条新开/活跃，19 条关闭）和 **500 条 PR 更新**（469 条待合并，31 条已合并/关闭）。项目于今日发布了 **v2026.4.27** 版本，重点引入了 Codex Computer Use 的完整安装命令、市场发现功能及 MCP 安全检查。社区讨论热度高涨，Issue #75（Linux/Windows 桌面应用）以 101 条评论领跑，Bug 报告与功能请求均保持较高音量，整体项目健康度良好但存在若干回归问题需关注。

---

## 2. 版本发布

### v2026.4.27 发布

**发布内容：**

- **Codex Computer Use 增强**：新增 `status`/`install` 命令、市场发现功能及 fail-closed MCP 检查，用于桌面控制场景。感谢 @pash-openai。
- **DeepInfra 集成**：DeepInfra 作为新的内置提供商加入，支持模型发现、媒体生成/编辑、TTS 等功能。

**相关链接：** https://github.com/openclaw/openclaw/releases/tag/v2026.4.27

---

## 3. 项目进展

以下为今日合并/关闭的重要 PRs：

| PR 编号 | 标题 | 状态 | 说明 |
|---------|------|------|------|
| [#74742](https://github.com/openclaw/openclaw/pull/74742) | fix(file-transfer): require canonical node policy authorization | OPEN | 修复 ClawSweeper 发现的问题，要求规范文件传输路径和目录获取条目在读写前完成授权 |
| [#74134](https://github.com/openclaw/openclaw/pull/74134) | feat(file-transfer): add bundled plugin for binary file ops on nodes | OPEN | 新增文件传输插件，提供 `file_fetch`、`dir_list`、`dir_fetch`、`file_write` 四个工具，支持代理读写配对节点上的二进制文件 |
| [#74716](https://github.com/openclaw/openclaw/pull/74716) | Add node-hosted MCP session plumbing | OPEN | 为原生 Mac computer-use 计划添加节点托管 MCP 会话基础设施 |
| [#74713](https://github.com/openclaw/openclaw/pull/74713) | fix(plugins): repair configured provider runtime deps | OPEN | 集中化运行时依赖选择，确保 doctor、插件依赖和启动修复包含已配置的提供商所有者 |
| [#44013](https://github.com/openclaw/openclaw/pull/44013) | feat: add Linux and Windows desktop apps using Tauri | CLOSED | 使用 Tauri 框架添加 Linux 和 Windows 桌面应用脚手架、WebSocket 处理器、配对流程及 React/TypeScript 前端 |
| [#60027](https://github.com/openclaw/openclaw/pull/60027) | perf(gateway): add OPENCLAW_SKIP_MODEL_WARMUP env to skip startup model pre-warm | CLOSED | 新增环境变量跳过网关启动时的模型预热，解决受限环境下的启动延迟问题 |
| [#66395](https://github.com/openclaw/openclaw/pull/66395) | Fix/disable refresh during active turn | CLOSED | 修复活跃回合期间刷新按钮仍可点击的问题，防止网关会话卡死 |

**进展评估：** 今日 PR 活动聚焦于文件传输能力扩展（#74134、#74742）、桌面应用生态完善（#44013）及性能优化（#60027），项目功能边界持续拓展。

---

## 4. 社区热点

### 评论数最多的 Issues

| Issue 编号 | 标题 | 评论数 | 核心诉求 |
|------------|------|--------|----------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows Clawdbot Apps | 101 | 跨平台桌面应用需求强烈，macOS/iOS/Android 已有实现，Linux/Windows 缺失 |
| [#12590](https://github.com/openclaw/openclaw/issues/12590) | `memoryFlush` does not fire reliably | 19 | 内存刷新逻辑存在去重缺陷，每隔一次自动压缩周期才触发 |
| [#72338](https://github.com/openclaw/openclaw/issues/72338) | Gateway CPU spin causes Telegram replies to stall | 18 | 网关高 CPU 状态导致 Telegram 轮询卡死，状态探测超时 |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | Tiered bootstrap file loading for progressive context control | 14 | 引导文件按层级加载，减少 LLM token 消耗 |
| [#50090](https://github.com/openclaw/openclaw/issues/50090) | Community Skill Development & ClawHub | 13 | 社区技能生态系统不完善，承诺与实践差距大 |
| [#12602](https://github.com/openclaw/openclaw/issues/12602) | Slack Block Kit support for agent messages | 13 | Slack 消息格式增强，支持 Block Kit 交互式响应 |

**热点分析：** Issue #75 的高评论量反映出用户对跨平台一致体验的强烈期待，建议优先推进 #44013 的 Windows/Linux 桌面应用落地。#50090 揭示 ClawHub 生态建设任重道远，需关注技能发布和分发机制优化。

---

## 5. Bug 与稳定性

### 严重程度：高

| Issue 编号 | 标题 | 严重性 | 状态 | Fix PR |
|------------|------|--------|------|--------|
| [#72338](https://github.com/openclaw/openclaw/issues/72338) | Gateway CPU spin causes Telegram replies to stall | 高 | OPEN | - |
| [#73532](https://github.com/openclaw/openclaw/issues/73532) | Plugin loader hot loop saturates gateway and starves event loop | 高 | OPEN | - |
| [#45438](https://github.com/openclaw/openclaw/issues/45438) | structuredClone in session store cache causes native memory leak (~1GB/min) | 高 | OPEN | - |
| [#73366](https://github.com/openclaw/openclaw/issues/73366) | Ollama thinking parameter always forced to false | 回归 | CLOSED | - |

### 严重程度：中

| Issue 编号 | 标题 | 严重性 | 状态 | Fix PR |
|------------|------|--------|------|--------|
| [#12590](https://github.com/openclaw/openclaw/issues/12590) | `memoryFlush` does not fire reliably | 中 | OPEN | - |
| [#43747](https://github.com/openclaw/openclaw/issues/43747) | Memory management is in chaos | 中 | OPEN | - |
| [#40540](https://github.com/openclaw/openclaw/issues/40540) | `openclaw update` command fails with EBUSY error on Windows | 中 | OPEN | - |
| [#71992](https://github.com/openclaw/openclaw/issues/71992) | Control UI webchat duplicates every assistant reply | 回归 | OPEN | - |

**稳定性评估：** 今日报告的 Bug 中，高优先级问题集中在网关资源耗尽（CPU 螺旋、内存泄漏、事件循环饥饿），建议优先排查 #73532 的插件加载热循环问题，可能与 #72338 的 Telegram 卡顿存在关联。

---

## 6. 功能请求与路线图信号

### 高价值功能请求

| Issue 编号 | 标题 | 需求来源 | 潜在纳入 |
|------------|------|----------|----------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows Clawdbot Apps | 社区 | 高（#44013 已关闭） |
| [#12602](https://github.com/openclaw/openclaw/issues/12602) | Slack Block Kit support | 企业用户 | 中 |
| [#18160](https://github.com/openclaw/openclaw/issues/18160) | Direct Exec Mode for Cron Jobs | 开发者 | 高（#73476 相关） |
| [#13583](https://github.com/openclaw/openclaw/issues/13583) | Pre-response enforcement hooks (hard gates) | 金融/安全 | 中 |
| [#64046](https://github.com/openclaw/openclaw/issues/64046) | 敏感数据脱敏支持 | 企业合规 | 高 |
| [#42840](https://github.com/openclaw/openclaw/issues/42840) | MathJax/LaTeX Support in Control UI | 学术用户 | 低 |
| [#147](https://github.com/openclaw/openclaw/issues/147) | Brabble as Clawdis node for distributed voice wake | 物联网 | 中 |

**路线图信号：** 跨平台桌面应用（#75/#44013）、Cron 作业直接执行模式（#18160/#73476）、敏感数据脱敏（#64046）预计成为下一版本重点。#73476 的 `directReply` 标志可绕过 LLM 推理，暗示项目向高效工具调用方向演进。

---

## 7. 用户反馈摘要

### 核心痛点

1. **跨平台一致性不足**：Linux/Windows 用户无法获得与 macOS 相同的桌面应用体验（#75，101 评论）
2. **内存管理混乱**：不同用户的 OpenClaw 实例在内存存储方式上表现不一致，chunking/embedding 行为差异大（#43747）
3. **Telegram 可靠性问题**：轮询卡顿、静默消息丢失问题持续影响用户体验（#72338、#50040）
4. **技能加载失败**：从 `~/.openclaw/workspace/skills/` 加载的技能不完整，代理无法感知可用技能（#43735）
5. **子代理结果丢失**：子任务完成结果静默丢弃，无重试、无通知、无自动重启（#44925）

### 正面反馈

- 新版本 v2026.4.27 的 Codex Computer Use 改进获得社区认可
- 文件传输插件（#74134）解决了长期以来的二进制文件读写限制
- 模型预热跳过选项（#60027）受到受限环境用户欢迎

---

## 8. 待处理积压

### 长期未响应的重要 Issues（>30 天无维护者回复）

| Issue 编号 | 标题 | 创建时间 | 最后更新 | 评论数 | 优先级 |
|------------|------|----------|----------|--------|--------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows Clawdbot Apps | 2026-01-01 | 2026-04-30 | 101 | 高 |
| [#50090](https://github.com/openclaw/openclaw/issues/50090) | Community Skill Development & ClawHub | 2026-03-19 | 2026-04-30 | 13 | 中 |
| [#50880](https://github.com/openclaw/openclaw/issues/50880) | Steer queue mode silently degrades to followup | 2026-03-20 | 2026-04-30 | 8 | 中 |
| [#50165](https://github.com/openclaw/openclaw/issues/50165) | Subagents can appear completed before work is finished | 2026-03-19 | 2026-04-30 | 7 | 中 |
| [#47975](https://github.com/openclaw/openclaw/issues/47975) | Subagent sessions persist after completion | 2026-03-16 | 2026-04-30 | 7 | 中 |
| [#50093](https://github.com/openclaw/openclaw/issues/50093) | WhatsApp: Backfill missed messages after reconnection | 2026-03-19 | 2026-04-30 | 6 | 低 |
| [#50040](https://github.com/openclaw/openclaw/issues/50040) | Telegram delivery reliability: polling stalls | 2026-03-18 | 2026-04-30 | 6 | 中 |

### 建议关注

1. **Issue #75**（101 评论）长期占据评论榜首，建议维护者给出明确的路线图时间表
2. **子代理生命周期管理**（#44925、#50165、#47975）系列问题形成累积债务，建议统一设计子代理状态机
3. **Telegram 可靠性**（#72338、#50040）问题反复出现，需系统性排查轮询机制

---

**报告生成时间：** 2026-04-30
**数据截止：** 2026-04-30 23:59 UTC

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：** 2026-04-30
**分析范围：** 13 个主要开源项目

---

## 1. 生态全景

2026 年 4 月底，个人 AI 助手与自主智能体开源生态呈现**"一超多强、梯度分化"**的格局。OpenClaw 以日均 500 条 Issues/PR 更新的绝对体量占据生态核心位置，其 TypeScript 技术栈和跨平台战略持续吸引社区注意力；IronClaw、Zeroclaw、NemoClaw 等项目围绕 Rust 重构、性能优化和企业级功能展开差异化竞争；NanoBot、CoPaw 等项目在多渠道集成和中文生态适配上深耕细作。整体生态正处于从"功能快速堆叠"向"稳定性与可维护性"过渡的关键阶段，多个项目同时面临技术债务清理与架构重构的压力，安全性、多租户隔离、跨平台一致性成为社区讨论的共同焦点。

---

## 2. 各项目活跃度对比

| 项目 | Issues (新/活跃) | Issues (关闭) | PRs (待合并) | PRs (已合并) | Releases | 健康度 | 备注 |
|------|------------------|---------------|--------------|--------------|----------|--------|------|
| **OpenClaw** | 481 | 19 | 469 | 31 | 1 (v2026.4.27) | 🟢 优秀 | 绝对体量领先，合并效率待提升 |
| **IronClaw** | 25 | 1 | 18 | 32 | 1 (v0.27.0) | 🟢 优秀 | Reborn 架构冲刺，合并效率高 |
| **Zeroclaw** | 30 | 20 | 49 | 1 | 0 | 🟡 关注 | PR 积压严重，49 个待合并 |
| **NemoClaw** | 36 | 14 | 31 | 19 | 0 | 🟡 关注 | E2E 测试持续失败，稳定性风险 |
| **NanoClaw** | 2 | 1 | 29 | 21 | 0 | 🟢 良好 | PR 活跃度高，Issue 响应偏少 |
| **NanoBot** | 4 | 9 | 12 | 26 | 1 (v0.1.5.post3) | 🟢 优秀 | 合并效率高，版本发布稳健 |
| **PicoClaw** | 12 | 1 | 15 | 5 | 1 (nightly) | 🟢 良好 | 夜间构建节奏快，功能密集 |
| **CoPaw** | 15 | 14 | 9 | 11 | 1 (v1.1.5) | 🟢 优秀 | 稳定性优先，版本发布规范 |
| **LobsterAI** | 1 | 0 | 24 | 4 | 1 (v2026.4.29) | 🟢 良好 | PR 积压 16 个 stale，需清理 |
| **Moltis** | 4 | 2 | 5 | 3 | 2 (20260429.01/02) | 🟢 良好 | 快速迭代，安全修复及时 |
| **TinyClaw** | 0 | 0 | 0 | 0 | 0 | ⚪ 静默 | 无活动 |
| **ZeptoClaw** | 0 | 0 | 0 | 0 | 0 | ⚪ 静默 | 无活动 |
| **EasyClaw** | 0 | 0 | 0 | 0 | 0 | ⚪ 静默 | 无活动 |

**关键数据洞察：**

- **活跃项目**：10 个（76.9%），静默项目 3 个（23.1%）
- **日均总活动**：约 806 条 Issues/PRs 更新
- **版本发布**：7 个项目发布新版本，发布率 53.8%
- **PR 积压**：Zeroclaw（49）、LobsterAI（24）、NemoClaw（31）存在显著积压

---

## 3. OpenClaw 在生态中的定位

### 3.1 规模优势

OpenClaw 以 **500 条/日** 的活动量级独占鳌头，是第二梯队项目（IronClaw、Zeroclaw、NemoClaw）的 **10 倍**。这一体量优势带来以下效应：

- **社区规模**：Issue #75（Linux/Windows 桌面应用）积累 101 条评论，反映出庞大的用户基础和强烈的需求表达
- **生态辐射**：作为核心参照项目，NanoBot、Zeroclaw、PicoClaw 等项目在功能设计、API 契约上主动对标 OpenClaw
- **维护压力**：469 个待合并 PR 创历史新高，审查资源成为瓶颈

### 3.2 技术路线差异

| 维度 | OpenClaw | IronClaw | Zeroclaw | NanoBot |
|------|----------|----------|----------|---------|
| **语言** | TypeScript | Rust | Rust | TypeScript |
| **架构** | 单体 + 插件 | 微服务（Reborn） | 模块化 | 单体 |
| **核心优势** | 跨平台、渠道丰富 | 性能、安全 | 轻量、嵌入式 | 中文优化 |
| **目标用户** | 通用开发者 | 企业/高性能场景 | 资源受限环境 | 中文社区 |

### 3.3 社区规模对比

| 项目 | 活跃 Issue 数 | 热门 Issue 评论数 | PR 合并率 | 社区成熟度 |
|------|---------------|-------------------|-----------|------------|
| **OpenClaw** | 481 | 101（#75） | 6.2%（31/500） | ⭐⭐⭐⭐⭐ |
| **IronClaw** | 25 | 38（#2987 EPIC） | 64%（32/50） | ⭐⭐⭐⭐ |
| **Zeroclaw** | 30 | 15（#6123） | 2%（1/50） | ⭐⭐⭐ |
| **NanoBot** | 4 | 6（#3095） | 68%（26/38） | ⭐⭐⭐ |

---

## 4. 共同关注的技术方向

以下技术方向在多个项目中**同步涌现**，反映行业共识：

### 4.1 多渠道消息可靠性

| 项目 | 具体问题 | 诉求 |
|------|----------|------|
| **OpenClaw** | Telegram 轮询卡死（#72338）、WhatsApp 静默丢失 | 消息投递确认、重试机制 |
| **Zeroclaw** | WhatsApp cron 投递失败（#6230） | 渠道可靠性保障 |
| **CoPaw** | 企业微信频繁断开（#2757） | 心跳保活、连接恢复 |
| **Moltis** | Telegram Docker 故障（#918） | 容器化部署兼容 |

**共同诉求**：建立统一的**消息投递契约**，包含状态确认、失败重试、死信队列等机制。

### 4.2 跨平台桌面应用

| 项目 | Issue | 评论数 | 状态 |
|------|-------|--------|------|
| **OpenClaw** | #75 Linux/Windows 桌面应用 | 101 | PR #44013 已关闭，待推进 |
| **PicoClaw** | #2625 WhatsApp 支持编译版本 | 2 | stale |
| **NemoClaw** | #2715 平台感知安装程序 | - | PR 评审中 |

**共同诉求**：覆盖 Linux/Windows/macOS 全平台，提供一致的桌面端体验。

### 4.3 安全与沙箱隔离

| 项目 | 安全问题 | 严重程度 |
|------|----------|----------|
| **OpenClaw** | 文件传输路径规范（#74742） | 高 |
| **Zeroclaw** | forbidden_path_argument 误拦截（#5518）、Context spillage（#5415） | S0 |
| **IronClaw** | no-exposure safeguards（#3032） | Cutover Blocker |
| **CoPaw** | 任意文件遍历漏洞（#3955） | 高 |
| **Moltis** | 沙箱逃逸漏洞（#924） | 已修复 |

**共同诉求**：构建**纵深防御**体系，包括文件系统隔离、网络边界、凭证管理、运行时权限控制。

### 4.4 本地推理与 Ollama 集成

| 项目 | Ollama 相关 Issue | 状态 |
|------|-------------------|------|
| **OpenClaw** | #6123 default_model 配置问题 | OPEN |
| **Zeroclaw** | #2199 端口缺失、#1924 检测失败 | OPEN |
| **NemoClaw** | #2707 WSL 检测、#2199 端口策略 | OPEN |
| **PicoClaw** | #1068 本地模型幻觉 | stale |

**共同诉求**：简化 Ollama 本地推理配置，提供自动检测、端口管理、模型验证等开箱即用体验。

### 4.5 多模型支持与路由

| 项目 | 功能请求 | 优先级 |
|------|----------|--------|
| **OpenClaw** | DeepInfra 集成（已实现）、小米模型（#3518） | 中 |
| **NanoClaw** | Google Gemini 提供商（3 个 PR 迭代） | 高 |
| **CoPaw** | 视觉模型路由（#3940）、自动切换（#3956） | 高 |
| **PicoClaw** | Intel OpenVINO 本地推理（#2703） | 中 |

**共同诉求**：构建**模型无关的抽象层**，支持按场景、成本、能力动态路由。

---

## 5. 差异化定位分析

### 5.1 功能侧重差异

| 项目 | 核心功能 | 差异化亮点 |
|------|----------|------------|
| **OpenClaw** | 全渠道集成、跨平台桌面 | 生态最完整，渠道覆盖最广 |
| **IronClaw** | Rust 重构、企业级安全 | Reborn 架构，性能与安全并重 |
| **Zeroclaw** | 轻量嵌入式、协议层重构 | ACP 协议 v1、WASM 运行时 |
| **NanoBot** | 中文优化、OneCLI 工具生态 | Gmail/GCal/YNAB 原生集成 |
| **CoPaw** | 多 Agent 协作、中文渠道 | 企业微信/飞书深度集成 |
| **NemoClaw** | NVIDIA 生态、DGX 部署 | DGX Spark/Station 优化 |
| **Moltis** | 斜杠命令、语音人格 | /btw、/fast、/insights 命令体系 |
| **LobsterAI** | 记忆系统、导入导出 | Markdown/JSON 导出、上下文管理 |

### 5.2 目标用户分层

| 用户类型 | 推荐项目 | 理由 |
|----------|----------|------|
| **通用开发者** | OpenClaw | 渠道最全，文档最完善 |
| **企业用户** | IronClaw、CoPaw | 安全合规、多租户支持 |
| **中文社区** | NanoBot、CoPaw | 中文渠道、本地化优化 |
| **资源受限环境** | Zeroclaw、PicoClaw | 轻量级、Rust 高效 |
| **NVIDIA GPU 用户** | NemoClaw | DGX 原生支持 |
| **快速原型** | Moltis | 斜杠命令、即时交互 |

### 5.3 技术架构关键差异

| 维度 | TypeScript 阵营 | Rust 阵营 |
|------|-----------------|-----------|
| **代表项目** | OpenClaw、NanoBot、Moltis | IronClaw、Zeroclaw |
| **性能** | 中等 | 极高 |
| **内存安全** | 依赖 GC | 编译期保证 |
| **学习曲线** | 低 | 高 |
| **生态库** | npm 丰富 | crates.io 增长中 |
| **适用场景** | 快速迭代、渠道集成 | 高性能、安全关键 |

---

## 6. 社区热度与成熟度

### 6.1 活跃度分层

```
第一梯队（体量领先）
├── OpenClaw: 500 条/日，生态核心
└── IronClaw: 76 条/日，架构重构

第二梯队（稳健发展）
├── Zeroclaw: 100 条/日，PR 积压
├── NemoClaw: 100 条/日，稳定性风险
├── NanoClaw: 52 条/日，PR 驱动
└── NanoBot: 51 条/日，版本稳健

第三梯队（功能密集）
├── CoPaw: 49 条/日，中文深耕
├── PicoClaw: 33 条/日，夜间构建
└── LobsterAI: 29 条/日，版本规范

第四梯队（快速迭代）
└── Moltis: 14 条/日，安全优先

静默项目
├── TinyClaw
├── ZeptoClaw
└── EasyClaw
```

### 6.2 成熟度评估

| 项目 | 阶段 | 特征 |
|------|------|------|
| **OpenClaw** | 质量巩固 | 功能完备，面临技术债务清理 |
| **IronClaw** | 架构重构 | Reborn 落地，API 契约冻结中 |
| **NanoBot** | 快速迭代 | 工具生态扩展，版本发布稳健 |
| **CoPaw** | 稳定增强 | Bug 修复为主，功能稳步推进 |
| **Zeroclaw** | 快速发展 | PR 积压需清理，架构演进中 |
| **NemoClaw** | 质量攻关 | E2E 测试失败，需稳定性优先 |
| **Moltis** | 快速迭代 | 安全修复及时，功能快速交付 |

---

## 7. 值得关注的趋势信号

### 7.1 从社区反馈提炼的行业趋势

**趋势 1：安全成为第一公民**

多个项目同时报告安全漏洞并快速修复（CoPaw #3955、Moltis #924、Zeroclaw #5518/#5415），社区对安全问题的敏感度显著提升。预计下一阶段：
- 沙箱隔离将成为标配功能
- 凭证管理、网络边界将更加严格
- 安全审计流程将引入 CI 流水线

**趋势 2：多 Agent 协作范式演进**

OpenClaw（#75）、CoP

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**报告日期**: 2026-04-30
**项目**: HKUDS/nanobot
**数据来源**: GitHub 过去 24 小时活动

---

## 1. 今日速览

NanoBot 今日保持高度活跃，共处理 **13 条 Issues** 和 **38 条 PRs**，其中 **26 条 PR 已合并**。新版本 **v0.1.5.post3** 正式发布，带来 57 个 PR 合并和 12 位新贡献者，重点强化了线程对话能力。社区在多渠道支持（微信多账号、飞书群聊回复逻辑）、Agent 稳定性（子代理迭代限制、内存原子写入）和插件系统（HookCenter）方面取得显著进展。项目整体处于快速迭代期，代码合并频率高，功能完善度持续提升。

---

## 2. 版本发布

### 🎉 v0.1.5.post3 正式发布

| 项目 | 详情 |
|------|------|
| **版本号** | v0.1.5.post3 |
| **发布时间** | 2026-04-30 |
| **合并 PR 数** | 57 |
| **新贡献者** | 12 |

**核心更新**：
- **线程对话成为平台一等公民**：飞书群组话题现支持独立会话隔离
- **多渠道完善**：Teams、WeChat、Feishu 等频道均有重要修复和功能增强
- **Agent 稳定性提升**：子代理迭代限制、内存写入原子性等关键修复

**迁移注意事项**：无重大破坏性变更，建议从 v0.1.5.post2 直接升级。

---

## 3. 项目进展

### 合并的重要 PRs

| PR | 作者 | 描述 | 链接 |
|----|------|------|------|
| **#3541** | @aiguozhi123456 | 新增 HookCenter 基础设施，支持命名钩子点和插件发现 | [#3541](https://github.com/HKUDS/nanobot/pull/3541) |
| **#3487** | @boogieLing | 支持按渠道配置 `sendProgress` 和 `sendToolHints` | [#3487](https://github.com/HKUDS/nanobot/pull/3487) |
| **#3508** | @yorkhellen | 修复 history.jsonl 原子写入，防止进程崩溃导致数据损坏 | [#3508](https://github.com/HKUDS/nanobot/pull/3508) |
| **#3505** | @chengyongru | 新增 Olostep 网页搜索提供者 | [#3505](https://github.com/HKUDS/nanobot/pull/3505) |
| **#3457** | @chengyongru | 新增 `create-instance` 内置技能，支持对话创建 Bot 实例 | [#3457](https://github.com/HKUDS/nanobot/pull/3457) |
| **#3510** | @JiajunBernoulli | 修复 Matrix 频道在 Windows 上的文件名兼容性问题 | [#3510](https://github.com/HKUDS/nanobot/pull/3510) |

### 开放中的重要 PRs

| PR | 作者 | 描述 | 链接 |
|----|------|------|------|
| **#3542** | @gracece | 微信个人账号多开支持 | [#3542](https://github.com/HKUDS/nanobot/pull/3542) |
| **#3543** | @04cb | 修复飞书群聊中 `reply_in_thread` 强制启用问题 | [#3543](https://github.com/HKUDS/nanobot/pull/3543) |
| **#3538** | @choiking | 新增 Gateway start/stop/restart/status 命令 | [#3538](https://github.com/HKUDS/nanobot/pull/3538) |
| **#3539** | @chengyongru | 新增 nanobot 升级向导技能 | [#3539](https://github.com/HKUDS/nanobot/pull/3539) |
| **#3534** | @chengyongru | 新增 CLAUDE.md 和 .agent/ 指南，辅助 AI 贡献者 | [#3534](https://github.com/HKUDS/nanobot/pull/3534) |
| **#3532** | @boogieLing | 子代理尊重配置的 max_iterations 参数 | [#3532](https://github.com/HKUDS/nanobot/pull/3532) |
| **#3517** | @XJPeng12 | 修复微信定时任务消息因缺少 context_token 被静默丢弃 | [#3517](https://github.com/HKUDS/nanobot/pull/3517) |

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 作者 | 评论数 | 主题 | 链接 |
|-------|------|--------|------|------|
| **#3095** | @wighawag | 6 | 自定义 Anthropic API 端点配置问题 | [#3095](https://github.com/HKUDS/nanobot/issues/3095) |
| **#2590** | @pmchan | 5 | v0.1.4.post6 升级后 MiniMax Provider 失效 | [#2590](https://github.com/HKUDS/nanobot/issues/2590) |
| **#1099** | @zwbdzb | 3 | Cron 请求参数配置暴露请求 | [#1099](https://github.com/HKUDS/nanobot/issues/1099) |
| **#1783** | @alexhopes | 2 | Codex Provider 60s 硬编码超时导致静默失败 | [#1783](https://github.com/HKUDS/nanobot/issues/1783) |
| **#1068** | @Claudioappassionato | 2 | 本地模型幻觉问题（持续未解决） | [#1068](https://github.com/HKUDS/nanobot/issues/1068) |

**热点分析**：
- **Provider 配置灵活性**：多个 Issue 反映自定义 Provider 端点配置不便，用户希望支持更多第三方 API（如 Anthropic、小米等）
- **稳定性问题**：MiniMax Provider 回归问题、Codex 超时问题引发较多关注
- **本地模型支持**：本地部署用户反馈模型幻觉问题，尚未得到有效解决

---

## 5. Bug 与稳定性

### 今日报告的 Bug（按严重程度）

| 严重程度 | Issue | 描述 | 状态 | Fix PR |
|----------|-------|------|------|--------|
| 🔴 **高** | #2590 | v0.1.4.post6 升级后 MiniMax Provider 完全失效 | OPEN | 无 |
| 🔴 **高** | #3533 | 飞书群聊强制启用 `reply_in_thread`，忽略 `replyToMessage` 配置 | OPEN | [#3543](https://github.com/HKUDS/nanobot/pull/3543) |
| 🟡 **中** | #3517 | 微信定时任务消息因缺少 context_token 被静默丢弃 | OPEN | [#3517](https://github.com/HKUDS/nanobot/pull/3517) |
| 🟡 **中** | #1068 | 本地模型持续出现幻觉问题 | OPEN (stale) | 无 |
| 🟢 **低** | #2341 | WebFetchTool 强制通过 Jina.ai 代理所有 URL | CLOSED | 无 |

**关键提醒**：
- **#2590** 已开放超过一个月，影响 MiniMax 用户，需优先处理
- **#3543** 已提交 Fix PR，建议尽快合并解决飞书群聊回复问题

---

## 6. 功能请求与路线图信号

### 用户提出的新功能需求

| Issue | 作者 | 功能描述 | 关联 PR | 纳入可能性 |
|-------|------|----------|---------|------------|
| **#3518** | @js110 | 支持小米模型 | 无 | 🟡 中 |
| **#3452** | @pepperdog999 | 按渠道配置 sendProgress/sendToolHints | [#3487](https://github.com/HKUDS/nanobot/pull/3487) | 🟢 **已实现** |
| **#877** | @kkayaychr | 改进 Agent 回答质量，减少无意义提问 | 无 | 🟡 中 |
| **#3542** | @gracece | 微信个人账号多开 | [#3542](https://github.com/HKUDS/nanobot/pull/3542) | 🟢 **开发中** |
| **#3539** | @chengyongru | 升级向导技能 | [#3539](https://github.com/HKUDS/nanobot/pull/3539) | 🟢 **开发中** |

**路线图信号**：
1. **多渠道精细化控制**成为明确方向（进度显示、工具提示按渠道配置）
2. **插件生态**受到重视（HookCenter 基础设施已合并）
3. **企业级功能**需求明显（多账号支持、Gateway 管理命令）

---

## 7. 用户反馈摘要

### 正面反馈
- **#877**: 用户称赞项目有趣，期待后续成熟化
- **#3512**: 第三方项目（SwarmScore）主动寻求集成

### 痛点与不满

| 场景 | 用户反馈 | Issue |
|------|----------|-------|
| **Provider 灵活性** | "使用 Anthropic API 时无法配置自定义端点" | [#3095](https://github.com/HKUDS/nanobot/issues/3095) |
| **升级回归** | "升级到 post6 后 MiniMax Provider 完全不工作" | [#2590](https://github.com/HKUDS/nanobot/issues/2590) |
| **本地模型** | "本地模型持续出现幻觉，所有模型都有问题" | [#1068](https://github.com/HKUDS/nanobot/issues/1068) |
| **Agent 能力** | "最新版本回复太多无意义问题，能力不足" | [#877](https://github.com/HKUDS/nanobot/issues/877) |

---

## 8. 待处理积压

### 长期未解决的重要 Issues

| Issue | 创建时间 | 状态 | 主题 | 等待时间 |
|-------|----------|------|------|----------|
| **#2590** | 2026-03-28 | OPEN | MiniMax Provider 失效 | ~33 天 |
| **#1068** | 2026-02-23 | OPEN (stale) | 本地模型幻觉 | ~66 天 |
| **#877** | 2026-02-20 | OPEN | Agent 回答质量差 | ~69 天 |

### 建议优先处理

1. **#2590** - MiniMax Provider 回归问题，影响生产环境用户
2. **#1068** - 本地模型幻觉问题，社区持续关注
3. **#3542** - 微信多账号功能开发中，建议关注进度

---

## 📊 关键指标

| 指标 | 数值 | 趋势 |
|------|------|------|
| Issues 活跃度 | 13 条/24h | 📈 持平 |
| PR 活跃度 | 38 条/24h | 📈 持平 |
| PR 合并率 | 68.4% (26/38) | ✅ 健康 |
| 新版本发布 | 1 个 (v0.1.5.post3) | 🎉 里程碑 |
| 贡献者增长 | 12 位新贡献者 | 📈 良好 |

---

*报告生成时间: 2026-04-30*
*数据来源: GitHub HKUDS/nanobot*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报

**报告日期：** 2026-04-30
**项目仓库：** github.com/zeroclaw-labs/zeroclaw

---

## 1. 今日速览

2026-04-30 是 Zeroclaw 项目高度活跃的一天。社区共产生 **50 条 Issues 更新**（30 条新开/活跃，20 条关闭）和 **50 条 PR 更新**（49 条待合并，1 条已合并/关闭），但未发布新版本。今日呈现以下特征：

- **安全类 Bug 集中爆发**：至少 4 个高危/安全相关 Issue 处于活跃状态，包括 `forbidden_path_argument` 误拦截、`Context spillage` 数据泄露风险、Bedrock API 认证头错误等
- **大型功能 PR 推进中**：#6179（web onboarding CRUD 端点，size: XL）和 #5978（语音捕获缓冲，size: XL）正在审查中
- **协议层重构**：ACP 协议 v1 实现（#6167）正在推进，涉及 tool-call 权限和 back-channel 机制
- **积压压力显著**：49 个待合并 PR 创下近期新高，审查资源可能成为瓶颈

---

## 2. 版本发布

**今日无新版本发布。**

最近版本信息请参考项目 Releases 页面：https://github.com/zeroclaw-labs/zeroclaw/releases

---

## 3. 项目进展

### 3.1 今日合并/关闭的 PRs

| PR 编号 | 标题 | 状态 | 关键内容 |
|---------|------|------|----------|
| [#6035](https://github.com/zeroclaw-labs/zeroclaw/pull/6035) | fix(channels/acp): correct tool output formatting | CLOSED | 修复 ACP 服务器 tool call 事件传输错误，tool 名称和输出无法正确显示的问题 |
| [#5498](https://github.com/zeroclaw-labs/zeroclaw/pull/5498) | fix: configure missing secrets/permissions for release pipeline | CLOSED | 修复 v0.6.9 发布管道中 7 个下游任务因缺少 secrets/权限失败的问题 |

### 3.2 重点推进中的 PRs

| PR 编号 | 标题 | 规模/风险 | 关键内容 |
|---------|------|-----------|----------|
| [#6179](https://github.com/zeroclaw-labs/zeroclaw/pull/6179) | feat(gateway,web,cli): web onboarding parity via per-property CRUD endpoints | XL / 高 | 新增 `/api/config/*` CRUD 端点，实现 dashboard、CLI 与底层配置的一致性驱动 |
| [#6230](https://github.com/zeroclaw-labs/zeroclaw/pull/6230) | fix(cron): allow whatsapp as cron delivery channel | XS / 低 | 支持 WhatsApp 作为 cron 任务投递渠道 |
| [#6167](https://github.com/zeroclaw-labs/zeroclaw/pull/6167) | fix(channels/acp): implement ACP protocol v1 with tool-call permission and back-channel | XL / 高 | 升级 ACP 协议至 v1，恢复与 Nori 的连接兼容性 |
| [#5978](https://github.com/zeroclaw-labs/zeroclaw/pull/5978) | feat(voice): speech capture buffer + STT dispatch | XL / 高 | 添加语音捕获缓冲和 STT 分发机制 |
| [#6220](https://github.com/zeroclaw-labs/zeroclaw/pull/6220) | feat(web): chat input lock + stop button + running indicator | S / 低 | 改善 Web UI 聊天输入框状态，防止重复提交 |

---

## 4. 社区热点

### 4.1 讨论最活跃的 Issues

| Issue 编号 | 标题 | 评论数 | 核心诉求 |
|------------|------|--------|----------|
| [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) | [Bug]: default_model issue on fresh install | 15 | 新安装用户在 LXC 容器中配置 ollama 时遇到 default_model 问题，阻断工作流（S1） |
| [#5509](https://github.com/zeroclaw-labs/zeroclaw/issues/5509) | feat(telegram): voice message transcription support | 7 | 社区强烈请求为 Telegram 频道添加语音消息转录功能，与 TypeScript 版本 OpenClaw 功能对齐 |
| [#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146) | [Feature]: Token consumption minimization via skill compilation | 6 | 通过 skill 编译减少 token 消耗，400+ 行的 SKILL.md 每次请求都完整发送，成本高昂 |
| [#5550](https://github.com/zeroclaw-labs/zeroclaw/issues/5550) | bug(memory): autosaved Conversation memories invisible to recall due to session_id mismatch | 6 | 自动保存的 Conversation 记忆因 session_id 不匹配而无法被召回 |

### 4.2 热点分析

**热点 #1：default_model 配置问题（#6123）**
- 15 条评论表明这是影响新用户体验的阻塞性问题
- 涉及 LXC 容器环境下的 ollama provider 配置
- 建议优先处理

**热点 #2：Telegram 语音转录（#5509）**
- 7 条评论，0 个点赞，社区关注度高
- 功能差距：ZeroClaw 的 Telegram 频道忽略语音消息，而 OpenClaw 已支持
- 已有功能请求标签，可能进入下一版本路线图

**热点 #3：Token 消耗优化（#5146）**
- 6 条评论 + 1 点赞，优先级 P2
- 核心问题：每次 skill 调用都发送完整 400+ 行文档
- 涉及性能、成本双重优化，符合长期技术债务清理方向

---

## 5. Bug 与稳定性

### 5.1 高危/安全类 Bug（需立即关注）

| Issue 编号 | 标题 | 严重度 | 状态 | 是否有 Fix PR |
|------------|------|--------|------|---------------|
| [#5518](https://github.com/zeroclaw-labs/zeroclaw/issues/5518) | [Bug]: forbidden_path_argument blocks safe redirect targets (/dev/null, /dev/stdout, etc.) | S0 - 数据丢失/安全风险 | OPEN | 无 |
| [#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415) | [Bug]: Context spillage from chat to schedule | S0 - 数据丢失/安全风险 | OPEN, blocked | 无 |
| [#5289](https://github.com/zeroclaw-labs/zeroclaw/issues/5289) | Bedrock provider sends API_KEY as x-api-key header, causing 403 | P1, in-progress | OPEN | 无 |
| [#5360](https://github.com/zeroclaw-labs/zeroclaw/issues/5360) | codex_cli tool passes unsupported `-q` flag to Codex CLI v0.118.0 | P1, in-progress | OPEN | [#5361](https://github.com/zeroclaw-labs/zeroclaw/pull/5361) |

### 5.2 中等严重度 Bug

| Issue 编号 | 标题 | 严重度 | 状态 | 是否有 Fix PR |
|------------|------|--------|------|---------------|
| [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) | default_model issue on fresh install | S1 - 工作流阻塞 | OPEN | 无 |
| [#5475](https://github.com/zeroclaw-labs/zeroclaw/issues/5475) | Copilot + Telegram result in Invalid parameter | S1, blocked | OPEN | 无 |
| [#5553](https://github.com/zeroclaw-labs/zeroclaw/issues/5553) | Shell tool executes but Telegram channel returns raw tool_calls JSON | S1, closed | CLOSED | 无 |
| [#5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459) | Ollama provider sends tool_count=0 — native tool calling never reaches the API | P2, closed | CLOSED | 无 |
| [#5550](https://github.com/zeroclaw-labs/zeroclaw/issues/5550) | autosaved Conversation memories invisible to recall | P2 | OPEN | 无 |
| [#6153](https://github.com/zeroclaw-labs/zeroclaw/issues/6153) | Matrix: voice transcription failed: Unsupported audio format | P2 | OPEN | 无 |

### 5.3 Bug 趋势分析

- **安全类 Bug 占比上升**：至少 4 个 S0/S1 级别安全相关 Issue 处于活跃状态
- **Provider 层问题集中**：Ollama、Bedrock、Anthropic 等 provider 均有问题报告
- **Channel 层稳定性**：Telegram、Matrix、Slack 等渠道均有回归问题
- **修复效率**：部分 Issue（如 #5459、#5553）已关闭，但未见对应 Fix PR，可能为重复报告或自愈

---

## 6. 功能请求与路线图信号

### 6.1 高价值功能请求

| Issue 编号 | 标题 | 优先级 | 社区支持 | 关联 PR |
|------------|------|--------|----------|---------|
| [#5509](https://github.com/zeroclaw-labs/zeroclaw/issues/5509) | feat(telegram): voice message transcription support | - | 7 评论 | 无 |
| [#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146) | Token consumption minimization via skill compilation | P2 | 6 评论, 1 👍 | 无 |
| [#5501](https://github.com/zeroclaw-labs/zeroclaw/issues/5501) | [Feature]: trigger cron manually | - | 3 评论 | 无 |
| [#6225](https://github.com/zeroclaw-labs/zeroclaw/issues/6225) | [Feature]: Smart Truncation for Telegram | - | 1 评论 | 无 |
| [#5502](https://github.com/zeroclaw-labs/zeroclaw/issues/5502) | Feature: Add allowed_tools configuration option to AgentConfig | - | 3 评论, closed | 无 |
| [#5503](https://github.com/zeroclaw-labs/zeroclaw/issues/5503) | Feature: Pre-LLM command shortcuts for deterministic actions | - | 2 评论, closed | 无 |

### 6.2 路线图信号分析

**已纳入开发的功能（通过 PR 判断）：**

1. **Web UI 增强**（#6179, #6218, #6217, #6220）
   - per-property CRUD 端点
   - OpenRouter 免费模型标记
   - 内存行直接打开聊天
   - 聊天输入锁 + 停止按钮

2. **语音功能**（#5978）
   - 语音捕获缓冲 + STT 分发
   - 预计下一版本重点

3. **协议升级**（#6167）
   - ACP 协议 v1
   - tool-call 权限和 back-channel

4. **安全加固**（#5939, #5905）
   - git -C vs -c 区分
   - DockerSandbox 工作区挂载

---

## 7. 用户反馈摘要

### 7.1 真实用户痛点

**痛点 1：配置复杂度高，新手不友好**
- Issue #6123：LXC 容器新安装用户遇到 default_model 配置问题
- 反馈：配置流程对新手不够友好，错误信息不够明确

**痛点 2：多渠道稳定性参差不齐**
- Telegram：语音消息被忽略（#5509）、Shell 工具返回原始 JSON（#5553）
- Matrix：语音转录失败（#6153）
- Slack：thread_replies 导致会话连续性破坏（#6226）
- Discord：Canvas 工具帧无法到达 WebSocket 客户端（#5356）

**痛点 3：成本与性能**
- Issue #5146：每次 skill 调用发送 400+ 行文档，token 消耗巨大
- Issue #5503：简单确定性操作（如 IoT 控制）因 LLM 推理延迟高达 8 秒

**痛点 4：安全顾虑**
- Issue #5518：`forbidden_path_argument` 误拦截 `/dev/null` 等安全重定向目标
- Issue #5415：聊天上下文泄露到定时任务，存在数据安全风险
- Issue #5289：Bedrock provider 错误使用 API_KEY 认证头

### 7.2 用户满意/正向反馈

- **Issue #5502**（allowed_tools 配置）：用户明确表示需要通过配置文件控制工具注入，而非代码级别配置
- **Issue #5509**（Telegram 语音）：用户提到 TypeScript 版本 OpenClaw 已支持，期望 ZeroClaw 跟进
- **Issue #5701**（clear_messages trait）：用户提出 O(1) 会话重置需求，推动 `SessionBackend` trait 扩展

---

## 8. 待处理积压

### 8.1 长期未响应的关键 Issue

| Issue 编号 | 标题 | 创建日期 | 状态 | 积压时长 | 优先级 |
|------------|------|----------|------|----------|--------|
| [#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146) | Token consumption minimization via skill compilation | 2026-03-29 | OPEN | ~32 天 | P2 |
| [#5125](https://github.com/zeroclaw-labs/zeroclaw/issues/5125) | CPU spikes when typing into agent chat | 2026-03-29 | CLOSED | ~32 天 | S0 |
| [#5170](https://github.com/zeroclaw-labs/zeroclaw/issues/5170) | memory_recall with query '*' returns empty | 2026-04-02 | OPEN | ~28 天 | - |
| [#5244](https://github.com/zeroclaw-labs/zeroclaw/issues/5244) | Dashboard: Channels tab crash on v0.6.8 | 2026-04-03 | OPEN | ~27 天 | P1 |
| [#5289](https://github.com/zeroclaw-labs/zeroclaw/issues/5289) | Bedrock provider sends API_KEY as x-api-key header | 2026-04-04 | OPEN, in-progress | ~26 天 | P1 |
| [#5360](https://github.com/zeroclaw-labs/zeroclaw/issues/5360) | codex_cli tool passes unsupported `-q` flag | 2026-04-05 | OPEN, in-progress | ~25 天 | P1 |
| [#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415) | Context spillage from chat to schedule | 2026-04-06 | OPEN, blocked | ~24 天 | S0 |

### 8.2 积压 PR 统计

| 状态 | 数量 | 风险分布 |
|------|------|----------|
| 待合并 | 49 | 含多个 XL/高风险 PR |
| 已关闭 | 1 | - |

**积压风险提示：**
- 49 个待合并 PR 创近期新高，审查资源可能成为瓶颈
- 建议优先处理包含安全修复的 PR（#5361, #5939, #5905）
- 大型功能 PR（#6179, #5978）需尽早确定审查计划

### 8.3 建议关注事项

1. **安全类 Issue 需优先处理**：#5518、#5415 均为 S0 级别，涉及数据安全和路径安全
2. **Provider 层技术债务**：Ollama、Bedrock、Anthropic provider 均有问题报告，建议系统性 review
3. **Channel 层稳定性**：多渠道（Matrix、Telegram、Slack、Discord）均有回归问题，需回归测试覆盖
4. **积压 PR 清理**：建议按风险等级排序，优先合并安全修复和高优先级 bug fix

---

**报告生成时间：** 2026-04-30
**数据来源：** github.com/zeroclaw-labs/zeroclaw
**分析师：** AI 智能体与个人 AI 助手领域开源项目分析师

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报

**报告日期**: 2026-04-30
**数据来源**: GitHub (github.com/sipeed/picoclaw)

---

## 1. 今日速览

PicoClaw 项目今日保持高度活跃，共产生 **33 次更新**（13 条 Issues + 20 条 PRs）。项目发布了 **v0.2.7-nightly.20260430** 夜间构建版本，并完成了 **5 个 PR 的合并/关闭**。社区在多用户群聊消息归属、DeepSeek 视觉模型兼容、Slack Webhook 通道等方向取得显著进展。整体项目健康度良好，但存在 **2 个高优先级 Bug**（PID 检查漏洞、DeepSeek 400 错误）待修复，以及多个 stale 状态的功能请求需要维护者关注。

---

## 2. 版本发布

### 🌙 Nightly Build v0.2.7-nightly.20260430.a36472b5

| 项目 | 详情 |
|------|------|
| **版本号** | v0.2.7-nightly.20260430.a36472b5 |
| **构建类型** | 自动化夜间构建，可能不稳定 |
| **变更范围** | [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.7...main) |

> ⚠️ **注意**: 此为自动化构建版本，建议在生产环境谨慎使用。

---

## 3. 项目进展

### ✅ 今日合并/关闭的 PR（共 5 个）

| PR # | 标题 | 类型 | 状态 | 说明 |
|------|------|------|------|------|
| [#2710](https://github.com/sipeed/picoclaw/pull/2710) | Add CLI support for custom OpenAI-compatible endpoints and remove TUI | ✨ Enhancement | ✅ CLOSED | 重大变更：CLI 支持自定义 OpenAI 兼容端点，并移除 TUI 版本 |
| [#2714](https://github.com/sipeed/picoclaw/pull/2714) | attribute history messages per sender for multi-user group chats | ✨ Enhancement | ✅ CLOSED | 多用户群聊消息归属功能，已拆分为 #2715 继续开发 |
| [#2700](https://github.com/sipeed/picoclaw/pull/2700) | fix(docker): restore `make docker-build` | 🐞 Bug Fix | ✅ CLOSED | 修复 Docker 构建问题，更新 Go 版本至 1.25 |
| [#2711](https://github.com/sipeed/picoclaw/pull/2711) | Fix frontend copy button in HTTP context | 🐞 Bug Fix | ✅ CLOSED | 修复非安全上下文中剪贴板 API 不可用问题 |
| [#2709](https://github.com/sipeed/picoclaw/pull/2709) | Fix frontend copy button in HTTP context | 🐞 Bug Fix | ✅ CLOSED | 同 #2711 的重复提交 |

### 🔄 待合并的重要 PR（共 15 个）

| PR # | 标题 | 领域 | 说明 |
|------|------|------|------|
| [#2715](https://github.com/sipeed/picoclaw/pull/2715) | attribute history messages per sender for multi-user group chats | channel/agent | 多用户群聊消息归属（#2714 拆分版，9 个提交便于审查） |
| [#2719](https://github.com/sipeed/picoclaw/pull/2719) | feat(channels): add slack_webhook output-only channel | channel | 新增 Slack Webhook 输出通道，支持 Block Kit 格式 |
| [#2705](https://github.com/sipeed/picoclaw/pull/2705) | add MQTT channel support | channel | 新增 MQTT 协议消息通信支持 |
| [#2703](https://github.com/sipeed/picoclaw/pull/2703) | Add Intel OpenVINO Model Server support | provider | 本地 LLM 推理支持 Intel OpenVINO |
| [#2645](https://github.com/sipeed/picoclaw/pull/2645) | feat(bedrock): implement StreamingProvider | provider | AWS Bedrock 实时 token 流式输出 |
| [#2696](https://github.com/sipeed/picoclaw/pull/2696) | feat(mcp): support per-request dynamic headers | mcp | MCP 服务器支持动态 HTTP 头 |
| [#2708](https://github.com/sipeed/picoclaw/pull/2708) | fix(feishu): fix image download with API fallback | channel | 飞书图片下载 API 回退及富文本图片提取 |
| [#2713](https://github.com/sipeed/picoclaw/pull/2713) | fix(channels): dismiss tool feedback animation | channel/agent | 工具反馈动画在 turn 结束时正确关闭 |
| [#2717](https://github.com/sipeed/picoclaw/pull/2717) | feat: add DeepSeek vision unsupported error detection | provider | DeepSeek 视觉不支持错误检测 |
| [#2707](https://github.com/sipeed/picoclaw/pull/2707) | fix(seahorse): persist reasoning_content in sqlite history | provider | SeaHorse 历史记录持久化 reasoning_content |

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| Issue # | 标题 | 评论数 | 点赞 | 状态 | 热点分析 |
|---------|------|--------|------|------|----------|
| [#2171](https://github.com/sipeed/picoclaw/issues/2171) | [Refactor] Consider moving all OpenAI based endpoints supported to use OpenAI Responses API | 9 | 0 | 🟡 STALE | OpenAI 官方推荐迁移至 Responses API，社区关注 API 兼容性升级路径 |
| [#1042](https://github.com/sipeed/picoclaw/issues/1042) | [BUG] exec工具的guardCommand方法问题 | 6 | 1 | 🟡 STALE | exec 工具安全检查过于严格，误拦截合法命令（如 `curl wttr.in/Beijing`） |
| [#2548](https://github.com/sipeed/picoclaw/issues/2548) | [Error] Multiple authentication credentials received | 5 | 0 | 🟡 STALE | 配置文件中多认证凭证冲突问题 |
| [#2208](https://github.com/sipeed/picoclaw/issues/2208) | [RFC] Proposal to deprecate the TUI version and migrate its core features to the CLI | 1 | 8 | ✅ CLOSED | 8 票点赞支持弃用 TUI，项目架构重大调整方向已获共识 |

### 💡 路线图信号

**TUI 弃用提案已关闭** ([#2208](https://github.com/sipeed/picoclaw/issues/2208))：社区对迁移至纯 CLI 架构表示支持，与今日合并的 [#2710](https://github.com/sipeed/picoclaw/pull/2710) PR 形成呼应，标志项目进入新架构阶段。

---

## 5. Bug 与稳定性

### 🚨 高优先级 Bug

| Issue # | 标题 | 领域 | 状态 | 说明 |
|---------|------|------|------|------|
| [#2720](https://github.com/sipeed/picoclaw/issues/2720) | Singleton PID check doesn't verify process identity — stale PID causes crash loop | build | 🆕 新报告 | **严重**: PID 文件中的旧 PID 被其他进程（如 systemd-resolved）复用时，Gateway 启动失败并进入崩溃循环。**无 Fix PR** |
| [#2718](https://github.com/sipeed/picoclaw/issues/2718) | DeepSeek (and other strict providers) fail with 400 'unknown variant image_url' | provider/agent | 🆕 新报告 | 非多模态模型接收图片消息时返回 400 错误。**已有 Fix PR**: [#2717](https://github.com/sipeed/picoclaw/pull/2717) |

### ⚠️ 中等优先级 Bug

| Issue # | 标题 | 领域 | 状态 | 说明 |
|---------|------|------|------|------|
| [#2706](https://github.com/sipeed/picoclaw/issues/2706) | Deepseek v4 thinking model问题 | provider | 🆕 新报告 | thinking mode 返回的 reasoning_content 未被持久化，导致后续请求 400 错误 |
| [#2716](https://github.com/sipeed/picoclaw/issues/2716) | SVG files fail to send on Telegram | channel | 🆕 新报告 | SVG 文件被错误识别为图片类型，发送失败 |
| [#2704](https://github.com/sipeed/picoclaw/issues/2704) | DingTalk SDK 的 panic 导致 gateway 异常停止 | channel | 🆕 新报告 | 钉钉 SDK 并发错误导致 panic，6 次 panic 对应 3 次 ping timeout |
| [#1042](https://github.com/sipeed/picoclaw/issues/1042) | exec工具的guardCommand方法问题 | tool | 🟡 STALE | 安全检查误拦截合法命令 |

---

## 6. 功能请求与路线图信号

### ✨ 新增功能请求

| Issue/PR # | 标题 | 领域 | 优先级 | 状态 | 评估 |
|------------|------|------|--------|------|------|
| [#2719](https://github.com/sipeed/picoclaw/pull/2719) | add slack_webhook output-only channel | channel | - | 🔄 Review | **高可能性纳入**: PR 已提交，支持 Block Kit 格式 |
| [#2705](https://github.com/sipeed/picoclaw/pull/2705) | add MQTT channel support | channel | - | 🔄 Review | **高可能性纳入**: PR 已提交 |
| [#2703](https://github.com/sipeed/picoclaw/pull/2703) | Add Intel OpenVINO Model Server support | provider | - | 🔄 Review | **高可能性纳入**: 本地推理能力扩展 |
| [#2625](https://github.com/sipeed/picoclaw/issues/2625) | Provide compiled builds with WhatsApp support | build | low | 🟡 STALE | Raspberry Pi Zero 2 用户请求默认包含 WhatsApp 支持 |
| [#2623](https://github.com/sipeed/picoclaw/issues/2623) | the .env file support | skill/config | - | 🟡 STALE | 用户希望支持 .env 文件传递环境变量给自定义技能 |
| [#2671](https://github.com/sipeed/picoclaw/issues/2671) | 模型提供商能否支持opencode? | provider | - | 🟡 STALE | 请求支持 OpenCode Zen/Go 订阅 |

### 🔮 路线图信号

- **OpenAI Responses API 迁移** ([#2171](https://github.com/sipeed/picoclaw/issues/2171)): OpenAI 官方推荐，社区关注度高
- **多用户群聊消息归属** ([#2715](https://github.com/sipeed/picoclaw/pull/2715)): 改善 Discord/Telegram/Slack 群聊体验
- **Bedrock 流式输出** ([#2645](https://github.com/sipeed/picoclaw/pull/2645)): AWS Bedrock 实时 token 交付

---

## 7. 用户反馈摘要

### 😤 主要痛点

| 痛点 | 相关 Issue | 用户场景 |
|------|------------|----------|
| **exec 工具误拦截** | [#1042](https://github.com/sipeed/picoclaw/issues/1042) | 用户使用天气技能查询北京天气时，`curl wttr.in/Beijing` 被安全机制误判为路径遍历攻击 |
| **DeepSeek 视觉兼容** | [#2718](https://github.com/sipeed/picoclaw/issues/2718) | 非多模态模型接收图片消息时直接返回 400 错误，用户体验中断 |
| **DingTalk SDK 稳定性** | [#2704](https://github.com/sipeed/picoclaw/issues/2704) | 钉钉连接超时触发 SDK 内部 panic，导致整个 Gateway 崩溃 |
| **PID 检查漏洞** | [#2720](https://github.com/sipeed/picoclaw/issues/2720) | 系统进程 PID 复用导致 PicoClaw 无法启动，影响部署 |

### 😊 正面反馈

- **TUI 弃用共识** ([#2208](https://github.com/sipeed/picoclaw/issues/2208)): 8 票支持，表明 CLI 方向符合社区预期
- **CLI 自定义端点** ([#2710](https://github.com/sipeed/picoclaw/pull/2710)): 用户获得更灵活的 OpenAI 兼容端点配置能力

---

## 8. 待处理积压

### ⚠️ 长期未响应的 Stale Issues（需维护者关注）

| Issue # | 标题 | 创建时间 | 最后更新 | 评论 | 建议处理 |
|---------|------|----------|----------|------|----------|
| [#2171](https://github.com/sipeed/picoclaw/issues/2171) | OpenAI Responses API 迁移 | 2026-03-30 | 2026-04-30 | 9 | 建议评估并给出官方立场 |
| [#2548](https://github.com/sipeed/picoclaw/issues/2548) | Multiple authentication credentials | 2026-04-16 | 2026-04-29 | 5 | 需复现并定位问题 |
| [#2625](https://github.com/sipeed/picoclaw/issues/2625) | WhatsApp 支持编译版本 | 2026-04-22 | 2026-04-29 | 2 | 评估构建配置变更成本 |
| [#2623](https://github.com/sipeed/picoclaw/issues/2623) | .env 文件支持 | 2026-04-22 | 2026-04-29 | 1 | 评估功能需求合理性 |
| [#

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报

**报告日期**: 2026-04-30
**项目**: NanoClaw (qwibitai/nanoclaw)
**数据来源**: GitHub Activity (过去24小时)

---

## 1. 今日速览

NanoClaw 今日保持极高的开发活跃度，共处理 **50 条 PR 更新**（其中 21 条已合并/关闭），Issue 层面有 3 条更新。核心开发者 **@andrebrov** 贡献了 12 条 PR，集中于容器环境变量传递、数据库稳定性修复和 MCP 服务器扩展等基础设施改进。**@grtwrn** 持续推进 OneCLI 原生工具生态，Gmail/GCal 技能已合并。值得注意的是，**Google Gemini 提供商支持**出现 3 个 PR 迭代，表明多贡献者在并行探索该功能。项目整体处于功能密集开发期，暂无新版本发布。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

今日合并/关闭了 **21 条 PR**，以下是关键进展：

### 已合并 PR

| PR | 标题 | 贡献者 | 意义 |
|---|---|---|---|
| [#1961](https://github.com/qwibitai/nanoclaw/pull/1961) | skill(add-gmail-tool): OneCLI-native Gmail MCP tool | @grtwrn | 完成 Gmail 技能集成，遵循 v2 凭证管理规范 |
| [#1964](https://github.com/qwibitai/nanoclaw/pull/1964) | skill(add-gcal-tool): OneCLI-native Google Calendar MCP tool | @grtwrn | 完成 Google Calendar 技能集成，与 Gmail 形成个人助手工作流闭环 |
| [#2140](https://github.com/qwibitai/nanoclaw/pull/2140) | Copilot/add copilot instructions | @jbaruch | 增强 GitHub Copilot 集成体验 |
| [#1767](https://github.com/qwibitai/nanoclaw/pull/1767) | skill: add-agentcash — pay-per-call API via x402 micropayments | @0xOsprey | 引入微支付能力，支持按调用付费场景 |
| [#2137](https://github.com/qwibitai/nanoclaw/pull/2137) | feat(providers): add Google Gemini provider support | @farooqu | 合并 Gemini 提供商实现（第三版迭代） |
| [#2135](https://github.com/qwibitai/nanoclaw/pull/2135) | feat(providers): add Google Gemini provider support | @farooqu | 合并 Gemini 提供商实现（第二版迭代） |

### 关键 Open PR（待合并）

| PR | 标题 | 贡献者 | 预期影响 |
|---|---|---|---|
| [#1998](https://github.com/qwibitai/nanoclaw/pull/1998) | fix(whatsapp): route inbound media through session attachment pipeline | @grtwrn | 修复 WhatsApp 媒体处理路由问题 |
| [#2016](https://github.com/qwibitai/nanoclaw/pull/2016) | Add /add-ynab-tool skill — YNAB via curl + OneCLI | @grtwrn | 扩展预算管理工具集成 |
| [#2136](https://github.com/qwibitai/nanoclaw/pull/2136) | feat(providers): add Google Gemini provider support | @farooqu | Gemini 提供商支持（最新迭代） |
| [#2138](https://github.com/qwibitai/nanoclaw/pull/2138) | feat: forward AGENT_AUTO_COMPACT_WINDOW to spawned containers | @andrebrov | 修复容器环境变量传递缺失问题 |
| [#2133](https://github.com/qwibitai/nanoclaw/pull/2133) | feat: add knowledge/raw/ ingest directory for LLM wiki compilation | @andrebrov | 引入知识库/维基功能基础架构 |
| [#2132](https://github.com/qwibitai/nanoclaw/pull/2132) | fix: pin thinking.display='summarized' for Opus 4.7 | @andrebrov | 修复 Opus 4.7 思考块显示问题 |
| [#2131](https://github.com/qwibitai/nanoclaw/pull/2131) | feat: support remote HTTP/SSE MCP servers | @andrebrov | 扩展 MCP 服务器协议支持范围 |
| [#2129](https://github.com/qwibitai/nanoclaw/pull/2129) | feat: per-group model override + AGENT_MODEL env passthrough | @andrebrov | 实现分组模型覆盖与环境变量传递 |

**今日项目推进评估**: 基础设施层面取得显著进展，容器环境变量传递、数据库并发安全、消息重试机制等核心问题得到系统性修复。工具生态持续扩展，Gmail/GCal/YNAB 等高频工具即将可用。

---

## 4. 社区热点

### 讨论最活跃的 Issues

**#2139** [OPEN] API Error: 400 - invalid_request_error - Could not process image
👤 @omniscient | 📅 2026-04-29 | 💬 1 条评论
🔗 https://github.com/qwibitai/nanoclaw/issues/2139

**问题摘要**: 用户在连续上传图片到会计软件时遇到 API 错误。第一次上传成功，第二次由妻子上传后，Bot 完全停止工作，每次请求都返回 400 错误。

**分析**: 这是一个**高优先级用户体验问题**，涉及图片处理管道的稳定性。问题出现在连续使用场景中，可能与会话状态管理或媒体处理逻辑相关。

---

**#2109** [OPEN] Context compact issue
👤 @Aswinmcw | 📅 2026-04-29 | 💬 0 条评论
🔗 https://github.com/qwibitai/nanoclaw/issues/2109

**问题摘要**: 用户使用 Opus 4.7 模型，但上下文在 200k tokens 时就开始压缩，而该模型支持高达 1M tokens。用户尝试修改变量但未能解决问题。

**分析**: 这是一个**配置/参数传递问题**。结合 PR #2132（pin thinking.display）和 #2129（AGENT_MODEL passthrough），项目正在系统性解决 Opus 4.7 相关配置问题。该 Issue 可能随着这些 PR 合并得到解决。

---

### 热点 PR 分析

**Google Gemini 提供商支持** 出现 3 个 PR（#2135, #2137, #2136），表明：
- 多位贡献者（@farooqu）在并行开发该功能
- 功能设计可能经历了多次迭代
- 项目对多模型支持有明确需求

**OneCLI 工具生态**（#1961, #1964, #2016）持续扩展：
- Gmail、Google Calendar、YNAB 三大工具即将就绪
- 遵循 v2 架构的凭证管理规范
- 体现项目对个人助手工作流的重视

---

## 5. Bug 与稳定性

### 今日报告的 Bug（按严重程度）

| 优先级 | Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|---|
| 🔴 高 | [#2139](https://github.com/qwibitai/nanoclaw/issues/2139) | 图片上传 API 400 错误，Bot 停止工作 | Open | 无 |
| 🟡 中 | [#2109](https://github.com/qwibitai/nanoclaw/issues/2109) | Opus 4.7 上下文压缩阈值异常（200k vs 1M） | Open | 关联 #2132 |
| 🟡 中 | [#1820](https://github.com/qwibitai/nanoclaw/issues/1820) | container agent-runner 无条件覆盖 CLAUDE_CODE_AUTO_COMPACT_WINDOW | **Closed** | 关联 #2138 |

### 今日修复的 Bug（通过 PR）

| PR | 修复内容 | 贡献者 |
|---|---|---|
| [#2138](https://github.com/qwibitai/nanoclaw/pull/2138) | 转发 AGENT_AUTO_COMPACT_WINDOW 到容器 | @andrebrov |
| [#2125](https://github.com/qwibitai/nanoclaw/pull/2125) | 修复 writeMessageOut 跨进程序列号竞争条件 | @andrebrov |
| [#2126](https://github.com/qwibitai/nanoclaw/pull/2126) | 消息投递指数退避 + 数据库句柄泄漏修复 | @andrebrov |
| [#2127](https://github.com/qwibitai/nanoclaw/pull/2127) | 修复定时任务批次的会话恢复问题 | @andrebrov |
| [#2130](https://github.com/qwibitai/nanoclaw/pull/2130) | 修复思考-only end_turn 导致循环问题 | @andrebrov |

**稳定性评估**: 今日 @andrebrov 提交了大量基础设施修复，涵盖数据库并发安全、消息重试机制、会话状态管理等领域。这些修复将显著提升项目在生产环境的稳定性。

---

## 6. 功能请求与路线图信号

### 明确的功能请求

| 请求 | 来源 | 分析 |
|---|---|---|
| **Google Gemini 提供商支持** | #2136, #2137, #2135 | 多贡献者并行开发，预计即将合并。提供除 OpenAI 外的第一选择 |
| **远程 HTTP/SSE MCP 服务器支持** | #2131 | 扩展 MCP 协议灵活性，支持云端服务 |
| **知识库/维基编译功能** | #2133 | 引入 `knowledge/raw/` 目录，支持 LLM wiki 生成 |
| **YNAB 预算工具集成** | #2016 | 扩展个人财务管理场景 |
| **WhatsApp 媒体处理增强** | #1998 | 改进媒体路由管道 |

### 路线图信号分析

从今日 PR 模式可推断项目近期方向：

1. **多模型支持**: Gemini 提供商开发活跃，项目在构建模型无关的抽象层
2. **工具生态扩展**: OneCLI 原生工具策略清晰，Gmail/GCal/YNAB 即将可用
3. **容器化基础设施**: 环境变量传递、数据库稳定性、消息队列可靠性等底层能力持续加固
4. **知识管理**: `knowledge/raw/` 目录预示知识库功能规划

---

## 7. 用户反馈摘要

### 从 Issue 评论提炼的用户痛点

**#2139 用户场景**:
> "First upload worked. 2nd Upload was sent by my wife, and after discussing the document and where to actually put it, the bot completely stopped working"

- **痛点**: 连续使用场景下的稳定性问题
- **场景**: 移动端图片上传 → 会计软件处理
- **诉求**: 可靠的重复性任务处理能力

**#2109 用户场景**:
> "I am using opus 4.7 but the context keeps compacting at 200k, that model supports till 1M"

- **痛点**: 模型能力未被充分利用
- **场景**: 需要长上下文的工作流
- **诉求**: 正确的配置传递和参数控制

### 合并 PR 体现的正面反馈

- **#1961 Gmail 技能**: 遵循 v2 凭证管理规范的设计获得认可
- **#1767 AgentCash**: 按调用付费模式满足成本控制需求

---

## 8. 待处理积压

### 长期未响应的 Issue（超过 7 天无维护者回复）

| Issue | 创建日期 | 描述 | 建议 |
|---|---|---|---|
| [#2109](https://github.com/qwibitai/nanoclaw/issues/2109) | 2026-04-29 | Opus 4.7 上下文压缩问题 | 关联 PR #2132 正在修复中 |
| [#2139](https://github.com/qwibitai/nanoclaw/issues/2139) | 2026-04-29 | 图片处理 API 错误 | 需维护者确认根因 |

### 建议关注

1. **#2139 图片处理问题**: 今日新报告，涉及核心功能稳定性，建议优先响应
2. **#2109 上下文压缩**: 与多个 Open PR 关联，可统一处理
3. **Gemini 提供商 PR 合并**: 3 个版本迭代，建议尽快评审合并避免重复工作

---

## 附录：贡献者排行榜（今日）

| 排名 | 贡献者 | PR 数量 | 主要贡献 |
|---|---|---|---|
| 1 | @andrebrov | 12 | 基础设施修复、环境变量传递、稳定性改进 |
| 2 | @grtwrn | 4 | OneCLI 工具生态（Gmail/GCal/YNAB/WhatsApp） |
| 3 | @farooqu | 3 | Google Gemini 提供商支持 |
| 4 | @jbaruch | 1 | GitHub Copilot 集成 |
| 5 | @0xOsprey | 1 | 微支付 API 集成 |

---

**报告生成时间**: 2026-04-30
**数据完整性**: 基于 GitHub 公开 API 实时采集

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**报告日期：** 2026-04-30
**项目仓库：** [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. 今日速览

IronClaw 项目今日保持极高活跃度，共处理 **26 条 Issues** 和 **50 条 PRs**。项目正处于 **Reborn 架构落地冲刺阶段**，大量子模块 PR 正在 review 中，包括 secrets/network、内存存储、WASM 运行时等核心组件。v0.27.0 版本于昨日发布，带来了 engine-v2 的 capability 策略集中化改进。同时，3 个 P2 级 Bug 在 v0.27.0 中被发现并报告，Live canary 测试出现 3 次失败，需关注稳定性回归风险。

---

## 2. 版本发布

### ✅ ironclaw-v0.27.0 已发布 (2026-04-29)

**主要更新：**

| 类别 | 内容 |
|------|------|
| **engine-v2** | 新增 canonical capability status vocabulary，用于 v2 runtime contract ([#2825](https://github.com/nearai/ironclaw/pull/2825)) |
| **engine-v2** | 集中化 action-vs-capability surface policy，贯穿 prompt、runtime、bridge projection 和 tool surface |

**迁移注意事项：**
- 此次更新为 engine-v2 的内部契约变更，API 层面保持兼容
- 使用 v2 runtime 的用户建议验证现有 capability 配置仍正常工作

---

## 3. 项目进展

### 🔄 今日合并/关闭的重要 PRs

| PR # | 标题 | 状态 | 意义 |
|------|------|------|------|
| [#3077](https://github.com/nearai/ironclaw/pull/3077) | feat(reborn): add secrets and network boundaries | ✅ CLOSED | 新增 `ironclaw_secrets` 和 `ironclaw_network` crate，建立凭证管理和网络边界基础 |
| [#3027](https://github.com/nearai/ironclaw/pull/3027) | feat(reborn): add script and mcp runtime lanes | ✅ CLOSED | 新增 `ironclaw_scripts` 和 `ironclaw_mcp` crate，支持脚本和 MCP 工具运行时 |
| [#3028](https://github.com/nearai/ironclaw/pull/3028) | feat(reborn): add wasm runtime lane | ✅ CLOSED | 新增 `ironclaw_wasm` crate，建立 WASM 工具运行时基础 |
| [#3084](https://github.com/nearai/ironclaw/pull/3084) | fix(reborn): replace broad ProcessError From<HostApiError> | ✅ CLOSED | 修复错误类型映射问题，提升错误分类准确性 |
| [#3051](https://github.com/nearai/ironclaw/pull/3051) | Tighten v2 structured tool prompts | ✅ CLOSED | 优化 v2 执行 prompt，移除 CodeAct/Python/FINAL 风格示例 |
| [#3076](https://github.com/nearai/ironclaw/pull/3076) | test(reborn): add phase 1 integration coverage | ✅ CLOSED | 新增 Phase 1 Reborn 集成测试覆盖 |

### 🔍 重点待合并 PRs (Review 阶段)

| PR # | 标题 | 风险 | 关键性 |
|------|------|------|--------|
| [#3102](https://github.com/nearai/ironclaw/pull/3102) | feat(llm): native LLM reasoning trace, provider-agnostic | Medium | ⭐ 新增跨提供商推理追踪支持 |
| [#3101](https://github.com/nearai/ironclaw/pull/3101) | feat: add config-driven production composition root | Medium | ⭐ Reborn 生产级组合根配置 |
| [#3098](https://github.com/nearai/ironclaw/pull/3098) | feat(reborn): add shared runtime HTTP egress | Medium | 统一 HTTP 出口策略 |
| [#3097](https://github.com/nearai/ironclaw/pull/3097) | feat(reborn): add WIT-compatible WASM tool runtime | Medium | 重构 WASM 运行时为 WIT 组件模型 |
| [#3071](https://github.com/nearai/ironclaw/pull/3071) | feat(reborn): add capability host base | Medium | CapabilityHost 基础工作流 |
| [#3080](https://github.com/nearai/ironclaw/pull/3080) | feat(reborn): wire built-in obligations and handoffs | Medium | V1 义务和运行时交接 |

---

## 4. 社区热点

### 💬 讨论最活跃的 Issues

**#2987** - **[EPIC] Track Reborn architecture landing strategy**
📊 38 条评论 | 🔗 [查看详情](https://github.com/nearai/ironclaw/issues/2987)

**核心诉求：** 跟踪 IronClaw Reborn 架构落地的交付计划，避免 reviewers 面对单一巨型 stacked PR。涉及 PR0 contract freeze → staging reborn-integration → 最终合并的完整流程。

**#3045** - **[Reborn] Add runtime presets and effective runtime policy**
📊 3 条评论 | 🔗 [查看详情](https://github.com/nearai/ironclaw/issues/3045)

**核心诉求：** 为 Reborn 添加简单的运行时预设层，让操作员和用户选择预期操作模式，无需手动配置低级别 grants、mounts、进程后端、网络策略等。

**#3044** - **[Reborn] Add local developer runtime profiles**
📊 2 条评论 | 🔗 [查看详情](https://github.com/nearai/ironclaw/issues/3044)

**核心诉求：** 支持本地编码 agent 场景，一键启动（如 `ironclaw dev`），无需手动配置复杂权限。

**#3067** - **[TEST] Reborn: Add vertical-slide integration test suite**
📊 2 条评论 | 🔗 [查看详情](https://github.com/nearai/ironclaw/issues/3067)

**核心诉求：** 创建面向调用者的 Reborn 集成测试，通过公共入口点验证 substrate 功能。

---

## 5. Bug 与稳定性

### 🐛 今日报告的 Bug（按严重程度）

| 优先级 | Issue # | 标题 | 环境 | 状态 | Fix PR |
|--------|---------|------|------|------|--------|
| **P2** | [#3083](https://github.com/nearai/ironclaw/issues/3083) | User Management 允许重复创建用户（缺少加载状态和提交防抖） | hosted-staging | 🆕 OPEN | - |
| **P2** | [#3082](https://github.com/nearai/ironclaw/issues/3082) | 启用工具自动审批后 App 在"Restarting IronClaw"卡住 | hosted-staging | 🆕 OPEN | - |
| **P2** | [#3081](https://github.com/nearai/ironclaw/issues/3081) | Portfolio 扩展在无需配置时显示误导性"Configure"按钮 | hosted-staging | 🆕 OPEN | - |
| **🔴** | [#3075](https://github.com/nearai/ironclaw/issues/3075) | Live canary failed: public-smoke | 生产 | 🆕 OPEN | - |
| **🔴** | [#3074](https://github.com/nearai/ironclaw/issues/3074) | Live canary failed: persona-rotating | 生产 | 🆕 OPEN | - |
| **🔴** | [#3064](https://github.com/nearai/ironclaw/issues/3064) | Live canary failed: public-smoke | 生产 | 🆕 OPEN | - |

**⚠️ 稳定性警示：**
- 3 个 Live canary 测试失败（commit: `2a65da7c2a9d1b14665a373338266e084e9f4096`），涉及 `public-smoke` 和 `persona-rotating` 两条 lane
- v0.27.0 引入 3 个 P2 级 UI/UX Bug，建议尽快评估是否需要 patch

---

## 6. 功能请求与路线图信号

### ✨ 新功能需求（结合已有 PR 判断优先级）

| Issue # | 功能描述 | 关联 PR | 纳入下一版本可能性 |
|---------|----------|---------|-------------------|
| [#3102](https://github.com/nearai/ironclaw/pull/3102) | 跨提供商 LLM 原生推理追踪（Anthropic/OpenAI/DeepSeek/Gemini 等） | - | ⭐⭐⭐ 高 |
| [#1341](https://github.com/nearai/ironclaw/issues/1341) | Web Gateway 支持非图片附件（PDF、音频、文档） | - | ⭐⭐ 中 |
| [#3069](https://github.com/nearai/ironclaw/issues/3069) | 将 Reborn 打包为独立 `ironclaw-reborn` 二进制 | - | ⭐⭐⭐ 高（路线图明确） |
| [#3068](https://github.com/nearai/ironclaw/issues/3068) | **[Cutover Blocker]** 保留 V1 的 brokered HTTP 凭证注入 | - | ⭐⭐⭐ 高（阻断性问题） |

### 🗺️ Reborn 路线图子任务（大量并行开发中）

以下 Issues 均隶属于 #2987 (Reborn EPIC)，预计将进入下一版本：

| 类别 | Issues |
|------|--------|
| **核心服务** | #3089 SessionThreadService, #3090 ToolSurfaceService, #3091 loop support services, #3092 AgentLoop implementations, #3093 EventProjectionService, #3094 approval/auth services |
| **运行时** | #3086 Re-carve WASM lane, #3085 shared HTTP egress, #3088 secrets/network boundary |
| **组合与发布** | #3087 Compose host runtime, #3069 separate binary |

---

## 7. 用户反馈摘要

### 📝 从 Issues 评论中提炼

**痛点 1：凭证注入能力退化风险**
用户高度关注 Reborn cutover 后 V1 的 brokered HTTP 凭证注入功能是否保留（#3068）。这是功能 parity 的关键点。

**痛点 2：本地开发体验**
开发者期望简化本地编码 agent 的启动流程（#3044），当前需要手动配置大量低级别权限。

**痛点 3：运行时预设缺失**
用户需要预设层来快速切换不同操作模式，而非每次手动配置 grants、mounts、网络策略等（#3045）。

**痛点 4：稳定性担忧**
v0.27.0 引入的 Bug（重复创建用户、App 卡死）影响 hosted-staging 用户体验，需快速响应。

---

## 8. 待处理积压

### ⚠️ 长期未响应或需关注的事项

| Issue # | 标题 | 创建时间 | 状态 | 提醒 |
|---------|------|----------|------|------|
| [#1341](https://github.com/nearai/ironclaw/issues/1341) | Support non-image file attachments in web gateway | 2026-03-18 | OPEN | 超过 40 天未响应，用户期望支持 PDF/音频/文档 |
| [#1764](https://github.com/nearai/ironclaw/pull/1764) | Abound demo — Responses API, credential injection, skills, guardrails | 2026-03-30 | OPEN | 超过 30 天待 review，PR 规模 XL |
| [#2987](https://github.com/nearai/ironclaw/issues/2987) | Reborn architecture landing strategy | 2026-04-27 | OPEN | EPIC 需持续跟踪，确保落地节奏 |

### 🔴 阻断性问题提醒

| Issue # | 标题 | 风险等级 | 说明 |
|---------|------|----------|------|
| [#3068](https://github.com/nearai/ironclaw/issues/3068) | Preserve brokered HTTP credential injection | 🔴 Cutover Blocker | 不解决不能声称 Reborn ready |
| [#3032](https://github.com/nearai/ironclaw/issues/3032) | Reborn cutover blocker: add no-exposure safeguards | 🔴 Cutover Blocker | 生产安全层，防止敏感数据泄露 |
| [#3012](https://github.com/nearai/ironclaw/issues/3012) | Reborn PR1b: add host-controlled trust-class policy engine | 🔴 Mandatory | PR3 的强制依赖门控 |

---

## 📊 关键指标一览

| 指标 | 数值 | 趋势 |
|------|------|------|
| Issues 活跃度 | 26 条/24h | 📈 +15% |
| PR 活跃度 | 50 条/24h | 📈 +25% |
| 合并率 | 64% (32/50) | ✅ 健康 |
| Reborn 相关 PRs | 18 个待合并 | 🚀 冲刺阶段 |
| Bug 报告 | 6 个（含 3 个 canary 失败） | ⚠️ 需关注 |

---

**报告生成时间：** 2026-04-30
**数据来源：** GitHub nearai/ironclaw 过去 24 小时活动

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 | 2026-04-30

---

## 1. 今日速览

LobsterAI 今日保持高度活跃，共处理 **28 条 PR 更新**（其中 4 条已合并/关闭，24 条待合并），并发布 **v2026.4.29** 版本。核心更新聚焦于 ChatGPT OAuth 登录支持、新增小米/百度千帆模型提供商、以及多项 UI/文档优化。今日新开 **1 条 Issue**，涉及 OpenAI 认证地区限制问题（HTTP 403）。整体项目健康度良好，维护响应及时，建议持续关注积压的 stale PR 状态。

---

## 2. 版本发布

### 🆕 LobsterAI v2026.4.29

**发布时间**：2026-04-29

**更新内容**：

| 类型 | 描述 | 贡献者 |
|------|------|--------|
| Bug Fix | 更新火山引擎（Volcengine）和 Qwen 默认模型配置 | @btc69m979y-dotcom |
| Bug Fix | 移除安装状态下不准确的自动重启提示 | @liuzhq1986 |

**相关链接**：
- Release 页面：https://github.com/netease-youdao/LobsterAI/releases/tag/2026.4.29
- 合并 PR：https://github.com/netease-youdao/LobsterAI/pull/1828

> 📌 **迁移提示**：本次更新为配置层面的修复，无破坏性变更，建议用户更新至最新版本以获得更准确的模型配置和安装体验。

---

## 3. 项目进展

### ✅ 今日合并/关闭的 PR（4 条）

| PR 编号 | 标题 | 状态 | 关键内容 |
|---------|------|------|----------|
| **#1876** | chore(release): merge release/2026.04.27 into main | CLOSED | 包含 ChatGPT OAuth 登录、新增小米/百度千帆支持、youdaonote skill 升级、specs README 新增等多项功能 |
| **#1875** | feat: specs 中添加 readme 文档 | CLOSED | 完善项目规格文档结构 |
| **#1874** | feat: 优化 spec 文档 | CLOSED | 优化现有规格文档 |
| **#1873** | style(settings): make cowork bootstrap textarea fill available height | CLOSED | UI 样式优化，提升设置页面文本框高度自适应 |

**🔗 链接**：
- #1876: https://github.com/netease-youdao/LobsterAI/pull/1876
- #1875: https://github.com/netease-youdao/LobsterAI/pull/1875
- #1874: https://github.com/netease-youdao/LobsterAI/pull/1874
- #1873: https://github.com/netease-youdao/LobsterAI/pull/1873

> **项目整体向前推进**：本次合并带来了多项重要功能更新，特别是 ChatGPT OAuth 登录支持和新模型提供商集成，显著扩展了产品的兼容性和用户体验。

---

## 4. 社区热点

### 🔥 今日讨论最活跃的 Issues/PRs

| 类型 | 编号 | 标题 | 活跃度 | 摘要 |
|------|------|------|--------|------|
| Issue | **#1877** | openAI 认证不成功，本地的 codex 是可以正常使用的 | ⭐⭐⭐ | 用户报告 ChatGPT 登录失败，提示 "Country, region, or territory not supported"（HTTP 403），已获 1 条评论 |

**🔗 链接**：
- #1877: https://github.com/netease-youdao/LobsterAI/issues/1877

**📊 热点分析**：
- **#1877** 涉及 OpenAI API 地区限制问题，可能影响部分海外用户或使用代理的用户体验
- 建议关注 OpenAI 官方政策更新，评估是否需要添加地区豁免或代理配置选项

---

## 5. Bug 与稳定性

### 🐛 今日报告的 Bug

| 严重程度 | Issue 编号 | 描述 | 状态 | 是否有 Fix PR |
|----------|------------|------|------|---------------|
| 🟡 中等 | **#1877** | OpenAI 认证地区限制（HTTP 403）导致登录失败 | OPEN | ❌ 无 |

**🔗 链接**：
- #1877: https://github.com/netease-youdao/LobsterAI/issues/1877

> **稳定性评估**：今日未报告崩溃或回归问题，整体稳定性良好。唯一的中等优先级 Bug 涉及外部服务依赖，建议持续跟踪。

---

## 6. 功能请求与路线图信号

### 🚀 今日新增/活跃的功能请求

以下为今日活跃的 stale PR 中值得关注的功能请求：

| PR 编号 | 功能描述 | 贡献者 | 潜在价值 | 建议优先级 |
|---------|----------|--------|----------|------------|
| **#853** | 新增 Markdown、JSON、JSONL 会话导出格式 | @kayo5994 | ⭐⭐⭐⭐ | 高 |
| **#857** | MCP 支持 HTTP Streaming | @noobdawn | ⭐⭐⭐⭐ | 高 |
| **#862** | 自定义主题与可选强调色 | @mmengLong | ⭐⭐⭐ | 中 |
| **#866** | 上下文管理以缓解 "Lost in the Middle" 问题 | @Aoxiang-001 | ⭐⭐⭐⭐⭐ | 极高 |
| **#869** | 限制 shell.openExternal URL 协议白名单（安全） | @swuzjb | ⭐⭐⭐⭐ | 高 |
| **#880** | 消息勾选分享、图片预览、一键复制功能 | @hzshenguoshi | ⭐⭐⭐⭐ | 高 |
| **#881** | 启用外键约束，修复会话删除不级联问题 | @noransu | ⭐⭐⭐ | 中 |

**🔗 链接**：
- #853: https://github.com/netease-youdao/LobsterAI/pull/853
- #857: https://github.com/netease-youdao/LobsterAI/pull/857
- #862: https://github.com/netease-youdao/LobsterAI/pull/862
- #866: https://github.com/netease-youdao/LobsterAI/pull/866
- #869: https://github.com/netease-youdao/LobsterAI/pull/869
- #880: https://github.com/netease-youdao/LobsterAI/pull/880
- #881: https://github.com/netease-youdao/LobsterAI/pull/881

> **路线图建议**：#866（上下文管理）和 #869（安全修复）建议优先考虑纳入下一版本；#853（导出格式）和 #880（分享功能）可显著提升用户工作流效率。

---

## 7. 用户反馈摘要

### 📝 从 Issue 评论中提炼的用户痛点

| Issue 编号 | 用户痛点 | 使用场景 | 情绪 |
|------------|----------|----------|------|
| **#1877** | OpenAI 认证失败，提示地区不支持 | 本地 codex 可正常使用，但 ChatGPT 登录失败 | 😟 困惑/沮丧 |

**🔗 链接**：
- #1877: https://github.com/netease-youdao/LobsterAI/issues/1877

**📊 反馈分析**：
- 用户反馈较为有限，但 #1877 反映了一个重要的用户体验问题：OpenAI 服务地区限制可能影响部分用户正常使用
- 建议考虑添加地区配置选项或代理支持说明文档

---

## 8. 待处理积压

### ⚠️ 长期未响应的重要 Issue/PR（建议关注）

以下 PR 处于 stale 状态超过 30 天，包含多项高价值功能和安全修复：

| PR 编号 | 类型 | 标题 | 贡献者 | 提交时间 | 建议 |
|---------|------|------|--------|----------|------|
| **#853** | Feature | 会话导出格式（Markdown/JSON/JSONL） | @kayo5994 | 2026-03-25 | 优先审查 |
| **#857** | Feature | MCP HTTP Streaming 支持 | @noobdawn | 2026-03-25 | 优先审查 |
| **#860** | Bug | JSON.parse 缺少错误处理 | @cdhyay | 2026-03-25 | 优先审查 |
| **#862** | Feature | 自定义主题强调色 | @mmengLong | 2026-03-25 | 中等优先级 |
| **#863** | Bug | SQLite 原子写入修复 | @kayo5994 | 2026-03-25 | 高优先级 |
| **#864** | Bug | 切换模型时遮罩卡顿问题 | @songlinwang2wilson | 2026-03-25 | 高优先级 |
| **#866** | Feature | 上下文管理（Lost in Middle） | @Aoxiang-001 | 2026-03-25 | 极高优先级 |
| **#868** | Bug | 记忆删除事务保护 | @tomZou12 | 2026-03-25 | 高优先级 |
| **#869** | Security | URL 协议白名单 | @swuzjb | 2026-03-25 | 高优先级 |
| **#872** | Bug | 滚动后发送消息不自动滚动 | @ZlsMzs | 2026-03-25 | 中等优先级 |
| **#874** | Bug | 并发刷新 token 竞态问题 | @gongzhi-netease | 2026-03-25 | 高优先级 |
| **#876** | Bug | getRowsModified 计数错误 | @tang-xiao-bao | 2026-03-25 | 中等优先级 |
| **#877** | Security | URL scheme 白名单 | @darknesstm | 2026-03-25 | 高优先级 |
| **#878** | Bug | continueSession 失败重复错误消息 | @tang-xiao-bao | 2026-03-25 | 中等优先级 |
| **#880** | Feature | 消息勾选分享功能 | @hzshenguoshi | 2026-03-25 | 高优先级 |
| **#881** | Bug | 外键约束导致数据库膨胀 | @noransu | 2026-03-25 | 高优先级 |

**🔗 链接汇总**：
- https://github.com/netease-youdao/LobsterAI/pulls?q=is%3Apr+is%3Aopen+updated%3A%3C2026-04-01

> **⚠️ 积压警告**：当前有 **16 条 stale PR** 超过 30 天未处理，其中包含 **3 个安全相关修复**（#869, #877）和 **多个高优先级 Bug 修复**。建议维护团队安排时间集中处理，以提升项目健康度和社区信任度。

---

## 📈 关键指标汇总

| 指标 | 数值 | 趋势 |
|------|------|------|
| 今日新增 Issue | 1 | ➡️ 持平 |
| 今日新增 PR | 28 | ⬆️ 活跃 |
| 今日合并 PR | 4 | ⬆️ 高效 |
| 待处理 PR | 24 | ⚠️ 需关注 |
| Stale PR (>30天) | 16 | ⚠️ 积压 |
| 新版本发布 | 1 | ✅ 正常 |

---

**报告生成时间**：2026-04-30
**数据来源**：GitHub LobsterAI Repository
**分析师**：AI Assistant

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报

**报告日期：** 2026-04-30
**项目仓库：** github.com/moltis-org/moltis

---

## 1. 今日速览

Moltis 项目在过去 24 小时内保持高度活跃状态，共处理 **6 条 Issues**（4 开 2 关）和 **8 条 Pull Requests**（5 待合并 3 已关闭），并连续发布两个版本（20260429.01 和 20260429.02）。项目在安全修复方面取得重要进展，成功关闭了沙箱逃逸漏洞（#924）；功能层面持续推进，新增电话呼叫支持、语音人格系统和代码索引自动触发等特性。今日社区讨论围绕聊天滚动回归问题（#922）和 MCP 页面 OAuth 重认证按钮缺失展开，整体项目健康度良好，代码合并节奏稳健。

---

## 2. 版本发布

### 20260429.02 & 20260429.01

今日连续发布两个补丁版本，版本号遵循 `YYYYMMDD.NN` 格式。从 Issue #918（ Telegram Docker 故障）的关闭时间线判断，至少其中一个版本包含了对 Docker 环境下 Telegram 集成问题的修复。建议用户检查最新版本说明文档以确认具体变更内容。

> **链接：** https://github.com/moltis-org/moltis/releases

---

## 3. 项目进展

### 已合并/关闭的 Pull Requests

| PR 编号 | 类型 | 标题 | 贡献者 | 状态 |
|---------|------|------|--------|------|
| [#924](https://github.com/moltis-org/moltis/pull/924) | 安全修复 | fix(sandbox): prevent sandbox escape via RestrictedHostSandbox and FailoverSandbox | @penso | ✅ 已合并 |
| [#916](https://github.com/moltis-org/moltis/pull/916) | 功能增强 | feat(voice): add voice personas for deterministic TTS identity | @penso | ✅ 已合并 |
| [#917](https://github.com/moltis-org/moltis/pull/917) | 功能增强 | feat(import): add Claude Code and Hermes import to web UI | @penso | ✅ 已合并 |

**关键进展：**

- **沙箱安全修复（#924）：** 修复了 `RestrictedHostSandbox` 和 `FailoverSandbox` 两个安全漏洞，此前这两个沙箱实现存在文件系统隔离缺陷，可能导致沙箱化会话访问宿主机文件。该修复直接响应了 Issue #923 的安全报告，体现了项目对安全问题的快速响应能力。

- **语音人格系统（#916）：** 引入命名可复用的语音身份（Voice Personas），为 TTS 输出提供稳定的说话特征，解决了此前代理每次消息语气不一致的问题。Agent 与 Persona 的关联机制为未来多角色对话场景奠定了基础。

- **导入功能扩展（#917）：** 在 Web UI 的 Settings → Imports 中新增 Claude Code 和 Hermes 导入标签页，与现有的 OpenClaw 导入功能并列，提供分类卡片式选择性导入 UX。

---

## 4. 社区热点

### 讨论最活跃的 Issues

**#922 - Chat scrolling isn't working** 🔥
状态：OPEN | 评论：3 | 👍：0
作者：@bsarkisov
链接：https://github.com/moltis-org/moltis/issues/922

**分析：** 该 Issue 报告了聊天滚动功能失效的问题，已关联 PR #925（fix）正在处理中。3 条评论表明这是一个影响用户体验的回归问题，根源在于 PR #846 引入的智能自动滚动功能与用户手动滚动意图产生冲突。

**#918 - Telegram broken in Docker in v20260428.03**
状态：CLOSED | 评论：3 | 👍：1
作者：@faevourite
链接：https://github.com/moltis-org/moltis/issues/918

**分析：** 该 Issue 报告了 v20260428.03 版本中 Docker 环境下 Telegram 集成损坏的问题。已关闭且有 1 个 👍，表明该问题影响了一定的用户群体，今日发布的版本（20260429.01/02）很可能已包含修复。

### 热点 Pull Request

**#926 - feat: add /btw, /fast, /insights, /steer, /queue commands**
状态：OPEN | 👍：0
作者：@penso
链接：https://github.com/moltis-org/moltis/pull/926

**分析：** 该 PR 引入 5 个新的斜杠命令，灵感来源于 Hermes Agent 特性分析。其中 `/btw` 用于快速侧问，`/fast` 提供即时响应模式，`/insights` 生成洞察分析，`/steer` 引导对话方向，`/queue` 管理任务队列。这是今日最受关注的功能提案，体现了用户对细粒度对话控制能力的强烈需求。

---

## 5. Bug 与稳定性

### 今日报告的 Bug（按严重程度）

| 优先级 | Issue 编号 | 标题 | 状态 | Fix PR |
|--------|-----------|------|------|--------|
| 🔴 高 | [#922](https://github.com/moltis-org/moltis/issues/922) | Chat scrolling isn't working | OPEN | [#925](https://github.com/moltis-org/moltis/pull/925) |
| 🔴 高 | [#919](https://github.com/moltis-org/moltis/issues/919) | Model discovery fails after 30 sec | OPEN | — |
| 🟡 中 | [#927](https://github.com/moltis-org/moltis/issues/927) | MCP page missing re-authenticate button | OPEN | — |
| 🟢 低 | [#918](https://github.com/moltis-org/moltis/issues/918) | Telegram broken in Docker | ✅ CLOSED | — |

**详细说明：**

- **#922（聊天滚动失效）：** 回归问题，由 PR #846 引入。PR #925 已提交修复，将 `ResizeObserver` 循环替换为更智能的滚动检测机制，预计即将合并。

- **#919（模型发现超时）：** 模型发现流程在 30 秒后失败，可能影响依赖动态模型选择的用户场景，需要维护者关注。

- **#927（MCP 重认证按钮缺失）：** OAuth 令牌过期或失败时，用户无法在 MCP 页面重新认证，这是一个 UX 完整性问题。

- **#918（Docker Telegram 故障）：** 已关闭，表明问题已在今日版本中修复。

### 安全相关

**#923 - Sandboxed commands able to run on host environment**
状态：CLOSED | 对应 Fix：#924 ✅
链接：https://github.com/moltis-org/moltis/issues/923

该安全漏洞已被修复并合并，沙箱隔离机制现已恢复正常。

---

## 6. 功能请求与路线图信号

### 用户提出的新功能需求

| Issue 编号 | 功能描述 | 状态 | 相关 PR |
|-----------|---------|------|---------|
| [#906](https://github.com/moltis-org/moltis/issues/906) | Make sub-agents configurable in WebUI | OPEN | — |

**#906 分析：** 该 Issue 请求在 Web UI 中提供子代理（sub-agents）配置能力。这是一个重要的 UX 增强请求，将允许用户在不修改代码的情况下调整子代理行为。结合今日 #926（斜杠命令集）和 #921（代码索引自动触发）的进展，可以看出项目正在向更灵活的用户控制方向演进。

### 路线图信号

从今日 PR 活动可以推断项目近期重点方向：

1. **对话控制能力增强：** #926 引入的斜杠命令体系表明项目正在构建更丰富的对话交互原语
2. **多模态通信扩展：** #920 正在推进 Twilio 电话呼叫集成，标志项目向语音/电话渠道拓展
3. **导入生态完善：** #917 已完成 Claude Code 和 Hermes 导入支持，导入器架构趋于成熟
4. **代码智能增强：** #921 推进代码索引自动触发（Spec 007），提升项目感知能力

---

## 7. 用户反馈摘要

### 真实用户痛点

**Docker 环境稳定性：** Issue #918 反映了用户在 Docker 部署场景下遇到 Telegram 集成问题，表明容器化部署仍是需要关注的测试覆盖领域。

**聊天体验流畅性：** Issue #922 揭示了滚动功能与流式内容展示的交互冲突，用户期望在接收流式消息时仍能自由回溯查看历史记录。

**OAuth 认证流程：** Issue #927 指出 MCP 页面在令牌失效时缺乏重认证入口，影响依赖 OAuth 集成的用户工作连续性。

### 使用场景信号

- **多渠道通信：** Telegram 集成问题的高关注度表明 Telegram 是重要的用户触达渠道
- **沙箱安全需求：** Issue #923 的安全报告和快速修复体现了对隔离执行环境的重视
- **导入迁移需求：** Claude Code 和 Hermes 导入功能的实现响应了用户从其他平台迁移的需求

---

## 8. 待处理积压

### 长期未响应的重要 Issue

| Issue 编号 | 标题 | 创建时间 | 状态 | 关注理由 |
|-----------|------|---------|------|---------|
| [#906](https://github.com/moltis-org/moltis/issues/906) | Make sub-agents configurable in WebUI | 2026-04-28 | OPEN | 功能需求，0 评论，需确认优先级 |

**#906 特别提醒：** 该 Issue 创建于 2026-04-28，至今已有 2 天未获维护者响应。作为 Web UI 配置能力的重要增强请求，建议优先评估并给出反馈。

### 待合并的重要 PR

| PR 编号 | 标题 | 状态 | 建议 |
|--------|------|------|------|
| [#925](https://github.com/moltis-org/moltis/pull/925) | fix(web-ui): remove scroll-hijacking ResizeObserver | OPEN | 建议优先合并，解决 #922 回归问题 |
| [#920](https://github.com/moltis-org/moltis/pull/920) | feat(telephony): add phone call support via Twilio | OPEN | 新功能，建议评估完整性后合并 |
| [#921](https://github.com/moltis-org/moltis/pull/921) | feat(code-index): auto-trigger indexing | OPEN | 3 轮审查已完成，建议推进合并 |

---

## 附录：数据统计

| 指标 | 数值 |
|------|------|
| 今日新增 Issues | 6 |
| 今日关闭 Issues | 2 |
| 今日新增 PRs | 8 |
| 今日合并 PRs | 3 |
| 新版本发布 | 2 |
| 核心贡献者 | @penso, @Cstewart-HC, @dependabot[bot] |

---

*报告生成时间：2026-04-30 | 数据来源：GitHub Moltis Repository*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报

**报告日期：** 2026-04-30
**项目仓库：** github.com/agentscope-ai/CoPaw

---

## 1. 今日速览

CoPaw 项目今日保持高度活跃，共产生 **29 条 Issues 更新**（15 新开/活跃，14 已关闭）和 **20 条 PR 更新**（9 待合并，11 已合并/关闭）。项目于今日发布了 **v1.1.5** 版本，重点增强了 CJK 字符处理能力和上下文压缩回退机制。社区在多 Agent 隔离、渠道稳定性（企业微信/飞书）和前端交互优化方面讨论热烈，整体项目健康度良好，合并效率较高。

---

## 2. 版本发布

### 🎉 v1.1.5 正式发布

**发布内容：**

| 类别 | 更新说明 |
|------|----------|
| ✨ 新功能 | **CJK-Aware Memory Search**：Memory 搜索现支持 CJK 查询的字符级分词，同时保留 Latin/数字连续字符串处理能力 |
| ✨ 新功能 | **Context Compaction Fallback**：当基于 LLM 的上下文压缩失败或被禁用时，新增降级处理机制 |

**相关链接：**
- Release Note: [#3918](https://github.com/agentscope-ai/QwenPaw/pull/3918)
- 完整变更: [v1.1.5](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.5)

---

## 3. 项目进展

今日共 **11 个 PR 已合并/关闭**，以下是重点推进的功能和修复：

### 🔧 功能增强

| PR | 作者 | 说明 | 状态 |
|----|------|------|------|
| [#3509](https://github.com/agentscope-ai/QwenPaw/pull/3509) | @xueshanlongyin | **多模态消息支持**：新增图片/文件内容支持，实现 MediaContent 模型、文件类型自动检测、Base64/URL/本地路径支持 | ✅ Merged |
| [#3846](https://github.com/agentscope-ai/QwenPaw/pull/3846) | @moarychan | **GitHub Copilot 模型提供商支持**：新增 Copilot 作为模型后端选项 | 🔄 Under Review |
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | @youngchan1988 | **Tauri 2.x 桌面应用支持**：使用 Tauri 2.x 替代 Electron，提升桌面端性能 | 🔄 Under Review |
| [#3889](https://github.com/agentscope-ai/QwenPaw/pull/3889) | @sun905 | **Agent 间任务进度实时同步**：新增 ProgressObservingHook，支持跨 Agent 任务状态监控 | 🔄 Open |

### 🐛 Bug 修复

| PR | 作者 | 说明 | 相关 Issue |
|----|------|------|------------|
| [#3958](https://github.com/agentscope-ai/QwenPaw/pull/3958) | @zhenai1314521 | **切换 Agent 时保留聊天会话**：修复切换后对话丢失问题 | [#3919](https://github.com/agentscope-ai/QwenPaw/issues/3919) |
| [#3959](https://github.com/agentscope-ai/QwenPaw/pull/3959) | @zhenai1314521 | **导航离开聊天页时保持 Chat 组件挂载**：防止任务中断和会话丢失 | - |
| [#3954](https://github.com/agentscope-ai/QwenPaw/pull/3954) | @cliffffffffff | **跳过已初始化工作区的 BOOTSTRAP.md**：修复重复生成引导文件问题 | [#3953](https://github.com/agentscope-ai/QwenPaw/issues/3953) |
| [#3934](https://github.com/agentscope-ai/QwenPaw/pull/3934) | @zhaozhuang521 | **修复聊天历史面板重命名时无法输入中文**：修复 IME 输入问题 | [#3927](https://github.com/agentscope-ai/QwenPaw/issues/3927) |
| [#3845](https://github.com/agentscope-ai/QwenPaw/pull/3845) | @bxy3045134656 | **QQ 语音消息类型映射及平台 ASR 支持**：区分语音消息与普通音频文件 | - |
| [#3793](https://github.com/agentscope-ai/QwenPaw/pull/3793) | @wangyong00 | **修复 rebuild_sys_prompt 中的缩进 Bug**：修复系统消息更新逻辑 | - |

### 📦 渠道优化

| PR | 说明 |
|----|------|
| [#3950](https://github.com/agentscope-ai/QwenPaw/pull/3950) | **企业微信**：保持占位流活跃，防止长时间运行后卡在 "Thinking..." |
| [#3948](https://github.com/agentscope-ai/QwenPaw/pull/3948) | **企业微信**：新增 `share_session_in_group` 配置，控制群聊会话范围 |
| [#3941](https://github.com/agentscope-ai/QwenPaw/pull/3941) | **飞书**：引入 FeishuCardHandler，将工具审批升级为交互式按钮 |
| [#3938](https://github.com/agentscope-ai/QwenPaw/pull/3938) | **多实例渠道**：支持渠道复制和 Agent 路由分发 |

---

## 4. 社区热点

### 🔥 热门讨论 Issues

**1. 多 Agent 隔离问题**（讨论度最高）
> [#3936](https://github.com/agentscope-ai/QwenPaw/issues/3936) - 智能体之间是否可以完全隔离
> 👥 8 条评论 | 作者: @WT-AHA

**核心诉求：** 用户希望实现 Agent 间 workspace 完全隔离，当前文件防护功能是全局配置且仅支持黑名单机制，无法满足细粒度隔离需求。

---

**2. 企业微信稳定性问题**
> [#2757](https://github.com/agentscope-ai/QwenPaw/issues/2757) - 企业微信频道经常断开连接
> 👥 6 条评论 | 作者: @Joezhang1980

**核心诉求：** 企业微信频道配置后频繁断开，需手动重新保存配置才能恢复，怀疑心跳机制存在问题。

---

**3. Agent Workspace 错误切换**
> [#3957](https://github.com/agentscope-ai/QwenPaw/issues/3957) - 接收其他 Agent 消息时 workspace 错误切换
> 👥 4 条评论 | 作者: @sctale

**核心诉求：** 主控 Agent 连接钉钉频道后，收到其他 Agent 推送的消息时会发生 workspace 切换，导致身份混淆。

---

**4. 安全漏洞报告**
> [#3955](https://github.com/agentscope-ai/QwenPaw/issues/3955) - 服务器任意文件遍历漏洞
> 👥 2 条评论 | 作者: @elsesky

**⚠️ 严重性：高** - 用户报告了任意文件遍历漏洞，需维护者重点关注。

---

## 5. Bug 与稳定性

### 🔴 高优先级 Bug

| Issue | 描述 | 严重程度 | 状态 | Fix PR |
|-------|------|----------|------|--------|
| [#3955](https://github.com/agentscope-ai/QwenPaw/issues/3955) | 服务器任意文件遍历漏洞 | 🔴 高 | 已关闭 | - |
| [#3932](https://github.com/agentscope-ai/QwenPaw/issues/3932) | `read_file_safe` 传递 1GB 作为 size 参数导致低内存系统 MemoryError | 🔴 高 | Open | - |
| [#3893](https://github.com/agentscope-ai/QwenPaw/issues/3893) | Context Sync Race Condition 导致工具结果丢失和无限循环 | 🔴 高 | 已关闭 | - |
| [#3957](https://github.com/agentscope-ai/QwenPaw/issues/3957) | Agent workspace 错误切换导致身份混淆 | 🔴 高 | Open | - |

### 🟡 中优先级 Bug

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#3919](https://github.com/agentscope-ai/QwenPaw/issues/3919) | 切换 Agent 后 session 丢失 | Open | [#3958](https://github.com/agentscope-ai/QwenPaw/pull/3958) ✅ |
| [#3949](https://github.com/agentscope-ai/QwenPaw/issues/3949) | DeepSeek 思考模式下 `reasoning_content` 未正确传递导致 400 | 已关闭 | - |
| [#3937](https://github.com/agentscope-ai/QwenPaw/issues/3937) | 企业微信通道突然不生效 | Open | - |
| [#3947](https://github.com/agentscope-ai/QwenPaw/issues/3947) | 企微渠道开启 filter_thinking 后复杂请求回复丢失 | Open | - |
| [#3952](https://github.com/agentscope-ai/QwenPaw/issues/3952) | 无法从魔搭选择量化模型下载 | 已关闭 | - |

### 🟢 已修复 Bug

| Issue | 描述 | Fix PR |
|-------|------|--------|
| [#3953](https://github.com/agentscope-ai/QwenPaw/issues/3953) | BOOTSTRAP.md 在已初始化工作区反复出现 | [#3954](https://github.com/agentscope-ai/QwenPaw/pull/3954) ✅ |
| [#3927](https://github.com/agentscope-ai/QwenPaw/issues/3927) | 聊天历史面板重命名时无法输入中文 | [#3934](https://github.com/agentscope-ai/QwenPaw/pull/3934) ✅ |
| [#3935](https://github.com/agentscope-ai/QwenPaw/issues/3935) | 多开 Console 标签页时 Agent 选择互相干扰 | - |

---

## 6. 功能请求与路线图信号

### 📋 新功能请求

| Issue | 请求内容 | 优先级信号 | 相关 PR |
|-------|----------|------------|---------|
| [#3940](https://github.com/agentscope-ai/QwenPaw/issues/3940) | **视觉模型路由**：为图片输入支持单独的视觉模型路由，避免手动切换整个对话模型 | 🔥 高需求 | - |
| [#3956](https://github.com/agentscope-ai/QwenPaw/pull/3956) | **LLM 模型自动切换机制**：支持按调用次数超限、定时、任务失败等条件自动切换模型 | 💡 创新特性 | - |
| [#3944](https://github.com/agentscope-ai/QwenPaw/issues/3944) | **Auto-Memory 排除心跳和定时任务**：避免系统自动化对话被错误积累为"经验" | 👍 1 | - |
| [#3942](https://github.com/agentscope-ai/QwenPaw/issues/3942) | **全模态支持**：目前前端无法支持音视频 | 💡 探索方向 | - |
| [#3936](https://github.com/agentscope-ai/QwenPaw/issues/3936) | **Agent 隔离机制**：支持细粒度的 Agent 间 workspace 隔离和白名单配置 | 🔥 高需求 | - |
| [#2720](https://github.com/agentscope-ai/QwenPaw/issues/2720) | **"/Approve" 按钮化**：将文字命令改为界面按钮操作 | 👍 2 | [#3941](https://github.com/agentscope-ai/QwenPaw/pull/3941) 🔄 |

### 🚀 已在开发中的功能

| PR | 功能 | 进度 |
|----|------|------|
| [#3846](https://github.com/agentscope-ai/QwenPaw/pull/3846) | GitHub Copilot 模型支持 | Under Review |
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | Tauri 2.x 桌面应用 | Under Review |
| [#3889](https://github.com/agentscope-ai/QwenPaw/pull/3889) | Agent 间任务进度实时同步 | Open |
| [#3938](https://github.com/agentscope-ai/QwenPaw/pull/3938) | 多实例渠道 + Agent 路由 | Open |

---

## 7. 用户反馈摘要

### ✅ 用户满意点

1. **多模态能力增强**：用户对新增的图片/文件消息支持表示期待（[#3509](https://github.com/agentscope-ai/QwenPaw/pull/3509)）
2. **飞书交互优化**：工具审批按钮化获得正面反馈（[#3941](https://github.com/agentscope-ai/QwenPaw/pull/3941)）
3. **CJK 支持改进**：v1.1.5 的 CJK 字符处理增强解决了中文用户的痛点

### ⚠️ 用户痛点

1. **渠道稳定性不足**
   - 企业微信频道频繁断开（[#2757](https://github.com/agentscope-ai/QwenPaw/issues/2757)）
   - 企微渠道 filter_thinking 模式下复杂请求回复丢失（[#3947](https://github.com/agentscope-ai/QwenPaw/issues/3947)）

2. **多 Agent 协作机制不完善**
   - Agent 间 workspace 隔离缺失（[#3936](https://github.com/agentscope-ai/QwenPaw/issues/3936)）
   - 消息路由导致 workspace 错误切换（[#3957](https://github.com/agentscope-ai/QwenPaw/issues/3957)）

3. **安全与隐私**
   - 服务器任意文件遍历漏洞（[#3955](https://github.com/agentscope-ai/QwenPaw/issues/3955)）
   - 离线部署需求（[#893](https://github.com/agentscope-ai/QwenPaw/issues/893)）

4. **前端体验**
   - 多标签页 Agent 状态互相干扰（[#3935](https://github.com/agentscope-ai/QwenPaw/issues/3935)）
   - 聊天历史面板中文输入问题（[#3927](https://github.com/agentscope-ai/QwenPaw/issues/3927)）✅ 已修复

---

## 8. 待处理积压

### ⏰ 长期未响应的 Issue（>7 天无更新）

| Issue | 类型 | 创建时间 | 最后更新 | 状态 |
|-------|------|----------|----------|------|
| [#981](https://github.com/agentscope-ai/QwenPaw/issues/981) | Question | 2026-03-09 | 2026-04-29 | CLOSED |
| [#1403](https://github.com/agentscope-ai/QwenPaw/issues/1403) | Bug | 2026-03-13 | 2026-04-29 | CLOSED |
| [#1031](https://github.com/agentscope-ai/QwenPaw/issues/1031) | Question | 2026-03-09 | 2026-04-29 | CLOSED |
| [#893](https://github.com/agentscope-ai/QwenPaw/issues/893) | Question | 2026-03-07 | 2026-04-29 | CLOSED |
| [#1226](https://github.com/agentscope-ai/QwenPaw/issues/1226) | Enhancement | 2026-03-11 | 2026-04-29 | CLOSED |

### 🎯 建议优先处理

| 优先级 | Issue | 说明 |
|--------|-------|------|
| 🔴 高 | [#3955](https://github.com/agentscope-ai/QwenPaw/issues/3955) | **安全漏洞**：任意文件遍历，需紧急评估和修复 |
| 🔴 高 | [#3932](https://github.com/agentscope-ai/QwenPaw/issues/3932) | **稳定性风险**：大文件读取导致 MemoryError |
| 🔴 高 | [#3957](https://github.com/agentscope-ai/QwenPaw/issues/3957) | **身份混淆**：Agent workspace 错误切换 |
| 🟡 中 | [#3936](https://github.com/agentscope-ai/QwenPaw/issues/3936) | **架构需求**：Agent 隔离机制设计 |
| 🟡 中 | [#3940](https://github.com/agentscope-ai/QwenPaw/issues/3940) | **用户体验**：视觉模型路由需求 |

---

## 📊 今日数据汇总

| 指标 | 数值 |
|------|------|
| Issues 新增/活跃 | 15 |
| Issues 已关闭 | 14 |
| PR 新增 | 20 |
| PR 待合并 | 9 |
| PR 已

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>NemoClaw</strong> — <a href="https://github.com/NVIDIA/NemoClaw">NVIDIA/NemoClaw</a></summary>

# NemoClaw 项目动态日报

**报告日期：** 2026-04-30
**项目仓库：** https://github.com/NVIDIA/NemoClaw

---

## 1. 今日速览

NemoClaw 今日保持高度活跃，共处理 **50 条 Issues** 和 **50 条 PRs**。项目当前处于 v0.0.31 准备阶段，文档刷新 PR 已合并（#2724），多个功能 PR 进入评审状态。最值得关注的是夜间 E2E 测试持续失败（#1992，266 条评论），以及多个与 OpenClaw 2026.4.24 版本兼容性问题（#2689、#2686）。社区对本地推理配置、Ollama 集成和沙箱策略的讨论非常热烈，功能请求涵盖备份恢复、多提供商搜索集成等方向。

---

## 2. 版本发布

**今日无新版本发布。**

项目正在推进 v0.0.31，文档刷新已完成（#2724），预计近期发布。当前最新稳定版本为 v0.0.30。

---

## 3. 项目进展

### 已合并/关闭的重要 PRs

| PR | 标题 | 状态 | 说明 |
|----|------|------|------|
| [#1789](https://github.com/NVIDIA/NemoClaw/pull/1789) | Fix DNS proxy TCP fallback for sandbox inference | CLOSED | 修复沙箱推理因 DNS UDP 截断导致 TCP 回退失败的问题 |
| [#1936](https://github.com/NVIDIA/NemoClaw/pull/1936) | fix(onboard): classify TLS certificate errors | CLOSED | 新增 `tls_cert_mismatch` 错误分类，改善证书错误提示 |
| [#2724](https://github.com/NVIDIA/NemoClaw/pull/2724) | docs: refresh daily docs for 0.0.31 | CLOSED | 文档刷新至 v0.0.31，填补多个行为差异 |
| [#2691](https://github.com/NVIDIA/NemoClaw/pull/2691) | ci(skills): use unique docs sync branches | CLOSED | 修复 CI 工作流分支冲突问题 |
| [#2719](https://github.com/NVIDIA/NemoClaw/pull/2719) | test(sandbox): assert sandbox init is staged | CLOSED | 添加回归测试保护沙箱入口点库 |

### 正在评审的热门 PRs

| PR | 标题 | 状态 | 亮点 |
|----|------|------|------|
| [#2227](https://github.com/NVIDIA/NemoClaw/pull/2227) | refactor(sandbox): default to mutable config | OPEN | **重大架构变更**：沙箱默认改为可写配置，Shields 成为 opt-in |
| [#472](https://github.com/NVIDIA/NemoClaw/pull/472) | feat: add sandbox export/import backup commands | OPEN | 新增 `nemoclaw backups`、`export`、`import` 命令 |
| [#2721](https://github.com/NVIDIA/NemoClaw/pull/2721) | feat(onboard): extend web search to Gemini and Tavily | OPEN | 搜索提供商从 Brave 扩展至 Gemini、Tavily |
| [#2715](https://github.com/NVIDIA/NemoClaw/pull/2715) | feat(install): platform-aware installer | OPEN | 安装程序自动检测 DGX Spark/Station/通用 Linux |
| [#2415](https://github.com/NVIDIA/NemoClaw/pull/2415) | fix(policy): remove telegram + discord from base sandbox | OPEN | **安全修复**：移除沙箱默认的 Telegram/Discord 出站策略 |
| [#2707](https://github.com/NVIDIA/NemoClaw/pull/2707) | feat(onboard): detect Windows-host Ollama from WSL | OPEN | WSL 场景下通过 `host.docker.internal` 检测 Windows Ollama |
| [#2714](https://github.com/NVIDIA/NemoClaw/pull/2714) | fix(onboard): bound local inference probes | OPEN | 修复 onboard 在检测本地推理时可能挂起的问题 |

---

## 4. 社区热点

### 讨论最活跃的 Issues

**🥇 #1992 - Nightly E2E failed**（266 条评论）
- **链接：** https://github.com/NVIDIA/NemoClaw/issues/1992
- **概述：** 夜间 E2E 流水线失败，Run ID: 24540696099
- **分析：** 这是项目当前最受关注的问题，大量评论表明社区正在积极调试。问题可能影响发布流程，需要优先解决。

**🥈 #719 - openclaw.json 权限问题**（13 条评论，10 个 👍）
- **链接：** https://github.com/NVIDIA/NemoClaw/issues/719
- **概述：** 配置文件以 root 创建且只读，导致沙箱内无法写入配置
- **分析：** 这是长期存在的用户体验问题，与 #1174（OPENCLAW_CONFIG_PATH 持久化）相关联。

**🥉 #1551 - 文档缺失 host.docker.internal 说明**（5 条评论）
- **链接：** https://github.com/NVIDIA/NemoClaw/issues/1551
- **概述：** 从沙箱访问宿主机服务时，Docker bridge 路径未文档化
- **状态：** 已关闭（#2722 新增 Brev 故障排除指南部分解决了此问题）

### 热门功能讨论

- **#2390** - 引入 Dashboard Delivery Contract 作为仪表板可达性的单一事实来源
- **#1174** - 支持 OPENCLAW_CONFIG_PATH 将 openclaw.json 持久化到 PVC

---

## 5. Bug 与稳定性

### 严重程度：高 🔴

| Issue | 标题 | 状态 | 是否有 Fix PR |
|-------|------|------|---------------|
| [#2689](https://github.com/NVIDIA/NemoClaw/issues/2689) | v0.0.29 Dockerfile Step 17 patches fail against OpenClaw 2026.4.24 | OPEN | ❌ |
| [#2686](https://github.com/NVIDIA/NemoClaw/issues/2686) | rebuild fails: Patch 4 literal-string assert breaks | OPEN | ❌ |
| [#2688](https://github.com/NVIDIA/NemoClaw/issues/2688) | [DGX Spark] install fails during docker build | CLOSED | ❌ |
| [#2604](https://github.com/NVIDIA/NemoClaw/issues/2604) | nemoclaw status omits Connected/Inference fields | OPEN | ❌ |
| [#2096](https://github.com/NVIDIA/NemoClaw/issues/2096) | [WSL2] Gateway fails with cpuset cgroup error | OPEN | ❌ |

### 严重程度：中 🟡

| Issue | 标题 | 状态 | 是否有 Fix PR |
|-------|------|------|---------------|
| [#2728](https://github.com/NVIDIA/NemoClaw/issues/2728) | Non-interactive onboard defaults to `build` provider | OPEN | ❌ |
| [#2727](https://github.com/NVIDIA/NemoClaw/issues/2727) | rebuild aborts when .openclaw-data files are root-owned | OPEN | ❌ |
| [#2199](https://github.com/NVIDIA/NemoClaw/issues/2199) | local-inference policy missing Ollama ports 11434/11435 | OPEN | ❌ |
| [#1924](https://github.com/NVIDIA/NemoClaw/issues/1924) | [brev] local ollama setup fails | OPEN | ❌ |
| [#2674](https://github.com/NVIDIA/NemoClaw/issues/2674) | [Mac][Onboard] Process hangs at "detect NIM inference" | OPEN | ✅ #2714 |
| [#2703](https://github.com/NVIDIA/NemoClaw/issues/2703) | curl to inference.local returns null, crashes test phase | OPEN | ❌ |
| [#2704](https://github.com/NVIDIA/NemoClaw/issues/2704) | proxy env vars not exported in bash -ic/-lc | OPEN | ❌ |

### 严重程度：低 🟢

| Issue | 标题 | 状态 | 备注 |
|-------|------|------|------|
| [#2621](https://github.com/NVIDIA/NemoClaw/issues/2621) | OpenClaw chat UI shows ✓ on failed tool calls | OPEN | UI 状态显示错误 |
| [#2697](https://github.com/NVIDIA/NemoClaw/issues/2697) | blueprint.yaml policy.additions is parsed but never applied | OPEN | 静默无操作 |

### 回归问题

| Issue | 标题 | 版本 | 状态 |
|-------|------|------|------|
| [#2177](https://github.com/NVIDIA/NemoClaw/issues/2177) | [Regression] presets do not apply correctly | v0.0.25 | OPEN |
| [#2178](https://github.com/NVIDIA/NemoClaw/issues/2178) | [Regression] node version is not upgrading | v0.0.20 | OPEN |

---

## 6. 功能请求与路线图信号

### 即将纳入的功能（已有明确 PR）

| PR | 功能 | 评审进度 |
|----|------|----------|
| [#2227](https://github.com/NVIDIA/NemoClaw/pull/2227) | 沙箱默认可写配置，Shields opt-in | 评审中 |
| [#472](https://github.com/NVIDIA/NemoClaw/pull/472) | 沙箱导出/导入/备份命令 | 长期 OPEN，status: rfr |
| [#2721](https://github.com/NVIDIA/NemoClaw/pull/2721) | 搜索提供商扩展至 Gemini、Tavily | 评审中 |
| [#2462](https://github.com/NVIDIA/NemoClaw/pull/2462) | nemohermes CLI 别名 | 评审中 |
| [#1843](https://github.com/NVIDIA/NemoClaw/pull/1843) | HeyGen OAuth 端点支持 | 评审中 |

### 用户提出的新功能需求

| Issue | 功能 | 优先级信号 |
|-------|------|------------|
| [#2390](https://github.com/NVIDIA/NemoClaw/issues/2390) | Dashboard Delivery Contract | 架构重构提议 |
| [#1174](https://github.com/NVIDIA/NemoClaw/issues/1174) | OPENCLAW_CONFIG_PATH 持久化支持 | 社区需求 |
| [#996](https://github.com/NVIDIA/NemoClaw/issues/996) | Brev 部署时 vLLM 正确 HF model id 和 token | NV QA 反馈 |

---

## 7. 用户反馈摘要

### 痛点与问题

1. **配置持久化困境**
   用户反映 `openclaw.json` 存储在容器可写层，每次 Pod 重启都会丢失配置，需要手动重新应用（#719、#1174）。这在生产环境中尤其成问题。

2. **Ollama 集成体验差**
   多个平台（Ubuntu、Mac、Brev、WSL）用户反馈 Ollama 本地推理配置复杂，端口缺失、检测失败等问题频发（#2199、#1924、#2674、#2707）。

3. **文档缺失**
   用户花费大量时间调试才发现 `host.docker.internal` 可以解决沙箱到宿主机的访问问题（#1551）。已通过 #2722 补充文档。

4. **错误信息不友好**
   Ollama 后端停止时，用户只看到 curl exit code 6，没有任何错误提示（#995）。无效 model ID 被静默接受（#994）。

### 满意之处

- **Brev 部署功能**受到好评，尽管存在一些问题（#2342、#2341），但整体集成方向正确
- **文档刷新**（#2724）填补了多个行为差异，用户体验提升

---

## 8. 待处理积压

### 长期未响应的 Issues（超过 7 天无更新）

| Issue | 标题 | 创建日期 | 状态 |
|-------|------|----------|------|
| [#719](https://github.com/NVIDIA/NemoClaw/issues/719) | openclaw.json 权限问题 | 2026-03-23 | OPEN，13 条评论 |
| [#994](https://github.com/NVIDIA/NemoClaw/issues/994) | Invalid model Id 被忽略 | 2026-03-26 | OPEN |
| [#995](https://github.com/NVIDIA/NemoClaw/issues/995) | Ollama 停止时无错误信息 | 2026-03-26 | OPEN |
| [#996](https://github.com/NVIDIA/NemoClaw/issues/996) | vLLM HF model id 问题 | 2026-03-26 | OPEN |
| [#1001](https://github.com/NVIDIA/NemoClaw/issues/1001) | ollama-local provider 未注册 | 2026-03-26 | CLOSED |
| [#1174](https://github.com/NVIDIA/NemoClaw/issues/1174) | OPENCLAW_CONFIG_PATH 持久化 | 2026-03-31 | OPEN |

### 长期未响应的 PRs

| PR | 标题 | 创建日期 | 状态 |
|----|------|----------|------|
| [#472](https://github.com/NVIDIA/NemoClaw/pull/472) | sandbox export/import backup commands | 2026-03-20 | OPEN，status: rfr |
| [#493](https://github.com/NVIDIA/NemoClaw/pull/493) | Refactor Dockerfile | 2026-03-20 | CLOSED，status: rebase |

### 建议优先处理

1. **#1992** - 夜间 E2E 失败影响发布流程，需优先定位根因
2. **#2689 / #2686** - OpenClaw 2026.4.24 兼容性问题阻塞沙箱重建
3. **#719** - 配置权限问题长期影响用户体验
4. **#2227** - 沙箱可写配置重构是重要架构变更，需尽快评审

---

**报告生成时间：** 2026-04-30
**数据来源：** GitHub NemoClaw 仓库过去 24 小时活动数据

</details>

---
*本日报由 [Radar Forge](https://github.com/borq168/radar-forge) 自动生成。*
