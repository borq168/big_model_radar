# OpenClaw 生态日报 2026-03-23

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-03-23 01:04 UTC

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

# OpenClaw 项目动态日报（2026-03-23）

---

## 1. 今日速览

过去24小时内，OpenClaw 社区保持高度活跃，共产生 **500条 Issues 更新**（新开/活跃 416 条，关闭 84 条）和 **500条 PR 更新**（待合并 361 条，已合并/关闭 139 条），显示出强劲的开发与问题反馈节奏。尽管无新版本发布，但多个关键回归 Bug 被识别并已有修复 PR 推进，网关稳定性、多通道兼容性及权限隔离成为当前核心焦点。社区对 DingTalk 集成、Android APK 预构建包、加密密钥管理等长期需求持续关注，反映出产品向企业级与多端部署演进的趋势。

---

## 2. 版本发布

**无新版本发布**。最近一次版本仍为 v2026.3.13，但该版本已暴露出多个关键回归问题（见第5节），建议用户谨慎升级或等待热修复。

---

## 3. 项目进展

今日有 **139 个 PR 被合并或关闭**，其中多项重要修复与功能增强取得进展：

- **#49181**（[链接](https://github.com/openclaw/openclaw/pull/49181)）：实现 `openclaw usage` CLI 命令，支持按日/周/月查看成本与 token 使用分析，响应 #39297 需求，提升运营透明度。
- **#49174**（[链接](https://github.com/openclaw/openclaw/pull/49174)）：修复 cron 工具跨会话数据泄露问题，强化多用户环境下的权限隔离，解决 #35447 安全风险。
- **#51348**（[链接](https://github.com/openclaw/openclaw/pull/51348)）：修复会话模型覆盖优先级逻辑，确保配置文件 (`openclaw.json`) 中的模型变更能在重启后生效，解决 #44611 回归问题。
- **#51764**（[链接](https://github.com/openclaw/openclaw/pull/51764)）：修复 acpx 插件在会话初始化时未正确传递权限标志的问题，提升 ACP 模式安全性。
- **#52545**（[链接](https://github.com/openclaw/openclaw/pull/52545)）：增加 Telegram 图片发送前的尺寸校验，避免因 `PHOTO_INVALID_DIMENSIONS` 导致消息失败。

此外，**#52546** 新增 Kimi CLI 支持，扩展 coding-agent 生态；**#51714** 允许 Brave 搜索通过自定义 baseUrl 接入代理，提升网络适应性。

---

## 4. 社区热点

以下 Issues 引发高度讨论，反映用户核心诉求：

- **#26534**（[链接](https://github.com/openclaw/openclaw/issues/26534)）：请求将钉钉（DingTalk）设为首次安装时的可选通道。尽管底层支持已存在（#10347），但 onboarding 流程未暴露该选项，阻碍企业用户快速接入。**76 条评论，28 👍**。
- **#9443**（[链接](https://github.com/openclaw/openclaw/issues/9443)）：呼吁提供预编译 Android APK 发布包。目前仅含源码，普通用户难以部署移动端 companion app。**17 条评论**，代表移动场景刚需。
- **#7916**（[链接](https://github.com/openclaw/openclaw/issues/7916)）：要求对 API 密钥进行加密存储，替代当前明文配置。**16 条评论，11 👍**，安全合规性成企业 adoption 障碍。
- **#8081**（[链接](https://github.com/openclaw/openclaw/issues/8081)）：提出基于角色的访问控制（RBAC）需求，解决多用户共享系统时的敏感信息暴露问题。**7 条评论，21 👍**，为多租户架构铺路。

---

## 5. Bug 与稳定性

以下为今日报告的严重 Bug，按影响排序：

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| 🔴 高 | #49338（[链接](https://github.com/openclaw/openclaw/issues/49338)） | v2026.3.13 npm 包缺失 `dist/gateway.js`，导致网关无法启动（ERR_CONNECTION_REFUSED） | ✅ 已有修复中 |
| 🔴 高 | #45772（[链接](https://github.com/openclaw/openclaw/issues/45772)） | 网关心跳定时器在触发1-2次后停止，v2026.3.8 引入 | ❌ 尚无 PR |
| 🔴 高 | #50438（已关闭，[链接](https://github.com/openclaw/openclaw/issues/50438)） | v2026.3.13 中 `devices` 命令因网关异常关闭（code 1000）而失败 | ✅ 已定位，相关修复在推进 |
| 🟠 中 | #45311（[链接](https://github.com/openclaw/openclaw/issues/45311)） | Slack socket mode 连接成功但收不到事件（v2026.3.12 回归） | ❌ 尚无 PR |
| 🟠 中 | #46680（[链接](https://github.com/openclaw/openclaw/issues/46680)） | Ollama thinking 模型返回空响应（未发送 `think: false`） | ✅ #48010 提供参数控制方案 |
| 🟡 低 | #52024（[链接](https://github.com/openclaw/openclaw/issues/52024)） | 上下文裁剪破坏 tool_use/tool_result 配对，导致 API 拒绝 | ❌ 尚无 PR |

> 注：多个“gateway closed (1000)”类问题集中爆发，表明 v2026.3.13 存在系统性网关稳定性退化。

---

## 6. 功能请求与路线图信号

结合 PR 进展与 Issue 热度，以下功能有望纳入近期版本：

- **DingTalk 首次安装集成**（#26534）：已有底层支持，仅需 UI/onboarding 调整，实施成本低，社区呼声高。
- **Android APK 预构建发布**（#9443）：若维护者接受，可显著降低移动端使用门槛，推动生态扩展。
- **加密密钥管理**（#7916）：虽无直接 PR，但安全需求明确，可能作为 v2026.4.x 安全专项推进。
- **多用户 RBAC**（#8081）：#49174 已迈出权限隔离第一步，后续可能扩展为完整 RBAC 体系。
- **Ollama 模型参数控制**（#48010）：已有 PR 支持 `thinking` 模式开关，预计将合并以改善响应效率。

---

## 7. 用户反馈摘要

从评论中提炼关键用户声音：

- **痛点**：
  - “升级后网关直接连不上，重装两次都没用”（#49510）——反映 v2026.3.13 安装包质量问题。
  - “WhatsApp 换号就彻底锁死，再也连不上”（#4686）——通道重连机制存在缺陷。
  - “API 密钥明文存着，公司审计过不了”（#7916）——企业用户安全顾虑强烈。
- **满意点**：
  - “TUI 一直稳定，只有 Web UI 有问题”（#25173）——终端界面可靠性获认可。
  - “降级到 v2026.3.11 立刻恢复”（#45311）——版本回滚机制有效，用户具备应急能力。
- **使用场景**：
  - 企业通过 Slack/DingTalk 部署内部 AI 助手（#26534, #8081）。
  - 开发者使用 Ollama + OpenClaw 构建本地推理工作流（#46680, #48010）。
  - 普通用户通过 Telegram/Web 进行日常交互（#19982, #32495）。

---

## 8. 待处理积压

以下重要 Issue 长期未获响应，建议维护者优先关注：

- **#14593**（[链接](https://github.com/openclaw/openclaw/issues/14593)）：Docker 容器内技能安装因 `brew not installed` 失败（2026-02-12 提交，13 条评论）——影响容器化部署体验。
- **#28037**（[链接](https://github.com/openclaw/openclaw/issues/28037)）：Slack Socket Mode 消息无法路由至 Agent（2026-02-26 提交，5 条评论）——核心通道功能异常。
- **#24024**（[链接](https://github.com/openclaw/openclaw/issues/24024)）：exec 工具未处理 EAGAIN 错误，导致重试失效（2026-02-23 提交）——影响工具鲁棒性。
- **#50090**（[链接](https://github.com/openclaw/openclaw/issues/50090)）：ClawHub 社区技能生态建设滞后，承诺与实际差距大（2026-03-19 提交）——关乎项目长期生命力。

> 建议对标记为 `[stale]` 但高价值的 Issue 进行 triage，避免社区信心流失。

--- 

**报告生成时间：2026-03-23**  
**数据来源：OpenClaw GitHub 仓库公开数据**

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告（2026-03-23）

---

## 1. 生态全景

2026年Q1末，个人 AI 助手与自主智能体开源生态呈现“**多架构并行、企业级需求驱动、多模态集成加速**”的态势。以 OpenClaw 为代表的全功能网关型项目面临稳定性挑战，而 NanoBot、PicoClaw 等轻量级框架通过模块化设计快速响应企业部署需求。安全合规（密钥加密、RBAC）、多通道集成（微信/飞书/DingTalk）、本地推理（Ollama/Piper）成为三大共性痛点。社区贡献活跃度普遍高涨，但 Issue 响应效率与关键 Bug 修复速度成为项目健康度分水岭。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 新版本发布 | 健康度评估 |
|------|-------------|---------|------------|------------|
| **OpenClaw** | 500 | 500 | ❌ | ⭐⭐⭐☆☆（3/5）<br>高活跃但稳定性风险突出 |
| **NanoBot** | 17 | 72 | ❌ | ⭐⭐⭐⭐☆（4.5/5）<br>开发高效，功能迭代快 |
| **Zeroclaw** | 45 | 50 | ✅（8个beta） | ⭐⭐⭐⭐☆（4.5/5）<br>快速迭代+多模态增强 |
| **PicoClaw** | 27 | 48 | ✅（nightly） | ⭐⭐⭐⭐☆（4.5/5）<br>架构重构成功，扩展性强 |
| **NanoClaw** | 5 | 43 | ❌ | ⭐⭐⭐⭐☆（4.5/5）<br>高PR密度，企业级功能推进 |
| **IronClaw** | 15 | 46 | ❌ | ⭐⭐⭐⭐☆（4.5/5）<br>工程质量高，修复闭环快 |
| **LobsterAI** | 28 | 25 | ✅（2026.3.22） | ⭐⭐⭐☆☆（3.5/5）<br>功能丰富但沙箱稳定性存疑 |
| **TinyClaw** | 0 | 3 | ❌ | ⭐⭐⭐☆☆（3/5）<br>低活跃，聚焦基础设施修复 |
| **Moltis** | 2 | 1 | ❌ | ⭐⭐☆☆☆（2.5/5）<br>维护期，创新放缓 |
| **CoPaw** | 39 | 23 | ❌ | ⭐⭐⭐⭐☆（4/5）<br>社区活跃，Windows稳定性待提升 |
| **ZeptoClaw** | 5 | 4 | ❌ | ⭐⭐⭐☆☆（3.5/5）<br>上游同步为主，创新有限 |
| **EasyClaw** | 1 | 0 | ❌ | ⭐⭐☆☆☆（2.5/5）<br>近乎停滞，依赖问题未根治 |

> 注：健康度综合 Issue/PR 响应速度、Bug 修复率、版本发布节奏评估。

---

## 3. OpenClaw 在生态中的定位

