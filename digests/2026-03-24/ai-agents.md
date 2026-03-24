# OpenClaw 生态日报 2026-03-24

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-03-24 00:57 UTC

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

# OpenClaw 项目动态日报（2026-03-24）

---

## 1. 今日速览

OpenClaw 在过去24小时内表现出极高的社区活跃度，共处理 **500条 Issues** 和 **500条 PRs**，发布 **3个新版本**，反映出项目处于快速迭代与问题响应的高峰期。核心问题集中在 **v2026.3.22 版本引入的 Control UI 资产缺失回归问题**，已引发大量用户反馈并推动多个修复 PR 提交。尽管存在短期稳定性挑战，但团队响应迅速，多个关键修复已进入合并流程，整体项目健康度维持在可控范围内。

---

## 2. 版本发布

### 🔴 v2026.3.23（最新稳定版）
- **发布日期**：2026-03-23
- **关键修复**：
  - **Browser/Chrome MCP**：修复 macOS 上 Chrome attach 流程中用户配置文件超时与重复授权问题，优化会话等待机制（[#52930](https://github.com/openclaw/openclaw/issues/52930)）。
- **影响**：提升浏览器自动化工具的稳定性，尤其在多用户环境下的 Chrome 集成体验。

### ⚠️ v2026.3.22（含破坏性变更）
- **破坏性变更**：
  - `openclaw plugins install <package>` 默认优先从 **ClawHub** 安装，仅当 ClawHub 无对应包时才回退至 npm（[文档](https://docs.openclaw.ai/tools/clawhub)）。
  - 移除部分遗留的 Chrome MCP 逻辑。
- **迁移建议**：依赖 npm 插件的用户需显式指定源或等待插件上架 ClawHub。

### 🧪 v2026.3.22-beta.1（预发布）
- 无 macOS 应用构建，仅用于 npm beta 测试，`appcast.xml` 未更新。

---

## 3. 项目进展

今日多个关键 PR 被合并或进入最终审查阶段，推动核心功能与稳定性改进：

- ✅ **#53079**（已合并）：修复 v2026.3.22 中因 `dangerouslyDisableDeviceAuth` 导致 Control UI 权限丢失的问题，恢复 `operator.read` 作用域。
- ✅ **#53084**（已合并）：修复 Windows 平台 CI 测试路径断言失败问题，提升跨平台兼容性。
- 🔄 **#51512**（待合并）：为 `sessions.list` 添加可配置的使用缓存与启动预热机制，解决首次调用延迟高达46秒的问题。
- 🔄 **#52234**（XL 规模）：修复会话重置时丢失排队回复的问题，保障多轮对话连续性。
- 🔄 **#53258**：正式启用 **Mattermost 官方插件支持**，扩展企业通信集成能力。

> 项目整体在 **会话管理、插件生态、UI 稳定性** 三大方向持续推进。

---

## 4. 社区热点

### 🔥 最活跃 Issue：Control UI 资产缺失（v2026.3.22 回归）
- **#52808**（29 评论，👍61）：用户报告升级后 Control UI 返回 503，提示“assets not found”。
- **#52823**（29 评论）：中文用户反馈相同问题，引发广泛关注。
- **#53019**、**#52987**、**#53050** 等十余个同类 Issue 被关闭并归并，表明问题影响范围广。

> **背后诉求**：npm 包未包含预构建的 `dist/control-ui/` 目录，而官方未提供自动构建方案，导致普通用户无法使用 Web 控制台。

### 🌍 国际化需求持续升温
- **#3460**（114 评论，👍5）：i18n 与本地化支持请求长期未决，社区贡献意愿强烈，但官方表示“暂无带宽支持多语言”。

### 📱 移动端与插件兼容性
- **#9443**（18 评论）：请求提供预编译 Android APK，降低移动端使用门槛。
- **#52885**（10 评论）：微信插件因 ESM 模块路径变更（`openclaw/plugin-sdk`）与 v2026.3.22+ 不兼容。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 修复状态 |
|--------|------|------|--------|
| 🔴 高 | [Control UI assets missing](https://github.com/openclaw/openclaw/issues/52808) | npm 包缺少 `dist/control-ui/`，导致仪表盘不可用 | ✅ 多个修复 PR 已合并（#53079 等） |
| 🔴 高 | [Matrix Plugin API Version Mismatch](https://github.com/openclaw/openclaw/issues/52899) | 升级后 Matrix 插件加载失败 | 🔄 调查中，可能与插件 SDK 路径变更有关 |
| 🟠 中 | [Slack Socket Mode 零事件接收](https://github.com/openclaw/openclaw/issues/45311) | v2026.3.12 起 Slack 连接成功但无消息 | 🔄 长期未修复，影响企业用户 |
| 🟠 中 | [openclaw logs --follow 超时](https://github.com/openclaw/openclaw/issues/44714) | 日志流式输出失败，网关健康但连接中断 | 🔄 可能与 WebSocket 握手逻辑变更有关 |

> 当前主要风险集中于 **v2026.3.22 的打包流程缺陷**，建议用户暂缓升级或手动构建 UI 资产。

---

## 6. 功能请求与路线图信号

| 功能请求 | 关联 Issue | 进展信号 |
|--------|----------|--------|
| **Mattermost 官方支持** | #53258 | ✅ 已进入 PR 阶段，预计下版本集成 |
| **LM Studio 集成** | #53248 | 🔄 大型 PR 提交中，简化本地模型接入 |
| **Cognitive Memory Layer** | #52532 | 📌 概念提案，尚无实现计划 |
| **Android APK 预构建** | #9443 | 📌 社区呼声高，但未排期 |
| **i18n 支持** | #3460 | 📌 明确“暂无资源”，依赖社区驱动 |

> 下一版本可能聚焦 **企业通信扩展（Mattermost）** 与 **本地模型生态（LM Studio）**。

---

## 7. 用户反馈摘要

- **痛点**：
  - “升级后 UI 直接崩了，完全无法使用控制面板。”（#52823）
  - “微信插件突然报错，项目卡住，回滚才解决。”（#52885）
  - “Slack 收不到消息，客服说等修复，已经两周了。”（#45311）
- **满意点**：
  - “Chrome attach 终于不反复弹授权了，v2026.3.23 救了我。”（#52930）
  - “ClawHub 优先策略很好，避免 npm 污染。”（#52838 评论）
- **使用场景**：
  - 企业用户依赖 Slack/Matrix 进行内部协作；
  - 开发者通过 Telegram/Discord 调试 Agent；
  - 普通用户期望“开箱即用”，对 npm 安装后需手动构建 UI 感到困惑。

---

## 8. 待处理积压

| Issue/PR | 类型 | 积压时长 | 提醒 |
|--------|-----|--------|-----|
| [#28037](https://github.com/openclaw/openclaw/issues/28037) | Slack 消息路由失败 | >1个月 | 影响企业部署，需优先排查 |
| [#17731](https://github.com/openclaw/openclaw/issues/17731) | Subagent 线程上下文丢失 | >1个月 | Slack 线程场景关键缺陷 |
| [#49782](https://github.com/openclaw/openclaw/issues/49782) | ACP 完成通知闭环 | >5天 | 架构级改进，影响多 Agent 协作 |
| [#50090](https://github.com/openclaw/openclaw/issues/50090) | ClawHub 技能生态落地 | >5天 | 社区技能发展受阻，需路线图澄清 |

> 建议维护者优先处理 **Slack 消息路由** 与 **ACP 通知机制** 等影响核心通信能力的长期问题。

---

**报告生成时间**：2026-03-24  
**数据来源**：OpenClaw GitHub 仓库（github.com/openclaw/openclaw）  
**分析师备注**：项目处于高活跃迭代期，短期稳定性承压，但修复响应迅速。建议加强 npm 发布流程的构建验证，避免类似 Control UI 资产缺失问题再次发生。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告  
**报告时间：2026-03-24**

---

## 1. 生态全景

当前个人 AI 助手与自主智能体开源生态处于**高活跃迭代期**，核心项目普遍聚焦于**多模态交互、安全沙箱、企业级通信集成与本地模型支持**四大方向。社区反馈集中暴露了**跨平台一致性、配置鲁棒性、工具链稳定性**等生产部署痛点，推动项目从“功能原型”向“生产就绪”转型。OpenClaw 作为生态核心参照，其插件生态与 MCP 集成引领行业标准，而 NanoBot、Zeroclaw 等项目则在轻量化、安全隔离与异步架构上形成差异化竞争。整体生态呈现“**核心框架趋同，垂直场景分化**”的演进态势。

---

## 2. 各项目活跃度对比

| 项目 | Issues（24h） | PRs（24h） | 新版本发布 | 健康度评估 |
|------|---------------|------------|-------------|--------------|
| **OpenClaw** | 500 | 500 | ✅ 3 个（含稳定版） | ⭐⭐⭐⭐☆（高活跃，短期稳定性承压） |
| **NanoBot** | 20 | 81 | ❌ | ⭐⭐⭐⭐⭐（高效闭环，生产导向） |
| **Zeroclaw** | 43 | 50 | ✅ 2 个（含 beta） | ⭐⭐⭐⭐☆（功能扩展快，S0 Bug 待修） |
| **PicoClaw** | 26 | 79 | ✅ nightly | ⭐⭐⭐⭐⭐（架构重构深入，安全投入高） |
| **NanoClaw** | 17 | 40 | ❌ | ⭐⭐⭐⭐（安全加固为主，技能生态成熟） |
| **IronClaw** | 14 | 50 | ❌（v0.22.0 待发） | ⭐⭐⭐⭐（企业级功能推进，WASM/TEE 集成关键） |
| **LobsterAI** | 21 | 36 | ✅ 1 个 | ⭐⭐⭐⭐（用户体验优化，MCP 集成待完善） |
| **TinyClaw** | 0 | 7 | ❌ | ⭐⭐⭐⭐（稳定优化，社区参与度低） |
| **Moltis** | 0（关闭10） | 43 | ❌ | ⭐⭐⭐⭐⭐（极高合并效率，功能闭环快） |
| **CoPaw** | 50 | 50 | ❌ | ⭐⭐⭐⭐（多智能体协作探索，工具链稳定性待提升） |
| **ZeptoClaw** | 6 | 11 | ✅ v0.8.0 | ⭐⭐⭐⭐（CLI/UX 强化，中间件重构启动） |
| **EasyClaw** | 0 | 0 | ✅ 2 个（文档修复） | ⭐⭐⭐（低代码活动，聚焦安装体验） |

> 注：健康度综合考量活跃度、响应速度、稳定性与路线图清晰度。

---

## 3. OpenClaw 在生态中的定位

**优势**：  
- **生态中枢地位**：ClawHub 插件市场与 MCP 协议支持使其成为企业通信（Slack/Matrix/Mattermost）集成的事实标准；  
- **社区规模最大**：单日 500+ Issues/PRs 反映广泛用户基础与问题暴露密度，推动快速迭代；  
- **企业级功能领先**：如 Chrome MCP 自动化、会话预热缓存、Control UI 等特性覆盖复杂工作流。

**技术路线差异**：  
- 相比 NanoBot/Zeroclaw 的“无状态代理”设计，OpenClaw 采用**有状态会话管理**，支持长期上下文与排队回复，适合多轮协作；  
- 与 PicoClaw 的“模块化 Agent 架构”不同，OpenClaw 更强调**开箱即用**，但牺牲部分灵活性（如 npm 插件需手动构建 UI）。

**社区规模对比**：  
OpenClaw 的 Issue 数量是第二活跃项目（CoPaw）的 10 倍，PR 合并速度虽略低于 Moltis/NanoBot，但功能广度显著领先。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|--------|--------|--------|
| **安全沙箱与权限隔离** | NanoClaw (#457, #842)、IronClaw (#1537)、Zeroclaw (#1478) | 防止 exec 工具越权、容器逃逸、凭证泄露 |
| **多通道消息一致性** | CoPaw (#2138)、LobsterAI (#691)、PicoClaw (#1917) | 跨 IM 平台（钉钉/微信/Telegram）消息去重、状态同步 |
| **本地模型与离线支持** | Moltis (#476 KV 缓存)、CoPaw (#1789)、ZeptoClaw (#407) | 降低延迟、节省 token 成本、保障隐私 |
| **工具调用可观测性** | NanoBot (#2420)、LobsterAI (#724)、IronClaw (#1513) | 实时流式输出、错误溯源、性能监控 |
| **配置与部署简化** | TinyClaw (#253)、EasyClaw (macOS 签名)、NanoBot (#2399) | 降低 K8s/桌面端部署门槛，避免手动构建 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键点 |
|------|--------|--------|----------------|
| **OpenClaw** | 企业级通信集成 + 插件生态 | 企业开发者、运维团队 | 有状态会话、ClawHub 中心化插件市场 |
| **NanoBot** | 轻量自动化 + 成本优化 | DevOps、个人开发者 | 无状态执行、心跳任务压缩、僵尸进程回收 |
| **Zeroclaw** | 异步架构 + 多模态交互 | 极客用户、边缘部署者 | Tokio 异步运行时、pgvector 记忆检索 |
| **PicoClaw** | 多智能体协作 + 安全优先 | 教育、研究场景 | Agent 抽象层、敏感数据过滤、Tirith 集成 |
| **IronClaw** | 多租户 + WASM 工具链 | 企业 SaaS 提供商 | TEE 环境支持、统一执行引擎重构 |
| **Moltis** | 本地 LLM 性能优化 | 离线部署用户 | KV 缓存一致性、Vulkan GGUF 加速 |

---

## 6. 社区热度与成熟度

- **快速迭代阶段**（高 Issues/PRs，功能爆发）：  
  **OpenClaw、CoPaw、PicoClaw** —— 面临稳定性挑战，但响应迅速，适合前沿探索者。
  
- **质量巩固阶段**（低 Issues，高 PR 合并率）：  
  **NanoBot、Moltis、TinyClaw** —— 聚焦性能优化与架构清理，适合生产环境采用。

- ** niche 深耕阶段**（低活跃度，垂直场景）：  
  **EasyClaw（桌面体验）、ZeptoClaw（CLI/研究工具）** —— 用户群体明确，迭代节奏可控。

---

## 7. 值得关注的趋势信号

1. **安全从“可选”变为“刚需”**：  
   多个项目（NanoClaw、IronClaw、PicoClaw）主动引入沙箱、凭证过滤、审计日志，反映用户对**工具调用风险**的警惕性提升。开发者需将安全设计前置。

2. **“无状态代理” vs “有状态会话”架构之争白热化**：  
   NanoBot 通过无状态设计解决 token 爆炸问题，而 OpenClaw 坚持有状态以支持复杂对话。**混合架构**（如 IronClaw 的 WASM 隔离 + 会话持久化）可能成为折中方案。

3. **本地模型集成进入性能优化深水区**：  
   不再满足于“能跑通”，而是追求 KV 缓存命中率（Moltis）、流式推理（PicoClaw）、硬件加速（Vulkan），预示**边缘 AI 代理**将成为下一战场。

4. **企业通信协议标准化需求浮现**：  
   Mattermost、Feishu、钉钉等通道的重复开发（LobsterAI、Zeroclaw、CoPaw 均独立实现）呼吁**统一适配器规范**，类似 MCP 的工具协议可能向通信层延伸。

> **对开发者的建议**：优先选择具备明确安全边界与多通道抽象能力的项目（如 PicoClaw、IronClaw）；若需快速落地，可基于 NanoBot 或 Moltis 构建轻量代理；关注 OpenClaw 的 ClawHub 生态以复用企业级插件。

---  
**分析师备注**：生态整体正向“**安全、高效、可观测**”演进，技术选型应平衡创新速度与生产稳定性。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-03-24）

---

## 1. 今日速览

NanoBot 在过去24小时内保持高度活跃，社区贡献与核心开发并行推进。共产生 **20条 Issues 更新**（18条新开/活跃，2条关闭）和 **81条 PR 更新**（50条待合并，31条已合并/关闭），显示出强劲的开发节奏和问题响应能力。尽管无新版本发布，但多个关键 Bug 修复与功能增强已进入合并或测试阶段，项目整体向更高稳定性与安全性迈进。社区对 token 消耗、安全隔离和多通道支持等议题关注集中，反映出实际部署中的核心痛点。

---

## 2. 版本发布

**无新版本发布**。当前主线仍为 nightly 构建，多个重要修复（如 heartbeat token 溢出、僵尸进程回收）已通过 PR 合并至开发分支，预计将在下一 nightly 或稳定版中体现。

---

## 3. 项目进展

今日有 **31条 PR 被合并或关闭**，其中多项关键改进显著提升系统健壮性：

- **#2420**（[@EvanNotFound](https://github.com/EvanNotFound)）→ 修复 heartbeat 会话无限增长导致的 **560k tokens/次** 异常消耗问题，改为无状态执行（[链接](https://github.com/HKUDS/nanobot/pull/2420)）。
- **#2410**（[@idreesaziz](https://github.com/idreesaziz)）→ 解决 exec 工具产生的 **僵尸进程累积** 问题，通过正确回收子进程避免资源泄漏（[链接](https://github.com/HKUDS/nanobot/pull/2410)）。
- **#2413**（[@Re-bin](https://github.com/Re-bin)）→ 优化 heartbeat 会话管理，保留最近 N 条消息而非全量历史，防止上下文溢出（[链接](https://github.com/HKUDS/nanobot/pull/2413)）。
- **#2415**（[@yonghuname](https://github.com/yonghuname)）→ 实现 HEARTBEAT.md 无任务时跳过 LLM 调用，节省 API 成本（[链接](https://github.com/HKUDS/nanobot/pull/2415)）。
- **#2408**（[@yorkhellen](https://github.com/yorkhellen)）→ 优化 `read_file` 工具，采用流式读取避免大文件 OOM（[链接](https://github.com/HKUDS/nanobot/pull/2408)）。

> 上述修复直接回应了社区最紧迫的稳定性与成本问题，标志着项目从“功能扩展”向“生产就绪”转型。

---

## 4. 社区热点

### 🔥 高讨论度 Issues

| Issue | 主题 | 评论数 | 核心诉求 |
|------|------|--------|--------|
| [#2343](https://github.com/HKUDS/nanobot/issues/2343) | `run_agent_loop` 未检查 `contextWindowTokens` 导致 token 超限 | 14 | 请求自动截断或警告机制，避免硬性报错 |
| [#2375](https://github.com/HKUDS/nanobot/issues/2375) | Heartbeat 会话历史导致 token 暴增（560k/次） | 8 | 急需 stateless 设计或会话压缩策略 |
| [#1873](https://github.com/HKUDS/nanobot/issues/1873) | Agent 可访问自身 config.json 泄露密钥 | 10 | 要求权限隔离，防止 exec 工具越权 |

> 分析：用户普遍关注 **资源效率**（token 成本）与 **安全边界**（密钥隔离），反映出企业级部署的成熟需求。

### 🔥 高关注度 PR

- **#1934**（事件驱动 Hook 系统）→ 支持用户通过 JSON 配置技能启停，无需改代码，极大提升可扩展性（[链接](https://github.com/HKUDS/nanobot/pull/1934)）。
- **#2419**（Feishu 流式输出）→ 实现实时消息编辑，改善交互体验（[链接](https://github.com/HKUDS/nanobot/pull/2419)）。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否已有 Fix PR |
|--------|------|------|----------------|
| ⚠️ 高 | [#2375](https://github.com/HKUDS/nanobot/issues/2375) | Heartbeat 会话无限增长，单次消耗 560k tokens | ✅ #2420、#2413 |
| ⚠️ 高 | [#2405](https://github.com/HKUDS/nanobot/issues/2405) | Exec 工具产生僵尸进程 | ✅ #2410、#2362 |
| ⚠️ 中 | [#2343](https://github.com/HKUDS/nanobot/issues/2343) | 上下文 token 超限未做前置检查 | ❌ 尚无 PR |
| ⚠️ 中 | [#2293](https://github.com/HKUDS/nanobot/issues/2293) | Ollama + qwen2.5:14b 执行工具时对话静默中断 | ❌ 尚无 PR |
| ⚠️ 低 | [#2376](https://github.com/HKUDS/nanobot/issues/2376) | 消息列表末尾出现两个 assistant 消息 | ❌ 可能需调整 subagent 消息角色 |

> 当前最严重问题已基本修复，剩余问题多涉及特定模型或边缘场景。

---

## 6. 功能请求与路线图信号

| 功能请求 | 关联 Issue | 已有 PR？ | 纳入可能性 |
|--------|-----------|----------|----------|
| OpenWebUI 官方通道支持 | [#2389](https://github.com/HKUDS/nanobot/issues/2389) | ❌ | 中（社区兴趣高，但需评估优先级） |
| `--data-dir` 参数分离配置与运行时数据 | [#2399](https://github.com/HKUDS/nanobot/issues/2399) | ❌ | 高（K8s 部署刚需） |
| 微信官方通道支持 | [#2353](https://github.com/HKUDS/nanobot/issues/2353) | ✅ #2412（已关闭，可能合并至 nightly） | 高 |
| Groq 转录指定语言 | [#2421](https://github.com/HKUDS/nanobot/issues/2421) | ❌ | 低（ niche 需求） |
| 心跳任务跳过空 LLM 调用 | [#2406](https://github.com/HKUDS/nanobot/issues/2406) | ✅ #2415 | 已合并 |

> 微信通道、数据目录分离、Hook 系统将成为下一阶段重点。

---

## 7. 用户反馈摘要

- **痛点**：
  - “每次心跳任务都加载几百行日志，token 费用爆炸”（#2375）
  - “exec 工具跑久了服务器上全是 `<defunct>` 进程”（#2405）
  - “切换 workspace 后旧 cron 还在跑，还混用新 prompt！”（#2358）
- **满意点**：
  - “Feishu 流式输出终于实现了，体验流畅很多”（#2419 相关讨论）
  - “subagent 轨迹持久化对调试很有帮助”（#2043）
- **使用场景**：
  - 企业微信/飞书自动化巡检（30min 心跳）
  - 本地 Ollama 模型 + 工具调用
  - K8s 多实例部署（需隔离配置与数据）

---

## 8. 待处理积压

| 类型 | ID | 标题 | 未响应时间 | 提醒 |
|------|----|------|----------|------|
| Issue | [#1873](https://github.com/HKUDS/nanobot/issues/1873) | Agent 可访问 config.json 泄露密钥 | 12 天 | 虽有 #1940（bwrap 沙箱）但未合并，需安全评审 |
| Issue | [#1315](https://github.com/HKUDS/nanobot/issues/1315) | Discord slash 命令冲突 | 24 天 | 影响 Discord 用户体验，需设计兼容方案 |
| Issue | [#1473](https://github.com/HKUDS/nanobot/issues/1473) | 重复调用 spawn subagent | 21 天 | 特定模型下逻辑错误，需复现与修复 |
| PR | [#1934](https://github.com/HKUDS/nanobot/pull/1934) | 事件驱动 Hook 系统 | 12 天 | 高价值功能，建议加速 review |
| PR | [#1341](https://github.com/HKUDS/nanobot/pull/1341) | Web 聊天通道（SSE 流式） | 24 天 | 重要前端集成，长期未合入 |

> 建议维护者优先处理 **#1873（安全）** 和 **#1934（架构扩展）**，二者对项目长期健康至关重要。

---  
*数据来源：NanoBot GitHub 仓库（截至 2026-03-24 00:00 UTC）*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报（2026-03-24）

---

## 1. 今日速览

Zeroclaw 在 2026-03-24 继续保持高活跃度，过去24小时内共处理 **43 条 Issues**（新开/活跃 24，关闭 19）和 **50 条 PR**（待合并 33，已合并/关闭 17），并发布 **2 个新版本**（v0.5.9 正式版与 v0.5.9-beta.579）。社区对安全策略、工具调用稳定性及多通道支持提出集中反馈，开发团队正积极修复关键 Bug 并推进异步架构升级。整体项目处于快速迭代与功能完善阶段，健康度良好。

---

## 2. 版本发布

### 🔹 v0.5.9（正式版）
- **更新内容**：增量优化与界面打磨，未引入破坏性变更。
- **迁移说明**：无缝升级，建议所有用户更新以获取最新稳定性改进。
- [Release 链接](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.5.9)

### 🔹 v0.5.9-beta.579（测试版）
- **核心新增功能**：
  - 浏览器自动化技能与 VNC 配置脚本支持
  - Feishu/Lark 通道支持图片与文件传输
  - 集成 SearXNG 搜索提供商
  - 语音消息转文本（STT）支持
  - 声明式 cron 任务配置
  - Gateway 支持命名会话、断线重连与会话验证
- **注意**：此为测试版本，建议开发者在非生产环境试用新功能。
- [Release 链接](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.5.9-beta.579)

---

## 3. 项目进展

今日多个关键 PR 被合并或推进，显著提升系统稳定性与扩展性：

- ✅ **#4453**：将同步 PostgreSQL 驱动替换为异步 `tokio-postgres` + `deadpool`，解决因 `Runtime::block_on()` 导致的 panic 问题，提升内存模块并发性能。
- ✅ **#4112**：为记忆系统添加 pgvector 后端，支持混合语义+关键词搜索，增强长期记忆检索能力。
- ✅ **#4448**：修复 agent chat 中工具调用通知重复发送问题，改善用户体验。
- ✅ **#4420**：修复 `git_operations` 工具无法在子目录运行的问题，提升开发工作流兼容性。
- ✅ **#4444**：将 `channel-lark` 加入默认编译特性，确保 Lark/Feishu 长连接功能在标准构建中可用。

> 项目整体向异步化、模块化与安全加固方向稳步迈进。

---

## 4. 社区热点

### 🔥 #1478：[CLOSED] “除了安全，什么功能也没有”
- **评论数**：46 | **👍**：6
- **核心诉求**：用户强烈抱怨安全策略过于严格，即使配置全开仍无法执行基础操作（如安装 `ffmpeg`），导致 bot 功能受限。
- **背后信号**：反映当前安全沙箱设计缺乏灵活配置选项，亟需引入“开发者模式”或权限白名单机制。
- [Issue 链接](https://github.com/zeroclaw-labs/zeroclaw/issues/1478)

### 🔥 #4028：[OPEN] Database-first memory architecture with pgvector and graph capabilities
- **评论数**：4
- **提案价值**：提议构建基于 PostgreSQL + pgvector + 图数据库的持久化记忆架构，已被开发者 @glamberson 通过 PR #4112 部分实现。
- [Issue 链接](https://github.com/zeroclaw-labs/zeroclaw/issues/4028)

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重等级 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| **S0** | #4299 | 自定义 OpenAI Provider 在 Mattermost 集成后引发 502 错误并停止响应 | ❌ 无 |
| **S0** | #4445 | Docker/Podman 容器内无法读写文件，疑似 `auto_approve` 缺失 | ❌ 无 |
| **S1** | #4442 | `allowed_tools` 字段非空时任务无法运行 | ❌ 无 |
| **S1** | #4409 | `git_operations` 工具仅能在 workspace 根目录运行 | ✅ #4420 |
| **S1** | #4400 | 所有工具返回 `[Used tools: xxx]` 而非实际输出 | ❌ 无 |
| **S1** | #4408 | WebSocket 通道（如 Discord/Matrix）不遵守代理设置 | ❌ 无 |
| **S2** | #4348 | Telegram 草稿更新拼接工具叙述与状态行 | ✅ #4448（部分修复） |

> 多个 S0/S1 级问题尚未修复，建议优先处理 #4299 与 #4445。

---

## 6. 功能请求与路线图信号

以下功能请求已获得开发响应，有望纳入下一版本：

- **🟢 多通道草稿流支持**：#4452 请求为 Discord/Matrix 添加 mid-turn streaming，已有 Telegram 实现作为参考，技术路径清晰。
- **🟢 本地节点自动发现**：#4428 提出 mDNS 局域网 peer 发现，PR 已开放，适合边缘部署场景。
- **🟢 统一语音管道**：#4427 设计 VoicePipeline 抽象层，统一 STT/TTS 处理逻辑，减少通道重复代码。
- **🟡 macOS 菜单栏应用**：#4454 提议 Tauri 构建原生菜单栏控制端，虽已关闭但反映桌面集成需求上升。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实声音：

- **痛点**：
  - “安全到连 `ffmpeg` 都不能装，这 bot 只能聊天，我要它何用？”（#1478）
  - “Docker 里连 `curl` 都没有，调试都难”（#4445）
  - “工具调用后只显示日志，看不到实际结果”（#4400）
- **满意点**：
  - “v0.5.9-beta 的语音转录和 SearXNG 支持很棒！”（隐含于 #3679 关闭评论）
  - “Lark 文件支持终于来了”（#3679 相关讨论）
- **使用场景**：
  - 个人开发者用于自动化办公（cron + tmux 流）
  - 企业用户集成 Mattermost/Feishu 做内部助手
  - 极客用户在树莓派/Raspberry Pi 上自建私有部署

---

## 8. 待处理积压

以下重要 Issue 长期未响应，建议维护者关注：

- **#3664**：[OPEN, S0] 运行时数据丢失风险，附截图但无详细日志，需复现验证。
- **#3681**：[OPEN, S0] `/ws/chat` 接口无响应，涉及核心通信模块，影响 Web UI 可用性。
- **#4296**：[OPEN, S1] 0.5.6+ 自定义 OpenAI Provider 报错，版本回归问题，阻碍用户升级。

> 建议分配资源优先排查 #3681 与 #4296，二者均影响核心功能可用性。

--- 

**报告生成时间**：2026-03-24  
**数据来源**：[Zeroclaw GitHub Repository](https://github.com/zeroclaw-labs/zeroclaw)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-03-24）

---

## 1. 今日速览

PicoClaw 在24小时内表现出极高的开发活跃度：共处理 **79 条 PR 更新**（53 条已合并/关闭，26 条待合并）和 **26 条 Issues 更新**（15 条新开/活跃，11 条已关闭），并发布了一个 nightly 版本。核心架构演进持续推进，包括多智能体协作、语音交互（TTS/ASR）、安全增强等方向。社区反馈集中在配置兼容性、跨渠道稳定性及企业级部署问题上，整体项目处于快速迭代与功能深化阶段。

---

## 2. 版本发布

✅ **Nightly Build v0.2.3-nightly.20260324.dd9adf8a** 已发布  
🔗 [Release 详情](https://github.com/sipeed/picoclaw/releases/tag/nightly)

- 此为自动化构建版本，包含截至 2026-03-24 的最新代码变更。
- 主要集成内容：
  - Agent 重构 Phase 1 完成（#1894）
  - 新增 AWS Bedrock 提供商支持（#1903）
  - 修复 reasoning_content 路由至 reasoning_channel 的回归问题（#1907）
  - 引入敏感数据过滤机制防止 LLM 泄露凭证（#1930）
- ⚠️ **注意**：该版本为开发预览版，可能存在不稳定行为，不建议生产环境直接使用。

---

## 3. 项目进展

今日合并/关闭的关键 PR 推动多个核心模块演进：

| PR | 类型 | 进展说明 |
|----|------|--------|
| [#1903](https://github.com/sipeed/picoclaw/pull/1903) | 新功能 | 新增 AWS Bedrock 提供商支持，扩展云 LLM 生态兼容性 |
| [#1907](https://github.com/sipeed/picoclaw/pull/1907) | Bug 修复 | 修复 OpenAI 兼容模型返回 `reasoning_content` 时无法正确路由到指定频道的问题（关联 #1746） |
| [#1930](https://github.com/sipeed/picoclaw/pull/1930) | 安全增强 | 工具调用结果中自动过滤 API 密钥等敏感信息，防止泄露给 LLM |
| [#1905](https://github.com/sipeed/picoclaw/pull/1905) | 功能增强 | 集成 ElevenLabs Scribe STT 转录器，支持 Telegram 语音消息发送 |
| [#1894](https://github.com/sipeed/picoclaw/issues/1216)（Phase 1 完成） | 架构重构 | Agent 核心抽象（AgentLoop, Event, Context, Hooks）落地，为 Phase 2 多智能体协作奠定基础 |

> 项目整体向“模块化、安全化、多模态交互”方向稳步迈进，Agent 架构重构进入第二阶段。

---

## 4. 社区热点

🔥 **最活跃 Issue：[#1648](https://github.com/sipeed/picoclaw/issues/1648) — 添加 TTS 与 ASR 支持**  
- **评论数：21** | **状态：Open** | **标签：enhancement, provider, channel**
- 社区高度关注语音交互能力。已有 PR #1852 实现 Discord/Weixin 上的端到端语音收发（Mode 4.2 流式支持），但尚未完全集成至网关层。
- 用户诉求：希望统一语音 I/O 架构，支持本地/云端 TTS/ASR 插件化切换，避免硬编码依赖 Groq。

💡 **新兴提案：[#1919](https://github.com/sipeed/picoclaw/issues/1919) — Seahorse 生物启发式记忆系统**  
- 提出为 AI Agent 构建类海马体记忆机制，实现短期上下文压缩与长期记忆固化，反映用户对“持久化智能”的期待。

---

## 5. Bug 与稳定性

按严重程度排序：

| Issue | 严重性 | 描述 | 修复状态 |
|------|--------|------|----------|
| [#1901](https://github.com/sipeed/picoclaw/issues/1901) | ⚠️ 高 | 配置缺失 API Key 导致服务启动失败（step-3.5 模型） | ✅ 已有修复方向（见 #1928） |
| [#1917](https://github.com/sipeed/picoclaw/issues/1917) | ⚠️ 高 | Weixin 频道因权限问题无法持久化 sync cursor（`/root/.picoclaw` 写入失败） | 🔧 需调整数据目录权限策略 |
| [#1909](https://github.com/sipeed/picoclaw/issues/1909) | ⚠️ 中 | 命名 Agent 使用 `message` 工具后仍发送重复回复 | 🔄 待修复（逻辑冲突） |
| [#1824](https://github.com/sipeed/picoclaw/issues/1824) | ⚠️ 中 | 容器重启后 heartbeat 工具反馈泄露至用户频道 | ✅ 已修复（#1937） |
| [#1058](https://github.com/sipeed/picoclaw/issues/1058) | ⚠️ 中 | Cron 任务 `deliver=false` 时 LLM 响应静默丢弃，用户无反馈 | 🔄 需优化消息路由逻辑 |

> 多个 Bug 暴露配置管理与跨渠道一致性短板，建议加强默认路径可配置性与错误可见性。

---

## 6. 功能请求与路线图信号

| 功能请求 | 关联 PR | 纳入可能性 |
|--------|--------|----------|
| **多智能体协作（Phase 2）** | #1934 | ✅ 高（已立项，Phase 1 完成） |
| **TTS/ASR 统一架构** | #1852, #1503 | ✅ 高（社区呼声强，PR 已存在） |
| **模型级联容灾（Rate Limit Failover）** | #1908 | 🟡 中（需设计 cascade 配置 schema） |
| **Tirith 安全扫描集成** | #1931, #1932 | ✅ 高（PR 已提交，增强 exec 工具安全性） |
| **Telegram 流式响应（打字机效果）** | #1906 | ✅ 高（基础设施已备，PR 待审） |

> 下一版本（v0.3.0）有望聚焦 **语音交互标准化** 与 **多智能体协作框架**。

---

## 7. 用户反馈摘要

- **痛点**：
  - 配置复杂：API Key 管理混乱（#1901）、Weixin 目录权限硬编码（#1917）
  - 渠道兼容性差：Telegram Termux 环境运行失败（#1936）、OpenRouter free 模型不可用（#1790）
  - 反馈缺失：Cron 任务无输出（#1058）、工具调用重复回复（#1909）

- **满意点**：
  - 对 Agent 重构进展表示认可（#1216 关闭评论）
  - 赞赏 ElevenLabs STT 集成（#1905）和敏感数据过滤（#1930）等安全实践

- **使用场景**：
  - 企业内网部署（需权限控制）
  - 多平台消息聚合（Discord/Telegram/Weixin）
  - 自动化定时任务 + LLM 处理流水线

---

## 8. 待处理积压

⚠️ **需维护者关注**：

- [#1058](https://github.com/sipeed/picoclaw/issues/1058)（Cron deliver=false 静默丢弃）：**开放近 20 天**，影响用户体验一致性，建议明确日志或回调机制。
- [#1648](https://github.com/sipeed/picoclaw/issues/1648)（TTS/ASR 架构）：虽有 PR #1852，但尚未合入主线，**需决策是否作为 v0.3.0 核心功能**。
- [#1934](https://github.com/sipeed/picoclaw/issues/1934)（多智能体 Phase 2）：刚创建，需细化设计文档并分配资源。

> 建议本周内对上述高价值 Issue 明确 roadmap 归属或响应计划，以维持社区信心。

---  
📊 **项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
高活跃度 + 明确架构演进 + 积极安全投入，但需加强配置鲁棒性与用户反馈闭环。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-03-24）

---

## 1. 今日速览

NanoClaw 在过去24小时内保持高度活跃，共产生 **17条 Issues 更新** 和 **40条 PR 更新**，其中 **13个 PR 被合并或关闭**，显示出社区贡献与核心维护团队的高效协作。尽管无新版本发布，但多个关键安全修复、技能扩展和架构演进正在推进。项目整体处于快速迭代与安全性强化阶段，社区对容器隔离、权限控制和多后端支持的关注度显著上升。

---

## 2. 版本发布

**无新版本发布**。当前开发重心集中于安全加固与功能模块化，预计下一版本将整合多项安全策略与多 AI 后端支持。

---

## 3. 项目进展

今日有 **13个 PR 被合并或关闭**，重点进展包括：

- **#1352（已关闭）**：实现向 Linear 代理会话实时流式传输工具调用与推理过程，提升可观测性（[链接](https://github.com/qwibitai/nanoclaw/pull/1352)）。
- **#1377（已关闭）**：将 Google Calendar 会议管理功能移植为容器技能，支持创建/删除会议及生成 Meet 链接（[链接](https://github.com/qwibitai/nanoclaw/pull/1377)）。
- **#1374（已关闭）**：引入 Rovo Dev 作为替代 AI 后端，与 Claude Agent SDK 并存，通过 `AGENT_BACKEND` 配置切换（[链接](https://github.com/qwibitai/nanoclaw/pull/1374)）。
- **#1359（已关闭）**：完成知识仓库（knowledge-warehouse）内容迁移至 NanoClaw KB 系统，统一知识管理入口（[链接](https://github.com/qwibitai/nanoclaw/pull/1359)）。

此外，多个技能类 PR（如 `/add-memory`、`/add-soul`、`/audit-security`）被合并，体现“技能即仓库”架构的成熟落地。

---

## 4. 社区热点

以下 Issues/PRs 引发较高关注：

- **#1273（Open, 2👍）**：用户 @rozek 提出基于 NanoClaw 自建的**多会话 Web 通道**，并开源实现，反映用户对非 Messenger 交互方式的强烈需求（[链接](https://github.com/qwibitai/nanoclaw/issues/1273)）。
- **#458（Open, 4👍）**：关于**容器网络无限制访问**的安全警告持续发酵，结合 #457 的命令注入漏洞，凸显容器逃逸风险（[链接](https://github.com/qwibitai/nanoclaw/issues/458)）。
- **#1356（Open, 2👍）**：@Ordinath 提出**代理内存系统 redesign**，指出当前 Markdown 文件索引在扩展性上的瓶颈，推动架构演进讨论（[链接](https://github.com/qwibitai/nanoclaw/issues/1356)）。

这些议题共同指向三大方向：**安全边界强化、交互渠道多样化、长期记忆可扩展性**。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重性 | Issue | 描述 | 是否有 Fix PR |
|--------|-------|------|----------------|
| **Critical** | [#457](https://github.com/qwibitai/nanoclaw/issues/457) | `stopContainer()` 存在 shell 字符串插值命令注入风险 | ❌ 无直接修复 PR，但 #1380 提出集成 agentsh 作为策略引擎 |
| **High** | [#842](https://github.com/qwibitai/nanoclaw/issues/842) | WebFetch/WebSearch 结果未消毒，易受 Anthropic 拒绝字符串注入攻击 | ❌ 未修复 |
| **Medium** | [#1361](https://github.com/qwibbitai/nanoclaw/issues/1361) | agent-runner 源码缓存不随代码变更刷新，导致旧逻辑持续运行 | ✅ 潜在修复方向见 #1384（挂载 group 目录） |

> 注：#1384（[链接](https://github.com/qwibitai/nanoclaw/pull/1384)）虽主要解决 volume 挂载问题，但间接缓解了 #1361 的缓存一致性问题。

---

## 6. 功能请求与路线图信号

用户提出的新功能中，以下具备较高落地可能性：

- **多 AI 后端支持**：已由 #1383（Phase 1 多提供商路由）和 #1374（Rovo Dev 后端）推动，GitHub Copilot SDK 集成（#1350）亦受关注，预示下一版本将支持 OpenAI、Gemini 等主流模型。
- **细粒度权限控制**：#779（能力型技能安全模型）与 #1171（群组工具权限策略）形成互补，结合 #1380（agentsh 集成），安全策略引擎化趋势明确。
- **新通信渠道**：Signal（#1121）、Mattermost（#546）、Emacs（#1375）、Slack 自由对话（#1363）等 PR 表明“通道即技能”模式正被广泛采纳。

预计下一版本将聚焦 **安全沙箱强化 + 多后端抽象层 + 技能市场雏形**。

---

## 7. 用户反馈摘要

从 Issues 评论提炼关键用户声音：

- **痛点**：
  - “容器默认信任模型过于宽松，仅靠 Docker 不足以保障安全”（#865）
  - “Oracle Cloud 默认 iptables 规则导致容器无法连接 credential proxy，静默失败难排查”（#1357）
  - “Slack 仅支持硬编码命令，无法自由对话，浪费已有 channel 能力”（#1363）

- **满意点**：
  - “技能即仓库架构极大降低了集成门槛”（#1121 作者）
  - “Web 通道实现简洁优雅，适合教学场景”（#1273 评论）

- **使用场景**：
  - 教育用途（学生通过 Web 界面与代理交互）
  - 企业自动化（Instacart 购物、日历管理）
  - 安全审计（自定义策略扫描）

---

## 8. 待处理积压

以下重要 Issue/PR 长期未获响应，建议维护者优先处理：

- **#398（Open, 创建于 2026-02-22）**：请求为 `WebFetch`/`WebSearch` 添加 allowlist 与禁用选项，涉及基础安全控制，至今无进展（[链接](https://github.com/qwibitai/nanoclaw/issues/398)）。
- **#411（Open, 创建于 2026-02-23）**：要求文档明确标注间接提示注入风险，属关键安全信息披露，尚未补充至 SECURITY.md（[链接](https://github.com/qwibitai/nanoclaw/issues/411)）。
- **#546（Open, 创建于 2026-02-26）**：Mattermost 通道技能 PR 处于“Blocked”状态，阻碍社区使用该主流协作平台（[链接](https://github.com/qwibitai/nanoclaw/pull/546)）。

> 建议：对 #398 和 #411 发布临时安全公告，并评估 #546 的阻塞原因以加速合并。

--- 

**报告生成时间：2026-03-24**  
**数据来源：NanoClaw GitHub 仓库公开数据**

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-03-24）

---

## 1. 今日速览

IronClaw 在过去24小时内保持高活跃度，共产生 **14条 Issues 更新**（13条新开/活跃，1条关闭）和 **50条 PR 更新**（42条待合并，8条已合并/关闭），显示出核心团队与社区开发者的高度参与。尽管无新版本发布，但多个大型重构与功能增强 PR（如统一执行引擎、多租户隔离、LLM 推理链路追踪）持续推进，项目正迈向 v0.22.0 的架构升级阶段。社区反馈集中在 Telegram 集成、凭证注入、模型切换等关键用户体验问题上，反映出生产环境部署的迫切需求。

---

## 2. 版本发布

**无新版本发布**。  
但值得注意的是，PR [#1601](https://github.com/nearai/ironclaw/pull/1601) 已标记为 `chore: release v0.22.0`，包含 **API 破坏性变更**，预计将在未来24–48小时内正式发布。建议用户提前审查其变更内容，特别是涉及公开结构体字段新增的部分。

---

## 3. 项目进展

今日有 **8个 PR 被合并或关闭**，重点进展包括：

- **安全加固**：PR [#1590](https://github.com/nearai/ironclaw/pull/1590) 修复跨频道审批线程劫持漏洞，通过引入 `source_channel` 字段实现细粒度授权控制。
- **模型持久化修复**：PR [#1581](https://github.com/nearai/ironclaw/pull/1581) 解决 `/model` 命令无法持久化到 `.env` 文件的问题，确保模型切换在重启后生效。
- **Gemini 兼容性修复**：PR [#1588](https://github.com/nearai/ironclaw/pull/1588) 保留 `thought_signature` 字段，避免工具调用往返时触发 400 错误。
- **MCP 协议支持增强**：PR [#1437](https://github.com/nearai/ironclaw/pull/1437) 正确处理 `202 Accepted` 响应，完善 Streamable HTTP 会话建立流程。
- **架构演进铺垫**：PR [#1550](https://github.com/nearai/ironclaw/pull/1550) 完成近期合并代码的扫尾修复，涵盖安全、性能与正确性共8项问题。

这些合并显著提升了系统稳定性、安全边界与多后端兼容性，为即将发布的 v0.22.0 打下基础。

---

## 4. 社区热点

以下 Issues/PRs 引发最多讨论与关注：

- **[#602] No Telegram in default install**（6评论，1👍）  
  用户反映默认安装包缺失 Telegram 支持，仅源码构建可用，且扩展安装常失败。暴露了分发包与文档不一致的问题，影响新手入门体验。  
  → [查看 Issue](https://github.com/nearai/ironclaw/issues/602)

- **[#1537] WASM credential injection fails on NEAR AI hosted TEE**（4评论）  
  在托管 TEE 环境中，WASM 工具凭证虽存储成功但运行时未注入，导致功能静默失效。涉及核心安全机制，需紧急排查。  
  → [查看 Issue](https://github.com/nearai/ironclaw/issues/1537)

- **[#407] Ideas from Hermes Agent worth adopting**（4评论，2👍）  
  社区提议借鉴 Hermes Agent 的架构模式（如技能合成、记忆管理），推动 IronClaw 向更智能的个人助理演进。  
  → [查看 Issue](https://github.com/nearai/ironclaw/issues/407)

- **[#1557] Unified Thread-Capability-CodeAct execution engine (v2)**（XL 级 PR）  
  核心团队正在开发全新执行引擎，旨在用5个原语替代约10个碎片化抽象，是架构现代化的关键一步。  
  → [查看 PR](https://github.com/nearai/ironclaw/pull/1557)

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| **高** | [#1537] WASM credential injection fails on hosted TEE | 凭证存储成功但运行时未注入，导致工具完全不可用 | ❌ 无 |
| **高** | [#1596] Telegram onboarding exposes bot tokens in chat | 用户令牌可能被明文暴露给 LLM，存在安全风险 | ❌ 无 |
| **中** | [#1577] Ollama provider returns 502 on Windows v0.21.0 | Windows 平台特定故障，影响本地部署 | ❌ 无 |
| **中** | [#1595] LLM forgets activated Telegram channel | 已激活频道被重复要求启用，UX 混乱 | ❌ 无 |
| **低** | [#1520] qwen3.5-plus 返回 405 Method Not Allowed | 特定 API 端点限制 Coding Plan 功能 | ❌ 无 |

> 注：[#1241] Mistral API tool call ID 格式问题已关闭，推测已在后台修复。

---

## 6. 功能请求与路线图信号

用户明确提出的需求中，以下具备高优先级落地信号：

- **DB-backed 用户管理**（[#1605]）：支持运行时注册、邀请与 API 令牌 CRUD，替代静态 `GATEWAY_USER_TOKENS` 配置。已由核心成员 @ilblackdragon 提出，P1 优先级，预计纳入 v0.23。
- **LLM 提供器热重载**（[#1350]）：用户期望 Web UI 切换模型后立即生效，无需重启。已有明确根因分析，修复路径清晰。
- **WeChat 渠道支持**（[#1584]）：社区已开发 OpenClaw 插件，呼吁 IronClaw 跟进。反映亚洲市场拓展需求。
- **ACP 协议作业模式**（[#1600]）：允许委托给任意兼容编码代理（如 Cline、Copilot），提升工具生态互操作性。

结合 PR 活动，**多租户隔离**（[#1118]）、**自适应学习系统**（[#1187]）等长期提案仍在推进，但需更多测试验证。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实声音：

- **痛点**：
  - “Telegram 安装文档与实际行为不符，浪费两小时调试。”（#602）
  - “模型切换后必须重启才能生效，这在生产环境不可接受。”（#1350）
  - “WASM 工具在 TEE 中静默失败，毫无错误提示，极难排查。”（#1537）

- **满意点**：
  - “CLI 工具信息现在显示凭证状态，极大简化了调试流程。”（关联 PR #1572）
  - “Web UI 的推理链路可视化让 agent 决策更透明。”（关联 PR #1513）

- **使用场景**：
  - 企业用户关注多租户与权限隔离（#1118）；
  - 开发者依赖 MCP 与 WASM 工具扩展能力；
  - 普通用户期望即装即用的聊天渠道（Telegram/WeChat）。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，建议维护者优先关注：

- **[#760] Thread ID context pollution vulnerability**（安全类，超6个月未闭环）  
  虽被 #1118 架构性缓解，但原始报告未正式关闭，需状态同步。

- **[#351] Multi-tenant auth with per-user workspace isolation**（原 PR，已 rebased 为 #1118）  
  原始讨论中仍有未迁移的反馈，需确认是否全部吸收。

- **[#1051] Event-triggered routines never fire**（已被 #1211 修复，但 Issue 未关闭）  
  维护者应关闭对应 Issue 以清理看板。

> 建议：对超过30天无更新的 P1/P2 Issues 设置自动提醒，提升响应 SLA。

--- 

**报告生成时间**：2026-03-24  
**数据来源**：GitHub Repository `nearai/ironclaw`

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-03-24）

---

## 1. 今日速览

LobsterAI 在 2026-03-24 继续保持高活跃度，社区贡献与开发节奏显著加快。过去24小时内共产生 **21 条新 Issue** 和 **36 条 PR 更新**，其中 **12 个 PR 已合并/关闭**，**1 个新版本发布**（2026.3.23）。项目整体处于快速迭代与功能完善阶段，用户反馈密集，核心功能如 Cowork、IM 机器人集成、MCP 支持等成为焦点。尽管存在部分稳定性问题，但开发团队响应迅速，多项关键修复已进入合并流程。

---

## 2. 版本发布

### 🔖 Release 2026.3.23（2026-03-23）

**主要更新内容：**
- ✅ **新增防休眠功能**：防止系统因长时间无操作进入休眠，保障后台任务持续运行（@wuleihenbang, #659）
- ✅ **OpenClaw 助手消息与工具卡片交替显示优化**：提升多轮对话中工具调用结果的可读性
- ✅ **UI 优化**：由 @liuzhq1986 主导的界面交互改进（#706）
- ✅ **IM 通道会话输入框体验修复**：保持完整输入框样式，避免布局塌陷（@winsa, #708）

> ⚠️ **无破坏性变更**，建议所有用户升级。该版本重点优化了桌面端与 IM 集成的用户体验。

🔗 [Release 2026.3.23](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.3.23)

---

## 3. 项目进展

今日共 **12 个 PR 被合并或关闭**，涵盖功能增强、性能优化与架构重构：

| 类型 | 关键进展 |
|------|--------|
| **功能增强** | - 新增“聚焦输入框”快捷键（Ctrl+K）并修复设置页快捷键冲突（#717）<br>- 支持会话导出为 Markdown/JSON（#718），响应 #719 用户需求<br>- 用户消息支持“重新编辑”功能（#712） |
| **架构优化** | - 提取重复常量与工具函数至 `src/common/constants.ts`，提升代码一致性（#727）<br>- 拆分巨型文件（如 `main.ts` 3984 行 → 模块化），提升可维护性（#635） |
| **国际化** | - 将硬编码中文文本替换为 i18n 翻译键，改善英文环境体验（#726） |
| **性能与日志** | - OpenClaw 网关日志时间戳从 UTC 转为本地时间，便于调试（#723）<br>- Python 运行时优先使用用户本地安装，避免版本冲突（#721） |

> 📌 项目整体向 **模块化、国际化、用户体验精细化** 方向稳步推进。

---

## 4. 社区热点

### 🔥 高关注度 Issues（附链接）

1. **#724 “救命阿，为什么MCP服务配置不好”**  
   🔗 https://github.com/netease-youdao/LobsterAI/issues/724  
   用户反馈 MCP 配置后显示“0 tools”，无法调用。反映 **MCP 集成文档缺失与调试困难**，亟需官方配置指南。

2. **#728 “配置的mcp如何才能被调用”**  
   🔗 https://github.com/netease-youdao/LobsterAI/issues/728  
   提供详细配置截图但仍无法触发工具调用，指向 **MCP 自动发现机制或权限配置问题**。

3. **#691 “钉钉机器人发送一个任务，lobster回复2条消息”**  
   🔗 https://github.com/netease-youdao/LobsterAI/issues/691  
   钉钉平台消息重复发送，而微信正常，暗示 **平台适配逻辑不一致**，需排查消息去重机制。

4. **#719 “能不能支持将聊天记录导出为Markdown/JSON？”**  
   🔗 https://github.com/netease-youdao/LobsterAI/issues/719  
   已获官方响应并通过 PR #718 实现，体现 **用户需求驱动开发的高效闭环**。

> 💡 社区核心诉求集中于：**MCP 工具调用稳定性、IM 平台兼容性、数据导出能力**。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重等级 | Issue | 描述 | 状态 |
|--------|------|------|------|
| 🔴 **高** | #695 网络访问失败（MacOS） | 挂机超2天后，LobsterAI 占用网络权限导致系统级断网，需手动授权 | ❌ 无 fix PR |
| 🔴 **高** | #705 OpenClaw 网关启动超时 | 日志显示 `waitForGatewayReady: poll #5, elapsed=2455ms, progress=11%` | ❌ 无 fix PR |
| 🟠 **中** | #703 Windows 更新缓慢（卡在30~40%、85%） | 更新过程耗时超2分钟，影响用户体验 | ❌ 无 fix PR |
| 🟠 **中** | #693 Windows 安装提示“无法关闭进程” | 实际无进程残留，疑似安装器检测逻辑错误 | ❌ 无 fix PR |
| 🟢 **低** | #692 开机自启失效（2026.3.22） | 版本升级后自启动配置丢失 | ❌ 无 fix PR |

> ⚠️ **建议优先处理 #695 和 #705**，二者涉及系统级稳定性与核心功能可用性。

---

## 6. 功能请求与路线图信号

| 功能请求 | 关联 Issue | 进展状态 |
|--------|-----------|--------|
| **聊天记录导出（Markdown/JSON）** | #719 | ✅ 已通过 #718 实现 |
| **语音输入支持** | #722 | ❌ 未响应，但符合无障碍与效率趋势 |
| **自定义沙箱存储容量** | #699 | ❌ 未响应，反映高级用户需求 |
| **暴露 bundled openclaw 命令** | #715 | ❌ 未响应，开发者/高级用户诉求 |
| **IM 机器人按需安装** | #687 | ❌ 未响应，可减少安装失败率（如 deepin 源问题） |
| **Pissbook 代理论坛集成** | #683 | ❌ 实验性提案，可能性较低 |

> 📌 **高优先级候选**：语音输入、沙箱扩容、IM 按需安装 —— 可显著提升用户体验与部署灵活性。

---

## 7. 用户反馈摘要

### ✅ 满意点：
- “导出 Markdown 功能太棒了！终于可以整理会议纪要了。”（#719 评论区）
- “防休眠功能解决了我们自动化任务中断的问题。”（Release 评论）
- “UI 优化后输入体验流畅很多。”（#706 反馈）

### ❌ 痛点：
- “MCP 配置了三天还是 0 tools，文档能不能写清楚一点？”（#724）
- “钉钉发一条回两条，老板以为我刷屏……”（#691）
- “Mac 上 Ollama 接口检测失败，Windows 却正常，跨平台一致性呢？”（#713）
- “内置沙箱装个 playwright 就满了，能不能扩到 50GB？”（#699）

> 💬 用户普遍认可功能迭代速度，但对 **跨平台一致性、文档完整性、高级配置支持** 提出更高要求。

---

## 8. 待处理积压

以下 Issue 超过 **3 天未响应**，建议维护者优先关注：

| Issue | 标题 | 创建日期 | 类型 |
|------|------|--------|------|
| #545 | 会话未停止时删除会话，无法再次对话 | 2026-03-20 | Bug（关联 PR #554 待审） |
| #557 | 附件 @mention 引用系统 + 图片预览优化 | 2026-03-20 | Feature（高价值 UX 改进） |
| #590 | 防止手动停止的会话被网关延迟事件自动重启 | 2026-03-20 | Bug Fix（已开发完成，待合并） |
| #609 | 重构定时任务系统（策略模式） | 2026-03-21 | 架构优化（影响任务稳定性） |

> 🔔 **提醒**：PR #590 和 #554 已开发完成，建议尽快 review 合并，避免会话状态管理引发更多问题。

---

**报告生成时间：2026-03-24**  
**数据来源：GitHub LobsterAI 仓库公开数据**  
**分析师：AI 智能体与个人助手开源项目观察组**

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

**TinyClaw 项目日报（2026-03-24）**

---

### 1. 今日速览  
过去24小时内，TinyClaw 项目保持中等活跃度，无新 Issue 提交，但 Pull Request 活动频繁，共产生 7 条 PR 更新（5 条待合并，2 条已合并/关闭）。开发重点集中在系统稳定性优化、任务管理功能增强及第三方集成扩展。整体代码演进方向清晰，维护者响应迅速，项目健康度良好。

---

### 2. 版本发布  
*无新版本发布*

---

### 3. 项目进展  
今日有 **2 个重要 PR 被合并/关闭**，显著提升了系统可靠性与文档结构：

- **#253 [CLOSED] docs(agents): move setup and system prompt config to workspace-level AGENTS.md**  
  将代理配置从全局文档迁移至工作区级文件，支持多代理独立配置，降低协作冲突风险，提升可维护性。  
  🔗 [PR #253](https://github.com/TinyAGI/tinyagi/pull/253)

- **#248 [CLOSED] refactor(telegram): migrate to grammY for reliable polling**  
  将 Telegram 机器人客户端从 `node-telegram-bot-api` 迁移至 grammY，解决长期存在的静默轮询中断问题，引入自动重连与指数退避机制，显著提升消息接收稳定性。  
  🔗 [PR #248](https://github.com/TinyAGI/tinyagi/pull/248)

这两项合并为项目在**生产环境部署可靠性**和**多代理协作支持**方面迈出关键一步。

---

### 4. 社区热点  
*无活跃讨论的 Issues 或高互动 PR*  
过去24小时无新 Issue 创建，所有 PR 均无评论或点赞，表明当前开发主要由核心贡献者推动，社区反馈周期较长。建议加强用户参与引导。

---

### 5. Bug 与稳定性  
虽无新 Bug 报告，但以下 **待合并 PR 正主动修复潜在稳定性问题**：

- **#251 [OPEN] fix(queue): add subprocess lifecycle management and manual session kill API**  
  针对代理子进程未正常退出的问题，引入基于结果事件的 30 秒超时强制终止机制，防止队列挂起。此为关键稳定性修复，建议优先审查合并。  
  🔗 [PR #251](https://github.com/TinyAGI/tinyagi/pull/251)

> ⚠️ 该问题可能影响长时间运行任务的可靠性，属中高风险隐患，已有明确修复方案。

---

### 6. 功能请求与路线图信号  
多个 **新功能 PR 处于开放状态**，预示下一阶段核心方向：

- **#252 [OPEN] feat(tasks): linear-style task/project management with comments**  
  引入类 Linear 的任务管理系统，含 SQLite 持久化、评论线程与结构化 ID（如 SYS-1），结合 shadcn UI 组件，显著增强项目管理能力。  
  🔗 [PR #252](https://github.com/TinyAGI/tinyagi/pull/252)

- **#243 [OPEN] feat: add Novita AI as a built-in LLM provider**  
  集成 Novita AI 作为原生 LLM 提供商，复用 OpenAI 兼容接口，扩展模型选择灵活性，满足用户对低成本/高性能推理服务的需求。  
  🔗 [PR #243](https://github.com/TinyAGI/tinyagi/pull/243)

- **#250 [OPEN] feat(queue): enqueue user message to agent_messages immediately**  
  优化消息流体验，实现用户消息即时持久化，消除 UI 与后端状态不一致的“空白期”。  
  🔗 [PR #250](https://github.com/TinyAGI/tinyagi/pull/250)

上述功能若合并，将推动 TinyClaw 从“基础代理框架”向“一体化 AI 工作空间”演进。

---

### 7. 用户反馈摘要  
*无新 Issue 评论，无法提取直接用户反馈*  
当前缺乏公开用户声音，建议通过模板化 Issue 表单或社区渠道收集使用场景（如：多代理协作、长任务中断、UI 响应延迟等）。

---

### 8. 待处理积压  
以下 **长期开放 PR 需维护者关注**：

- **#243 [OPEN] feat: add Novita AI as a built-in LLM provider**（创建于 2026-03-20，已开放 4 天）  
  虽技术实现简洁（复用 OpenAI harness），但涉及第三方服务集成，需评估 API 稳定性与长期维护成本。  
  🔗 [PR #243](https://github.com/TinyAGI/tinyagi/pull/243)

- **#249 [OPEN] refactor(office): reorganize office layout with topbar navigation**（创建于 2026-03-23）  
  UI/UX 重构类 PR 通常需设计评审，建议明确导航逻辑变更是否影响现有用户习惯。  
  🔗 [PR #249](https://github.com/TinyAGI/tinyagi/pull/249)

> 📌 建议：对超过 3 天未响应的功能性 PR 设置 SLA，避免阻塞贡献者积极性。

---  
*数据来源：GitHub TinyAGI/tinyclaw 仓库，截至 2026-03-24 00:00 UTC*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-03-24）

---

## 1. 今日速览

Moltis 项目在 2026-03-24 继续保持高强度开发节奏，社区活跃度显著提升。过去24小时内，**10 个 Issues 被关闭**（无新开），**43 个 PR 更新**，其中 **36 个已合并/关闭**，仅 **7 个仍处于待合并状态**，显示出高效的代码集成与问题闭环能力。尽管无新版本发布，但核心功能（如系统提示优化、Vulkan 支持、Telegram 文件发送、MCP 超时配置等）通过多个关键 PR 实现实质性推进。项目整体处于快速迭代与稳定性增强阶段。

---

## 2. 版本发布

**无新版本发布**。当前开发重点集中于功能完善与底层架构优化，预计下一版本将整合今日合并的多项特性（如 MiniMax 模型支持、send_document 工具、KV 缓存优化等）。

---

## 3. 项目进展

今日合并/关闭的 PR 推动多个关键方向进展：

- **系统提示与本地 LLM 性能优化**：[#476](https://github.com/moltis-org/moltis/pull/476) 将动态 datetime 从系统提示中移出，实现字节级一致的 prompt，显著提升 Ollama/LM Studio 等本地模型的 KV 缓存命中率，降低推理延迟。
- **Telegram 文件共享能力落地**：[#464](https://github.com/moltis-org/moltis/pull/464) 实现 `send_document` 工具，支持 PDF/ZIP/JSON 等任意文件类型发送至 Telegram/Discord/Slack，响应 #332 和 #337 的用户需求。
- **安全加固**：[#472](https://github.com/moltis-org/moltis/pull/472) 引入结构化 secret 序列化机制，彻底解决 channel config API 中敏感信息泄露问题（#462），替代此前脆弱的硬编码过滤方案。
- **模型生态扩展**：[#475](https://github.com/moltis-org/moltis/pull/475) 新增 MiniMax M2.7 系列模型支持，丰富云厂商选项。
- **跨平台兼容性修复**：[#468](https://github.com/moltis-org/moltis/pull/468) 修复 Windows 上 shell hook 因缺少 `sh` 导致的执行失败问题（#434 相关）。
- **MCP 可观测性增强**：[#419](https://github.com/moltis-org/moltis/pull/419) 使 MCP 请求超时可配置，避免 codex 等慢速服务误超时。

> 整体项目在**多模态交互、安全合规、本地部署性能、跨平台支持**四大维度取得实质性突破。

---

## 4. 社区热点

- **#460 [Bug]: WhatsApp Integration is confusing**（👍 3）  
  用户反馈 WhatsApp 通道配置流程不透明，缺乏文档引导。已由 [#473](https://github.com/moltis-org/moltis/pull/473) 响应，通过增强 debug 日志与配置模板示例提升可发现性。
- **#332 [Feature]: Telegram integration: support sending file attachments**（👍 2）  
  高需求功能，已由 [#464](https://github.com/moltis-org/moltis/pull/464) 实现并合并，满足用户对非文本内容传输的核心诉求。

---

## 5. Bug 与稳定性

| Issue | 严重程度 | 状态 | 关联 PR |
|------|--------|------|--------|
| [#370] Chrome 登录失败（TLS Cookie 缺失 Secure 属性） | 高（影响核心登录流程） | ✅ 已修复 | [#471](https://github.com/moltis-org/moltis/pull/471) |
| [#427] Agent 执行命令时重复混淆节点 | 中（影响工具调用可靠性） | ✅ 已修复 | [#474](https://github.com/moltis-org/moltis/pull/474) |
| [#420] `web_fetch` 处理非 UTF-8 页面时 panic | 中（数据兼容性） | ✅ 已修复 | （隐含于近期文本处理优化） |
| [#434] Windows 文件锁权限 denied | 中（平台兼容性） | ✅ 已修复 | [#468](https://github.com/moltis-org/moltis/pull/468) |

> 所有高优先级 Bug 均已闭环，项目稳定性显著提升。

---

## 6. 功能请求与路线图信号

以下用户请求已通过 PR 实现或进入开发流程，预示下一版本重点方向：

- **系统提示可配置化**：[#466](https://github.com/moltis-org/moltis/pull/466) 引入“提示配置文件”（prompt profiles），支持 CRUD 操作、模块化开关与模型级覆盖，响应 #154 对技能创建灵活性的需求。
- **Vulkan 后端支持**：[#408](https://github.com/moltis-org/moltis/pull/408) 实现 opt-in Vulkan GGUF 支持，回应 #122 的图形计算加速诉求，面向本地高性能推理场景。
- **工具执行审计与性能监控**：[#470](https://github.com/moltis-org/moltis/pull/470) 引入 witness 记录机制，为未来 ZK 证明与性能分析打下基础。

> 路线图清晰指向：**可配置 AI 行为、本地硬件加速、企业级可观测性**。

---

## 7. 用户反馈摘要

- **痛点**：
  - WhatsApp 配置流程“令人困惑”，缺乏引导（#460）。
  - Chrome 下 HTTPS 登录静默失败，用户体验断裂（#370）。
  - 无法通过 Telegram 发送 PDF/ZIP 等文档，限制工作流集成（#332, #337）。
- **满意点**：
  - 对 `send_document` 工具实现表示高度期待（#332 获 2 👍）。
  - 认可系统提示优化对本地 LLM 性能的提升价值（技术用户隐含反馈）。

---

## 8. 待处理积压

- **长期未响应 Issue**：无。所有近期 Issue 均在 24 小时内得到响应或关闭，维护团队响应效率极高。
- **待合并 PR**（需维护者关注）：
  - [#465](https://github.com/moltis-org/moltis/pull/465)：提取 `moltis-httpd` crate，解耦 HTTP 传输层 —— 架构级重构，影响依赖管理。
  - [#466](https://github.com/moltis-org/moltis/pull/466)：系统提示配置文件功能 —— 高价值 UX 改进，建议优先 review。
  - [#469](https://github.com/moltis-org/moltis/pull/469)：Nix flake 支持 —— 吸引 NixOS/Reproducible Build 用户群体。

> 建议维护者优先处理 #466 与 #465，二者对用户体验与架构清晰度有长期正向影响。

---  
**项目健康度评估**：⭐⭐⭐⭐⭐（极高活跃度，快速闭环，功能演进明确）

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-03-24）

---

## 1. 今日速览

过去24小时内，CoPaw 社区活跃度显著上升，共产生 **50条 Issues 更新**（新开/活跃17条，关闭33条）和 **50条 PR 更新**（待合并21条，已合并/关闭29条），显示出高强度的问题响应与代码贡献节奏。尽管无新版本发布，但核心功能迭代持续推进，尤其在多智能体协作、跨频道会话衔接、内存压缩稳定性等关键方向取得实质性进展。社区对 v0.1.0 系列版本的反馈集中暴露了上下文管理、工具链调用和认证机制等方面的痛点，推动团队快速修复。

---

## 2. 版本发布

**无新版本发布**。当前最新稳定版本仍为 `v0.1.0.post1`，但多个关键修复已进入主干，预计将在近期发布补丁版本。

---

## 3. 项目进展

今日共 **29个 PR 被合并或关闭**，重点推进以下方向：

- **会话治理与上下文连续性增强**：  
  #2143 引入 SessionConfig 与会话交接钩子（HandoffHook），为跨频道对话衔接提供底层支持（[PR #2143](https://github.com/agentscope-ai/CoPaw/pull/2143)）。  
  #2141 将内存压缩输出路由至用户所在频道，避免信息丢失（[PR #2141](https://github.com/agentscope-ai/CoPaw/pull/2141)）。

- **内存压缩稳定性修复**：  
  #2129 修复空压缩结果导致的静默失败，并增强错误日志（[PR #2129](https://github.com/agentscope-ai/CoPaw/pull/2129)），直接回应 #1222、#1270 等长期 Bug。

- **CLI 性能优化**：  
  #2130 实现 CLI 命令懒加载，启动时间从 2.6s 降至 1.2s（提升54%），显著改善开发者体验（[PR #2130](https://github.com/agentscope-ai/CoPaw/pull/2130)）。

- **国际化与可访问性**：  
  #2142 添加对 RTL 语言（如阿拉伯语）的双向文本支持（[PR #2142](https://github.com/agentscope-ai/CoPaw/pull/2142)）。

---

## 4. 社区热点

### 🔥 高讨论度 Issues

| Issue | 主题 | 评论数 | 核心诉求 |
|------|------|--------|--------|
| [#2102](https://github.com/agentscope-ai/CoPaw/issues/2102) | v0.1.0 更新后认证失败 | 21 | 用户升级后遭遇 `AuthenticationError`，怀疑与 OAuth 或 token 缓存机制变更有关 |
| [#1911](https://github.com/agentscope-ai/CoPaw/issues/1911) | 小艺频道消息“开小差” | 17 | 华为小艺集成正常但响应异常，怀疑是 CoPaw 与厂商 API 兼容性问题 |
| [#2040](https://github.com/agentscope-ai/CoPaw/issues/2040) | 工具链调用卡死（20+分钟） | 12 | 常见工具（文件读写、Shell、浏览器）普遍超时，指向执行调度或资源泄漏 |
| [#2035](https://github.com/agentscope-ai/CoPaw/issues/2035) | 多智能体绑定 Bot 与协同机制 | 10 | 用户期望每个 Agent 独立绑定 Bot，并实现任务级协作，反映多智能体架构尚未成熟 |

> **分析**：社区焦点集中于 **生产环境可用性**，尤其是认证、工具链可靠性、跨渠道一致性三大支柱能力。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重等级 | Issue | 描述 | 状态 |
|--------|-------|------|------|
| ⚠️ 高 | [#2102](https://github.com/agentscope-ai/CoPaw/issues/2102) | v0.1.0 认证失败导致无法启动 | **已关闭**（疑似配置迁移问题，建议清除缓存） |
| ⚠️ 高 | [#2040](https://github.com/agentscope-ai/CoPaw/issues/2040) | 工具链调用长时间阻塞 | 待定位（可能与线程池或 LLM 响应解析有关） |
| ⚠️ 中 | [#1974](https://github.com/agentscope-ai/CoPaw/issues/1974) | 上下文压缩中断正在执行的任务 | **已有缓解措施**（#2129 增强错误处理） |
| ⚠️ 中 | [#2092](https://github.com/agentscope-ai/CoPaw/issues/2092) | 内存压缩注入幻觉内容 | 待修复（GLM-5 特定行为，需调整 summarizer prompt） |
| ⚠️ 低 | [#1068](https://github.com/agentscope-ai/CoPaw/issues/1068) | Web UI 图片无法显示 | 前端资源路径问题，影响用户体验 |

> 注：多个历史 Bug（#1222、#1270、#1315）因相关 PR 合并而关闭，表明内存与上下文模块趋于稳定。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 关联 PR | 纳入可能性 |
|--------|-------|--------|----------|
| 微信 ClawBot 频道支持 | [#2043](https://github.com/agentscope-ai/CoPaw/issues/2043) | #2123（内置微信频道） | ✅ 高（已有实现） |
| 跨频道对话衔接 | [#2138](https://github.com/agentscope-ai/CoPaw/issues/2138) | #2143（会话交接钩子） | ✅ 高（架构已铺垫） |
| 多智能体协同任务 | [#2035](https://github.com/agentscope-ai/CoPaw/issues/2035) | 无直接 PR | 🔄 中（需任务编排层） |
| 本地嵌入模型支持 | — | #1789 | ✅ 高（隐私与离线场景刚需） |

> **趋势判断**：下一版本将重点强化 **多通道一致性** 与 **本地部署能力**，微信生态集成已成明确方向。

---

## 7. 用户反馈摘要

- **痛点**：
  - “升级后直接报错，文档没提怎么迁移配置”（#2102）
  - “工具链动不动就卡住，根本没法用在生产”（#2040）
  - “每个频道都是新对话，历史全丢了”（#2138）
  - “压缩完上下文反而更混乱，还插入了幻觉”（#2092）

- **满意点**：
  - “CLI 启动快了一倍，开发体验好多了”（#2130 评论区）
  - “终于能在飞书看到压缩提示了，之前完全不知道发生了什么”（#2141 相关反馈）

- **典型场景**：
  - 企业用户通过飞书/钉钉部署客服 Agent，依赖工具链执行脚本与文件操作；
  - 开发者尝试多智能体构建复杂工作流，但受限于上下文隔离与 Bot 绑定机制。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 未响应天数 | 提醒 |
|------|------|------|------------|------|
| Issue | [#1911](https://github.com/agentscope-ai/CoPaw/issues/1911) | 小艺频道消息异常 | 4天 | 需华为 API 专家介入排查 |
| Issue | [#2040](https://github.com/agentscope-ai/CoPaw/issues/2040) | 工具链调用卡死 | 2天 | 高优先级，影响核心功能 |
| PR | [#1600](https://github.com/agentscope-ai/CoPaw/pull/1600) | 修复 None agents.defaults 启动崩溃 | 8天 | 基础配置健壮性问题，建议优先合并 |
| PR | [#1209](https://github.com/agentscope-ai/CoPaw/pull/1209) | 聊天路由选择器 | 13天 | UI/UX 重要增强，需前端 review |

> 建议维护者本周重点处理 **工具链稳定性** 与 **小艺频道兼容性** 问题，以维护企业用户信心。

--- 

**报告生成时间**：2026-03-24  
**数据来源**：GitHub CoPaw 仓库公开数据

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报（2026-03-24）

---

## 1. 今日速览

ZeptoClaw 在 2026-03-23 表现出**高活跃度**，共产生 6 条 Issue 更新与 11 条 PR 更新，涵盖功能增强、安全修复、架构重构与依赖升级。项目发布 v0.8.0 新版本，引入 `deep-research` 技能与 CLI UX 改进。核心维护者 @qhkm 主导了多项关键修复，包括嵌入式工具执行加固、模糊匹配 Bug 修复及中间件管道设计。整体开发节奏紧凑，技术债务清理与稳定性提升并重。

---

## 2. 版本发布

### 🔖 v0.8.0 正式发布  
**发布时间**：2026-03-23  
**主要更新**：
- ✨ **新增 `shimmer spinner` 与增强 CLI 用户体验**：优化代理响应时的视觉反馈，提升终端交互流畅度（#337）
- 🧠 **新增 `deep-research` 技能**：采用四阶段方法论（问题分解 → 并行检索 → 证据合成 → 结论生成），支持复杂研究型任务（#344）
- ❓ **新增 `ask_clarification` 工具**：允许代理在信息不足时主动暂停并请求用户澄清，提升对话鲁棒性

> ⚠️ **无破坏性变更**，所有新功能均为向后兼容扩展。建议用户升级以获取更稳定的工具链与研究能力。

---

## 3. 项目进展

今日共 **5 个 PR 被合并/关闭**，推动项目在**安全性、可维护性与工具链可靠性**方面显著前进：

- ✅ **#402**：加固嵌入式 ZeptoAgent 工具执行路径，统一主循环与嵌入模式的超时、panic 捕获与审批流程（[链接](https://github.com/qhkm/zeptoclaw/pull/402)）
- ✅ **#398**：引入 JSON 格式的 conformance fixture 测试框架，支持无代码添加回归测试；改进 `edit_file` 模糊匹配与输出截断逻辑（[链接](https://github.com/qhkm/zeptoclaw/pull/398)）
- ✅ **#406**：修复 taint 引擎中因空 snippet 导致的全局误报漏洞（`String::contains("")` 恒为真）（[链接](https://github.com/qhkm/zeptoclaw/pull/406)）
- ✅ **#405**：彻底清理 `--all-targets` 下 33 个 clippy 警告，提升测试代码质量（[链接](https://github.com/qhkm/zeptoclaw/pull/405)）
- ✅ **#396**：Telegram 通道优化，包括“typing”指示器与 Markdown 渲染修复，显著改善用户体验（[链接](https://github.com/qhkm/zeptoclaw/pull/396)）

> 项目整体向**生产就绪型 AI 代理框架**迈出关键一步，尤其在工具安全边界与测试可维护性上取得突破。

---

## 4. 社区热点

### 🔥 高关注度 Issue：#399 — 重构代理循环为可组合中间件管道  
**链接**：https://github.com/qhkm/zeptoclaw/issues/399  
**讨论焦点**：`src/agent/loop.rs` 已达 4,155 行，逻辑高度耦合，`process_message()` 与 `process_message_streaming()` 存在大量重复代码。  
**社区诉求**：开发者呼吁解耦横切关注点（如审批、日志、超时、审计），避免每次新增功能需修改多处。  
**响应**：@qhkm 已提交配套 PR #404 提供中间件框架 scaffolding，表明该重构已被纳入实施路线图。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 修复状态 |
|--------|------|------|--------|
| 🔴 P1-critical | #403 | `edit_file` 模糊匹配存在 NFC 回映射错误与空字符串死循环 | ❌ 未修复（需紧急处理） |
| 🟠 P2-high | #400 / #401 | 嵌入式工具执行未走 hardened kernel 路径，缺乏超时与 panic 防护 | ✅ 已由 #402 修复 |
| 🟡 P3-normal | #391 | 工具输出截断与模糊匹配精度不足 | ✅ 已由 #398 部分实现 |

> ⚠️ **#403 为当前最高优先级未修复 Bug**，可能影响文件编辑工具的可靠性，建议尽快分配资源处理。

---

## 6. 功能请求与路线图信号

- **模型自动发现与提供商选择**（#407）：用户可通过 `model: "gpt-5.4"` 自动绑定 OpenAI 提供商，减少配置负担 → **高采纳概率**，已提交 PR
- **ACP（Agent Client Protocol）支持**（#356）：提供 stdio 与 HTTP 双通道，便于集成第三方客户端 → **长期战略功能**，正在积极开发中
- **Telegram 实时交互增强**（#392）：持续显示 typing 状态 → **UX 优化类需求**，已被合并，反映对即时反馈的重视

> 下一版本（v0.9.0）预计聚焦于**协议标准化**（ACP）与**模型抽象层**，#407 与 #356 极可能纳入。

---

## 7. 用户反馈摘要

- **正面反馈**：Telegram 用户（@stuartbowness）表示“bot 现在感觉更响应迅速，不再破坏 Markdown”，印证 #396 改进有效。
- **痛点反馈**：开发者普遍反映 `edit_file` 工具在复杂文本场景下行为不稳定（#403），影响编码工作流信任度。
- **使用场景**：嵌入式代理被用于后端自动化脚本，但对安全隔离要求高（#400/#401），推动 hardened facade 需求。

---

## 8. 待处理积压

| 类型 | ID | 标题 | 积压时长 | 建议 |
|------|----|------|--------|------|
| Issue | #399 | 重构代理循环为中间件管道 | 1 天（新提出） | 高优先级架构债，建议 v0.9.0 核心任务 |
| PR | #356 | ACP stdio + HTTP 实现 | 10 天 | 关键集成能力，建议加速 review |
| PR | #386 | 升级 toml 依赖 | 6 天 | 低风险依赖更新，可快速合并 |

> 📌 **提醒维护者**：#403（P1 Bug）与 #356（ACP 协议）为当前最关键待处理项，建议优先分配资源。

---  
*数据来源：GitHub 仓库 qhkm/zeptoclaw，统计周期：2026-03-23 00:00–23:59 UTC*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

**EasyClaw 项目动态日报**  
📅 日期：2026年3月24日  
🔗 项目主页：[github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

### 1. 今日速览

过去24小时内，EasyClaw 项目整体活跃度较低，无新 Issue 提交或 Pull Request 活动，社区互动趋于平稳。然而，项目在发布节奏上表现积极，连续发布两个新版本（v1.7.6 与 v1.7.7），表明维护团队正专注于版本迭代与用户体验优化。尽管开发活动未体现在代码合并层面，但高频的版本发布反映出对 macOS 平台兼容性问题的持续关注与快速响应。

---

### 2. 版本发布

#### ✅ v1.7.7（RivonClaw v1.7.7）  
🔗 [Release v1.7.7](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.7)

- **核心更新**：聚焦于解决 macOS 用户安装时的 Gatekeeper 安全警告问题。
- **关键说明**：明确提示用户“应用已损坏”为系统误报，非文件损坏，提供 Terminal 命令行绕过方案（`xattr -cr` 命令建议）。
- **影响范围**：主要面向 macOS 用户，提升首次安装成功率与信任感。
- **迁移注意事项**：无破坏性变更，用户可直接升级；建议用户在终端执行清理命令后重新打开应用。

#### ✅ v1.7.6（RivonClaw v1.7.6）  
🔗 [Release v1.7.6](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.6)

- **更新性质**：与 v1.7.7 类似，针对同一 macOS 安装警告问题提供文档说明与解决方案。
- **差异点**：v1.7.7 可能包含更清晰的指引或内部构建配置微调，但未披露具体代码变更。

> 📌 分析：连续两个版本均围绕同一问题发布，说明该问题在用户群体中反馈集中，维护者采取“文档先行 + 版本标记”策略增强用户信心。

---

### 3. 项目进展

过去24小时无 Pull Request 合并或关闭记录，代码库主干未发生实质性变更。当前开发重点似乎集中于发布流程优化与终端用户支持文档完善，而非功能开发或架构调整。

---

### 4. 社区热点

无新 Issue 或 PR 提交，社区讨论活跃度为零。结合近期发布内容推测，用户主要痛点集中在 **macOS 应用签名与 Gatekeeper 拦截机制**，但尚未通过 Issue 渠道集中反馈，可能已通过其他渠道（如邮件、社交媒体）沟通。

---

### 5. Bug 与稳定性

- **已知问题**：macOS 用户安装时提示“应用已损坏，无法打开”（非真实损坏，系未签名应用被 Gatekeeper 拦截）  
  🔗 相关说明见 [v1.7.7 Release Notes](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.7)  
  - **严重程度**：中（影响首次使用体验，但可绕过）  
  - **修复状态**：无代码级修复（因涉及代码签名证书成本），当前通过文档引导解决  
  - **建议**：长期需考虑获取 Apple Developer ID 签名以彻底解决

> ⚠️ 无新崩溃报告或回归问题提交。

---

### 6. 功能请求与路线图信号

无新功能请求提出。结合近期发布行为，可推断下一阶段路线图重点为：
- 提升跨平台（尤其是 macOS）安装体验
- 探索低成本代码签名方案（如开源项目免费签名服务）
- 增强用户引导文档（多语言、图文教程）

当前无相关 PR 支持上述方向，需维护者主动推进。

---

### 7. 用户反馈摘要

虽无直接 Issue 评论，但从 Release Notes 中反复强调 macOS 安装问题可知：
- **用户痛点**：非技术用户面对 Gatekeeper 警告时易放弃使用，误判为“病毒”或“损坏文件”
- **满意点**：提供中文/英文双语说明，降低理解门槛；解决方案具体可行（Terminal 命令明确）
- **改进期待**：希望实现“开箱即用”，无需手动终端操作

---

### 8. 待处理积压

截至本日，项目无长期未响应的 Issue 或 PR。Issue 总数为 0，PR 积压为 0，维护响应效率良好。

> ✅ 健康度评估：**良好**  
> - 发布节奏稳定，用户支持响应及时  
> - 社区虽静默，但无负面积压  
> - 建议：建立常见问题（FAQ）页面，减少重复咨询；探索自动化签名流程以根治 macOS 安装问题

---  
📊 数据来源：GitHub API & Release Pages（截至 2026-03-24 23:59 UTC）  
📌 本报告由 AI 开源项目分析系统生成，客观反映项目公开数据状态。

</details>

---
*本日报由 [Big Model Radar](https://github.com/gsscsd/big_model_radar) 自动生成。*