# OpenClaw 生态日报 2026-03-22

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-03-22 01:02 UTC

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

# OpenClaw 项目动态日报（2026-03-22）

---

## 1. 今日速览

OpenClaw 社区在24小时内保持高度活跃，共产生 **500条 Issues 更新**（新开/活跃 410 条，关闭 90 条）和 **500条 PR 更新**（待合并 368 条，已合并/关闭 132 条），显示出强劲的开发与问题反馈节奏。尽管无新版本发布，但核心团队持续推进关键修复与架构优化，尤其在安全、多通道兼容性及子代理稳定性方面取得实质进展。社区对国际化、本地模型支持及视觉处理能力的需求显著上升，反映出项目正从“可用”向“易用”和“全球化”演进。

---

## 2. 版本发布

**无新版本发布**。当前最新版本仍为 `2026.3.13`，多个高优先级回归问题（如 WhatsApp 消息发送失败、网关权限丢失等）已通过热修复 PR 提交，预计将在下一补丁版本中集中发布。

---

## 3. 项目进展

今日合并/关闭的重要 PR 聚焦于 **稳定性修复与性能优化**：

- ✅ **#51955**：修复非安全上下文中 Control UI 客户端无法解析 exec 审批的问题，避免 `clearUnboundScopes` 错误剥离操作权限（[链接](https://github.com/openclaw/openclaw/pull/51955)）
- ✅ **#51480**：优化 `sessions.list` 性能，提前应用 limit 限制避免全量读取 transcript 文件，显著降低高会话数场景下的 I/O 开销（[链接](https://github.com/openclaw/openclaw/pull/51480)）
- ✅ **#49153**：为 vLLM 和 SGLang 提供商启用 token 使用量追踪，解决仪表盘显示 "n/a" 的问题（[链接](https://github.com/openclaw/openclaw/pull/49153)）
- ✅ **#51514**：修复 MiniMax M2.5 模型 XML 格式工具调用被错误剥离的问题，提升工具执行可靠性（[链接](https://github.com/openclaw/openclaw/pull/51514)）

此外，**#49431**（网关崩溃恢复机制）和 **#43497**（子代理重启恢复）两项大型 PR 仍在 review 中，标志着项目正向高可用架构迈进。

---

## 4. 社区热点

以下 Issues 引发广泛讨论，反映核心用户诉求：

- 🔥 **#3460**：[国际化 (i18n) 与本地化支持](https://github.com/openclaw/openclaw/issues/3460)（112 评论）  
  用户强烈呼吁多语言支持，但维护者坦言“暂无带宽实现”，凸显资源瓶颈。

- 🔥 **#26534**：[首次安装时添加钉钉作为通道选项](https://github.com/openclaw/openclaw/issues/26534)（75 评论）  
  尽管钉钉通道已实现，但未集成至 onboarding 流程，影响用户体验一致性。

- 🔥 **#51429**：[硬编码工作路径 `/Users/wangtao` 被合并发布](https://github.com/openclaw/openclaw/issues/51429)（10 评论）  
  严重配置污染问题，暴露代码审查漏洞，已引发安全性质疑。

- 🔥 **#23452**：[跨通道图像识别失效](https://github.com/openclaw/openclaw/issues/23452)（6 评论，👍7）  
  用户上传图片后模型“视而不见”，导致幻觉响应，影响多模态能力可信度。

---

## 5. Bug 与稳定性

按严重程度排序的关键问题：

| 严重性 | Issue | 描述 | 状态 |
|--------|------|------|------|
| 🔴 高 | #51558 | WhatsApp Web 监听器运行但消息处理器无法访问 | 新开，无 fix |
| 🔴 高 | #51396 | `clearUnboundScopes` 错误剥离非本地客户端的操作权限 | 新开，相关 PR #51955 已合并 |
| 🔴 高 | #51429 | 硬编码路径污染用户文件系统 | 新开，需紧急 hotfix |
| 🟠 中 | #44925 | 子代理完成结果静默丢失，无重试机制 | 长期未解，影响任务可靠性 |
| 🟠 中 | #49822 | Telegram 持续 409 Conflict 错误，即使更换 token | 疑似内部轮询冲突 |
| 🟡 低 | #51873 | 上下文缓存在 Telegram 中几乎不生效 | 性能/成本问题 |

> 注：#30177、#49088、#50438 等回归问题已于昨日关闭，相关修复已合入主干。

---

## 6. 功能请求与路线图信号

用户明确提出的需求中，以下具备较高落地可能性：

- **MiniMax M2.7 支持**（#50234）：已有社区成员提交集成请求，结合 #51514 对 MiniMax 工具调用的修复，预计下一版本将扩展模型支持。
- **Gemini 上下文缓存**（#51372）：针对大系统指令成本优化，技术路径清晰，可能随 Google 提供商更新一并实现。
- **语音对话集成（STT/TTS）**（#49246）：与 Home Assistant 硬件结合场景明确，若社区贡献插件原型，有望纳入实验性功能。
- **ClawHub 技能市场**（#50090）：生态建设关键一步，需解决技能发现、安装与版本管理问题，目前仍处于 RFC 阶段。

---

## 7. 用户反馈摘要

从评论中提炼的真实声音：

- **痛点**：
  - “升级后配置中的 `${ENV_VAR}` 被明文替换，泄露敏感信息”（#23307）
  - “Raspberry Pi 上 `openclaw update` 因 opus 编译失败卡住”（#23909）
  - “图像发了但 agent 完全没看见，回复驴唇不对马嘴”（#23452）

- **满意点**：
  - “Webhook 通道稳定，Telegram 群组响应及时”
  - “插件系统灵活，自定义工具集成方便”

- **典型场景**：
  - 企业用户希望通过钉钉接入内部工作流（#26534）
  - 开发者尝试在 WSL2 + Windows 混合环境中调试浏览器控制（#41553）
  - 个人用户使用本地模型降低成本并保护隐私（#50029）

---

## 8. 待处理积压

以下重要 Issue 长期未获响应，建议维护者优先关注：

- ⏳ **#23900**：[代理自我保护护栏](https://github.com/openclaw/openclaw/issues/23900)（2026-02-22 提出）  
  代理误删系统文件导致级联故障，亟需沙箱强化与行为约束机制。

- ⏳ **#17477**：[可配置默认代理 ID](https://github.com/openclaw/openclaw/issues/17477)（2026-02-15 提出）  
  硬编码 `"main"` 导致多代理部署冲突，影响生产环境隔离性。

- ⏳ **#24008**：[配置验证静默重置问题](https://github.com/openclaw/openclaw/issues/24008)（2026-02-23 提出）  
  输入错误配置键导致整个段落被清空，应改为警告而非破坏性重置。

> 建议：设立“积压清理周”，对超过 30 天未响应的高赞 Issue 进行 triage 并分配负责人。

--- 

**项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
活跃度高，修复响应快，但需加强配置安全与多模态稳定性。社区驱动功能（如 i18n、ClawHub）需明确 roadmap 以管理预期。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向分析报告  
**报告时间：2026-03-22**

---

## 1. 生态全景

当前个人 AI 助手开源生态呈现 **高活跃度、快速迭代、多技术路线并行** 的态势。主流项目普遍聚焦于 **多通道集成、多模态支持、本地模型兼容性与安全沙箱强化**，反映出从“功能可用”向“生产就绪”的演进趋势。社区驱动功能（如 WebUI、技能市场、A2A 协议）成为差异化竞争焦点，而 **配置安全、升级兼容性、跨平台稳定性** 成为用户核心痛点。整体生态健康，但技术债与文档滞后问题在多个项目中显现。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 新版本发布 | 健康度评估 |
|------|-------------|---------|------------|------------|
| **OpenClaw** | 500（410 新开/活跃） | 500（368 待合并） | ❌ 无 | ⭐⭐⭐⭐☆（4.5/5） |
| **NanoBot** | 18 | 52（19 合并） | ❌ 无 | ⭐⭐⭐⭐（4/5） |
| **Zeroclaw** | 34（20 新开） | 50（21 合并） | ✅ v0.5.6（稳定版） | ⭐⭐⭐⭐（4/5） |
| **PicoClaw** | 27 | 35（14 合并） | ✅ nightly v0.2.3 | ⭐⭐⭐⭐（4/5） |
| **NanoClaw** | 28（10 新开） | 38（9 合并） | ❌ 无 | ⭐⭐⭐⭐（4/5） |
| **IronClaw** | 12 | 50（7 合并） | ❌ 无 | ⭐⭐⭐⭐（4/5） |
| **LobsterAI** | 16（13 新开） | 30（16 合并） | ✅ 2026.3.21 | ⭐⭐⭐⭐☆（4.5/5） |
| **TinyClaw** | 0 | 2（1 合并） | ❌ 无 | ⭐⭐⭐（3/5） |
| **Moltis** | 0 | 0 | ❌ 无 | ⭐⭐（2/5） |
| **CoPaw** | 50（41 新开） | 14（4 合并） | ❌ 无 | ⭐⭐⭐（3/5） |
| **ZeptoClaw** | 0 | 0 | ❌ 无 | ⭐（1/5） |
| **EasyClaw** | 2（关闭） | 0 | ✅ v1.7.3–v1.7.5 | ⭐⭐⭐⭐（4/5） |

> 注：健康度综合考量活跃度、响应速度、稳定性与社区反馈。

---

## 3. OpenClaw 在生态中的定位

