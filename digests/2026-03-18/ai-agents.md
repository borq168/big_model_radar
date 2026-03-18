# OpenClaw 生态日报 2026-03-18

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-03-18 01:03 UTC

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

# OpenClaw 项目动态日报（2026-03-18）

---

## 1. 今日速览

OpenClaw 社区在24小时内保持高度活跃，共处理 **500条 Issues**（新开/活跃438条，关闭62条）和 **500条 PRs**（已合并/关闭314条，待合并186条），显示出强劲的开发与问题响应节奏。尽管无新版本发布，但核心功能持续优化，尤其在网关稳定性、多平台兼容性及 Agent 视觉能力方面取得显著进展。社区对 Linux/Windows 客户端、Telegram 通知异常、WhatsApp 连接可靠性等问题的关注度居高不下，反映出跨平台部署和消息通道稳定性是当前用户的核心痛点。

---

## 2. 版本发布

**无新版本发布**。最近一次版本仍为 v2026.3.13，多个回归性 Bug（如网关心跳失效、CLI 握手超时）已在后续 PR 中修复，预计将在下个热修复版本中集中发布。

---

## 3. 项目进展

今日多个关键 PR 被合并或推进，显著提升系统健壮性与功能完整性：

- **#49276 / #49275**（已合并）：修复 Matrix 消息重复接收问题，通过 `message_id` 去重机制避免 Agent 处理重复指令，提升对话一致性。
- **#49269 / #49267**（已合并）：允许在 `dangerouslyDisableDeviceAuth=true` 模式下支持 HTTP LAN 连接，解决移动端浏览器因 WebCrypto 限制导致的连接失败问题，增强本地调试体验。
- **#49274**（已合并）：为 Control UI 添加调试模式，实时展示 WebSocket 连接日志，便于开发者诊断前端通信问题。
- **#41597**（进行中）：实现网关重启期间入站消息队列持久化，防止 Telegram/Discord 消息丢失，已进入最终测试阶段。
- **#49330 / #49329**（新提交）：引入本地 GGUF 模型自动发现（`node-llama-cpp`）和 OpenAI 兼容 API 本地服务集成，扩展离线部署能力。

> 项目整体向“高可用、多端一致、本地友好”方向稳步迈进，基础设施层改进尤为突出。

---

## 4. 社区热点

以下 Issues 引发广泛讨论，反映用户核心诉求：