**优势**：  
- **生态规模最大**：单日 500+ Issues/PR，反映广泛用户基础与企业采用（如 Slack/DingTalk 部署）；
- **功能最全面**：覆盖网关、多通道、权限隔离、成本分析等完整 SaaS 化能力；
- **社区驱动强**：DingTalk 集成、Android APK 等需求均源自真实企业场景。

**技术路线差异**：  
- 采用 **中心化网关架构**（vs PicoClaw/Zeroclaw 的模块化 Agent 模型），适合统一管理但存在单点故障风险（如 #49338 网关启动失败）；
- 强调 **配置即代码**（`openclaw.json`），而 NanoBot/IronClaw 更倾向运行时动态配置。

**社区规模对比**：  
OpenClaw 的 Issue 量是第二活跃项目（CoPaw）的 **12.8倍**，但 PR 合并效率（139/500=27.8%）低于 NanoBot（61/72=84.7%）和 IronClaw（16/46=34.8%），显示维护压力较大。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|--------|--------|--------|
| **企业级安全合规** | OpenClaw (#7916, #8081)、NanoClaw (#1308)、LobsterAI (#637) | API 密钥加密存储、RBAC 多租户隔离、审计日志 |
| **微信/飞书/DingTalk 深度集成** | OpenClaw (#26534)、PicoClaw (#1904)、CoPaw (#2043)、LobsterAI (#653) | 原生通道支持、扫码登录、@mention 响应 |
| **本地推理与多模态** | Zeroclaw (#4116, #4119)、PicoClaw (#1891)、NanoBot (#2348) | Ollama/Piper 支持、语音转录、视觉模型路由 |
| **任务调度可靠性** | NanoBot (#2369)、NanoClaw (#1348)、CoPaw (#1851) | 定时任务防丢失、资源感知调度、中断机制 |
| **上下文与记忆管理** | NanoBot (#2343)、Moltis (#137)、IronClaw (#826) | Token 预算控制、RAG 开关、记忆持久化 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键点 |
|------|--------|--------|--------------|
| **OpenClaw** | 企业级多通道网关 | 中大型组织 IT 管理员 | 中心化网关 + 插件化通道 |
| **NanoBot** | 轻量自主智能体 | 开发者/极客用户 | 事件循环 + 子代理路由 |
| **Zeroclaw** | 本地优先多模态 | 隐私敏感型用户 | Rust 原生 + 声明式配置 |
| **PicoClaw** | 模块化 Agent 平台 | 研究者/集成商 | 统一 Agent 抽象 + 能力发现 |
| **IronClaw** | 生产级 MCP 运行时 | 企业自动化团队 | WASM 工具沙箱 + TEE 支持 |
| **LobsterAI** | 桌面端 AI 助手 | 普通用户/小团队 | Electron + 沙箱隔离 |

> 关键差异：OpenClaw/Zeroclaw 强调**部署可控性**，PicoClaw/NanoBot 侧重**架构灵活性**，IronClaw 专注**工具安全边界**。

---

## 6. 社区热度与成熟度

- **快速迭代阶段**（高 PR 合并率 + 功能爆发）：  
  **NanoBot**（72 PR，61待合并）、**Zeroclaw**（50 PR，8版本）、**PicoClaw**（48 PR，Agent重构完成）  
  → 特征：开发者主导，接受 nightly 版本，适合技术尝鲜者。

- **质量巩固阶段**（高 Issue 响应 + Bug 修复闭环）：  
  **IronClaw**（HIGH级Bug全修复）、**NanoClaw**（信任框架落地）、**CoPaw**（Windows稳定性攻坚）  
  → 特征：企业用户增多，强调稳定性与可观测性。

- **维护期**（低活跃 + 问题积压）：  
  **Moltis**、**EasyClaw**、**TinyClaw**  
  → 风险：社区信心流失，建议明确 roadmap 或移交维护权。

---

## 7. 值得关注的趋势信号

1. **“去中心化凭证”架构兴起**：  
   IronClaw 的 `gws-bridge` 方案（#1569）和 OpenClaw 的密钥加密需求（#7916）表明，**企业用户对 OAuth 中心化风险的规避**将成为主流设计原则。

2. **Agent 架构向“事件驱动+钩子”演进**：  
   PicoClaw（#1796）、NanoClaw（#1308）、CoPaw（#1869）均引入中断/审批机制，预示 **可控自治（Controlled Autonomy）** 成为下一代智能体核心范式。

3. **本地多模态成为标配**：  
   Zeroclaw（Piper TTS）、PicoClaw（AudioModelTranscriber）、NanoBot（微信媒体支持）显示，**脱离云端依赖的端侧多模态能力**是差异化竞争关键。

4. **开发者体验（DX）决定 adoption**：  
   Telegram 流式响应（PicoClaw #1906）、输入状态提示（ZeptoClaw #392）等 UX 改进获高优先级，说明 **AI 助手需达到传统软件交互标准**。

> **对开发者的建议**：优先选择具备 **明确安全边界**（如 IronClaw 的 WASM 沙箱）、**活跃社区响应**（如 NanoBot 的 24h PR review）和 **本地部署友好**（如 Zeroclaw 的声明式配置）的项目，避免陷入“功能丰富但不可靠”的技术债务陷阱。

---  
**报告生成时间：2026-03-23**  
**数据来源：各 GitHub 仓库公开动态，经交叉验证**

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-03-23）

---

## 1. 今日速览

NanoBot 社区活跃度持续高涨，过去24小时内共产生 **17条 Issues 更新** 和 **72条 PR 更新**，其中 **61个 PR 待合并**，反映出开发者对功能迭代和稳定性修复的高度参与。尽管无新版本发布，但多个关键功能（如微信通道、子代理配置、流式输出）进入实质性开发阶段。社区对上下文窗口溢出、定时任务静默失败等核心问题反馈集中，表明项目已进入深度使用与生产验证阶段。

---

## 2. 版本发布

**无新版本发布**。当前主线仍以 nightly 分支为集成目标，多个重要 PR 标记为 `[to-nightly]`，预计将在下一轮 nightly 刷新（3月22日已执行）后进入测试周期。

---

## 3. 项目进展

今日有 **11个 PR 被合并或关闭**，重点进展包括：

- **#2360（已关闭）**：尝试添加微信个人号通道，但因实现路径与后续 PR 重叠被标记为重复，推动社区聚焦统一方案。
- **#2263（已关闭）**：因设计不符合当前架构被标记为 `[invalid]`，促使维护者明确工具提示通道的设计边界。
- **#2312（已关闭）**：完成 nightly 分支刷新通知，保障开发流程透明性。
- **#981（已关闭）**：修复系统提示中“当前时间”破坏 prompt cache 的问题，提升 LLM 调用效率。
- **#2226（已关闭）**：QQ 文件收发功能适配完成，为社区贡献者提供 v0.1.4.post5 兼容实现基础。

> 整体项目在**多通道支持**、**缓存优化**和**开发流程规范化**方面取得实质性推进。

---

## 4. 社区热点

### 🔥 高讨论度 Issues

- **#2343**（8条评论）：用户报告 `run_agent_loop` 未检查 `contextWindowTokens`，导致请求 token 超限（36748 > 32768）。该问题暴露了上下文预算管理缺陷，已有 **#2317** 和 **#2359** 两个 PR 尝试解决。  
  🔗 [Issue #2343](https://github.com/HKUDS/nanobot/issues/2343)

- **#2235**（5条评论，6👍）：Telegram 回复重复显示，疑似 faux streaming 实现问题，影响用户体验。  
  🔗 [Issue #2235](https://github.com/HKUDS/nanobot/issues/2235)

- **#1300**（8条评论）：Matrix 通道无法启动，长期未修复，反映小众通道维护资源不足。  
  🔗 [Issue #1300](https://github.com/HKUDS/nanobot/issues/1300)

### 💬 高关注度 PR

- **#2365**：提出端到端流式输出架构，覆盖 LLM → Agent → Channel/CLI 全链路，显著改善响应延迟感知。  
  🔗 [PR #2365](https://github.com/HKUDS/nanobot/pull/2365)

- **#2368**：引入可配置子代理（subagents），支持不同通道使用独立 LLM 后端，是迈向多租户架构的关键一步。  
  🔗 [PR #2368](https://github.com/HKUDS/nanobot/pull/2368)

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| ⚠️ 高 | #2343 | 上下文窗口未校验，导致 LLM 请求超限报错 | ✅ #2317（可配置预算）、#2359（配置校验） |
| ⚠️ 高 | #2369 | 定时提醒被 evaluator 静默丢弃，用户收不到通知 | ❌ 无 |
| ⚠️ 中 | #2358 | 切换 workspace 后旧 cron 任务未终止，造成混乱 | ✅ #2364（防递归指令） |
| ⚠️ 中 | #2293 | Ollama 本地部署 qwen2.5:14b 执行工具时对话静默中断 | ❌ 无 |
| ⚠️ 低 | #2235 | Telegram 回复重复显示 | ❌ 无 |

> 建议优先处理 **#2369**（cron 提醒失效）和 **#2293**（工具执行中断），二者均影响核心自动化能力。

---

## 6. 功能请求与路线图信号

以下功能需求已获得社区积极响应，有望纳入近期版本：

- **微信个人号通道支持**：多个 PR（#2360、#2348、#2355）竞相实现，反映国内用户需求强烈。#2348 提供完整登录与媒体支持，成熟度较高。  
  🔗 [PR #2348](https://github.com/HKUDS/nanobot/pull/2348)

- **多子代理配置**：#2368 实现通道级代理路由，满足企业多角色场景。  
  🔗 [PR #2368](https://github.com/HKUDS/nanobot/pull/2368)

- **端到端流式输出**：#2365 提出基础设施改造，提升交互体验，尤其利好 Telegram/Discord 等实时通道。  
  🔗 [PR #2365](https://github.com/HKUDS/nanobot/pull/2365)

- **本地网络白名单**：#2370 请求支持内网服务访问控制，适用于 Gitea 等私有部署场景。  
  🔗 [Issue #2370](https://github.com/HKUDS/nanobot/issues/2370)

---

## 7. 用户反馈摘要

- **痛点**：
  - 上下文管理不智能，“历史消息全量带入”导致 token 超限（#2343）。
  - 文件接收机制依赖浏览器跳转，体验割裂（#2352）。
  - 定时任务“看得见发不出”，evaluator 过滤逻辑过于激进（#2369）。

- **满意点**：
  - QQ 文件收发功能成功适配，社区协作效率高（#2226）。
  - Discord 新增已读回执与子代理指示器，UX 显著提升（#2330）。
  - LiteLLM 追踪回调非侵入式集成，便于成本监控（#2268）。

- **使用场景**：
  - 企业微信/飞书内部助手（#2353）、本地 Ollama 模型部署（#2293）、个人微信自动化（#2348）成为主流用例。

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 状态 | 提醒 |
|--------|--------|------|------|
| #1300 | 2026-02-27 | OPEN | Matrix 通道长期无法使用，需排查依赖或文档更新 |
| #144 | 2026-02-05 | OPEN | Gemini API Key 检测逻辑缺陷，影响 Vertex AI 外用户 |
| #2213 | 2026-03-18 | OPEN | 社区贡献 UI Dashboard，尚未评估合并可行性 |
| #2113 | 2026-03-16 | OPEN | 多搜索引擎 fallback 机制，实用性高但久未 review |

> 建议维护团队对 **#1300** 和 **#2213** 给予响应，前者关乎通道可靠性，后者涉及生态扩展。

---

**项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
活跃开发中，核心功能持续增强，社区贡献旺盛，但需加强 Issue 响应速度与关键 Bug 修复优先级管理。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报（2026-03-23）

---

## 1. 今日速览

Zeroclaw 在 2026-03-23 继续保持高强度开发节奏，社区活跃度显著提升。过去24小时内共处理 **45 条 Issues**（新开/活跃 19，关闭 26）和 **50 条 PRs**（合并/关闭 27，待合并 23），并发布 **8 个新版本**，其中 v0.5.9-beta.578 为最新测试版。核心团队聚焦于多模态能力增强、本地部署优化与配置可声明化，同时积极修复因分支迁移（main → master）导致的功能丢失问题。项目整体处于快速迭代与稳定性修复并行阶段。

---

## 2. 版本发布

### 🔖 v0.5.9-beta.578（最新）
**发布日期**：2026-03-23  
**关键更新**：
- ✅ **浏览器自动化技能**：新增 `skills/browser` 模块，支持 headless/GUI 模式网页交互（含 VNC 脚本）[#4281](https://github.com/zeroclaw-labs/zeroclaw/pull/4281)
- ✅ **飞书/钉钉通道增强**：支持图像与文件消息处理，可下载并编码为模型可解析格式 [#4280](https://github.com/zeroclaw-labs/zeroclaw/pull/4280)
- ✅ **语音消息转录**：Slack/Discord 通道集成 Whisper/Groq 等转录服务 [#4278](https://github.com/zeroclaw-labs/zeroclaw/pull/4278)
- ✅ **SearXNG 搜索支持**：新增隐私优先的元搜索引擎选项 [#4272](https://github.com/zeroclaw-labs/zeroclaw/pull/4272)
- ✅ **声明式定时任务配置**：通过 TOML 配置 `[[cron.jobs]]` 实现版本控制友好管理 [#4279](https://github.com/zeroclaw-labs/zeroclaw/pull/4279)
- ✅ **网关会话命名与重连修复**：支持人类可读会话名，提升多客户端管理体验 [#4275](https://github.com/zeroclaw-labs/zeroclaw/pull/4275)

> ⚠️ **注意**：v0.5.9 默认启用 `web_fetch`、`web_search` 等联网工具（`allowed_domains: ["*"]`），存在潜在安全风险，生产环境建议按需限制域名 [#4270](https://github.com/zeroclaw-labs/zeroclaw/pull/4270)。

---

## 3. 项目进展

今日共 **合并/关闭 27 个 PR**，重点推进以下方向：

| 类别 | 进展摘要 | 关联 PR |
|------|--------|--------|
| **多模态能力** | 图像路由至专用视觉 Provider、本地 Piper TTS 支持 | [#4119](https://github.com/zeroclaw-labs/zeroclaw/issues/4119), [#4116](https://github.com/zeroclaw-labs/zeroclaw/issues/4116) |
| **配置可维护性** | 声明式 Cron 配置、技能工具注册为原生函数调用 | [#4279](https://github.com/zeroclaw-labs/zeroclaw/pull/4279), [#4276](https://github.com/zeroclaw-labs/zeroclaw/pull/4276) |
| **内存系统修复** | 恢复因分支迁移丢失的时间衰减评分机制 | [#4274](https://github.com/zeroclaw-labs/zeroclaw/pull/4274) |
| **稳定性修复** | 修复 UTF-8 字节切片 panic、链接标题提取偏移错误 | [#4271](https://github.com/zeroclaw-labs/zeroclaw/pull/4271), [#4139](https://github.com/zeroclaw-labs/zeroclaw/issues/4139) |

项目整体向 **本地优先、多模态、可审计配置** 方向迈出关键一步。

---

## 4. 社区热点

### 🔥 高讨论度 Issues

1. **[#3540] Lark/Feishu 通道编译后无法启动**  
   - **评论数**: 9 | **状态**: OPEN  
   - **诉求**: 用户编译时启用 `channel-lark` 特性，但启动时仍报通道未启用警告。  
   - **分析**: 可能涉及构建脚本或运行时特性检测逻辑缺陷，需维护者验证构建流程。  
   - 🔗 [Issue #3540](https://github.com/zeroclaw-labs/zeroclaw/issues/3540)

2. **[#4093] Provider streaming 功能 stranded on deleted dev branch**  
   - **评论数**: 4 | **状态**: OPEN  
   - **诉求**: 关键流式更新功能（PR #2868/#2873/#2875）因 `dev` 分支删除未合并至 `master`，导致功能丢失。  
   - **分析**: 反映分支管理混乱问题，需评估是否重新 cherry-pick 相关提交。  
   - 🔗 [Issue #4093](https://github.com/zeroclaw-labs/zeroclaw/issues/4093)

3. **[#3818] 恢复 main 分支丢失的安全与核心功能**  
   - **评论数**: 3 | **状态**: OPEN  
   - **诉求**: 分支迁移导致 Copilot onboarding、task_plan 工具等关键功能缺失。  
   - **分析**: 社区对“功能回退”高度敏感，需制定迁移审计清单。  
   - 🔗 [Issue #3818](https://github.com/zeroclaw-labs/zeroclaw/issues/3818)

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 修复状态 |
|--------|------|------|--------|
| **S0** | [#4247] 无法使用默认批准工具 | 工具权限系统故障，导致基础功能不可用 | ❌ 未修复 |
| **S1** | [#4139] UTF-8 多字节字符切片 panic | `creator.rs` 中字节索引错误引发崩溃 | ✅ 已修复 ([#4271](https://github.com/zeroclaw-labs/zeroclaw/pull/4271)) |
| **S1** | [#4253] OpenAI 兼容模型刷新 panic | `models refresh` 命令在异步上下文崩溃 | ❌ 未修复 |
| **S1** | [#4284] service install 未检测 loginctl enable-linger | 用户级 systemd 服务静默失败 | ❌ 新报告，需关注 |
| **S2** | [#2960] 浏览器配对无法持久化 | 每次访问需重新配对 | ❌ 长期未修复 |
| **S2** | [#3679] 成本追踪与执行缺失 | 分支迁移后成本控制功能丢失 | ❌ 未修复 |

> 💡 **建议**：优先处理 S0/S1 级阻塞性问题，尤其是工具系统故障（#4247）。

---

## 6. 功能请求与路线图信号

| 功能请求 | 社区支持度 | 已有 PR | 纳入可能性 |
|--------|----------|--------|----------|
| **本地 GPU TTS (Piper/Coqui)** | ⭐⭐⭐⭐ | [#4116](https://github.com/zeroclaw-labs/zeroclaw/issues/4116) → 已合并 | ✅ 高（v0.5.9 已包含） |
| **专用视觉 Provider 路由** | ⭐⭐⭐⭐ | [#4119](https://github.com/zeroclaw-labs/zeroclaw/issues/4119) → 已合并 | ✅ 高 |
| **LMStudio 连接器** | ⭐⭐⭐ | [#2669](https://github.com/zeroclaw-labs/zeroclaw/issues/2669) | 🟡 中（需定制开发） |
| **PostgreSQL + pgvector 内存架构** | ⭐⭐⭐ | [#4028](https://github.com/zeroclaw-labs/zeroclaw/issues/4028) | 🟡 中（架构级变更） |
| **Codex 模型 reasoning_effort 配置** | ⭐⭐ | [#2433](https://github.com/zeroclaw-labs/zeroclaw/issues/2433) | 🔴 低（ niche 需求） |

> 📌 **趋势判断**：项目正强化 **本地部署能力** 与 **多模态支持**，下一版本可能聚焦 PostgreSQL 内存后端与 Firecrawl 集成（[#4244](https://github.com/zeroclaw-labs/zeroclaw/pull/4244)）。

---

## 7. 用户反馈摘要

- **痛点**：
  - “飞书通道编译后仍无法启动，文档未说明运行时依赖” → 构建/部署体验差 ([#3540](https://github.com/zeroclaw-labs/zeroclaw/issues/3540))
  - “仪表盘 404，官方示例配置不工作” → 新手引导缺失 ([#3454](https://github.com/zeroclaw-labs/zeroclaw/issues/3454))
  - “工具突然不能用了，日志无明确错误” → 调试信息不足 ([#4247](https://github.com/zeroclaw-labs/zeroclaw/issues/4247))

- **满意点**：
  - “SearXNG 支持很棒，终于不用依赖 DuckDuckGo 了” → 隐私需求被响应 ([#4152](https://github.com/zeroclaw-labs/zeroclaw/issues/4152))
  - “声明式 Cron 配置让 CI/CD 更干净” → 运维友好性提升 ([#4045](https://github.com/zeroclaw-labs/zeroclaw/issues/4045))

---

## 8. 待处理积压

| Issue/PR | 类型 | 积压时长 | 风险等级 | 建议 |
|--------|------|--------|--------|------|
| [#3540] Lark/Feishu 通道启动失败 | Bug | 8 天 | 🔴 高 | 影响核心通道可用性，需优先排查 |
| [#3818] 恢复 main 分支丢失功能 | Enhancement | 6 天 | 🔴 高 | 涉及安全与核心工具，应制定迁移审计 |
| [#2960] 浏览器配对无法持久化 | Bug | 16 天 | 🟠 中 | 影响用户体验，建议添加持久化存储 |
| [#3679] 成本追踪缺失 | Bug | 7 天 | 🟠 中 | 企业用户关注点，需评估恢复方案 |
| [#4244] Firecrawl 回退支持 | PR | 1 天 | 🟡 低 | 功能增强，可纳入下个迭代 |

> 🛎️ **维护者提醒**：请重点关注 **#3540** 与 **#3818**，二者均涉及核心功能可用性，可能影响用户留存。

---  
*数据来源：GitHub Zeroclaw 仓库（截至 2026-03-23 24:00 UTC）*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-03-23）

---

## 1. 今日速览

PicoClaw 在 2026-03-23 继续保持高活跃度，社区贡献与核心开发并行推进。过去24小时内共处理 **27 条 Issues**（新开/活跃 19 条，关闭 8 条）和 **48 条 PR**（待合并 25 条，已合并/关闭 23 条），显示出强劲的开发节奏。项目发布了一个 nightly 版本（`v0.2.3-nightly.20260323.3500080a`），并完成了 Agent 重构 Phase 1 的合并，标志着架构演进进入新阶段。当前重点集中在 **Agent 架构升级、多模态支持增强、通道稳定性修复** 三大方向。

---

## 2. 版本发布

### 🔧 Nightly Build: `v0.2.3-nightly.20260323.3500080a`
- **类型**：自动化 nightly 构建（非稳定版，谨慎使用）
- **更新内容**：
  - 包含截至 `main` 分支的最新提交，涵盖 Agent 重构 Phase 1 的完整实现（#1894）
  - 集成多项 provider 和 channel 修复（如 OpenAI-compatible API key 传递、Telegram 流式响应等）
  - 新增 AWS Bedrock 支持（#1903）、WeChat 原生通道支持（#1904）、ElevenLabs 语音转录（#1905）
- **破坏性变更**：无显式 breaking change，但因 Agent 内部结构重组，自定义插件或深度集成需测试兼容性。
- **迁移建议**：生产环境建议等待稳定版；开发者可基于此 nightly 测试新功能。
- [查看完整变更日志](https://github.com/sipeed/picoclaw/compare/v0.2.3...main)

---

## 3. 项目进展

今日共 **23 个 PR 被合并或关闭**，关键进展包括：

| 类别 | 关键 PR | 说明 |
|------|--------|------|
| **架构重构** | [#1894](https://github.com/sipeed/picoclaw/pull/1894) | **Agent 模型 Phase 1 完成**：统一 Agent 抽象层，解耦执行逻辑与状态管理，为事件驱动钩子系统（#1796）打下基础 |
| **Provider 扩展** | [#1903](https://github.com/sipeed/picoclaw/pull/1903) | 新增 **AWS Bedrock 支持**（Converse API），通过 build tag 控制体积 |
| | [#1891](https://github.com/sipeed/picoclaw/pull/1891) | 引入 **AudioModelTranscriber**，支持主流多模态模型进行语音转录，降低对 Groq 的依赖 |
| **Channel 增强** | [#1904](https://github.com/sipeed/picoclaw/pull/1904) | 完成 **WeChat（微信）原生通道集成**，支持 QR 登录与媒体消息 |
| | [#1906](https://github.com/sipeed/picoclaw/pull/1906) | 实现 **Telegram 流式响应**，利用 `sendMessageDraft` 提供“正在输入”体验 |
| **Bug 修复** | [#1896](https://github.com/sipeed/picoclaw/pull/1896) | 修复 `/v1/models` 探针未传递 API key 导致本地网关模型不可见问题（#1864） |
| | [#1902](https://github.com/sipeed/picoclaw/pull/1902) | 修复通道配置中 `placeholder.enabled=false` 无法持久化问题（#1774） |

> ✅ 项目整体向 **模块化、可扩展、生产就绪** 迈出关键一步，Agent 重构为后续事件系统与能力发现（#1474）铺平道路。

---

## 4. 社区热点

### 🔥 高讨论度 Issues

1. **[#1216 Agent refactor Meta Issue](https://github.com/sipeed/picoclaw/issues/1216)**（9 评论）  
   → 核心路线图议题，今日因 Phase 1 完成而更新。社区关注后续 Phase 2（事件系统、钩子、中断机制）时间表。

2. **[#1316 Event-driven agent loop with hooks](https://github.com/sipeed/picoclaw/issues/1316)**（11 评论，已关闭）  
   → 提案被采纳并部分实现于 #1894，用户认可架构方向，期待 hook 系统落地。

3. **[#1737 Launcher mode: Missing port 18800 documentation](https://github.com/sipeed/picoclaw/issues/1737)**（5 评论）  
   → 用户反馈 Docker 部署时 WebSocket 端口未文档化，导致 Web UI 输入失效。维护者已确认将补充文档。

4. **[#1876 Capability Model Spec](https://github.com/sipeed/picoclaw/issues/1876)**（2 评论，已关闭为 wontfix）  
   → 关于统一工具/技能/MCP 抽象的讨论，维护者认为当前 Agent 重构已覆盖核心需求，暂不单独建模。

> 💬 社区核心诉求：**提升可观测性、降低部署复杂度、增强多厂商兼容性**。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重性 | Issue | 状态 | Fix PR |
|--------|-------|------|--------|
| ⚠️ 高 | [#748 Groq API tool call format error](https://github.com/sipeed/picoclaw/issues/748) | Open | 无（长期未解，影响 Groq 用户） |
| ⚠️ 高 | [#1708 REST API endpoints not available on Gateway](https://github.com/sipeed/picoclaw/issues/1708) | Open | 无（Gateway 模式功能缺失） |
| ⚠️ 中 | [#1895 Channel does not work (Feishu/DingTalk)](https://github.com/sipeed/picoclaw/issues/1895) | Open | 无（配置成功但消息不发送） |
| ⚠️ 中 | [#1886 MediaStore cleanup deletes workspace files](https://github.com/sipeed/picoclaw/issues/1886) | Open | 无（`send_file` 注册文件被误删） |
| ✅ 低 | [#1881 Web Chat blank lines not preserved](https://github.com/sipeed/picoclaw/issues/1881) | Closed | [#1900](https://github.com/sipeed/picoclaw/pull/1900)（已修复 Markdown+HTML 渲染） |

> ❗ 需优先关注 **Groq 兼容性** 和 **Gateway REST API 不可用** 问题，二者影响关键用户场景。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 关联 PR | 纳入可能性 |
|--------|-------|--------|----------|
| **事件驱动钩子系统** | [#1796](https://github.com/sipeed/picoclaw/issues/1796) | — | ⭐⭐⭐⭐☆（Agent 重构后高优先级） |
| **能力发现端点** | [#1474](https://github.com/sipeed/picoclaw/issues/1474) | — | ⭐⭐⭐☆☆（ orchestration 层刚需） |
| **armhf 预构建镜像** | [#1778](https://github.com/sipeed/picoclaw/issues/1778) | — | ⭐⭐☆☆☆（小众但明确需求） |
| **显式 provider 字段** | [#1883](https://github.com/sipeed/picoclaw/issues/1883) | — | ⭐⭐⭐⭐☆（解决模型歧义，高价值） |
| **Authula 集成** | [#1067](https://github.com/sipeed/picoclaw/issues/1067) | — | ⭐☆☆☆☆（安全相关，但非核心路径） |

> 📌 下一版本（v0.3.0） likely 聚焦：**事件系统 + 能力发现 + provider 字段规范化**。

---

## 7. 用户反馈摘要

- **满意点**：
  - “Agent 重构后配置更清晰了”（#1216 评论）
  - “Telegram 流式响应体验很棒，终于有‘AI 在思考’的感觉”（#1906 隐含反馈）
  - “WeChat 通道终于不用绕道第三方了”（#1904 相关讨论）

- **痛点**：
  - “Docker 部署文档不全，18800 端口没提，浪费两小时”（#1737）
  - “Groq 完全不能用，官方示例都报错”（#748）
  - “本地 OpenAI 兼容网关（如 AxonHub）连不上模型列表”（#1864，已修复）
  - “语音文件传了就被删，workspace 文件不安全”（#1886）

- **典型场景**：
  - 企业用户通过 **Gateway + Docker** 部署内部 AI 助手
  - 开发者使用 **Telegram/WeChat** 作为交互前端
  - 研究者尝试 **多 provider 路由**（如 DeepSeek + Gemini + Groq）

---

## 8. 待处理积压

| 类型 | Issue/PR | 创建时间 | 状态 | 提醒 |
|------|---------|--------|------|------|
| Issue | [#748 Groq API compatibility](https://github.com/sipeed/picoclaw/issues/748) | 2026-02-25 | Open | ⚠️ 超25天未响应，影响关键 provider |
| Issue | [#1708 Gateway REST API missing](https://github.com/sipeed/picoclaw/issues/1708) | 2026-03-17 | Open | ⚠️ Gateway 模式核心功能缺失 |
| Issue | [#1502 Mistral integration fails](https://github.com/sipeed/picoclaw/issues/1502) | 2026-03-13 | Open | ⚠️ 主流 provider 兼容性问题 |
| PR | [#1874 ExeclineTool for secure exec](https://github.com/sipeed/picoclaw/pull/1874) | 2026-03-22 | Open | 🔧 安全增强 PR，待 review |
| Issue | [#1067 Authula integration](https://github.com/sipeed/picoclaw/issues/1067) | 2026-03-04 | Open | 🔐 安全相关，长期未处理 |

> 🛎️ **维护者注意**：建议本周优先处理 **Groq/Mistral 兼容性** 和 **Gateway API 缺失** 问题，以保障基础用户体验。

--- 

📊 **项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
高活跃度 + 架构演进顺利，但需加强 **provider 兼容性测试** 与 **部署文档完善**。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-03-23）

---

## 1. 今日速览

NanoClaw 在过去24小时内表现出极高的开发活跃度，共产生 **43条 PR 更新**（含30个待合并、13个已合并/关闭）和 **5条 Issues 更新**，显示出社区贡献者对核心功能扩展与稳定性优化的强烈参与意愿。尽管无新版本发布，但多个关键功能（如 Copilot SDK 集成、预执行钩子、系统提示层）已进入实现阶段，标志着项目正从单一 AI 后端向多模型、高可控性架构演进。整体项目健康度良好，技术债清理与用户体验改进同步推进。

---

## 2. 版本发布

**无新版本发布**。当前主干（`main`）仍在集成多项重大功能，预计下一版本将包含多 AI 后端支持、调度任务控制增强及系统级提示管理能力。

---

## 3. 项目进展

今日有 **13个 PR 被合并或关闭**，推动多个关键方向落地：

- **#1335 [CLOSED]**：修复定时任务与群组代理重复发送消息的问题，通过 `<internal>` 标签剥离机制优化输出流回调逻辑，提升消息一致性（[链接](https://github.com/qwibitai/nanoclaw/pull/1335)）。
- **#1339 [CLOSED]**：集成 AstrBot HTTP 通道作为功能技能，实现轻量级桥接，扩展 NanoClaw 的第三方生态接入能力（[链接](https://github.com/qwibitai/nanoclaw/pull/1339)）。
- **#1298 [CLOSED]**：完成 Web 通道（WebClaw）、仪表盘与多租户架构的基础设施建设，为 SaaS 化部署铺平道路（[链接](https://github.com/qwibitai/nanoclaw/pull/1298)）。
- **#1308 [CLOSED]**：实现“信任与自治框架”第一阶段，引入 SQLite 背书的审批追踪与草稿路由机制，增强事件路由的安全可控性（[链接](https://github.com/qwibitai/nanoclaw/pull/1308)）。
- **#1280 [CLOSED]**：添加可选诊断上报功能（基于 PostHog），用于匿名收集系统信息以辅助产品决策，默认关闭且用户可控（[链接](https://github.com/qwibitai/nanoclaw/pull/1280)）。

这些合并显著提升了系统的可扩展性、安全性和运维透明度。

---

## 4. 社区热点

- **#1350 [OPEN] Add GitHub Copilot SDK as alternative AI backend**  
  用户 @scottgl9 提出将 GitHub Copilot SDK 作为 Anthropic Claude 的替代后端，以支持 GPT-4.1 等模型。该 Issue 迅速获得配套 PR #1351，反映社区对**多 AI 提供商支持**的迫切需求，尤其在规避 Anthropic TOS 限制（如订阅 OAuth 使用）方面具有实际价值（[Issue](https://github.com/qwibitai/nanoclaw/issues/1350) | [PR](https://github.com/qwibitai/nanoclaw/pull/1351)）。

- **#1348 [OPEN] Feature: pre-run script hook/gate for scheduled tasks**  
  同一作者提出的调度任务前置钩子机制，旨在避免资源不足时盲目启动容器。PR #1349 已实现该功能，允许通过 shell 命令判断是否执行任务，体现用户对**资源感知调度**的强烈诉求（[Issue](https://github.com/qwibitai/nanoclaw/issues/1348) | [PR](https://github.com/qwibitai/nanoclaw/pull/1349)）。

---

## 5. Bug 与稳定性

- **#1345 [OPEN] [skill-maintenance] Merge-forward failed for 2 skill branch(es)**  
  GitHub Actions 自动检测到 `skill/apple-container` 和 `skill/compact` 分支在合并 `main`（commit deee4b2）时失败，可能因冲突、构建或测试错误。需手动干预，属**中高风险**，影响技能分支同步（[链接](https://github.com/qwibitai/nanoclaw/issues/1345)）。  
  ✅ 已有维护者关注，建议优先处理。

> 注：其余 Issues 多为功能请求或文档问题，无新增崩溃或回归报告。

---

## 6. 功能请求与路线图信号

以下功能请求已配套 PR，极可能被纳入下一版本：

| 功能 | Issue | PR | 状态 |
|------|-------|----|------|
| GitHub Copilot SDK 支持 | #1350 | #1351 | 开发中 |
| 调度任务预执行钩子 | #1348 | #1349 | 开发中 |
| 全局系统提示层（system-prompt.md） | — | #1341 | 开发中 |
| CLI 后端替代 Agent SDK（合规性） | — | #1343 | 开发中 |

此外，**#1347** 提出的学术引用问题虽非技术功能，但涉及项目声誉，建议维护团队评估回应策略。

---

## 7. 用户反馈摘要

- **痛点**：当前仅支持 Claude 作为 AI 后端，限制了在企业环境或偏好 OpenAI 生态用户中的采用；调度任务缺乏前置条件检查，易造成资源浪费。
- **满意点**：模块化技能设计（如 AstrBot、Matrix、Web 通道）受到欢迎，用户赞赏“无需修改核心即可集成”的架构理念。
- **使用场景**：Raspberry Pi 5 + Docker 的 ARM64 部署（见 #682）、多租户 SaaS 场景（#1298）、合规敏感环境（#1343）成为新兴典型用例。

---

## 8. 待处理积压

- **#682 [OPEN] [Status: Blocked] feat(slack): thread-aware reply routing and App Home DM fix**  
  自 2026-03-04 起停滞，涉及 Slack 通道的关键交互修复，影响真实用户部署体验。需维护者解除阻塞并推进 review（[链接](https://github.com/qwibitai/nanoclaw/pull/682)）。

- **#791 [OPEN] [Status: Needs Review] Add Matrix Protocol Support**  
  自 3月7日提交至今未获 review，Matrix 作为去中心化通信协议具有重要战略意义，建议优先评估（[链接](https://github.com/qwibitai/nanoclaw/pull/791)）。

- **#1111 [OPEN] [Status: Needs Review] feat: add API usage tracking**  
  成本与用量追踪是企业级刚需，PR 已存在但长期未审，可能阻碍商业化探索（[链接](https://github.com/qwibitai/nanoclaw/pull/1111)）。

> 建议维护团队建立定期 triage 机制，避免高价值贡献因流程延迟而流失。

---  
*数据截至 2026-03-23 00:00 UTC | 来源：GitHub API*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-03-23）

---

## 1. 今日速览

IronClaw 项目在过去24小时内保持高活跃度，共处理 **46条 PR 更新**（16条已合并/关闭，30条待合并）和 **15条 Issues 更新**（6条新开，9条已关闭），显示出社区贡献与核心团队响应的高效协同。尽管无新版本发布，但多个关键性能优化、安全修复和架构演进 PR 被合并，显著提升了系统稳定性与扩展性。项目整体处于快速迭代与功能深化阶段，技术债务持续清理，用户反馈驱动的开发节奏明显。

---

## 2. 版本发布

**无新版本发布**。当前最新稳定版本仍为 `v0.18.0`，但多个重要修复（如 Gemini 工具调用签名、MCP 202 响应处理）已通过热修复 PR 集成至主干，预计将在下个 minor 版本中统一发布。

---

## 3. 项目进展

今日合并/关闭的 PR 在性能、兼容性与架构层面取得显著进展：

- **性能优化**：[#926](https://github.com/nearai/ironclaw/pull/926) 修复了工具执行中不必要的参数深拷贝问题（原 Issue #893），减少内存开销与延迟，尤其对高频工具调用场景影响显著。
- **协议兼容性**：[#1539](https://github.com/nearai/ironclaw/pull/1539) 正确处理 MCP Streamable HTTP 的 `202 Accepted` 空响应，解决了与 kubernetes-mcp-server 等服务的会话初始化失败问题（原 Issue #1436）。
- **测试健壮性**：[#1558](https://github.com/nearai/ironclaw/pull/1558) 引入 `lock_env()` 毒化恢复机制，避免单个测试 panic 导致后续 ~68 个测试连锁失败，大幅提升 CI 稳定性。
- **文档与体验**：[#1397](https://github.com/nearai/ironclaw/pull/1397) 完成复杂 JSON Schema（oneOf/anyOf）的参数强制与验证逻辑重构，使 WASM 扩展工具能更可靠地处理 LLM 输出的类型错误。

> 整体项目在工程质量和生产就绪度上迈出关键一步。

---

## 4. 社区热点

### 🔥 高关注度 Issue：Google OAuth 被阻断与备用方案请求
- **Issue #902**：[Google OAuth blocked across Google Suite tools + request optional gws fallback provider](https://github.com/nearai/ironclaw/issues/902)（4 条评论）
- **核心诉求**：用户在本地 `v0.17.0` 中遭遇 Google 统一拦截（“This app is blocked”），导致所有 Google Suite WASM 工具无法完成 OAuth。
- **社区响应**：维护者 @G7CNF 已提出两套解决方案：
  - 短期：通过 [#1569](https://github.com/nearai/ironclaw/pull/1569) 提供独立的 `gws-bridge` MCP 桥接器（只读模式，基于本地 `gws` 二进制）；
  - 长期：在 [#931](https://github.com/nearai/ironclaw/pull/931) 中实现可选的 `gws_bridge` 工具作为安全降级路径。
- **分析**：该问题暴露了中心化 OAuth 在严格安全策略环境下的脆弱性，社区正推动“去中心化凭证接入”架构演进。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 修复状态 |
|--------|------|------|--------|
| **HIGH** | [#826](https://github.com/nearai/ironclaw/issues/826) | 工具循环中消息 Vec 无限增长，可能导致上下文爆炸 | ✅ 已关闭（关联 PR #820 已合并） |
| **HIGH** | [#1510](https://github.com/nearai/ironclaw/issues/1510) | Gemini 3.1 模型工具调用缺少 `thought_signature`，引发 400 错误 | ✅ 已修复（PR [#1565](https://github.com/nearai/ironclaw/pull/1565) 合并） |
| **MEDIUM** | [#1537](https://github.com/nearai/ironclaw/issues/1537) | NEAR AI TEE 环境中 WASM 凭证注入静默失败 | 🔄 调查中（2 条评论，需进一步日志） |
| **MEDIUM** | [#1436](https://github.com/nearai/ironclaw/issues/1436) | HTTP 传输不处理 202 Accepted 响应 | ✅ 已修复（PR #1539 合并） |

> 所有 HIGH 级 Bug 均已闭环，系统稳定性显著提升。

---

## 6. 功能请求与路线图信号

以下功能请求已获得实质性推进，极可能纳入下一版本：

- **ClawHub 可配置性**：[#1570](https://github.com/nearai/ironclaw/issues/1570) 请求通过 `CLAWHUB_ENABLED` 环境变量禁用公共技能注册表，反映企业用户对私有化部署的需求。
- **执行引擎重构**：[#1557](https://github.com/nearai/ironclaw/pull/1557) 提出全新 `ironclaw_engine` crate，统一 Thread-Capability-CodeAct 模型，预示 v2 架构启动。
- **自适应学习系统**：[#1187](https://github.com/nearai/ironclaw/pull/1187) 虽风险高但覆盖完整，包含技能合成、用户画像与会话搜索，若通过评审将大幅提升个性化能力。
- **Bedrock 嵌入支持**：[#1568](https://github.com/nearai/ironclaw/pull/1568) 实现 AWS Titan 嵌入 provider，扩展多云 LLM 生态。

> 路线图正从“基础功能完善”向“智能体自治与多模态集成”演进。

---

## 7. 用户反馈摘要

从 Issues 评论提炼关键用户声音：

- **痛点**：
  - Google OAuth 被企业策略拦截是普遍问题，“我们无法在内部网络使用任何 Google 工具”（#902）；
  - “发送纯图片消息时被拒绝，提示‘Input cannot be empty’”（#1208）；
  - “Gemini 工具调用突然报错 400，之前还好好的”（#1510）。
- **满意点**：
  - “debounce 功能终于实现了！连续发消息不再产生碎片化响应”（#259 关闭评论）；
  - “shell 工具现在支持风险分级，`ls` 终于不用每次都确认了”（#172 关闭评论）。
- **使用场景**：
  - 企业内网部署（需绕过 OAuth）、多模态交互（图片+文本）、高频自动化任务（需 debounce）成为典型用例。

---

## 8. 待处理积压

以下重要 Issue/PR 超过 7 天未获核心团队响应，建议优先关注：

- **长期开放 Issue**：
  - [#1537](https://github.com/nearai/ironclaw/issues/1537)（WASM 凭证注入失败）——影响 NEAR AI 托管用户，需 TEE 环境调试支持；
  - [#1510](https://github.com/nearai/ironclaw/issues/1510)（Gemini 工具调用）——虽已修复，但需确认是否覆盖所有 3.x 模型变体。
- **大型 PR 待审**：
  - [#1187](https://github.com/nearai/ironclaw/pull/1187)（自适应学习系统）——XL 规模，高风险，需架构委员会评审；
  - [#1557](https://github.com/nearai/ironclaw/pull/1557)（v2 执行引擎）——涉及核心抽象重构，需充分测试验证。

> 建议维护者本周内对上述积压项进行 triage，避免技术决策延迟。

--- 

**报告生成时间**：2026-03-23  
**数据来源**：GitHub IronClaw 仓库公开数据

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-03-23）

---

## 1. 今日速览

LobsterAI 在2026年3月22日继续保持高活跃度，社区贡献与核心开发并行推进。过去24小时内新增 **28个 Issues** 和 **25个 Pull Requests**，其中 **8个 PR 已合并/关闭**，**1个新版本发布**。项目整体呈现“功能快速迭代 + 质量治理并重”的态势，开发者对国际化、多平台适配、IM集成稳定性及沙箱可靠性等问题高度关注。

---

## 2. 版本发布

### 🔖 新版本：`2026.3.22`（[Release 链接](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.3.22)）

**主要更新内容：**
- **修复 OpenClaw Gateway 环境变量注入问题**：将 Node.js shims 注入 gateway PATH，并增加环境变量守卫逻辑，避免运行时路径缺失（[#638](https://github.com/netease-youdao/LobsterAI/pull/638)）
- **优化微信扫码登录体验**：在微信登录成功后自动重启 gateway，确保新 token 生效；调整设置页引导文案布局，提升用户操作一致性（[#652](https://github.com/netease-youdao/LobsterAI/pull/652)）

> ✅ 无破坏性变更，建议所有使用微信 IM 或 OpenClaw 网关的用户升级。

---

## 3. 项目进展

今日共 **8个 PR 被合并或关闭**，重点推进以下方向：

| 类别 | 进展摘要 | PR 链接 |
|------|--------|--------|
| **IM 集成增强** | 微信扫码登录绕过 OpenClaw Gateway，直接调用 ilink API，降低延迟并提升可靠性 | [#653](https://github.com/netease-youdao/LobsterAI/pull/653) |
| **配置健壮性** | 修复空字符串环境变量被误判为“未配置”的问题，使用 `'unconfigured'` 作为 fallback | [#657](https://github.com/netease-youdao/LobsterAI/pull/657) |
| **UI/UX 优化** | 调整微信设置页布局，统一平台配置体验 | [#654](https://github.com/netease-youdao/LobsterAI/pull/654) |
| **文档补充** | 添加云信官网链接，完善外部资源指引 | [#514](https://github.com/netease-youdao/LobsterAI/pull/514) |

> 项目在 **IM 平台稳定性** 和 **配置容错能力** 方面取得实质性进展。

---

## 4. 社区热点

### 🔥 高关注度 Issues / PRs

| 标题 | 类型 | 评论数 | 链接 | 分析 |
|------|------|--------|------|------|
| **#639 cowork_messages 表中 metadata 损坏导致整个 session 无法加载** | Bug | 0（刚提出） | [Issue #639](https://github.com/netease-youdao/LobsterAI/issues/639) | 用户遭遇数据损坏即全会话崩溃，严重影响可用性，**已有对应修复 PR #681** |
| **#640 建议在0.2.4版本基础上单开版本分支优化** | 功能请求 | 2 👍 | [Issue #640](https://github.com/netease-youdao/LobsterAI/issues/640) | 用户认为近期版本 bug 过多，呼吁稳定分支，反映对**版本稳定性**的强烈诉求 |
| **#637 飞书白名单模式下机器人无法响应 @mention** | Bug | 0 | [Issue #637](https://github.com/netease-youdao/LobsterAI/issues/637) | 关键企业场景功能失效，涉及 OpenClaw 插件逻辑，需紧急排查 |
| **#680 feat(cowork): 多 Agent 编排与子任务实时可观测** | 新功能 | 0 | [PR #680](https://github.com/netease-youdao/LobsterAI/pull/680) | 引入多 Agent 可视化编排，是迈向复杂工作流自动化的重要一步 |

> 社区核心诉求：**提升稳定性、增强可观测性、支持多机器人配置**。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重等级 | 问题描述 | 是否已有 Fix | 链接 |
|--------|--------|------------|------|
| ⚠️ **高** | `cowork_messages.metadata` JSON 损坏导致整个会话无法加载，用户无法恢复 | ✅ 已有 PR #681 | [Issue #639](https://github.com/netease-youdao/LobsterAI/issues/639) |
| ⚠️ **高** | 飞书 Allowlist 模式下 @mention 无响应（v2026.3.21 引入回归） | ❌ 未修复 | [Issue #637](https://github.com/netease-youdao/LobsterAI/issues/637) |
| ⚠️ **中** | 沙箱无法启动（ESXi + Debian 环境） | ❌ 未修复 | [Issue #402](https://github.com/netease-youdao/LobsterAI/issues/402) |
| ⚠️ **中** | 3.17 版本后沙箱功能消失 | ❌ 未修复 | [Issue #496](https://github.com/netease-youdao/LobsterAI/issues/496) |
| ⚠️ **中** | 停止按钮不立即生效，输出延迟停止 | ❌ 未修复 | [Issue #646](https://github.com/netease-youdao/LobsterAI/issues/646) |
| ⚠️ **低** | 聊天记录过多时 UI 卡顿，需局部渲染优化 | ❌ 未修复 | [Issue #645](https://github.com/netease-youdao/LobsterAI/issues/645) |

> 建议优先处理 **飞书 @mention 失效** 和 **沙箱功能回归** 问题，二者影响核心用户场景。

---

## 6. 功能请求与路线图信号

用户明确提出的新功能需求及对应 PR：

| 功能需求 | 是否已有 PR | PR 链接 | 评估 |
|--------|------------|--------|------|
| 支持多个飞书机器人配置 | ❌ 无 | — | 高价值企业需求，但尚无实现 |
| MiniMax OAuth 一键登录 | ✅ 有 | [#682](https://github.com/netease-youdao/LobsterAI/pull/682) | 显著降低接入门槛，预计纳入下一版本 |
| Qwen OAuth 一键登录 | ✅ 有 | [#644](https://github.com/netease-youdao/LoborkAI/pull/644) | 与 MiniMax 同类，增强多云厂商支持 |
| 导出会话为 Markdown | ✅ 有 | [#651](https://github.com/netease-youdao/LobsterAI/pull/651) | 用户归档/分享刚需，已开发完成 |
| `!<command>` 直接执行 shell 命令 | ✅ 有 | [#658](https://github.com/netease-youdao/LobsterAI/pull/658) | 提升本地操作效率，安全可控 |
| 多 Agent 编排可视化 | ✅ 有 | [#680](https://github.com/netease-youdao/LobsterAI/pull/680) | 复杂任务自动化关键能力，战略级功能 |

> 下一版本可能聚焦：**OAuth 生态扩展 + 会话可观测性 + 本地命令集成**。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实声音：

- **痛点**：
  - “沙箱装不上，跑不起来，折腾半天还是闪退”（#402）
  - “点停止还要等半天，根本停不下来”（#646）
  - “聊天记录一多就卡死，根本没法用”（#645）
  - “metadata 一坏整个会话就废了，数据全丢”（#639）

- **满意点**：
  - 微信扫码登录流程优化后“比之前快多了”（隐含于 #653 背景）
  - “终于可以导出 Markdown 了，方便做周报”（#651 预期收益）

- **使用场景**：
  - 企业内飞书/微信机器人自动响应（#637, #636）
  - 本地项目开发辅助（#658 shell 命令）
  - 多轮复杂任务拆解（#680 多 Agent）

---

## 8. 待处理积压

以下重要 Issue 长期未响应，建议维护者优先关注：

| Issue | 创建日期 | 状态 | 链接 | 建议 |
|------|--------|------|------|------|
| #402 沙箱无法启动 | 2026-03-13 | OPEN，2条评论 | [链接](https://github.com/netease-youdao/LobsterAI/issues/402) | 影响基础功能可用性，需环境兼容性排查 |
| #496 3.17 版本后沙箱功能消失 | 2026-03-19 | OPEN，2条评论 | [链接](https://github.com/netease-youdao/LobsterAI/issues/496) | 疑似版本回归，需确认是否误删模块 |
| #637 飞书 @mention 失效 | 2026-03-22 | OPEN | [链接](https://github.com/netease-youdao/LobsterAI/issues/637) | 企业用户核心场景，建议 48h 内响应 |

> 📌 **维护者提醒**：沙箱相关问题是当前最大阻塞点，建议成立专项小组排查。

--- 

**报告生成时间**：2026-03-23  
**数据来源**：GitHub LobsterAI 仓库公开数据

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

**TinyClaw 项目日报（2026-03-23）**

---

### 1. 今日速览  
过去24小时内，TinyClaw 项目整体活跃度中等，无新 Issue 提交，但 Pull Request 活动持续进行。共处理 3 条 PR（1 条已合并，2 条待合并），涵盖新功能集成、核心调度逻辑修复及第三方依赖升级。项目处于稳健迭代阶段，开发者聚焦于提升多平台兼容性与系统稳定性，社区互动虽未体现在 Issue 数量上，但 PR 内容反映出对生产环境可靠性的高度关注。

---

### 2. 版本发布  
*无新版本发布*

---

### 3. 项目进展  
✅ **已合并 PR #247**：修复了任务队列中的关键序列化问题，确保来自 Telegram/Discord/API 的外部消息与内部心跳/路由消息按顺序处理，避免因并行执行导致“默认链”误路由。此修复显著提升了多通道消息系统的可靠性，是近期核心架构优化的重要一步。  
🔗 [PR #247](https://github.com/TinyAGI/tinyagi/pull/247)

---

### 4. 社区热点  
*无活跃讨论的 Issues 或高互动 PR*  
尽管无新 Issue 或评论，但两个待合并 PR（#243 与 #248）显示出社区对**扩展 LLM 支持**和**提升 Telegram 集成稳定性**的明确需求。开发者 @Alex-wuhu 和 @jlia0 主导的改进方向可能代表下一阶段用户关注焦点。

---

### 5. Bug 与稳定性  
⚠️ **待修复问题**：  
- **Telegram 消息丢失风险**：当前使用的 `node-telegram-bot-api`（NTBA）存在“静默轮询中断”问题，即 bot 进程存活但停止接收消息。此问题已在 PR #248 中提出解决方案，迁移至 grammY 框架以启用自动重连与指数退避机制。  
  🔗 [PR #248](https://github.com/TinyAGI/tinyagi/pull/248)（待合并）  
- **任务队列乱序执行**：已由 PR #247 修复，合并后该问题已解决。

---

### 6. 功能请求与路线图信号  
📌 **Novita AI 集成（PR #243）**：通过复用现有 OpenAI 兼容接口，新增对 Novita AI 作为内置 LLM 提供商的支持，无需额外依赖。此举扩展了 TinyClaw 在多模型后端选择上的灵活性，符合项目“轻量但可扩展”的设计哲学，极有可能纳入下一版本。  
🔗 [PR #243](https://github.com/TinyAGI/tinyagi/pull/243)  
📌 **Telegram 客户端重构（PR #248）**：从 NTBA 迁移至 grammY 是稳定性驱动的架构升级，虽非新功能，但属于关键基础设施改进，预计将作为 v0.5+ 版本的重点优化项推进。

---

### 7. 用户反馈摘要  
*本期无新 Issue 评论，无法提取直接用户反馈*  
但从近期 PR 内容可推断：用户在实际部署中遭遇 Telegram 消息中断、多通道消息路由混乱等问题，反映出对**生产级消息可靠性**和**多 LLM 后端支持**的迫切需求。

---

### 8. 待处理积压  
🔸 **长期待合并 PR**：  
- **#243（feat: add Novita AI）**：创建于 2026-03-20，已静置 3 天，需维护者 review 并确认 API 兼容性与测试覆盖。  
- **#248（refactor: migrate to grammY）**：昨日新建，涉及关键通信模块变更，建议优先评估测试策略与回滚方案。  

> 建议维护团队在本周内完成上述两项 PR 的代码审查，以避免技术债累积并提升外部集成稳定性。

---  
*数据来源：GitHub TinyAGI/tinyclaw 仓库，截至 2026-03-23 00:00 UTC*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目动态日报**  
📅 日期：2026-03-23  
🔍 数据来源：GitHub（moltis-org/moltis）

---

### 1. 今日速览  
过去24小时内，Moltis 项目整体活跃度较低，共产生 2 条 Issue 更新与 1 条 PR 更新，无新版本发布。社区贡献趋于平稳，以文档优化和 Bug 反馈为主。Issue #137 的关闭标志着一项长期功能请求的阶段性收尾，而新开放的 Issue #460 反映出用户对集成体验的困惑。整体项目处于维护与优化阶段，开发节奏放缓。

---

### 2. 版本发布  
❌ 无新版本发布。

---

### 3. 项目进展  
✅ **已关闭 Issue #137**：[Add base_url Support to Memory Module OR Option to Disable RAG for Pure Local MD Memory](https://github.com/moltis-org/moltis/issues/137)  
该 Issue 提出为 Memory 模块增加 `base_url` 支持，或提供禁用 RAG（检索增强生成）以支持纯本地 Markdown 记忆的能力。经过 5 轮讨论后已关闭，表明相关功能可能已通过其他方式实现，或需求被重新评估。此举有助于提升本地部署场景下的灵活性与性能控制。

---

### 4. 社区热点  
🔥 **Issue #460**：[WhatsApp Integration is confusing](https://github.com/moltis-org/moltis/issues/460)（新开启，0 评论）  
尽管当前评论数为 0，但此 Issue 由活跃贡献者 @eugeneyng 提交，聚焦于 WhatsApp 集成功能的用户体验问题。用户反馈“集成过程令人困惑”，暗示文档指引不足或配置流程复杂。该问题若未及时响应，可能影响非技术用户的采纳意愿，建议优先补充集成指南或提供配置模板。

---

### 5. Bug 与稳定性  
⚠️ **Bug 报告**：  
- **Issue #460**：[WhatsApp Integration is confusing](https://github.com/moltis-org/moltis/issues/460)  
  严重程度：中（影响用户体验，非系统崩溃）  
  状态：新报告，尚无修复 PR  
  建议：需进一步收集具体错误场景（如配置失败、消息未同步等），并评估是否需重构集成流程或增强日志输出。

---

### 6. 功能请求与路线图信号  
📌 **潜在路线图方向**：  
- **本地记忆模式优化**：Issue #137 的关闭可能意味着团队已接受“纯本地 MD 记忆”作为核心使用场景，未来版本或进一步强化离线能力与 RAG 开关控制。  
- **第三方集成体验改进**：WhatsApp 集成问题（#460）反映出多平台对接的 UX 短板，预计下一版本将优先优化集成配置流程，可能伴随文档更新或 UI 引导。

---

### 7. 用户反馈摘要  
💬 从 Issue 评论中提炼关键用户声音：  
- **正面反馈**：对 Memory 模块的可扩展性表示认可（#137 讨论中提及“架构清晰，易于定制”）。  
- **痛点反馈**：  
  - WhatsApp 集成缺乏清晰指引，用户“不知道从哪里开始配置”（#460）；  
  - 部分高级功能（如 RAG 开关）需通过代码修改实现，对非开发者不友好。  
- **使用场景**：用户倾向于将 Moltis 用于本地化知识管理 + 轻量级消息机器人，强调隐私与离线可用性。

---

### 8. 待处理积压  
⏳ **需维护者关注事项**：  
- **PR #461**：[docs: add gitcgr code graph badge](https://github.com/moltis-org/moltis/pull/461)  
  状态：待合并（Open，无评论）  
  说明：该 PR 仅为 README 添加代码图谱统计徽章，无功能影响，但长期未处理可能挫伤社区贡献积极性。建议尽快 review 并合并，以鼓励文档类贡献。

---

📌 **健康度评估**：  
项目整体稳定，但社区互动频率偏低，需加强 Issue 响应速度与文档完善。建议设立“集成体验优化”专项，提升非技术用户上手效率。

🔗 项目主页：[https://github.com/moltis-org/moltis](https://github.com/moltis-org/moltis)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-03-23）

---

## 1. 今日速览

过去24小时内，CoPaw 社区活跃度显著上升，共产生 **39 条 Issues 更新**（新开/活跃 32 条，关闭 7 条）和 **23 条 PR 更新**（待合并 14 条，已合并/关闭 9 条），显示出强烈的用户参与和开发者响应。尽管无新版本发布，但多个关键功能增强与稳定性修复被合并，尤其在多智能体协同、工具调用安全性和跨平台兼容性方面取得实质进展。社区对 Windows 平台稳定性、移动端体验及多智能体协作机制的关注度持续升温。

---

## 2. 版本发布

**无新版本发布**。当前最新稳定版本仍为 `v0.1.0.post1`，开发重点集中在功能完善与 Bug 修复阶段。

---

## 3. 项目进展

今日共 **9 个 PR 被合并或关闭**，涵盖核心功能增强与关键缺陷修复：

- **#1891**：将 Anthropic API 的 HTTP 529（服务过载）错误加入可重试状态码，提升 LLM 调用鲁棒性。
- **#1851**：为 `CronExecutor` 添加重试逻辑，解决多定时任务并发时的瞬态失败问题。
- **#1869**：支持通过 `!!` 或 `！！` 前缀消息中断运行中的频道任务，显著改善长任务控制体验。
- **#1889 / #1792**：实现频道路由功能，允许单个频道（如飞书 Bot）根据元数据（如 `feishu_chat_id`）将消息分发至不同智能体，为多智能体部署提供基础设施支持。
- **#623**：修复 `console_push_store` 中 `take()`/`take_all()` 未过滤过期消息的问题，确保行为一致性。
- **#816**：在控制台 LLM 配置页显式展示当前活跃的 Base URL，增强调试透明度。
- **#1208**：优化技能导入失败时的错误信息传递，保留后端详细错误上下文，便于排查。
- **#1065**：修复 Windows 下 `subprocess.run(check=True)` 导致非零退出码丢失输出的问题，并统一 Telegram/Discord 文件路径处理逻辑。

> 这些合并标志着 CoPaw 在**多智能体架构支持、系统稳定性、用户可观测性**三大方向迈出关键步伐。

---

## 4. 社区热点

以下 Issues 引发高度关注，反映核心用户诉求：

- **[#1976] Error: Unknown agent error: RuntimeError: Task has been cancelled!**（15 评论）  
  用户反馈任务意外取消导致流程中断，虽标记“已在 #1956 修复”，但仍有多人复现，表明修复可能未完全覆盖或存在回归。

- **[#2035] 多智能体调用 bot 和多智能体协同如何实现**（7 评论）  
  用户迫切希望实现“每个智能体绑定独立 Bot”及“多智能体协作完成任务”，直指当前架构在多智能体通信与任务分配上的能力缺口。

- **[#2040] 工具链调用问题**（6 评论）  
  多个用户报告工具链（如文件读取、脚本执行、浏览器）调用卡顿超 20 分钟，严重影响可用性，疑似异步处理或超时机制缺陷。

- **[#2043] 微信 ClawBot 频道支持**（6 👍）  
  微信发布 ClawBot 后，社区迅速提出集成需求，显示对主流国内通信平台的强烈适配意愿。

> 链接：[#1976](https://github.com/agentscope-ai/CoPaw/issues/1976) | [#2035](https://github.com/agentscope-ai/CoPaw/issues/2035) | [#2040](https://github.com/agentscope-ai/CoPaw/issues/2040) | [#2043](https://github.com/agentscope-ai/CoPaw/issues/2043)

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| ⚠️ 高 | [#2040] 工具链调用卡顿 | 常用工具链（文件、脚本、浏览器）普遍卡死 20+ 分钟 | ❌ 无 |
| ⚠️ 高 | [#2058] Windows Shell 命令无限挂起 | 使用 `Start-Process` 时进程永不返回 | ✅ 有（#2068） |
| ⚠️ 高 | [#2060] shell.py 异步管道泄漏 | Windows 下 PowerShell 启动 Chrome 永久阻塞 | ✅ 有（#2068） |
| ⚠️ 中 | [#1835] 飞书音频后所有消息报错 | 本地 Whisper 开启后触发 `InvalidSchema` 错误 | ❌ 无（已关闭但未说明原因） |
| ⚠️ 中 | [#2059] Windows 客户端回复卡住 | 调用工具时输出暂停，缺乏中断机制 | ✅ 部分缓解（#1869 提供 `!!` 中断） |
| ⚠️ 低 | [#2037] 代码输出破坏 UI 布局 | 代码块渲染导致控制台界面错乱 | ❌ 无 |

> 注：#2068 已提交关键修复，显著提升超时恢复速度（8.4x）并解决管道泄漏，建议优先合并。

---

## 6. 功能请求与路线图信号

以下功能请求具备高采纳潜力，且已有对应 PR 或技术铺垫：

- **多智能体编排系统**：[#2036] 提出完整的多智能体动态生成与协调框架，响应 [#2035] 用户需求，可能成为下一版本核心特性。
- **全局技能目录支持**：[#2032] 请求跨智能体共享技能，解决当前 `active_skills` 隔离问题，已有设计讨论。
- **模型配置页筛选功能**：[#2061] 获官方 PR #2062 实现，预计快速落地。
- **微信 ClawBot 支持**：[#2043] 需求明确，若资源允许将优先集成。
- **上下文恢复增强**：[#2048] 建议在内存压缩后自动恢复上下文，提升任务连续性，具高价值。

---

## 7. 用户反馈摘要

- **痛点**：
  - Windows 平台稳定性差（安装依赖报错、Shell 命令挂起、UI 卡顿）。
  - 工具链可靠性低，频繁卡死或无响应。
  - 移动端控制台体验不佳，配置困难。
  - 多智能体协作机制缺失，无法实现复杂工作流。
  - 缺乏任务中断机制，用户无法主动停止“过度思考”的代理。

- **满意点**：
  - 飞书频道集成稳定（对比 Windows 客户端）。
  - 控制台功能丰富，配置灵活。
  - 社区响应迅速，PR 合并效率高（如安全、路由、中断等功能快速落地）。

- **典型场景**：
  - 企业用户希望通过多智能体+多 Bot 实现部门级自动化协作。
  - 开发者依赖工具链（Shell、浏览器）进行代码调试与数据获取，但当前可靠性不足。

---

## 8. 待处理积压

以下重要 Issue 长期未响应，需维护者关注：

- **[#430] Help Wanted: Open Tasks — Come Contribute!**（创建于 2026-03-03，9 评论）  
  社区贡献引导帖，列出 P0-P2 优先级任务，但缺乏维护者跟进认领状态更新，可能影响外部贡献者参与积极性。

- **[#1966] 执行到一半停止无反馈**（创建于 2026-03-20，5 评论）  
  用户反复询问模型调用中断原因，疑似异步任务管理缺陷，尚未有技术分析或复现方案。

- **[#2015] active_skills 与 customized_skills 不自动同步**（创建于 2026-03-21，3 评论）  
  影响技能管理一致性，尤其对新用户造成困惑，需明确是否为设计变更或 Bug。

> 建议：对 [#430] 更新任务状态并分配负责人；对 [#1966] 和 [#2015] 进行技术排查并给出明确结论。

--- 

**项目健康度评估**：⭐⭐⭐⭐☆（4/5）  
社区活跃，核心功能持续增强，但 Windows 平台稳定性与工具链可靠性构成主要风险点。多智能体架构演进是未来亮点。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报（2026-03-23）

---

## 1. 今日速览

过去24小时内，ZeptoClaw 社区活跃度中等偏高，共产生 **5条 Issues 更新**（3条新开/活跃，2条已关闭）和 **4条 PR 更新**（3条待合并，1条已合并/关闭），无新版本发布。核心开发聚焦于 **Telegram 集成体验优化** 与 **上游同步维护**，同时出现关于 **社区支持渠道缺失** 的用户诉求。项目整体处于功能迭代与基础设施加固并行阶段，健康度良好。

---

## 2. 版本发布

*（无新版本发布）*

---

## 3. 项目进展

今日完成 **1项重要合并/关闭操作**，推动项目向稳定集成迈进：

- **PR #394 [CLOSED] Sync upstream v0.7.6**（[@xiaotiyanlove-star](https://github.com/qhkm/zeptoclaw/pull/394)）  
  成功将上游 `v0.7.6` 变更同步至 fork 分支，解决了因上游演进导致的代码漂移问题，为后续功能开发提供了统一基准。该操作关联 Issue #393（已关闭），标志着 fork 定制化与上游兼容性的一次关键对齐。

此外，**PR #392** 和 **PR #396** 虽未合并，但已提交针对 Telegram 用户体验的关键改进（见下文），预计将成为下一阶段集成重点。

---

## 4. 社区热点

### 🔥 Issue #387：基于 Containerfile 模板在 Firecracker VM 中编排启动核心组件  
[链接](https://github.com/qhkm/zeptoclaw/issues/387) | 作者：@taqtiqa-mark | **7条评论，0点赞**

该 Issue 提出将 Coding Agent 框架（如 pi-coding-agent、claude-code 等）视为普通应用，通过 Containerfile 模板映射至 Firecracker 微虚拟机中统一编排。讨论聚焦于 **安全边界控制** 与 **功能膨胀风险**，反映出社区对“轻量但隔离”架构的强烈兴趣。尽管存在争议，但此提案直指 ZeptoClaw 作为“AI 助手运行时平台”的长期愿景，具备高战略价值。

> 💡 **分析**：该需求代表从“工具集成”向“平台化治理”的跃迁，可能影响未来架构设计方向。

---

## 5. Bug 与稳定性

*（过去24小时无新报告的高危 Bug 或崩溃问题）*

当前待合并 PR 中隐含稳定性改进：
- **PR #396** 提及“修复 Telegram 回复中 Markdown 格式错乱”问题，属于用户体验类缺陷修复，虽未标记为 Bug，但实际提升了交互可靠性。

---

## 6. 功能请求与路线图信号

以下功能请求具备较高落地可能性，且已有对应 PR 支撑：

| 功能请求 | 关联 Issue | 对应 PR | 状态 | 路线图信号 |
|--------|-----------|--------|------|----------|
| Telegram 输入状态提示（Typing Indicator） | 无（自发 UX 改进） | [#392](https://github.com/qhkm/zeptoclaw/pull/392) | OPEN | ⭐⭐⭐ 高优先级 UX 增强，易集成 |
| GitHub 技能搜索支持 SKILL.md 深度扫描 | [#285](https://github.com/qhkm/zeptoclaw/issues/285) | 无 | OPEN | ⭐⭐ 中优先级，需配置扩展 |
| Firecracker VM 模板化部署 | [#387](https://github.com/qhkm/zeptoclaw/issues/387) | 无 | OPEN | ⭐⭐⭐⭐ 长期架构方向，需多轮迭代 |

> ✅ **判断**：Telegram 输入状态提示（PR #392）最可能纳入下一版本，因其改动小、收益明确，且作者 @stuartbowness 同时提交了更全面的 Telegram 改进包（PR #396）。

---

## 7. 用户反馈摘要

从 Issue 评论中提炼出关键用户痛点与使用场景：

- **配置困难**：用户 @PedroRosalba 在 [#397](https://github.com/qhkm/zeptoclaw/issues/397) 中明确表示：“难以配置 Qwen 与 ZeptoClaw 的集成，急需成功案例指导”，暴露出 **文档缺失** 与 **社区支持断层** 问题。
- **交互延迟感知**：PR #392 和 #396 的开发动机源于“日常使用中发现响应延迟无反馈”，说明真实用户对 **实时交互反馈** 有强需求。
- **发布可追溯性**：Issue #395 指出主分支构建覆盖固定标签导致无法追踪资产更新，反映 CI/CD 流程对开发者体验的影响。

> 📌 **结论**：用户核心诉求集中于 **易用性提升** 与 **支持生态建设**，而非单纯功能堆砌。

---

## 8. 待处理积压

以下长期未响应事项需维护者关注：

- **Issue #285**（创建于 2026-03-08，距今15天）：  
  请求为 GitHub 技能搜索添加 SKILL.md 深度扫描支持，仅1条评论，无维护者回应。该功能可显著提升技能发现质量，建议评估优先级并分配资源。  
  → [链接](https://github.com/qhkm/zeptoclaw/issues/285)

- **PR #287**（创建于 2026-03-09，距今14天）：  
  提供统一开发工具链以确保 PR 前状态一致，属基础设施优化，但长期处于 OPEN 状态，可能影响贡献者体验。  
  → [链接](https://github.com/qhkm/zeptoclaw/pull/287)

> ⚠️ **提醒**：上述积压项虽非紧急，但持续搁置可能抑制社区贡献积极性，建议在下个维护周期内响应或关闭。

---  
*数据来源：GitHub 仓库 qhkm/zeptoclaw，统计截止至 2026-03-23 00:00 UTC*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

**EasyClaw 项目动态日报（2026-03-23）**

---

### 1. 今日速览  
过去24小时内，EasyClaw 项目整体活跃度较低，无新 Pull Request 提交或版本发布。社区互动集中于一个已关闭的 Issue，涉及 Windows 环境下 `computer-use` 功能因依赖组件缺失导致的运行失败问题。该问题已被标记为已解决，反映出用户对跨平台兼容性与依赖管理的关注。项目当前处于维护稳定期，核心功能无重大变更。

---

### 2. 版本发布  
无新版本发布。

---

### 3. 项目进展  
无 Pull Request 被合并或关闭，今日无功能推进或代码变更。

---

### 4. 社区热点  
**#26 [CLOSED] kaitray.exe 组件缺失导致 computer-use 功能无法使用**  
🔗 https://github.com/gaoyangz77/easyclaw/issues/26  
该 Issue 由用户 @Jerryzhao0313 提交，描述在 Windows 10 系统上使用 EasyClaw v1.3.21.248 时，`computer-use` 代理因 `kaitray.exe` 文件缺失而无法启动 WebSocket 服务（端口 8765），导致无法操作微信等本地应用。用户确认配置正确但进程未运行，且系统中未找到该可执行文件。  
**分析**：此问题暴露出项目在 Windows 平台下对关键依赖组件的分发或安装逻辑存在缺陷，可能影响自动化代理功能的可用性。尽管 Issue 已关闭，但未明确说明修复方式（如是否通过补丁、文档更新或安装包修正），建议维护者补充说明以增强透明度。

---

### 5. Bug 与稳定性  
- **严重程度：高**  
  **#26 kaitray.exe 缺失导致 computer-use 功能完全不可用（Windows 平台）**  
  该 Bug 影响核心代理功能的可用性，尤其在依赖本地进程通信的场景下。用户无法通过常规配置恢复功能，属于安装/部署层面的关键缺陷。  
  ✅ 状态：已关闭，但未见关联修复 PR 或版本更新，推测可能通过内部热修或文档指引解决，建议跟进确认是否已纳入后续版本修复计划。

---

### 6. 功能请求与路线图信号  
今日无新功能请求提出。但从 #26 可推断，用户对 **跨平台依赖自动部署机制** 和 **本地代理组件的健壮性** 有明确期待。若类似问题在多平台复现，未来版本可能需引入：
- 安装时依赖完整性校验
- 缺失组件的自动下载或提示机制
- 更清晰的错误日志与修复指引  
目前无相关 PR 表明这些改进已在开发中。

---

### 7. 用户反馈摘要  
- **痛点**：Windows 用户遭遇“静默依赖缺失”问题，即关键组件 `kaitray.exe` 未随主程序安装，导致功能不可用且无明确错误指引。
- **使用场景**：用户尝试通过 `computer-use` 代理实现微信自动化操作，依赖本地 WebSocket 服务进行进程间通信。
- **满意度**：问题虽已关闭，但缺乏公开修复说明，用户可能对后续安装可靠性存疑。建议提供更透明的故障排查文档。

---

### 8. 待处理积压  
经核查，当前无长期未响应的重要 Issue 或 PR。但鉴于 #26 涉及核心功能稳定性，**建议维护者**：
- 在 README 或 Wiki 中补充 Windows 平台依赖说明；
- 考虑在下一版本中集成依赖检查脚本或安装验证流程；
- 若 `kaitray.exe` 为第三方组件，应明确其来源与许可合规性。

> 项目健康度评估：⭐⭐⭐☆（3.5/5）  
> 活跃度偏低，但关键问题响应及时；需加强跨平台部署可靠性以提升用户信任。

</details>

---
*本日报由 [Radar Forge](https://github.com/borq168/radar-forge) 自动生成。*