**OpenClaw 是生态中规模最大、社区最活跃的核心参照项目**，其优势体现在：
- **社区规模**：单日 500+ Issues/PR 更新，远超同类（次高为 CoPaw 的 50），反映广泛用户基础与高频反馈循环；
- **技术路线**：强调 **企业级多通道兼容性**（WhatsApp/Telegram/钉钉等）与 **子代理高可用架构**，区别于 TinyClaw 的轻量调度或 Zeroclaw 的本地优先安全模型；
- **生态影响力**：多个项目（如 LobsterAI、PicoClaw）直接引用 OpenClaw 作为底层代理框架或错误提示参照，形成事实标准依赖。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|--------|--------|--------|
| **多模态支持** | OpenClaw、NanoBot、PicoClaw、LobsterAI | 图像识别失效（#23452）、专用视觉模型路由（#2340）、跨通道图片处理（#2327） |
| **语音交互（TTS/ASR）** | PicoClaw、NanoClaw、IronClaw | 端到端语音流（#1852）、本地 TTS 集成（#4115）、语音转录失效（#2141） |
| **WebUI 与易用性** | NanoBot、PicoClaw、CoPaw、EasyClaw | 可视化配置面板（#1922）、替代 TUI（#806）、移动端适配（#2026） |
| **安全策略灵活性** | Zeroclaw、IronClaw、OpenClaw | “过度安全”阻碍本地实验（#1478）、域名白名单（#1518）、沙箱逃逸防护（#23900） |
| **技能/插件生态** | OpenClaw、NanoClaw、CoPaw、LobsterAI | ClawHub 技能市场（#50090）、Python 技能支持（#1870）、全局技能共享（#2032） |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|------|--------|--------|----------------|
| **OpenClaw** | 多通道企业集成、子代理容错 | 企业开发者、多平台运营者 | 分布式代理架构、会话级状态管理 |
| **Zeroclaw** | 本地优先、生产级安全、A2A 协议 | 隐私敏感用户、本地部署者 | Rust 实现、强沙箱、WASM 扩展 |
| **NanoBot** | 轻量通道扩展、运维友好 | 个人开发者、小团队 | Python 生态、模块化 Channel 设计 |
| **PicoClaw** | 嵌入式友好、语音交互、exec 工具增强 | 硬件集成者、自动化脚本用户 | Go 语言、Docker 原生、PTY 支持 |
| **IronClaw** | 多租户、TEE 安全、WASM 工具链 | 云原生 AI 平台、合规场景 | NEAR 区块链集成、可信执行环境 |
| **LobsterAI** | 企业 IM 集成、中文体验优化 | 中文企业用户 | Electron 桌面端、飞书/钉钉深度适配 |
| **EasyClaw** | 跨平台配置同步、极简部署 | 非技术用户、多设备开发者 | 本地配置中心化、无服务端依赖 |

---

## 6. 社区热度与成熟度

- **快速迭代阶段**（高活跃度 + 高频发布）：  
  **OpenClaw、LobsterAI、Zeroclaw、PicoClaw** —— 日均 PR >30，版本周期 <7 天，功能与修复并行推进。
  
- **质量巩固阶段**（中低活跃度 + 稳定性修复）：  
  **NanoBot、NanoClaw、IronClaw、EasyClaw** —— 聚焦 Bug 修复、文档完善、CI/CD 建设，发布节奏放缓但质量提升。

- **维护/休眠阶段**：  
  **TinyClaw、Moltis、ZeptoClaw、CoPaw** —— 活动稀疏，CoPaw 虽 Issue 多但响应滞后，存在技术债累积风险。

---

## 7. 值得关注的趋势信号

1. **从“单代理”到“多代理协作”**：  
   Zeroclaw（A2A 协议 #4166）、CoPaw（多 Bot 绑定 #2035）、IronClaw（多租户隔离 #1118）均布局多智能体架构，预示 **Agent-as-a-Service** 将成为下一阶段核心范式。

2. **本地化与隐私优先成为刚需**：  
   超过 6 个项目（Zeroclaw、PicoClaw、NanoBot、IronClaw 等） actively 推进本地模型、离线 TTS/ASR、密钥安全存储，反映用户对 **数据主权与成本可控** 的强烈诉求。

3. **WebUI 与低代码配置是 adoption 关键瓶颈**：  
   多个项目（NanoBot #1922、PicoClaw #806、CoPaw #1960）用户明确表示“不会写代码也能用”是决定留存的关键因素，**可视化编排能力** 将成为产品化分水岭。

4. **通道兼容性 > 模型能力**：  
   用户反馈中，飞书/钉钉/Telegram 等通道的稳定性问题（如 CoPaw #1345、OpenClaw #51558）提及频率远超模型性能，表明 **企业级通信集成成熟度** 是当前落地最大障碍。

> **对开发者的建议**：优先投入 **多通道适配层抽象** 与 **安全可配置的沙箱策略**，同时规划 WebUI 与技能市场以降低使用门槛。关注 A2A 协议标准化进展，提前布局多代理协同场景。

---  
**分析师备注**：生态整体向好，但需警惕“功能膨胀 vs 稳定性”的平衡。建议项目方设立明确的 LTS 版本策略与迁移指南，以应对日益增长的升级兼容性诉求。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-03-22）

---

## 1. 今日速览

NanoBot 社区活跃度持续高涨，过去24小时内共产生 **18条 Issues 更新** 和 **52条 PR 更新**，其中 **19个 PR 被合并或关闭**，显示出核心团队高效的代码集成节奏。尽管无新版本发布，但多个关键功能（如多模态支持、并发控制、心跳优化）正通过 PR 快速推进。社区贡献者积极提交增强型 Channel 实现（如 NapCatQQ、Teams）和 Bug 修复，反映出项目生态的成熟与扩展性需求增长。整体项目健康度良好，开发节奏紧凑。

---

## 2. 版本发布

**无新版本发布**。当前主线仍为 `v0.1.4.post5`，多个重要修复与功能以 nightly 或待合并 PR 形式存在，预计将在下一版本集中发布。

---

## 3. 项目进展

今日有 **19个 PR 被合并或关闭**，重点进展包括：

- **#2338**（已合并）：统一 `process_direct` 接口，消除 CLI 与通道间行为差异，提升消息处理一致性（[链接](https://github.com/HKUDS/nanobot/pull/2338)）。
- **#2215 / #2277 / #2333**（已合并）：一系列 LLM 流式响应优化，解决进度消息重复、图像 Token 未计入成本等问题，显著改善用户体验与计费准确性（[链接1](https://github.com/HKUDS/nanobot/pull/2215) | [链接2](https://github.com/HKUDS/nanobot/pull/2277) | [链接3](https://github.com/HKUDS/nanobot/pull/2333)）。
- **#2336**（已关闭）：Claude 驱动的项目分析实验性 PR，虽未合并但体现 AI 辅助开发探索方向。
- **#398 / #1985**（已关闭）：Web 搜索多 Provider 支持与 `/status` 命令功能已完成开发并合入，增强运维可观测性。

这些合并标志着 NanoBot 在 **消息一致性、成本控制、运维透明度** 方面迈出关键步伐。

---

## 4. 社区热点

