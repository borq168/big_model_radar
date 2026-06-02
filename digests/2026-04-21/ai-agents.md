# OpenClaw 生态日报 2026-04-21

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-04-21 01:15 UTC

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

# OpenClaw 项目动态日报（2026-04-21）

---

## 1. 今日速览

OpenClaw 社区在24小时内保持高度活跃，共处理 **500条 Issues** 和 **500条 Pull Requests**，其中新开/活跃 Issue 323条、PR 待合并 348条，显示出强劲的开发与反馈节奏。尽管无新版本发布，但多个关键回归 Bug 被快速关闭（如网关崩溃、Telegram 轮询失效），且社区对跨平台支持（Linux/Windows Clawdbot）和模型兼容性（GPT-5.4、Gemini 标签泄漏）的关注度显著上升。整体项目健康度良好，响应迅速，但存在部分长期未决的稳定性问题需持续关注。

---

## 2. 版本发布

**无新版本发布**。最近一次稳定版本仍为 `v2026.4.15`，但多个修复已合并至主干，预计将在近期发布补丁版本。

---

## 3. 项目进展

今日合并/关闭的重要 PR 聚焦于**稳定性修复**与**平台兼容性增强**：

- ✅ **#66062** [`fix(daemon): ignore setlocal in Windows task parsing`](https://github.com/openclaw/openclaw/pull/66062)：修复 Windows 上 `openclaw gateway status` 误报服务异常的问题，提升 Windows 平台可靠性。
- ✅ **#57422** [`telegram: improve polling outage detection and recovery`](https://github.com/openclaw/openclaw/pull/57422)：增强 Telegram 通道在网络中断后的自动恢复能力，解决 #47458 中描述的“轮询死循环”问题。
- ✅ **#68067** [`fix(telegram): honor removeAckAfterReply for status reactions`](https://github.com/openclaw/openclaw/pull/68067)：修复 Telegram 状态反应未按配置清除的交互缺陷。
- ✅ **#68816** [`feat(moonshot): default to Kimi K2.6`](https://github.com/openclaw/openclaw/pull/68816)：将 Moonshot 默认模型升级至 Kimi K2.6，并启用 `thinking.keep` 参数以支持完整推理内容保留。
- ✅ **#66898** [`Windows Native Wrapper & Hardened Installer`](https://github.com/openclaw/openclaw/pull/66898)：推出 Windows 原生封装与加固安装程序，迈出跨平台桌面体验关键一步。

> 项目整体在**多平台支持**、**通道稳定性**和**模型适配**三个方向取得实质性推进。

---

## 4. 社区热点

### 🔥 高讨论度 Issues