- **[#75] Linux/Windows Clawdbot Apps**（41 评论，62 👍）  
  用户强烈呼吁补齐 Linux 和 Windows 桌面客户端，现有 macOS/iOS/Android 支持形成对比缺口。维护者已标记 `help wanted`，社区正探讨 Electron 或 Tauri 技术路线。  
  🔗 https://github.com/openclaw/openclaw/issues/75

- **[#45289] Telegram Reaction Notifications Not Working**（19 评论）  
  尽管配置开启，`message_reaction` 更新未被接收，疑似 `allowed_updates` 未正确包含该字段。影响社交场景下的交互反馈完整性。  
  🔗 https://github.com/openclaw/openclaw/issues/45289

- **[#28744] 支持 Agent 接收并识别图片内容（视觉能力）**（19 评论）  
  中文用户集中反馈飞书等平台图片无法被 Agent “看见”，期望实现 base64/URL 传递至 MiniMax-Vision 等模型。此为多模态能力关键短板。  
  🔗 https://github.com/openclaw/openclaw/issues/28744

- **[#45772] Gateway Heartbeat Timer Stops After 1-2 Triggers**（17 评论）  
  v2026.3.8 引入的心跳机制存在定时器未重调度问题，导致长期运行中断。已有临时规避方案，官方修复 PR 正在评审中。  
  🔗 https://github.com/openclaw/openclaw/issues/45772

---

## 5. Bug 与稳定性

按严重程度排序的关键问题：

| 严重程度 | Issue | 描述 | 状态 |
|--------|------|------|------|
| 🔴 高 | [#48205] Gateway Restarts Every ~50 Minutes | 网关周期性自动重启（reason=none），中断所有会话 | 调查中，疑似资源泄漏 |
| 🔴 高 | [#45560] Local Gateway CLI Handshake Fails | 尽管网关运行正常，CLI 命令因握手超时而失败 | 与 #46892 相关，3s 超时过短 |
| 🟠 中 | [#46659] WhatsApp: Send Fails but React Succeeds | 同一连接下发送失败而反应成功，提示“No active listener” | 疑似多模块竞争，#45994 提供线索 |
| 🟠 中 | [#45227] 422 Status Code with Mistral | OpenRouter 下 Mistral 模型返回空 body 422，直连正常 | 请求格式兼容性问题，#41293 有同类报告 |
| 🟢 低 | [#48183] Feishu Monitor State Cleanup Incomplete | `httpServers` Map 删除早于服务器关闭，潜在内存泄漏 | 代码级风险，需异步清理 |

> 注：[#47931] 握手超时问题已有修复思路，预计合并至下个版本。

---

## 6. 功能请求与路线图信号

以下功能需求获得高关注度，且已有对应 PR 推进，极可能纳入下一版本：

- **本地模型支持**：#49330（GGUF）、#49329（本地 API）直接响应离线部署需求，填补云端依赖空白。
- **多模态视觉能力**：#28744 虽无直接 PR，但 #41744（Feishu 图片丢失）和 #44421（Cortex 记忆集成）显示图像管道正在重构。
- **Agent 切换与多实例管理**：#32495（Control UI 多 Agent 切换）、#25359（Per-agent 插件覆盖）反映多角色工作流需求，#48838 正实现 agent-scoped 策略。
- **增强搜索工具**：#49319 引入 Exa 搜索 provider，替代原有 Grok 实现，提升搜索质量与稳定性。

---

## 7. 用户反馈摘要

从评论中提炼的真实声音：

- **满意点**：  
  - “Control UI 调试模式终于来了！之前抓包太痛苦。”（#49274 评论）  
  - “Matrix 去重修复后，我的机器人不再复读指令了。”（#49275 用户验证）

- **痛点与挫败感**：  
  - “我在飞书发了一张截图，Agent 只回‘我收到了图片’，然后没了下文。”（#28744 典型场景）  
  - “每次重启网关都要重新登录 WhatsApp，而且 cron 提醒全丢了。”（#30177 + #41597 关联反馈）  
  - “v2026.3.12 之后 `openclaw logs --follow` 就坏了，根本没法监控。”（#44714 高频抱怨）

- **使用场景扩展**：  
  用户开始尝试将 OpenClaw 用于 **本地代码助手**（结合 GGUF）、**企业知识库问答**（Cortex 集成）、**跨团队通知中枢**（多通道聚合），推动架构向更通用 Agent 平台演进。

---

## 8. 待处理积压

以下重要 Issue 长期未获官方响应，建议维护者优先关注：

- **[#10841] Reminders Set for Wrong Times**（2026-02-07 创建，13 评论）  
  Agent 缺乏精确时间感知，导致提醒偏移。影响日程管理核心功能，需集成系统时钟或 NTP。

- **[#19618] WhatsApp Baileys Credential Store Bloats**（2026-02-18 创建，6 评论）  
  认证文件无限增长引发“zombie listener”，是 WhatsApp 通道不稳定的根本原因之一，需实现自动清理策略。

- **[#20502] Google Chat Plugin Infinite Restart Loop**（2026-02-19 创建，11 评论）  
  Webhook 模式下的生命周期管理缺陷，导致频繁重启，影响 G Suite 用户稳定性。

> 建议：对超过 30 天未响应且标记 `stale` 的 Issue 启动专项清理或分配负责人。

--- 

**报告生成时间**：2026-03-18 UTC  
**数据来源**：OpenClaw GitHub Repository (github.com/openclaw/openclaw)

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向分析报告（2026-03-18）

---

## 1. 生态全景

当前个人 AI 助手开源生态呈现 **“多极竞争、快速迭代、场景分化”** 的格局。以 OpenClaw 为核心参照，多个项目（如 NanoBot、Zeroclaw、PicoClaw）在功能完整性、部署轻量性、多模态支持等维度展开差异化竞争。社区普遍聚焦于 **跨平台稳定性、多通道集成、本地模型支持与安全加固**，反映出用户从“原型验证”向“生产可用”的演进需求。同时，中文生态（如 LobsterAI、Moltis）积极对接飞书、钉钉等本土平台，推动区域化落地。

---

## 2. 各项目活跃度对比

| 项目 | Issues（新开/活跃） | PRs（合并/关闭） | 新版本发布 | 健康度评估 |
|------|---------------------|------------------|------------|------------|
| **OpenClaw** | 438 / 500 | 314 / 500 | ❌ | ⭐⭐⭐⭐ |
| **NanoBot** | 36 | 44 / 93 | ❌ | ⭐⭐⭐⭐☆ |
| **Zeroclaw** | 19 / 38 | 29 / 50 | ✅（10 个 beta） | ⭐⭐⭐⭐ |
| **PicoClaw** | 14 / 19 | 41 / 84 | ✅（v0.2.3 + nightly） | ⭐⭐⭐⭐ |
| **NanoClaw** | 9 / 28 | 11 / 48 | ❌ | ⭐⭐⭐⭐☆ |
| **IronClaw** | 46 / 50 | 14 / 50 | ✅（v0.19.0） | ⭐⭐⭐ |
| **LobsterAI** | 8 / 11 | 22 / 25 | ✅（2026.3.17） | ⭐⭐⭐⭐ |
| **TinyClaw** | 1 | 0 / 3 | ❌ | ⭐⭐⭐ |
| **Moltis** | 1 | 0 / 3 | ❌ | ⭐⭐⭐⭐ |
| **CoPaw** | 41 / 50 | 32 / 50 | ✅（v0.1.0-beta.2） | ⭐⭐⭐ |
| **ZeptoClaw** | 3 / 6 | 1 / 15 | ❌ | ⭐⭐⭐⭐ |
| **EasyClaw** | 0 / 2 | 1 / 1 | ✅（v1.6.8, v1.7.0） | ⭐⭐⭐⭐ |

> 注：健康度综合 PR 合并率、Issue 响应速度、版本节奏与社区反馈评估。

---

## 3. OpenClaw 在生态中的定位

**优势**：  
- **规模最大**：单日处理 500 Issues + 500 PRs，社区活跃度断层领先；  
- **功能最全**：覆盖网关、多通道（Telegram/WhatsApp/Matrix/飞书）、Agent 视觉、本地模型（GGUF）、调试工具等完整栈；  
- **企业友好**：Control UI、消息持久化、多实例管理等设计体现生产导向。

**技术路线差异**：  
- 相比 NanoBot 的“超轻量”定位，OpenClaw 选择 **“高可用 + 多端一致”** 架构，牺牲部分简洁性换取稳定性；  
- 与 Zeroclaw 的 WASM 插件化相比，OpenClaw 仍采用传统模块化设计，但通过 `#49330` 开始引入本地模型自动发现，向混合架构演进。

**社区规模**：  
- GitHub 互动量（Issues/PRs）约为第二名 CoPaw 的 1.5 倍，用户反馈中“替代 OpenClaw”（NanoBot）、“比 EasyClaw 更适合个人使用”（NanoClaw）等表述印证其标杆地位。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|--------|--------|--------|
| **本地模型支持** | OpenClaw (#49330)、LobsterAI (#428)、NanoClaw (#1203) | 集成 GGUF、LM Studio、Ollama 等离线推理能力 |
| **多模态视觉能力** | OpenClaw (#28744)、CoPaw (#918)、ZeptoClaw (#368) | Agent 接收并理解图片/语音输入 |
| **消息通道稳定性** | OpenClaw（WhatsApp/Telegram）、IronClaw（Telegram webhook）、PicoClaw（飞书） | 解决连接中断、消息丢失、会话错位 |
| **安全加固** | NanoClaw（SSRF 防护）、ZeptoClaw（凭证隔离）、CoPaw（危险命令检测） | 防止提示注入、密钥泄露、越权操作 |
| **多租户/用户隔离** | CoPaw (#352)、IronClaw (#1272)、NanoBot (#2102) | 企业部署下的数据与权限隔离 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键点 |
|------|--------|--------|--------------|
| **OpenClaw** | 全功能生产级平台 | 企业/高级开发者 | 模块化网关 + Control UI + 多通道聚合 |
| **NanoBot** | 超轻量替代方案 | 个人/资源受限场景 | Python 极简架构，强调低资源消耗 |
| **Zeroclaw** | 可扩展插件系统 | 开发者/研究者 | WASM 插件 + TUI + 多节点控制平面 |
| **PicoClaw** | 多代理协作 | 团队/自动化场景 | 事件驱动消息总线 + 子代理工具链 |
| **LobsterAI** | 中文生态集成 | 国内企业用户 | 飞书/钉钉/POPO 深度适配 + 定时任务 |
| **TinyClaw** | 实时无状态通信 | 轻量级协作 | 去对话状态 + SSE 直连前端 |

---

## 6. 社区热度与成熟度

- **快速迭代阶段**（高 PR 合并率 + 频繁发布）：  
  **Zeroclaw**（10 个 beta 版本）、**LobsterAI**（22/25 PR 合并）、**PicoClaw**（41/84 PR 合并）—— 功能快速验证，适合早期采用者。

- **质量巩固阶段**（高 Issue 响应 + 稳定性修复）：  
  **OpenClaw**（500 Issues 高效处理）、**NanoClaw**（安全/多实例优化）、**EasyClaw**（跨平台兼容性修复）—— 聚焦生产可靠性，适合企业部署。

- **原型探索阶段**（低活跃度 + 架构重构）：  
  **TinyClaw**（去状态化通信）、**Moltis**（飞书集成预研）—— 技术前瞻性强，但成熟度待验证。

---

## 7. 值得关注的趋势信号

1. **“去中心化 Agent 网络”兴起**：  
   PicoClaw 的 `spawn` 工具、CoPaw 的多 Agent 编排、Zeroclaw 的多节点控制平面，均指向 **主从 Agent 协同** 架构，预示未来复杂任务将依赖分布式智能体协作。

2. **安全成为核心竞争壁垒**：  
   从 NanoClaw 的 SSRF 防护到 ZeptoClaw 的凭证隔离，再到 CoPaw 的危险命令检测，**安全能力正从“可选”变为“必选”**，尤其影响企业 adoption。

3. **中文生态加速本土化**：  
   LobsterAI、Moltis、CoPaw 均优先支持飞书/钉钉，且反馈中频繁出现“无法替代 OpenClaw”（因本土集成缺失），表明 **区域化通道支持是打开市场的关键钥匙**。

4. **本地模型 + 云端混合部署成主流**：  
   OpenClaw、LobsterAI、NanoClaw 同时推进 GGUF/LM Studio 集成，反映用户对 **数据隐私与成本可控** 的双重诉求，开发者需设计灵活的后端抽象层。

> **对开发者的建议**：优先关注 **多通道稳定性** 与 **安全默认配置**，这两项已成为用户迁移的主要决策因素；同时评估是否需支持中文主流 IM 平台以拓展用户基数。

---  
**报告生成时间**：2026-03-18 UTC  
**数据来源**：各项目 GitHub 仓库动态汇总

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-03-18）

---

## 1. 今日速览

NanoBot 社区活跃度持续高涨，过去24小时内共产生 **36条 Issues 更新** 和 **93条 PR 更新**，其中 PR 合并/关闭率达 **47.3%**（44/93），显示出高效的协作节奏。尽管无新版本发布，但多个关键功能（如子代理轨迹持久化、WeCom App 支持、Honcho 长期记忆集成）正在积极开发中。社区对实时交互、多租户隔离和配置管理提出了集中诉求，反映出项目正从“轻量原型”向“生产级助手”演进。

---

## 2. 版本发布

**无新版本发布**。当前主线仍为 `v0.1.4.post5`，但多个 nightly 功能（如交互式配置向导、TUI 终端界面）已通过 PR 进入测试阶段。

---

## 3. 项目进展

今日有 **44个 PR 被合并或关闭**，重点进展包括：

- ✅ **子代理轨迹持久化机制实现**（[#2043](https://github.com/HKUDS/nanobot/pull/2043)）：为每个子代理创建独立会话并记录推理过程至 JSONL，增强可观测性与调试能力。
- ✅ **WeCom App 通道支持**（[#2173](https://github.com/HKUDS/nanobot/pull/2173)）：新增 webhook 回调模式的企业微信应用集成，扩展企业部署场景。
- ✅ **Honcho 长期记忆集成（opt-in）**（[#2183](https://github.com/HKUDS/nanobot/pull/2183)）：通过外部服务实现用户上下文记忆，响应路线图 #39 需求。
- ✅ **Telegram 媒体 URL 支持修复**（[#2109](https://github.com/HKUDS/nanobot/pull/2109)）：解决因本地文件路径误判导致的媒体发送失败问题。
- ✅ **工具提示优化**：隐藏 `message` 工具重复消息（[#2177](https://github.com/HKUDS/nanobot/pull/2177)）及工作区路径脱敏（[#2140](https://github.com/HKUDS/nanobot/pull/2140)），提升用户体验与隐私安全。

项目在**可观测性、企业集成、用户体验**三个维度取得实质性推进。

---

## 4. 社区热点

### 🔥 高讨论度 Issues

| Issue | 主题 | 评论数 | 核心诉求 |
|------|------|--------|--------|
| [#2133](https://github.com/HKUDS/nanobot/issues/2133) | 任务执行期间用户消息入列机制 | 13 | 实现 agent 执行中实时响应用户输入，避免强制 `/stop` 中断 |
| [#1988](https://github.com/HKUDS/nanobot/issues/1988) | WeCom 通道配置失效 | 12 | 解决升级后 `config.json` 缺失 WeCom 配置导致“No Channels Enabled”问题 |
| [#660](https://github.com/HKUDS/nanobot/issues/660) | “超轻量”宣称与 Node.js 依赖矛盾 | 8 | 质疑项目架构一致性，呼吁移除非必要依赖 |

> **分析**：用户强烈期望 **中断-响应式交互模型**（类似 OpenClaw 的审批机制），当前轮询式消息队列已成为体验瓶颈。

---

## 5. Bug 与稳定性

| 问题 | 严重性 | 状态 | 关联 PR |
|------|--------|------|--------|
| [#2141](https://github.com/HKUDS/nanobot/issues/2141)：v0.1.4.post5 升级后语音转录失效 | 高（功能回归） | 🔴 未修复 | — |
| [#2185](https://github.com/HKUDS/nanobot/issues/2185)：gemini-3-flash-preview 模型无法使用 | 高（兼容性） | 🔴 未修复 | — |
| [#1948](https://github.com/HKUDS/nanobot/issues/1948)：`exec` 工具在 `/tmp` 写入失败（权限隔离问题） | 中 | 🟡 调查中 | — |
| [#2142](https://github.com/HKUDS/nanobot/issues/2142)：WeCom WebSocket 偶发连接崩溃 | 中 | ✅ 已关闭（临时性） | — |

> ⚠️ 两个高严重性回归问题需优先处理，可能影响语音交互与模型切换核心功能。

---

## 6. 功能请求与路线图信号

| 功能请求 | 热度 | 已有 PR | 纳入可能性 |
|--------|------|--------|----------|
| **LLM Trace 可观测性**（[#2154](https://github.com/HKUDS/nanobot/issues/2154)） | ⭐⭐⭐ | — | 高（契合调试需求） |
| **多租户数据隔离**（[#2102](https://github.com/HKUDS/nanobot/issues/2102)） | ⭐⭐⭐ | — | 中（企业场景刚需） |
| **运行时模型切换**（`/model` 命令） | ⭐⭐ | ✅ [#2179](https://github.com/HKUDS/nanobot/pull/2179) | 已实现 |
| **TUI 终端交互** | ⭐⭐ | ✅ [#2155](https://github.com/HKUDS/nanobot/pull/2155) | 已提交 |
| **配置迁移工具**（[#2163](https://github.com/HKUDS/nanobot/issues/2163)） | ⭐⭐ | ✅ [#2171](https://github.com/HKUDS/nanobot/pull/2171) | 已部分实现 |

> 下一版本 likely 聚焦 **可观测性增强** 与 **配置管理自动化**。

---

## 7. 用户反馈摘要

- **满意点**：
  - “资源消耗极低，成功替代 OpenClaw”（[#2155](https://github.com/HKUDS/nanobot/pull/2155) 作者）
  - “交互式配置向导大幅降低上手门槛”（[#2018](https://github.com/HKUDS/nanobot/issues/2018)）
- **痛点**：
  - **会话无法清空**：飞书 ID 固定导致上下文膨胀（[#2062](https://github.com/HKUDS/nanobot/issues/2062)）
  - **配置升级兼容性差**：手动维护 `config.json` 易出错（[#2163](https://github.com/HKUDS/nanobot/issues/2163)）
  - **企业部署障碍**：缺乏多租户隔离与密钥安全管理（[#2102](https://github.com/HKUDS/nanobot/issues/2102), [#2172](https://github.com/HKUDS/nanobot/issues/2172)）

---

## 8. 待处理积压

| 问题 | 类型 | 创建时间 | 状态 | 提醒 |
|------|------|--------|------|------|
| [#608](https://github.com/HKUDS/nanobot/issues/608) | Bug：版本号不一致（`__init__.py` vs `pyproject.toml`） | 2026-02-13 | 🔴 长期未修复 | 影响版本可信度，建议自动化同步 |
| [#134](https://github.com/HKUDS/nanobot/issues/134) | 文档：本地运行成本说明缺失 | 2026-02-05 | 🔴 未响应 | 新手入门关键障碍 |
| [#126](https://github.com/HKUDS/nanobot/pull/126) | PR：Docker 镜像自动构建 | 2026-02-05 | 🟡 长期 open | 可提升部署体验，建议 review |

> 建议维护者优先处理 **#608**（低 hanging fruit）与 **#134**（文档补全）。

---

**项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
活跃开发 + 高 PR 合并率 + 明确路线图，但需加强回归测试与文档建设。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报（2026-03-18）

---

## 1. 今日速览

Zeroclaw 项目在 2026-03-18 继续保持高强度开发节奏，过去24小时内共处理 **38 条 Issues**（新开/活跃 19 条，关闭 19 条）和 **50 条 PR**（待合并 21 条，已合并/关闭 29 条），并发布 **10 个新版本**，主要集中在 `v0.5.0-beta` 和 `v0.4.3` 两条发布线上。社区活跃度显著上升，多个关键功能（如 WASM 插件系统、TUI 终端界面、多节点控制平面）在同一天提交，反映出团队正加速推进生产就绪能力。然而，ARM64 架构下的稳定性问题（如静默崩溃、Docker 镜像异常）成为当前主要阻塞点，需优先解决。

---

## 2. 版本发布

### 最新发布：v0.5.0-beta.346（及连续多个 beta 版本）
**核心更新内容：**
- **新增通信适配器**：支持 Reddit、Bluesky 和通用 Webhook 通道（[#channels](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.5.0-beta.346)）
- **CLI 增强**：
  - 添加 `zeroclaw self-test` 命令，支持快速与完整诊断模式
  - 新增 `zeroclaw status --format=exit-code`，适配 Docker 健康检查
  - 引入 `zeroclaw update` 命令，实现六阶段更新流水线（含自动回滚机制）
- **CI/CD 优化**：Docker 镜像构建改用预编译二进制文件，显著提升构建速度与稳定性（[#3814](https://github.com/zeroclaw-labs/zeroclaw/pull/3814)）

> ⚠️ **注意**：v0.5.0-beta 系列为实验性版本，部分功能依赖新引入的 `plugins`、`tui` 等特性标志，生产环境建议评估后升级。

---

## 3. 项目进展

今日合并/关闭的重要 PR 推动多项关键能力落地：

| PR | 功能/修复 | 意义 |
|----|--------|------|
| [#3827](https://github.com/zeroclaw-labs/zeroclaw/pull/3827) | 引入基于 Extism 的 WASM 插件系统 | 实现可扩展架构，支持动态加载工具与通道 |
| [#3823](https://github.com/zeroclaw-labs/zeroclaw/pull/3823) | 添加交互式 TUI 终端界面（feature flag 控制） | 提升本地调试与运维体验 |
| [#3824](https://github.com/zeroclaw-labs/zeroclaw/pull/3824) | 构建多节点控制平面与健康监控 | 为集群化部署奠定基础 |
| [#3821](https://github.com/zeroclaw-labs/zeroclaw/pull/3821) | CLI 自检与更新命令实现 | 增强系统可维护性与用户自助能力 |
| [#3814](https://github.com/zeroclaw-labs/zeroclaw/pull/3814) | Docker 镜像使用预编译二进制 | 解决 ARM64 构建超时与兼容性问题 |

整体项目向“生产级 AI 助手平台”迈出关键一步，尤其在可观测性、弹性架构和用户体验方面取得实质性进展。

---

## 4. 社区热点

### 🔥 高讨论度 Issues

1. **[#1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478)（已关闭，40 评论）**  
   用户强烈质疑安全策略过于严格，导致基本功能（如安装 `ffmpeg`）被拒绝，认为“安全到无法使用”。  
   → **诉求**：请求提供全局权限开关或白名单机制，平衡安全性与灵活性。

2. **[#3537](https://github.com/zeroclaw-labs/zeroclaw/issues/3537)（开放，7 评论）**  
   ARM64 设备（如 Raspberry Pi 4）上 daemon 静默崩溃，自 v0.2.1-beta.186 起持续存在。  
   → **影响**：阻碍边缘设备部署，已被多个用户复现。

3. **[#3059](https://github.com/zeroclaw-labs/zeroclaw/issues/3059)（开放，5 评论）**  
   中国用户反馈无法集成阿里云百炼（Bailian）和 Coding Plan 服务。  
   → **信号**：国际化与本土 AI 生态适配需求迫切。

---

## 5. Bug 与稳定性

按严重程度排序：

| Issue | 严重性 | 状态 | 备注 |
|------|--------|------|------|
| [#3537](https://github.com/zeroclaw-labs/zeroclaw/issues/3537) | S0（数据丢失/安全风险） | 🔴 未修复 | ARM64 静默崩溃，影响 Pi 等关键设备 |
| [#3687](https://github.com/zeroclaw-labs/zeroclaw/issues/3687) | S1（工作流阻塞） | ✅ 已修复 | Docker 镜像误打包 292KB 空二进制，[#3814](https://github.com/zeroclaw-labs/zeroclaw/pull/3814) 已解决 |
| [#3783](https://github.com/zeroclaw-labs/zeroclaw/issues/3783) | S1 | ✅ 已修复 | GLIBC 版本不匹配导致 Debian 镜像运行失败 |
| [#3786](https://github.com/zeroclaw-labs/zeroclaw/issues/3786) | S1 | 🟡 有修复 PR | OpenAI Codex 间歇性失败，[#3811](https://github.com/zeroclaw-labs/zeroclaw/pull/3811) 提供 fallback 机制 |
| [#3819](https://github.com/zeroclaw-labs/zeroclaw/issues/3819) | S2 | 🔴 未修复 | 非 TTY 环境（如 cron）下 SOUL.md 未加载 |

> 建议优先投入资源解决 **ARM64 崩溃问题**（#3537），因其影响广泛且长期未解。

---

## 6. 功能请求与路线图信号

用户明确提出的需求中，以下功能已有对应 PR，有望纳入下一版本：

- ✅ **WASM 插件系统**（[#3827](https://github.com/zeroclaw-labs/zeroclaw/pull/3827)）→ 高优先级，已合并
- ✅ **TUI 终端界面**（[#3823](https://github.com/zeroclaw-labs/zeroclaw/pull/3823)）→ 提升开发者体验
- ✅ **多节点控制平面**（[#3824](https://github.com/zeroclaw-labs/zeroclaw/pull/3824)）→ 面向企业部署
- 🔄 **阿里云百炼集成**（[#3059](https://github.com/zeroclaw-labs/zeroclaw/issues/3059)）→ 尚无 PR，但需求明确
- 🔄 **跨通道 TOTP 门禁**（[#3767](https://github.com/zeroclaw-labs/zeroclaw/issues/3767)）→ 安全增强，适合 v0.5.1

---

## 7. 用户反馈摘要

- **痛点**：
  - 安全策略“一刀切”，阻碍合法操作（如安装依赖、执行 shell）[#1478]
  - ARM64 支持不稳定，Docker 镜像不可靠 [#3537, #3687]
  - 非交互式环境（cron、后台服务）下行为异常 [#3819]
  - 缺乏对亚洲主流 AI 平台（如阿里云）的支持 [#3059]

- **满意点**：
  - CLI 自检与更新命令极大简化运维（[#3821](https://github.com/zeroclaw-labs/zeroclaw/pull/3821) 获赞）
  - 知识图谱与技能复用机制提升长期交互质量（多版本 release notes 强调）
  - 多通道集成（Reddit、Bluesky、Webhook）扩展应用场景

---

## 8. 待处理积压

以下重要 Issue 长期未响应，建议维护者关注：

| Issue | 类型 | 创建时间 | 状态 | 说明 |
|------|------|--------|------|------|
| [#2879](https://github.com/zeroclaw-labs/zeroclaw/issues/2879) | Bug | 2026-03-05 | 🔴 开放 | Web 前端忽略 `require_pairing = false` 配置 |
| [#3679](https://github.com/zeroclaw-labs/zeroclaw/issues/3679) | Bug | 2026-03-16 | 🔴 开放 | 成本追踪功能在分支迁移后丢失 |
| [#3456](https://github.com/zeroclaw-labs/zeroclaw/issues/3456) | Bug | 2026-03-14 | 🔴 开放 | WhatsApp 通道权限解析失败 |

> 💡 建议：对超过 7 天无进展的 S1+ 级 Issue 分配负责人，避免社区信任流失。

--- 

**报告生成时间**：2026-03-18  
**数据来源**：[Zeroclaw GitHub Repository](https://github.com/zeroclaw-labs/zeroclaw)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-03-18）

---

## 1. 今日速览

PicoClaw 在 2026-03-18 继续保持高活跃度，社区贡献与核心开发并行推进。过去24小时内共产生 **84 条 PR 更新**（41 已合并/关闭，43 待合并）和 **19 条 Issues 更新**（14 新开/活跃，5 已关闭），显示出强劲的开发节奏与用户参与度。项目发布两个新版本（`v0.2.3` 与 `nightly`），重点修复了多代理协作、模型路由、工具调用等关键路径的稳定性问题。整体项目健康度良好，处于功能快速迭代与架构优化并重阶段。

---

## 2. 版本发布

### 🔖 v0.2.3（正式版本）
- **发布时间**：2026-03-18  
- **关键变更**：
  - 修复 GLM 模型输入 nil 导致的异常（#1663）
  - 移除冗余 Darwin 系统托盘桩代码（#1694）
  - 为所有平台添加系统托盘 UI 支持（#1649）
- **影响范围**：跨平台用户体验提升，GLM 提供商稳定性增强。
- **迁移建议**：无破坏性变更，建议所有用户升级至该版本以获得更稳定的多平台支持。
- [查看完整 Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.3...main)

### 🌙 Nightly Build: v0.2.3-nightly.20260318.513537d2
- 自动化构建，包含最新未发布修复与实验性功能，**不建议生产环境使用**。

---

## 3. 项目进展

今日合并/关闭的重要 PR 显著提升了系统稳定性与多代理架构可靠性：

- **#1702**（已合并）：修复重复 `model_name` 配置下轮询策略错误，确保首个匹配项被正确使用，避免负载均衡失效。
- **#1710**（已合并）：更新 cron 测试以适配消息总线 API 变更，消除因接口废弃导致的测试失败。
- **#1490**（已合并）：重构 Agent 上下文管理逻辑，引入主动预算检查与安全压缩机制，防止上下文溢出。
- **#1179**（已合并）：彻底修复消息总线关闭时消息丢失问题，实现真正“优雅停机”。
- **#1313**（已合并）：将 cron 调度器重构为事件驱动模型，提升 CPU 效率并增强线程安全性。

> 这些合并标志着 PicoClaw 在**生产就绪性**（消息可靠性、资源调度）和**多代理协作基础**方面迈出关键步伐。

---

## 4. 社区热点

### 🔥 高讨论度 Issues

| Issue | 主题 | 评论数 | 核心诉求 |
|------|------|--------|--------|
| [#1498](https://github.com/sipeed/picoclaw/issues/1498) | 请求增加模型端搜索与 FastEmbed 支持 | 8 | 用户希望实现本地/远程模型索引检索，提升 RAG 能力 |
| [#1652](https://github.com/sipeed/picoclaw/issues/1652) | GLM Coding Plan 不支持 PicoClaw，消耗余额报错 | 5 | 提供商兼容性问题，影响实际使用成本 |
| [#1648](https://github.com/sipeed/picoclaw/issues/1648) | 添加 TTS/ASR 语音交互支持 | 3 | 扩展多模态交互能力，适配语音场景 |

> **分析**：社区正从“基础功能可用”向“高级能力集成”演进，对**多模态支持**（语音）、**高效检索**（FastEmbed）和**提供商兼容性**（GLM）需求强烈。

### 💬 高关注度 PR

- **#1700**（[链接](https://github.com/sipeed/picoclaw/pull/1700)）：修复 `spawn` 工具未正确使用目标 Agent 模型的问题，直接影响多代理任务委派准确性。
- **#1711**（[链接](https://github.com/sipeed/picoclaw/pull/1711)）：修复子代理无法访问工具注册表的严重缺陷，此前导致所有子代理工具调用失败。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重等级 | Issue | 描述 | 是否有 Fix PR |
|--------|-------|------|-------------|
| ⚠️ **高** | [#1713](https://github.com/sipeed/picoclaw/issues/1713) | 子代理通过 `spawn` 工具创建后无可用工具 | ✅ 有（#1711） |
| ⚠️ **高** | [#1678](https://github.com/sipeed/picoclaw/issues/1678) | 异步子代理传递原始 OpenRouter slug 导致 400 错误 | 🔄 待修复（相关 PR #1700 部分解决） |
| ⚠️ **中** | [#1297](https://github.com/sipeed/picoclaw/issues/1297) | light 模型路由未正确匹配 `model_list` | ✅ 有（#1702） |
| ⚠️ **中** | [#1658](https://github.com/sipeed/picoclaw/issues/1658) | Claude 工具调用 name 字段为空字符串触发 400 | 🔄 待修复 |
| ⚠️ **低** | [#1708](https://github.com/sipeed/picoclaw/issues/1708) | Gateway 模式下 REST API 端点不可用 | 🔄 调查中 |

> 多代理工具链稳定性是当前最紧迫问题，已有针对性修复正在合并中。

---

## 6. 功能请求与路线图信号

以下功能请求具备高采纳可能性，已有对应 PR 或技术铺垫：

| 功能请求 | 相关 Issue | 进展信号 |
|--------|-----------|--------|
| **多设备代理通信** | [#294](https://github.com/sipeed/picoclaw/issues/294) → #1712 | ✅ 已有 TPCP 适配器 PR 提交 |
| **TTS/ASR 语音支持** | [#1648](https://github.com/sipeed/picoclaw/issues/1648) | 🔄 架构设计已提出，待实现 |
| **环境变量集中管理** | [#1638](https://github.com/sipeed/picoclaw/issues/1638) | 🔄 社区共识强，适合下一版本 |
| **API Key 故障转移** | — | ✅ #1707 已实现多 key 自动切换 |

> 预计 **v0.3.0** 将聚焦于**多代理网络协作**与**语音交互原型**。

---

## 7. 用户反馈摘要

- **痛点**：
  - 子代理工具不可用导致自动化流程中断（#1713）
  - OpenRouter 模型 slug 解析错误频发（#1678）
  - Android Termux 下 armv7 设备飞书插件不兼容（#1675）
- **满意点**：
  - 系统托盘跨平台支持提升桌面体验（#1649）
  - 消息总线优雅停机改进可靠性（#1179）
- **使用场景**：
  - 用户在 Termux + Feishu 构建移动端 AI 助手
  - 通过 Docker Gateway 部署为团队共享服务
  - 利用 `spawn` 工具实现后台异步任务

---

## 8. 待处理积压

以下重要 Issue 长期未响应，建议维护者优先关注：

| Issue | 类型 | 创建时间 | 积压原因 |
|------|------|--------|--------|
| [#1098](https://github.com/sipeed/picoclaw/issues/1098) | Telegram 实时流式响应支持 | 2026-03-04 | 高价值用户体验增强，无技术障碍 |
| [#1475](https://github.com/sipeed/picoclaw/issues/1475) | 结构化事件流供编排系统集成 | 2026-03-13 | 对 Gateway/Orchestration 生态至关重要 |
| [#529](https://github.com/sipeed/picoclaw/issues/529) | 构建工具绕过安全守卫文档缺失 | 2026-02-20 | 安全风险需明确说明 |

> 建议在下个版本中明确上述功能的优先级或提供替代方案说明。

--- 

**报告生成时间**：2026-03-18  
**数据来源**：PicoClaw GitHub Repository (github.com/sipeed/picoclaw)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-03-18）

---

## 1. 今日速览

NanoClaw 在过去24小时内表现出**高活跃度**，共处理 28 条 Issues（9 新开 / 19 关闭）和 48 条 PR（11 合并/关闭，37 待合并），社区贡献密集。尽管无新版本发布，但多个关键功能与安全增强 PR 进入合并流程，项目正向多运行时支持、安全加固和可观测性方向快速演进。社区对跨平台兼容性（如 Apple Container 网络问题）和第三方 LLM 支持呼声强烈，反映出用户生态的多样化需求。

---

## 2. 版本发布

**无新版本发布**。当前开发重点集中于功能迭代与安全修复，预计下一版本将整合近期合并的模型切换、审计日志、SSRF 防护等特性。

---

## 3. 项目进展

今日有 **11 个 PR 被合并或关闭**，显著推进了以下方向：

- **安全增强**：  
  - #1035（已关闭）：通过 `PostToolUse` 钩子对 `WebFetch`/`WebSearch` 输出进行净化，防御提示注入攻击（[链接](https://github.com/qwibitai/nanoclaw/pull/1035)）。  
  - #1204（已关闭）：修复孤儿容器清理逻辑，引入 `INSTANCE_ID` 标签隔离多实例环境，避免误杀其他部署的容器（[链接](https://github.com/qwibitai/nanoclaw/pull/1204)）。

- **功能扩展**：  
  - #1201（已关闭）：集成 Sunsama 任务管理系统，提供完整的任务 CRUD 工具链（[链接](https://github.com/qwibitai/nanoclaw/pull/1201)）。  
  - #1199（已关闭）：解决多组同时运行时 db-explorer 端口冲突问题，支持按组配置端口暴露（[链接](https://github.com/qwibitai/nanoclaw/pull/1199)）。

- **开发者体验**：  
  - #1203（开放）：修复 `ANTHROPIC_BASE_URL` 路径解析，提升对第三方兼容 API（如本地部署模型）的支持（[链接](https://github.com/qwibitai/nanoclaw/pull/1203)）。

> 项目整体在**安全性、多实例稳定性与第三方集成**方面迈出关键步伐。

---

## 4. 社区热点

### 🔥 最活跃 Issue：#80 — 支持非 Claude 运行时（如 OpenCode、Gemini）
- **评论数：25** | **👍：47** | [链接](https://github.com/qwibitai/nanoclaw/issues/80)  
- **核心诉求**：用户担忧 Anthropic 封禁 OpenClaw 用户账户，呼吁 NanoClaw 解耦 LLM 提供商，支持开源替代方案（如 OpenCode）。  
- **信号分析**：此 Issue 长期高热度，反映项目对单一供应商的依赖风险。已有 PR #1197（OpenShell 运行时）尝试响应，但尚未合并，表明技术路径仍在评估中。

### 🔥 高优先级 Bug：#1142 — Agent SDK 版本锁定导致模型过时
- **优先级：High** | [链接](https://github.com/qwibitai/nanoclaw/issues/1142)  
- **影响范围**：容器默认使用旧版 SDK，导致无法自动升级至最新模型（如仍用 Claude 3.5 Sonnet）。  
- **社区反馈**：用户 fork 后需手动干预，破坏开箱即用体验。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| 🔴 High | #1103 Apple Container 网络故障 | macOS 容器无法通过 `host.docker.internal` 访问代理，因绑定地址错误（`127.0.0.1` vs `192.168.64.1`） | ❌ 无 |
| 🔴 High | #889 Unicode 代理字符污染 JSONL | Bash 输出中的孤体 Unicode 代理导致后续 API 调用失败（HTTP 400） | ❌ 无 |
| 🟠 Medium | #1143 技能文档路径错误 | `/data/env` 路径已移除，但技能文档仍引用该路径 | ❌ 无 |

> 建议优先处理 #1103 和 #889，二者均影响核心功能可用性。

---

## 6. 功能请求与路线图信号

以下功能请求具备高社区共识，且已有对应 PR 推进，**极可能纳入下一版本**：

| 功能 | Issue | 对应 PR | 状态 |
|------|------|--------|------|
| 运行时模型切换 | #80 | #1205（`/model` 命令） | ✅ 开放，高优先级 |
| 结构化审计日志 | #1174 | #1202（Web UI 追踪） | ✅ 开放 |
| 全量对话搜索 | #1173 | #1160（FTS5 实现） | ✅ 开放 |
| 多通道集成（WhatsApp/Telegram） | #1183 | #1206、#1200 | ✅ 部分合并 |

> 路线图清晰指向 **多模态通信、可观测性、多 LLM 支持** 三大支柱。

---

## 7. 用户反馈摘要

- **痛点**：  
  - “容器网络在 macOS 上完全不可用，文档没提 workaround”（#1103）  
  - “API 密钥明文存储在 `.env`，企业部署有合规风险”（呼应 #1176 加密需求）  
  - “消息队列无重试机制，容器崩溃就丢消息”（#1172）

- **满意点**：  
  - “轻量级设计比 EasyClaw 更适合个人使用”（#1184）  
  - “`/add-memory` 技能让长期上下文管理变得可行”（#1195 评论）

- **使用场景**：  
  - 家庭多设备协同（跨组消息 #586）  
  - 企业受限 K8s 环境部署（Sealos，#1184）  
  - 个人 WhatsApp 语音助手（#1183）

---

## 8. 待处理积压

| 类型 | ID | 标题 | 积压天数 | 提醒 |
|------|----|------|--------|------|
| Issue | #865 | 容器隔离不足以保障安全 | 8 天 | 高优先级安全议题，需架构层回应 |
| Issue | #1149 | 请求私有漏洞披露通道 | 2 天 | 安全研究员等待联系，应尽快建立 CVE 流程 |
| PR | #650 | 容器化 Claude 登录流程 | 44 天 | 提升认证安全性，长期未审 |
| PR | #565 | PID 锁防止重复实例 | 19 天 | 基础稳定性功能，建议合并 |

> 建议维护者优先处理 #1149（安全披露）和 #650（认证安全），二者均涉及核心信任模型。

---

**项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
活跃贡献者众多，安全/功能双轮驱动，但需加强 macOS 兼容性与文档同步。社区驱动的创新（如 #butterandcode 批量提案）是核心优势。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-03-18）

---

## 1. 今日速览

IronClaw 在发布 v0.19.0 后进入高活跃修复与增强阶段。过去24小时内，项目共处理 **50条 Issues**（新开/活跃46条，关闭4条）和 **50条 PRs**（待合并36条，已合并/关闭14条），社区贡献者密集提交功能优化与 Bug 报告。核心团队聚焦于 **Telegram 集成稳定性**、**Routine 系统 UX 改进** 和 **工具链 Schema 发现机制增强**，同时应对 v0.19.0 升级引发的数据库迁移与 Webhook 兼容性问题。整体项目处于快速迭代但需警惕回归风险的状态。

---

## 2. 版本发布

### 🔖 v0.19.0（2026-03-17）
- **新增功能**：
  - ✅ Telegram 热激活时验证所有者身份 ([#1157](https://github.com/nearai/ironclaw/pull/1157))
  - ✅ 配置解析统一化（Phase 2）：引入 `Settings` 回退机制 ([#1203](https://github.com/nearai/ironclaw/pull/1203))
  - ✅ Sandbox 层增加重试逻辑（部分实现，见 Release Notes）
- **⚠️ 已知升级问题**：
  - PostgreSQL 用户从 v0.18.0 升级至 v0.19.0 时，若曾应用 `V6__routines` 迁移，将因 checksum 不匹配失败（[#1328](https://github.com/nearai/ironclaw/issues/1328)）。**建议**：手动回滚或等待 v0.19.1 修复。
  - Telegram webhook 路由在升级后丢失，疑似构建产物未同步更新（[#1327](https://github.com/nearai/ironclaw/issues/1327)）。

> 📌 **迁移注意**：生产环境升级前请备份数据库，并验证 WASM 工具链 SHA256 校验和（PR #1310 已更新）。

---

## 3. 项目进展

今日关键合并/关闭 PR 推动以下方向：

| 进展领域 | PR | 说明 |
|--------|-----|------|
| **Telegram 稳定性** | [#1295](https://github.com/nearai/ironclaw/pull/1295)（已合并） | 修复“已有 Bot 需手动发消息才能配对”及“重配置跳过审批”问题，提升用户体验一致性。 |
| **安全加固** | [#1312](https://github.com/nearai/ironclaw/pull/1312)（已合并） | 在关键路径添加 `debug_assert!` 断言，提前捕获空工具名、非法状态转换等隐患。 |
| **发布流程** | [#1310](https://github.com/nearai/ironclaw/pull/1310)（已合并） | 自动发布 v0.19.1，更新 WASM 校验和，为后续热修复铺路。 |
| **搜索体验** | [#1313](https://github.com/nearai/ironclaw/pull/1313)（待合并） | Brave Search 结果支持缩略图 URL，增强信息可视化。 |

> 项目整体在 **多租户架构**（#1118）、**Routine 系统重构**（#1147）、**Webhook 可靠性**（#1254）等长期目标上持续推进，但部分大型 PR（如 #236、#465）仍处于深度 review 阶段。

---

## 4. 社区热点

### 🔥 高讨论 Issues/PRs

| 议题 | 链接 | 核心诉求分析 |
|------|------|-------------|
| **Brave Search API 收费变更** | [#1307](https://github.com/nearai/ironclaw/issues/1307) | 用户指出文档声称“免费”已失效，要求更新能力描述或提供替代方案，反映对第三方服务依赖透明度的关切。 |
| **Universal User Whitelist** | [#1272](https://github.com/nearai/ironclaw/issues/1272) | 多通道（Telegram/Discord/Slack）缺乏统一用户白名单，存在安全风险，呼吁默认启用 `owner_id` 校验。 |
| **Tool Schema Discovery 系列** | [#1333–#1338](https://github.com/nearai/ironclaw/issues/1333) | 集中反馈内置工具（`create_job`, `http`, `time` 等）Schema 对 LLM 不够友好，需显式表达操作语义、策略约束和运行时规则，指向 Agent 开发体验优化。 |

> 💡 社区明显关注 **安全性**（白名单、密钥泄露）、**可观测性**（Routine 摘要可读性）和 **Agent 开发效率**（Schema 发现），这些将成为下阶段优先级信号。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重级 | Issue | 描述 | 修复状态 |
|--------|-------|------|----------|
| 🔴 **P0** | [#1328](https://github.com/nearai/ironclaw/issues/1328) | v0.19.0 升级导致 PostgreSQL `V6__routines` 迁移 checksum 失败，服务无法启动 | ⏳ 无 PR，需紧急 hotfix |
| 🔴 **P0** | [#1327](https://github.com/nearai/ironclaw/issues/1327) | Telegram webhook 路由缺失，消息无法接收 | ⏳ 无 PR，疑似构建问题 |
| 🟠 **P1** | [#1329](https://github.com/nearai/ironclaw/issues/1329) | 用户粘贴 PAT 后，密钥检测虽拦截消息，但永久锁定 Telegram 通道 | ⏳ 无 PR，需修复状态机 |
| 🟠 **P1** | [#1000](https://github.com/nearai/ironclaw/issues/1000) | Rate limiter 返回 `"retry after None"`，Agent 无法执行退避 | ✅ 已关闭（见昨日修复） |
| 🟡 **P2** | [#1339](https://github.com/nearai/ironclaw/issues/1339) | Raspberry Pi (armv7) 编译失败，缺乏 ARM 支持 | ⏳ 无 PR，需评估跨平台构建 |

---

## 6. 功能请求与路线图信号

结合新 Issue 与活跃 PR，以下功能有望纳入近期版本：

- **Routine 系统全面 UX 升级**：包括 Web 端创建/编辑流程（#1325）、可读触发器摘要（#1324）、CLI 支持多类型 Routine（#1322），配合 #1147 Schema 重构，构成完整迭代闭环。
- **多租户与权限控制**：#1118（多租户隔离）、#1272（全局白名单）反映企业级部署需求，可能推动 v0.20 架构调整。
- **MCP/WASM 工具链增强**：#1240（NEAR AI MCP）、#1207（WhatsApp Webhook）、#1337（Schema 发现）显示对标准化 Agent 互操作协议的投入。
- **嵌入式设备支持**：#1339 提出 Raspberry Pi 支持，若社区响应积极，可能扩展 CI 构建矩阵。

---

## 7. 用户反馈摘要

- **痛点**：
  - “升级后数据库直接报错，文档没提迁移风险”（#1328）
  - “Telegram 配对流程反直觉，老用户还得先发消息”（#1001）
  - “Routine 历史记录像 JSON 乱码，根本没法看”（#1321）
- **满意点**：
  - “v0.19.0 的 Telegram 所有者验证终于加上了，安全多了”（#1157 评论）
  - “Brave Search 加缩略图很实用，信息一目了然”（#1313 预期反馈）
- **使用场景**：
  - 企业用户关注多租户隔离与审计（#1118）
  - 开发者希望 Agent 能更智能理解工具语义（#1333–#1338）
  - 个人用户担忧第三方 API 成本转嫁（#1307）

---

## 8. 待处理积压

| 积压项 | 类型 | 延迟天数 | 提醒 |
|--------|------|----------|------|
| [#236](https://github.com/nearai/ironclaw/pull/236) | PR | 27 天 | 大型 PR：失败任务结构化回退，影响可靠性，需核心团队 review |
| [#465](https://github.com/nearai/ironclaw/pull/465) | PR | 44 天 | 对话历史加载与批处理，多通道关键功能，长期未合入 |
| [#857](https://github.com/nearai/ironclaw/issues/857) | Issue | 8 天 | NEAR AI 部署上下文感知缺失，影响托管体验，无 assignee |
| [#1022](https://github.com/nearai/ironclaw/issues/1022) | Issue | 6 天 | Web 端全局搜索（Omnisearch）需求明确，但无对应 PR |

> 🛎️ **维护者注意**：建议本周内对 #236、#465 给出 review 结论，并为 #857 分配负责人。

--- 

**报告生成时间**：2026-03-18  
**数据来源**：GitHub IronClaw Repository (github.com/nearai/ironclaw)

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-03-18）

---

## 1. 今日速览

LobsterAI 在 2026 年 3 月 17 日至 18 日期间表现出极高的开发活跃度，共处理 **25 条 PR**（其中 22 条已合并/关闭）、**11 条 Issues 更新**（8 条新开/活跃，3 条关闭），并发布了一个新版本。项目整体处于快速迭代与问题修复阶段，核心团队响应迅速，重点聚焦于 OpenClaw 运行时稳定性、多通道兼容性及沙箱环境问题。社区反馈集中在中英文混排空格、沙箱技能失效等关键体验痛点。

---

## 2. 版本发布

**新版本：2026.3.17**（[Release 链接](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.3.17)）

### 主要更新内容：
- ✅ **修复系统提示重复注入**：仅在第一轮对话中注入系统提示，避免后续轮次冗余（#456）
- ✅ **修复频道消息顺序错乱**：用户消息不再显示在 AI 回复之后（#451）
- ✅ **移除模型探测逻辑**：删除 `probeCoworkModelReadiness()`，解决 20 秒阻塞超时问题（#457）
- ✅ **修复自定义端点 URL 拼接错误**：自动剥离 `/chat/completions` 后缀，防止 404（#462, #464）
- ✅ **修复中文乱码问题**：优化 GB18030 编码误判逻辑，避免会话标题乱码（#461）
- ✅ **支持无认证 Provider 占位 API Key**：解决 Ollama/vLLM 等本地模型“No API key found”报错（#470）

### 破坏性变更与迁移注意：
- ⚠️ **计划任务数据迁移**：旧版 SQLite 存储的定时任务将自动迁移至 `jobs.json` 和 `runs/` 目录（#469），建议用户备份数据后升级。
- ⚠️ **沙箱环境变更**：部分内置技能依赖 Python 运行时，若沙箱未预装可能导致技能失效（见 #458），需等待后续沙箱镜像更新。

---

## 3. 项目进展

今日共 **22 个 PR 被合并/关闭**，显著推进了以下方向：

| 类别 | 进展摘要 | 关联 PR |
|------|--------|--------|
| **架构优化** | 将 NIM 网关从原生 SDK 迁移至 OpenClaw 插件架构，统一通道管理范式 | #473 |
| **功能增强** | 新增 POPO 聊天机器人作为 OpenClaw 插件集成 | #472 |
| | 支持 LM Studio 作为本地模型 Provider（兼容 OpenAI API） | #428（待合并） |
| **定时任务** | 实现历史任务数据迁移机制，修复非 IM 通道任务执行问题 | #469 |
| | 修复钉钉通道定时消息无法投递问题（JSON session key 解析兼容） | #465 |
| **运行时稳定性** | 修复 Electron 开发启动竞态条件，避免 Vite 与主进程加载冲突 | #457 |
| | 恢复 IM 会话管理命令功能 | #467, #468 |
| **网络与安全** | OpenClaw 运行时支持系统代理配置 | #466 |
| **UI/UX** | 优化权限确认弹窗布局，危险操作警告始终可见 | #445 |

> 项目整体向“插件化、标准化、稳定化”迈出关键一步，OpenClaw 运行时逐渐成为统一调度核心。

---

## 4. 社区热点

### 🔥 最活跃 Issue：#344 — “自动在字符串中加空格”问题
- **评论数：6** | [链接](https://github.com/netease-youdao/LobsterAI/issues/344)
- **用户诉求**：中文与数字混合时（如“版本v1.2”），LobsterAI 强制插入空格（“版本 v 1 . 2”），严重影响输出可用性，用户称“无法替代 OpenClaw”。
- **分析**：此为文本后处理逻辑缺陷，可能涉及分词或格式化模块。虽非崩溃级 Bug，但直接影响核心用户体验，亟需修复。

### 🔍 争议性讨论：#435 — “这是套壳的吗？”
- **评论数：3** | [链接](https://github.com/netease-youdao/LobsterAI/issues/435)
- **用户质疑**：多个国产 Claw 工具（Wind Claw、Zeelin Claw）界面与 LobsterAI 高度相似，疑似套壳且未保留版权声明。
- **信号价值**：反映项目影响力扩大，但也提示需加强开源协议声明与品牌保护。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重程度 | Issue | 描述 | 是否已有 Fix |
|--------|------|------|-------------|
| ⚠️ **高** | #458 沙箱模式下命令兼容性问题 | 沙箱缺少 Python 等运行时，导致 docx/xlsx/pdf 等技能无法使用 | ❌ 无 PR，需沙箱镜像更新 |
| ⚠️ **高** | #459 内置 Agent 无法访问桌面版 MCP（如 Notion） | 新版移除 Notion MCP 集成，用户无法操作本地工作空间 | ❌ 无 PR，架构调整遗留问题 |
| ⚠️ **中** | #455 PowerShell 中文乱码 | Windows 下 CLI 命令输出中文显示为乱码（如 `es` 工具） | ❌ 无 PR，编码处理问题 |
| ⚠️ **中** | #474 定时任务与沙箱设置丢失 | 升级后定时任务消失，设置中无 sandbox/local 选项 | ✅ 部分修复（#469 迁移逻辑） |
| ✅ **已修复** | #452 “No API key found for provider 'lobster'” | 升级后认证失败 | ✅ #470 提供占位 Key |
| ✅ **已修复** | #453 “烧 TOKEN”问题 | 每次对话附带完整系统指令 | ✅ #456 仅首轮注入 |
| ✅ **已修复** | #454 新建任务首次对话报错 | “model validation failed: fetch failed” | ✅ #457 移除模型探测 |

---

## 6. 功能请求与路线图信号

| 用户请求 | 对应 PR/Issue | 纳入可能性 |
|--------|--------------|----------|
| 支持 LM Studio 本地模型 | #428（已提交，待合并） | ⭐⭐⭐⭐☆ 高（符合本地 AI 趋势） |
| 每小时定时任务 | #376（已关闭，可能已合并） | ⭐⭐⭐⭐⭐ 已实现 |
| 沙箱预装 Python 运行时 | #458 | ⭐⭐⭐☆☆ 中（需基础设施配合） |
| 恢复 Notion MCP 支持 | #459 | ⭐⭐☆☆☆ 低（架构转向插件化，可能需用户自配） |
| 修复中英文空格问题 | #344 | ⭐⭐⭐⭐☆ 高（高频痛点，技术难度低） |

> 下一版本 likely 聚焦：**本地模型支持扩展 + 沙箱环境完善 + 文本输出规范化**。

---

## 7. 用户反馈摘要

- **满意点**：
  - 快速响应 Bug（如 #452、#454 当日修复）
  - 多通道支持丰富（钉钉、飞书、POPO、LM Studio 等）
  - 定时任务功能实用，迁移机制贴心（#469）

- **痛点与不满**：
  - “中文+数字自动加空格”严重影响专业文档生成（#344）
  - 沙箱环境功能残缺，技能“形同虚设”（#458）
  - 升级后配置丢失，体验断裂（#474）
  - 部分用户怀疑项目原创性，影响信任（#435）

- **典型使用场景**：
  - 企业 IM 集成（钉钉/飞书）自动化提醒
  - 本地大模型（Ollama/LM Studio）私有化部署
  - 文档处理（docx/xlsx）与知识库（Notion）联动

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 积压时长 | 建议行动 |
|------|------|------|--------|--------|
| Issue | #344 | 自动在字符串中加空格 | 9 天 | 高优先级修复，影响核心体验 |
| Issue | #368 | Ubuntu 安装后界面空白 | 8 天 | 需复现并检查 Electron 打包逻辑 |
| Issue | #248 | DeepSeek/Qwen 测试成功但报 401 | 13 天 | 检查 Token 校验逻辑与缓存机制 |
| PR | #428 | 添加 LM Studio 支持 | 3 天 | 尽快 review 并合并，增强本地模型生态 |

> ⚠️ 维护者需重点关注 **#344** 和 **#368**，二者均为长期未解且影响广泛用户体验的问题。

--- 

**报告生成时间**：2026-03-18  
**数据来源**：LobsterAI GitHub Repository ([netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI))

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

**TinyClaw 项目动态日报**  
📅 日期：2026-03-18  
🔗 项目地址：[github.com/TinyAGI/tinyclaw](https://github.com/TinyAGI/tinyclaw)

---

### 1. 今日速览  
过去24小时内，TinyClaw 社区活跃度中等，共产生 **1 条新 Issue** 和 **3 条 PR 更新**，无新版本发布。开发重点集中在架构简化与前端体验优化，包括移除对话状态、重构办公室视图及修复 SSE 连接问题。一个高严重性 Bug 被报告，涉及 `tinylclaw setup` 命令重置代理配置，可能影响核心 CLI 功能稳定性。

---

### 2. 版本发布  
❌ 无新版本发布。

---

### 3. 项目进展  
今日无 PR 被合并，但有 **3 个重要 PR 持续更新中**，推动关键架构与体验改进：

- **#213 [refactor(queue)]**：简化代理通信架构，移除对话状态追踪机制，实现扁平化直接消息流（DM）与即时响应流。此举显著降低系统复杂度，提升可维护性。  
  🔗 https://github.com/TinyAGI/tinyclaw/pull/213

- **#232 [fix(tinyoffice)]**：修复 Next.js 重写层对 SSE 响应的缓冲问题，使前端 `EventSource` 直连 API 服务（端口 3777），解决“始终显示 Disconnected”的 UI 异常。支持通过 `NEXT_PUBLIC_SSE_URL` 环境变量自定义部署。  
  🔗 https://github.com/TinyAGI/tinyclaw/pull/232

- **#212 [feat(office)]**：重新设计 `/office` 实时工作空间界面，提升多代理协作场景下的可视化与交互体验。  
  🔗 https://github.com/TinyAGI/tinyclaw/pull/212

> 💡 尽管尚未合并，上述 PR 均处于活跃开发状态，反映出项目正向“轻量、实时、去中心化通信”方向演进。

---

### 4. 社区热点  
**#228 [Bug]: Changing heartbeat resets complete agents** 是当前唯一新 Issue，虽仅 2 条评论，但因 **Severity: High** 且涉及核心 CLI 功能，引发关注。  
用户 @Chavell3 反馈：使用 `tinylclaw setup` 修改心跳设置时，整个代理配置被意外清除，且无有效 workaround。  
🔗 https://github.com/TinyAGI/tinyclaw/issues/228  

> ⚠️ 该问题暴露出配置管理模块存在状态覆盖风险，可能影响用户生产环境部署信心，需优先响应。

---

### 5. Bug 与稳定性  
| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| 🔴 High | #228 | `tinylclaw setup` 修改心跳参数导致全部代理配置重置 | ❌ 无 |

> 该 Bug 直接影响用户代理配置的持久性与安全性，属于关键路径故障，建议维护者尽快复现并评估修复优先级。

---

### 6. 功能请求与路线图信号  
从近期 PR 可识别以下潜在路线图方向：

- **去状态化代理通信**（#213）：放弃对话聚合与 pending 计数，转向事件驱动、无状态的 DM 模型，契合轻量级 AI 助手定位。
- **增强实时协作体验**（#212 + #232）：优化 `/office` 视图与 SSE 连接稳定性，表明项目正强化多代理协同工作场景支持。
- **部署灵活性提升**：#232 引入 `NEXT_PUBLIC_SSE_URL` 支持，暗示对自托管与多云部署场景的重视。

> ✅ 上述功能极有可能纳入下一版本（v0.5+），形成“轻架构 + 强实时 + 易部署”三位一体演进策略。

---

### 7. 用户反馈摘要  
来自 #228 的用户 @Chavell3 反馈揭示了真实痛点：

> “I tried to change the heartbeat setting... anyway ran through the whole setup and it destroyed my whole agent setup.”

- **痛点**：CLI 配置流程缺乏幂等性与回滚机制，微小参数调整引发全局状态丢失。
- **使用场景**：用户尝试微调代理心跳以适配网络环境，属常见运维操作。
- **情绪倾向**：明显不满，因无替代方案（“no workaround”），影响信任度。

> 📌 建议：未来 CLI 应支持增量配置更新与配置备份/恢复功能。

---

### 8. 待处理积压  
以下为长期未合并但重要性较高的 PR，建议维护者评估合并优先级：

| PR | 类型 | 创建日期 | 状态 | 建议 |
|----|------|--------|------|------|
| #213 | refactor(queue) | 2026-03-14 | OPEN | 架构级变更，需充分测试后合并 |
| #212 | feat(office) | 2026-03-13 | OPEN | 用户体验关键，建议配合 #232 同步推进 |

> 🔔 提醒：#213 已存在超过 4 天未合并，若涉及 breaking change，应尽快沟通迁移指南。

---

**总结**：TinyClaw 正处于架构优化与用户体验升级的关键阶段，开发节奏稳健。需警惕高严重性配置 Bug 对社区信任的潜在冲击，建议优先修复 #228 并加强 CLI 配置鲁棒性测试。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目动态日报（2026-03-18）**

---

### 1. 今日速览  
过去24小时内，Moltis 项目保持中等活跃度：共新增1条 Issue 和3条 Pull Request，无新版本发布。社区对飞书（Lark/Feishu）集成功能表现出明确兴趣，相关 Issue 获得3个点赞和2条评论。开发侧聚焦于核心功能优化与安全性增强，包括网关配置脱敏、MiniMax 消息处理逻辑修复及 MCP 服务器友好命名支持。整体项目处于稳健迭代阶段，无紧急阻塞问题。

---

### 2. 版本发布  
*无新版本发布。*

---

### 3. 项目进展  
今日无 PR 被合并或关闭，但以下3个重要 PR 处于待合并状态，体现近期开发重点：

- **#449 feat(gateway): sanitize channel config access and masked secrets**  
  引入 `ChannelService::account_config` 统一接口，递归脱敏通道配置中的敏感字段（如密钥），并在更新时保留原有秘密值，提升系统安全性与可维护性。  
  🔗 [PR #449](https://github.com/moltis-org/moltis/pull/449)

- **#448 fix(providers): keep minimax system messages in history**  
  修复 MiniMax 提供程序将系统指令错误提取至顶层 `system` 字段的问题，确保其保留在标准 `messages` 数组中，符合通用对话历史规范，已通过专项测试验证。  
  🔗 [PR #448](https://github.com/moltis-org/moltis/pull/448)

- **#439 feat(mcp): add custom display names for MCP servers**  
  为 MCP 服务器配置添加可选 `display_name` 字段，允许用户设置友好名称而不影响底层技术标识，提升多服务器管理体验。已同步更新 GraphQL 类型与 RPC 处理逻辑。  
  🔗 [PR #439](https://github.com/moltis-org/moltis/pull/439)

> 上述 PR 若顺利合并，将显著提升系统安全性、兼容性与用户体验，标志着项目在“多通道治理”与“MCP 生态集成”方向持续深化。

---

### 4. 社区热点  
**#383 [OPEN] Support Lark/Feishu** 是当前最活跃的社区议题，获3个点赞与2条评论，创建于2026-03-10，昨日（03-17）仍有更新。  
用户明确提出希望 Moltis 支持飞书（Lark）作为消息通道，反映出企业用户对国内主流协作平台集成的强烈需求。该 Issue 标签为 `[enhancement]`，尚未有对应 PR，但高互动量表明其可能成为下一阶段优先级功能。  
🔗 [Issue #383](https://github.com/moltis-org/moltis/issues/383)

---

### 5. Bug 与稳定性  
*过去24小时内无新报告 Bug 或崩溃问题。*  
现有 PR #448 针对 MiniMax 系统消息处理逻辑进行了修复，属于历史行为一致性调整，非紧急线上故障，但有助于避免未来兼容性问题。

---

### 6. 功能请求与路线图信号  
除飞书集成（#383）外，以下功能已通过 PR 进入实现阶段，预示其将被纳入近期版本：

- **MCP 服务器自定义显示名**（#439）：提升多服务器场景下的可管理性，属用户体验优化类功能，实现完整且无争议。
- **通道配置安全脱敏机制**（#449）：响应安全最佳实践，防止敏感信息泄露，具备高优先级合并潜力。

结合社区反馈与开发节奏判断，**飞书通道支持**极有可能作为下一个 major enhancement 被规划，建议维护团队评估技术可行性并启动原型设计。

---

### 7. 用户反馈摘要  
从 #383 的评论中可提炼出关键用户诉求：  
> “我们团队重度依赖飞书进行内部协作，若 Moltis 能直接对接飞书机器人，将极大简化 AI 助手的部署流程。” —— 匿名用户  

痛点集中于 **企业消息平台集成缺失**，尤其是对中国本土生态（如飞书）的支持不足。用户对现有功能稳定性未提出质疑，但对扩展性有明确期待，满意度偏向“功能可用但生态待完善”。

---

### 8. 待处理积压  
以下为长期未响应的重要事项，建议维护者关注：

- **#383 Support Lark/Feishu**（开放9天，2条评论，3点赞）  
  虽非技术阻塞项，但作为高热度 enhancement 请求，长期无官方回应可能影响社区信心。建议至少标注 `needs-investigation` 或分配初步调研任务。  
  🔗 [Issue #383](https://github.com/moltis-org/moltis/issues/383)

- **#439 feat(mcp): add custom display names for MCP servers**（开放3天，无评论）  
  功能完整且无冲突，但尚未进入 review 流程，可能存在资源瓶颈，建议优先推进合并以激励贡献者。

---  
*数据来源：GitHub moltis-org/moltis，统计截止 2026-03-18 00:00 UTC*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-03-18）

---

## 1. 今日速览

CoPaw 在 2026-03-18 继续保持高活跃度，过去24小时内共处理 **50 条 Issues**（新开/活跃 41 条，关闭 9 条）和 **50 条 PRs**（合并/关闭 32 条，待合并 18 条），社区参与度显著。项目发布两个新版本（`v0.1.0-beta.1` 和 `v0.1.0-beta.2`），其中后者包含对 `a2a-sdk` 的破坏性变更升级。核心功能如记忆压缩、多模态支持、Agent 编排等持续迭代，但 Windows 平台稳定性与飞书渠道体验问题引发较多用户反馈。

---

## 2. 版本发布

### 🔄 v0.1.0-beta.2（最新）
- **关键变更**：升级 `agentscope-runtime` 至 `1.1.1`，以适配 `a2a-sdk~=1.0.0` 的破坏性变更。
- **影响范围**：所有依赖 A2A 协议的功能模块（如跨 Agent 通信、部分技能调用）需同步更新。
- **迁移建议**：用户若从旧版升级，需重新安装依赖或重建虚拟环境；容器化部署建议拉取最新镜像。
- [查看完整变更日志](https://github.com/agentscope-ai/CoPaw/compare/v0.1.0-beta.1...v0.1.0-beta.2) | [PR #1684](https://github.com/agentscope-ai/CoPaw/pull/1684)

> ⚠️ 此为**破坏性更新**，未升级可能导致运行时错误。

---

## 3. 项目进展

今日共 **32 个 PR 被合并或关闭**，重点推进方向包括：

| 类别 | 进展摘要 | 相关链接 |
|------|--------|--------|
| **记忆系统优化** | 新增记忆压缩进度提示、token 计数与历史管理功能，修复消息压缩后数量不匹配问题 | [#1689](https://github.com/agentscope-ai/CoPaw/pull/1689), [#1557](https://github.com/agentscope-ai/CoPaw/pull/1557), [#1628](https://github.com/agentscope-ai/CoPaw/pull/1628) |
| **多模态与模型支持** | 修复非多模态 LLM 的媒体块过滤逻辑，提升 Qwen3/GGUF 模型兼容性 | [#1676](https://github.com/agentscope-ai/CoPaw/pull/1676) |
| **Agent 架构增强** | 实现零停机 Agent 重载、心跳机制修复，提升配置热更新稳定性 | [#1664](https://github.com/agentscope-ai/CoPaw/pull/1664), [#1670](https://github.com/agentscope-ai/CoPaw/pull/1670) |
| **技能生态扩展** | 集成 ModelScope SkillHub，增强内置技能双向同步能力 | [#1673](https://github.com/agentscope-ai/CoPaw/pull/1673), [#1674](https://github.com/agentscope-ai/CoPaw/pull/1674) |
| **安全加固** | 新增危险 Shell 命令检测规则（如 `dd`, `mkfs`, 反向 Shell 等） | [#1484](https://github.com/agentscope-ai/CoPaw/pull/1484) |

> ✅ 项目整体向 **多 Agent 协作架构** 和 **企业级稳定性** 迈出关键步伐。

---

## 4. 社区热点

### 🔥 高讨论度 Issues（评论数 ≥5）

| Issue | 主题 | 核心诉求 | 链接 |
|------|------|--------|------|
| [#1610](https://github.com/agentscope-ai/CoPaw/issues/1610) | 容器化部署任务中断问题 | 用户希望关闭前端网页后后台任务仍能持续运行（尤其 NAS 场景） | 14 评论 |
| [#1682](https://github.com/agentscope-ai/CoPaw/issues/1682) | v0.1.0b 安装后无法启动 | Windows 用户遭遇 `lazy_loader.py` 导入错误，疑似依赖冲突 | 12 评论 |
| [#1454](https://github.com/agentscope-ai/CoPaw/issues/1454) | 记忆压缩输出错乱 | 压缩后的摘要发送至日志而非用户聊天通道（如 Telegram） | 8 评论 |
| [#1345](https://github.com/agentscope-ai/CoPaw/issues/1345) | 飞书频道“延迟回复” | Bot 回复错位（答非所问），疑似会话状态管理缺陷 | 8 评论 |
| [#352](https://github.com/agentscope-ai/CoPaw/issues/352) | 记忆与技能按用户隔离 | 当前全局共享记忆/技能，需支持多租户隔离 | 7 评论 |

> 💡 用户强烈呼吁 **后台任务持久化** 和 **多用户数据隔离**，反映生产环境部署痛点。

---

## 5. Bug 与稳定性

### 🚨 高优先级 Bug（按严重性排序）

| 问题 | 影响 | 状态 | 修复进展 |
|------|------|------|--------|
| **Windows 启动失败**（[#1682](https://github.com/agentscope-ai/CoPaw/issues/1682), [#1687](https://github.com/agentscope-ai/CoPaw/issues/1687)） | 安装后无法启动，Python 进程僵死 | 🔴 未修复 | 疑似 `a2a-sdk` 升级引入依赖冲突，需回滚或热修 |
| **消息压缩计数不匹配**（[#1222](https://github.com/agentscope-ai/CoPaw/issues/1222), [#1663](https://github.com/agentscope-ai/CoPaw/issues/1663)） | API 调用失败（GLM 报错 1210），会话中断 | 🟡 部分修复 | [#1557](https://github.com/agentscope-ai/CoPaw/pull/1557) 已合并，待验证 |
| **飞书多模态失效**（[#918](https://github.com/agentscope-ai/CoPaw/issues/918)） | 图片/语音无法被多模态模型识别，强制走本地工具 | 🔴 未修复 | 需明确是否启用原生多模态或工具调用 |
| **Windows 内存搜索不稳定**（[#1620](https://github.com/agentscope-ai/CoPaw/issues/1620)） | 文件监听器误清 `file_store`，导致搜索结果缺失 | 🔴 未修复 | 平台特定 Bug，需重构文件监听逻辑 |

> ⚠️ Windows 平台稳定性已成为当前最大瓶颈，建议优先发布 hotfix。

---

## 6. 功能请求与路线图信号

### 📌 高潜力功能需求（已有相关 PR 或社区共识）

| 功能 | 用户诉求 | 开发进展 | 预期版本 |
|------|--------|--------|--------|
| **多 Agent 编排网关**（[#508](https://github.com/agentscope-ai/CoPaw/issues/508)） | 支持主 Agent 调用子 Agent 并行处理任务 | 已有概念设计，[#1638](https://github.com/agentscope-ai/CoPaw/issues/1638) 验证可行性 | v0.2.0 |
| **知识层 MVP**（[#1679](https://github.com/agentscope-ai/CoPaw/pull/1679)） | 本地知识检索与图工具桥接 | PR 已提交，聚焦 lexical 引擎 | v0.1.1 |
| **Lite Docker 镜像**（[#1648](https://github.com/agentscope-ai/CoPaw/issues/1648)） | 移除 llama.cpp/MLX/Ollama 依赖，减小体积 | 社区支持度高，易实现 | v0.1.1 |
| **飞书官方插件适配**（[#1595](https://github.com/agentscope-ai/CoPaw/issues/1595)） | 解决文档无编辑权限问题 | 依赖字节接口开放，需合作推进 | 待定 |

> ✅ **多 Agent 架构** 和 **知识层** 将成为下一阶段核心方向。

---

## 7. 用户反馈摘要

### ✅ 满意点
- “记忆压缩机制有效缓解了长对话 token 超限问题”（[#1596](https://github.com/agentscope-ai/CoPaw/issues/1596) 评论）
- “Docker 部署流程清晰，适合私有化场景”（[#1452](https://github.com/agentscope-ai/CoPaw/issues/1452) 上下文）

### ❌ 痛点
- **“容器关前端就停任务，NAS 上根本无法用”** —— 反映后台服务化能力缺失
- **“飞书回复总是慢半拍，像在跟上一个我对话”** —— 会话状态同步机制缺陷
- **“Windows 版装完打不开，只能切 Linux”** —— 跨平台兼容性不足
- **“不同用户的记忆混在一起，太危险了”** —— 多租户隔离需求迫切

---

## 8. 待处理积压

### ⏳ 长期未响应重要 Issue（>7 天无维护者回复）

| Issue | 类型 | 积压天数 | 风险等级 |
|------|------|--------|--------|
| [#352](https://github.com/agentscope-ai/CoPaw/issues/352) | 用户维度记忆/技能隔离 | 16 天 | 🔴 高（安全/合规风险） |
| [#508](https://github.com/agentscope-ai/CoPaw/issues/508) | 多 Agent 编排网关 | 15 天 | 🟠 中（架构演进关键） |
| [#1448](https://github.com/agentscope-ai/CoPaw/issues/1448) | 小模型上下文优化 | 5 天 | 🟠 中（本地部署体验） |

> 📢 **建议维护者优先回应 [#352] 和 [#508]**，二者分别关乎数据安全与架构未来。

---

**报告生成时间**：2026-03-18  
**数据来源**：[CoPaw GitHub Repository](https://github.com/agentscope-ai/CoPaw)  
**分析师备注**：项目处于快速迭代期，需加强 Windows 平台测试与多用户场景验证。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报（2026-03-18）

---

## 1. 今日速览

过去24小时内，ZeptoClaw 项目保持中等活跃度，共处理 **6条 Issues**（3新开、3关闭）与 **15条 PR 更新**（14待合并、1已合并/关闭），无新版本发布。社区主要贡献集中在依赖项维护与安全增强功能提案上，开发节奏以渐进式优化为主。核心团队对工具链权限问题和凭证管理提出明确改进方向，显示出对开发体验与生产安全性的双重关注。

---

## 2. 版本发布

**无新版本发布**。当前主线仍处于功能迭代与基础设施加固阶段，暂无正式版本更新计划。

---

## 3. 项目进展

- **#369 [CLOSED]**：修复了 `lint-container.sh` 在 rootless Podman 环境下因 `/usr/local/cargo` 目录属主问题导致的 Cargo 权限拒绝错误。通过设置 `CARGO_HOME=/cargo-home` 并重挂载缓存目录解决，**不影响现有 API 或用户配置**，属于开发/CI 环境优化（[链接](https://github.com/qhkm/zeptoclaw/issues/369)）。
- **#368 [CLOSED]**：确认并关闭了“代理工具循环中图像未解析为 base64”的问题报告，表明该缺陷已被识别并可能已有内部修复（[链接](https://github.com/qhkm/zeptoclaw/issues/368)）。
- **#370 [CLOSED]**：WebEx 通道相关 PR 被关闭，虽未提供详细说明，但结合上下文推测为实验性功能撤回或重构（[链接](https://github.com/qhkm/zeptoclaw/pull/370)）。

整体来看，项目在**开发环境稳定性**和**多模态交互可靠性**方面取得小幅但关键进展。

---

## 4. 社区热点

- **#373 [feat, area:config, P3-normal]**：提议引入独立凭证存储文件（如 `~/.zeptoclaw/credentials.json`，权限 600），将 API 密钥从 `config.json` 中分离，避免敏感信息随配置共享泄露。该 Issue 引用 NemoClaw 实践作为参考，**反映社区对安全边界的强烈诉求**（[链接](https://github.com/qhkm/zeptoclaw/issues/373)）。
- **#371 [feat, area:safety, P2-high]**：提出基于 YAML 的“默认拒绝”网络出口策略系统，扩展现有 per-tool 域名控制机制。此提案直接对标企业级安全需求，**可能成为下一阶段安全架构的核心组件**（[链接](https://github.com/qhkm/zeptoclaw/issues/371)）。

两议题虽评论较少，但均由核心维护者 @qhkm 发起，信号强度高，预示安全模块将成重点演进方向。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 是否有 Fix PR |
|--------|------|------|-------------|
| **高** | #368 图像路径未转 base64 导致 LLM 接收无效输入 | 已关闭 | ✅（隐含修复） |
| **中** | #369 Cargo 权限 denied（rootless Podman） | 已关闭 | ✅（通过环境变量与挂载修复） |

无新增高优先级崩溃或回归报告，整体稳定性良好。

---

## 6. 功能请求与路线图信号

以下功能请求具备较高落地可能性，且已有明确设计思路：

- **专用凭证存储**（#373）：符合行业安全最佳实践，实现成本低、风险小，**极可能纳入 v0.5+ 版本**。
- **网络出口策略引擎**（#371）：虽复杂度较高，但已被标记为 P2-high，且借鉴成熟方案，**有望作为安全子系统的首阶段交付物**。
- **结构化进度协议**（#372）：用于长任务反馈，提升用户体验，属“可见性增强”类功能，**适合在工具链稳定后优先实现**。

值得注意的是，#387 提出的“基于 Containerfile 的核心模板 + ZeptoCapsules 映射”虽具创新性，但描述模糊且标记为“争议性”，短期内落地概率较低。

---

## 7. 用户反馈摘要

从 Issues 内容可提炼出以下真实用户痛点：

- **安全焦虑**：用户担忧 API 密钥与常规配置混存（#373），反映对配置共享、备份、版本控制场景下的泄露风险敏感。
- **多模态支持缺陷**：图像输入在工具循环中失效（#368）暴露了复杂工作流下的状态管理漏洞，影响视觉 Agent 的实用性。
- **开发环境兼容性**：Podman rootless 模式下的权限问题（#369）表明项目需加强对非 Docker 标准环境的覆盖。

整体反馈偏向**生产就绪度**与**企业级安全合规**，而非基础功能缺失。

---

## 8. 待处理积压

- **#287 [OPEN] chore: Dev tools for consistent pre-PR state**（创建于 2026-03-09，已开放 9 天）  
  该 PR 旨在统一开发者本地测试环境，减少“在我机器上能跑”类问题，**对项目可维护性至关重要**，但长期未合并或评论，建议维护者尽快 review（[链接](https://github.com/qhkm/zeptoclaw/pull/287)）。

> 建议：将 #287 纳入下一开发周期优先级，因其直接影响贡献者体验与代码质量基线。

--- 

**项目健康度评估**：⭐⭐⭐⭐☆（4/5）  
- 优势：安全导向明确、依赖更新及时、核心问题响应迅速  
- 风险：部分基础设施 PR 积压、新功能争议性较高需引导共识

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

**EasyClaw 项目动态日报**  
**日期：2026-03-18**

---

### 1. 今日速览  
过去24小时内，EasyClaw 项目整体活跃度中等偏低，但维护响应及时。共关闭 2 个 Issue 和 1 个 PR，无新开 Issue 或待合并 PR，表明当前版本趋于稳定。值得注意的是，项目在一天内连续发布两个新版本（v1.6.8 与 v1.7.0），显示出积极的迭代节奏。社区反馈集中于 Windows 平台兼容性与使用文档缺失问题，反映出跨平台支持是当前用户核心诉求之一。

---

### 2. 版本发布  

#### 🔹 v1.7.0: RivonClaw v1.7.0  
- **更新性质**：功能/修复版本（非破坏性）  
- **关键说明**：  
  本次发布重点优化了 macOS 平台下的应用签名与 Gatekeeper 兼容性提示。针对用户频繁报告的“应用已损坏”误报问题，官方在 Release 说明中明确解释该现象源于 macOS 对未签名应用的拦截机制，并提供 Terminal 命令行绕过方案（`xattr -cr /path/to/RivonClaw.app`）。  
- **迁移注意事项**：  
  无 API 或配置变更，用户可直接升级。建议 Windows 用户关注后续教程更新（见 Issue #17）。  
  🔗 [Release v1.7.0](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.0)

#### 🔹 v1.6.8: EasyClaw v1.6.8  
- **更新性质**：热修复版本  
- **关键说明**：  
  作为 v1.7.0 的前置版本，v1.6.8 同样包含对 macOS Gatekeeper 提示的说明文档补充，可能用于灰度验证或回滚保障。  
  🔗 [Release v1.6.8](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.6.8)

> ⚠️ 两个版本均未提及具体功能变更，推测为文档/说明优化或构建流程调整。

---

### 3. 项目进展  

✅ **PR #15 [已合并]**：修复 macOS Dock 与系统托盘图标显示异常  
- **贡献者**：@mylinkedai  
- **影响范围**：提升 macOS 用户体验一致性，解决应用图标在 Dock 和菜单栏中显示为默认占位符的问题。  
- **项目意义**：虽为 UI 细节修复，但体现了对跨平台视觉一致性的重视，有助于增强专业形象。  
🔗 [PR #15](https://github.com/gaoyangz77/rivonclaw/pull/15)

---

### 4. 社区热点  

🔥 **Issue #17：请求 Windows 版本启动与打包教程**  
- **作者**：@584731180 | 评论数：2 | 最后活跃：2026-03-18  
- **核心诉求**：  
  用户明确表示缺乏 Windows 平台下的开发环境搭建、应用启动及打包部署指导，阻碍了本地测试与二次开发。  
- **背后信号**：  
  反映出项目文档严重偏向 macOS，Windows 开发者体验存在明显断层。该 Issue 虽已关闭，但未附解决方案链接，可能由维护者内部处理或承诺后续补充。  
🔗 [Issue #17](https://github.com/gaoyangz77/rivonclaw/issues/17)

> 💡 建议：将此需求纳入下一版文档路线图，优先提供 Windows 开发指南。

---

### 5. Bug 与稳定性  

✅ **Issue #18 [已关闭]：Windows 系统从 v1.6.8 升级至 v1.7.0 后连接失败**  
- **严重程度**：高（影响核心功能）  
- **状态**：已关闭，疑似通过 v1.7.0 发布修复  
- **分析**：  
  用户附截图显示连接异常，但未提供日志或错误码。鉴于该 Issue 在 v1.7.0 发布后被关闭，推测维护者已通过版本更新修复潜在网络模块兼容性问题。建议后续补充修复说明以增强透明度。  
🔗 [Issue #18](https://github.com/gaoyangz77/rivonclaw/issues/18)

> ✅ 当前无已知未修复高严重性 Bug。

---

### 6. 功能请求与路线图信号  

📌 **高优先级潜在需求**：  
- **Windows 开发/打包教程**（来自 Issue #17）：  
  虽非代码功能，但属于关键开发者体验（DX）缺口。结合项目近期聚焦跨平台稳定性（如 macOS 图标修复、Windows 连接问题修复），可判断维护者正逐步重视多平台支持。  
- **应用签名自动化**（隐含于 Release 说明）：  
  用户反复遭遇 macOS Gatekeeper 拦截，长期来看需推动代码签名或公证流程，否则将持续影响新用户安装体验。

> 🔮 预测：下一版本可能包含 Windows 文档补充，或启动签名流程调研。

---

### 7. 用户反馈摘要  

| 用户 | 场景/痛点 | 情绪倾向 |
|------|----------|--------|
| @slowayear（Issue #18） | Windows 升级后连接中断，影响正常使用 | 负面 → 已解决 |
| @584731180（Issue #17） | 缺乏 Windows 开发环境指导，无法本地调试 | 负面（期待改进） |
| 多位 macOS 用户（Release 说明引用） | 误报“应用已损坏”，需手动 Terminal 操作 | 困惑但理解（官方已澄清） |

> 📊 总体满意度：中等偏上。核心功能稳定，但文档与跨平台体验拖累新手上手效率。

---

### 8. 待处理积压  

⚠️ **需关注长期未响应事项**：  
- 无超过 7 天未响应的开放 Issue 或 PR。  
- 所有近期 Issue 均在 2 日内关闭，维护响应效率高。

> ✅ 项目健康度良好，无显著积压风险。建议持续监控 Windows 相关反馈，防止文档缺口演变为 adoption barrier。

---  
**报告生成时间：2026-03-18 10:00 UTC**  
数据来源：GitHub Repository [gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

</details>

---
*本日报由 [Big Model Radar](https://github.com/gsscsd/big_model_radar) 自动生成。*