### 🔥 最活跃 Issue：#1922 — 用户自建 WebUI 管理面板
- **作者**：@Good0007  
- **评论数**：7 | **👍**：6  
- **链接**：[https://github.com/HKUDS/nanobot/issues/1922](https://github.com/HKUDS/nanobot/issues/1922)  
- **分析**：用户自发开发 `nanobot-webui`，提供可视化配置 MCP、技能、定时任务等功能，反映社区对 **降低部署门槛、提升管理效率** 的强烈诉求。该 Issue 获得高赞，说明官方可能需考虑集成或标准化此类 UI 方案。

### 🔥 高关注 PR：#2340 — 专用视觉模型支持
- **作者**：@Sprit3Dan  
- **链接**：[https://github.com/HKUDS/nanobot/pull/2340](https://github.com/HKUDS/nanobot/pull/2340)  
- **分析**：针对多模态场景中“文本模型非视觉”导致的性能瓶颈，提出独立配置 `vision_model` 与 `vision_provider` 的方案。此 PR 直接响应 Issue #2339，体现用户对 **精细化模型路由** 的迫切需求。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重性 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|---------------|
| ⚠️ 高 | #2293 | Ollama 本地部署 `qwen2.5:14b` 执行工具时对话静默中断 | ❌ 无 |
| ⚠️ 高 | #2325 | MCP 服务器更新后新增工具无法被 Nanobot 发现 | ❌ 无（需重启无效） |
| ⚠️ 中 | #2327 | DingTalk 接收图片未传入 multimodal 管道，仅传路径字符串 | ❌ 无 |
| ⚠️ 中 | #2329 | 自定义模型 Provider 在 CLI 正常但在 Feishu 通道报 401 错误 | ❌ 无 |
| ⚠️ 低 | #2341 | WebFetchTool 强制代理所有 URL 至 jina.ai，存在隐私风险 | ❌ 无 |

> 💡 建议优先处理 #2293 和 #2325，二者均影响核心代理功能可用性。

---

## 6. 功能请求与路线图信号

以下功能请求已获得对应 PR，极可能被纳入下一版本：

- ✅ **专用视觉模型支持**（#2339 → #2340）：解决多模态推理效率问题，已进入实现阶段。
- ✅ **静默心跳选项**（#2126）：减少聊天 clutter，已有社区讨论，待官方响应。
- ✅ **NapCatQQ 通道支持**（#2337）：突破官方 QQ 平台 20 人群限制，支持图文，已提交 PR。
- ✅ **Microsoft Teams 通道**（#2129）：企业通信集成需求明确，PR 待审。
- ✅ **会话级并发控制**（#2335）：用 per-session 锁替代全局锁，提升吞吐量，技术方案成熟。

> 📌 路线图趋势：**多通道扩展 + 多模态优化 + 运维友好性** 成为三大主轴。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实声音：

- **满意点**：
  - “这是我第一个个人 AI，非常兴奋能让它工作起来！”（#623）—— 肯定项目易用性与开源价值。
  - 对 WebUI 管理面板高度认可，认为“极大降低配置复杂度”（#1922）。

- **痛点**：
  - 自定义技能（如 `google_calendar`）频繁报 “Tool Not Found”（#623），技能发现机制不稳定。
  - 升级至 `v0.1.4.post5` 后语音转录失效，怀疑版本回归（#2141）。
  - 多通道行为不一致：CLI 正常但通道异常（#2329），暴露配置同步问题。
  - 心跳消息刷屏，干扰日常对话（#2126），亟需静默模式。

- **使用场景**：
  - 企业内通过 Feishu/DingTalk/WeCom 部署办公助手。
  - 本地 Ollama + 私有模型构建离线 AI 代理。
  - 多实例部署（不同 config/workspace），但 `--config` 参数缺失（#2250）。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，建议维护者优先关注：

| 编号 | 类型 | 标题 | 创建时间 | 状态 | 建议 |
|------|------|------|----------|------|------|
| #144 | Issue | 使用 Gemini 模型时强制要求 `gemini_api_key`，无法 fallback 到 OpenRouter | 2026-02-05 | OPEN | 影响 Gemini 用户迁移，需修复 Provider 解析逻辑 |
| #981 | Issue | 系统提示中嵌入“当前时间”破坏 Prompt Cache 命中率 | 2026-02-22 | OPEN | 性能优化关键项，已有分析，需实现时间占位符机制 |
| #1359 / #1360 | PR | 心跳详情丢失问题两阶段修复 | 2026-03-01 | OPEN | 已迭代两次，应尽快合入以稳定 heartbeat 行为 |
| #1474 | PR | 子代理重复 spawn 防护 | 2026-03-03 | OPEN | 防止资源浪费，逻辑清晰，适合合入 nightly |

> 🔔 **提醒**：#144 和 #981 均为超过 3 周未处理的技术债，可能影响用户体验与系统性能。

--- 

**报告生成时间**：2026-03-22  
**数据来源**：GitHub HKUDS/nanobot 公开仓库

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报（2026-03-22）

---

## 1. 今日速览

Zeroclaw 项目在 2026-03-22 继续保持高活跃度，24 小时内产生 **34 条 Issues 更新**（新开/活跃 20，关闭 14）和 **50 条 PR 更新**（待合并 29，已合并/关闭 21），并发布 **10 个新版本**，涵盖稳定版与 Beta 版本。社区对安全策略、工具链集成及 Web UI 体验的讨论显著升温，同时多个关键安全漏洞被快速修复，体现出项目在功能迭代与稳定性之间的积极平衡。

---

## 2. 版本发布

### v0.5.6（最新稳定版）
- **主要修复**：
  - ✅ 安装脚本支持在 macOS 上自动接受 Xcode/CLT 许可协议，避免 `curl | bash` 流程中断（#4153, #4165, #4169）
  - ✅ 修复 `execute_successful_subprocess` 中因 broken pipe 导致的偶发测试失败
- **贡献者**：Argenis
- **升级建议**：推荐所有 macOS 用户升级以解决自动化部署阻塞问题；无破坏性变更。

> 🔗 [v0.5.6 Release](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.5.6)

> 📌 注：v0.5.5 引入多项新功能（DeepMyst 提供商、WeatherTool、Slack Assistants API 状态指示器等），已在昨日完成发布周期。

---

## 3. 项目进展

今日共 **21 个 PR 被合并或关闭**，重点推进方向如下：

| 类别 | 进展摘要 | 链接 |
|------|--------|------|
| **安全加固** | 修复 Gmail Pub/Sub 推送接口未认证（#4200）、Live Canvas 内容类型注入（#4196）、语音唤醒词检测资源泄漏（#4191）等高危漏洞 | #4200 #4196 #4191 |
| **Web UI 体验优化** | 修复 `/logs` 页面布局溢出与空状态提示（#4203）、`/config` 页面添加 TOML 语法高亮与视口约束（#4201）、`/cron` 表格滚动容器化（#4186） | #4203 #4201 #4186 |
| **工具链增强** | 新增独立图像生成工具（fal.ai 支持）（#4157）、会话消息工具安全策略补全（#4194）、反应工具参数修正（#4193） | #4157 #4194 #4193 |
| **架构演进** | A2A（Agent-to-Agent）协议支持进入开发阶段（#4166）、Discord 历史记录持久化与搜索工具启动（#4182） | #4166 #4182 |

> 💡 项目整体正向 **多代理互操作、本地优先架构、生产级安全** 方向稳步迈进。

---

## 4. 社区热点

### 🔥 高讨论度 Issue：#1478 “除了安全，什么功能也没有”
- **评论数**：44 | **👍**：6 | **状态**：已关闭
- **核心诉求**：用户抱怨即使关闭所有安全限制，ZeroClaw 仍拒绝执行如 `ffmpeg` 安装等系统操作，认为其“过度安全”导致实用性丧失。
- **背后信号**：反映 **安全策略粒度不足**，缺乏“开发者模式”或“完全信任环境”配置选项，影响本地实验性使用场景。
- **维护者响应**：该 Issue 被标记为 `enhancement` 并关闭，暗示后续可能引入更灵活的安全策略层级。

> 🔗 [#1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478)

### 其他热点：
- **#3683**：请求实现自主技能创建与自我改进机制（Hermes Agent 风格），获 1 👍，反映用户对 **AI 自进化能力** 的期待。
- **#3566**：提议支持 A2A 协议，获 4 👍，与当前 PR #4166 形成呼应，显示社区对 **多代理协作标准化** 的高度关注。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重等级 | Issue | 描述 | 是否已修复 |
|--------|------|------|----------|
| **S0**（数据丢失/安全风险） | #4171 | Docker 部署下 Telegram 通道异常，疑似权限或网络配置问题 | ❌ 未修复 |
| | #4124 | zhipu/zai 模型提示超出最大长度导致崩溃 | ✅ 已关闭（推断已修复） |
| | #4042 | Agent 无法发现 MCP 服务器工具 | ❌ 未修复 |
| **S1**（工作流阻塞） | #4139 | UTF-8 多字节字符切片导致 panic（creator.rs） | ❌ 未修复 |
| | #4083 | Web 搜索工具无法在通道中调用 | ✅ 已关闭 |
| | #4170 | WeatherTool 无法在通道中调用 | ❌ 未修复 |
| **S2**（功能降级） | #3679 | 成本追踪与执行逻辑缺失（因分支切换被移除） | ❌ 未修复 |

> ⚠️ 建议优先处理 #4139（UTF-8 panic）和 #4170（WeatherTool 通道失效），二者均影响核心功能可用性。

---

## 6. 功能请求与路线图信号

以下功能请求已获得开发响应，有望纳入近期版本：

| 功能请求 | 对应 PR | 状态 | 预期版本 |
|--------|--------|------|--------|
| A2A 协议支持 | #4166 | 开发中 | v0.6.0+ |
| 本地 GPU TTS（Piper/Coqui） | #4115 → #4116 | PR 已提但未合并 | v0.5.7-beta |
| 数据库优先记忆架构（pgvector + 图能力） | #4028 | 讨论中 | 中长期 |
| 多阶段 SQLite 记忆评分管道 | #3478 | 讨论中 | v0.6.0+ |
| SearXNG 搜索支持 | #4152 | 新提出 | 待定 |

> 📌 本地化处理（TTS、视觉路由）和 **去中心化代理通信** 成为下一阶段重点方向。

---

## 7. 用户反馈摘要

### ✅ 满意点：
- “v0.5.5 的 WeatherTool 和 Slack 状态指示器非常实用”（#4104/#4105 相关反馈）
- “安装脚本终于能在 CI 中无痛运行了”（v0.5.6 用户评论）

### ❌ 痛点：
- **安全策略僵化**：“我只是一个人在本地玩，为什么不能彻底关掉安全限制？”（#1478）
- **工具调用不一致**：“为什么 web_search 在 agent 模式能用，在 Telegram 通道就报错？”（#4083）
- **配置热重载缺失**：“改个 config 就要重启 daemon，历史对话全丢了”（#3569）
- **文档与错误提示不足**：“/logs 页面空的时候我以为坏了，其实只是没日志”（#4202）

---

## 8. 待处理积压

以下重要 Issue 长期未响应，建议维护者关注：

| Issue | 创建日期 | 类型 | 积压原因分析 |
|------|--------|------|------------|
| #2910 WebUI Agent 无法工作（v0.1.8） | 2026-03-06 | Bug | 可能涉及 WebSocket 连接稳定性，影响基础功能 |
| #3679 成本追踪功能丢失 | 2026-03-16 | Bug | 分支切换导致关键功能回归，需评估是否恢复 |
| #3565 成本追踪仪表盘 | 2026-03-15 | Feature | 用户付费 API 使用刚需，但无开发排期 |

> 🛎️ **提醒**：#2910 虽标记为 v0.1.8，但问题可能仍存在于新版本，建议复现并升级标签。

---

**报告生成时间**：2026-03-22  
**数据来源**：GitHub Zeroclaw 仓库公开数据  
**分析师备注**：项目处于快速迭代期，安全修复响应迅速，但需加强用户体验一致性与配置灵活性建设。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-03-22）

---

## 1. 今日速览

PicoClaw 在过去24小时内保持高活跃度，共处理 **27条 Issues** 和 **35条 Pull Requests**，社区贡献与核心开发并行推进。项目发布了一个 nightly 版本（`v0.2.3-nightly.20260322.c0bb8d6d`），主要聚焦于稳定性修复与功能增强。多个长期悬而未决的 Bug 被集中修复，包括配置竞争、工具链兼容性及身份识别问题。同时，语音交互（TTS/ASR）和 Web UI 重构等关键路线图议题持续引发社区热议，显示出项目向更友好、更智能方向演进的趋势。

---

## 2. 版本发布

### 🔹 Nightly Build: `v0.2.3-nightly.20260322.c0bb8d6d`
- **类型**：自动化 nightly 构建（非稳定版，谨慎使用）
- **更新内容**：集成自 `v0.2.3` 以来主分支的最新提交，涵盖多项 Bug 修复与功能增强，包括：
  - 修复 Anthropic 提供商因重复 `tool_result` 块导致的 API 400 错误（#1793）
  - 支持 Telegram 负整数群组 ID 的数值识别（#1855）
  - 添加 Azure AI Foundry 主机识别以启用提示缓存与原生搜索（#1860）
  - 忽略默认未修改的 HEARTBEAT.md 模板，避免无效 token 消耗（#1617）
- **破坏性变更**：无
- **迁移注意**：此为开发预览版，不建议用于生产环境；用户可通过 [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.3...main) 查看完整变更。

---

## 3. 项目进展

今日共 **14个 PR 被合并或关闭**，显著推进了系统稳定性与功能完整性：

| PR | 类型 | 关键进展 |
|----|------|--------|
| [#1793](https://github.com/sipeed/picoclaw/pull/1793) | Bug Fix | 修复 Anthropic API 因重复 `tool_result` 导致的调用失败，提升多工具调用可靠性 |
| [#1855](https://github.com/sipeed/picoclaw/pull/1855) | Bug Fix | 支持 Telegram 负整数群组 ID 识别，解决身份系统误判问题 |
| [#1860](https://github.com/sipeed/picoclaw/pull/1860) | Enhancement | 扩展 Azure AI Foundry 支持，启用高级 LLM 功能 |
| [#1617](https://github.com/sipeed/picoclaw/pull/1617) | Bug Fix | 避免未编辑的 heartbeat 模板消耗 token，优化资源使用 |
| [#1782](https://github.com/sipeed/picoclaw/pull/1782) | Chore | 将 `docker/data` 加入 `.gitignore`，防止本地数据误提交 |
| [#1837](https://github.com/sipeed/picoclaw/pull/1837) | Docs | 修复 25+ 文档错误，补充多语言翻译与通道文档 |

> ✅ 项目整体在 **配置健壮性、多平台兼容性与文档完整性** 方面取得实质性进展。

---

## 4. 社区热点

### 🔥 高讨论度 Issues

| Issue | 讨论焦点 | 社区诉求分析 |
|------|--------|------------|
| [#1648](https://github.com/sipeed/picoclaw/issues/1648)（17 评论） | **为 PicoClaw 添加 TTS/ASR 支持** | 用户强烈呼吁语音交互能力，已有 PR #1852 实现 Discord 端到端语音流支持，反映对“自然对话体验”的迫切需求。 |
| [#806](https://github.com/sipeed/picoclaw/issues/806)（7 评论，7 👍） | **开发 Web UI 替代 TUI** | 非技术用户希望降低使用门槛，推动项目向图形化、易用性方向发展，属长期路线图核心议题。 |
| [#1856](https://github.com/sipeed/picoclaw/issues/1856)（4 评论） | **是否提供 REST API？** | 开发者关注集成能力，暗示对 API 驱动自动化与第三方集成的需求上升。 |

> 💬 社区正从“功能可用”向“体验友好”与“生态集成”阶段过渡。

---

## 5. Bug 与稳定性

### ⚠️ 今日报告 Bug（按严重性排序）

| Issue | 严重性 | 状态 | 说明 |
|------|--------|------|------|
| [#1864](https://github.com/sipeed/picoclaw/issues/1864) | High | 🟡 未修复 | `/v1/models` 端点未传递 API Key，导致 OpenAI 兼容网关认证失败 |
| [#1862](https://github.com/sipeed/picoclaw/issues/1862) | Medium | 🟡 未修复 | MCP 返回的非文本 Base64 数据占用 LLM 上下文，影响性能 |
| [#1763](https://github.com/sipeed/picoclaw/issues/1763) | Medium | 🟡 未修复 | aarch64 `.deb` 包安装失败，依赖项残留问题 |
| [#1737](https://github.com/sipeed/picoclaw/issues/1737) | Medium | 🟡 未修复 | Launcher 模式下 WebSocket 端口 18800 缺乏文档，导致 Web UI 输入失效 |

> ❗ 建议优先处理 #1864（认证失效）与 #1763（安装障碍），二者直接影响用户体验。

---

## 6. 功能请求与路线图信号

### 📌 高潜力功能请求（已有对应 PR 或设计）

| 功能 | 关联 Issue/PR | 纳入可能性 |
|------|---------------|-----------|
| **语音交互（TTS/ASR）** | #1648 + #1852（Discord 实现） | ⭐⭐⭐⭐☆ 极高，已有原型，预计 v0.3 集成 |
| **Web UI 重构** | #806 | ⭐⭐⭐☆☆ 高，社区呼声强，但需架构调整 |
| **Exec 工具增强（PTY/后台）** | #1733 + #1869（重提） | ⭐⭐⭐⭐☆ 高，解决长任务阻塞问题 |
| **Python 技能支持** | #1870 + #1871（Docker 镜像加 Python） | ⭐⭐⭐⭐☆ 高，扩展技能生态 |
| **HKUDS/ClawTeam 集成** | #1850 | ⭐⭐☆☆☆ 中，生态合作方向，待评估 |

> 🔮 下一版本（v0.3）有望聚焦 **语音能力** 与 **工具链增强**，Web UI 或为 v0.4 重点。

---

## 7. 用户反馈摘要

- **痛点**：
  - “安装 `.deb` 包后一堆依赖残留，卸载麻烦”（#1763）
  - “Web UI 连不上，查不到端口说明，只能猜”（#1737）
  - “exec 工具跑 `docker build` 直接卡死，没法用”（#1733）
- **满意点**：
  - “nightly 版本修复了我遇到的 Anthropic 报错，现在稳定多了”（#1793 相关反馈）
  - “文档终于更新了，之前很多链接都 404”（#1837 合并后评论）
- **使用场景**：
  - 开发者用于自动化脚本执行与模型调用（exec/tool 使用频繁）
  - 企业用户通过 Discord/Telegram 接入，期望语音支持（#1648）
  - Docker 部署用户关注镜像轻量化与技能兼容性（#1870）

---

## 8. 待处理积压

### ⏳ 长期未响应重要 Issue（>7天无维护者回复）

| Issue | 类型 | 积压原因分析 |
|------|------|------------|
| [#806](https://github.com/sipeed/picoclaw/issues/806)（Web UI） | Enhancement | 高优先级路线图议题，但需架构重构，维护者可能等待设计共识 |
| [#1733](https://github.com/sipeed/picoclaw/issues/1733)（Exec PTY） | Enhancement | 技术复杂度高（跨平台 PTY），曾被 revert（#1865），需稳定方案 |
| [#1848](https://github.com/sipeed/picoclaw/issues/1848)（日志控制） | Config | 用户体验优化类，优先级低于核心功能 |

> 🛎️ **建议维护者**：对 #806 明确 roadmap 时间线，对 #1733 提供技术 guidance 以推动 PTY 方案落地。

---

**报告生成时间**：2026-03-22  
**数据来源**：PicoClaw GitHub Repository（github.com/sipeed/picoclaw）  
**分析师备注**：项目处于快速迭代期，社区活跃度高，建议加强 Issue 分类响应机制以提升维护效率。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-03-22）

---

## 1. 今日速览

NanoClaw 在过去24小时内保持高活跃度，共处理 **28条 Issues**（新开/活跃10条，关闭18条）和 **38条 PR 更新**（待合并29条，已合并/关闭9条），显示出社区贡献与核心维护团队的高效协作。尽管无新版本发布，但多个关键修复与功能增强 PR 持续推进，尤其在容器稳定性、跨平台支持与技能集成方面取得实质进展。项目整体处于快速迭代与架构优化阶段，健康度良好。

---

## 2. 版本发布

**无新版本发布**。当前开发重点集中于底层稳定性修复与多平台部署能力建设，预计下一版本将整合近期大量容器化与技能集成改进。

---

## 3. 项目进展

今日多个关键修复与功能 PR 持续推进，显著提升系统健壮性与扩展性：

- **容器启动与技能同步稳定性增强**：  
  通过 #1320（[clear stale skills before syncing globals](https://github.com/qwibitai/nanoclaw/pull/1320)）、#1318（[always sync agent-runner source](https://github.com/qwibitai/nanoclaw/pull/1318)）和 #1317（[clear stale sessions on crash recovery](https://github.com/qwibitai/nanoclaw/pull/1317)）等 PR，解决了容器重启后旧技能残留、会话状态不一致等问题，显著降低“静默失败”风险。

- **消息处理容错机制升级**：  
  #1321（[crash-resilient message processing with pipe rollback cursors](https://github.com/qwibitai/nanoclaw/pull/1321)）引入消息管道回滚机制，防止容器崩溃导致消息丢失，提升系统可靠性。

- **Apple Container 首次安装体验修复**：  
  #1323（[three runtime bugs that break first-time setup](https://github.com/qwibitai/nanoclaw/pull/1323)）修复了 macOS 环境下因 `/dev/null` 挂载等导致的启动失败问题，改善新用户上手体验。

- **新功能技能集成加速**：  
  #1313（[WhatsApp, Discord, PDF, voice, compact, and Parallel AI skills](https://github.com/qwibitai/nanoclaw/pull/1313)）一次性引入多个通信与媒体处理技能，扩展了 NanoClaw 的应用场景。

---

## 4. 社区热点

### 🔥 高关注度 Issues

- **[#1075: Mismatch in Linux Support Documentation](https://github.com/qwibitai/nanoclaw/issues/1075)**  
  用户指出官网与 README 对 Linux 支持状态描述矛盾（官网称已支持，README 称“coming soon”），引发对跨平台一致性的关注。此问题标记为 `good first issue`，适合新人参与文档修正。

- **[#1211: Add /new command to reset session context](https://github.com/qwibitai/nanoclaw/issues/1211)**  
  用户强烈呼吁增加会话重置功能，因当前会话历史无限累积导致 token 浪费与上下文污染。该需求获 2 👍，且已有对应 PR #1311（[Feature create new session](https://github.com/qwibitai/nanoclaw/pull/1311)）正在实现中，反映核心用户体验痛点。

- **[#876: Slack integration?](https://github.com/qwibitai/nanoclaw/issues/876)**  
  长期悬而未决的集成请求，用户询问是否计划支持 Slack。虽优先级低，但持续有社区成员关注，表明对主流协作平台集成的需求。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 修复状态 |
|--------|------|------|--------|
| ⚠️ 高 | [#1312: claw CLI exits non-zero after sentinel-triggered proc.kill()](https://github.com/qwibitai/nanoclaw/issues/1312) | 容器提前终止时返回非零退出码，可能被上层系统误判为失败 | 尚无 PR，需维护者确认是否为预期行为 |
| ⚠️ 高 | [#1315: duty cycle never completes retrospective/dream phases](https://github.com/qwibitai/nanoclaw/issues/1315) | 智能体状态机卡住，无法进入回顾/梦境阶段，影响长期记忆机制 | 尚无 PR，建议优先排查 `dutyCycleLoop` 逻辑 |
| ⚠️ 中 | [#1288: Read incoming emoji reactions on messages](https://github.com/qwibitai/nanoclaw/issues/1288) | 已支持设置反应，但无法读取用户反应，限制交互反馈 | 已关闭，相关功能在 #1282 实现后未完全闭环 |

> 注：多个 `skill-maintenance` 类 Issue（如 #1307、#1306 等）反映自动化合并流程频繁失败，需手动干预，提示技能分支管理策略需优化。

---

## 6. 功能请求与路线图信号

以下功能请求已获得实质性推进，有望纳入下一版本：

- **会话管理增强**：  
  `/new` 命令（#1211 + #1311）和 `/compact` 命令（#1313）将解决上下文膨胀问题，是用户高频诉求。

- **跨平台部署支持**：  
  Linux/Docker 支持（#1089）、Unraid 集成（#1188）、Tailscale API 集成（#1260）等 PR 显示项目正积极拓展非 macOS 生态，回应 #1075 的文档争议。

- **秘密管理现代化**：  
  #1316 提议将 `.env` 明文存储迁移至 macOS Keychain 并支持 1Password，契合安全最佳实践；#1237 提出用 OneCLI 替代内置凭证代理，简化架构。

- **多通道通信能力**：  
  WhatsApp、Discord、语音转录等技能（#1313）表明项目正从“Telegram 专属”向通用 AI 代理平台演进。

---

## 7. 用户反馈摘要

- **正面反馈**：  
  用户 @rozek 在 #1273 中表示“many thanks for this wonderful tool!”，并基于 NanoClaw 构建了多会话 Web 界面，体现项目可扩展性与社区创新力。

- **核心痛点**：  
  - 会话无法重置导致 token 浪费（#1211）  
  - 容器崩溃后消息丢失（#1321 所修复）  
  - 首次安装失败（#1323 所修复）  
  - 文档与实际功能不一致（#1075）

- **使用场景扩展**：  
  用户开始将 NanoClaw 用于教学（#1273）、家庭服务器管理（Unraid/Tailscale 集成）、跨平台消息自动化等，超出原始设计范围。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 延迟天数 | 建议行动 |
|------|------|------|--------|--------|
| Issue | #876 | Slack integration? | 12 天 | 明确路线图立场或开放社区开发 |
| Issue | #1075 | Linux 支持文档矛盾 | 8 天 | 统一文档表述，避免用户困惑 |
| PR | #1089 | Linux/Docker 部署支持 | 7 天 | 高价值跨平台 PR，建议优先 review |
| PR | #1090 | .claude.json 只读挂载导致 EROFS 崩溃 | 7 天 | 关键稳定性修复，应加速合并 |
| Issue | #1315 | 回顾/梦境阶段未执行 | 1 天 | 新报高影响 Bug，需立即排查 |

> 建议维护团队关注 `skill/apple-container` 和 `skill/compact` 分支的合并冲突积压（共 10+ 条），考虑重构技能同步机制以降低维护成本。

--- 

**分析师备注**：NanoClaw 正处于从“实验性原型”向“生产级 AI 代理平台”转型的关键阶段。当前活跃度极高，但需警惕技术债积累（如频繁的 merge-forward 失败）。建议加强自动化测试与 CI 流程，以支撑持续增长的功能复杂度。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-03-22）

---

## 1. 今日速览

IronClaw 在过去24小时内保持高活跃度，共产生 **50条 PR 更新** 和 **12条 Issues 更新**，其中 **7个 PR 被合并/关闭**，**3个 Issues 被关闭**，无新版本发布。核心团队持续推动多租户架构、安全加固与 UX 重构等关键方向，同时积极响应用户反馈的 LLM 集成与通道连接问题。项目整体处于快速迭代与稳定性优化并行阶段，社区参与度较高。

---

## 2. 版本发布

**无新版本发布**。当前最新稳定版本仍为 `v0.18.0`（见 Issue #1537），开发重点集中在 staging 分支的功能集成与修复。

---

## 3. 项目进展

今日有 **7个 PR 被合并或关闭**，主要进展包括：

- **安全关键修复**：PR #1454 修复了 OAuth 状态解析中的高危漏洞（Issue #1441），防止恶意构造的 `ic2.*` 状态绕过验证，已合并至主干。
- **CI/CD 稳定性提升**：PR #1121 和 PR #496 分别解决了 MCP 客户端生命周期管理缺陷和 WASM 扩展配置 UI 支持问题，增强系统可靠性。
- **自动化流程推进**：两个 staging 自动提交流程（PR #1551、#1552）成功执行，表明 CI 流水线运行稳定，为后续发布奠定基础。

> 链接：  
> - [PR #1454: fix(oauth): reject malformed ic2.* states](https://github.com/nearai/ironclaw/pull/1454)  
> - [PR #1121: fix: persist startup MCP clients](https://github.com/nearai/ironclaw/pull/1121)  
> - [PR #496: feat(extensions): support text setup fields](https://github.com/nearai/ironclaw/pull/496)

---

## 4. 社区热点

以下 Issues/PRs 引发较高关注：

- **#1537 [OPEN] WASM credential injection fails on NEAR AI hosted TEE**  
  用户报告在托管 TEE 环境中，WASM 工具凭据存储成功但运行时未注入，导致功能静默失败。此问题影响生产环境可用性，已获维护者初步响应。  
  🔗 https://github.com/nearai/ironclaw/issues/1537

- **#1520 [OPEN] qwen error** 与 **#1521 [CLOSED] gemini error**  
  多名用户反馈特定 LLM 提供商（Qwen、Gemini）因 API 规范变更导致工具调用失败，暴露出 IronClaw 对第三方 LLM 接口兼容性不足的问题。Gemini 问题已被标记为已关闭，但 Qwen 仍开放。  
  🔗 https://github.com/nearai/ironclaw/issues/1520

- **#1243 [OPEN] feat(jobs): per-job MCP server filtering and max_iterations cap**  
  该 PR 提出按任务粒度控制 MCP 服务器挂载与迭代上限，是迈向精细化资源隔离的重要一步，获核心团队持续 review。  
  🔗 https://github.com/nearai/ironclaw/pull/1243

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重性 | Issue | 描述 | 状态 |
|--------|-------|------|------|
| **CRITICAL** | #1441 [CLOSED] OAuth flow registration and lookup key mismatch | 注册与查找键不一致导致认证绕过风险 | ✅ 已修复（PR #1454） |
| **HIGH** | #1280 [CLOSED] Flaky OAuth wildcard callback tests race on OAUTH_CALLBACK_HOST | CI 中 OAuth 回调测试偶发失败，影响 staging 推进 | ✅ 已关闭 |
| **MEDIUM** | #1537 [OPEN] WASM credential injection fails on hosted TEE | 凭据注入静默失败，影响生产部署 | 🔄 调查中 |
| **MEDIUM** | #1520 [OPEN] Qwen LLM provider 405 error | 特定接口限制导致工具调用失败 | 🔄 待修复 |
| **LOW** | #1516 [OPEN] Feishu WebSocket long connection not established | 飞书通道无法建立 WebSocket 长连接 | 🔄 待排查 |

---

## 6. 功能请求与路线图信号

用户提出的新需求中，以下具备较高纳入可能性：

- **#1458 [enhancement] Persistent sandbox for generic actions**  
  用户强烈呼吁支持 SSH、kubectl、脚本等操作的持久化沙箱，打破当前“每命令独立容器”的限制。该需求与多租户、安全沙箱演进方向一致，已有核心成员参与讨论。  
  🔗 https://github.com/nearai/ironclaw/issues/1458

- **#1518 [enhancement] HTTP domain whitelist in agent config**  
  为避免每次 HTTP 请求都需手动审批，用户请求支持域名白名单。此功能可显著提升自动化工作流体验，技术实现路径清晰，可能纳入下一版本。  
  🔗 https://github.com/nearai/ironclaw/issues/1518

- **#1549 [feat] Slack Socket Mode support**  
  新 PR 提出通过 WebSocket 实现 Slack Socket Mode，解决 NAT 环境下公网回调难题，符合“通道无关性”设计原则，有望快速合并。  
  🔗 https://github.com/nearai/ironclaw/pull/1549

---

## 7. 用户反馈摘要

从 Issues 评论提炼关键用户声音：

- **痛点**：  
  - “在 NEAR AI Cloud 上部署后，WASM 工具明明存了密钥，却始终无法调用 API”（#1537）→ **凭据注入机制在托管环境存在盲区**  
  - “每次调用飞书都要重新授权，体验极差”（#1516）→ **通道连接稳定性不足**  
  - “Qwen 和 Gemini 突然报错，之前还好好的”（#1520/#1521）→ **LLM 提供商兼容性缺乏前瞻性适配**

- **满意点**：  
  - “消息队列合并功能终于上线了！连续输入不再被拒绝”（关联 PR #1412）→ **交互流畅性显著改善**  
  - “自定义 LLM 提供商 UI 很直观，不用改 env 了”（关联 PR #1340）→ **配置体验提升获认可**

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，建议维护者优先关注：

- **#84 [OPEN] Agent system advanced features (multi-agent, streaming, thinking modes...)**  
  创建于 2026-02-14，涉及多智能体路由、全局会话等核心架构演进，但近一个月无实质性进展，仅2条评论。  
  🔗 https://github.com/nearai/ironclaw/issues/84

- **#614 [OPEN] LLM-as-Judge semantic tool call evaluation**  
  高风险 PR（risk: high），提出第二层语义安全审查机制，自 2026-03-06 提交后未获合并，可能因测试覆盖或性能顾虑搁置。  
  🔗 https://github.com/nearai/ironclaw/pull/614

- **#1118 [OPEN] Multi-tenant auth with per-user workspace isolation**  
  虽为重提 PR，但涉及多租户安全隔离这一关键需求，自 2026-03-13 起 pending review，需核心团队决策是否纳入当前发布周期。  
  🔗 https://github.com/nearai/ironclaw/pull/1118

> 建议：对上述积压项进行 triage，明确优先级与资源分配，避免技术债累积。

---  
**报告生成时间：2026-03-22 UTC**  
数据来源：GitHub IronClaw 仓库公开活动日志

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-03-22）

---

## 1. 今日速览

LobsterAI 在过去24小时内保持高活跃度，共处理 **30条 PR 更新**（16条已合并/关闭，14条待合并）和 **16条 Issues 更新**（13条新开/活跃，3条已关闭），并于3月21日发布新版本。项目整体处于快速迭代与稳定性优化并行阶段，核心团队聚焦于架构重构、性能优化与用户体验改进。社区反馈集中暴露了升级兼容性与上下文一致性等关键问题，需重点关注。

---

## 2. 版本发布

**新版本：2026.3.21（发布于 2026-03-21）**  
🔗 [Release 2026.3.21](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.3.21)

### 主要更新内容：
- **日志系统增强**：引入每日轮转、80MB 单文件上限、7天保留策略及结构化日志输出（#569）
- **IM 能力扩展**：泡泡IM 支持 WebSocket 长连接模式，提升消息实时性与稳定性（#556）
- **飞书集成优化**：实现一键接入飞书（Feishu）能力，简化企业用户部署流程

> ⚠️ **注意**：本次更新涉及 SQLite 存储层异步化改造（#573）与 Popo IM 连接模式迁移逻辑（#615），部分旧配置可能需手动适配。建议用户在升级前备份 `user_memories` 数据。

---

## 3. 项目进展

今日共 **16个 PR 被合并或关闭**，重点推进方向如下：

| 类别 | 进展摘要 | 链接 |
|------|--------|------|
| **架构重构** | 完成 `SqliteStore` 异步化改造，消除主进程阻塞；启动 `main.ts` 与 `Settings.tsx` 巨型文件拆分计划（#635） | #573, #635 |
| **稳定性修复** | 修复 stoppedSessions 内存泄漏（#617）、迁移事务回滚后错误标记问题（#622）、Skill 安装临时目录未清理（#625）等关键缺陷 | #617, #622, #625 |
| **用户体验** | 添加首次启动隐私协议弹窗（#608）、OpenClaw 错误友好提示本地化（#612）、IM 会话输入控件禁用逻辑（#614） | #608, #612, #614 |
| **工程化建设** | 搭建完整 CI/CD 流水线、安全扫描、Issue/PR 模板与自动标签系统（#589） | #589 |

项目整体向 **可维护性、稳定性与合规性** 迈出关键一步。

---

## 4. 社区热点

### 🔥 高关注度 Issue：上下文重复回复问题（#498）
> “聊久了之后，不管和它说啥，他都返回上次回答的内容”  
> 🔗 https://github.com/netease-youdao/LobsterAI/issues/498  
> 💬 评论数：1 | 👍：0 | 最后更新：2026-03-21

**分析**：用户怀疑是“上下文压缩或 memory 提取”机制导致，反映长期对话中状态管理存在缺陷。该问题直接影响核心 AI 交互体验，**亟需复现与定位**。

### 🚨 升级后 404 错误（#611）
> “升级完了根本不能用了” — 所有对话返回 nginx 404  
> 🔗 https://github.com/netease-youdao/LobsterAI/issues/611  
> 💬 评论数：1 | 👍：0

**分析**：疑似新版本网关配置或路由规则变更引发，可能影响大量用户。**需紧急排查部署兼容性**。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重程度 | 问题描述 | 是否已有 Fix | 链接 |
|--------|--------|------------|------|
| 🔴 **高危** | `stoppedSessions` 内存泄漏（长期运行内存持续增长） | ✅ 已修复（#617） | #571 |
| 🔴 **高危** | 迁移事务 ROLLBACK 后仍写入完成标记，导致用户记忆无法重试迁移 | ✅ 已修复（#622） | #622 |
| 🟠 **中危** | `BrowserWindow.fromWebContents` 返回 null 导致主进程崩溃 | ❌ 未修复 | #624 |
| 🟠 **中危** | 异步 IPC Handler 缺少错误捕获，引发 Promise rejection 未处理 | ❌ 未修复 | #623 |
| 🟠 **中危** | `drainTurnMemoryQueue` 出错后无退避递归，可能形成忙循环 | ❌ 未修复 | #627 |
| 🟡 **低危** | Skill 解压失败时临时目录未清理 | ✅ 已修复（#625） | #625 |

> 💡 建议优先处理 #624 与 #623，二者均可能导致应用崩溃，影响范围广。

---

## 6. 功能请求与路线图信号

| 功能请求 | 社区呼声 | 已有相关 PR | 纳入可能性 |
|--------|--------|------------|----------|
| **MEEET World 集成**（707 AI 代理平台） | 新 Issue 提出（#632） | 无 | 🔮 探索阶段，需评估生态契合度 |
| **结构化输入 composer**（支持 @ / 快捷引用） | 高复杂度需求 | ✅ #610 正在推进 | ✅ 高（已立项开发） |
| **Cron 表达式执行时间预览** | 用户体验优化 | ✅ #605 已实现 | ✅ 已落地 |
| **防休眠功能** | 长任务场景需求 | ✅ #633 已提交 | ✅ 高 |

> 📌 输入体验重构（#610）与防休眠（#633）有望成为下一版本亮点功能。

---

## 7. 用户反馈摘要

- **痛点**：
  - 升级后出现 **404 错误**，无法正常使用（#611）
  - 长期对话中 **上下文丢失或重复回复**，怀疑 memory 机制异常（#498）
  - Google Gemini 模型返回 **400 错误**，疑似 API 兼容性问题（#634）

- **满意点**：
  - 隐私协议弹窗设计合规且体验流畅（#608 相关反馈）
  - OpenClaw 错误提示本地化后更易懂（#612）

- **使用场景**：
  - 企业用户通过 **飞书/钉钉/泡泡IM** 接入协同任务
  - 开发者依赖 **Skill 系统** 扩展能力，关注安全性与稳定性（#593）

---

## 8. 待处理积压

| 类型 | 标题 | 创建时间 | 状态 | 提醒 |
|------|------|--------|------|------|
| Issue | 聊久了之后，不管和它说啥，他都返回上次回答的内容 | 2026-03-19 | Open | ⚠️ **超3天未响应**，影响核心体验，建议优先排查 memory 队列逻辑 |
| Issue | 400 error when using Google Gemini after latest update | 2026-03-21 | Open | ⚠️ **新版本回归**，需验证模型适配层 |
| PR | Refactor: Split giant files into smaller, focused modules | 2026-03-22 | Open | 🔧 架构级重构，建议尽快 review 避免冲突 |

> 📢 **维护者注意**：#498 与 #634 均为高优先级用户反馈，建议分配资源专项跟进。

---

**项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
活跃开发中，核心功能持续优化，但需加强升级兼容性与异常场景覆盖测试。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

**TinyClaw 项目日报（2026-03-22）**

---

### 1. 今日速览  
过去24小时内，TinyClaw 项目保持低活跃但稳健的开发节奏：无新 Issue 提交，社区互动趋于平稳；共处理 2 条 Pull Request，其中 1 条已合并、1 条待合并，均聚焦于核心通信与任务调度模块的稳定性修复。整体开发重心仍集中在系统健壮性优化，未发布新版本，表明团队正进行内部质量加固而非功能扩张。

---

### 2. 版本发布  
*（无新版本发布）*

---

### 3. 项目进展  
今日关键进展体现在两个高优先级 Bug 修复上：

- **#246 [CLOSED] fix(telegram): fix watchdog timer bug that prevented polling restart**  
  ✅ 已合并  
  该 PR 修复了 Telegram 模块中一个关键缺陷：当网络中断或设备休眠唤醒后，看门狗定时器无法正确重启消息轮询，导致机器人“假死”。此修复显著提升了多平台部署下的服务可用性，尤其对长期运行实例至关重要。  
  🔗 [PR #246](https://github.com/TinyAGI/tinyagi/pull/246)

- **#247 [OPEN] fix(api): resolve agent routing at enqueue time**  
  ⏳ 待合并  
  解决了任务队列序列化过程中的竞态问题——此前外部消息（如 Telegram/Discord）与内部心跳/路由消息并行入队，导致未指定 `agent` 字段的消息误入默认链，破坏调度一致性。该修复将提升多代理协作场景下的消息路由准确性。  
  🔗 [PR #247](https://github.com/TinyAGI/tinyagi/pull/247)

两项修复共同强化了系统的容错能力与消息处理可靠性，标志着项目从“功能实现”向“生产就绪”阶段过渡。

---

### 4. 社区热点  
*（过去24小时无新 Issue 或高互动 PR，社区讨论暂缓）*

---

### 5. Bug 与稳定性  
以下为今日确认并处理的关键问题：

| 严重程度 | 问题描述 | 状态 | 关联 PR |
|--------|--------|------|--------|
| 🔴 高 | Telegram 看门狗失效导致轮询无法恢复 | ✅ 已修复 | [#246](https://github.com/TinyAGI/tinyagi/pull/246) |
| 🟠 中 | 消息队列并行入队引发代理路由错乱 | ⏳ 修复中（待合并） | [#247](https://github.com/TinyAGI/tinyagi/pull/247) |

无新增崩溃或回归报告。

---

### 6. 功能请求与路线图信号  
当前无显性功能请求提出，但从修复方向可推断未来路线图重点：  
- **通信层稳定性**：连续两个 PR 均围绕消息通道（Telegram）和任务调度（API 路由）展开，表明团队正系统性解决多平台接入的可靠性问题。  
- **代理调度精细化**：#247 对 `agent` 字段的显式处理暗示后续可能支持动态代理分配或负载均衡机制，为多智能体架构铺路。

---

### 7. 用户反馈摘要  
*（过去24小时无新 Issue 评论，无法提取实时用户反馈）*  
历史上下文显示，用户普遍关注长时间运行稳定性（如休眠恢复、网络抖动），本次 #246 修复直接回应了此类实际部署痛点。

---

### 8. 待处理积压  
建议维护者关注以下潜在积压项（基于近期活动推断）：  
- 若 #247 合并后仍存在其他通道（如 Discord、Slack）的类似路由问题，需扩展修复范围。  
- 缺乏自动化测试覆盖 watchdog 与队列序列化逻辑，建议补充集成测试以防回归。

> 📌 **健康度评估**：项目处于“静默优化期”，开发活动集中于底层稳定性，虽社区活跃度低，但核心模块持续加固，整体健康状态良好。建议加强测试覆盖与文档更新以支撑下一阶段功能迭代。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目动态日报（2026-03-22）**

---

### 1. 今日速览  
过去24小时内，Moltis 项目整体活跃度较低，无新 Issue 提交或关闭，亦无新版本发布。开发活动集中于两个长期开放的 Pull Request 的更新：一个针对 Nix 构建系统的修复（#459），另一个解决 Windows 平台文件锁导致的运行时错误（#436）。尽管无代码合并，但关键平台兼容性问题的持续优化表明项目在稳定性与可移植性方面稳步推进。

---

### 2. 版本发布  
*无新版本发布。*

---

### 3. 项目进展  
*无 PR 被合并或关闭。*  
当前两个待合并 PR 均处于持续开发状态：
- **#459 [Feat/nix build fix]**（[链接](https://github.com/moltis-org/moltis/pull/459)）：作者 @jmikedupont2 正在完善 Nix 构建支持，并同步开发“witness code”相关功能，可能为未来可验证执行或审计能力打下基础。
- **#436 [fix(sessions): replace append(true) with write(true)+seek to fix Windows file lock]**（[链接](https://github.com/moltis-org/moltis/pull/436)）：针对 Windows 上因 `OpenOptions::append(true)` 引发 `LockFileEx` OS Error 5 的问题，提出底层 I/O 操作重构方案，已定位根本原因并实现修复逻辑。

两项工作均聚焦于提升跨平台可靠性与构建可复现性，虽未合并，但技术路径清晰，预计将为后续版本提供关键稳定性支撑。

---

### 4. 社区热点  
*无新 Issue 或高互动 PR。*  
当前最活跃的讨论仍围绕 **#436**（[链接](https://github.com/moltis-org/moltis/pull/436)），该 PR 自 2026-03-14 创建以来持续更新，反映了 Windows 用户在会话管理模块中遭遇的实际阻塞问题。尽管暂无评论，但其技术细节详尽（引用 Rust 标准库源码分析），显示出维护者对跨平台一致性的高度重视。

---

### 5. Bug 与稳定性  
- **Windows 文件锁错误（OS Error 5）**（关联 Issue #434）  
  **严重程度：高** — 导致 Windows 用户无法正常写入会话文件，影响核心功能可用性。  
  **状态：已有修复 PR（#436）**，通过替换 `append(true)` 为 `write(true) + seek` 规避权限限制，技术方案合理，待审查合并。  
  [PR 链接](https://github.com/moltis-org/moltis/pull/436)

---

### 6. 功能请求与路线图信号  
- **Nix 构建系统集成**（#459）表明项目正加强可复现构建与声明式依赖管理支持，契合开源 AI 工具链对确定性部署的日益增长需求。  
- **“Witness code”开发线索** 暗示可能向可验证计算或审计追踪方向演进，符合个人 AI 助手领域对透明性与可信执行的关注趋势。  
  若上述 PR 顺利合并，预计将在下一版本中体现为“构建可靠性增强”与“平台兼容性改进”两大主线。

---

### 7. 用户反馈摘要  
*本期无新增用户评论。*  
但从历史上下文看，Windows 平台文件锁问题（#434）已被明确报告为影响实际使用的关键障碍，用户诉求集中于“基础功能在主流操作系统上稳定运行”。维护团队响应迅速，已提供技术根因分析与修复方案，体现良好问题闭环能力。

---

### 8. 待处理积压  
- **#436（Windows 文件锁修复）**：创建于 2026-03-14，已更新但超 7 天未合并，建议优先审查以避免 Windows 用户流失。  
- **#459（Nix 构建修复）**：创建于 2026-03-21，处于活跃开发中，建议协调资源加速集成测试，尤其关注与现有 CI/CD 流程的兼容性。  

> 提醒维护者：两个 PR 均涉及底层系统交互，建议安排跨平台测试后再合并，以保障主干稳定性。

---  
*数据来源：GitHub moltis-org/moltis，截至 2026-03-22 00:00 UTC*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-03-22）

---

## 1. 今日速览

过去24小时内，CoPaw 社区活跃度显著上升，共产生 **50条 Issues 更新**（新开/活跃41条，关闭9条）和 **14条 PR 更新**（待合并10条，已合并/关闭4条），反映出用户对 v0.1.0 系列版本的广泛试用与反馈。尽管无新版本发布，但核心功能迭代持续推进，尤其在多智能体编排、工具调用稳定性、文档完善等方面取得进展。社区讨论聚焦于升级兼容性、技能管理、WebUI 体验及飞书渠道问题，整体项目处于高反馈驱动的开发节奏中。

---

## 2. 版本发布

**无新版本发布**。当前最新稳定版本仍为 `v0.1.0.post1`，但多个修复与增强 PR 正在合并流程中，预计将很快形成补丁更新。

---

## 3. 项目进展

今日有 **4个 PR 被合并或关闭**，推动关键问题修复与文档完善：

- ✅ **#1991**：修复自定义频道因配置为 `dict` 类型导致无法启动的问题（`ChannelManager` 中 `getattr` 误用），解决了 #1987 报告的核心缺陷。  
  🔗 [PR #1991](https://github.com/agentscope-ai/CoPaw/pull/1991)

- ✅ **#1995 / #1994**：新增 Windows 下端口 8088 冲突的 FAQ 文档（中英文），帮助用户规避 Docker 部署时的 Hyper-V/WSL2 端口保留问题，回应 #1485 的长期困扰。  
  🔗 [PR #1995](https://github.com/agentscope-ai/CoPaw/pull/1995) | [PR #1994](https://github.com/agentscope-ai/CoPaw/pull/1994)

- ✅ **#1996**：添加模型选择功能（具体实现未详述，可能涉及 UI 或配置层增强）。  
  🔗 [PR #1996](https://github.com/agentscope-ai/CoPaw/pull/1996)

此外，**#2010**（新增故障排查、Embedding 配置、用例示例三份中文文档）虽未合并但已提交，显著提升中文用户支持能力，预计将加速采纳。

---

## 4. 社区热点

以下 Issues 引发高度关注，反映用户核心痛点：

- 🔥 **#1976**（14 评论）：`Task has been cancelled!` 运行时错误，虽标注“已在 #1956 修复”，但用户仍频繁遭遇，表明修复未完全覆盖或存在回归。  
  🔗 [Issue #1976](https://github.com/agentscope-ai/CoPaw/issues/1976)

- 🔥 **#2023**（12 评论）：v1.0 升级后自定义技能丢失且记忆清空，Docker 用户集中反馈，暴露版本迁移机制缺失。  
  🔗 [Issue #2023](https://github.com/agentscope-ai/CoPaw/issues/2023)

- 🔥 **#1345**（10 评论）：飞书频道“延迟回复”问题（答非所问、消息错位），长期未解，严重影响生产环境可用性。  
  🔗 [Issue #1345](https://github.com/agentscope-ai/CoPaw/issues/1345)

- 🔥 **#1960**（7 评论）：Web Console 聊天界面输出嵌套 JSON，破坏用户体验，疑似消息渲染逻辑缺陷。  
  🔗 [Issue #1960](https://github.com/agentscope-ai/CoPaw/issues/1960)

这些议题共同指向 **升级兼容性、状态一致性、UI/UX 稳定性** 三大挑战。

---

## 5. Bug 与稳定性

按严重程度排序的关键 Bug：

| 严重度 | Issue | 描述 | 是否有 Fix PR |
|--------|-------|------|----------------|
| 🔴 高 | #2023 | v0.1.0 升级后技能与记忆丢失（Docker 环境） | ❌ 无 |
| 🔴 高 | #1345 | 飞书频道延迟回复（消息错位） | ❌ 无 |
| 🔴 高 | #2034 | WebUI 聊天历史刷新后丢失 | ❌ 无 |
| 🟠 中 | #1976 | `Task has been cancelled!` 运行时错误 | ⚠️ 声称已修复但未根治 |
| 🟠 中 | #1960 | Web Console 输出非法嵌套 JSON | ❌ 无 |
| 🟠 中 | #1935 | `write_file` 在 Windows 写 CSV 中文乱码 | ❌ 无 |
| 🟢 低 | #2015 | `active_skills` 与 `customized_skills` 不同步 | ❌ 无 |

> 注：#1950（JSONDecodeError）虽已关闭，但用户反馈会话文件被清空，暗示底层存储可靠性问题。

---

## 6. 功能请求与路线图信号

用户明确提出以下新功能需求，部分已有对应 PR：

- **多智能体协同与技能共享**：#2032 请求全局技能目录支持多智能体共享技能，#2035 询问多 Bot 绑定与协作机制 —— 反映向企业级多 Agent 场景演进的需求。  
  🔗 [Issue #2032](https://github.com/agentscope-ai/CoPaw/issues/2032) | [Issue #2035](https://github.com/agentscope-ai/CoPaw/issues/2035)

- **移动端适配**：#2026 建议优化手机浏览器访问 Console 的布局，提升移动办公体验。  
  🔗 [Issue #2026](https://github.com/agentscope-ai/CoPaw/issues/2026)

- **工具增强**：#2004 要求 `write_file` 支持中文路径与子目录；#1986 已为 QQ 渠道添加文件发送功能（PR 待合并）。  
  🔗 [Issue #2004](https://github.com/agentscope-ai/CoPaw/issues/2004) | [PR #1986](https://github.com/agentscope-ai/CoPaw/pull/1986)

- **LLM 重试配置**：#2002 暴露 LLM 自动重试参数至控制台，提升容错可控性（PR 待合并）。  
  🔗 [PR #2002](https://github.com/agentscope-ai/CoPaw/pull/2002)

预计 **多智能体工作流（#1952）、全局技能管理、移动端适配** 将成为下一版本重点。

---

## 7. 用户反馈摘要

- **痛点**：
  - 升级至 v0.1.0 后配置/技能/记忆丢失（Docker 用户尤甚），缺乏迁移指南。
  - WebUI 体验退化：版本号显示错误（#1967）、聊天历史不持久化（#2034）、JSON 污染输出（#1960）。
  - 飞书渠道消息处理不可靠（#1345、#1403），影响企业集成信心。
  - Windows 下编码与路径问题频发（#1935、#2004）。

- **满意点**：
  - 工具守卫（Tool Guard）审批流程设计获认可（#2009 讨论中提及）。
  - 文档逐步完善（#2010 受期待），中文支持改善。

- **使用场景**：
  - 企业通过飞书部署 Bot 用于内部协作。
  - 开发者使用 `write_file`、`execute_shell_command` 构建自动化脚本。
  - 多智能体实验性探索（#2035）。

---

## 8. 待处理积压

以下重要 Issue 长期未响应，需维护者优先关注：

- ⏳ **#1345**（飞书延迟回复）：自 2026-03-12 起，10 评论，无维护者回应，属高影响渠道 Bug。  
  🔗 [Issue #1345](https://github.com/agentscope-ai/CoPaw/issues/1345)

- ⏳ **#1403**（飞书消息去重）：自 2026-03-13 起，3 评论，未处理。  
  🔗 [Issue #1403](https://github.com/agentscope-ai/CoPaw/issues/1403)

- ⏳ **#1131**（PowerShell 错误捕获）：自 2026-03-10 起，2 评论，涉及 Windows 平台稳定性。  
  🔗 [Issue #1131](https://github.com/agentscope-ai/CoPaw/issues/1131)

- ⏳ **#1306**（飞书 bot_prefix 默认 [BOT] 前缀）：自 2026-03-12 起，1 评论，UI/UX 细节问题。  
  🔗 [Issue #1306](https://github.com/agentscope-ai/CoPaw/issues/1306)

> 建议：建立渠道（Channel）专项修复周期，集中解决飞书相关问题，以稳定企业用户基础。

--- 

**报告生成时间**：2026-03-22  
**数据来源**：GitHub CoPaw 仓库 Issues & PRs（2026-03-21 00:00 至 23:59 UTC+8）

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

**EasyClaw 项目动态日报**  
📅 日期：2026年3月22日  
🔗 项目主页：[github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

### 1. **今日速览**

过去24小时内，EasyClaw 项目整体活跃度较低，无新 Pull Request 提交，社区互动趋于平稳。共关闭 2 条 Issues，均为用户反馈类问题，且均已得到响应与解决。值得注意的是，项目在近期密集发布了三个新版本（v1.7.3–v1.7.5），表明开发团队正专注于稳定性修复与兼容性优化。尽管无新功能合并，但高频版本迭代反映出对用户体验问题的快速响应能力，项目健康度良好。

---

### 2. **版本发布**

过去24小时内共发布 **3 个新版本**，均为小版本更新，聚焦于系统兼容性与错误修复：

- **v1.7.5**（[Release 链接](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.5)）  
  主要更新：优化 macOS Gatekeeper 提示处理逻辑，提供更清晰的安装指引；修复 Windows 平台下因 JSON 解析异常导致的启动崩溃问题（关联 Issue #25）。

- **v1.7.4**（[Release 链接](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.4)）  
  修复多浏览器同步功能在离线状态下的数据丢失问题；增强“工具链”模块的输入校验机制，避免空数组触发 400 错误。

- **v1.7.3**（[Release 链接](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.3)）  
  初步解决 Windows 11 上因权限不足导致的配置文件写入失败问题；更新中文文档中的安装说明，明确 Gatekeeper 报错为非实质性损坏。

> ⚠️ **迁移注意事项**：  
> 所有版本均为向前兼容更新，无需用户手动迁移数据。建议 Windows 用户升级至 v1.7.4 或更高版本以避免“tools is too short”错误；macOS 用户若遇“已损坏”提示，请按 Release 说明通过 Terminal 执行 `xattr -cr` 命令解除隔离。

---

### 3. **项目进展**

今日无 Pull Request 合并或关闭，开发活动集中于版本发布与 Issue 响应。结合近期版本迭代节奏判断，团队当前工作重点为 **稳定性维护与跨平台兼容性修复**，尚未进入新功能开发阶段。项目整体处于“维护优化期”，技术债务逐步清理中。

---

### 4. **社区热点**

过去24小时最活跃的讨论集中于以下两个已关闭 Issue：

- **#22：“多浏览器”功能是指多用户还是多平台一致？登录和不登录有哪些影响？**  
  🔗 [Issue #22](https://github.com/gaoyangz77/rivonclaw/issues/22)  
  用户 @slowayear 提出对“多浏览器”功能语义的困惑，关注点在于数据同步范围（跨设备 vs 多账号）及登录态对功能权限的影响。维护者在评论中澄清：该功能目前仅支持**同一账号在不同浏览器间的配置同步**，未登录状态下仅保留本地缓存，无法跨设备恢复。此问题反映用户对**数据一致性与账户体系**的高度关注。

- **#25：Windows11系统，1.7.2版本，发生“400 [] is too short - 'tools'”错误**  
  🔗 [Issue #25](https://github.com/gaoyangz77/rivonclaw/issues/25)  
  用户报告在特定操作路径下触发 API 参数校验失败。维护者确认系前端未对空工具链数组做预检所致，已在 v1.7.4 中修复。该问题暴露了**输入边界条件覆盖不足**的测试盲区。

两 Issue 均获快速响应并在24小时内关闭，体现团队对核心用户体验问题的高度重视。

---

### 5. **Bug 与稳定性**

| 严重程度 | 问题描述 | 状态 | 关联版本/PR |
|--------|--------|------|------------|
| ⚠️ 中 | Windows 11 下因空工具链数组触发 “400 [] is too short - 'tools'” 错误 | ✅ 已修复 | v1.7.4 已发布 |
| ⚠️ 中 | macOS Gatekeeper 误报应用“已损坏”，阻碍正常启动 | ✅ 已缓解（文档+指引） | v1.7.3–v1.7.5 提供解决方案 |
| ⚠️ 低 | 离线状态下多浏览器同步数据丢失 | ✅ 已修复 | v1.7.4 已发布 |

> 注：所有已知关键 Bug 均已纳入近期版本修复，暂无未响应的高危问题。

---

### 6. **功能请求与路线图信号**

本期 Issues 中未出现明确的新功能请求，但 #22 中用户对“登录态影响功能权限”的追问，暗示社区对**账户系统与云同步能力**存在潜在需求。结合项目近期聚焦本地稳定性而非云端扩展的行为判断，**短期内 unlikely 推出多用户或跨账号同步功能**。建议维护者可在 Roadmap 中明确“数据同步边界”设计原则，管理用户预期。

---

### 7. **用户反馈摘要**

从 Issues 评论提炼关键用户声音：

- **痛点**：  
  - macOS 用户普遍受 Gatekeeper 机制困扰，虽知非真实损坏，但仍需额外操作才能运行，**安装体验受阻**。  
  - Windows 用户对 obscure error message（如“tools is too short”）感到困惑，**缺乏友好错误提示**。

- **满意点**：  
  - 多浏览器配置同步功能被认可为“提升工作效率的关键特性”（#22 评论）。  
  - 用户赞赏团队“响应迅速，版本更新及时”（#25 评论）。

- **使用场景**：  
  主要集中于**跨平台开发环境配置管理**，用户期望在办公室（Windows）与家用（macOS）设备间无缝切换工具链。

---

### 8. **待处理积压**

经扫描 Issues 列表，**无长期未响应（>7天）的重要 Issue 或 PR**。所有开放 Issue 均处于待分类或低优先级状态，当前积压健康。建议维护者定期归档已解决但未关闭的讨论，保持 Issue 列表整洁。

---  
📊 **总结**：EasyClaw 正处于稳健维护阶段，通过高频小版本发布快速响应用户反馈，核心功能稳定性显著提升。社区互动积极，用户满意度较高。下一步可考虑增强错误提示友好性与文档可视化，进一步降低使用门槛。

</details>

---
*本日报由 [Radar Forge](https://github.com/borq168/radar-forge) 自动生成。*