| Issue | 主题 | 评论数 | 核心诉求 |
|------|------|--------|--------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows Clawdbot Apps | 88 | 强烈呼吁补齐 Linux 与 Windows 桌面端应用，对标 macOS 功能 |
| [#65867](https://github.com/openclaw/openclaw/issues/65867) | Gemini `<final>` 标签泄漏 | 7 | 用户升级后遭遇输出污染，影响多通道（WebUI/WhatsApp）体验 |
| [#68735](https://github.com/openclaw/openclaw/issues/68735) | GitHub Copilot GPT-5-mini 请求失败 | 5👍 | 模型配置看似生效但运行时拒绝，疑似 schema 变更未同步 |

> 社区核心诉求集中于：**跨平台客户端缺失**、**模型兼容性断裂**、**输出纯净度下降**。其中 #75 虽创建于年初，但近期互动激增，反映用户增长带来的平台覆盖压力。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重等级 | Issue | 描述 | 状态 |
|--------|-------|------|------|
| 🔴 **高** | [#48205](https://github.com/openclaw/openclaw/issues/48205) | 网关每 ~50 分钟自动重启（reason=none） | ✅ 已关闭，修复已合并 |
| 🔴 **高** | [#47458](https://github.com/openclaw/openclaw/issues/47458) | Telegram 轮询死循环，无法恢复 | ✅ 已关闭，#57422 提供修复 |
| 🟠 **中** | [#65603](https://github.com/openclaw/openclaw/issues/65603) | Azure Foundry 模型工具调用失败（回归） | 🟡 开放中，无 fix PR |
| 🟠 **中** | [#65867](https://github.com/openclaw/openclaw/issues/65867) | Gemini `<final>` 标签泄漏至消息 | 🟡 开放中，疑似解析层未过滤 |
| 🟢 **低** | [#37757](https://github.com/openclaw/openclaw/issues/37757) | 系统提示中 `IDENTITITY.md` 拼写错误（双 I） | 🟡 开放中，纯 cosmetic |

> 尽管多个高影响 Bug 已修复，但 **Azure 模型工具调用回归** 和 **Gemini 输出污染** 仍构成近期用户体验风险。

---

## 6. 功能请求与路线图信号

| 功能请求 | 关联 Issue/PR | 纳入可能性 |
|--------|---------------|----------|
| **Linux/Windows 桌面应用** | [#75](https://github.com/openclaw/openclaw/issues/75) + #66898（Windows 安装器） | ⭐⭐⭐⭐☆ 高（已有 Windows 实现雏形） |
| **MCP 协议原生支持** | [#34097](https://github.com/openclaw/openclaw/issues/34097) | ⭐⭐☆☆☆ 中（需求明确但无 PR） |
| **NO_REPLY 策略精细化** | #68644（PR 已开） | ⭐⭐⭐⭐⭐ 极高（维护者主导开发） |
| **Lab 实验性提示覆盖层** | #68627（PR 已开） | ⭐⭐⭐⭐⭐ 极高（路线图核心功能） |

> 维护团队正积极构建 **可配置化对话策略**（NO_REPLY）与 **模块化提示工程**（Lab），预示下一版本将强化企业级定制能力。

---

## 7. 用户反馈摘要

- **满意点**：  
  - 快速响应回归问题（如 Telegram 轮询、网关崩溃）  
  - 对 Kimi K2.6 等新模型及时适配（#68816）  
  - Windows 安装体验改善（#66898）

- **痛点**：  
  - “升级后 Gemini 回复带 `<final>` 标签，像调试信息”（#65867）  
  - “Azure 工具调用突然失效，回滚才正常”（#65603）  
  - “Linux 用户只能靠 CLI，没有像 macOS 那样的 Clawdbot”（#75）  
  - “插件安装会嵌套完整 openclaw，磁盘爆满”（#69514 已修复）

> 用户普遍认可技术响应速度，但对**跨模型一致性**和**平台平等性**提出更高期待。

---

## 8. 待处理积压

| Issue/PR | 类型 | 创建时间 | 积压原因 |
|---------|------|--------|--------|
| [#37623](https://github.com/openclaw/openclaw/issues/37623) | Bug | 2026-03-06 | GPT-5.4 配置可见但运行时 404，疑似后端未注册 |
| [#37834](https://github.com/openclaw/openclaw/issues/37834) | Bug | 2026-03-06 | 会话上下文 corruption 导致永久 400 循环，影响长会话 |
| [#40089](https://github.com/openclaw/openclaw/issues/40089) | Bug | 2026-03-08 | macOS 网关重启后服务“假死”，需手动干预 |
| [#35805](https://github.com/openclaw/openclaw/issues/35805) | Feature | 2026-03-05 | 治理文件漂移检测缺失，易导致 agent 行为偏离 |

> 建议维护者优先评估 #37623（模型支持断层）与 #37834（会话状态机健壮性），二者均属高频使用场景下的静默故障。

--- 

**报告生成时间**: 2026-04-21 UTC  
**数据来源**: OpenClaw GitHub Repository (github.com/openclaw/openclaw)

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向分析报告  
**报告时间：2026-04-21**

---

## 1. 生态全景

当前个人 AI 助手开源生态呈现 **高活跃度、强分化、重体验** 的态势。主流项目普遍聚焦于多通道集成（Telegram/钉钉/企业微信）、模型兼容性（GPT-5.4/Kimi K2.6/Gemini）与本地部署能力（Ollama/Whisper.cpp），反映出从“原型验证”向“生产可用”的转型趋势。跨平台支持（尤其是 Linux/Windows 桌面端）和配置一致性成为用户核心痛点，而 MCP 协议、WASM 沙箱、自进化代理等架构演进方向正被多个项目同步探索。

---

## 2. 各项目活跃度对比

| 项目 | Issues（今日） | PR（今日） | 新版本发布 | 健康度评估 |
|------|----------------|------------|-------------|-------------|
| **OpenClaw** | 500（323 新开/活跃） | 500（348 待合并） | ❌ | ⭐⭐⭐⭐☆（响应快，跨平台压力大） |
| **NanoBot** | 12（5 新开） | 51（30 已合并） | ❌ | ⭐⭐⭐⭐（性能优化密集，架构稳健） |
| **Zeroclaw** | 44（23 新开） | 50（22 已合并） | ❌ | ⭐⭐⭐⭐☆（微内核转型有序，RFC 驱动） |
| **PicoClaw** | 13 | 114（8 已合并） | ✅ nightly | ⭐⭐⭐（v0.2.6 回归严重，风险高） |
| **NanoClaw** | 1 | 25（8 已合并） | ❌ | ⭐⭐⭐⭐（功能集成快，配置一致性待修） |
| **IronClaw** | 50 | 50（15 已合并） | ❌ | ⭐⭐⭐⭐（Engine V2 推进，Web 稳定性提升） |
| **LobsterAI** | 1 | 50（28 已合并） | ❌ | ⭐⭐⭐⭐（企业 IM 集成强，UI 体验优） |
| **TinyClaw** | 0 | 1（1 已合并） | ❌ | ⭐⭐⭐（维护稳定，创新放缓） |
| **Moltis** | 9（关闭） | 17（12 已合并） | ✅ `20260420.02` | ⭐⭐⭐⭐⭐（自进化代理突破，生态整合强） |
| **CoPaw** | 41（27 新开） | 50（32 已合并） | ✅ `v1.1.3-beta.1` | ⭐⭐⭐⭐（插件系统成熟，迁移问题待解） |
| **ZeptoClaw** | 0 | 0 | ❌ | ⭐（静默） |
| **EasyClaw** | 0 | 0 | ✅ `v1.8.0` | ⭐⭐⭐（文档优化为主，开发停滞） |

> 注：健康度综合考量响应速度、Bug 修复效率、架构清晰度与社区反馈。

---

## 3. OpenClaw 在生态中的定位

**优势**：  
- **规模最大**：日处理 500+ Issues/PRs，社区反馈密度远超同类；  
- **通道覆盖最全**：支持 Telegram/WhatsApp/DingTalk/飞书等 10+ 通道，且持续修复轮询、认证等底层问题；  
- **模型适配最快**：率先集成 Kimi K2.6、修复 Gemini 标签泄漏，响应 LLM 生态变化敏捷。

**技术路线差异**：  
- 采用 **中心化网关 + 多通道适配器** 架构（vs. NanoBot 的轻量 Agent 循环或 Zeroclaw 的微内核）；  
- 强调 **企业级可配置性**（如 NO_REPLY 策略、Lab 提示覆盖层），而非 Moltis 的“自进化”或 IronClaw 的 TEE 安全执行。

**社区规模**：  
- GitHub 互动量（Issues/PRs）约为第二名 CoPaw 的 2 倍，用户基数显著领先，但 Windows/Linux 桌面端缺失制约非技术用户增长。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|--------|--------|--------|
| **跨平台桌面客户端** | OpenClaw (#75)、NanoClaw（Signal v2）、EasyClaw（macOS Gatekeeper） | 补齐 Linux/Windows GUI，对标 macOS 体验 |
| **本地模型与隐私优先** | NanoClaw（Ollama/Whisper）、PicoClaw（openai_compat）、LobsterAI（SQLite 备份） | 减少云端依赖，支持离线部署 |
| **MCP 协议深度集成** | NanoBot（ImageContent/重试）、Zeroclaw（WASM 桥接）、Moltis（SSE 兼容） | 统一工具调用标准，提升外部服务兼容性 |
| **配置一致性与错误提示** | OpenClaw（Gemini 标签泄漏）、NanoClaw（ASSISTANT_NAME 失效）、TinyClaw（heartbeat 配置） | 环境变量、配置文件、WebUI 三端行为一致 |
| **人机协作边界控制** | NanoBot（#3322 人类接管）、IronClaw（会话持久化）、CoPaw（Plan mode） | 支持暂停、接管、多代理任务移交 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键点 |
|------|--------|--------|--------------|
| **OpenClaw** | 多通道企业集成 | 运维/客服团队 | 中心化网关 + 插件化通道 |
| **NanoBot** | 轻量高性能代理 | 开发者/极客 | 有界队列 + 批处理 I/O + ProfilingHook |
| **Zeroclaw** | 安全沙箱与微内核 | 安全敏感型组织 | WASM 插件 + SSRF 防护 + 配置统一化 |
| **Moltis** | 自进化与多模态 | 前沿研究者 | 自主技能创建 + 记忆生命周期管理 |
| **CoPaw** | 插件生态与备份 | 中小企业 | 控制台插件系统 + 数据恢复机制 |
| **LobsterAI** | 企业 IM 深度集成 | 钉钉/飞书用户 | 扫码配置 + 群消息获取 |
| **IronClaw** | TEE 安全执行 | 金融/政务场景 | NEAR AI TEE + WASM 凭证注入 |

---

## 6. 社区热度与成熟度

- **快速迭代阶段**（高 PR/Issue 密度）：  
  **OpenClaw、CoPaw、Moltis、IronClaw** —— 日均处理 40+ PRs，功能与修复并行，适合早期采用者。
  
- **质量巩固阶段**（低 Issue，高合并率）：  
  **NanoBot、Zeroclaw、LobsterAI** —— 聚焦性能优化、测试覆盖与架构清理，适合生产环境部署。
  
- **维护/静默阶段**：  
  **TinyClaw、EasyClaw、ZeptoClaw** —— 以文档更新或关键修复为主，创新节奏放缓。

---

## 7. 值得关注的趋势信号

1. **“配置即契约”成为刚需**：  
   多个项目（OpenClaw、NanoClaw、TinyClaw）暴露出环境变量、配置文件、WebUI 行为不一致问题，预示下一代框架需内置 **配置一致性校验引擎**。

2. **本地优先（Local-First）架构崛起**：  
   Ollama、Whisper.cpp、SQLite 备份等特性被广泛集成，反映用户对 **数据主权与离线能力** 的强烈需求，开发者应优先考虑本地模型支持。

3. **MCP 从协议走向实践**：  
   不仅是工具调用标准，更向 **安全执行（WASM）、流式传输（SSE）、图像渲染** 扩展，建议开发者跟进 MCP 生态工具链。

4. **自进化代理进入工程化阶段**：  
   Moltis 的“记忆 consolidation”与 CoPaw 的“Plan mode”表明，**长期上下文管理与会话总结** 正从论文走向落地，是差异化竞争关键。

5. **跨平台体验差距拉大**：  
   macOS 支持普遍完善，但 Linux/Windows 桌面端严重滞后，**填补跨平台 GUI 缺口** 将是获取大众用户的核心突破口。

> **对开发者的建议**：优先选择具备活跃社区、明确路线图与配置可靠性的项目（如 OpenClaw、Moltis、CoPaw）；若追求极致性能或安全，可评估 NanoBot 或 Zeroclaw；避免依赖静默项目（如 ZeptoClaw）进行关键业务开发。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-04-21）

---

## 1. 今日速览

NanoBot 在过去24小时内表现出**高活跃度**，共处理 **51 条 PR 更新**（30 条已合并/关闭，21 条待合并）和 **12 条 Issues 更新**（7 条已关闭，5 条新开）。社区贡献者集中提交了多项性能优化与稳定性修复，尤其围绕 Agent 循环、消息总线、MCP 集成等核心模块。尽管无新版本发布，但底层架构持续加固，项目整体处于**稳健演进阶段**。

---

## 2. 版本发布

**无新版本发布**。当前开发重点集中于性能优化与 Bug 修复，未触发正式版本迭代。

---

## 3. 项目进展

今日共 **30 条 PR 被合并或关闭**，主要推进以下关键改进：

- **Agent 性能与响应能力增强**：通过 #3158 系列拆分 PR（#3180–#3184）实现多项底层优化，包括：
  - 消息总线队列有界化（#3180、#3202），防止内存无限增长；
  - 历史写入批处理与缓存机制（#3181、#3182），显著降低 I/O 开销；
  - 首 token 流式优先调度（#3183），提升用户体验；
  - 新增 ProfilingHook 基础设施（#3184、#3204），支持迭代耗时监控。
- **MCP 集成稳定性提升**：
  - 支持 MCP ImageContent 正确渲染（#2416）；
  - 增加 MCP 连接瞬态错误自动重试机制（#3338）；
  - 防止 MCP 依赖任务误派发给无权限子代理（#2523）。
- **关键 Bug 修复**：
  - 修复 `/stop` 命令导致上下文丢失问题（#3299，对应 Issue #2966）；
  - 修复 Anthropic 尾部 assistant 消息引发预填错误（#3297）；
  - 强化 exec 命令防护，防止 shell 展开绕过（#3240）。

> 整体来看，项目在**系统健壮性、性能效率与多通道兼容性**方面迈出重要步伐。

---

## 4. 社区热点

### 🔥 高讨论度 Issues

- **[#2389] OpenWebUI 作为官方渠道？**（3 评论）  
  用户 @TGRRRR 提议将 OpenWebUI 纳入 NanoBot 官方支持渠道，反映社区对**统一前端接入层**的需求上升。该 Issue 已开放逾一个月，近期再次活跃，表明生态整合诉求增强。  
  🔗 https://github.com/HKUDS/nanobot/issues/2389

- **[#3322] 人类接管：支持通过用户请求或 /bot on/off 暂停机器人**（0 评论但高价值）  
  @CHM5 提出在 WhatsApp 等场景中需临时暂停自动回复，避免人机混淆。此需求直指**生产环境可用性痛点**，具备较高优先级。  
  🔗 https://github.com/HKUDS/nanobot/issues/3322

### 💬 高互动 PR（虽无评论但代表重大投入）

- **#3158 系列性能优化 PR**（共 5 个，均由 @mohamed-elkholy95 提交）  
  虽无社区评论，但代码审查严格、拆分精细，体现核心维护者对性能的深度投入。这些变更将直接影响数千行 Agent 循环逻辑，是近期最重要技术演进。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 |
|--------|------|------|------|
| ⚠️ 高 | [#3328] DeepSeek "failed to deserialize" 错误 | 升级至 0.1.5.post1 后 Telegram 消息解析失败，影响核心通信 | 🟡 未修复（需排查序列化兼容性） |
| ⚠️ 高 | [#3324] Windows 下 chrome-devtools-mcp 连接失败（WinError 193） | %1 不是有效 Win32 应用程序，疑似 npx 路径或架构不匹配 | 🟡 未修复（平台特定问题） |
| ⚠️ 中 | [#3315] Telegram 消息过长导致发送失败 | 流式输出合并为单条超长消息触发渠道限制 | ✅ 已关闭（可能已有缓解措施） |
| ⚠️ 中 | [#3319] Cron 任务泄露工具提示至用户频道 | 未传递 `on_progress` 导致中间状态外泄 | ✅ 已关闭（逻辑修正） |
| ⚠️ 低 | [#3073] Agent 陷入 history.jsonl 无限读取循环 | 特定查询触发重复 `read_file` 调用 | ✅ 已关闭（可能已优化历史检索逻辑） |

> 注：[#3328] 和 [#3324] 为今日新增高优先级 Bug，建议维护者优先响应。

---

## 6. 功能请求与路线图信号

| 功能请求 | 关联 Issue | 已有 PR？ | 纳入可能性 |
|--------|-----------|----------|----------|
| **人类接管 / 暂停机制** | #3322 | ❌ 无 | ⭐⭐⭐⭐（生产刚需，易实现） |
| **QQ 渠道流式传输支持** | #3333 | ❌ 无 | ⭐⭐⭐（防封号，提升体验） |
| **MCP 根级通知支持** | #3326 | ❌ 无 | ⭐⭐（需协议扩展） |
| **OpenWebUI 官方集成** | #2389 | ❌ 无 | ⭐⭐⭐（生态扩展方向） |
| **子代理任务管理工具** | — | ✅ #3303（spawn_status/cancel） | ✅ 已推进 |

> 信号分析：社区强烈关注**人机协作边界控制**（如暂停、接管）和**多通道体验一致性**（如 QQ 流式），这两类需求极可能纳入 v0.2 路线图。

---

## 7. 用户反馈摘要

- **痛点**：
  - “LLM 返回 `messages parameter is illegal` 错误频率很高”（#3143）→ 反映飞书等渠道参数校验严格，需更健壮的 token 合并策略。
  - “/stop 后丢失整个回合上下文，严重损失进度”（#2966）→ 已由 #3299 修复，用户认可度高。
  - “QQ 非流式易被封号”（#3333）→ 渠道策略差异导致运营风险。

- **满意点**：
  - 对 Agent 性能优化（#3158 系列）普遍期待，认为“响应速度明显提升”。
  - MCP 图像内容支持（#2416）获开发者好评，“终于能正常显示二维码登录”。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 积压时长 | 建议 |
|------|------|------|--------|------|
| Issue | #2921 | MS Teams restart notify 配置暴露但未实现 | >14 天 | 需对齐原生 `/restart` 流程，避免配置误导 |
| Issue | #2389 | OpenWebUI 作为官方渠道？ | >30 天 | 长期讨论未决，建议明确立场或启动 POC |
| PR | #3202 | 有界入站队列防止内存增长 | 待合并（5 天） | 高价值稳定性修复，建议优先合入 |
| PR | #3303 | 子代理任务管理工具 | 待合并（2 天） | 增强 orchestration 能力，适合 v0.2 |

> 🔔 **维护者提醒**：#2921 和 #2389 已积压超两周，建议本周内响应；#3202 为关键内存安全修复，应加速合并。

--- 

**报告生成时间**：2026-04-21  
**数据来源**：GitHub HKUDS/nanobot 公开仓库

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报（2026-04-21）

---

## 1. 今日速览

过去24小时内，Zeroclaw 社区保持高度活跃，共产生 **44 条 Issues 更新**（新开/活跃 23 条，关闭 21 条）和 **50 条 PR 更新**（待合并 28 条，已合并/关闭 22 条），显示出强劲的开发与问题响应节奏。尽管无新版本发布，但多个关键架构 RFC 已获接受并进入实施阶段，标志着项目正从 v0.7.x 向 v1.0.0 微内核架构平稳过渡。核心团队聚焦于 **CI/CD 自动化治理、插件安全边界强化、配置系统统一化** 等基础设施升级，同时积极修复影响用户体验的关键 Bug（如网关路径工具注册失败、ACP 模式 JSON 解析错误等）。

---

## 2. 版本发布

**无新版本发布**。当前仍处于 v0.7.4 里程碑开发阶段（[#5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877)），预计将包含微内核拆分后的稳定性修复与配置迁移工具。

---

## 3. 项目进展

今日多个关键 PR 被合并或推进，显著提升系统稳定性与可维护性：

- **🔧 关键修复合并**：
  - [#5774](https://github.com/zeroclaw-labs/zeroclaw/pull/5774)（CLOSED）：修复网关路径下技能定义工具返回 "Unknown tool" 的问题，解决了 S1 级工作流阻塞 Bug。
  - [#5773](https://github.com/zeroclaw-labs/zeroclaw/pull/5773)（CLOSED）：修复 shell 命令 guard 在 `allowed_commands=["*"]` 时仍错误拦截合法语法的问题，消除安全风险误报。
  - [#5954](https://github.com/zeroclaw-labs/zeroclaw/pull/5954)（CLOSED）：抑制 ACP 模式下的 INFO 日志输出，避免客户端因非 JSON 日志弹出错误提示，改善集成体验。

- **🏗️ 架构演进推进**：
  - 多个 RFC（#5574、#5576、#5577、#5579、#5615、#5653）均已标记为 `status:accepted`，为 v1.0.0 微内核转型提供治理、文档、工程规范基础。
  - [#5912](https://github.com/zeroclaw-labs/zeroclaw/issues/5912) 开启 Phase 2 D2 WASM 执行桥接实现，配合 [#5919](https://github.com/zeroclaw-labs/zeroclaw/issues/5919)（环境变量白名单）与 [#5918](https://github.com/zeroclaw-labs/zeroclaw/issues/5918)（SSRF 防护），构建安全的插件运行时。

- **⚙️ 配置与运维增强**：
  - [#5950](https://github.com/zeroclaw-labs/zeroclaw/pull/5950) 实现对 `Vec<String>` 配置字段的支持，使 `zeroclaw config get/set/list` 可完整管理权限列表（如 `allowed_users`）。
  - [#5938](https://github.com/zeroclaw-labs/zeroclaw/pull/5938) 引入独立文件轮转与清理模块，解决 RuntimeTraceLogger 无限追加日志导致的磁盘占用问题。

---

## 4. 社区热点

以下 Issues/PRs 引发最多讨论，反映核心用户关切：

- **[#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642)**（7 评论，👍3）：请求提供“完整功能”Docker 镜像（启用 WhatsApp 等默认关闭特性），降低非技术用户部署门槛。**诉求本质**：平衡默认轻量化与开箱即用体验。
- **[#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849)**（4 评论）：提出“Dream Mode”——利用空闲时段进行记忆 consolidation 与反思学习。**信号**：用户对长期上下文记忆与自主进化能力有强烈期待，可能成为 v1.0 差异化特性。
- **[#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937)**（3 评论）：呼吁统一 providers 架构与 reqwest 客户端管理，解决代码重复与配置碎片化。**背后痛点**：多 provider 维护成本高，易引入不一致行为。

---

## 5. Bug 与稳定性

按严重程度排序的关键问题：

| 严重度 | Issue | 描述 | 状态 |
|--------|-------|------|------|
| **S0** | [#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) | 未文档化 `gateway.web_dist_dir` 与 `ZEROCLAW_WEB_DIST_DIR` 用法，可能导致数据丢失/安全风险 | OPEN（需文档补充） |
| **S1** | [#5815](https://github.com/zeroclaw-labs/zeroclaw/issues/5815) | llamacpp provider 忽略配置对象，回退到默认值（workflow blocked） | OPEN（👍2，社区关注） |
| **S1** | [#5941](https://github.com/zeroclaw-labs/zeroclaw/issues/5941) | 特定 call_id 下“No tool call found”错误，导致对话中断 | OPEN（新报，需复现） |
| **S1** | [#5949](https://github.com/zeroclaw-labs/zeroclaw/issues/5949) | ACP 模式未遵循 prompt spec（误读顶层 "prompt" 而非 "params.prompt"） | OPEN（agentic.nvim 集成阻塞） |
| **S2** | [#4842](https://github.com/zeroclaw-labs/zeroclaw/issues/4842) | `zeroclaw update` 在 aarch64（Raspberry Pi）下载错误架构二进制 | OPEN（影响 ARM 用户） |
| **S2** | [#4857](https://github.com/zeroclaw-labs/zeroclaw/issues/4857) | UI 添加 cron 任务被安全限制阻止，提示不明确 | OPEN（UX 问题） |
| **S2** | [#5948](https://github.com/zeroclaw-labs/zeroclaw/issues/5948) | ACP 模式非 JSON 日志导致编辑器报错 | OPEN（已由 #5954 部分缓解） |

> ✅ 注：S1 级问题 [#5348](https://github.com/zeroclaw-labs/zeroclaw/issues/5348)（Web dashboard 不可用）已于昨日关闭，相关修复应已合并。

---

## 6. 功能请求与路线图信号

结合 PR 进展，以下功能有望纳入近期版本：

- **高优先级**：
  - **Postgres 内存后端** ([#5946](https://github.com/zeroclaw-labs/zeroclaw/pull/5946))：提供可选持久化存储，满足生产环境需求。
  - **Groq provider 原生工具调用支持** ([#5932](https://github.com/zeroclaw-labs/zeroclaw/issues/5932))：修复 llama 模型 400 错误，恢复功能完整性。
  - **Webhook 重试机制** ([#5838](https://github.com/zeroclaw-labs/zeroclaw/pull/5838))：增强通道可靠性，已关联 #5761。

- **中长期路线图**：
  - **Dream Mode 记忆 consolidation** ([#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849))：若社区反馈持续积极，可能作为 v1.0 核心 AI 能力。
  - **Mattermost WebSocket 支持** ([#5902](https://github.com/zeroclaw-labs/zeroclaw/pull/5902))：扩展企业通信集成。
  - **Gemini SSE 流式响应** ([#5944](https://github.com/zeroclaw-labs/zeroclaw/pull/5944))：提升实时交互体验。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实声音：

- **痛点**：
  - “`zeroclaw update` 在树莓派上总是下载 x86_64 二进制，根本无法运行！” —— @SeungYong-Baek（[#4842](https://github.com/zeroclaw-labs/zeroclaw/issues/4842)）
  - “ACP 模式一堆 ‘invalid JSON’ 弹窗，根本没法用 agentic.nvim” —— @tidux（[#5948](https://github.com/zeroclaw-labs/zeroclaw/issues/5948)）
  - “为什么 WhatsApp 功能要默认关闭？新手根本不知道怎么开启！” —— 隐含于 [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642)

- **满意点**：
  - 对 RFC 流程表示认可：“终于有清晰的架构演进路线图了” —— 多 RFC 评论区共识。
  - 赞赏快速响应：“@RyanHoldren 两天就修好了工具注册问题，太棒了！” —— 社区口碑。

---

## 8. 待处理积压

以下重要事项长期未获响应，建议维护者优先关注：

- **[#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642)**（2026-03-15 创建，7 评论）：**完整 Docker 镜像需求**。影响新用户 onboarding，已有明确解决方案（构建时启用所有 feature flags），但缺乏官方镜像发布策略。
- **[#4842](https://github.com/zeroclaw-labs/zeroclaw/issues/4842)**（2026-03-27 创建，4 评论）：**ARM64 更新失败**。阻碍 Raspberry Pi 等边缘设备用户使用，需检查 CI 发布流水线是否生成并正确标记 aarch64 资产。
- **[#4857](https://github.com/zeroclaw-labs/zeroclaw/issues/4857)**（2026-03-27 创建，2 评论）：**UI 添加 cron 被阻**。安全策略缺乏透明性，需提供明确错误说明或配置指引。

> 💡 **建议**：为 [#3642] 设立专项任务，在 v0.7.4 或 v0.8.0 提供 `zeroclaw/full` Docker 镜像；为 [#4842] 验证 GitHub Release 资产是否包含 `aarch64-unknown-linux-gnu` 二进制。

--- 

**项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
活跃度高，架构转型有序，关键 Bug 响应迅速，但需加强边缘设备支持与新手引导。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-04-21）

---

## 1. 今日速览

PicoClaw 在过去24小时内保持高活跃度，共产生 **13条 Issues 更新** 和 **114条 PR 更新**，其中 **106个 PR 仍处于待合并状态**，表明开发节奏密集但合并流程审慎。社区反馈集中暴露了 v0.2.6 版本在 **provider 认证机制、WebUI 兼容性及配置解析** 方面的关键缺陷。尽管发布了 nightly 构建（v0.2.6-nightly.20260421.6421f146），但多个核心功能回归问题亟待修复，项目整体处于 **高开发强度、中高风险状态**。

---

## 2. 版本发布

✅ **Nightly Build 发布：v0.2.6-nightly.20260421.6421f146**  
🔗 [Release 链接](https://github.com/sipeed/picoclaw/releases/tag/nightly)

- 此为自动化 nightly 构建，基于 main 分支最新提交（6421f146）
- **警告**：该版本可能不稳定，不建议生产环境使用
- **变更范围**：包含自 v0.2.6 正式版以来所有未发布修复与重构（见 [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.6...main)）
- **注意**：此版本未解决当前报告的 Authorization header 丢失等关键 bug，用户需谨慎评估升级风险

---

## 3. 项目进展

今日 **8个 PR 被合并/关闭**，重点推进方向如下：

| PR | 类型 | 进展摘要 |
|----|------|--------|
| [#2343](https://github.com/sipeed/picoclaw/pull/2343)（已关闭） | Bug Fix | 升级 Antigravity 客户端至 v1.25.0，解决无法访问 Gemini 3.1 模型问题 |
| [#2584](https://github.com/sipeed/picoclaw/issues/2584)（已关闭） | Bug Fix | DeepSeek 提供程序 401 认证错误问题确认并标记为已修复 |
| [#2597](https://github.com/sipeed/picoclaw/issues/2597)（已关闭） | Bug Fix | 修复模型标识符含大写字母导致网关启动失败的问题 |

> 💡 尽管多个关键 bug 被关闭，但 **#2578（openai_compat Authorization header 丢失）仍为 OPEN 状态**，且影响广泛，构成当前最大稳定性风险。

---

## 4. 社区热点

🔥 **最活跃 Issue：[#2578](https://github.com/sipeed/picoclaw/issues/2578)**  
> “openai_compat provider never sends Authorization header in v0.2.6”

- **评论数：11** | **状态：OPEN** | **标签：bug, provider**
- **核心诉求**：用户报告无论通过环境变量、配置文件或 WebUI 设置 API Key，`openai_compat` 提供程序均不发送 `Authorization` 头，导致所有依赖认证的 LLM 调用失败。
- **影响范围**：涵盖 OpenAI、DeepSeek、Ollama（需 key）、vLLM 等主流兼容后端
- **社区情绪**：高度焦虑，多位用户表示“v0.2.6 完全不可用”，呼吁 hotfix

🔧 **关联 PR 分析**：  
虽存在多个 provider 层修复（如 [#1460](https://github.com/sipeed/picoclaw/pull/1460)、[#1683](https://github.com/sipeed/picoclaw/pull/1683)），但均未明确提及 Authorization 头处理逻辑，**尚无直接修复该问题的 PR**。

---

## 5. Bug 与稳定性

按严重程度排序：

| Issue | 严重性 | 状态 | 是否有 Fix PR |
|-------|--------|------|---------------|
| [#2578](https://github.com/sipeed/picoclaw/issues/2578) | 🔴 **Critical**（功能完全失效） | OPEN | ❌ 无 |
| [#2598](https://github.com/sipeed/picoclaw/issues/2598) | 🔴 **High**（WebUI 无法加载） | OPEN | ❌ 无 |
| [#2602](https://github.com/sipeed/picoclaw/issues/2602) | 🔴 **High**（OAuth 认证失败） | OPEN | ❌ 无（但 [#2163](https://github.com/sipeed/picoclaw/pull/2163) 可能相关） |
| [#2368](https://github.com/sipeed/picoclaw/issues/2368) | 🟠 **Medium**（Android 模型配置无效） | OPEN | ❌ 无 |
| [#2513](https://github.com/sipeed/picoclaw/issues/2513) | 🟠 **Medium**（网关启动异常） | OPEN | ✅ [#2594](https://github.com/sipeed/picoclaw/pull/2594) 提供日志增强 |

> ⚠️ **关键结论**：v0.2.6 存在 **系统性认证与配置解析缺陷**，建议维护者优先处理 #2578。

---

## 6. 功能请求与路线图信号

用户明确提出的新功能需求：

| Issue | 功能请求 | 是否已有相关 PR |
|-------|--------|----------------|
| [#2421](https://github.com/sipeed/picoclaw/issues/2421) | 添加 Email 作为原生通信通道 | ❌ 无 |
| [#1657](https://github.com/sipeed/picoclaw/pull/1657) | 添加 HTTP 消息入口端点（`/pico/message`） | ✅ 已提交，待合并 |
| [#1124](https://github.com/sipeed/picoclaw/pull/1124) | 集成 Affine 工作区文档检索 | ✅ 已提交，待合并 |
| [#2345](https://github.com/sipeed/picoclaw/pull/2345) | 添加 Engram MCP 记忆服务器集成指南 | ✅ 已提交，待合并 |

> 📌 **路线图预测**：  
> - **短期（v0.2.7）**：预计优先修复认证与 WebUI 问题，HTTP 入口端点可能随稳定性修复一并发布  
> - **中期**：Email 通道、Affine/Engram 集成有望纳入 v0.3.0 多模态通信路线图

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实用户声音：

- **痛点**：
  - “从 v0.2.4 升级到 v0.2.6 后，WebUI 完全打不开，控制台一片空白” —— @2023478
  - “API Key 明明填对了，但 DeepSeek 一直报 401，curl 测试却正常” —— @ldmonkey
  - “Android 端添加模型后始终显示‘未配置’，无法使用” —— @aquaratixc

- **使用场景**：
  - 树莓派 Zero W 上部署（Raspbian）用于家庭自动化代理
  - 企业内网通过 Telegram/DingTalk 接入私有 LLM
  - 开发者尝试集成 MCP 工具（如 Engram）实现长期记忆

- **满意度**：
  - 对 nightly 构建机制表示认可（“至少能快速验证修复”）
  - 对 LINE/QQ 通道稳定性改进（PR #1780、#2413）给予积极评价

---

## 8. 待处理积压

⚠️ **需维护者紧急关注**：

| Issue/PR | 积压时长 | 重要性 | 说明 |
|----------|--------|--------|------|
| [#2578](https://github.com/sipeed/picoclaw/issues/2578) | 4天 | 🔴 Critical | 影响所有 openai_compat 用户，无修复迹象 |
| [#2598](https://github.com/sipeed/picoclaw/issues/2598) | 1天 | 🔴 High | WebUI 失效阻碍配置与调试 |
| [#2313](https://github.com/sipeed/picoclaw/pull/2313) | 18天 | 🟠 Medium | 多用户支持与安全加固，代码量大但价值高 |
| [#1780](https://github.com/sipeed/picoclaw/pull/1780) | 33天 | 🟢 Low | QQ 通道稳定性优化，长期未合 |

> 🛎️ **建议**：维护团队应优先分配资源解决 #2578 和 #2598，避免用户大规模流失；同时考虑设立“v0.2.7-hotfix”分支集中处理回归问题。

---  
*数据来源：GitHub API 实时抓取（截至 2026-04-21T23:59:59Z）*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-04-21）

---

## 1. 今日速览

NanoClaw 在过去24小时内保持高度活跃的开发节奏，共处理 **25条 PR 更新**（其中8条已合并/关闭，17条待合并）和 **1条新 Issue 报告**，无新版本发布。社区贡献者集中推进了多项核心功能集成与基础设施优化，包括新增 Signal v2 通道适配器、本地语音转录技能、Ollama 本地模型支持等。项目整体处于快速迭代阶段，技术债清理与用户体验改进并行推进，健康度良好。

---

## 2. 版本发布

**无新版本发布**。当前主线仍为 v2 开发分支，多个关键功能正在通过 PR 集成中，尚未形成稳定发布候选。

---

## 3. 项目进展

今日有 **8个 PR 被合并或关闭**，标志着多项重要功能落地：

- **#1843**（已关闭）：引入 `codex` 作为新的 AgentProvider，通过 JSON-RPC 实现与 app-server 的通信，支持完整代理循环（含 MCP、流式响应、会话恢复等），提升了对非 Anthropic 模型生态的兼容性。  
  🔗 [PR #1843](https://github.com/qwibitai/nanoclaw/pull/1843)

- **#1859**（已关闭）：新增 `/add-ollama-provider` 技能，允许用户将任意代理组路由至本地 Ollama 实例，降低对云端 API 的依赖，增强隐私与离线能力。配套文档 `docs/ollama.md` 提供完整配置指南。  
  🔗 [PR #1859](https://github.com/qwibitai/nanoclaw/pull/1859)

- **#1864**（已关闭）：紧急修复 OpenCode SDK/CLI 版本兼容性问题，明确锁定 `opencode-ai@1.4.17` 以避免因自动升级至 1.14.x 导致的会话 API 不兼容（UUID → `ses_` 前缀变更）。  
  🔗 [PR #1864](https://github.com/qwibitai/nanoclaw/pull/1864)

- **#1869**（已关闭）：完成 v1→v2 迁移的5项关键行动项，包括删除废弃配置常量、重建时区格式化逻辑、优化桥接层职责划分等，显著提升代码可维护性。  
  🔗 [PR #1869](https://github.com/qwibitai/nanoclaw/pull/1869)

- **#1873**（已关闭）：将 `.env*` 变体文件（如 `.env.local`, `.env.test`）加入 `.gitignore`，防止敏感环境变量意外提交，强化安全实践。  
  🔗 [PR #1873](https://github.com/qwibitai/nanoclaw/pull/1873)

- **#1877**（已关闭）：重构频道参与策略，将 engagement policy 移至 router 层，并新增“未知频道注册流程”，需 owner 审批后方可接入，提升系统安全性与可控性。  
  🔗 [PR #1877](https://github.com/qwibitai/nanoclaw/pull/1877)

---

## 4. 社区热点

**#1870 [OPEN] ASSISTANT_NAME not applied when channel skills register groups**  
🔗 [Issue #1870](https://github.com/qwibitai/nanoclaw/issues/1870)  
作者 @ha7rock 报告：在 `.env` 中设置 `ASSISTANT_NAME` 后，机器人仍自称 “Andy”，未能正确应用自定义名称。根本原因在于 **channel skills 在注册群组时未传递 `--assistant-name` 参数**，导致 CLAUDE.md 文件生成逻辑忽略环境变量。  
👉 此问题影响用户体验一致性，尤其对多实例部署或品牌定制场景至关重要。目前尚无对应 fix PR，但已引发维护者关注，预计将在近期修复。

---

## 5. Bug 与稳定性

| 严重程度 | 问题描述 | 状态 |
|--------|--------|------|
| **高** | ASSISTANT_NAME 配置失效（#1870） | ✅ 已识别根因，待修复 |
| **中** | OpenCode SDK 自动升级导致会话 API 不兼容（#1864） | ✅ 已通过版本锁定修复 |
| **中** | 无凭证启动时产生残留状态（#1290） | 🔄 已有 PR 待合并，增加预检逻辑 |

> 注：#1290 提出的“预检凭证”机制可避免容器启动后因缺少密钥导致的半初始化状态，提升部署健壮性。

---

## 6. 功能请求与路线图信号

以下功能已通过 PR 进入实现阶段，预示未来版本方向：

- **本地语音转录支持**（#1876）：集成 `openai-whisper` 与 `whisper.cpp`，实现免费、离线的语音消息转文本功能，满足隐私敏感场景需求。  
- **Signal v2 原生通道适配器**（#1875）：放弃 bot API，改用 `signal-sdk` 实现完整 Signal 账户注册，支持端到端加密通信。  
- **YouTube 观看历史工具**（#1872）：尝试绕过 YouTube 已废弃的 history API，探索替代数据获取路径（如浏览器自动化或本地缓存解析）。  
- **预提交钩子标准化**（#1874）：引入 prettier、eslint、typecheck 和 vitest 钩子，推动代码质量自动化保障。

这些功能表明 NanoClaw 正从“基础代理框架”向“全功能个人 AI 操作系统”演进，强调本地化、多通道集成与开发体验优化。

---

## 7. 用户反馈摘要

从 Issue 及 PR 讨论中提炼关键用户诉求：

- **配置一致性**：用户期望环境变量（如 `ASSISTANT_NAME`）能在所有上下文中生效，当前行为不一致引发困惑（#1870）。
- **离线/本地优先**：强烈需求支持 Ollama、Whisper.cpp 等本地模型，减少对外部 API 依赖（#1859, #1876）。
- **部署友好性**：Unraid、Docker 用户关注凭证注入、挂载权限、错误提示清晰度等问题（#1090, #1290, #1817）。
- **安全边界控制**：对未知频道的自动接入存在担忧，需显式审批机制（#1877 已响应）。

整体满意度较高，但配置文档与错误提示仍有优化空间。

---

## 8. 待处理积压

以下长期未合并 PR 需维护者重点关注：

- **#1327**（Home Assistant MCP 集成）：自 2026-03-22 提交，提供智能家居控制能力，技术方案成熟，建议优先 review。  
  🔗 [PR #1327](https://github.com/qwibitai/nanoclaw/pull/1327)

- **#1624**（Matrix E2EE 通道 + 群组级模型配置）：自 2026-04-04 提交，功能完整但复杂度高，涉及核心通信层改动，需协调测试资源。  
  🔗 [PR #1624](https://github.com/qwibitai/nanoclaw/pull/1624)

- **#1260**（Tailscale API MCP 集成）：自 2026-03-19 提交，适用于远程 tailnet 监控，适合企业用户场景。  
  🔗 [PR #1260](https://github.com/qwibitai/nanoclaw/pull/1260)

> 建议设立专项 review 周期，避免优质贡献因响应延迟而流失。

---  
**报告生成时间：2026-04-21**  
数据来源：GitHub Repository `qwibitai/nanoclaw`

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-04-21）

---

## 1. 今日速览

IronClaw 项目在 2026-04-20 继续保持高强度开发节奏，**过去24小时共处理 50 条 Issues 和 50 条 PR**，活跃度处于高位。核心团队聚焦于 **Engine V2 质量提升、Web 网关稳定性修复与认证流程加固**，多个关键 PR 进入合并前阶段。尽管无新版本发布，但底层架构优化（如多租户配置化、技能工具链测试加固）显著推进了平台可维护性。Bug Bash 活动持续暴露 Web UI 与 Telegram 集成中的用户体验问题，QA 反馈密集。

---

## 2. 版本发布

**无新版本发布**。当前主干（`staging`）版本为 `v0.25.0`，团队正集中修复 Bug Bash 发现的问题，预计下一版本将包含 Engine V2 稳定性改进与 Web 网关体验优化。

---

## 3. 项目进展

今日 **15 个 PR 被合并/关闭**，重点进展包括：

- **Engine V2 质量基线建设**：通过 #2761（[链接](https://github.com/nearai/ironclaw/pull/2761)）构建 Milestone 0 回放与黑盒评估套件，为后续迭代提供客观质量度量。
- **Web 网关体验修复**：#2763（[链接](https://github.com/nearai/ironclaw/pull/2763)）修复斜杠命令自动补全与附件渲染；#2765（[链接](https://github.com/nearai/ironclaw/pull/2765)）稳定 LLM 配置热重载机制。
- **认证安全加固**：#2746（[链接](https://github.com/nearai/ironclaw/pull/2746)）统一 OAuth URL 构建方式，防止参数截断；#2754（[链接](https://github.com/nearai/ironclaw/pull/2754)）引入用户级密钥自服务管理与绑定审批机制。
- **测试套件修复**：#2744（[链接](https://github.com/nearai/ironclaw/pull/2744)）全面修复 staging 环境中的 12 个 Rust 测试失败与 14 个 Playwright E2E 失败，确保 CI 绿色。

> 项目整体向 **Engine V2 生产就绪**迈出关键一步，同时 Web 前端稳定性显著提升。

---

## 4. 社区热点

以下 Issues 引发最多讨论：

- **#2229**（[链接](https://github.com/nearai/ironclaw/issues/2229)）：Google Sheets OAuth 授权失败（Error 400），影响扩展功能可用性，已关联多个认证修复 PR（如 #2746）。
- **#2285**（[链接](https://github.com/nearai/ironclaw/issues/2285)）：页面刷新后聊天消息消失，暴露 Web UI 状态管理缺陷，团队已在 #2763 中部分修复。
- **#1537**（[链接](https://github.com/nearai/ironclaw/issues/1537)）：WASM 工具在 NEAR AI TEE 中凭证注入静默失败，属高危安全问题，尚未有明确 fix，需优先处理。

> 用户核心诉求：**跨渠道（Telegram/Web）会话一致性、第三方集成（Google/Linear）授权可靠性、WASM 安全执行保障**。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|---------------|
| **P1** | #2731（[链接](https://github.com/nearai/ironclaw/issues/2731)） | Telegram 消息被拆分为独立 Engine 对话，破坏线程连续性 | ❌ 无 |
| **P1** | #2580（[链接](https://github.com/nearai/ironclaw/issues/2580)） | Agent 声称已发送 Telegram 消息但实际未送达 | ❌ 无（已关闭但未验证） |
| **P1** | #2581（[链接](https://github.com/nearai/ironclaw/issues/2581)） | Agent 泄露内部推理链（chain-of-thought），违反输出规范 | ❌ 无 |
| **P2** | #2229（[链接](https://github.com/nearai/ironclaw/issues/2229)） | Google Sheets OAuth 400 错误 | ✅ #2746 部分修复 |
| **P2** | #2408（[链接](https://github.com/nearai/ironclaw/issues/2408)） | 输入超 200K token 限制导致上下文溢出 | ❌ 无 |
| **P2** | #1537（[链接](https://github.com/nearai/ironclaw/issues/1537)） | WASM 凭证注入失败（TEE 环境） | ❌ 无，高风险 |

> 建议优先处理 **#2731（Telegram 线程断裂）** 与 **#1537（WASM 安全漏洞）**。

---

## 6. 功能请求与路线图信号

- **多账户凭证支持**：#2642（[链接](https://github.com/nearai/ironclaw/issues/2642)）提出支持同一服务多个账户（如多 Gmail），契合企业用户场景，已有设计讨论，可能纳入 V0.26。
- **CLI 迁移工具**：#2728（[链接](https://github.com/nearai/ironclaw/pull/2728)）新增 `ironclaw migrate` 命令，支持从 OpenClaw/Hermes 导入，反映生态整合战略。
- **ClawHub 开关控制**：#2727（[链接](https://github.com/nearai/ironclaw/pull/2727)）通过 `CLAWHUB_ENABLED` 环境变量禁用公共技能库，满足私有化部署需求。

> 下一版本或将聚焦 **多租户、技能管理灵活性与 Engine V2 评估体系**。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实痛点：

- **“连接 Google Docs 后显示版本不匹配”**（#2729）：用户对 UI 一致性敏感，微小提示错误即引发困惑。
- **“内部系统文件暴露在 UI 中”**（#2584）：安全边界模糊，普通用户不应看到 `.env`、`node_modules` 等路径。
- **“Agent 建议用 Brave Search 而非内置 NEAR 搜索”**（#2732）：功能优先级混乱，用户期望默认使用平台原生能力。
- **“技能内容大小限制 64KB 不合理”**（#2636）：开发者抱怨技能包限制过严，阻碍复杂工具部署。

> 用户满意点：Telegram 集成流程整体顺畅（#2730 提及连接成功）；不满集中于 **状态持久化、权限边界与默认行为逻辑**。

---

## 8. 待处理积压

以下重要 Issue 长期未响应，需维护者关注：

- **#1537**（[链接](https://github.com/nearai/ironclaw/issues/1537)）：WASM 凭证注入失败（自 2026-03-21 起），涉及 TEE 安全模型，无 assignee。
- **#1595**（[链接](https://github.com/nearai/ironclaw/issues/1595)）：LLM 遗忘已激活的 Telegram 通道（自 2026-03-23 起），影响多轮对话体验。
- **#2323**（[链接](https://github.com/nearai/ironclaw/issues/2323)）：孤儿审批门控（线程删除后残留），可能导致任务卡死，设计层面需解决。

> 建议：为 #1537 分配安全团队 review，#2323 纳入 Engine V2 状态机重构计划。

--- 

**报告生成时间：2026-04-21**  
**数据来源：IronClaw GitHub 仓库（@nearai/ironclaw）**

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目动态日报**  
**日期：2026年4月21日**

---

### 1. 今日速览  
过去24小时内，LobsterAI 项目保持高活跃度，共处理 **50条 Pull Requests（PR）**，其中 **28条已合并/关闭**，**22条待合并**，显示出团队高效的代码集成节奏。Issue 方面仅新增 **1条开放问题**，无新版本发布。整体开发重心集中在 **UI体验优化、依赖升级、核心功能修复与多平台兼容性改进** 上，项目处于稳定迭代阶段。

---

### 2. 版本发布  
*（无新版本发布）*

---

### 3. 项目进展  
今日共 **28个 PR 被合并或关闭**，推动多项关键改进：

- **UI/UX 增强**：新增技能管理页与任务历史页的空状态占位图（[#1770](https://github.com/netease-youdao/LobsterAI/pull/1770)），并为协作者初始化流程添加骨架屏加载动画（[#1769](https://github.com/netease-youdao/LobsterAI/pull/1769)），显著提升用户等待体验。
- **核心功能修复**：
  - 修复钉钉 Agent 绑定配置问题（[#1757](https://github.com/netease-youdao/LobsterAI/pull/1757)）
  - 解决协作者会话停止后爬虫任务仍持续运行的严重逻辑缺陷（[#1756](https://github.com/netease-youdao/LobsterAI/pull/1756)）
  - 修复 OpenClaw 路径解析错误导致的 `exec-approvals.json` 加载失败（[#1758](https://github.com/netease-youdao/LobsterAI/pull/1758)）
- **系统健壮性提升**：
  - 实现 SQLite 数据库自动备份与恢复机制（[#1752](https://github.com/netease-youdao/LobsterAI/pull/1752)），防范数据损坏风险
  - 分离手动更新与自动预下载流程，避免误触发下载（[#1754](https://github.com/netease-youdao/LobsterAI/pull/1754)）
- **第三方集成优化**：钉钉连接器升级至 0.8.17，支持扫码配置 Bot（[#1761](https://github.com/netease-youdao/LobsterAI/pull/1761)）；禁用内置 `mcporter` 技能以避免 MCP 混淆（[#1755](https://github.com/netease-youdao/LobsterAI/pull/1755)）

> 项目在稳定性、用户体验与多平台兼容性方面取得实质性进展。

---

### 4. 社区热点  
**唯一新 Issue**：[#1751](https://github.com/netease-youdao/LobsterAI/issues/1751)  
> “让龙虾开启定时任务，发送的文案中，通知方式里文案不对”  
- **作者**：@xuzx-code  
- **状态**：开放，无评论，无点赞  
- **分析**：用户反馈定时任务通知文案显示异常，可能涉及国际化文本或配置映射错误。虽未引发广泛讨论，但属于直接影响用户通知体验的问题，建议优先排查通知模板逻辑。

---

### 5. Bug 与稳定性  
按严重程度排序：

| 问题描述 | 严重性 | 是否已修复 | 链接 |
|--------|--------|----------|------|
| 协作者会话停止后爬虫任务仍继续执行 | 高（功能失效） | ✅ 已修复（[#1756](https://github.com/netease-youdao/LobsterAI/pull/1756)） | — |
| OpenClaw `exec-approvals.json` 路径解析错误 | 高（功能阻断） | ✅ 已修复（[#1758](https://github.com/netease-youdao/LobsterAI/pull/1758)） | — |
| 钉钉 Agent 绑定配置异常 | 中 | ✅ 已修复（[#1757](https://github.com/netease-youdao/LobsterAI/pull/1757)） | — |
| 定时任务通知文案错误 | 中（UI/文案） | ❌ 待处理 | [#1751](https://github.com/netease-youdao/LobsterAI/issues/1751) |

---

### 6. 功能请求与路线图信号  
- **Agent 头像支持图片上传**（[#1760](https://github.com/netease-youdao/LobsterAI/pull/1760)）：从仅支持 Emoji 扩展至支持图片，增强个性化表达能力，预计将纳入下一版本。
- **Agent 人设预设功能**（[#544](https://github.com/netease-youdao/LobsterAI/pull/544)）：虽标记为 `stale`，但长期未关闭，反映用户对角色化 Agent 的强烈需求（如“技术专家”“虚拟女友”），可能作为未来 UX 差异化重点。
- **POPO 云文档与群消息获取支持**（[#1762](https://github.com/netease-youdao/LobsterAI/pull/1762)）：已合并，表明企业 IM 集成是核心方向。

> 路线图信号：**多模态 Agent 表达 + 企业 IM 深度集成 + 数据可靠性保障** 构成当前三大演进支柱。

---

### 7. 用户反馈摘要  
- **痛点**：定时任务通知文案错误（[#1751](https://github.com/netease-youdao/LobsterAI/issues/1751)）暴露本地化或配置映射缺陷。
- **满意点**：通过 PR 描述可见，用户对 **扫码配置钉钉 Bot**（[#1761](https://github.com/netease-youdao/LobsterAI/pull/1761)）、**骨架屏加载体验**（[#1769](https://github.com/netease-youdao/LobsterAI/pull/1769)）等改进持积极态度（隐含于 PR 目标）。
- **使用场景**：企业用户依赖钉钉/飞书集成；个人用户关注 Agent 个性化与任务控制可靠性。

---

### 8. 待处理积压  
- **长期未响应 PR**：[#544](https://github.com/netease-youdao/LobsterAI/pull/544)（Agent 人设选择功能，创建于 2026-03-20，标记 `stale` 但无维护者回应）  
  → 建议评估是否纳入 v2.1 路线图，或明确关闭理由。
- **待修复 Issue**：[#1751](https://github.com/netease-youdao/LobsterAI/issues/1751)（通知文案错误）  
  → 需前端/国际化模块负责人介入排查。

> 维护者提示：关注积压 PR 的社区价值，避免优质贡献流失。

---  
**报告生成时间：2026-04-21**  
数据来源：GitHub LobsterAI 仓库公开活动日志

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

**TinyClaw 项目动态日报**  
📅 日期：2026-04-21  
🔗 项目主页：[github.com/TinyAGI/tinyclaw](https://github.com/TinyAGI/tinyclaw)

---

### 1. **今日速览**  
过去24小时内，TinyClaw 项目整体活跃度较低，无新 Issue 提交或新版本发布，社区互动趋于平稳。唯一显著动作为一条 Pull Request 被合并，修复了心跳机制配置解析的关键缺陷。项目处于稳定维护阶段，核心功能持续优化，但新功能开发节奏放缓。

---

### 2. **版本发布**  
❌ 无新版本发布。

---

### 3. **项目进展**  
✅ **PR #276 已合并**：修复了 `heartbeat.enabled` 配置项在顶层 `settings.json` 中被忽略的问题。  
此前，尽管用户可在全局设置中显式禁用心跳（`"heartbeat": { "enabled": false }`），但该配置未被正确读取，导致 `startHeartbeat()` 仍被无条件调用，可能引发不必要的资源消耗或日志干扰。此修复确保配置层级语义一致性，提升了系统行为的可预测性与用户控制力。  
🔗 [PR #276](https://github.com/TinyAGI/tinyclaw/pull/276) | 作者：@ZVNC28

> 💡 此项修复虽小，但对依赖精细化配置的生产环境部署具有重要意义，体现了项目对配置可靠性的重视。

---

### 4. **社区热点**  
📉 无活跃讨论的 Issues 或 PRs。过去24小时无新评论、无表情反应（👍/👎等），社区互动处于静默状态。

---

### 5. **Bug 与稳定性**  
🐞 **已修复关键配置 Bug**：  
- **问题**：顶层 `heartbeat.enabled=false` 设置无效，心跳服务仍启动（#276）  
- **严重程度**：中（影响配置意图执行，可能导致资源浪费或日志污染）  
- **状态**：✅ 已修复并合并  
- **修复 PR**：[#276](https://github.com/TinyAGI/tinyclaw/pull/276)

> 无新增 Bug 报告，系统稳定性维持良好。

---

### 6. **功能请求与路线图信号**  
📌 无新功能请求提出。结合近期 PR 趋势（集中于配置解析、模块初始化逻辑优化），可推断项目当前重点在于**提升核心架构的健壮性与可配置性**，而非扩展新功能。预计下一阶段仍将聚焦于：
- 配置系统的统一校验与错误提示
- 模块生命周期管理的精细化控制
- 多 agent 协同场景下的资源隔离

---

### 7. **用户反馈摘要**  
📭 无新增用户评论或反馈。但从已修复的 #276 可反推：  
> 用户在实际部署中依赖 `settings.json` 进行全局行为控制，对“配置不生效”类问题敏感。此类问题若未及时修复，易导致信任度下降。本次快速响应表明维护团队对配置一致性问题的高度重视。

---

### 8. **待处理积压**  
⚠️ 需关注长期未响应事项（截至2026-04-21）：  
- **PR #251**（创建于2026-03-15）：`feat(plugins): add dynamic plugin loader with sandboxing`  
  🔗 [PR #251](https://github.com/TinyAGI/tinyclaw/pull/251) | 状态：Open，无评论，超35天未响应  
  → 建议维护者评估其安全设计与集成成本，决定是否纳入 v0.5 路线图。

- **Issue #238**（创建于2026-02-28）：`Memory leak in long-running agent loops`  
  🔗 [Issue #238](https://github.com/TinyAGI/tinyclaw/issues/238) | 状态：Open，2条评论，超50天未闭环  
  → 虽无复现步骤，但“内存泄漏”属高优先级隐患，建议主动联系提交者获取日志或测试环境信息。

> 📌 建议：对超过30天未响应的 Issues/PRs 启动 triage 流程，避免技术债累积。

---

**总结**：TinyClaw 今日以一次关键配置修复维持了系统可靠性，整体健康度良好，但需警惕社区参与度下降与积压事项处理延迟的风险。建议加强异步沟通机制（如定期路线图更新）以维持 contributor 积极性。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-04-21）

---

## 1. 今日速览

Moltis 项目在 2026-04-20 表现出极高的开发活跃度，社区与核心团队协同推进多项关键改进。过去24小时内，**9个 Issues 被关闭**，**12个 PR 被合并**，另有 **5个 PR 待合并**，涵盖功能增强、Bug修复与文档自动化。项目发布新版本 `20260420.02`，重点优化了多通道命令一致性、沙箱构建可靠性及AI模型兼容性。整体开发节奏紧凑，技术债清理与用户体验提升并重，项目健康度处于高位。

---

## 2. 版本发布

### 🔖 新版本：`20260420.02`（2026-04-20）

本次发布为一次**功能与稳定性并重的中型更新**，主要包含以下改进：

- **沙箱系统增强**：修复 Podman 后端在 BuildKit 构建后镜像未正确导入的问题（#811），确保沙箱环境一致性。
- **多通道命令统一**：引入集中式命令注册机制（#794），解决 Slack/Telegram 等平台命令解析不一致问题（如 `/new` 被误判为 `//new`）。
- **AI 模型支持扩展**：新增 Kimi K2.6 模型支持（#809），并修复 Fireworks 路由下 Kimi K2.5 Turbo 的 400 错误（#812）。
- **Web UI 体验优化**：聊天消息支持 Markdown 渲染为 HTML（#808），提升可读性；新增 GitHub Issues 与 Discussions 链接及计数徽章（#806）。
- **技能系统升级**：捆绑 101 个预置技能并引入分类 UI 与格式回退机制（#797），支持开发模式文件系统回退。

> ⚠️ **无破坏性变更**，但建议用户更新后验证自定义技能路径与 Slack 命令集成是否正常。

[查看 Release 详情](https://github.com/moltis-org/moltis/releases/tag/20260420.02)

---

## 3. 项目进展

今日合并的 PR 显著推进了项目核心能力：

- **#803 feat: self-improving agent loop**：引入自主技能创建、记忆生命周期管理与会话总结机制，标志着 Moltis 向“自进化 AI 代理”迈出关键一步。
- **#805 fix(mcp): implement legacy SSE transport**：实现对 Baserow、NocoDB 等 MCP 服务的兼容，扩展了外部工具集成能力。
- **#795 feat: Gemini thought_signature round-tripping**：修复 Google 模型函数调用中元数据丢失问题（#375），提升工具调用可靠性。
- **#807 feat(sandbox): install Node.js 22 LTS**：统一沙箱与开发环境 Node.js 版本，减少运行时差异。

> ✅ 项目整体在**多模态集成、代理自治性、开发者体验**三个方向同步前进，技术架构趋于成熟。

---

## 4. 社区热点

### 🔥 高关注度 Issue：[#375 Function call missing thought_signature in functionCall when using Google models](https://github.com/moltis-org/moltis/issues/375)（👍 3 反应，1 条评论）

该 Issue 由 @andr-uv 提出，反映使用 Google 模型时函数调用中 `thought_signature` 元数据丢失，导致工具调用上下文断裂。问题已在本轮通过 PR #795 修复，采用 `metadata` 字段透传机制保留 provider-specific 数据。

> 💡 **背后诉求**：用户期望跨模型工具调用行为一致，尤其在多步推理场景中需保留完整调用链信息。此修复增强了 Moltis 作为多模型代理平台的可靠性。

---

## 5. Bug 与稳定性

以下为今日关闭的 Bug 报告，均已通过对应 PR 修复：

| 严重程度 | Issue | 描述 | 修复 PR |
|--------|------|------|--------|
| 🔴 高 | [#796 Sandbox image not exported to Podman store](https://github.com/moltis-org/moltis/issues/796) | BuildKit 构建后镜像未导入 Podman，导致沙箱执行失败 | #811 |
| 🔴 高 | [#810 400 error with Fireworks Fire Pass (Kimi K2.5 Turbo)](https://github.com/moltis-org/moltis/issues/810) | 严格工具 schema 导致 Moonshot 后端拒绝请求 | #812 |
| 🟠 中 | [#798 Slack slash commands return "invalid channel input"](https://github.com/moltis-org/moltis/issues/798) | 命令前导 `/` 未剥离，导致匹配失败 | #804 |
| 🟠 中 | [#278 Can't add SSE MCP](https://github.com/moltis-org/moltis/issues/278) | 旧版 SSE 协议不支持端点发现 | #805 |
| 🟢 低 | [#776 task_list.list](https://github.com/moltis-org/moltis/issues/776) | 未明确描述问题，疑似任务列表异常 | 已关闭（无具体复现） |

> ✅ 所有高优先级 Bug 均已闭环，无遗留崩溃或回归问题。

---

## 6. 功能请求与路线图信号

### 📌 新功能提案分析

- **#788 "Abort" current operation from telegram & fallback models**（@abda11ah）  
  用户请求在 Telegram 和备用模型中支持“中止当前操作”功能，反映对长任务控制的迫切需求。  
  → 虽未立即实现，但结合 #803 的“记忆生命周期”与“会话总结”机制，**中止功能可能作为下一阶段交互控制模块的一部分**纳入开发计划。

- **#745 Feature: Nix Flake**（@tbaumann，OPEN）  
  提供 Nix 包管理支持，便于 NixOS 用户集成。  
  → 当前处于开放状态，若社区贡献者持续维护，有望成为官方部署选项之一。

> 🔮 **预测**：下一版本可能聚焦于**任务中断控制、多会话分支管理、Nix 生态支持**。

---

## 7. 用户反馈摘要

从 Issues 评论与上下文提炼关键用户声音：

- **痛点**：
  - 多代理工作空间中心跳机制文档不清（#769），用户难以理解全局与局部状态同步逻辑。
  - Slack 命令格式差异导致集成失败（#798），反映跨平台适配需更细致。
  - Podman 用户遭遇沙箱镜像“静默丢失”（#796），影响 CI/CD 场景稳定性。

- **满意点**：
  - 对 #803 自改进代理循环表示期待，认为“记忆提取与技能自动更新”是迈向 AGI 的关键一步。
  - Web UI 新增 GitHub 链接与 Markdown 渲染（#806/#808）获正面反馈，提升开发者参与感。

> 💬 用户普遍认可 Moltis 的技术前瞻性，但呼吁加强**文档清晰度**与**边缘环境兼容性**。

---

## 8. 待处理积压

以下为长期未响应或需维护者关注的 Issue/PR：

- **[#745 Feature: Nix Flake](https://github.com/moltis-org/moltis/pull/745)**（OPEN，2026-04-16 创建）  
  虽为社区贡献，但尚未被核心团队 review。建议评估其维护成本与用户价值，决定是否合并或提供指导。

- **[#769 Docs: Clarify heartbeat/cron behavior with multi-agent workspaces](https://github.com/moltis-org/moltis/issues/769)**（CLOSED，但文档未更新）  
  Issue 已关闭，但相关文档章节仍未修订。建议同步更新 `docs/heartbeat.md` 或 `multi-agent.md`。

> 📢 **维护者提醒**：关注 Nix Flake 的可持续性，并补全文档缺口以提升新手体验。

---

**报告生成时间**：2026-04-21  
**数据来源**：[Moltis GitHub Repository](https://github.com/moltis-org/moltis)  
**分析师备注**：项目处于高速迭代期，建议加强自动化测试覆盖以应对频繁变更。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-04-21）

---

## 1. 今日速览

CoPaw 项目在 2026 年 4 月 20 日继续保持高活跃度，社区贡献与核心开发并行推进。过去 24 小时内共处理 **41 条 Issues**（新开/活跃 27 条，关闭 14 条）和 **50 条 Pull Requests**（已合并/关闭 32 条，待合并 18 条），显示出强劲的开发节奏与问题响应能力。项目发布 **v1.1.3-beta.1** 新版本，重点增强控制台插件系统并优化文档。整体项目健康度良好，Bug 修复与功能迭代同步进行，社区参与度显著提升。

---

## 2. 版本发布

### 🔖 v1.1.3-beta.1 发布

**发布时间**：2026-04-20  
**主要变更**：
- ✅ **控制台插件系统增强**：重构插件架构，提升扩展性与稳定性（[#3357](https://github.com/agentscope-ai/QwenPaw/pull/3357)）
- 📚 **插件开发文档补充**：新增插件开发指南，降低贡献门槛（[#3357](https://github.com/agentscope-ai/QwenPaw/pull/3357)）
- 🧩 **版本号升级至 1.1.3b1**，为后续 Beta 测试铺路（[#3524](https://github.com/agentscope-ai/QwenPaw/pull/3524)）

> ⚠️ **无破坏性变更**，但建议用户在升级后检查自定义插件兼容性。

---

## 3. 项目进展

### ✅ 已合并/关闭的重要 PR

| PR | 类型 | 说明 |
|----|------|------|
| [#3620](https://github.com/agentscope-ai/QwenPaw/pull/3620) | 版本管理 | 版本号升级至 `1.1.3b2`，为后续发布做准备 |
| [#3614](https://github.com/agentscope-ai/QwenPaw/pull/3614) | Bug 修复 | 修复钉钉通道中 `bot_prefix` 未应用于普通回复的问题 |
| [#3616](https://github.com/agentscope-ai/QwenPaw/pull/3616) | UI 修复 | 修复技能页面搜索功能异常（Ant Design 5.x 兼容性问题） |
| [#3534](https://github.com/agentscope-ai/QwenPaw/pull/3534) | 功能新增 | 支持完整的数据备份与恢复系统，提升用户数据安全 |
| [#3400](https://github.com/agentscope-ai/QwenPaw/pull/3400) | 安全增强 | 引入 `ShellEvasionGuardian`，防御 shell 命令注入与混淆攻击 |
| [#2950](https://github.com/agentscope-ai/QwenPaw/pull/2950) | 体验优化 | 修复 Windows 下执行 shell 命令时弹出 CMD 窗口的问题 |

> 项目整体在 **安全性、用户体验、数据管理** 三大方向取得实质性进展。

---

## 4. 社区热点

### 🔥 高讨论度 Issues / PRs

1. **[#2291: Help Wanted: Open Tasks — Come Contribute!](https://github.com/agentscope-ai/QwenPaw/issues/2291)**  
   - **评论数：58** | **标签：enhancement, help wanted**  
   - 社区贡献者积极认领任务，涵盖 P0-P2 优先级，反映项目对外部贡献的高度开放性。

2. **[#3356: QwenPaw 升级后 WORKING_DIR 仍指向旧目录](https://github.com/agentscope-ai/QwenPaw/issues/3356)**  
   - **评论数：20** | **标签：bug, question**  
   - 用户反馈从 CoPaw 迁移至 QwenPaw 后，数据仍写入 `.copaw` 而非 `.qwenpaw`，引发对迁移机制的广泛讨论。

3. **[#3582: Localhost auth bypass is broken (401 error on 127.0.0.1)](https://github.com/agentscope-ai/QwenPaw/issues/3582)**  
   - **评论数：5** | **标签：Bug**  
   - 安全机制误判本地请求，影响开发者调试体验，已引起安全团队关注。

4. **[#3559: 前端测试框架 Vitest 集成](https://github.com/agentscope-ai/QwenPaw/pull/3559)**  
   - 引入 21 个前端测试用例，覆盖 Chat 页面与共享组件，标志项目进入 **工程化测试阶段**。

---

## 5. Bug 与稳定性

### 🐛 今日报告的严重 Bug（按优先级排序）

| Issue | 严重程度 | 状态 | 是否有 Fix PR |
|------|--------|------|---------------|
| [#3568: Skill with invalid YAML causes QwenPaw to crash completely](https://github.com/agentscope-ai/QwenPaw/issues/3568) | ⚠️ 高（崩溃） | OPEN | ❌ 无 |
| [#3597: 梦境系统无法正常使用（OSError on Windows）](https://github.com/agentscope-ai/QwenPaw/issues/3597) | ⚠️ 高（功能失效） | OPEN | ❌ 无 |
| [#3582: Localhost auth bypass broken](https://github.com/agentscope-ai/QwenPaw/issues/3582) | ⚠️ 中（安全/体验） | OPEN | ❌ 无 |
| [#3356: WORKING_DIR 指向旧目录](https://github.com/agentscope-ai/QwenPaw/issues/3356) | ⚠️ 中（数据隔离） | OPEN | ❌ 无 |
| [#3628: 企业微信通道截图识别异常](https://github.com/agentscope-ai/QwenPaw/issues/3628) | ⚠️ 中（功能异常） | OPEN | ❌ 无 |

> ❗ 建议优先处理 **YAML 解析崩溃** 和 **梦境系统 OSError**，二者均导致服务不可用。

---

## 6. 功能请求与路线图信号

### 🚀 高潜力功能请求（结合 PR 判断可行性）

| Issue | 功能描述 | 相关 PR | 纳入可能性 |
|------|--------|--------|-----------|
| [#3516: 引入 Hermes 理念实现智能体自动进化](https://github.com/agentscope-ai/QwenPaw/issues/3516) | 智能体自我优化机制 | 无 | 🔮 长期愿景，需架构支持 |
| [#3623: 多智能体会话间反馈机制](https://github.com/agentscope-ai/QwenPaw/issues/3623) | 支持任务移交与会话上下文传递 | [#2904: Plan mode](https://github.com/agentscope-ai/QwenPaw/pull/2904) | ✅ 高（已有 PlanNotebook 基础） |
| [#3593: 配置 execute_shell_command 超时时间](https://github.com/agentscope-ai/QwenPaw/issues/3593) | 提升工具灵活性 | 无 | ✅ 高（易实现，需求明确） |
| [#3627: 前端 UI 升级（仿 Claude Code）](https://github.com/agentscope-ai/QwenPaw/issues/3627) | 提升视觉与交互体验 | [#3559: 前端测试](https://github.com/agentscope-ai/QwenPaw/pull/3559) | 🔶 中（需设计资源） |
| [#3621: WeChat 群聊中传递 sender_id](https://github.com/agentscope-ai/QwenPaw/issues/3621) | 支持群成员身份识别 | 无 | ✅ 高（通道层可解） |

> 📌 **Plan mode** 和 **会话反馈机制** 可能成为下一版本亮点功能。

---

## 7. 用户反馈摘要

### 💬 真实用户声音提炼

- **痛点**：
  - “升级后 `.copaw` 和 `.qwenpaw` 两个目录同时写数据，迁移不彻底”（[#3356](https://github.com/agentscope-ai/QwenPaw/issues/3356)）
  - “定时任务还要手动 approve，半夜跑不了”（[#3586](https://github.com/agentscope-ai/QwenPaw/issues/3586)）
  - “企业微信发截图识别不了，控制台却可以”（[#3628](https://github.com/agentscope-ai/QwenPaw/issues/3628)）

- **满意点**：
  - “插件系统越来越好用，文档也清晰了”（[#3357](https://github.com/agentscope-ai/QwenPaw/pull/3357) 评论区）
  - “备份功能终于来了，再也不用手动拷文件夹”（[#3534](https://github.com/agentscope-ai/QwenPaw/pull/3534)）

- **使用场景**：
  - 企业微信自动化运维、定时数据同步、多智能体协作审批流。

---

## 8. 待处理积压

### ⏳ 长期未响应的重要 Issue / PR

| 编号 | 类型 | 创建时间 | 最后更新时间 | 说明 |
|------|------|--------|------------|------|
| [#2953: wrong info after copaw app start](https://github.com/agentscope-ai/QwenPaw/issues/2953) | Bug | 2026-04-05 | 2026-04-20 | 启动日志错误，影响用户体验，**15 天未处理** |
| [#3002: 不兼容 OpenAI Responses API 格式](https://github.com/agentscope-ai/QwenPaw/issues/3002) | Bug | 2026-04-07 | 2026-04-20 | 企业用户 Azure OpenAI 接入失败，**13 天未处理** |
| [#3211: Docker 镜像中 llama.cpp 因 GLIBC 版本失败](https://github.com/agentscope-ai/QwenPaw/issues/3211) | Bug | 2026-04-10 | 2026-04-20 | 影响本地模型部署，**10 天未处理** |
| [#3556: browser_use 工具参数扩展](https://github.com/agentscope-ai/QwenPaw/pull/3556) | PR | 2026-04-18 | 2026-04-20 | 功能合理，**3 天未 Review** |

> 🔔 **建议维护者优先 Review**：  
> - [#3556](https://github.com/agentscope-ai/QwenPaw/pull/3556)（浏览器工具增强）  
> - [#2953](https://github.com/agentscope-ai/QwenPaw/issues/2953)（启动日志误导用户）

---

**报告生成时间**：2026-04-21  
**数据来源**：GitHub CoPaw (QwenPaw) 仓库公开数据  
**分析师**：AI 开源项目动态监测引擎

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

**EasyClaw 项目动态日报**  
**日期：2026年4月21日**

---

### 1. 今日速览  
过去24小时内，EasyClaw 项目整体活跃度较低，无新 Issue 提交或 Pull Request 活动，社区互动趋于平稳。项目核心维护节奏以版本发布为主，今日迎来一次正式版本更新（v1.8.0），表明开发团队仍在持续推进产品迭代。尽管短期社区参与度不高，但版本发布行为显示项目处于稳定维护与功能优化阶段，整体健康度良好。

---

### 2. 版本发布  
✅ **RivonClaw v1.8.0 正式发布**  
本次发布聚焦于 macOS 平台用户体验优化，重点解决长期困扰用户的 Gatekeeper 安全警告问题。  
- **关键更新内容**：  
  - 提供针对 macOS 用户“应用已损坏”提示的详细解决方案说明，引导用户通过终端命令绕过 Gatekeeper 拦截（[查看发布说明](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.0)）。  
  - 虽未提及底层代码变更，但文档层面的完善显著降低用户上手门槛，提升首次使用成功率。  
- **破坏性变更**：无。  
- **迁移注意事项**：无需迁移；建议所有 macOS 用户升级至 v1.8.0 并参考新版安装指南操作。

> 🔗 发布链接：[RivonClaw v1.8.0](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.0)

---

### 3. 项目进展  
过去24小时无 Pull Request 合并或关闭，无新功能代码合入主分支。项目当前进展主要体现为版本发布层面的用户支持优化，而非底层功能开发。

---

### 4. 社区热点  
无新 Issue 或 PR 提交，社区讨论活跃度为零。近期无高热度议题或集中反馈。

---

### 5. Bug 与稳定性  
过去24小时未报告任何 Bug、崩溃或回归问题。结合 v1.8.0 发布内容推测，此前 macOS 安装拦截问题已被识别并转化为文档解决方案，暂未发现需紧急修复的技术缺陷。

---

### 6. 功能请求与路线图信号  
无新功能请求提交。从本次 v1.8.0 发布侧重安装体验优化来看，项目短期路线图可能更关注**降低用户使用门槛**与**提升跨平台兼容性**，而非引入复杂新功能。

---

### 7. 用户反馈摘要  
虽无新 Issue，但 v1.8.0 发布说明中明确回应了 macOS 用户长期反馈的“应用损坏”误报问题，反映出真实用户痛点集中于：  
- **安装流程受阻**：Gatekeeper 拦截导致新手用户无法正常启动应用；  
- **缺乏官方指引**：此前未提供清晰解决方案，造成困惑与负面体验。  
本次更新通过结构化文档回应，体现了对用户实际使用场景的重视。

---

### 8. 待处理积压  
经核查，当前 Issues 与 PR 列表均为空，无长期未响应的重要事项。项目积压压力极低，维护负担轻。

---  
**总结**：EasyClaw 今日以用户导向的版本发布维持项目活力，虽开发活动暂缓，但通过解决关键体验瓶颈巩固了产品可用性，整体处于稳健运行状态。建议后续关注是否将 Gatekeeper 签名纳入长期技术规划，以彻底消除安装障碍。

</details>

---
*本日报由 [Radar Forge](https://github.com/borq168/radar-forge) 自动生成。*